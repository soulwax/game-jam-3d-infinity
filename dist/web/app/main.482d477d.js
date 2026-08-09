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
if(a[b]!==s){A.zO(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.r2(b)
return new s(c,this)}:function(){if(s===null)s=A.r2(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.r2(a).prototype
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
r7(a,b,c,d){return{i:a,p:b,e:c,x:d}},
po(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.r5==null){A.zq()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.rW("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.oj
if(o==null)o=$.oj=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.zy(a)
if(p!=null)return p
if(typeof a=="function")return B.eb
s=Object.getPrototypeOf(a)
if(s==null)return B.bE
if(s===Object.prototype)return B.bE
if(typeof q=="function"){o=$.oj
if(o==null)o=$.oj=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aQ,enumerable:false,writable:true,configurable:true})
return B.aQ}return B.aQ},
ru(a,b){if(a<0||a>4294967295)throw A.c(A.aX(a,0,4294967295,"length",null))
return J.vW(new Array(a),b)},
rv(a,b){if(a<0)throw A.c(A.z("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("u<0>"))},
ie(a,b){if(a<0)throw A.c(A.z("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("u<0>"))},
vW(a,b){var s=A.f(a,b.i("u<0>"))
s.$flags=1
return s},
vX(a,b){var s=t.bP
return J.rc(s.a(a),s.a(b))},
ry(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
vY(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ry(r))break;++b}return b},
vZ(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ry(q))break}return b},
dY(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.f8.prototype
return J.ih.prototype}if(typeof a=="string")return J.du.prototype
if(a==null)return J.f9.prototype
if(typeof a=="boolean")return J.ig.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
if(typeof a=="symbol")return J.ej.prototype
if(typeof a=="bigint")return J.ei.prototype
return a}if(a instanceof A.E)return a
return J.po(a)},
ax(a){if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
if(typeof a=="symbol")return J.ej.prototype
if(typeof a=="bigint")return J.ei.prototype
return a}if(a instanceof A.E)return a
return J.po(a)},
c4(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
if(typeof a=="symbol")return J.ej.prototype
if(typeof a=="bigint")return J.ei.prototype
return a}if(a instanceof A.E)return a
return J.po(a)},
zm(a){if(typeof a=="number")return J.dt.prototype
if(a==null)return a
if(!(a instanceof A.E))return J.dH.prototype
return a},
uh(a){if(typeof a=="number")return J.dt.prototype
if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(!(a instanceof A.E))return J.dH.prototype
return a},
zn(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
if(typeof a=="symbol")return J.ej.prototype
if(typeof a=="bigint")return J.ei.prototype
return a}if(a instanceof A.E)return a
return J.po(a)},
rb(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.uh(a).U(a,b)},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dY(a).V(a,b)},
b1(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.zw(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).h(a,b)},
bK(a,b,c){return J.c4(a).k(a,b,c)},
hn(a,b){return J.c4(a).l(a,b)},
uW(a,b){return J.c4(a).J(a,b)},
uX(a,b){return J.c4(a).R(a,b)},
uY(a,b,c){return J.zn(a).fe(a,b,c)},
uZ(a,b){return J.c4(a).c4(a,b)},
rc(a,b){return J.uh(a).G(a,b)},
kg(a,b){return J.c4(a).T(a,b)},
bt(a){return J.dY(a).gH(a)},
rd(a){return J.ax(a).gI(a)},
v_(a){return J.ax(a).gM(a)},
O(a){return J.c4(a).gt(a)},
b2(a){return J.ax(a).gq(a)},
e_(a){return J.dY(a).gP(a)},
e0(a,b,c){return J.c4(a).bK(a,b,c)},
v0(a,b){return J.ax(a).sq(a,b)},
v1(a,b){return J.c4(a).Z(a,b)},
pZ(a,b){return J.zm(a).lZ(a,b)},
e1(a){return J.dY(a).n(a)},
v2(a,b){return J.c4(a).e3(a,b)},
ib:function ib(){},
ig:function ig(){},
f9:function f9(){},
fa:function fa(){},
cT:function cT(){},
iB:function iB(){},
dH:function dH(){},
cs:function cs(){},
ei:function ei(){},
ej:function ej(){},
u:function u(a){this.$ti=a},
id:function id(){},
m7:function m7(a){this.$ti=a},
dc:function dc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dt:function dt(){},
f8:function f8(){},
ih:function ih(){},
du:function du(){}},A={q2:function q2(){},
k9(){return $},
vc(a,b,c){if(t.gt.b(a))return new A.fN(a,b.i("@<0>").E(c).i("fN<1,2>"))
return new A.df(a,b.i("@<0>").E(c).i("df<1,2>"))},
rB(a){return new A.dv("Field '"+a+"' has been assigned during initialization.")},
a0(a){return new A.dv("Field '"+a+"' has not been initialized.")},
w1(a){return new A.dv("Field '"+a+"' has already been initialized.")},
pp(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cA(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nA(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dX(a,b,c){return a},
r6(a){var s,r
for(s=$.bJ.length,r=0;r<s;++r)if(a===$.bJ[r])return!0
return!1},
nz(a,b,c,d){A.iJ(b,"start")
if(c!=null){A.iJ(c,"end")
if(b>c)A.k(A.aX(b,0,c,"start",null))}return new A.fA(a,b,c,d.i("fA<0>"))},
io(a,b,c,d){if(t.gt.b(a))return new A.dj(a,b,c.i("@<0>").E(d).i("dj<1,2>"))
return new A.cu(a,b,c.i("@<0>").E(d).i("cu<1,2>"))},
ic(){return new A.es("No element")},
vU(){return new A.es("Too many elements")},
iR(a,b,c,d,e){if(c-b<=32)A.ww(a,b,c,d,e)
else A.wv(a,b,c,d,e)},
ww(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ax(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ac()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
wv(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.L(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.L(a4+a5,2),f=g-j,e=g+j,d=J.ax(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.ab(a6.$2(b,a0),0)
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
A.iR(a3,a4,r-2,a6,a7)
A.iR(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.ab(a6.$2(d.h(a3,r),b),0))++r
while(J.ab(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.iR(a3,r,q,a6,a7)}else A.iR(a3,r,q,a6,a7)},
d1:function d1(){},
eV:function eV(a,b){this.a=a
this.$ti=b},
df:function df(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b){this.a=a
this.$ti=b},
fL:function fL(){},
o4:function o4(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.$ti=b},
dv:function dv(a){this.a=a},
dg:function dg(a){this.a=a},
nj:function nj(){},
G:function G(){},
a5:function a5(){},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
dj:function dj(a,b,c){this.a=a
this.b=b
this.$ti=c},
dw:function dw(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b){this.a=a
this.$ti=b},
fG:function fG(a,b){this.a=a
this.$ti=b},
ai:function ai(){},
ch:function ch(){},
eu:function eu(){},
fu:function fu(a,b){this.a=a
this.$ti=b},
he:function he(){},
c5(a,b,c){var s,r,q,p,o,n,m,l=A.az(a.gS(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.az(a.gao(),!0,c)
m=new A.a6(q,n,b.i("@<0>").E(c).i("a6<1,2>"))
m.$keys=l
return m}return new A.eX(A.aU(a,b,c),b.i("@<0>").E(c).i("eX<1,2>"))},
vi(){throw A.c(A.aB("Cannot modify unmodifiable Map"))},
vj(){throw A.c(A.aB("Cannot modify constant Set"))},
ux(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
zw(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.e1(a)
return s},
fo(a){var s,r=$.rI
if(r==null)r=$.rI=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
mO(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.e(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
qa(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.dY(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
iG(a){var s,r,q,p
if(a instanceof A.E)return A.bI(A.bs(a),null)
s=J.dY(a)
if(s===B.ea||s===B.ec||t.cx.b(a)){r=B.aX(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bI(A.bs(a),null)},
rJ(a){var s,r,q
if(a==null||typeof a=="number"||A.bU(a))return J.e1(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cN)return a.n(0)
if(a instanceof A.bS)return a.f7(!0)
s=$.uT()
for(r=0;r<1;++r){q=s[r].m_(a)
if(q!=null)return q}return"Instance of '"+A.iG(a)+"'"},
wb(){return Date.now()},
wk(){var s,r
if($.mP!==0)return
$.mP=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mP=1e6
$.mQ=new A.mN(r)},
wa(){if(!!self.location)return self.location.href
return null},
wl(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aj(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cX(s,10)|55296)>>>0,s&1023|56320)}}throw A.c(A.aX(a,0,1114111,null,null))},
em(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wj(a){var s=A.em(a).getUTCFullYear()+0
return s},
wh(a){var s=A.em(a).getUTCMonth()+1
return s},
wd(a){var s=A.em(a).getUTCDate()+0
return s},
we(a){var s=A.em(a).getUTCHours()+0
return s},
wg(a){var s=A.em(a).getUTCMinutes()+0
return s},
wi(a){var s=A.em(a).getUTCSeconds()+0
return s},
wf(a){var s=A.em(a).getUTCMilliseconds()+0
return s},
wc(a){var s=a.$thrownJsError
if(s==null)return null
return A.co(s)},
rK(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aq(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
kb(a){throw A.c(A.r1(a))},
e(a,b){if(a==null)J.b2(a)
throw A.c(A.pl(a,b))},
pl(a,b){var s,r="index"
if(!A.aF(b))return new A.bY(!0,b,r,null)
s=A.a(J.b2(a))
if(b<0||b>=s)return A.m1(b,s,a,r)
return A.rM(b,r)},
zg(a,b,c){if(a>c)return A.aX(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aX(b,a,c,"end",null)
return new A.bY(!0,b,"end",null)},
r1(a){return new A.bY(!0,a,null,null)},
c(a){return A.aq(a,new Error())},
aq(a,b){var s
if(a==null)a=new A.cB()
b.dartException=a
s=A.zR
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
zR(){return J.e1(this.dartException)},
k(a,b){throw A.aq(a,b==null?new Error():b)},
be(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.xV(a,b,c),s)},
xV(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fD("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.c(A.ar(a))},
cC(a){var s,r,q,p,o,n
a=A.up(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.nH(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
nI(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
rV(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
q3(a,b){var s=b==null,r=s?null:b.method
return new A.ij(a,r,s?null:b.receiver)},
ag(a){var s
if(a==null)return new A.mA(a)
if(a instanceof A.f0){s=a.a
return A.db(a,s==null?A.eF(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.db(a,a.dartException)
return A.yP(a)},
db(a,b){if(t.W.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
yP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cX(r,16)&8191)===10)switch(q){case 438:return A.db(a,A.q3(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.db(a,new A.fk())}}if(a instanceof TypeError){p=$.uA()
o=$.uB()
n=$.uC()
m=$.uD()
l=$.uG()
k=$.uH()
j=$.uF()
$.uE()
i=$.uJ()
h=$.uI()
g=p.aB(s)
if(g!=null)return A.db(a,A.q3(A.C(s),g))
else{g=o.aB(s)
if(g!=null){g.method="call"
return A.db(a,A.q3(A.C(s),g))}else if(n.aB(s)!=null||m.aB(s)!=null||l.aB(s)!=null||k.aB(s)!=null||j.aB(s)!=null||m.aB(s)!=null||i.aB(s)!=null||h.aB(s)!=null){A.C(s)
return A.db(a,new A.fk())}}return A.db(a,new A.j0(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fy()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.db(a,new A.bY(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fy()
return a},
co(a){var s
if(a instanceof A.f0)return a.b
if(a==null)return new A.h1(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.h1(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kc(a){if(a==null)return J.bt(a)
if(typeof a=="object")return A.fo(a)
return J.bt(a)},
za(a){if(typeof a=="number")return B.d.gH(a)
if(a instanceof A.jR)return A.fo(a)
if(a instanceof A.bS)return a.gH(a)
return A.kc(a)},
ug(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
zl(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
yf(a,b,c,d,e,f){t.gY.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.ed("Unsupported number of arguments for wrapped closure"))},
eP(a,b){var s=a.$identity
if(!!s)return s
s=A.zb(a,b)
a.$identity=s
return s},
zb(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.yf)},
vh(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iU().constructor.prototype):Object.create(new A.e6(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.rj(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.vd(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.rj(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
vd(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.va)}throw A.c("Error in functionType of tearoff")},
ve(a,b,c,d){var s=A.ri
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
rj(a,b,c,d){if(c)return A.vg(a,b,d)
return A.ve(b.length,d,a,b)},
vf(a,b,c,d){var s=A.ri,r=A.vb
switch(b?-1:a){case 0:throw A.c(new A.iN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
vg(a,b,c){var s,r
if($.rg==null)$.rg=A.rf("interceptor")
if($.rh==null)$.rh=A.rf("receiver")
s=b.length
r=A.vf(s,c,a,b)
return r},
r2(a){return A.vh(a)},
va(a,b){return A.h6(v.typeUniverse,A.bs(a.a),b)},
ri(a){return a.a},
vb(a){return a.b},
rf(a){var s,r,q,p=new A.e6("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.z("Field name "+a+" not found.",null))},
ui(a){return v.getIsolateTag(a)},
ut(){return v.G},
Ar(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
zy(a){var s,r,q,p,o,n=A.C($.uj.$1(a)),m=$.pm[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pt[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.br($.ud.$2(a,n))
if(q!=null){m=$.pm[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pt[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.pP(s)
$.pm[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.pt[n]=s
return s}if(p==="-"){o=A.pP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.un(a,s)
if(p==="*")throw A.c(A.rW(n))
if(v.leafTags[n]===true){o=A.pP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.un(a,s)},
un(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.r7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
pP(a){return J.r7(a,!1,null,!!a.$ibx)},
zC(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.pP(s)
else return J.r7(s,c,null,null)},
zq(){if(!0===$.r5)return
$.r5=!0
A.zr()},
zr(){var s,r,q,p,o,n,m,l
$.pm=Object.create(null)
$.pt=Object.create(null)
A.zp()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.uo.$1(o)
if(n!=null){m=A.zC(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
zp(){var s,r,q,p,o,n,m=B.cy()
m=A.eO(B.cz,A.eO(B.cA,A.eO(B.aY,A.eO(B.aY,A.eO(B.cB,A.eO(B.cC,A.eO(B.cD(B.aX),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.uj=new A.pq(p)
$.ud=new A.pr(o)
$.uo=new A.ps(n)},
eO(a,b){return a(b)||b},
x6(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.e(b,s)
if(!J.ab(r,b[s]))return!1}return!0},
zd(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
w_(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.ac("Illegal RegExp pattern ("+String(o)+")",a,null))},
zL(a,b,c){var s=a.indexOf(b,c)
return s>=0},
zj(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
up(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
zM(a,b,c){var s=A.zN(a,b,c)
return s},
zN(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.up(b),"g"),A.zj(c))},
b6:function b6(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a){this.a=a},
eX:function eX(a,b){this.a=a
this.$ti=b},
e9:function e9(){},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
f2:function f2(a,b){this.a=a
this.$ti=b},
eY:function eY(){},
c6:function c6(a,b,c){this.a=a
this.b=b
this.$ti=c},
mN:function mN(a){this.a=a},
fv:function fv(){},
nH:function nH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fk:function fk(){},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
mA:function mA(a){this.a=a},
f0:function f0(a,b){this.a=a
this.b=b},
h1:function h1(a){this.a=a
this.b=null},
cN:function cN(){},
hC:function hC(){},
hD:function hD(){},
iX:function iX(){},
iU:function iU(){},
e6:function e6(a,b){this.a=a
this.b=b},
iN:function iN(a){this.a=a},
bM:function bM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mg:function mg(a){this.a=a},
mo:function mo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a1:function a1(a,b){this.a=a
this.$ti=b},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aJ:function aJ(a,b){this.a=a
this.$ti=b},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
T:function T(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fb:function fb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pq:function pq(a){this.a=a},
pr:function pr(a){this.a=a},
ps:function ps(a){this.a=a},
bS:function bS(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
ii:function ii(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
zO(a){throw A.aq(A.rB(a),new Error())},
h(){throw A.aq(A.a0(""),new Error())},
B(){throw A.aq(A.w1(""),new Error())},
uw(){throw A.aq(A.rB(""),new Error())},
af(){var s=new A.o5()
return s.b=s},
o5:function o5(){this.b=null},
U(a){return a},
w5(a,b,c){return new Float32Array(a,b,c)},
w6(a){return new Uint8Array(a)},
w7(a){return new Uint8Array(A.U(a))},
cK(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.pl(b,a))},
xO(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.zg(a,b,c))
return b},
cV:function cV(){},
el:function el(){},
fi:function fi(){},
ox:function ox(a){this.a=a},
is:function is(){},
aK:function aK(){},
fg:function fg(){},
fh:function fh(){},
ff:function ff(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
dy:function dy(){},
fj:function fj(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
qe(a,b){var s=b.c
return s==null?b.c=A.h4(a,"bv",[b.x]):s},
rN(a){var s=a.w
if(s===6||s===7)return A.rN(a.x)
return s===11||s===12},
ws(a){return a.as},
zD(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aw(a){return A.ow(v.typeUniverse,a,!1)},
dW(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dW(a1,s,a3,a4)
if(r===s)return a2
return A.tj(a1,r,!0)
case 7:s=a2.x
r=A.dW(a1,s,a3,a4)
if(r===s)return a2
return A.ti(a1,r,!0)
case 8:q=a2.y
p=A.eN(a1,q,a3,a4)
if(p===q)return a2
return A.h4(a1,a2.x,p)
case 9:o=a2.x
n=A.dW(a1,o,a3,a4)
m=a2.y
l=A.eN(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.qr(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eN(a1,j,a3,a4)
if(i===j)return a2
return A.tk(a1,k,i)
case 11:h=a2.x
g=A.dW(a1,h,a3,a4)
f=a2.y
e=A.yL(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.th(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eN(a1,d,a3,a4)
o=a2.x
n=A.dW(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.qs(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.hs("Attempted to substitute unexpected RTI kind "+a0))}},
eN(a,b,c,d){var s,r,q,p,o=b.length,n=A.oB(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dW(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
yM(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.oB(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dW(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
yL(a,b,c,d){var s,r=b.a,q=A.eN(a,r,c,d),p=b.b,o=A.eN(a,p,c,d),n=b.c,m=A.yM(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jt()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
r3(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.zo(s)
return a.$S()}return null},
zs(a,b){var s
if(A.rN(b))if(a instanceof A.cN){s=A.r3(a)
if(s!=null)return s}return A.bs(a)},
bs(a){if(a instanceof A.E)return A.o(a)
if(Array.isArray(a))return A.K(a)
return A.qG(J.dY(a))},
K(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.qG(a)},
qG(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.yc(a,s)},
yc(a,b){var s=a instanceof A.cN?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.xf(v.typeUniverse,s.name)
b.$ccache=r
return r},
zo(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ow(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ka(a){return A.cn(A.o(a))},
r_(a){var s
if(a instanceof A.bS)return a.eE()
s=a instanceof A.cN?A.r3(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.e_(a).a
if(Array.isArray(a))return A.K(a)
return A.bs(a)},
cn(a){var s=a.r
return s==null?a.r=new A.jR(a):s},
zk(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.e(q,0)
s=A.h6(v.typeUniverse,A.r_(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.tl(v.typeUniverse,s,A.r_(q[r]))}return A.h6(v.typeUniverse,s,a)},
bW(a){return A.cn(A.ow(v.typeUniverse,a,!1))},
yb(a){var s=this
s.b=A.yH(s)
return s.b(a)},
yH(a){var s,r,q,p,o
if(a===t.K)return A.yl
if(A.dZ(a))return A.yp
s=a.w
if(s===6)return A.y7
if(s===1)return A.tU
if(s===7)return A.yg
r=A.yG(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dZ)){a.f="$i"+q
if(q==="D")return A.yj
if(a===t.m)return A.yi
return A.yo}}else if(s===10){p=A.zd(a.x,a.y)
o=p==null?A.tU:p
return o==null?A.eF(o):o}return A.y5},
yG(a){if(a.w===8){if(a===t.S)return A.aF
if(a===t.i||a===t.o)return A.yk
if(a===t.N)return A.yn
if(a===t.y)return A.bU}return null},
ya(a){var s=this,r=A.y4
if(A.dZ(s))r=A.xJ
else if(s===t.K)r=A.eF
else if(A.eQ(s)){r=A.y6
if(s===t.aV)r=A.tD
else if(s===t.x)r=A.br
else if(s===t.fU)r=A.xI
else if(s===t.jh)r=A.tE
else if(s===t.dC)r=A.tC
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.C
else if(s===t.y)r=A.an
else if(s===t.o)r=A.b7
else if(s===t.i)r=A.d8
else if(s===t.m)r=A.d
s.a=r
return s.a(a)},
y5(a){var s=this
if(a==null)return A.eQ(s)
return A.zx(v.typeUniverse,A.zs(a,s),s)},
y7(a){if(a==null)return!0
return this.x.b(a)},
yo(a){var s,r=this
if(a==null)return A.eQ(r)
s=r.f
if(a instanceof A.E)return!!a[s]
return!!J.dY(a)[s]},
yj(a){var s,r=this
if(a==null)return A.eQ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.E)return!!a[s]
return!!J.dY(a)[s]},
yi(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.E)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
tT(a){if(typeof a=="object"){if(a instanceof A.E)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
y4(a){var s=this
if(a==null){if(A.eQ(s))return a}else if(s.b(a))return a
throw A.aq(A.tK(a,s),new Error())},
y6(a){var s=this
if(a==null||s.b(a))return a
throw A.aq(A.tK(a,s),new Error())},
tK(a,b){return new A.h2("TypeError: "+A.t9(a,A.bI(b,null)))},
t9(a,b){return A.hS(a)+": type '"+A.bI(A.r_(a),null)+"' is not a subtype of type '"+b+"'"},
bT(a,b){return new A.h2("TypeError: "+A.t9(a,b))},
yg(a){var s=this
return s.x.b(a)||A.qe(v.typeUniverse,s).b(a)},
yl(a){return a!=null},
eF(a){if(a!=null)return a
throw A.aq(A.bT(a,"Object"),new Error())},
yp(a){return!0},
xJ(a){return a},
tU(a){return!1},
bU(a){return!0===a||!1===a},
an(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aq(A.bT(a,"bool"),new Error())},
xI(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aq(A.bT(a,"bool?"),new Error())},
d8(a){if(typeof a=="number")return a
throw A.aq(A.bT(a,"double"),new Error())},
tC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aq(A.bT(a,"double?"),new Error())},
aF(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aq(A.bT(a,"int"),new Error())},
tD(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aq(A.bT(a,"int?"),new Error())},
yk(a){return typeof a=="number"},
b7(a){if(typeof a=="number")return a
throw A.aq(A.bT(a,"num"),new Error())},
tE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aq(A.bT(a,"num?"),new Error())},
yn(a){return typeof a=="string"},
C(a){if(typeof a=="string")return a
throw A.aq(A.bT(a,"String"),new Error())},
br(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aq(A.bT(a,"String?"),new Error())},
d(a){if(A.tT(a))return a
throw A.aq(A.bT(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.tT(a))return a
throw A.aq(A.bT(a,"JSObject?"),new Error())},
u6(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bI(a[q],b)
return s},
yw(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.u6(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bI(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
tN(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.yO(a.x)
o=a.y
return o.length>0?p+("<"+A.u6(o,b)+">"):p}if(l===10)return A.yw(a,b)
if(l===11)return A.tN(a,b,null)
if(l===12)return A.tN(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
yO(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xg(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
xf(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ow(a,b,!1)
else if(typeof m=="number"){s=m
r=A.h5(a,5,"#")
q=A.oB(s)
for(p=0;p<s;++p)q[p]=r
o=A.h4(a,b,q)
n[b]=o
return o}else return m},
xe(a,b){return A.tt(a.tR,b)},
xd(a,b){return A.tt(a.eT,b)},
ow(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.te(A.tc(a,null,b,!1))
r.set(b,s)
return s},
h6(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.te(A.tc(a,b,c,!0))
q.set(c,r)
return r},
tl(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.qr(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
d5(a,b){b.a=A.ya
b.b=A.yb
return b},
h5(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c1(null,null)
s.w=b
s.as=c
r=A.d5(a,s)
a.eC.set(c,r)
return r},
tj(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.xb(a,b,r,c)
a.eC.set(r,s)
return s},
xb(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dZ(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.eQ(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.c1(null,null)
q.w=6
q.x=b
q.as=c
return A.d5(a,q)},
ti(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.x9(a,b,r,c)
a.eC.set(r,s)
return s},
x9(a,b,c,d){var s,r
if(d){s=b.w
if(A.dZ(b)||b===t.K)return b
else if(s===1)return A.h4(a,"bv",[b])
else if(b===t.c||b===t.w)return t.gK}r=new A.c1(null,null)
r.w=7
r.x=b
r.as=c
return A.d5(a,r)},
xc(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c1(null,null)
s.w=13
s.x=b
s.as=q
r=A.d5(a,s)
a.eC.set(q,r)
return r},
h3(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
x8(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
h4(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.h3(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.c1(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.d5(a,r)
a.eC.set(p,q)
return q},
qr(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.h3(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.c1(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.d5(a,o)
a.eC.set(q,n)
return n},
tk(a,b,c){var s,r,q="+"+(b+"("+A.h3(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c1(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.d5(a,s)
a.eC.set(q,r)
return r},
th(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.h3(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.h3(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.x8(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.c1(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.d5(a,p)
a.eC.set(r,o)
return o},
qs(a,b,c,d){var s,r=b.as+("<"+A.h3(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.xa(a,b,c,r,d)
a.eC.set(r,s)
return s},
xa(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.oB(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dW(a,b,r,0)
m=A.eN(a,c,r,0)
return A.qs(a,n,m,c!==m)}}l=new A.c1(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.d5(a,l)},
tc(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
te(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.x1(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.td(a,r,l,k,!1)
else if(q===46)r=A.td(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dT(a.u,a.e,k.pop()))
break
case 94:k.push(A.xc(a.u,k.pop()))
break
case 35:k.push(A.h5(a.u,5,"#"))
break
case 64:k.push(A.h5(a.u,2,"@"))
break
case 126:k.push(A.h5(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.x3(a,k)
break
case 38:A.x2(a,k)
break
case 63:p=a.u
k.push(A.tj(p,A.dT(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ti(p,A.dT(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.x0(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.tf(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.x5(a.u,a.e,o)
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
return A.dT(a.u,a.e,m)},
x1(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
td(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.xg(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.ws(o)+'"')
d.push(A.h6(s,o,n))}else d.push(p)
return m},
x3(a,b){var s,r=a.u,q=A.tb(a,b),p=b.pop()
if(typeof p=="string")b.push(A.h4(r,p,q))
else{s=A.dT(r,a.e,p)
switch(s.w){case 11:b.push(A.qs(r,s,q,a.n))
break
default:b.push(A.qr(r,s,q))
break}}},
x0(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.tb(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dT(p,a.e,o)
q=new A.jt()
q.a=s
q.b=n
q.c=m
b.push(A.th(p,r,q))
return
case-4:b.push(A.tk(p,b.pop(),s))
return
default:throw A.c(A.hs("Unexpected state under `()`: "+A.q(o)))}},
x2(a,b){var s=b.pop()
if(0===s){b.push(A.h5(a.u,1,"0&"))
return}if(1===s){b.push(A.h5(a.u,4,"1&"))
return}throw A.c(A.hs("Unexpected extended operation "+A.q(s)))},
tb(a,b){var s=b.splice(a.p)
A.tf(a.u,a.e,s)
a.p=b.pop()
return s},
dT(a,b,c){if(typeof c=="string")return A.h4(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.x4(a,b,c)}else return c},
tf(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dT(a,b,c[s])},
x5(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dT(a,b,c[s])},
x4(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.hs("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.hs("Bad index "+c+" for "+b.n(0)))},
zx(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.av(a,b,null,c,null)
r.set(c,s)}return s},
av(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dZ(d))return!0
s=b.w
if(s===4)return!0
if(A.dZ(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.av(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.av(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.av(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.av(a,b.x,c,d,e))return!1
return A.av(a,A.qe(a,b),c,d,e)}if(s===6)return A.av(a,p,c,d,e)&&A.av(a,b.x,c,d,e)
if(q===7){if(A.av(a,b,c,d.x,e))return!0
return A.av(a,b,c,A.qe(a,d),e)}if(q===6)return A.av(a,b,c,p,e)||A.av(a,b,c,d.x,e)
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
if(!A.av(a,j,c,i,e)||!A.av(a,i,e,j,c))return!1}return A.tS(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.tS(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.yh(a,b,c,d,e)}if(o&&q===10)return A.ym(a,b,c,d,e)
return!1},
tS(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.av(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.av(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.av(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.av(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.av(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
yh(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.h6(a,b,r[o])
return A.tA(a,p,null,c,d.y,e)}return A.tA(a,b.y,null,c,d.y,e)},
tA(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.av(a,b[s],d,e[s],f))return!1
return!0},
ym(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.av(a,r[s],c,q[s],e))return!1
return!0},
eQ(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.dZ(a))if(s!==6)r=s===7&&A.eQ(a.x)
return r},
dZ(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
tt(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
oB(a){return a>0?new Array(a):v.typeUniverse.sEA},
c1:function c1(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jt:function jt(){this.c=this.b=this.a=null},
jR:function jR(a){this.a=a},
jr:function jr(){},
h2:function h2(a){this.a=a},
wV(){var s,r,q
if(self.scheduleImmediate!=null)return A.z1()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eP(new A.o1(s),1)).observe(r,{childList:true})
return new A.o0(s,r,q)}else if(self.setImmediate!=null)return A.z2()
return A.z3()},
wW(a){self.scheduleImmediate(A.eP(new A.o2(t.M.a(a)),0))},
wX(a){self.setImmediate(A.eP(new A.o3(t.M.a(a)),0))},
wY(a){A.qg(B.cP,t.M.a(a))},
qg(a,b){return A.x7(a.a/1000|0,b)},
x7(a,b){var s=new A.ou()
s.iX(a,b)
return s},
bb(a){return new A.jh(new A.ak($.ae,a.i("ak<0>")),a.i("jh<0>"))},
ba(a,b){a.$2(0,null)
b.b=!0
return b.a},
aa(a,b){A.xL(a,b)},
b9(a,b){b.d0(a)},
b8(a,b){b.d1(A.ag(a),A.co(a))},
xL(a,b){var s,r,q=new A.oI(b),p=new A.oJ(b)
if(a instanceof A.ak)a.f6(q,p,t.z)
else{s=t.z
if(a instanceof A.ak)a.dX(q,p,s)
else{r=new A.ak($.ae,t.e)
r.a=8
r.c=a
r.f6(q,p,s)}}},
bd(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ae.hS(new A.ph(s),t.H,t.S,t.z)},
tg(a,b,c){return 0},
ks(a){var s
if(t.W.b(a)){s=a.gbl()
if(s!=null)return s}return B.a2},
q0(a){var s
a.a(null)
s=new A.ak($.ae,a.i("ak<0>"))
s.cG(null)
return s},
vJ(a,b,c){var s=new A.ak($.ae,c.i("ak<0>"))
A.wB(a,new A.ls(b,s,c))
return s},
lt(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ak($.ae,b.i("ak<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.lv(i,h,g,f)
try{for(n=J.O(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.dX(new A.lu(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bU(A.f([],b.i("u<0>")))
return n}i.a=A.c9(n,null,!1,b.i("0?"))}catch(l){p=A.ag(l)
o=A.co(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.qH(m,k)
m=new A.aH(m,k==null?A.ks(m):k)
n.bQ(m)
return n}else{i.d=p
i.c=o}}return f},
qH(a,b){if($.ae===B.v)return null
return null},
yd(a,b){if($.ae!==B.v)A.qH(a,b)
if(b==null)if(t.W.b(a)){b=a.gbl()
if(b==null){A.rK(a,B.a2)
b=B.a2}}else b=B.a2
else if(t.W.b(a))A.rK(a,b)
return new A.aH(a,b)},
oa(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.e;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.wx()
b.bQ(new A.aH(new A.bY(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eN(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bq()
b.bT(o.a)
A.dN(b,p)
return}b.a^=2
A.k7(null,null,b.b,t.M.a(new A.ob(o,b)))},
dN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.qS(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dN(d.a,c)
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
A.qS(j.a,j.b)
return}g=$.ae
if(g!==h)$.ae=h
else g=null
c=c.c
if((c&15)===8)new A.of(q,d,n).$0()
else if(o){if((c&1)!==0)new A.oe(q,j).$0()}else if((c&2)!==0)new A.od(d,q).$0()
if(g!=null)$.ae=g
c=q.c
if(c instanceof A.ak){p=q.a.$ti
p=p.i("bv<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.c_(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.oa(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.c_(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
yx(a,b){var s
if(t.ng.b(a))return b.hS(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.c(A.ay(a,"onError",u.c))},
ys(){var s,r
for(s=$.eK;s!=null;s=$.eK){$.hi=null
r=s.b
$.eK=r
if(r==null)$.hh=null
s.a.$0()}},
yJ(){$.qI=!0
try{A.ys()}finally{$.hi=null
$.qI=!1
if($.eK!=null)$.ra().$1(A.ue())}},
ua(a){var s=new A.ji(a),r=$.hh
if(r==null){$.eK=$.hh=s
if(!$.qI)$.ra().$1(A.ue())}else $.hh=r.b=s},
yE(a){var s,r,q,p=$.eK
if(p==null){A.ua(a)
$.hi=$.hh
return}s=new A.ji(a)
r=$.hi
if(r==null){s.b=p
$.eK=$.hi=s}else{q=r.b
s.b=q
$.hi=r.b=s
if(q==null)$.hh=s}},
A1(a,b){A.dX(a,"stream",t.K)
return new A.jP(b.i("jP<0>"))},
wB(a,b){var s=$.ae
if(s===B.v)return A.qg(a,t.M.a(b))
return A.qg(a,t.M.a(s.ff(b)))},
qS(a,b){A.yE(new A.p9(a,b))},
u5(a,b,c,d,e){var s,r=$.ae
if(r===c)return d.$0()
$.ae=c
s=r
try{r=d.$0()
return r}finally{$.ae=s}},
yC(a,b,c,d,e,f,g){var s,r=$.ae
if(r===c)return d.$1(e)
$.ae=c
s=r
try{r=d.$1(e)
return r}finally{$.ae=s}},
yB(a,b,c,d,e,f,g,h,i){var s,r=$.ae
if(r===c)return d.$2(e,f)
$.ae=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ae=s}},
k7(a,b,c,d){t.M.a(d)
if(B.v!==c){d=c.ff(d)
d=d}A.ua(d)},
o1:function o1(a){this.a=a},
o0:function o0(a,b,c){this.a=a
this.b=b
this.c=c},
o2:function o2(a){this.a=a},
o3:function o3(a){this.a=a},
ou:function ou(){},
ov:function ov(a,b){this.a=a
this.b=b},
jh:function jh(a,b){this.a=a
this.b=!1
this.$ti=b},
oI:function oI(a){this.a=a},
oJ:function oJ(a){this.a=a},
ph:function ph(a){this.a=a},
bF:function bF(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
ck:function ck(a,b){this.a=a
this.$ti=b},
aH:function aH(a,b){this.a=a
this.b=b},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lu:function lu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jl:function jl(){},
fI:function fI(a,b){this.a=a
this.$ti=b},
dM:function dM(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ak:function ak(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
o7:function o7(a,b){this.a=a
this.b=b},
oc:function oc(a,b){this.a=a
this.b=b},
ob:function ob(a,b){this.a=a
this.b=b},
o9:function o9(a,b){this.a=a
this.b=b},
o8:function o8(a,b){this.a=a
this.b=b},
of:function of(a,b,c){this.a=a
this.b=b
this.c=c},
og:function og(a,b){this.a=a
this.b=b},
oh:function oh(a){this.a=a},
oe:function oe(a,b){this.a=a
this.b=b},
od:function od(a,b){this.a=a
this.b=b},
ji:function ji(a){this.a=a
this.b=null},
jP:function jP(a){this.$ti=a},
hd:function hd(){},
jH:function jH(){},
os:function os(a,b){this.a=a
this.b=b},
p9:function p9(a,b){this.a=a
this.b=b},
ta(a,b){var s=a[b]
return s===a?null:s},
qp(a,b,c){if(c==null)a[b]=a
else a[b]=c},
qo(){var s=Object.create(null)
A.qp(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
rD(a,b){return new A.bM(a.i("@<0>").E(b).i("bM<1,2>"))},
W(a,b,c){return b.i("@<0>").E(c).i("q4<1,2>").a(A.ug(a,new A.bM(b.i("@<0>").E(c).i("bM<1,2>"))))},
x(a,b){return new A.bM(a.i("@<0>").E(b).i("bM<1,2>"))},
q5(a){return new A.bR(a.i("bR<0>"))},
a4(a){return new A.bR(a.i("bR<0>"))},
at(a,b){return b.i("rE<0>").a(A.zl(a,new A.bR(b.i("bR<0>"))))},
qq(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jz(a,b,c){var s=new A.dS(a,b,c.i("dS<0>"))
s.c=a.e
return s},
eh(a,b){var s=J.O(a.a)
if(new A.I(s,a.b,a.$ti.i("I<1>")).m())return s.gp()
return null},
aU(a,b,c){var s=A.rD(b,c)
a.ai(0,new A.mp(s,b,c))
return s},
mq(a,b){var s,r,q=A.q5(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.l(0,b.a(a[r]))
return q},
q6(a,b){var s=A.q5(b)
s.J(0,a)
return s},
w2(a,b){var s=t.bP
return J.rc(s.a(a),s.a(b))},
q7(a){var s,r
if(A.r6(a))return"{...}"
s=new A.aZ("")
try{r={}
B.a.l($.bJ,a)
s.a+="{"
r.a=!0
a.ai(0,new A.ms(r,s))
s.a+="}"}finally{if(0>=$.bJ.length)return A.e($.bJ,-1)
$.bJ.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
xh(){throw A.c(A.aB("Cannot change an unmodifiable set"))},
fP:function fP(){},
oi:function oi(a){this.a=a},
fR:function fR(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dO:function dO(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bR:function bR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jy:function jy(a){this.a=a
this.c=this.b=null},
dS:function dS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
mp:function mp(a,b,c){this.a=a
this.b=b
this.c=c},
M:function M(){},
Z:function Z(){},
mr:function mr(a){this.a=a},
ms:function ms(a,b){this.a=a
this.b=b},
fS:function fS(a,b){this.a=a
this.$ti=b},
fT:function fT(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
h7:function h7(){},
ek:function ek(){},
d_:function d_(a,b){this.a=a
this.$ti=b},
cy:function cy(){},
h0:function h0(){},
jS:function jS(){},
fC:function fC(a,b){this.a=a
this.$ti=b},
eC:function eC(){},
h8:function h8(){},
yu(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ag(r)
q=A.ac(String(s),null,null)
throw A.c(q)}q=A.oK(p)
return q},
oK(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jw(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.oK(a[s])
return a},
xy(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.uN()
else s=new Uint8Array(o)
for(r=J.ax(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
xx(a,b,c,d){var s=a?$.uM():$.uL()
if(s==null)return null
if(0===c&&d===b.length)return A.ts(s,b)
return A.ts(s,b.subarray(c,d))},
ts(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
re(a,b,c,d,e,f){if(B.c.W(f,4)!==0)throw A.c(A.ac("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.c(A.ac("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.c(A.ac("Invalid base64 padding, more than two '=' characters",a,b))},
rA(a,b,c){return new A.fc(a,b)},
xU(a){return a.D()},
wZ(a,b){return new A.ol(a,[],A.zc())},
x_(a,b,c){var s,r=new A.aZ(""),q=A.wZ(r,b)
q.cs(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
xz(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jw:function jw(a,b){this.a=a
this.b=b
this.c=null},
ok:function ok(a){this.a=a},
jx:function jx(a){this.a=a},
oA:function oA(){},
oz:function oz(){},
hv:function hv(){},
kR:function kR(){},
dh:function dh(){},
hH:function hH(){},
hR:function hR(){},
fc:function fc(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
ik:function ik(){},
mi:function mi(a){this.b=a},
mh:function mh(a){this.a=a},
om:function om(){},
on:function on(a,b){this.a=a
this.b=b},
ol:function ol(a,b,c){this.c=a
this.a=b
this.b=c},
j5:function j5(){},
nM:function nM(a){this.a=a},
oy:function oy(a){this.a=a
this.b=16
this.c=0},
zt(a){var s=A.mO(a,null)
if(s!=null)return s
throw A.c(A.ac(a,null,null))},
vE(a,b){a=A.aq(a,new Error())
if(a==null)a=A.eF(a)
a.stack=b.n(0)
throw a},
c9(a,b,c,d){var s,r=c?J.rv(a,d):J.ru(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
az(a,b,c){var s,r=A.f([],c.i("u<0>"))
for(s=J.O(a);s.m();)B.a.l(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
L(a,b){var s,r
if(Array.isArray(a))return A.f(a.slice(0),b.i("u<0>"))
s=A.f([],b.i("u<0>"))
for(r=J.O(a);r.m();)B.a.l(s,r.gp())
return s},
ao(a,b){var s=A.az(a,!1,b)
s.$flags=3
return s},
rT(a,b,c){var s,r
A.iJ(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.c(A.aX(c,b,null,"end",null))
if(s===0)return""}r=A.wz(a,b,c)
return r},
wz(a,b,c){var s=a.length
if(b>=s)return""
return A.wl(a,b,c==null||c>s?s:c)},
wm(a){return new A.ii(a,A.w_(a,!1,!0,!1,!1,""))},
rS(a,b,c){var s=J.O(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
j4(){var s,r,q=A.wa()
if(q==null)throw A.c(A.aB("'Uri.base' is not supported"))
s=$.rZ
if(s!=null&&q===$.rY)return s
r=A.wH(q)
$.rZ=r
$.rY=q
return r},
wx(){return A.co(new Error())},
vk(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
rk(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hJ(a){if(a>=10)return""+a
return"0"+a},
vD(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.c(A.ay(b,"name","No enum value with that name"))},
hS(a){if(typeof a=="number"||A.bU(a)||a==null)return J.e1(a)
if(typeof a=="string")return JSON.stringify(a)
return A.rJ(a)},
vF(a,b){A.dX(a,"error",t.K)
A.dX(b,"stackTrace",t.l)
A.vE(a,b)},
hs(a){return new A.hr(a)},
z(a,b){return new A.bY(!1,null,b,a)},
ay(a,b,c){return new A.bY(!0,a,b,c)},
rL(a){var s=null
return new A.en(s,s,!1,s,s,a)},
rM(a,b){return new A.en(null,null,!0,a,b,"Value not in range")},
aX(a,b,c,d,e){return new A.en(b,c,!0,a,d,"Invalid value")},
fp(a,b,c){if(0>a||a>c)throw A.c(A.aX(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aX(b,a,c,"end",null))
return b}return c},
iJ(a,b){if(a<0)throw A.c(A.aX(a,0,null,b,null))
return a},
m1(a,b,c,d){return new A.i8(b,!0,a,d,"Index out of range")},
aB(a){return new A.fD(a)},
rW(a){return new A.j_(a)},
l(a){return new A.es(a)},
ar(a){return new A.hF(a)},
ed(a){return new A.o6(a)},
ac(a,b,c){return new A.J(a,b,c)},
vV(a,b,c){var s,r
if(A.r6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.a.l($.bJ,a)
try{A.yq(a,s)}finally{if(0>=$.bJ.length)return A.e($.bJ,-1)
$.bJ.pop()}r=A.rS(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
q1(a,b,c){var s,r
if(A.r6(a))return b+"..."+c
s=new A.aZ(b)
B.a.l($.bJ,a)
try{r=s
r.a=A.rS(r.a,a,", ")}finally{if(0>=$.bJ.length)return A.e($.bJ,-1)
$.bJ.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
yq(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
cw(a,b,c,d){var s
if(B.m===c){s=J.bt(a)
b=J.bt(b)
return A.nA(A.cA(A.cA($.kd(),s),b))}if(B.m===d){s=J.bt(a)
b=J.bt(b)
c=J.bt(c)
return A.nA(A.cA(A.cA(A.cA($.kd(),s),b),c))}s=J.bt(a)
b=J.bt(b)
c=J.bt(c)
d=J.bt(d)
d=A.nA(A.cA(A.cA(A.cA(A.cA($.kd(),s),b),c),d))
return d},
w8(a){var s,r,q=$.kd()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q=A.cA(q,J.bt(a[r]))
return A.nA(q)},
qf(a,b){return new A.fC(A.q6(a,b),b.i("fC<0>"))},
wH(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.rX(a4<a4?B.b.C(a5,0,a4):a5,5,a3).gi0()
else if(s===32)return A.rX(B.b.C(a5,5,a4),0,a3).gi0()}r=A.c9(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.u9(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.u9(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.a2(a5,"\\",n))if(p>0)h=B.b.a2(a5,"\\",p-1)||B.b.a2(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.a2(a5,"..",n)))h=m>n+2&&B.b.a2(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.a2(a5,"file",0)){if(p<=0){if(!B.b.a2(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.C(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bh(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a2(a5,"http",0)){if(i&&o+3===n&&B.b.a2(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bh(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.a2(a5,"https",0)){if(i&&o+4===n&&B.b.a2(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bh(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.jK(a4<a5.length?B.b.C(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.xr(a5,0,q)
else{if(q===0)A.eD(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.xs(a5,c,p-1):""
a=A.xn(a5,p,o,!1)
i=o+1
if(i<n){a0=A.mO(B.b.C(a5,i,n),a3)
d=A.xp(a0==null?A.k(A.ac("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.xo(a5,n,m,a3,j,a!=null)
a2=m<l?A.xq(a5,m+1,l,a3):a3
return A.xi(j,b,a,d,a1,a2,l<a4?A.xm(a5,l+1,a4):a3)},
t0(a){var s=t.N
return B.a.bE(A.f(a.split("&"),t.s),A.x(s,s),new A.nL(B.aZ),t.G)},
j3(a,b,c){throw A.c(A.ac("Illegal IPv4 address, "+a,b,c))},
wE(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.j3("each part must be in the range 0..255",a,r)}A.j3("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.j3(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.be(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.j3(j,a,q)
p=l}A.j3("IPv4 address should contain exactly 4 parts",a,q)},
wF(a,b,c){var s
if(b===c)throw A.c(A.ac("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.wG(a,b,c)
if(s!=null)throw A.c(s)
return!1}A.t_(a,b,c)
return!0},
wG(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.J(n,a,q)
r=q
break}return new A.J("Unexpected character",a,q-1)}if(r-1===b)return new A.J(n,a,r)
return new A.J("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.J("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.e(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.J("Invalid IPvFuture address character",a,r)}},
t_(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.nK(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.wE(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cX(l,8)
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
B.bD.io(s,a0,16,s,a)
B.bD.l2(s,a,a0,0)}}return s},
xi(a,b,c,d,e,f,g){return new A.h9(a,b,c,d,e,f,g)},
tm(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
eD(a,b,c){throw A.c(A.ac(c,a,b))},
xp(a,b){var s=A.tm(b)
if(a===s)return null
return a},
xn(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.eD(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.xk(a,q,r)
if(o<r){n=o+1
p=A.tr(a,B.b.a2(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.wF(a,q,o)
l=B.b.C(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.b.cj(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.tr(a,B.b.a2(a,"25",n)?o+3:n,c,"%25")}else p=""
A.t_(a,b,o)
return"["+B.b.C(a,b,o)+p+"]"}}return A.xu(a,b,c)},
xk(a,b,c){var s=B.b.cj(a,"%",b)
return s>=b&&s<c?s:c},
tr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aZ(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.qu(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aZ("")
l=h.a+=B.b.C(a,q,r)
if(m)n=B.b.C(a,r,r+3)
else if(n==="%")A.eD(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aZ("")
if(q<r){h.a+=B.b.C(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.C(a,q,r)
if(h==null){h=new A.aZ("")
m=h}else m=h
m.a+=i
l=A.qt(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.C(a,b,c)
if(q<c){i=B.b.C(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
xu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.qu(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aZ("")
k=B.b.C(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.C(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aZ("")
if(q<r){p.a+=B.b.C(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.eD(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.C(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aZ("")
l=p}else l=p
l.a+=k
j=A.qt(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.C(a,b,c)
if(q<c){k=B.b.C(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
xr(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.to(a.charCodeAt(b)))A.eD(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.eD(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.C(a,b,c)
return A.xj(q?a.toLowerCase():a)},
xj(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
xs(a,b,c){return A.ha(a,b,c,16,!1,!1)},
xo(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.ha(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.a_(q,"/"))q="/"+q
return A.xt(q,e,f)},
xt(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.a_(a,"/")&&!B.b.a_(a,"\\"))return A.xv(a,!s||c)
return A.xw(a)},
xq(a,b,c,d){return A.ha(a,b,c,256,!0,!1)},
xm(a,b,c){return A.ha(a,b,c,256,!0,!1)},
qu(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.pp(r)
o=A.pp(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aj(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.C(a,b,b+3).toUpperCase()
return null},
qt(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.k0(a,6*p)&63|q
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
o+=3}}return A.rT(s,0,null)},
ha(a,b,c,d,e,f){var s=A.tq(a,b,c,d,e,f)
return s==null?B.b.C(a,b,c):s},
tq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.qu(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.eD(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.qt(n)}if(o==null){o=new A.aZ("")
k=o}else k=o
k.a=(k.a+=B.b.C(a,p,q))+l
if(typeof m!=="number")return A.kb(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.C(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
tp(a){if(B.b.a_(a,"."))return!0
return B.b.ci(a,"/.")!==-1},
xw(a){var s,r,q,p,o,n,m
if(!A.tp(a))return a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.b2(s,"/")},
xv(a,b){var s,r,q,p,o,n
if(!A.tp(a))return!b?A.tn(a):a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gN(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.a.k(s,0,A.tn(s[0]))}return B.a.b2(s,"/")},
tn(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.to(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.C(a,0,s)+"%3A"+B.b.bP(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
xl(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.c(A.z("Invalid URL encoding",null))}}return r},
qv(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aZ===d)return B.b.C(a,b,c)
else p=new A.dg(B.b.C(a,b,c))
else{p=A.f([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.c(A.z("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.c(A.z("Truncated URI",null))
B.a.l(p,A.xl(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.L.a(p)
return B.hC.kH(p)},
to(a){var s=a|32
return 97<=s&&s<=122},
rX(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.f([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.c(A.ac(k,a,r))}}if(q<0&&r>b)throw A.c(A.ac(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gN(j)
if(p!==44||r!==n+7||!B.b.a2(a,"base64",n+1))throw A.c(A.ac("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.cs.lq(a,m,s)
else{l=A.tq(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bh(a,m,s,l)}return new A.nJ(a,j,c)},
u9(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.e(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.a=a},
jq:function jq(){},
a9:function a9(){},
hr:function hr(a){this.a=a},
cB:function cB(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
i8:function i8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fD:function fD(a){this.a=a},
j_:function j_(a){this.a=a},
es:function es(a){this.a=a},
hF:function hF(a){this.a=a},
iz:function iz(){},
fy:function fy(){},
o6:function o6(a){this.a=a},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(){},
E:function E(){},
jQ:function jQ(){},
nv:function nv(){this.b=this.a=0},
aZ:function aZ(a){this.a=a},
nL:function nL(a){this.a=a},
nK:function nK(a){this.a=a},
h9:function h9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
nJ:function nJ(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
jm:function jm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mz:function mz(a){this.a=a},
a8(a){var s
if(typeof a=="function")throw A.c(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jZ,a)
s[$.eR()]=a
return s},
jZ(a,b,c){t.gY.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
r4(a,b,c){return c.a(a[b])},
tO(a,b){return a[b]},
aR(a,b,c,d){return d.a(a[b].apply(a,c))},
tH(a,b,c,d){return d.a(a[b](c))},
aG(a,b){var s=new A.ak($.ae,b.i("ak<0>")),r=new A.fI(s,b.i("fI<0>"))
a.then(A.eP(new A.pQ(r,b),1),A.eP(new A.pR(r),1))
return s},
tY(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cM(a){if(A.tY(a))return a
return new A.pk(new A.fR(t.mp)).$1(a)},
pQ:function pQ(a,b){this.a=a
this.b=b},
pR:function pR(a){this.a=a},
pk:function pk(a){this.a=a},
jv:function jv(){},
ew:function ew(){this.b=this.a=0},
mT:function mT(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mU:function mU(){},
dB:function dB(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b},
kY:function kY(){this.a=null
this.d=0},
iE:function iE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
e7:function e7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hX:function hX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
ln:function ln(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dq(a,b){return new A.lD(a,b)},
cx:function cx(){},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a,b){this.a=a
this.b=b},
lD:function lD(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
cz:function cz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rH(a,b,c,d,e,f,g,h,i){return new A.ca(c,a,g,f,e,h,i,b,!0)},
hq:function hq(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h
_.ax=i},
cD:function cD(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
nN:function nN(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mC(a){var s,r=t.N,q=A.at(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.J(0,A.at(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.J(0,A.at(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.J(0,A.at(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.J(0,A.at(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.l(0,"gradeOutput")
if(p.v(0,"ps1"))q.l(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.mB(A.qf(q,r),s)},
mB:function mB(a,b){this.a=a
this.b=b},
mD:function mD(){},
mL:function mL(a){this.b=a},
iM:function iM(){this.a=null
this.c=0
this.d=!1},
ea:function ea(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c,d,e,f,g,h,i,j){var _=this
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
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dD:function dD(a,b){this.a=a
this.b=b},
lp:function lp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
w3(){return new A.iq(new A.cd(new A.mu(),A.f([],t.dz),A.f([],t.t),t.kk))},
iq:function iq(a){this.a=a},
mu:function mu(){},
ub(a){var s=4
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
case 3:s=A.k(A.aB("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
xS(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.av[r]
if(A.ub(q.a)===b)s+=q.c}return s},
w4(a){return new A.mw(a,new A.cd(new A.mx(),A.f([],t.jk),A.f([],t.t),t.ll),A.x(t.S,t.mL))},
j1:function j1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mw:function mw(a,b,c){this.a=a
this.b=b
this.c=c},
mx:function mx(){},
my:function my(){},
wA(a){var s=new A.iY(a,new A.cd(new A.nE(),A.f([],t.mQ),A.f([],t.t),t.ox),A.x(t.S,t._))
s.d=s.ew()
return s},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
nE:function nE(){},
nG:function nG(){},
nF:function nF(){},
z4(a){var s,r,q,p,o=A.f([],t.og)
for(s=a.length,r=t.ix,q=0;q<a.length;a.length===s||(0,A.p)(a),++q){p=a[q]
B.a.l(o,new A.ds(p,A.f([p],r)))
continue}return o},
ds:function ds(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a},
lj:function lj(){},
lk:function lk(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a){this.a=a},
hW:function hW(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
lo:function lo(a,b){this.a=a
this.b=b
this.c=0},
q9(){return!0},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
mF:function mF(){},
mG:function mG(){},
c_:function c_(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
aY:function aY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eo:function eo(a,b){this.a=a
this.b=b},
S:function S(a,b){this.a=a
this.b=b},
eW:function eW(a){this.b=a},
mR:function mR(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aW:function aW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mV:function mV(){},
aV:function aV(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
mX:function mX(a,b){this.a=a
this.b=b},
n0:function n0(){},
n_:function n_(){},
mZ:function mZ(a){this.a=a},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
mW:function mW(a,b){this.a=a
this.b=b},
wq(a){return new A.fq(a,new A.cd(new A.n2(),A.f([],t.n_),A.f([],t.t),t.mo))},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a,b){this.a=a
this.b=b},
n2:function n2(){},
tL(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.xZ(a,r,s,a.x.gp().a.b.a).b},
xZ(a,b,c,d){var s,r,q,p,o=new A.p_(a),n=new A.p0(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.z8(b,l,m,s.c.glP(),new A.oL(n),new A.oM(n),new A.oN(a),new A.oS(a),new A.oT(a),new A.oU(n),new A.oV(n),new A.oW(a),r.glR(),o,new A.oX(n),new A.oY(n),new A.oZ(n),new A.oO(n),new A.oP(n),new A.oQ(a),new A.oR(n),c.c,c.b)}else q=new A.hV(A.f([new A.jf(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.fn(b,u.l,u.t,l,B.W)],t.o5))
a.r.toString
p=q.kv(B.F,new A.mV(),!1,new A.jE())
o=p.a.b
if(o.length!==0)throw A.c(A.l("safe renderer graph is invalid: "+A.q(o)))
return new A.ot(q,p)},
y_(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.c(A.l("renderer graph is not initialized"))
s=a4.gdL()
r=a5.a
q=A.ze(A.vI(r.c),s,-1).a
p=A.f([],t.mX)
o=A.f([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.d,k=0;k<q.length;q.length===s||(0,A.p)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.ao)B.a.l(o,new A.au(new A.bg(m.hY(i.c.a).c,h),j,l))
else B.a.l(p,new A.au(new A.bj(B.fu,i.b,i.a,h),j,n))}g=new A.js(A.z4(A.zJ(p)),A.zI(o),r,a5.b,a5.c)
f=new A.hM(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.p)(s),++k){e=s[k]
d=A.x(n,m)
for(l=e.ga1().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.p)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
a0=a.b.h(0,b)
if(a0==null)A.k(A.l("resource is not in candidate: "+b))
d.k(0,b,new A.hA(a0))}e.ag(new A.hz(d,f,g))}},
rQ(a){return new A.nh(a,new A.kX(new A.kY(),new A.iM()),new A.lo(A.f([],t.c8),B.dI),A.f([],t.oZ),B.aA)},
p_:function p_(a){this.a=a},
p0:function p0(a,b){this.a=a
this.b=b},
oZ:function oZ(a){this.a=a},
oS:function oS(a){this.a=a},
oT:function oT(a){this.a=a},
oY:function oY(a){this.a=a},
oN:function oN(a){this.a=a},
oP:function oP(a){this.a=a},
oO:function oO(a){this.a=a},
oX:function oX(a){this.a=a},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
oU:function oU(a){this.a=a},
oV:function oV(a){this.a=a},
oW:function oW(a){this.a=a},
oR:function oR(a){this.a=a},
oQ:function oQ(a){this.a=a},
ot:function ot(a,b){this.a=a
this.b=b},
jE:function jE(){},
js:function js(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nb:function nb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
nh:function nh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
ni:function ni(){},
zJ(a){var s,r,q=A.L(a,t.p)
B.a.Z(q,new A.pV())
s=A.K(q)
r=s.i("N<1,bz>")
s=A.L(new A.N(q,s.i("bz(1)").a(new A.pW()),r),r.i("a5.E"))
s.$flags=1
return s},
zI(a){var s,r,q=A.L(a,t.d)
B.a.Z(q,new A.pT())
s=A.K(q)
r=s.i("N<1,bz>")
s=A.L(new A.N(q,s.i("bz(1)").a(new A.pU()),r),r.i("a5.E"))
s.$flags=1
return s},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b){this.a=a
this.b=b},
au:function au(a,b,c){this.a=a
this.b=b
this.$ti=c},
pV:function pV(){},
pW:function pW(){},
pT:function pT(){},
pU:function pU(){},
ze(a,b,c){var s,r,q,p,o,n,m,l=A.f([],t.ix)
for(s=b.$ti,r=new A.bF(b.a(),s.i("bF<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.c(A.z("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.lY(n)===B.ba){++p
continue}B.a.l(l,o)}return new A.l_(l)},
l_:function l_(a){this.a=a},
bf(a){var s,r,q,p,o,n,m,l,k
for(s=J.O(a),r=B.hF,q=B.hG,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.A(m,k,Math.min(r.c,o))
q=new A.A(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.c(A.z("Aabb.fromPoints requires at least one point",null))
return new A.ho(r,q)},
ho:function ho(a,b){this.a=a
this.b=b},
vI(a){var s,r,q,p,o,n,m=a.a,l=new A.lr(),k=m.length
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
return new A.lq(A.f([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
dz:function dz(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
lq:function lq(a){this.a=a},
lr:function lr(){},
rF(a){if(a.length!==16)throw A.c(A.z("Mat4.fromColumnMajor requires 16 values",null))
return new A.cv(new Float32Array(A.U(a)))},
q8(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cv(q)},
rG(a,b,c){var s=b.ga4(),r=s.aY(c).ga4(),q=r.aY(s),p=new Float32Array(16)
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
p[12]=-r.bz(a)
p[13]=-q.bz(a)
p[14]=s.bz(a)
p[15]=1
return new A.cv(p)},
cv:function cv(a){this.a=a},
mt:function mt(){},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a,b){this.a=a
this.b=b},
eU:function eU(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
jj:function jj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hy:function hy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jn:function jn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fM:function fM(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
jo:function jo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hP:function hP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
jp:function jp(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
i4:function i4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hA:function hA(a){this.b=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jF:function jF(a,b,c,d){var _=this
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
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rR(a){var s=a.c,r=Math.abs(s.a)<0.99?B.hE:B.M,q=A.rG(a.b,s,r)
return new A.dG(A.q8(1,a.f,B.d.K(a.w*2,0.1,3),0.05).X(0,q))},
dG:function dG(a){this.a=a},
iP:function iP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jI:function jI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
z8(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.c(A.ay(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.rR(B.hn)
c=t.o5
l=A.f([],c)
if(r){B.a.J(l,A.f([new A.eU(a,j,i,b,h,h,B.cl,!0,B.W,B.bR,b2),new A.eU(a,j,i,b,g,g,B.ii,!1,B.bR,B.bS,a2),new A.hy(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.pX()}else k=B.W
if(q){B.a.J(l,A.f([new A.eZ(a,j,i,b,f,f,B.cm,k,B.bK,b2),new A.eZ(a,j,i,b,e,e,B.ij,B.bK,B.bL,a7),new A.hP(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b2,a8,b3,a4,k)],c))
k=B.bM}if(p){B.a.l(l,new A.i4(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a9,k))
k=B.bQ}if(o){B.a.l(l,new A.iH(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bT}if(n){B.a.l(l,new A.j7(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b8,b7,k))
k=B.aC}c=A.f([new A.hL(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b1,b0,a1)],c)
if(s)c.push(new A.iT(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b3,a4))
if(s)c.push(new A.iS(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b6,b3,a4))
c.push(new A.iP(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b1,b0,a1,a5,new A.pi(d)))
c.push(new A.iQ(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+direct,0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b1,b0,a1,b4,new A.pj(d,m),a5,a6,b5,s,c0,b9))
B.a.J(c,l)
c.push(new A.fn(a,j,u.t,b,k))
return new A.hV(c)},
pi:function pi(a){this.a=a},
pj:function pj(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
jJ:function jJ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jN:function jN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jM:function jM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jT:function jT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(){},
iO(a,b){return new A.fx(a,b)},
i0:function i0(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dp:function dp(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f4:function f4(a,b){this.a=a
this.b=b},
dF:function dF(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
y:function y(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
lC:function lC(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
eA:function eA(a,b){this.a=a
this.b=b},
d4:function d4(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
rm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eb(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
hw:function hw(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aN:function aN(a,b){this.a=a
this.b=b},
nY:function nY(){this.a=null},
wM(a){var s=new A.je(a,B.f,new A.nY())
s.iW(a)
return s},
bE(a,b){var s,r
if(a.b!==B.f)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
wS(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
switch(b){case 1:a.a.drawBuffers(A.f([A.a(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.c(A.z("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
wR(a,b,c){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.c(A.l("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
wQ(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
wP(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
t3(a,b){var s
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
wN(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b_(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.f
r=s.kN(b)
if(r.a===0)return
if(r.v(0,B.aH)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aI))a.a.depthFunc(A.wQ(a,b.b))
if(r.v(0,B.aJ))a.a.depthMask(b.c)
if(r.v(0,B.aN)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aO))a.a.cullFace(A.wP(a,b.x))
if(r.v(0,B.cf)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aK)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aL))a.a.blendFunc(A.t3(a,b.e),A.t3(a,b.f))
if(r.v(0,B.aM))a.a.blendEquation(A.wN(a,b.r))
if(r.v(0,B.cd))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.ce)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
wO(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
cG(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.wO(a,b))},
bQ(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.d(b.a)
a.a.useProgram(s)
a.e=s},
t(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.c(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.d8(c.b))
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
b5(a,b){if(a.b!==B.f)A.k(A.l(u.k))
a.a.bindVertexArray(A.d(b.a))},
aC(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.hc){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.hb){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.c(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.c(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
c2(a,b,c){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
qi(a,b,c,d){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
qj(a,b,c){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
qk(a,b,c,d){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
A.aR(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
wT(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
t6(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.c(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.bb?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.wT(a,b.b))
return new A.d6(r)},
t4(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
t5(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
ql(a,b){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.i(s.createTexture())
if(r==null)throw A.c(A.l("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.a(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.aR(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aR(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.t4(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.t4(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.t5(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.t5(a,p))
return new A.d6(new A.hc(r,l,k,q,!1))},
qm(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.c(A.z("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.c(A.z("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aR(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aR(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
qn(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cj(a){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.c(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.d6(s)},
t7(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.c(A.iO(b===A.r4(A.tO(A.ut(),r),q,t.S)?B.c8:B.c9,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ab(A.cM(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.br(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.c(A.iO(b===A.r4(A.tO(A.ut(),r),q,t.S)?B.c8:B.c9,s))}return o},
wU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.l(u.k))
q=v.G
s=A.t7(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.t7(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.c(B.hi)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ab(A.cM(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.br(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iO(B.ca,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.p)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iO(B.cb,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iO(B.cb,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.d6(n)},
d6:function d6(a){this.a=a},
hc:function hc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hb:function hb(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
je:function je(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
nW:function nW(a){this.a=a},
nX:function nX(a){this.a=a},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kD(a,a0){var s=0,r=A.bb(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$kD=A.bd(function(a1,a2){if(a1===1)return A.b8(a2,r)
for(;;)switch(s){case 0:p=A.d(new v.G.AudioContext())
o=t.m
n=A.x(t.N,o)
m=A.d(p.createGain())
l=A.d(p.createGain())
k=A.d(p.createGain())
j=A.d(p.createGain())
i=A.d(p.createGain())
h=A.d(p.createGain())
g=A.d(p.createGain())
f=A.d(p.createGain())
e=A.d(p.createGain())
d=A.d(p.createGain())
c=A.d(p.createConvolver())
b=new A.ht(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.b_,A.x(o,t.h6))
b.iI(p,a0)
p=A.o(a).i("T<1,2>")
s=3
return A.aa(A.lt(A.io(new A.T(a,p),p.i("bv<al>(n.E)").a(new A.kE(b)),p.i("n.E"),t.mj),t.c),$async$kD)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.ju():n
c.buffer=p
q=b
s=1
break
case 1:return A.b9(q,r)}})
return A.ba($async$kD,r)},
ht:function ht(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.p2=!1},
kE:function kE(a){this.a=a},
kG:function kG(a,b){this.a=a
this.b=b},
kF:function kF(a,b){this.a=a
this.b=b},
kH:function kH(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v7(a,b,c,d,e,f,g){var s=new A.kx(c,f,b,g,new A.b(d.a,d.b,d.c),e,a)
s.iK(a,b,c,d,0,e,f,g)
return s},
v3(a,b){var s=new A.kh(b)
s.iH(a,b)
return s},
v6(a){var s,r,q,p,o,n=t.z
n=A.x(n,n)
for(s=new A.T(a,A.o(a).i("T<1,2>")).gt(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.az(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.kt(A.c5(n,r,t.a))
n.iJ(a)
return n},
yI(a,b){var s,r,q,p=b>>>0
for(s=new A.dg(a),r=t.gS,s=new A.by(s,s.gq(0),r.i("by<M.E>")),r=r.i("M.E");s.m();){q=s.d
p=A.uk(p,q==null?r.a(q):q)}return p&2147483647},
hu:function hu(a,b){this.a=a
this.b=b},
kx:function kx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ky:function ky(){},
kh:function kh(a){this.a=a},
ki:function ki(){},
eT:function eT(){},
kj:function kj(){},
kt:function kt(a){this.a=a},
kv:function kv(){},
kw:function kw(){},
ku:function ku(){},
q_:function q_(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kz:function kz(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a){this.a=a},
kB:function kB(){},
fH:function fH(a,b){this.a=a
this.b=b},
kU:function kU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
lm:function lm(a){this.a=a},
iW:function iW(a,b,c,d,e,f,g,h,i,j){var _=this
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
lA:function lA(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
lB:function lB(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=0
this.$ti=b},
i9:function i9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1
_.w=!0},
ip:function ip(a){this.a=a},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mv:function mv(a,b){this.a=a
this.b=b},
fz(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.be(a)
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
cg:function cg(a){this.a=a
this.b=0},
n1:function n1(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
na:function na(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wr(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.rO(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.ie(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.jC(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.c9(800,0,!1,r)
p=new Float32Array(8064)
o=J.ie(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.jA(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.c9(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).ga4()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.n3(a,new A.lA(a,A.x(t.m,r)),b,c,A.a4(t.N),j,i,h,g,q,p,A.x(r,t.hX),o,n,m,B.eE,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.ip(l),a,A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k))
k.iR(a,b,c)
return k},
n3:function n3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.az=a
_.aH=b
_.b_=c
_.b0=d
_.dw=_.hf=1
_.dI=_.dH=_.hx=_.hw=_.hv=_.hu=_.ht=_.hs=_.dG=_.dF=_.dE=_.dD=_.dC=_.dB=_.dA=_.hr=_.hq=_.hp=_.dz=_.ho=_.hn=_.hm=_.hl=_.hk=_.hj=_.hi=_.hh=_.hg=_.ah=$
_.c7=null
_.fj=e
_.fN=_.fM=_.fL=_.fK=_.fJ=_.fI=_.fH=_.fG=_.fF=_.fE=_.fD=_.fC=_.fB=_.fA=_.fz=_.fw=_.fv=_.fu=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.c8=$
_.c9=0
_.dd=_.dc=_.da=_.d9=_.d8=_.d7=_.d6=$
_.cd=_.cc=_.cb=_.ca=_.bA=_.aZ=null
_.bB=$
_.fQ=_.fP=_.fO=!1
_.kW=1
_.de=f
_.df=g
_.kX=h
_.fR=i
_.ce=0
_.fS=j
_.kY=k
_.dg=0
_.dh=l
_.kZ=1
_.di=!1
_.bC=0
_.dj=m
_.bD=0
_.fT=n
_.fU=o
_.fX=_.fW=_.fV=1
_.fY=0.4
_.dk=p
_.fZ=q
_.dl=r
_.dm=s
_.dn=a0
_.h_=_.dt=_.ds=_.dr=_.dq=0
_.h0=null
_.h1=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.ha=_.dv=_.du=_.h9=_.h8=_.l1=_.l0=_.l_=_.h7=_.h6=_.h5=_.h4=_.h3=_.h2=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.hb=a7
_.hc=a8
_.hd=a9
_.he=b0},
u_(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.ad(0,c).aY(f.ad(0,c)).ga4(),r=A.pc(g)
return A.u2(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
hl(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.be(a)
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
u2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.hl(a,A.hl(a,A.hl(a,A.hl(a,A.hl(a,A.hl(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
pc(a){return new A.a7((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
y8(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aI(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.af(),i=A.af(),h=A.af()
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
h.b=l}s=j.cV()
if(typeof s!=="number")return s.X()
s=B.d.aD(s*255)
r=i.cV()
if(typeof r!=="number")return r.X()
r=B.d.aD(r*255)
q=h.cV()
if(typeof q!=="number")return q.X()
return new A.a7(s,r,B.d.aD(q*255))},
fO:function fO(){},
jO:function jO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
jC:function jC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jA:function jA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
n4:function n4(){},
n5:function n5(a){this.a=a},
n6:function n6(a){this.a=a},
o_:function o_(){},
nq:function nq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
j6(a,b,c){return new A.b(a,b,c)},
t1(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
kT:function kT(a){this.a=a},
vo(a,b,c){var s=new A.hQ(a,c,null,b)
s.iM(a,null,null,b,c)
return s},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
vB(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.eh(new A.Q(B.eQ,t.gl.a(new A.ld(a)),t.ns),t.no)
return s==null?null:new A.ec(s)},
vA(a){if(a.a!==21)return null
if(a.e)return B.cS
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cT
return B.cR},
bL:function bL(a,b){this.a=a
this.b=b},
la:function la(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ec:function ec(a){this.a=a},
ld:function ld(a){this.a=a},
w9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.C(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.iC(s,new A.b(o,n,m),q,p,l,j)
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
iC:function iC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yK(a){var s,r,q,p=A.x(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.c(B.d5)
p.k(0,q,r.b)}return p},
k_(a){var s,r,q,p,o,n=a.gS().bi(0)
B.a.Y(n)
s=t.z
r=A.x(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.p)(n),++p){o=n[p]
r.k(0,o,A.tJ(a.h(0,o)))}return A.c5(r,t.N,s)},
tJ(a){var s
if(t.f.b(a))return A.k_(A.yK(a))
if(t.j.b(a)){s=t.z
return A.ao(J.e0(a,A.zF(),s),s)}if(a==null||A.bU(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dv)
return a}throw A.c(A.ac("presentation snapshot contains unsupported value "+J.e_(a).n(0),null,null))},
mM:function mM(a){this.a=a},
rP(a,b,c){var s=A.qA(b),r=A.qA(a)
if(c!==2)A.k(A.ay(c,"version","unsupported save version"))
return new A.ep(c,s,r)},
qA(a){var s,r,q,p,o=A.o(a).i("a1<1>"),n=A.L(new A.a1(a,o),o.i("n.E"))
B.a.Y(n)
o=t.z
s=A.x(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.p)(n),++q){p=n[q]
s.k(0,p,A.tI(a.h(0,p)))}return A.c5(s,t.N,o)},
tI(a){var s,r,q,p
if(t.f.b(a)){s=A.x(t.N,t.z)
for(r=a.gO(),r=r.gt(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.c(B.dp)
s.k(0,p,q.b)}return A.qA(s)}if(t.j.b(a)){r=t.z
return A.ao(J.e0(a,A.zH(),r),r)}if(a==null||A.bU(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dw)
return a}throw A.c(A.ac("save contains unsupported value "+J.e_(a).n(0),null,null))},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function ng(){},
dE:function dE(a,b){this.a=a
this.b=b},
rp(a,b,c,d,e,f,g){return new A.lw(a,b,c,d,e,f,g,A.f([],t.mc),A.f([],t.ag))},
rq(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aF(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.c(B.dn)
r=e.h(0,"runSeed")
q=A.aF(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aF(p)||p<1||typeof o!="number")throw A.c(B.dz)
if(!isFinite(480))throw A.c(A.ay(480,"daySeconds","must be finite and > 0"))
n=new A.hZ(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ac("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.w0(a3,A.aU(a,s,m))
k=A.vl(l,A.aU(b,s,m),n)
j=A.rr(d)
A.vO(A.aU(a0,s,m)).ko(j)
m=A.aU(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bU(f))A.k(B.d9)
return A.rp(d,q,j,n,l,k,new A.hO(i,h,g,f))},
xY(a){var s
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
dn:function dn(a,b){this.a=a
this.b=b},
hY:function hY(){},
lx:function lx(a,b){this.a=a
this.b=b},
lw:function lw(a,b,c,d,e,f,g,h,i){var _=this
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
ly:function ly(a){this.a=a},
lz:function lz(){},
v8(a){var s,r,q,p,o,n,m="modelScale",l=A.k6(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.b7(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.c(B.dg)
s=A.da(l,"houseId")
r=A.da(l,"sourceRef")
q=J.e0(A.k3(l,"rooms"),new A.kJ(k),t.fS)
q=A.L(q,q.$ti.i("a5.E"))
q.$flags=1
p=J.e0(A.k3(l,"portals"),new A.kK(k),t.gE)
p=A.L(p,p.$ti.i("a5.E"))
p.$flags=1
o=J.e0(A.k3(l,"stairs"),new A.kL(),t.d2)
o=A.L(o,o.$ti.i("a5.E"))
o.$flags=1
n=J.e0(A.k3(l,"exteriorCells"),new A.kM(),t.N)
n=A.L(n,n.$ti.i("a5.E"))
n.$flags=1
return new A.kI(s,r,q,p,o)},
v9(a,b){var s=A.k6(a,"room"),r=A.da(s,"id"),q=A.u8(s.h(0,"origin"),"origin",b),p=A.u8(s.h(0,"size"),"size",b),o=J.e0(A.k3(s,"windows"),new A.kO(b),t.lJ)
o=A.L(o,o.$ti.i("a5.E"))
o.$flags=1
return new A.e3(r,q,p,o)},
k6(a,b){return t.P.b(a)?a:A.hg(b+" is not an object")},
k3(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.hg(b+" is not a list")},
da(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hg(b+" is not a string")},
hj(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.hg(b+" is not finite")},
yX(a,b){var s,r
if(t.j.b(a)){s=J.ax(a)
s=s.gq(a)!==3||s.R(a,new A.pg())}else s=!0
if(s)return A.hg(b+" is not a finite vec3")
s=A.f([],t.n)
for(r=J.O(a);r.m();)s.push(A.b7(r.gp()))
return s},
u8(a,b,c){var s,r,q,p=A.f([],t.n)
for(s=A.yX(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q]*c)
return p},
hg(a){return A.k(A.ac(a,null,null))},
kI:function kI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(){},
kM:function kM(){},
kN:function kN(a){this.a=a},
e3:function e3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kO:function kO(a){this.a=a},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
e2:function e2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e4:function e4(a){this.b=a},
pg:function pg(){},
hB:function hB(a,b){this.a=a
this.b=b
this.d=null},
kW:function kW(a){this.a=a},
ir:function ir(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lI:function lI(){this.b=0},
nc:function nc(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
aT:function aT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lf:function lf(){},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(){},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
zP(a){var s,r,q,p,o,n,m,l
a.B()
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
return new A.bN(B.Q,p,new Uint16Array(A.U(a.b)),new A.ho(new A.A(s.a,s.b,s.c),new A.A(s.d,s.e,s.f)))},
zQ(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
a3.B()
s=t.S
r=A.x(s,t.L)
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
throw A.c(A.z("QHMX triangle "+m+" crosses material slots "+h+", "+g+", "+n[i].x,null))}k=r.h(0,h)
if(k==null){k=A.f([],o)
r.k(0,h,k)}B.a.J(k,A.f([l,j,i],o))}e=A.f([],t.bp)
q=r.$ti.i("a1<1>")
q=A.L(new A.a1(r,q),q.i("n.E"))
B.a.Y(q)
p=q.length
k=t.ph
d=0
for(;d<q.length;q.length===p||(0,A.p)(q),++d){h=q[d]
g=r.h(0,h)
g.toString
c=A.x(s,s)
b=A.f([],k)
a=A.f([],o)
for(f=g.length,a0=0;a0<g.length;g.length===f||(0,A.p)(g),++a0){a1=g[a0]
a2=c.h(0,a1)
if(a2==null){a2=b.length
c.k(0,a1,a2)}if(a2===b.length){if(!(a1>=0&&a1<n.length))return A.e(n,a1)
B.a.l(b,n[a1])}B.a.l(a,a2)}B.a.l(e,new A.hU(h,A.zP(new A.i5(b,new Uint16Array(A.U(a)),A.xN(b)))))}return e},
xN(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.hT(r,q,p,o,n,m)},
hU:function hU(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
lg:function lg(){},
z7(a){var s,r,q,p=new A.lJ(A.f([],t.ph),A.f([],t.t),A.x(t.N,t.S))
for(s=0;s<4;++s)A.y0(p,a,B.bu[s],10.5,10.5,8.03,0.42)
p.u(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.u(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.u(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.u(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.u(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.u(1,11,0,11,-0.5,-0.35,10.58)
p.u(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.u(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aT(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aT(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.b7(r,new A.aT(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b7(r,q,new A.aT(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aT(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aT(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b7(q,new A.aT(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b7(q,r,new A.aT(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.u(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.yA(p,10.5,10.5,8.03,10.88)
A.xP(p,10.5,10.5,10.88)
A.xX(p,10.5,10.5,8.03)
A.y3(p,a,10.5)
A.yF(p,10.5,10.5)
A.xM(p,10.5)
return p.kt()},
y0(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.f([],t.jX)
for(s=b6.b,r=s.length,q=B.z!==b7,p=B.i!==b7,o=B.j===b7,n=B.I===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.p)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.d3(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.an(i),b=J.O(h.a),h=new A.I(b,h.b,h.$ti.i("I<1>"));h.m();){a=b.gp()
if(!a.Q||a.ar(i)!==b7)continue
B:{if(!p||o){a0=g+a.a9(i)
break B}if(!q||n){a0=e+a.a9(i)
break B}a0=null}B.a.l(b4,new A.d3(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.j?b8:b9
r=t.i
a1=A.at([0,s],r)
a2=A.at([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.p)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.L(a1,a1.$ti.c)
B.a.Y(a4)
a5=A.L(a2,a2.$ti.c)
B.a.Y(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.e(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.e(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.e(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.R(b4,new A.p1(b0,b1,b2,b3)))continue
switch(m){case 0:b5.u(0,b1,b3,0,b0,b2,r)
break
case 2:b5.u(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.u(0,0,b3,b1,r,b2,b0)
break
case 1:b5.u(0,s,b3,b1,b8,b2,b0)
break}}A.y2(b5,b4,b7,b8,b9,c1)
A.y1(b5,b4,b7,b8,b9,c1)},
y1(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
y2(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.yD(a2,g,a4,a5,a6,a7,q)}},
yD(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
yA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.u(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.u(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.u(4,i,p,-0.38,j,q,-0.44)
a.u(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.u(5,h+0.5,p,o,h-0.5,r,q)}},
xP(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.u(0,g+0.35,k,n,g-0.35,l,q)
a.u(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.u(5,d+0.1,o,m,d-0.1,r,p)}}},
xX(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.u(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.u(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.u(6,j,b+0.06,d,k,b,e)}a.u(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
y3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.a9("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.u(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.u(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.u(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.u(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.u(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)
k=r-0.18
a.u(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.u(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
yF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
xM(a,b){var s,r
a.u(0,6.7,1,-4.05,-2.5,0,-4.4)
a.u(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.u(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.u(7,b+3,0,-4.55,-3,-0.08,-5.2)},
d3:function d3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p1:function p1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zG(a,b,c,d){var s,r,q,p,o,n=A.r8(a,c,b)
if(n!=null&&!n.e){s=n.b
return new A.dl(B.cX,s)}r=A.ur(a,c,b)
if(r!=null)return new A.dl(B.cY,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.us(a,c,b)!=null)return B.d2
q=A.uq(a,b,c,d)
if(q!=null){p=d.c3(q.c)
o=q.y
return new A.dl(B.d_,o==null?"inspect the "+p.b:"inspect "+o)}return B.d1},
uq(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a0==null)return null
s=c.e.h(0,b)
if(s==null)return null
for(r=a0.lD(b),q=J.O(r.a),r=new A.I(q,r.b,r.$ti.i("I<1>")),p=a0.c,o=s.d,n=o.a,m=o.b,o=o.c,l=null,k=3;r.m();){j=q.gp()
if(!j.x)continue
i=a0.c3(j.c)
h=j.f.a
g=j.hX(i,p)
f=a.a
e=new A.b(n+(h.a*p+0)-f.a,m+(h.b*p+(g.a+g.b)*0.5)-f.b,o+(h.c*p+0)-f.c)
d=e.gq(0)
if(d<0.01||d>3)continue
h=e.ga4()
f=a.b
if(Math.acos(B.d.K(h.a*f.a+h.b*f.b+h.c*f.c,-1,1))>0.5236||d>=k)continue
k=d
l=j}return l},
cR:function cR(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.c=b},
uf(a,b){var s,r=new A.cg(new Float32Array(5376)),q=new A.cg(new Float32Array(5376)),p=new A.cg(new Float32Array(5376)),o=new A.cg(new Float32Array(5376)),n=b.d,m=a.aG(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cp(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
A.xC(r,b,m)
k+=m.b
q.cp(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.xF(p,a,b,m,B.bu[s])
for(l=a.an(b.a),k=J.O(l.a),l=new A.I(k,l.b,l.$ti.i("I<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.tx(o,b,m,j,!0)}A.xA(p,b,m)
A.xD(p,a,b,m)
return new A.nd(B.o.aL(r.a,0,r.b),B.o.aL(q.a,0,q.b),B.o.aL(p.a,0,p.b),B.o.aL(o.a,0,o.b))},
z5(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cg(new Float32Array(5376))
r=a.aG(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.ty(s,b,r,c,q)
return B.o.aL(s.a,0,s.b)},
z6(a,b){var s,r,q,p=new A.cg(new Float32Array(5376)),o=a.aG(b)
for(s=a.an(b.a),r=J.O(s.a),s=new A.I(r,s.b,s.$ti.i("I<1>"));s.m();){q=r.gp()
if(q.at==null||q.as)continue
A.tx(p,b,o,q,!1)}return B.o.aL(p.a,0,p.b)},
xC(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aI(e/0.22)
for(r=c+0.004,q=a1.a,p=d+q,o=c+0.014,n=0;n<s;++n){m=b+n*0.22+0.018
l=(n&1)===0?7952963:7031607
A.v(a,new A.b(d,r,m),new A.b(p,o,m+0.15),l)}r=a0.a
p=r==="hall"
if(p||r==="landing"){k=p?1:0.82
j=d+(q-k)*0.5
q=j+k
e=b+e
A.v(a,new A.b(j,c+0.016,b+0.18),new A.b(q,c+0.026,e-0.18),6443866)
A.v(a,new A.b(j+0.08,c+0.027,b+0.22),new A.b(q-0.08,c+0.033,e-0.22),8548460)}if(r==="living-room"){A.v(a,new A.b(d+1.15,c+0.018,b+2.15),new A.b(d+4.7,c+0.03,b+4.35),5589578)
A.v(a,new A.b(d+1.28,c+0.031,b+2.28),new A.b(d+4.57,c+0.037,b+4.22),7824746)}return}if(e==="floor-linoleum"){for(e=b+0.18,r=d+0.08,q=c+0.004,p=d+a1.a-0.08,o=c+0.012,n=0;n<5;++n){m=e+n*0.62
i=(n&1)===0?7764332:6843233
A.v(a,new A.b(r,q,m),new A.b(p,o,m+0.5),i)}return}if(e==="floor-tiles"){for(e=d+0.08,r=b+0.08,q=c+0.004,p=c+0.012,h=0;h<4;++h)for(g=e+h*0.86,o=g+0.78,f=0;f<3;++f){m=r+f*0.86
i=(h+f&1)===0?12170408:10657172
A.v(a,new A.b(g,q,m),new A.b(o,p,m+0.78),i)}return}if(e==="floor-concrete"){A.v(a,new A.b(d+0.08,c+0.004,b+0.08),new A.b(d+a1.a-0.08,c+0.014,b+a1.c-0.08),7828331)
A.v(a,new A.b(d+2.2,c+0.015,b+2.45),new A.b(d+2.68,c+0.021,b+2.93),4868420)}},
xD(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
switch(b3.a){case"living-room":a7=a8+b4.a
s=a7-0.48
r=b0+b4.c*0.4
A.v(b1,new A.b(s,a9,r-0.85),new A.b(a7,a9+2.55,r+0.85),7824724)
A.v(b1,new A.b(s-0.38,a9+0.02,r-0.72),new A.b(a7+0.05,a9+0.16,r+0.72),a2)
q=a9+2.34
A.v(b1,new A.b(s-0.52,a9+2.18,r-0.94),new A.b(a7+0.08,q,r+0.94),a3)
p=s-0.02
A.v(b1,new A.b(p,a9+0.45,r-0.48),new A.b(a7+0.03,a9+1.48,r+0.48),2170396)
for(a7=s-0.08,o=a9+0.28,n=r-0.42,m=a9+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.v(b1,new A.b(a7+j,o,n),new A.b(p+j,m,l),a4)}for(a7=s-0.01,p=a9+1.55,o=s+0.04,n=a9+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.v(b1,new A.b(a7,p,l+j),new A.b(o,n,m+j),a2)}for(a7=[r-0.68,r+0.56],p=s-0.42,o=a9+2,n=s-0.26,m=a9+2.2,i=0;i<2;++i){h=a7[i]
A.v(b1,new A.b(p,o,h),new A.b(n,m,h+0.16),a5)}A.v(b1,new A.b(s-0.27,q,r-0.58),new A.b(s-0.07,a9+2.52,r-0.38),a6)
A.v(b1,new A.b(s-0.25,q,r+0.34),new A.b(s-0.06,a9+2.49,r+0.52),a3)
break
case"hall":A.xE(b1,b2,b3,b4,a5,a4)
A.v(b1,new A.b(a8+0.28,a9+0.78,b0+0.52),new A.b(a8+0.68,a9+0.88,b0+2.15),a5)
for(a7=[b0+0.66,b0+2.01],q=a8+0.34,p=a8+0.42,o=a9+0.8,i=0;i<2;++i){g=a7[i]
A.v(b1,new A.b(q,a9,g),new A.b(p,o,g+0.08),a3)}f=a8+1.22
a7=b0+0.1
A.v(b1,new A.b(f-0.28,a9+2.35,b0+0.02),new A.b(f+0.28,a9+3.02,a7),a5)
A.v(b1,new A.b(f-0.13,a9+2.48,a7),new A.b(f+0.13,a9+2.72,b0+0.15),a2)
a7=b0+0.08
A.v(b1,new A.b(f-0.025,a9+1.82,a7),new A.b(f+0.025,a9+2.36,b0+0.13),a4)
for(q=a8+1.7,p=a9+1.74,o=a8+1.78,n=a9+1.84,m=b0+0.16,k=0;k<3;++k){l=k*0.36
A.v(b1,new A.b(q+l,p,a7),new A.b(o+l,n,m),a4)}a7=a9+0.72
A.v(b1,new A.b(a8+0.86,a9,b0+0.62),new A.b(a8+1.1,a7,b0+0.9),a6)
A.v(b1,new A.b(a8+0.91,a7,b0+0.68),new A.b(a8+1.05,a9+0.82,b0+0.84),a5)
break
case"kitchen":a7=a8+b4.a
e=a7-0.62
q=a9+1.28
A.v(b1,new A.b(e,a9,b0+0.72),new A.b(a7,q,b0+2.18),a4)
A.v(b1,new A.b(e-0.08,q,b0+0.62),new A.b(a7+0.04,a9+1.38,b0+2.28),a2)
for(a7=e+0.12,q=a9+1.39,p=b0+0.88,o=e+0.4,n=a9+1.45,m=b0+1.16,k=0;k<3;++k){l=k*0.4
A.v(b1,new A.b(a7,q,p+l),new A.b(o,n,m+l),2170396)}a7=a9+0.82
q=a9+0.94
A.v(b1,new A.b(a8+1.05,a7,b0+1.15),new A.b(a8+3.1,q,b0+2.35),a3)
for(p=[a8+1.18,a8+2.94],o=b0+1.28,n=b0+1.38,i=0;i<2;++i){d=p[i]
A.v(b1,new A.b(d,a9,o),new A.b(d+0.1,a7,n),a5)}A.v(b1,new A.b(a8+0.48,a9+1.72,b0+2.74),new A.b(a8+2.55,a9+1.84,b0+2.88),a5)
a7=a9+1.02
A.v(b1,new A.b(a8+3.38,q,b0+1.26),new A.b(a8+4.48,a7,b0+2.22),a6)
q=b0+1.66
p=b0+1.74
A.v(b1,new A.b(a8+3.82,a7,q),new A.b(a8+3.9,a9+1.34,p),a4)
A.v(b1,new A.b(a8+3.72,a9+1.3,q),new A.b(a8+4,a9+1.36,p),a4)
for(a7=a8+1.38,q=a9+0.95,p=b0+1.48,o=a8+1.78,n=a9+1.05,m=b0+1.88,k=0;k<2;++k){l=k*0.55
A.v(b1,new A.b(a7+l,q,p),new A.b(o+l,n,m),a6)}break
case"cellar":for(a7=a8+0.35,q=b0+1.05,p=a8+0.58,o=a9+0.55,n=b0+2,k=0;k<4;++k){m=k*0.28
A.v(b1,new A.b(a7+m,a9,q),new A.b(p+m,o+B.c.W(k,2)*0.18,n),a5)}A.v(b1,new A.b(a8+2.55,a9+0.15,b0+0.38),new A.b(a8+2.72,a9+1.55,b0+0.56),a4)
A.v(b1,new A.b(a8+2.42,a9+1.28,b0+0.32),new A.b(a8+2.86,a9+1.38,b0+0.65),a6)
A.v(b1,new A.b(a8+0.4,a9+1.72,b0+0.45),new A.b(a8+3.4,a9+1.82,b0+0.58),a4)
A.v(b1,new A.b(a8+1.9,a9+1.58,b0+0.42),new A.b(a8+2.06,a9+1.76,b0+0.61),a4)
A.v(b1,new A.b(a8+1.84,a9+1.62,b0+0.55),new A.b(a8+2.12,a9+1.7,b0+0.64),a4)
break
case"bedroom":c=a8+0.85
b=b0+2.08
a7=a9+0.72
A.v(b1,new A.b(c,a9+0.42,b),new A.b(c+3.65,a7,b+2.05),6972528)
A.v(b1,new A.b(c-0.1,a7,b-0.12),new A.b(c+3.75,a9+1.28,b+0.1),a3)
A.v(b1,new A.b(c+0.22,a9+0.74,b+1.35),new A.b(c+1.05,a9+0.9,b+1.82),a6)
a7=a8+b4.a
q=a9+1.48
A.v(b1,new A.b(a7-0.95,a9+0.78,b0+0.58),new A.b(a7-0.18,q,b0+1.42),a3)
A.v(b1,new A.b(a7-1.04,q,b0+0.48),new A.b(a7-0.1,a9+1.57,b0+1.52),a5)
for(a7=[b+0.22,b+0.78],q=c+0.36,p=a9+0.75,o=c+1.12,n=a9+0.92,i=0;i<2;++i){a=a7[i]
A.v(b1,new A.b(q,p,a),new A.b(o,n,a+0.42),a6)}for(a7=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=a9+0.08,n=a9+0.44,i=0;i<2;++i){a0=a7[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.v(b1,new A.b(a0,o,g),new A.b(l,n,g+0.1),a5)}}break
case"landing":a7=a8+0.48
A.v(b1,new A.b(a8+0.34,a9+0.02,b0+1.62),new A.b(a7,a9+1.06,b0+2.7),a5)
for(q=a9+0.82,p=b0+1.68,o=a8+2.14,n=a9+0.9,m=b0+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.v(b1,new A.b(a7,q+l,p+j),new A.b(o,n+l,m+j),a3)}for(a7=a8+0.62,q=a9+1.02,p=b0+1.74,o=a8+0.7,n=a9+1.78,m=b0+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.v(b1,new A.b(a7+l,q,p+j),new A.b(o+l,n,m+j),a5)}break
case"bathroom":a7=a9+0.62
A.v(b1,new A.b(a8+0.3,a9+0.04,b0+0.38),new A.b(a8+2.15,a7,b0+1.22),a6)
q=a9+0.72
A.v(b1,new A.b(a8+0.42,a7,b0+0.48),new A.b(a8+2.03,q,b0+1.12),a2)
a7=a8+b4.a
p=b0+b4.c
A.v(b1,new A.b(a7-0.78,a9+0.12,p-0.88),new A.b(a7-0.18,a9+1.75,p-0.28),a6)
A.v(b1,new A.b(a7-0.86,a9+1.68,p-0.98),new A.b(a7-0.1,a9+1.82,p-0.18),a4)
p=b0+0.68
a7=a9+1.18
o=b0+0.78
A.v(b1,new A.b(a8+0.86,q,p),new A.b(a8+0.96,a7,o),a4)
A.v(b1,new A.b(a8+0.7,a9+1.12,p),new A.b(a8+1.12,a7,o),a4)
break
case"spare-room":A.v(b1,new A.b(a8+1,a9,b0+0.7),new A.b(a8+3.25,a9+1.65,b0+2),6972528)
A.v(b1,new A.b(a8+0.8,a9+1.6,b0+0.52),new A.b(a8+3.45,a9+1.74,b0+2.18),a3)
a7=a8+b4.a
q=b0+b4.c
A.v(b1,new A.b(a7-1.05,a9,q-1.02),new A.b(a7-0.25,a9+0.72,q-0.24),a5)
for(p=a7-0.98,o=a9+0.18,n=q-1.12,a7-=0.28,m=a9+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.v(b1,new A.b(p,o+l,n),new A.b(a7,m+l,q),a4)}break}},
xE(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gam(a)
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
A.v(a0,new A.b(p,c,b-0.18),new A.b(o,c+0.11,b+0.18),a4)}k=a+0.08
h=a+0.34
A.v(a0,new A.b(p-0.1,k,g),new A.b(p,h,i),3680031)
A.v(a0,new A.b(o,k,g),new A.b(o+0.1,h,i),3680031)
h=a+1.52
k=h<m?h:m
A.v(a0,new A.b(o+0.16,a+1.42,g+0.25),new A.b(o+0.25,k,i-0.25),a5)},
xF(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.j?a3.a:a3.c,a=A.f([],t.a9)
for(s=a2.a,r=a1.an(s),q=J.O(r.a),r=new A.I(q,r.b,r.$ti.i("I<1>"));r.m();){p=q.gp()
if(!p.as&&p.ar(s)===a4)a.push(new A.d2(p.a9(s),p.a9(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.d2(q,q+n.e,p,p+n.f))}}s=t.i
r=A.at([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.p)(a),++o){m=a[o]
r.J(0,A.f([m.a,m.b],p))}l=A.L(r,r.$ti.c)
B.a.Y(l)
s=A.at([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.p)(a),++o){m=a[o]
s.J(0,A.f([m.c,m.d],p))}k=A.L(s,s.$ti.c)
B.a.Y(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.e(l,j)
f=l[j]
if(!(i<r))return A.e(l,i)
e=l[i]
if(!(h<s))return A.e(k,h)
d=k[h]
c=k[g]
if(B.a.R(a,new A.oF(f,e,d,c)))continue
A.yY(a0,a2,a3,a4,f,e,d,c)}A.xG(a0,a2,a3,a4,b,a)},
xG(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.oD(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.oD(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.oD(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.oD(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
for(r=b5.length,l=0;l<b5.length;b5.length===r||(0,A.p)(b5),++l){k=b5[l]
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
if(o>0)A.aQ(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.aQ(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.aQ(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.aQ(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.K(a9),o=r.i("r(1)").a(new A.oE(b3)),a9=B.a.gt(a9),r=new A.I(a9,o,r.i("I<1>")),o=b2.c,i=b3!==B.i,e=b3===B.j,c=b2.a;r.m();){b=a9.gp()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.aQ(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.aQ(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.aQ(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.aQ(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.xH(b0,b1,b2,b3,b,p)}},
xH(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
if(a2==="hall"||a7.r||a7.f<1)return
s=a6===B.i||a6===B.j?a5.a:a5.c
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
A.aQ(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.aQ(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.aQ(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.aQ(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.aQ(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
oD(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.yN(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aQ(a,b,c,d,n,o,g,h,i,j)}},
yN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.f([new A.eB(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.f([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.p)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.eB(j,m))
j=k.b
if(n<j)B.a.l(p,new A.eB(n,j))}h=p}return h},
xA(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.h3.v(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.v(a,new A.b(p-0.025,n,o-0.025),new A.b(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.v(a,new A.b(p-0.14,k,o-0.14),new A.b(p+0.14,n,o+0.14),j)
A.v(a,new A.b(p-0.09,n-0.16,o-0.09),new A.b(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.v(a,new A.b(h-0.24,k,e-0.24),new A.b(h+0.24,s,e+0.24),l)
j=s-0.034
A.v(a,new A.b(h-0.15,j,e-0.15),new A.b(h+0.15,k,e+0.15),l)
A.v(a,new A.b(h-0.055,s-0.048,e-0.055),new A.b(h+0.055,j,e+0.055),l)},
aQ(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.v(a,new A.b(r+e,q+g,p),new A.b(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.v(a,new A.b(r+e,q+g,s-i),new A.b(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.v(a,new A.b(s-i,q+g,p+e),new A.b(s,q+h,p+f),j)
return
case 3:A.v(a,new A.b(r,q+g,p+e),new A.b(r+i,q+h,p+f),j)
return}},
v(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.b(o,n,m),k=c.a,j=new A.b(k,n,m),i=c.b,h=new A.b(k,i,m),g=new A.b(o,i,m)
m=c.c
s=new A.b(o,n,m)
r=new A.b(k,n,m)
q=new A.b(k,i,m)
p=new A.b(o,i,m)
a.al(j,l,g,h,d)
a.al(s,r,q,p,d)
a.al(l,s,p,g,d)
a.al(r,j,h,q,d)
a.al(l,j,r,s,d)
a.al(g,p,q,h,d)},
yY(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
default:o=m}a.cp(s.U(0,o),r.U(0,o),q.U(0,o),p.U(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.yZ(b,d)
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
default:l=m}A.v(a,o,l,9145227)},
yZ(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
tx(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.ar(d),b=a3.a9(d),a=b+a3.w
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
A.v(a0,new A.b(r+l,s,d),new A.b(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.v(a0,new A.b(l,s,d),new A.b(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.v(a0,new A.b(r+n,s+m,d),new A.b(r+h,j,i),q)
A.v(a0,new A.b(k,s,d),new A.b(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.v(a0,new A.b(r+l,s,k),new A.b(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.v(a0,new A.b(l,s,k),new A.b(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.v(a0,new A.b(r+n,s+m,k),new A.b(r+h,i,d),q)
A.v(a0,new A.b(j,s,k),new A.b(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.v(a0,new A.b(n,s,d+k),new A.b(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.v(a0,new A.b(n,s,k),new A.b(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.v(a0,new A.b(n,s+e,d+m),new A.b(r,j,d+l),q)
A.v(a0,new A.b(n,s,i),new A.b(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.v(a0,new A.b(r,s,d+l),new A.b(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.v(a0,new A.b(r,s,l),new A.b(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.v(a0,new A.b(r,s+e,d+n),new A.b(k,j,d+m),q)
A.v(a0,new A.b(r,s,i),new A.b(k,s+0.05,l),q)
break}if(a4)A.ty(a0,a1,a2,a3,q)
A.xB(a0,a1,a2,a3)},
xB(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.a9(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.ar(d)
d=a0-0.035
if(0>d)d=0
r=s!==B.i
q=!r||s===B.j?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.035
A.aQ(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.j,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.aQ(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.aQ(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.aQ(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
ty(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.ar(o),m=d.a9(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.v(a,new A.b(p,s,o),new A.b(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.v(a,new A.b(p,s,o-d.w),new A.b(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.v(a,new A.b(p-d.w,s,o),new A.b(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.v(a,new A.b(p,s,o),new A.b(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.v(a,new A.b(p,s,o),new A.b(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.v(a,new A.b(p,s,o-0.055),new A.b(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.v(a,new A.b(p-0.055,s,o),new A.b(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.v(a,new A.b(p,s,o),new A.b(p+0.055,s+r,o+d.w),e)
break}},
nd:function nd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oF:function oF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oE:function oE(a){this.a=a},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a,b){this.a=a
this.b=b},
rr(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.f([],b4),b6=t.aN,b7=A.f([],b6),b8=A.f([],t.jn),b9=t.N
b9=new A.lG(b5,b7,b8,A.x(b9,t.J),A.x(b9,t.T),new A.lI())
s=t.E
r=t.s
q=t.cs
p=t.jc
B.a.J(b5,A.f([new A.aM(n,B.a6,new A.b(4.5,3.9,4),new A.b(0,0,0),A.f([new A.b0("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.b0("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.f(["hall-living","kitchen-living"],r),A.f([new A.b3(m,l,new A.b(1,1.95,1),!1,!1,m),new A.b3(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.au,"wallpaper-stripes",i,h,B.C),new A.aM(g,B.a6,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.f([new A.b0("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.f(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.f([new A.b3("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.f([new A.bk(e,e,new A.b(0.2,2.175,0.35)),new A.bk(d,d,new A.b(2.2,2.55,3)),new A.bk(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.C),new A.aM(a,B.a6,new A.b(4.5,3.75,3),new A.b(0,0,4),A.f([new A.b0("kitchen-south",B.j,1.5,1.05,1.2,1.65,!1,!0),new A.b0("kitchen-west",B.I,1,1.2,0.9,1.5,!1,!0)],s),A.f(["hall-kitchen","kitchen-living"],r),A.f([new A.b3(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.b3("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.b3("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.f([new A.bk(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.ej),new A.aM("cellar",B.a6,new A.b(4,3,4),new A.b(1,-3,2),B.bq,A.f(["hall-cellar"],r),B.eC,B.au,"wallpaper-damp","floor-concrete","ceiling-pipes",B.C),new A.aM("bedroom",B.a7,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.f([new A.b0("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.b0("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.f(["landing-bedroom"],r),A.f([new A.b3(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.b3("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.f([new A.bk(a3,a3,new A.b(2.2,1.125,2.5)),new A.bk(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.C),new A.aM(a5,B.a7,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bq,A.f(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.f([new A.b3("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.au,b,i,h,B.C),new A.aM(a7,B.a7,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.f([new A.b0("bathroom-east",B.z,0.9,1.5,0.7,1.5,!0,!0)],s),A.f([a6],r),A.f([new A.b3("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.f([new A.bk(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.C),new A.aM(a9,B.a7,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.f([new A.b0("spare-south",B.j,1.8,1.05,0.9,1.35,!1,!0)],s),A.f(["landing-spare"],r),A.f([new A.b3("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.f([new A.bk(b0,b0,new A.b(0.5,1.8,0.3)),new A.bk(b1,b1,new A.b(3.7,2.1,2.7)),new A.bk(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.C)],b4))
B.a.J(b7,A.f([A.cW(g,"outside","kit-front-door-recessed",!0,B.i,B.j,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cW(g,n,b3,!1,B.I,B.z,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cW(g,a,b3,!1,B.I,B.z,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cW(a,n,b3,!1,B.i,B.j,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cW(g,"cellar","kit-cellar-door-grille",!1,B.j,B.z,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cW(g,a5,o,!1,B.z,B.z,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cW(a5,"bedroom",b3,!1,B.I,B.z,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cW(a5,a7,b3,!1,B.j,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cW(a5,a9,b3,!1,B.j,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.l(b8,new A.cY("hall-stairs",f,B.eu,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
b9.j_()
b9.jt()
b4=b5.length
if(b4!==8)A.k(A.l("expected eight rooms, got "+b4))
b4=b9.gm4()
if(b4!==9)A.k(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gbk(b8)
b4=B.a.gN(B.a.gbk(b8).c)
if(b4!==6.3)A.k(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.l("expected nine physical portals"))
b9.kf()
b9.ke()
return b9},
lG:function lG(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
lX:function lX(){},
lY:function lY(){},
lW:function lW(){},
lZ:function lZ(a){this.a=a},
m_:function m_(){},
r8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga4()
j=a.b
if(Math.acos(B.d.K(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
ur(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.an(c),r=J.O(s.a),s=new A.I(r,s.b,s.$ti.i("I<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.lG(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.tR(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
us(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=A.z_(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.tR(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
tR(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.K(a.ga4().bz(c.b),-1,1))<=e},
z_(a,b,c){var s=a.aG(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
le:function le(){this.a=null
this.b=0},
nr:function nr(){},
ns:function ns(){},
vS(a){var s=A.hk(a,"inventory asset"),r=A.cL(s,"id"),q=A.cL(s,"kind")
A.cL(s,"source")
A.cL(s,"proxy")
A.cL(s,"pivot")
s=A.hk(s.h(0,"bounds"),"inventory bounds")
return new A.c8(r,q,new A.m4(A.k8(s.h(0,"min"),"bounds.min"),A.k8(s.h(0,"max"),"bounds.max")))},
vT(a){var s,r,q,p,o,n,m,l="stateKey",k=A.hk(a,"inventory placement"),j=A.hk(k.h(0,"visibility"),"placement visibility"),i=A.hk(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.cL(k,"id"),f=A.cL(k,"roomId"),e=A.cL(k,"assetId")
A.cL(k,"role")
s=typeof k.h(0,"socket")=="string"?A.C(k.h(0,"socket")):null
k=A.hk(k.h(0,"transform"),"inventory transform")
r=A.k8(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.dq)
q=A.k8(k.h(0,"position"),"transform.position")
p=A.k8(k.h(0,"rotation"),"transform.rotation")
A.cL(j,"layer")
if(typeof j.h(0,l)=="string")A.C(j.h(0,l))
o=J.ab(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.C(i.h(0,"focusId")):null
m=t.P.b(h)?A.yt(h,"radius"):0
return new A.c0(g,f,e,s,new A.m6(q,p,r),o,n,m)},
hk(a,b){return t.P.b(a)?a:A.cJ(b+" is not an object")},
cL(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.cJ(b+" is not a string")},
yt(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.cJ(b+" is not finite")},
k8(a,b){var s
if(t.j.b(a)){s=J.ax(a)
s=s.gq(a)!==3||s.R(a,new A.pf())}else s=!0
if(s)return A.cJ(b+" is not a finite vec3")
s=J.ax(a)
return new A.b(A.b7(s.h(a,0)),A.b7(s.h(a,1)),A.b7(s.h(a,2)))},
cJ(a){return A.k(A.ac(a,null,null))},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lO:function lO(a){this.a=a},
lM:function lM(a){this.a=a},
lN:function lN(a){this.a=a},
c8:function c8(a,b,c){this.a=a
this.b=b
this.f=c},
c0:function c0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
m6:function m6(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(a,b){this.a=a
this.b=b},
pf:function pf(){},
m5:function m5(a){this.a=a},
cc:function cc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i6:function i6(a){this.a=a},
lP:function lP(a){this.a=a},
cW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bl(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
f1:function f1(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
b0:function b0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bl:function bl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(){},
cY:function cY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aM:function aM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
vN(a){return A.vM(a)},
vM(a){var s,r,q,p,o,n,m=A.tZ(a,"sound emitter"),l=t.N,k=A.x(l,l)
for(s=A.tZ(m.h(0,"cues"),"sound emitter cues").gO(),s=s.gt(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.c(B.dm)
k.k(0,r.a,q)}s=A.qZ(m,"id")
r=A.qZ(m,"roomId")
p=A.qZ(m,"placementId")
o=A.yW(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.eG("gain is not a number")
return new A.c7(s,r,p,o,n,A.c5(k,l,l))},
tZ(a,b){return t.P.b(a)?a:A.eG(b+" is not an object")},
qZ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.eG(b+" is not a string")},
yW(a,b){var s
if(t.j.b(a)){s=J.ax(a)
s=s.gq(a)!==3||s.R(a,new A.pe())}else s=!0
if(s)throw A.c(A.ac(b+" must be a numeric vec3",null,null))
s=J.ax(a)
return new A.b(A.b7(s.h(a,0)),A.b7(s.h(a,1)),A.b7(s.h(a,2)))},
eG(a){return A.k(A.ac(a,null,null))},
lR:function lR(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a){this.a=a},
lT:function lT(a){this.a=a},
lU:function lU(){},
c7:function c7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lH:function lH(){this.b=this.a=null},
f6:function f6(a){this.a=a},
lQ:function lQ(){this.b=this.a=null},
eg:function eg(a,b){this.a=a
this.b=b},
pe:function pe(){},
rs(a,b,c,d,e,f){var s=t.N
return new A.lV(e,f,c,a,A.c5(A.aU(d,s,s),s,s),A.ao(b,s))},
rt(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.x(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
h.k(0,p.a,new A.fm(p.ax,p.ay))}s=A.x(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.p)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.x(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.p)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l){j=o[l]
i.k(0,j.a,new A.fe(j.d,j.r))}return A.rs(a.r.b,B.n,i,B.bB,h,s)},
vO(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.f4
r=a3.h(0,"mantleHistory")
if(r==null)r=B.eJ
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aF(a2)||!q.b(s)||!t.j.b(r))throw A.c(B.dk)
p=t.N
o=A.x(p,t.ku)
for(n=a.gO(),n=n.gt(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b9)
l=A.aU(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bU(j)||!A.bU(i))A.k(B.b9)
o.k(0,k,new A.fm(j,i))}h=A.x(p,t.y)
for(n=a0.gO(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bU(l.b))throw A.c(B.di)
h.k(0,k,A.an(l.b))}g=A.x(p,t.mK)
for(n=a1.gO(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b8)
l=A.aU(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bU(f)||!A.bU(e))A.k(B.b8)
g.k(0,k,new A.fe(f,e))}d=A.x(p,p)
for(q=s.gO(),q=q.gt(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.c(B.dG)
d.k(0,n,A.C(p.b))}c=A.f([],t.s)
for(q=J.O(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.c(B.d3)
B.a.l(c,b)}return A.rs(a2,c,g,d,o,h)},
qT(a,b){return a.a.a===b.a&&a.a7(0,b.gc5(b))},
lV:function lV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fm:function fm(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
vy(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.mq(e,A.K(e).c)
q=new A.ew()
q.cD((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.f_(a,q,2,r,1+s,A.at(["time"],t.N))
break
case 3:A.f_(a,q,3,r,1+s,A.at(["place"],t.N))
break
case 4:A.f_(a,q,4,r,2+s,p)
A.vu(a,q,4)
break
case 5:A.f_(a,q,5,r,s,p)
A.vs(a,q,5)
break
case 6:A.f_(a,q,6,r,s,p)
A.vt(a,q)
A.vx(a,q,6)
break
case 7:A.vv(a,q,7)
break
default:if(s>0)A.f_(a,q,b,r,s,p)}},
vr(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.vw(a,b,c))return!1
return!0},
f_(a,b,c,d,e,f){var s,r,q,p,o=A.f([],t.r)
for(s=a.b,s=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>"));s.m();){r=s.d
if(A.vr(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cB(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.e(o,p)
A.rn(a,b,o[p],f)}},
rn(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aU(B.a.gN(o).a,n,n)
if(d==null)s=A.f(B.w.slice(0),t.s)
else{n=t.nn
s=A.L(new A.Q(B.w,t.dA.a(new A.l9(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.au(n)
if(!(n>=0&&n<s.length))return A.e(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.ea(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.au(n)
if(!(n>=0&&n<p.length))return A.e(p,n)
m.k(0,r,p[n])}a.d3(c.a,m,B.a.gN(o).b)},
vu(a,b,c){var s=A.ro(a,b,c)
if(!a.bu(s))return
a.eg(c,t.G.a(s),0,B.ar,null)},
ro(a,b,c){var s,r,q,p,o,n=t.N,m=A.x(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.w[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.au(p)
if(!(o>=0&&o<p))return A.e(q,o)
m.k(0,r,q[o])}}return m},
vs(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.r)
for(s=a.b,s=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cB(i,b)
s=i.length
if(0>=s)return A.e(i,0)
q=i[0]
if(1>=s)return A.e(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aU(B.a.gN(i).a,s,s)
r=p.c
n=A.aU(B.a.gN(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.w[m]
k=o.h(0,l)
j=s.ea(l,k==null?"":k)
k=j.length
if(k!==0){k=b.au(k)
if(!(k>=0&&k<j.length))return A.e(j,k)
o.k(0,l,j[k])}}a.d3(q.a,o,B.a.gN(i).b)
a.d3(p.a,n,B.a.gN(r).b)},
vt(a,b){var s,r,q=A.f([],t.r)
for(s=a.b,r=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.au(r)
if(!(r>=0&&r<q.length))return A.e(q,r)
s.aa(0,q[r].a)},
vx(a,b,c){var s,r,q=A.f([],t.r)
for(s=a.b,s=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.au(s)
if(!(s>=0&&s<q.length))return A.e(q,s)
A.rn(a,b,q[s],null)},
vv(a,b,c){var s=c+1,r=A.ro(a,b,s)
if(!a.bu(r))return
a.eg(s,t.G.a(r),0,B.ar,null)},
vw(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gN(b.c).c===B.a9}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gN(b.c).c===B.a9}if(c===21)return b.e
return!1},
l9:function l9(a){this.a=a},
wL(a){var s,r,q,p,o=t.N,n=A.x(o,t.a)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p=A.az(q==null?B.n:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.nV(n)},
ml(a,b,c){var s,r,q,p=t.z
p=A.x(p,p)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.im(A.c5(p,q,q),b,c)},
rC(a){var s=t.N
return A.ml(t.P.a(a.h(0,"fields")).bd(0,new A.mm(),s,s),A.b7(a.h(0,"shakiness")),A.vD(B.ey,A.C(a.h(0,"hand")),t.bU))},
vC(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.f([],t.b1)
for(s=J.O(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.rC(r.a(s.gp())))
s=A.br(a.h(0,"corroborator"))
q=A.an(a.h(0,"locked"))
p=A.tD(a.h(0,"lastReadDay"))
return new A.bu(n,m,l,s,q,p,o==null?null:A.rC(r.a(o)))},
cS:function cS(a,b){this.a=a
this.b=b},
nV:function nV(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
mm:function mm(){},
mn:function mn(a){this.a=a},
bu:function bu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rz(a){return new A.m8(a,A.x(t.S,t.R),A.a4(t.N),A.f([],t.t))},
w0(a,b){var s,r,q,p,o=A.rz(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.uZ(s.a(b.h(0,"tags")),t.N))
for(s=J.O(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.vC(r.a(s.gp()))
q.k(0,p.a,p)}return o},
m8:function m8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
mf:function mf(a,b){this.a=a
this.b=b},
kP:function kP(){},
dd:function dd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kQ:function kQ(){},
mk:function mk(){},
mj:function mj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mJ:function mJ(){},
mI:function mI(a,b){this.b=a
this.c=b},
mK:function mK(){},
qc(a){if(!isFinite(0))A.k(A.ay(0,"interpolation",null))
return new A.n9(a)},
fr:function fr(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
n9:function n9(a){this.a=a},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
n8(a,b,c,d,e){var s="83748ae844b6-dd0453e3d464-dirty",r=A.k0("RENDERER_SHA"),q=A.k0("GAME_SHA"),p=A.k0("DART_SDK_VERSION"),o=A.k0("LOCKFILE_SHA256"),n=A.k0("PROJECT_VERSION"),m=A.mq(b,A.K(b).c)
m=A.L(m,A.o(m).c)
B.a.Y(m)
m=new A.n7(a,e,s,A.ao(m,t.N),r,q,p,o,n,c,d)
m.iS(a,s,b,c,d,q,o,e,n,r,p)
return m},
k0(a){var s=B.eY.h(0,a)
return s.length===0?null:s},
n7:function n7(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
rl(a,b,c,d,e,f,g){var s=A.L(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ac("saved day-loop resources must not be negative",null,null))
return new A.l0(c,g,b,a,e,d===!0,s)},
vl(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.c(B.dc)
s=A.f([],t.b2)
for(r=J.O(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.c(B.dl)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aF(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.c(B.db)
f=A.eh(new A.Q(B.bo,q.a(new A.l1(h)),p),o)
e=A.eh(new A.Q(B.bt,n.a(new A.l2(g)),m),l)
if(f==null||e==null)throw A.c(B.dB)
B.a.l(s,new A.er(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aF(d)||!A.aF(c)||!A.aF(b)||!A.bU(a))throw A.c(B.dr)
return A.rl(c,d,a1,a,b,s,a3)},
bm:function bm(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
ia:function ia(a,b){this.a=a
this.b=b},
dL:function dL(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.b=a
this.c=b},
dK:function dK(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
m0:function m0(a){this.c=a},
m2:function m2(a,b){this.a=a
this.b=b},
m3:function m3(){},
rO(){var s=A.qF(B.n),r=A.qF(B.n),q=new A.nf(B.A,s,r)
if(!isFinite(0))A.k(B.d4)
if(!B.a.a7(r,B.a.gc5(s)))A.k(B.ds)
if(q.a===B.A&&q.b!==0&&!q.e)A.k(B.d7)
return q},
qF(a){var s,r,q,p=A.f([],t.s),o=A.a4(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.c(B.dA)
B.a.l(p,q)}return p},
bO:function bO(a,b){this.a=a
this.b=b},
ne:function ne(){},
ce:function ce(){},
nf:function nf(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hZ:function hZ(a,b){this.a=a
this.b=6
this.c=b},
uu(a){var s=B.d.K(a,0,1)
if(s<=0.5)return A.tX(4491468,16777215,s*2)
return A.tX(16777215,16759637,(s-0.5)*2)},
uv(a){var s=B.d.K(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga4()},
tX(a,b,c){var s,r=new A.p5(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.ir()
s=r.$1(8)
if(typeof s!=="number")return s.ir()
r=r.$1(0)
if(typeof r!=="number")return A.kb(r)
return(q<<16|s<<8|r)>>>0},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
et(a){var s,r,q=A.x(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.m();){r=s.gp()
q.k(0,B.c.n(r.a),r.b)}return q},
nw:function nw(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
nx:function nx(){},
ny:function ny(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a,b){this.a=a
this.b=b},
nB:function nB(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
nC:function nC(){},
nD:function nD(){},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
kS:function kS(a){this.a=a
this.b=null},
vp(a){var s=A.f([],t.Y)
s=new A.l4(A.P(a,"div","door",null),s)
s.iN(a)
return s},
l4:function l4(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.z=_.y=_.x=_.w=null
_.Q=!1},
l5:function l5(a,b){this.a=a
this.b=b},
l6:function l6(a){this.a=a},
l7:function l7(a,b){this.a=a
this.b=b},
l8:function l8(a,b){this.a=a
this.b=b},
vz(a){var s=new A.lb(a,A.d(a.createElement("div")))
s.bn(a)
s.iO(a)
return s},
lb:function lb(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
lc:function lc(a){this.a=a},
vL(a){var s=new A.lE(a,A.d(a.createElement("div")))
s.bn(a)
s.iP(a)
return s},
lE:function lE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lF:function lF(a){this.a=a},
m9:function m9(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
ma:function ma(a){this.a=a},
mb:function mb(a){this.a=a},
mc:function mc(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(){},
me:function me(){},
P(a,b,c,d){var s=A.d(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
tM(a){var s,r,q,p=A.d(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.f([],t.Y)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
fl:function fl(){},
mS:function mS(a){this.a=a
this.b=null},
wt(a){var s=t.N,r=t.m
s=new A.nk(A.x(s,r),A.x(s,r),A.x(s,t.aL),a,A.d(a.createElement("div")))
s.bn(a)
s.iU(a)
return s},
nk:function nk(a,b,c,d,e){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=null
_.Q=a
_.as=b
_.at=c
_.CW=_.ch=_.ay=_.ax=null
_.a=d
_.b=e
_.e=_.d=_.c=null},
nn:function nn(){},
no:function no(){},
np:function np(a){this.a=a},
nm:function nm(a,b,c){this.a=a
this.b=b
this.c=c},
nl:function nl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function eq(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
aA:function aA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.f=d
_.r=e},
wu(a){var s=new A.nt(a,A.d(a.createElement("div")))
s.bn(a)
s.iV(a)
return s},
nt:function nt(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
v5(a){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.od)
for(s=a.d,s=new A.T(s,A.o(s).i("T<1,2>")).gt(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gO(),n=n.gt(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.bX(p+m+":"+k,m,l.a,l.b,j))}}B.a.Z(i,new A.ko())
return new A.kn(A.ao(i,t.D),A.a4(t.N))},
bX:function bX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kn:function kn(a,b){this.a=a
this.b=b},
kp:function kp(){},
ko:function ko(){},
wK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.ib
s=t.g
r=A.x(s,t.kz)
q=A.o(e).i("a1<1>")
p=A.L(new A.a1(e,q),q.i("n.E"))
B.a.Y(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.p)(p),++l){k=p[l]
for(j=e.h(0,k).gO(),j=j.gt(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bo(new A.bD(B.hY,k+" has an out-of-range authored day "+h+"."))
g=A.wJ(k,h,i.b,m)
if(g instanceof A.bo)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.k(0,new A.bn(k,h,f.a,f.b),o.a(g).a)}}return new A.jc(new A.jb(r,A.a4(t.N),A.a4(s),A.f([],t.bl),B.F))},
wJ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.x(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bn[p]
n=o.b
m=n+"."
l=A.f([],q)
for(k=a0.gO(),k=k.gt(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.a_(h,m))continue
g=A.mO(B.b.bP(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bo(new A.bD(B.hZ,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.bs
B.a.l(l,new A.bP(g,i.b,f))}if(l.length===0)continue
B.a.Z(l,new A.nP())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bo(new A.bD(B.ci,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bo(new A.bD(B.ci,a+" day "+s+" has no authored tiers."))
return new A.jB(c)},
jb:function jb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
nT:function nT(a){this.a=a},
nS:function nS(a){this.a=a},
nQ:function nQ(a){this.a=a},
nR:function nR(){},
nP:function nP(){},
jc:function jc(a){this.a=a},
jB:function jB(a){this.a=a},
zi(a){var s,r,q,p=A.a4(t.N)
for(s=new A.T(a,A.o(a).i("T<1,2>")).gt(0);s.m();){r=s.d
for(q=r.b.gao(),q=q.gt(q);q.m();)if(q.gp().gS().R(0,new A.pn())){p.l(0,r.a)
break}}s=A.L(p,p.$ti.c)
B.a.Y(s)
return s},
zh(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.az(b,!0,s)
B.a.Y(r)
q=new A.ew()
q.cD((a^913741)>>>0)
p=q.au(4)
if(!(p>=0&&p<4))return A.e(B.bm,p)
o=B.bm[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.az(r,!0,s)
B.a.cB(m,q)
s=A.nz(m,0,A.dX(n,"count",t.S),A.K(m).c).bi(0)
B.a.Y(s)
return s},
pn:function pn(){},
t2(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aF(r)||!A.aF(q)||!A.aF(p)||r<1||q<0||q>23||p<0)return null
return new A.bn(s,r,q,p)},
wI(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a4(t.N)
for(s=t.j,q=J.O(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.l(0,p)}o=A.a4(t.g)
for(s=J.O(s.a(a.h(0,j)));s.m();){n=A.t2(s.gp())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.v4(m)
if(!s&&l==null)return i
return new A.jd(r,o,l)},
v4(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.t2(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aF(p))if(!(p<0))if(A.bU(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.eh(new A.Q(B.bn,t.nw.a(new A.kk(r)),t.na),t.kM)
k=A.eh(new A.Q(B.eU,t.bQ.a(new A.kl(q)),t.cB),t.nq)
m=o==null
j=m?h:A.eh(new A.Q(B.eo,t.hg.a(new A.km(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.hp(s,l,k,p,j,n)},
bh:function bh(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
cF:function cF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ci:function ci(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function nO(){},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
nU:function nU(){},
bo:function bo(a){this.a=a},
j9:function j9(a){this.a=a},
j8:function j8(a){this.a=a},
fE:function fE(a,b){this.a=a
this.b=b},
qK(a){var s=$.as
if(s===a&&B.b.v(A.C(a.b.className),"open"))return
if(s!=null)s.aE()
$.as=a
s=$.aO.j()
s.w=!1
s.aU()
$.cl=0
a.co()},
pb(a){if($.as===a&&B.b.v(A.C(a.b.className),"open"))a.aE()
else A.qK(a)},
pu(){var s=0,r=A.bb(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$pu=A.bd(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.i(A.d(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.F.b=c3
$.qE=A.i(A.d(c2.document).getElementById("fps"))
$.bp.b=$.uO().bO(A.j4().gbf().h(0,"renderer"))
A.y9()
a6=$.F.j()
a7=A.a(A.d(c2.window).innerWidth)>0?A.a(A.d(c2.window).innerWidth):800
a6.width=a7
a7=$.F.j()
a6=A.a(A.d(c2.window).innerHeight)>0?A.a(A.d(c2.window).innerHeight):600
a7.height=a6
n=A.i(c3.getContext("webgl2"))
if(n==null){$.bp.b=new A.dd(B.ab,$.bp.j().b,$.bp.j().c,!0,"webgl2 unavailable")
h=B.am.kJ($.bp.j())
h.aQ()
$.cI.b=h
A.u1()
A.d9("no-webgl2")
c2=A.i(A.d(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bp.j().a===B.V){a6=t.dg
a7=t.N
a8=t.hL
a9=t.p9
b0=t.S
b1=t.fP
b2=new A.fZ(n,A.a($.F.j().width),A.a($.F.j().height),A.f([],a6),A.x(a7,t.l0),A.f([],t.jj),A.x(a7,a8),A.x(a7,a9),A.x(a7,a8),A.x(a7,a9),A.f([],a6),A.x(b0,a8),A.x(b0,a9),A.x(a7,t.bS),A.f([],t.jU),B.eA,A.x(a7,t.lu),A.x(a7,b1),A.x(a7,b1),B.dH,B.fv)}else b2=new A.ev(n,A.a($.F.j().width),A.a($.F.j().height),A.j4().gbf().h(0,"render")==="legacy",$.bp.j().d,$.bp.j().e)
m=b2
$.bc=m instanceof A.fZ?m:null
$.k2=m instanceof A.ev?m:null
a6=B.am.d4($.bp.j(),m)
a6.aQ()
$.cI.b=a6}catch(c5){l=A.ag(c5)
a6=$.bp.j()
$.bp.b=new A.dd(B.ab,!0,a6.c,!0,"pixeldart initialization failed")
$.k2=new A.ev(n,A.a($.F.j().width),A.a($.F.j().height),A.j4().gbf().h(0,"render")==="legacy",!0,$.bp.j().e)
a6=B.am.d4($.bp.j(),$.k2)
a6.aQ()
$.cI.b=a6
$.F.j().setAttribute("data-renderer-error",A.q(l))}A.u1()
p=4
A.d9("initializing")
$.bG.b=new A.kU(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.qQ=A.an(A.d(A.d(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bG.j()
a6.f=$.qQ?0.5:1
a6=A.d(c2.window)
a7=t.N
a8=A.d(a6.document)
a9=new A.i9(a8,A.a4(a7),A.a4(a7))
a6.addEventListener("keydown",A.a8(a9.gjE()))
a6.addEventListener("keyup",A.a8(a9.gjG()))
a6.addEventListener("mousemove",A.a8(a9.gjK()))
a8.addEventListener("pointerlockchange",A.a8(a9.gjI()))
$.aO.b=a9
$.tv.b=new A.i7(A.f([],t.oX),t.lv)
a9=$.F.j()
a6=A.a(A.d(c2.window).innerWidth)>0?A.a(A.d(c2.window).innerWidth):800
a9.width=a6
a6=$.F.j()
a8=A.a(A.d(c2.window).innerHeight)>0?A.a(A.d(c2.window).innerHeight):600
a6.height=a8
A.d9("renderer")
if($.bp.j().a===B.ab){a6=$.k2
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.h()}$.eL=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.c(h)}}A.d9("text")
a6=$.kf()
s=7
return A.aa(a6.bJ(),$async$pu)
case 7:k=a6.m3()
j=A.wK(k)
if(!(j instanceof A.jc)){i=t.cq.a(j).a
h=i.b
throw A.c("Failed to build visitors: "+h)}$.aP.b=j.a
$.jV.b=A.v5(k)
h=A.x(a7,t.a)
for(a8=t.j,b4=0;b4<5;++b4){g=B.w[b4]
a9=A.C(g)
b0=a6.c
b0===$&&A.h()
b5=b0.h(0,a9)
a9=a8.b(b5)?A.az(b5,!0,a7):B.n
J.bK(h,g,a9)}f=A.wL(h)
$.qx.b=new A.kT(B.cK)
e=$.qx.j().lI(new A.pv(f))
if(e.a==null){h=B.b_.au(2147483647)
if(!isFinite(480))A.k(A.ay(480,"daySeconds","must be finite and > 0"))
b6=new A.hZ(1,480)
b6.b=10
b7=A.rz(f)
h=A.rp(42,1+h,A.rr(42),b6,b7,A.rl(6,16,b7,null,6,B.eB,b6),new A.hO(0,0,0,!1))}else{h=e.a
h.toString
h=A.rq(h,f)}$.V.b=h
h=$.pY()
a6=e.a
h.dV(a6==null?null:a6.c.h(0,"inventoryInspections"))
$.cI.j().aM(A.qc($.V.j().gdQ()))
if(e.b!=null){h=e.b
h.toString
A.eM(h)}h=$.aP.j()
a6=A.zh($.V.j().b,A.zi(k.b))
h.siB(A.mq(a6,A.K(a6).c))
A.d9("house")
$.Y.b=$.V.j().c
a6=$.bc
if(a6!=null)a6.kp($.Y.j())
$.dU.b=$.V.j().d
h=new A.b(5.5,1.65,3.5)
$.r0=$.qN=$.qW=h
d=h.ad(0,new A.b(0,1.3499999999999999,0))
$.hf.b=new A.hB(d,J.rb(d,new A.b(0,1.2000000000000002,0)))
$.eE.b=new A.le()
$.bq.b=A.rO()
$.aE="hall"
h=e.a
c=A.w9(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.ld($.Y.j())){h=c.b
$.r0=$.qN=$.qW=h
$.bV=c.c
$.dV=c.d
$.aE=c.a
b=h.ad(0,new A.b(0,1.3499999999999999,0))
h=$.hf.j()
h.skq(b)
h.b=J.rb(b,new A.b(0,1.2000000000000002,0))
h=$.hf.j()
a6=$.Y.j()
a9=c.e
b0=c.f
h.lT($.aE,$.eS(),a6,b0,a9)
A.eM("restored position")}h=$.V.j().e
a6=$.dU.j()
$.V.j()
$.jX.b=new A.m2(h,a6)
a6=A.d(c2.document)
h=$.V.j().e
a9=$.dU.j()
b0=$.jX.j()
b1=A.d(a6.createElement("div"))
b0=new A.m9(h,a9,b0,a6,b1)
b0.bn(a6)
b1.setAttribute("aria-label","The Journal")
A.d(b1.appendChild(A.P(a6,"div","journal-title","The Journal")))
b8=A.P(a6,"div","journal-pages",null)
a9=A.P(a6,"div","page page-left",null)
b0.y!==$&&A.B()
b0.y=a9
h=A.P(a6,"div","page page-right",null)
b0.z!==$&&A.B()
b0.z=h
A.d(b8.appendChild(a9))
A.d(b8.appendChild(h))
A.d(b1.appendChild(b8))
A.d(b1.appendChild(b0.j1()))
b9=A.P(a6,"div","tape-roll",null)
A.d(b9.style).setProperty("width","8rem")
h=A.P(a6,"div","tape-fill",null)
b0.as!==$&&A.B()
b0.as=h
A.d(b9.appendChild(h))
A.d(b1.appendChild(b9))
c0=A.P(a6,"div","consult",null)
A.d(c0.appendChild(A.P(a6,"div","consult-label","Cite an entry")))
h=A.P(a6,"div","entry-picker",null)
b0.at!==$&&A.B()
b0.at=h
a9=A.P(a6,"div","consult-result",null)
b0.ax!==$&&A.B()
b0.ax=a9
A.d(c0.appendChild(h))
A.d(c0.appendChild(a9))
A.d(b1.appendChild(c0))
c1=A.i(a6.documentElement)
if(t.m.b(c1)){A.d(c1.style).setProperty("--shake-max-deg","3deg")
A.d(c1.style).setProperty("--shake-max-px","2px")}$.jY.b=b0
$.jY.j().sbL(new A.pw())
h=A.d(c2.document)
a6=A.P(h,"div","prompt",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
A.d(a6.style).setProperty("transition-duration","0.3s")
A.d(A.i(h.body).appendChild(a6))
$.tw.b=new A.mS(a6)
a6=A.d(c2.document)
h=A.P(a6,"div","broadcast",null)
h.setAttribute("role","status")
h.setAttribute("aria-live","polite")
h.setAttribute("aria-atomic","true")
A.d(A.i(a6.body).appendChild(h))
$.tu.b=new A.kS(h)
h=A.d(c2.document)
a6=A.P(h,"div","ambient-notice",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
A.d(A.i(h.body).appendChild(a6))
$.oC.b=new A.kq(a6)
a6=A.vp(A.d(c2.document))
a6.slr(A.zz())
a6.slt(A.zB())
a6.sls(A.zA())
$.aD.b=a6
a6=e.a
a=A.wI(a6==null?null:a6.c.h(0,"visitors"))
if(a!=null&&$.aP.j().dV(a))A.yz()
h=$.jV.j()
a6=e.a
h.lU(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(a8.b(a0))for(h=J.O(a0);h.m();){a1=h.gp()
if(A.aF(a1))$.pd.l(0,a1)}h=A.wu(A.d(c2.document))
h.slA(new A.px())
h.sbL(new A.pH())
$.qy.b=h
h=A.vL(A.d(c2.document))
h.sbL(new A.pI())
$.qw.b=h
h=A.wt(A.d(c2.document))
h.slx(new A.pJ())
h.slz(new A.pK())
h.sly(new A.pL())
h.slv(new A.pM())
h.slw(new A.pN())
h.slB(new A.pO())
h.sbL(new A.py())
$.d7.b=h
h=A.vz(A.d(c2.document))
h.sbL(new A.pz())
h.slu(new A.pA())
$.jW.b=h
h=e.a
a2=A.vB(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.u0(a2)
a3=$.eL
if(a3!=null){A.d9("world")
h=$.Y.j()
a6=a3
a7=new A.nc(h,a6,A.x(a7,t.L))
a7.iT(h,a6)
$.eH=a7}h=B.b.v(A.C(A.d(A.d(c2.window).location).search),"shaders=live")
$.uc=h
if(h){h=$.eL
if(h!=null)h.bg()}A.u3()
A.d(c2.window).addEventListener("resize",A.a8(new A.pB()))
A.d(c2.window).addEventListener("keydown",A.a8(new A.pC()))
A.d(c2.window).addEventListener("keyup",A.a8(new A.pD()))
A.d(c2.window).addEventListener("keydown",A.a8(new A.pE()))
A.d(c2.window).addEventListener("click",A.a8(new A.pF()))
$.F.j().addEventListener("click",A.a8(new A.pG()))
A.eJ()
A.d9("raf")
A.a(A.d(c2.window).requestAnimationFrame(A.a8(A.um())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ag(c4)
a5=A.co(c4)
A.p7(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.b9(q,r)
case 2:return A.b8(o.at(-1),r)}})
return A.ba($async$pu,r)},
y9(){var s=v.G
A.d(s.window).addEventListener("error",A.a8(new A.p3()))
A.d(s.window).addEventListener("unhandledrejection",A.a8(new A.p4()))},
d9(a){if($.tG===a)return
$.tG=a
$.F.j().setAttribute("data-boot-phase",a)},
u1(){var s,r,q=$.cI.j().gba(),p=$.F.j(),o=A.j4().gbf().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.y))
p.setAttribute("data-renderer-diagnostics",B.r.bb(q.D(),null))
p=$.bc
s=p==null?null:p.x
if(s!=null)$.F.j().setAttribute("data-renderer-profile-fallback",s)
p=$.k2
r=p==null?null:p.y
if(r!=null)$.F.j().setAttribute("data-renderer-frame-submits",A.q(r))},
qU(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bq.j().a!==B.A){A.eM("save unavailable during rupture")
return}try{r=$.qx.j()
q=$.V.j()
p=t.N
o=t.z
s=A.x(p,o)
n=$.aE
m=$.eS()
l=$.bV
k=$.dV
j=$.hf.j().d
j=j==null?null:j.a.a
i=$.hf.j().d
J.bK(s,"player",new A.iC(n,m,l,k,j,i==null?null:i.b).D())
n=$.aP.j()
m=A.qf(n.b,p)
l=A.qf(n.c,t.g)
n=n.e
J.bK(s,"visitors",new A.jd(m,l,n==null?null:new A.hp(n.a,n.b,n.d,n.f,n.e,n.r)).D())
n=$.jV.j().b
n=A.L(n,A.o(n).c)
B.a.Y(n)
J.bK(s,"ambient",n)
n=A.L($.pd,A.o($.pd).c)
B.a.Y(n)
J.bK(s,"unverifiables",n)
J.bK(s,"inventoryInspections",$.pY().D())
n=$.qD
if(n!=null)J.bK(s,"ending",A.W(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.rt(q.c).D()
k=q.d
r.m5(A.rP(s,A.W(["houseSeed",n,"runSeed",m,"house",l,"time",A.W(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.D(),"journal",q.e.D(),"difficulty",q.r.D()],p,o),2))
A.eM(a)}catch(h){A.eM("save failed")}},
eM(a){var s=A.i(A.d(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.vJ(B.cQ,new A.pa(s),t.H)},
p7(a,b){var s,r,q,p
A.d9("error")
s=A.q(a)
r=A.zM(s,"\n"," ")
s=$.qE
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.d(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.F.j().setAttribute("data-boot-error",p)
A.d(s.console).error(p)},
tB(){var s,r
if($.qz)return
$.qz=!0
s=$.bH
r=s==null
if(!r)s.hW()
if(!r)s.ec("music")
B.a.l($.cm,"arm")},
eJ(){var s=0,r=A.bb(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$eJ=A.bd(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.aa(A.eI(),$async$eJ)
case 2:o=null
q=4
s=7
return A.aa(A.aG(A.d(A.d(v.G.window).fetch("res/manifest.json")),t.m),$async$eJ)
case 7:n=b
i=A
s=8
return A.aa(A.aG(A.d(n.json()),t.X),$async$eJ)
case 8:o=i.d(b)
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
if(k!=null&&typeof k==="string"){l=A.i(A.d(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.C(k)}s=9
return A.aa(A.lt(A.f([A.p6(o),A.p2(o)],t.iw),t.H),$async$eJ)
case 9:return A.b9(null,r)
case 1:return A.b8(p.at(-1),r)}})
return A.ba($async$eJ,r)},
eI(){var s=0,r=A.bb(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eI=A.bd(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.ex[f]
p=7
s=10
return A.aa(A.aG(A.d(A.d(i.window).fetch(n)),h),$async$eI)
case 10:m=a0
s=11
return A.aa(A.aG(A.d(m.text()),g),$async$eI)
case 11:l=a0
k=A.v8(B.r.bw(l,null))
e=$.Y.b
if(e===$.Y)A.k(A.a0(""))
k.e1(e)
e=$.F.b
if(e===$.F)A.k(A.a0(""))
e.setAttribute("data-house-manifest","validated")
e=$.F.b
if(e===$.F)A.k(A.a0(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.aa(A.k4(),$async$eI)
case 12:s=13
return A.aa(A.k5(),$async$eI)
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
case 5:$.F.j().setAttribute("data-house-manifest","unavailable")
A.d(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.b9(q,r)
case 2:return A.b8(o.at(-1),r)}})
return A.ba($async$eI,r)},
k4(){var s=0,r=A.bb(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$k4=A.bd(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.eq[c]
p=7
s=10
return A.aa(A.aG(A.d(A.d(g.window).fetch(n)),f),$async$k4)
case 10:m=b1
s=11
return A.aa(A.aG(A.d(m.text()),e),$async$k4)
case 11:l=b1
b=B.r.bw(l,null)
b=h.b(b)?b:A.cJ("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.cJ("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aF(a)?a:A.cJ("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.cJ("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.az(a,!0,d):A.cJ("assets is not a list")
a4=A.K(a3)
a5=a4.i("N<1,c8>")
a3=A.L(new A.N(a3,a4.i("c8(1)").a(A.zu()),a5),a5.i("a5.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.az(a,!0,d):A.cJ("placements is not a list")
a5=A.K(a4)
a6=a5.i("N<1,c0>")
a4=A.L(new A.N(a4,a5.i("c0(1)").a(A.zv()),a6),a6.i("a5.E"))
a4.$flags=1
k=new A.lL(a1,a2,a0,a3,a4)
a1=$.Y.b
if(a1===$.Y)A.k(A.a0(""))
k.e1(a1)
$.k1=k
a1=$.bc
if(a1!=null)a1.ib(k)
a1=$.F.b
if(a1===$.F)A.k(A.a0(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.F.b
if(a1===$.F)A.k(A.a0(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.F.b
if(a1===$.F)A.k(A.a0(""))
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
case 5:$.F.j().setAttribute("data-house-inventory","unavailable")
A.d(g.console).warn("authored house inventory unavailable: "+A.q(a8))
case 1:return A.b9(q,r)
case 2:return A.b8(o.at(-1),r)}})
return A.ba($async$k4,r)},
k5(){var s=0,r=A.bb(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$k5=A.bd(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.k1
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.eK[a4]
p=7
s=10
return A.aa(A.aG(A.d(A.d(a1.window).fetch(m)),a2),$async$k5)
case 10:l=b5
s=11
return A.aa(A.aG(A.d(l.text()),e),$async$k5)
case 11:k=b5
a5=B.r.bw(k,null)
a5=a0.b(a5)?a5:A.eG("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.az(a6,!0,a3):A.eG("emitters is not a list")
a8=A.K(a7)
a9=a8.i("N<1,c7>")
a7=A.L(new A.N(a7,a8.i("c7(1)").a(A.zK()),a9),a9.i("a5.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aF(a6)?a6:A.eG("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.eG("sourceRef is not a string")
j=new A.lR(a8,a9,a7)
a7=$.Y.b
if(a7===$.Y)A.k(A.a0(""))
j.m1(a7,b2)
$.tQ=j
i=A.x(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.p)(a7),++b0){h=a7[b0]
for(a9=h.f.gO(),a9=a9.gt(a9);a9.m();){g=a9.gp()
J.bK(i,h.a+":"+g.a,A.f([g.b],c))}}a7=$.Y.b
if(a7===$.Y)A.k(A.a0(""))
a8=A.v6(i)
a9=new A.kz(a7,A.c5(B.bC,e,d),a8)
a9.iL(a8,a7,B.bC)
$.oH=a9
a7=$.bH
if(a7!=null){a7.ch=a9
a7.b8()}a7=$.F.b
if(a7===$.F)A.k(A.a0(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.F.b
if(a7===$.F)A.k(A.a0(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.F.b
if(a7===$.F)A.k(A.a0(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.F.b
if(a7===$.F)A.k(A.a0(""))
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
case 5:$.oH=null
$.F.j().setAttribute("data-audio-planner","unavailable")
$.F.j().setAttribute("data-house-soundscape","unavailable")
A.d(a1.console).warn("authored house soundscape unavailable: "+A.q(n))
case 1:return A.b9(q,r)
case 2:return A.b8(o.at(-1),r)}})
return A.ba($async$k5,r)},
qC(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.O(t.a.b(s)?s:new A.bZ(s,A.K(s).i("bZ<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.C(q))}},
p2(a){var s=0,r=A.bb(t.H),q,p,o,n,m,l,k,j,i
var $async$p2=A.bd(function(b,c){if(b===1)return A.b8(c,r)
for(;;)switch(s){case 0:k=t.N
j=A.x(k,k)
k=a==null
A.qC(A.i(k?null:a.sfx),j,"")
A.qC(A.i(k?null:a.ir),j,"ir-")
q=A.i(k?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")j.k(0,"music","res/"+A.C(p))
i=$
s=2
return A.aa(A.kD(j,$.Y.j()),$async$p2)
case 2:o=i.bH=c
o.ch=$.oH
o.b8()
A.yy(o)
k=A.qP("brightness")
n=A.qa(k==null?"":k)
m=A.qP("high-contrast")==="true"
l=A.qP("strong-highlights")==="true"
if(n!=null){$.d7.j().e7("brightness",n)
A.tz("brightness",n)}k=$.d7.j()
q=k.ch
if(q!=null)q.checked=m
k=k.CW
if(k!=null)k.checked=l
A.oG("high-contrast",m)
A.oG("strong-highlights",l)
if($.qz){o.hW()
o.ec("music")}return A.b9(null,r)}})
return A.ba($async$p2,r)},
qY(a,b){var s
try{A.d(A.d(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
qP(a){var s,r
try{s=A.br(A.d(A.d(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
tz(a,b){var s
if(a!=="brightness")return
s=A.i(A.d(v.G.document).documentElement)
if(t.m.b(s))A.d(s.style).setProperty("filter","brightness("+A.q(B.d.K(b,0.6,1.4))+")")},
oG(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.i(A.d(v.G.document).documentElement)
if(r!=null)A.an(A.d(r.classList).toggle(s,b))},
qX(a,b){var s
try{A.d(A.d(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
qO(a){var s,r
try{s=A.br(A.d(A.d(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
yy(a){var s,r,q,p,o,n,m,l,k=A.x(t.N,t.i)
for(s=0;s<5;++s){r=B.ev[s]
q=A.qO(r)
p=A.qa(q==null?"":q)
if(p!=null)k.k(0,r,B.d.K(p,0,1))}o=A.qO("muted")==="true"
n=A.qO("mono")==="true"
q=k.h(0,"master")
m=k.h(0,"voice")
l=k.h(0,"effects")
a.aT(k.h(0,"ambience"),l,q,k.h(0,"music"),o,m)
a.e8(n)
for(q=new A.T(k,k.$ti.i("T<1,2>")).gt(0);q.m();){m=q.d
m.toString
l=$.d7.b
if(l===$.d7)A.k(A.a0(""))
l.e7(m.a,m.b)}q=$.d7.j()
m=q.ax
if(m!=null)m.checked=o
q=q.ay
if(q!=null)q.checked=n},
p6(a){var s=0,r=A.bb(t.H),q,p,o
var $async$p6=A.bd(function(b,c){if(b===1)return A.b8(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.x(p,p)
A.qC(A.i(a==null?null:a.tex),o,"")
p=$.eL
p=p==null?null:p.aA(o)
if(p==null)p=A.q0(t.H)
q=$.bc
q=q==null?null:q.aA(o)
s=2
return A.aa(A.lt(A.f([p,q==null?A.q0(t.H):q],t.iw),t.H),$async$p6)
case 2:return A.b9(null,r)}})
return A.ba($async$p6,r)},
u3(){var s,r,q=v.G,p=A.a(A.d(q.window).innerWidth),o=A.a(A.d(q.window).innerHeight)
q=$.F.j()
s=p>0?p:800
q.width=s
s=$.F.j()
q=o>0?o:600
s.height=q
q=$.eL
if(q!=null)q.aJ(A.a($.F.j().width),A.a($.F.j().height))
$.cI.j().aJ(A.a($.F.j().width),A.a($.F.j().height))
q=$.bc
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.F.j().setAttribute("data-renderer-surface",r)},
yv(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
A.b7(c2)
try{s=c2
if(!$.tP){$.qJ=s
$.tP=!0}e=s
d=$.qJ
if(typeof e!=="number")return e.ad()
r=(e-d)/1000
$.qJ=s
e=r
if(typeof e!=="number")return e.cw()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.ac()
if(e>0.25)r=0.25
A.yS(r)
if(!$.qL&&$.as==null){e=$.cl
d=r
if(typeof d!=="number")return A.kb(d)
d=$.cl=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.cw()
c=c<10}else c=!1
if(!c)break
$.qN=$.eS()
d=$.V.b
if(d===$.V)A.k(A.a0(""))
d.kl(0.008333333333333333)
d=$.uQ()
c=$.V.b
if(c===$.V)A.k(A.a0(""))
c=c.gap()
b=$.V.b
if(b===$.V)A.k(A.a0(""))
d=d.d_(c.a,b.gap().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){p=d[a]
B.a.l($.cm,"clock:"+p.a)}d=$.uR()
c=$.V.b
if(c===$.V)A.k(A.a0(""))
c=c.gap()
b=$.V.b
if(b===$.V)A.k(A.a0(""))
d=d.d_(c.a,b.gap().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){o=d[a]
B.a.l($.cm,"service:"+o.a+":"+o.b)}A.yV()
d=$.aP.b
if(d===$.aP)A.k(A.a0(""))
c=$.V.b
if(c===$.V)A.k(A.a0(""))
d.f=c.r.c>=0.5
d=d.d
a0=A.az(d,!1,e)
a0.$flags=3
a1=a0
B.a.F(d)
if(a1.length!==0){d=$.V.b
if(d===$.V)A.k(A.a0(""))
d.lJ(a1)}A.yR()
A.yU()
A.yT()
A.yQ(0.008333333333333333)
d=$.eE.b
if(d===$.eE)A.k(A.a0(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.bq.b
if(d===$.bq)A.k(A.a0(""))
n=d.a!==B.A
c=$.Y.b
if(c===$.Y)A.k(A.a0(""))
d.km(0.008333333333333333,c)
if(n){d=$.bq.b
if(d===$.bq)A.k(A.a0(""))
d=d.e}else d=!1
if(d)A.u4(!0)
d=$.cl-0.008333333333333333
$.cl=d
c=q
if(typeof c!=="number")return c.U()
q=c+1}m=B.d.K(d/0.008333333333333333,0,1)
e=$.r0=A.t1($.uS(),$.eS(),m)
l=$.bH
if(l!=null){d=l
c=Math.sin($.bV)
b=Math.cos($.bV)
a2=A.d(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aR(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.ie($.aE)
for(e=$.cm.length,a=0;a<$.cm.length;$.cm.length===e||(0,A.p)($.cm),++a){k=$.cm[a]
A.xW(l,k)}B.a.F($.cm)
$.F.j().setAttribute("data-audio-spatial-active",""+l.CW.a)
e=$.F.j()
d=l.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.F.j()
e=l.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}j=$.eL
if(j!=null){$.bG.j().dM($.hm(),$.bV,$.dV)
e=$.as===$.jY.j()?1:0
j.c9=e
$.tW=r
$.cI.j().aM(A.qc($.V.j().gdQ()))}else if($.bp.j().a===B.V){$.bG.j().dM($.hm(),$.bV,$.dV)
e=$.bc
if(e!=null){d=$.bG.j()
c=d.a
a3=new A.A(c.a,c.b,c.c)
c=d.b
a4=new A.A(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.rG(a3,a4,new A.A(d.a,d.b,d.c))
a7=A.q8(a5,60,1.0471975511965976,0.1)
e.go=new A.e7(a6,a7,a7.X(0,a6),a3,a4,0.1,60,a5)}e=$.bc
if(e!=null)e.iq($.Y.j(),$.aE)
e=$.bc
if(e!=null)e.ic($.Y.j(),$.aE,$.hm(),$.dU.j().gbm(),Math.sin(3.141592653589793*$.dU.j().gbm()))
if($.tV!==$.bq.j().a){$.tV=$.bq.j().a
$.qR=$.qR+1}e=$.bc
if(e!=null){d=s
if(typeof d!=="number")return d.m9()
d/=1000
c=$.qR
b=A.a(Math.max(0,$.V.j().b))
if(!isFinite(d)||d<0)A.k(A.ay(d,"timeSeconds",null))
if(b<0)A.k(A.z("frame clock seeds must be non-negative",null))
e.k4=d
e.ok=c
e.p1=b}e=$.bc
if(e!=null){d=$.bq.j()
c=$.qQ
a8=d.a
a9=d.geb()
b0=a9>0?B.d.K(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.aF
b=a8===B.L?0.45:1
if(d>=1)b3=a8===B.X?b0:1
else b3=0
if(d>=2)d=a8===B.aD?b0:1
else d=0
b4=b1?320:0
b5=b1?5:8
b6=b2?1:0
b7=b2?b0:0
b8=b2?b0:0
b9=b2?b0:0
c0=b2?b0:0
e.k1=new A.iE(b,0.38,0.28,0.18,0.015,b3,d,b4,b5,b6,b7,b8,b9,c0,b2?b0:0,c)}$.cI.j().aM(A.qc($.V.j().gdQ()))
i=$.bc
if(i!=null){h=i.gl6()
if(h!=null){$.F.j().setAttribute("data-renderer-frame-stats",h)
e=$.F.j()
d=i.gl5()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.d9("running")
e=$.aO.j()
e.e=e.d=0
e.c.F(0)
A.a(A.d(v.G.window).requestAnimationFrame(A.a8(A.um())))}catch(c1){g=A.ag(c1)
f=A.co(c1)
A.p7(g,f)}},
xW(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.lE("confirm")
break
case"ambient-winnow":a.dO("winnow",0.28)
break
case"ambient-gate":a.dO("gate",0.22)
break
case"clock:tick":A.qM(a,p,"tick")
break
case"clock:chime":A.qM(a,p,"chime")
break
default:if(B.b.a_(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.e(s,1)
q=s[1]
if(2>=r)return A.e(s,2)
A.qM(a,q,s[2])}}}},
qM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=$.tQ,h=$.k1
if(i==null||h==null)return
s=i.kS(b)
r=$.Y.j()
q=h.c
p=s.b
o=r.e.h(0,p)
if(o==null)A.k(A.l("sound room missing: "+p))
n=o.d.U(0,s.d.X(0,q))
m=$.oH
if(m==null){r=s.f.h(0,c)
if(r==null)r=A.k(A.l("sound emitter "+s.a+" has no cue for "+c))
a.lF(r,n,s.e,p)
return}r=b+":"+c
q=$.tF
$.tF=q+1
p=A.v7(B.cn,r,r+":"+q,n,A.xK(b,c),q,p)
q=$.aE
q=A.v3($.hm(),q)
r=p.d
l=m.a.e
if(l.h(0,r)==null)A.k(A.l("audio source room missing: "+r))
q=q.a
if(l.h(0,q)==null)A.k(A.l("audio listener room missing: "+q))
k=m.i_(r,q)
q=p.c
j=m.c.a.h(0,q)
if(j==null)A.k(A.l("audio cue family missing: "+q))
l=J.ax(j)
l=l.h(j,B.c.W(A.yI(q,p.f),l.gq(j)))
p=p.e
A.ao(k.a,t.N)
a.hO(l,new A.b(p.a,p.b,p.c),s.e,1,r,k.c,k.b)},
xK(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dg(a+":"+b),r=t.gS,s=new A.by(s,s.gq(0),r.i("by<M.E>")),r=r.i("M.E");s.m();){q=s.d
p=A.uk(p,q==null?r.a(q):q)}return p},
yS(a){var s=$.qE
if(s==null)return
s.textContent=""+B.d.aD(a>0?1/a:0)+" fps"},
yQ(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
if($.u7||$.as!=null||$.aD.j().Q){$.ke().a=new A.b(0,0,0)
return}s=$.aO.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga4():p
n=$.aO.j().d
m=$.aO.j().e
$.bV=$.bV+n*0.0028
s=$.dV-m*0.0028
$.dV=s
$.dV=B.d.K(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.bV)+l*Math.sin($.bV),0,l*Math.cos($.bV)-s*Math.sin($.bV)).ga4().X(0,2)
s=$.ke()
if(!isFinite(a3)||a3<0)A.k(A.ay(a3,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.ay(j,"rate","must be finite and positive"))
l=Math.exp(-j*a3)
i=s.a
l=i.U(0,k.ad(0,i).X(0,1-l))
s.a=l
h=$.hf.j().lp($.Y.j(),$.aE,$.eS(),l.X(0,a3))
$.qW=h.a
if($.bq.j().a!==B.aG&&$.bq.j().a!==B.L)$.aE=h.b
$.bG.j().dM($.eS(),$.bV,$.dV)
s=$.bG.j()
l=$.Y.j()
g=A.zG(s,$.aE,l,$.k1)
$.tw.j().is(g.c)
f=a2
e=a2
d=a2
c=a2
switch(g.a.a){case 0:f=A.r8($.bG.j(),$.Y.j(),$.aE)
break
case 1:e=A.ur($.bG.j(),$.Y.j(),$.aE)
break
case 2:d=A.us($.bG.j(),$.Y.j(),$.aE)
break
case 3:s=$.bG.j()
l=$.Y.j()
i=$.k1
c=A.uq(s,$.aE,l,i)
break
case 4:break}s=$.tu.j()
b=$.kf().i6($.V.j().gap().a)
l=b==null?a2:b.h(0,"status")
s.dZ(l,$.aE==="living-room")
if($.aO.j().c.aa(0,"KeyE")){s=$.V.j().gap()
l=e==null
i=l?a2:e.a
a=B.a.a7($.aP.j().fd(21),$.aP.j().gle())
if(s.a===21&&i==="front-door"&&a){s=$.bq.j()
$.Y.j()
s.iC(B.cJ,A.ao(s.c,t.N))
B.a.l($.cm,"collapse")
A.eM("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.V.j().iA(1,1)){f.d=!0
s=$.eE.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.eH
if(s!=null)s.cq(e.b)
s=$.bc
if(s!=null)s.dS($.Y.j(),e.a)
s=$.bH
if(s!=null)s.b8()}else if(d!=null)if(d.w){s=$.V.j()
if(s.f.cC(1))d.w=!1}else d.w=!0
else if(c!=null){s=$.pY()
if(!c.x)A.k(A.l("inventory placement is not pickable: "+c.a))
a0=c.y
if(a0==null)a0=c.a
s=s.a
l=c.a
i=s.h(0,l)
s.k(0,l,(i==null?0:i)+1)
l=$.F.j()
l.setAttribute("data-inventory-last-focus",a0)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a0)
s=A.c5(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gq(s))
$.oC.j().cz("noticed","you inspect "+a0)}}s=$.eE.j()
if(s.a!=null&&s.b>0){a1=$.eE.j().a
if(a1!=null&&A.r8($.bG.j(),$.Y.j(),$.aE)!==a1){s=$.eE.j()
s.a=null
s.b=0}}},
yV(){var s,r,q,p,o,n,m,l,k,j=null
if($.aD.j().Q||$.as!=null||$.aP.j().e!=null)return
s=$.V.j().gap()
for(r=$.aP.j().fd(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o){n=r[o]
m=$.aP.b
if(m===$.aP)A.k(A.a0(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aP.b
if(r===$.aP)A.k(A.a0(""))
l=r.kr(n)
if(!(l instanceof A.j9))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.e(r,q)
k=r[q].b}else k=j
if(k==null)return
A.rw(A.d(v.G.document),"exitPointerLock",j,j,j,j)
$.ke().a=new A.b(0,0,0)
r=$.aD.b
if(r===$.aD)A.k(A.a0(""))
r.e9(n.a,k)
return}},
yz(){var s=$.aP.j().e,r=s==null,q=r?null:s.gc6()
if(r||q==null)return
$.aD.j().e9(s.a.a,q)
if(s.d!==B.N){$.aD.j().cA(q)
A.qV()}A.eM("restored visitor")},
yR(){var s,r,q,p,o=$.V.j().gap(),n=$.jV.j().kQ(o.a,o.b)
if(n.length===0)return
s=B.a.gam(n)
$.jV.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.oC.j().cz(q,s.e)
p=A.z0(r)
if(p!=null)B.a.l($.cm,"ambient-"+p)},
yU(){var s,r,q,p,o=$.V.j().gap()
if(o.b<20)return
s=o.a
if(!$.pd.l(0,s))return
r=$.kf().f
r===$&&A.h()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.az(q,!0,t.N):B.n
p=A.zE(r,$.V.j().b,s)
if(p!=null)$.oC.j().cz("noticed",p)},
u4(a){var s,r,q,p,o
if($.qD!=null)return
s=$.V.j().gap()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.o(q).i("aJ<2>")
o=A.vA(new A.la(s.a,1-r,new A.Q(new A.aJ(q,p),p.i("r(n.E)").a(new A.p8()),p.i("Q<n.E>")).gq(0),$.V.j().r.d,a))
if(o==null)return
A.u0(o)
A.qU("ending recorded")},
u0(a){var s,r,q
$.qD=a
$.u7=!0
$.ke().a=new A.b(0,0,0)
A.qK($.jW.j())
s=$.jW.j()
r=$.kf().w
r===$&&A.h()
q=r.h(0,a.a.b)
s.iu(a,t.j.b(q)?A.az(q,!0,t.N):B.n)},
xQ(a){var s,r,q,p,o
A:{if("open"===a){s=B.a5
break A}if("chain"===a){s=B.b1
break A}if("through-door"===a){s=B.b2
break A}if("letterbox"===a){s=B.b3
break A}s=B.S
break A}r=$.aP.j().kB(s)
if(s===B.a5){q=$.Y.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.eH
if(p!=null)p.cq(q.b)
p=$.bc
if(p!=null)p.dS($.Y.j(),q.a)
p=$.bH
if(p!=null)p.b8()}}if(!(r instanceof A.j8)||s===B.S){$.aD.j().cg()
$.aO.j().bN($.F.j())
return}o=r.a.gc6()
if(o==null){A.qB()
$.aD.j().cg()
$.aO.j().bN($.F.j())
return}$.aD.j().cA(o)
A.qV()},
xT(){var s,r=$.aP.j().kn()
if(!(r instanceof A.fE)||r.b){A.qB()
$.aD.j().cg()
$.aO.j().bN($.F.j())
return}s=r.a.gc6()
if(s==null){A.qB()
$.aD.j().cg()
$.aO.j().bN($.F.j())
return}$.aD.j().cA(s)
A.qV()},
qV(){var s,r,q,p,o=$.aD.j(),n=A.d(v.G.document),m=A.f([],t.fR)
for(s=$.jX.j().e5(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
m.push(new A.b6(p.a,B.a.gN(p.c).n(0)))}o.it(n,m)},
xR(a){var s,r,q,p=$.aP.j().kC(a,!0,$.jX.j())
if(p==null)return
s=$.jX.j().kK(p,B.e9)
r=$.aD.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.h()
r.textContent=q},
qB(){var s,r=$.Y.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.eH
if(s!=null)s.cq(r.b)
s=$.bc
if(s!=null)s.dS($.Y.j(),r.a)
s=$.bH
if(s!=null)s.b8()}},
yT(){var s,r,q,p,o,n,m,l,k
for(s=$.Y.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bq.b
if(k===$.bq)A.k(A.a0(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fZ:function fZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
oo:function oo(){},
op:function op(a){this.a=a},
oq:function oq(a){this.a=a},
ev:function ev(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fY:function fY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pv:function pv(a){this.a=a},
pw:function pw(){},
px:function px(){},
pH:function pH(){},
pI:function pI(){},
pJ:function pJ(){},
pK:function pK(){},
pL:function pL(){},
pM:function pM(){},
pN:function pN(){},
pO:function pO(){},
py:function py(){},
pz:function pz(){},
pA:function pA(){},
pB:function pB(){},
pC:function pC(){},
pD:function pD(){},
pE:function pE(){},
pF:function pF(){},
pG:function pG(){},
p3:function p3(){},
p4:function p4(){},
pa:function pa(a){this.a=a},
p8:function p8(){},
rw(a,b,c,d,e,f){var s=a[b]()
return s},
rx(a,b,c){var s=null
return c.a(A.rw(a,b,s,s,s,s))},
vn(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
vm(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
ul(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
pS(a,b){var s=B.d.aI(a),r=A.ul(s,b),q=A.ul(s+1,b),p=B.d.K(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
uk(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
z0(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
zf(a){var s,r,q,p,o,n,m,l=B.r.bw(a,null),k=t.f
if(!k.b(l))throw A.c(B.dx)
s=t.N
r=t.z
q=A.aU(l,s,r)
p=A.x(s,t.P)
for(o=0;o<11;++o){n=B.ep[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.x(s,r))
else if(k.b(m))p.k(0,n,A.aU(m,s,r))
else throw A.c(A.ac('text.json section "'+n+'" must be an object',null,null))}return p},
zE(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbk(a)
s=new A.ew()
s.cD((b^274953^c)>>>0)
r=s.au(a.length)
if(!(r>=0&&r<a.length))return A.e(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.q2.prototype={}
J.ib.prototype={
V(a,b){return a===b},
gH(a){return A.fo(a)},
n(a){return"Instance of '"+A.iG(a)+"'"},
gP(a){return A.cn(A.qG(this))}}
J.ig.prototype={
n(a){return String(a)},
gH(a){return a?519018:218159},
gP(a){return A.cn(t.y)},
$ia3:1,
$ir:1}
J.f9.prototype={
V(a,b){return null==b},
n(a){return"null"},
gH(a){return 0},
$ia3:1,
$ial:1}
J.fa.prototype={$ia_:1}
J.cT.prototype={
gH(a){return 0},
gP(a){return B.hw},
n(a){return String(a)}}
J.iB.prototype={}
J.dH.prototype={}
J.cs.prototype={
n(a){var s=a[$.uy()]
if(s==null)s=a[$.eR()]
if(s==null)return this.iE(a)
return"JavaScript function for "+J.e1(s)},
$idm:1}
J.ei.prototype={
gH(a){return 0},
n(a){return String(a)}}
J.ej.prototype={
gH(a){return 0},
n(a){return String(a)}}
J.u.prototype={
c4(a,b){return new A.bZ(a,A.K(a).i("@<1>").E(b).i("bZ<1,2>"))},
l(a,b){A.K(a).c.a(b)
a.$flags&1&&A.be(a,29)
a.push(b)},
lL(a,b){var s
a.$flags&1&&A.be(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.rM(b,null))
return a.splice(b,1)[0]},
aa(a,b){var s
a.$flags&1&&A.be(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ab(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.K(a).i("n<1>").a(b)
a.$flags&1&&A.be(a,"addAll",2)
if(Array.isArray(b)){this.iZ(a,b)
return}for(s=J.O(b);s.m();)a.push(s.gp())},
iZ(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.ar(a))
for(r=0;r<s;++r)a.push(b[r])},
F(a){a.$flags&1&&A.be(a,"clear","clear")
a.length=0},
bK(a,b,c){var s=A.K(a)
return new A.N(a,s.E(c).i("1(2)").a(b),s.i("@<1>").E(c).i("N<1,2>"))},
b2(a,b){var s,r=A.c9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.q(a[s]))
return r.join(b)},
bE(a,b,c,d){var s,r,q
d.a(b)
A.K(a).E(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.ar(a))}return r},
cf(a,b,c){var s,r,q,p=A.K(a)
p.i("r(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.ar(a))}p=c.$0()
return p},
T(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
gam(a){if(a.length>0)return a[0]
throw A.c(A.ic())},
gN(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.ic())},
gbk(a){var s=a.length
if(s===1){if(0>=s)return A.e(a,0)
return a[0]}if(s===0)throw A.c(A.ic())
throw A.c(A.vU())},
R(a,b){var s,r
A.K(a).i("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.ar(a))}return!1},
a7(a,b){var s,r
A.K(a).i("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.ar(a))}return!0},
Z(a,b){var s,r,q,p,o,n=A.K(a)
n.i("j(1,1)?").a(b)
a.$flags&2&&A.be(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.ye()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.ac()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eP(b,2))
if(p>0)this.jV(a,p)},
Y(a){return this.Z(a,null)},
jV(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cB(a,b){var s,r,q,p
a.$flags&2&&A.be(a,"shuffle")
s=a.length
while(s>1){r=b.au(s);--s
q=a.length
if(!(s<q))return A.e(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.e(a,r)
a[s]=a[r]
a[r]=p}},
ci(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.e(a,s)
if(J.ab(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.ab(a[s],b))return!0
return!1},
gI(a){return a.length===0},
gM(a){return a.length!==0},
n(a){return A.q1(a,"[","]")},
gt(a){return new J.dc(a,a.length,A.K(a).i("dc<1>"))},
gH(a){return A.fo(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.be(a,"set length","change the length of")
if(b<0)throw A.c(A.aX(b,0,null,"newLength",null))
if(b>a.length)A.K(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.pl(a,b))
return a[b]},
k(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.be(a)
if(!(b>=0&&b<a.length))throw A.c(A.pl(a,b))
a[b]=c},
e3(a,b){return new A.c3(a,b.i("c3<0>"))},
hC(a,b){var s
A.K(a).i("r(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gP(a){return A.cn(A.K(a))},
$iG:1,
$in:1,
$iD:1}
J.id.prototype={
m_(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.iG(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.m7.prototype={}
J.dc.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.p(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iah:1}
J.dt.prototype={
G(a,b){var s
A.b7(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gck(b)
if(this.gck(a)===s)return 0
if(this.gck(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gck(a){return a===0?1/a<0:a<0},
aS(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.aB(""+a+".toInt()"))},
ky(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.aB(""+a+".ceil()"))},
aI(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.aB(""+a+".floor()"))},
aD(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.aB(""+a+".round()"))},
K(a,b,c){if(this.G(b,c)>0)throw A.c(A.r1(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
cr(a,b){var s
if(b>20)throw A.c(A.aX(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gck(a))return"-"+s
return s},
lZ(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.c(A.aX(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.e(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.aB("Unexpected toString result: "+s))
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
gH(a){var s,r,q,p,o=a|0
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
iG(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.f3(a,b)},
L(a,b){return(a|0)===a?a/b|0:this.f3(a,b)},
f3(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.aB("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cX(a,b){var s
if(a>0)s=this.c1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
k0(a,b){if(0>b)throw A.c(A.r1(b))
return this.c1(a,b)},
c1(a,b){return b>31?0:a>>>b},
gP(a){return A.cn(t.o)},
$iaI:1,
$iw:1,
$iaS:1}
J.f8.prototype={
gP(a){return A.cn(t.S)},
$ia3:1,
$ij:1}
J.ih.prototype={
gP(a){return A.cn(t.i)},
$ia3:1}
J.du.prototype={
bh(a,b,c,d){var s=A.fp(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a2(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aX(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a_(a,b){return this.a2(a,b,0)},
C(a,b,c){return a.substring(b,A.fp(b,c,a.length))},
bP(a,b){return this.C(a,b,null)},
dY(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.vY(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.vZ(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
X(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.cF)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
lC(a,b,c){var s=b-a.length
if(s<=0)return a
return this.X(c,s)+a},
cj(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aX(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ci(a,b){return this.cj(a,b,0)},
v(a,b){return A.zL(a,b,0)},
G(a,b){var s
A.C(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
n(a){return a},
gH(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gP(a){return A.cn(t.N)},
gq(a){return a.length},
$ia3:1,
$iaI:1,
$imH:1,
$im:1}
A.d1.prototype={
gt(a){return new A.eV(J.O(this.gaX()),A.o(this).i("eV<1,2>"))},
gq(a){return J.b2(this.gaX())},
gI(a){return J.rd(this.gaX())},
gM(a){return J.v_(this.gaX())},
T(a,b){return A.o(this).y[1].a(J.kg(this.gaX(),b))},
n(a){return J.e1(this.gaX())}}
A.eV.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iah:1}
A.df.prototype={
gaX(){return this.a}}
A.fN.prototype={$iG:1}
A.fL.prototype={
h(a,b){return this.$ti.y[1].a(J.b1(this.a,b))},
k(a,b,c){var s=this.$ti
J.bK(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.v0(this.a,b)},
l(a,b){var s=this.$ti
J.hn(this.a,s.c.a(s.y[1].a(b)))},
Z(a,b){var s
this.$ti.i("j(2,2)?").a(b)
s=b==null?null:new A.o4(this,b)
J.v1(this.a,s)},
$iG:1,
$iD:1}
A.o4.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("j(1,1)")}}
A.bZ.prototype={
c4(a,b){return new A.bZ(this.a,this.$ti.i("@<1>").E(b).i("bZ<1,2>"))},
gaX(){return this.a}}
A.dv.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.dg.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.nj.prototype={}
A.G.prototype={}
A.a5.prototype={
gt(a){var s=this
return new A.by(s,s.gq(s),A.o(s).i("by<a5.E>"))},
gI(a){return this.gq(this)===0},
R(a,b){var s,r,q=this
A.o(q).i("r(a5.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.T(0,r)))return!0
if(s!==q.gq(q))throw A.c(A.ar(q))}return!1},
b2(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.T(0,0))
if(o!==p.gq(p))throw A.c(A.ar(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.T(0,q))
if(o!==p.gq(p))throw A.c(A.ar(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.T(0,q))
if(o!==p.gq(p))throw A.c(A.ar(p))}return r.charCodeAt(0)==0?r:r}},
e2(a,b){return this.iD(0,A.o(this).i("r(a5.E)").a(b))},
bK(a,b,c){var s=A.o(this)
return new A.N(this,s.E(c).i("1(a5.E)").a(b),s.i("@<a5.E>").E(c).i("N<1,2>"))},
bj(a,b){var s=A.o(this).i("a5.E")
if(b)s=A.L(this,s)
else{s=A.L(this,s)
s.$flags=1
s=s}return s},
bi(a){return this.bj(0,!0)},
b4(a){var s,r=this,q=A.q5(A.o(r).i("a5.E"))
for(s=0;s<r.gq(r);++s)q.l(0,r.T(0,s))
return q}}
A.fA.prototype={
gjm(){var s=J.b2(this.a),r=this.c
if(r==null||r>s)return s
return r},
gk7(){var s=J.b2(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.b2(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
T(a,b){var s=this,r=s.gk7()+b
if(b<0||r>=s.gjm())throw A.c(A.m1(b,s.gq(0),s,"index"))
return J.kg(s.a,r)},
bj(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ax(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.rv(0,n):J.ru(0,n)}r=A.c9(s,m.T(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.T(n,o+q))
if(m.gq(n)<l)throw A.c(A.ar(p))}return r},
bi(a){return this.bj(0,!0)}}
A.by.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ax(q),o=p.gq(q)
if(r.b!==o)throw A.c(A.ar(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0},
$iah:1}
A.cu.prototype={
gt(a){return new A.dw(J.O(this.a),this.b,A.o(this).i("dw<1,2>"))},
gq(a){return J.b2(this.a)},
gI(a){return J.rd(this.a)},
T(a,b){return this.b.$1(J.kg(this.a,b))}}
A.dj.prototype={$iG:1}
A.dw.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.N.prototype={
gq(a){return J.b2(this.a)},
T(a,b){return this.b.$1(J.kg(this.a,b))}}
A.Q.prototype={
gt(a){return new A.I(J.O(this.a),this.b,this.$ti.i("I<1>"))}}
A.I.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iah:1}
A.c3.prototype={
gt(a){return new A.fG(J.O(this.a),this.$ti.i("fG<1>"))}}
A.fG.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iah:1}
A.ai.prototype={
sq(a,b){throw A.c(A.aB("Cannot change the length of a fixed-length list"))},
l(a,b){A.bs(a).i("ai.E").a(b)
throw A.c(A.aB("Cannot add to a fixed-length list"))}}
A.ch.prototype={
k(a,b,c){A.o(this).i("ch.E").a(c)
throw A.c(A.aB("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.c(A.aB("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("ch.E").a(b)
throw A.c(A.aB("Cannot add to an unmodifiable list"))},
Z(a,b){A.o(this).i("j(ch.E,ch.E)?").a(b)
throw A.c(A.aB("Cannot modify an unmodifiable list"))}}
A.eu.prototype={}
A.fu.prototype={
gq(a){return J.b2(this.a)},
T(a,b){var s=this.a,r=J.ax(s)
return r.T(s,r.gq(s)-1-b)}}
A.he.prototype={}
A.b6.prototype={$r:"+(1,2)",$s:1}
A.a7.prototype={$r:"+(1,2,3)",$s:2}
A.h_.prototype={$r:"+(1,2,3,4)",$s:3}
A.eX.prototype={}
A.e9.prototype={
gI(a){return this.gq(this)===0},
gM(a){return this.gq(this)!==0},
n(a){return A.q7(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.vi()},
gO(){return new A.ck(this.kV(),A.o(this).i("ck<R<1,2>>"))},
kV(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gS(),o=o.gt(o),n=A.o(s),m=n.y[1],n=n.i("R<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.R(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bd(a,b,c,d){var s=A.x(c,d)
this.ai(0,new A.kZ(this,A.o(this).E(c).E(d).i("R<1,2>(3,4)").a(b),s))
return s},
$iX:1}
A.kZ.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a6.prototype={
gq(a){return this.b.length},
geG(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a3(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.a3(b))return null
return this.b[this.a[b]]},
ai(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geG()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gS(){return new A.dQ(this.geG(),this.$ti.i("dQ<1>"))},
gao(){return new A.dQ(this.b,this.$ti.i("dQ<2>"))}}
A.dQ.prototype={
gq(a){return this.a.length},
gI(a){return 0===this.a.length},
gM(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.dR(s,s.length,this.$ti.i("dR<1>"))}}
A.dR.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iah:1}
A.f2.prototype={
bo(){var s=this,r=s.$map
if(r==null){r=new A.fb(s.$ti.i("fb<1,2>"))
A.ug(s.a,r)
s.$map=r}return r},
h(a,b){return this.bo().h(0,b)},
ai(a,b){this.$ti.i("~(1,2)").a(b)
this.bo().ai(0,b)},
gS(){var s=this.bo()
return new A.a1(s,A.o(s).i("a1<1>"))},
gao(){var s=this.bo()
return new A.aJ(s,A.o(s).i("aJ<2>"))},
gq(a){return this.bo().a}}
A.eY.prototype={
l(a,b){A.o(this).c.a(b)
A.vj()}}
A.c6.prototype={
gq(a){return this.b},
gI(a){return this.b===0},
gM(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dR(s,s.length,r.$ti.i("dR<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b4(a){return A.q6(this,this.$ti.c)}}
A.mN.prototype={
$0(){return B.d.aI(1000*this.a.now())},
$S:19}
A.fv.prototype={}
A.nH.prototype={
aB(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.fk.prototype={
n(a){return"Null check operator used on a null value"}}
A.ij.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.j0.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mA.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.f0.prototype={}
A.h1.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icf:1}
A.cN.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ux(r==null?"unknown":r)+"'"},
gP(a){var s=A.r3(this)
return A.cn(s==null?A.bs(this):s)},
$idm:1,
gm8(){return this},
$C:"$1",
$R:1,
$D:null}
A.hC.prototype={$C:"$0",$R:0}
A.hD.prototype={$C:"$2",$R:2}
A.iX.prototype={}
A.iU.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ux(s)+"'"}}
A.e6.prototype={
V(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.e6))return!1
return this.$_target===b.$_target&&this.a===b.a},
gH(a){return(A.kc(this.a)^A.fo(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.iG(this.a)+"'")}}
A.iN.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bM.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gM(a){return this.a!==0},
gS(){return new A.a1(this,A.o(this).i("a1<1>"))},
gao(){return new A.aJ(this,A.o(this).i("aJ<2>"))},
gO(){return new A.T(this,A.o(this).i("T<1,2>"))},
a3(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.l9(a)},
l9(a){var s=this.d
if(s==null)return!1
return this.bG(s[this.bF(a)],a)>=0},
J(a,b){A.o(this).i("X<1,2>").a(b).ai(0,new A.mg(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.la(b)},
la(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bF(a)]
r=this.bG(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ee(s==null?q.b=q.cS():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ee(r==null?q.c=q.cS():r,b,c)}else q.lc(b,c)},
lc(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cS()
r=o.bF(a)
q=s[r]
if(q==null)s[r]=[o.cT(a,b)]
else{p=o.bG(q,a)
if(p>=0)q[p].b=b
else q.push(o.cT(a,b))}},
lH(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.a3(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
aa(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.jU(this.c,b)
else return this.lb(b)},
lb(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bF(a)
r=n[s]
q=o.bG(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fa(p)
if(r.length===0)delete n[s]
return p.b},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cE()}},
ai(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.ar(q))
s=s.c}},
ee(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cT(b,c)
else s.b=c},
jU(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fa(s)
delete a[b]
return s.b},
cE(){this.r=this.r+1&1073741823},
cT(a,b){var s=this,r=A.o(s),q=new A.mo(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cE()
return q},
fa(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cE()},
bF(a){return J.bt(a)&1073741823},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
n(a){return A.q7(this)},
cS(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iq4:1}
A.mg.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.mo.prototype={}
A.a1.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cU(s,s.r,s.e,this.$ti.i("cU<1>"))}}
A.cU.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ar(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iah:1}
A.aJ.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gt(a){var s=this.a
return new A.ap(s,s.r,s.e,this.$ti.i("ap<1>"))}}
A.ap.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ar(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iah:1}
A.T.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gt(a){var s=this.a
return new A.fd(s,s.r,s.e,this.$ti.i("fd<1,2>"))}}
A.fd.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ar(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.R(s.a,s.b,r.$ti.i("R<1,2>"))
r.c=s.c
return!0}},
$iah:1}
A.fb.prototype={
bF(a){return A.za(a)&1073741823},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.pq.prototype={
$1(a){return this.a(a)},
$S:6}
A.pr.prototype={
$2(a,b){return this.a(a,b)},
$S:38}
A.ps.prototype={
$1(a){return this.a(A.C(a))},
$S:20}
A.bS.prototype={
gP(a){return A.cn(this.eE())},
eE(){return A.zk(this.$r,this.bW())},
n(a){return this.f7(!1)},
f7(a){var s,r,q,p,o,n=this.jr(),m=this.bW(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.rJ(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
jr(){var s,r=this.$s
while($.or.length<=r)B.a.l($.or,null)
s=$.or[r]
if(s==null){s=this.jb()
B.a.k($.or,r,s)}return s},
jb(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.ie(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ao(j,k)}}
A.ex.prototype={
bW(){return[this.a,this.b]},
V(a,b){if(b==null)return!1
return b instanceof A.ex&&this.$s===b.$s&&J.ab(this.a,b.a)&&J.ab(this.b,b.b)},
gH(a){return A.cw(this.$s,this.a,this.b,B.m)}}
A.ey.prototype={
bW(){return[this.a,this.b,this.c]},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.ey&&s.$s===b.$s&&J.ab(s.a,b.a)&&J.ab(s.b,b.b)&&J.ab(s.c,b.c)},
gH(a){var s=this
return A.cw(s.$s,s.a,s.b,s.c)}}
A.ez.prototype={
bW(){return this.a},
V(a,b){if(b==null)return!1
return b instanceof A.ez&&this.$s===b.$s&&A.x6(this.a,b.a)},
gH(a){return A.cw(this.$s,A.w8(this.a),B.m,B.m)}}
A.ii.prototype={
n(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imH:1}
A.o5.prototype={
cV(){var s=this.b
if(s===this)throw A.c(new A.dv("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.c(A.a0(""))
return s}}
A.cV.prototype={
gP(a){return B.hp},
fe(a,b,c){return new Float32Array(a,b,c)},
$ia3:1,
$icV:1}
A.el.prototype={$iel:1}
A.fi.prototype={
gks(a){if(((a.$flags|0)&2)!==0)return new A.ox(a.buffer)
else return a.buffer},
jx(a,b,c,d){var s=A.aX(b,0,c,d,null)
throw A.c(s)},
el(a,b,c,d){if(b>>>0!==b||b>c)this.jx(a,b,c,d)}}
A.ox.prototype={
fe(a,b,c){var s=A.w5(this.a,b,c)
s.$flags=3
return s}}
A.is.prototype={
gP(a){return B.hq},
$ia3:1}
A.aK.prototype={
gq(a){return a.length},
eY(a,b,c,d,e){var s,r,q=a.length
this.el(a,b,q,"start")
this.el(a,c,q,"end")
if(b>c)throw A.c(A.aX(b,0,c,null,null))
s=c-b
if(e<0)throw A.c(A.z(e,null))
r=d.length
if(r-e<s)throw A.c(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibx:1}
A.fg.prototype={
h(a,b){A.cK(b,a,a.length)
return a[b]},
k(a,b,c){A.d8(c)
a.$flags&2&&A.be(a)
A.cK(b,a,a.length)
a[b]=c},
im(a,b,c,d){t.id.a(d)
a.$flags&2&&A.be(a,5)
this.eY(a,b,c,d,0)
return},
$iG:1,
$in:1,
$iD:1}
A.fh.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.be(a)
A.cK(b,a,a.length)
a[b]=c},
io(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.be(a,5)
this.eY(a,b,c,d,e)
return},
$iG:1,
$in:1,
$iD:1}
A.ff.prototype={
gP(a){return B.hr},
aL(a,b,c){return new Float32Array(a.subarray(b,A.xO(b,c,a.length)))},
$ia3:1,
$ill:1}
A.it.prototype={
gP(a){return B.hs},
$ia3:1}
A.iu.prototype={
gP(a){return B.ht},
h(a,b){A.cK(b,a,a.length)
return a[b]},
$ia3:1}
A.iv.prototype={
gP(a){return B.hu},
h(a,b){A.cK(b,a,a.length)
return a[b]},
$ia3:1}
A.iw.prototype={
gP(a){return B.hv},
h(a,b){A.cK(b,a,a.length)
return a[b]},
$ia3:1}
A.ix.prototype={
gP(a){return B.hy},
h(a,b){A.cK(b,a,a.length)
return a[b]},
$ia3:1,
$iqh:1}
A.iy.prototype={
gP(a){return B.hz},
h(a,b){A.cK(b,a,a.length)
return a[b]},
$ia3:1}
A.dy.prototype={
gP(a){return B.hA},
gq(a){return a.length},
h(a,b){A.cK(b,a,a.length)
return a[b]},
$ia3:1,
$idy:1}
A.fj.prototype={
gP(a){return B.hB},
gq(a){return a.length},
h(a,b){A.cK(b,a,a.length)
return a[b]},
$ia3:1,
$ifB:1}
A.fU.prototype={}
A.fV.prototype={}
A.fW.prototype={}
A.fX.prototype={}
A.c1.prototype={
i(a){return A.h6(v.typeUniverse,this,a)},
E(a){return A.tl(v.typeUniverse,this,a)}}
A.jt.prototype={}
A.jR.prototype={
n(a){return A.bI(this.a,null)}}
A.jr.prototype={
n(a){return this.a}}
A.h2.prototype={$icB:1}
A.o1.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.o0.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.o2.prototype={
$0(){this.a.$0()},
$S:10}
A.o3.prototype={
$0(){this.a.$0()},
$S:10}
A.ou.prototype={
iX(a,b){if(self.setTimeout!=null)self.setTimeout(A.eP(new A.ov(this,b),0),a)
else throw A.c(A.aB("`setTimeout()` not found."))}}
A.ov.prototype={
$0(){this.b.$0()},
$S:0}
A.jh.prototype={
d0(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cG(a)
else{s=r.a
if(q.i("bv<1>").b(a))s.ek(a)
else s.bU(a)}},
d1(a,b){var s=this.a
if(this.b)s.aV(new A.aH(a,b))
else s.bQ(new A.aH(a,b))}}
A.oI.prototype={
$1(a){return this.a.$2(0,a)},
$S:11}
A.oJ.prototype={
$2(a,b){this.a.$2(1,new A.f0(a,t.l.a(b)))},
$S:54}
A.ph.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:60}
A.bF.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jW(a,b){var s,r,q
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
o.d=null}q=o.jW(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.tg
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
o.a=A.tg
throw n
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.c(A.l("sync*"))}return!1},
ma(a){var s,r,q=this
if(a instanceof A.ck){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.O(a)
return 2}},
$iah:1}
A.ck.prototype={
gt(a){return new A.bF(this.a(),this.$ti.i("bF<1>"))}}
A.aH.prototype={
n(a){return A.q(this.a)},
$ia9:1,
gbl(){return this.b}}
A.ls.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eu(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ag(p)
q=A.co(p)
l=r
o=q
n=A.qH(l,o)
l=new A.aH(l,o)
m.b.aV(l)
return}m.b.eu(s)}},
$S:0}
A.lv.prototype={
$2(a,b){var s,r,q=this
A.eF(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aV(new A.aH(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aV(new A.aH(r,s))}},
$S:62}
A.lu.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bK(r,k.b,a)
if(J.ab(s,0)){q=A.f([],j.i("u<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.p)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hn(q,l)}k.c.bU(q)}}else if(J.ab(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aV(new A.aH(q,o))}},
$S(){return this.d.i("al(0)")}}
A.jl.prototype={
d1(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.bQ(A.yd(a,b))},
fg(a){return this.d1(a,null)}}
A.fI.prototype={
d0(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.cG(r.i("1/").a(a))}}
A.dM.prototype={
lo(a){if((this.c&15)!==6)return!0
return this.b.b.dW(t.iW.a(this.d),a.a,t.y,t.K)},
l8(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.lW(q,m,a.b,o,n,t.l)
else p=l.dW(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ag(s))){if((r.c&1)!==0)throw A.c(A.z("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.z("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ak.prototype={
dX(a,b,c){var s,r,q=this.$ti
q.E(c).i("1/(2)").a(a)
s=$.ae
if(s===B.v){if(!t.ng.b(b)&&!t.mq.b(b))throw A.c(A.ay(b,"onError",u.c))}else{c.i("@<0/>").E(q.c).i("1(2)").a(a)
b=A.yx(b,s)}r=new A.ak(s,c.i("ak<0>"))
this.cF(new A.dM(r,3,a,b,q.i("@<1>").E(c).i("dM<1,2>")))
return r},
f6(a,b,c){var s,r=this.$ti
r.E(c).i("1/(2)").a(a)
s=new A.ak($.ae,c.i("ak<0>"))
this.cF(new A.dM(s,19,a,b,r.i("@<1>").E(c).i("dM<1,2>")))
return s},
k_(a){this.a=this.a&1|16
this.c=a},
bT(a){this.a=a.a&30|this.a&1
this.c=a.c},
cF(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.e.a(r.c)
if((s.a&24)===0){s.cF(a)
return}r.bT(s)}A.k7(null,null,r.b,t.M.a(new A.o7(r,a)))}},
eN(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.e.a(m.c)
if((n.a&24)===0){n.eN(a)
return}m.bT(n)}l.a=m.c_(a)
A.k7(null,null,m.b,t.M.a(new A.oc(l,m)))}},
bq(){var s=t.F.a(this.c)
this.c=null
return this.c_(s)},
c_(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eu(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bv<1>").b(a))A.oa(a,r,!0)
else{s=r.bq()
q.c.a(a)
r.a=8
r.c=a
A.dN(r,s)}},
bU(a){var s,r=this
r.$ti.c.a(a)
s=r.bq()
r.a=8
r.c=a
A.dN(r,s)},
ja(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bq()
q.bT(a)
A.dN(q,r)},
aV(a){var s=this.bq()
this.k_(a)
A.dN(this,s)},
cG(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bv<1>").b(a)){this.ek(a)
return}this.j0(a)},
j0(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.k7(null,null,s.b,t.M.a(new A.o9(s,a)))},
ek(a){A.oa(this.$ti.i("bv<1>").a(a),this,!1)
return},
bQ(a){this.a^=2
A.k7(null,null,this.b,t.M.a(new A.o8(this,a)))},
$ibv:1}
A.o7.prototype={
$0(){A.dN(this.a,this.b)},
$S:0}
A.oc.prototype={
$0(){A.dN(this.b,this.a.a)},
$S:0}
A.ob.prototype={
$0(){A.oa(this.a.a,this.b,!0)},
$S:0}
A.o9.prototype={
$0(){this.a.bU(this.b)},
$S:0}
A.o8.prototype={
$0(){this.a.aV(this.b)},
$S:0}
A.of.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.lV(t.mY.a(q.d),t.z)}catch(p){s=A.ag(p)
r=A.co(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.ks(q)
n=k.a
n.c=new A.aH(q,o)
q=n}q.b=!0
return}if(j instanceof A.ak&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ak){m=k.b.a
l=new A.ak(m.b,m.$ti)
j.dX(new A.og(l,m),new A.oh(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.og.prototype={
$1(a){this.a.ja(this.b)},
$S:21}
A.oh.prototype={
$2(a,b){A.eF(a)
t.l.a(b)
this.a.aV(new A.aH(a,b))},
$S:108}
A.oe.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dW(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ag(l)
r=A.co(l)
q=s
p=r
if(p==null)p=A.ks(q)
o=this.a
o.c=new A.aH(q,p)
o.b=!0}},
$S:0}
A.od.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lo(s)&&p.a.e!=null){p.c=p.a.l8(s)
p.b=!1}}catch(o){r=A.ag(o)
q=A.co(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ks(p)
m=l.b
m.c=new A.aH(p,n)
p=m}p.b=!0}},
$S:0}
A.ji.prototype={}
A.jP.prototype={}
A.hd.prototype={$it8:1}
A.jH.prototype={
lX(a){var s,r,q
t.M.a(a)
try{if(B.v===$.ae){a.$0()
return}A.u5(null,null,this,a,t.H)}catch(q){s=A.ag(q)
r=A.co(q)
A.qS(A.eF(s),t.l.a(r))}},
ff(a){return new A.os(this,t.M.a(a))},
lV(a,b){b.i("0()").a(a)
if($.ae===B.v)return a.$0()
return A.u5(null,null,this,a,b)},
dW(a,b,c,d){c.i("@<0>").E(d).i("1(2)").a(a)
d.a(b)
if($.ae===B.v)return a.$1(b)
return A.yC(null,null,this,a,b,c,d)},
lW(a,b,c,d,e,f){d.i("@<0>").E(e).E(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ae===B.v)return a.$2(b,c)
return A.yB(null,null,this,a,b,c,d,e,f)},
hS(a,b,c,d){return b.i("@<0>").E(c).E(d).i("1(2,3)").a(a)}}
A.os.prototype={
$0(){return this.a.lX(this.b)},
$S:0}
A.p9.prototype={
$0(){A.vF(this.a,this.b)},
$S:0}
A.fP.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gM(a){return this.a!==0},
gS(){return new A.dO(this,this.$ti.i("dO<1>"))},
gao(){var s=this.$ti
return A.io(new A.dO(this,s.i("dO<1>")),new A.oi(this),s.c,s.y[1])},
a3(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.je(a)},
je(a){var s=this.d
if(s==null)return!1
return this.aW(this.eD(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.ta(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.ta(q,b)
return r}else return this.js(b)},
js(a){var s,r,q=this.d
if(q==null)return null
s=this.eD(q,a)
r=this.aW(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.eo(s==null?m.b=A.qo():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.eo(r==null?m.c=A.qo():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.qo()
p=A.kc(b)&1073741823
o=q[p]
if(o==null){A.qp(q,p,[b,c]);++m.a
m.e=null}else{n=m.aW(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ai(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ep()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.ar(m))}},
ep(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.c9(i.a,null,!1,t.z)
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
eo(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.qp(a,b,c)},
eD(a,b){return a[A.kc(b)&1073741823]}}
A.oi.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.fR.prototype={
aW(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dO.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gM(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.fQ(s,s.ep(),this.$ti.i("fQ<1>"))}}
A.fQ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.ar(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iah:1}
A.bR.prototype={
eJ(){return new A.bR(A.o(this).i("bR<1>"))},
gt(a){var s=this,r=new A.dS(s,s.r,A.o(s).i("dS<1>"))
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
return t.q.a(r[b])!=null}else return this.jd(b)},
jd(a){var s=this.d
if(s==null)return!1
return this.aW(s[this.cL(a)],a)>=0},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.en(s==null?q.b=A.qq():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.en(r==null?q.c=A.qq():r,b)}else return q.iY(b)},
iY(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.qq()
r=p.cL(a)
q=s[r]
if(q==null)s[r]=[p.cJ(a)]
else{if(p.aW(q,a)>=0)return!1
q.push(p.cJ(a))}return!0},
aa(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.eq(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.eq(s.c,b)
else return s.jT(b)},
jT(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cL(a)
r=n[s]
q=o.aW(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.er(p)
return!0},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cR()}},
en(a,b){A.o(this).c.a(b)
if(t.q.a(a[b])!=null)return!1
a[b]=this.cJ(b)
return!0},
eq(a,b){var s
if(a==null)return!1
s=t.q.a(a[b])
if(s==null)return!1
this.er(s)
delete a[b]
return!0},
cR(){this.r=this.r+1&1073741823},
cJ(a){var s,r=this,q=new A.jy(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cR()
return q},
er(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cR()},
cL(a){return J.bt(a)&1073741823},
aW(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
$irE:1}
A.jy.prototype={}
A.dS.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.ar(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iah:1}
A.mp.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:109}
A.M.prototype={
gt(a){return new A.by(a,this.gq(a),A.bs(a).i("by<M.E>"))},
T(a,b){return this.h(a,b)},
gI(a){return this.gq(a)===0},
gM(a){return!this.gI(a)},
a7(a,b){var s,r
A.bs(a).i("r(M.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.c(A.ar(a))}return!0},
R(a,b){var s,r
A.bs(a).i("r(M.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.c(A.ar(a))}return!1},
e3(a,b){return new A.c3(a,b.i("c3<0>"))},
bK(a,b,c){var s=A.bs(a)
return new A.N(a,s.E(c).i("1(M.E)").a(b),s.i("@<M.E>").E(c).i("N<1,2>"))},
l(a,b){var s
A.bs(a).i("M.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.k(a,s,b)},
c4(a,b){return new A.bZ(a,A.bs(a).i("@<M.E>").E(b).i("bZ<1,2>"))},
Z(a,b){var s,r=A.bs(a)
r.i("j(M.E,M.E)?").a(b)
s=b==null?A.z9():b
A.iR(a,0,this.gq(a)-1,s,r.i("M.E"))},
l2(a,b,c,d){var s
A.bs(a).i("M.E?").a(d)
A.fp(b,c,this.gq(a))
for(s=b;s<c;++s)this.k(a,s,d)},
n(a){return A.q1(a,"[","]")},
$iG:1,
$in:1,
$iD:1}
A.Z.prototype={
ai(a,b){var s,r,q,p=A.o(this)
p.i("~(Z.K,Z.V)").a(b)
for(s=this.gS(),s=s.gt(s),p=p.i("Z.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gO(){return this.gS().bK(0,new A.mr(this),A.o(this).i("R<Z.K,Z.V>"))},
bd(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.E(c).E(d).i("R<1,2>(Z.K,Z.V)").a(b)
s=A.x(c,d)
for(r=this.gS(),r=r.gt(r),n=n.i("Z.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
kj(a){var s,r,q
A.o(this).i("n<R<Z.K,Z.V>>").a(a)
for(s=a.$ti,r=new A.dw(J.O(a.a),a.b,s.i("dw<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
gq(a){var s=this.gS()
return s.gq(s)},
gI(a){var s=this.gS()
return s.gI(s)},
gM(a){var s=this.gS()
return s.gM(s)},
gao(){return new A.fS(this,A.o(this).i("fS<Z.K,Z.V>"))},
n(a){return A.q7(this)},
$iX:1}
A.mr.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("Z.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("Z.V").a(s)
return new A.R(a,s,r.i("R<Z.K,Z.V>"))},
$S(){return A.o(this.a).i("R<Z.K,Z.V>(Z.K)")}}
A.ms.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:22}
A.fS.prototype={
gq(a){var s=this.a
return s.gq(s)},
gI(a){var s=this.a
return s.gI(s)},
gM(a){var s=this.a
return s.gM(s)},
gt(a){var s=this.a,r=s.gS()
return new A.fT(r.gt(r),s,this.$ti.i("fT<1,2>"))}}
A.fT.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.h7.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.c(A.aB("Cannot modify unmodifiable map"))}}
A.ek.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
ai(a,b){this.a.ai(0,A.o(this).i("~(1,2)").a(b))},
gI(a){var s=this.a
return s.gI(s)},
gM(a){var s=this.a
return s.gM(s)},
gq(a){var s=this.a
return s.gq(s)},
gS(){return this.a.gS()},
n(a){return this.a.n(0)},
gao(){return this.a.gao()},
gO(){return this.a.gO()},
bd(a,b,c,d){return this.a.bd(0,A.o(this).E(c).E(d).i("R<1,2>(3,4)").a(b),c,d)},
$iX:1}
A.d_.prototype={}
A.cy.prototype={
gI(a){return this.gq(this)===0},
gM(a){return this.gq(this)!==0},
J(a,b){var s
for(s=J.O(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gp())},
d5(a){var s,r,q=this.b4(0)
for(s=this.gt(this);s.m();){r=s.gp()
if(a.v(0,r))q.aa(0,r)}return q},
n(a){return A.q1(this,"{","}")},
a7(a,b){var s
A.o(this).i("r(1)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
b2(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.e1(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
R(a,b){var s
A.o(this).i("r(1)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
T(a,b){var s,r
A.iJ(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.m1(b,b-r,this,"index"))},
$iG:1,
$in:1,
$icX:1}
A.h0.prototype={
d5(a){var s,r,q,p=this,o=p.eJ()
for(s=A.jz(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.l(0,q)}return o},
b4(a){var s=this.eJ()
s.J(0,this)
return s}}
A.jS.prototype={
l(a,b){this.$ti.c.a(b)
return A.xh()}}
A.fC.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gt(a){var s=this.a
return A.jz(s,s.r,A.o(s).c)},
b4(a){return this.a.b4(0)}}
A.eC.prototype={}
A.h8.prototype={}
A.jw.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jO(b):s}},
gq(a){return this.b==null?this.c.a:this.b5().length},
gI(a){return this.gq(0)===0},
gM(a){return this.gq(0)>0},
gS(){if(this.b==null){var s=this.c
return new A.a1(s,A.o(s).i("a1<1>"))}return new A.jx(this)},
gao(){var s,r=this
if(r.b==null){s=r.c
return new A.aJ(s,A.o(s).i("aJ<2>"))}return A.io(r.b5(),new A.ok(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.C(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.a3(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.kc().k(0,b,c)},
a3(a){if(this.b==null)return this.c.a3(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
ai(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ai(0,b)
s=o.b5()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.oK(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.ar(o))}},
b5(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.f(Object.keys(this.a),t.s)
return s},
kc(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.x(t.N,t.z)
r=n.b5()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.F(r)
n.a=n.b=null
return n.c=s},
jO(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.oK(this.a[a])
return this.b[a]=s}}
A.ok.prototype={
$1(a){return this.a.h(0,A.C(a))},
$S:20}
A.jx.prototype={
gq(a){return this.a.gq(0)},
T(a,b){var s=this.a
if(s.b==null)s=s.gS().T(0,b)
else{s=s.b5()
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gS()
s=s.gt(s)}else{s=s.b5()
s=new J.dc(s,s.length,A.K(s).i("dc<1>"))}return s}}
A.oA.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:23}
A.oz.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:23}
A.hv.prototype={
lq(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fp(a4,a5,a2)
s=$.uK()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.pp(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.pp(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aZ("")
g=o}else g=o
g.a+=B.b.C(a3,p,q)
c=A.aj(j)
g.a+=c
p=k
continue}}throw A.c(A.ac("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.C(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.re(a3,m,a5,n,l,r)
else{b=B.c.W(r-1,4)+1
if(b===1)throw A.c(A.ac(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bh(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.re(a3,m,a5,n,l,a)
else{b=B.c.W(a,4)
if(b===1)throw A.c(A.ac(a1,a3,a5))
if(b>1)a3=B.b.bh(a3,a5,a5,b===2?"==":"=")}return a3}}
A.kR.prototype={}
A.dh.prototype={}
A.hH.prototype={}
A.hR.prototype={}
A.fc.prototype={
n(a){var s=A.hS(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.il.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.ik.prototype={
bw(a,b){var s=A.yu(a,this.gkM().a)
return s},
bb(a,b){var s=A.x_(a,this.gkT().b,null)
return s},
gkT(){return B.ee},
gkM(){return B.ed}}
A.mi.prototype={}
A.mh.prototype={}
A.om.prototype={
i4(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.C(a,r,q)
r=q+1
o=A.aj(92)
s.a+=o
o=A.aj(117)
s.a+=o
o=A.aj(100)
s.a+=o
o=p>>>8&15
o=A.aj(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aj(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aj(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.C(a,r,q)
r=q+1
o=A.aj(92)
s.a+=o
switch(p){case 8:o=A.aj(98)
s.a+=o
break
case 9:o=A.aj(116)
s.a+=o
break
case 10:o=A.aj(110)
s.a+=o
break
case 12:o=A.aj(102)
s.a+=o
break
case 13:o=A.aj(114)
s.a+=o
break
default:o=A.aj(117)
s.a+=o
o=A.aj(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aj(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aj(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.C(a,r,q)
r=q+1
o=A.aj(92)
s.a+=o
o=A.aj(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.C(a,r,m)},
cI(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.il(a,null))}B.a.l(s,a)},
cs(a){var s,r,q,p,o=this
if(o.i3(a))return
o.cI(a)
try{s=o.b.$1(a)
if(!o.i3(s)){q=A.rA(a,null,o.geM())
throw A.c(q)}q=o.a
if(0>=q.length)return A.e(q,-1)
q.pop()}catch(p){r=A.ag(p)
q=A.rA(a,r,o.geM())
throw A.c(q)}},
i3(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.i4(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cI(a)
q.m6(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cI(a)
r=q.m7(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return r}else return!1},
m6(a){var s,r,q=this.c
q.a+="["
s=J.ax(a)
if(s.gM(a)){this.cs(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cs(s.h(a,r))}}q.a+="]"},
m7(a){var s,r,q,p,o,n,m=this,l={}
if(a.gI(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.c9(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ai(0,new A.on(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.i4(A.C(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.e(r,n)
m.cs(r[n])}p.a+="}"
return!0}}
A.on.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:22}
A.ol.prototype={
geM(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.j5.prototype={}
A.nM.prototype={
kH(a){return new A.oy(this.a).jf(t.L.a(a),0,null,!0)}}
A.oy.prototype={
jf(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.fp(b,c,J.b2(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.xy(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.xx(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cM(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.xz(o)
l.b=0
throw A.c(A.ac(m,a,p+l.c))}return n},
cM(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.L(b+c,2)
r=q.cM(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cM(a,s,c,d)}return q.kL(a,b,c,d)},
kL(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aZ(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.e(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.e(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.e(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aj(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aj(h)
e.a+=p
break
case 65:p=A.aj(h)
e.a+=p;--d
break
default:p=A.aj(h)
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
p=A.aj(a[l])
e.a+=p}else{p=A.rT(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aj(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.di.prototype={
V(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.di)if(this.a===b.a)s=this.b===b.b
return s},
gH(a){return A.cw(this.a,this.b,B.m,B.m)},
G(a,b){var s
t.ml.a(b)
s=B.c.G(this.a,b.a)
if(s!==0)return s
return B.c.G(this.b,b.b)},
n(a){var s=this,r=A.vk(A.wj(s)),q=A.hJ(A.wh(s)),p=A.hJ(A.wd(s)),o=A.hJ(A.we(s)),n=A.hJ(A.wg(s)),m=A.hJ(A.wi(s)),l=A.rk(A.wf(s)),k=s.b,j=k===0?"":A.rk(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaI:1}
A.cP.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.cP&&this.a===b.a},
gH(a){return B.c.gH(this.a)},
G(a,b){return B.c.G(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.L(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.L(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.lC(B.c.n(o%1e6),6,"0")},
$iaI:1}
A.jq.prototype={
n(a){return this.A()},
$iH:1}
A.a9.prototype={
gbl(){return A.wc(this)}}
A.hr.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hS(s)
return"Assertion failed"}}
A.cB.prototype={}
A.bY.prototype={
gcO(){return"Invalid argument"+(!this.a?"(s)":"")},
gcN(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gcO()+q+o
if(!s.a)return n
return n+s.gcN()+": "+A.hS(s.gdK())},
gdK(){return this.b}}
A.en.prototype={
gdK(){return A.tE(this.b)},
gcO(){return"RangeError"},
gcN(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.i8.prototype={
gdK(){return A.a(this.b)},
gcO(){return"RangeError"},
gcN(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fD.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.j_.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.es.prototype={
n(a){return"Bad state: "+this.a}}
A.hF.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hS(s)+"."}}
A.iz.prototype={
n(a){return"Out of Memory"},
gbl(){return null},
$ia9:1}
A.fy.prototype={
n(a){return"Stack Overflow"},
gbl(){return null},
$ia9:1}
A.o6.prototype={
n(a){return"Exception: "+this.a}}
A.J.prototype={
n(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.C(e,0,75)+"..."
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
k=""}return g+l+B.b.C(e,i,j)+k+"\n"+B.b.X(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g}}
A.n.prototype={
c4(a,b){return A.vc(this,A.o(this).i("n.E"),b)},
bK(a,b,c){var s=A.o(this)
return A.io(this,s.E(c).i("1(n.E)").a(b),s.i("n.E"),c)},
e2(a,b){var s=A.o(this)
return new A.Q(this,s.i("r(n.E)").a(b),s.i("Q<n.E>"))},
e3(a,b){return new A.c3(this,b.i("c3<0>"))},
bE(a,b,c,d){var s,r
d.a(b)
A.o(this).E(d).i("1(1,n.E)").a(c)
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a7(a,b){var s
A.o(this).i("r(n.E)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
R(a,b){var s
A.o(this).i("r(n.E)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
bj(a,b){var s=A.L(this,A.o(this).i("n.E"))
return s},
bi(a){return this.bj(0,!0)},
gq(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gI(a){return!this.gt(this).m()},
gM(a){return!this.gI(this)},
gam(a){var s=this.gt(this)
if(!s.m())throw A.c(A.ic())
return s.gp()},
cf(a,b,c){var s,r
A.o(this).i("r(n.E)").a(b)
for(s=this.gt(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.c(A.ic())},
l3(a,b){return this.cf(0,b,null)},
T(a,b){var s,r
A.iJ(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.m1(b,b-r,this,"index"))},
n(a){return A.vV(this,"(",")")}}
A.R.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.al.prototype={
gH(a){return A.E.prototype.gH.call(this,0)},
n(a){return"null"}}
A.E.prototype={$iE:1,
V(a,b){return this===b},
gH(a){return A.fo(this)},
n(a){return"Instance of '"+A.iG(this)+"'"},
gP(a){return A.ka(this)},
toString(){return this.n(this)}}
A.jQ.prototype={
n(a){return""},
$icf:1}
A.nv.prototype={
gkR(){var s,r=this.b
if(r==null)r=$.mQ.$0()
s=r-this.a
if($.r9()===1e6)return s
return s*1000}}
A.aZ.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iwy:1}
A.nL.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.C(b)
s=B.b.ci(b,"=")
if(s===-1){if(b!=="")a.k(0,A.qv(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.C(b,0,s)
q=B.b.bP(b,s+1)
p=this.a
a.k(0,A.qv(r,0,r.length,p,!0),A.qv(q,0,q.length,p,!0))}return a},
$S:49}
A.nK.prototype={
$2(a,b){throw A.c(A.ac("Illegal IPv6 address, "+a,this.a,b))},
$S:52}
A.h9.prototype={
gf5(){var s,r,q,p,o=this,n=o.w
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
gH(a){var s,r=this,q=r.y
if(q===$){s=B.b.gH(r.gf5())
r.y!==$&&A.uw()
r.y=s
q=s}return q},
gbf(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.t0(s==null?"":s)
r.z!==$&&A.uw()
q=r.z=new A.d_(s,t.oP)}return q},
gi1(){return this.b},
gdJ(){var s=this.c
if(s==null)return""
if(B.b.a_(s,"[")&&!B.b.a2(s,"v",1))return B.b.C(s,1,s.length-1)
return s},
gdP(){var s=this.d
return s==null?A.tm(this.a):s},
gdR(){var s=this.f
return s==null?"":s},
ghy(){var s=this.r
return s==null?"":s},
ghz(){return this.c!=null},
ghB(){return this.f!=null},
ghA(){return this.r!=null},
n(a){return this.gf5()},
V(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.ge6())if(p.c!=null===b.ghz())if(p.b===b.gi1())if(p.gdJ()===b.gdJ())if(p.gdP()===b.gdP())if(p.e===b.ghM()){r=p.f
q=r==null
if(!q===b.ghB()){if(q)r=""
if(r===b.gdR()){r=p.r
q=r==null
if(!q===b.ghA()){s=q?"":r
s=s===b.ghy()}}}}return s},
$ij2:1,
ge6(){return this.a},
ghM(){return this.e}}
A.nJ.prototype={
gi0(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.b.cj(s,"?",m)
q=s.length
if(r>=0){p=A.ha(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.jm("data","",n,n,A.ha(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jK.prototype={
ghz(){return this.c>0},
ghB(){return this.f<this.r},
ghA(){return this.r<this.a.length},
ge6(){var s=this.w
return s==null?this.w=this.jc():s},
jc(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.a_(r.a,"http"))return"http"
if(q===5&&B.b.a_(r.a,"https"))return"https"
if(s&&B.b.a_(r.a,"file"))return"file"
if(q===7&&B.b.a_(r.a,"package"))return"package"
return B.b.C(r.a,0,q)},
gi1(){var s=this.c,r=this.b+3
return s>r?B.b.C(this.a,r,s-1):""},
gdJ(){var s=this.c
return s>0?B.b.C(this.a,s,this.d):""},
gdP(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.zt(B.b.C(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.a_(r.a,"http"))return 80
if(s===5&&B.b.a_(r.a,"https"))return 443
return 0},
ghM(){return B.b.C(this.a,this.e,this.f)},
gdR(){var s=this.f,r=this.r
return s<r?B.b.C(this.a,s+1,r):""},
ghy(){var s=this.r,r=this.a
return s<r.length?B.b.bP(r,s+1):""},
gbf(){if(this.f>=this.r)return B.bB
return new A.d_(A.t0(this.gdR()),t.oP)},
gH(a){var s=this.x
return s==null?this.x=B.b.gH(this.a):s},
V(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$ij2:1}
A.jm.prototype={}
A.mz.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.pQ.prototype={
$1(a){return this.a.d0(this.b.i("0/?").a(a))},
$S:11}
A.pR.prototype={
$1(a){if(a==null)return this.a.fg(new A.mz(a===undefined))
return this.a.fg(a)},
$S:11}
A.pk.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.tY(a))return a
s=this.a
a.toString
if(s.a3(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aX(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dX(!0,"isUtc",t.y)
return new A.di(r,0,!0)}if(a instanceof RegExp)throw A.c(A.z("structured clone of RegExp",null))
if(a instanceof Promise)return A.aG(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.x(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c4(n),p=s.gt(n);p.m();)m.push(A.cM(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.e(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.ax(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:115}
A.jv.prototype={
au(a){if(a<=0||a>4294967296)throw A.c(A.rL(u.w+a))
return Math.random()*a>>>0},
cn(){return Math.random()},
$iqb:1}
A.ew.prototype={
cD(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.aN()
l.aN()
l.aN()
l.aN()},
aN(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.L(o-n+(q-p)+(m-r),4294967296)>>>0},
au(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.c(A.rL(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aN()
return(p.a&s)>>>0}do{p.aN()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cn(){var s,r=this
r.aN()
s=r.a
r.aN()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iqb:1}
A.mT.prototype={
B(){var s=this
if(B.a.R(A.f([s.d,s.e,s.f,s.r,s.w],t.t),new A.mU()))throw A.c(B.dF)}}
A.mU.prototype={
$1(a){return A.a(a)<=0},
$S:24}
A.dB.prototype={
A(){return"QualityProfileKind."+this.b}}
A.dA.prototype={}
A.kX.prototype={}
A.kY.prototype={}
A.iE.prototype={
B(){var s,r,q,p,o=this
for(s=A.W(["exposure",o.a,"bloomStrength",o.b,"ssaoStrength",o.c,"depthOfFieldStrength",0,"vignette",o.e,"grain",o.f,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.T(s,A.o(s).i("T<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.c(A.z("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.c(A.z("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.e7.prototype={}
A.hX.prototype={
B(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.ga8(0)||!k.b.ga8(0)||!k.r.ga8(0))throw A.c(A.z("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.c(A.z("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+k.d,j))
s=k.w
if(!isFinite(s)||s<0)throw A.c(A.z("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.ga8(0)||r.gbH()<1e-12)A.k(A.z("DirectionalLight.direction must be finite and nonzero: "+r.n(0),j))
s=s.c
if(!isFinite(s)||s<0)A.k(A.z("DirectionalLight.intensity must be >= 0: "+A.q(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.z("PointLight.position must be finite: "+o.n(0),j))
o=p.d
if(!isFinite(o)||o<0)A.k(A.z("PointLight.intensity must be >= 0: "+A.q(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.z("PointLight.radius must be > 0: "+A.q(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.z("SpotLight.position must be finite: "+o.n(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.k(A.z("SpotLight.direction must be finite and nonzero: "+o.n(0),j))
if(p.w<=p.r)A.k(A.z("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.ln.prototype={}
A.cx.prototype={
V(a,b){if(b==null)return!1
return J.e_(b)===A.ka(this)&&b instanceof A.cx&&this.a===b.a&&this.b===b.b},
gH(a){return A.cw(A.ka(this),this.a,this.b,B.m)}}
A.bi.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bA.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cb.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.iA.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cr.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.dr.prototype={
A(){return"HandleRejection."+this.b}}
A.lD.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.ct.prototype={
ga8(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
V(a,b){if(b==null)return!1
return b instanceof A.ct&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gH(a){return A.cw(this.a,this.b,this.c,B.m)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.l3.prototype={}
A.iD.prototype={}
A.cz.prototype={}
A.hq.prototype={
A(){return"AlphaMode."+this.b}}
A.ca.prototype={
B(){var s=null
if(this.a.length===0)throw A.c(A.z("MaterialDefinition.key must not be empty",s))
if(!isFinite(0))throw A.c(A.z(u.i,s))
if(this.w===0||this.x===0)throw A.c(A.z(u.p,s))
if(!isFinite(0.5))throw A.c(A.z(u.n,s))}}
A.cD.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.cE.prototype={}
A.nN.prototype={
B(){var s,r,q,p
for(s=0;s<6;++s){r=B.av[s]
q=r.b
p=q+r.c
if(p>14)throw A.c(A.z('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bN.prototype={
B(){var s,r,q,p,o,n=this
n.a.B()
s=n.b.length
if(B.c.W(s,14)!==0)throw A.c(A.z("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.c(A.z("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga8(0)&&s.b.ga8(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.c(A.z("MeshData.localBounds must be a valid AABB",null))}}
A.mB.prototype={
B(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.c(A.z("resource plan must contain sceneColor and present",null))
if(s.R(0,new A.mD()))throw A.c(A.z("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.c(A.z("resource history does not match vhsOutput ownership",null))}}
A.mD.prototype={
$1(a){return A.C(a).length===0},
$S:4}
A.mL.prototype={}
A.iM.prototype={
hD(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.c(A.l("resource assembler is initialized"))
a.B()
s.a=a
s.c=1},
by(){if(this.d)return
this.d=!0
this.a=null}}
A.ea.prototype={
A(){return"DrawMode."+this.b}}
A.hx.prototype={
A(){return"BlendMode."+this.b}}
A.aL.prototype={}
A.iV.prototype={
B(){var s=this
if(s.a<0||s.b<0)throw A.c(A.z("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.c(A.z("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.c(A.z("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hE.prototype={
A(){return"ColorEncoding."+this.b}}
A.hN.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.iK.prototype={
B(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.d5(B.h6)
if(o.a!==0)A.k(A.ay(o,r,"contains unknown pipeline features"))
if(q.a===B.ax&&p.gM(p))A.k(A.ay(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.c(A.z("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dD.prototype={
A(){return"RendererState."+this.b}}
A.lp.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.iq.prototype={
lS(a){return this.a.bx(a)}}
A.mu.prototype={
$3(a,b,c){return new A.cb(A.a(a),A.a(b),A.br(c))},
$S:67}
A.j1.prototype={}
A.mw.prototype={
b9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.t6(d,new A.i_(c.byteLength,B.bc,B.dQ))
if(d.b!==B.f)A.k(A.l(e))
s=A.d(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.cj(d)
A.b5(d,p)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a4(t.S)
for(n=a.a,m=0;m<6;++m){l=B.av[m]
k=A.ub(l.a)
if(!o.l(0,k))continue
j=A.xS(n,k,l)
if(d.b!==B.f)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.t6(d,new A.i_(i.byteLength,B.bc,B.bb))
if(d.b!==B.f)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.d(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.j1(b,h,p,d,c.length/14|0)},
lN(a){var s=this.c.h(0,a.a)
if(s==null)throw A.c(A.dq(B.as,a))
this.b.bx(a)
return s},
aR(a){var s,r,q=this.c.aa(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.d(q.c.a))
s.deleteBuffer(A.d(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.d(r.a))}this.b.aR(a)},
dU(){var s,r,q,p
for(s=this.b.bc(),r=s.$ti,s=new A.bF(s.a(),r.i("bF<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.b9(p.b))}},
gbI(){return this.b.bc().bE(0,0,new A.my(),t.S)}}
A.mx.prototype={
$3(a,b,c){return new A.bi(A.a(a),A.a(b),A.br(c))},
$S:68}
A.my.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:70}
A.cH.prototype={}
A.iY.prototype={
ew(){var s=this.a,r=A.ql(s,B.dT)
A.qm(s,r,0,$.uz())
return r},
m0(a,b){var s,r,q,p=this,o=p.b,n=o.bx(a),m=A.L(n.b,t.nh)
B.a.k(m,0,b)
s=n.a
o.e_(a,new A.cH(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.ql(p.a,s)
o.k(0,r,q)}A.qm(p.a,q,0,b)},
lQ(a){var s,r=this
if(a==null){s=r.d
s===$&&A.h()
return s}r.b.bx(a)
s=r.c.h(0,a.a)
if(s==null){s=r.d
s===$&&A.h()}return s},
dU(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.ew()
for(s=i.b.bc(),r=s.$ti,s=new A.bF(s.a(),r.i("bF<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.nG()))continue
l=A.ql(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.qm(p,l,k,j)}q.k(0,n.a,l)}},
gbI(){return this.b.bc().bE(0,0,new A.nF(),t.S)}}
A.nE.prototype={
$3(a,b,c){return new A.bA(A.a(a),A.a(b),A.br(c))},
$S:87}
A.nG.prototype={
$1(a){return t.nh.a(a)==null},
$S:93}
A.nF.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:103}
A.ds.prototype={}
A.hV.prototype={
kv(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.U.a(a)
s=new A.mX(A.f([],t.hJ),A.a4(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)r[p].af(s,b)
o=s.ku(a,!1)
if(o.b.length!==0)return new A.hW(o,B.eD)
q=o.a
n=A.K(q)
m=new A.N(q,n.i("m(1)").a(new A.lj()),n.i("N<1,m>")).b4(0)
l=A.f([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){k=r[p]
for(n=k.ae(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.ga1().a))throw A.c(A.l('RenderFeature "'+k.gaj()+'" created a pass "'+i.ga1().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.Z(l,new A.lk(o))
return new A.hW(o,l)}}
A.lj.prototype={
$1(a){return t.A.a(a).a},
$S:106}
A.lk.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.G(B.a.hC(s,new A.lh(a)),B.a.hC(s,new A.li(b)))},
$S:107}
A.lh.prototype={
$1(a){return t.A.a(a).a===this.a.ga1().a},
$S:7}
A.li.prototype={
$1(a){return t.A.a(a).a===this.a.ga1().a},
$S:7}
A.hW.prototype={}
A.ee.prototype={
A(){return"FrameQueueState."+this.b}}
A.lo.prototype={}
A.am.prototype={
gbM(){var s=this.c,r=A.K(s)
return new A.Q(s,r.i("r(1)").a(new A.mF()),r.i("Q<1>"))},
gct(){var s=this.c,r=A.K(s)
return new A.Q(s,r.i("r(1)").a(new A.mG()),r.i("Q<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.mF.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.E},
$S:13}
A.mG.prototype={
$1(a){return t.n4.a(a).b===B.k},
$S:13}
A.c_.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bw.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ft.prototype={
A(){return"ResourceFormat."+this.b}}
A.cq.prototype={
A(){return"GraphStage."+this.b}}
A.aY.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.eo.prototype={
A(){return"ResourceAccess."+this.b}}
A.S.prototype={}
A.eW.prototype={}
A.mR.prototype={
ak(a){var s,r,q,p,o,n,m=this
a.B()
s=null
try{r=t.a
s=A.wU(m.a,a.c,r.a(a.d.gS().bi(0)),r.a(a.f),a.b)}catch(q){if(A.ag(q) instanceof A.fx){++m.e
throw q}else throw q}p=new A.eW(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.d(n.b.a))
return p},
ji(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.ap(s,s.r,s.e,a.$ti.i("ap<1>")),r=this.a.a;s.m();)r.deleteProgram(A.d(s.d.b.a))}}
A.aW.prototype={
B(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.c(A.z("ProgramSource.id must not be empty",m))
s=t.S
r=A.a4(s)
for(q=this.d.gO(),q=q.gt(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.c(A.z('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.c(A.z('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a4(s)
for(s=this.e.gO(),s=s.gt(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.c(A.z('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.c(A.z('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.mV.prototype={}
A.aV.prototype={
a5(){var s=this
return A.rm(B.cp,s.f,B.a1,B.O,!0,!0,!0,!0,s.r,B.a3,B.a4,s.d,s.e,!0,!1,!1)}}
A.mX.prototype={
ku(a,b){var s=this.kd(t.U.a(a),!1),r=this.a,q=A.K(r)
return new A.mW(A.ao(new A.Q(r,q.i("r(1)").a(new A.n0()),q.i("Q<1>")),t.A),s)},
kd(a,b){var s,r,q,p,o,n,m=this
t.U.a(a)
s=A.f([],t.aW)
r=m.a
q=A.K(r)
p=q.i("Q<1>")
o=A.L(new A.Q(r,q.i("r(1)").a(new A.n_()),p),p.i("n.E"))
m.j2(o,a,s)
m.j6(o,s)
m.j5(o,!1,s)
n=m.j9(o,s)
m.j7(o,n,s)
m.j8(o,s)
m.j4(o,n,s)
m.j3(o,s)
return s},
j2(a,b,c){var s,r,q,p
t.O.a(a)
t.U.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=B.F.d5(b)
if(p.a!==0)B.a.l(c,new A.bw(B.e2,q.a,"missing capabilities: "+p.b2(0,", ")))}},
j6(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbM(),o=J.O(p.a),p=new A.I(o,p.b,p.$ti.i("I<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.l(b,new A.bw(B.dY,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
j5(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.p)(p),++m){l=p[m]
if(l.b===B.E)B.a.l(c,new A.bw(B.e0,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
j9(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.b.a(b)
s=A.x(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
for(o=p.gct(),n=J.O(o.a),o=new A.I(n,o.b,o.$ti.i("I<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bw(B.dX,m,l.n(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
j7(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbM(),p=J.O(q.a),q=new A.I(p,q.b,q.$ti.i("I<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.E)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bw(B.bh,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.ci(a,m)>s)B.a.l(c,new A.bw(B.bh,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
j8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbM(),o=J.O(p.a),p=new A.I(o,p.b,p.$ti.i("I<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.E)continue
for(l=q.gct(),k=J.O(l.a),l=new A.I(k,l.b,l.$ti.i("I<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bw(B.e_,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
j4(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbM(),o=J.O(p.a),p=new A.I(o,p.b,p.$ti.i("I<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.E)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gct().l3(0,new A.mZ(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bw(B.dZ,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
j3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
s=t.S
r=A.x(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gct(),o=J.O(p.a),p=new A.I(o,p.b,p.$ti.i("I<1>"));p.m();){n=o.gp().a
r.k(0,n.a+"#"+n.f,q)}m=J.ie(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a4(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbM(),p=J.O(s.a),s=new A.I(p,s.b,s.$ti.i("I<1>"));s.m();){o=p.gp()
if(o.b===B.E)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.e(m,k)
m[k].l(0,q)}}p=t.y
j=A.c9(s,!1,!1,p)
s=a.length
i=A.c9(s,!1,!1,p)
h=new A.mY(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.e(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.e(a,q)
B.a.l(b,new A.bw(B.e1,a[q].a,"participates in a resource dependency cycle"))}}}}
A.n0.prototype={
$1(a){t.A.a(a)
return A.q9()},
$S:7}
A.n_.prototype={
$1(a){t.A.a(a)
return A.q9()},
$S:7}
A.mZ.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:13}
A.mY.prototype={
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
r=A.jz(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:24}
A.mW.prototype={}
A.dP.prototype={$ibz:1}
A.fq.prototype={
cZ(a){var s,r,q,p,o,n=a.c,m=n.a
if(!m.ga8(0))A.k(A.z("Transform.translation must be finite: "+m.n(0),null))
m=n.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)&&isFinite(m.d)))A.k(A.z("Transform.rotation must be finite: "+m.n(0),null))
if(!isFinite(1))A.k(A.z(u.u,null))
m=this.a.bx(a.a).d
n=n.ab()
s=m.a
r=s.a
q=s.b
s=s.c
m=m.b
p=m.a
o=m.b
m=m.c
return A.bf(new A.N(A.f([new A.A(r,q,s),new A.A(p,q,s),new A.A(r,o,s),new A.A(p,o,s),new A.A(r,q,m),new A.A(p,q,m),new A.A(r,o,m),new A.A(p,o,m)],t.k),t.pc.a(n.gav()),t.mz))},
gdL(){return new A.ck(this.lh(),t.fJ)},
lh(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bc(),n=o.$ti,o=new A.bF(o.a(),n.i("bF<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.B()
f=k.a(g.a)
m.a0(f)
f=f.a
if(!(f>=0&&f<j.length)){A.e(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ab()
f=f.gaw()
d=A.K(f)
r=5
return a.b=new A.dP(h,g,A.bf(new A.N(f,d.i("A(1)").a(i.gav()),d.i("N<1,A>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iwp:1}
A.n2.prototype={
$3(a,b,c){return new A.cr(A.a(a),A.a(b),A.br(c))},
$S:34}
A.p_.prototype={
$1(a){var s=this.a.w.a.lN(a),r=s.b!=null,q=r?s.d:s.e
return new A.fs(s.c,r,q)},
$S:35}
A.p0.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hL(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hL(b)
throw A.c(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.oZ.prototype={
$0(){return this.a.$1("shadowMap")},
$S:3}
A.oS.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gam(r)},
$S:33}
A.oT.prototype={
$0(){var s=this.a.at
s=s==null?null:s.b.z
return s==null?B.at:s},
$S:39}
A.oY.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:3}
A.oN.prototype={
$0(){return this.a.at.a},
$S:40}
A.oP.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:3}
A.oO.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:3}
A.oX.prototype={
$0(){return this.a.$1("sceneColor")},
$S:3}
A.oL.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:3}
A.oM.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:3}
A.oU.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:3}
A.oV.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:3}
A.oW.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:3}
A.oR.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:3}
A.oQ.prototype={
$0(){return this.a.at.w},
$S:41}
A.ot.prototype={}
A.jE.prototype={$iwo:1}
A.js.prototype={$ivH:1}
A.nb.prototype={
dT(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.B()
r=s.b.aq(a,b)
s.c.k(0,r.a,s.b9(a))
this.d.l(0,r)
return r},
hV(a){if(this.r)A.k(A.l("resource library is disposed"))
this.a.aR(a)
this.d.aa(0,a)},
hT(a){var s,r=null
if(this.r)A.k(A.l("resource library is disposed"))
if(a.a.length===0)A.k(A.z("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.z(u.i,r))
if(a.w===0||a.x===0)A.k(A.z(u.p,r))
if(!isFinite(0.5))A.k(A.z(u.n,r))
s=this.b.a.aq(a,r)
this.e.l(0,s)
return s},
hU(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.aq(new A.cH(new A.i1(c,b,1,!1,B.a8,B.a8,B.be),A.c9(1,null,!1,t.nh),!1),a)
this.f.l(0,s)
return s},
by(){var s,r,q,p,o,n,m,l,k,j,i=this
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
j=o.aa(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aR(k)}r=i.e
q=A.L(r,A.o(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.p)(q),++l)o.aR(q[l])
q=i.d
p=A.L(q,A.o(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.p)(p),++l)n.aR(p[l])
s.F(0)
r.F(0)
q.F(0)
i.r=!0}}
A.nh.prototype={
gaC(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
hE(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.aA)throw A.c(A.l("renderer can only be initialized once"))
a.B()
b.B()
s=m.a
if(s.b===B.T)throw A.c(A.l("renderer device is context lost"))
m.e=B.fZ
try{m.r=s.hQ()
r=m.b
q=A.mC(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.B()
p.a=a
A.mC(a)
p.d=1
r.b.hD(q)
r=A.w3()
m.w=new A.nb(A.w4(s),r,A.wA(s),A.a4(t.l0),A.a4(t.fP),A.a4(t.lu))
r=new A.iM()
p=new A.lC(s,r)
q=A.mC(a)
o=p.ex(q,a)
r.hD(q)
p.c=new A.iF(new A.mL(q),o)
m.x=p
m.y=new A.mR(s,A.x(t.N,t.e3))
m.as=a
A.tL(m)
m.e=B.aB}catch(n){s=m.y
if(s!=null){r=s.b
s.ji(new A.aJ(r,A.o(r).i("aJ<2>")))
r.F(0)}s=m.x
if(s!=null)s.by()
s=m.w
if(s!=null)s.by()
m.w=null
m.e=B.aA
throw n}return A.q0(t.H)},
kU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bV()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.c(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.ap)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.nz(j,0,A.dX(k.c,"count",t.S),A.K(j).c).bj(0,!1)
k.b=B.dJ
q=i
try{A.y_(a3,r,s)
k=r.gdL()
j=t.p9
h=k.$ti
k=A.L(A.io(k,h.i("aL(n.E)").a(new A.ni()),h.i("n.E"),j),j)
p=k
J.uW(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.p)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.dq(B.as,h))
j=j.b
d=j.$ti
j.a0(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.e(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.L(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.U()
n=j+h}p=s.e
k=J.b2(o)
j=n
h=J.b2(o)
f=a3.w
d=f.a.gbI()
f=f.c.gbI()
c=a3.w
c.a.gbI()
c.c.gbI()
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
return new A.lp(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
jR(){var s,r,q,p=this
if(p.e!==B.bI)return
if(p.a.b===B.T)throw A.c(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.l("resource library is disposed"))
s.a.dU()
s.c.dU()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.l("GPU resource adapter is not initialized"))
s.c=new A.iF(q.a,s.ex(A.mC(r),r))
s=p.y
s.c=null
s.b.F(0)
A.tL(p)
p.e=B.aB},
bV(){var s=this.e
if(s!==B.aB)throw A.c(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.T){this.e=B.bI
throw A.c(A.l("renderer context lost"))}}}
A.ni.prototype={
$1(a){return t.os.a(a).b},
$S:42}
A.bj.prototype={
G(a,b){var s,r=this
t.nL.a(b)
s=B.c.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.G(r.c.a,b.c.a)
if(s!==0)return s
return B.c.G(r.d,b.d)},
$iaI:1}
A.bg.prototype={
G(a,b){var s
t.dP.a(b)
s=B.d.G(b.a,this.a)
if(s!==0)return s
return B.c.G(this.b,b.b)},
$iaI:1}
A.au.prototype={}
A.pV.prototype={
$2(a,b){var s=t.p
return s.a(a).a.G(0,s.a(b).a)},
$S:43}
A.pW.prototype={
$1(a){return t.p.a(a).b},
$S:44}
A.pT.prototype={
$2(a,b){var s=t.d
return s.a(a).a.G(0,s.a(b).a)},
$S:45}
A.pU.prototype={
$1(a){return t.d.a(a).b},
$S:46}
A.l_.prototype={}
A.ho.prototype={
gaw(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.f([new A.A(o,n,p),new A.A(r,n,p),new A.A(o,q,p),new A.A(r,q,p),new A.A(o,n,s),new A.A(r,n,s),new A.A(o,q,s),new A.A(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.dz.prototype={}
A.ef.prototype={
A(){return"FrustumTest."+this.b}}
A.lq.prototype={
lY(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.ba
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.dK:B.dL}}
A.lr.prototype={
$4(a,b,c,d){var s=new A.A(a,b,c),r=new A.dz(s,d),q=Math.sqrt(s.gbH())
if(q<1e-9)s=r
else{s=1/q
s=new A.dz(new A.A(a*s,b*s,c*s),d/q)}return s},
$S:47}
A.cv.prototype={
X(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.e(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.e(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.e(h,j)
h[j]=l}return new A.cv(h)},
hY(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.A(k,j,i):new A.A(k/h,j/h,i/h)},
hK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.cv(h)},
ga8(a){return B.o.a7(this.a,new A.mt())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.mt.prototype={
$1(a){return isFinite(A.d8(a))},
$S:5}
A.iI.prototype={
n(a){var s=this
return"Quat("+A.q(s.a)+", "+A.q(s.b)+", "+A.q(s.c)+", "+A.q(s.d)+")"}}
A.iZ.prototype={
B(){var s=this.a
if(!s.ga8(0))throw A.c(A.z("Transform.translation must be finite: "+s.n(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.c(A.z("Transform.rotation must be finite: "+s.n(0),null))
if(!isFinite(1))throw A.c(A.z(u.u,null))},
ab(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.rF(A.f([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.rF(A.f([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
n(a){return"Transform("+this.a.n(0)+", "+this.b.n(0)+", scale=1)"}}
A.A.prototype={
bz(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aY(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.A(s*r-q*p,q*o-n*r,n*p-s*o)},
gbH(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbH())},
ga8(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga4(){var s=this,r=Math.sqrt(s.gbH())
return r<1e-9?B.a_:new A.A(s.a/r,s.b/r,s.c/r)},
V(a,b){if(b==null)return!1
return b instanceof A.A&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gH(a){return A.cw(this.a,this.b,this.c,B.m)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.fK.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eU.prototype={
gaj(){return this.f},
af(a,b){B.a.l(a.a,new A.am(this.f,B.B,A.f([new A.S(this.x,B.h),new A.S(this.y,B.k)],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aW(s.e,s.b,s.c,B.t,B.bA,B.bw)),q=A.cj(s.d),p=t.n,o=s.y,n=s.r===B.cl?new Float32Array(A.U(A.f([1/o.c,0],p))):new Float32Array(A.U(A.f([0,1/o.d],p)))
return A.f([new A.jj(new A.aV(s.f,A.f([new A.S(s.x,B.h),new A.S(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$iad:1}
A.jj.prototype={
ag(a){var s,r,q,p=this
if(a.c.e.b<=0)return
s=a.b.a
A.bE(s,a.a6(p.r).b)
A.b_(s,p.a.a5())
A.cG(s,B.R,1,0,0,0)
A.bQ(s,p.b.b)
r=t._
q=p.d
if(p.e)A.wR(s,0,r.a(q.$0()))
else A.aC(s,0,r.a(q.$0()))
A.t(s,"uSource",B.u)
A.t(s,"uTexelStep",new A.y(B.ae,p.f))
A.b5(s,p.c)
A.c2(s,3,0)},
$ia2:1,
ga1(){return this.a}}
A.hy.prototype={
gaj(){return"bloomComposite"},
af(a,b){B.a.l(a.a,new A.am("bloomComposite",B.B,A.f([B.c7,B.c1,new A.S($.pX(),B.k)],t.C)))},
ae(a){var s=this,r="bloomComposite",q=s.a.ak(new A.aW(r,s.b,s.c,B.t,B.f1,B.eN)),p=A.cj(s.d)
return A.f([new A.jk(new A.aV(r,A.f([B.c7,B.c1,new A.S($.pX(),B.k)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$iad:1}
A.jk.prototype={
ag(a){var s,r=a.c.e.b
if(r<=0)return
s=a.b.a
A.bE(s,a.a6("sceneColor").b)
A.wS(s,1)
A.b_(s,B.cM)
A.bQ(s,this.b.b)
A.aC(s,0,t._.a(this.d.$0()))
A.t(s,"uBloom",B.u)
A.t(s,"uBloomStrength",new A.y(B.e,r))
A.b5(s,this.c)
A.c2(s,3,0)},
$ia2:1,
ga1(){return this.a}}
A.hL.prototype={
gaj(){return"depthPrepass"},
af(a,b){B.a.l(a.a,new A.am("depthPrepass",B.dV,A.f([B.c2],t.C)))},
ae(a){var s=this,r="depthPrepass",q=s.a.ak(new A.aW(r,s.b,s.c,B.bz,B.bx,B.es))
return A.f([new A.jn(new A.aV(r,A.f([B.c2],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iad:1}
A.jn.prototype={
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bE(b,a.a6("sceneDepth").b)
A.b_(b,g.a.a5())
A.cG(b,B.an,1,0,0,0)
A.bQ(b,g.b.b)
A.t(b,"uVertexSnapGrid",new A.y(B.e,c.y))
A.t(b,"uAlbedo",B.u)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
k=l.a.b
A.t(b,"uViewProjection",new A.y(B.q,new Float32Array(A.U(d))))
A.t(b,"uModel",new A.y(B.q,new Float32Array(A.U(k.c.ab().a))))
g.jj(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.f)A.k(A.l(f))
n.bindVertexArray(A.d(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.f)A.k(A.l(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.f)A.k(A.l(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
jj(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.y(B.e,0))
A.t(q,"uAffineWarpStrength",new A.y(B.e,0))
s=this.a.a5()
A.b_(q,r.at?s.e4(!1):s)},
$ia2:1,
ga1(){return this.a}}
A.fM.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eZ.prototype={
gaj(){return this.f},
af(a,b){B.a.l(a.a,new A.am(this.f,B.B,A.f([new A.S(this.w,B.h),new A.S(this.x,B.k)],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aW(s.e,s.b,s.c,B.t,B.bA,B.bw)),q=A.cj(s.d),p=t.n,o=s.x,n=s.r===B.cm?new Float32Array(A.U(A.f([1/o.c,0],p))):new Float32Array(A.U(A.f([0,1/o.d],p)))
return A.f([new A.jo(new A.aV(s.f,A.f([new A.S(s.w,B.h),new A.S(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$iad:1}
A.jo.prototype={
ag(a){return},
$ia2:1,
ga1(){return this.a}}
A.hP.prototype={
gaj(){return"dofComposite"},
af(a,b){B.a.l(a.a,new A.am("dofComposite",B.B,A.f([new A.S(this.z,B.h),B.c5,B.c_],t.C)))},
ae(a){var s=this,r="dofComposite",q=s.a.ak(new A.aW(r,s.b,s.c,B.t,B.f0,B.er)),p=A.cj(s.d)
return A.f([new A.jp(new A.aV(r,A.f([new A.S(s.z,B.h),B.c5,B.c_],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iad:1}
A.jp.prototype={
ag(a){var s,r=this,q=a.a6("dofOutput"),p=r.r.$0(),o=a.b.a
A.bE(o,q.b)
A.b_(o,r.a.a5())
A.bQ(o,r.b.b)
s=t._
A.aC(o,0,s.a(r.d.$0()))
A.t(o,"uSharp",B.u)
A.aC(o,1,s.a(r.e.$0()))
A.t(o,"uBlurred",B.Z)
A.aC(o,2,s.a(r.f.$0()))
A.t(o,"uSceneDepth",B.cg)
A.t(o,"uNear",new A.y(B.e,p.f))
A.t(o,"uFar",new A.y(B.e,p.r))
A.t(o,"uFocusDistance",new A.y(B.e,r.w))
A.t(o,"uFocusRange",new A.y(B.e,r.x))
A.t(o,"uStrength",new A.y(B.e,0))
A.b5(o,r.c)
A.c2(o,3,0)},
$ia2:1,
ga1(){return this.a}}
A.i4.prototype={
gaj(){return"grade"},
af(a,b){B.a.l(a.a,new A.am("grade",B.B,A.f([new A.S(this.r,B.h),B.bY],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aW("grade",s.b,s.c,B.t,B.eZ,B.eP)),q=A.cj(s.d),p=s.r
return A.f([new A.ju(new A.aV("grade",A.f([new A.S(p,B.h),B.bY],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$iad:1}
A.ju.prototype={
ag(a){var s=this,r=a.a6(s.f.a),q=a.b.a
A.bE(q,a.a6("gradeOutput").b)
A.b_(q,s.a.a5())
A.bQ(q,s.b.b)
A.aC(q,0,r.b)
A.t(q,"uScene",B.u)
A.aC(q,1,t._.a(s.d.$0()))
A.t(q,"uLut",B.Z)
A.t(q,"uLutSize",new A.y(B.e,s.e))
A.t(q,"uStrength",new A.y(B.e,a.c.e.w))
A.b5(q,s.c)
A.c2(q,3,0)},
$ia2:1,
ga1(){return this.a}}
A.hA.prototype={}
A.hz.prototype={
a6(a){var s=this.a.h(0,a)
if(s==null)throw A.c(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$iwn:1}
A.fn.prototype={
gaj(){return"present"},
af(a,b){B.a.l(a.a,new A.am("present",B.dW,A.f([new A.S(this.f,B.h)],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aW("present",s.b,s.c,B.t,B.f7,B.eO)),q=A.cj(s.d),p=s.f
return A.f([new A.jF(new A.aV("present",A.f([new A.S(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$iad:1}
A.jF.prototype={
ag(a){var s,r=this,q=a.a6(r.d.a),p=a.b.a
A.bE(p,null)
A.b_(p,r.a.a5())
A.bQ(p,r.b.b)
A.b5(p,r.c)
A.aC(p,0,q.b)
s=a.c.e
A.t(p,"uExposure",new A.y(B.e,s.a))
A.t(p,"uVignette",new A.y(B.e,s.e))
A.t(p,"uGrain",new A.y(B.e,s.f))
A.c2(p,3,0)},
$ia2:1,
ga1(){return this.a}}
A.iH.prototype={
gaj(){return"ps1Quantize"},
af(a,b){B.a.l(a.a,new A.am("ps1Quantize",B.B,A.f([new A.S(this.e,B.h),B.c4],t.C)))},
ae(a){var s=this,r="ps1Quantize",q=s.a.ak(new A.aW(r,s.b,s.c,B.t,B.f3,B.em)),p=A.cj(s.d),o=s.e
return A.f([new A.jG(new A.aV(r,A.f([new A.S(o,B.h),B.c4],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$iad:1}
A.jG.prototype={
ag(a){var s=this,r=a.a6(s.d.a),q=a.b.a
A.bE(q,a.a6("ps1Output").b)
A.b_(q,s.a.a5())
A.bQ(q,s.b.b)
A.aC(q,0,r.b)
A.t(q,"uScene",B.u)
A.t(q,"uQuantizationBits",new A.y(B.e,a.c.e.z))
A.t(q,"uDitherStrength",new A.y(B.e,0))
A.b5(q,s.c)
A.c2(q,3,0)},
$ia2:1,
ga1(){return this.a}}
A.dG.prototype={}
A.iP.prototype={
gaj(){return"shadow"},
af(a,b){B.a.l(a.a,new A.am("shadowCaster",B.dU,A.f([B.bZ],t.C)))},
ae(a){var s=this,r="shadowCaster",q=s.a.ak(new A.aW(r,s.b,s.c,B.bz,B.bx,B.eM))
return A.f([new A.jI(new A.aV(r,A.f([B.bZ],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$iad:1}
A.jI.prototype={
ag(a){var s,r,q,p,o=this,n=a.a6("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bE(s,n.b)
A.b_(s,o.a.a5())
A.cG(s,B.an,1,0,0,0)
return}r=A.rR(l)
o.r.$1(r)
s=m.a
A.bE(s,n.b)
A.b_(s,o.a.a5())
A.cG(s,B.an,1,0,0,0)
A.bQ(s,o.b.b)
A.t(s,"uAlbedo",B.u)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)o.jl(m,s[p],r)},
eZ(a,b){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.y(B.e,0))
s=this.a.a5()
A.b_(q,r.at?s.e4(!1):s)},
jl(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dP){s=b.b
if(!s.r)return
n.eU(a,s.c,c)
n.eZ(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.b5(s,r.a)
q=r.b
p=r.c
if(q)A.qj(s,p,0)
else A.c2(s,p,0)}else if(b instanceof A.ds){s=b.a.b
if(!s.r)return
n.eU(a,s.c,c)
n.eZ(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.b5(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.qk(s,p,o,0)
else A.qi(s,p,0,o)}else throw A.c(A.z("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.e_(b).n(0),null))},
eU(a,b,c){var s=a.a
A.t(s,"uModel",new A.y(B.q,new Float32Array(A.U(b.ab().a))))
A.t(s,"uLightViewProjection",new A.y(B.q,new Float32Array(A.U(c.a.a))))},
$ia2:1,
ga1(){return this.a}}
A.pi.prototype={
$1(a){return this.a.a=a},
$S:50}
A.pj.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:51}
A.iQ.prototype={
gaj(){return"shadowedWorld"},
af(a,b){var s=A.f([B.c3],t.C)
if(this.Q)s.push(B.c6)
s.push(B.ad)
B.a.l(a.a,new A.am("shadowedWorld",B.bg,s))},
ae(a){var s=this,r="shadowedWorld",q=s.a.ak(new A.aW(r,s.b,s.c,B.f6,B.eV,B.ew)),p=A.f([B.c3],t.C)
if(s.Q)p.push(B.c6)
p.push(B.ad)
return A.f([new A.jJ(new A.aV(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.as,s.at)],t.u)},
$iad:1}
A.jJ.prototype={
ag(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.a6("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.r.$0(),b1=a5.a
A.bE(b1,a4.b)
A.b_(b1,a2.a.a5())
s=a8.a
A.cG(b1,B.b0,1,s.c,s.b,s.a)
A.bQ(b1,a2.b.b)
A.t(b1,"uAlbedo",B.u)
s=t._
A.aC(b1,1,s.a(a2.f.$0()))
A.t(b1,"uShadowMap",B.Z)
r=t.n
A.t(b1,"uShadowMapTexelSize",new A.y(B.ae,new Float32Array(A.U(A.f([0.001953125,0.001953125],r)))))
A.aC(b1,2,s.a(a2.y.$0()))
A.t(b1,"uSsao",B.cg)
A.t(b1,"uVertexSnapGrid",new A.y(B.e,a9.y))
A.t(b1,"uSceneColorSize",new A.y(B.ae,new Float32Array(A.U(A.f([a2.z,a2.Q],r)))))
A.t(b1,"uViewProjection",new A.y(B.q,new Float32Array(A.U(a7.c.a))))
A.t(b1,"uView",new A.y(B.q,new Float32Array(A.U(a7.a.a))))
A.t(b1,"uLightViewProjection",new A.y(B.q,new Float32Array(A.U(b0.a.a))))
s=a8.b
A.t(b1,"uFogColor",new A.y(B.l,new Float32Array(A.U(A.f([s.a,s.b,s.c],r)))))
A.t(b1,"uFogStart",new A.y(B.e,a8.c))
A.t(b1,"uFogEnd",new A.y(B.e,a8.d))
A.t(b1,"uFogHeightFalloff",new A.y(B.e,0))
A.t(b1,"uFogDensity",new A.y(B.e,0))
q=a2.w.$0()
s=A.f([],t.bH)
p=a2.x.$0()
p=J.O(p==null?B.at:p)
o=q==null
while(p.m()){n=p.gp()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.M
k=o?a3:q.c
if(k==null)k=B.af
A.t(b1,"uLightPosition",new A.y(B.l,new Float32Array(A.U(A.f([l.a,l.b,l.c],r)))))
A.t(b1,"uLightDirection",new A.y(B.l,new Float32Array(A.U(A.f([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.J
A.t(b1,"uLightColor",new A.y(B.l,new Float32Array(A.U(A.f([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.t(b1,"uLightIntensity",new A.y(B.e,p==null?0:p))
A.t(b1,"uSpotEnabled",new A.y(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.M
g=p?a3:i.b
if(g==null)g=B.J
A.t(b1,"uDirectionalDirection",new A.y(B.l,new Float32Array(A.U(A.f([h.a,h.b,h.c],r)))))
A.t(b1,"uDirectionalColor",new A.y(B.l,new Float32Array(A.U(A.f([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.t(b1,"uDirectionalIntensity",new A.y(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.e(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.a_
c=n?a3:e.c
if(c==null)c=B.J
m=""+f
A.t(b1,"uPointPosition"+m,new A.y(B.l,new Float32Array(A.U(A.f([d.a,d.b,d.c],r)))))
A.t(b1,"uPointColor"+m,new A.y(B.l,new Float32Array(A.U(A.f([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.t(b1,"uPointIntensity"+m,new A.y(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.t(b1,"uPointRadius"+m,new A.y(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.e(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.a_
a=p?a3:e.c
if(a==null)a=B.af
c=p?a3:e.d
if(c==null)c=B.J
n=""+f
A.t(b1,"uDirectSpotPosition"+n,new A.y(B.l,new Float32Array(A.U(A.f([d.a,d.b,d.c],r)))))
A.t(b1,"uDirectSpotDirection"+n,new A.y(B.l,new Float32Array(A.U(A.f([a.a,a.b,a.c],r)))))
A.t(b1,"uDirectSpotColor"+n,new A.y(B.l,new Float32Array(A.U(A.f([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.t(b1,"uDirectSpotIntensity"+n,new A.y(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.t(b1,"uDirectSpotRange"+n,new A.y(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.t(b1,"uDirectSpotInnerCos"+n,new A.y(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.t(b1,"uDirectSpotOuterCos"+n,new A.y(B.e,Math.cos(m)))
p=p?0:1
A.t(b1,"uDirectSpotEnabled"+n,new A.y(B.e,p))}s=o?a3:q.f
A.t(b1,"uLightRange",new A.y(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.t(b1,"uLightInnerCos",new A.y(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.t(b1,"uLightOuterCos",new A.y(B.e,Math.cos(s)))
a0=a8.r
A.t(b1,"uAmbientColor",new A.y(B.l,new Float32Array(A.U(A.f([a0.a,a0.b,a0.c],r)))))
A.t(b1,"uAmbientIntensity",new A.y(B.e,a8.w))
for(b1=a6.a,s=b1.length,r=a9.x,a1=0;a1<b1.length;b1.length===s||(0,A.p)(b1),++a1)a2.f_(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.p)(a6),++a1)a2.f_(a5,a6[a1],r)},
f_(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dP){s=b.b
n.f0(a,s.c)
n.eV(a,s.b,s.e,s.f,c,!0)
r=n.c.$1(s.a)
s=a.a
A.b5(s,r.a)
q=r.b
p=r.c
if(q)A.qj(s,p,0)
else A.c2(s,p,0)}else if(b instanceof A.ds){s=b.a.b
n.f0(a,s.c)
n.eV(a,s.b,s.e,s.f,c,!0)
r=n.c.$1(s.a)
s=a.a
A.b5(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.qk(s,p,o,0)
else A.qi(s,p,0,o)}else throw A.c(A.z("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.e_(b).n(0),null))},
eV(a,b,c,d,e,f){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.t(q,"uAlphaCutoff",new A.y(B.e,0))
A.t(q,"uOpaqueCoverage",new A.y(B.e,c===B.ao?0:1))
A.t(q,"uAffineWarpStrength",new A.y(B.e,0))
A.t(q,"uMaterialTint",new A.y(B.l,new Float32Array(A.U(A.f([r.c,r.d,r.e],t.n)))))
A.t(q,"uEmissiveStrength",new A.y(B.e,0))
A.t(q,"uReceivesShadow",new A.y(B.e,1))
A:{s=null
if(B.ao===c){switch(d.a){case 0:s=B.cO
break
case 1:s=B.cN
break}break A}if(B.H===c||B.cL===c){s=this.a.a5()
break A}}A.b_(q,r.at?s.e4(!1):s)},
f0(a,b){var s=b.ab(),r=a.a
A.t(r,"uModel",new A.y(B.q,new Float32Array(A.U(s.a))))
A.t(r,"uNormalMatrix",new A.y(B.q,new Float32Array(A.U(s.hK().a))))},
$ia2:1,
ga1(){return this.a}}
A.iT.prototype={
gaj(){return"ssaoOcclusion"},
af(a,b){B.a.l(a.a,new A.am("ssaoOcclusion",B.bf,A.f([B.bV],t.C)))},
ae(a){var s=this,r="ssaoOcclusion",q=s.a.ak(new A.aW(r,s.b,s.c,B.t,B.f2,B.ek)),p=A.cj(s.d)
return A.f([new A.jN(new A.aV(r,A.f([B.bV],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iad:1}
A.jN.prototype={
ag(a){var s,r,q,p=this,o=a.c.e.c,n=a.b.a
A.bE(n,a.a6("ssaoRaw").b)
A.b_(n,p.a.a5())
if(o<=0){A.cG(n,B.R,1,1,1,1)
return}A.cG(n,B.R,1,0,0,0)
s=p.e.$0()
A.bQ(n,p.b.b)
A.aC(n,0,t._.a(p.d.$0()))
A.t(n,"uSceneDepth",B.u)
A.t(n,"uNear",new A.y(B.e,s.f))
A.t(n,"uFar",new A.y(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.e(r,0)
A.t(n,"uProjScaleX",new A.y(B.e,r[0]))
if(5>=q)return A.e(r,5)
A.t(n,"uProjScaleY",new A.y(B.e,r[5]))
A.t(n,"uRadius",new A.y(B.e,p.f))
A.t(n,"uStrength",new A.y(B.e,o))
A.b5(n,p.c)
A.c2(n,3,0)},
$ia2:1,
ga1(){return this.a}}
A.iS.prototype={
gaj(){return"ssaoBlur"},
af(a,b){B.a.l(a.a,new A.am("ssaoBlur",B.bf,A.f([B.c0,B.bU],t.C)))},
ae(a){var s=this,r="ssaoBlur",q=s.a.ak(new A.aW(r,s.b,s.c,B.t,B.eW,B.eS)),p=A.cj(s.d)
return A.f([new A.jM(new A.aV(r,A.f([B.c0,B.bU],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$iad:1}
A.jM.prototype={
ag(a){var s,r,q=this,p=a.b.a
A.bE(p,a.a6("ssaoBlurred").b)
A.b_(p,q.a.a5())
if(a.c.e.c<=0){A.cG(p,B.R,1,1,1,1)
return}A.cG(p,B.R,1,0,0,0)
s=q.f.$0()
A.bQ(p,q.b.b)
r=t._
A.aC(p,0,r.a(q.d.$0()))
A.t(p,"uSsaoRaw",B.u)
A.aC(p,1,r.a(q.e.$0()))
A.t(p,"uSceneDepth",B.Z)
A.t(p,"uTexelSize",new A.y(B.ae,new Float32Array(A.U(A.f([0.005208333333333333,0.009259259259259259],t.n)))))
A.t(p,"uNear",new A.y(B.e,s.f))
A.t(p,"uFar",new A.y(B.e,s.r))
A.b5(p,q.c)
A.c2(p,3,0)},
$ia2:1,
ga1(){return this.a}}
A.j7.prototype={
gaj(){return"vhs"},
af(a,b){a.b.l(0,"vhsOutput")
B.a.l(a.a,new A.am("vhs",B.B,A.f([new A.S(this.r,B.h),B.bX,B.bW],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aW("vhs",s.b,s.c,B.t,B.eX,B.en)),q=A.cj(s.d),p=s.r
return A.f([new A.jT(new A.aV("vhs",A.f([new A.S(p,B.h),B.bX,B.bW],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$iad:1}
A.jT.prototype={
ag(a){var s,r=this,q=a.a6(r.f.a),p=a.a6("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bE(n,p.b)
A.b_(n,r.a.a5())
A.bQ(n,r.b.b)
A.aC(n,0,q.b)
A.t(n,"uScene",B.u)
A.aC(n,1,t._.a(r.d.$0()))
A.t(n,"uHistory",B.Z)
A.t(n,"uTime",new A.y(B.e,r.e.$0()))
A.t(n,"uChromaWeight",new A.y(B.e,o.Q))
A.t(n,"uTrackingWeight",new A.y(B.e,m))
A.t(n,"uNoiseWeight",new A.y(B.e,o.at))
A.t(n,"uHeadSwitchWeight",new A.y(B.e,o.ax))
A.t(n,"uDropoutWeight",new A.y(B.e,o.ay))
A.t(n,"uGhostWeight",new A.y(B.e,s))
A.b5(n,r.c)
A.c2(n,3,0)},
$ia2:1,
ga1(){return this.a}}
A.fs.prototype={}
A.jf.prototype={
gaj(){return"world"},
af(a,b){B.a.l(a.a,new A.am("worldOpaqueTransparent",B.bg,A.f([B.ad],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aW("safeWorld",s.b,s.c,B.f5,B.t,B.ei))
return A.f([new A.jU(new A.aV("worldOpaqueTransparent",A.f([B.ad],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$iad:1}
A.jU.prototype={
ag(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bE(j,a.a6("sceneColor").b)
A.b_(j,n.a.a5())
s=k.a
A.cG(j,B.b0,1,s.c,s.b,s.a)
A.bQ(j,n.b.b)
A.t(j,"uViewProjection",new A.y(B.q,new Float32Array(A.U(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.M
s=t.n
A.t(j,"uLightDir",new A.y(B.l,new Float32Array(A.U(A.f([q.a,q.b,q.c],s)))))
p=k.r
A.t(j,"uAmbientColor",new A.y(B.l,new Float32Array(A.U(A.f([p.a,p.b,p.c],s)))))
A.t(j,"uAmbientIntensity",new A.y(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.p)(j),++o)n.eB(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.p)(l),++o)n.eB(m,l[o])},
eB(a,b){var s,r,q,p,o,n=this
if(b instanceof A.ds){s=b.a.b
n.eX(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.b5(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.qk(s,p,o,0)
else A.qi(s,p,0,o)}else if(b instanceof A.dP){s=b.b
n.eX(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.b5(s,r.a)
q=r.b
p=r.c
if(q)A.qj(s,p,0)
else A.c2(s,p,0)}else throw A.c(A.z("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.e_(b).n(0),null))},
eX(a,b){var s=b.ab(),r=a.a
A.t(r,"uModel",new A.y(B.q,new Float32Array(A.U(s.a))))
A.t(r,"uNormalMatrix",new A.y(B.q,new Float32Array(A.U(s.hK().a))))},
$ia2:1,
ga1(){return this.a}}
A.kV.prototype={
bO(a){var s,r,q
a.B()
s=A.a4(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.z||a.Q){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.az
else q=r===0?B.ax:B.ay
return new A.dA(q,s)},
ia(a){var s,r=this.bO(a).a
A:{if(B.az===r){s=B.fy
break A}if(B.ay===r){s=B.fx
break A}s=B.aa
break A}return s}}
A.i0.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.f3.prototype={
A(){return"GpuBufferKind."+this.b}}
A.i2.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.i3.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.i_.prototype={}
A.i1.prototype={}
A.dp.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.f5.prototype={}
A.f4.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dF.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.fx.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cZ.prototype={
A(){return"UniformType."+this.b}}
A.y.prototype={}
A.e8.prototype={
A(){return"ClearMask."+this.b}}
A.hM.prototype={$ivq:1}
A.iF.prototype={
hL(a){var s=this.b.h(0,a)
if(s==null)throw A.c(A.l("resource is not in candidate: "+a))
return s}}
A.lC.prototype={
gp(){var s=this.c
if(s==null)throw A.c(A.l("GPU resource adapter is not initialized"))
return s},
by(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.jh(s.b)
r.b.by()
r.c=null
r.e=!0},
ex(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.x(a6,a7),a9=A.f([],t.l2)
try{for(p=b0.a.a,p=A.jz(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.ab(s,"sceneColor#1")){j=J.b1(a8,"sceneColor")
j.toString
J.bK(a8,s,j)
continue}j=this.jk(s,b1)
if(n.b!==B.f)A.k(A.l(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.z("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.i(l.createFramebuffer())
if(h==null)A.k(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.aq
if(f&&!j.e)A.k(A.z("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.bd||g===B.dS
d=a5
c=a5
b=a5
a=a5
if(f){l.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE)],k))
l.readBuffer(A.a(o.WebGL2RenderingContext.NONE))}else{g=j.c
a0=j.b
if(g>1){c=A.i(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),c)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.RENDERBUFFER),c)
if(e){a=A.i(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),a)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(o.WebGL2RenderingContext.RENDERBUFFER),a)
l.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}else{d=A.i(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),d)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.TEXTURE_2D),d,0])
if(e){b=A.i(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(o.WebGL2RenderingContext.TEXTURE_2D),b,0])
l.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}}a1=a5
a2=a5
if(j.e){g=j.c
a0=j.b
if(g>1){a1=A.i(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),a1)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.DEPTH_COMPONENT24),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(o.WebGL2RenderingContext.RENDERBUFFER),a1)}else{a2=A.i(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a2)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.DEPTH_COMPONENT24),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.NEAREST))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.NEAREST))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(o.WebGL2RenderingContext.TEXTURE_2D),a2,0])}}g=A.a(l.checkFramebufferStatus(A.a(o.WebGL2RenderingContext.FRAMEBUFFER)))
a0=A.a(o.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)
if(g!==a0){A.qn(n,h,d,c,a1,a2,b,a)
A.k(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.d6(new A.hb(h,d,c,a1,a2,b,a,i,j.b))
J.hn(a9,r)
J.bK(a8,s,r)}a6=A.c5(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.K(a6).i("fu<1>"),a6=new A.fu(a6,p),a6=new A.by(a6,a6.gq(0),p.i("by<a5.E>")),o=this.a,n=t.V,p=p.i("a5.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.qn(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
jk(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.f5(512,512,1,B.aq,!0)
if(a==="sceneDepth")return new A.f5(o,n,1,B.aq,!0)
s=B.b.a_(a,"ssao")||B.b.a_(a,"bloomBlur")||B.b.a_(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.f5(r,q,1,p?B.bd:B.dR,p)},
jh(a){var s,r,q,p,o,n=A.q6(t.f7.a(a).gao(),t._)
for(n=A.jz(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.qn(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.eA.prototype={
A(){return"_SlotState."+this.b}}
A.d4.prototype={
saP(a){this.c=this.$ti.i("1?").a(a)}}
A.cd.prototype={
aq(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.e(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.d4(B.ak,n.i("d4<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.e(n,q)
p=n[q];++p.a
p.b=B.ik
p.saP(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bv(a){return this.aq(a,null)},
a0(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.c(A.dq(B.bj,a))
r=this.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.dq(B.bk,a))
s=q.b
if(s===B.al||s===B.ak)throw A.c(A.dq(B.as,a))},
bx(a){var s,r,q=this.$ti
q.c.a(a)
this.a0(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
e_(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a0(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.e(r,s)
r[s].saP(b)},
aR(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.c(A.dq(B.bj,a))
r=p.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.dq(B.bk,a))
r=q.b
if(r===B.al||r===B.ak)throw A.c(A.dq(B.e3,a))
q.b=B.al
q.saP(null)
B.a.l(p.c,s);++p.e},
bc(){return new A.ck(this.li(),this.$ti.i("ck<+(1,2)>"))},
li(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bc(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.al||j===B.ak){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.b6(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.hw.prototype={
A(){return"BlendEquation."+this.b}}
A.de.prototype={
A(){return"BlendFactor."+this.b}}
A.hI.prototype={
A(){return"CullFace."+this.b}}
A.hK.prototype={
A(){return"DepthFunc."+this.b}}
A.eb.prototype={
e4(a){var s=this
return A.rm(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aN.prototype={
A(){return"StateField."+this.b}}
A.nY.prototype={
kN(a){var s,r=this.a
if(r==null)return A.mq(B.eL,t.dB)
s=A.a4(t.dB)
if(r.a!==a.a)s.l(0,B.aH)
if(r.b!==a.b)s.l(0,B.aI)
if(r.c!==a.c)s.l(0,B.aJ)
if(r.d!==a.d)s.l(0,B.aK)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.aL)
if(r.r!==a.r)s.l(0,B.aM)
if(r.w!==a.w)s.l(0,B.aN)
if(r.x!==a.x)s.l(0,B.aO)
return s}}
A.d6.prototype={$icp:1}
A.hc.prototype={}
A.hb.prototype={}
A.je.prototype={
iW(a){var s=this,r=A.d(s.a.canvas)
s.c=A.a8(new A.nW(s))
s.d=A.a8(new A.nX(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hQ(){var s=this,r=v.G,q=s.bp(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bp(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bp(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bp(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bp(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.cM(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.cM(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.mT("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bp(a){var s=A.cM(this.a.getParameter(a))
return typeof s=="number"?B.d.aS(s):0},
$ivK:1}
A.nW.prototype={
$1(a){A.d(a).preventDefault()
this.a.b=B.T},
$S:2}
A.nX.prototype={
$1(a){A.d(a)
this.a.b=B.f},
$S:2}
A.hO.prototype={
D(){var s=this
return A.W(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.ht.prototype={
iI(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.i(i.connect(A.d(s.destination)))
r=j.d
r===$&&A.h()
A.d(r.gain).value=0.25
q=j.e
q===$&&A.h()
A.d(q.gain).value=0.12
p=j.f
p===$&&A.h()
A.d(p.gain).value=0.4
o=j.r
o===$&&A.h()
A.d(o.gain).value=0.2
n=j.w
n===$&&A.h()
A.d(n.gain).value=0.4
m=j.x
m===$&&A.h()
A.d(m.gain).value=0.1
l=j.y
l===$&&A.h()
A.d(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.i(r[k].connect(i))
r=j.z
r===$&&A.h()
A.d(r.gain).value=1
q=j.Q
q===$&&A.h()
A.d(q.gain).value=0.35
A.i(o.connect(r))
A.i(n.connect(r))
A.i(p.connect(r))
p=j.as
p===$&&A.h()
A.i(r.connect(p))
A.i(p.connect(q))
A.i(q.connect(i))
q=A.d(s.createBiquadFilter())
q.type="highpass"
A.d(q.frequency).value=80
j.k2!==$&&A.B()
j.k2=q
p=A.d(s.createBiquadFilter())
p.type="lowpass"
A.d(p.frequency).value=11e3
j.k3!==$&&A.B()
j.k3=p
A.i(q.connect(p))
A.i(p.connect(A.d(s.destination)))
i.disconnect(A.d(s.destination))
A.i(i.connect(q))
p.disconnect(A.d(s.destination))
q=A.d(s.createChannelSplitter(2))
j.k4!==$&&A.B()
j.k4=q
i=A.d(s.createChannelMerger(2))
j.ok!==$&&A.B()
j.ok=i
r=A.d(s.createGain())
A.d(r.gain).value=0.5
j.p1!==$&&A.B()
j.p1=r
A.i(p.connect(q))
A.i(i.connect(A.d(s.destination)))
j.eh()},
eh(){var s,r=this,q=r.k4
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
hW(){var s=this.a
if(A.C(s.state)==="suspended")A.d(s.resume())},
f1(a){var s,r,q=this
if(B.b.a_(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"){s=q.f
s===$&&A.h()
return s}r=B.f_.h(0,a)
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
ju(){var s,r,q,p,o,n,m,l=this.a,k=A.b7(l.sampleRate),j=B.d.aD(k*2),i=A.d(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cn()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.e(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dO(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.d(s.createBufferSource())
r.buffer=o
A.d(r.playbackRate).value=0.94+p.ax.cn()*0.12
q=A.d(s.createGain())
A.d(q.gain).value=b
A.i(r.connect(q))
A.i(q.connect(p.f1(a)))
r.onended=A.a8(new A.kG(r,q))
r.start()},
lE(a){return this.dO(a,1)},
hO(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this,k=l.at.h(0,a)
if(k==null)return
s=l.a
r=A.d(s.createBufferSource())
r.buffer=k
A.d(r.playbackRate).value=d*(0.94+l.ax.cn()*0.12)
q=A.d(s.createGain())
A.d(q.gain).value=c
p=A.d(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.d(p.positionX).value=b.a
A.d(p.positionY).value=b.b
A.d(p.positionZ).value=b.c
o=A.d(s.createBiquadFilter())
o.type="lowpass"
A.d(o.frequency).value=2e4
n=A.d(s.createGain())
A.d(n.gain).value=1
if(g!=null&&f!=null){A.d(o.frequency).value=f
A.d(n.gain).value=Math.pow(10,g/20)}else{s=l.ay!=null
if(s){s=l.ay
s.toString
m=l.ev(l.b.hN(e,s))
A.d(o.frequency).value=m.b
A.d(n.gain).value=Math.pow(10,m.a/20)}}l.CW.k(0,o,new A.jL(r,q,n,o,p,e))
r.onended=A.a8(new A.kF(l,o))
A.i(r.connect(q))
A.i(q.connect(n))
A.i(n.connect(o))
A.i(o.connect(p))
A.i(p.connect(l.f1(a)))
r.start()},
lF(a,b,c,d){return this.hO(a,b,c,1,d,null,null)},
ev(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.b6(r,q)},
ec(a){var s,r,q,p,o=this
if(o.cx)return
s=o.at.h(0,a)
if(s==null)return
o.cx=!0
r=o.a
q=A.d(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.d(r.createGain())
A.d(p.gain).value=0.6
A.i(q.connect(p))
r=o.e
r===$&&A.h()
A.i(p.connect(r))
q.onended=A.a8(new A.kH(o,q,p))
q.start()
o.cy=q},
e8(a){if(this.p2===a)return
this.p2=a
this.eh()},
aT(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.K(c==null?q.fr:c,0,1)
q.fx=B.d.K(f==null?q.fx:f,0,1)
q.fy=B.d.K(b==null?q.fy:b,0,1)
q.go=B.d.K(a==null?q.go:a,0,1)
q.id=B.d.K(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.h()
A.d(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.h()
A.d(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.h()
A.d(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.h()
A.d(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.h()
A.d(s.gain).value=0.4*q.go
s=q.e
s===$&&A.h()
A.d(s.gain).value=0.12*q.id
s=q.y
s===$&&A.h()
A.d(s.gain).value=q.fx
s=q.c
s===$&&A.h()
s=A.d(s.gain)
r=q.k1?0:q.fr
s.value=r},
ik(a){var s=null
return this.aT(s,s,s,s,a,s)},
ii(a){var s=null
return this.aT(s,s,a,s,s,s)},
il(a){var s=null
return this.aT(s,s,s,s,s,a)},
ih(a){var s=null
return this.aT(s,a,s,s,s,s)},
ig(a){var s=null
return this.aT(a,s,s,s,s,s)},
ij(a){var s=null
return this.aT(s,s,s,a,s,s)},
ie(a){if(this.ay===a)return
this.ay=a
this.b8()},
b8(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.T(s,A.o(s).i("T<1,2>")).gt(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.i_(p,g)
m=n==null?i.ev(h.hN(p,g)):new A.b6(n.b,n.c)
l=A.b7(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.d(A.d(o.frequency).cancelScheduledValues(l))
A.d(A.d(o.frequency).setValueAtTime(A.b7(A.d(o.frequency).value),l))
j=l+0.08
A.d(A.d(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.d(A.d(o.gain).cancelScheduledValues(l))
A.d(A.d(o.gain).setValueAtTime(A.b7(A.d(o.gain).value),l))
A.d(A.d(o.gain).linearRampToValueAtTime(k,j))}}}
A.kE.prototype={
$1(a){return this.i5(t.gc.a(a))},
i5(a){var s=0,r=A.bb(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bd(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.aa(A.aG(A.d(A.d(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.aa(A.aG(A.d(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.aa(A.aG(A.d(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ag(h)
A.d(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.b9(null,r)
case 1:return A.b8(p.at(-1),r)}})
return A.ba($async$$1,r)},
$S:53}
A.kG.prototype={
$1(a){A.d(a)
this.a.disconnect()
this.b.disconnect()},
$S:2}
A.kF.prototype={
$1(a){var s
A.d(a)
s=this.a.CW.aa(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.kH.prototype={
$1(a){var s,r
A.d(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:2}
A.jL.prototype={}
A.hu.prototype={
A(){return"AudioCategory."+this.b}}
A.kx.prototype={
iK(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.c(B.dE)
if(!B.a.a7(A.f([d.a,d.b,d.c],t.n),new A.ky()))throw A.c(B.dd)}}
A.ky.prototype={
$1(a){return isFinite(A.d8(a))},
$S:5}
A.kh.prototype={
iH(a,b){if(this.a.length===0)throw A.c(B.d8)
if(!B.a.a7(A.f([a.a,a.b,a.c],t.n),new A.ki()))throw A.c(B.dh)}}
A.ki.prototype={
$1(a){return isFinite(A.d8(a))},
$S:5}
A.eT.prototype={
B(){if(B.a.R(A.f([-1.5,-12,-28,2e4,1100,320],t.n),new A.kj()))throw A.c(B.dt)},
hZ(a){this.B()
if(a.ax&&!a.ay&&!a.z)return new A.b6(-1.5,2e4)
if(a.ay)return new A.b6(-28,320)
return new A.b6(-12,1100)}}
A.kj.prototype={
$1(a){return!isFinite(A.d8(a))},
$S:5}
A.kt.prototype={
iJ(a){var s=A.o(a)
if(new A.a1(a,s.i("a1<1>")).R(0,new A.kv())||new A.aJ(a,s.i("aJ<2>")).R(0,new A.kw()))throw A.c(B.dC)}}
A.kv.prototype={
$1(a){return A.C(a).length===0},
$S:4}
A.kw.prototype={
$1(a){var s
t.a.a(a)
s=J.ax(a)
return s.gI(a)||s.R(a,new A.ku())},
$S:55}
A.ku.prototype={
$1(a){return A.C(a).length===0},
$S:4}
A.q_.prototype={}
A.kC.prototype={}
A.kz.prototype={
iL(a,b,c){var s
for(s=this.b.gao(),s=s.gt(s);s.m();)s.gp().B()},
i_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.e
if(h.h(0,a)==null)throw A.c(A.l("audio source room missing: "+a))
if(h.h(0,b)==null)throw A.c(A.l("audio listener room missing: "+b))
s=this.jZ(a,b)
for(h=s.a,r=h.length,q=this.b,p=0,o=2e4,n=0;n<h.length;h.length===r||(0,A.p)(h),++n){m=h[n]
l=q.h(0,m.a)
k=(l==null?B.aV:l).hZ(m)
j=k.b
p+=k.a
if(j<o)o=j}r=!s.b
if(r&&a!==b){p=-48
o=240}q=A.f([],t.s)
for(i=h.length,n=0;n<h.length;h.length===i||(0,A.p)(h),++n)q.push(h[n].a)
h=B.d.K(p,-60,0)
i=B.c.K(o,120,2e4)
r=!r||a===b
return new A.kC(A.ao(q,t.N),h,i,r)},
jZ(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.ih
s=t.N
r=A.W([a0,0],s,t.i)
q=A.W([a0,B.K],s,t.fB)
p=A.at([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.L(p,l)
B.a.Z(k,new A.kA(r))
j=B.a.gam(k)
p.aa(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.fH(s,!0)}i=o.an(j)
h=A.L(i,i.$ti.i("n.E"))
B.a.Z(h,new A.kB())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.p)(h),++g){f=h[g]
e=f.be(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.aV:d).hZ(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.L(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.ig}}
A.kA.prototype={
$2(a,b){var s,r,q
A.C(a)
A.C(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.G(r,s)
return q===0?B.b.G(a,b):q},
$S:56}
A.kB.prototype={
$2(a,b){var s=t.T
return B.b.G(s.a(a).a,s.a(b).a)},
$S:57}
A.fH.prototype={}
A.kU.prototype={
dM(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.uV().aY(q).ga4()
p.d=q
p.c=p.b.aY(q).ga4()
p.a=a}}
A.lm.prototype={}
A.iW.prototype={}
A.lA.prototype={
jn(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cM(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cl(a,b,c,d,e,f){return this.lj(a,b,c,d,e,f)},
lj(a,b,c,a0,a1,a2){var s=0,r=A.bb(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cl=A.bd(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.d(A.d(j.document).createElement("img"))
m.src=a
s=7
return A.aa(A.aG(A.d(m.decode()),t.X),$async$cl)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aR(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.jn()
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
case 6:case 1:return A.b9(q,r)
case 2:return A.b8(o.at(-1),r)}})
return A.ba($async$cl,r)},
cm(a,b,c){var s=!1
return this.lk(t.a.a(a),b,!1)},
lk(b0,b1,b2){var s=0,r=A.bb(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cm=A.bd(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.f([],t.Y)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.d(A.d(a0.document).createElement("img"))
j.src=k
s=10
return A.aa(A.aG(A.d(j.decode()),a1),$async$cm)
case 10:J.hn(l,j)
case 8:b0.length===a||(0,A.p)(b0),++a2
s=7
break
case 9:if(J.b2(l)===0){a=A.l("texture array needs at least one layer")
throw A.c(a)}i=A.a(J.b1(l,0).width)
h=A.a(J.b1(l,0).height)
if(J.ab(i,0)||J.ab(h,0)||J.uX(l,new A.lB(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.c(a)}g=J.b2(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.ac()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.kb(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.ac()
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
a7=A.i(a.createTexture())
if(a7==null){a=A.l("could not create texture array")
throw A.c(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aR(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.pZ(d,16)+")")
throw A.c(a)}c=0
for(;;){a1=c
a3=J.b2(l)
if(typeof a1!=="number"){q=a1.cw()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.b1(l,c)])
d=A.a(a.getError())
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.pZ(d,16)+")")
throw A.c(a)}a1=c
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
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.pZ(d,16)+")")
throw A.c(a)}a.texParameteri(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.a(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(a0.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR))}else{a1=A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
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
A.d(v.G.console).error("texture array load failed: "+A.q(b))
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
case 6:case 1:return A.b9(q,r)
case 2:return A.b8(o.at(-1),r)}})
return A.ba($async$cm,r)},
f2(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.ab(A.cM(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.c(A.ed("shader compile failed: "+A.q(A.tH(s,"getShaderInfoLog",r,t.x))+"\n"+b))
return r},
aF(a,b){var s=v.G,r=this.f2(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.f2(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.ab(A.cM(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.c(A.ed("program link failed: "+A.q(A.tH(p,"getProgramInfoLog",o,t.x))))
return o},
ghJ(){var s=A.cM(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aS(s):0},
e0(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.fp(0,c,B.c.iG(b.byteLength,p))*p
if(B.c.W(o,4)!==0)A.k(A.z("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.uY(B.o.gks(b),b.byteOffset+0*p,B.c.L(o,4)))}},
cY(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aR(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cU(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aR(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
f4(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.cY(q,a,b)
s=v.G
A.aR(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
ez(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aR(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aR(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dN(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cU(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cU(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.f4(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.f4(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cU(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.ez(a,b)
if(d)h.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.c(A.ed("framebuffer incomplete"))
return new A.iW(g,n,o,m,q,p,l,e,a,b)},
hI(a,b,c,d){return this.dN(a,b,c,d,0)},
ln(a,b,c,d){return this.dN(a,b,!0,c,d)},
b3(a,b,c){return this.dN(a,b,c,!1,0)},
cW(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aR(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
aK(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cY(q,b,c)
if(p!=null)n.cY(p,b,c)
n.cW(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cW(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cW(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.ez(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
lO(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aR(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aR(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aR(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
kD(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
aO(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.lB.prototype={
$1(a){A.d(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:58}
A.i7.prototype={
dZ(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].mb(a)}}
A.i9.prototype={
bN(a){if(this.f)return
A.rx(a,"requestPointerLock",t.X)},
jF(a){A.d(a)
if(A.an(a.repeat))return
if(!this.w)return
if(this.b.l(0,A.C(a.code)))this.c.l(0,A.C(a.code))},
jH(a){this.b.aa(0,A.C(A.d(a).code))},
jL(a){var s=this
A.d(a)
if(!s.f||!s.w)return
s.d=s.d+s.eI(a,"movementX")
s.e=s.e+s.eI(a,"movementY")},
jJ(a){var s=this
A.d(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
eI(a,b){var s=A.tC(a[b])
if(s==null)s=null
return s==null?0:s},
aU(){var s=this
s.b.F(0)
s.c.F(0)
s.e=s.d=0}}
A.ip.prototype={}
A.dx.prototype={
geF(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gH(B.c.cr(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gH(B.c.cr(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
V(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.dx&&A.ka(r)===A.ka(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gH(a){return this.geF()}}
A.mv.prototype={
iQ(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].geF(),q)}}
A.cg.prototype={
cp(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.o.im(s,0,m,l)
n.a=s}r=b.ad(0,a).aY(d.ad(0,a)).ga4()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fz(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fz(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fz(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fz(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fz(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fz(n.a,l,d,r,q,p,o,0,1,0,k,0)},
al(a,b,c,d,e){return this.cp(a,b,c,d,e,1,1)}}
A.n1.prototype={
jv(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.aF(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.B()
m.w=r
q=s.aF(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.B()
m.x=q
p=m.c
o=A.i(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.B()
m.y=o
o=A.i(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.B()
m.z=o
o=A.i(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.B()
m.Q=o
r=A.i(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.B()
m.as=r
r=A.i(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.B()
m.at=r
q=A.i(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.B()
m.ax=q
m.d=s.b3(m.ay,m.ch,!1)
m.e=s.b3(m.ay,m.ch,!1)
m.f=s.b3(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.B()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
jw(){var s
try{this.r=this.b.b3(384,216,!1)}catch(s){this.r=null}},
lM(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.aO(n)
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
p.aO(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aO(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.na.prototype={
cK(a,b,c){var s,r,q
try{r=this.a.aF(b,c)
return r}catch(q){s=A.ag(q)
r=A.ed(a+": "+A.q(s))
throw A.c(r)}}}
A.n3.prototype={}
A.fO.prototype={}
A.jO.prototype={}
A.jC.prototype={}
A.jA.prototype={}
A.n4.prototype={
iR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.f([new A.dx(0,0,1,0),new A.dx(1,0,1,0),new A.dx(2,0,1,0)],t.mn),e=t.S
e=new A.mv(f,A.x(e,e))
e.iQ(f)
h.dI=e
h.hf=1.9
h.dw=h.b0/h.b_
r=J.ie(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fO()
t.cu.a(r)
f=h.aH
e=f.aF("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aF(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aF(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aF(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aF(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ah!==$&&A.B()
h.ah=new A.na(f,e,p,o,n,m)
h.b=t.d4.a(new A.n5(h))
h.eS()
h.eR()
o=h.az
p=A.i(o.getUniformLocation(m,"uTex"))
h.fK!==$&&A.B()
h.fK=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.fL!==$&&A.B()
h.fL=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.fn!==$&&A.B()
h.fn=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.fm!==$&&A.B()
h.fm=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.fo!==$&&A.B()
h.fo=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.fp!==$&&A.B()
h.fp=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.fq!==$&&A.B()
h.fq=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.fs!==$&&A.B()
h.fs=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.ft!==$&&A.B()
h.ft=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.fu!==$&&A.B()
h.fu=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.fv!==$&&A.B()
h.fv=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.fw!==$&&A.B()
h.fw=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.fz!==$&&A.B()
h.fz=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.fA!==$&&A.B()
h.fA=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.fB!==$&&A.B()
h.fB=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.fC!==$&&A.B()
h.fC=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.fD!==$&&A.B()
h.fD=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fE!==$&&A.B()
h.fE=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.fF!==$&&A.B()
h.fF=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.fG!==$&&A.B()
h.fG=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.fH!==$&&A.B()
h.fH=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.fI!==$&&A.B()
h.fI=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.fJ!==$&&A.B()
h.fJ=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.fM!==$&&A.B()
h.fM=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.fN!==$&&A.B()
h.fN=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.dA!==$&&A.B()
h.dA=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.dB!==$&&A.B()
h.dB=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.dC!==$&&A.B()
h.dC=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.dD!==$&&A.B()
h.dD=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.dE!==$&&A.B()
h.dE=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.dF!==$&&A.B()
h.dF=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.dG!==$&&A.B()
h.dG=n
n=A.an(A.d(A.d(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bB!==$&&A.B()
h.bB=n
h.shG(16777215)
n=new A.nq(o,f,A.f([],t.aA),A.f([],t.df),A.f([],t.h),A.f([],t.kS))
m=n.c=f.aF("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.dH!==$&&A.B()
h.dH=n
n=new A.n1(f,o)
n.jv()
n.jw()
h.c8!==$&&A.B()
h.c8=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.d6!==$&&A.B()
h.d6=m
p=A.i(n.createBuffer())
p.toString
h.d7!==$&&A.B()
h.d7=p
n=A.i(n.createBuffer())
n.toString
h.d8!==$&&A.B()
h.d8=n
e=A.i(o.createVertexArray())
e.toString
h.d9!==$&&A.B()
h.d9=e
l=A.i(o.createVertexArray())
l.toString
h.da!==$&&A.B()
h.da=l
k=A.i(o.createVertexArray())
k.toString
h.dc!==$&&A.B()
h.dc=k
j=A.i(o.createVertexArray())
j.toString
h.dd!==$&&A.B()
h.dd=j
o.bindVertexArray(e)
h.cH(m)
o.bindVertexArray(l)
h.cH(p)
o.bindVertexArray(k)
h.cH(n)
o.bindVertexArray(null)
try{h.cd=f.hI(384,216,!0,!0)}catch(i){h.cd=null}s=4<f.ghJ()?4:f.ghJ()
e=s
if(typeof e!=="number")return e.ac()
if(e>1)try{h.bA=f.ln(h.b_,h.b0,!0,s)}catch(i){h.bA=null}try{h.aZ=f.hI(h.b_,h.b0,!0,!0)}catch(i){h.bA=h.aZ=null}if(h.aZ!=null)try{h.ca=f.b3(h.gbS(),h.gbR(),!1)
h.cb=f.b3(h.gbS(),h.gbR(),!1)
h.cc=f.b3(h.b_,h.b0,!1)}catch(i){h.cc=h.cb=h.ca=null}},
gbS(){var s=B.c.L(this.b_,4)
return s<1?1:s},
gbR(){var s=B.c.L(this.b0,4)
return s<1?1:s},
aA(a){return this.ll(t.G.a(a))},
ll(a){var s=0,r=A.bb(t.H),q=this,p,o,n,m,l,k,j
var $async$aA=A.bd(function(b,c){if(b===1)return A.b8(c,r)
for(;;)switch(s){case 0:p=new A.T(a,A.o(a).i("T<1,2>")).gt(0),o=q.aH
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.by.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.aa(o.cl(k,l,!1,!1,!1,m==="grime"),$async$aA)
case 4:if(c!=null)q.eC(m,l)
s=2
break
case 3:p=t.lS
j=A.L(new A.c3(new A.N(A.f(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.n6(a)),t.dD),p),p.i("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.aa(o.cm(j,12,!1),$async$aA)
case 7:q.c7=c
case 6:return A.b9(null,r)}})
return A.ba($async$aA,r)},
bg(){var s=0,r=A.bb(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bg=A.bd(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.x(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.aa(A.aG(A.d(A.d(g.window).fetch("shaders/"+A.q(m))),f),$async$bg)
case 13:l=a3
if(!A.an(l.ok)){i=A.ed("HTTP "+A.q(A.r4(l,"status",t.S)))
throw A.c(i)}a=J
a0=n
a1=m
s=14
return A.aa(A.aG(A.d(l.text()),i),$async$bg)
case 14:a.bK(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ag(c)
i=A.ed("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.c(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.jQ(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ag(b)
A.d(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.b9(null,r)
case 1:return A.b8(p.at(-1),r)}})
return A.ba($async$bg,r)},
jQ(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ah
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.cK("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.cK("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.cK("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.eS()
i.eR()
q=i.fj
q=A.L(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.p)(q),++k){s=q[k]
o=B.by.h(0,s)
o.toString
i.eC(s,o)}A.d(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ag(j)
A.d(v.G.console).error("shader recompile failed: "+A.q(r))}},
eR(){var s=this,r=s.az,q=s.ah
q===$&&A.h()
s.hg=A.i(r.getUniformLocation(q.c,"uTex"))
s.hh=A.i(r.getUniformLocation(q.c,"uTime"))
s.hi=A.i(r.getUniformLocation(q.c,"uFlash"))
s.hj=A.i(r.getUniformLocation(q.c,"uVignette"))
s.hk=A.i(r.getUniformLocation(q.c,"uGrain"))
s.hl=A.i(r.getUniformLocation(q.c,"uDesat"))
s.hm=A.i(r.getUniformLocation(q.c,"uBloom"))
s.hn=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.hu=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.hx=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.hq=A.i(r.getUniformLocation(q.c,"uDepth"))
s.hr=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.fk=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.fl=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.hs=A.i(r.getUniformLocation(q.c,"uNoise"))
s.ht=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.hv=A.i(r.getUniformLocation(q.c,"uLut"))
s.hw=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.ho=A.i(r.getUniformLocation(q.d,"uTex"))
s.dz=A.i(r.getUniformLocation(q.d,"uDir"))
s.hp=A.i(r.getUniformLocation(q.c,"uBlur"))},
eC(a,b){var s,r,q,p=this
p.fj.l(0,a)
switch(a){case"bluenoise":s=p.ah
s===$&&A.h()
s=s.c
r=p.hs
r===$&&A.h()
q=p.ht
q===$&&A.h()
p.br(s,r,q,b)
break
case"lut-gothic":s=p.ah
s===$&&A.h()
s=s.c
r=p.hv
r===$&&A.h()
q=p.hw
q===$&&A.h()
p.br(s,r,q,b)
break
case"grime":s=p.ah
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.br(s,r,q,b)
break
case"glass":s=p.ah
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.br(s,r,q,b)
break
case"soft":s=p.ah
s===$&&A.h()
s=s.b
r=p.h2
r===$&&A.h()
q=p.h3
q===$&&A.h()
p.br(s,r,q,b)
break}},
br(a,b,c,d){var s=this.az
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shG(a){var s=A.pc(a)
this.fV=s.a
this.fW=s.b
this.fX=s.c},
c2(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.W(a1,14)!==0)throw A.c(A.z("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.az
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
b.ei(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.kZ++
b.dh.k(0,a1,new A.jO(e,d,i,s,s,a3))
return a1},
kP(a){var s,r,q,p=this,o=p.dh.h(0,a)
if(o==null)return
p.eK()
s=p.h0
r=p.h1
if(s!==r)p.eW(r)
s=p.az
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.dv
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bC},
l7(a){var s,r=this.dh.aa(0,a)
if(r==null)return
s=this.az
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
eK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.di)return
c.di=!0
s=c.az
r=c.ah
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.fZ
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.dl
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.dm
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.dn
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.hf)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.dw)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.fO?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.dq/255*0.34,c.dr/255*0.34,c.ds/255*0.34)
q=c.fx
q===$&&A.h()
r=c.fU
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.fV,c.fW,c.fX)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.fY)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.6)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.dk.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.dk
l=m.length
if(n<l){if(!(n<l))return A.e(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.e(o,n)
s.uniform1f(o[n],0)
continue}j=A.pc(k.b)
m=c.bB
m===$&&A.h()
i=m?1:1+(A.pS(c.dt*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.e(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.e(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.e(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.e(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bB
r===$&&A.h()
q=r?1:1+(A.pS(c.dt*2.5,40503)*2-1)*0
c.kW=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.fQ?1:0
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
q=c.fP
h=q?384:0
g=q?216:0
q=c.de
p=q.a
if(p===B.aE){f=B.d.K(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.h4
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.dH
r===$&&A.h()
q=c.h8
q===$&&A.h()
s.uniform1f(q,0)
q=c.h9
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.h5
q===$&&A.h()
if(q!=null)r.cu(0)
q=c.h6
q===$&&A.h()
if(q!=null)r.cu(1)
q=c.h7
q===$&&A.h()
if(q!=null)r.cu(2)
r.cv(0)
r.cv(1)
r.cv(2)
r=c.ha
r===$&&A.h()
if(c.c7==null)q=0
else{c.dI===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.c7!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.c7)
r=c.du
r===$&&A.h()
s.uniform1i(r,12)}r=c.he
q=c.hd
p=c.hc
o=c.hb
n=0
for(;;){m=c.dI
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
if(m!=null)s.uniform1i(m,d.d);++n}c.eW(c.h1)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.dv
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eW(a){var s
this.h0=a
s=this.dx
s===$&&A.h()
this.az.uniformMatrix4fv(s,!1,a.a)},
aJ(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.b_=a
j.b0=b
j.dw=b/a
s=j.c8
s===$&&A.h()
r=B.c.L(a,2)
s.ay=r
q=B.c.L(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.aK(p,r,q)
r=s.e
if(r!=null)s.b.aK(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.aK(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.aK(r,384,216)
o=j.aZ
n=j.bA
m=j.ca
l=j.cb
k=j.cc
if(o!=null)j.aH.aK(o,a,b)
if(n!=null)j.aH.aK(n,a,b)
if(m!=null)j.aH.aK(m,j.gbS(),j.gbR())
if(l!=null)j.aH.aK(l,j.gbS(),j.gbR())
if(k!=null)j.aH.aK(k,a,b)},
k6(a){var s,r,q,p,o,n,m
for(s=this.fS,r=this.fR,q=1;q<a;++q){if(!(q<800))return A.e(s,q)
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
k5(a){var s,r,q,p,o,n,m,l
for(s=this.fT,r=this.dj,q=1;q<a;++q){if(!(q<4000))return A.e(s,q)
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
l4(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.de=b4
s=b2.bD
r=0
if(s>0){for(s=b2.fT,q=0;p=b2.bD,q<p;++q)B.a.k(s,q,q)
b2.k5(p)
for(p=b2.dj,o=b2.df,n=0;n<b2.bD;++n){if(!(n<4000))return A.e(s,n)
m=s[n]
if(!(m<p.length))return A.e(p,m)
l=p[m]
r=A.u_(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.dj,p=b2.df,q=0;q<b2.bD;++q){if(!(q<s.length))return A.e(s,q)
l=s[q]
r=A.u_(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bD=0
for(s=b2.fS,q=0;p=b2.ce,q<p;++q)B.a.k(s,q,q)
b2.k6(p)
for(p=b2.kX,o=b2.fR,k=0,n=0;n<b2.ce;++n){if(!(n<800))return A.e(s,n)
m=s[n]
if(!(m<o.length))return A.e(o,m)
j=o[m]
i=A.pc(0)
m=j.b
h=b2.dn
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.dm
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
e=b2.dl
k=A.u2(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.ce=0
s=b2.aH
o=b2.d6
o===$&&A.h()
s.e0(o,b2.df,r)
o=b2.d7
o===$&&A.h()
s.e0(o,p,k)
b2.eK()
p=b2.az
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.d9
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.L(r,14));++b2.bC
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.da
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.L(k,14));++b2.bC
m=b2.dg
if(m>0){h=b2.d8
h===$&&A.h()
s.e0(h,b2.kY,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.dc
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.dg/14|0);++b2.bC}m=b2.cd
if(m!=null){a7=b2.aZ
if(a7!=null)s.lO(m,a7)}a8=b2.aZ
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.dd
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.ca
a4=b2.cb
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.ah
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.ho
g===$&&A.h()
p.uniform1i(g,0)
s.aO(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.dz
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aO(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.dz,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cc
if(b2.c9>0&&a6!=null){s.aO(a6)
g=b2.ah
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dA
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.dB
g===$&&A.h()
p.uniform1i(g,7)
g=b2.dC
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.dD
g===$&&A.h()
p.uniform1f(g,1)
g=b2.dE
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.dF
g===$&&A.h()
p.uniform1f(g,b2.c9)
g=b2.dG
g===$&&A.h()
p.uniform2f(g,1/b2.b_,1/b2.b0)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.c8
g===$&&A.h()
b0=g.lM(a8,0.5)
s.aO(null)
s=b2.ah
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.hm
g===$&&A.h()
p.uniform1i(g,1)
g=b2.hn
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.hp
s===$&&A.h()
b2.bB===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.hq
s===$&&A.h()
p.uniform1i(s,7)
s=b2.hr
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.fk
s===$&&A.h()
p.uniform1i(s,11)
s=b2.fl
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.c9>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.hg
h===$&&A.h()
p.uniform1i(h,0)
h=b2.dt+=b3;++b2.h_
s=b2.hh
s===$&&A.h()
p.uniform1f(s,h)
h=b2.hu
h===$&&A.h()
s=b2.h_
p.uniform2f(h,B.c.W(s*13,64),B.c.W(s*29,64))
s=b2.hi
s===$&&A.h()
p.uniform1f(s,0)
s=b2.hj
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.hk
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.hl
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.de
if(s.a===B.X)b1=0*(1-s.b/1)
else b1=0
s=b2.hx
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.n5.prototype={
$0(){var s=this.a.ah
s===$&&A.h()
return s.b},
$S:59}
A.n6.prototype={
$1(a){return this.a.h(0,A.C(a))},
$S:25}
A.o_.prototype={
gkh(){var s=this.b
s===$&&A.h()
return s},
eS(){var s,r,q,p,o,n,m=this,l=m.ki(),k=m.a
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
B.a.F(s)
r=m.ok
B.a.F(r)
q=m.p1
B.a.F(q)
p=m.p2
B.a.F(p)
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
m.h2=A.i(k.getUniformLocation(l,"uSoft"))
m.h3=A.i(k.getUniformLocation(l,"uSoftOn"))
m.h4=A.i(k.getUniformLocation(l,"uInternal"))
m.h5=A.i(k.getUniformLocation(l,"uLightProj0"))
m.h6=A.i(k.getUniformLocation(l,"uLightProj1"))
m.h7=A.i(k.getUniformLocation(l,"uLightProj2"))
m.l_=A.i(k.getUniformLocation(l,"uShadow0"))
m.l0=A.i(k.getUniformLocation(l,"uShadow1"))
m.l1=A.i(k.getUniformLocation(l,"uShadow2"))
m.h8=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.du=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dv=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.h9=A.i(k.getUniformLocation(l,"uShadowBias"))
m.ha=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.hb
B.a.F(s)
r=m.hc
B.a.F(r)
q=m.hd
B.a.F(q)
p=m.he
B.a.F(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.du,12)},
cH(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.ei(56)},
ei(a){var s=this,r=s.c
r===$&&A.h()
s.bs(r,3,a,0)
r=s.f
r===$&&A.h()
s.bs(r,3,a,12)
r=s.d
r===$&&A.h()
s.bs(r,4,a,24)
r=s.e
r===$&&A.h()
s.bs(r,1,a,40)
r=s.r
r===$&&A.h()
s.bs(r,3,a,44)},
bs(a,b,c,d){var s=this.a
A.aR(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
ki(){return this.gkh().$0()}}
A.nq.prototype={
cu(a){return null},
cv(a){return null}}
A.b.prototype={
U(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
ad(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
X(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
bz(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aY(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga4(){var s=this,r=s.gq(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.kT.prototype={
m5(a){var s,r,q,p,o,n=B.r.bb(a.D(),null)
this.a.fi(n)
s=A.d(A.d(v.G.window).localStorage)
r=A.br(s.getItem("quarantine.save.active"))
q=A.br(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
lI(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.d(A.d(v.G.window).localStorage)
r=A.br(s.getItem("quarantine.save.active"))
q=A.br(s.getItem("quarantine.save.previous"))
p=this.ey(r,a)
if(p!=null)return new A.dE(p,null)
o=this.ey(q,a)
if(o!=null)return new A.dE(o,"recovered previous save")
if(r==null)return B.h2
return B.h1}catch(n){return B.h0}},
ey(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.fi(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ag(q) instanceof A.J)return null
else throw q}}}
A.hQ.prototype={
iM(a,b,c,d,e){if(this.a.length===0)throw A.c(B.dy)
if(this.b<0)throw A.c(B.de)},
D(){var s,r=this,q=r.d
q=q==null?null:A.ao(q,t.i)
s=t.z
return A.c5(A.W(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bL.prototype={
A(){return"EndingKind."+this.b}}
A.la.prototype={}
A.ec.prototype={
D(){var s=t.N
return A.W(["kind",this.a.b],s,s)}}
A.ld.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:61}
A.iC.prototype={
D(){var s,r=this,q=t.N,p=A.x(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.W(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
ld(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ad(0,new A.b(0,1.3499999999999999,0))
return!new A.hB(s,s.U(0,new A.b(0,1.2000000000000002,0))).hF(a,r)}}
A.mM.prototype={
D(){return A.k_(this.a)}}
A.ep.prototype={
D(){return A.W(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.ng.prototype={
fi(a){var s,r,q,p,o,n,m,l=B.r.bw(a,null),k=t.f
if(!k.b(l))throw A.c(B.dD)
s=t.N
r=t.z
q=A.aU(l,s,r)
p=q.h(0,"version")
if(A.aF(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ac("unsupported save version "+A.q(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.dj)
k=A.aU(n,s,r)
return A.rP(A.aU(m,s,r),k,2)}}
A.dE.prototype={}
A.dn.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hY.prototype={}
A.lx.prototype={}
A.lw.prototype={
gap(){var s=this.d
return new A.lx(s.a,s.b)},
gdQ(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.W(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.W(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.W(["entryCount",m.e.b.a],k,t.S)
p=A.rt(m.c).D()
o=m.r
n=o.c
return new A.mM(A.k_(A.W(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.W(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
kl(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.c(A.ay(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bZ(B.dM)}if(n<a)this.bZ(B.dN)},
iA(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cC(a)&&s.iz(b)},
lJ(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.ch)r.c=Math.min(1,r.c+0.1)},
iy(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.vn(j,A.ao(i.d,h).length)
if(a===B.cc)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.K(r)
A.vm(j,new A.Q(r,q.i("r(1)").a(new A.ly(k)),q.i("Q<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.el,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aD(j.a/1*3)
B.a.l(r.r,new A.er(q.a,a,b))
m=r.a
A.vy(m,q.a,n,k.b,A.ao(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.ip(B.eI)
s.r.kF(o,c)
l=B.d.aD(j.b/1*6)
if(l>0)r.cC(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aJ(i,A.o(i).i("aJ<2>")).R(0,new A.lz())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bZ(B.dP)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bZ(B.dO)},
bZ(a){var s=this;++s.y
B.a.l(s.w,new A.hY())
B.a.l(s.x,A.vo(A.xY(a),s.b,s.y-1))}}
A.ly.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.nr().iv(this.a.c,a.a)},
$S:26}
A.lz.prototype={
$1(a){return t.R.a(a).e},
$S:27}
A.kI.prototype={
e1(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.c(A.l("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.c(A.l("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.c(A.l("authored/runtime room or portal count mismatch"))
for(r=t.Z,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.p)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.c(A.l("authored room missing at runtime: "+n))
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
if(k!==j.length)throw A.c(A.l("window count mismatch for "+n))
for(n=A.K(j),i=n.i("r(1)"),n=n.i("Q<1>"),f=0;f<l.length;l.length===k||(0,A.p)(l),++f){e=l[f]
d=A.eh(new A.Q(j,i.a(new A.kN(e)),n),r)
if(d==null)throw A.c(A.l("authored window missing: "+e.a))
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
if(m==null)throw A.c(A.l("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.c(A.l("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a+A.q(n)+" != "+A.q(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a0+A.q(n)+" != "+A.q(l)))
if(o.f!=m.at)throw A.c(A.l("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gbk(a1).b!==B.a.gbk(s).b)throw A.c(A.l("stair manifest mismatch"))}}
A.kJ.prototype={
$1(a){return A.v9(a,this.a)},
$S:64}
A.kK.prototype={
$1(a){var s=this.a,r=A.k6(a,"portal"),q=A.da(r,"id"),p=A.da(r,"a"),o=A.da(r,"b"),n=A.hj(r,"width"),m=A.hj(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.C(r.h(0,"doorKit")):null
return new A.e2(q,p,o,n*s,m*s,l)},
$S:65}
A.kL.prototype={
$1(a){var s=A.k6(a,"stair")
A.da(s,"id")
return new A.e4(A.da(s,"portalId"))},
$S:66}
A.kM.prototype={
$1(a){return typeof a=="string"?a:A.hg("exterior cell")},
$S:28}
A.kN.prototype={
$1(a){return t.Z.a(a).a===this.a.a},
$S:15}
A.e3.prototype={}
A.kO.prototype={
$1(a){var s=this.a,r=A.k6(a,"window"),q=A.da(r,"id"),p=A.hj(r,"offset")
A.hj(r,"sill")
return new A.e5(q,p*s,A.hj(r,"width")*s,A.hj(r,"height")*s)},
$S:69}
A.e5.prototype={}
A.e2.prototype={}
A.e4.prototype={}
A.pg.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.hB.prototype={
lT(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.K(s)
q=new A.Q(s,r.i("r(1)").a(new A.kW(e)),r.i("Q<1>"))
p=!q.gt(0).m()?null:q.gam(0)
if(p==null){n.d=null
return}if(!(n.bY(b,p.f)&&a==="hall"))o=n.bY(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.jg(p,B.d.K(d,0,1))},
lp(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.eH(f,c,d)
s=g.jo(a,b,c,d)
if(s!=null){g.d=s
return g.eH(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.ky(Math.sqrt(r*r+q*q)/0.08))
o=d.X(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.f8(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.hP(a,n)
n=i==null?n:i
h=g.f8(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.hP(a,n)
n=i==null?n:i}g.c0(m)
return new A.ir(m,n)},
jo(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bY(c,l.f)&&n
j=q&&this.bY(c,l.r)&&o
if(k||j)return new A.jg(l,k?0:1)}return null},
eH(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ad(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.K(a.b+o/p,0,1)
n=A.t1(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.c0(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ir(n,k)},
bY(a,b){var s=a.ad(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
f8(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.fJ(c,!1)
s=c.U(0,d)
this.c0(s)
if(this.hF(a,b)){this.c0(c)
return new A.fJ(c,!0)}return new A.fJ(s,!1)},
c0(a){var s=a.ad(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.U(0,new A.b(0,1.2000000000000002,0))},
hF(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.k8(a,m,s)},
hP(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aG(k)
for(r=k.a,q=a.an(r),p=J.O(q.a),q=new A.I(p,q.b,q.$ti.i("I<1>"));q.m();){o=p.gp()
n=o.be(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fc(k,o,s)&&this.jg(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
k8(a,b,c){var s,r,q
for(s=a.an(b.a),r=J.O(s.a),s=new A.I(r,s.b,s.$ti.i("I<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.fc(b,q,c))return!0}return!1},
fc(a,b,c){var s,r,q,p=a.a,o=b.ar(p),n=b.a9(p)
p=o===B.i||o===B.j
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
jg(a,b,c){var s,r=this
switch(b.ar(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
skq(a){this.a=t.bf.a(a)}}
A.kW.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:71}
A.ir.prototype={}
A.fJ.prototype={}
A.jg.prototype={}
A.f7.prototype={}
A.lI.prototype={
kF(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.e(B.D,r)
s=B.D[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
iw(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.D,q)
p=B.D[q]
if(p.b===a)r+=p.c}return r},
ix(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.D,q)
p=B.D[q]
if(p.b===a)r+=p.d}return r},
D(){return A.W(["landedCount",this.b],t.N,t.z)}}
A.nc.prototype={
iT(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.B()
o.c=new A.i6(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.p)(n),++q){p=n[q]
r.k(0,p.a,o.ej(p))}},
cq(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o)p.l7(r[o])
s.k(0,a,n.ej(m))},
ej(a){var s=A.uf(this.a,a),r=this.b,q=A.f([r.c2(s.a,1),r.c2(s.b,2),r.c2(s.c,0)],t.t),p=s.d
if(!B.o.gI(p))q.push(r.c2(p,0))
return q},
i7(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.F
s=l.a
r=A.at([s],t.N)
for(n=n.an(s),q=J.O(n.a),n=new A.I(q,n.b,n.$ti.i("I<1>"));n.m();){p=q.gp()
o=p.be(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
kO(a,b){var s,r,q,p,o=this,n=o.i7(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.i2(n,b))
s=t.f0
m.dk=l.length<=4?A.ao(l,s):A.ao(A.nz(l,0,A.dX(4,"count",t.S),A.K(l).c),s)
for(l=n.gt(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)m.kP(r[p])}}}
A.aT.prototype={}
A.hT.prototype={
glg(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.f([r,q,p,o,n,m],t.n),new A.lf())&&o>=r&&n>=q&&m>=p}}
A.lf.prototype={
$1(a){return isFinite(A.d8(a))},
$S:5}
A.i5.prototype={
B(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.W(s,3)!==0}else s=!0
if(s)throw A.c(A.z("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.c(A.z("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glg())throw A.c(A.z("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.p)(l),++r){p=l[r]
if(B.a.R(A.f([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.lK()))throw A.c(A.z("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.c(A.z("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.c(A.z("QHMX index "+o+" exceeds vertex count",m))}}}
A.lK.prototype={
$1(a){return!isFinite(A.d8(a))},
$S:5}
A.lJ.prototype={
u(a,b,c,d,e,f,g){var s=this
s.b6(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.b6(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.b6(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.b6(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.b6(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.b6(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
b6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aT(a,b,c,m,n,o,0,0,p),r=new A.aT(g,h,i,m,n,o,1,1,p)
this.b7(s,new A.aT(d,e,f,m,n,o,1,0,p),r)
this.b7(s,r,new A.aT(j,k,l,m,n,o,0,1,p))},
b7(a,b,c){var s=this,r=s.b
B.a.l(r,s.cP(a))
B.a.l(r,s.cP(b))
B.a.l(r,s.cP(c))},
cP(a){var s,r,q=B.a.b2(A.f([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.c(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
kt(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.c(A.l("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.i5(A.ao(g,t.hZ),new Uint16Array(A.U(this.b)),new A.hT(s,r,q,p,o,n))
h.B()
return h}}
A.hU.prototype={}
A.dk.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.lg.prototype={
kz(a){var s
switch(a.a){case 0:s=A.at(["front","street","opposite-house"],t.N)
break
case 1:s=A.at(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.at(["side-boundary","rear-service"],t.N)
break
case 3:s=A.at(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.at(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
kA(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b7
break A}if("kitchen"===a||"cellar"===a){s=B.cU
break A}if("bathroom"===a){s=B.cV
break A}if("spare-room"===a){s=B.cW
break A}s=B.b7
break A}return this.kz(s)}}
A.d3.prototype={}
A.p1.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:72}
A.cR.prototype={
A(){return"FocusKind."+this.b}}
A.dl.prototype={}
A.nd.prototype={}
A.oF.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:73}
A.oE.prototype={
$1(a){return t.Z.a(a).b===this.a},
$S:15}
A.d2.prototype={}
A.eB.prototype={}
A.lG.prototype={
j_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.lX(),a4=this.b,a5=A.az(a4,!0,t.J)
B.a.F(a4)
s=A.f([],t.kl)
for(r=a5.length,q=t.jc,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.p)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.f([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.p)(i),++g){f=i[g]
j.push(new A.b0(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.f([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.p)(h),++g){d=h[g]
i.push(new A.b3(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.f([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.p)(e),++g){b=e[g]
h.push(new A.bk(b.a,b.b,a3.$1(b.c)))}s.push(new A.aM(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.az(a4,!0,t.T)
B.a.F(a4)
s=A.f([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bl(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.cY(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
jt(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
if(q.a3(n))throw A.c(A.l("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){m=s[p]
n=m.a
if(q.a3(n))throw A.c(A.l("duplicate portal "+n))
q.k(0,n,m)}},
kf(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.c(A.l("3D room overlap: "+n.a+" and "+m.a))}},
ke(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.x(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fb(o,i,h,g,f,e)
a5.ef(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.c(A.l(l+" references invalid portal "+d))
i=c.ar(l)
h=c.a9(l)
g=c.w
f=c.x
a5.fb(o,i,h,g,0,f)
a5.ef(a6,l,c.ar(l),c.a9(l),c.a9(l)+g,0,f)}}for(s=new A.T(a6,a6.$ti.i("T<1,2>")).gt(0);s.m();){b=s.d
a=b.b
r=J.c4(a)
r.Z(a,new A.lY())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.c(A.l("overlapping apertures on "+b.a))}}},
fb(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.j
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.c(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
ef(a,b,c,d,e,f,g){J.hn(t.gz.a(a).lH(b+":"+c.b,new A.lW()),new A.h_([d,e,f,g]))},
aG(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.iw(q),s.b+r.ix(q),s.c)},
an(a){var s=this.c,r=A.K(s)
return new A.Q(s,r.i("r(1)").a(new A.lZ(a)),r.i("Q<1>"))},
lG(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.c(A.ay(a,"roomId","not a portal endpoint"))
r=this.aG(o)
q=b.a9(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.ar(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
gm4(){return B.a.bE(this.b,0,new A.m_(),t.S)},
hN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.K
s=A.f([new A.b6(a,B.K)],t.bM)
r=A.at([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.lL(s,0)
n=o.a
m=o.b
for(l=this.an(n),k=J.O(l.a),l=new A.I(k,l.b,l.$ti.i("I<1>"));l.m();){j=k.gp()
i=j.be(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.L(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.L(m,p)
h.push(j)
B.a.l(s,new A.b6(i,h))}}}return B.K}}
A.lX.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:74}
A.lY.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.G(a.a[0],b.a[0])},
$S:75}
A.lW.prototype={
$0(){return A.f([],t.a3)},
$S:96}
A.lZ.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:77}
A.m_.prototype={
$2(a,b){return A.a(a)+t.J.a(b).e.length},
$S:78}
A.le.prototype={}
A.nr.prototype={
iv(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.ns())}else s=!1
return s}}
A.ns.prototype={
$1(a){return t.Z.a(a).w},
$S:15}
A.lL.prototype={
lD(a){var s=this.e,r=A.K(s)
return new A.Q(s,r.i("r(1)").a(new A.lO(a)),r.i("Q<1>"))},
c3(a){return B.a.cf(this.d,new A.lM(a),new A.lN(a))},
e1(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.c(A.l("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.c(A.l("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-1.5)>0.0001)throw A.c(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a4(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.c(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.c(A.l("invalid bounds for inventory asset "+m))}j=A.a4(s)
i=A.a4(s)
h=A.a4(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.p)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.c(A.l("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.c(A.l(a7+m+" references "+l))
n=a6.c3(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.uU()
if(!e.b.test(k))throw A.c(A.l("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.c(A.l("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.c(A.l("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.c(A.l("duplicate inventory socket "+l+":"+e))
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
a4=g.hX(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.c(A.l(a7+m+" escapes "+f.a))}}}
A.lO.prototype={
$1(a){return t.gB.a(a).b===this.a},
$S:79}
A.lM.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:80}
A.lN.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:29}
A.c8.prototype={}
A.c0.prototype={
hX(a,b){var s=this.f.c.b*b,r=a.f
return new A.b(r.a.b*s,r.b.b*s,0)}}
A.m6.prototype={}
A.m4.prototype={}
A.pf.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.m5.prototype={
D(){var s,r,q,p=A.x(t.N,t.z),o=this.a,n=A.o(o).i("a1<1>")
n=A.L(new A.a1(o,n),n.i("n.E"))
B.a.Y(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.p)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dV(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.c(B.d6)
s=t.X
r=A.aU(a,s,s)
s=this.a
s.F(0)
for(q=new A.T(r,A.o(r).i("T<1,2>")).gt(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aF(o)||o<0)throw A.c(B.df)
s.k(0,n,o)}}}
A.cc.prototype={}
A.i6.prototype={
i2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.U.a(a)
s=A.f([],t.bz)
for(r=a.gt(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.p)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cc(new A.b(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.jX(j),0.06))}}B.a.Z(s,new A.lP(b))
return A.nz(s,0,A.dX(4,"count",t.S),t.f0).bi(0)},
jX(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.lP.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.G(a.a.ad(0,s).gq(0),b.a.ad(0,s).gq(0))},
$S:82}
A.f1.prototype={
A(){return"Floor."+this.b}}
A.cQ.prototype={
A(){return"Facing."+this.b}}
A.b0.prototype={}
A.bl.prototype={
be(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
ar(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.c(A.ay(a,"roomId","not an endpoint of "+s.a))},
a9(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.c(A.ay(a,"roomId","not an endpoint of "+s.a))}}
A.b3.prototype={}
A.bk.prototype={}
A.cO.prototype={}
A.cY.prototype={}
A.aM.prototype={}
A.lR.prototype={
kS(a){return B.a.cf(this.c,new A.lS(a),new A.lT(a))},
m1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.c(A.l("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.c(A.l("soundscape source changed: "+f))
f=t.N
s=A.a4(f)
f=A.x(f,t.gB)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.c(A.l("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.c(A.l("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.c(A.l("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.c(A.l("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gI(k)||k.gao().R(0,new A.lU()))throw A.c(A.l("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.c(A.l("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.c(A.l("sound emitter "+l+" escapes "+j.a))}}}
A.lS.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:83}
A.lT.prototype={
$0(){return A.k(A.l("sound emitter missing: "+this.a))},
$S:29}
A.lU.prototype={
$1(a){return B.b.dY(A.C(a)).length===0},
$S:4}
A.c7.prototype={}
A.lH.prototype={
d_(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.ay(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.eH}q=A.f([],t.iG)
p=B.d.aI(r)+1
o=B.d.aI(b)
for(n=p;n<=o;++n){m=B.c.W(n,24)
B.a.l(q,new A.f6("tick"))
if(B.c.W(m,6)===0)B.a.l(q,new A.f6("chime"))}l.b=b
return q}}
A.f6.prototype={}
A.lQ.prototype={
d_(a,b){var s,r,q,p,o,n=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.ay(b,"hour","must be in [0, 24)"))
s=n.a
r=n.b
if(s==null||r==null||a!==s||b<r){n.a=a
n.b=b
return B.eG}q=A.f([],t.dL)
for(p=B.d.aI(r)+1;p<=B.d.aI(b);++p){o=B.c.W(p,24)
if(B.c.W(o,4)===2)B.a.l(q,B.e6)
if(B.c.W(o,3)===1)B.a.l(q,B.e7)
if(B.c.W(o,8)===5)B.a.l(q,B.e8)}n.b=b
return q}}
A.eg.prototype={}
A.pe.prototype={
$1(a){return typeof a!="number"},
$S:16}
A.lV.prototype={
D(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.x(m,l)
for(s=n.a,s=new A.T(s,A.o(s).i("T<1,2>")).gt(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.W(["open",o.a,"locked",o.b],m,r))}l=A.x(m,l)
for(s=n.c,s=new A.T(s,A.o(s).i("T<1,2>")).gt(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.W(["lit",o.a,"examined",o.b],m,r))}return A.W(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
ko(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a4(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)d.l(0,s[q].a)
r=A.a4(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.p)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l)r.l(0,n[l].a)
e=A.a4(e)
for(q=0;q<p.length;p.length===n||(0,A.p)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.qT(new A.a1(o,A.o(o).i("a1<1>")),d)){d=f.b
if(A.qT(new A.a1(d,A.o(d).i("a1<1>")),r)){d=f.c
e=!A.qT(new A.a1(d,A.o(d).i("a1<1>")),e)}else e=n}else e=n
if(e)throw A.c(B.du)
e=f.d
if(e<0||e>2)A.k(B.da)
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
A.fm.prototype={
D(){return A.W(["open",this.a,"locked",this.b],t.N,t.y)}}
A.fe.prototype={
D(){return A.W(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.l9.prototype={
$1(a){return this.a.v(0,A.C(a))},
$S:4}
A.cS.prototype={
A(){return"Hand."+this.b}}
A.nV.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
ea(a,b){var s,r,q,p,o=A.f([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.im.prototype={
D(){var s,r,q,p=t.N,o=A.x(p,t.x)
for(s=this.a,r=0;r<5;++r){q=B.w[r]
o.k(0,q,s.h(0,q))}return A.W(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.N(B.w,t.ej.a(new A.mn(this)),t.dD).b2(0," \xb7 ")}}
A.mm.prototype={
$2(a,b){return new A.R(A.C(a),A.C(b),t.gc)},
$S:84}
A.mn.prototype={
$1(a){return this.a.a.h(0,A.C(a))},
$S:25}
A.bu.prototype={
D(){var s,r,q,p=this,o=A.f([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)o.push(s[q].D())
s=p.r
s=s==null?null:s.D()
return A.W(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.m8.prototype={
bu(a){t.G.a(a)
return a.a===5&&B.a.a7(B.w,new A.mf(this,a))},
eg(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bu(b))return null
s=this.e++
r=new A.bu(s,a,A.f([A.ml(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
d3(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bu(b))return!1
B.a.l(s.c,A.ml(b,c,B.a9))
return!0},
kk(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bu(b))return!1
s.r=A.ml(b,0,B.bi)
return!0},
ip(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.F(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a3(p)&&!B.a.v(s,p))B.a.l(s,p)}},
m2(a){var s
if(!this.b.a3(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.l(s,a)
return!0},
D(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.L(n,A.o(n).c)
B.a.Y(n)
s=A.f([],t.bV)
for(r=q.b,r=new A.ap(r,r.r,r.e,A.o(r).i("ap<2>"));r.m();)s.push(r.d.D())
return A.W(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.mf.prototype={
$1(a){var s
A.C(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.v(this.a.a.h(0,a),s)},
$S:4}
A.kP.prototype={
d4(a,b){if(a.a===B.V&&!a.d)return new A.mI(b,B.bG)
return new A.mj(b,a.d,a.e,B.bG)},
kJ(a){return this.d4(a,null)}}
A.dd.prototype={}
A.kQ.prototype={
bO(a){var s,r,q=a==null?null:B.b.dY(a).toLowerCase()
if(q==null||q.length===0)return B.co
s=q==="next"
if(s||q==="auto")return new A.dd(B.V,s,q==="auto",!1,null)
r=q!=="legacy"
return new A.dd(B.ab,!1,!1,r,r?"unknown renderer query":null)}}
A.mk.prototype={}
A.mj.prototype={
gba(){var s=this.b
s=s==null?null:s.gba()
return s==null?A.n8("legacy",A.f([],t.s),this.c,this.d,"legacy"):s},
aQ(){if(this.e===B.bH)throw A.c(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aQ()
this.e=B.x},
aJ(a,b){var s
if(a<=0||b<=0)throw A.c(A.z("legacy surface size must be positive",null))
if(this.e!==B.x)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aJ(a,b)},
aM(a){var s
if(this.e!==B.x)A.k(A.l("legacy backend is not ready"))
B.r.bb(A.W(["backend","legacy","interpolation",0,"facts",A.k_(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aM(a)},
b1(a){var s
if(this.e!==B.x)A.k(A.l("legacy backend is not ready"))
B.r.bb(A.W(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.b1(a)}}
A.mJ.prototype={}
A.mI.prototype={
gba(){var s=this.b
s=s==null?null:s.gba()
return s==null?A.n8("next",A.f([],t.s),!1,null,"safe"):s},
aQ(){if(this.c===B.bH)throw A.c(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aQ()
this.c=B.x},
aJ(a,b){var s
if(this.c!==B.x)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.c(A.z("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aJ(a,b)},
aM(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.ac){p=q==null
if(p||!q.gd2()){if(s.c!==B.ac)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.x
if(!p)q.hR()}p=s.c
if(p===B.ac)return}if(p!==B.x)A.k(A.l(r))
B.r.bb(A.W(["backend","next","interpolation",0,"facts",A.k_(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gd2()){if(s.c!==B.x)A.k(A.l(r))
s.c=B.ac
q.hH()
return}q.aM(a)}},
b1(a){var s
if(this.c!==B.x)A.k(A.l("pixeldart backend is not ready"))
B.r.bb(A.W(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.b1(a)}}
A.mK.prototype={
kx(a,b){var s,r,q,p,o,n,m
a.B()
s=B.aW.bO(a)
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
B.a.Y(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.p)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.y)r.push("disjoint-timer-query")
if(a.z)r.push("float-render-target")
if(a.Q)r.push("half-float-render-target")
if(a.as)r.push("context-loss")
return r}}
A.fr.prototype={
A(){return"RendererBackendKind."+this.b}}
A.dC.prototype={
A(){return"RendererBackendState."+this.b}}
A.n9.prototype={}
A.iL.prototype={}
A.n7.prototype={
iS(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.c(A.z("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.c(A.z("renderer provenance values must be non-empty",null))}},
D(){var s,r,q,p=this,o=A.x(t.N,t.z)
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
A.bm.prototype={
A(){return"SleepQuality."+this.b}}
A.b4.prototype={
A(){return"SleepLocation."+this.b}}
A.er.prototype={}
A.l0.prototype={
cC(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
iz(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
D(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.f([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
i.push(A.W(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.W(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.l1.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:85}
A.l2.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:86}
A.ia.prototype={
A(){return"InteractionType."+this.b}}
A.dL.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.nZ.prototype={}
A.dK.prototype={}
A.hG.prototype={}
A.m0.prototype={}
A.m2.prototype={
e5(){var s,r,q,p=t.r,o=A.f([],p)
for(s=this.a.b,s=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.f(o.slice(0),p)
B.a.Z(p,new A.m3())
return p},
kE(a,b){var s,r,q,p,o,n=b.b
if(n.gI(n))return B.ie
s=t.N
r=A.a4(s)
q=A.a4(s)
for(s=n.gS(),s=s.gt(s),p=a.c;s.m();){o=s.gp()
if(B.a.gN(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.dK(B.aj,r)
s=r.a
o=B.a.gN(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gN(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dK(B.ck,r)
return new A.dK(B.aU,r)},
jP(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.hG(e,!1,B.id,null)
s=p.d===c
r=this.kE(p,d)
q.m2(e)
return new A.hG(e,s,r,r.a===B.aj&&s?'The world says "'+d.c+'". The entry says "'+B.a.gN(p.c).n(0)+'".':null)},
kK(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aj)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.m0(B.a.gN(s.c).n(0)+" but "+A.q(a.f))}}
A.m3.prototype={
$2(a,b){var s=t.R
s.a(a)
return B.c.G(s.a(b).a,a.a)},
$S:17}
A.bO.prototype={
A(){return"RuptureStep."+this.b}}
A.ne.prototype={}
A.ce.prototype={}
A.nf.prototype={
geb(){var s=B.aw.h(0,this.a)
return s==null?0:s},
iC(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.A)s=q.e
else s=!0
if(s)return B.br
r=A.qF(b)
s=q.c
B.a.F(s)
B.a.J(s,r)
B.a.F(q.d)
q.a=B.X
q.b=0
q.e=!1
return A.f([B.cI],t.e_)},
km(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.c(A.z("rupture advance must be a finite non-negative duration",null))
if(l.a===B.A||a===0)return B.br
s=A.f([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.A))break
A:{q=l.a
p=B.aw.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.L)l.kb(s)
p=l.b
o=B.aw.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.ce())
if(q===B.L){l.a=B.A
l.b=0
l.e=!0
B.a.l(s,B.cH)}else{p=q.a+1
if(!(p<7))return A.e(B.bp,p)
l.a=B.bp[p]
l.b=0
B.a.l(s,new A.ce())}}}return A.ao(s,t.k8)},
D(){var s=this,r=t.N
return A.W(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ao(s.c,r),"extinguishedMantles",A.ao(s.d,r),"completed",s.e],r,t.z)},
kb(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.K(B.d.aI(l.b/l.geb()*A.ao(s,r).length),0,A.ao(s,r).length)
p=l.d
for(;;){o=A.az(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.az(s,!1,r)
o.$flags=3
n=o
o=A.az(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.e(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.ce())}}}
A.hZ.prototype={
gbm(){var s=this.b
if(s<6||s>18)return 0
return B.d.K((s-6)/12,0,1)}}
A.p5.prototype={
$1(a){var s=B.c.c1(this.a,a)&255
return B.c.K(B.d.aD(s+((B.c.c1(this.b,a)&255)-s)*this.c),0,255)},
$S:88}
A.nw.prototype={
D(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.et(g.a),e=t.N,d=A.x(e,t.P)
for(s=g.b,s=new A.T(s,A.o(s).i("T<1,2>")).gt(0);s.m();){r=s.d
q=r.a
d.k(0,q,g.kg(q,r.b))}s=A.et(g.r)
q=A.et(g.w)
p=A.et(g.x)
o=A.x(e,t.l_)
for(n=g.as,n=new A.T(n,A.o(n).i("T<1,2>")).gt(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.f([],m)
for(i=J.O(l.b);i.m();){h=i.gp()
j.push(A.W(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.W(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
kg(a,b){var s,r=A.et(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.et(q.bd(0,new A.nx(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gM(s))r.k(0,"_ambient",A.et(s.bd(0,new A.ny(),t.S,t.z)))
return r}}
A.nx.prototype={
$2(a,b){return new A.R(A.a(a),t.ey.a(b).D(),t.iI)},
$S:89}
A.ny.prototype={
$2(a,b){return new A.R(A.a(a),t.bR.a(b).D(),t.iI)},
$S:90}
A.dJ.prototype={
D(){return A.W(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dI.prototype={
D(){return A.W(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fF.prototype={
D(){var s=t.N
return A.W(["field",this.a,"value",this.b],s,s)}}
A.nB.prototype={
bJ(){var s=0,r=A.bb(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bJ=A.bd(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.aa(A.aG(A.d(A.d(v.G.window).fetch("res/text.json")),t.m),$async$bJ)
case 6:n=b
s=7
return A.aa(A.aG(A.d(n.text()),t.N),$async$bJ)
case 7:m=b
l=A.zf(m)
j=J.b1(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.b1(l,"visitors")
j.toString
o.b=i.a(j)
j=J.b1(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.b1(l,"documents")
j.toString
i.a(j)
j=J.b1(l,"street")
j.toString
i.a(j)
j=J.b1(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.b1(l,"nights")
j.toString
i.a(j)
j=J.b1(l,"endings")
j.toString
o.w=i.a(j)
j=J.b1(l,"records")
j.toString
i.a(j)
j=J.b1(l,"cues")
j.toString
i.a(j)
j=J.b1(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ag(g)
j=A.q(k)
throw A.c("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.b9(null,r)
case 1:return A.b8(p.at(-1),r)}})
return A.ba($async$bJ,r)},
i6(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gO().e2(0,new A.nC())
r=p.$ti
q=t.N
q=A.x(q,q)
q.kj(new A.cu(p,r.i("R<m,m>(1)").a(new A.nD()),r.i("cu<1,R<m,m>>")))
return q}return null},
i9(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aS(p)||o!==B.d.aS(o))return n
return new A.dJ(B.d.aS(p),B.d.aS(o))},
i8(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aS(p)||typeof o!="string"||typeof n!="string")return m
return new A.dI(B.d.aS(p),o,n)},
m3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.x(a1,t.iu),a3=A.x(a1,t.c_),a4=A.x(a1,t.d8),a5=t.a,a6=A.x(a1,t.iD),a7=b.b
a7===$&&A.h()
a7=new A.T(a7,A.o(a7).i("T<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.x(a,a0)
for(o=o.gO(),o=o.gt(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.mO(l,null):null
if(k==null||!q.b(m.b))continue
j=A.x(a1,a1)
for(m=q.a(m.b).gO(),m=m.gt(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.C(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.x(a,r)
for(m=n.$ti.i("cU<1>"),l=new A.cU(n,n.r,n.e,m);l.m();){i=l.d
g=b.i9(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.x(a,s)
for(m=new A.cU(n,n.r,n.e,m);m.m();){l=m.d
e=b.i8(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.h()
a7=new A.T(a7,A.o(a7).i("T<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.f([],s)
for(m=J.O(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.fF(A.C(c.h(0,"field")),A.C(c.h(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.nw(A.x(a,a0),a2,a3,a4,A.x(a1,a5),A.x(a1,a5),A.x(a,a5),A.x(a,a5),A.x(a,a5),A.x(a1,a5),A.x(a1,a5),A.x(a1,a5),a6)}}
A.nC.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:91}
A.nD.prototype={
$1(a){t.d7.a(a)
return new A.R(A.C(a.a),A.C(a.b),t.gc)},
$S:92}
A.kq.prototype={
cz(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.d(v.G.window).setTimeout(A.a8(new A.kr(this)),7000))}}
A.kr.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:28}
A.kS.prototype={
dZ(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.l4.prototype={
iN(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.P(a,i,"door-speaker",j)
k.b!==$&&A.B()
k.b=s
r=A.P(a,i,"door-line",j)
k.c!==$&&A.B()
k.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.d(h.appendChild(s))
A.d(h.appendChild(r))
r=A.P(a,i,"door-cite-list",j)
k.e!==$&&A.B()
k.e=r
s=A.P(a,i,"door-cite-result",j)
k.f!==$&&A.B()
k.f=s
A.d(h.appendChild(r))
A.d(h.appendChild(s))
for(s=A.jZ,r=k.r,q=0;q<5;++q){p=B.et[q]
o=A.d(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.l5(k,p)
if(typeof n=="function")A.k(A.z("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.eR()]=n
o.addEventListener("click",m)
A.d(h.appendChild(o))
B.a.l(r,o)}s=A.P(a,"button","door-continue","continue")
k.d!==$&&A.B()
k.d=s
s.setAttribute("type","button")
s.addEventListener("click",A.a8(new A.l6(k)))
A.d(h.appendChild(s))
l=A.a8(new A.l7(k,a))
k.w=l
h.addEventListener("keydown",l)
A.d(A.i(a.body).appendChild(h))},
e9(a,b){var s,r,q,p=this
p.Q=!0
s=p.b
s===$&&A.h()
s.textContent=a
s=p.c
s===$&&A.h()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)A.d(s[q].style).display=""
r=p.d
r===$&&A.h()
A.d(r.style).display="none"
r=p.e
r===$&&A.h()
r.textContent=""
r=p.f
r===$&&A.h()
r.textContent=""
r=p.a
r.className="door visible"
r.removeAttribute("hidden")
B.a.gam(s).focus()},
cA(a){var s,r,q=this,p=q.c
p===$&&A.h()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.p)(p),++r)A.d(p[r].style).display="none"
p=q.d
p===$&&A.h()
A.d(p.style).display=""
s=q.f
s===$&&A.h()
s.textContent=""
p.focus()},
it(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.jZ,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.d(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.l8(o,this)
if(typeof o=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eR()]=o
m.addEventListener("click",l)
A.d(s.appendChild(m))}},
cg(){var s,r,q=this
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
slr(a){this.x=t.ov.a(a)},
slt(a){this.y=t.jE.a(a)},
sls(a){this.z=t.bZ.a(a)}}
A.l5.prototype={
$1(a){var s
A.d(a)
s=this.a.x
return s==null?null:s.$1(this.b)},
$S:1}
A.l6.prototype={
$1(a){var s
A.d(a)
s=this.a.y
return s==null?null:s.$0()},
$S:1}
A.l7.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.d(a)
s=this.a
if(!s.Q||A.C(a.code)!=="Tab")return
r=A.f([],t.Y)
for(q=s.r,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
if(A.C(A.d(n.style).display)!=="none")r.push(n)}q=s.d
q===$&&A.h()
if(A.C(A.d(q.style).display)!=="none")r.push(q)
s=s.e
s===$&&A.h()
m=A.d(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.a(m.length);++l){k=A.i(m.item(l))
if(s.b(k))B.a.l(r,k)}if(r.length===0)return
j=A.i(this.b.activeElement)
if(A.an(a.shiftKey)){if(j===B.a.gam(r)||!B.a.v(r,j)){a.preventDefault()
B.a.gN(r).focus()}}else if(j===B.a.gN(r)||!B.a.v(r,j)){a.preventDefault()
B.a.gam(r).focus()}},
$S:2}
A.l8.prototype={
$1(a){var s
A.d(a)
s=this.b.z
return s==null?null:s.$1(this.a.a)},
$S:1}
A.lb.prototype={
iO(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.P(s,"h1","journal-title",null)
o.f!==$&&A.B()
o.f=r
q=A.P(s,"div","ending-copy",null)
o.r!==$&&A.B()
o.r=q
A.d(n.appendChild(r))
A.d(n.appendChild(q))
p=A.P(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.a8(new A.lc(o)))
A.d(n.appendChild(p))},
iu(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o=b[p]
n=A.d(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.d(s.appendChild(n))}m.co()},
slu(a){this.w=t.jE.a(a)}}
A.lc.prototype={
$1(a){var s
A.d(a)
s=this.a
s.aE()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.lE.prototype={
iP(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.d(p.appendChild(A.P(s,"h1","journal-title","house notes")))
A.d(p.appendChild(A.P(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.d(p.appendChild(A.P(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.P(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.a8(new A.lF(this)))
A.d(p.appendChild(r))}}
A.lF.prototype={
$1(a){A.d(a)
return this.a.aE()},
$S:1}
A.m9.prototype={
co(){var s,r=this
r.iF()
s=r.r.a-1
if(s<1)s=1
r.CW=r.em(r.CW,s)
r.jS()
r.eP()},
j1(){var s,r=this,q=r.a,p=A.P(q,"div","page-turn",null),o=A.P(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a8(new A.ma(r)))
s=A.P(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a8(new A.mb(r)))
q=A.P(q,"span","right-day-label",null)
r.Q!==$&&A.B()
r.Q=q
A.d(p.appendChild(o))
A.d(p.appendChild(q))
A.d(p.appendChild(s))
return p},
f9(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.em(s.CW+a,r)
s.eP()},
em(a,b){if(a<1)return 1
if(a>b)return b
return a},
jS(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.e5(),r=s.length,q=A.jZ,p=j.a,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=B.a.gN(n.c).n(0)
l=A.d(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.mc(j,n,l)
if(typeof m=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eR()]=m
l.addEventListener("click",k)
A.d(i.appendChild(l))}},
eP(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.f([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ap<2>"),n=new A.ap(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Z(r,new A.md())
j.eO(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.f([],s)
for(r=new A.ap(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Z(s,new A.me())
j.eO(i,s)
k=B.d.K(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.d(i.style).setProperty("width",B.d.cr(k*100,1)+"%")},
eO(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r)A.d(a.appendChild(this.jp(b[r])))},
jp(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.P(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.d(k.createElement("div"))
n.className=q
n.textContent=o
A.d(n.style).setProperty("--shake",B.d.n(p.b))
A.d(j.appendChild(n))}m=a.r
if(m!=null){l=this.jB(m,!1)
l.className=A.C(l.className)+" margin"
A.d(j.appendChild(l))}return j},
jB(a,b){var s=b?"hand-line struck":"hand-line",r=A.P(this.a,"div",s,a.n(0))
A.d(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.ma.prototype={
$1(a){A.d(a)
return this.a.f9(-1)},
$S:1}
A.mb.prototype={
$1(a){A.d(a)
return this.a.f9(1)},
$S:1}
A.mc.prototype={
$1(a){var s,r,q
A.d(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:1}
A.md.prototype={
$2(a,b){var s=t.R
return B.c.G(s.a(a).a,s.a(b).a)},
$S:17}
A.me.prototype={
$2(a,b){var s=t.R
return B.c.G(s.a(a).a,s.a(b).a)},
$S:17}
A.fl.prototype={
bn(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.d(s.style).setProperty("--panel-fade","0.25s")
A.d(A.i(this.a.body).appendChild(s))},
co(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.C(n.className),"open"))return
s=$.mE
if(s!=null&&s!==o)s.aE()
$.mE=o
r=o.a
o.d=A.i(r.activeElement)
A.rx(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.a8(o.gjM())
o.e=q
r.addEventListener("keydown",q)
p=A.tM(n)
if(p.length!==0)B.a.gam(p).focus()
else n.focus()},
aE(){var s,r,q=this,p=q.b
if(!B.b.v(A.C(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.mE===q)$.mE=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jN(a){A.d(a)
if(A.an(a.defaultPrevented))return
if(A.C(a.code)==="Escape"){a.preventDefault()
this.aE()
return}if(A.C(a.code)==="Tab")this.ka(a)},
ka(a){var s,r=A.tM(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.an(a.shiftKey)){if(s===B.a.gam(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gN(r).focus()}}else if(s===B.a.gN(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gam(r).focus()}},
sbL(a){this.c=t.jE.a(a)}}
A.mS.prototype={
is(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.nk.prototype={
iU(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="settings-grid",f=h.b
f.setAttribute("aria-label","House settings")
A.d(f.appendChild(A.P(a,"h2","journal-title","House settings")))
A.d(f.appendChild(A.P(a,"p","settings-copy","Set the house voice without changing what happened in it.")))
s=A.P(a,"div",g,null)
for(r=t.ib,q=r.a(new A.nn()),p=B.a.gt(B.bv),o=t.pl,q=new A.I(p,q,o);q.m();){n=p.gp()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.d(s.appendChild(h.jA(a,m,l,n==null?1:n,k)))}A.d(f.appendChild(s))
j=A.P(a,"div",g,null)
for(r=r.a(new A.no()),q=B.a.gt(B.bv),o=new A.I(q,r,o);o.m();)A.d(j.appendChild(h.k9(a,q.gp())))
A.d(f.appendChild(j))
i=A.P(a,"button","door-continue","return")
i.setAttribute("type","button")
i.addEventListener("click",A.a8(new A.np(h)))
A.d(f.appendChild(i))},
k9(a,b){var s=this,r=A.P(a,"label","setting-toggle",null),q=A.d(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.ax=q
break
case"mono":s.ay=q
break
case"high-contrast":s.ch=q
break
case"strong-highlights":s.CW=q
break}q.addEventListener("change",A.a8(new A.nm(s,b,q)))
A.d(r.appendChild(q))
A.d(r.appendChild(A.P(a,"span",null,b.b)))
return r},
jA(a,b,c,d,e){var s,r,q=this,p=A.P(a,"label","setting-row",null),o=A.P(a,"span",null,c),n=A.d(a.createElement("input"))
n.type="range"
n.min=A.q(e)
n.max=A.q(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.P(a,"output",null,"100%")
n.addEventListener("input",A.a8(new A.nl(q,n,r,b)))
A.d(p.appendChild(o))
A.d(p.appendChild(n))
A.d(p.appendChild(r))
q.Q.k(0,b,n)
q.as.k(0,b,r)
q.at.k(0,b,new A.b6(e,d))
return p},
e7(a,b){var s,r,q=this.Q.h(0,a),p=this.as.h(0,a)
if(q==null||p==null)return
s=this.at.h(0,a)
if(s==null)s=B.fA
r=B.d.K(b,s.a,s.b)
q.value=B.d.n(r)
p.textContent=""+B.d.aD(r*100)+"%"},
slx(a){this.f=t.hm.a(a)},
slz(a){this.r=t.B.a(a)},
sly(a){this.w=t.B.a(a)},
slv(a){this.x=t.hm.a(a)},
slw(a){this.y=t.B.a(a)},
slB(a){this.z=t.B.a(a)}}
A.nn.prototype={
$1(a){return t.b9.a(a).d===B.G},
$S:30}
A.no.prototype={
$1(a){return t.b9.a(a).d===B.Y},
$S:30}
A.np.prototype={
$1(a){A.d(a)
return this.a.aE()},
$S:1}
A.nm.prototype={
$1(a){var s,r=this
A.d(a)
switch(r.b.a){case"muted":s=r.a.r
if(s!=null)s.$1(A.an(r.c.checked))
break
case"mono":s=r.a.w
if(s!=null)s.$1(A.an(r.c.checked))
break
case"high-contrast":s=r.a.y
if(s!=null)s.$1(A.an(r.c.checked))
break
case"strong-highlights":s=r.a.z
if(s!=null)s.$1(A.an(r.c.checked))
break}},
$S:2}
A.nl.prototype={
$1(a){var s,r,q,p=this
A.d(a)
s=A.qa(A.C(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aD(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.x
if(q!=null)q.$2(r,s)}else{q=q.f
if(q!=null)q.$2(r,s)}},
$S:2}
A.eq.prototype={
A(){return"SettingCategory."+this.b}}
A.fw.prototype={
A(){return"SettingKind."+this.b}}
A.aA.prototype={}
A.nt.prototype={
iV(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.d(i.appendChild(A.P(a,"h2","journal-title","Rest")))
A.d(i.appendChild(A.P(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.P(a,"div","entry-picker",null)
for(r=A.jZ,q=0;q<2;++q){p=B.bo[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bt[n]
l=A.d(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.nu(this,p,m)
if(typeof k=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eR()]=k
l.addEventListener("click",j)
A.d(s.appendChild(l))}}A.d(i.appendChild(s))},
slA(a){this.f=t.as.a(a)}}
A.nu.prototype={
$1(a){var s,r
A.d(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aE()},
$S:2}
A.bX.prototype={}
A.kn.prototype={
lU(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.K(s)
q=new A.N(s,r.i("m(1)").a(new A.kp()),r.i("N<1,m>")).b4(0)
r=this.b
r.F(0)
s=J.v2(a,t.N)
p=s.$ti
r.J(0,new A.Q(s,p.i("r(n.E)").a(q.gc5(q)),p.i("Q<n.E>")))},
kQ(a,b){var s,r,q,p,o,n=A.f([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.kp.prototype={
$1(a){return t.D.a(a).a},
$S:94}
A.ko.prototype={
$2(a,b){var s,r=t.D
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.G(r,s):B.c.G(a.c,b.c)},
$S:95}
A.jb.prototype={
lf(a){return this.c.v(0,t.g.a(a))},
dV(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a7(0,j.gkG())||!a.a.a7(0,new A.nT(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.ai){n=s.d
if(n<J.b2(p)){o=o===B.N
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.S}else j=!1}}}if(j)return!1
m=new A.ja(r,s.b,A.ao(p,t.kX),B.N)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.F(0)
j.J(0,a.a)
j=l.c
j.F(0)
j.J(0,k)
l.e=m
return!0},
fd(a){var s=this.a,r=A.o(s).i("a1<1>"),q=r.i("Q<n.E>")
s=A.L(new A.Q(new A.a1(s,r),r.i("r(n.E)").a(new A.nQ(a)),q),q.i("n.E"))
B.a.Z(s,new A.nR())
return s},
kr(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.i9
s=m.a.h(0,a)
if(s==null)return B.ia
r=B.c.L(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aR:B.a0
o=p===B.a0&&m.r.v(0,q)&&s.a3(B.aS)?B.aS:p
if(s.a3(o))n=o
else n=s.a3(B.a0)?B.a0:B.aR
r=s.h(0,n)
r.toString
r=new A.ja(a,n,A.ao(r,t.kX),B.N)
m.e=r
return new A.j9(r)},
kB(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cj
if(n.d!==B.N)return B.i7
n.e=a
s=a===B.S
n.d=s?B.ai:B.ag
r=this.d
q=s?B.ch:B.hT
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.cF(q,o,p,a,null))
if(a===B.a5)B.a.l(r,new A.cF(B.hW,o,p,a,null))
if(s)this.eQ(n)
return new A.j8(n)},
kn(){var s,r=this.e
if(r==null)return B.cj
s=r.d
if(s!==B.ag&&s!==B.ah)return B.i8
r.d=B.ah
if(++r.f>=r.c.length){r.d=B.ai
this.eQ(r)
return new A.fE(r,!0)}return new A.fE(r,!1)},
kC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.ag&&s!==B.ah}else s=!0
if(s)return i
r=h.gc6()
if(r==null)return i
s=t.N
q=A.x(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.e(o,p)
p=o[p].c}else p=B.bs
p=J.O(p)
while(p.m()){o=p.gp()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.c5(q,s,s)
m=c.jP(!0,!0,o,new A.nZ(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aj){B.a.l(this.d,new A.cF(B.hV,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gN(j.c)
s=A.rD(s,s)
s.J(0,o.a)
s.J(0,q)
p.kk(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ck)if(k===B.aU){s=n.b
s=s.gM(s)}else s=!1
else s=!0
if(s)B.a.l(this.d,new A.cF(B.hU,o,p.b,i,l))}}return m},
eQ(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.e=null},
siB(a){this.r=t.U.a(a)}}
A.nT.prototype={
$1(a){var s=this.a.a
return new A.a1(s,A.o(s).i("a1<1>")).R(0,new A.nS(A.C(a)))},
$S:4}
A.nS.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:12}
A.nQ.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:12}
A.nR.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.G(a.c,b.c)
return s!==0?s:B.c.G(a.d,b.d)},
$S:97}
A.nP.prototype={
$2(a,b){var s=t.kX
return B.c.G(s.a(a).a,s.a(b).a)},
$S:98}
A.jc.prototype={}
A.jB.prototype={}
A.pn.prototype={
$1(a){return B.b.a_(A.C(a),"off.")},
$S:4}
A.bh.prototype={
A(){return"DoorChoice."+this.b}}
A.bB.prototype={
A(){return"VisitPhase."+this.b}}
A.bC.prototype={
A(){return"VisitTier."+this.b}}
A.d0.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cF.prototype={
D(){var s,r=this,q=A.x(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.ci.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bD.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.bD&&b.a===this.a&&b.b===this.b},
gH(a){return A.cw(this.a,this.b,B.m,B.m)}}
A.bP.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.bP&&b.a===this.a&&b.b===this.b},
gH(a){return A.cw(this.a,this.b,B.m,B.m)}}
A.bn.prototype={
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.bn&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gH(a){var s=this
return A.cw(s.a,s.b,s.c,s.d)},
D(){var s=this
return A.W(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.jd.prototype={
D(){var s,r,q,p=this.a
p=A.L(p,A.o(p).c)
B.a.Y(p)
s=this.b
r=A.o(s)
q=r.i("dj<1,X<m,@>>")
s=A.L(new A.dj(s,r.i("X<m,@>(1)").a(new A.nO()),q),q.i("n.E"))
r=this.c
return A.W(["contacted",p,"resolved",s,"active",r==null?null:r.D()],t.N,t.z)}}
A.nO.prototype={
$1(a){return t.g.a(a).D()},
$S:99}
A.hp.prototype={
D(){var s=this,r=s.a.D(),q=s.e
q=q==null?null:q.b
return A.W(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.kk.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:100}
A.kl.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:101}
A.km.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:102}
A.ja.prototype={
gc6(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.e(r,s)
s=r[s].b}else s=null
return s}}
A.nU.prototype={}
A.bo.prototype={}
A.j9.prototype={}
A.j8.prototype={}
A.fE.prototype={}
A.fZ.prototype={
gba(){var s,r=this.p3
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.n8("next",r?this.gkw():B.eT,!1,null,s)},
gd2(){if(this.p3){var s=this.d
s===$&&A.h()
s=s.b===B.T}else s=!1
return s},
gkw(){var s,r
if(!this.p3)return B.n
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.cG.kx(s,r)},
gl6(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.cr(this.k3,3)},
gl5(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
aQ(){var s,r,q,p,o,n,m=this,l=A.wM(m.a)
m.d=l
l=l.hQ()
m.r=l
l=m.w=B.aW.ia(l)
q=m.b
p=m.c
s=new A.iV(q,p,q,p)
p=A.rQ(m.d)
m.e=p
try{p.hE(new A.iK(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.ag(o)
l=m.w
if(l===B.aa)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.aa
l=A.rQ(m.d)
l.hE(B.fY,s)
m.e=l}l=m.e
l.bV()
n=A.wq(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.p3=!0},
aJ(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.z("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.bV()
new A.iV(a,b,a,b).B()
r.b=a
r.c=b},
kp(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="wall-plaster",b2="grime",b3="renderer is not initialized",b4="resource library is disposed"
if(!a9.p3||a9.Q.length!==0)return
a9.p4=b5
s=a9.dy
r=a9.e
r===$&&A.h()
s.k(0,b1,r.gaC().hU("texture:wall-plaster",256,256))
s.k(0,b2,a9.e.gaC().hU("texture:grime",512,512))
a9.fy=a9.e.gaC().hT(A.rH(s.h(0,b1),!1,"quarantine-house-safe",!0,0.48,0.44,0.46,1,1))
r=a9.fr
r.k(0,"cellar",a9.e.gaC().hT(A.rH(s.h(0,b2),!1,"quarantine-house-cellar",!0,0.3,0.28,0.29,1,1)))
for(q=b5.b,p=A.K(q),o=p.i("r(1)").a(new A.oo()),n=B.a.gt(q),p=new A.I(n,o,p.i("I<1>"));p.m();){o=n.gp().a
m=a9.jY(o)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
k=new A.ca("quarantine-house-"+o+"-gothic",s.h(0,b1),m.a,m.b,m.c,1,1,!1,!0)
if(l.r)A.k(A.l(b4))
k.B()
j=l.b.a.aq(k,b0)
l.e.l(0,j)
r.k(0,o,j)}for(p=a9.fx,i=0;i<7;++i){h=B.ez[i]
o=a9.e.w
if(o==null)o=A.k(A.l(b3))
n=h==="service"?s.h(0,b2):s.h(0,b1)
n=new A.ca("quarantine-inventory-"+h,n,a9.cQ(h).a,a9.cQ(h).b,a9.cQ(h).c,1,1,!1,!0)
if(o.r)A.k(A.l(b4))
n.B()
j=o.b.a.aq(n,b0)
o.e.l(0,j)
p.k(0,h,j)}for(p=q.length,o=a9.Q,n=a9.as,l=a9.at,k=a9.y,g=a9.z,i=0;f=q.length,i<f;q.length===p||(0,A.p)(q),++i){e=q[i]
d=a9.eT(b5,e)
f=a9.e.w
if(f==null)f=A.k(A.l(b3))
c=e.a
if(f.r)A.k(A.l(b4))
b=f.a
d.B()
j=b.b.aq(d,"room:"+c)
a=j.a
b.c.k(0,a,b.b9(d))
f.d.l(0,j)
B.a.l(k,j)
g.k(0,c,j)
f=r.h(0,c)
if(f==null){f=a9.fy
f.toString}a0=new A.aL(j,f,B.y,-1,B.H,B.P,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.y.B()
b=f.a
a1=b.$ti
b.a0(a1.c.a(j))
b=b.b
if(!(a>=0&&a<b.length))return A.e(b,a)
d=b[a].c
b=(d==null?a1.y[1].a(d):d).d
a=B.y.ab()
b=b.gaw()
a1=A.K(b)
A.bf(new A.N(b,a1.i("A(1)").a(a.gav()),a1.i("N<1,A>")))
a2=f.b.bv(a0)
B.a.l(o,a2)
n.k(0,c,a2)
l.k(0,c,a0)}for(i=0;i<q.length;q.length===f||(0,A.p)(q),++i){e=q[i]
for(p=e.e,o=p.length,n=e.a,a3=0;a3<p.length;p.length===o||(0,A.p)(p),++a3){a4=p[a3]
l=a4.c
g=a4.d
a9.ed(n,a9.eL(e,a4.b,l,l+a4.e,g,g+a4.f,7902632),new A.op(a4))}}for(q=b5.c,p=q.length,o=a9.cy,n=b5.e,i=0;l=q.length,i<l;q.length===p||(0,A.p)(q),++i){a5=q[i]
if(a5.at==null||a5.as)continue
e=n.h(0,a5.b)
if(e==null)continue
d=a9.eA(b5,e,a5)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
g=a5.a
if(l.r)A.k(A.l(b4))
f=l.a
d.B()
j=f.b.aq(d,"door-leaf:"+g)
c=j.a
f.c.k(0,c,f.b9(d))
l.d.l(0,j)
B.a.l(k,j)
l=e.a
f=r.h(0,l)
if(f==null){f=a9.fy
f.toString}a0=new A.aL(j,f,B.y,0,B.H,B.P,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.y.B()
b=f.a
a=b.$ti
b.a0(a.c.a(j))
b=b.b
if(!(c>=0&&c<b.length))return A.e(b,c)
d=b[c].c
c=(d==null?a.y[1].a(d):d).d
b=B.y.ab()
c=c.gaw()
a=A.K(c)
A.bf(new A.N(c,a.i("A(1)").a(b.gav()),a.i("N<1,A>")))
o.k(0,g,new A.fY(g,l,f.b.bv(a0),j,a0))}for(i=0;i<q.length;q.length===l||(0,A.p)(q),++i){a5=q[i]
if(a5.as||a5.at!=null)continue
e=n.h(0,a5.b)
if(e==null)continue
r=e.a
a9.ed(r,a9.eL(e,a5.ar(r),a5.a9(r),a5.a9(r)+a5.w,0,a5.x,5915445),new A.oq(a5))}for(r=A.zQ(A.z7(b5)),q=r.length,p=a9.cx,o=a9.CW,i=0;i<r.length;r.length===q||(0,A.p)(r),++i){a6=r[i]
n=a6.a
m=a9.jq(n)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
g=""+n
f=n===4?s.h(0,b2):s.h(0,b1)
f=new A.ca("quarantine-house-exterior-slot-"+g,f,m.a,m.b,m.c,1,1,!0,!0)
if(l.r)A.k(A.l(b4))
f.B()
j=l.b.a.aq(f,b0)
l.e.l(0,j)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
f=a6.b
if(l.r)A.k(A.l(b4))
c=l.a
f.B()
a7=c.b.aq(f,"exterior:slot-"+g)
g=a7.a
c.c.k(0,g,c.b9(f))
l.d.l(0,a7)
B.a.l(k,a7)
a8=new A.aL(a7,j,B.y,-1,B.H,B.P,!0,!0,0,b0)
p.k(0,n,a8)
l=a9.f
l===$&&A.h()
B.y.B()
f=l.a
c=f.$ti
f.a0(c.c.a(a7))
f=f.b
if(!(g>=0&&g<f.length))return A.e(f,g)
d=f[g].c
g=(d==null?c.y[1].a(d):d).d
f=B.y.ab()
g=g.gaw()
c=A.K(g)
A.bf(new A.N(g,c.i("A(1)").a(f.gav()),c.i("N<1,A>")))
o.k(0,n,l.b.bv(a8))}},
ib(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.dx=A.ao(a8.e,t.gB)
if(!a5.p3)return
for(s=a5.ax,r=new A.T(s,A.o(s).i("T<1,2>")).gt(0),q=a5.ay;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.aR(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.k(A.l(a6))
o=n.a
if(p.r)A.k(A.l(a7))
p.a.aR(o)
p.d.aa(0,o)}}s.F(0)
q.F(0)
r=a5.ch
B.a.F(r)
for(p=a5.dx,o=p.length,m=a8.c,l=a5.fx,k=0;k<o;++k){j=p[k]
i=a5.p4
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.c3(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.k(A.l(a6))
f=a5.jz(g,j,m)
e=j.a
if(i.r)A.k(A.l(a7))
d=i.a
f.B()
c=d.b.aq(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.b9(f))
i.d.l(0,c)
i=j.f
f=i.a
a=B.M.ga4()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.iZ(new A.A(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.iI(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.aL(c,a2,i,-1,B.H,B.P,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.B()
a2=d.a
f=a2.$ti
a2.a0(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.e(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.ab()
f=f.gaw()
b=A.K(f)
A.bf(new A.N(f,b.i("A(1)").a(i.gav()),b.i("N<1,A>")))
s.k(0,e,d.b.bv(n))}$.F.j().setAttribute("data-renderer-inventory-items",""+s.a)},
iq(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a8.e,a7=a6.h(0,a9)
if(a7==null)return
s=a7.a
r=A.at([s],t.N)
for(q=a8.an(s),p=J.O(q.a),q=new A.I(p,q.b,q.$ti.i("I<1>"));q.m();){o=p.gp()
n=o.be(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a6.h(0,n)!=null)r.l(0,n)}for(a6=a5.as,a6=new A.T(a6,A.o(a6).i("T<1,2>")).gt(0),s=a5.at;a6.m();){m=a6.d
q=m.a
p=s.h(0,q)
p.toString
l=a5.bt(p,r.v(0,q)?-1:0)
p=a5.f
p===$&&A.h()
o=m.b
k=l.c
k.B()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.a0(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ab()
j=j.gaw()
i=A.K(j)
A.bf(new A.N(j,i.i("A(1)").a(k.gav()),i.i("N<1,A>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.a0(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o].saP(l)
s.k(0,q,l)}for(a6=a5.db,s=a6.length,f=0;f<a6.length;a6.length===s||(0,A.p)(a6),++f){e=a6[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a5.f
q===$&&A.h()
p=a5.bt(e.c,d)
o=p.c
o.B()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.a0(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.e(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.ab()
k=k.gaw()
j=A.K(k)
A.bf(new A.N(k,j.i("A(1)").a(o.gav()),j.i("N<1,A>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.a0(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.e(q,o)
q[o].saP(p)}a6=a5.cy
s=A.o(a6).i("a1<1>")
s=A.L(new A.a1(a6,s),s.i("n.E"))
q=s.length
f=0
for(;f<s.length;s.length===q||(0,A.p)(s),++f){c=a6.h(0,s[f])
p=c.e
l=a5.bt(p,r.v(0,c.b)?-1:0)
p=a5.f
p===$&&A.h()
o=c.c
k=l.c
k.B()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.a0(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ab()
j=j.gaw()
i=A.K(j)
A.bf(new A.N(j,i.i("A(1)").a(k.gav()),i.i("N<1,A>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.a0(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o].saP(l)
a6.k(0,c.a,c.kI(l))}for(a6=a5.dx,s=a6.length,q=a5.ax,p=a5.ay,f=0;f<s;++f){b=a6[f]
o=b.a
a=q.h(0,o)
a0=p.h(0,o)
if(a==null||a0==null)continue
o=a5.f
o===$&&A.h()
k=a5.bt(a0,r.v(0,b.b)?-1:0)
j=k.c
j.B()
i=o.a
h=i.$ti
a1=h.c.a(k.a)
i.a0(a1)
i=i.b
a1=a1.a
if(!(a1>=0&&a1<i.length))return A.e(i,a1)
g=i[a1].c
i=(g==null?h.y[1].a(g):g).d
j=j.ab()
i=i.gaw()
h=A.K(i)
A.bf(new A.N(i,h.i("A(1)").a(j.gav()),h.i("N<1,A>")))
o=o.b
h=o.$ti
h.c.a(a)
h.y[1].a(k)
o.a0(a)
o=o.b
h=a.a
if(!(h>=0&&h<o.length))return A.e(o,h)
o[h].saP(k)}a2=new A.lg().kA(a9).a!==0
a6=a5.cx
s=A.o(a6).i("a1<1>")
s=A.L(new A.a1(a6,s),s.i("n.E"))
q=s.length
p=a5.CW
f=0
for(;f<s.length;s.length===q||(0,A.p)(s),++f){a3=s[f]
a4=p.h(0,a3)
if(a4==null)continue
o=a6.h(0,a3)
o.toString
l=a5.bt(o,a2?-1:0)
o=a5.f
o===$&&A.h()
k=l.c
k.B()
j=o.a
i=j.$ti
h=i.c.a(l.a)
j.a0(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ab()
j=j.gaw()
i=A.K(j)
A.bf(new A.N(j,i.i("A(1)").a(k.gav()),i.i("N<1,A>")))
o=o.b
i=o.$ti
i.c.a(a4)
i.y[1].a(l)
o.a0(a4)
o=o.b
i=a4.a
if(!(i>=0&&i<o.length))return A.e(o,i)
o[i].saP(l)
a6.k(0,a3,l)}},
lK(a,b){var s,r,q,p,o,n,m,l,k,j=this
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
l=m.gaC().dT(j.eT(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.aL(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.h()
m.cZ(k)
m.b.e_(s,k)
r.k(0,b,k)
p.k(0,b,l)
p=j.y
B.a.aa(p,o)
B.a.l(p,l)
j.e.gaC().hV(o)
$.F.j().setAttribute("data-renderer-geometry-refreshes",""+(j.R8+1));++j.R8},
dS(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gaC().dT(k.eA(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.aL(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.cZ(l)
p.b.e_(n,l)
s.k(0,b,r.fh(l,m))
s=k.y
n=r.d
B.a.aa(s,n)
B.a.l(s,m)
k.e.gaC().hV(n)},
ic(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.at([b],t.N),e=a.e,d=e.h(0,b)
if(d!=null)for(s=d.a,r=a.an(s),q=J.O(r.a),r=new A.I(q,r.b,r.$ti.i("I<1>"));r.m();){p=q.gp()
o=p.be(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&e.h(0,o)!=null)f.l(0,o)}n=new A.i6(a).i2(f,c)
m=A.f([],t.dQ)
l=A.f([],t.bH)
for(k=0;k<n.length;++k){j=n[k]
i=this.es(j.b)
e=j.a
h=new A.A(e.a,e.b,e.c)
e=j.d
s=j.c
if(k===0)B.a.l(l,new A.cz(k,h,B.af,i,e,s,1.05,1.4))
else B.a.l(m,new A.iD(h,i,e,s))}g=A.uv(a0)
e=Math.max(0.045,0.52*a1)
this.id=new A.hX(B.eh,B.eg,1.5,14,B.ef,e,a0===0?null:new A.l3(new A.A(g.a,g.b,g.c),this.es(A.uu(a0)),0.72+a1*0.18),m,l)},
aM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.p3)throw A.c(A.l("Pixeldart runtime is not initialized"))
s=g.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cv(s)
q=A.q8(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.e7(r,q,q.X(0,r),B.a_,B.hD,0.1,60,g.b/g.c)}p=g.id
o=g.k1
n=g.p2++
m=g.k4
l=new A.nv()
$.r9()
k=$.mQ.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.h()
j=g.f
j===$&&A.h()
k.jR()
k.bV()
i=B.a.v(k.d,j)
if(!i)A.k(A.z("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga8(0))A.k(A.z("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga8(0)||i.gbH()<1e-12)A.k(A.z("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.z("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.z("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.ga8(0)||!s.b.ga8(0)||!s.c.ga8(0))A.k(A.z("CameraView matrices must be finite",f))
p.B()
o.B()
if(!isFinite(m))A.k(A.z("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.ln(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.ap)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.ap
s.c=0
B.a.F(s.a)
g.k2=g.e.kU()
s=$.mQ.$0()
l.b=s
g.k3=l.gkR()/1000},
b1(a){},
hH(){},
hR(){++this.ok},
eT(a,b){var s,r,q,p,o,n,m=A.uf(a,b),l=A.z6(a,b),k=A.L(m.a,t.i)
B.a.J(k,m.b)
B.a.J(k,m.c)
B.a.J(k,l)
s=new Float32Array(A.U(k))
r=A.f([],t.k)
for(k=s.length,q=0;q<k;q+=14){p=s[q]
o=q+1
if(!(o<k))return A.e(s,o)
o=s[o]
n=q+2
if(!(n<k))return A.e(s,n)
B.a.l(r,new A.A(p,o,s[n]))}return new A.bN(B.Q,s,null,A.bf(r))},
ed(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.h()
r=s.gaC().dT(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.aL(r,p.jD(a),B.y,0,B.H,B.P,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.cZ(q)
B.a.l(p.db,new A.jD(a,s.b.bv(q),q,c))},
jD(a){var s=this.fr.h(0,a)
if(s==null){s=this.fy
s.toString}return s},
jz(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cg(new Float32Array(5376))
g=this.jy(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.al(q,r,o,p,g)
s.al(n,m,l,k,g)
s.al(r,n,k,o,g)
s.al(m,q,p,l,g)
s.al(r,q,m,n,g)
s.al(o,k,l,p,g)
j=B.o.aL(s.a,0,s.b)
g=A.f([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.e(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.e(j,c)
g.push(new A.A(e,d,j[c]))}return new A.bN(B.Q,j,null,A.bf(g))},
jy(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
jq(a){var s
A:{if(0===a){s=B.fC
break A}if(1===a){s=B.fE
break A}if(2===a){s=B.fK
break A}if(3===a){s=B.fU
break A}if(4===a){s=B.fW
break A}if(5===a){s=B.fI
break A}if(6===a){s=B.fT
break A}if(7===a){s=B.fO
break A}s=B.fS
break A}return s},
cQ(a){var s
A:{if("architecture"===a){s=B.fD
break A}if("furniture"===a){s=B.bF
break A}if("fixture"===a){s=B.fN
break A}if("service"===a){s=B.fP
break A}if("story"===a){s=B.fM
break A}if("decor"===a){s=B.fH
break A}if("micro"===a){s=B.fJ
break A}s=B.bF
break A}return s},
jY(a){var s
A:{if("living-room"===a){s=B.fG
break A}if("hall"===a){s=B.fL
break A}if("kitchen"===a){s=B.fV
break A}if("bedroom"===a){s=B.fX
break A}if("landing"===a){s=B.fQ
break A}if("bathroom"===a){s=B.fF
break A}if("spare-room"===a){s=B.fR
break A}s=B.fB
break A}return s},
aA(a){return this.lm(t.G.a(a))},
lm(a){var s=0,r=A.bb(t.H),q,p=this,o,n,m,l
var $async$aA=A.bd(function(b,c){if(b===1)return A.b8(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.f([],t.iw)
for(n=0;n<2;++n){m=B.eR[n]
l=a.h(0,m)
if(l!=null)o.push(p.bX(m,l))}s=3
return A.aa(A.lt(o,t.H),$async$aA)
case 3:case 1:return A.b9(q,r)}})
return A.ba($async$aA,r)},
bX(a,b){return this.jC(a,b)},
jC(a,b){var s=0,r=A.bb(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bX=A.bd(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dy.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.d(A.d(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.aa(A.aG(A.d(m.decode()),t.X),$async$bX)
case 7:g=A.d(A.d(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.c(h)}k.drawImage(m,0,0)
j=t.mR.a(A.d(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gaC()
f=new Uint8Array(A.U(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.m0(d,f)
$.F.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ag(c)
h=$.F.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.d(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.q(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.b9(q,r)
case 2:return A.b8(o.at(-1),r)}})
return A.ba($async$bX,r)},
bt(a,b){return new A.aL(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eA(a,b,c){var s,r,q,p,o,n=A.z5(a,b,c),m=n.length
if(m===0)throw A.c(A.l("door "+c.a+" produced no leaf geometry"))
s=A.f([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.e(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.e(n,o)
s.push(new A.A(q,p,n[o]))}return new A.bN(B.Q,n,null,A.bf(s))},
eL(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Y.j().aG(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cg(new Float32Array(5376))
o.al(k[0],k[1],k[2],k[3],g)
n=B.o.aL(o.a,0,o.b)
k=A.f([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.e(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.e(n,p)
k.push(new A.A(r,q,n[p]))}return new A.bN(B.Q,n,null,A.bf(k))},
es(a){return new A.ct((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$iqd:1}
A.oo.prototype={
$1(a){return t.J.a(a).a!=="cellar"},
$S:26}
A.op.prototype={
$0(){return!this.a.w},
$S:18}
A.oq.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:18}
A.ev.prototype={
gba(){return A.n8("legacy",B.n,this.e,this.f,"legacy")},
gd2(){return this.x},
aQ(){var s,r=this
if(r.w)return
s=A.wr(r.a,r.b,r.c)
r.r!==$&&A.B()
r.r=s
s.fQ=s.fP=s.fO=r.d
r.w=!0},
aJ(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.z("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.aJ(a,b)}},
aM(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.c(A.l("legacy runtime is not initialized"))
if(j.x||$.eH==null)return;++j.y
$.F.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.h()
r=$.tW
q=$.bq.j()
s.fU=A.uv($.dU.j().gbm()).ga4()
s.shG(A.uu($.dU.j().gbm()))
p=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.dU.j().gbm()))
s.fY=p<0?0:p
p=$.bG.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.U(0,p.d.X(0,(A.pS(o*0.28,1309)*2-1)*n)).U(0,p.c.X(0,(A.pS(p.r*0.28,2839)*2-1)*n))
p=$.bG.j()
s.fZ=p.a
s.dl=p.b
s.dm=p.c
s.dn=p.d
m=A.y8(0,0.25,0.11)
s.dq=m.a
s.dr=m.b
s.ds=m.c
p=s.cd
l=p==null?s.bA:p
if(l==null)l=s.aZ
p=s.aH
p.aO(l)
s.az.depthMask(!0)
p.kD(l,s.dq/255,s.dr/255,s.ds/255)
s.dg=s.ce=0
s.di=!1
s.bC=0
k=$.eH
if(k!=null)k.kO($.aE,$.hm())
s.l4(r,q)
$.tv.j().dZ(B.cE,r)},
b1(a){},
hH(){this.x=!0},
hR(){this.x=!1},
$iqd:1}
A.jD.prototype={}
A.fY.prototype={
fh(a,b){var s=this,r=b==null?s.d:b
return new A.fY(s.a,s.b,s.c,r,a)},
kI(a){return this.fh(a,null)}}
A.pv.prototype={
$1(a){var s
try{A.rq(a,this.a)
return!0}catch(s){if(A.ag(s) instanceof A.J)return!1
else throw s}},
$S:104}
A.pw.prototype={
$0(){var s=$.jY.j()
if($.as===s)$.as=null
$.cl=0
s=$.aO.j()
s.aU()
s.w=!0
return null},
$S:0}
A.px.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gap().a===21){A.u4(!1)
return}s=$.Y.j().r.b
$.V.j().iy(a,b,$.aE)
r=$.Y.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cw()
if(typeof n!=="number")return A.kb(n)
if(!(o<n))break
if($.Y.b===$.Y)A.k(A.a0(""))
p=B.a.h(B.D,q).b
o=$.eH
if(o!=null)o.cq(p)
o=$.bc
if(o!=null){n=$.Y.b
if(n===$.Y)A.k(A.a0(""))
o.lK(n,p)}o=q
if(typeof o!=="number")return o.U()
q=o+1}A.qU("saved after sleep")},
$S:105}
A.pH.prototype={
$0(){var s=$.qy.j()
if($.as===s)$.as=null
$.cl=0
s=$.aO.j()
s.aU()
s.w=!0
return null},
$S:0}
A.pI.prototype={
$0(){var s=$.qw.j()
if($.as===s)$.as=null
$.cl=0
s=$.aO.j()
s.aU()
s.w=!0
return null},
$S:0}
A.pJ.prototype={
$2(a,b){var s
A.qX(a,A.q(b))
switch(a){case"master":s=$.bH
if(s!=null)s.ii(b)
break
case"voice":s=$.bH
if(s!=null)s.il(b)
break
case"effects":s=$.bH
if(s!=null)s.ih(b)
break
case"ambience":s=$.bH
if(s!=null)s.ig(b)
break
case"music":s=$.bH
if(s!=null)s.ij(b)
break}},
$S:31}
A.pK.prototype={
$1(a){var s
A.qX("muted",""+a)
s=$.bH
if(s!=null)s.ik(a)},
$S:8}
A.pL.prototype={
$1(a){var s
A.qX("mono",""+a)
s=$.bH
if(s!=null)s.e8(a)},
$S:8}
A.pM.prototype={
$2(a,b){A.qY(a,A.q(b))
A.tz(a,b)},
$S:31}
A.pN.prototype={
$1(a){var s="high-contrast"
A.qY(s,""+a)
A.oG(s,a)},
$S:8}
A.pO.prototype={
$1(a){var s="strong-highlights"
A.qY(s,""+a)
A.oG(s,a)},
$S:8}
A.py.prototype={
$0(){var s=$.d7.j()
if($.as===s)$.as=null
$.cl=0
s=$.aO.j()
s.aU()
s.w=!0
return null},
$S:0}
A.pz.prototype={
$0(){var s=$.jW.j()
if($.as===s)$.as=null
$.cl=0
s=$.aO.j()
s.aU()
s.w=!0},
$S:0}
A.pA.prototype={
$0(){var s=$.jW.j()
if($.as===s)$.as=null
$.cl=0
s=$.aO.j()
s.aU()
s.w=!0},
$S:0}
A.pB.prototype={
$1(a){A.d(a)
return A.u3()},
$S:1}
A.pC.prototype={
$1(a){var s,r
A.d(a)
if(A.an(a.defaultPrevented))return
if(A.C(a.code)==="Escape"&&!A.an(a.repeat)){r=$.as
if(r==null)A.qK($.d7.j())
else r.aE()
return}s=$.as==null
if(!A.an(a.repeat)&&s)$.cI.j().b1(new A.iL(A.C(a.code),!0,1))
if(A.C(a.code)==="KeyP"&&!A.an(a.repeat)&&$.uP())$.qL=!$.qL
if(A.C(a.code)==="KeyR"&&!A.an(a.repeat)&&s&&$.uc){r=$.eL
if(r!=null)r.bg()}if(A.C(a.code)==="KeyJ"&&!A.an(a.repeat)&&!$.aD.j().Q)A.pb($.jY.j())
if(A.C(a.code)==="KeyL"&&!A.an(a.repeat)&&!$.aD.j().Q)A.pb($.qy.j())
if(A.C(a.code)==="KeyH"&&!A.an(a.repeat)&&!$.aD.j().Q)A.pb($.qw.j())
if(A.C(a.code)==="KeyO"&&!A.an(a.repeat)&&!$.aD.j().Q)A.pb($.d7.j())
if(A.C(a.code)==="KeyK"&&!A.an(a.repeat)&&s)A.qU("saved")},
$S:2}
A.pD.prototype={
$1(a){A.d(a)
if($.as==null)$.cI.j().b1(new A.iL(A.C(a.code),!1,0))},
$S:2}
A.pE.prototype={
$1(a){A.d(a)
return A.tB()},
$S:1}
A.pF.prototype={
$1(a){A.d(a)
return A.tB()},
$S:1}
A.pG.prototype={
$1(a){A.d(a)
return $.aO.j().bN($.F.j())},
$S:1}
A.p3.prototype={
$1(a){var s=A.C(A.d(a).message)
A.p7(s,null)},
$S:2}
A.p4.prototype={
$1(a){var s
A.d(a)
s=a.reason
A.p7("unhandled rejection: "+A.q(s==null?A.C(a.type):s),null)},
$S:2}
A.pa.prototype={
$0(){this.a.className=""},
$S:10}
A.p8.prototype={
$1(a){return t.R.a(a).e},
$S:27};(function aliases(){var s=J.cT.prototype
s.iE=s.n
s=A.n.prototype
s.iD=s.e2
s=A.fl.prototype
s.iF=s.co})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"ye","vX",32)
r(J.u.prototype,"gc5","v",14)
q(A,"yr","wb",19)
p(A.bM.prototype,"gkG","a3",14)
o(A,"z1","wW",9)
o(A,"z2","wX",9)
o(A,"z3","wY",9)
q(A,"ue","yJ",0)
s(A,"z9","w2",32)
r(A.bR.prototype,"gc5","v",14)
o(A,"zc","xU",6)
p(A.iq.prototype,"glR","lS",63)
p(A.iY.prototype,"glP","lQ",81)
q(A,"As","q9",18)
p(A.cv.prototype,"gav","hY",48)
var n
p(n=A.i9.prototype,"gjE","jF",1)
p(n,"gjG","jH",1)
p(n,"gjK","jL",1)
p(n,"gjI","jJ",1)
o(A,"zF","tJ",6)
o(A,"zH","tI",6)
o(A,"zu","vS",110)
o(A,"zv","vT",111)
o(A,"zK","vN",112)
p(A.fl.prototype,"gjM","jN",1)
p(A.jb.prototype,"gle","lf",12)
o(A,"um","yv",113)
o(A,"zz","xQ",114)
q(A,"zB","xT",0)
o(A,"zA","xR",76)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.E,null)
q(A.E,[A.q2,J.ib,A.fv,J.dc,A.n,A.eV,A.cN,A.a9,A.M,A.nj,A.by,A.dw,A.I,A.fG,A.ai,A.ch,A.bS,A.ek,A.e9,A.dR,A.cy,A.nH,A.mA,A.f0,A.h1,A.Z,A.mo,A.cU,A.ap,A.fd,A.ii,A.o5,A.ox,A.c1,A.jt,A.jR,A.ou,A.jh,A.bF,A.aH,A.jl,A.dM,A.ak,A.ji,A.jP,A.hd,A.fQ,A.jy,A.dS,A.fT,A.h7,A.jS,A.dh,A.hH,A.om,A.oy,A.di,A.cP,A.jq,A.iz,A.fy,A.o6,A.J,A.R,A.al,A.jQ,A.nv,A.aZ,A.h9,A.nJ,A.jK,A.mz,A.jv,A.ew,A.mT,A.dA,A.kX,A.kY,A.iE,A.e7,A.hX,A.ln,A.cx,A.lD,A.ct,A.l3,A.iD,A.cz,A.ca,A.cE,A.nN,A.bN,A.mB,A.mL,A.iM,A.aL,A.iV,A.iK,A.lp,A.iq,A.j1,A.mw,A.cH,A.iY,A.ds,A.hV,A.hW,A.lo,A.am,A.bw,A.aY,A.S,A.eW,A.mR,A.aW,A.mV,A.aV,A.mX,A.mW,A.dP,A.fq,A.ot,A.jE,A.js,A.nb,A.nh,A.bj,A.bg,A.au,A.l_,A.ho,A.dz,A.lq,A.cv,A.iI,A.iZ,A.A,A.eU,A.jj,A.hy,A.jk,A.hL,A.jn,A.eZ,A.jo,A.hP,A.jp,A.i4,A.ju,A.hA,A.hz,A.fn,A.jF,A.iH,A.jG,A.dG,A.iP,A.jI,A.iQ,A.jJ,A.iT,A.jN,A.iS,A.jM,A.j7,A.jT,A.fs,A.jf,A.jU,A.kV,A.i_,A.i1,A.f5,A.fx,A.y,A.hM,A.iF,A.lC,A.d4,A.cd,A.eb,A.nY,A.d6,A.hc,A.hb,A.je,A.hO,A.ht,A.jL,A.kx,A.kh,A.eT,A.kt,A.q_,A.kC,A.kz,A.fH,A.kU,A.lm,A.iW,A.lA,A.i7,A.i9,A.ip,A.dx,A.mv,A.cg,A.n1,A.na,A.o_,A.fO,A.jO,A.jC,A.jA,A.nq,A.b,A.kT,A.hQ,A.la,A.ec,A.iC,A.mM,A.ep,A.ng,A.dE,A.hY,A.lx,A.lw,A.kI,A.e3,A.e5,A.e2,A.e4,A.hB,A.ir,A.fJ,A.jg,A.f7,A.lI,A.nc,A.aT,A.hT,A.i5,A.lJ,A.hU,A.lg,A.d3,A.dl,A.nd,A.d2,A.eB,A.lG,A.le,A.nr,A.lL,A.c8,A.c0,A.m6,A.m4,A.m5,A.cc,A.i6,A.b0,A.bl,A.b3,A.bk,A.cO,A.cY,A.aM,A.lR,A.c7,A.lH,A.f6,A.lQ,A.eg,A.lV,A.fm,A.fe,A.nV,A.im,A.bu,A.m8,A.kP,A.dd,A.kQ,A.mk,A.mj,A.mJ,A.mI,A.mK,A.n9,A.iL,A.n7,A.er,A.l0,A.nZ,A.dK,A.hG,A.m0,A.m2,A.ne,A.ce,A.nf,A.hZ,A.nw,A.dJ,A.dI,A.fF,A.nB,A.kq,A.kS,A.l4,A.fl,A.mS,A.aA,A.bX,A.kn,A.jb,A.nU,A.cF,A.bD,A.bP,A.bn,A.jd,A.hp,A.ja,A.fZ,A.ev,A.jD,A.fY])
q(J.ib,[J.ig,J.f9,J.fa,J.ei,J.ej,J.dt,J.du])
q(J.fa,[J.cT,J.u,A.cV,A.fi])
q(J.cT,[J.iB,J.dH,J.cs])
r(J.id,A.fv)
r(J.m7,J.u)
q(J.dt,[J.f8,J.ih])
q(A.n,[A.d1,A.G,A.cu,A.Q,A.c3,A.dQ,A.ck])
q(A.d1,[A.df,A.he])
r(A.fN,A.df)
r(A.fL,A.he)
q(A.cN,[A.hD,A.hC,A.iX,A.pq,A.ps,A.o1,A.o0,A.oI,A.lu,A.og,A.oi,A.mr,A.ok,A.pQ,A.pR,A.pk,A.mU,A.mD,A.mu,A.mx,A.nE,A.nG,A.lj,A.lh,A.li,A.mF,A.mG,A.n0,A.n_,A.mZ,A.mY,A.n2,A.p_,A.p0,A.ni,A.pW,A.pU,A.lr,A.mt,A.pi,A.nW,A.nX,A.kE,A.kG,A.kF,A.kH,A.ky,A.ki,A.kj,A.kv,A.kw,A.ku,A.lB,A.n6,A.ld,A.ly,A.lz,A.kJ,A.kK,A.kL,A.kM,A.kN,A.kO,A.pg,A.kW,A.lf,A.lK,A.p1,A.oF,A.oE,A.lX,A.lZ,A.ns,A.lO,A.lM,A.pf,A.lS,A.lU,A.pe,A.l9,A.mn,A.mf,A.l1,A.l2,A.p5,A.nC,A.nD,A.kr,A.l5,A.l6,A.l7,A.l8,A.lc,A.lF,A.ma,A.mb,A.mc,A.nn,A.no,A.np,A.nm,A.nl,A.nu,A.kp,A.nT,A.nS,A.nQ,A.pn,A.nO,A.kk,A.kl,A.km,A.oo,A.pv,A.pK,A.pL,A.pN,A.pO,A.pB,A.pC,A.pD,A.pE,A.pF,A.pG,A.p3,A.p4,A.p8])
q(A.hD,[A.o4,A.kZ,A.mg,A.pr,A.oJ,A.ph,A.lv,A.oh,A.mp,A.ms,A.on,A.nL,A.nK,A.my,A.nF,A.lk,A.pV,A.pT,A.kA,A.kB,A.lY,A.m_,A.lP,A.mm,A.m3,A.nx,A.ny,A.md,A.me,A.ko,A.nR,A.nP,A.px,A.pJ,A.pM])
r(A.bZ,A.fL)
q(A.a9,[A.dv,A.cB,A.ij,A.j0,A.iN,A.jr,A.fc,A.hr,A.bY,A.fD,A.j_,A.es,A.hF])
r(A.eu,A.M)
r(A.dg,A.eu)
q(A.G,[A.a5,A.a1,A.aJ,A.T,A.dO,A.fS])
q(A.a5,[A.fA,A.N,A.fu,A.jx])
r(A.dj,A.cu)
q(A.bS,[A.ex,A.ey,A.ez])
r(A.b6,A.ex)
r(A.a7,A.ey)
r(A.h_,A.ez)
r(A.eC,A.ek)
r(A.d_,A.eC)
r(A.eX,A.d_)
q(A.e9,[A.a6,A.f2])
q(A.cy,[A.eY,A.h0,A.h8])
r(A.c6,A.eY)
q(A.hC,[A.mN,A.o2,A.o3,A.ov,A.ls,A.o7,A.oc,A.ob,A.o9,A.o8,A.of,A.oe,A.od,A.os,A.p9,A.oA,A.oz,A.oZ,A.oS,A.oT,A.oY,A.oN,A.oP,A.oO,A.oX,A.oL,A.oM,A.oU,A.oV,A.oW,A.oR,A.oQ,A.pj,A.n5,A.lW,A.lN,A.lT,A.op,A.oq,A.pw,A.pH,A.pI,A.py,A.pz,A.pA,A.pa])
r(A.fk,A.cB)
q(A.iX,[A.iU,A.e6])
q(A.Z,[A.bM,A.fP,A.jw])
r(A.fb,A.bM)
r(A.el,A.cV)
q(A.fi,[A.is,A.aK])
q(A.aK,[A.fU,A.fW])
r(A.fV,A.fU)
r(A.fg,A.fV)
r(A.fX,A.fW)
r(A.fh,A.fX)
q(A.fg,[A.ff,A.it])
q(A.fh,[A.iu,A.iv,A.iw,A.ix,A.iy,A.dy,A.fj])
r(A.h2,A.jr)
r(A.fI,A.jl)
r(A.jH,A.hd)
r(A.fR,A.fP)
r(A.bR,A.h0)
r(A.fC,A.h8)
q(A.dh,[A.hv,A.hR,A.ik])
q(A.hH,[A.kR,A.mi,A.mh,A.nM])
r(A.il,A.fc)
r(A.ol,A.om)
r(A.j5,A.hR)
q(A.bY,[A.en,A.i8])
r(A.jm,A.h9)
q(A.jq,[A.dB,A.dr,A.hq,A.cD,A.ea,A.hx,A.hE,A.hN,A.dD,A.ee,A.c_,A.ft,A.cq,A.eo,A.ef,A.fK,A.fM,A.i0,A.f3,A.i2,A.i3,A.dp,A.f4,A.dF,A.cZ,A.e8,A.eA,A.hw,A.de,A.hI,A.hK,A.aN,A.hu,A.bL,A.dn,A.dk,A.cR,A.f1,A.cQ,A.cS,A.fr,A.dC,A.bm,A.b4,A.ia,A.dL,A.bO,A.eq,A.fw,A.bh,A.bB,A.bC,A.d0,A.ci])
q(A.cx,[A.bi,A.bA,A.cb,A.iA,A.cr])
r(A.n4,A.o_)
r(A.n3,A.n4)
q(A.fl,[A.lb,A.lE,A.m9,A.nk,A.nt])
q(A.nU,[A.jc,A.jB,A.bo,A.j9,A.j8,A.fE])
s(A.eu,A.ch)
s(A.he,A.M)
s(A.fU,A.M)
s(A.fV,A.ai)
s(A.fW,A.M)
s(A.fX,A.ai)
s(A.eC,A.h7)
s(A.h8,A.jS)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",w:"double",aS:"num",m:"String",r:"bool",al:"Null",D:"List",E:"Object",X:"Map",a_:"JSObject"},mangledNames:{},types:["~()","~(a_)","al(a_)","cp()","r(m)","r(w)","@(@)","r(am)","~(r)","~(~())","al()","~(@)","r(bn)","r(S)","r(E?)","r(b0)","r(@)","j(bu,bu)","r()","j()","@(m)","al(@)","~(E?,E?)","@()","r(j)","m?(m)","r(aM)","r(bu)","m(E?)","0&()","r(aA)","~(m,w)","j(@,@)","cz?()","cr(j,j,m?)","fs(bi)","cp(m{fallback:m?})","al(~())","@(@,m)","D<cz>()","e7()","w()","aL(bz)","j(au<bj>,au<bj>)","bz(au<bj>)","j(au<bg>,au<bg>)","bz(au<bg>)","dz(w,w,w,w)","A(A)","X<m,m>(X<m,m>,m)","~(dG)","dG()","0&(m,j?)","bv<al>(R<m,m>)","al(@,cf)","r(D<m>)","j(m,m)","j(bl,bl)","r(a_)","a_()","~(j,@)","r(bL)","~(E,cf)","ca(cb)","e3(E?)","e2(E?)","e4(E?)","cb(j,j,m?)","bi(j,j,m?)","e5(E?)","j(j,+(bi,bN))","r(cY)","r(d3)","r(d2)","b(b)","j(+(w,w,w,w),+(w,w,w,w))","~(j)","r(bl)","j(j,aM)","r(c0)","r(c8)","cp(bA?)","j(cc,cc)","r(c7)","R<m,m>(m,@)","r(bm)","r(b4)","bA(j,j,m?)","j(j)","R<j,@>(j,dJ)","R<j,@>(j,dI)","r(R<@,@>)","R<m,m>(R<@,@>)","r(fB?)","m(bX)","j(bX,bX)","D<+(w,w,w,w)>()","j(bn,bn)","j(bP,bP)","X<m,@>(bn)","r(bC)","r(bB)","r(bh)","j(j,+(bA,cH))","r(ep)","~(bm,b4)","m(am)","j(a2,a2)","al(E,cf)","~(@,@)","c8(E?)","c0(E?)","c7(E?)","~(aS)","~(m)","E?(E?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.b6&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.a7&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.h_&&A.zD(a,b.a)}}
A.xe(v.typeUniverse,JSON.parse('{"cs":"cT","iB":"cT","dH":"cT","zZ":"cV","u":{"D":["1"],"G":["1"],"a_":[],"n":["1"]},"ig":{"r":[],"a3":[]},"f9":{"al":[],"a3":[]},"fa":{"a_":[]},"cT":{"a_":[]},"id":{"fv":[]},"m7":{"u":["1"],"D":["1"],"G":["1"],"a_":[],"n":["1"]},"dc":{"ah":["1"]},"dt":{"w":[],"aS":[],"aI":["aS"]},"f8":{"w":[],"j":[],"aS":[],"aI":["aS"],"a3":[]},"ih":{"w":[],"aS":[],"aI":["aS"],"a3":[]},"du":{"m":[],"aI":["m"],"mH":[],"a3":[]},"d1":{"n":["2"]},"eV":{"ah":["2"]},"df":{"d1":["1","2"],"n":["2"],"n.E":"2"},"fN":{"df":["1","2"],"d1":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"fL":{"M":["2"],"D":["2"],"d1":["1","2"],"G":["2"],"n":["2"]},"bZ":{"fL":["1","2"],"M":["2"],"D":["2"],"d1":["1","2"],"G":["2"],"n":["2"],"n.E":"2","M.E":"2"},"dv":{"a9":[]},"dg":{"M":["j"],"ch":["j"],"D":["j"],"G":["j"],"n":["j"],"M.E":"j","ch.E":"j"},"G":{"n":["1"]},"a5":{"G":["1"],"n":["1"]},"fA":{"a5":["1"],"G":["1"],"n":["1"],"a5.E":"1","n.E":"1"},"by":{"ah":["1"]},"cu":{"n":["2"],"n.E":"2"},"dj":{"cu":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"dw":{"ah":["2"]},"N":{"a5":["2"],"G":["2"],"n":["2"],"a5.E":"2","n.E":"2"},"Q":{"n":["1"],"n.E":"1"},"I":{"ah":["1"]},"c3":{"n":["1"],"n.E":"1"},"fG":{"ah":["1"]},"eu":{"M":["1"],"ch":["1"],"D":["1"],"G":["1"],"n":["1"]},"fu":{"a5":["1"],"G":["1"],"n":["1"],"a5.E":"1","n.E":"1"},"b6":{"ex":[],"bS":[]},"a7":{"ey":[],"bS":[]},"h_":{"ez":[],"bS":[]},"eX":{"d_":["1","2"],"eC":["1","2"],"ek":["1","2"],"h7":["1","2"],"X":["1","2"]},"e9":{"X":["1","2"]},"a6":{"e9":["1","2"],"X":["1","2"]},"dQ":{"n":["1"],"n.E":"1"},"dR":{"ah":["1"]},"f2":{"e9":["1","2"],"X":["1","2"]},"eY":{"cy":["1"],"cX":["1"],"G":["1"],"n":["1"]},"c6":{"eY":["1"],"cy":["1"],"cX":["1"],"G":["1"],"n":["1"]},"fk":{"cB":[],"a9":[]},"ij":{"a9":[]},"j0":{"a9":[]},"h1":{"cf":[]},"cN":{"dm":[]},"hC":{"dm":[]},"hD":{"dm":[]},"iX":{"dm":[]},"iU":{"dm":[]},"e6":{"dm":[]},"iN":{"a9":[]},"bM":{"Z":["1","2"],"q4":["1","2"],"X":["1","2"],"Z.K":"1","Z.V":"2"},"a1":{"G":["1"],"n":["1"],"n.E":"1"},"cU":{"ah":["1"]},"aJ":{"G":["1"],"n":["1"],"n.E":"1"},"ap":{"ah":["1"]},"T":{"G":["R<1,2>"],"n":["R<1,2>"],"n.E":"R<1,2>"},"fd":{"ah":["R<1,2>"]},"fb":{"bM":["1","2"],"Z":["1","2"],"q4":["1","2"],"X":["1","2"],"Z.K":"1","Z.V":"2"},"ex":{"bS":[]},"ey":{"bS":[]},"ez":{"bS":[]},"ii":{"mH":[]},"el":{"cV":[],"a_":[],"a3":[]},"dy":{"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"cV":{"a_":[],"a3":[]},"fi":{"a_":[]},"is":{"a_":[],"a3":[]},"aK":{"bx":["1"],"a_":[]},"fg":{"M":["w"],"aK":["w"],"D":["w"],"bx":["w"],"G":["w"],"a_":[],"n":["w"],"ai":["w"]},"fh":{"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"]},"ff":{"ll":[],"M":["w"],"aK":["w"],"D":["w"],"bx":["w"],"G":["w"],"a_":[],"n":["w"],"ai":["w"],"a3":[],"M.E":"w","ai.E":"w"},"it":{"M":["w"],"aK":["w"],"D":["w"],"bx":["w"],"G":["w"],"a_":[],"n":["w"],"ai":["w"],"a3":[],"M.E":"w","ai.E":"w"},"iu":{"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"iv":{"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"iw":{"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"ix":{"qh":[],"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"iy":{"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"fj":{"fB":[],"M":["j"],"aK":["j"],"D":["j"],"bx":["j"],"G":["j"],"a_":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"jr":{"a9":[]},"h2":{"cB":[],"a9":[]},"bF":{"ah":["1"]},"ck":{"n":["1"],"n.E":"1"},"aH":{"a9":[]},"fI":{"jl":["1"]},"ak":{"bv":["1"]},"hd":{"t8":[]},"jH":{"hd":[],"t8":[]},"fP":{"Z":["1","2"],"X":["1","2"]},"fR":{"fP":["1","2"],"Z":["1","2"],"X":["1","2"],"Z.K":"1","Z.V":"2"},"dO":{"G":["1"],"n":["1"],"n.E":"1"},"fQ":{"ah":["1"]},"bR":{"cy":["1"],"rE":["1"],"cX":["1"],"G":["1"],"n":["1"]},"dS":{"ah":["1"]},"M":{"D":["1"],"G":["1"],"n":["1"]},"Z":{"X":["1","2"]},"fS":{"G":["2"],"n":["2"],"n.E":"2"},"fT":{"ah":["2"]},"ek":{"X":["1","2"]},"d_":{"eC":["1","2"],"ek":["1","2"],"h7":["1","2"],"X":["1","2"]},"cy":{"cX":["1"],"G":["1"],"n":["1"]},"h0":{"cy":["1"],"cX":["1"],"G":["1"],"n":["1"]},"fC":{"cy":["1"],"jS":["1"],"cX":["1"],"G":["1"],"n":["1"]},"jw":{"Z":["m","@"],"X":["m","@"],"Z.K":"m","Z.V":"@"},"jx":{"a5":["m"],"G":["m"],"n":["m"],"a5.E":"m","n.E":"m"},"hv":{"dh":["D<j>","m"]},"hR":{"dh":["m","D<j>"]},"fc":{"a9":[]},"il":{"a9":[]},"ik":{"dh":["E?","m"]},"j5":{"dh":["m","D<j>"]},"di":{"aI":["di"]},"w":{"aS":[],"aI":["aS"]},"cP":{"aI":["cP"]},"j":{"aS":[],"aI":["aS"]},"D":{"G":["1"],"n":["1"]},"aS":{"aI":["aS"]},"cX":{"G":["1"],"n":["1"]},"m":{"aI":["m"],"mH":[]},"jq":{"H":[]},"hr":{"a9":[]},"cB":{"a9":[]},"bY":{"a9":[]},"en":{"a9":[]},"i8":{"a9":[]},"fD":{"a9":[]},"j_":{"a9":[]},"es":{"a9":[]},"hF":{"a9":[]},"iz":{"a9":[]},"fy":{"a9":[]},"jQ":{"cf":[]},"aZ":{"wy":[]},"h9":{"j2":[]},"jK":{"j2":[]},"jm":{"j2":[]},"jv":{"qb":[]},"ew":{"qb":[]},"dB":{"H":[]},"bi":{"cx":[]},"bA":{"cx":[]},"cb":{"cx":[]},"cr":{"cx":[]},"iA":{"cx":[]},"dr":{"H":[]},"hq":{"H":[]},"cD":{"H":[]},"ea":{"H":[]},"hx":{"H":[]},"hE":{"H":[]},"hN":{"H":[]},"dD":{"H":[]},"ee":{"H":[]},"c_":{"H":[]},"ft":{"H":[]},"cq":{"H":[]},"eo":{"H":[]},"fq":{"wp":[]},"dP":{"bz":[]},"jE":{"wo":[]},"js":{"vH":[]},"bj":{"aI":["bj"]},"bg":{"aI":["bg"]},"ef":{"H":[]},"fK":{"H":[]},"eU":{"ad":[]},"jj":{"a2":[]},"hy":{"ad":[]},"jk":{"a2":[]},"hL":{"ad":[]},"jn":{"a2":[]},"fM":{"H":[]},"eZ":{"ad":[]},"jo":{"a2":[]},"hP":{"ad":[]},"jp":{"a2":[]},"i4":{"ad":[]},"ju":{"a2":[]},"hz":{"wn":[]},"fn":{"ad":[]},"jF":{"a2":[]},"iH":{"ad":[]},"jG":{"a2":[]},"iP":{"ad":[]},"jI":{"a2":[]},"iQ":{"ad":[]},"jJ":{"a2":[]},"iT":{"ad":[]},"jN":{"a2":[]},"iS":{"ad":[]},"jM":{"a2":[]},"j7":{"ad":[]},"jT":{"a2":[]},"jf":{"ad":[]},"jU":{"a2":[]},"i0":{"H":[]},"f3":{"H":[]},"i2":{"H":[]},"i3":{"H":[]},"dp":{"H":[]},"f4":{"H":[]},"dF":{"H":[]},"cZ":{"H":[]},"e8":{"H":[]},"hM":{"vq":[]},"eA":{"H":[]},"aN":{"H":[]},"hw":{"H":[]},"de":{"H":[]},"hI":{"H":[]},"hK":{"H":[]},"d6":{"cp":[]},"je":{"vK":[]},"hu":{"H":[]},"bL":{"H":[]},"dn":{"H":[]},"dk":{"H":[]},"cR":{"H":[]},"cQ":{"H":[]},"f1":{"H":[]},"cS":{"H":[]},"fr":{"H":[]},"dC":{"H":[]},"bm":{"H":[]},"b4":{"H":[]},"ia":{"H":[]},"dL":{"H":[]},"bO":{"H":[]},"eq":{"H":[]},"fw":{"H":[]},"bh":{"H":[]},"bB":{"H":[]},"bC":{"H":[]},"d0":{"H":[]},"ci":{"H":[]},"fZ":{"qd":[]},"ev":{"qd":[]},"vR":{"D":["j"],"G":["j"],"n":["j"]},"fB":{"D":["j"],"G":["j"],"n":["j"]},"wD":{"D":["j"],"G":["j"],"n":["j"]},"vP":{"D":["j"],"G":["j"],"n":["j"]},"qh":{"D":["j"],"G":["j"],"n":["j"]},"vQ":{"D":["j"],"G":["j"],"n":["j"]},"wC":{"D":["j"],"G":["j"],"n":["j"]},"ll":{"D":["w"],"G":["w"],"n":["w"]},"vG":{"D":["w"],"G":["w"],"n":["w"]}}'))
A.xd(v.typeUniverse,JSON.parse('{"eu":1,"he":2,"aK":1,"h0":1,"h8":1,"hH":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",t:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Keep the neutral exposure value (1.0) bit-identical to the source\n  // while allowing the authored visual calibration to brighten or dim the\n  // final composite. World lighting is intentionally bounded earlier; this\n  // is the presentation control, not a second lighting path.\n  vec3 color=clamp(source.rgb*max(uExposure,0.),0.,1.);\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",p:"MaterialDefinition uv scale must not be zero",n:"MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",i:"MaterialDefinition.emissiveStrength must be >= 0: 0",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aw
return{lC:s("eT"),D:s("bX"),v:s("aH"),f5:s("ht"),gE:s("e2"),fS:s("e3"),d2:s("e4"),lJ:s("e5"),dP:s("bg"),kp:s("hA"),gS:s("dg"),bP:s("aI<@>"),e3:s("eW"),p1:s("a6<m,m>"),I:s("a6<m,j>"),Q:s("c6<m>"),ml:s("di"),lD:s("bh"),jS:s("cP"),gt:s("G<@>"),no:s("bL"),R:s("bu"),W:s("a9"),hZ:s("aT"),pk:s("ll"),gY:s("dm"),mj:s("bv<al>"),_:s("cp"),bU:s("cS"),mm:s("c7"),lv:s("i7<E>"),hL:s("cr"),ob:s("c8"),gB:s("c0"),dp:s("n<eW>"),bq:s("n<m>"),id:s("n<w>"),e7:s("n<@>"),fm:s("n<j>"),od:s("u<bX>"),ag:s("u<hQ>"),hS:s("u<cO>"),r:s("u<bu>"),bp:s("u<hU>"),ph:s("u<aT>"),iw:s("u<bv<~>>"),mc:s("u<hY>"),l2:s("u<cp>"),aW:s("u<bw>"),iG:s("u<f6>"),dL:s("u<eg>"),oX:s("u<zY<E>>"),og:s("u<ds>"),jj:s("u<cr>"),Y:s("u<a_>"),b1:s("u<im>"),cs:s("u<b3>"),ic:s("u<X<m,E>>"),hq:s("u<X<m,m>>"),bV:s("u<X<m,@>>"),kS:s("u<ip>"),mn:s("u<dx>"),dg:s("u<bi>"),hJ:s("u<am>"),jc:s("u<bk>"),de:s("u<dz>"),bz:s("u<cc>"),dQ:s("u<iD>"),aN:s("u<bl>"),bM:s("u<+(m,D<bl>)>"),fR:s("u<+(j,m)>"),a3:s("u<+(w,w,w,w)>"),o5:s("u<ad>"),u:s("u<a2>"),oZ:s("u<fq>"),C:s("u<S>"),c8:s("u<aL>"),ix:s("u<bz>"),kl:s("u<aM>"),e_:s("u<ce>"),b2:s("u<er>"),ao:s("u<au<bg>>"),mX:s("u<au<bj>>"),bH:s("u<cz>"),jn:s("u<cY>"),s:s("u<m>"),aA:s("u<iW>"),k:s("u<A>"),h:s("u<b>"),cF:s("u<fF>"),bl:s("u<cF>"),ah:s("u<bP>"),E:s("u<b0>"),jX:s("u<d3>"),a9:s("u<d2>"),jU:s("u<jD>"),dz:s("u<d4<ca>>"),jk:s("u<d4<bN>>"),n_:s("u<d4<aL>>"),mQ:s("u<d4<cH>>"),eP:s("u<eB>"),df:s("u<r>"),n:s("u<w>"),dG:s("u<@>"),t:s("u<j>"),kC:s("u<a_?>"),dM:s("u<E?>"),g2:s("u<aS>"),w:s("f9"),m:s("a_"),d4:s("a_()"),dY:s("cs"),dX:s("bx<@>"),bY:s("D<bu>"),b:s("D<bw>"),l_:s("D<X<m,m>>"),O:s("D<am>"),b3:s("D<cc>"),fB:s("D<bl>"),jz:s("D<+(j,m)>"),ge:s("D<+(w,w,w,w)>"),io:s("D<ce>"),a:s("D<m>"),iD:s("D<fF>"),ee:s("D<cF>"),eU:s("D<bP>"),cu:s("D<fO>"),j:s("D<@>"),L:s("D<j>"),ia:s("D<E?>"),mK:s("fe"),gc:s("R<m,m>"),d7:s("R<@,@>"),iI:s("R<j,@>"),f7:s("X<m,cp>"),iE:s("X<m,am>"),G:s("X<m,m>"),oQ:s("X<m,r>"),P:s("X<m,@>"),f:s("X<@,@>"),d8:s("X<j,dI>"),c_:s("X<j,dJ>"),gz:s("X<m,D<+(w,w,w,w)>>"),kz:s("X<bC,D<bP>>"),iu:s("X<j,X<m,m>>"),mz:s("N<A,A>"),dD:s("N<m,m?>"),fP:s("cb"),l0:s("bi"),eb:s("el"),mR:s("dy"),c:s("al"),K:s("E"),nL:s("bj"),A:s("am"),f0:s("cc"),T:s("bl"),ku:s("fm"),lZ:s("A_"),aK:s("+()"),o7:s("+(bi,bN)"),p3:s("+(bA,cH)"),aL:s("+(w,w)"),cW:s("+(w,w,w,w)"),ks:s("a2"),mo:s("cd<cr,aL>"),kk:s("cd<cb,ca>"),ll:s("cd<bi,bN>"),ox:s("cd<bA,cH>"),n4:s("S"),p9:s("aL"),os:s("bz"),J:s("aM"),k8:s("ce"),U:s("cX<m>"),nO:s("cX<j>"),b9:s("aA"),m9:s("b4"),gC:s("bm"),ad:s("er"),d:s("au<bg>"),p:s("au<bj>"),l:s("cf"),fO:s("cY"),dB:s("aN"),N:s("m"),lu:s("bA"),aJ:s("a3"),do:s("cB"),cx:s("dH"),oP:s("d_<m,m>"),mL:s("j1"),jJ:s("j2"),fQ:s("A"),bf:s("b"),pc:s("A(A)"),g:s("bn"),nq:s("bB"),kM:s("bC"),bR:s("dI"),ey:s("dJ"),mv:s("cF"),kX:s("bP"),cq:s("bo"),bn:s("Q<bh>"),ns:s("Q<bL>"),hr:s("Q<b4>"),am:s("Q<bm>"),nn:s("Q<m>"),cB:s("Q<bB>"),na:s("Q<bC>"),pl:s("I<aA>"),lS:s("c3<m>"),Z:s("b0"),fH:s("fO"),e:s("ak<@>"),mp:s("fR<E?,E?>"),j8:s("jA"),fg:s("d3"),at:s("d2"),ln:s("jB"),fw:s("jC"),bS:s("fY"),h6:s("jL"),hX:s("jO"),fJ:s("ck<bz>"),V:s("hb"),fL:s("hc"),y:s("r"),al:s("r()"),hg:s("r(bh)"),gl:s("r(bL)"),iW:s("r(E)"),ib:s("r(aA)"),aZ:s("r(b4)"),gw:s("r(bm)"),dA:s("r(m)"),bQ:s("r(bB)"),nw:s("r(bC)"),i:s("w"),z:s("@"),mY:s("@()"),mq:s("@(E)"),ng:s("@(E,cf)"),S:s("j"),gK:s("bv<al>?"),mU:s("a_?"),lH:s("D<@>?"),X:s("E?"),x:s("m?"),ej:s("m?(m)"),nh:s("fB?"),F:s("dM<@,@>?"),q:s("jy?"),fU:s("r?"),hK:s("r(ep)?"),dC:s("w?"),aV:s("j?"),jh:s("aS?"),jE:s("~()?"),as:s("~(bm,b4)?"),ov:s("~(m)?"),hm:s("~(m,w)?"),B:s("~(r)?"),bZ:s("~(j)?"),o:s("aS"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ea=J.ib.prototype
B.a=J.u.prototype
B.c=J.f8.prototype
B.d=J.dt.prototype
B.b=J.du.prototype
B.eb=J.cs.prototype
B.ec=J.fa.prototype
B.o=A.ff.prototype
B.bD=A.fj.prototype
B.bE=J.iB.prototype
B.aQ=J.dH.prototype
B.il=new A.hq(0,"opaque")
B.cn=new A.hu(4,"ambience")
B.V=new A.fr(1,"next")
B.co=new A.dd(B.V,!1,!0,!1,null)
B.a1=new A.hw(0,"add")
B.cp=new A.de(0,"zero")
B.O=new A.de(1,"one")
B.P=new A.hx(0,"alpha")
B.aV=new A.eT()
B.am=new A.kP()
B.im=new A.kR()
B.cs=new A.hv()
B.aW=new A.kV()
B.aX=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cy=function() {
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
B.cD=function(getTagFallback) {
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
B.cz=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cC=function(hooks) {
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
B.cB=function(hooks) {
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
B.cA=function(hooks) {
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
B.aY=function(hooks) { return hooks; }

B.r=new A.ik()
B.io=new A.mk()
B.cE=new A.E()
B.cF=new A.iz()
B.ip=new A.mJ()
B.cG=new A.mK()
B.cH=new A.ce()
B.X=new A.bO(1,"gradeLUT")
B.cI=new A.ce()
B.cJ=new A.ne()
B.cK=new A.ng()
B.m=new A.nj()
B.aZ=new A.j5()
B.hH=new A.cD(0,"position")
B.hN=new A.cE(B.hH,0,3)
B.hI=new A.cD(1,"normal")
B.hO=new A.cE(B.hI,3,3)
B.hJ=new A.cD(2,"color")
B.hP=new A.cE(B.hJ,6,4)
B.hK=new A.cD(4,"alpha")
B.hQ=new A.cE(B.hK,10,1)
B.hL=new A.cD(5,"uv0")
B.hR=new A.cE(B.hL,11,2)
B.hM=new A.cD(6,"legacyMaterialEffect")
B.hS=new A.cE(B.hM,13,1)
B.av=s([B.hN,B.hO,B.hP,B.hQ,B.hR,B.hS],A.aw("u<cE>"))
B.Q=new A.nN()
B.b_=new A.jv()
B.v=new A.jH()
B.a2=new A.jQ()
B.R=new A.e8(0,"colorOnly")
B.b0=new A.e8(1,"colorAndDepth")
B.an=new A.e8(2,"depthOnly")
B.a3=new A.hI(1,"back")
B.a4=new A.hK(0,"less")
B.a5=new A.bh(0,"open")
B.b1=new A.bh(1,"chain")
B.b2=new A.bh(2,"throughDoor")
B.b3=new A.bh(3,"letterbox")
B.S=new A.bh(4,"ignore")
B.H=new A.ea(0,"opaque")
B.cL=new A.ea(1,"masked")
B.ao=new A.ea(2,"blended")
B.cM=new A.eb(!1,B.a4,!1,!0,B.O,B.O,B.a1,!1,B.a3,!0,!1,!0,!0,!0,!0,!1)
B.cN=new A.eb(!0,B.a4,!1,!0,B.O,B.O,B.a1,!0,B.a3,!0,!1,!0,!0,!0,!0,!1)
B.cq=new A.de(2,"srcAlpha")
B.cr=new A.de(3,"oneMinusSrcAlpha")
B.cO=new A.eb(!0,B.a4,!1,!0,B.cq,B.cr,B.a1,!0,B.a3,!0,!1,!0,!0,!0,!0,!1)
B.cP=new A.cP(0)
B.cQ=new A.cP(24e5)
B.b4=new A.bL(0,"compliance")
B.cR=new A.ec(B.b4)
B.b5=new A.bL(1,"rupture")
B.cS=new A.ec(B.b5)
B.b6=new A.bL(2,"synchronisation")
B.cT=new A.ec(B.b6)
B.b7=new A.dk(0,"front")
B.cU=new A.dk(1,"rearService")
B.cV=new A.dk(2,"sideBoundary")
B.cW=new A.dk(3,"roofline")
B.i=new A.cQ(0,"north")
B.z=new A.cQ(1,"east")
B.j=new A.cQ(2,"south")
B.I=new A.cQ(3,"west")
B.a6=new A.f1(0,"ground")
B.a7=new A.f1(1,"first")
B.cX=new A.cR(0,"mantle")
B.cY=new A.cR(1,"portal")
B.d_=new A.cR(3,"inventory")
B.d0=new A.cR(4,"none")
B.d1=new A.dl(B.d0,null)
B.cZ=new A.cR(2,"window")
B.d2=new A.dl(B.cZ,"the shutter")
B.d3=new A.J("saved mantle history is malformed",null,null)
B.d4=new A.J("rupture elapsed time is malformed",null,null)
B.d5=new A.J("presentation keys must be strings",null,null)
B.d6=new A.J("inventory inspections must be an object",null,null)
B.b8=new A.J("saved mantle state is malformed",null,null)
B.d7=new A.J("inactive rupture has elapsed time",null,null)
B.d8=new A.J("listener room is empty",null,null)
B.d9=new A.J("saved difficulty state is malformed",null,null)
B.da=new A.J("saved house drift state is malformed",null,null)
B.db=new A.J("saved sleep record is malformed",null,null)
B.dc=new A.J("saved day-loop sleepHistory must be a list",null,null)
B.dd=new A.J("audio event position is not finite",null,null)
B.de=new A.J("event sequence must be non-negative",null,null)
B.df=new A.J("inventory inspection counts are invalid",null,null)
B.dg=new A.J("modelScale must be positive and finite",null,null)
B.dh=new A.J("listener position is not finite",null,null)
B.di=new A.J("saved window state is malformed",null,null)
B.dj=new A.J("save run and meta must be objects",null,null)
B.dk=new A.J("saved house state is malformed",null,null)
B.dl=new A.J("saved sleep record must be an object",null,null)
B.dm=new A.J("sound cue must be a non-empty string",null,null)
B.dn=new A.J("saved session run is malformed",null,null)
B.dp=new A.J("save map keys must be strings",null,null)
B.dq=new A.J("transform.scale must be positive",null,null)
B.dr=new A.J("saved day-loop state is malformed",null,null)
B.ds=new A.J("rupture extinguished mantle is unknown",null,null)
B.b9=new A.J("saved portal state is malformed",null,null)
B.dt=new A.J("acoustic portal profile is not finite",null,null)
B.du=new A.J("saved house state does not match this house",null,null)
B.dv=new A.J("presentation snapshot contains a non-finite number",null,null)
B.dw=new A.J("save contains a non-finite number",null,null)
B.dx=new A.J("text.json root must be an object",null,null)
B.dy=new A.J("event kind is empty",null,null)
B.dz=new A.J("saved session clock is malformed",null,null)
B.dA=new A.J("rupture mantle IDs are malformed",null,null)
B.dB=new A.J("saved sleep record has an unknown enum",null,null)
B.dC=new A.J("audio cue variants are empty",null,null)
B.dD=new A.J("save root must be an object",null,null)
B.dE=new A.J("audio event identity is empty",null,null)
B.dF=new A.J("render capabilities contain invalid limits",null,null)
B.dG=new A.J("saved house overrides are malformed",null,null)
B.J=new A.ct(0,0,0)
B.bl=new A.ct(1,1,1)
B.eF=s([],t.dQ)
B.at=s([],t.bH)
B.dH=new A.hX(B.J,B.J,0,1,B.bl,0,null,B.eF,B.at)
B.dI=new A.ee(0,"idle")
B.ap=new A.ee(1,"active")
B.dJ=new A.ee(2,"ended")
B.ba=new A.ef(0,"outside")
B.dK=new A.ef(1,"intersects")
B.dL=new A.ef(2,"inside")
B.dM=new A.dn(0,"timeAdvanced")
B.dN=new A.dn(1,"dayEndReached")
B.dO=new A.dn(4,"slept")
B.dP=new A.dn(5,"complianceFloorTripped")
B.dQ=new A.f3(0,"vertex")
B.bb=new A.f3(1,"indices")
B.bc=new A.i0(0,"staticDraw")
B.f=new A.f4(0,"ready")
B.T=new A.f4(1,"lost")
B.dR=new A.dp(0,"color")
B.bd=new A.dp(1,"colorAndGlow")
B.dS=new A.dp(2,"colorDepthGlow")
B.aq=new A.dp(3,"depthOnly")
B.a8=new A.i2(1,"linear")
B.be=new A.i3(0,"clampToEdge")
B.dT=new A.i1(1,1,1,!1,B.a8,B.a8,B.be)
B.dU=new A.cq(0,"beforeShadow")
B.dV=new A.cq(2,"beforeDepth")
B.bf=new A.cq(3,"afterDepth")
B.bg=new A.cq(4,"beforeWorld")
B.B=new A.cq(6,"afterResolve")
B.dW=new A.cq(9,"beforePresent")
B.bh=new A.c_(0,"readBeforeWrite")
B.dX=new A.c_(1,"duplicateWriter")
B.dY=new A.c_(2,"sampledMultisampledAttachment")
B.dZ=new A.c_(4,"formatOrSizeMismatch")
B.e_=new A.c_(5,"unversionedReadWrite")
B.e0=new A.c_(6,"invalidHistoryRead")
B.e1=new A.c_(7,"dependencyCycle")
B.e2=new A.c_(8,"missingCapability")
B.a9=new A.cS(0,"player")
B.ar=new A.cS(1,"inserted")
B.bi=new A.cS(2,"warden")
B.bj=new A.dr(0,"wrongKind")
B.bk=new A.dr(1,"staleGeneration")
B.e3=new A.dr(2,"doubleRelease")
B.as=new A.dr(3,"releasedResource")
B.e6=new A.eg("kitchen-range","settle")
B.e7=new A.eg("cellar-drain","drip")
B.e8=new A.eg("bathroom-cistern","settle")
B.e9=new A.ia(1,"visitor")
B.ed=new A.mh(null)
B.ee=new A.mi(null)
B.ef=new A.ct(0.34,0.39,0.5)
B.eg=new A.ct(0.012,0.016,0.028)
B.eh=new A.ct(0.008,0.012,0.024)
B.bm=s([0,2,2,3],t.t)
B.ei=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.ct=new A.cO()
B.cu=new A.cO()
B.cv=new A.cO()
B.cw=new A.cO()
B.cx=new A.cO()
B.ej=s([B.ct,B.cu,B.cv,B.cw,B.cx],t.hS)
B.ek=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.w=s(["who","verb","object","place","time"],t.s)
B.el=s([2,5,9,12,16,19],t.t)
B.em=s(["uQuantizationBits","uDitherStrength"],t.s)
B.en=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.eo=s([B.a5,B.b1,B.b2,B.b3,B.S],A.aw("u<bh>"))
B.ep=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.a0=new A.bC(0,"full")
B.aR=new A.bC(1,"compressed")
B.aS=new A.bC(2,"off")
B.bn=s([B.a0,B.aR,B.aS],A.aw("u<bC>"))
B.eq=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.er=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.es=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.et=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.hm=new A.bm(0,"long")
B.cc=new A.bm(1,"short")
B.bo=s([B.hm,B.cc],A.aw("u<bm>"))
B.eu=s([2.1,4.2,6.3],t.n)
B.ev=s(["master","voice","effects","ambience","music"],t.s)
B.ew=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow"],t.s)
B.ex=s(["res/house/house.json","assets/house/house.json"],t.s)
B.A=new A.bO(0,"inactive")
B.aD=new A.bO(2,"affineWarp")
B.aE=new A.bO(3,"vertexSnap")
B.aF=new A.bO(4,"tapeGiveup")
B.aG=new A.bO(5,"portalFail")
B.L=new A.bO(6,"lightsOut")
B.bp=s([B.A,B.X,B.aD,B.aE,B.aF,B.aG,B.L],A.aw("u<bO>"))
B.ey=s([B.a9,B.ar,B.bi],A.aw("u<cS>"))
B.ez=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.C=s([],t.hS)
B.eH=s([],t.iG)
B.eG=s([],t.dL)
B.eA=s([],A.aw("u<c0>"))
B.eC=s([],t.cs)
B.au=s([],t.jc)
B.eE=s([],t.bz)
B.K=s([],t.aN)
B.eD=s([],t.u)
B.br=s([],t.e_)
B.eB=s([],t.b2)
B.n=s([],t.s)
B.bs=s([],t.cF)
B.bq=s([],t.E)
B.eI=s([],t.t)
B.eJ=s([],t.dG)
B.e5=new A.f7(15,"kitchen",-0.3,0)
B.e4=new A.f7(19,"spare-room",0,0.3)
B.D=s([B.e5,B.e4],A.aw("u<f7>"))
B.eK=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.hj=new A.b4(0,"bed")
B.hk=new A.b4(1,"chair")
B.hl=new A.b4(2,"floor")
B.bt=s([B.hj,B.hk,B.hl],A.aw("u<b4>"))
B.bu=s([B.i,B.z,B.j,B.I],A.aw("u<cQ>"))
B.aH=new A.aN(0,"depthTest")
B.aI=new A.aN(1,"depthFunc")
B.aJ=new A.aN(2,"depthWrite")
B.aK=new A.aN(3,"blendEnable")
B.aL=new A.aN(4,"blendFunc")
B.aM=new A.aN(5,"blendEquation")
B.aN=new A.aN(6,"cullEnable")
B.aO=new A.aN(7,"cullFace")
B.cf=new A.aN(8,"frontFace")
B.ho=new A.aN(9,"stencilEnable")
B.cd=new A.aN(10,"colorMask")
B.ce=new A.aN(11,"scissorEnable")
B.eL=s([B.aH,B.aI,B.aJ,B.aK,B.aL,B.aM,B.aN,B.aO,B.cf,B.ho,B.cd,B.ce],A.aw("u<aN>"))
B.it=new A.eq(0,"audio")
B.G=new A.fw(0,"level")
B.hf=new A.aA("master","Master",B.G,0,1)
B.hh=new A.aA("voice","Visitor voice",B.G,0,1)
B.ha=new A.aA("effects","Effects",B.G,0,1)
B.he=new A.aA("ambience","House ambience",B.G,0,1)
B.hc=new A.aA("music","Music",B.G,0,1)
B.iu=new A.eq(1,"display")
B.hd=new A.aA("brightness","Display brightness",B.G,0.6,1.4)
B.Y=new A.fw(1,"toggle")
B.hg=new A.aA("muted","Mute house audio",B.Y,null,null)
B.iv=new A.eq(2,"accessibility")
B.hb=new A.aA("mono","Mono-compatible mix",B.Y,null,null)
B.h9=new A.aA("high-contrast","High-contrast interface",B.Y,null,null)
B.h8=new A.aA("strong-highlights","Strong focus highlights",B.Y,null,null)
B.bv=s([B.hf,B.hh,B.ha,B.he,B.hc,B.hd,B.hg,B.hb,B.h9,B.h8],A.aw("u<aA>"))
B.eM=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.eN=s(["uBloomStrength"],t.s)
B.eO=s(["uExposure","uVignette","uGrain"],t.s)
B.eP=s(["uLutSize","uStrength"],t.s)
B.eQ=s([B.b4,B.b5,B.b6],A.aw("u<bL>"))
B.eR=s(["wall-plaster","grime"],t.s)
B.eS=s(["uTexelSize","uNear","uFar"],t.s)
B.bw=s(["uTexelStep"],t.s)
B.eT=s(["uninitialized"],t.s)
B.N=new A.bB(0,"waiting")
B.ag=new A.bB(1,"atDoor")
B.ah=new A.bB(2,"consulting")
B.ai=new A.bB(3,"resolved")
B.eU=s([B.N,B.ag,B.ah,B.ai],A.aw("u<bB>"))
B.fk={uAlbedo:0}
B.bx=new A.a6(B.fk,[0],t.I)
B.fa={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.by=new A.a6(B.fa,[2,3,4,5,6],t.I)
B.ft={uAlbedo:0,uShadowMap:1,uSsao:2}
B.eV=new A.a6(B.ft,[0,1,2],t.I)
B.fr={uSsaoRaw:0,uSceneDepth:1}
B.eW=new A.a6(B.fr,[0,1],t.I)
B.fo={uScene:0,uHistory:1}
B.eX=new A.a6(B.fo,[0,1],t.I)
B.f8={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.eY=new A.a6(B.f8,["dd0453e3d464ea7ffca0375cd8ffc107238536d5","83748ae844b6f2264fc2675afe25faa77743e028","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p1)
B.fh={aPosition:0,aUvMat:1}
B.bz=new A.a6(B.fh,[0,4],t.I)
B.fp={uScene:0,uLut:1}
B.eZ=new A.a6(B.fp,[0,1],t.I)
B.fq={uSource:0}
B.bA=new A.a6(B.fq,[0],t.I)
B.fb={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"range-settle":16,"cellar-drip":17,"cistern-settle":18,"step-above-0":19,"step-above-1":20,"step-above-2":21,"step-above-3":22}
B.f_=new A.a6(B.fb,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","transient","transient","transient","sub","sub","sub","sub"],t.p1)
B.fg={uSharp:0,uBlurred:1,uSceneDepth:2}
B.f0=new A.a6(B.fg,[0,1,2],t.I)
B.fl={uBloom:0}
B.f1=new A.a6(B.fl,[0],t.I)
B.fm={uSceneDepth:0}
B.f2=new A.a6(B.fm,[0],t.I)
B.fn={uScene:0}
B.f3=new A.a6(B.fn,[0],t.I)
B.U={}
B.bC=new A.a6(B.U,[],A.aw("a6<m,eT>"))
B.bB=new A.a6(B.U,[],t.p1)
B.t=new A.a6(B.U,[],t.I)
B.f4=new A.a6(B.U,[],A.aw("a6<@,@>"))
B.fi={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.f5=new A.a6(B.fi,[0,1,2,3],t.I)
B.fd={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.f6=new A.a6(B.fd,[0,1,2,3,4],t.I)
B.fs={uTex:0}
B.f7=new A.a6(B.fs,[0],t.I)
B.aw=new A.f2([B.X,1,B.aD,1.5,B.aE,1.5,B.aF,2,B.aG,2,B.L,4],A.aw("f2<bO,w>"))
B.fu=new A.iA(0,1,null)
B.fv=new A.iE(1,0,0,0,0,0,0,0,8,0,0,0,0,0,0,!1)
B.ax=new A.dB(0,"safe")
B.ay=new A.dB(1,"standard")
B.az=new A.dB(2,"high")
B.F=new A.c6(B.U,0,t.Q)
B.aa=new A.dA(B.ax,B.F)
B.fj={shadows:0}
B.h7=new A.c6(B.fj,1,t.Q)
B.fx=new A.dA(B.ay,B.h7)
B.fe={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.h4=new A.c6(B.fe,5,t.Q)
B.fy=new A.dA(B.az,B.h4)
B.fw=new A.dB(4,"shipping")
B.ff={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.h5=new A.c6(B.ff,7,t.Q)
B.is=new A.dA(B.fw,B.h5)
B.fA=new A.b6(0,1)
B.fB=new A.a7(0.46,0.44,0.48)
B.fC=new A.a7(0.46,0.25,0.2)
B.fD=new A.a7(0.48,0.4,0.34)
B.fE=new A.a7(0.31,0.25,0.23)
B.fF=new A.a7(0.42,0.44,0.43)
B.fG=new A.a7(0.43,0.38,0.43)
B.fH=new A.a7(0.37,0.33,0.31)
B.fI=new A.a7(0.34,0.32,0.29)
B.bF=new A.a7(0.38,0.25,0.19)
B.fJ=new A.a7(0.31,0.28,0.24)
B.fK=new A.a7(0.58,0.56,0.5)
B.fL=new A.a7(0.36,0.39,0.46)
B.fM=new A.a7(0.44,0.37,0.28)
B.fN=new A.a7(0.52,0.5,0.44)
B.fO=new A.a7(0.24,0.25,0.27)
B.fP=new A.a7(0.28,0.27,0.25)
B.fQ=new A.a7(0.31,0.34,0.4)
B.fR=new A.a7(0.34,0.3,0.36)
B.fS=new A.a7(0.42,0.4,0.38)
B.fT=new A.a7(0.18,0.2,0.21)
B.fU=new A.a7(0.2,0.12,0.1)
B.fV=new A.a7(0.45,0.42,0.35)
B.fW=new A.a7(0.12,0.15,0.2)
B.fX=new A.a7(0.34,0.36,0.45)
B.ab=new A.fr(0,"legacy")
B.bG=new A.dC(0,"constructed")
B.x=new A.dC(1,"ready")
B.ac=new A.dC(2,"lost")
B.bH=new A.dC(3,"disposed")
B.iq=new A.hE(1,"srgb")
B.ir=new A.hN(1,"errorsOnly")
B.fY=new A.iK(B.aa,384,216,0)
B.aA=new A.dD(0,"constructed")
B.fZ=new A.dD(1,"initializing")
B.aB=new A.dD(2,"ready")
B.bI=new A.dD(3,"contextLost")
B.h=new A.eo(0,"read")
B.k=new A.eo(1,"write")
B.E=new A.eo(2,"historyRead")
B.p=new A.ft(0,"rgba8")
B.bK=new A.aY("dofBlurH",B.p,192,108,1,0)
B.bL=new A.aY("dofBlurV",B.p,192,108,1,0)
B.bM=new A.aY("dofOutput",B.p,384,216,1,0)
B.bQ=new A.aY("gradeOutput",B.p,384,216,1,0)
B.aC=new A.aY("vhsOutput",B.p,384,216,1,0)
B.bR=new A.aY("bloomBlurH",B.p,192,108,1,0)
B.bS=new A.aY("bloomBlurV",B.p,192,108,1,0)
B.W=new A.aY("sceneColor",B.p,384,216,1,0)
B.bT=new A.aY("ps1Output",B.p,384,216,1,0)
B.bP=new A.aY("ssaoBlurred",B.p,192,108,1,0)
B.bU=new A.S(B.bP,B.k)
B.bO=new A.aY("ssaoRaw",B.p,192,108,1,0)
B.bV=new A.S(B.bO,B.k)
B.ad=new A.S(B.W,B.k)
B.bW=new A.S(B.aC,B.k)
B.bX=new A.S(B.aC,B.E)
B.bY=new A.S(B.bQ,B.k)
B.bJ=new A.ft(2,"depth24")
B.bN=new A.aY("shadowMap",B.bJ,512,512,1,0)
B.bZ=new A.S(B.bN,B.k)
B.c_=new A.S(B.bM,B.k)
B.c0=new A.S(B.bO,B.h)
B.c1=new A.S(B.W,B.h)
B.h_=new A.aY("sceneDepth",B.bJ,384,216,1,0)
B.c2=new A.S(B.h_,B.k)
B.c3=new A.S(B.bN,B.h)
B.c4=new A.S(B.bT,B.k)
B.c5=new A.S(B.bL,B.h)
B.c6=new A.S(B.bP,B.h)
B.c7=new A.S(B.bS,B.h)
B.h0=new A.dE(null,"save storage unavailable")
B.h1=new A.dE(null,"save could not be recovered")
B.h2=new A.dE(null,null)
B.fc={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.h3=new A.c6(B.fc,4,t.Q)
B.f9={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.h6=new A.c6(B.f9,9,t.Q)
B.ca=new A.dF(2,"link")
B.hi=new A.fx(B.ca,"gl.createProgram() returned null")
B.c8=new A.dF(0,"vertex")
B.c9=new A.dF(1,"fragment")
B.cb=new A.dF(3,"validation")
B.M=new A.A(0,1,0)
B.af=new A.A(0,-1,0)
B.hn=new A.cz(-1,B.M,B.af,B.bl,1,1,0.3,0.5)
B.a_=new A.A(0,0,0)
B.fz=new A.iI(0,0,0,1)
B.y=new A.iZ(B.a_,B.fz)
B.hp=A.bW("zT")
B.hq=A.bW("zU")
B.hr=A.bW("ll")
B.hs=A.bW("vG")
B.ht=A.bW("vP")
B.hu=A.bW("vQ")
B.hv=A.bW("vR")
B.hw=A.bW("a_")
B.hx=A.bW("E")
B.hy=A.bW("qh")
B.hz=A.bW("wC")
B.hA=A.bW("wD")
B.hB=A.bW("fB")
B.e=new A.cZ(0,"float1")
B.ae=new A.cZ(1,"float2")
B.l=new A.cZ(2,"float3")
B.q=new A.cZ(3,"mat4")
B.aP=new A.cZ(4,"sampler")
B.u=new A.y(B.aP,0)
B.Z=new A.y(B.aP,1)
B.cg=new A.y(B.aP,2)
B.hC=new A.nM(!1)
B.hD=new A.A(0,0,1)
B.hE=new A.A(1,0,0)
B.hF=new A.A(1/0,1/0,1/0)
B.hG=new A.A(-1/0,-1/0,-1/0)
B.hT=new A.d0(0,"visitorAnswered")
B.ch=new A.d0(1,"visitorIgnored")
B.hU=new A.d0(2,"entryVerified")
B.hV=new A.d0(3,"entryContradicted")
B.hW=new A.d0(4,"exposureAccepted")
B.hY=new A.ci(1,"malformedDay")
B.hZ=new A.ci(2,"malformedTier")
B.ci=new A.ci(3,"missingTierLines")
B.aT=new A.ci(6,"invalidPhase")
B.i4=new A.bD(B.aT,"The active visit cannot be chosen.")
B.i7=new A.bo(B.i4)
B.i1=new A.bD(B.aT,"The active visit has no line to advance.")
B.i8=new A.bo(B.i1)
B.i0=new A.ci(5,"noActiveVisit")
B.i2=new A.bD(B.i0,"There is no active visit.")
B.cj=new A.bo(B.i2)
B.i3=new A.bD(B.aT,"A visit is already active.")
B.i9=new A.bo(B.i3)
B.i_=new A.ci(4,"noArrival")
B.i6=new A.bD(B.i_,"The authored arrival is missing.")
B.ia=new A.bo(B.i6)
B.hX=new A.ci(0,"missingCorpus")
B.i5=new A.bD(B.hX,"The authored visitor corpus is empty.")
B.ib=new A.bo(B.i5)
B.ck=new A.dL(1,"exact")
B.aU=new A.dL(2,"partial")
B.aj=new A.dL(3,"contradiction")
B.ic=new A.dL(0,"skipped")
B.id=new A.dK(B.ic,B.F)
B.ie=new A.dK(B.aU,B.F)
B.ig=new A.fH(B.K,!1)
B.ih=new A.fH(B.K,!0)
B.cl=new A.fK(0,"horizontal")
B.ii=new A.fK(1,"vertical")
B.cm=new A.fM(0,"horizontal")
B.ij=new A.fM(1,"vertical")
B.ak=new A.eA(0,"empty")
B.ik=new A.eA(1,"cpuReady")
B.al=new A.eA(4,"released")})();(function staticFields(){$.oj=null
$.bJ=A.f([],A.aw("u<E>"))
$.rI=null
$.mP=0
$.mQ=A.yr()
$.rh=null
$.rg=null
$.uj=null
$.ud=null
$.uo=null
$.pm=null
$.pt=null
$.r5=null
$.or=A.f([],A.aw("u<D<E>?>"))
$.eK=null
$.hh=null
$.hi=null
$.qI=!1
$.ae=B.v
$.rY=""
$.rZ=null
$.rU=null
$.mE=null
$.bp=A.af()
$.cI=A.af()
$.bc=null
$.k2=null
$.F=A.af()
$.bG=A.af()
$.aO=A.af()
$.tv=A.af()
$.eL=null
$.Y=A.af()
$.eH=null
$.dU=A.af()
$.V=A.af()
$.qx=A.af()
$.qE=null
$.bH=null
$.qz=!1
$.qQ=!1
$.tQ=null
$.k1=null
$.oH=null
$.tF=0
$.qL=!1
$.tP=!1
$.qJ=0
$.tW=0
$.cl=0
$.uc=!1
$.tG="booting"
$.bV=0
$.dV=0
$.aE="hall"
$.hf=A.af()
$.eE=A.af()
$.bq=A.af()
$.tV=null
$.qR=0
$.as=null
$.jY=A.af()
$.jX=A.af()
$.tw=A.af()
$.tu=A.af()
$.aD=A.af()
$.qy=A.af()
$.qw=A.af()
$.d7=A.af()
$.jW=A.af()
$.aP=A.af()
$.jV=A.af()
$.oC=A.af()
$.pd=A.a4(t.S)
$.cm=A.f([],t.s)
$.qD=null
$.u7=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"zW","uy",()=>A.ui("_$dart_dartClosure"))
s($,"zV","eR",()=>A.ui("_$dart_dartClosure_dartJSInterop"))
s($,"Ao","uT",()=>A.f([new J.id()],A.aw("u<fv>")))
s($,"A2","uA",()=>A.cC(A.nI({
toString:function(){return"$receiver$"}})))
s($,"A3","uB",()=>A.cC(A.nI({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"A4","uC",()=>A.cC(A.nI(null)))
s($,"A5","uD",()=>A.cC(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"A8","uG",()=>A.cC(A.nI(void 0)))
s($,"A9","uH",()=>A.cC(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"A7","uF",()=>A.cC(A.rV(null)))
s($,"A6","uE",()=>A.cC(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Ab","uJ",()=>A.cC(A.rV(void 0)))
s($,"Aa","uI",()=>A.cC(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Ac","ra",()=>A.wV())
s($,"Ag","uN",()=>A.w6(4096))
s($,"Ae","uL",()=>new A.oA().$0())
s($,"Af","uM",()=>new A.oz().$0())
s($,"Ad","uK",()=>new Int8Array(A.U(A.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Aj","kd",()=>A.kc(B.hx))
s($,"A0","r9",()=>{A.wk()
return $.mP})
s($,"zS","pX",()=>new A.aY("sceneColor",B.p,384,216,1,1))
s($,"zX","uz",()=>A.w7(A.f([255,255,255,255],t.t)))
s($,"Aq","uV",()=>A.j6(0,1,0))
s($,"Ap","uU",()=>A.wm("^[a-z0-9][a-z0-9._-]*$"))
s($,"At","kf",()=>{var q=$.rU
if(q==null){A.k9()
A.k9()
A.k9()
A.k9()
A.k9()
q=$.rU=new A.nB()}return q})
s($,"Ah","uO",()=>new A.kQ())
s($,"Ak","uQ",()=>new A.lH())
s($,"Al","uR",()=>new A.lQ())
s($,"Am","pY",()=>new A.m5(A.x(t.N,t.S)))
s($,"Ai","uP",()=>A.j4().gbf().h(0,"debugPause")==="1")
r($,"qW","eS",()=>A.j6(0,0,0))
r($,"qN","uS",()=>A.j6(0,0,0))
r($,"r0","hm",()=>A.j6(0,0,0))
s($,"An","ke",()=>new A.lm(A.j6(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cV,ArrayBuffer:A.el,ArrayBufferView:A.fi,DataView:A.is,Float32Array:A.ff,Float64Array:A.it,Int16Array:A.iu,Int32Array:A.iv,Int8Array:A.iw,Uint16Array:A.ix,Uint32Array:A.iy,Uint8ClampedArray:A.dy,CanvasPixelArray:A.dy,Uint8Array:A.fj})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.fU.$nativeSuperclassTag="ArrayBufferView"
A.fV.$nativeSuperclassTag="ArrayBufferView"
A.fg.$nativeSuperclassTag="ArrayBufferView"
A.fW.$nativeSuperclassTag="ArrayBufferView"
A.fX.$nativeSuperclassTag="ArrayBufferView"
A.fh.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.pu
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
