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
if(a[b]!==s){A.CC(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ug(b)
return new s(c,this)}:function(){if(s===null)s=A.ug(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ug(a).prototype
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
ul(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ry(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.uj==null){A.Ce()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.vg("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.pY
if(o==null)o=$.pY=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Cl(a)
if(p!=null)return p
if(typeof a=="function")return B.f2
s=Object.getPrototypeOf(a)
if(s==null)return B.co
if(s===Object.prototype)return B.co
if(typeof q=="function"){o=$.pY
if(o==null)o=$.pY=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bf,enumerable:false,writable:true,configurable:true})
return B.bf}return B.bf},
uP(a,b){if(a<0||a>4294967295)throw A.d(A.aI(a,0,4294967295,"length",null))
return J.yx(new Array(a),b)},
uQ(a,b){if(a<0)throw A.d(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("t<0>"))},
j4(a,b){if(a<0)throw A.d(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("t<0>"))},
yx(a,b){var s=A.f(a,b.i("t<0>"))
s.$flags=1
return s},
yy(a,b){var s=t.bP
return J.uv(s.a(a),s.a(b))},
uT(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
yz(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.uT(r))break;++b}return b},
yA(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.uT(q))break}return b},
eu(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fK.prototype
return J.j6.prototype}if(typeof a=="string")return J.dh.prototype
if(a==null)return J.fL.prototype
if(typeof a=="boolean")return J.j5.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cP.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.eS.prototype
return a}if(a instanceof A.C)return a
return J.ry(a)},
aE(a){if(typeof a=="string")return J.dh.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cP.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.eS.prototype
return a}if(a instanceof A.C)return a
return J.ry(a)},
ci(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cP.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.eS.prototype
return a}if(a instanceof A.C)return a
return J.ry(a)},
C9(a){if(typeof a=="number")return J.dX.prototype
if(a==null)return a
if(!(a instanceof A.C))return J.dr.prototype
return a},
wN(a){if(typeof a=="number")return J.dX.prototype
if(typeof a=="string")return J.dh.prototype
if(a==null)return a
if(!(a instanceof A.C))return J.dr.prototype
return a},
Ca(a){if(typeof a=="string")return J.dh.prototype
if(a==null)return a
if(!(a instanceof A.C))return J.dr.prototype
return a},
Cb(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cP.prototype
if(typeof a=="symbol")return J.eT.prototype
if(typeof a=="bigint")return J.eS.prototype
return a}if(a instanceof A.C)return a
return J.ry(a)},
uu(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.wN(a).a_(a,b)},
a6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eu(a).V(a,b)},
b7(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Cj(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).h(a,b)},
bG(a,b,c){return J.ci(a).k(a,b,c)},
i8(a,b){return J.ci(a).l(a,b)},
xt(a,b){return J.ci(a).I(a,b)},
xu(a,b){return J.ci(a).S(a,b)},
xv(a,b,c){return J.Cb(a).fM(a,b,c)},
xw(a,b){return J.ci(a).cj(a,b)},
uv(a,b){return J.wN(a).F(a,b)},
l8(a,b){return J.ci(a).W(a,b)},
aq(a){return J.eu(a).gG(a)},
uw(a){return J.aE(a).gJ(a)},
xx(a){return J.aE(a).gP(a)},
S(a){return J.ci(a).gt(a)},
b8(a){return J.aE(a).gq(a)},
ew(a){return J.eu(a).gU(a)},
ex(a,b,c){return J.ci(a).bX(a,b,c)},
xy(a,b){return J.aE(a).sq(a,b)},
xz(a,b){return J.ci(a).Y(a,b)},
xA(a,b){return J.Ca(a).bf(a,b)},
tc(a,b){return J.C9(a).nn(a,b)},
ey(a){return J.eu(a).n(a)},
xB(a,b){return J.ci(a).es(a,b)},
j2:function j2(){},
j5:function j5(){},
fL:function fL(){},
fM:function fM(){},
di:function di(){},
js:function js(){},
dr:function dr(){},
cP:function cP(){},
eS:function eS(){},
eT:function eT(){},
t:function t(a){this.$ti=a},
j3:function j3(){},
nm:function nm(a){this.$ti=a},
dG:function dG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dX:function dX(){},
fK:function fK(){},
j6:function j6(){},
dh:function dh(){}},A={tg:function tg(){},
l2(){return $},
xN(a,b,c){if(t.gt.b(a))return new A.hp(a,b.i("@<0>").E(c).i("hp<1,2>"))
return new A.dK(a,b.i("@<0>").E(c).i("dK<1,2>"))},
uW(a){return new A.dY("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.dY("Field '"+a+"' has not been initialized.")},
yD(a){return new A.dY("Field '"+a+"' has already been initialized.")},
rz(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aA(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hc(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dE(a,b,c){return a},
uk(a){var s,r
for(s=$.bV.length,r=0;r<s;++r)if(a===$.bV[r])return!0
return!1},
jO(a,b,c,d){A.jC(b,"start")
if(c!=null){A.jC(c,"end")
if(b>c)A.k(A.aI(b,0,c,"start",null))}return new A.hb(a,b,c,d.i("hb<0>"))},
jd(a,b,c,d){if(t.gt.b(a))return new A.dO(a,b,c.i("@<0>").E(d).i("dO<1,2>"))
return new A.cR(a,b,c.i("@<0>").E(d).i("cR<1,2>"))},
eQ(){return new A.f0("No element")},
uO(){return new A.f0("Too many elements")},
jK(a,b,c,d,e){if(c-b<=32)A.z9(a,b,c,d,e)
else A.z8(a,b,c,d,e)},
z9(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aE(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ah()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
z8(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.O(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.O(a4+a5,2),f=g-j,e=g+j,d=J.aE(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a6(a6.$2(b,a0),0)
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
A.jK(a3,a4,r-2,a6,a7)
A.jK(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a6(a6.$2(d.h(a3,r),b),0))++r
while(J.a6(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.jK(a3,r,q,a6,a7)}else A.jK(a3,r,q,a6,a7)},
du:function du(){},
fx:function fx(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b){this.a=a
this.$ti=b},
hp:function hp(a,b){this.a=a
this.$ti=b},
hn:function hn(){},
pJ:function pJ(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=a
this.$ti=b},
dY:function dY(a){this.a=a},
dL:function dL(a){this.a=a},
oH:function oH(){},
L:function L(){},
a2:function a2(){},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b9:function b9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
dO:function dO(a,b,c){this.a=a
this.b=b
this.$ti=c},
e_:function e_(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
K:function K(a,b,c){this.a=a
this.b=b
this.$ti=c},
ch:function ch(a,b){this.a=a
this.$ti=b},
hi:function hi(a,b){this.a=a
this.$ti=b},
am:function am(){},
cy:function cy(){},
f2:function f2(){},
h4:function h4(a,b){this.a=a
this.$ti=b},
hS:function hS(){},
bW(a,b,c){var s,r,q,p,o,n,m,l=A.aH(a.gT(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aH(a.gao(),!0,c)
m=new A.a7(q,n,b.i("@<0>").E(c).i("a7<1,2>"))
m.$keys=l
return m}return new A.fz(A.aG(a,b,c),b.i("@<0>").E(c).i("fz<1,2>"))},
xT(){throw A.d(A.aK("Cannot modify unmodifiable Map"))},
xU(){throw A.d(A.aK("Cannot modify constant Set"))},
x4(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Cj(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ey(a)
return s},
fZ(a){var s,r=$.v1
if(r==null)r=$.v1=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jz(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.e(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
jy(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.cI(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
jx(a){var s,r,q,p
if(a instanceof A.C)return A.bU(A.bF(a),null)
s=J.eu(a)
if(s===B.f1||s===B.f3||t.cx.b(a)){r=B.bv(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bU(A.bF(a),null)},
v2(a){var s,r,q
if(a==null||typeof a=="number"||A.bT(a))return J.ey(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.da)return a.n(0)
if(a instanceof A.bR)return a.fF(!0)
s=$.xq()
for(r=0;r<1;++r){q=s[r].no(a)
if(q!=null)return q}return"Instance of '"+A.jx(a)+"'"},
yN(){return Date.now()},
yW(){var s,r
if($.ob!==0)return
$.ob=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.ob=1e6
$.oc=new A.oa(r)},
yM(){if(!!self.location)return self.location.href
return null},
yX(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ao(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.di(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aI(a,0,1114111,null,null))},
eW(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
yV(a){var s=A.eW(a).getUTCFullYear()+0
return s},
yT(a){var s=A.eW(a).getUTCMonth()+1
return s},
yP(a){var s=A.eW(a).getUTCDate()+0
return s},
yQ(a){var s=A.eW(a).getUTCHours()+0
return s},
yS(a){var s=A.eW(a).getUTCMinutes()+0
return s},
yU(a){var s=A.eW(a).getUTCSeconds()+0
return s},
yR(a){var s=A.eW(a).getUTCMilliseconds()+0
return s},
yO(a){var s=a.$thrownJsError
if(s==null)return null
return A.cH(s)},
v3(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.au(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
l4(a){throw A.d(A.uf(a))},
e(a,b){if(a==null)J.b8(a)
throw A.d(A.rv(a,b))},
rv(a,b){var s,r="index"
if(!A.aN(b))return new A.c8(!0,b,r,null)
s=A.a(J.b8(a))
if(b<0||b>=s)return A.ng(b,s,a,r)
return A.v5(b,r)},
C3(a,b,c){if(a>c)return A.aI(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aI(b,a,c,"end",null)
return new A.c8(!0,b,"end",null)},
uf(a){return new A.c8(!0,a,null,null)},
d(a){return A.au(a,new Error())},
au(a,b){var s
if(a==null)a=new A.cX()
b.dartException=a
s=A.CF
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
CF(){return J.ey(this.dartException)},
k(a,b){throw A.au(a,b==null?new Error():b)},
bp(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.AB(a,b,c),s)},
AB(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.hf("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.d(A.av(a))},
cY(a){var s,r,q,p,o,n
a=A.wX(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.pk(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
pl(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
vf(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
th(a,b){var s=b==null,r=s?null:b.method
return new A.j8(a,r,s?null:b.receiver)},
ag(a){var s
if(a==null)return new A.nS(a)
if(a instanceof A.fD){s=a.a
return A.dF(a,s==null?A.ff(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.dF(a,a.dartException)
return A.BC(a)},
dF(a,b){if(t.W.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
BC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.di(r,16)&8191)===10)switch(q){case 438:return A.dF(a,A.th(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.dF(a,new A.fV())}}if(a instanceof TypeError){p=$.x7()
o=$.x8()
n=$.x9()
m=$.xa()
l=$.xd()
k=$.xe()
j=$.xc()
$.xb()
i=$.xg()
h=$.xf()
g=p.aH(s)
if(g!=null)return A.dF(a,A.th(A.B(s),g))
else{g=o.aH(s)
if(g!=null){g.method="call"
return A.dF(a,A.th(A.B(s),g))}else if(n.aH(s)!=null||m.aH(s)!=null||l.aH(s)!=null||k.aH(s)!=null||j.aH(s)!=null||m.aH(s)!=null||i.aH(s)!=null||h.aH(s)!=null){A.B(s)
return A.dF(a,new A.fV())}}return A.dF(a,new A.jV(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.h9()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.dF(a,new A.c8(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.h9()
return a},
cH(a){var s
if(a instanceof A.fD)return a.b
if(a==null)return new A.hF(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.hF(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
l5(a){if(a==null)return J.aq(a)
if(typeof a=="object")return A.fZ(a)
return J.aq(a)},
BY(a){if(typeof a=="number")return B.d.gG(a)
if(a instanceof A.kL)return A.fZ(a)
if(a instanceof A.bR)return a.gG(a)
return A.l5(a)},
wM(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
C8(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
AX(a,b,c,d,e,f){t.gY.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.eM("Unsupported number of arguments for wrapped closure"))},
fq(a,b){var s=a.$identity
if(!!s)return s
s=A.BZ(a,b)
a.$identity=s
return s},
BZ(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.AX)},
xS(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.jN().constructor.prototype):Object.create(new A.eD(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.uC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.xO(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.uC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
xO(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.xL)}throw A.d("Error in functionType of tearoff")},
xP(a,b,c,d){var s=A.uB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
uC(a,b,c,d){if(c)return A.xR(a,b,d)
return A.xP(b.length,d,a,b)},
xQ(a,b,c,d){var s=A.uB,r=A.xM
switch(b?-1:a){case 0:throw A.d(new A.jG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
xR(a,b,c){var s,r
if($.uz==null)$.uz=A.uy("interceptor")
if($.uA==null)$.uA=A.uy("receiver")
s=b.length
r=A.xQ(s,c,a,b)
return r},
ug(a){return A.xS(a)},
xL(a,b){return A.hK(v.typeUniverse,A.bF(a.a),b)},
uB(a){return a.a},
xM(a){return a.b},
uy(a){var s,r,q,p=new A.eD("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.w("Field name "+a+" not found.",null))},
wO(a){return v.getIsolateTag(a)},
x0(){return v.G},
Dj(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Cl(a){var s,r,q,p,o,n=A.B($.wP.$1(a)),m=$.rw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.rD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aD($.wJ.$2(a,n))
if(q!=null){m=$.rw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.rD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.t1(s)
$.rw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.rD[n]=s
return s}if(p==="-"){o=A.t1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.wV(a,s)
if(p==="*")throw A.d(A.vg(n))
if(v.leafTags[n]===true){o=A.t1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.wV(a,s)},
wV(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ul(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
t1(a){return J.ul(a,!1,null,!!a.$ibJ)},
Cp(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.t1(s)
else return J.ul(s,c,null,null)},
Ce(){if(!0===$.uj)return
$.uj=!0
A.Cf()},
Cf(){var s,r,q,p,o,n,m,l
$.rw=Object.create(null)
$.rD=Object.create(null)
A.Cd()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.wW.$1(o)
if(n!=null){m=A.Cp(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Cd(){var s,r,q,p,o,n,m=B.d9()
m=A.fp(B.da,A.fp(B.db,A.fp(B.bw,A.fp(B.bw,A.fp(B.dc,A.fp(B.dd,A.fp(B.de(B.bv),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.wP=new A.rA(p)
$.wJ=new A.rB(o)
$.wW=new A.rC(n)},
fp(a,b){return a(b)||b},
zL(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.e(b,s)
if(!J.a6(r,b[s]))return!1}return!0},
C0(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yB(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a1("Illegal RegExp pattern ("+String(o)+")",a,null))},
Cz(a,b,c){var s=a.indexOf(b,c)
return s>=0},
C6(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
wX(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
CA(a,b,c){var s=A.CB(a,b,c)
return s},
CB(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.wX(b),"g"),A.C6(c))},
at:function at(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a){this.a=a},
fz:function fz(a,b){this.a=a
this.$ti=b},
eH:function eH(){},
lW:function lW(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b){this.a=a
this.$ti=b},
ek:function ek(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ck:function ck(a,b){this.a=a
this.$ti=b},
fA:function fA(){},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
oa:function oa(a){this.a=a},
h5:function h5(){},
pk:function pk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fV:function fV(){},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a){this.a=a},
nS:function nS(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
hF:function hF(a){this.a=a
this.b=null},
da:function da(){},
io:function io(){},
ip:function ip(){},
jR:function jR(){},
jN:function jN(){},
eD:function eD(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
bZ:function bZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
nv:function nv(a){this.a=a},
nD:function nD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a8:function a8(a,b){this.a=a
this.$ti=b},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aR:function aR(a,b){this.a=a
this.$ti=b},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
T:function T(a,b){this.a=a
this.$ti=b},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fN:function fN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
rA:function rA(a){this.a=a},
rB:function rB(a){this.a=a},
rC:function rC(a){this.a=a},
bR:function bR(){},
en:function en(){},
f5:function f5(){},
f6:function f6(){},
j7:function j7(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
CC(a){throw A.au(A.uW(a),new Error())},
h(){throw A.au(A.a9(""),new Error())},
E(){throw A.au(A.yD(""),new Error())},
x3(){throw A.au(A.uW(""),new Error())},
a5(){var s=new A.pK()
return s.b=s},
pK:function pK(){this.b=null},
Y(a){return a},
yH(a,b,c){return new Float32Array(a,b,c)},
yI(a){return new Int8Array(a)},
yJ(a){return new Uint8Array(a)},
nQ(a){return new Uint8Array(A.Y(a))},
d4(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.rv(b,a))},
As(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.C3(a,b,c))
return b},
dk:function dk(){},
eV:function eV(){},
fT:function fT(){},
qc:function qc(a){this.a=a},
jj:function jj(){},
aS:function aS(){},
fR:function fR(){},
fS:function fS(){},
fQ:function fQ(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
e2:function e2(){},
fU:function fU(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
tt(a,b){var s=b.c
return s==null?b.c=A.hI(a,"bI",[b.x]):s},
v6(a){var s=a.w
if(s===6||s===7)return A.v6(a.x)
return s===11||s===12},
z3(a){return a.as},
Cq(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.qb(v.typeUniverse,a,!1)},
et(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.et(a1,s,a3,a4)
if(r===s)return a2
return A.vE(a1,r,!0)
case 7:s=a2.x
r=A.et(a1,s,a3,a4)
if(r===s)return a2
return A.vD(a1,r,!0)
case 8:q=a2.y
p=A.fo(a1,q,a3,a4)
if(p===q)return a2
return A.hI(a1,a2.x,p)
case 9:o=a2.x
n=A.et(a1,o,a3,a4)
m=a2.y
l=A.fo(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.tH(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fo(a1,j,a3,a4)
if(i===j)return a2
return A.vF(a1,k,i)
case 11:h=a2.x
g=A.et(a1,h,a3,a4)
f=a2.y
e=A.By(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.vC(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fo(a1,d,a3,a4)
o=a2.x
n=A.et(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.tI(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.id("Attempted to substitute unexpected RTI kind "+a0))}},
fo(a,b,c,d){var s,r,q,p,o=b.length,n=A.qg(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.et(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Bz(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.qg(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.et(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
By(a,b,c,d){var s,r=b.a,q=A.fo(a,r,c,d),p=b.b,o=A.fo(a,p,c,d),n=b.c,m=A.Bz(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.kn()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
uh(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Cc(s)
return a.$S()}return null},
Cg(a,b){var s
if(A.v6(b))if(a instanceof A.da){s=A.uh(a)
if(s!=null)return s}return A.bF(a)},
bF(a){if(a instanceof A.C)return A.p(a)
if(Array.isArray(a))return A.M(a)
return A.tX(J.eu(a))},
M(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
p(a){var s=a.$ti
return s!=null?s:A.tX(a)},
tX(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.AU(a,s)},
AU(a,b){var s=a instanceof A.da?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.zU(v.typeUniverse,s.name)
b.$ccache=r
return r},
Cc(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.qb(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
l3(a){return A.cG(A.p(a))},
uc(a){var s
if(a instanceof A.bR)return a.f6()
s=a instanceof A.da?A.uh(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.ew(a).a
if(Array.isArray(a))return A.M(a)
return A.bF(a)},
cG(a){var s=a.r
return s==null?a.r=new A.kL(a):s},
C7(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.e(q,0)
s=A.hK(v.typeUniverse,A.uc(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.vG(v.typeUniverse,s,A.uc(q[r]))}return A.hK(v.typeUniverse,s,a)},
c6(a){return A.cG(A.qb(v.typeUniverse,a,!1))},
AT(a){var s=this
s.b=A.Bu(s)
return s.b(a)},
Bu(a){var s,r,q,p,o
if(a===t.K)return A.B2
if(A.ev(a))return A.B6
s=a.w
if(s===6)return A.AO
if(s===1)return A.wg
if(s===7)return A.AY
r=A.Bt(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ev)){a.f="$i"+q
if(q==="I")return A.B0
if(a===t.m)return A.B_
return A.B5}}else if(s===10){p=A.C0(a.x,a.y)
o=p==null?A.wg:p
return o==null?A.ff(o):o}return A.AM},
Bt(a){if(a.w===8){if(a===t.S)return A.aN
if(a===t.i||a===t.o)return A.B1
if(a===t.N)return A.B4
if(a===t.y)return A.bT}return null},
AS(a){var s=this,r=A.AL
if(A.ev(s))r=A.An
else if(s===t.K)r=A.ff
else if(A.fr(s)){r=A.AN
if(s===t.aV)r=A.w_
else if(s===t.x)r=A.aD
else if(s===t.fU)r=A.Am
else if(s===t.jh)r=A.tO
else if(s===t.dE)r=A.vZ
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.B
else if(s===t.y)r=A.X
else if(s===t.o)r=A.aC
else if(s===t.i)r=A.d2
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
AM(a){var s=this
if(a==null)return A.fr(s)
return A.Ck(v.typeUniverse,A.Cg(a,s),s)},
AO(a){if(a==null)return!0
return this.x.b(a)},
B5(a){var s,r=this
if(a==null)return A.fr(r)
s=r.f
if(a instanceof A.C)return!!a[s]
return!!J.eu(a)[s]},
B0(a){var s,r=this
if(a==null)return A.fr(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.C)return!!a[s]
return!!J.eu(a)[s]},
B_(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.C)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
wf(a){if(typeof a=="object"){if(a instanceof A.C)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
AL(a){var s=this
if(a==null){if(A.fr(s))return a}else if(s.b(a))return a
throw A.au(A.w5(a,s),new Error())},
AN(a){var s=this
if(a==null||s.b(a))return a
throw A.au(A.w5(a,s),new Error())},
w5(a,b){return new A.hG("TypeError: "+A.vu(a,A.bU(b,null)))},
vu(a,b){return A.iH(a)+": type '"+A.bU(A.uc(a),null)+"' is not a subtype of type '"+b+"'"},
c4(a,b){return new A.hG("TypeError: "+A.vu(a,b))},
AY(a){var s=this
return s.x.b(a)||A.tt(v.typeUniverse,s).b(a)},
B2(a){return a!=null},
ff(a){if(a!=null)return a
throw A.au(A.c4(a,"Object"),new Error())},
B6(a){return!0},
An(a){return a},
wg(a){return!1},
bT(a){return!0===a||!1===a},
X(a){if(!0===a)return!0
if(!1===a)return!1
throw A.au(A.c4(a,"bool"),new Error())},
Am(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.au(A.c4(a,"bool?"),new Error())},
d2(a){if(typeof a=="number")return a
throw A.au(A.c4(a,"double"),new Error())},
vZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.au(A.c4(a,"double?"),new Error())},
aN(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.au(A.c4(a,"int"),new Error())},
w_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.au(A.c4(a,"int?"),new Error())},
B1(a){return typeof a=="number"},
aC(a){if(typeof a=="number")return a
throw A.au(A.c4(a,"num"),new Error())},
tO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.au(A.c4(a,"num?"),new Error())},
B4(a){return typeof a=="string"},
B(a){if(typeof a=="string")return a
throw A.au(A.c4(a,"String"),new Error())},
aD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.au(A.c4(a,"String?"),new Error())},
b(a){if(A.wf(a))return a
throw A.au(A.c4(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.wf(a))return a
throw A.au(A.c4(a,"JSObject?"),new Error())},
wA(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bU(a[q],b)
return s},
Bk(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.wA(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bU(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
w8(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.f([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.e(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bU(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bU(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bU(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bU(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bU(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bU(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bU(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bU(a.x,b)+">"
if(l===8){p=A.BB(a.x)
o=a.y
return o.length>0?p+("<"+A.wA(o,b)+">"):p}if(l===10)return A.Bk(a,b)
if(l===11)return A.w8(a,b,null)
if(l===12)return A.w8(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
BB(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
zV(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
zU(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.qb(a,b,!1)
else if(typeof m=="number"){s=m
r=A.hJ(a,5,"#")
q=A.qg(s)
for(p=0;p<s;++p)q[p]=r
o=A.hI(a,b,q)
n[b]=o
return o}else return m},
zT(a,b){return A.vO(a.tR,b)},
zS(a,b){return A.vO(a.eT,b)},
qb(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.vz(A.vx(a,null,b,!1))
r.set(b,s)
return s},
hK(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.vz(A.vx(a,b,c,!0))
q.set(c,r)
return r},
vG(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.tH(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
dy(a,b){b.a=A.AS
b.b=A.AT
return b},
hJ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cf(null,null)
s.w=b
s.as=c
r=A.dy(a,s)
a.eC.set(c,r)
return r},
vE(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.zQ(a,b,r,c)
a.eC.set(r,s)
return s},
zQ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ev(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.fr(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cf(null,null)
q.w=6
q.x=b
q.as=c
return A.dy(a,q)},
vD(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.zO(a,b,r,c)
a.eC.set(r,s)
return s},
zO(a,b,c,d){var s,r
if(d){s=b.w
if(A.ev(b)||b===t.K)return b
else if(s===1)return A.hI(a,"bI",[b])
else if(b===t.c||b===t.w)return t.gK}r=new A.cf(null,null)
r.w=7
r.x=b
r.as=c
return A.dy(a,r)},
zR(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cf(null,null)
s.w=13
s.x=b
s.as=q
r=A.dy(a,s)
a.eC.set(q,r)
return r},
hH(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
zN(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
hI(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.hH(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cf(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dy(a,r)
a.eC.set(p,q)
return q},
tH(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.hH(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cf(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dy(a,o)
a.eC.set(q,n)
return n},
vF(a,b,c){var s,r,q="+"+(b+"("+A.hH(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cf(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dy(a,s)
a.eC.set(q,r)
return r},
vC(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.hH(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.hH(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.zN(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cf(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dy(a,p)
a.eC.set(r,o)
return o},
tI(a,b,c,d){var s,r=b.as+("<"+A.hH(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.zP(a,b,c,r,d)
a.eC.set(r,s)
return s},
zP(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.qg(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.et(a,b,r,0)
m=A.fo(a,c,r,0)
return A.tI(a,n,m,c!==m)}}l=new A.cf(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dy(a,l)},
vx(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
vz(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.zG(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.vy(a,r,l,k,!1)
else if(q===46)r=A.vy(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.em(a.u,a.e,k.pop()))
break
case 94:k.push(A.zR(a.u,k.pop()))
break
case 35:k.push(A.hJ(a.u,5,"#"))
break
case 64:k.push(A.hJ(a.u,2,"@"))
break
case 126:k.push(A.hJ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.zI(a,k)
break
case 38:A.zH(a,k)
break
case 63:p=a.u
k.push(A.vE(p,A.em(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.vD(p,A.em(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.zF(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.vA(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.zK(a.u,a.e,o)
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
return A.em(a.u,a.e,m)},
zG(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
vy(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.zV(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.z3(o)+'"')
d.push(A.hK(s,o,n))}else d.push(p)
return m},
zI(a,b){var s,r=a.u,q=A.vw(a,b),p=b.pop()
if(typeof p=="string")b.push(A.hI(r,p,q))
else{s=A.em(r,a.e,p)
switch(s.w){case 11:b.push(A.tI(r,s,q,a.n))
break
default:b.push(A.tH(r,s,q))
break}}},
zF(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.vw(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.em(p,a.e,o)
q=new A.kn()
q.a=s
q.b=n
q.c=m
b.push(A.vC(p,r,q))
return
case-4:b.push(A.vF(p,b.pop(),s))
return
default:throw A.d(A.id("Unexpected state under `()`: "+A.q(o)))}},
zH(a,b){var s=b.pop()
if(0===s){b.push(A.hJ(a.u,1,"0&"))
return}if(1===s){b.push(A.hJ(a.u,4,"1&"))
return}throw A.d(A.id("Unexpected extended operation "+A.q(s)))},
vw(a,b){var s=b.splice(a.p)
A.vA(a.u,a.e,s)
a.p=b.pop()
return s},
em(a,b,c){if(typeof c=="string")return A.hI(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.zJ(a,b,c)}else return c},
vA(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.em(a,b,c[s])},
zK(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.em(a,b,c[s])},
zJ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.id("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.id("Bad index "+c+" for "+b.n(0)))},
Ck(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aB(a,b,null,c,null)
r.set(c,s)}return s},
aB(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ev(d))return!0
s=b.w
if(s===4)return!0
if(A.ev(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aB(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aB(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aB(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aB(a,b.x,c,d,e))return!1
return A.aB(a,A.tt(a,b),c,d,e)}if(s===6)return A.aB(a,p,c,d,e)&&A.aB(a,b.x,c,d,e)
if(q===7){if(A.aB(a,b,c,d.x,e))return!0
return A.aB(a,b,c,A.tt(a,d),e)}if(q===6)return A.aB(a,b,c,p,e)||A.aB(a,b,c,d.x,e)
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
if(!A.aB(a,j,c,i,e)||!A.aB(a,i,e,j,c))return!1}return A.we(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.we(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.AZ(a,b,c,d,e)}if(o&&q===10)return A.B3(a,b,c,d,e)
return!1},
we(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aB(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aB(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aB(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aB(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aB(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
AZ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hK(a,b,r[o])
return A.vX(a,p,null,c,d.y,e)}return A.vX(a,b.y,null,c,d.y,e)},
vX(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aB(a,b[s],d,e[s],f))return!1
return!0},
B3(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aB(a,r[s],c,q[s],e))return!1
return!0},
fr(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.ev(a))if(s!==6)r=s===7&&A.fr(a.x)
return r},
ev(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
vO(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
qg(a){return a>0?new Array(a):v.typeUniverse.sEA},
cf:function cf(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
kn:function kn(){this.c=this.b=this.a=null},
kL:function kL(a){this.a=a},
kl:function kl(){},
hG:function hG(a){this.a=a},
zz(){var s,r,q
if(self.scheduleImmediate!=null)return A.BP()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fq(new A.pG(s),1)).observe(r,{childList:true})
return new A.pF(s,r,q)}else if(self.setImmediate!=null)return A.BQ()
return A.BR()},
zA(a){self.scheduleImmediate(A.fq(new A.pH(t.M.a(a)),0))},
zB(a){self.setImmediate(A.fq(new A.pI(t.M.a(a)),0))},
zC(a){A.tw(B.dr,t.M.a(a))},
tw(a,b){return A.zM(a.a/1000|0,b)},
zM(a,b){var s=new A.q9()
s.jE(a,b)
return s},
bm(a){return new A.kb(new A.ap($.aj,a.i("ap<0>")),a.i("kb<0>"))},
bk(a,b){a.$2(0,null)
b.b=!0
return b.a},
ai(a,b){A.Ap(a,b)},
bj(a,b){b.dn(a)},
bi(a,b){b.dq(A.ag(a),A.cH(a))},
Ap(a,b){var s,r,q=new A.qo(b),p=new A.qp(b)
if(a instanceof A.ap)a.fE(q,p,t.z)
else{s=t.z
if(a instanceof A.ap)a.em(q,p,s)
else{r=new A.ap($.aj,t.j_)
r.a=8
r.c=a
r.fE(q,p,s)}}},
bo(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.aj.ix(new A.rr(s),t.H,t.S,t.z)},
vB(a,b,c){return 0},
lm(a){var s
if(t.W.b(a)){s=a.gbA()
if(s!=null)return s}return B.ae},
te(a){var s
a.a(null)
s=new A.ap($.aj,a.i("ap<0>"))
s.cZ(null)
return s},
yk(a,b,c){var s=new A.ap($.aj,c.i("ap<0>"))
A.ze(a,new A.mw(b,s,c))
return s},
mx(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ap($.aj,b.i("ap<I<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.mz(i,h,g,f)
try{for(n=J.S(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.em(new A.my(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.c7(A.f([],b.i("t<0>")))
return n}i.a=A.cp(n,null,!1,b.i("0?"))}catch(l){p=A.ag(l)
o=A.cH(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.tY(m,k)
m=new A.aP(m,k==null?A.lm(m):k)
n.c3(m)
return n}else{i.d=p
i.c=o}}return f},
tY(a,b){if($.aj===B.v)return null
return null},
AV(a,b){if($.aj!==B.v)A.tY(a,b)
if(b==null)if(t.W.b(a)){b=a.gbA()
if(b==null){A.v3(a,B.ae)
b=B.ae}}else b=B.ae
else if(t.W.b(a))A.v3(a,b)
return new A.aP(a,b)},
pP(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.za()
b.c3(new A.aP(new A.c8(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fh(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bE()
b.c6(o.a)
A.eg(b,p)
return}b.a^=2
A.l0(null,null,b.b,t.M.a(new A.pQ(o,b)))},
eg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.u5(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eg(d.a,c)
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
A.u5(j.a,j.b)
return}g=$.aj
if(g!==h)$.aj=h
else g=null
c=c.c
if((c&15)===8)new A.pU(q,d,n).$0()
else if(o){if((c&1)!==0)new A.pT(q,j).$0()}else if((c&2)!==0)new A.pS(d,q).$0()
if(g!=null)$.aj=g
c=q.c
if(c instanceof A.ap){p=q.a.$ti
p=p.i("bI<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cd(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.pP(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cd(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Bl(a,b){var s
if(t.ng.b(a))return b.ix(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.aF(a,"onError",u.c))},
Be(){var s,r
for(s=$.fk;s!=null;s=$.fk){$.i2=null
r=s.b
$.fk=r
if(r==null)$.i1=null
s.a.$0()}},
Bw(){$.tZ=!0
try{A.Be()}finally{$.i2=null
$.tZ=!1
if($.fk!=null)$.us().$1(A.wK())}},
wE(a){var s=new A.kc(a),r=$.i1
if(r==null){$.fk=$.i1=s
if(!$.tZ)$.us().$1(A.wK())}else $.i1=r.b=s},
Br(a){var s,r,q,p=$.fk
if(p==null){A.wE(a)
$.i2=$.i1
return}s=new A.kc(a)
r=$.i2
if(r==null){s.b=p
$.fk=$.i2=s}else{q=r.b
s.b=q
$.i2=r.b=s
if(q==null)$.i1=s}},
CT(a,b){A.dE(a,"stream",t.K)
return new A.kJ(b.i("kJ<0>"))},
ze(a,b){var s=$.aj
if(s===B.v)return A.tw(a,t.M.a(b))
return A.tw(a,t.M.a(s.fO(b)))},
u5(a,b){A.Br(new A.rh(a,b))},
wz(a,b,c,d,e){var s,r=$.aj
if(r===c)return d.$0()
$.aj=c
s=r
try{r=d.$0()
return r}finally{$.aj=s}},
Bp(a,b,c,d,e,f,g){var s,r=$.aj
if(r===c)return d.$1(e)
$.aj=c
s=r
try{r=d.$1(e)
return r}finally{$.aj=s}},
Bo(a,b,c,d,e,f,g,h,i){var s,r=$.aj
if(r===c)return d.$2(e,f)
$.aj=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aj=s}},
l0(a,b,c,d){t.M.a(d)
if(B.v!==c){d=c.fO(d)
d=d}A.wE(d)},
pG:function pG(a){this.a=a},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(a){this.a=a},
pI:function pI(a){this.a=a},
q9:function q9(){},
qa:function qa(a,b){this.a=a
this.b=b},
kb:function kb(a,b){this.a=a
this.b=!1
this.$ti=b},
qo:function qo(a){this.a=a},
qp:function qp(a){this.a=a},
rr:function rr(a){this.a=a},
bS:function bS(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cC:function cC(a,b){this.a=a
this.$ti=b},
aP:function aP(a,b){this.a=a
this.b=b},
mw:function mw(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
my:function my(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kf:function kf(){},
hk:function hk(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b,c,d,e){var _=this
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
pM:function pM(a,b){this.a=a
this.b=b},
pR:function pR(a,b){this.a=a
this.b=b},
pQ:function pQ(a,b){this.a=a
this.b=b},
pO:function pO(a,b){this.a=a
this.b=b},
pN:function pN(a,b){this.a=a
this.b=b},
pU:function pU(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a,b){this.a=a
this.b=b},
pW:function pW(a){this.a=a},
pT:function pT(a,b){this.a=a
this.b=b},
pS:function pS(a,b){this.a=a
this.b=b},
kc:function kc(a){this.a=a
this.b=null},
kJ:function kJ(a){this.$ti=a},
hR:function hR(){},
kB:function kB(){},
q7:function q7(a,b){this.a=a
this.b=b},
rh:function rh(a,b){this.a=a
this.b=b},
vv(a,b){var s=a[b]
return s===a?null:s},
tF(a,b,c){if(c==null)a[b]=a
else a[b]=c},
tE(){var s=Object.create(null)
A.tF(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
uY(a,b){return new A.bZ(a.i("@<0>").E(b).i("bZ<1,2>"))},
O(a,b,c){return b.i("@<0>").E(c).i("ti<1,2>").a(A.wM(a,new A.bZ(b.i("@<0>").E(c).i("bZ<1,2>"))))},
v(a,b){return new A.bZ(a.i("@<0>").E(b).i("bZ<1,2>"))},
tj(a){return new A.c3(a.i("c3<0>"))},
ab(a){return new A.c3(a.i("c3<0>"))},
ax(a,b){return b.i("uZ<0>").a(A.C8(a,new A.c3(b.i("c3<0>"))))},
tG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
q2(a,b,c){var s=new A.el(a,b,c.i("el<0>"))
s.c=a.e
return s},
eR(a,b){var s=J.S(a.a)
if(new A.K(s,a.b,a.$ti.i("K<1>")).m())return s.gp()
return null},
aG(a,b,c){var s=A.uY(b,c)
a.al(0,new A.nE(s,b,c))
return s},
dj(a,b,c){var s=A.uY(b,c)
s.I(0,a)
return s},
jc(a,b){var s,r,q=A.tj(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.l(0,b.a(a[r]))
return q},
tk(a,b){var s=A.tj(b)
s.I(0,a)
return s},
yE(a,b){var s=t.bP
return J.uv(s.a(a),s.a(b))},
tl(a){var s,r
if(A.uk(a))return"{...}"
s=new A.b4("")
try{r={}
B.a.l($.bV,a)
s.a+="{"
r.a=!0
a.al(0,new A.nG(r,s))
s.a+="}"}finally{if(0>=$.bV.length)return A.e($.bV,-1)
$.bV.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
zW(){throw A.d(A.aK("Cannot change an unmodifiable set"))},
hr:function hr(){},
pX:function pX(a){this.a=a},
ht:function ht(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eh:function eh(a,b){this.a=a
this.$ti=b},
hs:function hs(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c3:function c3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ks:function ks(a){this.a=a
this.c=this.b=null},
el:function el(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
R:function R(){},
a0:function a0(){},
nF:function nF(a){this.a=a},
nG:function nG(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.$ti=b},
hv:function hv(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hL:function hL(){},
eU:function eU(){},
ds:function ds(a,b){this.a=a
this.$ti=b},
cV:function cV(){},
hE:function hE(){},
kM:function kM(){},
he:function he(a,b){this.a=a
this.$ti=b},
f9:function f9(){},
hM:function hM(){},
Bg(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ag(r)
q=A.a1(String(s),null,null)
throw A.d(q)}q=A.qM(p)
return q},
qM(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.kq(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.qM(a[s])
return a},
Ac(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.xk()
else s=new Uint8Array(o)
for(r=J.aE(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Ab(a,b,c,d){var s=a?$.xj():$.xi()
if(s==null)return null
if(0===c&&d===b.length)return A.vN(s,b)
return A.vN(s,b.subarray(c,d))},
vN(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
ux(a,b,c,d,e,f){if(B.c.a0(f,4)!==0)throw A.d(A.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a1("Invalid base64 padding, more than two '=' characters",a,b))},
uV(a,b,c){return new A.fO(a,b)},
AA(a){return a.B()},
zD(a,b){return new A.q_(a,[],A.C_())},
zE(a,b,c){var s,r=new A.b4(""),q=A.zD(r,b)
q.cL(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ad(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
kq:function kq(a,b){this.a=a
this.b=b
this.c=null},
pZ:function pZ(a){this.a=a},
kr:function kr(a){this.a=a},
qf:function qf(){},
qe:function qe(){},
ih:function ih(){},
lO:function lO(){},
dM:function dM(){},
iw:function iw(){},
iG:function iG(){},
fO:function fO(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.b=b},
j9:function j9(){},
nx:function nx(a){this.b=a},
nw:function nw(a){this.a=a},
q0:function q0(){},
q1:function q1(a,b){this.a=a
this.b=b},
q_:function q_(a,b,c){this.c=a
this.a=b
this.b=c},
k_:function k_(){},
pp:function pp(a){this.a=a},
qd:function qd(a){this.a=a
this.b=16
this.c=0},
wS(a){var s=A.jz(a,null)
if(s!=null)return s
throw A.d(A.a1(a,null,null))},
yf(a,b){a=A.au(a,new Error())
if(a==null)a=A.ff(a)
a.stack=b.n(0)
throw a},
cp(a,b,c,d){var s,r=c?J.uQ(a,d):J.uP(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aH(a,b,c){var s,r=A.f([],c.i("t<0>"))
for(s=J.S(a);s.m();)B.a.l(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.f(a.slice(0),b.i("t<0>"))
s=A.f([],b.i("t<0>"))
for(r=J.S(a);r.m();)B.a.l(s,r.gp())
return s},
ar(a,b){var s=A.aH(a,!1,b)
s.$flags=3
return s},
vd(a,b,c){var s,r
A.jC(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aI(c,b,null,"end",null))
if(s===0)return""}r=A.zc(a,b,c)
return r},
zc(a,b,c){var s=a.length
if(b>=s)return""
return A.yX(a,b,c==null||c>s?s:c)},
yY(a){return new A.j7(a,A.yB(a,!1,!0,!1,!1,""))},
vc(a,b,c){var s=J.S(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
jZ(){var s,r,q=A.yM()
if(q==null)throw A.d(A.aK("'Uri.base' is not supported"))
s=$.vj
if(s!=null&&q===$.vi)return s
r=A.zk(q)
$.vj=r
$.vi=q
return r},
za(){return A.cH(new Error())},
xW(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
uD(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iy(a){if(a>=10)return""+a
return"0"+a},
ye(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.aF(b,"name","No enum value with that name"))},
iH(a){if(typeof a=="number"||A.bT(a)||a==null)return J.ey(a)
if(typeof a=="string")return JSON.stringify(a)
return A.v2(a)},
yg(a,b){A.dE(a,"error",t.K)
A.dE(b,"stackTrace",t.l)
A.yf(a,b)},
id(a){return new A.ic(a)},
w(a,b){return new A.c8(!1,null,b,a)},
aF(a,b,c){return new A.c8(!0,a,b,c)},
v4(a){var s=null
return new A.eX(s,s,!1,s,s,a)},
v5(a,b){return new A.eX(null,null,!0,a,b,"Value not in range")},
aI(a,b,c,d,e){return new A.eX(b,c,!0,a,d,"Invalid value")},
h_(a,b,c){if(0>a||a>c)throw A.d(A.aI(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aI(b,a,c,"end",null))
return b}return c},
jC(a,b){if(a<0)throw A.d(A.aI(a,0,null,b,null))
return a},
ng(a,b,c,d){return new A.j_(b,!0,a,d,"Index out of range")},
aK(a){return new A.hf(a)},
vg(a){return new A.jU(a)},
l(a){return new A.f0(a)},
av(a){return new A.ir(a)},
eM(a){return new A.pL(a)},
a1(a,b,c){return new A.G(a,b,c)},
yw(a,b,c){var s,r
if(A.uk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.a.l($.bV,a)
try{A.B7(a,s)}finally{if(0>=$.bV.length)return A.e($.bV,-1)
$.bV.pop()}r=A.vc(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
tf(a,b,c){var s,r
if(A.uk(a))return b+"..."+c
s=new A.b4(b)
B.a.l($.bV,a)
try{r=s
r.a=A.vc(r.a,a,", ")}finally{if(0>=$.bV.length)return A.e($.bV,-1)
$.bV.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
B7(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.q(l.gp())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.l(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
ce(a,b,c,d,e,f){var s
if(B.f===c){s=J.aq(a)
b=J.aq(b)
return A.hc(A.aA(A.aA($.fs(),s),b))}if(B.f===d){s=J.aq(a)
b=J.aq(b)
c=J.aq(c)
return A.hc(A.aA(A.aA(A.aA($.fs(),s),b),c))}if(B.f===e){s=J.aq(a)
b=J.aq(b)
c=J.aq(c)
d=J.aq(d)
return A.hc(A.aA(A.aA(A.aA(A.aA($.fs(),s),b),c),d))}if(B.f===f){s=J.aq(a)
b=J.aq(b)
c=J.aq(c)
d=J.aq(d)
e=J.aq(e)
return A.hc(A.aA(A.aA(A.aA(A.aA(A.aA($.fs(),s),b),c),d),e))}s=J.aq(a)
b=J.aq(b)
c=J.aq(c)
d=J.aq(d)
e=J.aq(e)
f=J.aq(f)
f=A.hc(A.aA(A.aA(A.aA(A.aA(A.aA(A.aA($.fs(),s),b),c),d),e),f))
return f},
yK(a){var s,r,q=$.fs()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.aA(q,J.aq(a[r]))
return A.hc(q)},
tu(a,b){return new A.he(A.tk(a,b),b.i("he<0>"))},
zk(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.vh(a4<a4?B.b.D(a5,0,a4):a5,5,a3).giF()
else if(s===32)return A.vh(B.b.D(a5,5,a4),0,a3).giF()}r=A.cp(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.wD(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.wD(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.a4(a5,"\\",n))if(p>0)h=B.b.a4(a5,"\\",p-1)||B.b.a4(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.a4(a5,"..",n)))h=m>n+2&&B.b.a4(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.a4(a5,"file",0)){if(p<=0){if(!B.b.a4(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.D(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bx(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a4(a5,"http",0)){if(i&&o+3===n&&B.b.a4(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bx(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.a4(a5,"https",0)){if(i&&o+4===n&&B.b.a4(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bx(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.kE(a4<a5.length?B.b.D(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.A5(a5,0,q)
else{if(q===0)A.fa(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.A6(a5,c,p-1):""
a=A.A1(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jz(B.b.D(a5,i,n),a3)
d=A.A3(a0==null?A.k(A.a1("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.A2(a5,n,m,a3,j,a!=null)
a2=m<l?A.A4(a5,m+1,l,a3):a3
return A.zX(j,b,a,d,a1,a2,l<a4?A.A0(a5,l+1,a4):a3)},
vl(a){var s=t.N
return B.a.bR(A.f(a.split("&"),t.s),A.v(s,s),new A.po(B.bx),t.G)},
jY(a,b,c){throw A.d(A.a1("Illegal IPv4 address, "+a,b,c))},
zh(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.jY("each part must be in the range 0..255",a,r)}A.jY("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.jY(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bp(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.jY(j,a,q)
p=l}A.jY("IPv4 address should contain exactly 4 parts",a,q)},
zi(a,b,c){var s
if(b===c)throw A.d(A.a1("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.zj(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.vk(a,b,c)
return!0},
zj(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
vk(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.pn(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.zh(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.di(l,8)
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
B.cd.j1(s,a0,16,s,a)
B.cd.mc(s,a,a0,0)}}return s},
zX(a,b,c,d,e,f,g){return new A.hN(a,b,c,d,e,f,g)},
vH(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fa(a,b,c){throw A.d(A.a1(c,a,b))},
A3(a,b){var s=A.vH(b)
if(a===s)return null
return a},
A1(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.fa(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.zZ(a,q,r)
if(o<r){n=o+1
p=A.vM(a,B.b.a4(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.zi(a,q,o)
l=B.b.D(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.b.cA(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.vM(a,B.b.a4(a,"25",n)?o+3:n,c,"%25")}else p=""
A.vk(a,b,o)
return"["+B.b.D(a,b,o)+p+"]"}}return A.A8(a,b,c)},
zZ(a,b,c){var s=B.b.cA(a,"%",b)
return s>=b&&s<c?s:c},
vM(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.b4(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.tK(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.b4("")
l=h.a+=B.b.D(a,q,r)
if(m)n=B.b.D(a,r,r+3)
else if(n==="%")A.fa(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.b4("")
if(q<r){h.a+=B.b.D(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.D(a,q,r)
if(h==null){h=new A.b4("")
m=h}else m=h
m.a+=i
l=A.tJ(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.D(a,b,c)
if(q<c){i=B.b.D(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
A8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.tK(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.b4("")
k=B.b.D(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.D(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.b4("")
if(q<r){p.a+=B.b.D(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fa(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.D(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.b4("")
l=p}else l=p
l.a+=k
j=A.tJ(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.D(a,b,c)
if(q<c){k=B.b.D(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
A5(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.vJ(a.charCodeAt(b)))A.fa(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fa(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.D(a,b,c)
return A.zY(q?a.toLowerCase():a)},
zY(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
A6(a,b,c){return A.hO(a,b,c,16,!1,!1)},
A2(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.hO(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.R(q,"/"))q="/"+q
return A.A7(q,e,f)},
A7(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.R(a,"/")&&!B.b.R(a,"\\"))return A.A9(a,!s||c)
return A.Aa(a)},
A4(a,b,c,d){return A.hO(a,b,c,256,!0,!1)},
A0(a,b,c){return A.hO(a,b,c,256,!0,!1)},
tK(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.rz(r)
o=A.rz(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ao(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.D(a,b,b+3).toUpperCase()
return null},
tJ(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.kV(a,6*p)&63|q
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
o+=3}}return A.vd(s,0,null)},
hO(a,b,c,d,e,f){var s=A.vL(a,b,c,d,e,f)
return s==null?B.b.D(a,b,c):s},
vL(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.tK(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fa(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.tJ(n)}if(o==null){o=new A.b4("")
k=o}else k=o
k.a=(k.a+=B.b.D(a,p,q))+l
if(typeof m!=="number")return A.l4(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.D(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
vK(a){if(B.b.R(a,"."))return!0
return B.b.cz(a,"/.")!==-1},
Aa(a){var s,r,q,p,o,n,m
if(!A.vK(a))return a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.aP(s,"/")},
A9(a,b){var s,r,q,p,o,n
if(!A.vK(a))return!b?A.vI(a):a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gN(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.a.k(s,0,A.vI(s[0]))}return B.a.aP(s,"/")},
vI(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.vJ(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.D(a,0,s)+"%3A"+B.b.bf(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
A_(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.w("Invalid URL encoding",null))}}return r},
tL(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.bx===d)return B.b.D(a,b,c)
else p=new A.dL(B.b.D(a,b,c))
else{p=A.f([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.w("Truncated URI",null))
B.a.l(p,A.A_(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.L.a(p)
return B.jc.lA(p)},
vJ(a){var s=a|32
return 97<=s&&s<=122},
vh(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.f([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a1(k,a,r))}}if(q<0&&r>b)throw A.d(A.a1(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gN(j)
if(p!==44||r!==n+7||!B.b.a4(a,"base64",n+1))throw A.d(A.a1("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.d3.mz(a,m,s)
else{l=A.vL(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bx(a,m,s,l)}return new A.pm(a,j,c)},
wD(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.e(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a){this.a=a},
kk:function kk(){},
ah:function ah(){},
ic:function ic(a){this.a=a},
cX:function cX(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j_:function j_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hf:function hf(a){this.a=a},
jU:function jU(a){this.a=a},
f0:function f0(a){this.a=a},
ir:function ir(a){this.a=a},
jq:function jq(){},
h9:function h9(){},
pL:function pL(a){this.a=a},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(){},
C:function C(){},
kK:function kK(){},
pa:function pa(){this.b=this.a=0},
b4:function b4(a){this.a=a},
po:function po(a){this.a=a},
pn:function pn(a){this.a=a},
hN:function hN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pm:function pm(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
kg:function kg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
nR:function nR(a){this.a=a},
U(a){var s
if(typeof a=="function")throw A.d(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.dB,a)
s[$.cI()]=a
return s},
dB(a,b,c){t.gY.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
ui(a,b,c){return c.a(a[b])},
w9(a,b){return a[b]},
ae(a,b,c,d){return d.a(a[b].apply(a,c))},
w2(a,b,c,d){return d.a(a[b](c))},
aO(a,b){var s=new A.ap($.aj,b.i("ap<0>")),r=new A.hk(s,b.i("hk<0>"))
a.then(A.fq(new A.t2(r,b),1),A.fq(new A.t3(r),1))
return s},
wk(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
d6(a){if(A.wk(a))return a
return new A.ru(new A.ht(t.mp)).$1(a)},
t2:function t2(a,b){this.a=a
this.b=b},
t3:function t3(a){this.a=a},
ru:function ru(a){this.a=a},
kp:function kp(){},
f4:function f4(){this.b=this.a=0},
of:function of(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
og:function og(){},
e5:function e5(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
lU:function lU(a,b){this.a=a
this.b=b},
lV:function lV(){this.a=null
this.d=0},
jv:function jv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.w=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.as=k
_.at=l
_.ax=m
_.ay=n
_.ch=o
_.CW=p},
eF:function eF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
iM:function iM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
mr:function mr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dU(a,b){return new A.mS(a,b)},
cU:function cU(){},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b){this.a=a
this.b=b},
mS:function mS(a,b){this.a=a
this.b=b},
Cv(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.f([],t.gf)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.hC(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.Y(f,new A.t4())
s=A.f([],t.D)
for(r=A.jO(f,0,A.dE(b,"count",t.S),t.jX),q=r.$ti,r=new A.b9(r,r.gq(0),q.i("b9<a2.E>")),q=q.i("a2.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
be:function be(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
t4:function t4(){},
jf(a,b,c,d,e,f,g,h,i){return new A.e1(c,a,g,f,e,h,i,b,!0)},
tn(a,b){var s
if(isFinite(b))s=b>1
else s=!0
if(s)throw A.d(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+b,null))},
ib:function ib(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.at=f
_.ax=g
_.cy=h
_.db=i},
cz:function cz(a,b){this.a=a
this.b=b},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
pq:function pq(){},
pr:function pr(){},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nK:function nK(){},
nL:function nL(){},
nM:function nM(){},
nU(a){var s,r=t.N,q=A.ax(["sceneColor","present"],r),p=a.a.b
if(p.u(0,"shadows"))q.I(0,A.ax(["shadowMap","sceneDepth"],r))
if(p.u(0,"ssao"))q.I(0,A.ax(["ssaoRaw","ssaoBlurred"],r))
if(p.u(0,"bloom"))q.I(0,A.ax(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.u(0,"dof"))q.I(0,A.ax(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.u(0,"grade"))q.l(0,"gradeOutput")
if(p.u(0,"ps1"))q.l(0,"ps1Output")
s=p.u(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.nT(A.tu(q,r),s)},
nT:function nT(a,b){this.a=a
this.b=b},
nV:function nV(){},
o8:function o8(a){this.b=a},
jF:function jF(){this.a=null
this.c=0
this.d=!1},
eJ:function eJ(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
aU:function aU(a,b,c,d,e,f,g,h,i,j){var _=this
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
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
e7:function e7(a,b){this.a=a
this.b=b},
mt:function mt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
yF(){return new A.jg(new A.cu(new A.nI(),A.f([],t.dz),A.f([],t.t),t.kk))},
jg:function jg(a){this.a=a},
nI:function nI(){},
wG(a){var s=4
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
case 3:s=A.k(A.aK("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
Aw(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.P[r]
if(A.wG(q.a)===b)s+=q.c}return s},
yG(a){return new A.nN(a,new A.cu(new A.nO(),A.f([],t.jk),A.f([],t.t),t.ll),A.v(t.S,t.mL))},
jW:function jW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function nO(){},
nP:function nP(){},
zd(a){var s=new A.jS(a,new A.cu(new A.ph(),A.f([],t.mQ),A.f([],t.t),t.ox),A.v(t.S,t._))
s.d=s.aV($.uq())
s.e=s.aV($.uo())
s.f=s.aV($.up())
s.r=s.aV($.un())
return s},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.f=_.e=_.d=$},
ph:function ph(){},
pj:function pj(){},
pi:function pi(){},
BS(a){var s,r,q,p,o=A.f([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
B.a.l(o,new A.dW(p,A.f([p],r)))
continue}return o},
dW:function dW(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
mn:function mn(){},
mo:function mo(a){this.a=a},
ml:function ml(a){this.a=a},
mm:function mm(a){this.a=a},
iL:function iL(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
ms:function ms(a,b){this.a=a
this.b=b
this.c=0},
to(){return!0},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
nX:function nX(){},
nY:function nY(){},
bY:function bY(a,b){this.a=a
this.b=b},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eY:function eY(a,b){this.a=a
this.b=b},
H:function H(a,b){this.a=a
this.b=b},
fy:function fy(a){this.b=a},
od:function od(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oh:function oh(){},
aT:function aT(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oj:function oj(a,b){this.a=a
this.b=b},
oo:function oo(){},
on:function on(){},
om:function om(){},
ol:function ol(a){this.a=a},
ok:function ok(a,b,c){this.a=a
this.b=b
this.c=c},
oi:function oi(a,b){this.a=a
this.b=b},
z1(a){return new A.h0(a,new A.cu(new A.oq(),A.f([],t.n_),A.f([],t.t),t.mo))},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b){this.a=a
this.b=b},
oq:function oq(){},
w6(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.AF(a,r,s,a.x.gp().a.b.a).b},
AF(a,b,c,d){var s,r,q,p,o,n=new A.r1(a),m=new A.r2(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.u(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.BW(b,k,B.aD,l,s.gn7(),new A.qN(m),new A.qO(m),new A.qP(a),new A.qU(a),new A.qV(a),new A.qW(m),new A.qX(m),s.gn9(),new A.qY(a),r.gnb(),n,s.gnd(),s.gnf(),new A.qZ(m,c),new A.r_(m),new A.r0(m),new A.qQ(m),new A.qR(m),new A.qS(a),new A.qT(m),1,i,j,512)}else{p=new A.ay("sceneColor",B.p,j,i,1,0)
n=A.f([new A.k9(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.o5)
n.push(new A.fY(b,u.l,u.a,k,p,B.aD))
q=new A.iK(n)}a.r.toString
o=q.ln(B.K,new A.oh(),!1,new A.ky())
n=o.a.b
if(n.length!==0)throw A.d(A.l("safe renderer graph is invalid: "+A.q(n)))
return new A.q8(q,o)},
AG(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a6.Q,a5=a6.x
if(a4==null||a5==null)throw A.d(A.l("renderer graph is not initialized"))
s=a7.ge8()
r=a8.a
q=A.C1(A.yj(r.c),s,-1).a
p=A.f([],t.mX)
o=A.f([],t.ao)
for(s=q.length,n=t.E,m=r.a,l=t.d,k=0;k<q.length;q.length===s||(0,A.r)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.aE)B.a.l(o,new A.az(new A.br(m.iC(i.c.a).c,h),j,l))
else B.a.l(p,new A.az(new A.bu(B.hL,i.b,i.a,h),j,n))}g=new A.km(A.BS(A.Cx(p)),A.Cw(o),r,a8.b,a8.c)
f=new A.iB(a6.a)
for(s=a4.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.r)(s),++k){e=s[k]
d=A.v(n,m)
for(l=e.gZ().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.r)(l),++c){b=l[c].a
a=a5.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
h=b.f
a0=b.a
a1=h===0?a0:a0+"#"+h
a2=a.b.h(0,a1)
if(a2==null)A.k(A.l("resource is not in candidate: "+a1))
a3=new A.eE(a2)
d.k(0,a0+"#"+h,a3)
d.iu(a0,new A.r3(a3))}e.aa(new A.il(d,f,g))}},
v9(a){return new A.oF(a,new A.lU(new A.lV(),new A.jF()),new A.ms(A.f([],t.c8),B.ew),A.f([],t.oZ),B.b0)},
r1:function r1(a){this.a=a},
r2:function r2(a,b){this.a=a
this.b=b},
r0:function r0(a){this.a=a},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
r_:function r_(a){this.a=a},
qP:function qP(a){this.a=a},
qR:function qR(a){this.a=a},
qQ:function qQ(a){this.a=a},
qZ:function qZ(a,b){this.a=a
this.b=b},
qN:function qN(a){this.a=a},
qO:function qO(a){this.a=a},
qW:function qW(a){this.a=a},
qX:function qX(a){this.a=a},
qY:function qY(a){this.a=a},
qT:function qT(a){this.a=a},
qS:function qS(a){this.a=a},
r3:function r3(a){this.a=a},
q8:function q8(a,b){this.a=a
this.b=b},
ky:function ky(){},
km:function km(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oz:function oz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
oF:function oF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
oG:function oG(){},
Cx(a){var s,r,q=A.N(a,t.E)
B.a.Y(q,new A.t8())
s=A.M(q)
r=s.i("Q<1,bL>")
s=A.N(new A.Q(q,s.i("bL(1)").a(new A.t9()),r),r.i("a2.E"))
s.$flags=1
return s},
Cw(a){var s,r,q=A.N(a,t.d)
B.a.Y(q,new A.t6())
s=A.M(q)
r=s.i("Q<1,bL>")
s=A.N(new A.Q(q,s.i("bL(1)").a(new A.t7()),r),r.i("a2.E"))
s.$flags=1
return s},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b){this.a=a
this.b=b},
az:function az(a,b,c){this.a=a
this.b=b
this.$ti=c},
t8:function t8(){},
t9:function t9(){},
t6:function t6(){},
t7:function t7(){},
C1(a,b,c){var s,r,q,p,o,n,m,l=A.f([],t.bH)
for(s=b.$ti,r=new A.bS(b.a(),s.i("bS<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.d(A.w("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.nm(n)===B.bJ){++p
continue}B.a.l(l,o)}return new A.m3(l)},
m3:function m3(a){this.a=a},
bq(a){var s,r,q,p,o,n,m,l,k
for(s=J.S(a),r=B.jf,q=B.jg,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.D(m,k,Math.min(r.c,o))
q=new A.D(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.w("Aabb.fromPoints requires at least one point",null))
return new A.i9(r,q)},
i9:function i9(a,b){this.a=a
this.b=b},
yj(a){var s,r,q,p,o,n,m=a.a,l=new A.mv(),k=m.length
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
return new A.mu(A.f([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
e3:function e3(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
mu:function mu(a){this.a=a},
mv:function mv(){},
v_(a){if(a.length!==16)throw A.d(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.cS(new Float32Array(A.Y(a)))},
tm(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cS(q)},
v0(a,b,c){var s=b.ga6(),r=s.b6(c).ga6(),q=r.b6(s),p=new Float32Array(16)
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
p[12]=-r.bM(a)
p[13]=-q.bM(a)
p[14]=s.bM(a)
p[15]=1
return new A.cS(p)},
cS:function cS(a){this.a=a},
nH:function nH(){},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jT:function jT(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
kd:function kd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ik:function ik(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ke:function ke(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
iA:function iA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
kh:function kh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ho:function ho(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ki:function ki(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iE:function iE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
kj:function kj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iU:function iU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
ko:function ko(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a){this.b=a},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
bb(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.ay(a.a,a.b,b,c,s,r)},
tp:function tp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fY:function fY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
kz:function kz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jA:function jA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kA:function kA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vb(a){var s=a.c,r=Math.abs(s.a)<0.99?B.je:B.W,q=A.v0(a.b,s,r)
return new A.ea(A.tm(1,a.f,B.d.K(a.w*2,0.1,3),0.05).a1(0,q))},
ea:function ea(a){this.a=a},
jI:function jI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kC:function kC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
BW(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.u(0,"shadows"))throw A.d(A.aF(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.u(0,"ssao")
r=b6.u(0,"bloom")
q=b6.u(0,"dof")
p=b6.u(0,"grade")
o=b6.u(0,"ps1")
n=b6.u(0,"vhs")
b6=(e4+1)/2|0
m=(e3+1)/2|0
l=A.bb(B.b2,e4,e3,e2,a8)
k=A.bb(B.b2.ij(),e4,e3,a8,a8)
A.bb(B.it,e4,e3,a8,a8)
j=A.bb(B.iq,e4,e3,a8,a8)
i=A.bb(B.ik,e5,e5,a8,a8)
h=A.bb(B.il,b6,m,a8,a8)
g=A.bb(B.im,b6,m,a8,a8)
f=A.bb(B.ir,b6,m,a8,a8)
e=A.bb(B.is,b6,m,a8,a8)
d=$.x5()
c=e2>1
b=A.bb(d,e4,e3,a8,c?2:1)
d=A.bb(B.ih,b6,m,a8,a8)
a=A.bb(B.ii,b6,m,a8,a8)
a0=A.bb(B.ij,e4,e3,a8,a8)
a1=A.bb(B.io,e4,e3,a8,a8)
a2=A.bb(B.iu,e4,e3,a8,a8)
a3=A.bb(B.ip,e4,e3,a8,a8)
a4=c?new A.ji(b8,l,k):a8
b5.a=null
a5=A.vb(B.iT)
a6=t.o5
a7=A.f([],a6)
k=c?k:l
if(r){B.a.I(a7,A.f([new A.fw(b7,a9,b0,b8,b1,b1,B.cJ,!0,k,f,d5,b6,m),new A.fw(b7,a9,b0,b8,b2,b2,B.jR,!1,f,e,c2,b6,m),new A.ik(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.I(a7,A.f([new A.fB(b7,a9,b0,b8,b3,b3,B.cK,k,d,d5,b6,m),new A.fB(b7,a9,b0,b8,b4,b4,B.jS,d,a,c7,b6,m),new A.iE(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d5,c8,d6,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.iU(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.jA(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.k1(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e1,e0,k,a3))
k=a3}j=A.f([new A.iA(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d2,d1,c1,j)],a6)
if(s)j.push(new A.jM(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d6,c4,h))
if(s)j.push(new A.jL(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,d9,d6,c4,b6,m,h,g))
j.push(new A.jI(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d2,d1,c1,c5,new A.rs(b5),i))
j.push(new A.jJ(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(uNormalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d2,d1,c1,d3,d4,c9,d7,new A.rt(b5,a5),c5,c6,d8,s,e4,e3,e5,e5,i,g,l))
if(a4!=null)j.push(a4)
B.a.I(j,a7)
j.push(new A.fY(b7,a9,u.a,b8,k,b9))
return new A.iK(j)},
rs:function rs(a){this.a=a},
rt:function rt(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
_.dx=a2},
kD:function kD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.ch=q},
jM:function jM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
kH:function kH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jL:function jL(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
kG:function kG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
k1:function k1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kO:function kO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lS:function lS(){},
jH(a,b){return new A.h8(a,b)},
iQ:function iQ(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dT:function dT(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fG:function fG(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
jw:function jw(a,b){this.a=a
this.b=b},
mG:function mG(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
mH:function mH(){},
mI:function mI(){},
f7:function f7(a,b){this.a=a
this.b=b},
dx:function dx(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
uF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eK(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
ii:function ii(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aW:function aW(a,b){this.a=a
this.b=b},
pC:function pC(){this.a=null},
zp(a){var s=new A.k8(a,B.h,new A.pC())
s.jD(a)
return s},
bQ(a,b){var s,r
if(a.b!==B.h)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
zv(a,b){var s
if(a.b!==B.h)A.k(A.l(u.k))
switch(b){case 1:a.a.drawBuffers(A.f([A.a(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
zu(a,b,c){var s,r,q,p
if(a.b!==B.h)A.k(A.l(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.l("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
zt(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
zs(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
vo(a,b){var s
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
zq(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b5(a,b){var s,r,q,p
if(a.b!==B.h)A.k(A.l(u.k))
s=a.f
r=s.lW(b)
if(r.a===0)return
if(r.u(0,B.b7)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.u(0,B.b8))a.a.depthFunc(A.zt(a,b.b))
if(r.u(0,B.b9))a.a.depthMask(b.c)
if(r.u(0,B.bd)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.u(0,B.be))a.a.cullFace(A.zs(a,b.x))
if(r.u(0,B.cB)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.u(0,B.ba)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.u(0,B.bb))a.a.blendFunc(A.vo(a,b.e),A.vo(a,b.f))
if(r.u(0,B.bc))a.a.blendEquation(A.zq(a,b.r))
if(r.u(0,B.cz))a.a.colorMask(!0,!0,!0,!0)
if(r.u(0,B.cA)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
zr(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
d0(a,b,c,d,e,f){var s
if(a.b!==B.h)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.zr(a,b))},
c2(a,b){var s
if(a.b!==B.h)A.k(A.l(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
u(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.d(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.d2(c.b))
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
A.ae(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniform1i(q,A.a(c.b))
break}},
bg(a,b){if(a.b!==B.h)A.k(A.l(u.k))
a.a.bindVertexArray(A.b(b.a))},
aw(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.hQ){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.hP){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
cg(a,b,c){if(a.b!==B.h)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
ty(a,b,c,d){if(a.b!==B.h)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
tz(a,b,c){var s
if(a.b!==B.h)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
tA(a,b,c,d){var s
if(a.b!==B.h)A.k(A.l(u.k))
s=v.G
A.ae(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
zw(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
vr(a,b){var s,r,q,p
if(a.b!==B.h)A.k(A.l(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.d(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.bK?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.zw(a,b.b))
return new A.dz(r)},
vp(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
vq(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
tB(a,b){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.k(A.l(u.k))
s=a.a
r=A.i(s.createTexture())
if(r==null)throw A.d(A.l("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.a(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.ae(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.ae(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.vp(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.vp(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.vq(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.vq(a,p))
return new A.dz(new A.hQ(r,l,k,q,!1))},
tC(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.k(A.l(u.k))
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
if(r)A.ae(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.ae(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
zy(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.k(A.l(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.i(r.createFramebuffer())
if(q==null)throw A.d(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aG
if(n&&!a1.e)throw A.d(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.bM||o===B.eG
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.f([A.a(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.a(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.a(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.ae(r,c,[A.a(p.WebGL2RenderingContext.RENDERBUFFER),o,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.a(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.ae(r,c,[A.a(p.WebGL2RenderingContext.RENDERBUFFER),o,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.f([A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.i(r.createTexture())
r.bindTexture(A.a(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.ae(r,b,[A.a(p.WebGL2RenderingContext.TEXTURE_2D),1,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
A.ae(r,a,[A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.i(r.createTexture())
r.bindTexture(A.a(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.ae(r,b,[A.a(p.WebGL2RenderingContext.TEXTURE_2D),1,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
A.ae(r,a,[A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.f([A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.a(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.ae(r,c,[A.a(p.WebGL2RenderingContext.RENDERBUFFER),o,A.a(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.i(r.createTexture())
r.bindTexture(A.a(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.ae(r,b,[A.a(p.WebGL2RenderingContext.TEXTURE_2D),1,A.a(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(p.WebGL2RenderingContext.NEAREST))
A.ae(r,a,[A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.a(r.checkFramebufferStatus(A.a(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.a(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.tD(a0,q,l,k,f,e,j,i)
throw A.d(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dz(new A.hP(q,l,k,f,e,j,i,s,a1.b,a1.c))},
tD(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cB(a){var s
if(a.b!==B.h)A.k(A.l(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.d(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dz(s)},
vs(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.d(A.jH(b===A.ui(A.w9(A.x0(),r),q,t.S)?B.cu:B.cv,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a6(A.d6(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aD(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.jH(b===A.ui(A.w9(A.x0(),r),q,t.S)?B.cu:B.cv,s))}return o},
zx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.k(A.l(u.k))
q=v.G
s=A.vs(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.vs(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.iO)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a6(A.d6(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aD(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.jH(B.cw,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.jH(B.cx,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.jH(B.cx,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dz(n)},
dz:function dz(a){this.a=a},
hQ:function hQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hP:function hP(a,b,c,d,e,f,g,h,i,j){var _=this
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
k8:function k8(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
pA:function pA(a){this.a=a},
pB:function pB(a){this.a=a},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lA(a,a0){var s=0,r=A.bm(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$lA=A.bo(function(a1,a2){if(a1===1)return A.bi(a2,r)
for(;;)switch(s){case 0:p=A.b(new v.G.AudioContext())
o=t.m
n=A.v(t.N,o)
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
b=new A.ie(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.by,A.v(o,t.h6))
b.jl(p,a0)
p=A.p(a).i("T<1,2>")
s=3
return A.ai(A.mx(A.jd(new A.T(a,p),p.i("bI<al>(o.E)").a(new A.lB(b)),p.i("o.E"),t.mj),t.c),$async$lA)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.kk():n
c.buffer=p
q=b
s=1
break
case 1:return A.bj(q,r)}})
return A.bk($async$lA,r)},
ie:function ie(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
lB:function lB(a){this.a=a},
lD:function lD(a,b){this.a=a
this.b=b},
lC:function lC(a,b){this.a=a
this.b=b},
lE:function lE(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xH(a,b,c,d,e,f,g){var s=new A.lr(c,f,b,g,new A.c(d.a,d.b,d.c),e,a)
s.jn(a,b,c,d,0,e,f,g)
return s},
xD(a,b){var s=new A.la(b)
s.jk(a,b)
return s},
xG(a){var s,r,q,p,o,n=t.z
n=A.v(n,n)
for(s=new A.T(a,A.p(a).i("T<1,2>")).gt(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aH(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.ln(A.bW(n,r,t.a))
n.jm(a)
return n},
Bv(a,b){var s,r,q,p=b>>>0
for(s=new A.dL(a),r=t.gS,s=new A.b9(s,s.gq(0),r.i("b9<R.E>")),r=r.i("R.E");s.m();){q=s.d
p=A.wQ(p,q==null?r.a(q):q)}return p&2147483647},
ig:function ig(a,b){this.a=a
this.b=b},
lr:function lr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ls:function ls(){},
la:function la(a){this.a=a},
lb:function lb(){},
fv:function fv(){},
lc:function lc(){},
ln:function ln(a){this.a=a},
lp:function lp(){},
lq:function lq(){},
lo:function lo(){},
td:function td(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e},
lz:function lz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lt:function lt(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(a){this.a=a},
lv:function lv(){},
hj:function hj(a,b){this.a=a
this.b=b},
lR:function lR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
mq:function mq(a){this.a=a},
jQ:function jQ(a,b,c,d,e,f,g,h,i,j){var _=this
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
mE:function mE(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
mF:function mF(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=0
this.$ti=b},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1
_.w=!0
_.x=d},
je:function je(a){this.a=a},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nJ:function nJ(a,b){this.a=a
this.b=b},
ha(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bp(a)
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
cx:function cx(a){this.a=a
this.b=0},
op:function op(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
oy:function oy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
z2(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.v7(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.j4(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.kw(new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0))
r=t.S
q=A.cp(800,0,!1,r)
p=new Float32Array(8064)
o=J.j4(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.ku(new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0),0,1,0,0,0)
n=A.cp(4000,0,!1,r)
m=new A.c(0.3,0.7,-0.5).ga6()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.or(a,new A.mE(a,A.v(t.m,r)),b,c,A.ab(t.N),j,i,h,g,q,p,A.v(r,t.hX),o,n,m,B.fz,new A.c(0,0,0),new A.c(0,0,1),new A.c(0,1,0),new A.c(1,0,0),new A.je(l),a,A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k))
k.jw(a,b,c)
return k},
or:function or(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aF=a
_.aN=b
_.b9=c
_.ba=d
_.dW=_.hN=1
_.e5=_.e4=_.i4=_.i3=_.i2=_.i1=_.i0=_.i_=_.e3=_.e2=_.e1=_.e0=_.e_=_.dZ=_.dY=_.hZ=_.hY=_.hX=_.dX=_.hW=_.hV=_.hU=_.hT=_.hS=_.hR=_.hQ=_.hP=_.hO=_.aj=$
_.co=null
_.fU=e
_.hk=_.hj=_.hi=_.hh=_.hg=_.hf=_.he=_.hd=_.hc=_.hb=_.ha=_.h9=_.h8=_.h7=_.h6=_.h5=_.h4=_.h3=_.h2=_.h1=_.h0=_.h_=_.fZ=_.fY=_.fX=_.fW=_.fV=_.cp=$
_.cq=0
_.dF=_.dE=_.dD=_.dC=_.dB=_.dA=_.dz=$
_.cu=_.ct=_.cs=_.cr=_.bN=_.b8=null
_.bO=$
_.hn=_.hm=_.hl=!1
_.m5=1
_.dG=f
_.dH=g
_.m6=h
_.ho=i
_.cv=0
_.hp=j
_.m7=k
_.dI=0
_.dJ=l
_.m8=1
_.dK=!1
_.bP=0
_.dL=m
_.bQ=0
_.hq=n
_.hr=o
_.hu=_.ht=_.hs=1
_.hv=0.4
_.dM=p
_.hw=q
_.dN=r
_.dO=s
_.dP=a0
_.hx=_.dT=_.dS=_.dR=_.dQ=0
_.hy=null
_.hz=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.hI=_.dV=_.dU=_.hH=_.hG=_.mb=_.ma=_.m9=_.hF=_.hE=_.hD=_.hC=_.hB=_.hA=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.hJ=a7
_.hK=a8
_.hL=a9
_.hM=b0},
wn(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.ai(0,c).b6(f.ai(0,c)).ga6(),r=A.rm(g)
return A.wu(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
i6(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bp(a)
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
wu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.i6(a,A.i6(a,A.i6(a,A.i6(a,A.i6(a,A.i6(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
rm(a){return new A.ad((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
AP(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aO(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a5(),i=A.a5(),h=A.a5()
switch(B.c.a0(o,6)){case 0:j.b=c
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
h.b=l}s=j.df()
if(typeof s!=="number")return s.a1()
s=B.d.aJ(s*255)
r=i.df()
if(typeof r!=="number")return r.a1()
r=B.d.aJ(r*255)
q=h.df()
if(typeof q!=="number")return q.a1()
return new A.ad(s,r,B.d.aJ(q*255))},
hq:function hq(){},
kI:function kI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
kw:function kw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ku:function ku(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
os:function os(){},
ot:function ot(a){this.a=a},
ou:function ou(a){this.a=a},
pE:function pE(){},
p5:function p5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
k0(a,b,c){return new A.c(a,b,c)},
vm(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.c(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
c:function c(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a){this.a=a},
y_(a,b,c){var s=new A.iF(a,c,null,b)
s.jq(a,null,null,b,c)
return s},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
yc(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.eR(new A.P(B.fR,t.gl.a(new A.mh(a)),t.ns),t.no)
return s==null?null:new A.eL(s)},
yb(a){if(a.a!==21)return null
if(a.e)return B.du
if(!a.d&&a.b>=0.6&&a.c>=3)return B.dv
return B.dt},
bX:function bX(a,b){this.a=a
this.b=b},
me:function me(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eL:function eL(a){this.a=a},
mh:function mh(a){this.a=a},
yL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.B(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.jt(s,new A.c(o,n,m),q,p,l,j)
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
jt:function jt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Bx(a){var s,r,q,p=A.v(t.N,t.z)
for(s=a.gL(),s=s.gt(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.d(B.dI)
p.k(0,q,r.b)}return p},
kR(a){var s,r,q,p,o,n=a.gT().by(0)
B.a.X(n)
s=t.z
r=A.v(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.k(0,o,A.w4(a.h(0,o)))}return A.bW(r,t.N,s)},
w4(a){var s
if(t.f.b(a))return A.kR(A.Bx(a))
if(t.j.b(a)){s=t.z
return A.ar(J.ex(a,A.Cs(),s),s)}if(a==null||A.bT(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.eh)
return a}throw A.d(A.a1("presentation snapshot contains unsupported value "+J.ew(a).n(0),null,null))},
o9:function o9(a){this.a=a},
v8(a,b,c){var s=A.tQ(b),r=A.tQ(a)
if(c!==2)A.k(A.aF(c,"version","unsupported save version"))
return new A.eZ(c,s,r)},
tQ(a){var s,r,q,p,o=A.p(a).i("a8<1>"),n=A.N(new A.a8(a,o),o.i("o.E"))
B.a.X(n)
o=t.z
s=A.v(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.k(0,p,A.w3(a.h(0,p)))}return A.bW(s,t.N,o)},
w3(a){var s,r,q,p
if(t.f.b(a)){s=A.v(t.N,t.z)
for(r=a.gL(),r=r.gt(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.d(B.e7)
s.k(0,p,q.b)}return A.tQ(s)}if(t.j.b(a)){r=t.z
return A.ar(J.ex(a,A.Cu(),r),r)}if(a==null||A.bT(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.ei)
return a}throw A.d(A.a1("save contains unsupported value "+J.ew(a).n(0),null,null))},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
oE:function oE(){},
e8:function e8(a,b){this.a=a
this.b=b},
uI(a,b,c,d,e,f,g){return new A.mA(a,b,c,d,e,f,g,A.f([],t.mc),A.f([],t.ag))},
uJ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aN(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.d(B.e6)
r=e.h(0,"runSeed")
q=A.aN(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aN(p)||p<1||typeof o!="number")throw A.d(B.en)
if(!isFinite(480))throw A.d(A.aF(480,"daySeconds","must be finite and > 0"))
n=new A.iO(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.a1("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.yC(a3,A.aG(a,s,m))
k=A.xX(l,A.aG(b,s,m),n)
j=A.uL(d)
A.yq(A.aG(a0,s,m)).lg(j)
m=A.aG(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bT(f))A.k(B.dP)
return A.uI(d,q,j,n,l,k,new A.iD(i,h,g,f))},
AE(a){var s
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
dS:function dS(a,b){this.a=a
this.b=b},
iN:function iN(){},
mB:function mB(a,b){this.a=a
this.b=b},
mA:function mA(a,b,c,d,e,f,g,h,i){var _=this
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
mC:function mC(a){this.a=a},
mD:function mD(){},
xJ(a){var s,r,q,p,o,n,m="modelScale",l=A.kY(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.aC(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.dZ)
s=A.dD(l,"houseId")
r=A.dD(l,"sourceRef")
q=J.ex(A.kV(l,"rooms"),new A.lG(k),t.fS)
q=A.N(q,q.$ti.i("a2.E"))
q.$flags=1
p=J.ex(A.kV(l,"portals"),new A.lH(k),t.gE)
p=A.N(p,p.$ti.i("a2.E"))
p.$flags=1
o=J.ex(A.kV(l,"stairs"),new A.lI(),t.d2)
o=A.N(o,o.$ti.i("a2.E"))
o.$flags=1
n=J.ex(A.kV(l,"exteriorCells"),new A.lJ(),t.N)
n=A.N(n,n.$ti.i("a2.E"))
n.$flags=1
return new A.lF(s,r,q,p,o)},
xK(a,b){var s=A.kY(a,"room"),r=A.dD(s,"id"),q=A.wC(s.h(0,"origin"),"origin",b),p=A.wC(s.h(0,"size"),"size",b),o=J.ex(A.kV(s,"windows"),new A.lL(b),t.lJ)
o=A.N(o,o.$ti.i("a2.E"))
o.$flags=1
return new A.eA(r,q,p,o)},
kY(a,b){return t.P.b(a)?a:A.i0(b+" is not an object")},
kV(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.i0(b+" is not a list")},
dD(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.i0(b+" is not a string")},
i3(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.i0(b+" is not finite")},
BK(a,b){var s,r
if(t.j.b(a)){s=J.aE(a)
s=s.gq(a)!==3||s.S(a,new A.rq())}else s=!0
if(s)return A.i0(b+" is not a finite vec3")
s=A.f([],t.n)
for(r=J.S(a);r.m();)s.push(A.aC(r.gp()))
return s},
wC(a,b,c){var s,r,q,p=A.f([],t.n)
for(s=A.BK(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
i0(a){return A.k(A.a1(a,null,null))},
lF:function lF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
lG:function lG(a){this.a=a},
lH:function lH(a){this.a=a},
lI:function lI(){},
lJ:function lJ(){},
lK:function lK(a){this.a=a},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lL:function lL(a){this.a=a},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
ez:function ez(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eB:function eB(a){this.b=a},
rq:function rq(){},
im:function im(a,b){this.a=a
this.b=b
this.d=null},
lT:function lT(a){this.a=a},
jh:function jh(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mX:function mX(){this.b=0},
oA:function oA(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
b0:function b0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iI:function iI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mj:function mj(){},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(){},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
CD(a){var s,r,q,p,o,n,m,l
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
return new A.c_(B.a_,p,new Uint16Array(A.Y(a.b)),new A.i9(new A.D(s.a,s.b,s.c),new A.D(s.d,s.e,s.f)))},
CE(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
a3.C()
s=t.S
r=A.v(s,t.L)
for(q=a3.b,p=q.length,o=t.t,n=a3.a,m=0;m<p;m+=3){l=q[m]
k=m+1
if(!(k<p))return A.e(q,k)
j=q[k]
k=m+2
if(!(k<p))return A.e(q,k)
i=q[k]
k=n.length
if(!(l<k))return A.e(n,l)
h=n[l].x
if(!(j<k))return A.e(n,j)
g=n[j].x
if(g===h){if(!(i<k))return A.e(n,i)
f=n[i].x!==h}else f=!0
if(f){if(!(i<k))return A.e(n,i)
throw A.d(A.w("QHMX triangle "+m+" crosses material slots "+h+", "+g+", "+n[i].x,null))}k=r.h(0,h)
if(k==null){k=A.f([],o)
r.k(0,h,k)}B.a.I(k,A.f([l,j,i],o))}e=A.f([],t.bp)
q=r.$ti.i("a8<1>")
q=A.N(new A.a8(r,q),q.i("o.E"))
B.a.X(q)
p=q.length
k=t.ph
d=0
for(;d<q.length;q.length===p||(0,A.r)(q),++d){h=q[d]
g=r.h(0,h)
g.toString
c=A.v(s,s)
b=A.f([],k)
a=A.f([],o)
for(f=g.length,a0=0;a0<g.length;g.length===f||(0,A.r)(g),++a0){a1=g[a0]
a2=c.h(0,a1)
if(a2==null){a2=b.length
c.k(0,a1,a2)}if(a2===b.length){if(!(a1>=0&&a1<n.length))return A.e(n,a1)
B.a.l(b,n[a1])}B.a.l(a,a2)}B.a.l(e,new A.iJ(h,A.CD(new A.iX(b,new Uint16Array(A.Y(a)),A.Ar(b)))))}return e},
Ar(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.iI(r,q,p,o,n,m)},
iJ:function iJ(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
mk:function mk(){},
BV(a){var s,r,q,p=new A.mY(A.f([],t.ph),A.f([],t.t),A.v(t.N,t.S))
for(s=0;s<4;++s)A.AH(p,a,B.c4[s],10.5,10.5,8.03,0.42)
p.v(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.v(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.v(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.v(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.v(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.v(1,11,0,11,-0.5,-0.35,10.58)
p.v(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.v(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.b0(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.b0(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.bl(r,new A.b0(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.bl(r,q,new A.b0(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.b0(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.b0(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.bl(q,new A.b0(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.bl(q,r,new A.b0(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.v(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.Bn(p,10.5,10.5,8.03,10.88)
A.At(p,10.5,10.5,10.88)
A.AD(p,10.5,10.5,8.03)
A.AK(p,a,10.5)
A.Bs(p,10.5,10.5)
A.Aq(p,10.5)
return p.ll()},
AH(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.f([],t.dA)
for(s=b6.b,r=s.length,q=B.B!==b7,p=B.l!==b7,o=B.m===b7,n=B.N===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.aM(k)
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
B.a.l(b4,new A.dw(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.ap(i),b=J.S(h.a),h=new A.K(b,h.b,h.$ti.i("K<1>"));h.m();){a=b.gp()
if(!a.Q||a.aw(i)!==b7)continue
B:{if(!p||o){a0=g+a.ad(i)
break B}if(!q||n){a0=e+a.ad(i)
break B}a0=null}B.a.l(b4,new A.dw(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.l||b7===B.m?b8:b9
r=t.i
a1=A.ax([0,s],r)
a2=A.ax([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.N(a1,a1.$ti.c)
B.a.X(a4)
a5=A.N(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.e(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.e(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.e(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.S(b4,new A.r4(b0,b1,b2,b3)))continue
switch(m){case 0:b5.v(0,b1,b3,0,b0,b2,r)
break
case 2:b5.v(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.v(0,0,b3,b1,r,b2,b0)
break
case 1:b5.v(0,s,b3,b1,b8,b2,b0)
break}}A.AJ(b5,b4,b7,b8,b9,c1)
A.AI(b5,b4,b7,b8,b9,c1)},
AI(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
AJ(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.Bq(a2,g,a4,a5,a6,a7,q)}},
Bq(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
Bn(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.v(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.v(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.v(4,i,p,-0.38,j,q,-0.44)
a.v(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.v(5,h+0.5,p,o,h-0.5,r,q)}},
At(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.v(0,g+0.35,k,n,g-0.35,l,q)
a.v(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.v(5,d+0.1,o,m,d-0.1,r,p)}}},
AD(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.v(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.v(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.v(6,j,b+0.06,d,k,b,e)}a.v(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
AK(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ad("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.v(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.v(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.v(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.v(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.v(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)
k=r-0.18
a.v(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.v(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
Bs(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
Aq(a,b){var s,r
a.v(0,6.7,1,-4.05,-2.5,0,-4.4)
a.v(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.v(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.v(7,b+3,0,-4.55,-3,-0.08,-5.2)},
dw:function dw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r4:function r4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ct(a,b,c,d){var s,r,q,p,o,n=A.um(a,c,b)
if(n!=null&&!n.e){s=n.b
return new A.dQ(B.dz,s)}r=A.wZ(a,c,b)
if(r!=null)return new A.dQ(B.dA,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.x_(a,c,b)!=null)return B.dF
q=A.wY(a,b,c,d)
if(q!=null){p=d.ci(q.c)
o=q.y
return new A.dQ(B.dC,o==null?"inspect the "+p.b:"inspect "+o)}return B.dE},
wY(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a0==null)return null
s=c.e.h(0,b)
if(s==null)return null
for(r=a0.mY(b),q=J.S(r.a),r=new A.K(q,r.b,r.$ti.i("K<1>")),p=a0.c,o=s.d,n=o.a,m=o.b,o=o.c,l=null,k=3;r.m();){j=q.gp()
if(!j.x)continue
i=a0.ci(j.c)
h=j.f.a
g=j.iB(i,p)
f=a.a
e=new A.c(n+(h.a*p+0)-f.a,m+(h.b*p+(g.a+g.b)*0.5)-f.b,o+(h.c*p+0)-f.c)
d=e.gq(0)
if(d<0.01||d>3)continue
h=e.ga6()
f=a.b
if(Math.acos(B.d.K(h.a*f.a+h.b*f.b+h.c*f.c,-1,1))>0.5236||d>=k)continue
k=d
l=j}return l},
de:function de(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.c=b},
wL(a,b){var s,r=new A.cx(new Float32Array(5376)),q=new A.cx(new Float32Array(5376)),p=new A.cx(new Float32Array(5376)),o=new A.cx(new Float32Array(5376)),n=b.d,m=a.aM(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cF(new A.c(l,k,j),new A.c(l,k,h),new A.c(f,k,h),new A.c(f,k,j),11053224,g,i)
A.Ag(r,b,m)
k+=m.b
q.cF(new A.c(l,k,j),new A.c(f,k,j),new A.c(f,k,h),new A.c(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.Aj(p,a,b,m,B.c4[s])
for(l=a.ap(b.a),k=J.S(l.a),l=new A.K(k,l.b,l.$ti.i("K<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.vS(o,b,m,j,!0)}A.Ae(p,b,m)
A.Ah(p,a,b,m)
return new A.oB(B.q.aC(r.a,0,r.b),B.q.aC(q.a,0,q.b),B.q.aC(p.a,0,p.b),B.q.aC(o.a,0,o.b))},
BT(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cx(new Float32Array(5376))
r=a.aM(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.vT(s,b,r,c,q)
return B.q.aC(s.a,0,s.b)},
BU(a,b){var s,r,q,p=new A.cx(new Float32Array(5376)),o=a.aM(b)
for(s=a.ap(b.a),r=J.S(s.a),s=new A.K(r,s.b,s.$ti.i("K<1>"));s.m();){q=r.gp()
if(q.at==null||q.as)continue
A.vS(p,b,o,q,!1)}return B.q.aC(p.a,0,p.b)},
Ag(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aO(e/0.22)
for(r=c+0.004,q=a1.a,p=d+q,o=c+0.014,n=0;n<s;++n){m=b+n*0.22+0.018
l=(n&1)===0?7952963:7031607
A.z(a,new A.c(d,r,m),new A.c(p,o,m+0.15),l)}r=a0.a
p=r==="hall"
if(p||r==="landing"){k=p?1:0.82
j=d+(q-k)*0.5
q=j+k
e=b+e
A.z(a,new A.c(j,c+0.016,b+0.18),new A.c(q,c+0.026,e-0.18),6443866)
A.z(a,new A.c(j+0.08,c+0.027,b+0.22),new A.c(q-0.08,c+0.033,e-0.22),8548460)}if(r==="living-room"){A.z(a,new A.c(d+1.15,c+0.018,b+2.15),new A.c(d+4.7,c+0.03,b+4.35),5589578)
A.z(a,new A.c(d+1.28,c+0.031,b+2.28),new A.c(d+4.57,c+0.037,b+4.22),7824746)}return}if(e==="floor-linoleum"){for(e=b+0.18,r=d+0.08,q=c+0.004,p=d+a1.a-0.08,o=c+0.012,n=0;n<5;++n){m=e+n*0.62
i=(n&1)===0?7764332:6843233
A.z(a,new A.c(r,q,m),new A.c(p,o,m+0.5),i)}return}if(e==="floor-tiles"){for(e=d+0.08,r=b+0.08,q=c+0.004,p=c+0.012,h=0;h<4;++h)for(g=e+h*0.86,o=g+0.78,f=0;f<3;++f){m=r+f*0.86
i=(h+f&1)===0?12170408:10657172
A.z(a,new A.c(g,q,m),new A.c(o,p,m+0.78),i)}return}if(e==="floor-concrete"){A.z(a,new A.c(d+0.08,c+0.004,b+0.08),new A.c(d+a1.a-0.08,c+0.014,b+a1.c-0.08),7828331)
A.z(a,new A.c(d+2.2,c+0.015,b+2.45),new A.c(d+2.68,c+0.021,b+2.93),4868420)}},
Ah(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
switch(b3.a){case"living-room":a7=a8+b4.a
s=a7-0.48
r=b0+b4.c*0.4
A.z(b1,new A.c(s,a9,r-0.85),new A.c(a7,a9+2.55,r+0.85),7824724)
A.z(b1,new A.c(s-0.38,a9+0.02,r-0.72),new A.c(a7+0.05,a9+0.16,r+0.72),a2)
q=a9+2.34
A.z(b1,new A.c(s-0.52,a9+2.18,r-0.94),new A.c(a7+0.08,q,r+0.94),a3)
p=s-0.02
A.z(b1,new A.c(p,a9+0.45,r-0.48),new A.c(a7+0.03,a9+1.48,r+0.48),2170396)
for(a7=s-0.08,o=a9+0.28,n=r-0.42,m=a9+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.z(b1,new A.c(a7+j,o,n),new A.c(p+j,m,l),a4)}for(a7=s-0.01,p=a9+1.55,o=s+0.04,n=a9+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.z(b1,new A.c(a7,p,l+j),new A.c(o,n,m+j),a2)}for(a7=[r-0.68,r+0.56],p=s-0.42,o=a9+2,n=s-0.26,m=a9+2.2,i=0;i<2;++i){h=a7[i]
A.z(b1,new A.c(p,o,h),new A.c(n,m,h+0.16),a5)}A.z(b1,new A.c(s-0.27,q,r-0.58),new A.c(s-0.07,a9+2.52,r-0.38),a6)
A.z(b1,new A.c(s-0.25,q,r+0.34),new A.c(s-0.06,a9+2.49,r+0.52),a3)
break
case"hall":A.Ai(b1,b2,b3,b4,a5,a4)
A.z(b1,new A.c(a8+0.28,a9+0.78,b0+0.52),new A.c(a8+0.68,a9+0.88,b0+2.15),a5)
for(a7=[b0+0.66,b0+2.01],q=a8+0.34,p=a8+0.42,o=a9+0.8,i=0;i<2;++i){g=a7[i]
A.z(b1,new A.c(q,a9,g),new A.c(p,o,g+0.08),a3)}f=a8+1.22
a7=b0+0.1
A.z(b1,new A.c(f-0.28,a9+2.35,b0+0.02),new A.c(f+0.28,a9+3.02,a7),a5)
A.z(b1,new A.c(f-0.13,a9+2.48,a7),new A.c(f+0.13,a9+2.72,b0+0.15),a2)
a7=b0+0.08
A.z(b1,new A.c(f-0.025,a9+1.82,a7),new A.c(f+0.025,a9+2.36,b0+0.13),a4)
for(q=a8+1.7,p=a9+1.74,o=a8+1.78,n=a9+1.84,m=b0+0.16,k=0;k<3;++k){l=k*0.36
A.z(b1,new A.c(q+l,p,a7),new A.c(o+l,n,m),a4)}a7=a9+0.72
A.z(b1,new A.c(a8+0.86,a9,b0+0.62),new A.c(a8+1.1,a7,b0+0.9),a6)
A.z(b1,new A.c(a8+0.91,a7,b0+0.68),new A.c(a8+1.05,a9+0.82,b0+0.84),a5)
break
case"kitchen":a7=a8+b4.a
e=a7-0.62
q=a9+1.28
A.z(b1,new A.c(e,a9,b0+0.72),new A.c(a7,q,b0+2.18),a4)
A.z(b1,new A.c(e-0.08,q,b0+0.62),new A.c(a7+0.04,a9+1.38,b0+2.28),a2)
for(a7=e+0.12,q=a9+1.39,p=b0+0.88,o=e+0.4,n=a9+1.45,m=b0+1.16,k=0;k<3;++k){l=k*0.4
A.z(b1,new A.c(a7,q,p+l),new A.c(o,n,m+l),2170396)}a7=a9+0.82
q=a9+0.94
A.z(b1,new A.c(a8+1.05,a7,b0+1.15),new A.c(a8+3.1,q,b0+2.35),a3)
for(p=[a8+1.18,a8+2.94],o=b0+1.28,n=b0+1.38,i=0;i<2;++i){d=p[i]
A.z(b1,new A.c(d,a9,o),new A.c(d+0.1,a7,n),a5)}A.z(b1,new A.c(a8+0.48,a9+1.72,b0+2.74),new A.c(a8+2.55,a9+1.84,b0+2.88),a5)
a7=a9+1.02
A.z(b1,new A.c(a8+3.38,q,b0+1.26),new A.c(a8+4.48,a7,b0+2.22),a6)
q=b0+1.66
p=b0+1.74
A.z(b1,new A.c(a8+3.82,a7,q),new A.c(a8+3.9,a9+1.34,p),a4)
A.z(b1,new A.c(a8+3.72,a9+1.3,q),new A.c(a8+4,a9+1.36,p),a4)
for(a7=a8+1.38,q=a9+0.95,p=b0+1.48,o=a8+1.78,n=a9+1.05,m=b0+1.88,k=0;k<2;++k){l=k*0.55
A.z(b1,new A.c(a7+l,q,p),new A.c(o+l,n,m),a6)}break
case"cellar":for(a7=a8+0.35,q=b0+1.05,p=a8+0.58,o=a9+0.55,n=b0+2,k=0;k<4;++k){m=k*0.28
A.z(b1,new A.c(a7+m,a9,q),new A.c(p+m,o+B.c.a0(k,2)*0.18,n),a5)}A.z(b1,new A.c(a8+2.55,a9+0.15,b0+0.38),new A.c(a8+2.72,a9+1.55,b0+0.56),a4)
A.z(b1,new A.c(a8+2.42,a9+1.28,b0+0.32),new A.c(a8+2.86,a9+1.38,b0+0.65),a6)
A.z(b1,new A.c(a8+0.4,a9+1.72,b0+0.45),new A.c(a8+3.4,a9+1.82,b0+0.58),a4)
A.z(b1,new A.c(a8+1.9,a9+1.58,b0+0.42),new A.c(a8+2.06,a9+1.76,b0+0.61),a4)
A.z(b1,new A.c(a8+1.84,a9+1.62,b0+0.55),new A.c(a8+2.12,a9+1.7,b0+0.64),a4)
break
case"bedroom":c=a8+0.85
b=b0+2.08
a7=a9+0.72
A.z(b1,new A.c(c,a9+0.42,b),new A.c(c+3.65,a7,b+2.05),6972528)
A.z(b1,new A.c(c-0.1,a7,b-0.12),new A.c(c+3.75,a9+1.28,b+0.1),a3)
A.z(b1,new A.c(c+0.22,a9+0.74,b+1.35),new A.c(c+1.05,a9+0.9,b+1.82),a6)
a7=a8+b4.a
q=a9+1.48
A.z(b1,new A.c(a7-0.95,a9+0.78,b0+0.58),new A.c(a7-0.18,q,b0+1.42),a3)
A.z(b1,new A.c(a7-1.04,q,b0+0.48),new A.c(a7-0.1,a9+1.57,b0+1.52),a5)
for(a7=[b+0.22,b+0.78],q=c+0.36,p=a9+0.75,o=c+1.12,n=a9+0.92,i=0;i<2;++i){a=a7[i]
A.z(b1,new A.c(q,p,a),new A.c(o,n,a+0.42),a6)}for(a7=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=a9+0.08,n=a9+0.44,i=0;i<2;++i){a0=a7[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.z(b1,new A.c(a0,o,g),new A.c(l,n,g+0.1),a5)}}break
case"landing":a7=a8+0.48
A.z(b1,new A.c(a8+0.34,a9+0.02,b0+1.62),new A.c(a7,a9+1.06,b0+2.7),a5)
for(q=a9+0.82,p=b0+1.68,o=a8+2.14,n=a9+0.9,m=b0+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.z(b1,new A.c(a7,q+l,p+j),new A.c(o,n+l,m+j),a3)}for(a7=a8+0.62,q=a9+1.02,p=b0+1.74,o=a8+0.7,n=a9+1.78,m=b0+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.z(b1,new A.c(a7+l,q,p+j),new A.c(o+l,n,m+j),a5)}break
case"bathroom":a7=a9+0.62
A.z(b1,new A.c(a8+0.3,a9+0.04,b0+0.38),new A.c(a8+2.15,a7,b0+1.22),a6)
q=a9+0.72
A.z(b1,new A.c(a8+0.42,a7,b0+0.48),new A.c(a8+2.03,q,b0+1.12),a2)
a7=a8+b4.a
p=b0+b4.c
A.z(b1,new A.c(a7-0.78,a9+0.12,p-0.88),new A.c(a7-0.18,a9+1.75,p-0.28),a6)
A.z(b1,new A.c(a7-0.86,a9+1.68,p-0.98),new A.c(a7-0.1,a9+1.82,p-0.18),a4)
p=b0+0.68
a7=a9+1.18
o=b0+0.78
A.z(b1,new A.c(a8+0.86,q,p),new A.c(a8+0.96,a7,o),a4)
A.z(b1,new A.c(a8+0.7,a9+1.12,p),new A.c(a8+1.12,a7,o),a4)
break
case"spare-room":A.z(b1,new A.c(a8+1,a9,b0+0.7),new A.c(a8+3.25,a9+1.65,b0+2),6972528)
A.z(b1,new A.c(a8+0.8,a9+1.6,b0+0.52),new A.c(a8+3.45,a9+1.74,b0+2.18),a3)
a7=a8+b4.a
q=b0+b4.c
A.z(b1,new A.c(a7-1.05,a9,q-1.02),new A.c(a7-0.25,a9+0.72,q-0.24),a5)
for(p=a7-0.98,o=a9+0.18,n=q-1.12,a7-=0.28,m=a9+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.z(b1,new A.c(p,o+l,n),new A.c(a7,m+l,q),a4)}break}},
Ai(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gak(a)
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
A.z(a0,new A.c(p,c,b-0.18),new A.c(o,c+0.11,b+0.18),a4)}k=a+0.08
h=a+0.34
A.z(a0,new A.c(p-0.1,k,g),new A.c(p,h,i),3680031)
A.z(a0,new A.c(o,k,g),new A.c(o+0.1,h,i),3680031)
h=a+1.52
k=h<m?h:m
A.z(a0,new A.c(o+0.16,a+1.42,g+0.25),new A.c(o+0.25,k,i-0.25),a5)},
Aj(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.l||a4===B.m?a3.a:a3.c,a=A.f([],t.a9)
for(s=a2.a,r=a1.ap(s),q=J.S(r.a),r=new A.K(q,r.b,r.$ti.i("K<1>"));r.m();){p=q.gp()
if(!p.as&&p.aw(s)===a4)a.push(new A.dv(p.ad(s),p.ad(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.dv(q,q+n.e,p,p+n.f))}}s=t.i
r=A.ax([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.I(0,A.f([m.a,m.b],p))}l=A.N(r,r.$ti.c)
B.a.X(l)
s=A.ax([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.I(0,A.f([m.c,m.d],p))}k=A.N(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.e(l,j)
f=l[j]
if(!(i<r))return A.e(l,i)
e=l[i]
if(!(h<s))return A.e(k,h)
d=k[h]
c=k[g]
if(B.a.S(a,new A.qk(f,e,d,c)))continue
A.BL(a0,a2,a3,a4,f,e,d,c)}A.Ak(a0,a2,a3,a4,b,a)},
Ak(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.qi(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.qi(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.qi(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.qi(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.aZ(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.aZ(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.aZ(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.aZ(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.M(a9),o=r.i("n(1)").a(new A.qj(b3)),a9=B.a.gt(a9),r=new A.K(a9,o,r.i("K<1>")),o=b2.c,i=b3!==B.l,e=b3===B.m,c=b2.a;r.m();){b=a9.gp()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.aZ(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.aZ(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.aZ(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.aZ(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.Al(b0,b1,b2,b3,b,p)}},
Al(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
A.aZ(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.aZ(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.aZ(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.aZ(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.aZ(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
qi(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.BA(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aZ(a,b,c,d,n,o,g,h,i,j)}},
BA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.f([new A.f8(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.f([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.f8(j,m))
j=k.b
if(n<j)B.a.l(p,new A.f8(n,j))}h=p}return h},
Ae(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.iy.u(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.z(a,new A.c(p-0.025,n,o-0.025),new A.c(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.z(a,new A.c(p-0.14,k,o-0.14),new A.c(p+0.14,n,o+0.14),j)
A.z(a,new A.c(p-0.09,n-0.16,o-0.09),new A.c(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.z(a,new A.c(h-0.24,k,e-0.24),new A.c(h+0.24,s,e+0.24),l)
j=s-0.034
A.z(a,new A.c(h-0.15,j,e-0.15),new A.c(h+0.15,k,e+0.15),l)
A.z(a,new A.c(h-0.055,s-0.048,e-0.055),new A.c(h+0.055,j,e+0.055),l)},
aZ(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.z(a,new A.c(r+e,q+g,p),new A.c(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.z(a,new A.c(r+e,q+g,s-i),new A.c(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.z(a,new A.c(s-i,q+g,p+e),new A.c(s,q+h,p+f),j)
return
case 3:A.z(a,new A.c(r,q+g,p+e),new A.c(r+i,q+h,p+f),j)
return}},
z(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.c(o,n,m),k=c.a,j=new A.c(k,n,m),i=c.b,h=new A.c(k,i,m),g=new A.c(o,i,m)
m=c.c
s=new A.c(o,n,m)
r=new A.c(k,n,m)
q=new A.c(k,i,m)
p=new A.c(o,i,m)
a.an(j,l,g,h,d)
a.an(s,r,q,p,d)
a.an(l,s,p,g,d)
a.an(r,j,h,q,d)
a.an(l,j,r,s,d)
a.an(g,p,q,h,d)},
BL(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
l=d.a
switch(l){case 0:s=new A.c(k+e,j+g,i)
break
case 2:s=new A.c(k+f,j+g,i+c.c)
break
case 1:s=new A.c(k+c.a,j+h,i+f)
break
case 3:s=new A.c(k,j+h,i+e)
break
default:s=m}switch(l){case 0:r=new A.c(k+f,j+g,i)
break
case 2:r=new A.c(k+e,j+g,i+c.c)
break
case 1:r=new A.c(k+c.a,j+h,i+e)
break
case 3:r=new A.c(k,j+h,i+f)
break
default:r=m}switch(l){case 0:q=new A.c(k+f,j+h,i)
break
case 2:q=new A.c(k+e,j+h,i+c.c)
break
case 1:q=new A.c(k+c.a,j+g,i+e)
break
case 3:q=new A.c(k,j+g,i+f)
break
default:q=m}switch(l){case 0:p=new A.c(k+e,j+h,i)
break
case 2:p=new A.c(k+f,j+h,i+c.c)
break
case 1:p=new A.c(k+c.a,j+g,i+f)
break
case 3:p=new A.c(k,j+g,i+e)
break
default:p=m}switch(l){case 0:o=new A.c(0,0,0.003)
break
case 2:o=new A.c(0,0,-0.003)
break
case 1:o=new A.c(-0.003,0,0)
break
case 3:o=new A.c(0.003,0,0)
break
default:o=m}a.cF(s.a_(0,o),r.a_(0,o),q.a_(0,o),p.a_(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.BM(b,d)
switch(l){case 0:o=new A.c(s.a,s.b,s.c-n)
break
case 2:o=new A.c(r.a,s.b,s.c)
break
case 1:o=new A.c(s.a,s.b,p.c)
break
case 3:o=new A.c(s.a-n,s.b,s.c)
break
default:o=m}switch(l){case 0:l=new A.c(r.a,q.b,s.c)
break
case 2:l=new A.c(s.a,q.b,s.c+n)
break
case 1:l=new A.c(s.a+n,q.b,r.c)
break
case 3:l=new A.c(p.a,q.b,r.c)
break
default:l=m}A.z(a,o,l,9145227)},
BM(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
vS(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aw(d),b=a3.ad(d),a=b+a3.w
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
A.z(a0,new A.c(r+l,s,d),new A.c(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(l,s,d),new A.c(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.z(a0,new A.c(r+n,s+m,d),new A.c(r+h,j,i),q)
A.z(a0,new A.c(k,s,d),new A.c(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.z(a0,new A.c(r+l,s,k),new A.c(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(l,s,k),new A.c(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.z(a0,new A.c(r+n,s+m,k),new A.c(r+h,i,d),q)
A.z(a0,new A.c(j,s,k),new A.c(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.z(a0,new A.c(n,s,d+k),new A.c(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(n,s,k),new A.c(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.z(a0,new A.c(n,s+e,d+m),new A.c(r,j,d+l),q)
A.z(a0,new A.c(n,s,i),new A.c(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.z(a0,new A.c(r,s,d+l),new A.c(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(r,s,l),new A.c(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.z(a0,new A.c(r,s+e,d+n),new A.c(k,j,d+m),q)
A.z(a0,new A.c(r,s,i),new A.c(k,s+0.05,l),q)
break}if(a4)A.vT(a0,a1,a2,a3,q)
A.Af(a0,a1,a2,a3)},
Af(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.ad(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aw(d)
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
A.aZ(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.m,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.aZ(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.aZ(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.aZ(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
vT(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aw(o),m=d.ad(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.z(a,new A.c(p,s,o),new A.c(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.z(a,new A.c(p,s,o-d.w),new A.c(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.z(a,new A.c(p-d.w,s,o),new A.c(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.z(a,new A.c(p,s,o),new A.c(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.z(a,new A.c(p,s,o),new A.c(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.z(a,new A.c(p,s,o-0.055),new A.c(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.z(a,new A.c(p-0.055,s,o),new A.c(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.z(a,new A.c(p,s,o),new A.c(p+0.055,s+r,o+d.w),e)
break}},
oB:function oB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qk:function qk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qj:function qj(a){this.a=a},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a,b){this.a=a
this.b=b},
uL(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.f([],b4),b6=t.aN,b7=A.f([],b6),b8=A.f([],t.jn),b9=t.N
b9=new A.mV(b5,b7,b8,A.v(b9,t.J),A.v(b9,t.T),new A.mX())
s=t.cJ
r=t.s
q=t.cs
p=t.jc
B.a.I(b5,A.f([new A.aV(n,B.ai,new A.c(4.5,3.9,4),new A.c(0,0,0),A.f([new A.b6("living-north-west",B.l,0.5,0.9,1.2,1.8,!1,!0),new A.b6("living-north-east",B.l,2.7,0.9,1.2,1.8,!1,!0)],s),A.f(["hall-living","kitchen-living"],r),A.f([new A.ba(m,l,new A.c(1,1.95,1),!1,!1,m),new A.ba(k,j,new A.c(3,1.95,3),!1,!1,k)],q),B.aQ,"wallpaper-stripes",i,h,B.I),new A.aV(g,B.ai,new A.c(2.5,3.9,7),new A.c(4.5,0,0),A.f([new A.b6("hall-fanlight",B.l,0.85,3.225,0.8,0.525,!1,!0)],s),A.f(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.f([new A.ba("mantle-hall","the hall mantle",new A.c(1,1.95,3.5),!1,!1,o)],q),A.f([new A.bw(e,e,new A.c(0.2,2.175,0.35)),new A.bw(d,d,new A.c(2.2,2.55,3)),new A.bw(c,c,new A.c(0.4,1.35,4.1))],p),b,i,h,B.I),new A.aV(a,B.ai,new A.c(4.5,3.75,3),new A.c(0,0,4),A.f([new A.b6("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.b6("kitchen-west",B.N,1,1.2,0.9,1.5,!1,!0)],s),A.f(["hall-kitchen","kitchen-living"],r),A.f([new A.ba(a0,"the mantle by the stove",new A.c(0.8,1.8,0.5),!1,!1,a0),new A.ba("mantle-kitchen-second",l,new A.c(2.2,1.8,2),!1,!1,o),new A.ba("mantle-kitchen-third",j,new A.c(3.8,1.8,1.2),!1,!1,o)],q),A.f([new A.bw(a1,a1,new A.c(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.fa),new A.aV("cellar",B.ai,new A.c(4,3,4),new A.c(1,-3,2),B.c0,A.f(["hall-cellar"],r),B.fx,B.aQ,"wallpaper-damp","floor-concrete","ceiling-pipes",B.I),new A.aV("bedroom",B.aj,new A.c(4.5,3.6,4),new A.c(0,4.2,0),A.f([new A.b6("bedroom-north-west",B.l,0.7,1.05,1.1,1.65,!1,!0),new A.b6("bedroom-north-east",B.l,2.7,1.05,1,1.65,!1,!0)],s),A.f(["landing-bedroom"],r),A.f([new A.ba(a2,"the bedroom mantle",new A.c(1,1.95,1),!1,!1,a2),new A.ba("mantle-bedroom-bedside","the bedside mantle",new A.c(3.5,1.5,3),!1,!1,o)],q),A.f([new A.bw(a3,a3,new A.c(2.2,1.125,2.5)),new A.bw(a4,a4,new A.c(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.I),new A.aV(a5,B.aj,new A.c(2.5,3.6,3),new A.c(4.5,4.2,0),B.c0,A.f(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.f([new A.ba("mantle-landing","the landing mantle",new A.c(1,1.8,1.5),!1,!1,o)],q),B.aQ,b,i,h,B.I),new A.aV(a7,B.aj,new A.c(2.5,3.6,2.5),new A.c(4.5,4.2,3),A.f([new A.b6("bathroom-east",B.B,0.9,1.5,0.7,1.5,!0,!0)],s),A.f([a6],r),A.f([new A.ba("mantle-bathroom","the bathroom mantle",new A.c(1.5,1.8,1),!1,!1,o)],q),A.f([new A.bw(a8,a8,new A.c(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.I),new A.aV(a9,B.aj,new A.c(4.5,3.15,3),new A.c(0,4.2,4),A.f([new A.b6("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.f(["landing-spare"],r),A.f([new A.ba("mantle-spare","the broken mantle",new A.c(2,1.95,1),!1,!0,o)],q),A.f([new A.bw(b0,b0,new A.c(0.5,1.8,0.3)),new A.bw(b1,b1,new A.c(3.7,2.1,2.7)),new A.bw(b2,b2,new A.c(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.I)],b4))
B.a.I(b7,A.f([A.dn(g,"outside","kit-front-door-recessed",!0,B.l,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.dn(g,n,b3,!1,B.N,B.B,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.dn(g,a,b3,!1,B.N,B.B,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.dn(a,n,b3,!1,B.l,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.dn(g,"cellar","kit-cellar-door-grille",!1,B.m,B.B,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.dn(g,a5,o,!1,B.B,B.B,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.dn(a5,"bedroom",b3,!1,B.N,B.B,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.dn(a5,a7,b3,!1,B.m,B.l,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.dn(a5,a9,b3,!1,B.m,B.l,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.l(b8,new A.dq("hall-stairs",f,B.fp,new A.c(5,0,2.8),new A.c(6.5,6.3,6),new A.c(5.75,2.475,5.8),new A.c(5.75,6.675,2.2)))
b9.jI()
b9.kj()
b4=b5.length
if(b4!==8)A.k(A.l("expected eight rooms, got "+b4))
b4=b9.gnt()
if(b4!==9)A.k(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gaB(b8)
b4=B.a.gN(B.a.gaB(b8).c)
if(b4!==6.3)A.k(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.l("expected nine physical portals"))
b9.l7()
b9.l5()
return b9},
mV:function mV(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
nb:function nb(){},
nc:function nc(){},
na:function na(){},
nd:function nd(a){this.a=a},
ne:function ne(){},
um(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.c(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga6()
j=a.b
if(Math.acos(B.d.K(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
wZ(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.ap(c),r=J.S(s.a),s=new A.K(r,s.b,s.$ti.i("K<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.n_(c,o)
m=a.a
l=new A.c(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.wd(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
x_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.BN(b,i,n)
l=a.a
k=new A.c(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.wd(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
wd(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.K(a.ga6().bM(c.b),-1,1))<=e},
BN(a,b,c){var s=a.aM(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.c(q.a+r,p,q.c)
break
case 2:q=new A.c(q.a+r,p,q.c+s.c)
break
case 1:q=new A.c(q.a+s.a,p,q.c+r)
break
case 3:q=new A.c(q.a,p,q.c+r)
break
default:q=null}return q},
mi:function mi(){this.a=null
this.b=0},
p6:function p6(){},
p7:function p7(){},
yu(a){var s=A.i4(a,"inventory asset"),r=A.d5(s,"id"),q=A.d5(s,"kind")
A.d5(s,"source")
A.d5(s,"proxy")
A.d5(s,"pivot")
s=A.i4(s.h(0,"bounds"),"inventory bounds")
return new A.cn(r,q,new A.nj(A.l1(s.h(0,"min"),"bounds.min"),A.l1(s.h(0,"max"),"bounds.max")))},
yv(a){var s,r,q,p,o,n,m,l="stateKey",k=A.i4(a,"inventory placement"),j=A.i4(k.h(0,"visibility"),"placement visibility"),i=A.i4(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.d5(k,"id"),f=A.d5(k,"roomId"),e=A.d5(k,"assetId")
A.d5(k,"role")
s=typeof k.h(0,"socket")=="string"?A.B(k.h(0,"socket")):null
k=A.i4(k.h(0,"transform"),"inventory transform")
r=A.l1(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.ea)
q=A.l1(k.h(0,"position"),"transform.position")
p=A.l1(k.h(0,"rotation"),"transform.rotation")
A.d5(j,"layer")
if(typeof j.h(0,l)=="string")A.B(j.h(0,l))
o=J.a6(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.B(i.h(0,"focusId")):null
m=t.P.b(h)?A.Bf(h,"radius"):0
return new A.cd(g,f,e,s,new A.nl(q,p,r),o,n,m)},
i4(a,b){return t.P.b(a)?a:A.d3(b+" is not an object")},
d5(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.d3(b+" is not a string")},
Bf(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.d3(b+" is not finite")},
l1(a,b){var s
if(t.j.b(a)){s=J.aE(a)
s=s.gq(a)!==3||s.S(a,new A.rp())}else s=!0
if(s)return A.d3(b+" is not a finite vec3")
s=J.aE(a)
return new A.c(A.aC(s.h(a,0)),A.aC(s.h(a,1)),A.aC(s.h(a,2)))},
d3(a){return A.k(A.a1(a,null,null))},
n_:function n_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n2:function n2(a){this.a=a},
n0:function n0(a){this.a=a},
n1:function n1(a){this.a=a},
cn:function cn(a,b,c){this.a=a
this.b=b
this.f=c},
cd:function cd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
nl:function nl(a,b,c){this.a=a
this.b=b
this.c=c},
nj:function nj(a,b){this.a=a
this.b=b},
rp:function rp(){},
nk:function nk(a){this.a=a},
ct:function ct(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iY:function iY(a){this.a=a},
n3:function n3(a){this.a=a},
dn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bx(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
fE:function fE(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
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
bx:function bx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ba:function ba(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(){},
dq:function dq(a,b,c,d,e,f,g){var _=this
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
yp(a){return A.yo(a)},
yo(a){var s,r,q,p,o,n,m=A.wl(a,"sound emitter"),l=t.N,k=A.v(l,l)
for(s=A.wl(m.h(0,"cues"),"sound emitter cues").gL(),s=s.gt(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.e5)
k.k(0,r.a,q)}s=A.ub(m,"id")
r=A.ub(m,"roomId")
p=A.ub(m,"placementId")
o=A.BJ(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.fg("gain is not a number")
return new A.cm(s,r,p,o,n,A.bW(k,l,l))},
wl(a,b){return t.P.b(a)?a:A.fg(b+" is not an object")},
ub(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.fg(b+" is not a string")},
BJ(a,b){var s
if(t.j.b(a)){s=J.aE(a)
s=s.gq(a)!==3||s.S(a,new A.ro())}else s=!0
if(s)throw A.d(A.a1(b+" must be a numeric vec3",null,null))
s=J.aE(a)
return new A.c(A.aC(s.h(a,0)),A.aC(s.h(a,1)),A.aC(s.h(a,2)))},
fg(a){return A.k(A.a1(a,null,null))},
n5:function n5(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(a){this.a=a},
n7:function n7(a){this.a=a},
n8:function n8(){},
cm:function cm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mW:function mW(){this.b=this.a=null},
fI:function fI(a){this.a=a},
n4:function n4(){this.b=this.a=null},
eP:function eP(a,b){this.a=a
this.b=b},
ro:function ro(){},
uM(a,b,c,d,e,f){var s=t.N
return new A.n9(e,f,c,a,A.bW(A.aG(d,s,s),s,s),A.ar(b,s))},
uN(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.v(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.k(0,p.a,new A.fX(p.ax,p.ay))}s=A.v(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.v(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.k(0,j.a,new A.fP(j.d,j.r))}return A.uM(a.r.b,B.o,i,B.cb,h,s)},
yq(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.h4
r=a3.h(0,"mantleHistory")
if(r==null)r=B.fG
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aN(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.e3)
p=t.N
o=A.v(p,t.ku)
for(n=a.gL(),n=n.gt(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bI)
l=A.aG(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bT(j)||!A.bT(i))A.k(B.bI)
o.k(0,k,new A.fX(j,i))}h=A.v(p,t.y)
for(n=a0.gL(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bT(l.b))throw A.d(B.e0)
h.k(0,k,A.X(l.b))}g=A.v(p,t.mK)
for(n=a1.gL(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bH)
l=A.aG(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bT(f)||!A.bT(e))A.k(B.bH)
g.k(0,k,new A.fP(f,e))}d=A.v(p,p)
for(q=s.gL(),q=q.gt(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.eu)
d.k(0,n,A.B(p.b))}c=A.f([],t.s)
for(q=J.S(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.d(B.dG)
B.a.l(c,b)}return A.uM(a2,c,g,d,o,h)},
u6(a,b){return a.a.a===b.a&&a.a5(0,b.gck(b))},
n9:function n9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fX:function fX(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
y9(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.jc(e,A.M(e).c)
q=new A.f4()
q.cU((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.fC(a,q,2,r,1+s,A.ax(["time"],t.N))
break
case 3:A.fC(a,q,3,r,1+s,A.ax(["place"],t.N))
break
case 4:A.fC(a,q,4,r,2+s,p)
A.y5(a,q,4)
break
case 5:A.fC(a,q,5,r,s,p)
A.y3(a,q,5)
break
case 6:A.fC(a,q,6,r,s,p)
A.y4(a,q)
A.y8(a,q,6)
break
case 7:A.y6(a,q,7)
break
default:if(s>0)A.fC(a,q,b,r,s,p)}},
y2(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.u(0,b.a))return!1
if(A.y7(a,b,c))return!1
return!0},
fC(a,b,c,d,e,f){var s,r,q,p,o=A.f([],t.r)
for(s=a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));s.m();){r=s.d
if(A.y2(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cS(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.e(o,p)
A.uG(a,b,o[p],f)}},
uG(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aG(B.a.gN(o).a,n,n)
if(d==null)s=A.f(B.w.slice(0),t.s)
else{n=t.nn
s=A.N(new A.P(B.w,t.dC.a(new A.md(d)),n),n.i("o.E"))}n=s.length
if(n===0)return
n=b.az(n)
if(!(n>=0&&n<s.length))return A.e(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eC(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.az(n)
if(!(n>=0&&n<p.length))return A.e(p,n)
m.k(0,r,p[n])}a.du(c.a,m,B.a.gN(o).b)},
y5(a,b,c){var s=A.uH(a,b,c)
if(!a.bI(s))return
a.eJ(c,t.G.a(s),0,B.aK,null)},
uH(a,b,c){var s,r,q,p,o,n=t.N,m=A.v(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.w[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.az(p)
if(!(o>=0&&o<p))return A.e(q,o)
m.k(0,r,q[o])}}return m},
y3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.r)
for(s=a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cS(i,b)
s=i.length
if(0>=s)return A.e(i,0)
q=i[0]
if(1>=s)return A.e(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aG(B.a.gN(i).a,s,s)
r=p.c
n=A.aG(B.a.gN(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.w[m]
k=o.h(0,l)
j=s.eC(l,k==null?"":k)
k=j.length
if(k!==0){k=b.az(k)
if(!(k>=0&&k<j.length))return A.e(j,k)
o.k(0,l,j[k])}}a.du(q.a,o,B.a.gN(i).b)
a.du(p.a,n,B.a.gN(r).b)},
y4(a,b){var s,r,q=A.f([],t.r)
for(s=a.b,r=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.az(r)
if(!(r>=0&&r<q.length))return A.e(q,r)
s.ae(0,q[r].a)},
y8(a,b,c){var s,r,q=A.f([],t.r)
for(s=a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.az(s)
if(!(s>=0&&s<q.length))return A.e(q,s)
A.uG(a,b,q[s],null)},
y6(a,b,c){var s=c+1,r=A.uH(a,b,s)
if(!a.bI(r))return
a.eJ(s,t.G.a(r),0,B.aK,null)},
y7(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gN(b.c).c===B.al}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gN(b.c).c===B.al}if(c===21)return b.e
return!1},
md:function md(a){this.a=a},
zo(a){var s,r,q,p,o=t.N,n=A.v(o,t.a)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p=A.aH(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.pz(n)},
nA(a,b,c){var s,r,q,p=t.z
p=A.v(p,p)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.jb(A.bW(p,q,q),b,c)},
uX(a){var s=t.N
return A.nA(t.P.a(a.h(0,"fields")).br(0,new A.nB(),s,s),A.aC(a.h(0,"shakiness")),A.ye(B.ft,A.B(a.h(0,"hand")),t.bU))},
yd(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.f([],t.b1)
for(s=J.S(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.uX(r.a(s.gp())))
s=A.aD(a.h(0,"corroborator"))
q=A.X(a.h(0,"locked"))
p=A.w_(a.h(0,"lastReadDay"))
return new A.bH(n,m,l,s,q,p,o==null?null:A.uX(r.a(o)))},
dg:function dg(a,b){this.a=a
this.b=b},
pz:function pz(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function nB(){},
nC:function nC(a){this.a=a},
bH:function bH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
uU(a){return new A.nn(a,A.v(t.S,t.R),A.ab(t.N),A.f([],t.t))},
yC(a,b){var s,r,q,p,o=A.uU(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.xw(s.a(b.h(0,"tags")),t.N))
for(s=J.S(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.yd(r.a(s.gp()))
q.k(0,p.a,p)}return o},
nn:function nn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
nu:function nu(a,b){this.a=a
this.b=b},
lM:function lM(){},
dH:function dH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lN:function lN(){},
nz:function nz(){},
ny:function ny(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
o6:function o6(){},
o5:function o5(a,b){this.b=a
this.c=b},
o7:function o7(){},
tr(a){if(!isFinite(0))A.k(A.aF(0,"interpolation",null))
return new A.ox(a)},
h1:function h1(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
ox:function ox(a){this.a=a},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
ow(a,b,c,d,e){var s="cf4ea370b9ee-24c15a2a97a2-dirty",r=A.kS("RENDERER_SHA"),q=A.kS("GAME_SHA"),p=A.kS("DART_SDK_VERSION"),o=A.kS("LOCKFILE_SHA256"),n=A.kS("PROJECT_VERSION"),m=A.jc(b,A.M(b).c)
m=A.N(m,A.p(m).c)
B.a.X(m)
m=new A.ov(a,e,s,A.ar(m,t.N),r,q,p,o,n,c,d)
m.jx(a,s,b,c,d,q,o,e,n,r,p)
return m},
kS(a){var s=B.fY.h(0,a)
return s.length===0?null:s},
ov:function ov(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
uE(a,b,c,d,e,f,g){var s=A.N(f,t.ad)
if(b<0||a<0||e<0)A.k(A.a1("saved day-loop resources must not be negative",null,null))
return new A.m4(c,g,b,a,e,d===!0,s)},
xX(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.dV)
s=A.f([],t.b2)
for(r=J.S(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.d(B.e4)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aN(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.dR)
f=A.eR(new A.P(B.bY,q.a(new A.m5(h)),p),o)
e=A.eR(new A.P(B.c3,n.a(new A.m6(g)),m),l)
if(f==null||e==null)throw A.d(B.ep)
B.a.l(s,new A.f_(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aN(d)||!A.aN(c)||!A.aN(b)||!A.bT(a))throw A.d(B.ec)
return A.uE(c,d,a1,a,b,s,a3)},
by:function by(a,b){this.a=a
this.b=b},
bd:function bd(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
m5:function m5(a){this.a=a},
m6:function m6(a){this.a=a},
j1:function j1(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
pD:function pD(a,b){this.b=a
this.c=b},
ed:function ed(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
nf:function nf(a){this.c=a},
nh:function nh(a,b){this.a=a
this.b=b},
ni:function ni(){},
v7(){var s=A.tW(B.o),r=A.tW(B.o),q=new A.oD(B.D,s,r)
if(!isFinite(0))A.k(B.dH)
if(!B.a.a5(r,B.a.gck(s)))A.k(B.ed)
if(q.a===B.D&&q.b!==0&&!q.e)A.k(B.dL)
return q},
tW(a){var s,r,q,p=A.f([],t.s),o=A.ab(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.eo)
B.a.l(p,q)}return p},
c0:function c0(a,b){this.a=a
this.b=b},
oC:function oC(){},
cv:function cv(){},
oD:function oD(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
iO:function iO(a,b){this.a=a
this.b=6
this.c=b},
x1(a){var s=B.d.K(a,0,1)
if(s<=0.5)return A.wj(4491468,16777215,s*2)
return A.wj(16777215,16759637,(s-0.5)*2)},
x2(a){var s=B.d.K(a,0,1)
return new A.c(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga6()},
wj(a,b,c){var s,r=new A.rc(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.j4()
s=r.$1(8)
if(typeof s!=="number")return s.j4()
r=r.$1(0)
if(typeof r!=="number")return A.l4(r)
return(q<<16|s<<8|r)>>>0},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
f1(a){var s,r,q=A.v(t.N,t.z)
for(s=a.gL(),s=s.gt(s);s.m();){r=s.gp()
q.k(0,B.c.n(r.a),r.b)}return q},
pb:function pb(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
pc:function pc(){},
pd:function pd(){},
ec:function ec(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a,b){this.a=a
this.b=b},
pe:function pe(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
pf:function pf(){},
pg:function pg(){},
xC(a){var s,r,q,p
if(!t.f.b(a)||!J.a6(a.h(0,"version"),1))throw A.d(B.dJ)
s=new A.l9()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.tO(a.h(0,"uiScale"))
if(p==null)p=null
return new A.d7(r,q,p,s.$1(a.h(0,"captions")))},
d7:function d7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
l9:function l9(){},
lj:function lj(a,b){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0},
ll:function ll(a){this.a=a},
lk:function lk(a,b){this.a=a
this.b=b},
xI(a){var s
if(!t.f.b(a)||!J.a6(a.h(0,"version"),1))throw A.d(B.e9)
s=new A.lw()
return new A.d8(s.$1$2(B.aR,a.h(0,"output"),t.cK),s.$1$2(B.aO,a.h(0,"dynamicRange"),t.cS),s.$1$2(B.aN,a.h(0,"reverb"),t.f1),s.$1$2(B.aM,a.h(0,"ducking"),t.oA))},
c9:function c9(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lw:function lw(){},
lx:function lx(a,b){this.a=a
this.b=b},
ly:function ly(a){this.a=a},
lP:function lP(a){this.a=a
this.b=null},
iv(a,b,c,d,e,f,g){var s,r=t.z
r=A.v(r,r)
r.k(0,"moveForward","KeyW")
r.k(0,"moveBack","KeyS")
r.k(0,"moveLeft","KeyA")
r.k(0,"moveRight","KeyD")
r.k(0,"interact","KeyE")
r.k(0,"journal","KeyJ")
r.k(0,"sleep","KeyL")
r.k(0,"pause","Escape")
if(a!=null)r.I(0,a)
s=t.N
s=new A.eI(f,c,g,d,e,b,A.bW(r,s,s))
s.C()
return s},
eI:function eI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
m1:function m1(){},
m2:function m2(){},
d9:function d9(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
this.b=b},
cM:function cM(a,b){this.a=a
this.c=b},
it:function it(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
xV(a){var s=t.N,r=t.m
r=new A.iu(A.iv(null,!1,1,!1,!1,1,1),A.v(s,r),A.v(s,r),A.v(s,r),a,A.b(a.createElement("div")))
r.aK(a)
r.jp(a)
return r},
iu:function iu(a,b,c,d,e,f){var _=this
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
m_:function m_(a,b){this.a=a
this.b=b},
m0:function m0(a){this.a=a},
lZ:function lZ(a,b){this.a=a
this.b=b},
lX:function lX(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
y0(a){var s=A.f([],t.Y)
s=new A.m8(A.A(a,"div","door",null),s)
s.jr(a)
return s},
m8:function m8(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.z=_.y=_.x=_.w=null
_.Q=!1},
m9:function m9(a,b){this.a=a
this.b=b},
ma:function ma(a){this.a=a},
mb:function mb(a,b){this.a=a
this.b=b},
mc:function mc(a,b){this.a=a
this.b=b},
ya(a){var s=new A.mf(a,A.b(a.createElement("div")))
s.aK(a)
s.js(a)
return s},
mf:function mf(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
mg:function mg(a){this.a=a},
uK(a){var s
if(!t.f.b(a)||!J.a6(a.h(0,"version"),1))throw A.d(B.e8)
s=new A.df(1,B.a.aZ(B.bZ,new A.mP(a),new A.mQ()),A.B(a.h(0,"renderScale")),A.X(a.h(0,"dynamicResolution")),A.B(a.h(0,"frameTarget")),A.B(a.h(0,"antialiasing")),A.B(a.h(0,"textureQuality")))
s.C()
return s},
iW(a,b){var s=b==null?B.aJ:b
return new A.mR(s,a==null?B.aJ:a)},
wU(a,b){var s,r,q
a.C()
s=A.f([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.ds(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.ds("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fQ(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.bR&&b.a<2){q=q.fR(B.aI)
B.a.l(s,"High preset was reduced to Standard")}return new A.mK(q,A.ar(s,t.N))},
cc:function cc(a,b){this.a=a
this.b=b},
df:function df(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mP:function mP(a){this.a=a},
mQ:function mQ(){},
mR:function mR(a,b){this.a=a
this.b=b},
mJ:function mJ(a,b){this.a=a
this.b=b},
mK:function mK(a,b){this.a=a
this.b=b},
ym(a){var s=new A.iV(A.v(t.N,t.m),B.aJ,a,A.b(a.createElement("div")))
s.aK(a)
s.jt(a)
return s},
iV:function iV(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
mN:function mN(a){this.a=a},
mO:function mO(a){this.a=a},
mM:function mM(a,b,c){this.a=a
this.b=b
this.c=c},
mL:function mL(a){this.a=a},
yn(a){var s=new A.mT(a,A.b(a.createElement("div")))
s.aK(a)
s.ju(a)
return s},
mT:function mT(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
mU:function mU(a){this.a=a},
no:function no(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
np:function np(a){this.a=a},
nq:function nq(a){this.a=a},
nr:function nr(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function ns(){},
nt:function nt(){},
A(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
w7(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.f([],t.Y)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
fW:function fW(){},
b2:function b2(a,b){this.a=a
this.b=b},
cr:function cr(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(){},
o1:function o1(){},
bK:function bK(a,b,c){this.a=a
this.c=b
this.d=c},
o_:function o_(a){this.a=a},
o2:function o2(a){this.a=a},
cs:function cs(a,b){this.a=a
this.b=b},
o3:function o3(a,b){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
o4:function o4(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
oe:function oe(a){this.a=a
this.b=null},
z4(a){var s=new A.oI(a,A.b(a.createElement("div")))
s.aK(a)
s.jz(a)
return s},
oI:function oI(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
oJ:function oJ(a,b){this.a=a
this.b=b},
oK:function oK(a){this.a=a},
oL(a,b){var s=t.N,r=t.m
r=new A.h7(b,A.v(s,r),A.v(s,r),A.v(s,t.aL),B.ac,A.v(s,r),B.az,A.v(s,r),a,A.b(a.createElement("div")))
r.aK(a)
r.jA(a,b)
return r},
h7:function h7(a,b,c,d,e,f,g,h,i,j){var _=this
_.f=a
_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cx=b
_.cy=c
_.db=d
_.fx=_.fr=_.dy=_.dx=null
_.fy=e
_.go=f
_.id=g
_.k1=h
_.a=i
_.b=j
_.e=_.d=_.c=null},
oW:function oW(a){this.a=a},
oX:function oX(a){this.a=a},
oY:function oY(a,b){this.a=a
this.b=b},
oZ:function oZ(a){this.a=a},
p_:function p_(a){this.a=a},
oS:function oS(a,b){this.a=a
this.b=b},
oT:function oT(a){this.a=a},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
oR:function oR(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a){this.a=a},
oO:function oO(a){this.a=a},
oP:function oP(a){this.a=a},
oQ:function oQ(a){this.a=a},
oV:function oV(a,b,c){this.a=a
this.b=b
this.c=c},
oU:function oU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p1(a){return B.a.aZ(B.C,new A.p2(a),new A.p3(a))},
z5(){var s,r,q=A.v(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
cW(a,b){var s=t.z
s=A.dj(A.z5(),s,s)
if(a!=null)s.I(0,a)
s=new A.p0(b,A.bW(s,t.N,t.K))
s.jB(a,b)
return s},
va(a){var s,r=t.f
if(!r.b(a)||!J.a6(a.h(0,"version"),1))throw A.d(B.em)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.dU)
return A.cW(A.aG(s,t.N,t.K),A.a(a.h(0,"version")))},
bc:function bc(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
p2:function p2(a){this.a=a},
p3:function p3(a){this.a=a},
p0:function p0(a,b){this.a=a
this.b=b},
tv(a,b){var s=b==null?A.cW(null,1):b
return new A.p4(s,a==null?A.cW(null,1):a)},
z6(a,b){var s,r,q,p,o,n,m,l=A.v(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.jy(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cJ(r)
J.bG(l,s.a,r)}catch(n){if(!(A.ag(n) instanceof A.G))throw n}}m=A.cW(l,1)
return A.tv(m,m)},
p4:function p4(a,b){this.a=a
this.b=b},
z7(a){var s=new A.p8(a,A.b(a.createElement("div")))
s.aK(a)
s.jC(a)
return s},
p8:function p8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
p9:function p9(a,b,c){this.a=a
this.b=b
this.c=c},
xF(a){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.od)
for(s=a.d,s=new A.T(s,A.p(s).i("T<1,2>")).gt(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gL(),n=n.gt(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.c7(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.lh())
return new A.lg(A.ar(i,t.ot),A.ab(t.N))},
c7:function c7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lg:function lg(a,b){this.a=a
this.b=b},
li:function li(){},
lh:function lh(){},
zn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.jL
s=t.g
r=A.v(s,t.kz)
q=A.p(e).i("a8<1>")
p=A.N(new A.a8(e,q),q.i("o.E"))
B.a.X(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=e.h(0,k).gL(),j=j.gt(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bA(new A.bP(B.jx,k+" has an out-of-range authored day "+h+"."))
g=A.zm(k,h,i.b,m)
if(g instanceof A.bA)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.k(0,new A.bz(k,h,f.a,f.b),o.a(g).a)}}return new A.k6(new A.k5(r,A.ab(t.N),A.ab(s),A.f([],t.bl),B.K))},
zm(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.v(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bX[p]
n=o.b
m=n+"."
l=A.f([],q)
for(k=a0.gL(),k=k.gt(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.R(h,m))continue
g=A.jz(B.b.bf(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bA(new A.bP(B.jy,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.c2
B.a.l(l,new A.c1(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.pt())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bA(new A.bP(B.cG,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bA(new A.bP(B.cG,a+" day "+s+" has no authored tiers."))
return new A.kv(c)},
k5:function k5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
px:function px(a){this.a=a},
pw:function pw(a){this.a=a},
pu:function pu(a){this.a=a},
pv:function pv(){},
pt:function pt(){},
k6:function k6(a){this.a=a},
kv:function kv(a){this.a=a},
C5(a){var s,r,q,p=A.ab(t.N)
for(s=new A.T(a,A.p(a).i("T<1,2>")).gt(0);s.m();){r=s.d
for(q=r.b.gao(),q=q.gt(q);q.m();)if(q.gp().gT().S(0,new A.rx())){p.l(0,r.a)
break}}s=A.N(p,p.$ti.c)
B.a.X(s)
return s},
C4(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.aH(b,!0,s)
B.a.X(r)
q=new A.f4()
q.cU((a^913741)>>>0)
p=q.az(4)
if(!(p>=0&&p<4))return A.e(B.bW,p)
o=B.bW[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.aH(r,!0,s)
B.a.cS(m,q)
s=A.jO(m,0,A.dE(n,"count",t.S),A.M(m).c).by(0)
B.a.X(s)
return s},
rx:function rx(){},
vn(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aN(r)||!A.aN(q)||!A.aN(p)||r<1||q<0||q>23||p<0)return null
return new A.bz(s,r,q,p)},
zl(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.ab(t.N)
for(s=t.j,q=J.S(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.l(0,p)}o=A.ab(t.g)
for(s=J.S(s.a(a.h(0,j)));s.m();){n=A.vn(s.gp())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.xE(m)
if(!s&&l==null)return i
return new A.k7(r,o,l)},
xE(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.vn(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aN(p))if(!(p<0))if(A.bT(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.eR(new A.P(B.bX,t.nw.a(new A.ld(r)),t.na),t.kM)
k=A.eR(new A.P(B.fV,t.bQ.a(new A.le(q)),t.cB),t.nq)
m=o==null
j=m?h:A.eR(new A.P(B.fg,t.hg.a(new A.lf(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.ia(s,l,k,p,j,n)},
bs:function bs(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cA:function cA(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function ps(){},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
py:function py(){},
bA:function bA(a){this.a=a},
k3:function k3(a){this.a=a},
k2:function k2(a){this.a=a},
hg:function hg(a,b){this.a=a
this.b=b},
kZ(a){var s=$.bh
if(s===a&&B.b.u(A.B(a.b.className),"open"))return
if(s!=null)s.a3()
$.bh=a
if(a===$.cD.j())$.ft().io("gameplay.viewport")
else $.ft().mW(A.wo(a))
s=$.aX.j()
s.w=!1
s.bh()
$.dA=0
a.bs()},
wm(a,b,c){var s,r,q
$.i5=!0
s=$.bh
if(s!=null)s.a3()
$.bh=a
s=$.ft()
if(s.a.a.length===0)s.io(c)
r=A.N(s.a.a,t.lf)
r.push(new A.cT(b,B.a3,c))
q=s.a
s.a=new A.dl(r,q.b,q.c)
s.k6(b)
s=$.aX.j()
s.w=!1
s.bh()
$.dA=0
a.bs()
$.i5=!1},
fm(a){var s,r,q,p,o,n,m,l=null
if($.i5)return
$.i5=!0
a.a3()
$.bh=null
s=$.ft().li()
$.i5=!1
r=s.a
if(r===B.cn){$.dA=0
r=$.aX.j()
r.bh()
r.w=!0
q=A.i(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.cm)return
r=s.c.a
r=r.length===0?l:B.a.gN(r)
p=r==null?l:r.a
A:{if(B.aV===p){r=$.cD.j()
break A}if(B.aW===p){r=$.hY.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bh=r
n=$.aX.j()
n.w=!1
n.bh()
$.dA=0
r.bs()
m=o==null?l:A.i(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
rl(a){if($.bh===a&&B.b.u(A.B(a.b.className),"open"))a.a3()
else A.kZ(a)},
er(a){var s
if($.i5)return
if($.bh===a)$.bh=null
if(a===$.cD.j())$.ft().bZ()
else $.ft().lX(A.wo(a))
$.dA=0
s=$.aX.j()
s.bh()
s.w=!0},
wo(a){if(a===$.cD.j())return B.ce
if(a===$.hY.j())return B.a3
if(a instanceof A.h7)return B.a3
if(a instanceof A.iV)return B.a3
if(a instanceof A.iu)return B.a3
if(a===$.hW.j())return B.hF
if(a===$.qh.j())return B.hG
if(a===$.hV.j())return B.hH
if(a===$.hU.j())return B.hJ
return B.hI},
qw(a,b){var s
a.smL(new A.qx())
a.smN(new A.qy())
a.smM(new A.qz())
a.smI(new A.qE())
a.smK(new A.qF())
a.smV(new A.qG())
a.smQ(new A.qH())
a.smP(new A.qI())
a.saQ(b?new A.qJ(a):new A.qK(a))
a.saR(b?new A.qL(a):new A.qA(a))
s=a.f
if(s===B.x)a.smB(new A.qB())
if(s===B.y){a.smA(new A.qC())
a.smO(new A.qD())}},
Ay(){var s=$.fd.j()
s.seb(new A.qt())
s.saQ(new A.qu())
s.saR(new A.qv())},
Bc(){var s,r,q,p,o,n=null
try{n=A.aD(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aE(n,null)
if(!t.f.b(r)||!J.a6(r.h(0,"version"),1))A.k(B.ej)
q=A.uK(r.h(0,"requested"))
$.r5=A.iW(A.uK(r.h(0,"effective")),q)}catch(s){$.r5=A.iW(null,null)}p=$.ut().a
o=A.wU(p,A.wa())
r=o.a
$.r5=A.iW(r,p)
$.fd.j().eA(p,r,o.b)
A.wr()},
wa(){var s,r,q,p,o=$.cE.j().gb7().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.R(p,"max-samples-"))continue
r=A.jz(B.b.bf(p,12),null)
if(r==null)r=1}return new A.mJ(r,B.a.u(o,"disjoint-timer-query"))},
wr(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.av($.ut().B(),null))}catch(s){}},
Ax(){var s=$.hT.j()
s.seb(new A.qq())
s.saQ(new A.qr())
s.saR(new A.qs())},
Bb(){var s,r,q,p,o,n,m,l,k,j="bindings",i="horizontalSensitivity",h="verticalSensitivity",g="holdToInteract",f=null
try{f=A.aD(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(f!=null)try{r=B.k.aE(f,null)
q=t.f
if(!q.b(r)||!J.a6(r.h(0,"version"),1)||!q.b(r.h(0,j)))A.k(B.ee)
p=A.aC(r.h(0,i))
o=A.aC(r.h(0,h))
n=A.X(r.h(0,"invertX"))
m=A.X(r.h(0,"invertY"))
l=A.X(r.h(0,g))
k=t.N
$.tT=A.iv(A.aG(q.a(r.h(0,j)),k,k),l,p,n,m,1,o)}catch(s){$.tT=A.iv(null,!1,1,!1,!1,1,1)}r=$.hT.j()
q=r.w=$.ta()
r.x=new A.it(q)
p=r.y
o=p.h(0,i)
if(o!=null)o.value=B.d.n(q.b)
p=p.h(0,h)
if(p!=null)p.value=B.d.n(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,g)
if(p!=null)p.checked=q.f
r.dg()
$.aX.j().ey($.ta().r)
A.wq()},
wq(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.av($.ta().B(),null))}catch(s){}},
Ba(){var s,r=null
try{r=A.aD(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.i_=A.xI(B.k.aE(r,null))}catch(s){$.i_=B.az}$.fb.j().iQ($.i_)
A.wp()
A.tN()},
wp(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.av($.i_.B(),null))}catch(s){}},
tN(){var s=$.bl
if(s==null)return
s.j_($.i_)},
B9(){var s,r=null
try{r=A.aD(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eq=A.xC(B.k.aE(r,null))}catch(s){$.eq=B.ac}$.eo.j().ex($.eq)
A.u1()
A.ql()},
u1(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.av($.eq.B(),null))}catch(s){}},
ql(){var s,r,q=$.eq,p=$.rk,o=$.ud,n=q.d
if(n==null)n=1
if(n<0.8||n>2)A.k(B.dS)
s=q.b
p=s==null?p:s
s=q.c
o=s==null?o:s
q=q.e===!0
$.l_=p
s=$.bD.j()
s.f=$.l_?0.5:1
r=A.i(A.b(v.G.document).documentElement)
s=r==null
if(!s)A.X(A.b(r.classList).toggle("reduced-motion",p))
if(!s)A.X(A.b(r.classList).toggle("photosensitivity-safe",o))
if(!s)A.X(A.b(r.classList).toggle("captions-enabled",q))
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.q(n*100)+"%")
s=$.J.j()
s.setAttribute("data-accessibility-reduced-motion",""+p)
s.setAttribute("data-accessibility-photosensitivity-safe",""+o)
s.setAttribute("data-accessibility-ui-scale",A.q(n))
s.setAttribute("data-accessibility-captions",""+q)
if($.vU){p=$.bB.j()
p.c=q
if(!q){q=p.b
q.textContent=""
q.className="caption-cue"}}},
AQ(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.r9(r,q)
r.addEventListener("change",A.U(new A.r7(s)))
q.addEventListener("change",A.U(new A.r8(s)))},
rE(){var s=0,r=A.bm(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$rE=A.bo(function(c7,c8){if(c7===1){o.push(c8)
s=p}for(;;)switch(s){case 0:c3=v.G
c4=A.i(A.b(c3.document).getElementById("game"))
if(c4==null){s=1
break}$.J.b=c4
$.tV=A.i(A.b(c3.document).getElementById("fps"))
$.bC.b=$.xl().c1(A.jZ().gbu().h(0,"renderer"))
A.AR()
a6=$.J.j()
a7=A.a(A.b(c3.window).innerWidth)>0?A.a(A.b(c3.window).innerWidth):800
a6.width=a7
a7=$.J.j()
a6=A.a(A.b(c3.window).innerHeight)>0?A.a(A.b(c3.window).innerHeight):600
a7.height=a6
n=A.i(c4.getContext("webgl2"))
if(n==null){$.bC.b=new A.dH(B.an,$.bC.j().b,$.bC.j().c,!0,"webgl2 unavailable")
h=B.aB.lS($.bC.j())
h.b_()
$.cE.b=h
A.wt()
A.dC("no-webgl2")
c3=A.i(A.b(c3.document).getElementById("credits"))
if(c3!=null)c3.textContent="this browser has no webgl2."
s=1
break}try{if($.bC.j().a===B.a6){a6=t.dg
a7=t.N
a8=t.hL
a9=t.p9
b0=t.S
b1=t.fP
b2=new A.hB(n,A.a($.J.j().width),A.a($.J.j().height),A.f([],a6),A.v(a7,t.l0),A.f([],t.jj),A.v(a7,a8),A.v(a7,a9),A.v(a7,a8),A.v(a7,a9),A.f([],a6),A.v(b0,a8),A.v(b0,a9),A.v(a7,t.bS),A.f([],t.jU),B.fv,A.v(a7,t.lu),A.v(a7,b1),A.v(a7,b1),B.ev,B.hM)}else b2=new A.f3(n,A.a($.J.j().width),A.a($.J.j().height),A.jZ().gbu().h(0,"render")==="legacy",$.bC.j().d,$.bC.j().e)
m=b2
$.bn=m instanceof A.hB?m:null
$.kU=m instanceof A.f3?m:null
a6=B.aB.dv($.bC.j(),m)
a6.b_()
$.cE.b=a6}catch(c6){l=A.ag(c6)
a6=$.bC.j()
$.bC.b=new A.dH(B.an,!0,a6.c,!0,"pixeldart initialization failed")
$.kU=new A.f3(n,A.a($.J.j().width),A.a($.J.j().height),A.jZ().gbu().h(0,"render")==="legacy",!0,$.bC.j().e)
a6=B.aB.dv($.bC.j(),$.kU)
a6.b_()
$.cE.b=a6
$.J.j().setAttribute("data-renderer-error",A.q(l))}A.wt()
p=4
A.dC("initializing")
$.bD.b=new A.lR(new A.c(0,0,0),new A.c(0,0,1),new A.c(0,1,0),new A.c(1,0,0))
$.rk=A.X(A.b(A.b(c3.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.ud=A.X(A.b(A.b(c3.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.l_=$.rk
a6=$.bD.j()
a6.f=$.l_?0.5:1
a6=A.b(c3.window)
a7=t.N
a8=A.O(["moveForward","KeyW","moveBack","KeyS","moveLeft","KeyA","moveRight","KeyD","interact","KeyE"],a7,a7)
a9=A.b(a6.document)
a8=new A.j0(a9,A.ab(a7),A.ab(a7),a8)
a6.addEventListener("keydown",A.U(a8.gkw()))
a6.addEventListener("keyup",A.U(a8.gky()))
a6.addEventListener("mousemove",A.U(a8.gkC()))
a9.addEventListener("pointerlockchange",A.U(a8.gkA()))
$.aX.b=a8
$.vQ.b=new A.iZ(A.f([],t.oX),t.lv)
a8=$.J.j()
a6=A.a(A.b(c3.window).innerWidth)>0?A.a(A.b(c3.window).innerWidth):800
a8.width=a6
a6=$.J.j()
a8=A.a(A.b(c3.window).innerHeight)>0?A.a(A.b(c3.window).innerHeight):600
a6.height=a8
A.dC("renderer")
if($.bC.j().a===B.an){a6=$.kU
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.h()}$.fl=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.d(h)}}A.dC("text")
a6=$.l7()
s=7
return A.ai(a6.bW(),$async$rE)
case 7:k=a6.ns()
j=A.zn(k)
if(!(j instanceof A.k6)){i=t.cq.a(j).a
h=i.b
throw A.d("Failed to build visitors: "+h)}$.aY.b=j.a
$.kP.b=A.xF(k)
h=A.v(a7,t.a)
for(a8=t.j,b4=0;b4<5;++b4){g=B.w[b4]
a9=A.B(g)
b0=a6.c
b0===$&&A.h()
b5=b0.h(0,a9)
a9=a8.b(b5)?A.aH(b5,!0,a7):B.o
J.bG(h,g,a9)}f=A.zo(h)
$.tM.b=new A.lQ(B.dl)
e=$.tM.j().n0(new A.rF(f))
if(e.a==null){h=B.by.az(2147483647)
if(!isFinite(480))A.k(A.aF(480,"daySeconds","must be finite and > 0"))
b6=new A.iO(1,480)
b6.b=10
b7=A.uU(f)
h=A.uI(42,1+h,A.uL(42),b6,b7,A.uE(6,16,b7,null,6,B.fw,b6),new A.iD(0,0,0,!1))}else{h=e.a
h.toString
h=A.uJ(h,f)}$.Z.b=h
h=$.tb()
a6=e.a
h.ek(a6==null?null:a6.c.h(0,"inventoryInspections"))
$.cE.j().aU(A.tr($.Z.j().gee()))
if(e.b!=null){h=e.b
h.toString
A.fn(h)}h=$.aY.j()
a6=A.C4($.Z.j().b,A.C5(k.b))
h.sje(A.jc(a6,A.M(a6).c))
A.dC("house")
$.a_.b=$.Z.j().c
a6=$.bn
if(a6!=null)a6.lh($.a_.j())
$.ep.b=$.Z.j().d
h=new A.c(5.5,1.65,3.5)
$.ue=$.u3=$.u8=h
d=h.ai(0,new A.c(0,1.3499999999999999,0))
$.hX.b=new A.im(d,J.uu(d,new A.c(0,1.2000000000000002,0)))
$.fc.b=new A.mi()
$.bE.b=A.v7()
$.aM="hall"
h=e.a
c=A.yL(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.mm($.a_.j())){h=c.b
$.ue=$.u3=$.u8=h
$.c5=c.c
$.es=c.d
$.aM=c.a
b=h.ai(0,new A.c(0,1.3499999999999999,0))
h=$.hX.j()
h.slj(b)
h.b=J.uu(b,new A.c(0,1.2000000000000002,0))
h=$.hX.j()
a6=$.a_.j()
a9=c.e
b0=c.f
h.nh($.aM,$.fu(),a6,b0,a9)
A.fn("restored position")}h=A.z4(A.b(c3.document))
h.smC(new A.rG())
h.saQ(new A.rH())
h.saR(new A.rS())
$.hY.b=h
h=A.b(c3.document)
a6=A.b(h.createElement("div"))
a9=new A.o3(h,a6)
a9.aK(h)
a6.setAttribute("aria-label","Pause menu")
A.b(a6.appendChild(A.A(h,"h1","journal-title","Paused")))
A.b(a6.appendChild(A.A(h,"p","settings-copy","The house waits. Choose what to do next.")))
b8=A.A(h,"nav","pause-actions",null)
b8.setAttribute("aria-label","Pause actions")
a9.bg(h,b8,B.cf,"resume")
a9.bg(h,b8,B.cg,"settings")
a9.bg(h,b8,B.ch,"controls")
a9.bg(h,b8,B.ci,"save now")
a9.bg(h,b8,B.cj,"help")
a9.bg(h,b8,B.ck,"back")
A.b(a6.appendChild(b8))
a9.smR(new A.rV())
a9.saQ(new A.rW())
a9.smT(new A.rX())
a9.smG(new A.rY())
a9.smS(new A.rZ())
a9.smJ(new A.t_())
a9.saR(new A.t0())
$.cD.b=a9
a9=$.Z.j().e
a6=$.ep.j()
$.Z.j()
$.kQ.b=new A.nh(a9,a6)
a6=A.b(c3.document)
a9=$.Z.j().e
h=$.ep.j()
b0=$.kQ.j()
b1=A.b(a6.createElement("div"))
b0=new A.no(a9,h,b0,a6,b1)
b0.aK(a6)
b1.setAttribute("aria-label","The Journal")
A.b(b1.appendChild(A.A(a6,"div","journal-title","The Journal")))
b9=A.A(a6,"div","journal-pages",null)
h=A.A(a6,"div","page page-left",null)
b0.y!==$&&A.E()
b0.y=h
a9=A.A(a6,"div","page page-right",null)
b0.z!==$&&A.E()
b0.z=a9
A.b(b9.appendChild(h))
A.b(b9.appendChild(a9))
A.b(b1.appendChild(b9))
A.b(b1.appendChild(b0.jM()))
c0=A.A(a6,"div","tape-roll",null)
A.b(c0.style).setProperty("width","8rem")
a9=A.A(a6,"div","tape-fill",null)
b0.as!==$&&A.E()
b0.as=a9
A.b(c0.appendChild(a9))
A.b(b1.appendChild(c0))
c1=A.A(a6,"div","consult",null)
A.b(c1.appendChild(A.A(a6,"div","consult-label","Cite an entry")))
a9=A.A(a6,"div","entry-picker",null)
b0.at!==$&&A.E()
b0.at=a9
h=A.A(a6,"div","consult-result",null)
b0.ax!==$&&A.E()
b0.ax=h
A.b(c1.appendChild(a9))
A.b(c1.appendChild(h))
A.b(b1.appendChild(c1))
c2=A.i(a6.documentElement)
if(t.m.b(c2)){A.b(c2.style).setProperty("--shake-max-deg","3deg")
A.b(c2.style).setProperty("--shake-max-px","2px")}$.hW.b=b0
$.hW.j().saR(new A.rI())
h=A.b(c3.document)
a6=A.A(h,"div","prompt",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
A.b(a6.style).setProperty("transition-duration","0.3s")
A.b(A.i(h.body).appendChild(a6))
$.vR.b=new A.oe(a6)
a6=A.b(c3.document)
h=A.A(a6,"div","broadcast",null)
h.setAttribute("role","status")
h.setAttribute("aria-live","polite")
h.setAttribute("aria-atomic","true")
A.b(A.i(a6.body).appendChild(h))
$.vP.b=new A.lP(h)
h=A.b(c3.document)
a6=A.A(h,"div","ambient-notice",null)
a9=A.A(h,"div","caption-cue",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
a9.setAttribute("aria-hidden","true")
a9.setAttribute("data-caption-kind","non-speech")
A.b(A.i(h.body).appendChild(a6))
A.b(A.i(h.body).appendChild(a9))
$.bB.b=new A.lj(a6,a9)
$.vU=!0
a9=A.y0(A.b(c3.document))
a9.smD(A.Cm())
a9.smF(A.Co())
a9.smE(A.Cn())
$.aL.b=a9
a9=e.a
a=A.zl(a9==null?null:a9.c.h(0,"visitors"))
if(a!=null&&$.aY.j().ek(a))A.Bm()
h=$.kP.j()
a6=e.a
h.ni(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(a8.b(a0))for(h=J.S(a0);h.m();){a1=h.gp()
if(A.aN(a1))$.rn.l(0,a1)}h=A.z7(A.b(c3.document))
h.smU(new A.rJ())
h.saR(new A.rK())
$.qh.b=h
h=A.yn(A.b(c3.document))
h.saR(new A.rL())
$.hV.b=h
$.fe.b=A.oL(A.b(c3.document),null)
$.hZ.b=A.oL(A.b(c3.document),B.F)
$.eo.b=A.oL(A.b(c3.document),B.y)
A.qw($.fe.j(),!1)
A.qw($.hZ.j(),!0)
A.qw($.eo.j(),!0)
A.B9()
A.AQ()
$.fd.b=A.ym(A.b(c3.document))
A.Ay()
A.Bc()
$.fb.b=A.oL(A.b(c3.document),B.x)
A.qw($.fb.j(),!0)
A.Ba()
$.hT.b=A.xV(A.b(c3.document))
A.Ax()
A.Bb()
h=A.ya(A.b(c3.document))
h.saR(new A.rM())
h.smH(new A.rN())
$.hU.b=h
h=e.a
a2=A.yc(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.ws(a2)
a3=$.fl
if(a3!=null){A.dC("world")
h=$.a_.j()
a6=a3
a7=new A.oA(h,a6,A.v(a7,t.L))
a7.jy(h,a6)
$.fh=a7}h=B.b.u(A.B(A.b(A.b(c3.window).location).search),"shaders=live")
$.wH=h
if(h){h=$.fl
if(h!=null)h.bw()}A.wv()
A.b(c3.window).addEventListener("resize",A.U(new A.rO()))
A.b(c3.window).addEventListener("keydown",A.U(new A.rP()))
A.b(c3.window).addEventListener("keyup",A.U(new A.rQ()))
A.b(c3.window).addEventListener("keydown",A.U(new A.rR()))
A.b(c3.window).addEventListener("click",A.U(new A.rT()))
$.J.j().addEventListener("click",A.U(new A.rU()))
A.fj()
A.dC("raf")
A.a(A.b(c3.window).requestAnimationFrame(A.U(A.wT())))
p=2
s=6
break
case 4:p=3
c5=o.pop()
a4=A.ag(c5)
a5=A.cH(c5)
A.rf(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bj(q,r)
case 2:return A.bi(o.at(-1),r)}})
return A.bk($async$rE,r)},
AR(){var s=v.G
A.b(s.window).addEventListener("error",A.U(new A.ra()))
A.b(s.window).addEventListener("unhandledrejection",A.U(new A.rb()))},
dC(a){if($.w1===a)return
$.w1=a
$.J.j().setAttribute("data-boot-phase",a)},
wt(){var s,r,q=$.cE.j().gb7(),p=$.J.j(),o=A.jZ().gbu().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.y))
p.setAttribute("data-renderer-diagnostics",B.k.av(q.B(),null))
p=$.bn
s=p==null?null:p.x
if(s!=null)$.J.j().setAttribute("data-renderer-profile-fallback",s)
p=$.kU
r=p==null?null:p.y
if(r!=null)$.J.j().setAttribute("data-renderer-frame-submits",A.q(r))},
ri(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bE.j().a!==B.D){A.fn("save unavailable during rupture")
return}try{r=$.tM.j()
q=$.Z.j()
p=t.N
o=t.z
s=A.v(p,o)
n=$.aM
m=$.fu()
l=$.c5
k=$.es
j=$.hX.j().d
j=j==null?null:j.a.a
i=$.hX.j().d
J.bG(s,"player",new A.jt(n,m,l,k,j,i==null?null:i.b).B())
n=$.aY.j()
m=A.tu(n.b,p)
l=A.tu(n.c,t.g)
n=n.e
J.bG(s,"visitors",new A.k7(m,l,n==null?null:new A.ia(n.a,n.b,n.d,n.f,n.e,n.r)).B())
n=$.kP.j().b
n=A.N(n,A.p(n).c)
B.a.X(n)
J.bG(s,"ambient",n)
n=A.N($.rn,A.p($.rn).c)
B.a.X(n)
J.bG(s,"unverifiables",n)
J.bG(s,"inventoryInspections",$.tb().B())
n=$.tU
if(n!=null)J.bG(s,"ending",A.O(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.uN(q.c).B()
k=q.d
r.nu(A.v8(s,A.O(["houseSeed",n,"runSeed",m,"house",l,"time",A.O(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B()],p,o),2))
A.fn(a)}catch(h){A.fn("save failed")}},
fn(a){var s=A.i(A.b(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.yk(B.ds,new A.rj(s),t.H)},
rf(a,b){var s,r,q,p
A.dC("error")
s=A.q(a)
r=A.CA(s,"\n"," ")
s=$.tV
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.J.j().setAttribute("data-boot-error",p)
A.b(s.console).error(p)},
vY(){var s,r
if($.tP)return
$.tP=!0
s=$.bl
r=s==null
if(!r)s.bZ()
if(!r)s.eE("music")
B.a.l($.cF,"arm")},
fj(){var s=0,r=A.bm(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fj=A.bo(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ai(A.fi(),$async$fj)
case 2:o=null
q=4
s=7
return A.ai(A.aO(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$fj)
case 7:n=b
i=A
s=8
return A.ai(A.aO(A.b(n.json()),t.X),$async$fj)
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
if(k!=null&&typeof k==="string"){l=A.i(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.B(k)}s=9
return A.ai(A.mx(A.f([A.rd(o),A.r6(o)],t.iw),t.H),$async$fj)
case 9:return A.bj(null,r)
case 1:return A.bi(p.at(-1),r)}})
return A.bk($async$fj,r)},
fi(){var s=0,r=A.bm(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fi=A.bo(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.fr[f]
p=7
s=10
return A.ai(A.aO(A.b(A.b(i.window).fetch(n)),h),$async$fi)
case 10:m=a0
s=11
return A.ai(A.aO(A.b(m.text()),g),$async$fi)
case 11:l=a0
k=A.xJ(B.k.aE(l,null))
e=$.a_.b
if(e===$.a_)A.k(A.a9(""))
k.eq(e)
e=$.J.b
if(e===$.J)A.k(A.a9(""))
e.setAttribute("data-house-manifest","validated")
e=$.J.b
if(e===$.J)A.k(A.a9(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.ai(A.kW(),$async$fi)
case 12:s=13
return A.ai(A.kX(),$async$fi)
case 13:s=1
break
p=2
s=9
break
case 7:p=6
b=o.pop()
j=A.ag(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:$.J.j().setAttribute("data-house-manifest","unavailable")
A.b(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.bj(q,r)
case 2:return A.bi(o.at(-1),r)}})
return A.bk($async$fi,r)},
kW(){var s=0,r=A.bm(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$kW=A.bo(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.fk[c]
p=7
s=10
return A.ai(A.aO(A.b(A.b(g.window).fetch(n)),f),$async$kW)
case 10:m=b1
s=11
return A.ai(A.aO(A.b(m.text()),e),$async$kW)
case 11:l=b1
b=B.k.aE(l,null)
b=h.b(b)?b:A.d3("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.d3("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aN(a)?a:A.d3("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.d3("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aH(a,!0,d):A.d3("assets is not a list")
a4=A.M(a3)
a5=a4.i("Q<1,cn>")
a3=A.N(new A.Q(a3,a4.i("cn(1)").a(A.Ch()),a5),a5.i("a2.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aH(a,!0,d):A.d3("placements is not a list")
a5=A.M(a4)
a6=a5.i("Q<1,cd>")
a4=A.N(new A.Q(a4,a5.i("cd(1)").a(A.Ci()),a6),a6.i("a2.E"))
a4.$flags=1
k=new A.n_(a1,a2,a0,a3,a4)
a1=$.a_.b
if(a1===$.a_)A.k(A.a9(""))
k.eq(a1)
$.kT=k
a1=$.bn
if(a1!=null)a1.iR(k)
a1=$.J.b
if(a1===$.J)A.k(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.J.b
if(a1===$.J)A.k(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.J.b
if(a1===$.J)A.k(A.a9(""))
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
case 5:$.J.j().setAttribute("data-house-inventory","unavailable")
A.b(g.console).warn("authored house inventory unavailable: "+A.q(a8))
case 1:return A.bj(q,r)
case 2:return A.bi(o.at(-1),r)}})
return A.bk($async$kW,r)},
kX(){var s=0,r=A.bm(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$kX=A.bo(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.kT
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.fH[a4]
p=7
s=10
return A.ai(A.aO(A.b(A.b(a1.window).fetch(m)),a2),$async$kX)
case 10:l=b5
s=11
return A.ai(A.aO(A.b(l.text()),e),$async$kX)
case 11:k=b5
a5=B.k.aE(k,null)
a5=a0.b(a5)?a5:A.fg("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aH(a6,!0,a3):A.fg("emitters is not a list")
a8=A.M(a7)
a9=a8.i("Q<1,cm>")
a7=A.N(new A.Q(a7,a8.i("cm(1)").a(A.Cy()),a9),a9.i("a2.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aN(a6)?a6:A.fg("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.fg("sourceRef is not a string")
j=new A.n5(a8,a9,a7)
a7=$.a_.b
if(a7===$.a_)A.k(A.a9(""))
j.nq(a7,b2)
$.wc=j
i=A.v(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gL(),a9=a9.gt(a9);a9.m();){g=a9.gp()
J.bG(i,h.a+":"+g.a,A.f([g.b],c))}}a7=$.a_.b
if(a7===$.a_)A.k(A.a9(""))
a8=A.xG(i)
a9=new A.lt(a7,A.bW(B.cc,e,d),a8)
a9.jo(a8,a7,B.cc)
$.qn=a9
a7=$.bl
if(a7!=null){a7.ch=a9
a7.bm()}a7=$.J.b
if(a7===$.J)A.k(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.J.b
if(a7===$.J)A.k(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.J.b
if(a7===$.J)A.k(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.J.b
if(a7===$.J)A.k(A.a9(""))
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
case 5:$.qn=null
$.J.j().setAttribute("data-audio-planner","unavailable")
$.J.j().setAttribute("data-house-soundscape","unavailable")
A.b(a1.console).warn("authored house soundscape unavailable: "+A.q(n))
case 1:return A.bj(q,r)
case 2:return A.bi(o.at(-1),r)}})
return A.bk($async$kX,r)},
tS(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.S(t.a.b(s)?s:new A.ca(s,A.M(s).i("ca<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.B(q))}},
r6(a){var s=0,r=A.bm(t.H),q,p,o,n,m,l
var $async$r6=A.bo(function(b,c){if(b===1)return A.bi(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.v(n,n)
n=a==null
A.tS(A.i(n?null:a.sfx),m,"")
A.tS(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.B(p))
l=$
s=2
return A.ai(A.lA(m,$.a_.j()),$async$r6)
case 2:o=l.bl=c
o.ch=$.qn
o.bm()
A.Bd()
A.wx(o)
A.tN()
A.wy()
if($.tP){o.bZ()
o.eE("music")}return A.bj(null,r)}})
return A.bk($async$r6,r)},
ua(a,b){var s
A.wI(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Bj(a){var s,r
try{s=A.aD(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
vV(a,b){var s
if(a!=="brightness")return
s=A.i(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.q(B.d.K(b,0.6,1.4))+")")},
qm(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.i(A.b(v.G.document).documentElement)
if(r!=null)A.X(A.b(r.classList).toggle(s,b))},
wy(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.aC($.cJ().a.c_(o)),k=A.X($.cJ().a.c_(n)),j=A.X($.cJ().a.c_(m))
for(s=[$.fe.j(),$.hZ.j(),$.eo.j(),$.fb.j()],r=0;r<4;++r)s[r].ez(o,l)
A.vV(o,l)
for(s=[$.fe.j(),$.hZ.j(),$.eo.j(),$.fb.j()],r=0;r<4;++r){q=s[r]
p=q.fr
if(p!=null)p.checked=k
p=q.fx
if(p!=null)p.checked=j}A.qm(n,k)
A.qm(m,j)},
u9(a,b){var s
A.wI(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Bi(a){var s,r
try{s=A.aD(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
wx(a){var s,r,q,p,o,n,m,l,k,j=A.v(t.N,t.i)
for(s=0;s<5;++s){r=B.fq[s]
q=$.cJ().a.b.h(0,r)
j.k(0,r,A.aC(q==null?A.k(A.l("setting missing from profile: "+r)):q))}p=A.X($.cJ().a.c_("muted"))
o=A.X($.cJ().a.c_("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.b2(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cP(o)
for(q=[$.fe.j(),$.hZ.j(),$.eo.j(),$.fb.j()],n=j.$ti.i("dZ<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.dZ(j,j.r,j.e,n);m.m();){k=m.d
l.ez(k.a,k.b)}m=l.dx
if(m!=null)m.checked=p
m=l.dy
if(m!=null)m.checked=o}},
vW(){var s=$.bl
if(s!=null)A.wx(s)
A.wy()},
Bd(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aD(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aE(k,null)
if(!t.f.b(r)||!J.a6(r.h(0,"version"),1))A.k(B.dT)
q=A.va(r.h(0,"requested"))
$.wF=A.tv(A.va(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.x
o=A.v(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.Bi(l))}}r=A.v(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Bj(p))}}$.wF=A.z6(o,r)
A.re()},
re(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.av($.cJ().B(),null))}catch(s){}},
wI(a,b){var s,r,q,p,o,n,m
switch(A.p1(a).d.a){case 0:r=A.jy(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.cJ()
q=s
A.p1(a).cJ(q)
p=t.N
o=t.K
n=A.dj(r.a.b,p,o)
n.k(0,a,q)
r.a=A.cW(n,1)
n=s
A.p1(a).cJ(n)
o=A.dj(r.b.b,p,o)
o.k(0,a,n)
r.b=A.cW(o,1)
A.re()}catch(m){if(!(A.ag(m) instanceof A.G))throw m}},
rd(a){var s=0,r=A.bm(t.H),q,p,o
var $async$rd=A.bo(function(b,c){if(b===1)return A.bi(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.v(p,p)
A.tS(A.i(a==null?null:a.tex),o,"")
p=$.fl
p=p==null?null:p.aG(o)
if(p==null)p=A.te(t.H)
q=$.bn
q=q==null?null:q.aG(o)
s=2
return A.ai(A.mx(A.f([p,q==null?A.te(t.H):q],t.iw),t.H),$async$rd)
case 2:return A.bj(null,r)}})
return A.bk($async$rd,r)},
wv(){var s,r,q=v.G,p=A.a(A.b(q.window).innerWidth),o=A.a(A.b(q.window).innerHeight)
q=$.J.j()
s=p>0?p:800
q.width=s
s=$.J.j()
q=o>0?o:600
s.height=q
q=$.fl
if(q!=null)q.aS(A.a($.J.j().width),A.a($.J.j().height))
$.cE.j().aS(A.a($.J.j().width),A.a($.J.j().height))
q=$.bn
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.J.j().setAttribute("data-renderer-surface",r)},
Bh(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
A.aC(c2)
try{s=c2
if(!$.wb){$.u_=s
$.wb=!0}e=s
d=$.u_
if(typeof e!=="number")return e.ai()
r=(e-d)/1000
$.u_=s
e=r
if(typeof e!=="number")return e.cO()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.ah()
if(e>0.25)r=0.25
A.BF(r)
if(!$.u0&&$.bh==null){e=$.dA
d=r
if(typeof d!=="number")return A.l4(d)
d=$.dA=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.cO()
c=c<10}else c=!1
if(!c)break
$.u3=$.fu()
d=$.Z.b
if(d===$.Z)A.k(A.a9(""))
d.ld(0.008333333333333333)
d=$.xn()
c=$.Z.b
if(c===$.Z)A.k(A.a9(""))
c=c.gar()
b=$.Z.b
if(b===$.Z)A.k(A.a9(""))
d=d.dl(c.a,b.gar().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.r)(d),++a){p=d[a]
B.a.l($.cF,"clock:"+p.a)}d=$.xo()
c=$.Z.b
if(c===$.Z)A.k(A.a9(""))
c=c.gar()
b=$.Z.b
if(b===$.Z)A.k(A.a9(""))
d=d.dl(c.a,b.gar().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.r)(d),++a){o=d[a]
B.a.l($.cF,"service:"+o.a+":"+o.b)}A.BI()
d=$.aY.b
if(d===$.aY)A.k(A.a9(""))
c=$.Z.b
if(c===$.Z)A.k(A.a9(""))
d.f=c.r.c>=0.5
d=d.d
a0=A.aH(d,!1,e)
a0.$flags=3
a1=a0
B.a.H(d)
if(a1.length!==0){d=$.Z.b
if(d===$.Z)A.k(A.a9(""))
d.n1(a1)}A.BE()
A.BH()
A.BG()
A.BD(0.008333333333333333)
d=$.fc.b
if(d===$.fc)A.k(A.a9(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.bE.b
if(d===$.bE)A.k(A.a9(""))
n=d.a!==B.D
c=$.a_.b
if(c===$.a_)A.k(A.a9(""))
d.le(0.008333333333333333,c)
if(n){d=$.bE.b
if(d===$.bE)A.k(A.a9(""))
d=d.e}else d=!1
if(d)A.ww(!0)
d=$.dA-0.008333333333333333
$.dA=d
c=q
if(typeof c!=="number")return c.a_()
q=c+1}m=B.d.K(d/0.008333333333333333,0,1)
e=$.ue=A.vm($.xp(),$.fu(),m)
l=$.bl
if(l!=null){d=l
c=Math.sin($.c5)
b=Math.cos($.c5)
a2=A.b(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.ae(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.iT($.aM)
for(e=$.cF.length,a=0;a<$.cF.length;$.cF.length===e||(0,A.r)($.cF),++a){k=$.cF[a]
A.AC(l,k)}B.a.H($.cF)
$.J.j().setAttribute("data-audio-spatial-active",""+l.CW.a)
e=$.J.j()
d=l.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.J.j()
e=l.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}j=$.fl
if(j!=null){$.bD.j().e9($.i7(),$.c5,$.es)
e=$.bh===$.hW.j()?1:0
j.cq=e
$.wi=r
$.cE.j().aU(A.tr($.Z.j().gee()))}else if($.bC.j().a===B.a6){$.bD.j().e9($.i7(),$.c5,$.es)
e=$.bn
if(e!=null){d=$.bD.j()
c=d.a
a3=new A.D(c.a,c.b,c.c)
c=d.b
a4=new A.D(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.v0(a3,a4,new A.D(d.a,d.b,d.c))
a7=A.tm(a5,60,1.0471975511965976,0.1)
e.go=new A.eF(a6,a7,a7.a1(0,a6),a3,a4,0.1,60,a5)}e=$.bn
if(e!=null)e.j3($.a_.j(),$.aM)
e=$.bn
if(e!=null)e.iS($.a_.j(),$.aM,$.i7(),$.ep.j().gbB(),Math.sin(3.141592653589793*$.ep.j().gbB()))
if($.wh!==$.bE.j().a){$.wh=$.bE.j().a
$.u4=$.u4+1}e=$.bn
if(e!=null){d=s
if(typeof d!=="number")return d.ny()
d/=1000
c=$.u4
b=A.a(Math.max(0,$.Z.j().b))
if(!isFinite(d)||d<0)A.k(A.aF(d,"timeSeconds",null))
if(b<0)A.k(A.w("frame clock seeds must be non-negative",null))
e.k4=d
e.ok=c
e.p1=b}e=$.bn
if(e!=null){d=$.bE.j()
c=$.l_
a8=d.a
a9=d.geD()
b0=a9>0?B.d.K(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.b5
b=a8===B.T?0.45:1
if(d>=1)b3=a8===B.a7?b0:1
else b3=0
if(d>=2)d=a8===B.b3?b0:1
else d=0
b4=b1?320:0
b5=b1?5:8
b6=b2?1:0
b7=b2?b0:0
b8=b2?b0:0
b9=b2?b0:0
c0=b2?b0:0
e.k1=new A.jv(b,0.38,0.28,0.18,0.015,b3,d,b4,b5,b6,b7,b8,b9,c0,b2?b0:0,c)}$.cE.j().aU(A.tr($.Z.j().gee()))
i=$.bn
if(i!=null){h=i.gmf()
if(h!=null){$.J.j().setAttribute("data-renderer-frame-stats",h)
e=$.J.j()
d=i.gme()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.dC("running")
e=$.aX.j()
e.e=e.d=0
e.c.H(0)
A.a(A.b(v.G.window).requestAnimationFrame(A.U(A.wT())))}catch(c1){g=A.ag(c1)
f=A.cH(c1)
A.rf(g,f)}},
AC(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.ir("confirm")
$.bB.j().aq("interface confirmation")
break
case"ambient-winnow":a.ec("winnow",0.28)
$.bB.j().aq("wind moving through the house")
break
case"ambient-gate":a.ec("gate",0.22)
$.bB.j().aq("distant gate")
break
case"collapse":a.ir("collapse")
$.bB.j().aq("front door shudders and collapses")
break
case"clock:tick":A.u2(a,p,"tick")
break
case"clock:chime":A.u2(a,p,"chime")
break
default:if(B.b.R(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.e(s,1)
q=s[1]
if(2>=r)return A.e(s,2)
A.u2(a,q,s[2])}}}},
u2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.wc,g=$.kT
if(h==null||g==null)return
s=h.m1(b)
r=b+":"+c
A:{if("hall-clock:tick"===r){q="clock ticking"
break A}if("hall-clock:chime"===r){q="clock chime"
break A}if("kitchen-range:settle"===r){q="kitchen range settling"
break A}if("cellar-drain:drip"===r){q="water dripping in the cellar"
break A}if("bathroom-cistern:settle"===r){q="bathroom cistern settling"
break A}q=null
break A}if(q!=null)$.bB.j().aq(q)
q=$.a_.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.k(A.l("sound room missing: "+o))
m=n.d.a_(0,s.d.a1(0,p))
l=$.qn
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.k(A.l("sound emitter "+s.a+" has no cue for "+c))
a.mZ(q,m,s.e,o)
return}q=$.w0
$.w0=q+1
o=A.xH(B.cL,r,r+":"+q,m,A.Ao(b,c),q,o)
q=$.aM
q=A.xD($.i7(),q)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.k(A.l("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.k(A.l("audio listener room missing: "+q))
j=l.iE(p,q)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.k(A.l("audio cue family missing: "+q))
k=J.aE(i)
k=k.h(i,B.c.a0(A.Bv(q,o.f),k.gq(i)))
o=o.e
A.ar(j.a,t.N)
a.is(k,new A.c(o.a,o.b,o.c),s.e,1,p,j.c,j.b)},
Ao(a,b){var s,r,q,p=$.Z.j().b
for(s=new A.dL(a+":"+b),r=t.gS,s=new A.b9(s,s.gq(0),r.i("b9<R.E>")),r=r.i("R.E");s.m();){q=s.d
p=A.wQ(p,q==null?r.a(q):q)}return p},
BF(a){var s=$.tV
if(s==null)return
s.textContent=""+B.d.aJ(a>0?1/a:0)+" fps"},
BD(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
if($.wB||$.bh!=null||$.aL.j().Q){$.l6().a=new A.c(0,0,0)
return}s=$.aX.j()
r=s.x
q=r.h(0,"moveLeft")
q.toString
s=s.b
p=s.u(0,q)?-1:0
q=r.h(0,"moveRight")
q.toString
if(s.u(0,q))++p
q=r.h(0,"moveForward")
q.toString
o=s.u(0,q)?1:0
r=r.h(0,"moveBack")
r.toString
n=new A.c(p,0,s.u(0,r)?o-1:o)
m=n.gq(0)>1?n.ga6():n
l=$.aX.j().d
k=$.aX.j().e
$.c5=$.c5+l*0.0028
s=$.es-k*0.0028
$.es=s
$.es=B.d.K(s,-1.5607963267948965,1.5607963267948965)
s=m.a
r=m.c
j=new A.c(s*Math.cos($.c5)+r*Math.sin($.c5),0,r*Math.cos($.c5)-s*Math.sin($.c5)).ga6().a1(0,2)
s=$.l6()
if(!isFinite(a3)||a3<0)A.k(A.aF(a3,"dt","must be finite and non-negative"))
i=j.a!==0||j.c!==0?14:10
if(!isFinite(i))A.k(A.aF(i,"rate","must be finite and positive"))
r=Math.exp(-i*a3)
q=s.a
r=q.a_(0,j.ai(0,q).a1(0,1-r))
s.a=r
h=$.hX.j().my($.a_.j(),$.aM,$.fu(),r.a1(0,a3))
$.u8=h.a
if($.bE.j().a!==B.b6&&$.bE.j().a!==B.T)$.aM=h.b
$.bD.j().e9($.fu(),$.c5,$.es)
s=$.bD.j()
r=$.a_.j()
g=A.Ct(s,$.aM,r,$.kT)
$.vR.j().j5(g.c)
f=a2
e=a2
d=a2
c=a2
switch(g.a.a){case 0:f=A.um($.bD.j(),$.a_.j(),$.aM)
break
case 1:e=A.wZ($.bD.j(),$.a_.j(),$.aM)
break
case 2:d=A.x_($.bD.j(),$.a_.j(),$.aM)
break
case 3:s=$.bD.j()
r=$.a_.j()
q=$.kT
c=A.wY(s,$.aM,r,q)
break
case 4:break}s=$.vP.j()
b=$.l7().iL($.Z.j().gar().a)
r=b==null?a2:b.h(0,"status")
s.en(r,$.aM==="living-room")
s=$.aX.j()
r=s.x.h(0,"interact")
r.toString
if(s.c.ae(0,r)){s=$.Z.j().gar()
r=e==null
q=r?a2:e.a
a=B.a.a5($.aY.j().fL(21),$.aY.j().gmn())
if(s.a===21&&q==="front-door"&&a){s=$.bE.j()
$.a_.j()
s.jf(B.dk,A.ar(s.c,t.N))
B.a.l($.cF,"collapse")
A.fn("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d){f.d=!1
$.bB.j().aq("mantle flame extinguished")}else if($.Z.j().jd(1,1)){f.d=!0
s=$.fc.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0
$.bB.j().aq("mantle flame catches")}}else if(!r&&!e.z&&!e.ay){e.ax=!e.ax
s=$.bB.j()
s.aq(e.ax?"door opens":"door closes")
s=$.fh
if(s!=null)s.cG(e.b)
s=$.bn
if(s!=null)s.eg($.a_.j(),e.a)
s=$.bl
if(s!=null)s.bm()}else if(d!=null)if(d.w){s=$.Z.j()
if(s.f.cT(1)){d.w=!1
$.bB.j().aq("shutter closes")}}else{d.w=!0
$.bB.j().aq("shutter opens")}else if(c!=null){s=$.tb()
if(!c.x)A.k(A.l("inventory placement is not pickable: "+c.a))
a0=c.y
if(a0==null)a0=c.a
s=s.a
r=c.a
q=s.h(0,r)
s.k(0,r,(q==null?0:q)+1)
r=$.J.j()
r.setAttribute("data-inventory-last-focus",a0)
r.setAttribute("data-inventory-last-event","inventory-inspected:"+a0)
s=A.bW(s,t.N,t.S)
r.setAttribute("data-inventory-inspections",""+s.gq(s))
$.bB.j().cQ("noticed","you inspect "+a0)}}s=$.fc.j()
if(s.a!=null&&s.b>0){a1=$.fc.j().a
if(a1!=null&&A.um($.bD.j(),$.a_.j(),$.aM)!==a1){s=$.fc.j()
s.a=null
s.b=0}}},
BI(){var s,r,q,p,o,n,m,l,k,j=null
if($.aL.j().Q||$.bh!=null||$.aY.j().e!=null)return
s=$.Z.j().gar()
for(r=$.aY.j().fL(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aY.b
if(m===$.aY)A.k(A.a9(""))
if(m.c.u(0,n)||p<n.c)continue
r=$.aY.b
if(r===$.aY)A.k(A.a9(""))
l=r.dm(n)
if(!(l instanceof A.k3))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.e(r,q)
k=r[q].b}else k=j
if(k==null)return
A.uR(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.l6().a=new A.c(0,0,0)
r=$.aL.b
if(r===$.aL)A.k(A.a9(""))
r.eB(n.a,k)
return}},
Bm(){var s=$.aY.j().e,r=s==null,q=r?null:s.gcn()
if(r||q==null)return
$.aL.j().eB(s.a.a,q)
if(s.d!==B.X){$.aL.j().cR(q)
A.u7()}A.fn("restored visitor")},
BE(){var s,r,q,p,o=$.Z.j().gar(),n=$.kP.j().m_(o.a,o.b)
if(n.length===0)return
s=B.a.gak(n)
$.kP.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bB.j().cQ(q,s.e)
p=A.BO(r)
if(p!=null)B.a.l($.cF,"ambient-"+p)},
BH(){var s,r,q,p,o=$.Z.j().gar()
if(o.b<20)return
s=o.a
if(!$.rn.l(0,s))return
r=$.l7().f
r===$&&A.h()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.aH(q,!0,t.N):B.o
p=A.Cr(r,$.Z.j().b,s)
if(p!=null)$.bB.j().cQ("noticed",p)},
ww(a){var s,r,q,p,o
if($.tU!=null)return
s=$.Z.j().gar()
r=$.Z.j().r.c
q=$.Z.j().e.b
p=A.p(q).i("aR<2>")
o=A.yb(new A.me(s.a,1-r,new A.P(new A.aR(q,p),p.i("n(o.E)").a(new A.rg()),p.i("P<o.E>")).gq(0),$.Z.j().r.d,a))
if(o==null)return
A.ws(o)
A.ri("ending recorded")},
ws(a){var s,r,q
$.tU=a
$.wB=!0
$.l6().a=new A.c(0,0,0)
A.kZ($.hU.j())
s=$.hU.j()
r=$.l7().w
r===$&&A.h()
q=r.h(0,a.a.b)
s.j7(a,t.j.b(q)?A.aH(q,!0,t.N):B.o)},
Au(a){var s,r,q,p,o
A:{if("open"===a){s=B.ah
break A}if("chain"===a){s=B.bA
break A}if("through-door"===a){s=B.bB
break A}if("letterbox"===a){s=B.bC
break A}s=B.a1
break A}r=$.aY.j().lu(s)
if(s===B.ah){q=$.a_.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.fh
if(p!=null)p.cG(q.b)
p=$.bn
if(p!=null)p.eg($.a_.j(),q.a)
p=$.bl
if(p!=null)p.bm()}}if(!(r instanceof A.k2)||s===B.a1){$.aL.j().cw()
$.aX.j().bY($.J.j())
return}o=r.a.gcn()
if(o==null){A.tR()
$.aL.j().cw()
$.aX.j().bY($.J.j())
return}$.aL.j().cR(o)
A.u7()},
Az(){var s,r=$.aY.j().lf()
if(!(r instanceof A.hg)||r.b){A.tR()
$.aL.j().cw()
$.aX.j().bY($.J.j())
return}s=r.a.gcn()
if(s==null){A.tR()
$.aL.j().cw()
$.aX.j().bY($.J.j())
return}$.aL.j().cR(s)
A.u7()},
u7(){var s,r,q,p,o=$.aL.j(),n=A.b(v.G.document),m=A.f([],t.fR)
for(s=$.kQ.j().ev(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.at(p.a,B.a.gN(p.c).n(0)))}o.j6(n,m)},
Av(a){var s,r,q,p=$.aY.j().lv(a,!0,$.kQ.j())
if(p==null)return
s=$.kQ.j().lT(p,B.f0)
r=$.aL.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.h()
r.textContent=q},
tR(){var s,r=$.a_.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fh
if(s!=null)s.cG(r.b)
s=$.bn
if(s!=null)s.eg($.a_.j(),r.a)
s=$.bl
if(s!=null)s.bm()}},
BG(){var s,r,q,p,o,n,m,l,k
for(s=$.a_.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bE.b
if(k===$.bE)A.k(A.a9(""))
if(B.a.u(k.d,n+m)){l.d=!1
continue}}}},
hB:function hB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
_.go=_.fy=null
_.id=a0
_.k1=a1
_.k2=null
_.p2=_.p1=_.ok=_.k4=_.k3=0
_.p3=!1
_.p4=null
_.R8=0},
q3:function q3(){},
q4:function q4(a){this.a=a},
q5:function q5(a){this.a=a},
f3:function f3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
kx:function kx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qx:function qx(){},
qy:function qy(){},
qz:function qz(){},
qE:function qE(){},
qF:function qF(){},
qG:function qG(){},
qH:function qH(){},
qI:function qI(){},
qJ:function qJ(a){this.a=a},
qK:function qK(a){this.a=a},
qL:function qL(a){this.a=a},
qA:function qA(a){this.a=a},
qB:function qB(){},
qC:function qC(){},
qD:function qD(){},
qt:function qt(){},
qu:function qu(){},
qv:function qv(){},
qq:function qq(){},
qr:function qr(){},
qs:function qs(){},
r9:function r9(a,b){this.a=a
this.b=b},
r7:function r7(a){this.a=a},
r8:function r8(a){this.a=a},
rF:function rF(a){this.a=a},
rG:function rG(){},
rH:function rH(){},
rS:function rS(){},
rV:function rV(){},
rW:function rW(){},
rX:function rX(){},
rY:function rY(){},
rZ:function rZ(){},
t_:function t_(){},
t0:function t0(){},
rI:function rI(){},
rJ:function rJ(){},
rK:function rK(){},
rL:function rL(){},
rM:function rM(){},
rN:function rN(){},
rO:function rO(){},
rP:function rP(){},
rQ:function rQ(){},
rR:function rR(){},
rT:function rT(){},
rU:function rU(){},
ra:function ra(){},
rb:function rb(){},
rj:function rj(a){this.a=a},
rg:function rg(){},
uR(a,b,c,d,e,f){var s=a[b]()
return s},
uS(a,b,c){var s=null
return c.a(A.uR(a,b,s,s,s,s))},
xZ(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
xY(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
wR(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
t5(a,b){var s=B.d.aO(a),r=A.wR(s,b),q=A.wR(s+1,b),p=B.d.K(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
wQ(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
BO(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
C2(a){var s,r,q,p,o,n,m,l=B.k.aE(a,null),k=t.f
if(!k.b(l))throw A.d(B.ek)
s=t.N
r=t.z
q=A.aG(l,s,r)
p=A.v(s,t.P)
for(o=0;o<11;++o){n=B.fh[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.v(s,r))
else if(k.b(m))p.k(0,n,A.aG(m,s,r))
else throw A.d(A.a1('text.json section "'+n+'" must be an object',null,null))}return p},
Cr(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaB(a)
s=new A.f4()
s.cU((b^274953^c)>>>0)
r=s.az(a.length)
if(!(r>=0&&r<a.length))return A.e(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.tg.prototype={}
J.j2.prototype={
V(a,b){return a===b},
gG(a){return A.fZ(a)},
n(a){return"Instance of '"+A.jx(a)+"'"},
gU(a){return A.cG(A.tX(this))}}
J.j5.prototype={
n(a){return String(a)},
gG(a){return a?519018:218159},
gU(a){return A.cG(t.y)},
$iaa:1,
$in:1}
J.fL.prototype={
V(a,b){return null==b},
n(a){return"null"},
gG(a){return 0},
$iaa:1,
$ial:1}
J.fM.prototype={$ia3:1}
J.di.prototype={
gG(a){return 0},
gU(a){return B.j1},
n(a){return String(a)}}
J.js.prototype={}
J.dr.prototype={}
J.cP.prototype={
n(a){var s=a[$.x6()]
if(s==null)s=a[$.cI()]
if(s==null)return this.jh(a)
return"JavaScript function for "+J.ey(s)},
$idR:1}
J.eS.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.eT.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.t.prototype={
cj(a,b){return new A.ca(a,A.M(a).i("@<1>").E(b).i("ca<1,2>"))},
l(a,b){A.M(a).c.a(b)
a.$flags&1&&A.bp(a,29)
a.push(b)},
n3(a,b){var s
a.$flags&1&&A.bp(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.v5(b,null))
return a.splice(b,1)[0]},
ae(a,b){var s
a.$flags&1&&A.bp(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a6(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.M(a).i("o<1>").a(b)
a.$flags&1&&A.bp(a,"addAll",2)
if(Array.isArray(b)){this.jG(a,b)
return}for(s=J.S(b);s.m();)a.push(s.gp())},
jG(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.av(a))
for(r=0;r<s;++r)a.push(b[r])},
H(a){a.$flags&1&&A.bp(a,"clear","clear")
a.length=0},
bX(a,b,c){var s=A.M(a)
return new A.Q(a,s.E(c).i("1(2)").a(b),s.i("@<1>").E(c).i("Q<1,2>"))},
aP(a,b){var s,r=A.cp(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.q(a[s]))
return r.join(b)},
bR(a,b,c,d){var s,r,q
d.a(b)
A.M(a).E(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.av(a))}return r},
aZ(a,b,c){var s,r,q,p=A.M(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.av(a))}if(c!=null)return c.$0()
throw A.d(A.eQ())},
bb(a,b){return this.aZ(a,b,null)},
W(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
aC(a,b,c){var s=a.length
if(b>s)throw A.d(A.aI(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aI(c,b,s,"end",null))
if(b===c)return A.f([],A.M(a))
return A.f(a.slice(b,c),A.M(a))},
gak(a){if(a.length>0)return a[0]
throw A.d(A.eQ())},
gN(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.eQ())},
gaB(a){var s=a.length
if(s===1){if(0>=s)return A.e(a,0)
return a[0]}if(s===0)throw A.d(A.eQ())
throw A.d(A.uO())},
S(a,b){var s,r
A.M(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.av(a))}return!1},
a5(a,b){var s,r
A.M(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.av(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.M(a)
n.i("j(1,1)?").a(b)
a.$flags&2&&A.bp(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.AW()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.ah()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fq(b,2))
if(p>0)this.kN(a,p)},
X(a){return this.Y(a,null)},
kN(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cS(a,b){var s,r,q,p
a.$flags&2&&A.bp(a,"shuffle")
s=a.length
while(s>1){r=b.az(s);--s
q=a.length
if(!(s<q))return A.e(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.e(a,r)
a[s]=a[r]
a[r]=p}},
cz(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.e(a,s)
if(J.a6(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.a6(a[s],b))return!0
return!1},
gJ(a){return a.length===0},
gP(a){return a.length!==0},
n(a){return A.tf(a,"[","]")},
gt(a){return new J.dG(a,a.length,A.M(a).i("dG<1>"))},
gG(a){return A.fZ(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.bp(a,"set length","change the length of")
if(b<0)throw A.d(A.aI(b,0,null,"newLength",null))
if(b>a.length)A.M(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.rv(a,b))
return a[b]},
k(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.bp(a)
if(!(b>=0&&b<a.length))throw A.d(A.rv(a,b))
a[b]=c},
es(a,b){return new A.ch(a,b.i("ch<0>"))},
i9(a,b){var s
A.M(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gU(a){return A.cG(A.M(a))},
$iL:1,
$io:1,
$iI:1}
J.j3.prototype={
no(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.jx(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.nm.prototype={}
J.dG.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iak:1}
J.dX.prototype={
F(a,b){var s
A.aC(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcB(b)
if(this.gcB(a)===s)return 0
if(this.gcB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcB(a){return a===0?1/a<0:a<0},
b1(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aK(""+a+".toInt()"))},
lr(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aK(""+a+".ceil()"))},
aO(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aK(""+a+".floor()"))},
aJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aK(""+a+".round()"))},
K(a,b,c){if(this.F(b,c)>0)throw A.d(A.uf(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
cH(a,b){var s
if(b>20)throw A.d(A.aI(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcB(a))return"-"+s
return s},
nn(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aI(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.e(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.aK("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.e(p,1)
s=p[1]
if(3>=r)return A.e(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a1("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a0(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
jj(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fB(a,b)},
O(a,b){return(a|0)===a?a/b|0:this.fB(a,b)},
fB(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aK("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
di(a,b){var s
if(a>0)s=this.cf(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
kV(a,b){if(0>b)throw A.d(A.uf(b))
return this.cf(a,b)},
cf(a,b){return b>31?0:a>>>b},
gU(a){return A.cG(t.o)},
$iaQ:1,
$iy:1,
$ib_:1}
J.fK.prototype={
gU(a){return A.cG(t.S)},
$iaa:1,
$ij:1}
J.j6.prototype={
gU(a){return A.cG(t.i)},
$iaa:1}
J.dh.prototype={
bx(a,b,c,d){var s=A.h_(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a4(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aI(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
R(a,b){return this.a4(a,b,0)},
D(a,b,c){return a.substring(b,A.h_(b,c,a.length))},
bf(a,b){return this.D(a,b,null)},
cI(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.yz(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.yA(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a1(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.dg)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
mX(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a1(c,s)+a},
cA(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aI(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cz(a,b){return this.cA(a,b,0)},
u(a,b){return A.Cz(a,b,0)},
F(a,b){var s
A.B(b)
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
gU(a){return A.cG(t.N)},
gq(a){return a.length},
$iaa:1,
$iaQ:1,
$inZ:1,
$im:1}
A.du.prototype={
gt(a){return new A.fx(J.S(this.gb5()),A.p(this).i("fx<1,2>"))},
gq(a){return J.b8(this.gb5())},
gJ(a){return J.uw(this.gb5())},
gP(a){return J.xx(this.gb5())},
W(a,b){return A.p(this).y[1].a(J.l8(this.gb5(),b))},
n(a){return J.ey(this.gb5())}}
A.fx.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iak:1}
A.dK.prototype={
gb5(){return this.a}}
A.hp.prototype={$iL:1}
A.hn.prototype={
h(a,b){return this.$ti.y[1].a(J.b7(this.a,b))},
k(a,b,c){var s=this.$ti
J.bG(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.xy(this.a,b)},
l(a,b){var s=this.$ti
J.i8(this.a,s.c.a(s.y[1].a(b)))},
Y(a,b){var s
this.$ti.i("j(2,2)?").a(b)
s=b==null?null:new A.pJ(this,b)
J.xz(this.a,s)},
$iL:1,
$iI:1}
A.pJ.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("j(1,1)")}}
A.ca.prototype={
cj(a,b){return new A.ca(this.a,this.$ti.i("@<1>").E(b).i("ca<1,2>"))},
gb5(){return this.a}}
A.dY.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.dL.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.oH.prototype={}
A.L.prototype={}
A.a2.prototype={
gt(a){var s=this
return new A.b9(s,s.gq(s),A.p(s).i("b9<a2.E>"))},
gJ(a){return this.gq(this)===0},
S(a,b){var s,r,q=this
A.p(q).i("n(a2.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.W(0,r)))return!0
if(s!==q.gq(q))throw A.d(A.av(q))}return!1},
aP(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.W(0,0))
if(o!==p.gq(p))throw A.d(A.av(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.W(0,q))
if(o!==p.gq(p))throw A.d(A.av(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.W(0,q))
if(o!==p.gq(p))throw A.d(A.av(p))}return r.charCodeAt(0)==0?r:r}},
er(a,b){return this.jg(0,A.p(this).i("n(a2.E)").a(b))},
bX(a,b,c){var s=A.p(this)
return new A.Q(this,s.E(c).i("1(a2.E)").a(b),s.i("@<a2.E>").E(c).i("Q<1,2>"))},
bz(a,b){var s=A.p(this).i("a2.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
by(a){return this.bz(0,!0)},
be(a){var s,r=this,q=A.tj(A.p(r).i("a2.E"))
for(s=0;s<r.gq(r);++s)q.l(0,r.W(0,s))
return q}}
A.hb.prototype={
gkc(){var s=J.b8(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkY(){var s=J.b8(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.b8(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
W(a,b){var s=this,r=s.gkY()+b
if(b<0||r>=s.gkc())throw A.d(A.ng(b,s.gq(0),s,"index"))
return J.l8(s.a,r)},
bz(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aE(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.uQ(0,n):J.uP(0,n)}r=A.cp(s,m.W(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.W(n,o+q))
if(m.gq(n)<l)throw A.d(A.av(p))}return r},
by(a){return this.bz(0,!0)}}
A.b9.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aE(q),o=p.gq(q)
if(r.b!==o)throw A.d(A.av(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.W(q,s);++r.c
return!0},
$iak:1}
A.cR.prototype={
gt(a){return new A.e_(J.S(this.a),this.b,A.p(this).i("e_<1,2>"))},
gq(a){return J.b8(this.a)},
gJ(a){return J.uw(this.a)},
W(a,b){return this.b.$1(J.l8(this.a,b))}}
A.dO.prototype={$iL:1}
A.e_.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iak:1}
A.Q.prototype={
gq(a){return J.b8(this.a)},
W(a,b){return this.b.$1(J.l8(this.a,b))}}
A.P.prototype={
gt(a){return new A.K(J.S(this.a),this.b,this.$ti.i("K<1>"))}}
A.K.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iak:1}
A.ch.prototype={
gt(a){return new A.hi(J.S(this.a),this.$ti.i("hi<1>"))}}
A.hi.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iak:1}
A.am.prototype={
sq(a,b){throw A.d(A.aK("Cannot change the length of a fixed-length list"))},
l(a,b){A.bF(a).i("am.E").a(b)
throw A.d(A.aK("Cannot add to a fixed-length list"))}}
A.cy.prototype={
k(a,b,c){A.p(this).i("cy.E").a(c)
throw A.d(A.aK("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.d(A.aK("Cannot change the length of an unmodifiable list"))},
l(a,b){A.p(this).i("cy.E").a(b)
throw A.d(A.aK("Cannot add to an unmodifiable list"))},
Y(a,b){A.p(this).i("j(cy.E,cy.E)?").a(b)
throw A.d(A.aK("Cannot modify an unmodifiable list"))}}
A.f2.prototype={}
A.h4.prototype={
gq(a){return J.b8(this.a)},
W(a,b){var s=this.a,r=J.aE(s)
return r.W(s,r.gq(s)-1-b)}}
A.hS.prototype={}
A.at.prototype={$r:"+(1,2)",$s:1}
A.hC.prototype={$r:"+influence,light(1,2)",$s:2}
A.ad.prototype={$r:"+(1,2,3)",$s:3}
A.hD.prototype={$r:"+(1,2,3,4)",$s:4}
A.fz.prototype={}
A.eH.prototype={
gJ(a){return this.gq(this)===0},
gP(a){return this.gq(this)!==0},
n(a){return A.tl(this)},
k(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
A.xT()},
gL(){return new A.cC(this.m4(),A.p(this).i("cC<W<1,2>>"))},
m4(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gT(),o=o.gt(o),n=A.p(s),m=n.y[1],n=n.i("W<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.W(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
br(a,b,c,d){var s=A.v(c,d)
this.al(0,new A.lW(this,A.p(this).E(c).E(d).i("W<1,2>(3,4)").a(b),s))
return s},
$iV:1}
A.lW.prototype={
$2(a,b){var s=A.p(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.p(this.a).i("~(1,2)")}}
A.a7.prototype={
gq(a){return this.b.length},
gfa(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
M(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.M(b))return null
return this.b[this.a[b]]},
al(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfa()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gT(){return new A.ej(this.gfa(),this.$ti.i("ej<1>"))},
gao(){return new A.ej(this.b,this.$ti.i("ej<2>"))}}
A.ej.prototype={
gq(a){return this.a.length},
gJ(a){return 0===this.a.length},
gP(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.ek(s,s.length,this.$ti.i("ek<1>"))}}
A.ek.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iak:1}
A.ck.prototype={
bk(){var s=this,r=s.$map
if(r==null){r=new A.fN(s.$ti.i("fN<1,2>"))
A.wM(s.a,r)
s.$map=r}return r},
M(a){return this.bk().M(a)},
h(a,b){return this.bk().h(0,b)},
al(a,b){this.$ti.i("~(1,2)").a(b)
this.bk().al(0,b)},
gT(){var s=this.bk()
return new A.a8(s,A.p(s).i("a8<1>"))},
gao(){var s=this.bk()
return new A.aR(s,A.p(s).i("aR<2>"))},
gq(a){return this.bk().a}}
A.fA.prototype={
l(a,b){A.p(this).c.a(b)
A.xU()}}
A.cb.prototype={
gq(a){return this.b},
gJ(a){return this.b===0},
gP(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.ek(s,s.length,r.$ti.i("ek<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
be(a){return A.tk(this,this.$ti.c)}}
A.oa.prototype={
$0(){return B.d.aO(1000*this.a.now())},
$S:32}
A.h5.prototype={}
A.pk.prototype={
aH(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.fV.prototype={
n(a){return"Null check operator used on a null value"}}
A.j8.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.jV.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.nS.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.fD.prototype={}
A.hF.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icw:1}
A.da.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.x4(r==null?"unknown":r)+"'"},
gU(a){var s=A.uh(this)
return A.cG(s==null?A.bF(this):s)},
$idR:1,
gnx(){return this},
$C:"$1",
$R:1,
$D:null}
A.io.prototype={$C:"$0",$R:0}
A.ip.prototype={$C:"$2",$R:2}
A.jR.prototype={}
A.jN.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.x4(s)+"'"}}
A.eD.prototype={
V(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.eD))return!1
return this.$_target===b.$_target&&this.a===b.a},
gG(a){return(A.l5(this.a)^A.fZ(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jx(this.a)+"'")}}
A.jG.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bZ.prototype={
gq(a){return this.a},
gJ(a){return this.a===0},
gP(a){return this.a!==0},
gT(){return new A.a8(this,A.p(this).i("a8<1>"))},
gao(){return new A.aR(this,A.p(this).i("aR<2>"))},
gL(){return new A.T(this,A.p(this).i("T<1,2>"))},
M(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mi(a)},
mi(a){var s=this.d
if(s==null)return!1
return this.bT(s[this.bS(a)],a)>=0},
I(a,b){A.p(this).i("V<1,2>").a(b).al(0,new A.nv(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mj(b)},
mj(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bS(a)]
r=this.bT(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.p(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.eG(s==null?q.b=q.dc():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.eG(r==null?q.c=q.dc():r,b,c)}else q.ml(b,c)},
ml(a,b){var s,r,q,p,o=this,n=A.p(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dc()
r=o.bS(a)
q=s[r]
if(q==null)s[r]=[o.dd(a,b)]
else{p=o.bT(q,a)
if(p>=0)q[p].b=b
else q.push(o.dd(a,b))}},
iu(a,b){var s,r,q=this,p=A.p(q)
p.c.a(a)
p.i("2()").a(b)
if(q.M(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
ae(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.kM(this.c,b)
else return this.mk(b)},
mk(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bS(a)
r=n[s]
q=o.bT(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fI(p)
if(r.length===0)delete n[s]
return p.b},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cV()}},
al(a,b){var s,r,q=this
A.p(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.av(q))
s=s.c}},
eG(a,b,c){var s,r=A.p(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dd(b,c)
else s.b=c},
kM(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fI(s)
delete a[b]
return s.b},
cV(){this.r=this.r+1&1073741823},
dd(a,b){var s=this,r=A.p(s),q=new A.nD(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cV()
return q},
fI(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cV()},
bS(a){return J.aq(a)&1073741823},
bT(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
n(a){return A.tl(this)},
dc(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iti:1}
A.nv.prototype={
$2(a,b){var s=this.a,r=A.p(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.p(this.a).i("~(1,2)")}}
A.nD.prototype={}
A.a8.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gt(a){var s=this.a
return new A.co(s,s.r,s.e,this.$ti.i("co<1>"))},
u(a,b){return this.a.M(b)}}
A.co.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iak:1}
A.aR.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gt(a){var s=this.a
return new A.as(s,s.r,s.e,this.$ti.i("as<1>"))}}
A.as.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iak:1}
A.T.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gt(a){var s=this.a
return new A.dZ(s,s.r,s.e,this.$ti.i("dZ<1,2>"))}}
A.dZ.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.W(s.a,s.b,r.$ti.i("W<1,2>"))
r.c=s.c
return!0}},
$iak:1}
A.fN.prototype={
bS(a){return A.BY(a)&1073741823},
bT(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
A.rA.prototype={
$1(a){return this.a(a)},
$S:10}
A.rB.prototype={
$2(a,b){return this.a(a,b)},
$S:131}
A.rC.prototype={
$1(a){return this.a(A.B(a))},
$S:27}
A.bR.prototype={
gU(a){return A.cG(this.f6())},
f6(){return A.C7(this.$r,this.c9())},
n(a){return this.fF(!1)},
fF(a){var s,r,q,p,o,n=this.kh(),m=this.c9(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.v2(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
kh(){var s,r=this.$s
while($.q6.length<=r)B.a.l($.q6,null)
s=$.q6[r]
if(s==null){s=this.jX()
B.a.k($.q6,r,s)}return s},
jX(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.j4(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ar(j,k)}}
A.en.prototype={
c9(){return[this.a,this.b]},
V(a,b){if(b==null)return!1
return b instanceof A.en&&this.$s===b.$s&&J.a6(this.a,b.a)&&J.a6(this.b,b.b)},
gG(a){return A.ce(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.f5.prototype={
c9(){return[this.a,this.b,this.c]},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.f5&&s.$s===b.$s&&J.a6(s.a,b.a)&&J.a6(s.b,b.b)&&J.a6(s.c,b.c)},
gG(a){var s=this
return A.ce(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.f6.prototype={
c9(){return this.a},
V(a,b){if(b==null)return!1
return b instanceof A.f6&&this.$s===b.$s&&A.zL(this.a,b.a)},
gG(a){return A.ce(this.$s,A.yK(this.a),B.f,B.f,B.f,B.f)}}
A.j7.prototype={
n(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inZ:1}
A.pK.prototype={
df(){var s=this.b
if(s===this)throw A.d(new A.dY("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a9(""))
return s}}
A.dk.prototype={
gU(a){return B.iV},
fM(a,b,c){return new Float32Array(a,b,c)},
$iaa:1,
$idk:1}
A.eV.prototype={$ieV:1}
A.fT.prototype={
glk(a){if(((a.$flags|0)&2)!==0)return new A.qc(a.buffer)
else return a.buffer},
kp(a,b,c,d){var s=A.aI(b,0,c,d,null)
throw A.d(s)},
eO(a,b,c,d){if(b>>>0!==b||b>c)this.kp(a,b,c,d)}}
A.qc.prototype={
fM(a,b,c){var s=A.yH(this.a,b,c)
s.$flags=3
return s}}
A.jj.prototype={
gU(a){return B.iW},
$iaa:1}
A.aS.prototype={
gq(a){return a.length},
ft(a,b,c,d,e){var s,r,q=a.length
this.eO(a,b,q,"start")
this.eO(a,c,q,"end")
if(b>c)throw A.d(A.aI(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.w(e,null))
r=d.length
if(r-e<s)throw A.d(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibJ:1}
A.fR.prototype={
h(a,b){A.d4(b,a,a.length)
return a[b]},
k(a,b,c){A.d2(c)
a.$flags&2&&A.bp(a)
A.d4(b,a,a.length)
a[b]=c},
j0(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bp(a,5)
this.ft(a,b,c,d,0)
return},
$iL:1,
$io:1,
$iI:1}
A.fS.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.bp(a)
A.d4(b,a,a.length)
a[b]=c},
j1(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bp(a,5)
this.ft(a,b,c,d,e)
return},
$iL:1,
$io:1,
$iI:1}
A.fQ.prototype={
gU(a){return B.iX},
aC(a,b,c){return new Float32Array(a.subarray(b,A.As(b,c,a.length)))},
$iaa:1,
$imp:1}
A.jk.prototype={
gU(a){return B.iY},
$iaa:1}
A.jl.prototype={
gU(a){return B.iZ},
h(a,b){A.d4(b,a,a.length)
return a[b]},
$iaa:1}
A.jm.prototype={
gU(a){return B.j_},
h(a,b){A.d4(b,a,a.length)
return a[b]},
$iaa:1}
A.jn.prototype={
gU(a){return B.j0},
h(a,b){A.d4(b,a,a.length)
return a[b]},
$iaa:1}
A.jo.prototype={
gU(a){return B.j3},
h(a,b){A.d4(b,a,a.length)
return a[b]},
$iaa:1,
$itx:1}
A.jp.prototype={
gU(a){return B.j4},
h(a,b){A.d4(b,a,a.length)
return a[b]},
$iaa:1}
A.e2.prototype={
gU(a){return B.j5},
gq(a){return a.length},
h(a,b){A.d4(b,a,a.length)
return a[b]},
$iaa:1,
$ie2:1}
A.fU.prototype={
gU(a){return B.j6},
gq(a){return a.length},
h(a,b){A.d4(b,a,a.length)
return a[b]},
$iaa:1,
$ihd:1}
A.hw.prototype={}
A.hx.prototype={}
A.hy.prototype={}
A.hz.prototype={}
A.cf.prototype={
i(a){return A.hK(v.typeUniverse,this,a)},
E(a){return A.vG(v.typeUniverse,this,a)}}
A.kn.prototype={}
A.kL.prototype={
n(a){return A.bU(this.a,null)}}
A.kl.prototype={
n(a){return this.a}}
A.hG.prototype={$icX:1}
A.pG.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:34}
A.pF.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:130}
A.pH.prototype={
$0(){this.a.$0()},
$S:11}
A.pI.prototype={
$0(){this.a.$0()},
$S:11}
A.q9.prototype={
jE(a,b){if(self.setTimeout!=null)self.setTimeout(A.fq(new A.qa(this,b),0),a)
else throw A.d(A.aK("`setTimeout()` not found."))}}
A.qa.prototype={
$0(){this.b.$0()},
$S:0}
A.kb.prototype={
dn(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cZ(a)
else{s=r.a
if(q.i("bI<1>").b(a))s.eN(a)
else s.c7(a)}},
dq(a,b){var s=this.a
if(this.b)s.b3(new A.aP(a,b))
else s.c3(new A.aP(a,b))}}
A.qo.prototype={
$1(a){return this.a.$2(0,a)},
$S:13}
A.qp.prototype={
$2(a,b){this.a.$2(1,new A.fD(a,t.l.a(b)))},
$S:57}
A.rr.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:65}
A.bS.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
kP(a,b){var s,r,q
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
o.d=null}q=o.kP(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.vB
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
o.a=A.vB
throw n
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.l("sync*"))}return!1},
nz(a){var s,r,q=this
if(a instanceof A.cC){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.S(a)
return 2}},
$iak:1}
A.cC.prototype={
gt(a){return new A.bS(this.a(),this.$ti.i("bS<1>"))}}
A.aP.prototype={
n(a){return A.q(this.a)},
$iah:1,
gbA(){return this.b}}
A.mw.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eW(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ag(p)
q=A.cH(p)
l=r
o=q
n=A.tY(l,o)
l=new A.aP(l,o)
m.b.b3(l)
return}m.b.eW(s)}},
$S:0}
A.mz.prototype={
$2(a,b){var s,r,q=this
A.ff(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.b3(new A.aP(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.b3(new A.aP(r,s))}},
$S:66}
A.my.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bG(r,k.b,a)
if(J.a6(s,0)){q=A.f([],j.i("t<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.i8(q,l)}k.c.c7(q)}}else if(J.a6(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.b3(new A.aP(q,o))}},
$S(){return this.d.i("al(0)")}}
A.kf.prototype={
dq(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.c3(A.AV(a,b))},
fP(a){return this.dq(a,null)}}
A.hk.prototype={
dn(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.cZ(r.i("1/").a(a))}}
A.ef.prototype={
mx(a){if((this.c&15)!==6)return!0
return this.b.b.el(t.iW.a(this.d),a.a,t.y,t.K)},
mh(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.nk(q,m,a.b,o,n,t.l)
else p=l.el(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ag(s))){if((r.c&1)!==0)throw A.d(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ap.prototype={
em(a,b,c){var s,r,q=this.$ti
q.E(c).i("1/(2)").a(a)
s=$.aj
if(s===B.v){if(!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.aF(b,"onError",u.c))}else{c.i("@<0/>").E(q.c).i("1(2)").a(a)
b=A.Bl(b,s)}r=new A.ap(s,c.i("ap<0>"))
this.cX(new A.ef(r,3,a,b,q.i("@<1>").E(c).i("ef<1,2>")))
return r},
fE(a,b,c){var s,r=this.$ti
r.E(c).i("1/(2)").a(a)
s=new A.ap($.aj,c.i("ap<0>"))
this.cX(new A.ef(s,19,a,b,r.i("@<1>").E(c).i("ef<1,2>")))
return s},
kT(a){this.a=this.a&1|16
this.c=a},
c6(a){this.a=a.a&30|this.a&1
this.c=a.c},
cX(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.cX(a)
return}r.c6(s)}A.l0(null,null,r.b,t.M.a(new A.pM(r,a)))}},
fh(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.fh(a)
return}m.c6(n)}l.a=m.cd(a)
A.l0(null,null,m.b,t.M.a(new A.pR(l,m)))}},
bE(){var s=t.F.a(this.c)
this.c=null
return this.cd(s)},
cd(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eW(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bI<1>").b(a))A.pP(a,r,!0)
else{s=r.bE()
q.c.a(a)
r.a=8
r.c=a
A.eg(r,s)}},
c7(a){var s,r=this
r.$ti.c.a(a)
s=r.bE()
r.a=8
r.c=a
A.eg(r,s)},
jW(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bE()
q.c6(a)
A.eg(q,r)},
b3(a){var s=this.bE()
this.kT(a)
A.eg(this,s)},
cZ(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bI<1>").b(a)){this.eN(a)
return}this.jJ(a)},
jJ(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.l0(null,null,s.b,t.M.a(new A.pO(s,a)))},
eN(a){A.pP(this.$ti.i("bI<1>").a(a),this,!1)
return},
c3(a){this.a^=2
A.l0(null,null,this.b,t.M.a(new A.pN(this,a)))},
$ibI:1}
A.pM.prototype={
$0(){A.eg(this.a,this.b)},
$S:0}
A.pR.prototype={
$0(){A.eg(this.b,this.a.a)},
$S:0}
A.pQ.prototype={
$0(){A.pP(this.a.a,this.b,!0)},
$S:0}
A.pO.prototype={
$0(){this.a.c7(this.b)},
$S:0}
A.pN.prototype={
$0(){this.a.b3(this.b)},
$S:0}
A.pU.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.nj(t.mY.a(q.d),t.z)}catch(p){s=A.ag(p)
r=A.cH(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.lm(q)
n=k.a
n.c=new A.aP(q,o)
q=n}q.b=!0
return}if(j instanceof A.ap&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ap){m=k.b.a
l=new A.ap(m.b,m.$ti)
j.em(new A.pV(l,m),new A.pW(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.pV.prototype={
$1(a){this.a.jW(this.b)},
$S:34}
A.pW.prototype={
$2(a,b){A.ff(a)
t.l.a(b)
this.a.b3(new A.aP(a,b))},
$S:70}
A.pT.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.el(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ag(l)
r=A.cH(l)
q=s
p=r
if(p==null)p=A.lm(q)
o=this.a
o.c=new A.aP(q,p)
o.b=!0}},
$S:0}
A.pS.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.mx(s)&&p.a.e!=null){p.c=p.a.mh(s)
p.b=!1}}catch(o){r=A.ag(o)
q=A.cH(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.lm(p)
m=l.b
m.c=new A.aP(p,n)
p=m}p.b=!0}},
$S:0}
A.kc.prototype={}
A.kJ.prototype={}
A.hR.prototype={$ivt:1}
A.kB.prototype={
nl(a){var s,r,q
t.M.a(a)
try{if(B.v===$.aj){a.$0()
return}A.wz(null,null,this,a,t.H)}catch(q){s=A.ag(q)
r=A.cH(q)
A.u5(A.ff(s),t.l.a(r))}},
fO(a){return new A.q7(this,t.M.a(a))},
nj(a,b){b.i("0()").a(a)
if($.aj===B.v)return a.$0()
return A.wz(null,null,this,a,b)},
el(a,b,c,d){c.i("@<0>").E(d).i("1(2)").a(a)
d.a(b)
if($.aj===B.v)return a.$1(b)
return A.Bp(null,null,this,a,b,c,d)},
nk(a,b,c,d,e,f){d.i("@<0>").E(e).E(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aj===B.v)return a.$2(b,c)
return A.Bo(null,null,this,a,b,c,d,e,f)},
ix(a,b,c,d){return b.i("@<0>").E(c).E(d).i("1(2,3)").a(a)}}
A.q7.prototype={
$0(){return this.a.nl(this.b)},
$S:0}
A.rh.prototype={
$0(){A.yg(this.a,this.b)},
$S:0}
A.hr.prototype={
gq(a){return this.a},
gJ(a){return this.a===0},
gP(a){return this.a!==0},
gT(){return new A.eh(this,this.$ti.i("eh<1>"))},
gao(){var s=this.$ti
return A.jd(new A.eh(this,s.i("eh<1>")),new A.pX(this),s.c,s.y[1])},
M(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.k_(a)},
k_(a){var s=this.d
if(s==null)return!1
return this.b4(this.f5(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.vv(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.vv(q,b)
return r}else return this.ki(b)},
ki(a){var s,r,q=this.d
if(q==null)return null
s=this.f5(q,a)
r=this.b4(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eR(s==null?m.b=A.tE():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eR(r==null?m.c=A.tE():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.tE()
p=A.l5(b)&1073741823
o=q[p]
if(o==null){A.tF(q,p,[b,c]);++m.a
m.e=null}else{n=m.b4(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
al(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eS()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.av(m))}},
eS(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cp(i.a,null,!1,t.z)
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
eR(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.tF(a,b,c)},
f5(a,b){return a[A.l5(b)&1073741823]}}
A.pX.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.ht.prototype={
b4(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eh.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gP(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.hs(s,s.eS(),this.$ti.i("hs<1>"))},
u(a,b){return this.a.M(b)}}
A.hs.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.av(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iak:1}
A.c3.prototype={
fd(){return new A.c3(A.p(this).i("c3<1>"))},
gt(a){var s=this,r=new A.el(s,s.r,A.p(s).i("el<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gJ(a){return this.a===0},
gP(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.jZ(b)},
jZ(a){var s=this.d
if(s==null)return!1
return this.b4(s[this.d4(a)],a)>=0},
l(a,b){var s,r,q=this
A.p(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.eQ(s==null?q.b=A.tG():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.eQ(r==null?q.c=A.tG():r,b)}else return q.jF(b)},
jF(a){var s,r,q,p=this
A.p(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.tG()
r=p.d4(a)
q=s[r]
if(q==null)s[r]=[p.d2(a)]
else{if(p.b4(q,a)>=0)return!1
q.push(p.d2(a))}return!0},
ae(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.eT(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.eT(s.c,b)
else return s.kL(b)},
kL(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d4(a)
r=n[s]
q=o.b4(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eU(p)
return!0},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.da()}},
eQ(a,b){A.p(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.d2(b)
return!0},
eT(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.eU(s)
delete a[b]
return!0},
da(){this.r=this.r+1&1073741823},
d2(a){var s,r=this,q=new A.ks(A.p(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.da()
return q},
eU(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.da()},
d4(a){return J.aq(a)&1073741823},
b4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
$iuZ:1}
A.ks.prototype={}
A.el.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.av(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iak:1}
A.nE.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:100}
A.R.prototype={
gt(a){return new A.b9(a,this.gq(a),A.bF(a).i("b9<R.E>"))},
W(a,b){return this.h(a,b)},
gJ(a){return this.gq(a)===0},
gP(a){return!this.gJ(a)},
a5(a,b){var s,r
A.bF(a).i("n(R.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.d(A.av(a))}return!0},
S(a,b){var s,r
A.bF(a).i("n(R.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.d(A.av(a))}return!1},
es(a,b){return new A.ch(a,b.i("ch<0>"))},
bX(a,b,c){var s=A.bF(a)
return new A.Q(a,s.E(c).i("1(R.E)").a(b),s.i("@<R.E>").E(c).i("Q<1,2>"))},
l(a,b){var s
A.bF(a).i("R.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.k(a,s,b)},
cj(a,b){return new A.ca(a,A.bF(a).i("@<R.E>").E(b).i("ca<1,2>"))},
Y(a,b){var s,r=A.bF(a)
r.i("j(R.E,R.E)?").a(b)
s=b==null?A.BX():b
A.jK(a,0,this.gq(a)-1,s,r.i("R.E"))},
mc(a,b,c,d){var s
A.bF(a).i("R.E?").a(d)
A.h_(b,c,this.gq(a))
for(s=b;s<c;++s)this.k(a,s,d)},
n(a){return A.tf(a,"[","]")},
$iL:1,
$io:1,
$iI:1}
A.a0.prototype={
al(a,b){var s,r,q,p=A.p(this)
p.i("~(a0.K,a0.V)").a(b)
for(s=this.gT(),s=s.gt(s),p=p.i("a0.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gL(){return this.gT().bX(0,new A.nF(this),A.p(this).i("W<a0.K,a0.V>"))},
br(a,b,c,d){var s,r,q,p,o,n=A.p(this)
n.E(c).E(d).i("W<1,2>(a0.K,a0.V)").a(b)
s=A.v(c,d)
for(r=this.gT(),r=r.gt(r),n=n.i("a0.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
lb(a){var s,r,q
A.p(this).i("o<W<a0.K,a0.V>>").a(a)
for(s=a.$ti,r=new A.e_(J.S(a.a),a.b,s.i("e_<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
M(a){return this.gT().u(0,a)},
gq(a){var s=this.gT()
return s.gq(s)},
gJ(a){var s=this.gT()
return s.gJ(s)},
gP(a){var s=this.gT()
return s.gP(s)},
gao(){return new A.hu(this,A.p(this).i("hu<a0.K,a0.V>"))},
n(a){return A.tl(this)},
$iV:1}
A.nF.prototype={
$1(a){var s=this.a,r=A.p(s)
r.i("a0.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a0.V").a(s)
return new A.W(a,s,r.i("W<a0.K,a0.V>"))},
$S(){return A.p(this.a).i("W<a0.K,a0.V>(a0.K)")}}
A.nG.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:31}
A.hu.prototype={
gq(a){var s=this.a
return s.gq(s)},
gJ(a){var s=this.a
return s.gJ(s)},
gP(a){var s=this.a
return s.gP(s)},
gt(a){var s=this.a,r=s.gT()
return new A.hv(r.gt(r),s,this.$ti.i("hv<1,2>"))}}
A.hv.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iak:1}
A.hL.prototype={
k(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aK("Cannot modify unmodifiable map"))}}
A.eU.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.p(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
M(a){return this.a.M(a)},
al(a,b){this.a.al(0,A.p(this).i("~(1,2)").a(b))},
gJ(a){var s=this.a
return s.gJ(s)},
gP(a){var s=this.a
return s.gP(s)},
gq(a){var s=this.a
return s.gq(s)},
gT(){return this.a.gT()},
n(a){return this.a.n(0)},
gao(){return this.a.gao()},
gL(){return this.a.gL()},
br(a,b,c,d){return this.a.br(0,A.p(this).E(c).E(d).i("W<1,2>(3,4)").a(b),c,d)},
$iV:1}
A.ds.prototype={}
A.cV.prototype={
gJ(a){return this.gq(this)===0},
gP(a){return this.gq(this)!==0},
I(a,b){var s
for(s=J.S(A.p(this).i("o<1>").a(b));s.m();)this.l(0,s.gp())},
dw(a){var s,r,q=this.be(0)
for(s=this.gt(this);s.m();){r=s.gp()
if(a.u(0,r))q.ae(0,r)}return q},
n(a){return A.tf(this,"{","}")},
a5(a,b){var s
A.p(this).i("n(1)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aP(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.ey(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
S(a,b){var s
A.p(this).i("n(1)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
W(a,b){var s,r
A.jC(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.ng(b,b-r,this,"index"))},
$iL:1,
$io:1,
$idp:1}
A.hE.prototype={
dw(a){var s,r,q,p=this,o=p.fd()
for(s=A.q2(p,p.r,A.p(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.u(0,q))o.l(0,q)}return o},
be(a){var s=this.fd()
s.I(0,this)
return s}}
A.kM.prototype={
l(a,b){this.$ti.c.a(b)
return A.zW()}}
A.he.prototype={
u(a,b){return this.a.u(0,b)},
gq(a){return this.a.a},
gt(a){var s=this.a
return A.q2(s,s.r,A.p(s).c)},
be(a){return this.a.be(0)}}
A.f9.prototype={}
A.hM.prototype={}
A.kq.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.kG(b):s}},
gq(a){return this.b==null?this.c.a:this.bi().length},
gJ(a){return this.gq(0)===0},
gP(a){return this.gq(0)>0},
gT(){if(this.b==null){var s=this.c
return new A.a8(s,A.p(s).i("a8<1>"))}return new A.kr(this)},
gao(){var s,r=this
if(r.b==null){s=r.c
return new A.aR(s,A.p(s).i("aR<2>"))}return A.jd(r.bi(),new A.pZ(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.B(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.M(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.l3().k(0,b,c)},
M(a){if(this.b==null)return this.c.M(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
al(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.al(0,b)
s=o.bi()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.qM(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.av(o))}},
bi(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.f(Object.keys(this.a),t.s)
return s},
l3(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.v(t.N,t.z)
r=n.bi()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.H(r)
n.a=n.b=null
return n.c=s},
kG(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.qM(this.a[a])
return this.b[a]=s}}
A.pZ.prototype={
$1(a){return this.a.h(0,A.B(a))},
$S:27}
A.kr.prototype={
gq(a){return this.a.gq(0)},
W(a,b){var s=this.a
if(s.b==null)s=s.gT().W(0,b)
else{s=s.bi()
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gT()
s=s.gt(s)}else{s=s.bi()
s=new J.dG(s,s.length,A.M(s).i("dG<1>"))}return s},
u(a,b){return this.a.M(b)}}
A.qf.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:30}
A.qe.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:30}
A.ih.prototype={
mz(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.h_(a4,a5,a2)
s=$.xh()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.rz(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.rz(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.b4("")
g=o}else g=o
g.a+=B.b.D(a3,p,q)
c=A.ao(j)
g.a+=c
p=k
continue}}throw A.d(A.a1("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.D(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.ux(a3,m,a5,n,l,r)
else{b=B.c.a0(r-1,4)+1
if(b===1)throw A.d(A.a1(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bx(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.ux(a3,m,a5,n,l,a)
else{b=B.c.a0(a,4)
if(b===1)throw A.d(A.a1(a1,a3,a5))
if(b>1)a3=B.b.bx(a3,a5,a5,b===2?"==":"=")}return a3}}
A.lO.prototype={}
A.dM.prototype={}
A.iw.prototype={}
A.iG.prototype={}
A.fO.prototype={
n(a){var s=A.iH(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ja.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.j9.prototype={
aE(a,b){var s=A.Bg(a,this.glV().a)
return s},
av(a,b){var s=A.zE(a,this.gm2().b,null)
return s},
gm2(){return B.f5},
glV(){return B.f4}}
A.nx.prototype={}
A.nw.prototype={}
A.q0.prototype={
iJ(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.D(a,r,q)
r=q+1
o=A.ao(92)
s.a+=o
o=A.ao(117)
s.a+=o
o=A.ao(100)
s.a+=o
o=p>>>8&15
o=A.ao(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ao(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ao(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.D(a,r,q)
r=q+1
o=A.ao(92)
s.a+=o
switch(p){case 8:o=A.ao(98)
s.a+=o
break
case 9:o=A.ao(116)
s.a+=o
break
case 10:o=A.ao(110)
s.a+=o
break
case 12:o=A.ao(102)
s.a+=o
break
case 13:o=A.ao(114)
s.a+=o
break
default:o=A.ao(117)
s.a+=o
o=A.ao(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ao(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ao(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.D(a,r,q)
r=q+1
o=A.ao(92)
s.a+=o
o=A.ao(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.D(a,r,m)},
d0(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.ja(a,null))}B.a.l(s,a)},
cL(a){var s,r,q,p,o=this
if(o.iI(a))return
o.d0(a)
try{s=o.b.$1(a)
if(!o.iI(s)){q=A.uV(a,null,o.gfg())
throw A.d(q)}q=o.a
if(0>=q.length)return A.e(q,-1)
q.pop()}catch(p){r=A.ag(p)
q=A.uV(a,r,o.gfg())
throw A.d(q)}},
iI(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.iJ(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d0(a)
q.nv(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d0(a)
r=q.nw(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return r}else return!1},
nv(a){var s,r,q=this.c
q.a+="["
s=J.aE(a)
if(s.gP(a)){this.cL(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cL(s.h(a,r))}}q.a+="]"},
nw(a){var s,r,q,p,o,n,m=this,l={}
if(a.gJ(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.cp(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.al(0,new A.q1(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.iJ(A.B(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.e(r,n)
m.cL(r[n])}p.a+="}"
return!0}}
A.q1.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:31}
A.q_.prototype={
gfg(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.k_.prototype={}
A.pp.prototype={
lA(a){return new A.qd(this.a).k0(t.L.a(a),0,null,!0)}}
A.qd.prototype={
k0(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.h_(b,c,J.b8(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Ac(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Ab(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.d5(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Ad(o)
l.b=0
throw A.d(A.a1(m,a,p+l.c))}return n},
d5(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.O(b+c,2)
r=q.d5(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.d5(a,s,c,d)}return q.lU(a,b,c,d)},
lU(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.b4(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.e(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.e(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.e(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ao(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ao(h)
e.a+=p
break
case 65:p=A.ao(h)
e.a+=p;--d
break
default:p=A.ao(h)
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
p=A.ao(a[l])
e.a+=p}else{p=A.vd(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ao(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.dN.prototype={
V(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.dN)if(this.a===b.a)s=this.b===b.b
return s},
gG(a){return A.ce(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
n(a){var s=this,r=A.xW(A.yV(s)),q=A.iy(A.yT(s)),p=A.iy(A.yP(s)),o=A.iy(A.yQ(s)),n=A.iy(A.yS(s)),m=A.iy(A.yU(s)),l=A.uD(A.yR(s)),k=s.b,j=k===0?"":A.uD(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaQ:1}
A.dc.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.dc&&this.a===b.a},
gG(a){return B.c.gG(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.O(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.O(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.mX(B.c.n(o%1e6),6,"0")},
$iaQ:1}
A.kk.prototype={
n(a){return this.A()},
$iF:1}
A.ah.prototype={
gbA(){return A.yO(this)}}
A.ic.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iH(s)
return"Assertion failed"}}
A.cX.prototype={}
A.c8.prototype={
gd7(){return"Invalid argument"+(!this.a?"(s)":"")},
gd6(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gd7()+q+o
if(!s.a)return n
return n+s.gd6()+": "+A.iH(s.ge7())},
ge7(){return this.b}}
A.eX.prototype={
ge7(){return A.tO(this.b)},
gd7(){return"RangeError"},
gd6(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.j_.prototype={
ge7(){return A.a(this.b)},
gd7(){return"RangeError"},
gd6(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.hf.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.jU.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.f0.prototype={
n(a){return"Bad state: "+this.a}}
A.ir.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iH(s)+"."}}
A.jq.prototype={
n(a){return"Out of Memory"},
gbA(){return null},
$iah:1}
A.h9.prototype={
n(a){return"Stack Overflow"},
gbA(){return null},
$iah:1}
A.pL.prototype={
n(a){return"Exception: "+this.a}}
A.G.prototype={
n(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.D(e,0,75)+"..."
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
k=""}return g+l+B.b.D(e,i,j)+k+"\n"+B.b.a1(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g}}
A.o.prototype={
cj(a,b){return A.xN(this,A.p(this).i("o.E"),b)},
bX(a,b,c){var s=A.p(this)
return A.jd(this,s.E(c).i("1(o.E)").a(b),s.i("o.E"),c)},
er(a,b){var s=A.p(this)
return new A.P(this,s.i("n(o.E)").a(b),s.i("P<o.E>"))},
es(a,b){return new A.ch(this,b.i("ch<0>"))},
bR(a,b,c,d){var s,r
d.a(b)
A.p(this).E(d).i("1(1,o.E)").a(c)
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a5(a,b){var s
A.p(this).i("n(o.E)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
S(a,b){var s
A.p(this).i("n(o.E)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
bz(a,b){var s=A.N(this,A.p(this).i("o.E"))
return s},
by(a){return this.bz(0,!0)},
gq(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gJ(a){return!this.gt(this).m()},
gP(a){return!this.gJ(this)},
gak(a){var s=this.gt(this)
if(!s.m())throw A.d(A.eQ())
return s.gp()},
gaB(a){var s,r=this.gt(this)
if(!r.m())throw A.d(A.eQ())
s=r.gp()
if(r.m())throw A.d(A.uO())
return s},
aZ(a,b,c){var s,r=A.p(this)
r.i("n(o.E)").a(b)
r.i("o.E()?").a(c)
for(r=this.gt(this);r.m();){s=r.gp()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.eQ())},
bb(a,b){return this.aZ(0,b,null)},
W(a,b){var s,r
A.jC(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.ng(b,b-r,this,"index"))},
n(a){return A.yw(this,"(",")")}}
A.W.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.al.prototype={
gG(a){return A.C.prototype.gG.call(this,0)},
n(a){return"null"}}
A.C.prototype={$iC:1,
V(a,b){return this===b},
gG(a){return A.fZ(this)},
n(a){return"Instance of '"+A.jx(this)+"'"},
gU(a){return A.l3(this)},
toString(){return this.n(this)}}
A.kK.prototype={
n(a){return""},
$icw:1}
A.pa.prototype={
gm0(){var s,r=this.b
if(r==null)r=$.oc.$0()
s=r-this.a
if($.ur()===1e6)return s
return s*1000}}
A.b4.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$izb:1}
A.po.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.B(b)
s=B.b.cz(b,"=")
if(s===-1){if(b!=="")a.k(0,A.tL(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.D(b,0,s)
q=B.b.bf(b,s+1)
p=this.a
a.k(0,A.tL(r,0,r.length,p,!0),A.tL(q,0,q.length,p,!0))}return a},
$S:40}
A.pn.prototype={
$2(a,b){throw A.d(A.a1("Illegal IPv6 address, "+a,this.a,b))},
$S:45}
A.hN.prototype={
gfD(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gG(r.gfD())
r.y!==$&&A.x3()
r.y=s
q=s}return q},
gbu(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.vl(s==null?"":s)
r.z!==$&&A.x3()
q=r.z=new A.ds(s,t.oP)}return q},
giG(){return this.b},
ge6(){var s=this.c
if(s==null)return""
if(B.b.R(s,"[")&&!B.b.a4(s,"v",1))return B.b.D(s,1,s.length-1)
return s},
ged(){var s=this.d
return s==null?A.vH(this.a):s},
gef(){var s=this.f
return s==null?"":s},
gi5(){var s=this.r
return s==null?"":s},
gi6(){return this.c!=null},
gi8(){return this.f!=null},
gi7(){return this.r!=null},
n(a){return this.gfD()},
V(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gew())if(p.c!=null===b.gi6())if(p.b===b.giG())if(p.ge6()===b.ge6())if(p.ged()===b.ged())if(p.e===b.gip()){r=p.f
q=r==null
if(!q===b.gi8()){if(q)r=""
if(r===b.gef()){r=p.r
q=r==null
if(!q===b.gi7()){s=q?"":r
s=s===b.gi5()}}}}return s},
$ijX:1,
gew(){return this.a},
gip(){return this.e}}
A.pm.prototype={
giF(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.b.cA(s,"?",m)
q=s.length
if(r>=0){p=A.hO(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.kg("data","",n,n,A.hO(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.kE.prototype={
gi6(){return this.c>0},
gi8(){return this.f<this.r},
gi7(){return this.r<this.a.length},
gew(){var s=this.w
return s==null?this.w=this.jY():s},
jY(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.R(r.a,"http"))return"http"
if(q===5&&B.b.R(r.a,"https"))return"https"
if(s&&B.b.R(r.a,"file"))return"file"
if(q===7&&B.b.R(r.a,"package"))return"package"
return B.b.D(r.a,0,q)},
giG(){var s=this.c,r=this.b+3
return s>r?B.b.D(this.a,r,s-1):""},
ge6(){var s=this.c
return s>0?B.b.D(this.a,s,this.d):""},
ged(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.wS(B.b.D(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.R(r.a,"http"))return 80
if(s===5&&B.b.R(r.a,"https"))return 443
return 0},
gip(){return B.b.D(this.a,this.e,this.f)},
gef(){var s=this.f,r=this.r
return s<r?B.b.D(this.a,s+1,r):""},
gi5(){var s=this.r,r=this.a
return s<r.length?B.b.bf(r,s+1):""},
gbu(){if(this.f>=this.r)return B.cb
return new A.ds(A.vl(this.gef()),t.oP)},
gG(a){var s=this.x
return s==null?this.x=B.b.gG(this.a):s},
V(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$ijX:1}
A.kg.prototype={}
A.nR.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.t2.prototype={
$1(a){return this.a.dn(this.b.i("0/?").a(a))},
$S:13}
A.t3.prototype={
$1(a){if(a==null)return this.a.fP(new A.nR(a===undefined))
return this.a.fP(a)},
$S:13}
A.ru.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.wk(a))return a
s=this.a
a.toString
if(s.M(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aI(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dE(!0,"isUtc",t.y)
return new A.dN(r,0,!0)}if(a instanceof RegExp)throw A.d(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aO(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.v(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.ci(n),p=s.gt(n);p.m();)m.push(A.d6(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.e(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.aE(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:55}
A.kp.prototype={
az(a){if(a<=0||a>4294967296)throw A.d(A.v4(u.w+a))
return Math.random()*a>>>0},
cE(){return Math.random()},
$itq:1}
A.f4.prototype={
cU(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.c.O(a-s,k)
r=a>>>0
a=B.c.O(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.O(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.O(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.O(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.O(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.O(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.aW()
l.aW()
l.aW()
l.aW()},
aW(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.O(o-n+(q-p)+(m-r),4294967296)>>>0},
az(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.v4(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aW()
return(p.a&s)>>>0}do{p.aW()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cE(){var s,r=this
r.aW()
s=r.a
r.aW()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$itq:1}
A.of.prototype={
C(){var s=this
if(B.a.S(A.f([s.d,s.e,s.f,s.r,s.w],t.t),new A.og()))throw A.d(B.et)}}
A.og.prototype={
$1(a){return A.a(a)<=0},
$S:28}
A.e5.prototype={
A(){return"QualityProfileKind."+this.b}}
A.e4.prototype={}
A.lU.prototype={}
A.lV.prototype={}
A.jv.prototype={
C(){var s,r,q,p,o=this
for(s=A.O(["exposure",o.a,"bloomStrength",o.b,"ssaoStrength",o.c,"depthOfFieldStrength",0,"vignette",o.e,"grain",o.f,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.T(s,A.p(s).i("T<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.d(A.w("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.d(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.eF.prototype={}
A.iM.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gac(0)||!k.b.gac(0)||!k.r.gac(0))throw A.d(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+k.d,j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gac(0)||r.gbU()<1e-12)A.k(A.w("DirectionalLight.direction must be finite and nonzero: "+r.n(0),j))
s=s.c
if(!isFinite(s)||s<0)A.k(A.w("DirectionalLight.intensity must be >= 0: "+A.q(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.w("PointLight.position must be finite: "+o.n(0),j))
o=p.d
if(!isFinite(o)||o<0)A.k(A.w("PointLight.intensity must be >= 0: "+A.q(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.w("PointLight.radius must be > 0: "+A.q(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.w("SpotLight.position must be finite: "+o.n(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.k(A.w("SpotLight.direction must be finite and nonzero: "+o.n(0),j))
if(p.w<=p.r)A.k(A.w("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.mr.prototype={}
A.cU.prototype={
V(a,b){if(b==null)return!1
return J.ew(b)===A.l3(this)&&b instanceof A.cU&&this.a===b.a&&this.b===b.b},
gG(a){return A.ce(A.l3(this),this.a,this.b,B.f,B.f,B.f)}}
A.bt.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bM.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cq.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.jr.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cO.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.dV.prototype={
A(){return"HandleRejection."+this.b}}
A.mS.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.cQ.prototype={
gac(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
V(a,b){if(b==null)return!1
return b instanceof A.cQ&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.ce(this.a,this.b,this.c,B.f,B.f,B.f)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.m7.prototype={}
A.ju.prototype={}
A.be.prototype={}
A.t4.prototype={
$2(a,b){var s,r=t.jX
r.a(a)
r.a(b)
s=B.d.F(b.a,a.a)
return s===0?B.c.F(a.b.a,b.b.a):s},
$S:63}
A.ib.prototype={
A(){return"AlphaMode."+this.b}}
A.e1.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.tn("roughness",1)
A.tn("metallic",0)
A.tn("occlusionStrength",1)
for(s=l.at,r=l.ax,q=[new A.at("uvScaleU",s),new A.at("uvScaleV",r),new A.at("uvOffsetU",0),new A.at("uvOffsetV",0),new A.at("tintR",l.c),new A.at("tintG",l.d),new A.at("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.w("MaterialDefinition."+n+" must be finite: "+A.q(m),k))}if(s===0||r===0)throw A.d(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cz.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.bf.prototype={}
A.pq.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.P[s]
q=r.c
if(q<=0)throw A.d(A.w(o+r.a.n(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.w(o+r.a.n(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.iV.a(new A.pr())
for(p=B.a.gt(B.P),q=new A.K(p,q,t.mV);q.m();)if(p.gp().c!==4)throw A.d(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.pr.prototype={
$1(a){return t.gm.a(a).a===B.cE},
$S:19}
A.c_.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.c.a0(s,14)!==0)throw A.d(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.l6()
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.d(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gac(0)&&s.b.gac(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.w("MeshData.localBounds must be a valid AABB",null))},
l6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.iV,a3=t.kh,a4=new A.P(B.P,a2.a(new A.nK()),a3)
if(!a4.gt(0).m())return
s=new A.P(B.P,a2.a(new A.nL()),a3)
if(s.gq(0)!==1)throw A.d(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaB(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaB(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a5(A.f([j,h,g,f,e,d,c],p),new A.nM()))throw A.d(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.q(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.q(c),a1))}}}
A.nK.prototype={
$1(a){return t.gm.a(a).a===B.cE},
$S:19}
A.nL.prototype={
$1(a){return t.gm.a(a).a===B.cD},
$S:19}
A.nM.prototype={
$1(a){return isFinite(A.d2(a))},
$S:5}
A.nT.prototype={
C(){var s=this.a,r=s.a
if(!r.u(0,"sceneColor")||!r.u(0,"present"))throw A.d(A.w("resource plan must contain sceneColor and present",null))
if(s.S(0,new A.nV()))throw A.d(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.u(0,"vhsOutput"))throw A.d(A.w("resource history does not match vhsOutput ownership",null))}}
A.nV.prototype={
$1(a){return A.B(a).length===0},
$S:4}
A.o8.prototype={}
A.jF.prototype={
ia(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.l("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
bL(){if(this.d)return
this.d=!0
this.a=null}}
A.eJ.prototype={
A(){return"DrawMode."+this.b}}
A.ij.prototype={
A(){return"BlendMode."+this.b}}
A.aU.prototype={}
A.jP.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.d(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.iq.prototype={
A(){return"ColorEncoding."+this.b}}
A.iC.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.jD.prototype={
C(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.dw(B.iC)
if(o.a!==0)A.k(A.aF(o,r,"contains unknown pipeline features"))
if(q.a===B.aY&&p.gP(p))A.k(A.aF(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.e7.prototype={
A(){return"RendererState."+this.b}}
A.mt.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.jg.prototype={
nc(a){return this.a.bK(a)}}
A.nI.prototype={
$3(a,b,c){return new A.cq(A.a(a),A.a(b),A.aD(c))},
$S:73}
A.jW.prototype={}
A.nN.prototype={
bn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.vr(d,new A.iP(c.byteLength,B.bL,B.eE))
if(d.b!==B.h)A.k(A.l(e))
s=A.b(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.cB(d)
A.bg(d,p)
if(d.b!==B.h)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.ab(t.S)
for(n=a.a,m=0;m<6;++m){l=B.P[m]
k=A.wG(l.a)
if(!o.l(0,k))continue
j=A.Aw(n,k,l)
if(d.b!==B.h)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.h)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.vr(d,new A.iP(i.byteLength,B.bL,B.bK))
if(d.b!==B.h)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.b(h.a)
r.bindBuffer(g,f)
if(d.b!==B.h)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.jW(b,h,p,d,c.length/14|0)},
ej(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dU(B.aL,a))
this.b.bK(a)
return s},
b0(a){var s,r,q=this.c.ae(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.b0(a)},
ei(){var s,r,q,p
for(s=this.b.bq(),r=s.$ti,s=new A.bS(s.a(),r.i("bS<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bn(p.b))}},
gbV(){return this.b.bq().bR(0,0,new A.nP(),t.S)}}
A.nO.prototype={
$3(a,b,c){return new A.bt(A.a(a),A.a(b),A.aD(c))},
$S:84}
A.nP.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:90}
A.d1.prototype={}
A.jS.prototype={
aV(a){var s=this.a,r=A.tB(s,B.eH)
A.tC(s,r,0,a)
return r},
np(a,b){var s,r,q,p=this,o=p.b,n=o.bK(a),m=A.N(n.b,t.nh)
B.a.k(m,0,b)
s=n.a
o.eo(a,new A.d1(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.tB(p.a,s)
o.k(0,r,q)}A.tC(p.a,q,0,b)},
kZ(a,b){var s
this.b.bK(a)
s=this.c.h(0,a.a)
return s==null?b:s},
n8(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.kZ(a,s)},
ne(a){var s=this.e
s===$&&A.h()
return s},
ng(a){var s=this.f
s===$&&A.h()
return s},
na(a){var s=this.r
s===$&&A.h()
return s},
ei(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aV($.uq())
i.e=i.aV($.uo())
i.f=i.aV($.up())
i.r=i.aV($.un())
for(s=i.b.bq(),r=s.$ti,s=new A.bS(s.a(),r.i("bS<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a5(o,new A.pj()))continue
l=A.tB(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.tC(p,l,k,j)}q.k(0,n.a,l)}},
gbV(){return this.b.bq().bR(0,0,new A.pi(),t.S)}}
A.ph.prototype={
$3(a,b,c){return new A.bM(A.a(a),A.a(b),A.aD(c))},
$S:105}
A.pj.prototype={
$1(a){return t.nh.a(a)==null},
$S:112}
A.pi.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:119}
A.dW.prototype={}
A.iK.prototype={
ln(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.U.a(a)
s=new A.oj(A.f([],t.hJ),A.ab(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].a9(s,b)
o=s.lm(a,!1)
if(o.b.length!==0)return new A.iL(o,B.fy)
q=o.a
n=A.M(q)
m=new A.Q(q,n.i("m(1)").a(new A.mn()),n.i("Q<1,m>")).be(0)
l=A.f([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.a8(d),j=0;j<1;++j){i=n[j]
if(!m.u(0,i.gZ().a))throw A.d(A.l('RenderFeature "'+k.gab()+'" created a pass "'+i.gZ().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.Y(l,new A.mo(o))
return new A.iL(o,l)}}
A.mn.prototype={
$1(a){return t.A.a(a).a},
$S:120}
A.mo.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.i9(s,new A.ml(a)),B.a.i9(s,new A.mm(b)))},
$S:121}
A.ml.prototype={
$1(a){return t.A.a(a).a===this.a.gZ().a},
$S:6}
A.mm.prototype={
$1(a){return t.A.a(a).a===this.a.gZ().a},
$S:6}
A.iL.prototype={}
A.eN.prototype={
A(){return"FrameQueueState."+this.b}}
A.ms.prototype={}
A.an.prototype={
gbv(){var s=this.c,r=A.M(s)
return new A.P(s,r.i("n(1)").a(new A.nX()),r.i("P<1>"))},
gc0(){var s=this.c,r=A.M(s)
return new A.P(s,r.i("n(1)").a(new A.nY()),r.i("P<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.nX.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.i||s===B.G},
$S:18}
A.nY.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:18}
A.bY.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.b1.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.h3.prototype={
A(){return"ResourceFormat."+this.b}}
A.cl.prototype={
A(){return"GraphStage."+this.b}}
A.ay.prototype={
ij(){var s=this
return new A.ay(s.a,s.b,s.c,s.d,s.e,s.f+1)},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.ay&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gG(a){var s=this
return A.ce(s.a,s.b,s.c,s.d,s.e,s.f)},
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.eY.prototype={
A(){return"ResourceAccess."+this.b}}
A.H.prototype={}
A.fy.prototype={}
A.od.prototype={
am(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.zx(m.a,a.c,r.a(a.d.gT().by(0)),r.a(a.f),a.b)}catch(q){if(A.ag(q) instanceof A.h8){++m.e
throw q}else throw q}p=new A.fy(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
k8(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.as(s,s.r,s.e,a.$ti.i("as<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.b3.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.ab(s)
for(q=this.d.gL(),q=q.gt(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.d(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.ab(s)
for(s=this.e.gL(),s=s.gt(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.d(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.oh.prototype={}
A.aT.prototype={
a7(){var s=this
return A.uF(B.d0,s.f,B.ad,B.Y,!0,!0,!0,!0,s.r,B.af,B.ag,s.d,s.e,!0,!1,!1)}}
A.oj.prototype={
lm(a,b){var s=this.l4(t.U.a(a),!1),r=this.a,q=A.M(r)
return new A.oi(A.ar(new A.P(r,q.i("n(1)").a(new A.oo()),q.i("P<1>")),t.A),s)},
l4(a,b){var s,r,q,p,o,n,m=this
t.U.a(a)
s=A.f([],t.aW)
r=m.a
q=A.M(r)
p=q.i("P<1>")
o=A.N(new A.P(r,q.i("n(1)").a(new A.on()),p),p.i("o.E"))
m.jN(o,a,s)
m.jR(o,s)
m.jT(o,s)
m.jQ(o,!1,s)
n=m.jV(o,s)
m.jS(o,n,s)
m.jU(o,s)
m.jP(o,n,s)
m.jO(o,s)
return s},
jN(a,b,c){var s,r,q,p
t.O.a(a)
t.U.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.K.dw(b)
if(p.a!==0)B.a.l(c,new A.b1(B.eS,q.a,"missing capabilities: "+p.aP(0,", ")))}},
jR(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbv(),o=J.S(p.a),p=new A.K(o,p.b,p.$ti.i("K<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.l(b,new A.b1(B.eN,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
jT(a,b){var s,r,q,p,o,n,m,l
t.O.a(a)
t.b.a(b)
for(s=A.M(a),r=s.i("n(1)").a(new A.om()),q=B.a.gt(a),s=new A.K(q,r,s.i("K<1>"));s.m();){r=q.gp()
p=r.gbv()
o=A.N(p,p.$ti.i("o.E"))
p=r.gc0()
n=A.N(p,p.$ti.i("o.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.b1(B.aH,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaB(o).a
l=B.a.gaB(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.b1(B.aH,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.b1(B.aH,r.a,"resolve source and destination must match format and extent"))}},
jQ(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.G)B.a.l(c,new A.b1(B.eQ,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
jV(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.b.a(b)
s=A.v(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gc0(),n=J.S(o.a),o=new A.K(n,o.b,o.$ti.i("K<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.b1(B.eM,m,l.n(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
jS(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbv(),p=J.S(q.a),q=new A.K(p,q.b,q.$ti.i("K<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.G)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.b1(B.bQ,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.cz(a,m)>s)B.a.l(c,new A.b1(B.bQ,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
jU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbv(),o=J.S(p.a),p=new A.K(o,p.b,p.$ti.i("K<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.G)continue
for(l=q.gc0(),k=J.S(l.a),l=new A.K(k,l.b,l.$ti.i("K<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.l(b,new A.b1(B.eP,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
jP(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbv(),o=J.S(p.a),p=new A.K(o,p.b,p.$ti.i("K<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.G)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gc0().bb(0,new A.ol(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.b1(B.eO,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
jO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
s=t.S
r=A.v(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gc0(),o=J.S(p.a),p=new A.K(o,p.b,p.$ti.i("K<1>"));p.m();){n=o.gp().a
r.k(0,n.a+"#"+n.f,q)}m=J.j4(p,t.nO)
for(l=0;l<p;++l)m[l]=A.ab(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbv(),p=J.S(s.a),s=new A.K(p,s.b,s.$ti.i("K<1>"));s.m();){o=p.gp()
if(o.b===B.G)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.e(m,k)
m[k].l(0,q)}}p=t.y
j=A.cp(s,!1,!1,p)
s=a.length
i=A.cp(s,!1,!1,p)
h=new A.ok(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.e(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.e(a,q)
B.a.l(b,new A.b1(B.eR,a[q].a,"participates in a resource dependency cycle"))}}}}
A.oo.prototype={
$1(a){t.A.a(a)
return A.to()},
$S:6}
A.on.prototype={
$1(a){t.A.a(a)
return A.to()},
$S:6}
A.om.prototype={
$1(a){return t.A.a(a).f},
$S:6}
A.ol.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:18}
A.ok.prototype={
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
r=A.q2(r,r.r,A.p(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.oi.prototype={}
A.ei.prototype={$ibL:1}
A.h0.prototype={
dk(a){var s,r,q,p,o,n=a.c,m=n.a
if(!m.gac(0))A.k(A.w("Transform.translation must be finite: "+m.n(0),null))
m=n.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)&&isFinite(m.d)))A.k(A.w("Transform.rotation must be finite: "+m.n(0),null))
if(!isFinite(1))A.k(A.w(u.u,null))
m=this.a.bK(a.a).d
n=n.af()
s=m.a
r=s.a
q=s.b
s=s.c
m=m.b
p=m.a
o=m.b
m=m.c
return A.bq(new A.Q(A.f([new A.D(r,q,s),new A.D(p,q,s),new A.D(r,o,s),new A.D(p,o,s),new A.D(r,q,m),new A.D(p,q,m),new A.D(r,o,m),new A.D(p,o,m)],t.k),t.pc.a(n.gaA()),t.mz))},
ge8(){return new A.cC(this.mq(),t.fJ)},
mq(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$ge8(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bq(),n=o.$ti,o=new A.bS(o.a(),n.i("bS<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
if(!(f>=0&&f<j.length)){A.e(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.af()
f=f.gaD()
d=A.M(f)
r=5
return a.b=new A.ei(h,g,A.bq(new A.Q(f,d.i("D(1)").a(i.gaA()),d.i("Q<1,D>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iz0:1}
A.oq.prototype={
$3(a,b,c){return new A.cO(A.a(a),A.a(b),A.aD(c))},
$S:37}
A.r1.prototype={
$1(a){var s=this.a.w.a.ej(a),r=s.b!=null,q=r?s.d:s.e
return new A.h2(s.c,r,q)},
$S:38}
A.r2.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.u(0,a))return this.b.x.gp().il(a)
if(b!=null&&s.u(0,b))return this.b.x.gp().il(b)
throw A.d(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:39}
A.r0.prototype={
$0(){return this.a.$1("shadowMap")},
$S:3}
A.qU.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gak(r)},
$S:41}
A.qV.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.aP
s=q.b.z
r=s.length===0?null:B.a.gak(s)
return A.Cv(s,3,q.a.d,r)},
$S:42}
A.r_.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:3}
A.qP.prototype={
$0(){return this.a.at.a},
$S:43}
A.qR.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:3}
A.qQ.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:3}
A.qZ.prototype={
$0(){return this.a.$1("sceneColor")},
$S:3}
A.qN.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:3}
A.qO.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:3}
A.qW.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:3}
A.qX.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:3}
A.qY.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:3}
A.qT.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:3}
A.qS.prototype={
$0(){return this.a.at.w},
$S:44}
A.r3.prototype={
$0(){return this.a},
$S:36}
A.q8.prototype={}
A.ky.prototype={$iz_:1}
A.km.prototype={$iyi:1}
A.oz.prototype={
eh(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.C()
r=s.b.au(a,b)
s.c.k(0,r.a,s.bn(a))
this.d.l(0,r)
return r},
iA(a){if(this.r)A.k(A.l("resource library is disposed"))
this.a.b0(a)
this.d.ae(0,a)},
iy(a){var s
if(this.r)A.k(A.l("resource library is disposed"))
a.C()
s=this.b.a.au(a,null)
this.e.l(0,s)
return s},
iz(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.au(new A.d1(new A.iR(c,b,1,!1,B.ak,B.ak,B.bN),A.cp(1,null,!1,t.nh),!1),a)
this.f.l(0,s)
return s},
bL(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.N(s,A.p(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.ae(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b0(k)}r=i.e
q=A.N(r,A.p(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.r)(q),++l)o.b0(q[l])
q=i.d
p=A.N(q,A.p(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.r)(p),++l)n.b0(p[l])
s.H(0)
r.H(0)
q.H(0)
i.r=!0}}
A.oF.prototype={
gaI(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
ib(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.b0)throw A.d(A.l("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.a2)throw A.d(A.l("renderer device is context lost"))
m.e=B.ig
try{m.r=s.iv()
r=m.b
q=A.nU(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.C()
p.a=a
A.nU(a)
p.d=1
r.b.ia(q)
r=A.yF()
m.w=new A.oz(A.yG(s),r,A.zd(s),A.ab(t.l0),A.ab(t.fP),A.ab(t.lu))
r=new A.jF()
p=new A.mG(s,r)
q=A.nU(a)
o=p.eY(q,a)
r.ia(q)
p.c=new A.jw(new A.o8(q),o)
m.x=p
m.y=new A.od(s,A.v(t.N,t.e3))
m.as=a
A.w6(m)
m.e=B.b1}catch(n){s=m.y
if(s!=null){r=s.b
s.k8(new A.aR(r,A.p(r).i("aR<2>")))
r.H(0)}s=m.x
if(s!=null)s.bL()
s=m.w
if(s!=null)s.bL()
m.w=null
m.e=B.b0
throw n}return A.te(t.H)},
m3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.c8()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.d(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.aF)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.jO(j,0,A.dE(k.c,"count",t.S),A.M(j).c).bz(0,!1)
k.b=B.ex
q=i
try{A.AG(a3,r,s)
k=r.ge8()
j=t.p9
h=k.$ti
k=A.N(A.jd(k,h.i("aU(o.E)").a(new A.oG()),h.i("o.E"),j),j)
p=k
J.xt(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.r)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.dU(B.aL,h))
j=j.b
d=j.$ti
j.a2(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.e(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.O(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.a_()
n=j+h}p=s.e
k=J.b8(o)
j=n
h=J.b8(o)
f=a3.w
d=f.a.gbV()
f=f.c.gbV()
c=a3.w
c.a.gbV()
c.c.gbV()
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
return new A.mt(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
kJ(){var s,r,q,p=this
if(p.e!==B.cs)return
if(p.a.b===B.a2)throw A.d(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.l("resource library is disposed"))
s.a.ei()
s.c.ei()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.l("GPU resource adapter is not initialized"))
s.c=new A.jw(q.a,s.eY(A.nU(r),r))
s=p.y
s.c=null
s.b.H(0)
A.w6(p)
p.e=B.b1},
c8(){var s=this.e
if(s!==B.b1)throw A.d(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.a2){this.e=B.cs
throw A.d(A.l("renderer context lost"))}}}
A.oG.prototype={
$1(a){return t.os.a(a).b},
$S:46}
A.bu.prototype={
F(a,b){var s,r=this
t.nL.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$iaQ:1}
A.br.prototype={
F(a,b){var s
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$iaQ:1}
A.az.prototype={}
A.t8.prototype={
$2(a,b){var s=t.E
return s.a(a).a.F(0,s.a(b).a)},
$S:47}
A.t9.prototype={
$1(a){return t.E.a(a).b},
$S:48}
A.t6.prototype={
$2(a,b){var s=t.d
return s.a(a).a.F(0,s.a(b).a)},
$S:49}
A.t7.prototype={
$1(a){return t.d.a(a).b},
$S:50}
A.m3.prototype={}
A.i9.prototype={
gaD(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.f([new A.D(o,n,p),new A.D(r,n,p),new A.D(o,q,p),new A.D(r,q,p),new A.D(o,n,s),new A.D(r,n,s),new A.D(o,q,s),new A.D(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.e3.prototype={}
A.eO.prototype={
A(){return"FrustumTest."+this.b}}
A.mu.prototype={
nm(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.bJ
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.ey:B.ez}}
A.mv.prototype={
$4(a,b,c,d){var s=new A.D(a,b,c),r=new A.e3(s,d),q=Math.sqrt(s.gbU())
if(q<1e-9)s=r
else{s=1/q
s=new A.e3(new A.D(a*s,b*s,c*s),d/q)}return s},
$S:51}
A.cS.prototype={
a1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.e(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.e(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.e(h,j)
h[j]=l}return new A.cS(h)},
iC(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.fQ.a(a)
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
return h===0||h===1?new A.D(k,j,i):new A.D(k/h,j/h,i/h)},
ik(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.cS(h)},
gac(a){return B.q.a5(this.a,new A.nH())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.nH.prototype={
$1(a){return isFinite(A.d2(a))},
$S:5}
A.jB.prototype={
n(a){var s=this
return"Quat("+A.q(s.a)+", "+A.q(s.b)+", "+A.q(s.c)+", "+A.q(s.d)+")"}}
A.jT.prototype={
C(){var s=this.a
if(!s.gac(0))throw A.d(A.w("Transform.translation must be finite: "+s.n(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.w("Transform.rotation must be finite: "+s.n(0),null))
if(!isFinite(1))throw A.d(A.w(u.u,null))},
af(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.v_(A.f([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.v_(A.f([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
n(a){return"Transform("+this.a.n(0)+", "+this.b.n(0)+", scale=1)"}}
A.D.prototype={
bM(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b6(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.D(s*r-q*p,q*o-n*r,n*p-s*o)},
gbU(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbU())},
gac(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga6(){var s=this,r=Math.sqrt(s.gbU())
return r<1e-9?B.aa:new A.D(s.a/r,s.b/r,s.c/r)},
V(a,b){if(b==null)return!1
return b instanceof A.D&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.ce(this.a,this.b,this.c,B.f,B.f,B.f)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.hm.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.fw.prototype={
gab(){return this.f},
a9(a,b){B.a.l(a.a,new A.an(this.f,B.H,A.f([new A.H(this.x,B.i),new A.H(this.y,B.j)],t.C),!1))},
a8(a){var s=this,r=s.a.am(new A.b3(s.e,s.b,s.c,B.t,B.c9,B.c5)),q=A.cB(s.d),p=t.n,o=s.r===B.cJ?new Float32Array(A.Y(A.f([1/s.Q,0],p))):new Float32Array(A.Y(A.f([0,1/s.as],p)))
p=s.y
return A.f([new A.kd(new A.aT(s.f,A.f([new A.H(s.x,B.i),new A.H(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$iaf:1}
A.kd.prototype={
aa(a){var s,r,q,p=this
if(a.c.e.b<=0)return
s=a.b.a
A.bQ(s,a.ag(p.r).b)
A.b5(s,p.a.a7())
A.d0(s,B.a0,1,0,0,0)
A.c2(s,p.b.b)
r=t._
q=p.d
if(p.e)A.zu(s,0,r.a(q.$0()))
else A.aw(s,0,r.a(q.$0()))
A.u(s,"uSource",B.u)
A.u(s,"uTexelStep",new A.x(B.aq,p.f))
A.bg(s,p.c)
A.cg(s,3,0)},
$ia4:1,
gZ(){return this.a}}
A.ik.prototype={
gab(){return"bloomComposite"},
a9(a,b){B.a.l(a.a,new A.an("bloomComposite",B.H,A.f([new A.H(this.f,B.i),new A.H(this.r,B.i),new A.H(this.w,B.j)],t.C),!1))},
a8(a){var s=this,r="bloomComposite",q=s.a.am(new A.b3(r,s.b,s.c,B.t,B.h1,B.fP)),p=A.cB(s.d),o=s.w,n=A.f([new A.H(s.f,B.i),new A.H(s.r,B.i),new A.H(o,B.j)],t.C)
return A.f([new A.ke(new A.aT(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$iaf:1}
A.ke.prototype={
aa(a){var s,r=this,q=a.c.e.b
if(q<=0)return
s=a.b.a
A.bQ(s,a.cK(r.f).b)
A.zv(s,1)
A.b5(s,B.dn)
A.c2(s,r.b.b)
A.aw(s,0,t._.a(r.d.$0()))
A.u(s,"uBloom",B.u)
A.u(s,"uBloomStrength",new A.x(B.e,q))
A.bg(s,r.c)
A.cg(s,3,0)},
$ia4:1,
gZ(){return this.a}}
A.iA.prototype={
gab(){return"depthPrepass"},
a9(a,b){B.a.l(a.a,new A.an("depthPrepass",B.eJ,A.f([new A.H(this.w,B.j)],t.C),!1))},
a8(a){var s=this,r="depthPrepass",q=s.a.am(new A.b3(r,s.b,s.c,B.c8,B.c6,B.fm))
return A.f([new A.kh(new A.aT(r,A.f([new A.H(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iaf:1}
A.kh.prototype={
aa(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bQ(b,a.ag("sceneDepth").b)
A.b5(b,g.a.a7())
A.d0(b,B.aC,1,0,0,0)
A.c2(b,g.b.b)
A.u(b,"uVertexSnapGrid",new A.x(B.e,c.y))
A.u(b,"uAlbedo",B.u)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.r)(s),++m){l=s[m]
k=l.a.b
A.u(b,"uViewProjection",new A.x(B.r,new Float32Array(A.Y(d))))
A.u(b,"uModel",new A.x(B.r,new Float32Array(A.Y(k.c.af().a))))
g.k9(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.h)A.k(A.l(f))
n.bindVertexArray(A.b(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.h)A.k(A.l(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.h)A.k(A.l(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
k9(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aw(q,0,t._.a(this.e.$1(r.b)))
A.u(q,"uAlphaCutoff",new A.x(B.e,0))
A.u(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.a7()
A.b5(q,r.cy?s.eu(!1):s)},
$ia4:1,
gZ(){return this.a}}
A.ho.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.fB.prototype={
gab(){return this.f},
a9(a,b){B.a.l(a.a,new A.an(this.f,B.H,A.f([new A.H(this.w,B.i),new A.H(this.x,B.j)],t.C),!1))},
a8(a){var s=this,r=s.a.am(new A.b3(s.e,s.b,s.c,B.t,B.c9,B.c5)),q=A.cB(s.d),p=t.n,o=s.r===B.cK?new Float32Array(A.Y(A.f([1/s.z,0],p))):new Float32Array(A.Y(A.f([0,1/s.Q],p)))
p=s.x
return A.f([new A.ki(new A.aT(s.f,A.f([new A.H(s.w,B.i),new A.H(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$iaf:1}
A.ki.prototype={
aa(a){return},
$ia4:1,
gZ(){return this.a}}
A.iE.prototype={
gab(){return"dofComposite"},
a9(a,b){var s=this
B.a.l(a.a,new A.an("dofComposite",B.H,A.f([new A.H(s.z,B.i),new A.H(s.Q,B.i),new A.H(s.as,B.i),new A.H(s.at,B.j)],t.C),!1))},
a8(a){var s=this,r="dofComposite",q=s.a.am(new A.b3(r,s.b,s.c,B.t,B.h0,B.fl)),p=A.cB(s.d)
return A.f([new A.kj(new A.aT(r,A.f([new A.H(s.z,B.i),new A.H(s.Q,B.i),new A.H(s.as,B.i),new A.H(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iaf:1}
A.kj.prototype={
aa(a){var s,r=this,q=a.ag("dofOutput"),p=r.r.$0(),o=a.b.a
A.bQ(o,q.b)
A.b5(o,r.a.a7())
A.c2(o,r.b.b)
s=t._
A.aw(o,0,s.a(r.d.$0()))
A.u(o,"uSharp",B.u)
A.aw(o,1,s.a(r.e.$0()))
A.u(o,"uBlurred",B.a9)
A.aw(o,2,s.a(r.f.$0()))
A.u(o,"uSceneDepth",B.cC)
A.u(o,"uNear",new A.x(B.e,p.f))
A.u(o,"uFar",new A.x(B.e,p.r))
A.u(o,"uFocusDistance",new A.x(B.e,r.w))
A.u(o,"uFocusRange",new A.x(B.e,r.x))
A.u(o,"uStrength",new A.x(B.e,0))
A.bg(o,r.c)
A.cg(o,3,0)},
$ia4:1,
gZ(){return this.a}}
A.iU.prototype={
gab(){return"grade"},
a9(a,b){B.a.l(a.a,new A.an("grade",B.H,A.f([new A.H(this.r,B.i),new A.H(this.w,B.j)],t.C),!1))},
a8(a){var s=this,r=s.a.am(new A.b3("grade",s.b,s.c,B.t,B.fZ,B.fQ)),q=A.cB(s.d),p=s.r,o=s.w
return A.f([new A.ko(new A.aT("grade",A.f([new A.H(p,B.i),new A.H(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$iaf:1}
A.ko.prototype={
aa(a){var s=this,r=a.ag(s.f.a),q=a.b.a
A.bQ(q,a.ag(s.r.a).b)
A.b5(q,s.a.a7())
A.c2(q,s.b.b)
A.aw(q,0,r.b)
A.u(q,"uScene",B.u)
A.aw(q,1,t._.a(s.d.$0()))
A.u(q,"uLut",B.a9)
A.u(q,"uLutSize",new A.x(B.e,s.e))
A.u(q,"uStrength",new A.x(B.e,a.c.e.w))
A.bg(q,s.c)
A.cg(q,3,0)},
$ia4:1,
gZ(){return this.a}}
A.ji.prototype={
gab(){return"msaaResolve"},
a9(a,b){B.a.l(a.a,new A.an("msaaResolve",B.eK,A.f([new A.H(this.b,B.i),new A.H(this.c,B.j)],t.C),!0))},
a8(a){var s=this.b,r=this.c
return A.f([new A.kt(new A.aT("msaaResolve",A.f([new A.H(s,B.i),new A.H(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$iaf:1}
A.kt.prototype={
aa(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cK(this.c),j=a.cK(this.d),i=this.b
if(i.b!==B.h)A.k(A.l(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.k(A.w("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.k(A.w("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.k(A.w("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.f([A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(m.WebGL2RenderingContext.NONE)],t.n))}A.ae(i,l,[0,0,s,r.x,0,0,p,q.x,A.a(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.f([A.a(m.WebGL2RenderingContext.NONE),A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.ae(i,l,[0,0,s,r.x,0,0,p,q.x,A.a(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.ae(i,l,[0,0,s,r.x,0,0,p,q.x,A.a(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.f([A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$ia4:1,
gZ(){return this.a}}
A.eE.prototype={}
A.il.prototype={
ag(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cK(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ag(s)},
$iyZ:1}
A.tp.prototype={}
A.fY.prototype={
gab(){return"present"},
a9(a,b){B.a.l(a.a,new A.an("present",B.eL,A.f([new A.H(this.f,B.i)],t.C),!1))},
a8(a){var s=this,r=s.a.am(new A.b3("present",s.b,s.c,B.t,B.ha,B.fj)),q=A.cB(s.d),p=s.f
return A.f([new A.kz(new A.aT("present",A.f([new A.H(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$iaf:1}
A.kz.prototype={
aa(a){var s,r=this,q=a.cK(r.d),p=a.b.a
A.bQ(p,null)
A.b5(p,r.a.a7())
A.c2(p,r.b.b)
A.bg(p,r.c)
A.aw(p,0,q.b)
s=a.c.e
A.u(p,"uExposure",new A.x(B.e,s.a))
A.u(p,"uVignette",new A.x(B.e,s.e))
A.u(p,"uGrain",new A.x(B.e,s.f))
A.u(p,"uOutputEncoding",new A.x(B.e,r.e===B.aD?1:0))
A.u(p,"uToneMap",B.j8)
A.cg(p,3,0)},
$ia4:1,
gZ(){return this.a}}
A.jA.prototype={
gab(){return"ps1Quantize"},
a9(a,b){B.a.l(a.a,new A.an("ps1Quantize",B.H,A.f([new A.H(this.e,B.i),new A.H(this.f,B.j)],t.C),!1))},
a8(a){var s=this,r="ps1Quantize",q=s.a.am(new A.b3(r,s.b,s.c,B.t,B.h3,B.fe)),p=A.cB(s.d),o=s.e,n=s.f
return A.f([new A.kA(new A.aT(r,A.f([new A.H(o,B.i),new A.H(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$iaf:1}
A.kA.prototype={
aa(a){var s=this,r=a.ag(s.d.a),q=a.b.a
A.bQ(q,a.ag(s.e.a).b)
A.b5(q,s.a.a7())
A.c2(q,s.b.b)
A.aw(q,0,r.b)
A.u(q,"uScene",B.u)
A.u(q,"uQuantizationBits",new A.x(B.e,a.c.e.z))
A.u(q,"uDitherStrength",new A.x(B.e,0))
A.bg(q,s.c)
A.cg(q,3,0)},
$ia4:1,
gZ(){return this.a}}
A.ea.prototype={}
A.jI.prototype={
gab(){return"shadow"},
a9(a,b){B.a.l(a.a,new A.an("shadowCaster",B.eI,A.f([new A.H(this.x,B.j)],t.C),!1))},
a8(a){var s=this,r="shadowCaster",q=s.a.am(new A.b3(r,s.b,s.c,B.c8,B.c6,B.fO))
return A.f([new A.kC(new A.aT(r,A.f([new A.H(s.x,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$iaf:1}
A.kC.prototype={
aa(a){var s,r,q,p,o=this,n=a.ag("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bQ(s,n.b)
A.b5(s,o.a.a7())
A.d0(s,B.aC,1,0,0,0)
return}r=A.vb(l)
o.r.$1(r)
s=m.a
A.bQ(s,n.b)
A.b5(s,o.a.a7())
A.d0(s,B.aC,1,0,0,0)
A.c2(s,o.b.b)
A.u(s,"uAlbedo",B.u)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.kb(m,s[p],r)},
fu(a,b){var s,r=this.d.$1(b),q=a.a
A.aw(q,0,t._.a(this.e.$1(r.b)))
A.u(q,"uAlphaCutoff",new A.x(B.e,0))
s=this.a.a7()
A.b5(q,r.cy?s.eu(!1):s)},
kb(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.ei){s=b.b
if(!s.r)return
n.fo(a,s.c,c)
n.fu(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bg(s,r.a)
q=r.b
p=r.c
if(q)A.tz(s,p,0)
else A.cg(s,p,0)}else if(b instanceof A.dW){s=b.a.b
if(!s.r)return
n.fo(a,s.c,c)
n.fu(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bg(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.tA(s,p,o,0)
else A.ty(s,p,0,o)}else throw A.d(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ew(b).n(0),null))},
fo(a,b,c){var s=a.a
A.u(s,"uModel",new A.x(B.r,new Float32Array(A.Y(b.af().a))))
A.u(s,"uLightViewProjection",new A.x(B.r,new Float32Array(A.Y(c.a.a))))},
$ia4:1,
gZ(){return this.a}}
A.rs.prototype={
$1(a){return this.a.a=a},
$S:53}
A.rt.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:54}
A.jJ.prototype={
gab(){return"shadowedWorld"},
a9(a,b){var s=this,r=A.f([new A.H(s.cy,B.i)],t.C)
if(s.ax)r.push(new A.H(s.db,B.i))
r.push(new A.H(s.dx,B.j))
B.a.l(a.a,new A.an("shadowedWorld",B.bP,r,!1))},
a8(a){var s=this,r="shadowedWorld",q=s.a.am(new A.b3(r,s.b,s.c,B.h5,B.h7,B.fs)),p=A.f([new A.H(s.cy,B.i)],t.C)
if(s.ax)p.push(new A.H(s.db,B.i))
p.push(new A.H(s.dx,B.j))
return A.f([new A.kD(new A.aT(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ay,s.ch,s.CW,s.cx)],t.u)},
$iaf:1}
A.kD.prototype={
aa(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ag("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.y.$0(),b1=a5.a
A.bQ(b1,a4.b)
A.b5(b1,a2.a.a7())
s=a8.a
A.d0(b1,B.bz,1,s.c,s.b,s.a)
A.c2(b1,a2.b.b)
A.u(b1,"uAlbedo",B.u)
A.u(b1,"uNormalMap",B.j9)
A.u(b1,"uOrmMap",B.ja)
A.u(b1,"uEmissiveMap",B.jb)
s=t._
A.aw(b1,1,s.a(a2.x.$0()))
A.u(b1,"uShadowMap",B.a9)
r=t.n
A.u(b1,"uShadowMapTexelSize",new A.x(B.aq,new Float32Array(A.Y(A.f([1/a2.ay,1/a2.ch],r)))))
A.aw(b1,2,s.a(a2.as.$0()))
A.u(b1,"uSsao",B.cC)
A.u(b1,"uVertexSnapGrid",new A.x(B.e,a9.y))
A.u(b1,"uSceneColorSize",new A.x(B.aq,new Float32Array(A.Y(A.f([a2.at,a2.ax],r)))))
A.u(b1,"uViewProjection",new A.x(B.r,new Float32Array(A.Y(a7.c.a))))
A.u(b1,"uView",new A.x(B.r,new Float32Array(A.Y(a7.a.a))))
A.u(b1,"uLightViewProjection",new A.x(B.r,new Float32Array(A.Y(b0.a.a))))
s=a8.b
A.u(b1,"uFogColor",new A.x(B.n,new Float32Array(A.Y(A.f([s.a,s.b,s.c],r)))))
A.u(b1,"uFogStart",new A.x(B.e,a8.c))
A.u(b1,"uFogEnd",new A.x(B.e,a8.d))
A.u(b1,"uFogHeightFalloff",new A.x(B.e,0))
A.u(b1,"uFogDensity",new A.x(B.e,0))
q=a2.z.$0()
s=A.f([],t.D)
p=a2.Q.$0()
p=J.S(p==null?B.aP:p)
o=q==null
while(p.m()){n=p.gp()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.W
k=o?a3:q.c
if(k==null)k=B.ar
A.u(b1,"uLightPosition",new A.x(B.n,new Float32Array(A.Y(A.f([l.a,l.b,l.c],r)))))
A.u(b1,"uLightDirection",new A.x(B.n,new Float32Array(A.Y(A.f([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.O
A.u(b1,"uLightColor",new A.x(B.n,new Float32Array(A.Y(A.f([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.u(b1,"uLightIntensity",new A.x(B.e,p==null?0:p))
A.u(b1,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.W
g=p?a3:i.b
if(g==null)g=B.O
A.u(b1,"uDirectionalDirection",new A.x(B.n,new Float32Array(A.Y(A.f([h.a,h.b,h.c],r)))))
A.u(b1,"uDirectionalColor",new A.x(B.n,new Float32Array(A.Y(A.f([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.u(b1,"uDirectionalIntensity",new A.x(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.e(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.aa
c=n?a3:e.c
if(c==null)c=B.O
m=""+f
A.u(b1,"uPointPosition"+m,new A.x(B.n,new Float32Array(A.Y(A.f([d.a,d.b,d.c],r)))))
A.u(b1,"uPointColor"+m,new A.x(B.n,new Float32Array(A.Y(A.f([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.u(b1,"uPointIntensity"+m,new A.x(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.u(b1,"uPointRadius"+m,new A.x(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.e(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.aa
a=p?a3:e.c
if(a==null)a=B.ar
c=p?a3:e.d
if(c==null)c=B.O
n=""+f
A.u(b1,"uDirectSpotPosition"+n,new A.x(B.n,new Float32Array(A.Y(A.f([d.a,d.b,d.c],r)))))
A.u(b1,"uDirectSpotDirection"+n,new A.x(B.n,new Float32Array(A.Y(A.f([a.a,a.b,a.c],r)))))
A.u(b1,"uDirectSpotColor"+n,new A.x(B.n,new Float32Array(A.Y(A.f([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.u(b1,"uDirectSpotIntensity"+n,new A.x(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.u(b1,"uDirectSpotRange"+n,new A.x(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.u(b1,"uDirectSpotInnerCos"+n,new A.x(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.u(b1,"uDirectSpotOuterCos"+n,new A.x(B.e,Math.cos(m)))
p=p?0:1
A.u(b1,"uDirectSpotEnabled"+n,new A.x(B.e,p))}s=o?a3:q.f
A.u(b1,"uLightRange",new A.x(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.u(b1,"uLightInnerCos",new A.x(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.u(b1,"uLightOuterCos",new A.x(B.e,Math.cos(s)))
a0=a8.r
A.u(b1,"uAmbientColor",new A.x(B.n,new Float32Array(A.Y(A.f([a0.a,a0.b,a0.c],r)))))
A.u(b1,"uAmbientIntensity",new A.x(B.e,a8.w))
for(b1=a6.a,s=b1.length,r=a9.x,a1=0;a1<b1.length;b1.length===s||(0,A.r)(b1),++a1)a2.fv(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.r)(a6),++a1)a2.fv(a5,a6[a1],r)},
fv(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.ei){s=b.b
n.fw(a,s.c)
n.fp(a,s.b,s.e,s.f,c,!0)
r=n.c.$1(s.a)
s=a.a
A.bg(s,r.a)
q=r.b
p=r.c
if(q)A.tz(s,p,0)
else A.cg(s,p,0)}else if(b instanceof A.dW){s=b.a.b
n.fw(a,s.c)
n.fp(a,s.b,s.e,s.f,c,!0)
r=n.c.$1(s.a)
s=a.a
A.bg(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.tA(s,p,o,0)
else A.ty(s,p,0,o)}else throw A.d(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ew(b).n(0),null))},
fp(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aw(o,0,p.a(s.e.$1(q.b)))
A.aw(o,3,p.a(s.f.$1(r)))
A.aw(o,4,p.a(s.r.$1(r)))
A.aw(o,5,p.a(s.w.$1(r)))
A.u(o,"uAlphaCutoff",new A.x(B.e,0))
A.u(o,"uOpaqueCoverage",new A.x(B.e,c===B.aE?0:1))
A.u(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.u(o,"uMaterialTint",new A.x(B.n,new Float32Array(A.Y(A.f([q.c,q.d,q.e],p)))))
A.u(o,"uEmissiveStrength",new A.x(B.e,0))
A.u(o,"uUvScaleOffset",new A.x(B.j7,new Float32Array(A.Y(A.f([q.at,q.ax,0,0],p)))))
A.u(o,"uNormalStrength",new A.x(B.e,1))
A.u(o,"uRoughness",new A.x(B.e,1))
A.u(o,"uMetallic",new A.x(B.e,0))
A.u(o,"uOcclusionStrength",new A.x(B.e,1))
A.u(o,"uReceivesShadow",new A.x(B.e,1))
A:{p=r
if(B.aE===c){switch(d.a){case 0:p=B.dq
break
case 1:p=B.dp
break}break A}if(B.M===c||B.dm===c){p=s.a.a7()
break A}}A.b5(o,q.cy?p.eu(!1):p)},
fw(a,b){var s=b.af(),r=a.a
A.u(r,"uModel",new A.x(B.r,new Float32Array(A.Y(s.a))))
A.u(r,"uNormalMatrix",new A.x(B.r,new Float32Array(A.Y(s.ik().a))))},
$ia4:1,
gZ(){return this.a}}
A.jM.prototype={
gab(){return"ssaoOcclusion"},
a9(a,b){B.a.l(a.a,new A.an("ssaoOcclusion",B.bO,A.f([new A.H(this.w,B.j)],t.C),!1))},
a8(a){var s=this,r="ssaoOcclusion",q=s.a.am(new A.b3(r,s.b,s.c,B.t,B.h2,B.fb)),p=A.cB(s.d)
return A.f([new A.kH(new A.aT(r,A.f([new A.H(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iaf:1}
A.kH.prototype={
aa(a){var s,r,q,p=this,o=a.c.e.c,n=a.b.a
A.bQ(n,a.ag("ssaoRaw").b)
A.b5(n,p.a.a7())
if(o<=0){A.d0(n,B.a0,1,1,1,1)
return}A.d0(n,B.a0,1,0,0,0)
s=p.e.$0()
A.c2(n,p.b.b)
A.aw(n,0,t._.a(p.d.$0()))
A.u(n,"uSceneDepth",B.u)
A.u(n,"uNear",new A.x(B.e,s.f))
A.u(n,"uFar",new A.x(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.e(r,0)
A.u(n,"uProjScaleX",new A.x(B.e,r[0]))
if(5>=q)return A.e(r,5)
A.u(n,"uProjScaleY",new A.x(B.e,r[5]))
A.u(n,"uRadius",new A.x(B.e,p.f))
A.u(n,"uStrength",new A.x(B.e,o))
A.bg(n,p.c)
A.cg(n,3,0)},
$ia4:1,
gZ(){return this.a}}
A.jL.prototype={
gab(){return"ssaoBlur"},
a9(a,b){B.a.l(a.a,new A.an("ssaoBlur",B.bO,A.f([new A.H(this.y,B.i),new A.H(this.z,B.j)],t.C),!1))},
a8(a){var s=this,r="ssaoBlur",q=s.a.am(new A.b3(r,s.b,s.c,B.t,B.fW,B.fT)),p=A.cB(s.d)
return A.f([new A.kG(new A.aT(r,A.f([new A.H(s.y,B.i),new A.H(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$iaf:1}
A.kG.prototype={
aa(a){var s,r,q=this,p=a.b.a
A.bQ(p,a.ag("ssaoBlurred").b)
A.b5(p,q.a.a7())
if(a.c.e.c<=0){A.d0(p,B.a0,1,1,1,1)
return}A.d0(p,B.a0,1,0,0,0)
s=q.f.$0()
A.c2(p,q.b.b)
r=t._
A.aw(p,0,r.a(q.d.$0()))
A.u(p,"uSsaoRaw",B.u)
A.aw(p,1,r.a(q.e.$0()))
A.u(p,"uSceneDepth",B.a9)
A.u(p,"uTexelSize",new A.x(B.aq,new Float32Array(A.Y(A.f([1/q.r,1/q.w],t.n)))))
A.u(p,"uNear",new A.x(B.e,s.f))
A.u(p,"uFar",new A.x(B.e,s.r))
A.bg(p,q.c)
A.cg(p,3,0)},
$ia4:1,
gZ(){return this.a}}
A.k1.prototype={
gab(){return"vhs"},
a9(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.an("vhs",B.H,A.f([new A.H(this.r,B.i),new A.H(s,B.G),new A.H(s,B.j)],t.C),!1))},
a8(a){var s=this,r=s.a.am(new A.b3("vhs",s.b,s.c,B.t,B.fX,B.ff)),q=A.cB(s.d),p=s.r,o=s.w
return A.f([new A.kN(new A.aT("vhs",A.f([new A.H(p,B.i),new A.H(o,B.G),new A.H(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$iaf:1}
A.kN.prototype={
aa(a){var s,r=this,q=a.ag(r.f.a),p=a.ag(r.r.a),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bQ(n,p.b)
A.b5(n,r.a.a7())
A.c2(n,r.b.b)
A.aw(n,0,q.b)
A.u(n,"uScene",B.u)
A.aw(n,1,t._.a(r.d.$0()))
A.u(n,"uHistory",B.a9)
A.u(n,"uTime",new A.x(B.e,r.e.$0()))
A.u(n,"uChromaWeight",new A.x(B.e,o.Q))
A.u(n,"uTrackingWeight",new A.x(B.e,m))
A.u(n,"uNoiseWeight",new A.x(B.e,o.at))
A.u(n,"uHeadSwitchWeight",new A.x(B.e,o.ax))
A.u(n,"uDropoutWeight",new A.x(B.e,o.ay))
A.u(n,"uGhostWeight",new A.x(B.e,s))
A.bg(n,r.c)
A.cg(n,3,0)},
$ia4:1,
gZ(){return this.a}}
A.h2.prototype={}
A.k9.prototype={
gab(){return"world"},
a9(a,b){B.a.l(a.a,new A.an("worldOpaqueTransparent",B.bP,A.f([new A.H(this.e,B.j)],t.C),!1))},
a8(a){var s=this,r=s.a.am(new A.b3("safeWorld",s.b,s.c,B.h9,B.t,B.f9)),q=s.e
return A.f([new A.kO(new A.aT("worldOpaqueTransparent",A.f([new A.H(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$iaf:1}
A.kO.prototype={
aa(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bQ(j,a.ag(n.d).b)
A.b5(j,n.a.a7())
s=k.a
A.d0(j,B.bz,1,s.c,s.b,s.a)
A.c2(j,n.b.b)
A.u(j,"uViewProjection",new A.x(B.r,new Float32Array(A.Y(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.W
s=t.n
A.u(j,"uLightDir",new A.x(B.n,new Float32Array(A.Y(A.f([q.a,q.b,q.c],s)))))
p=k.r
A.u(j,"uAmbientColor",new A.x(B.n,new Float32Array(A.Y(A.f([p.a,p.b,p.c],s)))))
A.u(j,"uAmbientIntensity",new A.x(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.f1(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.f1(m,l[o])},
f1(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dW){s=b.a.b
n.fs(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bg(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.tA(s,p,o,0)
else A.ty(s,p,0,o)}else if(b instanceof A.ei){s=b.b
n.fs(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bg(s,r.a)
q=r.b
p=r.c
if(q)A.tz(s,p,0)
else A.cg(s,p,0)}else throw A.d(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ew(b).n(0),null))},
fs(a,b){var s=b.af(),r=a.a
A.u(r,"uModel",new A.x(B.r,new Float32Array(A.Y(s.a))))
A.u(r,"uNormalMatrix",new A.x(B.r,new Float32Array(A.Y(s.ik().a))))},
$ia4:1,
gZ(){return this.a}}
A.lS.prototype={
c1(a){var s,r,q
a.C()
s=A.ab(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.z||a.Q){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.b_
else q=r===0?B.aY:B.aZ
return new A.e4(q,s)},
iP(a){var s,r=this.c1(a).a
A:{if(B.b_===r){s=B.hP
break A}if(B.aZ===r){s=B.hO
break A}s=B.am
break A}return s}}
A.iQ.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.fF.prototype={
A(){return"GpuBufferKind."+this.b}}
A.iS.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.iT.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.iP.prototype={}
A.iR.prototype={}
A.dT.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.fH.prototype={}
A.fG.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.e9.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.h8.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cZ.prototype={
A(){return"UniformType."+this.b}}
A.x.prototype={}
A.eG.prototype={
A(){return"ClearMask."+this.b}}
A.iB.prototype={$iy1:1}
A.jw.prototype={
il(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.l("resource is not in candidate: "+a))
return s}}
A.mG.prototype={
gp(){var s=this.c
if(s==null)throw A.d(A.l("GPU resource adapter is not initialized"))
return s},
bL(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.k7(s.b)
r.b.bL()
r.c=null
r.e=!0},
eY(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.v(b,a),a1=A.f([],t.l2)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("P<1>")
s=new A.P(l,j.a(new A.mH()),k)
for(i=s,h=J.S(i.a),i=new A.K(h,i.b,i.$ti.i("K<1>")),g=this.a;i.m();){r=h.gp()
q=A.zy(g,this.ka(r,a3))
J.i8(a1,q)
J.bG(a0,r,q)}f=A.N(new A.P(l,j.a(new A.mI()),k),k.i("o.E"))
B.a.X(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.r)(l),++e){o=l[e]
n=A.wS(J.xA(o,11))
j=J.b7(a0,"sceneColor")
j.toString
J.bG(a0,o,j)}b=A.bW(a0,b,a)
return b}catch(d){for(b=a1,l=A.M(b).i("h4<1>"),b=new A.h4(b,l),b=new A.b9(b,b.gq(0),l.i("b9<a2.E>")),k=this.a,j=t.V,l=l.i("a2.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.tD(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
ka(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.fH(512,512,1,B.aG,!0)
if(a==="sceneDepth")return new A.fH(o,n,1,B.aG,!0)
s=B.b.R(a,"ssao")||B.b.R(a,"bloomBlur")||B.b.R(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.R(a,"sceneColor#")
return new A.fH(r,q,1,p?B.bM:B.eF,p)},
k7(a){var s,r,q,p,o,n=A.tk(t.f7.a(a).gao(),t._)
for(n=A.q2(n,n.r,A.p(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.tD(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.mH.prototype={
$1(a){return!B.b.R(A.B(a),"sceneColor#")},
$S:4}
A.mI.prototype={
$1(a){return B.b.R(A.B(a),"sceneColor#")},
$S:4}
A.f7.prototype={
A(){return"_SlotState."+this.b}}
A.dx.prototype={
saY(a){this.c=this.$ti.i("1?").a(a)}}
A.cu.prototype={
au(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.e(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.dx(B.aw,n.i("dx<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.e(n,q)
p=n[q];++p.a
p.b=B.jT
p.saY(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bJ(a){return this.au(a,null)},
a2(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dU(B.bT,a))
r=this.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dU(B.bU,a))
s=q.b
if(s===B.ax||s===B.aw)throw A.d(A.dU(B.aL,a))},
bK(a){var s,r,q=this.$ti
q.c.a(a)
this.a2(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eo(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a2(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.e(r,s)
r[s].saY(b)},
b0(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dU(B.bT,a))
r=p.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dU(B.bU,a))
r=q.b
if(r===B.ax||r===B.aw)throw A.d(A.dU(B.eV,a))
q.b=B.ax
q.saY(null)
B.a.l(p.c,s);++p.e},
bq(){return new A.cC(this.mr(),this.$ti.i("cC<+(1,2)>"))},
mr(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bq(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.ax||j===B.aw){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.at(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.ii.prototype={
A(){return"BlendEquation."+this.b}}
A.dJ.prototype={
A(){return"BlendFactor."+this.b}}
A.ix.prototype={
A(){return"CullFace."+this.b}}
A.iz.prototype={
A(){return"DepthFunc."+this.b}}
A.eK.prototype={
eu(a){var s=this
return A.uF(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aW.prototype={
A(){return"StateField."+this.b}}
A.pC.prototype={
lW(a){var s,r=this.a
if(r==null)return A.jc(B.fM,t.dB)
s=A.ab(t.dB)
if(r.a!==a.a)s.l(0,B.b7)
if(r.b!==a.b)s.l(0,B.b8)
if(r.c!==a.c)s.l(0,B.b9)
if(r.d!==a.d)s.l(0,B.ba)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bb)
if(r.r!==a.r)s.l(0,B.bc)
if(r.w!==a.w)s.l(0,B.bd)
if(r.x!==a.x)s.l(0,B.be)
return s}}
A.dz.prototype={$icN:1}
A.hQ.prototype={}
A.hP.prototype={}
A.k8.prototype={
jD(a){var s=this,r=A.b(s.a.canvas)
s.c=A.U(new A.pA(s))
s.d=A.U(new A.pB(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
iv(){var s=this,r=v.G,q=s.bD(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bD(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bD(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bD(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bD(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.d6(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.d6(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.of("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bD(a){var s=A.d6(this.a.getParameter(a))
return typeof s=="number"?B.d.b1(s):0},
$iyl:1}
A.pA.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.a2},
$S:2}
A.pB.prototype={
$1(a){A.b(a)
this.a.b=B.h},
$S:2}
A.iD.prototype={
B(){var s=this
return A.O(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.ie.prototype={
jl(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.i(i.connect(A.b(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.i(r[k].connect(i))
r=j.z
r===$&&A.h()
A.b(r.gain).value=1
q=j.Q
q===$&&A.h()
A.b(q.gain).value=0.35
A.i(o.connect(r))
A.i(n.connect(r))
A.i(p.connect(r))
p=j.as
p===$&&A.h()
A.i(r.connect(p))
A.i(p.connect(q))
A.i(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k2!==$&&A.E()
j.k2=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k3!==$&&A.E()
j.k3=p
A.i(q.connect(p))
A.i(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.i(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.k4!==$&&A.E()
j.k4=q
i=A.b(s.createChannelMerger(2))
j.ok!==$&&A.E()
j.ok=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p1!==$&&A.E()
j.p1=r
A.i(p.connect(q))
A.i(i.connect(A.b(s.destination)))
j.eK()},
eK(){var s,r=this,q=r.k4
q===$&&A.h()
q.disconnect()
s=r.p1
s===$&&A.h()
s.disconnect()
if(r.p2){A.i(q.connect(s,0))
A.i(q.connect(s,1))
q=r.ok
q===$&&A.h()
A.i(s.connect(q,0,0))
A.i(s.connect(q,0,1))}else{s=r.ok
s===$&&A.h()
A.i(q.connect(s,0,0))
A.i(q.connect(s,1,1))}},
bZ(){var s=this.a
if(A.B(s.state)==="suspended")A.b(s.resume())},
fz(a){var s,r,q=this
if(B.b.R(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"){s=q.f
s===$&&A.h()
return s}r=B.h_.h(0,a)
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
kk(){var s,r,q,p,o,n,m,l=this.a,k=A.aC(l.sampleRate),j=B.d.aJ(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cE()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.e(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
ec(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ax.cE()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.i(r.connect(q))
A.i(q.connect(p.fz(a)))
r.onended=A.U(new A.lD(r,q))
r.start()},
ir(a){return this.ec(a,1)},
is(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this,k=l.at.h(0,a)
if(k==null)return
s=l.a
r=A.b(s.createBufferSource())
r.buffer=k
A.b(r.playbackRate).value=d*(0.94+l.ax.cE()*0.12)
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
if(g!=null&&f!=null){A.b(o.frequency).value=f
A.b(n.gain).value=Math.pow(10,g/20)}else{s=l.ay!=null
if(s){s=l.ay
s.toString
m=l.eX(l.b.iq(e,s))
A.b(o.frequency).value=m.b
A.b(n.gain).value=Math.pow(10,m.a/20)}}l.CW.k(0,o,new A.kF(r,q,n,o,p,e))
r.onended=A.U(new A.lC(l,o))
A.i(r.connect(q))
A.i(q.connect(n))
A.i(n.connect(o))
A.i(o.connect(p))
A.i(p.connect(l.fz(a)))
r.start()},
mZ(a,b,c,d){return this.is(a,b,c,1,d,null,null)},
eX(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.at(r,q)},
eE(a){var s,r,q,p,o=this
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
A.i(q.connect(p))
r=o.e
r===$&&A.h()
A.i(p.connect(r))
q.onended=A.U(new A.lE(o,q,p))
q.start()
o.cy=q},
cP(a){if(this.p2===a)return
this.p2=a
this.eK()},
j_(a){var s,r,q=this
q.cP(a.b===B.bn)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.ay?1:0.55
r=q.c
r===$&&A.h()
r=A.b(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.b(s.gain).value=0.35*q.p4},
b2(a,b,c,d,e,f){var s,r,q=this
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
iY(a){var s=null
return this.b2(s,s,s,s,a,s)},
iW(a){var s=null
return this.b2(s,s,a,s,s,s)},
iZ(a){var s=null
return this.b2(s,s,s,s,s,a)},
iV(a){var s=null
return this.b2(s,a,s,s,s,s)},
iU(a){var s=null
return this.b2(a,s,s,s,s,s)},
iX(a){var s=null
return this.b2(s,s,s,a,s,s)},
iT(a){if(this.ay===a)return
this.ay=a
this.bm()},
bm(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.T(s,A.p(s).i("T<1,2>")).gt(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.iE(p,g)
m=n==null?i.eX(h.iq(p,g)):new A.at(n.b,n.c)
l=A.aC(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.aC(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.aC(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))}}}
A.lB.prototype={
$1(a){return this.iK(t.q.a(a))},
iK(a){var s=0,r=A.bm(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bo(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ai(A.aO(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ai(A.aO(A.b(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.ai(A.aO(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ag(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.bj(null,r)
case 1:return A.bi(p.at(-1),r)}})
return A.bk($async$$1,r)},
$S:56}
A.lD.prototype={
$1(a){A.b(a)
this.a.disconnect()
this.b.disconnect()},
$S:2}
A.lC.prototype={
$1(a){var s
A.b(a)
s=this.a.CW.ae(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.lE.prototype={
$1(a){var s,r
A.b(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:2}
A.kF.prototype={}
A.ig.prototype={
A(){return"AudioCategory."+this.b}}
A.lr.prototype={
jn(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.es)
if(!B.a.a5(A.f([d.a,d.b,d.c],t.n),new A.ls()))throw A.d(B.dW)}}
A.ls.prototype={
$1(a){return isFinite(A.d2(a))},
$S:5}
A.la.prototype={
jk(a,b){if(this.a.length===0)throw A.d(B.dN)
if(!B.a.a5(A.f([a.a,a.b,a.c],t.n),new A.lb()))throw A.d(B.e_)}}
A.lb.prototype={
$1(a){return isFinite(A.d2(a))},
$S:5}
A.fv.prototype={
C(){if(B.a.S(A.f([-1.5,-12,-28,2e4,1100,320],t.n),new A.lc()))throw A.d(B.ef)},
iD(a){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.at(-1.5,2e4)
if(a.ay)return new A.at(-28,320)
return new A.at(-12,1100)}}
A.lc.prototype={
$1(a){return!isFinite(A.d2(a))},
$S:5}
A.ln.prototype={
jm(a){var s=A.p(a)
if(new A.a8(a,s.i("a8<1>")).S(0,new A.lp())||new A.aR(a,s.i("aR<2>")).S(0,new A.lq()))throw A.d(B.eq)}}
A.lp.prototype={
$1(a){return A.B(a).length===0},
$S:4}
A.lq.prototype={
$1(a){var s
t.a.a(a)
s=J.aE(a)
return s.gJ(a)||s.S(a,new A.lo())},
$S:58}
A.lo.prototype={
$1(a){return A.B(a).length===0},
$S:4}
A.td.prototype={}
A.lz.prototype={}
A.lt.prototype={
jo(a,b,c){var s
for(s=this.b.gao(),s=s.gt(s);s.m();)s.gp().C()},
iE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.e
if(h.h(0,a)==null)throw A.d(A.l("audio source room missing: "+a))
if(h.h(0,b)==null)throw A.d(A.l("audio listener room missing: "+b))
s=this.kS(a,b)
for(h=s.a,r=h.length,q=this.b,p=0,o=2e4,n=0;n<h.length;h.length===r||(0,A.r)(h),++n){m=h[n]
l=q.h(0,m.a)
k=(l==null?B.bt:l).iD(m)
j=k.b
p+=k.a
if(j<o)o=j}r=!s.b
if(r&&a!==b){p=-48
o=240}q=A.f([],t.s)
for(i=h.length,n=0;n<h.length;h.length===i||(0,A.r)(h),++n)q.push(h[n].a)
h=B.d.K(p,-60,0)
i=B.c.K(o,120,2e4)
r=!r||a===b
return new A.lz(A.ar(q,t.N),h,i,r)},
kS(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.jQ
s=t.N
r=A.O([a0,0],s,t.i)
q=A.O([a0,B.Q],s,t.fB)
p=A.ax([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.N(p,l)
B.a.Y(k,new A.lu(r))
j=B.a.gak(k)
p.ae(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.hj(s,!0)}i=o.ap(j)
h=A.N(i,i.$ti.i("o.E"))
B.a.Y(h,new A.lv())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.bt(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.bt:d).iD(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.N(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.jP}}
A.lu.prototype={
$2(a,b){var s,r,q
A.B(a)
A.B(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.F(r,s)
return q===0?B.b.F(a,b):q},
$S:59}
A.lv.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:60}
A.hj.prototype={}
A.lR.prototype={
e9(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.c(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.xs().b6(q).ga6()
p.d=q
p.c=p.b.b6(q).ga6()
p.a=a}}
A.mq.prototype={}
A.jQ.prototype={}
A.mE.prototype={
kd(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.d6(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cC(a,b,c,d,e,f){return this.ms(a,b,c,d,e,f)},
ms(a,b,c,a0,a1,a2){var s=0,r=A.bm(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cC=A.bo(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.b(A.b(j.document).createElement("img"))
m.src=a
s=7
return A.ai(A.aO(A.b(m.decode()),t.X),$async$cC)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.ae(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.kd()
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
case 6:case 1:return A.bj(q,r)
case 2:return A.bi(o.at(-1),r)}})
return A.bk($async$cC,r)},
cD(a,b,c){var s=!1
return this.mt(t.a.a(a),b,!1)},
mt(b0,b1,b2){var s=0,r=A.bm(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cD=A.bo(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.f([],t.Y)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.b(A.b(a0.document).createElement("img"))
j.src=k
s=10
return A.ai(A.aO(A.b(j.decode()),a1),$async$cD)
case 10:J.i8(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.b8(l)===0){a=A.l("texture array needs at least one layer")
throw A.d(a)}i=A.a(J.b7(l,0).width)
h=A.a(J.b7(l,0).height)
if(J.a6(i,0)||J.a6(h,0)||J.xu(l,new A.mF(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.b8(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.ah()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.l4(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.ah()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a_()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a_()
n=[1]
s=5
break A}e=B.d.O(a+1,2)}}a=m.a
a7=A.i(a.createTexture())
if(a7==null){a=A.l("could not create texture array")
throw A.d(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.ae(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.tc(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.b8(l)
if(typeof a1!=="number"){q=a1.cO()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.b7(l,c)])
d=A.a(a.getError())
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.tc(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.a_()
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
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.tc(d,16)+")")
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
b=A.ag(a9)
A.b(v.G.console).error("texture array load failed: "+A.q(b))
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
case 6:case 1:return A.bj(q,r)
case 2:return A.bi(o.at(-1),r)}})
return A.bk($async$cD,r)},
fA(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a6(A.d6(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.eM("shader compile failed: "+A.q(A.w2(s,"getShaderInfoLog",r,t.x))+"\n"+b))
return r},
aL(a,b){var s=v.G,r=this.fA(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.fA(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a6(A.d6(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.eM("program link failed: "+A.q(A.w2(p,"getProgramInfoLog",o,t.x))))
return o},
gii(){var s=A.d6(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.b1(s):0},
ep(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.h_(0,c,B.c.jj(b.byteLength,p))*p
if(B.c.a0(o,4)!==0)A.k(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.xv(B.q.glk(b),b.byteOffset+0*p,B.c.O(o,4)))}},
dj(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.ae(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
de(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.ae(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
fC(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.dj(q,a,b)
s=v.G
A.ae(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
f_(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.ae(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.ae(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
ea(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.de(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.de(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.fC(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.fC(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.de(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.f_(a,b)
if(d)h.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.eM("framebuffer incomplete"))
return new A.jQ(g,n,o,m,q,p,l,e,a,b)},
ih(a,b,c,d){return this.ea(a,b,c,d,0)},
mw(a,b,c,d){return this.ea(a,b,!0,c,d)},
bd(a,b,c){return this.ea(a,b,c,!1,0)},
dh(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.ae(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
aT(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.dj(q,b,c)
if(p!=null)n.dj(p,b,c)
n.dh(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.dh(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.dh(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.f_(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
n6(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.ae(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.ae(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.ae(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
lw(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
aX(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.mF.prototype={
$1(a){A.b(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:61}
A.iZ.prototype={
en(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].nA(a)}}
A.j0.prototype={
bY(a){if(this.f)return
A.uS(a,"requestPointerLock",t.X)},
ey(a){var s,r,q,p
t.G.a(a)
for(s=this.x,r=new A.co(s,s.r,s.e,A.p(s).i("co<1>"));r.m();){q=r.d
p=a.h(0,q)
if(p!=null&&p.length!==0)s.k(0,q,p)}this.bh()},
kx(a){A.b(a)
if(A.X(a.repeat))return
if(!this.w)return
if(this.b.l(0,A.B(a.code)))this.c.l(0,A.B(a.code))},
kz(a){this.b.ae(0,A.B(A.b(a).code))},
kD(a){var s=this
A.b(a)
if(!s.f||!s.w)return
s.d=s.d+s.fc(a,"movementX")
s.e=s.e+s.fc(a,"movementY")},
kB(a){var s=this
A.b(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
fc(a,b){var s=A.vZ(a[b])
if(s==null)s=null
return s==null?0:s},
bh(){var s=this
s.b.H(0)
s.c.H(0)
s.e=s.d=0}}
A.je.prototype={}
A.e0.prototype={
gf8(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gG(B.c.cH(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gG(B.c.cH(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
V(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.e0&&A.l3(r)===A.l3(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gG(a){return this.gf8()}}
A.nJ.prototype={
jv(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gf8(),q)}}
A.cx.prototype={
cF(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.q.j0(s,0,m,l)
n.a=s}r=b.ai(0,a).b6(d.ai(0,a)).ga6()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ha(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ha(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ha(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ha(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ha(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ha(n.a,l,d,r,q,p,o,0,1,0,k,0)},
an(a,b,c,d,e){return this.cF(a,b,c,d,e,1,1)}}
A.op.prototype={
kn(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.aL(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.E()
m.w=r
q=s.aL(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.E()
m.x=q
p=m.c
o=A.i(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.E()
m.y=o
o=A.i(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.E()
m.z=o
o=A.i(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.E()
m.Q=o
r=A.i(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.E()
m.as=r
r=A.i(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.E()
m.at=r
q=A.i(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.E()
m.ax=q
m.d=s.bd(m.ay,m.ch,!1)
m.e=s.bd(m.ay,m.ch,!1)
m.f=s.bd(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.E()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
ko(){var s
try{this.r=this.b.bd(384,216,!1)}catch(s){this.r=null}},
n4(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
if(n==null||m==null||l==null||a.d==null)return null
s=o.c
r=o.w
r===$&&A.h()
s.useProgram(r)
r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=A.a(r.WebGL2RenderingContext.TEXTURE_2D)
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
p.aX(n)
q=o.CW
q===$&&A.h()
s.bindVertexArray(q)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
q=o.x
q===$&&A.h()
s.useProgram(q)
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=o.at
q===$&&A.h()
s.uniform1i(q,0)
p.aX(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aX(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.oy.prototype={
d3(a,b,c){var s,r,q
try{r=this.a.aL(b,c)
return r}catch(q){s=A.ag(q)
r=A.eM(a+": "+A.q(s))
throw A.d(r)}}}
A.or.prototype={}
A.hq.prototype={}
A.kI.prototype={}
A.kw.prototype={}
A.ku.prototype={}
A.os.prototype={
jw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.f([new A.e0(0,0,1,0),new A.e0(1,0,1,0),new A.e0(2,0,1,0)],t.mn),e=t.S
e=new A.nJ(f,A.v(e,e))
e.jv(f)
h.e5=e
h.hN=1.9
h.dW=h.ba/h.b9
r=J.j4(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.hq()
t.cu.a(r)
f=h.aN
e=f.aL("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aL(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aL(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aL(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aL(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.aj!==$&&A.E()
h.aj=new A.oy(f,e,p,o,n,m)
h.b=t.d4.a(new A.ot(h))
h.fm()
h.fl()
o=h.aF
p=A.i(o.getUniformLocation(m,"uTex"))
h.hh!==$&&A.E()
h.hh=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.hi!==$&&A.E()
h.hi=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.fY!==$&&A.E()
h.fY=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.fX!==$&&A.E()
h.fX=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.fZ!==$&&A.E()
h.fZ=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.h_!==$&&A.E()
h.h_=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.h0!==$&&A.E()
h.h0=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.h1!==$&&A.E()
h.h1=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.h2!==$&&A.E()
h.h2=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.h3!==$&&A.E()
h.h3=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.h4!==$&&A.E()
h.h4=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.h5!==$&&A.E()
h.h5=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.h6!==$&&A.E()
h.h6=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.h7!==$&&A.E()
h.h7=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.h8!==$&&A.E()
h.h8=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.h9!==$&&A.E()
h.h9=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.ha!==$&&A.E()
h.ha=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.hb!==$&&A.E()
h.hb=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.hc!==$&&A.E()
h.hc=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.hd!==$&&A.E()
h.hd=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.he!==$&&A.E()
h.he=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.hf!==$&&A.E()
h.hf=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.hg!==$&&A.E()
h.hg=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.hj!==$&&A.E()
h.hj=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.hk!==$&&A.E()
h.hk=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.dY!==$&&A.E()
h.dY=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.dZ!==$&&A.E()
h.dZ=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.e_!==$&&A.E()
h.e_=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.e0!==$&&A.E()
h.e0=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.e1!==$&&A.E()
h.e1=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.e2!==$&&A.E()
h.e2=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.e3!==$&&A.E()
h.e3=n
n=A.X(A.b(A.b(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bO!==$&&A.E()
h.bO=n
h.sie(16777215)
n=new A.p5(o,f,A.f([],t.aA),A.f([],t.df),A.f([],t.h),A.f([],t.kS))
m=n.c=f.aL("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.e4!==$&&A.E()
h.e4=n
n=new A.op(f,o)
n.kn()
n.ko()
h.cp!==$&&A.E()
h.cp=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.dz!==$&&A.E()
h.dz=m
p=A.i(n.createBuffer())
p.toString
h.dA!==$&&A.E()
h.dA=p
n=A.i(n.createBuffer())
n.toString
h.dB!==$&&A.E()
h.dB=n
e=A.i(o.createVertexArray())
e.toString
h.dC!==$&&A.E()
h.dC=e
l=A.i(o.createVertexArray())
l.toString
h.dD!==$&&A.E()
h.dD=l
k=A.i(o.createVertexArray())
k.toString
h.dE!==$&&A.E()
h.dE=k
j=A.i(o.createVertexArray())
j.toString
h.dF!==$&&A.E()
h.dF=j
o.bindVertexArray(e)
h.d_(m)
o.bindVertexArray(l)
h.d_(p)
o.bindVertexArray(k)
h.d_(n)
o.bindVertexArray(null)
try{h.cu=f.ih(384,216,!0,!0)}catch(i){h.cu=null}s=4<f.gii()?4:f.gii()
e=s
if(typeof e!=="number")return e.ah()
if(e>1)try{h.bN=f.mw(h.b9,h.ba,!0,s)}catch(i){h.bN=null}try{h.b8=f.ih(h.b9,h.ba,!0,!0)}catch(i){h.bN=h.b8=null}if(h.b8!=null)try{h.cr=f.bd(h.gc5(),h.gc4(),!1)
h.cs=f.bd(h.gc5(),h.gc4(),!1)
h.ct=f.bd(h.b9,h.ba,!1)}catch(i){h.ct=h.cs=h.cr=null}},
gc5(){var s=B.c.O(this.b9,4)
return s<1?1:s},
gc4(){var s=B.c.O(this.ba,4)
return s<1?1:s},
aG(a){return this.mu(t.G.a(a))},
mu(a){var s=0,r=A.bm(t.H),q=this,p,o,n,m,l,k,j
var $async$aG=A.bo(function(b,c){if(b===1)return A.bi(c,r)
for(;;)switch(s){case 0:p=new A.T(a,A.p(a).i("T<1,2>")).gt(0),o=q.aN
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.c7.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ai(o.cC(k,l,!1,!1,!1,m==="grime"),$async$aG)
case 4:if(c!=null)q.f3(m,l)
s=2
break
case 3:p=t.lS
j=A.N(new A.ch(new A.Q(A.f(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.ou(a)),t.dD),p),p.i("o.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ai(o.cD(j,12,!1),$async$aG)
case 7:q.co=c
case 6:return A.bj(null,r)}})
return A.bk($async$aG,r)},
bw(){var s=0,r=A.bm(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bw=A.bo(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.v(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ai(A.aO(A.b(A.b(g.window).fetch("shaders/"+A.q(m))),f),$async$bw)
case 13:l=a3
if(!A.X(l.ok)){i=A.eM("HTTP "+A.q(A.ui(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.ai(A.aO(A.b(l.text()),i),$async$bw)
case 14:a.bG(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ag(c)
i=A.eM("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.kI(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ag(b)
A.b(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.bj(null,r)
case 1:return A.bi(p.at(-1),r)}})
return A.bk($async$bw,r)},
kI(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.aj
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.d3("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.d3("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.d3("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.fm()
i.fl()
q=i.fU
q=A.N(q,A.p(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.c7.h(0,s)
o.toString
i.f3(s,o)}A.b(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ag(j)
A.b(v.G.console).error("shader recompile failed: "+A.q(r))}},
fl(){var s=this,r=s.aF,q=s.aj
q===$&&A.h()
s.hO=A.i(r.getUniformLocation(q.c,"uTex"))
s.hP=A.i(r.getUniformLocation(q.c,"uTime"))
s.hQ=A.i(r.getUniformLocation(q.c,"uFlash"))
s.hR=A.i(r.getUniformLocation(q.c,"uVignette"))
s.hS=A.i(r.getUniformLocation(q.c,"uGrain"))
s.hT=A.i(r.getUniformLocation(q.c,"uDesat"))
s.hU=A.i(r.getUniformLocation(q.c,"uBloom"))
s.hV=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.i1=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.i4=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.hY=A.i(r.getUniformLocation(q.c,"uDepth"))
s.hZ=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.fV=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.fW=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.i_=A.i(r.getUniformLocation(q.c,"uNoise"))
s.i0=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.i2=A.i(r.getUniformLocation(q.c,"uLut"))
s.i3=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.hW=A.i(r.getUniformLocation(q.d,"uTex"))
s.dX=A.i(r.getUniformLocation(q.d,"uDir"))
s.hX=A.i(r.getUniformLocation(q.c,"uBlur"))},
f3(a,b){var s,r,q,p=this
p.fU.l(0,a)
switch(a){case"bluenoise":s=p.aj
s===$&&A.h()
s=s.c
r=p.i_
r===$&&A.h()
q=p.i0
q===$&&A.h()
p.bF(s,r,q,b)
break
case"lut-gothic":s=p.aj
s===$&&A.h()
s=s.c
r=p.i2
r===$&&A.h()
q=p.i3
q===$&&A.h()
p.bF(s,r,q,b)
break
case"grime":s=p.aj
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.bF(s,r,q,b)
break
case"glass":s=p.aj
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.bF(s,r,q,b)
break
case"soft":s=p.aj
s===$&&A.h()
s=s.b
r=p.hA
r===$&&A.h()
q=p.hB
q===$&&A.h()
p.bF(s,r,q,b)
break}},
bF(a,b,c,d){var s=this.aF
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sie(a){var s=A.rm(a)
this.hs=s.a
this.ht=s.b
this.hu=s.c},
cg(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.a0(a1,14)!==0)throw A.d(A.w("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.aF
i=A.i(a1.createVertexArray())
i.toString
e=A.i(a1.createBuffer())
e.toString
d=A.i(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.eL(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.m8++
b.dJ.k(0,a1,new A.kI(e,d,i,s,s,a3))
return a1},
lZ(a){var s,r,q,p=this,o=p.dJ.h(0,a)
if(o==null)return
p.fe()
s=p.hy
r=p.hz
if(s!==r)p.fq(r)
s=p.aF
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.dV
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bP},
mg(a){var s,r=this.dJ.ae(0,a)
if(r==null)return
s=this.aF
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
fe(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.dK)return
c.dK=!0
s=c.aF
r=c.aj
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.hw
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.dN
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.dO
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.dP
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.hN)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.dW)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.hl?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.dQ/255*0.34,c.dR/255*0.34,c.dS/255*0.34)
q=c.fx
q===$&&A.h()
r=c.hr
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.hs,c.ht,c.hu)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.hv)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.6)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.dM.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.dM
l=m.length
if(n<l){if(!(n<l))return A.e(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.e(o,n)
s.uniform1f(o[n],0)
continue}j=A.rm(k.b)
m=c.bO
m===$&&A.h()
i=m?1:1+(A.t5(c.dT*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.e(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.e(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.e(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.e(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bO
r===$&&A.h()
q=r?1:1+(A.t5(c.dT*2.5,40503)*2-1)*0
c.m5=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.hn?1:0
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
q=c.hm
h=q?384:0
g=q?216:0
q=c.dG
p=q.a
if(p===B.b4){f=B.d.K(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.hC
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.e4
r===$&&A.h()
q=c.hG
q===$&&A.h()
s.uniform1f(q,0)
q=c.hH
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.hD
q===$&&A.h()
if(q!=null)r.cM(0)
q=c.hE
q===$&&A.h()
if(q!=null)r.cM(1)
q=c.hF
q===$&&A.h()
if(q!=null)r.cM(2)
r.cN(0)
r.cN(1)
r.cN(2)
r=c.hI
r===$&&A.h()
if(c.co==null)q=0
else{c.e5===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.co!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.co)
r=c.dU
r===$&&A.h()
s.uniform1i(r,12)}r=c.hM
q=c.hL
p=c.hK
o=c.hJ
n=0
for(;;){m=c.e5
m===$&&A.h()
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
if(m!=null)s.uniform1i(m,d.d);++n}c.fq(c.hz)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.dV
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
fq(a){var s
this.hy=a
s=this.dx
s===$&&A.h()
this.aF.uniformMatrix4fv(s,!1,a.a)},
aS(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.b9=a
j.ba=b
j.dW=b/a
s=j.cp
s===$&&A.h()
r=B.c.O(a,2)
s.ay=r
q=B.c.O(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.aT(p,r,q)
r=s.e
if(r!=null)s.b.aT(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.aT(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.aT(r,384,216)
o=j.b8
n=j.bN
m=j.cr
l=j.cs
k=j.ct
if(o!=null)j.aN.aT(o,a,b)
if(n!=null)j.aN.aT(n,a,b)
if(m!=null)j.aN.aT(m,j.gc5(),j.gc4())
if(l!=null)j.aN.aT(l,j.gc5(),j.gc4())
if(k!=null)j.aN.aT(k,a,b)},
kX(a){var s,r,q,p,o,n,m
for(s=this.hp,r=this.ho,q=1;q<a;++q){if(!(q<800))return A.e(s,q)
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
kW(a){var s,r,q,p,o,n,m,l
for(s=this.hq,r=this.dL,q=1;q<a;++q){if(!(q<4000))return A.e(s,q)
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
md(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.dG=b4
s=b2.bQ
r=0
if(s>0){for(s=b2.hq,q=0;p=b2.bQ,q<p;++q)B.a.k(s,q,q)
b2.kW(p)
for(p=b2.dL,o=b2.dH,n=0;n<b2.bQ;++n){if(!(n<4000))return A.e(s,n)
m=s[n]
if(!(m<p.length))return A.e(p,m)
l=p[m]
r=A.wn(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.dL,p=b2.dH,q=0;q<b2.bQ;++q){if(!(q<s.length))return A.e(s,q)
l=s[q]
r=A.wn(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bQ=0
for(s=b2.hp,q=0;p=b2.cv,q<p;++q)B.a.k(s,q,q)
b2.kX(p)
for(p=b2.m6,o=b2.ho,k=0,n=0;n<b2.cv;++n){if(!(n<800))return A.e(s,n)
m=s[n]
if(!(m<o.length))return A.e(o,m)
j=o[m]
i=A.rm(0)
m=j.b
h=b2.dP
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.dO
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
e=[new A.c(a-d,a1-c,a2-e),new A.c(g-d,f-c,h-e),new A.c(g+d,f+c,h+e),new A.c(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.dN
k=A.wu(p,k,a3,a4,a5,a6,new A.c(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cv=0
s=b2.aN
o=b2.dz
o===$&&A.h()
s.ep(o,b2.dH,r)
o=b2.dA
o===$&&A.h()
s.ep(o,p,k)
b2.fe()
p=b2.aF
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.dC
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.O(r,14));++b2.bP
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.dD
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.O(k,14));++b2.bP
m=b2.dI
if(m>0){h=b2.dB
h===$&&A.h()
s.ep(h,b2.m7,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.dE
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.dI/14|0);++b2.bP}m=b2.cu
if(m!=null){a7=b2.b8
if(a7!=null)s.n6(m,a7)}a8=b2.b8
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.dF
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.cr
a4=b2.cs
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.aj
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.hW
g===$&&A.h()
p.uniform1i(g,0)
s.aX(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.dX
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aX(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.dX,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.ct
if(b2.cq>0&&a6!=null){s.aX(a6)
g=b2.aj
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dY
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.dZ
g===$&&A.h()
p.uniform1i(g,7)
g=b2.e_
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.e0
g===$&&A.h()
p.uniform1f(g,1)
g=b2.e1
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.e2
g===$&&A.h()
p.uniform1f(g,b2.cq)
g=b2.e3
g===$&&A.h()
p.uniform2f(g,1/b2.b9,1/b2.ba)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cp
g===$&&A.h()
b0=g.n4(a8,0.5)
s.aX(null)
s=b2.aj
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.hU
g===$&&A.h()
p.uniform1i(g,1)
g=b2.hV
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.hX
s===$&&A.h()
b2.bO===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.hY
s===$&&A.h()
p.uniform1i(s,7)
s=b2.hZ
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.fV
s===$&&A.h()
p.uniform1i(s,11)
s=b2.fW
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cq>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.hO
h===$&&A.h()
p.uniform1i(h,0)
h=b2.dT+=b3;++b2.hx
s=b2.hP
s===$&&A.h()
p.uniform1f(s,h)
h=b2.i1
h===$&&A.h()
s=b2.hx
p.uniform2f(h,B.c.a0(s*13,64),B.c.a0(s*29,64))
s=b2.hQ
s===$&&A.h()
p.uniform1f(s,0)
s=b2.hR
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.hS
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.hT
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.dG
if(s.a===B.a7)b1=0*(1-s.b/1)
else b1=0
s=b2.i4
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.ot.prototype={
$0(){var s=this.a.aj
s===$&&A.h()
return s.b},
$S:62}
A.ou.prototype={
$1(a){return this.a.h(0,A.B(a))},
$S:26}
A.pE.prototype={
gl9(){var s=this.b
s===$&&A.h()
return s},
fm(){var s,r,q,p,o,n,m=this,l=m.la(),k=m.a
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
m.as=A.i(k.getUniformLocation(l,"uEye"))
m.at=A.i(k.getUniformLocation(l,"uFwd"))
m.ax=A.i(k.getUniformLocation(l,"uUp"))
m.ay=A.i(k.getUniformLocation(l,"uRight"))
m.ch=A.i(k.getUniformLocation(l,"uScale"))
m.CW=A.i(k.getUniformLocation(l,"uAspect"))
m.cx=A.i(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.i(k.getUniformLocation(l,"uDepthFar"))
m.db=A.i(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.i(k.getUniformLocation(l,"uModel"))
m.dy=A.i(k.getUniformLocation(l,"uInstanced"))
m.fr=A.i(k.getUniformLocation(l,"uFog"))
m.fx=A.i(k.getUniformLocation(l,"uLight"))
m.fy=A.i(k.getUniformLocation(l,"uLightColor"))
m.go=A.i(k.getUniformLocation(l,"uFogStart"))
m.id=A.i(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.i(k.getUniformLocation(l,"uAmbient"))
m.k2=A.i(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.i(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.H(s)
r=m.ok
B.a.H(r)
q=m.p1
B.a.H(q)
p=m.p2
B.a.H(p)
for(o=0;o<4;++o){n=""+o
B.a.l(s,A.i(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.l(r,A.i(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.l(q,A.i(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.l(p,A.i(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.i(k.getUniformLocation(l,"uFlicker"))
m.p4=A.i(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.i(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.i(k.getUniformLocation(l,"uWall"))
m.rx=A.i(k.getUniformLocation(l,"uWallOn"))
m.ry=A.i(k.getUniformLocation(l,"uWallMid"))
m.to=A.i(k.getUniformLocation(l,"uWallAmt"))
m.x1=A.i(k.getUniformLocation(l,"uWallScale"))
m.x2=A.i(k.getUniformLocation(l,"uGlass"))
m.xr=A.i(k.getUniformLocation(l,"uGlassOn"))
m.y1=A.i(k.getUniformLocation(l,"uGlassGain"))
m.y2=A.i(k.getUniformLocation(l,"uGlassFog"))
m.hA=A.i(k.getUniformLocation(l,"uSoft"))
m.hB=A.i(k.getUniformLocation(l,"uSoftOn"))
m.hC=A.i(k.getUniformLocation(l,"uInternal"))
m.hD=A.i(k.getUniformLocation(l,"uLightProj0"))
m.hE=A.i(k.getUniformLocation(l,"uLightProj1"))
m.hF=A.i(k.getUniformLocation(l,"uLightProj2"))
m.m9=A.i(k.getUniformLocation(l,"uShadow0"))
m.ma=A.i(k.getUniformLocation(l,"uShadow1"))
m.mb=A.i(k.getUniformLocation(l,"uShadow2"))
m.hG=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.dU=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dV=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.hH=A.i(k.getUniformLocation(l,"uShadowBias"))
m.hI=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.hJ
B.a.H(s)
r=m.hK
B.a.H(r)
q=m.hL
B.a.H(q)
p=m.hM
B.a.H(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.dU,12)},
d_(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.eL(56)},
eL(a){var s=this,r=s.c
r===$&&A.h()
s.bG(r,3,a,0)
r=s.f
r===$&&A.h()
s.bG(r,3,a,12)
r=s.d
r===$&&A.h()
s.bG(r,4,a,24)
r=s.e
r===$&&A.h()
s.bG(r,1,a,40)
r=s.r
r===$&&A.h()
s.bG(r,3,a,44)},
bG(a,b,c,d){var s=this.a
A.ae(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
la(){return this.gl9().$0()}}
A.p5.prototype={
cM(a){return null},
cN(a){return null}}
A.c.prototype={
a_(a,b){return new A.c(this.a+b.a,this.b+b.b,this.c+b.c)},
ai(a,b){return new A.c(this.a-b.a,this.b-b.b,this.c-b.c)},
a1(a,b){return new A.c(this.a*b,this.b*b,this.c*b)},
bM(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b6(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.c(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga6(){var s=this,r=s.gq(0)
return r<1e-9?new A.c(0,0,0):new A.c(s.a/r,s.b/r,s.c/r)}}
A.lQ.prototype={
nu(a){var s,r,q,p,o,n=B.k.av(a.B(),null)
this.a.fT(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.aD(s.getItem("quarantine.save.active"))
q=A.aD(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
n0(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.aD(s.getItem("quarantine.save.active"))
q=A.aD(s.getItem("quarantine.save.previous"))
p=this.eZ(r,a)
if(p!=null)return new A.e8(p,null)
o=this.eZ(q,a)
if(o!=null)return new A.e8(o,"recovered previous save")
if(r==null)return B.ix
return B.iw}catch(n){return B.iv}},
eZ(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.fT(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ag(q) instanceof A.G)return null
else throw q}}}
A.iF.prototype={
jq(a,b,c,d,e){if(this.a.length===0)throw A.d(B.el)
if(this.b<0)throw A.d(B.dX)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ar(q,t.i)
s=t.z
return A.bW(A.O(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bX.prototype={
A(){return"EndingKind."+this.b}}
A.me.prototype={}
A.eL.prototype={
B(){var s=t.N
return A.O(["kind",this.a.b],s,s)}}
A.mh.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:64}
A.jt.prototype={
B(){var s,r=this,q=t.N,p=A.v(q,t.z)
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
mm(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ai(0,new A.c(0,1.3499999999999999,0))
return!new A.im(s,s.a_(0,new A.c(0,1.2000000000000002,0))).ic(a,r)}}
A.o9.prototype={
B(){return A.kR(this.a)}}
A.eZ.prototype={
B(){return A.O(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.oE.prototype={
fT(a){var s,r,q,p,o,n,m,l=B.k.aE(a,null),k=t.f
if(!k.b(l))throw A.d(B.er)
s=t.N
r=t.z
q=A.aG(l,s,r)
p=q.h(0,"version")
if(A.aN(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.a1("unsupported save version "+A.q(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.e2)
k=A.aG(n,s,r)
return A.v8(A.aG(m,s,r),k,2)}}
A.e8.prototype={}
A.dS.prototype={
A(){return"GameSessionEventType."+this.b}}
A.iN.prototype={}
A.mB.prototype={}
A.mA.prototype={
gar(){var s=this.d
return new A.mB(s.a,s.b)},
gee(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.O(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.O(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.O(["entryCount",m.e.b.a],k,t.S)
p=A.uN(m.c).B()
o=m.r
n=o.c
return new A.o9(A.kR(A.O(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.O(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
ld(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.aF(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cc(B.eA)}if(n<a)this.cc(B.eB)},
jd(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cT(a)&&s.jc(b)},
n1(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cF)r.c=Math.min(1,r.c+0.1)},
jb(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.xZ(j,A.ar(i.d,h).length)
if(a===B.cy)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.M(r)
A.xY(j,new A.P(r,q.i("n(1)").a(new A.mC(k)),q.i("P<1>")).gq(0))
r=k.f
q=r.b
if(B.a.u(B.fd,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aJ(j.a/1*3)
B.a.l(r.r,new A.f_(q.a,a,b))
m=r.a
A.y9(m,q.a,n,k.b,A.ar(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.j2(B.fF)
s.r.ly(o,c)
l=B.d.aJ(j.b/1*6)
if(l>0)r.cT(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aR(i,A.p(i).i("aR<2>")).S(0,new A.mD())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cc(B.eD)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cc(B.eC)},
cc(a){var s=this;++s.y
B.a.l(s.w,new A.iN())
B.a.l(s.x,A.y_(A.AE(a),s.b,s.y-1))}}
A.mC.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.p6().j8(this.a.c,a.a)},
$S:25}
A.mD.prototype={
$1(a){return t.R.a(a).e},
$S:35}
A.lF.prototype={
eq(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.d(A.l("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.d(A.l("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.d(A.l("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
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
for(n=A.M(j),i=n.i("n(1)"),n=n.i("P<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.eR(new A.P(j,i.a(new A.lK(e)),n),r)
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
if(Math.abs(h-g)>0.0001)A.k(A.l(c+a0+A.q(h)+" != "+A.q(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
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
if(a1.length!==s.length||B.a.gaB(a1).b!==B.a.gaB(s).b)throw A.d(A.l("stair manifest mismatch"))}}
A.lG.prototype={
$1(a){return A.xK(a,this.a)},
$S:67}
A.lH.prototype={
$1(a){var s=this.a,r=A.kY(a,"portal"),q=A.dD(r,"id"),p=A.dD(r,"a"),o=A.dD(r,"b"),n=A.i3(r,"width"),m=A.i3(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.B(r.h(0,"doorKit")):null
return new A.ez(q,p,o,n*s,m*s,l)},
$S:68}
A.lI.prototype={
$1(a){var s=A.kY(a,"stair")
A.dD(s,"id")
return new A.eB(A.dD(s,"portalId"))},
$S:69}
A.lJ.prototype={
$1(a){return typeof a=="string"?a:A.i0("exterior cell")},
$S:24}
A.lK.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:22}
A.eA.prototype={}
A.lL.prototype={
$1(a){var s=this.a,r=A.kY(a,"window"),q=A.dD(r,"id"),p=A.i3(r,"offset")
A.i3(r,"sill")
return new A.eC(q,p*s,A.i3(r,"width")*s,A.i3(r,"height")*s)},
$S:72}
A.eC.prototype={}
A.ez.prototype={}
A.eB.prototype={}
A.rq.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:21}
A.im.prototype={
nh(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.M(s)
q=new A.P(s,r.i("n(1)").a(new A.lT(e)),r.i("P<1>"))
p=!q.gt(0).m()?null:q.gak(0)
if(p==null){n.d=null
return}if(!(n.cb(b,p.f)&&a==="hall"))o=n.cb(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.ka(p,B.d.K(d,0,1))},
my(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.fb(f,c,d)
s=g.ke(a,b,c,d)
if(s!=null){g.d=s
return g.fb(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.lr(Math.sqrt(r*r+q*q)/0.08))
o=d.a1(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.fG(a,n,m,new A.c(q,0,0))
l=l||j.b
i=g.it(a,n)
n=i==null?n:i
h=g.fG(a,n,j.a,new A.c(0,0,r))
l=l||h.b
m=h.a
i=g.it(a,n)
n=i==null?n:i}g.ce(m)
return new A.jh(m,n)},
ke(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.cb(c,l.f)&&n
j=q&&this.cb(c,l.r)&&o
if(k||j)return new A.ka(l,k?0:1)}return null},
fb(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ai(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.K(a.b+o/p,0,1)
n=A.vm(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.ce(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.jh(n,k)},
cb(a,b){var s=a.ai(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
fG(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.hl(c,!1)
s=c.a_(0,d)
this.ce(s)
if(this.ic(a,b)){this.ce(c)
return new A.hl(c,!0)}return new A.hl(s,!1)},
ce(a){var s=a.ai(0,new A.c(0,1.3499999999999999,0))
this.a=s
this.b=s.a_(0,new A.c(0,1.2000000000000002,0))},
ic(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aM(m)
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
return!this.l_(a,m,s)},
it(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aM(k)
for(r=k.a,q=a.ap(r),p=J.S(q.a),q=new A.K(p,q.b,q.$ti.i("K<1>"));q.m();){o=p.gp()
n=o.bt(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fK(k,o,s)&&this.k5(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
l_(a,b,c){var s,r,q
for(s=a.ap(b.a),r=J.S(s.a),s=new A.K(r,s.b,s.$ti.i("K<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.fK(b,q,c))return!0}return!1},
fK(a,b,c){var s,r,q,p=a.a,o=b.aw(p),n=b.ad(p)
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
k5(a,b,c){var s,r=this
switch(b.aw(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
slj(a){this.a=t.bf.a(a)}}
A.lT.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:74}
A.jh.prototype={}
A.hl.prototype={}
A.ka.prototype={}
A.fJ.prototype={}
A.mX.prototype={
ly(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.e(B.J,r)
s=B.J[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
j9(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.c}return r},
ja(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.d}return r},
B(){return A.O(["landedCount",this.b],t.N,t.z)}}
A.oA.prototype={
jy(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.E()
o.c=new A.iY(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.k(0,p.a,o.eM(p))}},
cG(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.mg(r[o])
s.k(0,a,n.eM(m))},
eM(a){var s=A.wL(this.a,a),r=this.b,q=A.f([r.cg(s.a,1),r.cg(s.b,2),r.cg(s.c,0)],t.t),p=s.d
if(!B.q.gJ(p))q.push(r.cg(p,0))
return q},
iM(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.K
s=l.a
r=A.ax([s],t.N)
for(n=n.ap(s),q=J.S(n.a),n=new A.K(q,n.b,n.$ti.i("K<1>"));n.m();){p=q.gp()
o=p.bt(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
lY(a,b){var s,r,q,p,o=this,n=o.iM(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.iH(n,b))
s=t.f0
m.dM=l.length<=4?A.ar(l,s):A.ar(A.jO(l,0,A.dE(4,"count",t.S),A.M(l).c),s)
for(l=n.gt(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.lZ(r[p])}}}
A.b0.prototype={}
A.iI.prototype={
gmp(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a5(A.f([r,q,p,o,n,m],t.n),new A.mj())&&o>=r&&n>=q&&m>=p}}
A.mj.prototype={
$1(a){return isFinite(A.d2(a))},
$S:5}
A.iX.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.a0(s,3)!==0}else s=!0
if(s)throw A.d(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gmp())throw A.d(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.S(A.f([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.mZ()))throw A.d(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.mZ.prototype={
$1(a){return!isFinite(A.d2(a))},
$S:5}
A.mY.prototype={
v(a,b,c,d,e,f,g){var s=this
s.bj(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bj(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bj(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bj(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bj(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bj(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.b0(a,b,c,m,n,o,0,0,p),r=new A.b0(g,h,i,m,n,o,1,1,p)
this.bl(s,new A.b0(d,e,f,m,n,o,1,0,p),r)
this.bl(s,r,new A.b0(j,k,l,m,n,o,0,1,p))},
bl(a,b,c){var s=this,r=s.b
B.a.l(r,s.d8(a))
B.a.l(r,s.d8(b))
B.a.l(r,s.d8(c))},
d8(a){var s,r,q=B.a.aP(A.f([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
ll(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.iX(A.ar(g,t.hZ),new Uint16Array(A.Y(this.b)),new A.iI(s,r,q,p,o,n))
h.C()
return h}}
A.iJ.prototype={}
A.dP.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.mk.prototype={
ls(a){var s
switch(a.a){case 0:s=A.ax(["front","street","opposite-house"],t.N)
break
case 1:s=A.ax(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.ax(["side-boundary","rear-service"],t.N)
break
case 3:s=A.ax(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.ax(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
lt(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.bG
break A}if("kitchen"===a||"cellar"===a){s=B.dw
break A}if("bathroom"===a){s=B.dx
break A}if("spare-room"===a){s=B.dy
break A}s=B.bG
break A}return this.ls(s)}}
A.dw.prototype={}
A.r4.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:75}
A.de.prototype={
A(){return"FocusKind."+this.b}}
A.dQ.prototype={}
A.oB.prototype={}
A.qk.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:76}
A.qj.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:22}
A.dv.prototype={}
A.f8.prototype={}
A.mV.prototype={
jI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.nb(),a4=this.b,a5=A.aH(a4,!0,t.J)
B.a.H(a4)
s=A.f([],t.kl)
for(r=a5.length,q=t.jc,p=t.cs,o=t.cJ,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.f([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.b6(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.f([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.ba(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.f([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.bw(b.a,b.b,a3.$1(b.c)))}s.push(new A.aV(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.aH(a4,!0,t.T)
B.a.H(a4)
s=A.f([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bx(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dq(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
kj(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.M(n))throw A.d(A.l("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.M(n))throw A.d(A.l("duplicate portal "+n))
q.k(0,n,m)}},
l7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
l5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.v(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fJ(o,i,h,g,f,e)
a5.eI(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.l(l+" references invalid portal "+d))
i=c.aw(l)
h=c.ad(l)
g=c.w
f=c.x
a5.fJ(o,i,h,g,0,f)
a5.eI(a6,l,c.aw(l),c.ad(l),c.ad(l)+g,0,f)}}for(s=new A.T(a6,a6.$ti.i("T<1,2>")).gt(0);s.m();){b=s.d
a=b.b
r=J.ci(a)
r.Y(a,new A.nc())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.l("overlapping apertures on "+b.a))}}},
fJ(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.l||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
eI(a,b,c,d,e,f,g){J.i8(t.gz.a(a).iu(b+":"+c.b,new A.na()),new A.hD([d,e,f,g]))},
aM(a){var s=a.c,r=this.r,q=a.a
return new A.c(s.a+r.j9(q),s.b+r.ja(q),s.c)},
ap(a){var s=this.c,r=A.M(s)
return new A.P(s,r.i("n(1)").a(new A.nd(a)),r.i("P<1>"))},
n_(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.aF(a,"roomId","not a portal endpoint"))
r=this.aM(o)
q=b.ad(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aw(a).a){case 0:s=new A.c(s.a+q,p,s.c)
break
case 2:s=new A.c(s.a+q,p,s.c+r.c)
break
case 1:s=new A.c(s.a+r.a,p,s.c+q)
break
case 3:s=new A.c(s.a,p,s.c+q)
break
default:s=null}return s},
gnt(){return B.a.bR(this.b,0,new A.ne(),t.S)},
iq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.Q
s=A.f([new A.at(a,B.Q)],t.bM)
r=A.ax([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.n3(s,0)
n=o.a
m=o.b
for(l=this.ap(n),k=J.S(l.a),l=new A.K(k,l.b,l.$ti.i("K<1>"));l.m();){j=k.gp()
i=j.bt(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.N(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.N(m,p)
h.push(j)
B.a.l(s,new A.at(i,h))}}}return B.Q}}
A.nb.prototype={
$1(a){return new A.c(a.a*1.5,a.b,a.c*1.5)},
$S:77}
A.nc.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:78}
A.na.prototype={
$0(){return A.f([],t.a3)},
$S:79}
A.nd.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:80}
A.ne.prototype={
$2(a,b){return A.a(a)+t.J.a(b).e.length},
$S:81}
A.mi.prototype={}
A.p6.prototype={
j8(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a5(s,new A.p7())}else s=!1
return s}}
A.p7.prototype={
$1(a){return t.e.a(a).w},
$S:22}
A.n_.prototype={
mY(a){var s=this.e,r=A.M(s)
return new A.P(s,r.i("n(1)").a(new A.n2(a)),r.i("P<1>"))},
ci(a){return B.a.aZ(this.d,new A.n0(a),new A.n1(a))},
eq(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.d(A.l("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.d(A.l("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-1.5)>0.0001)throw A.d(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.ab(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.d(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.l("invalid bounds for inventory asset "+m))}j=A.ab(s)
i=A.ab(s)
h=A.ab(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.r)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.d(A.l("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.d(A.l(a7+m+" references "+l))
n=a6.ci(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.xr()
if(!e.b.test(k))throw A.d(A.l("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.d(A.l("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.d(A.l("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.d(A.l("duplicate inventory socket "+l+":"+e))
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
a4=g.iB(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.l(a7+m+" escapes "+f.a))}}}
A.n2.prototype={
$1(a){return t.gB.a(a).b===this.a},
$S:82}
A.n0.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:83}
A.n1.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:7}
A.cn.prototype={}
A.cd.prototype={
iB(a,b){var s=this.f.c.b*b,r=a.f
return new A.c(r.a.b*s,r.b.b*s,0)}}
A.nl.prototype={}
A.nj.prototype={}
A.rp.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:21}
A.nk.prototype={
B(){var s,r,q,p=A.v(t.N,t.z),o=this.a,n=A.p(o).i("a8<1>")
n=A.N(new A.a8(o,n),n.i("o.E"))
B.a.X(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
ek(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.dK)
s=t.X
r=A.aG(a,s,s)
s=this.a
s.H(0)
for(q=new A.T(r,A.p(r).i("T<1,2>")).gt(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aN(o)||o<0)throw A.d(B.dY)
s.k(0,n,o)}}}
A.ct.prototype={}
A.iY.prototype={
iH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.U.a(a)
s=A.f([],t.bz)
for(r=a.gt(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.ct(new A.c(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.kQ(j),0.06))}}B.a.Y(s,new A.n3(b))
return A.jO(s,0,A.dE(4,"count",t.S),t.f0).by(0)},
kQ(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.n3.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.ai(0,s).gq(0),b.a.ai(0,s).gq(0))},
$S:85}
A.fE.prototype={
A(){return"Floor."+this.b}}
A.dd.prototype={
A(){return"Facing."+this.b}}
A.b6.prototype={}
A.bx.prototype={
bt(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aw(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.aF(a,"roomId","not an endpoint of "+s.a))},
ad(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.aF(a,"roomId","not an endpoint of "+s.a))}}
A.ba.prototype={}
A.bw.prototype={}
A.db.prototype={}
A.dq.prototype={}
A.aV.prototype={}
A.n5.prototype={
m1(a){return B.a.aZ(this.c,new A.n6(a),new A.n7(a))},
nq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.l("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.l("soundscape source changed: "+f))
f=t.N
s=A.ab(f)
f=A.v(f,t.gB)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.d(A.l("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.d(A.l("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.d(A.l("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.d(A.l("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gJ(k)||k.gao().S(0,new A.n8()))throw A.d(A.l("sound emitter "+l+" has no usable cues"))
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
A.n6.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:86}
A.n7.prototype={
$0(){return A.k(A.l("sound emitter missing: "+this.a))},
$S:7}
A.n8.prototype={
$1(a){return B.b.cI(A.B(a)).length===0},
$S:4}
A.cm.prototype={}
A.mW.prototype={
dl(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.aF(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.fE}q=A.f([],t.iG)
p=B.d.aO(r)+1
o=B.d.aO(b)
for(n=p;n<=o;++n){m=B.c.a0(n,24)
B.a.l(q,new A.fI("tick"))
if(B.c.a0(m,6)===0)B.a.l(q,new A.fI("chime"))}l.b=b
return q}}
A.fI.prototype={}
A.n4.prototype={
dl(a,b){var s,r,q,p,o,n=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.aF(b,"hour","must be in [0, 24)"))
s=n.a
r=n.b
if(s==null||r==null||a!==s||b<r){n.a=a
n.b=b
return B.fD}q=A.f([],t.dL)
for(p=B.d.aO(r)+1;p<=B.d.aO(b);++p){o=B.c.a0(p,24)
if(B.c.a0(o,4)===2)B.a.l(q,B.eY)
if(B.c.a0(o,3)===1)B.a.l(q,B.eZ)
if(B.c.a0(o,8)===5)B.a.l(q,B.f_)}n.b=b
return q}}
A.eP.prototype={}
A.ro.prototype={
$1(a){return typeof a!="number"},
$S:21}
A.n9.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.v(m,l)
for(s=n.a,s=new A.T(s,A.p(s).i("T<1,2>")).gt(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.O(["open",o.a,"locked",o.b],m,r))}l=A.v(m,l)
for(s=n.c,s=new A.T(s,A.p(s).i("T<1,2>")).gt(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.O(["lit",o.a,"examined",o.b],m,r))}return A.O(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
lg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.ab(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.l(0,s[q].a)
r=A.ab(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.l(0,n[l].a)
e=A.ab(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.u6(new A.a8(o,A.p(o).i("a8<1>")),d)){d=f.b
if(A.u6(new A.a8(d,A.p(d).i("a8<1>")),r)){d=f.c
e=!A.u6(new A.a8(d,A.p(d).i("a8<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.eg)
e=f.d
if(e<0||e>2)A.k(B.dQ)
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
A.fX.prototype={
B(){return A.O(["open",this.a,"locked",this.b],t.N,t.y)}}
A.fP.prototype={
B(){return A.O(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.md.prototype={
$1(a){return this.a.u(0,A.B(a))},
$S:4}
A.dg.prototype={
A(){return"Hand."+this.b}}
A.pz.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
eC(a,b){var s,r,q,p,o=A.f([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.jb.prototype={
B(){var s,r,q,p=t.N,o=A.v(p,t.x)
for(s=this.a,r=0;r<5;++r){q=B.w[r]
o.k(0,q,s.h(0,q))}return A.O(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.Q(B.w,t.ej.a(new A.nC(this)),t.dD).aP(0," \xb7 ")}}
A.nB.prototype={
$2(a,b){return new A.W(A.B(a),A.B(b),t.q)},
$S:87}
A.nC.prototype={
$1(a){return this.a.a.h(0,A.B(a))},
$S:26}
A.bH.prototype={
B(){var s,r,q,p=this,o=A.f([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.O(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.nn.prototype={
bI(a){t.G.a(a)
return a.a===5&&B.a.a5(B.w,new A.nu(this,a))},
eJ(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bI(b))return null
s=this.e++
r=new A.bH(s,a,A.f([A.nA(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
du(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bI(b))return!1
B.a.l(s.c,A.nA(b,c,B.al))
return!0},
lc(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bI(b))return!1
s.r=A.nA(b,0,B.bS)
return!0},
j2(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.H(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.M(p)&&!B.a.u(s,p))B.a.l(s,p)}},
nr(a){var s
if(!this.b.M(a))return!1
s=this.d
if(!B.a.u(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.N(n,A.p(n).c)
B.a.X(n)
s=A.f([],t.bV)
for(r=q.b,r=new A.as(r,r.r,r.e,A.p(r).i("as<2>"));r.m();)s.push(r.d.B())
return A.O(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.nu.prototype={
$1(a){var s
A.B(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.u(this.a.a.h(0,a),s)},
$S:4}
A.lM.prototype={
dv(a,b){if(a.a===B.a6&&!a.d)return new A.o5(b,B.cq)
return new A.ny(b,a.d,a.e,B.cq)},
lS(a){return this.dv(a,null)}}
A.dH.prototype={}
A.lN.prototype={
c1(a){var s,r,q=a==null?null:B.b.cI(a).toLowerCase()
if(q==null||q.length===0)return B.cS
s=q==="next"
if(s||q==="auto")return new A.dH(B.a6,s,q==="auto",!1,null)
r=q!=="legacy"
return new A.dH(B.an,!1,!1,r,r?"unknown renderer query":null)}}
A.nz.prototype={}
A.ny.prototype={
gb7(){var s=this.b
s=s==null?null:s.gb7()
return s==null?A.ow("legacy",A.f([],t.s),this.c,this.d,"legacy"):s},
b_(){if(this.e===B.cr)throw A.d(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.b_()
this.e=B.z},
aS(a,b){var s
if(a<=0||b<=0)throw A.d(A.w("legacy surface size must be positive",null))
if(this.e!==B.z)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aS(a,b)},
aU(a){var s
if(this.e!==B.z)A.k(A.l("legacy backend is not ready"))
B.k.av(A.O(["backend","legacy","interpolation",0,"facts",A.kR(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aU(a)},
bc(a){var s
if(this.e!==B.z)A.k(A.l("legacy backend is not ready"))
B.k.av(A.O(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bc(a)}}
A.o6.prototype={}
A.o5.prototype={
gb7(){var s=this.b
s=s==null?null:s.gb7()
return s==null?A.ow("next",A.f([],t.s),!1,null,"safe"):s},
b_(){if(this.c===B.cr)throw A.d(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.b_()
this.c=B.z},
aS(a,b){var s
if(this.c!==B.z)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aS(a,b)},
aU(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.ao){p=q==null
if(p||!q.gdr()){if(s.c!==B.ao)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.z
if(!p)q.iw()}p=s.c
if(p===B.ao)return}if(p!==B.z)A.k(A.l(r))
B.k.av(A.O(["backend","next","interpolation",0,"facts",A.kR(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdr()){if(s.c!==B.z)A.k(A.l(r))
s.c=B.ao
q.ig()
return}q.aU(a)}},
bc(a){var s
if(this.c!==B.z)A.k(A.l("pixeldart backend is not ready"))
B.k.av(A.O(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bc(a)}}
A.o7.prototype={
lp(a,b){var s,r,q,p,o,n,m
a.C()
s=B.bu.c1(a)
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
o=A.N(o,A.p(o).c)
B.a.X(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.r)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.y)r.push("disjoint-timer-query")
if(a.z)r.push("float-render-target")
if(a.Q)r.push("half-float-render-target")
if(a.as)r.push("context-loss")
return r}}
A.h1.prototype={
A(){return"RendererBackendKind."+this.b}}
A.e6.prototype={
A(){return"RendererBackendState."+this.b}}
A.ox.prototype={}
A.jE.prototype={}
A.ov.prototype={
jx(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.w("renderer provenance values must be non-empty",null))}},
B(){var s,r,q,p=this,o=A.v(t.N,t.z)
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
A.by.prototype={
A(){return"SleepQuality."+this.b}}
A.bd.prototype={
A(){return"SleepLocation."+this.b}}
A.f_.prototype={}
A.m4.prototype={
cT(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jc(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.f([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.O(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.O(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.m5.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:88}
A.m6.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:89}
A.j1.prototype={
A(){return"InteractionType."+this.b}}
A.ee.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.pD.prototype={}
A.ed.prototype={}
A.is.prototype={}
A.nf.prototype={}
A.nh.prototype={
ev(){var s,r,q,p=t.r,o=A.f([],p)
for(s=this.a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.f(o.slice(0),p)
B.a.Y(p,new A.ni())
return p},
lx(a,b){var s,r,q,p,o,n=b.b
if(n.gJ(n))return B.jO
s=t.N
r=A.ab(s)
q=A.ab(s)
for(s=n.gT(),s=s.gt(s),p=a.c;s.m();){o=s.gp()
if(B.a.gN(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.ed(B.av,r)
s=r.a
o=B.a.gN(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gN(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.ed(B.cI,r)
return new A.ed(B.bj,r)},
kH(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.is(e,!1,B.jN,null)
s=p.d===c
r=this.lx(p,d)
q.nr(e)
return new A.is(e,s,r,r.a===B.av&&s?'The world says "'+d.c+'". The entry says "'+B.a.gN(p.c).n(0)+'".':null)},
lT(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.av)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.nf(B.a.gN(s.c).n(0)+" but "+A.q(a.f))}}
A.ni.prototype={
$2(a,b){var s=t.R
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:16}
A.c0.prototype={
A(){return"RuptureStep."+this.b}}
A.oC.prototype={}
A.cv.prototype={}
A.oD.prototype={
geD(){var s=B.aT.h(0,this.a)
return s==null?0:s},
jf(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.c1
r=A.tW(b)
s=q.c
B.a.H(s)
B.a.I(s,r)
B.a.H(q.d)
q.a=B.a7
q.b=0
q.e=!1
return A.f([B.dj],t.e_)},
le(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.c1
s=A.f([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.D))break
A:{q=l.a
p=B.aT.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.T)l.l2(s)
p=l.b
o=B.aT.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cv())
if(q===B.T){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.di)}else{p=q.a+1
if(!(p<7))return A.e(B.c_,p)
l.a=B.c_[p]
l.b=0
B.a.l(s,new A.cv())}}}return A.ar(s,t.k8)},
B(){var s=this,r=t.N
return A.O(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ar(s.c,r),"extinguishedMantles",A.ar(s.d,r),"completed",s.e],r,t.z)},
l2(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.K(B.d.aO(l.b/l.geD()*A.ar(s,r).length),0,A.ar(s,r).length)
p=l.d
for(;;){o=A.aH(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aH(s,!1,r)
o.$flags=3
n=o
o=A.aH(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.e(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cv())}}}
A.iO.prototype={
gbB(){var s=this.b
if(s<6||s>18)return 0
return B.d.K((s-6)/12,0,1)}}
A.rc.prototype={
$1(a){var s=B.c.cf(this.a,a)&255
return B.c.K(B.d.aJ(s+((B.c.cf(this.b,a)&255)-s)*this.c),0,255)},
$S:137}
A.pb.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.f1(g.a),e=t.N,d=A.v(e,t.P)
for(s=g.b,s=new A.T(s,A.p(s).i("T<1,2>")).gt(0);s.m();){r=s.d
q=r.a
d.k(0,q,g.l8(q,r.b))}s=A.f1(g.r)
q=A.f1(g.w)
p=A.f1(g.x)
o=A.v(e,t.l_)
for(n=g.as,n=new A.T(n,A.p(n).i("T<1,2>")).gt(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.f([],m)
for(i=J.S(l.b);i.m();){h=i.gp()
j.push(A.O(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.O(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
l8(a,b){var s,r=A.f1(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.f1(q.br(0,new A.pc(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gP(s))r.k(0,"_ambient",A.f1(s.br(0,new A.pd(),t.S,t.z)))
return r}}
A.pc.prototype={
$2(a,b){return new A.W(A.a(a),t.ey.a(b).B(),t.iI)},
$S:92}
A.pd.prototype={
$2(a,b){return new A.W(A.a(a),t.bR.a(b).B(),t.iI)},
$S:93}
A.ec.prototype={
B(){return A.O(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eb.prototype={
B(){return A.O(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.hh.prototype={
B(){var s=t.N
return A.O(["field",this.a,"value",this.b],s,s)}}
A.pe.prototype={
bW(){var s=0,r=A.bm(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bW=A.bo(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ai(A.aO(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$bW)
case 6:n=b
s=7
return A.ai(A.aO(A.b(n.text()),t.N),$async$bW)
case 7:m=b
l=A.C2(m)
j=J.b7(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.b7(l,"visitors")
j.toString
o.b=i.a(j)
j=J.b7(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.b7(l,"documents")
j.toString
i.a(j)
j=J.b7(l,"street")
j.toString
i.a(j)
j=J.b7(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.b7(l,"nights")
j.toString
i.a(j)
j=J.b7(l,"endings")
j.toString
o.w=i.a(j)
j=J.b7(l,"records")
j.toString
i.a(j)
j=J.b7(l,"cues")
j.toString
i.a(j)
j=J.b7(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ag(g)
j=A.q(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bj(null,r)
case 1:return A.bi(p.at(-1),r)}})
return A.bk($async$bW,r)},
iL(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gL().er(0,new A.pf())
r=p.$ti
q=t.N
q=A.v(q,q)
q.lb(new A.cR(p,r.i("W<m,m>(1)").a(new A.pg()),r.i("cR<1,W<m,m>>")))
return q}return null},
iO(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.b1(p)||o!==B.d.b1(o))return n
return new A.ec(B.d.b1(p),B.d.b1(o))},
iN(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.b1(p)||typeof o!="string"||typeof n!="string")return m
return new A.eb(B.d.b1(p),o,n)},
ns(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.v(a1,t.iu),a3=A.v(a1,t.c_),a4=A.v(a1,t.d8),a5=t.a,a6=A.v(a1,t.iD),a7=b.b
a7===$&&A.h()
a7=new A.T(a7,A.p(a7).i("T<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.v(a,a0)
for(o=o.gL(),o=o.gt(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.jz(l,null):null
if(k==null||!q.b(m.b))continue
j=A.v(a1,a1)
for(m=q.a(m.b).gL(),m=m.gt(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.B(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.v(a,r)
for(m=n.$ti.i("co<1>"),l=new A.co(n,n.r,n.e,m);l.m();){i=l.d
g=b.iO(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.v(a,s)
for(m=new A.co(n,n.r,n.e,m);m.m();){l=m.d
e=b.iN(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.h()
a7=new A.T(a7,A.p(a7).i("T<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.f([],s)
for(m=J.S(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.hh(A.B(c.h(0,"field")),A.B(c.h(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.pb(A.v(a,a0),a2,a3,a4,A.v(a1,a5),A.v(a1,a5),A.v(a,a5),A.v(a,a5),A.v(a,a5),A.v(a1,a5),A.v(a1,a5),A.v(a1,a5),a6)}}
A.pf.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:94}
A.pg.prototype={
$1(a){t.d7.a(a)
return new A.W(A.B(a.a),A.B(a.b),t.q)},
$S:95}
A.d7.prototype={
cl(a,b,c,d){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=d==null?s.d:d,n=a==null?s.e:a
return new A.d7(q,p,o,n)},
lQ(a){return this.cl(null,null,null,a)},
lM(a){return this.cl(null,null,a,null)},
lL(a){return this.cl(null,a,null,null)},
lB(a){return this.cl(a,null,null,null)},
B(){var s=this
return A.O(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e],t.N,t.X)}}
A.l9.prototype={
$1(a){return a==null?null:A.X(a)},
$S:96}
A.lj.prototype={
cQ(a,b){var s=this.a,r=a+": "+b
s.textContent=r
s.className="ambient-notice visible"
this.aq(r)
A.a(A.b(v.G.window).setTimeout(A.U(new A.ll(this)),7000))},
aq(a){var s,r,q=this
if(!q.c||B.b.cI(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.a(A.b(v.G.window).setTimeout(A.U(new A.lk(q,s)),4200))}}
A.ll.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:24}
A.lk.prototype={
$1(a){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:97}
A.c9.prototype={
A(){return"AudioOutputMode."+this.b}}
A.cj.prototype={
A(){return"AudioDynamicRange."+this.b}}
A.cL.prototype={
A(){return"AudioReverbMode."+this.b}}
A.cK.prototype={
A(){return"AudioDuckingMode."+this.b}}
A.d8.prototype={
cm(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.d8(r,q,p,a==null?s.e:a)},
lK(a){return this.cm(null,null,a,null)},
lE(a){return this.cm(null,a,null,null)},
lO(a){return this.cm(null,null,null,a)},
lD(a){return this.cm(a,null,null,null)},
B(){var s=this
return A.O(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.lw.prototype={
$1$2(a,b,c){return B.a.aZ(c.i("o<0>").a(a),new A.lx(b,c),new A.ly(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:98}
A.lx.prototype={
$1(a){return t.aT.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.ly.prototype={
$0(){return A.k(A.a1("unsupported audio option: "+A.q(this.a),null,null))},
$S:7}
A.lP.prototype={
en(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.eI.prototype={
bp(a,b,c,d,e,f){var s,r,q,p,o,n,m=this
t.lG.a(a)
s=c==null?m.b:c
r=f==null?m.c:f
q=d==null?m.d:d
p=e==null?m.e:e
o=b==null?m.f:b
n=a==null?m.r:a
return A.iv(n,o,s,q,p,m.a,r)},
dt(a){var s=null
return this.bp(a,s,s,s,s,s)},
lI(a){var s=null
return this.bp(s,s,s,a,s,s)},
lJ(a){var s=null
return this.bp(s,s,s,s,a,s)},
lG(a){var s=null
return this.bp(s,a,s,s,s,s)},
lH(a){var s=null
return this.bp(s,s,a,s,s,s)},
lR(a){var s=null
return this.bp(s,s,s,s,s,a)},
C(){var s,r,q=this.b,p=!0
if(!(q<0.1))if(!(q>3)){q=this.c
q=q<0.1||q>3}else q=p
else q=p
if(q)throw A.d(B.dM)
q=this.r
if(q.gL().S(0,new A.m1()))throw A.d(B.eb)
q=q.gao()
p=A.p(q)
s=p.i("P<o.E>")
r=A.N(new A.P(q,p.i("n(o.E)").a(new A.m2()),s),s.i("o.E"))
if(A.jc(r,A.M(r).c).a!==r.length)throw A.d(B.dO)},
B(){var s=this
return A.O(["version",s.a,"horizontalSensitivity",s.b,"verticalSensitivity",s.c,"invertX",s.d,"invertY",s.e,"holdToInteract",s.f,"bindings",s.r],t.N,t.K)}}
A.m1.prototype={
$1(a){t.q.a(a)
return a.a!=="pause"&&B.iB.u(0,a.b)},
$S:99}
A.m2.prototype={
$1(a){return A.B(a).length!==0},
$S:4}
A.d9.prototype={
A(){return"BindingCaptureStatus."+this.b}}
A.dI.prototype={
A(){return"BindingConflictResolution."+this.b}}
A.cM.prototype={}
A.it.prototype={
dm(a){var s=this
if(!s.a.r.M(a))return B.cW
s.b=a
s.e=s.d=s.c=null
return B.cT},
lq(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aA
if(a==="Escape"||a==="Tab"||a==="F11"){p.c=p.b=null
return B.cV}r=p.a.r.gL()
r=r.gt(r)
for(;;){if(!r.m()){s=null
break}q=r.gp()
s=q.a
if(s!==o&&q.b===a)break}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.cM(B.bp,a+" is already bound to "+s)}return p.jH(a)},
ej(a){var s,r,q,p=this,o=p.c,n=p.d,m=p.e
if(o==null||n==null||m==null)return B.aA
switch(a.a){case 2:p.c=p.e=p.d=null
return B.cU
case 1:s=t.N
s=A.dj(p.a.r,s,s)
s.k(0,o,n)
s.k(0,m,"")
p.a=p.a.dt(s)
break
case 0:r=p.a.r.h(0,o)
if(r==null)r=""
s=p.a
q=t.N
q=A.dj(s.r,q,q)
q.k(0,o,n)
q.k(0,m,r)
p.a=s.dt(q)
break}p.c=p.e=p.d=null
return B.bo},
jH(a){var s,r,q=this,p=q.b
if(p==null)return B.aA
s=q.a
r=t.N
r=A.dj(s.r,r,r)
r.k(0,p,a)
q.a=s.dt(r)
q.b=null
return B.bo}}
A.iu.prototype={
jp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.it(f.w)
s=f.b
s.setAttribute("aria-label","Controls settings")
A.b(s.appendChild(A.A(a,"h1","journal-title","Controls")))
A.b(s.appendChild(A.A(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.A(a,"div",c,e)
f.eH(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.eH(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.cY(a,r,"invertX","Invert horizontal look")
f.cY(a,r,"invertY","Invert vertical look")
f.cY(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.A(a,"div",c,e)
for(p=B.h8.gL(),p=p.gt(p),o=A.dB,n=f.Q;p.m();){m=p.gp()
l=m.a
A:{if("Move"===l){k="moveForward"
break A}if("Interact"===l){k="interact"
break A}if("Journal"===l){k="journal"
break A}if("Rest"===l){k="sleep"
break A}k="pause"
break A}j=A.b(a.createElement("div"))
j.className="setting-row"
j.setAttribute("aria-label",l+": "+m.b)
i=A.b(a.createElement("span"))
i.textContent=l
A.b(j.appendChild(i))
i=A.b(a.createElement("button"))
i.className="door-continue"
i.setAttribute("type","button")
i.id="settings.controls.bind."+k
m=new A.m_(f,k)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",e))
h=function(b,a0){return function(a1){return b(a0,a1,arguments.length)}}(o,m)
h[$.cI()]=m
i.addEventListener("click",h)
A.b(j.appendChild(i))
A.b(q.appendChild(j))
n.k(0,k,i)}A.b(s.appendChild(q))
p=A.A(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.b(s.appendChild(p))
p=A.A(a,"div","pause-actions",e)
f.at=p
A.b(s.appendChild(p))
f.dg()
g=A.A(a,"button","door-continue","back")
g.setAttribute("type","button")
g.id="settings.controls.back"
g.setAttribute("aria-label","back to settings categories")
g.addEventListener("click",A.U(new A.m0(f)))
A.b(s.appendChild(g))},
im(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.f4(this.x.lq(A.B(a.code)))},
f4(a){var s,r=this,q=r.as
if(q!=null){s=a.c
if(s==null)s=a.a.b
q.textContent=s}q=a.a
if(q===B.bp)r.kU()
else if(q===B.br){q=r.x
q===$&&A.h()
q=q.a
r.w=q
s=r.f
if(s!=null)s.$1(q)
r.dg()}else r.d1()},
kU(){var s,r,q,p,o,n,m
this.d1()
s=this.at
if(s==null)return
for(r=A.dB,q=0;q<3;++q){p=B.fc[q]
o=A.b(A.i(s.ownerDocument).createElement("button"))
o.className="door-continue"
o.textContent=p.b
o.setAttribute("type","button")
n=new A.lZ(this,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
m=function(a,b){return function(c){return a(b,c,arguments.length)}}(r,n)
m[$.cI()]=n
o.addEventListener("click",m)
A.b(s.appendChild(o))}},
d1(){var s,r=this.at
if(r==null)return
while(A.i(r.firstChild)!=null){s=A.i(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
dg(){var s,r,q,p
for(s=this.Q,s=new A.T(s,A.p(s).i("T<1,2>")).gt(0);s.m();){r=s.d
q=r.b
p=this.x
p===$&&A.h()
p=p.a.r.h(0,r.a)
if(p==null)p="unbound"
q.textContent=p}},
eH(a,b,c,d,e,f){var s,r=A.A(a,"label","setting-row",null)
A.b(r.appendChild(A.A(a,"span",null,d)))
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.q(e)
s.max=""+f
s.step="0.1"
s.addEventListener("input",A.U(new A.lX(this,s,c)))
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
cY(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.U(new A.lY(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.A(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
f2(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seb(a){this.f=t.dO.a(a)},
saQ(a){this.r=t.Z.a(a)}}
A.m_.prototype={
$1(a){var s,r,q,p,o
A.b(a)
s=this.a
r=this.b
q=s.x
q===$&&A.h()
p=q.dm(r)
q=s.as
if(q!=null){o=p.c
r=o==null?"press a key for "+r+"; Escape cancels":o
q.textContent=r}s.d1()},
$S:2}
A.m0.prototype={
$1(a){var s
A.b(a)
s=this.a.r
if(s!=null)s.$0()},
$S:2}
A.lZ.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.x
r===$&&A.h()
s.f4(r.ej(this.b))},
$S:2}
A.lX.prototype={
$1(a){var s,r,q
A.b(a)
s=A.jy(A.B(this.b.value))
if(s==null)s=1
r=this.a
q=r.w
r.f2(this.c==="horizontalSensitivity"?q.lH(s):q.lR(s))},
$S:2}
A.lY.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.X(this.b.checked)
r=this.a
q=this.c
A:{if("invertX"===q){p=r.w.lI(s)
break A}if("invertY"===q){p=r.w.lJ(s)
break A}p=r.w.lG(s)
break A}r.f2(p)},
$S:2}
A.m8.prototype={
jr(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.A(a,i,"door-speaker",j)
k.b!==$&&A.E()
k.b=s
r=A.A(a,i,"door-line",j)
k.c!==$&&A.E()
k.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(h.appendChild(s))
A.b(h.appendChild(r))
r=A.A(a,i,"door-cite-list",j)
k.e!==$&&A.E()
k.e=r
s=A.A(a,i,"door-cite-result",j)
k.f!==$&&A.E()
k.f=s
A.b(h.appendChild(r))
A.b(h.appendChild(s))
for(s=A.dB,r=k.r,q=0;q<5;++q){p=B.fn[q]
o=A.b(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.m9(k,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.cI()]=n
o.addEventListener("click",m)
A.b(h.appendChild(o))
B.a.l(r,o)}s=A.A(a,"button","door-continue","continue")
k.d!==$&&A.E()
k.d=s
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.ma(k)))
A.b(h.appendChild(s))
l=A.U(new A.mb(k,a))
k.w=l
h.addEventListener("keydown",l)
A.b(A.i(a.body).appendChild(h))},
eB(a,b){var s,r,q,p=this
p.Q=!0
s=p.b
s===$&&A.h()
s.textContent=a
s=p.c
s===$&&A.h()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)A.b(s[q].style).display=""
r=p.d
r===$&&A.h()
A.b(r.style).display="none"
r=p.e
r===$&&A.h()
r.textContent=""
r=p.f
r===$&&A.h()
r.textContent=""
r=p.a
r.className="door visible"
r.removeAttribute("hidden")
B.a.gak(s).focus()},
cR(a){var s,r,q=this,p=q.c
p===$&&A.h()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.r)(p),++r)A.b(p[r].style).display="none"
p=q.d
p===$&&A.h()
A.b(p.style).display=""
s=q.f
s===$&&A.h()
s.textContent=""
p.focus()},
j6(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.dB,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.mc(o,this)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.cI()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
cw(){var s,r,q=this
q.Q=!1
s=q.e
s===$&&A.h()
s.textContent=""
s=q.f
s===$&&A.h()
s.textContent=""
s=q.a
s.className="door"
s.setAttribute("hidden","")
r=q.w
if(r!=null){s.removeEventListener("keydown",r)
q.w=null}},
smD(a){this.x=t.ov.a(a)},
smF(a){this.y=t.Z.a(a)},
smE(a){this.z=t.bZ.a(a)}}
A.m9.prototype={
$1(a){var s
A.b(a)
s=this.a.x
return s==null?null:s.$1(this.b)},
$S:1}
A.ma.prototype={
$1(a){var s
A.b(a)
s=this.a.y
return s==null?null:s.$0()},
$S:1}
A.mb.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.b(a)
s=this.a
if(!s.Q||A.B(a.code)!=="Tab")return
r=A.f([],t.Y)
for(q=s.r,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
if(A.B(A.b(n.style).display)!=="none")r.push(n)}q=s.d
q===$&&A.h()
if(A.B(A.b(q.style).display)!=="none")r.push(q)
s=s.e
s===$&&A.h()
m=A.b(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.a(m.length);++l){k=A.i(m.item(l))
if(s.b(k))B.a.l(r,k)}if(r.length===0)return
j=A.i(this.b.activeElement)
if(A.X(a.shiftKey)){if(j===B.a.gak(r)||!B.a.u(r,j)){a.preventDefault()
B.a.gN(r).focus()}}else if(j===B.a.gN(r)||!B.a.u(r,j)){a.preventDefault()
B.a.gak(r).focus()}},
$S:2}
A.mc.prototype={
$1(a){var s
A.b(a)
s=this.b.z
return s==null?null:s.$1(this.a.a)},
$S:1}
A.mf.prototype={
js(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.A(s,"h1","journal-title",null)
o.f!==$&&A.E()
o.f=r
q=A.A(s,"div","ending-copy",null)
o.r!==$&&A.E()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.A(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.U(new A.mg(o)))
A.b(n.appendChild(p))},
j7(a,b){var s,r,q,p,o,n,m=this
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
A.b(s.appendChild(n))}m.bs()},
smH(a){this.w=t.Z.a(a)}}
A.mg.prototype={
$1(a){var s
A.b(a)
s=this.a
s.a3()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.cc.prototype={
A(){return"GraphicsPreset."+this.b}}
A.df.prototype={
bo(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.df(s.a,r,q,p,o,n,m)},
ds(a){var s=null
return this.bo(a,s,s,s,s,s)},
fQ(a){var s=null
return this.bo(s,a,s,s,s,s)},
fR(a){var s=null
return this.bo(s,s,s,a,s,s)},
lN(a){var s=null
return this.bo(s,s,s,s,a,s)},
lF(a){var s=null
return this.bo(s,s,a,s,s,s)},
lP(a){var s=null
return this.bo(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.u(B.fK,q))throw A.d(A.a1("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.u(B.fi,q))throw A.d(A.a1("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.u(B.fN,q))throw A.d(A.a1("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.u(B.fI,q))throw A.d(A.a1("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.O(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.mP.prototype={
$1(a){return t.jI.a(a).b===this.a.h(0,"preset")},
$S:29}
A.mQ.prototype={
$0(){return A.k(B.e1)},
$S:7}
A.mR.prototype={
B(){return A.O(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.mJ.prototype={}
A.mK.prototype={}
A.iV.prototype={
jt(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.b(l.appendChild(A.A(a,"h1","journal-title","Graphics")))
A.b(l.appendChild(A.A(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.A(a,"div","settings-grid",n)
r=t.N
o.bC(a,s,"preset","quality preset",A.O(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bC(a,s,"renderScale","render scale",A.O(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bC(a,s,"frameTarget","frame target",A.O(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bC(a,s,"antialiasing","anti-aliasing",A.O(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bC(a,s,"textureQuality","texture quality",A.O(["high","High","medium","Medium","low","Low"],r,r))
q=A.A(a,"label","setting-toggle",n)
r=A.b(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.U(new A.mN(o)))
r=o.x
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.A(a,"span",n,"Dynamic resolution")))
A.b(s.appendChild(q))
A.b(l.appendChild(s))
r=A.A(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.b(l.appendChild(r))
p=A.A(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.U(new A.mO(o)))
A.b(l.appendChild(p))},
bC(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.b(s.appendChild(A.A(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.T(e,A.p(e).i("T<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.U(new A.mM(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.w.k(0,c,r)},
f7(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
eA(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.aP(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
seb(a){this.f=t.ft.a(a)},
saQ(a){this.r=t.Z.a(a)}}
A.mN.prototype={
$1(a){var s
A.b(a)
s=this.a
s.f7(s.z.fQ(A.X(s.x.checked)))},
$S:2}
A.mO.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.r
if(r!=null)r.$0()
else s.a3()},
$S:2}
A.mM.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.B(this.b.value)
r=this.a
q=this.c
A:{if("preset"===q){p=r.z.fR(B.a.bb(B.bZ,new A.mL(s)))
break A}if("renderScale"===q){p=r.z.lN(s)
break A}if("frameTarget"===q){p=r.z.lF(s)
break A}if("antialiasing"===q){p=r.z.ds(s)
break A}if("textureQuality"===q){p=r.z.lP(s)
break A}p=r.z
break A}r.f7(p)},
$S:2}
A.mL.prototype={
$1(a){return t.jI.a(a).b===this.a},
$S:29}
A.mT.prototype={
ju(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.A(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.A(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.A(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.A(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.U(new A.mU(this)))
A.b(p.appendChild(r))}}
A.mU.prototype={
$1(a){A.b(a)
return this.a.a3()},
$S:1}
A.no.prototype={
bs(){var s,r=this
r.ji()
s=r.r.a-1
if(s<1)s=1
r.CW=r.eP(r.CW,s)
r.kK()
r.fj()},
jM(){var s,r=this,q=r.a,p=A.A(q,"div","page-turn",null),o=A.A(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.U(new A.np(r)))
s=A.A(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.nq(r)))
q=A.A(q,"span","right-day-label",null)
r.Q!==$&&A.E()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
fH(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.eP(s.CW+a,r)
s.fj()},
eP(a,b){if(a<1)return 1
if(a>b)return b
return a},
kK(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.ev(),r=s.length,q=A.dB,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gN(n.c).n(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.nr(j,n,l)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.cI()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
fj(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.f([],s)
for(q=j.f,p=q.b,o=A.p(p).i("as<2>"),n=new A.as(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.ns())
j.fi(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.f([],s)
for(r=new A.as(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.nt())
j.fi(i,s)
k=B.d.K(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.b(i.style).setProperty("width",B.d.cH(k*100,1)+"%")},
fi(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.b(a.appendChild(this.kf(b[r])))},
kf(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.A(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.b(k.createElement("div"))
n.className=q
n.textContent=o
A.b(n.style).setProperty("--shake",B.d.n(p.b))
A.b(j.appendChild(n))}m=a.r
if(m!=null){l=this.kt(m,!1)
l.className=A.B(l.className)+" margin"
A.b(j.appendChild(l))}return j},
kt(a,b){var s=b?"hand-line struck":"hand-line",r=A.A(this.a,"div",s,a.n(0))
A.b(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.np.prototype={
$1(a){A.b(a)
return this.a.fH(-1)},
$S:1}
A.nq.prototype={
$1(a){A.b(a)
return this.a.fH(1)},
$S:1}
A.nr.prototype={
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
A.ns.prototype={
$2(a,b){var s=t.R
return B.c.F(s.a(a).a,s.a(b).a)},
$S:16}
A.nt.prototype={
$2(a,b){var s=t.R
return B.c.F(s.a(a).a,s.a(b).a)},
$S:16}
A.fW.prototype={
aK(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.i(this.a.body).appendChild(s))},
bs(){var s,r,q,p,o=this,n=o.b
if(B.b.u(A.B(n.className),"open"))return
s=$.nW
if(s!=null&&s!==o)s.a3()
$.nW=o
r=o.a
o.d=A.i(r.activeElement)
A.uS(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.U(o.gkE())
o.e=q
r.addEventListener("keydown",q)
p=A.w7(n)
if(p.length!==0)B.a.gak(p).focus()
else n.focus()},
a3(){var s,r,q=this,p=q.b
if(!B.b.u(A.B(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.nW===q)$.nW=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
im(a){},
kF(a){A.b(a)
this.im(a)
if(A.X(a.defaultPrevented))return
if(A.B(a.code)==="Escape"){a.preventDefault()
this.a3()
return}if(A.B(a.code)==="Tab")this.l1(a)},
l1(a){var s,r=A.w7(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.X(a.shiftKey)){if(s===B.a.gak(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gN(r).focus()}}else if(s===B.a.gN(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gak(r).focus()}},
saR(a){this.c=t.Z.a(a)}}
A.b2.prototype={
A(){return"PauseReason."+this.b}}
A.cr.prototype={
A(){return"PausePage."+this.b}}
A.dm.prototype={
A(){return"PauseTransitionKind."+this.b}}
A.cT.prototype={
B(){var s,r=A.v(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
V(a,b){if(b==null)return!1
return b instanceof A.cT&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gG(a){return A.ce(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.dl.prototype={
gfN(){var s=this.a
return s.length===1&&B.a.gak(s).a===B.aV},
B(){var s=A.v(t.N,t.X),r=this.a,q=A.M(r),p=q.i("Q<1,V<m,C?>>")
r=A.N(new A.Q(r,q.i("V<m,C?>(1)").a(new A.o0()),p),p.i("a2.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.M(r)
p=q.i("Q<1,m>")
r=A.N(new A.Q(r,q.i("m(1)").a(new A.o1()),p),p.i("a2.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.o0.prototype={
$1(a){return t.lf.a(a).B()},
$S:101}
A.o1.prototype={
$1(a){return t.e0.a(a).b},
$S:102}
A.bK.prototype={}
A.o_.prototype={
io(a){var s,r=this
if(r.a.gfN())return new A.bK(B.S,r.a,null)
s=r.a
s=new A.dl(B.fJ,s.b,a)
r.a=s
return new A.bK(B.cl,s,"pause.resume")},
li(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gN(p)
q=r.a.a
q=B.a.aC(q,0,q.length-1)
p=r.a
p=new A.dl(q,p.b,p.c)
r.a=p
return new A.bK(B.cm,p,s.c)}if(q.gfN()&&r.a.b.length===0)return r.bZ()
return new A.bK(B.S,r.a,null)},
bZ(){var s=this.a
if(s.a.length===0)return new A.bK(B.S,s,null)
if(s.b.length!==0)return new A.bK(B.S,s,null)
this.a=B.aU
return new A.bK(B.cn,B.aU,s.c)},
mW(a){var s,r,q=this
if(B.a.u(q.a.b,a))return new A.bK(B.S,q.a,null)
s=q.a
r=A.N(s.b,t.e0)
r.push(a)
s=new A.dl(s.a,r,q.a.c)
q.a=s
return new A.bK(B.cl,s,null)},
lX(a){var s,r,q,p,o=this
if(!B.a.u(o.a.b,a))return new A.bK(B.S,o.a,null)
s=o.a
r=s.b
q=A.M(r)
p=q.i("P<1>")
r=A.N(new A.P(r,q.i("n(1)").a(new A.o2(a)),p),p.i("o.E"))
q=o.a.c
r=new A.dl(s.a,r,q)
o.a=r
return new A.bK(B.hK,r,q)},
k6(a){var s
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
A.o2.prototype={
$1(a){return t.e0.a(a)!==this.a},
$S:103}
A.cs.prototype={
A(){return"PauseRootAction."+this.b}}
A.o3.prototype={
bg(a,b,c,d){var s,r=A.A(a,"button","door-continue",d)
r.setAttribute("type","button")
s=B.h6.h(0,c)
s.toString
r.id=s
r.setAttribute("aria-label",d)
r.addEventListener("click",A.U(new A.o4(this,c)))
A.b(b.appendChild(r))},
smR(a){this.f=t.Z.a(a)},
smT(a){this.r=t.Z.a(a)},
smG(a){this.w=t.Z.a(a)},
smS(a){this.x=t.Z.a(a)},
smJ(a){this.y=t.Z.a(a)},
saQ(a){this.z=t.Z.a(a)}}
A.o4.prototype={
$1(a){var s,r=this
A.b(a)
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
$S:2}
A.bv.prototype={
A(){return"PauseSettingsCategory."+this.b}}
A.oe.prototype={
j5(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.oI.prototype={
jz(a){var s,r,q,p,o,n,m,l,k=this.b
k.setAttribute("aria-label","Settings categories")
A.b(k.appendChild(A.A(a,"h1","journal-title","Settings")))
A.b(k.appendChild(A.A(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.A(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=A.dB,q=0;q<6;++q){p=B.fo[q]
o=B.aS.h(0,p)
o.toString
n=A.b(a.createElement("button"))
n.className="door-continue"
n.textContent=o
n.setAttribute("type","button")
o=B.ca.h(0,p)
o.toString
n.id=o
n.setAttribute("aria-label",A.q(B.aS.h(0,p))+" settings")
o=new A.oJ(this,p)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,o)
m[$.cI()]=o
n.addEventListener("click",m)
A.b(s.appendChild(n))}l=A.A(a,"button","door-continue","back")
l.setAttribute("type","button")
l.id="settings.back"
l.setAttribute("aria-label","back to pause menu")
l.addEventListener("click",A.U(new A.oK(this)))
A.b(s.appendChild(l))
A.b(k.appendChild(s))},
smC(a){this.f=t.mP.a(a)},
saQ(a){this.r=t.Z.a(a)}}
A.oJ.prototype={
$1(a){var s
A.b(a)
s=this.a.f
return s==null?null:s.$1(this.b)},
$S:1}
A.oK.prototype={
$1(a){var s
A.b(a)
s=this.a.r
return s==null?null:s.$0()},
$S:1}
A.h7.prototype={
jA(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="settings-grid",a="door-continue",a0=d.f,a1=a0==null?"House settings":A.q(B.aS.h(0,a0))+" settings",a2=d.b
a2.setAttribute("aria-label",a1)
A.b(a2.appendChild(A.A(a3,"h2","journal-title",a1)))
A.b(a2.appendChild(A.A(a3,"p","settings-copy","Change presentation without changing what happened in the house.")))
s=A.A(a3,"div",b,c)
for(r=t.ib,q=r.a(new A.oW(d)),p=B.a.gt(B.C),o=t.pl,q=new A.K(p,q,o);q.m();){n=p.gp()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(s.appendChild(d.ks(a3,m,l,n==null?1:n,k)))}A.b(a2.appendChild(s))
j=A.A(a3,"div",b,c)
for(r=r.a(new A.oX(d)),q=B.a.gt(B.C),o=new A.K(q,r,o);o.m();)A.b(j.appendChild(d.l0(a3,q.gp())))
A.b(a2.appendChild(j))
if(a0===B.x)A.b(a2.appendChild(d.jL(a3)))
if(a0===B.y)A.b(a2.appendChild(d.jK(a3)))
i=A.A(a3,"div",b,c)
for(a0=t.lt.a(d.gkl()),r=B.a.gt(B.fL),a0=new A.K(r,a0,t.nU),q=A.dB;a0.m();){p=r.gp()
o=p.b
h=A.b(a3.createElement("button"))
h.className="door-continue"
h.textContent="reset "+o
h.setAttribute("type","button")
p=new A.oY(d,p)
if(typeof p=="function")A.k(A.w("Attempting to rewrap a JS function.",c))
g=function(a5,a6){return function(a7){return a5(a6,a7,arguments.length)}}(q,p)
g[$.cI()]=p
h.addEventListener("click",g)
A.b(i.appendChild(h))}f=A.A(a3,"button",a,"reset all settings")
f.setAttribute("type","button")
f.addEventListener("click",A.U(new A.oZ(d)))
A.b(i.appendChild(f))
A.b(a2.appendChild(i))
e=A.A(a3,"button",a,"return")
e.setAttribute("type","button")
e.addEventListener("click",A.U(new A.p_(d)))
A.b(a2.appendChild(e))},
jK(a){var s,r,q=this,p="photosensitivitySafe",o=A.A(a,"div","settings-grid",null),n=q.cW(a,o,"reducedMotion","reduced motion (system default)"),m=q.cW(a,o,p,"photosensitivity-safe effects (system default)"),l=q.cW(a,o,"captions","non-speech captions"),k=A.A(a,"label","setting-row",null)
A.b(k.appendChild(A.A(a,"span",null,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.U(new A.oS(q,s)))
A.b(k.appendChild(s))
A.b(o.appendChild(k))
r=A.A(a,"button","door-continue","follow system accessibility defaults")
r.setAttribute("type","button")
r.setAttribute("aria-label","follow system accessibility defaults")
r.addEventListener("click",A.U(new A.oT(q)))
A.b(o.appendChild(r))
q.go.I(0,A.O(["reducedMotion",n,p,m,"captions",l,"uiScale",s],t.N,t.m))
return o},
cW(a,b,c,d){var s=A.A(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.U(new A.oM(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.A(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
ex(a){var s,r
this.fy=a
s=this.go
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.d.n(r==null?1:r)}},
jL(a){var s,r,q=this,p=A.A(a,"div","settings-grid",null),o=t.N,n=A.v(o,o)
for(s=0;s<4;++s){r=B.aR[s].b
n.k(0,r,r)}q.c2(a,p,"output","output",n)
n=A.v(o,o)
for(s=0;s<3;++s){r=B.aO[s].b
n.k(0,r,r)}q.c2(a,p,"dynamicRange","dynamic range",n)
n=A.v(o,o)
for(s=0;s<2;++s){r=B.aN[s].b
n.k(0,r,r)}q.c2(a,p,"reverb","room effect",n)
o=A.v(o,o)
for(s=0;s<2;++s){n=B.aM[s].b
o.k(0,n,n)}q.c2(a,p,"ducking","voice intelligibility",o)
return p},
c2(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.A(a,"label","setting-row",null)
A.b(s.appendChild(A.A(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.T(e,A.p(e).i("T<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.U(new A.oR(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.k1.k(0,c,r)},
iQ(a){var s,r,q,p,o,n,m,l,k
this.id=a
for(s=this.k1,s=new A.T(s,A.p(s).i("T<1,2>")).gt(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
f9(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.F===r){s=a.c===B.ap
break A}if(B.y===r){s=a.c===B.U
break A}if(B.x===r){s=a.c===B.E
break A}s=!1
break A}return s},
km(a){var s,r
t.op.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.F===s){r=a===B.ap
break A}if(B.y===s){r=a===B.U
break A}if(B.x===s){r=a===B.E
break A}r=!1
break A}return r},
l0(a,b){var s=this,r=A.A(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dx=q
break
case"mono":s.dy=q
break
case"high-contrast":s.fr=q
break
case"strong-highlights":s.fx=q
break}q.addEventListener("change",A.U(new A.oV(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.A(a,"span",null,b.b)))
return r},
ks(a,b,c,d,e){var s,r,q=this,p=A.A(a,"label","setting-row",null),o=A.A(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.q(e)
n.max=A.q(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.A(a,"output",null,"100%")
n.addEventListener("input",A.U(new A.oU(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cx.k(0,b,n)
q.cy.k(0,b,r)
q.db.k(0,b,new A.at(e,d))
return p},
ez(a,b){var s,r,q=this.cx.h(0,a),p=this.cy.h(0,a)
if(q==null||p==null)return
s=this.db.h(0,a)
if(s==null)s=B.hR
r=B.d.K(b,s.a,s.b)
q.value=B.d.n(r)
p.textContent=""+B.d.aJ(r*100)+"%"},
smL(a){this.r=t.hm.a(a)},
smN(a){this.w=t.cz.a(a)},
smM(a){this.x=t.cz.a(a)},
smI(a){this.y=t.hm.a(a)},
smK(a){this.z=t.cz.a(a)},
smV(a){this.Q=t.cz.a(a)},
smQ(a){this.as=t.m5.a(a)},
smP(a){this.at=t.Z.a(a)},
saQ(a){this.ax=t.Z.a(a)},
smB(a){this.ay=t.kn.a(a)},
smA(a){this.ch=t.km.a(a)},
smO(a){this.CW=t.Z.a(a)}}
A.oW.prototype={
$1(a){t.b9.a(a)
return a.d===B.L&&this.a.f9(a)},
$S:15}
A.oX.prototype={
$1(a){t.b9.a(a)
return a.d===B.a8&&this.a.f9(a)},
$S:15}
A.oY.prototype={
$1(a){var s
A.b(a)
s=this.a.as
return s==null?null:s.$1(this.b)},
$S:1}
A.oZ.prototype={
$1(a){var s
A.b(a)
s=this.a.at
return s==null?null:s.$0()},
$S:1}
A.p_.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.ax
if(r!=null)r.$0()
else s.a3()},
$S:2}
A.oS.prototype={
$1(a){var s,r,q
A.b(a)
s=this.a
r=s.fy
q=A.jy(A.B(this.b.value))
r=r.lQ(q==null?1:q)
s.fy=r
s=s.ch
if(s!=null)s.$1(r)},
$S:2}
A.oT.prototype={
$1(a){var s
A.b(a)
s=this.a.CW
return s==null?null:s.$0()},
$S:1}
A.oM.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.X(this.b.checked)
r=this.a
q=this.c
A:{if("reducedMotion"===q){p=r.fy.lM(s)
break A}if("photosensitivitySafe"===q){p=r.fy.lL(s)
break A}p=r.fy.lB(s)
break A}r.fy=p
r=r.ch
if(r!=null)r.$1(p)},
$S:2}
A.oR.prototype={
$1(a){var s,r,q,p,o=this
A.b(a)
s=o.a
r=s.id
q=o.b
A:{if("output"===q){p=r.lK(B.a.bb(B.aR,new A.oN(o.c)))
break A}if("dynamicRange"===q){p=r.lE(B.a.bb(B.aO,new A.oO(o.c)))
break A}if("reverb"===q){p=r.lO(B.a.bb(B.aN,new A.oP(o.c)))
break A}p=r.lD(B.a.bb(B.aM,new A.oQ(o.c)))
break A}s.id=p
s=s.ay
if(s!=null)s.$1(p)},
$S:2}
A.oN.prototype={
$1(a){return t.cK.a(a).b===A.B(this.a.value)},
$S:106}
A.oO.prototype={
$1(a){return t.cS.a(a).b===A.B(this.a.value)},
$S:107}
A.oP.prototype={
$1(a){return t.f1.a(a).b===A.B(this.a.value)},
$S:108}
A.oQ.prototype={
$1(a){return t.oA.a(a).b===A.B(this.a.value)},
$S:109}
A.oV.prototype={
$1(a){var s,r=this
A.b(a)
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.X(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.X(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.X(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.X(r.c.checked))
break}},
$S:2}
A.oU.prototype={
$1(a){var s,r,q,p=this
A.b(a)
s=A.jy(A.B(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aJ(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.y
if(q!=null)q.$2(r,s)}else{q=q.r
if(q!=null)q.$2(r,s)}},
$S:2}
A.bc.prototype={
A(){return"SettingCategory."+this.b}}
A.h6.prototype={
A(){return"SettingKind."+this.b}}
A.aJ.prototype={
cJ(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a1(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a1(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bT(a))throw A.d(A.a1(r.a+" must be boolean",q,q))
break}}}
A.p2.prototype={
$1(a){return t.b9.a(a).a===this.a},
$S:15}
A.p3.prototype={
$0(){return A.k(A.l("unknown setting: "+this.a))},
$S:7}
A.p0.prototype={
jB(a,b){var s,r=this.a
if(r!==1)throw A.d(A.w("unsupported settings version "+r,null))
for(r=this.b.gL(),r=r.gt(r);r.m();){s=r.gp()
A.p1(s.a).cJ(s.b)}},
c_(a){var s=this.b.h(0,a)
return s==null?A.k(A.l("setting missing from profile: "+a)):s},
B(){return A.O(["version",this.a,"values",this.b],t.N,t.K)}}
A.p4.prototype={
n5(a){var s,r,q=A.dj(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.cW(q,1)
this.kO(a)},
B(){return A.O(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
kO(a){var s,r,q=A.dj(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.cW(q,1)}}
A.p8.prototype={
jC(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.b(i.appendChild(A.A(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.A(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.A(a,"div","entry-picker",null)
for(r=A.dB,q=0;q<2;++q){p=B.bY[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.c3[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.p9(this,p,m)
if(typeof k=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.cI()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
smU(a){this.f=t.as.a(a)}}
A.p9.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a3()},
$S:2}
A.c7.prototype={}
A.lg.prototype={
ni(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.M(s)
q=new A.Q(s,r.i("m(1)").a(new A.li()),r.i("Q<1,m>")).be(0)
r=this.b
r.H(0)
s=J.xB(a,t.N)
p=s.$ti
r.I(0,new A.P(s,p.i("n(o.E)").a(q.gck(q)),p.i("P<o.E>")))},
m_(a,b){var s,r,q,p,o,n=A.f([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.u(0,o.a))n.push(o)}return n}}
A.li.prototype={
$1(a){return t.ot.a(a).a},
$S:110}
A.lh.prototype={
$2(a,b){var s,r=t.ot
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:111}
A.k5.prototype={
mo(a){return this.c.u(0,t.g.a(a))},
ek(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a5(0,j.glz())||!a.a.a5(0,new A.px(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.u(0,r)){o=s.c
if(o!==B.au){n=s.d
if(n<J.b8(p)){o=o===B.X
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.a1}else j=!1}}}if(j)return!1
m=new A.k4(r,s.b,A.ar(p,t.kX),B.X)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.H(0)
j.I(0,a.a)
j=l.c
j.H(0)
j.I(0,k)
l.e=m
return!0},
fL(a){var s=this.a,r=A.p(s).i("a8<1>"),q=r.i("P<o.E>")
s=A.N(new A.P(new A.a8(s,r),r.i("n(o.E)").a(new A.pu(a)),q),q.i("o.E"))
B.a.Y(s,new A.pv())
return s},
dm(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.jJ
s=m.a.h(0,a)
if(s==null)return B.jK
r=B.c.O(a.b-1,7)
q=a.a
p=m.b.u(0,q)||r+1>=3||m.f?B.bg:B.ab
o=p===B.ab&&m.r.u(0,q)&&s.M(B.bh)?B.bh:p
if(s.M(o))n=o
else n=s.M(B.ab)?B.ab:B.bg
r=s.h(0,n)
r.toString
r=new A.k4(a,n,A.ar(r,t.kX),B.X)
m.e=r
return new A.k3(r)},
lu(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cH
if(n.d!==B.X)return B.jH
n.e=a
s=a===B.a1
n.d=s?B.au:B.as
r=this.d
q=s?B.cF:B.js
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.d_(q,o,p,a,null))
if(a===B.ah)B.a.l(r,new A.d_(B.jv,o,p,a,null))
if(s)this.fk(n)
return new A.k2(n)},
lf(){var s,r=this.e
if(r==null)return B.cH
s=r.d
if(s!==B.as&&s!==B.at)return B.jI
r.d=B.at
if(++r.f>=r.c.length){r.d=B.au
this.fk(r)
return new A.hg(r,!0)}return new A.hg(r,!1)},
lv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.as&&s!==B.at}else s=!0
if(s)return i
r=h.gcn()
if(r==null)return i
s=t.N
q=A.v(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.e(o,p)
p=o[p].c}else p=B.c2
p=J.S(p)
while(p.m()){o=p.gp()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.bW(q,s,s)
m=c.kH(!0,!0,o,new A.pD(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.av){B.a.l(this.d,new A.d_(B.ju,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.dj(B.a.gN(j.c).a,s,s)
s.I(0,q)
p.lc(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.cI)if(k===B.bj){s=n.b
s=s.gP(s)}else s=!1
else s=!0
if(s)B.a.l(this.d,new A.d_(B.jt,o,p.b,i,l))}}return m},
fk(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.e=null},
sje(a){this.r=t.U.a(a)}}
A.px.prototype={
$1(a){var s=this.a.a
return new A.a8(s,A.p(s).i("a8<1>")).S(0,new A.pw(A.B(a)))},
$S:4}
A.pw.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:14}
A.pu.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:14}
A.pv.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:113}
A.pt.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:114}
A.k6.prototype={}
A.kv.prototype={}
A.rx.prototype={
$1(a){return B.b.R(A.B(a),"off.")},
$S:4}
A.bs.prototype={
A(){return"DoorChoice."+this.b}}
A.bN.prototype={
A(){return"VisitPhase."+this.b}}
A.bO.prototype={
A(){return"VisitTier."+this.b}}
A.dt.prototype={
A(){return"VisitorFactKind."+this.b}}
A.d_.prototype={
B(){var s,r=this,q=A.v(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.cA.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bP.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.bP&&b.a===this.a&&b.b===this.b},
gG(a){return A.ce(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c1.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.c1&&b.a===this.a&&b.b===this.b},
gG(a){return A.ce(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bz.prototype={
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.bz&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gG(a){var s=this
return A.ce(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.O(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.k7.prototype={
B(){var s,r,q,p=this.a
p=A.N(p,A.p(p).c)
B.a.X(p)
s=this.b
r=A.p(s)
q=r.i("dO<1,V<m,@>>")
s=A.N(new A.dO(s,r.i("V<m,@>(1)").a(new A.ps()),q),q.i("o.E"))
r=this.c
return A.O(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.ps.prototype={
$1(a){return t.g.a(a).B()},
$S:115}
A.ia.prototype={
B(){var s=this,r=s.a.B(),q=s.e
q=q==null?null:q.b
return A.O(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.ld.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:116}
A.le.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:117}
A.lf.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:118}
A.k4.prototype={
gcn(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.e(r,s)
s=r[s].b}else s=null
return s}}
A.py.prototype={}
A.bA.prototype={}
A.k3.prototype={}
A.k2.prototype={}
A.hg.prototype={}
A.hB.prototype={
gb7(){var s,r=this.p3
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.ow("next",r?this.glo():B.fU,!1,null,s)},
gdr(){if(this.p3){var s=this.d
s===$&&A.h()
s=s.b===B.a2}else s=!1
return s},
glo(){var s,r
if(!this.p3)return B.o
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.dh.lp(s,r)},
gmf(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.cH(this.k3,3)},
gme(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
b_(){var s,r,q,p,o,n,m=this,l=A.zp(m.a)
m.d=l
l=l.iv()
m.r=l
l=m.w=B.bu.iP(l)
q=m.b
p=m.c
s=new A.jP(q,p,q,p)
p=A.v9(m.d)
m.e=p
try{p.ib(new A.jD(l,384,216,l.b.u(0,"shadows")?1:0),s)}catch(o){r=A.ag(o)
l=m.w
if(l===B.am)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.am
l=A.v9(m.d)
l.ib(B.ie,s)
m.e=l}l=m.e
l.c8()
n=A.z1(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.p3=!0},
aS(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.w("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.c8()
new A.jP(a,b,a,b).C()
r.b=a
r.c=b},
lh(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="wall-plaster",b2="grime",b3="renderer is not initialized",b4="resource library is disposed"
if(!a9.p3||a9.Q.length!==0)return
a9.p4=b5
s=a9.dy
r=a9.e
r===$&&A.h()
s.k(0,b1,r.gaI().iz("texture:wall-plaster",256,256))
s.k(0,b2,a9.e.gaI().iz("texture:grime",512,512))
a9.fy=a9.e.gaI().iy(A.jf(s.h(0,b1),!1,"quarantine-house-safe",!0,0.48,0.44,0.46,1,1))
r=a9.fr
r.k(0,"cellar",a9.e.gaI().iy(A.jf(s.h(0,b2),!1,"quarantine-house-cellar",!0,0.3,0.28,0.29,1,1)))
for(q=b5.b,p=A.M(q),o=p.i("n(1)").a(new A.q3()),n=B.a.gt(q),p=new A.K(n,o,p.i("K<1>"));p.m();){o=n.gp().a
m=a9.kR(o)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
k=A.jf(s.h(0,b1),!1,"quarantine-house-"+o+"-gothic",!0,m.c,m.b,m.a,1,1)
if(l.r)A.k(A.l(b4))
k.C()
j=l.b.a.au(k,b0)
l.e.l(0,j)
r.k(0,o,j)}for(p=a9.fx,i=0;i<7;++i){h=B.fu[i]
o=a9.e.w
if(o==null)o=A.k(A.l(b3))
n=h==="service"?s.h(0,b2):s.h(0,b1)
l=a9.d9(h)
k=a9.d9(h)
l=A.jf(n,!1,"quarantine-inventory-"+h,!0,a9.d9(h).c,k.b,l.a,1,1)
if(o.r)A.k(A.l(b4))
l.C()
j=o.b.a.au(l,b0)
o.e.l(0,j)
p.k(0,h,j)}for(p=q.length,o=a9.Q,n=a9.as,l=a9.at,k=a9.y,g=a9.z,i=0;f=q.length,i<f;q.length===p||(0,A.r)(q),++i){e=q[i]
d=a9.fn(b5,e)
f=a9.e.w
if(f==null)f=A.k(A.l(b3))
c=e.a
if(f.r)A.k(A.l(b4))
b=f.a
d.C()
j=b.b.au(d,"room:"+c)
a=j.a
b.c.k(0,a,b.bn(d))
f.d.l(0,j)
B.a.l(k,j)
g.k(0,c,j)
f=r.h(0,c)
if(f==null){f=a9.fy
f.toString}a0=new A.aU(j,f,B.A,-1,B.M,B.Z,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.A.C()
b=f.a
a1=b.$ti
b.a2(a1.c.a(j))
b=b.b
if(!(a>=0&&a<b.length))return A.e(b,a)
d=b[a].c
b=(d==null?a1.y[1].a(d):d).d
a=B.A.af()
b=b.gaD()
a1=A.M(b)
A.bq(new A.Q(b,a1.i("D(1)").a(a.gaA()),a1.i("Q<1,D>")))
a2=f.b.bJ(a0)
B.a.l(o,a2)
n.k(0,c,a2)
l.k(0,c,a0)}for(i=0;i<q.length;q.length===f||(0,A.r)(q),++i){e=q[i]
for(p=e.e,o=p.length,n=e.a,a3=0;a3<p.length;p.length===o||(0,A.r)(p),++a3){a4=p[a3]
l=a4.c
g=a4.d
a9.eF(n,a9.ff(e,a4.b,l,l+a4.e,g,g+a4.f,7902632),new A.q4(a4))}}for(q=b5.c,p=q.length,o=a9.cy,n=b5.e,i=0;l=q.length,i<l;q.length===p||(0,A.r)(q),++i){a5=q[i]
if(a5.at==null||a5.as)continue
e=n.h(0,a5.b)
if(e==null)continue
d=a9.f0(b5,e,a5)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
g=a5.a
if(l.r)A.k(A.l(b4))
f=l.a
d.C()
j=f.b.au(d,"door-leaf:"+g)
c=j.a
f.c.k(0,c,f.bn(d))
l.d.l(0,j)
B.a.l(k,j)
l=e.a
f=r.h(0,l)
if(f==null){f=a9.fy
f.toString}a0=new A.aU(j,f,B.A,0,B.M,B.Z,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.A.C()
b=f.a
a=b.$ti
b.a2(a.c.a(j))
b=b.b
if(!(c>=0&&c<b.length))return A.e(b,c)
d=b[c].c
c=(d==null?a.y[1].a(d):d).d
b=B.A.af()
c=c.gaD()
a=A.M(c)
A.bq(new A.Q(c,a.i("D(1)").a(b.gaA()),a.i("Q<1,D>")))
o.k(0,g,new A.hA(g,l,f.b.bJ(a0),j,a0))}for(i=0;i<q.length;q.length===l||(0,A.r)(q),++i){a5=q[i]
if(a5.as||a5.at!=null)continue
e=n.h(0,a5.b)
if(e==null)continue
r=e.a
a9.eF(r,a9.ff(e,a5.aw(r),a5.ad(r),a5.ad(r)+a5.w,0,a5.x,5915445),new A.q5(a5))}for(r=A.CE(A.BV(b5)),q=r.length,p=a9.cx,o=a9.CW,i=0;i<r.length;r.length===q||(0,A.r)(r),++i){a6=r[i]
n=a6.a
m=a9.kg(n)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
g=""+n
f=n===4?s.h(0,b2):s.h(0,b1)
f=A.jf(f,!0,"quarantine-house-exterior-slot-"+g,!0,m.c,m.b,m.a,1,1)
if(l.r)A.k(A.l(b4))
f.C()
j=l.b.a.au(f,b0)
l.e.l(0,j)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
f=a6.b
if(l.r)A.k(A.l(b4))
c=l.a
f.C()
a7=c.b.au(f,"exterior:slot-"+g)
g=a7.a
c.c.k(0,g,c.bn(f))
l.d.l(0,a7)
B.a.l(k,a7)
a8=new A.aU(a7,j,B.A,-1,B.M,B.Z,!0,!0,0,b0)
p.k(0,n,a8)
l=a9.f
l===$&&A.h()
B.A.C()
f=l.a
c=f.$ti
f.a2(c.c.a(a7))
f=f.b
if(!(g>=0&&g<f.length))return A.e(f,g)
d=f[g].c
g=(d==null?c.y[1].a(d):d).d
f=B.A.af()
g=g.gaD()
c=A.M(g)
A.bq(new A.Q(g,c.i("D(1)").a(f.gaA()),c.i("Q<1,D>")))
o.k(0,n,l.b.bJ(a8))}},
iR(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.dx=A.ar(a8.e,t.gB)
if(!a5.p3)return
for(s=a5.ax,r=new A.T(s,A.p(s).i("T<1,2>")).gt(0),q=a5.ay;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.b0(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.k(A.l(a6))
o=n.a
if(p.r)A.k(A.l(a7))
p.a.b0(o)
p.d.ae(0,o)}}s.H(0)
q.H(0)
r=a5.ch
B.a.H(r)
for(p=a5.dx,o=p.length,m=a8.c,l=a5.fx,k=0;k<o;++k){j=p[k]
i=a5.p4
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.ci(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.k(A.l(a6))
f=a5.kr(g,j,m)
e=j.a
if(i.r)A.k(A.l(a7))
d=i.a
f.C()
c=d.b.au(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bn(f))
i.d.l(0,c)
i=j.f
f=i.a
a=B.W.ga6()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.jT(new A.D(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.jB(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.aU(c,a2,i,-1,B.M,B.Z,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.C()
a2=d.a
f=a2.$ti
a2.a2(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.e(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.af()
f=f.gaD()
b=A.M(f)
A.bq(new A.Q(f,b.i("D(1)").a(i.gaA()),b.i("Q<1,D>")))
s.k(0,e,d.b.bJ(n))}$.J.j().setAttribute("data-renderer-inventory-items",""+s.a)},
j3(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a8.e,a7=a6.h(0,a9)
if(a7==null)return
s=a7.a
r=A.ax([s],t.N)
for(q=a8.ap(s),p=J.S(q.a),q=new A.K(p,q.b,q.$ti.i("K<1>"));q.m();){o=p.gp()
n=o.bt(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a6.h(0,n)!=null)r.l(0,n)}for(a6=a5.as,a6=new A.T(a6,A.p(a6).i("T<1,2>")).gt(0),s=a5.at;a6.m();){m=a6.d
q=m.a
p=s.h(0,q)
p.toString
l=a5.bH(p,r.u(0,q)?-1:0)
p=a5.f
p===$&&A.h()
o=m.b
k=l.c
k.C()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.a2(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.af()
j=j.gaD()
i=A.M(j)
A.bq(new A.Q(j,i.i("D(1)").a(k.gaA()),i.i("Q<1,D>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.a2(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o].saY(l)
s.k(0,q,l)}for(a6=a5.db,s=a6.length,f=0;f<a6.length;a6.length===s||(0,A.r)(a6),++f){e=a6[f]
d=r.u(0,e.a)&&e.d.$0()?-1:0
q=a5.f
q===$&&A.h()
p=a5.bH(e.c,d)
o=p.c
o.C()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.a2(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.e(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.af()
k=k.gaD()
j=A.M(k)
A.bq(new A.Q(k,j.i("D(1)").a(o.gaA()),j.i("Q<1,D>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.a2(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.e(q,o)
q[o].saY(p)}a6=a5.cy
s=A.p(a6).i("a8<1>")
s=A.N(new A.a8(a6,s),s.i("o.E"))
q=s.length
f=0
for(;f<s.length;s.length===q||(0,A.r)(s),++f){c=a6.h(0,s[f])
p=c.e
l=a5.bH(p,r.u(0,c.b)?-1:0)
p=a5.f
p===$&&A.h()
o=c.c
k=l.c
k.C()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.a2(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.af()
j=j.gaD()
i=A.M(j)
A.bq(new A.Q(j,i.i("D(1)").a(k.gaA()),i.i("Q<1,D>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.a2(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o].saY(l)
a6.k(0,c.a,c.lC(l))}for(a6=a5.dx,s=a6.length,q=a5.ax,p=a5.ay,f=0;f<s;++f){b=a6[f]
o=b.a
a=q.h(0,o)
a0=p.h(0,o)
if(a==null||a0==null)continue
o=a5.f
o===$&&A.h()
k=a5.bH(a0,r.u(0,b.b)?-1:0)
j=k.c
j.C()
i=o.a
h=i.$ti
a1=h.c.a(k.a)
i.a2(a1)
i=i.b
a1=a1.a
if(!(a1>=0&&a1<i.length))return A.e(i,a1)
g=i[a1].c
i=(g==null?h.y[1].a(g):g).d
j=j.af()
i=i.gaD()
h=A.M(i)
A.bq(new A.Q(i,h.i("D(1)").a(j.gaA()),h.i("Q<1,D>")))
o=o.b
h=o.$ti
h.c.a(a)
h.y[1].a(k)
o.a2(a)
o=o.b
h=a.a
if(!(h>=0&&h<o.length))return A.e(o,h)
o[h].saY(k)}a2=new A.mk().lt(a9).a!==0
a6=a5.cx
s=A.p(a6).i("a8<1>")
s=A.N(new A.a8(a6,s),s.i("o.E"))
q=s.length
p=a5.CW
f=0
for(;f<s.length;s.length===q||(0,A.r)(s),++f){a3=s[f]
a4=p.h(0,a3)
if(a4==null)continue
o=a6.h(0,a3)
o.toString
l=a5.bH(o,a2?-1:0)
o=a5.f
o===$&&A.h()
k=l.c
k.C()
j=o.a
i=j.$ti
h=i.c.a(l.a)
j.a2(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.af()
j=j.gaD()
i=A.M(j)
A.bq(new A.Q(j,i.i("D(1)").a(k.gaA()),i.i("Q<1,D>")))
o=o.b
i=o.$ti
i.c.a(a4)
i.y[1].a(l)
o.a2(a4)
o=o.b
i=a4.a
if(!(i>=0&&i<o.length))return A.e(o,i)
o[i].saY(l)
a6.k(0,a3,l)}},
n2(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(!j.p3)return
s=j.as.h(0,b)
r=j.at
q=r.h(0,b)
p=j.z
o=p.h(0,b)
n=a.e.h(0,b)
if(s==null||q==null||o==null||n==null)return
m=j.e
m===$&&A.h()
l=m.gaI().eh(j.fn(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.aU(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.h()
m.dk(k)
m.b.eo(s,k)
r.k(0,b,k)
p.k(0,b,l)
p=j.y
B.a.ae(p,o)
B.a.l(p,l)
j.e.gaI().iA(o)
$.J.j().setAttribute("data-renderer-geometry-refreshes",""+(j.R8+1));++j.R8},
eg(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.p3)return
s=k.cy
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.h()
m=p.gaI().eh(k.f0(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.aU(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.dk(l)
p.b.eo(n,l)
s.k(0,b,r.fS(l,m))
s=k.y
n=r.d
B.a.ae(s,n)
B.a.l(s,m)
k.e.gaI().iA(n)},
iS(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.ax([b],t.N),e=a.e,d=e.h(0,b)
if(d!=null)for(s=d.a,r=a.ap(s),q=J.S(r.a),r=new A.K(q,r.b,r.$ti.i("K<1>"));r.m();){p=q.gp()
o=p.bt(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&e.h(0,o)!=null)f.l(0,o)}n=new A.iY(a).iH(f,c)
m=A.f([],t.dQ)
l=A.f([],t.D)
for(k=0;k<n.length;++k){j=n[k]
i=this.eV(j.b)
e=j.a
h=new A.D(e.a,e.b,e.c)
e=j.d
s=j.c
if(k===0)B.a.l(l,new A.be(k,h,B.ar,i,e,s,1.05,1.4))
else B.a.l(m,new A.ju(h,i,e,s))}g=A.x2(a0)
e=Math.max(0.045,0.52*a1)
this.id=new A.iM(B.f8,B.f7,1.5,14,B.f6,e,a0===0?null:new A.m7(new A.D(g.a,g.b,g.c),this.eV(A.x1(a0)),0.72+a1*0.18),m,l)},
aU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.p3)throw A.d(A.l("Pixeldart runtime is not initialized"))
s=g.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cS(s)
q=A.tm(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.eF(r,q,q.a1(0,r),B.aa,B.jd,0.1,60,g.b/g.c)}p=g.id
o=g.k1
n=g.p2++
m=g.k4
l=new A.pa()
$.ur()
k=$.oc.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.h()
j=g.f
j===$&&A.h()
k.kJ()
k.c8()
i=B.a.u(k.d,j)
if(!i)A.k(A.w("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.gac(0))A.k(A.w("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.gac(0)||i.gbU()<1e-12)A.k(A.w("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.w("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.w("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.gac(0)||!s.b.gac(0)||!s.c.gac(0))A.k(A.w("CameraView matrices must be finite",f))
p.C()
o.C()
if(!isFinite(m))A.k(A.w("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.mr(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.aF)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.aF
s.c=0
B.a.H(s.a)
g.k2=g.e.m3()
s=$.oc.$0()
l.b=s
g.k3=l.gm0()/1000},
bc(a){},
ig(){},
iw(){++this.ok},
fn(a,b){var s,r,q,p,o,n,m=A.wL(a,b),l=A.BU(a,b),k=A.N(m.a,t.i)
B.a.I(k,m.b)
B.a.I(k,m.c)
B.a.I(k,l)
s=new Float32Array(A.Y(k))
r=A.f([],t.k)
for(k=s.length,q=0;q<k;q+=14){p=s[q]
o=q+1
if(!(o<k))return A.e(s,o)
o=s[o]
n=q+2
if(!(n<k))return A.e(s,n)
B.a.l(r,new A.D(p,o,s[n]))}return new A.c_(B.a_,s,null,A.bq(r))},
eF(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.h()
r=s.gaI().eh(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.aU(r,p.kv(a),B.A,0,B.M,B.Z,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.dk(q)
B.a.l(p.db,new A.kx(a,s.b.bJ(q),q,c))},
kv(a){var s=this.fr.h(0,a)
if(s==null){s=this.fy
s.toString}return s},
kr(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cx(new Float32Array(5376))
g=this.kq(a0.b)
r=new A.c(d,b,f)
q=new A.c(e,b,f)
p=new A.c(e,c,f)
o=new A.c(d,c,f)
n=new A.c(d,b,a)
m=new A.c(e,b,a)
l=new A.c(e,c,a)
k=new A.c(d,c,a)
s.an(q,r,o,p,g)
s.an(n,m,l,k,g)
s.an(r,n,k,o,g)
s.an(m,q,p,l,g)
s.an(r,q,m,n,g)
s.an(o,k,l,p,g)
j=B.q.aC(s.a,0,s.b)
g=A.f([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.e(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.e(j,c)
g.push(new A.D(e,d,j[c]))}return new A.c_(B.a_,j,null,A.bq(g))},
kq(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
kg(a){var s
A:{if(0===a){s=B.hT
break A}if(1===a){s=B.hV
break A}if(2===a){s=B.i0
break A}if(3===a){s=B.ia
break A}if(4===a){s=B.ic
break A}if(5===a){s=B.hZ
break A}if(6===a){s=B.i9
break A}if(7===a){s=B.i4
break A}s=B.i8
break A}return s},
d9(a){var s
A:{if("architecture"===a){s=B.hU
break A}if("furniture"===a){s=B.cp
break A}if("fixture"===a){s=B.i3
break A}if("service"===a){s=B.i5
break A}if("story"===a){s=B.i2
break A}if("decor"===a){s=B.hY
break A}if("micro"===a){s=B.i_
break A}s=B.cp
break A}return s},
kR(a){var s
A:{if("living-room"===a){s=B.hX
break A}if("hall"===a){s=B.i1
break A}if("kitchen"===a){s=B.ib
break A}if("bedroom"===a){s=B.id
break A}if("landing"===a){s=B.i6
break A}if("bathroom"===a){s=B.hW
break A}if("spare-room"===a){s=B.i7
break A}s=B.hS
break A}return s},
aG(a){return this.mv(t.G.a(a))},
mv(a){var s=0,r=A.bm(t.H),q,p=this,o,n,m,l
var $async$aG=A.bo(function(b,c){if(b===1)return A.bi(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.f([],t.iw)
for(n=0;n<2;++n){m=B.fS[n]
l=a.h(0,m)
if(l!=null)o.push(p.ca(m,l))}s=3
return A.ai(A.mx(o,t.H),$async$aG)
case 3:case 1:return A.bj(q,r)}})
return A.bk($async$aG,r)},
ca(a,b){return this.ku(a,b)},
ku(a,b){var s=0,r=A.bm(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$ca=A.bo(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dy.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.b(A.b(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ai(A.aO(A.b(m.decode()),t.X),$async$ca)
case 7:g=A.b(A.b(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mR.a(A.b(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gaI()
f=new Uint8Array(A.Y(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.np(d,f)
$.J.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ag(c)
h=$.J.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.b(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.q(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bj(q,r)
case 2:return A.bi(o.at(-1),r)}})
return A.bk($async$ca,r)},
bH(a,b){return new A.aU(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
f0(a,b,c){var s,r,q,p,o,n=A.BT(a,b,c),m=n.length
if(m===0)throw A.d(A.l("door "+c.a+" produced no leaf geometry"))
s=A.f([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.e(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.e(n,o)
s.push(new A.D(q,p,n[o]))}return new A.c_(B.a_,n,null,A.bq(s))},
ff(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.a_.j().aM(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.f([new A.c(k,s,r),new A.c(q,s,r),new A.c(q,p,r),new A.c(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.f([new A.c(k,s,r),new A.c(q,s,r),new A.c(q,p,r),new A.c(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.f([new A.c(k,s,r),new A.c(k,s,q),new A.c(k,p,q),new A.c(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.f([new A.c(k,s,r),new A.c(k,s,q),new A.c(k,p,q),new A.c(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.cx(new Float32Array(5376))
o.an(k[0],k[1],k[2],k[3],g)
n=B.q.aC(o.a,0,o.b)
k=A.f([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.e(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.e(n,p)
k.push(new A.D(r,q,n[p]))}return new A.c_(B.a_,n,null,A.bq(k))},
eV(a){return new A.cQ((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$its:1}
A.q3.prototype={
$1(a){return t.J.a(a).a!=="cellar"},
$S:25}
A.q4.prototype={
$0(){return!this.a.w},
$S:12}
A.q5.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:12}
A.f3.prototype={
gb7(){return A.ow("legacy",B.o,this.e,this.f,"legacy")},
gdr(){return this.x},
b_(){var s,r=this
if(r.w)return
s=A.z2(r.a,r.b,r.c)
r.r!==$&&A.E()
r.r=s
s.hn=s.hm=s.hl=r.d
r.w=!0},
aS(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.aS(a,b)}},
aU(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.d(A.l("legacy runtime is not initialized"))
if(j.x||$.fh==null)return;++j.y
$.J.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.h()
r=$.wi
q=$.bE.j()
s.hr=A.x2($.ep.j().gbB()).ga6()
s.sie(A.x1($.ep.j().gbB()))
p=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.ep.j().gbB()))
s.hv=p<0?0:p
p=$.bD.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.a_(0,p.d.a1(0,(A.t5(o*0.28,1309)*2-1)*n)).a_(0,p.c.a1(0,(A.t5(p.r*0.28,2839)*2-1)*n))
p=$.bD.j()
s.hw=p.a
s.dN=p.b
s.dO=p.c
s.dP=p.d
m=A.AP(0,0.25,0.11)
s.dQ=m.a
s.dR=m.b
s.dS=m.c
p=s.cu
l=p==null?s.bN:p
if(l==null)l=s.b8
p=s.aN
p.aX(l)
s.aF.depthMask(!0)
p.lw(l,s.dQ/255,s.dR/255,s.dS/255)
s.dI=s.cv=0
s.dK=!1
s.bP=0
k=$.fh
if(k!=null)k.lY($.aM,$.i7())
s.md(r,q)
$.vQ.j().en(B.df,r)},
bc(a){},
ig(){this.x=!0},
iw(){this.x=!1},
$its:1}
A.kx.prototype={}
A.hA.prototype={
fS(a,b){var s=this,r=b==null?s.d:b
return new A.hA(s.a,s.b,s.c,r,a)},
lC(a){return this.fS(a,null)}}
A.qx.prototype={
$2(a,b){var s
A.u9(a,A.q(b))
switch(a){case"master":s=$.bl
if(s!=null)s.iW(b)
break
case"voice":s=$.bl
if(s!=null)s.iZ(b)
break
case"effects":s=$.bl
if(s!=null)s.iV(b)
break
case"ambience":s=$.bl
if(s!=null)s.iU(b)
break
case"music":s=$.bl
if(s!=null)s.iX(b)
break}},
$S:33}
A.qy.prototype={
$1(a){var s
A.u9("muted",""+a)
s=$.bl
if(s!=null)s.iY(a)},
$S:8}
A.qz.prototype={
$1(a){var s
A.u9("mono",""+a)
s=$.bl
if(s!=null)s.cP(a)},
$S:8}
A.qE.prototype={
$2(a,b){A.ua(a,A.q(b))
A.vV(a,b)},
$S:33}
A.qF.prototype={
$1(a){var s="high-contrast"
A.ua(s,""+a)
A.qm(s,a)},
$S:8}
A.qG.prototype={
$1(a){var s="strong-highlights"
A.ua(s,""+a)
A.qm(s,a)},
$S:8}
A.qH.prototype={
$1(a){$.cJ().n5(a)
A.re()
A.vW()},
$S:122}
A.qI.prototype={
$0(){var s=$.cJ()
s.a=A.cW(null,1)
s.b=A.cW(null,1)
A.re()
A.vW()},
$S:0}
A.qJ.prototype={
$0(){A.fm(this.a)},
$S:0}
A.qK.prototype={
$0(){this.a.a3()},
$S:0}
A.qL.prototype={
$0(){A.fm(this.a)},
$S:0}
A.qA.prototype={
$0(){A.er(this.a)},
$S:0}
A.qB.prototype={
$1(a){$.i_=a
A.wp()
A.tN()},
$S:123}
A.qC.prototype={
$1(a){$.eq=a
A.u1()
A.ql()},
$S:124}
A.qD.prototype={
$0(){$.eq=B.ac
$.eo.j().ex($.eq)
A.u1()
A.ql()},
$S:0}
A.qt.prototype={
$1(a){var s,r=A.wU(a,A.wa()),q=r.a
$.r5=A.iW(q,a)
A.wr()
s=r.b
$.fd.j().eA(a,q,s)
$.J.j().setAttribute("data-graphics-fallback",B.a.aP(s,"|"))},
$S:125}
A.qu.prototype={
$0(){A.fm($.fd.j())},
$S:0}
A.qv.prototype={
$0(){A.fm($.fd.j())},
$S:0}
A.qq.prototype={
$1(a){$.tT=a
$.aX.j().ey(a.r)
A.wq()},
$S:126}
A.qr.prototype={
$0(){A.fm($.hT.j())},
$S:0}
A.qs.prototype={
$0(){A.fm($.hT.j())},
$S:0}
A.r9.prototype={
$0(){$.rk=A.X(this.a.matches)
$.ud=A.X(this.b.matches)
A.ql()},
$S:0}
A.r7.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.r8.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.rF.prototype={
$1(a){var s
try{A.uJ(a,this.a)
return!0}catch(s){if(A.ag(s) instanceof A.G)return!1
else throw s}},
$S:127}
A.rG.prototype={
$1(a){var s,r,q,p,o=null,n=a
A:{if(B.F===n){o=$.hZ.j()
break A}if(B.y===n){o=$.eo.j()
break A}if(B.a4===n){o=$.fd.j()
break A}if(B.x===n){o=$.fb.j()
break A}if(B.a5===n){o=$.hT.j()
break A}o=$.fe.j()
break A}s=o
r=null
q=a
B:{if(B.F===q){r=B.hA
break B}if(B.y===q){r=B.hE
break B}if(B.a4===q){r=B.hB
break B}if(B.x===q){r=B.hD
break B}if(B.a5===q){r=B.hC
break B}r=B.aW
break B}p=r
o=B.ca.h(0,a)
o.toString
A.wm(s,p,o)},
$S:128}
A.rH.prototype={
$0(){A.fm($.hY.j())},
$S:0}
A.rS.prototype={
$0(){return A.er($.hY.j())},
$S:0}
A.rV.prototype={
$0(){$.cD.j().a3()},
$S:0}
A.rW.prototype={
$0(){$.cD.j().a3()},
$S:0}
A.rX.prototype={
$0(){A.wm($.hY.j(),B.aW,"pause.settings")},
$S:0}
A.rY.prototype={
$0(){$.cD.j().a3()
A.kZ($.hV.j())},
$S:0}
A.rZ.prototype={
$0(){A.ri("saved")},
$S:0}
A.t_.prototype={
$0(){$.cD.j().a3()
A.kZ($.hV.j())},
$S:0}
A.t0.prototype={
$0(){return A.er($.cD.j())},
$S:0}
A.rI.prototype={
$0(){return A.er($.hW.j())},
$S:0}
A.rJ.prototype={
$2(a,b){var s,r,q,p,o,n
if($.Z.j().gar().a===21){A.ww(!1)
return}s=$.a_.j().r.b
$.Z.j().jb(a,b,$.aM)
r=$.a_.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cO()
if(typeof n!=="number")return A.l4(n)
if(!(o<n))break
if($.a_.b===$.a_)A.k(A.a9(""))
p=B.a.h(B.J,q).b
o=$.fh
if(o!=null)o.cG(p)
o=$.bn
if(o!=null){n=$.a_.b
if(n===$.a_)A.k(A.a9(""))
o.n2(n,p)}o=q
if(typeof o!=="number")return o.a_()
q=o+1}A.ri("saved after sleep")},
$S:129}
A.rK.prototype={
$0(){return A.er($.qh.j())},
$S:0}
A.rL.prototype={
$0(){return A.er($.hV.j())},
$S:0}
A.rM.prototype={
$0(){A.er($.hU.j())},
$S:0}
A.rN.prototype={
$0(){A.er($.hU.j())},
$S:0}
A.rO.prototype={
$1(a){A.b(a)
return A.wv()},
$S:1}
A.rP.prototype={
$1(a){var s,r
A.b(a)
if(A.X(a.defaultPrevented))return
if(A.B(a.code)==="Escape"&&!A.X(a.repeat)){r=$.bh
if(r==null)A.kZ($.cD.j())
else r.a3()
return}s=$.bh==null
if(!A.X(a.repeat)&&s)$.cE.j().bc(new A.jE(A.B(a.code),!0,1))
if(A.B(a.code)==="KeyP"&&!A.X(a.repeat)&&$.xm())$.u0=!$.u0
if(A.B(a.code)==="KeyR"&&!A.X(a.repeat)&&s&&$.wH){r=$.fl
if(r!=null)r.bw()}if(A.B(a.code)==="KeyJ"&&!A.X(a.repeat)&&!$.aL.j().Q)A.rl($.hW.j())
if(A.B(a.code)==="KeyL"&&!A.X(a.repeat)&&!$.aL.j().Q)A.rl($.qh.j())
if(A.B(a.code)==="KeyH"&&!A.X(a.repeat)&&!$.aL.j().Q)A.rl($.hV.j())
if(A.B(a.code)==="KeyO"&&!A.X(a.repeat)&&!$.aL.j().Q)A.rl($.fe.j())
if(A.B(a.code)==="KeyK"&&!A.X(a.repeat)&&s)A.ri("saved")},
$S:2}
A.rQ.prototype={
$1(a){A.b(a)
if($.bh==null)$.cE.j().bc(new A.jE(A.B(a.code),!1,0))},
$S:2}
A.rR.prototype={
$1(a){A.b(a)
return A.vY()},
$S:1}
A.rT.prototype={
$1(a){A.b(a)
return A.vY()},
$S:1}
A.rU.prototype={
$1(a){A.b(a)
return $.aX.j().bY($.J.j())},
$S:1}
A.ra.prototype={
$1(a){var s=A.B(A.b(a).message)
A.rf(s,null)},
$S:2}
A.rb.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.rf("unhandled rejection: "+A.q(s==null?A.B(a.type):s),null)},
$S:2}
A.rj.prototype={
$0(){this.a.className=""},
$S:11}
A.rg.prototype={
$1(a){return t.R.a(a).e},
$S:35};(function aliases(){var s=J.di.prototype
s.jh=s.n
s=A.o.prototype
s.jg=s.er
s=A.fW.prototype
s.ji=s.bs})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"AW","yy",23)
r(J.t.prototype,"gck","u",20)
q(A,"B8","yN",32)
p(A.bZ.prototype,"glz","M",20)
o(A,"BP","zA",17)
o(A,"BQ","zB",17)
o(A,"BR","zC",17)
q(A,"wK","Bw",0)
s(A,"BX","yE",23)
r(A.c3.prototype,"gck","u",20)
o(A,"C_","AA",10)
p(A.jg.prototype,"gnb","nc",71)
var n
p(n=A.jS.prototype,"gn7","n8",9)
p(n,"gnd","ne",9)
p(n,"gnf","ng",9)
p(n,"gn9","na",9)
q(A,"Dk","to",12)
p(A.cS.prototype,"gaA","iC",52)
p(n=A.j0.prototype,"gkw","kx",1)
p(n,"gky","kz",1)
p(n,"gkC","kD",1)
p(n,"gkA","kB",1)
o(A,"Cs","w4",10)
o(A,"Cu","w3",10)
o(A,"Ch","yu",132)
o(A,"Ci","yv",133)
o(A,"Cy","yp",134)
p(A.fW.prototype,"gkE","kF",1)
p(A.h7.prototype,"gkl","km",104)
p(A.k5.prototype,"gmn","mo",14)
o(A,"wT","Bh",135)
o(A,"Cm","Au",136)
q(A,"Co","Az",0)
o(A,"Cn","Av",91)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.C,null)
q(A.C,[A.tg,J.j2,A.h5,J.dG,A.o,A.fx,A.da,A.ah,A.R,A.oH,A.b9,A.e_,A.K,A.hi,A.am,A.cy,A.bR,A.eU,A.eH,A.ek,A.cV,A.pk,A.nS,A.fD,A.hF,A.a0,A.nD,A.co,A.as,A.dZ,A.j7,A.pK,A.qc,A.cf,A.kn,A.kL,A.q9,A.kb,A.bS,A.aP,A.kf,A.ef,A.ap,A.kc,A.kJ,A.hR,A.hs,A.ks,A.el,A.hv,A.hL,A.kM,A.dM,A.iw,A.q0,A.qd,A.dN,A.dc,A.kk,A.jq,A.h9,A.pL,A.G,A.W,A.al,A.kK,A.pa,A.b4,A.hN,A.pm,A.kE,A.nR,A.kp,A.f4,A.of,A.e4,A.lU,A.lV,A.jv,A.eF,A.iM,A.mr,A.cU,A.mS,A.cQ,A.m7,A.ju,A.be,A.e1,A.bf,A.pq,A.c_,A.nT,A.o8,A.jF,A.aU,A.jP,A.jD,A.mt,A.jg,A.jW,A.nN,A.d1,A.jS,A.dW,A.iK,A.iL,A.ms,A.an,A.b1,A.ay,A.H,A.fy,A.od,A.b3,A.oh,A.aT,A.oj,A.oi,A.ei,A.h0,A.q8,A.ky,A.km,A.oz,A.oF,A.bu,A.br,A.az,A.m3,A.i9,A.e3,A.mu,A.cS,A.jB,A.jT,A.D,A.fw,A.kd,A.ik,A.ke,A.iA,A.kh,A.fB,A.ki,A.iE,A.kj,A.iU,A.ko,A.ji,A.kt,A.eE,A.il,A.tp,A.fY,A.kz,A.jA,A.kA,A.ea,A.jI,A.kC,A.jJ,A.kD,A.jM,A.kH,A.jL,A.kG,A.k1,A.kN,A.h2,A.k9,A.kO,A.lS,A.iP,A.iR,A.fH,A.h8,A.x,A.iB,A.jw,A.mG,A.dx,A.cu,A.eK,A.pC,A.dz,A.hQ,A.hP,A.k8,A.iD,A.ie,A.kF,A.lr,A.la,A.fv,A.ln,A.td,A.lz,A.lt,A.hj,A.lR,A.mq,A.jQ,A.mE,A.iZ,A.j0,A.je,A.e0,A.nJ,A.cx,A.op,A.oy,A.pE,A.hq,A.kI,A.kw,A.ku,A.p5,A.c,A.lQ,A.iF,A.me,A.eL,A.jt,A.o9,A.eZ,A.oE,A.e8,A.iN,A.mB,A.mA,A.lF,A.eA,A.eC,A.ez,A.eB,A.im,A.jh,A.hl,A.ka,A.fJ,A.mX,A.oA,A.b0,A.iI,A.iX,A.mY,A.iJ,A.mk,A.dw,A.dQ,A.oB,A.dv,A.f8,A.mV,A.mi,A.p6,A.n_,A.cn,A.cd,A.nl,A.nj,A.nk,A.ct,A.iY,A.b6,A.bx,A.ba,A.bw,A.db,A.dq,A.aV,A.n5,A.cm,A.mW,A.fI,A.n4,A.eP,A.n9,A.fX,A.fP,A.pz,A.jb,A.bH,A.nn,A.lM,A.dH,A.lN,A.nz,A.ny,A.o6,A.o5,A.o7,A.ox,A.jE,A.ov,A.f_,A.m4,A.pD,A.ed,A.is,A.nf,A.nh,A.oC,A.cv,A.oD,A.iO,A.pb,A.ec,A.eb,A.hh,A.pe,A.d7,A.lj,A.d8,A.lP,A.eI,A.cM,A.it,A.fW,A.m8,A.df,A.mR,A.mJ,A.mK,A.cT,A.dl,A.bK,A.o_,A.oe,A.aJ,A.p0,A.p4,A.c7,A.lg,A.k5,A.py,A.d_,A.bP,A.c1,A.bz,A.k7,A.ia,A.k4,A.hB,A.f3,A.kx,A.hA])
q(J.j2,[J.j5,J.fL,J.fM,J.eS,J.eT,J.dX,J.dh])
q(J.fM,[J.di,J.t,A.dk,A.fT])
q(J.di,[J.js,J.dr,J.cP])
r(J.j3,A.h5)
r(J.nm,J.t)
q(J.dX,[J.fK,J.j6])
q(A.o,[A.du,A.L,A.cR,A.P,A.ch,A.ej,A.cC])
q(A.du,[A.dK,A.hS])
r(A.hp,A.dK)
r(A.hn,A.hS)
q(A.da,[A.ip,A.io,A.jR,A.rA,A.rC,A.pG,A.pF,A.qo,A.my,A.pV,A.pX,A.nF,A.pZ,A.t2,A.t3,A.ru,A.og,A.pr,A.nK,A.nL,A.nM,A.nV,A.nI,A.nO,A.ph,A.pj,A.mn,A.ml,A.mm,A.nX,A.nY,A.oo,A.on,A.om,A.ol,A.ok,A.oq,A.r1,A.r2,A.oG,A.t9,A.t7,A.mv,A.nH,A.rs,A.mH,A.mI,A.pA,A.pB,A.lB,A.lD,A.lC,A.lE,A.ls,A.lb,A.lc,A.lp,A.lq,A.lo,A.mF,A.ou,A.mh,A.mC,A.mD,A.lG,A.lH,A.lI,A.lJ,A.lK,A.lL,A.rq,A.lT,A.mj,A.mZ,A.r4,A.qk,A.qj,A.nb,A.nd,A.p7,A.n2,A.n0,A.rp,A.n6,A.n8,A.ro,A.md,A.nC,A.nu,A.m5,A.m6,A.rc,A.pf,A.pg,A.l9,A.ll,A.lk,A.lw,A.lx,A.m1,A.m2,A.m_,A.m0,A.lZ,A.lX,A.lY,A.m9,A.ma,A.mb,A.mc,A.mg,A.mP,A.mN,A.mO,A.mM,A.mL,A.mU,A.np,A.nq,A.nr,A.o0,A.o1,A.o2,A.o4,A.oJ,A.oK,A.oW,A.oX,A.oY,A.oZ,A.p_,A.oS,A.oT,A.oM,A.oR,A.oN,A.oO,A.oP,A.oQ,A.oV,A.oU,A.p2,A.p9,A.li,A.px,A.pw,A.pu,A.rx,A.ps,A.ld,A.le,A.lf,A.q3,A.qy,A.qz,A.qF,A.qG,A.qH,A.qB,A.qC,A.qt,A.qq,A.r7,A.r8,A.rF,A.rG,A.rO,A.rP,A.rQ,A.rR,A.rT,A.rU,A.ra,A.rb,A.rg])
q(A.ip,[A.pJ,A.lW,A.nv,A.rB,A.qp,A.rr,A.mz,A.pW,A.nE,A.nG,A.q1,A.po,A.pn,A.t4,A.nP,A.pi,A.mo,A.t8,A.t6,A.lu,A.lv,A.nc,A.ne,A.n3,A.nB,A.ni,A.pc,A.pd,A.ns,A.nt,A.lh,A.pv,A.pt,A.qx,A.qE,A.rJ])
r(A.ca,A.hn)
q(A.ah,[A.dY,A.cX,A.j8,A.jV,A.jG,A.kl,A.fO,A.ic,A.c8,A.hf,A.jU,A.f0,A.ir])
r(A.f2,A.R)
r(A.dL,A.f2)
q(A.L,[A.a2,A.a8,A.aR,A.T,A.eh,A.hu])
q(A.a2,[A.hb,A.Q,A.h4,A.kr])
r(A.dO,A.cR)
q(A.bR,[A.en,A.f5,A.f6])
q(A.en,[A.at,A.hC])
r(A.ad,A.f5)
r(A.hD,A.f6)
r(A.f9,A.eU)
r(A.ds,A.f9)
r(A.fz,A.ds)
q(A.eH,[A.a7,A.ck])
q(A.cV,[A.fA,A.hE,A.hM])
r(A.cb,A.fA)
q(A.io,[A.oa,A.pH,A.pI,A.qa,A.mw,A.pM,A.pR,A.pQ,A.pO,A.pN,A.pU,A.pT,A.pS,A.q7,A.rh,A.qf,A.qe,A.r0,A.qU,A.qV,A.r_,A.qP,A.qR,A.qQ,A.qZ,A.qN,A.qO,A.qW,A.qX,A.qY,A.qT,A.qS,A.r3,A.rt,A.ot,A.na,A.n1,A.n7,A.ly,A.mQ,A.p3,A.q4,A.q5,A.qI,A.qJ,A.qK,A.qL,A.qA,A.qD,A.qu,A.qv,A.qr,A.qs,A.r9,A.rH,A.rS,A.rV,A.rW,A.rX,A.rY,A.rZ,A.t_,A.t0,A.rI,A.rK,A.rL,A.rM,A.rN,A.rj])
r(A.fV,A.cX)
q(A.jR,[A.jN,A.eD])
q(A.a0,[A.bZ,A.hr,A.kq])
r(A.fN,A.bZ)
r(A.eV,A.dk)
q(A.fT,[A.jj,A.aS])
q(A.aS,[A.hw,A.hy])
r(A.hx,A.hw)
r(A.fR,A.hx)
r(A.hz,A.hy)
r(A.fS,A.hz)
q(A.fR,[A.fQ,A.jk])
q(A.fS,[A.jl,A.jm,A.jn,A.jo,A.jp,A.e2,A.fU])
r(A.hG,A.kl)
r(A.hk,A.kf)
r(A.kB,A.hR)
r(A.ht,A.hr)
r(A.c3,A.hE)
r(A.he,A.hM)
q(A.dM,[A.ih,A.iG,A.j9])
q(A.iw,[A.lO,A.nx,A.nw,A.pp])
r(A.ja,A.fO)
r(A.q_,A.q0)
r(A.k_,A.iG)
q(A.c8,[A.eX,A.j_])
r(A.kg,A.hN)
q(A.kk,[A.e5,A.dV,A.ib,A.cz,A.eJ,A.ij,A.iq,A.iC,A.e7,A.eN,A.bY,A.h3,A.cl,A.eY,A.eO,A.hm,A.ho,A.iQ,A.fF,A.iS,A.iT,A.dT,A.fG,A.e9,A.cZ,A.eG,A.f7,A.ii,A.dJ,A.ix,A.iz,A.aW,A.ig,A.bX,A.dS,A.dP,A.de,A.fE,A.dd,A.dg,A.h1,A.e6,A.by,A.bd,A.j1,A.ee,A.c0,A.c9,A.cj,A.cL,A.cK,A.d9,A.dI,A.cc,A.b2,A.cr,A.dm,A.cs,A.bv,A.bc,A.h6,A.bs,A.bN,A.bO,A.dt,A.cA])
q(A.cU,[A.bt,A.bM,A.cq,A.jr,A.cO])
r(A.os,A.pE)
r(A.or,A.os)
q(A.fW,[A.iu,A.mf,A.iV,A.mT,A.no,A.o3,A.oI,A.h7,A.p8])
q(A.py,[A.k6,A.kv,A.bA,A.k3,A.k2,A.hg])
s(A.f2,A.cy)
s(A.hS,A.R)
s(A.hw,A.R)
s(A.hx,A.am)
s(A.hy,A.R)
s(A.hz,A.am)
s(A.f9,A.hL)
s(A.hM,A.kM)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",y:"double",b_:"num",m:"String",n:"bool",al:"Null",I:"List",C:"Object",V:"Map",a3:"JSObject"},mangledNames:{},types:["~()","~(a3)","al(a3)","cN()","n(m)","n(y)","n(an)","0&()","~(n)","cN(bM?)","@(@)","al()","n()","~(@)","n(bz)","n(aJ)","j(bH,bH)","~(~())","n(H)","n(bf)","n(C?)","n(@)","n(b6)","j(@,@)","m(C?)","n(aV)","m?(m)","@(m)","n(j)","n(cc)","@()","~(C?,C?)","j()","~(m,y)","al(@)","n(bH)","eE()","cO(j,j,m?)","h2(bt)","cN(m{fallback:m?})","V<m,m>(V<m,m>,m)","be?()","I<be>()","eF()","y()","0&(m,j?)","aU(bL)","j(az<bu>,az<bu>)","bL(az<bu>)","j(az<br>,az<br>)","bL(az<br>)","e3(y,y,y,y)","D(D)","~(ea)","ea()","C?(C?)","bI<al>(W<m,m>)","al(@,cw)","n(I<m>)","j(m,m)","j(bx,bx)","n(a3)","a3()","j(+influence,light(y,be),+influence,light(y,be))","n(bX)","~(j,@)","~(C,cw)","eA(C?)","ez(C?)","eB(C?)","al(C,cw)","e1(cq)","eC(C?)","cq(j,j,m?)","n(dq)","n(dw)","n(dv)","c(c)","j(+(y,y,y,y),+(y,y,y,y))","I<+(y,y,y,y)>()","n(bx)","j(j,aV)","n(cd)","n(cn)","bt(j,j,m?)","j(ct,ct)","n(cm)","W<m,m>(m,@)","n(by)","n(bd)","j(j,+(bt,c_))","~(j)","W<j,@>(j,ec)","W<j,@>(j,eb)","n(W<@,@>)","W<m,m>(W<@,@>)","n?(C?)","al(C?)","0^(o<0^>,C?)<C?>","n(W<m,m>)","~(@,@)","V<m,C?>(cT)","m(b2)","n(b2)","n(bc)","bM(j,j,m?)","n(c9)","n(cj)","n(cL)","n(cK)","m(c7)","j(c7,c7)","n(hd?)","j(bz,bz)","j(c1,c1)","V<m,@>(bz)","n(bO)","n(bN)","n(bs)","j(j,+(bM,d1))","m(an)","j(a4,a4)","~(bc)","~(d8)","~(d7)","~(df)","~(eI)","n(eZ)","~(bv)","~(by,bd)","al(~())","@(@,m)","cn(C?)","cd(C?)","cm(C?)","~(b_)","~(m)","j(j)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.at&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.hC&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ad&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.hD&&A.Cq(a,b.a)}}
A.zT(v.typeUniverse,JSON.parse('{"cP":"di","js":"di","dr":"di","CQ":"dk","t":{"I":["1"],"L":["1"],"a3":[],"o":["1"]},"j5":{"n":[],"aa":[]},"fL":{"al":[],"aa":[]},"fM":{"a3":[]},"di":{"a3":[]},"j3":{"h5":[]},"nm":{"t":["1"],"I":["1"],"L":["1"],"a3":[],"o":["1"]},"dG":{"ak":["1"]},"dX":{"y":[],"b_":[],"aQ":["b_"]},"fK":{"y":[],"j":[],"b_":[],"aQ":["b_"],"aa":[]},"j6":{"y":[],"b_":[],"aQ":["b_"],"aa":[]},"dh":{"m":[],"aQ":["m"],"nZ":[],"aa":[]},"du":{"o":["2"]},"fx":{"ak":["2"]},"dK":{"du":["1","2"],"o":["2"],"o.E":"2"},"hp":{"dK":["1","2"],"du":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"hn":{"R":["2"],"I":["2"],"du":["1","2"],"L":["2"],"o":["2"]},"ca":{"hn":["1","2"],"R":["2"],"I":["2"],"du":["1","2"],"L":["2"],"o":["2"],"o.E":"2","R.E":"2"},"dY":{"ah":[]},"dL":{"R":["j"],"cy":["j"],"I":["j"],"L":["j"],"o":["j"],"R.E":"j","cy.E":"j"},"L":{"o":["1"]},"a2":{"L":["1"],"o":["1"]},"hb":{"a2":["1"],"L":["1"],"o":["1"],"a2.E":"1","o.E":"1"},"b9":{"ak":["1"]},"cR":{"o":["2"],"o.E":"2"},"dO":{"cR":["1","2"],"L":["2"],"o":["2"],"o.E":"2"},"e_":{"ak":["2"]},"Q":{"a2":["2"],"L":["2"],"o":["2"],"a2.E":"2","o.E":"2"},"P":{"o":["1"],"o.E":"1"},"K":{"ak":["1"]},"ch":{"o":["1"],"o.E":"1"},"hi":{"ak":["1"]},"f2":{"R":["1"],"cy":["1"],"I":["1"],"L":["1"],"o":["1"]},"h4":{"a2":["1"],"L":["1"],"o":["1"],"a2.E":"1","o.E":"1"},"at":{"en":[],"bR":[]},"hC":{"en":[],"bR":[]},"ad":{"f5":[],"bR":[]},"hD":{"f6":[],"bR":[]},"fz":{"ds":["1","2"],"f9":["1","2"],"eU":["1","2"],"hL":["1","2"],"V":["1","2"]},"eH":{"V":["1","2"]},"a7":{"eH":["1","2"],"V":["1","2"]},"ej":{"o":["1"],"o.E":"1"},"ek":{"ak":["1"]},"ck":{"eH":["1","2"],"V":["1","2"]},"fA":{"cV":["1"],"dp":["1"],"L":["1"],"o":["1"]},"cb":{"fA":["1"],"cV":["1"],"dp":["1"],"L":["1"],"o":["1"]},"fV":{"cX":[],"ah":[]},"j8":{"ah":[]},"jV":{"ah":[]},"hF":{"cw":[]},"da":{"dR":[]},"io":{"dR":[]},"ip":{"dR":[]},"jR":{"dR":[]},"jN":{"dR":[]},"eD":{"dR":[]},"jG":{"ah":[]},"bZ":{"a0":["1","2"],"ti":["1","2"],"V":["1","2"],"a0.K":"1","a0.V":"2"},"a8":{"L":["1"],"o":["1"],"o.E":"1"},"co":{"ak":["1"]},"aR":{"L":["1"],"o":["1"],"o.E":"1"},"as":{"ak":["1"]},"T":{"L":["W<1,2>"],"o":["W<1,2>"],"o.E":"W<1,2>"},"dZ":{"ak":["W<1,2>"]},"fN":{"bZ":["1","2"],"a0":["1","2"],"ti":["1","2"],"V":["1","2"],"a0.K":"1","a0.V":"2"},"en":{"bR":[]},"f5":{"bR":[]},"f6":{"bR":[]},"j7":{"nZ":[]},"eV":{"dk":[],"a3":[],"aa":[]},"e2":{"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"],"aa":[],"R.E":"j","am.E":"j"},"dk":{"a3":[],"aa":[]},"fT":{"a3":[]},"jj":{"a3":[],"aa":[]},"aS":{"bJ":["1"],"a3":[]},"fR":{"R":["y"],"aS":["y"],"I":["y"],"bJ":["y"],"L":["y"],"a3":[],"o":["y"],"am":["y"]},"fS":{"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"]},"fQ":{"mp":[],"R":["y"],"aS":["y"],"I":["y"],"bJ":["y"],"L":["y"],"a3":[],"o":["y"],"am":["y"],"aa":[],"R.E":"y","am.E":"y"},"jk":{"R":["y"],"aS":["y"],"I":["y"],"bJ":["y"],"L":["y"],"a3":[],"o":["y"],"am":["y"],"aa":[],"R.E":"y","am.E":"y"},"jl":{"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"],"aa":[],"R.E":"j","am.E":"j"},"jm":{"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"],"aa":[],"R.E":"j","am.E":"j"},"jn":{"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"],"aa":[],"R.E":"j","am.E":"j"},"jo":{"tx":[],"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"],"aa":[],"R.E":"j","am.E":"j"},"jp":{"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"],"aa":[],"R.E":"j","am.E":"j"},"fU":{"hd":[],"R":["j"],"aS":["j"],"I":["j"],"bJ":["j"],"L":["j"],"a3":[],"o":["j"],"am":["j"],"aa":[],"R.E":"j","am.E":"j"},"kl":{"ah":[]},"hG":{"cX":[],"ah":[]},"bS":{"ak":["1"]},"cC":{"o":["1"],"o.E":"1"},"aP":{"ah":[]},"hk":{"kf":["1"]},"ap":{"bI":["1"]},"hR":{"vt":[]},"kB":{"hR":[],"vt":[]},"hr":{"a0":["1","2"],"V":["1","2"]},"ht":{"hr":["1","2"],"a0":["1","2"],"V":["1","2"],"a0.K":"1","a0.V":"2"},"eh":{"L":["1"],"o":["1"],"o.E":"1"},"hs":{"ak":["1"]},"c3":{"cV":["1"],"uZ":["1"],"dp":["1"],"L":["1"],"o":["1"]},"el":{"ak":["1"]},"R":{"I":["1"],"L":["1"],"o":["1"]},"a0":{"V":["1","2"]},"hu":{"L":["2"],"o":["2"],"o.E":"2"},"hv":{"ak":["2"]},"eU":{"V":["1","2"]},"ds":{"f9":["1","2"],"eU":["1","2"],"hL":["1","2"],"V":["1","2"]},"cV":{"dp":["1"],"L":["1"],"o":["1"]},"hE":{"cV":["1"],"dp":["1"],"L":["1"],"o":["1"]},"he":{"cV":["1"],"kM":["1"],"dp":["1"],"L":["1"],"o":["1"]},"kq":{"a0":["m","@"],"V":["m","@"],"a0.K":"m","a0.V":"@"},"kr":{"a2":["m"],"L":["m"],"o":["m"],"a2.E":"m","o.E":"m"},"ih":{"dM":["I<j>","m"]},"iG":{"dM":["m","I<j>"]},"fO":{"ah":[]},"ja":{"ah":[]},"j9":{"dM":["C?","m"]},"k_":{"dM":["m","I<j>"]},"dN":{"aQ":["dN"]},"y":{"b_":[],"aQ":["b_"]},"dc":{"aQ":["dc"]},"j":{"b_":[],"aQ":["b_"]},"I":{"L":["1"],"o":["1"]},"b_":{"aQ":["b_"]},"dp":{"L":["1"],"o":["1"]},"m":{"aQ":["m"],"nZ":[]},"kk":{"F":[]},"ic":{"ah":[]},"cX":{"ah":[]},"c8":{"ah":[]},"eX":{"ah":[]},"j_":{"ah":[]},"hf":{"ah":[]},"jU":{"ah":[]},"f0":{"ah":[]},"ir":{"ah":[]},"jq":{"ah":[]},"h9":{"ah":[]},"kK":{"cw":[]},"b4":{"zb":[]},"hN":{"jX":[]},"kE":{"jX":[]},"kg":{"jX":[]},"kp":{"tq":[]},"f4":{"tq":[]},"e5":{"F":[]},"bt":{"cU":[]},"bM":{"cU":[]},"cq":{"cU":[]},"cO":{"cU":[]},"jr":{"cU":[]},"dV":{"F":[]},"ib":{"F":[]},"cz":{"F":[]},"eJ":{"F":[]},"ij":{"F":[]},"iq":{"F":[]},"iC":{"F":[]},"e7":{"F":[]},"eN":{"F":[]},"bY":{"F":[]},"h3":{"F":[]},"cl":{"F":[]},"eY":{"F":[]},"h0":{"z0":[]},"ei":{"bL":[]},"ky":{"z_":[]},"km":{"yi":[]},"bu":{"aQ":["bu"]},"br":{"aQ":["br"]},"eO":{"F":[]},"hm":{"F":[]},"fw":{"af":[]},"kd":{"a4":[]},"ik":{"af":[]},"ke":{"a4":[]},"iA":{"af":[]},"kh":{"a4":[]},"ho":{"F":[]},"fB":{"af":[]},"ki":{"a4":[]},"iE":{"af":[]},"kj":{"a4":[]},"iU":{"af":[]},"ko":{"a4":[]},"ji":{"af":[]},"kt":{"a4":[]},"il":{"yZ":[]},"fY":{"af":[]},"kz":{"a4":[]},"jA":{"af":[]},"kA":{"a4":[]},"jI":{"af":[]},"kC":{"a4":[]},"jJ":{"af":[]},"kD":{"a4":[]},"jM":{"af":[]},"kH":{"a4":[]},"jL":{"af":[]},"kG":{"a4":[]},"k1":{"af":[]},"kN":{"a4":[]},"k9":{"af":[]},"kO":{"a4":[]},"iQ":{"F":[]},"fF":{"F":[]},"iS":{"F":[]},"iT":{"F":[]},"dT":{"F":[]},"fG":{"F":[]},"e9":{"F":[]},"cZ":{"F":[]},"eG":{"F":[]},"iB":{"y1":[]},"f7":{"F":[]},"aW":{"F":[]},"ii":{"F":[]},"dJ":{"F":[]},"ix":{"F":[]},"iz":{"F":[]},"dz":{"cN":[]},"k8":{"yl":[]},"ig":{"F":[]},"bX":{"F":[]},"dS":{"F":[]},"dP":{"F":[]},"de":{"F":[]},"dd":{"F":[]},"fE":{"F":[]},"dg":{"F":[]},"h1":{"F":[]},"e6":{"F":[]},"by":{"F":[]},"bd":{"F":[]},"j1":{"F":[]},"ee":{"F":[]},"c0":{"F":[]},"c9":{"F":[]},"cj":{"F":[]},"cL":{"F":[]},"cK":{"F":[]},"dI":{"F":[]},"d9":{"F":[]},"cc":{"F":[]},"b2":{"F":[]},"cr":{"F":[]},"dm":{"F":[]},"cs":{"F":[]},"bv":{"F":[]},"bc":{"F":[]},"h6":{"F":[]},"bs":{"F":[]},"bN":{"F":[]},"bO":{"F":[]},"dt":{"F":[]},"cA":{"F":[]},"hB":{"ts":[]},"f3":{"ts":[]},"yt":{"I":["j"],"L":["j"],"o":["j"]},"hd":{"I":["j"],"L":["j"],"o":["j"]},"zg":{"I":["j"],"L":["j"],"o":["j"]},"yr":{"I":["j"],"L":["j"],"o":["j"]},"tx":{"I":["j"],"L":["j"],"o":["j"]},"ys":{"I":["j"],"L":["j"],"o":["j"]},"zf":{"I":["j"],"L":["j"],"o":["j"]},"mp":{"I":["y"],"L":["y"],"o":["y"]},"yh":{"I":["y"],"L":["y"],"o":["y"]}}'))
A.zS(v.typeUniverse,JSON.parse('{"f2":1,"hS":2,"aS":1,"hE":1,"hM":1,"iw":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",a:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{lC:s("fv"),ot:s("c7"),v:s("aP"),f5:s("ie"),oA:s("cK"),cS:s("cj"),cK:s("c9"),f1:s("cL"),gE:s("ez"),fS:s("eA"),d2:s("eB"),lJ:s("eC"),dP:s("br"),kp:s("eE"),gS:s("dL"),bP:s("aQ<@>"),e3:s("fy"),p:s("a7<m,m>"),I:s("a7<m,j>"),Q:s("cb<m>"),ml:s("dN"),lD:s("bs"),jS:s("dc"),gt:s("L<@>"),no:s("bX"),R:s("bH"),aT:s("F"),W:s("ah"),hZ:s("b0"),B:s("mp"),gY:s("dR"),mj:s("bI<al>"),iP:s("ck<bv,m>"),_:s("cN"),jI:s("cc"),bU:s("dg"),mm:s("cm"),lv:s("iZ<C>"),hL:s("cO"),ob:s("cn"),gB:s("cd"),dp:s("o<fy>"),bq:s("o<m>"),id:s("o<y>"),e7:s("o<@>"),fm:s("o<j>"),od:s("t<c7>"),ag:s("t<iF>"),hS:s("t<db>"),r:s("t<bH>"),bp:s("t<iJ>"),ph:s("t<b0>"),iw:s("t<bI<~>>"),mc:s("t<iN>"),l2:s("t<cN>"),aW:s("t<b1>"),iG:s("t<fI>"),dL:s("t<eP>"),oX:s("t<CP<C>>"),og:s("t<dW>"),jj:s("t<cO>"),Y:s("t<a3>"),b1:s("t<jb>"),cs:s("t<ba>"),ic:s("t<V<m,C>>"),hq:s("t<V<m,m>>"),bV:s("t<V<m,@>>"),kS:s("t<je>"),mn:s("t<e0>"),dg:s("t<bt>"),hJ:s("t<an>"),eY:s("t<cT>"),jc:s("t<bw>"),de:s("t<e3>"),bz:s("t<ct>"),dQ:s("t<ju>"),aN:s("t<bx>"),bM:s("t<+(m,I<bx>)>"),gf:s("t<+influence,light(y,be)>"),fR:s("t<+(j,m)>"),a3:s("t<+(y,y,y,y)>"),o5:s("t<af>"),u:s("t<a4>"),oZ:s("t<h0>"),C:s("t<H>"),c8:s("t<aU>"),bH:s("t<bL>"),kl:s("t<aV>"),e_:s("t<cv>"),b2:s("t<f_>"),ao:s("t<az<br>>"),mX:s("t<az<bu>>"),D:s("t<be>"),jn:s("t<dq>"),s:s("t<m>"),aA:s("t<jQ>"),k:s("t<D>"),h:s("t<c>"),cF:s("t<hh>"),bl:s("t<d_>"),ah:s("t<c1>"),cJ:s("t<b6>"),dA:s("t<dw>"),a9:s("t<dv>"),jU:s("t<kx>"),dz:s("t<dx<e1>>"),jk:s("t<dx<c_>>"),n_:s("t<dx<aU>>"),mQ:s("t<dx<d1>>"),eP:s("t<f8>"),df:s("t<n>"),n:s("t<y>"),dG:s("t<@>"),t:s("t<j>"),kC:s("t<a3?>"),dM:s("t<C?>"),g2:s("t<b_>"),w:s("fL"),m:s("a3"),d4:s("a3()"),dY:s("cP"),dX:s("bJ<@>"),bY:s("I<bH>"),b:s("I<b1>"),l_:s("I<V<m,m>>"),O:s("I<an>"),b3:s("I<ct>"),fB:s("I<bx>"),jz:s("I<+(j,m)>"),ge:s("I<+(y,y,y,y)>"),io:s("I<cv>"),a:s("I<m>"),iD:s("I<hh>"),ee:s("I<d_>"),eU:s("I<c1>"),cu:s("I<hq>"),j:s("I<@>"),L:s("I<j>"),ia:s("I<C?>"),mK:s("fP"),q:s("W<m,m>"),d7:s("W<@,@>"),iI:s("W<j,@>"),f7:s("V<m,cN>"),iE:s("V<m,an>"),G:s("V<m,m>"),oQ:s("V<m,n>"),P:s("V<m,@>"),f:s("V<@,@>"),d8:s("V<j,eb>"),c_:s("V<j,ec>"),gz:s("V<m,I<+(y,y,y,y)>>"),kz:s("V<bO,I<c1>>"),iu:s("V<j,V<m,m>>"),mz:s("Q<D,D>"),dD:s("Q<m,m?>"),fP:s("cq"),l0:s("bt"),eb:s("eV"),mR:s("e2"),c:s("al"),K:s("C"),nL:s("bu"),A:s("an"),lf:s("cT"),e0:s("b2"),f0:s("ct"),T:s("bx"),ku:s("fX"),lZ:s("CR"),aK:s("+()"),o7:s("+(bt,c_)"),p3:s("+(bM,d1)"),aL:s("+(y,y)"),jX:s("+influence,light(y,be)"),cW:s("+(y,y,y,y)"),ks:s("a4"),mo:s("cu<cO,aU>"),kk:s("cu<cq,e1>"),ll:s("cu<bt,c_>"),ox:s("cu<bM,d1>"),n4:s("H"),p9:s("aU"),os:s("bL"),J:s("aV"),k8:s("cv"),U:s("dp<m>"),nO:s("dp<j>"),op:s("bc"),b9:s("aJ"),m9:s("bd"),gC:s("by"),ad:s("f_"),d:s("az<br>"),E:s("az<bu>"),l:s("cw"),fO:s("dq"),dB:s("aW"),N:s("m"),lu:s("bM"),aJ:s("aa"),do:s("cX"),cx:s("dr"),oP:s("ds<m,m>"),mL:s("jW"),jJ:s("jX"),fQ:s("D"),bf:s("c"),pc:s("D(D)"),gm:s("bf"),g:s("bz"),nq:s("bN"),kM:s("bO"),bR:s("eb"),ey:s("ec"),mv:s("d_"),kX:s("c1"),cq:s("bA"),bn:s("P<bs>"),ns:s("P<bX>"),hr:s("P<bd>"),am:s("P<by>"),nn:s("P<m>"),kh:s("P<bf>"),cB:s("P<bN>"),na:s("P<bO>"),nU:s("K<bc>"),pl:s("K<aJ>"),mV:s("K<bf>"),lS:s("ch<m>"),e:s("b6"),fH:s("hq"),j_:s("ap<@>"),mp:s("ht<C?,C?>"),j8:s("ku"),fg:s("dw"),at:s("dv"),ln:s("kv"),fw:s("kw"),bS:s("hA"),h6:s("kF"),hX:s("kI"),fJ:s("cC<bL>"),V:s("hP"),fL:s("hQ"),y:s("n"),al:s("n()"),hg:s("n(bs)"),gl:s("n(bX)"),iW:s("n(C)"),lt:s("n(bc)"),ib:s("n(aJ)"),aZ:s("n(bd)"),gw:s("n(by)"),dC:s("n(m)"),iV:s("n(bf)"),bQ:s("n(bN)"),nw:s("n(bO)"),i:s("y"),z:s("@"),mY:s("@()"),mq:s("@(C)"),ng:s("@(C,cw)"),S:s("j"),gK:s("bI<al>?"),mU:s("a3?"),lH:s("I<@>?"),lG:s("V<m,m>?"),X:s("C?"),x:s("m?"),ej:s("m?(m)"),nh:s("hd?"),F:s("ef<@,@>?"),nF:s("ks?"),fU:s("n?"),hK:s("n(eZ)?"),dE:s("y?"),aV:s("j?"),jh:s("b_?"),Z:s("~()?"),km:s("~(d7)?"),kn:s("~(d8)?"),dO:s("~(eI)?"),ft:s("~(df)?"),mP:s("~(bv)?"),m5:s("~(bc)?"),as:s("~(by,bd)?"),ov:s("~(m)?"),hm:s("~(m,y)?"),cz:s("~(n)?"),bZ:s("~(j)?"),o:s("b_"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f1=J.j2.prototype
B.a=J.t.prototype
B.c=J.fK.prototype
B.d=J.dX.prototype
B.b=J.dh.prototype
B.f2=J.cP.prototype
B.f3=J.fM.prototype
B.q=A.fQ.prototype
B.cd=A.fU.prototype
B.co=J.js.prototype
B.bf=J.dr.prototype
B.ac=new A.d7(null,null,null,null)
B.jU=new A.ib(0,"opaque")
B.cL=new A.ig(4,"ambience")
B.bn=new A.c9(3,"mono")
B.ay=new A.cL(0,"full")
B.bm=new A.c9(0,"auto")
B.bl=new A.cj(1,"standard")
B.bk=new A.cK(0,"defaultMix")
B.az=new A.d8(B.bm,B.bl,B.ay,B.bk)
B.a6=new A.h1(1,"next")
B.cS=new A.dH(B.a6,!1,!0,!1,null)
B.cX=new A.d9(1,"capturing")
B.cT=new A.cM(B.cX,null)
B.bq=new A.d9(3,"rejected")
B.aA=new A.cM(B.bq,null)
B.br=new A.d9(4,"applied")
B.bo=new A.cM(B.br,null)
B.bs=new A.d9(5,"cancelled")
B.cU=new A.cM(B.bs,null)
B.cV=new A.cM(B.bs,"reserved browser or pause key")
B.cW=new A.cM(B.bq,"unknown action")
B.bp=new A.d9(2,"conflict")
B.ad=new A.ii(0,"add")
B.d0=new A.dJ(0,"zero")
B.Y=new A.dJ(1,"one")
B.Z=new A.ij(0,"alpha")
B.bt=new A.fv()
B.aB=new A.lM()
B.jV=new A.lO()
B.d3=new A.ih()
B.bu=new A.lS()
B.bv=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.d9=function() {
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
B.de=function(getTagFallback) {
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
B.da=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.dd=function(hooks) {
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
B.dc=function(hooks) {
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
B.db=function(hooks) {
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
B.bw=function(hooks) { return hooks; }

B.k=new A.j9()
B.jW=new A.nz()
B.df=new A.C()
B.dg=new A.jq()
B.jX=new A.o6()
B.dh=new A.o7()
B.di=new A.cv()
B.a7=new A.c0(1,"gradeLUT")
B.dj=new A.cv()
B.dk=new A.oC()
B.dl=new A.oE()
B.f=new A.oH()
B.bx=new A.k_()
B.jh=new A.cz(0,"position")
B.jm=new A.bf(B.jh,0,3)
B.cD=new A.cz(1,"normal")
B.jn=new A.bf(B.cD,3,3)
B.ji=new A.cz(2,"color")
B.jo=new A.bf(B.ji,6,4)
B.jj=new A.cz(4,"alpha")
B.jp=new A.bf(B.jj,10,1)
B.jk=new A.cz(5,"uv0")
B.jq=new A.bf(B.jk,11,2)
B.jl=new A.cz(8,"legacyMaterialEffect")
B.jr=new A.bf(B.jl,13,1)
B.P=s([B.jm,B.jn,B.jo,B.jp,B.jq,B.jr],A.ac("t<bf>"))
B.a_=new A.pq()
B.by=new A.kp()
B.v=new A.kB()
B.ae=new A.kK()
B.a0=new A.eG(0,"colorOnly")
B.bz=new A.eG(1,"colorAndDepth")
B.aC=new A.eG(2,"depthOnly")
B.aD=new A.iq(1,"srgb")
B.af=new A.ix(1,"back")
B.ag=new A.iz(0,"less")
B.ah=new A.bs(0,"open")
B.bA=new A.bs(1,"chain")
B.bB=new A.bs(2,"throughDoor")
B.bC=new A.bs(3,"letterbox")
B.a1=new A.bs(4,"ignore")
B.M=new A.eJ(0,"opaque")
B.dm=new A.eJ(1,"masked")
B.aE=new A.eJ(2,"blended")
B.dn=new A.eK(!1,B.ag,!1,!0,B.Y,B.Y,B.ad,!1,B.af,!0,!1,!0,!0,!0,!0,!1)
B.dp=new A.eK(!0,B.ag,!1,!0,B.Y,B.Y,B.ad,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.d1=new A.dJ(2,"srcAlpha")
B.d2=new A.dJ(3,"oneMinusSrcAlpha")
B.dq=new A.eK(!0,B.ag,!1,!0,B.d1,B.d2,B.ad,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.dr=new A.dc(0)
B.ds=new A.dc(24e5)
B.bD=new A.bX(0,"compliance")
B.dt=new A.eL(B.bD)
B.bE=new A.bX(1,"rupture")
B.du=new A.eL(B.bE)
B.bF=new A.bX(2,"synchronisation")
B.dv=new A.eL(B.bF)
B.bG=new A.dP(0,"front")
B.dw=new A.dP(1,"rearService")
B.dx=new A.dP(2,"sideBoundary")
B.dy=new A.dP(3,"roofline")
B.l=new A.dd(0,"north")
B.B=new A.dd(1,"east")
B.m=new A.dd(2,"south")
B.N=new A.dd(3,"west")
B.ai=new A.fE(0,"ground")
B.aj=new A.fE(1,"first")
B.dz=new A.de(0,"mantle")
B.dA=new A.de(1,"portal")
B.dC=new A.de(3,"inventory")
B.dD=new A.de(4,"none")
B.dE=new A.dQ(B.dD,null)
B.dB=new A.de(2,"window")
B.dF=new A.dQ(B.dB,"the shutter")
B.dG=new A.G("saved mantle history is malformed",null,null)
B.dH=new A.G("rupture elapsed time is malformed",null,null)
B.dI=new A.G("presentation keys must be strings",null,null)
B.dJ=new A.G("unsupported accessibility profile",null,null)
B.dK=new A.G("inventory inspections must be an object",null,null)
B.bH=new A.G("saved mantle state is malformed",null,null)
B.dL=new A.G("inactive rupture has elapsed time",null,null)
B.dM=new A.G("control sensitivity is outside 0.1\u20133.0",null,null)
B.dN=new A.G("listener room is empty",null,null)
B.dO=new A.G("control bindings conflict",null,null)
B.dP=new A.G("saved difficulty state is malformed",null,null)
B.dQ=new A.G("saved house drift state is malformed",null,null)
B.dR=new A.G("saved sleep record is malformed",null,null)
B.dS=new A.G("UI scale must be between 0.8 and 2.0",null,null)
B.dT=new A.G("unsupported settings store",null,null)
B.dU=new A.G("settings values must be an object",null,null)
B.dV=new A.G("saved day-loop sleepHistory must be a list",null,null)
B.dW=new A.G("audio event position is not finite",null,null)
B.dX=new A.G("event sequence must be non-negative",null,null)
B.dY=new A.G("inventory inspection counts are invalid",null,null)
B.dZ=new A.G("modelScale must be positive and finite",null,null)
B.e_=new A.G("listener position is not finite",null,null)
B.e0=new A.G("saved window state is malformed",null,null)
B.e1=new A.G("unsupported graphics preset",null,null)
B.e2=new A.G("save run and meta must be objects",null,null)
B.e3=new A.G("saved house state is malformed",null,null)
B.e4=new A.G("saved sleep record must be an object",null,null)
B.e5=new A.G("sound cue must be a non-empty string",null,null)
B.e6=new A.G("saved session run is malformed",null,null)
B.e7=new A.G("save map keys must be strings",null,null)
B.e8=new A.G("unsupported graphics profile",null,null)
B.e9=new A.G("unsupported audio options",null,null)
B.ea=new A.G("transform.scale must be positive",null,null)
B.eb=new A.G("Escape is reserved for pause navigation",null,null)
B.ec=new A.G("saved day-loop state is malformed",null,null)
B.ed=new A.G("rupture extinguished mantle is unknown",null,null)
B.ee=new A.G("unsupported controls profile",null,null)
B.bI=new A.G("saved portal state is malformed",null,null)
B.ef=new A.G("acoustic portal profile is not finite",null,null)
B.eg=new A.G("saved house state does not match this house",null,null)
B.eh=new A.G("presentation snapshot contains a non-finite number",null,null)
B.ei=new A.G("save contains a non-finite number",null,null)
B.ej=new A.G("unsupported graphics store",null,null)
B.ek=new A.G("text.json root must be an object",null,null)
B.el=new A.G("event kind is empty",null,null)
B.em=new A.G("unsupported settings profile",null,null)
B.en=new A.G("saved session clock is malformed",null,null)
B.eo=new A.G("rupture mantle IDs are malformed",null,null)
B.ep=new A.G("saved sleep record has an unknown enum",null,null)
B.eq=new A.G("audio cue variants are empty",null,null)
B.er=new A.G("save root must be an object",null,null)
B.es=new A.G("audio event identity is empty",null,null)
B.et=new A.G("render capabilities contain invalid limits",null,null)
B.eu=new A.G("saved house overrides are malformed",null,null)
B.O=new A.cQ(0,0,0)
B.bV=new A.cQ(1,1,1)
B.fA=s([],t.dQ)
B.aP=s([],t.D)
B.ev=new A.iM(B.O,B.O,0,1,B.bV,0,null,B.fA,B.aP)
B.ew=new A.eN(0,"idle")
B.aF=new A.eN(1,"active")
B.ex=new A.eN(2,"ended")
B.bJ=new A.eO(0,"outside")
B.ey=new A.eO(1,"intersects")
B.ez=new A.eO(2,"inside")
B.eA=new A.dS(0,"timeAdvanced")
B.eB=new A.dS(1,"dayEndReached")
B.eC=new A.dS(4,"slept")
B.eD=new A.dS(5,"complianceFloorTripped")
B.eE=new A.fF(0,"vertex")
B.bK=new A.fF(1,"indices")
B.bL=new A.iQ(0,"staticDraw")
B.h=new A.fG(0,"ready")
B.a2=new A.fG(1,"lost")
B.eF=new A.dT(0,"color")
B.bM=new A.dT(1,"colorAndGlow")
B.eG=new A.dT(2,"colorDepthGlow")
B.aG=new A.dT(3,"depthOnly")
B.ak=new A.iS(1,"linear")
B.bN=new A.iT(0,"clampToEdge")
B.eH=new A.iR(1,1,1,!1,B.ak,B.ak,B.bN)
B.eI=new A.cl(0,"beforeShadow")
B.eJ=new A.cl(2,"beforeDepth")
B.bO=new A.cl(3,"afterDepth")
B.bP=new A.cl(4,"beforeWorld")
B.eK=new A.cl(5,"afterWorld")
B.H=new A.cl(6,"afterResolve")
B.eL=new A.cl(9,"beforePresent")
B.bQ=new A.bY(0,"readBeforeWrite")
B.eM=new A.bY(1,"duplicateWriter")
B.eN=new A.bY(2,"sampledMultisampledAttachment")
B.aH=new A.bY(3,"invalidResolve")
B.eO=new A.bY(4,"formatOrSizeMismatch")
B.eP=new A.bY(5,"unversionedReadWrite")
B.eQ=new A.bY(6,"invalidHistoryRead")
B.eR=new A.bY(7,"dependencyCycle")
B.eS=new A.bY(8,"missingCapability")
B.bR=new A.cc(0,"high")
B.aI=new A.cc(1,"standard")
B.aJ=new A.df(1,B.aI,"auto",!1,"display","off","high")
B.al=new A.dg(0,"player")
B.aK=new A.dg(1,"inserted")
B.bS=new A.dg(2,"warden")
B.bT=new A.dV(0,"wrongKind")
B.bU=new A.dV(1,"staleGeneration")
B.eV=new A.dV(2,"doubleRelease")
B.aL=new A.dV(3,"releasedResource")
B.eY=new A.eP("kitchen-range","settle")
B.eZ=new A.eP("cellar-drain","drip")
B.f_=new A.eP("bathroom-cistern","settle")
B.f0=new A.j1(1,"visitor")
B.f4=new A.nw(null)
B.f5=new A.nx(null)
B.f6=new A.cQ(0.34,0.39,0.5)
B.f7=new A.cQ(0.012,0.016,0.028)
B.f8=new A.cQ(0.008,0.012,0.024)
B.bW=s([0,2,2,3],t.t)
B.f9=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.d4=new A.db()
B.d5=new A.db()
B.d6=new A.db()
B.d7=new A.db()
B.d8=new A.db()
B.fa=s([B.d4,B.d5,B.d6,B.d7,B.d8],t.hS)
B.fb=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.E=new A.bc(0,"audio")
B.L=new A.h6(0,"level")
B.iI=new A.aJ("master","Master",B.E,B.L,1,0,1,"audio")
B.iN=new A.aJ("voice","Visitor voice",B.E,B.L,1,0,1,"audio")
B.iE=new A.aJ("effects","Effects",B.E,B.L,1,0,1,"audio")
B.iF=new A.aJ("ambience","House ambience",B.E,B.L,1,0,1,"audio")
B.iJ=new A.aJ("music","Music",B.E,B.L,1,0,1,"audio")
B.ap=new A.bc(1,"display")
B.iM=new A.aJ("brightness","Display brightness",B.ap,B.L,1,0.6,1.4,"display")
B.a8=new A.h6(1,"toggle")
B.iH=new A.aJ("muted","Mute house audio",B.E,B.a8,!1,null,null,"audio")
B.U=new A.bc(2,"accessibility")
B.iK=new A.aJ("mono","Mono-compatible mix",B.U,B.a8,!1,null,null,"audio")
B.iG=new A.aJ("high-contrast","High-contrast interface",B.U,B.a8,!1,null,null,"display")
B.iL=new A.aJ("strong-highlights","Strong focus highlights",B.U,B.a8,!1,null,null,"display")
B.C=s([B.iI,B.iN,B.iE,B.iF,B.iJ,B.iM,B.iH,B.iK,B.iG,B.iL],A.ac("t<aJ>"))
B.w=s(["who","verb","object","place","time"],t.s)
B.cM=new A.cK(1,"strong")
B.aM=s([B.bk,B.cM],A.ac("t<cK>"))
B.cY=new A.dI(0,"swap")
B.cZ=new A.dI(1,"replace")
B.d_=new A.dI(2,"cancel")
B.fc=s([B.cY,B.cZ,B.d_],A.ac("t<dI>"))
B.fd=s([2,5,9,12,16,19],t.t)
B.fe=s(["uQuantizationBits","uDitherStrength"],t.s)
B.ff=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.fg=s([B.ah,B.bA,B.bB,B.bC,B.a1],A.ac("t<bs>"))
B.fh=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.fi=s(["30","60","display"],t.s)
B.fj=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap"],t.s)
B.ab=new A.bO(0,"full")
B.bg=new A.bO(1,"compressed")
B.bh=new A.bO(2,"off")
B.bX=s([B.ab,B.bg,B.bh],A.ac("t<bO>"))
B.fk=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.cR=new A.cL(1,"reduced")
B.aN=s([B.ay,B.cR],A.ac("t<cL>"))
B.cN=new A.cj(0,"wide")
B.cO=new A.cj(2,"night")
B.aO=s([B.cN,B.bl,B.cO],A.ac("t<cj>"))
B.fl=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.fm=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.fn=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.iS=new A.by(0,"long")
B.cy=new A.by(1,"short")
B.bY=s([B.iS,B.cy],A.ac("t<by>"))
B.F=new A.bv(0,"visual")
B.a4=new A.bv(1,"graphics")
B.aX=new A.bv(2,"gameplay")
B.a5=new A.bv(3,"controls")
B.x=new A.bv(4,"audio")
B.y=new A.bv(5,"accessibility")
B.fo=s([B.F,B.a4,B.aX,B.a5,B.x,B.y],A.ac("t<bv>"))
B.fp=s([2.1,4.2,6.3],t.n)
B.fq=s(["master","voice","effects","ambience","music"],t.s)
B.fr=s(["res/house/house.json","assets/house/house.json"],t.s)
B.fs=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow"],t.s)
B.eT=new A.cc(2,"safe")
B.eU=new A.cc(3,"custom")
B.bZ=s([B.bR,B.aI,B.eT,B.eU],A.ac("t<cc>"))
B.D=new A.c0(0,"inactive")
B.b3=new A.c0(2,"affineWarp")
B.b4=new A.c0(3,"vertexSnap")
B.b5=new A.c0(4,"tapeGiveup")
B.b6=new A.c0(5,"portalFail")
B.T=new A.c0(6,"lightsOut")
B.c_=s([B.D,B.a7,B.b3,B.b4,B.b5,B.b6,B.T],A.ac("t<c0>"))
B.ft=s([B.al,B.aK,B.bS],A.ac("t<dg>"))
B.fu=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.I=s([],t.hS)
B.fE=s([],t.iG)
B.fD=s([],t.dL)
B.fv=s([],A.ac("t<cd>"))
B.fx=s([],t.cs)
B.aQ=s([],t.jc)
B.fz=s([],t.bz)
B.Q=s([],t.aN)
B.fy=s([],t.u)
B.c1=s([],t.e_)
B.fw=s([],t.b2)
B.o=s([],t.s)
B.c2=s([],t.cF)
B.c0=s([],t.cJ)
B.fF=s([],t.t)
B.fG=s([],t.dG)
B.eX=new A.fJ(15,"kitchen",-0.3,0)
B.eW=new A.fJ(19,"spare-room",0,0.3)
B.J=s([B.eX,B.eW],A.ac("t<fJ>"))
B.fH=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.iP=new A.bd(0,"bed")
B.iQ=new A.bd(1,"chair")
B.iR=new A.bd(2,"floor")
B.c3=s([B.iP,B.iQ,B.iR],A.ac("t<bd>"))
B.fI=s(["high","medium","low"],t.s)
B.cP=new A.c9(1,"headphones")
B.cQ=new A.c9(2,"speakers")
B.aR=s([B.bm,B.cP,B.cQ,B.bn],A.ac("t<c9>"))
B.aV=new A.cr(0,"root")
B.ce=new A.b2(0,"pauseMenu")
B.hz=new A.cT(B.aV,B.ce,null)
B.fJ=s([B.hz],t.eY)
B.fK=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.fL=s([B.E,B.ap,B.U],A.ac("t<bc>"))
B.c4=s([B.l,B.B,B.m,B.N],A.ac("t<dd>"))
B.b7=new A.aW(0,"depthTest")
B.b8=new A.aW(1,"depthFunc")
B.b9=new A.aW(2,"depthWrite")
B.ba=new A.aW(3,"blendEnable")
B.bb=new A.aW(4,"blendFunc")
B.bc=new A.aW(5,"blendEquation")
B.bd=new A.aW(6,"cullEnable")
B.be=new A.aW(7,"cullFace")
B.cB=new A.aW(8,"frontFace")
B.iU=new A.aW(9,"stencilEnable")
B.cz=new A.aW(10,"colorMask")
B.cA=new A.aW(11,"scissorEnable")
B.fM=s([B.b7,B.b8,B.b9,B.ba,B.bb,B.bc,B.bd,B.be,B.cB,B.iU,B.cz,B.cA],A.ac("t<aW>"))
B.fN=s(["off","fxaa","msaa2","msaa4"],t.s)
B.fO=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.fP=s(["uBloomStrength"],t.s)
B.fQ=s(["uLutSize","uStrength"],t.s)
B.fR=s([B.bD,B.bE,B.bF],A.ac("t<bX>"))
B.fS=s(["wall-plaster","grime"],t.s)
B.fT=s(["uTexelSize","uNear","uFar"],t.s)
B.c5=s(["uTexelStep"],t.s)
B.fU=s(["uninitialized"],t.s)
B.X=new A.bN(0,"waiting")
B.as=new A.bN(1,"atDoor")
B.at=new A.bN(2,"consulting")
B.au=new A.bN(3,"resolved")
B.fV=s([B.X,B.as,B.at,B.au],A.ac("t<bN>"))
B.hq={uAlbedo:0}
B.c6=new A.a7(B.hq,[0],t.I)
B.he={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.c7=new A.a7(B.he,[2,3,4,5,6],t.I)
B.hx={uSsaoRaw:0,uSceneDepth:1}
B.fW=new A.a7(B.hx,[0,1],t.I)
B.hu={uScene:0,uHistory:1}
B.fX=new A.a7(B.hu,[0,1],t.I)
B.hb={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.fY=new A.a7(B.hb,["24c15a2a97a2d54bd90b9638069c84a22646ccf5","cf4ea370b9eea4e2d278a70f56df5b768663684c","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.hm={aPosition:0,aUvMat:1}
B.c8=new A.a7(B.hm,[0,4],t.I)
B.hv={uScene:0,uLut:1}
B.fZ=new A.a7(B.hv,[0,1],t.I)
B.hw={uSource:0}
B.c9=new A.a7(B.hw,[0],t.I)
B.hg={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"range-settle":16,"cellar-drip":17,"cistern-settle":18,"step-above-0":19,"step-above-1":20,"step-above-2":21,"step-above-3":22}
B.h_=new A.a7(B.hg,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.ca=new A.ck([B.F,"settings.visual",B.a4,"settings.graphics",B.aX,"settings.gameplay",B.a5,"settings.controls",B.x,"settings.audio",B.y,"settings.accessibility"],t.iP)
B.aS=new A.ck([B.F,"visual",B.a4,"graphics",B.aX,"gameplay",B.a5,"controls",B.x,"audio",B.y,"accessibility"],t.iP)
B.hl={uSharp:0,uBlurred:1,uSceneDepth:2}
B.h0=new A.a7(B.hl,[0,1,2],t.I)
B.hr={uBloom:0}
B.h1=new A.a7(B.hr,[0],t.I)
B.hs={uSceneDepth:0}
B.h2=new A.a7(B.hs,[0],t.I)
B.ht={uScene:0}
B.h3=new A.a7(B.ht,[0],t.I)
B.R={}
B.cc=new A.a7(B.R,[],A.ac("a7<m,fv>"))
B.cb=new A.a7(B.R,[],t.p)
B.t=new A.a7(B.R,[],t.I)
B.jZ=new A.a7(B.R,[],A.ac("a7<m,m?>"))
B.h4=new A.a7(B.R,[],A.ac("a7<@,@>"))
B.hf={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.h5=new A.a7(B.hf,[0,1,2,3,4,5,6],t.I)
B.cf=new A.cs(0,"resume")
B.cg=new A.cs(1,"settings")
B.ch=new A.cs(2,"controls")
B.ci=new A.cs(3,"save")
B.cj=new A.cs(4,"help")
B.ck=new A.cs(5,"back")
B.h6=new A.ck([B.cf,"pause.resume",B.cg,"pause.settings",B.ch,"pause.controls",B.ci,"pause.save",B.cj,"pause.help",B.ck,"pause.back"],A.ac("ck<cs,m>"))
B.hn={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5}
B.h7=new A.a7(B.hn,[0,1,2,3,4,5],t.I)
B.hd={Move:0,Interact:1,Journal:2,Rest:3,Pause:4}
B.h8=new A.a7(B.hd,["W A S D","E","J","L","Escape"],t.p)
B.ho={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.h9=new A.a7(B.ho,[0,1,2,3],t.I)
B.hy={uTex:0}
B.ha=new A.a7(B.hy,[0],t.I)
B.aT=new A.ck([B.a7,1,B.b3,1.5,B.b4,1.5,B.b5,2,B.b6,2,B.T,4],A.ac("ck<c0,y>"))
B.fB=s([],t.eY)
B.fC=s([],A.ac("t<b2>"))
B.aU=new A.dl(B.fB,B.fC,null)
B.aW=new A.cr(1,"settings")
B.hA=new A.cr(2,"visual")
B.hB=new A.cr(3,"graphics")
B.hC=new A.cr(5,"controls")
B.hD=new A.cr(6,"audio")
B.hE=new A.cr(7,"accessibility")
B.a3=new A.b2(1,"settings")
B.hF=new A.b2(2,"journal")
B.hG=new A.b2(3,"sleep")
B.hH=new A.b2(4,"help")
B.hI=new A.b2(5,"visitor")
B.hJ=new A.b2(6,"ending")
B.cl=new A.dm(0,"opened")
B.cm=new A.dm(2,"backed")
B.cn=new A.dm(3,"resumed")
B.hK=new A.dm(4,"dismissed")
B.S=new A.dm(5,"unchanged")
B.hL=new A.jr(0,1,null)
B.hM=new A.jv(1,0,0,0,0,0,0,0,8,0,0,0,0,0,0,!1)
B.aY=new A.e5(0,"safe")
B.aZ=new A.e5(1,"standard")
B.b_=new A.e5(2,"high")
B.K=new A.cb(B.R,0,t.Q)
B.am=new A.e4(B.aY,B.K)
B.hp={shadows:0}
B.iD=new A.cb(B.hp,1,t.Q)
B.hO=new A.e4(B.aZ,B.iD)
B.hj={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.iz=new A.cb(B.hj,5,t.Q)
B.hP=new A.e4(B.b_,B.iz)
B.hN=new A.e5(4,"shipping")
B.hk={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.iA=new A.cb(B.hk,7,t.Q)
B.k_=new A.e4(B.hN,B.iA)
B.hR=new A.at(0,1)
B.hS=new A.ad(0.46,0.44,0.48)
B.hT=new A.ad(0.46,0.25,0.2)
B.hU=new A.ad(0.48,0.4,0.34)
B.hV=new A.ad(0.31,0.25,0.23)
B.hW=new A.ad(0.42,0.44,0.43)
B.hX=new A.ad(0.43,0.38,0.43)
B.hY=new A.ad(0.37,0.33,0.31)
B.hZ=new A.ad(0.34,0.32,0.29)
B.cp=new A.ad(0.38,0.25,0.19)
B.i_=new A.ad(0.31,0.28,0.24)
B.i0=new A.ad(0.58,0.56,0.5)
B.i1=new A.ad(0.36,0.39,0.46)
B.i2=new A.ad(0.44,0.37,0.28)
B.i3=new A.ad(0.52,0.5,0.44)
B.i4=new A.ad(0.24,0.25,0.27)
B.i5=new A.ad(0.28,0.27,0.25)
B.i6=new A.ad(0.31,0.34,0.4)
B.i7=new A.ad(0.34,0.3,0.36)
B.i8=new A.ad(0.42,0.4,0.38)
B.i9=new A.ad(0.18,0.2,0.21)
B.ia=new A.ad(0.2,0.12,0.1)
B.ib=new A.ad(0.45,0.42,0.35)
B.ic=new A.ad(0.12,0.15,0.2)
B.id=new A.ad(0.34,0.36,0.45)
B.an=new A.h1(0,"legacy")
B.cq=new A.e6(0,"constructed")
B.z=new A.e6(1,"ready")
B.ao=new A.e6(2,"lost")
B.cr=new A.e6(3,"disposed")
B.jY=new A.iC(1,"errorsOnly")
B.ie=new A.jD(B.am,384,216,0)
B.b0=new A.e7(0,"constructed")
B.ig=new A.e7(1,"initializing")
B.b1=new A.e7(2,"ready")
B.cs=new A.e7(3,"contextLost")
B.i=new A.eY(0,"read")
B.j=new A.eY(1,"write")
B.G=new A.eY(2,"historyRead")
B.p=new A.h3(0,"rgba8")
B.ih=new A.ay("dofBlurH",B.p,192,108,1,0)
B.ii=new A.ay("dofBlurV",B.p,192,108,1,0)
B.ij=new A.ay("dofOutput",B.p,384,216,1,0)
B.ct=new A.h3(2,"depth24")
B.ik=new A.ay("shadowMap",B.ct,512,512,1,0)
B.il=new A.ay("ssaoRaw",B.p,192,108,1,0)
B.im=new A.ay("ssaoBlurred",B.p,192,108,1,0)
B.io=new A.ay("gradeOutput",B.p,384,216,1,0)
B.ip=new A.ay("vhsOutput",B.p,384,216,1,0)
B.iq=new A.ay("sceneDepth",B.ct,384,216,1,0)
B.ir=new A.ay("bloomBlurH",B.p,192,108,1,0)
B.is=new A.ay("bloomBlurV",B.p,192,108,1,0)
B.it=new A.ay("present",B.p,384,216,1,0)
B.b2=new A.ay("sceneColor",B.p,384,216,1,0)
B.iu=new A.ay("ps1Output",B.p,384,216,1,0)
B.iv=new A.e8(null,"save storage unavailable")
B.iw=new A.e8(null,"save could not be recovered")
B.ix=new A.e8(null,null)
B.hi={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.iy=new A.cb(B.hi,4,t.Q)
B.hh={Escape:0}
B.iB=new A.cb(B.hh,1,t.Q)
B.hc={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.iC=new A.cb(B.hc,9,t.Q)
B.cw=new A.e9(2,"link")
B.iO=new A.h8(B.cw,"gl.createProgram() returned null")
B.cu=new A.e9(0,"vertex")
B.cv=new A.e9(1,"fragment")
B.cx=new A.e9(3,"validation")
B.W=new A.D(0,1,0)
B.ar=new A.D(0,-1,0)
B.iT=new A.be(-1,B.W,B.ar,B.bV,1,1,0.3,0.5)
B.aa=new A.D(0,0,0)
B.hQ=new A.jB(0,0,0,1)
B.A=new A.jT(B.aa,B.hQ)
B.iV=A.c6("CH")
B.iW=A.c6("CI")
B.iX=A.c6("mp")
B.iY=A.c6("yh")
B.iZ=A.c6("yr")
B.j_=A.c6("ys")
B.j0=A.c6("yt")
B.j1=A.c6("a3")
B.j2=A.c6("C")
B.j3=A.c6("tx")
B.j4=A.c6("zf")
B.j5=A.c6("zg")
B.j6=A.c6("hd")
B.e=new A.cZ(0,"float1")
B.aq=new A.cZ(1,"float2")
B.n=new A.cZ(2,"float3")
B.j7=new A.cZ(3,"float4")
B.r=new A.cZ(4,"mat4")
B.j8=new A.x(B.e,1)
B.V=new A.cZ(5,"sampler")
B.u=new A.x(B.V,0)
B.a9=new A.x(B.V,1)
B.cC=new A.x(B.V,2)
B.j9=new A.x(B.V,3)
B.ja=new A.x(B.V,4)
B.jb=new A.x(B.V,5)
B.jc=new A.pp(!1)
B.jd=new A.D(0,0,1)
B.je=new A.D(1,0,0)
B.jf=new A.D(1/0,1/0,1/0)
B.jg=new A.D(-1/0,-1/0,-1/0)
B.cE=new A.cz(6,"tangent4")
B.js=new A.dt(0,"visitorAnswered")
B.cF=new A.dt(1,"visitorIgnored")
B.jt=new A.dt(2,"entryVerified")
B.ju=new A.dt(3,"entryContradicted")
B.jv=new A.dt(4,"exposureAccepted")
B.jx=new A.cA(1,"malformedDay")
B.jy=new A.cA(2,"malformedTier")
B.cG=new A.cA(3,"missingTierLines")
B.bi=new A.cA(6,"invalidPhase")
B.jE=new A.bP(B.bi,"The active visit cannot be chosen.")
B.jH=new A.bA(B.jE)
B.jB=new A.bP(B.bi,"The active visit has no line to advance.")
B.jI=new A.bA(B.jB)
B.jA=new A.cA(5,"noActiveVisit")
B.jC=new A.bP(B.jA,"There is no active visit.")
B.cH=new A.bA(B.jC)
B.jD=new A.bP(B.bi,"A visit is already active.")
B.jJ=new A.bA(B.jD)
B.jz=new A.cA(4,"noArrival")
B.jG=new A.bP(B.jz,"The authored arrival is missing.")
B.jK=new A.bA(B.jG)
B.jw=new A.cA(0,"missingCorpus")
B.jF=new A.bP(B.jw,"The authored visitor corpus is empty.")
B.jL=new A.bA(B.jF)
B.cI=new A.ee(1,"exact")
B.bj=new A.ee(2,"partial")
B.av=new A.ee(3,"contradiction")
B.jM=new A.ee(0,"skipped")
B.jN=new A.ed(B.jM,B.K)
B.jO=new A.ed(B.bj,B.K)
B.jP=new A.hj(B.Q,!1)
B.jQ=new A.hj(B.Q,!0)
B.cJ=new A.hm(0,"horizontal")
B.jR=new A.hm(1,"vertical")
B.cK=new A.ho(0,"horizontal")
B.jS=new A.ho(1,"vertical")
B.aw=new A.f7(0,"empty")
B.jT=new A.f7(1,"cpuReady")
B.ax=new A.f7(4,"released")})();(function staticFields(){$.pY=null
$.bV=A.f([],A.ac("t<C>"))
$.v1=null
$.ob=0
$.oc=A.B8()
$.uA=null
$.uz=null
$.wP=null
$.wJ=null
$.wW=null
$.rw=null
$.rD=null
$.uj=null
$.q6=A.f([],A.ac("t<I<C>?>"))
$.fk=null
$.i1=null
$.i2=null
$.tZ=!1
$.aj=B.v
$.vi=""
$.vj=null
$.ve=null
$.nW=null
$.bC=A.a5()
$.cE=A.a5()
$.bn=null
$.kU=null
$.J=A.a5()
$.bD=A.a5()
$.aX=A.a5()
$.vQ=A.a5()
$.fl=null
$.a_=A.a5()
$.fh=null
$.ep=A.a5()
$.Z=A.a5()
$.tM=A.a5()
$.tV=null
$.bl=null
$.tP=!1
$.l_=!1
$.i_=B.az
$.eq=B.ac
$.rk=!1
$.ud=!1
$.wc=null
$.kT=null
$.qn=null
$.w0=0
$.u0=!1
$.wb=!1
$.u_=0
$.wi=0
$.dA=0
$.wH=!1
$.w1="booting"
$.c5=0
$.es=0
$.aM="hall"
$.hX=A.a5()
$.fc=A.a5()
$.bE=A.a5()
$.wh=null
$.u4=0
$.bh=null
$.i5=!1
$.cD=A.a5()
$.hY=A.a5()
$.hW=A.a5()
$.kQ=A.a5()
$.vR=A.a5()
$.vP=A.a5()
$.aL=A.a5()
$.qh=A.a5()
$.hV=A.a5()
$.fe=A.a5()
$.hZ=A.a5()
$.eo=A.a5()
$.fd=A.a5()
$.fb=A.a5()
$.hT=A.a5()
$.hU=A.a5()
$.aY=A.a5()
$.kP=A.a5()
$.bB=A.a5()
$.rn=A.ab(t.S)
$.cF=A.f([],t.s)
$.tU=null
$.wB=!1
$.vU=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"CK","x6",()=>A.wO("_$dart_dartClosure"))
s($,"CJ","cI",()=>A.wO("_$dart_dartClosure_dartJSInterop"))
s($,"Dg","xq",()=>A.f([new J.j3()],A.ac("t<h5>")))
s($,"CU","x7",()=>A.cY(A.pl({
toString:function(){return"$receiver$"}})))
s($,"CV","x8",()=>A.cY(A.pl({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"CW","x9",()=>A.cY(A.pl(null)))
s($,"CX","xa",()=>A.cY(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"D_","xd",()=>A.cY(A.pl(void 0)))
s($,"D0","xe",()=>A.cY(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"CZ","xc",()=>A.cY(A.vf(null)))
s($,"CY","xb",()=>A.cY(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"D2","xg",()=>A.cY(A.vf(void 0)))
s($,"D1","xf",()=>A.cY(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"D3","us",()=>A.zz())
s($,"D7","xk",()=>A.yJ(4096))
s($,"D5","xi",()=>new A.qf().$0())
s($,"D6","xj",()=>new A.qe().$0())
s($,"D4","xh",()=>A.yI(A.Y(A.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Da","fs",()=>A.l5(B.j2))
s($,"CS","ur",()=>{A.yW()
return $.ob})
s($,"CG","x5",()=>B.b2.ij())
s($,"CO","uq",()=>A.nQ(A.f([255,255,255,255],t.t)))
s($,"CM","uo",()=>A.nQ(A.f([128,128,255,255],t.t)))
s($,"CL","un",()=>A.nQ(A.f([0,0,0,255],t.t)))
s($,"CN","up",()=>A.nQ(A.f([255,255,0,255],t.t)))
s($,"Di","xs",()=>A.k0(0,1,0))
s($,"Dh","xr",()=>A.yY("^[a-z0-9][a-z0-9._-]*$"))
s($,"Dl","l7",()=>{var q=$.ve
if(q==null){A.l2()
A.l2()
A.l2()
A.l2()
A.l2()
q=$.ve=new A.pe()}return q})
s($,"D8","xl",()=>new A.lN())
r($,"wF","cJ",()=>A.tv(null,null))
r($,"r5","ut",()=>A.iW(null,null))
r($,"tT","ta",()=>A.iv(null,!1,1,!1,!1,1,1))
s($,"Db","xn",()=>new A.mW())
s($,"Dc","xo",()=>new A.n4())
s($,"Dd","tb",()=>new A.nk(A.v(t.N,t.S)))
s($,"D9","xm",()=>A.jZ().gbu().h(0,"debugPause")==="1")
r($,"u8","fu",()=>A.k0(0,0,0))
r($,"u3","xp",()=>A.k0(0,0,0))
r($,"ue","i7",()=>A.k0(0,0,0))
s($,"De","l6",()=>new A.mq(A.k0(0,0,0)))
s($,"Df","ft",()=>new A.o_(B.aU))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.dk,ArrayBuffer:A.eV,ArrayBufferView:A.fT,DataView:A.jj,Float32Array:A.fQ,Float64Array:A.jk,Int16Array:A.jl,Int32Array:A.jm,Int8Array:A.jn,Uint16Array:A.jo,Uint32Array:A.jp,Uint8ClampedArray:A.e2,CanvasPixelArray:A.e2,Uint8Array:A.fU})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.hw.$nativeSuperclassTag="ArrayBufferView"
A.hx.$nativeSuperclassTag="ArrayBufferView"
A.fR.$nativeSuperclassTag="ArrayBufferView"
A.hy.$nativeSuperclassTag="ArrayBufferView"
A.hz.$nativeSuperclassTag="ArrayBufferView"
A.fS.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.rE
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
