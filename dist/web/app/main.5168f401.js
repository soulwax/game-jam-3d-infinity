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
if(a[b]!==s){A.Hg(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xN(b)
return new s(c,this)}:function(){if(s===null)s=A.xN(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xN(a).prototype
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
xS(a,b,c,d){return{i:a,p:b,e:c,x:d}},
vL(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.xQ==null){A.GU()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.z0("Return interceptor for "+A.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tS
if(o==null)o=$.tS=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.H_(a)
if(p!=null)return p
if(typeof a=="function")return B.i9
s=Object.getPrototypeOf(a)
if(s==null)return B.dp
if(s===Object.prototype)return B.dp
if(typeof q=="function"){o=$.tS
if(o==null)o=$.tS=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bR,enumerable:false,writable:true,configurable:true})
return B.bR}return B.bR},
yv(a,b){if(a<0||a>4294967295)throw A.d(A.aW(a,0,4294967295,"length",null))
return J.yx(new Array(a),b)},
yw(a,b){if(a<0)throw A.d(A.z("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
km(a,b){if(a<0)throw A.d(A.z("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("u<0>"))},
yx(a,b){var s=A.e(a,b.i("u<0>"))
s.$flags=1
return s},
CH(a,b){var s=t.hO
return J.y7(s.a(a),s.a(b))},
yz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
CI(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.yz(r))break;++b}return b},
CJ(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.yz(q))break}return b},
er(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hO.prototype
return J.ko.prototype}if(typeof a=="string")return J.e1.prototype
if(a==null)return J.hP.prototype
if(typeof a=="boolean")return J.kn.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dv.prototype
if(typeof a=="symbol")return J.fH.prototype
if(typeof a=="bigint")return J.fG.prototype
return a}if(a instanceof A.G)return a
return J.vL(a)},
aE(a){if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dv.prototype
if(typeof a=="symbol")return J.fH.prototype
if(typeof a=="bigint")return J.fG.prototype
return a}if(a instanceof A.G)return a
return J.vL(a)},
cc(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dv.prototype
if(typeof a=="symbol")return J.fH.prototype
if(typeof a=="bigint")return J.fG.prototype
return a}if(a instanceof A.G)return a
return J.vL(a)},
GQ(a){if(typeof a=="number")return J.eJ.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.ea.prototype
return a},
AJ(a){if(typeof a=="number")return J.eJ.prototype
if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.ea.prototype
return a},
AK(a){if(typeof a=="string")return J.e1.prototype
if(a==null)return a
if(!(a instanceof A.G))return J.ea.prototype
return a},
GR(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dv.prototype
if(typeof a=="symbol")return J.fH.prototype
if(typeof a=="bigint")return J.fG.prototype
return a}if(a instanceof A.G)return a
return J.vL(a)},
y6(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.AJ(a).a7(a,b)},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.er(a).a3(a,b)},
aG(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.GZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).h(a,b)},
bk(a,b,c){return J.cc(a).k(a,b,c)},
fh(a,b){return J.cc(a).l(a,b)},
Bv(a,b){return J.AK(a).hV(a,b)},
wy(a,b){return J.cc(a).N(a,b)},
Bw(a,b,c){return J.GR(a).hX(a,b,c)},
Bx(a,b){return J.cc(a).d1(a,b)},
y7(a,b){return J.AJ(a).F(a,b)},
y8(a,b){return J.aE(a).q(a,b)},
mL(a,b){return J.cc(a).a1(a,b)},
By(a,b){return J.cc(a).aa(a,b)},
y9(a){return J.cc(a).gS(a)},
aC(a){return J.er(a).gI(a)},
mM(a){return J.aE(a).gO(a)},
Bz(a){return J.aE(a).gY(a)},
S(a){return J.cc(a).gu(a)},
cd(a){return J.aE(a).gt(a)},
fi(a){return J.er(a).ga6(a)},
ya(a,b){return J.cc(a).a_(a,b)},
fj(a,b,c){return J.cc(a).cC(a,b,c)},
BA(a,b){return J.aE(a).st(a,b)},
BB(a,b){return J.cc(a).U(a,b)},
BC(a,b){return J.AK(a).b3(a,b)},
wz(a,b){return J.GQ(a).pR(a,b)},
di(a){return J.er(a).p(a)},
BD(a,b){return J.cc(a).fh(a,b)},
kk:function kk(){},
kn:function kn(){},
hP:function hP(){},
hR:function hR(){},
e2:function e2(){},
kK:function kK(){},
ea:function ea(){},
dv:function dv(){},
fG:function fG(){},
fH:function fH(){},
u:function u(a){this.$ti=a},
kl:function kl(){},
py:function py(a){this.$ti=a},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eJ:function eJ(){},
hO:function hO(){},
ko:function ko(){},
e1:function e1(){}},A={wG:function wG(){},
vG(){return $},
BR(a,b,c){if(t.he.b(a))return new A.iD(a,b.i("@<0>").L(c).i("iD<1,2>"))
return new A.ey(a,b.i("@<0>").L(c).i("ey<1,2>"))},
yD(a){return new A.eK("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.eK("Field '"+a+"' has not been initialized.")},
CL(a){return new A.eK("Field '"+a+"' has already been initialized.")},
vM(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aQ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ir(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eq(a,b,c){return a},
xR(a){var s,r
for(s=$.cb.length,r=0;r<s;++r)if(a===$.cb[r])return!0
return!1},
iq(a,b,c,d){A.kU(b,"start")
if(c!=null){A.kU(c,"end")
if(b>c)A.j(A.aW(b,0,c,"start",null))}return new A.ip(a,b,c,d.i("ip<0>"))},
kv(a,b,c,d){if(t.he.b(a))return new A.dn(a,b,c.i("@<0>").L(d).i("dn<1,2>"))
return new A.cD(a,b,c.i("@<0>").L(d).i("cD<1,2>"))},
cB(){return new A.fU("No element")},
yu(){return new A.fU("Too many elements")},
l2(a,b,c,d,e){if(c-b<=32)A.Dm(a,b,c,d,e)
else A.Dl(a,b,c,d,e)},
Dm(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aE(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.av()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
Dl(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.R(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.R(a4+a5,2),f=g-j,e=g+j,d=J.aE(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.av()
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
A.l2(a3,a4,r-2,a6,a7)
A.l2(a3,q+2,a5,a6,a7)
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
break}}A.l2(a3,r,q,a6,a7)}else A.l2(a3,r,q,a6,a7)},
ed:function ed(){},
hv:function hv(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b){this.a=a
this.$ti=b},
iD:function iD(a,b){this.a=a
this.$ti=b},
iB:function iB(){},
tB:function tB(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.$ti=b},
eK:function eK(a){this.a=a},
dV:function dV(a){this.a=a},
r8:function r8(){},
T:function T(){},
a5:function a5(){},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
hW:function hW(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hD:function hD(a){this.$ti=a},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
ix:function ix(a,b){this.a=a
this.$ti=b},
aw:function aw(){},
d5:function d5(){},
fW:function fW(){},
ig:function ig(a,b){this.a=a
this.$ti=b},
j7:function j7(){},
b7(a,b,c){var s,r,q,p,o,n,m,l=A.at(a.ga2(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.t)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.at(a.gaG(),!0,c)
m=new A.a4(q,n,b.i("@<0>").L(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.hx(A.aO(a,b,c),b.i("@<0>").L(c).i("hx<1,2>"))},
BX(){throw A.d(A.b_("Cannot modify unmodifiable Map"))},
BY(){throw A.d(A.b_("Cannot modify constant Set"))},
B1(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
GZ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
x(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.di(a)
return s},
i8(a){var s,r=$.yL
if(r==null)r=$.yL=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dy(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eO(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bo(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kQ(a){var s,r,q,p
if(a instanceof A.G)return A.bN(A.bY(a),null)
s=J.er(a)
if(s===B.i8||s===B.ia||t.qF.b(a)){r=B.ca(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bN(A.bY(a),null)},
yM(a){var s,r,q
if(a==null||typeof a=="number"||A.bX(a))return J.di(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dU)return a.p(0)
if(a instanceof A.bx)return a.hN(!0)
s=$.Bq()
for(r=0;r<1;++r){q=s[r].pT(a)
if(q!=null)return q}return"Instance of '"+A.kQ(a)+"'"},
CZ(){return Date.now()},
D7(){var s,r
if($.qA!==0)return
$.qA=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qA=1e6
$.qB=new A.qz(r)},
CY(){if(!!self.location)return self.location.href
return null},
D8(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
az(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.ca(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aW(a,0,1114111,null,null))},
fN(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
D6(a){var s=A.fN(a).getUTCFullYear()+0
return s},
D4(a){var s=A.fN(a).getUTCMonth()+1
return s},
D0(a){var s=A.fN(a).getUTCDate()+0
return s},
D1(a){var s=A.fN(a).getUTCHours()+0
return s},
D3(a){var s=A.fN(a).getUTCMinutes()+0
return s},
D5(a){var s=A.fN(a).getUTCSeconds()+0
return s},
D2(a){var s=A.fN(a).getUTCMilliseconds()+0
return s},
D_(a){var s=a.$thrownJsError
if(s==null)return null
return A.cM(s)},
yN(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aF(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
jq(a){throw A.d(A.xM(a))},
f(a,b){if(a==null)J.cd(a)
throw A.d(A.vI(a,b))},
vI(a,b){var s,r="index"
if(!A.aN(b))return new A.cw(!0,b,r,null)
s=A.b(J.cd(a))
if(b<0||b>=s)return A.po(b,s,a,r)
return A.yP(b,r)},
GK(a,b,c){if(a>c)return A.aW(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aW(b,a,c,"end",null)
return new A.cw(!0,b,"end",null)},
xM(a){return new A.cw(!0,a,null,null)},
d(a){return A.aF(a,new Error())},
aF(a,b){var s
if(a==null)a=new A.dE()
b.dartException=a
s=A.Hj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Hj(){return J.di(this.dartException)},
j(a,b){throw A.aF(a,b==null?new Error():b)},
bO(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.F0(a,b,c),s)},
F0(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.it("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.d(A.av(a))},
dF(a){var s,r,q,p,o,n
a=A.AW(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.t4(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
t5(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
z_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
wH(a,b){var s=b==null,r=s?null:b.method
return new A.kp(a,r,s?null:b.receiver)},
aj(a){var s
if(a==null)return new A.qd(a)
if(a instanceof A.hE){s=a.a
return A.es(a,s==null?A.fb(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.es(a,a.dartException)
return A.Gi(a)},
es(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Gi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.ca(r,16)&8191)===10)switch(q){case 438:return A.es(a,A.wH(A.x(s)+" (Error "+q+")",null))
case 445:case 5007:A.x(s)
return A.es(a,new A.i3())}}if(a instanceof TypeError){p=$.B4()
o=$.B5()
n=$.B6()
m=$.B7()
l=$.Ba()
k=$.Bb()
j=$.B9()
$.B8()
i=$.Bd()
h=$.Bc()
g=p.b0(s)
if(g!=null)return A.es(a,A.wH(A.v(s),g))
else{g=o.b0(s)
if(g!=null){g.method="call"
return A.es(a,A.wH(A.v(s),g))}else if(n.b0(s)!=null||m.b0(s)!=null||l.b0(s)!=null||k.b0(s)!=null||j.b0(s)!=null||m.b0(s)!=null||i.b0(s)!=null||h.b0(s)!=null){A.v(s)
return A.es(a,new A.i3())}}return A.es(a,new A.ld(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.il()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.es(a,new A.cw(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.il()
return a},
cM(a){var s
if(a instanceof A.hE)return a.b
if(a==null)return new A.iW(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iW(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mI(a){if(a==null)return J.aC(a)
if(typeof a=="object")return A.i8(a)
return J.aC(a)},
GE(a){if(typeof a=="number")return B.c.gI(a)
if(a instanceof A.md)return A.i8(a)
if(a instanceof A.bx)return a.gI(a)
return A.mI(a)},
AH(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
GP(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Fr(a,b,c,d,e,f){t.BO.a(a)
switch(A.b(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.fC("Unsupported number of arguments for wrapped closure"))},
hn(a,b){var s=a.$identity
if(!!s)return s
s=A.GF(a,b)
a.$identity=s
return s},
GF(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Fr)},
BW(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.l6().constructor.prototype):Object.create(new A.fp(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.yg(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.BS(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.yg(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
BS(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.BN)}throw A.d("Error in functionType of tearoff")},
BT(a,b,c,d){var s=A.yf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
yg(a,b,c,d){if(c)return A.BV(a,b,d)
return A.BT(b.length,d,a,b)},
BU(a,b,c,d){var s=A.yf,r=A.BO
switch(b?-1:a){case 0:throw A.d(new A.kY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
BV(a,b,c){var s,r
if($.yd==null)$.yd=A.yc("interceptor")
if($.ye==null)$.ye=A.yc("receiver")
s=b.length
r=A.BU(s,c,a,b)
return r},
xN(a){return A.BW(a)},
BN(a,b){return A.j_(v.typeUniverse,A.bY(a.a),b)},
yf(a){return a.a},
BO(a){return a.b},
yc(a){var s,r,q,p=new A.fp("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.z("Field name "+a+" not found.",null))},
AL(a){return v.getIsolateTag(a)},
B_(){return v.G},
Ic(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
H_(a){var s,r,q,p,o,n=A.v($.AM.$1(a)),m=$.vJ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vQ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aD($.AC.$2(a,n))
if(q!=null){m=$.vJ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vQ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.wj(s)
$.vJ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vQ[n]=s
return s}if(p==="-"){o=A.wj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.AU(a,s)
if(p==="*")throw A.d(A.z0(n))
if(v.leafTags[n]===true){o=A.wj(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.AU(a,s)},
AU(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xS(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
wj(a){return J.xS(a,!1,null,!!a.$ic0)},
H1(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.wj(s)
else return J.xS(s,c,null,null)},
GU(){if(!0===$.xQ)return
$.xQ=!0
A.GV()},
GV(){var s,r,q,p,o,n,m,l
$.vJ=Object.create(null)
$.vQ=Object.create(null)
A.GT()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.AV.$1(o)
if(n!=null){m=A.H1(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
GT(){var s,r,q,p,o,n,m=B.ep()
m=A.hm(B.eq,A.hm(B.er,A.hm(B.cb,A.hm(B.cb,A.hm(B.es,A.hm(B.et,A.hm(B.eu(B.ca),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.AM=new A.vN(p)
$.AC=new A.vO(o)
$.AV=new A.vP(n)},
hm(a,b){return a(b)||b},
E2(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a3(r,b[s]))return!1}return!0},
GH(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yA(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a6("Illegal RegExp pattern ("+String(o)+")",a,null))},
Hd(a,b,c){var s=a.indexOf(b,c)
return s>=0},
GN(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
AW(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xU(a,b,c){var s=A.He(a,b,c)
return s},
He(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.AW(b),"g"),A.GN(c))},
aX:function aX(a,b){this.a=a
this.b=b},
f9:function f9(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
hx:function hx(a,b){this.a=a
this.$ti=b},
fv:function fv(){},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
f5:function f5(a,b){this.a=a
this.$ti=b},
f6:function f6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cT:function cT(a,b){this.a=a
this.$ti=b},
hy:function hy(){},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
qz:function qz(a){this.a=a},
ih:function ih(){},
t4:function t4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i3:function i3(){},
kp:function kp(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a){this.a=a},
qd:function qd(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a
this.b=null},
dU:function dU(){},
jI:function jI(){},
jJ:function jJ(){},
l9:function l9(){},
l6:function l6(){},
fp:function fp(a,b){this.a=a
this.b=b},
kY:function kY(a){this.a=a},
cj:function cj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pH:function pH(a){this.a=a},
pT:function pT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ad:function ad(a,b){this.a=a
this.$ti=b},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ax:function ax(a,b){this.a=a
this.$ti=b},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
K:function K(a,b){this.a=a
this.$ti=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hS:function hS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vN:function vN(a){this.a=a},
vO:function vO(a){this.a=a},
vP:function vP(a){this.a=a},
bx:function bx(){},
eh:function eh(){},
ei:function ei(){},
h_:function h_(){},
hQ:function hQ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lR:function lR(a){this.b=a},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
io:function io(a,b){this.a=a
this.c=b},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
ma:function ma(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Hg(a){throw A.aF(A.yD(a),new Error())},
h(){throw A.aF(A.a9(""),new Error())},
L(){throw A.aF(A.CL(""),new Error())},
B0(){throw A.aF(A.yD(""),new Error())},
a8(){var s=new A.tC()
return s.b=s},
tC:function tC(){this.b=null},
zS(a,b,c){},
a2(a){return a},
CS(a,b,c){A.zS(a,b,c)
return new Float32Array(a,b,c)},
CT(a){return new Int8Array(a)},
CU(a){return new Uint8Array(a)},
kG(a){return new Uint8Array(A.a2(a))},
dL(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.vI(b,a))},
EP(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.GK(a,b,c))
return b},
e3:function e3(){},
fL:function fL(){},
i1:function i1(){},
ue:function ue(a){this.a=a},
kz:function kz(){},
b8:function b8(){},
i_:function i_(){},
i0:function i0(){},
hZ:function hZ(){},
kA:function kA(){},
kB:function kB(){},
kC:function kC(){},
kD:function kD(){},
kE:function kE(){},
kF:function kF(){},
eM:function eM(){},
i2:function i2(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
wV(a,b){var s=b.c
return s==null?b.c=A.iY(a,"c_",[b.x]):s},
yS(a){var s=a.w
if(s===6||s===7)return A.yS(a.x)
return s===11||s===12},
Dg(a){return a.as},
H2(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a_(a){return A.ud(v.typeUniverse,a,!1)},
fd(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fd(a1,s,a3,a4)
if(r===s)return a2
return A.zp(a1,r,!0)
case 7:s=a2.x
r=A.fd(a1,s,a3,a4)
if(r===s)return a2
return A.zo(a1,r,!0)
case 8:q=a2.y
p=A.hl(a1,q,a3,a4)
if(p===q)return a2
return A.iY(a1,a2.x,p)
case 9:o=a2.x
n=A.fd(a1,o,a3,a4)
m=a2.y
l=A.hl(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.x5(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hl(a1,j,a3,a4)
if(i===j)return a2
return A.zq(a1,k,i)
case 11:h=a2.x
g=A.fd(a1,h,a3,a4)
f=a2.y
e=A.Ge(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.zn(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hl(a1,d,a3,a4)
o=a2.x
n=A.fd(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.x6(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.jz("Attempted to substitute unexpected RTI kind "+a0))}},
hl(a,b,c,d){var s,r,q,p,o=b.length,n=A.ui(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fd(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Gf(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ui(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fd(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Ge(a,b,c,d){var s,r=b.a,q=A.hl(a,r,c,d),p=b.b,o=A.hl(a,p,c,d),n=b.c,m=A.Gf(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lK()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
xO(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.GS(s)
return a.$S()}return null},
GW(a,b){var s
if(A.yS(b))if(a instanceof A.dU){s=A.xO(a)
if(s!=null)return s}return A.bY(a)},
bY(a){if(a instanceof A.G)return A.r(a)
if(Array.isArray(a))return A.F(a)
return A.xp(J.er(a))},
F(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
r(a){var s=a.$ti
return s!=null?s:A.xp(a)},
xp(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Fo(a,s)},
Fo(a,b){var s=a instanceof A.dU?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Ec(v.typeUniverse,s.name)
b.$ccache=r
return r},
GS(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ud(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mG(a){return A.df(A.r(a))},
xI(a){var s
if(a instanceof A.bx)return a.ha()
s=a instanceof A.dU?A.xO(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fi(a).a
if(Array.isArray(a))return A.F(a)
return A.bY(a)},
df(a){var s=a.r
return s==null?a.r=new A.md(a):s},
GO(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.f(q,0)
s=A.j_(v.typeUniverse,A.xI(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.zr(v.typeUniverse,s,A.xI(q[r]))}return A.j_(v.typeUniverse,s,a)},
cu(a){return A.df(A.ud(v.typeUniverse,a,!1))},
Fn(a){var s=this
s.b=A.G8(s)
return s.b(a)},
G8(a){var s,r,q,p,o
if(a===t.K)return A.Fx
if(A.fe(a))return A.FC
s=a.w
if(s===6)return A.Fe
if(s===1)return A.A5
if(s===7)return A.Fs
r=A.G7(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fe)){a.f="$i"+q
if(q==="D")return A.Fv
if(a===t.m)return A.Fu
return A.FB}}else if(s===10){p=A.GH(a.x,a.y)
o=p==null?A.A5:p
return o==null?A.fb(o):o}return A.Fc},
G7(a){if(a.w===8){if(a===t.S)return A.aN
if(a===t.i||a===t.o)return A.Fw
if(a===t.N)return A.FA
if(a===t.y)return A.bX}return null},
Fm(a){var s=this,r=A.Fb
if(A.fe(s))r=A.EJ
else if(s===t.K)r=A.fb
else if(A.ho(s)){r=A.Fd
if(s===t.lo)r=A.zM
else if(s===t.D)r=A.aD
else if(s===t.k7)r=A.EI
else if(s===t.s7)r=A.xc
else if(s===t.u6)r=A.zL
else if(s===t.uh)r=A.l}else if(s===t.S)r=A.b
else if(s===t.N)r=A.v
else if(s===t.y)r=A.R
else if(s===t.o)r=A.al
else if(s===t.i)r=A.bM
else if(s===t.m)r=A.c
s.a=r
return s.a(a)},
Fc(a){var s=this
if(a==null)return A.ho(s)
return A.AQ(v.typeUniverse,A.GW(a,s),s)},
Fe(a){if(a==null)return!0
return this.x.b(a)},
FB(a){var s,r=this
if(a==null)return A.ho(r)
s=r.f
if(a instanceof A.G)return!!a[s]
return!!J.er(a)[s]},
Fv(a){var s,r=this
if(a==null)return A.ho(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.G)return!!a[s]
return!!J.er(a)[s]},
Fu(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.G)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
A4(a){if(typeof a=="object"){if(a instanceof A.G)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Fb(a){var s=this
if(a==null){if(A.ho(s))return a}else if(s.b(a))return a
throw A.aF(A.zT(a,s),new Error())},
Fd(a){var s=this
if(a==null||s.b(a))return a
throw A.aF(A.zT(a,s),new Error())},
zT(a,b){return new A.h4("TypeError: "+A.zf(a,A.bN(b,null)))},
AF(a,b,c,d){if(A.AQ(v.typeUniverse,a,b))return a
throw A.aF(A.E4("The type argument '"+A.bN(a,null)+"' is not a subtype of the type variable bound '"+A.bN(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
zf(a,b){return A.jY(a)+": type '"+A.bN(A.xI(a),null)+"' is not a subtype of type '"+b+"'"},
E4(a){return new A.h4("TypeError: "+a)},
cs(a,b){return new A.h4("TypeError: "+A.zf(a,b))},
Fs(a){var s=this
return s.x.b(a)||A.wV(v.typeUniverse,s).b(a)},
Fx(a){return a!=null},
fb(a){if(a!=null)return a
throw A.aF(A.cs(a,"Object"),new Error())},
FC(a){return!0},
EJ(a){return a},
A5(a){return!1},
bX(a){return!0===a||!1===a},
R(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aF(A.cs(a,"bool"),new Error())},
EI(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aF(A.cs(a,"bool?"),new Error())},
bM(a){if(typeof a=="number")return a
throw A.aF(A.cs(a,"double"),new Error())},
zL(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cs(a,"double?"),new Error())},
aN(a){return typeof a=="number"&&Math.floor(a)===a},
b(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aF(A.cs(a,"int"),new Error())},
zM(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aF(A.cs(a,"int?"),new Error())},
Fw(a){return typeof a=="number"},
al(a){if(typeof a=="number")return a
throw A.aF(A.cs(a,"num"),new Error())},
xc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aF(A.cs(a,"num?"),new Error())},
FA(a){return typeof a=="string"},
v(a){if(typeof a=="string")return a
throw A.aF(A.cs(a,"String"),new Error())},
aD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aF(A.cs(a,"String?"),new Error())},
c(a){if(A.A4(a))return a
throw A.aF(A.cs(a,"JSObject"),new Error())},
l(a){if(a==null)return a
if(A.A4(a))return a
throw A.aF(A.cs(a,"JSObject?"),new Error())},
Aq(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bN(a[q],b)
return s},
FX(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Aq(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bN(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zX(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bN(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bN(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bN(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bN(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bN(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bN(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bN(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bN(a.x,b)+">"
if(l===8){p=A.Gh(a.x)
o=a.y
return o.length>0?p+("<"+A.Aq(o,b)+">"):p}if(l===10)return A.FX(a,b)
if(l===11)return A.zX(a,b,null)
if(l===12)return A.zX(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
Gh(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Ed(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Ec(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ud(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iZ(a,5,"#")
q=A.ui(s)
for(p=0;p<s;++p)q[p]=r
o=A.iY(a,b,q)
n[b]=o
return o}else return m},
Eb(a,b){return A.zz(a.tR,b)},
Ea(a,b){return A.zz(a.eT,b)},
ud(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.zk(A.zi(a,null,b,!1))
r.set(b,s)
return s},
j_(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.zk(A.zi(a,b,c,!0))
q.set(c,r)
return r},
zr(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.x5(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ek(a,b){b.a=A.Fm
b.b=A.Fn
return b},
iZ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cH(null,null)
s.w=b
s.as=c
r=A.ek(a,s)
a.eC.set(c,r)
return r},
zp(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.E8(a,b,r,c)
a.eC.set(r,s)
return s},
E8(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fe(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.ho(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cH(null,null)
q.w=6
q.x=b
q.as=c
return A.ek(a,q)},
zo(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.E6(a,b,r,c)
a.eC.set(r,s)
return s},
E6(a,b,c,d){var s,r
if(d){s=b.w
if(A.fe(b)||b===t.K)return b
else if(s===1)return A.iY(a,"c_",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cH(null,null)
r.w=7
r.x=b
r.as=c
return A.ek(a,r)},
E9(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cH(null,null)
s.w=13
s.x=b
s.as=q
r=A.ek(a,s)
a.eC.set(q,r)
return r},
iX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
E5(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iY(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iX(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cH(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ek(a,r)
a.eC.set(p,q)
return q},
x5(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iX(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cH(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ek(a,o)
a.eC.set(q,n)
return n},
zq(a,b,c){var s,r,q="+"+(b+"("+A.iX(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cH(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ek(a,s)
a.eC.set(q,r)
return r},
zn(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iX(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iX(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.E5(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cH(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ek(a,p)
a.eC.set(r,o)
return o},
x6(a,b,c,d){var s,r=b.as+("<"+A.iX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.E7(a,b,c,r,d)
a.eC.set(r,s)
return s},
E7(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ui(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fd(a,b,r,0)
m=A.hl(a,c,r,0)
return A.x6(a,n,m,c!==m)}}l=new A.cH(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ek(a,l)},
zi(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
zk(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.DY(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.zj(a,r,l,k,!1)
else if(q===46)r=A.zj(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f8(a.u,a.e,k.pop()))
break
case 94:k.push(A.E9(a.u,k.pop()))
break
case 35:k.push(A.iZ(a.u,5,"#"))
break
case 64:k.push(A.iZ(a.u,2,"@"))
break
case 126:k.push(A.iZ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.E_(a,k)
break
case 38:A.DZ(a,k)
break
case 63:p=a.u
k.push(A.zp(p,A.f8(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.zo(p,A.f8(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.DX(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.zl(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.E1(a.u,a.e,o)
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
return A.f8(a.u,a.e,m)},
DY(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
zj(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ed(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.Dg(o)+'"')
d.push(A.j_(s,o,n))}else d.push(p)
return m},
E_(a,b){var s,r=a.u,q=A.zh(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iY(r,p,q))
else{s=A.f8(r,a.e,p)
switch(s.w){case 11:b.push(A.x6(r,s,q,a.n))
break
default:b.push(A.x5(r,s,q))
break}}},
DX(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.zh(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f8(p,a.e,o)
q=new A.lK()
q.a=s
q.b=n
q.c=m
b.push(A.zn(p,r,q))
return
case-4:b.push(A.zq(p,b.pop(),s))
return
default:throw A.d(A.jz("Unexpected state under `()`: "+A.x(o)))}},
DZ(a,b){var s=b.pop()
if(0===s){b.push(A.iZ(a.u,1,"0&"))
return}if(1===s){b.push(A.iZ(a.u,4,"1&"))
return}throw A.d(A.jz("Unexpected extended operation "+A.x(s)))},
zh(a,b){var s=b.splice(a.p)
A.zl(a.u,a.e,s)
a.p=b.pop()
return s},
f8(a,b,c){if(typeof c=="string")return A.iY(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.E0(a,b,c)}else return c},
zl(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f8(a,b,c[s])},
E1(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f8(a,b,c[s])},
E0(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.jz("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.jz("Bad index "+c+" for "+b.p(0)))},
AQ(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aR(a,b,null,c,null)
r.set(c,s)}return s},
aR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fe(d))return!0
s=b.w
if(s===4)return!0
if(A.fe(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aR(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aR(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aR(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aR(a,b.x,c,d,e))return!1
return A.aR(a,A.wV(a,b),c,d,e)}if(s===6)return A.aR(a,p,c,d,e)&&A.aR(a,b.x,c,d,e)
if(q===7){if(A.aR(a,b,c,d.x,e))return!0
return A.aR(a,b,c,A.wV(a,d),e)}if(q===6)return A.aR(a,b,c,p,e)||A.aR(a,b,c,d.x,e)
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
if(!A.aR(a,j,c,i,e)||!A.aR(a,i,e,j,c))return!1}return A.A3(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.A3(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ft(a,b,c,d,e)}if(o&&q===10)return A.Fy(a,b,c,d,e)
return!1},
A3(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Ft(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j_(a,b,r[o])
return A.zJ(a,p,null,c,d.y,e)}return A.zJ(a,b.y,null,c,d.y,e)},
zJ(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aR(a,b[s],d,e[s],f))return!1
return!0},
Fy(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aR(a,r[s],c,q[s],e))return!1
return!0},
ho(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fe(a))if(s!==6)r=s===7&&A.ho(a.x)
return r},
fe(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
zz(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ui(a){return a>0?new Array(a):v.typeUniverse.sEA},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lK:function lK(){this.c=this.b=this.a=null},
md:function md(a){this.a=a},
lI:function lI(){},
h4:function h4(a){this.a=a},
DQ(){var s,r,q
if(self.scheduleImmediate!=null)return A.Gv()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hn(new A.tx(s),1)).observe(r,{childList:true})
return new A.tw(s,r,q)}else if(self.setImmediate!=null)return A.Gw()
return A.Gx()},
DR(a){self.scheduleImmediate(A.hn(new A.ty(t.O.a(a)),0))},
DS(a){self.setImmediate(A.hn(new A.tz(t.O.a(a)),0))},
DT(a){A.wY(B.f_,t.O.a(a))},
wY(a,b){return A.E3(a.a/1000|0,b)},
E3(a,b){var s=new A.ub()
s.l5(a,b)
return s},
bh(a){return new A.ly(new A.aA($.ar,a.i("aA<0>")),a.i("ly<0>"))},
bg(a,b){a.$2(0,null)
b.b=!0
return b.a},
ap(a,b){A.EL(a,b)},
bf(a,b){b.e6(a)},
be(a,b){b.e7(A.aj(a),A.cM(a))},
EL(a,b){var s,r,q=new A.up(b),p=new A.uq(b)
if(a instanceof A.aA)a.hL(q,p,t.z)
else{s=t.z
if(a instanceof A.aA)a.fd(q,p,s)
else{r=new A.aA($.ar,t.hR)
r.a=8
r.c=a
r.hL(q,p,s)}}},
bi(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.jN(new A.vD(s),t.H,t.S,t.z)},
zm(a,b,c){return 0},
n2(a){var s
if(t.yt.b(a)){s=a.gc2()
if(s!=null)return s}return B.au},
wD(a){var s
a.a(null)
s=new A.aA($.ar,a.i("aA<0>"))
s.dG(null)
return s},
Cr(a,b,c){var s=new A.aA($.ar,c.i("aA<0>"))
A.Dr(a,new A.ou(b,s,c))
return s},
ov(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aA($.ar,b.i("aA<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.ox(i,h,g,f)
try{for(n=J.S(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.fd(new A.ow(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cQ(A.e([],b.i("u<0>")))
return n}i.a=A.cY(n,null,!1,b.i("0?"))}catch(l){p=A.aj(l)
o=A.cM(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.xq(m,k)
m=new A.b4(m,k==null?A.n2(m):k)
n.cM(m)
return n}else{i.d=p
i.c=o}}return f},
xq(a,b){if($.ar===B.y)return null
return null},
Fp(a,b){if($.ar!==B.y)A.xq(a,b)
if(b==null)if(t.yt.b(a)){b=a.gc2()
if(b==null){A.yN(a,B.au)
b=B.au}}else b=B.au
else if(t.yt.b(a))A.yN(a,b)
return new A.b4(a,b)},
tI(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Dn()
b.cM(new A.b4(new A.cw(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.ho(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.c8()
b.cP(o.a)
A.f3(b,p)
return}b.a^=2
A.mC(null,null,b.b,t.O.a(new A.tJ(o,b)))},
f3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.xB(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.f3(d.a,c)
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
A.xB(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.tN(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tM(q,j).$0()}else if((c&2)!==0)new A.tL(d,q).$0()
if(g!=null)$.ar=g
c=q.c
if(c instanceof A.aA){p=q.a.$ti
p=p.i("c_<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cX(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.tI(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cX(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
FY(a,b){var s
if(t.nW.b(a))return b.jN(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.d(A.am(a,"onError",u.c))},
FM(){var s,r
for(s=$.hg;s!=null;s=$.hg){$.jj=null
r=s.b
$.hg=r
if(r==null)$.ji=null
s.a.$0()}},
Gb(){$.xr=!0
try{A.FM()}finally{$.jj=null
$.xr=!1
if($.hg!=null)$.y0().$1(A.AD())}},
Au(a){var s=new A.lz(a),r=$.ji
if(r==null){$.hg=$.ji=s
if(!$.xr)$.y0().$1(A.AD())}else $.ji=r.b=s},
G5(a){var s,r,q,p=$.hg
if(p==null){A.Au(a)
$.jj=$.ji
return}s=new A.lz(a)
r=$.jj
if(r==null){s.b=p
$.hg=$.jj=s}else{q=r.b
s.b=q
$.jj=r.b=s
if(q==null)$.ji=s}},
Hz(a,b){A.eq(a,"stream",t.K)
return new A.m8(b.i("m8<0>"))},
Dr(a,b){var s=$.ar
if(s===B.y)return A.wY(a,t.O.a(b))
return A.wY(a,t.O.a(s.hZ(b)))},
xB(a,b){A.G5(new A.vs(a,b))},
Ap(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
G3(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
G2(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
mC(a,b,c,d){t.O.a(d)
if(B.y!==c){d=c.hZ(d)
d=d}A.Au(d)},
tx:function tx(a){this.a=a},
tw:function tw(a,b,c){this.a=a
this.b=b
this.c=c},
ty:function ty(a){this.a=a},
tz:function tz(a){this.a=a},
ub:function ub(){},
uc:function uc(a,b){this.a=a
this.b=b},
ly:function ly(a,b){this.a=a
this.b=!1
this.$ti=b},
up:function up(a){this.a=a},
uq:function uq(a){this.a=a},
vD:function vD(a){this.a=a},
cL:function cL(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cr:function cr(a,b){this.a=a
this.$ti=b},
b4:function b4(a,b){this.a=a
this.b=b},
ou:function ou(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function ox(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ow:function ow(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lC:function lC(){},
iz:function iz(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aA:function aA(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tF:function tF(a,b){this.a=a
this.b=b},
tK:function tK(a,b){this.a=a
this.b=b},
tJ:function tJ(a,b){this.a=a
this.b=b},
tH:function tH(a,b){this.a=a
this.b=b},
tG:function tG(a,b){this.a=a
this.b=b},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
tO:function tO(a,b){this.a=a
this.b=b},
tP:function tP(a){this.a=a},
tM:function tM(a,b){this.a=a
this.b=b},
tL:function tL(a,b){this.a=a
this.b=b},
lz:function lz(a){this.a=a
this.b=null},
m8:function m8(a){this.$ti=a},
j6:function j6(){},
m0:function m0(){},
u9:function u9(a,b){this.a=a
this.b=b},
vs:function vs(a,b){this.a=a
this.b=b},
zg(a,b){var s=a[b]
return s===a?null:s},
x3(a,b,c){if(c==null)a[b]=a
else a[b]=c},
x2(){var s=Object.create(null)
A.x3(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
yF(a,b){return new A.cj(a.i("@<0>").L(b).i("cj<1,2>"))},
O(a,b,c){return b.i("@<0>").L(c).i("wI<1,2>").a(A.AH(a,new A.cj(b.i("@<0>").L(c).i("cj<1,2>"))))},
o(a,b){return new A.cj(a.i("@<0>").L(b).i("cj<1,2>"))},
wJ(a){return new A.cq(a.i("cq<0>"))},
a0(a){return new A.cq(a.i("cq<0>"))},
aL(a,b){return b.i("yG<0>").a(A.GP(a,new A.cq(b.i("cq<0>"))))},
x4(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iI(a,b,c){var s=new A.f7(a,b,c.i("f7<0>"))
s.c=a.e
return s},
bA(a,b){var s=J.S(a)
if(s.m())return s.gn()
return null},
aO(a,b,c){var s=A.yF(b,c)
a.aA(0,new A.pU(s,b,c))
return s},
fI(a,b,c){var s=A.yF(b,c)
s.J(0,a)
return s},
hU(a,b){var s,r=A.wJ(b)
for(s=J.S(a);s.m();)r.l(0,b.a(s.gn()))
return r},
ku(a,b){var s=A.wJ(b)
s.J(0,a)
return s},
CM(a,b){var s=t.hO
return J.y7(s.a(a),s.a(b))},
wK(a){var s,r
if(A.xR(a))return"{...}"
s=new A.bs("")
try{r={}
B.a.l($.cb,a)
s.a+="{"
r.a=!0
a.aA(0,new A.pX(r,s))
s.a+="}"}finally{if(0>=$.cb.length)return A.f($.cb,-1)
$.cb.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Ee(){throw A.d(A.b_("Cannot change an unmodifiable set"))},
iF:function iF(){},
tR:function tR(a){this.a=a},
iH:function iH(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
f4:function f4(a,b){this.a=a
this.$ti=b},
iG:function iG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cq:function cq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lQ:function lQ(a){this.a=a
this.c=this.b=null},
f7:function f7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pU:function pU(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(){},
aa:function aa(){},
pW:function pW(a){this.a=a},
pX:function pX(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.$ti=b},
iK:function iK(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
j0:function j0(){},
fJ:function fJ(){},
eb:function eb(a,b){this.a=a
this.$ti=b},
dA:function dA(){},
iV:function iV(){},
me:function me(){},
fX:function fX(a,b){this.a=a
this.$ti=b},
h5:function h5(){},
j1:function j1(){},
FQ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aj(r)
q=A.a6(String(s),null,null)
throw A.d(q)}q=A.uP(p)
return q},
uP(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lO(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uP(a[s])
return a},
Ev(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Bi()
else s=new Uint8Array(o)
for(r=J.aE(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Eu(a,b,c,d){var s=a?$.Bh():$.Bg()
if(s==null)return null
if(0===c&&d===b.length)return A.zy(s,b)
return A.zy(s,b.subarray(c,d))},
zy(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
yb(a,b,c,d,e,f){if(B.d.M(f,4)!==0)throw A.d(A.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a6("Invalid base64 padding, more than two '=' characters",a,b))},
yC(a,b,c){return new A.hT(a,b)},
F_(a){return a.B()},
DU(a,b){return new A.tU(a,[],A.GG())},
DV(a,b,c){var s,r=new A.bs(""),q=A.DU(r,b)
q.dq(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ew(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lO:function lO(a,b){this.a=a
this.b=b
this.c=null},
tT:function tT(a){this.a=a},
lP:function lP(a){this.a=a},
uh:function uh(){},
ug:function ug(){},
jC:function jC(){},
nw:function nw(){},
ez:function ez(){},
jO:function jO(){},
jX:function jX(){},
hT:function hT(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(){},
pJ:function pJ(a){this.b=a},
pI:function pI(a){this.a=a},
tV:function tV(){},
tW:function tW(a,b){this.a=a
this.b=b},
tU:function tU(a,b,c){this.c=a
this.a=b
this.b=c},
lh:function lh(){},
t9:function t9(a){this.a=a},
uf:function uf(a){this.a=a
this.b=16
this.c=0},
AP(a){var s=A.dy(a,null)
if(s!=null)return s
throw A.d(A.a6(a,null,null))},
AG(a){var s=A.eO(a)
if(s!=null)return s
throw A.d(A.a6("Invalid double",a,null))},
Cl(a,b){a=A.aF(a,new Error())
if(a==null)a=A.fb(a)
a.stack=b.p(0)
throw a},
cY(a,b,c,d){var s,r=c?J.yw(a,d):J.yv(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
at(a,b,c){var s,r=A.e([],c.i("u<0>"))
for(s=J.S(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("u<0>"))
s=A.e([],b.i("u<0>"))
for(r=J.S(a);r.m();)B.a.l(s,r.gn())
return s},
ag(a,b){var s=A.at(a,!1,b)
s.$flags=3
return s},
yY(a,b,c){var s,r
A.kU(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aW(c,b,null,"end",null))
if(s===0)return""}r=A.Dp(a,b,c)
return r},
Dp(a,b,c){var s=a.length
if(b>=s)return""
return A.D8(a,b,c==null||c>s?s:c)},
yQ(a){return new A.hQ(a,A.yA(a,!1,!0,!1,!1,""))},
wX(a,b,c){var s=J.S(b)
if(!s.m())return a
if(c.length===0){do a+=A.x(s.gn())
while(s.m())}else{a+=A.x(s.gn())
while(s.m())a=a+c+A.x(s.gn())}return a},
d6(){var s,r,q=A.CY()
if(q==null)throw A.d(A.b_("'Uri.base' is not supported"))
s=$.z3
if(s!=null&&q===$.z2)return s
r=A.Dx(q)
$.z3=r
$.z2=q
return r},
Dn(){return A.cM(new Error())},
C1(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
yi(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jQ(a){if(a>=10)return""+a
return"0"+a},
Ck(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.am(b,"name","No enum value with that name"))},
jY(a){if(typeof a=="number"||A.bX(a)||a==null)return J.di(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yM(a)},
Cm(a,b){A.eq(a,"error",t.K)
A.eq(b,"stackTrace",t.l)
A.Cl(a,b)},
jz(a){return new A.jy(a)},
z(a,b){return new A.cw(!1,null,b,a)},
am(a,b,c){return new A.cw(!0,a,b,c)},
yO(a){var s=null
return new A.fO(s,s,!1,s,s,a)},
yP(a,b){return new A.fO(null,null,!0,a,b,"Value not in range")},
aW(a,b,c,d,e){return new A.fO(b,c,!0,a,d,"Invalid value")},
i9(a,b,c){if(0>a||a>c)throw A.d(A.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aW(b,a,c,"end",null))
return b}return c},
kU(a,b){if(a<0)throw A.d(A.aW(a,0,null,b,null))
return a},
po(a,b,c,d){return new A.kh(b,!0,a,d,"Index out of range")},
b_(a){return new A.it(a)},
z0(a){return new A.lc(a)},
m(a){return new A.fU(a)},
av(a){return new A.jL(a)},
fC(a){return new A.tD(a)},
a6(a,b,c){return new A.H(a,b,c)},
CG(a,b,c){var s,r
if(A.xR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.cb,a)
try{A.FD(a,s)}finally{if(0>=$.cb.length)return A.f($.cb,-1)
$.cb.pop()}r=A.wX(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
wF(a,b,c){var s,r
if(A.xR(a))return b+"..."+c
s=new A.bs(b)
B.a.l($.cb,a)
try{r=s
r.a=A.wX(r.a,a,", ")}finally{if(0>=$.cb.length)return A.f($.cb,-1)
$.cb.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
FD(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.x(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.x(p))
return}r=A.x(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.x(p)
r=A.x(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
wL(a,b,c){var s=A.o(b,c)
s.mS(a)
return s},
cF(a,b,c,d,e,f){var s
if(B.f===c){s=J.aC(a)
b=J.aC(b)
return A.ir(A.aQ(A.aQ($.hq(),s),b))}if(B.f===d){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
return A.ir(A.aQ(A.aQ(A.aQ($.hq(),s),b),c))}if(B.f===e){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
return A.ir(A.aQ(A.aQ(A.aQ(A.aQ($.hq(),s),b),c),d))}if(B.f===f){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
e=J.aC(e)
return A.ir(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ($.hq(),s),b),c),d),e))}s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
e=J.aC(e)
f=J.aC(f)
f=A.ir(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ(A.aQ($.hq(),s),b),c),d),e),f))
return f},
CV(a){var s,r,q=$.hq()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q=A.aQ(q,J.aC(a[r]))
return A.ir(q)},
eV(a,b){return new A.fX(A.ku(a,b),b.i("fX<0>"))},
Dx(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.z1(a4<a4?B.b.G(a5,0,a4):a5,5,a3).gjU()
else if(s===32)return A.z1(B.b.G(a5,5,a4),0,a3).gjU()}r=A.cY(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.At(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.At(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ag(a5,"\\",n))if(p>0)h=B.b.ag(a5,"\\",p-1)||B.b.ag(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ag(a5,"..",n)))h=m>n+2&&B.b.ag(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ag(a5,"file",0)){if(p<=0){if(!B.b.ag(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.G(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bZ(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ag(a5,"http",0)){if(i&&o+3===n&&B.b.ag(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bZ(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ag(a5,"https",0)){if(i&&o+4===n&&B.b.ag(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bZ(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.m4(a4<a5.length?B.b.G(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Eo(a5,0,q)
else{if(q===0)A.h6(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Ep(a5,c,p-1):""
a=A.Ek(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dy(B.b.G(a5,i,n),a3)
d=A.Em(a0==null?A.j(A.a6("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.El(a5,n,m,a3,j,a!=null)
a2=m<l?A.En(a5,m+1,l,a3):a3
return A.Ef(j,b,a,d,a1,a2,l<a4?A.Ej(a5,l+1,a4):a3)},
z5(a){var s=t.N
return B.a.bD(A.e(a.split("&"),t.s),A.o(s,s),new A.t8(B.cd),t.G)},
lg(a,b,c){throw A.d(A.a6("Illegal IPv4 address, "+a,b,c))},
Du(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.lg("each part must be in the range 0..255",a,r)}A.lg("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.lg(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bO(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.lg(j,a,q)
p=l}A.lg("IPv4 address should contain exactly 4 parts",a,q)},
Dv(a,b,c){var s
if(b===c)throw A.d(A.a6("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.Dw(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.z4(a,b,c)
return!0},
Dw(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
z4(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.t7(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Du(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.ca(l,8)
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
B.da.kn(s,a0,16,s,a)
B.da.of(s,a,a0,0)}}return s},
Ef(a,b,c,d,e,f,g){return new A.j2(a,b,c,d,e,f,g)},
zs(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h6(a,b,c){throw A.d(A.a6(c,a,b))},
Em(a,b){var s=A.zs(b)
if(a===s)return null
return a},
Ek(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.h6(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Eh(a,q,r)
if(o<r){n=o+1
p=A.zx(a,B.b.ag(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Dv(a,q,o)
l=B.b.G(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.de(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.zx(a,B.b.ag(a,"25",n)?o+3:n,c,"%25")}else p=""
A.z4(a,b,o)
return"["+B.b.G(a,b,o)+p+"]"}}return A.Er(a,b,c)},
Eh(a,b,c){var s=B.b.de(a,"%",b)
return s>=b&&s<c?s:c},
zx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bs(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.x8(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bs("")
l=h.a+=B.b.G(a,q,r)
if(m)n=B.b.G(a,r,r+3)
else if(n==="%")A.h6(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bs("")
if(q<r){h.a+=B.b.G(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.f(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.G(a,q,r)
if(h==null){h=new A.bs("")
m=h}else m=h
m.a+=i
l=A.x7(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.G(a,b,c)
if(q<c){i=B.b.G(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Er(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.x8(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bs("")
k=B.b.G(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.G(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bs("")
if(q<r){p.a+=B.b.G(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h6(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.f(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.G(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bs("")
l=p}else l=p
l.a+=k
j=A.x7(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.G(a,b,c)
if(q<c){k=B.b.G(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Eo(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.zu(a.charCodeAt(b)))A.h6(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h6(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.G(a,b,c)
return A.Eg(q?a.toLowerCase():a)},
Eg(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Ep(a,b,c){return A.j3(a,b,c,16,!1,!1)},
El(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.j3(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.Eq(q,e,f)},
Eq(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.Es(a,!s||c)
return A.Et(a)},
En(a,b,c,d){return A.j3(a,b,c,256,!0,!1)},
Ej(a,b,c){return A.j3(a,b,c,256,!0,!1)},
x8(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.vM(r)
o=A.vM(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.az(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.G(a,b,b+3).toUpperCase()
return null},
x7(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.my(a,6*p)&63|q
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
o+=3}}return A.yY(s,0,null)},
j3(a,b,c,d,e,f){var s=A.zw(a,b,c,d,e,f)
return s==null?B.b.G(a,b,c):s},
zw(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.x8(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h6(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.x7(n)}if(o==null){o=new A.bs("")
k=o}else k=o
k.a=(k.a+=B.b.G(a,p,q))+l
if(typeof m!=="number")return A.jq(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.G(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
zv(a){if(B.b.W(a,"."))return!0
return B.b.bS(a,"/.")!==-1},
Et(a){var s,r,q,p,o,n,m
if(!A.zv(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a_(s,"/")},
Es(a,b){var s,r,q,p,o,n
if(!A.zv(a))return!b?A.zt(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gX(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.zt(s[0]))}return B.a.a_(s,"/")},
zt(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.zu(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.G(a,0,s)+"%3A"+B.b.b3(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Ei(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.z("Invalid URL encoding",null))}}return r},
x9(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cd===d)return B.b.G(a,b,c)
else p=new A.dV(B.b.G(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.z("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.z("Truncated URI",null))
B.a.l(p,A.Ei(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.md.nn(p)},
zu(a){var s=a|32
return 97<=s&&s<=122},
z1(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a6(k,a,r))}}if(q<0&&r>b)throw A.d(A.a6(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.f(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gX(j)
if(p!==44||r!==n+7||!B.b.ag(a,"base64",n+1))throw A.d(A.a6("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.en.oK(a,m,s)
else{l=A.zw(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bZ(a,m,s,l)}return new A.t6(a,j,c)},
At(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a},
lH:function lH(){},
aq:function aq(){},
jy:function jy(a){this.a=a},
dE:function dE(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kh:function kh(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
it:function it(a){this.a=a},
lc:function lc(a){this.a=a},
fU:function fU(a){this.a=a},
jL:function jL(a){this.a=a},
kH:function kH(){},
il:function il(){},
tD:function tD(a){this.a=a},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
au:function au(){},
G:function G(){},
mb:function mb(){},
rR:function rR(){this.b=this.a=0},
bs:function bs(a){this.a=a},
t8:function t8(a){this.a=a},
t7:function t7(a){this.a=a},
j2:function j2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
t6:function t6(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lD:function lD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
qc:function qc(a){this.a=a},
zY(a){var s
if(typeof a=="function")throw A.d(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.EO,a)
s[$.hp()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.d(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ur,a)
s[$.hp()]=a
return s},
EO(a){return t.BO.a(a).$0()},
ur(a,b,c){t.BO.a(a)
if(A.b(c)>=1)return a.$1(b)
return a.$0()},
xP(a,b,c){return c.a(a[b])},
zZ(a,b){return a[b]},
af(a,b,c,d){return d.a(a[b].apply(a,c))},
zO(a,b,c,d){return d.a(a[b](c))},
b3(a,b){var s=new A.aA($.ar,b.i("aA<0>")),r=new A.iz(s,b.i("iz<0>"))
a.then(A.hn(new A.wk(r,b),1),A.hn(new A.wl(r),1))
return s},
Aa(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
dg(a){if(A.Aa(a))return a
return new A.vH(new A.iH(t.BT)).$1(a)},
wk:function wk(a,b){this.a=a
this.b=b},
wl:function wl(a){this.a=a},
vH:function vH(a){this.a=a},
D9(a){var s
if(a==null)s=B.aX
else{s=new A.eg()
s.c3(a)}return s},
lN:function lN(){},
eg:function eg(){this.b=this.a=0},
qE:function qE(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qF:function qF(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
nJ:function nJ(a,b){this.a=a
this.b=b
this.c=null},
fu:function fu(a,b){this.a=a
this.b=b},
nK:function nK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nM:function nM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nL:function nL(){var _=this
_.c=_.b=_.a=null
_.d=0},
kN:function kN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
k3:function k3(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
op:function op(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
e0(a,b){return new A.kd(a,b)},
dz:function dz(){},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b){this.a=a
this.b=b},
kd:function kd(a,b){this.a=a
this.b=b},
H9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.t)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iS(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.U(f,new A.wm())
s=A.e([],t.cv)
for(r=A.iq(f,0,A.eq(b,"count",t.S),t.mn),q=r.$ti,r=new A.aV(r,r.gt(0),q.i("aV<a5.E>")),q=q.i("a5.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function o6(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bI:function bI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wm:function wm(){},
pZ(a,b,c,d,e,f,g,h,i,j){return new A.eL(c,a,h,g,f,e,i,j,b,!0)},
wO(a,b){if(!isFinite(b)||b<0||b>1)throw A.d(A.z("MaterialDefinition."+a+" must be in [0, 1]: "+A.x(b),null))},
jx:function jx(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c,d,e,f,g,h,i,j){var _=this
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
CO(a){A:{break A}return a},
d7:function d7(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
ta:function ta(){},
tb:function tb(){},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q1:function q1(){},
q2:function q2(){},
q3:function q3(){},
i4(a){var s,r=t.N,q=A.aL(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.J(0,A.aL(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.J(0,A.aL(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.J(0,A.aL(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.J(0,A.aL(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.qe(A.eV(q,r),s)},
qe:function qe(a,b){this.a=a
this.b=b},
qf:function qf(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fz:function fz(a,b){this.a=a
this.b=b},
jE:function jE(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c,d,e,f,g,h,i,j){var _=this
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
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jK:function jK(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
kV:function kV(a,b,c,d,e,f,g,h,i,j){var _=this
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
eT:function eT(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c){this.a=a
this.b=b
this.d=c},
or:function or(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
CN(){return new A.kx(new A.d0(new A.q_(),A.e([],t.Fy),A.e([],t.t),t.ja))},
kx:function kx(a){this.a=a},
q_:function q_(){},
Aw(a){var s=4
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
case 3:s=A.j(A.b_("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
EU(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.V[r]
if(A.Aw(q.a)===b)s+=q.c}return s},
CP(a){return new A.q4(a,new A.d0(new A.q5(),A.e([],t.EM),A.e([],t.t),t.wm),A.o(t.S,t.qt))},
yJ(a){var s
A:{s=a.byteLength
break A}return s},
le:function le(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(){},
q6:function q6(){},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=a
this.b=b},
t_:function t_(a,b){this.a=a
this.b=b},
t0:function t0(a){this.a=a},
rY:function rY(a,b){this.a=a
this.b=b},
rZ:function rZ(){},
Dq(a){var s=new A.la(a,new A.d0(new A.t1(),A.e([],t.f2),A.e([],t.t),t.qq),A.o(t.S,t._))
s.d=s.aU($.xZ())
s.e=s.aU($.xW())
s.f=s.aU($.xX())
s.r=s.aU($.xV())
s.w=s.aU($.xY())
return s},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
la:function la(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
t1:function t1(){},
t3:function t3(){},
t2:function t2(){},
Gy(a){var s,r,q,p,o=A.e([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.eI(p,A.e([p],r)))
continue}return o},
eI:function eI(a,b){this.a=a
this.b=b},
k1:function k1(a){this.a=a},
ok:function ok(){},
ol:function ol(a){this.a=a},
oi:function oi(a){this.a=a},
oj:function oj(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
oq:function oq(a,b){this.a=a
this.b=b
this.c=0},
DW(){return new A.fZ()},
oo:function oo(a){this.a=a
this.b=null},
fZ:function fZ(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wQ(){return!0},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
qi:function qi(){},
qj:function qj(){},
ci:function ci(a,b){this.a=a
this.b=b},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
aM:function aM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fP:function fP(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
hw:function hw(a){this.b=a},
kR:function kR(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
br:function br(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qG:function qG(){},
b9:function b9(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qI:function qI(a,b){this.a=a
this.b=b},
qN:function qN(){},
qM:function qM(){},
qL:function qL(){},
qK:function qK(a){this.a=a},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(a,b){this.a=a
this.b=b},
De(a){return new A.ib(a,new A.d0(new A.qP(),A.e([],t.w_),A.e([],t.t),t.tc))},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.b=b},
qP:function qP(){},
xl(a,b){return A.F4(a,b)},
F4(a,b){var s=0,r=A.bh(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xl=A.bi(function(c,a0){if(c===1)return A.be(a0,r)
for(;;)switch(s){case 0:a.c6()
if(a.at!=null)throw A.d(A.m("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.cd(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.ce(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.di(b)
n=new A.kR(a.a,A.o(t.N,t.CH))
l=A.zU(a,n,b,o.a.b.a)
m=l.a
i.ce(p)
h=a.x
g=o
if(h.e)A.j(A.m("GPU resource adapter is disposed"))
h.fP(g)
f=h.c
h.b.ce(g.a)
h.c=g
h.d=null
if(f!=null)h.dQ(f.b)
g.c=B.ht
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bP()
h=j
if(h!=null)h.bP()}catch(d){if(p.c===B.b_){h=t.AB.a(p)
i.fX(h)
i.a.hT(h.a)
i.b.fb(h.b)
h.c=B.eO
i.c=null}i=o
if((i==null?null:i.c)===B.ag){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.j(A.m("GPU resource adapter is disposed"))
i.fP(h)
i.dQ(h.b)
i.b.fb(h.a)
h.c=B.hu
i.d=null}i=m
if(i!=null)i.bP()
i=n
if(i!=null)i.bP()
throw d}case 1:return A.bf(q,r)}})
return A.bg($async$xl,r)},
zV(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zU(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zU(a,b,c,d){var s,r,q,p,o,n,m,l="sceneColor",k=new A.v5(a),j=new A.v6(d,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.GC(b,h,B.aZ,i,s.gpx(),new A.uR(j),new A.uS(j),new A.uT(a),new A.uY(a),new A.uZ(a),new A.v_(j),new A.v0(j),s.gpz(),new A.v1(a),s.gpD(),r.gpB(),k,s.gpF(),s.gpH(),new A.v2(j,c),new A.v3(j),new A.v4(j),new A.uU(j),new A.uV(j),new A.uW(a),new A.uX(j),e,f,g,c.r)}else{p=new A.aM(l,B.t,g,f,e,0)
o=new A.aM(l,B.t,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hY(h,p,o):null
k=A.e([new A.lt(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i7(b,u.l,u.B,h,i,B.aZ))
q=new A.k1(k)}a.r.toString
m=q.n9(B.Q,new A.qG(),!1,new A.lY())
k=m.a.b
if(k.length!==0)throw A.d(A.m("safe renderer graph is invalid: "+A.x(k)))
return new A.ua(q,m)},
F5(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.m("renderer graph is not initialized"))
s=A.J(b7.gjw(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a4(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ae()
p=p.gaD()
n=A.F(p)
B.a.l(s,new A.mc(new A.cz((r|1073741824)>>>0,0,"transient"),q,A.bl(new A.P(p,n.i("N(1)").a(o.gaF()),n.i("P<1,N>")))))}p=b8.a
m=A.GI(A.Cq(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.e0(B.aD,n))
j=j.b
g=j.$ti
j.a4(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.R(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.e0(B.aD,n))
j=j.b
g=j.$ti
j.a4(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.R(n>0?n:h.e,3)}o=t.N
n=A.o(o,t.rL)
e=new A.oo(n)
e.n4("cull")
j=l-f
d=e.b
if(d==null)A.j(A.m("cull recorded outside an active frame"))
if(j<0)A.j(A.z("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.e([],t.fs)
a=A.e([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.t)(s),++k){a2=s[k]
if(a2.gD().e===B.b0)B.a.l(a,new A.aP(new A.bP(a0.jQ(a2.gD().c.a).c,a2.gab().a),a2,a1))
else B.a.l(b,new A.aP(new A.bR(B.ku,a2.gD().b,a2.gD().a,a2.gab().a),a2,g))}a3=new A.lJ(A.Gy(A.Hb(b)),A.Ha(a),p,b8.b,b8.c)
a4=new A.jT(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.t)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.j(A.am(g,"passId",null))
e.b=g
n.cD(g,A.AI())
a6=A.o(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.t)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.j(A.m("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.j(A.m("resource is not in candidate: "+b1))
b3=new A.fq(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cD(b0,new A.v7(b3))}a5.ao(new A.jG(a6,a4,a3))}return new A.tE(e,m,j)},
yV(a){return new A.r4(a,new A.nJ(new A.nL(),new A.kX()),new A.oq(A.e([],t.h1),B.he),A.e([],t.Ft),B.bA,A.e([],t.ow),null)},
qZ:function qZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function mc(a,b,c){this.a=a
this.b=b
this.c=c},
v5:function v5(a){this.a=a},
v6:function v6(a,b){this.a=a
this.b=b},
v4:function v4(a){this.a=a},
uY:function uY(a){this.a=a},
uZ:function uZ(a){this.a=a},
v3:function v3(a){this.a=a},
uT:function uT(a){this.a=a},
uV:function uV(a){this.a=a},
uU:function uU(a){this.a=a},
v2:function v2(a,b){this.a=a
this.b=b},
uR:function uR(a){this.a=a},
uS:function uS(a){this.a=a},
v_:function v_(a){this.a=a},
v0:function v0(a){this.a=a},
v1:function v1(a){this.a=a},
uX:function uX(a){this.a=a},
uW:function uW(a){this.a=a},
v7:function v7(a){this.a=a},
ua:function ua(a,b){this.a=a
this.b=b},
lY:function lY(){},
lJ:function lJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r4:function r4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
r5:function r5(){},
r6:function r6(){},
r7:function r7(){},
lW:function lW(a){this.b=a},
tQ:function tQ(){},
m1:function m1(){},
ik:function ik(a,b){this.a=a
this.b=b},
Hb(a){var s,r,q=A.J(a,t.E0)
B.a.U(q,new A.wr())
s=A.F(q)
r=s.i("P<1,c3>")
s=A.J(new A.P(q,s.i("c3(1)").a(new A.ws()),r),r.i("a5.E"))
s.$flags=1
return s},
Ha(a){var s,r,q=A.J(a,t.EH)
B.a.U(q,new A.wp())
s=A.F(q)
r=s.i("P<1,c3>")
s=A.J(new A.P(q,s.i("c3(1)").a(new A.wq()),r),r.i("a5.E"))
s.$flags=1
return s},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
wr:function wr(){},
ws:function ws(){},
wp:function wp(){},
wq:function wq(){},
GI(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.gfj()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.z("cullItems: non-finite world bounds for instance "+o.gab().p(0),null))
if(a.pQ(o.gfj())===B.cs){++q
continue}B.a.l(l,o)}return new A.o0(l,new A.o1(q))},
o1:function o1(a){this.b=a},
o0:function o0(a,b){this.a=a
this.b=b},
bl(a){var s,r,q,p,o,n,m,l,k
for(s=J.S(a),r=B.mg,q=B.mh,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.N(m,k,Math.min(r.c,o))
q=new A.N(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.z("Aabb.fromPoints requires at least one point",null))
return new A.jt(r,q)},
jt:function jt(a,b){this.a=a
this.b=b},
Cq(a){var s,r,q,p,o,n,m=a.a,l=new A.ot(),k=m.length
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
return new A.os(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eN:function eN(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
os:function os(a){this.a=a},
ot:function ot(){},
yH(a){if(a.length!==16)throw A.d(A.z("Mat4.fromColumnMajor requires 16 values",null))
return new A.dw(new Float32Array(A.a2(a)))},
wM(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dw(q)},
yI(a,b,c){var s=b.gad(),r=c.bv(s).gad(),q=s.bv(r),p=new Float32Array(16)
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
p[12]=-r.cm(a)
p[13]=-q.cm(a)
p[14]=s.cm(a)
p[15]=1
return new A.dw(p)},
dw:function dw(a){this.a=a},
pY:function pY(){},
kT:function kT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lb:function lb(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lA:function lA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jF:function jF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lB:function lB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jS:function jS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lE:function lE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iC:function iC(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lF:function lF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jV:function jV(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
kb:function kb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lL:function lL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(a){this.b=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
bD(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aM(a.a,a.b,b,c,s,r)},
wR:function wR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
i7:function i7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lZ:function lZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kS:function kS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
m_:function m_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yX(a){var s=a.c,r=Math.abs(s.a)<0.99?B.mf:B.a6,q=A.yI(a.b,s,r)
return new A.eX(A.wM(1,a.f,B.c.E(a.w*2,0.1,3),0.05).a8(0,q))},
eX:function eX(a){this.a=a},
l0:function l0(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
m2:function m2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
GC(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.d(A.am(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.R(e5+1,2)
m=B.d.R(e4+1,2)
l=A.bD(B.bD,e5,e4,e3,a8)
k=A.bD(B.bD.jB(),e5,e4,a8,a8)
A.bD(B.le,e5,e4,a8,a8)
j=A.bD(B.lb,e5,e4,a8,a8)
i=A.bD(B.l6,e6,e6,a8,a8)
h=A.bD(B.l7,b6,m,a8,a8)
g=A.bD(B.l8,b6,m,a8,a8)
f=A.bD(B.lc,b6,m,a8,a8)
e=A.bD(B.ld,b6,m,a8,a8)
d=$.B2()
c=e3>1
b=A.bD(d,e5,e4,a8,c?2:1)
d=A.bD(B.l3,b6,m,a8,a8)
a=A.bD(B.l4,b6,m,a8,a8)
a0=A.bD(B.l5,e5,e4,a8,a8)
a1=A.bD(B.l9,e5,e4,a8,a8)
a2=A.bD(B.lf,e5,e4,a8,a8)
a3=A.bD(B.la,e5,e4,a8,a8)
a4=c?new A.hY(b8,l,k):a8
b5.a=null
a5=A.yX(B.lT)
a6=t.e_
a7=A.e([],a6)
k=c?k:l
if(r){B.a.J(a7,A.e([new A.hu(b7,a9,b0,b8,b1,b1,B.dV,!0,k,f,d6,b6,m),new A.hu(b7,a9,b0,b8,b2,b2,B.mW,!1,f,e,c2,b6,m),new A.jF(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.J(a7,A.e([new A.hB(b7,a9,b0,b8,b3,b3,B.dW,k,d,d6,b6,m),new A.hB(b7,a9,b0,b8,b4,b4,B.mX,d,a,c7,b6,m),new A.jV(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.kb(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kS(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.li(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.jS(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.l4(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.l3(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.l0(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.vE(b5),i))
j.push(new A.l1(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.vF(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.J(j,a7)
j.push(new A.i7(b7,a9,u.B,b8,k,b9))
return new A.k1(j)},
vE:function vE(a){this.a=a},
vF:function vF(a,b){this.a=a
this.b=b},
l1:function l1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
m3:function m3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
l4:function l4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
m6:function m6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l3:function l3(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
m5:function m5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
li:function li(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mf:function mf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lt:function lt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mi:function mi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nH:function nH(){},
l_(a,b){return new A.ij(a,b)},
k7:function k7(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eF:function eF(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hJ:function hJ(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
A:function A(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
oO:function oO(){},
oP:function oP(){},
h1:function h1(a,b){this.a=a
this.b=b},
ej:function ej(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
yl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fA(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jD:function jD(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
jR:function jR(a,b){this.a=a
this.b=b},
fA:function fA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ba:function ba(a,b){this.a=a
this.b=b},
ts:function ts(){this.a=null},
DC(a){var s=new A.lr(a,B.h,new A.ts(),A.DM(a))
s.l4(a)
return s},
DM(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a0(t.N)
s=A.a0(t.N)
r=J.S(t.a.b(q)?q:new A.aU(q,A.F(q).i("aU<1,i>")))
while(r.m())s.l(0,r.gn())
return s},
c8(a,b){var s,r
if(a.b!==B.h)A.j(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.b(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.b(s.drawingBufferWidth),A.b(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.b(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
DI(a,b){var s
if(a.b!==B.h)A.j(A.m(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.b(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.z("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
DH(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.b(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.b(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.m("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
DG(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.b(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
DF(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
z8(a,b){var s
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
DD(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bv(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=a.f
r=s.nS(b)
if(r.a===0)return
if(r.q(0,B.bI)){q=v.G
p=a.a
if(b.a)p.enable(A.b(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.b(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bJ))a.a.depthFunc(A.DG(a,b.b))
if(r.q(0,B.bK))a.a.depthMask(b.c)
if(r.q(0,B.bO)){q=v.G
p=a.a
if(b.w)p.enable(A.b(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.b(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bP))a.a.cullFace(A.DF(a,b.x))
if(r.q(0,B.dH)){q=v.G.WebGL2RenderingContext
q=A.b(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bL)){q=v.G
p=a.a
if(b.d)p.enable(A.b(q.WebGL2RenderingContext.BLEND))
else p.disable(A.b(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bM))a.a.blendFunc(A.z8(a,b.e),A.z8(a,b.f))
if(r.q(0,B.bN))a.a.blendEquation(A.DD(a,b.r))
if(r.q(0,B.dF))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dG)){q=v.G.WebGL2RenderingContext
a.a.disable(A.b(q.SCISSOR_TEST))}s.a=b},
DE(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.b(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.b(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.b(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dH(a,b,c,d,e,f){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.DE(a,b))},
cp(a,b){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=A.c(b.a)
a.a.useProgram(s)
a.e=s},
y(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.j(A.m(u.k))
s=a.e
if(s==null)throw A.d(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.l(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bM(c.b))
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
bK(a,b){if(a.b!==B.h)A.j(A.m(u.k))
a.a.bindVertexArray(A.c(b.a))},
aH(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.j(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.b(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.j5){p=s.d>1?A.b(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.b(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.j4){o=s.b
if(o!=null){r.bindTexture(A.b(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.b(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
DJ(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=A.c(b.a)
r=a.a
q=v.G
r.bindBuffer(A.b(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.b(p.ELEMENT_ARRAY_BUFFER),c,A.b(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
DK(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
zb(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
r=A.l(s.createBuffer())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cE?A.b(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.b(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.DK(a,b.b))
return new A.dJ(r)},
z9(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.b(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
za(a,b){var s
switch(b.a){case 0:s=A.b(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.b(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
x_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.j(A.m(u.k))
s=a.a
r=A.l(s.createTexture())
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
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.z9(a,b.e))
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.z9(a,b.f))
p=b.r
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.za(a,p))
s.texParameteri(n,A.b(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.za(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.hm(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.j(A.am(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dJ(new A.j5(r,l,k,q,!1))},
x0(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.j(A.m(u.k))
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
ls(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
zd(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.j(A.m(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.z("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.l(r.createFramebuffer())
if(q==null)throw A.d(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.b2
if(n&&!a1.e)throw A.d(A.z("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cG||o===B.hw
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.e([A.b(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.b(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.l(r.createRenderbuffer())
r.bindRenderbuffer(A.b(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.af(r,c,[A.b(p.WebGL2RenderingContext.RENDERBUFFER),o,A.b(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.l(r.createRenderbuffer())
r.bindRenderbuffer(A.b(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.af(r,c,[A.b(p.WebGL2RenderingContext.RENDERBUFFER),o,A.b(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.b(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.e([A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.l(r.createTexture())
r.bindTexture(A.b(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.af(r,b,[A.b(p.WebGL2RenderingContext.TEXTURE_2D),1,A.b(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.b(p.WebGL2RenderingContext.LINEAR))
A.af(r,a,[A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.l(r.createTexture())
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
if(o>1){f=A.l(r.createRenderbuffer())
r.bindRenderbuffer(A.b(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.af(r,c,[A.b(p.WebGL2RenderingContext.RENDERBUFFER),o,A.b(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.b(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.l(r.createTexture())
r.bindTexture(A.b(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.af(r,b,[A.b(p.WebGL2RenderingContext.TEXTURE_2D),1,A.b(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.b(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.b(p.WebGL2RenderingContext.TEXTURE_2D),A.b(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.b(p.WebGL2RenderingContext.NEAREST))
A.af(r,a,[A.b(p.WebGL2RenderingContext.FRAMEBUFFER),A.b(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.b(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.b(r.checkFramebufferStatus(A.b(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.b(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.b(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.x1(a0,q,l,k,f,e,j,i)
throw A.d(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dJ(new A.j4(q,l,k,f,e,j,i,s,a1.b,a1.c))},
x1(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
da(a){var s
if(a.b!==B.h)A.j(A.m(u.k))
s=A.l(a.a.createVertexArray())
if(s==null)throw A.d(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dJ(s)},
zc(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.l(p.createShader(b))
if(o==null)throw A.d(A.l_(b===A.xP(A.zZ(A.B_(),r),q,t.S)?B.dA:B.dB,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a3(A.dg(p.getShaderParameter(o,A.b(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aD(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.l_(b===A.xP(A.zZ(A.B_(),r),q,t.S)?B.dA:B.dB,s))}return o},
DL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.j(A.m(u.k))
q=v.G
s=A.zc(a,A.b(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.zc(a,A.b(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.l(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.lF)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a3(A.dg(o.getProgramParameter(n,A.b(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aD(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.l_(B.dC,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.t)(c),++l){k=c[l]
if(A.b(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.l_(B.dD,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.l(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.l_(B.dD,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dJ(n)},
dJ:function dJ(a){this.a=a},
j5:function j5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j4:function j4(a,b,c,d,e,f,g,h,i,j){var _=this
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
mh:function mh(a){this.a=a
this.b=!1},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
tq:function tq(a){this.a=a},
tr:function tr(a){this.a=a},
uj:function uj(){},
mg:function mg(){},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ng(a,a0){var s=0,r=A.bh(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ng=A.bi(function(a1,a2){if(a1===1)return A.be(a2,r)
for(;;)switch(s){case 0:p=A.c(new v.G.AudioContext())
o=t.m
n=A.o(t.N,o)
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
b=new A.jA(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aX,A.o(o,t.jS))
b.kM(p,a0)
p=A.r(a).i("K<1,2>")
s=3
return A.ap(A.ov(A.kv(new A.K(a,p),p.i("c_<au>(p.E)").a(new A.nh(b)),p.i("p.E"),t.ls),t.c),$async$ng)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.lP():n
c.buffer=p
q=b
s=1
break
case 1:return A.bf(q,r)}})
return A.bg($async$ng,r)},
jA:function jA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ni:function ni(){},
nh:function nh(a){this.a=a},
nk:function nk(a,b){this.a=a
this.b=b},
nj:function nj(a,b){this.a=a
this.b=b},
nl:function nl(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
BJ(a,b,c,d,e,f,g){var s=new A.n7(c,f,b,g,new A.a(d.a,d.b,d.c),e,a)
s.kO(a,b,c,d,0,e,f,g)
return s},
BF(a,b){var s=new A.mQ(b)
s.kL(a,b)
return s},
BI(a){var s,r,q,p,o,n=t.z
n=A.o(n,n)
for(s=new A.K(a,A.r(a).i("K<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.at(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.n3(A.b7(n,r,t.a))
n.kN(a)
return n},
Ga(a,b){var s,r,q,p=b>>>0
for(s=new A.dV(a),r=t.sU,s=new A.aV(s,s.gt(0),r.i("aV<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.AN(p,q==null?r.a(q):q)}return p&2147483647},
jB:function jB(a,b){this.a=a
this.b=b},
n7:function n7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n8:function n8(){},
mQ:function mQ(a){this.a=a},
mR:function mR(){},
hs:function hs(){},
mS:function mS(){},
mT:function mT(){},
n3:function n3(a){this.a=a},
n5:function n5(){},
n6:function n6(){},
n4:function n4(){},
wB:function wB(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
nf:function nf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n9:function n9(a,b,c){this.a=a
this.b=b
this.c=c},
na:function na(a){this.a=a},
nb:function nb(){},
iy:function iy(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
nF:function nF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=1
_.w=0},
on:function on(a){this.a=a},
l8:function l8(a,b,c,d,e,f,g,h,i,j){var _=this
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
oL:function oL(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
oM:function oM(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.a=a
this.b=0
this.$ti=b},
ki:function ki(a,b,c,d,e,f,g,h,i,j){var _=this
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
pq:function pq(a){this.a=a},
CA(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.K(a,A.r(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.pp(n)},
pp:function pp(a){this.a=a},
pt:function pt(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aT:function aT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pP:function pP(a,b,c){this.a=a
this.c=b
this.e=c},
pM:function pM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(){},
o2:function o2(){this.b=this.a=0},
pV:function pV(a){this.a=a
this.b=0
this.e=!1},
kw:function kw(a){this.a=a},
wN(a,b,c,d){return new A.hX(a,b,c,d)},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q0:function q0(a,b){this.a=a
this.b=b},
im(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bO(a)
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
d3:function d3(a){this.a=a
this.b=0},
qO:function qO(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
qY:function qY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Df(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.yT(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.km(800,t.cX)
for(s=0;s<800;++s)g[s]=new A.lV(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0))
r=t.S
q=A.cY(800,0,!1,r)
p=new Float32Array(8064)
o=J.km(4000,t.fo)
for(s=0;s<4000;++s)o[s]=new A.lT(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),0,1,0,0,0)
n=A.cY(4000,0,!1,r)
m=new A.a(0.3,0.7,-0.5).gad()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.vj
k=new A.qQ(a,new A.oL(a,A.o(t.m,r)),b,c,A.a0(t.N),j,i,h,g,q,p,A.o(r,t.kA),o,n,m,B.iT,new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),new A.kw(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.kY(a,b,c)
return k},
qQ:function qQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aW=a
_.b7=b
_.bB=c
_.bC=d
_.eH=_.j8=1
_.ei=_.eh=_.ib=_.ia=_.i9=_.i8=_.jm=_.jl=_.eP=_.eO=_.eN=_.eM=_.eL=_.eK=_.eJ=_.jk=_.jj=_.ji=_.eI=_.jh=_.jg=_.jf=_.je=_.jd=_.jc=_.jb=_.ja=_.j9=_.az=$
_.d4=null
_.ic=e
_.iG=_.iF=_.iE=_.iD=_.iC=_.iB=_.iA=_.iz=_.iy=_.ix=_.iw=_.iv=_.iu=_.it=_.is=_.ir=_.iq=_.ip=_.io=_.im=_.il=_.ik=_.ij=_.ii=_.ih=_.ig=_.ie=_.d5=$
_.d6=0
_.ep=_.eo=_.en=_.em=_.el=_.ek=_.ej=$
_.da=_.d9=_.d8=_.d7=_.cn=_.bz=null
_.co=$
_.iJ=_.iI=_.iH=!1
_.o8=1
_.eq=f
_.er=g
_.o9=h
_.iK=i
_.dc=0
_.iL=j
_.oa=k
_.es=0
_.eu=l
_.ob=1
_.ev=!1
_.cp=0
_.ew=m
_.cq=0
_.iM=n
_.iN=o
_.iQ=_.iP=_.iO=1
_.iR=0.4
_.ex=p
_.iS=q
_.ey=r
_.ez=s
_.eA=a0
_.iT=_.eE=_.eD=_.eC=_.eB=0
_.iU=null
_.iV=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.eF=_.j2=_.j1=_.oe=_.od=_.oc=_.j0=_.j_=_.iZ=_.iY=_.cs=_.cr=_.iX=_.iW=_.dd=_.bl=_.bk=_.bA=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.j3=_.eG=$
_.j4=a7
_.j5=a8
_.j6=a9
_.j7=b0},
Ac(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.ah(0,c).bv(f.ah(0,c)).gad(),r=A.vx(g)
return A.Aj(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
jo(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bO(a)
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
Aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.jo(a,A.jo(a,A.jo(a,A.jo(a,A.jo(a,A.jo(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
vx(a){return new A.ak((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
Fj(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.c.aY(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a8(),i=A.a8(),h=A.a8()
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
h.b=l}s=j.e0()
if(typeof s!=="number")return s.a8()
s=B.c.aC(s*255)
r=i.e0()
if(typeof r!=="number")return r.a8()
r=B.c.aC(r*255)
q=h.e0()
if(typeof q!=="number")return q.a8()
return new A.ak(s,r,B.c.aC(q*255))},
iE:function iE(){},
m7:function m7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
lV:function lV(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lT:function lT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qR:function qR(){},
qS:function qS(a){this.a=a},
qT:function qT(a){this.a=a},
tu:function tu(){},
rM:function rM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iu(a,b,c){return new A.a(a,b,c)},
z6(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.a(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
a:function a(a,b,c){this.a=a
this.b=b
this.c=c},
DN(a,b,c,d){return new A.lu(d,b,c,a)},
DP(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.Be()
s=a.d
r=A.tv(s,0)
q=A.tv(s,1)
p=A.tv(s,2)
o=A.tv(s,3)
s=t.N
n=A.a0(s)
m=a.e
if(A.bL(m,0))n.l(0,"GamepadA")
if(A.bL(m,1))n.l(0,"GamepadB")
if(A.bL(m,2))n.l(0,"GamepadX")
if(A.bL(m,3))n.l(0,"GamepadY")
if(A.bL(m,4))n.l(0,"GamepadLB")
if(A.bL(m,5))n.l(0,"GamepadRB")
if(A.bL(m,6))n.l(0,"GamepadLT")
if(A.bL(m,7))n.l(0,"GamepadRT")
if(A.bL(m,8))n.l(0,"GamepadView")
if(A.bL(m,9))n.l(0,"GamepadMenu")
if(A.bL(m,10))n.l(0,"GamepadLStick")
if(A.bL(m,11))n.l(0,"GamepadRStick")
if(A.bL(m,12))n.l(0,h)
if(A.bL(m,13))n.l(0,g)
if(A.bL(m,14))n.l(0,f)
if(A.bL(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.a(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gad():i
return new A.lu(m,p,o,A.eV(n,s))},
tv(a,b){return A.DO(b<a.length?a[b]:0)},
bL(a,b){return b<a.length&&a[b]>=0.5},
DO(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.E((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gcv(a)?-s:s},
l5:function l5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lu:function lu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ny:function ny(a){this.a=a},
C5(a,b,c){var s=new A.jW(a,c,null,b)
s.kS(a,null,null,b,c)
return s},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Ci(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bA(new A.I(B.jd,t.e2.a(new A.of(a)),t.vL),t.yW)
return s==null?null:new A.fB(s)},
CQ(a,b){var s=A.e([],t.s)
switch(b.a){case 0:A.wP(s,a,B.iN)
break
case 1:A.wP(s,a,B.iO)
break
case 2:A.wP(s,a,B.jg)
break}return s},
wP(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.V(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Ch(a){if(a.a!==21)return null
if(a.e)return B.f2
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f3
return B.f1},
cg:function cg(a,b){this.a=a
this.b=b},
oc:function oc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fB:function fB(a){this.a=a},
of:function of(a){this.a=a},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
CX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.v(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.kL(s,new A.a(o,n,m),q,p,l,j)
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
kL:function kL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Gd(a){var s,r,q,p=A.o(t.N,t.z)
for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.fg)
p.k(0,q,r.b)}return p},
mq(a){var s,r,q,p,o,n=a.ga2().c_(0)
B.a.Z(n)
s=t.z
r=A.o(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.t)(n),++p){o=n[p]
r.k(0,o,A.zQ(a.h(0,o)))}return A.b7(r,t.N,s)},
zQ(a){var s
if(t.f.b(a))return A.mq(A.Gd(a))
if(t.j.b(a)){s=t.z
return A.ag(J.fj(a,A.H4(),s),s)}if(a==null||A.bX(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fT)
return a}throw A.d(A.a6("presentation snapshot contains unsupported value "+J.fi(a).p(0),null,null))},
qy:function qy(a){this.a=a},
yU(a,b,c){var s=A.xg(b),r=A.xg(a)
if(c!==2)A.j(A.am(c,"version","unsupported save version"))
return new A.fR(c,s,r)},
xg(a){var s,r,q,p,o=A.r(a).i("ad<1>"),n=A.J(new A.ad(a,o),o.i("p.E"))
B.a.Z(n)
o=t.z
s=A.o(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.t)(n),++q){p=n[q]
s.k(0,p,A.zP(a.h(0,p)))}return A.b7(s,t.N,o)},
zP(a){var s,r,q,p
if(t.f.b(a)){s=A.o(t.N,t.z)
for(r=a.gK(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.fK)
s.k(0,p,q.b)}return A.xg(s)}if(t.j.b(a)){r=t.z
return A.ag(J.fj(a,A.H8(),r),r)}if(a==null||A.bX(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fV)
return a}throw A.d(A.a6("save contains unsupported value "+J.fi(a).p(0),null,null))},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
r3:function r3(){},
eU:function eU(a,b){this.a=a
this.b=b},
yo(a,b,c,d,e,f,g,h){var s=A.e([],t.pC),r=A.e([],t.ns)
return new A.oy(a,b,c,d,e,f,g,s,r,h)},
yp(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aN(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.d(B.fJ)
r=c.h(0,"runSeed")
q=A.aN(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aN(p)||p<1||typeof o!="number")throw A.d(B.h3)
if(!isFinite(5760))throw A.d(A.am(5760,"daySeconds","must be finite and > 0"))
n=new A.k5(p,7,5760)
if(!isFinite(o)||o<0||o>=24)A.j(A.a6("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.CK(a5,A.aO(a1,s,m))
k=A.C2(l,A.aO(a0,s,m),n)
j=A.yr(b)
A.Cz(A.aO(a2,s,m)).mZ(j)
m=A.aO(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bX(f))A.j(B.fo)
e=A.CR(c.h(0,"narrative"))
if(e==null)e=A.q8(d,d,d)
return A.yo(b,q,j,n,l,k,new A.jU(i,h,g,f),e)},
F3(a){var s
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
eE:function eE(a,b){this.a=a
this.b=b},
k4:function k4(){},
oz:function oz(a,b){this.a=a
this.b=b},
oy:function oy(a,b,c,d,e,f,g,h,i,j){var _=this
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
oA:function oA(a){this.a=a},
oB:function oB(){},
oC:function oC(){},
oD:function oD(a){this.a=a},
oE:function oE(){},
BL(a){var s,r,q,p,o,n,m="modelScale",l=A.my(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.al(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.fA)
s=A.ep(l,"houseId")
r=A.ep(l,"sourceRef")
q=J.fj(A.mv(l,"rooms"),new A.nn(k),t.bJ)
q=A.J(q,q.$ti.i("a5.E"))
q.$flags=1
p=J.fj(A.mv(l,"portals"),new A.no(k),t.lT)
p=A.J(p,p.$ti.i("a5.E"))
p.$flags=1
o=J.fj(A.mv(l,"stairs"),new A.np(),t.gI)
o=A.J(o,o.$ti.i("a5.E"))
o.$flags=1
n=J.fj(A.mv(l,"exteriorCells"),new A.nq(),t.N)
n=A.J(n,n.$ti.i("a5.E"))
n.$flags=1
return new A.nm(s,r,q,p,o)},
BM(a,b){var s=A.my(a,"room"),r=A.ep(s,"id"),q=A.As(s.h(0,"origin"),"origin",b),p=A.As(s.h(0,"size"),"size",b),o=J.fj(A.mv(s,"windows"),new A.ns(b),t.ya)
o=A.J(o,o.$ti.i("a5.E"))
o.$flags=1
return new A.fl(r,q,p,o)},
my(a,b){return t.P.b(a)?a:A.jh(b+" is not an object")},
mv(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.jh(b+" is not a list")},
ep(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.jh(b+" is not a string")},
jk(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.jh(b+" is not finite")},
Gq(a,b){var s,r
if(t.j.b(a)){s=J.aE(a)
s=s.gt(a)!==3||s.N(a,new A.vC())}else s=!0
if(s)return A.jh(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.S(a);r.m();)s.push(A.al(r.gn()))
return s},
As(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.Gq(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)p.push(s[q]*c)
return p},
jh(a){return A.j(A.a6(a,null,null))},
nm:function nm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
nn:function nn(a){this.a=a},
no:function no(a){this.a=a},
np:function np(){},
nq:function nq(){},
nr:function nr(a){this.a=a},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ns:function ns(a){this.a=a},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
fk:function fk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fm:function fm(a){this.b=a},
vC:function vC(){},
jH:function jH(a,b){this.a=a
this.b=b
this.d=null},
nI:function nI(a){this.a=a},
ky:function ky(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
lv:function lv(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p3:function p3(){this.b=0},
r_:function r_(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
a1:function a1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jZ:function jZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oh:function oh(){},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
p5:function p5(){},
p4:function p4(a,b,c){this.a=a
this.b=b
this.c=c},
Hi(a){var s,r,q,p,o,n,m,l
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
return new A.cl(B.ac,p,new Uint16Array(A.a2(a.b)),new A.jt(new A.N(s.a,s.b,s.c),new A.N(s.d,s.e,s.f)))},
Hh(a){var s,r,q,p,o,n=A.e([],t.uH)
for(s=A.G9(a,new A.wt(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.k_(o,p.c,p.e))}return n},
G9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.o(t.N,t.Ez)
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
if(l==null){l=B.b.q(d,":")?B.b.G(d,0,B.b.bS(d,":")):null
l=new A.db(d,l,h,A.e([],p))
s.k(0,d,l)}B.a.J(l.d,A.e([m,k,j],p))}r=A.e([],t.wf)
q=s.$ti.i("ax<2>")
q=A.J(new A.ax(s,q),q.i("p.E"))
B.a.U(q,new A.vv())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.t)(q),++c)r.push(q[c].q_(a))
return r},
EN(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jZ(r,q,p,o,n,m)},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
wt:function wt(a){this.a=a},
vv:function vv(){},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eB:function eB(a,b){this.a=a
this.b=b},
k0:function k0(){},
GB(a){var s,r,q,p=new A.p4(A.e([],t.Dl),A.e([],t.t),A.o(t.N,t.S))
for(s=0;s<4;++s)A.F6(p,a,B.d_[s],15.75,15.75,12.044999999999998,0.63)
p.A(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.A(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.A(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.A(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.A(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.A(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.A(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a1(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a1(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ai(r,new A.a1(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ai(r,q,new A.a1(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a1(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a1(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ai(q,new A.a1(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ai(q,r,new A.a1(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ai(new A.a1(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a1(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a1(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ai(new A.a1(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a1(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a1(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a1(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a1(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ai(r,new A.a1(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ai(r,q,new A.a1(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a1(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a1(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ai(q,new A.a1(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ai(q,r,new A.a1(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.G0(p,15.75,15.75,12.044999999999998,16.32)
A.EQ(p,15.75,15.75,16.32)
A.F2(p,15.75,15.75,12.044999999999998)
A.Fa(p,a,15.75)
A.G6(p,15.75,15.75)
A.EM(p,15.75)
return p.n7()},
F6(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.il)
for(s=b6.b,r=s.length,q=B.v!==b7,p=B.m!==b7,o=B.l===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=b6.aL(k)
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
B.a.l(b4,new A.ef(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aE(i),b=J.S(h.a),h=new A.U(b,h.b,h.$ti.i("U<1>"));h.m();){a=b.gn()
if(!a.Q||a.aM(i)!==b7)continue
B:{if(!p||o){a0=g+a.ak(i)
break B}if(!q||n){a0=e+a.ak(i)
break B}a0=null}B.a.l(b4,new A.ef(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.m||b7===B.l?b8:b9
r=t.i
a1=A.aL([0,s],r)
a2=A.aL([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.t)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.J(a1,a1.$ti.c)
B.a.Z(a4)
a5=A.J(a2,a2.$ti.c)
B.a.Z(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.f(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.f(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.f(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.N(b4,new A.v9(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.F9(b5,b4,b7,b8,b9,c1)
A.F7(b5,b4,b7,b8,b9,c1)
A.F8(b5,b4,b7,b8,b9,c0,c1)},
F8(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aL([0,a4===B.m||a4===B.l?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.t)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.Z(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.f(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.N(a3,new A.v8(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
F7(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
F9(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.G4(a2,g,a4,a5,a6,a7,q)}},
G4(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
G0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.G1(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
G1(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a1(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a1(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ai(n,new A.a1(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ai(n,m,new A.a1(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a1(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a1(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ai(m,new A.a1(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ai(m,n,new A.a1(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
EQ(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
F2(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Fa(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ak("hall")
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
G6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
EM(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ef:function ef(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v9:function v9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v8:function v8(a,b,c){this.a=a
this.b=b
this.c=c},
H6(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.xT(b,d,c)
if(k!=null&&!k.e){s=k.b
return new A.dY(B.f7,k.a,s)}r=A.AY(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.dY(B.f8,r.a,s)}if(A.AZ(b,d,c)!=null)return B.fc
q=A.H5(a,b,c,d)
if(q!=null)return new A.dY(B.cn,q.a,"inspect the "+q.b)
p=A.AX(b,c,d,e)
if(p!=null){o=e.d0(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.dY(B.fa,l,m?"inspect the "+o.b:"inspect "+n)}return B.fd},
AX(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mF(a5,s,4.5)
for(q=a6.pe(a4),p=J.S(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.d0(i.c)
g=i.f.a
f=i.jP(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.a(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gad()
a0=a3.b
a1=Math.acos(B.c.E(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mH(a5,a4,a3.a,new A.a(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
H5(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.k6(c)
if(s.length===0)return f
r=d.aL(e)
q=A.mF(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.t)(s),++l){k=s[l]
j=b.a
i=new A.a(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gad()
j=b.b
if(Math.acos(B.c.E(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mH(d,c,b.a,new A.a(n,m,o)))return k}return f},
dp:function dp(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
AE(a,b){var s,r=new A.d3(new Float32Array(5376)),q=new A.d3(new Float32Array(5376)),p=new A.d3(new Float32Array(5376)),o=new A.d3(new Float32Array(5376)),n=b.d,m=a.aL(b),l=A.hN(b.y),k=A.hN(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.f2(new A.a(j,i,h),new A.a(j,i,f),new A.a(d,i,f),new A.a(d,i,h),l.c,e/c,g/c)
A.EA(r,b,m)
i+=m.b
c=k.e
q.f2(new A.a(j,i,h),new A.a(d,i,h),new A.a(d,i,f),new A.a(j,i,f),k.c,e/c,g/c)
A.Ex(q,b,m)
for(s=0;s<4;++s)A.EF(p,a,b,m,B.d_[s])
for(j=a.aE(b.a),i=J.S(j.a),j=new A.U(i,j.b,j.$ti.i("U<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.zD(o,b,m,h,!0)}A.Ey(p,b,m)
A.EB(p,a,b,m)
return new A.r0(B.r.aS(r.a,0,r.b),B.r.aS(q.a,0,q.b),B.r.aS(p.a,0,p.b),B.r.aS(o.a,0,o.b))},
Ex(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.q(a,new A.a(n,s,r),new A.a(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.q(a,new A.a(m-0.34,g,l-0.34),new A.a(m+0.34,d-0.018,l+0.34),12037536)
A.q(a,new A.a(m-0.22,d-0.075,l-0.22),new A.a(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.q(a,new A.a(s,r,j),new A.a(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.q(a,new A.a(i,s,r),new A.a(i+0.1,q,p),4078648)}},
Gz(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.d3(new Float32Array(5376))
r=a.aL(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.zE(s,b,r,c,q)
return B.r.aS(s.a,0,s.b)},
GA(a,b){var s,r,q,p=new A.d3(new Float32Array(5376)),o=a.aL(b)
for(s=a.aE(b.a),r=J.S(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.zD(p,b,o,q,!1)}return B.r.aS(p.a,0,p.b)},
EA(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a2.d,b=c.a,a=c.b,a0=c.c
c=a2.y
s=A.hN(c)
if(c==="floor-wood"){c=a3.c
r=B.c.aY(c/0.22)
for(q=a+0.004,p=a3.a,o=b+p,n=a+0.014,m=s.c,l=0;l<r;++l){k=a0+l*0.22+0.018
j=(l&1)===0?A.fc(m,1.04):A.fc(m,0.84)
A.q(a1,new A.a(b,q,k),new A.a(o,n,k+0.15),j)}q=a2.a
o=q==="hall"
if(o||q==="landing"){i=o?1:0.82
h=b+(p-i)*0.5
p=h+i
c=a0+c
A.q(a1,new A.a(h,a+0.016,a0+0.18),new A.a(p,a+0.026,c-0.18),6443866)
A.q(a1,new A.a(h+0.08,a+0.027,a0+0.22),new A.a(p-0.08,a+0.033,c-0.22),8548460)}if(q==="living-room"){A.q(a1,new A.a(b+1.15,a+0.018,a0+2.15),new A.a(b+4.7,a+0.03,a0+4.35),5589578)
A.q(a1,new A.a(b+1.28,a+0.031,a0+2.28),new A.a(b+4.57,a+0.037,a0+4.22),7824746)}return}if(c==="floor-linoleum"){for(c=s.c,q=a0+0.18,p=b+0.08,o=a+0.004,n=b+a3.a-0.08,m=a+0.012,l=0;l<5;++l){k=q+l*0.62
g=(l&1)===0?A.fc(c,1.04):A.fc(c,0.88)
A.q(a1,new A.a(p,o,k),new A.a(n,m,k+0.5),g)}return}if(c==="floor-tiles"){for(c=s.c,q=b+0.08,p=a0+0.08,o=a+0.004,n=a+0.012,f=0;f<4;++f)for(e=q+f*0.86,m=e+0.78,d=0;d<3;++d){k=p+d*0.86
g=(f+d&1)===0?A.fc(c,1.06):A.fc(c,0.88)
A.q(a1,new A.a(e,o,k),new A.a(m,n,k+0.78),g)}return}if(c==="floor-concrete"){c=s.c
A.q(a1,new A.a(b+0.08,a+0.004,a0+0.08),new A.a(b+a3.a-0.08,a+0.014,a0+a3.c-0.08),c)
A.q(a1,new A.a(b+2.2,a+0.015,a0+2.45),new A.a(b+2.68,a+0.021,a0+2.93),A.fc(c,0.58))}},
EB(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.mn(b2,b4,b5,"living")
A.jf(b2,b4,"living")
a8=a9+b5.a
s=a8-0.48
r=b1+b5.c*0.4
A.q(b2,new A.a(s,b0,r-0.85),new A.a(a8,b0+2.55,r+0.85),7824724)
A.q(b2,new A.a(s-0.38,b0+0.02,r-0.72),new A.a(a8+0.05,b0+0.16,r+0.72),a2)
q=b0+2.34
A.q(b2,new A.a(s-0.52,b0+2.18,r-0.94),new A.a(a8+0.08,q,r+0.94),a3)
p=s-0.02
A.q(b2,new A.a(p,b0+0.45,r-0.48),new A.a(a8+0.03,b0+1.48,r+0.48),2170396)
for(a8=s-0.08,o=b0+0.28,n=r-0.42,m=b0+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.q(b2,new A.a(a8+j,o,n),new A.a(p+j,m,l),a4)}for(a8=s-0.01,p=b0+1.55,o=s+0.04,n=b0+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.q(b2,new A.a(a8,p,l+j),new A.a(o,n,m+j),a2)}for(a8=[r-0.68,r+0.56],p=s-0.42,o=b0+2,n=s-0.26,m=b0+2.2,i=0;i<2;++i){h=a8[i]
A.q(b2,new A.a(p,o,h),new A.a(n,m,h+0.16),a5)}A.q(b2,new A.a(s-0.27,q,r-0.58),new A.a(s-0.07,b0+2.52,r-0.38),a6)
A.q(b2,new A.a(s-0.25,q,r+0.34),new A.a(s-0.06,b0+2.49,r+0.52),a3)
break
case"hall":A.EC(b2,b3,b4,b5,a5,a4)
A.EE(b2,b3,b4,b5,a5,a4)
A.jf(b2,b4,"hall")
A.q(b2,new A.a(a9+0.28,b0+0.78,b1+0.52),new A.a(a9+0.68,b0+0.88,b1+2.15),a5)
for(a8=[b1+0.66,b1+2.01],q=a9+0.34,p=a9+0.42,o=b0+0.8,i=0;i<2;++i){g=a8[i]
A.q(b2,new A.a(q,b0,g),new A.a(p,o,g+0.08),a3)}f=a9+1.22
a8=b1+0.1
A.q(b2,new A.a(f-0.28,b0+2.35,b1+0.02),new A.a(f+0.28,b0+3.02,a8),a5)
A.q(b2,new A.a(f-0.13,b0+2.48,a8),new A.a(f+0.13,b0+2.72,b1+0.15),a2)
a8=b1+0.08
A.q(b2,new A.a(f-0.025,b0+1.82,a8),new A.a(f+0.025,b0+2.36,b1+0.13),a4)
for(q=a9+1.7,p=b0+1.74,o=a9+1.78,n=b0+1.84,m=b1+0.16,k=0;k<3;++k){l=k*0.36
A.q(b2,new A.a(q+l,p,a8),new A.a(o+l,n,m),a4)}a8=b0+0.72
A.q(b2,new A.a(a9+0.86,b0,b1+0.62),new A.a(a9+1.1,a8,b1+0.9),a6)
A.q(b2,new A.a(a9+0.91,a8,b1+0.68),new A.a(a9+1.05,b0+0.82,b1+0.84),a5)
break
case"kitchen":A.jf(b2,b4,"kitchen")
a8=a9+b5.a
e=a8-0.62
q=b0+1.28
A.q(b2,new A.a(e,b0,b1+0.72),new A.a(a8,q,b1+2.18),a4)
A.q(b2,new A.a(e-0.08,q,b1+0.62),new A.a(a8+0.04,b0+1.38,b1+2.28),a2)
for(a8=e+0.12,q=b0+1.39,p=b1+0.88,o=e+0.4,n=b0+1.45,m=b1+1.16,k=0;k<3;++k){l=k*0.4
A.q(b2,new A.a(a8,q,p+l),new A.a(o,n,m+l),2170396)}a8=b0+0.82
q=b0+0.94
A.q(b2,new A.a(a9+1.05,a8,b1+1.15),new A.a(a9+3.1,q,b1+2.35),a3)
for(p=[a9+1.18,a9+2.94],o=b1+1.28,n=b1+1.38,i=0;i<2;++i){d=p[i]
A.q(b2,new A.a(d,b0,o),new A.a(d+0.1,a8,n),a5)}A.q(b2,new A.a(a9+0.48,b0+1.72,b1+2.74),new A.a(a9+2.55,b0+1.84,b1+2.88),a5)
a8=b0+1.02
A.q(b2,new A.a(a9+3.38,q,b1+1.26),new A.a(a9+4.48,a8,b1+2.22),a6)
q=b1+1.66
p=b1+1.74
A.q(b2,new A.a(a9+3.82,a8,q),new A.a(a9+3.9,b0+1.34,p),a4)
A.q(b2,new A.a(a9+3.72,b0+1.3,q),new A.a(a9+4,b0+1.36,p),a4)
for(a8=a9+1.38,q=b0+0.95,p=b1+1.48,o=a9+1.78,n=b0+1.05,m=b1+1.88,k=0;k<2;++k){l=k*0.55
A.q(b2,new A.a(a8+l,q,p),new A.a(o+l,n,m),a6)}break
case"cellar":A.jf(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.q(b2,new A.a(a8+m,b0,q),new A.a(p+m,o+B.d.M(k,2)*0.18,n),a5)}A.q(b2,new A.a(a9+2.55,b0+0.15,b1+0.38),new A.a(a9+2.72,b0+1.55,b1+0.56),a4)
A.q(b2,new A.a(a9+2.42,b0+1.28,b1+0.32),new A.a(a9+2.86,b0+1.38,b1+0.65),a6)
A.q(b2,new A.a(a9+0.4,b0+1.72,b1+0.45),new A.a(a9+3.4,b0+1.82,b1+0.58),a4)
A.q(b2,new A.a(a9+1.9,b0+1.58,b1+0.42),new A.a(a9+2.06,b0+1.76,b1+0.61),a4)
A.q(b2,new A.a(a9+1.84,b0+1.62,b1+0.55),new A.a(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.mn(b2,b4,b5,"bedroom")
A.jf(b2,b4,"bedroom")
c=a9+0.85
b=b1+2.08
a8=b0+0.72
A.q(b2,new A.a(c,b0+0.42,b),new A.a(c+3.65,a8,b+2.05),6972528)
A.q(b2,new A.a(c-0.1,a8,b-0.12),new A.a(c+3.75,b0+1.28,b+0.1),a3)
A.q(b2,new A.a(c+0.22,b0+0.74,b+1.35),new A.a(c+1.05,b0+0.9,b+1.82),a6)
a8=a9+b5.a
q=b0+1.48
A.q(b2,new A.a(a8-0.95,b0+0.78,b1+0.58),new A.a(a8-0.18,q,b1+1.42),a3)
A.q(b2,new A.a(a8-1.04,q,b1+0.48),new A.a(a8-0.1,b0+1.57,b1+1.52),a5)
for(a8=[b+0.22,b+0.78],q=c+0.36,p=b0+0.75,o=c+1.12,n=b0+0.92,i=0;i<2;++i){a=a8[i]
A.q(b2,new A.a(q,p,a),new A.a(o,n,a+0.42),a6)}for(a8=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=b0+0.08,n=b0+0.44,i=0;i<2;++i){a0=a8[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.q(b2,new A.a(a0,o,g),new A.a(l,n,g+0.1),a5)}}break
case"landing":A.mn(b2,b4,b5,"landing")
a8=a9+0.48
A.q(b2,new A.a(a9+0.34,b0+0.02,b1+1.62),new A.a(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.q(b2,new A.a(a8,q+l,p+j),new A.a(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.q(b2,new A.a(a8+l,q,p+j),new A.a(o+l,n,m+j),a5)}break
case"bathroom":A.mn(b2,b4,b5,a7)
A.jf(b2,b4,a7)
a8=b0+0.62
A.q(b2,new A.a(a9+0.3,b0+0.04,b1+0.38),new A.a(a9+2.15,a8,b1+1.22),a6)
q=b0+0.72
A.q(b2,new A.a(a9+0.42,a8,b1+0.48),new A.a(a9+2.03,q,b1+1.12),a2)
a8=a9+b5.a
p=b1+b5.c
A.q(b2,new A.a(a8-0.78,b0+0.12,p-0.88),new A.a(a8-0.18,b0+1.75,p-0.28),a6)
A.q(b2,new A.a(a8-0.86,b0+1.68,p-0.98),new A.a(a8-0.1,b0+1.82,p-0.18),a4)
p=b1+0.68
a8=b0+1.18
o=b1+0.78
A.q(b2,new A.a(a9+0.86,q,p),new A.a(a9+0.96,a8,o),a4)
A.q(b2,new A.a(a9+0.7,b0+1.12,p),new A.a(a9+1.12,a8,o),a4)
break
case"spare-room":A.mn(b2,b4,b5,"spare")
A.q(b2,new A.a(a9+1,b0,b1+0.7),new A.a(a9+3.25,b0+1.65,b1+2),6972528)
A.q(b2,new A.a(a9+0.8,b0+1.6,b1+0.52),new A.a(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.q(b2,new A.a(a8-1.05,b0,q-1.02),new A.a(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.q(b2,new A.a(p,o+l,n),new A.a(a8,m+l,q),a4)}break}A.ED(b2,b3,b4,b5)},
ED(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=2503224,b9=4545124,c0=7901340,c1=3706428,c2=c8.d,c3=c2.a,c4=c2.b,c5=c2.c
c2=c9.a
switch(c8.a){case"living-room":s=c3+c2*0.45
r=c9.c
q=c5+r*0.5
A.dd(c6,new A.a(s,c4,q),0.85,0.35,b8,16)
p=[B.kH,B.kJ,B.kY,B.kV]
for(o=c4+0.35,n=c4+0.8,m=0;m<4;++m){l=p[m]
k=s+l.a
j=q+l.b
A.dd(c6,new A.a(k,o,j),0.12,0.3,b9,8)
A.hk(c6,new A.a(k,n,j),0.16,l.c,!1,8,12)}o=c4+0.55
A.xz(c6,new A.a(s,o,q),0.3,0.45,16752640,!0)
i=c3+0.8
h=c5+r*0.25
g=c5+r*0.35
for(n=c4+0.6,f=0;f<5;++f){e=i+f*0.45
A.dd(c6,new A.a(e,c4,h),0.08,0.45,b8,8)
d=80+f*45
A.hk(c6,new A.a(e,n,h),0.12,(d<<16|d<<8|d)>>>0,!1,6,10)}c=[16766720,15114588,12632256,9489145,14737646]
for(f=0;f<5;++f){e=i+f*0.45
A.dd(c6,new A.a(e,c4,g),0.08,0.45,b9,8)
A.hk(c6,new A.a(e,n,g),0.12,c[f],!1,6,10)}b=c3+c2*0.72
a=c5+r*0.22
a0=c4+0.02
A.q(c6,new A.a(b-0.6,c4,a-0.6),new A.a(b+0.6,a0,a+0.6),3622735)
A.q(c6,new A.a(b-0.4,a0,a-0.4),new A.a(b+0.4,c4+0.03,a+0.4),11583173)
A.dd(c6,new A.a(b-0.3,c4,a),0.02,1.2,b8,6)
A.dd(c6,new A.a(b,c4,a),0.05,1.2,b9,8)
A.dd(c6,new A.a(b+0.3,c4,a),0.1,1.2,b8,10)
a0=c3+c2
a1=a0-1.8
a2=c5+0.6
a3=[0.05,0.1,0.15,0.2,0.3]
for(a4=a1+0.9,f=0;f<5;++f){a5=a2+f*0.4
a6=a3[f]
a7=B.d.M(f,2)===0?b9:c0
A.q(c6,new A.a(a1,c4,a5),new A.a(a4,c4+a6,a5+0.35),a7)}a8=c3+c2*0.5
a4=c5+r
a9=a4-1.2
a7=a9-0.1
b0=c4+2.5
b1=a9+0.1
A.q(c6,new A.a(a8-0.8,c4,a7),new A.a(a8-0.65,b0,b1),b8)
A.q(c6,new A.a(a8+0.65,c4,a7),new A.a(a8+0.8,b0,b1),b8)
A.q(c6,new A.a(a8-0.85,c4+2.4,a9-0.12),new A.a(a8+0.85,c4+2.55,a9+0.12),13840175)
b1=a8-0.82
b0=c4+1
a7=a9-0.11
b2=a8-0.63
b3=a9+0.11
A.q(c6,new A.a(b1,b0,a7),new A.a(b2,c4+1.04,b3),16766720)
A.q(c6,new A.a(b1,c4+1.68,a7),new A.a(b2,c4+1.72,b3),c1)
A.q(c6,new A.a(b1,c4+2,a7),new A.a(b2,c4+2.04,b3),16766720)
b4=c3+1.2
b5=c5+1.2
A.q(c6,new A.a(b4,c4,b5),new A.a(b4+0.8,n,b5+0.8),b9)
A.q(c6,new A.a(b4+0.15,n,b5+0.15),new A.a(b4+0.65,b0,b5+0.65),c0)
A.xz(c6,new A.a(b4+0.4,b0,b5+0.4),0.35,0.35,16117990,!1)
A.AB(c6,new A.a(i,c4,a4-2.2),new A.a(c3+2.2,o,a4-1),b8,B.m)
A.Gc(c6,new A.a(a0-2.8,c4,c5+r*0.55),1,0.28,0.14,4,b9)
A.xz(c6,new A.a(c3+c2*0.25,c4,c5+r*0.78),0.75,1.05,1668818,!1)
break
case"hall":r=c5+0.55
A.dd(c6,new A.a(c3+0.55,c4,r),0.22,2.4,b9,12)
A.dd(c6,new A.a(c3+c2-0.55,c4,r),0.22,2.4,b9,12)
A.hk(c6,new A.a(c3+c2*0.5,c4+1.6,c5+1.2),0.18,c1,!0,8,12)
c2=c3+0.8
r=c5+2.4
A.dd(c6,new A.a(c2,c4,r),0.15,0.9,b8,8)
A.hk(c6,new A.a(c2,c4+1.05,r),0.15,16752640,!0,8,12)
break
case"kitchen":b6=c3+c2*0.45
b7=c5+c9.c*0.5
A.q(c6,new A.a(b6-0.7,c4,b7-0.4),new A.a(b6+0.7,c4+0.85,b7+0.4),b8)
c2=c4+1.1
A.hk(c6,new A.a(b6-0.35,c2,b7),0.22,1668818,!1,8,12)
A.hk(c6,new A.a(b6+0.35,c2,b7),0.22,c1,!1,8,12)
c2=c3+0.9
r=c3+1.4
A.q(c6,new A.a(c2,c4,c5+0.9),new A.a(r,c4+0.5,c5+1.4),c0)
A.AB(c6,new A.a(c2,c4,c5+1.5),new A.a(r,c4+0.4,c5+2.2),b9,B.l)
break
default:c2=c3+c2*0.5
r=c5+c9.c*0.5
A.dd(c6,new A.a(c2,c4,r),0.45,0.6,b9,10)
A.q(c6,new A.a(c2-0.15,c4+0.6,r-0.15),new A.a(c2+0.15,c4+0.9,r+0.15),16117990)}},
mn(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
switch(a0){case"living":g=e+0.58
A.q(a,new A.a(f+0.45,e,d+1.86),new A.a(f+1.18,g,d+2.66),7694457)
s=e+0.12
r=d+1.92
q=e+0.78
p=d+2.6
A.q(a,new A.a(f+0.34,s,r),new A.a(f+0.48,q,p),j)
A.q(a,new A.a(f+1.15,s,r),new A.a(f+1.29,q,p),j)
p=e+0.72
A.q(a,new A.a(f+0.52,g,d+1.8),new A.a(f+1.12,p,d+1.94),i)
A.q(a,new A.a(f+0.35,e,d+0.42),new A.a(f+1.95,p,d+0.7),i)
A.q(a,new A.a(f+0.28,p,d+0.34),new A.a(f+2.02,e+0.84,d+0.78),j)
for(g=[f+0.62,f+1.32],s=e+0.25,r=d+0.68,q=e+0.29,p=d+0.72,o=0;o<2;++o){n=g[o]
A.q(a,new A.a(n,s,r),new A.a(n+0.34,q,p),h)}break
case"bedroom":g=e+0.72
s=d+0.38
r=e+0.84
A.q(a,new A.a(f+0.35,g,s),new A.a(f+1.24,r,d+0.86),i)
for(q=f+0.42,p=[q,f+1.08],m=d+0.46,l=d+0.54,o=0;o<2;++o){k=p[o]
A.q(a,new A.a(k,e,m),new A.a(k+0.08,g,l),j)}A.q(a,new A.a(f+0.55,r,d+0.47),new A.a(f+1.05,e+0.96,d+0.78),h)
A.q(a,new A.a(q,e+0.82,d+0.32),new A.a(f+1.18,e+1.58,s),j)
break
case"landing":g=e+0.48
s=e+0.72
A.q(a,new A.a(f+0.64,g,d+0.32),new A.a(f+1.75,s,d+0.82),7694457)
A.q(a,new A.a(f+0.58,s,d+0.26),new A.a(f+1.81,e+0.82,d+0.88),j)
for(s=[f+0.72,f+1.62],r=d+0.4,q=d+0.48,o=0;o<2;++o){k=s[o]
A.q(a,new A.a(k,e,r),new A.a(k+0.08,g,q),i)}break
case"bathroom":g=e+0.48
A.q(a,new A.a(f+1.55,g,d+1.72),new A.a(f+2.12,e+0.6,d+2.16),h)
for(s=[f+1.62,f+2],r=d+1.78,q=d+1.85,o=0;o<2;++o){k=s[o]
A.q(a,new A.a(k,e,r),new A.a(k+0.07,g,q),j)}break
case"spare":g=e+0.74
s=e+0.86
A.q(a,new A.a(f+1.3,g,d+2.3),new A.a(f+2.42,s,d+2.72),j)
for(r=[f+1.4,f+2.3],q=d+2.36,p=d+2.44,o=0;o<2;++o){k=r[o]
A.q(a,new A.a(k,e,q),new A.a(k+0.08,g,p),i)}A.q(a,new A.a(f+1.62,s,d+2.39),new A.a(f+2.1,e+0.98,d+2.63),h)
break}},
jf(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
switch(a4){case"living":A.q(a2,new A.a(a+0.42,a0,a1+3.24),new A.a(a+0.82,a0+0.26,a1+3.62),13155750)
for(b=a+0.57,s=a0+0.25,r=a1+3.34,q=a+0.62,p=a0+0.92,o=a1+3.39,n=0;n<4;++n){m=n*0.05
l=n*0.04
A.q(a2,new A.a(b+m,s,r-l),new A.a(q+m,p-n*0.07,o-l),d)}break
case"hall":for(b=a+1.62,s=a0+1.88,r=a1+0.04,q=a0+2.24,p=a1+0.1,o=a0+1.94,m=a0+2.16,l=a1+0.12,n=0;n<3;++n){k=b+n*0.38
j=B.d.M(n,2)*0.1
A.q(a2,new A.a(k,s+j,r),new A.a(k+0.25,q+j,p),5913386)
A.q(a2,new A.a(k+0.045,o+j,p),new A.a(k+0.205,m+j,l),13155750)}break
case"kitchen":b=a1+2.88
A.q(a2,new A.a(a+2.98,a0+1.1,a1+2.82),new A.a(a+3.05,a0+1.72,b),c)
s=a+2.72
A.q(a2,new A.a(s,a0+0.82,a1+2.84),new A.a(a+3.2,a0+1.15,a1+2.9),d)
for(s=[a+2.42,s],r=a0+1.38,q=a1+2.8,p=a0+1.48,i=0;i<2;++i){h=s[i]
A.q(a2,new A.a(h,r,q),new A.a(h+0.06,p,b),c)}break
case"cellar":A.q(a2,new A.a(a+2.82,a0,a1+2.72),new A.a(a+3.62,a0+0.58,a1+3.48),5913386)
for(b=a+2.96,s=a1+2.9,r=a0+0.52,q=a0+0.88,n=0;n<4;++n){g=b+B.d.M(n,2)*0.32
f=s+B.d.R(n,2)*0.32
A.q(a2,new A.a(g,r,f),new A.a(g+0.12,q,f+0.12),3680031)}break
case"bedroom":for(b=[a+0.62,a+0.86],s=a0+0.02,r=a1+1.28,q=a0+0.1,p=a1+1.62,i=0;i<2;++i){e=b[i]
A.q(a2,new A.a(e,s,r),new A.a(e+0.18,q,p),d)}break
case"bathroom":b=a0+1.26
A.q(a2,new A.a(a+0.34,b,a1+2.22),new A.a(a+1.24,a0+1.32,a1+2.28),c)
A.q(a2,new A.a(a+0.48,a0+0.82,a1+2.24),new A.a(a+1.1,b,a1+2.3),d)
break}},
EE(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
if(d.length===0)return
s=B.a.gS(d)
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
A.q(a,new A.a(r+0.03,n+0.1,m+0.03),new A.a(p-0.03,d,l-0.03),2367259)
q=m+0.08
o=l-0.08
A.q(a,new A.a(r+0.18,n+0.92,q),new A.a(p-0.18,n+0.98,o),a1)
j=r-0.055
A.q(a,new A.a(j-0.06,n+0.08,m-0.08),new A.a(j,n+1.86,l+0.08),6965557)
A.q(a,new A.a(j-0.075,n+0.18,q),new A.a(j-0.005,d,o),4861989)
for(q=[m+0.2,m+0.63],o=j-0.088,i=n+0.28,h=j-0.006,g=n+0.57,f=0;f<2;++f){e=q[f]
A.q(a,new A.a(o,i,e),new A.a(h,g,e+0.27),5847339)}A.q(a,new A.a(j-0.11,d,m-0.1),new A.a(j+0.01,n+1.84,l+0.1),6965557)
A.q(a,new A.a(j-0.12,n+0.9,m+0.52),new A.a(j-0.08,n+0.99,m+0.61),a2)},
EC(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
if(b1.length===0)return
s=B.a.gS(b1)
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
g=B.c.pM(k/0.18)
f=B.c.aC(1>g?1:g)
e=k/f
g=i-h
d=g/f
c=b1+0.1
for(b=0;b<f;){++b
a=i-b*d
A.q(b2,new A.a(p,c,a),new A.a(o,c+b*e,a+d),b6)}a0=b1+0.08
a1=b1+0.34
A.q(b2,new A.a(p-0.1,a0,h),new A.a(p,a1,i),b0)
A.q(b2,new A.a(o,a0,h),new A.a(o+0.1,a1,i),b0)
a2=o+0.16
a3=o+0.25
a4=b1+0.82
a5=l+0.78
a6=m-0.12
a5=a5<a6?a5:a6
A.q(b2,new A.a(a2,a0,i-0.12),new A.a(a3,a4+0.12,i+0.02),b0)
b1=a5-0.86
if(a0>b1)b1=a0
A.q(b2,new A.a(a2,b1,h-0.02),new A.a(a3,a5,h+0.12),b0)
for(b1=a5-a4,m=a2+0.01,a0=a3-0.01,b=0;b<=5;++b){a7=b/5
a8=i-a7*g
a9=a4+a7*b1
A.q(b2,new A.a(m,a9-0.7,a8-0.025),new A.a(a0,a9,a8+0.025),b7)}A.q(b2,new A.a(a2-0.05,a5-0.08,h-0.08),new A.a(a3+0.05,a5+0.08,h+0.08),b0)},
EF(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.m||a4===B.l?a3.a:a3.c,a=A.e([],t.l5)
for(s=a2.a,r=a1.aE(s),q=J.S(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gn()
if(!p.as&&p.aM(s)===a4)a.push(new A.ee(p.ak(s),p.ak(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.ee(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aL([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.t)(a),++o){m=a[o]
r.J(0,A.e([m.a,m.b],p))}l=A.J(r,r.$ti.c)
B.a.Z(l)
s=A.aL([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.t)(a),++o){m=a[o]
s.J(0,A.e([m.c,m.d],p))}k=A.J(s,s.$ti.c)
B.a.Z(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.N(a,new A.un(f,e,d,c)))continue
A.Gr(a0,a2,a3,a4,f,e,d,c)}A.EG(a0,a2,a3,a4,b,a)},
EG(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.ul(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.ul(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.ul(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.ul(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
A.aS(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.F(a9),o=r.i("n(1)").a(new A.um(b3)),a9=B.a.gu(a9),r=new A.U(a9,o,r.i("U<1>")),o=b2.c,i=b3!==B.m,e=b3===B.l,c=b2.a;r.m();){b=a9.gn()
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
A.EH(b0,b1,b2,b3,b,p)}},
EH(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
ul(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.Gg(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aS(a,b,c,d,n,o,g,h,i,j)}},
Gg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.e([new A.h2(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.t)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.h2(j,m))
j=k.b
if(n<j)B.a.l(p,new A.h2(n,j))}h=p}return h},
Ey(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.lk.q(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.q(a,new A.a(p-0.025,n,o-0.025),new A.a(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.q(a,new A.a(p-0.14,k,o-0.14),new A.a(p+0.14,n,o+0.14),j)
A.q(a,new A.a(p-0.09,n-0.16,o-0.09),new A.a(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.q(a,new A.a(h-0.24,k,e-0.24),new A.a(h+0.24,s,e+0.24),l)
j=s-0.034
A.q(a,new A.a(h-0.15,j,e-0.15),new A.a(h+0.15,k,e+0.15),l)
A.q(a,new A.a(h-0.055,s-0.048,e-0.055),new A.a(h+0.055,j,e+0.055),l)},
aS(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.q(a,new A.a(r+e,q+g,p),new A.a(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.q(a,new A.a(r+e,q+g,s-i),new A.a(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.q(a,new A.a(s-i,q+g,p+e),new A.a(s,q+h,p+f),j)
return
case 3:A.q(a,new A.a(r,q+g,p+e),new A.a(r+i,q+h,p+f),j)
return}},
q(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
m=c.c
s=new A.a(o,n,m)
r=new A.a(k,n,m)
q=new A.a(k,i,m)
p=new A.a(o,i,m)
a.T(j,l,g,h,d)
a.T(s,r,q,p,d)
a.T(l,s,p,g,d)
a.T(r,j,h,q,d)
a.T(l,j,r,s,d)
a.T(g,p,q,h,d)},
dd(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=6.283185307179586/a3,g=b.a,f=b.b,e=f+a1,d=b.c,c=new A.a(g,e,d)
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
a.b9(n,k,i,j,a2,!1)
a.b9(c,c,i,j,a2,!1)
a.b9(b,n,k,b,a2,!1)}},
hk(a,b,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(s=b.a,r=b.b,q=b.c,p=0;p<a3;){o=p/a3*3.141592653589793;++p
n=p/a3*3.141592653589793
for(m=a0*Math.sin(o),l=r+a0*Math.cos(o),k=a0*Math.sin(n),j=r+a0*Math.cos(n),i=0;i<a4;){h=i/a4*3.141592653589793*2;++i
g=i/a4*3.141592653589793*2
f=Math.cos(h)
e=Math.sin(h)
d=Math.cos(g)
c=Math.sin(g)
a.b9(new A.a(s+m*f,l,q+m*e),new A.a(s+m*d,l,q+m*c),new A.a(s+k*d,j,q+k*c),new A.a(s+k*f,j,q+k*e),a1,a2)}}},
AB(a,b,c,d,e){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
m=c.c
s=new A.a(o,n,m)
r=new A.a(k,n,m)
q=new A.a(k,i,m)
p=new A.a(o,i,m)
a.T(l,j,r,s,d)
switch(e.a){case 0:a.T(s,r,h,g,d)
a.T(j,l,g,h,d)
a.T(l,s,g,g,d)
a.T(r,j,h,h,d)
break
case 2:a.T(j,l,p,q,d)
a.T(s,r,q,p,d)
a.T(l,s,p,l,d)
a.T(r,j,j,q,d)
break
case 1:a.T(l,s,q,h,d)
a.T(r,j,h,q,d)
a.T(j,l,l,h,d)
a.T(s,r,q,s,d)
break
case 3:a.T(r,j,g,p,d)
a.T(l,s,p,g,d)
a.T(j,l,g,j,d)
a.T(s,r,r,p,d)
break}},
xz(a,b,c,d,e,f){var s,r,q,p=c*0.5,o=b.a,n=b.b,m=b.c,l=new A.a(o,n+d,m),k=o-p,j=m-p,i=new A.a(k,n,j)
o+=p
s=new A.a(o,n,j)
m+=p
r=new A.a(o,n,m)
q=new A.a(k,n,m)
a.b9(i,s,r,q,e,f)
a.b9(i,s,l,l,e,f)
a.b9(s,r,l,l,e,f)
a.b9(r,q,l,l,e,f)
a.b9(q,i,l,l,e,f)},
Gc(a,b,c,d,e,f,g){var s,r,q,p,o,n
for(s=b.c,r=b.a,q=b.b,p=r+c,o=0;o<f;){n=s+o*d;++o
A.q(a,new A.a(r,q,n),new A.a(p,q+o*e,n+d),g)}},
Gr(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
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
m=A.hN(n).e
a.f2(s.a7(0,o),r.a7(0,o),q.a7(0,o),p.a7(0,o),A.hN(n).c,(f-e)/m,(a1-a0)/m)
l=A.Gs(b,d)
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
default:j=k}A.q(a,o,j,A.fc(A.hN(n).c,0.68))},
fc(a,b){var s,r=new A.vt(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.dw()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.dw()
r=r.$1(a&255)
if(typeof r!=="number")return A.jq(r)
return(q<<16|s<<8|r)>>>0},
Gs(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
zD(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aM(d),b=a3.ak(d),a=b+a3.w
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
A.q(a0,new A.a(r+l,s,d),new A.a(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.q(a0,new A.a(l,s,d),new A.a(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.q(a0,new A.a(r+n,s+m,d),new A.a(r+h,j,i),q)
A.q(a0,new A.a(k,s,d),new A.a(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.q(a0,new A.a(r+l,s,k),new A.a(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.q(a0,new A.a(l,s,k),new A.a(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.q(a0,new A.a(r+n,s+m,k),new A.a(r+h,i,d),q)
A.q(a0,new A.a(j,s,k),new A.a(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.q(a0,new A.a(n,s,d+k),new A.a(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.q(a0,new A.a(n,s,k),new A.a(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.q(a0,new A.a(n,s+e,d+m),new A.a(r,j,d+l),q)
A.q(a0,new A.a(n,s,i),new A.a(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.q(a0,new A.a(r,s,d+l),new A.a(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.q(a0,new A.a(r,s,l),new A.a(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.q(a0,new A.a(r,s+e,d+n),new A.a(k,j,d+m),q)
A.q(a0,new A.a(r,s,i),new A.a(k,s+0.05,l),q)
break}if(a4)A.zE(a0,a1,a2,a3,q)
A.Ez(a0,a1,a2,a3)},
Ez(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.ak(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aM(d)
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
zE(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aM(o),m=d.ak(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.q(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.q(a,new A.a(p,s,o-d.w),new A.a(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.q(a,new A.a(p-d.w,s,o),new A.a(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.q(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.q(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.q(a,new A.a(p,s,o-0.055),new A.a(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.q(a,new A.a(p-0.055,s,o),new A.a(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.q(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break}},
r0:function r0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
un:function un(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
um:function um(a){this.a=a},
vt:function vt(a){this.a=a},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a,b){this.a=a
this.b=b},
yr(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.e([],b5),b7=t.qP,b8=A.e([],b7),b9=A.e([],t.DZ),c0=t.N
c0=new A.p1(b6,b8,b9,A.o(c0,t.U),A.o(c0,t.T),new A.p3())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.J(b6,A.e([new A.aY(n,B.ay,new A.a(4.5,3.9,4),new A.a(0,0,0),A.e([new A.bc("living-north-west",B.m,0.5,0.9,1.2,1.8,!1,!0),new A.bc("living-north-east",B.m,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.bo(m,l,new A.a(1,1.95,1),!1,!1,m),new A.bo(k,j,new A.a(3,1.95,3),!1,!1,k)],q),B.bf,"wallpaper-stripes",i,h,B.M),new A.aY(g,B.ay,new A.a(2.5,3.9,7),new A.a(4.5,0,0),A.e([new A.bc("hall-fanlight",B.m,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.bo("mantle-hall","the hall mantle",new A.a(1,1.95,3.5),!1,!1,o)],q),A.e([new A.bq(e,e,new A.a(0.2,2.175,0.35)),new A.bq(d,d,new A.a(2.2,2.55,3)),new A.bq(c,c,new A.a(0.4,1.35,4.1)),new A.bq(b,b,new A.a(0.92,0.82,5.55))],p),a,i,h,B.M),new A.aY(a0,B.ay,new A.a(4.5,3.75,3),new A.a(0,0,4),A.e([new A.bc("kitchen-south",B.l,1.5,1.05,1.2,1.65,!1,!0),new A.bc("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.bo(a1,"the mantle by the stove",new A.a(0.8,1.8,0.5),!1,!1,a1),new A.bo("mantle-kitchen-second",l,new A.a(2.2,1.8,2),!1,!1,o),new A.bo("mantle-kitchen-third",j,new A.a(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.bq(a2,a2,new A.a(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.j9),new A.aY("cellar",B.ay,new A.a(4,3,4),new A.a(1,-3,2),B.bh,A.e(["hall-cellar"],r),B.iR,B.bf,"wallpaper-damp","floor-concrete","ceiling-pipes",B.M),new A.aY("bedroom",B.az,new A.a(4.5,3.6,4),new A.a(0,4.2,0),A.e([new A.bc("bedroom-north-west",B.m,0.7,1.05,1.1,1.65,!1,!0),new A.bc("bedroom-north-east",B.m,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.bo(a3,"the bedroom mantle",new A.a(1,1.95,1),!1,!1,a3),new A.bo("mantle-bedroom-bedside","the bedside mantle",new A.a(3.5,1.5,3),!1,!1,o)],q),A.e([new A.bq(a4,a4,new A.a(2.2,1.125,2.5)),new A.bq(a5,a5,new A.a(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.M),new A.aY(a6,B.az,new A.a(2.5,3.6,3),new A.a(4.5,4.2,0),B.bh,A.e(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.e([new A.bo("mantle-landing","the landing mantle",new A.a(1,1.8,1.5),!1,!1,o)],q),B.bf,a,i,h,B.M),new A.aY(a8,B.az,new A.a(2.5,3.6,2.5),new A.a(4.5,4.2,3),A.e([new A.bc("bathroom-east",B.v,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a7],r),A.e([new A.bo("mantle-bathroom","the bathroom mantle",new A.a(1.5,1.8,1),!1,!1,o)],q),A.e([new A.bq(a9,a9,new A.a(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.M),new A.aY(b0,B.az,new A.a(4.5,3.15,3),new A.a(0,4.2,4),A.e([new A.bc("spare-south",B.l,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.bo("mantle-spare","the broken mantle",new A.a(2,1.95,1),!1,!0,o)],q),A.e([new A.bq(b1,b1,new A.a(0.5,1.8,0.3)),new A.bq(b2,b2,new A.a(3.7,2.1,2.7)),new A.bq(b3,b3,new A.a(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.M)],b5))
B.a.J(b8,A.e([A.e6(g,"outside","kit-front-door-recessed",!0,B.m,B.l,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.e6(g,n,b4,!1,B.G,B.v,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.e6(g,a0,b4,!1,B.G,B.v,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.e6(a0,n,b4,!1,B.m,B.l,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.e6(g,"cellar","kit-cellar-door-grille",!1,B.l,B.v,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.e6(g,a6,o,!1,B.v,B.v,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.e6(a6,"bedroom",b4,!1,B.G,B.v,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.e6(a6,a8,b4,!1,B.l,B.m,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.e6(a6,b0,b4,!1,B.l,B.m,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dD("hall-stairs",f,B.iH,new A.a(5,0,2.8),new A.a(6.5,6.3,6),new A.a(5.75,2.475,5.8),new A.a(5.75,6.675,2.2)))
c0.la()
c0.lb()
c0.lO()
b5=b6.length
if(b5!==8)A.j(A.m("expected eight rooms, got "+b5))
b5=c0.gpZ()
if(b5!==9)A.j(A.m("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaR(b9).c.length!==3||B.a.gX(B.a.gaR(b9).c)!==9.45)A.j(A.m("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.j(A.m("expected nine physical portals"))
c0.mM()
c0.mK()
return c0},
p1:function p1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
pi:function pi(a){this.a=a},
pj:function pj(){},
pk:function pk(){},
ph:function ph(){},
pl:function pl(a){this.a=a},
pm:function pm(){},
mF(a,b,c){var s=a.aL(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mH(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.Fz(a,s,c,d)},
Fz(a,b,c,d){var s,r,q,p,o=a.aL(b),n=d.ah(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.us(a,b,o,B.m,r,q,p,c,n,m))return!0
if(A.us(a,b,o,B.l,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.us(a,b,o,B.G,s,r,q,c,n,m))return!0
if(A.us(a,b,o,B.v,s+o.a,r,q,c,n,m))return!0
return!1},
us(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a7(0,a6.a8(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.m||a1===B.l
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aE(m),k=J.S(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aM(m)===a1){g=q.ak(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
xT(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mF(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.t)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.a(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gad()
f=a.b
if(Math.acos(B.c.E(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mH(a0,a1,a.a,new A.a(h,g,i)))continue
m=d
l=j}}return l},
AY(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mF(b,j,4.5):4.5
for(s=b.aE(c),r=J.S(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.ph(c,o)
m=a.a
l=new A.a(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.A2(l,k,a,i,0.5236)||k>=q)continue
if(!A.mH(b,c,a.a,n))continue
q=k
p=o}return p},
AZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mF(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
l=A.Gt(b,h,m)
k=a.a
j=new A.a(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.A2(j,i,a,s,0.5236)||i>=p)continue
if(!A.mH(b,c,a.a,l))continue
p=i
o=m}return o},
A2(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.E(a.gad().cm(c.b),-1,1))<=e},
Gt(a,b,c){var s=a.aL(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.a(q.a+r,p,q.c)
break
case 2:q=new A.a(q.a+r,p,q.c+s.c)
break
case 1:q=new A.a(q.a+s.a,p,q.c+r)
break
case 3:q=new A.a(q.a,p,q.c+r)
break
default:q=null}return q},
og:function og(){this.a=null
this.b=0},
rN:function rN(){},
rO:function rO(){},
CE(a){var s=A.jl(a,"inventory asset"),r=A.dN(s,"id"),q=A.dN(s,"kind")
A.dN(s,"source")
A.dN(s,"proxy")
A.dN(s,"pivot")
s=A.jl(s.h(0,"bounds"),"inventory bounds")
return new A.cX(r,q,new A.pu(A.mE(s.h(0,"min"),"bounds.min"),A.mE(s.h(0,"max"),"bounds.max")))},
CF(a){var s,r,q,p,o,n,m,l="stateKey",k=A.jl(a,"inventory placement"),j=A.jl(k.h(0,"visibility"),"placement visibility"),i=A.jl(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dN(k,"id"),f=A.dN(k,"roomId"),e=A.dN(k,"assetId")
A.dN(k,"role")
s=typeof k.h(0,"socket")=="string"?A.v(k.h(0,"socket")):null
k=A.jl(k.h(0,"transform"),"inventory transform")
r=A.mE(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.j(B.fN)
q=A.mE(k.h(0,"position"),"transform.position")
p=A.mE(k.h(0,"rotation"),"transform.rotation")
A.dN(j,"layer")
if(typeof j.h(0,l)=="string")A.v(j.h(0,l))
o=J.a3(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.v(i.h(0,"focusId")):null
m=t.P.b(h)?A.FO(h,"radius"):0
return new A.cA(g,f,e,s,new A.pw(q,p,r),o,n,m)},
jl(a,b){return t.P.b(a)?a:A.dK(b+" is not an object")},
dN(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dK(b+" is not a string")},
FO(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dK(b+" is not finite")},
mE(a,b){var s
if(t.j.b(a)){s=J.aE(a)
s=s.gt(a)!==3||s.N(a,new A.vB())}else s=!0
if(s)return A.dK(b+" is not a finite vec3")
s=J.aE(a)
return new A.a(A.al(s.h(a,0)),A.al(s.h(a,1)),A.al(s.h(a,2)))},
dK(a){return A.j(A.a6(a,null,null))},
p6:function p6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p9:function p9(a){this.a=a},
p7:function p7(a){this.a=a},
p8:function p8(a){this.a=a},
cX:function cX(a,b,c){this.a=a
this.b=b
this.f=c},
cA:function cA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(a,b){this.a=a
this.b=b},
vB:function vB(){},
pv:function pv(a){this.a=a},
d_:function d_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kf:function kf(a){this.a=a},
pa:function pa(a){this.a=a},
e6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bE(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hH:function hH(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
bc:function bc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bE:function bE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bo:function bo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aY:function aY(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
Cy(a){return A.Cx(a)},
Cx(a){var s,r,q,p,o,n,m=A.Ab(a,"sound emitter"),l=t.N,k=A.o(l,l)
for(s=A.Ab(m.h(0,"cues"),"sound emitter cues").gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.fI)
k.k(0,r.a,q)}s=A.xH(m,"id")
r=A.xH(m,"roomId")
p=A.xH(m,"placementId")
o=A.Gp(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.hc("gain is not a number")
return new A.cW(s,r,p,o,n,A.b7(k,l,l))},
Ab(a,b){return t.P.b(a)?a:A.hc(b+" is not an object")},
xH(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hc(b+" is not a string")},
Gp(a,b){var s
if(t.j.b(a)){s=J.aE(a)
s=s.gt(a)!==3||s.N(a,new A.vA())}else s=!0
if(s)throw A.d(A.a6(b+" must be a numeric vec3",null,null))
s=J.aE(a)
return new A.a(A.al(s.h(a,0)),A.al(s.h(a,1)),A.al(s.h(a,2)))},
hc(a){return A.j(A.a6(a,null,null))},
pc:function pc(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
pf:function pf(){},
cW:function cW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
p2:function p2(){this.b=this.a=null},
eH:function eH(a){this.a=a},
pb:function pb(){this.b=this.a=null},
cV:function cV(a,b){this.a=a
this.b=b},
vA:function vA(){},
ys(a,b,c,d,e,f){var s=t.N
return new A.pg(e,f,c,a,A.b7(A.aO(d,s,s),s,s),A.ag(b,s))},
yt(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.o(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
h.k(0,p.a,new A.i6(p.ax,p.ay))}s=A.o(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.t)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.o(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.t)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){j=o[l]
i.k(0,j.a,new A.hV(j.d,j.r))}return A.ys(a.r.b,B.n,i,B.d8,h,s)},
Cz(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jw
r=a3.h(0,"mantleHistory")
if(r==null)r=B.j_
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aN(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.fG)
p=t.N
o=A.o(p,t.DL)
for(n=a.gK(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.cq)
l=A.aO(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bX(j)||!A.bX(i))A.j(B.cq)
o.k(0,k,new A.i6(j,i))}h=A.o(p,t.y)
for(n=a0.gK(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bX(l.b))throw A.d(B.fD)
h.k(0,k,A.R(l.b))}g=A.o(p,t.m2)
for(n=a1.gK(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.co)
l=A.aO(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bX(f)||!A.bX(e))A.j(B.co)
g.k(0,k,new A.hV(f,e))}d=A.o(p,p)
for(q=s.gK(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.hc)
d.k(0,n,A.v(p.b))}c=A.e([],t.s)
for(q=J.S(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.fe)
B.a.l(c,b)}return A.ys(a2,c,g,d,o,h)},
xC(a,b){return a.a.a===b.a&&a.aa(0,b.gaw(b))},
pg:function pg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i6:function i6(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hN(a){var s=B.bo.h(0,a)
if(s==null)throw A.d(A.m("Unknown house surface material: "+a))
return s},
bn:function bn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Cf(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hU(e,A.F(e).c)
q=new A.eg()
q.c3((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hC(a,q,2,r,1+s,A.aL(["time"],t.N))
break
case 3:A.hC(a,q,3,r,1+s,A.aL(["place"],t.N))
break
case 4:A.hC(a,q,4,r,2+s,p)
A.Cb(a,q,4)
break
case 5:A.hC(a,q,5,r,s,p)
A.C9(a,q,5)
break
case 6:A.hC(a,q,6,r,s,p)
A.Ca(a,q)
A.Ce(a,q,6)
break
case 7:A.Cc(a,q,7)
break
default:if(s>0)A.hC(a,q,b,r,s,p)}},
C8(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.Cd(a,b,c))return!1
return!0},
hC(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.an(s,s.r,s.e,A.r(s).i("an<2>"));s.m();){r=s.d
if(A.C8(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.dz(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.ym(a,b,o[p],f)}},
ym(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aO(B.a.gX(o).a,n,n)
if(d==null)s=A.e(B.z.slice(0),t.s)
else{n=t.vY
s=A.J(new A.I(B.z,t.Ag.a(new A.ob(d)),n),n.i("p.E"))}n=s.length
if(n===0)return
n=b.aQ(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.fz(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aQ(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.eb(c.a,m,B.a.gX(o).b)},
Cb(a,b,c){var s=A.yn(a,b,c)
if(!a.cf(s))return
a.fJ(c,t.G.a(s),0,B.b6,null)},
yn(a,b,c){var s,r,q,p,o,n=t.N,m=A.o(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.z[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aQ(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
C9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.an(s,s.r,s.e,A.r(s).i("an<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.dz(i,b)
s=i.length
if(0>=s)return A.f(i,0)
q=i[0]
if(1>=s)return A.f(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aO(B.a.gX(i).a,s,s)
r=p.c
n=A.aO(B.a.gX(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.z[m]
k=o.h(0,l)
j=s.fz(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aQ(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.eb(q.a,o,B.a.gX(i).b)
a.eb(p.a,n,B.a.gX(r).b)},
Ca(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.an(s,s.r,s.e,A.r(s).i("an<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aQ(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.a5(0,q[r].a)},
Ce(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.an(s,s.r,s.e,A.r(s).i("an<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aQ(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.ym(a,b,q[s],null)},
Cc(a,b,c){var s=c+1,r=A.yn(a,b,s)
if(!a.cf(r))return
a.fJ(s,t.G.a(r),0,B.b6,null)},
Cd(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gX(b.c).c===B.aC}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gX(b.c).c===B.aC}if(c===21)return b.e
return!1},
ob:function ob(a){this.a=a},
DB(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p=A.at(q==null?B.n:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.to(n)},
pQ(a,b,c){var s,r,q,p=t.z
p=A.o(p,p)
for(s=0;s<5;++s){r=B.z[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kt(A.b7(p,q,q),b,c)},
yE(a){var s=t.N
return A.pQ(t.P.a(a.h(0,"fields")).bU(0,new A.pR(),s,s),A.al(a.h(0,"shakiness")),A.Ck(B.iL,A.v(a.h(0,"hand")),t.qX))},
Cj(a){var s,r,q,p,o=a.h(0,"margin"),n=A.b(a.h(0,"ordinal")),m=A.b(a.h(0,"day")),l=A.e([],t.Bv)
for(s=J.S(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.yE(r.a(s.gn())))
s=A.aD(a.h(0,"corroborator"))
q=A.R(a.h(0,"locked"))
p=A.zM(a.h(0,"lastReadDay"))
return new A.bZ(n,m,l,s,q,p,o==null?null:A.yE(r.a(o)))},
e_:function e_(a,b){this.a=a
this.b=b},
to:function to(a){this.a=a},
kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(){},
pS:function pS(a){this.a=a},
bZ:function bZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yB(a){return new A.pz(a,A.o(t.S,t.g),A.a0(t.N),A.e([],t.t))},
CK(a,b){var s,r,q,p,o=A.yB(a)
o.e=A.b(b.h(0,"nextOrdinal"))
o.f=A.b(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.Bx(s.a(b.h(0,"tags")),t.N))
for(s=J.S(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Cj(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pz:function pz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pG:function pG(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.c=a
this.a=b
this.b=c},
nt:function nt(){},
nu:function nu(){},
fo:function fo(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
nv:function nv(){},
pL:function pL(){},
pK:function pK(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
qu:function qu(){},
qt:function qt(a,b,c){this.b=a
this.c=b
this.d=c},
qv:function qv(){},
CW(a,b,c){return B.kv},
kJ:function kJ(a,b){this.a=a
this.b=b},
qw:function qw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qx:function qx(){},
ks:function ks(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qD:function qD(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
wT(a){if(!isFinite(0))A.j(A.am(0,"interpolation",null))
return new A.qW(a)},
ic:function ic(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
qW:function qW(a){this.a=a},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
yR(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hU(c,A.F(c).c)
r=A.J(r,A.r(r).c)
B.a.Z(r)
s=t.N
r=A.ag(r,s)
r=new A.qU(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.b7(l,s,t.X))
r.kZ(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
qV(a,b,c,d,e){var s=A.ms("RENDERER_SHA"),r=A.ms("GAME_SHA"),q=A.ms("DART_SDK_VERSION")
return A.yR(a,"6a5fdb66b3a1-f8ff05f01916-dirty",b,c,d,r,A.ms("LOCKFILE_SHA256"),e,A.ms("PROJECT_VERSION"),s,q,null)},
ms(a){var s=B.jo.h(0,a)
return s.length===0?null:s},
qU:function qU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qX:function qX(a){this.a=a
this.b=0},
rH:function rH(a){this.a=a},
ah(a,b,c,d,e,f,g,h,i,j){return new A.e8(e,g,a,f,i,h,j,c,c,b)},
cI:function cI(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c,d,e,f,g,h,i,j){var _=this
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
rI:function rI(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rL:function rL(a){this.a=a},
rK:function rK(a){this.a=a},
rJ:function rJ(a){this.a=a},
yj(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.j(A.a6("saved day-loop resources must not be negative",null,null))
return new A.o3(c,g,b,a,e,d===!0,s)},
C2(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.fu)
s=A.e([],t.El)
for(r=J.S(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.fH)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aN(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.fq)
f=A.bA(new A.I(B.cT,q.a(new A.o4(h)),p),o)
e=A.bA(new A.I(B.cZ,n.a(new A.o5(g)),m),l)
if(f==null||e==null)throw A.d(B.h7)
B.a.l(s,new A.fT(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aN(d)||!A.aN(c)||!A.aN(b)||!A.bX(a))throw A.d(B.fP)
return A.yj(c,d,a1,a,b,s,a3)},
bT:function bT(a,b){this.a=a
this.b=b},
bH:function bH(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
o3:function o3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o4:function o4(a){this.a=a},
o5:function o5(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
tt:function tt(a,b){this.b=a
this.c=b},
f0:function f0(a,b){this.a=a
this.b=b},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
pn:function pn(a){this.c=a},
pr:function pr(a,b){this.a=a
this.b=b},
ps:function ps(){},
yT(){var s=A.xo(B.n),r=A.xo(B.n),q=new A.r2(B.D,s,r)
if(!isFinite(0))A.j(B.ff)
if(!B.a.aa(r,B.a.gaw(s)))A.j(B.fQ)
if(q.a===B.D&&q.b!==0&&!q.e)A.j(B.fj)
return q},
xo(a){var s,r,q,p=A.e([],t.s),o=A.a0(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.h4)
B.a.l(p,q)}return p},
cn:function cn(a,b){this.a=a
this.b=b},
r1:function r1(){},
d1:function d1(){},
r2:function r2(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
Ff(a){var s,r=A.e([],t.yo)
for(s=1;s<=21;++s)r.push(new A.va(s).$0())
return r},
Hf(a){var s=B.c.E(a,0,1)
if(s<=0.5)return A.A8(4491468,16777215,s*2)
return A.A8(16777215,16759637,(s-0.5)*2)},
A8(a,b,c){var s,r=new A.vi(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.dw()
s=r.$1(8)
if(typeof s!=="number")return s.dw()
r=r.$1(0)
if(typeof r!=="number")return A.jq(r)
return(q<<16|s<<8|r)>>>0},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tp:function tp(a){this.b=a},
va:function va(a){this.a=a},
vi:function vi(a,b,c){this.a=a
this.b=b
this.c=c},
q8(a,b,c){var s,r=t.N,q=A.o(r,r)
if(a!=null)q.J(0,a)
s=A.o(r,r)
if(b!=null)s.J(0,b)
r=A.o(r,t.Fr)
if(c!=null)r.J(0,c)
return new A.q7(q,s,r)},
CR(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aN(s)||s!==1)return l
r=A.yK(a.h(0,"choices"))
q=A.yK(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.o(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gK(),k=k.gu(k);k.m();){n=k.gn()
m=A.Cp(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.q8(r,q,p)},
yK(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.o(s,s)
for(s=a.gK(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.v(q.b))}return r},
Cp(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aN(r)||r<1||!A.aN(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cQ(s,r,q,p)},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(){},
qa:function qa(){},
qb:function qb(){},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qr:function qr(a){this.a=a},
qs:function qs(a){this.a=a},
fV(a){var s,r,q=A.o(t.N,t.z)
for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
rS:function rS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rT:function rT(){},
rU:function rU(){},
eZ:function eZ(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rV:function rV(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
rW:function rW(){},
rX:function rX(){},
ju:function ju(a){this.a=a},
wA:function wA(a,b,c){this.b=a
this.e=b
this.f=c},
BE(a){var s,r,q,p
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fh)
s=new A.mP()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.xc(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dO(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aX(B.bk,new A.mN(a),new A.mO()))},
cO:function cO(a,b){this.a=a
this.b=b},
dO:function dO(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mP:function mP(){},
mN:function mN(a){this.a=a},
mO:function mO(){},
n_:function n_(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
n1:function n1(a){this.a=a},
n0:function n0(a,b){this.a=a
this.b=b},
BK(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fM)
s=new A.nc()
return new A.dP(s.$1$2(B.bi,a.h(0,"output"),t.xs),s.$1$2(B.bc,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bb,a.h(0,"reverb"),t.gc),s.$1$2(B.ba,a.h(0,"ducking"),t.ul))},
cx:function cx(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
nc:function nc(){},
nd:function nd(a,b){this.a=a
this.b=b},
ne:function ne(a){this.a=a},
nx:function nx(a){this.a=a
this.b=null},
nB(a,b,c){var s
b.C()
if(c<1||c>6)throw A.d(A.am(c,"level","must be between 1 and 6"))
s=A.E(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nz(s,b)
return s},
dT(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.E(a,"button","brush-button brush-state-"+s.b,r)
A.nz(q,b)
q.type="button"
q.disabled=s===B.at
q.addEventListener("click",A.Z(new A.nA(c)))
return q},
BQ(a,b,c,d){var s,r
b.C()
s=A.c(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.at
A.nz(s,b)
s.addEventListener("change",A.Z(new A.nE(d,s)))
return s},
BP(a,b,c,d,e,f){var s,r
b.C()
s=A.c(a.createElement("input"))
s.type="range"
s.min=A.x(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.at
A.nz(s,b)
s.addEventListener("input",A.Z(new A.nD(s,e)))
return s},
wC(a,b){var s=B.b.kE(A.v(a.className),A.yQ("\\s+")),r=A.F(s),q=r.i("I<1>"),p=A.J(new A.I(s,r.i("n(1)").a(new A.nC()),q),q.i("p.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a_(p," ")
a.setAttribute("data-brush-state",s)},
nz(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gmR())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.at)a.setAttribute("aria-disabled","true")},
nA:function nA(a){this.a=a},
nE:function nE(a,b){this.a=a
this.b=b},
nD:function nD(a,b){this.a=a
this.b=b},
nC:function nC(){},
dR:function dR(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
b5:function b5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nG:function nG(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b},
yh(a){var s=!1
if(a.length!==0)if(!B.dz.q(0,a))s=B.ls.q(0,a)||B.lj.q(0,a)||B.lr.q(0,a)||!B.b.W(a,"Mouse")
return s},
EZ(a){var s,r,q,p,o=t.N,n=A.o(o,t.a)
for(s=new A.K(a,A.r(a).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.at(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
FF(a){var s,r,q=A.o(t.N,t.a),p=a==null?null:new A.K(a,A.r(a).i("K<1,2>"))
p=J.S(p==null?A.e([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
fx(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fI(B.jl,s,r)
if(b!=null)q.J(0,b)
q.J(0,A.FF(a))
s=new A.fw(g,d,h,e,f,c,A.b7(A.EZ(q),s,r))
s.C()
return s},
C_(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.cp)
s=a.h(0,"version")
r=J.er(s)
if(!r.a3(s,1)&&!r.a3(s,2))throw A.d(B.cp)
q=A.o(t.N,t.a)
for(j=j.a(a.h(0,k)).gK(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.fC)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.By(m,new A.nT())){o=A.e([],r)
for(l=J.S(m);l.m();)o.push(A.v(l.gn()))
q.k(0,n,o)}else throw A.d(B.fl)}j=A.al(a.h(0,"horizontalSensitivity"))
r=A.al(a.h(0,"verticalSensitivity"))
p=A.R(a.h(0,"invertX"))
o=A.R(a.h(0,"invertY"))
return A.fx(null,q,A.R(a.h(0,"holdToInteract")),j,p,o,2,r)},
xe(a){var s,r,q,p=t.N,o=A.o(p,t.a)
for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.J(r.b,p)
o.k(0,q,r)}return o},
xx(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
xL(a,b){var s,r,q,p=A.e([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fw:function fw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nV:function nV(){},
nU:function nU(a){this.a=a},
nW:function nW(){},
nX:function nX(){},
nY:function nY(){},
nT:function nT(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.c=b},
jN:function jN(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
BZ(a){var s=t.N,r=t.m
r=new A.hz(A.fx(null,null,!1,1,!1,!1,2,1),A.o(s,r),A.o(s,r),A.o(s,r),a,A.c(a.createElement("div")))
r.aT(a)
r.kQ(a)
return r},
hz:function hz(a,b,c,d,e,f){var _=this
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
nR:function nR(a,b){this.a=a
this.b=b},
nS:function nS(a){this.a=a},
nQ:function nQ(a,b){this.a=a
this.b=b},
nO:function nO(a,b){this.a=a
this.b=b},
nP:function nP(a,b){this.a=a
this.b=b},
C0(a){var s=new A.nZ(a,A.c(a.createElement("div")))
s.aT(a)
s.kR(a)
return s},
nZ:function nZ(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
o_:function o_(a){this.a=a},
C6(a){var s=new A.o7(A.E(a,"div","door",null))
s.kT(a)
return s},
yk(a){var s,r,q
if(a.length===0)return""
s=A.e([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.a_(s,"; ")+"."},
o7:function o7(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
o8:function o8(a){this.a=a},
o9:function o9(a,b){this.a=a
this.b=b},
oa:function oa(a,b){this.a=a
this.b=b},
Cg(a){var s=new A.od(a,A.c(a.createElement("div")))
s.aT(a)
s.kU(a)
return s},
od:function od(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
oe:function oe(a){this.a=a},
oF:function oF(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
oG:function oG(){},
Cs(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.oH(a.b===B.cw,a.c===B.cA,s,a.e===B.cx,a.f===B.cu,a.r===B.cC,a.w,a.x)},
oH:function oH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wE(a,b,c,d,e,f,g,h){return new A.fE(d,f,h,e,a,g,c,b)},
Ct(a){var s,r,q,p,o,n,m,l
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fU)
s=new A.oI(a)
r=a.h(0,"contextualReminders")
if(!A.bX(r))throw A.d(B.h5)
q=s.$1$2("interactionMode",B.bj,t.bK)
p=s.$1$2("promptDensity",B.bn,t.dn)
o=s.$1$2("textPacing",B.bl,t.j_)
n=s.$1$2("journalLayout",B.bd,t.gm)
m=s.$1$2("confirmations",B.b8,t.aJ)
l=s.$1$2("saveFeedback",B.be,t.mx)
return A.wE(m,r,s.$1$2("focusLossBehavior",B.aE,t.x),q,n,p,l,o)},
dr:function dr(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
oI:function oI(a){this.a=a},
oJ:function oJ(a,b){this.a=a
this.b=b},
oK:function oK(a){this.a=a},
yq(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fL)
s=new A.dZ(1,B.a.aX(B.cU,new A.oW(a),new A.oX()),A.v(a.h(0,"renderScale")),A.R(a.h(0,"dynamicResolution")),A.v(a.h(0,"frameTarget")),A.v(a.h(0,"antialiasing")),A.v(a.h(0,"textureQuality")))
s.C()
return s},
kc(a,b){var s=b==null?B.b5:b
return new A.oY(s,a==null?B.b5:a)},
AT(a,b){var s,r,q
a.C()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.e9(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.e9("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.i1(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cL&&b.a<2){q=q.i2(B.b4)
B.a.l(s,"High preset was reduced to Standard")}return new A.oR(q,A.ag(s,t.N))},
cy:function cy(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oW:function oW(a){this.a=a},
oX:function oX(){},
oY:function oY(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a,b){this.a=a
this.b=b},
Cv(a){var s=new A.hL(A.o(t.N,t.m),B.b5,a,A.c(a.createElement("div")))
s.aT(a)
s.kV(a)
return s},
hL:function hL(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oU:function oU(a){this.a=a},
oV:function oV(a){this.a=a},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
oS:function oS(a){this.a=a},
jv:function jv(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
oZ:function oZ(){this.c=0},
Cw(a){var s=new A.p_(a,A.c(a.createElement("div")))
s.aT(a)
s.kW(a)
return s},
p_:function p_(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
p0:function p0(a){this.a=a},
pA:function pA(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pB:function pB(a){this.a=a},
pC:function pC(a){this.a=a},
pD:function pD(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(){},
pF:function pF(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qg:function qg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
E(a,b,c,d){var s=A.c(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zW(a){var s,r,q,p=A.c(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.sL)
for(s=t.m,r=0;r<A.b(p.length);++r){q=A.l(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
i5:function i5(){},
bp:function bp(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(){},
qn:function qn(){},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
ql:function ql(a){this.a=a},
qo:function qo(a){this.a=a},
cG:function cG(a,b){this.a=a
this.b=b},
qp:function qp(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qq:function qq(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
qC:function qC(a){this.a=a
this.b=null},
Dh(a){var s=new A.r9(a,A.c(a.createElement("div")))
s.aT(a)
s.l0(a)
return s},
r9:function r9(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ra:function ra(a,b){this.a=a
this.b=b},
rb:function rb(a){this.a=a},
kZ(a,b){var s=t.N,r=t.m
r=new A.fS(b,A.o(s,r),A.o(s,r),A.o(s,t.rf),A.o(s,r),$.wu(),B.aq,A.o(s,r),A.o(s,r),B.aT,A.o(s,r),a,A.c(a.createElement("div")))
r.aT(a)
r.l1(a,b)
return r},
fS:function fS(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
rx:function rx(a){this.a=a},
ry:function ry(a){this.a=a},
rz:function rz(a,b){this.a=a
this.b=b},
rA:function rA(a){this.a=a},
rB:function rB(a){this.a=a},
rr:function rr(a,b){this.a=a
this.b=b},
rs:function rs(a,b){this.a=a
this.b=b},
rq:function rq(a){this.a=a},
rt:function rt(a){this.a=a},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
ru:function ru(a,b){this.a=a
this.b=b},
rp:function rp(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
rm:function rm(a){this.a=a},
rn:function rn(a){this.a=a},
ro:function ro(a){this.a=a},
rh:function rh(a,b,c){this.a=a
this.b=b
this.c=c},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rf:function rf(a){this.a=a},
rg:function rg(a){this.a=a},
rw:function rw(a,b,c){this.a=a
this.b=b
this.c=c},
rv:function rv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rD(a){return B.a.aX(B.C,new A.rE(a),new A.rF(a))},
Di(){var s,r,q=A.o(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
dB(a,b){var s=t.z
s=A.fI(A.Di(),s,s)
if(a!=null)s.J(0,a)
s=new A.rC(b,A.b7(s,t.N,t.K))
s.l2(a,b)
return s},
yW(a){var s,r=t.f
if(!r.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.h2)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.ft)
return A.dB(A.aO(s,t.N,t.K),A.b(a.h(0,"version")))},
bG:function bG(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
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
rE:function rE(a){this.a=a},
rF:function rF(a){this.a=a},
rC:function rC(a,b){this.a=a
this.b=b},
wW(a,b){var s=b==null?A.dB(null,1):b
return new A.rG(s,a==null?A.dB(null,1):a)},
Dj(a,b){var s,r,q,p,o,n,m,l=A.o(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eO(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.dl(r)
J.bk(l,s.a,r)}catch(n){if(!(A.aj(n) instanceof A.H))throw n}}m=A.dB(l,1)
return A.wW(m,m)},
rG:function rG(a,b){this.a=a
this.b=b},
Dk(a){var s=new A.rP(a,A.c(a.createElement("div")))
s.aT(a)
s.l3(a)
return s},
rP:function rP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rQ:function rQ(a,b,c){this.a=a
this.b=b
this.c=c},
BH(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.Fg)
for(s=a.d,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gK(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cv(p+m+":"+k,m,l.a,l.b,j))}}B.a.U(i,new A.mY())
return new A.mX(A.ag(i,t.bC),A.a0(t.N))},
cv:function cv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mX:function mX(a,b){this.a=a
this.b=b},
mZ:function mZ(){},
mY:function mY(){},
DA(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mQ
s=t.L
r=A.o(s,t.q1)
q=A.r(a).i("ad<1>")
p=A.J(new A.ad(a,q),q.i("p.E"))
B.a.Z(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.t)(p),++l){k=p[l]
for(j=a.h(0,k).gK(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.bb(new A.bu(B.my,k+" has an out-of-range authored day "+h+"."))
g=A.Dz(k,h,i.b,m)
if(g instanceof A.bb)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bU(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.o(a,q)
for(o=a0.ax,o=new A.an(o,o.r,o.e,A.r(o).i("an<2>"));o.m();){n=o.d
J.fh(e.cD(n.b,new A.ti()),n)}o=A.b7(a0.at,a,t.sy)
q=A.o(a,q)
for(n=new A.K(e,e.$ti.i("K<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.at(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.lo(new A.ln(r,A.a0(a),A.a0(s),o,q,A.e([],t.Dc),B.Q,A.q8(b,b,b)))},
Dz(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.o(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cR[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gK(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.W(h,m))continue
g=A.dy(B.b.b3(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bb(new A.bu(B.mz,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cY
B.a.l(l,new A.c7(g,i.b,f))}if(l.length===0)continue
B.a.U(l,new A.tf())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bb(new A.bu(B.dS,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bb(new A.bu(B.dS,a+" day "+s+" has no authored tiers."))
return new A.lU(c)},
ln:function ln(a,b,c,d,e,f,g,h){var _=this
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
tl:function tl(a){this.a=a},
tk:function tk(a){this.a=a},
tm:function tm(a){this.a=a},
tg:function tg(a){this.a=a},
th:function th(){},
tj:function tj(a){this.a=a},
ti:function ti(){},
te:function te(a){this.a=a},
td:function td(a){this.a=a},
tf:function tf(){},
lo:function lo(a){this.a=a},
lU:function lU(a){this.a=a},
GM(a){var s,r,q,p=A.a0(t.N)
for(s=new A.K(a,A.r(a).i("K<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaG(),q=q.gu(q);q.m();)if(q.gn().ga2().N(0,new A.vK())){p.l(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.Z(s)
return s},
GL(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.at(b,!0,s)
B.a.Z(r)
q=new A.eg()
q.c3((a^913741)>>>0)
p=q.aQ(4)
if(!(p>=0&&p<4))return A.f(B.cQ,p)
o=B.cQ[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.at(r,!0,s)
B.a.dz(m,q)
s=A.iq(m,0,A.eq(n,"count",t.S),A.F(m).c).c_(0)
B.a.Z(s)
return s},
vK:function vK(){},
z7(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aN(r)||!A.aN(q)||!A.aN(p)||r<1||q<0||q>23||p<0)return null
return new A.bU(s,r,q,p)},
Dy(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a0(t.N)
for(s=t.j,q=J.S(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a0(t.L)
for(s=J.S(s.a(a.h(0,j)));s.m();){n=A.z7(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.BG(m)
if(!s&&l==null)return i
return new A.lp(r,o,l)},
BG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.z7(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aN(p))if(!(p<0))if(A.bX(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bA(new A.I(B.cR,t.qR.a(new A.mU(r)),t.cE),t.hF)
j=A.bA(new A.I(B.jh,t.da.a(new A.mV(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bA(new A.I(B.io,t.kr.a(new A.mW(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jw(s,k,j,p,i,n,A.aD(m))},
bQ:function bQ(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d8:function d8(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
tc:function tc(){},
jw:function jw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mU:function mU(a){this.a=a},
mV:function mV(a){this.a=a},
mW:function mW(a){this.a=a},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
tn:function tn(){},
bb:function bb(a){this.a=a},
ll:function ll(a){this.a=a},
lj:function lj(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
FU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.jr())return f
n=A.d6().gaO()
m=n.h(0,"captureSeed")
l=A.dy(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dy(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eO(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.k.aJ(s,f)
if(t.f.b(q)){m=t.N
p=A.o(m,m)
for(m=q.gK(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.ll.q(0,o.b))return f
J.bk(p,A.v(o.a),A.v(o.b))}r=p}else return f}catch(g){if(A.aj(g) instanceof A.H)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lq.q(0,i))return f
if(h!=null&&!B.lo.q(0,h))return f
return new A.tA(l,k,j,h,r)},
FV(){var s,r,q,p=A.d6().gaO().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eC
break A}if("intimate"===p){s=B.eE
break A}s=B.eD
break A}r=A.d6().gaO().h(0,"cameraFov")
q=A.eO(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fr(B.c.E(q,35,100)*3.141592653589793/180,s.b,s.c)},
jm(a){var s=$.b2
if(s===a&&B.b.q(A.v(a.b.className),"open"))return
if(s!=null)s.a9()
$.b2=a
if(a===$.ct.j())$.hr().jE("gameplay.viewport")
else $.hr().pd(A.Ad(a))
s=$.ae.j()
s.ay=!1
s.be()
$.em=0
a.bV()},
xt(a,b,c){var s,r,q
$.jn=!0
s=$.b2
if(s!=null)s.a9()
$.b2=a
s=$.hr()
if(s.a.a.length===0)s.jE(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dx(b,B.X,c))
q=s.a
s.a=new A.e4(r,q.b,q.c)
s.lz(b)
s=$.ae.j()
s.ay=!1
s.be()
$.em=0
a.bV()
$.jn=!1},
dM(a){var s,r,q,p,o,n,m,l=null
if($.jn)return
$.jn=!0
a.a9()
$.b2=null
s=$.hr().n0()
$.jn=!1
r=s.a
if(r===B.dn){$.em=0
r=$.ae.j()
r.be()
r.ay=!0
q=A.l(A.c(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dm)return
r=s.c.a
r=r.length===0?l:B.a.gX(r)
p=r==null?l:r.a
A:{if(B.bs===p){r=$.ct.j()
break A}if(B.dc===p){r=$.hb.j()
break A}r=l
break A}if(r!=null){o=s.d
$.b2=r
n=$.ae.j()
n.ay=!1
n.be()
$.em=0
r.bV()
m=o==null?l:A.l(A.c(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jp(a){if($.b2===a&&B.b.q(A.v(a.b.className),"open"))a.a9()
else A.jm(a)},
hh(a){var s
if($.jn)return
if($.b2===a)$.b2=null
if(a===$.ct.j())$.hr().cE()
else $.hr().nT(A.Ad(a))
$.em=0
s=$.ae.j()
s.be()
s.ay=!0},
Ad(a){if(a===$.ct.j())return B.dd
if(a===$.hb.j())return B.X
if(a instanceof A.fS)return B.X
if(a instanceof A.hL)return B.X
if(a instanceof A.hz)return B.X
if(a===$.ha.j())return B.kf
if(a===$.mm.j())return B.kg
if(a===$.jb.j())return B.kh
if(a===$.mk.j())return B.X
if(a===$.j9.j())return B.kj
return B.ki},
mr(a,b){var s
a.soZ(new A.uz())
a.sp0(new A.uA())
a.sp_(new A.uB())
a.soV(new A.uH())
a.soY(new A.uI())
a.spc(new A.uJ())
a.sp7(new A.uK())
a.sp6(new A.uL())
a.sb8(b?new A.uM(a):new A.uN(a))
a.sb1(b?new A.uO(a):new A.uC(a))
s=a.f
if(s===B.H)a.soM(new A.uD())
if(s===B.Z)a.soW(new A.uE())
if(s===B.I){a.soL(new A.uF())
a.sp5(new A.uG())}},
EW(){var s=$.h9.j()
s.seZ(new A.uw())
s.sb8(new A.ux())
s.sb1(new A.uy())},
FK(){var s,r,q,p,o,n=null
try{n=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aJ(n,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.fW)
q=A.yq(r.h(0,"requested"))
$.vb=A.kc(A.yq(r.h(0,"effective")),q)}catch(s){$.vb=A.kc(null,null)}p=$.y5().a
o=A.AT(p,A.A_())
r=o.a
$.vb=A.kc(r,p)
$.h9.j().ft(p,r,o.b)
A.Ah()},
A_(){var s,r,q,p,o=$.dc.j().gbx().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.W(p,"max-samples-"))continue
r=A.dy(B.b.b3(p,12),null)
if(r==null)r=1}return new A.oQ(r,B.a.q(o,"disjoint-timer-query"))},
Ah(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.aj($.y5().B(),null))}catch(s){}},
EV(){var s=$.j8.j()
s.seZ(new A.ut())
s.sb8(new A.uu())
s.sb1(new A.uv())},
FI(){var s,r,q,p,o,n=null
try{n=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.xj=A.C_(B.k.aJ(n,null))}catch(s){$.xj=A.fx(null,null,!1,1,!1,!1,2,1)}r=$.j8.j()
q=r.w=$.ff()
r.x=new A.jN(q)
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
r.e1()
$.ae.j().fp($.ff().r)
r=$.ae.j()
q=$.ff()
p=r.ch
p.a=q.f
p.f8()
r.be()
A.Af()},
Af(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.aj($.ff().B(),null))}catch(s){}},
FH(){var s,r=null
try{r=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.jg=A.BK(B.k.aJ(r,null))}catch(s){$.jg=B.aT}$.h7.j().kc($.jg)
A.Ae()
A.xb()},
Ae(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.aj($.jg.B(),null))}catch(s){}},
xb(){var s=$.by
if(s==null)return
s.km($.jg)},
FJ(){var s,r=null
try{r=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.xn=A.Ct(B.k.aJ(r,null))}catch(s){$.xn=$.wu()}$.ja.j().kd($.ww())
A.Ag()
A.zH()},
Ag(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.k.aj($.ww().B(),null))}catch(s){}},
zH(){var s,r="detailed",q=A.Cs($.ww()),p=A.l(A.c(v.G.document).documentElement)
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
FG(){var s,r=null
try{r=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.el=A.BE(B.k.aJ(r,null))}catch(s){$.el=B.aq}$.fa.j().fo($.el)
A.xu()
A.mo()},
xu(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.aj($.el.B(),null))}catch(s){}},
mo(){var s,r,q,p,o,n,m=$.el,l=$.vw,k=$.xJ,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.j(B.fr)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a9
$.mB=l
r=$.bV.j()
r.r=$.mB?0.5:1
q=A.l(A.c(v.G.document).documentElement)
r=q==null
p=r?null:A.R(A.c(q.classList).contains("high-contrast"))
o=r?null:A.R(A.c(q.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!r)A.R(A.c(q.classList).toggle("reduced-motion",l))
if(!r)A.R(A.c(q.classList).toggle("photosensitivity-safe",k))
if(!r)A.R(A.c(q.classList).toggle("captions-enabled",s))
if(!r)A.R(A.c(q.classList).toggle("reduced-effects",o))
if(!r)A.R(A.c(q.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(q))A.c(q.style).setProperty("font-size",A.x(j*100)+"%")
r=$.B.j()
r.setAttribute("data-accessibility-reduced-motion",""+l)
r.setAttribute("data-accessibility-photosensitivity-safe",""+k)
r.setAttribute("data-accessibility-ui-scale",A.x(j))
r.setAttribute("data-accessibility-captions",""+s)
r.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
r.setAttribute("data-accessibility-reduced-effects",""+o)
r.setAttribute("data-accessibility-focus-visible",""+p)
r.setAttribute("data-accessibility-essential-cues","true")
if($.zF){m=$.bd.j()
l=$.el.f
m.e=new A.ju(l==null?B.a9:l)
m=$.bd.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Fk(){var s=v.G,r=A.c(A.c(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.c(A.c(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.vf(r,q)
r.addEventListener("change",A.Z(new A.vd(s)))
q.addEventListener("change",A.Z(new A.ve(s)))},
vR(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
var $async$vR=A.bi(function(e4,e5){if(e4===1){o.push(e5)
s=p}for(;;)switch(s){case 0:e0=v.G
e1=A.l(A.c(e0.document).getElementById("game"))
if(e1==null){s=1
break}$.B.b=e1
$.xm=A.l(A.c(e0.document).getElementById("fps"))
$.c9.b=$.Bj().cI(A.d6().gaO().h(0,"renderer"))
A.Fl()
b9=$.B.j()
c0=A.b(A.c(e0.window).innerWidth)>0?A.b(A.c(e0.window).innerWidth):800
b9.width=c0
c0=$.B.j()
b9=A.b(A.c(e0.window).innerHeight)>0?A.b(A.c(e0.window).innerHeight):600
c0.height=b9
c1=A.l(A.c(e0.document).getElementById("ui-canvas"))
if(c1!=null){c1.width=A.b($.B.j().width)
c1.height=A.b($.B.j().height)
b9=new A.nG(c1,A.e([],t.km))
c2=A.l(c1.getContext("2d"))
if(!t.m.b(c2))A.j(A.m("Failed to get 2D context for CanvasP5GuiEngine"))
b9.b=c2
$.vp=new A.qX(b9)}n=A.l(e1.getContext("webgl2"))
if(n==null){$.c9.b=B.c8.i7($.c9.j(),B.e4)
g=B.aW.nO($.c9.j())
g.bm()
$.dc.b=g
A.xy()
A.en("no-webgl2")
e0=A.l(A.c(e0.document).getElementById("credits"))
if(e0!=null)e0.textContent="this browser has no webgl2."
s=1
break}try{if($.c9.j().a===B.a1){b9=t.s6
c0=t.N
c3=t.iO
c4=t.m3
c5=t.pw
c6=new A.iR(n,A.b($.B.j().width),A.b($.B.j().height),A.e([],b9),A.o(c0,t.qr),A.e([],t.s3),A.o(c0,c3),A.o(c0,c4),A.o(c0,t.xp),A.o(c0,t.bE),A.o(c0,c3),A.o(c0,c4),A.e([],b9),A.o(c0,c3),A.o(c0,c4),A.o(c0,c0),A.o(t.S,c5),A.o(c0,t.qS),A.e([],t.j5),B.iP,A.o(c0,t.Aj),A.o(c0,c0),A.o(c0,c5),A.o(c0,t.vD),A.o(c0,c5),B.hd,B.kx)}else c6=new A.fY(n,A.b($.B.j().width),A.b($.B.j().height),A.d6().gaO().h(0,"render")==="legacy",$.c9.j().d,$.c9.j().e)
m=c6
$.bz=m instanceof A.iR?m:null
$.mu=m instanceof A.fY?m:null
b9=B.aW.ec($.c9.j(),m)
b9.bm()
$.dc.b=b9}catch(e3){l=A.aj(e3)
k=A.cM(e3)
b9=$.c9.j()
$.c9.b=B.c8.i7(b9,B.e3)
$.mu=new A.fY(n,A.b($.B.j().width),A.b($.B.j().height),A.d6().gaO().h(0,"render")==="legacy",!0,$.c9.j().e)
b9=B.aW.ec($.c9.j(),$.mu)
b9.bm()
$.dc.b=b9
$.B.j().setAttribute("data-renderer-error",A.x(l))
if($.jr())$.B.j().setAttribute("data-renderer-error-stack",A.x(k))}A.xy()
p=4
A.en("initializing")
$.bV.b=new A.nF(new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),$.y4())
$.vw=A.R(A.c(A.c(e0.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.xJ=A.R(A.c(A.c(e0.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.mB=$.vw
b9=$.bV.j()
b9.r=$.mB?0.5:1
b9=A.c(e0.window)
c0=t.N
c3=t.s
c4=t.a
c3=A.CA(A.O(["moveForward",A.e(["KeyW"],c3),"moveBack",A.e(["KeyS"],c3),"moveLeft",A.e(["KeyA"],c3),"moveRight",A.e(["KeyD"],c3),"interact",A.e(["KeyE"],c3),"secondary",A.e(["KeyQ"],c3),"run",A.e(["ShiftLeft"],c3),"crouch",A.e(["ControlLeft"],c3),"rotate",A.e(["KeyR"],c3),"reach",A.e(["KeyF"],c3),"journal",A.e(["KeyJ"],c3),"sleep",A.e(["KeyL"],c3),"pause",A.e(["Escape"],c3)],c0,c4))
c5=A.c(b9.document)
c3=new A.ki(b9,c5,A.a0(c0),A.a0(c0),A.a0(c0),A.a0(c0),A.a0(c0),new A.a(0,0,0),new A.pt(),c3)
b9.addEventListener("keydown",A.Z(c3.gm3()))
b9.addEventListener("keyup",A.Z(c3.gm5()))
b9.addEventListener("mousemove",A.Z(c3.gmb()))
b9.addEventListener("mousedown",A.Z(c3.gm9()))
b9.addEventListener("mouseup",A.Z(c3.gmd()))
b9.addEventListener("wheel",A.Z(c3.gmf()))
c5.addEventListener("pointerlockchange",A.Z(c3.gm7()))
$.ae.b=c3
$.zB.b=new A.kg(A.e([],t.pW),t.eO)
c3=$.B.j()
b9=A.b(A.c(e0.window).innerWidth)>0?A.b(A.c(e0.window).innerWidth):800
c3.width=b9
b9=$.B.j()
c3=A.b(A.c(e0.window).innerHeight)>0?A.b(A.c(e0.window).innerHeight):600
b9.height=c3
A.en("renderer")
if($.c9.j().a===B.bz){b9=$.mu
if(b9==null)b9=null
else{b9=b9.r
b9===$&&A.h()}$.hi=b9
if(b9==null){g=A.m("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.en("text")
b9=$.fg()
s=7
return A.ap(b9.cB(),$async$vR)
case 7:j=b9.pY()
i=A.DA(j)
if(!(i instanceof A.lo)){h=t.bB.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aI.b=i.a
$.mj.b=A.BH(j)
g=A.o(c0,c4)
for(c3=t.j,c8=0;c8<5;++c8){f=B.z[c8]
c4=A.v(f)
c5=b9.c
c5===$&&A.h()
c9=c5.h(0,c4)
c4=c3.b(c9)?A.at(c9,!0,c0):B.n
J.bk(g,f,c4)}e=A.DB(g)
$.xa.b=new A.ny(B.eB)
d=$.xa.j().pl(new A.vS(e))
d0=$.wv()
c=d0
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aX.aQ(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c4=c
c4=c4==null?null:B.c.aY(c4.c)
if(c4==null)c4=7
if(b9<1)A.j(A.am(b9,"startDay","must be at least 1"))
if(c4<0||c4>=24)A.j(A.am(c4,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.j(A.am(5760,"daySeconds","must be finite and > 0"))
d1=new A.k5(b9,7,5760)
d1.b=c4
d2=A.yB(e)
g=A.yo(42,g,A.yr(42),d1,d2,A.yj(6,16,d2,null,6,B.iQ,d1),new A.jU(0,0,0,!1),A.q8(null,null,null))}else{g=d.a
g.toString
g=A.yp(g,e)}$.V.b=g
$.aI.j().y=$.V.j().z
g=A.ag(A.Ff($.V.j().b),t.fu)
$.uk.b=new A.tp(g)
g=$.wx()
b9=d.a
g.fa(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.dc.j().bd(A.wT($.V.j().gf1()))
if(d.b!=null){g=d.b
g.toString
A.hj(g)}g=$.aI.j()
b9=A.GL($.V.j().b,A.GM(j.b))
g.skF(A.hU(b9,A.F(b9).c))
A.en("house")
$.Y.b=$.V.j().c
g=d0==null
b=g?null:d0.e
a=g?null:d0.f
if(a!=null)for(g=$.Y.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.t)(g),++c8){a0=g[c8]
for(c4=a0.e,c5=c4.length,d3=0;d3<c4.length;c4.length===c5||(0,A.t)(c4),++d3){a1=c4[d3]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.a3(b,"open")||J.a3(b,"closed")){a3=J.a3(b,"open")
for(g=$.Y.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.t)(g),++c8){a4=g[c8]
for(c4=a4.e,c5=c4.length,d3=0;d3<c4.length;c4.length===c5||(0,A.t)(c4),++d3){a5=c4[d3]
a5.skv(a3)}}}a6=$.y2()
if(a6!=null&&a6.length!==0)for(g=$.Y.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.t)(g),++c8){a7=g[c8]
for(c4=a7.r,c5=c4.length,d3=0;d3<c5;++d3){a8=c4[d3]
if(a8.a===a6)a8.d=$.y3()}}g=$.bz
if(g!=null)g.n_($.Y.j())
$.b1.b=$.V.j().d
$.Y.j()
g=new A.a(12.9375,1.65,0.825)
$.xK=$.xw=$.xD=g
a9=g.ah(0,new A.a(0,1.3499999999999999,0))
$.jc.b=new A.jH(a9,J.y6(a9,new A.a(0,1.2000000000000002,0)))
$.h8.b=new A.og()
$.bW.b=A.yT()
$.as="hall"
g=d.a
b0=A.CX(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.ow($.Y.j())){g=b0.b
$.xK=$.xw=$.xD=g
$.ca=b0.c
$.eo=b0.d
$.as=b0.a
b1=g.ah(0,new A.a(0,1.3499999999999999,0))
g=$.jc.j()
g.sn1(b1)
g.b=J.y6(b1,new A.a(0,1.2000000000000002,0))
g=$.jc.j()
b9=$.Y.j()
c4=b0.e
c5=b0.f
g.pJ($.as,$.et(),b9,c5,c4)
A.hj("restored position")}g=A.Dh(A.c(e0.document))
g.soN(new A.vT())
g.sb8(new A.vU())
g.sb1(new A.w4())
$.hb.b=g
g=A.c(e0.document)
b9=A.c(g.createElement("div"))
c4=new A.qp(g,b9)
c4.aT(g)
b9.className=A.v(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.c(b9.appendChild(A.nB(g,B.ei,1)))
A.c(b9.appendChild(A.E(g,"p","settings-copy","The house waits. Choose what to do next.")))
d4=A.E(g,"nav","pause-actions",null)
d4.setAttribute("aria-label","Pause actions")
c4.bq(g,d4,B.de,"resume")
c4.bq(g,d4,B.df,"settings")
c4.bq(g,d4,B.dg,"controls")
c4.bq(g,d4,B.dh,"save now")
c4.bq(g,d4,B.di,"help")
c4.bq(g,d4,B.dj,"credits")
c4.bq(g,d4,B.dk,"back")
A.c(b9.appendChild(d4))
c4.sp8(new A.wc())
c4.sb8(new A.wd())
c4.spa(new A.we())
c4.soR(new A.wf())
c4.sp9(new A.wg())
c4.soX(new A.wh())
c4.soS(new A.wi())
c4.sb1(new A.vV())
$.ct.b=c4
c4=$.V.j().e
b9=$.b1.j()
$.V.j()
$.ml.b=new A.pr(c4,b9)
b9=A.c(e0.document)
c4=$.V.j().e
g=$.b1.j()
c5=$.ml.j()
d5=A.c(b9.createElement("div"))
c5=new A.pA(c4,g,c5,b9,d5)
c5.aT(b9)
d5.setAttribute("aria-label","The Journal")
A.c(d5.appendChild(A.E(b9,"div","journal-title","The Journal")))
d6=A.E(b9,"div","journal-pages",null)
g=A.E(b9,"div","page page-left",null)
c5.y!==$&&A.L()
c5.y=g
c4=A.E(b9,"div","page page-right",null)
c5.z!==$&&A.L()
c5.z=c4
A.c(d6.appendChild(g))
A.c(d6.appendChild(c4))
A.c(d5.appendChild(d6))
A.c(d5.appendChild(c5.lg()))
d7=A.E(b9,"div","tape-roll",null)
A.c(d7.style).setProperty("width","8rem")
c4=A.E(b9,"div","tape-fill",null)
c5.as!==$&&A.L()
c5.as=c4
A.c(d7.appendChild(c4))
A.c(d5.appendChild(d7))
d8=A.E(b9,"div","consult",null)
A.c(d8.appendChild(A.E(b9,"div","consult-label","Cite an entry")))
c4=A.E(b9,"div","entry-picker",null)
c5.at!==$&&A.L()
c5.at=c4
g=A.E(b9,"div","consult-result",null)
c5.ax!==$&&A.L()
c5.ax=g
A.c(d8.appendChild(c4))
A.c(d8.appendChild(g))
A.c(d5.appendChild(d8))
d9=A.l(b9.documentElement)
if(t.m.b(d9)){A.c(d9.style).setProperty("--shake-max-deg","3deg")
A.c(d9.style).setProperty("--shake-max-px","2px")}$.ha.b=c5
$.ha.j().sb1(new A.vW())
g=A.c(e0.document)
b9=A.E(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.c(b9.style).setProperty("transition-duration","0.3s")
A.c(A.l(g.body).appendChild(b9))
$.zC.b=new A.qC(b9)
b9=A.c(e0.document)
g=A.E(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.c(A.l(b9.body).appendChild(g))
$.zA.b=new A.nx(g)
g=A.c(e0.document)
b9=A.E(g,"div","ambient-notice",null)
c4=A.E(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c4.setAttribute("aria-hidden","true")
c4.setAttribute("data-caption-kind","non-speech")
A.c(A.l(g.body).appendChild(b9))
A.c(A.l(g.body).appendChild(c4))
$.bd.b=new A.n_(b9,c4,B.K)
$.zF=!0
c4=A.C6(A.c(e0.document))
c4.soQ(A.AR())
c4.soP(A.H0())
$.aB.b=c4
c4=$.cN()
c4.soO(new A.vX())
c4.soT(A.AR())
c4=d.a
b2=A.Dy(c4==null?null:c4.c.h(0,"visitors"))
if(b2!=null&&$.aI.j().fa(b2))A.G_()
g=$.mj.j()
b9=d.a
g.pK(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(c3.b(b3))for(g=J.S(b3);g.m();){b4=g.gn()
if(A.aN(b4))$.vy.l(0,b4)}g=A.Dk(A.c(e0.document))
g.spb(new A.vY())
g.sb1(new A.vZ())
$.mm.b=g
g=A.Cw(A.c(e0.document))
g.sb1(new A.w_())
$.jb.b=g
g=A.C0(A.c(e0.document))
g.sb1(new A.w0())
$.mk.b=g
$.jd.b=A.kZ(A.c(e0.document),null)
$.je.b=A.kZ(A.c(e0.document),B.Y)
$.fa.b=A.kZ(A.c(e0.document),B.I)
A.mr($.jd.j(),!1)
A.mr($.je.j(),!0)
A.mr($.fa.j(),!0)
A.FG()
A.Fk()
$.h9.b=A.Cv(A.c(e0.document))
A.EW()
A.FK()
$.h7.b=A.kZ(A.c(e0.document),B.H)
A.mr($.h7.j(),!0)
A.FH()
$.ja.b=A.kZ(A.c(e0.document),B.Z)
A.mr($.ja.j(),!0)
A.FJ()
$.j8.b=A.BZ(A.c(e0.document))
A.EV()
A.FI()
g=A.Cg(A.c(e0.document))
g.sb1(new A.w1())
g.soU(new A.w2())
$.j9.b=g
g=d.a
b5=A.Ci(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.Ai(b5)
b6=$.hi
if(b6!=null){A.en("world")
g=$.Y.j()
b9=b6
c0=new A.r_(g,b9,A.o(c0,t.J))
c0.l_(g,b9)
$.hd=c0}g=B.b.q(A.v(A.c(A.c(e0.window).location).search),"shaders=live")
$.Ax=g
if(g){g=$.hi
if(g!=null)g.bY()}A.Al()
A.c(e0.window).addEventListener("resize",A.Z(new A.w3()))
A.c(e0.document).addEventListener("visibilitychange",A.Z(new A.w5()))
A.c(e0.window).addEventListener("keydown",A.Z(new A.w6()))
A.c(e0.window).addEventListener("keyup",A.Z(new A.w7()))
A.c(e0.window).addEventListener("keydown",A.Z(new A.w8()))
A.c(e0.window).addEventListener("click",A.Z(new A.w9()))
$.B.j().addEventListener("mousemove",A.Z(new A.wa()))
$.B.j().addEventListener("click",A.Z(new A.wb()))
A.hf()
A.en("raf")
A.b(A.c(e0.window).requestAnimationFrame(A.Z(A.AS())))
p=2
s=6
break
case 4:p=3
e2=o.pop()
b7=A.aj(e2)
b8=A.cM(e2)
A.vq(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bf(q,r)
case 2:return A.be(o.at(-1),r)}})
return A.bg($async$vR,r)},
Fi(a){var s,r=$.vp
if(!$.aB.j().y||r==null)return
s=A.zR(a)
if(s==null)return
$.cN().oq(s.a,s.b,A.ag(r.a.d,t.rO))},
Fh(a){var s,r=$.vp
if(!$.aB.j().y||r==null)return!1
s=A.zR(a)
if(s==null)return!1
return $.cN().op(s.a,s.b,A.ag(r.a.d,t.rO))},
zR(a){var s=A.c($.B.j().getBoundingClientRect()),r=A.al(s.width),q=A.al(s.height)
if(r<=0||q<=0)return null
return new A.aX((A.b(a.clientX)-A.al(s.left))*(A.b($.B.j().width)/r),(A.b(a.clientY)-A.al(s.top))*(A.b($.B.j().height)/q))},
Fl(){var s=v.G
A.c(s.window).addEventListener("error",A.Z(new A.vg()))
A.c(s.window).addEventListener("unhandledrejection",A.Z(new A.vh()))},
en(a){if($.xf===a)return
$.xf=a
$.B.j().setAttribute("data-boot-phase",a)},
xy(){var s,r,q,p,o,n,m=null,l=$.dc.j().gbx(),k=$.B.j(),j=A.d6().gaO().h(0,"renderer")
if(j==null)j="auto"
k.setAttribute("data-renderer-request",j)
k.setAttribute("data-renderer-backend",l.a)
k.setAttribute("data-renderer-profile",l.b)
k.setAttribute("data-renderer-diagnostics",B.k.aj(l.B(),m))
j=$.bz
if(j==null)j="{}"
else{j=j.e
j===$&&A.h()
j=j.as
if(j==null)j=A.j(A.m("renderer is not initialized"))
s=j.a
s.C()
r=s.b
q=A.J(r,A.r(r).c)
B.a.Z(q)
r=t.N
p=t.K
p=B.k.aj(A.O(["profile",A.O(["kind",s.a.b,"features",q],r,p),"internalWidth",j.b,"internalHeight",j.c,"sampleCount",j.d,"outputEncoding","srgb","shadowMapCount",j.f,"shadowMapSize",j.r,"materialTableCapacity",j.w,"lightTableCapacity",j.x,"textureArrayLayerCapacity",j.y,"diagnosticLevel",j.z.b],r,p),m)
j=p}k.setAttribute("data-renderer-configuration",j)
k.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
k.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
k.setAttribute("data-renderer-lighting-falloff","smoothstep")
k.setAttribute("data-renderer-dof-focal-distance","2.5m")
k.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
k=$.bz
o=k==null?m:k.x
if(o!=null)$.B.j().setAttribute("data-renderer-profile-fallback",o)
k=$.mu
n=k==null?m:k.y
if(n!=null)$.B.j().setAttribute("data-renderer-frame-submits",A.x(n))},
FR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.jr())return
s=$.y2()
if(s!=null&&s.length!==0){r=$.B.j()
q=$.y3()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.uk.j().eQ($.V.j().gac().a)
r=$.B.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.wv()
o=q==null?c:q.e
if(o!=null)$.B.j().setAttribute("data-automation-capture-shutters",o)
$.B.j().setAttribute("data-automation-rain-window-visibility",B.c.af(A.Ak($.as),3))
r=$.B.j()
q=$.xf
n=$.as
m=$.et()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.k.aj(A.O(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.O(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.ca,"pitch",$.eo,"modal",$.b2!=null,"dialogueOverlay",$.aB.j().y,"inputEnabled",$.ae.j().ay,"day",$.V.j().gac().a,"hour",$.V.j().gac().b],l,k),c))
j=A.o(l,t.X)
for(r=$.Y.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.t)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.O(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.B.j().setAttribute("data-automation-portals",B.k.aj(j,c))
e=$.mp
r=!1
if(e!=null)if($.Y.j().e.h(0,"cellar")!=null){r=$.Y.j()
q=$.as
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cF("cellar",$.as)
$.B.j().setAttribute("data-audio-transmission-cellar",B.k.aj(A.O(["sourceRoom","cellar","listenerRoom",$.as,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.B.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mD(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bW.j().a!==B.D){A.hj("save unavailable during rupture")
return}try{r=$.xa.j()
q=$.V.j()
p=t.N
o=t.z
s=A.o(p,o)
n=$.as
m=$.et()
l=$.ca
k=$.eo
j=$.jc.j().d
j=j==null?null:j.a.a
i=$.jc.j().d
J.bk(s,"player",new A.kL(n,m,l,k,j,i==null?null:i.b).B())
n=$.aI.j()
m=A.eV(n.b,p)
l=A.eV(n.c,t.L)
n=n.r
J.bk(s,"visitors",new A.lp(m,l,n==null?null:new A.jw(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.mj.j().b
n=A.J(n,A.r(n).c)
B.a.Z(n)
J.bk(s,"ambient",n)
n=A.J($.vy,A.r($.vy).c)
B.a.Z(n)
J.bk(s,"unverifiables",n)
J.bk(s,"inventoryInspections",$.wx().B())
n=$.xk
if(n!=null)J.bk(s,"ending",A.O(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.yt(q.c).B()
k=q.d
r.q0(A.yU(s,A.O(["houseSeed",n,"runSeed",m,"house",l,"time",A.O(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.hj(a)}catch(h){A.hj("save failed")}},
FP(){var s=A.l(A.c(v.G.document).documentElement),r=s==null?null:A.aD(s.getAttribute("data-gameplay-focus-loss")),q=A.bA(new A.I(B.aE,t.rg.a(new A.vl(r)),t.vK),t.x)
switch((q==null?B.b1:q).a){case 0:$.mz=!0
s=$.by
if(s!=null)s.fs(!0)
break
case 1:$.mz=!0
break
case 2:break}},
hj(a){var s=v.G,r=A.l(A.c(s.document).getElementById("save-status"))
if(r==null)return
s=A.l(A.c(s.document).documentElement)
s=s==null?null:A.aD(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.Cr(B.f0,new A.vu(r),t.H)},
vq(a,b){var s,r,q,p
A.en("error")
s=A.x(a)
r=A.xU(s,"\n"," ")
s=$.xm
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.l(A.c(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.x(a):A.x(a)+"\n"+b.p(0)
$.B.j().setAttribute("data-boot-error",p)
if($.jr()&&!q)$.B.j().setAttribute("data-boot-stack",b.p(0))
A.c(s.console).error(p)},
zK(){var s,r
if($.xd)return
$.xd=!0
s=$.by
r=s==null
if(!r)s.cE()
if(!r)s.fC("music")
B.a.l($.de,"arm")},
hf(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hf=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ap(A.he(),$async$hf)
case 2:o=null
q=4
s=7
return A.ap(A.b3(A.c(A.c(v.G.window).fetch("res/manifest.json")),t.m),$async$hf)
case 7:n=b
i=A
s=8
return A.ap(A.b3(A.c(n.json()),t.X),$async$hf)
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
if(k!=null&&typeof k==="string"){A.v(k)
l=A.l(A.c(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.mk.j().f
l===$&&A.h()
l.textContent=k}s=9
return A.ap(A.ov(A.e([A.vj(o),A.vc(o)],t.iJ),t.H),$async$hf)
case 9:return A.bf(null,r)
case 1:return A.be(p.at(-1),r)}})
return A.bg($async$hf,r)},
he(){var s=0,r=A.bh(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$he=A.bi(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.iJ[g]
q=6
s=9
return A.ap(A.b3(A.c(A.c(j.window).fetch(o)),i),$async$he)
case 9:n=a0
s=10
return A.ap(A.b3(A.c(n.text()),h),$async$he)
case 10:m=a0
l=A.BL(B.k.aJ(m,null))
f=$.Y.b
if(f===$.Y)A.j(A.a9(""))
l.fg(f)
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
k=A.aj(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.B.j().setAttribute("data-house-manifest","unavailable")
A.c(j.console).warn("authored house manifest unavailable: "+A.x(d))}s=11
return A.ap(A.mw(),$async$he)
case 11:s=12
return A.ap(A.mx(),$async$he)
case 12:return A.bf(null,r)
case 1:return A.be(p.at(-1),r)}})
return A.bg($async$he,r)},
mw(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mw=A.bi(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.ir[c]
p=7
s=10
return A.ap(A.b3(A.c(A.c(g.window).fetch(n)),f),$async$mw)
case 10:m=b1
s=11
return A.ap(A.b3(A.c(m.text()),e),$async$mw)
case 11:l=b1
b=B.k.aJ(l,null)
b=h.b(b)?b:A.dK("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dK("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aN(a)?a:A.dK("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dK("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.at(a,!0,d):A.dK("assets is not a list")
a4=A.F(a3)
a5=a4.i("P<1,cX>")
a3=A.J(new A.P(a3,a4.i("cX(1)").a(A.GX()),a5),a5.i("a5.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.at(a,!0,d):A.dK("placements is not a list")
a5=A.F(a4)
a6=a5.i("P<1,cA>")
a4=A.J(new A.P(a4,a5.i("cA(1)").a(A.GY()),a6),a6.i("a5.E"))
a4.$flags=1
k=new A.p6(a1,a2,a0,a3,a4)
a1=$.Y.b
if(a1===$.Y)A.j(A.a9(""))
k.fg(a1)
$.mt=k
a1=$.bz
if(a1!=null)a1.ke(k)
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
j=A.aj(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.B.j().setAttribute("data-house-inventory","unavailable")
$.B.j().setAttribute("data-house-inventory-error",A.x(a8))
A.c(g.console).warn("authored house inventory unavailable: "+A.x(a8))
case 1:return A.bf(q,r)
case 2:return A.be(o.at(-1),r)}})
return A.bg($async$mw,r)},
mx(){var s=0,r=A.bh(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mx=A.bi(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.mt
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.j1[a4]
p=7
s=10
return A.ap(A.b3(A.c(A.c(a1.window).fetch(m)),a2),$async$mx)
case 10:l=b5
s=11
return A.ap(A.b3(A.c(l.text()),e),$async$mx)
case 11:k=b5
a5=B.k.aJ(k,null)
a5=a0.b(a5)?a5:A.hc("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.at(a6,!0,a3):A.hc("emitters is not a list")
a8=A.F(a7)
a9=a8.i("P<1,cW>")
a7=A.J(new A.P(a7,a8.i("cW(1)").a(A.Hc()),a9),a9.i("a5.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aN(a6)?a6:A.hc("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.hc("sourceRef is not a string")
j=new A.pc(a8,a9,a7)
a7=$.Y.b
if(a7===$.Y)A.j(A.a9(""))
j.pW(a7,b2)
$.A1=j
i=A.o(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.t)(a7),++b0){h=a7[b0]
for(a9=h.f.gK(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bk(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.Y.b
if(a7===$.Y)A.j(A.a9(""))
a8=A.BI(i)
a9=new A.n9(a7,A.b7(B.d9,e,d),a8)
a9.kP(a8,a7,B.d9)
$.mp=a9
a7=$.by
if(a7!=null){a7.ch=a9
a7.bM()}a7=$.B.b
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
f=A.aj(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.mp=null
$.B.j().setAttribute("data-audio-planner","unavailable")
$.B.j().setAttribute("data-house-soundscape","unavailable")
$.B.j().setAttribute("data-house-soundscape-error",A.x(n))
A.c(a1.console).warn("authored house soundscape unavailable: "+A.x(n))
case 1:return A.bf(q,r)
case 2:return A.be(o.at(-1),r)}})
return A.bg($async$mx,r)},
xi(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.S(t.a.b(s)?s:new A.aU(s,A.F(s).i("aU<1,i>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.v(q))}},
vc(a){var s=0,r=A.bh(t.H),q,p,o,n,m,l
var $async$vc=A.bi(function(b,c){if(b===1)return A.be(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.o(n,n)
n=a==null
A.xi(A.l(n?null:a.sfx),m,"")
A.xi(A.l(n?null:a.ir),m,"ir-")
q=A.l(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.v(p))
l=$
s=2
return A.ap(A.ng(m,$.Y.j()),$async$vc)
case 2:o=l.by=c
o.ch=$.mp
o.bM()
A.FL()
A.An(o)
A.xb()
A.Ao()
if($.xd){o.cE()
o.fC("music")}return A.bf(null,r)}})
return A.bg($async$vc,r)},
xG(a,b){var s
A.AA(a,b)
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
FW(a){var s,r
try{s=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
zG(a,b){var s
if(a!=="brightness")return
s=A.l(A.c(v.G.document).documentElement)
if(t.m.b(s))A.c(s.style).setProperty("filter","brightness("+A.x(B.c.E(b,0.6,1.4))+")")},
uo(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.l(A.c(v.G.document).documentElement)
if(r!=null)A.R(A.c(r.classList).toggle(s,b))
A.mo()},
Ao(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.al($.dh().a.cG(o)),k=A.R($.dh().a.cG(n)),j=A.R($.dh().a.cG(m))
for(s=[$.jd.j(),$.je.j(),$.fa.j(),$.h7.j(),$.ja.j()],r=0;r<5;++r)s[r].fq(o,l)
A.zG(o,l)
for(s=[$.jd.j(),$.je.j(),$.fa.j(),$.h7.j(),$.ja.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.uo(n,k)
A.uo(m,j)},
xF(a,b){var s
A.AA(a,b)
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
FT(a){var s,r
try{s=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
An(a){var s,r,q,p,o,n,m,l,k,j=A.o(t.N,t.i)
for(s=0;s<5;++s){r=B.iI[s]
q=$.dh().a.b.h(0,r)
j.k(0,r,A.al(q==null?A.j(A.m("setting missing from profile: "+r)):q))}p=A.R($.dh().a.cG("muted"))
o=A.R($.dh().a.cG("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bp(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.du(o)
for(q=[$.jd.j(),$.je.j(),$.fa.j(),$.h7.j()],n=j.$ti.i("cC<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cC(j,j.r,j.e,n);m.m();){k=m.d
l.fq(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
zI(){var s=$.by
if(s!=null)A.An(s)
A.Ao()},
FL(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aD(A.c(A.c(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aJ(k,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.fs)
q=A.yW(r.h(0,"requested"))
$.Av=A.wW(A.yW(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.D
o=A.o(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.FT(l))}}r=A.o(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.FW(p))}}$.Av=A.Dj(o,r)
A.vm()},
vm(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.aj($.dh().B(),null))}catch(s){}},
AA(a,b){var s,r,q,p,o,n,m
switch(A.rD(a).d.a){case 0:r=A.eO(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dh()
q=s
A.rD(a).dl(q)
p=t.N
o=t.K
n=A.fI(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dB(n,1)
n=s
A.rD(a).dl(n)
o=A.fI(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dB(o,1)
A.vm()}catch(m){if(!(A.aj(m) instanceof A.H))throw m}},
vj(a){var s=0,r=A.bh(t.H),q,p,o
var $async$vj=A.bi(function(b,c){if(b===1)return A.be(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.o(p,p)
A.xi(A.l(a==null?null:a.tex),o,"")
p=$.hi
p=p==null?null:p.b_(o)
if(p==null)p=A.wD(t.H)
q=$.bz
q=q==null?null:q.b_(o)
s=2
return A.ap(A.ov(A.e([p,q==null?A.wD(t.H):q],t.iJ),t.H),$async$vj)
case 2:return A.bf(null,r)}})
return A.bg($async$vj,r)},
Al(){var s,r,q=v.G,p=A.b(A.c(q.window).innerWidth),o=A.b(A.c(q.window).innerHeight)
q=$.B.j()
s=p>0?p:800
q.width=s
s=$.B.j()
q=o>0?o:600
s.height=q
q=$.hi
if(q!=null)q.bb(A.b($.B.j().width),A.b($.B.j().height))
$.dc.j().bb(A.b($.B.j().width),A.b($.B.j().height))
q=$.bz
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.B.j().setAttribute("data-renderer-surface",r)},
Fg(){var s,r,q=$.b2
if(q!=null){s=$.ae.j()
if(!s.CW.bi("pause",s.f)){s=$.ae.j()
s=s.CW.bi("secondary",s.f)}else s=!0
if(s){A.EY(q)
return}if($.ae.j().f.a5(0,"GamepadDpadUp")){A.A9(q,-1)
return}if($.ae.j().f.a5(0,"GamepadDpadDown")){A.A9(q,1)
return}s=$.ae.j()
if(s.CW.bi("interact",s.f)){r=A.l(A.c(v.G.document).activeElement)
if(t.m.b(r)&&A.R(q.b.contains(r)))A.px(r,"click",t.X)}return}s=$.ae.j()
if(s.CW.bi("pause",s.f)){A.jm($.ct.j())
return}if($.aB.j().y)return
s=$.ae.j()
if(s.CW.bi("journal",s.f))A.jp($.ha.j())
else{s=$.ae.j()
if(s.CW.bi("sleep",s.f))A.jp($.mm.j())}},
EY(a){if(a===$.ct.j()){a.a9()
return}if(a===$.hb.j()||a instanceof A.fS||a instanceof A.hL||a instanceof A.hz){A.dM(a)
return}a.a9()},
A9(a,b){var s,r,q,p,o,n,m=a.b,l=A.c(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.e([],t.sL)
for(s=t.m,r=0;r<A.b(l.length);++r){q=A.l(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.l(A.c(v.G.document).activeElement)
o=B.a.bS(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.M(o+b+m,m)}if(!(n>=0&&n<k.length))return A.f(k,n)
k[n].focus()},
FS(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
A.al(c6)
try{s=c6
if(!$.A0){$.xs=s
$.A0=!0}d=s
c=$.xs
if(typeof d!=="number")return d.ah()
r=(d-c)/1000
$.xs=s
d=r
if(typeof d!=="number")return d.dt()
if(d<0)r=0
d=r
if(typeof d!=="number")return d.av()
if(d>0.25)r=0.25
A.Gl(r)
$.ae.j().pg()
d=$.B.j()
c=$.ae.j().z!=null?"standard":"none"
d.setAttribute("data-controller",c)
q=$.ae.j().z
if(q!=null)$.B.j().setAttribute("data-controller-id",q)
else $.B.j().removeAttribute("data-controller-id")
A.Fg()
if(!$.mz&&$.b2==null){d=$.em
c=r
if(typeof c!=="number")return A.jq(c)
c=$.em=d+c
p=0
d=t.aA
for(;;){if(c>=0.008333333333333333){b=p
if(typeof b!=="number")return b.dt()
b=b<10}else b=!1
if(!b)break
$.xw=$.et()
if(!$.y1()){c=$.V.b
if(c===$.V)A.j(A.a9(""))
c.mU(0.008333333333333333)
c=$.Bm()
b=$.V.b
if(b===$.V)A.j(A.a9(""))
b=b.gac()
a=$.V.b
if(a===$.V)A.j(A.a9(""))
c=c.e5(b.a,a.gac().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.t)(c),++a0){o=c[a0]
B.a.l($.de,"clock:"+o.a)}c=$.Bn()
b=$.V.b
if(b===$.V)A.j(A.a9(""))
b=b.gac()
a=$.V.b
if(a===$.V)A.j(A.a9(""))
c=c.e5(b.a,a.gac().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.t)(c),++a0){n=c[a0]
B.a.l($.de,"service:"+n.a+":"+n.b)}}A.Go()
c=$.aI.b
if(c===$.aI)A.j(A.a9(""))
b=$.V.b
if(b===$.V)A.j(A.a9(""))
c.w=b.r.c>=0.5
c=c.f
a1=A.at(c,!1,d)
a1.$flags=3
a2=a1
B.a.H(c)
if(a2.length!==0){c=$.V.b
if(c===$.V)A.j(A.a9(""))
c.pm(a2)}A.Gk()
A.Gn()
A.Gm()
A.Gj(0.008333333333333333)
c=$.h8.b
if(c===$.h8)A.j(A.a9(""))
if(c.a!=null)if((c.b-=0.008333333333333333)<=0)c.a=null
c=$.bW.b
if(c===$.bW)A.j(A.a9(""))
m=c.a!==B.D
b=$.Y.b
if(b===$.Y)A.j(A.a9(""))
c.e4(0.008333333333333333,b)
if(m){c=$.bW.b
if(c===$.bW)A.j(A.a9(""))
c=c.e}else c=!1
if(c)A.Am(!0)
c=$.em-0.008333333333333333
$.em=c
b=p
if(typeof b!=="number")return b.a7()
p=b+1}l=B.c.E(c/0.008333333333333333,0,1)
d=$.xK=A.z6($.Bp(),$.et(),l)
k=$.by
if(k!=null){c=k
b=Math.sin($.ca)
a=Math.cos($.ca)
a3=A.c(c.a.listener)
a3.setPosition(d.a,d.b,d.c)
A.af(a3,"setOrientation",[b,0,a,0,1,0],t.H)
c.kg($.as)
for(d=$.de.length,a0=0;a0<$.de.length;$.de.length===d||(0,A.t)($.de),++a0){j=$.de[a0]
A.F1(k,j)}B.a.H($.de)
$.B.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.B.j().setAttribute("data-audio-muffle01",B.c.af(k.goI(),3))
d=$.B.j()
c=k.cx?"true":"false"
d.setAttribute("data-audio-music-started",c)
c=$.B.j()
d=k.dx
if(d==null)d="ir-fallback"
c.setAttribute("data-audio-room-ir",d)}}i=$.hi
if(i!=null){$.bV.j().eW($.js(),$.ca,$.eo)
d=$.b2===$.ha.j()?1:0
i.d6=d
$.A7=r
$.dc.j().bd(A.wT($.V.j().gf1()))}else if($.c9.j().a===B.a1){$.bV.j().eW($.js(),$.ca,$.eo)
d=$.bz
if(d!=null){c=$.bV.j()
b=c.a
a4=new A.N(b.a,b.b,b.c)
b=c.b
a5=new A.N(b.a,b.b,b.c)
b=c.c
a6=d.b/d.c
a7=A.yI(a4,a5,new A.N(b.a,b.b,b.c))
c=c.f
b=c.b
a=c.c
a8=A.wM(a6,a,c.a,b)
d.p2=new A.fs(a7,a8,a8.a8(0,a7),a4,a5,b,a,a6)}d=$.bz
if(d!=null)d.kp($.Y.j(),$.as)
d=$.bz
if(d!=null)d.kf($.Y.j(),$.as,$.js(),$.b1.j().gcK(),$.b1.j().gi4(),$.uk.j().eQ($.V.j().gac().a),A.H7($.as),$.b1.j().b)
if($.A6!==$.bW.j().a){$.A6=$.bW.j().a
$.xA=$.xA+1}d=$.bz
if(d!=null){if($.y1())c=0
else{c=s
if(typeof c!=="number")return c.q4()
c/=1000}b=$.xA
a=A.b(Math.max(0,$.V.j().b))
if(!isFinite(c)||c<0)A.j(A.am(c,"timeSeconds",null))
if(a<0)A.j(A.z("frame clock seeds must be non-negative",null))
d.rx=c
d.ry=b
d.to=a}d=$.bz
if(d!=null){c=$.bW.j()
b=$.mB
a=$.uk.j().eQ($.V.j().gac().a)
a9=A.Ak($.as)
b0=c.a
b1=c.gfA()
b2=b1>0?B.c.E(c.b/b1,0,1):0
c=b0.a
b3=c>=3
b4=b0===B.bG
b5=b0===B.a2?0.45:1
if(c>=1)b6=b0===B.ah?b2:1
else b6=0
if(c>=2)c=b0===B.bE?b2:1
else c=0
b7=b3?320:0
b8=b3?5:8
b9=b4?1:0
c0=b4?b2:0
c1=b4?b2:0
c2=b4?b2:0
c3=b4?b2:0
c4=b4?b2:0
d.p4=new A.kN(b5,0.38,0.28,0.18,0.015,a.c,a9,b6,c,b7,b8,b9,c0,c1,c2,c3,c4,b)}$.dc.j().bd(A.wT($.V.j().gf1()))
h=$.bz
if(h!=null){g=h.goj()
if(g!=null){$.B.j().setAttribute("data-renderer-frame-stats",g)
d=$.B.j()
c=h.goi()?"ok":"exceeded"
d.setAttribute("data-renderer-budget",c)}}}A.en("running")
A.FR()
d=$.ae.j()
d.as=d.Q=0
c=d.c
c.a5(0,"WheelUp")
c.a5(0,"WheelDown")
d.d.H(0)
d.f.H(0)
A.b(A.c(v.G.window).requestAnimationFrame(A.Z(A.AS())))}catch(c5){f=A.aj(c5)
e=A.cM(c5)
A.vq(f,e)}},
F1(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.jJ("confirm")
$.bd.j().aP("interface confirmation")
break
case"ambient-winnow":a.f_("winnow",0.28)
$.bd.j().aP("wind moving through the house")
break
case"ambient-gate":a.f_("gate",0.22)
$.bd.j().aP("distant gate")
break
case"collapse":a.jJ("collapse")
$.bd.j().aP("front door shudders and collapses")
break
case"clock:tick":A.mA(a,p,"tick")
break
case"clock:chime":A.mA(a,p,"chime")
break
case"clock:cuckoo":A.mA(a,p,"cuckoo")
break
case"clock:bell":A.mA(a,p,"bell")
break
default:if(B.b.W(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.mA(a,q,s[2])}}}},
mA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.A1,g=$.mt
if(h==null||g==null)return
s=h.o4(b)
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
break A}if(q!=null)$.bd.j().aP(q)
q=$.Y.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.j(A.m("sound room missing: "+o))
m=n.d.a7(0,s.d.a8(0,p))
l=$.mp
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.j(A.m("sound emitter "+s.a+" has no cue for "+c))
a.pf(q,m,s.e,o)
return}q=$.zN
$.zN=q+1
o=A.BJ(B.dX,r,r+":"+q,m,A.EK(b,c),q,o)
q=$.as
q=A.BF($.js(),q)
t.gG.a(B.bp)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.j(A.m("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.j(A.m("audio listener room missing: "+q))
j=l.jR(p,q,B.bp)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.j(A.m("audio cue family missing: "+q))
k=J.aE(i)
k=k.h(i,B.d.M(A.Ga(q,o.f),k.gt(i)))
o=o.e
A.ag(j.a,t.N)
a.jK(k,new A.a(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
EK(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dV(a+":"+b),r=t.sU,s=new A.aV(s,s.gt(0),r.i("aV<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.AN(p,q==null?r.a(q):q)}return p},
Gl(a){var s=$.xm
if(s==null)return
s.textContent=""+B.c.aC(a>0?1/a:0)+" fps"},
Gj(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.Ar||$.b2!=null){$.mJ().a=new A.a(0,0,0)
return}s=$.ae.j()
r=s.cT("moveLeft")?-1:0
if(s.cT("moveRight"))++r
q=s.cT("moveForward")?1:0
if(s.cT("moveBack"))--q
s=s.ay?s.w:new A.a(0,0,0)
p=new A.a(r,0,q).a7(0,s)
o=p.gt(0)>1?p.gad():p
$.ae.j().dB(b3)
n=$.ae.j().Q
m=$.ae.j().as
s=$.ff()
l=s.d?-1:1
k=s.e?-1:1
j=$.ca
i=$.ae.j()
i=i.ay?i.x:0
h=$.ff()
g=h.d?-1:1
$.ca=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.eo
h=$.ae.j()
l=h.ay?h.y:0
j=$.ff()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.eo=i
$.eo=B.c.E(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.a(i*Math.cos($.ca)+j*Math.sin($.ca),0,-i*Math.sin($.ca)+j*Math.cos($.ca)).gad().a8(0,2)
j=$.mJ()
if(!isFinite(b3)||b3<0)A.j(A.am(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.j(A.am(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.a7(0,f.ah(0,l).a8(0,1-s))
j.a=s
d=$.jc.j().oJ($.Y.j(),$.as,$.et(),s.a8(0,b3))
$.xD=d.a
if($.bW.j().a!==B.bH&&$.bW.j().a!==B.a2)$.as=d.b
c=B.c.E(j.a.gt(0)/2,0,1)
s=$.Bo()
$.xE=s.kA($.xE,$.et().b,b3)
b=s.mV(b3,c)
s=$.et()
l=$.xE
$.bV.j().eW(new A.a(s.a+b.a,l+b.b,s.c+b.c),$.ca,$.eo)
s=$.V.j().z
a=new A.qr(s)
s=$.bV.j()
l=$.Y.j()
a0=A.H6(a,s,$.as,l,$.mt)
l=a0.c
$.zC.j().kq(l)
a1=A.l(A.c(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.xT($.bV.j(),$.Y.j(),$.as)
break
case 1:a3=A.AY($.bV.j(),$.Y.j(),$.as)
break
case 2:a4=A.AZ($.bV.j(),$.Y.j(),$.as)
break
case 3:l=$.bV.j()
k=$.Y.j()
j=$.mt
a5=A.AX(l,$.as,k,j)
break
case 4:case 5:break}$.zA.j().fe($.fg().fl($.V.j().gac().a,"status"),$.as==="living-room")
l=$.ae.j()
k=l.CW
if(k.bi(b2,l.d)||k.bi(b2,l.f)){l=$.V.j().gac()
k=a3==null
j=k?b1:a3.a
i=B.a.aa($.aI.j().hW(21),$.aI.j().gox())
if(l.a===21&&j==="front-door"&&i){s=$.bW.j()
$.Y.j()
s.kG(B.eA,A.ag(s.c,t.N))
B.a.l($.de,"collapse")
A.hj("the front door opens on itself")}else if(a2!=null&&!a2.e){if(a2.d){a2.d=!1
$.bd.j().aP("mantle flame extinguished")}else if($.V.j().kD(1,1)){a2.d=!0
s=$.h8.j()
s.a=a2
s.b=2
if(a2.f!=null)a2.r=!0
$.bd.j().aP("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bd.j()
s.aP(a3.ax?"door opens":"door closes")
s=$.hd
if(s!=null)s.dj(a3.b)
s=$.bz
if(s!=null)s.f5($.Y.j(),a3.a)
s=$.by
if(s!=null)s.bM()}else if(a4!=null)if(a4.w){s=$.V.j()
if(s.f.dA(1)){a4.w=!1
$.bd.j().aP("shutter closes")}}else{a4.w=!0
$.bd.j().aP("shutter opens")}else if(s===B.cn){a6=a.fk()
s=A.F(a6)
l=t.E4
a7=A.bA(new A.I(a6,s.i("n(1)").a(new A.vz(a0)),s.i("I<1>")),l)
if(a7==null)a7=A.bA(a6,l)
if(a7!=null)$.bd.j().c1("noticed",a7.d)}else if(a5!=null){s=$.wx()
if(!a5.x)A.j(A.m("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.B.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.b7(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.FN(a8)
s=$.bd.j()
s.c1("noticed",a9==null?"you inspect "+a8:a9)}}s=$.h8.j()
if(s.a!=null&&s.b>0){b0=$.h8.j().a
if(b0!=null&&A.xT($.bV.j(),$.Y.j(),$.as)!==b0){s=$.h8.j()
s.a=null
s.b=0}}A.FZ(b3,a0)},
FZ(b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="rgba(12, 10, 14, 0.92)",b1=$.vp
if(b1==null)return
s=A.b($.B.j().width)
r=A.b($.B.j().height)
q=$.cN()
q.jS(b2)
p=$.Bl()
o=p.c
if(o<1)p.c=Math.min(1,o+b2*6)
o=b3.c
n=o!=null
m=p.k0(o,n,$.aB.j().y)
p=$.mK()
l=p.a
k=p.d
j=b2*8
if(l)p.d=Math.min(1,k+j)
else p.d=Math.max(0,k-j)
l=$.Y.j()
k=$.as
i=l.e.h(0,k)
l=!$.aB.j().y&&$.b2==null
k=q.a
j=q.b
h=q.c
g=q.e
f=q.f
e=q.r
q=q.w
d=$.V.j().gac()
c=B.c.ar($.b1.j().b)
b=i==null?null:i.a
if(b==null)b=$.as
a=$.fg().fl($.V.j().gac().a,"status")
a0=b1.a
a0.c+=b2
a1=a0.d
B.a.H(a1)
a2=A.al(A.c(v.G.window).devicePixelRatio)
a3=B.c.ar(s*a2)
a4=B.c.ar(r*a2)
a5=a0.a
if(A.b(a5.width)!==a3||A.b(a5.height)!==a4){a5.width=a3
a5.height=a4}a5=a0.b
a5===$&&A.h()
a5.save()
a5.scale(a2,a2)
a5.clearRect(0,0,s,r)
if(l){a5.save()
a5.translate(s*0.5,r*0.5)
l=t.H
if(n){n=Math.sin(a0.c*8)
a6=a0.c
a7=22*(1+n*0.08)
a5.strokeStyle="rgba(0, 0, 0, 0.85)"
a5.lineWidth=3.5
a5.save()
a6=a6*1.5+0.7853981633974483
a5.rotate(a6)
n=-a7*0.5
a5.strokeRect(n,n,a7,a7)
a5.restore()
a5.strokeStyle="#c49a45"
a5.lineWidth=2
a5.save()
a5.rotate(a6)
a5.strokeRect(n,n,a7,a7)
a5.restore()
a5.fillStyle="#f5f0e6"
a5.beginPath()
A.af(a5,"arc",[0,0,2.5,0,6.283185307179586],l)
a5.fill()}else{a5.fillStyle="rgba(0, 0, 0, 0.85)"
a5.beginPath()
A.af(a5,"arc",[1,1,3,0,6.283185307179586],l)
a5.fill()
a5.fillStyle="#f5f0e6"
a5.beginPath()
A.af(a5,"arc",[0,0,2.5,0,6.283185307179586],l)
a5.fill()}a5.restore()
a0.nZ(o,r,s)}a0.nY(r,s,new A.qg(k,j,h,g,f,e,q))
a8=s-80-24
a0.aV("#d32f2f",2,8,b0,44,-0.08,160,a8,42)
a5.save()
a5.fillStyle="#f5f0e6"
a5.font='bold 14px "Cinzel", serif'
a5.textAlign="center"
a5.textBaseline="middle"
a5.fillText("DAY "+d.a+"  \u2022  "+B.b.jF(B.d.p(c),2,"0")+":00",a8,42)
a5.restore()
a0.aV("#c49a45",1.8,6,b0,34,0.08,170,109,37)
a5.save()
a5.fillStyle="#c49a45"
a5.font='bold 13px "Cinzel", serif'
a5.textAlign="center"
a5.textBaseline="middle"
a5.fillText(b.toUpperCase(),109,37)
a5.restore()
if(a!=null&&a.length!==0){a9=s*0.5
a0.aV("#f5f0e6",1.5,6,b0,32,-0.04,Math.min(s*0.6,420),a9,36)
a5.save()
a5.fillStyle="#f5f0e6"
a5.font='13px "Cinzel", serif'
a5.textAlign="center"
a5.textBaseline="middle"
a5.fillText(a,a9,36)
a5.restore()}a0.nX(m,r,s)
a0.o_(r,s,p)
a5.restore();++b1.b
q=$.B.j()
q.setAttribute("data-renderer-gui-frame",""+b1.b)
q.setAttribute("data-renderer-gui-hitboxes",""+A.ag(a1,t.rO).length)
q.setAttribute("data-renderer-gui-owner","renderer")},
FN(a){var s,r,q,p,o=$.V.j().z.b,n=A.r(o).i("K<1,2>"),m=A.J(new A.K(o,n),n.i("p.E"))
B.a.U(m,new A.vk())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.t)(m),++s){r=m[s]
n=$.fg().at
n===$&&A.h()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Go(){var s,r,q,p,o,n,m,l,k,j=null
if($.aB.j().y||$.b2!=null||$.aI.j().r!=null)return
s=$.V.j().gac()
for(r=$.aI.j().hW(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=$.aI.b
if(m===$.aI)A.j(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aI.b
if(r===$.aI)A.j(A.a9(""))
l=r.cd(n)
if(!(l instanceof A.ll))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.yy(A.c(v.G.document),"exitPointerLock",j,j,j,j)
$.mJ().a=new A.a(0,0,0)
r=$.aB.b
if(r===$.aB)A.j(A.a9(""))
q=n.a
r.fu(q,k)
$.cN().bH(!0,B.b9,q,k)
A.Az(n)
return}},
G_(){var s,r,q=$.aI.j().r,p=q==null,o=p?null:q.gbw()
if(p||o==null)return
p=$.aB.j()
s=q.a
r=s.a
p.fu(r,o)
$.cN().bH(!0,B.b9,r,o)
A.Az(s)
if(q.d!==B.a7)A.xv()
A.hj("restored visitor")},
Az(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().om("stranger-17-eileen-case")
r=$.fg().x
r===$&&A.h()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.at(q,!0,t.N):B.n
p=A.bA(r,t.N)
if(s==null||p==null)return
$.bd.j().c1("inside the case",p+" \u201c"+s.d+"\u201d")},
Gk(){var s,r,q,p,o=$.V.j().gac(),n=$.mj.j().o2(o.a,o.b)
if(n.length===0)return
s=B.a.gS(n)
$.mj.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bd.j().c1(q,s.e)
p=A.Gu(r)
if(p!=null)B.a.l($.de,"ambient-"+p)},
Gn(){var s,r,q,p,o=$.V.j().gac()
if(o.b<20)return
s=o.a
if(!$.vy.l(0,s))return
r=$.fg().f
r===$&&A.h()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.at(q,!0,t.N):B.n
p=A.H3(r,$.V.j().b,s)
if(p!=null)$.bd.j().c1("noticed",p)},
Am(a){var s,r,q,p,o
if($.xk!=null)return
s=$.V.j().gac()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.r(q).i("ax<2>")
o=A.Ch(new A.oc(s.a,1-r,new A.I(new A.ax(q,p),p.i("n(p.E)").a(new A.vr()),p.i("I<p.E>")).gt(0),$.V.j().r.d,a))
if(o==null)return
A.Ai(o)
A.mD("ending recorded")},
Ai(a){var s,r,q
$.xk=a
$.Ar=!0
$.mJ().a=new A.a(0,0,0)
A.jm($.j9.j())
s=a.a
r=$.fg().w
r===$&&A.h()
q=r.h(0,s.b)
r=t.j.b(q)?A.at(q,!0,t.N):B.n
r=A.J(r,t.N)
B.a.J(r,A.CQ($.V.j().z,s))
$.j9.j().kt(a,r)},
ER(a){var s,r,q,p
A:{if("open"===a){s=B.ax
break A}if("chain"===a){s=B.cg
break A}if("through-door"===a){s=B.ch
break A}if("letterbox"===a){s=B.ci
break A}s=B.ae
break A}r=$.aI.j().ng(s)
if(s===B.ax){q=$.Y.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.hd
if(p!=null)p.dj(q.b)
p=$.bz
if(p!=null)p.f5($.Y.j(),q.a)
p=$.by
if(p!=null)p.bM()}}if(!(r instanceof A.lj)||s===B.ae){A.uQ()
return}if(r.a.gbw()==null){A.xh()
A.uQ()
return}A.xv()},
EX(){var s=$.aI.j().mW()
if(!(s instanceof A.iv)||s.b){A.xh()
A.uQ()
return}if(s.a.gbw()==null){A.xh()
A.uQ()
return}A.xv()},
xv(){var s,r,q,p,o,n,m,l,k,j=$.aI.j().r,i=j==null,h=i?null:j.gbw()
if(i||h==null)return
s=$.aI.j().gcj()
if(s==null){$.aB.j().ks(h)
$.cN().bH(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.aB.j().fv(h,i)
q=A.e([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.aB.j()
l=A.e([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aX(k.a,k.b))}m.ku(l,r)
o=$.cN()
m=j.a.a
o.bH(!0,i?q:B.n,m,h)
if(!i){i=A.F(p)
k=A.bA(new A.I(p,i.i("n(1)").a(new A.vn(r)),i.i("I<1>")),t.Y)
if(k!=null){i=$.aB.j()
q=k.c
i.fw(h,q)
o.bH(!0,B.n,m,h+"\n\n"+q)}}}A.Ay()},
ES(a){var s,r,q,p,o,n=$.aI.j().nh(a)
if(!(n instanceof A.lk))return
s=n.c
if(!$.V.j().mY(n.b,s))return
r=s.c
s=$.aB.j()
q=n.a
p=q.gbw()
s.fw(p==null?"":p,r)
o=q.gbw()
if(o==null)o=""
$.cN().bH(!0,B.n,q.a.a,o+"\n\n"+r)
A.Ay()
A.mD("saved after visitor answer")},
uQ(){var s,r=$.aB.j()
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
r=$.cN()
r.a=null
r.b=""
r.e=A.e([],t.s)
r.c=1
r.r=r.f=null
r.w=!1
r.x=0
$.ae.j().dk($.B.j())},
Ay(){var s,r,q,p,o=$.aB.j(),n=A.c(v.G.document),m=A.e([],t.wt)
for(s=$.ml.j().fm(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
m.push(new A.aX(p.a,B.a.gX(p.c).p(0)))}o.kr(n,m)},
ET(a){var s,r,q,p=$.aI.j().ni(a,!0,$.ml.j())
if(p==null)return
s=$.ml.j().nP(p,B.i7)
r=$.aB.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.h()
r.textContent=B.K.bR("",!0,q)},
xh(){var s,r=$.Y.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.hd
if(s!=null)s.dj(r.b)
s=$.bz
if(s!=null)s.f5($.Y.j(),r.a)
s=$.by
if(s!=null)s.bM()}},
Gm(){var s,r,q,p,o,n,m,l,k
for(s=$.Y.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bW.b
if(k===$.bW)A.j(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
H7(a){var s,r,q,p,o,n,m,l=$.Y.j().e.h(0,a)
if(l==null||$.b1.j().gcK()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.m){n=$.b1.b
if(n===$.b1)A.j(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.l){n=$.b1.b
if(n===$.b1)A.j(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.v){n=$.b1.b
if(n===$.b1)A.j(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.G){o=$.b1.b
if(o===$.b1)A.j(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
Ak(a){var s,r=$.Y.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.bh
if(q.length===0)return 0.12
s=A.F(q)
return B.c.E(new A.I(q,s.i("n(1)").a(new A.vo()),s.i("I<1>")).gt(0)/q.length,0.12,1)},
h0:function h0(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.bA=_.y2=0
_.bl=_.bk=null
_.dd=$
_.cr=null
_.cs=0},
u4:function u4(a){this.a=a},
u5:function u5(a){this.a=a},
u6:function u6(a){this.a=a},
u7:function u7(a){this.a=a},
u0:function u0(){},
u1:function u1(){},
u2:function u2(){},
u3:function u3(){},
tX:function tX(){},
tY:function tY(){},
tZ:function tZ(){},
u_:function u_(){},
fY:function fY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tA:function tA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
uz:function uz(){},
uA:function uA(){},
uB:function uB(){},
uH:function uH(){},
uI:function uI(){},
uJ:function uJ(){},
uK:function uK(){},
uL:function uL(){},
uM:function uM(a){this.a=a},
uN:function uN(a){this.a=a},
uO:function uO(a){this.a=a},
uC:function uC(a){this.a=a},
uD:function uD(){},
uE:function uE(){},
uF:function uF(){},
uG:function uG(){},
uw:function uw(){},
ux:function ux(){},
uy:function uy(){},
ut:function ut(){},
uu:function uu(){},
uv:function uv(){},
vf:function vf(a,b){this.a=a
this.b=b},
vd:function vd(a){this.a=a},
ve:function ve(a){this.a=a},
vS:function vS(a){this.a=a},
vT:function vT(){},
vU:function vU(){},
w4:function w4(){},
wc:function wc(){},
wd:function wd(){},
we:function we(){},
wf:function wf(){},
wg:function wg(){},
wh:function wh(){},
wi:function wi(){},
vV:function vV(){},
vW:function vW(){},
vX:function vX(){},
vY:function vY(){},
vZ:function vZ(){},
w_:function w_(){},
w0:function w0(){},
w1:function w1(){},
w2:function w2(){},
w3:function w3(){},
w5:function w5(){},
w6:function w6(){},
w7:function w7(){},
w8:function w8(){},
w9:function w9(){},
wa:function wa(){},
wb:function wb(){},
vg:function vg(){},
vh:function vh(){},
vl:function vl(a){this.a=a},
vu:function vu(a){this.a=a},
vz:function vz(a){this.a=a},
vk:function vk(){},
vr:function vr(){},
vn:function vn(a){this.a=a},
vo:function vo(){},
yy(a,b,c,d,e,f){var s=a[b]()
return s},
px(a,b,c){var s=null
return c.a(A.yy(a,b,s,s,s,s))},
wn(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.d(A.am(b.gor(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.ae()
o=q*16
n=o+16
B.r.dv(s,o,n,p.a)
if(l)B.r.dv(r,o,n,p.eY().a)}m=a.a
A.y(m,"uInstanceModels",new A.A(B.dM,s))
if(l)A.y(m,"uInstanceNormalMatrices",new A.A(B.dM,r))
A.y(m,"uUseInstances",B.dN)},
C4(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
C3(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
AO(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
wo(a,b){var s=B.c.aY(a),r=A.AO(s,b),q=A.AO(s+1,b),p=B.c.E(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
AN(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Gu(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cf(a,b,c){var s=B.c.E(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b0(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
GJ(a){var s,r,q,p,o,n,m,l=B.k.aJ(a,null),k=t.f
if(!k.b(l))throw A.d(B.fY)
s=t.N
r=t.z
q=A.aO(l,s,r)
p=A.o(s,t.P)
for(o=0;o<14;++o){n=B.j3[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.o(s,r))
else if(k.b(m))p.k(0,n,A.aO(m,s,r))
else throw A.d(A.a6('text.json section "'+n+'" must be an object',null,null))}return p},
H3(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaR(a)
s=new A.eg()
s.c3((b^274953^c)>>>0)
r=s.aQ(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.wG.prototype={}
J.kk.prototype={
a3(a,b){return a===b},
gI(a){return A.i8(a)},
p(a){return"Instance of '"+A.kQ(a)+"'"},
ga6(a){return A.df(A.xp(this))}}
J.kn.prototype={
p(a){return String(a)},
gI(a){return a?519018:218159},
ga6(a){return A.df(t.y)},
$iai:1,
$in:1}
J.hP.prototype={
a3(a,b){return null==b},
p(a){return"null"},
gI(a){return 0},
$iai:1,
$iau:1}
J.hR.prototype={$ia7:1}
J.e2.prototype={
gI(a){return 0},
ga6(a){return B.m2},
p(a){return String(a)}}
J.kK.prototype={}
J.ea.prototype={}
J.dv.prototype={
p(a){var s=a[$.B3()]
if(s==null)s=a[$.hp()]
if(s==null)return this.kI(a)
return"JavaScript function for "+J.di(s)},
$ieD:1}
J.fG.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.fH.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.u.prototype={
d1(a,b){return new A.aU(a,A.F(a).i("@<1>").L(b).i("aU<1,2>"))},
l(a,b){A.F(a).c.a(b)
a.$flags&1&&A.bO(a,29)
a.push(b)},
pq(a,b){var s
a.$flags&1&&A.bO(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.yP(b,null))
return a.splice(b,1)[0]},
a5(a,b){var s
a.$flags&1&&A.bO(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a3(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.F(a).i("p<1>").a(b)
a.$flags&1&&A.bO(a,"addAll",2)
if(Array.isArray(b)){this.l8(a,b)
return}for(s=J.S(b);s.m();)a.push(s.gn())},
l8(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.av(a))
for(r=0;r<s;++r)a.push(b[r])},
H(a){a.$flags&1&&A.bO(a,"clear","clear")
a.length=0},
cC(a,b,c){var s=A.F(a)
return new A.P(a,s.L(c).i("1(2)").a(b),s.i("@<1>").L(c).i("P<1,2>"))},
a_(a,b){var s,r=A.cY(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.x(a[s]))
return r.join(b)},
bD(a,b,c,d){var s,r,q
d.a(b)
A.F(a).L(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.av(a))}return r},
aX(a,b,c){var s,r,q,p=A.F(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.av(a))}if(c!=null)return c.$0()
throw A.d(A.cB())},
ap(a,b){return this.aX(a,b,null)},
a1(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aS(a,b,c){var s=a.length
if(b>s)throw A.d(A.aW(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aW(c,b,s,"end",null))
if(b===c)return A.e([],A.F(a))
return A.e(a.slice(b,c),A.F(a))},
gS(a){if(a.length>0)return a[0]
throw A.d(A.cB())},
gX(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cB())},
gaR(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.cB())
throw A.d(A.yu())},
N(a,b){var s,r
A.F(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.av(a))}return!1},
aa(a,b){var s,r
A.F(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.av(a))}return!0},
U(a,b){var s,r,q,p,o,n=A.F(a)
n.i("k(1,1)?").a(b)
a.$flags&2&&A.bO(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Fq()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.av()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hn(b,2))
if(p>0)this.mr(a,p)},
Z(a){return this.U(a,null)},
mr(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
dz(a,b){var s,r,q,p
a.$flags&2&&A.bO(a,"shuffle")
s=a.length
while(s>1){r=b.aQ(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
bS(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.a3(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.a3(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gY(a){return a.length!==0},
p(a){return A.wF(a,"[","]")},
gu(a){return new J.eu(a,a.length,A.F(a).i("eu<1>"))},
gI(a){return A.i8(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bO(a,"set length","change the length of")
if(b<0)throw A.d(A.aW(b,0,null,"newLength",null))
if(b>a.length)A.F(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.vI(a,b))
return a[b]},
k(a,b,c){A.F(a).c.a(c)
a.$flags&2&&A.bO(a)
if(!(b>=0&&b<a.length))throw A.d(A.vI(a,b))
a[b]=c},
fh(a,b){return new A.cJ(a,b.i("cJ<0>"))},
eS(a,b){var s
A.F(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga6(a){return A.df(A.F(a))},
$iT:1,
$ip:1,
$iD:1}
J.kl.prototype={
pT(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kQ(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.py.prototype={}
J.eu.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.t(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iab:1}
J.eJ.prototype={
F(a,b){var s
A.al(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcv(b)
if(this.gcv(a)===s)return 0
if(this.gcv(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcv(a){return a===0?1/a<0:a<0},
ar(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.b_(""+a+".toInt()"))},
nd(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.b_(""+a+".ceil()"))},
aY(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.b_(""+a+".floor()"))},
aC(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.b_(""+a+".round()"))},
pM(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
E(a,b,c){if(this.F(b,c)>0)throw A.d(A.xM(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
af(a,b){var s
if(b>20)throw A.d(A.aW(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcv(a))return"-"+s
return s},
pR(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aW(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.f(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.j(A.b_("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.f(p,1)
s=p[1]
if(3>=r)return A.f(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a8("0",o)},
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
kK(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hH(a,b)},
R(a,b){return(a|0)===a?a/b|0:this.hH(a,b)},
hH(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.b_("Result of truncating division is "+A.x(s)+": "+A.x(a)+" ~/ "+b))},
ca(a,b){var s
if(a>0)s=this.cY(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
my(a,b){if(0>b)throw A.d(A.xM(b))
return this.cY(a,b)},
cY(a,b){return b>31?0:a>>>b},
ga6(a){return A.df(t.o)},
$ib6:1,
$iw:1,
$ibj:1}
J.hO.prototype={
ga6(a){return A.df(t.S)},
$iai:1,
$ik:1}
J.ko.prototype={
ga6(a){return A.df(t.i)},
$iai:1}
J.e1.prototype={
hV(a,b){return new A.m9(b,a,0)},
kE(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.hQ){s=b.e
s=!(s==null?b.e=b.lt():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.lA(a,b)}},
bZ(a,b,c,d){var s=A.i9(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
lA(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.Bv(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gfB()
n=p.geg()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.G(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.b3(a,r))
return m},
ag(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aW(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.ag(a,b,0)},
G(a,b,c){return a.substring(b,A.i9(b,c,a.length))},
b3(a,b){return this.G(a,b,null)},
bo(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.CI(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.CJ(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a8(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.ew)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
jF(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a8(c,s)+a},
de(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aW(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bS(a,b){return this.de(a,b,0)},
q(a,b){return A.Hd(a,b,0)},
F(a,b){var s
A.v(b)
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
ga6(a){return A.df(t.N)},
gt(a){return a.length},
$iai:1,
$ib6:1,
$iqk:1,
$ii:1}
A.ed.prototype={
gu(a){return new A.hv(J.S(this.gb4()),A.r(this).i("hv<1,2>"))},
gt(a){return J.cd(this.gb4())},
gO(a){return J.mM(this.gb4())},
gY(a){return J.Bz(this.gb4())},
a1(a,b){return A.r(this).y[1].a(J.mL(this.gb4(),b))},
gS(a){return A.r(this).y[1].a(J.y9(this.gb4()))},
q(a,b){return J.y8(this.gb4(),b)},
p(a){return J.di(this.gb4())}}
A.hv.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iab:1}
A.ey.prototype={
gb4(){return this.a}}
A.iD.prototype={$iT:1}
A.iB.prototype={
h(a,b){return this.$ti.y[1].a(J.aG(this.a,b))},
k(a,b,c){var s=this.$ti
J.bk(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.BA(this.a,b)},
l(a,b){var s=this.$ti
J.fh(this.a,s.c.a(s.y[1].a(b)))},
U(a,b){var s
this.$ti.i("k(2,2)?").a(b)
s=b==null?null:new A.tB(this,b)
J.BB(this.a,s)},
$iT:1,
$iD:1}
A.tB.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("k(1,1)")}}
A.aU.prototype={
d1(a,b){return new A.aU(this.a,this.$ti.i("@<1>").L(b).i("aU<1,2>"))},
gb4(){return this.a}}
A.eK.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dV.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.r8.prototype={}
A.T.prototype={}
A.a5.prototype={
gu(a){var s=this
return new A.aV(s,s.gt(s),A.r(s).i("aV<a5.E>"))},
gO(a){return this.gt(this)===0},
gS(a){if(this.gt(this)===0)throw A.d(A.cB())
return this.a1(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a3(r.a1(0,s),b))return!0
if(q!==r.gt(r))throw A.d(A.av(r))}return!1},
aa(a,b){var s,r,q=this
A.r(q).i("n(a5.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a1(0,r)))return!1
if(s!==q.gt(q))throw A.d(A.av(q))}return!0},
N(a,b){var s,r,q=this
A.r(q).i("n(a5.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a1(0,r)))return!0
if(s!==q.gt(q))throw A.d(A.av(q))}return!1},
a_(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.x(p.a1(0,0))
if(o!==p.gt(p))throw A.d(A.av(p))
for(r=s,q=1;q<o;++q){r=r+b+A.x(p.a1(0,q))
if(o!==p.gt(p))throw A.d(A.av(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.x(p.a1(0,q))
if(o!==p.gt(p))throw A.d(A.av(p))}return r.charCodeAt(0)==0?r:r}},
dn(a,b){return this.kH(0,A.r(this).i("n(a5.E)").a(b))},
cC(a,b,c){var s=A.r(this)
return new A.P(this,s.L(c).i("1(a5.E)").a(b),s.i("@<a5.E>").L(c).i("P<1,2>"))},
c0(a,b){var s=A.r(this).i("a5.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
c_(a){return this.c0(0,!0)},
bG(a){var s,r=this,q=A.wJ(A.r(r).i("a5.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a1(0,s))
return q}}
A.ip.prototype={
glF(){var s=J.cd(this.a),r=this.c
if(r==null||r>s)return s
return r},
gmB(){var s=J.cd(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cd(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a1(a,b){var s=this,r=s.gmB()+b
if(b<0||r>=s.glF())throw A.d(A.po(b,s.gt(0),s,"index"))
return J.mL(s.a,r)},
c0(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aE(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.yw(0,n):J.yv(0,n)}r=A.cY(s,m.a1(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a1(n,o+q))
if(m.gt(n)<l)throw A.d(A.av(p))}return r},
c_(a){return this.c0(0,!0)}}
A.aV.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aE(q),o=p.gt(q)
if(r.b!==o)throw A.d(A.av(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a1(q,s);++r.c
return!0},
$iab:1}
A.cD.prototype={
gu(a){return new A.hW(J.S(this.a),this.b,A.r(this).i("hW<1,2>"))},
gt(a){return J.cd(this.a)},
gO(a){return J.mM(this.a)},
gS(a){return this.b.$1(J.y9(this.a))},
a1(a,b){return this.b.$1(J.mL(this.a,b))}}
A.dn.prototype={$iT:1}
A.hW.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.P.prototype={
gt(a){return J.cd(this.a)},
a1(a,b){return this.b.$1(J.mL(this.a,b))}}
A.I.prototype={
gu(a){return new A.U(J.S(this.a),this.b,this.$ti.i("U<1>"))}}
A.U.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iab:1}
A.hF.prototype={
gu(a){return new A.hG(J.S(this.a),this.b,B.eo,this.$ti.i("hG<1,2>"))}}
A.hG.prototype={
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
A.hD.prototype={
m(){return!1},
gn(){throw A.d(A.cB())},
$iab:1}
A.cJ.prototype={
gu(a){return new A.ix(J.S(this.a),this.$ti.i("ix<1>"))}}
A.ix.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iab:1}
A.aw.prototype={
st(a,b){throw A.d(A.b_("Cannot change the length of a fixed-length list"))},
l(a,b){A.bY(a).i("aw.E").a(b)
throw A.d(A.b_("Cannot add to a fixed-length list"))}}
A.d5.prototype={
k(a,b,c){A.r(this).i("d5.E").a(c)
throw A.d(A.b_("Cannot modify an unmodifiable list"))},
st(a,b){throw A.d(A.b_("Cannot change the length of an unmodifiable list"))},
l(a,b){A.r(this).i("d5.E").a(b)
throw A.d(A.b_("Cannot add to an unmodifiable list"))},
U(a,b){A.r(this).i("k(d5.E,d5.E)?").a(b)
throw A.d(A.b_("Cannot modify an unmodifiable list"))}}
A.fW.prototype={}
A.ig.prototype={
gt(a){return J.cd(this.a)},
a1(a,b){var s=this.a,r=J.aE(s)
return r.a1(s,r.gt(s)-1-b)}}
A.j7.prototype={}
A.aX.prototype={$r:"+(1,2)",$s:1}
A.f9.prototype={$r:"+height,width(1,2)",$s:2}
A.iS.prototype={$r:"+influence,light(1,2)",$s:3}
A.ak.prototype={$r:"+(1,2,3)",$s:4}
A.b0.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iT.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.iU.prototype={$r:"+(1,2,3,4)",$s:8}
A.hx.prototype={}
A.fv.prototype={
gO(a){return this.gt(this)===0},
gY(a){return this.gt(this)!==0},
p(a){return A.wK(this)},
k(a,b,c){var s=A.r(this)
s.c.a(b)
s.y[1].a(c)
A.BX()},
gK(){return new A.cr(this.o7(),A.r(this).i("cr<M<1,2>>"))},
o7(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gK(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga2(),o=o.gu(o),n=A.r(s),m=n.y[1],n=n.i("M<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.M(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bU(a,b,c,d){var s=A.o(c,d)
this.aA(0,new A.nN(this,A.r(this).L(c).L(d).i("M<1,2>(3,4)").a(b),s))
return s},
$iX:1}
A.nN.prototype={
$2(a,b){var s=A.r(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.r(this.a).i("~(1,2)")}}
A.a4.prototype={
gt(a){return this.b.length},
ghe(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
V(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.V(b))return null
return this.b[this.a[b]]},
aA(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.ghe()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga2(){return new A.f5(this.ghe(),this.$ti.i("f5<1>"))},
gaG(){return new A.f5(this.b,this.$ti.i("f5<2>"))}}
A.f5.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gY(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.f6(s,s.length,this.$ti.i("f6<1>"))}}
A.f6.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iab:1}
A.cT.prototype={
bL(){var s=this,r=s.$map
if(r==null){r=new A.hS(s.$ti.i("hS<1,2>"))
A.AH(s.a,r)
s.$map=r}return r},
V(a){return this.bL().V(a)},
h(a,b){return this.bL().h(0,b)},
aA(a,b){this.$ti.i("~(1,2)").a(b)
this.bL().aA(0,b)},
ga2(){var s=this.bL()
return new A.ad(s,A.r(s).i("ad<1>"))},
gaG(){var s=this.bL()
return new A.ax(s,A.r(s).i("ax<2>"))},
gt(a){return this.bL().a}}
A.hy.prototype={
l(a,b){A.r(this).c.a(b)
A.BY()}}
A.aJ.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gY(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f6(s,s.length,r.$ti.i("f6<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bG(a){return A.ku(this,this.$ti.c)}}
A.qz.prototype={
$0(){return B.c.aY(1000*this.a.now())},
$S:35}
A.ih.prototype={}
A.t4.prototype={
b0(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.i3.prototype={
p(a){return"Null check operator used on a null value"}}
A.kp.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ld.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.qd.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hE.prototype={}
A.iW.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$id2:1}
A.dU.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.B1(r==null?"unknown":r)+"'"},
ga6(a){var s=A.xO(this)
return A.df(s==null?A.bY(this):s)},
$ieD:1,
gq3(){return this},
$C:"$1",
$R:1,
$D:null}
A.jI.prototype={$C:"$0",$R:0}
A.jJ.prototype={$C:"$2",$R:2}
A.l9.prototype={}
A.l6.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.B1(s)+"'"}}
A.fp.prototype={
a3(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fp))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.mI(this.a)^A.i8(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kQ(this.a)+"'")}}
A.kY.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cj.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gY(a){return this.a!==0},
ga2(){return new A.ad(this,A.r(this).i("ad<1>"))},
gaG(){return new A.ax(this,A.r(this).i("ax<2>"))},
gK(){return new A.K(this,A.r(this).i("K<1,2>"))},
V(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.os(a)},
os(a){var s=this.d
if(s==null)return!1
return this.cu(s[this.ct(a)],a)>=0},
J(a,b){A.r(this).i("X<1,2>").a(b).aA(0,new A.pH(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ot(b)},
ot(a){var s,r,q=this.d
if(q==null)return null
s=q[this.ct(a)]
r=this.cu(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.r(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fG(s==null?q.b=q.dX():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fG(r==null?q.c=q.dX():r,b,c)}else q.ov(b,c)},
ov(a,b){var s,r,q,p,o=this,n=A.r(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dX()
r=o.ct(a)
q=s[r]
if(q==null)s[r]=[o.dY(a,b)]
else{p=o.cu(q,a)
if(p>=0)q[p].b=b
else q.push(o.dY(a,b))}},
cD(a,b){var s,r,q=this,p=A.r(q)
p.c.a(a)
p.i("2()").a(b)
if(q.V(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a5(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.l6(this.c,b)
else return this.ou(b)},
ou(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ct(a)
r=n[s]
q=o.cu(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fD(p)
if(r.length===0)delete n[s]
return p.b},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dC()}},
aA(a,b){var s,r,q=this
A.r(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.av(q))
s=s.c}},
fG(a,b,c){var s,r=A.r(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dY(b,c)
else s.b=c},
l6(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fD(s)
delete a[b]
return s.b},
dC(){this.r=this.r+1&1073741823},
dY(a,b){var s=this,r=A.r(s),q=new A.pT(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dC()
return q},
fD(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dC()},
ct(a){return J.aC(a)&1073741823},
cu(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
p(a){return A.wK(this)},
dX(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iwI:1}
A.pH.prototype={
$2(a,b){var s=this.a,r=A.r(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.r(this.a).i("~(1,2)")}}
A.pT.prototype={}
A.ad.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ck(s,s.r,s.e,this.$ti.i("ck<1>"))},
q(a,b){return this.a.V(b)}}
A.ck.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iab:1}
A.ax.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.an(s,s.r,s.e,this.$ti.i("an<1>"))}}
A.an.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iab:1}
A.K.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cC(s,s.r,s.e,this.$ti.i("cC<1,2>"))}}
A.cC.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.M(s.a,s.b,r.$ti.i("M<1,2>"))
r.c=s.c
return!0}},
$iab:1}
A.hS.prototype={
ct(a){return A.GE(a)&1073741823},
cu(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1}}
A.vN.prototype={
$1(a){return this.a(a)},
$S:11}
A.vO.prototype={
$2(a,b){return this.a(a,b)},
$S:159}
A.vP.prototype={
$1(a){return this.a(A.v(a))},
$S:28}
A.bx.prototype={
ga6(a){return A.df(this.ha())},
ha(){return A.GO(this.$r,this.cS())},
p(a){return this.hN(!1)},
hN(a){var s,r,q,p,o,n=this.lK(),m=this.cS(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.yM(o):l+A.x(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
lK(){var s,r=this.$s
while($.u8.length<=r)B.a.l($.u8,null)
s=$.u8[r]
if(s==null){s=this.ls()
B.a.k($.u8,r,s)}return s},
ls(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.km(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ag(j,k)}}
A.eh.prototype={
cS(){return[this.a,this.b]},
a3(a,b){if(b==null)return!1
return b instanceof A.eh&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gI(a){return A.cF(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ei.prototype={
cS(){return[this.a,this.b,this.c]},
a3(a,b){var s=this
if(b==null)return!1
return b instanceof A.ei&&s.$s===b.$s&&J.a3(s.a,b.a)&&J.a3(s.b,b.b)&&J.a3(s.c,b.c)},
gI(a){var s=this
return A.cF(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.h_.prototype={
cS(){return this.a},
a3(a,b){if(b==null)return!1
return b instanceof A.h_&&this.$s===b.$s&&A.E2(this.a,b.a)},
gI(a){return A.cF(this.$s,A.CV(this.a),B.f,B.f,B.f,B.f)}}
A.hQ.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gm2(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.yA(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
lt(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hV(a,b){return new A.lw(this,b,0)},
lJ(a,b){var s,r=this.gm2()
if(r==null)r=A.fb(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lR(s)},
$iqk:1,
$iDa:1}
A.lR.prototype={
gfB(){return this.b.index},
geg(){var s=this.b
return s.index+s[0].length},
$ifK:1,
$iia:1}
A.lw.prototype={
gu(a){return new A.lx(this.a,this.b,this.c)}}
A.lx.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.lJ(l,s)
if(p!=null){m.d=p
o=p.geg()
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
A.io.prototype={
geg(){return this.a+this.c.length},
$ifK:1,
gfB(){return this.a}}
A.m9.prototype={
gu(a){return new A.ma(this.a,this.b,this.c)},
gS(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.io(r,s)
throw A.d(A.cB())}}
A.ma.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.io(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iab:1}
A.tC.prototype={
e0(){var s=this.b
if(s===this)throw A.d(new A.eK("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a9(""))
return s}}
A.e3.prototype={
ga6(a){return B.lW},
hX(a,b,c){A.zS(a,b,c)
return new Float32Array(a,b,c)},
$iai:1,
$ie3:1}
A.fL.prototype={$ifL:1}
A.i1.prototype={
gn6(a){if(((a.$flags|0)&2)!==0)return new A.ue(a.buffer)
else return a.buffer},
lV(a,b,c,d){var s=A.aW(b,0,c,d,null)
throw A.d(s)},
fQ(a,b,c,d){if(b>>>0!==b||b>c)this.lV(a,b,c,d)}}
A.ue.prototype={
hX(a,b,c){var s=A.CS(this.a,b,c)
s.$flags=3
return s}}
A.kz.prototype={
ga6(a){return B.lX},
$iai:1}
A.b8.prototype={
gt(a){return a.length},
hB(a,b,c,d,e){var s,r,q=a.length
this.fQ(a,b,q,"start")
this.fQ(a,c,q,"end")
if(b>c)throw A.d(A.aW(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.z(e,null))
r=d.length
if(r-e<s)throw A.d(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic0:1}
A.i_.prototype={
h(a,b){A.dL(b,a,a.length)
return a[b]},
k(a,b,c){A.bM(c)
a.$flags&2&&A.bO(a)
A.dL(b,a,a.length)
a[b]=c},
dv(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bO(a,5)
this.hB(a,b,c,d,0)
return},
$iT:1,
$ip:1,
$iD:1}
A.i0.prototype={
k(a,b,c){A.b(c)
a.$flags&2&&A.bO(a)
A.dL(b,a,a.length)
a[b]=c},
kn(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bO(a,5)
this.hB(a,b,c,d,e)
return},
$iT:1,
$ip:1,
$iD:1}
A.hZ.prototype={
ga6(a){return B.lY},
aS(a,b,c){return new Float32Array(a.subarray(b,A.EP(b,c,a.length)))},
$iai:1,
$iom:1}
A.kA.prototype={
ga6(a){return B.lZ},
$iai:1}
A.kB.prototype={
ga6(a){return B.m_},
h(a,b){A.dL(b,a,a.length)
return a[b]},
$iai:1}
A.kC.prototype={
ga6(a){return B.m0},
h(a,b){A.dL(b,a,a.length)
return a[b]},
$iai:1}
A.kD.prototype={
ga6(a){return B.m1},
h(a,b){A.dL(b,a,a.length)
return a[b]},
$iai:1}
A.kE.prototype={
ga6(a){return B.m4},
h(a,b){A.dL(b,a,a.length)
return a[b]},
$iai:1,
$iwZ:1}
A.kF.prototype={
ga6(a){return B.m5},
h(a,b){A.dL(b,a,a.length)
return a[b]},
$iai:1}
A.eM.prototype={
ga6(a){return B.m6},
gt(a){return a.length},
h(a,b){A.dL(b,a,a.length)
return a[b]},
$iai:1,
$ieM:1}
A.i2.prototype={
ga6(a){return B.m7},
gt(a){return a.length},
h(a,b){A.dL(b,a,a.length)
return a[b]},
$iai:1,
$iis:1}
A.iM.prototype={}
A.iN.prototype={}
A.iO.prototype={}
A.iP.prototype={}
A.cH.prototype={
i(a){return A.j_(v.typeUniverse,this,a)},
L(a){return A.zr(v.typeUniverse,this,a)}}
A.lK.prototype={}
A.md.prototype={
p(a){return A.bN(this.a,null)}}
A.lI.prototype={
p(a){return this.a}}
A.h4.prototype={$idE:1}
A.tx.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:41}
A.tw.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:118}
A.ty.prototype={
$0(){this.a.$0()},
$S:12}
A.tz.prototype={
$0(){this.a.$0()},
$S:12}
A.ub.prototype={
l5(a,b){if(self.setTimeout!=null)self.setTimeout(A.hn(new A.uc(this,b),0),a)
else throw A.d(A.b_("`setTimeout()` not found."))}}
A.uc.prototype={
$0(){this.b.$0()},
$S:0}
A.ly.prototype={
e6(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dG(a)
else{s=r.a
if(q.i("c_<1>").b(a))s.fO(a)
else s.cQ(a)}},
e7(a,b){var s=this.a
if(this.b)s.bs(new A.b4(a,b))
else s.cM(new A.b4(a,b))}}
A.up.prototype={
$1(a){return this.a.$2(0,a)},
$S:18}
A.uq.prototype={
$2(a,b){this.a.$2(1,new A.hE(a,t.l.a(b)))},
$S:119}
A.vD.prototype={
$2(a,b){this.a(A.b(a),b)},
$S:115}
A.cL.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
mt(a,b){var s,r,q
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
o.d=null}q=o.mt(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.zm
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
o.a=A.zm
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.m("sync*"))}return!1},
q6(a){var s,r,q=this
if(a instanceof A.cr){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.S(a)
return 2}},
$iab:1}
A.cr.prototype={
gu(a){return new A.cL(this.a(),this.$ti.i("cL<1>"))}}
A.b4.prototype={
p(a){return A.x(this.a)},
$iaq:1,
gc2(){return this.b}}
A.ou.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fV(null)}else{s=null
try{s=l.$0()}catch(p){r=A.aj(p)
q=A.cM(p)
l=r
o=q
n=A.xq(l,o)
l=new A.b4(l,o)
m.b.bs(l)
return}m.b.fV(s)}},
$S:0}
A.ox.prototype={
$2(a,b){var s,r,q=this
A.fb(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bs(new A.b4(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bs(new A.b4(r,s))}},
$S:96}
A.ow.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bk(r,k.b,a)
if(J.a3(s,0)){q=A.e([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.t)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.fh(q,l)}k.c.cQ(q)}}else if(J.a3(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bs(new A.b4(q,o))}},
$S(){return this.d.i("au(0)")}}
A.lC.prototype={
e7(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.cM(A.Fp(a,b))},
i_(a){return this.e7(a,null)}}
A.iz.prototype={
e6(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.dG(r.i("1/").a(a))}}
A.f2.prototype={
oH(a){if((this.c&15)!==6)return!0
return this.b.b.fc(t.bl.a(this.d),a.a,t.y,t.K)},
on(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.pO(q,m,a.b,o,n,t.l)
else p=l.fc(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.aj(s))){if((r.c&1)!==0)throw A.d(A.z("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.z("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aA.prototype={
fd(a,b,c){var s,r,q=this.$ti
q.L(c).i("1/(2)").a(a)
s=$.ar
if(s===B.y){if(!t.nW.b(b)&&!t.h_.b(b))throw A.d(A.am(b,"onError",u.c))}else{c.i("@<0/>").L(q.c).i("1(2)").a(a)
b=A.FY(b,s)}r=new A.aA(s,c.i("aA<0>"))
this.dE(new A.f2(r,3,a,b,q.i("@<1>").L(c).i("f2<1,2>")))
return r},
hL(a,b,c){var s,r=this.$ti
r.L(c).i("1/(2)").a(a)
s=new A.aA($.ar,c.i("aA<0>"))
this.dE(new A.f2(s,19,a,b,r.i("@<1>").L(c).i("f2<1,2>")))
return s},
mw(a){this.a=this.a&1|16
this.c=a},
cP(a){this.a=a.a&30|this.a&1
this.c=a.c},
dE(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dE(a)
return}r.cP(s)}A.mC(null,null,r.b,t.O.a(new A.tF(r,a)))}},
ho(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.ho(a)
return}m.cP(n)}l.a=m.cX(a)
A.mC(null,null,m.b,t.O.a(new A.tK(l,m)))}},
c8(){var s=t.F.a(this.c)
this.c=null
return this.cX(s)},
cX(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fV(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("c_<1>").b(a))A.tI(a,r,!0)
else{s=r.c8()
q.c.a(a)
r.a=8
r.c=a
A.f3(r,s)}},
cQ(a){var s,r=this
r.$ti.c.a(a)
s=r.c8()
r.a=8
r.c=a
A.f3(r,s)},
lr(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.c8()
q.cP(a)
A.f3(q,r)},
bs(a){var s=this.c8()
this.mw(a)
A.f3(this,s)},
dG(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("c_<1>").b(a)){this.fO(a)
return}this.lc(a)},
lc(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mC(null,null,s.b,t.O.a(new A.tH(s,a)))},
fO(a){A.tI(this.$ti.i("c_<1>").a(a),this,!1)
return},
cM(a){this.a^=2
A.mC(null,null,this.b,t.O.a(new A.tG(this,a)))},
$ic_:1}
A.tF.prototype={
$0(){A.f3(this.a,this.b)},
$S:0}
A.tK.prototype={
$0(){A.f3(this.b,this.a.a)},
$S:0}
A.tJ.prototype={
$0(){A.tI(this.a.a,this.b,!0)},
$S:0}
A.tH.prototype={
$0(){this.a.cQ(this.b)},
$S:0}
A.tG.prototype={
$0(){this.a.bs(this.b)},
$S:0}
A.tN.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pN(t.pF.a(q.d),t.z)}catch(p){s=A.aj(p)
r=A.cM(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.n2(q)
n=k.a
n.c=new A.b4(q,o)
q=n}q.b=!0
return}if(j instanceof A.aA&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aA){m=k.b.a
l=new A.aA(m.b,m.$ti)
j.fd(new A.tO(l,m),new A.tP(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tO.prototype={
$1(a){this.a.lr(this.b)},
$S:41}
A.tP.prototype={
$2(a,b){A.fb(a)
t.l.a(b)
this.a.bs(new A.b4(a,b))},
$S:59}
A.tM.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fc(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aj(l)
r=A.cM(l)
q=s
p=r
if(p==null)p=A.n2(q)
o=this.a
o.c=new A.b4(q,p)
o.b=!0}},
$S:0}
A.tL.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.oH(s)&&p.a.e!=null){p.c=p.a.on(s)
p.b=!1}}catch(o){r=A.aj(o)
q=A.cM(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.n2(p)
m=l.b
m.c=new A.b4(p,n)
p=m}p.b=!0}},
$S:0}
A.lz.prototype={}
A.m8.prototype={}
A.j6.prototype={$ize:1}
A.m0.prototype={
pP(a){var s,r,q
t.O.a(a)
try{if(B.y===$.ar){a.$0()
return}A.Ap(null,null,this,a,t.H)}catch(q){s=A.aj(q)
r=A.cM(q)
A.xB(A.fb(s),t.l.a(r))}},
hZ(a){return new A.u9(this,t.O.a(a))},
pN(a,b){b.i("0()").a(a)
if($.ar===B.y)return a.$0()
return A.Ap(null,null,this,a,b)},
fc(a,b,c,d){c.i("@<0>").L(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.y)return a.$1(b)
return A.G3(null,null,this,a,b,c,d)},
pO(a,b,c,d,e,f){d.i("@<0>").L(e).L(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.y)return a.$2(b,c)
return A.G2(null,null,this,a,b,c,d,e,f)},
jN(a,b,c,d){return b.i("@<0>").L(c).L(d).i("1(2,3)").a(a)}}
A.u9.prototype={
$0(){return this.a.pP(this.b)},
$S:0}
A.vs.prototype={
$0(){A.Cm(this.a,this.b)},
$S:0}
A.iF.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gY(a){return this.a!==0},
ga2(){return new A.f4(this,this.$ti.i("f4<1>"))},
gaG(){var s=this.$ti
return A.kv(new A.f4(this,s.i("f4<1>")),new A.tR(this),s.c,s.y[1])},
V(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lw(a)},
lw(a){var s=this.d
if(s==null)return!1
return this.bt(this.h9(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.zg(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.zg(q,b)
return r}else return this.lN(b)},
lN(a){var s,r,q=this.d
if(q==null)return null
s=this.h9(q,a)
r=this.bt(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fT(s==null?m.b=A.x2():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fT(r==null?m.c=A.x2():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.x2()
p=A.mI(b)&1073741823
o=q[p]
if(o==null){A.x3(q,p,[b,c]);++m.a
m.e=null}else{n=m.bt(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aA(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fU()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.av(m))}},
fU(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cY(i.a,null,!1,t.z)
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
fT(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.x3(a,b,c)},
h9(a,b){return a[A.mI(b)&1073741823]}}
A.tR.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iH.prototype={
bt(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.f4.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gY(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iG(s,s.fU(),this.$ti.i("iG<1>"))},
q(a,b){return this.a.V(b)}}
A.iG.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.av(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iab:1}
A.cq.prototype={
hj(){return new A.cq(A.r(this).i("cq<1>"))},
gu(a){var s=this,r=new A.f7(s,s.r,A.r(s).i("f7<1>"))
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
return t.Af.a(r[b])!=null}else return this.lv(b)},
lv(a){var s=this.d
if(s==null)return!1
return this.bt(s[this.dM(a)],a)>=0},
gS(a){var s=this.e
if(s==null)throw A.d(A.m("No elements"))
return A.r(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.r(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fS(s==null?q.b=A.x4():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fS(r==null?q.c=A.x4():r,b)}else return q.l7(b)},
l7(a){var s,r,q,p=this
A.r(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.x4()
r=p.dM(a)
q=s[r]
if(q==null)s[r]=[p.dK(a)]
else{if(p.bt(q,a)>=0)return!1
q.push(p.dK(a))}return!0},
a5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.hp(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.hp(s.c,b)
else return s.mq(b)},
mq(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dM(a)
r=n[s]
q=o.bt(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hP(p)
return!0},
lL(a,b){var s,r,q,p,o,n=this,m=A.r(n)
m.i("n(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.d(A.av(n))
if(!0===o)n.a5(0,r)}},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dW()}},
fS(a,b){A.r(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dK(b)
return!0},
hp(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hP(s)
delete a[b]
return!0},
dW(){this.r=this.r+1&1073741823},
dK(a){var s,r=this,q=new A.lQ(A.r(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dW()
return q},
hP(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dW()},
dM(a){return J.aC(a)&1073741823},
bt(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
$iyG:1}
A.lQ.prototype={}
A.f7.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.av(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iab:1}
A.pU.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:66}
A.W.prototype={
gu(a){return new A.aV(a,this.gt(a),A.bY(a).i("aV<W.E>"))},
a1(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gY(a){return!this.gO(a)},
gS(a){if(this.gt(a)===0)throw A.d(A.cB())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a3(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.d(A.av(a))}return!1},
aa(a,b){var s,r
A.bY(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.d(A.av(a))}return!0},
N(a,b){var s,r
A.bY(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.d(A.av(a))}return!1},
a_(a,b){var s
if(this.gt(a)===0)return""
s=A.wX("",a,b)
return s.charCodeAt(0)==0?s:s},
fh(a,b){return new A.cJ(a,b.i("cJ<0>"))},
cC(a,b,c){var s=A.bY(a)
return new A.P(a,s.L(c).i("1(W.E)").a(b),s.i("@<W.E>").L(c).i("P<1,2>"))},
l(a,b){var s
A.bY(a).i("W.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
d1(a,b){return new A.aU(a,A.bY(a).i("@<W.E>").L(b).i("aU<1,2>"))},
U(a,b){var s,r=A.bY(a)
r.i("k(W.E,W.E)?").a(b)
s=b==null?A.GD():b
A.l2(a,0,this.gt(a)-1,s,r.i("W.E"))},
of(a,b,c,d){var s
A.bY(a).i("W.E?").a(d)
A.i9(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.wF(a,"[","]")},
$iT:1,
$ip:1,
$iD:1}
A.aa.prototype={
aA(a,b){var s,r,q,p=A.r(this)
p.i("~(aa.K,aa.V)").a(b)
for(s=this.ga2(),s=s.gu(s),p=p.i("aa.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gK(){return this.ga2().cC(0,new A.pW(this),A.r(this).i("M<aa.K,aa.V>"))},
bU(a,b,c,d){var s,r,q,p,o,n=A.r(this)
n.L(c).L(d).i("M<1,2>(aa.K,aa.V)").a(b)
s=A.o(c,d)
for(r=this.ga2(),r=r.gu(r),n=n.i("aa.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
mS(a){var s,r
for(s=J.S(A.r(this).i("p<M<aa.K,aa.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
V(a){return this.ga2().q(0,a)},
gt(a){var s=this.ga2()
return s.gt(s)},
gO(a){var s=this.ga2()
return s.gO(s)},
gY(a){var s=this.ga2()
return s.gY(s)},
gaG(){return new A.iJ(this,A.r(this).i("iJ<aa.K,aa.V>"))},
p(a){return A.wK(this)},
$iX:1}
A.pW.prototype={
$1(a){var s=this.a,r=A.r(s)
r.i("aa.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("aa.V").a(s)
return new A.M(a,s,r.i("M<aa.K,aa.V>"))},
$S(){return A.r(this.a).i("M<aa.K,aa.V>(aa.K)")}}
A.pX.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.x(a)
r.a=(r.a+=s)+": "
s=A.x(b)
r.a+=s},
$S:46}
A.iJ.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gY(a){var s=this.a
return s.gY(s)},
gS(a){var s=this.a,r=s.ga2()
r=s.h(0,r.gS(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga2()
return new A.iK(r.gu(r),s,this.$ti.i("iK<1,2>"))}}
A.iK.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.j0.prototype={
k(a,b,c){var s=A.r(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.b_("Cannot modify unmodifiable map"))}}
A.fJ.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.r(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
V(a){return this.a.V(a)},
aA(a,b){this.a.aA(0,A.r(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gY(a){var s=this.a
return s.gY(s)},
gt(a){var s=this.a
return s.gt(s)},
ga2(){return this.a.ga2()},
p(a){return this.a.p(0)},
gaG(){return this.a.gaG()},
gK(){return this.a.gK()},
bU(a,b,c,d){return this.a.bU(0,A.r(this).L(c).L(d).i("M<1,2>(3,4)").a(b),c,d)},
$iX:1}
A.eb.prototype={}
A.dA.prototype={
gO(a){return this.gt(this)===0},
gY(a){return this.gt(this)!==0},
J(a,b){var s
for(s=J.S(A.r(this).i("p<1>").a(b));s.m();)this.l(0,s.gn())},
by(a){var s,r,q=this.bG(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a5(0,r)}return q},
p(a){return A.wF(this,"{","}")},
aa(a,b){var s
A.r(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a_(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.di(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.x(q.gn())
while(q.m())}else{r=s
do r=r+b+A.x(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.r(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gS(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cB())
return s.gn()},
a1(a,b){var s,r
A.kU(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.po(b,b-r,this,"index"))},
$iT:1,
$ip:1,
$ie7:1}
A.iV.prototype={
by(a){var s,r,q,p=this,o=p.hj()
for(s=A.iI(p,p.r,A.r(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bG(a){var s=this.hj()
s.J(0,this)
return s}}
A.me.prototype={
l(a,b){this.$ti.c.a(b)
return A.Ee()}}
A.fX.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.iI(s,s.r,A.r(s).c)},
bG(a){return this.a.bG(0)}}
A.h5.prototype={}
A.j1.prototype={}
A.lO.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.mk(b):s}},
gt(a){return this.b==null?this.c.a:this.bI().length},
gO(a){return this.gt(0)===0},
gY(a){return this.gt(0)>0},
ga2(){if(this.b==null){var s=this.c
return new A.ad(s,A.r(s).i("ad<1>"))}return new A.lP(this)},
gaG(){var s,r=this
if(r.b==null){s=r.c
return new A.ax(s,A.r(s).i("ax<2>"))}return A.kv(r.bI(),new A.tT(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.v(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.V(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.mI().k(0,b,c)},
V(a){if(this.b==null)return this.c.V(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
aA(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aA(0,b)
s=o.bI()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uP(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.av(o))}},
bI(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
mI(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.o(t.N,t.z)
r=n.bI()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.H(r)
n.a=n.b=null
return n.c=s},
mk(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uP(this.a[a])
return this.b[a]=s}}
A.tT.prototype={
$1(a){return this.a.h(0,A.v(a))},
$S:28}
A.lP.prototype={
gt(a){return this.a.gt(0)},
a1(a,b){var s=this.a
if(s.b==null)s=s.ga2().a1(0,b)
else{s=s.bI()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga2()
s=s.gu(s)}else{s=s.bI()
s=new J.eu(s,s.length,A.F(s).i("eu<1>"))}return s},
q(a,b){return this.a.V(b)}}
A.uh.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:45}
A.ug.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:45}
A.jC.prototype={
oK(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.i9(a4,a5,a2)
s=$.Bf()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.vM(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.vM(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bs("")
g=o}else g=o
g.a+=B.b.G(a3,p,q)
c=A.az(j)
g.a+=c
p=k
continue}}throw A.d(A.a6("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.G(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.yb(a3,m,a5,n,l,r)
else{b=B.d.M(r-1,4)+1
if(b===1)throw A.d(A.a6(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bZ(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.yb(a3,m,a5,n,l,a)
else{b=B.d.M(a,4)
if(b===1)throw A.d(A.a6(a1,a3,a5))
if(b>1)a3=B.b.bZ(a3,a5,a5,b===2?"==":"=")}return a3}}
A.nw.prototype={}
A.ez.prototype={}
A.jO.prototype={}
A.jX.prototype={}
A.hT.prototype={
p(a){var s=A.jY(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kr.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.kq.prototype={
aJ(a,b){var s=A.FQ(a,this.gnR().a)
return s},
aj(a,b){var s=A.DV(a,this.go5().b,null)
return s},
go5(){return B.ic},
gnR(){return B.ib}}
A.pJ.prototype={}
A.pI.prototype={}
A.tV.prototype={
jZ(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.G(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.G(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.G(a,r,q)
r=q+1
o=A.az(92)
s.a+=o
o=A.az(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.G(a,r,m)},
dI(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.kr(a,null))}B.a.l(s,a)},
dq(a){var s,r,q,p,o=this
if(o.jY(a))return
o.dI(a)
try{s=o.b.$1(a)
if(!o.jY(s)){q=A.yC(a,null,o.ghn())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.aj(p)
q=A.yC(a,r,o.ghn())
throw A.d(q)}},
jY(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.jZ(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dI(a)
q.q1(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dI(a)
r=q.q2(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
q1(a){var s,r,q=this.c
q.a+="["
s=J.aE(a)
if(s.gY(a)){this.dq(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.dq(s.h(a,r))}}q.a+="]"},
q2(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.cY(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aA(0,new A.tW(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.jZ(A.v(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.dq(r[n])}p.a+="}"
return!0}}
A.tW.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:46}
A.tU.prototype={
ghn(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.lh.prototype={}
A.t9.prototype={
nn(a){return new A.uf(this.a).lx(t.J.a(a),0,null,!0)}}
A.uf.prototype={
lx(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.i9(b,c,J.cd(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Ev(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Eu(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dO(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Ew(o)
l.b=0
throw A.d(A.a6(m,a,p+l.c))}return n},
dO(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.R(b+c,2)
r=q.dO(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dO(a,s,c,d)}return q.nQ(a,b,c,d)},
nQ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bs(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.f(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.f(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.f(i,p)
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
p=A.az(a[l])
e.a+=p}else{p=A.yY(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.az(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.eA.prototype={
a3(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eA)if(this.a===b.a)s=this.b===b.b
return s},
gI(a){return A.cF(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.f7.a(b)
s=B.d.F(this.a,b.a)
if(s!==0)return s
return B.d.F(this.b,b.b)},
p(a){var s=this,r=A.C1(A.D6(s)),q=A.jQ(A.D4(s)),p=A.jQ(A.D0(s)),o=A.jQ(A.D1(s)),n=A.jQ(A.D3(s)),m=A.jQ(A.D5(s)),l=A.yi(A.D2(s)),k=s.b,j=k===0?"":A.yi(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib6:1}
A.dW.prototype={
a3(a,b){if(b==null)return!1
return b instanceof A.dW&&this.a===b.a},
gI(a){return B.d.gI(this.a)},
F(a,b){return B.d.F(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.R(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.R(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.jF(B.d.p(o%1e6),6,"0")},
$ib6:1}
A.lH.prototype={
p(a){return this.v()},
$iC:1}
A.aq.prototype={
gc2(){return A.D_(this)}}
A.jy.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jY(s)
return"Assertion failed"}}
A.dE.prototype={}
A.cw.prototype={
gdS(){return"Invalid argument"+(!this.a?"(s)":"")},
gdR(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.x(p),n=s.gdS()+q+o
if(!s.a)return n
return n+s.gdR()+": "+A.jY(s.geT())},
geT(){return this.b}}
A.fO.prototype={
geT(){return A.xc(this.b)},
gdS(){return"RangeError"},
gdR(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.x(q):""
else if(q==null)s=": Not greater than or equal to "+A.x(r)
else if(q>r)s=": Not in inclusive range "+A.x(r)+".."+A.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.x(r)
return s}}
A.kh.prototype={
geT(){return A.b(this.b)},
gdS(){return"RangeError"},
gdR(){if(A.b(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.it.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.lc.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fU.prototype={
p(a){return"Bad state: "+this.a}}
A.jL.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jY(s)+"."}}
A.kH.prototype={
p(a){return"Out of Memory"},
gc2(){return null},
$iaq:1}
A.il.prototype={
p(a){return"Stack Overflow"},
gc2(){return null},
$iaq:1}
A.tD.prototype={
p(a){return"Exception: "+this.a}}
A.H.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.G(e,0,75)+"..."
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
k=""}return g+l+B.b.G(e,i,j)+k+"\n"+B.b.a8(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.x(f)+")"):g}}
A.p.prototype={
d1(a,b){return A.BR(this,A.r(this).i("p.E"),b)},
cC(a,b,c){var s=A.r(this)
return A.kv(this,s.L(c).i("1(p.E)").a(b),s.i("p.E"),c)},
dn(a,b){var s=A.r(this)
return new A.I(this,s.i("n(p.E)").a(b),s.i("I<p.E>"))},
fh(a,b){return new A.cJ(this,b.i("cJ<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.a3(s.gn(),b))return!0
return!1},
bD(a,b,c,d){var s,r
d.a(b)
A.r(this).L(d).i("1(1,p.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
aa(a,b){var s
A.r(this).i("n(p.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a_(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.di(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.di(q.gn())
while(q.m())}else{r=s
do r=r+A.x(b)+J.di(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.r(this).i("n(p.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
c0(a,b){var s=A.J(this,A.r(this).i("p.E"))
return s},
c_(a){return this.c0(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gY(a){return!this.gO(this)},
gS(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cB())
return s.gn()},
gaR(a){var s,r=this.gu(this)
if(!r.m())throw A.d(A.cB())
s=r.gn()
if(r.m())throw A.d(A.yu())
return s},
aX(a,b,c){var s,r=A.r(this)
r.i("n(p.E)").a(b)
r.i("p.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.cB())},
ap(a,b){return this.aX(0,b,null)},
a1(a,b){var s,r
A.kU(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.po(b,b-r,this,"index"))},
p(a){return A.CG(this,"(",")")}}
A.M.prototype={
p(a){return"MapEntry("+A.x(this.a)+": "+A.x(this.b)+")"}}
A.au.prototype={
gI(a){return A.G.prototype.gI.call(this,0)},
p(a){return"null"}}
A.G.prototype={$iG:1,
a3(a,b){return this===b},
gI(a){return A.i8(this)},
p(a){return"Instance of '"+A.kQ(this)+"'"},
ga6(a){return A.mG(this)},
toString(){return this.p(this)}}
A.mb.prototype={
p(a){return""},
$id2:1}
A.rR.prototype={
go3(){var s,r=this.b
if(r==null)r=$.qB.$0()
s=r-this.a
if($.y_()===1e6)return s
return s*1000}}
A.bs.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iDo:1}
A.t8.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.v(b)
s=B.b.bS(b,"=")
if(s===-1){if(b!=="")a.k(0,A.x9(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.G(b,0,s)
q=B.b.b3(b,s+1)
p=this.a
a.k(0,A.x9(r,0,r.length,p,!0),A.x9(q,0,q.length,p,!0))}return a},
$S:74}
A.t7.prototype={
$2(a,b){throw A.d(A.a6("Illegal IPv6 address, "+a,this.a,b))},
$S:80}
A.j2.prototype={
ghJ(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.x(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.b.gI(r.ghJ())
r.y!==$&&A.B0()
r.y=s
q=s}return q},
gaO(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.z5(s==null?"":s)
r.z!==$&&A.B0()
q=r.z=new A.eb(s,t.hL)}return q},
gjV(){return this.b},
geR(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.ag(s,"v",1))return B.b.G(s,1,s.length-1)
return s},
gf0(){var s=this.d
return s==null?A.zs(this.a):s},
gf4(){var s=this.f
return s==null?"":s},
gjq(){var s=this.r
return s==null?"":s},
gjr(){return this.c!=null},
gjt(){return this.f!=null},
gjs(){return this.r!=null},
p(a){return this.ghJ()},
a3(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gfn())if(p.c!=null===b.gjr())if(p.b===b.gjV())if(p.geR()===b.geR())if(p.gf0()===b.gf0())if(p.e===b.gjH()){r=p.f
q=r==null
if(!q===b.gjt()){if(q)r=""
if(r===b.gf4()){r=p.r
q=r==null
if(!q===b.gjs()){s=q?"":r
s=s===b.gjq()}}}}return s},
$ilf:1,
gfn(){return this.a},
gjH(){return this.e}}
A.t6.prototype={
gjU(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.de(s,"?",m)
q=s.length
if(r>=0){p=A.j3(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lD("data","",n,n,A.j3(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.m4.prototype={
gjr(){return this.c>0},
gjt(){return this.f<this.r},
gjs(){return this.r<this.a.length},
gfn(){var s=this.w
return s==null?this.w=this.lu():s},
lu(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.W(r.a,"http"))return"http"
if(q===5&&B.b.W(r.a,"https"))return"https"
if(s&&B.b.W(r.a,"file"))return"file"
if(q===7&&B.b.W(r.a,"package"))return"package"
return B.b.G(r.a,0,q)},
gjV(){var s=this.c,r=this.b+3
return s>r?B.b.G(this.a,r,s-1):""},
geR(){var s=this.c
return s>0?B.b.G(this.a,s,this.d):""},
gf0(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.AP(B.b.G(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
gjH(){return B.b.G(this.a,this.e,this.f)},
gf4(){var s=this.f,r=this.r
return s<r?B.b.G(this.a,s+1,r):""},
gjq(){var s=this.r,r=this.a
return s<r.length?B.b.b3(r,s+1):""},
gaO(){if(this.f>=this.r)return B.d8
return new A.eb(A.z5(this.gf4()),t.hL)},
gI(a){var s=this.x
return s==null?this.x=B.b.gI(this.a):s},
a3(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$ilf:1}
A.lD.prototype={}
A.qc.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.wk.prototype={
$1(a){return this.a.e6(this.b.i("0/?").a(a))},
$S:18}
A.wl.prototype={
$1(a){if(a==null)return this.a.i_(new A.qc(a===undefined))
return this.a.i_(a)},
$S:18}
A.vH.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.Aa(a))return a
s=this.a
a.toString
if(s.V(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.j(A.aW(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.eq(!0,"isUtc",t.y)
return new A.eA(r,0,!0)}if(a instanceof RegExp)throw A.d(A.z("structured clone of RegExp",null))
if(a instanceof Promise)return A.b3(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.o(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cc(n),p=s.gu(n);p.m();)m.push(A.dg(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.f(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.b(a.length)
for(s=J.aE(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:82}
A.lN.prototype={
aQ(a){if(a<=0||a>4294967296)throw A.d(A.yO(u.w+a))
return Math.random()*a>>>0},
aN(){return Math.random()},
$iwS:1}
A.eg.prototype={
c3(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.R(a-s,k)
r=a>>>0
a=B.d.R(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.R(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.R(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.R(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.R(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.R(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bf()
l.bf()
l.bf()
l.bf()},
bf(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.R(o-n+(q-p)+(m-r),4294967296)>>>0},
aQ(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.yO(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bf()
return(p.a&s)>>>0}do{p.bf()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aN(){var s,r=this
r.bf()
s=r.a
r.bf()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwS:1}
A.qE.prototype={
C(){var s,r=this
if(B.a.N(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.qF()))throw A.d(B.hb)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.fv)}}
A.qF.prototype={
$1(a){return A.b(a)<=0},
$S:42}
A.eQ.prototype={
v(){return"QualityProfileKind."+this.b}}
A.eP.prototype={
C(){var s="installedFeatures",r=this.b,q=r.by(B.lt)
if(q.a!==0)throw A.d(A.am(q,s,"contains unknown pipeline features"))
if(this.a===B.bv&&r.gY(r))throw A.d(A.am(r,s,"safe profiles cannot install optional features"))}}
A.fy.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kO.prototype={}
A.nJ.prototype={
cd(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.d(A.m("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.j(A.m("configuration state is not initialized"))
if(p.c!=null)A.j(A.m("a configuration transition is already open"))
a2.C()
n=A.i4(a2)
m=p.d
l=p.b
if(l==null)A.j(A.m("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.by(h)
f=h.by(j)
j=n.a
h=l.a
e=j.by(h)
d=h.by(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.nM(m,a2,n,new A.nK(A.eV(g,k),A.eV(f,k),A.eV(e,k),A.eV(d,k),c,b,o.z!==a2.z),B.cf)
p.c=a
s=a
try{r=a1.b.di(s.c)
q=new A.kO(s,r,B.b_)
a1.c=q
return q}catch(a0){p.hT(s)
throw a0}},
ce(a){var s,r,q,p=this
p.fX(a)
s=p.a
r=a.a
s.fY(r)
q=s.d
if(r.a!==q)A.j(A.m("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eF
s.c=null
p.b.ce(a.b)
a.c=B.eN
p.c=null},
fX(a){if(this.c!==a||a.c!==B.b_)throw A.d(A.m("coordinated transition is not open"))}}
A.fu.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.nK.prototype={}
A.nM.prototype={}
A.nL.prototype={
hT(a){this.fY(a)
a.e=B.eG
this.c=null},
fY(a){if(this.c!==a||a.e!==B.cf)throw A.d(A.m("configuration transition is not open"))}}
A.kN.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.O(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",0,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.K(q,A.r(q).i("K<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.d(A.z("PostProcessState."+o+" must be >= 0: "+A.x(n),l))}q=m.as
if(q<1||q>8)throw A.d(A.z("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.d(A.z("PostProcessState.rainIntensity must be in [0, 1]: "+A.x(s),l))
if(r>1)throw A.d(A.z("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.x(r),l))}}
A.fs.prototype={}
A.k3.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gaq(0)||!k.b.gaq(0)||!k.r.gaq(0))throw A.d(A.z("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.z("FrameEnvironment requires fogEnd >= fogStart, got "+A.x(s)+"/"+A.x(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.z("FrameEnvironment.ambientIntensity must be >= 0: "+A.x(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gaq(0)||r.gcz()<1e-12)A.j(A.z("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.j(A.z("DirectionalLight.intensity must be >= 0: "+A.x(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.z("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.j(A.z("PointLight.intensity must be >= 0: "+A.x(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.j(A.z("PointLight.radius must be > 0: "+A.x(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.z("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.j(A.z("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.j(A.z("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.op.prototype={}
A.dz.prototype={
a3(a,b){if(b==null)return!1
return J.fi(b)===A.mG(this)&&b instanceof A.dz&&this.a===b.a&&this.b===b.b},
gI(a){return A.cF(A.mG(this),this.a,this.b,B.f,B.f,B.f)}}
A.bB.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bt.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cE.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kI.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cz.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eG.prototype={
v(){return"HandleRejection."+this.b}}
A.kd.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.c1.prototype={
gaq(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a3(a,b){if(b==null)return!1
return b instanceof A.c1&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cF(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.x(this.a)+", "+A.x(this.b)+", "+A.x(this.c)+")"}}
A.o6.prototype={}
A.kM.prototype={}
A.bI.prototype={}
A.wm.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.F(b.a,a.a)
return s===0?B.d.F(a.b.a,b.b.a):s},
$S:100}
A.jx.prototype={
v(){return"AlphaMode."+this.b}}
A.eL.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.z("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.z("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.z("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.wO("roughness",l.z)
A.wO("metallic",0)
A.wO("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aX("uvScaleU",s),new A.aX("uvScaleV",r),new A.aX("uvOffsetU",0),new A.aX("uvOffsetV",0),new A.aX("tintR",l.c),new A.aX("tintG",l.d),new A.aX("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.z("MaterialDefinition."+n+" must be finite: "+A.x(m),k))}if(s===0||r===0)throw A.d(A.z("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.z("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d7.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bJ.prototype={}
A.ta.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.V[s]
q=r.c
if(q<=0)throw A.d(A.z(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.z(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.tb())
for(p=B.a.gu(B.V),q=new A.U(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.d(A.z('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.tb.prototype={
$1(a){return t.qY.a(a).a===B.dQ},
$S:19}
A.cl.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.M(s,14)!==0)throw A.d(A.z("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.mL()
r=n.c
if(r!=null){q=s/14|0
for(s=A.CO(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.z("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gaq(0)&&s.b.gaq(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.z("MeshData.localBounds must be a valid AABB",null))},
mL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.I(B.V,a2.a(new A.q1()),a3)
if(!a4.gu(0).m())return
s=new A.I(B.V,a2.a(new A.q2()),a3)
if(s.gt(0)!==1)throw A.d(A.z("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaR(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaR(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.aa(A.e([j,h,g,f,e,d,c],p),new A.q3()))throw A.d(A.z("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.z("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.z("surface-v2 tangent must be orthogonal to its normal: "+A.x(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.z("surface-v2 tangent handedness must be -1 or +1: "+A.x(c),a1))}}}
A.q1.prototype={
$1(a){return t.qY.a(a).a===B.dQ},
$S:19}
A.q2.prototype={
$1(a){return t.qY.a(a).a===B.dP},
$S:19}
A.q3.prototype={
$1(a){return isFinite(A.bM(a))},
$S:5}
A.qe.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.d(A.z("resource plan must contain sceneColor and present",null))
if(s.N(0,new A.qf()))throw A.d(A.z("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.d(A.z("resource history does not match vhsOutput ownership",null))}}
A.qf.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.fQ.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kP.prototype={}
A.kX.prototype={
ju(a){var s=this
if(s.d)A.j(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.m("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
di(a){var s=this
if(s.d)A.j(A.m("resource assembler is disposed"))
if(s.a==null)throw A.d(A.m("resource assembler is not initialized"))
if(s.b!=null)throw A.d(A.m("resource assembly is already open"))
a.C()
return s.b=new A.kP(s.c,a,B.bC)},
ce(a){var s,r=this
if(r.d)A.j(A.m("resource assembler is disposed"))
r.hv(a)
s=r.c
if(a.a!==s)throw A.d(A.m("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.l1
r.b=null},
fb(a){if(this.d)A.j(A.m("resource assembler is disposed"))
this.hv(a)
a.c=B.l2
this.b=null},
a0(){var s=this
if(s.d)return
if(s.b!=null)throw A.d(A.m("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
hv(a){if(this.b!==a||a.c!==B.bC)throw A.d(A.m("resource assembly is not prepared"))}}
A.fz.prototype={
v(){return"DrawMode."+this.b}}
A.jE.prototype={
v(){return"BlendMode."+this.b}}
A.bF.prototype={}
A.l7.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.d(A.z("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.z("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.z("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jK.prototype={
v(){return"ColorEncoding."+this.b}}
A.hA.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.kV.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.d(A.z("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.d(A.z("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.d(A.z("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.d(A.z("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eT.prototype={
v(){return"RendererState."+this.b}}
A.aK.prototype={}
A.or.prototype={
jG(a){var s=this.z.h(0,a)
return s==null?B.cr:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.kx.prototype={
pC(a){return this.a.cl(a)}}
A.q_.prototype={
$3(a,b,c){return new A.cE(A.b(a),A.b(b),A.aD(c))},
$S:151}
A.le.prototype={}
A.q4.prototype={
bu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.zb(f,new A.k6(e.byteLength,B.cF,B.hs))
if(f.b!==B.h)A.j(A.m(g))
s=A.c(d.a)
r=f.a
q=v.G
r.bindBuffer(A.b(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.b(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.da(f)
A.bK(f,p)
if(f.b!==B.h)A.j(A.m(g))
r.bindBuffer(A.b(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a0(t.S)
for(n=a.a,m=0;m<6;++m){l=B.V[m]
k=A.Aw(l.a)
if(!o.l(0,k))continue
j=A.EU(n,k,l)
if(f.b!==B.h)A.j(A.m(g))
r.vertexAttribPointer.apply(r,[k,j,A.b(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.j(A.m(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.zb(f,new A.k6(A.yJ(i),B.cF,B.cE))
if(f.b!==B.h)A.j(A.m(g))
r.bindBuffer(A.b(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.c(h.a))
A.DJ(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.le(d,h,p,f,e.length/14|0,!1)},
f9(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.e0(B.aD,a))
this.b.cl(a)
return s},
ba(a){var s,r,q=this.c.a5(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.c(q.c.a))
s.deleteBuffer(A.c(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.c(r.a))}this.b.ba(a)},
f7(){var s,r,q,p
for(s=this.b.bT(),r=s.$ti,s=new A.cL(s.a(),r.i("cL<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bu(p.b))}},
gcA(){return this.b.bT().bD(0,0,new A.q6(),t.S)}}
A.q5.prototype={
$3(a,b,c){return new A.bB(A.b(a),A.b(b),A.aD(c))},
$S:171}
A.q6.prototype={
$2(a,b){var s,r
A.b(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.yJ(s)
return a+r+s},
$S:170}
A.co.prototype={}
A.e9.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c4.prototype={}
A.t_.prototype={
cR(a){var s=this.a,r=A.F(s)
return new A.I(s,r.i("n(1)").a(new A.t0(a)),r.i("I<1>")).gt(0)}}
A.t0.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:88}
A.rY.prototype={
pj(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.o(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.j(A.z("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.j(A.am(n,"handle","must be valid"))
if(s.V(o))throw A.d(A.z("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("ax<2>")
m=A.J(new A.ax(s,r),r.i("p.E"))
B.a.U(m,new A.rZ())
r=t.Aj
l=A.a0(r)
k=A.o(r,t.bp)
j=A.e([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.t)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.mj(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c4(p,i))}r=l.a
return new A.t_(A.ag(j,t.d),r)},
mj(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.h()
if(s.hK(a,r)===s.d)return B.dJ
this.b.k(0,a,!0)
return B.dI}catch(q){if(A.aj(q) instanceof A.kd){s=this.b.h(0,a)===!0?B.dL:B.dK
return s}else throw q}}}
A.rZ.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:157}
A.dI.prototype={}
A.la.prototype={
aU(a){var s=this.a,r=A.x_(s,B.hx)
A.x0(s,r,0,a)
return r},
pV(a,b){var s,r,q,p=this,o=p.b,n=o.cl(a),m=A.J(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.jT(a,new A.dI(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.x_(p.a,s)
o.k(0,r,q)}A.x0(p.a,q,0,b)},
hK(a,b){var s
this.b.cl(a)
s=this.c.h(0,a.a)
return s==null?b:s},
py(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.hK(a,s)},
pG(a){var s=this.e
s===$&&A.h()
return s},
pI(a){var s=this.f
s===$&&A.h()
return s},
pA(a){var s=this.r
s===$&&A.h()
return s},
pE(a){var s=this.w
s===$&&A.h()
return s},
a0(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.an(s,s.r,s.e,A.r(s).i("an<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.H(0)
s=n.d
s===$&&A.h()
A.ls(q,s)
s=n.e
s===$&&A.h()
A.ls(q,s)
s=n.f
s===$&&A.h()
A.ls(q,s)
s=n.r
s===$&&A.h()
A.ls(q,s)
s=n.w
s===$&&A.h()
A.ls(q,s)},
f7(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aU($.xZ())
i.e=i.aU($.xW())
i.f=i.aU($.xX())
i.r=i.aU($.xV())
i.w=i.aU($.xY())
for(s=i.b.bT(),r=s.$ti,s=new A.cL(s.a(),r.i("cL<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.aa(o,new A.t3()))continue
l=A.x_(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.x0(p,l,k,j)}q.k(0,n.a,l)}},
gcA(){return this.b.bT().bD(0,0,new A.t2(),t.S)}}
A.t1.prototype={
$3(a,b,c){return new A.bt(A.b(a),A.b(b),A.aD(c))},
$S:155}
A.t3.prototype={
$1(a){return t.Fx.a(a)==null},
$S:152}
A.t2.prototype={
$2(a,b){var s
A.b(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:134}
A.eI.prototype={
gor(){return this.b.length}}
A.k1.prototype={
n9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qI(A.e([],t.pq),A.a0(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)r[p].an(s,b)
o=s.n8(a,!1)
if(o.b.length!==0)return new A.k2(o,B.iS)
q=o.a
n=A.F(q)
m=new A.P(q,n.i("i(1)").a(new A.ok()),n.i("P<1,i>")).bG(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){k=r[p]
for(n=k.am(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.d(A.m('RenderFeature "'+k.gab()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.U(l,new A.ol(o))
return new A.k2(o,l)},
bP(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)s[q].a0()}}
A.ok.prototype={
$1(a){return t.A.a(a).a},
$S:127}
A.ol.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.F(B.a.eS(s,new A.oi(a)),B.a.eS(s,new A.oj(b)))},
$S:122}
A.oi.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:8}
A.oj.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:8}
A.k2.prototype={}
A.eC.prototype={
v(){return"FrameQueueState."+this.b}}
A.oq.prototype={}
A.oo.prototype={
n4(a){if(a.length===0)throw A.d(A.am(a,"passId",null))
this.b=a
this.a.cD(a,A.AI())},
kB(){var s,r,q,p,o=t.z
o=A.o(o,o)
for(s=this.a,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aK(p.a,p.b,p.d))}return A.b7(o,t.N,t.pH)},
bK(a,b){var s,r=this.b
if(r==null)throw A.d(A.m("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.z("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.R(a,3)*b}}
A.fZ.prototype={}
A.ay.prototype={
gbX(){var s=this.c,r=A.F(s)
return new A.I(s,r.i("n(1)").a(new A.qi()),r.i("I<1>"))},
gcH(){var s=this.c,r=A.F(s)
return new A.I(s,r.i("n(1)").a(new A.qj()),r.i("I<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.qi.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:20}
A.qj.prototype={
$1(a){return t.j2.a(a).b===B.j},
$S:20}
A.ci.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bm.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ie.prototype={
v(){return"ResourceFormat."+this.b}}
A.cU.prototype={
v(){return"GraphStage."+this.b}}
A.aM.prototype={
jB(){var s=this
return new A.aM(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a3(a,b){var s=this
if(b==null)return!1
return b instanceof A.aM&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gI(a){var s=this
return A.cF(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fP.prototype={
v(){return"ResourceAccess."+this.b}}
A.Q.prototype={}
A.hw.prototype={}
A.kR.prototype={
aB(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.DL(m.a,a.c,r.a(a.d.ga2().c_(0)),r.a(a.f),a.b)}catch(q){if(A.aj(q) instanceof A.ij){++m.e
throw q}else throw q}p=new A.hw(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.c(n.b.a))
return p},
bP(){var s=this.b
this.lB(new A.ax(s,A.r(s).i("ax<2>")))
s.H(0)},
lB(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.an(s,s.r,s.e,a.$ti.i("an<1>")),r=this.a.a;s.m();)r.deleteProgram(A.c(s.d.b.a))}}
A.br.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.z("ProgramSource.id must not be empty",m))
s=t.S
r=A.a0(s)
for(q=this.d.gK(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.z('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.z('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a0(s)
for(s=this.e.gK(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.z('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.z('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.qG.prototype={}
A.b9.prototype={
al(){var s=this
return A.yl(B.eb,s.f,B.ar,B.aa,!0,!0,!0,!0,s.r,B.av,B.aw,s.d,s.e,!0,!1,!1)}}
A.qI.prototype={
n8(a,b){var s=this.mJ(t.Q.a(a),!1),r=this.a,q=A.F(r)
return new A.qH(A.ag(new A.I(r,q.i("n(1)").a(new A.qN()),q.i("I<1>")),t.A),s)},
mJ(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.ka)
r=m.a
q=A.F(r)
p=q.i("I<1>")
o=A.J(new A.I(r,q.i("n(1)").a(new A.qM()),p),p.i("p.E"))
m.li(o,a,s)
m.lm(o,s)
m.lo(o,s)
m.ll(o,!1,s)
n=m.lq(o,s)
m.ln(o,n,s)
m.lp(o,s)
m.lk(o,n,s)
m.lj(o,s)
return s},
li(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=B.Q.by(b)
if(p.a!==0)B.a.l(c,new A.bm(B.hI,q.a,"missing capabilities: "+p.a_(0,", ")))}},
lm(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbX(),o=J.S(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bm(B.hD,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
lo(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.F(a),r=s.i("n(1)").a(new A.qL()),q=B.a.gu(a),s=new A.U(q,r,s.i("U<1>"));s.m();){r=q.gn()
p=r.gbX()
o=A.J(p,p.$ti.i("p.E"))
p=r.gcH()
n=A.J(p,p.$ti.i("p.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bm(B.b3,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaR(o).a
l=B.a.gaR(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bm(B.b3,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bm(B.b3,r.a,"resolve source and destination must match format and extent"))}},
ll(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.t)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bm(B.hG,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
lq(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.o(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
for(o=p.gcH(),n=J.S(o.a),o=new A.U(n,o.b,o.$ti.i("U<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bm(B.hC,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
ln(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbX(),p=J.S(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bm(B.cK,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bS(a,m)>s)B.a.l(c,new A.bm(B.cK,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
lp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbX(),o=J.S(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gcH(),k=J.S(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bm(B.hF,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
lk(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbX(),o=J.S(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcH().ap(0,new A.qK(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bm(B.hE,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
lj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.o(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcH(),o=J.S(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.km(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a0(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbX(),p=J.S(s.a),s=new A.U(p,s.b,s.$ti.i("U<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cY(s,!1,!1,p)
s=a.length
i=A.cY(s,!1,!1,p)
h=new A.qJ(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.bm(B.hH,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qN.prototype={
$1(a){t.A.a(a)
return A.wQ()},
$S:8}
A.qM.prototype={
$1(a){t.A.a(a)
return A.wQ()},
$S:8}
A.qL.prototype={
$1(a){return t.A.a(a).f},
$S:8}
A.qK.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:20}
A.qJ.prototype={
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
r=A.iI(r,r.r,A.r(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:42}
A.qH.prototype={}
A.lM.prototype={$ic3:1,
gab(){return this.a},
gD(){return this.b},
gfj(){return this.c}}
A.ib.prototype={
hS(a){var s,r,q=a.c,p=q.a
if(!p.gaq(0))A.j(A.z("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.j(A.z("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.j(A.z(u.u,null))
s=this.a.cl(a.a)
q=q.ae()
p=s.d.gaD()
r=A.F(p)
return A.bl(new A.P(p,r.i("N(1)").a(q.gaF()),r.i("P<1,N>")))},
gjw(){return new A.cr(this.oA(),t.Br)},
oA(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gjw(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bT(),n=o.$ti,o=new A.cL(o.a(),n.i("cL<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.a4(f)
f=f.a
if(!(f>=0&&f<j.length)){A.f(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ae()
f=f.gaD()
d=A.F(f)
r=5
return a.b=new A.lM(h,g,A.bl(new A.P(f,d.i("N(1)").a(i.gaF()),d.i("P<1,N>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iDd:1}
A.qP.prototype={
$3(a,b,c){return new A.cz(A.b(a),A.b(b),A.aD(c))},
$S:112}
A.qZ.prototype={
jO(a,b){var s,r
if(this.x)A.j(A.m("resource library is disposed"))
s=this.a
a.C()
r=s.b.aI(a,b)
s.c.k(0,r.a,s.bu(a))
this.f.l(0,r)
return r},
pp(a){if(this.x)A.j(A.m("resource library is disposed"))
this.a.ba(a)
this.f.a5(0,a)},
po(a){var s
if(this.x)A.j(A.m("resource library is disposed"))
a.C()
s=this.b.a.aI(a,null)
this.r.l(0,s)
return s},
f6(a,b,c){var s,r
if(this.x)A.j(A.m("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.j(A.z("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.j(A.z("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aI(new A.dI(new A.k8(c,b,1,!1,B.aB,B.aB,B.cH,1),A.cY(1,null,!1,t.Fx),!1),a)
this.w.l(0,r)
return r},
a0(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.J(s,A.r(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.t)(r),++l){k=r[l]
j=o.a5(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.ba(k)}r=i.r
q=A.J(r,A.r(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.t)(q),++l)n.ba(q[l])
q=i.f
o=A.J(q,A.r(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.t)(o),++l)m.ba(o[l])
s.H(0)
r.H(0)
q.H(0)
p.a0()
i.x=!0}}
A.tE.prototype={}
A.mc.prototype={$ic3:1,
gab(){return this.a},
gD(){return this.b},
gfj(){return this.c}}
A.v5.prototype={
$1(a){var s=this.a.w.a.f9(a),r=s.b!=null,q=r?s.d:s.e
return new A.id(s.c,r,q,s.f)},
$S:106}
A.v6.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().jC(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().jC(b)
throw A.d(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:104}
A.v4.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uY.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gS(r)},
$S:89}
A.uZ.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bg
s=q.b.z
r=s.length===0?null:B.a.gS(s)
return A.H9(s,3,q.a.d,r)},
$S:86}
A.v3.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.uT.prototype={
$0(){return this.a.at.a},
$S:73}
A.uV.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uU.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.v2.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.uR.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uS.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.v_.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.v0.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.v1.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.uX.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uW.prototype={
$0(){return this.a.at.w},
$S:72}
A.v7.prototype={
$0(){return this.a},
$S:70}
A.ua.prototype={}
A.lY.prototype={$iDc:1}
A.lJ.prototype={$iCo:1}
A.r4.prototype={
gbn(){var s=this.w
return s==null?A.j(A.m("renderer is not initialized")):s},
jv(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bA)throw A.d(A.m("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.af)throw A.d(A.m("renderer device is context lost"))
m.e=B.l0
try{m.r=s.jL()
r=m.b
q=A.i4(a)
p=r.a
if(p.a!=null)A.j(A.m("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.i4(a)
p.d=1
r.b.ju(q)
r=A.CN()
m.w=new A.qZ(A.CP(s),r,A.Dq(s),A.a0(t.kc),A.a0(t.pw),A.a0(t.Aj))
r=new A.kX()
p=new A.oN(s,r)
q=A.i4(a)
o=p.dN(q,a)
r.ju(q)
p.c=new A.fM(new A.kP(0,q,B.bC),o,B.ag)
m.x=p
m.y=new A.kR(s,A.o(t.N,t.CH))
m.as=a
A.zV(m)
m.e=B.bB}catch(n){s=m.y
if(s!=null)s.bP()
s=m.x
if(s!=null)s.a0()
s=m.w
if(s!=null)s.a0()
m.w=null
m.e=B.bA
throw n}return A.wD(t.H)},
n2(a,b){var s,r,q,p,o,n,m=this,l=null
m.mo()
m.c6()
r=B.a.q(m.d,a)
if(!r)throw A.d(A.z("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.m("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gaq(0))A.j(A.z("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gaq(0)||q.gcz()<1e-12)A.j(A.z("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.j(A.z("CameraView requires 0 < near < far, got "+A.x(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.j(A.z("CameraView.aspect must be finite and > 0: "+A.x(q),l))
if(!r.a.gaq(0)||!r.b.gaq(0)||!r.c.gaq(0))A.j(A.z("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.j(A.z("FrameInput.timeSeconds must be finite: "+A.x(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.aA)A.j(A.m("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.aA
o.c=0
B.a.H(o.a)
s=o
try{r=m.r
if((r==null?A.j(A.m("renderer is not initialized")):r).z)m.b$=m.a.n3()
return s}catch(n){if(o.b!==B.aA)A.j(A.m("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hg
m.fE()
m.ax=m.at=null
throw n}},
o6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.c6()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.m("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.aA)A.j(A.m("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.iq(l,0,A.eq(m.c,"count",t.S),A.F(l).c).c0(0,!1)
m.b=B.hf
q=k
try{p=A.F5(a1,r,s,q)
o=p.a.kB()
m=o.gK().dn(0,new A.r5())
l=m.$ti
n=new A.cD(m,l.i("aK(1)").a(new A.r6()),l.i("cD<1,aK>")).bD(0,B.cr,new A.r7(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcA()
g=g.c.gcA()
e=a1.w
e.a.gcA()
e.c.gcA()
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
return new A.or(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.lM(s.e)
a1.ax=a1.at=null}},
mo(){var s,r,q,p=this
if(p.e!==B.dw)return
if(p.a.b===B.af)throw A.d(A.m("renderer context remains lost"))
s=p.w
if(s.x)A.j(A.m("resource library is disposed"))
s.a.f7()
s.c.f7()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.j(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.j(A.m("GPU resource adapter is not initialized"))
s.c=new A.fM(q.a,s.dN(A.i4(r),r),B.ag)
s=p.y
s.c=null
s.b.H(0)
A.zV(p)
p.e=B.bB},
c6(){var s=this,r=s.e
if(r!==B.bB)throw A.d(A.m("renderer is not ready: "+r.b))
if(s.a.b===B.af){s.lD()
s.e=B.dw
throw A.d(A.m("renderer context lost"))}}}
A.r5.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:48}
A.r6.prototype={
$1(a){return t.h6.a(a).b},
$S:49}
A.r7.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aK(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lW.prototype={}
A.tQ.prototype={
lM(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.j(A.m(u.k))
r=s.hM(o)
if(r.b)A.j(A.m("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lW(o))}catch(q){p.dP(o)}},
fE(){var s=this.b$
this.b$=null
if(s!=null)this.dP(s)},
lD(){var s,r,q
this.fE()
s=this.a$
r=J.yx(s.slice(0),A.F(s).c)
B.a.H(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.t)(r),++q)this.dP(r[q].b)},
dP(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hM(a).a)}catch(r){}}}
A.m1.prototype={}
A.ik.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bR.prototype={
F(a,b){var s,r=this
t.BB.a(b)
s=B.d.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.F(r.c.a,b.c.a)
if(s!==0)return s
return B.d.F(r.d,b.d)},
$ib6:1}
A.bP.prototype={
F(a,b){var s
t.z3.a(b)
s=B.c.F(b.a,this.a)
if(s!==0)return s
return B.d.F(this.b,b.b)},
$ib6:1}
A.aP.prototype={}
A.wr.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.F(0,s.a(b).a)},
$S:51}
A.ws.prototype={
$1(a){return t.E0.a(a).b},
$S:52}
A.wp.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.F(0,s.a(b).a)},
$S:53}
A.wq.prototype={
$1(a){return t.EH.a(a).b},
$S:54}
A.o1.prototype={}
A.o0.prototype={}
A.jt.prototype={
gaD(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.N(o,n,p),new A.N(r,n,p),new A.N(o,q,p),new A.N(r,q,p),new A.N(o,n,s),new A.N(r,n,s),new A.N(o,q,s),new A.N(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eN.prototype={}
A.fD.prototype={
v(){return"FrustumTest."+this.b}}
A.os.prototype={
pQ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.cs
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hh:B.hi}}
A.ot.prototype={
$4(a,b,c,d){var s=new A.N(a,b,c),r=new A.eN(s,d),q=Math.sqrt(s.gcz())
if(q<1e-9)s=r
else{s=1/q
s=new A.eN(new A.N(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dw.prototype={
a8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.dw(h)},
jQ(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.N(k,j,i):new A.N(k/h,j/h,i/h)},
eY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.j(A.m("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.x(k)+")"))
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
return new A.dw(h)},
gaq(a){return B.r.aa(this.a,new A.pY())},
p(a){return"Mat4("+A.x(this.a)+")"}}
A.pY.prototype={
$1(a){return isFinite(A.bM(a))},
$S:5}
A.kT.prototype={
p(a){var s=this
return"Quat("+A.x(s.a)+", "+A.x(s.b)+", "+A.x(s.c)+", "+A.x(s.d)+")"}}
A.lb.prototype={
C(){var s=this.a
if(!s.gaq(0))throw A.d(A.z("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.z("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.z(u.u,null))},
ae(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.yH(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.yH(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.N.prototype={
cm(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bv(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.N(s*r-q*p,q*o-n*r,n*p-s*o)},
gcz(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gcz())},
gaq(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gad(){var s=this,r=Math.sqrt(s.gcz())
return r<1e-9?B.am:new A.N(s.a/r,s.b/r,s.c/r)},
a3(a,b){if(b==null)return!1
return b instanceof A.N&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cF(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.x(this.a)+", "+A.x(this.b)+", "+A.x(this.c)+")"}}
A.iA.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hu.prototype={
gab(){return this.f},
an(a,b){B.a.l(a.a,new A.ay(this.f,B.L,A.e([new A.Q(this.x,B.i),new A.Q(this.y,B.j)],t.C),!1))},
am(a){var s=this,r=s.a.aB(new A.br(s.e,s.b,s.c,B.w,B.d5,B.d1)),q=A.da(s.d),p=t.n,o=s.r===B.dV?new Float32Array(A.a2(A.e([1/s.Q,0],p))):new Float32Array(A.a2(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.lA(new A.b9(s.f,A.e([new A.Q(s.x,B.i),new A.Q(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a0(){},
$iao:1}
A.lA.prototype={
ao(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c8(r,a.au(o.r).b)
A.bv(r,o.a.al())
A.dH(r,B.ad,1,0,0,0)
A.cp(r,o.b.b)
q=t._
p=o.d
if(o.e)A.DH(r,0,q.a(p.$0()))
else A.aH(r,0,q.a(p.$0()))
A.y(r,"uSource",B.x)
A.y(r,"uTexelStep",new A.A(B.aM,o.f))
A.bK(r,o.c)
s.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.jF.prototype={
gab(){return"bloomComposite"},
an(a,b){B.a.l(a.a,new A.ay("bloomComposite",B.L,A.e([new A.Q(this.f,B.i),new A.Q(this.r,B.i),new A.Q(this.w,B.j)],t.C),!1))},
am(a){var s=this,r="bloomComposite",q=s.a.aB(new A.br(r,s.b,s.c,B.w,B.jt,B.jb)),p=A.da(s.d),o=s.w,n=A.e([new A.Q(s.f,B.i),new A.Q(s.r,B.i),new A.Q(o,B.j)],t.C)
return A.e([new A.lB(new A.b9(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a0(){},
$iao:1}
A.lB.prototype={
ao(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c8(r,a.dm(q.f).b)
A.DI(r,1)
A.bv(r,B.eX)
A.cp(r,q.b.b)
A.aH(r,0,t._.a(q.d.$0()))
A.y(r,"uBloom",B.x)
A.y(r,"uBloomStrength",new A.A(B.e,p))
A.bK(r,q.c)
s.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.jS.prototype={
gab(){return"depthPrepass"},
an(a,b){B.a.l(a.a,new A.ay("depthPrepass",B.hz,A.e([new A.Q(this.w,B.j)],t.C),!1))},
am(a){var s=this,r="depthPrepass",q=s.a.aB(new A.br(r,s.b,s.c,B.d4,B.d2,B.iD))
return A.e([new A.lE(new A.b9(r,A.e([new A.Q(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a0(){},
$iao:1}
A.lE.prototype={
ao(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c8(a1,a2.au("sceneDepth").b)
A.bv(a1,d.a.al())
A.dH(a1,B.aY,1,0,0,0)
A.cp(a1,d.b.b)
A.y(a1,"uVertexSnapGrid",new A.A(B.e,a0.Q))
A.y(a1,"uAlbedo",B.x)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.y(a1,"uViewProjection",new A.A(B.u,new Float32Array(A.a2(a))))
A.y(a1,"uModel",new A.A(B.u,new Float32Array(A.a2(i.c.ae().a))))
A.wn(b,k,!1)
d.lC(b,j.gD().b,p)
h=q.$1(j.gD().a)
i=h.a
if(a1.b!==B.h)A.j(A.m(c))
m.bindVertexArray(A.c(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.j(A.m(c))
e=A.b(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.b(o.WebGL2RenderingContext.UNSIGNED_INT):A.b(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bK(g,f)}else{if(a1.b!==B.h)A.j(A.m(c))
m.drawArraysInstanced(A.b(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bK(g,f)}}},
lC(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aH(q,0,t._.a(this.e.$1(r.b)))
A.y(q,"uAlphaCutoff",new A.A(B.e,0))
A.y(q,"uAffineWarpStrength",new A.A(B.e,0))
s=this.a.al()
A.bv(q,r.dx?s.fi(!1):s)},
$iac:1,
gD(){return this.a}}
A.iC.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hB.prototype={
gab(){return this.f},
an(a,b){B.a.l(a.a,new A.ay(this.f,B.L,A.e([new A.Q(this.w,B.i),new A.Q(this.x,B.j)],t.C),!1))},
am(a){var s=this,r=s.a.aB(new A.br(s.e,s.b,s.c,B.w,B.d5,B.d1)),q=A.da(s.d),p=t.n,o=s.r===B.dW?new Float32Array(A.a2(A.e([1/s.z,0],p))):new Float32Array(A.a2(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.lF(new A.b9(s.f,A.e([new A.Q(s.w,B.i),new A.Q(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a0(){},
$iao:1}
A.lF.prototype={
ao(a){return},
$iac:1,
gD(){return this.a}}
A.jV.prototype={
gab(){return"dofComposite"},
an(a,b){var s=this
B.a.l(a.a,new A.ay("dofComposite",B.L,A.e([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.j)],t.C),!1))},
am(a){var s=this,r="dofComposite",q=s.a.aB(new A.br(r,s.b,s.c,B.w,B.jr,B.is)),p=A.da(s.d)
return A.e([new A.lG(new A.b9(r,A.e([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a0(){},
$iao:1}
A.lG.prototype={
ao(a){var s,r=this,q=a.au("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c8(n,q.b)
A.bv(n,r.a.al())
A.cp(n,r.b.b)
s=t._
A.aH(n,0,s.a(r.d.$0()))
A.y(n,"uSharp",B.x)
A.aH(n,1,s.a(r.e.$0()))
A.y(n,"uBlurred",B.al)
A.aH(n,2,s.a(r.f.$0()))
A.y(n,"uSceneDepth",B.dO)
A.y(n,"uNear",new A.A(B.e,o.f))
A.y(n,"uFar",new A.A(B.e,o.r))
A.y(n,"uFocusDistance",new A.A(B.e,r.w))
A.y(n,"uFocusRange",new A.A(B.e,r.x))
A.y(n,"uStrength",new A.A(B.e,0))
A.bK(n,r.c)
p.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.kb.prototype={
gab(){return"grade"},
an(a,b){B.a.l(a.a,new A.ay("grade",B.L,A.e([new A.Q(this.r,B.i),new A.Q(this.w,B.j)],t.C),!1))},
am(a){var s=this,r=s.a.aB(new A.br("grade",s.b,s.c,B.w,B.jp,B.jc)),q=A.da(s.d),p=s.r,o=s.w
return A.e([new A.lL(new A.b9("grade",A.e([new A.Q(p,B.i),new A.Q(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a0(){},
$iao:1}
A.lL.prototype={
ao(a){var s=this,r=a.au(s.f.a),q=a.b,p=q.a
A.c8(p,a.au(s.r.a).b)
A.bv(p,s.a.al())
A.cp(p,s.b.b)
A.aH(p,0,r.b)
A.y(p,"uScene",B.x)
A.aH(p,1,t._.a(s.d.$0()))
A.y(p,"uLut",B.al)
A.y(p,"uLutSize",new A.A(B.e,s.e))
A.y(p,"uStrength",new A.A(B.e,a.c.e.y))
A.bK(p,s.c)
q.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.hY.prototype={
gab(){return"msaaResolve"},
an(a,b){B.a.l(a.a,new A.ay("msaaResolve",B.hA,A.e([new A.Q(this.b,B.i),new A.Q(this.c,B.j)],t.C),!0))},
am(a){var s=this.b,r=this.c
return A.e([new A.lS(new A.b9("msaaResolve",A.e([new A.Q(s,B.i),new A.Q(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a0(){},
$iao:1}
A.lS.prototype={
ao(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.dm(this.c),j=a.dm(this.d),i=this.b
if(i.b!==B.h)A.j(A.m(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.j(A.z("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.j(A.z("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.j(A.z("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
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
A.fq.prototype={}
A.jG.prototype={
au(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
dm(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.au(s)},
$iDb:1}
A.wR.prototype={}
A.i7.prototype={
gab(){return"present"},
an(a,b){B.a.l(a.a,new A.ay("present",B.hB,A.e([new A.Q(this.f,B.i)],t.C),!1))},
am(a){var s,r=this,q=r.a.aB(new A.br("present",r.b,r.c,B.w,B.jA,B.iK)),p=A.da(r.d)
r.w=p
s=r.f
return A.e([new A.lZ(new A.b9("present",A.e([new A.Q(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a0(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.c(s.a))
this.w=null}},
$iao:1}
A.lZ.prototype={
ao(a){var s,r=this,q=a.dm(r.d),p=a.b,o=p.a
A.c8(o,null)
A.bv(o,r.a.al())
A.cp(o,r.b.b)
A.bK(o,r.c)
A.aH(o,0,q.b)
s=a.c.e
A.y(o,"uExposure",new A.A(B.e,s.a))
A.y(o,"uVignette",new A.A(B.e,s.e))
A.y(o,"uGrain",new A.A(B.e,s.f))
A.y(o,"uRainIntensity",new A.A(B.e,s.r))
A.y(o,"uRainWindowVisibility",new A.A(B.e,s.w))
A.y(o,"uOutputEncoding",new A.A(B.e,r.e===B.aZ?1:0))
A.y(o,"uToneMap",B.dN)
p.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.kS.prototype={
gab(){return"ps1Quantize"},
an(a,b){B.a.l(a.a,new A.ay("ps1Quantize",B.L,A.e([new A.Q(this.e,B.i),new A.Q(this.f,B.j)],t.C),!1))},
am(a){var s=this,r="ps1Quantize",q=s.a.aB(new A.br(r,s.b,s.c,B.w,B.jv,B.ik)),p=A.da(s.d),o=s.e,n=s.f
return A.e([new A.m_(new A.b9(r,A.e([new A.Q(o,B.i),new A.Q(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a0(){},
$iao:1}
A.m_.prototype={
ao(a){var s=this,r=a.au(s.d.a),q=a.b,p=q.a
A.c8(p,a.au(s.e.a).b)
A.bv(p,s.a.al())
A.cp(p,s.b.b)
A.aH(p,0,r.b)
A.y(p,"uScene",B.x)
A.y(p,"uQuantizationBits",new A.A(B.e,a.c.e.as))
A.y(p,"uDitherStrength",new A.A(B.e,0))
A.bK(p,s.c)
q.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.eX.prototype={}
A.l0.prototype={
gab(){return"shadow"},
an(a,b){B.a.l(a.a,new A.ay("shadowCaster",B.hy,A.e([new A.Q(this.z,B.j)],t.C),!1))},
am(a){var s=this,r="shadowCaster",q=s.a.aB(new A.br(r,s.b,s.c,B.d4,B.d2,B.ja))
return A.e([new A.m2(new A.b9(r,A.e([new A.Q(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a0(){},
$iao:1}
A.m2.prototype={
ao(a){var s,r,q,p,o=this,n=a.au("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c8(s,n.b)
A.bv(s,o.a.al())
A.dH(s,B.aY,1,0,0,0)
return}r=A.yX(l)
o.x.$1(r)
s=m.a
A.c8(s,n.b)
A.bv(s,o.a.al())
A.dH(s,B.aY,1,0,0,0)
A.cp(s,o.b.b)
A.y(s,"uAlbedo",B.x)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.t)(s),++p)o.lE(m,s[p],l,r)},
hC(a,b){var s,r=this.d.$1(b),q=a.a
A.aH(q,0,t._.a(this.e.$1(r.b)))
A.y(q,"uAlphaCutoff",new A.A(B.e,0))
s=this.a.al()
A.bv(q,r.dx?s.fi(!1):s)},
lE(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gD().r)return
s=a.a
A.y(s,"uUseInstances",B.bQ)
n.hx(a,b.gD().c,d)
n.hC(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bK(s,q.a)
s=q.b
r=q.c
if(s)a.ee(r,q.d,0)
else a.aK(r,0)}else if(b instanceof A.eI){p=b.a
if(!p.gD().r)return
if(n.mG(b,c)===B.lO)return
n.hx(a,p.gD().c,d)
A.wn(a,b,!1)
n.hC(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bK(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.ef(r,q.d,o,0)
else a.ed(r,0,o)}else throw A.d(A.z("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fi(b).p(0),null))},
mG(a,b){return B.lN},
hx(a,b,c){var s=a.a
A.y(s,"uModel",new A.A(B.u,new Float32Array(A.a2(b.ae().a))))
A.y(s,"uLightViewProjection",new A.A(B.u,new Float32Array(A.a2(c.a.a))))},
$iac:1,
gD(){return this.a}}
A.vE.prototype={
$1(a){return this.a.a=a},
$S:57}
A.vF.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.l1.prototype={
gab(){return"shadowedWorld"},
an(a,b){var s=this,r=A.e([new A.Q(s.db,B.i)],t.C)
if(s.ay)r.push(new A.Q(s.dx,B.i))
r.push(new A.Q(s.dy,B.j))
B.a.l(a.a,new A.ay("shadowedWorld",B.cJ,r,!1))},
am(a){var s=this,r="shadowedWorld",q=s.a.aB(new A.br(r,s.b,s.c,B.jx,B.jq,B.ih)),p=A.e([new A.Q(s.db,B.i)],t.C)
if(s.ay)p.push(new A.Q(s.dx,B.i))
p.push(new A.Q(s.dy,B.j))
return A.e([new A.m3(new A.b9(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a0(){},
$iao:1}
A.m3.prototype={
ao(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.au("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c8(b1,a4.b)
A.bv(b1,a2.a.al())
s=a8.a
A.dH(b1,B.ce,1,s.c,s.b,s.a)
A.cp(b1,a2.b.b)
A.y(b1,"uAlbedo",B.x)
A.y(b1,"uNormalMap",B.m9)
A.y(b1,"uOrmMap",B.ma)
A.y(b1,"uEmissiveMap",B.mb)
A.y(b1,"uLightmap",B.mc)
s=t._
A.aH(b1,1,s.a(a2.y.$0()))
A.y(b1,"uShadowMap",B.al)
r=t.n
A.y(b1,"uShadowMapTexelSize",new A.A(B.aM,new Float32Array(A.a2(A.e([1/a2.ch,1/a2.CW],r)))))
A.aH(b1,2,s.a(a2.at.$0()))
A.y(b1,"uSsao",B.dO)
A.y(b1,"uVertexSnapGrid",new A.A(B.e,a9.Q))
A.y(b1,"uSceneColorSize",new A.A(B.aM,new Float32Array(A.a2(A.e([a2.ax,a2.ay],r)))))
A.y(b1,"uViewProjection",new A.A(B.u,new Float32Array(A.a2(a7.c.a))))
A.y(b1,"uView",new A.A(B.u,new Float32Array(A.a2(a7.a.a))))
A.y(b1,"uLightViewProjection",new A.A(B.u,new Float32Array(A.a2(b0.a.a))))
s=a8.b
A.y(b1,"uFogColor",new A.A(B.q,new Float32Array(A.a2(A.e([s.a,s.b,s.c],r)))))
A.y(b1,"uFogStart",new A.A(B.e,a8.c))
A.y(b1,"uFogEnd",new A.A(B.e,a8.d))
s=a8.e
A.y(b1,"uFogHeightFalloff",new A.A(B.e,s==null?0:s))
s=a8.f
A.y(b1,"uFogDensity",new A.A(B.e,s==null?0:s))
q=a2.Q.$0()
s=A.e([],t.cv)
p=a2.as.$0()
p=J.S(p==null?B.bg:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a6
k=o?a3:q.c
if(k==null)k=B.aN
A.y(b1,"uLightPosition",new A.A(B.q,new Float32Array(A.a2(A.e([l.a,l.b,l.c],r)))))
A.y(b1,"uLightDirection",new A.A(B.q,new Float32Array(A.a2(A.e([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.U
A.y(b1,"uLightColor",new A.A(B.q,new Float32Array(A.a2(A.e([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.y(b1,"uLightIntensity",new A.A(B.e,p==null?0:p))
A.y(b1,"uSpotEnabled",new A.A(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a6
g=p?a3:i.b
if(g==null)g=B.U
A.y(b1,"uDirectionalDirection",new A.A(B.q,new Float32Array(A.a2(A.e([h.a,h.b,h.c],r)))))
A.y(b1,"uDirectionalColor",new A.A(B.q,new Float32Array(A.a2(A.e([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.y(b1,"uDirectionalIntensity",new A.A(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.f(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.am
c=n?a3:e.c
if(c==null)c=B.U
m=""+f
A.y(b1,"uPointPosition"+m,new A.A(B.q,new Float32Array(A.a2(A.e([d.a,d.b,d.c],r)))))
A.y(b1,"uPointColor"+m,new A.A(B.q,new Float32Array(A.a2(A.e([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.y(b1,"uPointIntensity"+m,new A.A(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.y(b1,"uPointRadius"+m,new A.A(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.f(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.am
a=p?a3:e.c
if(a==null)a=B.aN
c=p?a3:e.d
if(c==null)c=B.U
n=""+f
A.y(b1,"uDirectSpotPosition"+n,new A.A(B.q,new Float32Array(A.a2(A.e([d.a,d.b,d.c],r)))))
A.y(b1,"uDirectSpotDirection"+n,new A.A(B.q,new Float32Array(A.a2(A.e([a.a,a.b,a.c],r)))))
A.y(b1,"uDirectSpotColor"+n,new A.A(B.q,new Float32Array(A.a2(A.e([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.y(b1,"uDirectSpotIntensity"+n,new A.A(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.y(b1,"uDirectSpotRange"+n,new A.A(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.y(b1,"uDirectSpotInnerCos"+n,new A.A(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.y(b1,"uDirectSpotOuterCos"+n,new A.A(B.e,Math.cos(m)))
p=p?0:1
A.y(b1,"uDirectSpotEnabled"+n,new A.A(B.e,p))}s=o?a3:q.f
A.y(b1,"uLightRange",new A.A(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.y(b1,"uLightInnerCos",new A.A(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.y(b1,"uLightOuterCos",new A.A(B.e,Math.cos(s)))
a0=a8.r
A.y(b1,"uAmbientColor",new A.A(B.q,new Float32Array(A.a2(A.e([a0.a,a0.b,a0.c],r)))))
A.y(b1,"uAmbientIntensity",new A.A(B.e,a8.w))
A.y(b1,"uRainWetness",new A.A(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.t)(b1),++a1)a2.hD(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.t)(a6),++a1)a2.hD(a5,a6[a1],r)},
hD(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.y(s,"uUseInstances",B.bQ)
m.hE(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.hy(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bK(s,o.a)
s=o.b
r=o.c
if(s)a.ee(r,o.d,0)
else a.aK(r,0)}else if(b instanceof A.eI){n=b.a
m.hE(a,n.gD().c)
A.wn(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.hy(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bK(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.ef(r,o.d,q,0)
else a.ed(r,0,q)}else throw A.d(A.z("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fi(b).p(0),null))},
hy(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aH(o,0,p.a(s.e.$1(q.b)))
A.aH(o,3,p.a(s.f.$1(r)))
A.aH(o,4,p.a(s.r.$1(r)))
A.aH(o,5,p.a(s.w.$1(r)))
A.aH(o,6,p.a(s.x.$1(r)))
A.y(o,"uAlphaCutoff",new A.A(B.e,0))
A.y(o,"uOpaqueCoverage",new A.A(B.e,c===B.b0?0:1))
A.y(o,"uAffineWarpStrength",new A.A(B.e,0))
p=t.n
A.y(o,"uMaterialTint",new A.A(B.q,new Float32Array(A.a2(A.e([q.c,q.d,q.e],p)))))
A.y(o,"uEmissiveStrength",new A.A(B.e,0))
A.y(o,"uUvScaleOffset",new A.A(B.m8,new Float32Array(A.a2(A.e([q.ay,q.ch,0,0],p)))))
A.y(o,"uNormalStrength",new A.A(B.e,1))
A.y(o,"uRoughness",new A.A(B.e,q.z))
A.y(o,"uMetallic",new A.A(B.e,0))
A.y(o,"uOcclusionStrength",new A.A(B.e,1))
A.y(o,"uLightmapIntensity",new A.A(B.e,0))
A.y(o,"uReceivesShadow",new A.A(B.e,1))
A:{p=r
if(B.b0===c){switch(d.a){case 0:p=B.eZ
break
case 1:p=B.eY
break}break A}if(B.T===c||B.eW===c){p=s.a.al()
break A}}A.bv(o,q.dx?p.fi(!1):p)},
hE(a,b){var s=b.ae(),r=a.a
A.y(r,"uModel",new A.A(B.u,new Float32Array(A.a2(s.a))))
A.y(r,"uNormalMatrix",new A.A(B.u,new Float32Array(A.a2(s.eY().a))))},
$iac:1,
gD(){return this.a}}
A.l4.prototype={
gab(){return"ssaoOcclusion"},
an(a,b){B.a.l(a.a,new A.ay("ssaoOcclusion",B.cI,A.e([new A.Q(this.w,B.j)],t.C),!1))},
am(a){var s=this,r="ssaoOcclusion",q=s.a.aB(new A.br(r,s.b,s.c,B.w,B.ju,B.ig)),p=A.da(s.d)
return A.e([new A.m6(new A.b9(r,A.e([new A.Q(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a0(){},
$iao:1}
A.m6.prototype={
ao(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c8(m,a.au("ssaoRaw").b)
A.bv(m,p.a.al())
if(n<=0){A.dH(m,B.ad,1,1,1,1)
return}A.dH(m,B.ad,1,0,0,0)
s=p.e.$0()
A.cp(m,p.b.b)
A.aH(m,0,t._.a(p.d.$0()))
A.y(m,"uSceneDepth",B.x)
A.y(m,"uNear",new A.A(B.e,s.f))
A.y(m,"uFar",new A.A(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.f(r,0)
A.y(m,"uProjScaleX",new A.A(B.e,r[0]))
if(5>=q)return A.f(r,5)
A.y(m,"uProjScaleY",new A.A(B.e,r[5]))
A.y(m,"uRadius",new A.A(B.e,p.f))
A.y(m,"uStrength",new A.A(B.e,n))
A.bK(m,p.c)
o.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.l3.prototype={
gab(){return"ssaoBlur"},
an(a,b){B.a.l(a.a,new A.ay("ssaoBlur",B.cI,A.e([new A.Q(this.y,B.i),new A.Q(this.z,B.j)],t.C),!1))},
am(a){var s=this,r="ssaoBlur",q=s.a.aB(new A.br(r,s.b,s.c,B.w,B.jk,B.je)),p=A.da(s.d)
return A.e([new A.m5(new A.b9(r,A.e([new A.Q(s.y,B.i),new A.Q(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a0(){},
$iao:1}
A.m5.prototype={
ao(a){var s,r,q=this,p=a.b,o=p.a
A.c8(o,a.au("ssaoBlurred").b)
A.bv(o,q.a.al())
if(a.c.e.c<=0){A.dH(o,B.ad,1,1,1,1)
return}A.dH(o,B.ad,1,0,0,0)
s=q.f.$0()
A.cp(o,q.b.b)
r=t._
A.aH(o,0,r.a(q.d.$0()))
A.y(o,"uSsaoRaw",B.x)
A.aH(o,1,r.a(q.e.$0()))
A.y(o,"uSceneDepth",B.al)
A.y(o,"uTexelSize",new A.A(B.aM,new Float32Array(A.a2(A.e([1/q.r,1/q.w],t.n)))))
A.y(o,"uNear",new A.A(B.e,s.f))
A.y(o,"uFar",new A.A(B.e,s.r))
A.bK(o,q.c)
p.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.li.prototype={
gab(){return"vhs"},
an(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.ay("vhs",B.L,A.e([new A.Q(this.r,B.i),new A.Q(s,B.J),new A.Q(s,B.j)],t.C),!1))},
am(a){var s=this,r=s.a.aB(new A.br("vhs",s.b,s.c,B.w,B.jn,B.im)),q=A.da(s.d),p=s.r,o=s.w
return A.e([new A.mf(new A.b9("vhs",A.e([new A.Q(p,B.i),new A.Q(o,B.J),new A.Q(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a0(){},
$iao:1}
A.mf.prototype={
ao(a){var s,r=this,q=a.au(r.f.a),p=a.au(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c8(m,p.b)
A.bv(m,r.a.al())
A.cp(m,r.b.b)
A.aH(m,0,q.b)
A.y(m,"uScene",B.x)
A.aH(m,1,t._.a(r.d.$0()))
A.y(m,"uHistory",B.al)
A.y(m,"uTime",new A.A(B.e,r.e.$0()))
A.y(m,"uChromaWeight",new A.A(B.e,n.at))
A.y(m,"uTrackingWeight",new A.A(B.e,l))
A.y(m,"uNoiseWeight",new A.A(B.e,n.ay))
A.y(m,"uHeadSwitchWeight",new A.A(B.e,n.ch))
A.y(m,"uDropoutWeight",new A.A(B.e,n.CW))
A.y(m,"uGhostWeight",new A.A(B.e,s))
A.bK(m,r.c)
o.aK(3,0)},
$iac:1,
gD(){return this.a}}
A.id.prototype={}
A.lt.prototype={
gab(){return"world"},
an(a,b){B.a.l(a.a,new A.ay("worldOpaqueTransparent",B.cJ,A.e([new A.Q(this.e,B.j)],t.C),!1))},
am(a){var s=this,r=s.a.aB(new A.br("safeWorld",s.b,s.c,B.jz,B.w,B.ie)),q=s.e
return A.e([new A.mi(new A.b9("worldOpaqueTransparent",A.e([new A.Q(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a0(){},
$iao:1}
A.mi.prototype={
ao(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c8(j,a.au(n.d).b)
A.bv(j,n.a.al())
s=k.a
A.dH(j,B.ce,1,s.c,s.b,s.a)
A.cp(j,n.b.b)
A.y(j,"uViewProjection",new A.A(B.u,new Float32Array(A.a2(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a6
s=t.n
A.y(j,"uLightDir",new A.A(B.q,new Float32Array(A.a2(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.y(j,"uAmbientColor",new A.A(B.q,new Float32Array(A.a2(A.e([p.a,p.b,p.c],s)))))
A.y(j,"uAmbientIntensity",new A.A(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.t)(j),++o)n.h2(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.t)(l),++o)n.h2(m,l[o])},
h2(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eI){s=b.a
n.hA(a,s.gD().c)
A.wn(a,b,!0)
r=n.c.$1(s.gD().a)
A.bK(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.ef(p,r.d,o,0)
else a.ed(p,0,o)}else if(t.yz.b(b)){q=a.a
A.y(q,"uUseInstances",B.bQ)
n.hA(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bK(q,r.a)
q=r.b
p=r.c
if(q)a.ee(p,r.d,0)
else a.aK(p,0)}else throw A.d(A.z("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fi(b).p(0),null))},
hA(a,b){var s=b.ae(),r=a.a
A.y(r,"uModel",new A.A(B.u,new Float32Array(A.a2(s.a))))
A.y(r,"uNormalMatrix",new A.A(B.u,new Float32Array(A.a2(s.eY().a))))},
$iac:1,
gD(){return this.a}}
A.nH.prototype={
cI(a){var s,r,q
a.C()
s=A.a0(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.a0
else q=r===0?B.bv:B.P
return new A.eP(q,s)},
kb(a){var s,r=this.cI(a).a
A:{if(B.a0===r){s=B.kA
break A}if(B.P===r){s=B.kz
break A}s=B.aF
break A}return s}}
A.k7.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hI.prototype={
v(){return"GpuBufferKind."+this.b}}
A.k9.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.ka.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.k6.prototype={}
A.k8.prototype={}
A.eF.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hK.prototype={}
A.hJ.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eW.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.ij.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d4.prototype={
v(){return"UniformType."+this.b}}
A.A.prototype={}
A.ft.prototype={
v(){return"ClearMask."+this.b}}
A.jT.prototype={
aK(a,b){var s=this.a
if(s.b!==B.h)A.j(A.m(u.k))
s.a.drawArrays(A.b(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bK(a,1)},
ed(a,b,c){var s=this.a
if(s.b!==B.h)A.j(A.m(u.k))
s.a.drawArraysInstanced(A.b(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bK(a,c)},
ee(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.j(A.m(u.k))
s=v.G
r=A.b(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.b(s.WebGL2RenderingContext.UNSIGNED_INT):A.b(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bK(a,1)},
ef(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.j(A.m(u.k))
s=v.G
r=A.b(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.b(s.WebGL2RenderingContext.UNSIGNED_INT):A.b(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.af(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bK(a,c)},
$iC7:1}
A.fF.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fM.prototype={
jC(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.m("resource is not in candidate: "+a))
return s}}
A.oN.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.m("GPU resource adapter is not initialized"))
return s},
di(a){var s,r,q,p,o,n=this
if(n.e)A.j(A.m("GPU resource adapter is disposed"))
if(n.c==null)throw A.d(A.m("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.d(A.m("GPU resource candidate is already open"))
s=A.i4(a)
p=n.b
r=p.di(s)
try{q=new A.fM(r,n.dN(s,a),B.ag)
n.d=q
return q}catch(o){p.fb(r)
throw o}},
a0(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.d(A.m("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dQ(s.b)
r.b.a0()
r.c=null
r.e=!0},
dN(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.o(a0,a1),a3=A.e([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("n(1)")
j=j.i("I<1>")
s=new A.I(k,i.a(new A.oO()),j)
for(h=s,g=J.S(h.a),h=new A.U(g,h.b,h.$ti.i("U<1>")),f=a.a;h.m();){r=g.gn()
q=A.zd(f,a.h0(r,a5))
J.fh(a3,q)
J.bk(a2,r,q)}e=A.J(new A.I(k,i.a(new A.oP()),j),j.i("p.E"))
B.a.Z(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.t)(k),++d){o=k[d]
n=A.AP(J.BC(o,11))
if(i){h=J.aG(a2,"sceneColor")
h.toString
J.bk(a2,o,h)}else{h=n
if(typeof h!=="number")return h.q5()
if(h>=2){h=J.aG(a2,"sceneColor#1")
h.toString
J.bk(a2,o,h)}else{m=A.zd(f,a.h0(o,a5))
J.fh(a3,m)
J.bk(a2,o,m)}}}a0=A.b7(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.F(a0).i("ig<1>"),a0=new A.ig(a0,k),a0=new A.aV(a0,a0.gt(0),k.i("aV<a5.E>")),j=a.a,i=t.V,k=k.i("a5.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.x1(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
h0(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hK(s,s,1,B.b2,!0)}if(a==="sceneDepth")return new A.hK(n,m,1,B.b2,!0)
r=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
q=r?B.d.R(n+1,2):n
p=r?B.d.R(m+1,2):m
s=a==="sceneColor"
o=s||B.b.W(a,"sceneColor#")
s=s?b.d:1
return new A.hK(q,p,s,o?B.cG:B.hv,o)},
dQ(a){var s,r,q,p,o,n=A.ku(t.mf.a(a).gaG(),t._)
for(n=A.iI(n,n.r,A.r(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.x1(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fP(a){if(this.d!==a||a.c!==B.ag)throw A.d(A.m("GPU resource candidate is not open"))}}
A.oO.prototype={
$1(a){return!B.b.W(A.v(a),"sceneColor#")},
$S:3}
A.oP.prototype={
$1(a){return B.b.W(A.v(a),"sceneColor#")},
$S:3}
A.h1.prototype={
v(){return"_SlotState."+this.b}}
A.ej.prototype={
sb6(a){this.c=this.$ti.i("1?").a(a)}}
A.d0.prototype={
aI(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.ej(B.aQ,n.i("ej<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.na
p.sb6(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
ck(a){return this.aI(a,null)},
a4(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.e0(B.cN,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.e0(B.cO,a))
s=q.b
if(s===B.aR||s===B.aQ)throw A.d(A.e0(B.aD,a))},
cl(a){var s,r,q=this.$ti
q.c.a(a)
this.a4(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.f(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
jT(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a4(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.f(r,s)
r[s].sb6(b)},
ba(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.e0(B.cN,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.e0(B.cO,a))
r=q.b
if(r===B.aR||r===B.aQ)throw A.d(A.e0(B.hL,a))
q.b=B.aR
q.sb6(null)
B.a.l(p.c,s);++p.e},
bT(){return new A.cr(this.oB(),this.$ti.i("cr<+(1,2)>"))},
oB(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bT(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aR||j===B.aQ){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aX(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jD.prototype={
v(){return"BlendEquation."+this.b}}
A.ew.prototype={
v(){return"BlendFactor."+this.b}}
A.jP.prototype={
v(){return"CullFace."+this.b}}
A.jR.prototype={
v(){return"DepthFunc."+this.b}}
A.fA.prototype={
fi(a){var s=this
return A.yl(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.ba.prototype={
v(){return"StateField."+this.b}}
A.ts.prototype={
nS(a){var s,r=this.a
if(r==null)return A.hU(B.j7,t.qL)
s=A.a0(t.qL)
if(r.a!==a.a)s.l(0,B.bI)
if(r.b!==a.b)s.l(0,B.bJ)
if(r.c!==a.c)s.l(0,B.bK)
if(r.d!==a.d)s.l(0,B.bL)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bM)
if(r.r!==a.r)s.l(0,B.bN)
if(r.w!==a.w)s.l(0,B.bO)
if(r.x!==a.x)s.l(0,B.bP)
return s}}
A.dJ.prototype={$idu:1}
A.j5.prototype={}
A.j4.prototype={}
A.mh.prototype={}
A.lr.prototype={
l4(a){var s=this,r=A.c(s.a.canvas)
s.c=A.Z(new A.tq(s))
s.d=A.Z(new A.tr(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
jL(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.c7(A.b(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.c7(A.b(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.c7(A.b(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.c7(A.b(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.c7(A.b(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.hm(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.dg(e.getParameter(A.b(k.WebGL2RenderingContext.RENDERER)))
m=A.dg(e.getParameter(A.b(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qE("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
c7(a){var s=A.dg(this.a.getParameter(a))
return typeof s=="number"?B.c.ar(s):0},
hm(a){var s=A.dg(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iCu:1}
A.tq.prototype={
$1(a){A.c(a).preventDefault()
this.a.b=B.af},
$S:1}
A.tr.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.uj.prototype={
n3(){var s,r=this
if(r.b!==B.h)A.j(A.m(u.k))
s=r.w?A.l(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dJ(new A.mh(s))},
hM(a){var s=a.a
if(!(s instanceof A.mh))throw A.d(A.am(a,"query","is not a GPU timer query"))
return s}}
A.mg.prototype={}
A.jU.prototype={
B(){var s=this
return A.O(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jA.prototype={
goI(){var s=this.CW
return new A.ax(s,A.r(s).i("ax<2>")).bD(0,0,new A.ni(),t.i)},
kM(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.l(i.connect(A.c(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.l(r[k].connect(i))
r=j.z
r===$&&A.h()
A.c(r.gain).value=1
q=j.Q
q===$&&A.h()
A.c(q.gain).value=0.35
A.l(o.connect(r))
A.l(n.connect(r))
A.l(p.connect(r))
p=j.as
p===$&&A.h()
A.l(r.connect(p))
A.l(p.connect(q))
A.l(q.connect(i))
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
A.l(q.connect(p))
A.l(p.connect(A.c(s.destination)))
i.disconnect(A.c(s.destination))
A.l(i.connect(q))
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
A.l(p.connect(q))
A.l(i.connect(A.c(s.destination)))
j.fK()},
fK(){var s,r=this,q=r.k4
q===$&&A.h()
q.disconnect()
s=r.p1
s===$&&A.h()
s.disconnect()
if(r.p2){A.l(q.connect(s,0))
A.l(q.connect(s,1))
q=r.ok
q===$&&A.h()
A.l(s.connect(q,0,0))
A.l(s.connect(q,0,1))}else{s=r.ok
s===$&&A.h()
A.l(q.connect(s,0,0))
A.l(q.connect(s,1,1))}},
cE(){var s=this.a
if(A.v(s.state)==="suspended")A.c(s.resume())},
hF(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.h()
return s}r=B.js.h(0,a)
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
lP(){var s,r,q,p,o,n,m,l=this.a,k=A.al(l.sampleRate),j=B.c.aC(k*2),i=A.c(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aN()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
f_(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.c(s.createBufferSource())
r.buffer=o
A.c(r.playbackRate).value=0.94+p.ax.aN()*0.12
q=A.c(s.createGain())
A.c(q.gain).value=b
A.l(r.connect(q))
A.l(q.connect(p.hF(a)))
r.onended=A.Z(new A.nk(r,q))
r.start()},
jJ(a){return this.f_(a,1)},
jK(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.c(s.createBufferSource())
r.buffer=i
A.c(r.playbackRate).value=d*(0.94+j.ax.aN()*0.12)
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
l=j.fW(j.b.jI(e,s))
k=l.c
A.c(o.frequency).value=l.b
A.c(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.h3(r,q,n,o,p,e,B.c.E(m,0,1)))
r.onended=A.Z(new A.nj(j,o))
A.l(r.connect(q))
A.l(q.connect(n))
A.l(n.connect(o))
A.l(o.connect(p))
A.l(p.connect(j.hF(a)))
r.start()},
pf(a,b,c,d){return this.jK(a,b,c,1,d,null,null,null)},
fW(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.ak(r,q,p)},
fC(a){var s,r,q,p,o=this
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
A.l(q.connect(p))
r=o.e
r===$&&A.h()
A.l(p.connect(r))
q.onended=A.Z(new A.nl(o,q,p))
q.start()
o.cy=q},
du(a){if(this.p2===a)return
this.p2=a
this.fK()},
km(a){var s,r,q=this
q.du(a.b===B.c_)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aS?1:0.55
r=q.c
r===$&&A.h()
r=A.c(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.c(s.gain).value=0.35*q.p4},
bp(a,b,c,d,e,f){var s,r,q=this
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
fs(a){var s=null
return this.bp(s,s,s,s,a,s)},
kj(a){var s=null
return this.bp(s,s,a,s,s,s)},
kl(a){var s=null
return this.bp(s,s,s,s,s,a)},
ki(a){var s=null
return this.bp(s,a,s,s,s,s)},
kh(a){var s=null
return this.bp(a,s,s,s,s,s)},
kk(a){var s=null
return this.bp(s,s,s,a,s,s)},
kg(a){if(this.ay===a)return
this.ay=a
this.bM()},
bM(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cF(p,g)
m=n==null?i.fW(h.jI(p,g)):new A.ak(n.c,n.d,n.e)
l=A.al(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.c(A.c(o.frequency).cancelScheduledValues(l))
A.c(A.c(o.frequency).setValueAtTime(A.al(A.c(o.frequency).value),l))
j=l+0.08
A.c(A.c(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.c(A.c(o.gain).cancelScheduledValues(l))
A.c(A.c(o.gain).setValueAtTime(A.al(A.c(o.gain).value),l))
A.c(A.c(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.E(m.c,0,1)}}}
A.ni.prototype={
$2(a,b){return Math.max(A.bM(a),t.jS.a(b).r)},
$S:60}
A.nh.prototype={
$1(a){return this.k_(t.q.a(a))},
k_(a){var s=0,r=A.bh(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bi(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ap(A.b3(A.c(A.c(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ap(A.b3(A.c(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.ap(A.b3(A.c(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.aj(h)
A.c(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.x(l))
s=5
break
case 2:s=1
break
case 5:return A.bf(null,r)
case 1:return A.be(p.at(-1),r)}})
return A.bg($async$$1,r)},
$S:61}
A.nk.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.nj.prototype={
$1(a){var s=this.a.CW.a5(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.nl.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.h3.prototype={}
A.jB.prototype={
v(){return"AudioCategory."+this.b}}
A.n7.prototype={
kO(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.ha)
if(!B.a.aa(A.e([d.a,d.b,d.c],t.n),new A.n8()))throw A.d(B.fw)}}
A.n8.prototype={
$1(a){return isFinite(A.bM(a))},
$S:5}
A.mQ.prototype={
kL(a,b){if(this.a.length===0)throw A.d(B.fm)
if(!B.a.aa(A.e([a.a,a.b,a.c],t.n),new A.mR()))throw A.d(B.fB)}}
A.mR.prototype={
$1(a){return isFinite(A.bM(a))},
$S:5}
A.hs.prototype={
C(){var s=t.n
if(B.a.N(A.e([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mS()))throw A.d(B.fR)
s=B.a.N(A.e([0,0.55,1],s),new A.mT())
if(s)throw A.d(B.h1)},
cF(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ak(-1.5,2e4,0)
if(a.ay)return new A.ak(-28,320,1)
return new A.ak(-12,1100,0.55)},
pS(a){return this.cF(a,null)}}
A.mS.prototype={
$1(a){return!isFinite(A.bM(a))},
$S:5}
A.mT.prototype={
$1(a){A.bM(a)
return a<0||a>1},
$S:5}
A.n3.prototype={
kN(a){var s=A.r(a)
if(new A.ad(a,s.i("ad<1>")).N(0,new A.n5())||new A.ax(a,s.i("ax<2>")).N(0,new A.n6()))throw A.d(B.h8)}}
A.n5.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.n6.prototype={
$1(a){var s
t.a.a(a)
s=J.aE(a)
return s.gO(a)||s.N(a,new A.n4())},
$S:62}
A.n4.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.wB.prototype={}
A.nf.prototype={}
A.n9.prototype={
kP(a,b,c){var s
for(s=this.b.gaG(),s=s.gu(s);s.m();)s.gn().C()},
jR(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.d(A.m("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.d(A.m("audio listener room missing: "+a0))
r=this.mv(a,a0)
s=t.s
q=A.e([],s)
p=A.e([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c7
e=f.cF(h,a1.h(0,g))
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.t)(o),++i)s.push(o[i].a)
o=B.c.E(l,-60,0)
m=B.d.E(k,120,2e4)
g=B.c.E(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.a_(p,"; ")
b=t.N
s=A.ag(s,b)
b=A.ag(q,b)
if(!isFinite(g)||g<0||g>1)A.j(B.h0)
return new A.nf(s,b,o,m,g,n,c)},
cF(a,b){return this.jR(a,b,B.bp)},
mv(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.mV
s=t.N
r=A.O([a0,0],s,t.i)
q=A.O([a0,B.W],s,t.Es)
p=A.aL([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.U(k,new A.na(r))
j=B.a.gS(k)
p.a5(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.iy(s,!0)}i=o.aE(j)
h=A.J(i,i.$ti.i("p.E"))
B.a.U(h,new A.nb())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.t)(h),++g){f=h[g]
e=f.bW(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c7:d).pS(f)
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
p.l(0,e)}}}return B.mU}}
A.na.prototype={
$2(a,b){var s,r,q
A.v(a)
A.v(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.F(r,s)
return q===0?B.b.F(a,b):q},
$S:63}
A.nb.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:64}
A.iy.prototype={}
A.fr.prototype={}
A.nF.prototype={
eW(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.a(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Bu().bv(q).gad()
p.d=q
p.c=p.b.bv(q).gad()
p.a=a}}
A.on.prototype={}
A.l8.prototype={}
A.oL.prototype={
lG(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.l(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.l(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.l(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.dg(s.getParameter(34047))
if(typeof p=="number")o.c=p},
dg(a,b,c,d,e,f){return this.oC(a,b,c,d,e,f)},
oC(a,b,c,a0,a1,a2){var s=0,r=A.bh(t.uh),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$dg=A.bi(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.c(A.c(j.document).createElement("img"))
m.src=a
s=7
return A.ap(A.b3(A.c(m.decode()),t.X),$async$dg)
case 7:i=n.a
h=A.l(i.createTexture())
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
if(c){n.lG()
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
case 6:case 1:return A.bf(q,r)
case 2:return A.be(o.at(-1),r)}})
return A.bg($async$dg,r)},
dh(a,b,c){var s=!1
return this.oD(t.a.a(a),b,!1)},
oD(b0,b1,b2){var s=0,r=A.bh(t.uh),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$dh=A.bi(function(b3,b4){if(b3===1){o.push(b4)
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
return A.ap(A.b3(A.c(j.decode()),a1),$async$dh)
case 10:J.fh(l,j)
case 8:b0.length===a||(0,A.t)(b0),++a2
s=7
break
case 9:if(J.cd(l)===0){a=A.m("texture array needs at least one layer")
throw A.d(a)}i=A.b(J.aG(l,0).width)
h=A.b(J.aG(l,0).height)
if(J.a3(i,0)||J.a3(h,0)||J.wy(l,new A.oM(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.cd(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.av()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jq(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.av()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a7()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a7()
n=[1]
s=5
break A}e=B.c.R(a+1,2)}}a=m.a
a7=A.l(a.createTexture())
if(a7==null){a=A.m("could not create texture array")
throw A.d(a)}a.activeTexture(A.b(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.b(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.af(a,"texStorage3D",[A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.b(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.b(a.getError())
if(!J.a3(d,A.b(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.wz(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.cd(l)
if(typeof a1!=="number"){q=a1.dt()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.b(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.b(a0.WebGL2RenderingContext.RGBA),A.b(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aG(l,c)])
d=A.b(a.getError())
if(!J.a3(d,A.b(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.x(c)+" failed (WebGL error 0x"+J.wz(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.a7()
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
if(!J.a3(d,A.b(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.wz(d,16)+")")
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
b=A.aj(a9)
A.c(v.G.console).error("texture array load failed: "+A.x(b))
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
case 6:case 1:return A.bf(q,r)
case 2:return A.be(o.at(-1),r)}})
return A.bg($async$dh,r)},
hG(a,b){var s=this.a,r=A.l(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a3(A.dg(s.getShaderParameter(r,A.b(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.fC("shader compile failed: "+A.x(A.zO(s,"getShaderInfoLog",r,t.D))+"\n"+b))
return r},
b5(a,b){var s=v.G,r=this.hG(A.b(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.hG(A.b(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.l(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a3(A.dg(p.getProgramParameter(o,A.b(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.fC("program link failed: "+A.x(A.zO(p,"getProgramInfoLog",o,t.D))))
return o},
gjA(){var s=A.dg(this.a.getParameter(A.b(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.c.ar(s):0},
ff(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.b(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.b(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.b(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.b(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.i9(0,c,B.d.kK(b.byteLength,p))*p
if(B.d.M(o,4)!==0)A.j(A.z("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.Bw(B.r.gn6(b),b.byteOffset+0*p,B.d.R(o,4)))}},
e3(a,b,c){var s,r,q,p,o=this.a,n=v.G
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
e_(a,b,c,d,e){var s,r=this.a,q=A.l(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.b(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.af(r,"renderbufferStorageMultisample",[A.b(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.b(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.b(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.b(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
hI(a,b,c){var s,r=this.a,q=A.l(r.createTexture())
q.toString
this.e3(q,a,b)
s=v.G
A.af(r,"framebufferTexture2D",[A.b(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.b(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
h_(a,b){var s,r,q=this.a,p=A.l(q.createTexture())
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
eX(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.l(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.b(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.e_(a,b,e,A.b(s.WebGL2RenderingContext.RGBA8),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.e_(a,b,e,A.b(s.WebGL2RenderingContext.RGBA8),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.hI(a,b,A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.hI(a,b,A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.e_(a,b,e,A.b(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.b(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.h_(a,b)
if(d)h.drawBuffers(A.e([A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.b(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.b(h.checkFramebufferStatus(A.b(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.b(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.b(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.fC("framebuffer incomplete"))
return new A.l8(g,n,o,m,q,p,l,e,a,b)},
jz(a,b,c,d){return this.eX(a,b,c,d,0)},
oG(a,b,c,d){return this.eX(a,b,!0,c,d)},
bF(a,b,c){return this.eX(a,b,c,!1,0)},
e2(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.b(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.af(s,"renderbufferStorageMultisample",[A.b(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.b(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
bc(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.b(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.e3(q,b,c)
if(p!=null)n.e3(p,b,c)
n.e2(a,a.e,A.b(r.WebGL2RenderingContext.RGBA8),b,c)
n.e2(a,a.f,A.b(r.WebGL2RenderingContext.RGBA8),b,c)
n.e2(a,a.r,A.b(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.h_(b,c)}s.bindFramebuffer(A.b(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
pw(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
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
nj(a,b,c,d){var s,r,q=v.G,p=(A.b(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.b(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
bh(a){var s=this.a,r=A.b(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.b(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.b(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.oM.prototype={
$1(a){A.c(a)
return A.b(a.width)!==this.a||A.b(a.height)!==this.b},
$S:65}
A.kg.prototype={
fe(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].jS(a)}}
A.ki.prototype={
dk(a){if(this.at)return
A.px(a,"requestPointerLock",t.X)},
fp(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.ck(r,r.r,r.e,A.r(r).i("ck<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a0(q)
for(m=J.S(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.ps(p,n)}this.be()},
dB(a){var s,r,q,p,o,n,m=this
if(m.ch.dB(a))for(s=m.CW.aH("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
pg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.c(f.a.navigator).getGamepads())
c=J.S(t.ik.b(c)?c:new A.aU(c,A.F(c).i("aU<1,a7?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.R(r.connected)||A.v(r.mapping)!=="standard")break A
c=A.v(r.id)
q=A.v(r.mapping)
p=t.n
o=A.e([],p)
n=d.a(r.axes)
n=J.S(t.dd.b(n)?n:new A.aU(n,A.F(n).i("aU<1,w>")))
while(n.m())o.push(n.gn())
p=A.e([],p)
d=d.a(r.buttons)
d=J.S(t.nx.b(d)?d:new A.aU(d,A.F(d).i("aU<1,a7>")))
while(d.m()){r=d.gn()
p.push(A.R(r.pressed)?1:A.al(r.value))}s=new A.l5(!0,c,q,o,p)
break}}d=s==null
m=A.DP(d?B.lU:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.N(c.aH(e),q.gaw(q))
q=f.r
q.lL(A.r(q).i("n(1)").a(new A.pq(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.n:g,h)){if(i.eU())n.l(0,h)}else n.l(0,h)}}f.e=A.hU(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.N(c.aH(e),l.gaw(l))){d=r.a(f.c)
d=!B.a.N(c.aH(e),d.gaw(d))}}if(d)i.eV()},
m4(a){var s=this
A.c(a)
if(A.R(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.v(a.code)))if(B.a.q(s.CW.aH("interact"),A.v(a.code))){if(s.ch.eU())s.d.l(0,A.v(a.code))}else s.d.l(0,A.v(a.code))},
m6(a){var s,r,q="interact"
A.c(a)
s=this.c
s.a5(0,A.v(a.code))
r=this.CW
if(B.a.q(r.aH(q),A.v(a.code))){t.Q.a(s)
s=!B.a.N(r.aH(q),s.gaw(s))}else s=!1
if(s)this.ch.eV()},
ma(a){var s,r=this
A.c(a)
if(!r.ay)return
s="Mouse"+A.b(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aH("interact"),s)){if(r.ch.eU())r.d.l(0,s)}else r.d.l(0,s)},
me(a){var s,r="interact",q="Mouse"+A.b(A.c(a).button),p=this.c
p.a5(0,q)
s=this.CW
if(B.a.q(s.aH(r),q)){t.Q.a(p)
p=!B.a.N(s.aH(r),p.gaw(p))}else p=!1
if(p)this.ch.eV()},
mg(a){var s
A.c(a)
if(!this.ay)return
s=A.al(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
mc(a){var s=this
A.c(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.hi(a,"movementX")
s.as=s.as+s.hi(a,"movementY")},
m8(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
hi(a,b){var s=A.zL(a[b])
if(s==null)s=null
return s==null?0:s},
cT(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.ku(n.c,t.N)
for(r=n.e,r=A.iI(r,r.r,A.r(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.N(n.CW.aH(a),s.gaw(s))},
be(){var s=this
s.c.H(0)
s.d.H(0)
s.f.H(0)
s.r.J(0,s.e)
s.as=s.Q=0
s.ch.f8()}}
A.pq.prototype={
$1(a){return!this.a.q(0,A.v(a))},
$S:3}
A.pp.prototype={
aH(a){var s=this.a.h(0,a)
return s==null?B.n:s},
ps(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.V(a))return
r=t.N
q=A.a0(r)
for(p=A.iI(b,b.r,A.r(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ag(q,r))},
bi(a,b){var s,r,q
t.Q.a(b)
for(s=this.aH(a),r=s.length,q=0;q<r;++q)if(b.a5(0,s[q]))return!0
return!1}}
A.pt.prototype={
eU(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
eV(){this.c=this.b=!1
this.d=0},
dB(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.E(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
f8(){this.c=this.b=!1
this.d=0}}
A.aT.prototype={}
A.pP.prototype={}
A.pM.prototype={
pk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a0(h)
r=A.J(b,t.p)
B.a.J(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.d(A.z("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.e([],r)
m=A.e([],r)
l=A.e([],r)
k=A.e([],r)
j=A.o(h,t.N)
i.h7(n,i.d,a,b,i.a,j,m)
i.h7(l,i.e,a,c,i.b,j,k)
return new A.pP(n,l,j)},
h7(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.F(d)
s=k.i("P<1,+effectiveScore,light,score(w,aT,w)>")
r=A.J(new A.P(d,k.i("+effectiveScore,light,score(w,aT,w)(1)").a(new A.pN(this,c,b)),s),s.i("a5.E"))
B.a.U(r,new A.pO())
q=A.a0(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.H(0)
b.J(0,q)}}
A.pN.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ah(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iT(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:67}
A.pO.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.F(b.a,a.a)
return s===0?B.d.F(a.b.a,b.b.a):s},
$S:68}
A.o2.prototype={
e4(a,b){var s,r,q,p,o,n,m,l=this
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
A.pV.prototype={
kA(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.e4(b,c)},
mV(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.a(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.M(s,6.283185307179586)
r=Math.sin(s)
return new A.a(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.kw.prototype={}
A.hX.prototype={
ghc(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gI(B.d.af(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.af(s.c,4)))>>>0
r=((r<<5>>>0)+r^s.d)>>>0
r=((r<<5>>>0)+r^B.b.gI(B.c.af(0.5,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.af(0,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.af(1,4)))>>>0
return((r<<5>>>0)+r^B.b.gI(B.d.af(1,4)))&2147483647},
a3(a,b){var s,r=this
if(b==null)return!1
if(r!==b){s=!1
if(b instanceof A.hX)if(A.mG(r)===A.mG(b))if(r.a===b.a)if(r.b===b.b)if(r.c===b.c)s=r.d===b.d}else s=!0
return s},
gI(a){return this.ghc()},
B(){var s=this
return A.O(["atlasLayer",s.a,"emissiveStrength",s.b,"uvScale",s.c,"flags",s.d,"roughness",0.5,"metallic",0,"aoStrength",1,"normalScale",1],t.N,t.K)}}
A.q0.prototype={
kX(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].ghc(),q)}}
A.d3.prototype={
f3(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.r.dv(s,0,l,k)
m.a=s}r=b.ah(0,a).bv(d.ah(0,a)).gad()
q=(B.d.ca(e,16)&255)/255
p=(B.d.ca(e,8)&255)/255
o=(e&255)/255
n=f?0.6000000000000001:0
l=A.im(m.a,m.b,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=0+g
l=A.im(m.a,l,b,r,q,p,o,n,1,k,0,0)
m.b=l
j=0+h
l=A.im(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=l
l=A.im(m.a,l,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=A.im(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=k
m.b=A.im(m.a,k,d,r,q,p,o,n,1,0,j,0)},
T(a,b,c,d,e){return this.f3(a,b,c,d,e,!1,1,1)},
f2(a,b,c,d,e,f,g){return this.f3(a,b,c,d,e,!1,f,g)},
b9(a,b,c,d,e,f){return this.f3(a,b,c,d,e,f,1,1)}}
A.qO.prototype={
lS(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.b5(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.L()
m.w=r
q=s.b5(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.L()
m.x=q
p=m.c
o=A.l(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.L()
m.y=o
o=A.l(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.L()
m.z=o
o=A.l(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.L()
m.Q=o
r=A.l(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.L()
m.as=r
r=A.l(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.L()
m.at=r
q=A.l(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.L()
m.ax=q
m.d=s.bF(m.ay,m.ch,!1)
m.e=s.bF(m.ay,m.ch,!1)
m.f=s.bF(m.ay,m.ch,!1)
p=A.l(p.createVertexArray())
p.toString
m.CW!==$&&A.L()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
lT(){var s
try{this.r=this.b.bF(384,216,!1)}catch(s){this.r=null}},
pr(a,b){var s,r,q,p=this,o=p.d,n=p.e,m=p.f
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
r.bh(o)
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
r.bh(m)
s.bindTexture(3553,o.b)
q=p.ax
q===$&&A.h()
s.uniform2f(q,1/o.x,0)
s.drawArrays(4,0,3)
r.bh(n)
s.bindTexture(3553,m.b)
s.uniform2f(q,0,1/o.y)
s.drawArrays(4,0,3)
return n.b}}
A.qY.prototype={
dL(a,b,c){var s,r,q
try{r=this.a.b5(b,c)
return r}catch(q){s=A.aj(q)
r=A.fC(a+": "+A.x(s))
throw A.d(r)}}}
A.qQ.prototype={}
A.iE.prototype={}
A.m7.prototype={}
A.lV.prototype={}
A.lT.prototype={}
A.qR.prototype={
kY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([A.wN(0,0,1,0),A.wN(1,0,1,0),A.wN(2,0,1,0)],t.td),e=t.S
e=new A.q0(f,A.o(e,e))
e.kX(f)
h.ei=e
h.j8=1.9
h.eH=h.bC/h.bB
r=J.km(6,t.dr)
for(q=0;q<6;++q)r[q]=new A.iE()
t.lm.a(r)
f=h.b7
e=f.b5("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=smoothstep(uPointLightRadius[i],0.0,distanceToLight);\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uFogDensity,uFogHeightFalloff,uFogGroundHeight;\nuniform float uRainIntensity,uSurfaceWetness,uWindowWetness;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float currentDepth=projCoords.z;\n  float bias=max(uShadowBias.x, uShadowBias.y*abs(dFdy(currentDepth)));\n  vec2 texelSize=vec2(1.0/512.0);\n  float shadowSum=0.0;\n  for(int x=-1;x<=1;x++){\n    for(int y=-1;y<=1;y++){\n      float pcfDepth=texture(shadowTex,projCoords.xy+vec2(x,y)*texelSize).r;\n      shadowSum+=(currentDepth-bias>pcfDepth)?0.15:1.0;\n    }\n  }\n  return shadowSum/9.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n\n  // Surface wetness PBR modification\n  if (uSurfaceWetness > 0.001) {\n    c *= mix(1.0, 0.65, uSurfaceWetness * 0.85);\n  }\n\n  // Calculate exponential height fog if density > 0, otherwise fallback to linear range\n  float fog = 0.0;\n  if (uFogDensity > 0.0001) {\n    float heightDecay = exp(-uFogHeightFalloff * max(vWorldPos.y - uFogGroundHeight, 0.0));\n    fog = clamp(1.0 - exp(-uFogDensity * vDepth * heightDecay), 0.0, 1.0);\n  } else {\n    fog = smoothstep(uFogStart, uFogEnd, vDepth);\n  }\n\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec2 glassUv = uv.xy;\n      if (uWindowWetness > 0.05 && uNoiseOn > 0.0) {\n        vec2 dropUv = uv.xy * 6.0 + vec2(0.0, -uv.y * 0.3);\n        glassUv += (texture(uNoise, dropUv).rg - 0.5) * 0.03 * uWindowWetness;\n      }\n      vec4 g=texture(uGlass,glassUv);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog *= clamp(uGlassFog, 0.1, 1.0);\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.b5(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.b5(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.b5(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.b5(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.az!==$&&A.L()
h.az=new A.qY(f,e,p,o,n,m)
h.b=t.w7.a(new A.qS(h))
h.hu()
h.ht()
o=h.aW
p=A.l(o.getUniformLocation(m,"uTex"))
h.iD!==$&&A.L()
h.iD=p
p=A.l(o.getUniformLocation(m,"uNoise"))
h.iE!==$&&A.L()
h.iE=p
p=A.l(o.getUniformLocation(m,"uTime"))
h.ii!==$&&A.L()
h.ii=p
p=A.l(o.getUniformLocation(m,"uTexelSize"))
h.ih!==$&&A.L()
h.ih=p
p=A.l(o.getUniformLocation(m,"uNoiseOff"))
h.ij!==$&&A.L()
h.ij=p
p=A.l(o.getUniformLocation(m,"uChromaLuma"))
h.ik!==$&&A.L()
h.ik=p
p=A.l(o.getUniformLocation(m,"uChromaLag"))
h.il!==$&&A.L()
h.il=p
p=A.l(o.getUniformLocation(m,"uTapeNoise"))
h.im!==$&&A.L()
h.im=p
p=A.l(o.getUniformLocation(m,"uHeadSwitch"))
h.io!==$&&A.L()
h.io=p
p=A.l(o.getUniformLocation(m,"uTracking"))
h.ip!==$&&A.L()
h.ip=p
p=A.l(o.getUniformLocation(m,"uDropouts"))
h.iq!==$&&A.L()
h.iq=p
p=A.l(o.getUniformLocation(m,"uGhosting"))
h.ir!==$&&A.L()
h.ir=p
p=A.l(o.getUniformLocation(m,"uChromaBlurI"))
h.is!==$&&A.L()
h.is=p
p=A.l(o.getUniformLocation(m,"uChromaBlurQ"))
h.it!==$&&A.L()
h.it=p
p=A.l(o.getUniformLocation(m,"uChromaLagAmount"))
h.iu!==$&&A.L()
h.iu=p
p=A.l(o.getUniformLocation(m,"uNoiseScale"))
h.iv!==$&&A.L()
h.iv=p
p=A.l(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.iw!==$&&A.L()
h.iw=p
p=A.l(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.ix!==$&&A.L()
h.ix=p
p=A.l(o.getUniformLocation(m,"uJitterAmount"))
h.iy!==$&&A.L()
h.iy=p
p=A.l(o.getUniformLocation(m,"uJitterFreq"))
h.iz!==$&&A.L()
h.iz=p
p=A.l(o.getUniformLocation(m,"uDropoutRate"))
h.iA!==$&&A.L()
h.iA=p
p=A.l(o.getUniformLocation(m,"uGhostAmount"))
h.iB!==$&&A.L()
h.iB=p
p=A.l(o.getUniformLocation(m,"uGhostOffset"))
h.iC!==$&&A.L()
h.iC=p
p=A.l(o.getUniformLocation(m,"uGhostTarget"))
h.iF!==$&&A.L()
h.iF=p
m=A.l(o.getUniformLocation(m,"uHasGhost"))
h.iG!==$&&A.L()
h.iG=m
m=A.l(o.getUniformLocation(n,"uTex"))
h.eJ!==$&&A.L()
h.eJ=m
m=A.l(o.getUniformLocation(n,"uDepth"))
h.eK!==$&&A.L()
h.eK=m
m=A.l(o.getUniformLocation(n,"uFocusDistance"))
h.eL!==$&&A.L()
h.eL=m
m=A.l(o.getUniformLocation(n,"uDofBlurScale"))
h.eM!==$&&A.L()
h.eM=m
m=A.l(o.getUniformLocation(n,"uBlurRadius"))
h.eN!==$&&A.L()
h.eN=m
m=A.l(o.getUniformLocation(n,"uDofStrength"))
h.eO!==$&&A.L()
h.eO=m
n=A.l(o.getUniformLocation(n,"uTexel"))
h.eP!==$&&A.L()
h.eP=n
n=A.R(A.c(A.c(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.co!==$&&A.L()
h.co=n
h.sjx(16777215)
n=new A.rM(o,f,A.e([],t.qy),A.e([],t.sj),A.e([],t.h),A.e([],t.fv))
m=n.c=f.b5("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.l(o.getUniformLocation(m,"uLightProj"))
n.e=A.l(o.getUniformLocation(m,"uModel"))
h.eh!==$&&A.L()
h.eh=n
n=new A.qO(f,o)
n.lS()
n.lT()
h.d5!==$&&A.L()
h.d5=n
n=f.a
m=A.l(n.createBuffer())
m.toString
h.ej!==$&&A.L()
h.ej=m
p=A.l(n.createBuffer())
p.toString
h.ek!==$&&A.L()
h.ek=p
n=A.l(n.createBuffer())
n.toString
h.el!==$&&A.L()
h.el=n
e=A.l(o.createVertexArray())
e.toString
h.em!==$&&A.L()
h.em=e
l=A.l(o.createVertexArray())
l.toString
h.en!==$&&A.L()
h.en=l
k=A.l(o.createVertexArray())
k.toString
h.eo!==$&&A.L()
h.eo=k
j=A.l(o.createVertexArray())
j.toString
h.ep!==$&&A.L()
h.ep=j
o.bindVertexArray(e)
h.dH(m)
o.bindVertexArray(l)
h.dH(p)
o.bindVertexArray(k)
h.dH(n)
o.bindVertexArray(null)
try{h.da=f.jz(384,216,!0,!0)}catch(i){h.da=null}s=4<f.gjA()?4:f.gjA()
e=s
if(typeof e!=="number")return e.av()
if(e>1)try{h.cn=f.oG(h.bB,h.bC,!0,s)}catch(i){h.cn=null}try{h.bz=f.jz(h.bB,h.bC,!0,!0)}catch(i){h.cn=h.bz=null}if(h.bz!=null)try{h.d7=f.bF(h.gcO(),h.gcN(),!1)
h.d8=f.bF(h.gcO(),h.gcN(),!1)
h.d9=f.bF(h.bB,h.bC,!1)}catch(i){h.d9=h.d8=h.d7=null}},
gcO(){var s=B.d.R(this.bB,4)
return s<1?1:s},
gcN(){var s=B.d.R(this.bC,4)
return s<1?1:s},
b_(a){return this.oE(t.G.a(a))},
oE(a){var s=0,r=A.bh(t.H),q=this,p,o,n,m,l,k,j
var $async$b_=A.bi(function(b,c){if(b===1)return A.be(c,r)
for(;;)switch(s){case 0:p=new A.K(a,A.r(a).i("K<1,2>")).gu(0),o=q.b7
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.d3.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ap(o.dg(k,l,!1,!1,!1,m==="grime"),$async$b_)
case 4:if(c!=null)q.h6(m,l)
s=2
break
case 3:p=t.Ai
j=A.J(new A.cJ(new A.P(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.oI.a(new A.qT(a)),t.jT),p),p.i("p.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ap(o.dh(j,12,!1),$async$b_)
case 7:q.d4=c
case 6:return A.bf(null,r)}})
return A.bg($async$b_,r)},
bY(){var s=0,r=A.bh(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bY=A.bi(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.o(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ap(A.b3(A.c(A.c(g.window).fetch("shaders/"+A.x(m))),f),$async$bY)
case 13:l=a3
if(!A.R(l.ok)){i=A.fC("HTTP "+A.x(A.xP(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.ap(A.b3(A.c(l.text()),i),$async$bY)
case 14:a.bk(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.aj(c)
i=A.fC("shaders/"+A.x(m)+": fetch failed - "+A.x(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.mn(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.aj(b)
A.c(v.G.console).error("shader reload failed: "+A.x(j))
s=5
break
case 2:s=1
break
case 5:return A.bf(null,r)
case 1:return A.be(p.at(-1),r)}})
return A.bg($async$bY,r)},
mn(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.az
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.dL("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.dL("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.dL("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.hu()
i.ht()
q=i.ic
q=A.J(q,A.r(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.t)(q),++k){s=q[k]
o=B.d3.h(0,s)
o.toString
i.h6(s,o)}A.c(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.aj(j)
A.c(v.G.console).error("shader recompile failed: "+A.x(r))}},
ht(){var s=this,r=s.aW,q=s.az
q===$&&A.h()
s.j9=A.l(r.getUniformLocation(q.c,"uTex"))
s.ja=A.l(r.getUniformLocation(q.c,"uTime"))
s.jb=A.l(r.getUniformLocation(q.c,"uFlash"))
s.jc=A.l(r.getUniformLocation(q.c,"uVignette"))
s.jd=A.l(r.getUniformLocation(q.c,"uGrain"))
s.je=A.l(r.getUniformLocation(q.c,"uDesat"))
s.jf=A.l(r.getUniformLocation(q.c,"uBloom"))
s.jg=A.l(r.getUniformLocation(q.c,"uBloomStrength"))
s.i8=A.l(r.getUniformLocation(q.c,"uNoiseOff"))
s.ib=A.l(r.getUniformLocation(q.c,"uLutMix"))
s.jj=A.l(r.getUniformLocation(q.c,"uDepth"))
s.jk=A.l(r.getUniformLocation(q.c,"uDepthViz"))
s.ie=A.l(r.getUniformLocation(q.c,"uSSAO"))
s.ig=A.l(r.getUniformLocation(q.c,"uSSAOStrength"))
s.jl=A.l(r.getUniformLocation(q.c,"uNoise"))
s.jm=A.l(r.getUniformLocation(q.c,"uNoiseOn"))
s.i9=A.l(r.getUniformLocation(q.c,"uLut"))
s.ia=A.l(r.getUniformLocation(q.c,"uLutOn"))
s.jh=A.l(r.getUniformLocation(q.d,"uTex"))
s.eI=A.l(r.getUniformLocation(q.d,"uDir"))
s.ji=A.l(r.getUniformLocation(q.c,"uBlur"))},
h6(a,b){var s,r,q,p=this
p.ic.l(0,a)
switch(a){case"bluenoise":s=p.az
s===$&&A.h()
s=s.c
r=p.jl
r===$&&A.h()
q=p.jm
q===$&&A.h()
p.c9(s,r,q,b)
break
case"lut-gothic":s=p.az
s===$&&A.h()
s=s.c
r=p.i9
r===$&&A.h()
q=p.ia
q===$&&A.h()
p.c9(s,r,q,b)
break
case"grime":s=p.az
s===$&&A.h()
s=s.b
r=p.xr
r===$&&A.h()
q=p.y1
q===$&&A.h()
p.c9(s,r,q,b)
break
case"glass":s=p.az
s===$&&A.h()
s=s.b
r=p.bl
r===$&&A.h()
q=p.dd
q===$&&A.h()
p.c9(s,r,q,b)
break
case"soft":s=p.az
s===$&&A.h()
s=s.b
r=p.cr
r===$&&A.h()
q=p.cs
q===$&&A.h()
p.c9(s,r,q,b)
break}},
c9(a,b,c,d){var s=this.aW
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sjx(a){var s=A.vx(a)
this.iO=s.a
this.iP=s.b
this.iQ=s.c},
d_(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
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
f[l]=l}a1=b.aW
i=A.l(a1.createVertexArray())
i.toString
e=A.l(a1.createBuffer())
e.toString
d=A.l(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.b(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.b(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.b(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.b(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.fL(56)
a1.bindBuffer(A.b(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.b(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.b(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.ob++
b.eu.k(0,a1,new A.m7(e,d,i,s,s,a3))
return a1},
o1(a){var s,r,q,p=this,o=p.eu.h(0,a)
if(o==null)return
p.hk()
s=p.iU
r=p.iV
if(s!==r)p.hz(r)
s=p.aW
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.eG
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.b(q.WebGL2RenderingContext.TRIANGLES),r,A.b(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.b(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.cp},
ol(a){var s,r=this.eu.a5(0,a)
if(r==null)return
s=this.aW
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
hk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.ev)return
c.ev=!0
s=c.aW
r=c.az
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.iS
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.ey
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.ez
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.eA
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.j8)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.eH)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.iH?1:0
s.uniform1f(r,q)
r=c.eB
q=c.eC
p=c.eD
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
q=c.iN
s.uniform3f(p,q.a,q.b,q.c)
q=c.fy
q===$&&A.h()
s.uniform3f(q,c.iO,c.iP,c.iQ)
q=c.go
q===$&&A.h()
s.uniform1f(q,1.5)
q=c.id
q===$&&A.h()
s.uniform1f(q,14)
q=c.k1
q===$&&A.h()
s.uniform1f(q,c.iR)
q=c.k2
q===$&&A.h()
s.uniform1f(q,0.6)
q=c.k3
q===$&&A.h()
s.uniform1i(q,c.ex.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.ex
l=m.length
if(n<l){if(!(n<l))return A.f(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],0)
continue}j=A.vx(k.b)
m=c.co
m===$&&A.h()
i=m?1:1+(A.wo(c.eE*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.f(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.f(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.f(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],k.d*i)}r=c.co
r===$&&A.h()
q=r?1:1+(A.wo(c.eE*2.5,40503)*2-1)*0
c.o8=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.iJ?1:0
s.uniform1f(q,p)
p=c.y2
p===$&&A.h()
s.uniform1f(p,0.505)
p=c.bA
p===$&&A.h()
s.uniform1f(p,1.2)
p=c.bk
p===$&&A.h()
s.uniform1f(p,0.25)
p=c.iW
p===$&&A.h()
s.uniform1f(p,2)
p=c.iX
p===$&&A.h()
s.uniform1f(p,0.45)
q=c.iI
h=q?384:0
g=q?216:0
q=c.eq
p=q.a
if(p===B.bF){f=B.c.E(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.iY
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.eh
r===$&&A.h()
q=c.j1
q===$&&A.h()
s.uniform1f(q,0)
q=c.j2
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.iZ
q===$&&A.h()
if(q!=null)r.dr(0)
q=c.j_
q===$&&A.h()
if(q!=null)r.dr(1)
q=c.j0
q===$&&A.h()
if(q!=null)r.dr(2)
r.ds(0)
r.ds(1)
r.ds(2)
r=c.j3
r===$&&A.h()
if(c.d4==null)q=0
else{c.ei===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.d4!=null){r=v.G
s.activeTexture(A.b(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.b(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.d4)
r=c.eF
r===$&&A.h()
s.uniform1i(r,12)}r=c.j7
q=c.j6
p=c.j5
o=c.j4
n=0
for(;;){m=c.ei
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
if(m!=null)s.uniform1i(m,d.d);++n}c.hz(c.iV)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.eG
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.b(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.b(r.WebGL2RenderingContext.BLEND))},
hz(a){var s
this.iU=a
s=this.dx
s===$&&A.h()
this.aW.uniformMatrix4fv(s,!1,a.a)},
bb(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bB=a
j.bC=b
j.eH=b/a
s=j.d5
s===$&&A.h()
r=B.d.R(a,2)
s.ay=r
q=B.d.R(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.bc(p,r,q)
r=s.e
if(r!=null)s.b.bc(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.bc(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.bc(r,384,216)
o=j.bz
n=j.cn
m=j.d7
l=j.d8
k=j.d9
if(o!=null)j.b7.bc(o,a,b)
if(n!=null)j.b7.bc(n,a,b)
if(m!=null)j.b7.bc(m,j.gcO(),j.gcN())
if(l!=null)j.b7.bc(l,j.gcO(),j.gcN())
if(k!=null)j.b7.bc(k,a,b)},
mA(a){var s,r,q,p,o,n,m
for(s=this.iL,r=this.iK,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
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
mz(a){var s,r,q,p,o,n,m,l
for(s=this.iM,r=this.ew,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
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
oh(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.eq=b4
s=b2.cq
r=0
if(s>0){for(s=b2.iM,q=0;p=b2.cq,q<p;++q)B.a.k(s,q,q)
b2.mz(p)
for(p=b2.ew,o=b2.er,n=0;n<b2.cq;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.Ac(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.ew,p=b2.er,q=0;q<b2.cq;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.Ac(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.cq=0
for(s=b2.iL,q=0;p=b2.dc,q<p;++q)B.a.k(s,q,q)
b2.mA(p)
for(p=b2.o9,o=b2.iK,k=0,n=0;n<b2.dc;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.vx(0)
m=j.b
h=b2.eA
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.ez
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
e=b2.ey
k=A.Aj(p,k,a3,a4,a5,a6,new A.a(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.dc=0
s=b2.b7
o=b2.ej
o===$&&A.h()
s.ff(o,b2.er,r)
o=b2.ek
o===$&&A.h()
s.ff(o,p,k)
b2.hk()
p=b2.aW
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.em
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,B.d.R(r,14));++b2.cp
p.depthMask(!1)
p.enable(A.b(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.b(o.WebGL2RenderingContext.SRC_ALPHA),A.b(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.en
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,B.d.R(k,14));++b2.cp
m=b2.es
if(m>0){h=b2.el
h===$&&A.h()
s.ff(h,b2.oa,m)
p.blendFunc(A.b(o.WebGL2RenderingContext.ONE),A.b(o.WebGL2RenderingContext.ONE))
m=b2.eo
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,b2.es/14|0);++b2.cp}m=b2.da
if(m!=null){a7=b2.bz
if(a7!=null)s.pw(m,a7)}a8=b2.bz
if(a8==null)return
p.disable(A.b(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.b(o.WebGL2RenderingContext.BLEND))
m=b2.ep
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.d7
a4=b2.d8
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.az
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE0))
g=b2.jh
g===$&&A.h()
p.uniform1i(g,0)
s.bh(a4)
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.eI
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.bh(a3)
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.eI,0,1/a4.y)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.d9
if(b2.d6>0&&a6!=null){s.bh(a6)
g=b2.az
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.eJ
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.eK
g===$&&A.h()
p.uniform1i(g,7)
g=b2.eL
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.eM
g===$&&A.h()
p.uniform1f(g,1)
g=b2.eN
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.eO
g===$&&A.h()
p.uniform1f(g,b2.d6)
g=b2.eP
g===$&&A.h()
p.uniform2f(g,1/b2.bB,1/b2.bC)
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.d5
g===$&&A.h()
b0=g.pr(a8,0.5)
s.bh(null)
s=b2.az
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE1))
s=A.b(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.jf
g===$&&A.h()
p.uniform1i(g,1)
g=b2.jg
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.ji
s===$&&A.h()
b2.co===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.jj
s===$&&A.h()
p.uniform1i(s,7)
s=b2.jk
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.b(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.ie
s===$&&A.h()
p.uniform1i(s,11)
s=b2.ig
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.b(o.WebGL2RenderingContext.TEXTURE0))
s=A.b(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.d6>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.j9
h===$&&A.h()
p.uniform1i(h,0)
h=b2.eE+=b3;++b2.iT
s=b2.ja
s===$&&A.h()
p.uniform1f(s,h)
h=b2.i8
h===$&&A.h()
s=b2.iT
p.uniform2f(h,B.d.M(s*13,64),B.d.M(s*29,64))
s=b2.jb
s===$&&A.h()
p.uniform1f(s,0)
s=b2.jc
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.jd
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.je
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.eq
if(s.a===B.ah)b1=0*(1-s.b/1)
else b1=0
s=b2.ib
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.b(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.b(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.b(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.qS.prototype={
$0(){var s=this.a.az
s===$&&A.h()
return s.b},
$S:69}
A.qT.prototype={
$1(a){return this.a.h(0,A.v(a))},
$S:47}
A.tu.prototype={
gmO(){var s=this.b
s===$&&A.h()
return s},
hu(){var s,r,q,p,o,n,m=this,l=m.mP(),k=m.a
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
m.as=A.l(k.getUniformLocation(l,"uEye"))
m.at=A.l(k.getUniformLocation(l,"uFwd"))
m.ax=A.l(k.getUniformLocation(l,"uUp"))
m.ay=A.l(k.getUniformLocation(l,"uRight"))
m.ch=A.l(k.getUniformLocation(l,"uScale"))
m.CW=A.l(k.getUniformLocation(l,"uAspect"))
m.cx=A.l(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.l(k.getUniformLocation(l,"uDepthFar"))
m.db=A.l(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.l(k.getUniformLocation(l,"uModel"))
m.dy=A.l(k.getUniformLocation(l,"uInstanced"))
m.fr=A.l(k.getUniformLocation(l,"uFog"))
m.fx=A.l(k.getUniformLocation(l,"uLight"))
m.fy=A.l(k.getUniformLocation(l,"uLightColor"))
m.go=A.l(k.getUniformLocation(l,"uFogStart"))
m.id=A.l(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.l(k.getUniformLocation(l,"uAmbient"))
m.k2=A.l(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.l(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.H(s)
r=m.ok
B.a.H(r)
q=m.p1
B.a.H(q)
p=m.p2
B.a.H(p)
for(o=0;o<4;++o){n=""+o
B.a.l(s,A.l(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.l(r,A.l(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.l(q,A.l(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.l(p,A.l(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.l(k.getUniformLocation(l,"uFlicker"))
m.p4=A.l(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.l(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.l(k.getUniformLocation(l,"uFogDensity"))
m.rx=A.l(k.getUniformLocation(l,"uFogHeightFalloff"))
m.ry=A.l(k.getUniformLocation(l,"uFogGroundHeight"))
m.to=A.l(k.getUniformLocation(l,"uRainIntensity"))
m.x1=A.l(k.getUniformLocation(l,"uSurfaceWetness"))
m.x2=A.l(k.getUniformLocation(l,"uWindowWetness"))
m.xr=A.l(k.getUniformLocation(l,"uWall"))
m.y1=A.l(k.getUniformLocation(l,"uWallOn"))
m.y2=A.l(k.getUniformLocation(l,"uWallMid"))
m.bA=A.l(k.getUniformLocation(l,"uWallAmt"))
m.bk=A.l(k.getUniformLocation(l,"uWallScale"))
m.bl=A.l(k.getUniformLocation(l,"uGlass"))
m.dd=A.l(k.getUniformLocation(l,"uGlassOn"))
m.iW=A.l(k.getUniformLocation(l,"uGlassGain"))
m.iX=A.l(k.getUniformLocation(l,"uGlassFog"))
m.cr=A.l(k.getUniformLocation(l,"uSoft"))
m.cs=A.l(k.getUniformLocation(l,"uSoftOn"))
m.iY=A.l(k.getUniformLocation(l,"uInternal"))
m.iZ=A.l(k.getUniformLocation(l,"uLightProj0"))
m.j_=A.l(k.getUniformLocation(l,"uLightProj1"))
m.j0=A.l(k.getUniformLocation(l,"uLightProj2"))
m.oc=A.l(k.getUniformLocation(l,"uShadow0"))
m.od=A.l(k.getUniformLocation(l,"uShadow1"))
m.oe=A.l(k.getUniformLocation(l,"uShadow2"))
m.j1=A.l(k.getUniformLocation(l,"uShadowCasters"))
m.eF=A.l(k.getUniformLocation(l,"uMaterialAlbedo"))
m.eG=A.l(k.getUniformLocation(l,"uStaticMaterial"))
m.j2=A.l(k.getUniformLocation(l,"uShadowBias"))
m.j3=A.l(k.getUniformLocation(l,"uMaterialCount"))
s=m.j4
B.a.H(s)
r=m.j5
B.a.H(r)
q=m.j6
B.a.H(q)
p=m.j7
B.a.H(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.l(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.l(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.l(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.l(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.eF,12)},
dH(a){this.a.bindBuffer(A.b(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.fL(56)},
fL(a){var s=this,r=s.c
r===$&&A.h()
s.cb(r,3,a,0)
r=s.f
r===$&&A.h()
s.cb(r,3,a,12)
r=s.d
r===$&&A.h()
s.cb(r,4,a,24)
r=s.e
r===$&&A.h()
s.cb(r,1,a,40)
r=s.r
r===$&&A.h()
s.cb(r,3,a,44)},
cb(a,b,c,d){var s=this.a
A.af(s,"vertexAttribPointer",[a,b,A.b(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
mP(){return this.gmO().$0()}}
A.rM.prototype={
dr(a){return null},
ds(a){return null}}
A.a.prototype={
a7(a,b){return new A.a(this.a+b.a,this.b+b.b,this.c+b.c)},
ah(a,b){return new A.a(this.a-b.a,this.b-b.b,this.c-b.c)},
a8(a,b){return new A.a(this.a*b,this.b*b,this.c*b)},
cm(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bv(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.a(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gad(){var s=this,r=s.gt(0)
return r<1e-9?new A.a(0,0,0):new A.a(s.a/r,s.b/r,s.c/r)}}
A.l5.prototype={}
A.lu.prototype={}
A.ny.prototype={
q0(a){var s,r,q,p,o,n=B.k.aj(a.B(),null)
this.a.i5(n)
s=A.c(A.c(v.G.window).localStorage)
r=A.aD(s.getItem("quarantine.save.active"))
q=A.aD(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
pl(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.c(A.c(v.G.window).localStorage)
r=A.aD(s.getItem("quarantine.save.active"))
q=A.aD(s.getItem("quarantine.save.previous"))
p=this.fZ(r,a)
if(p!=null)return new A.eU(p,null)
o=this.fZ(q,a)
if(o!=null)return new A.eU(o,"recovered previous save")
if(r==null)return B.li
return B.lh}catch(n){return B.lg}},
fZ(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.i5(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.aj(q) instanceof A.H)return null
else throw q}}}
A.jW.prototype={
kS(a,b,c,d,e){if(this.a.length===0)throw A.d(B.fZ)
if(this.b<0)throw A.d(B.fx)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ag(q,t.i)
s=t.z
return A.b7(A.O(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cg.prototype={
v(){return"EndingKind."+this.b}}
A.oc.prototype={}
A.fB.prototype={
B(){var s=t.N
return A.O(["kind",this.a.b],s,s)}}
A.of.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:71}
A.bw.prototype={}
A.kL.prototype={
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
ow(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ah(0,new A.a(0,1.3499999999999999,0))
return!new A.jH(s,s.a7(0,new A.a(0,1.2000000000000002,0))).df(a,r)}}
A.qy.prototype={
B(){return A.mq(this.a)}}
A.fR.prototype={
B(){return A.O(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.r3.prototype={
i5(a){var s,r,q,p,o,n,m,l=B.k.aJ(a,null),k=t.f
if(!k.b(l))throw A.d(B.h9)
s=t.N
r=t.z
q=A.aO(l,s,r)
p=q.h(0,"version")
if(A.aN(p))o=p!==1&&p!==2
else o=!0
if(o)A.j(A.a6("unsupported save version "+A.x(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.j(B.fF)
k=A.aO(n,s,r)
return A.yU(A.aO(m,s,r),k,2)}}
A.eU.prototype={}
A.eE.prototype={
v(){return"GameSessionEventType."+this.b}}
A.k4.prototype={}
A.oz.prototype={}
A.oy.prototype={
gac(){var s=this.d
return new A.oz(s.a,s.b)},
gf1(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.O(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.O(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.O(["entryCount",m.e.b.a],k,t.S)
p=A.yt(m.c).B()
o=m.r
n=o.c
return new A.qy(A.mq(A.O(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.O(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
mY(a,b){if(!B.a.N(a.f,new A.oA(b)))return!1
this.z.mX(a,b)
return!0},
om(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.r(s).i("ax<2>")
q=A.J(new A.ax(s,r),r.i("p.E"))
B.a.U(q,new A.oB())
if(q.length===0)return null
s=A.F(q)
r=s.i("I<1>")
p=A.J(new A.I(q,s.i("n(1)").a(new A.oC()),r),r.i("p.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dV(a),r=t.sU,s=new A.aV(s,s.gt(0),r.i("aV<W.E>")),r=r.i("W.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.M(n,o.length)]
s=l.c
k=new A.cQ(a,l.a,s.length-1,B.a.gX(s).p(0))
j.k(0,a,k)
return k},
mU(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.am(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cW(B.hj)}if(n<a)this.cW(B.hk)},
kD(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.dA(a)&&s.kC(b)},
pm(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dR){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
kz(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.C4(j,A.ag(i.d,h).length)
if(a===B.dE)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.F(r)
A.C3(j,new A.I(r,q.i("n(1)").a(new A.oD(k)),q.i("I<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.ij,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aC(j.a/1*3)
B.a.l(r.r,new A.fT(q.a,a,b))
m=r.a
A.Cf(m,q.a,n,k.b,A.ag(m.d,h));++q.a
q.b=7
r.c=16
r.d=6
r.f=!1
m.ko(B.iZ)
s.r.nl(o,c)
l=B.c.aC(j.b/1*6)
if(l>0)r.dA(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ax(i,A.r(i).i("ax<2>")).N(0,new A.oE())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cW(B.hm)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cW(B.hl)},
cW(a){var s=this;++s.y
B.a.l(s.w,new A.k4())
B.a.l(s.x,A.C5(A.F3(a),s.b,s.y-1))}}
A.oA.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.oB.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:14}
A.oC.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:21}
A.oD.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.rN().kw(this.a.c,a.a)},
$S:75}
A.oE.prototype={
$1(a){return t.g.a(a).e},
$S:21}
A.nm.prototype={
fg(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.d(A.m("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.d(A.m("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.d(A.m("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
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
if(Math.abs(g-j)>0.0001)A.j(A.m(n+" origin.x mismatch: "+A.x(g)+" != "+A.x(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.m(n+" origin.y mismatch: "+A.x(j)+" != "+A.x(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.m(n+" origin.z mismatch: "+A.x(l)+" != "+A.x(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.m(n+" size.x mismatch: "+A.x(g)+" != "+A.x(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.m(n+" size.y mismatch: "+A.x(j)+" != "+A.x(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.m(n+" size.z mismatch: "+A.x(l)+" != "+A.x(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.d(A.m("window count mismatch for "+n))
for(n=A.F(j),i=n.i("n(1)"),n=n.i("I<1>"),f=0;f<l.length;l.length===k||(0,A.t)(l),++f){e=l[f]
d=A.bA(new A.I(j,i.a(new A.nr(e)),n),r)
if(d==null)throw A.d(A.m("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.j(A.m(c+" offset mismatch: "+A.x(h)+" != "+A.x(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.j(A.m(c+a+A.x(h)+" != "+A.x(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.j(A.m(c+a0+A.x(h)+" != "+A.x(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.d(A.m("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.d(A.m("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.j(A.m(q+a+A.x(n)+" != "+A.x(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.j(A.m(q+a0+A.x(n)+" != "+A.x(l)))
if(o.f!=m.at)throw A.d(A.m("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaR(a1).b!==B.a.gaR(s).b)throw A.d(A.m("stair manifest mismatch"))}}
A.nn.prototype={
$1(a){return A.BM(a,this.a)},
$S:76}
A.no.prototype={
$1(a){var s=this.a,r=A.my(a,"portal"),q=A.ep(r,"id"),p=A.ep(r,"a"),o=A.ep(r,"b"),n=A.jk(r,"width"),m=A.jk(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.v(r.h(0,"doorKit")):null
return new A.fk(q,p,o,n*s,m*s,l)},
$S:77}
A.np.prototype={
$1(a){var s=A.my(a,"stair")
A.ep(s,"id")
return new A.fm(A.ep(s,"portalId"))},
$S:78}
A.nq.prototype={
$1(a){return typeof a=="string"?a:A.jh("exterior cell")},
$S:79}
A.nr.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.fl.prototype={}
A.ns.prototype={
$1(a){var s=this.a,r=A.my(a,"window"),q=A.ep(r,"id"),p=A.jk(r,"offset")
A.jk(r,"sill")
return new A.fn(q,p*s,A.jk(r,"width")*s,A.jk(r,"height")*s)},
$S:81}
A.fn.prototype={}
A.fk.prototype={}
A.fm.prototype={}
A.vC.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.jH.prototype={
pJ(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.F(s)
q=new A.I(s,r.i("n(1)").a(new A.nI(e)),r.i("I<1>"))
p=!q.gu(0).m()?null:q.gS(0)
if(p==null){n.d=null
return}if(!(n.cV(b,p.f)&&a==="hall"))o=n.cV(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lv(p,B.c.E(d,0,1))},
oJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.hh(g,c,d)
s=h.lH(a,b,c,d)
if(s!=null){h.d=s
return h.hh(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.nd(Math.sqrt(r*r+q*q)/0.08))
o=d.a8(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.mF(a,n,m,o)
l=l||j.b
m=j.a
i=h.pi(a,n)
n=i==null?n:i}h.bg(m)
return new A.ky(m,n)},
lH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cV(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cV(c,l)){l=j<0||o
h=l}if(i||h)return new A.lv(m,i?0:1)}return null},
hh(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ah(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.E(a.b+o/p,0,1)
n=A.z6(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bg(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ky(n,k)},
cV(a,b){var s=a.ah(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
mF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cK(c,!1)
s=h.cZ(a,b,c,new A.a(g,0,0))
r=s.a
q=d.c
p=h.cZ(a,b,r,new A.a(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cK(p.a,!1)
n=c.a7(0,new A.a(0,0.35,0))
h.bg(n)
if(!h.df(a,b)){m=h.cZ(a,b,n,new A.a(g,0,0))
l=h.cZ(a,b,m.a,new A.a(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.a(g,r-j,q)
h.bg(i)
if(h.df(a,b))break}h.bg(k)
return new A.cK(k,!1)}}if(o)return new A.cK(r,!0)
if(!p.b)return new A.cK(p.a,!0)
h.bg(c)
return new A.cK(c,!0)},
cZ(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cK(c,!1)
s=c.a7(0,d)
this.bg(s)
if(this.df(a,b)){this.bg(c)
return new A.cK(c,!0)}return new A.cK(s,!1)},
bg(a){var s=a.ah(0,new A.a(0,1.3499999999999999,0))
this.a=s
this.b=s.a7(0,new A.a(0,1.2000000000000002,0))},
df(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aL(m)
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
return!this.mC(a,m,s)},
pi(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aL(k)
for(r=k.a,q=a.aE(r),p=J.S(q.a),q=new A.U(p,q.b,q.$ti.i("U<1>"));q.m();){o=p.gn()
n=o.bW(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hR(k,o,s)&&this.ly(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
mC(a,b,c){var s,r,q
for(s=a.aE(b.a),r=J.S(s.a),s=new A.U(r,s.b,s.$ti.i("U<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hR(b,q,c))return!0}return!1},
hR(a,b,c){var s,r,q,p=a.a,o=b.aM(p),n=b.ak(p)
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
ly(a,b,c){var s,r=this
switch(b.aM(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sn1(a){this.a=t.a7.a(a)}}
A.nI.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:83}
A.ky.prototype={}
A.cK.prototype={}
A.lv.prototype={}
A.hM.prototype={}
A.p3.prototype={
nl(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.N,r)
s=B.N[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
kx(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.c}return r},
ky(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.d}return r},
B(){return A.O(["landedCount",this.b],t.N,t.z)}}
A.r_.prototype={
l_(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.L()
o.c=new A.kf(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.t)(n),++q){p=n[q]
r.k(0,p.a,o.fN(p))}},
dj(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o)p.ol(r[o])
s.k(0,a,n.fN(m))},
fN(a){var s=A.AE(this.a,a),r=this.b,q=A.e([r.d_(s.a,1),r.d_(s.b,2),r.d_(s.c,0)],t.t),p=s.d
if(!B.r.gO(p))q.push(r.d_(p,0))
return q},
k7(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.Q
s=l.a
r=A.aL([s],t.N)
for(n=n.aE(s),q=J.S(n.a),n=new A.U(q,n.b,n.$ti.i("U<1>"));n.m();){p=q.gn()
o=p.bW(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
nV(a,b){var s,r,q,p,o=this,n=o.k7(a),m=o.b,l=o.c
l===$&&A.h()
l=t.ba.a(l.jW(n,b))
s=t.A_
m.ex=l.length<=4?A.ag(l,s):A.ag(A.iq(l,0,A.eq(4,"count",t.S),A.F(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)m.o1(r[p])}}}
A.a1.prototype={}
A.jZ.prototype={
goz(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.aa(A.e([r,q,p,o,n,m],t.n),new A.oh())&&o>=r&&n>=q&&m>=p}}
A.oh.prototype={
$1(a){return isFinite(A.bM(a))},
$S:5}
A.ke.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.M(s,3)!==0}else s=!0
if(s)throw A.d(A.z("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.z("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.goz())throw A.d(A.z("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.t)(l),++r){p=l[r]
if(B.a.N(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.p5()))throw A.d(A.z("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.z("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.z("QHMX index "+o+" exceeds vertex count",m))}}}
A.p5.prototype={
$1(a){return!isFinite(A.bM(a))},
$S:5}
A.p4.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bJ(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bJ(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bJ(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bJ(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bJ(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bJ(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a1(a,b,c,m,n,o,0,0,p),r=new A.a1(g,h,i,m,n,o,1,1,p)
this.ai(s,new A.a1(d,e,f,m,n,o,1,0,p),r)
this.ai(s,r,new A.a1(j,k,l,m,n,o,0,1,p))},
ai(a,b,c){var s=this,r=s.b
B.a.l(r,s.dU(a))
B.a.l(r,s.dU(b))
B.a.l(r,s.dU(c))},
dU(a){var s,r,q=B.a.a_(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
n7(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.ke(A.ag(g,t.hl),new Uint16Array(A.a2(this.b)),new A.jZ(s,r,q,p,o,n))
h.C()
return h}}
A.k_.prototype={}
A.wt.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ai.q(0,s))A.j(A.m("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:84}
A.vv.prototype={
$2(a,b){var s=t.Ez
return B.b.F(s.a(a).a,s.a(b).a)},
$S:85}
A.db.prototype={
q_(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.o(k,k),i=A.e([],t.Dl)
k=t.t
s=A.e([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.f(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iL(A.Hi(new A.ke(i,new Uint16Array(A.a2(s)),A.EN(i))),l.a,l.b,l.c,A.e([],k))}}
A.iL.prototype={}
A.eB.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.k0.prototype={
ne(a){var s
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
nf(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cm
break A}if("kitchen"===a||"cellar"===a){s=B.f4
break A}if("bathroom"===a){s=B.f5
break A}if("spare-room"===a){s=B.f6
break A}s=B.cm
break A}return this.ne(s)},
jn(a,b,c,d){d.i("p<0>").a(b)
t.Q.a(c)
return new A.cr(this.og(d.i("i(0)").a(a),b,c,d),d.i("cr<0>"))},
og(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$jn(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.aa(0,B.ai.gaw(B.ai)))throw A.d(A.z("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.ck(l,l.r,l.e,r.$ti.i("ck<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ai.q(0,j))throw A.d(A.m("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ef.prototype={
cg(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.v9.prototype={
$1(a){var s=this
return t.xT.a(a).cg(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:44}
A.v8.prototype={
$1(a){return t.xT.a(a).cg(0,(this.a+this.b)*0.5,this.c)},
$S:44}
A.dp.prototype={
v(){return"FocusKind."+this.b}}
A.dY.prototype={}
A.r0.prototype={}
A.un.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:87}
A.um.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.vt.prototype={
$1(a){return B.d.E(B.c.aC(a*this.a),0,255)},
$S:27}
A.ee.prototype={}
A.h2.prototype={}
A.p1.prototype={
la(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.pi(1.5),a4=this.b,a5=A.at(a4,!0,t.U)
B.a.H(a4)
s=A.e([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.t)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.t)(i),++g){f=i[g]
j.push(new A.bc(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.t)(h),++g){d=h[g]
i.push(new A.bo(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.t)(e),++g){b=e[g]
h.push(new A.bq(b.a,b.b,a3.$1(b.c)))}s.push(new A.aY(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.at(a4,!0,t.T)
B.a.H(a4)
s=A.e([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bE(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dD(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
lb(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.pj(),a7=this.b,a8=A.at(a7,!0,t.U)
B.a.H(a7)
s=A.e([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.t)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.e([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.t)(h),++f){e=h[f]
i.push(new A.bc(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.e([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.t)(g),++f){c=g[f]
h.push(new A.bo(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.e([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.t)(d),++f){a=d[f]
g.push(new A.bq(a.a,a.b,a6.$1(a.c)))}d=A.e([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.t)(b),++f){a1=b[f]
d.push(new A.dm(a1.a,a1.b*1.5))}s.push(new A.aY(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.J(a7,s)
a7=this.c
a2=A.at(a7,!0,t.T)
B.a.H(a7)
s=A.e([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bE(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.J(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.e([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.t)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dD(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
lO(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.a
if(q.V(n))throw A.d(A.m("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){m=s[p]
n=m.a
if(q.V(n))throw A.d(A.m("duplicate portal "+n))
q.k(0,n,m)}},
mM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
mK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.o(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.hQ(o,i,h,g,f,e)
a5.fI(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.m(l+" references invalid portal "+d))
i=c.aM(l)
h=c.ak(l)
g=c.w
f=c.x
a5.hQ(o,i,h,g,0,f)
a5.fI(a6,l,c.aM(l),c.ak(l),c.ak(l)+g,0,f)}}for(s=new A.K(a6,a6.$ti.i("K<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.cc(a)
r.U(a,new A.pk())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.m("overlapping apertures on "+b.a))}}},
hQ(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.m||b===B.l
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
fI(a,b,c,d,e,f,g){J.fh(t.aD.a(a).cD(b+":"+c.b,new A.ph()),new A.iU([d,e,f,g]))},
aL(a){var s=a.c,r=this.r,q=a.a
return new A.a(s.a+r.kx(q),s.b+r.ky(q),s.c)},
aE(a){var s=this.c,r=A.F(s)
return new A.I(s,r.i("n(1)").a(new A.pl(a)),r.i("I<1>"))},
ph(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.am(a,"roomId","not a portal endpoint"))
r=this.aL(o)
q=b.ak(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aM(a).a){case 0:s=new A.a(s.a+q,p,s.c)
break
case 2:s=new A.a(s.a+q,p,s.c+r.c)
break
case 1:s=new A.a(s.a+r.a,p,s.c+q)
break
case 3:s=new A.a(s.a,p,s.c+q)
break
default:s=null}return s},
gpZ(){return B.a.bD(this.b,0,new A.pm(),t.S)},
jI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.W
s=A.e([new A.aX(a,B.W)],t.nR)
r=A.aL([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.pq(s,0)
n=o.a
m=o.b
for(l=this.aE(n),k=J.S(l.a),l=new A.U(k,l.b,l.$ti.i("U<1>"));l.m();){j=k.gn()
i=j.bW(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.J(m,p)
h.push(j)
B.a.l(s,new A.aX(i,h))}}}return B.W}}
A.pi.prototype={
$1(a){var s=this.a
return new A.a(a.a*s,a.b,a.c*s)},
$S:43}
A.pj.prototype={
$1(a){return a.a8(0,1.5)},
$S:43}
A.pk.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.F(a.a[0],b.a[0])},
$S:90}
A.ph.prototype={
$0(){return A.e([],t.wx)},
$S:91}
A.pl.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:92}
A.pm.prototype={
$2(a,b){return A.b(a)+t.U.a(b).e.length},
$S:93}
A.og.prototype={}
A.rN.prototype={
kw(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.aa(s,new A.rO())}else s=!1
return s}}
A.rO.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.p6.prototype={
pe(a){var s=this.e,r=A.F(s)
return new A.I(s,r.i("n(1)").a(new A.p9(a)),r.i("I<1>"))},
d0(a){return B.a.aX(this.d,new A.p7(a),new A.p8(a))},
fg(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.d(A.m("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.d(A.m("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.d(A.m("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a0(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.d(A.m("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.m("invalid bounds for inventory asset "+m))}j=A.a0(s)
i=A.a0(s)
h=A.a0(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.t)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.d(A.m("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.d(A.m(a7+m+" references "+l))
n=a6.d0(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.Br()
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
a4=g.jP(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.m(a7+m+" escapes "+f.a))}}}
A.p9.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:94}
A.p7.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:95}
A.p8.prototype={
$0(){return A.j(A.m("inventory asset missing: "+this.a))},
$S:6}
A.cX.prototype={}
A.cA.prototype={
jP(a,b){var s=this.f.c.b*b,r=a.f
return new A.a(r.a.b*s,r.b.b*s,0)}}
A.pw.prototype={}
A.pu.prototype={}
A.vB.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.pv.prototype={
B(){var s,r,q,p=A.o(t.N,t.z),o=this.a,n=A.r(o).i("ad<1>")
n=A.J(new A.ad(o,n),n.i("p.E"))
B.a.Z(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.t)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
fa(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.fi)
s=t.X
r=A.aO(a,s,s)
s=this.a
s.H(0)
for(q=new A.K(r,A.r(r).i("K<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aN(o)||o<0)throw A.d(B.fy)
s.k(0,n,o)}}}
A.d_.prototype={}
A.kf.prototype={
jW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.ea)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.d_(new A.a(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.mu(j),0.06))}}B.a.U(s,new A.pa(b))
return A.iq(s,0,A.eq(4,"count",t.S),t.A_).c_(0)},
mu(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.pa.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.F(a.a.ah(0,s).gt(0),b.a.ah(0,s).gt(0))},
$S:97}
A.hH.prototype={
v(){return"Floor."+this.b}}
A.dX.prototype={
v(){return"Facing."+this.b}}
A.bc.prototype={
skv(a){this.w=A.R(a)}}
A.bE.prototype={
bW(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aM(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.am(a,"roomId","not an endpoint of "+s.a))},
ak(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.am(a,"roomId","not an endpoint of "+s.a))}}
A.bo.prototype={}
A.bq.prototype={}
A.dm.prototype={}
A.dD.prototype={}
A.aY.prototype={}
A.pc.prototype={
o4(a){return B.a.aX(this.c,new A.pd(a),new A.pe(a))},
pW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.m("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.m("soundscape source changed: "+f))
f=t.N
s=A.a0(f)
f=A.o(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){m=r[p]
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
if(k.gO(k)||k.gaG().N(0,new A.pf()))throw A.d(A.m("sound emitter "+l+" has no usable cues"))
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
A.pd.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:98}
A.pe.prototype={
$0(){return A.j(A.m("sound emitter missing: "+this.a))},
$S:6}
A.pf.prototype={
$1(a){return B.b.bo(A.v(a)).length===0},
$S:3}
A.cW.prototype={}
A.p2.prototype={
e5(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.am(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.iY}q=A.e([],t.Fm)
p=B.c.aY(r)+1
o=B.c.aY(b)
for(n=p;n<=o;++n){m=B.d.M(n,24)
B.a.l(q,new A.eH("tick"))
if(B.d.M(m,3)===0){B.a.l(q,new A.eH("cuckoo"))
B.a.l(q,new A.eH("bell"))}if(B.d.M(m,6)===0)B.a.l(q,new A.eH("chime"))}l.b=b
return q}}
A.eH.prototype={}
A.pb.prototype={
e5(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.am(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.iX}q=A.e([],t.vS)
for(p=B.c.aY(r)+1;p<=B.c.aY(b);++p){o=B.d.M(p,24)
n=B.d.M(o,4)
if(n===2)B.a.l(q,B.hO)
if(B.d.M(o,3)===1)B.a.l(q,B.hQ)
if(B.d.M(o,8)===5)B.a.l(q,B.hT)
if(B.d.M(o,5)===0)B.a.l(q,B.hP)
if(B.d.M(o,7)===3)B.a.l(q,B.hU)
if(n===1)B.a.l(q,B.hR)
if(B.d.M(o,6)===4)B.a.l(q,B.hS)}m.b=b
return q}}
A.cV.prototype={}
A.vA.prototype={
$1(a){return typeof a!="number"},
$S:16}
A.pg.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.o(m,l)
for(s=n.a,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.O(["open",o.a,"locked",o.b],m,r))}l=A.o(m,l)
for(s=n.c,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.O(["lit",o.a,"examined",o.b],m,r))}return A.O(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a0(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)d.l(0,s[q].a)
r=A.a0(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.t)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l)r.l(0,n[l].a)
e=A.a0(e)
for(q=0;q<p.length;p.length===n||(0,A.t)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.xC(new A.ad(o,A.r(o).i("ad<1>")),d)){d=f.b
if(A.xC(new A.ad(d,A.r(d).i("ad<1>")),r)){d=f.c
e=!A.xC(new A.ad(d,A.r(d).i("ad<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.fS)
e=f.d
if(e<0||e>2)A.j(B.fp)
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
A.i6.prototype={
B(){return A.O(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hV.prototype={
B(){return A.O(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bn.prototype={}
A.ob.prototype={
$1(a){return this.a.q(0,A.v(a))},
$S:3}
A.e_.prototype={
v(){return"Hand."+this.b}}
A.to.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
fz(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kt.prototype={
B(){var s,r,q,p=t.N,o=A.o(p,t.D)
for(s=this.a,r=0;r<5;++r){q=B.z[r]
o.k(0,q,s.h(0,q))}return A.O(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.P(B.z,t.oI.a(new A.pS(this)),t.jT).a_(0," \xb7 ")}}
A.pR.prototype={
$2(a,b){return new A.M(A.v(a),A.v(b),t.q)},
$S:99}
A.pS.prototype={
$1(a){return this.a.a.h(0,A.v(a))},
$S:47}
A.bZ.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.O(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.pz.prototype={
cf(a){t.G.a(a)
return a.a===5&&B.a.aa(B.z,new A.pG(this,a))},
fJ(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.cf(b))return null
s=this.e++
r=new A.bZ(s,a,A.e([A.pQ(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
eb(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.cf(b))return!1
B.a.l(s.c,A.pQ(b,c,B.aC))
return!0},
mT(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.cf(b))return!1
s.r=A.pQ(b,0,B.cM)
return!0},
ko(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.H(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.V(p)&&!B.a.q(s,p))B.a.l(s,p)}},
pX(a){var s
if(!this.b.V(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.r(n).c)
B.a.Z(n)
s=A.e([],t.cs)
for(r=q.b,r=new A.an(r,r.r,r.e,A.r(r).i("an<2>"));r.m();)s.push(r.d.B())
return A.O(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pG.prototype={
$1(a){var s
A.v(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.ht.prototype={
v(){return"BackendFallbackReason."+this.b}}
A.nt.prototype={
i7(a,b){if(a.a!==B.a1)return a
return new A.fo(B.bz,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.nu.prototype={
ec(a,b){if(a.a===B.a1&&!a.d)return new A.qt(b,a.B(),B.du)
return new A.pK(b,a.d,a.e,a.B(),B.du)},
nO(a){return this.ec(a,null)}}
A.fo.prototype={
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
A.nv.prototype={
cI(a){var s,r,q,p,o=null,n=a==null?o:B.b.bo(a).toLowerCase()
if(n==null||n.length===0)return B.e5
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.fo(B.a1,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.fo(B.bz,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.pL.prototype={}
A.pK.prototype={
gbx(){var s=this,r=s.b,q=r==null?null:r.gbx()
if(q==null)q=A.qV("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.jX(s.e)
return r},
bm(){if(this.f===B.dv)throw A.d(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.bm()
this.f=B.A},
bb(a,b){var s
if(a<=0||b<=0)throw A.d(A.z("legacy surface size must be positive",null))
if(this.f!==B.A)A.j(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.bb(a,b)},
bd(a){var s
if(this.f!==B.A)A.j(A.m("legacy backend is not ready"))
B.k.aj(A.O(["backend","legacy","interpolation",0,"facts",A.mq(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.bd(a)},
bE(a){var s
if(this.f!==B.A)A.j(A.m("legacy backend is not ready"))
B.k.aj(A.O(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bE(a)}}
A.qu.prototype={}
A.qt.prototype={
gbx(){var s=this.b,r=s==null?null:s.gbx()
if(r==null)r=A.qV("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.jX(this.c)
return s},
bm(){if(this.d===B.dv)throw A.d(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.bm()
this.d=B.A},
bb(a,b){var s
if(this.d!==B.A)A.j(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.z("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.bb(a,b)},
bd(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.aJ){p=q==null
if(p||!q.ge8()){if(s.d!==B.aJ)A.j(A.m("pixeldart backend is not context-lost"))
s.d=B.A
if(!p)q.jM()}p=s.d
if(p===B.aJ)return}if(p!==B.A)A.j(A.m(r))
B.k.aj(A.O(["backend","pixeldart","interpolation",0,"facts",A.mq(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.ge8()){if(s.d!==B.A)A.j(A.m(r))
s.d=B.aJ
q.jy()
return}q.bd(a)}},
bE(a){var s
if(this.d!==B.A)A.j(A.m("pixeldart backend is not ready"))
B.k.aj(A.O(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bE(a)}}
A.qv.prototype={
nb(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c9.cI(a)
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
o=A.J(o,A.r(o).c)
B.a.Z(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.t)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.kJ.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qw.prototype={
B(){var s=this
return A.O(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qx.prototype={
i0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(c<=0||b<=0)throw A.d(A.z("surface dimensions must be positive",null))
s=a.a
A:{if(B.a0===s){r=new A.f9(540,960)
break A}if(B.P===s){r=new A.f9(360,640)
break A}r=new A.f9(216,384)
break A}q=r.b
r=r.a
p=B.c.E(c/q,0,1)
o=B.c.E(b/r,0,1)
n=p<o?p:o
q=this.fM(B.c.aC(q*n),320,c)
r=this.fM(B.c.aC(r*n),180,b)
m=s===B.a0
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
return new A.kV(a,q,r,k,i,h,g,f,e,B.eQ)},
fM(a,b,c){if(c<b)return c
return B.d.E(a,b,c)}}
A.ks.prototype={}
A.qD.prototype={
pU(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b7
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b7
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.ks(!0,B.c.E(q*(0.6+b*0.6),0,1),0.82+s.aN()*0.1,0.9+s.aN()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aN()*0.15
p.e=(0.6+s.aN()*2.8)/0.343
p.b=16-b*11+s.aN()*6}}}
A.ic.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eS.prototype={
v(){return"RendererBackendState."+this.b}}
A.qW.prototype={}
A.kW.prototype={}
A.qU.prototype={
kZ(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.z("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.z("renderer provenance values must be non-empty",null))}},
jX(a){var s=this
return A.yR(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
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
A.qX.prototype={}
A.rH.prototype={}
A.cI.prototype={
v(){return"ShaderDebugMode."+this.b},
gnU(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dC.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e8.prototype={
gjp(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.af(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.af(r,2)
else return B.c.af(r,3)}}}
A.rI.prototype={
gcw(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.f(B.bm,p)
s=B.bm[p]
p=this.f
p===$&&A.h()
r=A.F(p)
q=r.i("I<1>")
p=A.J(new A.I(p,r.i("n(1)").a(new A.rL(s)),q),q.i("p.E"))
return p},
gd3(){var s,r=this.gcw(),q=r.length
if(q===0)return null
s=B.d.E(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.f(r,s)
return r[s]},
pv(){var s,r,q,p,o
if(this.b===4)this.e=B.aL
else for(s=this.gcw(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
pt(){var s,r,q,p
this.e=B.aL
s=this.f
s===$&&A.h()
r=0
for(;r<33;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
P(a){var s,r,q=this.f
q===$&&A.h()
s=A.F(q)
r=A.bA(new A.I(q,s.i("n(1)").a(new A.rK(a)),s.i("I<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
b2(a){var s,r,q=this.f
q===$&&A.h()
s=A.F(q)
r=A.bA(new A.I(q,s.i("n(1)").a(new A.rJ(a)),s.i("I<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.rL.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:22}
A.rK.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:22}
A.rJ.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:22}
A.bT.prototype={
v(){return"SleepQuality."+this.b}}
A.bH.prototype={
v(){return"SleepLocation."+this.b}}
A.fT.prototype={}
A.o3.prototype={
dA(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
kC(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
i.push(A.O(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.O(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.o4.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:101}
A.o5.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:102}
A.kj.prototype={
v(){return"InteractionType."+this.b}}
A.f1.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.tt.prototype={}
A.f0.prototype={}
A.jM.prototype={}
A.pn.prototype={}
A.pr.prototype={
fm(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.an(s,s.r,s.e,A.r(s).i("an<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.U(p,new A.ps())
return p},
nk(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.mT
s=t.N
r=A.a0(s)
q=A.a0(s)
for(s=n.ga2(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gX(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.f0(B.aP,r)
s=r.a
o=B.a.gX(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gX(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.f0(B.dU,r)
return new A.f0(B.bU,r)},
ml(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jM(e,!1,B.mS,null)
s=p.d===c
r=this.nk(p,d)
q.pX(e)
return new A.jM(e,s,r,r.a===B.aP&&s?'The world says "'+d.c+'". The entry says "'+B.a.gX(p.c).p(0)+'".':null)},
nP(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aP)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.pn(B.a.gX(s.c).p(0)+" but "+A.x(a.f))}}
A.ps.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.F(s.a(b).a,a.a)},
$S:14}
A.cn.prototype={
v(){return"RuptureStep."+this.b}}
A.r1.prototype={}
A.d1.prototype={}
A.r2.prototype={
gfA(){var s=B.bq.h(0,this.a)
return s==null?0:s},
kG(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.cX
r=A.xo(b)
s=q.c
B.a.H(s)
B.a.J(s,r)
B.a.H(q.d)
q.a=B.ah
q.b=0
q.e=!1
return A.e([B.ez],t.xB)},
e4(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.z("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.cX
s=A.e([],t.xB)
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
if(l.a===B.a2)l.mH(s)
p=l.b
o=B.bq.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.d1())
if(q===B.a2){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.ey)}else{p=q.a+1
if(!(p<7))return A.f(B.cV,p)
l.a=B.cV[p]
l.b=0
B.a.l(s,new A.d1())}}}return A.ag(s,t.F3)},
B(){var s=this,r=t.N
return A.O(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ag(s.c,r),"extinguishedMantles",A.ag(s.d,r),"completed",s.e],r,t.z)},
mH(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.E(B.c.aY(l.b/l.gfA()*A.ag(s,r).length),0,A.ag(s,r).length)
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
B.a.l(a,new A.d1())}}}
A.k5.prototype={
gcK(){var s=this.b
if(s<7||s>19)return 0
return B.c.E((s-7)/12,0,1)},
gi4(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.E((s-5.5)/15,0,1))}}
A.f_.prototype={
B(){var s=this
return A.O(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.tp.prototype={
eQ(a){var s,r
if(a<1||a>this.b.length)throw A.d(A.aW(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]}}
A.va.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.E(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.f_(r,q,A.AG(B.c.af(s,2)),A.AG(B.c.af(12-(r-1)*0.11000000000000001,2)))},
$S:103}
A.vi.prototype={
$1(a){var s=B.d.cY(this.a,a)&255
return B.d.E(B.c.aC(s+((B.d.cY(this.b,a)&255)-s)*this.c),0,255)},
$S:27}
A.q7.prototype={
aZ(a,b){var s=this.b
if(s.V(a))s=s.h(0,a)===b
else s=!1
return s},
mX(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gK(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.r(k).i("K<1,2>")
k=A.J(new A.K(k,j),j.i("p.E"))
B.a.U(k,new A.q9())
j=t.N
k=A.wL(k,j,j)
s=this.b
r=A.r(s).i("K<1,2>")
s=A.J(new A.K(s,r),r.i("p.E"))
B.a.U(s,new A.qa())
s=A.wL(s,j,j)
r=A.o(j,t.P)
q=this.c
p=A.r(q).i("K<1,2>")
q=A.J(new A.K(q,p),p.i("p.E"))
B.a.U(q,new A.qb())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.t)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.O(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.O(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.q9.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.qa.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.qb.prototype={
$2(a,b){var s=t.gJ
return B.b.F(s.a(a).a,s.a(b).a)},
$S:105}
A.cQ.prototype={
B(){var s=this
return A.O(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bC.prototype={
B(){var s=this
return A.O(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.qr.prototype={
fk(){var s="denise.pears",r=A.e([],t.xz),q=this.a
if(q.aZ("ashworth.compact","accepted"))B.a.l(r,B.kp)
if(q.aZ(s,"taken"))B.a.l(r,B.kt)
else if(q.aZ(s,"left"))B.a.l(r,B.kq)
if(q.aZ("sylvia.certificate","granted"))B.a.l(r,B.ks)
if(q.aZ("residue.coal","cellar"))B.a.l(r,B.ko)
if(q.aZ("telegram.08","read"))B.a.l(r,B.kn)
if(q.aZ("truth.shawl","home"))B.a.l(r,B.km)
if(q.aZ("sowerby.paraffin","received"))B.a.l(r,B.kr)
if(q.aZ("inspector.proclamation","acknowledged"))B.a.l(r,B.kl)
return r},
k6(a){var s=this.fk(),r=A.F(s),q=r.i("I<1>")
s=A.J(new A.I(s,r.i("n(1)").a(new A.qs(a)),q),q.i("p.E"))
return s}}
A.qs.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:40}
A.rS.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fV(e.a),c=t.N,b=t.P,a=A.o(c,b)
for(s=e.b,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.mN(q,r.b))}s=A.fV(e.r)
q=A.fV(e.w)
p=A.fV(e.x)
o=A.o(c,t.rW)
for(n=e.as,n=new A.K(n,A.r(n).i("K<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.S(l.b);i.m();){h=i.gn()
j.push(A.O(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.o(c,b)
for(m=e.at,m=new A.K(m,A.r(m).i("K<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.o(c,b)
for(m=e.ax,m=new A.K(m,A.r(m).i("K<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.O(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
mN(a,b){var s,r=A.fV(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fV(q.bU(0,new A.rT(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gY(s))r.k(0,"_ambient",A.fV(s.bU(0,new A.rU(),t.S,t.z)))
return r}}
A.rT.prototype={
$2(a,b){return new A.M(A.b(a),t.BX.a(b).B(),t.pr)},
$S:107}
A.rU.prototype={
$2(a,b){return new A.M(A.b(a),t.vw.a(b).B(),t.pr)},
$S:108}
A.eZ.prototype={
B(){return A.O(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eY.prototype={
B(){return A.O(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.iw.prototype={
B(){var s=t.N
return A.O(["field",this.a,"value",this.b],s,s)}}
A.lq.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.O(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eR.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gY(s))q.k(0,"effects",s)
return q}}
A.d9.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gY(s))q.k(0,"when",s)
return q}}
A.rV.prototype={
cB(){var s=0,r=A.bh(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$cB=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ap(A.b3(A.c(A.c(v.G.window).fetch("res/text.json")),t.m),$async$cB)
case 6:n=b
j=t.N
s=7
return A.ap(A.b3(A.c(n.text()),j),$async$cB)
case 7:m=b
l=A.GJ(m)
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
g=A.aO(g,j,t.z)}else g=A.o(j,t.z)
o.Q=h.a(g)
if(i.b(J.aG(l,"variants"))){g=J.aG(l,"variants")
if(g==null)g=i.a(g)
g=A.aO(g,j,t.z)}else g=A.o(j,t.z)
o.as=h.a(g)
if(i.b(J.aG(l,"residues"))){g=J.aG(l,"residues")
i=g==null?i.a(g):g
j=A.aO(i,j,t.z)}else j=A.o(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.aj(e)
j=A.x(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bf(null,r)
case 1:return A.be(p.at(-1),r)}})
return A.bg($async$cB,r)},
k5(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gK().dn(0,new A.rW())
r=p.$ti
q=t.N
return A.wL(new A.cD(p,r.i("M<i,i>(1)").a(new A.rX()),r.i("cD<1,M<i,i>>")),q,q)}return null},
fl(a,b){var s=this.k5(a)
return s==null?null:s.h(0,b)},
ka(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.h()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.e([],t.kv)
for(o=J.S(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.o(n,n)
if(f.b(l))for(j=l.gK(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.v(i.b))}B.a.l(p,new A.eR(A.v(m.h(0,"id")),A.v(m.h(0,"label")),A.v(m.h(0,"reply")),A.b7(k,n,n)))}if(p.length<2)return g
return new A.lq(r,a,b,c,d,A.ag(p,t.Y))},
k9(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.ar(p)||o!==B.c.ar(o))return n
return new A.eZ(B.c.ar(p),B.c.ar(o))},
k8(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.ar(p)||typeof o!="string"||typeof n!="string")return m
return new A.eY(B.c.ar(p),o,n)},
pY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.o(a5,t.ee),a7=A.o(a5,t.tQ),a8=A.o(a5,t.pG),a9=t.a,b0=A.o(a5,t.gt),b1=A.o(a5,t.sy),b2=A.o(a5,t.aS),b3=A.o(a5,a5),b4=a1.b
b4===$&&A.h()
b4=new A.K(b4,A.r(b4).i("K<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.o(a3,a4)
for(o=o.gK(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dy(l,null):null
if(k==null||!q.b(m.b))continue
j=A.o(a5,a5)
for(m=q.a(m.b).gK(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.v(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.o(a3,r)
for(m=n.$ti.i("ck<1>"),l=new A.ck(n,n.r,n.e,m);l.m();){i=l.d
g=a1.k9(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.o(a3,s)
for(m=new A.ck(n,n.r,n.e,m);m.m();){l=m.d
e=a1.k8(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.h()
b4=new A.an(b4,b4.r,b4.e,A.r(b4).i("an<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.ka(A.v(d.h(0,"visitor")),B.c.ar(A.al(d.h(0,"day"))),A.v(d.h(0,"tier")),B.c.ar(A.al(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.h()
b4=new A.an(b4,b4.r,b4.e,A.r(b4).i("an<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.o(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gK(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.v(r.b))}s=A.v(d.h(0,"id"))
b2.k(0,s,new A.d9(s,A.v(d.h(0,"target")),A.v(d.h(0,a2)),A.b7(b,a5,a5)))}b4=a1.at
b4===$&&A.h()
b4=new A.K(b4,A.r(b4).i("K<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.h()
b4=new A.K(b4,A.r(b4).i("K<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.S(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.iw(A.v(a0.h(0,"field")),A.v(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rS(A.o(a3,a4),a6,a7,a8,A.o(a5,a9),A.o(a5,a9),A.o(a3,a9),A.o(a3,a9),A.o(a3,a9),A.o(a5,a9),A.o(a5,a9),A.o(a5,a9),b0,b1,b2,b3)}}
A.rW.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:109}
A.rX.prototype={
$1(a){t.AC.a(a)
return new A.M(A.v(a.a),A.v(a.b),t.q)},
$S:110}
A.ju.prototype={
bR(a,b,c){var s=B.b.bo(a),r=B.b.bo(c)
if(r.length===0)return""
if(b||this.a===B.bW)return s.length===0?r:s+": "+r
if(this.a===B.bV)return r
return s.length===0?r:s+": "+r},
jo(a,b){return this.bR(a,!1,b)}}
A.wA.prototype={}
A.cO.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dO.prototype={
ci(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dO(q,p,o,n,m)},
nJ(a){var s=null
return this.ci(s,s,s,a,s)},
nM(a){var s=null
return this.ci(s,s,s,s,a)},
nF(a){var s=null
return this.ci(s,s,a,s,s)},
nD(a){var s=null
return this.ci(s,a,s,s,s)},
no(a){var s=null
return this.ci(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.O(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mP.prototype={
$1(a){return a==null?null:A.R(a)},
$S:111}
A.mN.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:39}
A.mO.prototype={
$0(){return A.j(B.h6)},
$S:6}
A.n_.prototype={
c1(a,b){var s,r=this,q=r.e.jo(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aP(q)
A.b(A.c(v.G.window).setTimeout(A.zY(new A.n1(r)),7000))},
aP(a){var s,r,q=this
if(!q.c||B.b.bo(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.b(A.c(v.G.window).setTimeout(A.zY(new A.n0(q,s)),4200))}}
A.n1.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:113}
A.n0.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cx.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cP.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.dk.prototype={
v(){return"AudioReverbMode."+this.b}}
A.dj.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dP.prototype={
d2(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dP(r,q,p,a==null?s.e:a)},
nC(a){return this.d2(null,null,a,null)},
nt(a){return this.d2(null,a,null,null)},
nH(a){return this.d2(null,null,null,a)},
ns(a){return this.d2(a,null,null,null)},
B(){var s=this
return A.O(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.nc.prototype={
$1$2(a,b,c){return B.a.aX(c.i("p<0>").a(a),new A.nd(b,c),new A.ne(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:114}
A.nd.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.ne.prototype={
$0(){return A.j(A.a6("unsupported audio option: "+A.x(this.a),null,null))},
$S:6}
A.nx.prototype={
fe(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.jo(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.nA.prototype={
$1(a){return this.a.$0()},
$S:2}
A.nE.prototype={
$1(a){return this.a.$1(A.R(this.b.checked))},
$S:2}
A.nD.prototype={
$1(a){var s=A.eO(A.v(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.nC.prototype={
$1(a){A.v(a)
return a.length!==0&&!B.b.W(a,"brush-state-")},
$S:3}
A.dR.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dS.prototype={
v(){return"BrushComponentState."+this.b}}
A.b5.prototype={
gmR(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bo(s.a).length===0||B.b.bo(s.c).length===0)throw A.d(B.fX)
if(s.e===B.c6&&s.b!==B.c5)throw A.d(B.fz)}}
A.nG.prototype={
bQ(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.h()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cZ(o+c,n)
l=new A.cZ(s+p,n)
k=s-p
j=new A.cZ(k,r-c)
i=new A.cZ(k-c,r)
h=new A.cZ(q-p,r)
g=new A.cZ(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.h4(A.e([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.h4(A.e([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aV(a,b,c,d,e,f,g,h,i){return this.bQ(a,b,c,d,e,!0,f,g,h,i)},
nW(a,b,c,d,e,f,g,h,i){return this.bQ(a,b,14,c,d,e,f,g,h,i)},
o0(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.h()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eg()
s.c3(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aN()-0.5)*8
l=s.aN()
k=s.aN()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
i6(a,b,c,d,e){var s,r,q=this.b
q===$&&A.h()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.h3(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.h3(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.x(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
nZ(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.h()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.al(A.c(q.measureText(a.toUpperCase())).width)+70)
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
nY(c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2="rgba(12, 10, 14, 0.92)",c3="#f5f0e6",c4='px "Cinzel", serif',c5=c8.r
if(!c5&&c8.b.length===0&&c8.d.length===0)return
s=c7<640||c6<540
r=Math.min(c7*(s?0.92:0.85),780)
q=s?126:140
p=c7*0.5
o=Math.min(c6*0.74,c6-q*0.58)
c1.aV(c3,2.5,16,c2,q,-0.05,r,p,o)
n=c8.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c1.b
l===$&&A.h()
l.font="bold "+(s?11:13)+c4
k=Math.min(r-28,Math.max(180,A.al(A.c(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c1.bQ(c3,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+c4
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=c8.gpL()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c1.mQ(l,d,i+32,f+32,r-64,24)
l.restore()
i=c8.d
c=i.length
if(c!==0){b=Math.min(c7*(s?0.86:0.68),420)
a=s?31:34
a0=s?35:39
a1=c*a0
a2=Math.max(12+a1*0.5,f-a1-12)
l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="bottom"
l.fillText("YOUR RESPONSE",p,a2-4)
l.restore()
for(c5=b*0.5,j=c1.d,g=a*0.5,f=c8.f,a3=c8.e,a4=0;a4<c;a4=a6){if(!(a4<i.length))return A.f(i,a4)
a5=i[a4]
a6=a4+1
a7=a2+a4*a0+g
a8=f===a4
a9=a3===a4
b0=!a8
b1=p+(!b0||a9?18:0)
b2=b1-c5
B.a.l(j,new A.ex("choice-"+a6,a4,b2,a7-g,b,a))
if(a9)b3="#d32f2f"
else b3=a8?"#1a1820":c2
b4=!b0||a9?"#c49a45":c3
c1.aV(b4,!b0||a9?2.5:1.5,8,b3,a,-0.06,b,b1,a7)
b5=b2+24
b0=!a9
c1.i6(!b0||a8,a6,24,b5,a7)
l.save()
b6=!b0||a8?"#ffd54f":c3
l.fillStyle=b6
l.font="bold "+(s?12:13)+c4
l.textAlign="left"
l.textBaseline="middle"
l.fillText(a5,b5+22,a7)
l.restore()}}else if(c5&&c8.b.length!==0){b7=s?104:118
b8=s?28:30
b9=p+j-b7*0.62
c0=o+g-b8*0.72
B.a.l(c1.d,new A.ex("dialogue-continue",-1,b9-b7*0.5,c0-b8*0.5,b7,b8))
c1.aV("#c49a45",1.5,5,"#1a1820",b8,-0.04,b7,b9,c0)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+c4
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",b9,c0)
l.restore()}},
nX(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.f(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bQ(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
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
o_(c2,c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5="rgba(12, 10, 14, 0.92)",b6="#d32f2f",b7="#f5f0e6",b8="#c49a45",b9="#1a1820",c0="#8c887e",c1=c4.d
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
c1.fillStyle="rgba(10, 8, 12, "+A.x(0.75*s)+")"
c1.fillRect(0,0,c3,c2)
b4.aV(b6,3,18,b5,q,-0.025,r,o,n)
b4.o0(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
b4.aV(b7,2,8,b6,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bm[g]
e=c4.b===g
d=l+i*(g+0.5)
c=e?b8:b9
b=e?b7:c0
b4.bQ(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
b4.aV(b8,2.5,10,b9,140,-0.02,r-80,o,a1)
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
c1.fillText(c4.e.gnU().toUpperCase(),o,a1+5)
c1.fillStyle="#ffd54f"
c1.font='13px "Georgia", serif'
c1.shadowBlur=0
c1.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c1.restore()}else{a2=c4.gcw()
for(a3=r-80,l=a3*0.5,g=0;g<a2.length;++g){a4=a2[g]
e=c4.c===g
a5=a0+g*52+22
a6=o+(e?12:0)
j=e?b9:b5
c=e?b8:c0
b4.bQ(c,e?2.2:1,6,j,44,e,-0.02,a3,a6,a5)
if(e)b4.i6(!0,g+1,20,a6-l+20,a5)
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
b4.nW(a9?b7:c0,1.5,c,24,!1,-0.04,74,j,a5)
c1.fillStyle="#f5f0e6"
c1.font='bold 12px "Cinzel", sans-serif'
c1.textAlign="center"
c1.textBaseline="middle"
c1.fillText(a4.gjp(),j,a5)}else{b0=a8-80-80
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
c1.fillText(B.c.af(b,1)+" ",j-4,a5)
c1.textAlign="left"
c1.fillText(" "+B.c.af(b1,1),b0+80+4,a5)
a=e?"#ffd54f":b7
c1.fillStyle=a
c1.font='bold 13px "Courier New", monospace'
c1.textAlign="right"
c1.textBaseline="middle"
c1.fillText(a4.gjp(),a8,a5)}c1.restore()}}c1.save()
c1.fillStyle="#8c887e"
c1.font='12px "Cinzel", sans-serif'
c1.textAlign="center"
c1.textBaseline="middle"
c1.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Coarse  \u2022  [Q / E] Fine (1/5)  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,n+m-24)
c1.restore()
c1.restore()},
h4(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.h()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
h3(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.h()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
mQ(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.al(A.c(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)}}
A.fw.prototype={
gn5(){var s,r,q,p,o=t.N
o=A.o(o,o)
for(s=this.r.gK(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aE(r)
o.k(0,q,p.gO(r)?"":p.gS(r))}return o},
bO(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.O(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.b(s)
r=n.h(0,j)
r.toString
A.bM(r)
q=n.h(0,i)
q.toString
A.bM(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
return A.fx(null,a,A.R(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.b(s)
r=n.h(0,j)
r.toString
A.bM(r)
q=n.h(0,i)
q.toString
A.bM(q)
p=n.h(0,"invertX")
p.toString
A.R(p)
o=n.h(0,"invertY")
o.toString
A.R(o)
m=n.h(0,h)
m.toString
A.R(m)
l=k.gn5()
return A.fx(l,null,m,r,p,o,s,q)},
ea(a){var s=null
return this.bO(a,s,s,s,s,s)},
nz(a){var s=null
return this.bO(s,s,s,a,s,s)},
nA(a){var s=null
return this.bO(s,s,s,s,a,s)},
nw(a){var s=null
return this.bO(s,a,s,s,s,s)},
nx(a){var s=null
return this.bO(s,s,a,s,s,s)},
nN(a){var s=null
return this.bO(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.fk)
p=this.r
if(p.gK().N(0,new A.nV()))throw A.d(B.h_)
if(p.gK().N(0,new A.nW()))throw A.d(B.fO)
p=p.gaG()
o=A.r(p)
s=o.i("hF<p.E,i>")
r=s.i("I<p.E>")
q=A.J(new A.I(new A.hF(p,o.i("p<i>(p.E)").a(new A.nX()),s),s.i("n(p.E)").a(new A.nY()),r),r.i("p.E"))
if(A.hU(q,A.F(q).c).a!==q.length)throw A.d(B.fn)},
B(){var s,r,q=this,p=t.N,o=A.o(p,t.a)
for(s=q.r.gK(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.at(r.b,!0,p))}return A.O(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nV.prototype={
$1(a){t.yx.a(a)
return J.wy(a.b,new A.nU(a))},
$S:38}
A.nU.prototype={
$1(a){var s
A.v(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.yh(a)
else s=!1
return s},
$S:3}
A.nW.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.wy(a.b,B.dy.gaw(B.dy))},
$S:38}
A.nX.prototype={
$1(a){return t.a.a(a)},
$S:116}
A.nY.prototype={
$1(a){return A.v(a).length!==0},
$S:3}
A.nT.prototype={
$1(a){return typeof a=="string"},
$S:16}
A.dQ.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.ev.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dl.prototype={}
A.jN.prototype={
cd(a){var s=this
if(!s.a.r.V(a))return new A.dl(B.c2,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e6},
nc(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aU
if(!A.yh(a)){p.c=p.b=null
return new A.dl(B.c4,B.dz.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gK()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.y8(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dl(B.aV,a+" is already bound to "+s)}return p.l9(a)},
f9(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aU
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e7
case 1:s=A.xe(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.xx(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.xL(r,k))
m.a=m.a.ea(s)
break
case 0:s=A.xe(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gS(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.iq(p,1,null,A.F(p).c)
o=p.$ti
p=new A.aV(p,p.gt(0),o.i("aV<a5.E>"))
o=o.i("a5.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.xL(r,k)}else{r=s.h(0,j)
r.toString
r=A.xx(A.xL(r,k),q)}s.k(0,j,r)
m.a=m.a.ea(s)
break}m.c=m.e=m.d=null
return B.c0},
l9(a){var s,r,q=this,p=q.b
if(p==null)return B.aU
s=A.xe(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.xx(r,a))
q.a=q.a.ea(s)
q.b=null
return B.c0}}
A.hz.prototype={
kQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jN(f.w)
s=f.b
s.className=A.v(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.c(s.appendChild(A.nB(a,B.eg,1)))
A.c(s.appendChild(A.E(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.E(a,"div",c,e)
f.fH(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fH(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dF(a,r,"invertX","Invert horizontal look")
f.dF(a,r,"invertY","Invert vertical look")
f.dF(a,r,"holdToInteract","Hold to interact")
A.c(s.appendChild(r))
q=A.E(a,"div",c,e)
for(p=B.jm.gK(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fx(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mM(l)?"unbound":J.ya(l," / ")
j=A.c(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.c(a.createElement("span"))
i.textContent=n
A.c(j.appendChild(i))
h="change "+m+" binding"
g=A.dT(a,new A.b5("settings.controls.bind."+m,B.c5,n,h,B.p),new A.nR(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.c(j.appendChild(g))
A.c(q.appendChild(j))
o.k(0,m,g)}A.c(s.appendChild(q))
p=A.E(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.c(s.appendChild(p))
p=A.E(a,"div","pause-actions",e)
f.at=p
A.c(s.appendChild(p))
f.e1()
A.c(s.appendChild(A.dT(a,B.eh,new A.nS(f),e)))},
jD(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.h8(this.x.nc(A.v(a.code)))},
h8(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aV?B.el:B.p
p=o.Q.h(0,r)
if(p!=null)A.wC(p,q)}n=a.a
if(n===B.aV)o.mx()
else if(n===B.c3){n=o.x
n===$&&A.h()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.e1()}else{o.dJ()
o.ax=null}},
mx(){var s,r,q,p,o
this.dJ()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.ii[r]
p=A.l(s.ownerDocument)
p.toString
o=q.b
A.c(s.appendChild(A.dT(p,new A.b5("settings.controls.resolve."+o,B.F,o,"resolve key binding conflict",B.p),new A.nQ(this,q),null)))}},
dJ(){var s,r=this.at
if(r==null)return
while(A.l(r.firstChild)!=null){s=A.l(r.firstChild)
s.toString
A.c(r.removeChild(s))}},
e1(){var s,r,q,p
for(s=this.Q,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.h()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mM(p)?"unbound":J.ya(p," / ")
r.textContent=q
A.wC(r,B.p)}},
fH(a,b,c,d,e,f){var s,r=A.E(a,"label","setting-row",null)
A.c(r.appendChild(A.E(a,"span",null,d)))
s=A.BP(a,new A.b5("settings.controls."+c,B.ej,d,null,B.p),f,e,new A.nO(this,c),1)
A.c(r.appendChild(s))
A.c(b.appendChild(r))
this.y.k(0,c,s)},
dF(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.BQ(a,new A.b5("settings.controls."+c,B.ek,d,null,B.p),!1,new A.nP(this,c))
A.c(s.appendChild(r))
A.c(s.appendChild(A.E(a,"span",null,d)))
A.c(b.appendChild(s))
this.z.k(0,c,r)},
h5(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seZ(a){this.f=t.pf.a(a)},
sb8(a){this.r=t.Z.a(a)}}
A.nR.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.h()
s=n.cd(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.c1){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.wC(q,B.c6)}p.dJ()
return null},
$S:0}
A.nS.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.nQ.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.h()
return s.h8(r.f9(this.b))},
$S:0}
A.nO.prototype={
$1(a){var s=this.a,r=s.w
s.h5(this.b==="horizontalSensitivity"?r.nx(a):r.nN(a))},
$S:177}
A.nP.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.nz(a)
break A}if("invertY"===q){s=r.w.nA(a)
break A}s=r.w.nw(a)
break A}r.h5(s)},
$S:10}
A.nZ.prototype={
kR(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.c(o.appendChild(A.E(s,"h1","journal-title","credits")))
r=A.E(s,"p","credits-body",null)
p.f!==$&&A.L()
p.f=r
r.textContent="\u2014"
A.c(o.appendChild(r))
A.c(o.appendChild(A.E(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.E(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.o_(p)))
A.c(o.appendChild(q))}}
A.o_.prototype={
$1(a){return this.a.a9()},
$S:2}
A.o7.prototype={
kT(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.E(a,o,"door-speaker",p)
q.b!==$&&A.L()
q.b=s
r=A.E(a,o,"door-line",p)
q.c!==$&&A.L()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(n.appendChild(s))
A.c(n.appendChild(r))
r=A.E(a,o,"door-choice-status",p)
q.d!==$&&A.L()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(n.appendChild(r))
r=A.E(a,o,"door-cite-list",p)
q.f!==$&&A.L()
q.f=r
s=A.E(a,o,"door-cite-result",p)
q.r!==$&&A.L()
q.r=s
A.c(n.appendChild(r))
A.c(n.appendChild(s))
s=A.E(a,"button","door-continue","continue")
q.e!==$&&A.L()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.o8(q)))
A.c(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.o9(q,a)))
A.c(A.l(a.body).appendChild(n))},
fu(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.h()
s.textContent=a
s=r.c
s===$&&A.h()
s.textContent=B.K.bR("",!0,b)
s=r.d
s===$&&A.h()
s.textContent=A.yk(B.b9)
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
s.removeAttribute("hidden")},
fv(a,b){var s,r=this,q=r.c
q===$&&A.h()
q.textContent=B.K.bR("",!0,a)
q=r.d
q===$&&A.h()
q.textContent=""
q=r.e
q===$&&A.h()
q=A.c(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.h()
s.textContent=""},
ks(a){return this.fv(a,!1)},
ku(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.h()
s=A.c(s.style)
r=b==null?"none":""
s.display=r
r=A.e([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.h()
s.textContent=A.yk(r)},
fw(a,b){var s=this.c
s===$&&A.h()
s.textContent=B.K.bR("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.h()
s.textContent=""
s=this.e
s===$&&A.h()
A.c(s.style).display=""},
kr(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.ur,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.c(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.oa(o,this)
if(typeof o=="function")A.j(A.z("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.hp()]=o
m.addEventListener("click",l)
A.c(s.appendChild(m))}},
soQ(a){this.w=t.Z.a(a)},
soP(a){this.x=t.vR.a(a)}}
A.o8.prototype={
$1(a){var s
A.c(a)
s=this.a.w
return s==null?null:s.$0()},
$S:37}
A.o9.prototype={
$1(a){var s,r,q,p,o,n,m
A.c(a)
s=this.a
if(!s.y||A.v(a.code)!=="Tab")return
r=A.e([],t.sL)
q=s.e
q===$&&A.h()
if(A.v(A.c(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.h()
p=A.c(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.b(p.length);++o){n=A.l(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.l(this.b.activeElement)
if(A.R(a.shiftKey)){if(m===B.a.gS(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gX(r).focus()}}else if(m===B.a.gX(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gS(r).focus()}},
$S:120}
A.oa.prototype={
$1(a){var s
A.c(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:37}
A.od.prototype={
kU(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.E(s,"h1","journal-title",null)
o.f!==$&&A.L()
o.f=r
q=A.E(s,"div","ending-copy",null)
o.r!==$&&A.L()
o.r=q
A.c(n.appendChild(r))
A.c(n.appendChild(q))
p=A.E(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.oe(o)))
A.c(n.appendChild(p))},
kt(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o=b[p]
n=A.c(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.c(s.appendChild(n))}m.bV()},
soU(a){this.w=t.Z.a(a)}}
A.oe.prototype={
$1(a){var s=this.a
s.a9()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.oF.prototype={
bH(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.at(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
jS(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
oo(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hU()
return!0}return!1}if(a==="Space"){s=B.a.eS(l,new A.oG())
if(s!==-1){n.cJ(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.M(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.M(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cJ(q)
return!0}}if(B.b.W(a,"Digit")){p=A.dy(B.b.b3(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.W(a,"Numpad")){p=A.dy(B.b.b3(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cJ(o)
return!0}return!1},
cJ(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.f(r,a)
s.$2(a,r[a])}},
hU(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
oq(a,b,c){var s,r,q
t.vp.a(c)
this.r=null
for(s=c.length,r=0;r<s;++r){q=c[r]
if(q.cg(0,a,b)){this.r=q.b
break}}},
op(a,b,c){var s,r,q
t.vp.a(c)
for(s=c.length,r=0;r<s;++r){q=c[r]
if(q.cg(0,a,b)){if(q.a==="dialogue-continue"){this.hU()
return!0}this.cJ(q.b)
return!0}}return!1},
soO(a){this.y=t.dt.a(a)},
soT(a){this.z=t.Z.a(a)}}
A.oG.prototype={
$1(a){A.v(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.oH.prototype={}
A.dr.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cR.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cS.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.ds.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dq.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dt.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.ch.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.fE.prototype={
bj(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.wE(n,b==null?s.x:b,l,r,o,q,m,p)},
nq(a){var s=null
return this.bj(s,a,s,s,s,s,s,s)},
ny(a){var s=null
return this.bj(s,s,s,a,s,s,s,s)},
nE(a){var s=null
return this.bj(s,s,s,s,s,a,s,s)},
nK(a){var s=null
return this.bj(s,s,s,s,s,s,s,a)},
nB(a){var s=null
return this.bj(s,s,s,s,a,s,s,s)},
np(a){var s=null
return this.bj(a,s,s,s,s,s,s,s)},
nI(a){var s=null
return this.bj(s,s,s,s,s,s,a,s)},
nu(a){var s=null
return this.bj(s,s,a,s,s,s,s,s)},
B(){var s=this
return A.O(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.oI.prototype={
$1$2(a,b,c){var s
A.AF(c,t.Ct,"T","call")
c.i("p<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.d(A.a6("invalid gameplay setting: "+a,null,null))
return B.a.aX(b,new A.oJ(s,c),new A.oK(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:121}
A.oJ.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("n(0)")}}
A.oK.prototype={
$0(){return A.j(A.a6("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cy.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dZ.prototype={
bN(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dZ(s.a,r,q,p,o,n,m)},
e9(a){var s=null
return this.bN(a,s,s,s,s,s)},
i1(a){var s=null
return this.bN(s,a,s,s,s,s)},
i2(a){var s=null
return this.bN(s,s,s,a,s,s)},
nG(a){var s=null
return this.bN(s,s,s,s,a,s)},
nv(a){var s=null
return this.bN(s,s,a,s,s,s)},
nL(a){var s=null
return this.bN(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.j5,q))throw A.d(A.a6("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.iq,q))throw A.d(A.a6("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.j8,q))throw A.d(A.a6("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.j2,q))throw A.d(A.a6("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.O(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.oW.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:36}
A.oX.prototype={
$0(){return A.j(B.fE)},
$S:6}
A.oY.prototype={
B(){return A.O(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.oQ.prototype={}
A.oR.prototype={}
A.hL.prototype={
kV(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.c(l.appendChild(A.E(a,"h1","journal-title","Graphics")))
A.c(l.appendChild(A.E(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.E(a,"div","settings-grid",n)
r=t.N
o.c4(a,s,"preset","quality preset",A.O(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.c4(a,s,"renderScale","render scale",A.O(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.c4(a,s,"frameTarget","frame target",A.O(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.c4(a,s,"antialiasing","anti-aliasing",A.O(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.c4(a,s,"textureQuality","texture quality",A.O(["high","High","medium","Medium","low","Low"],r,r))
q=A.E(a,"label","setting-toggle",n)
r=A.c(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.Z(new A.oU(o)))
r=o.x
r.toString
A.c(q.appendChild(r))
A.c(q.appendChild(A.E(a,"span",n,"Dynamic resolution")))
A.c(s.appendChild(q))
A.c(l.appendChild(s))
r=A.E(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.c(l.appendChild(r))
p=A.E(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.Z(new A.oV(o)))
A.c(l.appendChild(p))},
c4(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.E(a,"label","setting-row",null)
A.c(s.appendChild(A.E(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.K(e,A.r(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.c(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.c(r.appendChild(o))}r.addEventListener("change",A.Z(new A.oT(this,r,c)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.w.k(0,c,r)},
hb(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
ft(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.a_(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
seZ(a){this.f=t.CA.a(a)},
sb8(a){this.r=t.Z.a(a)}}
A.oU.prototype={
$1(a){var s=this.a
s.hb(s.z.i1(A.R(s.x.checked)))},
$S:1}
A.oV.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a9()},
$S:1}
A.oT.prototype={
$1(a){var s,r=A.v(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.z.i2(B.a.ap(B.cU,new A.oS(r)))
break A}if("renderScale"===p){s=q.z.nG(r)
break A}if("frameTarget"===p){s=q.z.nv(r)
break A}if("antialiasing"===p){s=q.z.e9(r)
break A}if("textureQuality"===p){s=q.z.nL(r)
break A}s=q.z
break A}q.hb(s)},
$S:1}
A.oS.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:36}
A.jv.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ce.prototype={}
A.oZ.prototype={
k0(a,b,c){if(c)return B.iF
if(b&&a!=null)return A.e([new A.ce("E","Examine "+a,!0),new A.ce("TAB","Journal",!1),new A.ce("CAPS","Shader Lab",!1)],t.sa)
return B.ji}}
A.p_.prototype={
kW(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.c(p.appendChild(A.E(s,"h1","journal-title","house notes")))
A.c(p.appendChild(A.E(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.c(p.appendChild(A.E(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.E(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.p0(this)))
A.c(p.appendChild(r))}}
A.p0.prototype={
$1(a){return this.a.a9()},
$S:2}
A.pA.prototype={
bV(){var s,r=this
r.kJ()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fR(r.CW,s)
r.mp()
r.hr()},
lg(){var s,r=this,q=r.a,p=A.E(q,"div","page-turn",null),o=A.E(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.pB(r)))
s=A.E(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.pC(r)))
q=A.E(q,"span","right-day-label",null)
r.Q!==$&&A.L()
r.Q=q
A.c(p.appendChild(o))
A.c(p.appendChild(q))
A.c(p.appendChild(s))
return p},
hO(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fR(s.CW+a,r)
s.hr()},
fR(a,b){if(a<1)return 1
if(a>b)return b
return a},
mp(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.fm(),r=s.length,q=A.ur,p=j.a,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
m=B.a.gX(n.c).p(0)
l=A.c(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.pD(j,n,l)
if(typeof m=="function")A.j(A.z("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.hp()]=m
l.addEventListener("click",k)
A.c(i.appendChild(l))}},
hr(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.r(p).i("an<2>"),n=new A.an(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.U(r,new A.pE())
j.hq(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.an(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.U(s,new A.pF())
j.hq(i,s)
k=B.c.E(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.c(i.style).setProperty("width",B.c.af(k*100,1)+"%")},
hq(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r)A.c(a.appendChild(this.lI(b[r])))},
lI(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.E(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.c(k.createElement("div"))
n.className=q
n.textContent=o
A.c(n.style).setProperty("--shake",B.c.p(p.b))
A.c(j.appendChild(n))}m=a.r
if(m!=null){l=this.lZ(m,!1)
l.className=A.v(l.className)+" margin"
A.c(j.appendChild(l))}return j},
lZ(a,b){var s=b?"hand-line struck":"hand-line",r=A.E(this.a,"div",s,a.p(0))
A.c(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.pB.prototype={
$1(a){return this.a.hO(-1)},
$S:2}
A.pC.prototype={
$1(a){return this.a.hO(1)},
$S:2}
A.pD.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pE.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:14}
A.pF.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:14}
A.cZ.prototype={}
A.ex.prototype={
cg(a,b,c){var s=this,r=s.c,q=!1
if(b>=r)if(b<=r+s.e){r=s.d
r=c>=r&&c<=r+s.f}else r=q
else r=q
return r}}
A.qg.prototype={
gpL(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.G(s,0,B.c.ar(B.c.E(r*q,0,r)))}}
A.i5.prototype={
aT(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.c(s.style).setProperty("--panel-fade","0.25s")
A.c(A.l(this.a.body).appendChild(s))},
bV(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.v(n.className),"open"))return
s=$.qh
if(s!=null&&s!==o)s.a9()
$.qh=o
r=o.a
o.d=A.l(r.activeElement)
A.px(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.gmh())
o.e=q
r.addEventListener("keydown",q)
p=A.zW(n)
if(p.length!==0)B.a.gS(p).focus()
else n.focus()},
a9(){var s,r,q=this,p=q.b
if(!B.b.q(A.v(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.qh===q)$.qh=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jD(a){},
mi(a){A.c(a)
this.jD(a)
if(A.R(a.defaultPrevented))return
if(A.v(a.code)==="Escape"){a.preventDefault()
this.a9()
return}if(A.v(a.code)==="Tab")this.mE(a)},
mE(a){var s,r=A.zW(this.b)
if(r.length===0)return
s=A.l(this.a.activeElement)
if(A.R(a.shiftKey)){if(s===B.a.gS(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gX(r).focus()}}else if(s===B.a.gX(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gS(r).focus()}},
sb1(a){this.c=t.Z.a(a)}}
A.bp.prototype={
v(){return"PauseReason."+this.b}}
A.cm.prototype={
v(){return"PausePage."+this.b}}
A.e5.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.dx.prototype={
B(){var s,r=A.o(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a3(a,b){if(b==null)return!1
return b instanceof A.dx&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gI(a){return A.cF(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e4.prototype={
ghY(){var s=this.a
return s.length===1&&B.a.gS(s).a===B.bs},
B(){var s=A.o(t.N,t.X),r=this.a,q=A.F(r),p=q.i("P<1,X<i,G?>>")
r=A.J(new A.P(r,q.i("X<i,G?>(1)").a(new A.qm()),p),p.i("a5.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.F(r)
p=q.i("P<1,i>")
r=A.J(new A.P(r,q.i("i(1)").a(new A.qn()),p),p.i("a5.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.qm.prototype={
$1(a){return t.oP.a(a).B()},
$S:123}
A.qn.prototype={
$1(a){return t.wJ.a(a).b},
$S:124}
A.c2.prototype={}
A.ql.prototype={
jE(a){var s,r=this
if(r.a.ghY())return new A.c2(B.a_,r.a,null)
s=r.a
s=new A.e4(B.j4,s.b,a)
r.a=s
return new A.c2(B.dl,s,"pause.resume")},
n0(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gX(p)
q=r.a.a
q=B.a.aS(q,0,q.length-1)
p=r.a
p=new A.e4(q,p.b,p.c)
r.a=p
return new A.c2(B.dm,p,s.c)}if(q.ghY()&&r.a.b.length===0)return r.cE()
return new A.c2(B.a_,r.a,null)},
cE(){var s=this.a
if(s.a.length===0)return new A.c2(B.a_,s,null)
if(s.b.length!==0)return new A.c2(B.a_,s,null)
this.a=B.br
return new A.c2(B.dn,B.br,s.c)},
pd(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c2(B.a_,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.e4(s.a,r,q.a.c)
q.a=s
return new A.c2(B.dl,s,null)},
nT(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c2(B.a_,o.a,null)
s=o.a
r=s.b
q=A.F(r)
p=q.i("I<1>")
r=A.J(new A.I(r,q.i("n(1)").a(new A.qo(a)),p),p.i("p.E"))
q=o.a.c
r=new A.e4(s.a,r,q)
o.a=r
return new A.c2(B.kk,r,q)},
lz(a){var s
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
A.qo.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:125}
A.cG.prototype={
v(){return"PauseRootAction."+this.b}}
A.qp.prototype={
bq(a,b,c,d){var s=B.jy.h(0,c)
s.toString
A.c(b.appendChild(A.dT(a,new A.b5(s,B.F,d,null,B.p),new A.qq(this,c),null)))},
sp8(a){this.f=t.Z.a(a)},
spa(a){this.r=t.Z.a(a)},
soR(a){this.w=t.Z.a(a)},
sp9(a){this.x=t.Z.a(a)},
soX(a){this.y=t.Z.a(a)},
soS(a){this.z=t.Z.a(a)},
sb8(a){this.Q=t.Z.a(a)}}
A.qq.prototype={
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
A.bS.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.qC.prototype={
kq(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bR("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.r9.prototype={
l0(a){var s,r,q,p,o,n=this.b
n.className=A.v(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.c(n.appendChild(A.nB(a,B.ef,1)))
A.c(n.appendChild(A.E(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.E(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iG[r]
p=B.d7.h(0,q)
p.toString
o=B.d6.h(0,q)
o.toString
A.c(s.appendChild(A.dT(a,new A.b5(o,B.F,p,p+" settings",B.p),new A.ra(this,q),null)))}A.c(s.appendChild(A.dT(a,B.ee,new A.rb(this),null)))
A.c(n.appendChild(s))},
soN(a){this.f=t.hQ.a(a)},
sb8(a){this.r=t.Z.a(a)}}
A.ra.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.rb.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fS.prototype={
l1(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.x(B.d7.h(0,d))+" settings",a=h.b
a.className=A.v(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.c(a.appendChild(A.nB(a0,new A.b5("settings."+(s==null?f:s)+".heading",B.as,b,g,B.p),2)))
A.c(a.appendChild(A.E(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.E(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.rx(h)),p=B.a.gu(B.C),o=t.xG,q=new A.U(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.c(r.appendChild(h.lY(a0,m,l,n==null?1:n,k)))}A.c(a.appendChild(r))
j=A.E(a0,"div",e,g)
for(s=s.a(new A.ry(h)),q=B.a.gu(B.C),o=new A.U(q,s,o);o.m();)A.c(j.appendChild(h.mD(a0,q.gn())))
A.c(a.appendChild(j))
if(d===B.H)A.c(a.appendChild(h.le(a0)))
if(d===B.I)A.c(a.appendChild(h.ld(a0)))
if(d===B.Z)A.c(a.appendChild(h.lf(a0)))
i=A.E(a0,"div",e,g)
for(s=t.pz.a(h.glQ()),q=B.a.gu(B.j6),s=new A.U(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.c(i.appendChild(A.dT(a0,new A.b5("settings."+o+".reset."+n,B.F,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.rz(h,p),g)))}s=c?g:d.b
A.c(i.appendChild(A.dT(a0,new A.b5("settings."+(s==null?f:s)+".reset.all",B.F,"reset all settings","restore all settings to defaults",B.em),new A.rA(h),g)))
A.c(a.appendChild(i))
d=c?g:d.b
A.c(a.appendChild(A.dT(a0,new A.b5("settings."+(d==null?f:d)+".back",B.F,"return","return to settings categories",B.p),new A.rB(h),g)))},
ld(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.E(a,"div","settings-grid",j),f=k.dD(a,g,"reducedMotion","reduced motion (system default)"),e=k.dD(a,g,i,"photosensitivity-safe effects (system default)"),d=k.dD(a,g,"captions","non-speech captions"),c=A.E(a,"label",h,j)
A.c(c.appendChild(A.E(a,"span",j,"UI scale")))
s=A.c(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.rr(k,s)))
A.c(c.appendChild(s))
A.c(g.appendChild(c))
r=A.E(a,"label",h,j)
A.c(r.appendChild(A.E(a,"span",j,"screen-reader verbosity")))
q=A.c(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bk[p]
n=A.c(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.c(q.appendChild(n))}q.addEventListener("change",A.Z(new A.rs(k,q)))
A.c(r.appendChild(q))
A.c(g.appendChild(r))
l=A.E(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.rt(k)))
A.c(g.appendChild(l))
k.k3.J(0,A.O(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.k4.k(0,"screenReaderVerbosity",q)
return g},
dD(a,b,c,d){var s=A.E(a,"label","setting-toggle",null),r=A.c(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.rc(this,r,c)))
A.c(s.appendChild(r))
A.c(s.appendChild(A.E(a,"span",null,d)))
A.c(b.appendChild(s))
return r},
fo(a){var s,r
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
s.value=(r==null?B.a9:r).b}},
lf(a){var s,r,q=this,p="confirmations",o=A.E(a,"div","settings-grid",null)
q.br(a,o,"interactionMode","interaction mode",B.bj,t.bK)
q.br(a,o,"promptDensity","prompt density",B.bn,t.dn)
q.br(a,o,"textPacing","text pacing",B.bl,t.j_)
q.br(a,o,"journalLayout","journal layout",B.bd,t.gm)
q.br(a,o,p,p,B.b8,t.aJ)
q.br(a,o,"saveFeedback","save feedback",B.be,t.mx)
q.br(a,o,"focusLossBehavior","when the window loses focus",B.aE,t.x)
s=A.E(a,"label","setting-toggle",null)
r=A.c(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.Z(new A.ru(q,r)))
A.c(s.appendChild(r))
A.c(s.appendChild(A.E(a,"span",null,"contextual reminders")))
A.c(o.appendChild(s))
q.id=r
return o},
br(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.AF(f,t.Ct,"T","_addGameplaySelect")
f.i("D<0>").a(e)
s=A.E(a,"label","setting-row",null)
A.c(s.appendChild(A.E(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.c(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.c(r.appendChild(n))}r.addEventListener("change",A.Z(new A.rp(this,c,r)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.go.k(0,c,r)},
kd(a){var s,r,q,p,o,n,m,l,k,j,i,h
this.k1=a
for(s=this.go,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0),r=a.w.b,q=a.r.b,p=a.f.b,o=a.e.b,n=a.d.b,m=a.c.b,l=a.b.b;s.m();){k=s.d
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
le(a){var s,r,q=this,p=A.E(a,"div","settings-grid",null),o=t.N,n=A.o(o,o)
for(s=0;s<4;++s){r=B.bi[s].b
n.k(0,r,r)}q.cL(a,p,"output","output",n)
n=A.o(o,o)
for(s=0;s<3;++s){r=B.bc[s].b
n.k(0,r,r)}q.cL(a,p,"dynamicRange","dynamic range",n)
n=A.o(o,o)
for(s=0;s<2;++s){r=B.bb[s].b
n.k(0,r,r)}q.cL(a,p,"reverb","room effect",n)
o=A.o(o,o)
for(s=0;s<2;++s){n=B.ba[s].b
o.k(0,n,n)}q.cL(a,p,"ducking","voice intelligibility",o)
return p},
cL(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.E(a,"label","setting-row",null)
A.c(s.appendChild(A.E(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.K(e,A.r(e).i("K<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.c(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.c(r.appendChild(o))}r.addEventListener("change",A.Z(new A.rh(this,c,r)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.p1.k(0,c,r)},
kc(a){var s,r,q,p,o,n,m,l,k
this.ok=a
for(s=this.p1,s=new A.K(s,A.r(s).i("K<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
hd(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.Y===r){s=a.c===B.aK
break A}if(B.I===r){s=a.c===B.a3
break A}if(B.H===r){s=a.c===B.E
break A}s=!1
break A}return s},
lR(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.Y===s){r=a===B.aK
break A}if(B.I===s){r=a===B.a3
break A}if(B.H===s){r=a===B.E
break A}r=!1
break A}return r},
mD(a,b){var s=this,r=A.E(a,"label","setting-toggle",null),q=A.c(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.rw(s,b,q)))
A.c(r.appendChild(q))
A.c(r.appendChild(A.E(a,"span",null,b.b)))
return r},
lY(a,b,c,d,e){var s,r,q=this,p=A.E(a,"label","setting-row",null),o=A.E(a,"span",null,c),n=A.c(a.createElement("input"))
n.type="range"
n.min=A.x(e)
n.max=A.x(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.E(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.rv(q,n,r,b)))
A.c(p.appendChild(o))
A.c(p.appendChild(n))
A.c(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aX(e,d))
return p},
fq(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kC
r=B.c.E(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aC(r*100)+"%"},
soZ(a){this.r=t.DI.a(a)},
sp0(a){this.w=t.xl.a(a)},
sp_(a){this.x=t.xl.a(a)},
soV(a){this.y=t.DI.a(a)},
soY(a){this.z=t.xl.a(a)},
spc(a){this.Q=t.xl.a(a)},
sp7(a){this.as=t.Ci.a(a)},
sp6(a){this.at=t.Z.a(a)},
sb8(a){this.ax=t.Z.a(a)},
soM(a){this.ay=t.kC.a(a)},
soW(a){this.ch=t.hq.a(a)},
soL(a){this.CW=t.Cv.a(a)},
sp5(a){this.cx=t.Z.a(a)}}
A.rx.prototype={
$1(a){t.gl.a(a)
return a.d===B.R&&this.a.hd(a)},
$S:24}
A.ry.prototype={
$1(a){t.gl.a(a)
return a.d===B.aj&&this.a.hd(a)},
$S:24}
A.rz.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.rA.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.rB.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a9()},
$S:0}
A.rr.prototype={
$1(a){var s=this.a,r=s.k2,q=A.eO(A.v(this.b.value))
r=r.nM(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rs.prototype={
$1(a){var s=this.a,r=s.k2.nJ(B.a.ap(B.bk,new A.rq(this.b)))
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.rq.prototype={
$1(a){return t.mq.a(a).b===A.v(this.a.value)},
$S:39}
A.rt.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.rc.prototype={
$1(a){var s,r=A.R(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k2.nF(r)
break A}if("photosensitivitySafe"===p){s=q.k2.nD(r)
break A}if("captions"===p){s=q.k2.no(r)
break A}s=q.k2
break A}q.k2=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.ru.prototype={
$1(a){var s=this.a,r=s.k1.nq(A.R(this.b.checked))
s.k1=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.rp.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k1.ny(B.a.ap(B.bj,new A.ri(r.c)))
break A}if("promptDensity"===p){s=q.k1.nE(B.a.ap(B.bn,new A.rj(r.c)))
break A}if("textPacing"===p){s=q.k1.nK(B.a.ap(B.bl,new A.rk(r.c)))
break A}if("journalLayout"===p){s=q.k1.nB(B.a.ap(B.bd,new A.rl(r.c)))
break A}if("confirmations"===p){s=q.k1.np(B.a.ap(B.b8,new A.rm(r.c)))
break A}if("saveFeedback"===p){s=q.k1.nI(B.a.ap(B.be,new A.rn(r.c)))
break A}s=q.k1.nu(B.a.ap(B.aE,new A.ro(r.c)))
break A}q.k1=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.ri.prototype={
$1(a){return t.bK.a(a).b===A.v(this.a.value)},
$S:128}
A.rj.prototype={
$1(a){return t.dn.a(a).b===A.v(this.a.value)},
$S:129}
A.rk.prototype={
$1(a){return t.j_.a(a).b===A.v(this.a.value)},
$S:130}
A.rl.prototype={
$1(a){return t.gm.a(a).b===A.v(this.a.value)},
$S:131}
A.rm.prototype={
$1(a){return t.aJ.a(a).b===A.v(this.a.value)},
$S:132}
A.rn.prototype={
$1(a){return t.mx.a(a).b===A.v(this.a.value)},
$S:133}
A.ro.prototype={
$1(a){return t.x.a(a).b===A.v(this.a.value)},
$S:34}
A.rh.prototype={
$1(a){var s,r=this,q=r.a,p=q.ok,o=r.b
A:{if("output"===o){s=p.nC(B.a.ap(B.bi,new A.rd(r.c)))
break A}if("dynamicRange"===o){s=p.nt(B.a.ap(B.bc,new A.re(r.c)))
break A}if("reverb"===o){s=p.nH(B.a.ap(B.bb,new A.rf(r.c)))
break A}s=p.ns(B.a.ap(B.ba,new A.rg(r.c)))
break A}q.ok=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.rd.prototype={
$1(a){return t.xs.a(a).b===A.v(this.a.value)},
$S:135}
A.re.prototype={
$1(a){return t.EL.a(a).b===A.v(this.a.value)},
$S:136}
A.rf.prototype={
$1(a){return t.gc.a(a).b===A.v(this.a.value)},
$S:137}
A.rg.prototype={
$1(a){return t.ul.a(a).b===A.v(this.a.value)},
$S:138}
A.rw.prototype={
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
A.rv.prototype={
$1(a){var s,r,q=this,p=A.eO(A.v(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aC(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bG.prototype={
v(){return"SettingCategory."+this.b}}
A.ii.prototype={
v(){return"SettingKind."+this.b}}
A.aZ.prototype={
dl(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a6(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a6(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bX(a))throw A.d(A.a6(r.a+" must be boolean",q,q))
break}}}
A.rE.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:24}
A.rF.prototype={
$0(){return A.j(A.m("unknown setting: "+this.a))},
$S:6}
A.rC.prototype={
l2(a,b){var s,r=this.a
if(r!==1)throw A.d(A.z("unsupported settings version "+r,null))
for(r=this.b.gK(),r=r.gu(r);r.m();){s=r.gn()
A.rD(s.a).dl(s.b)}},
cG(a){var s=this.b.h(0,a)
return s==null?A.j(A.m("setting missing from profile: "+a)):s},
B(){return A.O(["version",this.a,"values",this.b],t.N,t.K)}}
A.rG.prototype={
pu(a){var s,r,q=A.fI(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dB(q,1)
this.ms(a)},
B(){return A.O(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
ms(a){var s,r,q=A.fI(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dB(q,1)}}
A.rP.prototype={
l3(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.c(i.appendChild(A.E(a,"h2","journal-title","Rest")))
A.c(i.appendChild(A.E(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.E(a,"div","entry-picker",null)
for(r=A.ur,q=0;q<2;++q){p=B.cT[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cZ[n]
l=A.c(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.rQ(this,p,m)
if(typeof k=="function")A.j(A.z("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.hp()]=k
l.addEventListener("click",j)
A.c(s.appendChild(l))}}A.c(i.appendChild(s))},
spb(a){this.f=t.nf.a(a)}}
A.rQ.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a9()},
$S:1}
A.cv.prototype={}
A.mX.prototype={
pK(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.F(s)
q=new A.P(s,r.i("i(1)").a(new A.mZ()),r.i("P<1,i>")).bG(0)
r=this.b
r.H(0)
s=J.BD(a,t.N)
p=s.$ti
r.J(0,new A.I(s,p.i("n(p.E)").a(q.gaw(q)),p.i("I<p.E>")))},
o2(a,b){var s,r,q,p,o,n=A.e([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mZ.prototype={
$1(a){return t.bC.a(a).a},
$S:139}
A.mY.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.F(r,s):B.d.F(a.c,b.c)},
$S:140}
A.ln.prototype={
gcj(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.f(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
oy(a){return this.c.q(0,t.L.a(a))},
fa(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.aa(0,g.gnm())||!a.a.aa(0,new A.tl(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.hf(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aO){m=s.d
if(m<o.length){n=n===B.a7
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ae}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.f(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.N(l.f,new A.tm(s))
else k=!1
if(k)return!1
j=new A.lm(r,g,A.ag(o,t.AP),B.a7)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.H(0)
g.J(0,a.a)
g=i.c
g.H(0)
g.J(0,h)
i.r=j
return!0},
hW(a){var s=this.a,r=A.r(s).i("ad<1>"),q=r.i("I<p.E>")
s=A.J(new A.I(new A.ad(s,r),r.i("n(p.E)").a(new A.tg(a)),q),q.i("p.E"))
B.a.U(s,new A.th())
return s},
cd(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mN
s=m.a.h(0,a)
if(s==null)return B.mO
r=B.d.R(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bS:B.ap
o=p===B.ap&&m.x.q(0,q)&&s.V(B.bT)?B.bT:p
if(s.V(o))n=o
else n=s.V(B.ap)?B.ap:B.bS
r=s.h(0,n)
r.toString
m.r=new A.lm(a,n,A.ag(m.hf(a,n,r),t.AP),B.a7)
m.gcj()
r=m.r
r.toString
return new A.ll(r)},
ng(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dT
if(n.d!==B.a7)return B.mL
n.e=a
s=a===B.ae
n.d=s?B.aO:B.an
r=this.f
q=s?B.dR:B.mt
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dG(q,o,p,a,null))
if(a===B.ax)B.a.l(r,new A.dG(B.mw,o,p,a,null))
if(s)this.hs(n)
return new A.lj(n)},
mW(){var s,r=this.r
if(r==null)return B.dT
s=r.d
if(s!==B.an&&s!==B.ao)return B.mM
if(this.gcj()!=null&&r.w==null)return new A.bb(new A.bu(B.a8,"The visitor is waiting for an answer."))
r.d=B.ao
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aO
this.hs(r)
return new A.iv(r,!0)}return new A.iv(r,!1)},
nh(a){var s,r,q=this.r,p=this.gcj(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.an&&o!==B.ao}if(o)return B.mK
o=p.f
s=A.F(o)
r=A.bA(new A.I(o,s.i("n(1)").a(new A.tj(a)),s.i("I<1>")),t.Y)
if(r==null)return B.mP
q.w=r.a
return new A.lk(q,p,r)},
ni(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.an&&s!==B.ao}else s=!0
if(s)return i
r=h.gbw()
if(r==null)return i
s=t.N
q=A.o(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.cY
p=J.S(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b7(q,s,s)
m=c.ml(!0,!0,o,new A.tt(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aP){B.a.l(this.f,new A.dG(B.mv,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fI(B.a.gX(j.c).a,s,s)
s.J(0,q)
p.mT(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dU)if(k===B.bU){s=n.b
s=s.gY(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dG(B.mu,o,p.b,i,l))}}return m},
hs(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
hf(a,b,c){var s,r
t.cf.a(c)
s=A.e([],t.Fi)
for(r=J.S(c);r.m();)s.push(this.m_(a,b,r.gn()))
return s},
m_(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.F(p)
s=A.bA(new A.I(p,r.i("n(1)").a(new A.te(this)),r.i("I<1>")),t.aS)}return s==null?c:new A.c7(q,s.c,c.c)},
skF(a){this.x=t.Q.a(a)}}
A.tl.prototype={
$1(a){var s=this.a.a
return new A.ad(s,A.r(s).i("ad<1>")).N(0,new A.tk(A.v(a)))},
$S:3}
A.tk.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:25}
A.tm.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.tg.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:25}
A.th.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.F(a.c,b.c)
return s!==0?s:B.d.F(a.d,b.d)},
$S:142}
A.tj.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.ti.prototype={
$0(){return A.e([],t.jV)},
$S:143}
A.te.prototype={
$1(a){return t.aS.a(a).d.gK().aa(0,new A.td(this.a))},
$S:144}
A.td.prototype={
$1(a){t.q.a(a)
return this.a.y.aZ(a.a,a.b)},
$S:145}
A.tf.prototype={
$2(a,b){var s=t.AP
return B.d.F(s.a(a).a,s.a(b).a)},
$S:146}
A.lo.prototype={}
A.lU.prototype={}
A.vK.prototype={
$1(a){return B.b.W(A.v(a),"off.")},
$S:3}
A.bQ.prototype={
v(){return"DoorChoice."+this.b}}
A.c5.prototype={
v(){return"VisitPhase."+this.b}}
A.c6.prototype={
v(){return"VisitTier."+this.b}}
A.ec.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dG.prototype={
B(){var s,r=this,q=A.o(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.d8.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bu.prototype={
a3(a,b){if(b==null)return!1
return b instanceof A.bu&&b.a===this.a&&b.b===this.b},
gI(a){return A.cF(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c7.prototype={
a3(a,b){if(b==null)return!1
return b instanceof A.c7&&b.a===this.a&&b.b===this.b},
gI(a){return A.cF(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bU.prototype={
a3(a,b){var s=this
if(b==null)return!1
return b instanceof A.bU&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gI(a){var s=this
return A.cF(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.O(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.lp.prototype={
B(){var s,r,q,p=this.a
p=A.J(p,A.r(p).c)
B.a.Z(p)
s=this.b
r=A.r(s)
q=r.i("dn<1,X<i,@>>")
s=A.J(new A.dn(s,r.i("X<i,@>(1)").a(new A.tc()),q),q.i("p.E"))
r=this.c
return A.O(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.tc.prototype={
$1(a){return t.L.a(a).B()},
$S:147}
A.jw.prototype={
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
A.mU.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:148}
A.mV.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:149}
A.mW.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:150}
A.lm.prototype={
gbw(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.tn.prototype={}
A.bb.prototype={}
A.ll.prototype={}
A.lj.prototype={}
A.iv.prototype={}
A.lk.prototype={}
A.h0.prototype={}
A.iR.prototype={
gbx(){var s,r=this.xr
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.qV("pixeldart",r?this.gna():B.jf,!1,null,s)},
ge8(){if(this.xr){var s=this.d
s===$&&A.h()
s=s.b===B.af}else s=!1
return s},
gna(){var s,r
if(!this.xr)return B.n
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.ex.nb(s,r)},
goj(){var s="shadowCaster",r=this.R8
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.jG(s).a+";shadowTriangles="+r.jG(s).b+";frameMs="+B.c.af(this.RG,3)},
goi(){var s=this.R8
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.RG<=100},
bm(){var s,r,q,p,o,n,m,l,k=this,j=A.DC(k.a)
k.d=j
j=j.jL()
k.r=j
j=B.c9.kb(j)
k.w=j
q=k.b
p=k.c
s=new A.l7(q,p,q,p)
o=A.yV(k.d)
k.e=o
try{o.jv(B.cc.i0(j,p,q),s)}catch(n){r=A.aj(n)
j=k.w
if(j===B.aF)throw n
k.x=j.a.b+" profile failed; using safe graph: "+A.x(r)
k.w=B.aF
j=A.yV(k.d)
j.jv(B.l_,s)
k.e=j}j=k.e
j.c6()
m=A.De(j.w.a.b)
B.a.l(j.d,m)
k.f=m
k.y2=k.b
k.bA=k.c
l=k.w.a
A:{j=B.a0===l
if(j){q=7
break A}if(B.P===l){q=3
break A}q=0
break A}B:{if(j){j=2
break B}if(B.P===l){j=1
break B}j=0
break B}p=t.S
if(!isFinite(0.15))A.j(A.z("hysteresisThreshold must be finite and >= 0",null))
k.fx=new A.pM(q,j,A.a0(p),A.a0(p),A.o(p,t.i))
k.dd=A.CW(!0,!0,!0)
k.xr=!0},
bb(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.z("Pixeldart surface size must be positive",null))
if(!r.xr){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.bk!==a||r.bl!==b)r.bl=r.bk=null
s=r.e
s===$&&A.h()
s.c6()
new A.l7(a,b,a,b).C()
if(r.y1==null)r.y1=r.c5()},
c5(){var s=0,r=A.bh(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$c5=A.bi(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.y2
h=n.b
if(!(i!==h||n.bA!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.h()
h=n.w
h===$&&A.h()
g=A.b(m)
s=8
return A.ap(A.xl(i,B.cc.i0(h,A.b(l),g)),$async$c5)
case 8:n.y2=m
n.bA=l
n.bl=n.bk=null
A.xy()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.aj(e)
i=n.w
i===$&&A.h()
n.x=i.a.b+" surface reconfigure failed: "+A.x(k)
n.bk=n.b
n.bl=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.y1=null
i=n.bk
h=n.b
j=i===h&&n.bl===n.c
if(!j)i=n.y2!==h||n.bA!==n.c
else i=!1
if(i)n.y1=n.c5()
s=o.pop()
break
case 5:return A.bf(null,r)
case 1:return A.be(p.at(-1),r)}})
return A.bg($async$c5,r)},
n_(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.xr||b3.Q.length!==0)return
b3.cr=b9
s=b3.k1
r=b3.e
r===$&&A.h()
s.k(0,b5,r.gbn().f6("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbn().f6("texture:grime",512,512))
for(q=0;q<2;++q){p=B.jj[q]
r=b3.e.w
if(r==null)r=A.j(A.m(b7))
s.k(0,p,r.f6("texture:"+p,256,256))}b3.dZ()
b3.p1=b3.e.gbn().po(A.pZ(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k4,m=b3.k3,l=t.N,k=t.pw,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){j=r[q]
i=A.o(l,k)
for(h=A.O(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cC(h,h.r,h.e,A.r(h).i("cC<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.bo.h(0,d)
if(c==null)A.j(A.m("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.j(A.m(b7))
a=e.a
a0=c.a
d=A.pZ(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.x)A.j(A.m(b8))
d.C()
a1=b.b.a.aI(d,b4)
b.r.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.ok,q=0;q<7;++q){a2=B.iM[q]
n=b3.e.w
if(n==null)n=A.j(A.m(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.dV(a2)
h=b3.dV(a2)
k=A.pZ(l,!1,"quarantine-inventory-"+a2,!0,1,b3.dV(a2).c,h.b,k.a,1,1)
if(n.x)A.j(A.m(b8))
k.C()
a1=n.b.a.aI(k,b4)
n.r.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q)b3.lU(b9,r[q])
b3.mm(b9)
$.B.j().setAttribute("data-renderer-house-model-scale",B.c.af(2.25,2))
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){j=r[q]
for(n=j.e,l=n.length,k=j.a,a3=0;a3<n.length;n.length===l||(0,A.t)(n),++a3){a4=n[a3]
h=a4.c
g=a4.d
b3.fF(k,b3.hl(j,a4.b,h,h+a4.e,g,g+a4.f,7902632),new A.u4(a4))}}for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.t)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
j=k.h(0,a5.b)
if(j==null)continue
a6=b3.h1(b9,j,a5)
h=b3.e.w
if(h==null)h=A.j(A.m(b7))
g=a5.a
if(h.x)A.j(A.m(b8))
f=h.a
a6.C()
a1=f.b.aI(a6,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.bu(a6))
h.f.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.p1
f.toString}a7=new A.bF(a1,f,B.B,0,B.T,B.ab,!0,!0,0,b4)
f=b3.f
f===$&&A.h()
B.B.C()
b=f.a
a=b.$ti
b.a4(a.c.a(a1))
b=b.b
if(!(d>=0&&d<b.length))return A.f(b,d)
a6=b[d].c
d=(a6==null?a.y[1].a(a6):a6).d
b=B.B.ae()
d=d.gaD()
a=A.F(d)
A.bl(new A.P(d,a.i("N(1)").a(b.gaF()),a.i("P<1,N>")))
n.k(0,g,new A.iQ(g,h,f.b.ck(a7),a1,a7))}for(q=0;q<r.length;r.length===h||(0,A.t)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
j=k.h(0,a5.b)
if(j==null)continue
o=j.a
b3.fF(o,b3.hl(j,a5.aM(o),a5.ak(o),a5.ak(o)+a5.w,0,a5.x,5915445),new A.u5(a5))}for(r=A.Hh(A.GB(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.k2,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.j(A.m(b7))
b=s.h(0,a9)
a=b3.dT(f)
a0=b3.dT(f)
a=A.pZ(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.dT(f).c,a0.b,a.a,1,1)
if(d.x)A.j(A.m(b8))
a.C()
a1=d.b.a.aI(a,b4)
d.r.l(0,a1)
g.k(0,f,a1)
c=a1}d=b3.e.w
if(d==null)d=A.j(A.m(b7))
b=a8.c
a=a8.a
f=""+f
if(d.x)A.j(A.m(b8))
a0=d.a
b.C()
a1=a0.b.aI(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.bu(b))
d.f.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.ai.q(0,a))A.j(A.z("unknown exterior cell: "+a,b4))
b2=new A.bF(a1,c,B.B,-1,B.T,B.ab,B.lp.q(0,a),!0,0,b4)
n.k(0,b1,a)
m.k(0,b1,b2)
f=b3.f
f===$&&A.h()
B.B.C()
d=f.a
b=d.$ti
d.a4(b.c.a(a1))
d=d.b
if(!(b0>=0&&b0<d.length))return A.f(d,b0)
a6=d[b0].c
d=(a6==null?b.y[1].a(a6):a6).d
b=B.B.ae()
d=d.gaD()
a=A.F(d)
A.bl(new A.P(d,a.i("N(1)").a(b.gaF()),a.i("P<1,N>")))
k.k(0,b1,f.b.ck(b2))}},
ke(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ag(a8.e,t.fl)
if(!a5.xr)return
for(s=a5.ch,r=new A.K(s,A.r(s).i("K<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.ba(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.j(A.m(a6))
o=n.a
if(p.x)A.j(A.m(a7))
p.a.ba(o)
p.f.a5(0,o)}}s.H(0)
q.H(0)
r=a5.cx
B.a.H(r)
for(p=a5.id,o=p.length,m=a8.c,l=a5.ok,k=0;k<o;++k){j=p[k]
i=a5.cr
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.d0(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.j(A.m(a6))
f=a5.lX(g,j,m)
e=j.a
if(i.x)A.j(A.m(a7))
d=i.a
f.C()
c=d.b.aI(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bu(f))
i.f.l(0,c)
i=j.f
f=i.a
a=B.a6.gad()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.lb(new A.N(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.kT(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bF(c,a2,i,-1,B.T,B.ab,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.C()
a2=d.a
f=a2.$ti
a2.a4(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.f(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.ae()
f=f.gaD()
b=A.F(f)
A.bl(new A.P(f,b.i("N(1)").a(i.gaF()),b.i("P<1,N>")))
s.k(0,e,d.b.ck(n))}$.B.j().setAttribute("data-renderer-inventory-items",""+s.a)},
kp(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aL([s],r)
for(p=c1.aE(s),o=J.S(p.a),p=new A.U(o,p.b,p.$ti.i("U<1>"));p.m();){n=o.gn()
m=n.bW(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.K(b9,A.r(b9).i("K<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.e([],p)
for(g=J.aE(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.f(i,f)
e=b8.cc(i[f],k)
d=b8.f
d===$&&A.h()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a4(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.f(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.ae()
a=a.gaD()
a0=A.F(a)
A.bl(new A.P(a,a0.i("N(1)").a(b.gaF()),a0.i("P<1,N>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a4(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.f(d,c)
d[c].sb6(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gS(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.t)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.h()
o=b8.cc(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a4(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ae()
i=i.gaD()
g=A.F(i)
A.bl(new A.P(i,g.i("N(1)").a(n.gaF()),g.i("P<1,N>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a4(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
p[n].sb6(o)}b9=b8.fr
s=A.r(b9).i("ad<1>")
s=A.J(new A.ad(b9,s),s.i("p.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.t)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.cc(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.h()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a4(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.f(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.ae()
g=g.gaD()
d=A.F(g)
A.bl(new A.P(g,d.i("N(1)").a(i.gaF()),d.i("P<1,N>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a4(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].sb6(e)
b9.k(0,a5.a,a5.nr(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.h()
i=b8.cc(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a4(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.f(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.ae()
d=d.gaD()
c=A.F(d)
A.bl(new A.P(d,c.i("N(1)").a(g.gaF()),c.i("P<1,N>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a4(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.f(n,c)
n[c].sb6(i)}a9=new A.k0().nf(c2)
b9=$.B.j()
s=A.J(a9,A.r(a9).c)
B.a.Z(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.a_(s,","))
b9=b8.dx
r=new A.k0().jn(new A.u6(b8),new A.ad(b9,A.r(b9).i("ad<1>")),a9,r)
b0=A.ku(r,r.$ti.i("p.E"))
b9=b8.db
s=A.r(b9).i("ad<1>")
s=A.J(new A.ad(b9,s),s.i("p.E"))
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
e=b8.cc(a8,b6?-1:0)
o=b8.f
o===$&&A.h()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.a4(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ae()
i=i.gaD()
g=A.F(i)
A.bl(new A.P(i,g.i("N(1)").a(n.gaF()),g.i("P<1,N>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a4(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.f(o,g)
o[g].sb6(e)
b9.k(0,b4,e)}$.B.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.B.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.r(b0)
s=b9.i("dn<1,i>")
b7=A.J(new A.dn(b0,b9.i("i(1)").a(new A.u7(b8)),s),s.i("p.E"))
B.a.Z(b7)
$.B.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a_(b7,","))},
pn(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.xr)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.hw(b0,n)
l=J.aE(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.e([],t.s6)
j=A.e([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.h()
d=d.w
if(d==null)d=A.j(A.m(a8))
c=a7.hg(e.b)
b=g.b
if(d.x)A.j(A.m(a9))
a=d.a
c.C()
a0=a.b.aI(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bu(c))
d.f.l(0,a0)
if(!(f<q.length))return A.f(q,f)
a1=q[f]
d=a1.c
a2=new A.bF(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.h()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a4(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.f(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ae()
b=b.gaD()
a3=A.F(b)
A.bl(new A.P(b,a3.i("N(1)").a(d.gaF()),a3.i("P<1,N>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a4(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.f(c,a)
c[a].sb6(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.f(o,f)
a6=o[f]
B.a.a5(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.j(A.m(a8)):a
if(d.x)A.j(A.m(a9))
d.a.ba(a6)
d.f.a5(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gS(j))
$.B.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.cs+1));++a7.cs},
f5(a,b){var s,r,q,p,o,n,m,l,k=this
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
p===$&&A.h()
m=p.gbn().jO(k.h1(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bF(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.hS(l)
p.b.jT(n,l)
s.k(0,b,r.i3(l,m))
s=k.y
n=r.d
B.a.a5(s,n)
B.a.l(s,m)
k.e.gbn().pp(n)},
kf(c8,c9,d0,d1,d2,d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="wetness_override",c2="fog_density",c3="fog_height_falloff",c4="rain_override",c5=A.aL([c9],t.N),c6=c8.e,c7=c6.h(0,c9)
if(c7!=null)for(s=c7.a,r=c8.aE(s),q=J.S(r.a),r=new A.U(q,r.b,r.$ti.i("U<1>"));r.m();){p=q.gn()
o=p.bW(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&c6.h(0,o)!=null)c5.l(0,o)}n=new A.kf(c8).jW(c5,d0)
c6=t.jC
m=A.e([],c6)
l=A.e([],c6)
for(k=0;k<n.length;++k){j=n[k]
c6=k===0
s=c6?"spot":"point"
r=j.b
q=j.d
p=j.c
if(s!=="point"&&s!=="spot")A.j(A.am(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.j(A.am(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.j(A.am(p,"radius","must be finite and > 0"))
c6=c6?l:m
B.a.l(c6,new A.aT(k,s,j.a,new A.a((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}c6=c0.fx
c6===$&&A.h()
i=c6.pk(d0,m,l)
c6=A.o(t.S,t.A_)
for(k=0;k<n.length;++k)c6.k(0,k,n[k])
s=A.e([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.t)(r),++h){g=r[h]
p=c6.h(0,g.a).a
f=g.d
s.push(new A.kM(new A.N(p.a,p.b,p.c),new A.c1(f.a,f.b,f.c),g.e,g.f))}r=A.e([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.t)(q),++h){g=q[h]
f=g.a
e=c6.h(0,f).a
d=g.d
r.push(new A.bI(f,new A.N(e.a,e.b,e.c),B.aN,new A.c1(d.a,d.b,d.c),g.e,g.f,1.05,1.4))}c0.lh(i,++c0.fy)
c=d3.c
b=B.c.M(B.c.M(d5,24)+24,24)
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
a7=A.cf(B.kI,B.bx,a6)
a8=A.cf(B.kL,B.bw,a6)
a9=A.cf(B.kD,B.by,a6)
b0=0.3+0.5*a6
b1=0.25+0.2*a6}else if(c6&&b<14){a7=B.bx
a8=B.bw
a9=B.by
b0=0.85
b1=0.45}else if(b>=14&&b<a2){a6=(b-14)/(a2-14)
a7=A.cf(B.bx,B.dq,a6)
a8=A.cf(B.bw,B.dt,a6)
a9=A.cf(B.by,B.ds,a6)
b0=0.85*(1-a6*0.35)
b1=0.45*(1-a6*0.25)}else if(b>=a2&&b<a2+1.5){a6=(b-a2)/1.5
a7=A.cf(B.dq,B.aH,a6)
a8=A.cf(B.dt,B.aG,a6)
a9=A.cf(B.ds,B.aI,a6)
b0=0.55*(1-a6*0.8)
b1=0.34*(1-a6*0.65)}else{c6=a2+1.5
if(b>=c6&&b<a2+3){a6=(b-c6)/1.5
a7=A.cf(B.aH,B.aH,a6)
a8=A.cf(B.aG,B.aG,a6)
a9=A.cf(B.aI,B.aI,a6)
b0=0.11*(1-a6*0.25)
b1=0.16*(1-a6*0.15)}else{a7=B.aH
a8=B.aG
a9=B.aI
b0=0.15
b1=0.18}}if(a>0){b2=A.cf(a9,B.kT,a*0.7)
b0*=1-a*0.35
b1*=1-a*0.15}else b2=a9
b3=d4?1:0.15
B.c.E(a*0.75+B.c.E(0.3333333333333333,0,1)*0.25,0,1)
c6=$.Bt()
d=$.mK()
c6=c6.a
c6.k(0,"pbrRoughnessScale",d.P("pbr_roughness"))
c6.k(0,"pbrMetallicScale",d.P("pbr_metallic"))
c6.k(0,"pbrSpecularMult",d.P("pbr_specular"))
c6.k(0,"pbrWrapDiffuse",d.P("pbr_wrap_diffuse"))
c6.k(0,"pbrFresnelF0",d.P("pbr_fresnel_f0"))
c6.k(0,"ambientLightScale",d.P("light_ambient_mult"))
c6.k(0,"directLightScale",d.P("light_direct_mult"))
c6.k(0,"ssdoEnabled",d.b2("shadow_ssdo_enable"))
c6.k(0,"aoIntensity",d.P("shadow_ao_intensity"))
c6.k(0,"csmEnabled",d.b2("shadow_csm_enable"))
c6.k(0,"csmHardness",d.P("shadow_csm_hardness"))
c6.k(0,"shadowBias",d.P("shadow_bias"))
c6.k(0,"weatheringEnabled",d.b2("weathering_enable"))
c6.k(0,"normalBumpStrength",d.P("normal_bump_strength"))
c6.k(0,"grimeAccumulation",d.P("grime_accumulation"))
c6.k(0,"wetnessOverride",d.P(c1))
c6.k(0,"fogEnabled",d.b2("fog_enable"))
c6.k(0,"fogDensity",d.P(c2))
c6.k(0,"fogHeightFalloff",d.P(c3))
c6.k(0,"volumetricEnabled",d.b2("volumetric_light_enable"))
c6.k(0,"volumetricShaftIntensity",d.P("volumetric_shaft_intensity"))
c6.k(0,"volumetricScattering",d.P("volumetric_scattering"))
c6.k(0,"ssrEnabled",d.b2("ssr_enable"))
c6.k(0,"tonemapMode",B.c.ar(d.P("tonemap_mode")))
c6.k(0,"ssssEnabled",d.b2("ssss_enable"))
c6.k(0,"taaEnabled",d.b2("taa_enable"))
c6.k(0,"lensFlareEnabled",d.b2("lens_flare_enable"))
c6.k(0,"timeOverride",d.P("time_override"))
c6.k(0,"rainOverride",d.P(c4))
c6.k(0,"postBloom",d.P("post_bloom"))
c6.k(0,"postVignette",d.P("post_vignette"))
c6.k(0,"postChromaticAberration",d.P("post_chromatic_aberration"))
c6.k(0,"postFilmGrain",d.P("post_film_grain"))
c6.k(0,"postExposure",d.P("post_exposure"))
c6.k(0,"postSaturation",d.P("post_saturation"))
c6.k(0,"debugViewMode",d.e)
if(d.P(c4)>=0)c=d.P(c4)
if(d.P(c1)>=0)d.P(c1)
c6=$.Bs()
c6.pU(0.0166,c)
b4=c6.f
b5=B.c.E(Math.sin(Math.max(0,a3)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
b6=b5>0.001
b7=b6?new A.N(q,p,f):new A.N(-q,e,-f)
b8=b6?new A.c1(a7.c,a7.b,a7.a):new A.c1(0.35,0.45,0.65)
c6=b4.a
if(c6){q=b4.b
b9=new A.c1(b8.a+b4.c*q*2,b8.b+b4.d*q*2,b8.c+b4.e*q*2.5)}else b9=b8
b0*=b3
if(c6)b0+=b4.b*4.5
c6=Math.max(0.045,b1*(b6?b5:1)*b3)
c0.p3=new A.k3(B.id,new A.c1(b2.c*0.08,b2.b*0.08,b2.a*0.08),1.5/(1+c*0.45),14/(1+c*0.16),d.P(c3),d.P(c2),new A.c1(a8.c,a8.b,a8.a),c6,new A.o6(b7,b9,b0),s,r)},
bd(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.xr)throw A.d(A.m("Pixeldart runtime is not initialized"))
s=i.p2
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dw(s)
s=$.y4()
q=s.b
p=s.c
o=A.wM(i.b/i.c,p,s.a,q)
p=new A.fs(r,o,o.a8(0,r),B.am,B.me,q,p,i.b/i.c)
s=p}q=i.p3
p=i.p4
n=i.x1++
m=i.rx
l=new A.rR()
$.y_()
k=$.qB.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.n2(j,new A.op(s,q,p,n,m))
i.R8=i.e.o6()
s=$.qB.$0()
l.b=s
i.RG=l.go3()/1000},
bE(a){},
jy(){},
jM(){++this.ry},
hw(a,b){var s=A.AE(a,b),r=A.GA(a,b),q=A.J(s.c,t.i)
B.a.J(q,r)
return A.e([new A.h0("wall",new Float32Array(A.a2(q))),new A.h0("floor",s.a),new A.h0("ceiling",s.b)],t.pv)},
hg(a){var s,r,q,p,o,n=A.e([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.f(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.f(a,o)
B.a.l(n,new A.N(q,p,a[o]))}if(n.length===0)throw A.d(A.m("house surface mesh cannot be empty"))
return new A.cl(B.ac,a,null,A.bl(n))},
lU(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.hw(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.d(A.m("surface materials missing for room "+a0))
s=A.e([],t.s6)
r=A.e([],t.s3)
q=A.e([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.h()
k=k.w
if(k==null)k=A.j(A.m("renderer is not initialized"))
j=b.hg(l.b)
i=l.a
if(k.x)A.j(A.m("resource library is disposed"))
h=k.a
j.C()
g=h.b.aI(j,n+i)
f=g.a
h.c.k(0,f,h.bu(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bF(g,i,B.B,-1,B.T,B.ab,!0,!0,0,null)
i=b.f
i===$&&A.h()
B.B.C()
k=i.a
j=k.$ti
k.a4(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.f(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.B.ae()
k=k.gaD()
h=A.F(k)
A.bl(new A.P(k,h.i("N(1)").a(j.gaF()),h.i("P<1,N>")))
c=i.b.ck(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gS(r))
if(q.length!==0)b.at.k(0,a0,B.a.gS(q))},
mm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.e([],f),d=A.e([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.t)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.O(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cC(l,l.r,l.e,A.r(l).i("cC<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bo.h(0,i)
if(h==null)A.j(A.m("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Z(d)
f=$.B.j()
B.a.Z(e)
f.setAttribute("data-renderer-house-materials",B.a.a_(e,","))
$.B.j().setAttribute("data-renderer-house-surface-bindings",B.a.a_(d,","))},
fF(a,b,c){var s,r,q,p=this
t.Bs.a(c)
s=p.e
s===$&&A.h()
r=s.gbn().jO(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bF(r,p.m1(a),B.B,0,B.T,B.ab,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.hS(q)
B.a.l(p.go,new A.lX(a,s.b.ck(q),q,c))},
m1(a){var s=this.k3.h(0,a)
if(s==null){s=this.p1
s.toString}return s},
lX(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d3(new Float32Array(5376))
g=this.lW(a0.b)
r=new A.a(d,b,f)
q=new A.a(e,b,f)
p=new A.a(e,c,f)
o=new A.a(d,c,f)
n=new A.a(d,b,a)
m=new A.a(e,b,a)
l=new A.a(e,c,a)
k=new A.a(d,c,a)
s.T(q,r,o,p,g)
s.T(n,m,l,k,g)
s.T(r,n,k,o,g)
s.T(m,q,p,l,g)
s.T(r,q,m,n,g)
s.T(o,k,l,p,g)
j=B.r.aS(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.N(e,d,j[c]))}return new A.cl(B.ac,j,null,A.bl(g))},
lW(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dT(a){var s
A:{if(0===a){s=B.kE
break A}if(1===a){s=B.kG
break A}if(2===a){s=B.kO
break A}if(3===a){s=B.kX
break A}if(4===a){s=B.kZ
break A}if(5===a){s=B.kM
break A}if(6===a){s=B.kW
break A}if(7===a){s=B.kR
break A}s=B.kU
break A}return s},
dV(a){var s
A:{if("architecture"===a){s=B.kF
break A}if("furniture"===a){s=B.dr
break A}if("fixture"===a){s=B.kQ
break A}if("service"===a){s=B.kS
break A}if("story"===a){s=B.kP
break A}if("decor"===a){s=B.kK
break A}if("micro"===a){s=B.kN
break A}s=B.dr
break A}return s},
b_(a){return this.oF(t.G.a(a))},
oF(a){var s=0,r=A.bh(t.H),q,p=this,o,n,m,l
var $async$b_=A.bi(function(b,c){if(b===1)return A.be(c,r)
for(;;)switch(s){case 0:if(!p.xr){s=1
break}o=A.e([],t.iJ)
for(n=0;n<4;++n){m=B.ip[n]
l=a.h(0,m)
if(l!=null)o.push(p.cU(m,l))}s=3
return A.ap(A.ov(o,t.H),$async$b_)
case 3:case 1:return A.bf(q,r)}})
return A.bg($async$b_,r)},
cU(a,b){return this.m0(a,b)},
m0(a,b){var s=0,r=A.bh(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cU=A.bi(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.c(A.c(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ap(A.b3(A.c(m.decode()),t.X),$async$cU)
case 7:g=A.c(A.c(h.document).createElement("canvas"))
g.width=A.b(m.naturalWidth)
g.height=A.b(m.naturalHeight)
l=g
k=A.l(l.getContext("2d"))
if(!t.m.b(k)){h=A.m("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mV.a(A.c(k.getImageData(0,0,A.b(m.naturalWidth),A.b(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gbn()
f=new Uint8Array(A.a2(j))
if(h.x)A.j(A.m("resource library is disposed"))
h.c.pV(d,f)
$.B.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dZ()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.aj(c)
h=$.B.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dZ()
A.c(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.x(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bf(q,r)
case 2:return A.be(o.at(-1),r)}})
return A.bg($async$cU,r)},
dZ(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.xr||h.k1.a===0)return
s=h.k1
r=A.r(s).i("K<1,2>")
r=A.kv(new A.K(s,r),r.i("co(p.E)").a(new A.u0()),r.i("p.E"),t.jP)
q=A.J(r,A.r(r).i("p.E"))
s=h.e
s===$&&A.h()
s=s.gbn()
p=s.d
o=(p===$?s.d=new A.rY(s.c,A.o(t.Aj,t.y)):p).pj(q)
s=o.a
n=A.e(s.slice(0),A.F(s))
B.a.U(n,new A.u1())
s=A.F(n)
r=s.i("i(1)")
s=s.i("P<1,i>")
m=new A.P(n,r.a(new A.u2()),s).a_(0,",")
l=new A.P(n,r.a(new A.u3()),s).a_(0,",")
s=o.cR(B.dI)
r=o.cR(B.dJ)
k=o.cR(B.dK)
j=o.cR(B.dL);++h.x2
i=$.B.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.x2)
if(!A.R($.B.j().hasAttribute("data-renderer-texture-residency-initial")))$.B.j().setAttribute("data-renderer-texture-residency-initial",m)},
cc(a,b){return new A.bF(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
h1(a,b,c){var s,r,q,p,o,n=A.Gz(a,b,c),m=n.length
if(m===0)throw A.d(A.m("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.N(q,p,n[o]))}return new A.cl(B.ac,n,null,A.bl(s))},
hl(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Y.j().aL(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.d3(new Float32Array(5376))
o.T(k[0],k[1],k[2],k[3],g)
n=B.r.aS(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.N(r,q,n[p]))}return new A.cl(B.ac,n,null,A.bl(k))},
lh(a,b){var s,r,q,p=a.e,o=A.r(p).i("K<1,2>"),n=A.J(new A.K(p,o),o.i("p.E"))
B.a.U(n,new A.tX())
p=$.B.j()
o=a.a
s=A.F(o)
r=a.c
q=A.F(r)
p.setAttribute("data-renderer-light-selection","points="+new A.P(o,s.i("k(1)").a(new A.tY()),s.i("P<1,k>")).a_(0,":")+";spots="+new A.P(r,q.i("k(1)").a(new A.tZ()),q.i("P<1,k>")).a_(0,":"))
q=A.F(n)
p.setAttribute("data-renderer-light-rejections",new A.P(n,q.i("i(1)").a(new A.u_()),q.i("P<1,i>")).a_(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
$iwU:1}
A.u4.prototype={
$0(){return!this.a.w},
$S:26}
A.u5.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:26}
A.u6.prototype={
$1(a){var s=this.a.dx.h(0,A.v(a))
s.toString
return s},
$S:33}
A.u7.prototype={
$1(a){var s,r,q,p
A.v(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.d(A.m("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:33}
A.u0.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.co(s,a.b,r)},
$S:153}
A.u1.prototype={
$2(a,b){var s=t.d
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:154}
A.u2.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:32}
A.u3.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:32}
A.tX.prototype={
$2(a,b){var s=t.ou
return B.d.F(s.a(a).a,s.a(b).a)},
$S:156}
A.tY.prototype={
$1(a){return t.p.a(a).a},
$S:30}
A.tZ.prototype={
$1(a){return t.p.a(a).a},
$S:30}
A.u_.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:158}
A.fY.prototype={
gbx(){return A.qV("legacy",B.n,this.e,this.f,"legacy")},
ge8(){return this.x},
bm(){var s,r=this
if(r.w)return
s=A.Df(r.a,r.b,r.c)
r.r!==$&&A.L()
r.r=s
s.iJ=s.iI=s.iH=r.d
r.w=!0},
bb(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.z("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.bb(a,b)}},
bd(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.w)throw A.d(A.m("legacy runtime is not initialized"))
if(i.x||$.hd==null)return;++i.y
$.B.j().setAttribute("data-renderer-frame-submits",""+i.y)
s=i.r
s===$&&A.h()
r=$.A7
q=$.bW.j()
p=B.c.E($.b1.j().gcK(),0,1)
s.iN=new A.a(Math.cos((p-0.5)*3.141592653589793),Math.sin(3.141592653589793*p),-0.5).gad().gad()
s.sjx(A.Hf($.b1.j().gcK()))
o=Math.max(0.045,0.52*$.b1.j().gi4())
s.iR=o<0?0:o
o=$.bV.j()
n=o.w+=r
m=0.025*o.r
o.a=o.a.a7(0,o.d.a8(0,(A.wo(n*0.28,1309)*2-1)*m)).a7(0,o.c.a8(0,(A.wo(o.w*0.28,2839)*2-1)*m))
o=$.bV.j()
s.iS=o.a
s.ey=o.b
s.ez=o.c
s.eA=o.d
l=A.Fj(0,0.25,0.11)
s.eB=l.a
s.eC=l.b
s.eD=l.c
o=s.da
k=o==null?s.cn:o
if(k==null)k=s.bz
o=s.b7
o.bh(k)
s.aW.depthMask(!0)
o.nj(k,s.eB/255,s.eC/255,s.eD/255)
s.es=s.dc=0
s.ev=!1
s.cp=0
j=$.hd
if(j!=null)j.nV($.as,$.js())
s.oh(r,q)
$.zB.j().fe(B.ev,r)},
bE(a){},
jy(){this.x=!0},
jM(){this.x=!1},
$iwU:1}
A.lX.prototype={}
A.iQ.prototype={
i3(a,b){var s=this,r=b==null?s.d:b
return new A.iQ(s.a,s.b,s.c,r,a)},
nr(a){return this.i3(a,null)}}
A.tA.prototype={}
A.uz.prototype={
$2(a,b){var s
A.xF(a,A.x(b))
switch(a){case"master":s=$.by
if(s!=null)s.kj(b)
break
case"voice":s=$.by
if(s!=null)s.kl(b)
break
case"effects":s=$.by
if(s!=null)s.ki(b)
break
case"ambience":s=$.by
if(s!=null)s.kh(b)
break
case"music":s=$.by
if(s!=null)s.kk(b)
break}},
$S:29}
A.uA.prototype={
$1(a){var s
A.xF("muted",""+a)
s=$.by
if(s!=null)s.fs(a)},
$S:10}
A.uB.prototype={
$1(a){var s
A.xF("mono",""+a)
s=$.by
if(s!=null)s.du(a)},
$S:10}
A.uH.prototype={
$2(a,b){A.xG(a,A.x(b))
A.zG(a,b)},
$S:29}
A.uI.prototype={
$1(a){var s="high-contrast"
A.xG(s,""+a)
A.uo(s,a)},
$S:10}
A.uJ.prototype={
$1(a){var s="strong-highlights"
A.xG(s,""+a)
A.uo(s,a)},
$S:10}
A.uK.prototype={
$1(a){$.dh().pu(a)
A.vm()
A.zI()},
$S:160}
A.uL.prototype={
$0(){var s=$.dh()
s.a=A.dB(null,1)
s.b=A.dB(null,1)
A.vm()
A.zI()},
$S:0}
A.uM.prototype={
$0(){A.dM(this.a)},
$S:0}
A.uN.prototype={
$0(){this.a.a9()},
$S:0}
A.uO.prototype={
$0(){A.dM(this.a)},
$S:0}
A.uC.prototype={
$0(){A.hh(this.a)},
$S:0}
A.uD.prototype={
$1(a){$.jg=a
A.Ae()
A.xb()},
$S:161}
A.uE.prototype={
$1(a){$.xn=a
A.Ag()
A.zH()},
$S:162}
A.uF.prototype={
$1(a){$.el=a
A.xu()
A.mo()},
$S:163}
A.uG.prototype={
$0(){$.el=B.aq
$.fa.j().fo($.el)
A.xu()
A.mo()},
$S:0}
A.uw.prototype={
$1(a){var s,r=A.AT(a,A.A_()),q=r.a
$.vb=A.kc(q,a)
A.Ah()
s=r.b
$.h9.j().ft(a,q,s)
$.B.j().setAttribute("data-graphics-fallback",B.a.a_(s,"|"))},
$S:164}
A.ux.prototype={
$0(){A.dM($.h9.j())},
$S:0}
A.uy.prototype={
$0(){A.dM($.h9.j())},
$S:0}
A.ut.prototype={
$1(a){var s,r
$.xj=a
$.ae.j().fp(a.r)
s=$.ae.j()
r=s.ch
r.a=a.f
r.f8()
s.be()
A.Af()},
$S:165}
A.uu.prototype={
$0(){A.dM($.j8.j())},
$S:0}
A.uv.prototype={
$0(){A.dM($.j8.j())},
$S:0}
A.vf.prototype={
$0(){$.vw=A.R(this.a.matches)
$.xJ=A.R(this.b.matches)
A.mo()},
$S:0}
A.vd.prototype={
$1(a){return this.a.$0()},
$S:2}
A.ve.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vS.prototype={
$1(a){var s
try{A.yp(a,this.a)
return!0}catch(s){if(A.aj(s) instanceof A.H)return!1
else throw s}},
$S:166}
A.vT.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.je.j()
break
case 5:p=$.fa.j()
break
case 1:p=$.h9.j()
break
case 4:p=$.h7.j()
break
case 2:p=$.ja.j()
break
case 3:p=$.j8.j()
break}s=p
r=null
switch(o){case 0:r=B.k8
break
case 5:r=B.kd
break
case 1:r=B.k9
break
case 4:r=B.kc
break
case 2:r=B.ka
break
case 3:r=B.kb
break}q=r
p=B.d6.h(0,a)
p.toString
A.xt(s,q,p)},
$S:167}
A.vU.prototype={
$0(){A.dM($.hb.j())},
$S:0}
A.w4.prototype={
$0(){return A.dM($.hb.j())},
$S:0}
A.wc.prototype={
$0(){$.ct.j().a9()},
$S:0}
A.wd.prototype={
$0(){$.ct.j().a9()},
$S:0}
A.we.prototype={
$0(){A.xt($.hb.j(),B.dc,"pause.settings")},
$S:0}
A.wf.prototype={
$0(){$.ct.j().a9()
A.jm($.jb.j())},
$S:0}
A.wg.prototype={
$0(){A.mD("saved")},
$S:0}
A.wh.prototype={
$0(){$.ct.j().a9()
A.jm($.jb.j())},
$S:0}
A.wi.prototype={
$0(){A.xt($.mk.j(),B.ke,"pause.credits")},
$S:0}
A.vV.prototype={
$0(){return A.hh($.ct.j())},
$S:0}
A.vW.prototype={
$0(){return A.hh($.ha.j())},
$S:0}
A.vX.prototype={
$2(a,b){var s,r
if($.aB.j().y){s=$.aI.j().gcj()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.f(r,a)
A.ES(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.f(B.cS,a)
A.ER(B.cS[a])}}},
$S:168}
A.vY.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gac().a===21){A.Am(!1)
return}s=$.Y.j().r.b
$.V.j().kz(a,b,$.as)
r=$.Y.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.dt()
if(typeof n!=="number")return A.jq(n)
if(!(o<n))break
if($.Y.b===$.Y)A.j(A.a9(""))
p=B.a.h(B.N,q).b
o=$.hd
if(o!=null)o.dj(p)
o=$.bz
if(o!=null){n=$.Y.b
if(n===$.Y)A.j(A.a9(""))
o.pn(n,p)}o=q
if(typeof o!=="number")return o.a7()
q=o+1}A.mD("saved after sleep")},
$S:169}
A.vZ.prototype={
$0(){return A.hh($.mm.j())},
$S:0}
A.w_.prototype={
$0(){return A.hh($.jb.j())},
$S:0}
A.w0.prototype={
$0(){return A.dM($.mk.j())},
$S:0}
A.w1.prototype={
$0(){A.hh($.j9.j())},
$S:0}
A.w2.prototype={
$0(){A.hh($.j9.j())},
$S:0}
A.w3.prototype={
$1(a){return A.Al()},
$S:2}
A.w5.prototype={
$1(a){if(A.v(A.c(v.G.document).visibilityState)==="hidden")A.FP()},
$S:1}
A.w6.prototype={
$1(a){var s,r,q,p,o,n,m=A.c(a)
if(A.v(m.code)==="CapsLock"&&!A.R(m.repeat)){m.preventDefault()
p=$.mK()
o=!p.a
p.a=o
if(o)A.px(A.c(v.G.document),"exitPointerLock",t.X)
else $.ae.j().dk($.B.j())
return}p=$.mK()
if(p.a&&!A.R(m.repeat)){if(A.v(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ae.j().dk($.B.j())
return}if(A.v(m.code)==="ArrowUp"||A.v(m.code)==="KeyW"){m.preventDefault()
n=p.gcw().length
if(n>0)p.c=B.d.M(p.c-1+n,n)
return}if(A.v(m.code)==="ArrowDown"||A.v(m.code)==="KeyS"){m.preventDefault()
n=p.gcw().length
if(n>0)p.c=B.d.M(p.c+1,n)
return}if(A.v(m.code)==="ArrowLeft"||A.v(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.d0[B.d.M(p.e.a-1+7,7)]
else{p=p.gd3()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y-p.w,p.f,p.r)}return}if(A.v(m.code)==="ArrowRight"||A.v(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.d0[(p.e.a+1)%7]
else{p=p.gd3()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y+p.w,p.f,p.r)}return}if(A.v(m.code)==="KeyQ"){m.preventDefault()
p=p.gd3()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y-p.w*0.2,p.f,p.r)
return}if(A.v(m.code)==="KeyE"){m.preventDefault()
p=p.gd3()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.E(p.y+p.w*0.2,p.f,p.r)
return}if(A.v(m.code)==="KeyR"){m.preventDefault()
if(A.R(m.shiftKey))p.pt()
else p.pv()
return}if(B.b.W(A.v(m.code),"Digit")||B.b.W(A.v(m.code),"Numpad")){o=A.v(m.code)
o=A.xU(o,"Digit","")
s=A.xU(o,"Numpad","")
r=A.dy(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.aB.j().y&&!A.R(m.repeat))if($.cN().oo(A.v(m.code))){m.preventDefault()
return}if(A.v(m.code)==="Escape"&&!A.R(m.repeat)){p=$.b2
if(p==null)A.jm($.ct.j())
else p.a9()
return}q=$.b2==null&&!p.a
if(!A.R(m.repeat)&&q)$.dc.j().bE(new A.kW(A.v(m.code),!0,1))
if(A.v(m.code)==="KeyP"&&!A.R(m.repeat)&&$.Bk())$.mz=!$.mz
if(A.v(m.code)==="KeyR"&&!A.R(m.repeat)&&q&&$.Ax){p=$.hi
if(p!=null)p.bY()}if((A.v(m.code)==="KeyJ"||A.v(m.code)==="Tab")&&!A.R(m.repeat)&&!$.aB.j().y){m.preventDefault()
A.jp($.ha.j())}if(A.v(m.code)==="KeyL"&&!A.R(m.repeat)&&!$.aB.j().y)A.jp($.mm.j())
if(A.v(m.code)==="KeyH"&&!A.R(m.repeat)&&!$.aB.j().y)A.jp($.jb.j())
if(A.v(m.code)==="KeyO"&&!A.R(m.repeat)&&!$.aB.j().y)A.jp($.jd.j())
if(A.v(m.code)==="KeyK"&&!A.R(m.repeat)&&q)A.mD("saved")},
$S:1}
A.w7.prototype={
$1(a){var s=A.c(a)
if($.b2==null)$.dc.j().bE(new A.kW(A.v(s.code),!1,0))},
$S:1}
A.w8.prototype={
$1(a){return A.zK()},
$S:2}
A.w9.prototype={
$1(a){return A.zK()},
$S:2}
A.wa.prototype={
$1(a){return A.Fi(A.c(a))},
$S:2}
A.wb.prototype={
$1(a){var s=A.c(a)
if($.aB.j().y){s.preventDefault()
A.Fh(s)
return}$.ae.j().dk($.B.j())},
$S:1}
A.vg.prototype={
$1(a){var s=A.v(A.c(a).message)
A.vq(s,null)},
$S:1}
A.vh.prototype={
$1(a){var s
A.c(a)
s=a.reason
A.vq("unhandled rejection: "+A.x(s==null?A.v(a.type):s),null)},
$S:1}
A.vl.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:34}
A.vu.prototype={
$0(){this.a.className=""},
$S:12}
A.vz.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:40}
A.vk.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:23}
A.vr.prototype={
$1(a){return t.g.a(a).e},
$S:21}
A.vn.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.vo.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.e2.prototype
s.kI=s.p
s=A.p.prototype
s.kH=s.dn
s=A.i5.prototype
s.kJ=s.bV})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Fq","CH",31)
r(J.u.prototype,"gaw","q",9)
q(A,"FE","CZ",35)
r(A.aJ.prototype,"gaw","q",9)
p(A.cj.prototype,"gnm","V",9)
o(A,"Gv","DR",17)
o(A,"Gw","DS",17)
o(A,"Gx","DT",17)
q(A,"AD","Gb",0)
s(A,"GD","CM",31)
r(A.cq.prototype,"gaw","q",9)
r(A.fX.prototype,"gaw","q",9)
o(A,"GG","F_",11)
p(A.kx.prototype,"gpB","pC",141)
var n
p(n=A.la.prototype,"gpx","py",7)
p(n,"gpF","pG",7)
p(n,"gpH","pI",7)
p(n,"gpz","pA",7)
p(n,"gpD","pE",7)
q(A,"AI","DW",172)
q(A,"Id","wQ",26)
p(A.dw.prototype,"gaF","jQ",56)
p(n=A.ki.prototype,"gm3","m4",2)
p(n,"gm5","m6",2)
p(n,"gm9","ma",2)
p(n,"gmd","me",2)
p(n,"gmf","mg",2)
p(n,"gmb","mc",2)
p(n,"gm7","m8",2)
o(A,"H4","zQ",11)
o(A,"H8","zP",11)
o(A,"GX","CE",173)
o(A,"GY","CF",174)
o(A,"Hc","Cy",175)
p(A.i5.prototype,"gmh","mi",2)
p(A.fS.prototype,"glQ","lR",126)
p(A.ln.prototype,"gox","oy",25)
o(A,"AS","FS",176)
q(A,"AR","EX",0)
o(A,"H0","ET",117)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.G,null)
q(A.G,[A.wG,J.kk,A.ih,J.eu,A.p,A.hv,A.dU,A.aq,A.W,A.r8,A.aV,A.hW,A.U,A.hG,A.hD,A.ix,A.aw,A.d5,A.bx,A.fJ,A.fv,A.f6,A.dA,A.t4,A.qd,A.hE,A.iW,A.aa,A.pT,A.ck,A.an,A.cC,A.hQ,A.lR,A.lx,A.io,A.ma,A.tC,A.ue,A.cH,A.lK,A.md,A.ub,A.ly,A.cL,A.b4,A.lC,A.f2,A.aA,A.lz,A.m8,A.j6,A.iG,A.lQ,A.f7,A.iK,A.j0,A.me,A.ez,A.jO,A.tV,A.uf,A.eA,A.dW,A.lH,A.kH,A.il,A.tD,A.H,A.M,A.au,A.mb,A.rR,A.bs,A.j2,A.t6,A.m4,A.qc,A.lN,A.eg,A.qE,A.eP,A.kO,A.nJ,A.nK,A.nM,A.nL,A.kN,A.fs,A.k3,A.op,A.dz,A.kd,A.c1,A.o6,A.kM,A.bI,A.eL,A.bJ,A.ta,A.cl,A.qe,A.kP,A.kX,A.bF,A.l7,A.kV,A.aK,A.or,A.kx,A.le,A.q4,A.co,A.c4,A.t_,A.rY,A.dI,A.la,A.eI,A.k1,A.k2,A.oq,A.oo,A.fZ,A.ay,A.bm,A.aM,A.Q,A.hw,A.kR,A.br,A.qG,A.b9,A.qI,A.qH,A.lM,A.ib,A.qZ,A.tE,A.mc,A.ua,A.lY,A.lJ,A.m1,A.lW,A.tQ,A.bR,A.bP,A.aP,A.o1,A.o0,A.jt,A.eN,A.os,A.dw,A.kT,A.lb,A.N,A.hu,A.lA,A.jF,A.lB,A.jS,A.lE,A.hB,A.lF,A.jV,A.lG,A.kb,A.lL,A.hY,A.lS,A.fq,A.jG,A.wR,A.i7,A.lZ,A.kS,A.m_,A.eX,A.l0,A.m2,A.l1,A.m3,A.l4,A.m6,A.l3,A.m5,A.li,A.mf,A.id,A.lt,A.mi,A.nH,A.k6,A.k8,A.hK,A.ij,A.A,A.jT,A.fM,A.oN,A.ej,A.d0,A.fA,A.ts,A.dJ,A.j5,A.j4,A.mh,A.mg,A.uj,A.jU,A.jA,A.h3,A.n7,A.mQ,A.hs,A.n3,A.wB,A.nf,A.n9,A.iy,A.fr,A.nF,A.on,A.l8,A.oL,A.kg,A.ki,A.pp,A.pt,A.aT,A.pP,A.pM,A.o2,A.pV,A.kw,A.hX,A.q0,A.d3,A.qO,A.qY,A.tu,A.iE,A.m7,A.lV,A.lT,A.rM,A.a,A.l5,A.lu,A.ny,A.jW,A.oc,A.fB,A.bw,A.kL,A.qy,A.fR,A.r3,A.eU,A.k4,A.oz,A.oy,A.nm,A.fl,A.fn,A.fk,A.fm,A.jH,A.ky,A.cK,A.lv,A.hM,A.p3,A.r_,A.a1,A.jZ,A.ke,A.p4,A.k_,A.db,A.k0,A.ef,A.dY,A.r0,A.ee,A.h2,A.p1,A.og,A.rN,A.p6,A.cX,A.cA,A.pw,A.pu,A.pv,A.d_,A.kf,A.bc,A.bE,A.bo,A.bq,A.dm,A.dD,A.aY,A.pc,A.cW,A.p2,A.eH,A.pb,A.cV,A.pg,A.i6,A.hV,A.bn,A.to,A.kt,A.bZ,A.pz,A.nt,A.nu,A.fo,A.nv,A.pL,A.pK,A.qu,A.qt,A.qv,A.qw,A.qx,A.ks,A.qD,A.qW,A.kW,A.qU,A.qX,A.rH,A.e8,A.rI,A.fT,A.o3,A.tt,A.f0,A.jM,A.pn,A.pr,A.r1,A.d1,A.r2,A.k5,A.f_,A.tp,A.q7,A.cQ,A.bC,A.qr,A.rS,A.eZ,A.eY,A.iw,A.lq,A.eR,A.d9,A.rV,A.ju,A.wA,A.dO,A.n_,A.dP,A.nx,A.b5,A.nG,A.fw,A.dl,A.jN,A.i5,A.o7,A.oF,A.oH,A.fE,A.dZ,A.oY,A.oQ,A.oR,A.ce,A.oZ,A.cZ,A.ex,A.qg,A.dx,A.e4,A.c2,A.ql,A.qC,A.aZ,A.rC,A.rG,A.cv,A.mX,A.ln,A.tn,A.dG,A.bu,A.c7,A.bU,A.lp,A.jw,A.lm,A.h0,A.iR,A.fY,A.lX,A.iQ,A.tA])
q(J.kk,[J.kn,J.hP,J.hR,J.fG,J.fH,J.eJ,J.e1])
q(J.hR,[J.e2,J.u,A.e3,A.i1])
q(J.e2,[J.kK,J.ea,J.dv])
r(J.kl,A.ih)
r(J.py,J.u)
q(J.eJ,[J.hO,J.ko])
q(A.p,[A.ed,A.T,A.cD,A.I,A.hF,A.cJ,A.f5,A.lw,A.m9,A.cr])
q(A.ed,[A.ey,A.j7])
r(A.iD,A.ey)
r(A.iB,A.j7)
q(A.dU,[A.jJ,A.jI,A.l9,A.vN,A.vP,A.tx,A.tw,A.up,A.ow,A.tO,A.tR,A.pW,A.tT,A.wk,A.wl,A.vH,A.qF,A.tb,A.q1,A.q2,A.q3,A.qf,A.q_,A.q5,A.t0,A.t1,A.t3,A.ok,A.oi,A.oj,A.qi,A.qj,A.qN,A.qM,A.qL,A.qK,A.qJ,A.qP,A.v5,A.v6,A.r5,A.r6,A.ws,A.wq,A.ot,A.pY,A.vE,A.oO,A.oP,A.tq,A.tr,A.nh,A.nk,A.nj,A.nl,A.n8,A.mR,A.mS,A.mT,A.n5,A.n6,A.n4,A.oM,A.pq,A.pN,A.qT,A.of,A.oA,A.oC,A.oD,A.oE,A.nn,A.no,A.np,A.nq,A.nr,A.ns,A.vC,A.nI,A.oh,A.p5,A.wt,A.v9,A.v8,A.un,A.um,A.vt,A.pi,A.pj,A.pl,A.rO,A.p9,A.p7,A.vB,A.pd,A.pf,A.vA,A.ob,A.pS,A.pG,A.rL,A.rK,A.rJ,A.o4,A.o5,A.vi,A.qs,A.rW,A.rX,A.mP,A.mN,A.nc,A.nd,A.nA,A.nE,A.nD,A.nC,A.nV,A.nU,A.nW,A.nX,A.nY,A.nT,A.nO,A.nP,A.o_,A.o8,A.o9,A.oa,A.oe,A.oG,A.oI,A.oJ,A.oW,A.oU,A.oV,A.oT,A.oS,A.p0,A.pB,A.pC,A.pD,A.qm,A.qn,A.qo,A.rx,A.ry,A.rr,A.rs,A.rq,A.rt,A.rc,A.ru,A.rp,A.ri,A.rj,A.rk,A.rl,A.rm,A.rn,A.ro,A.rh,A.rd,A.re,A.rf,A.rg,A.rw,A.rv,A.rE,A.rQ,A.mZ,A.tl,A.tk,A.tm,A.tg,A.tj,A.te,A.td,A.vK,A.tc,A.mU,A.mV,A.mW,A.u6,A.u7,A.u0,A.u2,A.u3,A.tY,A.tZ,A.u_,A.uA,A.uB,A.uI,A.uJ,A.uK,A.uD,A.uE,A.uF,A.uw,A.ut,A.vd,A.ve,A.vS,A.vT,A.w3,A.w5,A.w6,A.w7,A.w8,A.w9,A.wa,A.wb,A.vg,A.vh,A.vl,A.vz,A.vr,A.vn,A.vo])
q(A.jJ,[A.tB,A.nN,A.pH,A.vO,A.uq,A.vD,A.ox,A.tP,A.pU,A.pX,A.tW,A.t8,A.t7,A.wm,A.q6,A.rZ,A.t2,A.ol,A.r7,A.wr,A.wp,A.ni,A.na,A.nb,A.pO,A.oB,A.vv,A.pk,A.pm,A.pa,A.pR,A.ps,A.q9,A.qa,A.qb,A.rT,A.rU,A.pE,A.pF,A.mY,A.th,A.tf,A.u1,A.tX,A.uz,A.uH,A.vX,A.vY,A.vk])
r(A.aU,A.iB)
q(A.aq,[A.eK,A.dE,A.kp,A.ld,A.kY,A.lI,A.hT,A.jy,A.cw,A.it,A.lc,A.fU,A.jL])
r(A.fW,A.W)
r(A.dV,A.fW)
q(A.T,[A.a5,A.ad,A.ax,A.K,A.f4,A.iJ])
q(A.a5,[A.ip,A.P,A.ig,A.lP])
r(A.dn,A.cD)
q(A.bx,[A.eh,A.ei,A.h_])
q(A.eh,[A.aX,A.f9,A.iS])
q(A.ei,[A.ak,A.b0,A.iT])
r(A.iU,A.h_)
r(A.h5,A.fJ)
r(A.eb,A.h5)
r(A.hx,A.eb)
q(A.fv,[A.a4,A.cT])
q(A.dA,[A.hy,A.iV,A.j1])
r(A.aJ,A.hy)
q(A.jI,[A.qz,A.ty,A.tz,A.uc,A.ou,A.tF,A.tK,A.tJ,A.tH,A.tG,A.tN,A.tM,A.tL,A.u9,A.vs,A.uh,A.ug,A.v4,A.uY,A.uZ,A.v3,A.uT,A.uV,A.uU,A.v2,A.uR,A.uS,A.v_,A.v0,A.v1,A.uX,A.uW,A.v7,A.vF,A.qS,A.ph,A.p8,A.pe,A.va,A.mO,A.n1,A.n0,A.ne,A.nR,A.nS,A.nQ,A.oK,A.oX,A.qq,A.ra,A.rb,A.rz,A.rA,A.rB,A.rF,A.ti,A.u4,A.u5,A.uL,A.uM,A.uN,A.uO,A.uC,A.uG,A.ux,A.uy,A.uu,A.uv,A.vf,A.vU,A.w4,A.wc,A.wd,A.we,A.wf,A.wg,A.wh,A.wi,A.vV,A.vW,A.vZ,A.w_,A.w0,A.w1,A.w2,A.vu])
r(A.i3,A.dE)
q(A.l9,[A.l6,A.fp])
q(A.aa,[A.cj,A.iF,A.lO])
r(A.hS,A.cj)
r(A.fL,A.e3)
q(A.i1,[A.kz,A.b8])
q(A.b8,[A.iM,A.iO])
r(A.iN,A.iM)
r(A.i_,A.iN)
r(A.iP,A.iO)
r(A.i0,A.iP)
q(A.i_,[A.hZ,A.kA])
q(A.i0,[A.kB,A.kC,A.kD,A.kE,A.kF,A.eM,A.i2])
r(A.h4,A.lI)
r(A.iz,A.lC)
r(A.m0,A.j6)
r(A.iH,A.iF)
r(A.cq,A.iV)
r(A.fX,A.j1)
q(A.ez,[A.jC,A.jX,A.kq])
q(A.jO,[A.nw,A.pJ,A.pI,A.t9])
r(A.kr,A.hT)
r(A.tU,A.tV)
r(A.lh,A.jX)
q(A.cw,[A.fO,A.kh])
r(A.lD,A.j2)
q(A.lH,[A.eQ,A.fy,A.fu,A.eG,A.jx,A.d7,A.fQ,A.fz,A.jE,A.jK,A.hA,A.eT,A.e9,A.eC,A.ci,A.ie,A.cU,A.fP,A.ik,A.fD,A.iA,A.iC,A.k7,A.hI,A.k9,A.ka,A.eF,A.hJ,A.eW,A.d4,A.ft,A.fF,A.h1,A.jD,A.ew,A.jP,A.jR,A.ba,A.jB,A.cg,A.eE,A.eB,A.dp,A.hH,A.dX,A.e_,A.ht,A.kJ,A.ic,A.eS,A.cI,A.dC,A.bT,A.bH,A.kj,A.f1,A.cn,A.cO,A.cx,A.cP,A.dk,A.dj,A.dR,A.dS,A.dQ,A.ev,A.dr,A.cR,A.cS,A.ds,A.dq,A.dt,A.ch,A.cy,A.jv,A.bp,A.cm,A.e5,A.cG,A.bS,A.bG,A.ii,A.bQ,A.c5,A.c6,A.ec,A.d8])
q(A.dz,[A.bB,A.bt,A.cE,A.kI,A.cz])
r(A.r4,A.m1)
r(A.lr,A.mg)
r(A.qR,A.tu)
r(A.qQ,A.qR)
r(A.iL,A.db)
q(A.i5,[A.hz,A.nZ,A.od,A.hL,A.p_,A.pA,A.qp,A.r9,A.fS,A.rP])
q(A.tn,[A.lo,A.lU,A.bb,A.ll,A.lj,A.iv,A.lk])
s(A.fW,A.d5)
s(A.j7,A.W)
s(A.iM,A.W)
s(A.iN,A.aw)
s(A.iO,A.W)
s(A.iP,A.aw)
s(A.h5,A.j0)
s(A.j1,A.me)
s(A.m1,A.tQ)
s(A.mg,A.uj)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",w:"double",bj:"num",i:"String",n:"bool",au:"Null",D:"List",G:"Object",X:"Map",a7:"JSObject"},mangledNames:{},types:["~()","au(G?)","~(G?)","n(i)","du()","n(w)","0&()","du(bt?)","n(ay)","n(G?)","~(n)","@(@)","au()","n(eR)","k(bZ,bZ)","n(bc)","n(@)","~(~())","~(@)","n(bJ)","n(Q)","n(bZ)","n(e8)","k(M<i,i>,M<i,i>)","n(aZ)","n(bU)","n()","k(k)","@(i)","~(i,w)","k(aT)","k(@,@)","i(c4)","i(i)","n(ch)","k()","n(cy)","~(a7)","n(M<i,D<i>>)","n(cO)","n(bC)","au(@)","n(k)","a(a)","n(ef)","@()","~(G?,G?)","i?(i)","n(M<i,aK>)","aK(M<i,aK>)","aK(aK,aK)","k(aP<bR>,aP<bR>)","c3(aP<bR>)","k(aP<bP>,aP<bP>)","c3(aP<bP>)","eN(w,w,w,w)","N(N)","~(eX)","eX()","au(G,d2)","w(w,h3)","c_<au>(M<i,i>)","n(D<i>)","k(i,i)","k(bE,bE)","n(a7)","~(@,@)","+effectiveScore,light,score(w,aT,w)(aT)","k(+effectiveScore,light,score(w,aT,w),+effectiveScore,light,score(w,aT,w))","a7()","fq()","n(cg)","w()","fs()","X<i,i>(X<i,i>,i)","n(aY)","fl(G?)","fk(G?)","fm(G?)","i(G?)","0&(i,k?)","fn(G?)","G?(G?)","n(dD)","i(k,a1,a1,a1)","k(db,db)","D<bI>()","n(ee)","n(c4)","bI?()","k(+(w,w,w,w),+(w,w,w,w))","D<+(w,w,w,w)>()","n(bE)","k(k,aY)","n(cA)","n(cX)","~(G,d2)","k(d_,d_)","n(cW)","M<i,i>(i,@)","k(+influence,light(w,bI),+influence,light(w,bI))","n(bT)","n(bH)","f_()","du(i{fallback:i?})","k(M<i,cQ>,M<i,cQ>)","id(bB)","M<k,@>(k,eZ)","M<k,@>(k,eY)","n(M<@,@>)","M<i,i>(M<@,@>)","n?(G?)","cz(k,k,i?)","i()","0^(p<0^>,G?)<G?>","~(k,@)","D<i>(D<i>)","~(k)","au(~())","au(@,d2)","au(a7)","0^(i,p<0^>)<C>","k(ac,ac)","X<i,G?>(dx)","i(bp)","n(bp)","n(bG)","i(ay)","n(dr)","n(cR)","n(cS)","n(ds)","n(dq)","n(dt)","k(k,+(bt,dI))","n(cx)","n(cP)","n(dk)","n(dj)","i(cv)","k(cv,cv)","eL(cE)","k(bU,bU)","D<d9>()","n(d9)","n(M<i,i>)","k(c7,c7)","X<i,@>(bU)","n(c6)","n(c5)","n(bQ)","cE(k,k,i?)","n(is?)","co(M<i,bt>)","k(c4,c4)","bt(k,k,i?)","k(M<k,i>,M<k,i>)","k(co,co)","i(M<k,i>)","@(@,i)","~(bG)","~(dP)","~(fE)","~(dO)","~(dZ)","~(fw)","n(fR)","~(bS)","~(k,i)","~(bT,bH)","k(k,+(bB,cl))","bB(k,k,i?)","fZ()","cX(G?)","cA(G?)","cW(G?)","~(bj)","~(w)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aX&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.f9&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iS&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ak&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b0&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iT&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iU&&A.H2(a,b.a)}}
A.Eb(v.typeUniverse,JSON.parse('{"dv":"e2","kK":"e2","ea":"e2","Hw":"e3","u":{"D":["1"],"T":["1"],"a7":[],"p":["1"]},"kn":{"n":[],"ai":[]},"hP":{"au":[],"ai":[]},"hR":{"a7":[]},"e2":{"a7":[]},"kl":{"ih":[]},"py":{"u":["1"],"D":["1"],"T":["1"],"a7":[],"p":["1"]},"eu":{"ab":["1"]},"eJ":{"w":[],"bj":[],"b6":["bj"]},"hO":{"w":[],"k":[],"bj":[],"b6":["bj"],"ai":[]},"ko":{"w":[],"bj":[],"b6":["bj"],"ai":[]},"e1":{"i":[],"b6":["i"],"qk":[],"ai":[]},"ed":{"p":["2"]},"hv":{"ab":["2"]},"ey":{"ed":["1","2"],"p":["2"],"p.E":"2"},"iD":{"ey":["1","2"],"ed":["1","2"],"T":["2"],"p":["2"],"p.E":"2"},"iB":{"W":["2"],"D":["2"],"ed":["1","2"],"T":["2"],"p":["2"]},"aU":{"iB":["1","2"],"W":["2"],"D":["2"],"ed":["1","2"],"T":["2"],"p":["2"],"p.E":"2","W.E":"2"},"eK":{"aq":[]},"dV":{"W":["k"],"d5":["k"],"D":["k"],"T":["k"],"p":["k"],"W.E":"k","d5.E":"k"},"T":{"p":["1"]},"a5":{"T":["1"],"p":["1"]},"ip":{"a5":["1"],"T":["1"],"p":["1"],"p.E":"1","a5.E":"1"},"aV":{"ab":["1"]},"cD":{"p":["2"],"p.E":"2"},"dn":{"cD":["1","2"],"T":["2"],"p":["2"],"p.E":"2"},"hW":{"ab":["2"]},"P":{"a5":["2"],"T":["2"],"p":["2"],"p.E":"2","a5.E":"2"},"I":{"p":["1"],"p.E":"1"},"U":{"ab":["1"]},"hF":{"p":["2"],"p.E":"2"},"hG":{"ab":["2"]},"hD":{"ab":["1"]},"cJ":{"p":["1"],"p.E":"1"},"ix":{"ab":["1"]},"fW":{"W":["1"],"d5":["1"],"D":["1"],"T":["1"],"p":["1"]},"ig":{"a5":["1"],"T":["1"],"p":["1"],"p.E":"1","a5.E":"1"},"aX":{"eh":[],"bx":[]},"f9":{"eh":[],"bx":[]},"iS":{"eh":[],"bx":[]},"ak":{"ei":[],"bx":[]},"b0":{"ei":[],"bx":[]},"iT":{"ei":[],"bx":[]},"iU":{"h_":[],"bx":[]},"hx":{"eb":["1","2"],"h5":["1","2"],"fJ":["1","2"],"j0":["1","2"],"X":["1","2"]},"fv":{"X":["1","2"]},"a4":{"fv":["1","2"],"X":["1","2"]},"f5":{"p":["1"],"p.E":"1"},"f6":{"ab":["1"]},"cT":{"fv":["1","2"],"X":["1","2"]},"hy":{"dA":["1"],"e7":["1"],"T":["1"],"p":["1"]},"aJ":{"hy":["1"],"dA":["1"],"e7":["1"],"T":["1"],"p":["1"]},"i3":{"dE":[],"aq":[]},"kp":{"aq":[]},"ld":{"aq":[]},"iW":{"d2":[]},"dU":{"eD":[]},"jI":{"eD":[]},"jJ":{"eD":[]},"l9":{"eD":[]},"l6":{"eD":[]},"fp":{"eD":[]},"kY":{"aq":[]},"cj":{"aa":["1","2"],"wI":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"ad":{"T":["1"],"p":["1"],"p.E":"1"},"ck":{"ab":["1"]},"ax":{"T":["1"],"p":["1"],"p.E":"1"},"an":{"ab":["1"]},"K":{"T":["M<1,2>"],"p":["M<1,2>"],"p.E":"M<1,2>"},"cC":{"ab":["M<1,2>"]},"hS":{"cj":["1","2"],"aa":["1","2"],"wI":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"eh":{"bx":[]},"ei":{"bx":[]},"h_":{"bx":[]},"hQ":{"Da":[],"qk":[]},"lR":{"ia":[],"fK":[]},"lw":{"p":["ia"],"p.E":"ia"},"lx":{"ab":["ia"]},"io":{"fK":[]},"m9":{"p":["fK"],"p.E":"fK"},"ma":{"ab":["fK"]},"fL":{"e3":[],"a7":[],"ai":[]},"eM":{"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"],"ai":[],"W.E":"k","aw.E":"k"},"e3":{"a7":[],"ai":[]},"i1":{"a7":[]},"kz":{"a7":[],"ai":[]},"b8":{"c0":["1"],"a7":[]},"i_":{"W":["w"],"b8":["w"],"D":["w"],"c0":["w"],"T":["w"],"a7":[],"p":["w"],"aw":["w"]},"i0":{"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"]},"hZ":{"om":[],"W":["w"],"b8":["w"],"D":["w"],"c0":["w"],"T":["w"],"a7":[],"p":["w"],"aw":["w"],"ai":[],"W.E":"w","aw.E":"w"},"kA":{"W":["w"],"b8":["w"],"D":["w"],"c0":["w"],"T":["w"],"a7":[],"p":["w"],"aw":["w"],"ai":[],"W.E":"w","aw.E":"w"},"kB":{"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"],"ai":[],"W.E":"k","aw.E":"k"},"kC":{"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"],"ai":[],"W.E":"k","aw.E":"k"},"kD":{"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"],"ai":[],"W.E":"k","aw.E":"k"},"kE":{"wZ":[],"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"],"ai":[],"W.E":"k","aw.E":"k"},"kF":{"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"],"ai":[],"W.E":"k","aw.E":"k"},"i2":{"is":[],"W":["k"],"b8":["k"],"D":["k"],"c0":["k"],"T":["k"],"a7":[],"p":["k"],"aw":["k"],"ai":[],"W.E":"k","aw.E":"k"},"lI":{"aq":[]},"h4":{"dE":[],"aq":[]},"cL":{"ab":["1"]},"cr":{"p":["1"],"p.E":"1"},"b4":{"aq":[]},"iz":{"lC":["1"]},"aA":{"c_":["1"]},"j6":{"ze":[]},"m0":{"j6":[],"ze":[]},"iF":{"aa":["1","2"],"X":["1","2"]},"iH":{"iF":["1","2"],"aa":["1","2"],"X":["1","2"],"aa.K":"1","aa.V":"2"},"f4":{"T":["1"],"p":["1"],"p.E":"1"},"iG":{"ab":["1"]},"cq":{"dA":["1"],"yG":["1"],"e7":["1"],"T":["1"],"p":["1"]},"f7":{"ab":["1"]},"W":{"D":["1"],"T":["1"],"p":["1"]},"aa":{"X":["1","2"]},"iJ":{"T":["2"],"p":["2"],"p.E":"2"},"iK":{"ab":["2"]},"fJ":{"X":["1","2"]},"eb":{"h5":["1","2"],"fJ":["1","2"],"j0":["1","2"],"X":["1","2"]},"dA":{"e7":["1"],"T":["1"],"p":["1"]},"iV":{"dA":["1"],"e7":["1"],"T":["1"],"p":["1"]},"fX":{"dA":["1"],"me":["1"],"e7":["1"],"T":["1"],"p":["1"]},"lO":{"aa":["i","@"],"X":["i","@"],"aa.K":"i","aa.V":"@"},"lP":{"a5":["i"],"T":["i"],"p":["i"],"p.E":"i","a5.E":"i"},"jC":{"ez":["D<k>","i"]},"jX":{"ez":["i","D<k>"]},"hT":{"aq":[]},"kr":{"aq":[]},"kq":{"ez":["G?","i"]},"lh":{"ez":["i","D<k>"]},"eA":{"b6":["eA"]},"w":{"bj":[],"b6":["bj"]},"dW":{"b6":["dW"]},"k":{"bj":[],"b6":["bj"]},"D":{"T":["1"],"p":["1"]},"bj":{"b6":["bj"]},"ia":{"fK":[]},"e7":{"T":["1"],"p":["1"]},"i":{"b6":["i"],"qk":[]},"lH":{"C":[]},"jy":{"aq":[]},"dE":{"aq":[]},"cw":{"aq":[]},"fO":{"aq":[]},"kh":{"aq":[]},"it":{"aq":[]},"lc":{"aq":[]},"fU":{"aq":[]},"jL":{"aq":[]},"kH":{"aq":[]},"il":{"aq":[]},"mb":{"d2":[]},"bs":{"Do":[]},"j2":{"lf":[]},"m4":{"lf":[]},"lD":{"lf":[]},"lN":{"wS":[]},"eg":{"wS":[]},"eQ":{"C":[]},"fy":{"C":[]},"fu":{"C":[]},"bB":{"dz":[]},"bt":{"dz":[]},"cE":{"dz":[]},"cz":{"dz":[]},"kI":{"dz":[]},"eG":{"C":[]},"jx":{"C":[]},"d7":{"C":[]},"fQ":{"C":[]},"fz":{"C":[]},"jE":{"C":[]},"jK":{"C":[]},"hA":{"C":[]},"eT":{"C":[]},"e9":{"C":[]},"eC":{"C":[]},"ci":{"C":[]},"ie":{"C":[]},"cU":{"C":[]},"fP":{"C":[]},"ib":{"Dd":[]},"lM":{"c3":[]},"mc":{"c3":[]},"lY":{"Dc":[]},"lJ":{"Co":[]},"ik":{"C":[]},"bR":{"b6":["bR"]},"bP":{"b6":["bP"]},"fD":{"C":[]},"iA":{"C":[]},"hu":{"ao":[]},"lA":{"ac":[]},"jF":{"ao":[]},"lB":{"ac":[]},"jS":{"ao":[]},"lE":{"ac":[]},"iC":{"C":[]},"hB":{"ao":[]},"lF":{"ac":[]},"jV":{"ao":[]},"lG":{"ac":[]},"kb":{"ao":[]},"lL":{"ac":[]},"hY":{"ao":[]},"lS":{"ac":[]},"jG":{"Db":[]},"i7":{"ao":[]},"lZ":{"ac":[]},"kS":{"ao":[]},"m_":{"ac":[]},"l0":{"ao":[]},"m2":{"ac":[]},"l1":{"ao":[]},"m3":{"ac":[]},"l4":{"ao":[]},"m6":{"ac":[]},"l3":{"ao":[]},"m5":{"ac":[]},"li":{"ao":[]},"mf":{"ac":[]},"lt":{"ao":[]},"mi":{"ac":[]},"k7":{"C":[]},"hI":{"C":[]},"k9":{"C":[]},"ka":{"C":[]},"eF":{"C":[]},"hJ":{"C":[]},"eW":{"C":[]},"d4":{"C":[]},"ft":{"C":[]},"jT":{"C7":[]},"fF":{"C":[]},"h1":{"C":[]},"ba":{"C":[]},"jD":{"C":[]},"ew":{"C":[]},"jP":{"C":[]},"jR":{"C":[]},"dJ":{"du":[]},"lr":{"Cu":[]},"jB":{"C":[]},"cg":{"C":[]},"eE":{"C":[]},"iL":{"db":[]},"eB":{"C":[]},"dp":{"C":[]},"dX":{"C":[]},"hH":{"C":[]},"e_":{"C":[]},"ht":{"C":[]},"kJ":{"C":[]},"ic":{"C":[]},"eS":{"C":[]},"cI":{"C":[]},"dC":{"C":[]},"bT":{"C":[]},"bH":{"C":[]},"kj":{"C":[]},"f1":{"C":[]},"cn":{"C":[]},"cO":{"C":[]},"cx":{"C":[]},"cP":{"C":[]},"dk":{"C":[]},"dj":{"C":[]},"dR":{"C":[]},"dS":{"C":[]},"ev":{"C":[]},"dQ":{"C":[]},"dr":{"C":[]},"cR":{"C":[]},"cS":{"C":[]},"ds":{"C":[]},"dq":{"C":[]},"dt":{"C":[]},"ch":{"C":[]},"cy":{"C":[]},"jv":{"C":[]},"bp":{"C":[]},"cm":{"C":[]},"e5":{"C":[]},"cG":{"C":[]},"bS":{"C":[]},"bG":{"C":[]},"ii":{"C":[]},"bQ":{"C":[]},"c5":{"C":[]},"c6":{"C":[]},"ec":{"C":[]},"d8":{"C":[]},"iR":{"wU":[]},"fY":{"wU":[]},"CD":{"D":["k"],"T":["k"],"p":["k"]},"is":{"D":["k"],"T":["k"],"p":["k"]},"Dt":{"D":["k"],"T":["k"],"p":["k"]},"CB":{"D":["k"],"T":["k"],"p":["k"]},"wZ":{"D":["k"],"T":["k"],"p":["k"]},"CC":{"D":["k"],"T":["k"],"p":["k"]},"Ds":{"D":["k"],"T":["k"],"p":["k"]},"om":{"D":["w"],"T":["w"],"p":["w"]},"Cn":{"D":["w"],"T":["w"],"p":["w"]}}'))
A.Ea(v.typeUniverse,JSON.parse('{"fW":1,"j7":2,"b8":1,"iV":1,"j1":1,"jO":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a_
return{mq:s("cO"),dx:s("hs"),bC:s("cv"),v:s("b4"),iF:s("jA"),ul:s("dj"),EL:s("cP"),xs:s("cx"),gc:s("dk"),lT:s("fk"),bJ:s("fl"),gI:s("fm"),ya:s("fn"),z3:s("bP"),Bu:s("fq"),p:s("aT"),rO:s("ex"),sU:s("dV"),hO:s("b6<@>"),CH:s("hw"),hD:s("a4<i,i>"),I:s("a4<i,k>"),M:s("aJ<i>"),f7:s("eA"),fP:s("bQ"),yb:s("dW"),he:s("T<@>"),yW:s("cg"),g:s("bZ"),Ct:s("C"),yt:s("aq"),hl:s("a1"),B:s("om"),pH:s("aK"),Fr:s("cQ"),BO:s("eD"),ls:s("c_<au>"),aJ:s("dq"),x:s("ch"),bK:s("dr"),gm:s("ds"),dn:s("cR"),mx:s("dt"),j_:s("cS"),EJ:s("cT<bS,i>"),_:s("du"),Eb:s("cy"),qX:s("e_"),mF:s("cW"),eO:s("kg<G>"),iO:s("cz"),oW:s("cX"),fl:s("cA"),FA:s("p<hw>"),yT:s("p<i>"),x6:s("p<co>"),oJ:s("p<w>"),tY:s("p<@>"),uI:s("p<k>"),Fg:s("u<cv>"),jC:s("u<aT>"),km:s("u<ex>"),sa:s("u<ce>"),ns:s("u<jW>"),cO:s("u<dm>"),r:s("u<bZ>"),uH:s("u<k_>"),Dl:s("u<a1>"),iJ:s("u<c_<~>>"),pC:s("u<k4>"),C1:s("u<du>"),ka:s("u<bm>"),Fm:s("u<eH>"),vS:s("u<cV>"),pW:s("u<Hv<G>>"),hr:s("u<eI>"),s3:s("u<cz>"),sL:s("u<a7>"),Bv:s("u<kt>"),yH:s("u<bo>"),Bq:s("u<M<i,i>>"),rq:s("u<X<i,G>>"),A7:s("u<X<i,i>>"),cs:s("u<X<i,@>>"),fv:s("u<kw>"),td:s("u<hX>"),s6:s("u<bB>"),pq:s("u<ay>"),bA:s("u<dx>"),xz:s("u<bC>"),b4:s("u<bq>"),s0:s("u<eN>"),hc:s("u<cZ>"),ea:s("u<d_>"),Fk:s("u<kM>"),qP:s("u<bE>"),kv:s("u<eR>"),nR:s("u<+(i,D<bE>)>"),kd:s("u<+(i,i)>"),rh:s("u<+influence,light(w,bI)>"),wt:s("u<+(k,i)>"),wx:s("u<+(w,w,w,w)>"),e_:s("u<ao>"),u:s("u<ac>"),Ft:s("u<ib>"),C:s("u<Q>"),h1:s("u<bF>"),s2:s("u<c3>"),eY:s("u<aY>"),xB:s("u<d1>"),El:s("u<fT>"),AM:s("u<aP<bP>>"),fs:s("u<aP<bR>>"),cv:s("u<bI>"),DZ:s("u<dD>"),s:s("u<i>"),qy:s("u<l8>"),fa:s("u<c4>"),k:s("u<N>"),h:s("u<a>"),ld:s("u<iw>"),Dc:s("u<dG>"),Fi:s("u<c7>"),jV:s("u<d9>"),yo:s("u<f_>"),E:s("u<bc>"),uk:s("u<bw>"),wf:s("u<iL>"),il:s("u<ef>"),l5:s("u<ee>"),ow:s("u<lW>"),j5:s("u<lX>"),pv:s("u<h0>"),Fy:s("u<ej<eL>>"),EM:s("u<ej<cl>>"),w_:s("u<ej<bF>>"),f2:s("u<ej<dI>>"),Fa:s("u<h2>"),sj:s("u<n>"),n:s("u<w>"),zz:s("u<@>"),t:s("u<k>"),vj:s("u<a7?>"),Cf:s("u<G?>"),AN:s("u<bj>"),w:s("hP"),m:s("a7"),w7:s("a7()"),ud:s("dv"),Eh:s("c0<@>"),AQ:s("D<aT>"),vp:s("D<ex>"),hk:s("D<bZ>"),b:s("D<bm>"),xp:s("D<cz>"),nx:s("D<a7>"),rW:s("D<X<i,i>>"),qr:s("D<bB>"),R:s("D<ay>"),fG:s("D<cZ>"),ba:s("D<d_>"),Es:s("D<bE>"),DX:s("D<+(i,i)>"),pL:s("D<+(k,i)>"),xM:s("D<+(w,w,w,w)>"),bE:s("D<bF>"),fx:s("D<d1>"),a:s("D<i>"),gt:s("D<iw>"),D0:s("D<dG>"),cf:s("D<c7>"),p7:s("D<d9>"),lm:s("D<iE>"),dd:s("D<w>"),j:s("D<@>"),J:s("D<k>"),ik:s("D<a7?>"),vX:s("D<G?>"),m2:s("hV"),h6:s("M<i,aK>"),gJ:s("M<i,cQ>"),q:s("M<i,i>"),no:s("M<i,bt>"),AC:s("M<@,@>"),ou:s("M<k,i>"),pr:s("M<k,@>"),yx:s("M<i,D<i>>"),mf:s("X<i,du>"),vD:s("X<i,cE>"),ap:s("X<i,ay>"),G:s("X<i,i>"),m0:s("X<i,n>"),gG:s("X<i,w>"),P:s("X<i,@>"),f:s("X<@,@>"),eU:s("X<k,i>"),pG:s("X<k,eY>"),tQ:s("X<k,eZ>"),aD:s("X<i,D<+(w,w,w,w)>>"),Bx:s("X<i,D<i>>"),oZ:s("X<i,G?>"),q1:s("X<c6,D<c7>>"),ee:s("X<k,X<i,i>>"),jT:s("P<i,i?>"),pw:s("cE"),kc:s("bB"),rV:s("fL"),mV:s("eM"),c:s("au"),K:s("G"),BB:s("bR"),A:s("ay"),oP:s("dx"),wJ:s("bp"),E4:s("bC"),A_:s("d_"),T:s("bE"),DL:s("i6"),AB:s("kO"),yi:s("fM"),Y:s("eR"),op:s("Hx"),ep:s("+()"),k0:s("+(bB,cl)"),ut:s("+(bt,dI)"),rf:s("+(w,w)"),mn:s("+influence,light(w,bI)"),tK:s("+effectiveScore,light,score(w,aT,w)"),nz:s("+(w,w,w,w)"),ez:s("ia"),wZ:s("ac"),tc:s("d0<cz,bF>"),ja:s("d0<cE,eL>"),wm:s("d0<bB,cl>"),qq:s("d0<bt,dI>"),j2:s("Q"),m3:s("bF"),yz:s("c3"),U:s("aY"),F3:s("d1"),Q:s("e7<i>"),oG:s("e7<k>"),en:s("bG"),gl:s("aZ"),W:s("e8"),u5:s("bH"),bG:s("bT"),ho:s("fT"),EH:s("aP<bP>"),E0:s("aP<bR>"),l:s("d2"),w8:s("dD"),qL:s("ba"),N:s("i"),Aj:s("bt"),jP:s("co"),d:s("c4"),bp:s("e9"),sg:s("ai"),bs:s("dE"),qF:s("ea"),hL:s("eb<i,i>"),qt:s("le"),eP:s("lf"),cV:s("N"),a7:s("a"),qY:s("bJ"),L:s("bU"),gM:s("c5"),hF:s("c6"),vw:s("eY"),BX:s("eZ"),aA:s("dG"),AP:s("c7"),sy:s("lq"),bB:s("bb"),aS:s("d9"),fu:s("f_"),fw:s("I<bQ>"),vL:s("I<cg>"),vK:s("I<ch>"),Fj:s("I<bH>"),rZ:s("I<bT>"),vY:s("I<i>"),r4:s("I<bJ>"),g2:s("I<c5>"),cE:s("I<c6>"),rt:s("U<bG>"),xG:s("U<aZ>"),fh:s("U<bJ>"),Ai:s("cJ<i>"),e:s("bc"),dr:s("iE"),hR:s("aA<@>"),BT:s("iH<G?,G?>"),Ez:s("db"),rL:s("fZ"),fo:s("lT"),xT:s("ef"),wU:s("ee"),la:s("lU"),cX:s("lV"),qS:s("iQ"),jS:s("h3"),kA:s("m7"),Br:s("cr<c3>"),V:s("j4"),jm:s("j5"),y:s("n"),Bs:s("n()"),kr:s("n(bQ)"),e2:s("n(cg)"),rg:s("n(ch)"),bl:s("n(G)"),pz:s("n(bG)"),aV:s("n(aZ)"),y2:s("n(bH)"),ty:s("n(bT)"),Ag:s("n(i)"),rd:s("n(bJ)"),da:s("n(c5)"),qR:s("n(c6)"),i:s("w"),z:s("@"),pF:s("@()"),h_:s("@(G)"),nW:s("@(G,d2)"),S:s("k"),eZ:s("c_<au>?"),r9:s("u<G?>?"),uh:s("a7?"),rK:s("D<@>?"),jd:s("X<i,D<i>>?"),X:s("G?"),D:s("i?"),oI:s("i?(i)"),Fx:s("is?"),F:s("f2<@,@>?"),Af:s("lQ?"),k7:s("n?"),wK:s("n(fR)?"),u6:s("w?"),lo:s("k?"),s7:s("bj?"),Z:s("~()?"),Cv:s("~(dO)?"),kC:s("~(dP)?"),pf:s("~(fw)?"),hq:s("~(fE)?"),CA:s("~(dZ)?"),hQ:s("~(bS)?"),Ci:s("~(bG)?"),nf:s("~(bT,bH)?"),DI:s("~(i,w)?"),xl:s("~(n)?"),vR:s("~(k)?"),dt:s("~(k,i)?"),o:s("bj"),H:s("~"),O:s("~()"),m1:s("~(i,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.i8=J.kk.prototype
B.a=J.u.prototype
B.d=J.hO.prototype
B.c=J.eJ.prototype
B.b=J.e1.prototype
B.i9=J.dv.prototype
B.ia=J.hR.prototype
B.r=A.hZ.prototype
B.da=A.i2.prototype
B.dp=J.kK.prototype
B.bR=J.ea.prototype
B.a9=new A.cO(1,"standard")
B.K=new A.ju(B.a9)
B.bV=new A.cO(0,"concise")
B.bW=new A.cO(2,"verbose")
B.aq=new A.dO(null,null,null,null,null)
B.nb=new A.jv(0,"none")
B.nc=new A.jx(0,"opaque")
B.dX=new A.jB(4,"ambience")
B.c_=new A.cx(3,"mono")
B.aS=new A.dk(0,"full")
B.bZ=new A.cx(0,"auto")
B.bY=new A.cP(1,"standard")
B.bX=new A.dj(0,"defaultMix")
B.aT=new A.dP(B.bZ,B.bY,B.aS,B.bX)
B.e3=new A.ht("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.e4=new A.ht("webgl2 unavailable",0,"webglUnavailable")
B.a1=new A.ic(1,"pixeldart")
B.e5=new A.fo(B.a1,!1,!0,!1,null,!1,null,!1,null)
B.c1=new A.dQ(1,"capturing")
B.e6=new A.dl(B.c1,null)
B.c2=new A.dQ(3,"rejected")
B.aU=new A.dl(B.c2,null)
B.c3=new A.dQ(4,"applied")
B.c0=new A.dl(B.c3,null)
B.c4=new A.dQ(5,"cancelled")
B.e7=new A.dl(B.c4,null)
B.aV=new A.dQ(2,"conflict")
B.ar=new A.jD(0,"add")
B.eb=new A.ew(0,"zero")
B.aa=new A.ew(1,"one")
B.ab=new A.jE(0,"alpha")
B.F=new A.dR(1,"button")
B.p=new A.dS(0,"normal")
B.ee=new A.b5("settings.back",B.F,"back","back to pause menu",B.p)
B.as=new A.dR(0,"heading")
B.ef=new A.b5("settings.heading",B.as,"Settings",null,B.p)
B.eg=new A.b5("settings.controls.heading",B.as,"Controls",null,B.p)
B.eh=new A.b5("settings.controls.back",B.F,"back","back to settings categories",B.p)
B.ei=new A.b5("pause.heading",B.as,"Paused",null,B.p)
B.ej=new A.dR(3,"slider")
B.ek=new A.dR(4,"toggle")
B.c5=new A.dR(5,"keybind")
B.at=new A.dS(5,"disabled")
B.el=new A.dS(6,"error")
B.em=new A.dS(7,"destructive")
B.c6=new A.dS(8,"remapping")
B.c7=new A.hs()
B.c8=new A.nt()
B.aW=new A.nu()
B.nd=new A.nw()
B.en=new A.jC()
B.c9=new A.nH()
B.eo=new A.hD(A.a_("hD<0&>"))
B.ca=function getTagFallback(o) {
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
B.cb=function(hooks) { return hooks; }

B.k=new A.kq()
B.ne=new A.pL()
B.ev=new A.G()
B.ew=new A.kH()
B.nf=new A.qu()
B.ex=new A.qv()
B.cc=new A.qx()
B.ey=new A.d1()
B.ah=new A.cn(1,"gradeLUT")
B.ez=new A.d1()
B.eA=new A.r1()
B.eB=new A.r3()
B.f=new A.r8()
B.cd=new A.lh()
B.mi=new A.d7(0,"position")
B.mn=new A.bJ(B.mi,0,3)
B.dP=new A.d7(1,"normal")
B.mo=new A.bJ(B.dP,3,3)
B.mj=new A.d7(2,"color")
B.mp=new A.bJ(B.mj,6,4)
B.mk=new A.d7(4,"alpha")
B.mq=new A.bJ(B.mk,10,1)
B.ml=new A.d7(5,"uv0")
B.mr=new A.bJ(B.ml,11,2)
B.mm=new A.d7(8,"legacyMaterialEffect")
B.ms=new A.bJ(B.mm,13,1)
B.V=s([B.mn,B.mo,B.mp,B.mq,B.mr,B.ms],A.a_("u<bJ>"))
B.ac=new A.ta()
B.aX=new A.lN()
B.y=new A.m0()
B.au=new A.mb()
B.eC=new A.fr(1.3089969389957472,0.1,60)
B.eD=new A.fr(1.0471975511965976,0.1,60)
B.eE=new A.fr(0.8726646259971648,0.08,45)
B.ad=new A.ft(0,"colorOnly")
B.ce=new A.ft(1,"colorAndDepth")
B.aY=new A.ft(2,"depthOnly")
B.aZ=new A.jK(1,"srgb")
B.cf=new A.fu(0,"open")
B.eF=new A.fu(1,"committed")
B.eG=new A.fu(2,"aborted")
B.b_=new A.fy(0,"open")
B.eN=new A.fy(1,"committed")
B.eO=new A.fy(2,"rolledBack")
B.av=new A.jP(1,"back")
B.aw=new A.jR(0,"less")
B.eQ=new A.hA(2,"full")
B.ax=new A.bQ(0,"open")
B.cg=new A.bQ(1,"chain")
B.ch=new A.bQ(2,"throughDoor")
B.ci=new A.bQ(3,"letterbox")
B.ae=new A.bQ(4,"ignore")
B.T=new A.fz(0,"opaque")
B.eW=new A.fz(1,"masked")
B.b0=new A.fz(2,"blended")
B.eX=new A.fA(!1,B.aw,!1,!0,B.aa,B.aa,B.ar,!1,B.av,!0,!1,!0,!0,!0,!0,!1)
B.eY=new A.fA(!0,B.aw,!1,!0,B.aa,B.aa,B.ar,!0,B.av,!0,!1,!0,!0,!0,!0,!1)
B.ec=new A.ew(2,"srcAlpha")
B.ed=new A.ew(3,"oneMinusSrcAlpha")
B.eZ=new A.fA(!0,B.aw,!1,!0,B.ec,B.ed,B.ar,!0,B.av,!0,!1,!0,!0,!0,!0,!1)
B.f_=new A.dW(0)
B.f0=new A.dW(24e5)
B.cj=new A.cg(0,"compliance")
B.f1=new A.fB(B.cj)
B.ck=new A.cg(1,"rupture")
B.f2=new A.fB(B.ck)
B.cl=new A.cg(2,"synchronisation")
B.f3=new A.fB(B.cl)
B.cm=new A.eB(0,"front")
B.f4=new A.eB(1,"rearService")
B.f5=new A.eB(2,"sideBoundary")
B.f6=new A.eB(3,"roofline")
B.m=new A.dX(0,"north")
B.v=new A.dX(1,"east")
B.l=new A.dX(2,"south")
B.G=new A.dX(3,"west")
B.ay=new A.hH(0,"ground")
B.az=new A.hH(1,"first")
B.f7=new A.dp(0,"mantle")
B.f8=new A.dp(1,"portal")
B.fa=new A.dp(3,"inventory")
B.cn=new A.dp(4,"aftermath")
B.f9=new A.dp(2,"window")
B.fc=new A.dY(B.f9,"shutter","the shutter")
B.fb=new A.dp(5,"none")
B.fd=new A.dY(B.fb,null,null)
B.fe=new A.H("saved mantle history is malformed",null,null)
B.ff=new A.H("rupture elapsed time is malformed",null,null)
B.fg=new A.H("presentation keys must be strings",null,null)
B.fh=new A.H("unsupported accessibility profile",null,null)
B.fi=new A.H("inventory inspections must be an object",null,null)
B.co=new A.H("saved mantle state is malformed",null,null)
B.fj=new A.H("inactive rupture has elapsed time",null,null)
B.fk=new A.H("control sensitivity is outside 0.1\u20133.0",null,null)
B.fl=new A.H("invalid action bindings",null,null)
B.fm=new A.H("listener room is empty",null,null)
B.fn=new A.H("control bindings conflict",null,null)
B.fo=new A.H("saved difficulty state is malformed",null,null)
B.fp=new A.H("saved house drift state is malformed",null,null)
B.fq=new A.H("saved sleep record is malformed",null,null)
B.fr=new A.H("UI scale must be between 0.8 and 2.0",null,null)
B.fs=new A.H("unsupported settings store",null,null)
B.ft=new A.H("settings values must be an object",null,null)
B.fu=new A.H("saved day-loop sleepHistory must be a list",null,null)
B.fv=new A.H("invalid anisotropy limit",null,null)
B.fw=new A.H("audio event position is not finite",null,null)
B.fx=new A.H("event sequence must be non-negative",null,null)
B.fy=new A.H("inventory inspection counts are invalid",null,null)
B.fz=new A.H("only keybinds can be remapping",null,null)
B.fA=new A.H("modelScale must be positive and finite",null,null)
B.fB=new A.H("listener position is not finite",null,null)
B.fC=new A.H("invalid action ID",null,null)
B.fD=new A.H("saved window state is malformed",null,null)
B.fE=new A.H("unsupported graphics preset",null,null)
B.fF=new A.H("save run and meta must be objects",null,null)
B.fG=new A.H("saved house state is malformed",null,null)
B.fH=new A.H("saved sleep record must be an object",null,null)
B.fI=new A.H("sound cue must be a non-empty string",null,null)
B.fJ=new A.H("saved session run is malformed",null,null)
B.fK=new A.H("save map keys must be strings",null,null)
B.fL=new A.H("unsupported graphics profile",null,null)
B.fM=new A.H("unsupported audio options",null,null)
B.fN=new A.H("transform.scale must be positive",null,null)
B.fO=new A.H("Escape is reserved for pause navigation",null,null)
B.fP=new A.H("saved day-loop state is malformed",null,null)
B.fQ=new A.H("rupture extinguished mantle is unknown",null,null)
B.cp=new A.H("unsupported controls profile",null,null)
B.cq=new A.H("saved portal state is malformed",null,null)
B.fR=new A.H("acoustic portal profile is not finite",null,null)
B.fS=new A.H("saved house state does not match this house",null,null)
B.fT=new A.H("presentation snapshot contains a non-finite number",null,null)
B.fU=new A.H("unsupported gameplay settings profile",null,null)
B.fV=new A.H("save contains a non-finite number",null,null)
B.fW=new A.H("unsupported graphics store",null,null)
B.fX=new A.H("brush component needs an id and label",null,null)
B.fY=new A.H("text.json root must be an object",null,null)
B.fZ=new A.H("event kind is empty",null,null)
B.h_=new A.H("invalid control binding token",null,null)
B.h0=new A.H("audio transmission muffle is invalid",null,null)
B.h1=new A.H("acoustic portal muffle order is invalid",null,null)
B.h2=new A.H("unsupported settings profile",null,null)
B.h3=new A.H("saved session clock is malformed",null,null)
B.h4=new A.H("rupture mantle IDs are malformed",null,null)
B.h5=new A.H("invalid gameplay setting: contextualReminders",null,null)
B.h6=new A.H("invalid screen-reader verbosity",null,null)
B.h7=new A.H("saved sleep record has an unknown enum",null,null)
B.h8=new A.H("audio cue variants are empty",null,null)
B.h9=new A.H("save root must be an object",null,null)
B.ha=new A.H("audio event identity is empty",null,null)
B.hb=new A.H("render capabilities contain invalid limits",null,null)
B.hc=new A.H("saved house overrides are malformed",null,null)
B.U=new A.c1(0,0,0)
B.cP=new A.c1(1,1,1)
B.iU=s([],t.Fk)
B.bg=s([],t.cv)
B.hd=new A.k3(B.U,B.U,0,1,null,null,B.cP,0,null,B.iU,B.bg)
B.cr=new A.aK(0,0,0)
B.he=new A.eC(0,"idle")
B.aA=new A.eC(1,"active")
B.hf=new A.eC(2,"ended")
B.hg=new A.eC(3,"aborted")
B.cs=new A.fD(0,"outside")
B.hh=new A.fD(1,"intersects")
B.hi=new A.fD(2,"inside")
B.hj=new A.eE(0,"timeAdvanced")
B.hk=new A.eE(1,"dayEndReached")
B.hl=new A.eE(4,"slept")
B.hm=new A.eE(5,"complianceFloorTripped")
B.ct=new A.dq(0,"important")
B.cu=new A.dq(1,"always")
B.b1=new A.ch(0,"pauseAndMute")
B.cv=new A.dr(0,"press")
B.cw=new A.dr(1,"hold")
B.cx=new A.ds(0,"compact")
B.cy=new A.ds(1,"spacious")
B.cz=new A.cR(1,"standard")
B.cA=new A.cR(2,"detailed")
B.cB=new A.dt(0,"toast")
B.cC=new A.dt(1,"detailed")
B.cD=new A.cS(1,"readable")
B.hs=new A.hI(0,"vertex")
B.cE=new A.hI(1,"indices")
B.cF=new A.k7(0,"staticDraw")
B.h=new A.hJ(0,"ready")
B.af=new A.hJ(1,"lost")
B.ag=new A.fF(0,"prepared")
B.ht=new A.fF(1,"committed")
B.hu=new A.fF(2,"rolledBack")
B.hv=new A.eF(0,"color")
B.cG=new A.eF(1,"colorAndGlow")
B.hw=new A.eF(2,"colorDepthGlow")
B.b2=new A.eF(3,"depthOnly")
B.aB=new A.k9(1,"linear")
B.cH=new A.ka(0,"clampToEdge")
B.hx=new A.k8(1,1,1,!1,B.aB,B.aB,B.cH,1)
B.hy=new A.cU(0,"beforeShadow")
B.hz=new A.cU(2,"beforeDepth")
B.cI=new A.cU(3,"afterDepth")
B.cJ=new A.cU(4,"beforeWorld")
B.hA=new A.cU(5,"afterWorld")
B.L=new A.cU(6,"afterResolve")
B.hB=new A.cU(9,"beforePresent")
B.cK=new A.ci(0,"readBeforeWrite")
B.hC=new A.ci(1,"duplicateWriter")
B.hD=new A.ci(2,"sampledMultisampledAttachment")
B.b3=new A.ci(3,"invalidResolve")
B.hE=new A.ci(4,"formatOrSizeMismatch")
B.hF=new A.ci(5,"unversionedReadWrite")
B.hG=new A.ci(6,"invalidHistoryRead")
B.hH=new A.ci(7,"dependencyCycle")
B.hI=new A.ci(8,"missingCapability")
B.cL=new A.cy(0,"high")
B.b4=new A.cy(1,"standard")
B.b5=new A.dZ(1,B.b4,"auto",!1,"display","off","high")
B.aC=new A.e_(0,"player")
B.b6=new A.e_(1,"inserted")
B.cM=new A.e_(2,"warden")
B.cN=new A.eG(0,"wrongKind")
B.cO=new A.eG(1,"staleGeneration")
B.hL=new A.eG(2,"doubleRelease")
B.aD=new A.eG(3,"releasedResource")
B.hO=new A.cV("kitchen-range","settle")
B.hP=new A.cV("front-door-knocker","knock")
B.hQ=new A.cV("cellar-drain","drip")
B.hR=new A.cV("bedroom-timber","creak")
B.hS=new A.cV("kitchen-pipe","tick")
B.hT=new A.cV("bathroom-cistern","settle")
B.hU=new A.cV("landing-window","wind")
B.i7=new A.kj(1,"visitor")
B.ib=new A.pI(null)
B.ic=new A.pJ(null)
B.b7=new A.ks(!1,0,0.85,0.92,1)
B.id=new A.c1(0.008,0.012,0.024)
B.cQ=s([0,2,2,3],t.t)
B.ie=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b8=s([B.ct,B.cu],A.a_("u<dq>"))
B.ig=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b9=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.E=new A.bG(0,"audio")
B.R=new A.ii(0,"level")
B.lz=new A.aZ("master","Master",B.E,B.R,1,0,1,"audio")
B.lE=new A.aZ("voice","Visitor voice",B.E,B.R,1,0,1,"audio")
B.lv=new A.aZ("effects","Effects",B.E,B.R,1,0,1,"audio")
B.lw=new A.aZ("ambience","House ambience",B.E,B.R,1,0,1,"audio")
B.lA=new A.aZ("music","Music",B.E,B.R,1,0,1,"audio")
B.aK=new A.bG(1,"display")
B.lD=new A.aZ("brightness","Display brightness",B.aK,B.R,1,0.6,1.4,"display")
B.aj=new A.ii(1,"toggle")
B.ly=new A.aZ("muted","Mute house audio",B.E,B.aj,!1,null,null,"audio")
B.a3=new A.bG(2,"accessibility")
B.lB=new A.aZ("mono","Mono-compatible mix",B.a3,B.aj,!1,null,null,"audio")
B.lx=new A.aZ("high-contrast","High-contrast interface",B.a3,B.aj,!1,null,null,"display")
B.lC=new A.aZ("strong-highlights","Strong focus highlights",B.a3,B.aj,!1,null,null,"display")
B.C=s([B.lz,B.lE,B.lv,B.lw,B.lA,B.lD,B.ly,B.lB,B.lx,B.lC],A.a_("u<aZ>"))
B.z=s(["who","verb","object","place","time"],t.s)
B.ih=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.dY=new A.dj(1,"strong")
B.ba=s([B.bX,B.dY],A.a_("u<dj>"))
B.e8=new A.ev(0,"swap")
B.e9=new A.ev(1,"replace")
B.ea=new A.ev(2,"cancel")
B.ii=s([B.e8,B.e9,B.ea],A.a_("u<ev>"))
B.ij=s([2,5,9,12,16,19],t.t)
B.hn=new A.ch(1,"pauseOnly")
B.ho=new A.ch(2,"continuePlayback")
B.aE=s([B.b1,B.hn,B.ho],A.a_("u<ch>"))
B.ik=s(["uQuantizationBits","uDitherStrength"],t.s)
B.im=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.io=s([B.ax,B.cg,B.ch,B.ci,B.ae],A.a_("u<bQ>"))
B.ip=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.iq=s(["30","60","display"],t.s)
B.ap=new A.c6(0,"full")
B.bS=new A.c6(1,"compressed")
B.bT=new A.c6(2,"off")
B.cR=s([B.ap,B.bS,B.bT],A.a_("u<c6>"))
B.ir=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e2=new A.dk(1,"reduced")
B.bb=s([B.aS,B.e2],A.a_("u<dk>"))
B.dZ=new A.cP(0,"wide")
B.e_=new A.cP(2,"night")
B.bc=s([B.dZ,B.bY,B.e_],A.a_("u<cP>"))
B.is=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iD=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cS=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bd=s([B.cx,B.cy],A.a_("u<ds>"))
B.lS=new A.bT(0,"long")
B.dE=new A.bT(1,"short")
B.cT=s([B.lS,B.dE],A.a_("u<bT>"))
B.eL=new A.ce("1 - 9","Select Response",!0)
B.eH=new A.ce("SPACE","Silence Ring",!1)
B.iF=s([B.eL,B.eH],t.sa)
B.Y=new A.bS(0,"visual")
B.bt=new A.bS(1,"graphics")
B.Z=new A.bS(2,"gameplay")
B.bu=new A.bS(3,"controls")
B.H=new A.bS(4,"audio")
B.I=new A.bS(5,"accessibility")
B.iG=s([B.Y,B.bt,B.Z,B.bu,B.H,B.I],A.a_("u<bS>"))
B.iH=s([2.1,4.2,6.3],t.n)
B.iI=s(["master","voice","effects","ambience","music"],t.s)
B.be=s([B.cB,B.cC],A.a_("u<dt>"))
B.iJ=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hJ=new A.cy(2,"safe")
B.hK=new A.cy(3,"custom")
B.cU=s([B.cL,B.b4,B.hJ,B.hK],A.a_("u<cy>"))
B.D=new A.cn(0,"inactive")
B.bE=new A.cn(2,"affineWarp")
B.bF=new A.cn(3,"vertexSnap")
B.bG=new A.cn(4,"tapeGiveup")
B.bH=new A.cn(5,"portalFail")
B.a2=new A.cn(6,"lightsOut")
B.cV=s([B.D,B.ah,B.bE,B.bF,B.bG,B.bH,B.a2],A.a_("u<cn>"))
B.iK=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iL=s([B.aC,B.b6,B.cM],A.a_("u<e_>"))
B.iM=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.n6=new A.bw("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.n5=new A.bw("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.n1=new A.bw("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.n9=new A.bw("ronnie.response","named","A route card has Ronnie written on its back.")
B.n8=new A.bw("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iN=s([B.n6,B.n5,B.n1,B.n9,B.n8],t.uk)
B.n7=new A.bw("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.n4=new A.bw("ronnie.response","named","The name Ronnie holds when the room does not.")
B.n2=new A.bw("denise.revision","accepted","One correction remains yours to protect.")
B.n_=new A.bw("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iO=s([B.n7,B.n4,B.n2,B.n_],t.uk)
B.M=s([],t.cO)
B.iY=s([],t.Fm)
B.iX=s([],t.vS)
B.iP=s([],A.a_("u<cA>"))
B.iR=s([],t.yH)
B.bf=s([],t.b4)
B.iT=s([],t.ea)
B.W=s([],t.qP)
B.iS=s([],t.u)
B.cX=s([],t.xB)
B.iQ=s([],t.El)
B.n=s([],t.s)
B.cY=s([],t.ld)
B.bh=s([],t.E)
B.iZ=s([],t.t)
B.j_=s([],t.zz)
B.hN=new A.hM(15,"kitchen",-0.3,0)
B.hM=new A.hM(19,"spare-room",0,0.3)
B.N=s([B.hN,B.hM],A.a_("u<hM>"))
B.j1=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lP=new A.bH(0,"bed")
B.lQ=new A.bH(1,"chair")
B.lR=new A.bH(2,"floor")
B.cZ=s([B.lP,B.lQ,B.lR],A.a_("u<bH>"))
B.j2=s(["high","medium","low"],t.s)
B.e0=new A.cx(1,"headphones")
B.e1=new A.cx(2,"speakers")
B.bi=s([B.bZ,B.e0,B.e1,B.c_],A.a_("u<cx>"))
B.j3=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bj=s([B.cv,B.cw],A.a_("u<dr>"))
B.bs=new A.cm(0,"root")
B.dd=new A.bp(0,"pauseMenu")
B.k7=new A.dx(B.bs,B.dd,null)
B.j4=s([B.k7],t.bA)
B.bk=s([B.bV,B.a9,B.bW],A.a_("u<cO>"))
B.hq=new A.cS(0,"instant")
B.hr=new A.cS(2,"slow")
B.bl=s([B.hq,B.cD,B.hr],A.a_("u<cS>"))
B.j5=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.j6=s([B.E,B.aK,B.a3],A.a_("u<bG>"))
B.d_=s([B.m,B.v,B.l,B.G],A.a_("u<dX>"))
B.a4=new A.dC(0,"pbrMaterial")
B.a5=new A.dC(1,"shadowsAndOcclusion")
B.ak=new A.dC(2,"surfaceWeathering")
B.o=new A.dC(3,"atmosphereAndPost")
B.lM=new A.dC(4,"debugView")
B.bm=s([B.a4,B.a5,B.ak,B.o,B.lM],A.a_("u<dC>"))
B.bI=new A.ba(0,"depthTest")
B.bJ=new A.ba(1,"depthFunc")
B.bK=new A.ba(2,"depthWrite")
B.bL=new A.ba(3,"blendEnable")
B.bM=new A.ba(4,"blendFunc")
B.bN=new A.ba(5,"blendEquation")
B.bO=new A.ba(6,"cullEnable")
B.bP=new A.ba(7,"cullFace")
B.dH=new A.ba(8,"frontFace")
B.lV=new A.ba(9,"stencilEnable")
B.dF=new A.ba(10,"colorMask")
B.dG=new A.ba(11,"scissorEnable")
B.j7=s([B.bI,B.bJ,B.bK,B.bL,B.bM,B.bN,B.bO,B.bP,B.dH,B.lV,B.dF,B.dG],A.a_("u<ba>"))
B.aL=new A.cI(0,"none")
B.lG=new A.cI(1,"albedoOnly")
B.lH=new A.cI(2,"normalsOnly")
B.lI=new A.cI(3,"roughnessOnly")
B.lJ=new A.cI(4,"metallicOnly")
B.lK=new A.cI(5,"aoOnly")
B.lL=new A.cI(6,"wireframeOnly")
B.d0=s([B.aL,B.lG,B.lH,B.lI,B.lJ,B.lK,B.lL],A.a_("u<cI>"))
B.j8=s(["off","fxaa","msaa2","msaa4"],t.s)
B.eT=new A.dm("A.J.",1.275)
B.eR=new A.dm("A.J.",1.53)
B.eU=new A.dm("A.J.",1.77)
B.eV=new A.dm("A.J.",2.025)
B.eS=new A.dm("A.J.",4.8)
B.j9=s([B.eT,B.eR,B.eU,B.eV,B.eS],t.cO)
B.ja=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.jb=s(["uBloomStrength"],t.s)
B.jc=s(["uLutSize","uStrength"],t.s)
B.jd=s([B.cj,B.ck,B.cl],A.a_("u<cg>"))
B.je=s(["uTexelSize","uNear","uFar"],t.s)
B.d1=s(["uTexelStep"],t.s)
B.jf=s(["uninitialized"],t.s)
B.hp=new A.cR(0,"minimal")
B.bn=s([B.hp,B.cz,B.cA],A.a_("u<cR>"))
B.n3=new A.bw("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.mZ=new A.bw("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.mY=new A.bw("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.n0=new A.bw("ronnie.response","named","The route card gives one name its own line.")
B.jg=s([B.n3,B.mZ,B.mY,B.n0],t.uk)
B.a7=new A.c5(0,"waiting")
B.an=new A.c5(1,"atDoor")
B.ao=new A.c5(2,"consulting")
B.aO=new A.c5(3,"resolved")
B.jh=s([B.a7,B.an,B.ao,B.aO],A.a_("u<c5>"))
B.eM=new A.ce("W A S D","Move",!1)
B.eK=new A.ce("TAB","Journal",!1)
B.eJ=new A.ce("CAPS","Shader Lab",!1)
B.eI=new A.ce("ESC","Pause",!1)
B.ji=s([B.eM,B.eK,B.eJ,B.eI],t.sa)
B.jj=s(["floor-linoleum","ceiling-stained"],t.s)
B.jY={uAlbedo:0}
B.d2=new A.a4(B.jY,[0],t.I)
B.jD={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.d3=new A.a4(B.jD,[2,3,4,5,6],t.I)
B.k4={uSsaoRaw:0,uSceneDepth:1}
B.jk=new A.a4(B.k4,[0,1],t.I)
B.db={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iC=s(["KeyW","GamepadDpadUp"],t.s)
B.iB=s(["KeyS","GamepadDpadDown"],t.s)
B.it=s(["KeyA","GamepadDpadLeft"],t.s)
B.iu=s(["KeyD","GamepadDpadRight"],t.s)
B.iv=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iz=s(["KeyQ","GamepadB"],t.s)
B.iE=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.j0=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iA=s(["KeyR","GamepadX"],t.s)
B.iw=s(["KeyF","GamepadRB"],t.s)
B.ix=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iy=s(["KeyL"],t.s)
B.il=s(["Escape","GamepadMenu"],t.s)
B.jl=new A.a4(B.db,[B.iC,B.iB,B.it,B.iu,B.iv,B.iz,B.iE,B.j0,B.iA,B.iw,B.ix,B.iy,B.il],A.a_("a4<i,D<i>>"))
B.jm=new A.a4(B.db,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.hD)
B.k1={uScene:0,uHistory:1}
B.jn=new A.a4(B.k1,[0,1],t.I)
B.jB={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jo=new A.a4(B.jB,["f8ff05f019166b02150cde34c23a826d99fb13cc","6a5fdb66b3a10efa1bf4e51137d5f9470e18791c","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.hD)
B.jP={aPosition:0,aUvMat:1}
B.d4=new A.a4(B.jP,[0,4],t.I)
B.k2={uScene:0,uLut:1}
B.jp=new A.a4(B.k2,[0,1],t.I)
B.k3={uSource:0}
B.d5=new A.a4(B.k3,[0],t.I)
B.jW={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jq=new A.a4(B.jW,[0,1,2,3,4,5,6],t.I)
B.d6=new A.cT([B.Y,"settings.visual",B.bt,"settings.graphics",B.Z,"settings.gameplay",B.bu,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d7=new A.cT([B.Y,"visual",B.bt,"graphics",B.Z,"gameplay",B.bu,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jL={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jr=new A.a4(B.jL,[0,1,2],t.I)
B.k6={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.js=new A.a4(B.k6,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.hD)
B.jR={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.i3=new A.bn("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hZ=new A.bn("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.i2=new A.bn("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.i5=new A.bn("wallpaper-damp","grime",7106925,0.94,0.76)
B.i_=new A.bn("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.i4=new A.bn("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.i6=new A.bn("wallpaper-peeling","grime",9340536,0.91,0.68)
B.i0=new A.bn("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hX=new A.bn("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hY=new A.bn("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hV=new A.bn("floor-concrete","grime",7828331,0.96,0.92)
B.hW=new A.bn("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.i1=new A.bn("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bo=new A.a4(B.jR,[B.i3,B.hZ,B.i2,B.i5,B.i_,B.i4,B.i6,B.i0,B.hX,B.hY,B.hV,B.hW,B.i1],A.a_("a4<i,bn>"))
B.jZ={uBloom:0}
B.jt=new A.a4(B.jZ,[0],t.I)
B.k_={uSceneDepth:0}
B.ju=new A.a4(B.k_,[0],t.I)
B.k0={uScene:0}
B.jv=new A.a4(B.k0,[0],t.I)
B.O={}
B.d9=new A.a4(B.O,[],A.a_("a4<i,hs>"))
B.d8=new A.a4(B.O,[],t.hD)
B.bp=new A.a4(B.O,[],A.a_("a4<i,w>"))
B.w=new A.a4(B.O,[],t.I)
B.ng=new A.a4(B.O,[],A.a_("a4<i,i?>"))
B.jw=new A.a4(B.O,[],A.a_("a4<@,@>"))
B.jF={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jx=new A.a4(B.jF,[0,1,2,3,4,5,6],t.I)
B.de=new A.cG(0,"resume")
B.df=new A.cG(1,"settings")
B.dg=new A.cG(2,"controls")
B.dh=new A.cG(3,"save")
B.di=new A.cG(4,"help")
B.dj=new A.cG(5,"credits")
B.dk=new A.cG(6,"back")
B.jy=new A.cT([B.de,"pause.resume",B.df,"pause.settings",B.dg,"pause.controls",B.dh,"pause.save",B.di,"pause.help",B.dj,"pause.credits",B.dk,"pause.back"],A.a_("cT<cG,i>"))
B.jT={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jz=new A.a4(B.jT,[0,1,2,3],t.I)
B.k5={uTex:0}
B.jA=new A.a4(B.k5,[0],t.I)
B.bq=new A.cT([B.ah,1,B.bE,1.5,B.bF,1.5,B.bG,2,B.bH,2,B.a2,4],A.a_("cT<cn,w>"))
B.iV=s([],t.bA)
B.iW=s([],A.a_("u<bp>"))
B.br=new A.e4(B.iV,B.iW,null)
B.dc=new A.cm(1,"settings")
B.k8=new A.cm(2,"visual")
B.k9=new A.cm(3,"graphics")
B.ka=new A.cm(4,"gameplay")
B.kb=new A.cm(5,"controls")
B.kc=new A.cm(6,"audio")
B.kd=new A.cm(7,"accessibility")
B.ke=new A.cm(8,"credits")
B.X=new A.bp(1,"settings")
B.kf=new A.bp(2,"journal")
B.kg=new A.bp(3,"sleep")
B.kh=new A.bp(4,"help")
B.ki=new A.bp(5,"visitor")
B.kj=new A.bp(6,"ending")
B.dl=new A.e5(0,"opened")
B.dm=new A.e5(2,"backed")
B.dn=new A.e5(3,"resumed")
B.kk=new A.e5(4,"dismissed")
B.a_=new A.e5(5,"unchanged")
B.kl=new A.bC("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.km=new A.bC("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.kn=new A.bC("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.ko=new A.bC("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kp=new A.bC("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kq=new A.bC("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kr=new A.bC("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.ks=new A.bC("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kt=new A.bC("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.ku=new A.kI(0,1,null)
B.kw=new A.kJ(1,"high")
B.kv=new A.qw(!1,!0,!0,!0,!1,B.kw,35,256)
B.kx=new A.kN(1,0,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,!1)
B.bv=new A.eQ(0,"safe")
B.P=new A.eQ(1,"standard")
B.a0=new A.eQ(2,"high")
B.Q=new A.aJ(B.O,0,t.M)
B.aF=new A.eP(B.bv,B.Q)
B.jX={shadows:0}
B.lu=new A.aJ(B.jX,1,t.M)
B.kz=new A.eP(B.P,B.lu)
B.jI={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lm=new A.aJ(B.jI,5,t.M)
B.kA=new A.eP(B.a0,B.lm)
B.ky=new A.eQ(4,"shipping")
B.jK={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.ln=new A.aJ(B.jK,7,t.M)
B.nh=new A.eP(B.ky,B.ln)
B.kC=new A.aX(0,1)
B.kD=new A.b0(0.35,0.52,0.88)
B.kE=new A.ak(0.46,0.25,0.2)
B.dq=new A.b0(0.22,0.45,0.92)
B.kF=new A.ak(0.48,0.4,0.34)
B.kG=new A.ak(0.31,0.25,0.23)
B.bw=new A.b0(0.75,0.52,0.42)
B.kH=new A.ak(-0.45,-0.45,14737646)
B.kI=new A.b0(0.4,0.65,0.95)
B.bx=new A.b0(0.88,0.96,1)
B.kJ=new A.ak(0.45,-0.45,16766720)
B.kK=new A.ak(0.37,0.33,0.31)
B.kL=new A.b0(0.62,0.48,0.45)
B.kM=new A.ak(0.34,0.32,0.29)
B.dr=new A.ak(0.38,0.25,0.19)
B.by=new A.b0(0.9,0.8,0.72)
B.aG=new A.b0(0.28,0.16,0.12)
B.kN=new A.ak(0.31,0.28,0.24)
B.aH=new A.b0(0.65,0.45,0.35)
B.kO=new A.ak(0.58,0.56,0.5)
B.ds=new A.b0(0.2,0.38,0.9)
B.kP=new A.ak(0.44,0.37,0.28)
B.kQ=new A.ak(0.52,0.5,0.44)
B.kR=new A.ak(0.24,0.25,0.27)
B.kS=new A.ak(0.28,0.27,0.25)
B.kT=new A.b0(0.35,0.28,0.25)
B.dt=new A.b0(0.52,0.32,0.38)
B.kU=new A.ak(0.42,0.4,0.38)
B.kV=new A.ak(0.45,0.45,16117990)
B.kW=new A.ak(0.18,0.2,0.21)
B.kX=new A.ak(0.2,0.12,0.1)
B.kY=new A.ak(-0.45,0.45,13840175)
B.aI=new A.b0(0.35,0.2,0.15)
B.kZ=new A.ak(0.12,0.15,0.2)
B.bz=new A.ic(0,"legacy")
B.du=new A.eS(0,"constructed")
B.A=new A.eS(1,"ready")
B.aJ=new A.eS(2,"lost")
B.dv=new A.eS(3,"disposed")
B.eP=new A.hA(1,"errorsOnly")
B.l_=new A.kV(B.aF,384,216,1,0,512,32,4,1,B.eP)
B.bA=new A.eT(0,"constructed")
B.l0=new A.eT(1,"initializing")
B.bB=new A.eT(2,"ready")
B.dw=new A.eT(3,"contextLost")
B.i=new A.fP(0,"read")
B.j=new A.fP(1,"write")
B.J=new A.fP(2,"historyRead")
B.bC=new A.fQ(0,"prepared")
B.l1=new A.fQ(1,"committed")
B.l2=new A.fQ(2,"rolledBack")
B.t=new A.ie(0,"rgba8")
B.l3=new A.aM("dofBlurH",B.t,192,108,1,0)
B.l4=new A.aM("dofBlurV",B.t,192,108,1,0)
B.l5=new A.aM("dofOutput",B.t,384,216,1,0)
B.dx=new A.ie(2,"depth24")
B.l6=new A.aM("shadowMap",B.dx,512,512,1,0)
B.l7=new A.aM("ssaoRaw",B.t,192,108,1,0)
B.l8=new A.aM("ssaoBlurred",B.t,192,108,1,0)
B.l9=new A.aM("gradeOutput",B.t,384,216,1,0)
B.la=new A.aM("vhsOutput",B.t,384,216,1,0)
B.lb=new A.aM("sceneDepth",B.dx,384,216,1,0)
B.lc=new A.aM("bloomBlurH",B.t,192,108,1,0)
B.ld=new A.aM("bloomBlurV",B.t,192,108,1,0)
B.le=new A.aM("present",B.t,384,216,1,0)
B.bD=new A.aM("sceneColor",B.t,384,216,1,0)
B.lf=new A.aM("ps1Output",B.t,384,216,1,0)
B.lg=new A.eU(null,"save storage unavailable")
B.lh=new A.eU(null,"save could not be recovered")
B.li=new A.eU(null,null)
B.jN={WheelUp:0,WheelDown:1}
B.lj=new A.aJ(B.jN,2,t.M)
B.jH={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.lk=new A.aJ(B.jH,4,t.M)
B.jU={open:0,closed:1}
B.ll=new A.aJ(B.jU,2,t.M)
B.jG={Escape:0}
B.dy=new A.aJ(B.jG,1,t.M)
B.jE={open:0,closed:1,mixed:2}
B.lo=new A.aJ(B.jE,3,t.M)
B.jS={front:0,"rear-service":1}
B.lp=new A.aJ(B.jS,2,t.M)
B.jV={overcast:0,rain:1}
B.lq=new A.aJ(B.jV,2,t.M)
B.jQ={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.lr=new A.aJ(B.jQ,16,t.M)
B.jO={Escape:0,Tab:1,F11:2}
B.dz=new A.aJ(B.jO,3,t.M)
B.jM={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.ls=new A.aJ(B.jM,5,t.M)
B.jJ={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ai=new A.aJ(B.jJ,7,t.M)
B.jC={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.lt=new A.aJ(B.jC,9,t.M)
B.dC=new A.eW(2,"link")
B.lF=new A.ij(B.dC,"gl.createProgram() returned null")
B.dA=new A.eW(0,"vertex")
B.dB=new A.eW(1,"fragment")
B.dD=new A.eW(3,"validation")
B.lN=new A.ik(0,"full")
B.lO=new A.ik(2,"culled")
B.a6=new A.N(0,1,0)
B.aN=new A.N(0,-1,0)
B.lT=new A.bI(-1,B.a6,B.aN,B.cP,1,1,0.3,0.5)
B.cW=s([],t.n)
B.lU=new A.l5(!1,"","",B.cW,B.cW)
B.dI=new A.e9(0,"resident")
B.dJ=new A.e9(1,"pending")
B.dK=new A.e9(2,"missing")
B.dL=new A.e9(3,"evicted")
B.am=new A.N(0,0,0)
B.kB=new A.kT(0,0,0,1)
B.B=new A.lb(B.am,B.kB)
B.lW=A.cu("Hl")
B.lX=A.cu("Hm")
B.lY=A.cu("om")
B.lZ=A.cu("Cn")
B.m_=A.cu("CB")
B.m0=A.cu("CC")
B.m1=A.cu("CD")
B.m2=A.cu("a7")
B.m3=A.cu("G")
B.m4=A.cu("wZ")
B.m5=A.cu("Ds")
B.m6=A.cu("Dt")
B.m7=A.cu("is")
B.e=new A.d4(0,"float1")
B.aM=new A.d4(1,"float2")
B.q=new A.d4(2,"float3")
B.m8=new A.d4(3,"float4")
B.u=new A.d4(4,"mat4")
B.dM=new A.d4(5,"mat4Array")
B.bQ=new A.A(B.e,0)
B.dN=new A.A(B.e,1)
B.S=new A.d4(6,"sampler")
B.x=new A.A(B.S,0)
B.al=new A.A(B.S,1)
B.dO=new A.A(B.S,2)
B.m9=new A.A(B.S,3)
B.ma=new A.A(B.S,4)
B.mb=new A.A(B.S,5)
B.mc=new A.A(B.S,6)
B.md=new A.t9(!1)
B.me=new A.N(0,0,1)
B.mf=new A.N(1,0,0)
B.mg=new A.N(1/0,1/0,1/0)
B.mh=new A.N(-1/0,-1/0,-1/0)
B.dQ=new A.d7(6,"tangent4")
B.mt=new A.ec(0,"visitorAnswered")
B.dR=new A.ec(1,"visitorIgnored")
B.mu=new A.ec(2,"entryVerified")
B.mv=new A.ec(3,"entryContradicted")
B.mw=new A.ec(4,"exposureAccepted")
B.my=new A.d8(1,"malformedDay")
B.mz=new A.d8(2,"malformedTier")
B.dS=new A.d8(3,"missingTierLines")
B.a8=new A.d8(6,"invalidPhase")
B.mC=new A.bu(B.a8,"No reaction is due.")
B.mK=new A.bb(B.mC)
B.mH=new A.bu(B.a8,"The active visit cannot be chosen.")
B.mL=new A.bb(B.mH)
B.mD=new A.bu(B.a8,"The active visit has no line to advance.")
B.mM=new A.bb(B.mD)
B.mB=new A.d8(5,"noActiveVisit")
B.mE=new A.bu(B.mB,"There is no active visit.")
B.dT=new A.bb(B.mE)
B.mG=new A.bu(B.a8,"A visit is already active.")
B.mN=new A.bb(B.mG)
B.mA=new A.d8(4,"noArrival")
B.mJ=new A.bu(B.mA,"The authored arrival is missing.")
B.mO=new A.bb(B.mJ)
B.mF=new A.bu(B.a8,"That answer is not offered.")
B.mP=new A.bb(B.mF)
B.mx=new A.d8(0,"missingCorpus")
B.mI=new A.bu(B.mx,"The authored visitor corpus is empty.")
B.mQ=new A.bb(B.mI)
B.dU=new A.f1(1,"exact")
B.bU=new A.f1(2,"partial")
B.aP=new A.f1(3,"contradiction")
B.mR=new A.f1(0,"skipped")
B.mS=new A.f0(B.mR,B.Q)
B.mT=new A.f0(B.bU,B.Q)
B.mU=new A.iy(B.W,!1)
B.mV=new A.iy(B.W,!0)
B.dV=new A.iA(0,"horizontal")
B.mW=new A.iA(1,"vertical")
B.dW=new A.iC(0,"horizontal")
B.mX=new A.iC(1,"vertical")
B.aQ=new A.h1(0,"empty")
B.na=new A.h1(1,"cpuReady")
B.aR=new A.h1(4,"released")})();(function staticFields(){$.tS=null
$.cb=A.e([],A.a_("u<G>"))
$.yL=null
$.qA=0
$.qB=A.FE()
$.ye=null
$.yd=null
$.AM=null
$.AC=null
$.AV=null
$.vJ=null
$.vQ=null
$.xQ=null
$.u8=A.e([],A.a_("u<D<G>?>"))
$.hg=null
$.ji=null
$.jj=null
$.xr=!1
$.ar=B.y
$.z2=""
$.z3=null
$.yZ=null
$.qh=null
$.c9=A.a8()
$.dc=A.a8()
$.bz=null
$.mu=null
$.uk=A.a8()
$.B=A.a8()
$.bV=A.a8()
$.ae=A.a8()
$.zB=A.a8()
$.hi=null
$.Y=A.a8()
$.hd=null
$.b1=A.a8()
$.V=A.a8()
$.xa=A.a8()
$.xm=null
$.by=null
$.xd=!1
$.mB=!1
$.jg=B.aT
$.el=B.aq
$.vw=!1
$.xJ=!1
$.A1=null
$.mt=null
$.mp=null
$.zN=0
$.mz=!1
$.A0=!1
$.xs=0
$.A7=0
$.em=0
$.Ax=!1
$.xf="booting"
$.ca=0
$.eo=0
$.as="hall"
$.jc=A.a8()
$.h8=A.a8()
$.bW=A.a8()
$.A6=null
$.xA=0
$.xE=1.65
$.vp=null
$.b2=null
$.jn=!1
$.ct=A.a8()
$.hb=A.a8()
$.ha=A.a8()
$.ml=A.a8()
$.zC=A.a8()
$.zA=A.a8()
$.aB=A.a8()
$.mm=A.a8()
$.jb=A.a8()
$.mk=A.a8()
$.jd=A.a8()
$.je=A.a8()
$.fa=A.a8()
$.h9=A.a8()
$.h7=A.a8()
$.ja=A.a8()
$.j8=A.a8()
$.j9=A.a8()
$.aI=A.a8()
$.mj=A.a8()
$.bd=A.a8()
$.vy=A.a0(t.S)
$.de=A.e([],t.s)
$.xk=null
$.Ar=!1
$.zF=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Ho","B3",()=>A.AL("_$dart_dartClosure"))
s($,"Hn","hp",()=>A.AL("_$dart_dartClosure_dartJSInterop"))
s($,"I6","Bq",()=>A.e([new J.kl()],A.a_("u<ih>")))
s($,"HA","B4",()=>A.dF(A.t5({
toString:function(){return"$receiver$"}})))
s($,"HB","B5",()=>A.dF(A.t5({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"HC","B6",()=>A.dF(A.t5(null)))
s($,"HD","B7",()=>A.dF(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"HG","Ba",()=>A.dF(A.t5(void 0)))
s($,"HH","Bb",()=>A.dF(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"HF","B9",()=>A.dF(A.z_(null)))
s($,"HE","B8",()=>A.dF(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"HJ","Bd",()=>A.dF(A.z_(void 0)))
s($,"HI","Bc",()=>A.dF(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"HL","y0",()=>A.DQ())
s($,"HP","Bi",()=>A.CU(4096))
s($,"HN","Bg",()=>new A.uh().$0())
s($,"HO","Bh",()=>new A.ug().$0())
s($,"HM","Bf",()=>A.CT(A.a2(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"I_","hq",()=>A.mI(B.m3))
s($,"Hy","y_",()=>{A.D7()
return $.qA})
s($,"Hk","B2",()=>B.bD.jB())
s($,"Ht","xZ",()=>A.kG(A.e([255,255,255,255],t.t)))
s($,"Hq","xW",()=>A.kG(A.e([128,128,255,255],t.t)))
s($,"Hp","xV",()=>A.kG(A.e([0,0,0,255],t.t)))
s($,"Hr","xX",()=>A.kG(A.e([255,255,0,255],t.t)))
s($,"Hs","xY",()=>A.kG(A.e([255,255,255,255],t.t)))
s($,"Ib","Bu",()=>A.iu(0,1,0))
s($,"HK","Be",()=>A.DN(A.a0(t.N),0,0,A.iu(0,0,0)))
s($,"I8","Br",()=>A.yQ("^[a-z0-9][a-z0-9._-]*$"))
s($,"Ie","fg",()=>{var q=$.yZ
if(q==null){A.vG()
A.vG()
A.vG()
A.vG()
q=$.yZ=new A.rV()}return q})
s($,"Hu","wu",()=>A.wE(B.ct,!0,B.b1,B.cv,B.cy,B.cz,B.cB,B.cD))
s($,"HV","Bj",()=>new A.nv())
r($,"Av","dh",()=>A.wW(null,null))
r($,"vb","y5",()=>A.kc(null,null))
r($,"xj","ff",()=>A.fx(null,null,!1,1,!1,!1,2,1))
r($,"xn","ww",()=>$.wu())
s($,"I0","Bm",()=>new A.p2())
s($,"I1","Bn",()=>new A.pb())
s($,"I2","wx",()=>new A.pv(A.o(t.N,t.S)))
s($,"HX","Bk",()=>A.d6().gaO().h(0,"debugPause")==="1")
s($,"HU","jr",()=>A.d6().gaO().h(0,"automation")==="1")
s($,"HR","wv",()=>A.FU())
s($,"HQ","y1",()=>$.wv()!=null)
s($,"HS","y2",()=>$.jr()?A.d6().gaO().h(0,"captureMantleId"):null)
s($,"HT","y3",()=>A.d6().gaO().h(0,"captureMantleLit")==="1")
r($,"xD","et",()=>A.iu(0,0,0))
r($,"xw","Bp",()=>A.iu(0,0,0))
r($,"xK","js",()=>A.iu(0,0,0))
s($,"HW","y4",()=>A.FV())
s($,"I4","mJ",()=>new A.on(A.iu(0,0,0)))
s($,"I3","Bo",()=>new A.pV(new A.o2()))
s($,"HY","cN",()=>new A.oF(A.e([],t.s)))
s($,"I7","mK",()=>{var q=new A.rI(B.aL)
q.f=A.a_("D<e8>").a(A.e([A.ah(B.a4,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.ah(B.a4,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.ah(B.a4,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.ah(B.a4,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.ah(B.a4,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.ah(B.a5,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.ah(B.a5,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.ah(B.a5,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.ah(B.a5,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.ah(B.a5,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.ah(B.ak,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.ah(B.ak,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.ah(B.ak,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.ah(B.ak,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.ah(B.o,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.ah(B.o,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.ah(B.o,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.ah(B.o,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.ah(B.o,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.ah(B.o,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.ah(B.o,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.ah(B.o,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.ah(B.o,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.ah(B.o,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.ah(B.o,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.ah(B.o,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.ah(B.o,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.ah(B.o,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.ah(B.o,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.ah(B.o,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.ah(B.o,!0,0.01,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.ah(B.o,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.ah(B.o,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05)],A.a_("u<e8>")))
return q})
s($,"Ia","Bt",()=>new A.rH(A.o(t.N,t.z)))
s($,"I9","Bs",()=>new A.qD(A.D9(520588),B.b7))
s($,"HZ","Bl",()=>new A.oZ())
s($,"I5","hr",()=>new A.ql(B.br))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.e3,ArrayBuffer:A.fL,ArrayBufferView:A.i1,DataView:A.kz,Float32Array:A.hZ,Float64Array:A.kA,Int16Array:A.kB,Int32Array:A.kC,Int8Array:A.kD,Uint16Array:A.kE,Uint32Array:A.kF,Uint8ClampedArray:A.eM,CanvasPixelArray:A.eM,Uint8Array:A.i2})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b8.$nativeSuperclassTag="ArrayBufferView"
A.iM.$nativeSuperclassTag="ArrayBufferView"
A.iN.$nativeSuperclassTag="ArrayBufferView"
A.i_.$nativeSuperclassTag="ArrayBufferView"
A.iO.$nativeSuperclassTag="ArrayBufferView"
A.iP.$nativeSuperclassTag="ArrayBufferView"
A.i0.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.vR
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
