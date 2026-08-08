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
if(a[b]!==s){A.yb(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.pV(b)
return new s(c,this)}:function(){if(s===null)s=A.pV(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.pV(a).prototype
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
q_(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ow(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.pY==null){A.xP()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.qN("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.nv
if(o==null)o=$.nv=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.xX(a)
if(p!=null)return p
if(typeof a=="function")return B.dS
s=Object.getPrototypeOf(a)
if(s==null)return B.bx
if(s===Object.prototype)return B.bx
if(typeof q=="function"){o=$.nv
if(o==null)o=$.nv=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aI,enumerable:false,writable:true,configurable:true})
return B.aI}return B.aI},
qm(a,b){if(a<0||a>4294967295)throw A.c(A.aI(a,0,4294967295,"length",null))
return J.uw(new Array(a),b)},
qn(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("q<0>"))},
hX(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("q<0>"))},
uw(a,b){var s=A.e(a,b.i("q<0>"))
s.$flags=1
return s},
ux(a,b){var s=t.bP
return J.q4(s.a(a),s.a(b))},
qq(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
uy(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.qq(r))break;++b}return b},
uz(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.qq(q))break}return b},
dK(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eV.prototype
return J.hZ.prototype}if(typeof a=="string")return J.dd.prototype
if(a==null)return J.eW.prototype
if(typeof a=="boolean")return J.hY.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
if(typeof a=="symbol")return J.e6.prototype
if(typeof a=="bigint")return J.e5.prototype
return a}if(a instanceof A.B)return a
return J.ow(a)},
aY(a){if(typeof a=="string")return J.dd.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
if(typeof a=="symbol")return J.e6.prototype
if(typeof a=="bigint")return J.e5.prototype
return a}if(a instanceof A.B)return a
return J.ow(a)},
bS(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
if(typeof a=="symbol")return J.e6.prototype
if(typeof a=="bigint")return J.e5.prototype
return a}if(a instanceof A.B)return a
return J.ow(a)},
xL(a){if(typeof a=="number")return J.dc.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.ds.prototype
return a},
t2(a){if(typeof a=="number")return J.dc.prototype
if(typeof a=="string")return J.dd.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.ds.prototype
return a},
xM(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cd.prototype
if(typeof a=="symbol")return J.e6.prototype
if(typeof a=="bigint")return J.e5.prototype
return a}if(a instanceof A.B)return a
return J.ow(a)},
q3(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.t2(a).U(a,b)},
a6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dK(a).S(a,b)},
aP(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.xV(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aY(a).h(a,b)},
bT(a,b,c){return J.bS(a).l(a,b,c)},
h8(a,b){return J.bS(a).k(a,b)},
tB(a,b){return J.bS(a).J(a,b)},
tC(a,b){return J.bS(a).a1(a,b)},
tD(a,b,c){return J.xM(a).f0(a,b,c)},
tE(a,b){return J.bS(a).bY(a,b)},
q4(a,b){return J.t2(a).H(a,b)},
jV(a,b){return J.bS(a).P(a,b)},
bg(a){return J.dK(a).gE(a)},
q5(a){return J.aY(a).gI(a)},
tF(a){return J.aY(a).gL(a)},
L(a){return J.bS(a).gu(a)},
aQ(a){return J.aY(a).gq(a)},
dM(a){return J.dK(a).gM(a)},
dN(a,b,c){return J.bS(a).bB(a,b,c)},
tG(a,b){return J.aY(a).sq(a,b)},
tH(a,b){return J.bS(a).Y(a,b)},
oZ(a,b){return J.xL(a).lg(a,b)},
dO(a){return J.dK(a).n(a)},
tI(a,b){return J.bS(a).dW(a,b)},
hU:function hU(){},
hY:function hY(){},
eW:function eW(){},
eX:function eX(){},
cC:function cC(){},
ih:function ih(){},
ds:function ds(){},
cd:function cd(){},
e5:function e5(){},
e6:function e6(){},
q:function q(a){this.$ti=a},
hW:function hW(){},
lp:function lp(a){this.$ti=a},
cZ:function cZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dc:function dc(){},
eV:function eV(){},
hZ:function hZ(){},
dd:function dd(){}},A={p1:function p1(){},
jN(){return $},
tP(a,b,c){if(t.gt.b(a))return new A.fx(a,b.i("@<0>").D(c).i("fx<1,2>"))
return new A.d0(a,b.i("@<0>").D(c).i("d0<1,2>"))},
qt(a){return new A.de("Field '"+a+"' has been assigned during initialization.")},
ak(a){return new A.de("Field '"+a+"' has not been initialized.")},
uB(a){return new A.de("Field '"+a+"' has already been initialized.")},
ox(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ck(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mL(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dJ(a,b,c){return a},
pZ(a){var s,r
for(s=$.bv.length,r=0;r<s;++r)if(a===$.bv[r])return!0
return!1},
mK(a,b,c,d){A.iq(b,"start")
if(c!=null){A.iq(c,"end")
if(b>c)A.k(A.aI(b,0,c,"start",null))}return new A.fl(a,b,c,d.i("fl<0>"))},
i3(a,b,c,d){if(t.gt.b(a))return new A.d3(a,b,c.i("@<0>").D(d).i("d3<1,2>"))
return new A.cf(a,b,c.i("@<0>").D(d).i("cf<1,2>"))},
hV(){return new A.ef("No element")},
uu(){return new A.ef("Too many elements")},
iy(a,b,c,d,e){if(c-b<=32)A.v4(a,b,c,d,e)
else A.v3(a,b,c,d,e)},
v4(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aY(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a5()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
v3(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.K(a4+a5,2),f=g-j,e=g+j,d=J.aY(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a6(a6.$2(b,a0),0)
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
A.iy(a3,a4,r-2,a6,a7)
A.iy(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a6(a6.$2(d.h(a3,r),b),0))++r
while(J.a6(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.iy(a3,r,q,a6,a7)}else A.iy(a3,r,q,a6,a7)},
cP:function cP(){},
eH:function eH(a,b){this.a=a
this.$ti=b},
d0:function d0(a,b){this.a=a
this.$ti=b},
fx:function fx(a,b){this.a=a
this.$ti=b},
fv:function fv(){},
ng:function ng(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.$ti=b},
de:function de(a){this.a=a},
ho:function ho(a){this.a=a},
mA:function mA(){},
C:function C(){},
a1:function a1(){},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
dg:function dg(a,b,c){var _=this
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
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b){this.a=a
this.$ti=b},
fr:function fr(a,b){this.a=a
this.$ti=b},
ac:function ac(){},
c0:function c0(){},
eh:function eh(){},
fg:function fg(a,b){this.a=a
this.$ti=b},
fY:function fY(){},
dY(a,b,c){var s,r,q,p,o,n,m,l=A.aF(a.gN(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aF(a.gau(),!0,c)
m=new A.a4(q,n,b.i("@<0>").D(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.eJ(A.aS(a,b,c),b.i("@<0>").D(c).i("eJ<1,2>"))},
tV(){throw A.c(A.au("Cannot modify unmodifiable Map"))},
tW(){throw A.c(A.au("Cannot modify constant Set"))},
tg(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xV(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dO(a)
return s},
fa(a){var s,r=$.qA
if(r==null)r=$.qA=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
m4(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
im(a){var s,r,q,p
if(a instanceof A.B)return A.bu(A.be(a),null)
s=J.dK(a)
if(s===B.dR||s===B.dT||t.cx.b(a)){r=B.aP(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bu(A.be(a),null)},
qB(a){var s,r,q
if(a==null||typeof a=="number"||A.bG(a))return J.dO(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cx)return a.n(0)
if(a instanceof A.bB)return a.eU(!0)
s=$.tz()
for(r=0;r<1;++r){q=s[r].li(a)
if(q!=null)return q}return"Instance of '"+A.im(a)+"'"},
uL(){return Date.now()},
uU(){var s,r
if($.m5!==0)return
$.m5=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.m5=1e6
$.m6=new A.m3(r)},
uK(){if(!!self.location)return self.location.href
return null},
uV(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ad(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cQ(s,10)|55296)>>>0,s&1023|56320)}}throw A.c(A.aI(a,0,1114111,null,null))},
e9(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
uT(a){var s=A.e9(a).getUTCFullYear()+0
return s},
uR(a){var s=A.e9(a).getUTCMonth()+1
return s},
uN(a){var s=A.e9(a).getUTCDate()+0
return s},
uO(a){var s=A.e9(a).getUTCHours()+0
return s},
uQ(a){var s=A.e9(a).getUTCMinutes()+0
return s},
uS(a){var s=A.e9(a).getUTCSeconds()+0
return s},
uP(a){var s=A.e9(a).getUTCMilliseconds()+0
return s},
uM(a){var s=a.$thrownJsError
if(s==null)return null
return A.c6(s)},
qC(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.an(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
jP(a){throw A.c(A.pU(a))},
d(a,b){if(a==null)J.aQ(a)
throw A.c(A.ot(a,b))},
ot(a,b){var s,r="index"
if(!A.aM(b))return new A.bK(!0,b,r,null)
s=A.a(J.aQ(a))
if(b<0||b>=s)return A.lk(b,s,a,r)
return A.uW(b,r)},
xF(a,b,c){if(a>c)return A.aI(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aI(b,a,c,"end",null)
return new A.bK(!0,b,"end",null)},
pU(a){return new A.bK(!0,a,null,null)},
c(a){return A.an(a,new Error())},
an(a,b){var s
if(a==null)a=new A.cl()
b.dartException=a
s=A.yd
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
yd(){return J.dO(this.dartException)},
k(a,b){throw A.an(a,b==null?new Error():b)},
bf(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.wo(a,b,c),s)},
wo(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fo("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.c(A.ao(a))},
cm(a){var s,r,q,p,o,n
a=A.t9(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.mS(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
mT(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
qM(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
p2(a,b){var s=b==null,r=s?null:b.method
return new A.i_(a,r,s?null:b.receiver)},
ab(a){var s
if(a==null)return new A.lS(a)
if(a instanceof A.eO){s=a.a
return A.cY(a,s==null?A.ev(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cY(a,a.dartException)
return A.xg(a)},
cY(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
xg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cQ(r,16)&8191)===10)switch(q){case 438:return A.cY(a,A.p2(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.cY(a,new A.f6())}}if(a instanceof TypeError){p=$.tj()
o=$.tk()
n=$.tl()
m=$.tm()
l=$.tp()
k=$.tq()
j=$.to()
$.tn()
i=$.ts()
h=$.tr()
g=p.aq(s)
if(g!=null)return A.cY(a,A.p2(A.F(s),g))
else{g=o.aq(s)
if(g!=null){g.method="call"
return A.cY(a,A.p2(A.F(s),g))}else if(n.aq(s)!=null||m.aq(s)!=null||l.aq(s)!=null||k.aq(s)!=null||j.aq(s)!=null||m.aq(s)!=null||i.aq(s)!=null||h.aq(s)!=null){A.F(s)
return A.cY(a,new A.f6())}}return A.cY(a,new A.iI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fj()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cY(a,new A.bK(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fj()
return a},
c6(a){var s
if(a instanceof A.eO)return a.b
if(a==null)return new A.fL(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fL(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jQ(a){if(a==null)return J.bg(a)
if(typeof a=="object")return A.fa(a)
return J.bg(a)},
xz(a){if(typeof a=="number")return B.d.gE(a)
if(a instanceof A.jw)return A.fa(a)
if(a instanceof A.bB)return a.gE(a)
return A.jQ(a)},
t1(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
xK(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
wJ(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.e0("Unsupported number of arguments for wrapped closure"))},
eC(a,b){var s=a.$identity
if(!!s)return s
s=A.xA(a,b)
a.$identity=s
return s},
xA(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.wJ)},
tU(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iB().constructor.prototype):Object.create(new A.dU(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.qb(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.tQ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.qb(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
tQ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.tN)}throw A.c("Error in functionType of tearoff")},
tR(a,b,c,d){var s=A.qa
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
qb(a,b,c,d){if(c)return A.tT(a,b,d)
return A.tR(b.length,d,a,b)},
tS(a,b,c,d){var s=A.qa,r=A.tO
switch(b?-1:a){case 0:throw A.c(new A.iu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
tT(a,b,c){var s,r
if($.q8==null)$.q8=A.q7("interceptor")
if($.q9==null)$.q9=A.q7("receiver")
s=b.length
r=A.tS(s,c,a,b)
return r},
pV(a){return A.tU(a)},
tN(a,b){return A.fQ(v.typeUniverse,A.be(a.a),b)},
qa(a){return a.a},
tO(a){return a.b},
q7(a){var s,r,q,p=new A.dU("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.w("Field name "+a+" not found.",null))},
t3(a){return v.getIsolateTag(a)},
tc(){return v.G},
yJ(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
xX(a){var s,r,q,p,o,n=A.F($.t4.$1(a)),m=$.ou[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bF($.rZ.$2(a,n))
if(q!=null){m=$.ou[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.oQ(s)
$.ou[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.oB[n]=s
return s}if(p==="-"){o=A.oQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.t7(a,s)
if(p==="*")throw A.c(A.qN(n))
if(v.leafTags[n]===true){o=A.oQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.t7(a,s)},
t7(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.q_(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
oQ(a){return J.q_(a,!1,null,!!a.$ibk)},
y0(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.oQ(s)
else return J.q_(s,c,null,null)},
xP(){if(!0===$.pY)return
$.pY=!0
A.xQ()},
xQ(){var s,r,q,p,o,n,m,l
$.ou=Object.create(null)
$.oB=Object.create(null)
A.xO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.t8.$1(o)
if(n!=null){m=A.y0(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
xO(){var s,r,q,p,o,n,m=B.cr()
m=A.eB(B.cs,A.eB(B.ct,A.eB(B.aQ,A.eB(B.aQ,A.eB(B.cu,A.eB(B.cv,A.eB(B.cw(B.aP),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.t4=new A.oy(p)
$.rZ=new A.oz(o)
$.t8=new A.oA(n)},
eB(a,b){return a(b)||b},
vD(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.a6(r,b[s]))return!1}return!0},
xC(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
y8(a,b,c){var s=a.indexOf(b,c)
return s>=0},
xI(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
t9(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
y9(a,b,c){var s=A.ya(a,b,c)
return s},
ya(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.t9(b),"g"),A.xI(c))},
eo:function eo(a,b){this.a=a
this.b=b},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
fJ:function fJ(a){this.a=a},
eJ:function eJ(a,b){this.a=a
this.$ti=b},
dX:function dX(){},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
dC:function dC(a,b){this.a=a
this.$ti=b},
dD:function dD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
eK:function eK(){},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
m3:function m3(a){this.a=a},
fh:function fh(){},
mS:function mS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f6:function f6(){},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
lS:function lS(a){this.a=a},
eO:function eO(a,b){this.a=a
this.b=b},
fL:function fL(a){this.a=a
this.b=null},
cx:function cx(){},
hm:function hm(){},
hn:function hn(){},
iE:function iE(){},
iB:function iB(){},
dU:function dU(a,b){this.a=a
this.b=b},
iu:function iu(a){this.a=a},
bx:function bx(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ly:function ly(a){this.a=a},
lG:function lG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aj:function aj(a,b){this.a=a
this.$ti=b},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aR:function aR(a,b){this.a=a
this.$ti=b},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
X:function X(a,b){this.a=a
this.$ti=b},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eY:function eY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
oy:function oy(a){this.a=a},
oz:function oz(a){this.a=a},
oA:function oA(a){this.a=a},
bB:function bB(){},
el:function el(){},
em:function em(){},
en:function en(){},
yb(a){throw A.an(A.qt(a),new Error())},
j(){throw A.an(A.ak(""),new Error())},
y(){throw A.an(A.uB(""),new Error())},
tf(){throw A.an(A.qt(""),new Error())},
aa(){var s=new A.nh()
return s.b=s},
nh:function nh(){this.b=null},
a0(a){return a},
uF(a,b,c){return new Float32Array(a,b,c)},
uG(a){return new Uint8Array(a)},
uH(a){return new Uint8Array(A.a0(a))},
cu(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.ot(b,a))},
wh(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.xF(a,b,c))
return b},
cF:function cF(){},
e8:function e8(){},
f4:function f4(){},
nI:function nI(a){this.a=a},
i7:function i7(){},
ax:function ax(){},
f2:function f2(){},
f3:function f3(){},
f1:function f1(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
di:function di(){},
f5:function f5(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
pd(a,b){var s=b.c
return s==null?b.c=A.fO(a,"bi",[b.x]):s},
qE(a){var s=a.w
if(s===6||s===7)return A.qE(a.x)
return s===11||s===12},
v1(a){return a.as},
y1(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
as(a){return A.nH(v.typeUniverse,a,!1)},
dI(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dI(a1,s,a3,a4)
if(r===s)return a2
return A.ra(a1,r,!0)
case 7:s=a2.x
r=A.dI(a1,s,a3,a4)
if(r===s)return a2
return A.r9(a1,r,!0)
case 8:q=a2.y
p=A.eA(a1,q,a3,a4)
if(p===q)return a2
return A.fO(a1,a2.x,p)
case 9:o=a2.x
n=A.dI(a1,o,a3,a4)
m=a2.y
l=A.eA(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.pq(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eA(a1,j,a3,a4)
if(i===j)return a2
return A.rb(a1,k,i)
case 11:h=a2.x
g=A.dI(a1,h,a3,a4)
f=a2.y
e=A.xc(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.r8(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eA(a1,d,a3,a4)
o=a2.x
n=A.dI(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.pr(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.hd("Attempted to substitute unexpected RTI kind "+a0))}},
eA(a,b,c,d){var s,r,q,p,o=b.length,n=A.nM(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dI(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
xd(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.nM(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dI(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
xc(a,b,c,d){var s,r=b.a,q=A.eA(a,r,c,d),p=b.b,o=A.eA(a,p,c,d),n=b.c,m=A.xd(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.j9()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
pW(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.xN(s)
return a.$S()}return null},
xR(a,b){var s
if(A.qE(b))if(a instanceof A.cx){s=A.pW(a)
if(s!=null)return s}return A.be(a)},
be(a){if(a instanceof A.B)return A.o(a)
if(Array.isArray(a))return A.J(a)
return A.pF(J.dK(a))},
J(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.pF(a)},
pF(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.wG(a,s)},
wG(a,b){var s=a instanceof A.cx?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.vM(v.typeUniverse,s.name)
b.$ccache=r
return r},
xN(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.nH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jO(a){return A.c5(A.o(a))},
pS(a){var s
if(a instanceof A.bB)return a.ep()
s=a instanceof A.cx?A.pW(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dM(a).a
if(Array.isArray(a))return A.J(a)
return A.be(a)},
c5(a){var s=a.r
return s==null?a.r=new A.jw(a):s},
xJ(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.d(q,0)
s=A.fQ(v.typeUniverse,A.pS(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.rc(v.typeUniverse,s,A.pS(q[r]))}return A.fQ(v.typeUniverse,s,a)},
bI(a){return A.c5(A.nH(v.typeUniverse,a,!1))},
wF(a){var s=this
s.b=A.x9(s)
return s.b(a)},
x9(a){var s,r,q,p,o
if(a===t.K)return A.wP
if(A.dL(a))return A.wT
s=a.w
if(s===6)return A.wB
if(s===1)return A.rG
if(s===7)return A.wK
r=A.x8(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dL)){a.f="$i"+q
if(q==="E")return A.wN
if(a===t.m)return A.wM
return A.wS}}else if(s===10){p=A.xC(a.x,a.y)
o=p==null?A.rG:p
return o==null?A.ev(o):o}return A.wz},
x8(a){if(a.w===8){if(a===t.S)return A.aM
if(a===t.i||a===t.o)return A.wO
if(a===t.N)return A.wR
if(a===t.y)return A.bG}return null},
wE(a){var s=this,r=A.wy
if(A.dL(s))r=A.we
else if(s===t.K)r=A.ev
else if(A.eD(s)){r=A.wA
if(s===t.aV)r=A.rr
else if(s===t.w)r=A.bF
else if(s===t.fU)r=A.wd
else if(s===t.jh)r=A.rs
else if(s===t.dA)r=A.rq
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.F
else if(s===t.y)r=A.aW
else if(s===t.o)r=A.cs
else if(s===t.i)r=A.h_
else if(s===t.m)r=A.f
s.a=r
return s.a(a)},
wz(a){var s=this
if(a==null)return A.eD(s)
return A.xW(v.typeUniverse,A.xR(a,s),s)},
wB(a){if(a==null)return!0
return this.x.b(a)},
wS(a){var s,r=this
if(a==null)return A.eD(r)
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dK(a)[s]},
wN(a){var s,r=this
if(a==null)return A.eD(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dK(a)[s]},
wM(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.B)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
rF(a){if(typeof a=="object"){if(a instanceof A.B)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
wy(a){var s=this
if(a==null){if(A.eD(s))return a}else if(s.b(a))return a
throw A.an(A.rx(a,s),new Error())},
wA(a){var s=this
if(a==null||s.b(a))return a
throw A.an(A.rx(a,s),new Error())},
rx(a,b){return new A.fM("TypeError: "+A.r0(a,A.bu(b,null)))},
r0(a,b){return A.hD(a)+": type '"+A.bu(A.pS(a),null)+"' is not a subtype of type '"+b+"'"},
bC(a,b){return new A.fM("TypeError: "+A.r0(a,b))},
wK(a){var s=this
return s.x.b(a)||A.pd(v.typeUniverse,s).b(a)},
wP(a){return a!=null},
ev(a){if(a!=null)return a
throw A.an(A.bC(a,"Object"),new Error())},
wT(a){return!0},
we(a){return a},
rG(a){return!1},
bG(a){return!0===a||!1===a},
aW(a){if(!0===a)return!0
if(!1===a)return!1
throw A.an(A.bC(a,"bool"),new Error())},
wd(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.an(A.bC(a,"bool?"),new Error())},
h_(a){if(typeof a=="number")return a
throw A.an(A.bC(a,"double"),new Error())},
rq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bC(a,"double?"),new Error())},
aM(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.an(A.bC(a,"int"),new Error())},
rr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.an(A.bC(a,"int?"),new Error())},
wO(a){return typeof a=="number"},
cs(a){if(typeof a=="number")return a
throw A.an(A.bC(a,"num"),new Error())},
rs(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bC(a,"num?"),new Error())},
wR(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.an(A.bC(a,"String"),new Error())},
bF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.an(A.bC(a,"String?"),new Error())},
f(a){if(A.rF(a))return a
throw A.an(A.bC(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.rF(a))return a
throw A.an(A.bC(a,"JSObject?"),new Error())},
rS(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bu(a[q],b)
return s},
x_(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.rS(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bu(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
rA(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bu(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bu(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bu(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bu(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bu(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bu(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bu(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bu(a.x,b)+">"
if(l===8){p=A.xf(a.x)
o=a.y
return o.length>0?p+("<"+A.rS(o,b)+">"):p}if(l===10)return A.x_(a,b)
if(l===11)return A.rA(a,b,null)
if(l===12)return A.rA(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
xf(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
vN(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
vM(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.nH(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fP(a,5,"#")
q=A.nM(s)
for(p=0;p<s;++p)q[p]=r
o=A.fO(a,b,q)
n[b]=o
return o}else return m},
vL(a,b){return A.rk(a.tR,b)},
vK(a,b){return A.rk(a.eT,b)},
nH(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.r5(A.r3(a,null,b,!1))
r.set(b,s)
return s},
fQ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.r5(A.r3(a,b,c,!0))
q.set(c,r)
return r},
rc(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.pq(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cT(a,b){b.a=A.wE
b.b=A.wF
return b},
fP(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bO(null,null)
s.w=b
s.as=c
r=A.cT(a,s)
a.eC.set(c,r)
return r},
ra(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.vI(a,b,r,c)
a.eC.set(r,s)
return s},
vI(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dL(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.eD(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.bO(null,null)
q.w=6
q.x=b
q.as=c
return A.cT(a,q)},
r9(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.vG(a,b,r,c)
a.eC.set(r,s)
return s},
vG(a,b,c,d){var s,r
if(d){s=b.w
if(A.dL(b)||b===t.K)return b
else if(s===1)return A.fO(a,"bi",[b])
else if(b===t.b||b===t.T)return t.gK}r=new A.bO(null,null)
r.w=7
r.x=b
r.as=c
return A.cT(a,r)},
vJ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bO(null,null)
s.w=13
s.x=b
s.as=q
r=A.cT(a,s)
a.eC.set(q,r)
return r},
fN(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
vF(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fO(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fN(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bO(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cT(a,r)
a.eC.set(p,q)
return q},
pq(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fN(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bO(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cT(a,o)
a.eC.set(q,n)
return n},
rb(a,b,c){var s,r,q="+"+(b+"("+A.fN(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bO(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cT(a,s)
a.eC.set(q,r)
return r},
r8(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fN(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fN(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.vF(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bO(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cT(a,p)
a.eC.set(r,o)
return o},
pr(a,b,c,d){var s,r=b.as+("<"+A.fN(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.vH(a,b,c,r,d)
a.eC.set(r,s)
return s},
vH(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.nM(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dI(a,b,r,0)
m=A.eA(a,c,r,0)
return A.pr(a,n,m,c!==m)}}l=new A.bO(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cT(a,l)},
r3(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
r5(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.vy(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.r4(a,r,l,k,!1)
else if(q===46)r=A.r4(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dF(a.u,a.e,k.pop()))
break
case 94:k.push(A.vJ(a.u,k.pop()))
break
case 35:k.push(A.fP(a.u,5,"#"))
break
case 64:k.push(A.fP(a.u,2,"@"))
break
case 126:k.push(A.fP(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.vA(a,k)
break
case 38:A.vz(a,k)
break
case 63:p=a.u
k.push(A.ra(p,A.dF(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.r9(p,A.dF(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.vx(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.r6(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.vC(a.u,a.e,o)
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
return A.dF(a.u,a.e,m)},
vy(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
r4(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.vN(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.v1(o)+'"')
d.push(A.fQ(s,o,n))}else d.push(p)
return m},
vA(a,b){var s,r=a.u,q=A.r2(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fO(r,p,q))
else{s=A.dF(r,a.e,p)
switch(s.w){case 11:b.push(A.pr(r,s,q,a.n))
break
default:b.push(A.pq(r,s,q))
break}}},
vx(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.r2(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dF(p,a.e,o)
q=new A.j9()
q.a=s
q.b=n
q.c=m
b.push(A.r8(p,r,q))
return
case-4:b.push(A.rb(p,b.pop(),s))
return
default:throw A.c(A.hd("Unexpected state under `()`: "+A.p(o)))}},
vz(a,b){var s=b.pop()
if(0===s){b.push(A.fP(a.u,1,"0&"))
return}if(1===s){b.push(A.fP(a.u,4,"1&"))
return}throw A.c(A.hd("Unexpected extended operation "+A.p(s)))},
r2(a,b){var s=b.splice(a.p)
A.r6(a.u,a.e,s)
a.p=b.pop()
return s},
dF(a,b,c){if(typeof c=="string")return A.fO(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vB(a,b,c)}else return c},
r6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dF(a,b,c[s])},
vC(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dF(a,b,c[s])},
vB(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.hd("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.hd("Bad index "+c+" for "+b.n(0)))},
xW(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ar(a,b,null,c,null)
r.set(c,s)}return s},
ar(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dL(d))return!0
s=b.w
if(s===4)return!0
if(A.dL(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ar(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.T){if(q===7)return A.ar(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.ar(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ar(a,b.x,c,d,e))return!1
return A.ar(a,A.pd(a,b),c,d,e)}if(s===6)return A.ar(a,p,c,d,e)&&A.ar(a,b.x,c,d,e)
if(q===7){if(A.ar(a,b,c,d.x,e))return!0
return A.ar(a,b,c,A.pd(a,d),e)}if(q===6)return A.ar(a,b,c,p,e)||A.ar(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
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
if(!A.ar(a,j,c,i,e)||!A.ar(a,i,e,j,c))return!1}return A.rE(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.rE(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.wL(a,b,c,d,e)}if(o&&q===10)return A.wQ(a,b,c,d,e)
return!1},
rE(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
wL(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fQ(a,b,r[o])
return A.ro(a,p,null,c,d.y,e)}return A.ro(a,b.y,null,c,d.y,e)},
ro(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ar(a,b[s],d,e[s],f))return!1
return!0},
wQ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ar(a,r[s],c,q[s],e))return!1
return!0},
eD(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.dL(a))if(s!==6)r=s===7&&A.eD(a.x)
return r},
dL(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
rk(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
nM(a){return a>0?new Array(a):v.typeUniverse.sEA},
bO:function bO(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
j9:function j9(){this.c=this.b=this.a=null},
jw:function jw(a){this.a=a},
j7:function j7(){},
fM:function fM(a){this.a=a},
vr(){var s,r,q
if(self.scheduleImmediate!=null)return A.xs()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eC(new A.nd(s),1)).observe(r,{childList:true})
return new A.nc(s,r,q)}else if(self.setImmediate!=null)return A.xt()
return A.xu()},
vs(a){self.scheduleImmediate(A.eC(new A.ne(t.M.a(a)),0))},
vt(a){self.setImmediate(A.eC(new A.nf(t.M.a(a)),0))},
vu(a){A.pf(B.cI,t.M.a(a))},
pf(a,b){return A.vE(a.a/1000|0,b)},
vE(a,b){var s=new A.nF()
s.iq(a,b)
return s},
bc(a){return new A.iY(new A.ae($.a8,a.i("ae<0>")),a.i("iY<0>"))},
bb(a,b){a.$2(0,null)
b.b=!0
return b.a},
af(a,b){A.wf(a,b)},
ba(a,b){b.cT(a)},
b9(a,b){b.cU(A.ab(a),A.c6(a))},
wf(a,b){var s,r,q=new A.nR(b),p=new A.nS(b)
if(a instanceof A.ae)a.eT(q,p,t.z)
else{s=t.z
if(a instanceof A.ae)a.dQ(q,p,s)
else{r=new A.ae($.a8,t.d)
r.a=8
r.c=a
r.eT(q,p,s)}}},
bd(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.a8.hC(new A.op(s),t.H,t.S,t.z)},
r7(a,b,c){return 0},
k3(a){var s
if(t.V.b(a)){s=a.gbf()
if(s!=null)return s}return B.S},
p_(a){var s
a.a(null)
s=new A.ae($.a8,a.i("ae<0>"))
s.cz(null)
return s},
ul(a,b,c){var s=new A.ae($.a8,c.i("ae<0>"))
A.v9(a,new A.kR(b,s,c))
return s},
kS(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ae($.a8,b.i("ae<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.kU(i,h,g,f)
try{for(n=J.L(a),m=t.b;n.m();){r=n.gp()
q=i.b
r.dQ(new A.kT(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bL(A.e([],b.i("q<0>")))
return n}i.a=A.bV(n,null,!1,b.i("0?"))}catch(l){p=A.ab(l)
o=A.c6(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.pG(m,k)
m=new A.av(m,k==null?A.k3(m):k)
n.bH(m)
return n}else{i.d=p
i.c=o}}return f},
pG(a,b){if($.a8===B.r)return null
return null},
wH(a,b){if($.a8!==B.r)A.pG(a,b)
if(b==null)if(t.V.b(a)){b=a.gbf()
if(b==null){A.qC(a,B.S)
b=B.S}}else b=B.S
else if(t.V.b(a))A.qC(a,b)
return new A.av(a,b)},
nm(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.d;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.v5()
b.bH(new A.av(new A.bK(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.ez(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bj()
b.bK(o.a)
A.dz(b,p)
return}b.a^=2
A.jK(null,null,b.b,t.M.a(new A.nn(o,b)))},
dz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.pN(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dz(d.a,c)
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
A.pN(j.a,j.b)
return}g=$.a8
if(g!==h)$.a8=h
else g=null
c=c.c
if((c&15)===8)new A.nr(q,d,n).$0()
else if(o){if((c&1)!==0)new A.nq(q,j).$0()}else if((c&2)!==0)new A.np(d,q).$0()
if(g!=null)$.a8=g
c=q.c
if(c instanceof A.ae){p=q.a.$ti
p=p.i("bi<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bR(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.nm(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bR(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
x0(a,b){var s
if(t.ng.b(a))return b.hC(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.c(A.aD(a,"onError",u.c))},
wW(){var s,r
for(s=$.ex;s!=null;s=$.ex){$.h3=null
r=s.b
$.ex=r
if(r==null)$.h2=null
s.a.$0()}},
xa(){$.pH=!0
try{A.wW()}finally{$.h3=null
$.pH=!1
if($.ex!=null)$.q2().$1(A.t_())}},
rW(a){var s=new A.iZ(a),r=$.h2
if(r==null){$.ex=$.h2=s
if(!$.pH)$.q2().$1(A.t_())}else $.h2=r.b=s},
x6(a){var s,r,q,p=$.ex
if(p==null){A.rW(a)
$.h3=$.h2
return}s=new A.iZ(a)
r=$.h3
if(r==null){s.b=p
$.ex=$.h3=s}else{q=r.b
s.b=q
$.h3=r.b=s
if(q==null)$.h2=s}},
yo(a,b){A.dJ(a,"stream",t.K)
return new A.ju(b.i("ju<0>"))},
v9(a,b){var s=$.a8
if(s===B.r)return A.pf(a,t.M.a(b))
return A.pf(a,t.M.a(s.f2(b)))},
pN(a,b){A.x6(new A.oj(a,b))},
rR(a,b,c,d,e){var s,r=$.a8
if(r===c)return d.$0()
$.a8=c
s=r
try{r=d.$0()
return r}finally{$.a8=s}},
x4(a,b,c,d,e,f,g){var s,r=$.a8
if(r===c)return d.$1(e)
$.a8=c
s=r
try{r=d.$1(e)
return r}finally{$.a8=s}},
x3(a,b,c,d,e,f,g,h,i){var s,r=$.a8
if(r===c)return d.$2(e,f)
$.a8=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a8=s}},
jK(a,b,c,d){t.M.a(d)
if(B.r!==c){d=c.f2(d)
d=d}A.rW(d)},
nd:function nd(a){this.a=a},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function ne(a){this.a=a},
nf:function nf(a){this.a=a},
nF:function nF(){},
nG:function nG(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=!1
this.$ti=b},
nR:function nR(a){this.a=a},
nS:function nS(a){this.a=a},
op:function op(a){this.a=a},
bs:function bs(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
c3:function c3(a,b){this.a=a
this.$ti=b},
av:function av(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function kU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kT:function kT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j1:function j1(){},
fs:function fs(a,b){this.a=a
this.$ti=b},
dy:function dy(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ae:function ae(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
nj:function nj(a,b){this.a=a
this.b=b},
no:function no(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.a=a
this.b=b},
nl:function nl(a,b){this.a=a
this.b=b},
nk:function nk(a,b){this.a=a
this.b=b},
nr:function nr(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function ns(a,b){this.a=a
this.b=b},
nt:function nt(a){this.a=a},
nq:function nq(a,b){this.a=a
this.b=b},
np:function np(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a
this.b=null},
ju:function ju(a){this.$ti=a},
fX:function fX(){},
jn:function jn(){},
nD:function nD(a,b){this.a=a
this.b=b},
oj:function oj(a,b){this.a=a
this.b=b},
r1(a,b){var s=a[b]
return s===a?null:s},
po(a,b,c){if(c==null)a[b]=a
else a[b]=c},
pn(){var s=Object.create(null)
A.po(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
qv(a,b){return new A.bx(a.i("@<0>").D(b).i("bx<1,2>"))},
T(a,b,c){return b.i("@<0>").D(c).i("p3<1,2>").a(A.t1(a,new A.bx(b.i("@<0>").D(c).i("bx<1,2>"))))},
x(a,b){return new A.bx(a.i("@<0>").D(b).i("bx<1,2>"))},
p4(a){return new A.bA(a.i("bA<0>"))},
a3(a){return new A.bA(a.i("bA<0>"))},
at(a,b){return b.i("qw<0>").a(A.xK(a,new A.bA(b.i("bA<0>"))))},
pp(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jf(a,b,c){var s=new A.dE(a,b,c.i("dE<0>"))
s.c=a.e
return s},
e4(a,b){var s=J.L(a.a)
if(new A.P(s,a.b,a.$ti.i("P<1>")).m())return s.gp()
return null},
aS(a,b,c){var s=A.qv(b,c)
a.ab(0,new A.lH(s,b,c))
return s},
lI(a,b){var s,r,q=A.p4(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.k(0,b.a(a[r]))
return q},
p5(a,b){var s=A.p4(b)
s.J(0,a)
return s},
uC(a,b){var s=t.bP
return J.q4(s.a(a),s.a(b))},
p6(a){var s,r
if(A.pZ(a))return"{...}"
s=new A.aK("")
try{r={}
B.a.k($.bv,a)
s.a+="{"
r.a=!0
a.ab(0,new A.lK(r,s))
s.a+="}"}finally{if(0>=$.bv.length)return A.d($.bv,-1)
$.bv.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
vO(){throw A.c(A.au("Cannot change an unmodifiable set"))},
fz:function fz(){},
nu:function nu(a){this.a=a},
fB:function fB(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dA:function dA(a,b){this.a=a
this.$ti=b},
fA:function fA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bA:function bA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
je:function je(a){this.a=a
this.c=this.b=null},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lH:function lH(a,b,c){this.a=a
this.b=b
this.c=c},
I:function I(){},
U:function U(){},
lJ:function lJ(a){this.a=a},
lK:function lK(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.$ti=b},
fD:function fD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fR:function fR(){},
e7:function e7(){},
cM:function cM(a,b){this.a=a
this.$ti=b},
cj:function cj(){},
fK:function fK(){},
jx:function jx(){},
fn:function fn(a,b){this.a=a
this.$ti=b},
er:function er(){},
fS:function fS(){},
wY(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ab(r)
q=A.ag(String(s),null,null)
throw A.c(q)}q=A.nT(p)
return q},
nT(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jc(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.nT(a[s])
return a},
w4(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.tw()
else s=new Uint8Array(o)
for(r=J.aY(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
w3(a,b,c,d){var s=a?$.tv():$.tu()
if(s==null)return null
if(0===c&&d===b.length)return A.rj(s,b)
return A.rj(s,b.subarray(c,d))},
rj(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
q6(a,b,c,d,e,f){if(B.c.ak(f,4)!==0)throw A.c(A.ag("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.c(A.ag("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.c(A.ag("Invalid base64 padding, more than two '=' characters",a,b))},
qs(a,b,c){return new A.eZ(a,b)},
wn(a){return a.C()},
vv(a,b){return new A.nx(a,[],A.xB())},
vw(a,b,c){var s,r=new A.aK(""),q=A.vv(r,b)
q.cm(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
w5(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jc:function jc(a,b){this.a=a
this.b=b
this.c=null},
nw:function nw(a){this.a=a},
jd:function jd(a){this.a=a},
nL:function nL(){},
nK:function nK(){},
hf:function hf(){},
kf:function kf(){},
d1:function d1(){},
hs:function hs(){},
hC:function hC(){},
eZ:function eZ(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i0:function i0(){},
lA:function lA(a){this.b=a},
lz:function lz(a){this.a=a},
ny:function ny(){},
nz:function nz(a,b){this.a=a
this.b=b},
nx:function nx(a,b,c){this.c=a
this.a=b
this.b=c},
iM:function iM(){},
mY:function mY(a){this.a=a},
nJ:function nJ(a){this.a=a
this.b=16
this.c=0},
xS(a){var s=A.m4(a,null)
if(s!=null)return s
throw A.c(A.ag(a,null,null))},
ug(a,b){a=A.an(a,new Error())
if(a==null)a=A.ev(a)
a.stack=b.n(0)
throw a},
bV(a,b,c,d){var s,r=c?J.qn(a,d):J.qm(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aF(a,b,c){var s,r=A.e([],c.i("q<0>"))
for(s=J.L(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
Q(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("q<0>"))
s=A.e([],b.i("q<0>"))
for(r=J.L(a);r.m();)B.a.k(s,r.gp())
return s},
ap(a,b){var s=A.aF(a,!1,b)
s.$flags=3
return s},
qK(a,b,c){var s,r
A.iq(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.c(A.aI(c,b,null,"end",null))
if(s===0)return""}r=A.v7(a,b,c)
return r},
v7(a,b,c){var s=a.length
if(b>=s)return""
return A.uV(a,b,c==null||c>s?s:c)},
qJ(a,b,c){var s=J.L(b)
if(!s.m())return a
if(c.length===0){do a+=A.p(s.gp())
while(s.m())}else{a+=A.p(s.gp())
while(s.m())a=a+c+A.p(s.gp())}return a},
mV(){var s,r,q=A.uK()
if(q==null)throw A.c(A.au("'Uri.base' is not supported"))
s=$.qQ
if(s!=null&&q===$.qP)return s
r=A.vf(q)
$.qQ=r
$.qP=q
return r},
v5(){return A.c6(new Error())},
tX(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qc(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hu(a){if(a>=10)return""+a
return"0"+a},
uf(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.c(A.aD(b,"name","No enum value with that name"))},
hD(a){if(typeof a=="number"||A.bG(a)||a==null)return J.dO(a)
if(typeof a=="string")return JSON.stringify(a)
return A.qB(a)},
uh(a,b){A.dJ(a,"error",t.K)
A.dJ(b,"stackTrace",t.l)
A.ug(a,b)},
hd(a){return new A.hc(a)},
w(a,b){return new A.bK(!1,null,b,a)},
aD(a,b,c){return new A.bK(!0,a,b,c)},
qD(a){var s=null
return new A.ea(s,s,!1,s,s,a)},
uW(a,b){return new A.ea(null,null,!0,a,b,"Value not in range")},
aI(a,b,c,d,e){return new A.ea(b,c,!0,a,d,"Invalid value")},
fb(a,b,c){if(0>a||a>c)throw A.c(A.aI(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aI(b,a,c,"end",null))
return b}return c},
iq(a,b){if(a<0)throw A.c(A.aI(a,0,null,b,null))
return a},
lk(a,b,c,d){return new A.hR(b,!0,a,d,"Index out of range")},
au(a){return new A.fo(a)},
qN(a){return new A.iH(a)},
l(a){return new A.ef(a)},
ao(a){return new A.hq(a)},
e0(a){return new A.ni(a)},
ag(a,b,c){return new A.K(a,b,c)},
uv(a,b,c){var s,r
if(A.pZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.k($.bv,a)
try{A.wU(a,s)}finally{if(0>=$.bv.length)return A.d($.bv,-1)
$.bv.pop()}r=A.qJ(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
p0(a,b,c){var s,r
if(A.pZ(a))return b+"..."+c
s=new A.aK(b)
B.a.k($.bv,a)
try{r=s
r.a=A.qJ(r.a,a,", ")}finally{if(0>=$.bv.length)return A.d($.bv,-1)
$.bv.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
wU(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
ch(a,b,c,d){var s
if(B.k===c){s=J.bg(a)
b=J.bg(b)
return A.mL(A.ck(A.ck($.jR(),s),b))}if(B.k===d){s=J.bg(a)
b=J.bg(b)
c=J.bg(c)
return A.mL(A.ck(A.ck(A.ck($.jR(),s),b),c))}s=J.bg(a)
b=J.bg(b)
c=J.bg(c)
d=J.bg(d)
d=A.mL(A.ck(A.ck(A.ck(A.ck($.jR(),s),b),c),d))
return d},
uI(a){var s,r,q=$.jR()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.ck(q,J.bg(a[r]))
return A.mL(q)},
pe(a,b){return new A.fn(A.p5(a,b),b.i("fn<0>"))},
vf(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.qO(a4<a4?B.b.B(a5,0,a4):a5,5,a3).ghG()
else if(s===32)return A.qO(B.b.B(a5,5,a4),0,a3).ghG()}r=A.bV(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.rV(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.rV(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.Z(a5,"\\",n))if(p>0)h=B.b.Z(a5,"\\",p-1)||B.b.Z(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.Z(a5,"..",n)))h=m>n+2&&B.b.Z(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.Z(a5,"file",0)){if(p<=0){if(!B.b.Z(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.B(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bb(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.Z(a5,"http",0)){if(i&&o+3===n&&B.b.Z(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bb(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.Z(a5,"https",0)){if(i&&o+4===n&&B.b.Z(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bb(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.jq(a4<a5.length?B.b.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.vY(a5,0,q)
else{if(q===0)A.es(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.vZ(a5,c,p-1):""
a=A.vU(a5,p,o,!1)
i=o+1
if(i<n){a0=A.m4(B.b.B(a5,i,n),a3)
d=A.vW(a0==null?A.k(A.ag("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.vV(a5,n,m,a3,j,a!=null)
a2=m<l?A.vX(a5,m+1,l,a3):a3
return A.vP(j,b,a,d,a1,a2,l<a4?A.vT(a5,l+1,a4):a3)},
qS(a){var s=t.N
return B.a.bv(A.e(a.split("&"),t.s),A.x(s,s),new A.mX(B.aR),t.G)},
iL(a,b,c){throw A.c(A.ag("Illegal IPv4 address, "+a,b,c))},
vc(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iL("each part must be in the range 0..255",a,r)}A.iL("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iL(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bf(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iL(j,a,q)
p=l}A.iL("IPv4 address should contain exactly 4 parts",a,q)},
vd(a,b,c){var s
if(b===c)throw A.c(A.ag("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.ve(a,b,c)
if(s!=null)throw A.c(s)
return!1}A.qR(a,b,c)
return!0},
ve(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.K(n,a,q)
r=q
break}return new A.K("Unexpected character",a,q-1)}if(r-1===b)return new A.K(n,a,r)
return new A.K("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.K("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.K("Invalid IPvFuture address character",a,r)}},
qR(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.mW(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.vc(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cQ(l,8)
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
B.bw.hU(s,a0,16,s,a)
B.bw.kq(s,a,a0,0)}}return s},
vP(a,b,c,d,e,f,g){return new A.fT(a,b,c,d,e,f,g)},
rd(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
es(a,b,c){throw A.c(A.ag(c,a,b))},
vW(a,b){var s=A.rd(b)
if(a===s)return null
return a},
vU(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.es(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.vR(a,q,r)
if(o<r){n=o+1
p=A.ri(a,B.b.Z(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.vd(a,q,o)
l=B.b.B(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cc(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.ri(a,B.b.Z(a,"25",n)?o+3:n,c,"%25")}else p=""
A.qR(a,b,o)
return"["+B.b.B(a,b,o)+p+"]"}}return A.w0(a,b,c)},
vR(a,b,c){var s=B.b.cc(a,"%",b)
return s>=b&&s<c?s:c},
ri(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aK(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.pt(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aK("")
l=h.a+=B.b.B(a,q,r)
if(m)n=B.b.B(a,r,r+3)
else if(n==="%")A.es(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aK("")
if(q<r){h.a+=B.b.B(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.B(a,q,r)
if(h==null){h=new A.aK("")
m=h}else m=h
m.a+=i
l=A.ps(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.B(a,b,c)
if(q<c){i=B.b.B(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
w0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.pt(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aK("")
k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.B(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aK("")
if(q<r){p.a+=B.b.B(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.es(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aK("")
l=p}else l=p
l.a+=k
j=A.ps(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.B(a,b,c)
if(q<c){k=B.b.B(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
vY(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.rf(a.charCodeAt(b)))A.es(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.es(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.B(a,b,c)
return A.vQ(q?a.toLowerCase():a)},
vQ(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
vZ(a,b,c){return A.fU(a,b,c,16,!1,!1)},
vV(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.fU(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.w_(q,e,f)},
w_(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.w1(a,!s||c)
return A.w2(a)},
vX(a,b,c,d){return A.fU(a,b,c,256,!0,!1)},
vT(a,b,c){return A.fU(a,b,c,256,!0,!1)},
pt(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.ox(r)
o=A.ox(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ad(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
ps(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.jq(a,6*p)&63|q
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
o+=3}}return A.qK(s,0,null)},
fU(a,b,c,d,e,f){var s=A.rh(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
rh(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.pt(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.es(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.ps(n)}if(o==null){o=new A.aK("")
k=o}else k=o
k.a=(k.a+=B.b.B(a,p,q))+l
if(typeof m!=="number")return A.jP(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.B(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
rg(a){if(B.b.W(a,"."))return!0
return B.b.cb(a,"/.")!==-1},
w2(a){var s,r,q,p,o,n,m
if(!A.rg(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.aX(s,"/")},
w1(a,b){var s,r,q,p,o,n
if(!A.rg(a))return!b?A.re(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gO(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.re(s[0]))}return B.a.aX(s,"/")},
re(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.rf(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.bF(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
vS(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.c(A.w("Invalid URL encoding",null))}}return r},
pu(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aR===d)return B.b.B(a,b,c)
else p=new A.ho(B.b.B(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.c(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.c(A.w("Truncated URI",null))
B.a.k(p,A.vS(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.J.a(p)
return B.fG.k6(p)},
rf(a){var s=a|32
return 97<=s&&s<=122},
qO(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.c(A.ag(k,a,r))}}if(q<0&&r>b)throw A.c(A.ag(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gO(j)
if(p!==44||r!==n+7||!B.b.Z(a,"base64",n+1))throw A.c(A.ag("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.cl.kO(a,m,s)
else{l=A.rh(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bb(a,m,s,l)}return new A.mU(a,j,c)},
rV(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.a=a},
j6:function j6(){},
a5:function a5(){},
hc:function hc(a){this.a=a},
cl:function cl(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ea:function ea(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hR:function hR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fo:function fo(a){this.a=a},
iH:function iH(a){this.a=a},
ef:function ef(a){this.a=a},
hq:function hq(a){this.a=a},
ie:function ie(){},
fj:function fj(){},
ni:function ni(a){this.a=a},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
ah:function ah(){},
B:function B(){},
jv:function jv(){},
mG:function mG(){this.b=this.a=0},
aK:function aK(a){this.a=a},
mX:function mX(a){this.a=a},
mW:function mW(a){this.a=a},
fT:function fT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mU:function mU(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
j2:function j2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
lR:function lR(a){this.a=a},
am(a){var s
if(typeof a=="function")throw A.c(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jE,a)
s[$.eE()]=a
return s},
jE(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
pX(a,b,c){return c.a(a[b])},
rB(a,b){return a[b]},
aN(a,b,c,d){return d.a(a[b].apply(a,c))},
ru(a,b,c,d){return d.a(a[b](c))},
aO(a,b){var s=new A.ae($.a8,b.i("ae<0>")),r=new A.fs(s,b.i("fs<0>"))
a.then(A.eC(new A.oR(r,b),1),A.eC(new A.oS(r),1))
return s},
rK(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cw(a){if(A.rK(a))return a
return new A.os(new A.fB(t.mp)).$1(a)},
oR:function oR(a,b){this.a=a
this.b=b},
oS:function oS(a){this.a=a},
os:function os(a){this.a=a},
jb:function jb(){},
ek:function ek(){this.b=this.a=0},
m9:function m9(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ma:function ma(){},
dl:function dl(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(){this.a=null
this.d=0},
ik:function ik(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
dV:function dV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hG:function hG(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
kM:function kM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
d9(a,b){return new A.l1(a,b)},
ci:function ci(){},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b){this.a=a
this.b=b},
l1:function l1(a,b){this.a=a
this.b=b},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a,b){this.a=a
this.c=b},
ij:function ij(a,b,c){this.b=a
this.d=b
this.e=c},
ee:function ee(){},
p8(a,b,c,d,e,f,g,h,i){return new A.cE(c,a,g,f,e,h,i,b)},
hb:function hb(a,b){this.a=a
this.b=b},
cE:function cE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h},
cn:function cn(a,b){this.a=a
this.b=b},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lU(a){var s,r=t.N,q=A.at(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.J(0,A.at(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.J(0,A.at(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.J(0,A.at(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.J(0,A.at(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.k(0,"gradeOutput")
if(p.v(0,"ps1"))q.k(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.lT(A.pe(q,r),s)},
lT:function lT(a,b){this.a=a
this.b=b},
lV:function lV(){},
m1:function m1(a){this.b=a},
it:function it(){this.a=null
this.c=0
this.d=!1},
dZ:function dZ(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
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
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dn:function dn(a,b){this.a=a
this.b=b},
kO:function kO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
uD(){return new A.i5(new A.bY(new A.lM(),A.e([],t.dz),A.e([],t.t),t.kk))},
i5:function i5(a){this.a=a},
lM:function lM(){},
rX(a){var s=4
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
case 3:s=A.k(A.au("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
wl(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.an[r]
if(A.rX(q.a)===b)s+=q.c}return s},
uE(a){return new A.lO(a,new A.bY(new A.lP(),A.e([],t.jk),A.e([],t.t),t.ll),A.x(t.S,t.mL))},
iJ:function iJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(){},
lQ:function lQ(){},
v8(a){var s=new A.iF(a,new A.bY(new A.mP(),A.e([],t.mQ),A.e([],t.t),t.ox),A.x(t.S,t._))
s.d=s.ei()
return s},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
mP:function mP(){},
mR:function mR(){},
mQ:function mQ(){},
xv(a){var s,r,q,p,o=A.e([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
B.a.k(o,new A.db(p,A.e([p],r)))
continue}return o},
db:function db(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
kI:function kI(){},
kJ:function kJ(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
kN:function kN(a,b){this.a=a
this.b=b
this.c=0},
p9(){return!0},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function lX(){},
lY:function lY(){},
bM:function bM(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eb:function eb(a,b){this.a=a
this.b=b},
N:function N(a,b){this.a=a
this.b=b},
eI:function eI(a){this.b=a},
m7:function m7(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aH:function aH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mb:function mb(){},
aG:function aG(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
md:function md(a,b){this.a=a
this.b=b},
mh:function mh(){},
mg:function mg(){},
mf:function mf(a){this.a=a},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function mc(a,b){this.a=a
this.b=b},
v_(a){return new A.fc(a,new A.bY(new A.mj(),A.e([],t.n_),A.e([],t.t),t.mn))},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b){this.a=a
this.b=b},
mj:function mj(){},
ry(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.ws(a,r,s,a.x.gp().a.b.a).b},
ws(a,b,c,d){var s,r,q,p,o=new A.o9(a),n=new A.oa(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.xx(b,l,m,s.c.gl5(),new A.nW(n),new A.nX(n),new A.nY(a),new A.o1(a),new A.o2(n),new A.o3(n),new A.o4(a),r.gl7(),o,new A.o5(n),new A.o6(n),new A.o7(n),new A.o8(n),new A.nZ(n),new A.o_(a),new A.o0(n),c.c,c.b)}else q=new A.hE(A.e([new A.iW(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.f9(b,u.l,u.q,l,B.M)],t.o5))
a.r.toString
p=q.jR(B.C,new A.mb(),!1,new A.jk())
o=p.a.b
if(o.length!==0)throw A.c(A.l("safe renderer graph is invalid: "+A.p(o)))
return new A.nE(q,p)},
wt(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.c(A.l("renderer graph is not initialized"))
s=a4.gdE()
r=a5.a
q=A.xD(A.uk(r.c),s,-1).a
p=A.e([],t.mX)
o=A.e([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.c,k=0;k<q.length;q.length===s||(0,A.r)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.ah)B.a.k(o,new A.aq(new A.aZ(m.hF(i.c.a).c,h),j,l))
else B.a.k(p,new A.aq(new A.b1(B.f1,i.b,i.a,h),j,n))}g=new A.j8(A.xv(A.y7(p)),A.y6(o),r,a5.b,a5.c)
f=new A.hx(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.r)(s),++k){e=s[k]
d=A.x(n,m)
for(l=e.gT().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.r)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
a0=a.b.h(0,b)
if(a0==null)A.k(A.l("resource is not in candidate: "+b))
d.l(0,b,new A.hk(a0))}e.a9(new A.hj(d,f,g))}},
qH(a){return new A.my(a,new A.kl(new A.km(),new A.it()),new A.kN(A.e([],t.c8),B.dr),A.e([],t.oZ),B.as)},
o9:function o9(a){this.a=a},
oa:function oa(a,b){this.a=a
this.b=b},
o7:function o7(a){this.a=a},
o1:function o1(a){this.a=a},
o6:function o6(a){this.a=a},
nY:function nY(a){this.a=a},
nZ:function nZ(a){this.a=a},
o8:function o8(a){this.a=a},
o5:function o5(a){this.a=a},
nW:function nW(a){this.a=a},
nX:function nX(a){this.a=a},
o2:function o2(a){this.a=a},
o3:function o3(a){this.a=a},
o4:function o4(a){this.a=a},
o0:function o0(a){this.a=a},
o_:function o_(a){this.a=a},
nE:function nE(a,b){this.a=a
this.b=b},
jk:function jk(){},
j8:function j8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ms:function ms(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
my:function my(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
mz:function mz(){},
y7(a){var s,r,q=A.Q(a,t.p)
B.a.Y(q,new A.oW())
s=A.J(q)
r=s.i("S<1,bl>")
s=A.Q(new A.S(q,s.i("bl(1)").a(new A.oX()),r),r.i("a1.E"))
s.$flags=1
return s},
y6(a){var s,r,q=A.Q(a,t.c)
B.a.Y(q,new A.oU())
s=A.J(q)
r=s.i("S<1,bl>")
s=A.Q(new A.S(q,s.i("bl(1)").a(new A.oV()),r),r.i("a1.E"))
s.$flags=1
return s},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
oW:function oW(){},
oX:function oX(){},
oU:function oU(){},
oV:function oV(){},
xD(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.bH)
for(s=b.$ti,r=new A.bs(b.a(),s.i("bs<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.c(A.w("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.lf(n)===B.b3){++p
continue}B.a.k(l,o)}return new A.ko(l)},
ko:function ko(a){this.a=a},
c7(a){var s,r,q,p,o,n,m,l,k
for(s=J.L(a),r=B.fJ,q=B.fK,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.z(m,k,Math.min(r.c,o))
q=new A.z(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.c(A.w("Aabb.fromPoints requires at least one point",null))
return new A.h9(r,q)},
h9:function h9(a,b){this.a=a
this.b=b},
uk(a){var s,r,q,p,o,n,m=a.a,l=new A.kQ(),k=m.length
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
return new A.kP(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
dj:function dj(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
kP:function kP(a){this.a=a},
kQ:function kQ(){},
qx(a){if(a.length!==16)throw A.c(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.cg(new Float32Array(A.a0(a)))},
p7(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cg(q)},
qy(a,b,c){var s=b.ga3(),r=s.aP(c).ga3(),q=r.aP(s),p=new Float32Array(16)
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
p[12]=-r.bp(a)
p[13]=-q.bp(a)
p[14]=s.bp(a)
p[15]=1
return new A.cg(p)},
cg:function cg(a){this.a=a},
lL:function lL(){},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j3:function j3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fw:function fw(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c,d,e,f,g,h,i,j){var _=this
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
j4:function j4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hA:function hA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
j5:function j5(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
ja:function ja(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk:function hk(a){this.b=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qI(a){var s=A.qy(B.F,B.a4,Math.abs(0)<0.99?B.fI:B.F)
return new A.dr(A.p7(1,1,B.c.a_(1,0.1,3),0.05).V(0,s))},
dr:function dr(a){this.a=a},
iw:function iw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jo:function jo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xx(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.c(A.aD(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.qI(B.cE)
c=t.o5
l=A.e([],c)
if(r){B.a.J(l,A.e([new A.eG(a,j,i,b,h,h,B.cf,!0,B.M,B.bK,b1),new A.eG(a,j,i,b,g,g,B.hj,!1,B.bK,B.bL,a2),new A.hi(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.oY()}else k=B.M
if(q){B.a.J(l,A.e([new A.eL(a,j,i,b,f,f,B.cg,k,B.bD,b1),new A.eL(a,j,i,b,e,e,B.hk,B.bD,B.bE,a6),new A.hA(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bF}if(p){B.a.k(l,new A.hO(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bJ}if(o){B.a.k(l,new A.io(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bM}if(n){B.a.k(l,new A.iO(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.au}c=A.e([new A.hw(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.iA(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.iz(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.iw(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.oq(d)))
c.push(new A.ix(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 toLight=normalize(uLightPosition-vWorldPos);\n  float ndotl=max(dot(n,toLight),0.);\n  float shadow=shadowFactor(ndotl);\n  float attenuation=lightAttenuation(vWorldPos);\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+vec3(ndotl*shadow*attenuation),0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.or(d,m),a5,b4,s,b9,b8))
B.a.J(c,l)
c.push(new A.f9(a,j,u.q,b,k))
return new A.hE(c)},
oq:function oq(a){this.a=a},
or:function or(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jp:function jp(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iA:function iA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
js:function js(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iz:function iz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jr:function jr(a,b,c,d,e,f){var _=this
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
jy:function jy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(){},
iv(a,b){return new A.fi(a,b)},
hK:function hK(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d8:function d8(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eS:function eS(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
D:function D(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
il:function il(a,b){this.a=a
this.b=b},
l0:function l0(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
ep:function ep(a,b){this.a=a
this.b=b},
cS:function cS(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
qe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eM(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
hg:function hg(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
az:function az(a,b){this.a=a
this.b=b},
n9:function n9(){this.a=null},
vk(a){var s=new A.iV(a,B.f,new A.n9())
s.ip(a)
return s},
bP(a,b){var s,r
if(a.b!==B.f)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
vo(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
vn(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
qV(a,b){var s
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
vl(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b6(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.f
r=s.kb(b)
if(r.a===0)return
if(r.v(0,B.az)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aA))a.a.depthFunc(A.vo(a,b.b))
if(r.v(0,B.aB))a.a.depthMask(b.c)
if(r.v(0,B.aF)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aG))a.a.cullFace(A.vn(a,b.x))
if(r.v(0,B.c8)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aC)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aD))a.a.blendFunc(A.qV(a,b.e),A.qV(a,b.f))
if(r.v(0,B.aE))a.a.blendEquation(A.vl(a,b.r))
if(r.v(0,B.c6))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.c7)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
vm(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
ei(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.vm(a,b))},
cO(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.f(b.a)
a.a.useProgram(s)
a.e=s},
A(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.c(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.h_(c.b))
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
bQ(a,b){if(a.b!==B.f)A.k(A.l(u.k))
a.a.bindVertexArray(A.f(b.a))},
bq(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.fW){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.fV){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.c(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.c(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
dv(a,b,c){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
ph(a,b,c,d){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
pi(a,b,c){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
pj(a,b,c,d){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
A.aN(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
vp(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
qY(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.c(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b4?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.vp(a,b.b))
return new A.cU(r)},
qW(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
qX(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
pk(a,b){var s,r,q,p,o,n,m,l,k
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
if(p)A.aN(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aN(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.qW(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.qW(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.qX(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.qX(a,p))
return new A.cU(new A.fW(r,l,k,q,!1))},
pl(a,b,c,d){var s,r,q,p,o,n,m,l,k
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
if(r)A.aN(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aN(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
pm(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
c2(a){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.c(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.cU(s)},
qZ(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.c(A.iv(b===A.pX(A.rB(A.tc(),r),q,t.S)?B.c1:B.c2,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a6(A.cw(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bF(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.c(A.iv(b===A.pX(A.rB(A.tc(),r),q,t.S)?B.c1:B.c2,s))}return o},
vq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.l(u.k))
q=v.G
s=A.qZ(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.qZ(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.c(B.fn)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a6(A.cw(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bF(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iv(B.c3,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iv(B.c4,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iv(B.c4,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.cU(n)},
cU:function cU(a){this.a=a},
fW:function fW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fV:function fV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iV:function iV(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
n7:function n7(a){this.a=a},
n8:function n8(a){this.a=a},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k4(a,b){var s=0,r=A.bc(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$k4=A.bd(function(a0,a1){if(a0===1)return A.b9(a1,r)
for(;;)switch(s){case 0:p=A.f(new v.G.AudioContext())
o=t.m
n=A.x(t.N,o)
m=A.f(p.createGain())
l=A.f(p.createGain())
k=A.f(p.createGain())
j=A.f(p.createGain())
i=A.f(p.createGain())
h=A.f(p.createGain())
g=A.f(p.createGain())
f=A.f(p.createGain())
e=A.f(p.createGain())
d=A.f(p.createConvolver())
c=new A.he(p,b,m,l,k,j,i,h,g,f,e,d,n,B.aS,A.x(o,t.iL))
c.ic(p,b)
p=A.o(a).i("X<1,2>")
s=3
return A.af(A.kS(A.i3(new A.X(a,p),p.i("bi<ah>(n.E)").a(new A.k5(c)),p.i("n.E"),t.mj),t.b),$async$k4)
case 3:n=n.h(0,"ir-stone")
p=n==null?c.iY():n
d.buffer=p
q=c
s=1
break
case 1:return A.ba(q,r)}})
return A.bb($async$k4,r)},
he:function he(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ay=o
_.dy=_.dx=$},
k5:function k5(a){this.a=a},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
kL:function kL(a){this.a=a},
iD:function iD(a,b,c,d,e,f,g,h,i,j){var _=this
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
kZ:function kZ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
l_:function l_(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=0
this.$ti=b},
hS:function hS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
i4:function i4(a){this.a=a},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lN:function lN(a,b){this.a=a
this.b=b},
fk(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bf(a)
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
cK:function cK(a){this.a=a
this.b=0},
mi:function mi(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
mr:function mr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v0(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.qF(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.hX(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.ji(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.bV(800,0,!1,r)
p=new Float32Array(8064)
o=J.hX(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.jg(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.bV(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).ga3()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.mk(a,new A.kZ(a,A.x(t.m,r)),b,c,A.a3(t.N),j,i,h,g,q,p,A.x(r,t.hX),o,n,m,B.eg,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.i4(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.ik(a,b,c)
return k},
mk:function mk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.ao=a
_.aw=b
_.aT=c
_.aU=d
_.dm=_.h1=1
_.dA=_.dz=_.hj=_.hi=_.hh=_.hg=_.hf=_.he=_.dw=_.dv=_.du=_.dt=_.ds=_.dr=_.dq=_.hd=_.hc=_.hb=_.dn=_.ha=_.h9=_.h8=_.h7=_.h6=_.h5=_.h4=_.h3=_.h2=_.aa=$
_.c2=null
_.f5=e
_.fz=_.fw=_.fv=_.fu=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.fj=_.fi=_.fh=_.fg=_.ff=_.fe=_.fd=_.fc=_.fb=_.fa=_.f9=_.f8=_.f7=_.f6=_.c3=$
_.c4=0
_.d4=_.d3=_.d2=_.d1=_.d0=_.d_=_.cZ=$
_.c8=_.c7=_.c6=_.c5=_.bq=_.aS=null
_.br=$
_.fC=_.fB=_.fA=!1
_.kj=1
_.d5=f
_.d6=g
_.kk=h
_.fD=i
_.c9=0
_.fE=j
_.kl=k
_.d7=0
_.d8=l
_.km=1
_.d9=!1
_.bs=0
_.da=m
_.bt=0
_.fF=n
_.fG=o
_.fJ=_.fI=_.fH=1
_.fK=0.55
_.dc=p
_.fL=q
_.dd=r
_.de=s
_.df=a0
_.fM=_.dj=_.di=_.dh=_.dg=0
_.fN=null
_.fO=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.fX=_.dl=_.dk=_.fW=_.fV=_.kp=_.ko=_.kn=_.fU=_.fT=_.fS=_.fR=_.fQ=_.fP=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.fY=a7
_.fZ=a8
_.h_=a9
_.h0=b0},
rL(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.a6(0,c).aP(f.a6(0,c)).ga3(),r=A.ol(g)
return A.rO(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
h7(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bf(a)
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
rO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.h7(a,A.h7(a,A.h7(a,A.h7(a,A.h7(a,A.h7(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
ol(a){return new A.br((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
wC(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.bu(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.aa(),i=A.aa(),h=A.aa()
switch(B.c.ak(o,6)){case 0:j.b=c
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
h.b=l}s=j.cO()
if(typeof s!=="number")return s.V()
s=B.d.aJ(s*255)
r=i.cO()
if(typeof r!=="number")return r.V()
r=B.d.aJ(r*255)
q=h.cO()
if(typeof q!=="number")return q.V()
return new A.br(s,r,B.d.aJ(q*255))},
fy:function fy(){},
jt:function jt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
ji:function ji(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jg:function jg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ml:function ml(){},
mm:function mm(a){this.a=a},
mn:function mn(a){this.a=a},
nb:function nb(){},
mB:function mB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iN(a,b,c){return new A.b(a,b,c)},
qT(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a){this.a=a},
u0(a,b,c){var s=new A.hB(a,c,null,b)
s.ie(a,null,null,b,c)
return s},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
ud(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.e4(new A.O(B.ep,t.gl.a(new A.kB(a)),t.ns),t.no)
return s==null?null:new A.e_(s)},
uc(a){if(a.a!==21)return null
if(a.e)return B.cL
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cM
return B.cK},
bw:function bw(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e_:function e_(a){this.a=a},
kB:function kB(a){this.a=a},
uJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.F(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.ii(s,new A.b(o,n,m),q,p,l,j)
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
ii:function ii(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xb(a){var s,r,q,p=A.x(t.N,t.z)
for(s=a.gR(),s=s.gu(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.c(B.cY)
p.l(0,q,r.b)}return p},
jF(a){var s,r,q,p,o,n=a.gN().bc(0)
B.a.X(n)
s=t.z
r=A.x(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.l(0,o,A.rw(a.h(0,o)))}return A.dY(r,t.N,s)},
rw(a){var s
if(t.f.b(a))return A.jF(A.xb(a))
if(t.j.b(a)){s=t.z
return A.ap(J.dN(a,A.y3(),s),s)}if(a==null||A.bG(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.df)
return a}throw A.c(A.ag("presentation snapshot contains unsupported value "+J.dM(a).n(0),null,null))},
m2:function m2(a){this.a=a},
qG(a,b,c){var s=A.pz(b),r=A.pz(a)
if(c!==2)A.k(A.aD(c,"version","unsupported save version"))
return new A.ec(c,s,r)},
pz(a){var s,r,q,p,o=A.o(a).i("aj<1>"),n=A.Q(new A.aj(a,o),o.i("n.E"))
B.a.X(n)
o=t.z
s=A.x(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.l(0,p,A.rv(a.h(0,p)))}return A.dY(s,t.N,o)},
rv(a){var s,r,q,p
if(t.f.b(a)){s=A.x(t.N,t.z)
for(r=a.gR(),r=r.gu(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.c(B.da)
s.l(0,p,q.b)}return A.pz(s)}if(t.j.b(a)){r=t.z
return A.ap(J.dN(a,A.y5(),r),r)}if(a==null||A.bG(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dg)
return a}throw A.c(A.ag("save contains unsupported value "+J.dM(a).n(0),null,null))},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
mx:function mx(){},
dp:function dp(a,b){this.a=a
this.b=b},
qh(a,b,c,d,e,f,g){return new A.kV(a,b,c,d,e,f,g,A.e([],t.mc),A.e([],t.ag))},
qi(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aM(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.c(B.d9)
r=e.h(0,"runSeed")
q=A.aM(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aM(p)||p<1||typeof o!="number")throw A.c(B.dj)
if(!isFinite(480))throw A.c(A.aD(480,"daySeconds","must be finite and > 0"))
n=new A.hI(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ag("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.uA(a3,A.aS(a,s,m))
k=A.tY(l,A.aS(b,s,m),n)
j=A.qj(d)
A.uo(A.aS(a0,s,m)).jK(j)
m=A.aS(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bG(f))A.k(B.d_)
return A.qh(d,q,j,n,l,k,new A.hz(i,h,g,f))},
wr(a){var s
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
d7:function d7(a,b){this.a=a
this.b=b},
hH:function hH(){},
kW:function kW(a,b){this.a=a
this.b=b},
kV:function kV(a,b,c,d,e,f,g,h,i){var _=this
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
kX:function kX(a){this.a=a},
kY:function kY(){},
tL(a){var s,r,q,p,o,n,m="modelScale",l=A.jJ(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.cs(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.c(B.d4)
s=A.cX(l,"houseId")
r=A.cX(l,"sourceRef")
q=J.dN(A.jH(l,"rooms"),new A.k7(k),t.fS)
q=A.Q(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.dN(A.jH(l,"portals"),new A.k8(k),t.gE)
p=A.Q(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.dN(A.jH(l,"stairs"),new A.k9(),t.d2)
o=A.Q(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.dN(A.jH(l,"exteriorCells"),new A.ka(),t.N)
n=A.Q(n,n.$ti.i("a1.E"))
n.$flags=1
return new A.k6(s,r,q,p,o)},
tM(a,b){var s=A.jJ(a,"room"),r=A.cX(s,"id"),q=A.rU(s.h(0,"origin"),"origin",b),p=A.rU(s.h(0,"size"),"size",b),o=J.dN(A.jH(s,"windows"),new A.kc(b),t.lJ)
o=A.Q(o,o.$ti.i("a1.E"))
o.$flags=1
return new A.dQ(r,q,p,o)},
jJ(a,b){return t.P.b(a)?a:A.h1(b+" is not an object")},
jH(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.h1(b+" is not a list")},
cX(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h1(b+" is not a string")},
h5(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.h1(b+" is not finite")},
xn(a,b){var s,r
if(t.j.b(a)){s=J.aY(a)
s=s.gq(a)!==3||s.a1(a,new A.oo())}else s=!0
if(s)return A.h1(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.L(a);r.m();)s.push(A.cs(r.gp()))
return s},
rU(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.xn(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
h1(a){return A.k(A.ag(a,null,null))},
k6:function k6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(){},
ka:function ka(){},
kb:function kb(a){this.a=a},
dQ:function dQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a){this.a=a},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dP:function dP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dR:function dR(a){this.b=a},
oo:function oo(){},
hl:function hl(a,b){this.a=a
this.b=b
this.d=null},
kk:function kk(a){this.a=a},
i6:function i6(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l5:function l5(){this.b=0},
mt:function mt(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
aE:function aE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kD:function kD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kE:function kE(){},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function l8(){},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b){this.a=a
this.b=b},
kF:function kF(){},
xw(a){var s,r,q,p=new A.l7(A.e([],t.oP),A.e([],t.t),A.x(t.N,t.S))
for(s=0;s<4;++s)A.wu(p,a,B.bo[s],10.5,10.5,8.03,0.42)
p.t(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.t(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.t(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.t(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.t(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.t(1,11,0,11,-0.5,-0.35,10.58)
p.t(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.t(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aE(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aE(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.b3(r,new A.aE(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b3(r,q,new A.aE(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aE(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aE(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b3(q,new A.aE(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b3(q,r,new A.aE(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.t(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.x2(p,10.5,10.5,8.03,10.88)
A.wi(p,10.5,10.5,10.88)
A.wq(p,10.5,10.5,8.03)
A.wx(p,a,10.5)
A.x7(p,10.5,10.5)
A.wg(p,10.5)
return p.jP()},
wu(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.jX)
for(s=b6.b,r=s.length,q=B.w!==b7,p=B.i!==b7,o=B.m===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.aR(k)
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
B.a.k(b4,new A.cR(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.az(i),b=J.L(h.a),h=new A.P(b,h.b,h.$ti.i("P<1>"));h.m();){a=b.gp()
if(!a.Q||a.an(i)!==b7)continue
B:{if(!p||o){a0=g+a.ad(i)
break B}if(!q||n){a0=e+a.ad(i)
break B}a0=null}B.a.k(b4,new A.cR(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.m?b8:b9
r=t.i
a1=A.at([0,s],r)
a2=A.at([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.Q(a1,a1.$ti.c)
B.a.X(a4)
a5=A.Q(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.a1(b4,new A.ob(b0,b1,b2,b3)))continue
switch(m){case 0:b5.t(0,b1,b3,0,b0,b2,r)
break
case 2:b5.t(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.t(0,0,b3,b1,r,b2,b0)
break
case 1:b5.t(0,s,b3,b1,b8,b2,b0)
break}}A.ww(b5,b4,b7,b8,b9,c1)
A.wv(b5,b4,b7,b8,b9,c1)},
wv(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ww(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.x5(a2,g,a4,a5,a6,a7,q)}},
x5(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
x2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.t(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.t(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.t(4,i,p,-0.38,j,q,-0.44)
a.t(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.t(5,h+0.5,p,o,h-0.5,r,q)}},
wi(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.t(0,g+0.35,k,n,g-0.35,l,q)
a.t(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.t(5,d+0.1,o,m,d-0.1,r,p)}}},
wq(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[-0.48,c+0.48],r=a0-0.16,q=b+0.1,p=0;p<2;++p){o=s[p]
a.t(6,q,a0,o+0.08,-0.1,r,o-0.08)}for(s=[0,b],r=c+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.11,l=n+0.11,k=n-0.07,j=n+0.07,i=0;i<2;++i){o=q[i]
a.t(6,j,a0,o+0.07,k,0,o-0.07)
for(h=[2,4,6],g=o-0.11,f=o+0.11,e=0;e<3;++e){d=h[e]
a.t(6,l,d+0.06,f,m,d,g)}}}},
wx(a,b,c){var s,r,q,p,o,n,m,l,k=b.e.h(0,"hall")
k.toString
s=b.f.h(0,"front-door")
r=k.d.a+s.ad("hall")
q=r+s.w
for(k=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.t(2,p+n,0.02-m,-0.42-l,k-n,-0.08-m,-0.7-l)}a.t(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.t(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.t(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.t(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)},
x7(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
wg(a,b){var s,r
a.t(0,6.7,1,-4.05,-2.5,0,-4.4)
a.t(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.t(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.t(7,b+3,0,-4.55,-3,-0.08,-5.2)},
cR:function cR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ob:function ob(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y4(a,b,c){var s,r,q=A.q0(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.e1(B.cQ,s)}r=A.ta(a,c,b)
if(r!=null)return new A.e1(B.cR,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.tb(a,c,b)!=null)return B.cV
return B.cU},
d5:function d5(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.c=b},
t0(a,b){var s,r=new A.cK(new Float32Array(5376)),q=new A.cK(new Float32Array(5376)),p=new A.cK(new Float32Array(5376)),o=new A.cK(new Float32Array(5376)),n=b.d,m=a.aR(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.ck(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
A.w8(r,b,m)
k+=m.b
q.ck(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.wb(p,a,b,m,B.bo[s])
for(l=a.az(b.a),k=J.L(l.a),l=new A.P(k,l.b,l.$ti.i("P<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.w7(o,b,m,j)}A.w6(p,b,m)
A.w9(p,a,b,m)
return new A.mu(B.u.b0(r.a,0,r.b),B.u.b0(q.a,0,q.b),B.u.b0(p.a,0,p.b),B.u.b0(o.a,0,o.b))},
w8(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.bu(e/0.22)
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
w9(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
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
case"hall":A.wa(b1,b2,b3,b4,a5,a4)
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
A.t(b1,new A.b(a7+m,a9,q),new A.b(p+m,o+B.c.ak(k,2)*0.18,n),a5)}A.t(b1,new A.b(a8+2.55,a9+0.15,b0+0.38),new A.b(a8+2.72,a9+1.55,b0+0.56),a4)
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
wa(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gaV(a)
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
wb(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.m?a3.a:a3.c,a=A.e([],t.a9)
for(s=a2.a,r=a1.az(s),q=J.L(r.a),r=new A.P(q,r.b,r.$ti.i("P<1>"));r.m();){p=q.gp()
if(!p.as&&p.an(s)===a4)a.push(new A.cQ(p.ad(s),p.ad(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cQ(q,q+n.e,p,p+n.f))}}s=t.i
r=A.at([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.J(0,A.e([m.a,m.b],p))}l=A.Q(r,r.$ti.c)
B.a.X(l)
s=A.at([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.J(0,A.e([m.c,m.d],p))}k=A.Q(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.a1(a,new A.nQ(f,e,d,c)))continue
A.xo(a0,a2,a3,a4,f,e,d,c)}A.wc(a0,a2,a3,a4,b,a)},
wc(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.a
if(c==="cellar")return
s=c==="living-room"||c==="hall"
r=c==="bedroom"
q=r||c==="landing"||c==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.nO(a,b,a0,a1,a2,a3,0.02,0.17,0.032,p)
o=!s
if(!o||c==="landing")A.nO(a,b,a0,a1,a2,a3,0.88,0.94,0.022,p)
if(!o||r){n=a0.b-0.58
A.nO(a,b,a0,a1,a2,a3,n,n+0.055,0.022,p)}c=a0.b
r=s?0.13:0.09
m=c-0.012
o=s?0.055:0.038
A.nO(a,b,a0,a1,a2,a3,c-r,m,o,p)
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
if(o>0)A.jM(a,b,a0,a1,j,o,f,d,0.04,p)
if(i<a2)A.jM(a,b,a0,a1,i,h,f,d,0.04,p)
if(e<c)A.jM(a,b,a0,a1,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.jM(a,b,a0,a1,j,h,0>o?0:o,g,0.065,p)}}},
nO(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.xe(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.jM(a,b,c,d,n,o,g,h,i,j)}},
xe(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.e([new A.eq(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.eq(j,m))
j=k.b
if(n<j)B.a.k(p,new A.eq(n,j))}h=p}return h},
w6(a,b,c){var s,r,q,p,o=b.a,n=o==="living-room"
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
jM(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.ah(j,l,g,h,d)
a.ah(s,r,q,p,d)
a.ah(l,s,p,g,d)
a.ah(r,j,h,q,d)
a.ah(l,j,r,s,d)
a.ah(g,p,q,h,d)},
xo(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
default:o=m}a.ck(s.U(0,o),r.U(0,o),q.U(0,o),p.U(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.xp(b,d)
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
xp(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
w7(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.an(d),b=a3.ad(d),a=b+a3.w
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
A.nP(a0,a1,a2,a3,q)
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
A.nP(a0,a1,a2,a3,q)
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
A.nP(a0,a1,a2,a3,q)
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
A.nP(a0,a1,a2,a3,q)
break}},
nP(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.an(o),m=d.ad(o)
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
mu:function mu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nQ:function nQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function eq(a,b){this.a=a
this.b=b},
qj(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.e([],b4),b6=t.aN,b7=A.e([],b6),b8=A.e([],t.jn),b9=t.N
b9=new A.l4(b5,b7,b8,A.x(b9,t.W),A.x(b9,t.gm),new A.l5())
s=t.E
r=t.s
q=t.cs
p=t.x
B.a.J(b5,A.e([new A.ay(n,B.U,new A.b(4.5,3.9,4),new A.b(0,0,0),A.e([new A.aL("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.aL("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.aT(m,l,new A.b(1,1.95,1),!1,!1,m),new A.aT(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.am,"wallpaper-stripes",i,h,B.z),new A.ay(g,B.U,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.e([new A.aL("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.aT("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.e([new A.b2(e,e,new A.b(0.2,2.175,0.35)),new A.b2(d,d,new A.b(2.2,2.55,3)),new A.b2(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.z),new A.ay(a,B.U,new A.b(4.5,3.75,3),new A.b(0,0,4),A.e([new A.aL("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.aL("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.aT(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.aT("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.aT("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.b2(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.dY),new A.ay("cellar",B.U,new A.b(4,3,4),new A.b(1,-3,2),B.bm,A.e(["hall-cellar"],r),B.ek,B.am,"wallpaper-damp","floor-concrete","ceiling-pipes",B.z),new A.ay("bedroom",B.V,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.e([new A.aL("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.aL("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.aT(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.aT("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.e([new A.b2(a3,a3,new A.b(2.2,1.125,2.5)),new A.b2(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.z),new A.ay(a5,B.V,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bm,A.e(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.e([new A.aT("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.am,b,i,h,B.z),new A.ay(a7,B.V,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.e([new A.aL("bathroom-east",B.w,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a6],r),A.e([new A.aT("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.e([new A.b2(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.z),new A.ay(a9,B.V,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.e([new A.aL("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.aT("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.e([new A.b2(b0,b0,new A.b(0.5,1.8,0.3)),new A.b2(b1,b1,new A.b(3.7,2.1,2.7)),new A.b2(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.z)],b4))
B.a.J(b7,A.e([A.cH(g,"outside","kit-front-door-recessed",!0,B.i,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cH(g,n,b3,!1,B.G,B.w,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cH(g,a,b3,!1,B.G,B.w,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cH(a,n,b3,!1,B.i,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cH(g,"cellar","kit-cellar-door-grille",!1,B.m,B.w,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cH(g,a5,o,!1,B.w,B.w,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cH(a5,"bedroom",b3,!1,B.G,B.w,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cH(a5,a7,b3,!1,B.m,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cH(a5,a9,b3,!1,B.m,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cJ("hall-stairs",f,B.e9,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
b9.iu()
b9.iX()
b4=b5.length
if(b4!==8)A.k(A.l("expected eight rooms, got "+b4))
b4=b9.glm()
if(b4!==9)A.k(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gbe(b8)
b4=B.a.gO(B.a.gbe(b8).c)
if(b4!==6.3)A.k(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.l("expected nine physical portals"))
b9.jB()
b9.jA()
return b9},
l4:function l4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
lf:function lf(){},
lg:function lg(){},
le:function le(){},
lh:function lh(a){this.a=a},
li:function li(){},
q0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga3()
j=a.b
if(Math.acos(B.d.a_(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
ta(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.az(c),r=J.L(s.a),s=new A.P(r,s.b,s.$ti.i("P<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.kW(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.rD(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
tb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.xq(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.rD(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
rD(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.a_(a.ga3().bp(c.b),-1,1))<=e},
xq(a,b,c){var s=a.aR(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
kC:function kC(){this.a=null
this.b=0},
mC:function mC(){},
mD:function mD(){},
us(a){var s=A.h6(a,"inventory asset"),r=A.cv(s,"id"),q=A.cv(s,"kind")
A.cv(s,"source")
A.cv(s,"proxy")
A.cv(s,"pivot")
s=A.h6(s.h(0,"bounds"),"inventory bounds")
return new A.bU(r,q,new A.ln(A.jL(s.h(0,"min"),"bounds.min"),A.jL(s.h(0,"max"),"bounds.max")))},
ut(a){var s,r,q,p,o,n="stateKey",m=A.h6(a,"inventory placement"),l=A.h6(m.h(0,"visibility"),"placement visibility"),k=A.h6(m.h(0,"interaction"),"placement interaction"),j=m.h(0,"clearance"),i=A.cv(m,"id"),h=A.cv(m,"roomId"),g=A.cv(m,"assetId")
A.cv(m,"role")
s=typeof m.h(0,"socket")=="string"?A.F(m.h(0,"socket")):null
m=A.h6(m.h(0,"transform"),"inventory transform")
r=A.jL(m.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.db)
q=A.jL(m.h(0,"position"),"transform.position")
p=A.jL(m.h(0,"rotation"),"transform.rotation")
A.cv(l,"layer")
if(typeof l.h(0,n)=="string")A.F(l.h(0,n))
J.a6(k.h(0,"pickable"),!0)
o=t.P.b(j)?A.wX(j,"radius"):0
return new A.cc(i,h,g,s,new A.lo(q,p,r),o)},
h6(a,b){return t.P.b(a)?a:A.ct(b+" is not an object")},
cv(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.ct(b+" is not a string")},
wX(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.ct(b+" is not finite")},
jL(a,b){var s
if(t.j.b(a)){s=J.aY(a)
s=s.gq(a)!==3||s.a1(a,new A.on())}else s=!0
if(s)return A.ct(b+" is not a finite vec3")
s=J.aY(a)
return new A.b(A.cs(s.h(a,0)),A.cs(s.h(a,1)),A.cs(s.h(a,2)))},
ct(a){return A.k(A.ag(a,null,null))},
l9:function l9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
bU:function bU(a,b,c){this.a=a
this.b=b
this.f=c},
cc:function cc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.y=f},
lo:function lo(a,b,c){this.a=a
this.b=b
this.c=c},
ln:function ln(a,b){this.a=a
this.b=b},
on:function on(){},
bX:function bX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hP:function hP(a){this.a=a},
lc:function lc(a){this.a=a},
cH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.cG(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
eP:function eP(a,b){this.a=a
this.b=b},
cA:function cA(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aT:function aT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(){},
cJ:function cJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ay:function ay(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qk(a,b,c,d,e,f){var s=t.N
return new A.ld(e,f,c,a,A.dY(A.aS(d,s,s),s,s),A.ap(b,s))},
ql(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.x(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.l(0,p.a,new A.f8(p.ax,p.ay))}s=A.x(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.x(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.l(0,j.a,new A.f0(j.d,j.r))}return A.qk(a.r.b,B.l,i,B.bu,h,s)},
uo(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.eD
r=a3.h(0,"mantleHistory")
if(r==null)r=B.ej
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aM(a2)||!q.b(s)||!t.j.b(r))throw A.c(B.d7)
p=t.N
o=A.x(p,t.ku)
for(n=a.gR(),n=n.gu(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b2)
l=A.aS(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bG(j)||!A.bG(i))A.k(B.b2)
o.l(0,k,new A.f8(j,i))}h=A.x(p,t.y)
for(n=a0.gR(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bG(l.b))throw A.c(B.d5)
h.l(0,k,A.aW(l.b))}g=A.x(p,t.mK)
for(n=a1.gR(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b1)
l=A.aS(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bG(f)||!A.bG(e))A.k(B.b1)
g.l(0,k,new A.f0(f,e))}d=A.x(p,p)
for(q=s.gR(),q=q.gu(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.c(B.dp)
d.l(0,n,A.F(p.b))}c=A.e([],t.s)
for(q=J.L(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.c(B.cW)
B.a.k(c,b)}return A.qk(a2,c,g,d,o,h)},
pO(a,b){return a.a.a===b.a&&a.ag(0,b.gbZ(b))},
ld:function ld(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f8:function f8(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
ua(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.lI(e,A.J(e).c)
q=new A.ek()
q.cu((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eN(a,q,2,r,1+s,A.at(["time"],t.N))
break
case 3:A.eN(a,q,3,r,1+s,A.at(["place"],t.N))
break
case 4:A.eN(a,q,4,r,2+s,p)
A.u6(a,q,4)
break
case 5:A.eN(a,q,5,r,s,p)
A.u4(a,q,5)
break
case 6:A.eN(a,q,6,r,s,p)
A.u5(a,q)
A.u9(a,q,6)
break
case 7:A.u7(a,q,7)
break
default:if(s>0)A.eN(a,q,b,r,s,p)}},
u3(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.u8(a,b,c))return!1
return!0},
eN(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(A.u3(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cs(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.qf(a,b,o[p],f)}},
qf(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aS(B.a.gO(o).a,n,n)
if(d==null)s=A.e(B.t.slice(0),t.s)
else{n=t.nn
s=A.Q(new A.O(B.t,t.gS.a(new A.kx(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.al(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.e1(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.al(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.cW(c.a,m,B.a.gO(o).b)},
u6(a,b,c){var s=A.qg(a,b,c)
if(!a.bm(s))return
a.e7(c,t.G.a(s),0,B.ak,null)},
qg(a,b,c){var s,r,q,p,o,n=t.N,m=A.x(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.t[s]
q=n.h(0,r)
if(q==null)q=B.l
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.al(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
u4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cs(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aS(B.a.gO(i).a,s,s)
r=p.c
n=A.aS(B.a.gO(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.t[m]
k=o.h(0,l)
j=s.e1(l,k==null?"":k)
k=j.length
if(k!==0){k=b.al(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.cW(q.a,o,B.a.gO(i).b)
a.cW(p.a,n,B.a.gO(r).b)},
u5(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.al(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.aj(0,q[r].a)},
u9(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.al(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.qf(a,b,q[s],null)},
u7(a,b,c){var s=c+1,r=A.qg(a,b,s)
if(!a.bm(r))return
a.e7(s,t.G.a(r),0,B.ak,null)},
u8(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gO(b.c).c===B.X}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gO(b.c).c===B.X}if(c===21)return b.e
return!1},
kx:function kx(a){this.a=a},
vj(a){var s,r,q,p,o=t.N,n=A.x(o,t.h)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p=A.aF(q==null?B.l:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.n6(n)},
lD(a,b,c){var s,r,q,p=t.z
p=A.x(p,p)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.i2(A.dY(p,q,q),b,c)},
qu(a){var s=t.N
return A.lD(t.P.a(a.h(0,"fields")).b9(0,new A.lE(),s,s),A.cs(a.h(0,"shakiness")),A.uf(B.eb,A.F(a.h(0,"hand")),t.bU))},
ue(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.e([],t.b1)
for(s=J.L(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.qu(r.a(s.gp())))
s=A.bF(a.h(0,"corroborator"))
q=A.aW(a.h(0,"locked"))
p=A.rr(a.h(0,"lastReadDay"))
return new A.bh(n,m,l,s,q,p,o==null?null:A.qu(r.a(o)))},
cB:function cB(a,b){this.a=a
this.b=b},
n6:function n6(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(){},
lF:function lF(a){this.a=a},
bh:function bh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qr(a){return new A.lq(a,A.x(t.S,t.L),A.a3(t.N),A.e([],t.t))},
uA(a,b){var s,r,q,p,o=A.qr(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.tE(s.a(b.h(0,"tags")),t.N))
for(s=J.L(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.ue(r.a(s.gp()))
q.l(0,p.a,p)}return o},
lq:function lq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
lx:function lx(a,b){this.a=a
this.b=b},
kd:function kd(){},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ke:function ke(){},
lC:function lC(){},
lB:function lB(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
m_:function m_(){},
lZ:function lZ(a,b){this.b=a
this.c=b},
m0:function m0(){},
pb(a){if(!isFinite(0))A.k(A.aD(0,"interpolation",null))
return new A.mq(a)},
fd:function fd(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
mq:function mq(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
mp(a,b,c,d,e){var s="d9d0a6d72e06-e81ac167594e-dirty",r=A.nV("RENDERER_SHA"),q=A.nV("GAME_SHA"),p=A.nV("DART_SDK_VERSION"),o=A.nV("LOCKFILE_SHA256"),n=A.lI(b,A.J(b).c)
n=A.Q(n,A.o(n).c)
B.a.X(n)
n=new A.mo(a,e,s,A.ap(n,t.N),r,q,p,o,c,d)
n.il(a,s,b,c,d,q,o,e,r,p)
return n},
nV(a){var s=B.ex.h(0,a)
return s.length===0?null:s},
mo:function mo(a,b,c,d,e,f,g,h,i,j){var _=this
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
qd(a,b,c,d,e,f,g){var s=A.Q(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ag("saved day-loop resources must not be negative",null,null))
return new A.kp(c,g,b,a,e,d===!0,s)},
tY(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.c(B.d2)
s=A.e([],t.b2)
for(r=J.L(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.c(B.d8)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aM(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.c(B.d1)
f=A.e4(new A.O(B.bi,q.a(new A.kq(h)),p),o)
e=A.e4(new A.O(B.bn,n.a(new A.kr(g)),m),l)
if(f==null||e==null)throw A.c(B.dl)
B.a.k(s,new A.ed(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aM(d)||!A.aM(c)||!A.aM(b)||!A.bG(a))throw A.c(B.dc)
return A.qd(c,d,a1,a,b,s,a3)},
b3:function b3(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
hT:function hT(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
na:function na(a,b){this.b=a
this.c=b},
dw:function dw(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
lj:function lj(a){this.c=a},
ll:function ll(a,b){this.a=a
this.b=b},
lm:function lm(){},
qF(){var s=A.pE(B.l),r=A.pE(B.l),q=new A.mw(B.x,s,r)
if(!isFinite(0))A.k(B.cX)
if(!B.a.ag(r,B.a.gbZ(s)))A.k(B.dd)
if(q.a===B.x&&q.b!==0&&!q.e)A.k(B.cZ)
return q},
pE(a){var s,r,q,p=A.e([],t.s),o=A.a3(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.c(B.dk)
B.a.k(p,q)}return p},
by:function by(a,b){this.a=a
this.b=b},
mv:function mv(){},
bZ:function bZ(){},
mw:function mw(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hI:function hI(a,b){this.a=a
this.b=6
this.c=b},
td(a){var s=B.d.a_(a,0,1)
if(s<=0.5)return A.rJ(4491468,16777215,s*2)
return A.rJ(16777215,16759637,(s-0.5)*2)},
te(a){var s=B.d.a_(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga3()},
rJ(a,b,c){var s,r=new A.of(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.hX()
s=r.$1(8)
if(typeof s!=="number")return s.hX()
r=r.$1(0)
if(typeof r!=="number")return A.jP(r)
return(q<<16|s<<8|r)>>>0},
of:function of(a,b,c){this.a=a
this.b=b
this.c=c},
eg(a){var s,r,q=A.x(t.N,t.z)
for(s=a.gR(),s=s.gu(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
mH:function mH(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mI:function mI(){},
mJ:function mJ(){},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a,b){this.a=a
this.b=b},
mM:function mM(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
mN:function mN(){},
mO:function mO(){},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
kg:function kg(a){this.a=a
this.b=null},
u1(a){var s=A.e([],t.kG)
s=new A.kt(A.W(a,"div","door",null),s)
s.ig(a)
return s},
kt:function kt(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
ku:function ku(a,b){this.a=a
this.b=b},
kv:function kv(a){this.a=a},
kw:function kw(a,b){this.a=a
this.b=b},
ub(a){var s=new A.kz(a,A.f(a.createElement("div")))
s.bG(a)
s.ih(a)
return s},
kz:function kz(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
kA:function kA(a){this.a=a},
un(a){var s=new A.l2(a,A.f(a.createElement("div")))
s.bG(a)
s.ii(a)
return s},
l2:function l2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
l3:function l3(a){this.a=a},
lr:function lr(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
ls:function ls(a){this.a=a},
lt:function lt(a){this.a=a},
lu:function lu(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(){},
lw:function lw(){},
W(a,b,c,d){var s=A.f(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
rz(a){var s,r,q,p=A.f(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.kG)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
f7:function f7(){},
m8:function m8(a){this.a=a
this.b=null},
v2(a){var s=new A.mE(a,A.f(a.createElement("div")))
s.bG(a)
s.io(a)
return s},
mE:function mE(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
mF:function mF(a,b,c){this.a=a
this.b=b
this.c=c},
tK(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.od)
for(s=a.d,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gR(),n=n.gu(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.bJ(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.k_())
return new A.jZ(A.ap(i,t.e),A.a3(t.N))},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jZ:function jZ(a,b){this.a=a
this.b=b},
k0:function k0(){},
k_:function k_(){},
vi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.hf
s=t.g
r=A.x(s,t.kz)
q=A.o(e).i("aj<1>")
p=A.Q(new A.aj(e,q),q.i("n.E"))
B.a.X(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=e.h(0,k).gR(),j=j.gu(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.b5(new A.bp(B.h1,k+" has an out-of-range authored day "+h+"."))
g=A.vh(k,h,i.b,m)
if(g instanceof A.b5)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.l(0,new A.b4(k,h,f.a,f.b),o.a(g).a)}}return new A.iT(new A.iS(r,A.a3(t.N),A.a3(s),A.e([],t.bl),B.C))},
vh(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.x(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bh[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gR(),k=k.gu(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.W(h,m))continue
g=A.m4(B.b.bF(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b5(new A.bp(B.h2,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.bl
B.a.k(l,new A.bz(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.n0())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b5(new A.bp(B.cc,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.b5(new A.bp(B.cc,a+" day "+s+" has no authored tiers."))
return new A.jh(c)},
iS:function iS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
n4:function n4(a){this.a=a},
n3:function n3(a){this.a=a},
n1:function n1(a){this.a=a},
n2:function n2(){},
n0:function n0(){},
iT:function iT(a){this.a=a},
jh:function jh(a){this.a=a},
xH(a){var s,r,q,p=A.a3(t.N)
for(s=new A.X(a,A.o(a).i("X<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gau(),q=q.gu(q);q.m();)if(q.gp().gN().a1(0,new A.ov())){p.k(0,r.a)
break}}s=A.Q(p,p.$ti.c)
B.a.X(s)
return s},
xG(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.l
s=t.N
r=A.aF(b,!0,s)
B.a.X(r)
q=new A.ek()
q.cu((a^913741)>>>0)
p=q.al(4)
if(!(p>=0&&p<4))return A.d(B.bg,p)
o=B.bg[p]
n=r.length
n=o>n?n:o
if(n===0)return B.l
m=A.aF(r,!0,s)
B.a.cs(m,q)
s=A.mK(m,0,A.dJ(n,"count",t.S),A.J(m).c).bc(0)
B.a.X(s)
return s},
ov:function ov(){},
qU(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aM(r)||!A.aM(q)||!A.aM(p)||r<1||q<0||q>23||p<0)return null
return new A.b4(s,r,q,p)},
vg(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a3(t.N)
for(s=t.j,q=J.L(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a3(t.g)
for(s=J.L(s.a(a.h(0,j)));s.m();){n=A.qU(s.gp())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.tJ(m)
if(!s&&l==null)return i
return new A.iU(r,o,l)},
tJ(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.qU(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aM(p))if(!(p<0))if(A.bG(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.e4(new A.O(B.bh,t.nw.a(new A.jW(r)),t.na),t.kM)
k=A.e4(new A.O(B.et,t.bQ.a(new A.jX(q)),t.cB),t.nq)
m=o==null
j=m?h:A.e4(new A.O(B.e3,t.hg.a(new A.jY(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.ha(s,l,k,p,j,n)},
b_:function b_(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c1:function c1(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function n_(){},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
n5:function n5(){},
b5:function b5(a){this.a=a},
iQ:function iQ(a){this.a=a},
iP:function iP(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
oC(){var s=0,r=A.bc(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$oC=A.bd(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.i(A.f(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.H.b=c3
$.pD=A.i(A.f(c2.document).getElementById("fps"))
$.bD.b=$.tx().bE(A.mV().gbC().h(0,"renderer"))
A.wD()
a6=$.H.j()
a7=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
a6.width=a7
a7=$.H.j()
a6=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a7.height=a6
n=A.i(c3.getContext("webgl2"))
if(n==null){$.bD.b=new A.dT(B.a_,$.bD.j().b,!0,"webgl2 unavailable")
h=B.ad.k7($.bD.j())
h.aG()
$.cr.b=h
A.rN()
A.cW("no-webgl2")
c2=A.i(A.f(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bD.j().a===B.a0){a6=t.dg
a7=t.N
a8=t.hL
a9=t.p9
b0=t.fP
b1=new A.fI(n,A.a($.H.j().width),A.a($.H.j().height),A.e([],a6),A.x(a7,t.l0),A.e([],t.jj),A.x(a7,a8),A.x(a7,a9),A.x(a7,a8),A.x(a7,a9),A.e([],a6),A.e([],t.jU),B.ed,A.x(a7,t.lu),A.x(a7,b0),A.x(a7,b0),B.dq,B.f2)}else b1=new A.ej(n,A.a($.H.j().width),A.a($.H.j().height),A.mV().gbC().h(0,"render")==="legacy",$.bD.j().c,$.bD.j().d)
m=b1
$.bH=m instanceof A.fI?m:null
$.jG=m instanceof A.ej?m:null
a6=B.ad.cX($.bD.j(),m)
a6.aG()
$.cr.b=a6}catch(c5){l=A.ab(c5)
$.bD.b=new A.dT(B.a_,!0,!0,"pixeldart initialization failed")
$.jG=new A.ej(n,A.a($.H.j().width),A.a($.H.j().height),A.mV().gbC().h(0,"render")==="legacy",!0,$.bD.j().d)
a6=B.ad.cX($.bD.j(),$.jG)
a6.aG()
$.cr.b=a6
$.H.j().setAttribute("data-renderer-error",A.p(l))}A.rN()
p=4
A.cW("initializing")
$.bE.b=new A.ki(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.pL=A.aW(A.f(A.f(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bE.j()
a6.f=$.pL?0.5:1
a6=A.f(c2.window)
a7=t.N
a8=A.f(a6.document)
a9=new A.hS(a8,A.a3(a7),A.a3(a7))
a6.addEventListener("keydown",A.am(a9.gj6()))
a6.addEventListener("keyup",A.am(a9.gj8()))
a6.addEventListener("mousemove",A.am(a9.gjc()))
a8.addEventListener("pointerlockchange",A.am(a9.gja()))
$.bt.b=a9
$.rm.b=new A.hQ(A.e([],t.oX),t.lv)
a9=$.H.j()
a6=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
a9.width=a6
a6=$.H.j()
a8=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a6.height=a8
A.cW("renderer")
if($.bD.j().a===B.a_){a6=$.jG
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.j()}$.ey=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.c(h)}}A.cW("text")
a6=$.jU()
s=7
return A.af(a6.bA(),$async$oC)
case 7:k=a6.ll()
j=A.vi(k)
if(!(j instanceof A.iT)){i=t.cq.a(j).a
h=i.b
throw A.c("Failed to build visitors: "+h)}$.aB.b=j.a
$.jA.b=A.tK(k)
h=A.x(a7,t.h)
for(a8=t.j,b3=0;b3<5;++b3){g=B.t[b3]
a9=A.F(g)
b0=a6.c
b0===$&&A.j()
b4=b0.h(0,a9)
a9=a8.b(b4)?A.aF(b4,!0,a7):B.l
J.bT(h,g,a9)}f=A.vj(h)
$.px.b=new A.kh(B.cD)
e=$.px.j().kY(new A.oD(f))
if(e.a==null){h=B.aS.al(2147483647)
if(!isFinite(480))A.k(A.aD(480,"daySeconds","must be finite and > 0"))
b5=new A.hI(1,480)
b5.b=10
b6=A.qr(f)
h=A.qh(42,1+h,A.qj(42),b5,b6,A.qd(6,16,b6,null,6,B.ee,b5),new A.hz(0,0,0,!1))}else{h=e.a
h.toString
h=A.qi(h,f)}$.a_.b=h
$.cr.j().aC(A.pb($.a_.j().gdK()))
if(e.b!=null){h=e.b
h.toString
A.ez(h)}h=$.aB.j()
a6=A.xG($.a_.j().b,A.xH(k.b))
h.si6(A.lI(a6,A.J(a6).c))
A.cW("house")
$.a2.b=$.a_.j().c
a6=$.bH
if(a6!=null)a6.jL($.a2.j())
$.dG.b=$.a_.j().d
h=new A.b(5.5,1.65,3.5)
$.pT=$.pK=$.pR=h
d=h.a6(0,new A.b(0,1.3499999999999999,0))
$.fZ.b=new A.hl(d,J.q3(d,new A.b(0,1.2000000000000002,0)))
$.et.b=new A.kC()
$.b7.b=A.qF()
$.aX="hall"
h=e.a
c=A.uJ(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.kB($.a2.j())){h=c.b
$.pT=$.pK=$.pR=h
$.c4=c.c
$.dH=c.d
$.aX=c.a
b=h.a6(0,new A.b(0,1.3499999999999999,0))
h=$.fZ.j()
h.sjM(b)
h.b=J.q3(b,new A.b(0,1.2000000000000002,0))
h=$.fZ.j()
a6=$.a2.j()
a9=c.e
b0=c.f
h.la($.aX,$.eF(),a6,b0,a9)
A.ez("restored position")}h=$.a_.j().e
a6=$.dG.j()
$.a_.j()
$.jC.b=new A.ll(h,a6)
a6=A.f(c2.document)
h=$.a_.j().e
a9=$.dG.j()
b0=$.jC.j()
b7=A.f(a6.createElement("div"))
b0=new A.lr(h,a9,b0,a6,b7)
b0.bG(a6)
A.f(b7.appendChild(A.W(a6,"div","journal-title","The Journal")))
b8=A.W(a6,"div","journal-pages",null)
a9=A.W(a6,"div","page page-left",null)
b0.y!==$&&A.y()
b0.y=a9
h=A.W(a6,"div","page page-right",null)
b0.z!==$&&A.y()
b0.z=h
A.f(b8.appendChild(a9))
A.f(b8.appendChild(h))
A.f(b7.appendChild(b8))
A.f(b7.appendChild(b0.iw()))
b9=A.W(a6,"div","tape-roll",null)
A.f(b9.style).setProperty("width","8rem")
h=A.W(a6,"div","tape-fill",null)
b0.as!==$&&A.y()
b0.as=h
A.f(b9.appendChild(h))
A.f(b7.appendChild(b9))
c0=A.W(a6,"div","consult",null)
A.f(c0.appendChild(A.W(a6,"div","consult-label","Cite an entry")))
h=A.W(a6,"div","entry-picker",null)
b0.at!==$&&A.y()
b0.at=h
a9=A.W(a6,"div","consult-result",null)
b0.ax!==$&&A.y()
b0.ax=a9
A.f(c0.appendChild(h))
A.f(c0.appendChild(a9))
A.f(b7.appendChild(c0))
c1=A.i(a6.documentElement)
if(t.m.b(c1)){A.f(c1.style).setProperty("--shake-max-deg","3deg")
A.f(c1.style).setProperty("--shake-max-px","2px")}$.eu.b=b0
$.eu.j().scg(new A.oE())
h=A.f(c2.document)
a6=A.W(h,"div","prompt",null)
A.f(a6.style).setProperty("transition-duration","0.3s")
A.f(A.i(h.body).appendChild(a6))
$.rn.b=new A.m8(a6)
a6=A.f(c2.document)
h=A.W(a6,"div","broadcast",null)
A.f(A.i(a6.body).appendChild(h))
$.rl.b=new A.kg(h)
h=A.f(c2.document)
a6=A.W(h,"div","ambient-notice",null)
A.f(A.i(h.body).appendChild(a6))
$.pv.b=new A.k1(a6)
a6=A.u1(A.f(c2.document))
a6.skP(A.xY())
a6.skR(A.y_())
a6.skQ(A.xZ())
$.aA.b=a6
a6=e.a
a=A.vg(a6==null?null:a6.c.h(0,"visitors"))
if(a!=null&&$.aB.j().l9(a))A.x1()
h=$.jA.j()
a6=e.a
h.lb(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(a8.b(a0))for(h=J.L(a0);h.m();){a1=h.gp()
if(A.aM(a1))$.om.k(0,a1)}h=A.v2(A.f(c2.document))
h.skT(new A.oF())
h.scg(new A.oI())
$.jD.b=h
h=A.un(A.f(c2.document))
h.scg(new A.oJ())
$.jB.b=h
h=A.ub(A.f(c2.document))
h.scg(new A.oK())
h.skS(new A.oL())
$.pw.b=h
h=e.a
a2=A.ud(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.rM(a2)
a3=$.ey
if(a3!=null){A.cW("world")
h=$.a2.j()
a6=a3
a7=new A.mt(h,a6,A.x(a7,t.J))
a7.im(h,a6)
$.nU=a7}h=B.b.v(A.F(A.f(A.f(c2.window).location).search),"shaders=live")
$.rY=h
if(h){h=$.ey
if(h!=null)h.ba()}A.rP()
A.f(c2.window).addEventListener("resize",A.am(new A.oM()))
A.f(c2.window).addEventListener("keydown",A.am(new A.oN()))
A.f(c2.window).addEventListener("keyup",A.am(new A.oO()))
A.f(c2.window).addEventListener("keydown",A.am(new A.oP()))
A.f(c2.window).addEventListener("click",A.am(new A.oG()))
$.H.j().addEventListener("click",A.am(new A.oH()))
A.ew()
A.cW("raf")
A.a(A.f(c2.window).requestAnimationFrame(A.am(A.t6())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ab(c4)
a5=A.c6(c4)
A.oh(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$oC,r)},
wD(){var s=v.G
A.f(s.window).addEventListener("error",A.am(new A.od()))
A.f(s.window).addEventListener("unhandledrejection",A.am(new A.oe()))},
cW(a){if($.rt===a)return
$.rt=a
$.H.j().setAttribute("data-boot-phase",a)},
rN(){var s,r,q=$.cr.j().gb6(),p=$.H.j(),o=A.mV().gbC().h(0,"renderer")
if(o==null)o="legacy"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.x))
p.setAttribute("data-renderer-diagnostics",B.q.b7(q.C(),null))
p=$.bH
s=p==null?null:p.x
if(s!=null)$.H.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jG
r=p==null?null:p.y
if(r!=null)$.H.j().setAttribute("data-renderer-frame-submits",A.p(r))},
pP(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.b7.j().a!==B.x){A.ez("save unavailable during rupture")
return}try{r=$.px.j()
q=$.a_.j()
p=t.N
o=t.z
s=A.x(p,o)
n=$.aX
m=$.eF()
l=$.c4
k=$.dH
j=$.fZ.j().d
j=j==null?null:j.a.a
i=$.fZ.j().d
J.bT(s,"player",new A.ii(n,m,l,k,j,i==null?null:i.b).C())
n=$.aB.j()
m=A.pe(n.b,p)
l=A.pe(n.c,t.g)
n=n.e
J.bT(s,"visitors",new A.iU(m,l,n==null?null:new A.ha(n.a,n.b,n.d,n.f,n.e,n.r)).C())
n=$.jA.j().b
n=A.Q(n,A.o(n).c)
B.a.X(n)
J.bT(s,"ambient",n)
n=A.Q($.om,A.o($.om).c)
B.a.X(n)
J.bT(s,"unverifiables",n)
n=$.pC
if(n!=null)J.bT(s,"ending",A.T(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.ql(q.c).C()
k=q.d
r.ln(A.qG(s,A.T(["houseSeed",n,"runSeed",m,"house",l,"time",A.T(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C()],p,o),2))
A.ez(a)}catch(h){A.ez("save failed")}},
ez(a){var s=A.i(A.f(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.ul(B.cJ,new A.ok(s),t.H)},
oh(a,b){var s,r,q,p
A.cW("error")
s=A.p(a)
r=A.y9(s,"\n"," ")
s=$.pD
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.f(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.p(a):A.p(a)+"\n"+b.n(0)
$.H.j().setAttribute("data-boot-error",p)
A.f(s.console).error(p)},
rp(){if($.py)return
$.py=!0
var s=$.h0
if(s!=null)s.hE()
B.a.k($.cV,"arm")},
ew(){var s=0,r=A.bc(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$ew=A.bd(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.af(A.h4(),$async$ew)
case 2:o=null
q=4
s=7
return A.af(A.aO(A.f(A.f(v.G.window).fetch("res/manifest.json")),t.m),$async$ew)
case 7:n=b
i=A
s=8
return A.af(A.aO(A.f(n.json()),t.X),$async$ew)
case 8:o=i.f(b)
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
if(k!=null&&typeof k==="string"){l=A.i(A.f(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.F(k)}s=9
return A.af(A.kS(A.e([A.og(o),A.oc(o)],t.iw),t.H),$async$ew)
case 9:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$ew,r)},
h4(){var s=0,r=A.bc(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$h4=A.bd(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.ea[f]
p=7
s=10
return A.af(A.aO(A.f(A.f(i.window).fetch(n)),h),$async$h4)
case 10:m=a0
s=11
return A.af(A.aO(A.f(m.text()),g),$async$h4)
case 11:l=a0
k=A.tL(B.q.c1(l,null))
e=$.a2.b
if(e===$.a2)A.k(A.ak(""))
k.dU(e)
e=$.H.b
if(e===$.H)A.k(A.ak(""))
e.setAttribute("data-house-manifest","validated")
e=$.H.b
if(e===$.H)A.k(A.ak(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.af(A.jI(),$async$h4)
case 12:s=1
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
case 5:$.H.j().setAttribute("data-house-manifest","unavailable")
A.f(i.console).warn("authored house manifest unavailable: "+A.p(c))
case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$h4,r)},
jI(){var s=0,r=A.bc(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$jI=A.bd(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.e5[c]
p=7
s=10
return A.af(A.aO(A.f(A.f(g.window).fetch(n)),f),$async$jI)
case 10:m=b1
s=11
return A.af(A.aO(A.f(m.text()),e),$async$jI)
case 11:l=b1
b=B.q.c1(l,null)
b=h.b(b)?b:A.ct("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.ct("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aM(a)?a:A.ct("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.ct("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aF(a,!0,d):A.ct("assets is not a list")
a4=A.J(a3)
a5=a4.i("S<1,bU>")
a3=A.Q(new A.S(a3,a4.i("bU(1)").a(A.xT()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aF(a,!0,d):A.ct("placements is not a list")
a5=A.J(a4)
a6=a5.i("S<1,cc>")
a4=A.Q(new A.S(a4,a5.i("cc(1)").a(A.xU()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.l9(a1,a2,a0,a3,a4)
a1=$.a2.b
if(a1===$.a2)A.k(A.ak(""))
k.dU(a1)
a1=$.bH
if(a1!=null)a1.hR(k)
a1=$.H.b
if(a1===$.H)A.k(A.ak(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.H.b
if(a1===$.H)A.k(A.ak(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.H.b
if(a1===$.H)A.k(A.ak(""))
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
case 5:$.H.j().setAttribute("data-house-inventory","unavailable")
A.f(g.console).warn("authored house inventory unavailable: "+A.p(a8))
case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$jI,r)},
pB(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.L(t.h.b(s)?s:new A.bL(s,A.J(s).i("bL<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.F(q))}},
oc(a){var s=0,r=A.bc(t.H),q,p,o,n,m
var $async$oc=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.x(n,n)
n=a==null
A.pB(A.i(n?null:a.sfx),m,"")
A.pB(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.F(p))
s=2
return A.af(A.k4(m,$.a2.j()),$async$oc)
case 2:o=c
$.h0=o
if($.py)o.hE()
return A.ba(null,r)}})
return A.bb($async$oc,r)},
og(a){var s=0,r=A.bc(t.H),q,p,o
var $async$og=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.x(p,p)
A.pB(A.i(a==null?null:a.tex),o,"")
p=$.ey
p=p==null?null:p.ap(o)
if(p==null)p=A.p_(t.H)
q=$.bH
q=q==null?null:q.ap(o)
s=2
return A.af(A.kS(A.e([p,q==null?A.p_(t.H):q],t.iw),t.H),$async$og)
case 2:return A.ba(null,r)}})
return A.bb($async$og,r)},
rP(){var s,r,q=v.G,p=A.a(A.f(q.window).innerWidth),o=A.a(A.f(q.window).innerHeight)
q=$.H.j()
s=p>0?p:800
q.width=s
s=$.H.j()
q=o>0?o:600
s.height=q
q=$.ey
if(q!=null)q.aA(A.a($.H.j().width),A.a($.H.j().height))
$.cr.j().aA(A.a($.H.j().width),A.a($.H.j().height))
q=$.bH
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.H.j().setAttribute("data-renderer-surface",r)},
wZ(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
A.cs(b9)
try{s=b9
if(!$.rC){$.pI=s
$.rC=!0}g=s
f=$.pI
if(typeof g!=="number")return g.a6()
r=(g-f)/1000
$.pI=s
g=r
if(typeof g!=="number")return g.cq()
if(g<0)r=0
g=r
if(typeof g!=="number")return g.a5()
if(g>0.25)r=0.25
A.xj(r)
if(!$.pJ){g=$.nN
f=r
if(typeof f!=="number")return A.jP(f)
f=$.nN=g+f
q=0
g=t.mv
for(;;){if(f>=0.008333333333333333){e=q
if(typeof e!=="number")return e.cq()
e=e<10}else e=!1
if(!e)break
$.pK=$.eF()
f=$.a_.b
if(f===$.a_)A.k(A.ak(""))
f.jH(0.008333333333333333)
A.xm()
f=$.aB.b
if(f===$.aB)A.k(A.ak(""))
e=$.a_.b
if(e===$.a_)A.k(A.ak(""))
f.f=e.r.c>=0.5
f=f.d
d=A.aF(f,!1,g)
d.$flags=3
c=d
B.a.G(f)
if(c.length!==0){f=$.a_.b
if(f===$.a_)A.k(A.ak(""))
f.l_(c)}A.xi()
A.xl()
A.xk()
A.xh(0.008333333333333333)
f=$.et.b
if(f===$.et)A.k(A.ak(""))
if(f.a!=null)if((f.b-=0.008333333333333333)<=0)f.a=null
f=$.b7.b
if(f===$.b7)A.k(A.ak(""))
p=f.a!==B.x
e=$.a2.b
if(e===$.a2)A.k(A.ak(""))
f.jI(0.008333333333333333,e)
if(p){f=$.b7.b
if(f===$.b7)A.k(A.ak(""))
f=f.e}else f=!1
if(f)A.rQ(!0)
f=$.nN-0.008333333333333333
$.nN=f
e=q
if(typeof e!=="number")return e.U()
q=e+1}o=B.d.a_(f/0.008333333333333333,0,1)
$.pT=A.qT($.ty(),$.eF(),o)
n=$.h0
if(n!=null){for(g=$.cV.length,b=0;b<$.cV.length;$.cV.length===g||(0,A.r)($.cV),++b){m=$.cV[b]
A.wp(n,m)}B.a.G($.cV)}}l=$.ey
if(l!=null){$.bE.j().dF($.jT(),$.c4,$.dH)
g=$.b8===$.eu.j()?1:0
l.c4=g
$.rI=r
$.cr.j().aC(A.pb($.a_.j().gdK()))}else if($.bD.j().a===B.a0){$.bE.j().dF($.jT(),$.c4,$.dH)
g=$.bH
if(g!=null){f=$.bE.j()
e=f.a
a=new A.z(e.a,e.b,e.c)
e=f.b
a0=new A.z(e.a,e.b,e.c)
f=f.c
a1=g.b/g.c
a2=A.qy(a,a0,new A.z(f.a,f.b,f.c))
a3=A.p7(a1,60,1.0471975511965976,0.1)
g.go=new A.dV(a2,a3,a3.V(0,a2),a,a0,0.1,60,a1)}g=$.bH
if(g!=null)g.hW($.a2.j(),$.aX)
g=$.bH
if(g!=null)g.hS($.a2.j(),$.aX,$.jT(),$.dG.j().gbg(),Math.sin(3.141592653589793*$.dG.j().gbg()))
if($.rH!==$.b7.j().a){$.rH=$.b7.j().a
$.pM=$.pM+1}g=$.bH
if(g!=null){f=s
if(typeof f!=="number")return f.lr()
f/=1000
e=$.pM
a4=A.a(Math.max(0,$.a_.j().b))
if(!isFinite(f)||f<0)A.k(A.aD(f,"timeSeconds",null))
if(a4<0)A.k(A.w("frame clock seeds must be non-negative",null))
g.k4=f
g.ok=e
g.p1=a4}g=$.bH
if(g!=null){f=$.b7.j()
e=$.pL
a5=f.a
a6=f.ge2()
a7=a6>0?B.d.a_(f.b/a6,0,1):0
f=a5.a
a8=f>=3
a9=a5===B.ax
a4=a5===B.H?0.45:1
if(f>=1)b0=a5===B.N?a7:1
else b0=0
if(f>=2)f=a5===B.av?a7:1
else f=0
b1=a8?320:0
b2=a8?5:8
b3=a9?1:0
b4=a9?a7:0
b5=a9?a7:0
b6=a9?a7:0
b7=a9?a7:0
g.k1=new A.ik(a4,b0,f,b1,b2,b3,b4,b5,b6,b7,a9?a7:0,e)}$.cr.j().aC(A.pb($.a_.j().gdK()))
k=$.bH
if(k!=null){j=k.gku()
if(j!=null){$.H.j().setAttribute("data-renderer-frame-stats",j)
g=$.H.j()
f=k.gkt()?"ok":"exceeded"
g.setAttribute("data-renderer-budget",f)}}}A.cW("running")
g=$.bt.j()
g.e=g.d=0
g.c.G(0)
A.a(A.f(v.G.window).requestAnimationFrame(A.am(A.t6())))}catch(b8){i=A.ab(b8)
h=A.c6(b8)
A.oh(i,h)}},
wp(a,b){switch(b){case"arm":a.kV("confirm")
break
case"ambient-winnow":a.dI("winnow",0.28)
break
case"ambient-gate":a.dI("gate",0.22)
break}},
xj(a){var s=$.pD
if(s==null)return
s.textContent=""+B.d.aJ(a>0?1/a:0)+" fps"},
xh(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.rT||$.b8!=null||$.aA.j().z){$.jS().a=new A.b(0,0,0)
return}s=$.bt.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga3():p
n=$.bt.j().d
m=$.bt.j().e
$.c4=$.c4+n*0.0028
s=$.dH-m*0.0028
$.dH=s
$.dH=B.d.a_(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.c4)+l*Math.sin($.c4),0,l*Math.cos($.c4)-s*Math.sin($.c4)).ga3().V(0,2)
s=$.jS()
if(!isFinite(a1)||a1<0)A.k(A.aD(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.aD(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.U(0,k.a6(0,i).V(0,1-l))
s.a=l
h=$.fZ.j().kN($.a2.j(),$.aX,$.eF(),l.V(0,a1))
$.pR=h.a
if($.b7.j().a!==B.ay&&$.b7.j().a!==B.H)$.aX=h.b
$.bE.j().dF($.eF(),$.c4,$.dH)
s=$.bE.j()
l=$.a2.j()
g=A.y4(s,$.aX,l)
$.rn.j().hY(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.q0($.bE.j(),$.a2.j(),$.aX)
break
case 1:e=A.ta($.bE.j(),$.a2.j(),$.aX)
break
case 2:d=A.tb($.bE.j(),$.a2.j(),$.aX)
break
case 3:break}s=$.rl.j()
c=$.jU().hM($.a_.j().gaL().a)
l=c==null?a0:c.h(0,"status")
s.dR(l,$.aX==="living-room")
if($.bt.j().c.aj(0,"KeyE")){s=$.a_.j().gaL()
l=e==null
i=l?a0:e.a
b=B.a.ag($.aB.j().f_(21),$.aB.j().gkC())
if(s.a===21&&i==="front-door"&&b){s=$.b7.j()
$.a2.j()
s.i7(B.cC,A.ap(s.c,t.N))
B.a.k($.cV,"collapse")
A.ez("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.a_.j().i5(1,1)){f.d=!0
s=$.et.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.h0
if(s!=null)s.cS()}else if(d!=null)if(d.w){s=$.a_.j()
if(s.f.ct(1))d.w=!1}else d.w=!0}s=$.et.j()
if(s.a!=null&&s.b>0){a=$.et.j().a
if(a!=null&&A.q0($.bE.j(),$.a2.j(),$.aX)!==a){s=$.et.j()
s.a=null
s.b=0}}},
xm(){var s,r,q,p,o,n,m,l,k,j=null
if($.aA.j().z||$.b8!=null||$.aB.j().e!=null)return
s=$.a_.j().gaL()
for(r=$.aB.j().f_(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aB.b
if(m===$.aB)A.k(A.ak(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aB.b
if(r===$.aB)A.k(A.ak(""))
l=r.jN(n)
if(!(l instanceof A.iQ))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.qo(A.f(v.G.document),"exitPointerLock",j,j,j,j)
$.jS().a=new A.b(0,0,0)
r=$.aA.b
if(r===$.aA)A.k(A.ak(""))
r.e0(n.a,k)
return}},
x1(){var s=$.aB.j().e,r=s==null,q=r?null:s.gc_()
if(r||q==null)return
$.aA.j().e0(s.a.a,q)
if(s.d!==B.I){$.aA.j().cr(q)
A.pQ()}A.ez("restored visitor")},
xi(){var s,r,q,p,o=$.a_.j().gaL(),n=$.jA.j().ke(o.a,o.b)
if(n.length===0)return
s=B.a.gaV(n)
$.jA.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.pv.j().e_(q,s.e)
p=A.xr(r)
if(p!=null)B.a.k($.cV,"ambient-"+p)},
xl(){var s,r,q,p,o=$.a_.j().gaL()
if(o.b<20)return
s=o.a
if(!$.om.k(0,s))return
r=$.jU().f
r===$&&A.j()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.aF(q,!0,t.N):B.l
p=A.y2(r,$.a_.j().b,s)
if(p!=null)$.pv.j().e_("noticed",p)},
rQ(a){var s,r,q,p,o
if($.pC!=null)return
s=$.a_.j().gaL()
r=$.a_.j().r.c
q=$.a_.j().e.b
p=A.o(q).i("aR<2>")
o=A.uc(new A.ky(s.a,1-r,new A.O(new A.aR(q,p),p.i("u(n.E)").a(new A.oi()),p.i("O<n.E>")).gq(0),$.a_.j().r.d,a))
if(o==null)return
A.rM(o)
A.pP("ending recorded")},
rM(a){var s,r,q
$.pC=a
$.rT=!0
$.jS().a=new A.b(0,0,0)
$.b8=$.pw.j()
s=$.pw.j()
r=$.jU().w
r===$&&A.j()
q=r.h(0,a.a.b)
s.i_(a,t.j.b(q)?A.aF(q,!0,t.N):B.l)},
wj(a){var s,r,q,p,o
A:{if("open"===a){s=B.T
break A}if("chain"===a){s=B.aV
break A}if("through-door"===a){s=B.aW
break A}if("letterbox"===a){s=B.aX
break A}s=B.J
break A}r=$.aB.j().jX(s)
if(s===B.T){q=$.a2.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.h0
if(p!=null)p.cS()}}if(!(r instanceof A.iP)||s===B.J){$.aA.j().ca()
$.bt.j().aI($.H.j())
return}o=r.a.gc_()
if(o==null){A.pA()
$.aA.j().ca()
$.bt.j().aI($.H.j())
return}$.aA.j().cr(o)
A.pQ()},
wm(){var s,r=$.aB.j().jJ()
if(!(r instanceof A.fp)||r.b){A.pA()
$.aA.j().ca()
$.bt.j().aI($.H.j())
return}s=r.a.gc_()
if(s==null){A.pA()
$.aA.j().ca()
$.bt.j().aI($.H.j())
return}$.aA.j().cr(s)
A.pQ()},
pQ(){var s,r,q,p,o=$.aA.j(),n=A.f(v.G.document),m=A.e([],t.fR)
for(s=$.jC.j().dY(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.eo(p.a,B.a.gO(p.c).n(0)))}o.hZ(n,m)},
wk(a){var s,r,q,p=$.aB.j().jY(a,!0,$.jC.j())
if(p==null)return
s=$.jC.j().k8(p,B.dQ)
r=$.aA.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.j()
r.textContent=q},
pA(){var s,r=$.a2.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.h0
if(s!=null)s.cS()}},
xk(){var s,r,q,p,o,n,m,l,k
for(s=$.a2.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.b7.b
if(k===$.b7)A.k(A.ak(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fI:function fI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
nA:function nA(a){this.a=a},
nB:function nB(a){this.a=a},
ej:function ej(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oD:function oD(a){this.a=a},
oE:function oE(){},
oF:function oF(){},
oI:function oI(){},
oJ:function oJ(){},
oK:function oK(){},
oL:function oL(){},
oM:function oM(){},
oN:function oN(){},
oO:function oO(){},
oP:function oP(){},
oG:function oG(){},
oH:function oH(){},
od:function od(){},
oe:function oe(){},
ok:function ok(a){this.a=a},
oi:function oi(){},
qo(a,b,c,d,e,f){var s=a[b]()
return s},
qp(a,b,c){var s=null
return c.a(A.qo(a,b,s,s,s,s))},
u_(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
tZ(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
t5(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
oT(a,b){var s=B.d.bu(a),r=A.t5(s,b),q=A.t5(s+1,b),p=B.d.a_(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
xr(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
yc(a){var s,r,q,p,o,n,m,l
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
return new A.bN(B.R,p,new Uint16Array(A.a0(a.b)),new A.h9(new A.z(s.a,s.b,s.c),new A.z(s.d,s.e,s.f)))},
xE(a){var s,r,q,p,o,n,m,l=B.q.c1(a,null),k=t.f
if(!k.b(l))throw A.c(B.dh)
s=t.N
r=t.z
q=A.aS(l,s,r)
p=A.x(s,t.P)
for(o=0;o<11;++o){n=B.e4[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.x(s,r))
else if(k.b(m))p.l(0,n,A.aS(m,s,r))
else throw A.c(A.ag('text.json section "'+n+'" must be an object',null,null))}return p},
y2(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbe(a)
s=new A.ek()
s.cu((b^274953^c)>>>0)
r=s.al(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.p1.prototype={}
J.hU.prototype={
S(a,b){return a===b},
gE(a){return A.fa(a)},
n(a){return"Instance of '"+A.im(a)+"'"},
gM(a){return A.c5(A.pF(this))}}
J.hY.prototype={
n(a){return String(a)},
gE(a){return a?519018:218159},
gM(a){return A.c5(t.y)},
$iZ:1,
$iu:1}
J.eW.prototype={
S(a,b){return null==b},
n(a){return"null"},
gE(a){return 0},
$iZ:1,
$iah:1}
J.eX.prototype={$iV:1}
J.cC.prototype={
gE(a){return 0},
gM(a){return B.fA},
n(a){return String(a)}}
J.ih.prototype={}
J.ds.prototype={}
J.cd.prototype={
n(a){var s=a[$.th()]
if(s==null)s=a[$.eE()]
if(s==null)return this.i9(a)
return"JavaScript function for "+J.dO(s)},
$id6:1}
J.e5.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.e6.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.q.prototype={
bY(a,b){return new A.bL(a,A.J(a).i("@<1>").D(b).i("bL<1,2>"))},
k(a,b){A.J(a).c.a(b)
a.$flags&1&&A.bf(a,29)
a.push(b)},
aj(a,b){var s
a.$flags&1&&A.bf(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a6(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.J(a).i("n<1>").a(b)
a.$flags&1&&A.bf(a,"addAll",2)
if(Array.isArray(b)){this.it(a,b)
return}for(s=J.L(b);s.m();)a.push(s.gp())},
it(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.ao(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.bf(a,"clear","clear")
a.length=0},
bB(a,b,c){var s=A.J(a)
return new A.S(a,s.D(c).i("1(2)").a(b),s.i("@<1>").D(c).i("S<1,2>"))},
aX(a,b){var s,r=A.bV(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.p(a[s]))
return r.join(b)},
bv(a,b,c,d){var s,r,q
d.a(b)
A.J(a).D(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.ao(a))}return r},
dB(a,b,c){var s,r,q,p=A.J(a)
p.i("u(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.ao(a))}p=c.$0()
return p},
P(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
gaV(a){if(a.length>0)return a[0]
throw A.c(A.hV())},
gO(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.hV())},
gbe(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.c(A.hV())
throw A.c(A.uu())},
a1(a,b){var s,r
A.J(a).i("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.ao(a))}return!1},
ag(a,b){var s,r
A.J(a).i("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.ao(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.J(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.bf(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.wI()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.a5()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eC(b,2))
if(p>0)this.jm(a,p)},
X(a){return this.Y(a,null)},
jm(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cs(a,b){var s,r,q,p
a.$flags&2&&A.bf(a,"shuffle")
s=a.length
while(s>1){r=b.al(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
cb(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a6(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.a6(a[s],b))return!0
return!1},
gI(a){return a.length===0},
gL(a){return a.length!==0},
n(a){return A.p0(a,"[","]")},
gu(a){return new J.cZ(a,a.length,A.J(a).i("cZ<1>"))},
gE(a){return A.fa(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.bf(a,"set length","change the length of")
if(b<0)throw A.c(A.aI(b,0,null,"newLength",null))
if(b>a.length)A.J(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.ot(a,b))
return a[b]},
l(a,b,c){A.J(a).c.a(c)
a.$flags&2&&A.bf(a)
if(!(b>=0&&b<a.length))throw A.c(A.ot(a,b))
a[b]=c},
dW(a,b){return new A.bR(a,b.i("bR<0>"))},
ho(a,b){var s
A.J(a).i("u(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gM(a){return A.c5(A.J(a))},
$iC:1,
$in:1,
$iE:1}
J.hW.prototype={
li(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.im(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.lp.prototype={}
J.cZ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia9:1}
J.dc.prototype={
H(a,b){var s
A.cs(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcd(b)
if(this.gcd(a)===s)return 0
if(this.gcd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcd(a){return a===0?1/a<0:a<0},
aK(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.au(""+a+".toInt()"))},
jU(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.au(""+a+".ceil()"))},
bu(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.au(""+a+".floor()"))},
aJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.au(""+a+".round()"))},
a_(a,b,c){if(this.H(b,c)>0)throw A.c(A.pU(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
cl(a,b){var s
if(b>20)throw A.c(A.aI(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcd(a))return"-"+s
return s},
lg(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.c(A.aI(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.au("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.d(p,1)
s=p[1]
if(3>=r)return A.d(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.V("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ak(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ib(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eQ(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.eQ(a,b)},
eQ(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.au("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
cQ(a,b){var s
if(a>0)s=this.bT(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jq(a,b){if(0>b)throw A.c(A.pU(b))
return this.bT(a,b)},
bT(a,b){return b>31?0:a>>>b},
gM(a){return A.c5(t.o)},
$iaw:1,
$iv:1,
$iaC:1}
J.eV.prototype={
gM(a){return A.c5(t.S)},
$iZ:1,
$ih:1}
J.hZ.prototype={
gM(a){return A.c5(t.i)},
$iZ:1}
J.dd.prototype={
bb(a,b,c,d){var s=A.fb(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
Z(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aI(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.Z(a,b,0)},
B(a,b,c){return a.substring(b,A.fb(b,c,a.length))},
bF(a,b){return this.B(a,b,null)},
lh(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.uy(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.uz(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
V(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.cy)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
kU(a,b,c){var s=b-a.length
if(s<=0)return a
return this.V(c,s)+a},
cc(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aI(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cb(a,b){return this.cc(a,b,0)},
v(a,b){return A.y8(a,b,0)},
H(a,b){var s
A.F(b)
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
gM(a){return A.c5(t.N)},
gq(a){return a.length},
$iZ:1,
$iaw:1,
$iqz:1,
$im:1}
A.cP.prototype={
gu(a){return new A.eH(J.L(this.gaO()),A.o(this).i("eH<1,2>"))},
gq(a){return J.aQ(this.gaO())},
gI(a){return J.q5(this.gaO())},
gL(a){return J.tF(this.gaO())},
P(a,b){return A.o(this).y[1].a(J.jV(this.gaO(),b))},
n(a){return J.dO(this.gaO())}}
A.eH.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$ia9:1}
A.d0.prototype={
gaO(){return this.a}}
A.fx.prototype={$iC:1}
A.fv.prototype={
h(a,b){return this.$ti.y[1].a(J.aP(this.a,b))},
l(a,b,c){var s=this.$ti
J.bT(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.tG(this.a,b)},
k(a,b){var s=this.$ti
J.h8(this.a,s.c.a(s.y[1].a(b)))},
Y(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.ng(this,b)
J.tH(this.a,s)},
$iC:1,
$iE:1}
A.ng.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.bL.prototype={
bY(a,b){return new A.bL(this.a,this.$ti.i("@<1>").D(b).i("bL<1,2>"))},
gaO(){return this.a}}
A.de.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.ho.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.mA.prototype={}
A.C.prototype={}
A.a1.prototype={
gu(a){var s=this
return new A.ce(s,s.gq(s),A.o(s).i("ce<a1.E>"))},
gI(a){return this.gq(this)===0},
a1(a,b){var s,r,q=this
A.o(q).i("u(a1.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.P(0,r)))return!0
if(s!==q.gq(q))throw A.c(A.ao(q))}return!1},
aX(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.p(p.P(0,0))
if(o!==p.gq(p))throw A.c(A.ao(p))
for(r=s,q=1;q<o;++q){r=r+b+A.p(p.P(0,q))
if(o!==p.gq(p))throw A.c(A.ao(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.p(p.P(0,q))
if(o!==p.gq(p))throw A.c(A.ao(p))}return r.charCodeAt(0)==0?r:r}},
dV(a,b){return this.i8(0,A.o(this).i("u(a1.E)").a(b))},
bB(a,b,c){var s=A.o(this)
return new A.S(this,s.D(c).i("1(a1.E)").a(b),s.i("@<a1.E>").D(c).i("S<1,2>"))},
bd(a,b){var s=A.o(this).i("a1.E")
if(b)s=A.Q(this,s)
else{s=A.Q(this,s)
s.$flags=1
s=s}return s},
bc(a){return this.bd(0,!0)},
aZ(a){var s,r=this,q=A.p4(A.o(r).i("a1.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.P(0,s))
return q}}
A.fl.prototype={
giR(){var s=J.aQ(this.a),r=this.c
if(r==null||r>s)return s
return r},
gju(){var s=J.aQ(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aQ(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
P(a,b){var s=this,r=s.gju()+b
if(b<0||r>=s.giR())throw A.c(A.lk(b,s.gq(0),s,"index"))
return J.jV(s.a,r)},
bd(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aY(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.qn(0,n):J.qm(0,n)}r=A.bV(s,m.P(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.P(n,o+q))
if(m.gq(n)<l)throw A.c(A.ao(p))}return r},
bc(a){return this.bd(0,!0)}}
A.ce.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aY(q),o=p.gq(q)
if(r.b!==o)throw A.c(A.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.P(q,s);++r.c
return!0},
$ia9:1}
A.cf.prototype={
gu(a){return new A.dg(J.L(this.a),this.b,A.o(this).i("dg<1,2>"))},
gq(a){return J.aQ(this.a)},
gI(a){return J.q5(this.a)},
P(a,b){return this.b.$1(J.jV(this.a,b))}}
A.d3.prototype={$iC:1}
A.dg.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.S.prototype={
gq(a){return J.aQ(this.a)},
P(a,b){return this.b.$1(J.jV(this.a,b))}}
A.O.prototype={
gu(a){return new A.P(J.L(this.a),this.b,this.$ti.i("P<1>"))}}
A.P.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$ia9:1}
A.bR.prototype={
gu(a){return new A.fr(J.L(this.a),this.$ti.i("fr<1>"))}}
A.fr.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$ia9:1}
A.ac.prototype={
sq(a,b){throw A.c(A.au("Cannot change the length of a fixed-length list"))},
k(a,b){A.be(a).i("ac.E").a(b)
throw A.c(A.au("Cannot add to a fixed-length list"))}}
A.c0.prototype={
l(a,b,c){A.o(this).i("c0.E").a(c)
throw A.c(A.au("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.c(A.au("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).i("c0.E").a(b)
throw A.c(A.au("Cannot add to an unmodifiable list"))},
Y(a,b){A.o(this).i("h(c0.E,c0.E)?").a(b)
throw A.c(A.au("Cannot modify an unmodifiable list"))}}
A.eh.prototype={}
A.fg.prototype={
gq(a){return J.aQ(this.a)},
P(a,b){var s=this.a,r=J.aY(s)
return r.P(s,r.gq(s)-1-b)}}
A.fY.prototype={}
A.eo.prototype={$r:"+(1,2)",$s:1}
A.br.prototype={$r:"+(1,2,3)",$s:2}
A.fJ.prototype={$r:"+(1,2,3,4)",$s:3}
A.eJ.prototype={}
A.dX.prototype={
gI(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
n(a){return A.p6(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.tV()},
gR(){return new A.c3(this.ki(),A.o(this).i("c3<M<1,2>>"))},
ki(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gR(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gN(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("M<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.M(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
b9(a,b,c,d){var s=A.x(c,d)
this.ab(0,new A.kn(this,A.o(this).D(c).D(d).i("M<1,2>(3,4)").a(b),s))
return s},
$iR:1}
A.kn.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a4.prototype={
gq(a){return this.b.length},
ger(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a0(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.a0(b))return null
return this.b[this.a[b]]},
ab(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.ger()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gN(){return new A.dC(this.ger(),this.$ti.i("dC<1>"))},
gau(){return new A.dC(this.b,this.$ti.i("dC<2>"))}}
A.dC.prototype={
gq(a){return this.a.length},
gI(a){return 0===this.a.length},
gL(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dD(s,s.length,this.$ti.i("dD<1>"))}}
A.dD.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia9:1}
A.eQ.prototype={
bh(){var s=this,r=s.$map
if(r==null){r=new A.eY(s.$ti.i("eY<1,2>"))
A.t1(s.a,r)
s.$map=r}return r},
h(a,b){return this.bh().h(0,b)},
ab(a,b){this.$ti.i("~(1,2)").a(b)
this.bh().ab(0,b)},
gN(){var s=this.bh()
return new A.aj(s,A.o(s).i("aj<1>"))},
gau(){var s=this.bh()
return new A.aR(s,A.o(s).i("aR<2>"))},
gq(a){return this.bh().a}}
A.eK.prototype={
k(a,b){A.o(this).c.a(b)
A.tW()}}
A.c8.prototype={
gq(a){return this.b},
gI(a){return this.b===0},
gL(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dD(s,s.length,r.$ti.i("dD<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
aZ(a){return A.p5(this,this.$ti.c)}}
A.m3.prototype={
$0(){return B.d.bu(1000*this.a.now())},
$S:16}
A.fh.prototype={}
A.mS.prototype={
aq(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.f6.prototype={
n(a){return"Null check operator used on a null value"}}
A.i_.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iI.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.lS.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eO.prototype={}
A.fL.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ic_:1}
A.cx.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.tg(r==null?"unknown":r)+"'"},
gM(a){var s=A.pW(this)
return A.c5(s==null?A.be(this):s)},
$id6:1,
glq(){return this},
$C:"$1",
$R:1,
$D:null}
A.hm.prototype={$C:"$0",$R:0}
A.hn.prototype={$C:"$2",$R:2}
A.iE.prototype={}
A.iB.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.tg(s)+"'"}}
A.dU.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dU))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.jQ(this.a)^A.fa(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.im(this.a)+"'")}}
A.iu.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bx.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.aj(this,A.o(this).i("aj<1>"))},
gau(){return new A.aR(this,A.o(this).i("aR<2>"))},
gR(){return new A.X(this,A.o(this).i("X<1,2>"))},
a0(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.kx(a)},
kx(a){var s=this.d
if(s==null)return!1
return this.bx(s[this.bw(a)],a)>=0},
J(a,b){A.o(this).i("R<1,2>").a(b).ab(0,new A.ly(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ky(b)},
ky(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bw(a)]
r=this.bx(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.e5(s==null?q.b=q.cL():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.e5(r==null?q.c=q.cL():r,b,c)}else q.kA(b,c)},
kA(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cL()
r=o.bw(a)
q=s[r]
if(q==null)s[r]=[o.cM(a,b)]
else{p=o.bx(q,a)
if(p>=0)q[p].b=b
else q.push(o.cM(a,b))}},
kX(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.a0(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
aj(a,b){if((b&0x3fffffff)===b)return this.ir(this.c,b)
else return this.kz(b)},
kz(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bw(a)
r=n[s]
q=o.bx(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.e3(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cv()}},
ab(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.ao(q))
s=s.c}},
e5(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cM(b,c)
else s.b=c},
ir(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.e3(s)
delete a[b]
return s.b},
cv(){this.r=this.r+1&1073741823},
cM(a,b){var s=this,r=A.o(s),q=new A.lG(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cv()
return q},
e3(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cv()},
bw(a){return J.bg(a)&1073741823},
bx(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
n(a){return A.p6(this)},
cL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ip3:1}
A.ly.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.lG.prototype={}
A.aj.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cD(s,s.r,s.e,this.$ti.i("cD<1>"))}}
A.cD.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia9:1}
A.aR.prototype={
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
$ia9:1}
A.X.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.f_(s,s.r,s.e,this.$ti.i("f_<1,2>"))}}
A.f_.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.M(s.a,s.b,r.$ti.i("M<1,2>"))
r.c=s.c
return!0}},
$ia9:1}
A.eY.prototype={
bw(a){return A.xz(a)&1073741823},
bx(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
A.oy.prototype={
$1(a){return this.a(a)},
$S:5}
A.oz.prototype={
$2(a,b){return this.a(a,b)},
$S:48}
A.oA.prototype={
$1(a){return this.a(A.F(a))},
$S:17}
A.bB.prototype={
gM(a){return A.c5(this.ep())},
ep(){return A.xJ(this.$r,this.bN())},
n(a){return this.eU(!1)},
eU(a){var s,r,q,p,o,n=this.iV(),m=this.bN(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.qB(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iV(){var s,r=this.$s
while($.nC.length<=r)B.a.k($.nC,null)
s=$.nC[r]
if(s==null){s=this.iG()
B.a.l($.nC,r,s)}return s},
iG(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.hX(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ap(j,k)}}
A.el.prototype={
bN(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.el&&this.$s===b.$s&&J.a6(this.a,b.a)&&J.a6(this.b,b.b)},
gE(a){return A.ch(this.$s,this.a,this.b,B.k)}}
A.em.prototype={
bN(){return[this.a,this.b,this.c]},
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.em&&s.$s===b.$s&&J.a6(s.a,b.a)&&J.a6(s.b,b.b)&&J.a6(s.c,b.c)},
gE(a){var s=this
return A.ch(s.$s,s.a,s.b,s.c)}}
A.en.prototype={
bN(){return this.a},
S(a,b){if(b==null)return!1
return b instanceof A.en&&this.$s===b.$s&&A.vD(this.a,b.a)},
gE(a){return A.ch(this.$s,A.uI(this.a),B.k,B.k)}}
A.nh.prototype={
cO(){var s=this.b
if(s===this)throw A.c(new A.de("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.c(A.ak(""))
return s}}
A.cF.prototype={
gM(a){return B.ft},
f0(a,b,c){return new Float32Array(a,b,c)},
$iZ:1,
$icF:1}
A.e8.prototype={$ie8:1}
A.f4.prototype={
gjO(a){if(((a.$flags|0)&2)!==0)return new A.nI(a.buffer)
else return a.buffer},
j0(a,b,c,d){var s=A.aI(b,0,c,d,null)
throw A.c(s)},
eb(a,b,c,d){if(b>>>0!==b||b>c)this.j0(a,b,c,d)}}
A.nI.prototype={
f0(a,b,c){var s=A.uF(this.a,b,c)
s.$flags=3
return s}}
A.i7.prototype={
gM(a){return B.fu},
$iZ:1}
A.ax.prototype={
gq(a){return a.length},
eL(a,b,c,d,e){var s,r,q=a.length
this.eb(a,b,q,"start")
this.eb(a,c,q,"end")
if(b>c)throw A.c(A.aI(b,0,c,null,null))
s=c-b
if(e<0)throw A.c(A.w(e,null))
r=d.length
if(r-e<s)throw A.c(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibk:1}
A.f2.prototype={
h(a,b){A.cu(b,a,a.length)
return a[b]},
l(a,b,c){A.h_(c)
a.$flags&2&&A.bf(a)
A.cu(b,a,a.length)
a[b]=c},
hT(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bf(a,5)
this.eL(a,b,c,d,0)
return},
$iC:1,
$in:1,
$iE:1}
A.f3.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.bf(a)
A.cu(b,a,a.length)
a[b]=c},
hU(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bf(a,5)
this.eL(a,b,c,d,e)
return},
$iC:1,
$in:1,
$iE:1}
A.f1.prototype={
gM(a){return B.fv},
b0(a,b,c){return new Float32Array(a.subarray(b,A.wh(b,c,a.length)))},
$iZ:1,
$ikK:1}
A.i8.prototype={
gM(a){return B.fw},
$iZ:1}
A.i9.prototype={
gM(a){return B.fx},
h(a,b){A.cu(b,a,a.length)
return a[b]},
$iZ:1}
A.ia.prototype={
gM(a){return B.fy},
h(a,b){A.cu(b,a,a.length)
return a[b]},
$iZ:1}
A.ib.prototype={
gM(a){return B.fz},
h(a,b){A.cu(b,a,a.length)
return a[b]},
$iZ:1}
A.ic.prototype={
gM(a){return B.fC},
h(a,b){A.cu(b,a,a.length)
return a[b]},
$iZ:1,
$ipg:1}
A.id.prototype={
gM(a){return B.fD},
h(a,b){A.cu(b,a,a.length)
return a[b]},
$iZ:1}
A.di.prototype={
gM(a){return B.fE},
gq(a){return a.length},
h(a,b){A.cu(b,a,a.length)
return a[b]},
$iZ:1,
$idi:1}
A.f5.prototype={
gM(a){return B.fF},
gq(a){return a.length},
h(a,b){A.cu(b,a,a.length)
return a[b]},
$iZ:1,
$ifm:1}
A.fE.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.bO.prototype={
i(a){return A.fQ(v.typeUniverse,this,a)},
D(a){return A.rc(v.typeUniverse,this,a)}}
A.j9.prototype={}
A.jw.prototype={
n(a){return A.bu(this.a,null)}}
A.j7.prototype={
n(a){return this.a}}
A.fM.prototype={$icl:1}
A.nd.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:18}
A.nc.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.ne.prototype={
$0(){this.a.$0()},
$S:8}
A.nf.prototype={
$0(){this.a.$0()},
$S:8}
A.nF.prototype={
iq(a,b){if(self.setTimeout!=null)self.setTimeout(A.eC(new A.nG(this,b),0),a)
else throw A.c(A.au("`setTimeout()` not found."))}}
A.nG.prototype={
$0(){this.b.$0()},
$S:0}
A.iY.prototype={
cT(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cz(a)
else{s=r.a
if(q.i("bi<1>").b(a))s.ea(a)
else s.bL(a)}},
cU(a,b){var s=this.a
if(this.b)s.aM(new A.av(a,b))
else s.bH(new A.av(a,b))}}
A.nR.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.nS.prototype={
$2(a,b){this.a.$2(1,new A.eO(a,t.l.a(b)))},
$S:59}
A.op.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:63}
A.bs.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jn(a,b){var s,r,q
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
o.d=null}q=o.jn(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.r7
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
o.a=A.r7
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.c(A.l("sync*"))}return!1},
ls(a){var s,r,q=this
if(a instanceof A.c3){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.L(a)
return 2}},
$ia9:1}
A.c3.prototype={
gu(a){return new A.bs(this.a(),this.$ti.i("bs<1>"))}}
A.av.prototype={
n(a){return A.p(this.a)},
$ia5:1,
gbf(){return this.b}}
A.kR.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eh(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ab(p)
q=A.c6(p)
l=r
o=q
n=A.pG(l,o)
l=new A.av(l,o)
m.b.aM(l)
return}m.b.eh(s)}},
$S:0}
A.kU.prototype={
$2(a,b){var s,r,q=this
A.ev(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aM(new A.av(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aM(new A.av(r,s))}},
$S:32}
A.kT.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bT(r,k.b,a)
if(J.a6(s,0)){q=A.e([],j.i("q<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.h8(q,l)}k.c.bL(q)}}else if(J.a6(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aM(new A.av(q,o))}},
$S(){return this.d.i("ah(0)")}}
A.j1.prototype={
cU(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.bH(A.wH(a,b))},
f3(a){return this.cU(a,null)}}
A.fs.prototype={
cT(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.cz(r.i("1/").a(a))}}
A.dy.prototype={
kM(a){if((this.c&15)!==6)return!0
return this.b.b.dP(t.iW.a(this.d),a.a,t.y,t.K)},
kw(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.ld(q,m,a.b,o,n,t.l)
else p=l.dP(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ab(s))){if((r.c&1)!==0)throw A.c(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ae.prototype={
dQ(a,b,c){var s,r,q=this.$ti
q.D(c).i("1/(2)").a(a)
s=$.a8
if(s===B.r){if(!t.ng.b(b)&&!t.mq.b(b))throw A.c(A.aD(b,"onError",u.c))}else{c.i("@<0/>").D(q.c).i("1(2)").a(a)
b=A.x0(b,s)}r=new A.ae(s,c.i("ae<0>"))
this.cw(new A.dy(r,3,a,b,q.i("@<1>").D(c).i("dy<1,2>")))
return r},
eT(a,b,c){var s,r=this.$ti
r.D(c).i("1/(2)").a(a)
s=new A.ae($.a8,c.i("ae<0>"))
this.cw(new A.dy(s,19,a,b,r.i("@<1>").D(c).i("dy<1,2>")))
return s},
jp(a){this.a=this.a&1|16
this.c=a},
bK(a){this.a=a.a&30|this.a&1
this.c=a.c},
cw(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.cw(a)
return}r.bK(s)}A.jK(null,null,r.b,t.M.a(new A.nj(r,a)))}},
ez(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.ez(a)
return}m.bK(n)}l.a=m.bR(a)
A.jK(null,null,m.b,t.M.a(new A.no(l,m)))}},
bj(){var s=t.F.a(this.c)
this.c=null
return this.bR(s)},
bR(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eh(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bi<1>").b(a))A.nm(a,r,!0)
else{s=r.bj()
q.c.a(a)
r.a=8
r.c=a
A.dz(r,s)}},
bL(a){var s,r=this
r.$ti.c.a(a)
s=r.bj()
r.a=8
r.c=a
A.dz(r,s)},
iF(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bj()
q.bK(a)
A.dz(q,r)},
aM(a){var s=this.bj()
this.jp(a)
A.dz(this,s)},
cz(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bi<1>").b(a)){this.ea(a)
return}this.iv(a)},
iv(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.jK(null,null,s.b,t.M.a(new A.nl(s,a)))},
ea(a){A.nm(this.$ti.i("bi<1>").a(a),this,!1)
return},
bH(a){this.a^=2
A.jK(null,null,this.b,t.M.a(new A.nk(this,a)))},
$ibi:1}
A.nj.prototype={
$0(){A.dz(this.a,this.b)},
$S:0}
A.no.prototype={
$0(){A.dz(this.b,this.a.a)},
$S:0}
A.nn.prototype={
$0(){A.nm(this.a.a,this.b,!0)},
$S:0}
A.nl.prototype={
$0(){this.a.bL(this.b)},
$S:0}
A.nk.prototype={
$0(){this.a.aM(this.b)},
$S:0}
A.nr.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.lc(t.mY.a(q.d),t.z)}catch(p){s=A.ab(p)
r=A.c6(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.k3(q)
n=k.a
n.c=new A.av(q,o)
q=n}q.b=!0
return}if(j instanceof A.ae&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ae){m=k.b.a
l=new A.ae(m.b,m.$ti)
j.dQ(new A.ns(l,m),new A.nt(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ns.prototype={
$1(a){this.a.iF(this.b)},
$S:18}
A.nt.prototype={
$2(a,b){A.ev(a)
t.l.a(b)
this.a.aM(new A.av(a,b))},
$S:33}
A.nq.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dP(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ab(l)
r=A.c6(l)
q=s
p=r
if(p==null)p=A.k3(q)
o=this.a
o.c=new A.av(q,p)
o.b=!0}},
$S:0}
A.np.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.kM(s)&&p.a.e!=null){p.c=p.a.kw(s)
p.b=!1}}catch(o){r=A.ab(o)
q=A.c6(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.k3(p)
m=l.b
m.c=new A.av(p,n)
p=m}p.b=!0}},
$S:0}
A.iZ.prototype={}
A.ju.prototype={}
A.fX.prototype={$ir_:1}
A.jn.prototype={
le(a){var s,r,q
t.M.a(a)
try{if(B.r===$.a8){a.$0()
return}A.rR(null,null,this,a,t.H)}catch(q){s=A.ab(q)
r=A.c6(q)
A.pN(A.ev(s),t.l.a(r))}},
f2(a){return new A.nD(this,t.M.a(a))},
lc(a,b){b.i("0()").a(a)
if($.a8===B.r)return a.$0()
return A.rR(null,null,this,a,b)},
dP(a,b,c,d){c.i("@<0>").D(d).i("1(2)").a(a)
d.a(b)
if($.a8===B.r)return a.$1(b)
return A.x4(null,null,this,a,b,c,d)},
ld(a,b,c,d,e,f){d.i("@<0>").D(e).D(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a8===B.r)return a.$2(b,c)
return A.x3(null,null,this,a,b,c,d,e,f)},
hC(a,b,c,d){return b.i("@<0>").D(c).D(d).i("1(2,3)").a(a)}}
A.nD.prototype={
$0(){return this.a.le(this.b)},
$S:0}
A.oj.prototype={
$0(){A.uh(this.a,this.b)},
$S:0}
A.fz.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.dA(this,this.$ti.i("dA<1>"))},
gau(){var s=this.$ti
return A.i3(new A.dA(this,s.i("dA<1>")),new A.nu(this),s.c,s.y[1])},
a0(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iJ(a)},
iJ(a){var s=this.d
if(s==null)return!1
return this.aN(this.eo(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.r1(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.r1(q,b)
return r}else return this.iW(b)},
iW(a){var s,r,q=this.d
if(q==null)return null
s=this.eo(q,a)
r=this.aN(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ee(s==null?m.b=A.pn():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ee(r==null?m.c=A.pn():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.pn()
p=A.jQ(b)&1073741823
o=q[p]
if(o==null){A.po(q,p,[b,c]);++m.a
m.e=null}else{n=m.aN(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ab(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ef()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.ao(m))}},
ef(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.bV(i.a,null,!1,t.z)
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
ee(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.po(a,b,c)},
eo(a,b){return a[A.jQ(b)&1073741823]}}
A.nu.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.fB.prototype={
aN(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dA.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gL(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.fA(s,s.ef(),this.$ti.i("fA<1>"))}}
A.fA.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.ao(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia9:1}
A.bA.prototype={
ev(){return new A.bA(A.o(this).i("bA<1>"))},
gu(a){var s=this,r=new A.dE(s,s.r,A.o(s).i("dE<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
v(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Y.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Y.a(r[b])!=null}else return this.iI(b)},
iI(a){var s=this.d
if(s==null)return!1
return this.aN(s[this.cE(a)],a)>=0},
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ed(s==null?q.b=A.pp():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ed(r==null?q.c=A.pp():r,b)}else return q.is(b)},
is(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.pp()
r=p.cE(a)
q=s[r]
if(q==null)s[r]=[p.cC(a)]
else{if(p.aN(q,a)>=0)return!1
q.push(p.cC(a))}return!0},
aj(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.eA(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.eA(s.c,b)
else return s.jl(b)},
jl(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cE(a)
r=n[s]
q=o.aN(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eX(p)
return!0},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cK()}},
ed(a,b){A.o(this).c.a(b)
if(t.Y.a(a[b])!=null)return!1
a[b]=this.cC(b)
return!0},
eA(a,b){var s
if(a==null)return!1
s=t.Y.a(a[b])
if(s==null)return!1
this.eX(s)
delete a[b]
return!0},
cK(){this.r=this.r+1&1073741823},
cC(a){var s,r=this,q=new A.je(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cK()
return q},
eX(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cK()},
cE(a){return J.bg(a)&1073741823},
aN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
$iqw:1}
A.je.prototype={}
A.dE.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.ao(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia9:1}
A.lH.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:35}
A.I.prototype={
gu(a){return new A.ce(a,this.gq(a),A.be(a).i("ce<I.E>"))},
P(a,b){return this.h(a,b)},
gI(a){return this.gq(a)===0},
gL(a){return!this.gI(a)},
ag(a,b){var s,r
A.be(a).i("u(I.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.c(A.ao(a))}return!0},
a1(a,b){var s,r
A.be(a).i("u(I.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.c(A.ao(a))}return!1},
dW(a,b){return new A.bR(a,b.i("bR<0>"))},
bB(a,b,c){var s=A.be(a)
return new A.S(a,s.D(c).i("1(I.E)").a(b),s.i("@<I.E>").D(c).i("S<1,2>"))},
k(a,b){var s
A.be(a).i("I.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
bY(a,b){return new A.bL(a,A.be(a).i("@<I.E>").D(b).i("bL<1,2>"))},
Y(a,b){var s,r=A.be(a)
r.i("h(I.E,I.E)?").a(b)
s=b==null?A.xy():b
A.iy(a,0,this.gq(a)-1,s,r.i("I.E"))},
kq(a,b,c,d){var s
A.be(a).i("I.E?").a(d)
A.fb(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.p0(a,"[","]")},
$iC:1,
$in:1,
$iE:1}
A.U.prototype={
ab(a,b){var s,r,q,p=A.o(this)
p.i("~(U.K,U.V)").a(b)
for(s=this.gN(),s=s.gu(s),p=p.i("U.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gR(){return this.gN().bB(0,new A.lJ(this),A.o(this).i("M<U.K,U.V>"))},
b9(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.D(c).D(d).i("M<1,2>(U.K,U.V)").a(b)
s=A.x(c,d)
for(r=this.gN(),r=r.gu(r),n=n.i("U.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
jF(a){var s,r,q
A.o(this).i("n<M<U.K,U.V>>").a(a)
for(s=a.$ti,r=new A.dg(J.L(a.a),a.b,s.i("dg<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gN()
return s.gq(s)},
gI(a){var s=this.gN()
return s.gI(s)},
gL(a){var s=this.gN()
return s.gL(s)},
gau(){return new A.fC(this,A.o(this).i("fC<U.K,U.V>"))},
n(a){return A.p6(this)},
$iR:1}
A.lJ.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("U.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("U.V").a(s)
return new A.M(a,s,r.i("M<U.K,U.V>"))},
$S(){return A.o(this.a).i("M<U.K,U.V>(U.K)")}}
A.lK.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:19}
A.fC.prototype={
gq(a){var s=this.a
return s.gq(s)},
gI(a){var s=this.a
return s.gI(s)},
gL(a){var s=this.a
return s.gL(s)},
gu(a){var s=this.a,r=s.gN()
return new A.fD(r.gu(r),s,this.$ti.i("fD<1,2>"))}}
A.fD.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.fR.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.c(A.au("Cannot modify unmodifiable map"))}}
A.e7.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.o(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
ab(a,b){this.a.ab(0,A.o(this).i("~(1,2)").a(b))},
gI(a){var s=this.a
return s.gI(s)},
gL(a){var s=this.a
return s.gL(s)},
gq(a){var s=this.a
return s.gq(s)},
gN(){return this.a.gN()},
n(a){return this.a.n(0)},
gau(){return this.a.gau()},
gR(){return this.a.gR()},
b9(a,b,c,d){return this.a.b9(0,A.o(this).D(c).D(d).i("M<1,2>(3,4)").a(b),c,d)},
$iR:1}
A.cM.prototype={}
A.cj.prototype={
gI(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
J(a,b){var s
for(s=J.L(A.o(this).i("n<1>").a(b));s.m();)this.k(0,s.gp())},
cY(a){var s,r,q=this.aZ(0)
for(s=this.gu(this);s.m();){r=s.gp()
if(a.v(0,r))q.aj(0,r)}return q},
n(a){return A.p0(this,"{","}")},
ag(a,b){var s
A.o(this).i("u(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aX(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dO(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.p(q.gp())
while(q.m())}else{r=s
do r=r+b+A.p(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
a1(a,b){var s
A.o(this).i("u(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
P(a,b){var s,r
A.iq(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.lk(b,b-r,this,"index"))},
$iC:1,
$in:1,
$icI:1}
A.fK.prototype={
cY(a){var s,r,q,p=this,o=p.ev()
for(s=A.jf(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.k(0,q)}return o},
aZ(a){var s=this.ev()
s.J(0,this)
return s}}
A.jx.prototype={
k(a,b){this.$ti.c.a(b)
return A.vO()}}
A.fn.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gu(a){var s=this.a
return A.jf(s,s.r,A.o(s).c)},
aZ(a){return this.a.aZ(0)}}
A.er.prototype={}
A.fS.prototype={}
A.jc.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jg(b):s}},
gq(a){return this.b==null?this.c.a:this.b1().length},
gI(a){return this.gq(0)===0},
gL(a){return this.gq(0)>0},
gN(){if(this.b==null){var s=this.c
return new A.aj(s,A.o(s).i("aj<1>"))}return new A.jd(this)},
gau(){var s,r=this
if(r.b==null){s=r.c
return new A.aR(s,A.o(s).i("aR<2>"))}return A.i3(r.b1(),new A.nw(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.F(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a0(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jy().l(0,b,c)},
a0(a){if(this.b==null)return this.c.a0(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
ab(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ab(0,b)
s=o.b1()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.nT(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.ao(o))}},
b1(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
jy(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.x(t.N,t.z)
r=n.b1()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
jg(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.nT(this.a[a])
return this.b[a]=s}}
A.nw.prototype={
$1(a){return this.a.h(0,A.F(a))},
$S:17}
A.jd.prototype={
gq(a){return this.a.gq(0)},
P(a,b){var s=this.a
if(s.b==null)s=s.gN().P(0,b)
else{s=s.b1()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gN()
s=s.gu(s)}else{s=s.b1()
s=new J.cZ(s,s.length,A.J(s).i("cZ<1>"))}return s}}
A.nL.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:20}
A.nK.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:20}
A.hf.prototype={
kO(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fb(a4,a5,a2)
s=$.tt()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.ox(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.ox(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aK("")
g=o}else g=o
g.a+=B.b.B(a3,p,q)
c=A.ad(j)
g.a+=c
p=k
continue}}throw A.c(A.ag("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.B(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.q6(a3,m,a5,n,l,r)
else{b=B.c.ak(r-1,4)+1
if(b===1)throw A.c(A.ag(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bb(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.q6(a3,m,a5,n,l,a)
else{b=B.c.ak(a,4)
if(b===1)throw A.c(A.ag(a1,a3,a5))
if(b>1)a3=B.b.bb(a3,a5,a5,b===2?"==":"=")}return a3}}
A.kf.prototype={}
A.d1.prototype={}
A.hs.prototype={}
A.hC.prototype={}
A.eZ.prototype={
n(a){var s=A.hD(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.i1.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.i0.prototype={
c1(a,b){var s=A.wY(a,this.gka().a)
return s},
b7(a,b){var s=A.vw(a,this.gkg().b,null)
return s},
gkg(){return B.dV},
gka(){return B.dU}}
A.lA.prototype={}
A.lz.prototype={}
A.ny.prototype={
hK(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ad(92)
s.a+=o
o=A.ad(117)
s.a+=o
o=A.ad(100)
s.a+=o
o=p>>>8&15
o=A.ad(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ad(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ad(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ad(92)
s.a+=o
switch(p){case 8:o=A.ad(98)
s.a+=o
break
case 9:o=A.ad(116)
s.a+=o
break
case 10:o=A.ad(110)
s.a+=o
break
case 12:o=A.ad(102)
s.a+=o
break
case 13:o=A.ad(114)
s.a+=o
break
default:o=A.ad(117)
s.a+=o
o=A.ad(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ad(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ad(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ad(92)
s.a+=o
o=A.ad(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.B(a,r,m)},
cB(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.i1(a,null))}B.a.k(s,a)},
cm(a){var s,r,q,p,o=this
if(o.hJ(a))return
o.cB(a)
try{s=o.b.$1(a)
if(!o.hJ(s)){q=A.qs(a,null,o.gey())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ab(p)
q=A.qs(a,r,o.gey())
throw A.c(q)}},
hJ(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hK(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cB(a)
q.lo(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cB(a)
r=q.lp(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
lo(a){var s,r,q=this.c
q.a+="["
s=J.aY(a)
if(s.gL(a)){this.cm(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cm(s.h(a,r))}}q.a+="]"},
lp(a){var s,r,q,p,o,n,m=this,l={}
if(a.gI(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.bV(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ab(0,new A.nz(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hK(A.F(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cm(r[n])}p.a+="}"
return!0}}
A.nz.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:19}
A.nx.prototype={
gey(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iM.prototype={}
A.mY.prototype={
k6(a){return new A.nJ(this.a).iK(t.J.a(a),0,null,!0)}}
A.nJ.prototype={
iK(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.fb(b,c,J.aQ(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.w4(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.w3(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cF(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.w5(o)
l.b=0
throw A.c(A.ag(m,a,p+l.c))}return n},
cF(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.K(b+c,2)
r=q.cF(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cF(a,s,c,d)}return q.k9(a,b,c,d)},
k9(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aK(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ad(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ad(h)
e.a+=p
break
case 65:p=A.ad(h)
e.a+=p;--d
break
default:p=A.ad(h)
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
p=A.ad(a[l])
e.a+=p}else{p=A.qK(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ad(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.d2.prototype={
S(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.d2)if(this.a===b.a)s=this.b===b.b
return s},
gE(a){return A.ch(this.a,this.b,B.k,B.k)},
H(a,b){var s
t.ml.a(b)
s=B.c.H(this.a,b.a)
if(s!==0)return s
return B.c.H(this.b,b.b)},
n(a){var s=this,r=A.tX(A.uT(s)),q=A.hu(A.uR(s)),p=A.hu(A.uN(s)),o=A.hu(A.uO(s)),n=A.hu(A.uQ(s)),m=A.hu(A.uS(s)),l=A.qc(A.uP(s)),k=s.b,j=k===0?"":A.qc(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaw:1}
A.cz.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.cz&&this.a===b.a},
gE(a){return B.c.gE(this.a)},
H(a,b){return B.c.H(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.K(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.K(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.kU(B.c.n(o%1e6),6,"0")},
$iaw:1}
A.j6.prototype={
n(a){return this.A()},
$iG:1}
A.a5.prototype={
gbf(){return A.uM(this)}}
A.hc.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hD(s)
return"Assertion failed"}}
A.cl.prototype={}
A.bK.prototype={
gcH(){return"Invalid argument"+(!this.a?"(s)":"")},
gcG(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gcH()+q+o
if(!s.a)return n
return n+s.gcG()+": "+A.hD(s.gdD())},
gdD(){return this.b}}
A.ea.prototype={
gdD(){return A.rs(this.b)},
gcH(){return"RangeError"},
gcG(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.hR.prototype={
gdD(){return A.a(this.b)},
gcH(){return"RangeError"},
gcG(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fo.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.iH.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.ef.prototype={
n(a){return"Bad state: "+this.a}}
A.hq.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hD(s)+"."}}
A.ie.prototype={
n(a){return"Out of Memory"},
gbf(){return null},
$ia5:1}
A.fj.prototype={
n(a){return"Stack Overflow"},
gbf(){return null},
$ia5:1}
A.ni.prototype={
n(a){return"Exception: "+this.a}}
A.K.prototype={
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
k=""}return g+l+B.b.B(e,i,j)+k+"\n"+B.b.V(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.p(f)+")"):g}}
A.n.prototype={
bY(a,b){return A.tP(this,A.o(this).i("n.E"),b)},
bB(a,b,c){var s=A.o(this)
return A.i3(this,s.D(c).i("1(n.E)").a(b),s.i("n.E"),c)},
dV(a,b){var s=A.o(this)
return new A.O(this,s.i("u(n.E)").a(b),s.i("O<n.E>"))},
dW(a,b){return new A.bR(this,b.i("bR<0>"))},
bv(a,b,c,d){var s,r
d.a(b)
A.o(this).D(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
ag(a,b){var s
A.o(this).i("u(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a1(a,b){var s
A.o(this).i("u(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
bd(a,b){var s=A.Q(this,A.o(this).i("n.E"))
return s},
bc(a){return this.bd(0,!0)},
gq(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gI(a){return!this.gu(this).m()},
gL(a){return!this.gI(this)},
gaV(a){var s=this.gu(this)
if(!s.m())throw A.c(A.hV())
return s.gp()},
dB(a,b,c){var s,r
A.o(this).i("u(n.E)").a(b)
for(s=this.gu(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.c(A.hV())},
kr(a,b){return this.dB(0,b,null)},
P(a,b){var s,r
A.iq(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.lk(b,b-r,this,"index"))},
n(a){return A.uv(this,"(",")")}}
A.M.prototype={
n(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"}}
A.ah.prototype={
gE(a){return A.B.prototype.gE.call(this,0)},
n(a){return"null"}}
A.B.prototype={$iB:1,
S(a,b){return this===b},
gE(a){return A.fa(this)},
n(a){return"Instance of '"+A.im(this)+"'"},
gM(a){return A.jO(this)},
toString(){return this.n(this)}}
A.jv.prototype={
n(a){return""},
$ic_:1}
A.mG.prototype={
gkf(){var s,r=this.b
if(r==null)r=$.m6.$0()
s=r-this.a
if($.q1()===1e6)return s
return s*1000}}
A.aK.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iv6:1}
A.mX.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.F(b)
s=B.b.cb(b,"=")
if(s===-1){if(b!=="")a.l(0,A.pu(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.B(b,0,s)
q=B.b.bF(b,s+1)
p=this.a
a.l(0,A.pu(r,0,r.length,p,!0),A.pu(q,0,q.length,p,!0))}return a},
$S:51}
A.mW.prototype={
$2(a,b){throw A.c(A.ag("Illegal IPv6 address, "+a,this.a,b))},
$S:54}
A.fT.prototype={
geS(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gE(r.geS())
r.y!==$&&A.tf()
r.y=s
q=s}return q},
gbC(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.qS(s==null?"":s)
r.z!==$&&A.tf()
q=r.z=new A.cM(s,t.ph)}return q},
ghH(){return this.b},
gdC(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.Z(s,"v",1))return B.b.B(s,1,s.length-1)
return s},
gdJ(){var s=this.d
return s==null?A.rd(this.a):s},
gdL(){var s=this.f
return s==null?"":s},
ghk(){var s=this.r
return s==null?"":s},
ghl(){return this.c!=null},
ghn(){return this.f!=null},
ghm(){return this.r!=null},
n(a){return this.geS()},
S(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gdZ())if(p.c!=null===b.ghl())if(p.b===b.ghH())if(p.gdC()===b.gdC())if(p.gdJ()===b.gdJ())if(p.e===b.ghy()){r=p.f
q=r==null
if(!q===b.ghn()){if(q)r=""
if(r===b.gdL()){r=p.r
q=r==null
if(!q===b.ghm()){s=q?"":r
s=s===b.ghk()}}}}return s},
$iiK:1,
gdZ(){return this.a},
ghy(){return this.e}}
A.mU.prototype={
ghG(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cc(s,"?",m)
q=s.length
if(r>=0){p=A.fU(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.j2("data","",n,n,A.fU(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jq.prototype={
ghl(){return this.c>0},
ghn(){return this.f<this.r},
ghm(){return this.r<this.a.length},
gdZ(){var s=this.w
return s==null?this.w=this.iH():s},
iH(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.W(r.a,"http"))return"http"
if(q===5&&B.b.W(r.a,"https"))return"https"
if(s&&B.b.W(r.a,"file"))return"file"
if(q===7&&B.b.W(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
ghH(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gdC(){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gdJ(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.xS(B.b.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
ghy(){return B.b.B(this.a,this.e,this.f)},
gdL(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
ghk(){var s=this.r,r=this.a
return s<r.length?B.b.bF(r,s+1):""},
gbC(){if(this.f>=this.r)return B.bu
return new A.cM(A.qS(this.gdL()),t.ph)},
gE(a){var s=this.x
return s==null?this.x=B.b.gE(this.a):s},
S(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiK:1}
A.j2.prototype={}
A.lR.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.oR.prototype={
$1(a){return this.a.cT(this.b.i("0/?").a(a))},
$S:9}
A.oS.prototype={
$1(a){if(a==null)return this.a.f3(new A.lR(a===undefined))
return this.a.f3(a)},
$S:9}
A.os.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.rK(a))return a
s=this.a
a.toString
if(s.a0(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aI(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dJ(!0,"isUtc",t.y)
return new A.d2(r,0,!0)}if(a instanceof RegExp)throw A.c(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aO(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.x(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bS(n),p=s.gu(n);p.m();)m.push(A.cw(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.aY(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:56}
A.jb.prototype={
al(a){if(a<=0||a>4294967296)throw A.c(A.qD(u.w+a))
return Math.random()*a>>>0},
dH(){return Math.random()},
$ipa:1}
A.ek.prototype={
cu(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.aD()
l.aD()
l.aD()
l.aD()},
aD(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.K(o-n+(q-p)+(m-r),4294967296)>>>0},
al(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.c(A.qD(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aD()
return(p.a&s)>>>0}do{p.aD()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
dH(){var s,r=this
r.aD()
s=r.a
r.aD()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ipa:1}
A.m9.prototype={
F(){var s=this
if(B.a.a1(A.e([s.d,s.e,s.f,s.r,s.w],t.t),new A.ma()))throw A.c(B.dn)}}
A.ma.prototype={
$1(a){return A.a(a)<=0},
$S:21}
A.dl.prototype={
A(){return"QualityProfileKind."+this.b}}
A.dk.prototype={}
A.kl.prototype={}
A.km.prototype={}
A.ik.prototype={
F(){var s,r,q,p,o=this
for(s=A.T(["exposure",o.a,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.X(s,A.o(s).i("X<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.c(A.w("PostProcessState."+q+" must be >= 0: "+A.p(p),null))}s=o.z
if(s<1||s>8)throw A.c(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.dV.prototype={}
A.hG.prototype={
F(){var s,r,q,p,o,n,m=this,l=null
if(!B.be.ga2(0)||!m.b.ga2(0)||!m.r.ga2(0))throw A.c(A.w("FrameEnvironment colors must be finite",l))
s=m.c
if(isFinite(s)){r=m.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.c(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.p(s)+"/"+m.d,l))
s=m.w
if(!isFinite(s)||s<0)throw A.c(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.p(s),l))
s=m.x
if(s!=null){r=s.a
if(!r.ga2(0)||r.gby()<1e-12)A.k(A.w("DirectionalLight.direction must be finite and nonzero: "+r.n(0),l))
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
A.kM.prototype={}
A.ci.prototype={
S(a,b){if(b==null)return!1
return J.dM(b)===A.jO(this)&&b instanceof A.ci&&this.a===b.a&&this.b===b.b},
gE(a){return A.ch(A.jO(this),this.a,this.b,B.k)}}
A.b0.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bm.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.bW.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ig.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cb.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.da.prototype={
A(){return"HandleRejection."+this.b}}
A.l1.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.df.prototype={
ga2(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
S(a,b){if(b==null)return!1
return b instanceof A.df&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.ch(this.a,this.b,this.c,B.k)},
n(a){return"LinearColor("+A.p(this.a)+", "+A.p(this.b)+", "+A.p(this.c)+")"}}
A.ks.prototype={}
A.ij.prototype={}
A.ee.prototype={}
A.hb.prototype={
A(){return"AlphaMode."+this.b}}
A.cE.prototype={
F(){var s=null
if(this.a.length===0)throw A.c(A.w("MaterialDefinition.key must not be empty",s))
if(!isFinite(0))throw A.c(A.w(u.i,s))
if(this.w===0||this.x===0)throw A.c(A.w(u.p,s))
if(!isFinite(0.5))throw A.c(A.w(u.n,s))}}
A.cn.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.co.prototype={}
A.mZ.prototype={
F(){var s,r,q,p
for(s=0;s<6;++s){r=B.an[s]
q=r.b
p=q+r.c
if(p>14)throw A.c(A.w('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bN.prototype={
F(){var s,r,q,p,o,n=this
n.a.F()
s=n.b.length
if(B.c.ak(s,14)!==0)throw A.c(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.c(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga2(0)&&s.b.ga2(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.c(A.w("MeshData.localBounds must be a valid AABB",null))}}
A.lT.prototype={
F(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.c(A.w("resource plan must contain sceneColor and present",null))
if(s.a1(0,new A.lV()))throw A.c(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.c(A.w("resource history does not match vhsOutput ownership",null))}}
A.lV.prototype={
$1(a){return A.F(a).length===0},
$S:4}
A.m1.prototype={}
A.it.prototype={
hp(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.c(A.l("resource assembler is initialized"))
a.F()
s.a=a
s.c=1},
bo(){if(this.d)return
this.d=!0
this.a=null}}
A.dZ.prototype={
A(){return"DrawMode."+this.b}}
A.hh.prototype={
A(){return"BlendMode."+this.b}}
A.aU.prototype={}
A.iC.prototype={
F(){var s=this
if(s.a<0||s.b<0)throw A.c(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.c(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.c(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hp.prototype={
A(){return"ColorEncoding."+this.b}}
A.hy.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.ir.prototype={
F(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.cY(B.fl)
if(o.a!==0)A.k(A.aD(o,r,"contains unknown pipeline features"))
if(q.a===B.ap&&p.gL(p))A.k(A.aD(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.c(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dn.prototype={
A(){return"RendererState."+this.b}}
A.kO.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.i5.prototype={
l8(a){return this.a.bn(a)}}
A.lM.prototype={
$3(a,b,c){return new A.bW(A.a(a),A.a(b),A.bF(c))},
$S:66}
A.iJ.prototype={}
A.lO.prototype={
bU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.qY(d,new A.hJ(c.byteLength,B.b5,B.dz))
if(d.b!==B.f)A.k(A.l(e))
s=A.f(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.c2(d)
A.bQ(d,p)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a3(t.S)
for(n=a.a,m=0;m<6;++m){l=B.an[m]
k=A.rX(l.a)
if(!o.k(0,k))continue
j=A.wl(n,k,l)
if(d.b!==B.f)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.qY(d,new A.hJ(i.byteLength,B.b5,B.b4))
if(d.b!==B.f)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.f(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iJ(b,h,p,d,c.length/14|0)},
l3(a){var s=this.c.h(0,a.a)
if(s==null)throw A.c(A.d9(B.al,a))
this.b.bn(a)
return s},
aH(a){var s,r,q=this.c.aj(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.f(q.c.a))
s.deleteBuffer(A.f(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.f(r.a))}this.b.aH(a)},
dO(){var s,r,q,p
for(s=this.b.b8(),r=s.$ti,s=new A.bs(s.a(),r.i("bs<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.bU(p.b))}},
gbz(){return this.b.b8().bv(0,0,new A.lQ(),t.S)}}
A.lP.prototype={
$3(a,b,c){return new A.b0(A.a(a),A.a(b),A.bF(c))},
$S:81}
A.lQ.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:89}
A.cq.prototype={}
A.iF.prototype={
ei(){var s=this.a,r=A.pk(s,B.dC)
A.pl(s,r,0,$.ti())
return r},
lj(a,b){var s,r,q,p=this,o=p.b,n=o.bn(a),m=A.Q(n.b,t.nh)
B.a.l(m,0,b)
s=n.a
o.dS(a,new A.cq(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.pk(p.a,s)
o.l(0,r,q)}A.pl(p.a,q,0,b)},
l6(a){var s,r=this
if(a==null){s=r.d
s===$&&A.j()
return s}r.b.bn(a)
s=r.c.h(0,a.a)
if(s==null){s=r.d
s===$&&A.j()}return s},
dO(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.ei()
for(s=i.b.b8(),r=s.$ti,s=new A.bs(s.a(),r.i("bs<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.ag(o,new A.mR()))continue
l=A.pk(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.pl(p,l,k,j)}q.l(0,n.a,l)}},
gbz(){return this.b.b8().bv(0,0,new A.mQ(),t.S)}}
A.mP.prototype={
$3(a,b,c){return new A.bm(A.a(a),A.a(b),A.bF(c))},
$S:99}
A.mR.prototype={
$1(a){return t.nh.a(a)==null},
$S:100}
A.mQ.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:29}
A.db.prototype={}
A.hE.prototype={
jR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.md(A.e([],t.hJ),A.a3(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].a8(s,b)
o=s.jQ(a,!1)
if(o.b.length!==0)return new A.hF(o,B.ef)
q=o.a
n=A.J(q)
m=new A.S(q,n.i("m(1)").a(new A.kI()),n.i("S<1,m>")).aZ(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.a7(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.gT().a))throw A.c(A.l('RenderFeature "'+k.gac()+'" created a pass "'+i.gT().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.Y(l,new A.kJ(o))
return new A.hF(o,l)}}
A.kI.prototype={
$1(a){return t.A.a(a).a},
$S:30}
A.kJ.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.H(B.a.ho(s,new A.kG(a)),B.a.ho(s,new A.kH(b)))},
$S:31}
A.kG.prototype={
$1(a){return t.A.a(a).a===this.a.gT().a},
$S:6}
A.kH.prototype={
$1(a){return t.A.a(a).a===this.a.gT().a},
$S:6}
A.hF.prototype={}
A.e2.prototype={
A(){return"FrameQueueState."+this.b}}
A.kN.prototype={}
A.ai.prototype={
gbD(){var s=this.c,r=A.J(s)
return new A.O(s,r.i("u(1)").a(new A.lX()),r.i("O<1>"))},
gcn(){var s=this.c,r=A.J(s)
return new A.O(s,r.i("u(1)").a(new A.lY()),r.i("O<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.lX.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.B},
$S:10}
A.lY.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:10}
A.bM.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bj.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ff.prototype={
A(){return"ResourceFormat."+this.b}}
A.ca.prototype={
A(){return"GraphStage."+this.b}}
A.aJ.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.eb.prototype={
A(){return"ResourceAccess."+this.b}}
A.N.prototype={}
A.eI.prototype={}
A.m7.prototype={
ae(a){var s,r,q,p,o,n,m=this
a.F()
s=null
try{r=t.h
s=A.vq(m.a,a.c,r.a(a.d.gN().bc(0)),r.a(a.f),a.b)}catch(q){if(A.ab(q) instanceof A.fi){++m.e
throw q}else throw q}p=new A.eI(s)
r=m.b
o=a.a
n=r.h(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.f(n.b.a))
return p},
iN(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.al(s,s.r,s.e,a.$ti.i("al<1>")),r=this.a.a;s.m();)r.deleteProgram(A.f(s.d.b.a))}}
A.aH.prototype={
F(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.c(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a3(s)
for(q=this.d.gR(),q=q.gu(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.c(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.c(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a3(s)
for(s=this.e.gR(),s=s.gu(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.c(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.c(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.mb.prototype={}
A.aG.prototype={
a4(){var s=this
return A.qe(B.ci,s.f,B.ab,B.ac,!0,!0,!0,!0,s.r,B.af,B.ag,s.d,s.e,!0,!1,!1)}}
A.md.prototype={
jQ(a,b){var s=this.jz(t.Q.a(a),!1),r=this.a,q=A.J(r)
return new A.mc(A.ap(new A.O(r,q.i("u(1)").a(new A.mh()),q.i("O<1>")),t.A),s)},
jz(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.aW)
r=m.a
q=A.J(r)
p=q.i("O<1>")
o=A.Q(new A.O(r,q.i("u(1)").a(new A.mg()),p),p.i("n.E"))
m.ix(o,a,s)
m.iB(o,s)
m.iA(o,!1,s)
n=m.iE(o,s)
m.iC(o,n,s)
m.iD(o,s)
m.iz(o,n,s)
m.iy(o,s)
return s},
ix(a,b,c){var s,r,q,p
t.O.a(a)
t.Q.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.C.cY(b)
if(p.a!==0)B.a.k(c,new A.bj(B.dM,q.a,"missing capabilities: "+p.aX(0,", ")))}},
iB(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbD(),o=J.L(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bj(B.dH,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
iA(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.B)B.a.k(c,new A.bj(B.dK,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iE(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.a.a(b)
s=A.x(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcn(),n=J.L(o.a),o=new A.P(n,o.b,o.$ti.i("P<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bj(B.dG,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
iC(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbD(),p=J.L(q.a),q=new A.P(p,q.b,q.$ti.i("P<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.B)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bj(B.ba,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.cb(a,m)>s)B.a.k(c,new A.bj(B.ba,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
iD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbD(),o=J.L(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
for(l=q.gcn(),k=J.L(l.a),l=new A.P(k,l.b,l.$ti.i("P<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bj(B.dJ,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
iz(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbD(),o=J.L(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcn().kr(0,new A.mf(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bj(B.dI,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
iy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
s=t.S
r=A.x(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcn(),o=J.L(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.hX(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a3(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbD(),p=J.L(s.a),s=new A.P(p,s.b,s.$ti.i("P<1>"));s.m();){o=p.gp()
if(o.b===B.B)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.bV(s,!1,!1,p)
s=a.length
i=A.bV(s,!1,!1,p)
h=new A.me(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bj(B.dL,a[q].a,"participates in a resource dependency cycle"))}}}}
A.mh.prototype={
$1(a){t.A.a(a)
return A.p9()},
$S:6}
A.mg.prototype={
$1(a){t.A.a(a)
return A.p9()},
$S:6}
A.mf.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:10}
A.me.prototype={
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
r=A.jf(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:21}
A.mc.prototype={}
A.dB.prototype={$ibl:1}
A.fc.prototype={
bW(a){var s,r,q,p,o,n=a.c,m=n.a
if(!m.ga2(0))A.k(A.w("Transform.translation must be finite: "+m.n(0),null))
m=n.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)&&isFinite(m.d)))A.k(A.w("Transform.rotation must be finite: "+m.n(0),null))
if(!isFinite(1))A.k(A.w(u.u,null))
m=this.a.bn(a.a).d
n=n.am()
s=m.a
r=s.a
q=s.b
s=s.c
m=m.b
p=m.a
o=m.b
m=m.c
return A.c7(new A.S(A.e([new A.z(r,q,s),new A.z(p,q,s),new A.z(r,o,s),new A.z(p,o,s),new A.z(r,q,m),new A.z(p,q,m),new A.z(r,o,m),new A.z(p,o,m)],t.k),t.pc.a(n.gb_()),t.mz))},
gdE(){return new A.c3(this.kF(),t.fJ)},
kF(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdE(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.b8(),n=o.$ti,o=new A.bs(o.a(),n.i("bs<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.F()
f=k.a(g.a)
m.ai(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.am()
f=f.gb4()
d=A.J(f)
r=5
return a.b=new A.dB(h,g,A.c7(new A.S(f,d.i("z(1)").a(i.gb_()),d.i("S<1,z>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iuZ:1}
A.mj.prototype={
$3(a,b,c){return new A.cb(A.a(a),A.a(b),A.bF(c))},
$S:34}
A.o9.prototype={
$1(a){var s=this.a.w.a.l3(a),r=s.b!=null,q=r?s.d:s.e
return new A.fe(s.c,r,q)},
$S:28}
A.oa.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hx(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hx(b)
throw A.c(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.o7.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.o1.prototype={
$0(){return null},
$S:38}
A.o6.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.nY.prototype={
$0(){return this.a.at.a},
$S:39}
A.nZ.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.o8.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.o5.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.nW.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.nX.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.o2.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.o3.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.o4.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.j()
return s},
$S:2}
A.o0.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.o_.prototype={
$0(){return this.a.at.w},
$S:40}
A.nE.prototype={}
A.jk.prototype={$iuY:1}
A.j8.prototype={$iuj:1}
A.ms.prototype={
dN(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.F()
r=s.b.aQ(a,b)
s.c.l(0,r.a,s.bU(a))
this.d.k(0,r)
return r},
l1(a){if(this.r)A.k(A.l("resource library is disposed"))
this.a.aH(a)
this.d.aj(0,a)},
dM(a){var s,r=null
if(this.r)A.k(A.l("resource library is disposed"))
if(a.a.length===0)A.k(A.w("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.w(u.i,r))
if(a.w===0||a.x===0)A.k(A.w(u.p,r))
if(!isFinite(0.5))A.k(A.w(u.n,r))
s=this.b.a.aQ(a,r)
this.e.k(0,s)
return s},
hD(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.aQ(new A.cq(new A.hL(c,b,1,!1,B.W,B.W,B.b7),A.bV(1,null,!1,t.nh),!1),a)
this.f.k(0,s)
return s},
bo(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.Q(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.aj(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aH(k)}r=i.e
q=A.Q(r,A.o(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.r)(q),++l)o.aH(q[l])
q=i.d
p=A.Q(q,A.o(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.r)(p),++l)n.aH(p[l])
s.G(0)
r.G(0)
q.G(0)
i.r=!0}}
A.my.prototype={
gar(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
hq(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.as)throw A.c(A.l("renderer can only be initialized once"))
a.F()
b.F()
s=m.a
if(s.b===B.L)throw A.c(A.l("renderer device is context lost"))
m.e=B.fe
try{m.r=s.hA()
r=m.b
q=A.lU(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.F()
p.a=a
A.lU(a)
p.d=1
r.b.hp(q)
r=A.uD()
m.w=new A.ms(A.uE(s),r,A.v8(s),A.a3(t.l0),A.a3(t.fP),A.a3(t.lu))
r=new A.it()
p=new A.l0(s,r)
q=A.lU(a)
o=p.ej(q,a)
r.hp(q)
p.c=new A.il(new A.m1(q),o)
m.x=p
m.y=new A.m7(s,A.x(t.N,t.gY))
m.as=a
A.ry(m)
m.e=B.at}catch(n){s=m.y
if(s!=null){r=s.b
s.iN(new A.aR(r,A.o(r).i("aR<2>")))
r.G(0)}s=m.x
if(s!=null)s.bo()
s=m.w
if(s!=null)s.bo()
m.w=null
m.e=B.as
throw n}return A.p_(t.H)},
kh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bM()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.c(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.ai)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.mK(j,0,A.dJ(k.c,"count",t.S),A.J(j).c).bd(0,!1)
k.b=B.ds
q=i
try{A.wt(a3,r,s)
k=r.gdE()
j=t.p9
h=k.$ti
k=A.Q(A.i3(k,h.i("aU(n.E)").a(new A.mz()),h.i("n.E"),j),j)
p=k
J.tB(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.r)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.d9(B.al,h))
j=j.b
d=j.$ti
j.ai(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.d(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.K(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.U()
n=j+h}p=s.e
k=J.aQ(o)
j=n
h=J.aQ(o)
f=a3.w
d=f.a.gbz()
f=f.c.gbz()
c=a3.w
c.a.gbz()
c.c.gbz()
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
return new A.kO(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
jj(){var s,r,q,p=this
if(p.e!==B.bB)return
if(p.a.b===B.L)throw A.c(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.l("resource library is disposed"))
s.a.dO()
s.c.dO()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.l("GPU resource adapter is not initialized"))
s.c=new A.il(q.a,s.ej(A.lU(r),r))
s=p.y
s.c=null
s.b.G(0)
A.ry(p)
p.e=B.at},
bM(){var s=this.e
if(s!==B.at)throw A.c(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.L){this.e=B.bB
throw A.c(A.l("renderer context lost"))}}}
A.mz.prototype={
$1(a){return t.os.a(a).b},
$S:41}
A.b1.prototype={
H(a,b){var s,r=this
t.nL.a(b)
s=B.c.H(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.H(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.H(r.c.a,b.c.a)
if(s!==0)return s
return B.c.H(r.d,b.d)},
$iaw:1}
A.aZ.prototype={
H(a,b){var s
t.dP.a(b)
s=B.d.H(b.a,this.a)
if(s!==0)return s
return B.c.H(this.b,b.b)},
$iaw:1}
A.aq.prototype={}
A.oW.prototype={
$2(a,b){var s=t.p
return s.a(a).a.H(0,s.a(b).a)},
$S:42}
A.oX.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.oU.prototype={
$2(a,b){var s=t.c
return s.a(a).a.H(0,s.a(b).a)},
$S:44}
A.oV.prototype={
$1(a){return t.c.a(a).b},
$S:45}
A.ko.prototype={}
A.h9.prototype={
gb4(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.z(o,n,p),new A.z(r,n,p),new A.z(o,q,p),new A.z(r,q,p),new A.z(o,n,s),new A.z(r,n,s),new A.z(o,q,s),new A.z(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.dj.prototype={}
A.e3.prototype={
A(){return"FrustumTest."+this.b}}
A.kP.prototype={
lf(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b3
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.dt:B.du}}
A.kQ.prototype={
$4(a,b,c,d){var s=new A.z(a,b,c),r=new A.dj(s,d),q=Math.sqrt(s.gby())
if(q<1e-9)s=r
else{s=1/q
s=new A.dj(new A.z(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.cg.prototype={
V(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.cg(h)},
hF(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
hw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.cg(h)},
ga2(a){return B.u.ag(this.a,new A.lL())},
n(a){return"Mat4("+A.p(this.a)+")"}}
A.lL.prototype={
$1(a){return isFinite(A.h_(a))},
$S:12}
A.ip.prototype={
n(a){var s=this
return"Quat("+A.p(s.a)+", "+A.p(s.b)+", "+A.p(s.c)+", "+A.p(s.d)+")"}}
A.iG.prototype={
F(){var s=this.a
if(!s.ga2(0))throw A.c(A.w("Transform.translation must be finite: "+s.n(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.c(A.w("Transform.rotation must be finite: "+s.n(0),null))
if(!isFinite(1))throw A.c(A.w(u.u,null))},
am(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.qx(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.qx(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
n(a){return"Transform("+this.a.n(0)+", "+this.b.n(0)+", scale=1)"}}
A.z.prototype={
bp(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aP(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.z(s*r-q*p,q*o-n*r,n*p-s*o)},
gby(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gby())},
ga2(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga3(){var s=this,r=Math.sqrt(s.gby())
return r<1e-9?B.aJ:new A.z(s.a/r,s.b/r,s.c/r)},
S(a,b){if(b==null)return!1
return b instanceof A.z&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.ch(this.a,this.b,this.c,B.k)},
n(a){return"Vec3("+A.p(this.a)+", "+A.p(this.b)+", "+A.p(this.c)+")"}}
A.fu.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eG.prototype={
gac(){return this.f},
a8(a,b){B.a.k(a.a,new A.ai(this.f,B.y,A.e([new A.N(this.x,B.h),new A.N(this.y,B.j)],t.C)))},
a7(a){var s=this,r=s.a.ae(new A.aH(s.e,s.b,s.c,B.p,B.bt,B.bp)),q=A.c2(s.d),p=t.n,o=s.y,n=s.r===B.cf?new Float32Array(A.a0(A.e([1/o.c,0],p))):new Float32Array(A.a0(A.e([0,1/o.d],p)))
return A.e([new A.j_(new A.aG(s.f,A.e([new A.N(s.x,B.h),new A.N(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$ia7:1}
A.j_.prototype={
a9(a){return},
$iY:1,
gT(){return this.a}}
A.hi.prototype={
gac(){return"bloomComposite"},
a8(a,b){B.a.k(a.a,new A.ai("bloomComposite",B.y,A.e([B.c0,B.bV,new A.N($.oY(),B.j)],t.C)))},
a7(a){var s=this,r="bloomComposite",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.eA,B.en)),p=A.c2(s.d)
return A.e([new A.j0(new A.aG(r,A.e([B.c0,B.bV,new A.N($.oY(),B.j)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$ia7:1}
A.j0.prototype={
a9(a){return},
$iY:1,
gT(){return this.a}}
A.hw.prototype={
gac(){return"depthPrepass"},
a8(a,b){B.a.k(a.a,new A.ai("depthPrepass",B.dE,A.e([B.bW],t.C)))},
a7(a){var s=this,r="depthPrepass",q=s.a.ae(new A.aH(r,s.b,s.c,B.bs,B.bq,B.e7))
return A.e([new A.j3(new A.aG(r,A.e([B.bW],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$ia7:1}
A.j3.prototype={
a9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bP(b,a.af("sceneDepth").b)
A.b6(b,g.a.a4())
A.ei(b,B.ae,1,0,0,0)
A.cO(b,g.b.b)
A.A(b,"uVertexSnapGrid",new A.D(B.e,c.y))
A.A(b,"uAlbedo",B.E)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.r)(s),++m){l=s[m]
k=l.a.b
A.A(b,"uViewProjection",new A.D(B.o,new Float32Array(A.a0(d))))
A.A(b,"uModel",new A.D(B.o,new Float32Array(A.a0(k.c.am().a))))
g.iO(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.f)A.k(A.l(f))
n.bindVertexArray(A.f(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.f)A.k(A.l(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.f)A.k(A.l(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
iO(a,b,c){var s,r=this.d.$1(b),q=a.a
A.bq(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.D(B.e,0))
A.A(q,"uAffineWarpStrength",new A.D(B.e,0))
s=this.a.a4()
A.b6(q,r.at?s.dX(!1):s)},
$iY:1,
gT(){return this.a}}
A.fw.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eL.prototype={
gac(){return this.f},
a8(a,b){B.a.k(a.a,new A.ai(this.f,B.y,A.e([new A.N(this.w,B.h),new A.N(this.x,B.j)],t.C)))},
a7(a){var s=this,r=s.a.ae(new A.aH(s.e,s.b,s.c,B.p,B.bt,B.bp)),q=A.c2(s.d),p=t.n,o=s.x,n=s.r===B.cg?new Float32Array(A.a0(A.e([1/o.c,0],p))):new Float32Array(A.a0(A.e([0,1/o.d],p)))
return A.e([new A.j4(new A.aG(s.f,A.e([new A.N(s.w,B.h),new A.N(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$ia7:1}
A.j4.prototype={
a9(a){return},
$iY:1,
gT(){return this.a}}
A.hA.prototype={
gac(){return"dofComposite"},
a8(a,b){B.a.k(a.a,new A.ai("dofComposite",B.y,A.e([new A.N(this.z,B.h),B.bZ,B.bT],t.C)))},
a7(a){var s=this,r="dofComposite",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.ez,B.e6)),p=A.c2(s.d)
return A.e([new A.j5(new A.aG(r,A.e([new A.N(s.z,B.h),B.bZ,B.bT],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$ia7:1}
A.j5.prototype={
a9(a){var s,r=this,q=a.af("dofOutput"),p=r.r.$0(),o=a.b.a
A.bP(o,q.b)
A.b6(o,r.a.a4())
A.cO(o,r.b.b)
s=t._
A.bq(o,0,s.a(r.d.$0()))
A.A(o,"uSharp",B.E)
A.bq(o,1,s.a(r.e.$0()))
A.A(o,"uBlurred",B.a3)
A.bq(o,2,s.a(r.f.$0()))
A.A(o,"uSceneDepth",B.ca)
A.A(o,"uNear",new A.D(B.e,p.f))
A.A(o,"uFar",new A.D(B.e,p.r))
A.A(o,"uFocusDistance",new A.D(B.e,r.w))
A.A(o,"uFocusRange",new A.D(B.e,r.x))
A.A(o,"uStrength",new A.D(B.e,0))
A.bQ(o,r.c)
A.dv(o,3,0)},
$iY:1,
gT(){return this.a}}
A.hO.prototype={
gac(){return"grade"},
a8(a,b){B.a.k(a.a,new A.ai("grade",B.y,A.e([new A.N(this.r,B.h),B.bR],t.C)))},
a7(a){var s=this,r=s.a.ae(new A.aH("grade",s.b,s.c,B.p,B.ey,B.eo)),q=A.c2(s.d),p=s.r
return A.e([new A.ja(new A.aG("grade",A.e([new A.N(p,B.h),B.bR],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$ia7:1}
A.ja.prototype={
a9(a){var s=this,r=a.af(s.f.a),q=a.b.a
A.bP(q,a.af("gradeOutput").b)
A.b6(q,s.a.a4())
A.cO(q,s.b.b)
A.bq(q,0,r.b)
A.A(q,"uScene",B.E)
A.bq(q,1,t._.a(s.d.$0()))
A.A(q,"uLut",B.a3)
A.A(q,"uLutSize",new A.D(B.e,s.e))
A.A(q,"uStrength",new A.D(B.e,a.c.e.w))
A.bQ(q,s.c)
A.dv(q,3,0)},
$iY:1,
gT(){return this.a}}
A.hk.prototype={}
A.hj.prototype={
af(a){var s=this.a.h(0,a)
if(s==null)throw A.c(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$iuX:1}
A.f9.prototype={
gac(){return"present"},
a8(a,b){B.a.k(a.a,new A.ai("present",B.dF,A.e([new A.N(this.f,B.h)],t.C)))},
a7(a){var s=this,r=s.a.ae(new A.aH("present",s.b,s.c,B.p,B.eG,B.l)),q=A.c2(s.d),p=s.f
return A.e([new A.jl(new A.aG("present",A.e([new A.N(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$ia7:1}
A.jl.prototype={
a9(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bP(q,null)
A.b6(q,s.a.a4())
A.cO(q,s.b.b)
A.bQ(q,s.c)
A.bq(q,0,r.b)
A.dv(q,3,0)},
$iY:1,
gT(){return this.a}}
A.io.prototype={
gac(){return"ps1Quantize"},
a8(a,b){B.a.k(a.a,new A.ai("ps1Quantize",B.y,A.e([new A.N(this.e,B.h),B.bY],t.C)))},
a7(a){var s=this,r="ps1Quantize",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.eC,B.e1)),p=A.c2(s.d),o=s.e
return A.e([new A.jm(new A.aG(r,A.e([new A.N(o,B.h),B.bY],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$ia7:1}
A.jm.prototype={
a9(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bP(q,a.af("ps1Output").b)
A.b6(q,s.a.a4())
A.cO(q,s.b.b)
A.bq(q,0,r.b)
A.A(q,"uScene",B.E)
A.A(q,"uQuantizationBits",new A.D(B.e,a.c.e.z))
A.A(q,"uDitherStrength",new A.D(B.e,0))
A.bQ(q,s.c)
A.dv(q,3,0)},
$iY:1,
gT(){return this.a}}
A.dr.prototype={}
A.iw.prototype={
gac(){return"shadow"},
a8(a,b){B.a.k(a.a,new A.ai("shadowCaster",B.dD,A.e([B.bS],t.C)))},
a7(a){var s=this,r="shadowCaster",q=s.a.ae(new A.aH(r,s.b,s.c,B.bs,B.bq,B.em))
return A.e([new A.jo(new A.aG(r,A.e([B.bS],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$ia7:1}
A.jo.prototype={
a9(a){var s,r,q,p,o=this,n=a.af("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bP(s,n.b)
A.b6(s,o.a.a4())
A.ei(s,B.ae,1,0,0,0)
return}r=A.qI(l)
o.r.$1(r)
s=m.a
A.bP(s,n.b)
A.b6(s,o.a.a4())
A.ei(s,B.ae,1,0,0,0)
A.cO(s,o.b.b)
A.A(s,"uAlbedo",B.E)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.iQ(m,s[p],r)},
eM(a,b){var s,r=this.d.$1(b),q=a.a
A.bq(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.D(B.e,0))
s=this.a.a4()
A.b6(q,r.at?s.dX(!1):s)},
iQ(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dB){s=b.b
if(!s.r)return
n.eH(a,s.c,c)
n.eM(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bQ(s,r.a)
q=r.b
p=r.c
if(q)A.pi(s,p,0)
else A.dv(s,p,0)}else if(b instanceof A.db){s=b.a.b
if(!s.r)return
n.eH(a,s.c,c)
n.eM(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bQ(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pj(s,p,o,0)
else A.ph(s,p,0,o)}else throw A.c(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dM(b).n(0),null))},
eH(a,b,c){var s=a.a
A.A(s,"uModel",new A.D(B.o,new Float32Array(A.a0(b.am().a))))
A.A(s,"uLightViewProjection",new A.D(B.o,new Float32Array(A.a0(c.a.a))))},
$iY:1,
gT(){return this.a}}
A.oq.prototype={
$1(a){return this.a.a=a},
$S:49}
A.or.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.ix.prototype={
gac(){return"shadowedWorld"},
a8(a,b){var s=A.e([B.bX],t.C)
if(this.z)s.push(B.c_)
s.push(B.a2)
B.a.k(a.a,new A.ai("shadowedWorld",B.b9,s))},
a7(a){var s=this,r="shadowedWorld",q=s.a.ae(new A.aH(r,s.b,s.c,B.eF,B.eu,B.e_)),p=A.e([B.bX],t.C)
if(s.z)p.push(B.c_)
p.push(B.a2)
return A.e([new A.jp(new A.aG(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$ia7:1}
A.jp.prototype={
a9(a){var s,r,q,p,o,n,m,l=this,k=null,j=a.af("sceneColor"),i=a.b,h=a.c,g=h.c,f=h.d,e=h.e,d=l.r.$0(),c=i.a
A.bP(c,j.b)
A.b6(c,l.a.a4())
A.ei(c,B.aU,1,0,0,0)
A.cO(c,l.b.b)
A.A(c,"uAlbedo",B.E)
s=t._
A.bq(c,1,s.a(l.f.$0()))
A.A(c,"uShadowMap",B.a3)
r=t.n
A.A(c,"uShadowMapTexelSize",new A.D(B.c9,new Float32Array(A.a0(A.e([0.001953125,0.001953125],r)))))
A.bq(c,2,s.a(l.x.$0()))
A.A(c,"uSsao",B.ca)
A.A(c,"uVertexSnapGrid",new A.D(B.e,e.y))
A.A(c,"uSceneColorSize",new A.D(B.c9,new Float32Array(A.a0(A.e([l.y,l.z],r)))))
A.A(c,"uViewProjection",new A.D(B.o,new Float32Array(A.a0(g.c.a))))
A.A(c,"uView",new A.D(B.o,new Float32Array(A.a0(g.a.a))))
A.A(c,"uLightViewProjection",new A.D(B.o,new Float32Array(A.a0(d.a.a))))
s=f.b
A.A(c,"uFogColor",new A.D(B.D,new Float32Array(A.a0(A.e([s.a,s.b,s.c],r)))))
A.A(c,"uFogStart",new A.D(B.e,f.c))
A.A(c,"uFogEnd",new A.D(B.e,f.d))
A.A(c,"uFogHeightFalloff",new A.D(B.e,0))
A.A(c,"uFogDensity",new A.D(B.e,0))
s=l.w.$0()==null
q=s?k:B.F
if(q==null)q=B.F
p=s?k:B.a4
if(p==null)p=B.a4
A.A(c,"uLightPosition",new A.D(B.D,new Float32Array(A.a0(A.e([q.a,q.b,q.c],r)))))
A.A(c,"uLightDirection",new A.D(B.D,new Float32Array(A.a0(A.e([p.a,p.b,p.c],r)))))
o=s?k:1
A.A(c,"uLightRange",new A.D(B.e,o==null?1:o))
o=s?k:0.3
if(o==null)o=0.3
A.A(c,"uLightInnerCos",new A.D(B.e,Math.cos(o)))
s=s?k:0.5
if(s==null)s=0.5
A.A(c,"uLightOuterCos",new A.D(B.e,Math.cos(s)))
n=f.r
A.A(c,"uAmbientColor",new A.D(B.D,new Float32Array(A.a0(A.e([n.a,n.b,n.c],r)))))
A.A(c,"uAmbientIntensity",new A.D(B.e,f.w))
for(c=h.a,s=c.length,r=e.x,m=0;m<c.length;c.length===s||(0,A.r)(c),++m)l.eN(i,c[m],r)
for(h=h.b,c=h.length,m=0;m<h.length;h.length===c||(0,A.r)(h),++m)l.eN(i,h[m],r)},
eN(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dB){s=b.b
n.eO(a,s.c)
n.eI(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bQ(s,r.a)
q=r.b
p=r.c
if(q)A.pi(s,p,0)
else A.dv(s,p,0)}else if(b instanceof A.db){s=b.a.b
n.eO(a,s.c)
n.eI(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bQ(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pj(s,p,o,0)
else A.ph(s,p,0,o)}else throw A.c(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dM(b).n(0),null))},
eI(a,b,c,d,e){var s,r=this.d.$1(b),q=a.a
A.bq(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.D(B.e,0))
A.A(q,"uOpaqueCoverage",new A.D(B.e,c===B.ah?0:1))
A.A(q,"uAffineWarpStrength",new A.D(B.e,0))
A.A(q,"uMaterialTint",new A.D(B.D,new Float32Array(A.a0(A.e([r.c,r.d,r.e],t.n)))))
A.A(q,"uEmissiveStrength",new A.D(B.e,0))
A:{s=null
if(B.ah===c){switch(d.a){case 0:s=B.cH
break
case 1:s=B.cG
break}break A}if(B.K===c||B.cF===c){s=this.a.a4()
break A}}A.b6(q,r.at?s.dX(!1):s)},
eO(a,b){var s=b.am(),r=a.a
A.A(r,"uModel",new A.D(B.o,new Float32Array(A.a0(s.a))))
A.A(r,"uNormalMatrix",new A.D(B.o,new Float32Array(A.a0(s.hw().a))))},
$iY:1,
gT(){return this.a}}
A.iA.prototype={
gac(){return"ssaoOcclusion"},
a8(a,b){B.a.k(a.a,new A.ai("ssaoOcclusion",B.b8,A.e([B.bO],t.C)))},
a7(a){var s=this,r="ssaoOcclusion",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.eB,B.dZ)),p=A.c2(s.d)
return A.e([new A.js(new A.aG(r,A.e([B.bO],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$ia7:1}
A.js.prototype={
a9(a){var s=a.b.a
A.bP(s,a.af("ssaoRaw").b)
A.b6(s,this.a.a4())
A.ei(s,B.aT,1,1,1,1)
return},
$iY:1,
gT(){return this.a}}
A.iz.prototype={
gac(){return"ssaoBlur"},
a8(a,b){B.a.k(a.a,new A.ai("ssaoBlur",B.b8,A.e([B.bU,B.bN],t.C)))},
a7(a){var s=this,r="ssaoBlur",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.ev,B.er)),p=A.c2(s.d)
return A.e([new A.jr(new A.aG(r,A.e([B.bU,B.bN],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$ia7:1}
A.jr.prototype={
a9(a){var s=a.b.a
A.bP(s,a.af("ssaoBlurred").b)
A.b6(s,this.a.a4())
A.ei(s,B.aT,1,1,1,1)
return},
$iY:1,
gT(){return this.a}}
A.iO.prototype={
gac(){return"vhs"},
a8(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.ai("vhs",B.y,A.e([new A.N(this.r,B.h),B.bQ,B.bP],t.C)))},
a7(a){var s=this,r=s.a.ae(new A.aH("vhs",s.b,s.c,B.p,B.ew,B.e2)),q=A.c2(s.d),p=s.r
return A.e([new A.jy(new A.aG("vhs",A.e([new A.N(p,B.h),B.bQ,B.bP],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$ia7:1}
A.jy.prototype={
a9(a){var s,r=this,q=a.af(r.f.a),p=a.af("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bP(n,p.b)
A.b6(n,r.a.a4())
A.cO(n,r.b.b)
A.bq(n,0,q.b)
A.A(n,"uScene",B.E)
A.bq(n,1,t._.a(r.d.$0()))
A.A(n,"uHistory",B.a3)
A.A(n,"uTime",new A.D(B.e,r.e.$0()))
A.A(n,"uChromaWeight",new A.D(B.e,o.Q))
A.A(n,"uTrackingWeight",new A.D(B.e,m))
A.A(n,"uNoiseWeight",new A.D(B.e,o.at))
A.A(n,"uHeadSwitchWeight",new A.D(B.e,o.ax))
A.A(n,"uDropoutWeight",new A.D(B.e,o.ay))
A.A(n,"uGhostWeight",new A.D(B.e,s))
A.bQ(n,r.c)
A.dv(n,3,0)},
$iY:1,
gT(){return this.a}}
A.fe.prototype={}
A.iW.prototype={
gac(){return"world"},
a8(a,b){B.a.k(a.a,new A.ai("worldOpaqueTransparent",B.b9,A.e([B.a2],t.C)))},
a7(a){var s=this,r=s.a.ae(new A.aH("safeWorld",s.b,s.c,B.eE,B.p,B.dX))
return A.e([new A.jz(new A.aG("worldOpaqueTransparent",A.e([B.a2],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$ia7:1}
A.jz.prototype={
a9(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bP(j,a.af("sceneColor").b)
A.b6(j,n.a.a4())
A.ei(j,B.aU,1,0,0,0)
A.cO(j,n.b.b)
A.A(j,"uViewProjection",new A.D(B.o,new Float32Array(A.a0(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.F
q=t.n
A.A(j,"uLightDir",new A.D(B.D,new Float32Array(A.a0(A.e([r.a,r.b,r.c],q)))))
p=k.r
A.A(j,"uAmbientColor",new A.D(B.D,new Float32Array(A.a0(A.e([p.a,p.b,p.c],q)))))
A.A(j,"uAmbientIntensity",new A.D(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.r)(j),++o)n.em(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.em(m,l[o])},
em(a,b){var s,r,q,p,o,n=this
if(b instanceof A.db){s=b.a.b
n.eK(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bQ(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pj(s,p,o,0)
else A.ph(s,p,0,o)}else if(b instanceof A.dB){s=b.b
n.eK(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bQ(s,r.a)
q=r.b
p=r.c
if(q)A.pi(s,p,0)
else A.dv(s,p,0)}else throw A.c(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dM(b).n(0),null))},
eK(a,b){var s=b.am(),r=a.a
A.A(r,"uModel",new A.D(B.o,new Float32Array(A.a0(s.a))))
A.A(r,"uNormalMatrix",new A.D(B.o,new Float32Array(A.a0(s.hw().a))))},
$iY:1,
gT(){return this.a}}
A.kj.prototype={
bE(a){var s,r,q
a.F()
s=A.a3(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.ar
else q=r===0?B.ap:B.aq
return new A.dk(q,s)},
hQ(a){var s,r=this.bE(a).a
A:{if(B.ar===r){s=B.f5
break A}if(B.aq===r){s=B.f4
break A}s=B.Z
break A}return s}}
A.hK.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.eR.prototype={
A(){return"GpuBufferKind."+this.b}}
A.hM.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.hN.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.hJ.prototype={}
A.hL.prototype={}
A.d8.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.eT.prototype={}
A.eS.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dq.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.fi.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cL.prototype={
A(){return"UniformType."+this.b}}
A.D.prototype={}
A.dW.prototype={
A(){return"ClearMask."+this.b}}
A.hx.prototype={$iu2:1}
A.il.prototype={
hx(a){var s=this.b.h(0,a)
if(s==null)throw A.c(A.l("resource is not in candidate: "+a))
return s}}
A.l0.prototype={
gp(){var s=this.c
if(s==null)throw A.c(A.l("GPU resource adapter is not initialized"))
return s},
bo(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.iM(s.b)
r.b.bo()
r.c=null
r.e=!0},
ej(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.x(a6,a7),a9=A.e([],t.l2)
try{for(p=b0.a.a,p=A.jf(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.a6(s,"sceneColor#1")){j=J.aP(a8,"sceneColor")
j.toString
J.bT(a8,s,j)
continue}j=this.iP(s,b1)
if(n.b!==B.f)A.k(A.l(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.w("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.i(l.createFramebuffer())
if(h==null)A.k(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.aj
if(f&&!j.e)A.k(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.b6||g===B.dB
d=a5
c=a5
b=a5
a=a5
if(f){l.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.NONE)],k))
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
l.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}else{d=A.i(l.createTexture())
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
l.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}}a1=a5
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
if(g!==a0){A.pm(n,h,d,c,a1,a2,b,a)
A.k(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.cU(new A.fV(h,d,c,a1,a2,b,a,i,j.b))
J.h8(a9,r)
J.bT(a8,s,r)}a6=A.dY(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.J(a6).i("fg<1>"),a6=new A.fg(a6,p),a6=new A.ce(a6,a6.gq(0),p.i("ce<a1.E>")),o=this.a,n=t.jg,p=p.i("a1.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.pm(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
iP(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.eT(512,512,1,B.aj,!0)
if(a==="sceneDepth")return new A.eT(o,n,1,B.aj,!0)
s=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.eT(r,q,1,p?B.b6:B.dA,p)},
iM(a){var s,r,q,p,o,n=A.p5(t.f7.a(a).gau(),t._)
for(n=A.jf(n,n.r,A.o(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.pm(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.ep.prototype={
A(){return"_SlotState."+this.b}}
A.cS.prototype={
sb5(a){this.c=this.$ti.i("1?").a(a)}}
A.bY.prototype={
aQ(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.cS(B.a9,n.i("cS<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.hl
p.sb5(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c0(a){return this.aQ(a,null)},
ai(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.c(A.d9(B.bc,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.d9(B.bd,a))
s=q.b
if(s===B.aa||s===B.a9)throw A.c(A.d9(B.al,a))},
bn(a){var s,r,q=this.$ti
q.c.a(a)
this.ai(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dS(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.ai(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb5(b)},
aH(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.c(A.d9(B.bc,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.d9(B.bd,a))
r=q.b
if(r===B.aa||r===B.a9)throw A.c(A.d9(B.dN,a))
q.b=B.aa
q.sb5(null)
B.a.k(p.c,s);++p.e},
b8(){return new A.c3(this.kG(),this.$ti.i("c3<+(1,2)>"))},
kG(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$b8(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aa||j===B.a9){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.eo(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.hg.prototype={
A(){return"BlendEquation."+this.b}}
A.d_.prototype={
A(){return"BlendFactor."+this.b}}
A.ht.prototype={
A(){return"CullFace."+this.b}}
A.hv.prototype={
A(){return"DepthFunc."+this.b}}
A.eM.prototype={
dX(a){var s=this
return A.qe(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.az.prototype={
A(){return"StateField."+this.b}}
A.n9.prototype={
kb(a){var s,r=this.a
if(r==null)return A.lI(B.el,t.dB)
s=A.a3(t.dB)
if(r.a!==a.a)s.k(0,B.az)
if(r.b!==a.b)s.k(0,B.aA)
if(r.c!==a.c)s.k(0,B.aB)
if(r.d!==a.d)s.k(0,B.aC)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aD)
if(r.r!==a.r)s.k(0,B.aE)
if(r.w!==a.w)s.k(0,B.aF)
if(r.x!==a.x)s.k(0,B.aG)
return s}}
A.cU.prototype={$ic9:1}
A.fW.prototype={}
A.fV.prototype={}
A.iV.prototype={
ip(a){var s=this,r=A.f(s.a.canvas)
s.c=A.am(new A.n7(s))
s.d=A.am(new A.n8(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hA(){var s=this,r=v.G,q=s.bi(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bi(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bi(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bi(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bi(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.cw(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.cw(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.m9("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bi(a){var s=A.cw(this.a.getParameter(a))
return typeof s=="number"?B.d.aK(s):0},
$ium:1}
A.n7.prototype={
$1(a){A.f(a).preventDefault()
this.a.b=B.L},
$S:3}
A.n8.prototype={
$1(a){A.f(a)
this.a.b=B.f},
$S:3}
A.hz.prototype={
C(){var s=this
return A.T(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.he.prototype={
ic(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
j===$&&A.j()
s=k.a
A.i(j.connect(A.f(s.destination)))
r=k.d
r===$&&A.j()
A.f(r.gain).value=0.25
q=k.e
q===$&&A.j()
A.f(q.gain).value=0.12
p=k.f
p===$&&A.j()
A.f(p.gain).value=0.2
o=k.r
o===$&&A.j()
A.f(o.gain).value=0.4
n=k.w
n===$&&A.j()
A.f(n.gain).value=0.1
m=k.x
m===$&&A.j()
A.f(m.gain).value=1
for(r=[r,q,p,o,n,m],l=0;l<6;++l)A.i(r[l].connect(j))
r=k.y
r===$&&A.j()
A.f(r.gain).value=1
q=k.z
q===$&&A.j()
A.f(q.gain).value=0.35
A.i(p.connect(r))
A.i(o.connect(r))
o=k.Q
o===$&&A.j()
A.i(r.connect(o))
A.i(o.connect(q))
A.i(q.connect(j))
q=A.f(s.createBiquadFilter())
q.type="highpass"
A.f(q.frequency).value=80
k.dx!==$&&A.y()
k.dx=q
o=A.f(s.createBiquadFilter())
o.type="lowpass"
A.f(o.frequency).value=11e3
k.dy!==$&&A.y()
k.dy=o
A.i(q.connect(o))
A.i(o.connect(A.f(s.destination)))
j.disconnect(A.f(s.destination))
A.i(j.connect(q))},
hE(){var s=this.a
if(A.F(s.state)==="suspended")A.f(s.resume())},
jr(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.x
s===$&&A.j()
return s}r=B.bv.h(0,a)
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
iY(){var s,r,q,p,o,n,m,l=this.a,k=A.cs(l.sampleRate),j=B.d.aJ(k*2),i=A.f(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.dH()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dI(a,b){var s,r,q,p=this,o=p.as.h(0,a)
if(o==null)return
s=p.a
r=A.f(s.createBufferSource())
r.buffer=o
A.f(r.playbackRate).value=0.94+p.at.dH()*0.12
q=A.f(s.createGain())
A.f(q.gain).value=b
A.i(r.connect(q))
s=B.bv.h(0,a)
A.i(q.connect(p.jr(s==null?"transient":s)))
r.start()},
kV(a){return this.dI(a,1)},
cS(){return}}
A.k5.prototype={
$1(a){return this.hL(t.q.a(a))},
hL(a){var s=0,r=A.bc(t.b),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bd(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.af(A.aO(A.f(A.f(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.af(A.aO(A.f(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.af(A.aO(A.f(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ab(h)
A.f(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.p(l))
s=5
break
case 2:s=1
break
case 5:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$$1,r)},
$S:52}
A.ki.prototype={
dF(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.tA().aP(q).ga3()
p.d=q
p.c=p.b.aP(q).ga3()
p.a=a}}
A.kL.prototype={}
A.iD.prototype={}
A.kZ.prototype={
iS(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cw(s.getParameter(34047))
if(typeof p=="number")o.c=p},
ce(a,b,c,d,e,f){return this.kH(a,b,c,d,e,f)},
kH(a,b,c,a0,a1,a2){var s=0,r=A.bc(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$ce=A.bd(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.f(A.f(j.document).createElement("img"))
m.src=a
s=7
return A.af(A.aO(A.f(m.decode()),t.X),$async$ce)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aN(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.iS()
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
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$ce,r)},
cf(a,b,c){var s=!1
return this.kI(t.h.a(a),b,!1)},
kI(b0,b1,b2){var s=0,r=A.bc(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cf=A.bd(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.e([],t.kG)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.f(A.f(a0.document).createElement("img"))
j.src=k
s=10
return A.af(A.aO(A.f(j.decode()),a1),$async$cf)
case 10:J.h8(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.aQ(l)===0){a=A.l("texture array needs at least one layer")
throw A.c(a)}i=A.a(J.aP(l,0).width)
h=A.a(J.aP(l,0).height)
if(J.a6(i,0)||J.a6(h,0)||J.tC(l,new A.l_(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.c(a)}g=J.aQ(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.a5()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jP(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.a5()
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
break A}e=B.d.K(a+1,2)}}a=m.a
a7=A.i(a.createTexture())
if(a7==null){a=A.l("could not create texture array")
throw A.c(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aN(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.oZ(d,16)+")")
throw A.c(a)}c=0
for(;;){a1=c
a3=J.aQ(l)
if(typeof a1!=="number"){q=a1.cq()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aP(l,c)])
d=A.a(a.getError())
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.p(c)+" failed (WebGL error 0x"+J.oZ(d,16)+")")
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
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.oZ(d,16)+")")
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
A.f(v.G.console).error("texture array load failed: "+A.p(b))
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
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$cf,r)},
eP(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a6(A.cw(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.c(A.e0("shader compile failed: "+A.p(A.ru(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
av(a,b){var s=v.G,r=this.eP(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.eP(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a6(A.cw(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.c(A.e0("program link failed: "+A.p(A.ru(p,"getProgramInfoLog",o,t.w))))
return o},
ghv(){var s=A.cw(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aK(s):0},
dT(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.fb(0,c,B.c.ib(b.byteLength,p))*p
if(B.c.ak(o,4)!==0)A.k(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.tD(B.u.gjO(b),b.byteOffset+0*p,B.c.K(o,4)))}},
cR(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aN(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cN(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aN(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
eR(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.cR(q,a,b)
s=v.G
A.aN(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
el(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aN(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aN(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dG(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cN(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cN(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.eR(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.eR(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cN(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.el(a,b)
if(d)h.drawBuffers(A.e([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.c(A.e0("framebuffer incomplete"))
return new A.iD(g,n,o,m,q,p,l,e,a,b)},
hu(a,b,c,d){return this.dG(a,b,c,d,0)},
kL(a,b,c,d){return this.dG(a,b,!0,c,d)},
aY(a,b,c){return this.dG(a,b,c,!1,0)},
cP(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aN(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
aB(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cR(q,b,c)
if(p!=null)n.cR(p,b,c)
n.cP(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cP(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cP(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.el(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
l4(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aN(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aN(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aN(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
jZ(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.n
s.drawBuffers(A.e([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.e([A.a(q.WebGL2RenderingContext.NONE),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.e([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
aE(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.l_.prototype={
$1(a){A.f(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:53}
A.hQ.prototype={
dR(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].lt(a)}}
A.hS.prototype={
aI(a){if(this.f)return
A.qp(a,"requestPointerLock",t.X)},
j7(a){A.f(a)
if(A.aW(a.repeat))return
if(this.b.k(0,A.F(a.code)))this.c.k(0,A.F(a.code))},
j9(a){this.b.aj(0,A.F(A.f(a).code))},
jd(a){var s=this
A.f(a)
if(!s.f)return
s.d=s.d+s.eu(a,"movementX")
s.e=s.e+s.eu(a,"movementY")},
jb(a){var s=this
A.f(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
eu(a,b){var s=A.rq(a[b])
if(s==null)s=null
return s==null?0:s}}
A.i4.prototype={}
A.dh.prototype={
geq(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gE(B.c.cl(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gE(B.c.cl(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
S(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.dh&&A.jO(r)===A.jO(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gE(a){return this.geq()}}
A.lN.prototype={
ij(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].geq(),q)}}
A.cK.prototype={
ck(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.u.hT(s,0,m,l)
n.a=s}r=b.a6(0,a).aP(d.a6(0,a)).ga3()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fk(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fk(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fk(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fk(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fk(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fk(n.a,l,d,r,q,p,o,0,1,0,k,0)},
ah(a,b,c,d,e){return this.ck(a,b,c,d,e,1,1)}}
A.mi.prototype={
iZ(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.av(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.y()
m.w=r
q=s.av(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.y()
m.x=q
p=m.c
o=A.i(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.y()
m.y=o
o=A.i(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.y()
m.z=o
o=A.i(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.y()
m.Q=o
r=A.i(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.y()
m.as=r
r=A.i(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.y()
m.at=r
q=A.i(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.y()
m.ax=q
m.d=s.aY(m.ay,m.ch,!1)
m.e=s.aY(m.ay,m.ch,!1)
m.f=s.aY(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.y()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
j_(){var s
try{this.r=this.b.aY(384,216,!1)}catch(s){this.r=null}},
l2(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.aE(n)
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
p.aE(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.j()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aE(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.mr.prototype={
cD(a,b,c){var s,r,q
try{r=this.a.av(b,c)
return r}catch(q){s=A.ab(q)
r=A.e0(a+": "+A.p(s))
throw A.c(r)}}}
A.mk.prototype={}
A.fy.prototype={}
A.jt.prototype={}
A.ji.prototype={}
A.jg.prototype={}
A.ml.prototype={
ik(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([new A.dh(0,0,1,0),new A.dh(1,0,1,0),new A.dh(2,0,1,0)],t.mm),e=t.S
e=new A.lN(f,A.x(e,e))
e.ij(f)
h.dA=e
h.h1=1.9
h.dm=h.aU/h.aT
r=J.hX(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fy()
t.cu.a(r)
f=h.aw
e=f.av("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.av(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.av(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.av(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.av(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.aa!==$&&A.y()
h.aa=new A.mr(f,e,p,o,n,m)
h.b=t.d4.a(new A.mm(h))
h.eF()
h.eE()
o=h.ao
p=A.i(o.getUniformLocation(m,"uTex"))
h.fu!==$&&A.y()
h.fu=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.fv!==$&&A.y()
h.fv=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.f9!==$&&A.y()
h.f9=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.f8!==$&&A.y()
h.f8=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.fa!==$&&A.y()
h.fa=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.fb!==$&&A.y()
h.fb=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.fc!==$&&A.y()
h.fc=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.fd!==$&&A.y()
h.fd=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.fe!==$&&A.y()
h.fe=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.ff!==$&&A.y()
h.ff=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.fg!==$&&A.y()
h.fg=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.fh!==$&&A.y()
h.fh=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.fi!==$&&A.y()
h.fi=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.fj!==$&&A.y()
h.fj=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.fk!==$&&A.y()
h.fk=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.fl!==$&&A.y()
h.fl=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.fm!==$&&A.y()
h.fm=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fn!==$&&A.y()
h.fn=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.fo!==$&&A.y()
h.fo=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.fp!==$&&A.y()
h.fp=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.fq!==$&&A.y()
h.fq=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.fs!==$&&A.y()
h.fs=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.ft!==$&&A.y()
h.ft=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.fw!==$&&A.y()
h.fw=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.fz!==$&&A.y()
h.fz=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.dq!==$&&A.y()
h.dq=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.dr!==$&&A.y()
h.dr=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.ds!==$&&A.y()
h.ds=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.dt!==$&&A.y()
h.dt=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.du!==$&&A.y()
h.du=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.dv!==$&&A.y()
h.dv=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.dw!==$&&A.y()
h.dw=n
n=A.aW(A.f(A.f(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.br!==$&&A.y()
h.br=n
h.shs(16777215)
n=new A.mB(o,f,A.e([],t.aA),A.e([],t.df),A.e([],t.U),A.e([],t.kS))
m=n.c=f.av("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.dz!==$&&A.y()
h.dz=n
n=new A.mi(f,o)
n.iZ()
n.j_()
h.c3!==$&&A.y()
h.c3=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.cZ!==$&&A.y()
h.cZ=m
p=A.i(n.createBuffer())
p.toString
h.d_!==$&&A.y()
h.d_=p
n=A.i(n.createBuffer())
n.toString
h.d0!==$&&A.y()
h.d0=n
e=A.i(o.createVertexArray())
e.toString
h.d1!==$&&A.y()
h.d1=e
l=A.i(o.createVertexArray())
l.toString
h.d2!==$&&A.y()
h.d2=l
k=A.i(o.createVertexArray())
k.toString
h.d3!==$&&A.y()
h.d3=k
j=A.i(o.createVertexArray())
j.toString
h.d4!==$&&A.y()
h.d4=j
o.bindVertexArray(e)
h.cA(m)
o.bindVertexArray(l)
h.cA(p)
o.bindVertexArray(k)
h.cA(n)
o.bindVertexArray(null)
try{h.c8=f.hu(384,216,!0,!0)}catch(i){h.c8=null}s=4<f.ghv()?4:f.ghv()
e=s
if(typeof e!=="number")return e.a5()
if(e>1)try{h.bq=f.kL(h.aT,h.aU,!0,s)}catch(i){h.bq=null}try{h.aS=f.hu(h.aT,h.aU,!0,!0)}catch(i){h.bq=h.aS=null}if(h.aS!=null)try{h.c5=f.aY(h.gbJ(),h.gbI(),!1)
h.c6=f.aY(h.gbJ(),h.gbI(),!1)
h.c7=f.aY(h.aT,h.aU,!1)}catch(i){h.c7=h.c6=h.c5=null}},
gbJ(){var s=B.c.K(this.aT,4)
return s<1?1:s},
gbI(){var s=B.c.K(this.aU,4)
return s<1?1:s},
ap(a){return this.kJ(t.G.a(a))},
kJ(a){var s=0,r=A.bc(t.H),q=this,p,o,n,m,l,k,j
var $async$ap=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:p=new A.X(a,A.o(a).i("X<1,2>")).gu(0),o=q.aw
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.br.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.af(o.ce(k,l,!1,!1,!1,m==="grime"),$async$ap)
case 4:if(c!=null)q.en(m,l)
s=2
break
case 3:p=t.lS
j=A.Q(new A.bR(new A.S(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.mn(a)),t.dD),p),p.i("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.af(o.cf(j,12,!1),$async$ap)
case 7:q.c2=c
case 6:return A.ba(null,r)}})
return A.bb($async$ap,r)},
ba(){var s=0,r=A.bc(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$ba=A.bd(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.x(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.af(A.aO(A.f(A.f(g.window).fetch("shaders/"+A.p(m))),f),$async$ba)
case 13:l=a3
if(!A.aW(l.ok)){i=A.e0("HTTP "+A.p(A.pX(l,"status",t.S)))
throw A.c(i)}a=J
a0=n
a1=m
s=14
return A.af(A.aO(A.f(l.text()),i),$async$ba)
case 14:a.bT(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ab(c)
i=A.e0("shaders/"+A.p(m)+": fetch failed - "+A.p(k))
throw A.c(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.ji(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ab(b)
A.f(v.G.console).error("shader reload failed: "+A.p(j))
s=5
break
case 2:s=1
break
case 5:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$ba,r)},
ji(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.aa
q===$&&A.j()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.cD("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.cD("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.cD("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.eF()
i.eE()
q=i.f5
q=A.Q(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.br.h(0,s)
o.toString
i.en(s,o)}A.f(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ab(j)
A.f(v.G.console).error("shader recompile failed: "+A.p(r))}},
eE(){var s=this,r=s.ao,q=s.aa
q===$&&A.j()
s.h2=A.i(r.getUniformLocation(q.c,"uTex"))
s.h3=A.i(r.getUniformLocation(q.c,"uTime"))
s.h4=A.i(r.getUniformLocation(q.c,"uFlash"))
s.h5=A.i(r.getUniformLocation(q.c,"uVignette"))
s.h6=A.i(r.getUniformLocation(q.c,"uGrain"))
s.h7=A.i(r.getUniformLocation(q.c,"uDesat"))
s.h8=A.i(r.getUniformLocation(q.c,"uBloom"))
s.h9=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.hg=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.hj=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.hc=A.i(r.getUniformLocation(q.c,"uDepth"))
s.hd=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.f6=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.f7=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.he=A.i(r.getUniformLocation(q.c,"uNoise"))
s.hf=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.hh=A.i(r.getUniformLocation(q.c,"uLut"))
s.hi=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.ha=A.i(r.getUniformLocation(q.d,"uTex"))
s.dn=A.i(r.getUniformLocation(q.d,"uDir"))
s.hb=A.i(r.getUniformLocation(q.c,"uBlur"))},
en(a,b){var s,r,q,p=this
p.f5.k(0,a)
switch(a){case"bluenoise":s=p.aa
s===$&&A.j()
s=s.c
r=p.he
r===$&&A.j()
q=p.hf
q===$&&A.j()
p.bk(s,r,q,b)
break
case"lut-gothic":s=p.aa
s===$&&A.j()
s=s.c
r=p.hh
r===$&&A.j()
q=p.hi
q===$&&A.j()
p.bk(s,r,q,b)
break
case"grime":s=p.aa
s===$&&A.j()
s=s.b
r=p.RG
r===$&&A.j()
q=p.rx
q===$&&A.j()
p.bk(s,r,q,b)
break
case"glass":s=p.aa
s===$&&A.j()
s=s.b
r=p.x2
r===$&&A.j()
q=p.xr
q===$&&A.j()
p.bk(s,r,q,b)
break
case"soft":s=p.aa
s===$&&A.j()
s=s.b
r=p.fP
r===$&&A.j()
q=p.fQ
q===$&&A.j()
p.bk(s,r,q,b)
break}},
bk(a,b,c,d){var s=this.ao
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shs(a){var s=A.ol(a)
this.fH=s.a
this.fI=s.b
this.fJ=s.c},
bX(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.ak(a1,14)!==0)throw A.c(A.w("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.ao
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
b.e8(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.km++
b.d8.l(0,a1,new A.jt(e,d,i,s,s,a3))
return a1},
kd(a){var s,r,q,p=this,o=p.d8.h(0,a)
if(o==null)return
p.ew()
s=p.fN
r=p.fO
if(s!==r)p.eJ(r)
s=p.ao
r=p.dy
r===$&&A.j()
s.uniform1i(r,0)
r=p.dl
r===$&&A.j()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bs},
kv(a){var s,r=this.d8.aj(0,a)
if(r==null)return
s=this.ao
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
ew(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.d9)return
c.d9=!0
s=c.ao
r=c.aa
r===$&&A.j()
s.useProgram(r.b)
r=c.as
r===$&&A.j()
q=c.fL
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.j()
r=c.dd
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.j()
q=c.de
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.j()
r=c.df
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.j()
s.uniform1f(r,c.h1)
r=c.CW
r===$&&A.j()
s.uniform1f(r,c.dm)
r=c.cx
r===$&&A.j()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.j()
s.uniform1f(r,60)
r=c.db
r===$&&A.j()
q=c.fA?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.j()
s.uniform3f(q,c.dg/255*0.25,c.dh/255*0.25,c.di/255*0.25)
q=c.fx
q===$&&A.j()
r=c.fG
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.j()
s.uniform3f(r,c.fH,c.fI,c.fJ)
r=c.go
r===$&&A.j()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.j()
s.uniform1f(r,14)
r=c.k1
r===$&&A.j()
s.uniform1f(r,c.fK)
r=c.k2
r===$&&A.j()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.j()
s.uniform1i(r,c.dc.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.dc
l=m.length
if(n<l){if(!(n<l))return A.d(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],0)
continue}j=A.ol(k.b)
m=c.br
m===$&&A.j()
i=m?1:1+(A.oT(c.dj*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.d(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.d(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.d(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],k.d*i)}r=c.br
r===$&&A.j()
q=r?1:1+(A.oT(c.dj*2.5,40503)*2-1)*0
c.kj=q
p=c.p3
p===$&&A.j()
s.uniform1f(p,q)
q=c.p4
q===$&&A.j()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.j()
p=c.fC?1:0
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
q=c.fB
h=q?384:0
g=q?216:0
q=c.d5
p=q.a
if(p===B.aw){f=B.d.a_(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.fR
r===$&&A.j()
s.uniform2f(r,h,g)
r=c.dz
r===$&&A.j()
q=c.fV
q===$&&A.j()
s.uniform1f(q,0)
q=c.fW
q===$&&A.j()
s.uniform3f(q,0.0015,0.005,0)
q=c.fS
q===$&&A.j()
if(q!=null)r.co(0)
q=c.fT
q===$&&A.j()
if(q!=null)r.co(1)
q=c.fU
q===$&&A.j()
if(q!=null)r.co(2)
r.cp(0)
r.cp(1)
r.cp(2)
r=c.fX
r===$&&A.j()
if(c.c2==null)q=0
else{c.dA===$&&A.j()
q=3}s.uniform1i(r,q)
if(c.c2!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.c2)
r=c.dk
r===$&&A.j()
s.uniform1i(r,12)}r=c.h0
q=c.h_
p=c.fZ
o=c.fY
n=0
for(;;){m=c.dA
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
if(m!=null)s.uniform1i(m,d.d);++n}c.eJ(c.fO)
r=c.dy
r===$&&A.j()
s.uniform1i(r,0)
r=c.dl
r===$&&A.j()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eJ(a){var s
this.fN=a
s=this.dx
s===$&&A.j()
this.ao.uniformMatrix4fv(s,!1,a.a)},
aA(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.aT=a
j.aU=b
j.dm=b/a
s=j.c3
s===$&&A.j()
r=B.c.K(a,2)
s.ay=r
q=B.c.K(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.aB(p,r,q)
r=s.e
if(r!=null)s.b.aB(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.aB(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.aB(r,384,216)
o=j.aS
n=j.bq
m=j.c5
l=j.c6
k=j.c7
if(o!=null)j.aw.aB(o,a,b)
if(n!=null)j.aw.aB(n,a,b)
if(m!=null)j.aw.aB(m,j.gbJ(),j.gbI())
if(l!=null)j.aw.aB(l,j.gbJ(),j.gbI())
if(k!=null)j.aw.aB(k,a,b)},
jt(a){var s,r,q,p,o,n,m
for(s=this.fE,r=this.fD,q=1;q<a;++q){if(!(q<800))return A.d(s,q)
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
js(a){var s,r,q,p,o,n,m,l
for(s=this.fF,r=this.da,q=1;q<a;++q){if(!(q<4000))return A.d(s,q)
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
ks(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.d5=b4
s=b2.bt
r=0
if(s>0){for(s=b2.fF,q=0;p=b2.bt,q<p;++q)B.a.l(s,q,q)
b2.js(p)
for(p=b2.da,o=b2.d6,n=0;n<b2.bt;++n){if(!(n<4000))return A.d(s,n)
m=s[n]
if(!(m<p.length))return A.d(p,m)
l=p[m]
r=A.rL(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.da,p=b2.d6,q=0;q<b2.bt;++q){if(!(q<s.length))return A.d(s,q)
l=s[q]
r=A.rL(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bt=0
for(s=b2.fE,q=0;p=b2.c9,q<p;++q)B.a.l(s,q,q)
b2.jt(p)
for(p=b2.kk,o=b2.fD,k=0,n=0;n<b2.c9;++n){if(!(n<800))return A.d(s,n)
m=s[n]
if(!(m<o.length))return A.d(o,m)
j=o[m]
i=A.ol(0)
m=j.b
h=b2.df
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.de
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
e=b2.dd
k=A.rO(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.c9=0
s=b2.aw
o=b2.cZ
o===$&&A.j()
s.dT(o,b2.d6,r)
o=b2.d_
o===$&&A.j()
s.dT(o,p,k)
b2.ew()
p=b2.ao
o=b2.dy
o===$&&A.j()
p.uniform1i(o,0)
o=b2.d1
o===$&&A.j()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(r,14));++b2.bs
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.d2
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(k,14));++b2.bs
m=b2.d7
if(m>0){h=b2.d0
h===$&&A.j()
s.dT(h,b2.kl,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.d3
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.d7/14|0);++b2.bs}m=b2.c8
if(m!=null){a7=b2.aS
if(a7!=null)s.l4(m,a7)}a8=b2.aS
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.d4
m===$&&A.j()
p.bindVertexArray(m)
a3=b2.c5
a4=b2.c6
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.aa
g===$&&A.j()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.ha
g===$&&A.j()
p.uniform1i(g,0)
s.aE(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.dn
g===$&&A.j()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aE(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.dn,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.c7
if(b2.c4>0&&a6!=null){s.aE(a6)
g=b2.aa
g===$&&A.j()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dq
g===$&&A.j()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.dr
g===$&&A.j()
p.uniform1i(g,7)
g=b2.ds
g===$&&A.j()
p.uniform1f(g,0.03171953255425709)
g=b2.dt
g===$&&A.j()
p.uniform1f(g,1)
g=b2.du
g===$&&A.j()
p.uniform1f(g,0.5)
g=b2.dv
g===$&&A.j()
p.uniform1f(g,b2.c4)
g=b2.dw
g===$&&A.j()
p.uniform2f(g,1/b2.aT,1/b2.aU)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.c3
g===$&&A.j()
b0=g.l2(a8,0.5)
s.aE(null)
s=b2.aa
s===$&&A.j()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.h8
g===$&&A.j()
p.uniform1i(g,1)
g=b2.h9
g===$&&A.j()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.hb
s===$&&A.j()
b2.br===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.hc
s===$&&A.j()
p.uniform1i(s,7)
s=b2.hd
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.f6
s===$&&A.j()
p.uniform1i(s,11)
s=b2.f7
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.c4>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.h2
h===$&&A.j()
p.uniform1i(h,0)
h=b2.dj+=b3;++b2.fM
s=b2.h3
s===$&&A.j()
p.uniform1f(s,h)
h=b2.hg
h===$&&A.j()
s=b2.fM
p.uniform2f(h,B.c.ak(s*13,64),B.c.ak(s*29,64))
s=b2.h4
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h5
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h6
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h7
s===$&&A.j()
p.uniform1f(s,0)
s=b2.d5
if(s.a===B.N)b1=0*(1-s.b/1)
else b1=0
s=b2.hj
s===$&&A.j()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.mm.prototype={
$0(){var s=this.a.aa
s===$&&A.j()
return s.b},
$S:55}
A.mn.prototype={
$1(a){return this.a.h(0,A.F(a))},
$S:22}
A.nb.prototype={
gjD(){var s=this.b
s===$&&A.j()
return s},
eF(){var s,r,q,p,o,n,m=this,l=m.jE(),k=m.a
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
B.a.G(s)
r=m.ok
B.a.G(r)
q=m.p1
B.a.G(q)
p=m.p2
B.a.G(p)
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
m.fP=A.i(k.getUniformLocation(l,"uSoft"))
m.fQ=A.i(k.getUniformLocation(l,"uSoftOn"))
m.fR=A.i(k.getUniformLocation(l,"uInternal"))
m.fS=A.i(k.getUniformLocation(l,"uLightProj0"))
m.fT=A.i(k.getUniformLocation(l,"uLightProj1"))
m.fU=A.i(k.getUniformLocation(l,"uLightProj2"))
m.kn=A.i(k.getUniformLocation(l,"uShadow0"))
m.ko=A.i(k.getUniformLocation(l,"uShadow1"))
m.kp=A.i(k.getUniformLocation(l,"uShadow2"))
m.fV=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.dk=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dl=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.fW=A.i(k.getUniformLocation(l,"uShadowBias"))
m.fX=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.fY
B.a.G(s)
r=m.fZ
B.a.G(r)
q=m.h_
B.a.G(q)
p=m.h0
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.dk,12)},
cA(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.e8(56)},
e8(a){var s=this,r=s.c
r===$&&A.j()
s.bl(r,3,a,0)
r=s.f
r===$&&A.j()
s.bl(r,3,a,12)
r=s.d
r===$&&A.j()
s.bl(r,4,a,24)
r=s.e
r===$&&A.j()
s.bl(r,1,a,40)
r=s.r
r===$&&A.j()
s.bl(r,3,a,44)},
bl(a,b,c,d){var s=this.a
A.aN(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
jE(){return this.gjD().$0()}}
A.mB.prototype={
co(a){return null},
cp(a){return null}}
A.b.prototype={
U(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
a6(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
V(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
bp(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aP(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga3(){var s=this,r=s.gq(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.kh.prototype={
ln(a){var s,r,q,p,o,n=B.q.b7(a.C(),null)
this.a.f4(n)
s=A.f(A.f(v.G.window).localStorage)
r=A.bF(s.getItem("quarantine.save.active"))
q=A.bF(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
kY(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.f(A.f(v.G.window).localStorage)
r=A.bF(s.getItem("quarantine.save.active"))
q=A.bF(s.getItem("quarantine.save.previous"))
p=this.ek(r,a)
if(p!=null)return new A.dp(p,null)
o=this.ek(q,a)
if(o!=null)return new A.dp(o,"recovered previous save")
if(r==null)return B.fi
return B.fh}catch(n){return B.fg}},
ek(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.f4(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ab(q) instanceof A.K)return null
else throw q}}}
A.hB.prototype={
ie(a,b,c,d,e){if(this.a.length===0)throw A.c(B.di)
if(this.b<0)throw A.c(B.d3)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ap(q,t.i)
s=t.z
return A.dY(A.T(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bw.prototype={
A(){return"EndingKind."+this.b}}
A.ky.prototype={}
A.e_.prototype={
C(){var s=t.N
return A.T(["kind",this.a.b],s,s)}}
A.kB.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:57}
A.ii.prototype={
C(){var s,r=this,q=t.N,p=A.x(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.T(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
kB(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.a6(0,new A.b(0,1.3499999999999999,0))
return!new A.hl(s,s.U(0,new A.b(0,1.2000000000000002,0))).hr(a,r)}}
A.m2.prototype={
C(){return A.jF(this.a)}}
A.ec.prototype={
C(){return A.T(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.mx.prototype={
f4(a){var s,r,q,p,o,n,m,l=B.q.c1(a,null),k=t.f
if(!k.b(l))throw A.c(B.dm)
s=t.N
r=t.z
q=A.aS(l,s,r)
p=q.h(0,"version")
if(A.aM(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ag("unsupported save version "+A.p(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.d6)
k=A.aS(n,s,r)
return A.qG(A.aS(m,s,r),k,2)}}
A.dp.prototype={}
A.d7.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hH.prototype={}
A.kW.prototype={}
A.kV.prototype={
gaL(){var s=this.d
return new A.kW(s.a,s.b)},
gdK(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.T(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.T(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.T(["entryCount",m.e.b.a],k,t.S)
p=A.ql(m.c).C()
o=m.r
n=o.c
return new A.m2(A.jF(A.T(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.T(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
jH(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.c(A.aD(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bQ(B.dv)}if(n<a)this.bQ(B.dw)},
i5(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.ct(a)&&s.i4(b)},
l_(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cb)r.c=Math.min(1,r.c+0.1)},
i3(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.u_(j,A.ap(i.d,h).length)
if(a===B.c5)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.J(r)
A.tZ(j,new A.O(r,q.i("u(1)").a(new A.kX(k)),q.i("O<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.e0,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aJ(j.a/1*3)
B.a.k(r.r,new A.ed(q.a,a,b))
m=r.a
A.ua(m,q.a,n,k.b,A.ap(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.hV(B.ei)
s.r.k0(o,c)
l=B.d.aJ(j.b/1*6)
if(l>0)r.ct(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aR(i,A.o(i).i("aR<2>")).a1(0,new A.kY())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bQ(B.dy)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bQ(B.dx)},
bQ(a){var s=this;++s.y
B.a.k(s.w,new A.hH())
B.a.k(s.x,A.u0(A.wr(a),s.b,s.y-1))}}
A.kX.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.mC().i0(this.a.c,a.a)},
$S:58}
A.kY.prototype={
$1(a){return t.L.a(a).e},
$S:23}
A.k6.prototype={
dU(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
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
for(n=A.J(j),i=n.i("u(1)"),n=n.i("O<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.e4(new A.O(j,i.a(new A.kb(e)),n),r)
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
if(a1.length!==s.length||B.a.gbe(a1).b!==B.a.gbe(s).b)throw A.c(A.l("stair manifest mismatch"))}}
A.k7.prototype={
$1(a){return A.tM(a,this.a)},
$S:60}
A.k8.prototype={
$1(a){var s=this.a,r=A.jJ(a,"portal"),q=A.cX(r,"id"),p=A.cX(r,"a"),o=A.cX(r,"b"),n=A.h5(r,"width"),m=A.h5(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.F(r.h(0,"doorKit")):null
return new A.dP(q,p,o,n*s,m*s,l)},
$S:61}
A.k9.prototype={
$1(a){var s=A.jJ(a,"stair")
A.cX(s,"id")
return new A.dR(A.cX(s,"portalId"))},
$S:62}
A.ka.prototype={
$1(a){return typeof a=="string"?a:A.h1("exterior cell")},
$S:24}
A.kb.prototype={
$1(a){return t.hE.a(a).a===this.a.a},
$S:25}
A.dQ.prototype={}
A.kc.prototype={
$1(a){var s=this.a,r=A.jJ(a,"window"),q=A.cX(r,"id"),p=A.h5(r,"offset")
A.h5(r,"sill")
return new A.dS(q,p*s,A.h5(r,"width")*s,A.h5(r,"height")*s)},
$S:65}
A.dS.prototype={}
A.dP.prototype={}
A.dR.prototype={}
A.oo.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:26}
A.hl.prototype={
la(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.J(s)
q=new A.O(s,r.i("u(1)").a(new A.kk(e)),r.i("O<1>"))
p=!q.gu(0).m()?null:q.gaV(0)
if(p==null){n.d=null
return}if(!(n.bP(b,p.f)&&a==="hall"))o=n.bP(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.iX(p,B.d.a_(d,0,1))},
kN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.es(f,c,d)
s=g.iT(a,b,c,d)
if(s!=null){g.d=s
return g.es(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.jU(Math.sqrt(r*r+q*q)/0.08))
o=d.V(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.eV(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.hz(a,n)
n=i==null?n:i
h=g.eV(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.hz(a,n)
n=i==null?n:i}g.bS(m)
return new A.i6(m,n)},
iT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bP(c,l.f)&&n
j=q&&this.bP(c,l.r)&&o
if(k||j)return new A.iX(l,k?0:1)}return null},
es(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a6(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.a_(a.b+o/p,0,1)
n=A.qT(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bS(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.i6(n,k)},
bP(a,b){var s=a.a6(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
eV(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.ft(c,!1)
s=c.U(0,d)
this.bS(s)
if(this.hr(a,b)){this.bS(c)
return new A.ft(c,!0)}return new A.ft(s,!1)},
bS(a){var s=a.a6(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.U(0,new A.b(0,1.2000000000000002,0))},
hr(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aR(m)
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
return!this.jv(a,m,s)},
hz(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aR(k)
for(r=k.a,q=a.az(r),p=J.L(q.a),q=new A.P(p,q.b,q.$ti.i("P<1>"));q.m();){o=p.gp()
n=o.cj(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.eZ(k,o,s)&&this.iL(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jv(a,b,c){var s,r,q
for(s=a.az(b.a),r=J.L(s.a),s=new A.P(r,s.b,s.$ti.i("P<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.eZ(b,q,c))return!0}return!1},
eZ(a,b,c){var s,r,q,p=a.a,o=b.an(p),n=b.ad(p)
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
iL(a,b,c){var s,r=this
switch(b.an(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sjM(a){this.a=t.bf.a(a)}}
A.kk.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:67}
A.i6.prototype={}
A.ft.prototype={}
A.iX.prototype={}
A.eU.prototype={}
A.l5.prototype={
k0(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.A,r)
s=B.A[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
i1(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.c}return r},
i2(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.d}return r},
C(){return A.T(["landedCount",this.b],t.N,t.z)}}
A.mt.prototype={
im(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.y()
o.c=new A.hP(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.l(0,p.a,o.e9(p))}},
kZ(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.kv(r[o])
s.l(0,a,n.e9(m))},
e9(a){var s=A.t0(this.a,a),r=this.b,q=A.e([r.bX(s.a,1),r.bX(s.b,2),r.bX(s.c,0)],t.t),p=s.d
if(!B.u.gI(p))q.push(r.bX(p,0))
return q},
hN(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.C
s=l.a
r=A.at([s],t.N)
for(n=n.az(s),q=J.L(n.a),n=new A.P(q,n.b,n.$ti.i("P<1>"));n.m();){p=q.gp()
o=p.cj(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.k(0,o)}return r},
kc(a,b){var s,r,q,p,o=this,n=o.hN(a),m=o.b,l=o.c
l===$&&A.j()
l=t.b3.a(l.hI(n,b))
s=t.f0
m.dc=l.length<=4?A.ap(l,s):A.ap(A.mK(l,0,A.dJ(4,"count",t.S),A.J(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.kd(r[p])}}}
A.aE.prototype={}
A.kD.prototype={
gkE(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.ag(A.e([r,q,p,o,n,m],t.n),new A.kE())&&o>=r&&n>=q&&m>=p}}
A.kE.prototype={
$1(a){return isFinite(A.h_(a))},
$S:12}
A.l6.prototype={
F(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.ak(s,3)!==0}else s=!0
if(s)throw A.c(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.c(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gkE())throw A.c(A.w("QHMX bounds are invalid",m))
for(s=t.n,r=0;r<k;++r){q=l[r]
if(B.a.a1(A.e([q.a,q.b,q.c,q.d,q.e,q.f,q.r,q.w],s),new A.l8()))throw A.c(A.w("QHMX contains a non-finite vertex",m))
p=q.x>255
if(p)throw A.c(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,s=l.length,r=0;r<s;++r){o=l[r]
if(o>=k)throw A.c(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.l8.prototype={
$1(a){return!isFinite(A.h_(a))},
$S:12}
A.l7.prototype={
t(a,b,c,d,e,f,g){var s=this
s.b2(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.b2(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.b2(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.b2(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.b2(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.b2(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aE(a,b,c,m,n,o,0,0,p),r=new A.aE(g,h,i,m,n,o,1,1,p)
this.b3(s,new A.aE(d,e,f,m,n,o,1,0,p),r)
this.b3(s,r,new A.aE(j,k,l,m,n,o,0,1,p))},
b3(a,b,c){var s=this,r=s.b
B.a.k(r,s.cI(a))
B.a.k(r,s.cI(b))
B.a.k(r,s.cI(c))},
cI(a){var s,r,q=B.a.aX(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.c(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
jP(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.l6(A.ap(g,t.hZ),new Uint16Array(A.a0(this.b)),new A.kD(s,r,q,p,o,n))
h.F()
return h}}
A.d4.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.kF.prototype={
jV(a){var s
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
jW(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b0
break A}if("kitchen"===a||"cellar"===a){s=B.cN
break A}if("bathroom"===a){s=B.cO
break A}if("spare-room"===a){s=B.cP
break A}s=B.b0
break A}return this.jV(s)}}
A.cR.prototype={}
A.ob.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:68}
A.d5.prototype={
A(){return"FocusKind."+this.b}}
A.e1.prototype={}
A.mu.prototype={}
A.nQ.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:105}
A.cQ.prototype={}
A.eq.prototype={}
A.l4.prototype={
iu(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.lf(),a4=this.b,a5=A.aF(a4,!0,t.W)
B.a.G(a4)
s=A.e([],t.kl)
for(r=a5.length,q=t.x,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.aL(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.aT(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.b2(b.a,b.b,a3.$1(b.c)))}s.push(new A.ay(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.aF(a4,!0,t.gm)
B.a.G(a4)
s=A.e([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.cG(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cJ(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
iX(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.a0(n))throw A.c(A.l("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.a0(n))throw A.c(A.l("duplicate portal "+n))
q.l(0,n,m)}},
jB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
jA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.x(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.eY(o,i,h,g,f,e)
a5.e6(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.c(A.l(l+" references invalid portal "+d))
i=c.an(l)
h=c.ad(l)
g=c.w
f=c.x
a5.eY(o,i,h,g,0,f)
a5.e6(a6,l,c.an(l),c.ad(l),c.ad(l)+g,0,f)}}for(s=new A.X(a6,a6.$ti.i("X<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.bS(a)
r.Y(a,new A.lg())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.c(A.l("overlapping apertures on "+b.a))}}},
eY(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.c(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
e6(a,b,c,d,e,f,g){J.h8(t.gz.a(a).kX(b+":"+c.b,new A.le()),new A.fJ([d,e,f,g]))},
aR(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.i1(q),s.b+r.i2(q),s.c)},
az(a){var s=this.c,r=A.J(s)
return new A.O(s,r.i("u(1)").a(new A.lh(a)),r.i("O<1>"))},
kW(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.c(A.aD(a,"roomId","not a portal endpoint"))
r=this.aR(o)
q=b.ad(a)+b.w*0.5
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
glm(){return B.a.bv(this.b,0,new A.li(),t.S)}}
A.lf.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:70}
A.lg.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.H(a.a[0],b.a[0])},
$S:71}
A.le.prototype={
$0(){return A.e([],t.a3)},
$S:72}
A.lh.prototype={
$1(a){var s
t.gm.a(a)
s=this.a
return a.b===s||a.c===s},
$S:73}
A.li.prototype={
$2(a,b){return A.a(a)+t.W.a(b).e.length},
$S:74}
A.kC.prototype={}
A.mC.prototype={
i0(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.ag(s,new A.mD())}else s=!1
return s}}
A.mD.prototype={
$1(a){return t.hE.a(a).w},
$S:25}
A.l9.prototype={
f1(a){return B.a.dB(this.d,new A.la(a),new A.lb(a))},
dU(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="inventory placement ",a9=a7.a
if(a9!==1)throw A.c(A.l("unsupported house inventory schema "+a9))
a9=a7.b
if(a9!=="assets/house/house.json")throw A.c(A.l("inventory source changed: "+a9))
a9=a7.c
if(Math.abs(a9-1.5)>0.0001)throw A.c(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a3(s)
for(q=a7.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.c(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.c(A.l("invalid bounds for inventory asset "+m))}j=A.a3(s)
i=A.a3(s)
for(s=a7.e,q=s.length,p=b0.e,o=0;o<s.length;s.length===q||(0,A.r)(s),++o){h=s[o]
m=h.a
if(!j.k(0,m))throw A.c(A.l("duplicate inventory placement "+m))
l=h.b
g=p.h(0,l)
if(g==null)throw A.c(A.l(a8+m+" references "+l))
n=a7.f1(h.c)
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
A.la.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:75}
A.lb.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:76}
A.bU.prototype={}
A.cc.prototype={}
A.lo.prototype={}
A.ln.prototype={}
A.on.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:26}
A.bX.prototype={}
A.hP.prototype={
hI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.bz)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.bX(new A.b(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.jo(j),0.06))}}B.a.Y(s,new A.lc(b))
return A.mK(s,0,A.dJ(4,"count",t.S),t.f0).bc(0)},
jo(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.lc.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.H(a.a.a6(0,s).gq(0),b.a.a6(0,s).gq(0))},
$S:77}
A.eP.prototype={
A(){return"Floor."+this.b}}
A.cA.prototype={
A(){return"Facing."+this.b}}
A.aL.prototype={}
A.cG.prototype={
cj(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
an(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.c(A.aD(a,"roomId","not an endpoint of "+s.a))},
ad(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.c(A.aD(a,"roomId","not an endpoint of "+s.a))}}
A.aT.prototype={}
A.b2.prototype={}
A.cy.prototype={}
A.cJ.prototype={}
A.ay.prototype={}
A.ld.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.x(m,l)
for(s=n.a,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.T(["open",o.a,"locked",o.b],m,r))}l=A.x(m,l)
for(s=n.c,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.T(["lit",o.a,"examined",o.b],m,r))}return A.T(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a3(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.k(0,s[q].a)
r=A.a3(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.k(0,n[l].a)
e=A.a3(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.pO(new A.aj(o,A.o(o).i("aj<1>")),d)){d=f.b
if(A.pO(new A.aj(d,A.o(d).i("aj<1>")),r)){d=f.c
e=!A.pO(new A.aj(d,A.o(d).i("aj<1>")),e)}else e=n}else e=n
if(e)throw A.c(B.de)
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
A.f8.prototype={
C(){return A.T(["open",this.a,"locked",this.b],t.N,t.y)}}
A.f0.prototype={
C(){return A.T(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.kx.prototype={
$1(a){return this.a.v(0,A.F(a))},
$S:4}
A.cB.prototype={
A(){return"Hand."+this.b}}
A.n6.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.l:s},
e1(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.i2.prototype={
C(){var s,r,q,p=t.N,o=A.x(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.t[r]
o.l(0,q,s.h(0,q))}return A.T(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.S(B.t,t.ej.a(new A.lF(this)),t.dD).aX(0," \xb7 ")}}
A.lE.prototype={
$2(a,b){return new A.M(A.F(a),A.F(b),t.q)},
$S:78}
A.lF.prototype={
$1(a){return this.a.a.h(0,A.F(a))},
$S:22}
A.bh.prototype={
C(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.T(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.lq.prototype={
bm(a){t.G.a(a)
return a.a===5&&B.a.ag(B.t,new A.lx(this,a))},
e7(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bm(b))return null
s=this.e++
r=new A.bh(s,a,A.e([A.lD(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
cW(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bm(b))return!1
B.a.k(s.c,A.lD(b,c,B.X))
return!0},
jG(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bm(b))return!1
s.r=A.lD(b,0,B.bb)
return!0},
hV(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a0(p)&&!B.a.v(s,p))B.a.k(s,p)}},
lk(a){var s
if(!this.b.a0(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.Q(n,A.o(n).c)
B.a.X(n)
s=A.e([],t.bV)
for(r=q.b,r=new A.al(r,r.r,r.e,A.o(r).i("al<2>"));r.m();)s.push(r.d.C())
return A.T(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.lx.prototype={
$1(a){var s
A.F(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.v(this.a.a.h(0,a),s)},
$S:4}
A.kd.prototype={
cX(a,b){if(a.a===B.a0&&!a.c)return new A.lZ(b,B.bz)
return new A.lB(b,a.c,a.d,B.bz)},
k7(a){return this.cX(a,null)}}
A.dT.prototype={}
A.ke.prototype={
bE(a){var s,r=a==null?null:B.b.lh(a).toLowerCase()
if(r==="next")return B.ch
s=r!=null&&r!=="legacy"
return new A.dT(B.a_,!1,s,s?"unknown renderer query":null)}}
A.lC.prototype={}
A.lB.prototype={
gb6(){var s=this.b
s=s==null?null:s.gb6()
return s==null?A.mp("legacy",A.e([],t.s),this.c,this.d,"legacy"):s},
aG(){if(this.e===B.bA)throw A.c(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aG()
this.e=B.v},
aA(a,b){var s
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aA(a,b)},
aC(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.q.b7(A.T(["backend","legacy","interpolation",0,"facts",A.jF(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aC(a)},
aW(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.q.b7(A.T(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aW(a)}}
A.m_.prototype={}
A.lZ.prototype={
gb6(){var s=this.b
s=s==null?null:s.gb6()
return s==null?A.mp("next",A.e([],t.s),!1,null,"safe"):s},
aG(){if(this.c===B.bA)throw A.c(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aG()
this.c=B.v},
aA(a,b){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.c(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aA(a,b)},
aC(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a1){p=q==null
if(p||!q.gcV()){if(s.c!==B.a1)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.v
if(!p)q.hB()}p=s.c
if(p===B.a1)return}if(p!==B.v)A.k(A.l(r))
B.q.b7(A.T(["backend","next","interpolation",0,"facts",A.jF(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gcV()){if(s.c!==B.v)A.k(A.l(r))
s.c=B.a1
q.ht()
return}q.aC(a)}},
aW(a){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
B.q.b7(A.T(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aW(a)}}
A.m0.prototype={
jT(a,b){var s,r,q,p,o,n,m
a.F()
s=B.aO.bE(a)
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
o=A.Q(o,A.o(o).c)
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
A.fd.prototype={
A(){return"RendererBackendKind."+this.b}}
A.dm.prototype={
A(){return"RendererBackendState."+this.b}}
A.mq.prototype={}
A.is.prototype={}
A.mo.prototype={
il(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
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
A.b3.prototype={
A(){return"SleepQuality."+this.b}}
A.aV.prototype={
A(){return"SleepLocation."+this.b}}
A.ed.prototype={}
A.kp.prototype={
ct(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
i4(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.T(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.T(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kq.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:79}
A.kr.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:80}
A.hT.prototype={
A(){return"InteractionType."+this.b}}
A.dx.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.na.prototype={}
A.dw.prototype={}
A.hr.prototype={}
A.lj.prototype={}
A.ll.prototype={
dY(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.Y(p,new A.lm())
return p},
k_(a,b){var s,r,q,p,o,n=b.b
if(n.gI(n))return B.hi
s=t.N
r=A.a3(s)
q=A.a3(s)
for(s=n.gN(),s=s.gu(s),p=a.c;s.m();){o=s.gp()
if(B.a.gO(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.dw(B.a8,r)
s=r.a
o=B.a.gO(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gO(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dw(B.ce,r)
return new A.dw(B.aN,r)},
jh(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.hr(e,!1,B.hh,null)
s=p.d===c
r=this.k_(p,d)
q.lk(e)
return new A.hr(e,s,r,r.a===B.a8&&s?'The world says "'+d.c+'". The entry says "'+B.a.gO(p.c).n(0)+'".':null)},
k8(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.a8)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.lj(B.a.gO(s.c).n(0)+" but "+A.p(a.f))}}
A.lm.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.H(s.a(b).a,a.a)},
$S:13}
A.by.prototype={
A(){return"RuptureStep."+this.b}}
A.mv.prototype={}
A.bZ.prototype={}
A.mw.prototype={
ge2(){var s=B.ao.h(0,this.a)
return s==null?0:s},
i7(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.x)s=q.e
else s=!0
if(s)return B.bk
r=A.pE(b)
s=q.c
B.a.G(s)
B.a.J(s,r)
B.a.G(q.d)
q.a=B.N
q.b=0
q.e=!1
return A.e([B.cB],t.e_)},
jI(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.c(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.x||a===0)return B.bk
s=A.e([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.x))break
A:{q=l.a
p=B.ao.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.H)l.jx(s)
p=l.b
o=B.ao.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.bZ())
if(q===B.H){l.a=B.x
l.b=0
l.e=!0
B.a.k(s,B.cA)}else{p=q.a+1
if(!(p<7))return A.d(B.bj,p)
l.a=B.bj[p]
l.b=0
B.a.k(s,new A.bZ())}}}return A.ap(s,t.k8)},
C(){var s=this,r=t.N
return A.T(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ap(s.c,r),"extinguishedMantles",A.ap(s.d,r),"completed",s.e],r,t.z)},
jx(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.a_(B.d.bu(l.b/l.ge2()*A.ap(s,r).length),0,A.ap(s,r).length)
p=l.d
for(;;){o=A.aF(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aF(s,!1,r)
o.$flags=3
n=o
o=A.aF(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.bZ())}}}
A.hI.prototype={
gbg(){var s=this.b
if(s<6||s>18)return 0
return B.d.a_((s-6)/12,0,1)}}
A.of.prototype={
$1(a){var s=B.c.bT(this.a,a)&255
return B.c.a_(B.d.aJ(s+((B.c.bT(this.b,a)&255)-s)*this.c),0,255)},
$S:82}
A.mH.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.eg(g.a),e=t.N,d=A.x(e,t.P)
for(s=g.b,s=new A.X(s,A.o(s).i("X<1,2>")).gu(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.jC(q,r.b))}s=A.eg(g.r)
q=A.eg(g.w)
p=A.eg(g.x)
o=A.x(e,t.l_)
for(n=g.as,n=new A.X(n,A.o(n).i("X<1,2>")).gu(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.L(l.b);i.m();){h=i.gp()
j.push(A.T(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.T(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
jC(a,b){var s,r=A.eg(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.eg(q.b9(0,new A.mI(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gL(s))r.l(0,"_ambient",A.eg(s.b9(0,new A.mJ(),t.S,t.z)))
return r}}
A.mI.prototype={
$2(a,b){return new A.M(A.a(a),t.ey.a(b).C(),t.iI)},
$S:83}
A.mJ.prototype={
$2(a,b){return new A.M(A.a(a),t.bR.a(b).C(),t.iI)},
$S:84}
A.du.prototype={
C(){return A.T(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dt.prototype={
C(){return A.T(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fq.prototype={
C(){var s=t.N
return A.T(["field",this.a,"value",this.b],s,s)}}
A.mM.prototype={
bA(){var s=0,r=A.bc(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bA=A.bd(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.af(A.aO(A.f(A.f(v.G.window).fetch("res/text.json")),t.m),$async$bA)
case 6:n=b
s=7
return A.af(A.aO(A.f(n.text()),t.N),$async$bA)
case 7:m=b
l=A.xE(m)
j=J.aP(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.aP(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aP(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aP(l,"documents")
j.toString
i.a(j)
j=J.aP(l,"street")
j.toString
i.a(j)
j=J.aP(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aP(l,"nights")
j.toString
i.a(j)
j=J.aP(l,"endings")
j.toString
o.w=i.a(j)
j=J.aP(l,"records")
j.toString
i.a(j)
j=J.aP(l,"cues")
j.toString
i.a(j)
j=J.aP(l,"claims")
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
case 5:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$bA,r)},
hM(a){var s,r,q,p=this.a
p===$&&A.j()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gR().dV(0,new A.mN())
r=p.$ti
q=t.N
q=A.x(q,q)
q.jF(new A.cf(p,r.i("M<m,m>(1)").a(new A.mO()),r.i("cf<1,M<m,m>>")))
return q}return null},
hP(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.j()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aK(p)||o!==B.d.aK(o))return n
return new A.du(B.d.aK(p),B.d.aK(o))},
hO(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.j()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aK(p)||typeof o!="string"||typeof n!="string")return m
return new A.dt(B.d.aK(p),o,n)},
ll(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.x(a1,t.iu),a3=A.x(a1,t.c_),a4=A.x(a1,t.d8),a5=t.h,a6=A.x(a1,t.iD),a7=b.b
a7===$&&A.j()
a7=new A.X(a7,A.o(a7).i("X<1,2>")).gu(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.x(a,a0)
for(o=o.gR(),o=o.gu(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.m4(l,null):null
if(k==null||!q.b(m.b))continue
j=A.x(a1,a1)
for(m=q.a(m.b).gR(),m=m.gu(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.F(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.x(a,r)
for(m=n.$ti.i("cD<1>"),l=new A.cD(n,n.r,n.e,m);l.m();){i=l.d
g=b.hP(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.x(a,s)
for(m=new A.cD(n,n.r,n.e,m);m.m();){l=m.d
e=b.hO(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.j()
a7=new A.X(a7,A.o(a7).i("X<1,2>")).gu(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.L(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.fq(A.F(c.h(0,"field")),A.F(c.h(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.mH(A.x(a,a0),a2,a3,a4,A.x(a1,a5),A.x(a1,a5),A.x(a,a5),A.x(a,a5),A.x(a,a5),A.x(a1,a5),A.x(a1,a5),A.x(a1,a5),a6)}}
A.mN.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:85}
A.mO.prototype={
$1(a){t.d7.a(a)
return new A.M(A.F(a.a),A.F(a.b),t.q)},
$S:86}
A.k1.prototype={
e_(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.f(v.G.window).setTimeout(A.am(new A.k2(this)),7000))}}
A.k2.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:24}
A.kg.prototype={
dR(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.kt.prototype={
ig(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.W(a,k,"door-speaker",j)
l.b!==$&&A.y()
l.b=i
s=A.W(a,k,"door-line",j)
l.c!==$&&A.y()
l.c=s
r=l.a
A.f(r.appendChild(i))
A.f(r.appendChild(s))
s=A.W(a,k,"door-cite-list",j)
l.e!==$&&A.y()
l.e=s
i=A.W(a,k,"door-cite-result",j)
l.f!==$&&A.y()
l.f=i
A.f(r.appendChild(s))
A.f(r.appendChild(i))
for(i=A.jE,s=l.r,q=0;q<5;++q){p=B.e8[q]
o=A.f(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.ku(l,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.eE()]=n
o.addEventListener("click",m)
A.f(r.appendChild(o))
B.a.k(s,o)}i=A.W(a,"button","door-continue","continue")
l.d!==$&&A.y()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.am(new A.kv(l)))
A.f(r.appendChild(i))
A.f(A.i(a.body).appendChild(r))},
e0(a,b){var s,r,q,p=this
p.z=!0
s=p.b
s===$&&A.j()
s.textContent=a
s=p.c
s===$&&A.j()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)A.f(s[q].style).display=""
s=p.d
s===$&&A.j()
A.f(s.style).display="none"
s=p.e
s===$&&A.j()
s.textContent=""
s=p.f
s===$&&A.j()
s.textContent=""
p.a.className="door visible"},
cr(a){var s,r,q=this,p=q.c
p===$&&A.j()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.r)(p),++r)A.f(p[r].style).display="none"
p=q.d
p===$&&A.j()
A.f(p.style).display=""
p=q.f
p===$&&A.j()
p.textContent=""},
hZ(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.j()
s.textContent=""
for(r=b.length,q=A.jE,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.f(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.kw(o,this)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eE()]=o
m.addEventListener("click",l)
A.f(s.appendChild(m))}},
ca(){var s,r=this
r.z=!1
s=r.e
s===$&&A.j()
s.textContent=""
s=r.f
s===$&&A.j()
s.textContent=""
r.a.className="door"},
skP(a){this.w=t.ov.a(a)},
skR(a){this.x=t.jE.a(a)},
skQ(a){this.y=t.bZ.a(a)}}
A.ku.prototype={
$1(a){var s
A.f(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.kv.prototype={
$1(a){var s
A.f(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.kw.prototype={
$1(a){var s
A.f(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.kz.prototype={
ih(a){var s,r,q,p=this,o=p.a,n=A.W(o,"h1","journal-title",null)
p.f!==$&&A.y()
p.f=n
s=A.W(o,"div","ending-copy",null)
p.r!==$&&A.y()
p.r=s
r=p.b
A.f(r.appendChild(n))
A.f(r.appendChild(s))
q=A.W(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.am(new A.kA(p)))
A.f(r.appendChild(q))},
i_(a,b){var s,r,q,p,o,n,m=this
t.h.a(b)
s=m.f
s===$&&A.j()
s.textContent=a.a.b
s=m.r
s===$&&A.j()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o=b[p]
n=A.f(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.f(s.appendChild(n))}m.ci()},
skS(a){this.w=t.jE.a(a)}}
A.kA.prototype={
$1(a){var s
A.f(a)
s=this.a
s.aF()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.l2.prototype={
ii(a){var s,r="help-copy",q=this.b,p=this.a
A.f(q.appendChild(A.W(p,"h1","journal-title","house notes")))
A.f(q.appendChild(A.W(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.f(q.appendChild(A.W(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.W(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.am(new A.l3(this)))
A.f(q.appendChild(s))}}
A.l3.prototype={
$1(a){A.f(a)
return this.a.aF()},
$S:1}
A.lr.prototype={
iw(){var s,r=this,q=r.a,p=A.W(q,"div","page-turn",null),o=A.W(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.am(new A.ls(r)))
s=A.W(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.am(new A.lt(r)))
q=A.W(q,"span","right-day-label",null)
r.Q!==$&&A.y()
r.Q=q
A.f(p.appendChild(o))
A.f(p.appendChild(q))
A.f(p.appendChild(s))
return p},
eW(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ec(s.CW+a,r)
s.eC()},
ec(a,b){if(a<1)return 1
if(a>b)return b
return a},
jk(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.j()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.j()
s.textContent=""
for(s=j.w.dY(),r=s.length,q=A.jE,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gO(n.c).n(0)
l=A.f(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.lu(j,n,l)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eE()]=m
l.addEventListener("click",k)
A.f(i.appendChild(l))}},
eC(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.j()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.o(p).i("al<2>"),n=new A.al(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.lv())
j.eB(i,r)
i=j.Q
i===$&&A.j()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.j()
s=A.e([],s)
for(r=new A.al(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.lw())
j.eB(i,s)
k=B.d.a_(q.f/4,0,1)
i=j.as
i===$&&A.j()
A.f(i.style).setProperty("width",B.d.cl(k*100,1)+"%")},
eB(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.f(a.appendChild(this.iU(b[r])))},
iU(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.W(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.f(k.createElement("div"))
n.className=q
n.textContent=o
A.f(n.style).setProperty("--shake",B.d.n(p.b))
A.f(j.appendChild(n))}m=a.r
if(m!=null){l=this.j3(m,!1)
l.className=A.F(l.className)+" margin"
A.f(j.appendChild(l))}return j},
j3(a,b){var s=b?"hand-line struck":"hand-line",r=A.W(this.a,"div",s,a.n(0))
A.f(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.ls.prototype={
$1(a){A.f(a)
return this.a.eW(-1)},
$S:1}
A.lt.prototype={
$1(a){A.f(a)
return this.a.eW(1)},
$S:1}
A.lu.prototype={
$1(a){var s,r,q
A.f(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:1}
A.lv.prototype={
$2(a,b){var s=t.L
return B.c.H(s.a(a).a,s.a(b).a)},
$S:13}
A.lw.prototype={
$2(a,b){var s=t.L
return B.c.H(s.a(a).a,s.a(b).a)},
$S:13}
A.f7.prototype={
bG(a){var s=this.b
s.className="panel"
A.f(s.style).setProperty("--panel-fade","0.25s")
A.f(A.i(this.a.body).appendChild(s))},
ci(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.F(n.className),"open"))return
s=$.lW
if(s!=null&&s!==o)s.aF()
$.lW=o
r=o.a
o.d=A.i(r.activeElement)
A.qp(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.am(o.gje())
o.e=q
r.addEventListener("keydown",q)
p=A.rz(n)
if(p.length!==0)B.a.gaV(p).focus()},
aF(){var s,r,q=this,p=q.b
if(!B.b.v(A.F(p.className),"open"))return
p.className="panel"
if($.lW===q)$.lW=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jf(a){A.f(a)
if(A.aW(a.defaultPrevented))return
if(A.F(a.code)==="Escape"){this.aF()
return}if(A.F(a.code)==="Tab")this.jw(a)},
jw(a){var s,r=A.rz(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.aW(a.shiftKey)){if(s===B.a.gaV(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gO(r).focus()}}else if(s===B.a.gO(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gaV(r).focus()}},
scg(a){this.c=t.jE.a(a)}}
A.m8.prototype={
hY(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.mE.prototype={
io(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.f(i.appendChild(A.W(a,"h2","journal-title","Rest")))
A.f(i.appendChild(A.W(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.W(a,"div","entry-picker",null)
for(r=A.jE,q=0;q<2;++q){p=B.bi[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bn[n]
l=A.f(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.mF(this,p,m)
if(typeof k=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eE()]=k
l.addEventListener("click",j)
A.f(s.appendChild(l))}}A.f(i.appendChild(s))},
skT(a){this.f=t.as.a(a)}}
A.mF.prototype={
$1(a){var s,r
A.f(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aF()},
$S:3}
A.bJ.prototype={}
A.jZ.prototype={
lb(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.J(s)
q=new A.S(s,r.i("m(1)").a(new A.k0()),r.i("S<1,m>")).aZ(0)
r=this.b
r.G(0)
s=J.tI(a,t.N)
p=s.$ti
r.J(0,new A.O(s,p.i("u(n.E)").a(q.gbZ(q)),p.i("O<n.E>")))},
ke(a,b){var s,r,q,p,o,n=A.e([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.k0.prototype={
$1(a){return t.e.a(a).a},
$S:87}
A.k_.prototype={
$2(a,b){var s,r=t.e
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.H(r,s):B.c.H(a.c,b.c)},
$S:88}
A.iS.prototype={
kD(a){return this.c.v(0,t.g.a(a))},
l9(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.ag(0,j.gk5())||!a.a.ag(0,new A.n4(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.a7){n=s.d
if(n<J.aQ(p)){o=o===B.I
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.J}else j=!1}}}if(j)return!1
m=new A.iR(r,s.b,A.ap(p,t.kX),B.I)
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
f_(a){var s=this.a,r=A.o(s).i("aj<1>"),q=r.i("O<n.E>")
s=A.Q(new A.O(new A.aj(s,r),r.i("u(n.E)").a(new A.n1(a)),q),q.i("n.E"))
B.a.Y(s,new A.n2())
return s},
jN(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.hd
s=m.a.h(0,a)
if(s==null)return B.he
r=B.c.K(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aK:B.P
o=p===B.P&&m.r.v(0,q)&&s.a0(B.aL)?B.aL:p
if(s.a0(o))n=o
else n=s.a0(B.P)?B.P:B.aK
r=s.h(0,n)
r.toString
r=new A.iR(a,n,A.ap(r,t.kX),B.I)
m.e=r
return new A.iQ(r)},
jX(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cd
if(n.d!==B.I)return B.hb
n.e=a
s=a===B.J
n.d=s?B.a7:B.a5
r=this.d
q=s?B.cb:B.fX
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.cp(q,o,p,a,null))
if(a===B.T)B.a.k(r,new A.cp(B.h_,o,p,a,null))
if(s)this.eD(n)
return new A.iP(n)},
jJ(){var s,r=this.e
if(r==null)return B.cd
s=r.d
if(s!==B.a5&&s!==B.a6)return B.hc
r.d=B.a6
if(++r.f>=r.c.length){r.d=B.a7
this.eD(r)
return new A.fp(r,!0)}return new A.fp(r,!1)},
jY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.a5&&s!==B.a6}else s=!0
if(s)return i
r=h.gc_()
if(r==null)return i
s=t.N
q=A.x(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.bl
p=J.L(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.dY(q,s,s)
m=c.jh(!0,!0,o,new A.na(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.a8){B.a.k(this.d,new A.cp(B.fZ,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gO(j.c)
s=A.qv(s,s)
s.J(0,o.a)
s.J(0,q)
p.jG(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ce)if(k===B.aN){s=n.b
s=s.gL(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.cp(B.fY,o,p.b,i,l))}}return m},
eD(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
si6(a){this.r=t.Q.a(a)}}
A.n4.prototype={
$1(a){var s=this.a.a
return new A.aj(s,A.o(s).i("aj<1>")).a1(0,new A.n3(A.F(a)))},
$S:4}
A.n3.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:14}
A.n1.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:14}
A.n2.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.H(a.c,b.c)
return s!==0?s:B.c.H(a.d,b.d)},
$S:90}
A.n0.prototype={
$2(a,b){var s=t.kX
return B.c.H(s.a(a).a,s.a(b).a)},
$S:91}
A.iT.prototype={}
A.jh.prototype={}
A.ov.prototype={
$1(a){return B.b.W(A.F(a),"off.")},
$S:4}
A.b_.prototype={
A(){return"DoorChoice."+this.b}}
A.bn.prototype={
A(){return"VisitPhase."+this.b}}
A.bo.prototype={
A(){return"VisitTier."+this.b}}
A.cN.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cp.prototype={
C(){var s,r=this,q=A.x(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.c1.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bp.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.bp&&b.a===this.a&&b.b===this.b},
gE(a){return A.ch(this.a,this.b,B.k,B.k)}}
A.bz.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.bz&&b.a===this.a&&b.b===this.b},
gE(a){return A.ch(this.a,this.b,B.k,B.k)}}
A.b4.prototype={
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.b4&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gE(a){var s=this
return A.ch(s.a,s.b,s.c,s.d)},
C(){var s=this
return A.T(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.iU.prototype={
C(){var s,r,q,p=this.a
p=A.Q(p,A.o(p).c)
B.a.X(p)
s=this.b
r=A.o(s)
q=r.i("d3<1,R<m,@>>")
s=A.Q(new A.d3(s,r.i("R<m,@>(1)").a(new A.n_()),q),q.i("n.E"))
r=this.c
return A.T(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.n_.prototype={
$1(a){return t.g.a(a).C()},
$S:92}
A.ha.prototype={
C(){var s=this,r=s.a.C(),q=s.e
q=q==null?null:q.b
return A.T(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.jW.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:93}
A.jX.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:94}
A.jY.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:95}
A.iR.prototype={
gc_(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.n5.prototype={}
A.b5.prototype={}
A.iQ.prototype={}
A.iP.prototype={}
A.fp.prototype={}
A.fI.prototype={
gb6(){var s,r=this.p3
if(r){s=this.w
s===$&&A.j()
s=s.a.b}else s="safe"
return A.mp("next",r?this.gjS():B.es,!1,null,s)},
gcV(){if(this.p3){var s=this.d
s===$&&A.j()
s=s.b===B.L}else s=!1
return s},
gjS(){var s,r
if(!this.p3)return B.l
s=this.r
s===$&&A.j()
r=this.w
r===$&&A.j()
return B.cz.jT(s,r)},
gku(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.cl(this.k3,3)},
gkt(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
aG(){var s,r,q,p,o,n,m=this,l=A.vk(m.a)
m.d=l
l=l.hA()
m.r=l
l=m.w=B.aO.hQ(l)
q=m.b
p=m.c
s=new A.iC(q,p,q,p)
p=A.qH(m.d)
m.e=p
try{p.hq(new A.ir(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.ab(o)
l=m.w
if(l===B.Z)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.p(r)
m.w=B.Z
l=A.qH(m.d)
l.hq(B.fd,s)
m.e=l}l=m.e
l.bM()
n=A.v_(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.p3=!0},
aA(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.j()
s.bM()
new A.iC(a,b,a,b).F()
r.b=a
r.c=b},
jL(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="wall-plaster",b0="grime",b1="renderer is not initialized",b2="resource library is disposed"
if(!a8.p3||a8.Q.length!==0)return
a8.p4=b3
s=a8.dx
r=a8.e
r===$&&A.j()
s.l(0,a9,r.gar().hD("texture:wall-plaster",256,256))
s.l(0,b0,a8.e.gar().hD("texture:grime",512,512))
a8.fx=a8.e.gar().dM(A.p8(s.h(0,a9),!1,"quarantine-house-safe",!0,0.58,0.58,0.58,1,1))
r=a8.dy
r.l(0,"cellar",a8.e.gar().dM(A.p8(s.h(0,b0),!1,"quarantine-house-cellar",!0,0.44,0.46,0.48,1,1)))
for(q=a8.fr,p=0;p<7;++p){o=B.ec[p]
n=a8.e.w
if(n==null)n=A.k(A.l(b1))
m=o==="service"?s.h(0,b0):s.h(0,a9)
m=new A.cE("quarantine-inventory-"+o,m,a8.cJ(o).a,a8.cJ(o).b,a8.cJ(o).c,1,1,!1)
if(n.r)A.k(A.l(b2))
m.F()
l=n.b.a.aQ(m,null)
n.e.k(0,l)
q.l(0,o,l)}for(q=b3.b,n=q.length,m=a8.Q,k=a8.as,j=a8.at,i=a8.y,h=a8.z,p=0;g=q.length,p<g;q.length===n||(0,A.r)(q),++p){f=q[p]
e=a8.eG(b3,f)
g=a8.e.w
if(g==null)g=A.k(A.l(b1))
d=f.a
if(g.r)A.k(A.l(b2))
c=g.a
e.F()
l=c.b.aQ(e,"room:"+d)
b=l.a
c.c.l(0,b,c.bU(e))
g.d.k(0,l)
B.a.k(i,l)
h.l(0,d,l)
g=r.h(0,d)
if(g==null){g=a8.fx
g.toString}a=new A.aU(l,g,B.O,-1,B.K,B.Q,!0,!0,0,null)
g=a8.f
g===$&&A.j()
B.O.F()
c=g.a
a0=c.$ti
c.ai(a0.c.a(l))
c=c.b
if(!(b>=0&&b<c.length))return A.d(c,b)
e=c[b].c
c=(e==null?a0.y[1].a(e):e).d
b=B.O.am()
c=c.gb4()
a0=A.J(c)
A.c7(new A.S(c,a0.i("z(1)").a(b.gb_()),a0.i("S<1,z>")))
a1=g.b.c0(a)
B.a.k(m,a1)
k.l(0,d,a1)
j.l(0,d,a)}for(p=0;p<q.length;q.length===g||(0,A.r)(q),++p){f=q[p]
for(r=f.e,n=r.length,m=f.a,a2=0;a2<r.length;r.length===n||(0,A.r)(r),++a2){a3=r[a2]
k=a3.c
j=a3.d
a8.e4(m,a8.ex(f,a3.b,k,k+a3.e,j,j+a3.f,7902632),new A.nA(a3))}}for(r=b3.c,q=r.length,n=b3.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){a4=r[p]
if(a4.as)continue
f=n.h(0,a4.b)
if(f==null)continue
m=f.a
a8.e4(m,a8.ex(f,a4.an(m),a4.ad(m),a4.ad(m)+a4.w,0,a4.x,5915445),new A.nB(a4))}a5=A.yc(A.xw(b3))
a8.fy=a8.e.gar().dM(A.p8(s.h(0,b0),!0,"quarantine-house-exterior-shell",!0,0.5,0.5,0.5,1,1))
a6=a8.e.gar().dN(a5,"exterior:main-shell")
B.a.k(i,a6)
s=a8.fy
s.toString
a7=a8.cx=new A.aU(a6,s,B.O,-1,B.K,B.Q,!0,!0,0,null)
s=a8.f
s===$&&A.j()
s.bW(a7)
a8.CW=s.b.c0(a7)},
hR(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5="renderer is not initialized",a6="resource library is disposed"
a4.db=A.ap(a7.e,t.gB)
if(!a4.p3)return
for(s=a4.ax,r=new A.X(s,A.o(s).i("X<1,2>")).gu(0),q=a4.ay;r.m();){p=r.d
p.toString
o=a4.f
o===$&&A.j()
o.b.aH(p.b)
n=q.h(0,p.a)
if(n!=null){p=a4.e
p===$&&A.j()
p=p.w
if(p==null)p=A.k(A.l(a5))
o=n.a
if(p.r)A.k(A.l(a6))
p.a.aH(o)
p.d.aj(0,o)}}s.G(0)
q.G(0)
r=a4.ch
B.a.G(r)
for(p=a4.db,o=p.length,m=a7.c,l=a4.fr,k=0;k<o;++k){j=p[k]
i=a4.p4
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a7.f1(j.c)
i=a4.e
i===$&&A.j()
i=i.w
if(i==null)i=A.k(A.l(a5))
f=a4.j2(g,j,m)
e=j.a
if(i.r)A.k(A.l(a6))
d=i.a
f.F()
c=d.b.aQ(f,"inventory:"+e)
b=c.a
d.c.l(0,b,d.bU(f))
i.d.k(0,c)
i=j.f
f=i.a
a=B.F.ga3()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=l.h(0,g.b)
if(d==null){d=l.h(0,"furniture")
d.toString}a2=h.d
i=new A.iG(new A.z(a2.a+f.a*m,a2.b+f.b*m,a2.c+f.c*m),new A.ip(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.aU(c,d,i,-1,B.K,B.Q,!1,!0,0,null)
B.a.k(r,c)
q.l(0,e,n)
d=a4.f
d===$&&A.j()
i.F()
f=d.a
a2=f.$ti
f.ai(a2.c.a(c))
f=f.b
if(!(b>=0&&b<f.length))return A.d(f,b)
a3=f[b].c
f=(a3==null?a2.y[1].a(a3):a3).d
i=i.am()
f=f.gb4()
b=A.J(f)
A.c7(new A.S(f,b.i("z(1)").a(i.gb_()),b.i("S<1,z>")))
s.l(0,e,d.b.c0(n))}$.H.j().setAttribute("data-renderer-inventory-items",""+s.a)},
hW(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a6.e,a5=a4.h(0,a7)
if(a5==null)return
s=a5.a
r=A.at([s],t.N)
for(q=a6.az(s),p=J.L(q.a),q=new A.P(p,q.b,q.$ti.i("P<1>"));q.m();){o=p.gp()
n=o.cj(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a4.h(0,n)!=null)r.k(0,n)}for(a4=a3.as,a4=new A.X(a4,A.o(a4).i("X<1,2>")).gu(0),s=a3.at;a4.m();){m=a4.d
q=m.a
p=s.h(0,q)
p.toString
l=a3.bV(p,r.v(0,q)?-1:0)
p=a3.f
p===$&&A.j()
o=m.b
k=l.c
k.F()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.ai(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.d(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.am()
j=j.gb4()
i=A.J(j)
A.c7(new A.S(j,i.i("z(1)").a(k.gb_()),i.i("S<1,z>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.ai(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.d(p,o)
p[o].sb5(l)
s.l(0,q,l)}for(a4=a3.cy,s=a4.length,f=0;f<a4.length;a4.length===s||(0,A.r)(a4),++f){e=a4[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a3.f
q===$&&A.j()
p=a3.bV(e.c,d)
o=p.c
o.F()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.ai(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.d(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.am()
k=k.gb4()
j=A.J(k)
A.c7(new A.S(k,j.i("z(1)").a(o.gb_()),j.i("S<1,z>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.ai(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.d(q,o)
q[o].sb5(p)}for(a4=a3.db,s=a4.length,q=a3.ax,p=a3.ay,f=0;f<s;++f){c=a4[f]
o=c.a
b=q.h(0,o)
a=p.h(0,o)
if(b==null||a==null)continue
o=a3.f
o===$&&A.j()
k=a3.bV(a,r.v(0,c.b)?-1:0)
j=k.c
j.F()
i=o.a
h=i.$ti
a0=h.c.a(k.a)
i.ai(a0)
i=i.b
a0=a0.a
if(!(a0>=0&&a0<i.length))return A.d(i,a0)
g=i[a0].c
i=(g==null?h.y[1].a(g):g).d
j=j.am()
i=i.gb4()
h=A.J(i)
A.c7(new A.S(i,h.i("z(1)").a(j.gb_()),h.i("S<1,z>")))
o=o.b
h=o.$ti
h.c.a(b)
h.y[1].a(k)
o.ai(b)
o=o.b
h=b.a
if(!(h>=0&&h<o.length))return A.d(o,h)
o[h].sb5(k)}a4=new A.kF().jW(a7).a
a1=a3.CW
a2=a3.cx
if(a1!=null&&a2!=null){l=a3.bV(a2,a4!==0?-1:0)
s=a3.f
s===$&&A.j()
s.bW(l)
s.b.dS(a1,l)
a3.cx=l}},
l0(a,b){var s,r,q,p,o,n,m,l,k,j=this
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
l=m.gar().dN(j.eG(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.aU(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.j()
m.bW(k)
m.b.dS(s,k)
r.l(0,b,k)
p.l(0,b,l)
p=j.y
B.a.aj(p,o)
B.a.k(p,l)
j.e.gar().l1(o)
$.H.j().setAttribute("data-renderer-geometry-refreshes",""+(j.R8+1));++j.R8},
hS(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.at([b],t.N),h=a.e,g=h.h(0,b)
if(g!=null)for(s=g.a,r=a.az(s),q=J.L(r.a),r=new A.P(q,r.b,r.$ti.i("P<1>"));r.m();){p=q.gp()
o=p.cj(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h.h(0,o)!=null)i.k(0,o)}n=new A.hP(a).hI(i,c)
m=A.e([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.eg(k.b)
h=k.a
B.a.k(m,new A.ij(new A.z(h.a,h.b,h.c),k.d,k.c))}j=A.te(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.eg(A.td(d))
s=new A.ks(new A.z(j.a,j.b,j.c),1)}this.id=new A.hG(B.dW,1.5,14,B.bf,h,s,m)},
aC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.p3)throw A.c(A.l("Pixeldart runtime is not initialized"))
s=g.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cg(s)
q=A.p7(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.dV(r,q,q.V(0,r),B.aJ,B.fH,0.1,60,g.b/g.c)}p=g.id
o=g.k1
n=g.p2++
m=g.k4
l=new A.mG()
$.q1()
k=$.m6.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.j()
j=g.f
j===$&&A.j()
k.jj()
k.bM()
i=B.a.v(k.d,j)
if(!i)A.k(A.w("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga2(0))A.k(A.w("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga2(0)||i.gby()<1e-12)A.k(A.w("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.w("CameraView requires 0 < near < far, got "+A.p(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.w("CameraView.aspect must be finite and > 0: "+A.p(i),f))
if(!s.a.ga2(0)||!s.b.ga2(0)||!s.c.ga2(0))A.k(A.w("CameraView matrices must be finite",f))
p.F()
o.F()
if(!isFinite(m))A.k(A.w("FrameInput.timeSeconds must be finite: "+A.p(m),f))
k.at=new A.kM(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.ai)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.ai
s.c=0
B.a.G(s.a)
g.k2=g.e.kh()
s=$.m6.$0()
l.b=s
g.k3=l.gkf()/1000},
aW(a){},
ht(){},
hB(){++this.ok},
eG(a,b){var s,r,q,p,o,n=A.t0(a,b),m=A.Q(n.a,t.i)
B.a.J(m,n.b)
B.a.J(m,n.c)
B.a.J(m,n.d)
s=new Float32Array(A.a0(m))
r=A.e([],t.k)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.d(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.d(s,o)
B.a.k(r,new A.z(m,p,s[o]))}return new A.bN(B.R,s,null,A.c7(r))},
e4(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.j()
r=s.gar().dN(b,"decoration:"+a)
B.a.k(p.y,r)
q=new A.aU(r,p.j5(a),B.O,0,B.K,B.Q,!0,!0,0,null)
s=p.f
s===$&&A.j()
s.bW(q)
B.a.k(p.cy,new A.jj(a,s.b.c0(q),q,c))},
j5(a){var s=this.dy.h(0,a)
if(s==null){s=this.fx
s.toString}return s},
j2(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cK(new Float32Array(5376))
g=this.j1(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.ah(q,r,o,p,g)
s.ah(n,m,l,k,g)
s.ah(r,n,k,o,g)
s.ah(m,q,p,l,g)
s.ah(r,q,m,n,g)
s.ah(o,k,l,p,g)
j=B.u.b0(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.z(e,d,j[c]))}return new A.bN(B.R,j,null,A.c7(g))},
j1(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
cJ(a){var s
A:{if("architecture"===a){s=B.f9
break A}if("furniture"===a){s=B.by
break A}if("fixture"===a){s=B.fa
break A}if("service"===a){s=B.f7
break A}if("story"===a){s=B.f8
break A}if("decor"===a){s=B.fc
break A}if("micro"===a){s=B.fb
break A}s=B.by
break A}return s},
ap(a){return this.kK(t.G.a(a))},
kK(a){var s=0,r=A.bc(t.H),q,p=this,o,n,m,l
var $async$ap=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.e([],t.iw)
for(n=0;n<2;++n){m=B.eq[n]
l=a.h(0,m)
if(l!=null)o.push(p.bO(m,l))}s=3
return A.af(A.kS(o,t.H),$async$ap)
case 3:case 1:return A.ba(q,r)}})
return A.bb($async$ap,r)},
bO(a,b){return this.j4(a,b)},
j4(a,b){var s=0,r=A.bc(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bO=A.bd(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dx.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.f(A.f(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.af(A.aO(A.f(m.decode()),t.X),$async$bO)
case 7:g=A.f(A.f(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.c(h)}k.drawImage(m,0,0)
j=t.mR.a(A.f(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.j()
h=h.gar()
f=new Uint8Array(A.a0(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.lj(d,f)
$.H.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ab(c)
h=$.H.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.f(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.p(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$bO,r)},
bV(a,b){return new A.aU(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
ex(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.a2.j().aR(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.e([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.U)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.e([new A.b(k,s,r),new A.b(q,s,r),new A.b(q,p,r),new A.b(k,p,r)],t.U)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.e([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.U)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.e([new A.b(k,s,r),new A.b(k,s,q),new A.b(k,p,q),new A.b(k,p,r)],t.U)
k=r
break
default:k=null}o=new A.cK(new Float32Array(5376))
o.ah(k[0],k[1],k[2],k[3],g)
n=B.u.b0(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.z(r,q,n[p]))}return new A.bN(B.R,n,null,A.c7(k))},
eg(a){return new A.df((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ipc:1}
A.nA.prototype={
$0(){return!this.a.w},
$S:15}
A.nB.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:15}
A.ej.prototype={
gb6(){return A.mp("legacy",B.l,this.e,this.f,"legacy")},
gcV(){return this.x},
aG(){var s,r=this
if(r.w)return
s=A.v0(r.a,r.b,r.c)
r.r!==$&&A.y()
r.r=s
s.fC=s.fB=s.fA=r.d
r.w=!0},
aA(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.j()
s.aA(a,b)}},
aC(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.c(A.l("legacy runtime is not initialized"))
if(j.x||$.nU==null)return;++j.y
$.H.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.j()
r=$.rI
q=$.b7.j()
s.fG=A.te($.dG.j().gbg()).ga3()
s.shs(A.td($.dG.j().gbg()))
p=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dG.j().gbg()))
s.fK=p<0?0:p
p=$.bE.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.U(0,p.d.V(0,(A.oT(o*0.28,1309)*2-1)*n)).U(0,p.c.V(0,(A.oT(p.r*0.28,2839)*2-1)*n))
p=$.bE.j()
s.fL=p.a
s.dd=p.b
s.de=p.c
s.df=p.d
m=A.wC(0,0.25,0.11)
s.dg=m.a
s.dh=m.b
s.di=m.c
p=s.c8
l=p==null?s.bq:p
if(l==null)l=s.aS
p=s.aw
p.aE(l)
s.ao.depthMask(!0)
p.jZ(l,s.dg/255,s.dh/255,s.di/255)
s.d7=s.c9=0
s.d9=!1
s.bs=0
k=$.nU
if(k!=null)k.kc($.aX,$.jT())
s.ks(r,q)
$.rm.j().dR(B.cx,r)},
aW(a){},
ht(){this.x=!0},
hB(){this.x=!1},
$ipc:1}
A.jj.prototype={}
A.oD.prototype={
$1(a){var s
try{A.qi(a,this.a)
return!0}catch(s){if(A.ab(s) instanceof A.K)return!1
else throw s}},
$S:97}
A.oE.prototype={
$0(){$.b8=null
$.bt.j().aI($.H.j())},
$S:0}
A.oF.prototype={
$2(a,b){var s,r,q,p,o,n
if($.a_.j().gaL().a===21){A.rQ(!1)
return}s=$.a2.j().r.b
$.a_.j().i3(a,b,$.aX)
r=$.a2.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cq()
if(typeof n!=="number")return A.jP(n)
if(!(o<n))break
if($.a2.b===$.a2)A.k(A.ak(""))
p=B.a.h(B.A,q).b
o=$.nU
if(o!=null)o.kZ(p)
o=$.bH
if(o!=null){n=$.a2.b
if(n===$.a2)A.k(A.ak(""))
o.l0(n,p)}o=q
if(typeof o!=="number")return o.U()
q=o+1}A.pP("saved after sleep")},
$S:98}
A.oI.prototype={
$0(){$.b8=null
$.bt.j().aI($.H.j())},
$S:0}
A.oJ.prototype={
$0(){$.b8=null
$.bt.j().aI($.H.j())},
$S:0}
A.oK.prototype={
$0(){$.b8=null},
$S:0}
A.oL.prototype={
$0(){$.b8=null},
$S:0}
A.oM.prototype={
$1(a){A.f(a)
return A.rP()},
$S:1}
A.oN.prototype={
$1(a){var s,r
A.f(a)
if(!A.aW(a.repeat))$.cr.j().aW(new A.is(A.F(a.code),!0,1))
if(A.F(a.code)==="KeyP"&&!A.aW(a.repeat))$.pJ=!$.pJ
if(A.F(a.code)==="KeyR"&&!A.aW(a.repeat)&&$.rY){s=$.ey
if(s!=null)s.ba()}if(A.F(a.code)==="KeyJ"&&!A.aW(a.repeat)&&!$.aA.j().z){s=$.b8
if(s==null){$.b8=$.eu.j()
s=$.eu.j()
s.ia()
r=s.r.a-1
if(r<1)r=1
s.CW=s.ec(s.CW,r)
s.jk()
s.eC()}else if(s===$.eu.j())$.eu.j().aF()}if(A.F(a.code)==="KeyL"&&!A.aW(a.repeat)&&!$.aA.j().z){s=$.b8
if(s==null){$.b8=$.jD.j()
$.jD.j().ci()}else if(s===$.jD.j())$.jD.j().aF()}if(A.F(a.code)==="KeyH"&&!A.aW(a.repeat)&&!$.aA.j().z){s=$.b8
if(s==null){$.b8=$.jB.j()
$.jB.j().ci()}else if(s===$.jB.j())$.jB.j().aF()}if(A.F(a.code)==="KeyK"&&!A.aW(a.repeat))A.pP("saved")},
$S:3}
A.oO.prototype={
$1(a){A.f(a)
$.cr.j().aW(new A.is(A.F(a.code),!1,0))},
$S:3}
A.oP.prototype={
$1(a){A.f(a)
return A.rp()},
$S:1}
A.oG.prototype={
$1(a){A.f(a)
return A.rp()},
$S:1}
A.oH.prototype={
$1(a){A.f(a)
return $.bt.j().aI($.H.j())},
$S:1}
A.od.prototype={
$1(a){var s=A.F(A.f(a).message)
A.oh(s,null)},
$S:3}
A.oe.prototype={
$1(a){var s
A.f(a)
s=a.reason
A.oh("unhandled rejection: "+A.p(s==null?A.F(a.type):s),null)},
$S:3}
A.ok.prototype={
$0(){this.a.className=""},
$S:8}
A.oi.prototype={
$1(a){return t.L.a(a).e},
$S:23};(function aliases(){var s=J.cC.prototype
s.i9=s.n
s=A.n.prototype
s.i8=s.dV
s=A.f7.prototype
s.ia=s.ci})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"wI","ux",27)
r(J.q.prototype,"gbZ","v",11)
q(A,"wV","uL",16)
p(A.bx.prototype,"gk5","a0",11)
o(A,"xs","vs",7)
o(A,"xt","vt",7)
o(A,"xu","vu",7)
q(A,"t_","xa",0)
s(A,"xy","uC",27)
r(A.bA.prototype,"gbZ","v",11)
o(A,"xB","wn",5)
p(A.i5.prototype,"gl7","l8",64)
p(A.iF.prototype,"gl5","l6",96)
q(A,"yK","p9",15)
p(A.cg.prototype,"gb_","hF",47)
var n
p(n=A.hS.prototype,"gj6","j7",1)
p(n,"gj8","j9",1)
p(n,"gjc","jd",1)
p(n,"gja","jb",1)
o(A,"y3","rw",5)
o(A,"y5","rv",5)
o(A,"xT","us",101)
o(A,"xU","ut",102)
p(A.f7.prototype,"gje","jf",1)
p(A.iS.prototype,"gkC","kD",14)
o(A,"t6","wZ",103)
o(A,"xY","wj",104)
q(A,"y_","wm",0)
o(A,"xZ","wk",69)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.B,null)
q(A.B,[A.p1,J.hU,A.fh,J.cZ,A.n,A.eH,A.cx,A.a5,A.I,A.mA,A.ce,A.dg,A.P,A.fr,A.ac,A.c0,A.bB,A.e7,A.dX,A.dD,A.cj,A.mS,A.lS,A.eO,A.fL,A.U,A.lG,A.cD,A.al,A.f_,A.nh,A.nI,A.bO,A.j9,A.jw,A.nF,A.iY,A.bs,A.av,A.j1,A.dy,A.ae,A.iZ,A.ju,A.fX,A.fA,A.je,A.dE,A.fD,A.fR,A.jx,A.d1,A.hs,A.ny,A.nJ,A.d2,A.cz,A.j6,A.ie,A.fj,A.ni,A.K,A.M,A.ah,A.jv,A.mG,A.aK,A.fT,A.mU,A.jq,A.lR,A.jb,A.ek,A.m9,A.dk,A.kl,A.km,A.ik,A.dV,A.hG,A.kM,A.ci,A.l1,A.df,A.ks,A.ij,A.ee,A.cE,A.co,A.mZ,A.bN,A.lT,A.m1,A.it,A.aU,A.iC,A.ir,A.kO,A.i5,A.iJ,A.lO,A.cq,A.iF,A.db,A.hE,A.hF,A.kN,A.ai,A.bj,A.aJ,A.N,A.eI,A.m7,A.aH,A.mb,A.aG,A.md,A.mc,A.dB,A.fc,A.nE,A.jk,A.j8,A.ms,A.my,A.b1,A.aZ,A.aq,A.ko,A.h9,A.dj,A.kP,A.cg,A.ip,A.iG,A.z,A.eG,A.j_,A.hi,A.j0,A.hw,A.j3,A.eL,A.j4,A.hA,A.j5,A.hO,A.ja,A.hk,A.hj,A.f9,A.jl,A.io,A.jm,A.dr,A.iw,A.jo,A.ix,A.jp,A.iA,A.js,A.iz,A.jr,A.iO,A.jy,A.fe,A.iW,A.jz,A.kj,A.hJ,A.hL,A.eT,A.fi,A.D,A.hx,A.il,A.l0,A.cS,A.bY,A.eM,A.n9,A.cU,A.fW,A.fV,A.iV,A.hz,A.he,A.ki,A.kL,A.iD,A.kZ,A.hQ,A.hS,A.i4,A.dh,A.lN,A.cK,A.mi,A.mr,A.nb,A.fy,A.jt,A.ji,A.jg,A.mB,A.b,A.kh,A.hB,A.ky,A.e_,A.ii,A.m2,A.ec,A.mx,A.dp,A.hH,A.kW,A.kV,A.k6,A.dQ,A.dS,A.dP,A.dR,A.hl,A.i6,A.ft,A.iX,A.eU,A.l5,A.mt,A.aE,A.kD,A.l6,A.l7,A.kF,A.cR,A.e1,A.mu,A.cQ,A.eq,A.l4,A.kC,A.mC,A.l9,A.bU,A.cc,A.lo,A.ln,A.bX,A.hP,A.aL,A.cG,A.aT,A.b2,A.cy,A.cJ,A.ay,A.ld,A.f8,A.f0,A.n6,A.i2,A.bh,A.lq,A.kd,A.dT,A.ke,A.lC,A.lB,A.m_,A.lZ,A.m0,A.mq,A.is,A.mo,A.ed,A.kp,A.na,A.dw,A.hr,A.lj,A.ll,A.mv,A.bZ,A.mw,A.hI,A.mH,A.du,A.dt,A.fq,A.mM,A.k1,A.kg,A.kt,A.f7,A.m8,A.bJ,A.jZ,A.iS,A.n5,A.cp,A.bp,A.bz,A.b4,A.iU,A.ha,A.iR,A.fI,A.ej,A.jj])
q(J.hU,[J.hY,J.eW,J.eX,J.e5,J.e6,J.dc,J.dd])
q(J.eX,[J.cC,J.q,A.cF,A.f4])
q(J.cC,[J.ih,J.ds,J.cd])
r(J.hW,A.fh)
r(J.lp,J.q)
q(J.dc,[J.eV,J.hZ])
q(A.n,[A.cP,A.C,A.cf,A.O,A.bR,A.dC,A.c3])
q(A.cP,[A.d0,A.fY])
r(A.fx,A.d0)
r(A.fv,A.fY)
q(A.cx,[A.hn,A.hm,A.iE,A.oy,A.oA,A.nd,A.nc,A.nR,A.kT,A.ns,A.nu,A.lJ,A.nw,A.oR,A.oS,A.os,A.ma,A.lV,A.lM,A.lP,A.mP,A.mR,A.kI,A.kG,A.kH,A.lX,A.lY,A.mh,A.mg,A.mf,A.me,A.mj,A.o9,A.oa,A.mz,A.oX,A.oV,A.kQ,A.lL,A.oq,A.n7,A.n8,A.k5,A.l_,A.mn,A.kB,A.kX,A.kY,A.k7,A.k8,A.k9,A.ka,A.kb,A.kc,A.oo,A.kk,A.kE,A.l8,A.ob,A.nQ,A.lf,A.lh,A.mD,A.la,A.on,A.kx,A.lF,A.lx,A.kq,A.kr,A.of,A.mN,A.mO,A.k2,A.ku,A.kv,A.kw,A.kA,A.l3,A.ls,A.lt,A.lu,A.mF,A.k0,A.n4,A.n3,A.n1,A.ov,A.n_,A.jW,A.jX,A.jY,A.oD,A.oM,A.oN,A.oO,A.oP,A.oG,A.oH,A.od,A.oe,A.oi])
q(A.hn,[A.ng,A.kn,A.ly,A.oz,A.nS,A.op,A.kU,A.nt,A.lH,A.lK,A.nz,A.mX,A.mW,A.lQ,A.mQ,A.kJ,A.oW,A.oU,A.lg,A.li,A.lc,A.lE,A.lm,A.mI,A.mJ,A.lv,A.lw,A.k_,A.n2,A.n0,A.oF])
r(A.bL,A.fv)
q(A.a5,[A.de,A.cl,A.i_,A.iI,A.iu,A.j7,A.eZ,A.hc,A.bK,A.fo,A.iH,A.ef,A.hq])
r(A.eh,A.I)
r(A.ho,A.eh)
q(A.C,[A.a1,A.aj,A.aR,A.X,A.dA,A.fC])
q(A.a1,[A.fl,A.S,A.fg,A.jd])
r(A.d3,A.cf)
q(A.bB,[A.el,A.em,A.en])
r(A.eo,A.el)
r(A.br,A.em)
r(A.fJ,A.en)
r(A.er,A.e7)
r(A.cM,A.er)
r(A.eJ,A.cM)
q(A.dX,[A.a4,A.eQ])
q(A.cj,[A.eK,A.fK,A.fS])
r(A.c8,A.eK)
q(A.hm,[A.m3,A.ne,A.nf,A.nG,A.kR,A.nj,A.no,A.nn,A.nl,A.nk,A.nr,A.nq,A.np,A.nD,A.oj,A.nL,A.nK,A.o7,A.o1,A.o6,A.nY,A.nZ,A.o8,A.o5,A.nW,A.nX,A.o2,A.o3,A.o4,A.o0,A.o_,A.or,A.mm,A.le,A.lb,A.nA,A.nB,A.oE,A.oI,A.oJ,A.oK,A.oL,A.ok])
r(A.f6,A.cl)
q(A.iE,[A.iB,A.dU])
q(A.U,[A.bx,A.fz,A.jc])
r(A.eY,A.bx)
r(A.e8,A.cF)
q(A.f4,[A.i7,A.ax])
q(A.ax,[A.fE,A.fG])
r(A.fF,A.fE)
r(A.f2,A.fF)
r(A.fH,A.fG)
r(A.f3,A.fH)
q(A.f2,[A.f1,A.i8])
q(A.f3,[A.i9,A.ia,A.ib,A.ic,A.id,A.di,A.f5])
r(A.fM,A.j7)
r(A.fs,A.j1)
r(A.jn,A.fX)
r(A.fB,A.fz)
r(A.bA,A.fK)
r(A.fn,A.fS)
q(A.d1,[A.hf,A.hC,A.i0])
q(A.hs,[A.kf,A.lA,A.lz,A.mY])
r(A.i1,A.eZ)
r(A.nx,A.ny)
r(A.iM,A.hC)
q(A.bK,[A.ea,A.hR])
r(A.j2,A.fT)
q(A.j6,[A.dl,A.da,A.hb,A.cn,A.dZ,A.hh,A.hp,A.hy,A.dn,A.e2,A.bM,A.ff,A.ca,A.eb,A.e3,A.fu,A.fw,A.hK,A.eR,A.hM,A.hN,A.d8,A.eS,A.dq,A.cL,A.dW,A.ep,A.hg,A.d_,A.ht,A.hv,A.az,A.bw,A.d7,A.d4,A.d5,A.eP,A.cA,A.cB,A.fd,A.dm,A.b3,A.aV,A.hT,A.dx,A.by,A.b_,A.bn,A.bo,A.cN,A.c1])
q(A.ci,[A.b0,A.bm,A.bW,A.ig,A.cb])
r(A.ml,A.nb)
r(A.mk,A.ml)
q(A.f7,[A.kz,A.l2,A.lr,A.mE])
q(A.n5,[A.iT,A.jh,A.b5,A.iQ,A.iP,A.fp])
s(A.eh,A.c0)
s(A.fY,A.I)
s(A.fE,A.I)
s(A.fF,A.ac)
s(A.fG,A.I)
s(A.fH,A.ac)
s(A.er,A.fR)
s(A.fS,A.jx)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",v:"double",aC:"num",m:"String",u:"bool",ah:"Null",E:"List",B:"Object",R:"Map",V:"JSObject"},mangledNames:{},types:["~()","~(V)","c9()","ah(V)","u(m)","@(@)","u(ai)","~(~())","ah()","~(@)","u(N)","u(B?)","u(v)","h(bh,bh)","u(b4)","u()","h()","@(m)","ah(@)","~(B?,B?)","@()","u(h)","m?(m)","u(bh)","m(B?)","u(aL)","u(@)","h(@,@)","fe(b0)","h(h,+(bm,cq))","m(ai)","h(Y,Y)","~(B,c_)","ah(B,c_)","cb(h,h,m?)","~(@,@)","c9(m{fallback:m?})","ah(~())","ee?()","dV()","v()","aU(bl)","h(aq<b1>,aq<b1>)","bl(aq<b1>)","h(aq<aZ>,aq<aZ>)","bl(aq<aZ>)","dj(v,v,v,v)","z(z)","@(@,m)","~(dr)","dr()","R<m,m>(R<m,m>,m)","bi<ah>(M<m,m>)","u(V)","0&(m,h?)","V()","B?(B?)","u(bw)","u(ay)","ah(@,c_)","dQ(B?)","dP(B?)","dR(B?)","~(h,@)","cE(bW)","dS(B?)","bW(h,h,m?)","u(cJ)","u(cR)","~(h)","b(b)","h(+(v,v,v,v),+(v,v,v,v))","E<+(v,v,v,v)>()","u(cG)","h(h,ay)","u(bU)","0&()","h(bX,bX)","M<m,m>(m,@)","u(b3)","u(aV)","b0(h,h,m?)","h(h)","M<h,@>(h,du)","M<h,@>(h,dt)","u(M<@,@>)","M<m,m>(M<@,@>)","m(bJ)","h(bJ,bJ)","h(h,+(b0,bN))","h(b4,b4)","h(bz,bz)","R<m,@>(b4)","u(bo)","u(bn)","u(b_)","c9(bm?)","u(ec)","~(b3,aV)","bm(h,h,m?)","u(fm?)","bU(B?)","cc(B?)","~(aC)","~(m)","u(cQ)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.eo&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.br&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fJ&&A.y1(a,b.a)}}
A.vL(v.typeUniverse,JSON.parse('{"ih":"cC","ds":"cC","cd":"cC","yl":"cF","q":{"E":["1"],"C":["1"],"V":[],"n":["1"]},"hY":{"u":[],"Z":[]},"eW":{"ah":[],"Z":[]},"eX":{"V":[]},"cC":{"V":[]},"hW":{"fh":[]},"lp":{"q":["1"],"E":["1"],"C":["1"],"V":[],"n":["1"]},"cZ":{"a9":["1"]},"dc":{"v":[],"aC":[],"aw":["aC"]},"eV":{"v":[],"h":[],"aC":[],"aw":["aC"],"Z":[]},"hZ":{"v":[],"aC":[],"aw":["aC"],"Z":[]},"dd":{"m":[],"aw":["m"],"qz":[],"Z":[]},"cP":{"n":["2"]},"eH":{"a9":["2"]},"d0":{"cP":["1","2"],"n":["2"],"n.E":"2"},"fx":{"d0":["1","2"],"cP":["1","2"],"C":["2"],"n":["2"],"n.E":"2"},"fv":{"I":["2"],"E":["2"],"cP":["1","2"],"C":["2"],"n":["2"]},"bL":{"fv":["1","2"],"I":["2"],"E":["2"],"cP":["1","2"],"C":["2"],"n":["2"],"n.E":"2","I.E":"2"},"de":{"a5":[]},"ho":{"I":["h"],"c0":["h"],"E":["h"],"C":["h"],"n":["h"],"I.E":"h","c0.E":"h"},"C":{"n":["1"]},"a1":{"C":["1"],"n":["1"]},"fl":{"a1":["1"],"C":["1"],"n":["1"],"a1.E":"1","n.E":"1"},"ce":{"a9":["1"]},"cf":{"n":["2"],"n.E":"2"},"d3":{"cf":["1","2"],"C":["2"],"n":["2"],"n.E":"2"},"dg":{"a9":["2"]},"S":{"a1":["2"],"C":["2"],"n":["2"],"a1.E":"2","n.E":"2"},"O":{"n":["1"],"n.E":"1"},"P":{"a9":["1"]},"bR":{"n":["1"],"n.E":"1"},"fr":{"a9":["1"]},"eh":{"I":["1"],"c0":["1"],"E":["1"],"C":["1"],"n":["1"]},"fg":{"a1":["1"],"C":["1"],"n":["1"],"a1.E":"1","n.E":"1"},"eo":{"el":[],"bB":[]},"br":{"em":[],"bB":[]},"fJ":{"en":[],"bB":[]},"eJ":{"cM":["1","2"],"er":["1","2"],"e7":["1","2"],"fR":["1","2"],"R":["1","2"]},"dX":{"R":["1","2"]},"a4":{"dX":["1","2"],"R":["1","2"]},"dC":{"n":["1"],"n.E":"1"},"dD":{"a9":["1"]},"eQ":{"dX":["1","2"],"R":["1","2"]},"eK":{"cj":["1"],"cI":["1"],"C":["1"],"n":["1"]},"c8":{"eK":["1"],"cj":["1"],"cI":["1"],"C":["1"],"n":["1"]},"f6":{"cl":[],"a5":[]},"i_":{"a5":[]},"iI":{"a5":[]},"fL":{"c_":[]},"cx":{"d6":[]},"hm":{"d6":[]},"hn":{"d6":[]},"iE":{"d6":[]},"iB":{"d6":[]},"dU":{"d6":[]},"iu":{"a5":[]},"bx":{"U":["1","2"],"p3":["1","2"],"R":["1","2"],"U.K":"1","U.V":"2"},"aj":{"C":["1"],"n":["1"],"n.E":"1"},"cD":{"a9":["1"]},"aR":{"C":["1"],"n":["1"],"n.E":"1"},"al":{"a9":["1"]},"X":{"C":["M<1,2>"],"n":["M<1,2>"],"n.E":"M<1,2>"},"f_":{"a9":["M<1,2>"]},"eY":{"bx":["1","2"],"U":["1","2"],"p3":["1","2"],"R":["1","2"],"U.K":"1","U.V":"2"},"el":{"bB":[]},"em":{"bB":[]},"en":{"bB":[]},"e8":{"cF":[],"V":[],"Z":[]},"di":{"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"],"Z":[],"I.E":"h","ac.E":"h"},"cF":{"V":[],"Z":[]},"f4":{"V":[]},"i7":{"V":[],"Z":[]},"ax":{"bk":["1"],"V":[]},"f2":{"I":["v"],"ax":["v"],"E":["v"],"bk":["v"],"C":["v"],"V":[],"n":["v"],"ac":["v"]},"f3":{"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"]},"f1":{"kK":[],"I":["v"],"ax":["v"],"E":["v"],"bk":["v"],"C":["v"],"V":[],"n":["v"],"ac":["v"],"Z":[],"I.E":"v","ac.E":"v"},"i8":{"I":["v"],"ax":["v"],"E":["v"],"bk":["v"],"C":["v"],"V":[],"n":["v"],"ac":["v"],"Z":[],"I.E":"v","ac.E":"v"},"i9":{"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"],"Z":[],"I.E":"h","ac.E":"h"},"ia":{"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"],"Z":[],"I.E":"h","ac.E":"h"},"ib":{"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"],"Z":[],"I.E":"h","ac.E":"h"},"ic":{"pg":[],"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"],"Z":[],"I.E":"h","ac.E":"h"},"id":{"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"],"Z":[],"I.E":"h","ac.E":"h"},"f5":{"fm":[],"I":["h"],"ax":["h"],"E":["h"],"bk":["h"],"C":["h"],"V":[],"n":["h"],"ac":["h"],"Z":[],"I.E":"h","ac.E":"h"},"j7":{"a5":[]},"fM":{"cl":[],"a5":[]},"bs":{"a9":["1"]},"c3":{"n":["1"],"n.E":"1"},"av":{"a5":[]},"fs":{"j1":["1"]},"ae":{"bi":["1"]},"fX":{"r_":[]},"jn":{"fX":[],"r_":[]},"fz":{"U":["1","2"],"R":["1","2"]},"fB":{"fz":["1","2"],"U":["1","2"],"R":["1","2"],"U.K":"1","U.V":"2"},"dA":{"C":["1"],"n":["1"],"n.E":"1"},"fA":{"a9":["1"]},"bA":{"cj":["1"],"qw":["1"],"cI":["1"],"C":["1"],"n":["1"]},"dE":{"a9":["1"]},"I":{"E":["1"],"C":["1"],"n":["1"]},"U":{"R":["1","2"]},"fC":{"C":["2"],"n":["2"],"n.E":"2"},"fD":{"a9":["2"]},"e7":{"R":["1","2"]},"cM":{"er":["1","2"],"e7":["1","2"],"fR":["1","2"],"R":["1","2"]},"cj":{"cI":["1"],"C":["1"],"n":["1"]},"fK":{"cj":["1"],"cI":["1"],"C":["1"],"n":["1"]},"fn":{"cj":["1"],"jx":["1"],"cI":["1"],"C":["1"],"n":["1"]},"jc":{"U":["m","@"],"R":["m","@"],"U.K":"m","U.V":"@"},"jd":{"a1":["m"],"C":["m"],"n":["m"],"a1.E":"m","n.E":"m"},"hf":{"d1":["E<h>","m"]},"hC":{"d1":["m","E<h>"]},"eZ":{"a5":[]},"i1":{"a5":[]},"i0":{"d1":["B?","m"]},"iM":{"d1":["m","E<h>"]},"d2":{"aw":["d2"]},"v":{"aC":[],"aw":["aC"]},"cz":{"aw":["cz"]},"h":{"aC":[],"aw":["aC"]},"E":{"C":["1"],"n":["1"]},"aC":{"aw":["aC"]},"cI":{"C":["1"],"n":["1"]},"m":{"aw":["m"],"qz":[]},"j6":{"G":[]},"hc":{"a5":[]},"cl":{"a5":[]},"bK":{"a5":[]},"ea":{"a5":[]},"hR":{"a5":[]},"fo":{"a5":[]},"iH":{"a5":[]},"ef":{"a5":[]},"hq":{"a5":[]},"ie":{"a5":[]},"fj":{"a5":[]},"jv":{"c_":[]},"aK":{"v6":[]},"fT":{"iK":[]},"jq":{"iK":[]},"j2":{"iK":[]},"jb":{"pa":[]},"ek":{"pa":[]},"dl":{"G":[]},"b0":{"ci":[]},"bm":{"ci":[]},"bW":{"ci":[]},"cb":{"ci":[]},"ig":{"ci":[]},"da":{"G":[]},"hb":{"G":[]},"cn":{"G":[]},"dZ":{"G":[]},"hh":{"G":[]},"hp":{"G":[]},"hy":{"G":[]},"dn":{"G":[]},"e2":{"G":[]},"bM":{"G":[]},"ff":{"G":[]},"ca":{"G":[]},"eb":{"G":[]},"fc":{"uZ":[]},"dB":{"bl":[]},"jk":{"uY":[]},"j8":{"uj":[]},"b1":{"aw":["b1"]},"aZ":{"aw":["aZ"]},"e3":{"G":[]},"fu":{"G":[]},"eG":{"a7":[]},"j_":{"Y":[]},"hi":{"a7":[]},"j0":{"Y":[]},"hw":{"a7":[]},"j3":{"Y":[]},"fw":{"G":[]},"eL":{"a7":[]},"j4":{"Y":[]},"hA":{"a7":[]},"j5":{"Y":[]},"hO":{"a7":[]},"ja":{"Y":[]},"hj":{"uX":[]},"f9":{"a7":[]},"jl":{"Y":[]},"io":{"a7":[]},"jm":{"Y":[]},"iw":{"a7":[]},"jo":{"Y":[]},"ix":{"a7":[]},"jp":{"Y":[]},"iA":{"a7":[]},"js":{"Y":[]},"iz":{"a7":[]},"jr":{"Y":[]},"iO":{"a7":[]},"jy":{"Y":[]},"iW":{"a7":[]},"jz":{"Y":[]},"hK":{"G":[]},"eR":{"G":[]},"hM":{"G":[]},"hN":{"G":[]},"d8":{"G":[]},"eS":{"G":[]},"dq":{"G":[]},"cL":{"G":[]},"dW":{"G":[]},"hx":{"u2":[]},"ep":{"G":[]},"az":{"G":[]},"hg":{"G":[]},"d_":{"G":[]},"ht":{"G":[]},"hv":{"G":[]},"cU":{"c9":[]},"iV":{"um":[]},"bw":{"G":[]},"d7":{"G":[]},"d4":{"G":[]},"d5":{"G":[]},"cA":{"G":[]},"eP":{"G":[]},"cB":{"G":[]},"fd":{"G":[]},"dm":{"G":[]},"b3":{"G":[]},"aV":{"G":[]},"hT":{"G":[]},"dx":{"G":[]},"by":{"G":[]},"b_":{"G":[]},"bn":{"G":[]},"bo":{"G":[]},"cN":{"G":[]},"c1":{"G":[]},"fI":{"pc":[]},"ej":{"pc":[]},"ur":{"E":["h"],"C":["h"],"n":["h"]},"fm":{"E":["h"],"C":["h"],"n":["h"]},"vb":{"E":["h"],"C":["h"],"n":["h"]},"up":{"E":["h"],"C":["h"],"n":["h"]},"pg":{"E":["h"],"C":["h"],"n":["h"]},"uq":{"E":["h"],"C":["h"],"n":["h"]},"va":{"E":["h"],"C":["h"],"n":["h"]},"kK":{"E":["v"],"C":["v"],"n":["v"]},"ui":{"E":["v"],"C":["v"],"n":["v"]}}'))
A.vK(v.typeUniverse,JSON.parse('{"eh":1,"fY":2,"ax":1,"fK":1,"fS":1,"hs":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",p:"MaterialDefinition uv scale must not be zero",n:"MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",i:"MaterialDefinition.emissiveStrength must be >= 0: 0",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.as
return{e:s("bJ"),v:s("av"),f5:s("he"),gE:s("dP"),fS:s("dQ"),d2:s("dR"),lJ:s("dS"),dP:s("aZ"),kp:s("hk"),bP:s("aw<@>"),gY:s("eI"),B:s("a4<m,m>"),I:s("a4<m,h>"),R:s("c8<m>"),ml:s("d2"),lD:s("b_"),jS:s("cz"),gt:s("C<@>"),no:s("bw"),L:s("bh"),V:s("a5"),hZ:s("aE"),D:s("kK"),Z:s("d6"),mj:s("bi<ah>"),_:s("c9"),bU:s("cB"),lv:s("hQ<B>"),hL:s("cb"),ob:s("bU"),gB:s("cc"),dp:s("n<eI>"),bq:s("n<m>"),id:s("n<v>"),e7:s("n<@>"),fm:s("n<h>"),od:s("q<bJ>"),ag:s("q<hB>"),hS:s("q<cy>"),r:s("q<bh>"),oP:s("q<aE>"),iw:s("q<bi<~>>"),mc:s("q<hH>"),l2:s("q<c9>"),aW:s("q<bj>"),oX:s("q<yk<B>>"),og:s("q<db>"),jj:s("q<cb>"),kG:s("q<V>"),b1:s("q<i2>"),cs:s("q<aT>"),ic:s("q<R<m,B>>"),hq:s("q<R<m,m>>"),bV:s("q<R<m,@>>"),kS:s("q<i4>"),mm:s("q<dh>"),dg:s("q<b0>"),hJ:s("q<ai>"),x:s("q<b2>"),de:s("q<dj>"),bz:s("q<bX>"),dQ:s("q<ij>"),aN:s("q<cG>"),fR:s("q<+(h,m)>"),a3:s("q<+(v,v,v,v)>"),o5:s("q<a7>"),u:s("q<Y>"),oZ:s("q<fc>"),C:s("q<N>"),c8:s("q<aU>"),bH:s("q<bl>"),kl:s("q<ay>"),e_:s("q<bZ>"),b2:s("q<ed>"),ao:s("q<aq<aZ>>"),mX:s("q<aq<b1>>"),jn:s("q<cJ>"),s:s("q<m>"),aA:s("q<iD>"),k:s("q<z>"),U:s("q<b>"),cF:s("q<fq>"),bl:s("q<cp>"),ah:s("q<bz>"),E:s("q<aL>"),jX:s("q<cR>"),a9:s("q<cQ>"),jU:s("q<jj>"),dz:s("q<cS<cE>>"),jk:s("q<cS<bN>>"),n_:s("q<cS<aU>>"),mQ:s("q<cS<cq>>"),eP:s("q<eq>"),df:s("q<u>"),n:s("q<v>"),dG:s("q<@>"),t:s("q<h>"),kC:s("q<V?>"),dM:s("q<B?>"),g2:s("q<aC>"),T:s("eW"),m:s("V"),d4:s("V()"),dY:s("cd"),dX:s("bk<@>"),bY:s("E<bh>"),a:s("E<bj>"),l_:s("E<R<m,m>>"),O:s("E<ai>"),b3:s("E<bX>"),jz:s("E<+(h,m)>"),ge:s("E<+(v,v,v,v)>"),io:s("E<bZ>"),h:s("E<m>"),iD:s("E<fq>"),ee:s("E<cp>"),eU:s("E<bz>"),cu:s("E<fy>"),j:s("E<@>"),J:s("E<h>"),ia:s("E<B?>"),mK:s("f0"),q:s("M<m,m>"),d7:s("M<@,@>"),iI:s("M<h,@>"),f7:s("R<m,c9>"),iE:s("R<m,ai>"),G:s("R<m,m>"),oQ:s("R<m,u>"),P:s("R<m,@>"),f:s("R<@,@>"),d8:s("R<h,dt>"),c_:s("R<h,du>"),gz:s("R<m,E<+(v,v,v,v)>>"),kz:s("R<bo,E<bz>>"),iu:s("R<h,R<m,m>>"),mz:s("S<z,z>"),dD:s("S<m,m?>"),fP:s("bW"),l0:s("b0"),eb:s("e8"),mR:s("di"),b:s("ah"),K:s("B"),nL:s("b1"),A:s("ai"),f0:s("bX"),gm:s("cG"),ku:s("f8"),lZ:s("ym"),aK:s("+()"),o7:s("+(b0,bN)"),iL:s("+(m,V)"),p3:s("+(bm,cq)"),cW:s("+(v,v,v,v)"),ks:s("Y"),mn:s("bY<cb,aU>"),kk:s("bY<bW,cE>"),ll:s("bY<b0,bN>"),ox:s("bY<bm,cq>"),n4:s("N"),p9:s("aU"),os:s("bl"),W:s("ay"),k8:s("bZ"),Q:s("cI<m>"),nO:s("cI<h>"),m9:s("aV"),gC:s("b3"),ad:s("ed"),c:s("aq<aZ>"),p:s("aq<b1>"),l:s("c_"),fO:s("cJ"),dB:s("az"),N:s("m"),lu:s("bm"),aJ:s("Z"),do:s("cl"),cx:s("ds"),ph:s("cM<m,m>"),mL:s("iJ"),jJ:s("iK"),b9:s("z"),bf:s("b"),pc:s("z(z)"),g:s("b4"),nq:s("bn"),kM:s("bo"),bR:s("dt"),ey:s("du"),mv:s("cp"),kX:s("bz"),cq:s("b5"),bn:s("O<b_>"),ns:s("O<bw>"),hr:s("O<aV>"),am:s("O<b3>"),nn:s("O<m>"),cB:s("O<bn>"),na:s("O<bo>"),lS:s("bR<m>"),hE:s("aL"),fH:s("fy"),d:s("ae<@>"),mp:s("fB<B?,B?>"),j8:s("jg"),fg:s("cR"),at:s("cQ"),ln:s("jh"),fw:s("ji"),hX:s("jt"),fJ:s("c3<bl>"),jg:s("fV"),fL:s("fW"),y:s("u"),al:s("u()"),hg:s("u(b_)"),gl:s("u(bw)"),iW:s("u(B)"),aZ:s("u(aV)"),gw:s("u(b3)"),gS:s("u(m)"),bQ:s("u(bn)"),nw:s("u(bo)"),i:s("v"),z:s("@"),mY:s("@()"),mq:s("@(B)"),ng:s("@(B,c_)"),S:s("h"),gK:s("bi<ah>?"),mU:s("V?"),lH:s("E<@>?"),X:s("B?"),w:s("m?"),ej:s("m?(m)"),nh:s("fm?"),F:s("dy<@,@>?"),Y:s("je?"),fU:s("u?"),hK:s("u(ec)?"),dA:s("v?"),aV:s("h?"),jh:s("aC?"),jE:s("~()?"),as:s("~(b3,aV)?"),ov:s("~(m)?"),bZ:s("~(h)?"),o:s("aC"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.dR=J.hU.prototype
B.a=J.q.prototype
B.c=J.eV.prototype
B.d=J.dc.prototype
B.b=J.dd.prototype
B.dS=J.cd.prototype
B.dT=J.eX.prototype
B.u=A.f1.prototype
B.bw=A.f5.prototype
B.bx=J.ih.prototype
B.aI=J.ds.prototype
B.hm=new A.hb(0,"opaque")
B.a0=new A.fd(1,"next")
B.ch=new A.dT(B.a0,!0,!1,null)
B.ab=new A.hg(0,"add")
B.ci=new A.d_(0,"zero")
B.ac=new A.d_(1,"one")
B.Q=new A.hh(0,"alpha")
B.ad=new A.kd()
B.hn=new A.kf()
B.cl=new A.hf()
B.aO=new A.kj()
B.aP=function getTagFallback(o) {
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
B.aQ=function(hooks) { return hooks; }

B.q=new A.i0()
B.ho=new A.lC()
B.cx=new A.B()
B.cy=new A.ie()
B.hp=new A.m_()
B.cz=new A.m0()
B.cA=new A.bZ()
B.N=new A.by(1,"gradeLUT")
B.cB=new A.bZ()
B.cC=new A.mv()
B.cD=new A.mx()
B.k=new A.mA()
B.F=new A.z(0,1,0)
B.a4=new A.z(0,-1,0)
B.bf=new A.df(1,1,1)
B.cE=new A.ee()
B.aR=new A.iM()
B.fL=new A.cn(0,"position")
B.fR=new A.co(B.fL,0,3)
B.fM=new A.cn(1,"normal")
B.fS=new A.co(B.fM,3,3)
B.fN=new A.cn(2,"color")
B.fT=new A.co(B.fN,6,4)
B.fO=new A.cn(4,"alpha")
B.fU=new A.co(B.fO,10,1)
B.fP=new A.cn(5,"uv0")
B.fV=new A.co(B.fP,11,2)
B.fQ=new A.cn(6,"legacyMaterialEffect")
B.fW=new A.co(B.fQ,13,1)
B.an=s([B.fR,B.fS,B.fT,B.fU,B.fV,B.fW],A.as("q<co>"))
B.R=new A.mZ()
B.aS=new A.jb()
B.r=new A.jn()
B.S=new A.jv()
B.aT=new A.dW(0,"colorOnly")
B.aU=new A.dW(1,"colorAndDepth")
B.ae=new A.dW(2,"depthOnly")
B.af=new A.ht(1,"back")
B.ag=new A.hv(0,"less")
B.T=new A.b_(0,"open")
B.aV=new A.b_(1,"chain")
B.aW=new A.b_(2,"throughDoor")
B.aX=new A.b_(3,"letterbox")
B.J=new A.b_(4,"ignore")
B.K=new A.dZ(0,"opaque")
B.cF=new A.dZ(1,"masked")
B.ah=new A.dZ(2,"blended")
B.cG=new A.eM(!0,B.ag,!1,!0,B.ac,B.ac,B.ab,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.cj=new A.d_(2,"srcAlpha")
B.ck=new A.d_(3,"oneMinusSrcAlpha")
B.cH=new A.eM(!0,B.ag,!1,!0,B.cj,B.ck,B.ab,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.cI=new A.cz(0)
B.cJ=new A.cz(24e5)
B.aY=new A.bw(0,"compliance")
B.cK=new A.e_(B.aY)
B.aZ=new A.bw(1,"rupture")
B.cL=new A.e_(B.aZ)
B.b_=new A.bw(2,"synchronisation")
B.cM=new A.e_(B.b_)
B.b0=new A.d4(0,"front")
B.cN=new A.d4(1,"rearService")
B.cO=new A.d4(2,"sideBoundary")
B.cP=new A.d4(3,"roofline")
B.i=new A.cA(0,"north")
B.w=new A.cA(1,"east")
B.m=new A.cA(2,"south")
B.G=new A.cA(3,"west")
B.U=new A.eP(0,"ground")
B.V=new A.eP(1,"first")
B.cQ=new A.d5(0,"mantle")
B.cR=new A.d5(1,"portal")
B.cT=new A.d5(3,"none")
B.cU=new A.e1(B.cT,null)
B.cS=new A.d5(2,"window")
B.cV=new A.e1(B.cS,"the shutter")
B.cW=new A.K("saved mantle history is malformed",null,null)
B.cX=new A.K("rupture elapsed time is malformed",null,null)
B.cY=new A.K("presentation keys must be strings",null,null)
B.b1=new A.K("saved mantle state is malformed",null,null)
B.cZ=new A.K("inactive rupture has elapsed time",null,null)
B.d_=new A.K("saved difficulty state is malformed",null,null)
B.d0=new A.K("saved house drift state is malformed",null,null)
B.d1=new A.K("saved sleep record is malformed",null,null)
B.d2=new A.K("saved day-loop sleepHistory must be a list",null,null)
B.d3=new A.K("event sequence must be non-negative",null,null)
B.d4=new A.K("modelScale must be positive and finite",null,null)
B.d5=new A.K("saved window state is malformed",null,null)
B.d6=new A.K("save run and meta must be objects",null,null)
B.d7=new A.K("saved house state is malformed",null,null)
B.d8=new A.K("saved sleep record must be an object",null,null)
B.d9=new A.K("saved session run is malformed",null,null)
B.da=new A.K("save map keys must be strings",null,null)
B.db=new A.K("transform.scale must be positive",null,null)
B.dc=new A.K("saved day-loop state is malformed",null,null)
B.dd=new A.K("rupture extinguished mantle is unknown",null,null)
B.b2=new A.K("saved portal state is malformed",null,null)
B.de=new A.K("saved house state does not match this house",null,null)
B.df=new A.K("presentation snapshot contains a non-finite number",null,null)
B.dg=new A.K("save contains a non-finite number",null,null)
B.dh=new A.K("text.json root must be an object",null,null)
B.di=new A.K("event kind is empty",null,null)
B.dj=new A.K("saved session clock is malformed",null,null)
B.dk=new A.K("rupture mantle IDs are malformed",null,null)
B.dl=new A.K("saved sleep record has an unknown enum",null,null)
B.dm=new A.K("save root must be an object",null,null)
B.dn=new A.K("render capabilities contain invalid limits",null,null)
B.dp=new A.K("saved house overrides are malformed",null,null)
B.be=new A.df(0,0,0)
B.eh=s([],t.dQ)
B.hs=s([],A.as("q<ee>"))
B.dq=new A.hG(B.be,0,1,B.bf,0,null,B.eh)
B.dr=new A.e2(0,"idle")
B.ai=new A.e2(1,"active")
B.ds=new A.e2(2,"ended")
B.b3=new A.e3(0,"outside")
B.dt=new A.e3(1,"intersects")
B.du=new A.e3(2,"inside")
B.dv=new A.d7(0,"timeAdvanced")
B.dw=new A.d7(1,"dayEndReached")
B.dx=new A.d7(4,"slept")
B.dy=new A.d7(5,"complianceFloorTripped")
B.dz=new A.eR(0,"vertex")
B.b4=new A.eR(1,"indices")
B.b5=new A.hK(0,"staticDraw")
B.f=new A.eS(0,"ready")
B.L=new A.eS(1,"lost")
B.dA=new A.d8(0,"color")
B.b6=new A.d8(1,"colorAndGlow")
B.dB=new A.d8(2,"colorDepthGlow")
B.aj=new A.d8(3,"depthOnly")
B.W=new A.hM(1,"linear")
B.b7=new A.hN(0,"clampToEdge")
B.dC=new A.hL(1,1,1,!1,B.W,B.W,B.b7)
B.dD=new A.ca(0,"beforeShadow")
B.dE=new A.ca(2,"beforeDepth")
B.b8=new A.ca(3,"afterDepth")
B.b9=new A.ca(4,"beforeWorld")
B.y=new A.ca(6,"afterResolve")
B.dF=new A.ca(9,"beforePresent")
B.ba=new A.bM(0,"readBeforeWrite")
B.dG=new A.bM(1,"duplicateWriter")
B.dH=new A.bM(2,"sampledMultisampledAttachment")
B.dI=new A.bM(4,"formatOrSizeMismatch")
B.dJ=new A.bM(5,"unversionedReadWrite")
B.dK=new A.bM(6,"invalidHistoryRead")
B.dL=new A.bM(7,"dependencyCycle")
B.dM=new A.bM(8,"missingCapability")
B.X=new A.cB(0,"player")
B.ak=new A.cB(1,"inserted")
B.bb=new A.cB(2,"warden")
B.bc=new A.da(0,"wrongKind")
B.bd=new A.da(1,"staleGeneration")
B.dN=new A.da(2,"doubleRelease")
B.al=new A.da(3,"releasedResource")
B.dQ=new A.hT(1,"visitor")
B.dU=new A.lz(null)
B.dV=new A.lA(null)
B.dW=new A.df(0.03,0.03,0.04)
B.bg=s([0,2,2,3],t.t)
B.dX=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cm=new A.cy()
B.cn=new A.cy()
B.co=new A.cy()
B.cp=new A.cy()
B.cq=new A.cy()
B.dY=s([B.cm,B.cn,B.co,B.cp,B.cq],t.hS)
B.dZ=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.t=s(["who","verb","object","place","time"],t.s)
B.e_=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightRange","uLightInnerCos","uLightOuterCos","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity"],t.s)
B.e0=s([2,5,9,12,16,19],t.t)
B.e1=s(["uQuantizationBits","uDitherStrength"],t.s)
B.e2=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.e3=s([B.T,B.aV,B.aW,B.aX,B.J],A.as("q<b_>"))
B.e4=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.P=new A.bo(0,"full")
B.aK=new A.bo(1,"compressed")
B.aL=new A.bo(2,"off")
B.bh=s([B.P,B.aK,B.aL],A.as("q<bo>"))
B.e5=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e6=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.e7=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.e8=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fr=new A.b3(0,"long")
B.c5=new A.b3(1,"short")
B.bi=s([B.fr,B.c5],A.as("q<b3>"))
B.e9=s([2.1,4.2,6.3],t.n)
B.ea=s(["res/house/house.json","assets/house/house.json"],t.s)
B.x=new A.by(0,"inactive")
B.av=new A.by(2,"affineWarp")
B.aw=new A.by(3,"vertexSnap")
B.ax=new A.by(4,"tapeGiveup")
B.ay=new A.by(5,"portalFail")
B.H=new A.by(6,"lightsOut")
B.bj=s([B.x,B.N,B.av,B.aw,B.ax,B.ay,B.H],A.as("q<by>"))
B.eb=s([B.X,B.ak,B.bb],A.as("q<cB>"))
B.ec=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.z=s([],t.hS)
B.ed=s([],A.as("q<cc>"))
B.ek=s([],t.cs)
B.am=s([],t.x)
B.eg=s([],t.bz)
B.ef=s([],t.u)
B.bk=s([],t.e_)
B.ee=s([],t.b2)
B.l=s([],t.s)
B.bl=s([],t.cF)
B.bm=s([],t.E)
B.ei=s([],t.t)
B.ej=s([],t.dG)
B.dP=new A.eU(15,"kitchen",-0.3,0)
B.dO=new A.eU(19,"spare-room",0,0.3)
B.A=s([B.dP,B.dO],A.as("q<eU>"))
B.fo=new A.aV(0,"bed")
B.fp=new A.aV(1,"chair")
B.fq=new A.aV(2,"floor")
B.bn=s([B.fo,B.fp,B.fq],A.as("q<aV>"))
B.bo=s([B.i,B.w,B.m,B.G],A.as("q<cA>"))
B.az=new A.az(0,"depthTest")
B.aA=new A.az(1,"depthFunc")
B.aB=new A.az(2,"depthWrite")
B.aC=new A.az(3,"blendEnable")
B.aD=new A.az(4,"blendFunc")
B.aE=new A.az(5,"blendEquation")
B.aF=new A.az(6,"cullEnable")
B.aG=new A.az(7,"cullFace")
B.c8=new A.az(8,"frontFace")
B.fs=new A.az(9,"stencilEnable")
B.c6=new A.az(10,"colorMask")
B.c7=new A.az(11,"scissorEnable")
B.el=s([B.az,B.aA,B.aB,B.aC,B.aD,B.aE,B.aF,B.aG,B.c8,B.fs,B.c6,B.c7],A.as("q<az>"))
B.em=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.en=s(["uBloomStrength"],t.s)
B.eo=s(["uLutSize","uStrength"],t.s)
B.ep=s([B.aY,B.aZ,B.b_],A.as("q<bw>"))
B.eq=s(["wall-plaster","grime"],t.s)
B.er=s(["uTexelSize","uNear","uFar"],t.s)
B.bp=s(["uTexelStep"],t.s)
B.es=s(["uninitialized"],t.s)
B.I=new A.bn(0,"waiting")
B.a5=new A.bn(1,"atDoor")
B.a6=new A.bn(2,"consulting")
B.a7=new A.bn(3,"resolved")
B.et=s([B.I,B.a5,B.a6,B.a7],A.as("q<bn>"))
B.eS={uAlbedo:0}
B.bq=new A.a4(B.eS,[0],t.I)
B.eI={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.br=new A.a4(B.eI,[2,3,4,5,6],t.I)
B.f0={uAlbedo:0,uShadowMap:1,uSsao:2}
B.eu=new A.a4(B.f0,[0,1,2],t.I)
B.eZ={uSsaoRaw:0,uSceneDepth:1}
B.ev=new A.a4(B.eZ,[0,1],t.I)
B.eW={uScene:0,uHistory:1}
B.ew=new A.a4(B.eW,[0,1],t.I)
B.eJ={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.ex=new A.a4(B.eJ,["e81ac167594e3b48012c9911d2f429a8a4af04fd","d9d0a6d72e06acab62fb1294dbf666451cbdb504","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.B)
B.eP={aPosition:0,aUvMat:1}
B.bs=new A.a4(B.eP,[0,4],t.I)
B.eX={uScene:0,uLut:1}
B.ey=new A.a4(B.eX,[0,1],t.I)
B.eY={uSource:0}
B.bt=new A.a4(B.eY,[0],t.I)
B.eN={uSharp:0,uBlurred:1,uSceneDepth:2}
B.ez=new A.a4(B.eN,[0,1,2],t.I)
B.eT={uBloom:0}
B.eA=new A.a4(B.eT,[0],t.I)
B.eU={uSceneDepth:0}
B.eB=new A.a4(B.eU,[0],t.I)
B.eV={uScene:0}
B.eC=new A.a4(B.eV,[0],t.I)
B.Y={}
B.bu=new A.a4(B.Y,[],t.B)
B.p=new A.a4(B.Y,[],t.I)
B.eD=new A.a4(B.Y,[],A.as("a4<@,@>"))
B.eO={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.bv=new A.a4(B.eO,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.B)
B.eQ={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.eE=new A.a4(B.eQ,[0,1,2,3],t.I)
B.eK={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.eF=new A.a4(B.eK,[0,1,2,3,4],t.I)
B.f_={uTex:0}
B.eG=new A.a4(B.f_,[0],t.I)
B.ao=new A.eQ([B.N,1,B.av,1.5,B.aw,1.5,B.ax,2,B.ay,2,B.H,4],A.as("eQ<by,v>"))
B.f1=new A.ig(0,1,null)
B.f2=new A.ik(1,0,0,0,8,0,0,0,0,0,0,!1)
B.ap=new A.dl(0,"safe")
B.aq=new A.dl(1,"standard")
B.ar=new A.dl(2,"high")
B.C=new A.c8(B.Y,0,t.R)
B.Z=new A.dk(B.ap,B.C)
B.eR={shadows:0}
B.fm=new A.c8(B.eR,1,t.R)
B.f4=new A.dk(B.aq,B.fm)
B.eL={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.fj=new A.c8(B.eL,5,t.R)
B.f5=new A.dk(B.ar,B.fj)
B.f3=new A.dl(4,"shipping")
B.eM={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.fk=new A.c8(B.eM,7,t.R)
B.ht=new A.dk(B.f3,B.fk)
B.f7=new A.br(0.54,0.5,0.44)
B.by=new A.br(0.72,0.52,0.37)
B.f8=new A.br(0.78,0.7,0.54)
B.f9=new A.br(0.86,0.78,0.66)
B.fa=new A.br(0.82,0.8,0.73)
B.fb=new A.br(0.6,0.55,0.48)
B.fc=new A.br(0.68,0.62,0.57)
B.a_=new A.fd(0,"legacy")
B.bz=new A.dm(0,"constructed")
B.v=new A.dm(1,"ready")
B.a1=new A.dm(2,"lost")
B.bA=new A.dm(3,"disposed")
B.hq=new A.hp(1,"srgb")
B.hr=new A.hy(1,"errorsOnly")
B.fd=new A.ir(B.Z,384,216,0)
B.as=new A.dn(0,"constructed")
B.fe=new A.dn(1,"initializing")
B.at=new A.dn(2,"ready")
B.bB=new A.dn(3,"contextLost")
B.h=new A.eb(0,"read")
B.j=new A.eb(1,"write")
B.B=new A.eb(2,"historyRead")
B.n=new A.ff(0,"rgba8")
B.bD=new A.aJ("dofBlurH",B.n,192,108,1,0)
B.bE=new A.aJ("dofBlurV",B.n,192,108,1,0)
B.bF=new A.aJ("dofOutput",B.n,384,216,1,0)
B.bJ=new A.aJ("gradeOutput",B.n,384,216,1,0)
B.au=new A.aJ("vhsOutput",B.n,384,216,1,0)
B.bK=new A.aJ("bloomBlurH",B.n,192,108,1,0)
B.bL=new A.aJ("bloomBlurV",B.n,192,108,1,0)
B.M=new A.aJ("sceneColor",B.n,384,216,1,0)
B.bM=new A.aJ("ps1Output",B.n,384,216,1,0)
B.bI=new A.aJ("ssaoBlurred",B.n,192,108,1,0)
B.bN=new A.N(B.bI,B.j)
B.bH=new A.aJ("ssaoRaw",B.n,192,108,1,0)
B.bO=new A.N(B.bH,B.j)
B.a2=new A.N(B.M,B.j)
B.bP=new A.N(B.au,B.j)
B.bQ=new A.N(B.au,B.B)
B.bR=new A.N(B.bJ,B.j)
B.bC=new A.ff(2,"depth24")
B.bG=new A.aJ("shadowMap",B.bC,512,512,1,0)
B.bS=new A.N(B.bG,B.j)
B.bT=new A.N(B.bF,B.j)
B.bU=new A.N(B.bH,B.h)
B.bV=new A.N(B.M,B.h)
B.ff=new A.aJ("sceneDepth",B.bC,384,216,1,0)
B.bW=new A.N(B.ff,B.j)
B.bX=new A.N(B.bG,B.h)
B.bY=new A.N(B.bM,B.j)
B.bZ=new A.N(B.bE,B.h)
B.c_=new A.N(B.bI,B.h)
B.c0=new A.N(B.bL,B.h)
B.fg=new A.dp(null,"save storage unavailable")
B.fh=new A.dp(null,"save could not be recovered")
B.fi=new A.dp(null,null)
B.eH={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.fl=new A.c8(B.eH,9,t.R)
B.c3=new A.dq(2,"link")
B.fn=new A.fi(B.c3,"gl.createProgram() returned null")
B.c1=new A.dq(0,"vertex")
B.c2=new A.dq(1,"fragment")
B.c4=new A.dq(3,"validation")
B.aJ=new A.z(0,0,0)
B.f6=new A.ip(0,0,0,1)
B.O=new A.iG(B.aJ,B.f6)
B.ft=A.bI("yf")
B.fu=A.bI("yg")
B.fv=A.bI("kK")
B.fw=A.bI("ui")
B.fx=A.bI("up")
B.fy=A.bI("uq")
B.fz=A.bI("ur")
B.fA=A.bI("V")
B.fB=A.bI("B")
B.fC=A.bI("pg")
B.fD=A.bI("va")
B.fE=A.bI("vb")
B.fF=A.bI("fm")
B.e=new A.cL(0,"float1")
B.c9=new A.cL(1,"float2")
B.D=new A.cL(2,"float3")
B.o=new A.cL(3,"mat4")
B.aH=new A.cL(4,"sampler")
B.E=new A.D(B.aH,0)
B.a3=new A.D(B.aH,1)
B.ca=new A.D(B.aH,2)
B.fG=new A.mY(!1)
B.fH=new A.z(0,0,1)
B.fI=new A.z(1,0,0)
B.fJ=new A.z(1/0,1/0,1/0)
B.fK=new A.z(-1/0,-1/0,-1/0)
B.fX=new A.cN(0,"visitorAnswered")
B.cb=new A.cN(1,"visitorIgnored")
B.fY=new A.cN(2,"entryVerified")
B.fZ=new A.cN(3,"entryContradicted")
B.h_=new A.cN(4,"exposureAccepted")
B.h1=new A.c1(1,"malformedDay")
B.h2=new A.c1(2,"malformedTier")
B.cc=new A.c1(3,"missingTierLines")
B.aM=new A.c1(6,"invalidPhase")
B.h8=new A.bp(B.aM,"The active visit cannot be chosen.")
B.hb=new A.b5(B.h8)
B.h5=new A.bp(B.aM,"The active visit has no line to advance.")
B.hc=new A.b5(B.h5)
B.h4=new A.c1(5,"noActiveVisit")
B.h6=new A.bp(B.h4,"There is no active visit.")
B.cd=new A.b5(B.h6)
B.h7=new A.bp(B.aM,"A visit is already active.")
B.hd=new A.b5(B.h7)
B.h3=new A.c1(4,"noArrival")
B.ha=new A.bp(B.h3,"The authored arrival is missing.")
B.he=new A.b5(B.ha)
B.h0=new A.c1(0,"missingCorpus")
B.h9=new A.bp(B.h0,"The authored visitor corpus is empty.")
B.hf=new A.b5(B.h9)
B.ce=new A.dx(1,"exact")
B.aN=new A.dx(2,"partial")
B.a8=new A.dx(3,"contradiction")
B.hg=new A.dx(0,"skipped")
B.hh=new A.dw(B.hg,B.C)
B.hi=new A.dw(B.aN,B.C)
B.cf=new A.fu(0,"horizontal")
B.hj=new A.fu(1,"vertical")
B.cg=new A.fw(0,"horizontal")
B.hk=new A.fw(1,"vertical")
B.a9=new A.ep(0,"empty")
B.hl=new A.ep(1,"cpuReady")
B.aa=new A.ep(4,"released")})();(function staticFields(){$.nv=null
$.bv=A.e([],A.as("q<B>"))
$.qA=null
$.m5=0
$.m6=A.wV()
$.q9=null
$.q8=null
$.t4=null
$.rZ=null
$.t8=null
$.ou=null
$.oB=null
$.pY=null
$.nC=A.e([],A.as("q<E<B>?>"))
$.ex=null
$.h2=null
$.h3=null
$.pH=!1
$.a8=B.r
$.qP=""
$.qQ=null
$.qL=null
$.lW=null
$.bD=A.aa()
$.cr=A.aa()
$.bH=null
$.jG=null
$.H=A.aa()
$.bE=A.aa()
$.bt=A.aa()
$.rm=A.aa()
$.ey=null
$.a2=A.aa()
$.nU=null
$.dG=A.aa()
$.a_=A.aa()
$.px=A.aa()
$.pD=null
$.h0=null
$.py=!1
$.pL=!1
$.pJ=!1
$.rC=!1
$.pI=0
$.rI=0
$.nN=0
$.rY=!1
$.rt="booting"
$.c4=0
$.dH=0
$.aX="hall"
$.fZ=A.aa()
$.et=A.aa()
$.b7=A.aa()
$.rH=null
$.pM=0
$.b8=null
$.eu=A.aa()
$.jC=A.aa()
$.rn=A.aa()
$.rl=A.aa()
$.aA=A.aa()
$.jD=A.aa()
$.jB=A.aa()
$.pw=A.aa()
$.aB=A.aa()
$.jA=A.aa()
$.pv=A.aa()
$.om=A.a3(t.S)
$.cV=A.e([],t.s)
$.pC=null
$.rT=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"yi","th",()=>A.t3("_$dart_dartClosure"))
s($,"yh","eE",()=>A.t3("_$dart_dartClosure_dartJSInterop"))
s($,"yH","tz",()=>A.e([new J.hW()],A.as("q<fh>")))
s($,"yp","tj",()=>A.cm(A.mT({
toString:function(){return"$receiver$"}})))
s($,"yq","tk",()=>A.cm(A.mT({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"yr","tl",()=>A.cm(A.mT(null)))
s($,"ys","tm",()=>A.cm(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yv","tp",()=>A.cm(A.mT(void 0)))
s($,"yw","tq",()=>A.cm(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yu","to",()=>A.cm(A.qM(null)))
s($,"yt","tn",()=>A.cm(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"yy","ts",()=>A.cm(A.qM(void 0)))
s($,"yx","tr",()=>A.cm(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"yz","q2",()=>A.vr())
s($,"yD","tw",()=>A.uG(4096))
s($,"yB","tu",()=>new A.nL().$0())
s($,"yC","tv",()=>new A.nK().$0())
s($,"yA","tt",()=>new Int8Array(A.a0(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"yF","jR",()=>A.jQ(B.fB))
s($,"yn","q1",()=>{A.uU()
return $.m5})
s($,"ye","oY",()=>new A.aJ("sceneColor",B.n,384,216,1,1))
s($,"yj","ti",()=>A.uH(A.e([255,255,255,255],t.t)))
s($,"yI","tA",()=>A.iN(0,1,0))
s($,"yL","jU",()=>{var q=$.qL
if(q==null){A.jN()
A.jN()
A.jN()
A.jN()
A.jN()
q=$.qL=new A.mM()}return q})
s($,"yE","tx",()=>new A.ke())
r($,"pR","eF",()=>A.iN(0,0,0))
r($,"pK","ty",()=>A.iN(0,0,0))
r($,"pT","jT",()=>A.iN(0,0,0))
s($,"yG","jS",()=>new A.kL(A.iN(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cF,ArrayBuffer:A.e8,ArrayBufferView:A.f4,DataView:A.i7,Float32Array:A.f1,Float64Array:A.i8,Int16Array:A.i9,Int32Array:A.ia,Int8Array:A.ib,Uint16Array:A.ic,Uint32Array:A.id,Uint8ClampedArray:A.di,CanvasPixelArray:A.di,Uint8Array:A.f5})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ax.$nativeSuperclassTag="ArrayBufferView"
A.fE.$nativeSuperclassTag="ArrayBufferView"
A.fF.$nativeSuperclassTag="ArrayBufferView"
A.f2.$nativeSuperclassTag="ArrayBufferView"
A.fG.$nativeSuperclassTag="ArrayBufferView"
A.fH.$nativeSuperclassTag="ArrayBufferView"
A.f3.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.oC
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()