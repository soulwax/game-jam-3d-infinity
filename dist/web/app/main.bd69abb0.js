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
if(a[b]!==s){A.zF(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.qW(b)
return new s(c,this)}:function(){if(s===null)s=A.qW(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.qW(a).prototype
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
r0(a,b,c,d){return{i:a,p:b,e:c,x:d}},
pi(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.qZ==null){A.zh()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.rQ("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.oe
if(o==null)o=$.oe=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.zp(a)
if(p!=null)return p
if(typeof a=="function")return B.e5
s=Object.getPrototypeOf(a)
if(s==null)return B.bA
if(s===Object.prototype)return B.bA
if(typeof q=="function"){o=$.oe
if(o==null)o=$.oe=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aM,enumerable:false,writable:true,configurable:true})
return B.aM}return B.aM},
rn(a,b){if(a<0||a>4294967295)throw A.d(A.aV(a,0,4294967295,"length",null))
return J.vP(new Array(a),b)},
ro(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("t<0>"))},
ib(a,b){if(a<0)throw A.d(A.y("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("t<0>"))},
vP(a,b){var s=A.f(a,b.i("t<0>"))
s.$flags=1
return s},
vQ(a,b){var s=t.bP
return J.r5(s.a(a),s.a(b))},
rr(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
vR(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.rr(r))break;++b}return b},
vS(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.rr(q))break}return b},
dX(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.f6.prototype
return J.id.prototype}if(typeof a=="string")return J.ds.prototype
if(a==null)return J.f7.prototype
if(typeof a=="boolean")return J.ic.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cr.prototype
if(typeof a=="symbol")return J.ei.prototype
if(typeof a=="bigint")return J.eh.prototype
return a}if(a instanceof A.D)return a
return J.pi(a)},
ax(a){if(typeof a=="string")return J.ds.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cr.prototype
if(typeof a=="symbol")return J.ei.prototype
if(typeof a=="bigint")return J.eh.prototype
return a}if(a instanceof A.D)return a
return J.pi(a)},
c3(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cr.prototype
if(typeof a=="symbol")return J.ei.prototype
if(typeof a=="bigint")return J.eh.prototype
return a}if(a instanceof A.D)return a
return J.pi(a)},
zd(a){if(typeof a=="number")return J.dr.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.dG.prototype
return a},
ub(a){if(typeof a=="number")return J.dr.prototype
if(typeof a=="string")return J.ds.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.dG.prototype
return a},
ze(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cr.prototype
if(typeof a=="symbol")return J.ei.prototype
if(typeof a=="bigint")return J.eh.prototype
return a}if(a instanceof A.D)return a
return J.pi(a)},
r4(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ub(a).U(a,b)},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dX(a).V(a,b)},
b_(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.zn(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).h(a,b)},
bV(a,b,c){return J.c3(a).l(a,b,c)},
hk(a,b){return J.c3(a).k(a,b)},
uP(a,b){return J.c3(a).J(a,b)},
uQ(a,b){return J.c3(a).R(a,b)},
uR(a,b,c){return J.ze(a).fe(a,b,c)},
uS(a,b){return J.c3(a).c4(a,b)},
r5(a,b){return J.ub(a).F(a,b)},
kc(a,b){return J.c3(a).T(a,b)},
bs(a){return J.dX(a).gG(a)},
r6(a){return J.ax(a).gI(a)},
uT(a){return J.ax(a).gM(a)},
P(a){return J.c3(a).gu(a)},
b0(a){return J.ax(a).gq(a)},
dZ(a){return J.dX(a).gP(a)},
e_(a,b,c){return J.c3(a).bK(a,b,c)},
uU(a,b){return J.ax(a).sq(a,b)},
uV(a,b){return J.c3(a).Y(a,b)},
pS(a,b){return J.zd(a).lZ(a,b)},
e0(a){return J.dX(a).n(a)},
uW(a,b){return J.c3(a).e2(a,b)},
i8:function i8(){},
ic:function ic(){},
f7:function f7(){},
f8:function f8(){},
cR:function cR(){},
ix:function ix(){},
dG:function dG(){},
cr:function cr(){},
eh:function eh(){},
ei:function ei(){},
t:function t(a){this.$ti=a},
ia:function ia(){},
m2:function m2(a){this.$ti=a},
da:function da(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dr:function dr(){},
f6:function f6(){},
id:function id(){},
ds:function ds(){}},A={pW:function pW(){},
k5(){return $},
v5(a,b,c){if(t.gt.b(a))return new A.fK(a,b.i("@<0>").E(c).i("fK<1,2>"))
return new A.dd(a,b.i("@<0>").E(c).i("dd<1,2>"))},
ru(a){return new A.dt("Field '"+a+"' has been assigned during initialization.")},
a1(a){return new A.dt("Field '"+a+"' has not been initialized.")},
vU(a){return new A.dt("Field '"+a+"' has already been initialized.")},
pj(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cy(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nv(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dW(a,b,c){return a},
r_(a){var s,r
for(s=$.bI.length,r=0;r<s;++r)if(a===$.bI[r])return!0
return!1},
nu(a,b,c,d){A.iF(b,"start")
if(c!=null){A.iF(c,"end")
if(b>c)A.k(A.aV(b,0,c,"start",null))}return new A.fx(a,b,c,d.i("fx<0>"))},
ij(a,b,c,d){if(t.gt.b(a))return new A.dh(a,b,c.i("@<0>").E(d).i("dh<1,2>"))
return new A.ct(a,b,c.i("@<0>").E(d).i("ct<1,2>"))},
i9(){return new A.eq("No element")},
vN(){return new A.eq("Too many elements")},
iN(a,b,c,d,e){if(c-b<=32)A.wn(a,b,c,d,e)
else A.wm(a,b,c,d,e)},
wn(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ax(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ac()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
wm(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.L(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.L(a4+a5,2),f=g-j,e=g+j,d=J.ax(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.ab(a6.$2(b,a0),0)
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
A.iN(a3,a4,r-2,a6,a7)
A.iN(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.ab(a6.$2(d.h(a3,r),b),0))++r
while(J.ab(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.iN(a3,r,q,a6,a7)}else A.iN(a3,r,q,a6,a7)},
d_:function d_(){},
eT:function eT(a,b){this.a=a
this.$ti=b},
dd:function dd(a,b){this.a=a
this.$ti=b},
fK:function fK(a,b){this.a=a
this.$ti=b},
fI:function fI(){},
o_:function o_(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.$ti=b},
dt:function dt(a){this.a=a},
de:function de(a){this.a=a},
nd:function nd(){},
G:function G(){},
a6:function a6(){},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bx:function bx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
du:function du(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b){this.a=a
this.$ti=b},
fD:function fD(a,b){this.a=a
this.$ti=b},
ai:function ai(){},
cf:function cf(){},
es:function es(){},
fs:function fs(a,b){this.a=a
this.$ti=b},
hb:function hb(){},
cn(a,b,c){var s,r,q,p,o,n,m,l=A.az(a.gS(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.az(a.gao(),!0,c)
m=new A.a7(q,n,b.i("@<0>").E(c).i("a7<1,2>"))
m.$keys=l
return m}return new A.eV(A.b1(a,b,c),b.i("@<0>").E(c).i("eV<1,2>"))},
vb(){throw A.d(A.aA("Cannot modify unmodifiable Map"))},
vc(){throw A.d(A.aA("Cannot modify constant Set"))},
ur(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
zn(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.e0(a)
return s},
fm(a){var s,r=$.rC
if(r==null)r=$.rC=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
mI(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.e(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
q3(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.dX(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
iC(a){var s,r,q,p
if(a instanceof A.D)return A.bH(A.br(a),null)
s=J.dX(a)
if(s===B.e4||s===B.e6||t.cx.b(a)){r=B.aU(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bH(A.br(a),null)},
rD(a){var s,r,q
if(a==null||typeof a=="number"||A.bS(a))return J.e0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cL)return a.n(0)
if(a instanceof A.bQ)return a.f7(!0)
s=$.uN()
for(r=0;r<1;++r){q=s[r].m_(a)
if(q!=null)return q}return"Instance of '"+A.iC(a)+"'"},
w3(){return Date.now()},
wc(){var s,r
if($.mJ!==0)return
$.mJ=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mJ=1e6
$.mK=new A.mH(r)},
w2(){if(!!self.location)return self.location.href
return null},
wd(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aj(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cX(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aV(a,0,1114111,null,null))},
el(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wb(a){var s=A.el(a).getUTCFullYear()+0
return s},
w9(a){var s=A.el(a).getUTCMonth()+1
return s},
w5(a){var s=A.el(a).getUTCDate()+0
return s},
w6(a){var s=A.el(a).getUTCHours()+0
return s},
w8(a){var s=A.el(a).getUTCMinutes()+0
return s},
wa(a){var s=A.el(a).getUTCSeconds()+0
return s},
w7(a){var s=A.el(a).getUTCMilliseconds()+0
return s},
w4(a){var s=a.$thrownJsError
if(s==null)return null
return A.cm(s)},
rE(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aq(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
k7(a){throw A.d(A.qV(a))},
e(a,b){if(a==null)J.b0(a)
throw A.d(A.pf(a,b))},
pf(a,b){var s,r="index"
if(!A.aO(b))return new A.bX(!0,b,r,null)
s=A.a(J.b0(a))
if(b<0||b>=s)return A.lY(b,s,a,r)
return A.rG(b,r)},
z7(a,b,c){if(a>c)return A.aV(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aV(b,a,c,"end",null)
return new A.bX(!0,b,"end",null)},
qV(a){return new A.bX(!0,a,null,null)},
d(a){return A.aq(a,new Error())},
aq(a,b){var s
if(a==null)a=new A.cz()
b.dartException=a
s=A.zI
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
zI(){return J.e0(this.dartException)},
k(a,b){throw A.aq(a,b==null?new Error():b)},
bd(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.xM(a,b,c),s)},
xM(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fA("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.d(A.ar(a))},
cA(a){var s,r,q,p,o,n
a=A.uj(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.nC(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
nD(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
rP(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
pX(a,b){var s=b==null,r=s?null:b.method
return new A.ie(a,r,s?null:b.receiver)},
af(a){var s
if(a==null)return new A.mv(a)
if(a instanceof A.eZ){s=a.a
return A.d9(a,s==null?A.eD(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.d9(a,a.dartException)
return A.yG(a)},
d9(a,b){if(t.W.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
yG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cX(r,16)&8191)===10)switch(q){case 438:return A.d9(a,A.pX(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.d9(a,new A.fi())}}if(a instanceof TypeError){p=$.uu()
o=$.uv()
n=$.uw()
m=$.ux()
l=$.uA()
k=$.uB()
j=$.uz()
$.uy()
i=$.uD()
h=$.uC()
g=p.aB(s)
if(g!=null)return A.d9(a,A.pX(A.C(s),g))
else{g=o.aB(s)
if(g!=null){g.method="call"
return A.d9(a,A.pX(A.C(s),g))}else if(n.aB(s)!=null||m.aB(s)!=null||l.aB(s)!=null||k.aB(s)!=null||j.aB(s)!=null||m.aB(s)!=null||i.aB(s)!=null||h.aB(s)!=null){A.C(s)
return A.d9(a,new A.fi())}}return A.d9(a,new A.iX(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fv()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.d9(a,new A.bX(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fv()
return a},
cm(a){var s
if(a instanceof A.eZ)return a.b
if(a==null)return new A.fZ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fZ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
k8(a){if(a==null)return J.bs(a)
if(typeof a=="object")return A.fm(a)
return J.bs(a)},
z1(a){if(typeof a=="number")return B.d.gG(a)
if(a instanceof A.jN)return A.fm(a)
if(a instanceof A.bQ)return a.gG(a)
return A.k8(a)},
ua(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
zc(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
y6(a,b,c,d,e,f){t.gY.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.ec("Unsupported number of arguments for wrapped closure"))},
eN(a,b){var s=a.$identity
if(!!s)return s
s=A.z2(a,b)
a.$identity=s
return s},
z2(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.y6)},
va(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iQ().constructor.prototype):Object.create(new A.e5(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.rc(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.v6(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.rc(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
v6(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.v3)}throw A.d("Error in functionType of tearoff")},
v7(a,b,c,d){var s=A.rb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
rc(a,b,c,d){if(c)return A.v9(a,b,d)
return A.v7(b.length,d,a,b)},
v8(a,b,c,d){var s=A.rb,r=A.v4
switch(b?-1:a){case 0:throw A.d(new A.iJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
v9(a,b,c){var s,r
if($.r9==null)$.r9=A.r8("interceptor")
if($.ra==null)$.ra=A.r8("receiver")
s=b.length
r=A.v8(s,c,a,b)
return r},
qW(a){return A.va(a)},
v3(a,b){return A.h3(v.typeUniverse,A.br(a.a),b)},
rb(a){return a.a},
v4(a){return a.b},
r8(a){var s,r,q,p=new A.e5("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.y("Field name "+a+" not found.",null))},
uc(a){return v.getIsolateTag(a)},
un(){return v.G},
Ag(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
zp(a){var s,r,q,p,o,n=A.C($.ud.$1(a)),m=$.pg[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pn[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bq($.u7.$2(a,n))
if(q!=null){m=$.pg[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pn[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.pJ(s)
$.pg[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.pn[n]=s
return s}if(p==="-"){o=A.pJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.uh(a,s)
if(p==="*")throw A.d(A.rQ(n))
if(v.leafTags[n]===true){o=A.pJ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.uh(a,s)},
uh(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.r0(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
pJ(a){return J.r0(a,!1,null,!!a.$ibw)},
zt(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.pJ(s)
else return J.r0(s,c,null,null)},
zh(){if(!0===$.qZ)return
$.qZ=!0
A.zi()},
zi(){var s,r,q,p,o,n,m,l
$.pg=Object.create(null)
$.pn=Object.create(null)
A.zg()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ui.$1(o)
if(n!=null){m=A.zt(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
zg(){var s,r,q,p,o,n,m=B.cu()
m=A.eM(B.cv,A.eM(B.cw,A.eM(B.aV,A.eM(B.aV,A.eM(B.cx,A.eM(B.cy,A.eM(B.cz(B.aU),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ud=new A.pk(p)
$.u7=new A.pl(o)
$.ui=new A.pm(n)},
eM(a,b){return a(b)||b},
wY(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.e(b,s)
if(!J.ab(r,b[s]))return!1}return!0},
z4(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
zC(a,b,c){var s=a.indexOf(b,c)
return s>=0},
za(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
uj(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
zD(a,b,c){var s=A.zE(a,b,c)
return s},
zE(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.uj(b),"g"),A.za(c))},
b5:function b5(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
eV:function eV(a,b){this.a=a
this.$ti=b},
e8:function e8(){},
kV:function kV(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function dP(a,b){this.a=a
this.$ti=b},
dQ:function dQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
f0:function f0(a,b){this.a=a
this.$ti=b},
eW:function eW(){},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
mH:function mH(a){this.a=a},
ft:function ft(){},
nC:function nC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fi:function fi(){},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
mv:function mv(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
fZ:function fZ(a){this.a=a
this.b=null},
cL:function cL(){},
hz:function hz(){},
hA:function hA(){},
iT:function iT(){},
iQ:function iQ(){},
e5:function e5(a,b){this.a=a
this.b=b},
iJ:function iJ(a){this.a=a},
bK:function bK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mb:function mb(a){this.a=a},
mj:function mj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a5:function a5(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aH:function aH(a,b){this.a=a
this.$ti=b},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
U:function U(a,b){this.a=a
this.$ti=b},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f9:function f9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pk:function pk(a){this.a=a},
pl:function pl(a){this.a=a},
pm:function pm(a){this.a=a},
bQ:function bQ(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
zF(a){throw A.aq(A.ru(a),new Error())},
h(){throw A.aq(A.a1(""),new Error())},
B(){throw A.aq(A.vU(""),new Error())},
uq(){throw A.aq(A.ru(""),new Error())},
ae(){var s=new A.o0()
return s.b=s},
o0:function o0(){this.b=null},
Y(a){return a},
vY(a,b,c){return new Float32Array(a,b,c)},
vZ(a){return new Uint8Array(a)},
w_(a){return new Uint8Array(A.Y(a))},
cI(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.pf(b,a))},
xF(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.z7(a,b,c))
return b},
cT:function cT(){},
ek:function ek(){},
fg:function fg(){},
os:function os(a){this.a=a},
io:function io(){},
aI:function aI(){},
fe:function fe(){},
ff:function ff(){},
fd:function fd(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
dw:function dw(){},
fh:function fh(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
q7(a,b){var s=b.c
return s==null?b.c=A.h1(a,"bu",[b.x]):s},
rH(a){var s=a.w
if(s===6||s===7)return A.rH(a.x)
return s===11||s===12},
wj(a){return a.as},
zu(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aw(a){return A.or(v.typeUniverse,a,!1)},
dV(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dV(a1,s,a3,a4)
if(r===s)return a2
return A.td(a1,r,!0)
case 7:s=a2.x
r=A.dV(a1,s,a3,a4)
if(r===s)return a2
return A.tc(a1,r,!0)
case 8:q=a2.y
p=A.eL(a1,q,a3,a4)
if(p===q)return a2
return A.h1(a1,a2.x,p)
case 9:o=a2.x
n=A.dV(a1,o,a3,a4)
m=a2.y
l=A.eL(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.qk(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eL(a1,j,a3,a4)
if(i===j)return a2
return A.te(a1,k,i)
case 11:h=a2.x
g=A.dV(a1,h,a3,a4)
f=a2.y
e=A.yC(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.tb(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eL(a1,d,a3,a4)
o=a2.x
n=A.dV(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ql(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.hp("Attempted to substitute unexpected RTI kind "+a0))}},
eL(a,b,c,d){var s,r,q,p,o=b.length,n=A.ow(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dV(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
yD(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ow(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dV(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
yC(a,b,c,d){var s,r=b.a,q=A.eL(a,r,c,d),p=b.b,o=A.eL(a,p,c,d),n=b.c,m=A.yD(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jp()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
qX(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.zf(s)
return a.$S()}return null},
zj(a,b){var s
if(A.rH(b))if(a instanceof A.cL){s=A.qX(a)
if(s!=null)return s}return A.br(a)},
br(a){if(a instanceof A.D)return A.o(a)
if(Array.isArray(a))return A.I(a)
return A.qz(J.dX(a))},
I(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.qz(a)},
qz(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.y3(a,s)},
y3(a,b){var s=a instanceof A.cL?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.x6(v.typeUniverse,s.name)
b.$ccache=r
return r},
zf(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.or(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
k6(a){return A.cl(A.o(a))},
qT(a){var s
if(a instanceof A.bQ)return a.eD()
s=a instanceof A.cL?A.qX(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dZ(a).a
if(Array.isArray(a))return A.I(a)
return A.br(a)},
cl(a){var s=a.r
return s==null?a.r=new A.jN(a):s},
zb(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.e(q,0)
s=A.h3(v.typeUniverse,A.qT(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.tf(v.typeUniverse,s,A.qT(q[r]))}return A.h3(v.typeUniverse,s,a)},
bU(a){return A.cl(A.or(v.typeUniverse,a,!1))},
y2(a){var s=this
s.b=A.yy(s)
return s.b(a)},
yy(a){var s,r,q,p,o
if(a===t.K)return A.yc
if(A.dY(a))return A.yg
s=a.w
if(s===6)return A.xZ
if(s===1)return A.tO
if(s===7)return A.y7
r=A.yx(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dY)){a.f="$i"+q
if(q==="E")return A.ya
if(a===t.m)return A.y9
return A.yf}}else if(s===10){p=A.z4(a.x,a.y)
o=p==null?A.tO:p
return o==null?A.eD(o):o}return A.xX},
yx(a){if(a.w===8){if(a===t.S)return A.aO
if(a===t.i||a===t.o)return A.yb
if(a===t.N)return A.ye
if(a===t.y)return A.bS}return null},
y1(a){var s=this,r=A.xW
if(A.dY(s))r=A.xA
else if(s===t.K)r=A.eD
else if(A.eO(s)){r=A.xY
if(s===t.aV)r=A.tx
else if(s===t.x)r=A.bq
else if(s===t.fU)r=A.xz
else if(s===t.jh)r=A.ty
else if(s===t.dC)r=A.tw
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.C
else if(s===t.y)r=A.an
else if(s===t.o)r=A.b6
else if(s===t.i)r=A.d6
else if(s===t.m)r=A.c
s.a=r
return s.a(a)},
xX(a){var s=this
if(a==null)return A.eO(s)
return A.zo(v.typeUniverse,A.zj(a,s),s)},
xZ(a){if(a==null)return!0
return this.x.b(a)},
yf(a){var s,r=this
if(a==null)return A.eO(r)
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.dX(a)[s]},
ya(a){var s,r=this
if(a==null)return A.eO(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.dX(a)[s]},
y9(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.D)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
tN(a){if(typeof a=="object"){if(a instanceof A.D)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
xW(a){var s=this
if(a==null){if(A.eO(s))return a}else if(s.b(a))return a
throw A.aq(A.tE(a,s),new Error())},
xY(a){var s=this
if(a==null||s.b(a))return a
throw A.aq(A.tE(a,s),new Error())},
tE(a,b){return new A.h_("TypeError: "+A.t3(a,A.bH(b,null)))},
t3(a,b){return A.hP(a)+": type '"+A.bH(A.qT(a),null)+"' is not a subtype of type '"+b+"'"},
bR(a,b){return new A.h_("TypeError: "+A.t3(a,b))},
y7(a){var s=this
return s.x.b(a)||A.q7(v.typeUniverse,s).b(a)},
yc(a){return a!=null},
eD(a){if(a!=null)return a
throw A.aq(A.bR(a,"Object"),new Error())},
yg(a){return!0},
xA(a){return a},
tO(a){return!1},
bS(a){return!0===a||!1===a},
an(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aq(A.bR(a,"bool"),new Error())},
xz(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aq(A.bR(a,"bool?"),new Error())},
d6(a){if(typeof a=="number")return a
throw A.aq(A.bR(a,"double"),new Error())},
tw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aq(A.bR(a,"double?"),new Error())},
aO(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aq(A.bR(a,"int"),new Error())},
tx(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aq(A.bR(a,"int?"),new Error())},
yb(a){return typeof a=="number"},
b6(a){if(typeof a=="number")return a
throw A.aq(A.bR(a,"num"),new Error())},
ty(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aq(A.bR(a,"num?"),new Error())},
ye(a){return typeof a=="string"},
C(a){if(typeof a=="string")return a
throw A.aq(A.bR(a,"String"),new Error())},
bq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aq(A.bR(a,"String?"),new Error())},
c(a){if(A.tN(a))return a
throw A.aq(A.bR(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.tN(a))return a
throw A.aq(A.bR(a,"JSObject?"),new Error())},
u0(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bH(a[q],b)
return s},
yn(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.u0(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bH(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
tH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.yF(a.x)
o=a.y
return o.length>0?p+("<"+A.u0(o,b)+">"):p}if(l===10)return A.yn(a,b)
if(l===11)return A.tH(a,b,null)
if(l===12)return A.tH(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
yF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
x7(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
x6(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.or(a,b,!1)
else if(typeof m=="number"){s=m
r=A.h2(a,5,"#")
q=A.ow(s)
for(p=0;p<s;++p)q[p]=r
o=A.h1(a,b,q)
n[b]=o
return o}else return m},
x5(a,b){return A.tn(a.tR,b)},
x4(a,b){return A.tn(a.eT,b)},
or(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.t8(A.t6(a,null,b,!1))
r.set(b,s)
return s},
h3(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.t8(A.t6(a,b,c,!0))
q.set(c,r)
return r},
tf(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.qk(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
d3(a,b){b.a=A.y1
b.b=A.y2
return b},
h2(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c0(null,null)
s.w=b
s.as=c
r=A.d3(a,s)
a.eC.set(c,r)
return r},
td(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.x2(a,b,r,c)
a.eC.set(r,s)
return s},
x2(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dY(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.eO(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.c0(null,null)
q.w=6
q.x=b
q.as=c
return A.d3(a,q)},
tc(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.x0(a,b,r,c)
a.eC.set(r,s)
return s},
x0(a,b,c,d){var s,r
if(d){s=b.w
if(A.dY(b)||b===t.K)return b
else if(s===1)return A.h1(a,"bu",[b])
else if(b===t.c||b===t.w)return t.gK}r=new A.c0(null,null)
r.w=7
r.x=b
r.as=c
return A.d3(a,r)},
x3(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c0(null,null)
s.w=13
s.x=b
s.as=q
r=A.d3(a,s)
a.eC.set(q,r)
return r},
h0(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
x_(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
h1(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.h0(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.c0(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.d3(a,r)
a.eC.set(p,q)
return q},
qk(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.h0(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.c0(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.d3(a,o)
a.eC.set(q,n)
return n},
te(a,b,c){var s,r,q="+"+(b+"("+A.h0(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.d3(a,s)
a.eC.set(q,r)
return r},
tb(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.h0(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.h0(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.x_(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.c0(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.d3(a,p)
a.eC.set(r,o)
return o},
ql(a,b,c,d){var s,r=b.as+("<"+A.h0(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.x1(a,b,c,r,d)
a.eC.set(r,s)
return s},
x1(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ow(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dV(a,b,r,0)
m=A.eL(a,c,r,0)
return A.ql(a,n,m,c!==m)}}l=new A.c0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.d3(a,l)},
t6(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
t8(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.wT(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.t7(a,r,l,k,!1)
else if(q===46)r=A.t7(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dS(a.u,a.e,k.pop()))
break
case 94:k.push(A.x3(a.u,k.pop()))
break
case 35:k.push(A.h2(a.u,5,"#"))
break
case 64:k.push(A.h2(a.u,2,"@"))
break
case 126:k.push(A.h2(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.wV(a,k)
break
case 38:A.wU(a,k)
break
case 63:p=a.u
k.push(A.td(p,A.dS(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.tc(p,A.dS(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.wS(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.t9(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.wX(a.u,a.e,o)
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
return A.dS(a.u,a.e,m)},
wT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
t7(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.x7(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.wj(o)+'"')
d.push(A.h3(s,o,n))}else d.push(p)
return m},
wV(a,b){var s,r=a.u,q=A.t5(a,b),p=b.pop()
if(typeof p=="string")b.push(A.h1(r,p,q))
else{s=A.dS(r,a.e,p)
switch(s.w){case 11:b.push(A.ql(r,s,q,a.n))
break
default:b.push(A.qk(r,s,q))
break}}},
wS(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.t5(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dS(p,a.e,o)
q=new A.jp()
q.a=s
q.b=n
q.c=m
b.push(A.tb(p,r,q))
return
case-4:b.push(A.te(p,b.pop(),s))
return
default:throw A.d(A.hp("Unexpected state under `()`: "+A.q(o)))}},
wU(a,b){var s=b.pop()
if(0===s){b.push(A.h2(a.u,1,"0&"))
return}if(1===s){b.push(A.h2(a.u,4,"1&"))
return}throw A.d(A.hp("Unexpected extended operation "+A.q(s)))},
t5(a,b){var s=b.splice(a.p)
A.t9(a.u,a.e,s)
a.p=b.pop()
return s},
dS(a,b,c){if(typeof c=="string")return A.h1(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.wW(a,b,c)}else return c},
t9(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dS(a,b,c[s])},
wX(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dS(a,b,c[s])},
wW(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.hp("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.hp("Bad index "+c+" for "+b.n(0)))},
zo(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.av(a,b,null,c,null)
r.set(c,s)}return s},
av(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dY(d))return!0
s=b.w
if(s===4)return!0
if(A.dY(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.av(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.av(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.av(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.av(a,b.x,c,d,e))return!1
return A.av(a,A.q7(a,b),c,d,e)}if(s===6)return A.av(a,p,c,d,e)&&A.av(a,b.x,c,d,e)
if(q===7){if(A.av(a,b,c,d.x,e))return!0
return A.av(a,b,c,A.q7(a,d),e)}if(q===6)return A.av(a,b,c,p,e)||A.av(a,b,c,d.x,e)
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
if(!A.av(a,j,c,i,e)||!A.av(a,i,e,j,c))return!1}return A.tM(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.tM(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.y8(a,b,c,d,e)}if(o&&q===10)return A.yd(a,b,c,d,e)
return!1},
tM(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
y8(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.h3(a,b,r[o])
return A.tu(a,p,null,c,d.y,e)}return A.tu(a,b.y,null,c,d.y,e)},
tu(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.av(a,b[s],d,e[s],f))return!1
return!0},
yd(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.av(a,r[s],c,q[s],e))return!1
return!0},
eO(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.dY(a))if(s!==6)r=s===7&&A.eO(a.x)
return r},
dY(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
tn(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ow(a){return a>0?new Array(a):v.typeUniverse.sEA},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jp:function jp(){this.c=this.b=this.a=null},
jN:function jN(a){this.a=a},
jn:function jn(){},
h_:function h_(a){this.a=a},
wM(){var s,r,q
if(self.scheduleImmediate!=null)return A.yT()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eN(new A.nX(s),1)).observe(r,{childList:true})
return new A.nW(s,r,q)}else if(self.setImmediate!=null)return A.yU()
return A.yV()},
wN(a){self.scheduleImmediate(A.eN(new A.nY(t.M.a(a)),0))},
wO(a){self.setImmediate(A.eN(new A.nZ(t.M.a(a)),0))},
wP(a){A.q9(B.cL,t.M.a(a))},
q9(a,b){return A.wZ(a.a/1000|0,b)},
wZ(a,b){var s=new A.op()
s.iX(a,b)
return s},
ba(a){return new A.jd(new A.ak($.ad,a.i("ak<0>")),a.i("jd<0>"))},
b9(a,b){a.$2(0,null)
b.b=!0
return b.a},
aa(a,b){A.xC(a,b)},
b8(a,b){b.d0(a)},
b7(a,b){b.d1(A.af(a),A.cm(a))},
xC(a,b){var s,r,q=new A.oD(b),p=new A.oE(b)
if(a instanceof A.ak)a.f6(q,p,t.z)
else{s=t.z
if(a instanceof A.ak)a.dW(q,p,s)
else{r=new A.ak($.ad,t.e)
r.a=8
r.c=a
r.f6(q,p,s)}}},
bc(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ad.hS(new A.pb(s),t.H,t.S,t.z)},
ta(a,b,c){return 0},
ko(a){var s
if(t.W.b(a)){s=a.gbl()
if(s!=null)return s}return B.a_},
pU(a){var s
a.a(null)
s=new A.ak($.ad,a.i("ak<0>"))
s.cG(null)
return s},
vC(a,b,c){var s=new A.ak($.ad,c.i("ak<0>"))
A.ws(a,new A.lo(b,s,c))
return s},
lp(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ak($.ad,b.i("ak<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.lr(i,h,g,f)
try{for(n=J.P(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.dW(new A.lq(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bU(A.f([],b.i("t<0>")))
return n}i.a=A.c7(n,null,!1,b.i("0?"))}catch(l){p=A.af(l)
o=A.cm(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.qA(m,k)
m=new A.aF(m,k==null?A.ko(m):k)
n.bQ(m)
return n}else{i.d=p
i.c=o}}return f},
qA(a,b){if($.ad===B.v)return null
return null},
y4(a,b){if($.ad!==B.v)A.qA(a,b)
if(b==null)if(t.W.b(a)){b=a.gbl()
if(b==null){A.rE(a,B.a_)
b=B.a_}}else b=B.a_
else if(t.W.b(a))A.rE(a,b)
return new A.aF(a,b)},
o5(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.e;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.wo()
b.bQ(new A.aF(new A.bX(!0,n,null,"Cannot complete a future with itself"),s))
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
A.dM(b,p)
return}b.a^=2
A.k3(null,null,b.b,t.M.a(new A.o6(o,b)))},
dM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.qL(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dM(d.a,c)
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
A.qL(j.a,j.b)
return}g=$.ad
if(g!==h)$.ad=h
else g=null
c=c.c
if((c&15)===8)new A.oa(q,d,n).$0()
else if(o){if((c&1)!==0)new A.o9(q,j).$0()}else if((c&2)!==0)new A.o8(d,q).$0()
if(g!=null)$.ad=g
c=q.c
if(c instanceof A.ak){p=q.a.$ti
p=p.i("bu<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.c_(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.o5(c,f,!0)
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
yo(a,b){var s
if(t.ng.b(a))return b.hS(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.ay(a,"onError",u.c))},
yj(){var s,r
for(s=$.eI;s!=null;s=$.eI){$.hf=null
r=s.b
$.eI=r
if(r==null)$.he=null
s.a.$0()}},
yA(){$.qB=!0
try{A.yj()}finally{$.hf=null
$.qB=!1
if($.eI!=null)$.r3().$1(A.u8())}},
u4(a){var s=new A.je(a),r=$.he
if(r==null){$.eI=$.he=s
if(!$.qB)$.r3().$1(A.u8())}else $.he=r.b=s},
yv(a){var s,r,q,p=$.eI
if(p==null){A.u4(a)
$.hf=$.he
return}s=new A.je(a)
r=$.hf
if(r==null){s.b=p
$.eI=$.hf=s}else{q=r.b
s.b=q
$.hf=r.b=s
if(q==null)$.he=s}},
zT(a,b){A.dW(a,"stream",t.K)
return new A.jL(b.i("jL<0>"))},
ws(a,b){var s=$.ad
if(s===B.v)return A.q9(a,t.M.a(b))
return A.q9(a,t.M.a(s.ff(b)))},
qL(a,b){A.yv(new A.p3(a,b))},
u_(a,b,c,d,e){var s,r=$.ad
if(r===c)return d.$0()
$.ad=c
s=r
try{r=d.$0()
return r}finally{$.ad=s}},
yt(a,b,c,d,e,f,g){var s,r=$.ad
if(r===c)return d.$1(e)
$.ad=c
s=r
try{r=d.$1(e)
return r}finally{$.ad=s}},
ys(a,b,c,d,e,f,g,h,i){var s,r=$.ad
if(r===c)return d.$2(e,f)
$.ad=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ad=s}},
k3(a,b,c,d){t.M.a(d)
if(B.v!==c){d=c.ff(d)
d=d}A.u4(d)},
nX:function nX(a){this.a=a},
nW:function nW(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function nY(a){this.a=a},
nZ:function nZ(a){this.a=a},
op:function op(){},
oq:function oq(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=!1
this.$ti=b},
oD:function oD(a){this.a=a},
oE:function oE(a){this.a=a},
pb:function pb(a){this.a=a},
bE:function bE(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
ci:function ci(a,b){this.a=a
this.$ti=b},
aF:function aF(a,b){this.a=a
this.b=b},
lo:function lo(a,b,c){this.a=a
this.b=b
this.c=c},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lq:function lq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jh:function jh(){},
fF:function fF(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b,c,d,e){var _=this
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
o2:function o2(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
o6:function o6(a,b){this.a=a
this.b=b},
o4:function o4(a,b){this.a=a
this.b=b},
o3:function o3(a,b){this.a=a
this.b=b},
oa:function oa(a,b,c){this.a=a
this.b=b
this.c=c},
ob:function ob(a,b){this.a=a
this.b=b},
oc:function oc(a){this.a=a},
o9:function o9(a,b){this.a=a
this.b=b},
o8:function o8(a,b){this.a=a
this.b=b},
je:function je(a){this.a=a
this.b=null},
jL:function jL(a){this.$ti=a},
ha:function ha(){},
jD:function jD(){},
on:function on(a,b){this.a=a
this.b=b},
p3:function p3(a,b){this.a=a
this.b=b},
t4(a,b){var s=a[b]
return s===a?null:s},
qi(a,b,c){if(c==null)a[b]=a
else a[b]=c},
qh(){var s=Object.create(null)
A.qi(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
rw(a,b){return new A.bK(a.i("@<0>").E(b).i("bK<1,2>"))},
V(a,b,c){return b.i("@<0>").E(c).i("pY<1,2>").a(A.ua(a,new A.bK(b.i("@<0>").E(c).i("bK<1,2>"))))},
w(a,b){return new A.bK(a.i("@<0>").E(b).i("bK<1,2>"))},
pZ(a){return new A.bP(a.i("bP<0>"))},
a8(a){return new A.bP(a.i("bP<0>"))},
at(a,b){return b.i("rx<0>").a(A.zc(a,new A.bP(b.i("bP<0>"))))},
qj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jv(a,b,c){var s=new A.dR(a,b,c.i("dR<0>"))
s.c=a.e
return s},
eg(a,b){var s=J.P(a.a)
if(new A.J(s,a.b,a.$ti.i("J<1>")).m())return s.gp()
return null},
b1(a,b,c){var s=A.rw(b,c)
a.ai(0,new A.mk(s,b,c))
return s},
ml(a,b){var s,r,q=A.pZ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.k(0,b.a(a[r]))
return q},
q_(a,b){var s=A.pZ(b)
s.J(0,a)
return s},
vV(a,b){var s=t.bP
return J.r5(s.a(a),s.a(b))},
q0(a){var s,r
if(A.r_(a))return"{...}"
s=new A.aX("")
try{r={}
B.a.k($.bI,a)
s.a+="{"
r.a=!0
a.ai(0,new A.mn(r,s))
s.a+="}"}finally{if(0>=$.bI.length)return A.e($.bI,-1)
$.bI.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
x8(){throw A.d(A.aA("Cannot change an unmodifiable set"))},
fM:function fM(){},
od:function od(a){this.a=a},
fO:function fO(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dN:function dN(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bP:function bP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ju:function ju(a){this.a=a
this.c=this.b=null},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
mk:function mk(a,b,c){this.a=a
this.b=b
this.c=c},
M:function M(){},
Z:function Z(){},
mm:function mm(a){this.a=a},
mn:function mn(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
h4:function h4(){},
ej:function ej(){},
cY:function cY(a,b){this.a=a
this.$ti=b},
cx:function cx(){},
fY:function fY(){},
jO:function jO(){},
fz:function fz(a,b){this.a=a
this.$ti=b},
eA:function eA(){},
h5:function h5(){},
yl(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.af(r)
q=A.ag(String(s),null,null)
throw A.d(q)}q=A.oF(p)
return q},
oF(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.js(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.oF(a[s])
return a},
xp(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.uH()
else s=new Uint8Array(o)
for(r=J.ax(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
xo(a,b,c,d){var s=a?$.uG():$.uF()
if(s==null)return null
if(0===c&&d===b.length)return A.tm(s,b)
return A.tm(s,b.subarray(c,d))},
tm(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
r7(a,b,c,d,e,f){if(B.c.W(f,4)!==0)throw A.d(A.ag("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.ag("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.ag("Invalid base64 padding, more than two '=' characters",a,b))},
rt(a,b,c){return new A.fa(a,b)},
xL(a){return a.D()},
wQ(a,b){return new A.og(a,[],A.z3())},
wR(a,b,c){var s,r=new A.aX(""),q=A.wQ(r,b)
q.cs(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
xq(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
js:function js(a,b){this.a=a
this.b=b
this.c=null},
of:function of(a){this.a=a},
jt:function jt(a){this.a=a},
ov:function ov(){},
ou:function ou(){},
hs:function hs(){},
kN:function kN(){},
df:function df(){},
hE:function hE(){},
hO:function hO(){},
fa:function fa(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ig:function ig(){},
md:function md(a){this.b=a},
mc:function mc(a){this.a=a},
oh:function oh(){},
oi:function oi(a,b){this.a=a
this.b=b},
og:function og(a,b,c){this.c=a
this.a=b
this.b=c},
j1:function j1(){},
nH:function nH(a){this.a=a},
ot:function ot(a){this.a=a
this.b=16
this.c=0},
zk(a){var s=A.mI(a,null)
if(s!=null)return s
throw A.d(A.ag(a,null,null))},
vx(a,b){a=A.aq(a,new Error())
if(a==null)a=A.eD(a)
a.stack=b.n(0)
throw a},
c7(a,b,c,d){var s,r=c?J.ro(a,d):J.rn(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
az(a,b,c){var s,r=A.f([],c.i("t<0>"))
for(s=J.P(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.f(a.slice(0),b.i("t<0>"))
s=A.f([],b.i("t<0>"))
for(r=J.P(a);r.m();)B.a.k(s,r.gp())
return s},
ao(a,b){var s=A.az(a,!1,b)
s.$flags=3
return s},
rN(a,b,c){var s,r
A.iF(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aV(c,b,null,"end",null))
if(s===0)return""}r=A.wq(a,b,c)
return r},
wq(a,b,c){var s=a.length
if(b>=s)return""
return A.wd(a,b,c==null||c>s?s:c)},
rM(a,b,c){var s=J.P(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
j0(){var s,r,q=A.w2()
if(q==null)throw A.d(A.aA("'Uri.base' is not supported"))
s=$.rT
if(s!=null&&q===$.rS)return s
r=A.wy(q)
$.rT=r
$.rS=q
return r},
wo(){return A.cm(new Error())},
vd(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
rd(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hG(a){if(a>=10)return""+a
return"0"+a},
vw(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.ay(b,"name","No enum value with that name"))},
hP(a){if(typeof a=="number"||A.bS(a)||a==null)return J.e0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.rD(a)},
vy(a,b){A.dW(a,"error",t.K)
A.dW(b,"stackTrace",t.l)
A.vx(a,b)},
hp(a){return new A.ho(a)},
y(a,b){return new A.bX(!1,null,b,a)},
ay(a,b,c){return new A.bX(!0,a,b,c)},
rF(a){var s=null
return new A.em(s,s,!1,s,s,a)},
rG(a,b){return new A.em(null,null,!0,a,b,"Value not in range")},
aV(a,b,c,d,e){return new A.em(b,c,!0,a,d,"Invalid value")},
fn(a,b,c){if(0>a||a>c)throw A.d(A.aV(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aV(b,a,c,"end",null))
return b}return c},
iF(a,b){if(a<0)throw A.d(A.aV(a,0,null,b,null))
return a},
lY(a,b,c,d){return new A.i5(b,!0,a,d,"Index out of range")},
aA(a){return new A.fA(a)},
rQ(a){return new A.iW(a)},
l(a){return new A.eq(a)},
ar(a){return new A.hC(a)},
ec(a){return new A.o1(a)},
ag(a,b,c){return new A.K(a,b,c)},
vO(a,b,c){var s,r
if(A.r_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.a.k($.bI,a)
try{A.yh(a,s)}finally{if(0>=$.bI.length)return A.e($.bI,-1)
$.bI.pop()}r=A.rM(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pV(a,b,c){var s,r
if(A.r_(a))return b+"..."+c
s=new A.aX(b)
B.a.k($.bI,a)
try{r=s
r.a=A.rM(r.a,a,", ")}finally{if(0>=$.bI.length)return A.e($.bI,-1)
$.bI.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
yh(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
cv(a,b,c,d){var s
if(B.l===c){s=J.bs(a)
b=J.bs(b)
return A.nv(A.cy(A.cy($.k9(),s),b))}if(B.l===d){s=J.bs(a)
b=J.bs(b)
c=J.bs(c)
return A.nv(A.cy(A.cy(A.cy($.k9(),s),b),c))}s=J.bs(a)
b=J.bs(b)
c=J.bs(c)
d=J.bs(d)
d=A.nv(A.cy(A.cy(A.cy(A.cy($.k9(),s),b),c),d))
return d},
w0(a){var s,r,q=$.k9()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q=A.cy(q,J.bs(a[r]))
return A.nv(q)},
q8(a,b){return new A.fz(A.q_(a,b),b.i("fz<0>"))},
wy(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.rR(a4<a4?B.b.C(a5,0,a4):a5,5,a3).gi0()
else if(s===32)return A.rR(B.b.C(a5,5,a4),0,a3).gi0()}r=A.c7(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.u3(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.u3(a5,0,q,20,r)===20)r[7]=q
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
n=e}j="https"}k=!h}}}}if(k)return new A.jG(a4<a5.length?B.b.C(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.xi(a5,0,q)
else{if(q===0)A.eB(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.xj(a5,c,p-1):""
a=A.xe(a5,p,o,!1)
i=o+1
if(i<n){a0=A.mI(B.b.C(a5,i,n),a3)
d=A.xg(a0==null?A.k(A.ag("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.xf(a5,n,m,a3,j,a!=null)
a2=m<l?A.xh(a5,m+1,l,a3):a3
return A.x9(j,b,a,d,a1,a2,l<a4?A.xd(a5,l+1,a4):a3)},
rV(a){var s=t.N
return B.a.bE(A.f(a.split("&"),t.s),A.w(s,s),new A.nG(B.aW),t.G)},
j_(a,b,c){throw A.d(A.ag("Illegal IPv4 address, "+a,b,c))},
wv(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.j_("each part must be in the range 0..255",a,r)}A.j_("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.j_(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bd(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.j_(j,a,q)
p=l}A.j_("IPv4 address should contain exactly 4 parts",a,q)},
ww(a,b,c){var s
if(b===c)throw A.d(A.ag("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.wx(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.rU(a,b,c)
return!0},
wx(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.K(n,a,q)
r=q
break}return new A.K("Unexpected character",a,q-1)}if(r-1===b)return new A.K(n,a,r)
return new A.K("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.K("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.e(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.K("Invalid IPvFuture address character",a,r)}},
rU(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.nF(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.wv(a3,m,a5,s,p*2)
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
B.bz.io(s,a0,16,s,a)
B.bz.l1(s,a,a0,0)}}return s},
x9(a,b,c,d,e,f,g){return new A.h6(a,b,c,d,e,f,g)},
tg(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
eB(a,b,c){throw A.d(A.ag(c,a,b))},
xg(a,b){var s=A.tg(b)
if(a===s)return null
return a},
xe(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.eB(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.xb(a,q,r)
if(o<r){n=o+1
p=A.tl(a,B.b.a2(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.ww(a,q,o)
l=B.b.C(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.b.cj(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.tl(a,B.b.a2(a,"25",n)?o+3:n,c,"%25")}else p=""
A.rU(a,b,o)
return"["+B.b.C(a,b,o)+p+"]"}}return A.xl(a,b,c)},
xb(a,b,c){var s=B.b.cj(a,"%",b)
return s>=b&&s<c?s:c},
tl(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aX(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.qn(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aX("")
l=h.a+=B.b.C(a,q,r)
if(m)n=B.b.C(a,r,r+3)
else if(n==="%")A.eB(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aX("")
if(q<r){h.a+=B.b.C(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.C(a,q,r)
if(h==null){h=new A.aX("")
m=h}else m=h
m.a+=i
l=A.qm(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.C(a,b,c)
if(q<c){i=B.b.C(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
xl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.qn(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aX("")
k=B.b.C(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.C(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aX("")
if(q<r){p.a+=B.b.C(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.eB(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.C(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aX("")
l=p}else l=p
l.a+=k
j=A.qm(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.C(a,b,c)
if(q<c){k=B.b.C(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
xi(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.ti(a.charCodeAt(b)))A.eB(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.eB(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.C(a,b,c)
return A.xa(q?a.toLowerCase():a)},
xa(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
xj(a,b,c){return A.h7(a,b,c,16,!1,!1)},
xf(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.h7(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.Z(q,"/"))q="/"+q
return A.xk(q,e,f)},
xk(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.Z(a,"/")&&!B.b.Z(a,"\\"))return A.xm(a,!s||c)
return A.xn(a)},
xh(a,b,c,d){return A.h7(a,b,c,256,!0,!1)},
xd(a,b,c){return A.h7(a,b,c,256,!0,!1)},
qn(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.pj(r)
o=A.pj(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aj(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.C(a,b,b+3).toUpperCase()
return null},
qm(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
o+=3}}return A.rN(s,0,null)},
h7(a,b,c,d,e,f){var s=A.tk(a,b,c,d,e,f)
return s==null?B.b.C(a,b,c):s},
tk(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.qn(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.eB(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.qm(n)}if(o==null){o=new A.aX("")
k=o}else k=o
k.a=(k.a+=B.b.C(a,p,q))+l
if(typeof m!=="number")return A.k7(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.C(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
tj(a){if(B.b.Z(a,"."))return!0
return B.b.ci(a,"/.")!==-1},
xn(a){var s,r,q,p,o,n,m
if(!A.tj(a))return a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.b2(s,"/")},
xm(a,b){var s,r,q,p,o,n
if(!A.tj(a))return!b?A.th(a):a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gN(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.a.l(s,0,A.th(s[0]))}return B.a.b2(s,"/")},
th(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.ti(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.C(a,0,s)+"%3A"+B.b.bP(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
xc(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.y("Invalid URL encoding",null))}}return r},
qo(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aW===d)return B.b.C(a,b,c)
else p=new A.de(B.b.C(a,b,c))
else{p=A.f([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.y("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.y("Truncated URI",null))
B.a.k(p,A.xc(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.L.a(p)
return B.hs.kG(p)},
ti(a){var s=a|32
return 97<=s&&s<=122},
rR(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.f([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.ag(k,a,r))}}if(q<0&&r>b)throw A.d(A.ag(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gN(j)
if(p!==44||r!==n+7||!B.b.a2(a,"base64",n+1))throw A.d(A.ag("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.co.lp(a,m,s)
else{l=A.tk(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bh(a,m,s,l)}return new A.nE(a,j,c)},
u3(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.e(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.a=a},
jm:function jm(){},
a9:function a9(){},
ho:function ho(a){this.a=a},
cz:function cz(){},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
em:function em(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
i5:function i5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fA:function fA(a){this.a=a},
iW:function iW(a){this.a=a},
eq:function eq(a){this.a=a},
hC:function hC(a){this.a=a},
iv:function iv(){},
fv:function fv(){},
o1:function o1(a){this.a=a},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(){},
D:function D(){},
jM:function jM(){},
nq:function nq(){this.b=this.a=0},
aX:function aX(a){this.a=a},
nG:function nG(a){this.a=a},
nF:function nF(a){this.a=a},
h6:function h6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
ji:function ji(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mu:function mu(a){this.a=a},
a4(a){var s
if(typeof a=="function")throw A.d(A.y("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jV,a)
s[$.eP()]=a
return s},
jV(a,b,c){t.gY.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
qY(a,b,c){return c.a(a[b])},
tI(a,b){return a[b]},
aQ(a,b,c,d){return d.a(a[b].apply(a,c))},
tB(a,b,c,d){return d.a(a[b](c))},
aE(a,b){var s=new A.ak($.ad,b.i("ak<0>")),r=new A.fF(s,b.i("fF<0>"))
a.then(A.eN(new A.pK(r,b),1),A.eN(new A.pL(r),1))
return s},
tS(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cK(a){if(A.tS(a))return a
return new A.pe(new A.fO(t.mp)).$1(a)},
pK:function pK(a,b){this.a=a
this.b=b},
pL:function pL(a){this.a=a},
pe:function pe(a){this.a=a},
jr:function jr(){},
eu:function eu(){this.b=this.a=0},
mN:function mN(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mO:function mO(){},
dz:function dz(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
kT:function kT(a,b){this.a=a
this.b=b},
kU:function kU(){this.a=null
this.d=0},
iA:function iA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
e6:function e6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hU:function hU(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
lj:function lj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dn(a,b){return new A.lz(a,b)},
cw:function cw(){},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a,b){this.a=a
this.b=b},
lz:function lz(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
l_:function l_(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
dF:function dF(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
rA(a,b,c,d,e,f,g,h,i){return new A.c8(c,a,g,f,e,h,i,b,!0)},
hn:function hn(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h
_.ax=i},
cB:function cB(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
nI:function nI(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mx(a){var s,r=t.N,q=A.at(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.J(0,A.at(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.J(0,A.at(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.J(0,A.at(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.J(0,A.at(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.k(0,"gradeOutput")
if(p.v(0,"ps1"))q.k(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.mw(A.q8(q,r),s)},
mw:function mw(a,b){this.a=a
this.b=b},
my:function my(){},
mF:function mF(a){this.b=a},
iI:function iI(){this.a=null
this.c=0
this.d=!1},
e9:function e9(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j){var _=this
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
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hB:function hB(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dB:function dB(a,b){this.a=a
this.b=b},
ll:function ll(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
vW(){return new A.il(new A.cb(new A.mp(),A.f([],t.dz),A.f([],t.t),t.kk))},
il:function il(a){this.a=a},
mp:function mp(){},
u5(a){var s=4
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
case 3:s=A.k(A.aA("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
xJ(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.ar[r]
if(A.u5(q.a)===b)s+=q.c}return s},
vX(a){return new A.mr(a,new A.cb(new A.ms(),A.f([],t.jk),A.f([],t.t),t.ll),A.w(t.S,t.mL))},
iY:function iY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mr:function mr(a,b,c){this.a=a
this.b=b
this.c=c},
ms:function ms(){},
mt:function mt(){},
wr(a){var s=new A.iU(a,new A.cb(new A.nz(),A.f([],t.mQ),A.f([],t.t),t.ox),A.w(t.S,t._))
s.d=s.ev()
return s},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
nz:function nz(){},
nB:function nB(){},
nA:function nA(){},
yW(a){var s,r,q,p,o=A.f([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.p)(a),++q){p=a[q]
B.a.k(o,new A.dq(p,A.f([p],r)))
continue}return o},
dq:function dq(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
lf:function lf(){},
lg:function lg(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
hT:function hT(a,b){this.a=a
this.b=b},
ed:function ed(a,b){this.a=a
this.b=b},
lk:function lk(a,b){this.a=a
this.b=b
this.c=0},
q2(){return!0},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
mA:function mA(){},
mB:function mB(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
en:function en(a,b){this.a=a
this.b=b},
S:function S(a,b){this.a=a
this.b=b},
eU:function eU(a){this.b=a},
mL:function mL(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aU:function aU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mP:function mP(){},
aT:function aT(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
mR:function mR(a,b){this.a=a
this.b=b},
mV:function mV(){},
mU:function mU(){},
mT:function mT(a){this.a=a},
mS:function mS(a,b,c){this.a=a
this.b=b
this.c=c},
mQ:function mQ(a,b){this.a=a
this.b=b},
wh(a){return new A.fo(a,new A.cb(new A.mX(),A.f([],t.n_),A.f([],t.t),t.mo))},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a,b){this.a=a
this.b=b},
mX:function mX(){},
tF(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.xQ(a,r,s,a.x.gp().a.b.a).b},
xQ(a,b,c,d){var s,r,q,p,o=new A.oU(a),n=new A.oV(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.z_(b,l,m,s.c.glO(),new A.oG(n),new A.oH(n),new A.oI(a),new A.oM(a),new A.oN(n),new A.oO(n),new A.oP(a),r.glQ(),o,new A.oQ(n),new A.oR(n),new A.oS(n),new A.oT(n),new A.oJ(n),new A.oK(a),new A.oL(n),c.c,c.b)}else q=new A.hS(A.f([new A.jb(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.fl(b,u.l,u.q,l,B.V)],t.o5))
a.r.toString
p=q.ku(B.F,new A.mP(),!1,new A.jA())
o=p.a.b
if(o.length!==0)throw A.d(A.l("safe renderer graph is invalid: "+A.q(o)))
return new A.oo(q,p)},
xR(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.d(A.l("renderer graph is not initialized"))
s=a4.gdL()
r=a5.a
q=A.z5(A.vB(r.c),s,-1).a
p=A.f([],t.mX)
o=A.f([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.d,k=0;k<q.length;q.length===s||(0,A.p)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.al)B.a.k(o,new A.au(new A.bf(m.hY(i.c.a).c,h),j,l))
else B.a.k(p,new A.au(new A.bi(B.fp,i.b,i.a,h),j,n))}g=new A.jo(A.yW(A.zA(p)),A.zz(o),r,a5.b,a5.c)
f=new A.hJ(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.p)(s),++k){e=s[k]
d=A.w(n,m)
for(l=e.ga0().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.p)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
a0=a.b.h(0,b)
if(a0==null)A.k(A.l("resource is not in candidate: "+b))
d.l(0,b,new A.hx(a0))}e.ag(new A.hw(d,f,g))}},
rK(a){return new A.nb(a,new A.kT(new A.kU(),new A.iI()),new A.lk(A.f([],t.c8),B.dC),A.f([],t.oZ),B.aw)},
oU:function oU(a){this.a=a},
oV:function oV(a,b){this.a=a
this.b=b},
oS:function oS(a){this.a=a},
oM:function oM(a){this.a=a},
oR:function oR(a){this.a=a},
oI:function oI(a){this.a=a},
oJ:function oJ(a){this.a=a},
oT:function oT(a){this.a=a},
oQ:function oQ(a){this.a=a},
oG:function oG(a){this.a=a},
oH:function oH(a){this.a=a},
oN:function oN(a){this.a=a},
oO:function oO(a){this.a=a},
oP:function oP(a){this.a=a},
oL:function oL(a){this.a=a},
oK:function oK(a){this.a=a},
oo:function oo(a,b){this.a=a
this.b=b},
jA:function jA(){},
jo:function jo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n5:function n5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
nb:function nb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
nc:function nc(){},
zA(a){var s,r,q=A.N(a,t.p)
B.a.Y(q,new A.pP())
s=A.I(q)
r=s.i("O<1,by>")
s=A.N(new A.O(q,s.i("by(1)").a(new A.pQ()),r),r.i("a6.E"))
s.$flags=1
return s},
zz(a){var s,r,q=A.N(a,t.d)
B.a.Y(q,new A.pN())
s=A.I(q)
r=s.i("O<1,by>")
s=A.N(new A.O(q,s.i("by(1)").a(new A.pO()),r),r.i("a6.E"))
s.$flags=1
return s},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b){this.a=a
this.b=b},
au:function au(a,b,c){this.a=a
this.b=b
this.$ti=c},
pP:function pP(){},
pQ:function pQ(){},
pN:function pN(){},
pO:function pO(){},
z5(a,b,c){var s,r,q,p,o,n,m,l=A.f([],t.bH)
for(s=b.$ti,r=new A.bE(b.a(),s.i("bE<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.d(A.y("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.lY(n)===B.b7){++p
continue}B.a.k(l,o)}return new A.kW(l)},
kW:function kW(a){this.a=a},
be(a){var s,r,q,p,o,n,m,l,k
for(s=J.P(a),r=B.hv,q=B.hw,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.A(m,k,Math.min(r.c,o))
q=new A.A(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.y("Aabb.fromPoints requires at least one point",null))
return new A.hl(r,q)},
hl:function hl(a,b){this.a=a
this.b=b},
vB(a){var s,r,q,p,o,n,m=a.a,l=new A.ln(),k=m.length
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
return new A.lm(A.f([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
dx:function dx(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
lm:function lm(a){this.a=a},
ln:function ln(){},
ry(a){if(a.length!==16)throw A.d(A.y("Mat4.fromColumnMajor requires 16 values",null))
return new A.cu(new Float32Array(A.Y(a)))},
q1(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cu(q)},
rz(a,b,c){var s=b.ga4(),r=s.aY(c).ga4(),q=r.aY(s),p=new Float32Array(16)
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
return new A.cu(p)},
cu:function cu(a){this.a=a},
mo:function mo(){},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
jf:function jf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hv:function hv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hI:function hI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jj:function jj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fJ:function fJ(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c,d,e,f,g,h,i,j){var _=this
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
jk:function jk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hM:function hM(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
jl:function jl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
i1:function i1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
jq:function jq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hx:function hx(a){this.b=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rL(a){var s=a.c,r=Math.abs(s.a)<0.99?B.hu:B.K,q=A.rz(a.b,s,r)
return new A.dE(A.q1(1,a.f,B.d.K(a.w*2,0.1,3),0.05).X(0,q))},
dE:function dE(a){this.a=a},
iL:function iL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jE:function jE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
z_(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.d(A.ay(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.rL(B.hd)
c=t.o5
l=A.f([],c)
if(r){B.a.J(l,A.f([new A.eS(a,j,i,b,h,h,B.ch,!0,B.V,B.bN,b1),new A.eS(a,j,i,b,g,g,B.i7,!1,B.bN,B.bO,a2),new A.hv(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.pR()}else k=B.V
if(q){B.a.J(l,A.f([new A.eX(a,j,i,b,f,f,B.ci,k,B.bG,b1),new A.eX(a,j,i,b,e,e,B.i8,B.bG,B.bH,a6),new A.hM(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bI}if(p){B.a.k(l,new A.i1(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bM}if(o){B.a.k(l,new A.iD(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bP}if(n){B.a.k(l,new A.j3(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.ay}c=A.f([new A.hI(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.iP(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.iO(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.iL(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.pc(d)))
c.push(new A.iM(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+direct,0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.pd(d,m),a5,b4,s,b9,b8))
B.a.J(c,l)
c.push(new A.fl(a,j,u.q,b,k))
return new A.hS(c)},
pc:function pc(a){this.a=a},
pd:function pd(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jF:function jF(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jJ:function jJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iO:function iO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jI:function jI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jP:function jP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(){},
iK(a,b){return new A.fu(a,b)},
hY:function hY(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dm:function dm(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f2:function f2(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
z:function z(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a},
iB:function iB(a,b){this.a=a
this.b=b},
ly:function ly(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
ey:function ey(a,b){this.a=a
this.b=b},
d2:function d2(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
rf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.ea(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
ht:function ht(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aL:function aL(a,b){this.a=a
this.b=b},
nT:function nT(){this.a=null},
wD(a){var s=new A.ja(a,B.f,new A.nT())
s.iW(a)
return s},
bD(a,b){var s,r
if(a.b!==B.f)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
wJ(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
switch(b){case 1:a.a.drawBuffers(A.f([A.a(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.y("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
wI(a,b,c){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.l("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
wH(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
wG(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
rY(a,b){var s
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
wE(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
aY(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.f
r=s.kM(b)
if(r.a===0)return
if(r.v(0,B.aD)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aE))a.a.depthFunc(A.wH(a,b.b))
if(r.v(0,B.aF))a.a.depthMask(b.c)
if(r.v(0,B.aJ)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aK))a.a.cullFace(A.wG(a,b.x))
if(r.v(0,B.cb)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aG)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aH))a.a.blendFunc(A.rY(a,b.e),A.rY(a,b.f))
if(r.v(0,B.aI))a.a.blendEquation(A.wE(a,b.r))
if(r.v(0,B.c9))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.ca)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
wF(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
cE(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.wF(a,b))},
bO(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.c(b.a)
a.a.useProgram(s)
a.e=s},
x(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.d(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.d6(c.b))
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
b4(a,b){if(a.b!==B.f)A.k(A.l(u.k))
a.a.bindVertexArray(A.c(b.a))},
aB(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.h9){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.h8){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
c1(a,b,c){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
qb(a,b,c,d){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
qc(a,b,c){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
qd(a,b,c,d){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
A.aQ(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
wK(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
t0(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.d(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b8?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.wK(a,b.b))
return new A.d4(r)},
rZ(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
t_(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
qe(a,b){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
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
if(p)A.aQ(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aQ(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.rZ(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.rZ(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.t_(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.t_(a,p))
return new A.d4(new A.h9(r,l,k,q,!1))},
qf(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.l(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.d(A.y("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.d(A.y("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aQ(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aQ(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
qg(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
ch(a){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.d(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.d4(s)},
t1(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.d(A.iK(b===A.qY(A.tI(A.un(),r),q,t.S)?B.c4:B.c5,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ab(A.cK(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bq(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.iK(b===A.qY(A.tI(A.un(),r),q,t.S)?B.c4:B.c5,s))}return o},
wL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.l(u.k))
q=v.G
s=A.t1(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.t1(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.h8)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ab(A.cK(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bq(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.iK(B.c6,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.p)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.iK(B.c7,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.iK(B.c7,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.d4(n)},
d4:function d4(a){this.a=a},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h8:function h8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ja:function ja(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
nR:function nR(a){this.a=a},
nS:function nS(a){this.a=a},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kz(a,a0){var s=0,r=A.ba(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$kz=A.bc(function(a1,a2){if(a1===1)return A.b7(a2,r)
for(;;)switch(s){case 0:p=A.c(new v.G.AudioContext())
o=t.m
n=A.w(t.N,o)
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
b=new A.hq(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aX,A.w(o,t.h6))
b.iI(p,a0)
p=A.o(a).i("U<1,2>")
s=3
return A.aa(A.lp(A.ij(new A.U(a,p),p.i("bu<al>(n.E)").a(new A.kA(b)),p.i("n.E"),t.mj),t.c),$async$kz)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.ju():n
c.buffer=p
q=b
s=1
break
case 1:return A.b8(q,r)}})
return A.b9($async$kz,r)},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
kA:function kA(a){this.a=a},
kC:function kC(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v0(a,b,c,d,e,f,g){var s=new A.kt(c,f,b,g,new A.b(d.a,d.b,d.c),e,a)
s.iK(a,b,c,d,0,e,f,g)
return s},
uX(a,b){var s=new A.kd(b)
s.iH(a,b)
return s},
v_(a){var s,r,q,p,o,n=t.z
n=A.w(n,n)
for(s=new A.U(a,A.o(a).i("U<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.az(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.kp(A.cn(n,r,t.a))
n.iJ(a)
return n},
yz(a,b){var s,r,q,p=b>>>0
for(s=new A.de(a),r=t.gS,s=new A.bx(s,s.gq(0),r.i("bx<M.E>")),r=r.i("M.E");s.m();){q=s.d
p=A.ue(p,q==null?r.a(q):q)}return p&2147483647},
hr:function hr(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ku:function ku(){},
kd:function kd(a){this.a=a},
ke:function ke(){},
eR:function eR(){},
kf:function kf(){},
kp:function kp(a){this.a=a},
kr:function kr(){},
ks:function ks(){},
kq:function kq(){},
pT:function pT(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
kx:function kx(){},
fE:function fE(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
li:function li(a){this.a=a},
iS:function iS(a,b,c,d,e,f,g,h,i,j){var _=this
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
lw:function lw(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
lx:function lx(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=0
this.$ti=b},
i6:function i6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1
_.w=!0},
ik:function ik(a){this.a=a},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mq:function mq(a,b){this.a=a
this.b=b},
fw(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bd(a)
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
ce:function ce(a){this.a=a
this.b=0},
mW:function mW(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
n4:function n4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wi(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.rI(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.ib(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.jy(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.c7(800,0,!1,r)
p=new Float32Array(8064)
o=J.ib(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.jw(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.c7(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).ga4()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.mY(a,new A.lw(a,A.w(t.m,r)),b,c,A.a8(t.N),j,i,h,g,q,p,A.w(r,t.hX),o,n,m,B.ez,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.ik(l),a,A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k))
k.iR(a,b,c)
return k},
mY:function mY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
_.kV=1
_.de=f
_.df=g
_.kW=h
_.fR=i
_.ce=0
_.fS=j
_.kX=k
_.dg=0
_.dh=l
_.kY=1
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
_.ha=_.dv=_.du=_.h9=_.h8=_.l0=_.l_=_.kZ=_.h7=_.h6=_.h5=_.h4=_.h3=_.h2=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.hb=a7
_.hc=a8
_.hd=a9
_.he=b0},
tU(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.ad(0,c).aY(f.ad(0,c)).ga4(),r=A.p6(g)
return A.tX(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
hi(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bd(a)
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
tX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.hi(a,A.hi(a,A.hi(a,A.hi(a,A.hi(a,A.hi(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
p6(a){return new A.a_((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
y_(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aI(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.ae(),i=A.ae(),h=A.ae()
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
return new A.a_(s,r,B.d.aD(q*255))},
fL:function fL(){},
jK:function jK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
jy:function jy(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jw:function jw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mZ:function mZ(){},
n_:function n_(a){this.a=a},
n0:function n0(a){this.a=a},
nV:function nV(){},
nl:function nl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
j2(a,b,c){return new A.b(a,b,c)},
rW(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a){this.a=a},
vh(a,b,c){var s=new A.hN(a,c,null,b)
s.iM(a,null,null,b,c)
return s},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
vu(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.eg(new A.Q(B.eL,t.gl.a(new A.l9(a)),t.ns),t.no)
return s==null?null:new A.eb(s)},
vt(a){if(a.a!==21)return null
if(a.e)return B.cO
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cP
return B.cN},
bJ:function bJ(a,b){this.a=a
this.b=b},
l6:function l6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eb:function eb(a){this.a=a},
l9:function l9(a){this.a=a},
w1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.iy(s,new A.b(o,n,m),q,p,l,j)
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
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yB(a){var s,r,q,p=A.w(t.N,t.z)
for(s=a.gO(),s=s.gu(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.d(B.d1)
p.l(0,q,r.b)}return p},
jW(a){var s,r,q,p,o,n=a.gS().bi(0)
B.a.a1(n)
s=t.z
r=A.w(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.p)(n),++p){o=n[p]
r.l(0,o,A.tD(a.h(0,o)))}return A.cn(r,t.N,s)},
tD(a){var s
if(t.f.b(a))return A.jW(A.yB(a))
if(t.j.b(a)){s=t.z
return A.ao(J.e_(a,A.zw(),s),s)}if(a==null||A.bS(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.dp)
return a}throw A.d(A.ag("presentation snapshot contains unsupported value "+J.dZ(a).n(0),null,null))},
mG:function mG(a){this.a=a},
rJ(a,b,c){var s=A.qt(b),r=A.qt(a)
if(c!==2)A.k(A.ay(c,"version","unsupported save version"))
return new A.eo(c,s,r)},
qt(a){var s,r,q,p,o=A.o(a).i("a5<1>"),n=A.N(new A.a5(a,o),o.i("n.E"))
B.a.a1(n)
o=t.z
s=A.w(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.p)(n),++q){p=n[q]
s.l(0,p,A.tC(a.h(0,p)))}return A.cn(s,t.N,o)},
tC(a){var s,r,q,p
if(t.f.b(a)){s=A.w(t.N,t.z)
for(r=a.gO(),r=r.gu(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.d(B.di)
s.l(0,p,q.b)}return A.qt(s)}if(t.j.b(a)){r=t.z
return A.ao(J.e_(a,A.zy(),r),r)}if(a==null||A.bS(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.dq)
return a}throw A.d(A.ag("save contains unsupported value "+J.dZ(a).n(0),null,null))},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
na:function na(){},
dC:function dC(a,b){this.a=a
this.b=b},
ri(a,b,c,d,e,f,g){return new A.ls(a,b,c,d,e,f,g,A.f([],t.mc),A.f([],t.ag))},
rj(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aO(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.d(B.dh)
r=e.h(0,"runSeed")
q=A.aO(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aO(p)||p<1||typeof o!="number")throw A.d(B.dt)
if(!isFinite(480))throw A.d(A.ay(480,"daySeconds","must be finite and > 0"))
n=new A.hW(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ag("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.vT(a3,A.b1(a,s,m))
k=A.ve(l,A.b1(b,s,m),n)
j=A.rk(d)
A.vH(A.b1(a0,s,m)).kn(j)
m=A.b1(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bS(f))A.k(B.d4)
return A.ri(d,q,j,n,l,k,new A.hL(i,h,g,f))},
xP(a){var s
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
dl:function dl(a,b){this.a=a
this.b=b},
hV:function hV(){},
lt:function lt(a,b){this.a=a
this.b=b},
ls:function ls(a,b,c,d,e,f,g,h,i){var _=this
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
lu:function lu(a){this.a=a},
lv:function lv(){},
v1(a){var s,r,q,p,o,n,m="modelScale",l=A.k2(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.b6(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.da)
s=A.d8(l,"houseId")
r=A.d8(l,"sourceRef")
q=J.e_(A.k_(l,"rooms"),new A.kF(k),t.fS)
q=A.N(q,q.$ti.i("a6.E"))
q.$flags=1
p=J.e_(A.k_(l,"portals"),new A.kG(k),t.gE)
p=A.N(p,p.$ti.i("a6.E"))
p.$flags=1
o=J.e_(A.k_(l,"stairs"),new A.kH(),t.d2)
o=A.N(o,o.$ti.i("a6.E"))
o.$flags=1
n=J.e_(A.k_(l,"exteriorCells"),new A.kI(),t.N)
n=A.N(n,n.$ti.i("a6.E"))
n.$flags=1
return new A.kE(s,r,q,p,o)},
v2(a,b){var s=A.k2(a,"room"),r=A.d8(s,"id"),q=A.u2(s.h(0,"origin"),"origin",b),p=A.u2(s.h(0,"size"),"size",b),o=J.e_(A.k_(s,"windows"),new A.kK(b),t.lJ)
o=A.N(o,o.$ti.i("a6.E"))
o.$flags=1
return new A.e2(r,q,p,o)},
k2(a,b){return t.P.b(a)?a:A.hd(b+" is not an object")},
k_(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.hd(b+" is not a list")},
d8(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.hd(b+" is not a string")},
hg(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.hd(b+" is not finite")},
yO(a,b){var s,r
if(t.j.b(a)){s=J.ax(a)
s=s.gq(a)!==3||s.R(a,new A.pa())}else s=!0
if(s)return A.hd(b+" is not a finite vec3")
s=A.f([],t.n)
for(r=J.P(a);r.m();)s.push(A.b6(r.gp()))
return s},
u2(a,b,c){var s,r,q,p=A.f([],t.n)
for(s=A.yO(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q]*c)
return p},
hd(a){return A.k(A.ag(a,null,null))},
kE:function kE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(){},
kI:function kI(){},
kJ:function kJ(a){this.a=a},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kK:function kK(a){this.a=a},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
e1:function e1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e3:function e3(a){this.b=a},
pa:function pa(){},
hy:function hy(a,b){this.a=a
this.b=b
this.d=null},
kS:function kS(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lE:function lE(){this.b=0},
n6:function n6(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
aS:function aS(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lb:function lb(){},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function lG(){},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
zG(a){var s,r,q,p,o,n,m,l
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
return new A.bL(B.O,p,new Uint16Array(A.Y(a.b)),new A.hl(new A.A(s.a,s.b,s.c),new A.A(s.d,s.e,s.f)))},
zH(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
a3.B()
s=t.S
r=A.w(s,t.L)
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
throw A.d(A.y("QHMX triangle "+m+" crosses material slots "+h+", "+g+", "+n[i].x,null))}k=r.h(0,h)
if(k==null){k=A.f([],o)
r.l(0,h,k)}B.a.J(k,A.f([l,j,i],o))}e=A.f([],t.bp)
q=r.$ti.i("a5<1>")
q=A.N(new A.a5(r,q),q.i("n.E"))
B.a.a1(q)
p=q.length
k=t.ph
d=0
for(;d<q.length;q.length===p||(0,A.p)(q),++d){h=q[d]
g=r.h(0,h)
g.toString
c=A.w(s,s)
b=A.f([],k)
a=A.f([],o)
for(f=g.length,a0=0;a0<g.length;g.length===f||(0,A.p)(g),++a0){a1=g[a0]
a2=c.h(0,a1)
if(a2==null){a2=b.length
c.l(0,a1,a2)}if(a2===b.length){if(!(a1>=0&&a1<n.length))return A.e(n,a1)
B.a.k(b,n[a1])}B.a.k(a,a2)}B.a.k(e,new A.hR(h,A.zG(new A.i2(b,new Uint16Array(A.Y(a)),A.xE(b)))))}return e},
xE(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.hQ(r,q,p,o,n,m)},
hR:function hR(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
lc:function lc(){},
yZ(a){var s,r,q,p=new A.lF(A.f([],t.ph),A.f([],t.t),A.w(t.N,t.S))
for(s=0;s<4;++s)A.xS(p,a,B.br[s],10.5,10.5,8.03,0.42)
p.t(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.t(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.t(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.t(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.t(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.t(1,11,0,11,-0.5,-0.35,10.58)
p.t(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.t(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aS(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aS(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.b7(r,new A.aS(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b7(r,q,new A.aS(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aS(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aS(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b7(q,new A.aS(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b7(q,r,new A.aS(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.t(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.yr(p,10.5,10.5,8.03,10.88)
A.xG(p,10.5,10.5,10.88)
A.xO(p,10.5,10.5,8.03)
A.xV(p,a,10.5)
A.yw(p,10.5,10.5)
A.xD(p,10.5)
return p.ks()},
xS(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.f([],t.jX)
for(s=b6.b,r=s.length,q=B.z!==b7,p=B.i!==b7,o=B.j===b7,n=B.H===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
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
B.a.k(b4,new A.d1(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.an(i),b=J.P(h.a),h=new A.J(b,h.b,h.$ti.i("J<1>"));h.m();){a=b.gp()
if(!a.Q||a.ar(i)!==b7)continue
B:{if(!p||o){a0=g+a.a9(i)
break B}if(!q||n){a0=e+a.a9(i)
break B}a0=null}B.a.k(b4,new A.d1(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.j?b8:b9
r=t.i
a1=A.at([0,s],r)
a2=A.at([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.p)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.N(a1,a1.$ti.c)
B.a.a1(a4)
a5=A.N(a2,a2.$ti.c)
B.a.a1(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.e(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.e(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.e(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.R(b4,new A.oW(b0,b1,b2,b3)))continue
switch(m){case 0:b5.t(0,b1,b3,0,b0,b2,r)
break
case 2:b5.t(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.t(0,0,b3,b1,r,b2,b0)
break
case 1:b5.t(0,s,b3,b1,b8,b2,b0)
break}}A.xU(b5,b4,b7,b8,b9,c1)
A.xT(b5,b4,b7,b8,b9,c1)},
xT(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.p)(a4),++g){f=a4[g]
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
xU(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.p)(a3),++h){g=a3[h]
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
break}if(!f)A.yu(a2,g,a4,a5,a6,a7,q)}},
yu(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
yr(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.t(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.t(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.t(4,i,p,-0.38,j,q,-0.44)
a.t(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.t(5,h+0.5,p,o,h-0.5,r,q)}},
xG(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.t(0,g+0.35,k,n,g-0.35,l,q)
a.t(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.t(5,d+0.1,o,m,d-0.1,r,p)}}},
xO(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.t(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.t(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.t(6,j,b+0.06,d,k,b,e)}a.t(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
xV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.a9("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.t(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.t(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.t(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.t(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.t(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)
k=r-0.18
a.t(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.t(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
yw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
xD(a,b){var s,r
a.t(0,6.7,1,-4.05,-2.5,0,-4.4)
a.t(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.t(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.t(7,b+3,0,-4.55,-3,-0.08,-5.2)},
d1:function d1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oW:function oW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zx(a,b,c,d){var s,r,q,p,o,n=A.r1(a,c,b)
if(n!=null&&!n.e){s=n.b
return new A.dj(B.cT,s)}r=A.ul(a,c,b)
if(r!=null)return new A.dj(B.cU,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.um(a,c,b)!=null)return B.cZ
q=A.uk(a,b,c,d)
if(q!=null){p=d.c3(q.c)
o=q.y
return new A.dj(B.cW,o==null?"inspect the "+p.b:"inspect "+o)}return B.cY},
uk(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a0==null)return null
s=c.e.h(0,b)
if(s==null)return null
for(r=a0.lC(b),q=J.P(r.a),r=new A.J(q,r.b,r.$ti.i("J<1>")),p=a0.c,o=s.d,n=o.a,m=o.b,o=o.c,l=null,k=3;r.m();){j=q.gp()
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
cP:function cP(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.c=b},
u9(a,b){var s,r=new A.ce(new Float32Array(5376)),q=new A.ce(new Float32Array(5376)),p=new A.ce(new Float32Array(5376)),o=new A.ce(new Float32Array(5376)),n=b.d,m=a.aG(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cp(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
A.xt(r,b,m)
k+=m.b
q.cp(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.xw(p,a,b,m,B.br[s])
for(l=a.an(b.a),k=J.P(l.a),l=new A.J(k,l.b,l.$ti.i("J<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.tr(o,b,m,j,!0)}A.xr(p,b,m)
A.xu(p,a,b,m)
return new A.n7(B.n.aL(r.a,0,r.b),B.n.aL(q.a,0,q.b),B.n.aL(p.a,0,p.b),B.n.aL(o.a,0,o.b))},
yX(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.ce(new Float32Array(5376))
r=a.aG(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.ts(s,b,r,c,q)
return B.n.aL(s.a,0,s.b)},
yY(a,b){var s,r,q,p=new A.ce(new Float32Array(5376)),o=a.aG(b)
for(s=a.an(b.a),r=J.P(s.a),s=new A.J(r,s.b,s.$ti.i("J<1>"));s.m();){q=r.gp()
if(q.at==null||q.as)continue
A.tr(p,b,o,q,!1)}return B.n.aL(p.a,0,p.b)},
xt(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aI(e/0.22)
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
xu(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
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
case"hall":A.xv(b1,b2,b3,b4,a5,a4)
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
xv(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
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
A.u(a0,new A.b(p,c,b-0.18),new A.b(o,c+0.11,b+0.18),a4)}k=a+0.08
h=a+0.34
A.u(a0,new A.b(p-0.1,k,g),new A.b(p,h,i),3680031)
A.u(a0,new A.b(o,k,g),new A.b(o+0.1,h,i),3680031)
h=a+1.52
k=h<m?h:m
A.u(a0,new A.b(o+0.16,a+1.42,g+0.25),new A.b(o+0.25,k,i-0.25),a5)},
xw(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.j?a3.a:a3.c,a=A.f([],t.a9)
for(s=a2.a,r=a1.an(s),q=J.P(r.a),r=new A.J(q,r.b,r.$ti.i("J<1>"));r.m();){p=q.gp()
if(!p.as&&p.ar(s)===a4)a.push(new A.d0(p.a9(s),p.a9(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.d0(q,q+n.e,p,p+n.f))}}s=t.i
r=A.at([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.p)(a),++o){m=a[o]
r.J(0,A.f([m.a,m.b],p))}l=A.N(r,r.$ti.c)
B.a.a1(l)
s=A.at([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.p)(a),++o){m=a[o]
s.J(0,A.f([m.c,m.d],p))}k=A.N(s,s.$ti.c)
B.a.a1(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.e(l,j)
f=l[j]
if(!(i<r))return A.e(l,i)
e=l[i]
if(!(h<s))return A.e(k,h)
d=k[h]
c=k[g]
if(B.a.R(a,new A.oA(f,e,d,c)))continue
A.yP(a0,a2,a3,a4,f,e,d,c)}A.xx(a0,a2,a3,a4,b,a)},
xx(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.oy(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.oy(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.oy(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.oy(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.aP(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.aP(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.aP(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.aP(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.I(a9),o=r.i("r(1)").a(new A.oz(b3)),a9=B.a.gu(a9),r=new A.J(a9,o,r.i("J<1>")),o=b2.c,i=b3!==B.i,e=b3===B.j,c=b2.a;r.m();){b=a9.gp()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.aP(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.aP(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.aP(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.aP(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.xy(b0,b1,b2,b3,b,p)}},
xy(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
A.aP(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.aP(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.aP(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.aP(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.aP(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
oy(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.yE(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aP(a,b,c,d,n,o,g,h,i,j)}},
yE(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.f([new A.ez(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.f([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.p)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.ez(j,m))
j=k.b
if(n<j)B.a.k(p,new A.ez(n,j))}h=p}return h},
xr(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
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
A.u(a,new A.b(p-0.025,n,o-0.025),new A.b(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.u(a,new A.b(p-0.14,k,o-0.14),new A.b(p+0.14,n,o+0.14),j)
A.u(a,new A.b(p-0.09,n-0.16,o-0.09),new A.b(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.u(a,new A.b(h-0.24,k,e-0.24),new A.b(h+0.24,s,e+0.24),l)
j=s-0.034
A.u(a,new A.b(h-0.15,j,e-0.15),new A.b(h+0.15,k,e+0.15),l)
A.u(a,new A.b(h-0.055,s-0.048,e-0.055),new A.b(h+0.055,j,e+0.055),l)},
aP(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.al(j,l,g,h,d)
a.al(s,r,q,p,d)
a.al(l,s,p,g,d)
a.al(r,j,h,q,d)
a.al(l,j,r,s,d)
a.al(g,p,q,h,d)},
yP(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
n=A.yQ(b,d)
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
yQ(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
tr(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.ar(d),b=a3.a9(d),a=b+a3.w
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
A.u(a0,new A.b(r+l,s,d),new A.b(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.u(a0,new A.b(l,s,d),new A.b(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.u(a0,new A.b(r+n,s+m,d),new A.b(r+h,j,i),q)
A.u(a0,new A.b(k,s,d),new A.b(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.u(a0,new A.b(r+l,s,k),new A.b(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.u(a0,new A.b(l,s,k),new A.b(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.u(a0,new A.b(r+n,s+m,k),new A.b(r+h,i,d),q)
A.u(a0,new A.b(j,s,k),new A.b(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.u(a0,new A.b(n,s,d+k),new A.b(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.u(a0,new A.b(n,s,k),new A.b(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.u(a0,new A.b(n,s+e,d+m),new A.b(r,j,d+l),q)
A.u(a0,new A.b(n,s,i),new A.b(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.u(a0,new A.b(r,s,d+l),new A.b(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.u(a0,new A.b(r,s,l),new A.b(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.u(a0,new A.b(r,s+e,d+n),new A.b(k,j,d+m),q)
A.u(a0,new A.b(r,s,i),new A.b(k,s+0.05,l),q)
break}if(a4)A.ts(a0,a1,a2,a3,q)
A.xs(a0,a1,a2,a3)},
xs(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.a9(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
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
A.aP(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.j,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.aP(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.aP(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.aP(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
ts(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.ar(o),m=d.a9(o)
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
n7:function n7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oA:function oA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oz:function oz(a){this.a=a},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(a,b){this.a=a
this.b=b},
rk(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.f([],b4),b6=t.aN,b7=A.f([],b6),b8=A.f([],t.jn),b9=t.N
b9=new A.lC(b5,b7,b8,A.w(b9,t.J),A.w(b9,t.T),new A.lE())
s=t.E
r=t.s
q=t.cs
p=t.jc
B.a.J(b5,A.f([new A.aK(n,B.a3,new A.b(4.5,3.9,4),new A.b(0,0,0),A.f([new A.aZ("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.aZ("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.f(["hall-living","kitchen-living"],r),A.f([new A.b2(m,l,new A.b(1,1.95,1),!1,!1,m),new A.b2(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.aq,"wallpaper-stripes",i,h,B.C),new A.aK(g,B.a3,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.f([new A.aZ("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.f(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.f([new A.b2("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.f([new A.bj(e,e,new A.b(0.2,2.175,0.35)),new A.bj(d,d,new A.b(2.2,2.55,3)),new A.bj(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.C),new A.aK(a,B.a3,new A.b(4.5,3.75,3),new A.b(0,0,4),A.f([new A.aZ("kitchen-south",B.j,1.5,1.05,1.2,1.65,!1,!0),new A.aZ("kitchen-west",B.H,1,1.2,0.9,1.5,!1,!0)],s),A.f(["hall-kitchen","kitchen-living"],r),A.f([new A.b2(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.b2("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.b2("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.f([new A.bj(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.ed),new A.aK("cellar",B.a3,new A.b(4,3,4),new A.b(1,-3,2),B.bn,A.f(["hall-cellar"],r),B.ex,B.aq,"wallpaper-damp","floor-concrete","ceiling-pipes",B.C),new A.aK("bedroom",B.a4,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.f([new A.aZ("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.aZ("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.f(["landing-bedroom"],r),A.f([new A.b2(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.b2("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.f([new A.bj(a3,a3,new A.b(2.2,1.125,2.5)),new A.bj(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.C),new A.aK(a5,B.a4,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bn,A.f(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.f([new A.b2("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.aq,b,i,h,B.C),new A.aK(a7,B.a4,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.f([new A.aZ("bathroom-east",B.z,0.9,1.5,0.7,1.5,!0,!0)],s),A.f([a6],r),A.f([new A.b2("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.f([new A.bj(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.C),new A.aK(a9,B.a4,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.f([new A.aZ("spare-south",B.j,1.8,1.05,0.9,1.35,!1,!0)],s),A.f(["landing-spare"],r),A.f([new A.b2("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.f([new A.bj(b0,b0,new A.b(0.5,1.8,0.3)),new A.bj(b1,b1,new A.b(3.7,2.1,2.7)),new A.bj(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.C)],b4))
B.a.J(b7,A.f([A.cU(g,"outside","kit-front-door-recessed",!0,B.i,B.j,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cU(g,n,b3,!1,B.H,B.z,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cU(g,a,b3,!1,B.H,B.z,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cU(a,n,b3,!1,B.i,B.j,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cU(g,"cellar","kit-cellar-door-grille",!1,B.j,B.z,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cU(g,a5,o,!1,B.z,B.z,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cU(a5,"bedroom",b3,!1,B.H,B.z,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cU(a5,a7,b3,!1,B.j,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cU(a5,a9,b3,!1,B.j,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cW("hall-stairs",f,B.eq,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
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
b9.ke()
b9.kd()
return b9},
lC:function lC(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
lT:function lT(){},
lU:function lU(){},
lS:function lS(){},
lV:function lV(a){this.a=a},
lW:function lW(){},
r1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
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
ul(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.an(c),r=J.P(s.a),s=new A.J(r,s.b,s.$ti.i("J<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.lF(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.tL(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
um(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=A.yR(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.tL(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
tL(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.K(a.ga4().bz(c.b),-1,1))<=e},
yR(a,b,c){var s=a.aG(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
la:function la(){this.a=null
this.b=0},
nm:function nm(){},
nn:function nn(){},
vL(a){var s=A.hh(a,"inventory asset"),r=A.cJ(s,"id"),q=A.cJ(s,"kind")
A.cJ(s,"source")
A.cJ(s,"proxy")
A.cJ(s,"pivot")
s=A.hh(s.h(0,"bounds"),"inventory bounds")
return new A.c6(r,q,new A.m0(A.k4(s.h(0,"min"),"bounds.min"),A.k4(s.h(0,"max"),"bounds.max")))},
vM(a){var s,r,q,p,o,n,m,l="stateKey",k=A.hh(a,"inventory placement"),j=A.hh(k.h(0,"visibility"),"placement visibility"),i=A.hh(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.cJ(k,"id"),f=A.cJ(k,"roomId"),e=A.cJ(k,"assetId")
A.cJ(k,"role")
s=typeof k.h(0,"socket")=="string"?A.C(k.h(0,"socket")):null
k=A.hh(k.h(0,"transform"),"inventory transform")
r=A.k4(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.dj)
q=A.k4(k.h(0,"position"),"transform.position")
p=A.k4(k.h(0,"rotation"),"transform.rotation")
A.cJ(j,"layer")
if(typeof j.h(0,l)=="string")A.C(j.h(0,l))
o=J.ab(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.C(i.h(0,"focusId")):null
m=t.P.b(h)?A.yk(h,"radius"):0
return new A.c_(g,f,e,s,new A.m1(q,p,r),o,n,m)},
hh(a,b){return t.P.b(a)?a:A.cH(b+" is not an object")},
cJ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.cH(b+" is not a string")},
yk(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.cH(b+" is not finite")},
k4(a,b){var s
if(t.j.b(a)){s=J.ax(a)
s=s.gq(a)!==3||s.R(a,new A.p9())}else s=!0
if(s)return A.cH(b+" is not a finite vec3")
s=J.ax(a)
return new A.b(A.b6(s.h(a,0)),A.b6(s.h(a,1)),A.b6(s.h(a,2)))},
cH(a){return A.k(A.ag(a,null,null))},
lH:function lH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lK:function lK(a){this.a=a},
lI:function lI(a){this.a=a},
lJ:function lJ(a){this.a=a},
c6:function c6(a,b,c){this.a=a
this.b=b
this.f=c},
c_:function c_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
m1:function m1(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,b){this.a=a
this.b=b},
p9:function p9(){},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i3:function i3(a){this.a=a},
lL:function lL(a){this.a=a},
cU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bk(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
f_:function f_(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
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
b2:function b2(a,b,c,d,e,f){var _=this
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
cM:function cM(){},
cW:function cW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aK:function aK(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
vG(a){return A.vF(a)},
vF(a){var s,r,q,p,o,n,m=A.tT(a,"sound emitter"),l=t.N,k=A.w(l,l)
for(s=A.tT(m.h(0,"cues"),"sound emitter cues").gO(),s=s.gu(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.dg)
k.l(0,r.a,q)}s=A.qS(m,"id")
r=A.qS(m,"roomId")
p=A.qS(m,"placementId")
o=A.yN(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.eE("gain is not a number")
return new A.c5(s,r,p,o,n,A.cn(k,l,l))},
tT(a,b){return t.P.b(a)?a:A.eE(b+" is not an object")},
qS(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.eE(b+" is not a string")},
yN(a,b){var s
if(t.j.b(a)){s=J.ax(a)
s=s.gq(a)!==3||s.R(a,new A.p8())}else s=!0
if(s)throw A.d(A.ag(b+" must be a numeric vec3",null,null))
s=J.ax(a)
return new A.b(A.b6(s.h(a,0)),A.b6(s.h(a,1)),A.b6(s.h(a,2)))},
eE(a){return A.k(A.ag(a,null,null))},
lN:function lN(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function lO(a){this.a=a},
lP:function lP(a){this.a=a},
lQ:function lQ(){},
c5:function c5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lD:function lD(){this.b=this.a=null},
f4:function f4(a){this.a=a},
lM:function lM(){this.b=this.a=null},
ef:function ef(a,b){this.a=a
this.b=b},
p8:function p8(){},
rl(a,b,c,d,e,f){var s=t.N
return new A.lR(e,f,c,a,A.cn(A.b1(d,s,s),s,s),A.ao(b,s))},
rm(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.w(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
h.l(0,p.a,new A.fk(p.ax,p.ay))}s=A.w(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.p)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.w(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.p)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l){j=o[l]
i.l(0,j.a,new A.fc(j.d,j.r))}return A.rl(a.r.b,B.m,i,B.bx,h,s)},
vH(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.f_
r=a3.h(0,"mantleHistory")
if(r==null)r=B.eF
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aO(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.de)
p=t.N
o=A.w(p,t.ku)
for(n=a.gO(),n=n.gu(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.b6)
l=A.b1(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bS(j)||!A.bS(i))A.k(B.b6)
o.l(0,k,new A.fk(j,i))}h=A.w(p,t.y)
for(n=a0.gO(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bS(l.b))throw A.d(B.dc)
h.l(0,k,A.an(l.b))}g=A.w(p,t.mK)
for(n=a1.gO(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.b5)
l=A.b1(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bS(f)||!A.bS(e))A.k(B.b5)
g.l(0,k,new A.fc(f,e))}d=A.w(p,p)
for(q=s.gO(),q=q.gu(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.dA)
d.l(0,n,A.C(p.b))}c=A.f([],t.s)
for(q=J.P(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.d(B.d_)
B.a.k(c,b)}return A.rl(a2,c,g,d,o,h)},
qM(a,b){return a.a.a===b.a&&a.a7(0,b.gc5(b))},
lR:function lR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fk:function fk(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
vr(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.ml(e,A.I(e).c)
q=new A.eu()
q.cD((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eY(a,q,2,r,1+s,A.at(["time"],t.N))
break
case 3:A.eY(a,q,3,r,1+s,A.at(["place"],t.N))
break
case 4:A.eY(a,q,4,r,2+s,p)
A.vn(a,q,4)
break
case 5:A.eY(a,q,5,r,s,p)
A.vl(a,q,5)
break
case 6:A.eY(a,q,6,r,s,p)
A.vm(a,q)
A.vq(a,q,6)
break
case 7:A.vo(a,q,7)
break
default:if(s>0)A.eY(a,q,b,r,s,p)}},
vk(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.vp(a,b,c))return!1
return!0},
eY(a,b,c,d,e,f){var s,r,q,p,o=A.f([],t.r)
for(s=a.b,s=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>"));s.m();){r=s.d
if(A.vk(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cB(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.e(o,p)
A.rg(a,b,o[p],f)}},
rg(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.b1(B.a.gN(o).a,n,n)
if(d==null)s=A.f(B.w.slice(0),t.s)
else{n=t.nn
s=A.N(new A.Q(B.w,t.dA.a(new A.l5(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.au(n)
if(!(n>=0&&n<s.length))return A.e(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.e9(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.au(n)
if(!(n>=0&&n<p.length))return A.e(p,n)
m.l(0,r,p[n])}a.d3(c.a,m,B.a.gN(o).b)},
vn(a,b,c){var s=A.rh(a,b,c)
if(!a.bu(s))return
a.ef(c,t.G.a(s),0,B.ao,null)},
rh(a,b,c){var s,r,q,p,o,n=t.N,m=A.w(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.w[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.au(p)
if(!(o>=0&&o<p))return A.e(q,o)
m.l(0,r,q[o])}}return m},
vl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.r)
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
o=A.b1(B.a.gN(i).a,s,s)
r=p.c
n=A.b1(B.a.gN(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.w[m]
k=o.h(0,l)
j=s.e9(l,k==null?"":k)
k=j.length
if(k!==0){k=b.au(k)
if(!(k>=0&&k<j.length))return A.e(j,k)
o.l(0,l,j[k])}}a.d3(q.a,o,B.a.gN(i).b)
a.d3(p.a,n,B.a.gN(r).b)},
vm(a,b){var s,r,q=A.f([],t.r)
for(s=a.b,r=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.au(r)
if(!(r>=0&&r<q.length))return A.e(q,r)
s.aa(0,q[r].a)},
vq(a,b,c){var s,r,q=A.f([],t.r)
for(s=a.b,s=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.au(s)
if(!(s>=0&&s<q.length))return A.e(q,s)
A.rg(a,b,q[s],null)},
vo(a,b,c){var s=c+1,r=A.rh(a,b,s)
if(!a.bu(r))return
a.ef(s,t.G.a(r),0,B.ao,null)},
vp(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gN(b.c).c===B.a6}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gN(b.c).c===B.a6}if(c===21)return b.e
return!1},
l5:function l5(a){this.a=a},
wC(a){var s,r,q,p,o=t.N,n=A.w(o,t.a)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p=A.az(q==null?B.m:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.nQ(n)},
mg(a,b,c){var s,r,q,p=t.z
p=A.w(p,p)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.ii(A.cn(p,q,q),b,c)},
rv(a){var s=t.N
return A.mg(t.P.a(a.h(0,"fields")).bd(0,new A.mh(),s,s),A.b6(a.h(0,"shakiness")),A.vw(B.et,A.C(a.h(0,"hand")),t.bU))},
vv(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.f([],t.b1)
for(s=J.P(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.rv(r.a(s.gp())))
s=A.bq(a.h(0,"corroborator"))
q=A.an(a.h(0,"locked"))
p=A.tx(a.h(0,"lastReadDay"))
return new A.bt(n,m,l,s,q,p,o==null?null:A.rv(r.a(o)))},
cQ:function cQ(a,b){this.a=a
this.b=b},
nQ:function nQ(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function mh(){},
mi:function mi(a){this.a=a},
bt:function bt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rs(a){return new A.m3(a,A.w(t.S,t.R),A.a8(t.N),A.f([],t.t))},
vT(a,b){var s,r,q,p,o=A.rs(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.uS(s.a(b.h(0,"tags")),t.N))
for(s=J.P(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.vv(r.a(s.gp()))
q.l(0,p.a,p)}return o},
m3:function m3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
ma:function ma(a,b){this.a=a
this.b=b},
kL:function kL(){},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kM:function kM(){},
mf:function mf(){},
me:function me(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mD:function mD(){},
mC:function mC(a,b){this.b=a
this.c=b},
mE:function mE(){},
q5(a){if(!isFinite(0))A.k(A.ay(0,"interpolation",null))
return new A.n3(a)},
fp:function fp(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
n3:function n3(a){this.a=a},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
n2(a,b,c,d,e){var s="badd341244c1-dd0453e3d464-dirty",r=A.jX("RENDERER_SHA"),q=A.jX("GAME_SHA"),p=A.jX("DART_SDK_VERSION"),o=A.jX("LOCKFILE_SHA256"),n=A.jX("PROJECT_VERSION"),m=A.ml(b,A.I(b).c)
m=A.N(m,A.o(m).c)
B.a.a1(m)
m=new A.n1(a,e,s,A.ao(m,t.N),r,q,p,o,n,c,d)
m.iS(a,s,b,c,d,q,o,e,n,r,p)
return m},
jX(a){var s=B.eT.h(0,a)
return s.length===0?null:s},
n1:function n1(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
re(a,b,c,d,e,f,g){var s=A.N(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ag("saved day-loop resources must not be negative",null,null))
return new A.kX(c,g,b,a,e,d===!0,s)},
ve(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.d7)
s=A.f([],t.b2)
for(r=J.P(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.d(B.df)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aO(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.d6)
f=A.eg(new A.Q(B.bl,q.a(new A.kY(h)),p),o)
e=A.eg(new A.Q(B.bq,n.a(new A.kZ(g)),m),l)
if(f==null||e==null)throw A.d(B.dv)
B.a.k(s,new A.ep(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aO(d)||!A.aO(c)||!A.aO(b)||!A.bS(a))throw A.d(B.dk)
return A.re(c,d,a1,a,b,s,a3)},
bl:function bl(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
nU:function nU(a,b){this.b=a
this.c=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
lX:function lX(a){this.c=a},
lZ:function lZ(a,b){this.a=a
this.b=b},
m_:function m_(){},
rI(){var s=A.qy(B.m),r=A.qy(B.m),q=new A.n9(B.A,s,r)
if(!isFinite(0))A.k(B.d0)
if(!B.a.a7(r,B.a.gc5(s)))A.k(B.dl)
if(q.a===B.A&&q.b!==0&&!q.e)A.k(B.d2)
return q},
qy(a){var s,r,q,p=A.f([],t.s),o=A.a8(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.d(B.du)
B.a.k(p,q)}return p},
bM:function bM(a,b){this.a=a
this.b=b},
n8:function n8(){},
cc:function cc(){},
n9:function n9(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hW:function hW(a,b){this.a=a
this.b=6
this.c=b},
uo(a){var s=B.d.K(a,0,1)
if(s<=0.5)return A.tR(4491468,16777215,s*2)
return A.tR(16777215,16759637,(s-0.5)*2)},
up(a){var s=B.d.K(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga4()},
tR(a,b,c){var s,r=new A.p_(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.ir()
s=r.$1(8)
if(typeof s!=="number")return s.ir()
r=r.$1(0)
if(typeof r!=="number")return A.k7(r)
return(q<<16|s<<8|r)>>>0},
p_:function p_(a,b,c){this.a=a
this.b=b
this.c=c},
er(a){var s,r,q=A.w(t.N,t.z)
for(s=a.gO(),s=s.gu(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
nr:function nr(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ns:function ns(){},
nt:function nt(){},
dI:function dI(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b){this.a=a
this.b=b},
nw:function nw(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
nx:function nx(){},
ny:function ny(){},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
kO:function kO(a){this.a=a
this.b=null},
vi(a){var s=A.f([],t.Y)
s=new A.l0(A.L(a,"div","door",null),s)
s.iN(a)
return s},
l0:function l0(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.z=_.y=_.x=_.w=null
_.Q=!1},
l1:function l1(a,b){this.a=a
this.b=b},
l2:function l2(a){this.a=a},
l3:function l3(a,b){this.a=a
this.b=b},
l4:function l4(a,b){this.a=a
this.b=b},
vs(a){var s=new A.l7(a,A.c(a.createElement("div")))
s.bn(a)
s.iO(a)
return s},
l7:function l7(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
l8:function l8(a){this.a=a},
vE(a){var s=new A.lA(a,A.c(a.createElement("div")))
s.bn(a)
s.iP(a)
return s},
lA:function lA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lB:function lB(a){this.a=a},
m4:function m4(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
m5:function m5(a){this.a=a},
m6:function m6(a){this.a=a},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
m8:function m8(){},
m9:function m9(){},
L(a,b,c,d){var s=A.c(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
tG(a){var s,r,q,p=A.c(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.f([],t.Y)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
fj:function fj(){},
mM:function mM(a){this.a=a
this.b=null},
wk(a){var s=t.N,r=t.m
s=new A.ne(A.w(s,r),A.w(s,r),A.w(s,t.aL),a,A.c(a.createElement("div")))
s.bn(a)
s.iU(a)
return s},
ne:function ne(a,b,c,d,e){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=null
_.Q=a
_.as=b
_.at=c
_.CW=_.ch=_.ay=_.ax=null
_.a=d
_.b=e
_.e=_.d=_.c=null},
ng:function ng(a,b){this.a=a
this.b=b},
nh:function nh(a,b){this.a=a
this.b=b},
ni:function ni(a,b){this.a=a
this.b=b},
nj:function nj(a,b){this.a=a
this.b=b},
nk:function nk(a){this.a=a},
nf:function nf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wl(a){var s=new A.no(a,A.c(a.createElement("div")))
s.bn(a)
s.iV(a)
return s},
no:function no(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
np:function np(a,b,c){this.a=a
this.b=b
this.c=c},
uZ(a){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.od)
for(s=a.d,s=new A.U(s,A.o(s).i("U<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gO(),n=n.gu(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.bW(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.kk())
return new A.kj(A.ao(i,t.D),A.a8(t.N))},
bW:function bW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kj:function kj(a,b){this.a=a
this.b=b},
kl:function kl(){},
kk:function kk(){},
wB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.i1
s=t.g
r=A.w(s,t.kz)
q=A.o(e).i("a5<1>")
p=A.N(new A.a5(e,q),q.i("n.E"))
B.a.a1(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.p)(p),++l){k=p[l]
for(j=e.h(0,k).gO(),j=j.gu(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bn(new A.bC(B.hO,k+" has an out-of-range authored day "+h+"."))
g=A.wA(k,h,i.b,m)
if(g instanceof A.bn)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.l(0,new A.bm(k,h,f.a,f.b),o.a(g).a)}}return new A.j8(new A.j7(r,A.a8(t.N),A.a8(s),A.f([],t.bl),B.F))},
wA(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.w(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bk[p]
n=o.b
m=n+"."
l=A.f([],q)
for(k=a0.gO(),k=k.gu(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.Z(h,m))continue
g=A.mI(B.b.bP(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bn(new A.bC(B.hP,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.bp
B.a.k(l,new A.bN(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.nK())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bn(new A.bC(B.ce,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bn(new A.bC(B.ce,a+" day "+s+" has no authored tiers."))
return new A.jx(c)},
j7:function j7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
nO:function nO(a){this.a=a},
nN:function nN(a){this.a=a},
nL:function nL(a){this.a=a},
nM:function nM(){},
nK:function nK(){},
j8:function j8(a){this.a=a},
jx:function jx(a){this.a=a},
z9(a){var s,r,q,p=A.a8(t.N)
for(s=new A.U(a,A.o(a).i("U<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gao(),q=q.gu(q);q.m();)if(q.gp().gS().R(0,new A.ph())){p.k(0,r.a)
break}}s=A.N(p,p.$ti.c)
B.a.a1(s)
return s},
z8(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.az(b,!0,s)
B.a.a1(r)
q=new A.eu()
q.cD((a^913741)>>>0)
p=q.au(4)
if(!(p>=0&&p<4))return A.e(B.bj,p)
o=B.bj[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.az(r,!0,s)
B.a.cB(m,q)
s=A.nu(m,0,A.dW(n,"count",t.S),A.I(m).c).bi(0)
B.a.a1(s)
return s},
ph:function ph(){},
rX(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aO(r)||!A.aO(q)||!A.aO(p)||r<1||q<0||q>23||p<0)return null
return new A.bm(s,r,q,p)},
wz(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a8(t.N)
for(s=t.j,q=J.P(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a8(t.g)
for(s=J.P(s.a(a.h(0,j)));s.m();){n=A.rX(s.gp())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.uY(m)
if(!s&&l==null)return i
return new A.j9(r,o,l)},
uY(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.rX(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aO(p))if(!(p<0))if(A.bS(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.eg(new A.Q(B.bk,t.nw.a(new A.kg(r)),t.na),t.kM)
k=A.eg(new A.Q(B.eP,t.bQ.a(new A.kh(q)),t.cB),t.nq)
m=o==null
j=m?h:A.eg(new A.Q(B.ej,t.hg.a(new A.ki(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.hm(s,l,k,p,j,n)},
bg:function bg(a,b){this.a=a
this.b=b},
bA:function bA(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cg:function cg(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
nJ:function nJ(){},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
nP:function nP(){},
bn:function bn(a){this.a=a},
j5:function j5(a){this.a=a},
j4:function j4(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
qD(a){var s=$.as
if(s===a&&B.b.v(A.C(a.b.className),"open"))return
if(s!=null)s.aE()
$.as=a
s=$.aM.j()
s.w=!1
s.aU()
$.cj=0
a.co()},
p5(a){if($.as===a&&B.b.v(A.C(a.b.className),"open"))a.aE()
else A.qD(a)},
po(){var s=0,r=A.ba(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$po=A.bc(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.i(A.c(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.F.b=c3
$.qx=A.i(A.c(c2.document).getElementById("fps"))
$.bo.b=$.uI().bO(A.j0().gbf().h(0,"renderer"))
A.y0()
a6=$.F.j()
a7=A.a(A.c(c2.window).innerWidth)>0?A.a(A.c(c2.window).innerWidth):800
a6.width=a7
a7=$.F.j()
a6=A.a(A.c(c2.window).innerHeight)>0?A.a(A.c(c2.window).innerHeight):600
a7.height=a6
n=A.i(c3.getContext("webgl2"))
if(n==null){$.bo.b=new A.db(B.a8,$.bo.j().b,$.bo.j().c,!0,"webgl2 unavailable")
h=B.aj.kI($.bo.j())
h.aQ()
$.cG.b=h
A.tW()
A.d7("no-webgl2")
c2=A.i(A.c(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bo.j().a===B.U){a6=t.dg
a7=t.N
a8=t.hL
a9=t.p9
b0=t.S
b1=t.fP
b2=new A.fW(n,A.a($.F.j().width),A.a($.F.j().height),A.f([],a6),A.w(a7,t.l0),A.f([],t.jj),A.w(a7,a8),A.w(a7,a9),A.w(a7,a8),A.w(a7,a9),A.f([],a6),A.w(b0,a8),A.w(b0,a9),A.w(a7,t.bS),A.f([],t.jU),B.ev,A.w(a7,t.lu),A.w(a7,b1),A.w(a7,b1),B.dB,B.fq)}else b2=new A.et(n,A.a($.F.j().width),A.a($.F.j().height),A.j0().gbf().h(0,"render")==="legacy",$.bo.j().d,$.bo.j().e)
m=b2
$.bb=m instanceof A.fW?m:null
$.jZ=m instanceof A.et?m:null
a6=B.aj.d4($.bo.j(),m)
a6.aQ()
$.cG.b=a6}catch(c5){l=A.af(c5)
a6=$.bo.j()
$.bo.b=new A.db(B.a8,!0,a6.c,!0,"pixeldart initialization failed")
$.jZ=new A.et(n,A.a($.F.j().width),A.a($.F.j().height),A.j0().gbf().h(0,"render")==="legacy",!0,$.bo.j().e)
a6=B.aj.d4($.bo.j(),$.jZ)
a6.aQ()
$.cG.b=a6
$.F.j().setAttribute("data-renderer-error",A.q(l))}A.tW()
p=4
A.d7("initializing")
$.bF.b=new A.kQ(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.qJ=A.an(A.c(A.c(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bF.j()
a6.f=$.qJ?0.5:1
a6=A.c(c2.window)
a7=t.N
a8=A.c(a6.document)
a9=new A.i6(a8,A.a8(a7),A.a8(a7))
a6.addEventListener("keydown",A.a4(a9.gjE()))
a6.addEventListener("keyup",A.a4(a9.gjG()))
a6.addEventListener("mousemove",A.a4(a9.gjK()))
a8.addEventListener("pointerlockchange",A.a4(a9.gjI()))
$.aM.b=a9
$.tp.b=new A.i4(A.f([],t.oX),t.lv)
a9=$.F.j()
a6=A.a(A.c(c2.window).innerWidth)>0?A.a(A.c(c2.window).innerWidth):800
a9.width=a6
a6=$.F.j()
a8=A.a(A.c(c2.window).innerHeight)>0?A.a(A.c(c2.window).innerHeight):600
a6.height=a8
A.d7("renderer")
if($.bo.j().a===B.a8){a6=$.jZ
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.h()}$.eJ=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.d(h)}}A.d7("text")
a6=$.kb()
s=7
return A.aa(a6.bJ(),$async$po)
case 7:k=a6.m3()
j=A.wB(k)
if(!(j instanceof A.j8)){i=t.cq.a(j).a
h=i.b
throw A.d("Failed to build visitors: "+h)}$.aN.b=j.a
$.jR.b=A.uZ(k)
h=A.w(a7,t.a)
for(a8=t.j,b4=0;b4<5;++b4){g=B.w[b4]
a9=A.C(g)
b0=a6.c
b0===$&&A.h()
b5=b0.h(0,a9)
a9=a8.b(b5)?A.az(b5,!0,a7):B.m
J.bV(h,g,a9)}f=A.wC(h)
$.qq.b=new A.kP(B.cG)
e=$.qq.j().lH(new A.pp(f))
if(e.a==null){h=B.aX.au(2147483647)
if(!isFinite(480))A.k(A.ay(480,"daySeconds","must be finite and > 0"))
b6=new A.hW(1,480)
b6.b=10
b7=A.rs(f)
h=A.ri(42,1+h,A.rk(42),b6,b7,A.re(6,16,b7,null,6,B.ew,b6),new A.hL(0,0,0,!1))}else{h=e.a
h.toString
h=A.rj(h,f)}$.T.b=h
$.cG.j().aM(A.q5($.T.j().gdQ()))
if(e.b!=null){h=e.b
h.toString
A.eK(h)}h=$.aN.j()
a6=A.z8($.T.j().b,A.z9(k.b))
h.siB(A.ml(a6,A.I(a6).c))
A.d7("house")
$.X.b=$.T.j().c
a6=$.bb
if(a6!=null)a6.ko($.X.j())
$.dT.b=$.T.j().d
h=new A.b(5.5,1.65,3.5)
$.qU=$.qG=$.qP=h
d=h.ad(0,new A.b(0,1.3499999999999999,0))
$.hc.b=new A.hy(d,J.r4(d,new A.b(0,1.2000000000000002,0)))
$.eC.b=new A.la()
$.bp.b=A.rI()
$.aD="hall"
h=e.a
c=A.w1(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.lc($.X.j())){h=c.b
$.qU=$.qG=$.qP=h
$.bT=c.c
$.dU=c.d
$.aD=c.a
b=h.ad(0,new A.b(0,1.3499999999999999,0))
h=$.hc.j()
h.skp(b)
h.b=J.r4(b,new A.b(0,1.2000000000000002,0))
h=$.hc.j()
a6=$.X.j()
a9=c.e
b0=c.f
h.lT($.aD,$.eQ(),a6,b0,a9)
A.eK("restored position")}h=$.T.j().e
a6=$.dT.j()
$.T.j()
$.jT.b=new A.lZ(h,a6)
a6=A.c(c2.document)
h=$.T.j().e
a9=$.dT.j()
b0=$.jT.j()
b1=A.c(a6.createElement("div"))
b0=new A.m4(h,a9,b0,a6,b1)
b0.bn(a6)
b1.setAttribute("aria-label","The Journal")
A.c(b1.appendChild(A.L(a6,"div","journal-title","The Journal")))
b8=A.L(a6,"div","journal-pages",null)
a9=A.L(a6,"div","page page-left",null)
b0.y!==$&&A.B()
b0.y=a9
h=A.L(a6,"div","page page-right",null)
b0.z!==$&&A.B()
b0.z=h
A.c(b8.appendChild(a9))
A.c(b8.appendChild(h))
A.c(b1.appendChild(b8))
A.c(b1.appendChild(b0.j1()))
b9=A.L(a6,"div","tape-roll",null)
A.c(b9.style).setProperty("width","8rem")
h=A.L(a6,"div","tape-fill",null)
b0.as!==$&&A.B()
b0.as=h
A.c(b9.appendChild(h))
A.c(b1.appendChild(b9))
c0=A.L(a6,"div","consult",null)
A.c(c0.appendChild(A.L(a6,"div","consult-label","Cite an entry")))
h=A.L(a6,"div","entry-picker",null)
b0.at!==$&&A.B()
b0.at=h
a9=A.L(a6,"div","consult-result",null)
b0.ax!==$&&A.B()
b0.ax=a9
A.c(c0.appendChild(h))
A.c(c0.appendChild(a9))
A.c(b1.appendChild(c0))
c1=A.i(a6.documentElement)
if(t.m.b(c1)){A.c(c1.style).setProperty("--shake-max-deg","3deg")
A.c(c1.style).setProperty("--shake-max-px","2px")}$.jU.b=b0
$.jU.j().sbL(new A.pq())
h=A.c(c2.document)
a6=A.L(h,"div","prompt",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
A.c(a6.style).setProperty("transition-duration","0.3s")
A.c(A.i(h.body).appendChild(a6))
$.tq.b=new A.mM(a6)
a6=A.c(c2.document)
h=A.L(a6,"div","broadcast",null)
h.setAttribute("role","status")
h.setAttribute("aria-live","polite")
h.setAttribute("aria-atomic","true")
A.c(A.i(a6.body).appendChild(h))
$.to.b=new A.kO(h)
h=A.c(c2.document)
a6=A.L(h,"div","ambient-notice",null)
a6.setAttribute("role","status")
a6.setAttribute("aria-live","polite")
a6.setAttribute("aria-atomic","true")
A.c(A.i(h.body).appendChild(a6))
$.ox.b=new A.km(a6)
a6=A.vi(A.c(c2.document))
a6.slq(A.zq())
a6.sls(A.zs())
a6.slr(A.zr())
$.aC.b=a6
a6=e.a
a=A.wz(a6==null?null:a6.c.h(0,"visitors"))
if(a!=null&&$.aN.j().lS(a))A.yq()
h=$.jR.j()
a6=e.a
h.lU(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(a8.b(a0))for(h=J.P(a0);h.m();){a1=h.gp()
if(A.aO(a1))$.p7.k(0,a1)}h=A.wl(A.c(c2.document))
h.slz(new A.pr())
h.sbL(new A.pB())
$.qr.b=h
h=A.vE(A.c(c2.document))
h.sbL(new A.pC())
$.qp.b=h
h=A.wk(A.c(c2.document))
h.slw(new A.pD())
h.sly(new A.pE())
h.slx(new A.pF())
h.slu(new A.pG())
h.slv(new A.pH())
h.slA(new A.pI())
h.sbL(new A.ps())
$.d5.b=h
h=A.vs(A.c(c2.document))
h.sbL(new A.pt())
h.slt(new A.pu())
$.jS.b=h
h=e.a
a2=A.vu(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.tV(a2)
a3=$.eJ
if(a3!=null){A.d7("world")
h=$.X.j()
a6=a3
a7=new A.n6(h,a6,A.w(a7,t.L))
a7.iT(h,a6)
$.eF=a7}h=B.b.v(A.C(A.c(A.c(c2.window).location).search),"shaders=live")
$.u6=h
if(h){h=$.eJ
if(h!=null)h.bg()}A.tY()
A.c(c2.window).addEventListener("resize",A.a4(new A.pv()))
A.c(c2.window).addEventListener("keydown",A.a4(new A.pw()))
A.c(c2.window).addEventListener("keyup",A.a4(new A.px()))
A.c(c2.window).addEventListener("keydown",A.a4(new A.py()))
A.c(c2.window).addEventListener("click",A.a4(new A.pz()))
$.F.j().addEventListener("click",A.a4(new A.pA()))
A.eH()
A.d7("raf")
A.a(A.c(c2.window).requestAnimationFrame(A.a4(A.ug())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.af(c4)
a5=A.cm(c4)
A.p1(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.b8(q,r)
case 2:return A.b7(o.at(-1),r)}})
return A.b9($async$po,r)},
y0(){var s=v.G
A.c(s.window).addEventListener("error",A.a4(new A.oY()))
A.c(s.window).addEventListener("unhandledrejection",A.a4(new A.oZ()))},
d7(a){if($.tA===a)return
$.tA=a
$.F.j().setAttribute("data-boot-phase",a)},
tW(){var s,r,q=$.cG.j().gba(),p=$.F.j(),o=A.j0().gbf().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.y))
p.setAttribute("data-renderer-diagnostics",B.r.bb(q.D(),null))
p=$.bb
s=p==null?null:p.x
if(s!=null)$.F.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jZ
r=p==null?null:p.y
if(r!=null)$.F.j().setAttribute("data-renderer-frame-submits",A.q(r))},
qN(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bp.j().a!==B.A){A.eK("save unavailable during rupture")
return}try{r=$.qq.j()
q=$.T.j()
p=t.N
o=t.z
s=A.w(p,o)
n=$.aD
m=$.eQ()
l=$.bT
k=$.dU
j=$.hc.j().d
j=j==null?null:j.a.a
i=$.hc.j().d
J.bV(s,"player",new A.iy(n,m,l,k,j,i==null?null:i.b).D())
n=$.aN.j()
m=A.q8(n.b,p)
l=A.q8(n.c,t.g)
n=n.e
J.bV(s,"visitors",new A.j9(m,l,n==null?null:new A.hm(n.a,n.b,n.d,n.f,n.e,n.r)).D())
n=$.jR.j().b
n=A.N(n,A.o(n).c)
B.a.a1(n)
J.bV(s,"ambient",n)
n=A.N($.p7,A.o($.p7).c)
B.a.a1(n)
J.bV(s,"unverifiables",n)
n=$.qw
if(n!=null)J.bV(s,"ending",A.V(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.rm(q.c).D()
k=q.d
r.m5(A.rJ(s,A.V(["houseSeed",n,"runSeed",m,"house",l,"time",A.V(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.D(),"journal",q.e.D(),"difficulty",q.r.D()],p,o),2))
A.eK(a)}catch(h){A.eK("save failed")}},
eK(a){var s=A.i(A.c(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.vC(B.cM,new A.p4(s),t.H)},
p1(a,b){var s,r,q,p
A.d7("error")
s=A.q(a)
r=A.zD(s,"\n"," ")
s=$.qx
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.c(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.F.j().setAttribute("data-boot-error",p)
A.c(s.console).error(p)},
tv(){var s,r
if($.qs)return
$.qs=!0
s=$.bG
r=s==null
if(!r)s.hW()
if(!r)s.eb("music")
B.a.k($.ck,"arm")},
eH(){var s=0,r=A.ba(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$eH=A.bc(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.aa(A.eG(),$async$eH)
case 2:o=null
q=4
s=7
return A.aa(A.aE(A.c(A.c(v.G.window).fetch("res/manifest.json")),t.m),$async$eH)
case 7:n=b
i=A
s=8
return A.aa(A.aE(A.c(n.json()),t.X),$async$eH)
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
if(k!=null&&typeof k==="string"){l=A.i(A.c(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.C(k)}s=9
return A.aa(A.lp(A.f([A.p0(o),A.oX(o)],t.iw),t.H),$async$eH)
case 9:return A.b8(null,r)
case 1:return A.b7(p.at(-1),r)}})
return A.b9($async$eH,r)},
eG(){var s=0,r=A.ba(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eG=A.bc(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.es[f]
p=7
s=10
return A.aa(A.aE(A.c(A.c(i.window).fetch(n)),h),$async$eG)
case 10:m=a0
s=11
return A.aa(A.aE(A.c(m.text()),g),$async$eG)
case 11:l=a0
k=A.v1(B.r.bw(l,null))
e=$.X.b
if(e===$.X)A.k(A.a1(""))
k.e0(e)
e=$.F.b
if(e===$.F)A.k(A.a1(""))
e.setAttribute("data-house-manifest","validated")
e=$.F.b
if(e===$.F)A.k(A.a1(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.aa(A.k0(),$async$eG)
case 12:s=13
return A.aa(A.k1(),$async$eG)
case 13:s=1
break
p=2
s=9
break
case 7:p=6
b=o.pop()
j=A.af(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:$.F.j().setAttribute("data-house-manifest","unavailable")
A.c(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.b8(q,r)
case 2:return A.b7(o.at(-1),r)}})
return A.b9($async$eG,r)},
k0(){var s=0,r=A.ba(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$k0=A.bc(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.em[c]
p=7
s=10
return A.aa(A.aE(A.c(A.c(g.window).fetch(n)),f),$async$k0)
case 10:m=b1
s=11
return A.aa(A.aE(A.c(m.text()),e),$async$k0)
case 11:l=b1
b=B.r.bw(l,null)
b=h.b(b)?b:A.cH("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.cH("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aO(a)?a:A.cH("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.cH("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.az(a,!0,d):A.cH("assets is not a list")
a4=A.I(a3)
a5=a4.i("O<1,c6>")
a3=A.N(new A.O(a3,a4.i("c6(1)").a(A.zl()),a5),a5.i("a6.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.az(a,!0,d):A.cH("placements is not a list")
a5=A.I(a4)
a6=a5.i("O<1,c_>")
a4=A.N(new A.O(a4,a5.i("c_(1)").a(A.zm()),a6),a6.i("a6.E"))
a4.$flags=1
k=new A.lH(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.k(A.a1(""))
k.e0(a1)
$.jY=k
a1=$.bb
if(a1!=null)a1.ib(k)
a1=$.F.b
if(a1===$.F)A.k(A.a1(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.F.b
if(a1===$.F)A.k(A.a1(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.F.b
if(a1===$.F)A.k(A.a1(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.af(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.F.j().setAttribute("data-house-inventory","unavailable")
A.c(g.console).warn("authored house inventory unavailable: "+A.q(a8))
case 1:return A.b8(q,r)
case 2:return A.b7(o.at(-1),r)}})
return A.b9($async$k0,r)},
k1(){var s=0,r=A.ba(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$k1=A.bc(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.jY
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.eG[a4]
p=7
s=10
return A.aa(A.aE(A.c(A.c(a1.window).fetch(m)),a2),$async$k1)
case 10:l=b5
s=11
return A.aa(A.aE(A.c(l.text()),e),$async$k1)
case 11:k=b5
a5=B.r.bw(k,null)
a5=a0.b(a5)?a5:A.eE("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.az(a6,!0,a3):A.eE("emitters is not a list")
a8=A.I(a7)
a9=a8.i("O<1,c5>")
a7=A.N(new A.O(a7,a8.i("c5(1)").a(A.zB()),a9),a9.i("a6.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aO(a6)?a6:A.eE("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.eE("sourceRef is not a string")
j=new A.lN(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.k(A.a1(""))
j.m1(a7,b2)
$.tK=j
i=A.w(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.p)(a7),++b0){h=a7[b0]
for(a9=h.f.gO(),a9=a9.gu(a9);a9.m();){g=a9.gp()
J.bV(i,h.a+":"+g.a,A.f([g.b],c))}}a7=$.X.b
if(a7===$.X)A.k(A.a1(""))
a8=A.v_(i)
a9=new A.kv(a7,A.cn(B.by,e,d),a8)
a9.iL(a8,a7,B.by)
$.oC=a9
a7=$.bG
if(a7!=null){a7.ch=a9
a7.b8()}a7=$.F.b
if(a7===$.F)A.k(A.a1(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.F.b
if(a7===$.F)A.k(A.a1(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.F.b
if(a7===$.F)A.k(A.a1(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.F.b
if(a7===$.F)A.k(A.a1(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.af(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.oC=null
$.F.j().setAttribute("data-audio-planner","unavailable")
$.F.j().setAttribute("data-house-soundscape","unavailable")
A.c(a1.console).warn("authored house soundscape unavailable: "+A.q(n))
case 1:return A.b8(q,r)
case 2:return A.b7(o.at(-1),r)}})
return A.b9($async$k1,r)},
qv(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.P(t.a.b(s)?s:new A.bY(s,A.I(s).i("bY<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.C(q))}},
oX(a){var s=0,r=A.ba(t.H),q,p,o,n,m,l,k,j,i
var $async$oX=A.bc(function(b,c){if(b===1)return A.b7(c,r)
for(;;)switch(s){case 0:k=t.N
j=A.w(k,k)
k=a==null
A.qv(A.i(k?null:a.sfx),j,"")
A.qv(A.i(k?null:a.ir),j,"ir-")
q=A.i(k?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")j.l(0,"music","res/"+A.C(p))
i=$
s=2
return A.aa(A.kz(j,$.X.j()),$async$oX)
case 2:o=i.bG=c
o.ch=$.oC
o.b8()
A.yp(o)
k=A.qI("brightness")
n=A.q3(k==null?"":k)
m=A.qI("high-contrast")==="true"
l=A.qI("strong-highlights")==="true"
if(n!=null){$.d5.j().e6("brightness",n)
A.tt("brightness",n)}k=$.d5.j()
q=k.ch
if(q!=null)q.checked=m
k=k.CW
if(k!=null)k.checked=l
A.oB("high-contrast",m)
A.oB("strong-highlights",l)
if($.qs){o.hW()
o.eb("music")}return A.b8(null,r)}})
return A.b9($async$oX,r)},
qR(a,b){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
qI(a){var s,r
try{s=A.bq(A.c(A.c(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
tt(a,b){var s
if(a!=="brightness")return
s=A.i(A.c(v.G.document).documentElement)
if(t.m.b(s))A.c(s.style).setProperty("filter","brightness("+A.q(B.d.K(b,0.6,1.4))+")")},
oB(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.i(A.c(v.G.document).documentElement)
if(r!=null)A.an(A.c(r.classList).toggle(s,b))},
qQ(a,b){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
qH(a){var s,r
try{s=A.bq(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
yp(a){var s,r,q,p,o,n,m,l,k=A.w(t.N,t.i)
for(s=0;s<5;++s){r=B.er[s]
q=A.qH(r)
p=A.q3(q==null?"":q)
if(p!=null)k.l(0,r,B.d.K(p,0,1))}o=A.qH("muted")==="true"
n=A.qH("mono")==="true"
q=k.h(0,"master")
m=k.h(0,"voice")
l=k.h(0,"effects")
a.aT(k.h(0,"ambience"),l,q,k.h(0,"music"),o,m)
a.e7(n)
for(q=new A.U(k,k.$ti.i("U<1,2>")).gu(0);q.m();){m=q.d
m.toString
l=$.d5.b
if(l===$.d5)A.k(A.a1(""))
l.e6(m.a,m.b)}q=$.d5.j()
m=q.ax
if(m!=null)m.checked=o
q=q.ay
if(q!=null)q.checked=n},
p0(a){var s=0,r=A.ba(t.H),q,p,o
var $async$p0=A.bc(function(b,c){if(b===1)return A.b7(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.w(p,p)
A.qv(A.i(a==null?null:a.tex),o,"")
p=$.eJ
p=p==null?null:p.aA(o)
if(p==null)p=A.pU(t.H)
q=$.bb
q=q==null?null:q.aA(o)
s=2
return A.aa(A.lp(A.f([p,q==null?A.pU(t.H):q],t.iw),t.H),$async$p0)
case 2:return A.b8(null,r)}})
return A.b9($async$p0,r)},
tY(){var s,r,q=v.G,p=A.a(A.c(q.window).innerWidth),o=A.a(A.c(q.window).innerHeight)
q=$.F.j()
s=p>0?p:800
q.width=s
s=$.F.j()
q=o>0?o:600
s.height=q
q=$.eJ
if(q!=null)q.aJ(A.a($.F.j().width),A.a($.F.j().height))
$.cG.j().aJ(A.a($.F.j().width),A.a($.F.j().height))
q=$.bb
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.F.j().setAttribute("data-renderer-surface",r)},
ym(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
A.b6(c2)
try{s=c2
if(!$.tJ){$.qC=s
$.tJ=!0}e=s
d=$.qC
if(typeof e!=="number")return e.ad()
r=(e-d)/1000
$.qC=s
e=r
if(typeof e!=="number")return e.cw()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.ac()
if(e>0.25)r=0.25
A.yJ(r)
if(!$.qE&&$.as==null){e=$.cj
d=r
if(typeof d!=="number")return A.k7(d)
d=$.cj=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.cw()
c=c<10}else c=!1
if(!c)break
$.qG=$.eQ()
d=$.T.b
if(d===$.T)A.k(A.a1(""))
d.kk(0.008333333333333333)
d=$.uK()
c=$.T.b
if(c===$.T)A.k(A.a1(""))
c=c.gap()
b=$.T.b
if(b===$.T)A.k(A.a1(""))
d=d.d_(c.a,b.gap().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){p=d[a]
B.a.k($.ck,"clock:"+p.a)}d=$.uL()
c=$.T.b
if(c===$.T)A.k(A.a1(""))
c=c.gap()
b=$.T.b
if(b===$.T)A.k(A.a1(""))
d=d.d_(c.a,b.gap().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){o=d[a]
B.a.k($.ck,"service:"+o.a+":"+o.b)}A.yM()
d=$.aN.b
if(d===$.aN)A.k(A.a1(""))
c=$.T.b
if(c===$.T)A.k(A.a1(""))
d.f=c.r.c>=0.5
d=d.d
a0=A.az(d,!1,e)
a0.$flags=3
a1=a0
B.a.H(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.k(A.a1(""))
d.lI(a1)}A.yI()
A.yL()
A.yK()
A.yH(0.008333333333333333)
d=$.eC.b
if(d===$.eC)A.k(A.a1(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.bp.b
if(d===$.bp)A.k(A.a1(""))
n=d.a!==B.A
c=$.X.b
if(c===$.X)A.k(A.a1(""))
d.kl(0.008333333333333333,c)
if(n){d=$.bp.b
if(d===$.bp)A.k(A.a1(""))
d=d.e}else d=!1
if(d)A.tZ(!0)
d=$.cj-0.008333333333333333
$.cj=d
c=q
if(typeof c!=="number")return c.U()
q=c+1}m=B.d.K(d/0.008333333333333333,0,1)
e=$.qU=A.rW($.uM(),$.eQ(),m)
l=$.bG
if(l!=null){d=l
c=Math.sin($.bT)
b=Math.cos($.bT)
a2=A.c(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aQ(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.ie($.aD)
for(e=$.ck.length,a=0;a<$.ck.length;$.ck.length===e||(0,A.p)($.ck),++a){k=$.ck[a]
A.xN(l,k)}B.a.H($.ck)
$.F.j().setAttribute("data-audio-spatial-active",""+l.CW.a)
e=$.F.j()
d=l.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.F.j()
e=l.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}j=$.eJ
if(j!=null){$.bF.j().dM($.hj(),$.bT,$.dU)
e=$.as===$.jU.j()?1:0
j.c9=e
$.tQ=r
$.cG.j().aM(A.q5($.T.j().gdQ()))}else if($.bo.j().a===B.U){$.bF.j().dM($.hj(),$.bT,$.dU)
e=$.bb
if(e!=null){d=$.bF.j()
c=d.a
a3=new A.A(c.a,c.b,c.c)
c=d.b
a4=new A.A(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.rz(a3,a4,new A.A(d.a,d.b,d.c))
a7=A.q1(a5,60,1.0471975511965976,0.1)
e.go=new A.e6(a6,a7,a7.X(0,a6),a3,a4,0.1,60,a5)}e=$.bb
if(e!=null)e.iq($.X.j(),$.aD)
e=$.bb
if(e!=null)e.ic($.X.j(),$.aD,$.hj(),$.dT.j().gbm(),Math.sin(3.141592653589793*$.dT.j().gbm()))
if($.tP!==$.bp.j().a){$.tP=$.bp.j().a
$.qK=$.qK+1}e=$.bb
if(e!=null){d=s
if(typeof d!=="number")return d.m9()
d/=1000
c=$.qK
b=A.a(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.k(A.ay(d,"timeSeconds",null))
if(b<0)A.k(A.y("frame clock seeds must be non-negative",null))
e.k4=d
e.ok=c
e.p1=b}e=$.bb
if(e!=null){d=$.bp.j()
c=$.qJ
a8=d.a
a9=d.gea()
b0=a9>0?B.d.K(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.aB
b=a8===B.J?0.45:1
if(d>=1)b3=a8===B.W?b0:1
else b3=0
if(d>=2)d=a8===B.az?b0:1
else d=0
b4=b1?320:0
b5=b1?5:8
b6=b2?1:0
b7=b2?b0:0
b8=b2?b0:0
b9=b2?b0:0
c0=b2?b0:0
e.k1=new A.iA(b,0.38,0.28,0.18,0.015,b3,d,b4,b5,b6,b7,b8,b9,c0,b2?b0:0,c)}$.cG.j().aM(A.q5($.T.j().gdQ()))
i=$.bb
if(i!=null){h=i.gl5()
if(h!=null){$.F.j().setAttribute("data-renderer-frame-stats",h)
e=$.F.j()
d=i.gl4()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.d7("running")
e=$.aM.j()
e.e=e.d=0
e.c.H(0)
A.a(A.c(v.G.window).requestAnimationFrame(A.a4(A.ug())))}catch(c1){g=A.af(c1)
f=A.cm(c1)
A.p1(g,f)}},
xN(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.lD("confirm")
break
case"ambient-winnow":a.dO("winnow",0.28)
break
case"ambient-gate":a.dO("gate",0.22)
break
case"clock:tick":A.qF(a,p,"tick")
break
case"clock:chime":A.qF(a,p,"chime")
break
default:if(B.b.Z(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.e(s,1)
q=s[1]
if(2>=r)return A.e(s,2)
A.qF(a,q,s[2])}}}},
qF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=$.tK,h=$.jY
if(i==null||h==null)return
s=i.kR(b)
r=$.X.j()
q=h.c
p=s.b
o=r.e.h(0,p)
if(o==null)A.k(A.l("sound room missing: "+p))
n=o.d.U(0,s.d.X(0,q))
m=$.oC
if(m==null){r=s.f.h(0,c)
if(r==null)r=A.k(A.l("sound emitter "+s.a+" has no cue for "+c))
a.lE(r,n,s.e,p)
return}r=b+":"+c
q=$.tz
$.tz=q+1
p=A.v0(B.cj,r,r+":"+q,n,A.xB(b,c),q,p)
q=$.aD
q=A.uX($.hj(),q)
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
l=l.h(j,B.c.W(A.yz(q,p.f),l.gq(j)))
p=p.e
A.ao(k.a,t.N)
a.hO(l,new A.b(p.a,p.b,p.c),s.e,1,r,k.c,k.b)},
xB(a,b){var s,r,q,p=$.T.j().b
for(s=new A.de(a+":"+b),r=t.gS,s=new A.bx(s,s.gq(0),r.i("bx<M.E>")),r=r.i("M.E");s.m();){q=s.d
p=A.ue(p,q==null?r.a(q):q)}return p},
yJ(a){var s=$.qx
if(s==null)return
s.textContent=""+B.d.aD(a>0?1/a:0)+" fps"},
yH(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
if($.u1||$.as!=null||$.aC.j().Q){$.ka().a=new A.b(0,0,0)
return}s=$.aM.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga4():p
n=$.aM.j().d
m=$.aM.j().e
$.bT=$.bT+n*0.0028
s=$.dU-m*0.0028
$.dU=s
$.dU=B.d.K(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.bT)+l*Math.sin($.bT),0,l*Math.cos($.bT)-s*Math.sin($.bT)).ga4().X(0,2)
s=$.ka()
if(!isFinite(a3)||a3<0)A.k(A.ay(a3,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.ay(j,"rate","must be finite and positive"))
l=Math.exp(-j*a3)
i=s.a
l=i.U(0,k.ad(0,i).X(0,1-l))
s.a=l
h=$.hc.j().lo($.X.j(),$.aD,$.eQ(),l.X(0,a3))
$.qP=h.a
if($.bp.j().a!==B.aC&&$.bp.j().a!==B.J)$.aD=h.b
$.bF.j().dM($.eQ(),$.bT,$.dU)
s=$.bF.j()
l=$.X.j()
g=A.zx(s,$.aD,l,$.jY)
$.tq.j().is(g.c)
f=a2
e=a2
d=a2
c=a2
switch(g.a.a){case 0:f=A.r1($.bF.j(),$.X.j(),$.aD)
break
case 1:e=A.ul($.bF.j(),$.X.j(),$.aD)
break
case 2:d=A.um($.bF.j(),$.X.j(),$.aD)
break
case 3:s=$.bF.j()
l=$.X.j()
i=$.jY
c=A.uk(s,$.aD,l,i)
break
case 4:break}s=$.to.j()
b=$.kb().i6($.T.j().gap().a)
l=b==null?a2:b.h(0,"status")
s.dY(l,$.aD==="living-room")
if($.aM.j().c.aa(0,"KeyE")){s=$.T.j().gap()
l=e==null
i=l?a2:e.a
a=B.a.a7($.aN.j().fd(21),$.aN.j().gld())
if(s.a===21&&i==="front-door"&&a){s=$.bp.j()
$.X.j()
s.iC(B.cF,A.ao(s.c,t.N))
B.a.k($.ck,"collapse")
A.eK("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.T.j().iA(1,1)){f.d=!0
s=$.eC.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.eF
if(s!=null)s.cq(e.b)
s=$.bb
if(s!=null)s.dS($.X.j(),e.a)
s=$.bG
if(s!=null)s.b8()}else if(d!=null)if(d.w){s=$.T.j()
if(s.f.cC(1))d.w=!1}else d.w=!0
else if(c!=null){a0=c.y
if(a0==null)a0=c.a
$.ox.j().cz("noticed","you inspect "+a0)}}s=$.eC.j()
if(s.a!=null&&s.b>0){a1=$.eC.j().a
if(a1!=null&&A.r1($.bF.j(),$.X.j(),$.aD)!==a1){s=$.eC.j()
s.a=null
s.b=0}}},
yM(){var s,r,q,p,o,n,m,l,k,j=null
if($.aC.j().Q||$.as!=null||$.aN.j().e!=null)return
s=$.T.j().gap()
for(r=$.aN.j().fd(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o){n=r[o]
m=$.aN.b
if(m===$.aN)A.k(A.a1(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aN.b
if(r===$.aN)A.k(A.a1(""))
l=r.kq(n)
if(!(l instanceof A.j5))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.e(r,q)
k=r[q].b}else k=j
if(k==null)return
A.rp(A.c(v.G.document),"exitPointerLock",j,j,j,j)
$.ka().a=new A.b(0,0,0)
r=$.aC.b
if(r===$.aC)A.k(A.a1(""))
r.e8(n.a,k)
return}},
yq(){var s=$.aN.j().e,r=s==null,q=r?null:s.gc6()
if(r||q==null)return
$.aC.j().e8(s.a.a,q)
if(s.d!==B.L){$.aC.j().cA(q)
A.qO()}A.eK("restored visitor")},
yI(){var s,r,q,p,o=$.T.j().gap(),n=$.jR.j().kP(o.a,o.b)
if(n.length===0)return
s=B.a.gam(n)
$.jR.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.ox.j().cz(q,s.e)
p=A.yS(r)
if(p!=null)B.a.k($.ck,"ambient-"+p)},
yL(){var s,r,q,p,o=$.T.j().gap()
if(o.b<20)return
s=o.a
if(!$.p7.k(0,s))return
r=$.kb().f
r===$&&A.h()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.az(q,!0,t.N):B.m
p=A.zv(r,$.T.j().b,s)
if(p!=null)$.ox.j().cz("noticed",p)},
tZ(a){var s,r,q,p,o
if($.qw!=null)return
s=$.T.j().gap()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("aH<2>")
o=A.vt(new A.l6(s.a,1-r,new A.Q(new A.aH(q,p),p.i("r(n.E)").a(new A.p2()),p.i("Q<n.E>")).gq(0),$.T.j().r.d,a))
if(o==null)return
A.tV(o)
A.qN("ending recorded")},
tV(a){var s,r,q
$.qw=a
$.u1=!0
$.ka().a=new A.b(0,0,0)
A.qD($.jS.j())
s=$.jS.j()
r=$.kb().w
r===$&&A.h()
q=r.h(0,a.a.b)
s.iu(a,t.j.b(q)?A.az(q,!0,t.N):B.m)},
xH(a){var s,r,q,p,o
A:{if("open"===a){s=B.a2
break A}if("chain"===a){s=B.aZ
break A}if("through-door"===a){s=B.b_
break A}if("letterbox"===a){s=B.b0
break A}s=B.Q
break A}r=$.aN.j().kA(s)
if(s===B.a2){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.eF
if(p!=null)p.cq(q.b)
p=$.bb
if(p!=null)p.dS($.X.j(),q.a)
p=$.bG
if(p!=null)p.b8()}}if(!(r instanceof A.j4)||s===B.Q){$.aC.j().cg()
$.aM.j().bN($.F.j())
return}o=r.a.gc6()
if(o==null){A.qu()
$.aC.j().cg()
$.aM.j().bN($.F.j())
return}$.aC.j().cA(o)
A.qO()},
xK(){var s,r=$.aN.j().km()
if(!(r instanceof A.fB)||r.b){A.qu()
$.aC.j().cg()
$.aM.j().bN($.F.j())
return}s=r.a.gc6()
if(s==null){A.qu()
$.aC.j().cg()
$.aM.j().bN($.F.j())
return}$.aC.j().cA(s)
A.qO()},
qO(){var s,r,q,p,o=$.aC.j(),n=A.c(v.G.document),m=A.f([],t.fR)
for(s=$.jT.j().e4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
m.push(new A.b5(p.a,B.a.gN(p.c).n(0)))}o.it(n,m)},
xI(a){var s,r,q,p=$.aN.j().kB(a,!0,$.jT.j())
if(p==null)return
s=$.jT.j().kJ(p,B.e3)
r=$.aC.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.h()
r.textContent=q},
qu(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.eF
if(s!=null)s.cq(r.b)
s=$.bb
if(s!=null)s.dS($.X.j(),r.a)
s=$.bG
if(s!=null)s.b8()}},
yK(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bp.b
if(k===$.bp)A.k(A.a1(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fW:function fW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
oj:function oj(){},
ok:function ok(a){this.a=a},
ol:function ol(a){this.a=a},
et:function et(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pp:function pp(a){this.a=a},
pq:function pq(){},
pr:function pr(){},
pB:function pB(){},
pC:function pC(){},
pD:function pD(){},
pE:function pE(){},
pF:function pF(){},
pG:function pG(){},
pH:function pH(){},
pI:function pI(){},
ps:function ps(){},
pt:function pt(){},
pu:function pu(){},
pv:function pv(){},
pw:function pw(){},
px:function px(){},
py:function py(){},
pz:function pz(){},
pA:function pA(){},
oY:function oY(){},
oZ:function oZ(){},
p4:function p4(a){this.a=a},
p2:function p2(){},
rp(a,b,c,d,e,f){var s=a[b]()
return s},
rq(a,b,c){var s=null
return c.a(A.rp(a,b,s,s,s,s))},
vg(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
vf(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
uf(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
pM(a,b){var s=B.d.aI(a),r=A.uf(s,b),q=A.uf(s+1,b),p=B.d.K(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
ue(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
yS(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
z6(a){var s,r,q,p,o,n,m,l=B.r.bw(a,null),k=t.f
if(!k.b(l))throw A.d(B.dr)
s=t.N
r=t.z
q=A.b1(l,s,r)
p=A.w(s,t.P)
for(o=0;o<11;++o){n=B.ek[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.w(s,r))
else if(k.b(m))p.l(0,n,A.b1(m,s,r))
else throw A.d(A.ag('text.json section "'+n+'" must be an object',null,null))}return p},
zv(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbk(a)
s=new A.eu()
s.cD((b^274953^c)>>>0)
r=s.au(a.length)
if(!(r>=0&&r<a.length))return A.e(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.pW.prototype={}
J.i8.prototype={
V(a,b){return a===b},
gG(a){return A.fm(a)},
n(a){return"Instance of '"+A.iC(a)+"'"},
gP(a){return A.cl(A.qz(this))}}
J.ic.prototype={
n(a){return String(a)},
gG(a){return a?519018:218159},
gP(a){return A.cl(t.y)},
$ia3:1,
$ir:1}
J.f7.prototype={
V(a,b){return null==b},
n(a){return"null"},
gG(a){return 0},
$ia3:1,
$ial:1}
J.f8.prototype={$ia0:1}
J.cR.prototype={
gG(a){return 0},
gP(a){return B.hm},
n(a){return String(a)}}
J.ix.prototype={}
J.dG.prototype={}
J.cr.prototype={
n(a){var s=a[$.us()]
if(s==null)s=a[$.eP()]
if(s==null)return this.iE(a)
return"JavaScript function for "+J.e0(s)},
$idk:1}
J.eh.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.ei.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.t.prototype={
c4(a,b){return new A.bY(a,A.I(a).i("@<1>").E(b).i("bY<1,2>"))},
k(a,b){A.I(a).c.a(b)
a.$flags&1&&A.bd(a,29)
a.push(b)},
lK(a,b){var s
a.$flags&1&&A.bd(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.rG(b,null))
return a.splice(b,1)[0]},
aa(a,b){var s
a.$flags&1&&A.bd(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ab(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.I(a).i("n<1>").a(b)
a.$flags&1&&A.bd(a,"addAll",2)
if(Array.isArray(b)){this.iZ(a,b)
return}for(s=J.P(b);s.m();)a.push(s.gp())},
iZ(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.ar(a))
for(r=0;r<s;++r)a.push(b[r])},
H(a){a.$flags&1&&A.bd(a,"clear","clear")
a.length=0},
bK(a,b,c){var s=A.I(a)
return new A.O(a,s.E(c).i("1(2)").a(b),s.i("@<1>").E(c).i("O<1,2>"))},
b2(a,b){var s,r=A.c7(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.q(a[s]))
return r.join(b)},
bE(a,b,c,d){var s,r,q
d.a(b)
A.I(a).E(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.ar(a))}return r},
cf(a,b,c){var s,r,q,p=A.I(a)
p.i("r(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.ar(a))}p=c.$0()
return p},
T(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
gam(a){if(a.length>0)return a[0]
throw A.d(A.i9())},
gN(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.i9())},
gbk(a){var s=a.length
if(s===1){if(0>=s)return A.e(a,0)
return a[0]}if(s===0)throw A.d(A.i9())
throw A.d(A.vN())},
R(a,b){var s,r
A.I(a).i("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.ar(a))}return!1},
a7(a,b){var s,r
A.I(a).i("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.ar(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.I(a)
n.i("j(1,1)?").a(b)
a.$flags&2&&A.bd(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.y5()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.ac()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eN(b,2))
if(p>0)this.jV(a,p)},
a1(a){return this.Y(a,null)},
jV(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cB(a,b){var s,r,q,p
a.$flags&2&&A.bd(a,"shuffle")
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
n(a){return A.pV(a,"[","]")},
gu(a){return new J.da(a,a.length,A.I(a).i("da<1>"))},
gG(a){return A.fm(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.bd(a,"set length","change the length of")
if(b<0)throw A.d(A.aV(b,0,null,"newLength",null))
if(b>a.length)A.I(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.pf(a,b))
return a[b]},
l(a,b,c){A.I(a).c.a(c)
a.$flags&2&&A.bd(a)
if(!(b>=0&&b<a.length))throw A.d(A.pf(a,b))
a[b]=c},
e2(a,b){return new A.c2(a,b.i("c2<0>"))},
hC(a,b){var s
A.I(a).i("r(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gP(a){return A.cl(A.I(a))},
$iG:1,
$in:1,
$iE:1}
J.ia.prototype={
m_(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.iC(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.m2.prototype={}
J.da.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.p(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iah:1}
J.dr.prototype={
F(a,b){var s
A.b6(b)
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
return s+0}throw A.d(A.aA(""+a+".toInt()"))},
kx(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aA(""+a+".ceil()"))},
aI(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aA(""+a+".floor()"))},
aD(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aA(""+a+".round()"))},
K(a,b,c){if(this.F(b,c)>0)throw A.d(A.qV(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
cr(a,b){var s
if(b>20)throw A.d(A.aV(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gck(a))return"-"+s
return s},
lZ(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aV(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.e(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.aA("Unexpected toString result: "+s))
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
iG(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.f3(a,b)},
L(a,b){return(a|0)===a?a/b|0:this.f3(a,b)},
f3(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aA("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cX(a,b){var s
if(a>0)s=this.c1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
k0(a,b){if(0>b)throw A.d(A.qV(b))
return this.c1(a,b)},
c1(a,b){return b>31?0:a>>>b},
gP(a){return A.cl(t.o)},
$iaG:1,
$iv:1,
$iaR:1}
J.f6.prototype={
gP(a){return A.cl(t.S)},
$ia3:1,
$ij:1}
J.id.prototype={
gP(a){return A.cl(t.i)},
$ia3:1}
J.ds.prototype={
bh(a,b,c,d){var s=A.fn(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a2(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aV(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
Z(a,b){return this.a2(a,b,0)},
C(a,b,c){return a.substring(b,A.fn(b,c,a.length))},
bP(a,b){return this.C(a,b,null)},
dX(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.vR(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.vS(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
X(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.cB)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
lB(a,b,c){var s=b-a.length
if(s<=0)return a
return this.X(c,s)+a},
cj(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aV(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ci(a,b){return this.cj(a,b,0)},
v(a,b){return A.zC(a,b,0)},
F(a,b){var s
A.C(b)
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
gP(a){return A.cl(t.N)},
gq(a){return a.length},
$ia3:1,
$iaG:1,
$irB:1,
$im:1}
A.d_.prototype={
gu(a){return new A.eT(J.P(this.gaX()),A.o(this).i("eT<1,2>"))},
gq(a){return J.b0(this.gaX())},
gI(a){return J.r6(this.gaX())},
gM(a){return J.uT(this.gaX())},
T(a,b){return A.o(this).y[1].a(J.kc(this.gaX(),b))},
n(a){return J.e0(this.gaX())}}
A.eT.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iah:1}
A.dd.prototype={
gaX(){return this.a}}
A.fK.prototype={$iG:1}
A.fI.prototype={
h(a,b){return this.$ti.y[1].a(J.b_(this.a,b))},
l(a,b,c){var s=this.$ti
J.bV(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.uU(this.a,b)},
k(a,b){var s=this.$ti
J.hk(this.a,s.c.a(s.y[1].a(b)))},
Y(a,b){var s
this.$ti.i("j(2,2)?").a(b)
s=b==null?null:new A.o_(this,b)
J.uV(this.a,s)},
$iG:1,
$iE:1}
A.o_.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("j(1,1)")}}
A.bY.prototype={
c4(a,b){return new A.bY(this.a,this.$ti.i("@<1>").E(b).i("bY<1,2>"))},
gaX(){return this.a}}
A.dt.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.de.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.nd.prototype={}
A.G.prototype={}
A.a6.prototype={
gu(a){var s=this
return new A.bx(s,s.gq(s),A.o(s).i("bx<a6.E>"))},
gI(a){return this.gq(this)===0},
R(a,b){var s,r,q=this
A.o(q).i("r(a6.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.T(0,r)))return!0
if(s!==q.gq(q))throw A.d(A.ar(q))}return!1},
b2(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.T(0,0))
if(o!==p.gq(p))throw A.d(A.ar(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.T(0,q))
if(o!==p.gq(p))throw A.d(A.ar(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.T(0,q))
if(o!==p.gq(p))throw A.d(A.ar(p))}return r.charCodeAt(0)==0?r:r}},
e1(a,b){return this.iD(0,A.o(this).i("r(a6.E)").a(b))},
bK(a,b,c){var s=A.o(this)
return new A.O(this,s.E(c).i("1(a6.E)").a(b),s.i("@<a6.E>").E(c).i("O<1,2>"))},
bj(a,b){var s=A.o(this).i("a6.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
bi(a){return this.bj(0,!0)},
b4(a){var s,r=this,q=A.pZ(A.o(r).i("a6.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.T(0,s))
return q}}
A.fx.prototype={
gjm(){var s=J.b0(this.a),r=this.c
if(r==null||r>s)return s
return r},
gk7(){var s=J.b0(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.b0(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
T(a,b){var s=this,r=s.gk7()+b
if(b<0||r>=s.gjm())throw A.d(A.lY(b,s.gq(0),s,"index"))
return J.kc(s.a,r)},
bj(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ax(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.ro(0,n):J.rn(0,n)}r=A.c7(s,m.T(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.T(n,o+q))
if(m.gq(n)<l)throw A.d(A.ar(p))}return r},
bi(a){return this.bj(0,!0)}}
A.bx.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ax(q),o=p.gq(q)
if(r.b!==o)throw A.d(A.ar(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.T(q,s);++r.c
return!0},
$iah:1}
A.ct.prototype={
gu(a){return new A.du(J.P(this.a),this.b,A.o(this).i("du<1,2>"))},
gq(a){return J.b0(this.a)},
gI(a){return J.r6(this.a)},
T(a,b){return this.b.$1(J.kc(this.a,b))}}
A.dh.prototype={$iG:1}
A.du.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.O.prototype={
gq(a){return J.b0(this.a)},
T(a,b){return this.b.$1(J.kc(this.a,b))}}
A.Q.prototype={
gu(a){return new A.J(J.P(this.a),this.b,this.$ti.i("J<1>"))}}
A.J.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iah:1}
A.c2.prototype={
gu(a){return new A.fD(J.P(this.a),this.$ti.i("fD<1>"))}}
A.fD.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iah:1}
A.ai.prototype={
sq(a,b){throw A.d(A.aA("Cannot change the length of a fixed-length list"))},
k(a,b){A.br(a).i("ai.E").a(b)
throw A.d(A.aA("Cannot add to a fixed-length list"))}}
A.cf.prototype={
l(a,b,c){A.o(this).i("cf.E").a(c)
throw A.d(A.aA("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.d(A.aA("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).i("cf.E").a(b)
throw A.d(A.aA("Cannot add to an unmodifiable list"))},
Y(a,b){A.o(this).i("j(cf.E,cf.E)?").a(b)
throw A.d(A.aA("Cannot modify an unmodifiable list"))}}
A.es.prototype={}
A.fs.prototype={
gq(a){return J.b0(this.a)},
T(a,b){var s=this.a,r=J.ax(s)
return r.T(s,r.gq(s)-1-b)}}
A.hb.prototype={}
A.b5.prototype={$r:"+(1,2)",$s:1}
A.a_.prototype={$r:"+(1,2,3)",$s:2}
A.fX.prototype={$r:"+(1,2,3,4)",$s:3}
A.eV.prototype={}
A.e8.prototype={
gI(a){return this.gq(this)===0},
gM(a){return this.gq(this)!==0},
n(a){return A.q0(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.vb()},
gO(){return new A.ci(this.kU(),A.o(this).i("ci<R<1,2>>"))},
kU(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gS(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("R<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.R(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bd(a,b,c,d){var s=A.w(c,d)
this.ai(0,new A.kV(this,A.o(this).E(c).E(d).i("R<1,2>(3,4)").a(b),s))
return s},
$iW:1}
A.kV.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a7.prototype={
gq(a){return this.b.length},
geF(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a3(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.a3(b))return null
return this.b[this.a[b]]},
ai(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geF()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gS(){return new A.dP(this.geF(),this.$ti.i("dP<1>"))},
gao(){return new A.dP(this.b,this.$ti.i("dP<2>"))}}
A.dP.prototype={
gq(a){return this.a.length},
gI(a){return 0===this.a.length},
gM(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dQ(s,s.length,this.$ti.i("dQ<1>"))}}
A.dQ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iah:1}
A.f0.prototype={
bo(){var s=this,r=s.$map
if(r==null){r=new A.f9(s.$ti.i("f9<1,2>"))
A.ua(s.a,r)
s.$map=r}return r},
h(a,b){return this.bo().h(0,b)},
ai(a,b){this.$ti.i("~(1,2)").a(b)
this.bo().ai(0,b)},
gS(){var s=this.bo()
return new A.a5(s,A.o(s).i("a5<1>"))},
gao(){var s=this.bo()
return new A.aH(s,A.o(s).i("aH<2>"))},
gq(a){return this.bo().a}}
A.eW.prototype={
k(a,b){A.o(this).c.a(b)
A.vc()}}
A.c4.prototype={
gq(a){return this.b},
gI(a){return this.b===0},
gM(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dQ(s,s.length,r.$ti.i("dQ<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b4(a){return A.q_(this,this.$ti.c)}}
A.mH.prototype={
$0(){return B.d.aI(1000*this.a.now())},
$S:30}
A.ft.prototype={}
A.nC.prototype={
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
A.fi.prototype={
n(a){return"Null check operator used on a null value"}}
A.ie.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iX.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mv.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eZ.prototype={}
A.fZ.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icd:1}
A.cL.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ur(r==null?"unknown":r)+"'"},
gP(a){var s=A.qX(this)
return A.cl(s==null?A.br(this):s)},
$idk:1,
gm8(){return this},
$C:"$1",
$R:1,
$D:null}
A.hz.prototype={$C:"$0",$R:0}
A.hA.prototype={$C:"$2",$R:2}
A.iT.prototype={}
A.iQ.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ur(s)+"'"}}
A.e5.prototype={
V(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.e5))return!1
return this.$_target===b.$_target&&this.a===b.a},
gG(a){return(A.k8(this.a)^A.fm(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.iC(this.a)+"'")}}
A.iJ.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bK.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gM(a){return this.a!==0},
gS(){return new A.a5(this,A.o(this).i("a5<1>"))},
gao(){return new A.aH(this,A.o(this).i("aH<2>"))},
gO(){return new A.U(this,A.o(this).i("U<1,2>"))},
a3(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.l8(a)},
l8(a){var s=this.d
if(s==null)return!1
return this.bG(s[this.bF(a)],a)>=0},
J(a,b){A.o(this).i("W<1,2>").a(b).ai(0,new A.mb(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.l9(b)},
l9(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bF(a)]
r=this.bG(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ed(s==null?q.b=q.cS():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ed(r==null?q.c=q.cS():r,b,c)}else q.lb(b,c)},
lb(a,b){var s,r,q,p,o=this,n=A.o(o)
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
lG(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.a3(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
aa(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.jU(this.c,b)
else return this.la(b)},
la(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bF(a)
r=n[s]
q=o.bG(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fa(p)
if(r.length===0)delete n[s]
return p.b},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cE()}},
ai(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ar(q))
s=s.c}},
ed(a,b,c){var s,r=A.o(this)
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
cT(a,b){var s=this,r=A.o(s),q=new A.mj(r.c.a(a),r.y[1].a(b))
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
bF(a){return J.bs(a)&1073741823},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
n(a){return A.q0(this)},
cS(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ipY:1}
A.mb.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.mj.prototype={}
A.a5.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cS(s,s.r,s.e,this.$ti.i("cS<1>"))}}
A.cS.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ar(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iah:1}
A.aH.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ap(s,s.r,s.e,this.$ti.i("ap<1>"))}}
A.ap.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ar(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iah:1}
A.U.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.fb(s,s.r,s.e,this.$ti.i("fb<1,2>"))}}
A.fb.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ar(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.R(s.a,s.b,r.$ti.i("R<1,2>"))
r.c=s.c
return!0}},
$iah:1}
A.f9.prototype={
bF(a){return A.z1(a)&1073741823},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.pk.prototype={
$1(a){return this.a(a)},
$S:7}
A.pl.prototype={
$2(a,b){return this.a(a,b)},
$S:69}
A.pm.prototype={
$1(a){return this.a(A.C(a))},
$S:25}
A.bQ.prototype={
gP(a){return A.cl(this.eD())},
eD(){return A.zb(this.$r,this.bW())},
n(a){return this.f7(!1)},
f7(a){var s,r,q,p,o,n=this.jr(),m=this.bW(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.rD(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
jr(){var s,r=this.$s
while($.om.length<=r)B.a.k($.om,null)
s=$.om[r]
if(s==null){s=this.jb()
B.a.l($.om,r,s)}return s},
jb(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.ib(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ao(j,k)}}
A.ev.prototype={
bW(){return[this.a,this.b]},
V(a,b){if(b==null)return!1
return b instanceof A.ev&&this.$s===b.$s&&J.ab(this.a,b.a)&&J.ab(this.b,b.b)},
gG(a){return A.cv(this.$s,this.a,this.b,B.l)}}
A.ew.prototype={
bW(){return[this.a,this.b,this.c]},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.ew&&s.$s===b.$s&&J.ab(s.a,b.a)&&J.ab(s.b,b.b)&&J.ab(s.c,b.c)},
gG(a){var s=this
return A.cv(s.$s,s.a,s.b,s.c)}}
A.ex.prototype={
bW(){return this.a},
V(a,b){if(b==null)return!1
return b instanceof A.ex&&this.$s===b.$s&&A.wY(this.a,b.a)},
gG(a){return A.cv(this.$s,A.w0(this.a),B.l,B.l)}}
A.o0.prototype={
cV(){var s=this.b
if(s===this)throw A.d(new A.dt("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a1(""))
return s}}
A.cT.prototype={
gP(a){return B.hf},
fe(a,b,c){return new Float32Array(a,b,c)},
$ia3:1,
$icT:1}
A.ek.prototype={$iek:1}
A.fg.prototype={
gkr(a){if(((a.$flags|0)&2)!==0)return new A.os(a.buffer)
else return a.buffer},
jx(a,b,c,d){var s=A.aV(b,0,c,d,null)
throw A.d(s)},
ek(a,b,c,d){if(b>>>0!==b||b>c)this.jx(a,b,c,d)}}
A.os.prototype={
fe(a,b,c){var s=A.vY(this.a,b,c)
s.$flags=3
return s}}
A.io.prototype={
gP(a){return B.hg},
$ia3:1}
A.aI.prototype={
gq(a){return a.length},
eY(a,b,c,d,e){var s,r,q=a.length
this.ek(a,b,q,"start")
this.ek(a,c,q,"end")
if(b>c)throw A.d(A.aV(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.y(e,null))
r=d.length
if(r-e<s)throw A.d(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibw:1}
A.fe.prototype={
h(a,b){A.cI(b,a,a.length)
return a[b]},
l(a,b,c){A.d6(c)
a.$flags&2&&A.bd(a)
A.cI(b,a,a.length)
a[b]=c},
im(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bd(a,5)
this.eY(a,b,c,d,0)
return},
$iG:1,
$in:1,
$iE:1}
A.ff.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.bd(a)
A.cI(b,a,a.length)
a[b]=c},
io(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bd(a,5)
this.eY(a,b,c,d,e)
return},
$iG:1,
$in:1,
$iE:1}
A.fd.prototype={
gP(a){return B.hh},
aL(a,b,c){return new Float32Array(a.subarray(b,A.xF(b,c,a.length)))},
$ia3:1,
$ilh:1}
A.ip.prototype={
gP(a){return B.hi},
$ia3:1}
A.iq.prototype={
gP(a){return B.hj},
h(a,b){A.cI(b,a,a.length)
return a[b]},
$ia3:1}
A.ir.prototype={
gP(a){return B.hk},
h(a,b){A.cI(b,a,a.length)
return a[b]},
$ia3:1}
A.is.prototype={
gP(a){return B.hl},
h(a,b){A.cI(b,a,a.length)
return a[b]},
$ia3:1}
A.it.prototype={
gP(a){return B.ho},
h(a,b){A.cI(b,a,a.length)
return a[b]},
$ia3:1,
$iqa:1}
A.iu.prototype={
gP(a){return B.hp},
h(a,b){A.cI(b,a,a.length)
return a[b]},
$ia3:1}
A.dw.prototype={
gP(a){return B.hq},
gq(a){return a.length},
h(a,b){A.cI(b,a,a.length)
return a[b]},
$ia3:1,
$idw:1}
A.fh.prototype={
gP(a){return B.hr},
gq(a){return a.length},
h(a,b){A.cI(b,a,a.length)
return a[b]},
$ia3:1,
$ify:1}
A.fR.prototype={}
A.fS.prototype={}
A.fT.prototype={}
A.fU.prototype={}
A.c0.prototype={
i(a){return A.h3(v.typeUniverse,this,a)},
E(a){return A.tf(v.typeUniverse,this,a)}}
A.jp.prototype={}
A.jN.prototype={
n(a){return A.bH(this.a,null)}}
A.jn.prototype={
n(a){return this.a}}
A.h_.prototype={$icz:1}
A.nX.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:31}
A.nW.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:48}
A.nY.prototype={
$0(){this.a.$0()},
$S:16}
A.nZ.prototype={
$0(){this.a.$0()},
$S:16}
A.op.prototype={
iX(a,b){if(self.setTimeout!=null)self.setTimeout(A.eN(new A.oq(this,b),0),a)
else throw A.d(A.aA("`setTimeout()` not found."))}}
A.oq.prototype={
$0(){this.b.$0()},
$S:1}
A.jd.prototype={
d0(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cG(a)
else{s=r.a
if(q.i("bu<1>").b(a))s.ej(a)
else s.bU(a)}},
d1(a,b){var s=this.a
if(this.b)s.aV(new A.aF(a,b))
else s.bQ(new A.aF(a,b))}}
A.oD.prototype={
$1(a){return this.a.$2(0,a)},
$S:11}
A.oE.prototype={
$2(a,b){this.a.$2(1,new A.eZ(a,t.l.a(b)))},
$S:107}
A.pb.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:106}
A.bE.prototype={
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
if(p==null||p.length===0){o.a=A.ta
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
o.a=A.ta
throw n
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.l("sync*"))}return!1},
ma(a){var s,r,q=this
if(a instanceof A.ci){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.P(a)
return 2}},
$iah:1}
A.ci.prototype={
gu(a){return new A.bE(this.a(),this.$ti.i("bE<1>"))}}
A.aF.prototype={
n(a){return A.q(this.a)},
$ia9:1,
gbl(){return this.b}}
A.lo.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.es(null)}else{s=null
try{s=l.$0()}catch(p){r=A.af(p)
q=A.cm(p)
l=r
o=q
n=A.qA(l,o)
l=new A.aF(l,o)
m.b.aV(l)
return}m.b.es(s)}},
$S:1}
A.lr.prototype={
$2(a,b){var s,r,q=this
A.eD(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aV(new A.aF(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aV(new A.aF(r,s))}},
$S:105}
A.lq.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bV(r,k.b,a)
if(J.ab(s,0)){q=A.f([],j.i("t<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.p)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hk(q,l)}k.c.bU(q)}}else if(J.ab(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aV(new A.aF(q,o))}},
$S(){return this.d.i("al(0)")}}
A.jh.prototype={
d1(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.bQ(A.y4(a,b))},
fg(a){return this.d1(a,null)}}
A.fF.prototype={
d0(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.cG(r.i("1/").a(a))}}
A.dL.prototype={
ln(a){if((this.c&15)!==6)return!0
return this.b.b.dV(t.iW.a(this.d),a.a,t.y,t.K)},
l7(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.lW(q,m,a.b,o,n,t.l)
else p=l.dV(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.af(s))){if((r.c&1)!==0)throw A.d(A.y("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.y("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ak.prototype={
dW(a,b,c){var s,r,q=this.$ti
q.E(c).i("1/(2)").a(a)
s=$.ad
if(s===B.v){if(!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.ay(b,"onError",u.c))}else{c.i("@<0/>").E(q.c).i("1(2)").a(a)
b=A.yo(b,s)}r=new A.ak(s,c.i("ak<0>"))
this.cF(new A.dL(r,3,a,b,q.i("@<1>").E(c).i("dL<1,2>")))
return r},
f6(a,b,c){var s,r=this.$ti
r.E(c).i("1/(2)").a(a)
s=new A.ak($.ad,c.i("ak<0>"))
this.cF(new A.dL(s,19,a,b,r.i("@<1>").E(c).i("dL<1,2>")))
return s},
k_(a){this.a=this.a&1|16
this.c=a},
bT(a){this.a=a.a&30|this.a&1
this.c=a.c},
cF(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.e.a(r.c)
if((s.a&24)===0){s.cF(a)
return}r.bT(s)}A.k3(null,null,r.b,t.M.a(new A.o2(r,a)))}},
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
A.k3(null,null,m.b,t.M.a(new A.o7(l,m)))}},
bq(){var s=t.F.a(this.c)
this.c=null
return this.c_(s)},
c_(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
es(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bu<1>").b(a))A.o5(a,r,!0)
else{s=r.bq()
q.c.a(a)
r.a=8
r.c=a
A.dM(r,s)}},
bU(a){var s,r=this
r.$ti.c.a(a)
s=r.bq()
r.a=8
r.c=a
A.dM(r,s)},
ja(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bq()
q.bT(a)
A.dM(q,r)},
aV(a){var s=this.bq()
this.k_(a)
A.dM(this,s)},
cG(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bu<1>").b(a)){this.ej(a)
return}this.j0(a)},
j0(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.k3(null,null,s.b,t.M.a(new A.o4(s,a)))},
ej(a){A.o5(this.$ti.i("bu<1>").a(a),this,!1)
return},
bQ(a){this.a^=2
A.k3(null,null,this.b,t.M.a(new A.o3(this,a)))},
$ibu:1}
A.o2.prototype={
$0(){A.dM(this.a,this.b)},
$S:1}
A.o7.prototype={
$0(){A.dM(this.b,this.a.a)},
$S:1}
A.o6.prototype={
$0(){A.o5(this.a.a,this.b,!0)},
$S:1}
A.o4.prototype={
$0(){this.a.bU(this.b)},
$S:1}
A.o3.prototype={
$0(){this.a.aV(this.b)},
$S:1}
A.oa.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.lV(t.mY.a(q.d),t.z)}catch(p){s=A.af(p)
r=A.cm(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.ko(q)
n=k.a
n.c=new A.aF(q,o)
q=n}q.b=!0
return}if(j instanceof A.ak&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ak){m=k.b.a
l=new A.ak(m.b,m.$ti)
j.dW(new A.ob(l,m),new A.oc(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:1}
A.ob.prototype={
$1(a){this.a.ja(this.b)},
$S:31}
A.oc.prototype={
$2(a,b){A.eD(a)
t.l.a(b)
this.a.aV(new A.aF(a,b))},
$S:104}
A.o9.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dV(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.af(l)
r=A.cm(l)
q=s
p=r
if(p==null)p=A.ko(q)
o=this.a
o.c=new A.aF(q,p)
o.b=!0}},
$S:1}
A.o8.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.ln(s)&&p.a.e!=null){p.c=p.a.l7(s)
p.b=!1}}catch(o){r=A.af(o)
q=A.cm(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ko(p)
m=l.b
m.c=new A.aF(p,n)
p=m}p.b=!0}},
$S:1}
A.je.prototype={}
A.jL.prototype={}
A.ha.prototype={$it2:1}
A.jD.prototype={
lX(a){var s,r,q
t.M.a(a)
try{if(B.v===$.ad){a.$0()
return}A.u_(null,null,this,a,t.H)}catch(q){s=A.af(q)
r=A.cm(q)
A.qL(A.eD(s),t.l.a(r))}},
ff(a){return new A.on(this,t.M.a(a))},
lV(a,b){b.i("0()").a(a)
if($.ad===B.v)return a.$0()
return A.u_(null,null,this,a,b)},
dV(a,b,c,d){c.i("@<0>").E(d).i("1(2)").a(a)
d.a(b)
if($.ad===B.v)return a.$1(b)
return A.yt(null,null,this,a,b,c,d)},
lW(a,b,c,d,e,f){d.i("@<0>").E(e).E(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ad===B.v)return a.$2(b,c)
return A.ys(null,null,this,a,b,c,d,e,f)},
hS(a,b,c,d){return b.i("@<0>").E(c).E(d).i("1(2,3)").a(a)}}
A.on.prototype={
$0(){return this.a.lX(this.b)},
$S:1}
A.p3.prototype={
$0(){A.vy(this.a,this.b)},
$S:1}
A.fM.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gM(a){return this.a!==0},
gS(){return new A.dN(this,this.$ti.i("dN<1>"))},
gao(){var s=this.$ti
return A.ij(new A.dN(this,s.i("dN<1>")),new A.od(this),s.c,s.y[1])},
a3(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.je(a)},
je(a){var s=this.d
if(s==null)return!1
return this.aW(this.eC(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.t4(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.t4(q,b)
return r}else return this.js(b)},
js(a){var s,r,q=this.d
if(q==null)return null
s=this.eC(q,a)
r=this.aW(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.en(s==null?m.b=A.qh():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.en(r==null?m.c=A.qh():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.qh()
p=A.k8(b)&1073741823
o=q[p]
if(o==null){A.qi(q,p,[b,c]);++m.a
m.e=null}else{n=m.aW(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ai(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eo()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.ar(m))}},
eo(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.c7(i.a,null,!1,t.z)
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
en(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.qi(a,b,c)},
eC(a,b){return a[A.k8(b)&1073741823]}}
A.od.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.fO.prototype={
aW(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dN.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gM(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.fN(s,s.eo(),this.$ti.i("fN<1>"))}}
A.fN.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.ar(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iah:1}
A.bP.prototype={
eJ(){return new A.bP(A.o(this).i("bP<1>"))},
gu(a){var s=this,r=new A.dR(s,s.r,A.o(s).i("dR<1>"))
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
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.em(s==null?q.b=A.qj():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.em(r==null?q.c=A.qj():r,b)}else return q.iY(b)},
iY(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.qj()
r=p.cL(a)
q=s[r]
if(q==null)s[r]=[p.cJ(a)]
else{if(p.aW(q,a)>=0)return!1
q.push(p.cJ(a))}return!0},
aa(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ep(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ep(s.c,b)
else return s.jT(b)},
jT(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cL(a)
r=n[s]
q=o.aW(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eq(p)
return!0},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cR()}},
em(a,b){A.o(this).c.a(b)
if(t.q.a(a[b])!=null)return!1
a[b]=this.cJ(b)
return!0},
ep(a,b){var s
if(a==null)return!1
s=t.q.a(a[b])
if(s==null)return!1
this.eq(s)
delete a[b]
return!0},
cR(){this.r=this.r+1&1073741823},
cJ(a){var s,r=this,q=new A.ju(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cR()
return q},
eq(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cR()},
cL(a){return J.bs(a)&1073741823},
aW(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
$irx:1}
A.ju.prototype={}
A.dR.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ar(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iah:1}
A.mk.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:101}
A.M.prototype={
gu(a){return new A.bx(a,this.gq(a),A.br(a).i("bx<M.E>"))},
T(a,b){return this.h(a,b)},
gI(a){return this.gq(a)===0},
gM(a){return!this.gI(a)},
a7(a,b){var s,r
A.br(a).i("r(M.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.d(A.ar(a))}return!0},
R(a,b){var s,r
A.br(a).i("r(M.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.d(A.ar(a))}return!1},
e2(a,b){return new A.c2(a,b.i("c2<0>"))},
bK(a,b,c){var s=A.br(a)
return new A.O(a,s.E(c).i("1(M.E)").a(b),s.i("@<M.E>").E(c).i("O<1,2>"))},
k(a,b){var s
A.br(a).i("M.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
c4(a,b){return new A.bY(a,A.br(a).i("@<M.E>").E(b).i("bY<1,2>"))},
Y(a,b){var s,r=A.br(a)
r.i("j(M.E,M.E)?").a(b)
s=b==null?A.z0():b
A.iN(a,0,this.gq(a)-1,s,r.i("M.E"))},
l1(a,b,c,d){var s
A.br(a).i("M.E?").a(d)
A.fn(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.pV(a,"[","]")},
$iG:1,
$in:1,
$iE:1}
A.Z.prototype={
ai(a,b){var s,r,q,p=A.o(this)
p.i("~(Z.K,Z.V)").a(b)
for(s=this.gS(),s=s.gu(s),p=p.i("Z.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gO(){return this.gS().bK(0,new A.mm(this),A.o(this).i("R<Z.K,Z.V>"))},
bd(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.E(c).E(d).i("R<1,2>(Z.K,Z.V)").a(b)
s=A.w(c,d)
for(r=this.gS(),r=r.gu(r),n=n.i("Z.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
ki(a){var s,r,q
A.o(this).i("n<R<Z.K,Z.V>>").a(a)
for(s=a.$ti,r=new A.du(J.P(a.a),a.b,s.i("du<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gS()
return s.gq(s)},
gI(a){var s=this.gS()
return s.gI(s)},
gM(a){var s=this.gS()
return s.gM(s)},
gao(){return new A.fP(this,A.o(this).i("fP<Z.K,Z.V>"))},
n(a){return A.q0(this)},
$iW:1}
A.mm.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("Z.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("Z.V").a(s)
return new A.R(a,s,r.i("R<Z.K,Z.V>"))},
$S(){return A.o(this.a).i("R<Z.K,Z.V>(Z.K)")}}
A.mn.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:21}
A.fP.prototype={
gq(a){var s=this.a
return s.gq(s)},
gI(a){var s=this.a
return s.gI(s)},
gM(a){var s=this.a
return s.gM(s)},
gu(a){var s=this.a,r=s.gS()
return new A.fQ(r.gu(r),s,this.$ti.i("fQ<1,2>"))}}
A.fQ.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.h4.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aA("Cannot modify unmodifiable map"))}}
A.ej.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.o(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
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
$iW:1}
A.cY.prototype={}
A.cx.prototype={
gI(a){return this.gq(this)===0},
gM(a){return this.gq(this)!==0},
J(a,b){var s
for(s=J.P(A.o(this).i("n<1>").a(b));s.m();)this.k(0,s.gp())},
d5(a){var s,r,q=this.b4(0)
for(s=this.gu(this);s.m();){r=s.gp()
if(a.v(0,r))q.aa(0,r)}return q},
n(a){return A.pV(this,"{","}")},
a7(a,b){var s
A.o(this).i("r(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
b2(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.e0(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
R(a,b){var s
A.o(this).i("r(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
T(a,b){var s,r
A.iF(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.lY(b,b-r,this,"index"))},
$iG:1,
$in:1,
$icV:1}
A.fY.prototype={
d5(a){var s,r,q,p=this,o=p.eJ()
for(s=A.jv(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.k(0,q)}return o},
b4(a){var s=this.eJ()
s.J(0,this)
return s}}
A.jO.prototype={
k(a,b){this.$ti.c.a(b)
return A.x8()}}
A.fz.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gu(a){var s=this.a
return A.jv(s,s.r,A.o(s).c)},
b4(a){return this.a.b4(0)}}
A.eA.prototype={}
A.h5.prototype={}
A.js.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jO(b):s}},
gq(a){return this.b==null?this.c.a:this.b5().length},
gI(a){return this.gq(0)===0},
gM(a){return this.gq(0)>0},
gS(){if(this.b==null){var s=this.c
return new A.a5(s,A.o(s).i("a5<1>"))}return new A.jt(this)},
gao(){var s,r=this
if(r.b==null){s=r.c
return new A.aH(s,A.o(s).i("aH<2>"))}return A.ij(r.b5(),new A.of(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.C(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a3(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.kb().l(0,b,c)},
a3(a){if(this.b==null)return this.c.a3(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
ai(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ai(0,b)
s=o.b5()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.oF(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.ar(o))}},
b5(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.f(Object.keys(this.a),t.s)
return s},
kb(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.b5()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.H(r)
n.a=n.b=null
return n.c=s},
jO(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.oF(this.a[a])
return this.b[a]=s}}
A.of.prototype={
$1(a){return this.a.h(0,A.C(a))},
$S:25}
A.jt.prototype={
gq(a){return this.a.gq(0)},
T(a,b){var s=this.a
if(s.b==null)s=s.gS().T(0,b)
else{s=s.b5()
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gS()
s=s.gu(s)}else{s=s.b5()
s=new J.da(s,s.length,A.I(s).i("da<1>"))}return s}}
A.ov.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:22}
A.ou.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:22}
A.hs.prototype={
lp(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fn(a4,a5,a2)
s=$.uE()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.pj(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.pj(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aX("")
g=o}else g=o
g.a+=B.b.C(a3,p,q)
c=A.aj(j)
g.a+=c
p=k
continue}}throw A.d(A.ag("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.C(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.r7(a3,m,a5,n,l,r)
else{b=B.c.W(r-1,4)+1
if(b===1)throw A.d(A.ag(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bh(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.r7(a3,m,a5,n,l,a)
else{b=B.c.W(a,4)
if(b===1)throw A.d(A.ag(a1,a3,a5))
if(b>1)a3=B.b.bh(a3,a5,a5,b===2?"==":"=")}return a3}}
A.kN.prototype={}
A.df.prototype={}
A.hE.prototype={}
A.hO.prototype={}
A.fa.prototype={
n(a){var s=A.hP(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ih.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.ig.prototype={
bw(a,b){var s=A.yl(a,this.gkL().a)
return s},
bb(a,b){var s=A.wR(a,this.gkS().b,null)
return s},
gkS(){return B.e8},
gkL(){return B.e7}}
A.md.prototype={}
A.mc.prototype={}
A.oh.prototype={
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
if(a==null?p==null:a===p)throw A.d(new A.ih(a,null))}B.a.k(s,a)},
cs(a){var s,r,q,p,o=this
if(o.i3(a))return
o.cI(a)
try{s=o.b.$1(a)
if(!o.i3(s)){q=A.rt(a,null,o.geM())
throw A.d(q)}q=o.a
if(0>=q.length)return A.e(q,-1)
q.pop()}catch(p){r=A.af(p)
q=A.rt(a,r,o.geM())
throw A.d(q)}},
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
r=A.c7(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ai(0,new A.oi(l,r))
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
A.oi.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:21}
A.og.prototype={
geM(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.j1.prototype={}
A.nH.prototype={
kG(a){return new A.ot(this.a).jf(t.L.a(a),0,null,!0)}}
A.ot.prototype={
jf(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.fn(b,c,J.b0(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.xp(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.xo(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cM(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.xq(o)
l.b=0
throw A.d(A.ag(m,a,p+l.c))}return n},
cM(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.L(b+c,2)
r=q.cM(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cM(a,s,c,d)}return q.kK(a,b,c,d)},
kK(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aX(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.rN(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aj(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.dg.prototype={
V(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.dg)if(this.a===b.a)s=this.b===b.b
return s},
gG(a){return A.cv(this.a,this.b,B.l,B.l)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
n(a){var s=this,r=A.vd(A.wb(s)),q=A.hG(A.w9(s)),p=A.hG(A.w5(s)),o=A.hG(A.w6(s)),n=A.hG(A.w8(s)),m=A.hG(A.wa(s)),l=A.rd(A.w7(s)),k=s.b,j=k===0?"":A.rd(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaG:1}
A.cN.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.cN&&this.a===b.a},
gG(a){return B.c.gG(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.L(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.L(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.lB(B.c.n(o%1e6),6,"0")},
$iaG:1}
A.jm.prototype={
n(a){return this.A()},
$iH:1}
A.a9.prototype={
gbl(){return A.w4(this)}}
A.ho.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hP(s)
return"Assertion failed"}}
A.cz.prototype={}
A.bX.prototype={
gcO(){return"Invalid argument"+(!this.a?"(s)":"")},
gcN(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gcO()+q+o
if(!s.a)return n
return n+s.gcN()+": "+A.hP(s.gdK())},
gdK(){return this.b}}
A.em.prototype={
gdK(){return A.ty(this.b)},
gcO(){return"RangeError"},
gcN(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.i5.prototype={
gdK(){return A.a(this.b)},
gcO(){return"RangeError"},
gcN(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fA.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.iW.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.eq.prototype={
n(a){return"Bad state: "+this.a}}
A.hC.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hP(s)+"."}}
A.iv.prototype={
n(a){return"Out of Memory"},
gbl(){return null},
$ia9:1}
A.fv.prototype={
n(a){return"Stack Overflow"},
gbl(){return null},
$ia9:1}
A.o1.prototype={
n(a){return"Exception: "+this.a}}
A.K.prototype={
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
c4(a,b){return A.v5(this,A.o(this).i("n.E"),b)},
bK(a,b,c){var s=A.o(this)
return A.ij(this,s.E(c).i("1(n.E)").a(b),s.i("n.E"),c)},
e1(a,b){var s=A.o(this)
return new A.Q(this,s.i("r(n.E)").a(b),s.i("Q<n.E>"))},
e2(a,b){return new A.c2(this,b.i("c2<0>"))},
bE(a,b,c,d){var s,r
d.a(b)
A.o(this).E(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a7(a,b){var s
A.o(this).i("r(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
R(a,b){var s
A.o(this).i("r(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
bj(a,b){var s=A.N(this,A.o(this).i("n.E"))
return s},
bi(a){return this.bj(0,!0)},
gq(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gI(a){return!this.gu(this).m()},
gM(a){return!this.gI(this)},
gam(a){var s=this.gu(this)
if(!s.m())throw A.d(A.i9())
return s.gp()},
cf(a,b,c){var s,r
A.o(this).i("r(n.E)").a(b)
for(s=this.gu(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.d(A.i9())},
l2(a,b){return this.cf(0,b,null)},
T(a,b){var s,r
A.iF(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.d(A.lY(b,b-r,this,"index"))},
n(a){return A.vO(this,"(",")")}}
A.R.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.al.prototype={
gG(a){return A.D.prototype.gG.call(this,0)},
n(a){return"null"}}
A.D.prototype={$iD:1,
V(a,b){return this===b},
gG(a){return A.fm(this)},
n(a){return"Instance of '"+A.iC(this)+"'"},
gP(a){return A.k6(this)},
toString(){return this.n(this)}}
A.jM.prototype={
n(a){return""},
$icd:1}
A.nq.prototype={
gkQ(){var s,r=this.b
if(r==null)r=$.mK.$0()
s=r-this.a
if($.r2()===1e6)return s
return s*1000}}
A.aX.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iwp:1}
A.nG.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.C(b)
s=B.b.ci(b,"=")
if(s===-1){if(b!=="")a.l(0,A.qo(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.C(b,0,s)
q=B.b.bP(b,s+1)
p=this.a
a.l(0,A.qo(r,0,r.length,p,!0),A.qo(q,0,q.length,p,!0))}return a},
$S:86}
A.nF.prototype={
$2(a,b){throw A.d(A.ag("Illegal IPv6 address, "+a,this.a,b))},
$S:80}
A.h6.prototype={
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
gG(a){var s,r=this,q=r.y
if(q===$){s=B.b.gG(r.gf5())
r.y!==$&&A.uq()
r.y=s
q=s}return q},
gbf(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.rV(s==null?"":s)
r.z!==$&&A.uq()
q=r.z=new A.cY(s,t.oP)}return q},
gi1(){return this.b},
gdJ(){var s=this.c
if(s==null)return""
if(B.b.Z(s,"[")&&!B.b.a2(s,"v",1))return B.b.C(s,1,s.length-1)
return s},
gdP(){var s=this.d
return s==null?A.tg(this.a):s},
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
if(t.jJ.b(b))if(p.a===b.ge5())if(p.c!=null===b.ghz())if(p.b===b.gi1())if(p.gdJ()===b.gdJ())if(p.gdP()===b.gdP())if(p.e===b.ghM()){r=p.f
q=r==null
if(!q===b.ghB()){if(q)r=""
if(r===b.gdR()){r=p.r
q=r==null
if(!q===b.ghA()){s=q?"":r
s=s===b.ghy()}}}}return s},
$iiZ:1,
ge5(){return this.a},
ghM(){return this.e}}
A.nE.prototype={
gi0(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.b.cj(s,"?",m)
q=s.length
if(r>=0){p=A.h7(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.ji("data","",n,n,A.h7(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jG.prototype={
ghz(){return this.c>0},
ghB(){return this.f<this.r},
ghA(){return this.r<this.a.length},
ge5(){var s=this.w
return s==null?this.w=this.jc():s},
jc(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.Z(r.a,"http"))return"http"
if(q===5&&B.b.Z(r.a,"https"))return"https"
if(s&&B.b.Z(r.a,"file"))return"file"
if(q===7&&B.b.Z(r.a,"package"))return"package"
return B.b.C(r.a,0,q)},
gi1(){var s=this.c,r=this.b+3
return s>r?B.b.C(this.a,r,s-1):""},
gdJ(){var s=this.c
return s>0?B.b.C(this.a,s,this.d):""},
gdP(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.zk(B.b.C(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.Z(r.a,"http"))return 80
if(s===5&&B.b.Z(r.a,"https"))return 443
return 0},
ghM(){return B.b.C(this.a,this.e,this.f)},
gdR(){var s=this.f,r=this.r
return s<r?B.b.C(this.a,s+1,r):""},
ghy(){var s=this.r,r=this.a
return s<r.length?B.b.bP(r,s+1):""},
gbf(){if(this.f>=this.r)return B.bx
return new A.cY(A.rV(this.gdR()),t.oP)},
gG(a){var s=this.x
return s==null?this.x=B.b.gG(this.a):s},
V(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiZ:1}
A.ji.prototype={}
A.mu.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.pK.prototype={
$1(a){return this.a.d0(this.b.i("0/?").a(a))},
$S:11}
A.pL.prototype={
$1(a){if(a==null)return this.a.fg(new A.mu(a===undefined))
return this.a.fg(a)},
$S:11}
A.pe.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.tS(a))return a
s=this.a
a.toString
if(s.a3(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aV(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dW(!0,"isUtc",t.y)
return new A.dg(r,0,!0)}if(a instanceof RegExp)throw A.d(A.y("structured clone of RegExp",null))
if(a instanceof Promise)return A.aE(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.w(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c3(n),p=s.gu(n);p.m();)m.push(A.cK(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.e(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.ax(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:56}
A.jr.prototype={
au(a){if(a<=0||a>4294967296)throw A.d(A.rF(u.w+a))
return Math.random()*a>>>0},
cn(){return Math.random()},
$iq4:1}
A.eu.prototype={
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
if(a<=0||a>4294967296)throw A.d(A.rF(u.w+a))
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
$iq4:1}
A.mN.prototype={
B(){var s=this
if(B.a.R(A.f([s.d,s.e,s.f,s.r,s.w],t.t),new A.mO()))throw A.d(B.dz)}}
A.mO.prototype={
$1(a){return A.a(a)<=0},
$S:24}
A.dz.prototype={
A(){return"QualityProfileKind."+this.b}}
A.dy.prototype={}
A.kT.prototype={}
A.kU.prototype={}
A.iA.prototype={
B(){var s,r,q,p,o=this
for(s=A.V(["exposure",o.a,"bloomStrength",o.b,"ssaoStrength",o.c,"depthOfFieldStrength",0,"vignette",o.e,"grain",o.f,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.U(s,A.o(s).i("U<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.d(A.y("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.d(A.y("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.e6.prototype={}
A.hU.prototype={
B(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.ga8(0)||!k.b.ga8(0)||!k.r.ga8(0))throw A.d(A.y("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.y("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+k.d,j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.y("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.ga8(0)||r.gbH()<1e-12)A.k(A.y("DirectionalLight.direction must be finite and nonzero: "+r.n(0),j))
s=s.c
if(!isFinite(s)||s<0)A.k(A.y("DirectionalLight.intensity must be >= 0: "+A.q(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.y("PointLight.position must be finite: "+o.n(0),j))
o=p.d
if(!isFinite(o)||o<0)A.k(A.y("PointLight.intensity must be >= 0: "+A.q(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.y("PointLight.radius must be > 0: "+A.q(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.y("SpotLight.position must be finite: "+o.n(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.k(A.y("SpotLight.direction must be finite and nonzero: "+o.n(0),j))
if(p.w<=p.r)A.k(A.y("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.lj.prototype={}
A.cw.prototype={
V(a,b){if(b==null)return!1
return J.dZ(b)===A.k6(this)&&b instanceof A.cw&&this.a===b.a&&this.b===b.b},
gG(a){return A.cv(A.k6(this),this.a,this.b,B.l)}}
A.bh.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bz.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c9.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.iw.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cq.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.dp.prototype={
A(){return"HandleRejection."+this.b}}
A.lz.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.cs.prototype={
ga8(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
V(a,b){if(b==null)return!1
return b instanceof A.cs&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.cv(this.a,this.b,this.c,B.l)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.l_.prototype={}
A.iz.prototype={}
A.dF.prototype={}
A.hn.prototype={
A(){return"AlphaMode."+this.b}}
A.c8.prototype={
B(){var s=null
if(this.a.length===0)throw A.d(A.y("MaterialDefinition.key must not be empty",s))
if(!isFinite(0))throw A.d(A.y(u.i,s))
if(this.w===0||this.x===0)throw A.d(A.y(u.p,s))
if(!isFinite(0.5))throw A.d(A.y(u.n,s))}}
A.cB.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.cC.prototype={}
A.nI.prototype={
B(){var s,r,q,p
for(s=0;s<6;++s){r=B.ar[s]
q=r.b
p=q+r.c
if(p>14)throw A.d(A.y('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bL.prototype={
B(){var s,r,q,p,o,n=this
n.a.B()
s=n.b.length
if(B.c.W(s,14)!==0)throw A.d(A.y("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.d(A.y("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga8(0)&&s.b.ga8(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.y("MeshData.localBounds must be a valid AABB",null))}}
A.mw.prototype={
B(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.d(A.y("resource plan must contain sceneColor and present",null))
if(s.R(0,new A.my()))throw A.d(A.y("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.d(A.y("resource history does not match vhsOutput ownership",null))}}
A.my.prototype={
$1(a){return A.C(a).length===0},
$S:4}
A.mF.prototype={}
A.iI.prototype={
hD(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.l("resource assembler is initialized"))
a.B()
s.a=a
s.c=1},
by(){if(this.d)return
this.d=!0
this.a=null}}
A.e9.prototype={
A(){return"DrawMode."+this.b}}
A.hu.prototype={
A(){return"BlendMode."+this.b}}
A.aJ.prototype={}
A.iR.prototype={
B(){var s=this
if(s.a<0||s.b<0)throw A.d(A.y("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.y("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.y("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hB.prototype={
A(){return"ColorEncoding."+this.b}}
A.hK.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.iG.prototype={
B(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.d5(B.h6)
if(o.a!==0)A.k(A.ay(o,r,"contains unknown pipeline features"))
if(q.a===B.at&&p.gM(p))A.k(A.ay(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.y("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dB.prototype={
A(){return"RendererState."+this.b}}
A.ll.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.il.prototype={
lR(a){return this.a.bx(a)}}
A.mp.prototype={
$3(a,b,c){return new A.c9(A.a(a),A.a(b),A.bq(c))},
$S:66}
A.iY.prototype={}
A.mr.prototype={
b9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.t0(d,new A.hX(c.byteLength,B.b9,B.dK))
if(d.b!==B.f)A.k(A.l(e))
s=A.c(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.ch(d)
A.b4(d,p)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a8(t.S)
for(n=a.a,m=0;m<6;++m){l=B.ar[m]
k=A.u5(l.a)
if(!o.k(0,k))continue
j=A.xJ(n,k,l)
if(d.b!==B.f)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.t0(d,new A.hX(i.byteLength,B.b9,B.b8))
if(d.b!==B.f)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.c(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iY(b,h,p,d,c.length/14|0)},
lM(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dn(B.ap,a))
this.b.bx(a)
return s},
aR(a){var s,r,q=this.c.aa(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.c(q.c.a))
s.deleteBuffer(A.c(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.c(r.a))}this.b.aR(a)},
dU(){var s,r,q,p
for(s=this.b.bc(),r=s.$ti,s=new A.bE(s.a(),r.i("bE<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.b9(p.b))}},
gbI(){return this.b.bc().bE(0,0,new A.mt(),t.S)}}
A.ms.prototype={
$3(a,b,c){return new A.bh(A.a(a),A.a(b),A.bq(c))},
$S:62}
A.mt.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:61}
A.cF.prototype={}
A.iU.prototype={
ev(){var s=this.a,r=A.qe(s,B.dN)
A.qf(s,r,0,$.ut())
return r},
m0(a,b){var s,r,q,p=this,o=p.b,n=o.bx(a),m=A.N(n.b,t.nh)
B.a.l(m,0,b)
s=n.a
o.dZ(a,new A.cF(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.qe(p.a,s)
o.l(0,r,q)}A.qf(p.a,q,0,b)},
lP(a){var s,r=this
if(a==null){s=r.d
s===$&&A.h()
return s}r.b.bx(a)
s=r.c.h(0,a.a)
if(s==null){s=r.d
s===$&&A.h()}return s},
dU(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.ev()
for(s=i.b.bc(),r=s.$ti,s=new A.bE(s.a(),r.i("bE<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.nB()))continue
l=A.qe(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.qf(p,l,k,j)}q.l(0,n.a,l)}},
gbI(){return this.b.bc().bE(0,0,new A.nA(),t.S)}}
A.nz.prototype={
$3(a,b,c){return new A.bz(A.a(a),A.a(b),A.bq(c))},
$S:53}
A.nB.prototype={
$1(a){return t.nh.a(a)==null},
$S:51}
A.nA.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:37}
A.dq.prototype={}
A.hS.prototype={
ku(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.U.a(a)
s=new A.mR(A.f([],t.hJ),A.a8(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)r[p].af(s,b)
o=s.kt(a,!1)
if(o.b.length!==0)return new A.hT(o,B.ey)
q=o.a
n=A.I(q)
m=new A.O(q,n.i("m(1)").a(new A.lf()),n.i("O<1,m>")).b4(0)
l=A.f([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){k=r[p]
for(n=k.ae(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.ga0().a))throw A.d(A.l('RenderFeature "'+k.gaj()+'" created a pass "'+i.ga0().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.Y(l,new A.lg(o))
return new A.hT(o,l)}}
A.lf.prototype={
$1(a){return t.A.a(a).a},
$S:33}
A.lg.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.hC(s,new A.ld(a)),B.a.hC(s,new A.le(b)))},
$S:32}
A.ld.prototype={
$1(a){return t.A.a(a).a===this.a.ga0().a},
$S:8}
A.le.prototype={
$1(a){return t.A.a(a).a===this.a.ga0().a},
$S:8}
A.hT.prototype={}
A.ed.prototype={
A(){return"FrameQueueState."+this.b}}
A.lk.prototype={}
A.am.prototype={
gbM(){var s=this.c,r=A.I(s)
return new A.Q(s,r.i("r(1)").a(new A.mA()),r.i("Q<1>"))},
gct(){var s=this.c,r=A.I(s)
return new A.Q(s,r.i("r(1)").a(new A.mB()),r.i("Q<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.mA.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.E},
$S:18}
A.mB.prototype={
$1(a){return t.n4.a(a).b===B.k},
$S:18}
A.bZ.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bv.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.fr.prototype={
A(){return"ResourceFormat."+this.b}}
A.cp.prototype={
A(){return"GraphStage."+this.b}}
A.aW.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.en.prototype={
A(){return"ResourceAccess."+this.b}}
A.S.prototype={}
A.eU.prototype={}
A.mL.prototype={
ak(a){var s,r,q,p,o,n,m=this
a.B()
s=null
try{r=t.a
s=A.wL(m.a,a.c,r.a(a.d.gS().bi(0)),r.a(a.f),a.b)}catch(q){if(A.af(q) instanceof A.fu){++m.e
throw q}else throw q}p=new A.eU(s)
r=m.b
o=a.a
n=r.h(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.c(n.b.a))
return p},
ji(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.ap(s,s.r,s.e,a.$ti.i("ap<1>")),r=this.a.a;s.m();)r.deleteProgram(A.c(s.d.b.a))}}
A.aU.prototype={
B(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.y("ProgramSource.id must not be empty",m))
s=t.S
r=A.a8(s)
for(q=this.d.gO(),q=q.gu(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.d(A.y('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.d(A.y('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a8(s)
for(s=this.e.gO(),s=s.gu(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.d(A.y('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.d(A.y('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.mP.prototype={}
A.aT.prototype={
a5(){var s=this
return A.rf(B.cl,s.f,B.Z,B.M,!0,!0,!0,!0,s.r,B.a0,B.a1,s.d,s.e,!0,!1,!1)}}
A.mR.prototype={
kt(a,b){var s=this.kc(t.U.a(a),!1),r=this.a,q=A.I(r)
return new A.mQ(A.ao(new A.Q(r,q.i("r(1)").a(new A.mV()),q.i("Q<1>")),t.A),s)},
kc(a,b){var s,r,q,p,o,n,m=this
t.U.a(a)
s=A.f([],t.aW)
r=m.a
q=A.I(r)
p=q.i("Q<1>")
o=A.N(new A.Q(r,q.i("r(1)").a(new A.mU()),p),p.i("n.E"))
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
if(p.a!==0)B.a.k(c,new A.bv(B.dX,q.a,"missing capabilities: "+p.b2(0,", ")))}},
j6(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbM(),o=J.P(p.a),p=new A.J(o,p.b,p.$ti.i("J<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bv(B.dS,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
j5(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.p)(p),++m){l=p[m]
if(l.b===B.E)B.a.k(c,new A.bv(B.dV,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
j9(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.b.a(b)
s=A.w(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
for(o=p.gct(),n=J.P(o.a),o=new A.J(n,o.b,o.$ti.i("J<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bv(B.dR,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
j7(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbM(),p=J.P(q.a),q=new A.J(p,q.b,q.$ti.i("J<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.E)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bv(B.be,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.ci(a,m)>s)B.a.k(c,new A.bv(B.be,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
j8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbM(),o=J.P(p.a),p=new A.J(o,p.b,p.$ti.i("J<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.E)continue
for(l=q.gct(),k=J.P(l.a),l=new A.J(k,l.b,l.$ti.i("J<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bv(B.dU,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
j4(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbM(),o=J.P(p.a),p=new A.J(o,p.b,p.$ti.i("J<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.E)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gct().l2(0,new A.mT(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bv(B.dT,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
j3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
s=t.S
r=A.w(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gct(),o=J.P(p.a),p=new A.J(o,p.b,p.$ti.i("J<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.ib(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a8(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbM(),p=J.P(s.a),s=new A.J(p,s.b,s.$ti.i("J<1>"));s.m();){o=p.gp()
if(o.b===B.E)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.e(m,k)
m[k].k(0,q)}}p=t.y
j=A.c7(s,!1,!1,p)
s=a.length
i=A.c7(s,!1,!1,p)
h=new A.mS(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.e(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.e(a,q)
B.a.k(b,new A.bv(B.dW,a[q].a,"participates in a resource dependency cycle"))}}}}
A.mV.prototype={
$1(a){t.A.a(a)
return A.q2()},
$S:8}
A.mU.prototype={
$1(a){t.A.a(a)
return A.q2()},
$S:8}
A.mT.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:18}
A.mS.prototype={
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
r=A.jv(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:24}
A.mQ.prototype={}
A.dO.prototype={$iby:1}
A.fo.prototype={
cZ(a){var s,r,q,p,o,n=a.c,m=n.a
if(!m.ga8(0))A.k(A.y("Transform.translation must be finite: "+m.n(0),null))
m=n.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)&&isFinite(m.d)))A.k(A.y("Transform.rotation must be finite: "+m.n(0),null))
if(!isFinite(1))A.k(A.y(u.u,null))
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
return A.be(new A.O(A.f([new A.A(r,q,s),new A.A(p,q,s),new A.A(r,o,s),new A.A(p,o,s),new A.A(r,q,m),new A.A(p,q,m),new A.A(r,o,m),new A.A(p,o,m)],t.k),t.pc.a(n.gav()),t.mz))},
gdL(){return new A.ci(this.lg(),t.fJ)},
lg(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bc(),n=o.$ti,o=new A.bE(o.a(),n.i("bE<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.B()
f=k.a(g.a)
m.a_(f)
f=f.a
if(!(f>=0&&f<j.length)){A.e(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ab()
f=f.gaw()
d=A.I(f)
r=5
return a.b=new A.dO(h,g,A.be(new A.O(f,d.i("A(1)").a(i.gav()),d.i("O<1,A>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iwg:1}
A.mX.prototype={
$3(a,b,c){return new A.cq(A.a(a),A.a(b),A.bq(c))},
$S:34}
A.oU.prototype={
$1(a){var s=this.a.w.a.lM(a),r=s.b!=null,q=r?s.d:s.e
return new A.fq(s.c,r,q)},
$S:35}
A.oV.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hL(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hL(b)
throw A.d(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.oS.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.oM.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gam(r)},
$S:38}
A.oR.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.oI.prototype={
$0(){return this.a.at.a},
$S:39}
A.oJ.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.oT.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.oQ.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.oG.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.oH.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.oN.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.oO.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.oP.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:2}
A.oL.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.oK.prototype={
$0(){return this.a.at.w},
$S:40}
A.oo.prototype={}
A.jA.prototype={$iwf:1}
A.jo.prototype={$ivA:1}
A.n5.prototype={
dT(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.B()
r=s.b.aq(a,b)
s.c.l(0,r.a,s.b9(a))
this.d.k(0,r)
return r},
hV(a){if(this.r)A.k(A.l("resource library is disposed"))
this.a.aR(a)
this.d.aa(0,a)},
hT(a){var s,r=null
if(this.r)A.k(A.l("resource library is disposed"))
if(a.a.length===0)A.k(A.y("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.y(u.i,r))
if(a.w===0||a.x===0)A.k(A.y(u.p,r))
if(!isFinite(0.5))A.k(A.y(u.n,r))
s=this.b.a.aq(a,r)
this.e.k(0,s)
return s},
hU(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.aq(new A.cF(new A.hZ(c,b,1,!1,B.a5,B.a5,B.bb),A.c7(1,null,!1,t.nh),!1),a)
this.f.k(0,s)
return s},
by(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.N(s,A.o(s).c)
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
q=A.N(r,A.o(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.p)(q),++l)o.aR(q[l])
q=i.d
p=A.N(q,A.o(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.p)(p),++l)n.aR(p[l])
s.H(0)
r.H(0)
q.H(0)
i.r=!0}}
A.nb.prototype={
gaC(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
hE(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.aw)throw A.d(A.l("renderer can only be initialized once"))
a.B()
b.B()
s=m.a
if(s.b===B.R)throw A.d(A.l("renderer device is context lost"))
m.e=B.fZ
try{m.r=s.hQ()
r=m.b
q=A.mx(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.B()
p.a=a
A.mx(a)
p.d=1
r.b.hD(q)
r=A.vW()
m.w=new A.n5(A.vX(s),r,A.wr(s),A.a8(t.l0),A.a8(t.fP),A.a8(t.lu))
r=new A.iI()
p=new A.ly(s,r)
q=A.mx(a)
o=p.ew(q,a)
r.hD(q)
p.c=new A.iB(new A.mF(q),o)
m.x=p
m.y=new A.mL(s,A.w(t.N,t.e3))
m.as=a
A.tF(m)
m.e=B.ax}catch(n){s=m.y
if(s!=null){r=s.b
s.ji(new A.aH(r,A.o(r).i("aH<2>")))
r.H(0)}s=m.x
if(s!=null)s.by()
s=m.w
if(s!=null)s.by()
m.w=null
m.e=B.aw
throw n}return A.pU(t.H)},
kT(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bV()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.d(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.am)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.nu(j,0,A.dW(k.c,"count",t.S),A.I(j).c).bj(0,!1)
k.b=B.dD
q=i
try{A.xR(a3,r,s)
k=r.gdL()
j=t.p9
h=k.$ti
k=A.N(A.ij(k,h.i("aJ(n.E)").a(new A.nc()),h.i("n.E"),j),j)
p=k
J.uP(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.p)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.dn(B.ap,h))
j=j.b
d=j.$ti
j.a_(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.e(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.L(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.U()
n=j+h}p=s.e
k=J.b0(o)
j=n
h=J.b0(o)
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
return new A.ll(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
jR(){var s,r,q,p=this
if(p.e!==B.bE)return
if(p.a.b===B.R)throw A.d(A.l("renderer context remains lost"))
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
s.c=new A.iB(q.a,s.ew(A.mx(r),r))
s=p.y
s.c=null
s.b.H(0)
A.tF(p)
p.e=B.ax},
bV(){var s=this.e
if(s!==B.ax)throw A.d(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.R){this.e=B.bE
throw A.d(A.l("renderer context lost"))}}}
A.nc.prototype={
$1(a){return t.os.a(a).b},
$S:41}
A.bi.prototype={
F(a,b){var s,r=this
t.nL.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$iaG:1}
A.bf.prototype={
F(a,b){var s
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$iaG:1}
A.au.prototype={}
A.pP.prototype={
$2(a,b){var s=t.p
return s.a(a).a.F(0,s.a(b).a)},
$S:42}
A.pQ.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.pN.prototype={
$2(a,b){var s=t.d
return s.a(a).a.F(0,s.a(b).a)},
$S:44}
A.pO.prototype={
$1(a){return t.d.a(a).b},
$S:45}
A.kW.prototype={}
A.hl.prototype={
gaw(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.f([new A.A(o,n,p),new A.A(r,n,p),new A.A(o,q,p),new A.A(r,q,p),new A.A(o,n,s),new A.A(r,n,s),new A.A(o,q,s),new A.A(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.dx.prototype={}
A.ee.prototype={
A(){return"FrustumTest."+this.b}}
A.lm.prototype={
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
if(h*f+e*c+i*a+a0<0)return B.b7
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.dE:B.dF}}
A.ln.prototype={
$4(a,b,c,d){var s=new A.A(a,b,c),r=new A.dx(s,d),q=Math.sqrt(s.gbH())
if(q<1e-9)s=r
else{s=1/q
s=new A.dx(new A.A(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.cu.prototype={
X(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.e(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.e(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.e(h,j)
h[j]=l}return new A.cu(h)},
hY(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return new A.cu(h)},
ga8(a){return B.n.a7(this.a,new A.mo())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.mo.prototype={
$1(a){return isFinite(A.d6(a))},
$S:5}
A.iE.prototype={
n(a){var s=this
return"Quat("+A.q(s.a)+", "+A.q(s.b)+", "+A.q(s.c)+", "+A.q(s.d)+")"}}
A.iV.prototype={
B(){var s=this.a
if(!s.ga8(0))throw A.d(A.y("Transform.translation must be finite: "+s.n(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.y("Transform.rotation must be finite: "+s.n(0),null))
if(!isFinite(1))throw A.d(A.y(u.u,null))},
ab(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.ry(A.f([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.ry(A.f([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
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
return r<1e-9?B.ac:new A.A(s.a/r,s.b/r,s.c/r)},
V(a,b){if(b==null)return!1
return b instanceof A.A&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.cv(this.a,this.b,this.c,B.l)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.fH.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eS.prototype={
gaj(){return this.f},
af(a,b){B.a.k(a.a,new A.am(this.f,B.B,A.f([new A.S(this.x,B.h),new A.S(this.y,B.k)],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aU(s.e,s.b,s.c,B.t,B.bw,B.bs)),q=A.ch(s.d),p=t.n,o=s.y,n=s.r===B.ch?new Float32Array(A.Y(A.f([1/o.c,0],p))):new Float32Array(A.Y(A.f([0,1/o.d],p)))
return A.f([new A.jf(new A.aT(s.f,A.f([new A.S(s.x,B.h),new A.S(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$iac:1}
A.jf.prototype={
ag(a){var s,r,q,p=this
if(a.c.e.b<=0)return
s=a.b.a
A.bD(s,a.a6(p.r).b)
A.aY(s,p.a.a5())
A.cE(s,B.P,1,0,0,0)
A.bO(s,p.b.b)
r=t._
q=p.d
if(p.e)A.wI(s,0,r.a(q.$0()))
else A.aB(s,0,r.a(q.$0()))
A.x(s,"uSource",B.u)
A.x(s,"uTexelStep",new A.z(B.ab,p.f))
A.b4(s,p.c)
A.c1(s,3,0)},
$ia2:1,
ga0(){return this.a}}
A.hv.prototype={
gaj(){return"bloomComposite"},
af(a,b){B.a.k(a.a,new A.am("bloomComposite",B.B,A.f([B.c3,B.bY,new A.S($.pR(),B.k)],t.C)))},
ae(a){var s=this,r="bloomComposite",q=s.a.ak(new A.aU(r,s.b,s.c,B.t,B.eX,B.eJ)),p=A.ch(s.d)
return A.f([new A.jg(new A.aT(r,A.f([B.c3,B.bY,new A.S($.pR(),B.k)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$iac:1}
A.jg.prototype={
ag(a){var s,r=a.c.e.b
if(r<=0)return
s=a.b.a
A.bD(s,a.a6("sceneColor").b)
A.wJ(s,1)
A.aY(s,B.cI)
A.bO(s,this.b.b)
A.aB(s,0,t._.a(this.d.$0()))
A.x(s,"uBloom",B.u)
A.x(s,"uBloomStrength",new A.z(B.e,r))
A.b4(s,this.c)
A.c1(s,3,0)},
$ia2:1,
ga0(){return this.a}}
A.hI.prototype={
gaj(){return"depthPrepass"},
af(a,b){B.a.k(a.a,new A.am("depthPrepass",B.dP,A.f([B.bZ],t.C)))},
ae(a){var s=this,r="depthPrepass",q=s.a.ak(new A.aU(r,s.b,s.c,B.bv,B.bt,B.eo))
return A.f([new A.jj(new A.aT(r,A.f([B.bZ],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iac:1}
A.jj.prototype={
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bD(b,a.a6("sceneDepth").b)
A.aY(b,g.a.a5())
A.cE(b,B.ak,1,0,0,0)
A.bO(b,g.b.b)
A.x(b,"uVertexSnapGrid",new A.z(B.e,c.y))
A.x(b,"uAlbedo",B.u)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
k=l.a.b
A.x(b,"uViewProjection",new A.z(B.q,new Float32Array(A.Y(d))))
A.x(b,"uModel",new A.z(B.q,new Float32Array(A.Y(k.c.ab().a))))
g.jj(e,k.b,p)
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
jj(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.z(B.e,0))
A.x(q,"uAffineWarpStrength",new A.z(B.e,0))
s=this.a.a5()
A.aY(q,r.at?s.e3(!1):s)},
$ia2:1,
ga0(){return this.a}}
A.fJ.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eX.prototype={
gaj(){return this.f},
af(a,b){B.a.k(a.a,new A.am(this.f,B.B,A.f([new A.S(this.w,B.h),new A.S(this.x,B.k)],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aU(s.e,s.b,s.c,B.t,B.bw,B.bs)),q=A.ch(s.d),p=t.n,o=s.x,n=s.r===B.ci?new Float32Array(A.Y(A.f([1/o.c,0],p))):new Float32Array(A.Y(A.f([0,1/o.d],p)))
return A.f([new A.jk(new A.aT(s.f,A.f([new A.S(s.w,B.h),new A.S(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$iac:1}
A.jk.prototype={
ag(a){return},
$ia2:1,
ga0(){return this.a}}
A.hM.prototype={
gaj(){return"dofComposite"},
af(a,b){B.a.k(a.a,new A.am("dofComposite",B.B,A.f([new A.S(this.z,B.h),B.c1,B.bW],t.C)))},
ae(a){var s=this,r="dofComposite",q=s.a.ak(new A.aU(r,s.b,s.c,B.t,B.eW,B.en)),p=A.ch(s.d)
return A.f([new A.jl(new A.aT(r,A.f([new A.S(s.z,B.h),B.c1,B.bW],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iac:1}
A.jl.prototype={
ag(a){var s,r=this,q=a.a6("dofOutput"),p=r.r.$0(),o=a.b.a
A.bD(o,q.b)
A.aY(o,r.a.a5())
A.bO(o,r.b.b)
s=t._
A.aB(o,0,s.a(r.d.$0()))
A.x(o,"uSharp",B.u)
A.aB(o,1,s.a(r.e.$0()))
A.x(o,"uBlurred",B.X)
A.aB(o,2,s.a(r.f.$0()))
A.x(o,"uSceneDepth",B.cc)
A.x(o,"uNear",new A.z(B.e,p.f))
A.x(o,"uFar",new A.z(B.e,p.r))
A.x(o,"uFocusDistance",new A.z(B.e,r.w))
A.x(o,"uFocusRange",new A.z(B.e,r.x))
A.x(o,"uStrength",new A.z(B.e,0))
A.b4(o,r.c)
A.c1(o,3,0)},
$ia2:1,
ga0(){return this.a}}
A.i1.prototype={
gaj(){return"grade"},
af(a,b){B.a.k(a.a,new A.am("grade",B.B,A.f([new A.S(this.r,B.h),B.bU],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aU("grade",s.b,s.c,B.t,B.eU,B.eK)),q=A.ch(s.d),p=s.r
return A.f([new A.jq(new A.aT("grade",A.f([new A.S(p,B.h),B.bU],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$iac:1}
A.jq.prototype={
ag(a){var s=this,r=a.a6(s.f.a),q=a.b.a
A.bD(q,a.a6("gradeOutput").b)
A.aY(q,s.a.a5())
A.bO(q,s.b.b)
A.aB(q,0,r.b)
A.x(q,"uScene",B.u)
A.aB(q,1,t._.a(s.d.$0()))
A.x(q,"uLut",B.X)
A.x(q,"uLutSize",new A.z(B.e,s.e))
A.x(q,"uStrength",new A.z(B.e,a.c.e.w))
A.b4(q,s.c)
A.c1(q,3,0)},
$ia2:1,
ga0(){return this.a}}
A.hx.prototype={}
A.hw.prototype={
a6(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$iwe:1}
A.fl.prototype={
gaj(){return"present"},
af(a,b){B.a.k(a.a,new A.am("present",B.dQ,A.f([new A.S(this.f,B.h)],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aU("present",s.b,s.c,B.t,B.f2,B.m)),q=A.ch(s.d),p=s.f
return A.f([new A.jB(new A.aT("present",A.f([new A.S(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$iac:1}
A.jB.prototype={
ag(a){var s=this,r=a.a6(s.d.a),q=a.b.a
A.bD(q,null)
A.aY(q,s.a.a5())
A.bO(q,s.b.b)
A.b4(q,s.c)
A.aB(q,0,r.b)
A.c1(q,3,0)},
$ia2:1,
ga0(){return this.a}}
A.iD.prototype={
gaj(){return"ps1Quantize"},
af(a,b){B.a.k(a.a,new A.am("ps1Quantize",B.B,A.f([new A.S(this.e,B.h),B.c0],t.C)))},
ae(a){var s=this,r="ps1Quantize",q=s.a.ak(new A.aU(r,s.b,s.c,B.t,B.eZ,B.eh)),p=A.ch(s.d),o=s.e
return A.f([new A.jC(new A.aT(r,A.f([new A.S(o,B.h),B.c0],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$iac:1}
A.jC.prototype={
ag(a){var s=this,r=a.a6(s.d.a),q=a.b.a
A.bD(q,a.a6("ps1Output").b)
A.aY(q,s.a.a5())
A.bO(q,s.b.b)
A.aB(q,0,r.b)
A.x(q,"uScene",B.u)
A.x(q,"uQuantizationBits",new A.z(B.e,a.c.e.z))
A.x(q,"uDitherStrength",new A.z(B.e,0))
A.b4(q,s.c)
A.c1(q,3,0)},
$ia2:1,
ga0(){return this.a}}
A.dE.prototype={}
A.iL.prototype={
gaj(){return"shadow"},
af(a,b){B.a.k(a.a,new A.am("shadowCaster",B.dO,A.f([B.bV],t.C)))},
ae(a){var s=this,r="shadowCaster",q=s.a.ak(new A.aU(r,s.b,s.c,B.bv,B.bt,B.eI))
return A.f([new A.jE(new A.aT(r,A.f([B.bV],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$iac:1}
A.jE.prototype={
ag(a){var s,r,q,p,o=this,n=a.a6("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bD(s,n.b)
A.aY(s,o.a.a5())
A.cE(s,B.ak,1,0,0,0)
return}r=A.rL(l)
o.r.$1(r)
s=m.a
A.bD(s,n.b)
A.aY(s,o.a.a5())
A.cE(s,B.ak,1,0,0,0)
A.bO(s,o.b.b)
A.x(s,"uAlbedo",B.u)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)o.jl(m,s[p],r)},
eZ(a,b){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.z(B.e,0))
s=this.a.a5()
A.aY(q,r.at?s.e3(!1):s)},
jl(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dO){s=b.b
if(!s.r)return
n.eU(a,s.c,c)
n.eZ(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.b4(s,r.a)
q=r.b
p=r.c
if(q)A.qc(s,p,0)
else A.c1(s,p,0)}else if(b instanceof A.dq){s=b.a.b
if(!s.r)return
n.eU(a,s.c,c)
n.eZ(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.b4(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.qd(s,p,o,0)
else A.qb(s,p,0,o)}else throw A.d(A.y("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dZ(b).n(0),null))},
eU(a,b,c){var s=a.a
A.x(s,"uModel",new A.z(B.q,new Float32Array(A.Y(b.ab().a))))
A.x(s,"uLightViewProjection",new A.z(B.q,new Float32Array(A.Y(c.a.a))))},
$ia2:1,
ga0(){return this.a}}
A.pc.prototype={
$1(a){return this.a.a=a},
$S:49}
A.pd.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.iM.prototype={
gaj(){return"shadowedWorld"},
af(a,b){var s=A.f([B.c_],t.C)
if(this.z)s.push(B.c2)
s.push(B.aa)
B.a.k(a.a,new A.am("shadowedWorld",B.bd,s))},
ae(a){var s=this,r="shadowedWorld",q=s.a.ak(new A.aU(r,s.b,s.c,B.f1,B.eQ,B.eg)),p=A.f([B.c_],t.C)
if(s.z)p.push(B.c2)
p.push(B.aa)
return A.f([new A.jF(new A.aT(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$iac:1}
A.jF.prototype={
ag(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=b0.a6("sceneColor"),a3=b0.b,a4=b0.c,a5=a4.c,a6=a4.d,a7=a4.e,a8=a0.r.$0(),a9=a3.a
A.bD(a9,a2.b)
A.aY(a9,a0.a.a5())
A.cE(a9,B.aY,1,0,0,0)
A.bO(a9,a0.b.b)
A.x(a9,"uAlbedo",B.u)
s=t._
A.aB(a9,1,s.a(a0.f.$0()))
A.x(a9,"uShadowMap",B.X)
r=t.n
A.x(a9,"uShadowMapTexelSize",new A.z(B.ab,new Float32Array(A.Y(A.f([0.001953125,0.001953125],r)))))
A.aB(a9,2,s.a(a0.x.$0()))
A.x(a9,"uSsao",B.cc)
A.x(a9,"uVertexSnapGrid",new A.z(B.e,a7.y))
A.x(a9,"uSceneColorSize",new A.z(B.ab,new Float32Array(A.Y(A.f([a0.y,a0.z],r)))))
A.x(a9,"uViewProjection",new A.z(B.q,new Float32Array(A.Y(a5.c.a))))
A.x(a9,"uView",new A.z(B.q,new Float32Array(A.Y(a5.a.a))))
A.x(a9,"uLightViewProjection",new A.z(B.q,new Float32Array(A.Y(a8.a.a))))
s=a6.b
A.x(a9,"uFogColor",new A.z(B.p,new Float32Array(A.Y(A.f([s.a,s.b,s.c],r)))))
A.x(a9,"uFogStart",new A.z(B.e,a6.c))
A.x(a9,"uFogEnd",new A.z(B.e,a6.d))
A.x(a9,"uFogHeightFalloff",new A.z(B.e,0))
A.x(a9,"uFogDensity",new A.z(B.e,0))
q=a0.w.$0()
s=q==null
p=s?a1:q.b
if(p==null)p=B.K
o=s?a1:q.c
if(o==null)o=B.aN
A.x(a9,"uLightPosition",new A.z(B.p,new Float32Array(A.Y(A.f([p.a,p.b,p.c],r)))))
A.x(a9,"uLightDirection",new A.z(B.p,new Float32Array(A.Y(A.f([o.a,o.b,o.c],r)))))
n=s?a1:q.d
if(n==null)n=B.S
A.x(a9,"uLightColor",new A.z(B.p,new Float32Array(A.Y(A.f([n.a,n.b,n.c],r)))))
m=s?a1:q.e
A.x(a9,"uLightIntensity",new A.z(B.e,m==null?0:m))
A.x(a9,"uSpotEnabled",new A.z(B.e,!s?1:0))
l=a6.x
m=l==null
k=m?a1:l.a
if(k==null)k=B.K
j=m?a1:l.b
if(j==null)j=B.S
A.x(a9,"uDirectionalDirection",new A.z(B.p,new Float32Array(A.Y(A.f([k.a,k.b,k.c],r)))))
A.x(a9,"uDirectionalColor",new A.z(B.p,new Float32Array(A.Y(A.f([j.a,j.b,j.c],r)))))
m=m?a1:l.c
A.x(a9,"uDirectionalIntensity",new A.z(B.e,m==null?0:m))
for(m=a6.y,i=0;i<4;++i){h=m.length
if(i<h){if(!(i<h))return A.e(m,i)
g=m[i]}else g=a1
h=g==null
f=h?a1:g.b
if(f==null)f=B.ac
e=h?a1:g.c
if(e==null)e=B.S
d=""+i
A.x(a9,"uPointPosition"+d,new A.z(B.p,new Float32Array(A.Y(A.f([f.a,f.b,f.c],r)))))
A.x(a9,"uPointColor"+d,new A.z(B.p,new Float32Array(A.Y(A.f([e.a,e.b,e.c],r)))))
c=h?a1:g.d
if(c==null)c=0
A.x(a9,"uPointIntensity"+d,new A.z(B.e,c))
h=h?a1:g.e
if(h==null)h=1
A.x(a9,"uPointRadius"+d,new A.z(B.e,h))}m=s?a1:q.f
A.x(a9,"uLightRange",new A.z(B.e,m==null?1:m))
m=s?a1:q.r
if(m==null)m=0.3
A.x(a9,"uLightInnerCos",new A.z(B.e,Math.cos(m)))
s=s?a1:q.w
if(s==null)s=0.5
A.x(a9,"uLightOuterCos",new A.z(B.e,Math.cos(s)))
b=a6.r
A.x(a9,"uAmbientColor",new A.z(B.p,new Float32Array(A.Y(A.f([b.a,b.b,b.c],r)))))
A.x(a9,"uAmbientIntensity",new A.z(B.e,a6.w))
for(a9=a4.a,s=a9.length,r=a7.x,a=0;a<a9.length;a9.length===s||(0,A.p)(a9),++a)a0.f_(a3,a9[a],r)
for(a4=a4.b,a9=a4.length,a=0;a<a4.length;a4.length===a9||(0,A.p)(a4),++a)a0.f_(a3,a4[a],r)},
f_(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dO){s=b.b
n.f0(a,s.c)
n.eV(a,s.b,s.e,s.f,c,!0)
r=n.c.$1(s.a)
s=a.a
A.b4(s,r.a)
q=r.b
p=r.c
if(q)A.qc(s,p,0)
else A.c1(s,p,0)}else if(b instanceof A.dq){s=b.a.b
n.f0(a,s.c)
n.eV(a,s.b,s.e,s.f,c,!0)
r=n.c.$1(s.a)
s=a.a
A.b4(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.qd(s,p,o,0)
else A.qb(s,p,0,o)}else throw A.d(A.y("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dZ(b).n(0),null))},
eV(a,b,c,d,e,f){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.z(B.e,0))
A.x(q,"uOpaqueCoverage",new A.z(B.e,c===B.al?0:1))
A.x(q,"uAffineWarpStrength",new A.z(B.e,0))
A.x(q,"uMaterialTint",new A.z(B.p,new Float32Array(A.Y(A.f([r.c,r.d,r.e],t.n)))))
A.x(q,"uEmissiveStrength",new A.z(B.e,0))
A.x(q,"uReceivesShadow",new A.z(B.e,1))
A:{s=null
if(B.al===c){switch(d.a){case 0:s=B.cK
break
case 1:s=B.cJ
break}break A}if(B.G===c||B.cH===c){s=this.a.a5()
break A}}A.aY(q,r.at?s.e3(!1):s)},
f0(a,b){var s=b.ab(),r=a.a
A.x(r,"uModel",new A.z(B.q,new Float32Array(A.Y(s.a))))
A.x(r,"uNormalMatrix",new A.z(B.q,new Float32Array(A.Y(s.hK().a))))},
$ia2:1,
ga0(){return this.a}}
A.iP.prototype={
gaj(){return"ssaoOcclusion"},
af(a,b){B.a.k(a.a,new A.am("ssaoOcclusion",B.bc,A.f([B.bR],t.C)))},
ae(a){var s=this,r="ssaoOcclusion",q=s.a.ak(new A.aU(r,s.b,s.c,B.t,B.eY,B.ee)),p=A.ch(s.d)
return A.f([new A.jJ(new A.aT(r,A.f([B.bR],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iac:1}
A.jJ.prototype={
ag(a){var s,r,q,p=this,o=a.c.e.c,n=a.b.a
A.bD(n,a.a6("ssaoRaw").b)
A.aY(n,p.a.a5())
if(o<=0){A.cE(n,B.P,1,1,1,1)
return}A.cE(n,B.P,1,0,0,0)
s=p.e.$0()
A.bO(n,p.b.b)
A.aB(n,0,t._.a(p.d.$0()))
A.x(n,"uSceneDepth",B.u)
A.x(n,"uNear",new A.z(B.e,s.f))
A.x(n,"uFar",new A.z(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.e(r,0)
A.x(n,"uProjScaleX",new A.z(B.e,r[0]))
if(5>=q)return A.e(r,5)
A.x(n,"uProjScaleY",new A.z(B.e,r[5]))
A.x(n,"uRadius",new A.z(B.e,p.f))
A.x(n,"uStrength",new A.z(B.e,o))
A.b4(n,p.c)
A.c1(n,3,0)},
$ia2:1,
ga0(){return this.a}}
A.iO.prototype={
gaj(){return"ssaoBlur"},
af(a,b){B.a.k(a.a,new A.am("ssaoBlur",B.bc,A.f([B.bX,B.bQ],t.C)))},
ae(a){var s=this,r="ssaoBlur",q=s.a.ak(new A.aU(r,s.b,s.c,B.t,B.eR,B.eN)),p=A.ch(s.d)
return A.f([new A.jI(new A.aT(r,A.f([B.bX,B.bQ],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$iac:1}
A.jI.prototype={
ag(a){var s,r,q=this,p=a.b.a
A.bD(p,a.a6("ssaoBlurred").b)
A.aY(p,q.a.a5())
if(a.c.e.c<=0){A.cE(p,B.P,1,1,1,1)
return}A.cE(p,B.P,1,0,0,0)
s=q.f.$0()
A.bO(p,q.b.b)
r=t._
A.aB(p,0,r.a(q.d.$0()))
A.x(p,"uSsaoRaw",B.u)
A.aB(p,1,r.a(q.e.$0()))
A.x(p,"uSceneDepth",B.X)
A.x(p,"uTexelSize",new A.z(B.ab,new Float32Array(A.Y(A.f([0.005208333333333333,0.009259259259259259],t.n)))))
A.x(p,"uNear",new A.z(B.e,s.f))
A.x(p,"uFar",new A.z(B.e,s.r))
A.b4(p,q.c)
A.c1(p,3,0)},
$ia2:1,
ga0(){return this.a}}
A.j3.prototype={
gaj(){return"vhs"},
af(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.am("vhs",B.B,A.f([new A.S(this.r,B.h),B.bT,B.bS],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aU("vhs",s.b,s.c,B.t,B.eS,B.ei)),q=A.ch(s.d),p=s.r
return A.f([new A.jP(new A.aT("vhs",A.f([new A.S(p,B.h),B.bT,B.bS],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$iac:1}
A.jP.prototype={
ag(a){var s,r=this,q=a.a6(r.f.a),p=a.a6("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bD(n,p.b)
A.aY(n,r.a.a5())
A.bO(n,r.b.b)
A.aB(n,0,q.b)
A.x(n,"uScene",B.u)
A.aB(n,1,t._.a(r.d.$0()))
A.x(n,"uHistory",B.X)
A.x(n,"uTime",new A.z(B.e,r.e.$0()))
A.x(n,"uChromaWeight",new A.z(B.e,o.Q))
A.x(n,"uTrackingWeight",new A.z(B.e,m))
A.x(n,"uNoiseWeight",new A.z(B.e,o.at))
A.x(n,"uHeadSwitchWeight",new A.z(B.e,o.ax))
A.x(n,"uDropoutWeight",new A.z(B.e,o.ay))
A.x(n,"uGhostWeight",new A.z(B.e,s))
A.b4(n,r.c)
A.c1(n,3,0)},
$ia2:1,
ga0(){return this.a}}
A.fq.prototype={}
A.jb.prototype={
gaj(){return"world"},
af(a,b){B.a.k(a.a,new A.am("worldOpaqueTransparent",B.bd,A.f([B.aa],t.C)))},
ae(a){var s=this,r=s.a.ak(new A.aU("safeWorld",s.b,s.c,B.f0,B.t,B.ec))
return A.f([new A.jQ(new A.aT("worldOpaqueTransparent",A.f([B.aa],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$iac:1}
A.jQ.prototype={
ag(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bD(j,a.a6("sceneColor").b)
A.aY(j,n.a.a5())
A.cE(j,B.aY,1,0,0,0)
A.bO(j,n.b.b)
A.x(j,"uViewProjection",new A.z(B.q,new Float32Array(A.Y(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.K
q=t.n
A.x(j,"uLightDir",new A.z(B.p,new Float32Array(A.Y(A.f([r.a,r.b,r.c],q)))))
p=k.r
A.x(j,"uAmbientColor",new A.z(B.p,new Float32Array(A.Y(A.f([p.a,p.b,p.c],q)))))
A.x(j,"uAmbientIntensity",new A.z(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.p)(j),++o)n.eA(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.p)(l),++o)n.eA(m,l[o])},
eA(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dq){s=b.a.b
n.eX(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.b4(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.qd(s,p,o,0)
else A.qb(s,p,0,o)}else if(b instanceof A.dO){s=b.b
n.eX(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.b4(s,r.a)
q=r.b
p=r.c
if(q)A.qc(s,p,0)
else A.c1(s,p,0)}else throw A.d(A.y("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dZ(b).n(0),null))},
eX(a,b){var s=b.ab(),r=a.a
A.x(r,"uModel",new A.z(B.q,new Float32Array(A.Y(s.a))))
A.x(r,"uNormalMatrix",new A.z(B.q,new Float32Array(A.Y(s.hK().a))))},
$ia2:1,
ga0(){return this.a}}
A.kR.prototype={
bO(a){var s,r,q
a.B()
s=A.a8(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.av
else q=r===0?B.at:B.au
return new A.dy(q,s)},
ia(a){var s,r=this.bO(a).a
A:{if(B.av===r){s=B.ft
break A}if(B.au===r){s=B.fs
break A}s=B.a7
break A}return s}}
A.hY.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.f1.prototype={
A(){return"GpuBufferKind."+this.b}}
A.i_.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.i0.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.hX.prototype={}
A.hZ.prototype={}
A.dm.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.f3.prototype={}
A.f2.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dD.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.fu.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cX.prototype={
A(){return"UniformType."+this.b}}
A.z.prototype={}
A.e7.prototype={
A(){return"ClearMask."+this.b}}
A.hJ.prototype={$ivj:1}
A.iB.prototype={
hL(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.l("resource is not in candidate: "+a))
return s}}
A.ly.prototype={
gp(){var s=this.c
if(s==null)throw A.d(A.l("GPU resource adapter is not initialized"))
return s},
by(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.jh(s.b)
r.b.by()
r.c=null
r.e=!0},
ew(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.w(a6,a7),a9=A.f([],t.l2)
try{for(p=b0.a.a,p=A.jv(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.ab(s,"sceneColor#1")){j=J.b_(a8,"sceneColor")
j.toString
J.bV(a8,s,j)
continue}j=this.jk(s,b1)
if(n.b!==B.f)A.k(A.l(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.y("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.i(l.createFramebuffer())
if(h==null)A.k(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.an
if(f&&!j.e)A.k(A.y("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.ba||g===B.dM
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
if(g!==a0){A.qg(n,h,d,c,a1,a2,b,a)
A.k(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.d4(new A.h8(h,d,c,a1,a2,b,a,i,j.b))
J.hk(a9,r)
J.bV(a8,s,r)}a6=A.cn(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.I(a6).i("fs<1>"),a6=new A.fs(a6,p),a6=new A.bx(a6,a6.gq(0),p.i("bx<a6.E>")),o=this.a,n=t.V,p=p.i("a6.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.qg(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
jk(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.f3(512,512,1,B.an,!0)
if(a==="sceneDepth")return new A.f3(o,n,1,B.an,!0)
s=B.b.Z(a,"ssao")||B.b.Z(a,"bloomBlur")||B.b.Z(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.f3(r,q,1,p?B.ba:B.dL,p)},
jh(a){var s,r,q,p,o,n=A.q_(t.f7.a(a).gao(),t._)
for(n=A.jv(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.qg(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.ey.prototype={
A(){return"_SlotState."+this.b}}
A.d2.prototype={
saP(a){this.c=this.$ti.i("1?").a(a)}}
A.cb.prototype={
aq(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.e(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.d2(B.ah,n.i("d2<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.e(n,q)
p=n[q];++p.a
p.b=B.i9
p.saP(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bv(a){return this.aq(a,null)},
a_(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dn(B.bg,a))
r=this.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dn(B.bh,a))
s=q.b
if(s===B.ai||s===B.ah)throw A.d(A.dn(B.ap,a))},
bx(a){var s,r,q=this.$ti
q.c.a(a)
this.a_(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dZ(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a_(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.e(r,s)
r[s].saP(b)},
aR(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dn(B.bg,a))
r=p.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dn(B.bh,a))
r=q.b
if(r===B.ai||r===B.ah)throw A.d(A.dn(B.dY,a))
q.b=B.ai
q.saP(null)
B.a.k(p.c,s);++p.e},
bc(){return new A.ci(this.lh(),this.$ti.i("ci<+(1,2)>"))},
lh(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bc(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.ai||j===B.ah){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.b5(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.ht.prototype={
A(){return"BlendEquation."+this.b}}
A.dc.prototype={
A(){return"BlendFactor."+this.b}}
A.hF.prototype={
A(){return"CullFace."+this.b}}
A.hH.prototype={
A(){return"DepthFunc."+this.b}}
A.ea.prototype={
e3(a){var s=this
return A.rf(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aL.prototype={
A(){return"StateField."+this.b}}
A.nT.prototype={
kM(a){var s,r=this.a
if(r==null)return A.ml(B.eH,t.dB)
s=A.a8(t.dB)
if(r.a!==a.a)s.k(0,B.aD)
if(r.b!==a.b)s.k(0,B.aE)
if(r.c!==a.c)s.k(0,B.aF)
if(r.d!==a.d)s.k(0,B.aG)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aH)
if(r.r!==a.r)s.k(0,B.aI)
if(r.w!==a.w)s.k(0,B.aJ)
if(r.x!==a.x)s.k(0,B.aK)
return s}}
A.d4.prototype={$ico:1}
A.h9.prototype={}
A.h8.prototype={}
A.ja.prototype={
iW(a){var s=this,r=A.c(s.a.canvas)
s.c=A.a4(new A.nR(s))
s.d=A.a4(new A.nS(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hQ(){var s=this,r=v.G,q=s.bp(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bp(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bp(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bp(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bp(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.cK(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.cK(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.mN("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bp(a){var s=A.cK(this.a.getParameter(a))
return typeof s=="number"?B.d.aS(s):0},
$ivD:1}
A.nR.prototype={
$1(a){A.c(a).preventDefault()
this.a.b=B.R},
$S:3}
A.nS.prototype={
$1(a){A.c(a)
this.a.b=B.f},
$S:3}
A.hL.prototype={
D(){var s=this
return A.V(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.hq.prototype={
iI(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.i(i.connect(A.c(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.i(r[k].connect(i))
r=j.z
r===$&&A.h()
A.c(r.gain).value=1
q=j.Q
q===$&&A.h()
A.c(q.gain).value=0.35
A.i(o.connect(r))
A.i(n.connect(r))
A.i(p.connect(r))
p=j.as
p===$&&A.h()
A.i(r.connect(p))
A.i(p.connect(q))
A.i(q.connect(i))
q=A.c(s.createBiquadFilter())
q.type="highpass"
A.c(q.frequency).value=80
j.k2!==$&&A.B()
j.k2=q
p=A.c(s.createBiquadFilter())
p.type="lowpass"
A.c(p.frequency).value=11e3
j.k3!==$&&A.B()
j.k3=p
A.i(q.connect(p))
A.i(p.connect(A.c(s.destination)))
i.disconnect(A.c(s.destination))
A.i(i.connect(q))
p.disconnect(A.c(s.destination))
q=A.c(s.createChannelSplitter(2))
j.k4!==$&&A.B()
j.k4=q
i=A.c(s.createChannelMerger(2))
j.ok!==$&&A.B()
j.ok=i
r=A.c(s.createGain())
A.c(r.gain).value=0.5
j.p1!==$&&A.B()
j.p1=r
A.i(p.connect(q))
A.i(i.connect(A.c(s.destination)))
j.eg()},
eg(){var s,r=this,q=r.k4
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
if(A.C(s.state)==="suspended")A.c(s.resume())},
f1(a){var s,r,q=this
if(B.b.Z(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"){s=q.f
s===$&&A.h()
return s}r=B.eV.h(0,a)
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
ju(){var s,r,q,p,o,n,m,l=this.a,k=A.b6(l.sampleRate),j=B.d.aD(k*2),i=A.c(l.createBuffer(2,j,k))
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
r=A.c(s.createBufferSource())
r.buffer=o
A.c(r.playbackRate).value=0.94+p.ax.cn()*0.12
q=A.c(s.createGain())
A.c(q.gain).value=b
A.i(r.connect(q))
A.i(q.connect(p.f1(a)))
r.onended=A.a4(new A.kC(r,q))
r.start()},
lD(a){return this.dO(a,1)},
hO(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this,k=l.at.h(0,a)
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
m=l.eu(l.b.hN(e,s))
A.c(o.frequency).value=m.b
A.c(n.gain).value=Math.pow(10,m.a/20)}}l.CW.l(0,o,new A.jH(r,q,n,o,p,e))
r.onended=A.a4(new A.kB(l,o))
A.i(r.connect(q))
A.i(q.connect(n))
A.i(n.connect(o))
A.i(o.connect(p))
A.i(p.connect(l.f1(a)))
r.start()},
lE(a,b,c,d){return this.hO(a,b,c,1,d,null,null)},
eu(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.b5(r,q)},
eb(a){var s,r,q,p,o=this
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
A.i(q.connect(p))
r=o.e
r===$&&A.h()
A.i(p.connect(r))
q.onended=A.a4(new A.kD(o,q,p))
q.start()
o.cy=q},
e7(a){if(this.p2===a)return
this.p2=a
this.eg()},
aT(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.K(c==null?q.fr:c,0,1)
q.fx=B.d.K(f==null?q.fx:f,0,1)
q.fy=B.d.K(b==null?q.fy:b,0,1)
q.go=B.d.K(a==null?q.go:a,0,1)
q.id=B.d.K(d==null?q.id:d,0,1)
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
for(s=i.CW,s=new A.U(s,A.o(s).i("U<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.i_(p,g)
m=n==null?i.eu(h.hN(p,g)):new A.b5(n.b,n.c)
l=A.b6(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.c(A.c(o.frequency).cancelScheduledValues(l))
A.c(A.c(o.frequency).setValueAtTime(A.b6(A.c(o.frequency).value),l))
j=l+0.08
A.c(A.c(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.c(A.c(o.gain).cancelScheduledValues(l))
A.c(A.c(o.gain).setValueAtTime(A.b6(A.c(o.gain).value),l))
A.c(A.c(o.gain).linearRampToValueAtTime(k,j))}}}
A.kA.prototype={
$1(a){return this.i5(t.gc.a(a))},
i5(a){var s=0,r=A.ba(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bc(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.aa(A.aE(A.c(A.c(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.aa(A.aE(A.c(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.aa(A.aE(A.c(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.af(h)
A.c(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.b8(null,r)
case 1:return A.b7(p.at(-1),r)}})
return A.b9($async$$1,r)},
$S:52}
A.kC.prototype={
$1(a){A.c(a)
this.a.disconnect()
this.b.disconnect()},
$S:3}
A.kB.prototype={
$1(a){var s
A.c(a)
s=this.a.CW.aa(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:0}
A.kD.prototype={
$1(a){var s,r
A.c(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:3}
A.jH.prototype={}
A.hr.prototype={
A(){return"AudioCategory."+this.b}}
A.kt.prototype={
iK(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.dy)
if(!B.a.a7(A.f([d.a,d.b,d.c],t.n),new A.ku()))throw A.d(B.d8)}}
A.ku.prototype={
$1(a){return isFinite(A.d6(a))},
$S:5}
A.kd.prototype={
iH(a,b){if(this.a.length===0)throw A.d(B.d3)
if(!B.a.a7(A.f([a.a,a.b,a.c],t.n),new A.ke()))throw A.d(B.db)}}
A.ke.prototype={
$1(a){return isFinite(A.d6(a))},
$S:5}
A.eR.prototype={
B(){if(B.a.R(A.f([-1.5,-12,-28,2e4,1100,320],t.n),new A.kf()))throw A.d(B.dm)},
hZ(a){this.B()
if(a.ax&&!a.ay&&!a.z)return new A.b5(-1.5,2e4)
if(a.ay)return new A.b5(-28,320)
return new A.b5(-12,1100)}}
A.kf.prototype={
$1(a){return!isFinite(A.d6(a))},
$S:5}
A.kp.prototype={
iJ(a){var s=A.o(a)
if(new A.a5(a,s.i("a5<1>")).R(0,new A.kr())||new A.aH(a,s.i("aH<2>")).R(0,new A.ks()))throw A.d(B.dw)}}
A.kr.prototype={
$1(a){return A.C(a).length===0},
$S:4}
A.ks.prototype={
$1(a){var s
t.a.a(a)
s=J.ax(a)
return s.gI(a)||s.R(a,new A.kq())},
$S:54}
A.kq.prototype={
$1(a){return A.C(a).length===0},
$S:4}
A.pT.prototype={}
A.ky.prototype={}
A.kv.prototype={
iL(a,b,c){var s
for(s=this.b.gao(),s=s.gu(s);s.m();)s.gp().B()},
i_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.e
if(h.h(0,a)==null)throw A.d(A.l("audio source room missing: "+a))
if(h.h(0,b)==null)throw A.d(A.l("audio listener room missing: "+b))
s=this.jZ(a,b)
for(h=s.a,r=h.length,q=this.b,p=0,o=2e4,n=0;n<h.length;h.length===r||(0,A.p)(h),++n){m=h[n]
l=q.h(0,m.a)
k=(l==null?B.aS:l).hZ(m)
j=k.b
p+=k.a
if(j<o)o=j}r=!s.b
if(r&&a!==b){p=-48
o=240}q=A.f([],t.s)
for(i=h.length,n=0;n<h.length;h.length===i||(0,A.p)(h),++n)q.push(h[n].a)
h=B.d.K(p,-60,0)
i=B.c.K(o,120,2e4)
r=!r||a===b
return new A.ky(A.ao(q,t.N),h,i,r)},
jZ(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.i6
s=t.N
r=A.V([a0,0],s,t.i)
q=A.V([a0,B.I],s,t.fB)
p=A.at([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.N(p,l)
B.a.Y(k,new A.kw(r))
j=B.a.gam(k)
p.aa(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.fE(s,!0)}i=o.an(j)
h=A.N(i,i.$ti.i("n.E"))
B.a.Y(h,new A.kx())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.p)(h),++g){f=h[g]
e=f.be(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.aS:d).hZ(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.l(0,e,a)
b=q.h(0,j)
b.toString
b=A.N(b,m)
b.push(f)
q.l(0,e,b)
p.k(0,e)}}}return B.i5}}
A.kw.prototype={
$2(a,b){var s,r,q
A.C(a)
A.C(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.F(r,s)
return q===0?B.b.F(a,b):q},
$S:55}
A.kx.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:113}
A.fE.prototype={}
A.kQ.prototype={
dM(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.uO().aY(q).ga4()
p.d=q
p.c=p.b.aY(q).ga4()
p.a=a}}
A.li.prototype={}
A.iS.prototype={}
A.lw.prototype={
jn(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cK(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cl(a,b,c,d,e,f){return this.li(a,b,c,d,e,f)},
li(a,b,c,a0,a1,a2){var s=0,r=A.ba(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cl=A.bc(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.c(A.c(j.document).createElement("img"))
m.src=a
s=7
return A.aa(A.aE(A.c(m.decode()),t.X),$async$cl)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aQ(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
case 6:case 1:return A.b8(q,r)
case 2:return A.b7(o.at(-1),r)}})
return A.b9($async$cl,r)},
cm(a,b,c){var s=!1
return this.lj(t.a.a(a),b,!1)},
lj(b0,b1,b2){var s=0,r=A.ba(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cm=A.bc(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.f([],t.Y)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.c(A.c(a0.document).createElement("img"))
j.src=k
s=10
return A.aa(A.aE(A.c(j.decode()),a1),$async$cm)
case 10:J.hk(l,j)
case 8:b0.length===a||(0,A.p)(b0),++a2
s=7
break
case 9:if(J.b0(l)===0){a=A.l("texture array needs at least one layer")
throw A.d(a)}i=A.a(J.b_(l,0).width)
h=A.a(J.b_(l,0).height)
if(J.ab(i,0)||J.ab(h,0)||J.uQ(l,new A.lx(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.b0(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.ac()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.k7(a1)
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
throw A.d(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aQ(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.pS(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.b0(l)
if(typeof a1!=="number"){q=a1.cw()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.b_(l,c)])
d=A.a(a.getError())
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.pS(d,16)+")")
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
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.pS(d,16)+")")
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
b=A.af(a9)
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
case 6:case 1:return A.b8(q,r)
case 2:return A.b7(o.at(-1),r)}})
return A.b9($async$cm,r)},
f2(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.ab(A.cK(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.ec("shader compile failed: "+A.q(A.tB(s,"getShaderInfoLog",r,t.x))+"\n"+b))
return r},
aF(a,b){var s=v.G,r=this.f2(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.f2(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.ab(A.cK(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.ec("program link failed: "+A.q(A.tB(p,"getProgramInfoLog",o,t.x))))
return o},
ghJ(){var s=A.cK(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aS(s):0},
e_(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.fn(0,c,B.c.iG(b.byteLength,p))*p
if(B.c.W(o,4)!==0)A.k(A.y("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.uR(B.n.gkr(b),b.byteOffset+0*p,B.c.L(o,4)))}},
cY(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aQ(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cU(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aQ(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
f4(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.cY(q,a,b)
s=v.G
A.aQ(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
ey(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aQ(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aQ(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
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
else m=j.ey(a,b)
if(d)h.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.ec("framebuffer incomplete"))
return new A.iS(g,n,o,m,q,p,l,e,a,b)},
hI(a,b,c,d){return this.dN(a,b,c,d,0)},
lm(a,b,c,d){return this.dN(a,b,!0,c,d)},
b3(a,b,c){return this.dN(a,b,c,!1,0)},
cW(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aQ(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
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
a.d=n.ey(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
lN(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aQ(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aQ(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aQ(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
kC(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
A.lx.prototype={
$1(a){A.c(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:57}
A.i4.prototype={
dY(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].mb(a)}}
A.i6.prototype={
bN(a){if(this.f)return
A.rq(a,"requestPointerLock",t.X)},
jF(a){A.c(a)
if(A.an(a.repeat))return
if(!this.w)return
if(this.b.k(0,A.C(a.code)))this.c.k(0,A.C(a.code))},
jH(a){this.b.aa(0,A.C(A.c(a).code))},
jL(a){var s=this
A.c(a)
if(!s.f||!s.w)return
s.d=s.d+s.eI(a,"movementX")
s.e=s.e+s.eI(a,"movementY")},
jJ(a){var s=this
A.c(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
eI(a,b){var s=A.tw(a[b])
if(s==null)s=null
return s==null?0:s},
aU(){var s=this
s.b.H(0)
s.c.H(0)
s.e=s.d=0}}
A.ik.prototype={}
A.dv.prototype={
geE(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gG(B.c.cr(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gG(B.c.cr(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
V(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.dv&&A.k6(r)===A.k6(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gG(a){return this.geE()}}
A.mq.prototype={
iQ(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].geE(),q)}}
A.ce.prototype={
cp(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.n.im(s,0,m,l)
n.a=s}r=b.ad(0,a).aY(d.ad(0,a)).ga4()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fw(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fw(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fw(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fw(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fw(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fw(n.a,l,d,r,q,p,o,0,1,0,k,0)},
al(a,b,c,d,e){return this.cp(a,b,c,d,e,1,1)}}
A.mW.prototype={
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
lL(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
A.n4.prototype={
cK(a,b,c){var s,r,q
try{r=this.a.aF(b,c)
return r}catch(q){s=A.af(q)
r=A.ec(a+": "+A.q(s))
throw A.d(r)}}}
A.mY.prototype={}
A.fL.prototype={}
A.jK.prototype={}
A.jy.prototype={}
A.jw.prototype={}
A.mZ.prototype={
iR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.f([new A.dv(0,0,1,0),new A.dv(1,0,1,0),new A.dv(2,0,1,0)],t.mn),e=t.S
e=new A.mq(f,A.w(e,e))
e.iQ(f)
h.dI=e
h.hf=1.9
h.dw=h.b0/h.b_
r=J.ib(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fL()
t.cu.a(r)
f=h.aH
e=f.aF("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aF(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aF(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aF(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aF(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ah!==$&&A.B()
h.ah=new A.n4(f,e,p,o,n,m)
h.b=t.d4.a(new A.n_(h))
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
n=A.an(A.c(A.c(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bB!==$&&A.B()
h.bB=n
h.shG(16777215)
n=new A.nl(o,f,A.f([],t.aA),A.f([],t.df),A.f([],t.h),A.f([],t.kS))
m=n.c=f.aF("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.dH!==$&&A.B()
h.dH=n
n=new A.mW(f,o)
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
if(e>1)try{h.bA=f.lm(h.b_,h.b0,!0,s)}catch(i){h.bA=null}try{h.aZ=f.hI(h.b_,h.b0,!0,!0)}catch(i){h.bA=h.aZ=null}if(h.aZ!=null)try{h.ca=f.b3(h.gbS(),h.gbR(),!1)
h.cb=f.b3(h.gbS(),h.gbR(),!1)
h.cc=f.b3(h.b_,h.b0,!1)}catch(i){h.cc=h.cb=h.ca=null}},
gbS(){var s=B.c.L(this.b_,4)
return s<1?1:s},
gbR(){var s=B.c.L(this.b0,4)
return s<1?1:s},
aA(a){return this.lk(t.G.a(a))},
lk(a){var s=0,r=A.ba(t.H),q=this,p,o,n,m,l,k,j
var $async$aA=A.bc(function(b,c){if(b===1)return A.b7(c,r)
for(;;)switch(s){case 0:p=new A.U(a,A.o(a).i("U<1,2>")).gu(0),o=q.aH
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.bu.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.aa(o.cl(k,l,!1,!1,!1,m==="grime"),$async$aA)
case 4:if(c!=null)q.eB(m,l)
s=2
break
case 3:p=t.lS
j=A.N(new A.c2(new A.O(A.f(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.n0(a)),t.dD),p),p.i("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.aa(o.cm(j,12,!1),$async$aA)
case 7:q.c7=c
case 6:return A.b8(null,r)}})
return A.b9($async$aA,r)},
bg(){var s=0,r=A.ba(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bg=A.bc(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.w(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.aa(A.aE(A.c(A.c(g.window).fetch("shaders/"+A.q(m))),f),$async$bg)
case 13:l=a3
if(!A.an(l.ok)){i=A.ec("HTTP "+A.q(A.qY(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.aa(A.aE(A.c(l.text()),i),$async$bg)
case 14:a.bV(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.af(c)
i=A.ec("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.d(i)
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
j=A.af(b)
A.c(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.b8(null,r)
case 1:return A.b7(p.at(-1),r)}})
return A.b9($async$bg,r)},
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
q=A.N(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.p)(q),++k){s=q[k]
o=B.bu.h(0,s)
o.toString
i.eB(s,o)}A.c(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.af(j)
A.c(v.G.console).error("shader recompile failed: "+A.q(r))}},
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
eB(a,b){var s,r,q,p=this
p.fj.k(0,a)
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
shG(a){var s=A.p6(a)
this.fV=s.a
this.fW=s.b
this.fX=s.c},
c2(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.W(a1,14)!==0)throw A.d(A.y("static mesh needs a multiple of 14 floats, got "+a1,null))
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
b.eh(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.kY++
b.dh.l(0,a1,new A.jK(e,d,i,s,s,a3))
return a1},
kO(a){var s,r,q,p=this,o=p.dh.h(0,a)
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
l6(a){var s,r=this.dh.aa(0,a)
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
continue}j=A.p6(k.b)
m=c.bB
m===$&&A.h()
i=m?1:1+(A.pM(c.dt*8,27229+n)*2-1)*k.e
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
q=r?1:1+(A.pM(c.dt*2.5,40503)*2-1)*0
c.kV=q
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
if(p===B.aA){f=B.d.K(q.b/1.5,0,1)
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
l3(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.de=b4
s=b2.bD
r=0
if(s>0){for(s=b2.fT,q=0;p=b2.bD,q<p;++q)B.a.l(s,q,q)
b2.k5(p)
for(p=b2.dj,o=b2.df,n=0;n<b2.bD;++n){if(!(n<4000))return A.e(s,n)
m=s[n]
if(!(m<p.length))return A.e(p,m)
l=p[m]
r=A.tU(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.dj,p=b2.df,q=0;q<b2.bD;++q){if(!(q<s.length))return A.e(s,q)
l=s[q]
r=A.tU(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bD=0
for(s=b2.fS,q=0;p=b2.ce,q<p;++q)B.a.l(s,q,q)
b2.k6(p)
for(p=b2.kW,o=b2.fR,k=0,n=0;n<b2.ce;++n){if(!(n<800))return A.e(s,n)
m=s[n]
if(!(m<o.length))return A.e(o,m)
j=o[m]
i=A.p6(0)
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
k=A.tX(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.ce=0
s=b2.aH
o=b2.d6
o===$&&A.h()
s.e_(o,b2.df,r)
o=b2.d7
o===$&&A.h()
s.e_(o,p,k)
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
s.e_(h,b2.kX,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.dc
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.dg/14|0);++b2.bC}m=b2.cd
if(m!=null){a7=b2.aZ
if(a7!=null)s.lN(m,a7)}a8=b2.aZ
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
b0=g.lL(a8,0.5)
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
if(s.a===B.W)b1=0*(1-s.b/1)
else b1=0
s=b2.hx
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.n_.prototype={
$0(){var s=this.a.ah
s===$&&A.h()
return s.b},
$S:58}
A.n0.prototype={
$1(a){return this.a.h(0,A.C(a))},
$S:29}
A.nV.prototype={
gkg(){var s=this.b
s===$&&A.h()
return s},
eS(){var s,r,q,p,o,n,m=this,l=m.kh(),k=m.a
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
B.a.k(s,A.i(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.k(r,A.i(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.k(q,A.i(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.k(p,A.i(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.i(k.getUniformLocation(l,"uFlicker"))
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
m.kZ=A.i(k.getUniformLocation(l,"uShadow0"))
m.l_=A.i(k.getUniformLocation(l,"uShadow1"))
m.l0=A.i(k.getUniformLocation(l,"uShadow2"))
m.h8=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.du=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dv=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.h9=A.i(k.getUniformLocation(l,"uShadowBias"))
m.ha=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.hb
B.a.H(s)
r=m.hc
B.a.H(r)
q=m.hd
B.a.H(q)
p=m.he
B.a.H(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.du,12)},
cH(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.eh(56)},
eh(a){var s=this,r=s.c
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
A.aQ(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
kh(){return this.gkg().$0()}}
A.nl.prototype={
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
A.kP.prototype={
m5(a){var s,r,q,p,o,n=B.r.bb(a.D(),null)
this.a.fi(n)
s=A.c(A.c(v.G.window).localStorage)
r=A.bq(s.getItem("quarantine.save.active"))
q=A.bq(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
lH(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.c(A.c(v.G.window).localStorage)
r=A.bq(s.getItem("quarantine.save.active"))
q=A.bq(s.getItem("quarantine.save.previous"))
p=this.ex(r,a)
if(p!=null)return new A.dC(p,null)
o=this.ex(q,a)
if(o!=null)return new A.dC(o,"recovered previous save")
if(r==null)return B.h2
return B.h1}catch(n){return B.h0}},
ex(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.fi(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.af(q) instanceof A.K)return null
else throw q}}}
A.hN.prototype={
iM(a,b,c,d,e){if(this.a.length===0)throw A.d(B.ds)
if(this.b<0)throw A.d(B.d9)},
D(){var s,r=this,q=r.d
q=q==null?null:A.ao(q,t.i)
s=t.z
return A.cn(A.V(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bJ.prototype={
A(){return"EndingKind."+this.b}}
A.l6.prototype={}
A.eb.prototype={
D(){var s=t.N
return A.V(["kind",this.a.b],s,s)}}
A.l9.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:60}
A.iy.prototype={
D(){var s,r=this,q=t.N,p=A.w(q,t.z)
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
lc(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ad(0,new A.b(0,1.3499999999999999,0))
return!new A.hy(s,s.U(0,new A.b(0,1.2000000000000002,0))).hF(a,r)}}
A.mG.prototype={
D(){return A.jW(this.a)}}
A.eo.prototype={
D(){return A.V(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.na.prototype={
fi(a){var s,r,q,p,o,n,m,l=B.r.bw(a,null),k=t.f
if(!k.b(l))throw A.d(B.dx)
s=t.N
r=t.z
q=A.b1(l,s,r)
p=q.h(0,"version")
if(A.aO(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ag("unsupported save version "+A.q(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.dd)
k=A.b1(n,s,r)
return A.rJ(A.b1(m,s,r),k,2)}}
A.dC.prototype={}
A.dl.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hV.prototype={}
A.lt.prototype={}
A.ls.prototype={
gap(){var s=this.d
return new A.lt(s.a,s.b)},
gdQ(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.V(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.V(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.V(["entryCount",m.e.b.a],k,t.S)
p=A.rm(m.c).D()
o=m.r
n=o.c
return new A.mG(A.jW(A.V(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.V(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
kk(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.ay(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bZ(B.dG)}if(n<a)this.bZ(B.dH)},
iA(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cC(a)&&s.iz(b)},
lI(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cd)r.c=Math.min(1,r.c+0.1)},
iy(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.vg(j,A.ao(i.d,h).length)
if(a===B.c8)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.I(r)
A.vf(j,new A.Q(r,q.i("r(1)").a(new A.lu(k)),q.i("Q<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.ef,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aD(j.a/1*3)
B.a.k(r.r,new A.ep(q.a,a,b))
m=r.a
A.vr(m,q.a,n,k.b,A.ao(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.ip(B.eE)
s.r.kE(o,c)
l=B.d.aD(j.b/1*6)
if(l>0)r.cC(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aH(i,A.o(i).i("aH<2>")).R(0,new A.lv())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bZ(B.dJ)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bZ(B.dI)},
bZ(a){var s=this;++s.y
B.a.k(s.w,new A.hV())
B.a.k(s.x,A.vh(A.xP(a),s.b,s.y-1))}}
A.lu.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.nm().iv(this.a.c,a.a)},
$S:28}
A.lv.prototype={
$1(a){return t.R.a(a).e},
$S:27}
A.kE.prototype={
e0(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
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
for(n=A.I(j),i=n.i("r(1)"),n=n.i("Q<1>"),f=0;f<l.length;l.length===k||(0,A.p)(l),++f){e=l[f]
d=A.eg(new A.Q(j,i.a(new A.kJ(e)),n),r)
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
if(a1.length!==s.length||B.a.gbk(a1).b!==B.a.gbk(s).b)throw A.d(A.l("stair manifest mismatch"))}}
A.kF.prototype={
$1(a){return A.v2(a,this.a)},
$S:63}
A.kG.prototype={
$1(a){var s=this.a,r=A.k2(a,"portal"),q=A.d8(r,"id"),p=A.d8(r,"a"),o=A.d8(r,"b"),n=A.hg(r,"width"),m=A.hg(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.C(r.h(0,"doorKit")):null
return new A.e1(q,p,o,n*s,m*s,l)},
$S:64}
A.kH.prototype={
$1(a){var s=A.k2(a,"stair")
A.d8(s,"id")
return new A.e3(A.d8(s,"portalId"))},
$S:65}
A.kI.prototype={
$1(a){return typeof a=="string"?a:A.hd("exterior cell")},
$S:26}
A.kJ.prototype={
$1(a){return t.Z.a(a).a===this.a.a},
$S:15}
A.e2.prototype={}
A.kK.prototype={
$1(a){var s=this.a,r=A.k2(a,"window"),q=A.d8(r,"id"),p=A.hg(r,"offset")
A.hg(r,"sill")
return new A.e4(q,p*s,A.hg(r,"width")*s,A.hg(r,"height")*s)},
$S:68}
A.e4.prototype={}
A.e1.prototype={}
A.e3.prototype={}
A.pa.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:14}
A.hy.prototype={
lT(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.I(s)
q=new A.Q(s,r.i("r(1)").a(new A.kS(e)),r.i("Q<1>"))
p=!q.gu(0).m()?null:q.gam(0)
if(p==null){n.d=null
return}if(!(n.bY(b,p.f)&&a==="hall"))o=n.bY(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.jc(p,B.d.K(d,0,1))},
lo(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.eH(f,c,d)
s=g.jo(a,b,c,d)
if(s!=null){g.d=s
return g.eH(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.kx(Math.sqrt(r*r+q*q)/0.08))
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
return new A.im(m,n)},
jo(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bY(c,l.f)&&n
j=q&&this.bY(c,l.r)&&o
if(k||j)return new A.jc(l,k?0:1)}return null},
eH(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ad(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.K(a.b+o/p,0,1)
n=A.rW(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.c0(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.im(n,k)},
bY(a,b){var s=a.ad(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
f8(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.fG(c,!1)
s=c.U(0,d)
this.c0(s)
if(this.hF(a,b)){this.c0(c)
return new A.fG(c,!0)}return new A.fG(s,!1)},
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
for(r=k.a,q=a.an(r),p=J.P(q.a),q=new A.J(p,q.b,q.$ti.i("J<1>"));q.m();){o=p.gp()
n=o.be(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fc(k,o,s)&&this.jg(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
k8(a,b,c){var s,r,q
for(s=a.an(b.a),r=J.P(s.a),s=new A.J(r,s.b,s.$ti.i("J<1>"));s.m();){q=r.gp()
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
skp(a){this.a=t.bf.a(a)}}
A.kS.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:70}
A.im.prototype={}
A.fG.prototype={}
A.jc.prototype={}
A.f5.prototype={}
A.lE.prototype={
kE(a,b){var s,r=this.b
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
D(){return A.V(["landedCount",this.b],t.N,t.z)}}
A.n6.prototype={
iT(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.B()
o.c=new A.i3(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.p)(n),++q){p=n[q]
r.l(0,p.a,o.ei(p))}},
cq(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o)p.l6(r[o])
s.l(0,a,n.ei(m))},
ei(a){var s=A.u9(this.a,a),r=this.b,q=A.f([r.c2(s.a,1),r.c2(s.b,2),r.c2(s.c,0)],t.t),p=s.d
if(!B.n.gI(p))q.push(r.c2(p,0))
return q},
i7(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.F
s=l.a
r=A.at([s],t.N)
for(n=n.an(s),q=J.P(n.a),n=new A.J(q,n.b,n.$ti.i("J<1>"));n.m();){p=q.gp()
o=p.be(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.k(0,o)}return r},
kN(a,b){var s,r,q,p,o=this,n=o.i7(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.i2(n,b))
s=t.f0
m.dk=l.length<=4?A.ao(l,s):A.ao(A.nu(l,0,A.dW(4,"count",t.S),A.I(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)m.kO(r[p])}}}
A.aS.prototype={}
A.hQ.prototype={
glf(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.f([r,q,p,o,n,m],t.n),new A.lb())&&o>=r&&n>=q&&m>=p}}
A.lb.prototype={
$1(a){return isFinite(A.d6(a))},
$S:5}
A.i2.prototype={
B(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.W(s,3)!==0}else s=!0
if(s)throw A.d(A.y("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.y("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glf())throw A.d(A.y("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.p)(l),++r){p=l[r]
if(B.a.R(A.f([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.lG()))throw A.d(A.y("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.y("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.y("QHMX index "+o+" exceeds vertex count",m))}}}
A.lG.prototype={
$1(a){return!isFinite(A.d6(a))},
$S:5}
A.lF.prototype={
t(a,b,c,d,e,f,g){var s=this
s.b6(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.b6(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.b6(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.b6(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.b6(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.b6(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
b6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aS(a,b,c,m,n,o,0,0,p),r=new A.aS(g,h,i,m,n,o,1,1,p)
this.b7(s,new A.aS(d,e,f,m,n,o,1,0,p),r)
this.b7(s,r,new A.aS(j,k,l,m,n,o,0,1,p))},
b7(a,b,c){var s=this,r=s.b
B.a.k(r,s.cP(a))
B.a.k(r,s.cP(b))
B.a.k(r,s.cP(c))},
cP(a){var s,r,q=B.a.b2(A.f([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
ks(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.i2(A.ao(g,t.hZ),new Uint16Array(A.Y(this.b)),new A.hQ(s,r,q,p,o,n))
h.B()
return h}}
A.hR.prototype={}
A.di.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.lc.prototype={
ky(a){var s
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
kz(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b4
break A}if("kitchen"===a||"cellar"===a){s=B.cQ
break A}if("bathroom"===a){s=B.cR
break A}if("spare-room"===a){s=B.cS
break A}s=B.b4
break A}return this.ky(s)}}
A.d1.prototype={}
A.oW.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:71}
A.cP.prototype={
A(){return"FocusKind."+this.b}}
A.dj.prototype={}
A.n7.prototype={}
A.oA.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:72}
A.oz.prototype={
$1(a){return t.Z.a(a).b===this.a},
$S:15}
A.d0.prototype={}
A.ez.prototype={}
A.lC.prototype={
j_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.lT(),a4=this.b,a5=A.az(a4,!0,t.J)
B.a.H(a4)
s=A.f([],t.kl)
for(r=a5.length,q=t.jc,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.p)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.f([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.p)(i),++g){f=i[g]
j.push(new A.aZ(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.f([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.p)(h),++g){d=h[g]
i.push(new A.b2(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.f([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.p)(e),++g){b=e[g]
h.push(new A.bj(b.a,b.b,a3.$1(b.c)))}s.push(new A.aK(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.az(a4,!0,t.T)
B.a.H(a4)
s=A.f([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bk(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cW(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
jt(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
if(q.a3(n))throw A.d(A.l("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){m=s[p]
n=m.a
if(q.a3(n))throw A.d(A.l("duplicate portal "+n))
q.l(0,n,m)}},
ke(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
kd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.w(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fb(o,i,h,g,f,e)
a5.ee(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.l(l+" references invalid portal "+d))
i=c.ar(l)
h=c.a9(l)
g=c.w
f=c.x
a5.fb(o,i,h,g,0,f)
a5.ee(a6,l,c.ar(l),c.a9(l),c.a9(l)+g,0,f)}}for(s=new A.U(a6,a6.$ti.i("U<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.c3(a)
r.Y(a,new A.lU())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.l("overlapping apertures on "+b.a))}}},
fb(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.j
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
ee(a,b,c,d,e,f,g){J.hk(t.gz.a(a).lG(b+":"+c.b,new A.lS()),new A.fX([d,e,f,g]))},
aG(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.iw(q),s.b+r.ix(q),s.c)},
an(a){var s=this.c,r=A.I(s)
return new A.Q(s,r.i("r(1)").a(new A.lV(a)),r.i("Q<1>"))},
lF(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.ay(a,"roomId","not a portal endpoint"))
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
gm4(){return B.a.bE(this.b,0,new A.lW(),t.S)},
hN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.I
s=A.f([new A.b5(a,B.I)],t.bM)
r=A.at([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.lK(s,0)
n=o.a
m=o.b
for(l=this.an(n),k=J.P(l.a),l=new A.J(k,l.b,l.$ti.i("J<1>"));l.m();){j=k.gp()
i=j.be(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.N(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.N(m,p)
h.push(j)
B.a.k(s,new A.b5(i,h))}}}return B.I}}
A.lT.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:73}
A.lU.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:74}
A.lS.prototype={
$0(){return A.f([],t.a3)},
$S:94}
A.lV.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:76}
A.lW.prototype={
$2(a,b){return A.a(a)+t.J.a(b).e.length},
$S:77}
A.la.prototype={}
A.nm.prototype={
iv(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.nn())}else s=!1
return s}}
A.nn.prototype={
$1(a){return t.Z.a(a).w},
$S:15}
A.lH.prototype={
lC(a){var s=this.e,r=A.I(s)
return new A.Q(s,r.i("r(1)").a(new A.lK(a)),r.i("Q<1>"))},
c3(a){return B.a.cf(this.d,new A.lI(a),new A.lJ(a))},
e0(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="inventory placement ",a7=a5.a
if(a7!==1)throw A.d(A.l("unsupported house inventory schema "+a7))
a7=a5.b
if(a7!=="assets/house/house.json")throw A.d(A.l("inventory source changed: "+a7))
a7=a5.c
if(Math.abs(a7-1.5)>0.0001)throw A.d(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a8(s)
for(q=a5.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.d(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.l("invalid bounds for inventory asset "+m))}j=A.a8(s)
i=A.a8(s)
for(s=a5.e,q=s.length,p=a8.e,o=0;o<s.length;s.length===q||(0,A.p)(s),++o){h=s[o]
m=h.a
if(!j.k(0,m))throw A.d(A.l("duplicate inventory placement "+m))
l=h.b
g=p.h(0,l)
if(g==null)throw A.d(A.l(a6+m+" references "+l))
n=a5.c3(h.c)
k=h.z
if(k<0||!isFinite(k))throw A.d(A.l("invalid clearance for "+m))
f=h.e
if(f!=null&&!i.k(0,l+":"+f))throw A.d(A.l("duplicate inventory socket "+l+":"+f))
l=h.f
f=l.a
e=f.a*a7
d=f.b*a7
f=f.c*a7
c=n.f
b=c.b
c=c.a
a=l.c
a0=l.b.b*3.141592653589793/180
a1=Math.abs(Math.cos(a0))
a2=Math.abs(Math.sin(a0))
l=Math.abs(b.a-c.a)*0.5*(a.a*a7)
a=Math.abs(b.c-c.c)*0.5*(a.c*a7)
c=l*a1+a*a2
a=l*a2+a*a1
a3=h.hX(n,a7)
a4=0.43+k
l=-a4
if(!(e-c<l)){k=g.c
l=e+c>k.a+a4||f-a<l||f+a>k.c+a4||d+a3.b>k.b+a4||d+a3.a<l}else l=!0
if(l)throw A.d(A.l(a6+m+" escapes "+g.a))}}}
A.lK.prototype={
$1(a){return t.gB.a(a).b===this.a},
$S:78}
A.lI.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:79}
A.lJ.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:23}
A.c6.prototype={}
A.c_.prototype={
hX(a,b){var s=this.f.c.b*b,r=a.f
return new A.b(r.a.b*s,r.b.b*s,0)}}
A.m1.prototype={}
A.m0.prototype={}
A.p9.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:14}
A.ca.prototype={}
A.i3.prototype={
i2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.U.a(a)
s=A.f([],t.bz)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.p)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.ca(new A.b(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.jX(j),0.06))}}B.a.Y(s,new A.lL(b))
return A.nu(s,0,A.dW(4,"count",t.S),t.f0).bi(0)},
jX(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.lL.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.ad(0,s).gq(0),b.a.ad(0,s).gq(0))},
$S:81}
A.f_.prototype={
A(){return"Floor."+this.b}}
A.cO.prototype={
A(){return"Facing."+this.b}}
A.aZ.prototype={}
A.bk.prototype={
be(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
ar(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.ay(a,"roomId","not an endpoint of "+s.a))},
a9(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.ay(a,"roomId","not an endpoint of "+s.a))}}
A.b2.prototype={}
A.bj.prototype={}
A.cM.prototype={}
A.cW.prototype={}
A.aK.prototype={}
A.lN.prototype={
kR(a){return B.a.cf(this.c,new A.lO(a),new A.lP(a))},
m1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.l("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.l("soundscape source changed: "+f))
f=t.N
s=A.a8(f)
f=A.w(f,t.gB)
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
if(k.gI(k)||k.gao().R(0,new A.lQ()))throw A.d(A.l("sound emitter "+l+" has no usable cues"))
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
A.lO.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:82}
A.lP.prototype={
$0(){return A.k(A.l("sound emitter missing: "+this.a))},
$S:23}
A.lQ.prototype={
$1(a){return B.b.dX(A.C(a)).length===0},
$S:4}
A.c5.prototype={}
A.lD.prototype={
d_(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.ay(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.eD}q=A.f([],t.iG)
p=B.d.aI(r)+1
o=B.d.aI(b)
for(n=p;n<=o;++n){m=B.c.W(n,24)
B.a.k(q,new A.f4("tick"))
if(B.c.W(m,6)===0)B.a.k(q,new A.f4("chime"))}l.b=b
return q}}
A.f4.prototype={}
A.lM.prototype={
d_(a,b){var s,r,q,p,o,n=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.ay(b,"hour","must be in [0, 24)"))
s=n.a
r=n.b
if(s==null||r==null||a!==s||b<r){n.a=a
n.b=b
return B.eC}q=A.f([],t.dL)
for(p=B.d.aI(r)+1;p<=B.d.aI(b);++p){o=B.c.W(p,24)
if(B.c.W(o,4)===2)B.a.k(q,B.e0)
if(B.c.W(o,3)===1)B.a.k(q,B.e1)
if(B.c.W(o,8)===5)B.a.k(q,B.e2)}n.b=b
return q}}
A.ef.prototype={}
A.p8.prototype={
$1(a){return typeof a!="number"},
$S:14}
A.lR.prototype={
D(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.w(m,l)
for(s=n.a,s=new A.U(s,A.o(s).i("U<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.V(["open",o.a,"locked",o.b],m,r))}l=A.w(m,l)
for(s=n.c,s=new A.U(s,A.o(s).i("U<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.V(["lit",o.a,"examined",o.b],m,r))}return A.V(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
kn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a8(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)d.k(0,s[q].a)
r=A.a8(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.p)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l)r.k(0,n[l].a)
e=A.a8(e)
for(q=0;q<p.length;p.length===n||(0,A.p)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.qM(new A.a5(o,A.o(o).i("a5<1>")),d)){d=f.b
if(A.qM(new A.a5(d,A.o(d).i("a5<1>")),r)){d=f.c
e=!A.qM(new A.a5(d,A.o(d).i("a5<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.dn)
e=f.d
if(e<0||e>2)A.k(B.d5)
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
A.fk.prototype={
D(){return A.V(["open",this.a,"locked",this.b],t.N,t.y)}}
A.fc.prototype={
D(){return A.V(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.l5.prototype={
$1(a){return this.a.v(0,A.C(a))},
$S:4}
A.cQ.prototype={
A(){return"Hand."+this.b}}
A.nQ.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
e9(a,b){var s,r,q,p,o=A.f([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.ii.prototype={
D(){var s,r,q,p=t.N,o=A.w(p,t.x)
for(s=this.a,r=0;r<5;++r){q=B.w[r]
o.l(0,q,s.h(0,q))}return A.V(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.O(B.w,t.ej.a(new A.mi(this)),t.dD).b2(0," \xb7 ")}}
A.mh.prototype={
$2(a,b){return new A.R(A.C(a),A.C(b),t.gc)},
$S:83}
A.mi.prototype={
$1(a){return this.a.a.h(0,A.C(a))},
$S:29}
A.bt.prototype={
D(){var s,r,q,p=this,o=A.f([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)o.push(s[q].D())
s=p.r
s=s==null?null:s.D()
return A.V(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.m3.prototype={
bu(a){t.G.a(a)
return a.a===5&&B.a.a7(B.w,new A.ma(this,a))},
ef(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bu(b))return null
s=this.e++
r=new A.bt(s,a,A.f([A.mg(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
d3(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bu(b))return!1
B.a.k(s.c,A.mg(b,c,B.a6))
return!0},
kj(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bu(b))return!1
s.r=A.mg(b,0,B.bf)
return!0},
ip(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.H(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a3(p)&&!B.a.v(s,p))B.a.k(s,p)}},
m2(a){var s
if(!this.b.a3(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.k(s,a)
return!0},
D(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.N(n,A.o(n).c)
B.a.a1(n)
s=A.f([],t.bV)
for(r=q.b,r=new A.ap(r,r.r,r.e,A.o(r).i("ap<2>"));r.m();)s.push(r.d.D())
return A.V(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.ma.prototype={
$1(a){var s
A.C(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.v(this.a.a.h(0,a),s)},
$S:4}
A.kL.prototype={
d4(a,b){if(a.a===B.U&&!a.d)return new A.mC(b,B.bC)
return new A.me(b,a.d,a.e,B.bC)},
kI(a){return this.d4(a,null)}}
A.db.prototype={}
A.kM.prototype={
bO(a){var s,r,q=a==null?null:B.b.dX(a).toLowerCase()
if(q==null||q.length===0)return B.ck
s=q==="next"
if(s||q==="auto")return new A.db(B.U,s,q==="auto",!1,null)
r=q!=="legacy"
return new A.db(B.a8,!1,!1,r,r?"unknown renderer query":null)}}
A.mf.prototype={}
A.me.prototype={
gba(){var s=this.b
s=s==null?null:s.gba()
return s==null?A.n2("legacy",A.f([],t.s),this.c,this.d,"legacy"):s},
aQ(){if(this.e===B.bD)throw A.d(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aQ()
this.e=B.x},
aJ(a,b){var s
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
if(this.e!==B.x)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aJ(a,b)},
aM(a){var s
if(this.e!==B.x)A.k(A.l("legacy backend is not ready"))
B.r.bb(A.V(["backend","legacy","interpolation",0,"facts",A.jW(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aM(a)},
b1(a){var s
if(this.e!==B.x)A.k(A.l("legacy backend is not ready"))
B.r.bb(A.V(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.b1(a)}}
A.mD.prototype={}
A.mC.prototype={
gba(){var s=this.b
s=s==null?null:s.gba()
return s==null?A.n2("next",A.f([],t.s),!1,null,"safe"):s},
aQ(){if(this.c===B.bD)throw A.d(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aQ()
this.c=B.x},
aJ(a,b){var s
if(this.c!==B.x)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.y("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aJ(a,b)},
aM(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a9){p=q==null
if(p||!q.gd2()){if(s.c!==B.a9)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.x
if(!p)q.hR()}p=s.c
if(p===B.a9)return}if(p!==B.x)A.k(A.l(r))
B.r.bb(A.V(["backend","next","interpolation",0,"facts",A.jW(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gd2()){if(s.c!==B.x)A.k(A.l(r))
s.c=B.a9
q.hH()
return}q.aM(a)}},
b1(a){var s
if(this.c!==B.x)A.k(A.l("pixeldart backend is not ready"))
B.r.bb(A.V(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.b1(a)}}
A.mE.prototype={
kw(a,b){var s,r,q,p,o,n,m
a.B()
s=B.aT.bO(a)
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
B.a.a1(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.p)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.y)r.push("disjoint-timer-query")
if(a.z)r.push("float-render-target")
if(a.Q)r.push("half-float-render-target")
if(a.as)r.push("context-loss")
return r}}
A.fp.prototype={
A(){return"RendererBackendKind."+this.b}}
A.dA.prototype={
A(){return"RendererBackendState."+this.b}}
A.n3.prototype={}
A.iH.prototype={}
A.n1.prototype={
iS(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.y("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.y("renderer provenance values must be non-empty",null))}},
D(){var s,r,q,p=this,o=A.w(t.N,t.z)
o.l(0,"backend",p.a)
o.l(0,"profile",p.b)
o.l(0,"buildId",p.c)
o.l(0,"capabilities",p.d)
s=p.e
r=s!=null
o.l(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null&&p.x!=null)
o.l(0,"fallback",p.y)
q=p.z
if(q!=null)o.l(0,"fallbackReason",q)
if(r)o.l(0,"rendererSha",s)
s=p.f
if(s!=null)o.l(0,"gameSha",s)
s=p.r
if(s!=null)o.l(0,"sdkVersion",s)
s=p.w
if(s!=null)o.l(0,"lockfileDigest",s)
s=p.x
if(s!=null)o.l(0,"projectVersion",s)
return o}}
A.bl.prototype={
A(){return"SleepQuality."+this.b}}
A.b3.prototype={
A(){return"SleepLocation."+this.b}}
A.ep.prototype={}
A.kX.prototype={
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
i.push(A.V(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.V(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kY.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:84}
A.kZ.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:85}
A.i7.prototype={
A(){return"InteractionType."+this.b}}
A.dK.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.nU.prototype={}
A.dJ.prototype={}
A.hD.prototype={}
A.lX.prototype={}
A.lZ.prototype={
e4(){var s,r,q,p=t.r,o=A.f([],p)
for(s=this.a.b,s=new A.ap(s,s.r,s.e,A.o(s).i("ap<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.f(o.slice(0),p)
B.a.Y(p,new A.m_())
return p},
kD(a,b){var s,r,q,p,o,n=b.b
if(n.gI(n))return B.i4
s=t.N
r=A.a8(s)
q=A.a8(s)
for(s=n.gS(),s=s.gu(s),p=a.c;s.m();){o=s.gp()
if(B.a.gN(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.dJ(B.ag,r)
s=r.a
o=B.a.gN(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gN(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dJ(B.cg,r)
return new A.dJ(B.aR,r)},
jP(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.hD(e,!1,B.i3,null)
s=p.d===c
r=this.kD(p,d)
q.m2(e)
return new A.hD(e,s,r,r.a===B.ag&&s?'The world says "'+d.c+'". The entry says "'+B.a.gN(p.c).n(0)+'".':null)},
kJ(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.ag)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.lX(B.a.gN(s.c).n(0)+" but "+A.q(a.f))}}
A.m_.prototype={
$2(a,b){var s=t.R
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:13}
A.bM.prototype={
A(){return"RuptureStep."+this.b}}
A.n8.prototype={}
A.cc.prototype={}
A.n9.prototype={
gea(){var s=B.as.h(0,this.a)
return s==null?0:s},
iC(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.A)s=q.e
else s=!0
if(s)return B.bo
r=A.qy(b)
s=q.c
B.a.H(s)
B.a.J(s,r)
B.a.H(q.d)
q.a=B.W
q.b=0
q.e=!1
return A.f([B.cE],t.e_)},
kl(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.y("rupture advance must be a finite non-negative duration",null))
if(l.a===B.A||a===0)return B.bo
s=A.f([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.A))break
A:{q=l.a
p=B.as.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.J)l.ka(s)
p=l.b
o=B.as.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.cc())
if(q===B.J){l.a=B.A
l.b=0
l.e=!0
B.a.k(s,B.cD)}else{p=q.a+1
if(!(p<7))return A.e(B.bm,p)
l.a=B.bm[p]
l.b=0
B.a.k(s,new A.cc())}}}return A.ao(s,t.k8)},
D(){var s=this,r=t.N
return A.V(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ao(s.c,r),"extinguishedMantles",A.ao(s.d,r),"completed",s.e],r,t.z)},
ka(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.K(B.d.aI(l.b/l.gea()*A.ao(s,r).length),0,A.ao(s,r).length)
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
B.a.k(p,n[m])
B.a.k(a,new A.cc())}}}
A.hW.prototype={
gbm(){var s=this.b
if(s<6||s>18)return 0
return B.d.K((s-6)/12,0,1)}}
A.p_.prototype={
$1(a){var s=B.c.c1(this.a,a)&255
return B.c.K(B.d.aD(s+((B.c.c1(this.b,a)&255)-s)*this.c),0,255)},
$S:87}
A.nr.prototype={
D(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.er(g.a),e=t.N,d=A.w(e,t.P)
for(s=g.b,s=new A.U(s,A.o(s).i("U<1,2>")).gu(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.kf(q,r.b))}s=A.er(g.r)
q=A.er(g.w)
p=A.er(g.x)
o=A.w(e,t.l_)
for(n=g.as,n=new A.U(n,A.o(n).i("U<1,2>")).gu(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.f([],m)
for(i=J.P(l.b);i.m();){h=i.gp()
j.push(A.V(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.V(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
kf(a,b){var s,r=A.er(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.er(q.bd(0,new A.ns(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gM(s))r.l(0,"_ambient",A.er(s.bd(0,new A.nt(),t.S,t.z)))
return r}}
A.ns.prototype={
$2(a,b){return new A.R(A.a(a),t.ey.a(b).D(),t.iI)},
$S:88}
A.nt.prototype={
$2(a,b){return new A.R(A.a(a),t.bR.a(b).D(),t.iI)},
$S:89}
A.dI.prototype={
D(){return A.V(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dH.prototype={
D(){return A.V(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fC.prototype={
D(){var s=t.N
return A.V(["field",this.a,"value",this.b],s,s)}}
A.nw.prototype={
bJ(){var s=0,r=A.ba(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bJ=A.bc(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.aa(A.aE(A.c(A.c(v.G.window).fetch("res/text.json")),t.m),$async$bJ)
case 6:n=b
s=7
return A.aa(A.aE(A.c(n.text()),t.N),$async$bJ)
case 7:m=b
l=A.z6(m)
j=J.b_(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.b_(l,"visitors")
j.toString
o.b=i.a(j)
j=J.b_(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.b_(l,"documents")
j.toString
i.a(j)
j=J.b_(l,"street")
j.toString
i.a(j)
j=J.b_(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.b_(l,"nights")
j.toString
i.a(j)
j=J.b_(l,"endings")
j.toString
o.w=i.a(j)
j=J.b_(l,"records")
j.toString
i.a(j)
j=J.b_(l,"cues")
j.toString
i.a(j)
j=J.b_(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.af(g)
j=A.q(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.b8(null,r)
case 1:return A.b7(p.at(-1),r)}})
return A.b9($async$bJ,r)},
i6(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gO().e1(0,new A.nx())
r=p.$ti
q=t.N
q=A.w(q,q)
q.ki(new A.ct(p,r.i("R<m,m>(1)").a(new A.ny()),r.i("ct<1,R<m,m>>")))
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
return new A.dI(B.d.aS(p),B.d.aS(o))},
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
return new A.dH(B.d.aS(p),o,n)},
m3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.w(a1,t.iu),a3=A.w(a1,t.c_),a4=A.w(a1,t.d8),a5=t.a,a6=A.w(a1,t.iD),a7=b.b
a7===$&&A.h()
a7=new A.U(a7,A.o(a7).i("U<1,2>")).gu(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.w(a,a0)
for(o=o.gO(),o=o.gu(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.mI(l,null):null
if(k==null||!q.b(m.b))continue
j=A.w(a1,a1)
for(m=q.a(m.b).gO(),m=m.gu(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.C(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.w(a,r)
for(m=n.$ti.i("cS<1>"),l=new A.cS(n,n.r,n.e,m);l.m();){i=l.d
g=b.i9(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.w(a,s)
for(m=new A.cS(n,n.r,n.e,m);m.m();){l=m.d
e=b.i8(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.h()
a7=new A.U(a7,A.o(a7).i("U<1,2>")).gu(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.f([],s)
for(m=J.P(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.fC(A.C(c.h(0,"field")),A.C(c.h(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.nr(A.w(a,a0),a2,a3,a4,A.w(a1,a5),A.w(a1,a5),A.w(a,a5),A.w(a,a5),A.w(a,a5),A.w(a1,a5),A.w(a1,a5),A.w(a1,a5),a6)}}
A.nx.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:90}
A.ny.prototype={
$1(a){t.d7.a(a)
return new A.R(A.C(a.a),A.C(a.b),t.gc)},
$S:91}
A.km.prototype={
cz(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.c(v.G.window).setTimeout(A.a4(new A.kn(this)),7000))}}
A.kn.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:26}
A.kO.prototype={
dY(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.l0.prototype={
iN(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.L(a,i,"door-speaker",j)
k.b!==$&&A.B()
k.b=s
r=A.L(a,i,"door-line",j)
k.c!==$&&A.B()
k.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(h.appendChild(s))
A.c(h.appendChild(r))
r=A.L(a,i,"door-cite-list",j)
k.e!==$&&A.B()
k.e=r
s=A.L(a,i,"door-cite-result",j)
k.f!==$&&A.B()
k.f=s
A.c(h.appendChild(r))
A.c(h.appendChild(s))
for(s=A.jV,r=k.r,q=0;q<5;++q){p=B.ep[q]
o=A.c(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.l1(k,p)
if(typeof n=="function")A.k(A.y("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.eP()]=n
o.addEventListener("click",m)
A.c(h.appendChild(o))
B.a.k(r,o)}s=A.L(a,"button","door-continue","continue")
k.d!==$&&A.B()
k.d=s
s.setAttribute("type","button")
s.addEventListener("click",A.a4(new A.l2(k)))
A.c(h.appendChild(s))
l=A.a4(new A.l3(k,a))
k.w=l
h.addEventListener("keydown",l)
A.c(A.i(a.body).appendChild(h))},
e8(a,b){var s,r,q,p=this
p.Q=!0
s=p.b
s===$&&A.h()
s.textContent=a
s=p.c
s===$&&A.h()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)A.c(s[q].style).display=""
r=p.d
r===$&&A.h()
A.c(r.style).display="none"
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
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.p)(p),++r)A.c(p[r].style).display="none"
p=q.d
p===$&&A.h()
A.c(p.style).display=""
s=q.f
s===$&&A.h()
s.textContent=""
p.focus()},
it(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.jV,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.c(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.l4(o,this)
if(typeof o=="function")A.k(A.y("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eP()]=o
m.addEventListener("click",l)
A.c(s.appendChild(m))}},
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
slq(a){this.x=t.ov.a(a)},
sls(a){this.y=t.jE.a(a)},
slr(a){this.z=t.bZ.a(a)}}
A.l1.prototype={
$1(a){var s
A.c(a)
s=this.a.x
return s==null?null:s.$1(this.b)},
$S:0}
A.l2.prototype={
$1(a){var s
A.c(a)
s=this.a.y
return s==null?null:s.$0()},
$S:0}
A.l3.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.c(a)
s=this.a
if(!s.Q||A.C(a.code)!=="Tab")return
r=A.f([],t.Y)
for(q=s.r,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
if(A.C(A.c(n.style).display)!=="none")r.push(n)}q=s.d
q===$&&A.h()
if(A.C(A.c(q.style).display)!=="none")r.push(q)
s=s.e
s===$&&A.h()
m=A.c(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.a(m.length);++l){k=A.i(m.item(l))
if(s.b(k))B.a.k(r,k)}if(r.length===0)return
j=A.i(this.b.activeElement)
if(A.an(a.shiftKey)){if(j===B.a.gam(r)||!B.a.v(r,j)){a.preventDefault()
B.a.gN(r).focus()}}else if(j===B.a.gN(r)||!B.a.v(r,j)){a.preventDefault()
B.a.gam(r).focus()}},
$S:3}
A.l4.prototype={
$1(a){var s
A.c(a)
s=this.b.z
return s==null?null:s.$1(this.a.a)},
$S:0}
A.l7.prototype={
iO(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.L(s,"h1","journal-title",null)
o.f!==$&&A.B()
o.f=r
q=A.L(s,"div","ending-copy",null)
o.r!==$&&A.B()
o.r=q
A.c(n.appendChild(r))
A.c(n.appendChild(q))
p=A.L(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.a4(new A.l8(o)))
A.c(n.appendChild(p))},
iu(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o=b[p]
n=A.c(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.c(s.appendChild(n))}m.co()},
slt(a){this.w=t.jE.a(a)}}
A.l8.prototype={
$1(a){var s
A.c(a)
s=this.a
s.aE()
s=s.w
if(s!=null)s.$0()
return null},
$S:0}
A.lA.prototype={
iP(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.c(p.appendChild(A.L(s,"h1","journal-title","house notes")))
A.c(p.appendChild(A.L(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.c(p.appendChild(A.L(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.L(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.a4(new A.lB(this)))
A.c(p.appendChild(r))}}
A.lB.prototype={
$1(a){A.c(a)
return this.a.aE()},
$S:0}
A.m4.prototype={
co(){var s,r=this
r.iF()
s=r.r.a-1
if(s<1)s=1
r.CW=r.el(r.CW,s)
r.jS()
r.eP()},
j1(){var s,r=this,q=r.a,p=A.L(q,"div","page-turn",null),o=A.L(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a4(new A.m5(r)))
s=A.L(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a4(new A.m6(r)))
q=A.L(q,"span","right-day-label",null)
r.Q!==$&&A.B()
r.Q=q
A.c(p.appendChild(o))
A.c(p.appendChild(q))
A.c(p.appendChild(s))
return p},
f9(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.el(s.CW+a,r)
s.eP()},
el(a,b){if(a<1)return 1
if(a>b)return b
return a},
jS(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.e4(),r=s.length,q=A.jV,p=j.a,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=B.a.gN(n.c).n(0)
l=A.c(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.m7(j,n,l)
if(typeof m=="function")A.k(A.y("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eP()]=m
l.addEventListener("click",k)
A.c(i.appendChild(l))}},
eP(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.f([],s)
for(q=j.f,p=q.b,o=A.o(p).i("ap<2>"),n=new A.ap(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.m8())
j.eO(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.f([],s)
for(r=new A.ap(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.m9())
j.eO(i,s)
k=B.d.K(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.c(i.style).setProperty("width",B.d.cr(k*100,1)+"%")},
eO(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r)A.c(a.appendChild(this.jp(b[r])))},
jp(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.L(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.c(k.createElement("div"))
n.className=q
n.textContent=o
A.c(n.style).setProperty("--shake",B.d.n(p.b))
A.c(j.appendChild(n))}m=a.r
if(m!=null){l=this.jB(m,!1)
l.className=A.C(l.className)+" margin"
A.c(j.appendChild(l))}return j},
jB(a,b){var s=b?"hand-line struck":"hand-line",r=A.L(this.a,"div",s,a.n(0))
A.c(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.m5.prototype={
$1(a){A.c(a)
return this.a.f9(-1)},
$S:0}
A.m6.prototype={
$1(a){A.c(a)
return this.a.f9(1)},
$S:0}
A.m7.prototype={
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
A.m8.prototype={
$2(a,b){var s=t.R
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.m9.prototype={
$2(a,b){var s=t.R
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.fj.prototype={
bn(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.c(s.style).setProperty("--panel-fade","0.25s")
A.c(A.i(this.a.body).appendChild(s))},
co(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.C(n.className),"open"))return
s=$.mz
if(s!=null&&s!==o)s.aE()
$.mz=o
r=o.a
o.d=A.i(r.activeElement)
A.rq(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.a4(o.gjM())
o.e=q
r.addEventListener("keydown",q)
p=A.tG(n)
if(p.length!==0)B.a.gam(p).focus()
else n.focus()},
aE(){var s,r,q=this,p=q.b
if(!B.b.v(A.C(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.mz===q)$.mz=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jN(a){A.c(a)
if(A.an(a.defaultPrevented))return
if(A.C(a.code)==="Escape"){a.preventDefault()
this.aE()
return}if(A.C(a.code)==="Tab")this.k9(a)},
k9(a){var s,r=A.tG(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.an(a.shiftKey)){if(s===B.a.gam(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gN(r).focus()}}else if(s===B.a.gN(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gam(r).focus()}},
sbL(a){this.c=t.jE.a(a)}}
A.mM.prototype={
is(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.ne.prototype={
iU(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-grid",c="label",b="setting-toggle",a="span",a0=f.b
a0.setAttribute("aria-label","House settings")
A.c(a0.appendChild(A.L(a1,"h2","journal-title","House settings")))
A.c(a0.appendChild(A.L(a1,"p","settings-copy","Set the house voice without changing what happened in it.")))
s=A.L(a1,"div",d,e)
for(r=0;r<5;++r){q=B.el[r]
A.c(s.appendChild(f.jA(a1,q.a,q.b)))}A.c(a0.appendChild(s))
p=A.L(a1,"div",d,e)
A.c(p.appendChild(f.eG(a1,"brightness","Display brightness",1.4,0.6)))
A.c(a0.appendChild(p))
o=A.L(a1,c,b,e)
n=A.c(a1.createElement("input"))
n.type="checkbox"
f.ax=n
n.addEventListener("change",A.a4(new A.ng(f,n)))
A.c(o.appendChild(n))
A.c(o.appendChild(A.L(a1,a,e,"Mute house audio")))
A.c(a0.appendChild(o))
m=A.L(a1,c,b,e)
l=A.c(a1.createElement("input"))
l.type="checkbox"
f.ay=l
l.addEventListener("change",A.a4(new A.nh(f,l)))
A.c(m.appendChild(l))
A.c(m.appendChild(A.L(a1,a,e,"Mono-compatible mix")))
A.c(a0.appendChild(m))
k=A.L(a1,c,b,e)
j=A.c(a1.createElement("input"))
j.type="checkbox"
f.ch=j
j.addEventListener("change",A.a4(new A.ni(f,j)))
A.c(k.appendChild(j))
A.c(k.appendChild(A.L(a1,a,e,"High-contrast interface")))
A.c(a0.appendChild(k))
i=A.L(a1,c,b,e)
h=A.c(a1.createElement("input"))
h.type="checkbox"
f.CW=h
h.addEventListener("change",A.a4(new A.nj(f,h)))
A.c(i.appendChild(h))
A.c(i.appendChild(A.L(a1,a,e,"Strong focus highlights")))
A.c(a0.appendChild(i))
g=A.L(a1,"button","door-continue","return")
g.setAttribute("type","button")
g.addEventListener("click",A.a4(new A.nk(f)))
A.c(a0.appendChild(g))},
eG(a,b,c,d,e){var s,r,q=this,p=A.L(a,"label","setting-row",null),o=A.L(a,"span",null,c),n=A.c(a.createElement("input"))
n.type="range"
n.min=A.q(e)
n.max=A.q(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.L(a,"output",null,"100%")
n.addEventListener("input",A.a4(new A.nf(q,n,r,b)))
A.c(p.appendChild(o))
A.c(p.appendChild(n))
A.c(p.appendChild(r))
q.Q.l(0,b,n)
q.as.l(0,b,r)
q.at.l(0,b,new A.b5(e,d))
return p},
jA(a,b,c){return this.eG(a,b,c,1,0)},
e6(a,b){var s,r,q=this.Q.h(0,a),p=this.as.h(0,a)
if(q==null||p==null)return
s=this.at.h(0,a)
if(s==null)s=B.fv
r=B.d.K(b,s.a,s.b)
q.value=B.d.n(r)
p.textContent=""+B.d.aD(r*100)+"%"},
slw(a){this.f=t.hm.a(a)},
sly(a){this.r=t.B.a(a)},
slx(a){this.w=t.B.a(a)},
slu(a){this.x=t.hm.a(a)},
slv(a){this.y=t.B.a(a)},
slA(a){this.z=t.B.a(a)}}
A.ng.prototype={
$1(a){var s
A.c(a)
s=this.a.r
return s==null?null:s.$1(A.an(this.b.checked))},
$S:0}
A.nh.prototype={
$1(a){var s
A.c(a)
s=this.a.w
return s==null?null:s.$1(A.an(this.b.checked))},
$S:0}
A.ni.prototype={
$1(a){var s
A.c(a)
s=this.a.y
return s==null?null:s.$1(A.an(this.b.checked))},
$S:0}
A.nj.prototype={
$1(a){var s
A.c(a)
s=this.a.z
return s==null?null:s.$1(A.an(this.b.checked))},
$S:0}
A.nk.prototype={
$1(a){A.c(a)
return this.a.aE()},
$S:0}
A.nf.prototype={
$1(a){var s,r,q,p=this
A.c(a)
s=A.q3(A.C(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aD(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.x
if(q!=null)q.$2(r,s)}else{q=q.f
if(q!=null)q.$2(r,s)}},
$S:3}
A.no.prototype={
iV(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.c(i.appendChild(A.L(a,"h2","journal-title","Rest")))
A.c(i.appendChild(A.L(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.L(a,"div","entry-picker",null)
for(r=A.jV,q=0;q<2;++q){p=B.bl[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bq[n]
l=A.c(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.np(this,p,m)
if(typeof k=="function")A.k(A.y("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eP()]=k
l.addEventListener("click",j)
A.c(s.appendChild(l))}}A.c(i.appendChild(s))},
slz(a){this.f=t.as.a(a)}}
A.np.prototype={
$1(a){var s,r
A.c(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aE()},
$S:3}
A.bW.prototype={}
A.kj.prototype={
lU(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.I(s)
q=new A.O(s,r.i("m(1)").a(new A.kl()),r.i("O<1,m>")).b4(0)
r=this.b
r.H(0)
s=J.uW(a,t.N)
p=s.$ti
r.J(0,new A.Q(s,p.i("r(n.E)").a(q.gc5(q)),p.i("Q<n.E>")))},
kP(a,b){var s,r,q,p,o,n=A.f([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.kl.prototype={
$1(a){return t.D.a(a).a},
$S:92}
A.kk.prototype={
$2(a,b){var s,r=t.D
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:93}
A.j7.prototype={
le(a){return this.c.v(0,t.g.a(a))},
lS(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a7(0,j.gkF())||!a.a.a7(0,new A.nO(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.af){n=s.d
if(n<J.b0(p)){o=o===B.L
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.Q}else j=!1}}}if(j)return!1
m=new A.j6(r,s.b,A.ao(p,t.kX),B.L)
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
fd(a){var s=this.a,r=A.o(s).i("a5<1>"),q=r.i("Q<n.E>")
s=A.N(new A.Q(new A.a5(s,r),r.i("r(n.E)").a(new A.nL(a)),q),q.i("n.E"))
B.a.Y(s,new A.nM())
return s},
kq(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.i_
s=m.a.h(0,a)
if(s==null)return B.i0
r=B.c.L(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aO:B.Y
o=p===B.Y&&m.r.v(0,q)&&s.a3(B.aP)?B.aP:p
if(s.a3(o))n=o
else n=s.a3(B.Y)?B.Y:B.aO
r=s.h(0,n)
r.toString
r=new A.j6(a,n,A.ao(r,t.kX),B.L)
m.e=r
return new A.j5(r)},
kA(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cf
if(n.d!==B.L)return B.hY
n.e=a
s=a===B.Q
n.d=s?B.af:B.ad
r=this.d
q=s?B.cd:B.hJ
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.cD(q,o,p,a,null))
if(a===B.a2)B.a.k(r,new A.cD(B.hM,o,p,a,null))
if(s)this.eQ(n)
return new A.j4(n)},
km(){var s,r=this.e
if(r==null)return B.cf
s=r.d
if(s!==B.ad&&s!==B.ae)return B.hZ
r.d=B.ae
if(++r.f>=r.c.length){r.d=B.af
this.eQ(r)
return new A.fB(r,!0)}return new A.fB(r,!1)},
kB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.ad&&s!==B.ae}else s=!0
if(s)return i
r=h.gc6()
if(r==null)return i
s=t.N
q=A.w(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.e(o,p)
p=o[p].c}else p=B.bp
p=J.P(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.cn(q,s,s)
m=c.jP(!0,!0,o,new A.nU(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.ag){B.a.k(this.d,new A.cD(B.hL,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gN(j.c)
s=A.rw(s,s)
s.J(0,o.a)
s.J(0,q)
p.kj(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.cg)if(k===B.aR){s=n.b
s=s.gM(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.cD(B.hK,o,p.b,i,l))}}return m},
eQ(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
siB(a){this.r=t.U.a(a)}}
A.nO.prototype={
$1(a){var s=this.a.a
return new A.a5(s,A.o(s).i("a5<1>")).R(0,new A.nN(A.C(a)))},
$S:4}
A.nN.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:9}
A.nL.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:9}
A.nM.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:95}
A.nK.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:96}
A.j8.prototype={}
A.jx.prototype={}
A.ph.prototype={
$1(a){return B.b.Z(A.C(a),"off.")},
$S:4}
A.bg.prototype={
A(){return"DoorChoice."+this.b}}
A.bA.prototype={
A(){return"VisitPhase."+this.b}}
A.bB.prototype={
A(){return"VisitTier."+this.b}}
A.cZ.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cD.prototype={
D(){var s,r=this,q=A.w(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.cg.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bC.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.bC&&b.a===this.a&&b.b===this.b},
gG(a){return A.cv(this.a,this.b,B.l,B.l)}}
A.bN.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.bN&&b.a===this.a&&b.b===this.b},
gG(a){return A.cv(this.a,this.b,B.l,B.l)}}
A.bm.prototype={
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.bm&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gG(a){var s=this
return A.cv(s.a,s.b,s.c,s.d)},
D(){var s=this
return A.V(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.j9.prototype={
D(){var s,r,q,p=this.a
p=A.N(p,A.o(p).c)
B.a.a1(p)
s=this.b
r=A.o(s)
q=r.i("dh<1,W<m,@>>")
s=A.N(new A.dh(s,r.i("W<m,@>(1)").a(new A.nJ()),q),q.i("n.E"))
r=this.c
return A.V(["contacted",p,"resolved",s,"active",r==null?null:r.D()],t.N,t.z)}}
A.nJ.prototype={
$1(a){return t.g.a(a).D()},
$S:97}
A.hm.prototype={
D(){var s=this,r=s.a.D(),q=s.e
q=q==null?null:q.b
return A.V(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.kg.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:98}
A.kh.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:99}
A.ki.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:100}
A.j6.prototype={
gc6(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.e(r,s)
s=r[s].b}else s=null
return s}}
A.nP.prototype={}
A.bn.prototype={}
A.j5.prototype={}
A.j4.prototype={}
A.fB.prototype={}
A.fW.prototype={
gba(){var s,r=this.p3
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.n2("next",r?this.gkv():B.eO,!1,null,s)},
gd2(){if(this.p3){var s=this.d
s===$&&A.h()
s=s.b===B.R}else s=!1
return s},
gkv(){var s,r
if(!this.p3)return B.m
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.cC.kw(s,r)},
gl5(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.cr(this.k3,3)},
gl4(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
aQ(){var s,r,q,p,o,n,m=this,l=A.wD(m.a)
m.d=l
l=l.hQ()
m.r=l
l=m.w=B.aT.ia(l)
q=m.b
p=m.c
s=new A.iR(q,p,q,p)
p=A.rK(m.d)
m.e=p
try{p.hE(new A.iG(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.af(o)
l=m.w
if(l===B.a7)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.a7
l=A.rK(m.d)
l.hE(B.fY,s)
m.e=l}l=m.e
l.bV()
n=A.wh(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.p3=!0},
aJ(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.bV()
new A.iR(a,b,a,b).B()
r.b=a
r.c=b},
ko(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="wall-plaster",b2="grime",b3="renderer is not initialized",b4="resource library is disposed"
if(!a9.p3||a9.Q.length!==0)return
a9.p4=b5
s=a9.dy
r=a9.e
r===$&&A.h()
s.l(0,b1,r.gaC().hU("texture:wall-plaster",256,256))
s.l(0,b2,a9.e.gaC().hU("texture:grime",512,512))
a9.fy=a9.e.gaC().hT(A.rA(s.h(0,b1),!1,"quarantine-house-safe",!0,0.48,0.44,0.46,1,1))
r=a9.fr
r.l(0,"cellar",a9.e.gaC().hT(A.rA(s.h(0,b2),!1,"quarantine-house-cellar",!0,0.3,0.28,0.29,1,1)))
for(q=b5.b,p=A.I(q),o=p.i("r(1)").a(new A.oj()),n=B.a.gu(q),p=new A.J(n,o,p.i("J<1>"));p.m();){o=n.gp().a
m=a9.jY(o)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
k=new A.c8("quarantine-house-"+o+"-gothic",s.h(0,b1),m.a,m.b,m.c,1,1,!1,!0)
if(l.r)A.k(A.l(b4))
k.B()
j=l.b.a.aq(k,b0)
l.e.k(0,j)
r.l(0,o,j)}for(p=a9.fx,i=0;i<7;++i){h=B.eu[i]
o=a9.e.w
if(o==null)o=A.k(A.l(b3))
n=h==="service"?s.h(0,b2):s.h(0,b1)
n=new A.c8("quarantine-inventory-"+h,n,a9.cQ(h).a,a9.cQ(h).b,a9.cQ(h).c,1,1,!1,!0)
if(o.r)A.k(A.l(b4))
n.B()
j=o.b.a.aq(n,b0)
o.e.k(0,j)
p.l(0,h,j)}for(p=q.length,o=a9.Q,n=a9.as,l=a9.at,k=a9.y,g=a9.z,i=0;f=q.length,i<f;q.length===p||(0,A.p)(q),++i){e=q[i]
d=a9.eT(b5,e)
f=a9.e.w
if(f==null)f=A.k(A.l(b3))
c=e.a
if(f.r)A.k(A.l(b4))
b=f.a
d.B()
j=b.b.aq(d,"room:"+c)
a=j.a
b.c.l(0,a,b.b9(d))
f.d.k(0,j)
B.a.k(k,j)
g.l(0,c,j)
f=r.h(0,c)
if(f==null){f=a9.fy
f.toString}a0=new A.aJ(j,f,B.y,-1,B.G,B.N,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.y.B()
b=f.a
a1=b.$ti
b.a_(a1.c.a(j))
b=b.b
if(!(a>=0&&a<b.length))return A.e(b,a)
d=b[a].c
b=(d==null?a1.y[1].a(d):d).d
a=B.y.ab()
b=b.gaw()
a1=A.I(b)
A.be(new A.O(b,a1.i("A(1)").a(a.gav()),a1.i("O<1,A>")))
a2=f.b.bv(a0)
B.a.k(o,a2)
n.l(0,c,a2)
l.l(0,c,a0)}for(i=0;i<q.length;q.length===f||(0,A.p)(q),++i){e=q[i]
for(p=e.e,o=p.length,n=e.a,a3=0;a3<p.length;p.length===o||(0,A.p)(p),++a3){a4=p[a3]
l=a4.c
g=a4.d
a9.ec(n,a9.eL(e,a4.b,l,l+a4.e,g,g+a4.f,7902632),new A.ok(a4))}}for(q=b5.c,p=q.length,o=a9.cy,n=b5.e,i=0;l=q.length,i<l;q.length===p||(0,A.p)(q),++i){a5=q[i]
if(a5.at==null||a5.as)continue
e=n.h(0,a5.b)
if(e==null)continue
d=a9.ez(b5,e,a5)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
g=a5.a
if(l.r)A.k(A.l(b4))
f=l.a
d.B()
j=f.b.aq(d,"door-leaf:"+g)
c=j.a
f.c.l(0,c,f.b9(d))
l.d.k(0,j)
B.a.k(k,j)
l=e.a
f=r.h(0,l)
if(f==null){f=a9.fy
f.toString}a0=new A.aJ(j,f,B.y,0,B.G,B.N,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.y.B()
b=f.a
a=b.$ti
b.a_(a.c.a(j))
b=b.b
if(!(c>=0&&c<b.length))return A.e(b,c)
d=b[c].c
c=(d==null?a.y[1].a(d):d).d
b=B.y.ab()
c=c.gaw()
a=A.I(c)
A.be(new A.O(c,a.i("A(1)").a(b.gav()),a.i("O<1,A>")))
o.l(0,g,new A.fV(g,l,f.b.bv(a0),j,a0))}for(i=0;i<q.length;q.length===l||(0,A.p)(q),++i){a5=q[i]
if(a5.as||a5.at!=null)continue
e=n.h(0,a5.b)
if(e==null)continue
r=e.a
a9.ec(r,a9.eL(e,a5.ar(r),a5.a9(r),a5.a9(r)+a5.w,0,a5.x,5915445),new A.ol(a5))}for(r=A.zH(A.yZ(b5)),q=r.length,p=a9.cx,o=a9.CW,i=0;i<r.length;r.length===q||(0,A.p)(r),++i){a6=r[i]
n=a6.a
m=a9.jq(n)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
g=""+n
f=n===4?s.h(0,b2):s.h(0,b1)
f=new A.c8("quarantine-house-exterior-slot-"+g,f,m.a,m.b,m.c,1,1,!0,!0)
if(l.r)A.k(A.l(b4))
f.B()
j=l.b.a.aq(f,b0)
l.e.k(0,j)
l=a9.e.w
if(l==null)l=A.k(A.l(b3))
f=a6.b
if(l.r)A.k(A.l(b4))
c=l.a
f.B()
a7=c.b.aq(f,"exterior:slot-"+g)
g=a7.a
c.c.l(0,g,c.b9(f))
l.d.k(0,a7)
B.a.k(k,a7)
a8=new A.aJ(a7,j,B.y,-1,B.G,B.N,!0,!0,0,b0)
p.l(0,n,a8)
l=a9.f
l===$&&A.h()
B.y.B()
f=l.a
c=f.$ti
f.a_(c.c.a(a7))
f=f.b
if(!(g>=0&&g<f.length))return A.e(f,g)
d=f[g].c
g=(d==null?c.y[1].a(d):d).d
f=B.y.ab()
g=g.gaw()
c=A.I(g)
A.be(new A.O(g,c.i("A(1)").a(f.gav()),c.i("O<1,A>")))
o.l(0,n,l.b.bv(a8))}},
ib(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.dx=A.ao(a8.e,t.gB)
if(!a5.p3)return
for(s=a5.ax,r=new A.U(s,A.o(s).i("U<1,2>")).gu(0),q=a5.ay;r.m();){p=r.d
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
p.d.aa(0,o)}}s.H(0)
q.H(0)
r=a5.ch
B.a.H(r)
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
d.c.l(0,b,d.b9(f))
i.d.k(0,c)
i=j.f
f=i.a
a=B.K.ga4()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.iV(new A.A(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.iE(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.aJ(c,a2,i,-1,B.G,B.N,d!=="micro",!0,0,null)
B.a.k(r,c)
q.l(0,e,n)
d=a5.f
d===$&&A.h()
i.B()
a2=d.a
f=a2.$ti
a2.a_(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.e(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.ab()
f=f.gaw()
b=A.I(f)
A.be(new A.O(f,b.i("A(1)").a(i.gav()),b.i("O<1,A>")))
s.l(0,e,d.b.bv(n))}$.F.j().setAttribute("data-renderer-inventory-items",""+s.a)},
iq(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a8.e,a7=a6.h(0,a9)
if(a7==null)return
s=a7.a
r=A.at([s],t.N)
for(q=a8.an(s),p=J.P(q.a),q=new A.J(p,q.b,q.$ti.i("J<1>"));q.m();){o=p.gp()
n=o.be(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a6.h(0,n)!=null)r.k(0,n)}for(a6=a5.as,a6=new A.U(a6,A.o(a6).i("U<1,2>")).gu(0),s=a5.at;a6.m();){m=a6.d
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
j.a_(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ab()
j=j.gaw()
i=A.I(j)
A.be(new A.O(j,i.i("A(1)").a(k.gav()),i.i("O<1,A>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.a_(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o].saP(l)
s.l(0,q,l)}for(a6=a5.db,s=a6.length,f=0;f<a6.length;a6.length===s||(0,A.p)(a6),++f){e=a6[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a5.f
q===$&&A.h()
p=a5.bt(e.c,d)
o=p.c
o.B()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.a_(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.e(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.ab()
k=k.gaw()
j=A.I(k)
A.be(new A.O(k,j.i("A(1)").a(o.gav()),j.i("O<1,A>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.a_(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.e(q,o)
q[o].saP(p)}a6=a5.cy
s=A.o(a6).i("a5<1>")
s=A.N(new A.a5(a6,s),s.i("n.E"))
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
j.a_(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ab()
j=j.gaw()
i=A.I(j)
A.be(new A.O(j,i.i("A(1)").a(k.gav()),i.i("O<1,A>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.a_(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.e(p,o)
p[o].saP(l)
a6.l(0,c.a,c.kH(l))}for(a6=a5.dx,s=a6.length,q=a5.ax,p=a5.ay,f=0;f<s;++f){b=a6[f]
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
i.a_(a1)
i=i.b
a1=a1.a
if(!(a1>=0&&a1<i.length))return A.e(i,a1)
g=i[a1].c
i=(g==null?h.y[1].a(g):g).d
j=j.ab()
i=i.gaw()
h=A.I(i)
A.be(new A.O(i,h.i("A(1)").a(j.gav()),h.i("O<1,A>")))
o=o.b
h=o.$ti
h.c.a(a)
h.y[1].a(k)
o.a_(a)
o=o.b
h=a.a
if(!(h>=0&&h<o.length))return A.e(o,h)
o[h].saP(k)}a2=new A.lc().kz(a9).a!==0
a6=a5.cx
s=A.o(a6).i("a5<1>")
s=A.N(new A.a5(a6,s),s.i("n.E"))
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
j.a_(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.e(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ab()
j=j.gaw()
i=A.I(j)
A.be(new A.O(j,i.i("A(1)").a(k.gav()),i.i("O<1,A>")))
o=o.b
i=o.$ti
i.c.a(a4)
i.y[1].a(l)
o.a_(a4)
o=o.b
i=a4.a
if(!(i>=0&&i<o.length))return A.e(o,i)
o[i].saP(l)
a6.l(0,a3,l)}},
lJ(a,b){var s,r,q,p,o,n,m,l,k,j=this
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
k=new A.aJ(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.h()
m.cZ(k)
m.b.dZ(s,k)
r.l(0,b,k)
p.l(0,b,l)
p=j.y
B.a.aa(p,o)
B.a.k(p,l)
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
m=p.gaC().dT(k.ez(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.aJ(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.cZ(l)
p.b.dZ(n,l)
s.l(0,b,r.fh(l,m))
s=k.y
n=r.d
B.a.aa(s,n)
B.a.k(s,m)
k.e.gaC().hV(n)},
ic(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.at([b],t.N),e=a.e,d=e.h(0,b)
if(d!=null)for(s=d.a,r=a.an(s),q=J.P(r.a),r=new A.J(q,r.b,r.$ti.i("J<1>"));r.m();){p=q.gp()
o=p.be(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&e.h(0,o)!=null)f.k(0,o)}n=new A.i3(a).i2(f,c)
m=A.f([],t.dQ)
l=A.f([],t.ix)
for(k=0;k<n.length;++k){j=n[k]
i=this.er(j.b)
e=j.a
h=new A.A(e.a,e.b,e.c)
e=j.d
s=j.c
if(k===0)B.a.k(l,new A.dF(h,B.aN,i,e,s,1.05,1.4))
else B.a.k(m,new A.iz(h,i,e,s))}g=A.up(a0)
e=Math.max(0.045,0.52*a1)
this.id=new A.hU(B.eb,B.ea,1.5,14,B.e9,e,a0===0?null:new A.l_(new A.A(g.a,g.b,g.c),this.er(A.uo(a0)),0.72+a1*0.18),m,l)},
aM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.p3)throw A.d(A.l("Pixeldart runtime is not initialized"))
s=g.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cu(s)
q=A.q1(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.e6(r,q,q.X(0,r),B.ac,B.ht,0.1,60,g.b/g.c)}p=g.id
o=g.k1
n=g.p2++
m=g.k4
l=new A.nq()
$.r2()
k=$.mK.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.h()
j=g.f
j===$&&A.h()
k.jR()
k.bV()
i=B.a.v(k.d,j)
if(!i)A.k(A.y("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga8(0))A.k(A.y("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga8(0)||i.gbH()<1e-12)A.k(A.y("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.y("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.y("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.ga8(0)||!s.b.ga8(0)||!s.c.ga8(0))A.k(A.y("CameraView matrices must be finite",f))
p.B()
o.B()
if(!isFinite(m))A.k(A.y("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.lj(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.am)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.am
s.c=0
B.a.H(s.a)
g.k2=g.e.kT()
s=$.mK.$0()
l.b=s
g.k3=l.gkQ()/1000},
b1(a){},
hH(){},
hR(){++this.ok},
eT(a,b){var s,r,q,p,o,n,m=A.u9(a,b),l=A.yY(a,b),k=A.N(m.a,t.i)
B.a.J(k,m.b)
B.a.J(k,m.c)
B.a.J(k,l)
s=new Float32Array(A.Y(k))
r=A.f([],t.k)
for(k=s.length,q=0;q<k;q+=14){p=s[q]
o=q+1
if(!(o<k))return A.e(s,o)
o=s[o]
n=q+2
if(!(n<k))return A.e(s,n)
B.a.k(r,new A.A(p,o,s[n]))}return new A.bL(B.O,s,null,A.be(r))},
ec(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.h()
r=s.gaC().dT(b,"decoration:"+a)
B.a.k(p.y,r)
q=new A.aJ(r,p.jD(a),B.y,0,B.G,B.N,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.cZ(q)
B.a.k(p.db,new A.jz(a,s.b.bv(q),q,c))},
jD(a){var s=this.fr.h(0,a)
if(s==null){s=this.fy
s.toString}return s},
jz(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.ce(new Float32Array(5376))
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
j=B.n.aL(s.a,0,s.b)
g=A.f([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.e(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.e(j,c)
g.push(new A.A(e,d,j[c]))}return new A.bL(B.O,j,null,A.be(g))},
jy(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
jq(a){var s
A:{if(0===a){s=B.fy
break A}if(1===a){s=B.fA
break A}if(2===a){s=B.fG
break A}if(3===a){s=B.fU
break A}if(4===a){s=B.fW
break A}if(5===a){s=B.fE
break A}if(6===a){s=B.fT
break A}if(7===a){s=B.fM
break A}s=B.fS
break A}return s},
cQ(a){var s
A:{if("architecture"===a){s=B.fz
break A}if("furniture"===a){s=B.bB
break A}if("fixture"===a){s=B.fL
break A}if("service"===a){s=B.fP
break A}if("story"===a){s=B.fK
break A}if("decor"===a){s=B.fD
break A}if("micro"===a){s=B.fF
break A}s=B.bB
break A}return s},
jY(a){var s
A:{if("living-room"===a){s=B.fC
break A}if("hall"===a){s=B.fH
break A}if("kitchen"===a){s=B.fV
break A}if("bedroom"===a){s=B.fX
break A}if("landing"===a){s=B.fQ
break A}if("bathroom"===a){s=B.fB
break A}if("spare-room"===a){s=B.fR
break A}s=B.fx
break A}return s},
aA(a){return this.ll(t.G.a(a))},
ll(a){var s=0,r=A.ba(t.H),q,p=this,o,n,m,l
var $async$aA=A.bc(function(b,c){if(b===1)return A.b7(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.f([],t.iw)
for(n=0;n<2;++n){m=B.eM[n]
l=a.h(0,m)
if(l!=null)o.push(p.bX(m,l))}s=3
return A.aa(A.lp(o,t.H),$async$aA)
case 3:case 1:return A.b8(q,r)}})
return A.b9($async$aA,r)},
bX(a,b){return this.jC(a,b)},
jC(a,b){var s=0,r=A.ba(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bX=A.bc(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dy.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.c(A.c(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.aa(A.aE(A.c(m.decode()),t.X),$async$bX)
case 7:g=A.c(A.c(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mR.a(A.c(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gaC()
f=new Uint8Array(A.Y(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.m0(d,f)
$.F.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.af(c)
h=$.F.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.c(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.q(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.b8(q,r)
case 2:return A.b7(o.at(-1),r)}})
return A.b9($async$bX,r)},
bt(a,b){return new A.aJ(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
ez(a,b,c){var s,r,q,p,o,n=A.yX(a,b,c),m=n.length
if(m===0)throw A.d(A.l("door "+c.a+" produced no leaf geometry"))
s=A.f([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.e(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.e(n,o)
s.push(new A.A(q,p,n[o]))}return new A.bL(B.O,n,null,A.be(s))},
eL(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aG(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.ce(new Float32Array(5376))
o.al(k[0],k[1],k[2],k[3],g)
n=B.n.aL(o.a,0,o.b)
k=A.f([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.e(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.e(n,p)
k.push(new A.A(r,q,n[p]))}return new A.bL(B.O,n,null,A.be(k))},
er(a){return new A.cs((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$iq6:1}
A.oj.prototype={
$1(a){return t.J.a(a).a!=="cellar"},
$S:28}
A.ok.prototype={
$0(){return!this.a.w},
$S:12}
A.ol.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:12}
A.et.prototype={
gba(){return A.n2("legacy",B.m,this.e,this.f,"legacy")},
gd2(){return this.x},
aQ(){var s,r=this
if(r.w)return
s=A.wi(r.a,r.b,r.c)
r.r!==$&&A.B()
r.r=s
s.fQ=s.fP=s.fO=r.d
r.w=!0},
aJ(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.y("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.aJ(a,b)}},
aM(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.d(A.l("legacy runtime is not initialized"))
if(j.x||$.eF==null)return;++j.y
$.F.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.h()
r=$.tQ
q=$.bp.j()
s.fU=A.up($.dT.j().gbm()).ga4()
s.shG(A.uo($.dT.j().gbm()))
p=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.dT.j().gbm()))
s.fY=p<0?0:p
p=$.bF.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.U(0,p.d.X(0,(A.pM(o*0.28,1309)*2-1)*n)).U(0,p.c.X(0,(A.pM(p.r*0.28,2839)*2-1)*n))
p=$.bF.j()
s.fZ=p.a
s.dl=p.b
s.dm=p.c
s.dn=p.d
m=A.y_(0,0.25,0.11)
s.dq=m.a
s.dr=m.b
s.ds=m.c
p=s.cd
l=p==null?s.bA:p
if(l==null)l=s.aZ
p=s.aH
p.aO(l)
s.az.depthMask(!0)
p.kC(l,s.dq/255,s.dr/255,s.ds/255)
s.dg=s.ce=0
s.di=!1
s.bC=0
k=$.eF
if(k!=null)k.kN($.aD,$.hj())
s.l3(r,q)
$.tp.j().dY(B.cA,r)},
b1(a){},
hH(){this.x=!0},
hR(){this.x=!1},
$iq6:1}
A.jz.prototype={}
A.fV.prototype={
fh(a,b){var s=this,r=b==null?s.d:b
return new A.fV(s.a,s.b,s.c,r,a)},
kH(a){return this.fh(a,null)}}
A.pp.prototype={
$1(a){var s
try{A.rj(a,this.a)
return!0}catch(s){if(A.af(s) instanceof A.K)return!1
else throw s}},
$S:102}
A.pq.prototype={
$0(){var s=$.jU.j()
if($.as===s)$.as=null
$.cj=0
s=$.aM.j()
s.aU()
s.w=!0
return null},
$S:1}
A.pr.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gap().a===21){A.tZ(!1)
return}s=$.X.j().r.b
$.T.j().iy(a,b,$.aD)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cw()
if(typeof n!=="number")return A.k7(n)
if(!(o<n))break
if($.X.b===$.X)A.k(A.a1(""))
p=B.a.h(B.D,q).b
o=$.eF
if(o!=null)o.cq(p)
o=$.bb
if(o!=null){n=$.X.b
if(n===$.X)A.k(A.a1(""))
o.lJ(n,p)}o=q
if(typeof o!=="number")return o.U()
q=o+1}A.qN("saved after sleep")},
$S:103}
A.pB.prototype={
$0(){var s=$.qr.j()
if($.as===s)$.as=null
$.cj=0
s=$.aM.j()
s.aU()
s.w=!0
return null},
$S:1}
A.pC.prototype={
$0(){var s=$.qp.j()
if($.as===s)$.as=null
$.cj=0
s=$.aM.j()
s.aU()
s.w=!0
return null},
$S:1}
A.pD.prototype={
$2(a,b){var s
A.qQ(a,A.q(b))
switch(a){case"master":s=$.bG
if(s!=null)s.ii(b)
break
case"voice":s=$.bG
if(s!=null)s.il(b)
break
case"effects":s=$.bG
if(s!=null)s.ih(b)
break
case"ambience":s=$.bG
if(s!=null)s.ig(b)
break
case"music":s=$.bG
if(s!=null)s.ij(b)
break}},
$S:20}
A.pE.prototype={
$1(a){var s
A.qQ("muted",""+a)
s=$.bG
if(s!=null)s.ik(a)},
$S:6}
A.pF.prototype={
$1(a){var s
A.qQ("mono",""+a)
s=$.bG
if(s!=null)s.e7(a)},
$S:6}
A.pG.prototype={
$2(a,b){A.qR(a,A.q(b))
A.tt(a,b)},
$S:20}
A.pH.prototype={
$1(a){var s="high-contrast"
A.qR(s,""+a)
A.oB(s,a)},
$S:6}
A.pI.prototype={
$1(a){var s="strong-highlights"
A.qR(s,""+a)
A.oB(s,a)},
$S:6}
A.ps.prototype={
$0(){var s=$.d5.j()
if($.as===s)$.as=null
$.cj=0
s=$.aM.j()
s.aU()
s.w=!0
return null},
$S:1}
A.pt.prototype={
$0(){var s=$.jS.j()
if($.as===s)$.as=null
$.cj=0
s=$.aM.j()
s.aU()
s.w=!0},
$S:1}
A.pu.prototype={
$0(){var s=$.jS.j()
if($.as===s)$.as=null
$.cj=0
s=$.aM.j()
s.aU()
s.w=!0},
$S:1}
A.pv.prototype={
$1(a){A.c(a)
return A.tY()},
$S:0}
A.pw.prototype={
$1(a){var s,r
A.c(a)
if(A.an(a.defaultPrevented))return
if(A.C(a.code)==="Escape"&&!A.an(a.repeat)){r=$.as
if(r==null)A.qD($.d5.j())
else r.aE()
return}s=$.as==null
if(!A.an(a.repeat)&&s)$.cG.j().b1(new A.iH(A.C(a.code),!0,1))
if(A.C(a.code)==="KeyP"&&!A.an(a.repeat)&&$.uJ())$.qE=!$.qE
if(A.C(a.code)==="KeyR"&&!A.an(a.repeat)&&s&&$.u6){r=$.eJ
if(r!=null)r.bg()}if(A.C(a.code)==="KeyJ"&&!A.an(a.repeat)&&!$.aC.j().Q)A.p5($.jU.j())
if(A.C(a.code)==="KeyL"&&!A.an(a.repeat)&&!$.aC.j().Q)A.p5($.qr.j())
if(A.C(a.code)==="KeyH"&&!A.an(a.repeat)&&!$.aC.j().Q)A.p5($.qp.j())
if(A.C(a.code)==="KeyO"&&!A.an(a.repeat)&&!$.aC.j().Q)A.p5($.d5.j())
if(A.C(a.code)==="KeyK"&&!A.an(a.repeat)&&s)A.qN("saved")},
$S:3}
A.px.prototype={
$1(a){A.c(a)
if($.as==null)$.cG.j().b1(new A.iH(A.C(a.code),!1,0))},
$S:3}
A.py.prototype={
$1(a){A.c(a)
return A.tv()},
$S:0}
A.pz.prototype={
$1(a){A.c(a)
return A.tv()},
$S:0}
A.pA.prototype={
$1(a){A.c(a)
return $.aM.j().bN($.F.j())},
$S:0}
A.oY.prototype={
$1(a){var s=A.C(A.c(a).message)
A.p1(s,null)},
$S:3}
A.oZ.prototype={
$1(a){var s
A.c(a)
s=a.reason
A.p1("unhandled rejection: "+A.q(s==null?A.C(a.type):s),null)},
$S:3}
A.p4.prototype={
$0(){this.a.className=""},
$S:16}
A.p2.prototype={
$1(a){return t.R.a(a).e},
$S:27};(function aliases(){var s=J.cR.prototype
s.iE=s.n
s=A.n.prototype
s.iD=s.e1
s=A.fj.prototype
s.iF=s.co})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"y5","vQ",19)
r(J.t.prototype,"gc5","v",17)
q(A,"yi","w3",30)
p(A.bK.prototype,"gkF","a3",17)
o(A,"yT","wN",10)
o(A,"yU","wO",10)
o(A,"yV","wP",10)
q(A,"u8","yA",1)
s(A,"z0","vV",19)
r(A.bP.prototype,"gc5","v",17)
o(A,"z3","xL",7)
p(A.il.prototype,"glQ","lR",67)
p(A.iU.prototype,"glO","lP",59)
q(A,"Ah","q2",12)
p(A.cu.prototype,"gav","hY",47)
var n
p(n=A.i6.prototype,"gjE","jF",0)
p(n,"gjG","jH",0)
p(n,"gjK","jL",0)
p(n,"gjI","jJ",0)
o(A,"zw","tD",7)
o(A,"zy","tC",7)
o(A,"zl","vL",108)
o(A,"zm","vM",109)
o(A,"zB","vG",110)
p(A.fj.prototype,"gjM","jN",0)
p(A.j7.prototype,"gld","le",9)
o(A,"ug","ym",111)
o(A,"zq","xH",112)
q(A,"zs","xK",1)
o(A,"zr","xI",75)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.D,null)
q(A.D,[A.pW,J.i8,A.ft,J.da,A.n,A.eT,A.cL,A.a9,A.M,A.nd,A.bx,A.du,A.J,A.fD,A.ai,A.cf,A.bQ,A.ej,A.e8,A.dQ,A.cx,A.nC,A.mv,A.eZ,A.fZ,A.Z,A.mj,A.cS,A.ap,A.fb,A.o0,A.os,A.c0,A.jp,A.jN,A.op,A.jd,A.bE,A.aF,A.jh,A.dL,A.ak,A.je,A.jL,A.ha,A.fN,A.ju,A.dR,A.fQ,A.h4,A.jO,A.df,A.hE,A.oh,A.ot,A.dg,A.cN,A.jm,A.iv,A.fv,A.o1,A.K,A.R,A.al,A.jM,A.nq,A.aX,A.h6,A.nE,A.jG,A.mu,A.jr,A.eu,A.mN,A.dy,A.kT,A.kU,A.iA,A.e6,A.hU,A.lj,A.cw,A.lz,A.cs,A.l_,A.iz,A.dF,A.c8,A.cC,A.nI,A.bL,A.mw,A.mF,A.iI,A.aJ,A.iR,A.iG,A.ll,A.il,A.iY,A.mr,A.cF,A.iU,A.dq,A.hS,A.hT,A.lk,A.am,A.bv,A.aW,A.S,A.eU,A.mL,A.aU,A.mP,A.aT,A.mR,A.mQ,A.dO,A.fo,A.oo,A.jA,A.jo,A.n5,A.nb,A.bi,A.bf,A.au,A.kW,A.hl,A.dx,A.lm,A.cu,A.iE,A.iV,A.A,A.eS,A.jf,A.hv,A.jg,A.hI,A.jj,A.eX,A.jk,A.hM,A.jl,A.i1,A.jq,A.hx,A.hw,A.fl,A.jB,A.iD,A.jC,A.dE,A.iL,A.jE,A.iM,A.jF,A.iP,A.jJ,A.iO,A.jI,A.j3,A.jP,A.fq,A.jb,A.jQ,A.kR,A.hX,A.hZ,A.f3,A.fu,A.z,A.hJ,A.iB,A.ly,A.d2,A.cb,A.ea,A.nT,A.d4,A.h9,A.h8,A.ja,A.hL,A.hq,A.jH,A.kt,A.kd,A.eR,A.kp,A.pT,A.ky,A.kv,A.fE,A.kQ,A.li,A.iS,A.lw,A.i4,A.i6,A.ik,A.dv,A.mq,A.ce,A.mW,A.n4,A.nV,A.fL,A.jK,A.jy,A.jw,A.nl,A.b,A.kP,A.hN,A.l6,A.eb,A.iy,A.mG,A.eo,A.na,A.dC,A.hV,A.lt,A.ls,A.kE,A.e2,A.e4,A.e1,A.e3,A.hy,A.im,A.fG,A.jc,A.f5,A.lE,A.n6,A.aS,A.hQ,A.i2,A.lF,A.hR,A.lc,A.d1,A.dj,A.n7,A.d0,A.ez,A.lC,A.la,A.nm,A.lH,A.c6,A.c_,A.m1,A.m0,A.ca,A.i3,A.aZ,A.bk,A.b2,A.bj,A.cM,A.cW,A.aK,A.lN,A.c5,A.lD,A.f4,A.lM,A.ef,A.lR,A.fk,A.fc,A.nQ,A.ii,A.bt,A.m3,A.kL,A.db,A.kM,A.mf,A.me,A.mD,A.mC,A.mE,A.n3,A.iH,A.n1,A.ep,A.kX,A.nU,A.dJ,A.hD,A.lX,A.lZ,A.n8,A.cc,A.n9,A.hW,A.nr,A.dI,A.dH,A.fC,A.nw,A.km,A.kO,A.l0,A.fj,A.mM,A.bW,A.kj,A.j7,A.nP,A.cD,A.bC,A.bN,A.bm,A.j9,A.hm,A.j6,A.fW,A.et,A.jz,A.fV])
q(J.i8,[J.ic,J.f7,J.f8,J.eh,J.ei,J.dr,J.ds])
q(J.f8,[J.cR,J.t,A.cT,A.fg])
q(J.cR,[J.ix,J.dG,J.cr])
r(J.ia,A.ft)
r(J.m2,J.t)
q(J.dr,[J.f6,J.id])
q(A.n,[A.d_,A.G,A.ct,A.Q,A.c2,A.dP,A.ci])
q(A.d_,[A.dd,A.hb])
r(A.fK,A.dd)
r(A.fI,A.hb)
q(A.cL,[A.hA,A.hz,A.iT,A.pk,A.pm,A.nX,A.nW,A.oD,A.lq,A.ob,A.od,A.mm,A.of,A.pK,A.pL,A.pe,A.mO,A.my,A.mp,A.ms,A.nz,A.nB,A.lf,A.ld,A.le,A.mA,A.mB,A.mV,A.mU,A.mT,A.mS,A.mX,A.oU,A.oV,A.nc,A.pQ,A.pO,A.ln,A.mo,A.pc,A.nR,A.nS,A.kA,A.kC,A.kB,A.kD,A.ku,A.ke,A.kf,A.kr,A.ks,A.kq,A.lx,A.n0,A.l9,A.lu,A.lv,A.kF,A.kG,A.kH,A.kI,A.kJ,A.kK,A.pa,A.kS,A.lb,A.lG,A.oW,A.oA,A.oz,A.lT,A.lV,A.nn,A.lK,A.lI,A.p9,A.lO,A.lQ,A.p8,A.l5,A.mi,A.ma,A.kY,A.kZ,A.p_,A.nx,A.ny,A.kn,A.l1,A.l2,A.l3,A.l4,A.l8,A.lB,A.m5,A.m6,A.m7,A.ng,A.nh,A.ni,A.nj,A.nk,A.nf,A.np,A.kl,A.nO,A.nN,A.nL,A.ph,A.nJ,A.kg,A.kh,A.ki,A.oj,A.pp,A.pE,A.pF,A.pH,A.pI,A.pv,A.pw,A.px,A.py,A.pz,A.pA,A.oY,A.oZ,A.p2])
q(A.hA,[A.o_,A.kV,A.mb,A.pl,A.oE,A.pb,A.lr,A.oc,A.mk,A.mn,A.oi,A.nG,A.nF,A.mt,A.nA,A.lg,A.pP,A.pN,A.kw,A.kx,A.lU,A.lW,A.lL,A.mh,A.m_,A.ns,A.nt,A.m8,A.m9,A.kk,A.nM,A.nK,A.pr,A.pD,A.pG])
r(A.bY,A.fI)
q(A.a9,[A.dt,A.cz,A.ie,A.iX,A.iJ,A.jn,A.fa,A.ho,A.bX,A.fA,A.iW,A.eq,A.hC])
r(A.es,A.M)
r(A.de,A.es)
q(A.G,[A.a6,A.a5,A.aH,A.U,A.dN,A.fP])
q(A.a6,[A.fx,A.O,A.fs,A.jt])
r(A.dh,A.ct)
q(A.bQ,[A.ev,A.ew,A.ex])
r(A.b5,A.ev)
r(A.a_,A.ew)
r(A.fX,A.ex)
r(A.eA,A.ej)
r(A.cY,A.eA)
r(A.eV,A.cY)
q(A.e8,[A.a7,A.f0])
q(A.cx,[A.eW,A.fY,A.h5])
r(A.c4,A.eW)
q(A.hz,[A.mH,A.nY,A.nZ,A.oq,A.lo,A.o2,A.o7,A.o6,A.o4,A.o3,A.oa,A.o9,A.o8,A.on,A.p3,A.ov,A.ou,A.oS,A.oM,A.oR,A.oI,A.oJ,A.oT,A.oQ,A.oG,A.oH,A.oN,A.oO,A.oP,A.oL,A.oK,A.pd,A.n_,A.lS,A.lJ,A.lP,A.ok,A.ol,A.pq,A.pB,A.pC,A.ps,A.pt,A.pu,A.p4])
r(A.fi,A.cz)
q(A.iT,[A.iQ,A.e5])
q(A.Z,[A.bK,A.fM,A.js])
r(A.f9,A.bK)
r(A.ek,A.cT)
q(A.fg,[A.io,A.aI])
q(A.aI,[A.fR,A.fT])
r(A.fS,A.fR)
r(A.fe,A.fS)
r(A.fU,A.fT)
r(A.ff,A.fU)
q(A.fe,[A.fd,A.ip])
q(A.ff,[A.iq,A.ir,A.is,A.it,A.iu,A.dw,A.fh])
r(A.h_,A.jn)
r(A.fF,A.jh)
r(A.jD,A.ha)
r(A.fO,A.fM)
r(A.bP,A.fY)
r(A.fz,A.h5)
q(A.df,[A.hs,A.hO,A.ig])
q(A.hE,[A.kN,A.md,A.mc,A.nH])
r(A.ih,A.fa)
r(A.og,A.oh)
r(A.j1,A.hO)
q(A.bX,[A.em,A.i5])
r(A.ji,A.h6)
q(A.jm,[A.dz,A.dp,A.hn,A.cB,A.e9,A.hu,A.hB,A.hK,A.dB,A.ed,A.bZ,A.fr,A.cp,A.en,A.ee,A.fH,A.fJ,A.hY,A.f1,A.i_,A.i0,A.dm,A.f2,A.dD,A.cX,A.e7,A.ey,A.ht,A.dc,A.hF,A.hH,A.aL,A.hr,A.bJ,A.dl,A.di,A.cP,A.f_,A.cO,A.cQ,A.fp,A.dA,A.bl,A.b3,A.i7,A.dK,A.bM,A.bg,A.bA,A.bB,A.cZ,A.cg])
q(A.cw,[A.bh,A.bz,A.c9,A.iw,A.cq])
r(A.mZ,A.nV)
r(A.mY,A.mZ)
q(A.fj,[A.l7,A.lA,A.m4,A.ne,A.no])
q(A.nP,[A.j8,A.jx,A.bn,A.j5,A.j4,A.fB])
s(A.es,A.cf)
s(A.hb,A.M)
s(A.fR,A.M)
s(A.fS,A.ai)
s(A.fT,A.M)
s(A.fU,A.ai)
s(A.eA,A.h4)
s(A.h5,A.jO)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",v:"double",aR:"num",m:"String",r:"bool",al:"Null",E:"List",D:"Object",W:"Map",a0:"JSObject"},mangledNames:{},types:["~(a0)","~()","co()","al(a0)","r(m)","r(v)","~(r)","@(@)","r(am)","r(bm)","~(~())","~(@)","r()","j(bt,bt)","r(@)","r(aZ)","al()","r(D?)","r(S)","j(@,@)","~(m,v)","~(D?,D?)","@()","0&()","r(j)","@(m)","m(D?)","r(bt)","r(aK)","m?(m)","j()","al(@)","j(a2,a2)","m(am)","cq(j,j,m?)","fq(bh)","co(m{fallback:m?})","j(j,+(bz,cF))","dF?()","e6()","v()","aJ(by)","j(au<bi>,au<bi>)","by(au<bi>)","j(au<bf>,au<bf>)","by(au<bf>)","dx(v,v,v,v)","A(A)","al(~())","~(dE)","dE()","r(fy?)","bu<al>(R<m,m>)","bz(j,j,m?)","r(E<m>)","j(m,m)","D?(D?)","r(a0)","a0()","co(bz?)","r(bJ)","j(j,+(bh,bL))","bh(j,j,m?)","e2(D?)","e1(D?)","e3(D?)","c9(j,j,m?)","c8(c9)","e4(D?)","@(@,m)","r(cW)","r(d1)","r(d0)","b(b)","j(+(v,v,v,v),+(v,v,v,v))","~(j)","r(bk)","j(j,aK)","r(c_)","r(c6)","0&(m,j?)","j(ca,ca)","r(c5)","R<m,m>(m,@)","r(bl)","r(b3)","W<m,m>(W<m,m>,m)","j(j)","R<j,@>(j,dI)","R<j,@>(j,dH)","r(R<@,@>)","R<m,m>(R<@,@>)","m(bW)","j(bW,bW)","E<+(v,v,v,v)>()","j(bm,bm)","j(bN,bN)","W<m,@>(bm)","r(bB)","r(bA)","r(bg)","~(@,@)","r(eo)","~(bl,b3)","al(D,cd)","~(D,cd)","~(j,@)","al(@,cd)","c6(D?)","c_(D?)","c5(D?)","~(aR)","~(m)","j(bk,bk)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.b5&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.a_&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fX&&A.zu(a,b.a)}}
A.x5(v.typeUniverse,JSON.parse('{"cr":"cR","ix":"cR","dG":"cR","zQ":"cT","t":{"E":["1"],"G":["1"],"a0":[],"n":["1"]},"ic":{"r":[],"a3":[]},"f7":{"al":[],"a3":[]},"f8":{"a0":[]},"cR":{"a0":[]},"ia":{"ft":[]},"m2":{"t":["1"],"E":["1"],"G":["1"],"a0":[],"n":["1"]},"da":{"ah":["1"]},"dr":{"v":[],"aR":[],"aG":["aR"]},"f6":{"v":[],"j":[],"aR":[],"aG":["aR"],"a3":[]},"id":{"v":[],"aR":[],"aG":["aR"],"a3":[]},"ds":{"m":[],"aG":["m"],"rB":[],"a3":[]},"d_":{"n":["2"]},"eT":{"ah":["2"]},"dd":{"d_":["1","2"],"n":["2"],"n.E":"2"},"fK":{"dd":["1","2"],"d_":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"fI":{"M":["2"],"E":["2"],"d_":["1","2"],"G":["2"],"n":["2"]},"bY":{"fI":["1","2"],"M":["2"],"E":["2"],"d_":["1","2"],"G":["2"],"n":["2"],"n.E":"2","M.E":"2"},"dt":{"a9":[]},"de":{"M":["j"],"cf":["j"],"E":["j"],"G":["j"],"n":["j"],"M.E":"j","cf.E":"j"},"G":{"n":["1"]},"a6":{"G":["1"],"n":["1"]},"fx":{"a6":["1"],"G":["1"],"n":["1"],"a6.E":"1","n.E":"1"},"bx":{"ah":["1"]},"ct":{"n":["2"],"n.E":"2"},"dh":{"ct":["1","2"],"G":["2"],"n":["2"],"n.E":"2"},"du":{"ah":["2"]},"O":{"a6":["2"],"G":["2"],"n":["2"],"a6.E":"2","n.E":"2"},"Q":{"n":["1"],"n.E":"1"},"J":{"ah":["1"]},"c2":{"n":["1"],"n.E":"1"},"fD":{"ah":["1"]},"es":{"M":["1"],"cf":["1"],"E":["1"],"G":["1"],"n":["1"]},"fs":{"a6":["1"],"G":["1"],"n":["1"],"a6.E":"1","n.E":"1"},"b5":{"ev":[],"bQ":[]},"a_":{"ew":[],"bQ":[]},"fX":{"ex":[],"bQ":[]},"eV":{"cY":["1","2"],"eA":["1","2"],"ej":["1","2"],"h4":["1","2"],"W":["1","2"]},"e8":{"W":["1","2"]},"a7":{"e8":["1","2"],"W":["1","2"]},"dP":{"n":["1"],"n.E":"1"},"dQ":{"ah":["1"]},"f0":{"e8":["1","2"],"W":["1","2"]},"eW":{"cx":["1"],"cV":["1"],"G":["1"],"n":["1"]},"c4":{"eW":["1"],"cx":["1"],"cV":["1"],"G":["1"],"n":["1"]},"fi":{"cz":[],"a9":[]},"ie":{"a9":[]},"iX":{"a9":[]},"fZ":{"cd":[]},"cL":{"dk":[]},"hz":{"dk":[]},"hA":{"dk":[]},"iT":{"dk":[]},"iQ":{"dk":[]},"e5":{"dk":[]},"iJ":{"a9":[]},"bK":{"Z":["1","2"],"pY":["1","2"],"W":["1","2"],"Z.K":"1","Z.V":"2"},"a5":{"G":["1"],"n":["1"],"n.E":"1"},"cS":{"ah":["1"]},"aH":{"G":["1"],"n":["1"],"n.E":"1"},"ap":{"ah":["1"]},"U":{"G":["R<1,2>"],"n":["R<1,2>"],"n.E":"R<1,2>"},"fb":{"ah":["R<1,2>"]},"f9":{"bK":["1","2"],"Z":["1","2"],"pY":["1","2"],"W":["1","2"],"Z.K":"1","Z.V":"2"},"ev":{"bQ":[]},"ew":{"bQ":[]},"ex":{"bQ":[]},"ek":{"cT":[],"a0":[],"a3":[]},"dw":{"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"cT":{"a0":[],"a3":[]},"fg":{"a0":[]},"io":{"a0":[],"a3":[]},"aI":{"bw":["1"],"a0":[]},"fe":{"M":["v"],"aI":["v"],"E":["v"],"bw":["v"],"G":["v"],"a0":[],"n":["v"],"ai":["v"]},"ff":{"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"]},"fd":{"lh":[],"M":["v"],"aI":["v"],"E":["v"],"bw":["v"],"G":["v"],"a0":[],"n":["v"],"ai":["v"],"a3":[],"M.E":"v","ai.E":"v"},"ip":{"M":["v"],"aI":["v"],"E":["v"],"bw":["v"],"G":["v"],"a0":[],"n":["v"],"ai":["v"],"a3":[],"M.E":"v","ai.E":"v"},"iq":{"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"ir":{"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"is":{"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"it":{"qa":[],"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"iu":{"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"fh":{"fy":[],"M":["j"],"aI":["j"],"E":["j"],"bw":["j"],"G":["j"],"a0":[],"n":["j"],"ai":["j"],"a3":[],"M.E":"j","ai.E":"j"},"jn":{"a9":[]},"h_":{"cz":[],"a9":[]},"bE":{"ah":["1"]},"ci":{"n":["1"],"n.E":"1"},"aF":{"a9":[]},"fF":{"jh":["1"]},"ak":{"bu":["1"]},"ha":{"t2":[]},"jD":{"ha":[],"t2":[]},"fM":{"Z":["1","2"],"W":["1","2"]},"fO":{"fM":["1","2"],"Z":["1","2"],"W":["1","2"],"Z.K":"1","Z.V":"2"},"dN":{"G":["1"],"n":["1"],"n.E":"1"},"fN":{"ah":["1"]},"bP":{"cx":["1"],"rx":["1"],"cV":["1"],"G":["1"],"n":["1"]},"dR":{"ah":["1"]},"M":{"E":["1"],"G":["1"],"n":["1"]},"Z":{"W":["1","2"]},"fP":{"G":["2"],"n":["2"],"n.E":"2"},"fQ":{"ah":["2"]},"ej":{"W":["1","2"]},"cY":{"eA":["1","2"],"ej":["1","2"],"h4":["1","2"],"W":["1","2"]},"cx":{"cV":["1"],"G":["1"],"n":["1"]},"fY":{"cx":["1"],"cV":["1"],"G":["1"],"n":["1"]},"fz":{"cx":["1"],"jO":["1"],"cV":["1"],"G":["1"],"n":["1"]},"js":{"Z":["m","@"],"W":["m","@"],"Z.K":"m","Z.V":"@"},"jt":{"a6":["m"],"G":["m"],"n":["m"],"a6.E":"m","n.E":"m"},"hs":{"df":["E<j>","m"]},"hO":{"df":["m","E<j>"]},"fa":{"a9":[]},"ih":{"a9":[]},"ig":{"df":["D?","m"]},"j1":{"df":["m","E<j>"]},"dg":{"aG":["dg"]},"v":{"aR":[],"aG":["aR"]},"cN":{"aG":["cN"]},"j":{"aR":[],"aG":["aR"]},"E":{"G":["1"],"n":["1"]},"aR":{"aG":["aR"]},"cV":{"G":["1"],"n":["1"]},"m":{"aG":["m"],"rB":[]},"jm":{"H":[]},"ho":{"a9":[]},"cz":{"a9":[]},"bX":{"a9":[]},"em":{"a9":[]},"i5":{"a9":[]},"fA":{"a9":[]},"iW":{"a9":[]},"eq":{"a9":[]},"hC":{"a9":[]},"iv":{"a9":[]},"fv":{"a9":[]},"jM":{"cd":[]},"aX":{"wp":[]},"h6":{"iZ":[]},"jG":{"iZ":[]},"ji":{"iZ":[]},"jr":{"q4":[]},"eu":{"q4":[]},"dz":{"H":[]},"bh":{"cw":[]},"bz":{"cw":[]},"c9":{"cw":[]},"cq":{"cw":[]},"iw":{"cw":[]},"dp":{"H":[]},"hn":{"H":[]},"cB":{"H":[]},"e9":{"H":[]},"hu":{"H":[]},"hB":{"H":[]},"hK":{"H":[]},"dB":{"H":[]},"ed":{"H":[]},"bZ":{"H":[]},"fr":{"H":[]},"cp":{"H":[]},"en":{"H":[]},"fo":{"wg":[]},"dO":{"by":[]},"jA":{"wf":[]},"jo":{"vA":[]},"bi":{"aG":["bi"]},"bf":{"aG":["bf"]},"ee":{"H":[]},"fH":{"H":[]},"eS":{"ac":[]},"jf":{"a2":[]},"hv":{"ac":[]},"jg":{"a2":[]},"hI":{"ac":[]},"jj":{"a2":[]},"fJ":{"H":[]},"eX":{"ac":[]},"jk":{"a2":[]},"hM":{"ac":[]},"jl":{"a2":[]},"i1":{"ac":[]},"jq":{"a2":[]},"hw":{"we":[]},"fl":{"ac":[]},"jB":{"a2":[]},"iD":{"ac":[]},"jC":{"a2":[]},"iL":{"ac":[]},"jE":{"a2":[]},"iM":{"ac":[]},"jF":{"a2":[]},"iP":{"ac":[]},"jJ":{"a2":[]},"iO":{"ac":[]},"jI":{"a2":[]},"j3":{"ac":[]},"jP":{"a2":[]},"jb":{"ac":[]},"jQ":{"a2":[]},"hY":{"H":[]},"f1":{"H":[]},"i_":{"H":[]},"i0":{"H":[]},"dm":{"H":[]},"f2":{"H":[]},"dD":{"H":[]},"cX":{"H":[]},"e7":{"H":[]},"hJ":{"vj":[]},"ey":{"H":[]},"aL":{"H":[]},"ht":{"H":[]},"dc":{"H":[]},"hF":{"H":[]},"hH":{"H":[]},"d4":{"co":[]},"ja":{"vD":[]},"hr":{"H":[]},"bJ":{"H":[]},"dl":{"H":[]},"di":{"H":[]},"cP":{"H":[]},"cO":{"H":[]},"f_":{"H":[]},"cQ":{"H":[]},"fp":{"H":[]},"dA":{"H":[]},"bl":{"H":[]},"b3":{"H":[]},"i7":{"H":[]},"dK":{"H":[]},"bM":{"H":[]},"bg":{"H":[]},"bA":{"H":[]},"bB":{"H":[]},"cZ":{"H":[]},"cg":{"H":[]},"fW":{"q6":[]},"et":{"q6":[]},"vK":{"E":["j"],"G":["j"],"n":["j"]},"fy":{"E":["j"],"G":["j"],"n":["j"]},"wu":{"E":["j"],"G":["j"],"n":["j"]},"vI":{"E":["j"],"G":["j"],"n":["j"]},"qa":{"E":["j"],"G":["j"],"n":["j"]},"vJ":{"E":["j"],"G":["j"],"n":["j"]},"wt":{"E":["j"],"G":["j"],"n":["j"]},"lh":{"E":["v"],"G":["v"],"n":["v"]},"vz":{"E":["v"],"G":["v"],"n":["v"]}}'))
A.x4(v.typeUniverse,JSON.parse('{"es":1,"hb":2,"aI":1,"fY":1,"h5":1,"hE":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",p:"MaterialDefinition uv scale must not be zero",n:"MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",i:"MaterialDefinition.emissiveStrength must be >= 0: 0",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aw
return{lC:s("eR"),D:s("bW"),v:s("aF"),f5:s("hq"),gE:s("e1"),fS:s("e2"),d2:s("e3"),lJ:s("e4"),dP:s("bf"),kp:s("hx"),gS:s("de"),bP:s("aG<@>"),e3:s("eU"),p1:s("a7<m,m>"),I:s("a7<m,j>"),Q:s("c4<m>"),ml:s("dg"),lD:s("bg"),jS:s("cN"),gt:s("G<@>"),no:s("bJ"),R:s("bt"),W:s("a9"),hZ:s("aS"),pk:s("lh"),gY:s("dk"),mj:s("bu<al>"),_:s("co"),bU:s("cQ"),mm:s("c5"),lv:s("i4<D>"),hL:s("cq"),ob:s("c6"),gB:s("c_"),dp:s("n<eU>"),bq:s("n<m>"),id:s("n<v>"),e7:s("n<@>"),fm:s("n<j>"),od:s("t<bW>"),ag:s("t<hN>"),hS:s("t<cM>"),r:s("t<bt>"),bp:s("t<hR>"),ph:s("t<aS>"),iw:s("t<bu<~>>"),mc:s("t<hV>"),l2:s("t<co>"),aW:s("t<bv>"),iG:s("t<f4>"),dL:s("t<ef>"),oX:s("t<zP<D>>"),og:s("t<dq>"),jj:s("t<cq>"),Y:s("t<a0>"),b1:s("t<ii>"),cs:s("t<b2>"),ic:s("t<W<m,D>>"),hq:s("t<W<m,m>>"),bV:s("t<W<m,@>>"),kS:s("t<ik>"),mn:s("t<dv>"),dg:s("t<bh>"),hJ:s("t<am>"),jc:s("t<bj>"),de:s("t<dx>"),bz:s("t<ca>"),dQ:s("t<iz>"),aN:s("t<bk>"),bM:s("t<+(m,E<bk>)>"),fR:s("t<+(j,m)>"),a3:s("t<+(v,v,v,v)>"),o5:s("t<ac>"),u:s("t<a2>"),oZ:s("t<fo>"),C:s("t<S>"),c8:s("t<aJ>"),bH:s("t<by>"),kl:s("t<aK>"),e_:s("t<cc>"),b2:s("t<ep>"),ao:s("t<au<bf>>"),mX:s("t<au<bi>>"),ix:s("t<dF>"),jn:s("t<cW>"),s:s("t<m>"),aA:s("t<iS>"),k:s("t<A>"),h:s("t<b>"),cF:s("t<fC>"),bl:s("t<cD>"),ah:s("t<bN>"),E:s("t<aZ>"),jX:s("t<d1>"),a9:s("t<d0>"),jU:s("t<jz>"),dz:s("t<d2<c8>>"),jk:s("t<d2<bL>>"),n_:s("t<d2<aJ>>"),mQ:s("t<d2<cF>>"),eP:s("t<ez>"),df:s("t<r>"),n:s("t<v>"),dG:s("t<@>"),t:s("t<j>"),kC:s("t<a0?>"),dM:s("t<D?>"),g2:s("t<aR>"),w:s("f7"),m:s("a0"),d4:s("a0()"),dY:s("cr"),dX:s("bw<@>"),bY:s("E<bt>"),b:s("E<bv>"),l_:s("E<W<m,m>>"),O:s("E<am>"),b3:s("E<ca>"),fB:s("E<bk>"),jz:s("E<+(j,m)>"),ge:s("E<+(v,v,v,v)>"),io:s("E<cc>"),a:s("E<m>"),iD:s("E<fC>"),ee:s("E<cD>"),eU:s("E<bN>"),cu:s("E<fL>"),j:s("E<@>"),L:s("E<j>"),ia:s("E<D?>"),mK:s("fc"),gc:s("R<m,m>"),d7:s("R<@,@>"),iI:s("R<j,@>"),f7:s("W<m,co>"),iE:s("W<m,am>"),G:s("W<m,m>"),oQ:s("W<m,r>"),P:s("W<m,@>"),f:s("W<@,@>"),d8:s("W<j,dH>"),c_:s("W<j,dI>"),gz:s("W<m,E<+(v,v,v,v)>>"),kz:s("W<bB,E<bN>>"),iu:s("W<j,W<m,m>>"),mz:s("O<A,A>"),dD:s("O<m,m?>"),fP:s("c9"),l0:s("bh"),eb:s("ek"),mR:s("dw"),c:s("al"),K:s("D"),nL:s("bi"),A:s("am"),f0:s("ca"),T:s("bk"),ku:s("fk"),lZ:s("zR"),aK:s("+()"),o7:s("+(bh,bL)"),p3:s("+(bz,cF)"),aL:s("+(v,v)"),cW:s("+(v,v,v,v)"),ks:s("a2"),mo:s("cb<cq,aJ>"),kk:s("cb<c9,c8>"),ll:s("cb<bh,bL>"),ox:s("cb<bz,cF>"),n4:s("S"),p9:s("aJ"),os:s("by"),J:s("aK"),k8:s("cc"),U:s("cV<m>"),nO:s("cV<j>"),m9:s("b3"),gC:s("bl"),ad:s("ep"),d:s("au<bf>"),p:s("au<bi>"),l:s("cd"),fO:s("cW"),dB:s("aL"),N:s("m"),lu:s("bz"),aJ:s("a3"),do:s("cz"),cx:s("dG"),oP:s("cY<m,m>"),mL:s("iY"),jJ:s("iZ"),b9:s("A"),bf:s("b"),pc:s("A(A)"),g:s("bm"),nq:s("bA"),kM:s("bB"),bR:s("dH"),ey:s("dI"),mv:s("cD"),kX:s("bN"),cq:s("bn"),bn:s("Q<bg>"),ns:s("Q<bJ>"),hr:s("Q<b3>"),am:s("Q<bl>"),nn:s("Q<m>"),cB:s("Q<bA>"),na:s("Q<bB>"),lS:s("c2<m>"),Z:s("aZ"),fH:s("fL"),e:s("ak<@>"),mp:s("fO<D?,D?>"),j8:s("jw"),fg:s("d1"),at:s("d0"),ln:s("jx"),fw:s("jy"),bS:s("fV"),h6:s("jH"),hX:s("jK"),fJ:s("ci<by>"),V:s("h8"),fL:s("h9"),y:s("r"),al:s("r()"),hg:s("r(bg)"),gl:s("r(bJ)"),iW:s("r(D)"),aZ:s("r(b3)"),gw:s("r(bl)"),dA:s("r(m)"),bQ:s("r(bA)"),nw:s("r(bB)"),i:s("v"),z:s("@"),mY:s("@()"),mq:s("@(D)"),ng:s("@(D,cd)"),S:s("j"),gK:s("bu<al>?"),mU:s("a0?"),lH:s("E<@>?"),X:s("D?"),x:s("m?"),ej:s("m?(m)"),nh:s("fy?"),F:s("dL<@,@>?"),q:s("ju?"),fU:s("r?"),hK:s("r(eo)?"),dC:s("v?"),aV:s("j?"),jh:s("aR?"),jE:s("~()?"),as:s("~(bl,b3)?"),ov:s("~(m)?"),hm:s("~(m,v)?"),B:s("~(r)?"),bZ:s("~(j)?"),o:s("aR"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e4=J.i8.prototype
B.a=J.t.prototype
B.c=J.f6.prototype
B.d=J.dr.prototype
B.b=J.ds.prototype
B.e5=J.cr.prototype
B.e6=J.f8.prototype
B.n=A.fd.prototype
B.bz=A.fh.prototype
B.bA=J.ix.prototype
B.aM=J.dG.prototype
B.ia=new A.hn(0,"opaque")
B.cj=new A.hr(4,"ambience")
B.U=new A.fp(1,"next")
B.ck=new A.db(B.U,!1,!0,!1,null)
B.Z=new A.ht(0,"add")
B.cl=new A.dc(0,"zero")
B.M=new A.dc(1,"one")
B.N=new A.hu(0,"alpha")
B.aS=new A.eR()
B.aj=new A.kL()
B.ib=new A.kN()
B.co=new A.hs()
B.aT=new A.kR()
B.aU=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cu=function() {
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
B.cz=function(getTagFallback) {
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
B.cv=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cy=function(hooks) {
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
B.cx=function(hooks) {
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
B.cw=function(hooks) {
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
B.aV=function(hooks) { return hooks; }

B.r=new A.ig()
B.ic=new A.mf()
B.cA=new A.D()
B.cB=new A.iv()
B.id=new A.mD()
B.cC=new A.mE()
B.cD=new A.cc()
B.W=new A.bM(1,"gradeLUT")
B.cE=new A.cc()
B.cF=new A.n8()
B.cG=new A.na()
B.l=new A.nd()
B.aW=new A.j1()
B.hx=new A.cB(0,"position")
B.hD=new A.cC(B.hx,0,3)
B.hy=new A.cB(1,"normal")
B.hE=new A.cC(B.hy,3,3)
B.hz=new A.cB(2,"color")
B.hF=new A.cC(B.hz,6,4)
B.hA=new A.cB(4,"alpha")
B.hG=new A.cC(B.hA,10,1)
B.hB=new A.cB(5,"uv0")
B.hH=new A.cC(B.hB,11,2)
B.hC=new A.cB(6,"legacyMaterialEffect")
B.hI=new A.cC(B.hC,13,1)
B.ar=s([B.hD,B.hE,B.hF,B.hG,B.hH,B.hI],A.aw("t<cC>"))
B.O=new A.nI()
B.aX=new A.jr()
B.v=new A.jD()
B.a_=new A.jM()
B.P=new A.e7(0,"colorOnly")
B.aY=new A.e7(1,"colorAndDepth")
B.ak=new A.e7(2,"depthOnly")
B.a0=new A.hF(1,"back")
B.a1=new A.hH(0,"less")
B.a2=new A.bg(0,"open")
B.aZ=new A.bg(1,"chain")
B.b_=new A.bg(2,"throughDoor")
B.b0=new A.bg(3,"letterbox")
B.Q=new A.bg(4,"ignore")
B.G=new A.e9(0,"opaque")
B.cH=new A.e9(1,"masked")
B.al=new A.e9(2,"blended")
B.cI=new A.ea(!1,B.a1,!1,!0,B.M,B.M,B.Z,!1,B.a0,!0,!1,!0,!0,!0,!0,!1)
B.cJ=new A.ea(!0,B.a1,!1,!0,B.M,B.M,B.Z,!0,B.a0,!0,!1,!0,!0,!0,!0,!1)
B.cm=new A.dc(2,"srcAlpha")
B.cn=new A.dc(3,"oneMinusSrcAlpha")
B.cK=new A.ea(!0,B.a1,!1,!0,B.cm,B.cn,B.Z,!0,B.a0,!0,!1,!0,!0,!0,!0,!1)
B.cL=new A.cN(0)
B.cM=new A.cN(24e5)
B.b1=new A.bJ(0,"compliance")
B.cN=new A.eb(B.b1)
B.b2=new A.bJ(1,"rupture")
B.cO=new A.eb(B.b2)
B.b3=new A.bJ(2,"synchronisation")
B.cP=new A.eb(B.b3)
B.b4=new A.di(0,"front")
B.cQ=new A.di(1,"rearService")
B.cR=new A.di(2,"sideBoundary")
B.cS=new A.di(3,"roofline")
B.i=new A.cO(0,"north")
B.z=new A.cO(1,"east")
B.j=new A.cO(2,"south")
B.H=new A.cO(3,"west")
B.a3=new A.f_(0,"ground")
B.a4=new A.f_(1,"first")
B.cT=new A.cP(0,"mantle")
B.cU=new A.cP(1,"portal")
B.cW=new A.cP(3,"inventory")
B.cX=new A.cP(4,"none")
B.cY=new A.dj(B.cX,null)
B.cV=new A.cP(2,"window")
B.cZ=new A.dj(B.cV,"the shutter")
B.d_=new A.K("saved mantle history is malformed",null,null)
B.d0=new A.K("rupture elapsed time is malformed",null,null)
B.d1=new A.K("presentation keys must be strings",null,null)
B.b5=new A.K("saved mantle state is malformed",null,null)
B.d2=new A.K("inactive rupture has elapsed time",null,null)
B.d3=new A.K("listener room is empty",null,null)
B.d4=new A.K("saved difficulty state is malformed",null,null)
B.d5=new A.K("saved house drift state is malformed",null,null)
B.d6=new A.K("saved sleep record is malformed",null,null)
B.d7=new A.K("saved day-loop sleepHistory must be a list",null,null)
B.d8=new A.K("audio event position is not finite",null,null)
B.d9=new A.K("event sequence must be non-negative",null,null)
B.da=new A.K("modelScale must be positive and finite",null,null)
B.db=new A.K("listener position is not finite",null,null)
B.dc=new A.K("saved window state is malformed",null,null)
B.dd=new A.K("save run and meta must be objects",null,null)
B.de=new A.K("saved house state is malformed",null,null)
B.df=new A.K("saved sleep record must be an object",null,null)
B.dg=new A.K("sound cue must be a non-empty string",null,null)
B.dh=new A.K("saved session run is malformed",null,null)
B.di=new A.K("save map keys must be strings",null,null)
B.dj=new A.K("transform.scale must be positive",null,null)
B.dk=new A.K("saved day-loop state is malformed",null,null)
B.dl=new A.K("rupture extinguished mantle is unknown",null,null)
B.b6=new A.K("saved portal state is malformed",null,null)
B.dm=new A.K("acoustic portal profile is not finite",null,null)
B.dn=new A.K("saved house state does not match this house",null,null)
B.dp=new A.K("presentation snapshot contains a non-finite number",null,null)
B.dq=new A.K("save contains a non-finite number",null,null)
B.dr=new A.K("text.json root must be an object",null,null)
B.ds=new A.K("event kind is empty",null,null)
B.dt=new A.K("saved session clock is malformed",null,null)
B.du=new A.K("rupture mantle IDs are malformed",null,null)
B.dv=new A.K("saved sleep record has an unknown enum",null,null)
B.dw=new A.K("audio cue variants are empty",null,null)
B.dx=new A.K("save root must be an object",null,null)
B.dy=new A.K("audio event identity is empty",null,null)
B.dz=new A.K("render capabilities contain invalid limits",null,null)
B.dA=new A.K("saved house overrides are malformed",null,null)
B.S=new A.cs(0,0,0)
B.bi=new A.cs(1,1,1)
B.eA=s([],t.dQ)
B.eB=s([],t.ix)
B.dB=new A.hU(B.S,B.S,0,1,B.bi,0,null,B.eA,B.eB)
B.dC=new A.ed(0,"idle")
B.am=new A.ed(1,"active")
B.dD=new A.ed(2,"ended")
B.b7=new A.ee(0,"outside")
B.dE=new A.ee(1,"intersects")
B.dF=new A.ee(2,"inside")
B.dG=new A.dl(0,"timeAdvanced")
B.dH=new A.dl(1,"dayEndReached")
B.dI=new A.dl(4,"slept")
B.dJ=new A.dl(5,"complianceFloorTripped")
B.dK=new A.f1(0,"vertex")
B.b8=new A.f1(1,"indices")
B.b9=new A.hY(0,"staticDraw")
B.f=new A.f2(0,"ready")
B.R=new A.f2(1,"lost")
B.dL=new A.dm(0,"color")
B.ba=new A.dm(1,"colorAndGlow")
B.dM=new A.dm(2,"colorDepthGlow")
B.an=new A.dm(3,"depthOnly")
B.a5=new A.i_(1,"linear")
B.bb=new A.i0(0,"clampToEdge")
B.dN=new A.hZ(1,1,1,!1,B.a5,B.a5,B.bb)
B.dO=new A.cp(0,"beforeShadow")
B.dP=new A.cp(2,"beforeDepth")
B.bc=new A.cp(3,"afterDepth")
B.bd=new A.cp(4,"beforeWorld")
B.B=new A.cp(6,"afterResolve")
B.dQ=new A.cp(9,"beforePresent")
B.be=new A.bZ(0,"readBeforeWrite")
B.dR=new A.bZ(1,"duplicateWriter")
B.dS=new A.bZ(2,"sampledMultisampledAttachment")
B.dT=new A.bZ(4,"formatOrSizeMismatch")
B.dU=new A.bZ(5,"unversionedReadWrite")
B.dV=new A.bZ(6,"invalidHistoryRead")
B.dW=new A.bZ(7,"dependencyCycle")
B.dX=new A.bZ(8,"missingCapability")
B.a6=new A.cQ(0,"player")
B.ao=new A.cQ(1,"inserted")
B.bf=new A.cQ(2,"warden")
B.bg=new A.dp(0,"wrongKind")
B.bh=new A.dp(1,"staleGeneration")
B.dY=new A.dp(2,"doubleRelease")
B.ap=new A.dp(3,"releasedResource")
B.e0=new A.ef("kitchen-range","settle")
B.e1=new A.ef("cellar-drain","drip")
B.e2=new A.ef("bathroom-cistern","settle")
B.e3=new A.i7(1,"visitor")
B.e7=new A.mc(null)
B.e8=new A.md(null)
B.e9=new A.cs(0.34,0.39,0.5)
B.ea=new A.cs(0.012,0.016,0.028)
B.eb=new A.cs(0.008,0.012,0.024)
B.bj=s([0,2,2,3],t.t)
B.ec=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cp=new A.cM()
B.cq=new A.cM()
B.cr=new A.cM()
B.cs=new A.cM()
B.ct=new A.cM()
B.ed=s([B.cp,B.cq,B.cr,B.cs,B.ct],t.hS)
B.ee=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.w=s(["who","verb","object","place","time"],t.s)
B.ef=s([2,5,9,12,16,19],t.t)
B.eg=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow"],t.s)
B.eh=s(["uQuantizationBits","uDitherStrength"],t.s)
B.ei=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.ej=s([B.a2,B.aZ,B.b_,B.b0,B.Q],A.aw("t<bg>"))
B.ek=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.Y=new A.bB(0,"full")
B.aO=new A.bB(1,"compressed")
B.aP=new A.bB(2,"off")
B.bk=s([B.Y,B.aO,B.aP],A.aw("t<bB>"))
B.fN=new A.a_("master","Master",1)
B.fJ=new A.a_("voice","Visitor voice",1)
B.fI=new A.a_("effects","Effects",1)
B.fw=new A.a_("ambience","House ambience",1)
B.fO=new A.a_("music","Music",1)
B.el=s([B.fN,B.fJ,B.fI,B.fw,B.fO],A.aw("t<+(m,m,v)>"))
B.em=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.en=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.eo=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.ep=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.hc=new A.bl(0,"long")
B.c8=new A.bl(1,"short")
B.bl=s([B.hc,B.c8],A.aw("t<bl>"))
B.eq=s([2.1,4.2,6.3],t.n)
B.er=s(["master","voice","effects","ambience","music"],t.s)
B.es=s(["res/house/house.json","assets/house/house.json"],t.s)
B.A=new A.bM(0,"inactive")
B.az=new A.bM(2,"affineWarp")
B.aA=new A.bM(3,"vertexSnap")
B.aB=new A.bM(4,"tapeGiveup")
B.aC=new A.bM(5,"portalFail")
B.J=new A.bM(6,"lightsOut")
B.bm=s([B.A,B.W,B.az,B.aA,B.aB,B.aC,B.J],A.aw("t<bM>"))
B.et=s([B.a6,B.ao,B.bf],A.aw("t<cQ>"))
B.eu=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.C=s([],t.hS)
B.eD=s([],t.iG)
B.eC=s([],t.dL)
B.ev=s([],A.aw("t<c_>"))
B.ex=s([],t.cs)
B.aq=s([],t.jc)
B.ez=s([],t.bz)
B.I=s([],t.aN)
B.ey=s([],t.u)
B.bo=s([],t.e_)
B.ew=s([],t.b2)
B.m=s([],t.s)
B.bp=s([],t.cF)
B.bn=s([],t.E)
B.eE=s([],t.t)
B.eF=s([],t.dG)
B.e_=new A.f5(15,"kitchen",-0.3,0)
B.dZ=new A.f5(19,"spare-room",0,0.3)
B.D=s([B.e_,B.dZ],A.aw("t<f5>"))
B.eG=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.h9=new A.b3(0,"bed")
B.ha=new A.b3(1,"chair")
B.hb=new A.b3(2,"floor")
B.bq=s([B.h9,B.ha,B.hb],A.aw("t<b3>"))
B.br=s([B.i,B.z,B.j,B.H],A.aw("t<cO>"))
B.aD=new A.aL(0,"depthTest")
B.aE=new A.aL(1,"depthFunc")
B.aF=new A.aL(2,"depthWrite")
B.aG=new A.aL(3,"blendEnable")
B.aH=new A.aL(4,"blendFunc")
B.aI=new A.aL(5,"blendEquation")
B.aJ=new A.aL(6,"cullEnable")
B.aK=new A.aL(7,"cullFace")
B.cb=new A.aL(8,"frontFace")
B.he=new A.aL(9,"stencilEnable")
B.c9=new A.aL(10,"colorMask")
B.ca=new A.aL(11,"scissorEnable")
B.eH=s([B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.aJ,B.aK,B.cb,B.he,B.c9,B.ca],A.aw("t<aL>"))
B.eI=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.eJ=s(["uBloomStrength"],t.s)
B.eK=s(["uLutSize","uStrength"],t.s)
B.eL=s([B.b1,B.b2,B.b3],A.aw("t<bJ>"))
B.eM=s(["wall-plaster","grime"],t.s)
B.eN=s(["uTexelSize","uNear","uFar"],t.s)
B.bs=s(["uTexelStep"],t.s)
B.eO=s(["uninitialized"],t.s)
B.L=new A.bA(0,"waiting")
B.ad=new A.bA(1,"atDoor")
B.ae=new A.bA(2,"consulting")
B.af=new A.bA(3,"resolved")
B.eP=s([B.L,B.ad,B.ae,B.af],A.aw("t<bA>"))
B.ff={uAlbedo:0}
B.bt=new A.a7(B.ff,[0],t.I)
B.f5={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.bu=new A.a7(B.f5,[2,3,4,5,6],t.I)
B.fo={uAlbedo:0,uShadowMap:1,uSsao:2}
B.eQ=new A.a7(B.fo,[0,1,2],t.I)
B.fm={uSsaoRaw:0,uSceneDepth:1}
B.eR=new A.a7(B.fm,[0,1],t.I)
B.fj={uScene:0,uHistory:1}
B.eS=new A.a7(B.fj,[0,1],t.I)
B.f3={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.eT=new A.a7(B.f3,["dd0453e3d464ea7ffca0375cd8ffc107238536d5","badd341244c10a1ba25bd8aa88725d30c0dd0bc4","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p1)
B.fc={aPosition:0,aUvMat:1}
B.bv=new A.a7(B.fc,[0,4],t.I)
B.fk={uScene:0,uLut:1}
B.eU=new A.a7(B.fk,[0,1],t.I)
B.fl={uSource:0}
B.bw=new A.a7(B.fl,[0],t.I)
B.f6={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"range-settle":16,"cellar-drip":17,"cistern-settle":18,"step-above-0":19,"step-above-1":20,"step-above-2":21,"step-above-3":22}
B.eV=new A.a7(B.f6,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","transient","transient","transient","sub","sub","sub","sub"],t.p1)
B.fb={uSharp:0,uBlurred:1,uSceneDepth:2}
B.eW=new A.a7(B.fb,[0,1,2],t.I)
B.fg={uBloom:0}
B.eX=new A.a7(B.fg,[0],t.I)
B.fh={uSceneDepth:0}
B.eY=new A.a7(B.fh,[0],t.I)
B.fi={uScene:0}
B.eZ=new A.a7(B.fi,[0],t.I)
B.T={}
B.by=new A.a7(B.T,[],A.aw("a7<m,eR>"))
B.bx=new A.a7(B.T,[],t.p1)
B.t=new A.a7(B.T,[],t.I)
B.f_=new A.a7(B.T,[],A.aw("a7<@,@>"))
B.fd={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.f0=new A.a7(B.fd,[0,1,2,3],t.I)
B.f8={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.f1=new A.a7(B.f8,[0,1,2,3,4],t.I)
B.fn={uTex:0}
B.f2=new A.a7(B.fn,[0],t.I)
B.as=new A.f0([B.W,1,B.az,1.5,B.aA,1.5,B.aB,2,B.aC,2,B.J,4],A.aw("f0<bM,v>"))
B.fp=new A.iw(0,1,null)
B.fq=new A.iA(1,0,0,0,0,0,0,0,8,0,0,0,0,0,0,!1)
B.at=new A.dz(0,"safe")
B.au=new A.dz(1,"standard")
B.av=new A.dz(2,"high")
B.F=new A.c4(B.T,0,t.Q)
B.a7=new A.dy(B.at,B.F)
B.fe={shadows:0}
B.h7=new A.c4(B.fe,1,t.Q)
B.fs=new A.dy(B.au,B.h7)
B.f9={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.h4=new A.c4(B.f9,5,t.Q)
B.ft=new A.dy(B.av,B.h4)
B.fr=new A.dz(4,"shipping")
B.fa={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.h5=new A.c4(B.fa,7,t.Q)
B.ih=new A.dy(B.fr,B.h5)
B.fv=new A.b5(0,1)
B.fx=new A.a_(0.46,0.44,0.48)
B.fy=new A.a_(0.46,0.25,0.2)
B.fz=new A.a_(0.48,0.4,0.34)
B.fA=new A.a_(0.31,0.25,0.23)
B.fB=new A.a_(0.42,0.44,0.43)
B.fC=new A.a_(0.43,0.38,0.43)
B.fD=new A.a_(0.37,0.33,0.31)
B.fE=new A.a_(0.34,0.32,0.29)
B.bB=new A.a_(0.38,0.25,0.19)
B.fF=new A.a_(0.31,0.28,0.24)
B.fG=new A.a_(0.58,0.56,0.5)
B.fH=new A.a_(0.36,0.39,0.46)
B.fK=new A.a_(0.44,0.37,0.28)
B.fL=new A.a_(0.52,0.5,0.44)
B.fM=new A.a_(0.24,0.25,0.27)
B.fP=new A.a_(0.28,0.27,0.25)
B.fQ=new A.a_(0.31,0.34,0.4)
B.fR=new A.a_(0.34,0.3,0.36)
B.fS=new A.a_(0.42,0.4,0.38)
B.fT=new A.a_(0.18,0.2,0.21)
B.fU=new A.a_(0.2,0.12,0.1)
B.fV=new A.a_(0.45,0.42,0.35)
B.fW=new A.a_(0.12,0.15,0.2)
B.fX=new A.a_(0.34,0.36,0.45)
B.a8=new A.fp(0,"legacy")
B.bC=new A.dA(0,"constructed")
B.x=new A.dA(1,"ready")
B.a9=new A.dA(2,"lost")
B.bD=new A.dA(3,"disposed")
B.ie=new A.hB(1,"srgb")
B.ig=new A.hK(1,"errorsOnly")
B.fY=new A.iG(B.a7,384,216,0)
B.aw=new A.dB(0,"constructed")
B.fZ=new A.dB(1,"initializing")
B.ax=new A.dB(2,"ready")
B.bE=new A.dB(3,"contextLost")
B.h=new A.en(0,"read")
B.k=new A.en(1,"write")
B.E=new A.en(2,"historyRead")
B.o=new A.fr(0,"rgba8")
B.bG=new A.aW("dofBlurH",B.o,192,108,1,0)
B.bH=new A.aW("dofBlurV",B.o,192,108,1,0)
B.bI=new A.aW("dofOutput",B.o,384,216,1,0)
B.bM=new A.aW("gradeOutput",B.o,384,216,1,0)
B.ay=new A.aW("vhsOutput",B.o,384,216,1,0)
B.bN=new A.aW("bloomBlurH",B.o,192,108,1,0)
B.bO=new A.aW("bloomBlurV",B.o,192,108,1,0)
B.V=new A.aW("sceneColor",B.o,384,216,1,0)
B.bP=new A.aW("ps1Output",B.o,384,216,1,0)
B.bL=new A.aW("ssaoBlurred",B.o,192,108,1,0)
B.bQ=new A.S(B.bL,B.k)
B.bK=new A.aW("ssaoRaw",B.o,192,108,1,0)
B.bR=new A.S(B.bK,B.k)
B.aa=new A.S(B.V,B.k)
B.bS=new A.S(B.ay,B.k)
B.bT=new A.S(B.ay,B.E)
B.bU=new A.S(B.bM,B.k)
B.bF=new A.fr(2,"depth24")
B.bJ=new A.aW("shadowMap",B.bF,512,512,1,0)
B.bV=new A.S(B.bJ,B.k)
B.bW=new A.S(B.bI,B.k)
B.bX=new A.S(B.bK,B.h)
B.bY=new A.S(B.V,B.h)
B.h_=new A.aW("sceneDepth",B.bF,384,216,1,0)
B.bZ=new A.S(B.h_,B.k)
B.c_=new A.S(B.bJ,B.h)
B.c0=new A.S(B.bP,B.k)
B.c1=new A.S(B.bH,B.h)
B.c2=new A.S(B.bL,B.h)
B.c3=new A.S(B.bO,B.h)
B.h0=new A.dC(null,"save storage unavailable")
B.h1=new A.dC(null,"save could not be recovered")
B.h2=new A.dC(null,null)
B.f7={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.h3=new A.c4(B.f7,4,t.Q)
B.f4={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.h6=new A.c4(B.f4,9,t.Q)
B.c6=new A.dD(2,"link")
B.h8=new A.fu(B.c6,"gl.createProgram() returned null")
B.c4=new A.dD(0,"vertex")
B.c5=new A.dD(1,"fragment")
B.c7=new A.dD(3,"validation")
B.K=new A.A(0,1,0)
B.aN=new A.A(0,-1,0)
B.hd=new A.dF(B.K,B.aN,B.bi,1,1,0.3,0.5)
B.ac=new A.A(0,0,0)
B.fu=new A.iE(0,0,0,1)
B.y=new A.iV(B.ac,B.fu)
B.hf=A.bU("zK")
B.hg=A.bU("zL")
B.hh=A.bU("lh")
B.hi=A.bU("vz")
B.hj=A.bU("vI")
B.hk=A.bU("vJ")
B.hl=A.bU("vK")
B.hm=A.bU("a0")
B.hn=A.bU("D")
B.ho=A.bU("qa")
B.hp=A.bU("wt")
B.hq=A.bU("wu")
B.hr=A.bU("fy")
B.e=new A.cX(0,"float1")
B.ab=new A.cX(1,"float2")
B.p=new A.cX(2,"float3")
B.q=new A.cX(3,"mat4")
B.aL=new A.cX(4,"sampler")
B.u=new A.z(B.aL,0)
B.X=new A.z(B.aL,1)
B.cc=new A.z(B.aL,2)
B.hs=new A.nH(!1)
B.ht=new A.A(0,0,1)
B.hu=new A.A(1,0,0)
B.hv=new A.A(1/0,1/0,1/0)
B.hw=new A.A(-1/0,-1/0,-1/0)
B.hJ=new A.cZ(0,"visitorAnswered")
B.cd=new A.cZ(1,"visitorIgnored")
B.hK=new A.cZ(2,"entryVerified")
B.hL=new A.cZ(3,"entryContradicted")
B.hM=new A.cZ(4,"exposureAccepted")
B.hO=new A.cg(1,"malformedDay")
B.hP=new A.cg(2,"malformedTier")
B.ce=new A.cg(3,"missingTierLines")
B.aQ=new A.cg(6,"invalidPhase")
B.hV=new A.bC(B.aQ,"The active visit cannot be chosen.")
B.hY=new A.bn(B.hV)
B.hS=new A.bC(B.aQ,"The active visit has no line to advance.")
B.hZ=new A.bn(B.hS)
B.hR=new A.cg(5,"noActiveVisit")
B.hT=new A.bC(B.hR,"There is no active visit.")
B.cf=new A.bn(B.hT)
B.hU=new A.bC(B.aQ,"A visit is already active.")
B.i_=new A.bn(B.hU)
B.hQ=new A.cg(4,"noArrival")
B.hX=new A.bC(B.hQ,"The authored arrival is missing.")
B.i0=new A.bn(B.hX)
B.hN=new A.cg(0,"missingCorpus")
B.hW=new A.bC(B.hN,"The authored visitor corpus is empty.")
B.i1=new A.bn(B.hW)
B.cg=new A.dK(1,"exact")
B.aR=new A.dK(2,"partial")
B.ag=new A.dK(3,"contradiction")
B.i2=new A.dK(0,"skipped")
B.i3=new A.dJ(B.i2,B.F)
B.i4=new A.dJ(B.aR,B.F)
B.i5=new A.fE(B.I,!1)
B.i6=new A.fE(B.I,!0)
B.ch=new A.fH(0,"horizontal")
B.i7=new A.fH(1,"vertical")
B.ci=new A.fJ(0,"horizontal")
B.i8=new A.fJ(1,"vertical")
B.ah=new A.ey(0,"empty")
B.i9=new A.ey(1,"cpuReady")
B.ai=new A.ey(4,"released")})();(function staticFields(){$.oe=null
$.bI=A.f([],A.aw("t<D>"))
$.rC=null
$.mJ=0
$.mK=A.yi()
$.ra=null
$.r9=null
$.ud=null
$.u7=null
$.ui=null
$.pg=null
$.pn=null
$.qZ=null
$.om=A.f([],A.aw("t<E<D>?>"))
$.eI=null
$.he=null
$.hf=null
$.qB=!1
$.ad=B.v
$.rS=""
$.rT=null
$.rO=null
$.mz=null
$.bo=A.ae()
$.cG=A.ae()
$.bb=null
$.jZ=null
$.F=A.ae()
$.bF=A.ae()
$.aM=A.ae()
$.tp=A.ae()
$.eJ=null
$.X=A.ae()
$.eF=null
$.dT=A.ae()
$.T=A.ae()
$.qq=A.ae()
$.qx=null
$.bG=null
$.qs=!1
$.qJ=!1
$.tK=null
$.jY=null
$.oC=null
$.tz=0
$.qE=!1
$.tJ=!1
$.qC=0
$.tQ=0
$.cj=0
$.u6=!1
$.tA="booting"
$.bT=0
$.dU=0
$.aD="hall"
$.hc=A.ae()
$.eC=A.ae()
$.bp=A.ae()
$.tP=null
$.qK=0
$.as=null
$.jU=A.ae()
$.jT=A.ae()
$.tq=A.ae()
$.to=A.ae()
$.aC=A.ae()
$.qr=A.ae()
$.qp=A.ae()
$.d5=A.ae()
$.jS=A.ae()
$.aN=A.ae()
$.jR=A.ae()
$.ox=A.ae()
$.p7=A.a8(t.S)
$.ck=A.f([],t.s)
$.qw=null
$.u1=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"zN","us",()=>A.uc("_$dart_dartClosure"))
s($,"zM","eP",()=>A.uc("_$dart_dartClosure_dartJSInterop"))
s($,"Ae","uN",()=>A.f([new J.ia()],A.aw("t<ft>")))
s($,"zU","uu",()=>A.cA(A.nD({
toString:function(){return"$receiver$"}})))
s($,"zV","uv",()=>A.cA(A.nD({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"zW","uw",()=>A.cA(A.nD(null)))
s($,"zX","ux",()=>A.cA(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"A_","uA",()=>A.cA(A.nD(void 0)))
s($,"A0","uB",()=>A.cA(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"zZ","uz",()=>A.cA(A.rP(null)))
s($,"zY","uy",()=>A.cA(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"A2","uD",()=>A.cA(A.rP(void 0)))
s($,"A1","uC",()=>A.cA(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"A3","r3",()=>A.wM())
s($,"A7","uH",()=>A.vZ(4096))
s($,"A5","uF",()=>new A.ov().$0())
s($,"A6","uG",()=>new A.ou().$0())
s($,"A4","uE",()=>new Int8Array(A.Y(A.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Aa","k9",()=>A.k8(B.hn))
s($,"zS","r2",()=>{A.wc()
return $.mJ})
s($,"zJ","pR",()=>new A.aW("sceneColor",B.o,384,216,1,1))
s($,"zO","ut",()=>A.w_(A.f([255,255,255,255],t.t)))
s($,"Af","uO",()=>A.j2(0,1,0))
s($,"Ai","kb",()=>{var q=$.rO
if(q==null){A.k5()
A.k5()
A.k5()
A.k5()
A.k5()
q=$.rO=new A.nw()}return q})
s($,"A8","uI",()=>new A.kM())
s($,"Ab","uK",()=>new A.lD())
s($,"Ac","uL",()=>new A.lM())
s($,"A9","uJ",()=>A.j0().gbf().h(0,"debugPause")==="1")
r($,"qP","eQ",()=>A.j2(0,0,0))
r($,"qG","uM",()=>A.j2(0,0,0))
r($,"qU","hj",()=>A.j2(0,0,0))
s($,"Ad","ka",()=>new A.li(A.j2(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cT,ArrayBuffer:A.ek,ArrayBufferView:A.fg,DataView:A.io,Float32Array:A.fd,Float64Array:A.ip,Int16Array:A.iq,Int32Array:A.ir,Int8Array:A.is,Uint16Array:A.it,Uint32Array:A.iu,Uint8ClampedArray:A.dw,CanvasPixelArray:A.dw,Uint8Array:A.fh})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.fR.$nativeSuperclassTag="ArrayBufferView"
A.fS.$nativeSuperclassTag="ArrayBufferView"
A.fe.$nativeSuperclassTag="ArrayBufferView"
A.fT.$nativeSuperclassTag="ArrayBufferView"
A.fU.$nativeSuperclassTag="ArrayBufferView"
A.ff.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.po
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()