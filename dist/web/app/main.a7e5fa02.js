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
if(a[b]!==s){A.yy(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.q9(b)
return new s(c,this)}:function(){if(s===null)s=A.q9(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.q9(a).prototype
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
qe(a,b,c,d){return{i:a,p:b,e:c,x:d}},
oI(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.qc==null){A.ya()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.r2("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.nG
if(o==null)o=$.nG=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.yi(a)
if(p!=null)return p
if(typeof a=="function")return B.dW
s=Object.getPrototypeOf(a)
if(s==null)return B.by
if(s===Object.prototype)return B.by
if(typeof q=="function"){o=$.nG
if(o==null)o=$.nG=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
qB(a,b){if(a<0||a>4294967295)throw A.c(A.aM(a,0,4294967295,"length",null))
return J.uS(new Array(a),b)},
qC(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("q<0>"))},
i0(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("q<0>"))},
uS(a,b){var s=A.f(a,b.i("q<0>"))
s.$flags=1
return s},
uT(a,b){var s=t.bP
return J.qj(s.a(a),s.a(b))},
qF(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
uU(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.qF(r))break;++b}return b},
uV(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.qF(q))break}return b},
dN(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.f_.prototype
return J.i2.prototype}if(typeof a=="string")return J.dg.prototype
if(a==null)return J.f0.prototype
if(typeof a=="boolean")return J.i1.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
if(typeof a=="symbol")return J.e9.prototype
if(typeof a=="bigint")return J.e8.prototype
return a}if(a instanceof A.B)return a
return J.oI(a)},
aH(a){if(typeof a=="string")return J.dg.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
if(typeof a=="symbol")return J.e9.prototype
if(typeof a=="bigint")return J.e8.prototype
return a}if(a instanceof A.B)return a
return J.oI(a)},
bU(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
if(typeof a=="symbol")return J.e9.prototype
if(typeof a=="bigint")return J.e8.prototype
return a}if(a instanceof A.B)return a
return J.oI(a)},
y6(a){if(typeof a=="number")return J.df.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.dv.prototype
return a},
tk(a){if(typeof a=="number")return J.df.prototype
if(typeof a=="string")return J.dg.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.dv.prototype
return a},
y7(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ci.prototype
if(typeof a=="symbol")return J.e9.prototype
if(typeof a=="bigint")return J.e8.prototype
return a}if(a instanceof A.B)return a
return J.oI(a)},
qi(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tk(a).S(a,b)},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dN(a).T(a,b)},
aR(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.yg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aH(a).h(a,b)},
bV(a,b,c){return J.bU(a).l(a,b,c)},
hc(a,b){return J.bU(a).k(a,b)},
tV(a,b){return J.bU(a).J(a,b)},
tW(a,b){return J.bU(a).Y(a,b)},
tX(a,b,c){return J.y7(a).f3(a,b,c)},
tY(a,b){return J.bU(a).c0(a,b)},
qj(a,b){return J.tk(a).H(a,b)},
k_(a,b){return J.bU(a).R(a,b)},
bh(a){return J.dN(a).gE(a)},
qk(a){return J.aH(a).gI(a)},
tZ(a){return J.aH(a).gL(a)},
L(a){return J.bU(a).gu(a)},
aS(a){return J.aH(a).gq(a)},
dP(a){return J.dN(a).gM(a)},
dQ(a,b,c){return J.bU(a).bC(a,b,c)},
u_(a,b){return J.aH(a).sq(a,b)},
u0(a,b){return J.bU(a).a_(a,b)},
pa(a,b){return J.y6(a).lo(a,b)},
dR(a){return J.dN(a).n(a)},
u1(a,b){return J.bU(a).dX(a,b)},
hY:function hY(){},
i1:function i1(){},
f0:function f0(){},
f1:function f1(){},
cG:function cG(){},
il:function il(){},
dv:function dv(){},
ci:function ci(){},
e8:function e8(){},
e9:function e9(){},
q:function q(a){this.$ti=a},
i_:function i_(){},
lA:function lA(a){this.$ti=a},
d0:function d0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
df:function df(){},
f_:function f_(){},
i2:function i2(){},
dg:function dg(){}},A={pd:function pd(){},
jS(){return $},
u8(a,b,c){if(t.gt.b(a))return new A.fC(a,b.i("@<0>").D(c).i("fC<1,2>"))
return new A.d2(a,b.i("@<0>").D(c).i("d2<1,2>"))},
qI(a){return new A.dh("Field '"+a+"' has been assigned during initialization.")},
a3(a){return new A.dh("Field '"+a+"' has not been initialized.")},
uX(a){return new A.dh("Field '"+a+"' has already been initialized.")},
oJ(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cp(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mW(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dM(a,b,c){return a},
qd(a){var s,r
for(s=$.bw.length,r=0;r<s;++r)if(a===$.bw[r])return!0
return!1},
mV(a,b,c,d){A.iu(b,"start")
if(c!=null){A.iu(c,"end")
if(b>c)A.k(A.aM(b,0,c,"start",null))}return new A.fq(a,b,c,d.i("fq<0>"))},
i7(a,b,c,d){if(t.gt.b(a))return new A.d6(a,b,c.i("@<0>").D(d).i("d6<1,2>"))
return new A.ck(a,b,c.i("@<0>").D(d).i("ck<1,2>"))},
hZ(){return new A.ei("No element")},
uQ(){return new A.ei("Too many elements")},
iC(a,b,c,d,e){if(c-b<=32)A.vp(a,b,c,d,e)
else A.vo(a,b,c,d,e)},
vp(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aH(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a6()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
vo(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.K(a4+a5,2),f=g-j,e=g+j,d=J.aH(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a8(a6.$2(b,a0),0)
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
A.iC(a3,a4,r-2,a6,a7)
A.iC(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a8(a6.$2(d.h(a3,r),b),0))++r
while(J.a8(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.iC(a3,r,q,a6,a7)}else A.iC(a3,r,q,a6,a7)},
cS:function cS(){},
eL:function eL(a,b){this.a=a
this.$ti=b},
d2:function d2(a,b){this.a=a
this.$ti=b},
fC:function fC(a,b){this.a=a
this.$ti=b},
fA:function fA(){},
nr:function nr(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.$ti=b},
dh:function dh(a){this.a=a},
hs:function hs(a){this.a=a},
mL:function mL(){},
D:function D(){},
a1:function a1(){},
fq:function fq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cj:function cj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
dj:function dj(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(a,b){this.a=a
this.$ti=b},
fw:function fw(a,b){this.a=a
this.$ti=b},
af:function af(){},
c4:function c4(){},
ek:function ek(){},
fl:function fl(a,b){this.a=a
this.$ti=b},
h2:function h2(){},
d4(a,b,c){var s,r,q,p,o,n,m,l=A.az(a.gO(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.az(a.gao(),!0,c)
m=new A.a5(q,n,b.i("@<0>").D(c).i("a5<1,2>"))
m.$keys=l
return m}return new A.eN(A.aU(a,b,c),b.i("@<0>").D(c).i("eN<1,2>"))},
ue(){throw A.c(A.av("Cannot modify unmodifiable Map"))},
uf(){throw A.c(A.av("Cannot modify constant Set"))},
ty(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
yg(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dR(a)
return s},
ff(a){var s,r=$.qP
if(r==null)r=$.qP=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
mf(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
ir(a){var s,r,q,p
if(a instanceof A.B)return A.bv(A.bg(a),null)
s=J.dN(a)
if(s===B.dV||s===B.dX||t.cx.b(a)){r=B.aR(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bv(A.bg(a),null)},
qQ(a){var s,r,q
if(a==null||typeof a=="number"||A.bH(a))return J.dR(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cB)return a.n(0)
if(a instanceof A.bC)return a.eX(!0)
s=$.tT()
for(r=0;r<1;++r){q=s[r].lp(a)
if(q!=null)return q}return"Instance of '"+A.ir(a)+"'"},
v6(){return Date.now()},
vf(){var s,r
if($.mg!==0)return
$.mg=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mg=1e6
$.mh=new A.me(r)},
v5(){if(!!self.location)return self.location.href
return null},
vg(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ag(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cT(s,10)|55296)>>>0,s&1023|56320)}}throw A.c(A.aM(a,0,1114111,null,null))},
ec(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ve(a){var s=A.ec(a).getUTCFullYear()+0
return s},
vc(a){var s=A.ec(a).getUTCMonth()+1
return s},
v8(a){var s=A.ec(a).getUTCDate()+0
return s},
v9(a){var s=A.ec(a).getUTCHours()+0
return s},
vb(a){var s=A.ec(a).getUTCMinutes()+0
return s},
vd(a){var s=A.ec(a).getUTCSeconds()+0
return s},
va(a){var s=A.ec(a).getUTCMilliseconds()+0
return s},
v7(a){var s=a.$thrownJsError
if(s==null)return null
return A.cb(s)},
qR(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.an(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
jU(a){throw A.c(A.q8(a))},
d(a,b){if(a==null)J.aS(a)
throw A.c(A.oF(a,b))},
oF(a,b){var s,r="index"
if(!A.aF(b))return new A.bM(!0,b,r,null)
s=A.a(J.aS(a))
if(b<0||b>=s)return A.lv(b,s,a,r)
return A.qT(b,r)},
y0(a,b,c){if(a>c)return A.aM(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aM(b,a,c,"end",null)
return new A.bM(!0,b,"end",null)},
q8(a){return new A.bM(!0,a,null,null)},
c(a){return A.an(a,new Error())},
an(a,b){var s
if(a==null)a=new A.cq()
b.dartException=a
s=A.yA
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
yA(){return J.dR(this.dartException)},
k(a,b){throw A.an(a,b==null?new Error():b)},
b3(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.wJ(a,b,c),s)},
wJ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ft("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.c(A.ao(a))},
cr(a){var s,r,q,p,o,n
a=A.tr(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.n2(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
n3(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
r1(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
pe(a,b){var s=b==null,r=s?null:b.method
return new A.i3(a,r,s?null:b.receiver)},
ab(a){var s
if(a==null)return new A.m2(a)
if(a instanceof A.eS){s=a.a
return A.d_(a,s==null?A.ex(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.d_(a,a.dartException)
return A.xB(a)},
d_(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
xB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cT(r,16)&8191)===10)switch(q){case 438:return A.d_(a,A.pe(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.d_(a,new A.fb())}}if(a instanceof TypeError){p=$.tB()
o=$.tC()
n=$.tD()
m=$.tE()
l=$.tH()
k=$.tI()
j=$.tG()
$.tF()
i=$.tK()
h=$.tJ()
g=p.au(s)
if(g!=null)return A.d_(a,A.pe(A.G(s),g))
else{g=o.au(s)
if(g!=null){g.method="call"
return A.d_(a,A.pe(A.G(s),g))}else if(n.au(s)!=null||m.au(s)!=null||l.au(s)!=null||k.au(s)!=null||j.au(s)!=null||m.au(s)!=null||i.au(s)!=null||h.au(s)!=null){A.G(s)
return A.d_(a,new A.fb())}}return A.d_(a,new A.iM(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fo()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.d_(a,new A.bM(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fo()
return a},
cb(a){var s
if(a instanceof A.eS)return a.b
if(a==null)return new A.fQ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fQ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jV(a){if(a==null)return J.bh(a)
if(typeof a=="object")return A.ff(a)
return J.bh(a)},
xV(a){if(typeof a=="number")return B.d.gE(a)
if(a instanceof A.jA)return A.ff(a)
if(a instanceof A.bC)return a.gE(a)
return A.jV(a)},
tj(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
y5(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
x3(a,b,c,d,e,f){t.gY.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.e2("Unsupported number of arguments for wrapped closure"))},
eG(a,b){var s=a.$identity
if(!!s)return s
s=A.xW(a,b)
a.$identity=s
return s},
xW(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.x3)},
ud(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iF().constructor.prototype):Object.create(new A.dX(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.qq(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.u9(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.qq(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
u9(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.u6)}throw A.c("Error in functionType of tearoff")},
ua(a,b,c,d){var s=A.qp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
qq(a,b,c,d){if(c)return A.uc(a,b,d)
return A.ua(b.length,d,a,b)},
ub(a,b,c,d){var s=A.qp,r=A.u7
switch(b?-1:a){case 0:throw A.c(new A.iy("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
uc(a,b,c){var s,r
if($.qn==null)$.qn=A.qm("interceptor")
if($.qo==null)$.qo=A.qm("receiver")
s=b.length
r=A.ub(s,c,a,b)
return r},
q9(a){return A.ud(a)},
u6(a,b){return A.fV(v.typeUniverse,A.bg(a.a),b)},
qp(a){return a.a},
u7(a){return a.b},
qm(a){var s,r,q,p=new A.dX("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.w("Field name "+a+" not found.",null))},
tl(a){return v.getIsolateTag(a)},
tu(){return v.G},
z7(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
yi(a){var s,r,q,p,o,n=A.G($.tm.$1(a)),m=$.oG[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oN[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bG($.tg.$2(a,n))
if(q!=null){m=$.oG[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oN[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.p1(s)
$.oG[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.oN[n]=s
return s}if(p==="-"){o=A.p1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.tp(a,s)
if(p==="*")throw A.c(A.r2(n))
if(v.leafTags[n]===true){o=A.p1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.tp(a,s)},
tp(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.qe(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
p1(a){return J.qe(a,!1,null,!!a.$ibl)},
ym(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.p1(s)
else return J.qe(s,c,null,null)},
ya(){if(!0===$.qc)return
$.qc=!0
A.yb()},
yb(){var s,r,q,p,o,n,m,l
$.oG=Object.create(null)
$.oN=Object.create(null)
A.y9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.tq.$1(o)
if(n!=null){m=A.ym(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
y9(){var s,r,q,p,o,n,m=B.cr()
m=A.eF(B.cs,A.eF(B.ct,A.eF(B.aS,A.eF(B.aS,A.eF(B.cu,A.eF(B.cv,A.eF(B.cw(B.aR),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.tm=new A.oK(p)
$.tg=new A.oL(o)
$.tq=new A.oM(n)},
eF(a,b){return a(b)||b},
vY(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.a8(r,b[s]))return!1}return!0},
xY(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yv(a,b,c){var s=a.indexOf(b,c)
return s>=0},
y3(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
tr(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
yw(a,b,c){var s=A.yx(a,b,c)
return s},
yx(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.tr(b),"g"),A.y3(c))},
c7:function c7(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a){this.a=a},
eN:function eN(a,b){this.a=a
this.$ti=b},
e_:function e_(){},
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b){this.a=a
this.$ti=b},
dG:function dG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eU:function eU(a,b){this.a=a
this.$ti=b},
eO:function eO(){},
cd:function cd(a,b,c){this.a=a
this.b=b
this.$ti=c},
me:function me(a){this.a=a},
fm:function fm(){},
n2:function n2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fb:function fb(){},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a){this.a=a},
m2:function m2(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b},
fQ:function fQ(a){this.a=a
this.b=null},
cB:function cB(){},
hq:function hq(){},
hr:function hr(){},
iI:function iI(){},
iF:function iF(){},
dX:function dX(a,b){this.a=a
this.b=b},
iy:function iy(a){this.a=a},
by:function by(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lJ:function lJ(a){this.a=a},
lR:function lR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ak:function ak(a,b){this.a=a
this.$ti=b},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aT:function aT(a,b){this.a=a
this.$ti=b},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
X:function X(a,b){this.a=a
this.$ti=b},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f2:function f2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
oK:function oK(a){this.a=a},
oL:function oL(a){this.a=a},
oM:function oM(a){this.a=a},
bC:function bC(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
yy(a){throw A.an(A.qI(a),new Error())},
j(){throw A.an(A.a3(""),new Error())},
y(){throw A.an(A.uX(""),new Error())},
tx(){throw A.an(A.qI(""),new Error())},
ae(){var s=new A.ns()
return s.b=s},
ns:function ns(){this.b=null},
a2(a){return a},
v0(a,b,c){return new Float32Array(a,b,c)},
v1(a){return new Uint8Array(a)},
v2(a){return new Uint8Array(A.a2(a))},
cy(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.oF(b,a))},
wC(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.y0(a,b,c))
return b},
cJ:function cJ(){},
eb:function eb(){},
f9:function f9(){},
nT:function nT(a){this.a=a},
ib:function ib(){},
aA:function aA(){},
f7:function f7(){},
f8:function f8(){},
f6:function f6(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
dl:function dl(){},
fa:function fa(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
pp(a,b){var s=b.c
return s==null?b.c=A.fT(a,"bj",[b.x]):s},
qU(a){var s=a.w
if(s===6||s===7)return A.qU(a.x)
return s===11||s===12},
vm(a){return a.as},
yn(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
at(a){return A.nS(v.typeUniverse,a,!1)},
dL(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dL(a1,s,a3,a4)
if(r===s)return a2
return A.rq(a1,r,!0)
case 7:s=a2.x
r=A.dL(a1,s,a3,a4)
if(r===s)return a2
return A.rp(a1,r,!0)
case 8:q=a2.y
p=A.eE(a1,q,a3,a4)
if(p===q)return a2
return A.fT(a1,a2.x,p)
case 9:o=a2.x
n=A.dL(a1,o,a3,a4)
m=a2.y
l=A.eE(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.pC(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eE(a1,j,a3,a4)
if(i===j)return a2
return A.rr(a1,k,i)
case 11:h=a2.x
g=A.dL(a1,h,a3,a4)
f=a2.y
e=A.xx(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ro(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eE(a1,d,a3,a4)
o=a2.x
n=A.dL(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.pD(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.hh("Attempted to substitute unexpected RTI kind "+a0))}},
eE(a,b,c,d){var s,r,q,p,o=b.length,n=A.nX(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dL(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
xy(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.nX(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dL(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
xx(a,b,c,d){var s,r=b.a,q=A.eE(a,r,c,d),p=b.b,o=A.eE(a,p,c,d),n=b.c,m=A.xy(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jd()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
qa(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.y8(s)
return a.$S()}return null},
yc(a,b){var s
if(A.qU(b))if(a instanceof A.cB){s=A.qa(a)
if(s!=null)return s}return A.bg(a)},
bg(a){if(a instanceof A.B)return A.o(a)
if(Array.isArray(a))return A.I(a)
return A.pS(J.dN(a))},
I(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.pS(a)},
pS(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.x0(a,s)},
x0(a,b){var s=a instanceof A.cB?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.w6(v.typeUniverse,s.name)
b.$ccache=r
return r},
y8(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.nS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jT(a){return A.ca(A.o(a))},
q6(a){var s
if(a instanceof A.bC)return a.er()
s=a instanceof A.cB?A.qa(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dP(a).a
if(Array.isArray(a))return A.I(a)
return A.bg(a)},
ca(a){var s=a.r
return s==null?a.r=new A.jA(a):s},
y4(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.d(q,0)
s=A.fV(v.typeUniverse,A.q6(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.rs(v.typeUniverse,s,A.q6(q[r]))}return A.fV(v.typeUniverse,s,a)},
bK(a){return A.ca(A.nS(v.typeUniverse,a,!1))},
x_(a){var s=this
s.b=A.xu(s)
return s.b(a)},
xu(a){var s,r,q,p,o
if(a===t.K)return A.x9
if(A.dO(a))return A.xd
s=a.w
if(s===6)return A.wW
if(s===1)return A.rX
if(s===7)return A.x4
r=A.xt(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dO)){a.f="$i"+q
if(q==="C")return A.x7
if(a===t.m)return A.x6
return A.xc}}else if(s===10){p=A.xY(a.x,a.y)
o=p==null?A.rX:p
return o==null?A.ex(o):o}return A.wU},
xt(a){if(a.w===8){if(a===t.S)return A.aF
if(a===t.i||a===t.o)return A.x8
if(a===t.N)return A.xb
if(a===t.y)return A.bH}return null},
wZ(a){var s=this,r=A.wT
if(A.dO(s))r=A.wz
else if(s===t.K)r=A.ex
else if(A.eH(s)){r=A.wV
if(s===t.aV)r=A.rH
else if(s===t.w)r=A.bG
else if(s===t.fU)r=A.wy
else if(s===t.jh)r=A.rI
else if(s===t.dA)r=A.rG
else if(s===t.mU)r=A.h}else if(s===t.S)r=A.a
else if(s===t.N)r=A.G
else if(s===t.y)r=A.aY
else if(s===t.o)r=A.bF
else if(s===t.i)r=A.h4
else if(s===t.m)r=A.e
s.a=r
return s.a(a)},
wU(a){var s=this
if(a==null)return A.eH(s)
return A.yh(v.typeUniverse,A.yc(a,s),s)},
wW(a){if(a==null)return!0
return this.x.b(a)},
xc(a){var s,r=this
if(a==null)return A.eH(r)
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dN(a)[s]},
x7(a){var s,r=this
if(a==null)return A.eH(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dN(a)[s]},
x6(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.B)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
rW(a){if(typeof a=="object"){if(a instanceof A.B)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
wT(a){var s=this
if(a==null){if(A.eH(s))return a}else if(s.b(a))return a
throw A.an(A.rN(a,s),new Error())},
wV(a){var s=this
if(a==null||s.b(a))return a
throw A.an(A.rN(a,s),new Error())},
rN(a,b){return new A.fR("TypeError: "+A.rg(a,A.bv(b,null)))},
rg(a,b){return A.hH(a)+": type '"+A.bv(A.q6(a),null)+"' is not a subtype of type '"+b+"'"},
bD(a,b){return new A.fR("TypeError: "+A.rg(a,b))},
x4(a){var s=this
return s.x.b(a)||A.pp(v.typeUniverse,s).b(a)},
x9(a){return a!=null},
ex(a){if(a!=null)return a
throw A.an(A.bD(a,"Object"),new Error())},
xd(a){return!0},
wz(a){return a},
rX(a){return!1},
bH(a){return!0===a||!1===a},
aY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.an(A.bD(a,"bool"),new Error())},
wy(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.an(A.bD(a,"bool?"),new Error())},
h4(a){if(typeof a=="number")return a
throw A.an(A.bD(a,"double"),new Error())},
rG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bD(a,"double?"),new Error())},
aF(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.an(A.bD(a,"int"),new Error())},
rH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.an(A.bD(a,"int?"),new Error())},
x8(a){return typeof a=="number"},
bF(a){if(typeof a=="number")return a
throw A.an(A.bD(a,"num"),new Error())},
rI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bD(a,"num?"),new Error())},
xb(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.an(A.bD(a,"String"),new Error())},
bG(a){if(typeof a=="string")return a
if(a==null)return a
throw A.an(A.bD(a,"String?"),new Error())},
e(a){if(A.rW(a))return a
throw A.an(A.bD(a,"JSObject"),new Error())},
h(a){if(a==null)return a
if(A.rW(a))return a
throw A.an(A.bD(a,"JSObject?"),new Error())},
t9(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bv(a[q],b)
return s},
xk(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.t9(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bv(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
rQ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.f([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bv(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bv(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bv(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bv(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bv(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bv(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bv(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bv(a.x,b)+">"
if(l===8){p=A.xA(a.x)
o=a.y
return o.length>0?p+("<"+A.t9(o,b)+">"):p}if(l===10)return A.xk(a,b)
if(l===11)return A.rQ(a,b,null)
if(l===12)return A.rQ(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
xA(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
w7(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
w6(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.nS(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fU(a,5,"#")
q=A.nX(s)
for(p=0;p<s;++p)q[p]=r
o=A.fT(a,b,q)
n[b]=o
return o}else return m},
w5(a,b){return A.rA(a.tR,b)},
w4(a,b){return A.rA(a.eT,b)},
nS(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.rl(A.rj(a,null,b,!1))
r.set(b,s)
return s},
fV(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.rl(A.rj(a,b,c,!0))
q.set(c,r)
return r},
rs(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.pC(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cW(a,b){b.a=A.wZ
b.b=A.x_
return b},
fU(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bQ(null,null)
s.w=b
s.as=c
r=A.cW(a,s)
a.eC.set(c,r)
return r},
rq(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.w2(a,b,r,c)
a.eC.set(r,s)
return s},
w2(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dO(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.eH(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.bQ(null,null)
q.w=6
q.x=b
q.as=c
return A.cW(a,q)},
rp(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.w0(a,b,r,c)
a.eC.set(r,s)
return s},
w0(a,b,c,d){var s,r
if(d){s=b.w
if(A.dO(b)||b===t.K)return b
else if(s===1)return A.fT(a,"bj",[b])
else if(b===t.b||b===t.T)return t.gK}r=new A.bQ(null,null)
r.w=7
r.x=b
r.as=c
return A.cW(a,r)},
w3(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bQ(null,null)
s.w=13
s.x=b
s.as=q
r=A.cW(a,s)
a.eC.set(q,r)
return r},
fS(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
w_(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fT(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fS(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bQ(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cW(a,r)
a.eC.set(p,q)
return q},
pC(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fS(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bQ(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cW(a,o)
a.eC.set(q,n)
return n},
rr(a,b,c){var s,r,q="+"+(b+"("+A.fS(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bQ(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cW(a,s)
a.eC.set(q,r)
return r},
ro(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fS(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fS(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.w_(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bQ(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cW(a,p)
a.eC.set(r,o)
return o},
pD(a,b,c,d){var s,r=b.as+("<"+A.fS(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.w1(a,b,c,r,d)
a.eC.set(r,s)
return s},
w1(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.nX(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dL(a,b,r,0)
m=A.eE(a,c,r,0)
return A.pD(a,n,m,c!==m)}}l=new A.bQ(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cW(a,l)},
rj(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
rl(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.vT(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.rk(a,r,l,k,!1)
else if(q===46)r=A.rk(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dI(a.u,a.e,k.pop()))
break
case 94:k.push(A.w3(a.u,k.pop()))
break
case 35:k.push(A.fU(a.u,5,"#"))
break
case 64:k.push(A.fU(a.u,2,"@"))
break
case 126:k.push(A.fU(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.vV(a,k)
break
case 38:A.vU(a,k)
break
case 63:p=a.u
k.push(A.rq(p,A.dI(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.rp(p,A.dI(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.vS(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.rm(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.vX(a.u,a.e,o)
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
return A.dI(a.u,a.e,m)},
vT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
rk(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.w7(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.vm(o)+'"')
d.push(A.fV(s,o,n))}else d.push(p)
return m},
vV(a,b){var s,r=a.u,q=A.ri(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fT(r,p,q))
else{s=A.dI(r,a.e,p)
switch(s.w){case 11:b.push(A.pD(r,s,q,a.n))
break
default:b.push(A.pC(r,s,q))
break}}},
vS(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ri(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dI(p,a.e,o)
q=new A.jd()
q.a=s
q.b=n
q.c=m
b.push(A.ro(p,r,q))
return
case-4:b.push(A.rr(p,b.pop(),s))
return
default:throw A.c(A.hh("Unexpected state under `()`: "+A.p(o)))}},
vU(a,b){var s=b.pop()
if(0===s){b.push(A.fU(a.u,1,"0&"))
return}if(1===s){b.push(A.fU(a.u,4,"1&"))
return}throw A.c(A.hh("Unexpected extended operation "+A.p(s)))},
ri(a,b){var s=b.splice(a.p)
A.rm(a.u,a.e,s)
a.p=b.pop()
return s},
dI(a,b,c){if(typeof c=="string")return A.fT(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vW(a,b,c)}else return c},
rm(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dI(a,b,c[s])},
vX(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dI(a,b,c[s])},
vW(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.hh("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.hh("Bad index "+c+" for "+b.n(0)))},
yh(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ar(a,b,null,c,null)
r.set(c,s)}return s},
ar(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dO(d))return!0
s=b.w
if(s===4)return!0
if(A.dO(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ar(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.T){if(q===7)return A.ar(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.ar(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ar(a,b.x,c,d,e))return!1
return A.ar(a,A.pp(a,b),c,d,e)}if(s===6)return A.ar(a,p,c,d,e)&&A.ar(a,b.x,c,d,e)
if(q===7){if(A.ar(a,b,c,d.x,e))return!0
return A.ar(a,b,c,A.pp(a,d),e)}if(q===6)return A.ar(a,b,c,p,e)||A.ar(a,b,c,d.x,e)
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
if(!A.ar(a,j,c,i,e)||!A.ar(a,i,e,j,c))return!1}return A.rV(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.rV(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.x5(a,b,c,d,e)}if(o&&q===10)return A.xa(a,b,c,d,e)
return!1},
rV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ar(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.ar(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ar(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ar(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.ar(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
x5(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fV(a,b,r[o])
return A.rE(a,p,null,c,d.y,e)}return A.rE(a,b.y,null,c,d.y,e)},
rE(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ar(a,b[s],d,e[s],f))return!1
return!0},
xa(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ar(a,r[s],c,q[s],e))return!1
return!0},
eH(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.dO(a))if(s!==6)r=s===7&&A.eH(a.x)
return r},
dO(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
rA(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
nX(a){return a>0?new Array(a):v.typeUniverse.sEA},
bQ:function bQ(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jd:function jd(){this.c=this.b=this.a=null},
jA:function jA(a){this.a=a},
jb:function jb(){},
fR:function fR(a){this.a=a},
vM(){var s,r,q
if(self.scheduleImmediate!=null)return A.xO()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eG(new A.no(s),1)).observe(r,{childList:true})
return new A.nn(s,r,q)}else if(self.setImmediate!=null)return A.xP()
return A.xQ()},
vN(a){self.scheduleImmediate(A.eG(new A.np(t.M.a(a)),0))},
vO(a){self.setImmediate(A.eG(new A.nq(t.M.a(a)),0))},
vP(a){A.pr(B.cI,t.M.a(a))},
pr(a,b){return A.vZ(a.a/1000|0,b)},
vZ(a,b){var s=new A.nQ()
s.iw(a,b)
return s},
b1(a){return new A.j1(new A.ah($.aa,a.i("ah<0>")),a.i("j1<0>"))},
b0(a,b){a.$2(0,null)
b.b=!0
return b.a},
a7(a,b){A.wA(a,b)},
b_(a,b){b.cW(a)},
aZ(a,b){b.cX(A.ab(a),A.cb(a))},
wA(a,b){var s,r,q=new A.o1(b),p=new A.o2(b)
if(a instanceof A.ah)a.eW(q,p,t.z)
else{s=t.z
if(a instanceof A.ah)a.dR(q,p,s)
else{r=new A.ah($.aa,t.d)
r.a=8
r.c=a
r.eW(q,p,s)}}},
b2(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.aa.hG(new A.oB(s),t.H,t.S,t.z)},
rn(a,b,c){return 0},
k8(a){var s
if(t.V.b(a)){s=a.gbg()
if(s!=null)return s}return B.S},
pb(a){var s
a.a(null)
s=new A.ah($.aa,a.i("ah<0>"))
s.cC(null)
return s},
uF(a,b,c){var s=new A.ah($.aa,c.i("ah<0>"))
A.vu(a,new A.kW(b,s,c))
return s},
kX(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ah($.aa,b.i("ah<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.kZ(i,h,g,f)
try{for(n=J.L(a),m=t.b;n.m();){r=n.gp()
q=i.b
r.dR(new A.kY(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bN(A.f([],b.i("q<0>")))
return n}i.a=A.bY(n,null,!1,b.i("0?"))}catch(l){p=A.ab(l)
o=A.cb(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.pT(m,k)
m=new A.ax(m,k==null?A.k8(m):k)
n.bJ(m)
return n}else{i.d=p
i.c=o}}return f},
pT(a,b){if($.aa===B.r)return null
return null},
x1(a,b){if($.aa!==B.r)A.pT(a,b)
if(b==null)if(t.V.b(a)){b=a.gbg()
if(b==null){A.qR(a,B.S)
b=B.S}}else b=B.S
else if(t.V.b(a))A.qR(a,b)
return new A.ax(a,b)},
nx(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.d;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.vq()
b.bJ(new A.ax(new A.bM(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eB(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bk()
b.bM(o.a)
A.dC(b,p)
return}b.a^=2
A.jP(null,null,b.b,t.M.a(new A.ny(o,b)))},
dC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.q0(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dC(d.a,c)
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
A.q0(j.a,j.b)
return}g=$.aa
if(g!==h)$.aa=h
else g=null
c=c.c
if((c&15)===8)new A.nC(q,d,n).$0()
else if(o){if((c&1)!==0)new A.nB(q,j).$0()}else if((c&2)!==0)new A.nA(d,q).$0()
if(g!=null)$.aa=g
c=q.c
if(c instanceof A.ah){p=q.a.$ti
p=p.i("bj<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bT(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.nx(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bT(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
xl(a,b){var s
if(t.ng.b(a))return b.hG(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.c(A.au(a,"onError",u.c))},
xg(){var s,r
for(s=$.eB;s!=null;s=$.eB){$.h8=null
r=s.b
$.eB=r
if(r==null)$.h7=null
s.a.$0()}},
xv(){$.pU=!0
try{A.xg()}finally{$.h8=null
$.pU=!1
if($.eB!=null)$.qh().$1(A.th())}},
td(a){var s=new A.j2(a),r=$.h7
if(r==null){$.eB=$.h7=s
if(!$.pU)$.qh().$1(A.th())}else $.h7=r.b=s},
xr(a){var s,r,q,p=$.eB
if(p==null){A.td(a)
$.h8=$.h7
return}s=new A.j2(a)
r=$.h8
if(r==null){s.b=p
$.eB=$.h8=s}else{q=r.b
s.b=q
$.h8=r.b=s
if(q==null)$.h7=s}},
yL(a,b){A.dM(a,"stream",t.K)
return new A.jy(b.i("jy<0>"))},
vu(a,b){var s=$.aa
if(s===B.r)return A.pr(a,t.M.a(b))
return A.pr(a,t.M.a(s.f5(b)))},
q0(a,b){A.xr(new A.ou(a,b))},
t8(a,b,c,d,e){var s,r=$.aa
if(r===c)return d.$0()
$.aa=c
s=r
try{r=d.$0()
return r}finally{$.aa=s}},
xp(a,b,c,d,e,f,g){var s,r=$.aa
if(r===c)return d.$1(e)
$.aa=c
s=r
try{r=d.$1(e)
return r}finally{$.aa=s}},
xo(a,b,c,d,e,f,g,h,i){var s,r=$.aa
if(r===c)return d.$2(e,f)
$.aa=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aa=s}},
jP(a,b,c,d){t.M.a(d)
if(B.r!==c){d=c.f5(d)
d=d}A.td(d)},
no:function no(a){this.a=a},
nn:function nn(a,b,c){this.a=a
this.b=b
this.c=c},
np:function np(a){this.a=a},
nq:function nq(a){this.a=a},
nQ:function nQ(){},
nR:function nR(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=!1
this.$ti=b},
o1:function o1(a){this.a=a},
o2:function o2(a){this.a=a},
oB:function oB(a){this.a=a},
bt:function bt(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
c8:function c8(a,b){this.a=a
this.$ti=b},
ax:function ax(a,b){this.a=a
this.b=b},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
kZ:function kZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kY:function kY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j5:function j5(){},
fx:function fx(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ah:function ah(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
nu:function nu(a,b){this.a=a
this.b=b},
nz:function nz(a,b){this.a=a
this.b=b},
ny:function ny(a,b){this.a=a
this.b=b},
nw:function nw(a,b){this.a=a
this.b=b},
nv:function nv(a,b){this.a=a
this.b=b},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
nD:function nD(a,b){this.a=a
this.b=b},
nE:function nE(a){this.a=a},
nB:function nB(a,b){this.a=a
this.b=b},
nA:function nA(a,b){this.a=a
this.b=b},
j2:function j2(a){this.a=a
this.b=null},
jy:function jy(a){this.$ti=a},
h1:function h1(){},
jr:function jr(){},
nO:function nO(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
rh(a,b){var s=a[b]
return s===a?null:s},
pA(a,b,c){if(c==null)a[b]=a
else a[b]=c},
pz(){var s=Object.create(null)
A.pA(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
qK(a,b){return new A.by(a.i("@<0>").D(b).i("by<1,2>"))},
U(a,b,c){return b.i("@<0>").D(c).i("pf<1,2>").a(A.tj(a,new A.by(b.i("@<0>").D(c).i("by<1,2>"))))},
x(a,b){return new A.by(a.i("@<0>").D(b).i("by<1,2>"))},
pg(a){return new A.bB(a.i("bB<0>"))},
a4(a){return new A.bB(a.i("bB<0>"))},
as(a,b){return b.i("qL<0>").a(A.y5(a,new A.bB(b.i("bB<0>"))))},
pB(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jj(a,b,c){var s=new A.dH(a,b,c.i("dH<0>"))
s.c=a.e
return s},
e7(a,b){var s=J.L(a.a)
if(new A.M(s,a.b,a.$ti.i("M<1>")).m())return s.gp()
return null},
aU(a,b,c){var s=A.qK(b,c)
a.ac(0,new A.lS(s,b,c))
return s},
lT(a,b){var s,r,q=A.pg(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.k(0,b.a(a[r]))
return q},
ph(a,b){var s=A.pg(b)
s.J(0,a)
return s},
uY(a,b){var s=t.bP
return J.qj(s.a(a),s.a(b))},
pi(a){var s,r
if(A.qd(a))return"{...}"
s=new A.aO("")
try{r={}
B.a.k($.bw,a)
s.a+="{"
r.a=!0
a.ac(0,new A.lV(r,s))
s.a+="}"}finally{if(0>=$.bw.length)return A.d($.bw,-1)
$.bw.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
w8(){throw A.c(A.av("Cannot change an unmodifiable set"))},
fE:function fE(){},
nF:function nF(a){this.a=a},
fG:function fG(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dD:function dD(a,b){this.a=a
this.$ti=b},
fF:function fF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
K:function K(){},
V:function V(){},
lU:function lU(a){this.a=a},
lV:function lV(a,b){this.a=a
this.b=b},
fH:function fH(a,b){this.a=a
this.$ti=b},
fI:function fI(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fW:function fW(){},
ea:function ea(){},
cP:function cP(a,b){this.a=a
this.$ti=b},
co:function co(){},
fP:function fP(){},
jB:function jB(){},
fs:function fs(a,b){this.a=a
this.$ti=b},
et:function et(){},
fX:function fX(){},
xi(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ab(r)
q=A.ac(String(s),null,null)
throw A.c(q)}q=A.o3(p)
return q},
o3(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jg(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.o3(a[s])
return a},
wp(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.tO()
else s=new Uint8Array(o)
for(r=J.aH(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
wo(a,b,c,d){var s=a?$.tN():$.tM()
if(s==null)return null
if(0===c&&d===b.length)return A.rz(s,b)
return A.rz(s,b.subarray(c,d))},
rz(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
ql(a,b,c,d,e,f){if(B.c.X(f,4)!==0)throw A.c(A.ac("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.c(A.ac("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.c(A.ac("Invalid base64 padding, more than two '=' characters",a,b))},
qH(a,b,c){return new A.f3(a,b)},
wI(a){return a.C()},
vQ(a,b){return new A.nI(a,[],A.xX())},
vR(a,b,c){var s,r=new A.aO(""),q=A.vQ(r,b)
q.cp(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
wq(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jg:function jg(a,b){this.a=a
this.b=b
this.c=null},
nH:function nH(a){this.a=a},
jh:function jh(a){this.a=a},
nW:function nW(){},
nV:function nV(){},
hj:function hj(){},
kk:function kk(){},
d3:function d3(){},
hw:function hw(){},
hG:function hG(){},
f3:function f3(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
i4:function i4(){},
lL:function lL(a){this.b=a},
lK:function lK(a){this.a=a},
nJ:function nJ(){},
nK:function nK(a,b){this.a=a
this.b=b},
nI:function nI(a,b,c){this.c=a
this.a=b
this.b=c},
iQ:function iQ(){},
n8:function n8(a){this.a=a},
nU:function nU(a){this.a=a
this.b=16
this.c=0},
yd(a){var s=A.mf(a,null)
if(s!=null)return s
throw A.c(A.ac(a,null,null))},
uA(a,b){a=A.an(a,new Error())
if(a==null)a=A.ex(a)
a.stack=b.n(0)
throw a},
bY(a,b,c,d){var s,r=c?J.qC(a,d):J.qB(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
az(a,b,c){var s,r=A.f([],c.i("q<0>"))
for(s=J.L(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.f(a.slice(0),b.i("q<0>"))
s=A.f([],b.i("q<0>"))
for(r=J.L(a);r.m();)B.a.k(s,r.gp())
return s},
ap(a,b){var s=A.az(a,!1,b)
s.$flags=3
return s},
r_(a,b,c){var s,r
A.iu(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.c(A.aM(c,b,null,"end",null))
if(s===0)return""}r=A.vs(a,b,c)
return r},
vs(a,b,c){var s=a.length
if(b>=s)return""
return A.vg(a,b,c==null||c>s?s:c)},
qZ(a,b,c){var s=J.L(b)
if(!s.m())return a
if(c.length===0){do a+=A.p(s.gp())
while(s.m())}else{a+=A.p(s.gp())
while(s.m())a=a+c+A.p(s.gp())}return a},
n5(){var s,r,q=A.v5()
if(q==null)throw A.c(A.av("'Uri.base' is not supported"))
s=$.r5
if(s!=null&&q===$.r4)return s
r=A.vA(q)
$.r5=r
$.r4=q
return r},
vq(){return A.cb(new Error())},
ug(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qr(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hy(a){if(a>=10)return""+a
return"0"+a},
uz(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.c(A.au(b,"name","No enum value with that name"))},
hH(a){if(typeof a=="number"||A.bH(a)||a==null)return J.dR(a)
if(typeof a=="string")return JSON.stringify(a)
return A.qQ(a)},
uB(a,b){A.dM(a,"error",t.K)
A.dM(b,"stackTrace",t.l)
A.uA(a,b)},
hh(a){return new A.hg(a)},
w(a,b){return new A.bM(!1,null,b,a)},
au(a,b,c){return new A.bM(!0,a,b,c)},
qS(a){var s=null
return new A.ed(s,s,!1,s,s,a)},
qT(a,b){return new A.ed(null,null,!0,a,b,"Value not in range")},
aM(a,b,c,d,e){return new A.ed(b,c,!0,a,d,"Invalid value")},
fg(a,b,c){if(0>a||a>c)throw A.c(A.aM(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aM(b,a,c,"end",null))
return b}return c},
iu(a,b){if(a<0)throw A.c(A.aM(a,0,null,b,null))
return a},
lv(a,b,c,d){return new A.hV(b,!0,a,d,"Index out of range")},
av(a){return new A.ft(a)},
r2(a){return new A.iL(a)},
l(a){return new A.ei(a)},
ao(a){return new A.hu(a)},
e2(a){return new A.nt(a)},
ac(a,b,c){return new A.J(a,b,c)},
uR(a,b,c){var s,r
if(A.qd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.a.k($.bw,a)
try{A.xe(a,s)}finally{if(0>=$.bw.length)return A.d($.bw,-1)
$.bw.pop()}r=A.qZ(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pc(a,b,c){var s,r
if(A.qd(a))return b+"..."+c
s=new A.aO(b)
B.a.k($.bw,a)
try{r=s
r.a=A.qZ(r.a,a,", ")}finally{if(0>=$.bw.length)return A.d($.bw,-1)
$.bw.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
xe(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.p(l.gp())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.k(b,A.p(p))
return}r=A.p(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.p(p)
r=A.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
cm(a,b,c,d){var s
if(B.k===c){s=J.bh(a)
b=J.bh(b)
return A.mW(A.cp(A.cp($.jW(),s),b))}if(B.k===d){s=J.bh(a)
b=J.bh(b)
c=J.bh(c)
return A.mW(A.cp(A.cp(A.cp($.jW(),s),b),c))}s=J.bh(a)
b=J.bh(b)
c=J.bh(c)
d=J.bh(d)
d=A.mW(A.cp(A.cp(A.cp(A.cp($.jW(),s),b),c),d))
return d},
v3(a){var s,r,q=$.jW()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.cp(q,J.bh(a[r]))
return A.mW(q)},
pq(a,b){return new A.fs(A.ph(a,b),b.i("fs<0>"))},
vA(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.r3(a4<a4?B.b.B(a5,0,a4):a5,5,a3).ghL()
else if(s===32)return A.r3(B.b.B(a5,5,a4),0,a3).ghL()}r=A.bY(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.tc(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.tc(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.a0(a5,"\\",n))if(p>0)h=B.b.a0(a5,"\\",p-1)||B.b.a0(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.a0(a5,"..",n)))h=m>n+2&&B.b.a0(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.a0(a5,"file",0)){if(p<=0){if(!B.b.a0(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.B(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bc(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a0(a5,"http",0)){if(i&&o+3===n&&B.b.a0(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bc(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.a0(a5,"https",0)){if(i&&o+4===n&&B.b.a0(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bc(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.ju(a4<a5.length?B.b.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.wi(a5,0,q)
else{if(q===0)A.eu(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.wj(a5,c,p-1):""
a=A.we(a5,p,o,!1)
i=o+1
if(i<n){a0=A.mf(B.b.B(a5,i,n),a3)
d=A.wg(a0==null?A.k(A.ac("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.wf(a5,n,m,a3,j,a!=null)
a2=m<l?A.wh(a5,m+1,l,a3):a3
return A.w9(j,b,a,d,a1,a2,l<a4?A.wd(a5,l+1,a4):a3)},
r7(a){var s=t.N
return B.a.bw(A.f(a.split("&"),t.s),A.x(s,s),new A.n7(B.aT),t.G)},
iP(a,b,c){throw A.c(A.ac("Illegal IPv4 address, "+a,b,c))},
vx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iP("each part must be in the range 0..255",a,r)}A.iP("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iP(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.b3(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iP(j,a,q)
p=l}A.iP("IPv4 address should contain exactly 4 parts",a,q)},
vy(a,b,c){var s
if(b===c)throw A.c(A.ac("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.vz(a,b,c)
if(s!=null)throw A.c(s)
return!1}A.r6(a,b,c)
return!0},
vz(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.J(n,a,q)
r=q
break}return new A.J("Unexpected character",a,q-1)}if(r-1===b)return new A.J(n,a,r)
return new A.J("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.J("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.J("Invalid IPvFuture address character",a,r)}},
r6(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.n6(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.vx(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cT(l,8)
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
B.bx.i_(s,a0,16,s,a)
B.bx.kw(s,a,a0,0)}}return s},
w9(a,b,c,d,e,f,g){return new A.fY(a,b,c,d,e,f,g)},
rt(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
eu(a,b,c){throw A.c(A.ac(c,a,b))},
wg(a,b){var s=A.rt(b)
if(a===s)return null
return a},
we(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.eu(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.wb(a,q,r)
if(o<r){n=o+1
p=A.ry(a,B.b.a0(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.vy(a,q,o)
l=B.b.B(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cf(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.ry(a,B.b.a0(a,"25",n)?o+3:n,c,"%25")}else p=""
A.r6(a,b,o)
return"["+B.b.B(a,b,o)+p+"]"}}return A.wl(a,b,c)},
wb(a,b,c){var s=B.b.cf(a,"%",b)
return s>=b&&s<c?s:c},
ry(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aO(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.pF(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aO("")
l=h.a+=B.b.B(a,q,r)
if(m)n=B.b.B(a,r,r+3)
else if(n==="%")A.eu(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aO("")
if(q<r){h.a+=B.b.B(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.B(a,q,r)
if(h==null){h=new A.aO("")
m=h}else m=h
m.a+=i
l=A.pE(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.B(a,b,c)
if(q<c){i=B.b.B(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
wl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.pF(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aO("")
k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.B(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aO("")
if(q<r){p.a+=B.b.B(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.eu(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aO("")
l=p}else l=p
l.a+=k
j=A.pE(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.B(a,b,c)
if(q<c){k=B.b.B(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
wi(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.rv(a.charCodeAt(b)))A.eu(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.eu(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.B(a,b,c)
return A.wa(q?a.toLowerCase():a)},
wa(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
wj(a,b,c){return A.fZ(a,b,c,16,!1,!1)},
wf(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.fZ(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.V(q,"/"))q="/"+q
return A.wk(q,e,f)},
wk(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.V(a,"/")&&!B.b.V(a,"\\"))return A.wm(a,!s||c)
return A.wn(a)},
wh(a,b,c,d){return A.fZ(a,b,c,256,!0,!1)},
wd(a,b,c){return A.fZ(a,b,c,256,!0,!1)},
pF(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.oJ(r)
o=A.oJ(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ag(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
pE(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.jw(a,6*p)&63|q
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
o+=3}}return A.r_(s,0,null)},
fZ(a,b,c,d,e,f){var s=A.rx(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
rx(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.pF(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.eu(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.pE(n)}if(o==null){o=new A.aO("")
k=o}else k=o
k.a=(k.a+=B.b.B(a,p,q))+l
if(typeof m!=="number")return A.jU(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.B(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
rw(a){if(B.b.V(a,"."))return!0
return B.b.ce(a,"/.")!==-1},
wn(a){var s,r,q,p,o,n,m
if(!A.rw(a))return a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.aY(s,"/")},
wm(a,b){var s,r,q,p,o,n
if(!A.rw(a))return!b?A.ru(a):a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gP(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.ru(s[0]))}return B.a.aY(s,"/")},
ru(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.rv(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.bH(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
wc(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.c(A.w("Invalid URL encoding",null))}}return r},
pG(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aT===d)return B.b.B(a,b,c)
else p=new A.hs(B.b.B(a,b,c))
else{p=A.f([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.c(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.c(A.w("Truncated URI",null))
B.a.k(p,A.wc(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.J.a(p)
return B.fN.kb(p)},
rv(a){var s=a|32
return 97<=s&&s<=122},
r3(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.f([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.c(A.ac(k,a,r))}}if(q<0&&r>b)throw A.c(A.ac(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gP(j)
if(p!==44||r!==n+7||!B.b.a0(a,"base64",n+1))throw A.c(A.ac("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.cl.kU(a,m,s)
else{l=A.rx(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bc(a,m,s,l)}return new A.n4(a,j,c)},
tc(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a},
ja:function ja(){},
a6:function a6(){},
hg:function hg(a){this.a=a},
cq:function cq(){},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hV:function hV(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ft:function ft(a){this.a=a},
iL:function iL(a){this.a=a},
ei:function ei(a){this.a=a},
hu:function hu(a){this.a=a},
ij:function ij(){},
fo:function fo(){},
nt:function nt(a){this.a=a},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
ai:function ai(){},
B:function B(){},
jz:function jz(){},
mR:function mR(){this.b=this.a=0},
aO:function aO(a){this.a=a},
n7:function n7(a){this.a=a},
n6:function n6(a){this.a=a},
fY:function fY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
j6:function j6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
m1:function m1(a){this.a=a},
am(a){var s
if(typeof a=="function")throw A.c(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jI,a)
s[$.eI()]=a
return s},
jI(a,b,c){t.gY.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
qb(a,b,c){return c.a(a[b])},
rR(a,b){return a[b]},
aG(a,b,c,d){return d.a(a[b].apply(a,c))},
rK(a,b,c,d){return d.a(a[b](c))},
aw(a,b){var s=new A.ah($.aa,b.i("ah<0>")),r=new A.fx(s,b.i("fx<0>"))
a.then(A.eG(new A.p2(r,b),1),A.eG(new A.p3(r),1))
return s},
t0(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cA(a){if(A.t0(a))return a
return new A.oE(new A.fG(t.mp)).$1(a)},
p2:function p2(a,b){this.a=a
this.b=b},
p3:function p3(a){this.a=a},
oE:function oE(a){this.a=a},
jf:function jf(){},
en:function en(){this.b=this.a=0},
mk:function mk(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ml:function ml(){},
dp:function dp(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
kq:function kq(a,b){this.a=a
this.b=b},
kr:function kr(){this.a=null
this.d=0},
ip:function ip(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
dY:function dY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hK:function hK(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
kR:function kR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dc(a,b){return new A.l6(a,b)},
cn:function cn(){},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a,b){this.a=a
this.b=b},
l6:function l6(a,b){this.a=a
this.b=b},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(a,b){this.a=a
this.c=b},
io:function io(a,b,c){this.b=a
this.d=b
this.e=c},
eh:function eh(){},
pk(a,b,c,d,e,f,g,h,i){return new A.cI(c,a,g,f,e,h,i,b)},
hf:function hf(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h},
cs:function cs(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
n9:function n9(){},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m4(a){var s,r=t.N,q=A.as(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.J(0,A.as(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.J(0,A.as(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.J(0,A.as(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.J(0,A.as(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.k(0,"gradeOutput")
if(p.v(0,"ps1"))q.k(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.m3(A.pq(q,r),s)},
m3:function m3(a,b){this.a=a
this.b=b},
m5:function m5(){},
mc:function mc(a){this.b=a},
ix:function ix(){this.a=null
this.c=0
this.d=!1},
e0:function e0(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c,d,e,f,g,h,i,j){var _=this
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
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dr:function dr(a,b){this.a=a
this.b=b},
kT:function kT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
uZ(){return new A.i9(new A.c1(new A.lX(),A.f([],t.dz),A.f([],t.t),t.kk))},
i9:function i9(a){this.a=a},
lX:function lX(){},
te(a){var s=4
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
case 3:s=A.k(A.av("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
wG(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.ao[r]
if(A.te(q.a)===b)s+=q.c}return s},
v_(a){return new A.lZ(a,new A.c1(new A.m_(),A.f([],t.jk),A.f([],t.t),t.ll),A.x(t.S,t.mL))},
iN:function iN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lZ:function lZ(a,b,c){this.a=a
this.b=b
this.c=c},
m_:function m_(){},
m0:function m0(){},
vt(a){var s=new A.iJ(a,new A.c1(new A.n_(),A.f([],t.mQ),A.f([],t.t),t.ox),A.x(t.S,t._))
s.d=s.ek()
return s},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
n_:function n_(){},
n1:function n1(){},
n0:function n0(){},
xR(a){var s,r,q,p,o=A.f([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
B.a.k(o,new A.de(p,A.f([p],r)))
continue}return o},
de:function de(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
kN:function kN(){},
kO:function kO(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
hJ:function hJ(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
kS:function kS(a,b){this.a=a
this.b=b
this.c=0},
pl(){return!0},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(){},
m8:function m8(){},
bO:function bO(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ee:function ee(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
eM:function eM(a){this.b=a},
mi:function mi(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aL:function aL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mm:function mm(){},
aK:function aK(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
mo:function mo(a,b){this.a=a
this.b=b},
ms:function ms(){},
mr:function mr(){},
mq:function mq(a){this.a=a},
mp:function mp(a,b,c){this.a=a
this.b=b
this.c=c},
mn:function mn(a,b){this.a=a
this.b=b},
vk(a){return new A.fh(a,new A.c1(new A.mu(),A.f([],t.n_),A.f([],t.t),t.mo))},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b){this.a=a
this.b=b},
mu:function mu(){},
rO(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.wN(a,r,s,a.x.gp().a.b.a).b},
wN(a,b,c,d){var s,r,q,p,o=new A.ok(a),n=new A.ol(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.xT(b,l,m,s.c.gld(),new A.o6(n),new A.o7(n),new A.o8(a),new A.oc(a),new A.od(n),new A.oe(n),new A.of(a),r.glf(),o,new A.og(n),new A.oh(n),new A.oi(n),new A.oj(n),new A.o9(n),new A.oa(a),new A.ob(n),c.c,c.b)}else q=new A.hI(A.f([new A.j_(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.fe(b,u.l,u.q,l,B.M)],t.o5))
a.r.toString
p=q.jW(B.C,new A.mm(),!1,new A.jo())
o=p.a.b
if(o.length!==0)throw A.c(A.l("safe renderer graph is invalid: "+A.p(o)))
return new A.nP(q,p)},
wO(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.c(A.l("renderer graph is not initialized"))
s=a4.gdG()
r=a5.a
q=A.xZ(A.uE(r.c),s,-1).a
p=A.f([],t.mX)
o=A.f([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.c,k=0;k<q.length;q.length===s||(0,A.r)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.ah)B.a.k(o,new A.aq(new A.b4(m.hJ(i.c.a).c,h),j,l))
else B.a.k(p,new A.aq(new A.b7(B.f8,i.b,i.a,h),j,n))}g=new A.jc(A.xR(A.yt(p)),A.ys(o),r,a5.b,a5.c)
f=new A.hB(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.r)(s),++k){e=s[k]
d=A.x(n,m)
for(l=e.gW().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.r)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
a0=a.b.h(0,b)
if(a0==null)A.k(A.l("resource is not in candidate: "+b))
d.l(0,b,new A.ho(a0))}e.aa(new A.hn(d,f,g))}},
qX(a){return new A.mJ(a,new A.kq(new A.kr(),new A.ix()),new A.kS(A.f([],t.c8),B.ds),A.f([],t.oZ),B.au)},
ok:function ok(a){this.a=a},
ol:function ol(a,b){this.a=a
this.b=b},
oi:function oi(a){this.a=a},
oc:function oc(a){this.a=a},
oh:function oh(a){this.a=a},
o8:function o8(a){this.a=a},
o9:function o9(a){this.a=a},
oj:function oj(a){this.a=a},
og:function og(a){this.a=a},
o6:function o6(a){this.a=a},
o7:function o7(a){this.a=a},
od:function od(a){this.a=a},
oe:function oe(a){this.a=a},
of:function of(a){this.a=a},
ob:function ob(a){this.a=a},
oa:function oa(a){this.a=a},
nP:function nP(a,b){this.a=a
this.b=b},
jo:function jo(){},
jc:function jc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mD:function mD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
mJ:function mJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
mK:function mK(){},
yt(a){var s,r,q=A.N(a,t.p)
B.a.a_(q,new A.p7())
s=A.I(q)
r=s.i("R<1,bm>")
s=A.N(new A.R(q,s.i("bm(1)").a(new A.p8()),r),r.i("a1.E"))
s.$flags=1
return s},
ys(a){var s,r,q=A.N(a,t.c)
B.a.a_(q,new A.p5())
s=A.I(q)
r=s.i("R<1,bm>")
s=A.N(new A.R(q,s.i("bm(1)").a(new A.p6()),r),r.i("a1.E"))
s.$flags=1
return s},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
p7:function p7(){},
p8:function p8(){},
p5:function p5(){},
p6:function p6(){},
xZ(a,b,c){var s,r,q,p,o,n,m,l=A.f([],t.bH)
for(s=b.$ti,r=new A.bt(b.a(),s.i("bt<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.c(A.w("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.ln(n)===B.b5){++p
continue}B.a.k(l,o)}return new A.kt(l)},
kt:function kt(a){this.a=a},
cc(a){var s,r,q,p,o,n,m,l,k
for(s=J.L(a),r=B.fQ,q=B.fR,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.z(m,k,Math.min(r.c,o))
q=new A.z(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.c(A.w("Aabb.fromPoints requires at least one point",null))
return new A.hd(r,q)},
hd:function hd(a,b){this.a=a
this.b=b},
uE(a){var s,r,q,p,o,n,m=a.a,l=new A.kV(),k=m.length
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
return new A.kU(A.f([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
dm:function dm(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
kU:function kU(a){this.a=a},
kV:function kV(){},
qM(a){if(a.length!==16)throw A.c(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.cl(new Float32Array(A.a2(a)))},
pj(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cl(q)},
qN(a,b,c){var s=b.ga4(),r=s.aQ(c).ga4(),q=r.aQ(s),p=new Float32Array(16)
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
p[12]=-r.br(a)
p[13]=-q.br(a)
p[14]=s.br(a)
p[15]=1
return new A.cl(p)},
cl:function cl(a){this.a=a},
lW:function lW(){},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hm:function hm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j7:function j7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fB:function fB(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c,d,e,f,g,h,i,j){var _=this
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
j8:function j8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hE:function hE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
j9:function j9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hS:function hS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
je:function je(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ho:function ho(a){this.b=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qY(a){var s=A.qN(B.F,B.a4,Math.abs(0)<0.99?B.fP:B.F)
return new A.du(A.pj(1,1,B.c.a1(1,0.1,3),0.05).U(0,s))},
du:function du(a){this.a=a},
iA:function iA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
js:function js(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xT(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.c(A.au(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.qY(B.cE)
c=t.o5
l=A.f([],c)
if(r){B.a.J(l,A.f([new A.eK(a,j,i,b,h,h,B.cg,!0,B.M,B.bL,b1),new A.eK(a,j,i,b,g,g,B.hq,!1,B.bL,B.bM,a2),new A.hm(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.p9()}else k=B.M
if(q){B.a.J(l,A.f([new A.eP(a,j,i,b,f,f,B.ch,k,B.bE,b1),new A.eP(a,j,i,b,e,e,B.hr,B.bE,B.bF,a6),new A.hE(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bG}if(p){B.a.k(l,new A.hS(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bK}if(o){B.a.k(l,new A.is(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bN}if(n){B.a.k(l,new A.iS(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.aw}c=A.f([new A.hA(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.iE(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.iD(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.iA(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.oC(d)))
c.push(new A.iB(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 toLight=normalize(uLightPosition-vWorldPos);\n  float ndotl=max(dot(n,toLight),0.);\n  float shadow=shadowFactor(ndotl);\n  float attenuation=lightAttenuation(vWorldPos);\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+vec3(ndotl*shadow*attenuation),0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.oD(d,m),a5,b4,s,b9,b8))
B.a.J(c,l)
c.push(new A.fe(a,j,u.q,b,k))
return new A.hI(c)},
oC:function oC(a){this.a=a},
oD:function oD(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jt:function jt(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jw:function jw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iD:function iD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jv:function jv(a,b,c,d,e,f){var _=this
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
jC:function jC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(){},
iz(a,b){return new A.fn(a,b)},
hO:function hO(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
db:function db(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eW:function eW(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
E:function E(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
hB:function hB(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b},
l5:function l5(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
er:function er(a,b){this.a=a
this.b=b},
cV:function cV(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
qt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eQ(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
hk:function hk(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aC:function aC(a,b){this.a=a
this.b=b},
nk:function nk(){this.a=null},
vF(a){var s=new A.iZ(a,B.f,new A.nk())
s.iv(a)
return s},
bR(a,b){var s,r
if(a.b!==B.f)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
vJ(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
vI(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
ra(a,b){var s
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
vG(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bc(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.f
r=s.kg(b)
if(r.a===0)return
if(r.v(0,B.aB)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aC))a.a.depthFunc(A.vJ(a,b.b))
if(r.v(0,B.aD))a.a.depthMask(b.c)
if(r.v(0,B.aH)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aI))a.a.cullFace(A.vI(a,b.x))
if(r.v(0,B.c9)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aE)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aF))a.a.blendFunc(A.ra(a,b.e),A.ra(a,b.f))
if(r.v(0,B.aG))a.a.blendEquation(A.vG(a,b.r))
if(r.v(0,B.c7))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.c8)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
vH(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
el(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.vH(a,b))},
cR(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.e(b.a)
a.a.useProgram(s)
a.e=s},
A(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.c(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.h(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.h4(c.b))
break
case 1:p=t.D.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.D.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
m=p[1]
if(2>=o)return A.d(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:r.uniformMatrix4fv(q,!1,t.D.a(c.b))
break
case 4:r.uniform1i(q,A.a(c.b))
break}},
bS(a,b){if(a.b!==B.f)A.k(A.l(u.k))
a.a.bindVertexArray(A.e(b.a))},
br(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.h0){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.h_){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.c(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.c(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
dy(a,b,c){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
pt(a,b,c,d){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
pu(a,b,c){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
pv(a,b,c,d){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
A.aG(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
vK(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
rd(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.h(s.createBuffer())
if(r==null)throw A.c(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b6?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.vK(a,b.b))
return new A.cX(r)},
rb(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
rc(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
pw(a,b){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.h(s.createTexture())
if(r==null)throw A.c(A.l("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.a(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.aG(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aG(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.rb(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.rb(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.rc(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.rc(a,p))
return new A.cX(new A.h0(r,l,k,q,!1))},
px(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.c(A.w("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.c(A.w("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aG(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aG(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
py(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
c6(a){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.h(a.a.createVertexArray())
if(s==null)throw A.c(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.cX(s)},
re(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.h(p.createShader(b))
if(o==null)throw A.c(A.iz(b===A.qb(A.rR(A.tu(),r),q,t.S)?B.c2:B.c3,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a8(A.cA(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bG(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.c(A.iz(b===A.qb(A.rR(A.tu(),r),q,t.S)?B.c2:B.c3,s))}return o},
vL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.l(u.k))
q=v.G
s=A.re(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.re(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.h(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.c(B.fu)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a8(A.cA(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bG(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iz(B.c4,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iz(B.c5,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.h(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iz(B.c5,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.cX(n)},
cX:function cX(a){this.a=a},
h0:function h0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h_:function h_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iZ:function iZ(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
ni:function ni(a){this.a=a},
nj:function nj(a){this.a=a},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k9(a,b){var s=0,r=A.b1(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$k9=A.b2(function(a0,a1){if(a0===1)return A.aZ(a1,r)
for(;;)switch(s){case 0:p=A.e(new v.G.AudioContext())
o=t.m
n=A.x(t.N,o)
m=A.e(p.createGain())
l=A.e(p.createGain())
k=A.e(p.createGain())
j=A.e(p.createGain())
i=A.e(p.createGain())
h=A.e(p.createGain())
g=A.e(p.createGain())
f=A.e(p.createGain())
e=A.e(p.createGain())
d=A.e(p.createConvolver())
c=new A.hi(p,b,m,l,k,j,i,h,g,f,e,d,n,B.aU,A.x(o,t.iL))
c.ik(p,b)
p=A.o(a).i("X<1,2>")
s=3
return A.a7(A.kX(A.i7(new A.X(a,p),p.i("bj<ai>(n.E)").a(new A.ka(c)),p.i("n.E"),t.mj),t.b),$async$k9)
case 3:n=n.h(0,"ir-stone")
p=n==null?c.j3():n
d.buffer=p
q=c
s=1
break
case 1:return A.b_(q,r)}})
return A.b0($async$k9,r)},
hi:function hi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ax=null
_.ay=o
_.dy=_.dx=$},
ka:function ka(a){this.a=a},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
kQ:function kQ(a){this.a=a},
iH:function iH(a,b,c,d,e,f,g,h,i,j){var _=this
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
l3:function l3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
l4:function l4(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=0
this.$ti=b},
hW:function hW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
i8:function i8(a){this.a=a},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lY:function lY(a,b){this.a=a
this.b=b},
fp(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b3(a)
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
cN:function cN(a){this.a=a
this.b=0},
mt:function mt(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
mC:function mC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vl(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.qV(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.i0(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.jm(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.bY(800,0,!1,r)
p=new Float32Array(8064)
o=J.i0(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.jk(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.bY(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).ga4()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.mv(a,new A.l3(a,A.x(t.m,r)),b,c,A.a4(t.N),j,i,h,g,q,p,A.x(r,t.hX),o,n,m,B.el,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.i8(l),a,A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k))
k.ir(a,b,c)
return k},
mv:function mv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aq=a
_.aA=b
_.aU=c
_.aV=d
_.dr=_.h4=1
_.dD=_.dC=_.hm=_.hl=_.hk=_.hj=_.hi=_.hh=_.dB=_.dA=_.dz=_.dw=_.dv=_.du=_.dt=_.hg=_.hf=_.he=_.ds=_.hd=_.hc=_.hb=_.ha=_.h9=_.h8=_.h7=_.h6=_.h5=_.ab=$
_.c4=null
_.f8=e
_.fC=_.fB=_.fA=_.fz=_.fw=_.fv=_.fu=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.fj=_.fi=_.fh=_.fg=_.ff=_.fe=_.fd=_.fc=_.fb=_.fa=_.f9=_.c5=$
_.c6=0
_.d7=_.d6=_.d5=_.d4=_.d3=_.d2=_.d1=$
_.ca=_.c9=_.c8=_.c7=_.bs=_.aT=null
_.bt=$
_.fF=_.fE=_.fD=!1
_.kp=1
_.d8=f
_.d9=g
_.kq=h
_.fG=i
_.cb=0
_.fH=j
_.kr=k
_.da=0
_.dc=l
_.ks=1
_.dd=!1
_.bu=0
_.de=m
_.bv=0
_.fI=n
_.fJ=o
_.fM=_.fL=_.fK=1
_.fN=0.55
_.df=p
_.fO=q
_.dg=r
_.dh=s
_.di=a0
_.fP=_.dm=_.dl=_.dk=_.dj=0
_.fQ=null
_.fR=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.h_=_.dq=_.dn=_.fZ=_.fY=_.kv=_.ku=_.kt=_.fX=_.fW=_.fV=_.fU=_.fT=_.fS=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.h0=a7
_.h1=a8
_.h2=a9
_.h3=b0},
t2(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.a7(0,c).aQ(f.a7(0,c)).ga4(),r=A.ow(g)
return A.t5(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
hb(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b3(a)
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
t5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.hb(a,A.hb(a,A.hb(a,A.hb(a,A.hb(a,A.hb(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
ow(a){return new A.bs((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
wX(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aB(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.ae(),i=A.ae(),h=A.ae()
switch(B.c.X(o,6)){case 0:j.b=c
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
h.b=l}s=j.cR()
if(typeof s!=="number")return s.U()
s=B.d.aL(s*255)
r=i.cR()
if(typeof r!=="number")return r.U()
r=B.d.aL(r*255)
q=h.cR()
if(typeof q!=="number")return q.U()
return new A.bs(s,r,B.d.aL(q*255))},
fD:function fD(){},
jx:function jx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
jm:function jm(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jk:function jk(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mw:function mw(){},
mx:function mx(a){this.a=a},
my:function my(a){this.a=a},
nm:function nm(){},
mM:function mM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iR(a,b,c){return new A.b(a,b,c)},
r8(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(a){this.a=a},
uk(a,b,c){var s=new A.hF(a,c,null,b)
s.il(a,null,null,b,c)
return s},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
ux(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.e7(new A.Q(B.ew,t.gl.a(new A.kG(a)),t.ns),t.no)
return s==null?null:new A.e1(s)},
uw(a){if(a.a!==21)return null
if(a.e)return B.cL
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cM
return B.cK},
bx:function bx(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e1:function e1(a){this.a=a},
kG:function kG(a){this.a=a},
v4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.G(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.im(s,new A.b(o,n,m),q,p,l,j)
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
im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xw(a){var s,r,q,p=A.x(t.N,t.z)
for(s=a.gN(),s=s.gu(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.c(B.cY)
p.l(0,q,r.b)}return p},
jJ(a){var s,r,q,p,o,n=a.gO().bd(0)
B.a.Z(n)
s=t.z
r=A.x(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.l(0,o,A.rM(a.h(0,o)))}return A.d4(r,t.N,s)},
rM(a){var s
if(t.f.b(a))return A.jJ(A.xw(a))
if(t.j.b(a)){s=t.z
return A.ap(J.dQ(a,A.yp(),s),s)}if(a==null||A.bH(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dg)
return a}throw A.c(A.ac("presentation snapshot contains unsupported value "+J.dP(a).n(0),null,null))},
md:function md(a){this.a=a},
qW(a,b,c){var s=A.pL(b),r=A.pL(a)
if(c!==2)A.k(A.au(c,"version","unsupported save version"))
return new A.ef(c,s,r)},
pL(a){var s,r,q,p,o=A.o(a).i("ak<1>"),n=A.N(new A.ak(a,o),o.i("n.E"))
B.a.Z(n)
o=t.z
s=A.x(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.l(0,p,A.rL(a.h(0,p)))}return A.d4(s,t.N,o)},
rL(a){var s,r,q,p
if(t.f.b(a)){s=A.x(t.N,t.z)
for(r=a.gN(),r=r.gu(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.c(B.db)
s.l(0,p,q.b)}return A.pL(s)}if(t.j.b(a)){r=t.z
return A.ap(J.dQ(a,A.yr(),r),r)}if(a==null||A.bH(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dh)
return a}throw A.c(A.ac("save contains unsupported value "+J.dP(a).n(0),null,null))},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
mI:function mI(){},
ds:function ds(a,b){this.a=a
this.b=b},
qw(a,b,c,d,e,f,g){return new A.l_(a,b,c,d,e,f,g,A.f([],t.mc),A.f([],t.ag))},
qx(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aF(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.c(B.da)
r=e.h(0,"runSeed")
q=A.aF(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aF(p)||p<1||typeof o!="number")throw A.c(B.dk)
if(!isFinite(480))throw A.c(A.au(480,"daySeconds","must be finite and > 0"))
n=new A.hM(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ac("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.uW(a3,A.aU(a,s,m))
k=A.uh(l,A.aU(b,s,m),n)
j=A.qy(d)
A.uK(A.aU(a0,s,m)).jP(j)
m=A.aU(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bH(f))A.k(B.d_)
return A.qw(d,q,j,n,l,k,new A.hD(i,h,g,f))},
wM(a){var s
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
da:function da(a,b){this.a=a
this.b=b},
hL:function hL(){},
l0:function l0(a,b){this.a=a
this.b=b},
l_:function l_(a,b,c,d,e,f,g,h,i){var _=this
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
l1:function l1(a){this.a=a},
l2:function l2(){},
u4(a){var s,r,q,p,o,n,m="modelScale",l=A.jO(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.bF(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.c(B.d4)
s=A.cZ(l,"houseId")
r=A.cZ(l,"sourceRef")
q=J.dQ(A.jL(l,"rooms"),new A.kc(k),t.fS)
q=A.N(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.dQ(A.jL(l,"portals"),new A.kd(k),t.gE)
p=A.N(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.dQ(A.jL(l,"stairs"),new A.ke(),t.d2)
o=A.N(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.dQ(A.jL(l,"exteriorCells"),new A.kf(),t.N)
n=A.N(n,n.$ti.i("a1.E"))
n.$flags=1
return new A.kb(s,r,q,p,o)},
u5(a,b){var s=A.jO(a,"room"),r=A.cZ(s,"id"),q=A.tb(s.h(0,"origin"),"origin",b),p=A.tb(s.h(0,"size"),"size",b),o=J.dQ(A.jL(s,"windows"),new A.kh(b),t.lJ)
o=A.N(o,o.$ti.i("a1.E"))
o.$flags=1
return new A.dT(r,q,p,o)},
jO(a,b){return t.P.b(a)?a:A.h6(b+" is not an object")},
jL(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.h6(b+" is not a list")},
cZ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h6(b+" is not a string")},
h9(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.h6(b+" is not finite")},
xJ(a,b){var s,r
if(t.j.b(a)){s=J.aH(a)
s=s.gq(a)!==3||s.Y(a,new A.oA())}else s=!0
if(s)return A.h6(b+" is not a finite vec3")
s=A.f([],t.n)
for(r=J.L(a);r.m();)s.push(A.bF(r.gp()))
return s},
tb(a,b,c){var s,r,q,p=A.f([],t.n)
for(s=A.xJ(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
h6(a){return A.k(A.ac(a,null,null))},
kb:function kb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(){},
kf:function kf(){},
kg:function kg(a){this.a=a},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kh:function kh(a){this.a=a},
dV:function dV(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dS:function dS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dU:function dU(a){this.b=a},
oA:function oA(){},
hp:function hp(a,b){this.a=a
this.b=b
this.d=null},
kp:function kp(a){this.a=a},
ia:function ia(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lb:function lb(){this.b=0},
mE:function mE(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
aJ:function aJ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kI:function kI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kJ:function kJ(){},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(){},
ld:function ld(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b){this.a=a
this.b=b},
kK:function kK(){},
xS(a){var s,r,q,p=new A.ld(A.f([],t.oP),A.f([],t.t),A.x(t.N,t.S))
for(s=0;s<4;++s)A.wP(p,a,B.bq[s],10.5,10.5,8.03,0.42)
p.t(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.t(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.t(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.t(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.t(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.t(1,11,0,11,-0.5,-0.35,10.58)
p.t(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.t(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aJ(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aJ(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.b4(r,new A.aJ(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b4(r,q,new A.aJ(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aJ(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aJ(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b4(q,new A.aJ(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b4(q,r,new A.aJ(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.t(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.xn(p,10.5,10.5,8.03,10.88)
A.wD(p,10.5,10.5,10.88)
A.wL(p,10.5,10.5,8.03)
A.wS(p,a,10.5)
A.xs(p,10.5,10.5)
A.wB(p,10.5)
return p.jU()},
wP(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.f([],t.jX)
for(s=b6.b,r=s.length,q=B.w!==b7,p=B.i!==b7,o=B.m===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.aS(k)
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
B.a.k(b4,new A.cU(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.av(i),b=J.L(h.a),h=new A.M(b,h.b,h.$ti.i("M<1>"));h.m();){a=b.gp()
if(!a.Q||a.ap(i)!==b7)continue
B:{if(!p||o){a0=g+a.ae(i)
break B}if(!q||n){a0=e+a.ae(i)
break B}a0=null}B.a.k(b4,new A.cU(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.m?b8:b9
r=t.i
a1=A.as([0,s],r)
a2=A.as([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.N(a1,a1.$ti.c)
B.a.Z(a4)
a5=A.N(a2,a2.$ti.c)
B.a.Z(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.Y(b4,new A.om(b0,b1,b2,b3)))continue
switch(m){case 0:b5.t(0,b1,b3,0,b0,b2,r)
break
case 2:b5.t(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.t(0,0,b3,b1,r,b2,b0)
break
case 1:b5.t(0,s,b3,b1,b8,b2,b0)
break}}A.wR(b5,b4,b7,b8,b9,c1)
A.wQ(b5,b4,b7,b8,b9,c1)},
wQ(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.r)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.t(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.t(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.t(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.t(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.t(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.t(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.i)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.t(2,a+0.18,n,r,a,a1,p)}}},
wR(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.r)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.t(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.t(e,a1,a,l,a0,b,m)
a2.t(e,a1,b,l,c,b-0.06,m)
a2.t(e,a1,a+0.06,l,c,a,m)
if(f)a2.t(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.t(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.t(e,a1,a,j,a0,b,k)
a2.t(e,a1,b,j,c,b-0.06,k)
a2.t(e,a1,a+0.06,j,c,a,k)
if(f)a2.t(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.t(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.t(e,l,a,a1,m,d,a0)
a2.t(e,l,d,a1,m,d-0.06,b)
a2.t(e,l,a+0.06,a1,m,a,b)
if(f)a2.t(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.t(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.t(e,o,a,a1,p,d,a0)
a2.t(e,o,d,a1,p,d-0.06,b)
a2.t(e,o,a+0.06,a1,p,a,b)
if(f)a2.t(3,p,a,c+0.07,n,d,c)
break}if(!f)A.xq(a2,g,a4,a5,a6,a7,q)}},
xq(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.t(3,o+0.025,m,r,o-0.025,n,s)
a.t(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.t(3,o+0.025,m,r,o-0.025,n,s)
a.t(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.t(3,r,m,o+0.025,s,n,o-0.025)
a.t(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.t(3,r,m,o+0.025,s,n,o-0.025)
a.t(3,r,l+0.025,p,s,l-0.025,q)
break}},
xn(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.t(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.t(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.t(4,i,p,-0.38,j,q,-0.44)
a.t(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.t(5,h+0.5,p,o,h-0.5,r,q)}},
wD(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.t(0,g+0.35,k,n,g-0.35,l,q)
a.t(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.t(5,d+0.1,o,m,d-0.1,r,p)}}},
wL(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[-0.48,c+0.48],r=a0-0.16,q=b+0.1,p=0;p<2;++p){o=s[p]
a.t(6,q,a0,o+0.08,-0.1,r,o-0.08)}for(s=[0,b],r=c+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.11,l=n+0.11,k=n-0.07,j=n+0.07,i=0;i<2;++i){o=q[i]
a.t(6,j,a0,o+0.07,k,0,o-0.07)
for(h=[2,4,6],g=o-0.11,f=o+0.11,e=0;e<3;++e){d=h[e]
a.t(6,l,d+0.06,f,m,d,g)}}}},
wS(a,b,c){var s,r,q,p,o,n,m,l,k=b.e.h(0,"hall")
k.toString
s=b.f.h(0,"front-door")
r=k.d.a+s.ae("hall")
q=r+s.w
for(k=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.t(2,p+n,0.02-m,-0.42-l,k-n,-0.08-m,-0.7-l)}a.t(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.t(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.t(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.t(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)},
xs(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.t(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.t(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.t(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.t(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.t(6,m,j+0.06,l,s,j,n)}a.t(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.t(6,i+0.34,0.22,s,i,0.1,h)}},
wB(a,b){var s,r
a.t(0,6.7,1,-4.05,-2.5,0,-4.4)
a.t(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.t(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.t(7,b+3,0,-4.55,-3,-0.08,-5.2)},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
om:function om(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yq(a,b,c){var s,r,q=A.qf(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.e3(B.cQ,s)}r=A.ts(a,c,b)
if(r!=null)return new A.e3(B.cR,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.tt(a,c,b)!=null)return B.cV
return B.cU},
d8:function d8(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.c=b},
ti(a,b){var s,r=new A.cN(new Float32Array(5376)),q=new A.cN(new Float32Array(5376)),p=new A.cN(new Float32Array(5376)),o=new A.cN(new Float32Array(5376)),n=b.d,m=a.aS(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cn(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
A.wt(r,b,m)
k+=m.b
q.cn(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.ww(p,a,b,m,B.bq[s])
for(l=a.av(b.a),k=J.L(l.a),l=new A.M(k,l.b,l.$ti.i("M<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.ws(o,b,m,j)}A.wr(p,b,m)
A.wu(p,a,b,m)
return new A.mF(B.u.b1(r.a,0,r.b),B.u.b1(q.a,0,q.b),B.u.b1(p.a,0,p.b),B.u.b1(o.a,0,o.b))},
wt(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aB(e/0.22)
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
wu(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
switch(b3.a){case"living-room":a7=a8+b4.a
s=a7-0.48
r=b0+b4.c*0.4
A.t(b1,new A.b(s,a9,r-0.85),new A.b(a7,a9+2.55,r+0.85),7824724)
A.t(b1,new A.b(s-0.38,a9+0.02,r-0.72),new A.b(a7+0.05,a9+0.16,r+0.72),a2)
q=a9+2.34
A.t(b1,new A.b(s-0.52,a9+2.18,r-0.94),new A.b(a7+0.08,q,r+0.94),a3)
p=s-0.02
A.t(b1,new A.b(p,a9+0.45,r-0.48),new A.b(a7+0.03,a9+1.48,r+0.48),2170396)
for(a7=s-0.08,o=a9+0.28,n=r-0.42,m=a9+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.t(b1,new A.b(a7+j,o,n),new A.b(p+j,m,l),a4)}for(a7=s-0.01,p=a9+1.55,o=s+0.04,n=a9+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.t(b1,new A.b(a7,p,l+j),new A.b(o,n,m+j),a2)}for(a7=[r-0.68,r+0.56],p=s-0.42,o=a9+2,n=s-0.26,m=a9+2.2,i=0;i<2;++i){h=a7[i]
A.t(b1,new A.b(p,o,h),new A.b(n,m,h+0.16),a5)}A.t(b1,new A.b(s-0.27,q,r-0.58),new A.b(s-0.07,a9+2.52,r-0.38),a6)
A.t(b1,new A.b(s-0.25,q,r+0.34),new A.b(s-0.06,a9+2.49,r+0.52),a3)
break
case"hall":A.wv(b1,b2,b3,b4,a5,a4)
A.t(b1,new A.b(a8+0.28,a9+0.78,b0+0.52),new A.b(a8+0.68,a9+0.88,b0+2.15),a5)
for(a7=[b0+0.66,b0+2.01],q=a8+0.34,p=a8+0.42,o=a9+0.8,i=0;i<2;++i){g=a7[i]
A.t(b1,new A.b(q,a9,g),new A.b(p,o,g+0.08),a3)}f=a8+1.22
a7=b0+0.1
A.t(b1,new A.b(f-0.28,a9+2.35,b0+0.02),new A.b(f+0.28,a9+3.02,a7),a5)
A.t(b1,new A.b(f-0.13,a9+2.48,a7),new A.b(f+0.13,a9+2.72,b0+0.15),a2)
a7=b0+0.08
A.t(b1,new A.b(f-0.025,a9+1.82,a7),new A.b(f+0.025,a9+2.36,b0+0.13),a4)
for(q=a8+1.7,p=a9+1.74,o=a8+1.78,n=a9+1.84,m=b0+0.16,k=0;k<3;++k){l=k*0.36
A.t(b1,new A.b(q+l,p,a7),new A.b(o+l,n,m),a4)}a7=a9+0.72
A.t(b1,new A.b(a8+0.86,a9,b0+0.62),new A.b(a8+1.1,a7,b0+0.9),a6)
A.t(b1,new A.b(a8+0.91,a7,b0+0.68),new A.b(a8+1.05,a9+0.82,b0+0.84),a5)
break
case"kitchen":a7=a8+b4.a
e=a7-0.62
q=a9+1.28
A.t(b1,new A.b(e,a9,b0+0.72),new A.b(a7,q,b0+2.18),a4)
A.t(b1,new A.b(e-0.08,q,b0+0.62),new A.b(a7+0.04,a9+1.38,b0+2.28),a2)
for(a7=e+0.12,q=a9+1.39,p=b0+0.88,o=e+0.4,n=a9+1.45,m=b0+1.16,k=0;k<3;++k){l=k*0.4
A.t(b1,new A.b(a7,q,p+l),new A.b(o,n,m+l),2170396)}a7=a9+0.82
q=a9+0.94
A.t(b1,new A.b(a8+1.05,a7,b0+1.15),new A.b(a8+3.1,q,b0+2.35),a3)
for(p=[a8+1.18,a8+2.94],o=b0+1.28,n=b0+1.38,i=0;i<2;++i){d=p[i]
A.t(b1,new A.b(d,a9,o),new A.b(d+0.1,a7,n),a5)}A.t(b1,new A.b(a8+0.48,a9+1.72,b0+2.74),new A.b(a8+2.55,a9+1.84,b0+2.88),a5)
a7=a9+1.02
A.t(b1,new A.b(a8+3.38,q,b0+1.26),new A.b(a8+4.48,a7,b0+2.22),a6)
q=b0+1.66
p=b0+1.74
A.t(b1,new A.b(a8+3.82,a7,q),new A.b(a8+3.9,a9+1.34,p),a4)
A.t(b1,new A.b(a8+3.72,a9+1.3,q),new A.b(a8+4,a9+1.36,p),a4)
for(a7=a8+1.38,q=a9+0.95,p=b0+1.48,o=a8+1.78,n=a9+1.05,m=b0+1.88,k=0;k<2;++k){l=k*0.55
A.t(b1,new A.b(a7+l,q,p),new A.b(o+l,n,m),a6)}break
case"cellar":for(a7=a8+0.35,q=b0+1.05,p=a8+0.58,o=a9+0.55,n=b0+2,k=0;k<4;++k){m=k*0.28
A.t(b1,new A.b(a7+m,a9,q),new A.b(p+m,o+B.c.X(k,2)*0.18,n),a5)}A.t(b1,new A.b(a8+2.55,a9+0.15,b0+0.38),new A.b(a8+2.72,a9+1.55,b0+0.56),a4)
A.t(b1,new A.b(a8+2.42,a9+1.28,b0+0.32),new A.b(a8+2.86,a9+1.38,b0+0.65),a6)
A.t(b1,new A.b(a8+0.4,a9+1.72,b0+0.45),new A.b(a8+3.4,a9+1.82,b0+0.58),a4)
A.t(b1,new A.b(a8+1.9,a9+1.58,b0+0.42),new A.b(a8+2.06,a9+1.76,b0+0.61),a4)
A.t(b1,new A.b(a8+1.84,a9+1.62,b0+0.55),new A.b(a8+2.12,a9+1.7,b0+0.64),a4)
break
case"bedroom":c=a8+0.85
b=b0+2.08
a7=a9+0.72
A.t(b1,new A.b(c,a9+0.42,b),new A.b(c+3.65,a7,b+2.05),6972528)
A.t(b1,new A.b(c-0.1,a7,b-0.12),new A.b(c+3.75,a9+1.28,b+0.1),a3)
A.t(b1,new A.b(c+0.22,a9+0.74,b+1.35),new A.b(c+1.05,a9+0.9,b+1.82),a6)
a7=a8+b4.a
q=a9+1.48
A.t(b1,new A.b(a7-0.95,a9+0.78,b0+0.58),new A.b(a7-0.18,q,b0+1.42),a3)
A.t(b1,new A.b(a7-1.04,q,b0+0.48),new A.b(a7-0.1,a9+1.57,b0+1.52),a5)
for(a7=[b+0.22,b+0.78],q=c+0.36,p=a9+0.75,o=c+1.12,n=a9+0.92,i=0;i<2;++i){a=a7[i]
A.t(b1,new A.b(q,p,a),new A.b(o,n,a+0.42),a6)}for(a7=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=a9+0.08,n=a9+0.44,i=0;i<2;++i){a0=a7[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.t(b1,new A.b(a0,o,g),new A.b(l,n,g+0.1),a5)}}break
case"landing":a7=a8+0.48
A.t(b1,new A.b(a8+0.34,a9+0.02,b0+1.62),new A.b(a7,a9+1.06,b0+2.7),a5)
for(q=a9+0.82,p=b0+1.68,o=a8+2.14,n=a9+0.9,m=b0+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.t(b1,new A.b(a7,q+l,p+j),new A.b(o,n+l,m+j),a3)}for(a7=a8+0.62,q=a9+1.02,p=b0+1.74,o=a8+0.7,n=a9+1.78,m=b0+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.t(b1,new A.b(a7+l,q,p+j),new A.b(o+l,n,m+j),a5)}break
case"bathroom":a7=a9+0.62
A.t(b1,new A.b(a8+0.3,a9+0.04,b0+0.38),new A.b(a8+2.15,a7,b0+1.22),a6)
q=a9+0.72
A.t(b1,new A.b(a8+0.42,a7,b0+0.48),new A.b(a8+2.03,q,b0+1.12),a2)
a7=a8+b4.a
p=b0+b4.c
A.t(b1,new A.b(a7-0.78,a9+0.12,p-0.88),new A.b(a7-0.18,a9+1.75,p-0.28),a6)
A.t(b1,new A.b(a7-0.86,a9+1.68,p-0.98),new A.b(a7-0.1,a9+1.82,p-0.18),a4)
p=b0+0.68
a7=a9+1.18
o=b0+0.78
A.t(b1,new A.b(a8+0.86,q,p),new A.b(a8+0.96,a7,o),a4)
A.t(b1,new A.b(a8+0.7,a9+1.12,p),new A.b(a8+1.12,a7,o),a4)
break
case"spare-room":A.t(b1,new A.b(a8+1,a9,b0+0.7),new A.b(a8+3.25,a9+1.65,b0+2),6972528)
A.t(b1,new A.b(a8+0.8,a9+1.6,b0+0.52),new A.b(a8+3.45,a9+1.74,b0+2.18),a3)
a7=a8+b4.a
q=b0+b4.c
A.t(b1,new A.b(a7-1.05,a9,q-1.02),new A.b(a7-0.25,a9+0.72,q-0.24),a5)
for(p=a7-0.98,o=a9+0.18,n=q-1.12,a7-=0.28,m=a9+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.t(b1,new A.b(p,o+l,n),new A.b(a7,m+l,q),a4)}break}},
wv(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gaW(a)
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
A.t(a0,new A.b(p,c,b-0.18),new A.b(o,c+0.11,b+0.18),a4)}k=a+0.08
h=a+0.34
A.t(a0,new A.b(p-0.1,k,g),new A.b(p,h,i),3680031)
A.t(a0,new A.b(o,k,g),new A.b(o+0.1,h,i),3680031)
h=a+1.52
k=h<m?h:m
A.t(a0,new A.b(o+0.16,a+1.42,g+0.25),new A.b(o+0.25,k,i-0.25),a5)},
ww(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.m?a3.a:a3.c,a=A.f([],t.a9)
for(s=a2.a,r=a1.av(s),q=J.L(r.a),r=new A.M(q,r.b,r.$ti.i("M<1>"));r.m();){p=q.gp()
if(!p.as&&p.ap(s)===a4)a.push(new A.cT(p.ae(s),p.ae(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cT(q,q+n.e,p,p+n.f))}}s=t.i
r=A.as([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.J(0,A.f([m.a,m.b],p))}l=A.N(r,r.$ti.c)
B.a.Z(l)
s=A.as([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.J(0,A.f([m.c,m.d],p))}k=A.N(s,s.$ti.c)
B.a.Z(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.Y(a,new A.o0(f,e,d,c)))continue
A.xK(a0,a2,a3,a4,f,e,d,c)}A.wx(a0,a2,a3,a4,b,a)},
wx(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.a
if(c==="cellar")return
s=c==="living-room"||c==="hall"
r=c==="bedroom"
q=r||c==="landing"||c==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.nZ(a,b,a0,a1,a2,a3,0.02,0.17,0.032,p)
o=!s
if(!o||c==="landing")A.nZ(a,b,a0,a1,a2,a3,0.88,0.94,0.022,p)
if(!o||r){n=a0.b-0.58
A.nZ(a,b,a0,a1,a2,a3,n,n+0.055,0.022,p)}c=a0.b
r=s?0.13:0.09
m=c-0.012
o=s?0.055:0.038
A.nZ(a,b,a0,a1,a2,a3,c-r,m,o,p)
for(r=a3.length,l=0;l<a3.length;a3.length===r||(0,A.r)(a3),++l){k=a3[l]
o=k.a
j=o-0.075
if(0>j)j=0
i=k.b
h=i+0.075
if(a2<h)h=a2
g=k.c
f=0.018>g?0.018:g
e=k.d
d=e+0.075
if(m<d)d=m
if(o>0)A.jR(a,b,a0,a1,j,o,f,d,0.04,p)
if(i<a2)A.jR(a,b,a0,a1,i,h,f,d,0.04,p)
if(e<c)A.jR(a,b,a0,a1,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.jR(a,b,a0,a1,j,h,0>o?0:o,g,0.065,p)}}},
nZ(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.xz(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.jR(a,b,c,d,n,o,g,h,i,j)}},
xz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.f([new A.es(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.f([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.es(j,m))
j=k.b
if(n<j)B.a.k(p,new A.es(n,j))}h=p}return h},
wr(a,b,c){var s,r,q,p,o=b.a,n=o==="living-room"
if(!n&&o!=="hall"&&o!=="bedroom")return
o=b.d
s=o.a+c.a*0.5
r=o.c+c.c*0.5
q=o.b+c.b
p=n?13748148:13024682
o=q-0.018
A.t(a,new A.b(s-0.24,o,r-0.24),new A.b(s+0.24,q,r+0.24),p)
n=q-0.034
A.t(a,new A.b(s-0.15,n,r-0.15),new A.b(s+0.15,o,r+0.15),p)
A.t(a,new A.b(s-0.055,q-0.048,r-0.055),new A.b(s+0.055,n,r+0.055),p)},
jR(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.ai(j,l,g,h,d)
a.ai(s,r,q,p,d)
a.ai(l,s,p,g,d)
a.ai(r,j,h,q,d)
a.ai(l,j,r,s,d)
a.ai(g,p,q,h,d)},
xK(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
default:o=m}a.cn(s.S(0,o),r.S(0,o),q.S(0,o),p.S(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.xL(b,d)
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
xL(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
ws(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.ap(d),b=a3.ae(d),a=b+a3.w
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
A.o_(a0,a1,a2,a3,q)
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
A.o_(a0,a1,a2,a3,q)
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
A.o_(a0,a1,a2,a3,q)
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
A.o_(a0,a1,a2,a3,q)
break}},
o_(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.ap(o),m=d.ae(o)
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
mF:function mF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o0:function o0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a,b){this.a=a
this.b=b},
qy(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.f([],b4),b6=t.aN,b7=A.f([],b6),b8=A.f([],t.jn),b9=t.N
b9=new A.l9(b5,b7,b8,A.x(b9,t.Y),A.x(b9,t.W),new A.lb())
s=t.E
r=t.s
q=t.cs
p=t.x
B.a.J(b5,A.f([new A.aB(n,B.U,new A.b(4.5,3.9,4),new A.b(0,0,0),A.f([new A.aP("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.aP("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.f(["hall-living","kitchen-living"],r),A.f([new A.aV(m,l,new A.b(1,1.95,1),!1,!1,m),new A.aV(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.an,"wallpaper-stripes",i,h,B.z),new A.aB(g,B.U,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.f([new A.aP("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.f(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.f([new A.aV("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.f([new A.b8(e,e,new A.b(0.2,2.175,0.35)),new A.b8(d,d,new A.b(2.2,2.55,3)),new A.b8(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.z),new A.aB(a,B.U,new A.b(4.5,3.75,3),new A.b(0,0,4),A.f([new A.aP("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.aP("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.f(["hall-kitchen","kitchen-living"],r),A.f([new A.aV(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.aV("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.aV("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.f([new A.b8(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.e1),new A.aB("cellar",B.U,new A.b(4,3,4),new A.b(1,-3,2),B.bm,A.f(["hall-cellar"],r),B.ej,B.an,"wallpaper-damp","floor-concrete","ceiling-pipes",B.z),new A.aB("bedroom",B.V,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.f([new A.aP("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.aP("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.f(["landing-bedroom"],r),A.f([new A.aV(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.aV("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.f([new A.b8(a3,a3,new A.b(2.2,1.125,2.5)),new A.b8(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.z),new A.aB(a5,B.V,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bm,A.f(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.f([new A.aV("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.an,b,i,h,B.z),new A.aB(a7,B.V,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.f([new A.aP("bathroom-east",B.w,0.9,1.5,0.7,1.5,!0,!0)],s),A.f([a6],r),A.f([new A.aV("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.f([new A.b8(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.z),new A.aB(a9,B.V,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.f([new A.aP("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.f(["landing-spare"],r),A.f([new A.aV("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.f([new A.b8(b0,b0,new A.b(0.5,1.8,0.3)),new A.b8(b1,b1,new A.b(3.7,2.1,2.7)),new A.b8(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.z)],b4))
B.a.J(b7,A.f([A.cK(g,"outside","kit-front-door-recessed",!0,B.i,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cK(g,n,b3,!1,B.G,B.w,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cK(g,a,b3,!1,B.G,B.w,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cK(a,n,b3,!1,B.i,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cK(g,"cellar","kit-cellar-door-grille",!1,B.m,B.w,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cK(g,a5,o,!1,B.w,B.w,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cK(a5,"bedroom",b3,!1,B.G,B.w,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cK(a5,a7,b3,!1,B.m,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cK(a5,a9,b3,!1,B.m,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cM("hall-stairs",f,B.ed,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
b9.iA()
b9.j2()
b4=b5.length
if(b4!==8)A.k(A.l("expected eight rooms, got "+b4))
b4=b9.glu()
if(b4!==9)A.k(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gbf(b8)
b4=B.a.gP(B.a.gbf(b8).c)
if(b4!==6.3)A.k(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.l("expected nine physical portals"))
b9.jG()
b9.jF()
return b9},
l9:function l9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
lq:function lq(){},
lr:function lr(){},
lp:function lp(){},
ls:function ls(a){this.a=a},
lt:function lt(){},
qf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga4()
j=a.b
if(Math.acos(B.d.a1(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
ts(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.av(c),r=J.L(s.a),s=new A.M(r,s.b,s.$ti.i("M<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.l2(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.rU(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
tt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.xM(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.rU(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
rU(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.a1(a.ga4().br(c.b),-1,1))<=e},
xM(a,b,c){var s=a.aS(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
kH:function kH(){this.a=null
this.b=0},
mN:function mN(){},
mO:function mO(){},
uO(a){var s=A.ha(a,"inventory asset"),r=A.cz(s,"id"),q=A.cz(s,"kind")
A.cz(s,"source")
A.cz(s,"proxy")
A.cz(s,"pivot")
s=A.ha(s.h(0,"bounds"),"inventory bounds")
return new A.bX(r,q,new A.ly(A.jQ(s.h(0,"min"),"bounds.min"),A.jQ(s.h(0,"max"),"bounds.max")))},
uP(a){var s,r,q,p,o,n="stateKey",m=A.ha(a,"inventory placement"),l=A.ha(m.h(0,"visibility"),"placement visibility"),k=A.ha(m.h(0,"interaction"),"placement interaction"),j=m.h(0,"clearance"),i=A.cz(m,"id"),h=A.cz(m,"roomId"),g=A.cz(m,"assetId")
A.cz(m,"role")
s=typeof m.h(0,"socket")=="string"?A.G(m.h(0,"socket")):null
m=A.ha(m.h(0,"transform"),"inventory transform")
r=A.jQ(m.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.dc)
q=A.jQ(m.h(0,"position"),"transform.position")
p=A.jQ(m.h(0,"rotation"),"transform.rotation")
A.cz(l,"layer")
if(typeof l.h(0,n)=="string")A.G(l.h(0,n))
J.a8(k.h(0,"pickable"),!0)
o=t.P.b(j)?A.xh(j,"radius"):0
return new A.ch(i,h,g,s,new A.lz(q,p,r),o)},
ha(a,b){return t.P.b(a)?a:A.cx(b+" is not an object")},
cz(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.cx(b+" is not a string")},
xh(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.cx(b+" is not finite")},
jQ(a,b){var s
if(t.j.b(a)){s=J.aH(a)
s=s.gq(a)!==3||s.Y(a,new A.oz())}else s=!0
if(s)return A.cx(b+" is not a finite vec3")
s=J.aH(a)
return new A.b(A.bF(s.h(a,0)),A.bF(s.h(a,1)),A.bF(s.h(a,2)))},
cx(a){return A.k(A.ac(a,null,null))},
lf:function lf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
bX:function bX(a,b,c){this.a=a
this.b=b
this.f=c},
ch:function ch(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.y=f},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
ly:function ly(a,b){this.a=a
this.b=b},
oz:function oz(){},
c_:function c_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hT:function hT(a){this.a=a},
li:function li(a){this.a=a},
cK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.c0(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
eT:function eT(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
c0:function c0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aV:function aV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(){},
cM:function cM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aB:function aB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
uJ(a){return A.uI(a)},
uI(a){var s,r,q,p,o,n,m=A.t1(a,"sound emitter"),l=t.N,k=A.x(l,l)
for(s=A.t1(m.h(0,"cues"),"sound emitter cues").gN(),s=s.gu(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.c(B.d9)
k.l(0,r.a,q)}s=A.q5(m,"id")
r=A.q5(m,"roomId")
p=A.q5(m,"placementId")
o=A.xI(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.ey("gain is not a number")
return new A.bW(s,r,p,o,n,A.d4(k,l,l))},
t1(a,b){return t.P.b(a)?a:A.ey(b+" is not an object")},
q5(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.ey(b+" is not a string")},
xI(a,b){var s
if(t.j.b(a)){s=J.aH(a)
s=s.gq(a)!==3||s.Y(a,new A.oy())}else s=!0
if(s)throw A.c(A.ac(b+" must be a numeric vec3",null,null))
s=J.aH(a)
return new A.b(A.bF(s.h(a,0)),A.bF(s.h(a,1)),A.bF(s.h(a,2)))},
ey(a){return A.k(A.ac(a,null,null))},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(){},
bW:function bW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
la:function la(){this.b=this.a=null},
eY:function eY(a){this.a=a},
lj:function lj(){this.b=this.a=null},
e6:function e6(a,b){this.a=a
this.b=b},
oy:function oy(){},
qz(a,b,c,d,e,f){var s=t.N
return new A.lo(e,f,c,a,A.d4(A.aU(d,s,s),s,s),A.ap(b,s))},
qA(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.x(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.l(0,p.a,new A.fd(p.ax,p.ay))}s=A.x(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.x(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.l(0,j.a,new A.f5(j.d,j.r))}return A.qz(a.r.b,B.l,i,B.bw,h,s)},
uK(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.eK
r=a3.h(0,"mantleHistory")
if(r==null)r=B.eq
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aF(a2)||!q.b(s)||!t.j.b(r))throw A.c(B.d7)
p=t.N
o=A.x(p,t.ku)
for(n=a.gN(),n=n.gu(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b4)
l=A.aU(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bH(j)||!A.bH(i))A.k(B.b4)
o.l(0,k,new A.fd(j,i))}h=A.x(p,t.y)
for(n=a0.gN(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bH(l.b))throw A.c(B.d5)
h.l(0,k,A.aY(l.b))}g=A.x(p,t.mK)
for(n=a1.gN(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b3)
l=A.aU(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bH(f)||!A.bH(e))A.k(B.b3)
g.l(0,k,new A.f5(f,e))}d=A.x(p,p)
for(q=s.gN(),q=q.gu(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.c(B.dq)
d.l(0,n,A.G(p.b))}c=A.f([],t.s)
for(q=J.L(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.c(B.cW)
B.a.k(c,b)}return A.qz(a2,c,g,d,o,h)},
q1(a,b){return a.a.a===b.a&&a.ah(0,b.gc1(b))},
lo:function lo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fd:function fd(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
uu(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.lT(e,A.I(e).c)
q=new A.en()
q.cz((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eR(a,q,2,r,1+s,A.as(["time"],t.N))
break
case 3:A.eR(a,q,3,r,1+s,A.as(["place"],t.N))
break
case 4:A.eR(a,q,4,r,2+s,p)
A.uq(a,q,4)
break
case 5:A.eR(a,q,5,r,s,p)
A.uo(a,q,5)
break
case 6:A.eR(a,q,6,r,s,p)
A.up(a,q)
A.ut(a,q,6)
break
case 7:A.ur(a,q,7)
break
default:if(s>0)A.eR(a,q,b,r,s,p)}},
un(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.us(a,b,c))return!1
return!0},
eR(a,b,c,d,e,f){var s,r,q,p,o=A.f([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(A.un(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cv(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.qu(a,b,o[p],f)}},
qu(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aU(B.a.gP(o).a,n,n)
if(d==null)s=A.f(B.t.slice(0),t.s)
else{n=t.nn
s=A.N(new A.Q(B.t,t.gS.a(new A.kC(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.am(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.e2(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.am(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.cZ(c.a,m,B.a.gP(o).b)},
uq(a,b,c){var s=A.qv(a,b,c)
if(!a.bn(s))return
a.e8(c,t.G.a(s),0,B.ak,null)},
qv(a,b,c){var s,r,q,p,o,n=t.N,m=A.x(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.t[s]
q=n.h(0,r)
if(q==null)q=B.l
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.am(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
uo(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cv(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aU(B.a.gP(i).a,s,s)
r=p.c
n=A.aU(B.a.gP(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.t[m]
k=o.h(0,l)
j=s.e2(l,k==null?"":k)
k=j.length
if(k!==0){k=b.am(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.cZ(q.a,o,B.a.gP(i).b)
a.cZ(p.a,n,B.a.gP(r).b)},
up(a,b){var s,r,q=A.f([],t.r)
for(s=a.b,r=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.am(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.ak(0,q[r].a)},
ut(a,b,c){var s,r,q=A.f([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.am(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.qu(a,b,q[s],null)},
ur(a,b,c){var s=c+1,r=A.qv(a,b,s)
if(!a.bn(r))return
a.e8(s,t.G.a(r),0,B.ak,null)},
us(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gP(b.c).c===B.X}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gP(b.c).c===B.X}if(c===21)return b.e
return!1},
kC:function kC(a){this.a=a},
vE(a){var s,r,q,p,o=t.N,n=A.x(o,t.h)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p=A.az(q==null?B.l:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.nh(n)},
lO(a,b,c){var s,r,q,p=t.z
p=A.x(p,p)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.i6(A.d4(p,q,q),b,c)},
qJ(a){var s=t.N
return A.lO(t.P.a(a.h(0,"fields")).ba(0,new A.lP(),s,s),A.bF(a.h(0,"shakiness")),A.uz(B.ef,A.G(a.h(0,"hand")),t.bU))},
uy(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.f([],t.b1)
for(s=J.L(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.qJ(r.a(s.gp())))
s=A.bG(a.h(0,"corroborator"))
q=A.aY(a.h(0,"locked"))
p=A.rH(a.h(0,"lastReadDay"))
return new A.bi(n,m,l,s,q,p,o==null?null:A.qJ(r.a(o)))},
cF:function cF(a,b){this.a=a
this.b=b},
nh:function nh(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(){},
lQ:function lQ(a){this.a=a},
bi:function bi(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qG(a){return new A.lB(a,A.x(t.S,t.L),A.a4(t.N),A.f([],t.t))},
uW(a,b){var s,r,q,p,o=A.qG(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.tY(s.a(b.h(0,"tags")),t.N))
for(s=J.L(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.uy(r.a(s.gp()))
q.l(0,p.a,p)}return o},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
lI:function lI(a,b){this.a=a
this.b=b},
ki:function ki(){},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kj:function kj(){},
lN:function lN(){},
lM:function lM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ma:function ma(){},
m9:function m9(a,b){this.b=a
this.c=b},
mb:function mb(){},
pn(a){if(!isFinite(0))A.k(A.au(0,"interpolation",null))
return new A.mB(a)},
fi:function fi(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
mB:function mB(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
mA(a,b,c,d,e){var s="73484bf75158-d004e52a5506",r=A.o5("RENDERER_SHA"),q=A.o5("GAME_SHA"),p=A.o5("DART_SDK_VERSION"),o=A.o5("LOCKFILE_SHA256"),n=A.lT(b,A.I(b).c)
n=A.N(n,A.o(n).c)
B.a.Z(n)
n=new A.mz(a,e,s,A.ap(n,t.N),r,q,p,o,c,d)
n.is(a,s,b,c,d,q,o,e,r,p)
return n},
o5(a){var s=B.eE.h(0,a)
return s.length===0?null:s},
mz:function mz(a,b,c,d,e,f,g,h,i,j){var _=this
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
qs(a,b,c,d,e,f,g){var s=A.N(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ac("saved day-loop resources must not be negative",null,null))
return new A.ku(c,g,b,a,e,d===!0,s)},
uh(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.c(B.d2)
s=A.f([],t.b2)
for(r=J.L(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.c(B.d8)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aF(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.c(B.d1)
f=A.e7(new A.Q(B.bk,q.a(new A.kv(h)),p),o)
e=A.e7(new A.Q(B.bp,n.a(new A.kw(g)),m),l)
if(f==null||e==null)throw A.c(B.dm)
B.a.k(s,new A.eg(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aF(d)||!A.aF(c)||!A.aF(b)||!A.bH(a))throw A.c(B.dd)
return A.qs(c,d,a1,a,b,s,a3)},
b9:function b9(a,b){this.a=a
this.b=b},
aX:function aX(a,b){this.a=a
this.b=b},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
hX:function hX(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
nl:function nl(a,b){this.b=a
this.c=b},
dz:function dz(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
lu:function lu(a){this.c=a},
lw:function lw(a,b){this.a=a
this.b=b},
lx:function lx(){},
qV(){var s=A.pR(B.l),r=A.pR(B.l),q=new A.mH(B.x,s,r)
if(!isFinite(0))A.k(B.cX)
if(!B.a.ah(r,B.a.gc1(s)))A.k(B.de)
if(q.a===B.x&&q.b!==0&&!q.e)A.k(B.cZ)
return q},
pR(a){var s,r,q,p=A.f([],t.s),o=A.a4(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.c(B.dl)
B.a.k(p,q)}return p},
bz:function bz(a,b){this.a=a
this.b=b},
mG:function mG(){},
c2:function c2(){},
mH:function mH(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hM:function hM(a,b){this.a=a
this.b=6
this.c=b},
tv(a){var s=B.d.a1(a,0,1)
if(s<=0.5)return A.t_(4491468,16777215,s*2)
return A.t_(16777215,16759637,(s-0.5)*2)},
tw(a){var s=B.d.a1(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga4()},
t_(a,b,c){var s,r=new A.oq(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.i2()
s=r.$1(8)
if(typeof s!=="number")return s.i2()
r=r.$1(0)
if(typeof r!=="number")return A.jU(r)
return(q<<16|s<<8|r)>>>0},
oq:function oq(a,b,c){this.a=a
this.b=b
this.c=c},
ej(a){var s,r,q=A.x(t.N,t.z)
for(s=a.gN(),s=s.gu(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
mS:function mS(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mT:function mT(){},
mU:function mU(){},
dx:function dx(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b){this.a=a
this.b=b},
mX:function mX(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
mY:function mY(){},
mZ:function mZ(){},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
kl:function kl(a){this.a=a
this.b=null},
ul(a){var s=A.f([],t.kG)
s=new A.ky(A.Y(a,"div","door",null),s)
s.im(a)
return s},
ky:function ky(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
kz:function kz(a,b){this.a=a
this.b=b},
kA:function kA(a){this.a=a},
kB:function kB(a,b){this.a=a
this.b=b},
uv(a){var s=new A.kE(a,A.e(a.createElement("div")))
s.bI(a)
s.io(a)
return s},
kE:function kE(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
kF:function kF(a){this.a=a},
uH(a){var s=new A.l7(a,A.e(a.createElement("div")))
s.bI(a)
s.ip(a)
return s},
l7:function l7(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
l8:function l8(a){this.a=a},
lC:function lC(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
lD:function lD(a){this.a=a},
lE:function lE(a){this.a=a},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function lG(){},
lH:function lH(){},
Y(a,b,c,d){var s=A.e(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
rP(a){var s,r,q,p=A.e(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.f([],t.kG)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.h(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
fc:function fc(){},
mj:function mj(a){this.a=a
this.b=null},
vn(a){var s=new A.mP(a,A.e(a.createElement("div")))
s.bI(a)
s.iu(a)
return s},
mP:function mP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
mQ:function mQ(a,b,c){this.a=a
this.b=b
this.c=c},
u3(a){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.od)
for(s=a.d,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gN(),n=n.gu(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.bL(p+m+":"+k,m,l.a,l.b,j))}}B.a.a_(i,new A.k4())
return new A.k3(A.ap(i,t.e),A.a4(t.N))},
bL:function bL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k3:function k3(a,b){this.a=a
this.b=b},
k5:function k5(){},
k4:function k4(){},
vD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.hm
s=t.g
r=A.x(s,t.kz)
q=A.o(e).i("ak<1>")
p=A.N(new A.ak(e,q),q.i("n.E"))
B.a.Z(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=e.h(0,k).gN(),j=j.gu(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bb(new A.bq(B.h8,k+" has an out-of-range authored day "+h+"."))
g=A.vC(k,h,i.b,m)
if(g instanceof A.bb)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.l(0,new A.ba(k,h,f.a,f.b),o.a(g).a)}}return new A.iX(new A.iW(r,A.a4(t.N),A.a4(s),A.f([],t.bl),B.C))},
vC(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.x(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bj[p]
n=o.b
m=n+"."
l=A.f([],q)
for(k=a0.gN(),k=k.gu(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.V(h,m))continue
g=A.mf(B.b.bH(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bb(new A.bq(B.h9,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.bo
B.a.k(l,new A.bA(g,i.b,f))}if(l.length===0)continue
B.a.a_(l,new A.nb())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bb(new A.bq(B.cd,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bb(new A.bq(B.cd,a+" day "+s+" has no authored tiers."))
return new A.jl(c)},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
nf:function nf(a){this.a=a},
ne:function ne(a){this.a=a},
nc:function nc(a){this.a=a},
nd:function nd(){},
nb:function nb(){},
iX:function iX(a){this.a=a},
jl:function jl(a){this.a=a},
y2(a){var s,r,q,p=A.a4(t.N)
for(s=new A.X(a,A.o(a).i("X<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gao(),q=q.gu(q);q.m();)if(q.gp().gO().Y(0,new A.oH())){p.k(0,r.a)
break}}s=A.N(p,p.$ti.c)
B.a.Z(s)
return s},
y1(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.l
s=t.N
r=A.az(b,!0,s)
B.a.Z(r)
q=new A.en()
q.cz((a^913741)>>>0)
p=q.am(4)
if(!(p>=0&&p<4))return A.d(B.bi,p)
o=B.bi[p]
n=r.length
n=o>n?n:o
if(n===0)return B.l
m=A.az(r,!0,s)
B.a.cv(m,q)
s=A.mV(m,0,A.dM(n,"count",t.S),A.I(m).c).bd(0)
B.a.Z(s)
return s},
oH:function oH(){},
r9(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aF(r)||!A.aF(q)||!A.aF(p)||r<1||q<0||q>23||p<0)return null
return new A.ba(s,r,q,p)},
vB(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a4(t.N)
for(s=t.j,q=J.L(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a4(t.g)
for(s=J.L(s.a(a.h(0,j)));s.m();){n=A.r9(s.gp())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.u2(m)
if(!s&&l==null)return i
return new A.iY(r,o,l)},
u2(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.r9(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aF(p))if(!(p<0))if(A.bH(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.e7(new A.Q(B.bj,t.nw.a(new A.k0(r)),t.na),t.kM)
k=A.e7(new A.Q(B.eA,t.bQ.a(new A.k1(q)),t.cB),t.nq)
m=o==null
j=m?h:A.e7(new A.Q(B.e7,t.hg.a(new A.k2(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.he(s,l,k,p,j,n)},
b5:function b5(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c5:function c5(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
na:function na(){},
he:function he(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
ng:function ng(){},
bb:function bb(a){this.a=a},
iU:function iU(a){this.a=a},
iT:function iT(a){this.a=a},
fu:function fu(a,b){this.a=a
this.b=b},
oO(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$oO=A.b2(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.h(A.e(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.F.b=c3
$.pP=A.h(A.e(c2.document).getElementById("fps"))
$.bd.b=$.tP().bG(A.n5().gbE().h(0,"renderer"))
A.wY()
a6=$.F.j()
a7=A.a(A.e(c2.window).innerWidth)>0?A.a(A.e(c2.window).innerWidth):800
a6.width=a7
a7=$.F.j()
a6=A.a(A.e(c2.window).innerHeight)>0?A.a(A.e(c2.window).innerHeight):600
a7.height=a6
n=A.h(c3.getContext("webgl2"))
if(n==null){$.bd.b=new A.dW(B.a_,$.bd.j().b,$.bd.j().c,!0,"webgl2 unavailable")
h=B.ad.kc($.bd.j())
h.aI()
$.cw.b=h
A.t4()
A.cY("no-webgl2")
c2=A.h(A.e(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bd.j().a===B.a0){a6=t.dg
a7=t.N
a8=t.hL
a9=t.p9
b0=t.fP
b1=new A.fN(n,A.a($.F.j().width),A.a($.F.j().height),A.f([],a6),A.x(a7,t.l0),A.f([],t.jj),A.x(a7,a8),A.x(a7,a9),A.x(a7,a8),A.x(a7,a9),A.f([],a6),A.f([],t.jU),B.eh,A.x(a7,t.lu),A.x(a7,b0),A.x(a7,b0),B.dr,B.f9)}else b1=new A.em(n,A.a($.F.j().width),A.a($.F.j().height),A.n5().gbE().h(0,"render")==="legacy",$.bd.j().d,$.bd.j().e)
m=b1
$.bI=m instanceof A.fN?m:null
$.jK=m instanceof A.em?m:null
a6=B.ad.d_($.bd.j(),m)
a6.aI()
$.cw.b=a6}catch(c5){l=A.ab(c5)
a6=$.bd.j()
$.bd.b=new A.dW(B.a_,!0,a6.c,!0,"pixeldart initialization failed")
$.jK=new A.em(n,A.a($.F.j().width),A.a($.F.j().height),A.n5().gbE().h(0,"render")==="legacy",!0,$.bd.j().e)
a6=B.ad.d_($.bd.j(),$.jK)
a6.aI()
$.cw.b=a6
$.F.j().setAttribute("data-renderer-error",A.p(l))}A.t4()
p=4
A.cY("initializing")
$.bE.b=new A.kn(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.pZ=A.aY(A.e(A.e(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bE.j()
a6.f=$.pZ?0.5:1
a6=A.e(c2.window)
a7=t.N
a8=A.e(a6.document)
a9=new A.hW(a8,A.a4(a7),A.a4(a7))
a6.addEventListener("keydown",A.am(a9.gjc()))
a6.addEventListener("keyup",A.am(a9.gje()))
a6.addEventListener("mousemove",A.am(a9.gji()))
a8.addEventListener("pointerlockchange",A.am(a9.gjg()))
$.bu.b=a9
$.rC.b=new A.hU(A.f([],t.oX),t.lv)
a9=$.F.j()
a6=A.a(A.e(c2.window).innerWidth)>0?A.a(A.e(c2.window).innerWidth):800
a9.width=a6
a6=$.F.j()
a8=A.a(A.e(c2.window).innerHeight)>0?A.a(A.e(c2.window).innerHeight):600
a6.height=a8
A.cY("renderer")
if($.bd.j().a===B.a_){a6=$.jK
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.j()}$.eC=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.c(h)}}A.cY("text")
a6=$.jZ()
s=7
return A.a7(a6.bB(),$async$oO)
case 7:k=a6.lt()
j=A.vD(k)
if(!(j instanceof A.iX)){i=t.cq.a(j).a
h=i.b
throw A.c("Failed to build visitors: "+h)}$.aE.b=j.a
$.jE.b=A.u3(k)
h=A.x(a7,t.h)
for(a8=t.j,b3=0;b3<5;++b3){g=B.t[b3]
a9=A.G(g)
b0=a6.c
b0===$&&A.j()
b4=b0.h(0,a9)
a9=a8.b(b4)?A.az(b4,!0,a7):B.l
J.bV(h,g,a9)}f=A.vE(h)
$.pJ.b=new A.km(B.cD)
e=$.pJ.j().l4(new A.oP(f))
if(e.a==null){h=B.aU.am(2147483647)
if(!isFinite(480))A.k(A.au(480,"daySeconds","must be finite and > 0"))
b5=new A.hM(1,480)
b5.b=10
b6=A.qG(f)
h=A.qw(42,1+h,A.qy(42),b5,b6,A.qs(6,16,b6,null,6,B.ei,b5),new A.hD(0,0,0,!1))}else{h=e.a
h.toString
h=A.qx(h,f)}$.T.b=h
$.cw.j().aE(A.pn($.T.j().gdL()))
if(e.b!=null){h=e.b
h.toString
A.eD(h)}h=$.aE.j()
a6=A.y1($.T.j().b,A.y2(k.b))
h.sic(A.lT(a6,A.I(a6).c))
A.cY("house")
$.Z.b=$.T.j().c
a6=$.bI
if(a6!=null)a6.jQ($.Z.j())
$.dJ.b=$.T.j().d
h=new A.b(5.5,1.65,3.5)
$.q7=$.pY=$.q4=h
d=h.a7(0,new A.b(0,1.3499999999999999,0))
$.h3.b=new A.hp(d,J.qi(d,new A.b(0,1.2000000000000002,0)))
$.ev.b=new A.kH()
$.be.b=A.qV()
$.aQ="hall"
h=e.a
c=A.v4(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.kH($.Z.j())){h=c.b
$.q7=$.pY=$.q4=h
$.bJ=c.c
$.dK=c.d
$.aQ=c.a
b=h.a7(0,new A.b(0,1.3499999999999999,0))
h=$.h3.j()
h.sjR(b)
h.b=J.qi(b,new A.b(0,1.2000000000000002,0))
h=$.h3.j()
a6=$.Z.j()
a9=c.e
b0=c.f
h.li($.aQ,$.eJ(),a6,b0,a9)
A.eD("restored position")}h=$.T.j().e
a6=$.dJ.j()
$.T.j()
$.jG.b=new A.lw(h,a6)
a6=A.e(c2.document)
h=$.T.j().e
a9=$.dJ.j()
b0=$.jG.j()
b7=A.e(a6.createElement("div"))
b0=new A.lC(h,a9,b0,a6,b7)
b0.bI(a6)
b7.setAttribute("aria-label","The Journal")
A.e(b7.appendChild(A.Y(a6,"div","journal-title","The Journal")))
b8=A.Y(a6,"div","journal-pages",null)
a9=A.Y(a6,"div","page page-left",null)
b0.y!==$&&A.y()
b0.y=a9
h=A.Y(a6,"div","page page-right",null)
b0.z!==$&&A.y()
b0.z=h
A.e(b8.appendChild(a9))
A.e(b8.appendChild(h))
A.e(b7.appendChild(b8))
A.e(b7.appendChild(b0.iC()))
b9=A.Y(a6,"div","tape-roll",null)
A.e(b9.style).setProperty("width","8rem")
h=A.Y(a6,"div","tape-fill",null)
b0.as!==$&&A.y()
b0.as=h
A.e(b9.appendChild(h))
A.e(b7.appendChild(b9))
c0=A.Y(a6,"div","consult",null)
A.e(c0.appendChild(A.Y(a6,"div","consult-label","Cite an entry")))
h=A.Y(a6,"div","entry-picker",null)
b0.at!==$&&A.y()
b0.at=h
a9=A.Y(a6,"div","consult-result",null)
b0.ax!==$&&A.y()
b0.ax=a9
A.e(c0.appendChild(h))
A.e(c0.appendChild(a9))
A.e(b7.appendChild(c0))
c1=A.h(a6.documentElement)
if(t.m.b(c1)){A.e(c1.style).setProperty("--shake-max-deg","3deg")
A.e(c1.style).setProperty("--shake-max-px","2px")}$.ew.b=b0
$.ew.j().scl(new A.oQ())
h=A.e(c2.document)
a6=A.Y(h,"div","prompt",null)
A.e(a6.style).setProperty("transition-duration","0.3s")
A.e(A.h(h.body).appendChild(a6))
$.rD.b=new A.mj(a6)
a6=A.e(c2.document)
h=A.Y(a6,"div","broadcast",null)
A.e(A.h(a6.body).appendChild(h))
$.rB.b=new A.kl(h)
h=A.e(c2.document)
a6=A.Y(h,"div","ambient-notice",null)
A.e(A.h(h.body).appendChild(a6))
$.pH.b=new A.k6(a6)
a6=A.ul(A.e(c2.document))
a6.skV(A.yj())
a6.skX(A.yl())
a6.skW(A.yk())
$.aD.b=a6
a6=e.a
a=A.vB(a6==null?null:a6.c.h(0,"visitors"))
if(a!=null&&$.aE.j().lh(a))A.xm()
h=$.jE.j()
a6=e.a
h.lj(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(a8.b(a0))for(h=J.L(a0);h.m();){a1=h.gp()
if(A.aF(a1))$.ox.k(0,a1)}h=A.vn(A.e(c2.document))
h.skZ(new A.oR())
h.scl(new A.oU())
$.jH.b=h
h=A.uH(A.e(c2.document))
h.scl(new A.oV())
$.jF.b=h
h=A.uv(A.e(c2.document))
h.scl(new A.oW())
h.skY(new A.oX())
$.pI.b=h
h=e.a
a2=A.ux(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.t3(a2)
a3=$.eC
if(a3!=null){A.cY("world")
h=$.Z.j()
a6=a3
a7=new A.mE(h,a6,A.x(a7,t.J))
a7.it(h,a6)
$.o4=a7}h=B.b.v(A.G(A.e(A.e(c2.window).location).search),"shaders=live")
$.tf=h
if(h){h=$.eC
if(h!=null)h.bb()}A.t6()
A.e(c2.window).addEventListener("resize",A.am(new A.oY()))
A.e(c2.window).addEventListener("keydown",A.am(new A.oZ()))
A.e(c2.window).addEventListener("keyup",A.am(new A.p_()))
A.e(c2.window).addEventListener("keydown",A.am(new A.p0()))
A.e(c2.window).addEventListener("click",A.am(new A.oS()))
$.F.j().addEventListener("click",A.am(new A.oT()))
A.eA()
A.cY("raf")
A.a(A.e(c2.window).requestAnimationFrame(A.am(A.to())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ab(c4)
a5=A.cb(c4)
A.os(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$oO,r)},
wY(){var s=v.G
A.e(s.window).addEventListener("error",A.am(new A.oo()))
A.e(s.window).addEventListener("unhandledrejection",A.am(new A.op()))},
cY(a){if($.rJ===a)return
$.rJ=a
$.F.j().setAttribute("data-boot-phase",a)},
t4(){var s,r,q=$.cw.j().gb7(),p=$.F.j(),o=A.n5().gbE().h(0,"renderer")
if(o==null)o="legacy"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.x))
p.setAttribute("data-renderer-diagnostics",B.p.b8(q.C(),null))
p=$.bI
s=p==null?null:p.x
if(s!=null)$.F.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jK
r=p==null?null:p.y
if(r!=null)$.F.j().setAttribute("data-renderer-frame-submits",A.p(r))},
q2(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.be.j().a!==B.x){A.eD("save unavailable during rupture")
return}try{r=$.pJ.j()
q=$.T.j()
p=t.N
o=t.z
s=A.x(p,o)
n=$.aQ
m=$.eJ()
l=$.bJ
k=$.dK
j=$.h3.j().d
j=j==null?null:j.a.a
i=$.h3.j().d
J.bV(s,"player",new A.im(n,m,l,k,j,i==null?null:i.b).C())
n=$.aE.j()
m=A.pq(n.b,p)
l=A.pq(n.c,t.g)
n=n.e
J.bV(s,"visitors",new A.iY(m,l,n==null?null:new A.he(n.a,n.b,n.d,n.f,n.e,n.r)).C())
n=$.jE.j().b
n=A.N(n,A.o(n).c)
B.a.Z(n)
J.bV(s,"ambient",n)
n=A.N($.ox,A.o($.ox).c)
B.a.Z(n)
J.bV(s,"unverifiables",n)
n=$.pO
if(n!=null)J.bV(s,"ending",A.U(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.qA(q.c).C()
k=q.d
r.lv(A.qW(s,A.U(["houseSeed",n,"runSeed",m,"house",l,"time",A.U(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C()],p,o),2))
A.eD(a)}catch(h){A.eD("save failed")}},
eD(a){var s=A.h(A.e(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.uF(B.cJ,new A.ov(s),t.H)},
os(a,b){var s,r,q,p
A.cY("error")
s=A.p(a)
r=A.yw(s,"\n"," ")
s=$.pP
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.h(A.e(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.p(a):A.p(a)+"\n"+b.n(0)
$.F.j().setAttribute("data-boot-error",p)
A.e(s.console).error(p)},
rF(){if($.pK)return
$.pK=!0
var s=$.h5
if(s!=null)s.hI()
B.a.k($.c9,"arm")},
eA(){var s=0,r=A.b1(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$eA=A.b2(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a7(A.ez(),$async$eA)
case 2:o=null
q=4
s=7
return A.a7(A.aw(A.e(A.e(v.G.window).fetch("res/manifest.json")),t.m),$async$eA)
case 7:n=b
i=A
s=8
return A.a7(A.aw(A.e(n.json()),t.X),$async$eA)
case 8:o=i.e(b)
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
if(k!=null&&typeof k==="string"){l=A.h(A.e(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.G(k)}s=9
return A.a7(A.kX(A.f([A.or(o),A.on(o)],t.iw),t.H),$async$eA)
case 9:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$eA,r)},
ez(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ez=A.b2(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.ee[f]
p=7
s=10
return A.a7(A.aw(A.e(A.e(i.window).fetch(n)),h),$async$ez)
case 10:m=a0
s=11
return A.a7(A.aw(A.e(m.text()),g),$async$ez)
case 11:l=a0
k=A.u4(B.p.bo(l,null))
e=$.Z.b
if(e===$.Z)A.k(A.a3(""))
k.dV(e)
e=$.F.b
if(e===$.F)A.k(A.a3(""))
e.setAttribute("data-house-manifest","validated")
e=$.F.b
if(e===$.F)A.k(A.a3(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.a7(A.jM(),$async$ez)
case 12:s=13
return A.a7(A.jN(),$async$ez)
case 13:s=1
break
p=2
s=9
break
case 7:p=6
b=o.pop()
j=A.ab(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:$.F.j().setAttribute("data-house-manifest","unavailable")
A.e(i.console).warn("authored house manifest unavailable: "+A.p(c))
case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$ez,r)},
jM(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$jM=A.b2(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.e9[c]
p=7
s=10
return A.a7(A.aw(A.e(A.e(g.window).fetch(n)),f),$async$jM)
case 10:m=b1
s=11
return A.a7(A.aw(A.e(m.text()),e),$async$jM)
case 11:l=b1
b=B.p.bo(l,null)
b=h.b(b)?b:A.cx("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.cx("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aF(a)?a:A.cx("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.cx("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.az(a,!0,d):A.cx("assets is not a list")
a4=A.I(a3)
a5=a4.i("R<1,bX>")
a3=A.N(new A.R(a3,a4.i("bX(1)").a(A.ye()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.az(a,!0,d):A.cx("placements is not a list")
a5=A.I(a4)
a6=a5.i("R<1,ch>")
a4=A.N(new A.R(a4,a5.i("ch(1)").a(A.yf()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.lf(a1,a2,a0,a3,a4)
a1=$.Z.b
if(a1===$.Z)A.k(A.a3(""))
k.dV(a1)
$.pQ=k
a1=$.bI
if(a1!=null)a1.hW(k)
a1=$.F.b
if(a1===$.F)A.k(A.a3(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.F.b
if(a1===$.F)A.k(A.a3(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.F.b
if(a1===$.F)A.k(A.a3(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ab(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.F.j().setAttribute("data-house-inventory","unavailable")
A.e(g.console).warn("authored house inventory unavailable: "+A.p(a8))
case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$jM,r)},
jN(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$jN=A.b2(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:a5=$.pQ
if(a5==null){s=1
break}n=null
h=t.j,g=t.P,f=v.G,e=t.m,d=t.N,c=t.X,b=0
case 3:if(!(b<2)){s=5
break}m=B.er[b]
p=7
s=10
return A.a7(A.aw(A.e(A.e(f.window).fetch(m)),e),$async$jN)
case 10:l=a8
s=11
return A.a7(A.aw(A.e(l.text()),d),$async$jN)
case 11:k=a8
a=B.p.bo(k,null)
a=g.b(a)?a:A.ey("house soundscape is not an object")
a0=a.h(0,"emitters")
a1=h.b(a0)?A.az(a0,!0,c):A.ey("emitters is not a list")
a2=A.I(a1)
a3=a2.i("R<1,bW>")
a1=A.N(new A.R(a1,a2.i("bW(1)").a(A.yu()),a3),a3.i("a1.E"))
a1.$flags=1
a0=a.h(0,"schemaVersion")
a2=A.aF(a0)?a0:A.ey("schemaVersion is not an integer")
a0=a.h(0,"sourceRef")
a3=typeof a0=="string"&&a0.length!==0?a0:A.ey("sourceRef is not a string")
j=new A.lk(a2,a3,a1)
a1=$.Z.b
if(a1===$.Z)A.k(A.a3(""))
j.lr(a1,a5)
$.rT=j
a1=$.F.b
if(a1===$.F)A.k(A.a3(""))
a1.setAttribute("data-house-soundscape","validated")
a1=$.F.b
if(a1===$.F)A.k(A.a3(""))
a1.setAttribute("data-house-soundscape-source",m)
a1=$.F.b
if(a1===$.F)A.k(A.a3(""))
a1.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
a6=o.pop()
i=A.ab(a6)
n=i
s=9
break
case 6:s=2
break
case 9:case 4:++b
s=3
break
case 5:$.F.j().setAttribute("data-house-soundscape","unavailable")
A.e(f.console).warn("authored house soundscape unavailable: "+A.p(n))
case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$jN,r)},
pN(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.L(t.h.b(s)?s:new A.bN(s,A.I(s).i("bN<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.G(q))}},
on(a){var s=0,r=A.b1(t.H),q,p,o,n,m
var $async$on=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.x(n,n)
n=a==null
A.pN(A.h(n?null:a.sfx),m,"")
A.pN(A.h(n?null:a.ir),m,"ir-")
q=A.h(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.G(p))
s=2
return A.a7(A.k9(m,$.Z.j()),$async$on)
case 2:o=c
$.h5=o
if($.pK)o.hI()
return A.b_(null,r)}})
return A.b0($async$on,r)},
or(a){var s=0,r=A.b1(t.H),q,p,o
var $async$or=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.x(p,p)
A.pN(A.h(a==null?null:a.tex),o,"")
p=$.eC
p=p==null?null:p.ar(o)
if(p==null)p=A.pb(t.H)
q=$.bI
q=q==null?null:q.ar(o)
s=2
return A.a7(A.kX(A.f([p,q==null?A.pb(t.H):q],t.iw),t.H),$async$or)
case 2:return A.b_(null,r)}})
return A.b0($async$or,r)},
t6(){var s,r,q=v.G,p=A.a(A.e(q.window).innerWidth),o=A.a(A.e(q.window).innerHeight)
q=$.F.j()
s=p>0?p:800
q.width=s
s=$.F.j()
q=o>0?o:600
s.height=q
q=$.eC
if(q!=null)q.aC(A.a($.F.j().width),A.a($.F.j().height))
$.cw.j().aC(A.a($.F.j().width),A.a($.F.j().height))
q=$.bI
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.F.j().setAttribute("data-renderer-surface",r)},
xj(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
A.bF(c2)
try{s=c2
if(!$.rS){$.pV=s
$.rS=!0}e=s
d=$.pV
if(typeof e!=="number")return e.a7()
r=(e-d)/1000
$.pV=s
e=r
if(typeof e!=="number")return e.ct()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.a6()
if(e>0.25)r=0.25
A.xE(r)
if(!$.pW){e=$.nY
d=r
if(typeof d!=="number")return A.jU(d)
d=$.nY=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.ct()
c=c<10}else c=!1
if(!c)break
$.pY=$.eJ()
d=$.T.b
if(d===$.T)A.k(A.a3(""))
d.jM(0.008333333333333333)
d=$.tQ()
c=$.T.b
if(c===$.T)A.k(A.a3(""))
c=c.gal()
b=$.T.b
if(b===$.T)A.k(A.a3(""))
d=d.cV(c.a,b.gal().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.r)(d),++a){p=d[a]
B.a.k($.c9,"clock:"+p.a)}d=$.tR()
c=$.T.b
if(c===$.T)A.k(A.a3(""))
c=c.gal()
b=$.T.b
if(b===$.T)A.k(A.a3(""))
d=d.cV(c.a,b.gal().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.r)(d),++a){o=d[a]
B.a.k($.c9,"service:"+o.a+":"+o.b)}A.xH()
d=$.aE.b
if(d===$.aE)A.k(A.a3(""))
c=$.T.b
if(c===$.T)A.k(A.a3(""))
d.f=c.r.c>=0.5
d=d.d
a0=A.az(d,!1,e)
a0.$flags=3
a1=a0
B.a.G(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.k(A.a3(""))
d.l6(a1)}A.xD()
A.xG()
A.xF()
A.xC(0.008333333333333333)
d=$.ev.b
if(d===$.ev)A.k(A.a3(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.be.b
if(d===$.be)A.k(A.a3(""))
n=d.a!==B.x
c=$.Z.b
if(c===$.Z)A.k(A.a3(""))
d.jN(0.008333333333333333,c)
if(n){d=$.be.b
if(d===$.be)A.k(A.a3(""))
d=d.e}else d=!1
if(d)A.t7(!0)
d=$.nY-0.008333333333333333
$.nY=d
c=q
if(typeof c!=="number")return c.S()
q=c+1}m=B.d.a1(d/0.008333333333333333,0,1)
e=$.q7=A.r8($.tS(),$.eJ(),m)
l=$.h5
if(l!=null){d=l
c=Math.sin($.bJ)
b=Math.cos($.bJ)
a2=A.e(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aG(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hY($.aQ)
for(e=$.c9.length,a=0;a<$.c9.length;$.c9.length===e||(0,A.r)($.c9),++a){k=$.c9[a]
A.wK(l,k)}B.a.G($.c9)}}j=$.eC
if(j!=null){$.bE.j().dH($.jY(),$.bJ,$.dK)
e=$.bf===$.ew.j()?1:0
j.c6=e
$.rZ=r
$.cw.j().aE(A.pn($.T.j().gdL()))}else if($.bd.j().a===B.a0){$.bE.j().dH($.jY(),$.bJ,$.dK)
e=$.bI
if(e!=null){d=$.bE.j()
c=d.a
a3=new A.z(c.a,c.b,c.c)
c=d.b
a4=new A.z(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.qN(a3,a4,new A.z(d.a,d.b,d.c))
a7=A.pj(a5,60,1.0471975511965976,0.1)
e.go=new A.dY(a6,a7,a7.U(0,a6),a3,a4,0.1,60,a5)}e=$.bI
if(e!=null)e.i1($.Z.j(),$.aQ)
e=$.bI
if(e!=null)e.hX($.Z.j(),$.aQ,$.jY(),$.dJ.j().gbh(),Math.sin(3.141592653589793*$.dJ.j().gbh()))
if($.rY!==$.be.j().a){$.rY=$.be.j().a
$.q_=$.q_+1}e=$.bI
if(e!=null){d=s
if(typeof d!=="number")return d.lz()
d/=1000
c=$.q_
b=A.a(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.k(A.au(d,"timeSeconds",null))
if(b<0)A.k(A.w("frame clock seeds must be non-negative",null))
e.k4=d
e.ok=c
e.p1=b}e=$.bI
if(e!=null){d=$.be.j()
c=$.pZ
a8=d.a
a9=d.ge3()
b0=a9>0?B.d.a1(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.az
b=a8===B.H?0.45:1
if(d>=1)b3=a8===B.N?b0:1
else b3=0
if(d>=2)d=a8===B.ax?b0:1
else d=0
b4=b1?320:0
b5=b1?5:8
b6=b2?1:0
b7=b2?b0:0
b8=b2?b0:0
b9=b2?b0:0
c0=b2?b0:0
e.k1=new A.ip(b,b3,d,b4,b5,b6,b7,b8,b9,c0,b2?b0:0,c)}$.cw.j().aE(A.pn($.T.j().gdL()))
i=$.bI
if(i!=null){h=i.gkA()
if(h!=null){$.F.j().setAttribute("data-renderer-frame-stats",h)
e=$.F.j()
d=i.gkz()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.cY("running")
e=$.bu.j()
e.e=e.d=0
e.c.G(0)
A.a(A.e(v.G.window).requestAnimationFrame(A.am(A.to())))}catch(c1){g=A.ab(c1)
f=A.cb(c1)
A.os(g,f)}},
wK(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.l0("confirm")
break
case"ambient-winnow":a.dJ("winnow",0.28)
break
case"ambient-gate":a.dJ("gate",0.22)
break
case"clock:tick":A.pX(a,p,"tick")
break
case"clock:chime":A.pX(a,p,"chime")
break
default:if(B.b.V(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.pX(a,q,s[2])}}}},
pX(a,b,c){var s,r,q,p,o,n,m=$.rT,l=$.pQ
if(m==null||l==null)return
s=m.kl(b)
r=s.f.h(0,c)
if(r==null)r=A.k(A.l("sound emitter "+s.a+" has no cue for "+c))
q=$.Z.j()
p=l.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.k(A.l("sound room missing: "+o))
a.l1(r,n.d.S(0,s.d.U(0,p)),s.e,o)},
xE(a){var s=$.pP
if(s==null)return
s.textContent=""+B.d.aL(a>0?1/a:0)+" fps"},
xC(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.ta||$.bf!=null||$.aD.j().z){$.jX().a=new A.b(0,0,0)
return}s=$.bu.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga4():p
n=$.bu.j().d
m=$.bu.j().e
$.bJ=$.bJ+n*0.0028
s=$.dK-m*0.0028
$.dK=s
$.dK=B.d.a1(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.bJ)+l*Math.sin($.bJ),0,l*Math.cos($.bJ)-s*Math.sin($.bJ)).ga4().U(0,2)
s=$.jX()
if(!isFinite(a1)||a1<0)A.k(A.au(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.au(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.S(0,k.a7(0,i).U(0,1-l))
s.a=l
h=$.h3.j().kT($.Z.j(),$.aQ,$.eJ(),l.U(0,a1))
$.q4=h.a
if($.be.j().a!==B.aA&&$.be.j().a!==B.H)$.aQ=h.b
$.bE.j().dH($.eJ(),$.bJ,$.dK)
s=$.bE.j()
l=$.Z.j()
g=A.yq(s,$.aQ,l)
$.rD.j().i3(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.qf($.bE.j(),$.Z.j(),$.aQ)
break
case 1:e=A.ts($.bE.j(),$.Z.j(),$.aQ)
break
case 2:d=A.tt($.bE.j(),$.Z.j(),$.aQ)
break
case 3:break}s=$.rB.j()
c=$.jZ().hR($.T.j().gal().a)
l=c==null?a0:c.h(0,"status")
s.dS(l,$.aQ==="living-room")
if($.bu.j().c.ak(0,"KeyE")){s=$.T.j().gal()
l=e==null
i=l?a0:e.a
b=B.a.ah($.aE.j().f2(21),$.aE.j().gkI())
if(s.a===21&&i==="front-door"&&b){s=$.be.j()
$.Z.j()
s.ie(B.cC,A.ap(s.c,t.N))
B.a.k($.c9,"collapse")
A.eD("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.T.j().ib(1,1)){f.d=!0
s=$.ev.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.h5
if(s!=null)s.bW()}else if(d!=null)if(d.w){s=$.T.j()
if(s.f.cw(1))d.w=!1}else d.w=!0}s=$.ev.j()
if(s.a!=null&&s.b>0){a=$.ev.j().a
if(a!=null&&A.qf($.bE.j(),$.Z.j(),$.aQ)!==a){s=$.ev.j()
s.a=null
s.b=0}}},
xH(){var s,r,q,p,o,n,m,l,k,j=null
if($.aD.j().z||$.bf!=null||$.aE.j().e!=null)return
s=$.T.j().gal()
for(r=$.aE.j().f2(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aE.b
if(m===$.aE)A.k(A.a3(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aE.b
if(r===$.aE)A.k(A.a3(""))
l=r.jS(n)
if(!(l instanceof A.iU))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.qD(A.e(v.G.document),"exitPointerLock",j,j,j,j)
$.jX().a=new A.b(0,0,0)
r=$.aD.b
if(r===$.aD)A.k(A.a3(""))
r.e1(n.a,k)
return}},
xm(){var s=$.aE.j().e,r=s==null,q=r?null:s.gc2()
if(r||q==null)return
$.aD.j().e1(s.a.a,q)
if(s.d!==B.I){$.aD.j().cu(q)
A.q3()}A.eD("restored visitor")},
xD(){var s,r,q,p,o=$.T.j().gal(),n=$.jE.j().kj(o.a,o.b)
if(n.length===0)return
s=B.a.gaW(n)
$.jE.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.pH.j().e0(q,s.e)
p=A.xN(r)
if(p!=null)B.a.k($.c9,"ambient-"+p)},
xG(){var s,r,q,p,o=$.T.j().gal()
if(o.b<20)return
s=o.a
if(!$.ox.k(0,s))return
r=$.jZ().f
r===$&&A.j()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.az(q,!0,t.N):B.l
p=A.yo(r,$.T.j().b,s)
if(p!=null)$.pH.j().e0("noticed",p)},
t7(a){var s,r,q,p,o
if($.pO!=null)return
s=$.T.j().gal()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("aT<2>")
o=A.uw(new A.kD(s.a,1-r,new A.Q(new A.aT(q,p),p.i("u(n.E)").a(new A.ot()),p.i("Q<n.E>")).gq(0),$.T.j().r.d,a))
if(o==null)return
A.t3(o)
A.q2("ending recorded")},
t3(a){var s,r,q
$.pO=a
$.ta=!0
$.jX().a=new A.b(0,0,0)
$.bf=$.pI.j()
s=$.pI.j()
r=$.jZ().w
r===$&&A.j()
q=r.h(0,a.a.b)
s.i5(a,t.j.b(q)?A.az(q,!0,t.N):B.l)},
wE(a){var s,r,q,p,o
A:{if("open"===a){s=B.T
break A}if("chain"===a){s=B.aX
break A}if("through-door"===a){s=B.aY
break A}if("letterbox"===a){s=B.aZ
break A}s=B.J
break A}r=$.aE.j().k5(s)
if(s===B.T){q=$.Z.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.h5
if(p!=null)p.bW()}}if(!(r instanceof A.iT)||s===B.J){$.aD.j().cd()
$.bu.j().aK($.F.j())
return}o=r.a.gc2()
if(o==null){A.pM()
$.aD.j().cd()
$.bu.j().aK($.F.j())
return}$.aD.j().cu(o)
A.q3()},
wH(){var s,r=$.aE.j().jO()
if(!(r instanceof A.fu)||r.b){A.pM()
$.aD.j().cd()
$.bu.j().aK($.F.j())
return}s=r.a.gc2()
if(s==null){A.pM()
$.aD.j().cd()
$.bu.j().aK($.F.j())
return}$.aD.j().cu(s)
A.q3()},
q3(){var s,r,q,p,o=$.aD.j(),n=A.e(v.G.document),m=A.f([],t.fR)
for(s=$.jG.j().dZ(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.c7(p.a,B.a.gP(p.c).n(0)))}o.i4(n,m)},
wF(a){var s,r,q,p=$.aE.j().k6(a,!0,$.jG.j())
if(p==null)return
s=$.jG.j().kd(p,B.dU)
r=$.aD.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.j()
r.textContent=q},
pM(){var s,r=$.Z.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.h5
if(s!=null)s.bW()}},
xF(){var s,r,q,p,o,n,m,l,k
for(s=$.Z.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.be.b
if(k===$.be)A.k(A.a3(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fN:function fN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
nL:function nL(a){this.a=a},
nM:function nM(a){this.a=a},
em:function em(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oP:function oP(a){this.a=a},
oQ:function oQ(){},
oR:function oR(){},
oU:function oU(){},
oV:function oV(){},
oW:function oW(){},
oX:function oX(){},
oY:function oY(){},
oZ:function oZ(){},
p_:function p_(){},
p0:function p0(){},
oS:function oS(){},
oT:function oT(){},
oo:function oo(){},
op:function op(){},
ov:function ov(a){this.a=a},
ot:function ot(){},
qD(a,b,c,d,e,f){var s=a[b]()
return s},
qE(a,b,c){var s=null
return c.a(A.qD(a,b,s,s,s,s))},
uj(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
ui(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
tn(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
p4(a,b){var s=B.d.aB(a),r=A.tn(s,b),q=A.tn(s+1,b),p=B.d.a1(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
xN(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
yz(a){var s,r,q,p,o,n,m,l
a.F()
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
return new A.bP(B.R,p,new Uint16Array(A.a2(a.b)),new A.hd(new A.z(s.a,s.b,s.c),new A.z(s.d,s.e,s.f)))},
y_(a){var s,r,q,p,o,n,m,l=B.p.bo(a,null),k=t.f
if(!k.b(l))throw A.c(B.di)
s=t.N
r=t.z
q=A.aU(l,s,r)
p=A.x(s,t.P)
for(o=0;o<11;++o){n=B.e8[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.x(s,r))
else if(k.b(m))p.l(0,n,A.aU(m,s,r))
else throw A.c(A.ac('text.json section "'+n+'" must be an object',null,null))}return p},
yo(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbf(a)
s=new A.en()
s.cz((b^274953^c)>>>0)
r=s.am(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.pd.prototype={}
J.hY.prototype={
T(a,b){return a===b},
gE(a){return A.ff(a)},
n(a){return"Instance of '"+A.ir(a)+"'"},
gM(a){return A.ca(A.pS(this))}}
J.i1.prototype={
n(a){return String(a)},
gE(a){return a?519018:218159},
gM(a){return A.ca(t.y)},
$ia0:1,
$iu:1}
J.f0.prototype={
T(a,b){return null==b},
n(a){return"null"},
gE(a){return 0},
$ia0:1,
$iai:1}
J.f1.prototype={$iW:1}
J.cG.prototype={
gE(a){return 0},
gM(a){return B.fH},
n(a){return String(a)}}
J.il.prototype={}
J.dv.prototype={}
J.ci.prototype={
n(a){var s=a[$.tz()]
if(s==null)s=a[$.eI()]
if(s==null)return this.ih(a)
return"JavaScript function for "+J.dR(s)},
$id9:1}
J.e8.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.e9.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.q.prototype={
c0(a,b){return new A.bN(a,A.I(a).i("@<1>").D(b).i("bN<1,2>"))},
k(a,b){A.I(a).c.a(b)
a.$flags&1&&A.b3(a,29)
a.push(b)},
l9(a,b){var s
a.$flags&1&&A.b3(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.qT(b,null))
return a.splice(b,1)[0]},
ak(a,b){var s
a.$flags&1&&A.b3(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a8(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.I(a).i("n<1>").a(b)
a.$flags&1&&A.b3(a,"addAll",2)
if(Array.isArray(b)){this.iz(a,b)
return}for(s=J.L(b);s.m();)a.push(s.gp())},
iz(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.ao(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.b3(a,"clear","clear")
a.length=0},
bC(a,b,c){var s=A.I(a)
return new A.R(a,s.D(c).i("1(2)").a(b),s.i("@<1>").D(c).i("R<1,2>"))},
aY(a,b){var s,r=A.bY(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.p(a[s]))
return r.join(b)},
bw(a,b,c,d){var s,r,q
d.a(b)
A.I(a).D(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.ao(a))}return r},
cc(a,b,c){var s,r,q,p=A.I(a)
p.i("u(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.ao(a))}p=c.$0()
return p},
R(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
gaW(a){if(a.length>0)return a[0]
throw A.c(A.hZ())},
gP(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.hZ())},
gbf(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.c(A.hZ())
throw A.c(A.uQ())},
Y(a,b){var s,r
A.I(a).i("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.ao(a))}return!1},
ah(a,b){var s,r
A.I(a).i("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.ao(a))}return!0},
a_(a,b){var s,r,q,p,o,n=A.I(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.b3(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.x2()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.a6()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eG(b,2))
if(p>0)this.js(a,p)},
Z(a){return this.a_(a,null)},
js(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cv(a,b){var s,r,q,p
a.$flags&2&&A.b3(a,"shuffle")
s=a.length
while(s>1){r=b.am(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
ce(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a8(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.a8(a[s],b))return!0
return!1},
gI(a){return a.length===0},
gL(a){return a.length!==0},
n(a){return A.pc(a,"[","]")},
gu(a){return new J.d0(a,a.length,A.I(a).i("d0<1>"))},
gE(a){return A.ff(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.b3(a,"set length","change the length of")
if(b<0)throw A.c(A.aM(b,0,null,"newLength",null))
if(b>a.length)A.I(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.oF(a,b))
return a[b]},
l(a,b,c){A.I(a).c.a(c)
a.$flags&2&&A.b3(a)
if(!(b>=0&&b<a.length))throw A.c(A.oF(a,b))
a[b]=c},
dX(a,b){return new A.bT(a,b.i("bT<0>"))},
hr(a,b){var s
A.I(a).i("u(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gM(a){return A.ca(A.I(a))},
$iD:1,
$in:1,
$iC:1}
J.i_.prototype={
lp(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ir(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.lA.prototype={}
J.d0.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iad:1}
J.df.prototype={
H(a,b){var s
A.bF(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcg(b)
if(this.gcg(a)===s)return 0
if(this.gcg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcg(a){return a===0?1/a<0:a<0},
aM(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.av(""+a+".toInt()"))},
jZ(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.av(""+a+".ceil()"))},
aB(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.av(""+a+".floor()"))},
aL(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.av(""+a+".round()"))},
a1(a,b,c){if(this.H(b,c)>0)throw A.c(A.q8(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
co(a,b){var s
if(b>20)throw A.c(A.aM(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcg(a))return"-"+s
return s},
lo(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.c(A.aM(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.av("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.d(p,1)
s=p[1]
if(3>=r)return A.d(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.U("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
X(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ij(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eT(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.eT(a,b)},
eT(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.av("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
cT(a,b){var s
if(a>0)s=this.bV(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jw(a,b){if(0>b)throw A.c(A.q8(b))
return this.bV(a,b)},
bV(a,b){return b>31?0:a>>>b},
gM(a){return A.ca(t.o)},
$iay:1,
$iv:1,
$iaI:1}
J.f_.prototype={
gM(a){return A.ca(t.S)},
$ia0:1,
$ii:1}
J.i2.prototype={
gM(a){return A.ca(t.i)},
$ia0:1}
J.dg.prototype={
bc(a,b,c,d){var s=A.fg(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a0(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aM(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
V(a,b){return this.a0(a,b,0)},
B(a,b,c){return a.substring(b,A.fg(b,c,a.length))},
bH(a,b){return this.B(a,b,null)},
hK(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.uU(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.uV(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
U(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.cy)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
l_(a,b,c){var s=b-a.length
if(s<=0)return a
return this.U(c,s)+a},
cf(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aM(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ce(a,b){return this.cf(a,b,0)},
v(a,b){return A.yv(a,b,0)},
H(a,b){var s
A.G(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
n(a){return a},
gE(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gM(a){return A.ca(t.N)},
gq(a){return a.length},
$ia0:1,
$iay:1,
$iqO:1,
$im:1}
A.cS.prototype={
gu(a){return new A.eL(J.L(this.gaP()),A.o(this).i("eL<1,2>"))},
gq(a){return J.aS(this.gaP())},
gI(a){return J.qk(this.gaP())},
gL(a){return J.tZ(this.gaP())},
R(a,b){return A.o(this).y[1].a(J.k_(this.gaP(),b))},
n(a){return J.dR(this.gaP())}}
A.eL.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iad:1}
A.d2.prototype={
gaP(){return this.a}}
A.fC.prototype={$iD:1}
A.fA.prototype={
h(a,b){return this.$ti.y[1].a(J.aR(this.a,b))},
l(a,b,c){var s=this.$ti
J.bV(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.u_(this.a,b)},
k(a,b){var s=this.$ti
J.hc(this.a,s.c.a(s.y[1].a(b)))},
a_(a,b){var s
this.$ti.i("i(2,2)?").a(b)
s=b==null?null:new A.nr(this,b)
J.u0(this.a,s)},
$iD:1,
$iC:1}
A.nr.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bN.prototype={
c0(a,b){return new A.bN(this.a,this.$ti.i("@<1>").D(b).i("bN<1,2>"))},
gaP(){return this.a}}
A.dh.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.hs.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.mL.prototype={}
A.D.prototype={}
A.a1.prototype={
gu(a){var s=this
return new A.cj(s,s.gq(s),A.o(s).i("cj<a1.E>"))},
gI(a){return this.gq(this)===0},
Y(a,b){var s,r,q=this
A.o(q).i("u(a1.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.R(0,r)))return!0
if(s!==q.gq(q))throw A.c(A.ao(q))}return!1},
aY(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.p(p.R(0,0))
if(o!==p.gq(p))throw A.c(A.ao(p))
for(r=s,q=1;q<o;++q){r=r+b+A.p(p.R(0,q))
if(o!==p.gq(p))throw A.c(A.ao(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.p(p.R(0,q))
if(o!==p.gq(p))throw A.c(A.ao(p))}return r.charCodeAt(0)==0?r:r}},
dW(a,b){return this.ig(0,A.o(this).i("u(a1.E)").a(b))},
bC(a,b,c){var s=A.o(this)
return new A.R(this,s.D(c).i("1(a1.E)").a(b),s.i("@<a1.E>").D(c).i("R<1,2>"))},
be(a,b){var s=A.o(this).i("a1.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
bd(a){return this.be(0,!0)},
b_(a){var s,r=this,q=A.pg(A.o(r).i("a1.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.R(0,s))
return q}}
A.fq.prototype={
giX(){var s=J.aS(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjz(){var s=J.aS(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aS(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
R(a,b){var s=this,r=s.gjz()+b
if(b<0||r>=s.giX())throw A.c(A.lv(b,s.gq(0),s,"index"))
return J.k_(s.a,r)},
be(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aH(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.qC(0,n):J.qB(0,n)}r=A.bY(s,m.R(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.R(n,o+q))
if(m.gq(n)<l)throw A.c(A.ao(p))}return r},
bd(a){return this.be(0,!0)}}
A.cj.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aH(q),o=p.gq(q)
if(r.b!==o)throw A.c(A.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.R(q,s);++r.c
return!0},
$iad:1}
A.ck.prototype={
gu(a){return new A.dj(J.L(this.a),this.b,A.o(this).i("dj<1,2>"))},
gq(a){return J.aS(this.a)},
gI(a){return J.qk(this.a)},
R(a,b){return this.b.$1(J.k_(this.a,b))}}
A.d6.prototype={$iD:1}
A.dj.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.R.prototype={
gq(a){return J.aS(this.a)},
R(a,b){return this.b.$1(J.k_(this.a,b))}}
A.Q.prototype={
gu(a){return new A.M(J.L(this.a),this.b,this.$ti.i("M<1>"))}}
A.M.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iad:1}
A.bT.prototype={
gu(a){return new A.fw(J.L(this.a),this.$ti.i("fw<1>"))}}
A.fw.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iad:1}
A.af.prototype={
sq(a,b){throw A.c(A.av("Cannot change the length of a fixed-length list"))},
k(a,b){A.bg(a).i("af.E").a(b)
throw A.c(A.av("Cannot add to a fixed-length list"))}}
A.c4.prototype={
l(a,b,c){A.o(this).i("c4.E").a(c)
throw A.c(A.av("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.c(A.av("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).i("c4.E").a(b)
throw A.c(A.av("Cannot add to an unmodifiable list"))},
a_(a,b){A.o(this).i("i(c4.E,c4.E)?").a(b)
throw A.c(A.av("Cannot modify an unmodifiable list"))}}
A.ek.prototype={}
A.fl.prototype={
gq(a){return J.aS(this.a)},
R(a,b){var s=this.a,r=J.aH(s)
return r.R(s,r.gq(s)-1-b)}}
A.h2.prototype={}
A.c7.prototype={$r:"+(1,2)",$s:1}
A.bs.prototype={$r:"+(1,2,3)",$s:2}
A.fO.prototype={$r:"+(1,2,3,4)",$s:3}
A.eN.prototype={}
A.e_.prototype={
gI(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
n(a){return A.pi(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.ue()},
gN(){return new A.c8(this.ko(),A.o(this).i("c8<O<1,2>>"))},
ko(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gO(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("O<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.O(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
ba(a,b,c,d){var s=A.x(c,d)
this.ac(0,new A.ks(this,A.o(this).D(c).D(d).i("O<1,2>(3,4)").a(b),s))
return s},
$iS:1}
A.ks.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a5.prototype={
gq(a){return this.b.length},
geu(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a2(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.a2(b))return null
return this.b[this.a[b]]},
ac(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geu()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gO(){return new A.dF(this.geu(),this.$ti.i("dF<1>"))},
gao(){return new A.dF(this.b,this.$ti.i("dF<2>"))}}
A.dF.prototype={
gq(a){return this.a.length},
gI(a){return 0===this.a.length},
gL(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dG(s,s.length,this.$ti.i("dG<1>"))}}
A.dG.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iad:1}
A.eU.prototype={
bi(){var s=this,r=s.$map
if(r==null){r=new A.f2(s.$ti.i("f2<1,2>"))
A.tj(s.a,r)
s.$map=r}return r},
h(a,b){return this.bi().h(0,b)},
ac(a,b){this.$ti.i("~(1,2)").a(b)
this.bi().ac(0,b)},
gO(){var s=this.bi()
return new A.ak(s,A.o(s).i("ak<1>"))},
gao(){var s=this.bi()
return new A.aT(s,A.o(s).i("aT<2>"))},
gq(a){return this.bi().a}}
A.eO.prototype={
k(a,b){A.o(this).c.a(b)
A.uf()}}
A.cd.prototype={
gq(a){return this.b},
gI(a){return this.b===0},
gL(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dG(s,s.length,r.$ti.i("dG<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b_(a){return A.ph(this,this.$ti.c)}}
A.me.prototype={
$0(){return B.d.aB(1000*this.a.now())},
$S:17}
A.fm.prototype={}
A.n2.prototype={
au(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.fb.prototype={
n(a){return"Null check operator used on a null value"}}
A.i3.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iM.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.m2.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eS.prototype={}
A.fQ.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ic3:1}
A.cB.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ty(r==null?"unknown":r)+"'"},
gM(a){var s=A.qa(this)
return A.ca(s==null?A.bg(this):s)},
$id9:1,
gly(){return this},
$C:"$1",
$R:1,
$D:null}
A.hq.prototype={$C:"$0",$R:0}
A.hr.prototype={$C:"$2",$R:2}
A.iI.prototype={}
A.iF.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ty(s)+"'"}}
A.dX.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dX))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.jV(this.a)^A.ff(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ir(this.a)+"'")}}
A.iy.prototype={
n(a){return"RuntimeError: "+this.a}}
A.by.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
gO(){return new A.ak(this,A.o(this).i("ak<1>"))},
gao(){return new A.aT(this,A.o(this).i("aT<2>"))},
gN(){return new A.X(this,A.o(this).i("X<1,2>"))},
a2(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.kD(a)},
kD(a){var s=this.d
if(s==null)return!1
return this.by(s[this.bx(a)],a)>=0},
J(a,b){A.o(this).i("S<1,2>").a(b).ac(0,new A.lJ(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.kE(b)},
kE(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bx(a)]
r=this.by(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.e6(s==null?q.b=q.cO():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.e6(r==null?q.c=q.cO():r,b,c)}else q.kG(b,c)},
kG(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cO()
r=o.bx(a)
q=s[r]
if(q==null)s[r]=[o.cP(a,b)]
else{p=o.by(q,a)
if(p>=0)q[p].b=b
else q.push(o.cP(a,b))}},
l3(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.a2(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
ak(a,b){if((b&0x3fffffff)===b)return this.ix(this.c,b)
else return this.kF(b)},
kF(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bx(a)
r=n[s]
q=o.by(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.e4(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cA()}},
ac(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.ao(q))
s=s.c}},
e6(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cP(b,c)
else s.b=c},
ix(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.e4(s)
delete a[b]
return s.b},
cA(){this.r=this.r+1&1073741823},
cP(a,b){var s=this,r=A.o(s),q=new A.lR(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cA()
return q},
e4(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cA()},
bx(a){return J.bh(a)&1073741823},
by(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
n(a){return A.pi(this)},
cO(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ipf:1}
A.lJ.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.lR.prototype={}
A.ak.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cH(s,s.r,s.e,this.$ti.i("cH<1>"))}}
A.cH.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iad:1}
A.aT.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.al(s,s.r,s.e,this.$ti.i("al<1>"))}}
A.al.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iad:1}
A.X.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.f4(s,s.r,s.e,this.$ti.i("f4<1,2>"))}}
A.f4.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.O(s.a,s.b,r.$ti.i("O<1,2>"))
r.c=s.c
return!0}},
$iad:1}
A.f2.prototype={
bx(a){return A.xV(a)&1073741823},
by(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.oK.prototype={
$1(a){return this.a(a)},
$S:5}
A.oL.prototype={
$2(a,b){return this.a(a,b)},
$S:48}
A.oM.prototype={
$1(a){return this.a(A.G(a))},
$S:18}
A.bC.prototype={
gM(a){return A.ca(this.er())},
er(){return A.y4(this.$r,this.bP())},
n(a){return this.eX(!1)},
eX(a){var s,r,q,p,o,n=this.j0(),m=this.bP(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.qQ(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
j0(){var s,r=this.$s
while($.nN.length<=r)B.a.k($.nN,null)
s=$.nN[r]
if(s==null){s=this.iM()
B.a.l($.nN,r,s)}return s},
iM(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.i0(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ap(j,k)}}
A.eo.prototype={
bP(){return[this.a,this.b]},
T(a,b){if(b==null)return!1
return b instanceof A.eo&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gE(a){return A.cm(this.$s,this.a,this.b,B.k)}}
A.ep.prototype={
bP(){return[this.a,this.b,this.c]},
T(a,b){var s=this
if(b==null)return!1
return b instanceof A.ep&&s.$s===b.$s&&J.a8(s.a,b.a)&&J.a8(s.b,b.b)&&J.a8(s.c,b.c)},
gE(a){var s=this
return A.cm(s.$s,s.a,s.b,s.c)}}
A.eq.prototype={
bP(){return this.a},
T(a,b){if(b==null)return!1
return b instanceof A.eq&&this.$s===b.$s&&A.vY(this.a,b.a)},
gE(a){return A.cm(this.$s,A.v3(this.a),B.k,B.k)}}
A.ns.prototype={
cR(){var s=this.b
if(s===this)throw A.c(new A.dh("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.c(A.a3(""))
return s}}
A.cJ.prototype={
gM(a){return B.fA},
f3(a,b,c){return new Float32Array(a,b,c)},
$ia0:1,
$icJ:1}
A.eb.prototype={$ieb:1}
A.f9.prototype={
gjT(a){if(((a.$flags|0)&2)!==0)return new A.nT(a.buffer)
else return a.buffer},
j6(a,b,c,d){var s=A.aM(b,0,c,d,null)
throw A.c(s)},
ec(a,b,c,d){if(b>>>0!==b||b>c)this.j6(a,b,c,d)}}
A.nT.prototype={
f3(a,b,c){var s=A.v0(this.a,b,c)
s.$flags=3
return s}}
A.ib.prototype={
gM(a){return B.fB},
$ia0:1}
A.aA.prototype={
gq(a){return a.length},
eN(a,b,c,d,e){var s,r,q=a.length
this.ec(a,b,q,"start")
this.ec(a,c,q,"end")
if(b>c)throw A.c(A.aM(b,0,c,null,null))
s=c-b
if(e<0)throw A.c(A.w(e,null))
r=d.length
if(r-e<s)throw A.c(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibl:1}
A.f7.prototype={
h(a,b){A.cy(b,a,a.length)
return a[b]},
l(a,b,c){A.h4(c)
a.$flags&2&&A.b3(a)
A.cy(b,a,a.length)
a[b]=c},
hZ(a,b,c,d){t.id.a(d)
a.$flags&2&&A.b3(a,5)
this.eN(a,b,c,d,0)
return},
$iD:1,
$in:1,
$iC:1}
A.f8.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.b3(a)
A.cy(b,a,a.length)
a[b]=c},
i_(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.b3(a,5)
this.eN(a,b,c,d,e)
return},
$iD:1,
$in:1,
$iC:1}
A.f6.prototype={
gM(a){return B.fC},
b1(a,b,c){return new Float32Array(a.subarray(b,A.wC(b,c,a.length)))},
$ia0:1,
$ikP:1}
A.ic.prototype={
gM(a){return B.fD},
$ia0:1}
A.id.prototype={
gM(a){return B.fE},
h(a,b){A.cy(b,a,a.length)
return a[b]},
$ia0:1}
A.ie.prototype={
gM(a){return B.fF},
h(a,b){A.cy(b,a,a.length)
return a[b]},
$ia0:1}
A.ig.prototype={
gM(a){return B.fG},
h(a,b){A.cy(b,a,a.length)
return a[b]},
$ia0:1}
A.ih.prototype={
gM(a){return B.fJ},
h(a,b){A.cy(b,a,a.length)
return a[b]},
$ia0:1,
$ips:1}
A.ii.prototype={
gM(a){return B.fK},
h(a,b){A.cy(b,a,a.length)
return a[b]},
$ia0:1}
A.dl.prototype={
gM(a){return B.fL},
gq(a){return a.length},
h(a,b){A.cy(b,a,a.length)
return a[b]},
$ia0:1,
$idl:1}
A.fa.prototype={
gM(a){return B.fM},
gq(a){return a.length},
h(a,b){A.cy(b,a,a.length)
return a[b]},
$ia0:1,
$ifr:1}
A.fJ.prototype={}
A.fK.prototype={}
A.fL.prototype={}
A.fM.prototype={}
A.bQ.prototype={
i(a){return A.fV(v.typeUniverse,this,a)},
D(a){return A.rs(v.typeUniverse,this,a)}}
A.jd.prototype={}
A.jA.prototype={
n(a){return A.bv(this.a,null)}}
A.jb.prototype={
n(a){return this.a}}
A.fR.prototype={$icq:1}
A.no.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:19}
A.nn.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.np.prototype={
$0(){this.a.$0()},
$S:8}
A.nq.prototype={
$0(){this.a.$0()},
$S:8}
A.nQ.prototype={
iw(a,b){if(self.setTimeout!=null)self.setTimeout(A.eG(new A.nR(this,b),0),a)
else throw A.c(A.av("`setTimeout()` not found."))}}
A.nR.prototype={
$0(){this.b.$0()},
$S:0}
A.j1.prototype={
cW(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cC(a)
else{s=r.a
if(q.i("bj<1>").b(a))s.eb(a)
else s.bN(a)}},
cX(a,b){var s=this.a
if(this.b)s.aN(new A.ax(a,b))
else s.bJ(new A.ax(a,b))}}
A.o1.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.o2.prototype={
$2(a,b){this.a.$2(1,new A.eS(a,t.l.a(b)))},
$S:59}
A.oB.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:63}
A.bt.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jt(a,b){var s,r,q
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
o.d=null}q=o.jt(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.rn
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
o.a=A.rn
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.c(A.l("sync*"))}return!1},
lA(a){var s,r,q=this
if(a instanceof A.c8){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.L(a)
return 2}},
$iad:1}
A.c8.prototype={
gu(a){return new A.bt(this.a(),this.$ti.i("bt<1>"))}}
A.ax.prototype={
n(a){return A.p(this.a)},
$ia6:1,
gbg(){return this.b}}
A.kW.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.ei(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ab(p)
q=A.cb(p)
l=r
o=q
n=A.pT(l,o)
l=new A.ax(l,o)
m.b.aN(l)
return}m.b.ei(s)}},
$S:0}
A.kZ.prototype={
$2(a,b){var s,r,q=this
A.ex(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aN(new A.ax(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aN(new A.ax(r,s))}},
$S:32}
A.kY.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bV(r,k.b,a)
if(J.a8(s,0)){q=A.f([],j.i("q<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hc(q,l)}k.c.bN(q)}}else if(J.a8(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aN(new A.ax(q,o))}},
$S(){return this.d.i("ai(0)")}}
A.j5.prototype={
cX(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.bJ(A.x1(a,b))},
f6(a){return this.cX(a,null)}}
A.fx.prototype={
cW(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.cC(r.i("1/").a(a))}}
A.dB.prototype={
kS(a){if((this.c&15)!==6)return!0
return this.b.b.dQ(t.iW.a(this.d),a.a,t.y,t.K)},
kC(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.ll(q,m,a.b,o,n,t.l)
else p=l.dQ(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ab(s))){if((r.c&1)!==0)throw A.c(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ah.prototype={
dR(a,b,c){var s,r,q=this.$ti
q.D(c).i("1/(2)").a(a)
s=$.aa
if(s===B.r){if(!t.ng.b(b)&&!t.mq.b(b))throw A.c(A.au(b,"onError",u.c))}else{c.i("@<0/>").D(q.c).i("1(2)").a(a)
b=A.xl(b,s)}r=new A.ah(s,c.i("ah<0>"))
this.cB(new A.dB(r,3,a,b,q.i("@<1>").D(c).i("dB<1,2>")))
return r},
eW(a,b,c){var s,r=this.$ti
r.D(c).i("1/(2)").a(a)
s=new A.ah($.aa,c.i("ah<0>"))
this.cB(new A.dB(s,19,a,b,r.i("@<1>").D(c).i("dB<1,2>")))
return s},
jv(a){this.a=this.a&1|16
this.c=a},
bM(a){this.a=a.a&30|this.a&1
this.c=a.c},
cB(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.cB(a)
return}r.bM(s)}A.jP(null,null,r.b,t.M.a(new A.nu(r,a)))}},
eB(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.eB(a)
return}m.bM(n)}l.a=m.bT(a)
A.jP(null,null,m.b,t.M.a(new A.nz(l,m)))}},
bk(){var s=t.F.a(this.c)
this.c=null
return this.bT(s)},
bT(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ei(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bj<1>").b(a))A.nx(a,r,!0)
else{s=r.bk()
q.c.a(a)
r.a=8
r.c=a
A.dC(r,s)}},
bN(a){var s,r=this
r.$ti.c.a(a)
s=r.bk()
r.a=8
r.c=a
A.dC(r,s)},
iL(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bk()
q.bM(a)
A.dC(q,r)},
aN(a){var s=this.bk()
this.jv(a)
A.dC(this,s)},
cC(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bj<1>").b(a)){this.eb(a)
return}this.iB(a)},
iB(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.jP(null,null,s.b,t.M.a(new A.nw(s,a)))},
eb(a){A.nx(this.$ti.i("bj<1>").a(a),this,!1)
return},
bJ(a){this.a^=2
A.jP(null,null,this.b,t.M.a(new A.nv(this,a)))},
$ibj:1}
A.nu.prototype={
$0(){A.dC(this.a,this.b)},
$S:0}
A.nz.prototype={
$0(){A.dC(this.b,this.a.a)},
$S:0}
A.ny.prototype={
$0(){A.nx(this.a.a,this.b,!0)},
$S:0}
A.nw.prototype={
$0(){this.a.bN(this.b)},
$S:0}
A.nv.prototype={
$0(){this.a.aN(this.b)},
$S:0}
A.nC.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.lk(t.mY.a(q.d),t.z)}catch(p){s=A.ab(p)
r=A.cb(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.k8(q)
n=k.a
n.c=new A.ax(q,o)
q=n}q.b=!0
return}if(j instanceof A.ah&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ah){m=k.b.a
l=new A.ah(m.b,m.$ti)
j.dR(new A.nD(l,m),new A.nE(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.nD.prototype={
$1(a){this.a.iL(this.b)},
$S:19}
A.nE.prototype={
$2(a,b){A.ex(a)
t.l.a(b)
this.a.aN(new A.ax(a,b))},
$S:33}
A.nB.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dQ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ab(l)
r=A.cb(l)
q=s
p=r
if(p==null)p=A.k8(q)
o=this.a
o.c=new A.ax(q,p)
o.b=!0}},
$S:0}
A.nA.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.kS(s)&&p.a.e!=null){p.c=p.a.kC(s)
p.b=!1}}catch(o){r=A.ab(o)
q=A.cb(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.k8(p)
m=l.b
m.c=new A.ax(p,n)
p=m}p.b=!0}},
$S:0}
A.j2.prototype={}
A.jy.prototype={}
A.h1.prototype={$irf:1}
A.jr.prototype={
lm(a){var s,r,q
t.M.a(a)
try{if(B.r===$.aa){a.$0()
return}A.t8(null,null,this,a,t.H)}catch(q){s=A.ab(q)
r=A.cb(q)
A.q0(A.ex(s),t.l.a(r))}},
f5(a){return new A.nO(this,t.M.a(a))},
lk(a,b){b.i("0()").a(a)
if($.aa===B.r)return a.$0()
return A.t8(null,null,this,a,b)},
dQ(a,b,c,d){c.i("@<0>").D(d).i("1(2)").a(a)
d.a(b)
if($.aa===B.r)return a.$1(b)
return A.xp(null,null,this,a,b,c,d)},
ll(a,b,c,d,e,f){d.i("@<0>").D(e).D(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aa===B.r)return a.$2(b,c)
return A.xo(null,null,this,a,b,c,d,e,f)},
hG(a,b,c,d){return b.i("@<0>").D(c).D(d).i("1(2,3)").a(a)}}
A.nO.prototype={
$0(){return this.a.lm(this.b)},
$S:0}
A.ou.prototype={
$0(){A.uB(this.a,this.b)},
$S:0}
A.fE.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
gO(){return new A.dD(this,this.$ti.i("dD<1>"))},
gao(){var s=this.$ti
return A.i7(new A.dD(this,s.i("dD<1>")),new A.nF(this),s.c,s.y[1])},
a2(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iP(a)},
iP(a){var s=this.d
if(s==null)return!1
return this.aO(this.eq(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.rh(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.rh(q,b)
return r}else return this.j1(b)},
j1(a){var s,r,q=this.d
if(q==null)return null
s=this.eq(q,a)
r=this.aO(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ef(s==null?m.b=A.pz():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ef(r==null?m.c=A.pz():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.pz()
p=A.jV(b)&1073741823
o=q[p]
if(o==null){A.pA(q,p,[b,c]);++m.a
m.e=null}else{n=m.aO(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ac(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eg()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.ao(m))}},
eg(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.bY(i.a,null,!1,t.z)
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
ef(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.pA(a,b,c)},
eq(a,b){return a[A.jV(b)&1073741823]}}
A.nF.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.fG.prototype={
aO(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dD.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gL(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.fF(s,s.eg(),this.$ti.i("fF<1>"))}}
A.fF.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.ao(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iad:1}
A.bB.prototype={
ex(){return new A.bB(A.o(this).i("bB<1>"))},
gu(a){var s=this,r=new A.dH(s,s.r,A.o(s).i("dH<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
v(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Z.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Z.a(r[b])!=null}else return this.iO(b)},
iO(a){var s=this.d
if(s==null)return!1
return this.aO(s[this.cH(a)],a)>=0},
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ee(s==null?q.b=A.pB():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ee(r==null?q.c=A.pB():r,b)}else return q.iy(b)},
iy(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.pB()
r=p.cH(a)
q=s[r]
if(q==null)s[r]=[p.cF(a)]
else{if(p.aO(q,a)>=0)return!1
q.push(p.cF(a))}return!0},
ak(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.eC(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.eC(s.c,b)
else return s.jr(b)},
jr(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cH(a)
r=n[s]
q=o.aO(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.f_(p)
return!0},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cN()}},
ee(a,b){A.o(this).c.a(b)
if(t.Z.a(a[b])!=null)return!1
a[b]=this.cF(b)
return!0},
eC(a,b){var s
if(a==null)return!1
s=t.Z.a(a[b])
if(s==null)return!1
this.f_(s)
delete a[b]
return!0},
cN(){this.r=this.r+1&1073741823},
cF(a){var s,r=this,q=new A.ji(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cN()
return q},
f_(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cN()},
cH(a){return J.bh(a)&1073741823},
aO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
$iqL:1}
A.ji.prototype={}
A.dH.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.ao(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iad:1}
A.lS.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:35}
A.K.prototype={
gu(a){return new A.cj(a,this.gq(a),A.bg(a).i("cj<K.E>"))},
R(a,b){return this.h(a,b)},
gI(a){return this.gq(a)===0},
gL(a){return!this.gI(a)},
ah(a,b){var s,r
A.bg(a).i("u(K.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.c(A.ao(a))}return!0},
Y(a,b){var s,r
A.bg(a).i("u(K.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.c(A.ao(a))}return!1},
dX(a,b){return new A.bT(a,b.i("bT<0>"))},
bC(a,b,c){var s=A.bg(a)
return new A.R(a,s.D(c).i("1(K.E)").a(b),s.i("@<K.E>").D(c).i("R<1,2>"))},
k(a,b){var s
A.bg(a).i("K.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
c0(a,b){return new A.bN(a,A.bg(a).i("@<K.E>").D(b).i("bN<1,2>"))},
a_(a,b){var s,r=A.bg(a)
r.i("i(K.E,K.E)?").a(b)
s=b==null?A.xU():b
A.iC(a,0,this.gq(a)-1,s,r.i("K.E"))},
kw(a,b,c,d){var s
A.bg(a).i("K.E?").a(d)
A.fg(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.pc(a,"[","]")},
$iD:1,
$in:1,
$iC:1}
A.V.prototype={
ac(a,b){var s,r,q,p=A.o(this)
p.i("~(V.K,V.V)").a(b)
for(s=this.gO(),s=s.gu(s),p=p.i("V.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gN(){return this.gO().bC(0,new A.lU(this),A.o(this).i("O<V.K,V.V>"))},
ba(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.D(c).D(d).i("O<1,2>(V.K,V.V)").a(b)
s=A.x(c,d)
for(r=this.gO(),r=r.gu(r),n=n.i("V.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
jK(a){var s,r,q
A.o(this).i("n<O<V.K,V.V>>").a(a)
for(s=a.$ti,r=new A.dj(J.L(a.a),a.b,s.i("dj<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gO()
return s.gq(s)},
gI(a){var s=this.gO()
return s.gI(s)},
gL(a){var s=this.gO()
return s.gL(s)},
gao(){return new A.fH(this,A.o(this).i("fH<V.K,V.V>"))},
n(a){return A.pi(this)},
$iS:1}
A.lU.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("V.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("V.V").a(s)
return new A.O(a,s,r.i("O<V.K,V.V>"))},
$S(){return A.o(this.a).i("O<V.K,V.V>(V.K)")}}
A.lV.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:20}
A.fH.prototype={
gq(a){var s=this.a
return s.gq(s)},
gI(a){var s=this.a
return s.gI(s)},
gL(a){var s=this.a
return s.gL(s)},
gu(a){var s=this.a,r=s.gO()
return new A.fI(r.gu(r),s,this.$ti.i("fI<1,2>"))}}
A.fI.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.fW.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.c(A.av("Cannot modify unmodifiable map"))}}
A.ea.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.o(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
ac(a,b){this.a.ac(0,A.o(this).i("~(1,2)").a(b))},
gI(a){var s=this.a
return s.gI(s)},
gL(a){var s=this.a
return s.gL(s)},
gq(a){var s=this.a
return s.gq(s)},
gO(){return this.a.gO()},
n(a){return this.a.n(0)},
gao(){return this.a.gao()},
gN(){return this.a.gN()},
ba(a,b,c,d){return this.a.ba(0,A.o(this).D(c).D(d).i("O<1,2>(3,4)").a(b),c,d)},
$iS:1}
A.cP.prototype={}
A.co.prototype={
gI(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
J(a,b){var s
for(s=J.L(A.o(this).i("n<1>").a(b));s.m();)this.k(0,s.gp())},
d0(a){var s,r,q=this.b_(0)
for(s=this.gu(this);s.m();){r=s.gp()
if(a.v(0,r))q.ak(0,r)}return q},
n(a){return A.pc(this,"{","}")},
ah(a,b){var s
A.o(this).i("u(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aY(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dR(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.p(q.gp())
while(q.m())}else{r=s
do r=r+b+A.p(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
Y(a,b){var s
A.o(this).i("u(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
R(a,b){var s,r
A.iu(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.lv(b,b-r,this,"index"))},
$iD:1,
$in:1,
$icL:1}
A.fP.prototype={
d0(a){var s,r,q,p=this,o=p.ex()
for(s=A.jj(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.k(0,q)}return o},
b_(a){var s=this.ex()
s.J(0,this)
return s}}
A.jB.prototype={
k(a,b){this.$ti.c.a(b)
return A.w8()}}
A.fs.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gu(a){var s=this.a
return A.jj(s,s.r,A.o(s).c)},
b_(a){return this.a.b_(0)}}
A.et.prototype={}
A.fX.prototype={}
A.jg.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jm(b):s}},
gq(a){return this.b==null?this.c.a:this.b2().length},
gI(a){return this.gq(0)===0},
gL(a){return this.gq(0)>0},
gO(){if(this.b==null){var s=this.c
return new A.ak(s,A.o(s).i("ak<1>"))}return new A.jh(this)},
gao(){var s,r=this
if(r.b==null){s=r.c
return new A.aT(s,A.o(s).i("aT<2>"))}return A.i7(r.b2(),new A.nH(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.G(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a2(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jD().l(0,b,c)},
a2(a){if(this.b==null)return this.c.a2(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
ac(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ac(0,b)
s=o.b2()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.o3(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.ao(o))}},
b2(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.f(Object.keys(this.a),t.s)
return s},
jD(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.x(t.N,t.z)
r=n.b2()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
jm(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.o3(this.a[a])
return this.b[a]=s}}
A.nH.prototype={
$1(a){return this.a.h(0,A.G(a))},
$S:18}
A.jh.prototype={
gq(a){return this.a.gq(0)},
R(a,b){var s=this.a
if(s.b==null)s=s.gO().R(0,b)
else{s=s.b2()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gO()
s=s.gu(s)}else{s=s.b2()
s=new J.d0(s,s.length,A.I(s).i("d0<1>"))}return s}}
A.nW.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:21}
A.nV.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:21}
A.hj.prototype={
kU(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fg(a4,a5,a2)
s=$.tL()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.oJ(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.oJ(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aO("")
g=o}else g=o
g.a+=B.b.B(a3,p,q)
c=A.ag(j)
g.a+=c
p=k
continue}}throw A.c(A.ac("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.B(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.ql(a3,m,a5,n,l,r)
else{b=B.c.X(r-1,4)+1
if(b===1)throw A.c(A.ac(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bc(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.ql(a3,m,a5,n,l,a)
else{b=B.c.X(a,4)
if(b===1)throw A.c(A.ac(a1,a3,a5))
if(b>1)a3=B.b.bc(a3,a5,a5,b===2?"==":"=")}return a3}}
A.kk.prototype={}
A.d3.prototype={}
A.hw.prototype={}
A.hG.prototype={}
A.f3.prototype={
n(a){var s=A.hH(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.i5.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.i4.prototype={
bo(a,b){var s=A.xi(a,this.gkf().a)
return s},
b8(a,b){var s=A.vR(a,this.gkm().b,null)
return s},
gkm(){return B.dZ},
gkf(){return B.dY}}
A.lL.prototype={}
A.lK.prototype={}
A.nJ.prototype={
hP(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ag(92)
s.a+=o
o=A.ag(117)
s.a+=o
o=A.ag(100)
s.a+=o
o=p>>>8&15
o=A.ag(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ag(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ag(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ag(92)
s.a+=o
switch(p){case 8:o=A.ag(98)
s.a+=o
break
case 9:o=A.ag(116)
s.a+=o
break
case 10:o=A.ag(110)
s.a+=o
break
case 12:o=A.ag(102)
s.a+=o
break
case 13:o=A.ag(114)
s.a+=o
break
default:o=A.ag(117)
s.a+=o
o=A.ag(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ag(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ag(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ag(92)
s.a+=o
o=A.ag(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.B(a,r,m)},
cE(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.i5(a,null))}B.a.k(s,a)},
cp(a){var s,r,q,p,o=this
if(o.hO(a))return
o.cE(a)
try{s=o.b.$1(a)
if(!o.hO(s)){q=A.qH(a,null,o.geA())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ab(p)
q=A.qH(a,r,o.geA())
throw A.c(q)}},
hO(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hP(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cE(a)
q.lw(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cE(a)
r=q.lx(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
lw(a){var s,r,q=this.c
q.a+="["
s=J.aH(a)
if(s.gL(a)){this.cp(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cp(s.h(a,r))}}q.a+="]"},
lx(a){var s,r,q,p,o,n,m=this,l={}
if(a.gI(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.bY(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ac(0,new A.nK(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hP(A.G(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cp(r[n])}p.a+="}"
return!0}}
A.nK.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:20}
A.nI.prototype={
geA(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iQ.prototype={}
A.n8.prototype={
kb(a){return new A.nU(this.a).iQ(t.J.a(a),0,null,!0)}}
A.nU.prototype={
iQ(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.fg(b,c,J.aS(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.wp(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.wo(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cI(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.wq(o)
l.b=0
throw A.c(A.ac(m,a,p+l.c))}return n},
cI(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.K(b+c,2)
r=q.cI(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cI(a,s,c,d)}return q.ke(a,b,c,d)},
ke(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aO(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ag(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ag(h)
e.a+=p
break
case 65:p=A.ag(h)
e.a+=p;--d
break
default:p=A.ag(h)
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
p=A.ag(a[l])
e.a+=p}else{p=A.r_(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ag(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.d5.prototype={
T(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.d5)if(this.a===b.a)s=this.b===b.b
return s},
gE(a){return A.cm(this.a,this.b,B.k,B.k)},
H(a,b){var s
t.ml.a(b)
s=B.c.H(this.a,b.a)
if(s!==0)return s
return B.c.H(this.b,b.b)},
n(a){var s=this,r=A.ug(A.ve(s)),q=A.hy(A.vc(s)),p=A.hy(A.v8(s)),o=A.hy(A.v9(s)),n=A.hy(A.vb(s)),m=A.hy(A.vd(s)),l=A.qr(A.va(s)),k=s.b,j=k===0?"":A.qr(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iay:1}
A.cD.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.cD&&this.a===b.a},
gE(a){return B.c.gE(this.a)},
H(a,b){return B.c.H(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.K(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.K(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.l_(B.c.n(o%1e6),6,"0")},
$iay:1}
A.ja.prototype={
n(a){return this.A()},
$iH:1}
A.a6.prototype={
gbg(){return A.v7(this)}}
A.hg.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hH(s)
return"Assertion failed"}}
A.cq.prototype={}
A.bM.prototype={
gcK(){return"Invalid argument"+(!this.a?"(s)":"")},
gcJ(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gcK()+q+o
if(!s.a)return n
return n+s.gcJ()+": "+A.hH(s.gdF())},
gdF(){return this.b}}
A.ed.prototype={
gdF(){return A.rI(this.b)},
gcK(){return"RangeError"},
gcJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.hV.prototype={
gdF(){return A.a(this.b)},
gcK(){return"RangeError"},
gcJ(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.ft.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.iL.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.ei.prototype={
n(a){return"Bad state: "+this.a}}
A.hu.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hH(s)+"."}}
A.ij.prototype={
n(a){return"Out of Memory"},
gbg(){return null},
$ia6:1}
A.fo.prototype={
n(a){return"Stack Overflow"},
gbg(){return null},
$ia6:1}
A.nt.prototype={
n(a){return"Exception: "+this.a}}
A.J.prototype={
n(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.B(e,0,75)+"..."
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
k=""}return g+l+B.b.B(e,i,j)+k+"\n"+B.b.U(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.p(f)+")"):g}}
A.n.prototype={
c0(a,b){return A.u8(this,A.o(this).i("n.E"),b)},
bC(a,b,c){var s=A.o(this)
return A.i7(this,s.D(c).i("1(n.E)").a(b),s.i("n.E"),c)},
dW(a,b){var s=A.o(this)
return new A.Q(this,s.i("u(n.E)").a(b),s.i("Q<n.E>"))},
dX(a,b){return new A.bT(this,b.i("bT<0>"))},
bw(a,b,c,d){var s,r
d.a(b)
A.o(this).D(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
ah(a,b){var s
A.o(this).i("u(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
Y(a,b){var s
A.o(this).i("u(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
be(a,b){var s=A.N(this,A.o(this).i("n.E"))
return s},
bd(a){return this.be(0,!0)},
gq(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gI(a){return!this.gu(this).m()},
gL(a){return!this.gI(this)},
gaW(a){var s=this.gu(this)
if(!s.m())throw A.c(A.hZ())
return s.gp()},
cc(a,b,c){var s,r
A.o(this).i("u(n.E)").a(b)
for(s=this.gu(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.c(A.hZ())},
kx(a,b){return this.cc(0,b,null)},
R(a,b){var s,r
A.iu(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.lv(b,b-r,this,"index"))},
n(a){return A.uR(this,"(",")")}}
A.O.prototype={
n(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"}}
A.ai.prototype={
gE(a){return A.B.prototype.gE.call(this,0)},
n(a){return"null"}}
A.B.prototype={$iB:1,
T(a,b){return this===b},
gE(a){return A.ff(this)},
n(a){return"Instance of '"+A.ir(this)+"'"},
gM(a){return A.jT(this)},
toString(){return this.n(this)}}
A.jz.prototype={
n(a){return""},
$ic3:1}
A.mR.prototype={
gkk(){var s,r=this.b
if(r==null)r=$.mh.$0()
s=r-this.a
if($.qg()===1e6)return s
return s*1000}}
A.aO.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ivr:1}
A.n7.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.G(b)
s=B.b.ce(b,"=")
if(s===-1){if(b!=="")a.l(0,A.pG(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.B(b,0,s)
q=B.b.bH(b,s+1)
p=this.a
a.l(0,A.pG(r,0,r.length,p,!0),A.pG(q,0,q.length,p,!0))}return a},
$S:51}
A.n6.prototype={
$2(a,b){throw A.c(A.ac("Illegal IPv6 address, "+a,this.a,b))},
$S:54}
A.fY.prototype={
geV(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.p(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gE(a){var s,r=this,q=r.y
if(q===$){s=B.b.gE(r.geV())
r.y!==$&&A.tx()
r.y=s
q=s}return q},
gbE(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.r7(s==null?"":s)
r.z!==$&&A.tx()
q=r.z=new A.cP(s,t.ph)}return q},
ghM(){return this.b},
gdE(){var s=this.c
if(s==null)return""
if(B.b.V(s,"[")&&!B.b.a0(s,"v",1))return B.b.B(s,1,s.length-1)
return s},
gdK(){var s=this.d
return s==null?A.rt(this.a):s},
gdM(){var s=this.f
return s==null?"":s},
ghn(){var s=this.r
return s==null?"":s},
gho(){return this.c!=null},
ghq(){return this.f!=null},
ghp(){return this.r!=null},
n(a){return this.geV()},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.ge_())if(p.c!=null===b.gho())if(p.b===b.ghM())if(p.gdE()===b.gdE())if(p.gdK()===b.gdK())if(p.e===b.ghB()){r=p.f
q=r==null
if(!q===b.ghq()){if(q)r=""
if(r===b.gdM()){r=p.r
q=r==null
if(!q===b.ghp()){s=q?"":r
s=s===b.ghn()}}}}return s},
$iiO:1,
ge_(){return this.a},
ghB(){return this.e}}
A.n4.prototype={
ghL(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cf(s,"?",m)
q=s.length
if(r>=0){p=A.fZ(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.j6("data","",n,n,A.fZ(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.ju.prototype={
gho(){return this.c>0},
ghq(){return this.f<this.r},
ghp(){return this.r<this.a.length},
ge_(){var s=this.w
return s==null?this.w=this.iN():s},
iN(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.V(r.a,"http"))return"http"
if(q===5&&B.b.V(r.a,"https"))return"https"
if(s&&B.b.V(r.a,"file"))return"file"
if(q===7&&B.b.V(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
ghM(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gdE(){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gdK(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.yd(B.b.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.V(r.a,"http"))return 80
if(s===5&&B.b.V(r.a,"https"))return 443
return 0},
ghB(){return B.b.B(this.a,this.e,this.f)},
gdM(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
ghn(){var s=this.r,r=this.a
return s<r.length?B.b.bH(r,s+1):""},
gbE(){if(this.f>=this.r)return B.bw
return new A.cP(A.r7(this.gdM()),t.ph)},
gE(a){var s=this.x
return s==null?this.x=B.b.gE(this.a):s},
T(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiO:1}
A.j6.prototype={}
A.m1.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.p2.prototype={
$1(a){return this.a.cW(this.b.i("0/?").a(a))},
$S:9}
A.p3.prototype={
$1(a){if(a==null)return this.a.f6(new A.m1(a===undefined))
return this.a.f6(a)},
$S:9}
A.oE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.t0(a))return a
s=this.a
a.toString
if(s.a2(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aM(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dM(!0,"isUtc",t.y)
return new A.d5(r,0,!0)}if(a instanceof RegExp)throw A.c(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aw(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.x(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bU(n),p=s.gu(n);p.m();)m.push(A.cA(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.aH(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:56}
A.jf.prototype={
am(a){if(a<=0||a>4294967296)throw A.c(A.qS(u.w+a))
return Math.random()*a>>>0},
ck(){return Math.random()},
$ipm:1}
A.en.prototype={
cz(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.c.K(a-s,k)
r=a>>>0
a=B.c.K(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.K(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.K(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.K(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.K(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.K(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.aF()
l.aF()
l.aF()
l.aF()},
aF(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.K(o-n+(q-p)+(m-r),4294967296)>>>0},
am(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.c(A.qS(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aF()
return(p.a&s)>>>0}do{p.aF()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
ck(){var s,r=this
r.aF()
s=r.a
r.aF()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ipm:1}
A.mk.prototype={
F(){var s=this
if(B.a.Y(A.f([s.d,s.e,s.f,s.r,s.w],t.t),new A.ml()))throw A.c(B.dp)}}
A.ml.prototype={
$1(a){return A.a(a)<=0},
$S:22}
A.dp.prototype={
A(){return"QualityProfileKind."+this.b}}
A.dn.prototype={}
A.kq.prototype={}
A.kr.prototype={}
A.ip.prototype={
F(){var s,r,q,p,o=this
for(s=A.U(["exposure",o.a,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.X(s,A.o(s).i("X<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.c(A.w("PostProcessState."+q+" must be >= 0: "+A.p(p),null))}s=o.z
if(s<1||s>8)throw A.c(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.dY.prototype={}
A.hK.prototype={
F(){var s,r,q,p,o,n,m=this,l=null
if(!B.bg.ga3(0)||!m.b.ga3(0)||!m.r.ga3(0))throw A.c(A.w("FrameEnvironment colors must be finite",l))
s=m.c
if(isFinite(s)){r=m.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.c(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.p(s)+"/"+m.d,l))
s=m.w
if(!isFinite(s)||s<0)throw A.c(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.p(s),l))
s=m.x
if(s!=null){r=s.a
if(!r.ga3(0)||r.gbz()<1e-12)A.k(A.w("DirectionalLight.direction must be finite and nonzero: "+r.n(0),l))
s=s.c
if(!isFinite(s))A.k(A.w("DirectionalLight.intensity must be >= 0: "+s,l))}for(s=m.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.w("PointLight.position must be finite: "+o.n(0),l))
o=p.d
if(!isFinite(o)||o<0)A.k(A.w("PointLight.intensity must be >= 0: "+A.p(o),l))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.w("PointLight.radius must be > 0: "+A.p(o),l))}for(s=isFinite(0),r=isFinite(1),o=isFinite(-1),q=0;!1;++q){if(s)n=r
else n=!1
if(!n)A.k(A.w("SpotLight.position must be finite: "+B.F.n(0),l))
if(s)n=o
else n=!1
if(!n)A.k(A.w("SpotLight.direction must be finite and nonzero: "+B.a4.n(0),l))}}}
A.kR.prototype={}
A.cn.prototype={
T(a,b){if(b==null)return!1
return J.dP(b)===A.jT(this)&&b instanceof A.cn&&this.a===b.a&&this.b===b.b},
gE(a){return A.cm(A.jT(this),this.a,this.b,B.k)}}
A.b6.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bn.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.bZ.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ik.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cg.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.dd.prototype={
A(){return"HandleRejection."+this.b}}
A.l6.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.di.prototype={
ga3(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
T(a,b){if(b==null)return!1
return b instanceof A.di&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.cm(this.a,this.b,this.c,B.k)},
n(a){return"LinearColor("+A.p(this.a)+", "+A.p(this.b)+", "+A.p(this.c)+")"}}
A.kx.prototype={}
A.io.prototype={}
A.eh.prototype={}
A.hf.prototype={
A(){return"AlphaMode."+this.b}}
A.cI.prototype={
F(){var s=null
if(this.a.length===0)throw A.c(A.w("MaterialDefinition.key must not be empty",s))
if(!isFinite(0))throw A.c(A.w(u.i,s))
if(this.w===0||this.x===0)throw A.c(A.w(u.p,s))
if(!isFinite(0.5))throw A.c(A.w(u.n,s))}}
A.cs.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.ct.prototype={}
A.n9.prototype={
F(){var s,r,q,p
for(s=0;s<6;++s){r=B.ao[s]
q=r.b
p=q+r.c
if(p>14)throw A.c(A.w('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bP.prototype={
F(){var s,r,q,p,o,n=this
n.a.F()
s=n.b.length
if(B.c.X(s,14)!==0)throw A.c(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.c(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga3(0)&&s.b.ga3(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.c(A.w("MeshData.localBounds must be a valid AABB",null))}}
A.m3.prototype={
F(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.c(A.w("resource plan must contain sceneColor and present",null))
if(s.Y(0,new A.m5()))throw A.c(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.c(A.w("resource history does not match vhsOutput ownership",null))}}
A.m5.prototype={
$1(a){return A.G(a).length===0},
$S:4}
A.mc.prototype={}
A.ix.prototype={
hs(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.c(A.l("resource assembler is initialized"))
a.F()
s.a=a
s.c=1},
bq(){if(this.d)return
this.d=!0
this.a=null}}
A.e0.prototype={
A(){return"DrawMode."+this.b}}
A.hl.prototype={
A(){return"BlendMode."+this.b}}
A.aW.prototype={}
A.iG.prototype={
F(){var s=this
if(s.a<0||s.b<0)throw A.c(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.c(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.c(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.ht.prototype={
A(){return"ColorEncoding."+this.b}}
A.hC.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.iv.prototype={
F(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.d0(B.fs)
if(o.a!==0)A.k(A.au(o,r,"contains unknown pipeline features"))
if(q.a===B.ar&&p.gL(p))A.k(A.au(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.c(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dr.prototype={
A(){return"RendererState."+this.b}}
A.kT.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.i9.prototype={
lg(a){return this.a.bp(a)}}
A.lX.prototype={
$3(a,b,c){return new A.bZ(A.a(a),A.a(b),A.bG(c))},
$S:66}
A.iN.prototype={}
A.lZ.prototype={
bX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.rd(d,new A.hN(c.byteLength,B.b7,B.dA))
if(d.b!==B.f)A.k(A.l(e))
s=A.e(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.c6(d)
A.bS(d,p)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a4(t.S)
for(n=a.a,m=0;m<6;++m){l=B.ao[m]
k=A.te(l.a)
if(!o.k(0,k))continue
j=A.wG(n,k,l)
if(d.b!==B.f)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.rd(d,new A.hN(i.byteLength,B.b7,B.b6))
if(d.b!==B.f)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.e(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iN(b,h,p,d,c.length/14|0)},
lb(a){var s=this.c.h(0,a.a)
if(s==null)throw A.c(A.dc(B.al,a))
this.b.bp(a)
return s},
aJ(a){var s,r,q=this.c.ak(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.e(q.c.a))
s.deleteBuffer(A.e(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.e(r.a))}this.b.aJ(a)},
dP(){var s,r,q,p
for(s=this.b.b9(),r=s.$ti,s=new A.bt(s.a(),r.i("bt<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.bX(p.b))}},
gbA(){return this.b.b9().bw(0,0,new A.m0(),t.S)}}
A.m_.prototype={
$3(a,b,c){return new A.b6(A.a(a),A.a(b),A.bG(c))},
$S:76}
A.m0.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:82}
A.cv.prototype={}
A.iJ.prototype={
ek(){var s=this.a,r=A.pw(s,B.dD)
A.px(s,r,0,$.tA())
return r},
lq(a,b){var s,r,q,p=this,o=p.b,n=o.bp(a),m=A.N(n.b,t.nh)
B.a.l(m,0,b)
s=n.a
o.dT(a,new A.cv(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.pw(p.a,s)
o.l(0,r,q)}A.px(p.a,q,0,b)},
le(a){var s,r=this
if(a==null){s=r.d
s===$&&A.j()
return s}r.b.bp(a)
s=r.c.h(0,a.a)
if(s==null){s=r.d
s===$&&A.j()}return s},
dP(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.ek()
for(s=i.b.b9(),r=s.$ti,s=new A.bt(s.a(),r.i("bt<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.ah(o,new A.n1()))continue
l=A.pw(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.px(p,l,k,j)}q.l(0,n.a,l)}},
gbA(){return this.b.b9().bw(0,0,new A.n0(),t.S)}}
A.n_.prototype={
$3(a,b,c){return new A.bn(A.a(a),A.a(b),A.bG(c))},
$S:97}
A.n1.prototype={
$1(a){return t.nh.a(a)==null},
$S:100}
A.n0.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:101}
A.de.prototype={}
A.hI.prototype={
jW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.mo(A.f([],t.hJ),A.a4(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].a9(s,b)
o=s.jV(a,!1)
if(o.b.length!==0)return new A.hJ(o,B.ek)
q=o.a
n=A.I(q)
m=new A.R(q,n.i("m(1)").a(new A.kN()),n.i("R<1,m>")).b_(0)
l=A.f([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.a8(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.gW().a))throw A.c(A.l('RenderFeature "'+k.gad()+'" created a pass "'+i.gW().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.a_(l,new A.kO(o))
return new A.hJ(o,l)}}
A.kN.prototype={
$1(a){return t.A.a(a).a},
$S:30}
A.kO.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.H(B.a.hr(s,new A.kL(a)),B.a.hr(s,new A.kM(b)))},
$S:31}
A.kL.prototype={
$1(a){return t.A.a(a).a===this.a.gW().a},
$S:6}
A.kM.prototype={
$1(a){return t.A.a(a).a===this.a.gW().a},
$S:6}
A.hJ.prototype={}
A.e4.prototype={
A(){return"FrameQueueState."+this.b}}
A.kS.prototype={}
A.aj.prototype={
gbF(){var s=this.c,r=A.I(s)
return new A.Q(s,r.i("u(1)").a(new A.m7()),r.i("Q<1>"))},
gcq(){var s=this.c,r=A.I(s)
return new A.Q(s,r.i("u(1)").a(new A.m8()),r.i("Q<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.m7.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.B},
$S:10}
A.m8.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:10}
A.bO.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bk.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.fk.prototype={
A(){return"ResourceFormat."+this.b}}
A.cf.prototype={
A(){return"GraphStage."+this.b}}
A.aN.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.ee.prototype={
A(){return"ResourceAccess."+this.b}}
A.P.prototype={}
A.eM.prototype={}
A.mi.prototype={
af(a){var s,r,q,p,o,n,m=this
a.F()
s=null
try{r=t.h
s=A.vL(m.a,a.c,r.a(a.d.gO().bd(0)),r.a(a.f),a.b)}catch(q){if(A.ab(q) instanceof A.fn){++m.e
throw q}else throw q}p=new A.eM(s)
r=m.b
o=a.a
n=r.h(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.e(n.b.a))
return p},
iT(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.al(s,s.r,s.e,a.$ti.i("al<1>")),r=this.a.a;s.m();)r.deleteProgram(A.e(s.d.b.a))}}
A.aL.prototype={
F(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.c(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a4(s)
for(q=this.d.gN(),q=q.gu(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.c(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.c(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a4(s)
for(s=this.e.gN(),s=s.gu(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.c(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.c(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.mm.prototype={}
A.aK.prototype={
a5(){var s=this
return A.qt(B.ci,s.f,B.ab,B.ac,!0,!0,!0,!0,s.r,B.af,B.ag,s.d,s.e,!0,!1,!1)}}
A.mo.prototype={
jV(a,b){var s=this.jE(t.Q.a(a),!1),r=this.a,q=A.I(r)
return new A.mn(A.ap(new A.Q(r,q.i("u(1)").a(new A.ms()),q.i("Q<1>")),t.A),s)},
jE(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.f([],t.aW)
r=m.a
q=A.I(r)
p=q.i("Q<1>")
o=A.N(new A.Q(r,q.i("u(1)").a(new A.mr()),p),p.i("n.E"))
m.iD(o,a,s)
m.iH(o,s)
m.iG(o,!1,s)
n=m.iK(o,s)
m.iI(o,n,s)
m.iJ(o,s)
m.iF(o,n,s)
m.iE(o,s)
return s},
iD(a,b,c){var s,r,q,p
t.O.a(a)
t.Q.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.C.d0(b)
if(p.a!==0)B.a.k(c,new A.bk(B.dN,q.a,"missing capabilities: "+p.aY(0,", ")))}},
iH(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbF(),o=J.L(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bk(B.dI,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
iG(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.B)B.a.k(c,new A.bk(B.dL,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iK(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.a.a(b)
s=A.x(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcq(),n=J.L(o.a),o=new A.M(n,o.b,o.$ti.i("M<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bk(B.dH,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
iI(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbF(),p=J.L(q.a),q=new A.M(p,q.b,q.$ti.i("M<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.B)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bk(B.bc,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.ce(a,m)>s)B.a.k(c,new A.bk(B.bc,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
iJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbF(),o=J.L(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
for(l=q.gcq(),k=J.L(l.a),l=new A.M(k,l.b,l.$ti.i("M<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bk(B.dK,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
iF(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbF(),o=J.L(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcq().kx(0,new A.mq(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bk(B.dJ,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
iE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
s=t.S
r=A.x(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcq(),o=J.L(p.a),p=new A.M(o,p.b,p.$ti.i("M<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.i0(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a4(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbF(),p=J.L(s.a),s=new A.M(p,s.b,s.$ti.i("M<1>"));s.m();){o=p.gp()
if(o.b===B.B)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.bY(s,!1,!1,p)
s=a.length
i=A.bY(s,!1,!1,p)
h=new A.mp(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bk(B.dM,a[q].a,"participates in a resource dependency cycle"))}}}}
A.ms.prototype={
$1(a){t.A.a(a)
return A.pl()},
$S:6}
A.mr.prototype={
$1(a){t.A.a(a)
return A.pl()},
$S:6}
A.mq.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:10}
A.mp.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.d(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.d(s,a)
if(s[a])return!1
B.a.l(n,a,!0)
r=o.c
if(!(a<r.length))return A.d(r,a)
r=r[a]
r=A.jj(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:22}
A.mn.prototype={}
A.dE.prototype={$ibm:1}
A.fh.prototype={
bZ(a){var s,r,q,p,o,n=a.c,m=n.a
if(!m.ga3(0))A.k(A.w("Transform.translation must be finite: "+m.n(0),null))
m=n.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)&&isFinite(m.d)))A.k(A.w("Transform.rotation must be finite: "+m.n(0),null))
if(!isFinite(1))A.k(A.w(u.u,null))
m=this.a.bp(a.a).d
n=n.an()
s=m.a
r=s.a
q=s.b
s=s.c
m=m.b
p=m.a
o=m.b
m=m.c
return A.cc(new A.R(A.f([new A.z(r,q,s),new A.z(p,q,s),new A.z(r,o,s),new A.z(p,o,s),new A.z(r,q,m),new A.z(p,q,m),new A.z(r,o,m),new A.z(p,o,m)],t.k),t.pc.a(n.gb0()),t.mz))},
gdG(){return new A.c8(this.kL(),t.fJ)},
kL(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdG(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.b9(),n=o.$ti,o=new A.bt(o.a(),n.i("bt<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.F()
f=k.a(g.a)
m.aj(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.an()
f=f.gb5()
d=A.I(f)
r=5
return a.b=new A.dE(h,g,A.cc(new A.R(f,d.i("z(1)").a(i.gb0()),d.i("R<1,z>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$ivj:1}
A.mu.prototype={
$3(a,b,c){return new A.cg(A.a(a),A.a(b),A.bG(c))},
$S:34}
A.ok.prototype={
$1(a){var s=this.a.w.a.lb(a),r=s.b!=null,q=r?s.d:s.e
return new A.fj(s.c,r,q)},
$S:29}
A.ol.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hA(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hA(b)
throw A.c(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.oi.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.oc.prototype={
$0(){return null},
$S:38}
A.oh.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.o8.prototype={
$0(){return this.a.at.a},
$S:39}
A.o9.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.oj.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.og.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.o6.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.o7.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.od.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.oe.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.of.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.j()
return s},
$S:2}
A.ob.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.oa.prototype={
$0(){return this.a.at.w},
$S:40}
A.nP.prototype={}
A.jo.prototype={$ivi:1}
A.jc.prototype={$iuD:1}
A.mD.prototype={
dO(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.F()
r=s.b.aR(a,b)
s.c.l(0,r.a,s.bX(a))
this.d.k(0,r)
return r},
l8(a){if(this.r)A.k(A.l("resource library is disposed"))
this.a.aJ(a)
this.d.ak(0,a)},
dN(a){var s,r=null
if(this.r)A.k(A.l("resource library is disposed"))
if(a.a.length===0)A.k(A.w("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.w(u.i,r))
if(a.w===0||a.x===0)A.k(A.w(u.p,r))
if(!isFinite(0.5))A.k(A.w(u.n,r))
s=this.b.a.aR(a,r)
this.e.k(0,s)
return s},
hH(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.aR(new A.cv(new A.hP(c,b,1,!1,B.W,B.W,B.b9),A.bY(1,null,!1,t.nh),!1),a)
this.f.k(0,s)
return s},
bq(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.N(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.ak(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aJ(k)}r=i.e
q=A.N(r,A.o(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.r)(q),++l)o.aJ(q[l])
q=i.d
p=A.N(q,A.o(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.r)(p),++l)n.aJ(p[l])
s.G(0)
r.G(0)
q.G(0)
i.r=!0}}
A.mJ.prototype={
gaw(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
ht(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.au)throw A.c(A.l("renderer can only be initialized once"))
a.F()
b.F()
s=m.a
if(s.b===B.L)throw A.c(A.l("renderer device is context lost"))
m.e=B.fl
try{m.r=s.hE()
r=m.b
q=A.m4(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.F()
p.a=a
A.m4(a)
p.d=1
r.b.hs(q)
r=A.uZ()
m.w=new A.mD(A.v_(s),r,A.vt(s),A.a4(t.l0),A.a4(t.fP),A.a4(t.lu))
r=new A.ix()
p=new A.l5(s,r)
q=A.m4(a)
o=p.el(q,a)
r.hs(q)
p.c=new A.iq(new A.mc(q),o)
m.x=p
m.y=new A.mi(s,A.x(t.N,t.e3))
m.as=a
A.rO(m)
m.e=B.av}catch(n){s=m.y
if(s!=null){r=s.b
s.iT(new A.aT(r,A.o(r).i("aT<2>")))
r.G(0)}s=m.x
if(s!=null)s.bq()
s=m.w
if(s!=null)s.bq()
m.w=null
m.e=B.au
throw n}return A.pb(t.H)},
kn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bO()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.c(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.ai)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.mV(j,0,A.dM(k.c,"count",t.S),A.I(j).c).be(0,!1)
k.b=B.dt
q=i
try{A.wO(a3,r,s)
k=r.gdG()
j=t.p9
h=k.$ti
k=A.N(A.i7(k,h.i("aW(n.E)").a(new A.mK()),h.i("n.E"),j),j)
p=k
J.tV(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.r)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.dc(B.al,h))
j=j.b
d=j.$ti
j.aj(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.d(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.K(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.S()
n=j+h}p=s.e
k=J.aS(o)
j=n
h=J.aS(o)
f=a3.w
d=f.a.gbA()
f=f.c.gbA()
c=a3.w
c.a.gbA()
c.c.gbA()
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
return new A.kT(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
jp(){var s,r,q,p=this
if(p.e!==B.bC)return
if(p.a.b===B.L)throw A.c(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.l("resource library is disposed"))
s.a.dP()
s.c.dP()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.l("GPU resource adapter is not initialized"))
s.c=new A.iq(q.a,s.el(A.m4(r),r))
s=p.y
s.c=null
s.b.G(0)
A.rO(p)
p.e=B.av},
bO(){var s=this.e
if(s!==B.av)throw A.c(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.L){this.e=B.bC
throw A.c(A.l("renderer context lost"))}}}
A.mK.prototype={
$1(a){return t.os.a(a).b},
$S:41}
A.b7.prototype={
H(a,b){var s,r=this
t.nL.a(b)
s=B.c.H(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.H(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.H(r.c.a,b.c.a)
if(s!==0)return s
return B.c.H(r.d,b.d)},
$iay:1}
A.b4.prototype={
H(a,b){var s
t.dP.a(b)
s=B.d.H(b.a,this.a)
if(s!==0)return s
return B.c.H(this.b,b.b)},
$iay:1}
A.aq.prototype={}
A.p7.prototype={
$2(a,b){var s=t.p
return s.a(a).a.H(0,s.a(b).a)},
$S:42}
A.p8.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.p5.prototype={
$2(a,b){var s=t.c
return s.a(a).a.H(0,s.a(b).a)},
$S:44}
A.p6.prototype={
$1(a){return t.c.a(a).b},
$S:45}
A.kt.prototype={}
A.hd.prototype={
gb5(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.f([new A.z(o,n,p),new A.z(r,n,p),new A.z(o,q,p),new A.z(r,q,p),new A.z(o,n,s),new A.z(r,n,s),new A.z(o,q,s),new A.z(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.dm.prototype={}
A.e5.prototype={
A(){return"FrustumTest."+this.b}}
A.kU.prototype={
ln(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.du:B.dv}}
A.kV.prototype={
$4(a,b,c,d){var s=new A.z(a,b,c),r=new A.dm(s,d),q=Math.sqrt(s.gbz())
if(q<1e-9)s=r
else{s=1/q
s=new A.dm(new A.z(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.cl.prototype={
U(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.cl(h)},
hJ(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.b9.a(a)
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
return h===0||h===1?new A.z(k,j,i):new A.z(k/h,j/h,i/h)},
hz(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.k(A.l("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.p(k)+")"))
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
return new A.cl(h)},
ga3(a){return B.u.ah(this.a,new A.lW())},
n(a){return"Mat4("+A.p(this.a)+")"}}
A.lW.prototype={
$1(a){return isFinite(A.h4(a))},
$S:12}
A.it.prototype={
n(a){var s=this
return"Quat("+A.p(s.a)+", "+A.p(s.b)+", "+A.p(s.c)+", "+A.p(s.d)+")"}}
A.iK.prototype={
F(){var s=this.a
if(!s.ga3(0))throw A.c(A.w("Transform.translation must be finite: "+s.n(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.c(A.w("Transform.rotation must be finite: "+s.n(0),null))
if(!isFinite(1))throw A.c(A.w(u.u,null))},
an(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.qM(A.f([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.qM(A.f([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
n(a){return"Transform("+this.a.n(0)+", "+this.b.n(0)+", scale=1)"}}
A.z.prototype={
br(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aQ(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.z(s*r-q*p,q*o-n*r,n*p-s*o)},
gbz(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbz())},
ga3(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga4(){var s=this,r=Math.sqrt(s.gbz())
return r<1e-9?B.aL:new A.z(s.a/r,s.b/r,s.c/r)},
T(a,b){if(b==null)return!1
return b instanceof A.z&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.cm(this.a,this.b,this.c,B.k)},
n(a){return"Vec3("+A.p(this.a)+", "+A.p(this.b)+", "+A.p(this.c)+")"}}
A.fz.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eK.prototype={
gad(){return this.f},
a9(a,b){B.a.k(a.a,new A.aj(this.f,B.y,A.f([new A.P(this.x,B.h),new A.P(this.y,B.j)],t.C)))},
a8(a){var s=this,r=s.a.af(new A.aL(s.e,s.b,s.c,B.q,B.bv,B.br)),q=A.c6(s.d),p=t.n,o=s.y,n=s.r===B.cg?new Float32Array(A.a2(A.f([1/o.c,0],p))):new Float32Array(A.a2(A.f([0,1/o.d],p)))
return A.f([new A.j3(new A.aK(s.f,A.f([new A.P(s.x,B.h),new A.P(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$ia9:1}
A.j3.prototype={
aa(a){return},
$ia_:1,
gW(){return this.a}}
A.hm.prototype={
gad(){return"bloomComposite"},
a9(a,b){B.a.k(a.a,new A.aj("bloomComposite",B.y,A.f([B.c1,B.bW,new A.P($.p9(),B.j)],t.C)))},
a8(a){var s=this,r="bloomComposite",q=s.a.af(new A.aL(r,s.b,s.c,B.q,B.eH,B.eu)),p=A.c6(s.d)
return A.f([new A.j4(new A.aK(r,A.f([B.c1,B.bW,new A.P($.p9(),B.j)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$ia9:1}
A.j4.prototype={
aa(a){return},
$ia_:1,
gW(){return this.a}}
A.hA.prototype={
gad(){return"depthPrepass"},
a9(a,b){B.a.k(a.a,new A.aj("depthPrepass",B.dF,A.f([B.bX],t.C)))},
a8(a){var s=this,r="depthPrepass",q=s.a.af(new A.aL(r,s.b,s.c,B.bu,B.bs,B.eb))
return A.f([new A.j7(new A.aK(r,A.f([B.bX],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$ia9:1}
A.j7.prototype={
aa(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bR(b,a.ag("sceneDepth").b)
A.bc(b,g.a.a5())
A.el(b,B.ae,1,0,0,0)
A.cR(b,g.b.b)
A.A(b,"uVertexSnapGrid",new A.E(B.e,c.y))
A.A(b,"uAlbedo",B.E)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.r)(s),++m){l=s[m]
k=l.a.b
A.A(b,"uViewProjection",new A.E(B.o,new Float32Array(A.a2(d))))
A.A(b,"uModel",new A.E(B.o,new Float32Array(A.a2(k.c.an().a))))
g.iU(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.f)A.k(A.l(f))
n.bindVertexArray(A.e(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.f)A.k(A.l(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.f)A.k(A.l(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
iU(a,b,c){var s,r=this.d.$1(b),q=a.a
A.br(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.E(B.e,0))
A.A(q,"uAffineWarpStrength",new A.E(B.e,0))
s=this.a.a5()
A.bc(q,r.at?s.dY(!1):s)},
$ia_:1,
gW(){return this.a}}
A.fB.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eP.prototype={
gad(){return this.f},
a9(a,b){B.a.k(a.a,new A.aj(this.f,B.y,A.f([new A.P(this.w,B.h),new A.P(this.x,B.j)],t.C)))},
a8(a){var s=this,r=s.a.af(new A.aL(s.e,s.b,s.c,B.q,B.bv,B.br)),q=A.c6(s.d),p=t.n,o=s.x,n=s.r===B.ch?new Float32Array(A.a2(A.f([1/o.c,0],p))):new Float32Array(A.a2(A.f([0,1/o.d],p)))
return A.f([new A.j8(new A.aK(s.f,A.f([new A.P(s.w,B.h),new A.P(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$ia9:1}
A.j8.prototype={
aa(a){return},
$ia_:1,
gW(){return this.a}}
A.hE.prototype={
gad(){return"dofComposite"},
a9(a,b){B.a.k(a.a,new A.aj("dofComposite",B.y,A.f([new A.P(this.z,B.h),B.c_,B.bU],t.C)))},
a8(a){var s=this,r="dofComposite",q=s.a.af(new A.aL(r,s.b,s.c,B.q,B.eG,B.ea)),p=A.c6(s.d)
return A.f([new A.j9(new A.aK(r,A.f([new A.P(s.z,B.h),B.c_,B.bU],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$ia9:1}
A.j9.prototype={
aa(a){var s,r=this,q=a.ag("dofOutput"),p=r.r.$0(),o=a.b.a
A.bR(o,q.b)
A.bc(o,r.a.a5())
A.cR(o,r.b.b)
s=t._
A.br(o,0,s.a(r.d.$0()))
A.A(o,"uSharp",B.E)
A.br(o,1,s.a(r.e.$0()))
A.A(o,"uBlurred",B.a3)
A.br(o,2,s.a(r.f.$0()))
A.A(o,"uSceneDepth",B.cb)
A.A(o,"uNear",new A.E(B.e,p.f))
A.A(o,"uFar",new A.E(B.e,p.r))
A.A(o,"uFocusDistance",new A.E(B.e,r.w))
A.A(o,"uFocusRange",new A.E(B.e,r.x))
A.A(o,"uStrength",new A.E(B.e,0))
A.bS(o,r.c)
A.dy(o,3,0)},
$ia_:1,
gW(){return this.a}}
A.hS.prototype={
gad(){return"grade"},
a9(a,b){B.a.k(a.a,new A.aj("grade",B.y,A.f([new A.P(this.r,B.h),B.bS],t.C)))},
a8(a){var s=this,r=s.a.af(new A.aL("grade",s.b,s.c,B.q,B.eF,B.ev)),q=A.c6(s.d),p=s.r
return A.f([new A.je(new A.aK("grade",A.f([new A.P(p,B.h),B.bS],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$ia9:1}
A.je.prototype={
aa(a){var s=this,r=a.ag(s.f.a),q=a.b.a
A.bR(q,a.ag("gradeOutput").b)
A.bc(q,s.a.a5())
A.cR(q,s.b.b)
A.br(q,0,r.b)
A.A(q,"uScene",B.E)
A.br(q,1,t._.a(s.d.$0()))
A.A(q,"uLut",B.a3)
A.A(q,"uLutSize",new A.E(B.e,s.e))
A.A(q,"uStrength",new A.E(B.e,a.c.e.w))
A.bS(q,s.c)
A.dy(q,3,0)},
$ia_:1,
gW(){return this.a}}
A.ho.prototype={}
A.hn.prototype={
ag(a){var s=this.a.h(0,a)
if(s==null)throw A.c(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$ivh:1}
A.fe.prototype={
gad(){return"present"},
a9(a,b){B.a.k(a.a,new A.aj("present",B.dG,A.f([new A.P(this.f,B.h)],t.C)))},
a8(a){var s=this,r=s.a.af(new A.aL("present",s.b,s.c,B.q,B.eN,B.l)),q=A.c6(s.d),p=s.f
return A.f([new A.jp(new A.aK("present",A.f([new A.P(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$ia9:1}
A.jp.prototype={
aa(a){var s=this,r=a.ag(s.d.a),q=a.b.a
A.bR(q,null)
A.bc(q,s.a.a5())
A.cR(q,s.b.b)
A.bS(q,s.c)
A.br(q,0,r.b)
A.dy(q,3,0)},
$ia_:1,
gW(){return this.a}}
A.is.prototype={
gad(){return"ps1Quantize"},
a9(a,b){B.a.k(a.a,new A.aj("ps1Quantize",B.y,A.f([new A.P(this.e,B.h),B.bZ],t.C)))},
a8(a){var s=this,r="ps1Quantize",q=s.a.af(new A.aL(r,s.b,s.c,B.q,B.eJ,B.e5)),p=A.c6(s.d),o=s.e
return A.f([new A.jq(new A.aK(r,A.f([new A.P(o,B.h),B.bZ],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$ia9:1}
A.jq.prototype={
aa(a){var s=this,r=a.ag(s.d.a),q=a.b.a
A.bR(q,a.ag("ps1Output").b)
A.bc(q,s.a.a5())
A.cR(q,s.b.b)
A.br(q,0,r.b)
A.A(q,"uScene",B.E)
A.A(q,"uQuantizationBits",new A.E(B.e,a.c.e.z))
A.A(q,"uDitherStrength",new A.E(B.e,0))
A.bS(q,s.c)
A.dy(q,3,0)},
$ia_:1,
gW(){return this.a}}
A.du.prototype={}
A.iA.prototype={
gad(){return"shadow"},
a9(a,b){B.a.k(a.a,new A.aj("shadowCaster",B.dE,A.f([B.bT],t.C)))},
a8(a){var s=this,r="shadowCaster",q=s.a.af(new A.aL(r,s.b,s.c,B.bu,B.bs,B.et))
return A.f([new A.js(new A.aK(r,A.f([B.bT],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$ia9:1}
A.js.prototype={
aa(a){var s,r,q,p,o=this,n=a.ag("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bR(s,n.b)
A.bc(s,o.a.a5())
A.el(s,B.ae,1,0,0,0)
return}r=A.qY(l)
o.r.$1(r)
s=m.a
A.bR(s,n.b)
A.bc(s,o.a.a5())
A.el(s,B.ae,1,0,0,0)
A.cR(s,o.b.b)
A.A(s,"uAlbedo",B.E)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.iW(m,s[p],r)},
eO(a,b){var s,r=this.d.$1(b),q=a.a
A.br(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.E(B.e,0))
s=this.a.a5()
A.bc(q,r.at?s.dY(!1):s)},
iW(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dE){s=b.b
if(!s.r)return
n.eJ(a,s.c,c)
n.eO(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bS(s,r.a)
q=r.b
p=r.c
if(q)A.pu(s,p,0)
else A.dy(s,p,0)}else if(b instanceof A.de){s=b.a.b
if(!s.r)return
n.eJ(a,s.c,c)
n.eO(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bS(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pv(s,p,o,0)
else A.pt(s,p,0,o)}else throw A.c(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dP(b).n(0),null))},
eJ(a,b,c){var s=a.a
A.A(s,"uModel",new A.E(B.o,new Float32Array(A.a2(b.an().a))))
A.A(s,"uLightViewProjection",new A.E(B.o,new Float32Array(A.a2(c.a.a))))},
$ia_:1,
gW(){return this.a}}
A.oC.prototype={
$1(a){return this.a.a=a},
$S:49}
A.oD.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.iB.prototype={
gad(){return"shadowedWorld"},
a9(a,b){var s=A.f([B.bY],t.C)
if(this.z)s.push(B.c0)
s.push(B.a2)
B.a.k(a.a,new A.aj("shadowedWorld",B.bb,s))},
a8(a){var s=this,r="shadowedWorld",q=s.a.af(new A.aL(r,s.b,s.c,B.eM,B.eB,B.e3)),p=A.f([B.bY],t.C)
if(s.z)p.push(B.c0)
p.push(B.a2)
return A.f([new A.jt(new A.aK(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$ia9:1}
A.jt.prototype={
aa(a){var s,r,q,p,o,n,m,l=this,k=null,j=a.ag("sceneColor"),i=a.b,h=a.c,g=h.c,f=h.d,e=h.e,d=l.r.$0(),c=i.a
A.bR(c,j.b)
A.bc(c,l.a.a5())
A.el(c,B.aW,1,0,0,0)
A.cR(c,l.b.b)
A.A(c,"uAlbedo",B.E)
s=t._
A.br(c,1,s.a(l.f.$0()))
A.A(c,"uShadowMap",B.a3)
r=t.n
A.A(c,"uShadowMapTexelSize",new A.E(B.ca,new Float32Array(A.a2(A.f([0.001953125,0.001953125],r)))))
A.br(c,2,s.a(l.x.$0()))
A.A(c,"uSsao",B.cb)
A.A(c,"uVertexSnapGrid",new A.E(B.e,e.y))
A.A(c,"uSceneColorSize",new A.E(B.ca,new Float32Array(A.a2(A.f([l.y,l.z],r)))))
A.A(c,"uViewProjection",new A.E(B.o,new Float32Array(A.a2(g.c.a))))
A.A(c,"uView",new A.E(B.o,new Float32Array(A.a2(g.a.a))))
A.A(c,"uLightViewProjection",new A.E(B.o,new Float32Array(A.a2(d.a.a))))
s=f.b
A.A(c,"uFogColor",new A.E(B.D,new Float32Array(A.a2(A.f([s.a,s.b,s.c],r)))))
A.A(c,"uFogStart",new A.E(B.e,f.c))
A.A(c,"uFogEnd",new A.E(B.e,f.d))
A.A(c,"uFogHeightFalloff",new A.E(B.e,0))
A.A(c,"uFogDensity",new A.E(B.e,0))
s=l.w.$0()==null
q=s?k:B.F
if(q==null)q=B.F
p=s?k:B.a4
if(p==null)p=B.a4
A.A(c,"uLightPosition",new A.E(B.D,new Float32Array(A.a2(A.f([q.a,q.b,q.c],r)))))
A.A(c,"uLightDirection",new A.E(B.D,new Float32Array(A.a2(A.f([p.a,p.b,p.c],r)))))
o=s?k:1
A.A(c,"uLightRange",new A.E(B.e,o==null?1:o))
o=s?k:0.3
if(o==null)o=0.3
A.A(c,"uLightInnerCos",new A.E(B.e,Math.cos(o)))
s=s?k:0.5
if(s==null)s=0.5
A.A(c,"uLightOuterCos",new A.E(B.e,Math.cos(s)))
n=f.r
A.A(c,"uAmbientColor",new A.E(B.D,new Float32Array(A.a2(A.f([n.a,n.b,n.c],r)))))
A.A(c,"uAmbientIntensity",new A.E(B.e,f.w))
for(c=h.a,s=c.length,r=e.x,m=0;m<c.length;c.length===s||(0,A.r)(c),++m)l.eP(i,c[m],r)
for(h=h.b,c=h.length,m=0;m<h.length;h.length===c||(0,A.r)(h),++m)l.eP(i,h[m],r)},
eP(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dE){s=b.b
n.eQ(a,s.c)
n.eK(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bS(s,r.a)
q=r.b
p=r.c
if(q)A.pu(s,p,0)
else A.dy(s,p,0)}else if(b instanceof A.de){s=b.a.b
n.eQ(a,s.c)
n.eK(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bS(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pv(s,p,o,0)
else A.pt(s,p,0,o)}else throw A.c(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dP(b).n(0),null))},
eK(a,b,c,d,e){var s,r=this.d.$1(b),q=a.a
A.br(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.E(B.e,0))
A.A(q,"uOpaqueCoverage",new A.E(B.e,c===B.ah?0:1))
A.A(q,"uAffineWarpStrength",new A.E(B.e,0))
A.A(q,"uMaterialTint",new A.E(B.D,new Float32Array(A.a2(A.f([r.c,r.d,r.e],t.n)))))
A.A(q,"uEmissiveStrength",new A.E(B.e,0))
A:{s=null
if(B.ah===c){switch(d.a){case 0:s=B.cH
break
case 1:s=B.cG
break}break A}if(B.K===c||B.cF===c){s=this.a.a5()
break A}}A.bc(q,r.at?s.dY(!1):s)},
eQ(a,b){var s=b.an(),r=a.a
A.A(r,"uModel",new A.E(B.o,new Float32Array(A.a2(s.a))))
A.A(r,"uNormalMatrix",new A.E(B.o,new Float32Array(A.a2(s.hz().a))))},
$ia_:1,
gW(){return this.a}}
A.iE.prototype={
gad(){return"ssaoOcclusion"},
a9(a,b){B.a.k(a.a,new A.aj("ssaoOcclusion",B.ba,A.f([B.bP],t.C)))},
a8(a){var s=this,r="ssaoOcclusion",q=s.a.af(new A.aL(r,s.b,s.c,B.q,B.eI,B.e2)),p=A.c6(s.d)
return A.f([new A.jw(new A.aK(r,A.f([B.bP],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$ia9:1}
A.jw.prototype={
aa(a){var s=a.b.a
A.bR(s,a.ag("ssaoRaw").b)
A.bc(s,this.a.a5())
A.el(s,B.aV,1,1,1,1)
return},
$ia_:1,
gW(){return this.a}}
A.iD.prototype={
gad(){return"ssaoBlur"},
a9(a,b){B.a.k(a.a,new A.aj("ssaoBlur",B.ba,A.f([B.bV,B.bO],t.C)))},
a8(a){var s=this,r="ssaoBlur",q=s.a.af(new A.aL(r,s.b,s.c,B.q,B.eC,B.ey)),p=A.c6(s.d)
return A.f([new A.jv(new A.aK(r,A.f([B.bV,B.bO],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$ia9:1}
A.jv.prototype={
aa(a){var s=a.b.a
A.bR(s,a.ag("ssaoBlurred").b)
A.bc(s,this.a.a5())
A.el(s,B.aV,1,1,1,1)
return},
$ia_:1,
gW(){return this.a}}
A.iS.prototype={
gad(){return"vhs"},
a9(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.aj("vhs",B.y,A.f([new A.P(this.r,B.h),B.bR,B.bQ],t.C)))},
a8(a){var s=this,r=s.a.af(new A.aL("vhs",s.b,s.c,B.q,B.eD,B.e6)),q=A.c6(s.d),p=s.r
return A.f([new A.jC(new A.aK("vhs",A.f([new A.P(p,B.h),B.bR,B.bQ],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$ia9:1}
A.jC.prototype={
aa(a){var s,r=this,q=a.ag(r.f.a),p=a.ag("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bR(n,p.b)
A.bc(n,r.a.a5())
A.cR(n,r.b.b)
A.br(n,0,q.b)
A.A(n,"uScene",B.E)
A.br(n,1,t._.a(r.d.$0()))
A.A(n,"uHistory",B.a3)
A.A(n,"uTime",new A.E(B.e,r.e.$0()))
A.A(n,"uChromaWeight",new A.E(B.e,o.Q))
A.A(n,"uTrackingWeight",new A.E(B.e,m))
A.A(n,"uNoiseWeight",new A.E(B.e,o.at))
A.A(n,"uHeadSwitchWeight",new A.E(B.e,o.ax))
A.A(n,"uDropoutWeight",new A.E(B.e,o.ay))
A.A(n,"uGhostWeight",new A.E(B.e,s))
A.bS(n,r.c)
A.dy(n,3,0)},
$ia_:1,
gW(){return this.a}}
A.fj.prototype={}
A.j_.prototype={
gad(){return"world"},
a9(a,b){B.a.k(a.a,new A.aj("worldOpaqueTransparent",B.bb,A.f([B.a2],t.C)))},
a8(a){var s=this,r=s.a.af(new A.aL("safeWorld",s.b,s.c,B.eL,B.q,B.e0))
return A.f([new A.jD(new A.aK("worldOpaqueTransparent",A.f([B.a2],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$ia9:1}
A.jD.prototype={
aa(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bR(j,a.ag("sceneColor").b)
A.bc(j,n.a.a5())
A.el(j,B.aW,1,0,0,0)
A.cR(j,n.b.b)
A.A(j,"uViewProjection",new A.E(B.o,new Float32Array(A.a2(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.F
q=t.n
A.A(j,"uLightDir",new A.E(B.D,new Float32Array(A.a2(A.f([r.a,r.b,r.c],q)))))
p=k.r
A.A(j,"uAmbientColor",new A.E(B.D,new Float32Array(A.a2(A.f([p.a,p.b,p.c],q)))))
A.A(j,"uAmbientIntensity",new A.E(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.r)(j),++o)n.eo(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.eo(m,l[o])},
eo(a,b){var s,r,q,p,o,n=this
if(b instanceof A.de){s=b.a.b
n.eM(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bS(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pv(s,p,o,0)
else A.pt(s,p,0,o)}else if(b instanceof A.dE){s=b.b
n.eM(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bS(s,r.a)
q=r.b
p=r.c
if(q)A.pu(s,p,0)
else A.dy(s,p,0)}else throw A.c(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dP(b).n(0),null))},
eM(a,b){var s=b.an(),r=a.a
A.A(r,"uModel",new A.E(B.o,new Float32Array(A.a2(s.a))))
A.A(r,"uNormalMatrix",new A.E(B.o,new Float32Array(A.a2(s.hz().a))))},
$ia_:1,
gW(){return this.a}}
A.ko.prototype={
bG(a){var s,r,q
a.F()
s=A.a4(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.at
else q=r===0?B.ar:B.as
return new A.dn(q,s)},
hV(a){var s,r=this.bG(a).a
A:{if(B.at===r){s=B.fc
break A}if(B.as===r){s=B.fb
break A}s=B.Z
break A}return s}}
A.hO.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.eV.prototype={
A(){return"GpuBufferKind."+this.b}}
A.hQ.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.hR.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.hN.prototype={}
A.hP.prototype={}
A.db.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.eX.prototype={}
A.eW.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dt.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.fn.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cO.prototype={
A(){return"UniformType."+this.b}}
A.E.prototype={}
A.dZ.prototype={
A(){return"ClearMask."+this.b}}
A.hB.prototype={$ium:1}
A.iq.prototype={
hA(a){var s=this.b.h(0,a)
if(s==null)throw A.c(A.l("resource is not in candidate: "+a))
return s}}
A.l5.prototype={
gp(){var s=this.c
if(s==null)throw A.c(A.l("GPU resource adapter is not initialized"))
return s},
bq(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.iS(s.b)
r.b.bq()
r.c=null
r.e=!0},
el(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.x(a6,a7),a9=A.f([],t.l2)
try{for(p=b0.a.a,p=A.jj(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.a8(s,"sceneColor#1")){j=J.aR(a8,"sceneColor")
j.toString
J.bV(a8,s,j)
continue}j=this.iV(s,b1)
if(n.b!==B.f)A.k(A.l(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.w("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.h(l.createFramebuffer())
if(h==null)A.k(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.aj
if(f&&!j.e)A.k(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.b8||g===B.dC
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
if(g!==a0){A.py(n,h,d,c,a1,a2,b,a)
A.k(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.cX(new A.h_(h,d,c,a1,a2,b,a,i,j.b))
J.hc(a9,r)
J.bV(a8,s,r)}a6=A.d4(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.I(a6).i("fl<1>"),a6=new A.fl(a6,p),a6=new A.cj(a6,a6.gq(0),p.i("cj<a1.E>")),o=this.a,n=t.jg,p=p.i("a1.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.py(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
iV(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.eX(512,512,1,B.aj,!0)
if(a==="sceneDepth")return new A.eX(o,n,1,B.aj,!0)
s=B.b.V(a,"ssao")||B.b.V(a,"bloomBlur")||B.b.V(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.eX(r,q,1,p?B.b8:B.dB,p)},
iS(a){var s,r,q,p,o,n=A.ph(t.f7.a(a).gao(),t._)
for(n=A.jj(n,n.r,A.o(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.py(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.er.prototype={
A(){return"_SlotState."+this.b}}
A.cV.prototype={
sb6(a){this.c=this.$ti.i("1?").a(a)}}
A.c1.prototype={
aR(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.cV(B.a9,n.i("cV<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.hs
p.sb6(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c3(a){return this.aR(a,null)},
aj(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.c(A.dc(B.be,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.dc(B.bf,a))
s=q.b
if(s===B.aa||s===B.a9)throw A.c(A.dc(B.al,a))},
bp(a){var s,r,q=this.$ti
q.c.a(a)
this.aj(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dT(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.aj(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb6(b)},
aJ(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.c(A.dc(B.be,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.dc(B.bf,a))
r=q.b
if(r===B.aa||r===B.a9)throw A.c(A.dc(B.dO,a))
q.b=B.aa
q.sb6(null)
B.a.k(p.c,s);++p.e},
b9(){return new A.c8(this.kM(),this.$ti.i("c8<+(1,2)>"))},
kM(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$b9(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aa||j===B.a9){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.c7(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.hk.prototype={
A(){return"BlendEquation."+this.b}}
A.d1.prototype={
A(){return"BlendFactor."+this.b}}
A.hx.prototype={
A(){return"CullFace."+this.b}}
A.hz.prototype={
A(){return"DepthFunc."+this.b}}
A.eQ.prototype={
dY(a){var s=this
return A.qt(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aC.prototype={
A(){return"StateField."+this.b}}
A.nk.prototype={
kg(a){var s,r=this.a
if(r==null)return A.lT(B.es,t.dB)
s=A.a4(t.dB)
if(r.a!==a.a)s.k(0,B.aB)
if(r.b!==a.b)s.k(0,B.aC)
if(r.c!==a.c)s.k(0,B.aD)
if(r.d!==a.d)s.k(0,B.aE)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aF)
if(r.r!==a.r)s.k(0,B.aG)
if(r.w!==a.w)s.k(0,B.aH)
if(r.x!==a.x)s.k(0,B.aI)
return s}}
A.cX.prototype={$ice:1}
A.h0.prototype={}
A.h_.prototype={}
A.iZ.prototype={
iv(a){var s=this,r=A.e(s.a.canvas)
s.c=A.am(new A.ni(s))
s.d=A.am(new A.nj(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hE(){var s=this,r=v.G,q=s.bj(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bj(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bj(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bj(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bj(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.h(l.getExtension("EXT_texture_filter_anisotropic")),j=A.h(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.h(l.getExtension("EXT_color_buffer_float")),h=A.h(l.getExtension("EXT_color_buffer_half_float")),g=A.h(l.getExtension("WEBGL_lose_context")),f=A.cA(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.cA(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.mk("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bj(a){var s=A.cA(this.a.getParameter(a))
return typeof s=="number"?B.d.aM(s):0},
$iuG:1}
A.ni.prototype={
$1(a){A.e(a).preventDefault()
this.a.b=B.L},
$S:3}
A.nj.prototype={
$1(a){A.e(a)
this.a.b=B.f},
$S:3}
A.hD.prototype={
C(){var s=this
return A.U(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.hi.prototype={
ik(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
j===$&&A.j()
s=k.a
A.h(j.connect(A.e(s.destination)))
r=k.d
r===$&&A.j()
A.e(r.gain).value=0.25
q=k.e
q===$&&A.j()
A.e(q.gain).value=0.12
p=k.f
p===$&&A.j()
A.e(p.gain).value=0.2
o=k.r
o===$&&A.j()
A.e(o.gain).value=0.4
n=k.w
n===$&&A.j()
A.e(n.gain).value=0.1
m=k.x
m===$&&A.j()
A.e(m.gain).value=1
for(r=[r,q,p,o,n,m],l=0;l<6;++l)A.h(r[l].connect(j))
r=k.y
r===$&&A.j()
A.e(r.gain).value=1
q=k.z
q===$&&A.j()
A.e(q.gain).value=0.35
A.h(p.connect(r))
A.h(o.connect(r))
o=k.Q
o===$&&A.j()
A.h(r.connect(o))
A.h(o.connect(q))
A.h(q.connect(j))
q=A.e(s.createBiquadFilter())
q.type="highpass"
A.e(q.frequency).value=80
k.dx!==$&&A.y()
k.dx=q
o=A.e(s.createBiquadFilter())
o.type="lowpass"
A.e(o.frequency).value=11e3
k.dy!==$&&A.y()
k.dy=o
A.h(q.connect(o))
A.h(o.connect(A.e(s.destination)))
j.disconnect(A.e(s.destination))
A.h(j.connect(q))},
hI(){var s=this.a
if(A.G(s.state)==="suspended")A.e(s.resume())},
eR(a){var s,r,q=this
if(B.b.V(a,"vo-")){s=q.x
s===$&&A.j()
return s}r=B.ap.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.j()
break A}if("bed"===r){s=q.e
s===$&&A.j()
break A}if("mid"===r){s=q.f
s===$&&A.j()
break A}if("air"===r){s=q.w
s===$&&A.j()
break A}s=q.r
s===$&&A.j()
break A}return s},
j3(){var s,r,q,p,o,n,m,l=this.a,k=A.bF(l.sampleRate),j=B.d.aL(k*2),i=A.e(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.ck()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dJ(a,b){var s,r,q,p=this,o=p.as.h(0,a)
if(o==null)return
s=p.a
r=A.e(s.createBufferSource())
r.buffer=o
A.e(r.playbackRate).value=0.94+p.at.ck()*0.12
q=A.e(s.createGain())
A.e(q.gain).value=b
A.h(r.connect(q))
s=B.ap.h(0,a)
A.h(q.connect(p.eR(s==null?"transient":s)))
r.start()},
l0(a){return this.dJ(a,1)},
l1(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.as.h(0,a)
if(k==null)return
s=l.a
r=A.e(s.createBufferSource())
r.buffer=k
A.e(r.playbackRate).value=0.94+l.at.ck()*0.12
q=A.e(s.createGain())
A.e(q.gain).value=c
p=A.e(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.e(p.positionX).value=b.a
A.e(p.positionY).value=b.b
A.e(p.positionZ).value=b.c
o=A.e(s.createBiquadFilter())
o.type="lowpass"
A.e(o.frequency).value=2e4
n=A.e(s.createGain())
A.e(n.gain).value=1
s=l.ax!=null
if(s){s=l.ax
s.toString
m=l.ej(l.b.hC(d,s))
A.e(o.frequency).value=m.b
A.e(n.gain).value=Math.pow(10,m.a/20)
l.ay.l(0,o,new A.c7(d,n))}A.h(r.connect(q))
A.h(q.connect(n))
A.h(n.connect(o))
A.h(o.connect(p))
s=B.ap.h(0,a)
A.h(p.connect(l.eR(s==null?"transient":s)))
r.start()},
ej(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.c7(r,q)},
hY(a){if(this.ax===a)return
this.ax=a
this.bW()},
bW(){var s,r,q,p,o,n=this,m=n.b,l=n.ax
if(l==null)return
for(s=n.ay,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o=n.ej(m.hC(p.a,l))
A.e(q.frequency).value=o.b
A.e(p.b.gain).value=Math.pow(10,o.a/20)}}}
A.ka.prototype={
$1(a){return this.hQ(t.q.a(a))},
hQ(a){var s=0,r=A.b1(t.b),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.b2(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a7(A.aw(A.e(A.e(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a7(A.aw(A.e(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.a7(A.aw(A.e(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ab(h)
A.e(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.p(l))
s=5
break
case 2:s=1
break
case 5:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$$1,r)},
$S:52}
A.kn.prototype={
dH(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.tU().aQ(q).ga4()
p.d=q
p.c=p.b.aQ(q).ga4()
p.a=a}}
A.kQ.prototype={}
A.iH.prototype={}
A.l3.prototype={
iY(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.h(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.h(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.h(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cA(s.getParameter(34047))
if(typeof p=="number")o.c=p},
ci(a,b,c,d,e,f){return this.kN(a,b,c,d,e,f)},
kN(a,b,c,a0,a1,a2){var s=0,r=A.b1(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$ci=A.b2(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.e(A.e(j.document).createElement("img"))
m.src=a
s=7
return A.a7(A.aw(A.e(m.decode()),t.X),$async$ci)
case 7:i=n.a
h=A.h(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aG(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.iY()
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
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$ci,r)},
cj(a,b,c){var s=!1
return this.kO(t.h.a(a),b,!1)},
kO(b0,b1,b2){var s=0,r=A.b1(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cj=A.b2(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.f([],t.kG)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.e(A.e(a0.document).createElement("img"))
j.src=k
s=10
return A.a7(A.aw(A.e(j.decode()),a1),$async$cj)
case 10:J.hc(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.aS(l)===0){a=A.l("texture array needs at least one layer")
throw A.c(a)}i=A.a(J.aR(l,0).width)
h=A.a(J.aR(l,0).height)
if(J.a8(i,0)||J.a8(h,0)||J.tW(l,new A.l4(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.c(a)}g=J.aS(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.a6()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jU(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.a6()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.S()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.S()
n=[1]
s=5
break A}e=B.d.K(a+1,2)}}a=m.a
a7=A.h(a.createTexture())
if(a7==null){a=A.l("could not create texture array")
throw A.c(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aG(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.a8(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.pa(d,16)+")")
throw A.c(a)}c=0
for(;;){a1=c
a3=J.aS(l)
if(typeof a1!=="number"){q=a1.ct()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aR(l,c)])
d=A.a(a.getError())
if(!J.a8(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.p(c)+" failed (WebGL error 0x"+J.pa(d,16)+")")
throw A.c(a)}a1=c
if(typeof a1!=="number"){q=a1.S()
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
if(!J.a8(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.pa(d,16)+")")
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
b=A.ab(a9)
A.e(v.G.console).error("texture array load failed: "+A.p(b))
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
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$cj,r)},
eS(a,b){var s=this.a,r=A.h(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a8(A.cA(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.c(A.e2("shader compile failed: "+A.p(A.rK(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
az(a,b){var s=v.G,r=this.eS(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.eS(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.h(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a8(A.cA(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.c(A.e2("program link failed: "+A.p(A.rK(p,"getProgramInfoLog",o,t.w))))
return o},
ghy(){var s=A.cA(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aM(s):0},
dU(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.fg(0,c,B.c.ij(b.byteLength,p))*p
if(B.c.X(o,4)!==0)A.k(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.tX(B.u.gjT(b),b.byteOffset+0*p,B.c.K(o,4)))}},
cU(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aG(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cQ(a,b,c,d,e){var s,r=this.a,q=A.h(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aG(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
eU(a,b,c){var s,r=this.a,q=A.h(r.createTexture())
q.toString
this.cU(q,a,b)
s=v.G
A.aG(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
en(a,b){var s,r,q=this.a,p=A.h(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aG(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aG(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.h(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cQ(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cQ(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.eU(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.eU(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cQ(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.en(a,b)
if(d)h.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.c(A.e2("framebuffer incomplete"))
return new A.iH(g,n,o,m,q,p,l,e,a,b)},
hx(a,b,c,d){return this.dI(a,b,c,d,0)},
kR(a,b,c,d){return this.dI(a,b,!0,c,d)},
aZ(a,b,c){return this.dI(a,b,c,!1,0)},
cS(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aG(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
aD(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cU(q,b,c)
if(p!=null)n.cU(p,b,c)
n.cS(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cS(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cS(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.en(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
lc(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aG(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aG(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aG(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
k7(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
aG(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.l4.prototype={
$1(a){A.e(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:53}
A.hU.prototype={
dS(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].lB(a)}}
A.hW.prototype={
aK(a){if(this.f)return
A.qE(a,"requestPointerLock",t.X)},
jd(a){A.e(a)
if(A.aY(a.repeat))return
if(this.b.k(0,A.G(a.code)))this.c.k(0,A.G(a.code))},
jf(a){this.b.ak(0,A.G(A.e(a).code))},
jj(a){var s=this
A.e(a)
if(!s.f)return
s.d=s.d+s.ew(a,"movementX")
s.e=s.e+s.ew(a,"movementY")},
jh(a){var s=this
A.e(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
ew(a,b){var s=A.rG(a[b])
if(s==null)s=null
return s==null?0:s}}
A.i8.prototype={}
A.dk.prototype={
ges(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gE(B.c.co(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gE(B.c.co(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
T(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.dk&&A.jT(r)===A.jT(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gE(a){return this.ges()}}
A.lY.prototype={
iq(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].ges(),q)}}
A.cN.prototype={
cn(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.u.hZ(s,0,m,l)
n.a=s}r=b.a7(0,a).aQ(d.a7(0,a)).ga4()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fp(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fp(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fp(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fp(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fp(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fp(n.a,l,d,r,q,p,o,0,1,0,k,0)},
ai(a,b,c,d,e){return this.cn(a,b,c,d,e,1,1)}}
A.mt.prototype={
j4(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.az(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.y()
m.w=r
q=s.az(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
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
m.d=s.aZ(m.ay,m.ch,!1)
m.e=s.aZ(m.ay,m.ch,!1)
m.f=s.aZ(m.ay,m.ch,!1)
p=A.h(p.createVertexArray())
p.toString
m.CW!==$&&A.y()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
j5(){var s
try{this.r=this.b.aZ(384,216,!1)}catch(s){this.r=null}},
la(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
if(n==null||m==null||l==null||a.d==null)return null
s=o.c
r=o.w
r===$&&A.j()
s.useProgram(r)
r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=A.a(r.WebGL2RenderingContext.TEXTURE_2D)
p=a.d
p.toString
s.bindTexture(q,p)
p=o.y
p===$&&A.j()
s.uniform1i(p,0)
p=o.z
p===$&&A.j()
s.uniform2f(p,n.x,n.y)
p=o.Q
p===$&&A.j()
s.uniform1f(p,b)
p=o.as
p===$&&A.j()
s.uniform1f(p,0.0025)
p=o.b
p.aG(n)
q=o.CW
q===$&&A.j()
s.bindVertexArray(q)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
q=o.x
q===$&&A.j()
s.useProgram(q)
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=o.at
q===$&&A.j()
s.uniform1i(q,0)
p.aG(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.j()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aG(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.mC.prototype={
cG(a,b,c){var s,r,q
try{r=this.a.az(b,c)
return r}catch(q){s=A.ab(q)
r=A.e2(a+": "+A.p(s))
throw A.c(r)}}}
A.mv.prototype={}
A.fD.prototype={}
A.jx.prototype={}
A.jm.prototype={}
A.jk.prototype={}
A.mw.prototype={
ir(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.f([new A.dk(0,0,1,0),new A.dk(1,0,1,0),new A.dk(2,0,1,0)],t.mn),e=t.S
e=new A.lY(f,A.x(e,e))
e.iq(f)
h.dD=e
h.h4=1.9
h.dr=h.aV/h.aU
r=J.i0(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fD()
t.cu.a(r)
f=h.aA
e=f.az("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.az(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.az(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.az(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.az(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ab!==$&&A.y()
h.ab=new A.mC(f,e,p,o,n,m)
h.b=t.d4.a(new A.mx(h))
h.eH()
h.eG()
o=h.aq
p=A.h(o.getUniformLocation(m,"uTex"))
h.fz!==$&&A.y()
h.fz=p
p=A.h(o.getUniformLocation(m,"uNoise"))
h.fA!==$&&A.y()
h.fA=p
p=A.h(o.getUniformLocation(m,"uTime"))
h.fc!==$&&A.y()
h.fc=p
p=A.h(o.getUniformLocation(m,"uTexelSize"))
h.fb!==$&&A.y()
h.fb=p
p=A.h(o.getUniformLocation(m,"uNoiseOff"))
h.fd!==$&&A.y()
h.fd=p
p=A.h(o.getUniformLocation(m,"uChromaLuma"))
h.fe!==$&&A.y()
h.fe=p
p=A.h(o.getUniformLocation(m,"uChromaLag"))
h.ff!==$&&A.y()
h.ff=p
p=A.h(o.getUniformLocation(m,"uTapeNoise"))
h.fg!==$&&A.y()
h.fg=p
p=A.h(o.getUniformLocation(m,"uHeadSwitch"))
h.fh!==$&&A.y()
h.fh=p
p=A.h(o.getUniformLocation(m,"uTracking"))
h.fi!==$&&A.y()
h.fi=p
p=A.h(o.getUniformLocation(m,"uDropouts"))
h.fj!==$&&A.y()
h.fj=p
p=A.h(o.getUniformLocation(m,"uGhosting"))
h.fk!==$&&A.y()
h.fk=p
p=A.h(o.getUniformLocation(m,"uChromaBlurI"))
h.fl!==$&&A.y()
h.fl=p
p=A.h(o.getUniformLocation(m,"uChromaBlurQ"))
h.fm!==$&&A.y()
h.fm=p
p=A.h(o.getUniformLocation(m,"uChromaLagAmount"))
h.fn!==$&&A.y()
h.fn=p
p=A.h(o.getUniformLocation(m,"uNoiseScale"))
h.fo!==$&&A.y()
h.fo=p
p=A.h(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.fp!==$&&A.y()
h.fp=p
p=A.h(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fq!==$&&A.y()
h.fq=p
p=A.h(o.getUniformLocation(m,"uJitterAmount"))
h.fs!==$&&A.y()
h.fs=p
p=A.h(o.getUniformLocation(m,"uJitterFreq"))
h.ft!==$&&A.y()
h.ft=p
p=A.h(o.getUniformLocation(m,"uDropoutRate"))
h.fu!==$&&A.y()
h.fu=p
p=A.h(o.getUniformLocation(m,"uGhostAmount"))
h.fv!==$&&A.y()
h.fv=p
p=A.h(o.getUniformLocation(m,"uGhostOffset"))
h.fw!==$&&A.y()
h.fw=p
p=A.h(o.getUniformLocation(m,"uGhostTarget"))
h.fB!==$&&A.y()
h.fB=p
m=A.h(o.getUniformLocation(m,"uHasGhost"))
h.fC!==$&&A.y()
h.fC=m
m=A.h(o.getUniformLocation(n,"uTex"))
h.dt!==$&&A.y()
h.dt=m
m=A.h(o.getUniformLocation(n,"uDepth"))
h.du!==$&&A.y()
h.du=m
m=A.h(o.getUniformLocation(n,"uFocusDistance"))
h.dv!==$&&A.y()
h.dv=m
m=A.h(o.getUniformLocation(n,"uDofBlurScale"))
h.dw!==$&&A.y()
h.dw=m
m=A.h(o.getUniformLocation(n,"uBlurRadius"))
h.dz!==$&&A.y()
h.dz=m
m=A.h(o.getUniformLocation(n,"uDofStrength"))
h.dA!==$&&A.y()
h.dA=m
n=A.h(o.getUniformLocation(n,"uTexel"))
h.dB!==$&&A.y()
h.dB=n
n=A.aY(A.e(A.e(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bt!==$&&A.y()
h.bt=n
h.shv(16777215)
n=new A.mM(o,f,A.f([],t.aA),A.f([],t.df),A.f([],t.U),A.f([],t.kS))
m=n.c=f.az("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.h(o.getUniformLocation(m,"uLightProj"))
n.e=A.h(o.getUniformLocation(m,"uModel"))
h.dC!==$&&A.y()
h.dC=n
n=new A.mt(f,o)
n.j4()
n.j5()
h.c5!==$&&A.y()
h.c5=n
n=f.a
m=A.h(n.createBuffer())
m.toString
h.d1!==$&&A.y()
h.d1=m
p=A.h(n.createBuffer())
p.toString
h.d2!==$&&A.y()
h.d2=p
n=A.h(n.createBuffer())
n.toString
h.d3!==$&&A.y()
h.d3=n
e=A.h(o.createVertexArray())
e.toString
h.d4!==$&&A.y()
h.d4=e
l=A.h(o.createVertexArray())
l.toString
h.d5!==$&&A.y()
h.d5=l
k=A.h(o.createVertexArray())
k.toString
h.d6!==$&&A.y()
h.d6=k
j=A.h(o.createVertexArray())
j.toString
h.d7!==$&&A.y()
h.d7=j
o.bindVertexArray(e)
h.cD(m)
o.bindVertexArray(l)
h.cD(p)
o.bindVertexArray(k)
h.cD(n)
o.bindVertexArray(null)
try{h.ca=f.hx(384,216,!0,!0)}catch(i){h.ca=null}s=4<f.ghy()?4:f.ghy()
e=s
if(typeof e!=="number")return e.a6()
if(e>1)try{h.bs=f.kR(h.aU,h.aV,!0,s)}catch(i){h.bs=null}try{h.aT=f.hx(h.aU,h.aV,!0,!0)}catch(i){h.bs=h.aT=null}if(h.aT!=null)try{h.c7=f.aZ(h.gbL(),h.gbK(),!1)
h.c8=f.aZ(h.gbL(),h.gbK(),!1)
h.c9=f.aZ(h.aU,h.aV,!1)}catch(i){h.c9=h.c8=h.c7=null}},
gbL(){var s=B.c.K(this.aU,4)
return s<1?1:s},
gbK(){var s=B.c.K(this.aV,4)
return s<1?1:s},
ar(a){return this.kP(t.G.a(a))},
kP(a){var s=0,r=A.b1(t.H),q=this,p,o,n,m,l,k,j
var $async$ar=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:p=new A.X(a,A.o(a).i("X<1,2>")).gu(0),o=q.aA
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.bt.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.a7(o.ci(k,l,!1,!1,!1,m==="grime"),$async$ar)
case 4:if(c!=null)q.ep(m,l)
s=2
break
case 3:p=t.lS
j=A.N(new A.bT(new A.R(A.f(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.my(a)),t.dD),p),p.i("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.a7(o.cj(j,12,!1),$async$ar)
case 7:q.c4=c
case 6:return A.b_(null,r)}})
return A.b0($async$ar,r)},
bb(){var s=0,r=A.b1(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bb=A.b2(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.x(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.a7(A.aw(A.e(A.e(g.window).fetch("shaders/"+A.p(m))),f),$async$bb)
case 13:l=a3
if(!A.aY(l.ok)){i=A.e2("HTTP "+A.p(A.qb(l,"status",t.S)))
throw A.c(i)}a=J
a0=n
a1=m
s=14
return A.a7(A.aw(A.e(l.text()),i),$async$bb)
case 14:a.bV(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ab(c)
i=A.e2("shaders/"+A.p(m)+": fetch failed - "+A.p(k))
throw A.c(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.jo(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ab(b)
A.e(v.G.console).error("shader reload failed: "+A.p(j))
s=5
break
case 2:s=1
break
case 5:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$bb,r)},
jo(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ab
q===$&&A.j()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.cG("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.cG("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.cG("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.eH()
i.eG()
q=i.f8
q=A.N(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.bt.h(0,s)
o.toString
i.ep(s,o)}A.e(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ab(j)
A.e(v.G.console).error("shader recompile failed: "+A.p(r))}},
eG(){var s=this,r=s.aq,q=s.ab
q===$&&A.j()
s.h5=A.h(r.getUniformLocation(q.c,"uTex"))
s.h6=A.h(r.getUniformLocation(q.c,"uTime"))
s.h7=A.h(r.getUniformLocation(q.c,"uFlash"))
s.h8=A.h(r.getUniformLocation(q.c,"uVignette"))
s.h9=A.h(r.getUniformLocation(q.c,"uGrain"))
s.ha=A.h(r.getUniformLocation(q.c,"uDesat"))
s.hb=A.h(r.getUniformLocation(q.c,"uBloom"))
s.hc=A.h(r.getUniformLocation(q.c,"uBloomStrength"))
s.hj=A.h(r.getUniformLocation(q.c,"uNoiseOff"))
s.hm=A.h(r.getUniformLocation(q.c,"uLutMix"))
s.hf=A.h(r.getUniformLocation(q.c,"uDepth"))
s.hg=A.h(r.getUniformLocation(q.c,"uDepthViz"))
s.f9=A.h(r.getUniformLocation(q.c,"uSSAO"))
s.fa=A.h(r.getUniformLocation(q.c,"uSSAOStrength"))
s.hh=A.h(r.getUniformLocation(q.c,"uNoise"))
s.hi=A.h(r.getUniformLocation(q.c,"uNoiseOn"))
s.hk=A.h(r.getUniformLocation(q.c,"uLut"))
s.hl=A.h(r.getUniformLocation(q.c,"uLutOn"))
s.hd=A.h(r.getUniformLocation(q.d,"uTex"))
s.ds=A.h(r.getUniformLocation(q.d,"uDir"))
s.he=A.h(r.getUniformLocation(q.c,"uBlur"))},
ep(a,b){var s,r,q,p=this
p.f8.k(0,a)
switch(a){case"bluenoise":s=p.ab
s===$&&A.j()
s=s.c
r=p.hh
r===$&&A.j()
q=p.hi
q===$&&A.j()
p.bl(s,r,q,b)
break
case"lut-gothic":s=p.ab
s===$&&A.j()
s=s.c
r=p.hk
r===$&&A.j()
q=p.hl
q===$&&A.j()
p.bl(s,r,q,b)
break
case"grime":s=p.ab
s===$&&A.j()
s=s.b
r=p.RG
r===$&&A.j()
q=p.rx
q===$&&A.j()
p.bl(s,r,q,b)
break
case"glass":s=p.ab
s===$&&A.j()
s=s.b
r=p.x2
r===$&&A.j()
q=p.xr
q===$&&A.j()
p.bl(s,r,q,b)
break
case"soft":s=p.ab
s===$&&A.j()
s=s.b
r=p.fS
r===$&&A.j()
q=p.fT
q===$&&A.j()
p.bl(s,r,q,b)
break}},
bl(a,b,c,d){var s=this.aq
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shv(a){var s=A.ow(a)
this.fK=s.a
this.fL=s.b
this.fM=s.c},
c_(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.X(a1,14)!==0)throw A.c(A.w("static mesh needs a multiple of 14 floats, got "+a1,null))
s=a1/14|0
for(r=a0,q=r,p=q,o=a,n=o,m=n,l=0;l<s;++l){k=l*14
if(!(k<a1))return A.d(a2,k)
j=a2[k]
i=k+1
if(!(i<a1))return A.d(a2,i)
h=a2[i]
i=k+2
if(!(i<a1))return A.d(a2,i)
g=a2[i]
if(j<m)m=j
if(h<n)n=h
if(g<o)o=g
if(j>p)p=j
if(h>q)q=h
if(g>r)r=g}f=new Uint16Array(s)
for(l=0;l<s;++l){if(!(l<s))return A.d(f,l)
f[l]=l}a1=b.aq
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
b.e9(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.ks++
b.dc.l(0,a1,new A.jx(e,d,i,s,s,a3))
return a1},
ki(a){var s,r,q,p=this,o=p.dc.h(0,a)
if(o==null)return
p.ey()
s=p.fQ
r=p.fR
if(s!==r)p.eL(r)
s=p.aq
r=p.dy
r===$&&A.j()
s.uniform1i(r,0)
r=p.dq
r===$&&A.j()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bu},
kB(a){var s,r=this.dc.ak(0,a)
if(r==null)return
s=this.aq
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
ey(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.dd)return
c.dd=!0
s=c.aq
r=c.ab
r===$&&A.j()
s.useProgram(r.b)
r=c.as
r===$&&A.j()
q=c.fO
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.j()
r=c.dg
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.j()
q=c.dh
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.j()
r=c.di
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.j()
s.uniform1f(r,c.h4)
r=c.CW
r===$&&A.j()
s.uniform1f(r,c.dr)
r=c.cx
r===$&&A.j()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.j()
s.uniform1f(r,60)
r=c.db
r===$&&A.j()
q=c.fD?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.j()
s.uniform3f(q,c.dj/255*0.25,c.dk/255*0.25,c.dl/255*0.25)
q=c.fx
q===$&&A.j()
r=c.fJ
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.j()
s.uniform3f(r,c.fK,c.fL,c.fM)
r=c.go
r===$&&A.j()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.j()
s.uniform1f(r,14)
r=c.k1
r===$&&A.j()
s.uniform1f(r,c.fN)
r=c.k2
r===$&&A.j()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.j()
s.uniform1i(r,c.df.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.df
l=m.length
if(n<l){if(!(n<l))return A.d(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],0)
continue}j=A.ow(k.b)
m=c.bt
m===$&&A.j()
i=m?1:1+(A.p4(c.dm*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.d(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.d(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.d(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bt
r===$&&A.j()
q=r?1:1+(A.p4(c.dm*2.5,40503)*2-1)*0
c.kp=q
p=c.p3
p===$&&A.j()
s.uniform1f(p,q)
q=c.p4
q===$&&A.j()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.j()
p=c.fF?1:0
s.uniform1f(q,p)
p=c.ry
p===$&&A.j()
s.uniform1f(p,0.505)
p=c.to
p===$&&A.j()
s.uniform1f(p,1.2)
p=c.x1
p===$&&A.j()
s.uniform1f(p,0.25)
p=c.y1
p===$&&A.j()
s.uniform1f(p,2)
p=c.y2
p===$&&A.j()
s.uniform1f(p,0.45)
q=c.fE
h=q?384:0
g=q?216:0
q=c.d8
p=q.a
if(p===B.ay){f=B.d.a1(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.fU
r===$&&A.j()
s.uniform2f(r,h,g)
r=c.dC
r===$&&A.j()
q=c.fY
q===$&&A.j()
s.uniform1f(q,0)
q=c.fZ
q===$&&A.j()
s.uniform3f(q,0.0015,0.005,0)
q=c.fV
q===$&&A.j()
if(q!=null)r.cr(0)
q=c.fW
q===$&&A.j()
if(q!=null)r.cr(1)
q=c.fX
q===$&&A.j()
if(q!=null)r.cr(2)
r.cs(0)
r.cs(1)
r.cs(2)
r=c.h_
r===$&&A.j()
if(c.c4==null)q=0
else{c.dD===$&&A.j()
q=3}s.uniform1i(r,q)
if(c.c4!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.c4)
r=c.dn
r===$&&A.j()
s.uniform1i(r,12)}r=c.h3
q=c.h2
p=c.h1
o=c.h0
n=0
for(;;){m=c.dD
m===$&&A.j()
if(!(n<3))break
d=m.a[n]
if(!(n<o.length))return A.d(o,n)
m=o[n]
if(m!=null)s.uniform1f(m,d.b)
if(!(n<p.length))return A.d(p,n)
m=p[n]
if(m!=null)s.uniform1f(m,d.c)
if(!(n<q.length))return A.d(q,n)
m=q[n]
if(m!=null)s.uniform1i(m,d.a)
if(!(n<r.length))return A.d(r,n)
m=r[n]
if(m!=null)s.uniform1i(m,d.d);++n}c.eL(c.fR)
r=c.dy
r===$&&A.j()
s.uniform1i(r,0)
r=c.dq
r===$&&A.j()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eL(a){var s
this.fQ=a
s=this.dx
s===$&&A.j()
this.aq.uniformMatrix4fv(s,!1,a.a)},
aC(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.aU=a
j.aV=b
j.dr=b/a
s=j.c5
s===$&&A.j()
r=B.c.K(a,2)
s.ay=r
q=B.c.K(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.aD(p,r,q)
r=s.e
if(r!=null)s.b.aD(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.aD(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.aD(r,384,216)
o=j.aT
n=j.bs
m=j.c7
l=j.c8
k=j.c9
if(o!=null)j.aA.aD(o,a,b)
if(n!=null)j.aA.aD(n,a,b)
if(m!=null)j.aA.aD(m,j.gbL(),j.gbK())
if(l!=null)j.aA.aD(l,j.gbL(),j.gbK())
if(k!=null)j.aA.aD(k,a,b)},
jy(a){var s,r,q,p,o,n,m
for(s=this.fH,r=this.fG,q=1;q<a;++q){if(!(q<800))return A.d(s,q)
p=s[q]
if(!(p<r.length))return A.d(r,p)
o=q-1
for(;;){if(o>=0){n=s[o]
if(!(n<r.length))return A.d(r,n)}if(!!1)break
n=o+1
if(!(o>=0))return A.d(s,o)
m=s[o]
if(!(n>=0&&n<800))return A.d(s,n)
s[n]=m;--o}n=o+1
if(!(n>=0&&n<800))return A.d(s,n)
s[n]=p}},
jx(a){var s,r,q,p,o,n,m,l
for(s=this.fI,r=this.de,q=1;q<a;++q){if(!(q<4000))return A.d(s,q)
p=s[q]
if(!(p<r.length))return A.d(r,p)
o=r[p].x
n=q-1
for(;;){if(n>=0){m=s[n]
if(!(m<r.length))return A.d(r,m)
m=r[m].x>o}else m=!1
if(!m)break
m=n+1
if(!(n>=0))return A.d(s,n)
l=s[n]
if(!(m>=0&&m<4000))return A.d(s,m)
s[m]=l;--n}m=n+1
if(!(m>=0&&m<4000))return A.d(s,m)
s[m]=p}},
ky(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.d8=b4
s=b2.bv
r=0
if(s>0){for(s=b2.fI,q=0;p=b2.bv,q<p;++q)B.a.l(s,q,q)
b2.jx(p)
for(p=b2.de,o=b2.d9,n=0;n<b2.bv;++n){if(!(n<4000))return A.d(s,n)
m=s[n]
if(!(m<p.length))return A.d(p,m)
l=p[m]
r=A.t2(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.de,p=b2.d9,q=0;q<b2.bv;++q){if(!(q<s.length))return A.d(s,q)
l=s[q]
r=A.t2(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bv=0
for(s=b2.fH,q=0;p=b2.cb,q<p;++q)B.a.l(s,q,q)
b2.jy(p)
for(p=b2.kq,o=b2.fG,k=0,n=0;n<b2.cb;++n){if(!(n<800))return A.d(s,n)
m=s[n]
if(!(m<o.length))return A.d(o,m)
j=o[m]
i=A.ow(0)
m=j.b
h=b2.di
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.dh
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
e=b2.dg
k=A.t5(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cb=0
s=b2.aA
o=b2.d1
o===$&&A.j()
s.dU(o,b2.d9,r)
o=b2.d2
o===$&&A.j()
s.dU(o,p,k)
b2.ey()
p=b2.aq
o=b2.dy
o===$&&A.j()
p.uniform1i(o,0)
o=b2.d4
o===$&&A.j()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(r,14));++b2.bu
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.d5
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(k,14));++b2.bu
m=b2.da
if(m>0){h=b2.d3
h===$&&A.j()
s.dU(h,b2.kr,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.d6
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.da/14|0);++b2.bu}m=b2.ca
if(m!=null){a7=b2.aT
if(a7!=null)s.lc(m,a7)}a8=b2.aT
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.d7
m===$&&A.j()
p.bindVertexArray(m)
a3=b2.c7
a4=b2.c8
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.ab
g===$&&A.j()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.hd
g===$&&A.j()
p.uniform1i(g,0)
s.aG(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.ds
g===$&&A.j()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aG(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.ds,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.c9
if(b2.c6>0&&a6!=null){s.aG(a6)
g=b2.ab
g===$&&A.j()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dt
g===$&&A.j()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.du
g===$&&A.j()
p.uniform1i(g,7)
g=b2.dv
g===$&&A.j()
p.uniform1f(g,0.03171953255425709)
g=b2.dw
g===$&&A.j()
p.uniform1f(g,1)
g=b2.dz
g===$&&A.j()
p.uniform1f(g,0.5)
g=b2.dA
g===$&&A.j()
p.uniform1f(g,b2.c6)
g=b2.dB
g===$&&A.j()
p.uniform2f(g,1/b2.aU,1/b2.aV)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.c5
g===$&&A.j()
b0=g.la(a8,0.5)
s.aG(null)
s=b2.ab
s===$&&A.j()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.hb
g===$&&A.j()
p.uniform1i(g,1)
g=b2.hc
g===$&&A.j()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.he
s===$&&A.j()
b2.bt===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.hf
s===$&&A.j()
p.uniform1i(s,7)
s=b2.hg
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.f9
s===$&&A.j()
p.uniform1i(s,11)
s=b2.fa
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.c6>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.h5
h===$&&A.j()
p.uniform1i(h,0)
h=b2.dm+=b3;++b2.fP
s=b2.h6
s===$&&A.j()
p.uniform1f(s,h)
h=b2.hj
h===$&&A.j()
s=b2.fP
p.uniform2f(h,B.c.X(s*13,64),B.c.X(s*29,64))
s=b2.h7
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h8
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h9
s===$&&A.j()
p.uniform1f(s,0)
s=b2.ha
s===$&&A.j()
p.uniform1f(s,0)
s=b2.d8
if(s.a===B.N)b1=0*(1-s.b/1)
else b1=0
s=b2.hm
s===$&&A.j()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.mx.prototype={
$0(){var s=this.a.ab
s===$&&A.j()
return s.b},
$S:55}
A.my.prototype={
$1(a){return this.a.h(0,A.G(a))},
$S:23}
A.nm.prototype={
gjI(){var s=this.b
s===$&&A.j()
return s},
eH(){var s,r,q,p,o,n,m=this,l=m.jJ(),k=m.a
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
B.a.G(s)
r=m.ok
B.a.G(r)
q=m.p1
B.a.G(q)
p=m.p2
B.a.G(p)
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
m.fS=A.h(k.getUniformLocation(l,"uSoft"))
m.fT=A.h(k.getUniformLocation(l,"uSoftOn"))
m.fU=A.h(k.getUniformLocation(l,"uInternal"))
m.fV=A.h(k.getUniformLocation(l,"uLightProj0"))
m.fW=A.h(k.getUniformLocation(l,"uLightProj1"))
m.fX=A.h(k.getUniformLocation(l,"uLightProj2"))
m.kt=A.h(k.getUniformLocation(l,"uShadow0"))
m.ku=A.h(k.getUniformLocation(l,"uShadow1"))
m.kv=A.h(k.getUniformLocation(l,"uShadow2"))
m.fY=A.h(k.getUniformLocation(l,"uShadowCasters"))
m.dn=A.h(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dq=A.h(k.getUniformLocation(l,"uStaticMaterial"))
m.fZ=A.h(k.getUniformLocation(l,"uShadowBias"))
m.h_=A.h(k.getUniformLocation(l,"uMaterialCount"))
s=m.h0
B.a.G(s)
r=m.h1
B.a.G(r)
q=m.h2
B.a.G(q)
p=m.h3
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.h(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.h(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.h(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.h(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.dn,12)},
cD(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.e9(56)},
e9(a){var s=this,r=s.c
r===$&&A.j()
s.bm(r,3,a,0)
r=s.f
r===$&&A.j()
s.bm(r,3,a,12)
r=s.d
r===$&&A.j()
s.bm(r,4,a,24)
r=s.e
r===$&&A.j()
s.bm(r,1,a,40)
r=s.r
r===$&&A.j()
s.bm(r,3,a,44)},
bm(a,b,c,d){var s=this.a
A.aG(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
jJ(){return this.gjI().$0()}}
A.mM.prototype={
cr(a){return null},
cs(a){return null}}
A.b.prototype={
S(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
a7(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
U(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
br(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aQ(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga4(){var s=this,r=s.gq(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.km.prototype={
lv(a){var s,r,q,p,o,n=B.p.b8(a.C(),null)
this.a.f7(n)
s=A.e(A.e(v.G.window).localStorage)
r=A.bG(s.getItem("quarantine.save.active"))
q=A.bG(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
l4(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.e(A.e(v.G.window).localStorage)
r=A.bG(s.getItem("quarantine.save.active"))
q=A.bG(s.getItem("quarantine.save.previous"))
p=this.em(r,a)
if(p!=null)return new A.ds(p,null)
o=this.em(q,a)
if(o!=null)return new A.ds(o,"recovered previous save")
if(r==null)return B.fp
return B.fo}catch(n){return B.fn}},
em(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.f7(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ab(q) instanceof A.J)return null
else throw q}}}
A.hF.prototype={
il(a,b,c,d,e){if(this.a.length===0)throw A.c(B.dj)
if(this.b<0)throw A.c(B.d3)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ap(q,t.i)
s=t.z
return A.d4(A.U(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bx.prototype={
A(){return"EndingKind."+this.b}}
A.kD.prototype={}
A.e1.prototype={
C(){var s=t.N
return A.U(["kind",this.a.b],s,s)}}
A.kG.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:57}
A.im.prototype={
C(){var s,r=this,q=t.N,p=A.x(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.U(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
kH(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.a7(0,new A.b(0,1.3499999999999999,0))
return!new A.hp(s,s.S(0,new A.b(0,1.2000000000000002,0))).hu(a,r)}}
A.md.prototype={
C(){return A.jJ(this.a)}}
A.ef.prototype={
C(){return A.U(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.mI.prototype={
f7(a){var s,r,q,p,o,n,m,l=B.p.bo(a,null),k=t.f
if(!k.b(l))throw A.c(B.dn)
s=t.N
r=t.z
q=A.aU(l,s,r)
p=q.h(0,"version")
if(A.aF(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ac("unsupported save version "+A.p(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.d6)
k=A.aU(n,s,r)
return A.qW(A.aU(m,s,r),k,2)}}
A.ds.prototype={}
A.da.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hL.prototype={}
A.l0.prototype={}
A.l_.prototype={
gal(){var s=this.d
return new A.l0(s.a,s.b)},
gdL(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.U(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.U(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.U(["entryCount",m.e.b.a],k,t.S)
p=A.qA(m.c).C()
o=m.r
n=o.c
return new A.md(A.jJ(A.U(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.U(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
jM(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.c(A.au(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bS(B.dw)}if(n<a)this.bS(B.dx)},
ib(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cw(a)&&s.ia(b)},
l6(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cc)r.c=Math.min(1,r.c+0.1)},
i9(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.uj(j,A.ap(i.d,h).length)
if(a===B.c6)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.I(r)
A.ui(j,new A.Q(r,q.i("u(1)").a(new A.l1(k)),q.i("Q<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.e4,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aL(j.a/1*3)
B.a.k(r.r,new A.eg(q.a,a,b))
m=r.a
A.uu(m,q.a,n,k.b,A.ap(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.i0(B.ep)
s.r.k9(o,c)
l=B.d.aL(j.b/1*6)
if(l>0)r.cw(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aT(i,A.o(i).i("aT<2>")).Y(0,new A.l2())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bS(B.dz)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bS(B.dy)},
bS(a){var s=this;++s.y
B.a.k(s.w,new A.hL())
B.a.k(s.x,A.uk(A.wM(a),s.b,s.y-1))}}
A.l1.prototype={
$1(a){t.Y.a(a)
return a.e.length!==0&&!new A.mN().i6(this.a.c,a.a)},
$S:58}
A.l2.prototype={
$1(a){return t.L.a(a).e},
$S:24}
A.kb.prototype={
dV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.c(A.l("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.c(A.l("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.c(A.l("authored/runtime room or portal count mismatch"))
for(r=t.hE,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.c(A.l("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.l(n+" origin.x mismatch: "+A.p(g)+" != "+A.p(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.l(n+" origin.y mismatch: "+A.p(j)+" != "+A.p(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.l(n+" origin.z mismatch: "+A.p(l)+" != "+A.p(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.l(n+" size.x mismatch: "+A.p(g)+" != "+A.p(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.l(n+" size.y mismatch: "+A.p(j)+" != "+A.p(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.l(n+" size.z mismatch: "+A.p(l)+" != "+A.p(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.c(A.l("window count mismatch for "+n))
for(n=A.I(j),i=n.i("u(1)"),n=n.i("Q<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.e7(new A.Q(j,i.a(new A.kg(e)),n),r)
if(d==null)throw A.c(A.l("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.k(A.l(c+" offset mismatch: "+A.p(h)+" != "+A.p(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.k(A.l(c+a+A.p(h)+" != "+A.p(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.k(A.l(c+a0+A.p(h)+" != "+A.p(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.c(A.l("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.c(A.l("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a+A.p(n)+" != "+A.p(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a0+A.p(n)+" != "+A.p(l)))
if(o.f!=m.at)throw A.c(A.l("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gbf(a1).b!==B.a.gbf(s).b)throw A.c(A.l("stair manifest mismatch"))}}
A.kc.prototype={
$1(a){return A.u5(a,this.a)},
$S:60}
A.kd.prototype={
$1(a){var s=this.a,r=A.jO(a,"portal"),q=A.cZ(r,"id"),p=A.cZ(r,"a"),o=A.cZ(r,"b"),n=A.h9(r,"width"),m=A.h9(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.G(r.h(0,"doorKit")):null
return new A.dS(q,p,o,n*s,m*s,l)},
$S:61}
A.ke.prototype={
$1(a){var s=A.jO(a,"stair")
A.cZ(s,"id")
return new A.dU(A.cZ(s,"portalId"))},
$S:62}
A.kf.prototype={
$1(a){return typeof a=="string"?a:A.h6("exterior cell")},
$S:25}
A.kg.prototype={
$1(a){return t.hE.a(a).a===this.a.a},
$S:26}
A.dT.prototype={}
A.kh.prototype={
$1(a){var s=this.a,r=A.jO(a,"window"),q=A.cZ(r,"id"),p=A.h9(r,"offset")
A.h9(r,"sill")
return new A.dV(q,p*s,A.h9(r,"width")*s,A.h9(r,"height")*s)},
$S:65}
A.dV.prototype={}
A.dS.prototype={}
A.dU.prototype={}
A.oA.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:13}
A.hp.prototype={
li(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.I(s)
q=new A.Q(s,r.i("u(1)").a(new A.kp(e)),r.i("Q<1>"))
p=!q.gu(0).m()?null:q.gaW(0)
if(p==null){n.d=null
return}if(!(n.bR(b,p.f)&&a==="hall"))o=n.bR(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.j0(p,B.d.a1(d,0,1))},
kT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.ev(f,c,d)
s=g.iZ(a,b,c,d)
if(s!=null){g.d=s
return g.ev(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.jZ(Math.sqrt(r*r+q*q)/0.08))
o=d.U(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.eY(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.hD(a,n)
n=i==null?n:i
h=g.eY(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.hD(a,n)
n=i==null?n:i}g.bU(m)
return new A.ia(m,n)},
iZ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bR(c,l.f)&&n
j=q&&this.bR(c,l.r)&&o
if(k||j)return new A.j0(l,k?0:1)}return null},
ev(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a7(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.a1(a.b+o/p,0,1)
n=A.r8(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bU(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ia(n,k)},
bR(a,b){var s=a.a7(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
eY(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.fy(c,!1)
s=c.S(0,d)
this.bU(s)
if(this.hu(a,b)){this.bU(c)
return new A.fy(c,!0)}return new A.fy(s,!1)},
bU(a){var s=a.a7(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.S(0,new A.b(0,1.2000000000000002,0))},
hu(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aS(m)
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
return!this.jA(a,m,s)},
hD(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aS(k)
for(r=k.a,q=a.av(r),p=J.L(q.a),q=new A.M(p,q.b,q.$ti.i("M<1>"));q.m();){o=p.gp()
n=o.bD(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.f1(k,o,s)&&this.iR(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jA(a,b,c){var s,r,q
for(s=a.av(b.a),r=J.L(s.a),s=new A.M(r,s.b,s.$ti.i("M<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.f1(b,q,c))return!0}return!1},
f1(a,b,c){var s,r,q,p=a.a,o=b.ap(p),n=b.ae(p)
p=o===B.i||o===B.m
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
iR(a,b,c){var s,r=this
switch(b.ap(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sjR(a){this.a=t.bf.a(a)}}
A.kp.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:67}
A.ia.prototype={}
A.fy.prototype={}
A.j0.prototype={}
A.eZ.prototype={}
A.lb.prototype={
k9(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.A,r)
s=B.A[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
i7(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.c}return r},
i8(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.d}return r},
C(){return A.U(["landedCount",this.b],t.N,t.z)}}
A.mE.prototype={
it(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.y()
o.c=new A.hT(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.l(0,p.a,o.ea(p))}},
l5(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.kB(r[o])
s.l(0,a,n.ea(m))},
ea(a){var s=A.ti(this.a,a),r=this.b,q=A.f([r.c_(s.a,1),r.c_(s.b,2),r.c_(s.c,0)],t.t),p=s.d
if(!B.u.gI(p))q.push(r.c_(p,0))
return q},
hS(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.C
s=l.a
r=A.as([s],t.N)
for(n=n.av(s),q=J.L(n.a),n=new A.M(q,n.b,n.$ti.i("M<1>"));n.m();){p=q.gp()
o=p.bD(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.k(0,o)}return r},
kh(a,b){var s,r,q,p,o=this,n=o.hS(a),m=o.b,l=o.c
l===$&&A.j()
l=t.b3.a(l.hN(n,b))
s=t.f0
m.df=l.length<=4?A.ap(l,s):A.ap(A.mV(l,0,A.dM(4,"count",t.S),A.I(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.ki(r[p])}}}
A.aJ.prototype={}
A.kI.prototype={
gkK(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.ah(A.f([r,q,p,o,n,m],t.n),new A.kJ())&&o>=r&&n>=q&&m>=p}}
A.kJ.prototype={
$1(a){return isFinite(A.h4(a))},
$S:12}
A.lc.prototype={
F(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.X(s,3)!==0}else s=!0
if(s)throw A.c(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.c(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gkK())throw A.c(A.w("QHMX bounds are invalid",m))
for(s=t.n,r=0;r<k;++r){q=l[r]
if(B.a.Y(A.f([q.a,q.b,q.c,q.d,q.e,q.f,q.r,q.w],s),new A.le()))throw A.c(A.w("QHMX contains a non-finite vertex",m))
p=q.x>255
if(p)throw A.c(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,s=l.length,r=0;r<s;++r){o=l[r]
if(o>=k)throw A.c(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.le.prototype={
$1(a){return!isFinite(A.h4(a))},
$S:12}
A.ld.prototype={
t(a,b,c,d,e,f,g){var s=this
s.b3(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.b3(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.b3(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.b3(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.b3(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.b3(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
b3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aJ(a,b,c,m,n,o,0,0,p),r=new A.aJ(g,h,i,m,n,o,1,1,p)
this.b4(s,new A.aJ(d,e,f,m,n,o,1,0,p),r)
this.b4(s,r,new A.aJ(j,k,l,m,n,o,0,1,p))},
b4(a,b,c){var s=this,r=s.b
B.a.k(r,s.cL(a))
B.a.k(r,s.cL(b))
B.a.k(r,s.cL(c))},
cL(a){var s,r,q=B.a.aY(A.f([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.c(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
jU(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.lc(A.ap(g,t.hZ),new Uint16Array(A.a2(this.b)),new A.kI(s,r,q,p,o,n))
h.F()
return h}}
A.d7.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.kK.prototype={
k_(a){var s
switch(a.a){case 0:s=A.as(["front","street","opposite-house"],t.N)
break
case 1:s=A.as(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.as(["side-boundary","rear-service"],t.N)
break
case 3:s=A.as(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.as(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
k0(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b2
break A}if("kitchen"===a||"cellar"===a){s=B.cN
break A}if("bathroom"===a){s=B.cO
break A}if("spare-room"===a){s=B.cP
break A}s=B.b2
break A}return this.k_(s)}}
A.cU.prototype={}
A.om.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:68}
A.d8.prototype={
A(){return"FocusKind."+this.b}}
A.e3.prototype={}
A.mF.prototype={}
A.o0.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:69}
A.cT.prototype={}
A.es.prototype={}
A.l9.prototype={
iA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.lq(),a4=this.b,a5=A.az(a4,!0,t.Y)
B.a.G(a4)
s=A.f([],t.kl)
for(r=a5.length,q=t.x,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.f([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.aP(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.f([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.aV(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.f([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.b8(b.a,b.b,a3.$1(b.c)))}s.push(new A.aB(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.az(a4,!0,t.W)
B.a.G(a4)
s=A.f([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.c0(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cM(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
j2(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.a2(n))throw A.c(A.l("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.a2(n))throw A.c(A.l("duplicate portal "+n))
q.l(0,n,m)}},
jG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
jF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.x(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.f0(o,i,h,g,f,e)
a5.e7(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.c(A.l(l+" references invalid portal "+d))
i=c.ap(l)
h=c.ae(l)
g=c.w
f=c.x
a5.f0(o,i,h,g,0,f)
a5.e7(a6,l,c.ap(l),c.ae(l),c.ae(l)+g,0,f)}}for(s=new A.X(a6,a6.$ti.i("X<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.bU(a)
r.a_(a,new A.lr())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.c(A.l("overlapping apertures on "+b.a))}}},
f0(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.c(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
e7(a,b,c,d,e,f,g){J.hc(t.gz.a(a).l3(b+":"+c.b,new A.lp()),new A.fO([d,e,f,g]))},
aS(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.i7(q),s.b+r.i8(q),s.c)},
av(a){var s=this.c,r=A.I(s)
return new A.Q(s,r.i("u(1)").a(new A.ls(a)),r.i("Q<1>"))},
l2(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.c(A.au(a,"roomId","not a portal endpoint"))
r=this.aS(o)
q=b.ae(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.ap(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
glu(){return B.a.bw(this.b,0,new A.lt(),t.S)},
hC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.am
s=A.f([new A.c7(a,B.am)],t.bM)
r=A.as([a],t.N)
for(q=this.e,p=t.W;s.length!==0;){o=B.a.l9(s,0)
n=o.a
m=o.b
for(l=this.av(n),k=J.L(l.a),l=new A.M(k,l.b,l.$ti.i("M<1>"));l.m();){j=k.gp()
i=j.bD(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.N(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.N(m,p)
h.push(j)
B.a.k(s,new A.c7(i,h))}}}return B.am}}
A.lq.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:70}
A.lr.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.H(a.a[0],b.a[0])},
$S:107}
A.lp.prototype={
$0(){return A.f([],t.a3)},
$S:72}
A.ls.prototype={
$1(a){var s
t.W.a(a)
s=this.a
return a.b===s||a.c===s},
$S:73}
A.lt.prototype={
$2(a,b){return A.a(a)+t.Y.a(b).e.length},
$S:74}
A.kH.prototype={}
A.mN.prototype={
i6(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.ah(s,new A.mO())}else s=!1
return s}}
A.mO.prototype={
$1(a){return t.hE.a(a).w},
$S:26}
A.lf.prototype={
f4(a){return B.a.cc(this.d,new A.lg(a),new A.lh(a))},
dV(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="inventory placement ",a9=a7.a
if(a9!==1)throw A.c(A.l("unsupported house inventory schema "+a9))
a9=a7.b
if(a9!=="assets/house/house.json")throw A.c(A.l("inventory source changed: "+a9))
a9=a7.c
if(Math.abs(a9-1.5)>0.0001)throw A.c(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a4(s)
for(q=a7.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.c(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.c(A.l("invalid bounds for inventory asset "+m))}j=A.a4(s)
i=A.a4(s)
for(s=a7.e,q=s.length,p=b0.e,o=0;o<s.length;s.length===q||(0,A.r)(s),++o){h=s[o]
m=h.a
if(!j.k(0,m))throw A.c(A.l("duplicate inventory placement "+m))
l=h.b
g=p.h(0,l)
if(g==null)throw A.c(A.l(a8+m+" references "+l))
n=a7.f4(h.c)
k=h.y
if(k<0||!isFinite(k))throw A.c(A.l("invalid clearance for "+m))
f=h.e
if(f!=null&&!i.k(0,l+":"+f))throw A.c(A.l("duplicate inventory socket "+l+":"+f))
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
if(l)throw A.c(A.l(a8+m+" escapes "+g.a))}}}
A.lg.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:75}
A.lh.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:27}
A.bX.prototype={}
A.ch.prototype={}
A.lz.prototype={}
A.ly.prototype={}
A.oz.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:13}
A.c_.prototype={}
A.hT.prototype={
hN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.f([],t.bz)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.c_(new A.b(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.ju(j),0.06))}}B.a.a_(s,new A.li(b))
return A.mV(s,0,A.dM(4,"count",t.S),t.f0).bd(0)},
ju(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.li.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.H(a.a.a7(0,s).gq(0),b.a.a7(0,s).gq(0))},
$S:77}
A.eT.prototype={
A(){return"Floor."+this.b}}
A.cE.prototype={
A(){return"Facing."+this.b}}
A.aP.prototype={}
A.c0.prototype={
bD(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
ap(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.c(A.au(a,"roomId","not an endpoint of "+s.a))},
ae(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.c(A.au(a,"roomId","not an endpoint of "+s.a))}}
A.aV.prototype={}
A.b8.prototype={}
A.cC.prototype={}
A.cM.prototype={}
A.aB.prototype={}
A.lk.prototype={
kl(a){return B.a.cc(this.c,new A.ll(a),new A.lm(a))},
lr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.c(A.l("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.c(A.l("soundscape source changed: "+f))
f=t.N
s=A.a4(f)
f=A.x(f,t.gB)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){m=r[p]
l=m.a
if(!s.k(0,l))throw A.c(A.l("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.c(A.l("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.c(A.l("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.c(A.l("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gI(k)||k.gao().Y(0,new A.ln()))throw A.c(A.l("sound emitter "+l+" has no usable cues"))
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
A.ll.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:78}
A.lm.prototype={
$0(){return A.k(A.l("sound emitter missing: "+this.a))},
$S:27}
A.ln.prototype={
$1(a){return B.b.hK(A.G(a)).length===0},
$S:4}
A.bW.prototype={}
A.la.prototype={
cV(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.au(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.eo}q=A.f([],t.iG)
p=B.d.aB(r)+1
o=B.d.aB(b)
for(n=p;n<=o;++n){m=B.c.X(n,24)
B.a.k(q,new A.eY("tick"))
if(B.c.X(m,6)===0)B.a.k(q,new A.eY("chime"))}l.b=b
return q}}
A.eY.prototype={}
A.lj.prototype={
cV(a,b){var s,r,q,p,o,n=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.au(b,"hour","must be in [0, 24)"))
s=n.a
r=n.b
if(s==null||r==null||a!==s||b<r){n.a=a
n.b=b
return B.en}q=A.f([],t.dL)
for(p=B.d.aB(r)+1;p<=B.d.aB(b);++p){o=B.c.X(p,24)
if(B.c.X(o,4)===2)B.a.k(q,B.dR)
if(B.c.X(o,3)===1)B.a.k(q,B.dS)
if(B.c.X(o,8)===5)B.a.k(q,B.dT)}n.b=b
return q}}
A.e6.prototype={}
A.oy.prototype={
$1(a){return typeof a!="number"},
$S:13}
A.lo.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.x(m,l)
for(s=n.a,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.U(["open",o.a,"locked",o.b],m,r))}l=A.x(m,l)
for(s=n.c,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.U(["lit",o.a,"examined",o.b],m,r))}return A.U(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a4(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.k(0,s[q].a)
r=A.a4(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.k(0,n[l].a)
e=A.a4(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.q1(new A.ak(o,A.o(o).i("ak<1>")),d)){d=f.b
if(A.q1(new A.ak(d,A.o(d).i("ak<1>")),r)){d=f.c
e=!A.q1(new A.ak(d,A.o(d).i("ak<1>")),e)}else e=n}else e=n
if(e)throw A.c(B.df)
e=f.d
if(e<0||e>2)A.k(B.d0)
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
A.fd.prototype={
C(){return A.U(["open",this.a,"locked",this.b],t.N,t.y)}}
A.f5.prototype={
C(){return A.U(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.kC.prototype={
$1(a){return this.a.v(0,A.G(a))},
$S:4}
A.cF.prototype={
A(){return"Hand."+this.b}}
A.nh.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.l:s},
e2(a,b){var s,r,q,p,o=A.f([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.i6.prototype={
C(){var s,r,q,p=t.N,o=A.x(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.t[r]
o.l(0,q,s.h(0,q))}return A.U(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.R(B.t,t.ej.a(new A.lQ(this)),t.dD).aY(0," \xb7 ")}}
A.lP.prototype={
$2(a,b){return new A.O(A.G(a),A.G(b),t.q)},
$S:79}
A.lQ.prototype={
$1(a){return this.a.a.h(0,A.G(a))},
$S:23}
A.bi.prototype={
C(){var s,r,q,p=this,o=A.f([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.U(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.lB.prototype={
bn(a){t.G.a(a)
return a.a===5&&B.a.ah(B.t,new A.lI(this,a))},
e8(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bn(b))return null
s=this.e++
r=new A.bi(s,a,A.f([A.lO(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
cZ(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bn(b))return!1
B.a.k(s.c,A.lO(b,c,B.X))
return!0},
jL(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bn(b))return!1
s.r=A.lO(b,0,B.bd)
return!0},
i0(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a2(p)&&!B.a.v(s,p))B.a.k(s,p)}},
ls(a){var s
if(!this.b.a2(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.N(n,A.o(n).c)
B.a.Z(n)
s=A.f([],t.bV)
for(r=q.b,r=new A.al(r,r.r,r.e,A.o(r).i("al<2>"));r.m();)s.push(r.d.C())
return A.U(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.lI.prototype={
$1(a){var s
A.G(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.v(this.a.a.h(0,a),s)},
$S:4}
A.ki.prototype={
d_(a,b){if(a.a===B.a0&&!a.d)return new A.m9(b,B.bA)
return new A.lM(b,a.d,a.e,B.bA)},
kc(a){return this.d_(a,null)}}
A.dW.prototype={}
A.kj.prototype={
bG(a){var s,r=a==null?null:B.b.hK(a).toLowerCase(),q=r==="next"
if(q||r==="auto")return new A.dW(B.a0,q,r==="auto",!1,null)
s=r!=null&&r!=="legacy"
return new A.dW(B.a_,!1,!1,s,s?"unknown renderer query":null)}}
A.lN.prototype={}
A.lM.prototype={
gb7(){var s=this.b
s=s==null?null:s.gb7()
return s==null?A.mA("legacy",A.f([],t.s),this.c,this.d,"legacy"):s},
aI(){if(this.e===B.bB)throw A.c(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aI()
this.e=B.v},
aC(a,b){var s
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aC(a,b)},
aE(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.p.b8(A.U(["backend","legacy","interpolation",0,"facts",A.jJ(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aE(a)},
aX(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.p.b8(A.U(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aX(a)}}
A.ma.prototype={}
A.m9.prototype={
gb7(){var s=this.b
s=s==null?null:s.gb7()
return s==null?A.mA("next",A.f([],t.s),!1,null,"safe"):s},
aI(){if(this.c===B.bB)throw A.c(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aI()
this.c=B.v},
aC(a,b){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.c(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aC(a,b)},
aE(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a1){p=q==null
if(p||!q.gcY()){if(s.c!==B.a1)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.v
if(!p)q.hF()}p=s.c
if(p===B.a1)return}if(p!==B.v)A.k(A.l(r))
B.p.b8(A.U(["backend","next","interpolation",0,"facts",A.jJ(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gcY()){if(s.c!==B.v)A.k(A.l(r))
s.c=B.a1
q.hw()
return}q.aE(a)}},
aX(a){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
B.p.b8(A.U(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aX(a)}}
A.mb.prototype={
jY(a,b){var s,r,q,p,o,n,m
a.F()
s=B.aQ.bG(a)
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
o=A.N(o,A.o(o).c)
B.a.Z(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.r)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.y)r.push("disjoint-timer-query")
if(a.z)r.push("float-render-target")
if(a.Q)r.push("half-float-render-target")
if(a.as)r.push("context-loss")
return r}}
A.fi.prototype={
A(){return"RendererBackendKind."+this.b}}
A.dq.prototype={
A(){return"RendererBackendState."+this.b}}
A.mB.prototype={}
A.iw.prototype={}
A.mz.prototype={
is(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.c(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w],r=0;r<4;++r){q=s[r]
if(q!=null&&q.length===0)throw A.c(A.w("renderer provenance values must be non-empty",null))}},
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
A.b9.prototype={
A(){return"SleepQuality."+this.b}}
A.aX.prototype={
A(){return"SleepLocation."+this.b}}
A.eg.prototype={}
A.ku.prototype={
cw(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
ia(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.f([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.U(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.U(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kv.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:80}
A.kw.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:81}
A.hX.prototype={
A(){return"InteractionType."+this.b}}
A.dA.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.nl.prototype={}
A.dz.prototype={}
A.hv.prototype={}
A.lu.prototype={}
A.lw.prototype={
dZ(){var s,r,q,p=t.r,o=A.f([],p)
for(s=this.a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.f(o.slice(0),p)
B.a.a_(p,new A.lx())
return p},
k8(a,b){var s,r,q,p,o,n=b.b
if(n.gI(n))return B.hp
s=t.N
r=A.a4(s)
q=A.a4(s)
for(s=n.gO(),s=s.gu(s),p=a.c;s.m();){o=s.gp()
if(B.a.gP(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.dz(B.a8,r)
s=r.a
o=B.a.gP(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gP(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dz(B.cf,r)
return new A.dz(B.aP,r)},
jn(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.hv(e,!1,B.ho,null)
s=p.d===c
r=this.k8(p,d)
q.ls(e)
return new A.hv(e,s,r,r.a===B.a8&&s?'The world says "'+d.c+'". The entry says "'+B.a.gP(p.c).n(0)+'".':null)},
kd(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.a8)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.lu(B.a.gP(s.c).n(0)+" but "+A.p(a.f))}}
A.lx.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.H(s.a(b).a,a.a)},
$S:14}
A.bz.prototype={
A(){return"RuptureStep."+this.b}}
A.mG.prototype={}
A.c2.prototype={}
A.mH.prototype={
ge3(){var s=B.aq.h(0,this.a)
return s==null?0:s},
ie(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.x)s=q.e
else s=!0
if(s)return B.bn
r=A.pR(b)
s=q.c
B.a.G(s)
B.a.J(s,r)
B.a.G(q.d)
q.a=B.N
q.b=0
q.e=!1
return A.f([B.cB],t.e_)},
jN(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.c(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.x||a===0)return B.bn
s=A.f([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.x))break
A:{q=l.a
p=B.aq.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.H)l.jC(s)
p=l.b
o=B.aq.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.c2())
if(q===B.H){l.a=B.x
l.b=0
l.e=!0
B.a.k(s,B.cA)}else{p=q.a+1
if(!(p<7))return A.d(B.bl,p)
l.a=B.bl[p]
l.b=0
B.a.k(s,new A.c2())}}}return A.ap(s,t.k8)},
C(){var s=this,r=t.N
return A.U(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ap(s.c,r),"extinguishedMantles",A.ap(s.d,r),"completed",s.e],r,t.z)},
jC(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.a1(B.d.aB(l.b/l.ge3()*A.ap(s,r).length),0,A.ap(s,r).length)
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
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.c2())}}}
A.hM.prototype={
gbh(){var s=this.b
if(s<6||s>18)return 0
return B.d.a1((s-6)/12,0,1)}}
A.oq.prototype={
$1(a){var s=B.c.bV(this.a,a)&255
return B.c.a1(B.d.aL(s+((B.c.bV(this.b,a)&255)-s)*this.c),0,255)},
$S:83}
A.mS.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.ej(g.a),e=t.N,d=A.x(e,t.P)
for(s=g.b,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.jH(q,r.b))}s=A.ej(g.r)
q=A.ej(g.w)
p=A.ej(g.x)
o=A.x(e,t.l_)
for(n=g.as,n=new A.X(n,A.o(n).i("X<1,2>")).gu(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.f([],m)
for(i=J.L(l.b);i.m();){h=i.gp()
j.push(A.U(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.U(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
jH(a,b){var s,r=A.ej(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.ej(q.ba(0,new A.mT(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gL(s))r.l(0,"_ambient",A.ej(s.ba(0,new A.mU(),t.S,t.z)))
return r}}
A.mT.prototype={
$2(a,b){return new A.O(A.a(a),t.ey.a(b).C(),t.iI)},
$S:84}
A.mU.prototype={
$2(a,b){return new A.O(A.a(a),t.bR.a(b).C(),t.iI)},
$S:85}
A.dx.prototype={
C(){return A.U(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dw.prototype={
C(){return A.U(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fv.prototype={
C(){var s=t.N
return A.U(["field",this.a,"value",this.b],s,s)}}
A.mX.prototype={
bB(){var s=0,r=A.b1(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bB=A.b2(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a7(A.aw(A.e(A.e(v.G.window).fetch("res/text.json")),t.m),$async$bB)
case 6:n=b
s=7
return A.a7(A.aw(A.e(n.text()),t.N),$async$bB)
case 7:m=b
l=A.y_(m)
j=J.aR(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.aR(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aR(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aR(l,"documents")
j.toString
i.a(j)
j=J.aR(l,"street")
j.toString
i.a(j)
j=J.aR(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aR(l,"nights")
j.toString
i.a(j)
j=J.aR(l,"endings")
j.toString
o.w=i.a(j)
j=J.aR(l,"records")
j.toString
i.a(j)
j=J.aR(l,"cues")
j.toString
i.a(j)
j=J.aR(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ab(g)
j=A.p(k)
throw A.c("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$bB,r)},
hR(a){var s,r,q,p=this.a
p===$&&A.j()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gN().dW(0,new A.mY())
r=p.$ti
q=t.N
q=A.x(q,q)
q.jK(new A.ck(p,r.i("O<m,m>(1)").a(new A.mZ()),r.i("ck<1,O<m,m>>")))
return q}return null},
hU(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.j()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aM(p)||o!==B.d.aM(o))return n
return new A.dx(B.d.aM(p),B.d.aM(o))},
hT(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.j()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aM(p)||typeof o!="string"||typeof n!="string")return m
return new A.dw(B.d.aM(p),o,n)},
lt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.x(a1,t.iu),a3=A.x(a1,t.c_),a4=A.x(a1,t.d8),a5=t.h,a6=A.x(a1,t.iD),a7=b.b
a7===$&&A.j()
a7=new A.X(a7,A.o(a7).i("X<1,2>")).gu(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.x(a,a0)
for(o=o.gN(),o=o.gu(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.mf(l,null):null
if(k==null||!q.b(m.b))continue
j=A.x(a1,a1)
for(m=q.a(m.b).gN(),m=m.gu(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.G(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.x(a,r)
for(m=n.$ti.i("cH<1>"),l=new A.cH(n,n.r,n.e,m);l.m();){i=l.d
g=b.hU(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.x(a,s)
for(m=new A.cH(n,n.r,n.e,m);m.m();){l=m.d
e=b.hT(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.j()
a7=new A.X(a7,A.o(a7).i("X<1,2>")).gu(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.f([],s)
for(m=J.L(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.fv(A.G(c.h(0,"field")),A.G(c.h(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.mS(A.x(a,a0),a2,a3,a4,A.x(a1,a5),A.x(a1,a5),A.x(a,a5),A.x(a,a5),A.x(a,a5),A.x(a1,a5),A.x(a1,a5),A.x(a1,a5),a6)}}
A.mY.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:86}
A.mZ.prototype={
$1(a){t.d7.a(a)
return new A.O(A.G(a.a),A.G(a.b),t.q)},
$S:87}
A.k6.prototype={
e0(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.e(v.G.window).setTimeout(A.am(new A.k7(this)),7000))}}
A.k7.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:25}
A.kl.prototype={
dS(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.ky.prototype={
im(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.Y(a,k,"door-speaker",j)
l.b!==$&&A.y()
l.b=i
s=A.Y(a,k,"door-line",j)
l.c!==$&&A.y()
l.c=s
r=l.a
A.e(r.appendChild(i))
A.e(r.appendChild(s))
s=A.Y(a,k,"door-cite-list",j)
l.e!==$&&A.y()
l.e=s
i=A.Y(a,k,"door-cite-result",j)
l.f!==$&&A.y()
l.f=i
A.e(r.appendChild(s))
A.e(r.appendChild(i))
for(i=A.jI,s=l.r,q=0;q<5;++q){p=B.ec[q]
o=A.e(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.kz(l,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.eI()]=n
o.addEventListener("click",m)
A.e(r.appendChild(o))
B.a.k(s,o)}i=A.Y(a,"button","door-continue","continue")
l.d!==$&&A.y()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.am(new A.kA(l)))
A.e(r.appendChild(i))
A.e(A.h(a.body).appendChild(r))},
e1(a,b){var s,r,q,p=this
p.z=!0
s=p.b
s===$&&A.j()
s.textContent=a
s=p.c
s===$&&A.j()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)A.e(s[q].style).display=""
s=p.d
s===$&&A.j()
A.e(s.style).display="none"
s=p.e
s===$&&A.j()
s.textContent=""
s=p.f
s===$&&A.j()
s.textContent=""
p.a.className="door visible"},
cu(a){var s,r,q=this,p=q.c
p===$&&A.j()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.r)(p),++r)A.e(p[r].style).display="none"
p=q.d
p===$&&A.j()
A.e(p.style).display=""
p=q.f
p===$&&A.j()
p.textContent=""},
i4(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.j()
s.textContent=""
for(r=b.length,q=A.jI,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.e(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.kB(o,this)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eI()]=o
m.addEventListener("click",l)
A.e(s.appendChild(m))}},
cd(){var s,r=this
r.z=!1
s=r.e
s===$&&A.j()
s.textContent=""
s=r.f
s===$&&A.j()
s.textContent=""
r.a.className="door"},
skV(a){this.w=t.ov.a(a)},
skX(a){this.x=t.jE.a(a)},
skW(a){this.y=t.bZ.a(a)}}
A.kz.prototype={
$1(a){var s
A.e(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.kA.prototype={
$1(a){var s
A.e(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.kB.prototype={
$1(a){var s
A.e(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.kE.prototype={
io(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.Y(s,"h1","journal-title",null)
o.f!==$&&A.y()
o.f=r
q=A.Y(s,"div","ending-copy",null)
o.r!==$&&A.y()
o.r=q
A.e(n.appendChild(r))
A.e(n.appendChild(q))
p=A.Y(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.am(new A.kF(o)))
A.e(n.appendChild(p))},
i5(a,b){var s,r,q,p,o,n,m=this
t.h.a(b)
s=m.f
s===$&&A.j()
s.textContent=a.a.b
s=m.r
s===$&&A.j()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o=b[p]
n=A.e(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.e(s.appendChild(n))}m.cm()},
skY(a){this.w=t.jE.a(a)}}
A.kF.prototype={
$1(a){var s
A.e(a)
s=this.a
s.aH()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.l7.prototype={
ip(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.e(p.appendChild(A.Y(s,"h1","journal-title","house notes")))
A.e(p.appendChild(A.Y(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.e(p.appendChild(A.Y(s,"p",q,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
r=A.Y(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.am(new A.l8(this)))
A.e(p.appendChild(r))}}
A.l8.prototype={
$1(a){A.e(a)
return this.a.aH()},
$S:1}
A.lC.prototype={
iC(){var s,r=this,q=r.a,p=A.Y(q,"div","page-turn",null),o=A.Y(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.am(new A.lD(r)))
s=A.Y(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.am(new A.lE(r)))
q=A.Y(q,"span","right-day-label",null)
r.Q!==$&&A.y()
r.Q=q
A.e(p.appendChild(o))
A.e(p.appendChild(q))
A.e(p.appendChild(s))
return p},
eZ(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ed(s.CW+a,r)
s.eE()},
ed(a,b){if(a<1)return 1
if(a>b)return b
return a},
jq(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.j()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.j()
s.textContent=""
for(s=j.w.dZ(),r=s.length,q=A.jI,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gP(n.c).n(0)
l=A.e(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.lF(j,n,l)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eI()]=m
l.addEventListener("click",k)
A.e(i.appendChild(l))}},
eE(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.j()
s=t.r
r=A.f([],s)
for(q=j.f,p=q.b,o=A.o(p).i("al<2>"),n=new A.al(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.a_(r,new A.lG())
j.eD(i,r)
i=j.Q
i===$&&A.j()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.j()
s=A.f([],s)
for(r=new A.al(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.a_(s,new A.lH())
j.eD(i,s)
k=B.d.a1(q.f/4,0,1)
i=j.as
i===$&&A.j()
A.e(i.style).setProperty("width",B.d.co(k*100,1)+"%")},
eD(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.e(a.appendChild(this.j_(b[r])))},
j_(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.Y(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.e(k.createElement("div"))
n.className=q
n.textContent=o
A.e(n.style).setProperty("--shake",B.d.n(p.b))
A.e(j.appendChild(n))}m=a.r
if(m!=null){l=this.j9(m,!1)
l.className=A.G(l.className)+" margin"
A.e(j.appendChild(l))}return j},
j9(a,b){var s=b?"hand-line struck":"hand-line",r=A.Y(this.a,"div",s,a.n(0))
A.e(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.lD.prototype={
$1(a){A.e(a)
return this.a.eZ(-1)},
$S:1}
A.lE.prototype={
$1(a){A.e(a)
return this.a.eZ(1)},
$S:1}
A.lF.prototype={
$1(a){var s,r,q
A.e(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:1}
A.lG.prototype={
$2(a,b){var s=t.L
return B.c.H(s.a(a).a,s.a(b).a)},
$S:14}
A.lH.prototype={
$2(a,b){var s=t.L
return B.c.H(s.a(a).a,s.a(b).a)},
$S:14}
A.fc.prototype={
bI(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.e(s.style).setProperty("--panel-fade","0.25s")
A.e(A.h(this.a.body).appendChild(s))},
cm(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.G(n.className),"open"))return
s=$.m6
if(s!=null&&s!==o)s.aH()
$.m6=o
r=o.a
o.d=A.h(r.activeElement)
A.qE(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.am(o.gjk())
o.e=q
r.addEventListener("keydown",q)
p=A.rP(n)
if(p.length!==0)B.a.gaW(p).focus()
else n.focus()},
aH(){var s,r,q=this,p=q.b
if(!B.b.v(A.G(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.m6===q)$.m6=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jl(a){A.e(a)
if(A.aY(a.defaultPrevented))return
if(A.G(a.code)==="Escape"){this.aH()
return}if(A.G(a.code)==="Tab")this.jB(a)},
jB(a){var s,r=A.rP(this.b)
if(r.length===0)return
s=A.h(this.a.activeElement)
if(A.aY(a.shiftKey)){if(s===B.a.gaW(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gP(r).focus()}}else if(s===B.a.gP(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gaW(r).focus()}},
scl(a){this.c=t.jE.a(a)}}
A.mj.prototype={
i3(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.mP.prototype={
iu(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.e(i.appendChild(A.Y(a,"h2","journal-title","Rest")))
A.e(i.appendChild(A.Y(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.Y(a,"div","entry-picker",null)
for(r=A.jI,q=0;q<2;++q){p=B.bk[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bp[n]
l=A.e(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.mQ(this,p,m)
if(typeof k=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eI()]=k
l.addEventListener("click",j)
A.e(s.appendChild(l))}}A.e(i.appendChild(s))},
skZ(a){this.f=t.as.a(a)}}
A.mQ.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aH()},
$S:3}
A.bL.prototype={}
A.k3.prototype={
lj(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.I(s)
q=new A.R(s,r.i("m(1)").a(new A.k5()),r.i("R<1,m>")).b_(0)
r=this.b
r.G(0)
s=J.u1(a,t.N)
p=s.$ti
r.J(0,new A.Q(s,p.i("u(n.E)").a(q.gc1(q)),p.i("Q<n.E>")))},
kj(a,b){var s,r,q,p,o,n=A.f([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.k5.prototype={
$1(a){return t.e.a(a).a},
$S:88}
A.k4.prototype={
$2(a,b){var s,r=t.e
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.H(r,s):B.c.H(a.c,b.c)},
$S:89}
A.iW.prototype={
kJ(a){return this.c.v(0,t.g.a(a))},
lh(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.ah(0,j.gka())||!a.a.ah(0,new A.nf(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.a7){n=s.d
if(n<J.aS(p)){o=o===B.I
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.J}else j=!1}}}if(j)return!1
m=new A.iV(r,s.b,A.ap(p,t.kX),B.I)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.G(0)
j.J(0,a.a)
j=l.c
j.G(0)
j.J(0,k)
l.e=m
return!0},
f2(a){var s=this.a,r=A.o(s).i("ak<1>"),q=r.i("Q<n.E>")
s=A.N(new A.Q(new A.ak(s,r),r.i("u(n.E)").a(new A.nc(a)),q),q.i("n.E"))
B.a.a_(s,new A.nd())
return s},
jS(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.hk
s=m.a.h(0,a)
if(s==null)return B.hl
r=B.c.K(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aM:B.P
o=p===B.P&&m.r.v(0,q)&&s.a2(B.aN)?B.aN:p
if(s.a2(o))n=o
else n=s.a2(B.P)?B.P:B.aM
r=s.h(0,n)
r.toString
r=new A.iV(a,n,A.ap(r,t.kX),B.I)
m.e=r
return new A.iU(r)},
k5(a){var s,r,q,p,o,n=this.e
if(n==null)return B.ce
if(n.d!==B.I)return B.hi
n.e=a
s=a===B.J
n.d=s?B.a7:B.a5
r=this.d
q=s?B.cc:B.h3
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.cu(q,o,p,a,null))
if(a===B.T)B.a.k(r,new A.cu(B.h6,o,p,a,null))
if(s)this.eF(n)
return new A.iT(n)},
jO(){var s,r=this.e
if(r==null)return B.ce
s=r.d
if(s!==B.a5&&s!==B.a6)return B.hj
r.d=B.a6
if(++r.f>=r.c.length){r.d=B.a7
this.eF(r)
return new A.fu(r,!0)}return new A.fu(r,!1)},
k6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.a5&&s!==B.a6}else s=!0
if(s)return i
r=h.gc2()
if(r==null)return i
s=t.N
q=A.x(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.bo
p=J.L(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.d4(q,s,s)
m=c.jn(!0,!0,o,new A.nl(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.a8){B.a.k(this.d,new A.cu(B.h5,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gP(j.c)
s=A.qK(s,s)
s.J(0,o.a)
s.J(0,q)
p.jL(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.cf)if(k===B.aP){s=n.b
s=s.gL(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.cu(B.h4,o,p.b,i,l))}}return m},
eF(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
sic(a){this.r=t.Q.a(a)}}
A.nf.prototype={
$1(a){var s=this.a.a
return new A.ak(s,A.o(s).i("ak<1>")).Y(0,new A.ne(A.G(a)))},
$S:4}
A.ne.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:15}
A.nc.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:15}
A.nd.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.H(a.c,b.c)
return s!==0?s:B.c.H(a.d,b.d)},
$S:91}
A.nb.prototype={
$2(a,b){var s=t.kX
return B.c.H(s.a(a).a,s.a(b).a)},
$S:92}
A.iX.prototype={}
A.jl.prototype={}
A.oH.prototype={
$1(a){return B.b.V(A.G(a),"off.")},
$S:4}
A.b5.prototype={
A(){return"DoorChoice."+this.b}}
A.bo.prototype={
A(){return"VisitPhase."+this.b}}
A.bp.prototype={
A(){return"VisitTier."+this.b}}
A.cQ.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cu.prototype={
C(){var s,r=this,q=A.x(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.c5.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bq.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.bq&&b.a===this.a&&b.b===this.b},
gE(a){return A.cm(this.a,this.b,B.k,B.k)}}
A.bA.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.bA&&b.a===this.a&&b.b===this.b},
gE(a){return A.cm(this.a,this.b,B.k,B.k)}}
A.ba.prototype={
T(a,b){var s=this
if(b==null)return!1
return b instanceof A.ba&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gE(a){var s=this
return A.cm(s.a,s.b,s.c,s.d)},
C(){var s=this
return A.U(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.iY.prototype={
C(){var s,r,q,p=this.a
p=A.N(p,A.o(p).c)
B.a.Z(p)
s=this.b
r=A.o(s)
q=r.i("d6<1,S<m,@>>")
s=A.N(new A.d6(s,r.i("S<m,@>(1)").a(new A.na()),q),q.i("n.E"))
r=this.c
return A.U(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.na.prototype={
$1(a){return t.g.a(a).C()},
$S:93}
A.he.prototype={
C(){var s=this,r=s.a.C(),q=s.e
q=q==null?null:q.b
return A.U(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.k0.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:94}
A.k1.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:95}
A.k2.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:96}
A.iV.prototype={
gc2(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.ng.prototype={}
A.bb.prototype={}
A.iU.prototype={}
A.iT.prototype={}
A.fu.prototype={}
A.fN.prototype={
gb7(){var s,r=this.p3
if(r){s=this.w
s===$&&A.j()
s=s.a.b}else s="safe"
return A.mA("next",r?this.gjX():B.ez,!1,null,s)},
gcY(){if(this.p3){var s=this.d
s===$&&A.j()
s=s.b===B.L}else s=!1
return s},
gjX(){var s,r
if(!this.p3)return B.l
s=this.r
s===$&&A.j()
r=this.w
r===$&&A.j()
return B.cz.jY(s,r)},
gkA(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.co(this.k3,3)},
gkz(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
aI(){var s,r,q,p,o,n,m=this,l=A.vF(m.a)
m.d=l
l=l.hE()
m.r=l
l=m.w=B.aQ.hV(l)
q=m.b
p=m.c
s=new A.iG(q,p,q,p)
p=A.qX(m.d)
m.e=p
try{p.ht(new A.iv(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.ab(o)
l=m.w
if(l===B.Z)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.p(r)
m.w=B.Z
l=A.qX(m.d)
l.ht(B.fk,s)
m.e=l}l=m.e
l.bO()
n=A.vk(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.p3=!0},
aC(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.j()
s.bO()
new A.iG(a,b,a,b).F()
r.b=a
r.c=b},
jQ(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="wall-plaster",b0="grime",b1="renderer is not initialized",b2="resource library is disposed"
if(!a8.p3||a8.Q.length!==0)return
a8.p4=b3
s=a8.dx
r=a8.e
r===$&&A.j()
s.l(0,a9,r.gaw().hH("texture:wall-plaster",256,256))
s.l(0,b0,a8.e.gaw().hH("texture:grime",512,512))
a8.fx=a8.e.gaw().dN(A.pk(s.h(0,a9),!1,"quarantine-house-safe",!0,0.58,0.58,0.58,1,1))
r=a8.dy
r.l(0,"cellar",a8.e.gaw().dN(A.pk(s.h(0,b0),!1,"quarantine-house-cellar",!0,0.44,0.46,0.48,1,1)))
for(q=a8.fr,p=0;p<7;++p){o=B.eg[p]
n=a8.e.w
if(n==null)n=A.k(A.l(b1))
m=o==="service"?s.h(0,b0):s.h(0,a9)
m=new A.cI("quarantine-inventory-"+o,m,a8.cM(o).a,a8.cM(o).b,a8.cM(o).c,1,1,!1)
if(n.r)A.k(A.l(b2))
m.F()
l=n.b.a.aR(m,null)
n.e.k(0,l)
q.l(0,o,l)}for(q=b3.b,n=q.length,m=a8.Q,k=a8.as,j=a8.at,i=a8.y,h=a8.z,p=0;g=q.length,p<g;q.length===n||(0,A.r)(q),++p){f=q[p]
e=a8.eI(b3,f)
g=a8.e.w
if(g==null)g=A.k(A.l(b1))
d=f.a
if(g.r)A.k(A.l(b2))
c=g.a
e.F()
l=c.b.aR(e,"room:"+d)
b=l.a
c.c.l(0,b,c.bX(e))
g.d.k(0,l)
B.a.k(i,l)
h.l(0,d,l)
g=r.h(0,d)
if(g==null){g=a8.fx
g.toString}a=new A.aW(l,g,B.O,-1,B.K,B.Q,!0,!0,0,null)
g=a8.f
g===$&&A.j()
B.O.F()
c=g.a
a0=c.$ti
c.aj(a0.c.a(l))
c=c.b
if(!(b>=0&&b<c.length))return A.d(c,b)
e=c[b].c
c=(e==null?a0.y[1].a(e):e).d
b=B.O.an()
c=c.gb5()
a0=A.I(c)
A.cc(new A.R(c,a0.i("z(1)").a(b.gb0()),a0.i("R<1,z>")))
a1=g.b.c3(a)
B.a.k(m,a1)
k.l(0,d,a1)
j.l(0,d,a)}for(p=0;p<q.length;q.length===g||(0,A.r)(q),++p){f=q[p]
for(r=f.e,n=r.length,m=f.a,a2=0;a2<r.length;r.length===n||(0,A.r)(r),++a2){a3=r[a2]
k=a3.c
j=a3.d
a8.e5(m,a8.ez(f,a3.b,k,k+a3.e,j,j+a3.f,7902632),new A.nL(a3))}}for(r=b3.c,q=r.length,n=b3.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){a4=r[p]
if(a4.as)continue
f=n.h(0,a4.b)
if(f==null)continue
m=f.a
a8.e5(m,a8.ez(f,a4.ap(m),a4.ae(m),a4.ae(m)+a4.w,0,a4.x,5915445),new A.nM(a4))}a5=A.yz(A.xS(b3))
a8.fy=a8.e.gaw().dN(A.pk(s.h(0,b0),!0,"quarantine-house-exterior-shell",!0,0.5,0.5,0.5,1,1))
a6=a8.e.gaw().dO(a5,"exterior:main-shell")
B.a.k(i,a6)
s=a8.fy
s.toString
a7=a8.cx=new A.aW(a6,s,B.O,-1,B.K,B.Q,!0,!0,0,null)
s=a8.f
s===$&&A.j()
s.bZ(a7)
a8.CW=s.b.c3(a7)},
hW(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5="renderer is not initialized",a6="resource library is disposed"
a4.db=A.ap(a7.e,t.gB)
if(!a4.p3)return
for(s=a4.ax,r=new A.X(s,A.o(s).i("X<1,2>")).gu(0),q=a4.ay;r.m();){p=r.d
p.toString
o=a4.f
o===$&&A.j()
o.b.aJ(p.b)
n=q.h(0,p.a)
if(n!=null){p=a4.e
p===$&&A.j()
p=p.w
if(p==null)p=A.k(A.l(a5))
o=n.a
if(p.r)A.k(A.l(a6))
p.a.aJ(o)
p.d.ak(0,o)}}s.G(0)
q.G(0)
r=a4.ch
B.a.G(r)
for(p=a4.db,o=p.length,m=a7.c,l=a4.fr,k=0;k<o;++k){j=p[k]
i=a4.p4
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a7.f4(j.c)
i=a4.e
i===$&&A.j()
i=i.w
if(i==null)i=A.k(A.l(a5))
f=a4.j8(g,j,m)
e=j.a
if(i.r)A.k(A.l(a6))
d=i.a
f.F()
c=d.b.aR(f,"inventory:"+e)
b=c.a
d.c.l(0,b,d.bX(f))
i.d.k(0,c)
i=j.f
f=i.a
a=B.F.ga4()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=l.h(0,g.b)
if(d==null){d=l.h(0,"furniture")
d.toString}a2=h.d
i=new A.iK(new A.z(a2.a+f.a*m,a2.b+f.b*m,a2.c+f.c*m),new A.it(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.aW(c,d,i,-1,B.K,B.Q,!1,!0,0,null)
B.a.k(r,c)
q.l(0,e,n)
d=a4.f
d===$&&A.j()
i.F()
f=d.a
a2=f.$ti
f.aj(a2.c.a(c))
f=f.b
if(!(b>=0&&b<f.length))return A.d(f,b)
a3=f[b].c
f=(a3==null?a2.y[1].a(a3):a3).d
i=i.an()
f=f.gb5()
b=A.I(f)
A.cc(new A.R(f,b.i("z(1)").a(i.gb0()),b.i("R<1,z>")))
s.l(0,e,d.b.c3(n))}$.F.j().setAttribute("data-renderer-inventory-items",""+s.a)},
i1(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a6.e,a5=a4.h(0,a7)
if(a5==null)return
s=a5.a
r=A.as([s],t.N)
for(q=a6.av(s),p=J.L(q.a),q=new A.M(p,q.b,q.$ti.i("M<1>"));q.m();){o=p.gp()
n=o.bD(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a4.h(0,n)!=null)r.k(0,n)}for(a4=a3.as,a4=new A.X(a4,A.o(a4).i("X<1,2>")).gu(0),s=a3.at;a4.m();){m=a4.d
q=m.a
p=s.h(0,q)
p.toString
l=a3.bY(p,r.v(0,q)?-1:0)
p=a3.f
p===$&&A.j()
o=m.b
k=l.c
k.F()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.aj(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.d(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.an()
j=j.gb5()
i=A.I(j)
A.cc(new A.R(j,i.i("z(1)").a(k.gb0()),i.i("R<1,z>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.aj(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.d(p,o)
p[o].sb6(l)
s.l(0,q,l)}for(a4=a3.cy,s=a4.length,f=0;f<a4.length;a4.length===s||(0,A.r)(a4),++f){e=a4[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a3.f
q===$&&A.j()
p=a3.bY(e.c,d)
o=p.c
o.F()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.aj(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.d(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.an()
k=k.gb5()
j=A.I(k)
A.cc(new A.R(k,j.i("z(1)").a(o.gb0()),j.i("R<1,z>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.aj(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.d(q,o)
q[o].sb6(p)}for(a4=a3.db,s=a4.length,q=a3.ax,p=a3.ay,f=0;f<s;++f){c=a4[f]
o=c.a
b=q.h(0,o)
a=p.h(0,o)
if(b==null||a==null)continue
o=a3.f
o===$&&A.j()
k=a3.bY(a,r.v(0,c.b)?-1:0)
j=k.c
j.F()
i=o.a
h=i.$ti
a0=h.c.a(k.a)
i.aj(a0)
i=i.b
a0=a0.a
if(!(a0>=0&&a0<i.length))return A.d(i,a0)
g=i[a0].c
i=(g==null?h.y[1].a(g):g).d
j=j.an()
i=i.gb5()
h=A.I(i)
A.cc(new A.R(i,h.i("z(1)").a(j.gb0()),h.i("R<1,z>")))
o=o.b
h=o.$ti
h.c.a(b)
h.y[1].a(k)
o.aj(b)
o=o.b
h=b.a
if(!(h>=0&&h<o.length))return A.d(o,h)
o[h].sb6(k)}a4=new A.kK().k0(a7).a
a1=a3.CW
a2=a3.cx
if(a1!=null&&a2!=null){l=a3.bY(a2,a4!==0?-1:0)
s=a3.f
s===$&&A.j()
s.bZ(l)
s.b.dT(a1,l)
a3.cx=l}},
l7(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(!j.p3)return
s=j.as.h(0,b)
r=j.at
q=r.h(0,b)
p=j.z
o=p.h(0,b)
n=a.e.h(0,b)
if(s==null||q==null||o==null||n==null)return
m=j.e
m===$&&A.j()
l=m.gaw().dO(j.eI(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.aW(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.j()
m.bZ(k)
m.b.dT(s,k)
r.l(0,b,k)
p.l(0,b,l)
p=j.y
B.a.ak(p,o)
B.a.k(p,l)
j.e.gaw().l8(o)
$.F.j().setAttribute("data-renderer-geometry-refreshes",""+(j.R8+1));++j.R8},
hX(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.as([b],t.N),h=a.e,g=h.h(0,b)
if(g!=null)for(s=g.a,r=a.av(s),q=J.L(r.a),r=new A.M(q,r.b,r.$ti.i("M<1>"));r.m();){p=q.gp()
o=p.bD(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h.h(0,o)!=null)i.k(0,o)}n=new A.hT(a).hN(i,c)
m=A.f([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.eh(k.b)
h=k.a
B.a.k(m,new A.io(new A.z(h.a,h.b,h.c),k.d,k.c))}j=A.tw(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.eh(A.tv(d))
s=new A.kx(new A.z(j.a,j.b,j.c),1)}this.id=new A.hK(B.e_,1.5,14,B.bh,h,s,m)},
aE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.p3)throw A.c(A.l("Pixeldart runtime is not initialized"))
s=g.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cl(s)
q=A.pj(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.dY(r,q,q.U(0,r),B.aL,B.fO,0.1,60,g.b/g.c)}p=g.id
o=g.k1
n=g.p2++
m=g.k4
l=new A.mR()
$.qg()
k=$.mh.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.j()
j=g.f
j===$&&A.j()
k.jp()
k.bO()
i=B.a.v(k.d,j)
if(!i)A.k(A.w("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga3(0))A.k(A.w("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga3(0)||i.gbz()<1e-12)A.k(A.w("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.w("CameraView requires 0 < near < far, got "+A.p(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.w("CameraView.aspect must be finite and > 0: "+A.p(i),f))
if(!s.a.ga3(0)||!s.b.ga3(0)||!s.c.ga3(0))A.k(A.w("CameraView matrices must be finite",f))
p.F()
o.F()
if(!isFinite(m))A.k(A.w("FrameInput.timeSeconds must be finite: "+A.p(m),f))
k.at=new A.kR(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.ai)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.ai
s.c=0
B.a.G(s.a)
g.k2=g.e.kn()
s=$.mh.$0()
l.b=s
g.k3=l.gkk()/1000},
aX(a){},
hw(){},
hF(){++this.ok},
eI(a,b){var s,r,q,p,o,n=A.ti(a,b),m=A.N(n.a,t.i)
B.a.J(m,n.b)
B.a.J(m,n.c)
B.a.J(m,n.d)
s=new Float32Array(A.a2(m))
r=A.f([],t.k)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.d(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.d(s,o)
B.a.k(r,new A.z(m,p,s[o]))}return new A.bP(B.R,s,null,A.cc(r))},
e5(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.j()
r=s.gaw().dO(b,"decoration:"+a)
B.a.k(p.y,r)
q=new A.aW(r,p.jb(a),B.O,0,B.K,B.Q,!0,!0,0,null)
s=p.f
s===$&&A.j()
s.bZ(q)
B.a.k(p.cy,new A.jn(a,s.b.c3(q),q,c))},
jb(a){var s=this.dy.h(0,a)
if(s==null){s=this.fx
s.toString}return s},
j8(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cN(new Float32Array(5376))
g=this.j7(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.ai(q,r,o,p,g)
s.ai(n,m,l,k,g)
s.ai(r,n,k,o,g)
s.ai(m,q,p,l,g)
s.ai(r,q,m,n,g)
s.ai(o,k,l,p,g)
j=B.u.b1(s.a,0,s.b)
g=A.f([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.z(e,d,j[c]))}return new A.bP(B.R,j,null,A.cc(g))},
j7(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
cM(a){var s
A:{if("architecture"===a){s=B.fg
break A}if("furniture"===a){s=B.bz
break A}if("fixture"===a){s=B.fh
break A}if("service"===a){s=B.fe
break A}if("story"===a){s=B.ff
break A}if("decor"===a){s=B.fj
break A}if("micro"===a){s=B.fi
break A}s=B.bz
break A}return s},
ar(a){return this.kQ(t.G.a(a))},
kQ(a){var s=0,r=A.b1(t.H),q,p=this,o,n,m,l
var $async$ar=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.f([],t.iw)
for(n=0;n<2;++n){m=B.ex[n]
l=a.h(0,m)
if(l!=null)o.push(p.bQ(m,l))}s=3
return A.a7(A.kX(o,t.H),$async$ar)
case 3:case 1:return A.b_(q,r)}})
return A.b0($async$ar,r)},
bQ(a,b){return this.ja(a,b)},
ja(a,b){var s=0,r=A.b1(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bQ=A.b2(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dx.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.e(A.e(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.a7(A.aw(A.e(m.decode()),t.X),$async$bQ)
case 7:g=A.e(A.e(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.h(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.c(h)}k.drawImage(m,0,0)
j=t.mR.a(A.e(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.j()
h=h.gaw()
f=new Uint8Array(A.a2(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.lq(d,f)
$.F.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ab(c)
h=$.F.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.e(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.p(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$bQ,r)},
bY(a,b){return new A.aW(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
ez(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.Z.j().aS(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.f([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.U)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.f([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.U)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.f([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.U)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.f([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.U)
k=r
break
default:k=null}o=new A.cN(new Float32Array(5376))
o.ai(k[0],k[1],k[2],k[3],g)
n=B.u.b1(o.a,0,o.b)
k=A.f([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.z(r,q,n[p]))}return new A.bP(B.R,n,null,A.cc(k))},
eh(a){return new A.di((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ipo:1}
A.nL.prototype={
$0(){return!this.a.w},
$S:16}
A.nM.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:16}
A.em.prototype={
gb7(){return A.mA("legacy",B.l,this.e,this.f,"legacy")},
gcY(){return this.x},
aI(){var s,r=this
if(r.w)return
s=A.vl(r.a,r.b,r.c)
r.r!==$&&A.y()
r.r=s
s.fF=s.fE=s.fD=r.d
r.w=!0},
aC(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.j()
s.aC(a,b)}},
aE(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.c(A.l("legacy runtime is not initialized"))
if(j.x||$.o4==null)return;++j.y
$.F.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.j()
r=$.rZ
q=$.be.j()
s.fJ=A.tw($.dJ.j().gbh()).ga4()
s.shv(A.tv($.dJ.j().gbh()))
p=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dJ.j().gbh()))
s.fN=p<0?0:p
p=$.bE.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.S(0,p.d.U(0,(A.p4(o*0.28,1309)*2-1)*n)).S(0,p.c.U(0,(A.p4(p.r*0.28,2839)*2-1)*n))
p=$.bE.j()
s.fO=p.a
s.dg=p.b
s.dh=p.c
s.di=p.d
m=A.wX(0,0.25,0.11)
s.dj=m.a
s.dk=m.b
s.dl=m.c
p=s.ca
l=p==null?s.bs:p
if(l==null)l=s.aT
p=s.aA
p.aG(l)
s.aq.depthMask(!0)
p.k7(l,s.dj/255,s.dk/255,s.dl/255)
s.da=s.cb=0
s.dd=!1
s.bu=0
k=$.o4
if(k!=null)k.kh($.aQ,$.jY())
s.ky(r,q)
$.rC.j().dS(B.cx,r)},
aX(a){},
hw(){this.x=!0},
hF(){this.x=!1},
$ipo:1}
A.jn.prototype={}
A.oP.prototype={
$1(a){var s
try{A.qx(a,this.a)
return!0}catch(s){if(A.ab(s) instanceof A.J)return!1
else throw s}},
$S:98}
A.oQ.prototype={
$0(){$.bf=null
$.bu.j().aK($.F.j())},
$S:0}
A.oR.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gal().a===21){A.t7(!1)
return}s=$.Z.j().r.b
$.T.j().i9(a,b,$.aQ)
r=$.Z.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.ct()
if(typeof n!=="number")return A.jU(n)
if(!(o<n))break
if($.Z.b===$.Z)A.k(A.a3(""))
p=B.a.h(B.A,q).b
o=$.o4
if(o!=null)o.l5(p)
o=$.bI
if(o!=null){n=$.Z.b
if(n===$.Z)A.k(A.a3(""))
o.l7(n,p)}o=q
if(typeof o!=="number")return o.S()
q=o+1}A.q2("saved after sleep")},
$S:99}
A.oU.prototype={
$0(){$.bf=null
$.bu.j().aK($.F.j())},
$S:0}
A.oV.prototype={
$0(){$.bf=null
$.bu.j().aK($.F.j())},
$S:0}
A.oW.prototype={
$0(){$.bf=null},
$S:0}
A.oX.prototype={
$0(){$.bf=null},
$S:0}
A.oY.prototype={
$1(a){A.e(a)
return A.t6()},
$S:1}
A.oZ.prototype={
$1(a){var s,r
A.e(a)
if(!A.aY(a.repeat))$.cw.j().aX(new A.iw(A.G(a.code),!0,1))
if(A.G(a.code)==="KeyP"&&!A.aY(a.repeat))$.pW=!$.pW
if(A.G(a.code)==="KeyR"&&!A.aY(a.repeat)&&$.tf){s=$.eC
if(s!=null)s.bb()}if(A.G(a.code)==="KeyJ"&&!A.aY(a.repeat)&&!$.aD.j().z){s=$.bf
if(s==null){$.bf=$.ew.j()
s=$.ew.j()
s.ii()
r=s.r.a-1
if(r<1)r=1
s.CW=s.ed(s.CW,r)
s.jq()
s.eE()}else if(s===$.ew.j())$.ew.j().aH()}if(A.G(a.code)==="KeyL"&&!A.aY(a.repeat)&&!$.aD.j().z){s=$.bf
if(s==null){$.bf=$.jH.j()
$.jH.j().cm()}else if(s===$.jH.j())$.jH.j().aH()}if(A.G(a.code)==="KeyH"&&!A.aY(a.repeat)&&!$.aD.j().z){s=$.bf
if(s==null){$.bf=$.jF.j()
$.jF.j().cm()}else if(s===$.jF.j())$.jF.j().aH()}if(A.G(a.code)==="KeyK"&&!A.aY(a.repeat))A.q2("saved")},
$S:3}
A.p_.prototype={
$1(a){A.e(a)
$.cw.j().aX(new A.iw(A.G(a.code),!1,0))},
$S:3}
A.p0.prototype={
$1(a){A.e(a)
return A.rF()},
$S:1}
A.oS.prototype={
$1(a){A.e(a)
return A.rF()},
$S:1}
A.oT.prototype={
$1(a){A.e(a)
return $.bu.j().aK($.F.j())},
$S:1}
A.oo.prototype={
$1(a){var s=A.G(A.e(a).message)
A.os(s,null)},
$S:3}
A.op.prototype={
$1(a){var s
A.e(a)
s=a.reason
A.os("unhandled rejection: "+A.p(s==null?A.G(a.type):s),null)},
$S:3}
A.ov.prototype={
$0(){this.a.className=""},
$S:8}
A.ot.prototype={
$1(a){return t.L.a(a).e},
$S:24};(function aliases(){var s=J.cG.prototype
s.ih=s.n
s=A.n.prototype
s.ig=s.dW
s=A.fc.prototype
s.ii=s.cm})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"x2","uT",28)
r(J.q.prototype,"gc1","v",11)
q(A,"xf","v6",17)
p(A.by.prototype,"gka","a2",11)
o(A,"xO","vN",7)
o(A,"xP","vO",7)
o(A,"xQ","vP",7)
q(A,"th","xv",0)
s(A,"xU","uY",28)
r(A.bB.prototype,"gc1","v",11)
o(A,"xX","wI",5)
p(A.i9.prototype,"glf","lg",64)
p(A.iJ.prototype,"gld","le",90)
q(A,"z8","pl",16)
p(A.cl.prototype,"gb0","hJ",47)
var n
p(n=A.hW.prototype,"gjc","jd",1)
p(n,"gje","jf",1)
p(n,"gji","jj",1)
p(n,"gjg","jh",1)
o(A,"yp","rM",5)
o(A,"yr","rL",5)
o(A,"ye","uO",102)
o(A,"yf","uP",103)
o(A,"yu","uJ",104)
p(A.fc.prototype,"gjk","jl",1)
p(A.iW.prototype,"gkI","kJ",15)
o(A,"to","xj",105)
o(A,"yj","wE",106)
q(A,"yl","wH",0)
o(A,"yk","wF",71)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.B,null)
q(A.B,[A.pd,J.hY,A.fm,J.d0,A.n,A.eL,A.cB,A.a6,A.K,A.mL,A.cj,A.dj,A.M,A.fw,A.af,A.c4,A.bC,A.ea,A.e_,A.dG,A.co,A.n2,A.m2,A.eS,A.fQ,A.V,A.lR,A.cH,A.al,A.f4,A.ns,A.nT,A.bQ,A.jd,A.jA,A.nQ,A.j1,A.bt,A.ax,A.j5,A.dB,A.ah,A.j2,A.jy,A.h1,A.fF,A.ji,A.dH,A.fI,A.fW,A.jB,A.d3,A.hw,A.nJ,A.nU,A.d5,A.cD,A.ja,A.ij,A.fo,A.nt,A.J,A.O,A.ai,A.jz,A.mR,A.aO,A.fY,A.n4,A.ju,A.m1,A.jf,A.en,A.mk,A.dn,A.kq,A.kr,A.ip,A.dY,A.hK,A.kR,A.cn,A.l6,A.di,A.kx,A.io,A.eh,A.cI,A.ct,A.n9,A.bP,A.m3,A.mc,A.ix,A.aW,A.iG,A.iv,A.kT,A.i9,A.iN,A.lZ,A.cv,A.iJ,A.de,A.hI,A.hJ,A.kS,A.aj,A.bk,A.aN,A.P,A.eM,A.mi,A.aL,A.mm,A.aK,A.mo,A.mn,A.dE,A.fh,A.nP,A.jo,A.jc,A.mD,A.mJ,A.b7,A.b4,A.aq,A.kt,A.hd,A.dm,A.kU,A.cl,A.it,A.iK,A.z,A.eK,A.j3,A.hm,A.j4,A.hA,A.j7,A.eP,A.j8,A.hE,A.j9,A.hS,A.je,A.ho,A.hn,A.fe,A.jp,A.is,A.jq,A.du,A.iA,A.js,A.iB,A.jt,A.iE,A.jw,A.iD,A.jv,A.iS,A.jC,A.fj,A.j_,A.jD,A.ko,A.hN,A.hP,A.eX,A.fn,A.E,A.hB,A.iq,A.l5,A.cV,A.c1,A.eQ,A.nk,A.cX,A.h0,A.h_,A.iZ,A.hD,A.hi,A.kn,A.kQ,A.iH,A.l3,A.hU,A.hW,A.i8,A.dk,A.lY,A.cN,A.mt,A.mC,A.nm,A.fD,A.jx,A.jm,A.jk,A.mM,A.b,A.km,A.hF,A.kD,A.e1,A.im,A.md,A.ef,A.mI,A.ds,A.hL,A.l0,A.l_,A.kb,A.dT,A.dV,A.dS,A.dU,A.hp,A.ia,A.fy,A.j0,A.eZ,A.lb,A.mE,A.aJ,A.kI,A.lc,A.ld,A.kK,A.cU,A.e3,A.mF,A.cT,A.es,A.l9,A.kH,A.mN,A.lf,A.bX,A.ch,A.lz,A.ly,A.c_,A.hT,A.aP,A.c0,A.aV,A.b8,A.cC,A.cM,A.aB,A.lk,A.bW,A.la,A.eY,A.lj,A.e6,A.lo,A.fd,A.f5,A.nh,A.i6,A.bi,A.lB,A.ki,A.dW,A.kj,A.lN,A.lM,A.ma,A.m9,A.mb,A.mB,A.iw,A.mz,A.eg,A.ku,A.nl,A.dz,A.hv,A.lu,A.lw,A.mG,A.c2,A.mH,A.hM,A.mS,A.dx,A.dw,A.fv,A.mX,A.k6,A.kl,A.ky,A.fc,A.mj,A.bL,A.k3,A.iW,A.ng,A.cu,A.bq,A.bA,A.ba,A.iY,A.he,A.iV,A.fN,A.em,A.jn])
q(J.hY,[J.i1,J.f0,J.f1,J.e8,J.e9,J.df,J.dg])
q(J.f1,[J.cG,J.q,A.cJ,A.f9])
q(J.cG,[J.il,J.dv,J.ci])
r(J.i_,A.fm)
r(J.lA,J.q)
q(J.df,[J.f_,J.i2])
q(A.n,[A.cS,A.D,A.ck,A.Q,A.bT,A.dF,A.c8])
q(A.cS,[A.d2,A.h2])
r(A.fC,A.d2)
r(A.fA,A.h2)
q(A.cB,[A.hr,A.hq,A.iI,A.oK,A.oM,A.no,A.nn,A.o1,A.kY,A.nD,A.nF,A.lU,A.nH,A.p2,A.p3,A.oE,A.ml,A.m5,A.lX,A.m_,A.n_,A.n1,A.kN,A.kL,A.kM,A.m7,A.m8,A.ms,A.mr,A.mq,A.mp,A.mu,A.ok,A.ol,A.mK,A.p8,A.p6,A.kV,A.lW,A.oC,A.ni,A.nj,A.ka,A.l4,A.my,A.kG,A.l1,A.l2,A.kc,A.kd,A.ke,A.kf,A.kg,A.kh,A.oA,A.kp,A.kJ,A.le,A.om,A.o0,A.lq,A.ls,A.mO,A.lg,A.oz,A.ll,A.ln,A.oy,A.kC,A.lQ,A.lI,A.kv,A.kw,A.oq,A.mY,A.mZ,A.k7,A.kz,A.kA,A.kB,A.kF,A.l8,A.lD,A.lE,A.lF,A.mQ,A.k5,A.nf,A.ne,A.nc,A.oH,A.na,A.k0,A.k1,A.k2,A.oP,A.oY,A.oZ,A.p_,A.p0,A.oS,A.oT,A.oo,A.op,A.ot])
q(A.hr,[A.nr,A.ks,A.lJ,A.oL,A.o2,A.oB,A.kZ,A.nE,A.lS,A.lV,A.nK,A.n7,A.n6,A.m0,A.n0,A.kO,A.p7,A.p5,A.lr,A.lt,A.li,A.lP,A.lx,A.mT,A.mU,A.lG,A.lH,A.k4,A.nd,A.nb,A.oR])
r(A.bN,A.fA)
q(A.a6,[A.dh,A.cq,A.i3,A.iM,A.iy,A.jb,A.f3,A.hg,A.bM,A.ft,A.iL,A.ei,A.hu])
r(A.ek,A.K)
r(A.hs,A.ek)
q(A.D,[A.a1,A.ak,A.aT,A.X,A.dD,A.fH])
q(A.a1,[A.fq,A.R,A.fl,A.jh])
r(A.d6,A.ck)
q(A.bC,[A.eo,A.ep,A.eq])
r(A.c7,A.eo)
r(A.bs,A.ep)
r(A.fO,A.eq)
r(A.et,A.ea)
r(A.cP,A.et)
r(A.eN,A.cP)
q(A.e_,[A.a5,A.eU])
q(A.co,[A.eO,A.fP,A.fX])
r(A.cd,A.eO)
q(A.hq,[A.me,A.np,A.nq,A.nR,A.kW,A.nu,A.nz,A.ny,A.nw,A.nv,A.nC,A.nB,A.nA,A.nO,A.ou,A.nW,A.nV,A.oi,A.oc,A.oh,A.o8,A.o9,A.oj,A.og,A.o6,A.o7,A.od,A.oe,A.of,A.ob,A.oa,A.oD,A.mx,A.lp,A.lh,A.lm,A.nL,A.nM,A.oQ,A.oU,A.oV,A.oW,A.oX,A.ov])
r(A.fb,A.cq)
q(A.iI,[A.iF,A.dX])
q(A.V,[A.by,A.fE,A.jg])
r(A.f2,A.by)
r(A.eb,A.cJ)
q(A.f9,[A.ib,A.aA])
q(A.aA,[A.fJ,A.fL])
r(A.fK,A.fJ)
r(A.f7,A.fK)
r(A.fM,A.fL)
r(A.f8,A.fM)
q(A.f7,[A.f6,A.ic])
q(A.f8,[A.id,A.ie,A.ig,A.ih,A.ii,A.dl,A.fa])
r(A.fR,A.jb)
r(A.fx,A.j5)
r(A.jr,A.h1)
r(A.fG,A.fE)
r(A.bB,A.fP)
r(A.fs,A.fX)
q(A.d3,[A.hj,A.hG,A.i4])
q(A.hw,[A.kk,A.lL,A.lK,A.n8])
r(A.i5,A.f3)
r(A.nI,A.nJ)
r(A.iQ,A.hG)
q(A.bM,[A.ed,A.hV])
r(A.j6,A.fY)
q(A.ja,[A.dp,A.dd,A.hf,A.cs,A.e0,A.hl,A.ht,A.hC,A.dr,A.e4,A.bO,A.fk,A.cf,A.ee,A.e5,A.fz,A.fB,A.hO,A.eV,A.hQ,A.hR,A.db,A.eW,A.dt,A.cO,A.dZ,A.er,A.hk,A.d1,A.hx,A.hz,A.aC,A.bx,A.da,A.d7,A.d8,A.eT,A.cE,A.cF,A.fi,A.dq,A.b9,A.aX,A.hX,A.dA,A.bz,A.b5,A.bo,A.bp,A.cQ,A.c5])
q(A.cn,[A.b6,A.bn,A.bZ,A.ik,A.cg])
r(A.mw,A.nm)
r(A.mv,A.mw)
q(A.fc,[A.kE,A.l7,A.lC,A.mP])
q(A.ng,[A.iX,A.jl,A.bb,A.iU,A.iT,A.fu])
s(A.ek,A.c4)
s(A.h2,A.K)
s(A.fJ,A.K)
s(A.fK,A.af)
s(A.fL,A.K)
s(A.fM,A.af)
s(A.et,A.fW)
s(A.fX,A.jB)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",v:"double",aI:"num",m:"String",u:"bool",ai:"Null",C:"List",B:"Object",S:"Map",W:"JSObject"},mangledNames:{},types:["~()","~(W)","ce()","ai(W)","u(m)","@(@)","u(aj)","~(~())","ai()","~(@)","u(P)","u(B?)","u(v)","u(@)","i(bi,bi)","u(ba)","u()","i()","@(m)","ai(@)","~(B?,B?)","@()","u(i)","m?(m)","u(bi)","m(B?)","u(aP)","0&()","i(@,@)","fj(b6)","m(aj)","i(a_,a_)","~(B,c3)","ai(B,c3)","cg(i,i,m?)","~(@,@)","ce(m{fallback:m?})","ai(~())","eh?()","dY()","v()","aW(bm)","i(aq<b7>,aq<b7>)","bm(aq<b7>)","i(aq<b4>,aq<b4>)","bm(aq<b4>)","dm(v,v,v,v)","z(z)","@(@,m)","~(du)","du()","S<m,m>(S<m,m>,m)","bj<ai>(O<m,m>)","u(W)","0&(m,i?)","W()","B?(B?)","u(bx)","u(aB)","ai(@,c3)","dT(B?)","dS(B?)","dU(B?)","~(i,@)","cI(bZ)","dV(B?)","bZ(i,i,m?)","u(cM)","u(cU)","u(cT)","b(b)","~(i)","C<+(v,v,v,v)>()","u(c0)","i(i,aB)","u(bX)","b6(i,i,m?)","i(c_,c_)","u(bW)","O<m,m>(m,@)","u(b9)","u(aX)","i(i,+(b6,bP))","i(i)","O<i,@>(i,dx)","O<i,@>(i,dw)","u(O<@,@>)","O<m,m>(O<@,@>)","m(bL)","i(bL,bL)","ce(bn?)","i(ba,ba)","i(bA,bA)","S<m,@>(ba)","u(bp)","u(bo)","u(b5)","bn(i,i,m?)","u(ef)","~(b9,aX)","u(fr?)","i(i,+(bn,cv))","bX(B?)","ch(B?)","bW(B?)","~(aI)","~(m)","i(+(v,v,v,v),+(v,v,v,v))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.c7&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.bs&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fO&&A.yn(a,b.a)}}
A.w5(v.typeUniverse,JSON.parse('{"il":"cG","dv":"cG","ci":"cG","yI":"cJ","q":{"C":["1"],"D":["1"],"W":[],"n":["1"]},"i1":{"u":[],"a0":[]},"f0":{"ai":[],"a0":[]},"f1":{"W":[]},"cG":{"W":[]},"i_":{"fm":[]},"lA":{"q":["1"],"C":["1"],"D":["1"],"W":[],"n":["1"]},"d0":{"ad":["1"]},"df":{"v":[],"aI":[],"ay":["aI"]},"f_":{"v":[],"i":[],"aI":[],"ay":["aI"],"a0":[]},"i2":{"v":[],"aI":[],"ay":["aI"],"a0":[]},"dg":{"m":[],"ay":["m"],"qO":[],"a0":[]},"cS":{"n":["2"]},"eL":{"ad":["2"]},"d2":{"cS":["1","2"],"n":["2"],"n.E":"2"},"fC":{"d2":["1","2"],"cS":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"fA":{"K":["2"],"C":["2"],"cS":["1","2"],"D":["2"],"n":["2"]},"bN":{"fA":["1","2"],"K":["2"],"C":["2"],"cS":["1","2"],"D":["2"],"n":["2"],"n.E":"2","K.E":"2"},"dh":{"a6":[]},"hs":{"K":["i"],"c4":["i"],"C":["i"],"D":["i"],"n":["i"],"K.E":"i","c4.E":"i"},"D":{"n":["1"]},"a1":{"D":["1"],"n":["1"]},"fq":{"a1":["1"],"D":["1"],"n":["1"],"a1.E":"1","n.E":"1"},"cj":{"ad":["1"]},"ck":{"n":["2"],"n.E":"2"},"d6":{"ck":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"dj":{"ad":["2"]},"R":{"a1":["2"],"D":["2"],"n":["2"],"a1.E":"2","n.E":"2"},"Q":{"n":["1"],"n.E":"1"},"M":{"ad":["1"]},"bT":{"n":["1"],"n.E":"1"},"fw":{"ad":["1"]},"ek":{"K":["1"],"c4":["1"],"C":["1"],"D":["1"],"n":["1"]},"fl":{"a1":["1"],"D":["1"],"n":["1"],"a1.E":"1","n.E":"1"},"c7":{"eo":[],"bC":[]},"bs":{"ep":[],"bC":[]},"fO":{"eq":[],"bC":[]},"eN":{"cP":["1","2"],"et":["1","2"],"ea":["1","2"],"fW":["1","2"],"S":["1","2"]},"e_":{"S":["1","2"]},"a5":{"e_":["1","2"],"S":["1","2"]},"dF":{"n":["1"],"n.E":"1"},"dG":{"ad":["1"]},"eU":{"e_":["1","2"],"S":["1","2"]},"eO":{"co":["1"],"cL":["1"],"D":["1"],"n":["1"]},"cd":{"eO":["1"],"co":["1"],"cL":["1"],"D":["1"],"n":["1"]},"fb":{"cq":[],"a6":[]},"i3":{"a6":[]},"iM":{"a6":[]},"fQ":{"c3":[]},"cB":{"d9":[]},"hq":{"d9":[]},"hr":{"d9":[]},"iI":{"d9":[]},"iF":{"d9":[]},"dX":{"d9":[]},"iy":{"a6":[]},"by":{"V":["1","2"],"pf":["1","2"],"S":["1","2"],"V.K":"1","V.V":"2"},"ak":{"D":["1"],"n":["1"],"n.E":"1"},"cH":{"ad":["1"]},"aT":{"D":["1"],"n":["1"],"n.E":"1"},"al":{"ad":["1"]},"X":{"D":["O<1,2>"],"n":["O<1,2>"],"n.E":"O<1,2>"},"f4":{"ad":["O<1,2>"]},"f2":{"by":["1","2"],"V":["1","2"],"pf":["1","2"],"S":["1","2"],"V.K":"1","V.V":"2"},"eo":{"bC":[]},"ep":{"bC":[]},"eq":{"bC":[]},"eb":{"cJ":[],"W":[],"a0":[]},"dl":{"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"],"a0":[],"K.E":"i","af.E":"i"},"cJ":{"W":[],"a0":[]},"f9":{"W":[]},"ib":{"W":[],"a0":[]},"aA":{"bl":["1"],"W":[]},"f7":{"K":["v"],"aA":["v"],"C":["v"],"bl":["v"],"D":["v"],"W":[],"n":["v"],"af":["v"]},"f8":{"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"]},"f6":{"kP":[],"K":["v"],"aA":["v"],"C":["v"],"bl":["v"],"D":["v"],"W":[],"n":["v"],"af":["v"],"a0":[],"K.E":"v","af.E":"v"},"ic":{"K":["v"],"aA":["v"],"C":["v"],"bl":["v"],"D":["v"],"W":[],"n":["v"],"af":["v"],"a0":[],"K.E":"v","af.E":"v"},"id":{"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"],"a0":[],"K.E":"i","af.E":"i"},"ie":{"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"],"a0":[],"K.E":"i","af.E":"i"},"ig":{"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"],"a0":[],"K.E":"i","af.E":"i"},"ih":{"ps":[],"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"],"a0":[],"K.E":"i","af.E":"i"},"ii":{"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"],"a0":[],"K.E":"i","af.E":"i"},"fa":{"fr":[],"K":["i"],"aA":["i"],"C":["i"],"bl":["i"],"D":["i"],"W":[],"n":["i"],"af":["i"],"a0":[],"K.E":"i","af.E":"i"},"jb":{"a6":[]},"fR":{"cq":[],"a6":[]},"bt":{"ad":["1"]},"c8":{"n":["1"],"n.E":"1"},"ax":{"a6":[]},"fx":{"j5":["1"]},"ah":{"bj":["1"]},"h1":{"rf":[]},"jr":{"h1":[],"rf":[]},"fE":{"V":["1","2"],"S":["1","2"]},"fG":{"fE":["1","2"],"V":["1","2"],"S":["1","2"],"V.K":"1","V.V":"2"},"dD":{"D":["1"],"n":["1"],"n.E":"1"},"fF":{"ad":["1"]},"bB":{"co":["1"],"qL":["1"],"cL":["1"],"D":["1"],"n":["1"]},"dH":{"ad":["1"]},"K":{"C":["1"],"D":["1"],"n":["1"]},"V":{"S":["1","2"]},"fH":{"D":["2"],"n":["2"],"n.E":"2"},"fI":{"ad":["2"]},"ea":{"S":["1","2"]},"cP":{"et":["1","2"],"ea":["1","2"],"fW":["1","2"],"S":["1","2"]},"co":{"cL":["1"],"D":["1"],"n":["1"]},"fP":{"co":["1"],"cL":["1"],"D":["1"],"n":["1"]},"fs":{"co":["1"],"jB":["1"],"cL":["1"],"D":["1"],"n":["1"]},"jg":{"V":["m","@"],"S":["m","@"],"V.K":"m","V.V":"@"},"jh":{"a1":["m"],"D":["m"],"n":["m"],"a1.E":"m","n.E":"m"},"hj":{"d3":["C<i>","m"]},"hG":{"d3":["m","C<i>"]},"f3":{"a6":[]},"i5":{"a6":[]},"i4":{"d3":["B?","m"]},"iQ":{"d3":["m","C<i>"]},"d5":{"ay":["d5"]},"v":{"aI":[],"ay":["aI"]},"cD":{"ay":["cD"]},"i":{"aI":[],"ay":["aI"]},"C":{"D":["1"],"n":["1"]},"aI":{"ay":["aI"]},"cL":{"D":["1"],"n":["1"]},"m":{"ay":["m"],"qO":[]},"ja":{"H":[]},"hg":{"a6":[]},"cq":{"a6":[]},"bM":{"a6":[]},"ed":{"a6":[]},"hV":{"a6":[]},"ft":{"a6":[]},"iL":{"a6":[]},"ei":{"a6":[]},"hu":{"a6":[]},"ij":{"a6":[]},"fo":{"a6":[]},"jz":{"c3":[]},"aO":{"vr":[]},"fY":{"iO":[]},"ju":{"iO":[]},"j6":{"iO":[]},"jf":{"pm":[]},"en":{"pm":[]},"dp":{"H":[]},"b6":{"cn":[]},"bn":{"cn":[]},"bZ":{"cn":[]},"cg":{"cn":[]},"ik":{"cn":[]},"dd":{"H":[]},"hf":{"H":[]},"cs":{"H":[]},"e0":{"H":[]},"hl":{"H":[]},"ht":{"H":[]},"hC":{"H":[]},"dr":{"H":[]},"e4":{"H":[]},"bO":{"H":[]},"fk":{"H":[]},"cf":{"H":[]},"ee":{"H":[]},"fh":{"vj":[]},"dE":{"bm":[]},"jo":{"vi":[]},"jc":{"uD":[]},"b7":{"ay":["b7"]},"b4":{"ay":["b4"]},"e5":{"H":[]},"fz":{"H":[]},"eK":{"a9":[]},"j3":{"a_":[]},"hm":{"a9":[]},"j4":{"a_":[]},"hA":{"a9":[]},"j7":{"a_":[]},"fB":{"H":[]},"eP":{"a9":[]},"j8":{"a_":[]},"hE":{"a9":[]},"j9":{"a_":[]},"hS":{"a9":[]},"je":{"a_":[]},"hn":{"vh":[]},"fe":{"a9":[]},"jp":{"a_":[]},"is":{"a9":[]},"jq":{"a_":[]},"iA":{"a9":[]},"js":{"a_":[]},"iB":{"a9":[]},"jt":{"a_":[]},"iE":{"a9":[]},"jw":{"a_":[]},"iD":{"a9":[]},"jv":{"a_":[]},"iS":{"a9":[]},"jC":{"a_":[]},"j_":{"a9":[]},"jD":{"a_":[]},"hO":{"H":[]},"eV":{"H":[]},"hQ":{"H":[]},"hR":{"H":[]},"db":{"H":[]},"eW":{"H":[]},"dt":{"H":[]},"cO":{"H":[]},"dZ":{"H":[]},"hB":{"um":[]},"er":{"H":[]},"aC":{"H":[]},"hk":{"H":[]},"d1":{"H":[]},"hx":{"H":[]},"hz":{"H":[]},"cX":{"ce":[]},"iZ":{"uG":[]},"bx":{"H":[]},"da":{"H":[]},"d7":{"H":[]},"d8":{"H":[]},"cE":{"H":[]},"eT":{"H":[]},"cF":{"H":[]},"fi":{"H":[]},"dq":{"H":[]},"b9":{"H":[]},"aX":{"H":[]},"hX":{"H":[]},"dA":{"H":[]},"bz":{"H":[]},"b5":{"H":[]},"bo":{"H":[]},"bp":{"H":[]},"cQ":{"H":[]},"c5":{"H":[]},"fN":{"po":[]},"em":{"po":[]},"uN":{"C":["i"],"D":["i"],"n":["i"]},"fr":{"C":["i"],"D":["i"],"n":["i"]},"vw":{"C":["i"],"D":["i"],"n":["i"]},"uL":{"C":["i"],"D":["i"],"n":["i"]},"ps":{"C":["i"],"D":["i"],"n":["i"]},"uM":{"C":["i"],"D":["i"],"n":["i"]},"vv":{"C":["i"],"D":["i"],"n":["i"]},"kP":{"C":["v"],"D":["v"],"n":["v"]},"uC":{"C":["v"],"D":["v"],"n":["v"]}}'))
A.w4(v.typeUniverse,JSON.parse('{"ek":1,"h2":2,"aA":1,"fP":1,"fX":1,"hw":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",p:"MaterialDefinition uv scale must not be zero",n:"MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",i:"MaterialDefinition.emissiveStrength must be >= 0: 0",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.at
return{e:s("bL"),v:s("ax"),f5:s("hi"),gE:s("dS"),fS:s("dT"),d2:s("dU"),lJ:s("dV"),dP:s("b4"),kp:s("ho"),bP:s("ay<@>"),e3:s("eM"),B:s("a5<m,m>"),I:s("a5<m,i>"),R:s("cd<m>"),ml:s("d5"),lD:s("b5"),jS:s("cD"),gt:s("D<@>"),no:s("bx"),L:s("bi"),V:s("a6"),hZ:s("aJ"),D:s("kP"),gY:s("d9"),mj:s("bj<ai>"),_:s("ce"),bU:s("cF"),mm:s("bW"),lv:s("hU<B>"),hL:s("cg"),ob:s("bX"),gB:s("ch"),dp:s("n<eM>"),bq:s("n<m>"),id:s("n<v>"),e7:s("n<@>"),fm:s("n<i>"),od:s("q<bL>"),ag:s("q<hF>"),hS:s("q<cC>"),r:s("q<bi>"),oP:s("q<aJ>"),iw:s("q<bj<~>>"),mc:s("q<hL>"),l2:s("q<ce>"),aW:s("q<bk>"),iG:s("q<eY>"),dL:s("q<e6>"),oX:s("q<yH<B>>"),og:s("q<de>"),jj:s("q<cg>"),kG:s("q<W>"),b1:s("q<i6>"),cs:s("q<aV>"),ic:s("q<S<m,B>>"),hq:s("q<S<m,m>>"),bV:s("q<S<m,@>>"),kS:s("q<i8>"),mn:s("q<dk>"),dg:s("q<b6>"),hJ:s("q<aj>"),x:s("q<b8>"),de:s("q<dm>"),bz:s("q<c_>"),dQ:s("q<io>"),aN:s("q<c0>"),bM:s("q<+(m,C<c0>)>"),fR:s("q<+(i,m)>"),a3:s("q<+(v,v,v,v)>"),o5:s("q<a9>"),u:s("q<a_>"),oZ:s("q<fh>"),C:s("q<P>"),c8:s("q<aW>"),bH:s("q<bm>"),kl:s("q<aB>"),e_:s("q<c2>"),b2:s("q<eg>"),ao:s("q<aq<b4>>"),mX:s("q<aq<b7>>"),jn:s("q<cM>"),s:s("q<m>"),aA:s("q<iH>"),k:s("q<z>"),U:s("q<b>"),cF:s("q<fv>"),bl:s("q<cu>"),ah:s("q<bA>"),E:s("q<aP>"),jX:s("q<cU>"),a9:s("q<cT>"),jU:s("q<jn>"),dz:s("q<cV<cI>>"),jk:s("q<cV<bP>>"),n_:s("q<cV<aW>>"),mQ:s("q<cV<cv>>"),eP:s("q<es>"),df:s("q<u>"),n:s("q<v>"),dG:s("q<@>"),t:s("q<i>"),kC:s("q<W?>"),dM:s("q<B?>"),g2:s("q<aI>"),T:s("f0"),m:s("W"),d4:s("W()"),dY:s("ci"),dX:s("bl<@>"),bY:s("C<bi>"),a:s("C<bk>"),l_:s("C<S<m,m>>"),O:s("C<aj>"),b3:s("C<c_>"),fB:s("C<c0>"),jz:s("C<+(i,m)>"),ge:s("C<+(v,v,v,v)>"),io:s("C<c2>"),h:s("C<m>"),iD:s("C<fv>"),ee:s("C<cu>"),eU:s("C<bA>"),cu:s("C<fD>"),j:s("C<@>"),J:s("C<i>"),ia:s("C<B?>"),mK:s("f5"),q:s("O<m,m>"),d7:s("O<@,@>"),iI:s("O<i,@>"),f7:s("S<m,ce>"),iE:s("S<m,aj>"),G:s("S<m,m>"),oQ:s("S<m,u>"),P:s("S<m,@>"),f:s("S<@,@>"),d8:s("S<i,dw>"),c_:s("S<i,dx>"),gz:s("S<m,C<+(v,v,v,v)>>"),kz:s("S<bp,C<bA>>"),iu:s("S<i,S<m,m>>"),mz:s("R<z,z>"),dD:s("R<m,m?>"),fP:s("bZ"),l0:s("b6"),eb:s("eb"),mR:s("dl"),b:s("ai"),K:s("B"),nL:s("b7"),A:s("aj"),f0:s("c_"),W:s("c0"),ku:s("fd"),lZ:s("yJ"),aK:s("+()"),o7:s("+(b6,bP)"),iL:s("+(m,W)"),p3:s("+(bn,cv)"),cW:s("+(v,v,v,v)"),ks:s("a_"),mo:s("c1<cg,aW>"),kk:s("c1<bZ,cI>"),ll:s("c1<b6,bP>"),ox:s("c1<bn,cv>"),n4:s("P"),p9:s("aW"),os:s("bm"),Y:s("aB"),k8:s("c2"),Q:s("cL<m>"),nO:s("cL<i>"),m9:s("aX"),gC:s("b9"),ad:s("eg"),c:s("aq<b4>"),p:s("aq<b7>"),l:s("c3"),fO:s("cM"),dB:s("aC"),N:s("m"),lu:s("bn"),aJ:s("a0"),do:s("cq"),cx:s("dv"),ph:s("cP<m,m>"),mL:s("iN"),jJ:s("iO"),b9:s("z"),bf:s("b"),pc:s("z(z)"),g:s("ba"),nq:s("bo"),kM:s("bp"),bR:s("dw"),ey:s("dx"),mv:s("cu"),kX:s("bA"),cq:s("bb"),bn:s("Q<b5>"),ns:s("Q<bx>"),hr:s("Q<aX>"),am:s("Q<b9>"),nn:s("Q<m>"),cB:s("Q<bo>"),na:s("Q<bp>"),lS:s("bT<m>"),hE:s("aP"),fH:s("fD"),d:s("ah<@>"),mp:s("fG<B?,B?>"),j8:s("jk"),fg:s("cU"),at:s("cT"),ln:s("jl"),fw:s("jm"),hX:s("jx"),fJ:s("c8<bm>"),jg:s("h_"),fL:s("h0"),y:s("u"),al:s("u()"),hg:s("u(b5)"),gl:s("u(bx)"),iW:s("u(B)"),aZ:s("u(aX)"),gw:s("u(b9)"),gS:s("u(m)"),bQ:s("u(bo)"),nw:s("u(bp)"),i:s("v"),z:s("@"),mY:s("@()"),mq:s("@(B)"),ng:s("@(B,c3)"),S:s("i"),gK:s("bj<ai>?"),mU:s("W?"),lH:s("C<@>?"),X:s("B?"),w:s("m?"),ej:s("m?(m)"),nh:s("fr?"),F:s("dB<@,@>?"),Z:s("ji?"),fU:s("u?"),hK:s("u(ef)?"),dA:s("v?"),aV:s("i?"),jh:s("aI?"),jE:s("~()?"),as:s("~(b9,aX)?"),ov:s("~(m)?"),bZ:s("~(i)?"),o:s("aI"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.dV=J.hY.prototype
B.a=J.q.prototype
B.c=J.f_.prototype
B.d=J.df.prototype
B.b=J.dg.prototype
B.dW=J.ci.prototype
B.dX=J.f1.prototype
B.u=A.f6.prototype
B.bx=A.fa.prototype
B.by=J.il.prototype
B.aK=J.dv.prototype
B.ht=new A.hf(0,"opaque")
B.ab=new A.hk(0,"add")
B.ci=new A.d1(0,"zero")
B.ac=new A.d1(1,"one")
B.Q=new A.hl(0,"alpha")
B.ad=new A.ki()
B.hu=new A.kk()
B.cl=new A.hj()
B.aQ=new A.ko()
B.aR=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cr=function() {
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
B.cw=function(getTagFallback) {
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
B.cs=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cv=function(hooks) {
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
B.cu=function(hooks) {
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
B.ct=function(hooks) {
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

B.p=new A.i4()
B.hv=new A.lN()
B.cx=new A.B()
B.cy=new A.ij()
B.hw=new A.ma()
B.cz=new A.mb()
B.cA=new A.c2()
B.N=new A.bz(1,"gradeLUT")
B.cB=new A.c2()
B.cC=new A.mG()
B.cD=new A.mI()
B.k=new A.mL()
B.F=new A.z(0,1,0)
B.a4=new A.z(0,-1,0)
B.bh=new A.di(1,1,1)
B.cE=new A.eh()
B.aT=new A.iQ()
B.fS=new A.cs(0,"position")
B.fY=new A.ct(B.fS,0,3)
B.fT=new A.cs(1,"normal")
B.fZ=new A.ct(B.fT,3,3)
B.fU=new A.cs(2,"color")
B.h_=new A.ct(B.fU,6,4)
B.fV=new A.cs(4,"alpha")
B.h0=new A.ct(B.fV,10,1)
B.fW=new A.cs(5,"uv0")
B.h1=new A.ct(B.fW,11,2)
B.fX=new A.cs(6,"legacyMaterialEffect")
B.h2=new A.ct(B.fX,13,1)
B.ao=s([B.fY,B.fZ,B.h_,B.h0,B.h1,B.h2],A.at("q<ct>"))
B.R=new A.n9()
B.aU=new A.jf()
B.r=new A.jr()
B.S=new A.jz()
B.aV=new A.dZ(0,"colorOnly")
B.aW=new A.dZ(1,"colorAndDepth")
B.ae=new A.dZ(2,"depthOnly")
B.af=new A.hx(1,"back")
B.ag=new A.hz(0,"less")
B.T=new A.b5(0,"open")
B.aX=new A.b5(1,"chain")
B.aY=new A.b5(2,"throughDoor")
B.aZ=new A.b5(3,"letterbox")
B.J=new A.b5(4,"ignore")
B.K=new A.e0(0,"opaque")
B.cF=new A.e0(1,"masked")
B.ah=new A.e0(2,"blended")
B.cG=new A.eQ(!0,B.ag,!1,!0,B.ac,B.ac,B.ab,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.cj=new A.d1(2,"srcAlpha")
B.ck=new A.d1(3,"oneMinusSrcAlpha")
B.cH=new A.eQ(!0,B.ag,!1,!0,B.cj,B.ck,B.ab,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.cI=new A.cD(0)
B.cJ=new A.cD(24e5)
B.b_=new A.bx(0,"compliance")
B.cK=new A.e1(B.b_)
B.b0=new A.bx(1,"rupture")
B.cL=new A.e1(B.b0)
B.b1=new A.bx(2,"synchronisation")
B.cM=new A.e1(B.b1)
B.b2=new A.d7(0,"front")
B.cN=new A.d7(1,"rearService")
B.cO=new A.d7(2,"sideBoundary")
B.cP=new A.d7(3,"roofline")
B.i=new A.cE(0,"north")
B.w=new A.cE(1,"east")
B.m=new A.cE(2,"south")
B.G=new A.cE(3,"west")
B.U=new A.eT(0,"ground")
B.V=new A.eT(1,"first")
B.cQ=new A.d8(0,"mantle")
B.cR=new A.d8(1,"portal")
B.cT=new A.d8(3,"none")
B.cU=new A.e3(B.cT,null)
B.cS=new A.d8(2,"window")
B.cV=new A.e3(B.cS,"the shutter")
B.cW=new A.J("saved mantle history is malformed",null,null)
B.cX=new A.J("rupture elapsed time is malformed",null,null)
B.cY=new A.J("presentation keys must be strings",null,null)
B.b3=new A.J("saved mantle state is malformed",null,null)
B.cZ=new A.J("inactive rupture has elapsed time",null,null)
B.d_=new A.J("saved difficulty state is malformed",null,null)
B.d0=new A.J("saved house drift state is malformed",null,null)
B.d1=new A.J("saved sleep record is malformed",null,null)
B.d2=new A.J("saved day-loop sleepHistory must be a list",null,null)
B.d3=new A.J("event sequence must be non-negative",null,null)
B.d4=new A.J("modelScale must be positive and finite",null,null)
B.d5=new A.J("saved window state is malformed",null,null)
B.d6=new A.J("save run and meta must be objects",null,null)
B.d7=new A.J("saved house state is malformed",null,null)
B.d8=new A.J("saved sleep record must be an object",null,null)
B.d9=new A.J("sound cue must be a non-empty string",null,null)
B.da=new A.J("saved session run is malformed",null,null)
B.db=new A.J("save map keys must be strings",null,null)
B.dc=new A.J("transform.scale must be positive",null,null)
B.dd=new A.J("saved day-loop state is malformed",null,null)
B.de=new A.J("rupture extinguished mantle is unknown",null,null)
B.b4=new A.J("saved portal state is malformed",null,null)
B.df=new A.J("saved house state does not match this house",null,null)
B.dg=new A.J("presentation snapshot contains a non-finite number",null,null)
B.dh=new A.J("save contains a non-finite number",null,null)
B.di=new A.J("text.json root must be an object",null,null)
B.dj=new A.J("event kind is empty",null,null)
B.dk=new A.J("saved session clock is malformed",null,null)
B.dl=new A.J("rupture mantle IDs are malformed",null,null)
B.dm=new A.J("saved sleep record has an unknown enum",null,null)
B.dn=new A.J("save root must be an object",null,null)
B.dp=new A.J("render capabilities contain invalid limits",null,null)
B.dq=new A.J("saved house overrides are malformed",null,null)
B.bg=new A.di(0,0,0)
B.em=s([],t.dQ)
B.hz=s([],A.at("q<eh>"))
B.dr=new A.hK(B.bg,0,1,B.bh,0,null,B.em)
B.ds=new A.e4(0,"idle")
B.ai=new A.e4(1,"active")
B.dt=new A.e4(2,"ended")
B.b5=new A.e5(0,"outside")
B.du=new A.e5(1,"intersects")
B.dv=new A.e5(2,"inside")
B.dw=new A.da(0,"timeAdvanced")
B.dx=new A.da(1,"dayEndReached")
B.dy=new A.da(4,"slept")
B.dz=new A.da(5,"complianceFloorTripped")
B.dA=new A.eV(0,"vertex")
B.b6=new A.eV(1,"indices")
B.b7=new A.hO(0,"staticDraw")
B.f=new A.eW(0,"ready")
B.L=new A.eW(1,"lost")
B.dB=new A.db(0,"color")
B.b8=new A.db(1,"colorAndGlow")
B.dC=new A.db(2,"colorDepthGlow")
B.aj=new A.db(3,"depthOnly")
B.W=new A.hQ(1,"linear")
B.b9=new A.hR(0,"clampToEdge")
B.dD=new A.hP(1,1,1,!1,B.W,B.W,B.b9)
B.dE=new A.cf(0,"beforeShadow")
B.dF=new A.cf(2,"beforeDepth")
B.ba=new A.cf(3,"afterDepth")
B.bb=new A.cf(4,"beforeWorld")
B.y=new A.cf(6,"afterResolve")
B.dG=new A.cf(9,"beforePresent")
B.bc=new A.bO(0,"readBeforeWrite")
B.dH=new A.bO(1,"duplicateWriter")
B.dI=new A.bO(2,"sampledMultisampledAttachment")
B.dJ=new A.bO(4,"formatOrSizeMismatch")
B.dK=new A.bO(5,"unversionedReadWrite")
B.dL=new A.bO(6,"invalidHistoryRead")
B.dM=new A.bO(7,"dependencyCycle")
B.dN=new A.bO(8,"missingCapability")
B.X=new A.cF(0,"player")
B.ak=new A.cF(1,"inserted")
B.bd=new A.cF(2,"warden")
B.be=new A.dd(0,"wrongKind")
B.bf=new A.dd(1,"staleGeneration")
B.dO=new A.dd(2,"doubleRelease")
B.al=new A.dd(3,"releasedResource")
B.dR=new A.e6("kitchen-range","settle")
B.dS=new A.e6("cellar-drain","drip")
B.dT=new A.e6("bathroom-cistern","settle")
B.dU=new A.hX(1,"visitor")
B.dY=new A.lK(null)
B.dZ=new A.lL(null)
B.e_=new A.di(0.03,0.03,0.04)
B.bi=s([0,2,2,3],t.t)
B.e0=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cm=new A.cC()
B.cn=new A.cC()
B.co=new A.cC()
B.cp=new A.cC()
B.cq=new A.cC()
B.e1=s([B.cm,B.cn,B.co,B.cp,B.cq],t.hS)
B.e2=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.t=s(["who","verb","object","place","time"],t.s)
B.e3=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightRange","uLightInnerCos","uLightOuterCos","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity"],t.s)
B.e4=s([2,5,9,12,16,19],t.t)
B.e5=s(["uQuantizationBits","uDitherStrength"],t.s)
B.e6=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.e7=s([B.T,B.aX,B.aY,B.aZ,B.J],A.at("q<b5>"))
B.e8=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.P=new A.bp(0,"full")
B.aM=new A.bp(1,"compressed")
B.aN=new A.bp(2,"off")
B.bj=s([B.P,B.aM,B.aN],A.at("q<bp>"))
B.e9=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.ea=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.eb=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.ec=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fy=new A.b9(0,"long")
B.c6=new A.b9(1,"short")
B.bk=s([B.fy,B.c6],A.at("q<b9>"))
B.ed=s([2.1,4.2,6.3],t.n)
B.ee=s(["res/house/house.json","assets/house/house.json"],t.s)
B.x=new A.bz(0,"inactive")
B.ax=new A.bz(2,"affineWarp")
B.ay=new A.bz(3,"vertexSnap")
B.az=new A.bz(4,"tapeGiveup")
B.aA=new A.bz(5,"portalFail")
B.H=new A.bz(6,"lightsOut")
B.bl=s([B.x,B.N,B.ax,B.ay,B.az,B.aA,B.H],A.at("q<bz>"))
B.ef=s([B.X,B.ak,B.bd],A.at("q<cF>"))
B.eg=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.z=s([],t.hS)
B.eo=s([],t.iG)
B.en=s([],t.dL)
B.eh=s([],A.at("q<ch>"))
B.ej=s([],t.cs)
B.an=s([],t.x)
B.el=s([],t.bz)
B.am=s([],t.aN)
B.ek=s([],t.u)
B.bn=s([],t.e_)
B.ei=s([],t.b2)
B.l=s([],t.s)
B.bo=s([],t.cF)
B.bm=s([],t.E)
B.ep=s([],t.t)
B.eq=s([],t.dG)
B.dQ=new A.eZ(15,"kitchen",-0.3,0)
B.dP=new A.eZ(19,"spare-room",0,0.3)
B.A=s([B.dQ,B.dP],A.at("q<eZ>"))
B.er=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.fv=new A.aX(0,"bed")
B.fw=new A.aX(1,"chair")
B.fx=new A.aX(2,"floor")
B.bp=s([B.fv,B.fw,B.fx],A.at("q<aX>"))
B.bq=s([B.i,B.w,B.m,B.G],A.at("q<cE>"))
B.aB=new A.aC(0,"depthTest")
B.aC=new A.aC(1,"depthFunc")
B.aD=new A.aC(2,"depthWrite")
B.aE=new A.aC(3,"blendEnable")
B.aF=new A.aC(4,"blendFunc")
B.aG=new A.aC(5,"blendEquation")
B.aH=new A.aC(6,"cullEnable")
B.aI=new A.aC(7,"cullFace")
B.c9=new A.aC(8,"frontFace")
B.fz=new A.aC(9,"stencilEnable")
B.c7=new A.aC(10,"colorMask")
B.c8=new A.aC(11,"scissorEnable")
B.es=s([B.aB,B.aC,B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.c9,B.fz,B.c7,B.c8],A.at("q<aC>"))
B.et=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.eu=s(["uBloomStrength"],t.s)
B.ev=s(["uLutSize","uStrength"],t.s)
B.ew=s([B.b_,B.b0,B.b1],A.at("q<bx>"))
B.ex=s(["wall-plaster","grime"],t.s)
B.ey=s(["uTexelSize","uNear","uFar"],t.s)
B.br=s(["uTexelStep"],t.s)
B.ez=s(["uninitialized"],t.s)
B.I=new A.bo(0,"waiting")
B.a5=new A.bo(1,"atDoor")
B.a6=new A.bo(2,"consulting")
B.a7=new A.bo(3,"resolved")
B.eA=s([B.I,B.a5,B.a6,B.a7],A.at("q<bo>"))
B.eZ={uAlbedo:0}
B.bs=new A.a5(B.eZ,[0],t.I)
B.eP={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.bt=new A.a5(B.eP,[2,3,4,5,6],t.I)
B.f7={uAlbedo:0,uShadowMap:1,uSsao:2}
B.eB=new A.a5(B.f7,[0,1,2],t.I)
B.f5={uSsaoRaw:0,uSceneDepth:1}
B.eC=new A.a5(B.f5,[0,1],t.I)
B.f2={uScene:0,uHistory:1}
B.eD=new A.a5(B.f2,[0,1],t.I)
B.eQ={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.eE=new A.a5(B.eQ,["d004e52a550696538afaab098008c0e195ce13dc","73484bf75158a814d87995bf6ed7e93b37e9c230","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.B)
B.eW={aPosition:0,aUvMat:1}
B.bu=new A.a5(B.eW,[0,4],t.I)
B.f3={uScene:0,uLut:1}
B.eF=new A.a5(B.f3,[0,1],t.I)
B.f4={uSource:0}
B.bv=new A.a5(B.f4,[0],t.I)
B.eR={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"range-settle":16,"cellar-drip":17,"cistern-settle":18,"step-above-0":19,"step-above-1":20,"step-above-2":21,"step-above-3":22}
B.ap=new A.a5(B.eR,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","transient","transient","transient","sub","sub","sub","sub"],t.B)
B.eV={uSharp:0,uBlurred:1,uSceneDepth:2}
B.eG=new A.a5(B.eV,[0,1,2],t.I)
B.f_={uBloom:0}
B.eH=new A.a5(B.f_,[0],t.I)
B.f0={uSceneDepth:0}
B.eI=new A.a5(B.f0,[0],t.I)
B.f1={uScene:0}
B.eJ=new A.a5(B.f1,[0],t.I)
B.Y={}
B.bw=new A.a5(B.Y,[],t.B)
B.q=new A.a5(B.Y,[],t.I)
B.eK=new A.a5(B.Y,[],A.at("a5<@,@>"))
B.eX={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.eL=new A.a5(B.eX,[0,1,2,3],t.I)
B.eS={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.eM=new A.a5(B.eS,[0,1,2,3,4],t.I)
B.f6={uTex:0}
B.eN=new A.a5(B.f6,[0],t.I)
B.aq=new A.eU([B.N,1,B.ax,1.5,B.ay,1.5,B.az,2,B.aA,2,B.H,4],A.at("eU<bz,v>"))
B.f8=new A.ik(0,1,null)
B.f9=new A.ip(1,0,0,0,8,0,0,0,0,0,0,!1)
B.ar=new A.dp(0,"safe")
B.as=new A.dp(1,"standard")
B.at=new A.dp(2,"high")
B.C=new A.cd(B.Y,0,t.R)
B.Z=new A.dn(B.ar,B.C)
B.eY={shadows:0}
B.ft=new A.cd(B.eY,1,t.R)
B.fb=new A.dn(B.as,B.ft)
B.eT={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.fq=new A.cd(B.eT,5,t.R)
B.fc=new A.dn(B.at,B.fq)
B.fa=new A.dp(4,"shipping")
B.eU={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.fr=new A.cd(B.eU,7,t.R)
B.hA=new A.dn(B.fa,B.fr)
B.fe=new A.bs(0.54,0.5,0.44)
B.bz=new A.bs(0.72,0.52,0.37)
B.ff=new A.bs(0.78,0.7,0.54)
B.fg=new A.bs(0.86,0.78,0.66)
B.fh=new A.bs(0.82,0.8,0.73)
B.fi=new A.bs(0.6,0.55,0.48)
B.fj=new A.bs(0.68,0.62,0.57)
B.a_=new A.fi(0,"legacy")
B.a0=new A.fi(1,"next")
B.bA=new A.dq(0,"constructed")
B.v=new A.dq(1,"ready")
B.a1=new A.dq(2,"lost")
B.bB=new A.dq(3,"disposed")
B.hx=new A.ht(1,"srgb")
B.hy=new A.hC(1,"errorsOnly")
B.fk=new A.iv(B.Z,384,216,0)
B.au=new A.dr(0,"constructed")
B.fl=new A.dr(1,"initializing")
B.av=new A.dr(2,"ready")
B.bC=new A.dr(3,"contextLost")
B.h=new A.ee(0,"read")
B.j=new A.ee(1,"write")
B.B=new A.ee(2,"historyRead")
B.n=new A.fk(0,"rgba8")
B.bE=new A.aN("dofBlurH",B.n,192,108,1,0)
B.bF=new A.aN("dofBlurV",B.n,192,108,1,0)
B.bG=new A.aN("dofOutput",B.n,384,216,1,0)
B.bK=new A.aN("gradeOutput",B.n,384,216,1,0)
B.aw=new A.aN("vhsOutput",B.n,384,216,1,0)
B.bL=new A.aN("bloomBlurH",B.n,192,108,1,0)
B.bM=new A.aN("bloomBlurV",B.n,192,108,1,0)
B.M=new A.aN("sceneColor",B.n,384,216,1,0)
B.bN=new A.aN("ps1Output",B.n,384,216,1,0)
B.bJ=new A.aN("ssaoBlurred",B.n,192,108,1,0)
B.bO=new A.P(B.bJ,B.j)
B.bI=new A.aN("ssaoRaw",B.n,192,108,1,0)
B.bP=new A.P(B.bI,B.j)
B.a2=new A.P(B.M,B.j)
B.bQ=new A.P(B.aw,B.j)
B.bR=new A.P(B.aw,B.B)
B.bS=new A.P(B.bK,B.j)
B.bD=new A.fk(2,"depth24")
B.bH=new A.aN("shadowMap",B.bD,512,512,1,0)
B.bT=new A.P(B.bH,B.j)
B.bU=new A.P(B.bG,B.j)
B.bV=new A.P(B.bI,B.h)
B.bW=new A.P(B.M,B.h)
B.fm=new A.aN("sceneDepth",B.bD,384,216,1,0)
B.bX=new A.P(B.fm,B.j)
B.bY=new A.P(B.bH,B.h)
B.bZ=new A.P(B.bN,B.j)
B.c_=new A.P(B.bF,B.h)
B.c0=new A.P(B.bJ,B.h)
B.c1=new A.P(B.bM,B.h)
B.fn=new A.ds(null,"save storage unavailable")
B.fo=new A.ds(null,"save could not be recovered")
B.fp=new A.ds(null,null)
B.eO={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.fs=new A.cd(B.eO,9,t.R)
B.c4=new A.dt(2,"link")
B.fu=new A.fn(B.c4,"gl.createProgram() returned null")
B.c2=new A.dt(0,"vertex")
B.c3=new A.dt(1,"fragment")
B.c5=new A.dt(3,"validation")
B.aL=new A.z(0,0,0)
B.fd=new A.it(0,0,0,1)
B.O=new A.iK(B.aL,B.fd)
B.fA=A.bK("yC")
B.fB=A.bK("yD")
B.fC=A.bK("kP")
B.fD=A.bK("uC")
B.fE=A.bK("uL")
B.fF=A.bK("uM")
B.fG=A.bK("uN")
B.fH=A.bK("W")
B.fI=A.bK("B")
B.fJ=A.bK("ps")
B.fK=A.bK("vv")
B.fL=A.bK("vw")
B.fM=A.bK("fr")
B.e=new A.cO(0,"float1")
B.ca=new A.cO(1,"float2")
B.D=new A.cO(2,"float3")
B.o=new A.cO(3,"mat4")
B.aJ=new A.cO(4,"sampler")
B.E=new A.E(B.aJ,0)
B.a3=new A.E(B.aJ,1)
B.cb=new A.E(B.aJ,2)
B.fN=new A.n8(!1)
B.fO=new A.z(0,0,1)
B.fP=new A.z(1,0,0)
B.fQ=new A.z(1/0,1/0,1/0)
B.fR=new A.z(-1/0,-1/0,-1/0)
B.h3=new A.cQ(0,"visitorAnswered")
B.cc=new A.cQ(1,"visitorIgnored")
B.h4=new A.cQ(2,"entryVerified")
B.h5=new A.cQ(3,"entryContradicted")
B.h6=new A.cQ(4,"exposureAccepted")
B.h8=new A.c5(1,"malformedDay")
B.h9=new A.c5(2,"malformedTier")
B.cd=new A.c5(3,"missingTierLines")
B.aO=new A.c5(6,"invalidPhase")
B.hf=new A.bq(B.aO,"The active visit cannot be chosen.")
B.hi=new A.bb(B.hf)
B.hc=new A.bq(B.aO,"The active visit has no line to advance.")
B.hj=new A.bb(B.hc)
B.hb=new A.c5(5,"noActiveVisit")
B.hd=new A.bq(B.hb,"There is no active visit.")
B.ce=new A.bb(B.hd)
B.he=new A.bq(B.aO,"A visit is already active.")
B.hk=new A.bb(B.he)
B.ha=new A.c5(4,"noArrival")
B.hh=new A.bq(B.ha,"The authored arrival is missing.")
B.hl=new A.bb(B.hh)
B.h7=new A.c5(0,"missingCorpus")
B.hg=new A.bq(B.h7,"The authored visitor corpus is empty.")
B.hm=new A.bb(B.hg)
B.cf=new A.dA(1,"exact")
B.aP=new A.dA(2,"partial")
B.a8=new A.dA(3,"contradiction")
B.hn=new A.dA(0,"skipped")
B.ho=new A.dz(B.hn,B.C)
B.hp=new A.dz(B.aP,B.C)
B.cg=new A.fz(0,"horizontal")
B.hq=new A.fz(1,"vertical")
B.ch=new A.fB(0,"horizontal")
B.hr=new A.fB(1,"vertical")
B.a9=new A.er(0,"empty")
B.hs=new A.er(1,"cpuReady")
B.aa=new A.er(4,"released")})();(function staticFields(){$.nG=null
$.bw=A.f([],A.at("q<B>"))
$.qP=null
$.mg=0
$.mh=A.xf()
$.qo=null
$.qn=null
$.tm=null
$.tg=null
$.tq=null
$.oG=null
$.oN=null
$.qc=null
$.nN=A.f([],A.at("q<C<B>?>"))
$.eB=null
$.h7=null
$.h8=null
$.pU=!1
$.aa=B.r
$.r4=""
$.r5=null
$.r0=null
$.m6=null
$.bd=A.ae()
$.cw=A.ae()
$.bI=null
$.jK=null
$.F=A.ae()
$.bE=A.ae()
$.bu=A.ae()
$.rC=A.ae()
$.eC=null
$.Z=A.ae()
$.o4=null
$.dJ=A.ae()
$.T=A.ae()
$.pJ=A.ae()
$.pP=null
$.h5=null
$.pK=!1
$.pZ=!1
$.rT=null
$.pQ=null
$.pW=!1
$.rS=!1
$.pV=0
$.rZ=0
$.nY=0
$.tf=!1
$.rJ="booting"
$.bJ=0
$.dK=0
$.aQ="hall"
$.h3=A.ae()
$.ev=A.ae()
$.be=A.ae()
$.rY=null
$.q_=0
$.bf=null
$.ew=A.ae()
$.jG=A.ae()
$.rD=A.ae()
$.rB=A.ae()
$.aD=A.ae()
$.jH=A.ae()
$.jF=A.ae()
$.pI=A.ae()
$.aE=A.ae()
$.jE=A.ae()
$.pH=A.ae()
$.ox=A.a4(t.S)
$.c9=A.f([],t.s)
$.pO=null
$.ta=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"yF","tz",()=>A.tl("_$dart_dartClosure"))
s($,"yE","eI",()=>A.tl("_$dart_dartClosure_dartJSInterop"))
s($,"z5","tT",()=>A.f([new J.i_()],A.at("q<fm>")))
s($,"yM","tB",()=>A.cr(A.n3({
toString:function(){return"$receiver$"}})))
s($,"yN","tC",()=>A.cr(A.n3({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"yO","tD",()=>A.cr(A.n3(null)))
s($,"yP","tE",()=>A.cr(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yS","tH",()=>A.cr(A.n3(void 0)))
s($,"yT","tI",()=>A.cr(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yR","tG",()=>A.cr(A.r1(null)))
s($,"yQ","tF",()=>A.cr(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"yV","tK",()=>A.cr(A.r1(void 0)))
s($,"yU","tJ",()=>A.cr(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"yW","qh",()=>A.vM())
s($,"z_","tO",()=>A.v1(4096))
s($,"yY","tM",()=>new A.nW().$0())
s($,"yZ","tN",()=>new A.nV().$0())
s($,"yX","tL",()=>new Int8Array(A.a2(A.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"z1","jW",()=>A.jV(B.fI))
s($,"yK","qg",()=>{A.vf()
return $.mg})
s($,"yB","p9",()=>new A.aN("sceneColor",B.n,384,216,1,1))
s($,"yG","tA",()=>A.v2(A.f([255,255,255,255],t.t)))
s($,"z6","tU",()=>A.iR(0,1,0))
s($,"z9","jZ",()=>{var q=$.r0
if(q==null){A.jS()
A.jS()
A.jS()
A.jS()
A.jS()
q=$.r0=new A.mX()}return q})
s($,"z0","tP",()=>new A.kj())
s($,"z2","tQ",()=>new A.la())
s($,"z3","tR",()=>new A.lj())
r($,"q4","eJ",()=>A.iR(0,0,0))
r($,"pY","tS",()=>A.iR(0,0,0))
r($,"q7","jY",()=>A.iR(0,0,0))
s($,"z4","jX",()=>new A.kQ(A.iR(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cJ,ArrayBuffer:A.eb,ArrayBufferView:A.f9,DataView:A.ib,Float32Array:A.f6,Float64Array:A.ic,Int16Array:A.id,Int32Array:A.ie,Int8Array:A.ig,Uint16Array:A.ih,Uint32Array:A.ii,Uint8ClampedArray:A.dl,CanvasPixelArray:A.dl,Uint8Array:A.fa})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.fJ.$nativeSuperclassTag="ArrayBufferView"
A.fK.$nativeSuperclassTag="ArrayBufferView"
A.f7.$nativeSuperclassTag="ArrayBufferView"
A.fL.$nativeSuperclassTag="ArrayBufferView"
A.fM.$nativeSuperclassTag="ArrayBufferView"
A.f8.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.oO
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()