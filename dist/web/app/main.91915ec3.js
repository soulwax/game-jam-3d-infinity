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
if(a[b]!==s){A.qA(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.kC(b)
return new s(c,this)}:function(){if(s===null)s=A.kC(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.kC(a).prototype
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
kH(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jw(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kF==null){A.qg()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.lp("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iY
if(o==null)o=$.iY=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qm(a)
if(p!=null)return p
if(typeof a=="function")return B.aX
s=Object.getPrototypeOf(a)
if(s==null)return B.a8
if(s===Object.prototype)return B.a8
if(typeof q=="function"){o=$.iY
if(o==null)o=$.iY=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.H,enumerable:false,writable:true,configurable:true})
return B.H}return B.H},
l1(a,b){if(a<0||a>4294967295)throw A.e(A.ah(a,0,4294967295,"length",null))
return J.nH(new Array(a),b)},
l2(a,b){if(a<0)throw A.e(A.ae("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("q<0>"))},
hC(a,b){if(a<0)throw A.e(A.ae("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("q<0>"))},
nH(a,b){var s=A.j(a,b.i("q<0>"))
s.$flags=1
return s},
nI(a,b){var s=t.U
return J.kM(s.a(a),s.a(b))},
ci(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.eA.prototype}if(typeof a=="string")return J.bY.prototype
if(a==null)return J.d8.prototype
if(typeof a=="boolean")return J.ez.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
if(typeof a=="symbol")return J.cp.prototype
if(typeof a=="bigint")return J.co.prototype
return a}if(a instanceof A.v)return a
return J.jw(a)},
b5(a){if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
if(typeof a=="symbol")return J.cp.prototype
if(typeof a=="bigint")return J.co.prototype
return a}if(a instanceof A.v)return a
return J.jw(a)},
bm(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
if(typeof a=="symbol")return J.cp.prototype
if(typeof a=="bigint")return J.co.prototype
return a}if(a instanceof A.v)return a
return J.jw(a)},
qb(a){if(typeof a=="number")return J.bX.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.c6.prototype
return a},
mr(a){if(typeof a=="number")return J.bX.prototype
if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.c6.prototype
return a},
qc(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
if(typeof a=="symbol")return J.cp.prototype
if(typeof a=="bigint")return J.co.prototype
return a}if(a instanceof A.v)return a
return J.jw(a)},
kL(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mr(a).Z(a,b)},
X(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ci(a).R(a,b)},
aq(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.qk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b5(a).h(a,b)},
by(a,b,c){return J.bm(a).k(a,b,c)},
fK(a,b){return J.bm(a).m(a,b)},
mV(a,b){return J.bm(a).ak(a,b)},
mW(a,b,c){return J.qc(a).dE(a,b,c)},
mX(a,b){return J.bm(a).b3(a,b)},
kM(a,b){return J.mr(a).J(a,b)},
fL(a,b){return J.bm(a).K(a,b)},
aC(a){return J.ci(a).gD(a)},
kN(a){return J.b5(a).gC(a)},
mY(a){return J.b5(a).gE(a)},
K(a){return J.bm(a).gt(a)},
aN(a){return J.b5(a).gn(a)},
kO(a){return J.ci(a).gF(a)},
mZ(a,b,c){return J.bm(a).aO(a,b,c)},
n_(a,b){return J.b5(a).sn(a,b)},
n0(a,b){return J.bm(a).X(a,b)},
jU(a,b){return J.qb(a).j1(a,b)},
cY(a){return J.ci(a).p(a)},
n1(a,b){return J.bm(a).cJ(a,b)},
ex:function ex(){},
ez:function ez(){},
d8:function d8(){},
d9:function d9(){},
bC:function bC(){},
eQ:function eQ(){},
c6:function c6(){},
bn:function bn(){},
co:function co(){},
cp:function cp(){},
q:function q(a){this.$ti=a},
ey:function ey(){},
hD:function hD(a){this.$ti=a},
bP:function bP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bX:function bX(){},
d7:function d7(){},
eA:function eA(){},
bY:function bY(){}},A={jY:function jY(){},
fE(){return $},
n6(a,b,c){if(t.d.b(a))return new A.dB(a,b.i("@<0>").v(c).i("dB<1,2>"))
return new A.bQ(a,b.i("@<0>").v(c).i("bQ<1,2>"))},
l7(a){return new A.bZ("Field '"+a+"' has been assigned during initialization.")},
as(a){return new A.bZ("Field '"+a+"' has not been initialized.")},
nK(a){return new A.bZ("Field '"+a+"' has already been initialized.")},
jx(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
br(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
il(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cT(a,b,c){return a},
kG(a){var s,r
for(s=$.aL.length,r=0;r<s;++r)if(a===$.aL[r])return!0
return!1},
k3(a,b,c,d){A.eU(b,"start")
if(c!=null){A.eU(c,"end")
if(b>c)A.B(A.ah(b,0,c,"start",null))}return new A.ds(a,b,c,d.i("ds<0>"))},
hW(a,b,c,d){if(t.d.b(a))return new A.bT(a,b,c.i("@<0>").v(d).i("bT<1,2>"))
return new A.bp(a,b,c.i("@<0>").v(d).i("bp<1,2>"))},
hB(){return new A.cy("No element")},
nF(){return new A.cy("Too many elements")},
eX(a,b,c,d,e){if(c-b<=32)A.o5(a,b,c,d,e)
else A.o4(a,b,c,d,e)},
o5(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.b5(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.S()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
o4(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.H(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.H(a4+a5,2),f=g-j,e=g+j,d=J.b5(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.X(a6.$2(b,a0),0)
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
A.eX(a3,a4,r-2,a6,a7)
A.eX(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.X(a6.$2(d.h(a3,r),b),0))++r
while(J.X(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.eX(a3,r,q,a6,a7)}else A.eX(a3,r,q,a6,a7)},
bJ:function bJ(){},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b){this.a=a
this.$ti=b},
dA:function dA(){},
iK:function iK(a,b){this.a=a
this.b=b},
aX:function aX(a,b){this.a=a
this.$ti=b},
bZ:function bZ(a){this.a=a},
eh:function eh(a){this.a=a},
ib:function ib(){},
t:function t(){},
ag:function ag(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c_:function c_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
av:function av(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
b0:function b0(a,b){this.a=a
this.$ti=b},
dx:function dx(a,b){this.a=a
this.$ti=b},
Q:function Q(){},
bc:function bc(){},
cA:function cA(){},
e0:function e0(){},
jV(a,b,c){var s,r,q,p,o,n,m,l=A.bo(a.gL(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.x)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.bo(a.gag(),!0,c)
m=new A.b7(q,n,b.i("@<0>").v(c).i("b7<1,2>"))
m.$keys=l
return m}return new A.d0(A.am(a,b,c),b.i("@<0>").v(c).i("d0<1,2>"))},
nc(){throw A.e(A.a9("Cannot modify unmodifiable Map"))},
nd(){throw A.e(A.a9("Cannot modify constant Set"))},
mC(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
qk(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cY(a)
return s},
eS(a){var s,r=$.le
if(r==null)r=$.le=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
i0(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eT(a){var s,r,q,p
if(a instanceof A.v)return A.aK(A.aS(a),null)
s=J.ci(a)
if(s===B.aW||s===B.aY||t.ak.b(a)){r=B.M(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aK(A.aS(a),null)},
lf(a){var s,r,q
if(a==null||typeof a=="number"||A.b3(a))return J.cY(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bz)return a.p(0)
if(a instanceof A.b1)return a.dv(!0)
s=$.mT()
for(r=0;r<1;++r){q=s[r].j3(a)
if(q!=null)return q}return"Instance of '"+A.eT(a)+"'"},
nR(){if(!!self.location)return self.location.href
return null},
o_(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
S(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.bP(s,10)|55296)>>>0,s&1023|56320)}}throw A.e(A.ah(a,0,1114111,null,null))},
ct(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nZ(a){var s=A.ct(a).getUTCFullYear()+0
return s},
nX(a){var s=A.ct(a).getUTCMonth()+1
return s},
nT(a){var s=A.ct(a).getUTCDate()+0
return s},
nU(a){var s=A.ct(a).getUTCHours()+0
return s},
nW(a){var s=A.ct(a).getUTCMinutes()+0
return s},
nY(a){var s=A.ct(a).getUTCSeconds()+0
return s},
nV(a){var s=A.ct(a).getUTCMilliseconds()+0
return s},
nS(a){var s=a.$thrownJsError
if(s==null)return null
return A.bx(s)},
lg(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.W(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
fG(a){throw A.e(A.kB(a))},
c(a,b){if(a==null)J.aN(a)
throw A.e(A.jt(a,b))},
jt(a,b){var s,r="index"
if(!A.ap(b))return new A.aV(!0,b,r,null)
s=A.a(J.aN(a))
if(b<0||b>=s)return A.hy(b,s,a,r)
return A.o0(b,r)},
q4(a,b,c){if(a>c)return A.ah(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ah(b,a,c,"end",null)
return new A.aV(!0,b,"end",null)},
kB(a){return new A.aV(!0,a,null,null)},
e(a){return A.W(a,new Error())},
W(a,b){var s
if(a==null)a=new A.bs()
b.dartException=a
s=A.qB
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
qB(){return J.cY(this.dartException)},
B(a,b){throw A.W(a,b==null?new Error():b)},
aM(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.B(A.p9(a,b,c),s)},
p9(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.du("'"+s+"': Cannot "+o+" "+l+k+n)},
x(a){throw A.e(A.a6(a))},
bt(a){var s,r,q,p,o,n
a=A.my(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.iq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ir(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lo(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jZ(a,b){var s=b==null,r=s?null:b.method
return new A.eB(a,r,s?null:b.receiver)},
a5(a){var s
if(a==null)return new A.hZ(a)
if(a instanceof A.d4){s=a.a
return A.bO(a,s==null?A.cM(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.bO(a,a.dartException)
return A.pO(a)},
bO(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.bP(r,16)&8191)===10)switch(q){case 438:return A.bO(a,A.jZ(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.bO(a,new A.dj())}}if(a instanceof TypeError){p=$.mE()
o=$.mF()
n=$.mG()
m=$.mH()
l=$.mK()
k=$.mL()
j=$.mJ()
$.mI()
i=$.mN()
h=$.mM()
g=p.a6(s)
if(g!=null)return A.bO(a,A.jZ(A.y(s),g))
else{g=o.a6(s)
if(g!=null){g.method="call"
return A.bO(a,A.jZ(A.y(s),g))}else if(n.a6(s)!=null||m.a6(s)!=null||l.a6(s)!=null||k.a6(s)!=null||j.a6(s)!=null||m.a6(s)!=null||i.a6(s)!=null||h.a6(s)!=null){A.y(s)
return A.bO(a,new A.dj())}}return A.bO(a,new A.f1(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dp()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bO(a,new A.aV(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dp()
return a},
bx(a){var s
if(a instanceof A.d4)return a.b
if(a==null)return new A.dP(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.dP(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jQ(a){if(a==null)return J.aC(a)
if(typeof a=="object")return A.eS(a)
return J.aC(a)},
q9(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
qa(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
pn(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(A.cm("Unsupported number of arguments for wrapped closure"))},
cU(a,b){var s=a.$identity
if(!!s)return s
s=A.q0(a,b)
a.$identity=s
return s},
q0(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pn)},
nb(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eY().constructor.prototype):Object.create(new A.ck(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.kU(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.n7(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.kU(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
n7(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.n4)}throw A.e("Error in functionType of tearoff")},
n8(a,b,c,d){var s=A.kT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kU(a,b,c,d){if(c)return A.na(a,b,d)
return A.n8(b.length,d,a,b)},
n9(a,b,c,d){var s=A.kT,r=A.n5
switch(b?-1:a){case 0:throw A.e(new A.eV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
na(a,b,c){var s,r
if($.kR==null)$.kR=A.kQ("interceptor")
if($.kS==null)$.kS=A.kQ("receiver")
s=b.length
r=A.n9(s,c,a,b)
return r},
kC(a){return A.nb(a)},
n4(a,b){return A.dV(v.typeUniverse,A.aS(a.a),b)},
kT(a){return a.a},
n5(a){return a.b},
kQ(a){var s,r,q,p=new A.ck("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.ae("Field name "+a+" not found.",null))},
ms(a){return v.getIsolateTag(a)},
r2(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qm(a){var s,r,q,p,o,n=A.y($.mt.$1(a)),m=$.ju[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.e3($.mp.$2(a,n))
if(q!=null){m=$.ju[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jP(s)
$.ju[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jB[n]=s
return s}if(p==="-"){o=A.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mw(a,s)
if(p==="*")throw A.e(A.lp(n))
if(v.leafTags[n]===true){o=A.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mw(a,s)},
mw(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kH(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jP(a){return J.kH(a,!1,null,!!a.$iaE)},
qq(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jP(s)
else return J.kH(s,c,null,null)},
qg(){if(!0===$.kF)return
$.kF=!0
A.qh()},
qh(){var s,r,q,p,o,n,m,l
$.ju=Object.create(null)
$.jB=Object.create(null)
A.qf()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mx.$1(o)
if(n!=null){m=A.qq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qf(){var s,r,q,p,o,n,m=B.ai()
m=A.cS(B.aj,A.cS(B.ak,A.cS(B.N,A.cS(B.N,A.cS(B.al,A.cS(B.am,A.cS(B.an(B.M),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mt=new A.jy(p)
$.mp=new A.jz(o)
$.mx=new A.jA(n)},
cS(a,b){return a(b)||b},
oy(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.X(r,b[s]))return!1}return!0},
q2(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
qv(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q7(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
my(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
qw(a,b,c){var s=A.qx(a,b,c)
return s},
qx(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.my(b),"g"),A.q7(c))},
dM:function dM(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.a=a},
d0:function d0(a,b){this.a=a
this.$ti=b},
d_:function d_(){},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cd:function cd(a,b){this.a=a
this.$ti=b},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d1:function d1(){},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
dn:function dn(){},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dj:function dj(){},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a){this.a=a},
hZ:function hZ(a){this.a=a},
d4:function d4(a,b){this.a=a
this.b=b},
dP:function dP(a){this.a=a
this.b=null},
bz:function bz(){},
ef:function ef(){},
eg:function eg(){},
f_:function f_(){},
eY:function eY(){},
ck:function ck(a,b){this.a=a
this.b=b},
eV:function eV(a){this.a=a},
b8:function b8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hM:function hM(a){this.a=a},
hS:function hS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
Z:function Z(a,b){this.a=a
this.$ti=b},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aZ:function aZ(a,b){this.a=a
this.$ti=b},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
L:function L(a,b){this.a=a
this.$ti=b},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
b1:function b1(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
qA(a){throw A.W(A.l7(a),new Error())},
f(){throw A.W(A.as(""),new Error())},
o(){throw A.W(A.nK(""),new Error())},
mB(){throw A.W(A.l7(""),new Error())},
M(){var s=new A.iL()
return s.b=s},
iL:function iL(){this.b=null},
pb(a){return a},
nN(a,b,c){return new Float32Array(a,b,c)},
nO(a){return new Uint8Array(a)},
bv(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.jt(b,a))},
p4(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.e(A.q4(a,b,c))
return b},
bF:function bF(){},
cr:function cr(){},
dg:function dg(){},
j8:function j8(a){this.a=a},
eI:function eI(){},
a8:function a8(){},
de:function de(){},
df:function df(){},
dd:function dd(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
dh:function dh(){},
di:function di(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
k2(a,b){var s=b.c
return s==null?b.c=A.dT(a,"aP",[b.x]):s},
li(a){var s=a.w
if(s===6||s===7)return A.li(a.x)
return s===11||s===12},
o2(a){return a.as},
qr(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aB(a){return A.j7(v.typeUniverse,a,!1)},
ch(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ch(a1,s,a3,a4)
if(r===s)return a2
return A.lI(a1,r,!0)
case 7:s=a2.x
r=A.ch(a1,s,a3,a4)
if(r===s)return a2
return A.lH(a1,r,!0)
case 8:q=a2.y
p=A.cR(a1,q,a3,a4)
if(p===q)return a2
return A.dT(a1,a2.x,p)
case 9:o=a2.x
n=A.ch(a1,o,a3,a4)
m=a2.y
l=A.cR(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ka(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cR(a1,j,a3,a4)
if(i===j)return a2
return A.lJ(a1,k,i)
case 11:h=a2.x
g=A.ch(a1,h,a3,a4)
f=a2.y
e=A.pL(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.lG(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cR(a1,d,a3,a4)
o=a2.x
n=A.ch(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.kb(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.eb("Attempted to substitute unexpected RTI kind "+a0))}},
cR(a,b,c,d){var s,r,q,p,o=b.length,n=A.jc(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ch(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
pM(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.jc(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ch(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
pL(a,b,c,d){var s,r=b.a,q=A.cR(a,r,c,d),p=b.b,o=A.cR(a,p,c,d),n=b.c,m=A.pM(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.fj()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
kD(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qe(s)
return a.$S()}return null},
qi(a,b){var s
if(A.li(b))if(a instanceof A.bz){s=A.kD(a)
if(s!=null)return s}return A.aS(a)},
aS(a){if(a instanceof A.v)return A.m(a)
if(Array.isArray(a))return A.V(a)
return A.kp(J.ci(a))},
V(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.kp(a)},
kp(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pk(a,s)},
pk(a,b){var s=a instanceof A.bz?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.oH(v.typeUniverse,s.name)
b.$ccache=r
return r},
qe(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.j7(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
kE(a){return A.bl(A.m(a))},
kz(a){var s
if(a instanceof A.b1)return a.d6()
s=a instanceof A.bz?A.kD(a):null
if(s!=null)return s
if(t.dm.b(a))return J.kO(a).a
if(Array.isArray(a))return A.V(a)
return A.aS(a)},
bl(a){var s=a.r
return s==null?a.r=new A.j6(a):s},
q8(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.c(q,0)
s=A.dV(v.typeUniverse,A.kz(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.lK(v.typeUniverse,s,A.kz(q[r]))}return A.dV(v.typeUniverse,s,a)},
aT(a){return A.bl(A.j7(v.typeUniverse,a,!1))},
pj(a){var s=this
s.b=A.pJ(s)
return s.b(a)},
pJ(a){var s,r,q,p,o
if(a===t.K)return A.pt
if(A.cj(a))return A.px
s=a.w
if(s===6)return A.pf
if(s===1)return A.mc
if(s===7)return A.po
r=A.pI(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.cj)){a.f="$i"+q
if(q==="u")return A.pr
if(a===t.m)return A.pq
return A.pw}}else if(s===10){p=A.q2(a.x,a.y)
o=p==null?A.mc:p
return o==null?A.cM(o):o}return A.pd},
pI(a){if(a.w===8){if(a===t.S)return A.ap
if(a===t.i||a===t.o)return A.ps
if(a===t.N)return A.pv
if(a===t.y)return A.b3}return null},
pi(a){var s=this,r=A.pc
if(A.cj(s))r=A.p2
else if(s===t.K)r=A.cM
else if(A.cV(s)){r=A.pe
if(s===t.gs)r=A.m_
else if(s===t.v)r=A.e3
else if(s===t.a7)r=A.p1
else if(s===t.cg)r=A.m0
else if(s===t.cD)r=A.lZ
else if(s===t.B)r=A.d}else if(s===t.S)r=A.a
else if(s===t.N)r=A.y
else if(s===t.y)r=A.aA
else if(s===t.o)r=A.fB
else if(s===t.i)r=A.lY
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
pd(a){var s=this
if(a==null)return A.cV(s)
return A.ql(v.typeUniverse,A.qi(a,s),s)},
pf(a){if(a==null)return!0
return this.x.b(a)},
pw(a){var s,r=this
if(a==null)return A.cV(r)
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.ci(a)[s]},
pr(a){var s,r=this
if(a==null)return A.cV(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.ci(a)[s]},
pq(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.v)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
mb(a){if(typeof a=="object"){if(a instanceof A.v)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
pc(a){var s=this
if(a==null){if(A.cV(s))return a}else if(s.b(a))return a
throw A.W(A.m4(a,s),new Error())},
pe(a){var s=this
if(a==null||s.b(a))return a
throw A.W(A.m4(a,s),new Error())},
m4(a,b){return new A.dR("TypeError: "+A.ly(a,A.aK(b,null)))},
ly(a,b){return A.eo(a)+": type '"+A.aK(A.kz(a),null)+"' is not a subtype of type '"+b+"'"},
aR(a,b){return new A.dR("TypeError: "+A.ly(a,b))},
po(a){var s=this
return s.x.b(a)||A.k2(v.typeUniverse,s).b(a)},
pt(a){return a!=null},
cM(a){if(a!=null)return a
throw A.W(A.aR(a,"Object"),new Error())},
px(a){return!0},
p2(a){return a},
mc(a){return!1},
b3(a){return!0===a||!1===a},
aA(a){if(!0===a)return!0
if(!1===a)return!1
throw A.W(A.aR(a,"bool"),new Error())},
p1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.W(A.aR(a,"bool?"),new Error())},
lY(a){if(typeof a=="number")return a
throw A.W(A.aR(a,"double"),new Error())},
lZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.W(A.aR(a,"double?"),new Error())},
ap(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.W(A.aR(a,"int"),new Error())},
m_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.W(A.aR(a,"int?"),new Error())},
ps(a){return typeof a=="number"},
fB(a){if(typeof a=="number")return a
throw A.W(A.aR(a,"num"),new Error())},
m0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.W(A.aR(a,"num?"),new Error())},
pv(a){return typeof a=="string"},
y(a){if(typeof a=="string")return a
throw A.W(A.aR(a,"String"),new Error())},
e3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.W(A.aR(a,"String?"),new Error())},
b(a){if(A.mb(a))return a
throw A.W(A.aR(a,"JSObject"),new Error())},
d(a){if(a==null)return a
if(A.mb(a))return a
throw A.W(A.aR(a,"JSObject?"),new Error())},
mk(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aK(a[q],b)
return s},
pC(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mk(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aK(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
m6(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.j([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.m(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.c(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aK(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aK(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aK(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aK(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aK(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aK(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aK(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aK(a.x,b)+">"
if(l===8){p=A.pN(a.x)
o=a.y
return o.length>0?p+("<"+A.mk(o,b)+">"):p}if(l===10)return A.pC(a,b)
if(l===11)return A.m6(a,b,null)
if(l===12)return A.m6(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
pN(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oI(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
oH(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.j7(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dU(a,5,"#")
q=A.jc(s)
for(p=0;p<s;++p)q[p]=r
o=A.dT(a,b,q)
n[b]=o
return o}else return m},
oG(a,b){return A.lS(a.tR,b)},
oF(a,b){return A.lS(a.eT,b)},
j7(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lD(A.lB(a,null,b,!1))
r.set(b,s)
return s},
dV(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lD(A.lB(a,b,c,!0))
q.set(c,r)
return r},
lK(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ka(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
bL(a,b){b.a=A.pi
b.b=A.pj
return b},
dU(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b_(null,null)
s.w=b
s.as=c
r=A.bL(a,s)
a.eC.set(c,r)
return r},
lI(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.oD(a,b,r,c)
a.eC.set(r,s)
return s},
oD(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.cj(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.cV(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.b_(null,null)
q.w=6
q.x=b
q.as=c
return A.bL(a,q)},
lH(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.oB(a,b,r,c)
a.eC.set(r,s)
return s},
oB(a,b,c,d){var s,r
if(d){s=b.w
if(A.cj(b)||b===t.K)return b
else if(s===1)return A.dT(a,"aP",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.b_(null,null)
r.w=7
r.x=b
r.as=c
return A.bL(a,r)},
oE(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b_(null,null)
s.w=13
s.x=b
s.as=q
r=A.bL(a,s)
a.eC.set(q,r)
return r},
dS(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
oA(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dT(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dS(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b_(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bL(a,r)
a.eC.set(p,q)
return q},
ka(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dS(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b_(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.bL(a,o)
a.eC.set(q,n)
return n},
lJ(a,b,c){var s,r,q="+"+(b+"("+A.dS(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.b_(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.bL(a,s)
a.eC.set(q,r)
return r},
lG(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dS(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dS(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.oA(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.b_(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.bL(a,p)
a.eC.set(r,o)
return o},
kb(a,b,c,d){var s,r=b.as+("<"+A.dS(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.oC(a,b,c,r,d)
a.eC.set(r,s)
return s},
oC(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.jc(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ch(a,b,r,0)
m=A.cR(a,c,r,0)
return A.kb(a,n,m,c!==m)}}l=new A.b_(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.bL(a,l)},
lB(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lD(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.ot(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.lC(a,r,l,k,!1)
else if(q===46)r=A.lC(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.cg(a.u,a.e,k.pop()))
break
case 94:k.push(A.oE(a.u,k.pop()))
break
case 35:k.push(A.dU(a.u,5,"#"))
break
case 64:k.push(A.dU(a.u,2,"@"))
break
case 126:k.push(A.dU(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ov(a,k)
break
case 38:A.ou(a,k)
break
case 63:p=a.u
k.push(A.lI(p,A.cg(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lH(p,A.cg(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.os(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.lE(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.ox(a.u,a.e,o)
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
return A.cg(a.u,a.e,m)},
ot(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lC(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.oI(s,o.x)[p]
if(n==null)A.B('No "'+p+'" in "'+A.o2(o)+'"')
d.push(A.dV(s,o,n))}else d.push(p)
return m},
ov(a,b){var s,r=a.u,q=A.lA(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dT(r,p,q))
else{s=A.cg(r,a.e,p)
switch(s.w){case 11:b.push(A.kb(r,s,q,a.n))
break
default:b.push(A.ka(r,s,q))
break}}},
os(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.lA(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.cg(p,a.e,o)
q=new A.fj()
q.a=s
q.b=n
q.c=m
b.push(A.lG(p,r,q))
return
case-4:b.push(A.lJ(p,b.pop(),s))
return
default:throw A.e(A.eb("Unexpected state under `()`: "+A.w(o)))}},
ou(a,b){var s=b.pop()
if(0===s){b.push(A.dU(a.u,1,"0&"))
return}if(1===s){b.push(A.dU(a.u,4,"1&"))
return}throw A.e(A.eb("Unexpected extended operation "+A.w(s)))},
lA(a,b){var s=b.splice(a.p)
A.lE(a.u,a.e,s)
a.p=b.pop()
return s},
cg(a,b,c){if(typeof c=="string")return A.dT(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ow(a,b,c)}else return c},
lE(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cg(a,b,c[s])},
ox(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cg(a,b,c[s])},
ow(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.eb("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.eb("Bad index "+c+" for "+b.p(0)))},
ql(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a2(a,b,null,c,null)
r.set(c,s)}return s},
a2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.cj(d))return!0
s=b.w
if(s===4)return!0
if(A.cj(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a2(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.a2(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.a2(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a2(a,b.x,c,d,e))return!1
return A.a2(a,A.k2(a,b),c,d,e)}if(s===6)return A.a2(a,p,c,d,e)&&A.a2(a,b.x,c,d,e)
if(q===7){if(A.a2(a,b,c,d.x,e))return!0
return A.a2(a,b,c,A.k2(a,d),e)}if(q===6)return A.a2(a,b,c,p,e)||A.a2(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.cj)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.a2(a,j,c,i,e)||!A.a2(a,i,e,j,c))return!1}return A.ma(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.ma(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pp(a,b,c,d,e)}if(o&&q===10)return A.pu(a,b,c,d,e)
return!1},
ma(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a2(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.a2(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a2(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a2(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.a2(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
pp(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dV(a,b,r[o])
return A.lW(a,p,null,c,d.y,e)}return A.lW(a,b.y,null,c,d.y,e)},
lW(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a2(a,b[s],d,e[s],f))return!1
return!0},
pu(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a2(a,r[s],c,q[s],e))return!1
return!0},
cV(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.cj(a))if(s!==6)r=s===7&&A.cV(a.x)
return r},
cj(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
lS(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
jc(a){return a>0?new Array(a):v.typeUniverse.sEA},
b_:function b_(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
fj:function fj(){this.c=this.b=this.a=null},
j6:function j6(a){this.a=a},
fi:function fi(){},
dR:function dR(a){this.a=a},
ok(){var s,r,q
if(self.scheduleImmediate!=null)return A.pX()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cU(new A.iH(s),1)).observe(r,{childList:true})
return new A.iG(s,r,q)}else if(self.setImmediate!=null)return A.pY()
return A.pZ()},
ol(a){self.scheduleImmediate(A.cU(new A.iI(t.M.a(a)),0))},
om(a){self.setImmediate(A.cU(new A.iJ(t.M.a(a)),0))},
on(a){t.M.a(a)
A.oz(0,a)},
oz(a,b){var s=new A.j4()
s.fR(a,b)
return s},
bj(a){return new A.fd(new A.U($.T,a.i("U<0>")),a.i("fd<0>"))},
bi(a,b){a.$2(0,null)
b.b=!0
return b.a},
ad(a,b){A.p3(a,b)},
bh(a,b){b.bT(a)},
bg(a,b){b.bU(A.a5(a),A.bx(a))},
p3(a,b){var s,r,q=new A.je(b),p=new A.jf(b)
if(a instanceof A.U)a.du(q,p,t.z)
else{s=t.z
if(a instanceof A.U)a.cE(q,p,s)
else{r=new A.U($.T,t._)
r.a=8
r.c=a
r.du(q,p,s)}}},
bk(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.T.fb(new A.jr(s),t.H,t.S,t.z)},
lF(a,b,c){return 0},
fU(a){var s
if(t.C.b(a)){s=a.gaD()
if(s!=null)return s}return B.u},
kZ(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.U($.T,b.i("U<u<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.hh(i,h,g,f)
try{for(n=J.K(a),m=t.P;n.l();){r=n.gq()
q=i.b
r.cE(new A.hg(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.aX(A.j([],b.i("q<0>")))
return n}i.a=A.c0(n,null,!1,b.i("0?"))}catch(l){p=A.a5(l)
o=A.bx(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.m9(m,k)
m=new A.af(m,k==null?A.fU(m):k)
n.aT(m)
return n}else{i.d=p
i.c=o}}return f},
m9(a,b){if($.T===B.j)return null
return null},
pl(a,b){if($.T!==B.j)A.m9(a,b)
if(b==null)if(t.C.b(a)){b=a.gaD()
if(b==null){A.lg(a,B.u)
b=B.u}}else b=B.u
else if(t.C.b(a))A.lg(a,b)
return new A.af(a,b)},
oo(a,b){var s=new A.U($.T,b.i("U<0>"))
b.a(a)
s.a=8
s.c=a
return s},
k6(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.o6()
b.aT(new A.af(new A.aV(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.de(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.b0()
b.aW(o.a)
A.cB(b,p)
return}b.a^=2
A.fD(null,null,b.b,t.M.a(new A.iQ(o,b)))},
cB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.ku(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.cB(d.a,c)
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
A.ku(j.a,j.b)
return}g=$.T
if(g!==h)$.T=h
else g=null
c=c.c
if((c&15)===8)new A.iU(q,d,n).$0()
else if(o){if((c&1)!==0)new A.iT(q,j).$0()}else if((c&2)!==0)new A.iS(d,q).$0()
if(g!=null)$.T=g
c=q.c
if(c instanceof A.U){p=q.a.$ti
p=p.i("aP<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.b1(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.k6(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.b1(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
pD(a,b){var s
if(t.Q.b(a))return b.fb(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.e(A.aW(a,"onError",u.c))},
pz(){var s,r
for(s=$.cN;s!=null;s=$.cN){$.e6=null
r=s.b
$.cN=r
if(r==null)$.e5=null
s.a.$0()}},
pK(){$.kq=!0
try{A.pz()}finally{$.e6=null
$.kq=!1
if($.cN!=null)$.kJ().$1(A.mq())}},
mn(a){var s=new A.fe(a),r=$.e5
if(r==null){$.cN=$.e5=s
if(!$.kq)$.kJ().$1(A.mq())}else $.e5=r.b=s},
pH(a){var s,r,q,p=$.cN
if(p==null){A.mn(a)
$.e6=$.e5
return}s=new A.fe(a)
r=$.e6
if(r==null){s.b=p
$.cN=$.e6=s}else{q=r.b
s.b=q
$.e6=r.b=s
if(q==null)$.e5=s}},
qJ(a,b){A.cT(a,"stream",t.K)
return new A.fu(b.i("fu<0>"))},
ku(a,b){A.pH(new A.jn(a,b))},
mj(a,b,c,d,e){var s,r=$.T
if(r===c)return d.$0()
$.T=c
s=r
try{r=d.$0()
return r}finally{$.T=s}},
pG(a,b,c,d,e,f,g){var s,r=$.T
if(r===c)return d.$1(e)
$.T=c
s=r
try{r=d.$1(e)
return r}finally{$.T=s}},
pF(a,b,c,d,e,f,g,h,i){var s,r=$.T
if(r===c)return d.$2(e,f)
$.T=c
s=r
try{r=d.$2(e,f)
return r}finally{$.T=s}},
fD(a,b,c,d){t.M.a(d)
if(B.j!==c){d=c.hX(d)
d=d}A.mn(d)},
iH:function iH(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
j4:function j4(){},
j5:function j5(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=!1
this.$ti=b},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jr:function jr(a){this.a=a},
dQ:function dQ(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cH:function cH(a,b){this.a=a
this.$ti=b},
af:function af(a,b){this.a=a
this.b=b},
hh:function hh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ff:function ff(){},
dy:function dy(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
U:function U(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iN:function iN(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
fe:function fe(a){this.a=a
this.b=null},
fu:function fu(a){this.$ti=a},
e_:function e_(){},
fr:function fr(){},
j3:function j3(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
lz(a,b){var s=a[b]
return s===a?null:s},
k8(a,b,c){if(c==null)a[b]=a
else a[b]=c},
k7(){var s=Object.create(null)
A.k8(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
la(a,b){return new A.b8(a.i("@<0>").v(b).i("b8<1,2>"))},
R(a,b,c){return b.i("@<0>").v(c).i("l9<1,2>").a(A.q9(a,new A.b8(b.i("@<0>").v(c).i("b8<1,2>"))))},
r(a,b){return new A.b8(a.i("@<0>").v(b).i("b8<1,2>"))},
k_(a){return new A.be(a.i("be<0>"))},
a7(a){return new A.be(a.i("be<0>"))},
eF(a,b){return b.i("lb<0>").a(A.qa(a,new A.be(b.i("be<0>"))))},
k9(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
or(a,b,c){var s=new A.cf(a,b,c.i("cf<0>"))
s.c=a.e
return s},
d6(a,b){var s=J.K(a.a)
if(new A.aa(s,a.b,a.$ti.i("aa<1>")).l())return s.gq()
return null},
am(a,b,c){var s=A.la(b,c)
a.a0(0,new A.hT(s,b,c))
return s},
lc(a,b){var s,r,q=A.k_(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.x)(a),++r)q.m(0,b.a(a[r]))
return q},
nL(a,b){var s=A.k_(b)
s.Y(0,a)
return s},
nM(a,b){var s=t.U
return J.kM(s.a(a),s.a(b))},
k0(a){var s,r
if(A.kG(a))return"{...}"
s=new A.aj("")
try{r={}
B.a.m($.aL,a)
s.a+="{"
r.a=!0
a.a0(0,new A.hV(r,s))
s.a+="}"}finally{if(0>=$.aL.length)return A.c($.aL,-1)
$.aL.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
oJ(){throw A.e(A.a9("Cannot change an unmodifiable set"))},
dD:function dD(){},
iX:function iX(a){this.a=a},
dF:function dF(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cc:function cc(a,b){this.a=a
this.$ti=b},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
be:function be(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fn:function fn(a){this.a=a
this.c=this.b=null},
cf:function cf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
z:function z(){},
F:function F(){},
hU:function hU(a){this.a=a},
hV:function hV(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.$ti=b},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
dW:function dW(){},
cq:function cq(){},
bH:function bH(a,b){this.a=a
this.$ti=b},
bq:function bq(){},
dO:function dO(){},
fw:function fw(){},
dt:function dt(a,b){this.a=a
this.$ti=b},
cI:function cI(){},
dX:function dX(){},
pA(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a5(r)
q=A.Y(String(s),null,null)
throw A.e(q)}q=A.jg(p)
return q},
jg(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.fl(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.jg(a[s])
return a},
p_(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.mR()
else s=new Uint8Array(o)
for(r=J.b5(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
oZ(a,b,c,d){var s=a?$.mQ():$.mP()
if(s==null)return null
if(0===c&&d===b.length)return A.lR(s,b)
return A.lR(s,b.subarray(c,d))},
lR(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
kP(a,b,c,d,e,f){if(B.c.aa(f,4)!==0)throw A.e(A.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.e(A.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.e(A.Y("Invalid base64 padding, more than two '=' characters",a,b))},
l6(a,b,c){return new A.da(a,b)},
p8(a){return a.A()},
op(a,b){return new A.j_(a,[],A.q1())},
oq(a,b,c){var s,r=new A.aj(""),q=A.op(r,b)
q.bq(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
p0(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
fl:function fl(a,b){this.a=a
this.b=b
this.c=null},
iZ:function iZ(a){this.a=a},
fm:function fm(a){this.a=a},
jb:function jb(){},
ja:function ja(){},
ed:function ed(){},
fX:function fX(){},
bR:function bR(){},
ek:function ek(){},
en:function en(){},
da:function da(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
eC:function eC(){},
hO:function hO(a){this.b=a},
hN:function hN(a){this.a=a},
j0:function j0(){},
j1:function j1(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c){this.c=a
this.a=b
this.b=c},
f4:function f4(){},
iv:function iv(a){this.a=a},
j9:function j9(a){this.a=a
this.b=16
this.c=0},
qj(a){var s=A.i0(a,null)
if(s!=null)return s
throw A.e(A.Y(a,null,null))},
nw(a,b){a=A.W(a,new Error())
if(a==null)a=A.cM(a)
a.stack=b.p(0)
throw a},
c0(a,b,c,d){var s,r=c?J.l2(a,d):J.l1(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bo(a,b,c){var s,r=A.j([],c.i("q<0>"))
for(s=J.K(a);s.l();)B.a.m(r,c.a(s.gq()))
if(b)return r
r.$flags=1
return r},
at(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.i("q<0>"))
s=A.j([],b.i("q<0>"))
for(r=J.K(a);r.l();)B.a.m(s,r.gq())
return s},
bE(a,b){var s=A.bo(a,!1,b)
s.$flags=3
return s},
lm(a,b,c){var s,r
A.eU(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.e(A.ah(c,b,null,"end",null))
if(s===0)return""}r=A.o8(a,b,c)
return r},
o8(a,b,c){var s=a.length
if(b>=s)return""
return A.o_(a,b,c==null||c>s?s:c)},
ll(a,b,c){var s=J.K(b)
if(!s.l())return a
if(c.length===0){do a+=A.w(s.gq())
while(s.l())}else{a+=A.w(s.gq())
while(s.l())a=a+c+A.w(s.gq())}return a},
k5(){var s,r,q=A.nR()
if(q==null)throw A.e(A.a9("'Uri.base' is not supported"))
s=$.ls
if(s!=null&&q===$.lr)return s
r=A.of(q)
$.ls=r
$.lr=q
return r},
o6(){return A.bx(new Error())},
ne(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
kV(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
el(a){if(a>=10)return""+a
return"0"+a},
nv(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.e(A.aW(b,"name","No enum value with that name"))},
eo(a){if(typeof a=="number"||A.b3(a)||a==null)return J.cY(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lf(a)},
nx(a,b){A.cT(a,"error",t.K)
A.cT(b,"stackTrace",t.l)
A.nw(a,b)},
eb(a){return new A.ea(a)},
ae(a,b){return new A.aV(!1,null,b,a)},
aW(a,b,c){return new A.aV(!0,a,b,c)},
lh(a){var s=null
return new A.cu(s,s,!1,s,s,a)},
o0(a,b){return new A.cu(null,null,!0,a,b,"Value not in range")},
ah(a,b,c,d,e){return new A.cu(b,c,!0,a,d,"Invalid value")},
dm(a,b,c){if(0>a||a>c)throw A.e(A.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.ah(b,a,c,"end",null))
return b}return c},
eU(a,b){if(a<0)throw A.e(A.ah(a,0,null,b,null))
return a},
hy(a,b,c,d){return new A.eu(b,!0,a,d,"Index out of range")},
a9(a){return new A.du(a)},
lp(a){return new A.f0(a)},
a3(a){return new A.cy(a)},
a6(a){return new A.ei(a)},
cm(a){return new A.iM(a)},
Y(a,b,c){return new A.J(a,b,c)},
nG(a,b,c){var s,r
if(A.kG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
B.a.m($.aL,a)
try{A.py(a,s)}finally{if(0>=$.aL.length)return A.c($.aL,-1)
$.aL.pop()}r=A.ll(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jX(a,b,c){var s,r
if(A.kG(a))return b+"..."+c
s=new A.aj(b)
B.a.m($.aL,a)
try{r=s
r.a=A.ll(r.a,a,", ")}finally{if(0>=$.aL.length)return A.c($.aL,-1)
$.aL.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
py(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.w(l.gq())
B.a.m(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.l()){if(j<=4){B.a.m(b,A.w(p))
return}r=A.w(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.l();p=o,o=n){n=l.gq();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.w(p)
r=A.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
cs(a,b,c,d){var s
if(B.f===c){s=J.aC(a)
b=J.aC(b)
return A.il(A.br(A.br($.fH(),s),b))}if(B.f===d){s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
return A.il(A.br(A.br(A.br($.fH(),s),b),c))}s=J.aC(a)
b=J.aC(b)
c=J.aC(c)
d=J.aC(d)
d=A.il(A.br(A.br(A.br(A.br($.fH(),s),b),c),d))
return d},
nP(a){var s,r,q=$.fH()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.x)(a),++r)q=A.br(q,J.aC(a[r]))
return A.il(q)},
lk(a,b){return new A.dt(A.nL(a,b),b.i("dt<0>"))},
of(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.c(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.lq(a4<a4?B.b.u(a5,0,a4):a5,5,a3).gfe()
else if(s===32)return A.lq(B.b.u(a5,5,a4),0,a3).gfe()}r=A.c0(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.mm(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.mm(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.M(a5,"\\",n))if(p>0)h=B.b.M(a5,"\\",p-1)||B.b.M(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.M(a5,"..",n)))h=m>n+2&&B.b.M(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.M(a5,"file",0)){if(p<=0){if(!B.b.M(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.u(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.aC(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.M(a5,"http",0)){if(i&&o+3===n&&B.b.M(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.aC(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.M(a5,"https",0)){if(i&&o+4===n&&B.b.M(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.aC(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.fs(a4<a5.length?B.b.u(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.oT(a5,0,q)
else{if(q===0)A.cJ(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.oU(a5,c,p-1):""
a=A.oP(a5,p,o,!1)
i=o+1
if(i<n){a0=A.i0(B.b.u(a5,i,n),a3)
d=A.oR(a0==null?A.B(A.Y("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.oQ(a5,n,m,a3,j,a!=null)
a2=m<l?A.oS(a5,m+1,l,a3):a3
return A.oK(j,b,a,d,a1,a2,l<a4?A.oO(a5,l+1,a4):a3)},
lu(a){var s=t.N
return B.a.eX(A.j(a.split("&"),t.s),A.r(s,s),new A.iu(B.O),t.G)},
f3(a,b,c){throw A.e(A.Y("Illegal IPv4 address, "+a,b,c))},
oc(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.c(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.f3("each part must be in the range 0..255",a,r)}A.f3("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.f3(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aM(d)
if(!(k<16))return A.c(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.f3(j,a,q)
p=l}A.f3("IPv4 address should contain exactly 4 parts",a,q)},
od(a,b,c){var s
if(b===c)throw A.e(A.Y("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.c(a,b)
if(a.charCodeAt(b)===118){s=A.oe(a,b,c)
if(s!=null)throw A.e(s)
return!1}A.lt(a,b,c)
return!0},
oe(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.J(n,a,q)
r=q
break}return new A.J("Unexpected character",a,q-1)}if(r-1===b)return new A.J(n,a,r)
return new A.J("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.J("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.c(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.J("Invalid IPvFuture address character",a,r)}},
lt(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.it(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.c(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.c(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.c(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.oc(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.bP(l,8)
if(!(o<16))return A.c(s,o)
s[o]=e;++o
if(!(o<16))return A.c(s,o)
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
B.a6.fo(s,a0,16,s,a)
B.a6.iq(s,a,a0,0)}}return s},
oK(a,b,c,d,e,f,g){return new A.dY(a,b,c,d,e,f,g)},
lL(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cJ(a,b,c){throw A.e(A.Y(c,a,b))},
oR(a,b){var s=A.lL(b)
if(a===s)return null
return a},
oP(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.c(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.c(a,r)
if(a.charCodeAt(r)!==93)A.cJ(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.c(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.oM(a,q,r)
if(o<r){n=o+1
p=A.lQ(a,B.b.M(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.od(a,q,o)
l=B.b.u(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.c(a,k)
if(a.charCodeAt(k)===58){o=B.b.bg(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.lQ(a,B.b.M(a,"25",n)?o+3:n,c,"%25")}else p=""
A.lt(a,b,o)
return"["+B.b.u(a,b,o)+p+"]"}}return A.oW(a,b,c)},
oM(a,b,c){var s=B.b.bg(a,"%",b)
return s>=b&&s<c?s:c},
lQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aj(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.kd(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aj("")
l=h.a+=B.b.u(a,q,r)
if(m)n=B.b.u(a,r,r+3)
else if(n==="%")A.cJ(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aj("")
if(q<r){h.a+=B.b.u(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.c(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.u(a,q,r)
if(h==null){h=new A.aj("")
m=h}else m=h
m.a+=i
l=A.kc(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.u(a,b,c)
if(q<c){i=B.b.u(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
oW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.kd(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aj("")
k=B.b.u(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.u(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aj("")
if(q<r){p.a+=B.b.u(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cJ(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.c(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.u(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aj("")
l=p}else l=p
l.a+=k
j=A.kc(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.u(a,b,c)
if(q<c){k=B.b.u(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
oT(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.c(a,b)
if(!A.lN(a.charCodeAt(b)))A.cJ(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.cJ(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.u(a,b,c)
return A.oL(q?a.toLowerCase():a)},
oL(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oU(a,b,c){return A.dZ(a,b,c,16,!1,!1)},
oQ(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.dZ(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.oV(q,e,f)},
oV(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.oX(a,!s||c)
return A.oY(a)},
oS(a,b,c,d){return A.dZ(a,b,c,256,!0,!1)},
oO(a,b,c){return A.dZ(a,b,c,256,!0,!1)},
kd(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.c(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.c(a,l)
q=a.charCodeAt(l)
p=A.jx(r)
o=A.jx(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.c(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.S(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.u(a,b,b+3).toUpperCase()
return null},
kc(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.c(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.c.hB(a,6*p)&63|q
if(!(o<r))return A.c(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.c(k,l)
if(!(m<r))return A.c(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.c(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.lm(s,0,null)},
dZ(a,b,c,d,e,f){var s=A.lP(a,b,c,d,e,f)
return s==null?B.b.u(a,b,c):s},
lP(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.c(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.kd(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cJ(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.c(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.kc(n)}if(o==null){o=new A.aj("")
k=o}else k=o
k.a=(k.a+=B.b.u(a,p,q))+l
if(typeof m!=="number")return A.fG(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.u(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
lO(a){if(B.b.T(a,"."))return!0
return B.b.bf(a,"/.")!==-1},
oY(a){var s,r,q,p,o,n,m
if(!A.lO(a))return a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.bk(s,"/")},
oX(a,b){var s,r,q,p,o,n
if(!A.lO(a))return!b?A.lM(a):a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gG(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.k(s,0,A.lM(s[0]))}return B.a.bk(s,"/")},
lM(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.lN(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.u(a,0,s)+"%3A"+B.b.aR(a,s+1)
if(r<=127){if(!(r<128))return A.c(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
oN(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.c(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.e(A.ae("Invalid URL encoding",null))}}return r},
ke(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.O===d)return B.b.u(a,b,c)
else p=new A.eh(B.b.u(a,b,c))
else{p=A.j([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.e(A.ae("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.e(A.ae("Truncated URI",null))
B.a.m(p,A.oN(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}t.I.a(p)
return B.bA.i5(p)},
lN(a){var s=a|32
return 97<=s&&s<=122},
lq(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.j([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.e(A.Y(k,a,r))}}if(q<0&&r>b)throw A.e(A.Y(k,a,r))
while(p!==44){B.a.m(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.c(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.m(j,o)
else{n=B.a.gG(j)
if(p!==44||r!==n+7||!B.b.M(a,"base64",n+1))throw A.e(A.Y("Expecting '='",a,r))
break}}B.a.m(j,r)
m=r+1
if((j.length&1)===1)a=B.ah.iH(a,m,s)
else{l=A.lP(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aC(a,m,s,l)}return new A.is(a,j,c)},
mm(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.c(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(){},
I:function I(){},
ea:function ea(a){this.a=a},
bs:function bs(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eu:function eu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
du:function du(a){this.a=a},
f0:function f0(a){this.a=a},
cy:function cy(a){this.a=a},
ei:function ei(a){this.a=a},
eP:function eP(){},
dp:function dp(){},
iM:function iM(a){this.a=a},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},
P:function P(){},
v:function v(){},
fv:function fv(){},
aj:function aj(a){this.a=a},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
dY:function dY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
fg:function fg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
hY:function hY(a){this.a=a},
a1(a){var s
if(typeof a=="function")throw A.e(A.ae("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fC,a)
s[$.cW()]=a
return s},
fC(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
qd(a,b,c){return c.a(a[b])},
b4(a,b,c,d){return d.a(a[b].apply(a,c))},
m2(a,b,c,d){return d.a(a[b](c))},
b6(a,b){var s=new A.U($.T,b.i("U<0>")),r=new A.dy(s,b.i("dy<0>"))
a.then(A.cU(new A.jR(r,b),1),A.cU(new A.jS(r),1))
return s},
md(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
fF(a){if(A.md(a))return a
return new A.js(new A.dF(t.hg)).$1(a)},
jR:function jR(a,b){this.a=a
this.b=b},
jS:function jS(a){this.a=a},
js:function js(a){this.a=a},
fk:function fk(){},
cC:function cC(){this.b=this.a=0},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV(a,b){var s=0,r=A.bj(t.f_),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$fV=A.bk(function(a0,a1){if(a0===1)return A.bg(a1,r)
for(;;)switch(s){case 0:p=A.b(new v.G.AudioContext())
o=t.m
n=A.r(t.N,o)
m=A.b(p.createGain())
l=A.b(p.createGain())
k=A.b(p.createGain())
j=A.b(p.createGain())
i=A.b(p.createGain())
h=A.b(p.createGain())
g=A.b(p.createGain())
f=A.b(p.createGain())
e=A.b(p.createGain())
d=A.b(p.createConvolver())
c=new A.ec(p,b,m,l,k,j,i,h,g,f,e,d,n,B.P,A.r(o,t.aT))
c.fJ(p,b)
p=A.m(a).i("L<1,2>")
s=3
return A.ad(A.kZ(A.hW(new A.L(a,p),p.i("aP<P>(l.E)").a(new A.fW(c)),p.i("l.E"),t.aQ),t.P),$async$fV)
case 3:n=n.h(0,"ir-stone")
p=n==null?c.hb():n
d.buffer=p
q=c
s=1
break
case 1:return A.bh(q,r)}})
return A.bi($async$fV,r)},
ec:function ec(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fW:function fW(a){this.a=a},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
hf:function hf(a){this.a=a},
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
hl:function hl(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
hm:function hm(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=0
this.$ti=b},
ev:function ev(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
eG:function eG(a){this.a=a},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a,b){this.a=a
this.b=b},
dr(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aM(a)
s=a.length
if(!(b<s))return A.c(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.c(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.c(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.c(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.c(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.c(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.c(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.c(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.c(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.c(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.c(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.c(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.c(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.c(a,r)
a[r]=l
return b+14},
dq:function dq(a){this.a=a
this.b=0},
i2:function i2(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
i7:function i7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o1(a,b,c){var s,r,q,p,o,n,m,l,k,j=t.N,i=A.j([],t.s),h=new Float32Array(336e3),g=new Float32Array(67200),f=J.hC(800,t.cO)
for(s=0;s<800;++s)f[s]=new A.fq(new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0))
r=t.S
q=A.c0(800,0,!1,r)
p=new Float32Array(8064)
o=J.hC(4000,t.as)
for(s=0;s<4000;++s)o[s]=new A.fo(new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),0,1,0,0,0)
n=A.c0(4000,0,!1,r)
m=new A.i(0.3,0.7,-0.5).ga4()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.f1
k=new A.i3(a,new A.hl(a,A.r(t.m,r)),b,c,A.a7(j),new A.eW(B.m,i,A.a7(j)),h,g,f,q,p,A.r(r,t.er),o,n,m,B.b8,new A.i(0,0,0),new A.i(0,0,1),new A.i(0,1,0),new A.i(1,0,0),new A.eG(l),a,A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k))
k.fO(a,b,c)
return k},
i3:function i3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.a5=a
_.a8=b
_.am=c
_.an=d
_.cj=_.eD=1
_.ct=_.cs=_.eV=_.eU=_.eT=_.eS=_.eR=_.eQ=_.cr=_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.eP=_.eO=_.eN=_.ck=_.eM=_.eL=_.eK=_.eJ=_.eI=_.eH=_.eG=_.eF=_.eE=_.V=$
_.b6=null
_.dJ=e
_.e9=_.e8=_.e7=_.e6=_.e5=_.e4=_.e3=_.e2=_.e1=_.e0=_.e_=_.dZ=_.dY=_.dX=_.dW=_.dV=_.dU=_.dT=_.dS=_.dR=_.dQ=_.dP=_.dO=_.dN=_.dM=_.dL=_.dK=_.b7=$
_.b8=0
_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=$
_.bc=_.bb=_.ba=_.b9=_.aI=_.al=null
_.aJ=$
_.ec=_.eb=_.ea=!1
_.ii=1
_.c2=f
_.c3=g
_.ij=h
_.ed=i
_.bd=0
_.ee=j
_.ik=k
_.c4=0
_.c5=l
_.il=1
_.c6=!1
_.aK=0
_.c7=m
_.aL=0
_.ef=n
_.eg=o
_.ej=_.ei=_.eh=1
_.ek=0.55
_.c8=p
_.el=q
_.c9=r
_.ca=s
_.cb=a0
_.em=_.cf=_.ce=_.cd=_.cc=0
_.en=null
_.eo=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.ey=_.ci=_.cg=_.ex=_.ew=_.ip=_.io=_.im=_.ev=_.eu=_.es=_.er=_.eq=_.ep=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.ez=a7
_.eA=a8
_.eB=a9
_.eC=b0},
me(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.U(0,c).b4(f.U(0,c)).ga4(),r=A.jp(g)
return A.mg(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
e8(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aM(a)
s=a.length
if(!(b<s))return A.c(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.c(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.c(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.c(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.c(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.c(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.c(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.c(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.c(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.c(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.c(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.c(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.c(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.c(a,r)
a[r]=l
return b+14},
mg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.e8(a,A.e8(a,A.e8(a,A.e8(a,A.e8(a,A.e8(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
jp(a){return new A.cG((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
pg(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.eW(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.M(),i=A.M(),h=A.M()
switch(B.c.aa(o,6)){case 0:j.b=c
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
h.b=l}s=j.av()
if(typeof s!=="number")return s.a_()
s=B.d.aq(s*255)
r=i.av()
if(typeof r!=="number")return r.a_()
r=B.d.aq(r*255)
q=h.av()
if(typeof q!=="number")return q.a_()
return new A.cG(s,r,B.d.aq(q*255))},
dC:function dC(){},
ft:function ft(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
fq:function fq(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
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
i4:function i4(){},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
iF:function iF(){},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
f5(a,b,c){return new A.i(a,b,c)},
lv(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.i(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a){this.a=a},
nt(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.d6(new A.H(B.bb,t.aO.a(new A.hd(a)),t.bX),t.k)
return s==null?null:new A.cl(s)},
ns(a){if(a.a!==21)return null
if(a.e)return B.as
if(!a.d&&a.b>=0.6&&a.c>=3)return B.at
return B.ar},
aO:function aO(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cl:function cl(a){this.a=a},
hd:function hd(a){this.a=a},
nQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.eR(s,new A.i(o,n,m),q,p,l,j)
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
eR:function eR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lj(a,b,c){var s=A.kj(b),r=A.kj(a)
if(c!==1)A.B(A.aW(c,"version","unsupported save version"))
return new A.cv(c,s,r)},
kj(a){var s,r,q,p,o=A.m(a).i("Z<1>"),n=A.at(new A.Z(a,o),o.i("l.E"))
B.a.a1(n)
o=t.z
s=A.r(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.x)(n),++q){p=n[q]
s.k(0,p,A.m3(a.h(0,p)))}return A.jV(s,t.N,o)},
m3(a){var s
if(t.f.b(a))return A.kj(A.am(a,t.N,t.z))
if(t.j.b(a)){s=t.z
return A.bE(J.mZ(a,A.qu(),s),s)}if(a==null||A.b3(a)||typeof a=="number"||typeof a=="string")return a
throw A.e(A.Y("save contains unsupported value "+J.kO(a).p(0),null,null))},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(){},
c4:function c4(a,b){this.a=a
this.b=b},
l_(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.ap(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.e(B.aI)
r=e.h(0,"runSeed")
q=A.ap(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.ap(p)||p<1||typeof o!="number")throw A.e(B.aM)
if(!isFinite(480))throw A.e(A.aW(480,"daySeconds","must be finite and > 0"))
n=new A.er(p,480)
if(!isFinite(o)||o<0||o>=24)A.B(A.Y("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.nJ(a3,A.am(a,s,m))
k=A.nf(l,A.am(b,s,m),n)
j=A.l0(d)
A.nB(A.am(a0,s,m)).hU(j)
m=A.am(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.b3(f))A.B(B.aA)
return new A.ep(d,q,j,n,l,k,new A.em(i,h,g,f),A.j([],t.gF))},
bW:function bW(a,b){this.a=a
this.b=b},
eq:function eq(){},
hi:function hi(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=1},
hj:function hj(a){this.a=a},
hk:function hk(){},
ee:function ee(a,b){this.a=a
this.b=b
this.d=null},
h0:function h0(a){this.a=a},
eH:function eH(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq:function hq(){this.b=0},
i8:function i8(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qt(a,b,c){var s,r,q=A.kI(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.cn(B.au,s)}r=A.mz(a,c,b)
if(r!=null)return new A.cn(B.av,r.at&&!r.ax&&!r.z?"close door":"open door")
if(A.mA(a,c,b)!=null)return B.az
return B.ay},
bU:function bU(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.c=b},
l0(a4){var s,r,q,p=null,o="living-room",n="mantle-living",m="the mantle by the door",l="mantle-living-second",k="the mantle by the window",j="hall",i="kitchen",h="mantle-kitchen",g="mantle-bedroom",f="landing",e="landing-bathroom",d="bathroom",c="spare-room",b=t.bv,a=A.j([],b),a0=t.d6,a1=A.j([],a0),a2=A.j([],t.gd),a3=t.N
a3=new A.hp(a,a1,a2,A.r(a3,t.J),A.r(a3,t.ap),new A.hq())
s=t.E
r=t.s
q=t.h1
B.a.Y(a,A.j([new A.ai(o,new A.i(4.5,2.6,4),new A.i(0,0,0),A.j([new A.ao("living-north-west",B.e,0.5,0.6,1.2,1.2),new A.ao("living-north-east",B.e,2.7,0.6,1.2,1.2)],s),A.j(["hall-living","kitchen-living"],r),A.j([new A.au(n,m,new A.i(1,1.3,1),!1,n),new A.au(l,k,new A.i(3,1.3,3),!1,l)],q)),new A.ai(j,new A.i(2.5,2.6,7),new A.i(4.5,0,0),A.j([new A.ao("hall-fanlight",B.e,0.85,2.15,0.8,0.35)],s),A.j(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.j([new A.au("mantle-hall","the hall mantle",new A.i(1,1.3,3.5),!1,p)],q)),new A.ai(i,new A.i(4.5,2.5,3),new A.i(0,0,4),A.j([new A.ao("kitchen-south",B.h,1.5,0.7,1.2,1.1),new A.ao("kitchen-west",B.q,1,0.8,0.9,1)],s),A.j(["hall-kitchen","kitchen-living"],r),A.j([new A.au(h,"the mantle by the stove",new A.i(0.8,1.2,0.5),!1,h),new A.au("mantle-kitchen-second",m,new A.i(2.2,1.2,2),!1,p),new A.au("mantle-kitchen-third",k,new A.i(3.8,1.2,1.2),!1,p)],q)),new A.ai("cellar",new A.i(4,2,4),new A.i(1,-2,2),B.a2,A.j(["hall-cellar"],r),B.b7),new A.ai("bedroom",new A.i(4.5,2.4,4),new A.i(0,2.8,0),A.j([new A.ao("bedroom-north-west",B.e,0.7,0.7,1.1,1.1),new A.ao("bedroom-north-east",B.e,2.7,0.7,1,1.1)],s),A.j(["landing-bedroom"],r),A.j([new A.au(g,"the bedroom mantle",new A.i(1,1.3,1),!1,g),new A.au("mantle-bedroom-bedside","the bedside mantle",new A.i(3.5,1,3),!1,p)],q)),new A.ai(f,new A.i(2.5,2.4,3),new A.i(4.5,2.8,0),B.a2,A.j(["hall-landing","landing-bedroom",e,"landing-spare"],r),A.j([new A.au("mantle-landing","the landing mantle",new A.i(1,1.2,1.5),!1,p)],q)),new A.ai(d,new A.i(2.5,2.4,2.5),new A.i(4.5,2.8,3),A.j([new A.ao("bathroom-east",B.k,0.9,1,0.7,1)],s),A.j([e],r),A.j([new A.au("mantle-bathroom","the bathroom mantle",new A.i(1.5,1.2,1),!1,p)],q)),new A.ai(c,new A.i(4.5,2.1,3),new A.i(0,2.8,4),A.j([new A.ao("spare-south",B.h,1.8,0.7,0.9,0.9)],s),A.j(["landing-spare"],r),A.j([new A.au("mantle-spare","the broken mantle",new A.i(2,1.3,1),!0,p)],q))],b))
B.a.Y(a1,A.j([A.bG(j,"outside",!0,B.e,B.h,2.1,"front-door",0.8,0,!0,!1,!1,0.9),A.bG(j,o,!1,B.q,B.k,2.1,"hall-living",1.8,1.8,!0,!1,!1,0.9),A.bG(j,i,!1,B.q,B.k,2.1,"hall-kitchen",4.9,1,!0,!1,!1,0.9),A.bG(i,o,!1,B.e,B.h,2.1,"kitchen-living",2,2,!0,!1,!1,0.9),A.bG(j,"cellar",!1,B.h,B.k,2,"hall-cellar",0.5,1.5,!1,!1,!0,0.9),A.bG(j,f,!1,B.k,B.k,2.1,"hall-landing",4,0.7,!0,!0,!1,1.2),A.bG(f,"bedroom",!1,B.q,B.k,2.1,"landing-bedroom",1,1,!0,!1,!1,0.9),A.bG(f,d,!1,B.h,B.e,2.1,e,1,0.8,!0,!1,!1,0.9),A.bG(f,c,!1,B.h,B.e,2.1,"landing-spare",0.1,2,!0,!1,!1,0.9)],a0))
B.a.m(a2,new A.c5("hall-stairs",B.ba,new A.i(5.75,1.65,5.8),new A.i(5.75,4.45,2.2)))
a3.hc()
b=a.length
if(b!==8)A.B(A.a3("expected eight rooms, got "+b))
b=a3.gj7()
if(b!==9)A.B(A.a3("window discrepancy must be 9 inside / 11 outside"))
B.a.gbw(a2)
b=B.a.gG(B.a.gbw(a2).c)
if(b!==4.2)A.B(A.a3("stairs must expose landings at 1.4, 2.8 and 4.2"))
if(a1.length!==9)A.B(A.a3("expected nine physical portals"))
a3.hK()
a3.hJ()
return a3},
hp:function hp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
hu:function hu(){},
ht:function ht(){},
hv:function hv(a){this.a=a},
hw:function hw(){},
kI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.x)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.i(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gn(0)
if(g<0.01||g>3)continue
f=h.ga4()
j=a.b
if(Math.acos(B.d.a2(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
mz(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aP(c),r=J.K(s.a),s=new A.aa(r,s.b,s.$ti.i("aa<1>")),q=null,p=3;s.l();){o=r.gq()
n=b.iO(c,o)
m=a.a
l=new A.i(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gn(0)
if(!A.m8(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
mA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
m=A.pV(b,i,n)
l=a.a
k=new A.i(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gn(0)
if(!A.m8(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
m8(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.a2(a.ga4().i9(c.b),-1,1))<=e},
pV(a,b,c){var s=a.aH(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.i(q.a+r,p,q.c)
break
case 2:q=new A.i(q.a+r,p,q.c+s.c)
break
case 1:q=new A.i(q.a+s.a,p,q.c+r)
break
case 3:q=new A.i(q.a,p,q.c+r)
break
default:q=null}return q},
he:function he(){this.a=null
this.b=0},
id:function id(){},
ie:function ie(){},
b9:function b9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
bG(a,b,c,d,e,f,g,h,i,j,k,l,m){return new A.c3(g,a,b,d,e,h,i,m,f,l,k,j)},
bA:function bA(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=!0},
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.z=j
_.as=k
_.at=l
_.ax=!1},
au:function au(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=d
_.f=e
_.r=!1},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.c=b
_.f=c
_.r=d},
ai:function ai(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
nA(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.r(i,t.aw)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
h.k(0,p.a,new A.dl(p.at,p.ax))}s=A.r(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.x)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.x)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.r(i,t.e)
for(q=0;q<r.length;r.length===n||(0,A.x)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.x)(o),++l){j=o[l]
i.k(0,j.a,new A.dc(j.d,j.r))}return new A.es(h,s,i,a.r.b)},
nB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.h(0,"portals"),e=a.h(0,"windows"),d=a.h(0,"mantles"),c=a.h(0,"driftLandedCount")
if(c==null)c=0
s=t.f
if(!s.b(f)||!s.b(e)||!s.b(d)||!A.ap(c))throw A.e(B.aG)
r=t.N
q=A.r(r,t.aw)
for(p=f.gP(),p=p.gt(p),o=t.z;p.l();){n=p.gq()
m=n.a
if(typeof m!="string"||!s.b(n.b))throw A.e(B.X)
n=A.am(s.a(n.b),r,o)
l=n.h(0,"open")
k=n.h(0,"locked")
if(!A.b3(l)||!A.b3(k))A.B(B.X)
q.k(0,m,new A.dl(l,k))}j=A.r(r,t.y)
for(p=e.gP(),p=p.gt(p);p.l();){n=p.gq()
m=n.a
if(typeof m!="string"||!A.b3(n.b))throw A.e(B.aE)
j.k(0,m,A.aA(n.b))}i=A.r(r,t.e)
for(p=d.gP(),p=p.gt(p);p.l();){n=p.gq()
m=n.a
if(typeof m!="string"||!s.b(n.b))throw A.e(B.W)
n=A.am(s.a(n.b),r,o)
h=n.h(0,"lit")
g=n.h(0,"examined")
if(!A.b3(h)||!A.b3(g))A.B(B.W)
i.k(0,m,new A.dc(h,g))}return new A.es(q,j,i,c)},
kv(a,b){return a.a.a===b.a&&a.ae(0,b.gdG(b))},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
nq(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.lc(e,A.V(e).c)
q=new A.cC()
q.bA((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.d3(a,q,2,r,1+s,A.eF(["time"],t.N))
break
case 3:A.d3(a,q,3,r,1+s,A.eF(["place"],t.N))
break
case 4:A.d3(a,q,4,r,2+s,p)
A.nm(a,q,4)
break
case 5:A.d3(a,q,5,r,s,p)
A.nk(a,q,5)
break
case 6:A.d3(a,q,6,r,s,p)
A.nl(a,q)
A.np(a,q,6)
break
case 7:A.nn(a,q,7)
break
default:if(s>0)A.d3(a,q,b,r,s,p)}},
nj(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.B(0,b.a))return!1
if(A.no(a,b,c))return!1
return!0},
d3(a,b,c,d,e,f){var s,r,q,p,o=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(A.nj(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.bv(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.c(o,p)
A.kX(a,b,o[p],f)}},
kX(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.am(B.a.gG(o).a,n,n)
if(d==null)s=A.j(B.i.slice(0),t.s)
else{n=t.cc
s=A.at(new A.H(B.i,t.bB.a(new A.h9(d)),n),n.i("l.E"))}n=s.length
if(n===0)return
n=b.a3(n)
if(!(n>=0&&n<s.length))return A.c(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.cO(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.a3(n)
if(!(n>=0&&n<p.length))return A.c(p,n)
m.k(0,r,p[n])}a.bV(c.a,m,B.a.gG(o).b)},
nm(a,b,c){var s=A.kY(a,b,c)
if(!a.aG(s))return
a.cV(c,t.G.a(s),0,B.E,null)},
kY(a,b,c){var s,r,q,p,o,n=t.N,m=A.r(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.i[s]
q=n.h(0,r)
if(q==null)q=B.l
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.a3(p)
if(!(o>=0&&o<p))return A.c(q,o)
m.k(0,r,q[o])}}return m},
nk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.bv(i,b)
s=i.length
if(0>=s)return A.c(i,0)
q=i[0]
if(1>=s)return A.c(i,1)
p=i[1]
i=q.c
s=t.N
o=A.am(B.a.gG(i).a,s,s)
r=p.c
n=A.am(B.a.gG(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.i[m]
k=o.h(0,l)
j=s.cO(l,k==null?"":k)
k=j.length
if(k!==0){k=b.a3(k)
if(!(k>=0&&k<j.length))return A.c(j,k)
o.k(0,l,j[k])}}a.bV(q.a,o,B.a.gG(i).b)
a.bV(p.a,n,B.a.gG(r).b)},
nl(a,b){var s,r,q=A.j([],t.r)
for(s=a.b,r=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));r.l();)q.push(r.d)
r=q.length
if(r===0)return
r=b.a3(r)
if(!(r>=0&&r<q.length))return A.c(q,r)
s.aQ(0,q[r].a)},
np(a,b,c){var s,r,q=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.a3(s)
if(!(s>=0&&s<q.length))return A.c(q,s)
A.kX(a,b,q[s],null)},
nn(a,b,c){var s=c+1,r=A.kY(a,b,s)
if(!a.aG(r))return
a.cV(s,t.G.a(r),0,B.E,null)},
no(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gG(b.c).c===B.w}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gG(b.c).c===B.w}if(c===21)return b.e
return!1},
h9:function h9(a){this.a=a},
oj(a){var s,r,q,p,o=t.N,n=A.r(o,t.h)
for(s=0;s<5;++s){r=B.i[s]
q=a.h(0,r)
p=A.bo(q==null?B.l:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.iD(n)},
hP(a,b,c){var s,r,q,p=t.z
p=A.r(p,p)
for(s=0;s<5;++s){r=B.i[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.eE(A.jV(p,q,q),b,c)},
l8(a){var s=t.N
return A.hP(t.a.a(a.h(0,"fields")).aA(0,new A.hQ(),s,s),A.fB(a.h(0,"shakiness")),A.nv(B.b4,A.y(a.h(0,"hand")),t.hh))},
nu(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.j([],t.aW)
for(s=J.K(t.j.a(a.h(0,"revisions"))),r=t.a;s.l();)l.push(A.l8(r.a(s.gq())))
s=A.e3(a.h(0,"corroborator"))
q=A.aA(a.h(0,"locked"))
p=A.m_(a.h(0,"lastReadDay"))
return new A.aD(n,m,l,s,q,p,o==null?null:A.l8(r.a(o)))},
bB:function bB(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
aD:function aD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l5(a){return new A.hE(a,A.r(t.S,t.L),A.a7(t.N),A.j([],t.t))},
nJ(a,b){var s,r,q,p,o=A.l5(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.Y(0,J.mX(s.a(b.h(0,"tags")),t.N))
for(s=J.K(s.a(b.h(0,"entries"))),r=t.a,q=o.b;s.l();){p=A.nu(r.a(s.gq()))
q.k(0,p.a,p)}return o},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
hL:function hL(a,b){this.a=a
this.b=b},
kW(a,b,c,d,e,f,g){var s=A.at(f,t.ff)
if(b<0||a<0||e<0)A.B(A.Y("saved day-loop resources must not be negative",null,null))
return new A.h2(c,g,b,a,e,d===!0,s)},
nf(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.e(B.aD)
s=A.j([],t.ai)
for(r=J.K(a0),q=t.e2,p=t.aH,o=t.p,n=t.fq,m=t.aD,l=t.eq,k=t.f;r.l();){j=r.gq()
if(!k.b(j))throw A.e(B.aH)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.ap(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.e(B.aC)
f=A.d6(new A.H(B.a0,q.a(new A.h3(h)),p),o)
e=A.d6(new A.H(B.a3,n.a(new A.h4(g)),m),l)
if(f==null||e==null)throw A.e(B.aN)
B.a.m(s,new A.cx(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.ap(d)||!A.ap(c)||!A.ap(b)||!A.b3(a))throw A.e(B.aJ)
return A.kW(c,d,a1,a,b,s,a3)},
aw:function aw(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
ew:function ew(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.b=a
this.c=b},
c9:function c9(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
hx:function hx(a){this.c=a},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){},
ba:function ba(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
er:function er(a,b){this.a=a
this.b=6
this.c=b},
cz(a){var s,r,q=A.r(t.N,t.z)
for(s=a.gP(),s=s.gt(s);s.l();){r=s.gq()
q.k(0,B.c.p(r.a),r.b)}return q},
ii:function ii(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ij:function ij(){},
ik:function ik(){},
c8:function c8(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b){this.a=a
this.b=b},
im:function im(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
io:function io(){},
ip:function ip(){},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
fY:function fY(a){this.a=a
this.b=null},
ni(a){var s=A.j([],t.W)
s=new A.h5(A.E(a,"div","door",null),s)
s.fK(a)
return s},
h5:function h5(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(a){this.a=a},
h8:function h8(a,b){this.a=a
this.b=b},
nr(a){var s=new A.hb(a,A.b(a.createElement("div")))
s.aS(a)
s.fL(a)
return s},
hb:function hb(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a){this.a=a},
nz(a){var s=new A.hn(a,A.b(a.createElement("div")))
s.aS(a)
s.fM(a)
return s},
hn:function hn(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ho:function ho(a){this.a=a},
hF:function hF(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(){},
hK:function hK(){},
E(a,b,c,d){var s=A.b(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
m5(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.j([],t.W)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.d(p.item(r))
if(s.b(q))B.a.m(o,q)}return o},
dk:function dk(){},
i1:function i1(a){this.a=a
this.b=null},
o3(a){var s=new A.ig(a,A.b(a.createElement("div")))
s.aS(a)
s.fQ(a)
return s},
ig:function ig(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
n3(a){var s,r,q,p,o,n,m,l,k,j,i=A.j([],t.cy)
for(s=a.d,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0),r=a.b;s.l();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gP(),n=n.gt(n),p+=":";n.l();){m=n.gq()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.m(i,new A.aU(p+m+":"+k,m,l.a,l.b,j))}}B.a.X(i,new A.fQ())
return new A.fP(A.bE(i,t.c),A.a7(t.N))},
aU:function aU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fP:function fP(a,b){this.a=a
this.b=b},
fR:function fR(){},
fQ:function fQ(){},
oi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.bU
s=t.g
r=A.r(s,t.fZ)
q=A.m(e).i("Z<1>")
p=A.at(new A.Z(e,q),q.i("l.E"))
B.a.a1(p)
for(q=p.length,o=t.e0,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.x)(p),++l){k=p[l]
for(j=e.h(0,k).gP(),j=j.gt(j);j.l();){i=j.gq()
h=i.a
if(h<1||h>21)return new A.ay(new A.aH(B.bG,k+" has an out-of-range authored day "+h+"."))
g=A.oh(k,h,i.b,m)
if(g instanceof A.ay)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.k(0,new A.ax(k,h,f.a,f.b),o.a(g).a)}}return new A.fa(new A.f9(r,A.a7(t.N),A.a7(s),A.j([],t.fo),B.y))},
oh(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.r(t.b,t.f6)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.h3,p=0;p<3;++p){o=B.a_[p]
n=o.b
m=n+"."
l=A.j([],q)
for(k=a0.gP(),k=k.gt(k),j=m.length;k.l();){i=k.gq()
h=i.a
if(!B.b.T(h,m))continue
g=A.i0(B.b.aR(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.ay(new A.aH(B.bH,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.a1
B.a.m(l,new A.aQ(g,i.b,f))}if(l.length===0)continue
B.a.X(l,new A.ix())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.ay(new A.aH(B.ae,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.ay(new A.aH(B.ae,a+" day "+s+" has no authored tiers."))
return new A.fp(c)},
f9:function f9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
iB:function iB(a){this.a=a},
iA:function iA(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(){},
ix:function ix(){},
fa:function fa(a){this.a=a},
fp:function fp(a){this.a=a},
q6(a){var s,r,q,p=A.a7(t.N)
for(s=new A.L(a,A.m(a).i("L<1,2>")).gt(0);s.l();){r=s.d
for(q=r.b.gag(),q=q.gt(q);q.l();)if(q.gq().gL().ak(0,new A.jv())){p.m(0,r.a)
break}}s=A.at(p,p.$ti.c)
B.a.a1(s)
return s},
q5(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.l
s=t.N
r=A.bo(b,!0,s)
B.a.a1(r)
q=new A.cC()
q.bA((a^913741)>>>0)
p=q.a3(4)
if(!(p>=0&&p<4))return A.c(B.Z,p)
o=B.Z[p]
n=r.length
n=o>n?n:o
if(n===0)return B.l
m=A.bo(r,!0,s)
B.a.bv(m,q)
s=A.k3(m,0,A.cT(n,"count",t.S),A.V(m).c).fd(0)
B.a.a1(s)
return s},
jv:function jv(){},
lw(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.ap(r)||!A.ap(q)||!A.ap(p)||r<1||q<0||q>23||p<0)return null
return new A.ax(s,r,q,p)},
og(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a7(t.N)
for(s=t.j,q=J.K(s.a(a.h(0,k)));q.l();){p=q.gq()
if(typeof p!="string")return i
r.m(0,p)}o=A.a7(t.g)
for(s=J.K(s.a(a.h(0,j)));s.l();){n=A.lw(s.gq())
if(n==null)return i
o.m(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.n2(m)
if(!s&&l==null)return i
return new A.fb(r,o,l)},
n2(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.lw(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.ap(p))if(!(p<0))if(A.b3(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.d6(new A.H(B.a_,t.aR.a(new A.fM(r)),t.dg),t.b)
k=A.d6(new A.H(B.bc,t.ci.a(new A.fN(q)),t.ew),t.gY)
m=o==null
j=m?h:A.d6(new A.H(B.b1,t.hc.a(new A.fO(o)),t.ct),t.V)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.e9(s,l,k,p,j,n)},
ar:function ar(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bd:function bd(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(){},
e9:function e9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
iC:function iC(){},
ay:function ay(a){this.a=a},
f7:function f7(a){this.a=a},
f6:function f6(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
jC(){var s=0,r=A.bj(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$jC=A.bk(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b9=v.G
c0=A.d(A.b(b9.document).getElementById("game"))
if(c0==null){s=1
break}$.a4.b=c0
$.ko=A.d(A.b(b9.document).getElementById("fps"))
A.ph()
n=A.d(c0.getContext("webgl2"))
if(n==null){A.bN("no-webgl2")
j=A.d(A.b(b9.document).getElementById("credits"))
if(j!=null)j.textContent="this browser has no webgl2."
s=1
break}p=4
A.bN("initializing")
$.bf.b=new A.h_(new A.i(0,0,0),new A.i(0,0,1),new A.i(0,1,0),new A.i(1,0,0))
a4=$.bf.j()
a4.f=A.aA(A.b(A.b(b9.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)?0.5:1
a4=A.b(b9.window)
a5=t.N
a6=A.b(a4.document)
a7=new A.ev(a6,A.a7(a5),A.a7(a5))
a4.addEventListener("keydown",A.a1(a7.ghh()))
a4.addEventListener("keyup",A.a1(a7.ghj()))
a4.addEventListener("mousemove",A.a1(a7.ghn()))
a6.addEventListener("pointerlockchange",A.a1(a7.ghl()))
$.aI.b=a7
$.lU.b=new A.et(A.j([],t.cB),t.gO)
a7=$.a4.j()
a4=A.a(A.b(b9.window).innerWidth)>0?A.a(A.b(b9.window).innerWidth):800
a7.width=a4
a4=$.a4.j()
a6=A.a(A.b(b9.window).innerHeight)>0?A.a(A.b(b9.window).innerHeight):600
a4.height=a6
A.bN("renderer")
a6=$.cO=A.o1(n,A.a($.a4.j().width),A.a($.a4.j().height))
a4=A.k5().gbp().h(0,"render")
a7=A.k5().gbp().h(0,"render")
a8=A.k5().gbp().h(0,"render")
a6.ea=a4==="legacy"
a6.eb=a7==="legacy"
a6.ec=a8==="legacy"
A.bN("text")
a8=$.fJ()
s=7
return A.ad(a8.aM(),$async$jC)
case 7:m=a8.j6()
l=A.oi(m)
if(!(l instanceof A.fa)){k=t.fQ.a(l).a
j=k.b
throw A.e("Failed to build visitors: "+j)}$.ac.b=l.a
$.fx.b=A.n3(m)
j=A.r(a5,t.h)
for(a4=t.j,a9=0;a9<5;++a9){i=B.i[a9]
a6=A.y(i)
a7=a8.c
a7===$&&A.f()
b0=a7.h(0,a6)
a6=a4.b(b0)?A.bo(b0,!0,a5):B.l
J.by(j,i,a6)}h=A.oj(j)
$.kh.b=new A.fZ(B.aq)
g=$.kh.j().iQ(new A.jD(h))
if(g.a==null){j=B.P.a3(2147483647)
if(!isFinite(480))A.B(A.aW(480,"daySeconds","must be finite and > 0"))
b1=new A.er(1,480)
b1.b=10
b2=A.l5(h)
j=new A.ep(42,1+j,A.l0(42),b1,b2,A.kW(6,16,b2,null,6,B.b5,b1),new A.em(0,0,0,!1),A.j([],t.gF))}else{j=g.a
j.toString
j=A.l_(j,h)}$.N.b=j
if(g.b!=null){j=g.b
j.toString
A.cP(j)}j=$.ac.j()
a6=A.q5($.N.j().b,A.q6(m.b))
j.sfD(A.lc(a6,A.V(a6).c))
A.bN("house")
$.a0.b=$.N.j().c
$.e2.b=$.N.j().d
a6=new A.i(5.5,1.65,3.5)
$.kA=$.kt=$.ky=a6
f=a6.U(0,new A.i(0,1.3499999999999999,0))
$.e1.b=new A.ee(f,J.kL(f,new A.i(0,1.2000000000000002,0)))
$.cK.b=new A.he()
$.b2.b=new A.eW(B.m,A.j([],t.s),A.a7(a5))
$.aJ="hall"
a6=g.a
e=A.nQ(a6==null?null:a6.c.h(0,"player"))
if(e!=null&&e.iy($.a0.j())){j=e.b
$.kA=$.kt=$.ky=j
$.bw=e.c
$.cQ=e.d
$.aJ=e.a
d=j.U(0,new A.i(0,1.3499999999999999,0))
j=$.e1.j()
j.shV(d)
j.b=J.kL(d,new A.i(0,1.2000000000000002,0))
j=$.e1.j()
a6=$.a0.j()
a7=e.e
a8=e.f
j.iW($.aJ,$.cX(),a6,a8,a7)
A.cP("restored position")}j=$.N.j().e
a6=$.e2.j()
$.N.j()
$.fz.b=new A.hz(j,a6)
a6=A.b(b9.document)
j=$.N.j().e
a7=$.e2.j()
a8=$.fz.j()
b3=A.b(a6.createElement("div"))
a8=new A.hF(j,a7,a8,a6,b3)
a8.aS(a6)
A.b(b3.appendChild(A.E(a6,"div","journal-title","The Journal")))
b4=A.E(a6,"div","journal-pages",null)
a7=A.E(a6,"div","page page-left",null)
a8.y!==$&&A.o()
a8.y=a7
j=A.E(a6,"div","page page-right",null)
a8.z!==$&&A.o()
a8.z=j
A.b(b4.appendChild(a7))
A.b(b4.appendChild(j))
A.b(b3.appendChild(b4))
A.b(b3.appendChild(a8.fX()))
b5=A.E(a6,"div","tape-roll",null)
A.b(b5.style).setProperty("width","8rem")
j=A.E(a6,"div","tape-fill",null)
a8.as!==$&&A.o()
a8.as=j
A.b(b5.appendChild(j))
A.b(b3.appendChild(b5))
b6=A.E(a6,"div","consult",null)
A.b(b6.appendChild(A.E(a6,"div","consult-label","Cite an entry")))
j=A.E(a6,"div","entry-picker",null)
a8.at!==$&&A.o()
a8.at=j
a7=A.E(a6,"div","consult-result",null)
a8.ax!==$&&A.o()
a8.ax=a7
A.b(b6.appendChild(j))
A.b(b6.appendChild(a7))
A.b(b3.appendChild(b6))
b7=A.d(a6.documentElement)
if(t.m.b(b7)){A.b(b7.style).setProperty("--shake-max-deg","3deg")
A.b(b7.style).setProperty("--shake-max-px","2px")}$.cL.b=a8
$.cL.j().sbn(new A.jE())
j=A.b(b9.document)
a6=A.E(j,"div","prompt",null)
A.b(a6.style).setProperty("transition-duration","0.3s")
A.b(A.d(j.body).appendChild(a6))
$.lV.b=new A.i1(a6)
a6=A.b(b9.document)
j=A.E(a6,"div","broadcast",null)
A.b(A.d(a6.body).appendChild(j))
$.lT.b=new A.fY(j)
j=A.b(b9.document)
a6=A.E(j,"div","ambient-notice",null)
A.b(A.d(j.body).appendChild(a6))
$.kf.b=new A.fS(a6)
a6=A.ni(A.b(b9.document))
a6.siI(A.qn())
a6.siK(A.qp())
a6.siJ(A.qo())
$.ab.b=a6
a6=g.a
c=A.og(a6==null?null:a6.c.h(0,"visitors"))
if(c!=null&&$.ac.j().iV(c))A.pE()
j=$.fx.j()
a6=g.a
j.iX(a6==null?null:a6.c.h(0,"ambient"))
j=g.a
b=j==null?null:j.c.h(0,"unverifiables")
if(a4.b(b))for(j=J.K(b);j.l();){a=j.gq()
if(A.ap(a))$.jq.m(0,a)}j=A.o3(A.b(b9.document))
j.siM(new A.jF())
j.sbn(new A.jH())
$.fA.b=j
j=A.nz(A.b(b9.document))
j.sbn(new A.jI())
$.fy.b=j
j=A.nr(A.b(b9.document))
j.sbn(new A.jJ())
j.siL(new A.jK())
$.kg.b=j
j=g.a
a0=A.nt(j==null?null:j.c.h(0,"ending"))
if(a0!=null)A.mf(a0)
a1=$.cO
if(a1!=null){A.bN("world")
j=$.a0.j()
a4=a1
a5=new A.i8(j,a4,A.r(a5,t.I))
a5.fP(j,a4)
$.km=a5}j=B.b.B(A.y(A.b(A.b(b9.window).location).search),"shaders=live")
$.mo=j
if(j){j=$.cO
if(j!=null)j.aB()}A.mh()
A.b(b9.window).addEventListener("resize",A.a1(new A.jL()))
A.b(b9.window).addEventListener("keydown",A.a1(new A.jM()))
A.b(b9.window).addEventListener("keydown",A.a1(new A.jN()))
A.b(b9.window).addEventListener("click",A.a1(new A.jO()))
$.a4.j().addEventListener("click",A.a1(new A.jG()))
A.e7()
A.bN("raf")
A.a(A.b(b9.window).requestAnimationFrame(A.a1(A.mv())))
p=2
s=6
break
case 4:p=3
c1=o.pop()
a2=A.a5(c1)
a3=A.bx(c1)
A.jl(a2,a3)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$jC,r)},
ph(){var s=v.G
A.b(s.window).addEventListener("error",A.a1(new A.ji()))
A.b(s.window).addEventListener("unhandledrejection",A.a1(new A.jj()))},
bN(a){if($.m1===a)return
$.m1=a
$.a4.j().setAttribute("data-boot-phase",a)},
kw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if($.b2.j().a!==B.m){A.cP("save unavailable during rupture")
return}try{r=$.kh.j()
q=$.N.j()
p=t.N
o=t.z
s=A.r(p,o)
n=$.aJ
m=$.cX()
l=$.bw
k=$.cQ
j=$.e1.j().d
j=j==null?d:j.a.a
i=$.e1.j().d
J.by(s,"player",new A.eR(n,m,l,k,j,i==null?d:i.b).A())
n=$.ac.j()
m=A.lk(n.b,p)
l=A.lk(n.c,t.g)
n=n.e
J.by(s,"visitors",new A.fb(m,l,n==null?d:new A.e9(n.a,n.b,n.d,n.f,n.e,n.r)).A())
n=$.fx.j().b
n=A.at(n,A.m(n).c)
B.a.a1(n)
J.by(s,"ambient",n)
n=A.at($.jq,A.m($.jq).c)
B.a.a1(n)
J.by(s,"unverifiables",n)
n=$.kn
if(n!=null)J.by(s,"ending",A.R(["kind",n.a.b],p,p))
s=t.a.a(s)
n=q.a
m=q.b
l=A.nA(q.c).A()
k=q.d
h=B.D.ie(A.lj(s,A.R(["houseSeed",n,"runSeed",m,"house",l,"time",A.R(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.A(),"journal",q.e.A(),"difficulty",q.r.A()],p,o),1).A(),d)
r.a.dH(h)
g=A.b(A.b(v.G.window).localStorage)
f=A.e3(g.getItem("quarantine.save.active"))
if(f!=null)g.setItem("quarantine.save.previous",f)
g.setItem("quarantine.save.active",h)
A.cP(a)}catch(e){A.cP("save failed")}},
cP(a){var s=v.G,r=A.d(A.b(s.document).getElementById("save-status"))
if(r==null)return
r.textContent=a
r.className="visible"
A.a(A.b(s.window).setTimeout(A.a1(new A.jo(r)),2400))},
jl(a,b){var s,r,q,p
A.bN("error")
s=A.w(a)
r=A.qw(s,"\n"," ")
s=$.ko
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.d(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.w(a):A.w(a)+"\n"+b.p(0)
$.a4.j().setAttribute("data-boot-error",p)
A.b(s.console).error(p)},
lX(){if($.ki)return
$.ki=!0
var s=$.e4
if(s!=null)s.fc()
B.a.m($.bM,"arm")},
e7(){var s=0,r=A.bj(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$e7=A.bk(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=null
q=3
s=6
return A.ad(A.b6(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$e7)
case 6:o=b
i=A
s=7
return A.ad(A.b6(A.b(o.json()),t.X),$async$e7)
case 7:k=i.b(b)
q=1
s=5
break
case 3:q=2
j=p.pop()
s=5
break
case 2:s=1
break
case 5:m=k
l=m==null?null:m.credits
if(l!=null&&typeof l==="string"){m=A.d(A.b(v.G.document).getElementById("credits"))
if(m!=null)m.textContent=A.y(l)}s=8
return A.ad(A.kZ(A.j([A.jk(k),A.jh(k)],t.fG),t.H),$async$e7)
case 8:return A.bh(null,r)
case 1:return A.bg(p.at(-1),r)}})
return A.bi($async$e7,r)},
kl(a,b,c){var s,r,q
if(a==null)return
s=t.a6.a(v.G.Object.keys(a))
s=J.K(t.h.b(s)?s:new A.aX(s,A.V(s).i("aX<1,k>")))
while(s.l()){r=s.gq()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.y(q))}},
jh(a){var s=0,r=A.bj(t.H),q,p,o,n,m
var $async$jh=A.bk(function(b,c){if(b===1)return A.bg(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.r(n,n)
n=a==null
A.kl(A.d(n?null:a.sfx),m,"")
A.kl(A.d(n?null:a.ir),m,"ir-")
q=A.d(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.y(p))
s=2
return A.ad(A.fV(m,$.a0.j()),$async$jh)
case 2:o=c
$.e4=o
if($.ki)o.fc()
return A.bh(null,r)}})
return A.bi($async$jh,r)},
jk(a){var s=0,r=A.bj(t.H),q,p
var $async$jk=A.bk(function(b,c){if(b===1)return A.bg(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.r(q,q)
A.kl(A.d(a==null?null:a.tex),p,"")
q=$.cO
q=q==null?null:q.aN(p)
s=2
return A.ad(q instanceof A.U?q:A.oo(q,t.H),$async$jk)
case 2:return A.bh(null,r)}})
return A.bi($async$jk,r)},
mh(){var s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.a(A.b(h.window).innerWidth),f=A.a(A.b(h.window).innerHeight)
h=$.a4.j()
s=g>0?g:800
h.width=s
s=$.a4.j()
h=f>0?f:600
s.height=h
h=$.cO
if(h!=null){s=A.a($.a4.j().width)
r=A.a($.a4.j().height)
h.am=s
h.an=r
h.cj=r/s
q=h.b7
q===$&&A.f()
p=B.c.H(s,2)
q.ay=p
o=B.c.H(r,2)
q.ch=o
n=q.d
if(n!=null)q.b.a9(n,p,o)
p=q.e
if(p!=null)q.b.a9(p,q.ay,q.ch)
p=q.f
if(p!=null)q.b.a9(p,q.ay,q.ch)
p=q.r
if(p!=null)q.b.a9(p,384,216)
m=h.al
l=h.aI
k=h.b9
j=h.ba
i=h.bb
if(m!=null)h.a8.a9(m,s,r)
if(l!=null)h.a8.a9(l,s,r)
if(k!=null)h.a8.a9(k,h.gaV(),h.gaU())
if(j!=null)h.a8.a9(j,h.gaV(),h.gaU())
if(i!=null)h.a8.a9(i,s,r)}},
pB(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
A.fB(a4)
try{s=a4
if(!$.m7){$.kr=s
$.m7=!0}i=s
h=$.kr
if(typeof i!=="number")return i.U()
r=(i-h)/1000
$.kr=s
i=r
if(typeof i!=="number")return i.bt()
if(i<0)r=0
i=r
if(typeof i!=="number")return i.S()
if(i>0.25)r=0.25
A.pR(r)
if(!$.ks){i=$.jd
h=r
if(typeof h!=="number")return A.fG(h)
h=$.jd=i+h
q=0
i=t.h0
for(;;){if(h>=0.008333333333333333){g=q
if(typeof g!=="number")return g.bt()
g=g<10}else g=!1
if(!g)break
$.kt=$.cX()
h=$.N.b
if(h===$.N)A.B(A.as(""))
h.hR(0.008333333333333333)
A.pU()
h=$.ac.b
if(h===$.ac)A.B(A.as(""))
g=$.N.b
if(g===$.N)A.B(A.as(""))
h.f=g.r.c>=0.5
h=h.d
f=A.bo(h,!1,i)
f.$flags=3
e=f
B.a.I(h)
if(e.length!==0){h=$.N.b
if(h===$.N)A.B(A.as(""))
h.iS(e)}A.pQ()
A.pT()
A.pS()
A.pP(0.008333333333333333)
h=$.cK.b
if(h===$.cK)A.B(A.as(""))
if(h.a!=null)if((h.b-=0.008333333333333333)<=0)h.a=null
h=$.b2.b
if(h===$.b2)A.B(A.as(""))
p=h.a!==B.m
g=$.a0.b
if(g===$.a0)A.B(A.as(""))
h.hS(0.008333333333333333,g)
if(p){h=$.b2.b
if(h===$.b2)A.B(A.as(""))
h=h.e}else h=!1
if(h)A.mi(!0)
h=$.jd-0.008333333333333333
$.jd=h
g=q
if(typeof g!=="number")return g.Z()
q=g+1}o=B.d.a2(h/0.008333333333333333,0,1)
$.kA=A.lv($.mS(),$.cX(),o)
n=$.e4
if(n!=null){for(i=$.bM.length,d=0;d<$.bM.length;$.bM.length===i||(0,A.x)($.bM),++d){m=$.bM[d]
A.pa(n,m)}B.a.I($.bM)}}l=$.cO
if(l!=null){$.bf.j().f3($.kK(),$.bw,$.cQ)
i=$.az===$.cL.j()?1:0
l.b8=i
i=l
h=r
g=$.b2.j()
i.eg=A.qz($.e2.j().gbz()).ga4()
i.sf2(A.qy($.e2.j().gbz()))
c=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.e2.j().gbz()))
i.ek=c<0?0:c
c=$.bf.j()
b=c.r+=h
a=0.025*c.f
c.a=c.a.Z(0,c.d.a_(0,(A.jT(b*0.28,1309)*2-1)*a)).Z(0,c.c.a_(0,(A.jT(c.r*0.28,2839)*2-1)*a))
c=$.bf.j()
i.el=c.a
i.c9=c.b
i.ca=c.c
i.cb=c.d
a0=A.pg(0,0.25,0.11)
i.cc=a0.a
i.cd=a0.b
i.ce=a0.c
c=i.bc
a1=c==null?i.aI:c
if(a1==null)a1=i.al
c=i.a8
c.ac(a1)
i.a5.depthMask(!0)
c.i1(a1,i.cc/255,i.cd/255,i.ce/255)
i.c4=i.bd=0
i.c6=!1
i.aK=0
a2=$.km
if(a2!=null)a2.ia($.aJ,$.kK())
i.ir(h,g)
$.lU.j().cG(B.ao,h)}A.bN("running")
i=$.aI.j()
i.e=i.d=0
i.c.I(0)
A.a(A.b(v.G.window).requestAnimationFrame(A.a1(A.mv())))}catch(a3){k=A.a5(a3)
j=A.bx(a3)
A.jl(k,j)}},
pa(a,b){switch(b){case"arm":a.iN("confirm")
break
case"ambient-winnow":a.cA("winnow",0.28)
break
case"ambient-gate":a.cA("gate",0.22)
break}},
pR(a){var s=$.ko
if(s==null)return
s.textContent=""+B.d.aq(a>0?1/a:0)+" fps"},
pP(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.ml||$.az!=null||$.ab.j().z){$.fI().a=new A.i(0,0,0)
return}s=$.aI.j().b
r=s.B(0,"KeyA")?-1:0
if(s.B(0,"KeyD"))++r
q=s.B(0,"KeyW")?1:0
p=new A.i(r,0,s.B(0,"KeyS")?q-1:q)
o=p.gn(0)>1?p.ga4():p
n=$.aI.j().d
m=$.aI.j().e
$.bw=$.bw+n*0.0028
s=$.cQ-m*0.0028
$.cQ=s
$.cQ=B.d.a2(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.i(s*Math.cos($.bw)+l*Math.sin($.bw),0,l*Math.cos($.bw)-s*Math.sin($.bw)).ga4().a_(0,2)
s=$.fI()
if(!isFinite(a1)||a1<0)A.B(A.aW(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.B(A.aW(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.Z(0,k.U(0,i).a_(0,1-l))
s.a=l
h=$.e1.j().iG($.a0.j(),$.aJ,$.cX(),l.a_(0,a1))
$.ky=h.a
if($.b2.j().a!==B.G&&$.b2.j().a!==B.x)$.aJ=h.b
$.bf.j().f3($.cX(),$.bw,$.cQ)
s=$.bf.j()
l=$.a0.j()
g=A.qt(s,$.aJ,l)
$.lV.j().fs(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.kI($.bf.j(),$.a0.j(),$.aJ)
break
case 1:e=A.mz($.bf.j(),$.a0.j(),$.aJ)
break
case 2:d=A.mA($.bf.j(),$.a0.j(),$.aJ)
break
case 3:break}s=$.lT.j()
c=$.fJ().fj($.N.j().gah().a)
l=c==null?a0:c.h(0,"status")
s.cG(l,$.aJ==="living-room")
if($.aI.j().c.aQ(0,"KeyE")){s=$.N.j().gah()
l=e==null
i=l?a0:e.a
b=B.a.ae($.ac.j().dD(21),$.ac.j().giz())
if(s.a===21&&i==="front-door"&&b){$.b2.j().fE($.a0.j())
B.a.m($.bM,"collapse")
A.cP("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.N.j().fC(1,1)){f.d=!0
s=$.cK.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ax){e.at=!e.at
s=$.e4
if(s!=null)s.bR()}else if(d!=null)if(d.w){s=$.N.j()
if(s.f.bx(1))d.w=!1}else d.w=!0}s=$.cK.j()
if(s.a!=null&&s.b>0){a=$.cK.j().a
if(a!=null&&A.kI($.bf.j(),$.a0.j(),$.aJ)!==a){s=$.cK.j()
s.a=null
s.b=0}}},
pU(){var s,r,q,p,o,n,m,l,k,j=null
if($.ab.j().z||$.az!=null||$.ac.j().e!=null)return
s=$.N.j().gah()
for(r=$.ac.j().dD(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.x)(r),++o){n=r[o]
m=$.ac.b
if(m===$.ac)A.B(A.as(""))
if(m.c.B(0,n)||p<n.c)continue
r=$.ac.b
if(r===$.ac)A.B(A.as(""))
l=r.hW(n)
if(!(l instanceof A.f7))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.c(r,q)
k=r[q].b}else k=j
if(k==null)return
A.l3(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.fI().a=new A.i(0,0,0)
r=$.ab.b
if(r===$.ab)A.B(A.as(""))
r.cN(n.a,k)
return}},
pE(){var s=$.ac.j().e,r=s==null,q=r?null:s.gb5()
if(r||q==null)return
$.ab.j().cN(s.a.a,q)
if(s.d!==B.o){$.ab.j().bu(q)
A.kx()}A.cP("restored visitor")},
pQ(){var s,r,q,p,o=$.N.j().gah(),n=$.fx.j().ic(o.a,o.b)
if(n.length===0)return
s=B.a.gaz(n)
$.fx.j().b.m(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.kf.j().cM(q,s.e)
p=A.pW(r)
if(p!=null)B.a.m($.bM,"ambient-"+p)},
pT(){var s,r,q,p,o=$.N.j().gah()
if(o.b<20)return
s=o.a
if(!$.jq.m(0,s))return
r=$.fJ().f
r===$&&A.f()
q=r.h(0,B.c.p(s))
r=t.j.b(q)?A.bo(q,!0,t.N):B.l
p=A.qs(r,$.N.j().b,s)
if(p!=null)$.kf.j().cM("noticed",p)},
mi(a){var s,r,q,p,o
if($.kn!=null)return
s=$.N.j().gah()
r=$.N.j().r.c
q=$.N.j().e.b
p=A.m(q).i("aZ<2>")
o=A.ns(new A.ha(s.a,1-r,new A.H(new A.aZ(q,p),p.i("p(l.E)").a(new A.jm()),p.i("H<l.E>")).gn(0),$.N.j().r.d,a))
if(o==null)return
A.mf(o)
A.kw("ending recorded")},
mf(a){var s,r,q
$.kn=a
$.ml=!0
$.fI().a=new A.i(0,0,0)
$.az=$.kg.j()
s=$.kg.j()
r=$.fJ().w
r===$&&A.f()
q=r.h(0,a.a.b)
s.fu(a,t.j.b(q)?A.bo(q,!0,t.N):B.l)},
p5(a){var s,r,q,p,o
A:{if("open"===a){s=B.v
break A}if("chain"===a){s=B.Q
break A}if("through-door"===a){s=B.R
break A}if("letterbox"===a){s=B.S
break A}s=B.p
break A}r=$.ac.j().i_(s)
if(s===B.v){q=$.a0.j().f.h(0,"front-door")
if(q!=null){q.at=!0
p=$.e4
if(p!=null)p.bR()}}if(!(r instanceof A.f6)||s===B.p){$.ab.j().be()
$.aI.j().af($.a4.j())
return}o=r.a.gb5()
if(o==null){A.kk()
$.ab.j().be()
$.aI.j().af($.a4.j())
return}$.ab.j().bu(o)
A.kx()},
p7(){var s,r=$.ac.j().hT()
if(!(r instanceof A.dv)||r.b){A.kk()
$.ab.j().be()
$.aI.j().af($.a4.j())
return}s=r.a.gb5()
if(s==null){A.kk()
$.ab.j().be()
$.aI.j().af($.a4.j())
return}$.ab.j().bu(s)
A.kx()},
kx(){var s,r,q,p,o=$.ab.j(),n=A.b(v.G.document),m=A.j([],t.ek)
for(s=$.fz.j().cK(),r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
m.push(new A.dM(p.a,B.a.gG(p.c).p(0)))}o.ft(n,m)},
p6(a){var s,r,q,p=$.ac.j().i0(a,!0,$.fz.j())
if(p==null)return
s=$.fz.j().i6(p,B.aV)
r=$.ab.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.f()
r.textContent=q},
kk(){var s,r=$.a0.j().f.h(0,"front-door")
if(r!=null&&r.at){r.at=!1
s=$.e4
if(s!=null)s.bR()}},
pS(){var s,r,q,p,o,n,m,l,k
for(s=$.a0.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.b2.b
if(k===$.b2)A.B(A.as(""))
if(k.d.B(0,n+m)){l.d=!1
continue}}}},
jD:function jD(a){this.a=a},
jE:function jE(){},
jF:function jF(){},
jH:function jH(){},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(){},
jL:function jL(){},
jM:function jM(){},
jN:function jN(){},
jO:function jO(){},
jG:function jG(){},
ji:function ji(){},
jj:function jj(){},
jo:function jo(a){this.a=a},
jm:function jm(){},
l3(a,b,c,d,e,f){var s=a[b]()
return s},
l4(a,b,c){var s=null
return c.a(A.l3(a,b,s,s,s,s))},
nh(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
ng(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
mu(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
jT(a,b){var s=B.d.eW(a),r=A.mu(s,b),q=A.mu(s+1,b),p=B.d.a2(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
pW(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
qz(a){var s,r,q,p
if(a===0)return new A.i(0,0,1)
s=1.2217304763960306*Math.sin(3.141592653589793*a)
r=(30+(1-a)*180)*3.141592653589793/180
q=Math.sin(s)
p=Math.cos(s)
return new A.i(p*Math.cos(r),q,p*Math.sin(r)).ga4()},
qy(a){var s,r,q,p,o,n,m
if(a===0)return 4491468
s=A.M()
r=A.M()
q=A.M()
if(a<0.5){p=a*2
s.b=B.d.W(68+187*p)
r.b=B.d.W(136+119*p)
q.b=B.d.W(204+51*p)}else{p=(a-0.5)*2
s.b=B.d.W(255+0*p)
r.b=B.d.W(255+-68*p)
q.b=B.d.W(255+-170*p)}o=s.av()
if(typeof o!=="number")return o.fq()
n=r.av()
if(typeof n!=="number")return n.fq()
m=q.av()
if(typeof m!=="number")return A.fG(m)
return(o<<16|n<<8|m)>>>0},
q3(a){var s,r,q,p,o,n,m,l=B.D.dI(a,null),k=t.f
if(!k.b(l))throw A.e(B.aL)
s=t.N
r=t.z
q=A.am(l,s,r)
p=A.r(s,t.a)
for(o=0;o<11;++o){n=B.b2[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.r(s,r))
else if(k.b(m))p.k(0,n,A.am(m,s,r))
else throw A.e(A.Y('text.json section "'+n+'" must be an object',null,null))}return p},
qs(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbw(a)
s=new A.cC()
s.bA((b^274953^c)>>>0)
r=s.a3(a.length)
if(!(r>=0&&r<a.length))return A.c(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.jY.prototype={}
J.ex.prototype={
R(a,b){return a===b},
gD(a){return A.eS(a)},
p(a){return"Instance of '"+A.eT(a)+"'"},
gF(a){return A.bl(A.kp(this))}}
J.ez.prototype={
p(a){return String(a)},
gD(a){return a?519018:218159},
gF(a){return A.bl(t.y)},
$iG:1,
$ip:1}
J.d8.prototype={
R(a,b){return null==b},
p(a){return"null"},
gD(a){return 0},
$iG:1,
$iP:1}
J.d9.prototype={$iC:1}
J.bC.prototype={
gD(a){return 0},
gF(a){return B.bu},
p(a){return String(a)}}
J.eQ.prototype={}
J.c6.prototype={}
J.bn.prototype={
p(a){var s=a[$.mD()]
if(s==null)s=a[$.cW()]
if(s==null)return this.fG(a)
return"JavaScript function for "+J.cY(s)},
$ibV:1}
J.co.prototype={
gD(a){return 0},
p(a){return String(a)}}
J.cp.prototype={
gD(a){return 0},
p(a){return String(a)}}
J.q.prototype={
b3(a,b){return new A.aX(a,A.V(a).i("@<1>").v(b).i("aX<1,2>"))},
m(a,b){A.V(a).c.a(b)
a.$flags&1&&A.aM(a,29)
a.push(b)},
Y(a,b){var s
A.V(a).i("l<1>").a(b)
a.$flags&1&&A.aM(a,"addAll",2)
if(Array.isArray(b)){this.fU(a,b)
return}for(s=J.K(b);s.l();)a.push(s.gq())},
fU(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.e(A.a6(a))
for(r=0;r<s;++r)a.push(b[r])},
I(a){a.$flags&1&&A.aM(a,"clear","clear")
a.length=0},
aO(a,b,c){var s=A.V(a)
return new A.av(a,s.v(c).i("1(2)").a(b),s.i("@<1>").v(c).i("av<1,2>"))},
bk(a,b){var s,r=A.c0(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
eX(a,b,c,d){var s,r,q
d.a(b)
A.V(a).v(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.e(A.a6(a))}return r},
K(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
gaz(a){if(a.length>0)return a[0]
throw A.e(A.hB())},
gG(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.hB())},
gbw(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.e(A.hB())
throw A.e(A.nF())},
ak(a,b){var s,r
A.V(a).i("p(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.e(A.a6(a))}return!1},
ae(a,b){var s,r
A.V(a).i("p(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.e(A.a6(a))}return!0},
X(a,b){var s,r,q,p,o,n=A.V(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.aM(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.pm()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.S()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.cU(b,2))
if(p>0)this.hx(a,p)},
a1(a){return this.X(a,null)},
hx(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bv(a,b){var s,r,q,p
a.$flags&2&&A.aM(a,"shuffle")
s=a.length
while(s>1){r=b.a3(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
bf(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.X(a[s],b))return s}return-1},
B(a,b){var s
for(s=0;s<a.length;++s)if(J.X(a[s],b))return!0
return!1},
gC(a){return a.length===0},
gE(a){return a.length!==0},
p(a){return A.jX(a,"[","]")},
gt(a){return new J.bP(a,a.length,A.V(a).i("bP<1>"))},
gD(a){return A.eS(a)},
gn(a){return a.length},
sn(a,b){a.$flags&1&&A.aM(a,"set length","change the length of")
if(b<0)throw A.e(A.ah(b,0,null,"newLength",null))
if(b>a.length)A.V(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.e(A.jt(a,b))
return a[b]},
k(a,b,c){A.V(a).c.a(c)
a.$flags&2&&A.aM(a)
if(!(b>=0&&b<a.length))throw A.e(A.jt(a,b))
a[b]=c},
cJ(a,b){return new A.b0(a,b.i("b0<0>"))},
gF(a){return A.bl(A.V(a))},
$it:1,
$il:1,
$iu:1}
J.ey.prototype={
j3(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.eT(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.hD.prototype={}
J.bP.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.x(q)
throw A.e(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iO:1}
J.bX.prototype={
J(a,b){var s
A.fB(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbj(b)
if(this.gbj(a)===s)return 0
if(this.gbj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbj(a){return a===0?1/a<0:a<0},
W(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.a9(""+a+".toInt()"))},
hZ(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.a9(""+a+".ceil()"))},
eW(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.a9(""+a+".floor()"))},
aq(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.a9(""+a+".round()"))},
a2(a,b,c){if(this.J(b,c)>0)throw A.e(A.kB(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
cF(a,b){var s
if(b>20)throw A.e(A.ah(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbj(a))return"-"+s
return s},
j1(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.e(A.ah(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.c(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.B(A.a9("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.c(p,1)
s=p[1]
if(3>=r)return A.c(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a_("0",o)},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aa(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
fI(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dr(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.dr(a,b)},
dr(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.a9("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
bP(a,b){var s
if(a>0)s=this.dn(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hB(a,b){if(0>b)throw A.e(A.kB(b))
return this.dn(a,b)},
dn(a,b){return b>31?0:a>>>b},
gF(a){return A.bl(t.o)},
$iaY:1,
$in:1,
$iak:1}
J.d7.prototype={
gF(a){return A.bl(t.S)},
$iG:1,
$ih:1}
J.eA.prototype={
gF(a){return A.bl(t.i)},
$iG:1}
J.bY.prototype={
aC(a,b,c,d){var s=A.dm(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
M(a,b,c){var s
if(c<0||c>a.length)throw A.e(A.ah(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.M(a,b,0)},
u(a,b,c){return a.substring(b,A.dm(b,c,a.length))},
aR(a,b){return this.u(a,b,null)},
a_(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.ap)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bg(a,b,c){var s
if(c<0||c>a.length)throw A.e(A.ah(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bf(a,b){return this.bg(a,b,0)},
B(a,b){return A.qv(a,b,0)},
J(a,b){var s
A.y(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gD(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return A.bl(t.N)},
gn(a){return a.length},
$iG:1,
$iaY:1,
$ild:1,
$ik:1}
A.bJ.prototype={
gt(a){return new A.cZ(J.K(this.gaj()),A.m(this).i("cZ<1,2>"))},
gn(a){return J.aN(this.gaj())},
gC(a){return J.kN(this.gaj())},
gE(a){return J.mY(this.gaj())},
K(a,b){return A.m(this).y[1].a(J.fL(this.gaj(),b))},
p(a){return J.cY(this.gaj())}}
A.cZ.prototype={
l(){return this.a.l()},
gq(){return this.$ti.y[1].a(this.a.gq())},
$iO:1}
A.bQ.prototype={
gaj(){return this.a}}
A.dB.prototype={$it:1}
A.dA.prototype={
h(a,b){return this.$ti.y[1].a(J.aq(this.a,b))},
k(a,b,c){var s=this.$ti
J.by(this.a,b,s.c.a(s.y[1].a(c)))},
sn(a,b){J.n_(this.a,b)},
m(a,b){var s=this.$ti
J.fK(this.a,s.c.a(s.y[1].a(b)))},
X(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.iK(this,b)
J.n0(this.a,s)},
$it:1,
$iu:1}
A.iK.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.aX.prototype={
b3(a,b){return new A.aX(this.a,this.$ti.i("@<1>").v(b).i("aX<1,2>"))},
gaj(){return this.a}}
A.bZ.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.eh.prototype={
gn(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.ib.prototype={}
A.t.prototype={}
A.ag.prototype={
gt(a){var s=this
return new A.c_(s,s.gn(s),A.m(s).i("c_<ag.E>"))},
gC(a){return this.gn(this)===0},
ak(a,b){var s,r,q=this
A.m(q).i("p(ag.E)").a(b)
s=q.gn(q)
for(r=0;r<s;++r){if(b.$1(q.K(0,r)))return!0
if(s!==q.gn(q))throw A.e(A.a6(q))}return!1},
bk(a,b){var s,r,q,p=this,o=p.gn(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.K(0,0))
if(o!==p.gn(p))throw A.e(A.a6(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.K(0,q))
if(o!==p.gn(p))throw A.e(A.a6(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.K(0,q))
if(o!==p.gn(p))throw A.e(A.a6(p))}return r.charCodeAt(0)==0?r:r}},
cI(a,b){return this.fF(0,A.m(this).i("p(ag.E)").a(b))},
aO(a,b,c){var s=A.m(this)
return new A.av(this,s.v(c).i("1(ag.E)").a(b),s.i("@<ag.E>").v(c).i("av<1,2>"))},
j2(a){var s,r=this,q=A.k_(A.m(r).i("ag.E"))
for(s=0;s<r.gn(r);++s)q.m(0,r.K(0,s))
return q}}
A.ds.prototype={
gh4(){var s=J.aN(this.a),r=this.c
if(r==null||r>s)return s
return r},
ghF(){var s=J.aN(this.a),r=this.b
if(r>s)return s
return r},
gn(a){var s,r=J.aN(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
K(a,b){var s=this,r=s.ghF()+b
if(b<0||r>=s.gh4())throw A.e(A.hy(b,s.gn(0),s,"index"))
return J.fL(s.a,r)},
j0(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.b5(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.l2(0,n):J.l1(0,n)}r=A.c0(s,m.K(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.K(n,o+q))
if(m.gn(n)<l)throw A.e(A.a6(p))}return r},
fd(a){return this.j0(0,!0)}}
A.c_.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.b5(q),o=p.gn(q)
if(r.b!==o)throw A.e(A.a6(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.K(q,s);++r.c
return!0},
$iO:1}
A.bp.prototype={
gt(a){return new A.c1(J.K(this.a),this.b,A.m(this).i("c1<1,2>"))},
gn(a){return J.aN(this.a)},
gC(a){return J.kN(this.a)},
K(a,b){return this.b.$1(J.fL(this.a,b))}}
A.bT.prototype={$it:1}
A.c1.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gq())
return!0}s.a=null
return!1},
gq(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iO:1}
A.av.prototype={
gn(a){return J.aN(this.a)},
K(a,b){return this.b.$1(J.fL(this.a,b))}}
A.H.prototype={
gt(a){return new A.aa(J.K(this.a),this.b,this.$ti.i("aa<1>"))}}
A.aa.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iO:1}
A.b0.prototype={
gt(a){return new A.dx(J.K(this.a),this.$ti.i("dx<1>"))}}
A.dx.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())},
$iO:1}
A.Q.prototype={
sn(a,b){throw A.e(A.a9("Cannot change the length of a fixed-length list"))},
m(a,b){A.aS(a).i("Q.E").a(b)
throw A.e(A.a9("Cannot add to a fixed-length list"))}}
A.bc.prototype={
k(a,b,c){A.m(this).i("bc.E").a(c)
throw A.e(A.a9("Cannot modify an unmodifiable list"))},
sn(a,b){throw A.e(A.a9("Cannot change the length of an unmodifiable list"))},
m(a,b){A.m(this).i("bc.E").a(b)
throw A.e(A.a9("Cannot add to an unmodifiable list"))},
X(a,b){A.m(this).i("h(bc.E,bc.E)?").a(b)
throw A.e(A.a9("Cannot modify an unmodifiable list"))}}
A.cA.prototype={}
A.e0.prototype={}
A.dM.prototype={$r:"+(1,2)",$s:1}
A.cG.prototype={$r:"+(1,2,3)",$s:2}
A.dN.prototype={$r:"+(1,2,3,4)",$s:3}
A.d0.prototype={}
A.d_.prototype={
gC(a){return this.gn(this)===0},
gE(a){return this.gn(this)!==0},
p(a){return A.k0(this)},
k(a,b,c){var s=A.m(this)
s.c.a(b)
s.y[1].a(c)
A.nc()},
gP(){return new A.cH(this.ih(),A.m(this).i("cH<A<1,2>>"))},
ih(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gP(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gL(),o=o.gt(o),n=A.m(s),m=n.y[1],n=n.i("A<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gq()
k=s.h(0,l)
r=4
return a.b=new A.A(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aA(a,b,c,d){var s=A.r(c,d)
this.a0(0,new A.h1(this,A.m(this).v(c).v(d).i("A<1,2>(3,4)").a(b),s))
return s},
$iD:1}
A.h1.prototype={
$2(a,b){var s=A.m(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.b7.prototype={
gn(a){return this.b.length},
gd8(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
N(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.N(b))return null
return this.b[this.a[b]]},
a0(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gd8()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gL(){return new A.cd(this.gd8(),this.$ti.i("cd<1>"))},
gag(){return new A.cd(this.b,this.$ti.i("cd<2>"))}}
A.cd.prototype={
gn(a){return this.a.length},
gC(a){return 0===this.a.length},
gE(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.ce(s,s.length,this.$ti.i("ce<1>"))}}
A.ce.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iO:1}
A.d1.prototype={
m(a,b){A.m(this).c.a(b)
A.nd()}}
A.d2.prototype={
gn(a){return this.b},
gC(a){return this.b===0},
gE(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.ce(s,s.length,r.$ti.i("ce<1>"))},
B(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.dn.prototype={}
A.iq.prototype={
a6(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.dj.prototype={
p(a){return"Null check operator used on a null value"}}
A.eB.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.f1.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hZ.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.d4.prototype={}
A.dP.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibb:1}
A.bz.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mC(r==null?"unknown":r)+"'"},
gF(a){var s=A.kD(this)
return A.bl(s==null?A.aS(this):s)},
$ibV:1,
gja(){return this},
$C:"$1",
$R:1,
$D:null}
A.ef.prototype={$C:"$0",$R:0}
A.eg.prototype={$C:"$2",$R:2}
A.f_.prototype={}
A.eY.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mC(s)+"'"}}
A.ck.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ck))return!1
return this.$_target===b.$_target&&this.a===b.a},
gD(a){return(A.jQ(this.a)^A.eS(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eT(this.a)+"'")}}
A.eV.prototype={
p(a){return"RuntimeError: "+this.a}}
A.b8.prototype={
gn(a){return this.a},
gC(a){return this.a===0},
gE(a){return this.a!==0},
gL(){return new A.Z(this,A.m(this).i("Z<1>"))},
gag(){return new A.aZ(this,A.m(this).i("aZ<2>"))},
gP(){return new A.L(this,A.m(this).i("L<1,2>"))},
N(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.iu(a)},
iu(a){var s=this.d
if(s==null)return!1
return this.bi(s[this.bh(a)],a)>=0},
Y(a,b){A.m(this).i("D<1,2>").a(b).a0(0,new A.hM(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.iv(b)},
iv(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bh(a)]
r=this.bi(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.m(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.cP(s==null?q.b=q.bL():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cP(r==null?q.c=q.bL():r,b,c)}else q.ix(b,c)},
ix(a,b){var s,r,q,p,o=this,n=A.m(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.bL()
r=o.bh(a)
q=s[r]
if(q==null)s[r]=[o.bB(a,b)]
else{p=o.bi(q,a)
if(p>=0)q[p].b=b
else q.push(o.bB(a,b))}},
iP(a,b){var s,r,q=this,p=A.m(q)
p.c.a(a)
p.i("2()").a(b)
if(q.N(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
aQ(a,b){if((b&0x3fffffff)===b)return this.fS(this.c,b)
else return this.iw(b)},
iw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bh(a)
r=n[s]
q=o.bi(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.cR(p)
if(r.length===0)delete n[s]
return p.b},
a0(a,b){var s,r,q=this
A.m(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.a6(q))
s=s.c}},
cP(a,b,c){var s,r=A.m(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.bB(b,c)
else s.b=c},
fS(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.cR(s)
delete a[b]
return s.b},
cQ(){this.r=this.r+1&1073741823},
bB(a,b){var s=this,r=A.m(s),q=new A.hS(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cQ()
return q},
cR(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cQ()},
bh(a){return J.aC(a)&1073741823},
bi(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.X(a[r].a,b))return r
return-1},
p(a){return A.k0(this)},
bL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$il9:1}
A.hM.prototype={
$2(a,b){var s=this.a,r=A.m(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.m(this.a).i("~(1,2)")}}
A.hS.prototype={}
A.Z.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bD(s,s.r,s.e,this.$ti.i("bD<1>"))}}
A.bD.prototype={
gq(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iO:1}
A.aZ.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gt(a){var s=this.a
return new A.a_(s,s.r,s.e,this.$ti.i("a_<1>"))}}
A.a_.prototype={
gq(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iO:1}
A.L.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gt(a){var s=this.a
return new A.db(s,s.r,s.e,this.$ti.i("db<1,2>"))}}
A.db.prototype={
gq(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.A(s.a,s.b,r.$ti.i("A<1,2>"))
r.c=s.c
return!0}},
$iO:1}
A.jy.prototype={
$1(a){return this.a(a)},
$S:5}
A.jz.prototype={
$2(a,b){return this.a(a,b)},
$S:39}
A.jA.prototype={
$1(a){return this.a(A.y(a))},
$S:9}
A.b1.prototype={
gF(a){return A.bl(this.d6())},
d6(){return A.q8(this.$r,this.aY())},
p(a){return this.dv(!1)},
dv(a){var s,r,q,p,o,n=this.h9(),m=this.aY(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.lf(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
h9(){var s,r=this.$s
while($.j2.length<=r)B.a.m($.j2,null)
s=$.j2[r]
if(s==null){s=this.fZ()
B.a.k($.j2,r,s)}return s},
fZ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.hC(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.bE(j,k)}}
A.cD.prototype={
aY(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.cD&&this.$s===b.$s&&J.X(this.a,b.a)&&J.X(this.b,b.b)},
gD(a){return A.cs(this.$s,this.a,this.b,B.f)}}
A.cE.prototype={
aY(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.cE&&s.$s===b.$s&&J.X(s.a,b.a)&&J.X(s.b,b.b)&&J.X(s.c,b.c)},
gD(a){var s=this
return A.cs(s.$s,s.a,s.b,s.c)}}
A.cF.prototype={
aY(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.cF&&this.$s===b.$s&&A.oy(this.a,b.a)},
gD(a){return A.cs(this.$s,A.nP(this.a),B.f,B.f)}}
A.iL.prototype={
av(){var s=this.b
if(s===this)throw A.e(new A.bZ("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.e(A.as(""))
return s}}
A.bF.prototype={
gF(a){return B.bn},
dE(a,b,c){return new Float32Array(a,b,c)},
$iG:1,
$ibF:1}
A.cr.prototype={$icr:1}
A.dg.prototype={
ghY(a){if(((a.$flags|0)&2)!==0)return new A.j8(a.buffer)
else return a.buffer},
hf(a,b,c,d){var s=A.ah(b,0,c,d,null)
throw A.e(s)},
d_(a,b,c,d){if(b>>>0!==b||b>c)this.hf(a,b,c,d)}}
A.j8.prototype={
dE(a,b,c){var s=A.nN(this.a,b,c)
s.$flags=3
return s}}
A.eI.prototype={
gF(a){return B.bo},
$iG:1}
A.a8.prototype={
gn(a){return a.length},
dm(a,b,c,d,e){var s,r,q=a.length
this.d_(a,b,q,"start")
this.d_(a,c,q,"end")
if(b>c)throw A.e(A.ah(b,0,c,null,null))
s=c-b
if(e<0)throw A.e(A.ae(e,null))
r=d.length
if(r-e<s)throw A.e(A.a3("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaE:1}
A.de.prototype={
h(a,b){A.bv(b,a,a.length)
return a[b]},
k(a,b,c){A.lY(c)
a.$flags&2&&A.aM(a)
A.bv(b,a,a.length)
a[b]=c},
fn(a,b,c,d){t.bM.a(d)
a.$flags&2&&A.aM(a,5)
this.dm(a,b,c,d,0)
return},
$it:1,
$il:1,
$iu:1}
A.df.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.aM(a)
A.bv(b,a,a.length)
a[b]=c},
fo(a,b,c,d,e){t.hb.a(d)
a.$flags&2&&A.aM(a,5)
this.dm(a,b,c,d,e)
return},
$it:1,
$il:1,
$iu:1}
A.dd.prototype={
gF(a){return B.bp},
by(a,b,c){return new Float32Array(a.subarray(b,A.p4(b,c,a.length)))},
$iG:1,
$ijW:1}
A.eJ.prototype={
gF(a){return B.bq},
$iG:1}
A.eK.prototype={
gF(a){return B.br},
h(a,b){A.bv(b,a,a.length)
return a[b]},
$iG:1}
A.eL.prototype={
gF(a){return B.bs},
h(a,b){A.bv(b,a,a.length)
return a[b]},
$iG:1}
A.eM.prototype={
gF(a){return B.bt},
h(a,b){A.bv(b,a,a.length)
return a[b]},
$iG:1}
A.eN.prototype={
gF(a){return B.bw},
h(a,b){A.bv(b,a,a.length)
return a[b]},
$iG:1}
A.eO.prototype={
gF(a){return B.bx},
h(a,b){A.bv(b,a,a.length)
return a[b]},
$iG:1}
A.dh.prototype={
gF(a){return B.by},
gn(a){return a.length},
h(a,b){A.bv(b,a,a.length)
return a[b]},
$iG:1}
A.di.prototype={
gF(a){return B.bz},
gn(a){return a.length},
h(a,b){A.bv(b,a,a.length)
return a[b]},
$iG:1,
$ik4:1}
A.dI.prototype={}
A.dJ.prototype={}
A.dK.prototype={}
A.dL.prototype={}
A.b_.prototype={
i(a){return A.dV(v.typeUniverse,this,a)},
v(a){return A.lK(v.typeUniverse,this,a)}}
A.fj.prototype={}
A.j6.prototype={
p(a){return A.aK(this.a,null)}}
A.fi.prototype={
p(a){return this.a}}
A.dR.prototype={$ibs:1}
A.iH.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:10}
A.iG.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:21}
A.iI.prototype={
$0(){this.a.$0()},
$S:11}
A.iJ.prototype={
$0(){this.a.$0()},
$S:11}
A.j4.prototype={
fR(a,b){if(self.setTimeout!=null)self.setTimeout(A.cU(new A.j5(this,b),0),a)
else throw A.e(A.a9("`setTimeout()` not found."))}}
A.j5.prototype={
$0(){this.b.$0()},
$S:0}
A.fd.prototype={
bT(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cW(a)
else{s=r.a
if(q.i("aP<1>").b(a))s.cZ(a)
else s.aX(a)}},
bU(a,b){var s=this.a
if(this.b)s.ar(new A.af(a,b))
else s.aT(new A.af(a,b))}}
A.je.prototype={
$1(a){return this.a.$2(0,a)},
$S:6}
A.jf.prototype={
$2(a,b){this.a.$2(1,new A.d4(a,t.l.a(b)))},
$S:45}
A.jr.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:18}
A.dQ.prototype={
gq(){var s=this.b
return s==null?this.$ti.c.a(s):s},
hy(a,b){var s,r,q
a=A.a(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gq()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.hy(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.lF
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.lF
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.e(A.a3("sync*"))}return!1},
jb(a){var s,r,q=this
if(a instanceof A.cH){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.K(a)
return 2}},
$iO:1}
A.cH.prototype={
gt(a){return new A.dQ(this.a(),this.$ti.i("dQ<1>"))}}
A.af.prototype={
p(a){return A.w(this.a)},
$iI:1,
gaD(){return this.b}}
A.hh.prototype={
$2(a,b){var s,r,q=this
A.cM(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.ar(new A.af(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.ar(new A.af(r,s))}},
$S:23}
A.hg.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.by(r,k.b,a)
if(J.X(s,0)){q=A.j([],j.i("q<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.x)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.fK(q,l)}k.c.aX(q)}}else if(J.X(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.ar(new A.af(q,o))}},
$S(){return this.d.i("P(0)")}}
A.ff.prototype={
bU(a,b){var s=this.a
if((s.a&30)!==0)throw A.e(A.a3("Future already completed"))
s.aT(A.pl(a,b))},
dF(a){return this.bU(a,null)}}
A.dy.prototype={
bT(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.e(A.a3("Future already completed"))
s.cW(r.i("1/").a(a))}}
A.cb.prototype={
iF(a){if((this.c&15)!==6)return!0
return this.b.b.cD(t.al.a(this.d),a.a,t.y,t.K)},
it(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.iZ(q,m,a.b,o,n,t.l)
else p=l.cD(t.x.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.eK.b(A.a5(s))){if((r.c&1)!==0)throw A.e(A.ae("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.ae("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.U.prototype={
cE(a,b,c){var s,r,q=this.$ti
q.v(c).i("1/(2)").a(a)
s=$.T
if(s===B.j){if(!t.Q.b(b)&&!t.x.b(b))throw A.e(A.aW(b,"onError",u.c))}else{c.i("@<0/>").v(q.c).i("1(2)").a(a)
b=A.pD(b,s)}r=new A.U(s,c.i("U<0>"))
this.bC(new A.cb(r,3,a,b,q.i("@<1>").v(c).i("cb<1,2>")))
return r},
du(a,b,c){var s,r=this.$ti
r.v(c).i("1/(2)").a(a)
s=new A.U($.T,c.i("U<0>"))
this.bC(new A.cb(s,19,a,b,r.i("@<1>").v(c).i("cb<1,2>")))
return s},
hA(a){this.a=this.a&1|16
this.c=a},
aW(a){this.a=a.a&30|this.a&1
this.c=a.c},
bC(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.bC(a)
return}r.aW(s)}A.fD(null,null,r.b,t.M.a(new A.iN(r,a)))}},
de(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.de(a)
return}m.aW(n)}l.a=m.b1(a)
A.fD(null,null,m.b,t.M.a(new A.iR(l,m)))}},
b0(){var s=t.F.a(this.c)
this.c=null
return this.b1(s)},
b1(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aX(a){var s,r=this
r.$ti.c.a(a)
s=r.b0()
r.a=8
r.c=a
A.cB(r,s)},
fY(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.b0()
q.aW(a)
A.cB(q,r)},
ar(a){var s=this.b0()
this.hA(a)
A.cB(this,s)},
cW(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aP<1>").b(a)){this.cZ(a)
return}this.fW(a)},
fW(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.fD(null,null,s.b,t.M.a(new A.iP(s,a)))},
cZ(a){A.k6(this.$ti.i("aP<1>").a(a),this,!1)
return},
aT(a){this.a^=2
A.fD(null,null,this.b,t.M.a(new A.iO(this,a)))},
$iaP:1}
A.iN.prototype={
$0(){A.cB(this.a,this.b)},
$S:0}
A.iR.prototype={
$0(){A.cB(this.b,this.a.a)},
$S:0}
A.iQ.prototype={
$0(){A.k6(this.a.a,this.b,!0)},
$S:0}
A.iP.prototype={
$0(){this.a.aX(this.b)},
$S:0}
A.iO.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.iU.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.iY(t.fO.a(q.d),t.z)}catch(p){s=A.a5(p)
r=A.bx(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.fU(q)
n=k.a
n.c=new A.af(q,o)
q=n}q.b=!0
return}if(j instanceof A.U&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.U){m=k.b.a
l=new A.U(m.b,m.$ti)
j.cE(new A.iV(l,m),new A.iW(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.iV.prototype={
$1(a){this.a.fY(this.b)},
$S:10}
A.iW.prototype={
$2(a,b){A.cM(a)
t.l.a(b)
this.a.ar(new A.af(a,b))},
$S:26}
A.iT.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cD(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.a5(l)
r=A.bx(l)
q=s
p=r
if(p==null)p=A.fU(q)
o=this.a
o.c=new A.af(q,p)
o.b=!0}},
$S:0}
A.iS.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.iF(s)&&p.a.e!=null){p.c=p.a.it(s)
p.b=!1}}catch(o){r=A.a5(o)
q=A.bx(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fU(p)
m=l.b
m.c=new A.af(p,n)
p=m}p.b=!0}},
$S:0}
A.fe.prototype={}
A.fu.prototype={}
A.e_.prototype={$ilx:1}
A.fr.prototype={
j_(a){var s,r,q
t.M.a(a)
try{if(B.j===$.T){a.$0()
return}A.mj(null,null,this,a,t.H)}catch(q){s=A.a5(q)
r=A.bx(q)
A.ku(A.cM(s),t.l.a(r))}},
hX(a){return new A.j3(this,t.M.a(a))},
iY(a,b){b.i("0()").a(a)
if($.T===B.j)return a.$0()
return A.mj(null,null,this,a,b)},
cD(a,b,c,d){c.i("@<0>").v(d).i("1(2)").a(a)
d.a(b)
if($.T===B.j)return a.$1(b)
return A.pG(null,null,this,a,b,c,d)},
iZ(a,b,c,d,e,f){d.i("@<0>").v(e).v(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.T===B.j)return a.$2(b,c)
return A.pF(null,null,this,a,b,c,d,e,f)},
fb(a,b,c,d){return b.i("@<0>").v(c).v(d).i("1(2,3)").a(a)}}
A.j3.prototype={
$0(){return this.a.j_(this.b)},
$S:0}
A.jn.prototype={
$0(){A.nx(this.a,this.b)},
$S:0}
A.dD.prototype={
gn(a){return this.a},
gC(a){return this.a===0},
gE(a){return this.a!==0},
gL(){return new A.cc(this,this.$ti.i("cc<1>"))},
gag(){var s=this.$ti
return A.hW(new A.cc(this,s.i("cc<1>")),new A.iX(this),s.c,s.y[1])},
N(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.h1(a)},
h1(a){var s=this.d
if(s==null)return!1
return this.ai(this.d5(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.lz(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.lz(q,b)
return r}else return this.ha(b)},
ha(a){var s,r,q=this.d
if(q==null)return null
s=this.d5(q,a)
r=this.ai(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.cT(s==null?m.b=A.k7():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.cT(r==null?m.c=A.k7():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.k7()
p=A.jQ(b)&1073741823
o=q[p]
if(o==null){A.k8(q,p,[b,c]);++m.a
m.e=null}else{n=m.ai(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
a0(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.d1()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.e(A.a6(m))}},
d1(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.c0(i.a,null,!1,t.z)
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
cT(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.k8(a,b,c)},
d5(a,b){return a[A.jQ(b)&1073741823]}}
A.iX.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.dF.prototype={
ai(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cc.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gE(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.dE(s,s.d1(),this.$ti.i("dE<1>"))}}
A.dE.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.e(A.a6(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iO:1}
A.be.prototype={
gt(a){var s=this,r=new A.cf(s,s.r,A.m(s).i("cf<1>"))
r.c=s.e
return r},
gn(a){return this.a},
gC(a){return this.a===0},
gE(a){return this.a!==0},
B(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.O.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.O.a(r[b])!=null}else return this.h0(b)},
h0(a){var s=this.d
if(s==null)return!1
return this.ai(s[this.bG(a)],a)>=0},
m(a,b){var s,r,q=this
A.m(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cS(s==null?q.b=A.k9():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cS(r==null?q.c=A.k9():r,b)}else return q.fT(b)},
fT(a){var s,r,q,p=this
A.m(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.k9()
r=p.bG(a)
q=s[r]
if(q==null)s[r]=[p.bM(a)]
else{if(p.ai(q,a)>=0)return!1
q.push(p.bM(a))}return!0},
aQ(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.df(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.df(s.c,b)
else return s.hw(b)},
hw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bG(a)
r=n[s]
q=o.ai(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dA(p)
return!0},
I(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bK()}},
cS(a,b){A.m(this).c.a(b)
if(t.O.a(a[b])!=null)return!1
a[b]=this.bM(b)
return!0},
df(a,b){var s
if(a==null)return!1
s=t.O.a(a[b])
if(s==null)return!1
this.dA(s)
delete a[b]
return!0},
bK(){this.r=this.r+1&1073741823},
bM(a){var s,r=this,q=new A.fn(A.m(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bK()
return q},
dA(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bK()},
bG(a){return J.aC(a)&1073741823},
ai(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.X(a[r].a,b))return r
return-1},
$ilb:1}
A.fn.prototype={}
A.cf.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.a6(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iO:1}
A.hT.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:35}
A.z.prototype={
gt(a){return new A.c_(a,this.gn(a),A.aS(a).i("c_<z.E>"))},
K(a,b){return this.h(a,b)},
gC(a){return this.gn(a)===0},
gE(a){return!this.gC(a)},
cJ(a,b){return new A.b0(a,b.i("b0<0>"))},
aO(a,b,c){var s=A.aS(a)
return new A.av(a,s.v(c).i("1(z.E)").a(b),s.i("@<z.E>").v(c).i("av<1,2>"))},
m(a,b){var s
A.aS(a).i("z.E").a(b)
s=this.gn(a)
this.sn(a,s+1)
this.k(a,s,b)},
b3(a,b){return new A.aX(a,A.aS(a).i("@<z.E>").v(b).i("aX<1,2>"))},
X(a,b){var s,r=A.aS(a)
r.i("h(z.E,z.E)?").a(b)
s=b==null?A.q_():b
A.eX(a,0,this.gn(a)-1,s,r.i("z.E"))},
iq(a,b,c,d){var s
A.aS(a).i("z.E?").a(d)
A.dm(b,c,this.gn(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.jX(a,"[","]")},
$it:1,
$il:1,
$iu:1}
A.F.prototype={
a0(a,b){var s,r,q,p=A.m(this)
p.i("~(F.K,F.V)").a(b)
for(s=this.gL(),s=s.gt(s),p=p.i("F.V");s.l();){r=s.gq()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gP(){return this.gL().aO(0,new A.hU(this),A.m(this).i("A<F.K,F.V>"))},
aA(a,b,c,d){var s,r,q,p,o,n=A.m(this)
n.v(c).v(d).i("A<1,2>(F.K,F.V)").a(b)
s=A.r(c,d)
for(r=this.gL(),r=r.gt(r),n=n.i("F.V");r.l();){q=r.gq()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
hP(a){var s,r,q
A.m(this).i("l<A<F.K,F.V>>").a(a)
for(s=a.$ti,r=new A.c1(J.K(a.a),a.b,s.i("c1<1,2>")),s=s.y[1];r.l();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
gn(a){var s=this.gL()
return s.gn(s)},
gC(a){var s=this.gL()
return s.gC(s)},
gE(a){var s=this.gL()
return s.gE(s)},
gag(){return new A.dG(this,A.m(this).i("dG<F.K,F.V>"))},
p(a){return A.k0(this)},
$iD:1}
A.hU.prototype={
$1(a){var s=this.a,r=A.m(s)
r.i("F.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("F.V").a(s)
return new A.A(a,s,r.i("A<F.K,F.V>"))},
$S(){return A.m(this.a).i("A<F.K,F.V>(F.K)")}}
A.hV.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:12}
A.dG.prototype={
gn(a){var s=this.a
return s.gn(s)},
gC(a){var s=this.a
return s.gC(s)},
gE(a){var s=this.a
return s.gE(s)},
gt(a){var s=this.a,r=s.gL()
return new A.dH(r.gt(r),s,this.$ti.i("dH<1,2>"))}}
A.dH.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.h(0,r.gq())
return!0}s.c=null
return!1},
gq(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iO:1}
A.dW.prototype={
k(a,b,c){var s=A.m(this)
s.c.a(b)
s.y[1].a(c)
throw A.e(A.a9("Cannot modify unmodifiable map"))}}
A.cq.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.m(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
a0(a,b){this.a.a0(0,A.m(this).i("~(1,2)").a(b))},
gC(a){var s=this.a
return s.gC(s)},
gE(a){var s=this.a
return s.gE(s)},
gn(a){var s=this.a
return s.gn(s)},
gL(){return this.a.gL()},
p(a){return this.a.p(0)},
gag(){return this.a.gag()},
gP(){return this.a.gP()},
aA(a,b,c,d){return this.a.aA(0,A.m(this).v(c).v(d).i("A<1,2>(3,4)").a(b),c,d)},
$iD:1}
A.bH.prototype={}
A.bq.prototype={
gC(a){return this.gn(this)===0},
gE(a){return this.gn(this)!==0},
Y(a,b){var s
for(s=J.K(A.m(this).i("l<1>").a(b));s.l();)this.m(0,s.gq())},
p(a){return A.jX(this,"{","}")},
ae(a,b){var s
A.m(this).i("p(1)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gq()))return!1
return!0},
K(a,b){var s,r
A.eU(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gq();--r}throw A.e(A.hy(b,b-r,this,"index"))},
$it:1,
$il:1,
$icw:1}
A.dO.prototype={}
A.fw.prototype={
m(a,b){this.$ti.c.a(b)
return A.oJ()}}
A.dt.prototype={
B(a,b){return this.a.B(0,b)},
gn(a){return this.a.a},
gt(a){var s=this.a
return A.or(s,s.r,A.m(s).c)}}
A.cI.prototype={}
A.dX.prototype={}
A.fl.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.hr(b):s}},
gn(a){return this.b==null?this.c.a:this.au().length},
gC(a){return this.gn(0)===0},
gE(a){return this.gn(0)>0},
gL(){if(this.b==null){var s=this.c
return new A.Z(s,A.m(s).i("Z<1>"))}return new A.fm(this)},
gag(){var s,r=this
if(r.b==null){s=r.c
return new A.aZ(s,A.m(s).i("aZ<2>"))}return A.hW(r.au(),new A.iZ(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.y(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.N(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.hI().k(0,b,c)},
N(a){if(this.b==null)return this.c.N(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a0(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.a0(0,b)
s=o.au()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.jg(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.e(A.a6(o))}},
au(){var s=t.bE.a(this.c)
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
hI(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.r(t.N,t.z)
r=n.au()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.m(r,"")
else B.a.I(r)
n.a=n.b=null
return n.c=s},
hr(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.jg(this.a[a])
return this.b[a]=s}}
A.iZ.prototype={
$1(a){return this.a.h(0,A.y(a))},
$S:9}
A.fm.prototype={
gn(a){return this.a.gn(0)},
K(a,b){var s=this.a
if(s.b==null)s=s.gL().K(0,b)
else{s=s.au()
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gL()
s=s.gt(s)}else{s=s.au()
s=new J.bP(s,s.length,A.V(s).i("bP<1>"))}return s}}
A.jb.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:13}
A.ja.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:13}
A.ed.prototype={
iH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.dm(a4,a5,a2)
s=$.mO()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.c(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.c(a3,k)
h=A.jx(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.c(a3,g)
f=A.jx(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.c(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.c(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aj("")
g=o}else g=o
g.a+=B.b.u(a3,p,q)
c=A.S(j)
g.a+=c
p=k
continue}}throw A.e(A.Y("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.u(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.kP(a3,m,a5,n,l,r)
else{b=B.c.aa(r-1,4)+1
if(b===1)throw A.e(A.Y(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aC(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.kP(a3,m,a5,n,l,a)
else{b=B.c.aa(a,4)
if(b===1)throw A.e(A.Y(a1,a3,a5))
if(b>1)a3=B.b.aC(a3,a5,a5,b===2?"==":"=")}return a3}}
A.fX.prototype={}
A.bR.prototype={}
A.ek.prototype={}
A.en.prototype={}
A.da.prototype={
p(a){var s=A.eo(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.eD.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.eC.prototype={
dI(a,b){var s=A.pA(a,this.gi8().a)
return s},
ie(a,b){var s=A.oq(a,this.gig().b,null)
return s},
gig(){return B.b_},
gi8(){return B.aZ}}
A.hO.prototype={}
A.hN.prototype={}
A.j0.prototype={
fh(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.S(92)
s.a+=o
o=A.S(117)
s.a+=o
o=A.S(100)
s.a+=o
o=p>>>8&15
o=A.S(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.S(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.S(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.S(92)
s.a+=o
switch(p){case 8:o=A.S(98)
s.a+=o
break
case 9:o=A.S(116)
s.a+=o
break
case 10:o=A.S(110)
s.a+=o
break
case 12:o=A.S(102)
s.a+=o
break
case 13:o=A.S(114)
s.a+=o
break
default:o=A.S(117)
s.a+=o
o=A.S(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.S(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.S(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.S(92)
s.a+=o
o=A.S(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.u(a,r,m)},
bE(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.e(new A.eD(a,null))}B.a.m(s,a)},
bq(a){var s,r,q,p,o=this
if(o.fg(a))return
o.bE(a)
try{s=o.b.$1(a)
if(!o.fg(s)){q=A.l6(a,null,o.gdd())
throw A.e(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.a5(p)
q=A.l6(a,r,o.gdd())
throw A.e(q)}},
fg(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.fh(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.bE(a)
q.j8(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.bE(a)
r=q.j9(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
j8(a){var s,r,q=this.c
q.a+="["
s=J.b5(a)
if(s.gE(a)){this.bq(s.h(a,0))
for(r=1;r<s.gn(a);++r){q.a+=","
this.bq(s.h(a,r))}}q.a+="]"},
j9(a){var s,r,q,p,o,n,m=this,l={}
if(a.gC(a)){m.c.a+="{}"
return!0}s=a.gn(a)*2
r=A.c0(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a0(0,new A.j1(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.fh(A.y(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.bq(r[n])}p.a+="}"
return!0}}
A.j1.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:12}
A.j_.prototype={
gdd(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.f4.prototype={}
A.iv.prototype={
i5(a){return new A.j9(this.a).h2(t.I.a(a),0,null,!0)}}
A.j9.prototype={
h2(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.I.a(a)
s=A.dm(b,c,J.aN(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.p_(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.oZ(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.bH(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.p0(o)
l.b=0
throw A.e(A.Y(m,a,p+l.c))}return n},
bH(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.H(b+c,2)
r=q.bH(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bH(a,s,c,d)}return q.i7(a,b,c,d)},
i7(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aj(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.c(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.c(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.c(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.S(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.S(h)
e.a+=p
break
case 65:p=A.S(h)
e.a+=p;--d
break
default:p=A.S(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.c(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.c(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.c(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.c(a,l)
p=A.S(a[l])
e.a+=p}else{p=A.lm(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.S(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.bS.prototype={
R(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bS)if(this.a===b.a)s=this.b===b.b
return s},
gD(a){return A.cs(this.a,this.b,B.f,B.f)},
J(a,b){var s
t.dy.a(b)
s=B.c.J(this.a,b.a)
if(s!==0)return s
return B.c.J(this.b,b.b)},
p(a){var s=this,r=A.ne(A.nZ(s)),q=A.el(A.nX(s)),p=A.el(A.nT(s)),o=A.el(A.nU(s)),n=A.el(A.nW(s)),m=A.el(A.nY(s)),l=A.kV(A.nV(s)),k=s.b,j=k===0?"":A.kV(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaY:1}
A.fh.prototype={
p(a){return this.O()},
$ial:1}
A.I.prototype={
gaD(){return A.nS(this)}}
A.ea.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.eo(s)
return"Assertion failed"}}
A.bs.prototype={}
A.aV.prototype={
gbJ(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gbJ()+q+o
if(!s.a)return n
return n+s.gbI()+": "+A.eo(s.gcv())},
gcv(){return this.b}}
A.cu.prototype={
gcv(){return A.m0(this.b)},
gbJ(){return"RangeError"},
gbI(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.eu.prototype={
gcv(){return A.a(this.b)},
gbJ(){return"RangeError"},
gbI(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.du.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.f0.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.cy.prototype={
p(a){return"Bad state: "+this.a}}
A.ei.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eo(s)+"."}}
A.eP.prototype={
p(a){return"Out of Memory"},
gaD(){return null},
$iI:1}
A.dp.prototype={
p(a){return"Stack Overflow"},
gaD(){return null},
$iI:1}
A.iM.prototype={
p(a){return"Exception: "+this.a}}
A.J.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.u(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.c(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.c(e,n)
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
k=""}return g+l+B.b.u(e,i,j)+k+"\n"+B.b.a_(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.l.prototype={
b3(a,b){return A.n6(this,A.m(this).i("l.E"),b)},
aO(a,b,c){var s=A.m(this)
return A.hW(this,s.v(c).i("1(l.E)").a(b),s.i("l.E"),c)},
cI(a,b){var s=A.m(this)
return new A.H(this,s.i("p(l.E)").a(b),s.i("H<l.E>"))},
cJ(a,b){return new A.b0(this,b.i("b0<0>"))},
ae(a,b){var s
A.m(this).i("p(l.E)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gq()))return!1
return!0},
ak(a,b){var s
A.m(this).i("p(l.E)").a(b)
for(s=this.gt(this);s.l();)if(b.$1(s.gq()))return!0
return!1},
gn(a){var s,r=this.gt(this)
for(s=0;r.l();)++s
return s},
gC(a){return!this.gt(this).l()},
gE(a){return!this.gC(this)},
gaz(a){var s=this.gt(this)
if(!s.l())throw A.e(A.hB())
return s.gq()},
K(a,b){var s,r
A.eU(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gq();--r}throw A.e(A.hy(b,b-r,this,"index"))},
p(a){return A.nG(this,"(",")")}}
A.A.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.P.prototype={
gD(a){return A.v.prototype.gD.call(this,0)},
p(a){return"null"}}
A.v.prototype={$iv:1,
R(a,b){return this===b},
gD(a){return A.eS(this)},
p(a){return"Instance of '"+A.eT(this)+"'"},
gF(a){return A.kE(this)},
toString(){return this.p(this)}}
A.fv.prototype={
p(a){return""},
$ibb:1}
A.aj.prototype={
gn(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$io7:1}
A.iu.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.y(b)
s=B.b.bf(b,"=")
if(s===-1){if(b!=="")a.k(0,A.ke(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.u(b,0,s)
q=B.b.aR(b,s+1)
p=this.a
a.k(0,A.ke(r,0,r.length,p,!0),A.ke(q,0,q.length,p,!0))}return a},
$S:48}
A.it.prototype={
$2(a,b){throw A.e(A.Y("Illegal IPv6 address, "+a,this.a,b))},
$S:58}
A.dY.prototype={
gdt(){var s,r,q,p,o=this,n=o.w
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
gD(a){var s,r=this,q=r.y
if(q===$){s=B.b.gD(r.gdt())
r.y!==$&&A.mB()
r.y=s
q=s}return q},
gbp(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.lu(s==null?"":s)
r.z!==$&&A.mB()
q=r.z=new A.bH(s,t.dw)}return q},
gff(){return this.b},
gcu(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.M(s,"v",1))return B.b.u(s,1,s.length-1)
return s},
gcB(){var s=this.d
return s==null?A.lL(this.a):s},
gcC(){var s=this.f
return s==null?"":s},
geY(){var s=this.r
return s==null?"":s},
geZ(){return this.c!=null},
gf0(){return this.f!=null},
gf_(){return this.r!=null},
p(a){return this.gdt()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.gcL())if(p.c!=null===b.geZ())if(p.b===b.gff())if(p.gcu()===b.gcu())if(p.gcB()===b.gcB())if(p.e===b.gf7()){r=p.f
q=r==null
if(!q===b.gf0()){if(q)r=""
if(r===b.gcC()){r=p.r
q=r==null
if(!q===b.gf_()){s=q?"":r
s=s===b.geY()}}}}return s},
$if2:1,
gcL(){return this.a},
gf7(){return this.e}}
A.is.prototype={
gfe(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.bg(s,"?",m)
q=s.length
if(r>=0){p=A.dZ(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.fg("data","",n,n,A.dZ(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.fs.prototype={
geZ(){return this.c>0},
gf0(){return this.f<this.r},
gf_(){return this.r<this.a.length},
gcL(){var s=this.w
return s==null?this.w=this.h_():s},
h_(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.u(r.a,0,q)},
gff(){var s=this.c,r=this.b+3
return s>r?B.b.u(this.a,r,s-1):""},
gcu(){var s=this.c
return s>0?B.b.u(this.a,s,this.d):""},
gcB(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.qj(B.b.u(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gf7(){return B.b.u(this.a,this.e,this.f)},
gcC(){var s=this.f,r=this.r
return s<r?B.b.u(this.a,s+1,r):""},
geY(){var s=this.r,r=this.a
return s<r.length?B.b.aR(r,s+1):""},
gbp(){if(this.f>=this.r)return B.bd
return new A.bH(A.lu(this.gcC()),t.dw)},
gD(a){var s=this.x
return s==null?this.x=B.b.gD(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$if2:1}
A.fg.prototype={}
A.hY.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.jR.prototype={
$1(a){return this.a.bT(this.b.i("0/?").a(a))},
$S:6}
A.jS.prototype={
$1(a){if(a==null)return this.a.dF(new A.hY(a===undefined))
return this.a.dF(a)},
$S:6}
A.js.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.md(a))return a
s=this.a
a.toString
if(s.N(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.B(A.ah(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.cT(!0,"isUtc",t.y)
return new A.bS(r,0,!0)}if(a instanceof RegExp)throw A.e(A.ae("structured clone of RegExp",null))
if(a instanceof Promise)return A.b6(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.r(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bm(n),p=s.gt(n);p.l();)m.push(A.fF(p.gq()))
for(l=0;l<s.gn(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.c(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.b5(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:59}
A.fk.prototype={
a3(a){if(a<=0||a>4294967296)throw A.e(A.lh(u.g+a))
return Math.random()*a>>>0},
cz(){return Math.random()},
$ik1:1}
A.cC.prototype={
bA(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.c.H(a-s,k)
r=a>>>0
a=B.c.H(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.H(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.H(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.H(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.H(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.H(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.ab()
l.ab()
l.ab()
l.ab()},
ab(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.H(o-n+(q-p)+(m-r),4294967296)>>>0},
a3(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.e(A.lh(u.g+a))
s=a-1
if((a&s)>>>0===0){p.ab()
return(p.a&s)>>>0}do{p.ab()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cz(){var s,r=this
r.ab()
s=r.a
r.ab()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ik1:1}
A.em.prototype={
A(){var s=this
return A.R(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.ec.prototype={
fJ(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
j===$&&A.f()
s=k.a
A.d(j.connect(A.b(s.destination)))
r=k.d
r===$&&A.f()
A.b(r.gain).value=0.25
q=k.e
q===$&&A.f()
A.b(q.gain).value=0.12
p=k.f
p===$&&A.f()
A.b(p.gain).value=0.2
o=k.r
o===$&&A.f()
A.b(o.gain).value=0.4
n=k.w
n===$&&A.f()
A.b(n.gain).value=0.1
m=k.x
m===$&&A.f()
A.b(m.gain).value=1
for(r=[r,q,p,o,n,m],l=0;l<6;++l)A.d(r[l].connect(j))
r=k.y
r===$&&A.f()
A.b(r.gain).value=1
q=k.z
q===$&&A.f()
A.b(q.gain).value=0.35
A.d(p.connect(r))
A.d(o.connect(r))
o=k.Q
o===$&&A.f()
A.d(r.connect(o))
A.d(o.connect(q))
A.d(q.connect(j))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
k.dx!==$&&A.o()
k.dx=q
o=A.b(s.createBiquadFilter())
o.type="lowpass"
A.b(o.frequency).value=11e3
k.dy!==$&&A.o()
k.dy=o
A.d(q.connect(o))
A.d(o.connect(A.b(s.destination)))
j.disconnect(A.b(s.destination))
A.d(j.connect(q))},
fc(){var s=this.a
if(A.y(s.state)==="suspended")A.b(s.resume())},
hC(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.x
s===$&&A.f()
return s}r=B.a5.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.f()
break A}if("bed"===r){s=q.e
s===$&&A.f()
break A}if("mid"===r){s=q.f
s===$&&A.f()
break A}if("air"===r){s=q.w
s===$&&A.f()
break A}s=q.r
s===$&&A.f()
break A}return s},
hb(){var s,r,q,p,o,n,m,l=this.a,k=A.fB(l.sampleRate),j=B.d.aq(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cz()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.c(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
cA(a,b){var s,r,q,p=this,o=p.as.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.at.cz()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.d(r.connect(q))
s=B.a5.h(0,a)
A.d(q.connect(p.hC(s==null?"transient":s)))
r.start()},
iN(a){return this.cA(a,1)},
bR(){return}}
A.fW.prototype={
$1(a){return this.fi(t.q.a(a))},
fi(a){var s=0,r=A.bj(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bk(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ad(A.b6(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ad(A.b6(A.b(n.arrayBuffer()),t.e9),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.ad(A.b6(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.a5(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bh(null,r)
case 1:return A.bg(p.at(-1),r)}})
return A.bi($async$$1,r)},
$S:19}
A.h_.prototype={
f3(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.i(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.mU().b4(q).ga4()
p.d=q
p.c=p.b.b4(q).ga4()
p.a=a}}
A.hf.prototype={}
A.eZ.prototype={}
A.hl.prototype={
h5(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.d(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.d(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.d(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.fF(s.getParameter(34047))
if(typeof p=="number")o.c=p},
bl(a,b,c,d,e,f){return this.iB(a,b,c,d,e,f)},
iB(a,b,c,a0,a1,a2){var s=0,r=A.bj(t.B),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$bl=A.bk(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.b(A.b(j.document).createElement("img"))
m.src=a
s=7
return A.ad(A.b6(A.b(m.decode()),t.X),$async$bl)
case 7:i=n.a
h=A.d(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.b4(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.h5()
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
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bl,r)},
bm(a,b,c){var s=!1
return this.iC(t.h.a(a),b,!1)},
iC(b0,b1,b2){var s=0,r=A.bj(t.B),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$bm=A.bk(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.j([],t.W)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.b(A.b(a0.document).createElement("img"))
j.src=k
s=10
return A.ad(A.b6(A.b(j.decode()),a1),$async$bm)
case 10:J.fK(l,j)
case 8:b0.length===a||(0,A.x)(b0),++a2
s=7
break
case 9:if(J.aN(l)===0){a=A.a3("texture array needs at least one layer")
throw A.e(a)}i=A.a(J.aq(l,0).width)
h=A.a(J.aq(l,0).height)
if(J.X(i,0)||J.X(h,0)||J.mV(l,new A.hm(i,h))){a=A.a3("texture-array layers must have matching nonzero dimensions")
throw A.e(a)}g=J.aN(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.S()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.fG(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.S()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.Z()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.Z()
n=[1]
s=5
break A}e=B.d.H(a+1,2)}}a=m.a
a7=A.d(a.createTexture())
if(a7==null){a=A.a3("could not create texture array")
throw A.e(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.b4(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.X(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a3("texture-array storage failed (WebGL error 0x"+J.jU(d,16)+")")
throw A.e(a)}c=0
for(;;){a1=c
a3=J.aN(l)
if(typeof a1!=="number"){q=a1.bt()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aq(l,c)])
d=A.a(a.getError())
if(!J.X(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a3("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.jU(d,16)+")")
throw A.e(a)}a1=c
if(typeof a1!=="number"){q=a1.Z()
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
if(!J.X(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a3("texture-array mip generation failed (WebGL error 0x"+J.jU(d,16)+")")
throw A.e(a)}a.texParameteri(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.a(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(a0.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR))}else{a1=A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
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
b=A.a5(a9)
A.b(v.G.console).error("texture array load failed: "+A.w(b))
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
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bm,r)},
dq(a,b){var s=this.a,r=A.d(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.X(A.fF(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.e(A.cm("shader compile failed: "+A.w(A.m2(s,"getShaderInfoLog",r,t.v))+"\n"+b))
return r},
a7(a,b){var s=v.G,r=this.dq(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.dq(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.d(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.X(A.fF(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.e(A.cm("program link failed: "+A.w(A.m2(p,"getProgramInfoLog",o,t.v))))
return o},
gf5(){var s=A.fF(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.W(s):0},
cH(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.dm(0,c,B.c.fI(b.byteLength,p))*p
if(B.c.aa(o,4)!==0)A.B(A.ae("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.mW(B.r.ghY(b),b.byteOffset+0*p,B.c.H(o,4)))}},
bQ(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.b4(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
bN(a,b,c,d,e){var s,r=this.a,q=A.d(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.b4(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
ds(a,b,c){var s,r=this.a,q=A.d(r.createTexture())
q.toString
this.bQ(q,a,b)
s=v.G
A.b4(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
d3(a,b){var s,r,q=this.a,p=A.d(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.b4(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.b4(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
cw(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.d(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.bN(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.bN(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.ds(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.ds(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.bN(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.d3(a,b)
if(d)h.drawBuffers(A.j([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.u))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.e(A.cm("framebuffer incomplete"))
return new A.eZ(g,n,o,m,q,p,l,e,a,b)},
f4(a,b,c,d){return this.cw(a,b,c,d,0)},
iE(a,b,c,d){return this.cw(a,b,!0,c,d)},
ao(a,b,c){return this.cw(a,b,c,!1,0)},
bO(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.b4(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
a9(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.bQ(q,b,c)
if(p!=null)n.bQ(p,b,c)
n.bO(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.bO(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.bO(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.d3(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
iU(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.u
p.drawBuffers(A.j([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.b4(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.j([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.b4(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.b4(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.j([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
i1(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.u
s.drawBuffers(A.j([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.j([A.a(q.WebGL2RenderingContext.NONE),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.j([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
ac(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.hm.prototype={
$1(a){A.b(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:20}
A.et.prototype={
cG(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].jc(a)}}
A.ev.prototype={
af(a){if(this.f)return
A.l4(a,"requestPointerLock",t.X)},
hi(a){A.b(a)
if(A.aA(a.repeat))return
if(this.b.m(0,A.y(a.code)))this.c.m(0,A.y(a.code))},
hk(a){this.b.aQ(0,A.y(A.b(a).code))},
ho(a){var s=this
A.b(a)
if(!s.f)return
s.d=s.d+s.da(a,"movementX")
s.e=s.e+s.da(a,"movementY")},
hm(a){var s=this
A.b(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
da(a,b){var s=A.lZ(a[b])
if(s==null)s=null
return s==null?0:s}}
A.eG.prototype={}
A.c2.prototype={
gd7(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gD(B.c.cF(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gD(B.c.cF(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.c2&&A.kE(r)===A.kE(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gD(a){return this.gd7()}}
A.hX.prototype={
fN(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gd7(),q)}}
A.dq.prototype={
fa(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.r.fn(s,0,m,l)
n.a=s}r=b.U(0,a).b4(d.U(0,a)).ga4()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.dr(n.a,n.b,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=f+g
m=A.dr(n.a,m,b,r,q,p,o,0,1,l,h,0)
n.b=m
k=h+i
m=A.dr(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.dr(n.a,m,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=A.dr(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.dr(n.a,l,d,r,q,p,o,0,1,f,k,0)},
f9(a,b,c,d,e,f,g){return this.fa(a,b,c,d,e,0,f,0,g)}}
A.i2.prototype={
hd(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.a7(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.o()
m.w=r
q=s.a7(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.o()
m.x=q
p=m.c
o=A.d(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.o()
m.y=o
o=A.d(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.o()
m.z=o
o=A.d(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.o()
m.Q=o
r=A.d(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.o()
m.as=r
r=A.d(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.o()
m.at=r
q=A.d(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.o()
m.ax=q
m.d=s.ao(m.ay,m.ch,!1)
m.e=s.ao(m.ay,m.ch,!1)
m.f=s.ao(m.ay,m.ch,!1)
p=A.d(p.createVertexArray())
p.toString
m.CW!==$&&A.o()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
he(){var s
try{this.r=this.b.ao(384,216,!1)}catch(s){this.r=null}},
iT(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
if(n==null||m==null||l==null||a.d==null)return null
s=o.c
r=o.w
r===$&&A.f()
s.useProgram(r)
r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=A.a(r.WebGL2RenderingContext.TEXTURE_2D)
p=a.d
p.toString
s.bindTexture(q,p)
p=o.y
p===$&&A.f()
s.uniform1i(p,0)
p=o.z
p===$&&A.f()
s.uniform2f(p,n.x,n.y)
p=o.Q
p===$&&A.f()
s.uniform1f(p,b)
p=o.as
p===$&&A.f()
s.uniform1f(p,0.0025)
p=o.b
p.ac(n)
q=o.CW
q===$&&A.f()
s.bindVertexArray(q)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
q=o.x
q===$&&A.f()
s.useProgram(q)
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0))
q=o.at
q===$&&A.f()
s.uniform1i(q,0)
p.ac(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.f()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.ac(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.i7.prototype={
bF(a,b,c){var s,r,q
try{r=this.a.a7(b,c)
return r}catch(q){s=A.a5(q)
r=A.cm(a+": "+A.w(s))
throw A.e(r)}}}
A.i3.prototype={}
A.dC.prototype={}
A.ft.prototype={}
A.fq.prototype={}
A.fo.prototype={}
A.i4.prototype={
fO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",f=A.j([new A.c2(0,0,1,0),new A.c2(1,0,1,0),new A.c2(2,0,1,0)],t.fK),e=t.S
e=new A.hX(f,A.r(e,e))
e.fN(f)
h.ct=e
h.eD=1.9
h.cj=h.an/h.am
r=J.hC(6,t.e3)
for(q=0;q<6;++q)r[q]=new A.dC()
t.b1.a(r)
f=h.a8
e=f.a7("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.a7(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.a7(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.a7(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.a7(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.V!==$&&A.o()
h.V=new A.i7(f,e,p,o,n,m)
h.b=t.d1.a(new A.i5(h))
h.dk()
h.dj()
o=h.a5
p=A.d(o.getUniformLocation(m,"uTex"))
h.e6!==$&&A.o()
h.e6=p
p=A.d(o.getUniformLocation(m,"uNoise"))
h.e7!==$&&A.o()
h.e7=p
p=A.d(o.getUniformLocation(m,"uTime"))
h.dN!==$&&A.o()
h.dN=p
p=A.d(o.getUniformLocation(m,"uTexelSize"))
h.dM!==$&&A.o()
h.dM=p
p=A.d(o.getUniformLocation(m,"uNoiseOff"))
h.dO!==$&&A.o()
h.dO=p
p=A.d(o.getUniformLocation(m,"uChromaLuma"))
h.dP!==$&&A.o()
h.dP=p
p=A.d(o.getUniformLocation(m,"uChromaLag"))
h.dQ!==$&&A.o()
h.dQ=p
p=A.d(o.getUniformLocation(m,"uTapeNoise"))
h.dR!==$&&A.o()
h.dR=p
p=A.d(o.getUniformLocation(m,"uHeadSwitch"))
h.dS!==$&&A.o()
h.dS=p
p=A.d(o.getUniformLocation(m,"uTracking"))
h.dT!==$&&A.o()
h.dT=p
p=A.d(o.getUniformLocation(m,"uDropouts"))
h.dU!==$&&A.o()
h.dU=p
p=A.d(o.getUniformLocation(m,"uGhosting"))
h.dV!==$&&A.o()
h.dV=p
p=A.d(o.getUniformLocation(m,"uChromaBlurI"))
h.dW!==$&&A.o()
h.dW=p
p=A.d(o.getUniformLocation(m,"uChromaBlurQ"))
h.dX!==$&&A.o()
h.dX=p
p=A.d(o.getUniformLocation(m,"uChromaLagAmount"))
h.dY!==$&&A.o()
h.dY=p
p=A.d(o.getUniformLocation(m,"uNoiseScale"))
h.dZ!==$&&A.o()
h.dZ=p
p=A.d(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.e_!==$&&A.o()
h.e_=p
p=A.d(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.e0!==$&&A.o()
h.e0=p
p=A.d(o.getUniformLocation(m,"uJitterAmount"))
h.e1!==$&&A.o()
h.e1=p
p=A.d(o.getUniformLocation(m,"uJitterFreq"))
h.e2!==$&&A.o()
h.e2=p
p=A.d(o.getUniformLocation(m,"uDropoutRate"))
h.e3!==$&&A.o()
h.e3=p
p=A.d(o.getUniformLocation(m,"uGhostAmount"))
h.e4!==$&&A.o()
h.e4=p
p=A.d(o.getUniformLocation(m,"uGhostOffset"))
h.e5!==$&&A.o()
h.e5=p
p=A.d(o.getUniformLocation(m,"uGhostTarget"))
h.e8!==$&&A.o()
h.e8=p
m=A.d(o.getUniformLocation(m,"uHasGhost"))
h.e9!==$&&A.o()
h.e9=m
m=A.d(o.getUniformLocation(n,"uTex"))
h.cl!==$&&A.o()
h.cl=m
m=A.d(o.getUniformLocation(n,"uDepth"))
h.cm!==$&&A.o()
h.cm=m
m=A.d(o.getUniformLocation(n,"uFocusDistance"))
h.cn!==$&&A.o()
h.cn=m
m=A.d(o.getUniformLocation(n,"uDofBlurScale"))
h.co!==$&&A.o()
h.co=m
m=A.d(o.getUniformLocation(n,"uBlurRadius"))
h.cp!==$&&A.o()
h.cp=m
m=A.d(o.getUniformLocation(n,"uDofStrength"))
h.cq!==$&&A.o()
h.cq=m
n=A.d(o.getUniformLocation(n,"uTexel"))
h.cr!==$&&A.o()
h.cr=n
n=A.aA(A.b(A.b(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.aJ!==$&&A.o()
h.aJ=n
h.sf2(16777215)
n=new A.ic(o,f,A.j([],t.aN),A.j([],t.f7),A.j([],t.gi),A.j([],t.bK))
m=n.c=f.a7("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.d(o.getUniformLocation(m,"uLightProj"))
n.e=A.d(o.getUniformLocation(m,"uModel"))
h.cs!==$&&A.o()
h.cs=n
n=new A.i2(f,o)
n.hd()
n.he()
h.b7!==$&&A.o()
h.b7=n
n=f.a
m=A.d(n.createBuffer())
m.toString
h.bW!==$&&A.o()
h.bW=m
p=A.d(n.createBuffer())
p.toString
h.bX!==$&&A.o()
h.bX=p
n=A.d(n.createBuffer())
n.toString
h.bY!==$&&A.o()
h.bY=n
e=A.d(o.createVertexArray())
e.toString
h.bZ!==$&&A.o()
h.bZ=e
l=A.d(o.createVertexArray())
l.toString
h.c_!==$&&A.o()
h.c_=l
k=A.d(o.createVertexArray())
k.toString
h.c0!==$&&A.o()
h.c0=k
j=A.d(o.createVertexArray())
j.toString
h.c1!==$&&A.o()
h.c1=j
o.bindVertexArray(e)
h.bD(m)
o.bindVertexArray(l)
h.bD(p)
o.bindVertexArray(k)
h.bD(n)
o.bindVertexArray(null)
try{h.bc=f.f4(384,216,!0,!0)}catch(i){h.bc=null}s=4<f.gf5()?4:f.gf5()
e=s
if(typeof e!=="number")return e.S()
if(e>1)try{h.aI=f.iE(h.am,h.an,!0,s)}catch(i){h.aI=null}try{h.al=f.f4(h.am,h.an,!0,!0)}catch(i){h.aI=h.al=null}if(h.al!=null)try{h.b9=f.ao(h.gaV(),h.gaU(),!1)
h.ba=f.ao(h.gaV(),h.gaU(),!1)
h.bb=f.ao(h.am,h.an,!1)}catch(i){h.bb=h.ba=h.b9=null}},
gaV(){var s=B.c.H(this.am,4)
return s<1?1:s},
gaU(){var s=B.c.H(this.an,4)
return s<1?1:s},
aN(a){return this.iD(t.G.a(a))},
iD(a){var s=0,r=A.bj(t.H),q=this,p,o,n,m,l,k,j
var $async$aN=A.bk(function(b,c){if(b===1)return A.bg(c,r)
for(;;)switch(s){case 0:p=new A.L(a,A.m(a).i("L<1,2>")).gt(0),o=q.a8
case 2:if(!p.l()){s=3
break}n=p.d
m=n.a
l=B.a4.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ad(o.bl(k,l,!1,!1,!1,m==="grime"),$async$aN)
case 4:if(c!=null)q.d4(m,l)
s=2
break
case 3:p=t.eJ
j=A.at(new A.b0(new A.av(A.j(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.gk.a(new A.i6(a)),t.e1),p),p.i("l.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ad(o.bm(j,12,!1),$async$aN)
case 7:q.b6=c
case 6:return A.bh(null,r)}})
return A.bi($async$aN,r)},
aB(){var s=0,r=A.bj(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$aB=A.bk(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.r(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ad(A.b6(A.b(A.b(g.window).fetch("shaders/"+A.w(m))),f),$async$aB)
case 13:l=a3
if(!A.aA(l.ok)){i=A.cm("HTTP "+A.w(A.qd(l,"status",t.S)))
throw A.e(i)}a=J
a0=n
a1=m
s=14
return A.ad(A.b6(A.b(l.text()),i),$async$aB)
case 14:a.by(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.a5(c)
i=A.cm("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.e(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.ht(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.a5(b)
A.b(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bh(null,r)
case 1:return A.bg(p.at(-1),r)}})
return A.bi($async$aB,r)},
ht(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.V
q===$&&A.f()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.bF("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.bF("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.bF("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.dk()
i.dj()
q=i.dJ
q=A.at(q,A.m(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.x)(q),++k){s=q[k]
o=B.a4.h(0,s)
o.toString
i.d4(s,o)}A.b(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.a5(j)
A.b(v.G.console).error("shader recompile failed: "+A.w(r))}},
dj(){var s=this,r=s.a5,q=s.V
q===$&&A.f()
s.eE=A.d(r.getUniformLocation(q.c,"uTex"))
s.eF=A.d(r.getUniformLocation(q.c,"uTime"))
s.eG=A.d(r.getUniformLocation(q.c,"uFlash"))
s.eH=A.d(r.getUniformLocation(q.c,"uVignette"))
s.eI=A.d(r.getUniformLocation(q.c,"uGrain"))
s.eJ=A.d(r.getUniformLocation(q.c,"uDesat"))
s.eK=A.d(r.getUniformLocation(q.c,"uBloom"))
s.eL=A.d(r.getUniformLocation(q.c,"uBloomStrength"))
s.eS=A.d(r.getUniformLocation(q.c,"uNoiseOff"))
s.eV=A.d(r.getUniformLocation(q.c,"uLutMix"))
s.eO=A.d(r.getUniformLocation(q.c,"uDepth"))
s.eP=A.d(r.getUniformLocation(q.c,"uDepthViz"))
s.dK=A.d(r.getUniformLocation(q.c,"uSSAO"))
s.dL=A.d(r.getUniformLocation(q.c,"uSSAOStrength"))
s.eQ=A.d(r.getUniformLocation(q.c,"uNoise"))
s.eR=A.d(r.getUniformLocation(q.c,"uNoiseOn"))
s.eT=A.d(r.getUniformLocation(q.c,"uLut"))
s.eU=A.d(r.getUniformLocation(q.c,"uLutOn"))
s.eM=A.d(r.getUniformLocation(q.d,"uTex"))
s.ck=A.d(r.getUniformLocation(q.d,"uDir"))
s.eN=A.d(r.getUniformLocation(q.c,"uBlur"))},
d4(a,b){var s,r,q,p=this
p.dJ.m(0,a)
switch(a){case"bluenoise":s=p.V
s===$&&A.f()
s=s.c
r=p.eQ
r===$&&A.f()
q=p.eR
q===$&&A.f()
p.aE(s,r,q,b)
break
case"lut-gothic":s=p.V
s===$&&A.f()
s=s.c
r=p.eT
r===$&&A.f()
q=p.eU
q===$&&A.f()
p.aE(s,r,q,b)
break
case"grime":s=p.V
s===$&&A.f()
s=s.b
r=p.RG
r===$&&A.f()
q=p.rx
q===$&&A.f()
p.aE(s,r,q,b)
break
case"glass":s=p.V
s===$&&A.f()
s=s.b
r=p.x2
r===$&&A.f()
q=p.xr
q===$&&A.f()
p.aE(s,r,q,b)
break
case"soft":s=p.V
s===$&&A.f()
s=s.b
r=p.ep
r===$&&A.f()
q=p.eq
q===$&&A.f()
p.aE(s,r,q,b)
break}},
aE(a,b,c,d){var s=this.a5
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sf2(a){var s=A.jp(a)
this.eh=s.a
this.ei=s.b
this.ej=s.c},
bS(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.aa(a1,14)!==0)throw A.e(A.ae("static mesh needs a multiple of 14 floats, got "+a1,null))
s=a1/14|0
for(r=a0,q=r,p=q,o=a,n=o,m=n,l=0;l<s;++l){k=l*14
if(!(k<a1))return A.c(a2,k)
j=a2[k]
i=k+1
if(!(i<a1))return A.c(a2,i)
h=a2[i]
i=k+2
if(!(i<a1))return A.c(a2,i)
g=a2[i]
if(j<m)m=j
if(h<n)n=h
if(g<o)o=g
if(j>p)p=j
if(h>q)q=h
if(g>r)r=g}f=new Uint16Array(s)
for(l=0;l<s;++l){if(!(l<s))return A.c(f,l)
f[l]=l}a1=b.a5
i=A.d(a1.createVertexArray())
i.toString
e=A.d(a1.createBuffer())
e.toString
d=A.d(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.cX(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.il++
b.c5.k(0,a1,new A.ft(e,d,i,s,s,a3))
return a1},
ib(a){var s,r,q,p=this,o=p.c5.h(0,a)
if(o==null)return
p.dc()
s=p.en
r=p.eo
if(s!==r)p.dl(r)
s=p.a5
r=p.dy
r===$&&A.f()
s.uniform1i(r,0)
r=p.ci
r===$&&A.f()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.aK},
is(a){var s,r=this.c5.aQ(0,a)
if(r==null)return
s=this.a5
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
dc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.c6)return
c.c6=!0
s=c.a5
r=c.V
r===$&&A.f()
s.useProgram(r.b)
r=c.as
r===$&&A.f()
q=c.el
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.f()
r=c.c9
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.f()
q=c.ca
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.f()
r=c.cb
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.f()
s.uniform1f(r,c.eD)
r=c.CW
r===$&&A.f()
s.uniform1f(r,c.cj)
r=c.cx
r===$&&A.f()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.f()
s.uniform1f(r,60)
r=c.db
r===$&&A.f()
q=c.ea?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.f()
s.uniform3f(q,c.cc/255*0.25,c.cd/255*0.25,c.ce/255*0.25)
q=c.fx
q===$&&A.f()
r=c.eg
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.f()
s.uniform3f(r,c.eh,c.ei,c.ej)
r=c.go
r===$&&A.f()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.f()
s.uniform1f(r,14)
r=c.k1
r===$&&A.f()
s.uniform1f(r,c.ek)
r=c.k2
r===$&&A.f()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.f()
s.uniform1i(r,c.c8.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.c8
l=m.length
if(n<l){if(!(n<l))return A.c(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],0)
continue}j=A.jp(k.b)
m=c.aJ
m===$&&A.f()
i=m?1:1+(A.jT(c.cf*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.c(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.c(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.c(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],k.d*i)}r=c.aJ
r===$&&A.f()
q=r?1:1+(A.jT(c.cf*2.5,40503)*2-1)*0
c.ii=q
p=c.p3
p===$&&A.f()
s.uniform1f(p,q)
q=c.p4
q===$&&A.f()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.f()
p=c.ec?1:0
s.uniform1f(q,p)
p=c.ry
p===$&&A.f()
s.uniform1f(p,0.505)
p=c.to
p===$&&A.f()
s.uniform1f(p,1.2)
p=c.x1
p===$&&A.f()
s.uniform1f(p,0.25)
p=c.y1
p===$&&A.f()
s.uniform1f(p,2)
p=c.y2
p===$&&A.f()
s.uniform1f(p,0.45)
q=c.eb
h=q?384:0
g=q?216:0
q=c.c2
p=q.a
if(p===B.F){f=B.d.a2(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.er
r===$&&A.f()
s.uniform2f(r,h,g)
r=c.cs
r===$&&A.f()
q=c.ew
q===$&&A.f()
s.uniform1f(q,0)
q=c.ex
q===$&&A.f()
s.uniform3f(q,0.0015,0.005,0)
q=c.es
q===$&&A.f()
if(q!=null)r.br(0)
q=c.eu
q===$&&A.f()
if(q!=null)r.br(1)
q=c.ev
q===$&&A.f()
if(q!=null)r.br(2)
r.bs(0)
r.bs(1)
r.bs(2)
r=c.ey
r===$&&A.f()
if(c.b6==null)q=0
else{c.ct===$&&A.f()
q=3}s.uniform1i(r,q)
if(c.b6!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.b6)
r=c.cg
r===$&&A.f()
s.uniform1i(r,12)}r=c.eC
q=c.eB
p=c.eA
o=c.ez
n=0
for(;;){m=c.ct
m===$&&A.f()
if(!(n<3))break
d=m.a[n]
if(!(n<o.length))return A.c(o,n)
m=o[n]
if(m!=null)s.uniform1f(m,d.b)
if(!(n<p.length))return A.c(p,n)
m=p[n]
if(m!=null)s.uniform1f(m,d.c)
if(!(n<q.length))return A.c(q,n)
m=q[n]
if(m!=null)s.uniform1i(m,d.a)
if(!(n<r.length))return A.c(r,n)
m=r[n]
if(m!=null)s.uniform1i(m,d.d);++n}c.dl(c.eo)
r=c.dy
r===$&&A.f()
s.uniform1i(r,0)
r=c.ci
r===$&&A.f()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
dl(a){var s
this.en=a
s=this.dx
s===$&&A.f()
this.a5.uniformMatrix4fv(s,!1,a.a)},
hE(a){var s,r,q,p,o,n,m
for(s=this.ee,r=this.ed,q=1;q<a;++q){if(!(q<800))return A.c(s,q)
p=s[q]
if(!(p<r.length))return A.c(r,p)
o=q-1
for(;;){if(o>=0){n=s[o]
if(!(n<r.length))return A.c(r,n)}if(!!1)break
n=o+1
if(!(o>=0))return A.c(s,o)
m=s[o]
if(!(n>=0&&n<800))return A.c(s,n)
s[n]=m;--o}n=o+1
if(!(n>=0&&n<800))return A.c(s,n)
s[n]=p}},
hD(a){var s,r,q,p,o,n,m,l
for(s=this.ef,r=this.c7,q=1;q<a;++q){if(!(q<4000))return A.c(s,q)
p=s[q]
if(!(p<r.length))return A.c(r,p)
o=r[p].x
n=q-1
for(;;){if(n>=0){m=s[n]
if(!(m<r.length))return A.c(r,m)
m=r[m].x>o}else m=!1
if(!m)break
m=n+1
if(!(n>=0))return A.c(s,n)
l=s[n]
if(!(m>=0&&m<4000))return A.c(s,m)
s[m]=l;--n}m=n+1
if(!(m>=0&&m<4000))return A.c(s,m)
s[m]=p}},
ir(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.c2=b4
s=b2.aL
r=0
if(s>0){for(s=b2.ef,q=0;p=b2.aL,q<p;++q)B.a.k(s,q,q)
b2.hD(p)
for(p=b2.c7,o=b2.c3,n=0;n<b2.aL;++n){if(!(n<4000))return A.c(s,n)
m=s[n]
if(!(m<p.length))return A.c(p,m)
l=p[m]
r=A.me(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.c7,p=b2.c3,q=0;q<b2.aL;++q){if(!(q<s.length))return A.c(s,q)
l=s[q]
r=A.me(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.aL=0
for(s=b2.ee,q=0;p=b2.bd,q<p;++q)B.a.k(s,q,q)
b2.hE(p)
for(p=b2.ij,o=b2.ed,k=0,n=0;n<b2.bd;++n){if(!(n<800))return A.c(s,n)
m=s[n]
if(!(m<o.length))return A.c(o,m)
j=o[m]
i=A.jp(0)
m=j.b
h=b2.cb
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.ca
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
e=[new A.i(a-d,a1-c,a2-e),new A.i(g-d,f-c,h-e),new A.i(g+d,f+c,h+e),new A.i(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.c9
k=A.mg(p,k,a3,a4,a5,a6,new A.i(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.bd=0
s=b2.a8
o=b2.bW
o===$&&A.f()
s.cH(o,b2.c3,r)
o=b2.bX
o===$&&A.f()
s.cH(o,p,k)
b2.dc()
p=b2.a5
o=b2.dy
o===$&&A.f()
p.uniform1i(o,0)
o=b2.bZ
o===$&&A.f()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.H(r,14));++b2.aK
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.c_
m===$&&A.f()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.H(k,14));++b2.aK
m=b2.c4
if(m>0){h=b2.bY
h===$&&A.f()
s.cH(h,b2.ik,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.c0
m===$&&A.f()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.c4/14|0);++b2.aK}m=b2.bc
if(m!=null){a7=b2.al
if(a7!=null)s.iU(m,a7)}a8=b2.al
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.c1
m===$&&A.f()
p.bindVertexArray(m)
a3=b2.b9
a4=b2.ba
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.V
g===$&&A.f()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.eM
g===$&&A.f()
p.uniform1i(g,0)
s.ac(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.ck
g===$&&A.f()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.ac(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.ck,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.bb
if(b2.b8>0&&a6!=null){s.ac(a6)
g=b2.V
g===$&&A.f()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.cl
g===$&&A.f()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.cm
g===$&&A.f()
p.uniform1i(g,7)
g=b2.cn
g===$&&A.f()
p.uniform1f(g,0.03171953255425709)
g=b2.co
g===$&&A.f()
p.uniform1f(g,1)
g=b2.cp
g===$&&A.f()
p.uniform1f(g,0.5)
g=b2.cq
g===$&&A.f()
p.uniform1f(g,b2.b8)
g=b2.cr
g===$&&A.f()
p.uniform2f(g,1/b2.am,1/b2.an)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.b7
g===$&&A.f()
b0=g.iT(a8,0.5)
s.ac(null)
s=b2.V
s===$&&A.f()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.eK
g===$&&A.f()
p.uniform1i(g,1)
g=b2.eL
g===$&&A.f()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.eN
s===$&&A.f()
b2.aJ===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.eO
s===$&&A.f()
p.uniform1i(s,7)
s=b2.eP
s===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.dK
s===$&&A.f()
p.uniform1i(s,11)
s=b2.dL
s===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.b8>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.eE
h===$&&A.f()
p.uniform1i(h,0)
h=b2.cf+=b3;++b2.em
s=b2.eF
s===$&&A.f()
p.uniform1f(s,h)
h=b2.eS
h===$&&A.f()
s=b2.em
p.uniform2f(h,B.c.aa(s*13,64),B.c.aa(s*29,64))
s=b2.eG
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eH
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eI
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eJ
s===$&&A.f()
p.uniform1f(s,0)
s=b2.c2
if(s.a===B.a9)b1=0*(1-s.b/1)
else b1=0
s=b2.eV
s===$&&A.f()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.i5.prototype={
$0(){var s=this.a.V
s===$&&A.f()
return s.b},
$S:22}
A.i6.prototype={
$1(a){return this.a.h(0,A.y(a))},
$S:15}
A.iF.prototype={
ghN(){var s=this.b
s===$&&A.f()
return s},
dk(){var s,r,q,p,o,n,m=this,l=m.hO(),k=m.a
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
m.as=A.d(k.getUniformLocation(l,"uEye"))
m.at=A.d(k.getUniformLocation(l,"uFwd"))
m.ax=A.d(k.getUniformLocation(l,"uUp"))
m.ay=A.d(k.getUniformLocation(l,"uRight"))
m.ch=A.d(k.getUniformLocation(l,"uScale"))
m.CW=A.d(k.getUniformLocation(l,"uAspect"))
m.cx=A.d(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.d(k.getUniformLocation(l,"uDepthFar"))
m.db=A.d(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.d(k.getUniformLocation(l,"uModel"))
m.dy=A.d(k.getUniformLocation(l,"uInstanced"))
m.fr=A.d(k.getUniformLocation(l,"uFog"))
m.fx=A.d(k.getUniformLocation(l,"uLight"))
m.fy=A.d(k.getUniformLocation(l,"uLightColor"))
m.go=A.d(k.getUniformLocation(l,"uFogStart"))
m.id=A.d(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.d(k.getUniformLocation(l,"uAmbient"))
m.k2=A.d(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.d(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.I(s)
r=m.ok
B.a.I(r)
q=m.p1
B.a.I(q)
p=m.p2
B.a.I(p)
for(o=0;o<4;++o){n=""+o
B.a.m(s,A.d(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.m(r,A.d(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.m(q,A.d(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.m(p,A.d(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.d(k.getUniformLocation(l,"uFlicker"))
m.p4=A.d(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.d(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.d(k.getUniformLocation(l,"uWall"))
m.rx=A.d(k.getUniformLocation(l,"uWallOn"))
m.ry=A.d(k.getUniformLocation(l,"uWallMid"))
m.to=A.d(k.getUniformLocation(l,"uWallAmt"))
m.x1=A.d(k.getUniformLocation(l,"uWallScale"))
m.x2=A.d(k.getUniformLocation(l,"uGlass"))
m.xr=A.d(k.getUniformLocation(l,"uGlassOn"))
m.y1=A.d(k.getUniformLocation(l,"uGlassGain"))
m.y2=A.d(k.getUniformLocation(l,"uGlassFog"))
m.ep=A.d(k.getUniformLocation(l,"uSoft"))
m.eq=A.d(k.getUniformLocation(l,"uSoftOn"))
m.er=A.d(k.getUniformLocation(l,"uInternal"))
m.es=A.d(k.getUniformLocation(l,"uLightProj0"))
m.eu=A.d(k.getUniformLocation(l,"uLightProj1"))
m.ev=A.d(k.getUniformLocation(l,"uLightProj2"))
m.im=A.d(k.getUniformLocation(l,"uShadow0"))
m.io=A.d(k.getUniformLocation(l,"uShadow1"))
m.ip=A.d(k.getUniformLocation(l,"uShadow2"))
m.ew=A.d(k.getUniformLocation(l,"uShadowCasters"))
m.cg=A.d(k.getUniformLocation(l,"uMaterialAlbedo"))
m.ci=A.d(k.getUniformLocation(l,"uStaticMaterial"))
m.ex=A.d(k.getUniformLocation(l,"uShadowBias"))
m.ey=A.d(k.getUniformLocation(l,"uMaterialCount"))
s=m.ez
B.a.I(s)
r=m.eA
B.a.I(r)
q=m.eB
B.a.I(q)
p=m.eC
B.a.I(p)
for(o=0;o<32;++o){n=""+o
B.a.m(s,A.d(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.m(r,A.d(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.m(q,A.d(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.m(p,A.d(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.cg,12)},
bD(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.cX(56)},
cX(a){var s=this,r=s.c
r===$&&A.f()
s.aF(r,3,a,0)
r=s.f
r===$&&A.f()
s.aF(r,3,a,12)
r=s.d
r===$&&A.f()
s.aF(r,4,a,24)
r=s.e
r===$&&A.f()
s.aF(r,1,a,40)
r=s.r
r===$&&A.f()
s.aF(r,3,a,44)},
aF(a,b,c,d){var s=this.a
A.b4(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
hO(){return this.ghN().$0()}}
A.ic.prototype={
br(a){return null},
bs(a){return null}}
A.i.prototype={
Z(a,b){return new A.i(this.a+b.a,this.b+b.b,this.c+b.c)},
U(a,b){return new A.i(this.a-b.a,this.b-b.b,this.c-b.c)},
a_(a,b){return new A.i(this.a*b,this.b*b,this.c*b)},
i9(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b4(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.i(s*r-q*p,q*o-n*r,n*p-s*o)},
gn(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga4(){var s=this,r=s.gn(0)
return r<1e-9?new A.i(0,0,0):new A.i(s.a/r,s.b/r,s.c/r)}}
A.fZ.prototype={
iQ(a){var s,r,q,p,o,n
t.a3.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.e3(s.getItem("quarantine.save.active"))
q=A.e3(s.getItem("quarantine.save.previous"))
p=this.d2(r,a)
if(p!=null)return new A.c4(p,null)
o=this.d2(q,a)
if(o!=null)return new A.c4(o,"recovered previous save")
if(r==null)return B.bi
return B.bh}catch(n){return B.bg}},
d2(a,b){var s,r,q
t.a3.a(b)
if(a==null)return null
try{s=this.a.dH(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.a5(q) instanceof A.J)return null
else throw q}}}
A.aO.prototype={
O(){return"EndingKind."+this.b}}
A.ha.prototype={}
A.cl.prototype={
A(){var s=t.N
return A.R(["kind",this.a.b],s,s)}}
A.hd.prototype={
$1(a){return t.k.a(a).b===this.a.h(0,"kind")},
$S:24}
A.eR.prototype={
A(){var s,r=this,q=t.N,p=A.r(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.R(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
iy(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.U(0,new A.i(0,1.3499999999999999,0))
return!new A.ee(s,s.Z(0,new A.i(0,1.2000000000000002,0))).f1(a,r)}}
A.cv.prototype={
A(){return A.R(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.ia.prototype={
dH(a){var s,r,q,p,o,n,m=B.D.dI(a,null),l=t.f
if(!l.b(m))throw A.e(B.aO)
s=t.N
r=t.z
q=A.am(m,s,r)
p=q.h(0,"version")
if(!A.ap(p)||p!==1)A.B(A.Y("unsupported save version "+A.w(p),null,null))
o=q.h(0,"run")
n=q.h(0,"meta")
if(!l.b(o)||!l.b(n))A.B(B.aF)
l=A.am(o,s,r)
return A.lj(A.am(n,s,r),l,p)}}
A.c4.prototype={}
A.bW.prototype={
O(){return"GameSessionEventType."+this.b}}
A.eq.prototype={}
A.hi.prototype={}
A.ep.prototype={
gah(){var s=this.d
return new A.hi(s.a,s.b)},
hR(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.e(A.aW(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.b_(B.aP)}if(n<a)this.b_(B.aQ)},
fC(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.bx(a)&&s.fB(b)},
iS(a){var s,r,q
t.au.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.ad)r.c=Math.min(1,r.c+0.1)},
fA(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.nh(j,A.bE(i.d,h).length)
if(a===B.ac)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.V(r)
A.ng(j,new A.H(r,q.i("p(1)").a(new A.hj(k)),q.i("H<1>")).gn(0))
r=k.f
q=r.b
if(B.a.B(B.b0,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aq(j.a/1*3)
B.a.m(r.r,new A.cx(q.a,a,b))
m=r.a
A.nq(m,q.a,n,k.b,A.bE(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.fp(B.b6)
s.r.i3(o,c)
l=B.d.aq(j.b/1*6)
if(l>0)r.bx(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aZ(i,A.m(i).i("aZ<2>")).ak(0,new A.hk())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.b_(B.aS)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.b_(B.aR)},
b_(a){++this.x
B.a.m(this.w,new A.eq())}}
A.hj.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.id().fv(this.a.c,a.a)},
$S:25}
A.hk.prototype={
$1(a){return t.L.a(a).e},
$S:16}
A.ee.prototype={
iW(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.V(s)
q=new A.H(s,r.i("p(1)").a(new A.h0(e)),r.i("H<1>"))
p=!q.gt(0).l()?null:q.gaz(0)
if(p==null){n.d=null
return}if(!(n.aZ(b,p.f)&&a==="hall"))o=n.aZ(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.fc(p,B.d.a2(d,0,1))},
iG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.d9(f,c,d)
s=g.h6(a,b,c,d)
if(s!=null){g.d=s
return g.d9(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.hZ(Math.sqrt(r*r+q*q)/0.08))
o=d.a_(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.dw(a,n,m,new A.i(q,0,0))
l=l||j.b
i=g.f8(a,n)
n=i==null?n:i
h=g.dw(a,n,j.a,new A.i(0,0,r))
l=l||h.b
m=h.a
i=g.f8(a,n)
n=i==null?n:i}g.b2(m)
return new A.eH(m,n)},
h6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.aZ(c,l.f)&&n
j=q&&this.aZ(c,l.r)&&o
if(k||j)return new A.fc(l,k?0:1)}return null},
d9(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.U(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.a2(a.b+o/p,0,1)
n=A.lv(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.b2(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.eH(n,k)},
aZ(a,b){var s=a.U(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
dw(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.dz(c,!1)
s=c.Z(0,d)
this.b2(s)
if(this.f1(a,b)){this.b2(c)
return new A.dz(c,!0)}return new A.dz(s,!1)},
b2(a){var s=a.U(0,new A.i(0,1.3499999999999999,0))
this.a=s
this.b=s.Z(0,new A.i(0,1.2000000000000002,0))},
f1(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aH(m)
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
return!this.hG(a,m,s)},
f8(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aH(k)
for(r=k.a,q=a.aP(r),p=J.K(q.a),q=new A.aa(p,q.b,q.$ti.i("aa<1>"));q.l();){o=p.gq()
n=o.f6(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.at&&!o.ax&&!o.z&&this.dC(k,o,s)&&this.h3(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
hG(a,b,c){var s,r,q
for(s=a.aP(b.a),r=J.K(s.a),s=new A.aa(r,s.b,s.$ti.i("aa<1>"));s.l();){q=r.gq()
if(q.at&&!q.ax&&!q.z&&this.dC(b,q,c))return!0}return!1},
dC(a,b,c){var s,r,q,p=a.a,o=b.aw(p),n=b.ap(p)
p=o===B.e||o===B.h
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
h3(a,b,c){var s,r=this
switch(b.aw(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
shV(a){this.a=t.fP.a(a)}}
A.h0.prototype={
$1(a){return t.eU.a(a).a===this.a},
$S:27}
A.eH.prototype={}
A.dz.prototype={}
A.fc.prototype={}
A.d5.prototype={}
A.hq.prototype={
i3(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.c(B.n,r)
s=B.n[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
fw(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.n,q)
p=B.n[q]
if(p.b===a)r+=p.c}return r},
fz(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.n,q)
p=B.n[q]
if(p.b===a)r+=p.d}return r},
A(){return A.R(["landedCount",this.b],t.N,t.z)}}
A.i8.prototype={
fP(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.o()
o.c=new A.hr(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.x)(n),++q){p=n[q]
r.k(0,p.a,o.cY(p))}},
iR(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.x)(r),++o)p.is(r[o])
s.k(0,a,n.cY(m))},
cY(a){var s,r=new A.dq(new Float32Array(5376)),q=new A.dq(new Float32Array(5376)),p=new A.dq(new Float32Array(5376)),o=a.d,n=this.a.aH(a),m=o.a,l=o.b,k=o.c,j=n.c,i=k+j,h=n.a,g=m+h
h/=2
j/=2
r.f9(new A.i(m,l,k),new A.i(m,l,i),new A.i(g,l,i),new A.i(g,l,k),11053224,h,j)
l+=n.b
q.f9(new A.i(m,l,k),new A.i(g,l,k),new A.i(g,l,i),new A.i(m,l,i),12632256,h,j)
for(s=0;s<4;++s)this.fV(p,a,n,B.b9[s])
m=this.b
return A.j([m.bS(B.r.by(r.a,0,r.b),1),m.bS(B.r.by(q.a,0,q.b),2),m.bS(B.r.by(p.a,0,p.b),0)],t.t)},
fV(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a3===B.e||a3===B.h?a2.a:a2.c,a=A.j([],t.bx)
for(s=a1.a,r=this.a.aP(s),q=J.K(r.a),r=new A.aa(q,r.b,r.$ti.i("aa<1>"));r.l();){p=q.gq()
if(!p.as&&p.aw(s)===a3)a.push(new A.bK(p.ap(s),p.ap(s)+p.w,0,p.x))}for(s=a1.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
if(n.b===a3){q=n.c
p=n.d
a.push(new A.bK(q,q+n.e,p,p+n.f))}}s=t.i
r=A.eF([0,b],s)
for(q=a.length,p=t.u,o=0;o<a.length;a.length===q||(0,A.x)(a),++o){m=a[o]
r.Y(0,A.j([m.a,m.b],p))}l=A.at(r,r.$ti.c)
B.a.a1(l)
s=A.eF([0,a2.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.x)(a),++o){m=a[o]
s.Y(0,A.j([m.c,m.d],p))}k=A.at(s,s.$ti.c)
B.a.a1(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.c(l,j)
f=l[j]
if(!(i<r))return A.c(l,i)
e=l[i]
if(!(h<s))return A.c(k,h)
d=k[h]
c=k[g]
if(B.a.ak(a,new A.i9(f,e,d,c)))continue
this.hM(a0,a1,a2,a3,f,e,d,c)}},
hM(a,b,c,d,e,f,g,h){var s,r,q,p=null,o=b.d,n=o.a,m=o.b,l=o.c
o=d.a
switch(o){case 0:s=new A.i(n+e,m+g,l)
break
case 2:s=new A.i(n+f,m+g,l+c.c)
break
case 1:s=new A.i(n+c.a,m+h,l+f)
break
case 3:s=new A.i(n,m+h,l+e)
break
default:s=p}switch(o){case 0:r=new A.i(n+f,m+g,l)
break
case 2:r=new A.i(n+e,m+g,l+c.c)
break
case 1:r=new A.i(n+c.a,m+h,l+e)
break
case 3:r=new A.i(n,m+h,l+f)
break
default:r=p}switch(o){case 0:q=new A.i(n+f,m+h,l)
break
case 2:q=new A.i(n+e,m+h,l+c.c)
break
case 1:q=new A.i(n+c.a,m+g,l+e)
break
case 3:q=new A.i(n,m+g,l+f)
break
default:q=p}switch(o){case 0:o=new A.i(n+e,m+h,l)
break
case 2:o=new A.i(n+f,m+h,l+c.c)
break
case 1:o=new A.i(n+c.a,m+g,l+f)
break
case 3:o=new A.i(n,m+g,l+e)
break
default:o=p}a.fa(s,r,q,o,9145227,e/2,(f-e)/2,g/2,(h-g)/2)},
fk(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.y
s=l.a
r=A.eF([s],t.N)
for(n=n.aP(s),q=J.K(n.a),n=new A.aa(q,n.b,n.$ti.i("aa<1>"));n.l();){p=q.gq()
o=p.f6(s)
if(!(p.at&&!p.ax&&!p.z)||o==null||m.h(0,o)==null)continue
r.m(0,o)}return r},
ia(a,b){var s,r,q,p,o=this,n=o.fk(a),m=o.b,l=o.c
l===$&&A.f()
l=t.cH.a(l.j5(n,b))
s=t.A
m.c8=l.length<=4?A.bE(l,s):A.bE(A.k3(l,0,A.cT(4,"count",t.S),A.V(l).c),s)
for(l=n.gt(n),s=o.d;l.l();){r=s.h(0,l.gq())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.x)(r),++p)m.ib(r[p])}}}
A.i9.prototype={
$1(a){var s,r,q=this
t.cp.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:28}
A.bK.prototype={}
A.bU.prototype={
O(){return"FocusKind."+this.b}}
A.cn.prototype={}
A.hp.prototype={
hc(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.x)(s),++p){o=s[p]
n=o.a
if(q.N(n))throw A.e(A.a3("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.x)(s),++p){m=s[p]
n=m.a
if(q.N(n))throw A.e(A.a3("duplicate portal "+n))
q.k(0,n,m)}},
hK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.e(A.a3("3D room overlap: "+n.a+" and "+m.a))}},
hJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.r(t.N,t.h7)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.x)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.x)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.dB(o,i,h,g,f,e)
a5.cU(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.x)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.e(A.a3(l+" references invalid portal "+d))
i=c.aw(l)
h=c.ap(l)
g=c.w
f=c.x
a5.dB(o,i,h,g,0,f)
a5.cU(a6,l,c.aw(l),c.ap(l),c.ap(l)+g,0,f)}}for(s=new A.L(a6,a6.$ti.i("L<1,2>")).gt(0);s.l();){b=s.d
a=b.b
r=J.bm(a)
r.X(a,new A.hu())
for(a0=0;a0<r.gn(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gn(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.e(A.a3("overlapping apertures on "+b.a))}}},
dB(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.e||b===B.h
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.e(A.a3("aperture outside "+a.a+" "+b.b+" wall"))},
cU(a,b,c,d,e,f,g){J.fK(t.h6.a(a).iP(b+":"+c.b,new A.ht()),new A.dN([d,e,f,g]))},
aH(a){var s=a.c,r=this.r,q=a.a
return new A.i(s.a+r.fw(q),s.b+r.fz(q),s.c)},
aP(a){var s=this.c,r=A.V(s)
return new A.H(s,r.i("p(1)").a(new A.hv(a)),r.i("H<1>"))},
iO(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.e(A.aW(a,"roomId","not a portal endpoint"))
r=this.aH(o)
q=b.ap(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aw(a).a){case 0:s=new A.i(s.a+q,p,s.c)
break
case 2:s=new A.i(s.a+q,p,s.c+r.c)
break
case 1:s=new A.i(s.a+r.a,p,s.c+q)
break
case 3:s=new A.i(s.a,p,s.c+q)
break
default:s=null}return s},
gj7(){return B.a.eX(this.b,0,new A.hw(),t.S)}}
A.hu.prototype={
$2(a,b){var s=t.bq
s.a(a)
s.a(b)
return B.d.J(a.a[0],b.a[0])},
$S:29}
A.ht.prototype={
$0(){return A.j([],t.eV)},
$S:30}
A.hv.prototype={
$1(a){var s
t.ap.a(a)
s=this.a
return a.b===s||a.c===s},
$S:31}
A.hw.prototype={
$2(a,b){return A.a(a)+t.J.a(b).e.length},
$S:32}
A.he.prototype={}
A.id.prototype={
fv(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.ae(s,new A.ie())}else s=!1
return s}}
A.ie.prototype={
$1(a){return t.g4.a(a).w},
$S:33}
A.b9.prototype={}
A.hr.prototype={
j5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.cq.a(a)
s=A.j([],t.bs)
for(r=a.gt(a),q=this.a.e;r.l();){p=q.h(0,r.gq())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.x)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.m(s,new A.b9(new A.i(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.hz(j),0.06))}}B.a.X(s,new A.hs(b))
return A.k3(s,0,A.cT(4,"count",t.S),t.A).fd(0)},
hz(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.hs.prototype={
$2(a,b){var s=t.A
s.a(a)
s.a(b)
s=this.a
return B.d.J(a.a.U(0,s).gn(0),b.a.U(0,s).gn(0))},
$S:34}
A.bA.prototype={
O(){return"Facing."+this.b}}
A.ao.prototype={}
A.c3.prototype={
f6(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aw(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.e(A.aW(a,"roomId","not an endpoint of "+s.a))},
ap(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.e(A.aW(a,"roomId","not an endpoint of "+s.a))}}
A.au.prototype={}
A.c5.prototype={}
A.ai.prototype={}
A.es.prototype={
A(){var s,r,q,p,o,n=this,m=t.N,l=t.am,k=A.r(m,l)
for(s=n.a,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0),r=t.y;s.l();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.R(["open",o.a,"locked",o.b],m,r))}l=A.r(m,l)
for(s=n.c,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0);s.l();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.R(["lit",o.a,"examined",o.b],m,r))}return A.R(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d],m,t.z)},
hU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a7(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q)d.m(0,s[q].a)
r=A.a7(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.x)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.x)(n),++l)r.m(0,n[l].a)
e=A.a7(e)
for(q=0;q<p.length;p.length===n||(0,A.x)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.x)(o),++l)e.m(0,o[l].a)
o=f.a
n=!0
if(A.kv(new A.Z(o,A.m(o).i("Z<1>")),d)){d=f.b
if(A.kv(new A.Z(d,A.m(d).i("Z<1>")),r)){d=f.c
e=!A.kv(new A.Z(d,A.m(d).i("Z<1>")),e)}else e=n}else e=n
if(e)throw A.e(B.aK)
e=f.d
if(e<0||e>2)A.B(B.aB)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.x)(s),++q){k=s[q]
j=o.h(0,k.a)
k.at=j.a
k.ax=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.x)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.x)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.x)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.dl.prototype={
A(){return A.R(["open",this.a,"locked",this.b],t.N,t.y)}}
A.dc.prototype={
A(){return A.R(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.h9.prototype={
$1(a){return this.a.B(0,A.y(a))},
$S:2}
A.bB.prototype={
O(){return"Hand."+this.b}}
A.iD.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.l:s},
cO(a,b){var s,r,q,p,o=A.j([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.eE.prototype={
A(){var s,r,q,p=t.N,o=A.r(p,t.v)
for(s=this.a,r=0;r<5;++r){q=B.i[r]
o.k(0,q,s.h(0,q))}return A.R(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.av(B.i,t.gk.a(new A.hR(this)),t.e1).bk(0," \xb7 ")}}
A.hQ.prototype={
$2(a,b){return new A.A(A.y(a),A.y(b),t.q)},
$S:36}
A.hR.prototype={
$1(a){return this.a.a.h(0,A.y(a))},
$S:15}
A.aD.prototype={
A(){var s,r,q,p=this,o=A.j([],t.c7)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q)o.push(s[q].A())
s=p.r
s=s==null?null:s.A()
return A.R(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.hE.prototype={
aG(a){t.G.a(a)
return a.a===5&&B.a.ae(B.i,new A.hL(this,a))},
cV(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.aG(b))return null
s=this.e++
r=new A.aD(s,a,A.j([A.hP(b,c,d)],t.aW),e,!1,null,null)
this.b.k(0,s,r)
return r},
bV(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.aG(b))return!1
B.a.m(s.c,A.hP(b,c,B.w))
return!0},
hQ(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.aG(b))return!1
s.r=A.hP(b,0,B.Y)
return!0},
fp(a){var s,r,q,p
t.I.a(a)
s=this.d
B.a.I(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.N(p)&&!B.a.B(s,p))B.a.m(s,p)}},
j4(a){var s
if(!this.b.N(a))return!1
s=this.d
if(!B.a.B(s,a))B.a.m(s,a)
return!0},
A(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.at(n,A.m(n).c)
B.a.a1(n)
s=A.j([],t.c7)
for(r=q.b,r=new A.a_(r,r.r,r.e,A.m(r).i("a_<2>"));r.l();)s.push(r.d.A())
return A.R(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.hL.prototype={
$1(a){var s
A.y(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.B(this.a.a.h(0,a),s)},
$S:2}
A.aw.prototype={
O(){return"SleepQuality."+this.b}}
A.an.prototype={
O(){return"SleepLocation."+this.b}}
A.cx.prototype={}
A.h2.prototype={
bx(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
fB(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
A(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.j([],t.ez)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
i.push(A.R(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.R(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.h3.prototype={
$1(a){return t.p.a(a).b===this.a},
$S:37}
A.h4.prototype={
$1(a){return t.eq.a(a).b===this.a},
$S:38}
A.ew.prototype={
O(){return"InteractionType."+this.b}}
A.ca.prototype={
O(){return"WorldComparisonKind."+this.b}}
A.iE.prototype={}
A.c9.prototype={}
A.ej.prototype={}
A.hx.prototype={}
A.hz.prototype={
cK(){var s,r,q,p=t.r,o=A.j([],p)
for(s=this.a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>")),r=this.b;s.l();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.j(o.slice(0),p)
B.a.X(p,new A.hA())
return p},
i2(a,b){var s,r,q,p,o,n=b.b
if(n.gC(n))return B.bX
s=t.N
r=A.a7(s)
q=A.a7(s)
for(s=n.gL(),s=s.gt(s),p=a.c;s.l();){o=s.gq()
if(B.a.gG(p).a.h(0,o)==n.h(0,o))r.m(0,o)
else q.m(0,o)}if(q.a!==0)return new A.c9(B.C,r)
s=r.a
o=B.a.gG(p).a
if(s===o.gn(o)){n=n.gn(n)
p=B.a.gG(p).a
p=n===p.gn(p)
n=p}else n=!1
if(n)return new A.c9(B.ag,r)
return new A.c9(B.L,r)},
hs(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.ej(e,!1,B.bW,null)
s=p.d===c
r=this.i2(p,d)
q.j4(e)
return new A.ej(e,s,r,r.a===B.C&&s?'The world says "'+d.c+'". The entry says "'+B.a.gG(p.c).p(0)+'".':null)},
i6(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.C)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.hx(B.a.gG(s.c).p(0)+" but "+A.w(a.f))}}
A.hA.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.J(s.a(b).a,a.a)},
$S:7}
A.ba.prototype={
O(){return"RuptureStep."+this.b}}
A.eW.prototype={
fE(a){var s=this
if(s.a!==B.m)return
s.a=B.a9
s.b=0
s.e=!1
s.hu(a)},
hu(a){var s,r,q,p,o,n,m,l,k,j=this.c
B.a.I(j)
for(s=a.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
for(o=p.r,n=o.length,m=p.a+":",l=0;l<o.length;o.length===n||(0,A.x)(o),++l){k=o[l]
if(k.d&&!k.e)B.a.m(j,m+B.a.bf(o,k))}}},
hS(a,b){var s,r,q=this,p=q.a
if(p===B.m)return
s=q.b+=a
r=0
switch(p.a){case 1:if(s>=1){q.a=B.aa
q.b=0
s=r
p=B.aa}break
case 2:if(s>=1.5){q.a=B.F
q.b=0
s=r
p=B.F}break
case 3:if(s>=1.5){q.a=B.ab
q.b=0
s=r
p=B.ab}break
case 4:if(s>=2){q.a=B.G
q.b=0
s=r
p=B.G}break
case 5:if(s>=2){q.a=B.x
q.b=0
s=r
p=B.x}break
case 6:if(s>=4){q.a=B.m
q.b=0
q.e=!0
s=r
p=B.m}break
case 0:break}if(p===B.x)q.h8(s,b)},
h8(a,b){var s,r,q,p,o=this.d
o.I(0)
s=this.c
r=s.length
if(r===0)return
q=B.c.a2(B.d.W(a/(4/r)),0,r)
for(p=0;p<q;++p){if(!(p<s.length))return A.c(s,p)
o.m(0,s[p])}}}
A.er.prototype={
gbz(){var s=this.b
if(s<6||s>18)return 0
return B.d.a2((s-6)/12,0,1)}}
A.ii.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.cz(g.a),e=t.N,d=A.r(e,t.a)
for(s=g.b,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0);s.l();){r=s.d
q=r.a
d.k(0,q,g.hL(q,r.b))}s=A.cz(g.r)
q=A.cz(g.w)
p=A.cz(g.x)
o=A.r(e,t.dW)
for(n=g.as,n=new A.L(n,A.m(n).i("L<1,2>")).gt(0),m=t.gE;n.l();){l=n.d
k=l.a
j=A.j([],m)
for(i=J.K(l.b);i.l();){h=i.gq()
j.push(A.R(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.R(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
hL(a,b){var s,r=A.cz(t.bw.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.cz(q.aA(0,new A.ij(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gE(s))r.k(0,"_ambient",A.cz(s.aA(0,new A.ik(),t.S,t.z)))
return r}}
A.ij.prototype={
$2(a,b){return new A.A(A.a(a),t.f2.a(b).A(),t.b3)},
$S:40}
A.ik.prototype={
$2(a,b){return new A.A(A.a(a),t.d8.a(b).A(),t.b3)},
$S:62}
A.c8.prototype={
A(){return A.R(["hour",this.a,"order",this.b],t.N,t.S)}}
A.c7.prototype={
A(){return A.R(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.dw.prototype={
A(){var s=t.N
return A.R(["field",this.a,"value",this.b],s,s)}}
A.im.prototype={
aM(){var s=0,r=A.bj(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$aM=A.bk(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ad(A.b6(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$aM)
case 6:n=b
s=7
return A.ad(A.b6(A.b(n.text()),t.N),$async$aM)
case 7:m=b
l=A.q3(m)
j=J.aq(l,"broadcasts")
j.toString
i=t.a
o.a=i.a(j)
j=J.aq(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aq(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aq(l,"documents")
j.toString
i.a(j)
j=J.aq(l,"street")
j.toString
i.a(j)
j=J.aq(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aq(l,"nights")
j.toString
i.a(j)
j=J.aq(l,"endings")
j.toString
o.w=i.a(j)
j=J.aq(l,"records")
j.toString
i.a(j)
j=J.aq(l,"cues")
j.toString
i.a(j)
j=J.aq(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.a5(g)
j=A.w(k)
throw A.e("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bh(null,r)
case 1:return A.bg(p.at(-1),r)}})
return A.bi($async$aM,r)},
fj(a){var s,r,q,p=this.a
p===$&&A.f()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gP().cI(0,new A.io())
r=p.$ti
q=t.N
q=A.r(q,q)
q.hP(new A.bp(p,r.i("A<k,k>(1)").a(new A.ip()),r.i("bp<1,A<k,k>>")))
return q}return null},
fm(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.f()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.W(p)||o!==B.d.W(o))return n
return new A.c8(B.d.W(p),B.d.W(o))},
fl(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.f()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.W(p)||typeof o!="string"||typeof n!="string")return m
return new A.c7(B.d.W(p),o,n)},
j6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.r(a1,t.bw),a3=A.r(a1,t.gy),a4=A.r(a1,t.c9),a5=t.h,a6=A.r(a1,t.et),a7=b.b
a7===$&&A.f()
a7=new A.L(a7,A.m(a7).i("L<1,2>")).gt(0)
s=t.d8
r=t.f2
q=t.f
while(a7.l()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.r(a,a0)
for(o=o.gP(),o=o.gt(o);o.l();){m=o.gq()
l=m.a
k=typeof l=="string"?A.i0(l,null):null
if(k==null||!q.b(m.b))continue
j=A.r(a1,a1)
for(m=q.a(m.b).gP(),m=m.gt(m);m.l();){l=m.gq()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.y(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.r(a,r)
for(m=n.$ti.i("bD<1>"),l=new A.bD(n,n.r,n.e,m);l.l();){i=l.d
g=b.fm(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.r(a,s)
for(m=new A.bD(n,n.r,n.e,m);m.l();){l=m.d
e=b.fl(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.f()
a7=new A.L(a7,A.m(a7).i("L<1,2>")).gt(0)
s=t.eW
r=t.j
while(a7.l()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.j([],s)
for(m=J.K(d);m.l();){c=m.gq()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.dw(A.y(c.h(0,"field")),A.y(c.h(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.ii(A.r(a,a0),a2,a3,a4,A.r(a1,a5),A.r(a1,a5),A.r(a,a5),A.r(a,a5),A.r(a,a5),A.r(a1,a5),A.r(a1,a5),A.r(a1,a5),a6)}}
A.io.prototype={
$1(a){t.bz.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:42}
A.ip.prototype={
$1(a){t.bz.a(a)
return new A.A(A.y(a.a),A.y(a.b),t.q)},
$S:43}
A.fS.prototype={
cM(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.b(v.G.window).setTimeout(A.a1(new A.fT(this)),7000))}}
A.fT.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:44}
A.fY.prototype={
cG(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.h5.prototype={
fK(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.E(a,k,"door-speaker",j)
l.b!==$&&A.o()
l.b=i
s=A.E(a,k,"door-line",j)
l.c!==$&&A.o()
l.c=s
r=l.a
A.b(r.appendChild(i))
A.b(r.appendChild(s))
s=A.E(a,k,"door-cite-list",j)
l.e!==$&&A.o()
l.e=s
i=A.E(a,k,"door-cite-result",j)
l.f!==$&&A.o()
l.f=i
A.b(r.appendChild(s))
A.b(r.appendChild(i))
for(i=A.fC,s=l.r,q=0;q<5;++q){p=B.b3[q]
o=A.b(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.h6(l,p)
if(typeof n=="function")A.B(A.ae("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.cW()]=n
o.addEventListener("click",m)
A.b(r.appendChild(o))
B.a.m(s,o)}i=A.E(a,"button","door-continue","continue")
l.d!==$&&A.o()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.a1(new A.h7(l)))
A.b(r.appendChild(i))
A.b(A.d(a.body).appendChild(r))},
cN(a,b){var s,r,q,p=this
p.z=!0
s=p.b
s===$&&A.f()
s.textContent=a
s=p.c
s===$&&A.f()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q)A.b(s[q].style).display=""
s=p.d
s===$&&A.f()
A.b(s.style).display="none"
s=p.e
s===$&&A.f()
s.textContent=""
s=p.f
s===$&&A.f()
s.textContent=""
p.a.className="door visible"},
bu(a){var s,r,q=this,p=q.c
p===$&&A.f()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.x)(p),++r)A.b(p[r].style).display="none"
p=q.d
p===$&&A.f()
A.b(p.style).display=""
p=q.f
p===$&&A.f()
p.textContent=""},
ft(a,b){var s,r,q,p,o,n,m,l
t.dC.a(b)
s=this.e
s===$&&A.f()
s.textContent=""
for(r=b.length,q=A.fC,p=0;p<b.length;b.length===r||(0,A.x)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.h8(o,this)
if(typeof o=="function")A.B(A.ae("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.cW()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
be(){var s,r=this
r.z=!1
s=r.e
s===$&&A.f()
s.textContent=""
s=r.f
s===$&&A.f()
s.textContent=""
r.a.className="door"},
siI(a){this.w=t.b2.a(a)},
siK(a){this.x=t.Y.a(a)},
siJ(a){this.y=t.bI.a(a)}}
A.h6.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.h7.prototype={
$1(a){var s
A.b(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.h8.prototype={
$1(a){var s
A.b(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.hb.prototype={
fL(a){var s,r,q,p=this,o=p.a,n=A.E(o,"h1","journal-title",null)
p.f!==$&&A.o()
p.f=n
s=A.E(o,"div","ending-copy",null)
p.r!==$&&A.o()
p.r=s
r=p.b
A.b(r.appendChild(n))
A.b(r.appendChild(s))
q=A.E(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.a1(new A.hc(p)))
A.b(r.appendChild(q))},
fu(a,b){var s,r,q,p,o,n,m=this
t.h.a(b)
s=m.f
s===$&&A.f()
s.textContent=a.a.b
s=m.r
s===$&&A.f()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.x)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bo()},
siL(a){this.w=t.Y.a(a)}}
A.hc.prototype={
$1(a){var s
A.b(a)
s=this.a
s.ad()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.hn.prototype={
fM(a){var s,r="help-copy",q=this.b,p=this.a
A.b(q.appendChild(A.E(p,"h1","journal-title","house notes")))
A.b(q.appendChild(A.E(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.b(q.appendChild(A.E(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.E(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.a1(new A.ho(this)))
A.b(q.appendChild(s))}}
A.ho.prototype={
$1(a){A.b(a)
return this.a.ad()},
$S:1}
A.hF.prototype={
fX(){var s,r=this,q=r.a,p=A.E(q,"div","page-turn",null),o=A.E(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a1(new A.hG(r)))
s=A.E(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a1(new A.hH(r)))
q=A.E(q,"span","right-day-label",null)
r.Q!==$&&A.o()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
dz(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.d0(s.CW+a,r)
s.dh()},
d0(a,b){if(a<1)return 1
if(a>b)return b
return a},
hv(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.f()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.f()
s.textContent=""
for(s=j.w.cK(),r=s.length,q=A.fC,p=j.a,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
m=B.a.gG(n.c).p(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.hI(j,n,l)
if(typeof m=="function")A.B(A.ae("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.cW()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
dh(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.f()
s=t.r
r=A.j([],s)
for(q=j.f,p=q.b,o=A.m(p).i("a_<2>"),n=new A.a_(p,p.r,p.e,o),m=j.r;n.l();){l=n.d
if(l.b===m.a)r.push(l)}B.a.X(r,new A.hJ())
j.dg(i,r)
i=j.Q
i===$&&A.f()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.f()
s=A.j([],s)
for(r=new A.a_(p,p.r,p.e,o);r.l();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.X(s,new A.hK())
j.dg(i,s)
k=B.d.a2(q.f/4,0,1)
i=j.as
i===$&&A.f()
A.b(i.style).setProperty("width",B.d.cF(k*100,1)+"%")},
dg(a,b){var s,r
t.cR.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.x)(b),++r)A.b(a.appendChild(this.h7(b[r])))},
h7(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.E(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.b(k.createElement("div"))
n.className=q
n.textContent=o
A.b(n.style).setProperty("--shake",B.d.p(p.b))
A.b(j.appendChild(n))}m=a.r
if(m!=null){l=this.hg(m,!1)
l.className=A.y(l.className)+" margin"
A.b(j.appendChild(l))}return j},
hg(a,b){var s=b?"hand-line struck":"hand-line",r=A.E(this.a,"div",s,a.p(0))
A.b(r.style).setProperty("--shake",B.d.p(a.b))
return r}}
A.hG.prototype={
$1(a){A.b(a)
return this.a.dz(-1)},
$S:1}
A.hH.prototype={
$1(a){A.b(a)
return this.a.dz(1)},
$S:1}
A.hI.prototype={
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
A.hJ.prototype={
$2(a,b){var s=t.L
return B.c.J(s.a(a).a,s.a(b).a)},
$S:7}
A.hK.prototype={
$2(a,b){var s=t.L
return B.c.J(s.a(a).a,s.a(b).a)},
$S:7}
A.dk.prototype={
aS(a){var s=this.b
s.className="panel"
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.d(this.a.body).appendChild(s))},
bo(){var s,r,q,p,o=this,n=o.b
if(B.b.B(A.y(n.className),"open"))return
s=$.i_
if(s!=null&&s!==o)s.ad()
$.i_=o
r=o.a
o.d=A.d(r.activeElement)
A.l4(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.a1(o.ghp())
o.e=q
r.addEventListener("keydown",q)
p=A.m5(n)
if(p.length!==0)B.a.gaz(p).focus()},
ad(){var s,r,q=this,p=q.b
if(!B.b.B(A.y(p.className),"open"))return
p.className="panel"
if($.i_===q)$.i_=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
hq(a){A.b(a)
if(A.aA(a.defaultPrevented))return
if(A.y(a.code)==="Escape"){this.ad()
return}if(A.y(a.code)==="Tab")this.hH(a)},
hH(a){var s,r=A.m5(this.b)
if(r.length===0)return
s=A.d(this.a.activeElement)
if(A.aA(a.shiftKey)){if(s===B.a.gaz(r)||!B.a.B(r,s)){a.preventDefault()
B.a.gG(r).focus()}}else if(s===B.a.gG(r)||!B.a.B(r,s)){a.preventDefault()
B.a.gaz(r).focus()}},
sbn(a){this.c=t.Y.a(a)}}
A.i1.prototype={
fs(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.ig.prototype={
fQ(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.b(i.appendChild(A.E(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.E(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.E(a,"div","entry-picker",null)
for(r=A.fC,q=0;q<2;++q){p=B.a0[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.a3[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.ih(this,p,m)
if(typeof k=="function")A.B(A.ae("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.cW()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
siM(a){this.f=t.bV.a(a)}}
A.ih.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ad()},
$S:3}
A.aU.prototype={}
A.fP.prototype={
iX(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.V(s)
q=new A.av(s,r.i("k(1)").a(new A.fR()),r.i("av<1,k>")).j2(0)
r=this.b
r.I(0)
s=J.n1(a,t.N)
p=s.$ti
r.Y(0,new A.H(s,p.i("p(l.E)").a(q.gdG(q)),p.i("H<l.E>")))},
ic(a,b){var s,r,q,p,o,n=A.j([],t.cy)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.B(0,o.a))n.push(o)}return n}}
A.fR.prototype={
$1(a){return t.c.a(a).a},
$S:46}
A.fQ.prototype={
$2(a,b){var s,r=t.c
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.J(r,s):B.c.J(a.c,b.c)},
$S:47}
A.f9.prototype={
iA(a){return this.c.B(0,t.g.a(a))},
iV(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.ae(0,j.gi4())||!a.a.ae(0,new A.iB(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.B(0,r)){o=s.c
if(o!==B.B){n=s.d
if(n<J.aN(p)){o=o===B.o
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.p}else j=!1}}}if(j)return!1
m=new A.f8(r,s.b,A.bE(p,t.w),B.o)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.I(0)
j.Y(0,a.a)
j=l.c
j.I(0)
j.Y(0,k)
l.e=m
return!0},
dD(a){var s=this.a,r=A.m(s).i("Z<1>"),q=r.i("H<l.E>")
s=A.at(new A.H(new A.Z(s,r),r.i("p(l.E)").a(new A.iy(a)),q),q.i("l.E"))
B.a.X(s,new A.iz())
return s},
hW(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.bS
s=m.a.h(0,a)
if(s==null)return B.bT
r=B.c.H(a.b-1,7)
q=a.a
p=m.b.B(0,q)||r+1>=3||m.f?B.I:B.t
o=p===B.t&&m.r.B(0,q)&&s.N(B.J)?B.J:p
if(s.N(o))n=o
else n=s.N(B.t)?B.t:B.I
r=s.h(0,n)
r.toString
r=new A.f8(a,n,A.bE(r,t.w),B.o)
m.e=r
return new A.f7(r)},
i_(a){var s,r,q,p,o,n=this.e
if(n==null)return B.af
if(n.d!==B.o)return B.bQ
n.e=a
s=a===B.p
n.d=s?B.B:B.z
r=this.d
q=s?B.ad:B.bB
p=n.a
o=p.a
p=p.b
B.a.m(r,new A.bu(q,o,p,a,null))
if(a===B.v)B.a.m(r,new A.bu(B.bE,o,p,a,null))
if(s)this.di(n)
return new A.f6(n)},
hT(){var s,r=this.e
if(r==null)return B.af
s=r.d
if(s!==B.z&&s!==B.A)return B.bR
r.d=B.A
if(++r.f>=r.c.length){r.d=B.B
this.di(r)
return new A.dv(r,!0)}return new A.dv(r,!1)},
i0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.z&&s!==B.A}else s=!0
if(s)return i
r=h.gb5()
if(r==null)return i
s=t.N
q=A.r(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.c(o,p)
p=o[p].c}else p=B.a1
p=J.K(p)
while(p.l()){o=p.gq()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.jV(q,s,s)
m=c.hs(!0,!0,o,new A.iE(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.C){B.a.m(this.d,new A.bu(B.bD,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gG(j.c)
s=A.la(s,s)
s.Y(0,o.a)
s.Y(0,q)
p.hQ(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ag)if(k===B.L){s=n.b
s=s.gE(s)}else s=!1
else s=!0
if(s)B.a.m(this.d,new A.bu(B.bC,o,p.b,i,l))}}return m},
di(a){var s=a.a
this.b.m(0,s.a)
this.c.m(0,s)
this.e=null},
sfD(a){this.r=t.cq.a(a)}}
A.iB.prototype={
$1(a){var s=this.a.a
return new A.Z(s,A.m(s).i("Z<1>")).ak(0,new A.iA(A.y(a)))},
$S:2}
A.iA.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:8}
A.iy.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:8}
A.iz.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.J(a.c,b.c)
return s!==0?s:B.c.J(a.d,b.d)},
$S:49}
A.ix.prototype={
$2(a,b){var s=t.w
return B.c.J(s.a(a).a,s.a(b).a)},
$S:50}
A.fa.prototype={}
A.fp.prototype={}
A.jv.prototype={
$1(a){return B.b.T(A.y(a),"off.")},
$S:2}
A.ar.prototype={
O(){return"DoorChoice."+this.b}}
A.aF.prototype={
O(){return"VisitPhase."+this.b}}
A.aG.prototype={
O(){return"VisitTier."+this.b}}
A.bI.prototype={
O(){return"VisitorFactKind."+this.b}}
A.bu.prototype={
A(){var s,r=this,q=A.r(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.bd.prototype={
O(){return"VisitorIssueCode."+this.b}}
A.aH.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aH&&b.a===this.a&&b.b===this.b},
gD(a){return A.cs(this.a,this.b,B.f,B.f)}}
A.aQ.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aQ&&b.a===this.a&&b.b===this.b},
gD(a){return A.cs(this.a,this.b,B.f,B.f)}}
A.ax.prototype={
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.ax&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gD(a){var s=this
return A.cs(s.a,s.b,s.c,s.d)},
A(){var s=this
return A.R(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.fb.prototype={
A(){var s,r,q,p=this.a
p=A.at(p,A.m(p).c)
B.a.a1(p)
s=this.b
r=A.m(s)
q=r.i("bT<1,D<k,@>>")
s=A.at(new A.bT(s,r.i("D<k,@>(1)").a(new A.iw()),q),q.i("l.E"))
r=this.c
return A.R(["contacted",p,"resolved",s,"active",r==null?null:r.A()],t.N,t.z)}}
A.iw.prototype={
$1(a){return t.g.a(a).A()},
$S:51}
A.e9.prototype={
A(){var s=this,r=s.a.A(),q=s.e
q=q==null?null:q.b
return A.R(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.fM.prototype={
$1(a){return t.b.a(a).b===this.a},
$S:52}
A.fN.prototype={
$1(a){return t.gY.a(a).b===this.a},
$S:53}
A.fO.prototype={
$1(a){return t.V.a(a).b===this.a},
$S:54}
A.f8.prototype={
gb5(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
s=r[s].b}else s=null
return s}}
A.iC.prototype={}
A.ay.prototype={}
A.f7.prototype={}
A.f6.prototype={}
A.dv.prototype={}
A.jD.prototype={
$1(a){var s
try{A.l_(a,this.a)
return!0}catch(s){if(A.a5(s) instanceof A.J)return!1
else throw s}},
$S:55}
A.jE.prototype={
$0(){$.az=null
$.aI.j().af($.a4.j())},
$S:0}
A.jF.prototype={
$2(a,b){var s,r,q,p,o
if($.N.j().gah().a===21){A.mi(!1)
return}s=$.a0.j().r.b
$.N.j().fA(a,b,$.aJ)
r=$.a0.j().r.b
q=s
for(;;){p=q
o=r
if(typeof p!=="number")return p.bt()
if(typeof o!=="number")return A.fG(o)
if(!(p<o))break
p=$.km
if(p!=null){if($.a0.b===$.a0)A.B(A.as(""))
p.iR(B.a.h(B.n,q).b)}p=q
if(typeof p!=="number")return p.Z()
q=p+1}A.kw("saved after sleep")},
$S:56}
A.jH.prototype={
$0(){$.az=null
$.aI.j().af($.a4.j())},
$S:0}
A.jI.prototype={
$0(){$.az=null
$.aI.j().af($.a4.j())},
$S:0}
A.jJ.prototype={
$0(){$.az=null},
$S:0}
A.jK.prototype={
$0(){$.az=null},
$S:0}
A.jL.prototype={
$1(a){A.b(a)
return A.mh()},
$S:1}
A.jM.prototype={
$1(a){var s,r
A.b(a)
if(A.y(a.code)==="KeyP"&&!A.aA(a.repeat))$.ks=!$.ks
if(A.y(a.code)==="KeyR"&&!A.aA(a.repeat)&&$.mo){s=$.cO
if(s!=null)s.aB()}if(A.y(a.code)==="KeyJ"&&!A.aA(a.repeat)&&!$.ab.j().z){s=$.az
if(s==null){$.az=$.cL.j()
s=$.cL.j()
s.fH()
r=s.r.a-1
if(r<1)r=1
s.CW=s.d0(s.CW,r)
s.hv()
s.dh()}else if(s===$.cL.j())$.cL.j().ad()}if(A.y(a.code)==="KeyL"&&!A.aA(a.repeat)&&!$.ab.j().z){s=$.az
if(s==null){$.az=$.fA.j()
$.fA.j().bo()}else if(s===$.fA.j())$.fA.j().ad()}if(A.y(a.code)==="KeyH"&&!A.aA(a.repeat)&&!$.ab.j().z){s=$.az
if(s==null){$.az=$.fy.j()
$.fy.j().bo()}else if(s===$.fy.j())$.fy.j().ad()}if(A.y(a.code)==="KeyK"&&!A.aA(a.repeat))A.kw("saved")},
$S:3}
A.jN.prototype={
$1(a){A.b(a)
return A.lX()},
$S:1}
A.jO.prototype={
$1(a){A.b(a)
return A.lX()},
$S:1}
A.jG.prototype={
$1(a){A.b(a)
return $.aI.j().af($.a4.j())},
$S:1}
A.ji.prototype={
$1(a){var s=A.y(A.b(a).message)
A.jl(s,null)},
$S:3}
A.jj.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.jl("unhandled rejection: "+A.w(s==null?A.y(a.type):s),null)},
$S:3}
A.jo.prototype={
$1(a){this.a.className=""},
$S:57}
A.jm.prototype={
$1(a){return t.L.a(a).e},
$S:16};(function aliases(){var s=J.bC.prototype
s.fG=s.p
s=A.l.prototype
s.fF=s.cI
s=A.dk.prototype
s.fH=s.bo})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1u,q=hunkHelpers._static_1,p=hunkHelpers._static_0,o=hunkHelpers._instance_1i
s(J,"pm","nI",17)
r(A.b8.prototype,"gi4","N",14)
q(A,"pX","ol",4)
q(A,"pY","om",4)
q(A,"pZ","on",4)
p(A,"mq","pK",0)
s(A,"q_","nM",17)
o(A.be.prototype,"gdG","B",14)
q(A,"q1","p8",5)
var n
r(n=A.ev.prototype,"ghh","hi",1)
r(n,"ghj","hk",1)
r(n,"ghn","ho",1)
r(n,"ghl","hm",1)
q(A,"qu","m3",5)
r(A.dk.prototype,"ghp","hq",1)
r(A.f9.prototype,"giz","iA",8)
q(A,"mv","pB",60)
q(A,"qn","p5",61)
p(A,"qp","p7",0)
q(A,"qo","p6",41)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.jY,J.ex,A.dn,J.bP,A.l,A.cZ,A.bz,A.I,A.z,A.ib,A.c_,A.c1,A.aa,A.dx,A.Q,A.bc,A.b1,A.cq,A.d_,A.ce,A.bq,A.iq,A.hZ,A.d4,A.dP,A.F,A.hS,A.bD,A.a_,A.db,A.iL,A.j8,A.b_,A.fj,A.j6,A.j4,A.fd,A.dQ,A.af,A.ff,A.cb,A.U,A.fe,A.fu,A.e_,A.dE,A.fn,A.cf,A.dH,A.dW,A.fw,A.bR,A.ek,A.j0,A.j9,A.bS,A.fh,A.eP,A.dp,A.iM,A.J,A.A,A.P,A.fv,A.aj,A.dY,A.is,A.fs,A.hY,A.fk,A.cC,A.em,A.ec,A.h_,A.hf,A.eZ,A.hl,A.et,A.ev,A.eG,A.c2,A.hX,A.dq,A.i2,A.i7,A.iF,A.dC,A.ft,A.fq,A.fo,A.ic,A.i,A.fZ,A.ha,A.cl,A.eR,A.cv,A.ia,A.c4,A.eq,A.hi,A.ep,A.ee,A.eH,A.dz,A.fc,A.d5,A.hq,A.i8,A.bK,A.cn,A.hp,A.he,A.id,A.b9,A.hr,A.ao,A.c3,A.au,A.c5,A.ai,A.es,A.dl,A.dc,A.iD,A.eE,A.aD,A.hE,A.cx,A.h2,A.iE,A.c9,A.ej,A.hx,A.hz,A.eW,A.er,A.ii,A.c8,A.c7,A.dw,A.im,A.fS,A.fY,A.h5,A.dk,A.i1,A.aU,A.fP,A.f9,A.iC,A.bu,A.aH,A.aQ,A.ax,A.fb,A.e9,A.f8])
q(J.ex,[J.ez,J.d8,J.d9,J.co,J.cp,J.bX,J.bY])
q(J.d9,[J.bC,J.q,A.bF,A.dg])
q(J.bC,[J.eQ,J.c6,J.bn])
r(J.ey,A.dn)
r(J.hD,J.q)
q(J.bX,[J.d7,J.eA])
q(A.l,[A.bJ,A.t,A.bp,A.H,A.b0,A.cd,A.cH])
q(A.bJ,[A.bQ,A.e0])
r(A.dB,A.bQ)
r(A.dA,A.e0)
q(A.bz,[A.eg,A.ef,A.f_,A.jy,A.jA,A.iH,A.iG,A.je,A.hg,A.iV,A.iX,A.hU,A.iZ,A.jR,A.jS,A.js,A.fW,A.hm,A.i6,A.hd,A.hj,A.hk,A.h0,A.i9,A.hv,A.ie,A.h9,A.hR,A.hL,A.h3,A.h4,A.io,A.ip,A.fT,A.h6,A.h7,A.h8,A.hc,A.ho,A.hG,A.hH,A.hI,A.ih,A.fR,A.iB,A.iA,A.iy,A.jv,A.iw,A.fM,A.fN,A.fO,A.jD,A.jL,A.jM,A.jN,A.jO,A.jG,A.ji,A.jj,A.jo,A.jm])
q(A.eg,[A.iK,A.h1,A.hM,A.jz,A.jf,A.jr,A.hh,A.iW,A.hT,A.hV,A.j1,A.iu,A.it,A.hu,A.hw,A.hs,A.hQ,A.hA,A.ij,A.ik,A.hJ,A.hK,A.fQ,A.iz,A.ix,A.jF])
r(A.aX,A.dA)
q(A.I,[A.bZ,A.bs,A.eB,A.f1,A.eV,A.fi,A.da,A.ea,A.aV,A.du,A.f0,A.cy,A.ei])
r(A.cA,A.z)
r(A.eh,A.cA)
q(A.t,[A.ag,A.Z,A.aZ,A.L,A.cc,A.dG])
q(A.ag,[A.ds,A.av,A.fm])
r(A.bT,A.bp)
q(A.b1,[A.cD,A.cE,A.cF])
r(A.dM,A.cD)
r(A.cG,A.cE)
r(A.dN,A.cF)
r(A.cI,A.cq)
r(A.bH,A.cI)
r(A.d0,A.bH)
r(A.b7,A.d_)
q(A.bq,[A.d1,A.dO,A.dX])
r(A.d2,A.d1)
r(A.dj,A.bs)
q(A.f_,[A.eY,A.ck])
q(A.F,[A.b8,A.dD,A.fl])
r(A.cr,A.bF)
q(A.dg,[A.eI,A.a8])
q(A.a8,[A.dI,A.dK])
r(A.dJ,A.dI)
r(A.de,A.dJ)
r(A.dL,A.dK)
r(A.df,A.dL)
q(A.de,[A.dd,A.eJ])
q(A.df,[A.eK,A.eL,A.eM,A.eN,A.eO,A.dh,A.di])
r(A.dR,A.fi)
q(A.ef,[A.iI,A.iJ,A.j5,A.iN,A.iR,A.iQ,A.iP,A.iO,A.iU,A.iT,A.iS,A.j3,A.jn,A.jb,A.ja,A.i5,A.ht,A.jE,A.jH,A.jI,A.jJ,A.jK])
r(A.dy,A.ff)
r(A.fr,A.e_)
r(A.dF,A.dD)
r(A.be,A.dO)
r(A.dt,A.dX)
q(A.bR,[A.ed,A.en,A.eC])
q(A.ek,[A.fX,A.hO,A.hN,A.iv])
r(A.eD,A.da)
r(A.j_,A.j0)
r(A.f4,A.en)
q(A.aV,[A.cu,A.eu])
r(A.fg,A.dY)
r(A.i4,A.iF)
r(A.i3,A.i4)
q(A.fh,[A.aO,A.bW,A.bU,A.bA,A.bB,A.aw,A.an,A.ew,A.ca,A.ba,A.ar,A.aF,A.aG,A.bI,A.bd])
q(A.dk,[A.hb,A.hn,A.hF,A.ig])
q(A.iC,[A.fa,A.fp,A.ay,A.f7,A.f6,A.dv])
s(A.cA,A.bc)
s(A.e0,A.z)
s(A.dI,A.z)
s(A.dJ,A.Q)
s(A.dK,A.z)
s(A.dL,A.Q)
s(A.cI,A.dW)
s(A.dX,A.fw)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",n:"double",ak:"num",k:"String",p:"bool",P:"Null",u:"List",v:"Object",D:"Map",C:"JSObject"},mangledNames:{},types:["~()","~(C)","p(k)","P(C)","~(~())","@(@)","~(@)","h(aD,aD)","p(ax)","@(k)","P(@)","P()","~(v?,v?)","@()","p(v?)","k?(k)","p(aD)","h(@,@)","~(h,@)","aP<P>(A<k,k>)","p(C)","P(~())","C()","~(v,bb)","p(aO)","p(ai)","P(v,bb)","p(c5)","p(bK)","h(+(n,n,n,n),+(n,n,n,n))","u<+(n,n,n,n)>()","p(c3)","h(h,ai)","p(ao)","h(b9,b9)","~(@,@)","A<k,k>(k,@)","p(aw)","p(an)","@(@,k)","A<h,@>(h,c8)","~(h)","p(A<@,@>)","A<k,k>(A<@,@>)","k(v?)","P(@,bb)","k(aU)","h(aU,aU)","D<k,k>(D<k,k>,k)","h(ax,ax)","h(aQ,aQ)","D<k,@>(ax)","p(aG)","p(aF)","p(ar)","p(cv)","~(aw,an)","P(v?)","0&(k,h?)","v?(v?)","~(ak)","~(k)","A<h,@>(h,c7)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.dM&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.cG&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.dN&&A.qr(a,b.a)}}
A.oG(v.typeUniverse,JSON.parse('{"eQ":"bC","c6":"bC","bn":"bC","qH":"bF","q":{"u":["1"],"t":["1"],"C":[],"l":["1"]},"ez":{"p":[],"G":[]},"d8":{"P":[],"G":[]},"d9":{"C":[]},"bC":{"C":[]},"ey":{"dn":[]},"hD":{"q":["1"],"u":["1"],"t":["1"],"C":[],"l":["1"]},"bP":{"O":["1"]},"bX":{"n":[],"ak":[],"aY":["ak"]},"d7":{"n":[],"h":[],"ak":[],"aY":["ak"],"G":[]},"eA":{"n":[],"ak":[],"aY":["ak"],"G":[]},"bY":{"k":[],"aY":["k"],"ld":[],"G":[]},"bJ":{"l":["2"]},"cZ":{"O":["2"]},"bQ":{"bJ":["1","2"],"l":["2"],"l.E":"2"},"dB":{"bQ":["1","2"],"bJ":["1","2"],"t":["2"],"l":["2"],"l.E":"2"},"dA":{"z":["2"],"u":["2"],"bJ":["1","2"],"t":["2"],"l":["2"]},"aX":{"dA":["1","2"],"z":["2"],"u":["2"],"bJ":["1","2"],"t":["2"],"l":["2"],"l.E":"2","z.E":"2"},"bZ":{"I":[]},"eh":{"z":["h"],"bc":["h"],"u":["h"],"t":["h"],"l":["h"],"z.E":"h","bc.E":"h"},"t":{"l":["1"]},"ag":{"t":["1"],"l":["1"]},"ds":{"ag":["1"],"t":["1"],"l":["1"],"ag.E":"1","l.E":"1"},"c_":{"O":["1"]},"bp":{"l":["2"],"l.E":"2"},"bT":{"bp":["1","2"],"t":["2"],"l":["2"],"l.E":"2"},"c1":{"O":["2"]},"av":{"ag":["2"],"t":["2"],"l":["2"],"ag.E":"2","l.E":"2"},"H":{"l":["1"],"l.E":"1"},"aa":{"O":["1"]},"b0":{"l":["1"],"l.E":"1"},"dx":{"O":["1"]},"cA":{"z":["1"],"bc":["1"],"u":["1"],"t":["1"],"l":["1"]},"dM":{"cD":[],"b1":[]},"cG":{"cE":[],"b1":[]},"dN":{"cF":[],"b1":[]},"d0":{"bH":["1","2"],"cI":["1","2"],"cq":["1","2"],"dW":["1","2"],"D":["1","2"]},"d_":{"D":["1","2"]},"b7":{"d_":["1","2"],"D":["1","2"]},"cd":{"l":["1"],"l.E":"1"},"ce":{"O":["1"]},"d1":{"bq":["1"],"cw":["1"],"t":["1"],"l":["1"]},"d2":{"d1":["1"],"bq":["1"],"cw":["1"],"t":["1"],"l":["1"]},"dj":{"bs":[],"I":[]},"eB":{"I":[]},"f1":{"I":[]},"dP":{"bb":[]},"bz":{"bV":[]},"ef":{"bV":[]},"eg":{"bV":[]},"f_":{"bV":[]},"eY":{"bV":[]},"ck":{"bV":[]},"eV":{"I":[]},"b8":{"F":["1","2"],"l9":["1","2"],"D":["1","2"],"F.K":"1","F.V":"2"},"Z":{"t":["1"],"l":["1"],"l.E":"1"},"bD":{"O":["1"]},"aZ":{"t":["1"],"l":["1"],"l.E":"1"},"a_":{"O":["1"]},"L":{"t":["A<1,2>"],"l":["A<1,2>"],"l.E":"A<1,2>"},"db":{"O":["A<1,2>"]},"cD":{"b1":[]},"cE":{"b1":[]},"cF":{"b1":[]},"cr":{"bF":[],"C":[],"G":[]},"bF":{"C":[],"G":[]},"dg":{"C":[]},"eI":{"C":[],"G":[]},"a8":{"aE":["1"],"C":[]},"de":{"z":["n"],"a8":["n"],"u":["n"],"aE":["n"],"t":["n"],"C":[],"l":["n"],"Q":["n"]},"df":{"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"]},"dd":{"jW":[],"z":["n"],"a8":["n"],"u":["n"],"aE":["n"],"t":["n"],"C":[],"l":["n"],"Q":["n"],"G":[],"z.E":"n","Q.E":"n"},"eJ":{"z":["n"],"a8":["n"],"u":["n"],"aE":["n"],"t":["n"],"C":[],"l":["n"],"Q":["n"],"G":[],"z.E":"n","Q.E":"n"},"eK":{"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eL":{"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eM":{"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eN":{"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eO":{"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"dh":{"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"di":{"k4":[],"z":["h"],"a8":["h"],"u":["h"],"aE":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"fi":{"I":[]},"dR":{"bs":[],"I":[]},"dQ":{"O":["1"]},"cH":{"l":["1"],"l.E":"1"},"af":{"I":[]},"dy":{"ff":["1"]},"U":{"aP":["1"]},"e_":{"lx":[]},"fr":{"e_":[],"lx":[]},"dD":{"F":["1","2"],"D":["1","2"]},"dF":{"dD":["1","2"],"F":["1","2"],"D":["1","2"],"F.K":"1","F.V":"2"},"cc":{"t":["1"],"l":["1"],"l.E":"1"},"dE":{"O":["1"]},"be":{"bq":["1"],"lb":["1"],"cw":["1"],"t":["1"],"l":["1"]},"cf":{"O":["1"]},"z":{"u":["1"],"t":["1"],"l":["1"]},"F":{"D":["1","2"]},"dG":{"t":["2"],"l":["2"],"l.E":"2"},"dH":{"O":["2"]},"cq":{"D":["1","2"]},"bH":{"cI":["1","2"],"cq":["1","2"],"dW":["1","2"],"D":["1","2"]},"bq":{"cw":["1"],"t":["1"],"l":["1"]},"dO":{"bq":["1"],"cw":["1"],"t":["1"],"l":["1"]},"dt":{"bq":["1"],"fw":["1"],"cw":["1"],"t":["1"],"l":["1"]},"fl":{"F":["k","@"],"D":["k","@"],"F.K":"k","F.V":"@"},"fm":{"ag":["k"],"t":["k"],"l":["k"],"ag.E":"k","l.E":"k"},"ed":{"bR":["u<h>","k"]},"en":{"bR":["k","u<h>"]},"da":{"I":[]},"eD":{"I":[]},"eC":{"bR":["v?","k"]},"f4":{"bR":["k","u<h>"]},"bS":{"aY":["bS"]},"n":{"ak":[],"aY":["ak"]},"h":{"ak":[],"aY":["ak"]},"u":{"t":["1"],"l":["1"]},"ak":{"aY":["ak"]},"k":{"aY":["k"],"ld":[]},"fh":{"al":[]},"ea":{"I":[]},"bs":{"I":[]},"aV":{"I":[]},"cu":{"I":[]},"eu":{"I":[]},"du":{"I":[]},"f0":{"I":[]},"cy":{"I":[]},"ei":{"I":[]},"eP":{"I":[]},"dp":{"I":[]},"fv":{"bb":[]},"aj":{"o7":[]},"dY":{"f2":[]},"fs":{"f2":[]},"fg":{"f2":[]},"fk":{"k1":[]},"cC":{"k1":[]},"aO":{"al":[]},"bW":{"al":[]},"bU":{"al":[]},"bA":{"al":[]},"bB":{"al":[]},"aw":{"al":[]},"an":{"al":[]},"ew":{"al":[]},"ca":{"al":[]},"ba":{"al":[]},"ar":{"al":[]},"aF":{"al":[]},"aG":{"al":[]},"bI":{"al":[]},"bd":{"al":[]},"nE":{"u":["h"],"t":["h"],"l":["h"]},"k4":{"u":["h"],"t":["h"],"l":["h"]},"ob":{"u":["h"],"t":["h"],"l":["h"]},"nC":{"u":["h"],"t":["h"],"l":["h"]},"o9":{"u":["h"],"t":["h"],"l":["h"]},"nD":{"u":["h"],"t":["h"],"l":["h"]},"oa":{"u":["h"],"t":["h"],"l":["h"]},"jW":{"u":["n"],"t":["n"],"l":["n"]},"ny":{"u":["n"],"t":["n"],"l":["n"]}}'))
A.oF(v.typeUniverse,JSON.parse('{"cA":1,"e0":2,"a8":1,"dO":1,"dX":1,"ek":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aB
return{c:s("aU"),n:s("af"),f_:s("ec"),U:s("aY<@>"),D:s("b7<k,k>"),dy:s("bS"),V:s("ar"),d:s("t<@>"),k:s("aO"),L:s("aD"),C:s("I"),Z:s("bV"),aQ:s("aP<P>"),hh:s("bB"),gO:s("et<v>"),bM:s("l<n>"),hf:s("l<@>"),hb:s("l<h>"),cy:s("q<aU>"),r:s("q<aD>"),fG:s("q<aP<~>>"),gF:s("q<eq>"),cB:s("q<qG<v>>"),W:s("q<C>"),aW:s("q<eE>"),h1:s("q<au>"),ez:s("q<D<k,v>>"),gE:s("q<D<k,k>>"),c7:s("q<D<k,@>>"),bK:s("q<eG>"),fK:s("q<c2>"),bs:s("q<b9>"),d6:s("q<c3>"),ek:s("q<+(h,k)>"),eV:s("q<+(n,n,n,n)>"),bv:s("q<ai>"),ai:s("q<cx>"),gd:s("q<c5>"),s:s("q<k>"),aN:s("q<eZ>"),gi:s("q<i>"),eW:s("q<dw>"),fo:s("q<bu>"),h3:s("q<aQ>"),E:s("q<ao>"),bx:s("q<bK>"),f7:s("q<p>"),u:s("q<n>"),gn:s("q<@>"),t:s("q<h>"),f1:s("q<C?>"),a6:s("q<v?>"),T:s("d8"),m:s("C"),d1:s("C()"),cj:s("bn"),aU:s("aE<@>"),cR:s("u<aD>"),dW:s("u<D<k,k>>"),cH:s("u<b9>"),dC:s("u<+(h,k)>"),h7:s("u<+(n,n,n,n)>"),h:s("u<k>"),et:s("u<dw>"),au:s("u<bu>"),f6:s("u<aQ>"),b1:s("u<dC>"),j:s("u<@>"),I:s("u<h>"),e:s("dc"),q:s("A<k,k>"),bz:s("A<@,@>"),b3:s("A<h,@>"),G:s("D<k,k>"),am:s("D<k,p>"),a:s("D<k,@>"),f:s("D<@,@>"),c9:s("D<h,c7>"),gy:s("D<h,c8>"),h6:s("D<k,u<+(n,n,n,n)>>"),fZ:s("D<aG,u<aQ>>"),bw:s("D<h,D<k,k>>"),e1:s("av<k,k?>"),e9:s("cr"),P:s("P"),K:s("v"),A:s("b9"),ap:s("c3"),aw:s("dl"),gT:s("qI"),bQ:s("+()"),aT:s("+(k,C)"),bq:s("+(n,n,n,n)"),J:s("ai"),cq:s("cw<k>"),eq:s("an"),p:s("aw"),ff:s("cx"),l:s("bb"),eU:s("c5"),N:s("k"),dm:s("G"),eK:s("bs"),ak:s("c6"),dw:s("bH<k,k>"),R:s("f2"),fP:s("i"),g:s("ax"),gY:s("aF"),b:s("aG"),d8:s("c7"),f2:s("c8"),h0:s("bu"),w:s("aQ"),fQ:s("ay"),ct:s("H<ar>"),bX:s("H<aO>"),aD:s("H<an>"),aH:s("H<aw>"),cc:s("H<k>"),ew:s("H<aF>"),dg:s("H<aG>"),eJ:s("b0<k>"),g4:s("ao"),e3:s("dC"),_:s("U<@>"),hg:s("dF<v?,v?>"),as:s("fo"),cp:s("bK"),e0:s("fp"),cO:s("fq"),er:s("ft"),y:s("p"),hc:s("p(ar)"),aO:s("p(aO)"),al:s("p(v)"),fq:s("p(an)"),e2:s("p(aw)"),bB:s("p(k)"),ci:s("p(aF)"),aR:s("p(aG)"),i:s("n"),z:s("@"),fO:s("@()"),x:s("@(v)"),Q:s("@(v,bb)"),S:s("h"),eH:s("aP<P>?"),B:s("C?"),bE:s("u<@>?"),X:s("v?"),v:s("k?"),gk:s("k?(k)"),F:s("cb<@,@>?"),O:s("fn?"),a7:s("p?"),a3:s("p(cv)?"),cD:s("n?"),gs:s("h?"),cg:s("ak?"),Y:s("~()?"),bV:s("~(aw,an)?"),b2:s("~(k)?"),bI:s("~(h)?"),o:s("ak"),H:s("~"),M:s("~()"),cA:s("~(k,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aW=J.ex.prototype
B.a=J.q.prototype
B.c=J.d7.prototype
B.d=J.bX.prototype
B.b=J.bY.prototype
B.aX=J.bn.prototype
B.aY=J.d9.prototype
B.r=A.dd.prototype
B.a6=A.di.prototype
B.a8=J.eQ.prototype
B.H=J.c6.prototype
B.bY=new A.fX()
B.ah=new A.ed()
B.M=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ai=function() {
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
B.an=function(getTagFallback) {
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
B.aj=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.am=function(hooks) {
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
B.al=function(hooks) {
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
B.ak=function(hooks) {
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
B.N=function(hooks) { return hooks; }

B.D=new A.eC()
B.ao=new A.v()
B.ap=new A.eP()
B.aq=new A.ia()
B.f=new A.ib()
B.O=new A.f4()
B.P=new A.fk()
B.j=new A.fr()
B.u=new A.fv()
B.v=new A.ar(0,"open")
B.Q=new A.ar(1,"chain")
B.R=new A.ar(2,"throughDoor")
B.S=new A.ar(3,"letterbox")
B.p=new A.ar(4,"ignore")
B.T=new A.aO(0,"compliance")
B.ar=new A.cl(B.T)
B.U=new A.aO(1,"rupture")
B.as=new A.cl(B.U)
B.V=new A.aO(2,"synchronisation")
B.at=new A.cl(B.V)
B.e=new A.bA(0,"north")
B.k=new A.bA(1,"east")
B.h=new A.bA(2,"south")
B.q=new A.bA(3,"west")
B.au=new A.bU(0,"mantle")
B.av=new A.bU(1,"portal")
B.ax=new A.bU(3,"none")
B.ay=new A.cn(B.ax,null)
B.aw=new A.bU(2,"window")
B.az=new A.cn(B.aw,"the shutter")
B.W=new A.J("saved mantle state is malformed",null,null)
B.aA=new A.J("saved difficulty state is malformed",null,null)
B.aB=new A.J("saved house drift state is malformed",null,null)
B.aC=new A.J("saved sleep record is malformed",null,null)
B.aD=new A.J("saved day-loop sleepHistory must be a list",null,null)
B.aE=new A.J("saved window state is malformed",null,null)
B.aF=new A.J("save run and meta must be objects",null,null)
B.aG=new A.J("saved house state is malformed",null,null)
B.aH=new A.J("saved sleep record must be an object",null,null)
B.aI=new A.J("saved session run is malformed",null,null)
B.aJ=new A.J("saved day-loop state is malformed",null,null)
B.X=new A.J("saved portal state is malformed",null,null)
B.aK=new A.J("saved house state does not match this house",null,null)
B.aL=new A.J("text.json root must be an object",null,null)
B.aM=new A.J("saved session clock is malformed",null,null)
B.aN=new A.J("saved sleep record has an unknown enum",null,null)
B.aO=new A.J("save root must be an object",null,null)
B.aP=new A.bW(0,"timeAdvanced")
B.aQ=new A.bW(1,"dayEndReached")
B.aR=new A.bW(4,"slept")
B.aS=new A.bW(5,"complianceFloorTripped")
B.w=new A.bB(0,"player")
B.E=new A.bB(1,"inserted")
B.Y=new A.bB(2,"warden")
B.aV=new A.ew(1,"visitor")
B.aZ=new A.hN(null)
B.b_=new A.hO(null)
B.Z=s([0,2,2,3],t.t)
B.i=s(["who","verb","object","place","time"],t.s)
B.b0=s([2,5,9,12,16,19],t.t)
B.b1=s([B.v,B.Q,B.R,B.S,B.p],A.aB("q<ar>"))
B.b2=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.t=new A.aG(0,"full")
B.I=new A.aG(1,"compressed")
B.J=new A.aG(2,"off")
B.a_=s([B.t,B.I,B.J],A.aB("q<aG>"))
B.b3=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bm=new A.aw(0,"long")
B.ac=new A.aw(1,"short")
B.a0=s([B.bm,B.ac],A.aB("q<aw>"))
B.b4=s([B.w,B.E,B.Y],A.aB("q<bB>"))
B.b7=s([],t.h1)
B.b8=s([],t.bs)
B.b5=s([],t.ai)
B.l=s([],t.s)
B.a1=s([],t.eW)
B.a2=s([],t.E)
B.b6=s([],t.t)
B.aU=new A.d5(15,"kitchen",-0.3,0)
B.aT=new A.d5(19,"spare-room",0,0.3)
B.n=s([B.aU,B.aT],A.aB("q<d5>"))
B.bj=new A.an(0,"bed")
B.bk=new A.an(1,"chair")
B.bl=new A.an(2,"floor")
B.a3=s([B.bj,B.bk,B.bl],A.aB("q<an>"))
B.b9=s([B.e,B.k,B.h,B.q],A.aB("q<bA>"))
B.ba=s([1.4,2.8,4.2],t.u)
B.bb=s([B.T,B.U,B.V],A.aB("q<aO>"))
B.o=new A.aF(0,"waiting")
B.z=new A.aF(1,"atDoor")
B.A=new A.aF(2,"consulting")
B.B=new A.aF(3,"resolved")
B.bc=s([B.o,B.z,B.A,B.B],A.aB("q<aF>"))
B.be={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.a4=new A.b7(B.be,[2,3,4,5,6],A.aB("b7<k,h>"))
B.a7={}
B.bd=new A.b7(B.a7,[],t.D)
B.bf={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.a5=new A.b7(B.bf,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.D)
B.m=new A.ba(0,"inactive")
B.a9=new A.ba(1,"gradeLUT")
B.aa=new A.ba(2,"affineWarp")
B.F=new A.ba(3,"vertexSnap")
B.ab=new A.ba(4,"tapeGiveup")
B.G=new A.ba(5,"portalFail")
B.x=new A.ba(6,"lightsOut")
B.bg=new A.c4(null,"save storage unavailable")
B.bh=new A.c4(null,"save could not be recovered")
B.bi=new A.c4(null,null)
B.y=new A.d2(B.a7,0,A.aB("d2<k>"))
B.bn=A.aT("qC")
B.bo=A.aT("qD")
B.bp=A.aT("jW")
B.bq=A.aT("ny")
B.br=A.aT("nC")
B.bs=A.aT("nD")
B.bt=A.aT("nE")
B.bu=A.aT("C")
B.bv=A.aT("v")
B.bw=A.aT("o9")
B.bx=A.aT("oa")
B.by=A.aT("ob")
B.bz=A.aT("k4")
B.bA=new A.iv(!1)
B.bB=new A.bI(0,"visitorAnswered")
B.ad=new A.bI(1,"visitorIgnored")
B.bC=new A.bI(2,"entryVerified")
B.bD=new A.bI(3,"entryContradicted")
B.bE=new A.bI(4,"exposureAccepted")
B.bG=new A.bd(1,"malformedDay")
B.bH=new A.bd(2,"malformedTier")
B.ae=new A.bd(3,"missingTierLines")
B.K=new A.bd(6,"invalidPhase")
B.bN=new A.aH(B.K,"The active visit cannot be chosen.")
B.bQ=new A.ay(B.bN)
B.bK=new A.aH(B.K,"The active visit has no line to advance.")
B.bR=new A.ay(B.bK)
B.bJ=new A.bd(5,"noActiveVisit")
B.bL=new A.aH(B.bJ,"There is no active visit.")
B.af=new A.ay(B.bL)
B.bM=new A.aH(B.K,"A visit is already active.")
B.bS=new A.ay(B.bM)
B.bI=new A.bd(4,"noArrival")
B.bP=new A.aH(B.bI,"The authored arrival is missing.")
B.bT=new A.ay(B.bP)
B.bF=new A.bd(0,"missingCorpus")
B.bO=new A.aH(B.bF,"The authored visitor corpus is empty.")
B.bU=new A.ay(B.bO)
B.ag=new A.ca(1,"exact")
B.L=new A.ca(2,"partial")
B.C=new A.ca(3,"contradiction")
B.bV=new A.ca(0,"skipped")
B.bW=new A.c9(B.bV,B.y)
B.bX=new A.c9(B.L,B.y)})();(function staticFields(){$.iY=null
$.aL=A.j([],A.aB("q<v>"))
$.le=null
$.kS=null
$.kR=null
$.mt=null
$.mp=null
$.mx=null
$.ju=null
$.jB=null
$.kF=null
$.j2=A.j([],A.aB("q<u<v>?>"))
$.cN=null
$.e5=null
$.e6=null
$.kq=!1
$.T=B.j
$.lr=""
$.ls=null
$.ln=null
$.i_=null
$.a4=A.M()
$.bf=A.M()
$.aI=A.M()
$.lU=A.M()
$.cO=null
$.a0=A.M()
$.km=null
$.e2=A.M()
$.N=A.M()
$.kh=A.M()
$.ko=null
$.e4=null
$.ki=!1
$.ks=!1
$.m7=!1
$.kr=0
$.jd=0
$.mo=!1
$.m1="booting"
$.bw=0
$.cQ=0
$.aJ="hall"
$.e1=A.M()
$.cK=A.M()
$.b2=A.M()
$.az=null
$.cL=A.M()
$.fz=A.M()
$.lV=A.M()
$.lT=A.M()
$.ab=A.M()
$.fA=A.M()
$.fy=A.M()
$.kg=A.M()
$.ac=A.M()
$.fx=A.M()
$.kf=A.M()
$.jq=A.a7(t.S)
$.bM=A.j([],t.s)
$.kn=null
$.ml=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qF","mD",()=>A.ms("_$dart_dartClosure"))
s($,"qE","cW",()=>A.ms("_$dart_dartClosure_dartJSInterop"))
s($,"r0","mT",()=>A.j([new J.ey()],A.aB("q<dn>")))
s($,"qK","mE",()=>A.bt(A.ir({
toString:function(){return"$receiver$"}})))
s($,"qL","mF",()=>A.bt(A.ir({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"qM","mG",()=>A.bt(A.ir(null)))
s($,"qN","mH",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qQ","mK",()=>A.bt(A.ir(void 0)))
s($,"qR","mL",()=>A.bt(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qP","mJ",()=>A.bt(A.lo(null)))
s($,"qO","mI",()=>A.bt(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"qT","mN",()=>A.bt(A.lo(void 0)))
s($,"qS","mM",()=>A.bt(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"qU","kJ",()=>A.ok())
s($,"qY","mR",()=>A.nO(4096))
s($,"qW","mP",()=>new A.jb().$0())
s($,"qX","mQ",()=>new A.ja().$0())
s($,"qV","mO",()=>new Int8Array(A.pb(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"qZ","fH",()=>A.jQ(B.bv))
s($,"r1","mU",()=>A.f5(0,1,0))
s($,"r3","fJ",()=>{var q=$.ln
if(q==null){A.fE()
A.fE()
A.fE()
A.fE()
A.fE()
q=$.ln=new A.im()}return q})
r($,"ky","cX",()=>A.f5(0,0,0))
r($,"kt","mS",()=>A.f5(0,0,0))
r($,"kA","kK",()=>A.f5(0,0,0))
s($,"r_","fI",()=>new A.hf(A.f5(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.bF,ArrayBuffer:A.cr,ArrayBufferView:A.dg,DataView:A.eI,Float32Array:A.dd,Float64Array:A.eJ,Int16Array:A.eK,Int32Array:A.eL,Int8Array:A.eM,Uint16Array:A.eN,Uint32Array:A.eO,Uint8ClampedArray:A.dh,CanvasPixelArray:A.dh,Uint8Array:A.di})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.dI.$nativeSuperclassTag="ArrayBufferView"
A.dJ.$nativeSuperclassTag="ArrayBufferView"
A.de.$nativeSuperclassTag="ArrayBufferView"
A.dK.$nativeSuperclassTag="ArrayBufferView"
A.dL.$nativeSuperclassTag="ArrayBufferView"
A.df.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$2$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jC
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()