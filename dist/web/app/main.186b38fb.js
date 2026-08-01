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
if(a[b]!==s){A.qt(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.kx(b)
return new s(c,this)}:function(){if(s===null)s=A.kx(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.kx(a).prototype
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
kC(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jp(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kA==null){A.q9()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.lj("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iS
if(o==null)o=$.iS=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qf(a)
if(p!=null)return p
if(typeof a=="function")return B.aR
s=Object.getPrototypeOf(a)
if(s==null)return B.a8
if(s===Object.prototype)return B.a8
if(typeof q=="function"){o=$.iS
if(o==null)o=$.iS=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.H,enumerable:false,writable:true,configurable:true})
return B.H}return B.H},
kW(a,b){if(a<0||a>4294967295)throw A.e(A.ah(a,0,4294967295,"length",null))
return J.nB(new Array(a),b)},
kX(a,b){if(a<0)throw A.e(A.ad("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("p<0>"))},
hv(a,b){if(a<0)throw A.e(A.ad("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("p<0>"))},
nB(a,b){var s=A.j(a,b.i("p<0>"))
s.$flags=1
return s},
nC(a,b){var s=t.U
return J.kG(s.a(a),s.a(b))},
cg(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.ex.prototype}if(typeof a=="string")return J.bX.prototype
if(a==null)return J.d3.prototype
if(typeof a=="boolean")return J.ew.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
if(typeof a=="symbol")return J.cm.prototype
if(typeof a=="bigint")return J.cl.prototype
return a}if(a instanceof A.v)return a
return J.jp(a)},
b5(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
if(typeof a=="symbol")return J.cm.prototype
if(typeof a=="bigint")return J.cl.prototype
return a}if(a instanceof A.v)return a
return J.jp(a)},
bl(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
if(typeof a=="symbol")return J.cm.prototype
if(typeof a=="bigint")return J.cl.prototype
return a}if(a instanceof A.v)return a
return J.jp(a)},
q4(a){if(typeof a=="number")return J.bW.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.c4.prototype
return a},
mm(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.c4.prototype
return a},
q5(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
if(typeof a=="symbol")return J.cm.prototype
if(typeof a=="bigint")return J.cl.prototype
return a}if(a instanceof A.v)return a
return J.jp(a)},
kF(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mm(a).Z(a,b)},
X(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cg(a).P(a,b)},
ao(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.qd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b5(a).h(a,b)},
bO(a,b,c){return J.bl(a).k(a,b,c)},
fF(a,b){return J.bl(a).m(a,b)},
mP(a,b){return J.bl(a).aj(a,b)},
mQ(a,b,c){return J.q5(a).dD(a,b,c)},
mR(a,b){return J.bl(a).b1(a,b)},
kG(a,b){return J.mm(a).J(a,b)},
fG(a,b){return J.bl(a).K(a,b)},
aB(a){return J.cg(a).gD(a)},
kH(a){return J.b5(a).gC(a)},
mS(a){return J.b5(a).gE(a)},
M(a){return J.bl(a).gt(a)},
aM(a){return J.b5(a).gn(a)},
kI(a){return J.cg(a).gF(a)},
mT(a,b,c){return J.bl(a).aN(a,b,c)},
mU(a,b){return J.b5(a).sn(a,b)},
mV(a,b){return J.bl(a).X(a,b)},
jO(a,b){return J.q4(a).j0(a,b)},
cT(a){return J.cg(a).p(a)},
mW(a,b){return J.bl(a).cG(a,b)},
eu:function eu(){},
ew:function ew(){},
d3:function d3(){},
d4:function d4(){},
bA:function bA(){},
eN:function eN(){},
c4:function c4(){},
bm:function bm(){},
cl:function cl(){},
cm:function cm(){},
p:function p(a){this.$ti=a},
ev:function ev(){},
hw:function hw(a){this.$ti=a},
bP:function bP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bW:function bW(){},
d2:function d2(){},
ex:function ex(){},
bX:function bX(){}},A={jT:function jT(){},
e4(){return $},
n0(a,b,c){if(t.d.b(a))return new A.dw(a,b.i("@<0>").v(c).i("dw<1,2>"))
return new A.bQ(a,b.i("@<0>").v(c).i("bQ<1,2>"))},
l1(a){return new A.bY("Field '"+a+"' has been assigned during initialization.")},
ar(a){return new A.bY("Field '"+a+"' has not been initialized.")},
nE(a){return new A.bY("Field '"+a+"' has already been initialized.")},
jq(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bp(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
id(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cP(a,b,c){return a},
kB(a){var s,r
for(s=$.aK.length,r=0;r<s;++r)if(a===$.aK[r])return!0
return!1},
jZ(a,b,c,d){A.eR(b,"start")
if(c!=null){A.eR(c,"end")
if(b>c)A.B(A.ah(b,0,c,"start",null))}return new A.dm(a,b,c,d.i("dm<0>"))},
hP(a,b,c,d){if(t.d.b(a))return new A.bT(a,b,c.i("@<0>").v(d).i("bT<1,2>"))
return new A.bn(a,b,c.i("@<0>").v(d).i("bn<1,2>"))},
jR(){return new A.cv("No element")},
nz(){return new A.cv("Too many elements")},
eU(a,b,c,d,e){if(c-b<=32)A.o_(a,b,c,d,e)
else A.nZ(a,b,c,d,e)},
o_(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.b5(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.R()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
nZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.H(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.H(a4+a5,2),f=g-j,e=g+j,d=J.b5(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.R()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.R()
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
A.eU(a3,a4,r-2,a6,a7)
A.eU(a3,q+2,a5,a6,a7)
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
break}}A.eU(a3,r,q,a6,a7)}else A.eU(a3,r,q,a6,a7)},
bI:function bI(){},
cU:function cU(a,b){this.a=a
this.$ti=b},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
dw:function dw(a,b){this.a=a
this.$ti=b},
dv:function dv(){},
iE:function iE(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.$ti=b},
bY:function bY(a){this.a=a},
ee:function ee(a){this.a=a},
i4:function i4(){},
t:function t(){},
ag:function ag(){},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
at:function at(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
a9:function a9(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(a,b){this.a=a
this.$ti=b},
ds:function ds(a,b){this.a=a
this.$ti=b},
Q:function Q(){},
bc:function bc(){},
cx:function cx(){},
dX:function dX(){},
jP(a,b,c){var s,r,q,p,o,n,m,l=A.bC(a.gL(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.x)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.bC(a.gag(),!0,c)
m=new A.b7(q,n,b.i("@<0>").v(c).i("b7<1,2>"))
m.$keys=l
return m}return new A.cW(A.al(a,b,c),b.i("@<0>").v(c).i("cW<1,2>"))},
n6(){throw A.e(A.a8("Cannot modify unmodifiable Map"))},
n7(){throw A.e(A.a8("Cannot modify constant Set"))},
mw(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
qd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cT(a)
return s},
eP(a){var s,r=$.l8
if(r==null)r=$.l8=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hU(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eQ(a){var s,r,q,p
if(a instanceof A.v)return A.aJ(A.aR(a),null)
s=J.cg(a)
if(s===B.aQ||s===B.aS||t.ak.b(a)){r=B.M(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aJ(A.aR(a),null)},
l9(a){var s,r,q
if(a==null||typeof a=="number"||A.b3(a))return J.cT(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bx)return a.p(0)
if(a instanceof A.b0)return a.du(!0)
s=$.mN()
for(r=0;r<1;++r){q=s[r].j2(a)
if(q!=null)return q}return"Instance of '"+A.eQ(a)+"'"},
nL(){if(!!self.location)return self.location.href
return null},
nU(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
R(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.bM(s,10)|55296)>>>0,s&1023|56320)}}throw A.e(A.ah(a,0,1114111,null,null))},
cq(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nT(a){var s=A.cq(a).getUTCFullYear()+0
return s},
nR(a){var s=A.cq(a).getUTCMonth()+1
return s},
nN(a){var s=A.cq(a).getUTCDate()+0
return s},
nO(a){var s=A.cq(a).getUTCHours()+0
return s},
nQ(a){var s=A.cq(a).getUTCMinutes()+0
return s},
nS(a){var s=A.cq(a).getUTCSeconds()+0
return s},
nP(a){var s=A.cq(a).getUTCMilliseconds()+0
return s},
nM(a){var s=a.$thrownJsError
if(s==null)return null
return A.bw(s)},
la(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.W(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
fC(a){throw A.e(A.kw(a))},
c(a,b){if(a==null)J.aM(a)
throw A.e(A.jm(a,b))},
jm(a,b){var s,r="index"
if(!A.az(b))return new A.aU(!0,b,r,null)
s=A.a(J.aM(a))
if(b<0||b>=s)return A.hs(b,s,a,r)
return A.nV(b,r)},
pY(a,b,c){if(a>c)return A.ah(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ah(b,a,c,"end",null)
return new A.aU(!0,b,"end",null)},
kw(a){return new A.aU(!0,a,null,null)},
e(a){return A.W(a,new Error())},
W(a,b){var s
if(a==null)a=new A.bq()
b.dartException=a
s=A.qu
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
qu(){return J.cT(this.dartException)},
B(a,b){throw A.W(a,b==null?new Error():b)},
aL(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.B(A.p3(a,b,c),s)},
p3(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.dp("'"+s+"': Cannot "+o+" "+l+k+n)},
x(a){throw A.e(A.a5(a))},
br(a){var s,r,q,p,o,n
a=A.mt(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ii(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ij(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
li(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jU(a,b){var s=b==null,r=s?null:b.method
return new A.ey(a,r,s?null:b.receiver)},
a4(a){var s
if(a==null)return new A.hS(a)
if(a instanceof A.d_){s=a.a
return A.bN(a,s==null?A.cI(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.bN(a,a.dartException)
return A.pI(a)},
bN(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.bM(r,16)&8191)===10)switch(q){case 438:return A.bN(a,A.jU(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.bN(a,new A.de())}}if(a instanceof TypeError){p=$.my()
o=$.mz()
n=$.mA()
m=$.mB()
l=$.mE()
k=$.mF()
j=$.mD()
$.mC()
i=$.mH()
h=$.mG()
g=p.a5(s)
if(g!=null)return A.bN(a,A.jU(A.y(s),g))
else{g=o.a5(s)
if(g!=null){g.method="call"
return A.bN(a,A.jU(A.y(s),g))}else if(n.a5(s)!=null||m.a5(s)!=null||l.a5(s)!=null||k.a5(s)!=null||j.a5(s)!=null||m.a5(s)!=null||i.a5(s)!=null||h.a5(s)!=null){A.y(s)
return A.bN(a,new A.de())}}return A.bN(a,new A.f_(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.dj()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bN(a,new A.aU(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.dj()
return a},
bw(a){var s
if(a instanceof A.d_)return a.b
if(a==null)return new A.dL(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.dL(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jJ(a){if(a==null)return J.aB(a)
if(typeof a=="object")return A.eP(a)
return J.aB(a)},
q2(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
q3(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
ph(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(A.ck("Unsupported number of arguments for wrapped closure"))},
cQ(a,b){var s=a.$identity
if(!!s)return s
s=A.pU(a,b)
a.$identity=s
return s},
pU(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ph)},
n5(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eW().constructor.prototype):Object.create(new A.ci(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.kO(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.n1(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.kO(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
n1(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mZ)}throw A.e("Error in functionType of tearoff")},
n2(a,b,c,d){var s=A.kN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kO(a,b,c,d){if(c)return A.n4(a,b,d)
return A.n2(b.length,d,a,b)},
n3(a,b,c,d){var s=A.kN,r=A.n_
switch(b?-1:a){case 0:throw A.e(new A.eS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
n4(a,b,c){var s,r
if($.kL==null)$.kL=A.kK("interceptor")
if($.kM==null)$.kM=A.kK("receiver")
s=b.length
r=A.n3(s,c,a,b)
return r},
kx(a){return A.n5(a)},
mZ(a,b){return A.dR(v.typeUniverse,A.aR(a.a),b)},
kN(a){return a.a},
n_(a){return a.b},
kK(a){var s,r,q,p=new A.ci("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.ad("Field name "+a+" not found.",null))},
mn(a){return v.getIsolateTag(a)},
qW(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qf(a){var s,r,q,p,o,n=A.y($.mo.$1(a)),m=$.jn[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ju[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dZ($.mk.$2(a,n))
if(q!=null){m=$.jn[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ju[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jI(s)
$.jn[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ju[n]=s
return s}if(p==="-"){o=A.jI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mr(a,s)
if(p==="*")throw A.e(A.lj(n))
if(v.leafTags[n]===true){o=A.jI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mr(a,s)},
mr(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kC(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jI(a){return J.kC(a,!1,null,!!a.$iaD)},
qj(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jI(s)
else return J.kC(s,c,null,null)},
q9(){if(!0===$.kA)return
$.kA=!0
A.qa()},
qa(){var s,r,q,p,o,n,m,l
$.jn=Object.create(null)
$.ju=Object.create(null)
A.q8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ms.$1(o)
if(n!=null){m=A.qj(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
q8(){var s,r,q,p,o,n,m=B.ai()
m=A.cO(B.aj,A.cO(B.ak,A.cO(B.N,A.cO(B.N,A.cO(B.al,A.cO(B.am,A.cO(B.an(B.M),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mo=new A.jr(p)
$.mk=new A.js(o)
$.ms=new A.jt(n)},
cO(a,b){return a(b)||b},
os(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.X(r,b[s]))return!1}return!0},
pW(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
qo(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q0(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mt(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
qp(a,b,c){var s=A.qq(a,b,c)
return s},
qq(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.mt(b),"g"),A.q0(c))},
dI:function dI(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a){this.a=a},
cW:function cW(a,b){this.a=a
this.$ti=b},
cV:function cV(){},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cX:function cX(){},
cY:function cY(a,b,c){this.a=a
this.b=b
this.$ti=c},
di:function di(){},
ii:function ii(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
de:function de(){},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
hS:function hS(a){this.a=a},
d_:function d_(a,b){this.a=a
this.b=b},
dL:function dL(a){this.a=a
this.b=null},
bx:function bx(){},
ec:function ec(){},
ed:function ed(){},
eY:function eY(){},
eW:function eW(){},
ci:function ci(a,b){this.a=a
this.b=b},
eS:function eS(a){this.a=a},
b8:function b8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hF:function hF(a){this.a=a},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
Z:function Z(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aY:function aY(a,b){this.a=a
this.$ti=b},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
K:function K(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
b0:function b0(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
qt(a){throw A.W(A.l1(a),new Error())},
f(){throw A.W(A.ar(""),new Error())},
o(){throw A.W(A.nE(""),new Error())},
mv(){throw A.W(A.l1(""),new Error())},
L(){var s=new A.iF()
return s.b=s},
iF:function iF(){this.b=null},
p5(a){return a},
nH(a,b,c){return new Float32Array(a,b,c)},
nI(a){return new Uint8Array(a)},
bu(a,b,c){if(a>>>0!==a||a>=c)throw A.e(A.jm(b,a))},
oZ(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.e(A.pY(a,b,c))
return b},
bE:function bE(){},
co:function co(){},
db:function db(){},
j2:function j2(a){this.a=a},
eF:function eF(){},
a7:function a7(){},
d9:function d9(){},
da:function da(){},
d8:function d8(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
dc:function dc(){},
dd:function dd(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
jY(a,b){var s=b.c
return s==null?b.c=A.dP(a,"aO",[b.x]):s},
lc(a){var s=a.w
if(s===6||s===7)return A.lc(a.x)
return s===11||s===12},
nX(a){return a.as},
qk(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aA(a){return A.j1(v.typeUniverse,a,!1)},
cf(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.cf(a1,s,a3,a4)
if(r===s)return a2
return A.lC(a1,r,!0)
case 7:s=a2.x
r=A.cf(a1,s,a3,a4)
if(r===s)return a2
return A.lB(a1,r,!0)
case 8:q=a2.y
p=A.cN(a1,q,a3,a4)
if(p===q)return a2
return A.dP(a1,a2.x,p)
case 9:o=a2.x
n=A.cf(a1,o,a3,a4)
m=a2.y
l=A.cN(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.k5(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cN(a1,j,a3,a4)
if(i===j)return a2
return A.lD(a1,k,i)
case 11:h=a2.x
g=A.cf(a1,h,a3,a4)
f=a2.y
e=A.pF(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.lA(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cN(a1,d,a3,a4)
o=a2.x
n=A.cf(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.k6(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.e8("Attempted to substitute unexpected RTI kind "+a0))}},
cN(a,b,c,d){var s,r,q,p,o=b.length,n=A.j6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cf(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
pG(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.j6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cf(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
pF(a,b,c,d){var s,r=b.a,q=A.cN(a,r,c,d),p=b.b,o=A.cN(a,p,c,d),n=b.c,m=A.pG(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.fg()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
ky(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.q7(s)
return a.$S()}return null},
qb(a,b){var s
if(A.lc(b))if(a instanceof A.bx){s=A.ky(a)
if(s!=null)return s}return A.aR(a)},
aR(a){if(a instanceof A.v)return A.m(a)
if(Array.isArray(a))return A.V(a)
return A.kk(J.cg(a))},
V(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.kk(a)},
kk(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.pe(a,s)},
pe(a,b){var s=a instanceof A.bx?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.oB(v.typeUniverse,s.name)
b.$ccache=r
return r},
q7(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.j1(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
kz(a){return A.bk(A.m(a))},
ku(a){var s
if(a instanceof A.b0)return a.d4()
s=a instanceof A.bx?A.ky(a):null
if(s!=null)return s
if(t.dm.b(a))return J.kI(a).a
if(Array.isArray(a))return A.V(a)
return A.aR(a)},
bk(a){var s=a.r
return s==null?a.r=new A.j0(a):s},
q1(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.c(q,0)
s=A.dR(v.typeUniverse,A.ku(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.lE(v.typeUniverse,s,A.ku(q[r]))}return A.dR(v.typeUniverse,s,a)},
aS(a){return A.bk(A.j1(v.typeUniverse,a,!1))},
pd(a){var s=this
s.b=A.pD(s)
return s.b(a)},
pD(a){var s,r,q,p,o
if(a===t.K)return A.pn
if(A.ch(a))return A.pr
s=a.w
if(s===6)return A.p9
if(s===1)return A.m7
if(s===7)return A.pi
r=A.pC(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ch)){a.f="$i"+q
if(q==="u")return A.pl
if(a===t.m)return A.pk
return A.pq}}else if(s===10){p=A.pW(a.x,a.y)
o=p==null?A.m7:p
return o==null?A.cI(o):o}return A.p7},
pC(a){if(a.w===8){if(a===t.S)return A.az
if(a===t.i||a===t.o)return A.pm
if(a===t.N)return A.pp
if(a===t.y)return A.b3}return null},
pc(a){var s=this,r=A.p6
if(A.ch(s))r=A.oX
else if(s===t.K)r=A.cI
else if(A.cR(s)){r=A.p8
if(s===t.gs)r=A.lV
else if(s===t.v)r=A.dZ
else if(s===t.a7)r=A.oW
else if(s===t.cg)r=A.lW
else if(s===t.cD)r=A.lU
else if(s===t.B)r=A.d}else if(s===t.S)r=A.a
else if(s===t.N)r=A.y
else if(s===t.y)r=A.ay
else if(s===t.o)r=A.fy
else if(s===t.i)r=A.lT
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
p7(a){var s=this
if(a==null)return A.cR(s)
return A.qe(v.typeUniverse,A.qb(a,s),s)},
p9(a){if(a==null)return!0
return this.x.b(a)},
pq(a){var s,r=this
if(a==null)return A.cR(r)
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.cg(a)[s]},
pl(a){var s,r=this
if(a==null)return A.cR(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.cg(a)[s]},
pk(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.v)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
m6(a){if(typeof a=="object"){if(a instanceof A.v)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
p6(a){var s=this
if(a==null){if(A.cR(s))return a}else if(s.b(a))return a
throw A.W(A.m_(a,s),new Error())},
p8(a){var s=this
if(a==null||s.b(a))return a
throw A.W(A.m_(a,s),new Error())},
m_(a,b){return new A.dN("TypeError: "+A.ls(a,A.aJ(b,null)))},
ls(a,b){return A.el(a)+": type '"+A.aJ(A.ku(a),null)+"' is not a subtype of type '"+b+"'"},
aQ(a,b){return new A.dN("TypeError: "+A.ls(a,b))},
pi(a){var s=this
return s.x.b(a)||A.jY(v.typeUniverse,s).b(a)},
pn(a){return a!=null},
cI(a){if(a!=null)return a
throw A.W(A.aQ(a,"Object"),new Error())},
pr(a){return!0},
oX(a){return a},
m7(a){return!1},
b3(a){return!0===a||!1===a},
ay(a){if(!0===a)return!0
if(!1===a)return!1
throw A.W(A.aQ(a,"bool"),new Error())},
oW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.W(A.aQ(a,"bool?"),new Error())},
lT(a){if(typeof a=="number")return a
throw A.W(A.aQ(a,"double"),new Error())},
lU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.W(A.aQ(a,"double?"),new Error())},
az(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.W(A.aQ(a,"int"),new Error())},
lV(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.W(A.aQ(a,"int?"),new Error())},
pm(a){return typeof a=="number"},
fy(a){if(typeof a=="number")return a
throw A.W(A.aQ(a,"num"),new Error())},
lW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.W(A.aQ(a,"num?"),new Error())},
pp(a){return typeof a=="string"},
y(a){if(typeof a=="string")return a
throw A.W(A.aQ(a,"String"),new Error())},
dZ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.W(A.aQ(a,"String?"),new Error())},
b(a){if(A.m6(a))return a
throw A.W(A.aQ(a,"JSObject"),new Error())},
d(a){if(a==null)return a
if(A.m6(a))return a
throw A.W(A.aQ(a,"JSObject?"),new Error())},
mf(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aJ(a[q],b)
return s},
pw(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mf(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aJ(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
m1(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aJ(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aJ(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aJ(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aJ(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aJ(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aJ(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aJ(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aJ(a.x,b)+">"
if(l===8){p=A.pH(a.x)
o=a.y
return o.length>0?p+("<"+A.mf(o,b)+">"):p}if(l===10)return A.pw(a,b)
if(l===11)return A.m1(a,b,null)
if(l===12)return A.m1(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
pH(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oC(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
oB(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.j1(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dQ(a,5,"#")
q=A.j6(s)
for(p=0;p<s;++p)q[p]=r
o=A.dP(a,b,q)
n[b]=o
return o}else return m},
oA(a,b){return A.lM(a.tR,b)},
oz(a,b){return A.lM(a.eT,b)},
j1(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lx(A.lv(a,null,b,!1))
r.set(b,s)
return s},
dR(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lx(A.lv(a,b,c,!0))
q.set(c,r)
return r},
lE(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.k5(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
bK(a,b){b.a=A.pc
b.b=A.pd
return b},
dQ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aZ(null,null)
s.w=b
s.as=c
r=A.bK(a,s)
a.eC.set(c,r)
return r},
lC(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ox(a,b,r,c)
a.eC.set(r,s)
return s},
ox(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ch(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.cR(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.aZ(null,null)
q.w=6
q.x=b
q.as=c
return A.bK(a,q)},
lB(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.ov(a,b,r,c)
a.eC.set(r,s)
return s},
ov(a,b,c,d){var s,r
if(d){s=b.w
if(A.ch(b)||b===t.K)return b
else if(s===1)return A.dP(a,"aO",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.aZ(null,null)
r.w=7
r.x=b
r.as=c
return A.bK(a,r)},
oy(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aZ(null,null)
s.w=13
s.x=b
s.as=q
r=A.bK(a,s)
a.eC.set(q,r)
return r},
dO(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ou(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dP(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dO(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aZ(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bK(a,r)
a.eC.set(p,q)
return q},
k5(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dO(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aZ(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.bK(a,o)
a.eC.set(q,n)
return n},
lD(a,b,c){var s,r,q="+"+(b+"("+A.dO(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aZ(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.bK(a,s)
a.eC.set(q,r)
return r},
lA(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dO(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dO(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ou(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aZ(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.bK(a,p)
a.eC.set(r,o)
return o},
k6(a,b,c,d){var s,r=b.as+("<"+A.dO(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ow(a,b,c,r,d)
a.eC.set(r,s)
return s},
ow(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.j6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.cf(a,b,r,0)
m=A.cN(a,c,r,0)
return A.k6(a,n,m,c!==m)}}l=new A.aZ(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.bK(a,l)},
lv(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lx(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.on(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.lw(a,r,l,k,!1)
else if(q===46)r=A.lw(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ce(a.u,a.e,k.pop()))
break
case 94:k.push(A.oy(a.u,k.pop()))
break
case 35:k.push(A.dQ(a.u,5,"#"))
break
case 64:k.push(A.dQ(a.u,2,"@"))
break
case 126:k.push(A.dQ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.op(a,k)
break
case 38:A.oo(a,k)
break
case 63:p=a.u
k.push(A.lC(p,A.ce(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lB(p,A.ce(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.om(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ly(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.or(a.u,a.e,o)
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
return A.ce(a.u,a.e,m)},
on(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lw(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.oC(s,o.x)[p]
if(n==null)A.B('No "'+p+'" in "'+A.nX(o)+'"')
d.push(A.dR(s,o,n))}else d.push(p)
return m},
op(a,b){var s,r=a.u,q=A.lu(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dP(r,p,q))
else{s=A.ce(r,a.e,p)
switch(s.w){case 11:b.push(A.k6(r,s,q,a.n))
break
default:b.push(A.k5(r,s,q))
break}}},
om(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.lu(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ce(p,a.e,o)
q=new A.fg()
q.a=s
q.b=n
q.c=m
b.push(A.lA(p,r,q))
return
case-4:b.push(A.lD(p,b.pop(),s))
return
default:throw A.e(A.e8("Unexpected state under `()`: "+A.w(o)))}},
oo(a,b){var s=b.pop()
if(0===s){b.push(A.dQ(a.u,1,"0&"))
return}if(1===s){b.push(A.dQ(a.u,4,"1&"))
return}throw A.e(A.e8("Unexpected extended operation "+A.w(s)))},
lu(a,b){var s=b.splice(a.p)
A.ly(a.u,a.e,s)
a.p=b.pop()
return s},
ce(a,b,c){if(typeof c=="string")return A.dP(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.oq(a,b,c)}else return c},
ly(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ce(a,b,c[s])},
or(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ce(a,b,c[s])},
oq(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.e8("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.e8("Bad index "+c+" for "+b.p(0)))},
qe(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a1(a,b,null,c,null)
r.set(c,s)}return s},
a1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ch(d))return!0
s=b.w
if(s===4)return!0
if(A.ch(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a1(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.a1(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.a1(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a1(a,b.x,c,d,e))return!1
return A.a1(a,A.jY(a,b),c,d,e)}if(s===6)return A.a1(a,p,c,d,e)&&A.a1(a,b.x,c,d,e)
if(q===7){if(A.a1(a,b,c,d.x,e))return!0
return A.a1(a,b,c,A.jY(a,d),e)}if(q===6)return A.a1(a,b,c,p,e)||A.a1(a,b,c,d.x,e)
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
if(!A.a1(a,j,c,i,e)||!A.a1(a,i,e,j,c))return!1}return A.m5(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.m5(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pj(a,b,c,d,e)}if(o&&q===10)return A.po(a,b,c,d,e)
return!1},
m5(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a1(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.a1(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a1(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a1(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.a1(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
pj(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dR(a,b,r[o])
return A.lR(a,p,null,c,d.y,e)}return A.lR(a,b.y,null,c,d.y,e)},
lR(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a1(a,b[s],d,e[s],f))return!1
return!0},
po(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a1(a,r[s],c,q[s],e))return!1
return!0},
cR(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ch(a))if(s!==6)r=s===7&&A.cR(a.x)
return r},
ch(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
lM(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
j6(a){return a>0?new Array(a):v.typeUniverse.sEA},
aZ:function aZ(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
fg:function fg(){this.c=this.b=this.a=null},
j0:function j0(a){this.a=a},
ff:function ff(){},
dN:function dN(a){this.a=a},
oe(){var s,r,q
if(self.scheduleImmediate!=null)return A.pQ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cQ(new A.iB(s),1)).observe(r,{childList:true})
return new A.iA(s,r,q)}else if(self.setImmediate!=null)return A.pR()
return A.pS()},
of(a){self.scheduleImmediate(A.cQ(new A.iC(t.M.a(a)),0))},
og(a){self.setImmediate(A.cQ(new A.iD(t.M.a(a)),0))},
oh(a){t.M.a(a)
A.ot(0,a)},
ot(a,b){var s=new A.iZ()
s.fR(a,b)
return s},
bi(a){return new A.fa(new A.U($.S,a.i("U<0>")),a.i("fa<0>"))},
bh(a,b){a.$2(0,null)
b.b=!0
return b.a},
ac(a,b){A.oY(a,b)},
bg(a,b){b.bQ(a)},
bf(a,b){b.bR(A.a4(a),A.bw(a))},
oY(a,b){var s,r,q=new A.j8(b),p=new A.j9(b)
if(a instanceof A.U)a.dt(q,p,t.z)
else{s=t.z
if(a instanceof A.U)a.cB(q,p,s)
else{r=new A.U($.S,t._)
r.a=8
r.c=a
r.dt(q,p,s)}}},
bj(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.S.fa(new A.jk(s),t.H,t.S,t.z)},
lz(a,b,c){return 0},
fP(a){var s
if(t.C.b(a)){s=a.gaC()
if(s!=null)return s}return B.u},
kT(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.U($.S,b.i("U<u<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.hb(i,h,g,f)
try{for(n=J.M(a),m=t.P;n.l();){r=n.gq()
q=i.b
r.cB(new A.ha(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.aW(A.j([],b.i("p<0>")))
return n}i.a=A.c_(n,null,!1,b.i("0?"))}catch(l){p=A.a4(l)
o=A.bw(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.m4(m,k)
m=new A.ae(m,k==null?A.fP(m):k)
n.aS(m)
return n}else{i.d=p
i.c=o}}return f},
m4(a,b){if($.S===B.j)return null
return null},
pf(a,b){if($.S!==B.j)A.m4(a,b)
if(b==null)if(t.C.b(a)){b=a.gaC()
if(b==null){A.la(a,B.u)
b=B.u}}else b=B.u
else if(t.C.b(a))A.la(a,b)
return new A.ae(a,b)},
oi(a,b){var s=new A.U($.S,b.i("U<0>"))
b.a(a)
s.a=8
s.c=a
return s},
k1(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.o0()
b.aS(new A.ae(new A.aU(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dd(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.aZ()
b.aV(o.a)
A.cy(b,p)
return}b.a^=2
A.fA(null,null,b.b,t.M.a(new A.iK(o,b)))},
cy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.kp(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.cy(d.a,c)
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
A.kp(j.a,j.b)
return}g=$.S
if(g!==h)$.S=h
else g=null
c=c.c
if((c&15)===8)new A.iO(q,d,n).$0()
else if(o){if((c&1)!==0)new A.iN(q,j).$0()}else if((c&2)!==0)new A.iM(d,q).$0()
if(g!=null)$.S=g
c=q.c
if(c instanceof A.U){p=q.a.$ti
p=p.i("aO<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.b_(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.k1(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.b_(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
px(a,b){var s
if(t.Q.b(a))return b.fa(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.e(A.aV(a,"onError",u.c))},
pt(){var s,r
for(s=$.cJ;s!=null;s=$.cJ){$.e1=null
r=s.b
$.cJ=r
if(r==null)$.e0=null
s.a.$0()}},
pE(){$.kl=!0
try{A.pt()}finally{$.e1=null
$.kl=!1
if($.cJ!=null)$.kD().$1(A.ml())}},
mi(a){var s=new A.fb(a),r=$.e0
if(r==null){$.cJ=$.e0=s
if(!$.kl)$.kD().$1(A.ml())}else $.e0=r.b=s},
pB(a){var s,r,q,p=$.cJ
if(p==null){A.mi(a)
$.e1=$.e0
return}s=new A.fb(a)
r=$.e1
if(r==null){s.b=p
$.cJ=$.e1=s}else{q=r.b
s.b=q
$.e1=r.b=s
if(q==null)$.e0=s}},
qC(a,b){A.cP(a,"stream",t.K)
return new A.fr(b.i("fr<0>"))},
kp(a,b){A.pB(new A.jh(a,b))},
me(a,b,c,d,e){var s,r=$.S
if(r===c)return d.$0()
$.S=c
s=r
try{r=d.$0()
return r}finally{$.S=s}},
pA(a,b,c,d,e,f,g){var s,r=$.S
if(r===c)return d.$1(e)
$.S=c
s=r
try{r=d.$1(e)
return r}finally{$.S=s}},
pz(a,b,c,d,e,f,g,h,i){var s,r=$.S
if(r===c)return d.$2(e,f)
$.S=c
s=r
try{r=d.$2(e,f)
return r}finally{$.S=s}},
fA(a,b,c,d){t.M.a(d)
if(B.j!==c){d=c.hX(d)
d=d}A.mi(d)},
iB:function iB(a){this.a=a},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iZ:function iZ(){},
j_:function j_(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=!1
this.$ti=b},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
jk:function jk(a){this.a=a},
dM:function dM(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cD:function cD(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fc:function fc(){},
dt:function dt(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b,c,d,e){var _=this
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
iH:function iH(a,b){this.a=a
this.b=b},
iL:function iL(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a},
iN:function iN(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
fb:function fb(a){this.a=a
this.b=null},
fr:function fr(a){this.$ti=a},
dW:function dW(){},
fo:function fo(){},
iY:function iY(a,b){this.a=a
this.b=b},
jh:function jh(a,b){this.a=a
this.b=b},
lt(a,b){var s=a[b]
return s===a?null:s},
k3(a,b,c){if(c==null)a[b]=a
else a[b]=c},
k2(){var s=Object.create(null)
A.k3(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
l4(a,b){return new A.b8(a.i("@<0>").v(b).i("b8<1,2>"))},
O(a,b,c){return b.i("@<0>").v(c).i("l3<1,2>").a(A.q2(a,new A.b8(b.i("@<0>").v(c).i("b8<1,2>"))))},
r(a,b){return new A.b8(a.i("@<0>").v(b).i("b8<1,2>"))},
jV(a){return new A.be(a.i("be<0>"))},
af(a){return new A.be(a.i("be<0>"))},
eC(a,b){return b.i("l5<0>").a(A.q3(a,new A.be(b.i("be<0>"))))},
k4(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ol(a,b,c){var s=new A.cd(a,b,c.i("cd<0>"))
s.c=a.e
return s},
d1(a,b){var s=J.M(a.a)
if(new A.a9(s,a.b,a.$ti.i("a9<1>")).l())return s.gq()
return null},
al(a,b,c){var s=A.l4(b,c)
a.a0(0,new A.hM(s,b,c))
return s},
l6(a,b){var s,r,q=A.jV(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.x)(a),++r)q.m(0,b.a(a[r]))
return q},
nF(a,b){var s=A.jV(b)
s.Y(0,a)
return s},
nG(a,b){var s=t.U
return J.kG(s.a(a),s.a(b))},
jW(a){var s,r
if(A.kB(a))return"{...}"
s=new A.aj("")
try{r={}
B.a.m($.aK,a)
s.a+="{"
r.a=!0
a.a0(0,new A.hO(r,s))
s.a+="}"}finally{if(0>=$.aK.length)return A.c($.aK,-1)
$.aK.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
oD(){throw A.e(A.a8("Cannot change an unmodifiable set"))},
dy:function dy(){},
iR:function iR(a){this.a=a},
dA:function dA(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ca:function ca(a,b){this.a=a
this.$ti=b},
dz:function dz(a,b,c){var _=this
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
fk:function fk(a){this.a=a
this.c=this.b=null},
cd:function cd(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
z:function z(){},
F:function F(){},
hN:function hN(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
dS:function dS(){},
cn:function cn(){},
bG:function bG(a,b){this.a=a
this.$ti=b},
bo:function bo(){},
dK:function dK(){},
ft:function ft(){},
dn:function dn(a,b){this.a=a
this.$ti=b},
cE:function cE(){},
dT:function dT(){},
pu(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a4(r)
q=A.Y(String(s),null,null)
throw A.e(q)}q=A.ja(p)
return q},
ja(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.fi(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ja(a[s])
return a},
oU(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.mL()
else s=new Uint8Array(o)
for(r=J.b5(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
oT(a,b,c,d){var s=a?$.mK():$.mJ()
if(s==null)return null
if(0===c&&d===b.length)return A.lL(s,b)
return A.lL(s,b.subarray(c,d))},
lL(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
kJ(a,b,c,d,e,f){if(B.c.aa(f,4)!==0)throw A.e(A.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.e(A.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.e(A.Y("Invalid base64 padding, more than two '=' characters",a,b))},
l0(a,b,c){return new A.d5(a,b)},
p2(a){return a.A()},
oj(a,b){return new A.iU(a,[],A.pV())},
ok(a,b,c){var s,r=new A.aj(""),q=A.oj(r,b)
q.bp(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
oV(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
fi:function fi(a,b){this.a=a
this.b=b
this.c=null},
iT:function iT(a){this.a=a},
fj:function fj(a){this.a=a},
j5:function j5(){},
j4:function j4(){},
ea:function ea(){},
fS:function fS(){},
bR:function bR(){},
eh:function eh(){},
ek:function ek(){},
d5:function d5(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
ez:function ez(){},
hH:function hH(a){this.b=a},
hG:function hG(a){this.a=a},
iV:function iV(){},
iW:function iW(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c){this.c=a
this.a=b
this.b=c},
f2:function f2(){},
io:function io(a){this.a=a},
j3:function j3(a){this.a=a
this.b=16
this.c=0},
qc(a){var s=A.hU(a,null)
if(s!=null)return s
throw A.e(A.Y(a,null,null))},
nq(a,b){a=A.W(a,new Error())
if(a==null)a=A.cI(a)
a.stack=b.p(0)
throw a},
c_(a,b,c,d){var s,r=c?J.kX(a,d):J.kW(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bC(a,b,c){var s,r=A.j([],c.i("p<0>"))
for(s=J.M(a);s.l();)B.a.m(r,c.a(s.gq()))
if(b)return r
r.$flags=1
return r},
aE(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.i("p<0>"))
s=A.j([],b.i("p<0>"))
for(r=J.M(a);r.l();)B.a.m(s,r.gq())
return s},
bD(a,b){var s=A.bC(a,!1,b)
s.$flags=3
return s},
lg(a,b,c){var s,r
A.eR(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.e(A.ah(c,b,null,"end",null))
if(s===0)return""}r=A.o2(a,b,c)
return r},
o2(a,b,c){var s=a.length
if(b>=s)return""
return A.nU(a,b,c==null||c>s?s:c)},
lf(a,b,c){var s=J.M(b)
if(!s.l())return a
if(c.length===0){do a+=A.w(s.gq())
while(s.l())}else{a+=A.w(s.gq())
while(s.l())a=a+c+A.w(s.gq())}return a},
k0(){var s,r,q=A.nL()
if(q==null)throw A.e(A.a8("'Uri.base' is not supported"))
s=$.lm
if(s!=null&&q===$.ll)return s
r=A.o9(q)
$.lm=r
$.ll=q
return r},
o0(){return A.bw(new Error())},
n8(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
kP(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ei(a){if(a>=10)return""+a
return"0"+a},
np(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.e(A.aV(b,"name","No enum value with that name"))},
el(a){if(typeof a=="number"||A.b3(a)||a==null)return J.cT(a)
if(typeof a=="string")return JSON.stringify(a)
return A.l9(a)},
nr(a,b){A.cP(a,"error",t.K)
A.cP(b,"stackTrace",t.l)
A.nq(a,b)},
e8(a){return new A.e7(a)},
ad(a,b){return new A.aU(!1,null,b,a)},
aV(a,b,c){return new A.aU(!0,a,b,c)},
lb(a){var s=null
return new A.cr(s,s,!1,s,s,a)},
nV(a,b){return new A.cr(null,null,!0,a,b,"Value not in range")},
ah(a,b,c,d,e){return new A.cr(b,c,!0,a,d,"Invalid value")},
dh(a,b,c){if(0>a||a>c)throw A.e(A.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.ah(b,a,c,"end",null))
return b}return c},
eR(a,b){if(a<0)throw A.e(A.ah(a,0,null,b,null))
return a},
hs(a,b,c,d){return new A.er(b,!0,a,d,"Index out of range")},
a8(a){return new A.dp(a)},
lj(a){return new A.eZ(a)},
a2(a){return new A.cv(a)},
a5(a){return new A.ef(a)},
ck(a){return new A.iG(a)},
Y(a,b,c){return new A.J(a,b,c)},
nA(a,b,c){var s,r
if(A.kB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
B.a.m($.aK,a)
try{A.ps(a,s)}finally{if(0>=$.aK.length)return A.c($.aK,-1)
$.aK.pop()}r=A.lf(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jS(a,b,c){var s,r
if(A.kB(a))return b+"..."+c
s=new A.aj(b)
B.a.m($.aK,a)
try{r=s
r.a=A.lf(r.a,a,", ")}finally{if(0>=$.aK.length)return A.c($.aK,-1)
$.aK.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ps(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
cp(a,b,c,d){var s
if(B.f===c){s=J.aB(a)
b=J.aB(b)
return A.id(A.bp(A.bp($.fD(),s),b))}if(B.f===d){s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
return A.id(A.bp(A.bp(A.bp($.fD(),s),b),c))}s=J.aB(a)
b=J.aB(b)
c=J.aB(c)
d=J.aB(d)
d=A.id(A.bp(A.bp(A.bp(A.bp($.fD(),s),b),c),d))
return d},
nJ(a){var s,r,q=$.fD()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.x)(a),++r)q=A.bp(q,J.aB(a[r]))
return A.id(q)},
le(a,b){return new A.dn(A.nF(a,b),b.i("dn<0>"))},
o9(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.c(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.lk(a4<a4?B.b.u(a5,0,a4):a5,5,a3).gfd()
else if(s===32)return A.lk(B.b.u(a5,5,a4),0,a3).gfd()}r=A.c_(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.mh(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.mh(a5,0,q,20,r)===20)r[7]=q
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
a5=B.b.aB(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.M(a5,"http",0)){if(i&&o+3===n&&B.b.M(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.aB(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.M(a5,"https",0)){if(i&&o+4===n&&B.b.M(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.aB(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.fp(a4<a5.length?B.b.u(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.oN(a5,0,q)
else{if(q===0)A.cF(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.oO(a5,c,p-1):""
a=A.oJ(a5,p,o,!1)
i=o+1
if(i<n){a0=A.hU(B.b.u(a5,i,n),a3)
d=A.oL(a0==null?A.B(A.Y("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.oK(a5,n,m,a3,j,a!=null)
a2=m<l?A.oM(a5,m+1,l,a3):a3
return A.oE(j,b,a,d,a1,a2,l<a4?A.oI(a5,l+1,a4):a3)},
lo(a){var s=t.N
return B.a.eW(A.j(a.split("&"),t.s),A.r(s,s),new A.im(B.O),t.G)},
f1(a,b,c){throw A.e(A.Y("Illegal IPv4 address, "+a,b,c))},
o6(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.c(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.f1("each part must be in the range 0..255",a,r)}A.f1("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.f1(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aL(d)
if(!(k<16))return A.c(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.f1(j,a,q)
p=l}A.f1("IPv4 address should contain exactly 4 parts",a,q)},
o7(a,b,c){var s
if(b===c)throw A.e(A.Y("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.c(a,b)
if(a.charCodeAt(b)===118){s=A.o8(a,b,c)
if(s!=null)throw A.e(s)
return!1}A.ln(a,b,c)
return!0},
o8(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
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
ln(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.il(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.o6(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.bM(l,8)
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
B.a6.fn(s,a0,16,s,a)
B.a6.iq(s,a,a0,0)}}return s},
oE(a,b,c,d,e,f,g){return new A.dU(a,b,c,d,e,f,g)},
lF(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cF(a,b,c){throw A.e(A.Y(c,a,b))},
oL(a,b){var s=A.lF(b)
if(a===s)return null
return a},
oJ(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.c(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.c(a,r)
if(a.charCodeAt(r)!==93)A.cF(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.c(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.oG(a,q,r)
if(o<r){n=o+1
p=A.lK(a,B.b.M(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.o7(a,q,o)
l=B.b.u(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.c(a,k)
if(a.charCodeAt(k)===58){o=B.b.bf(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.lK(a,B.b.M(a,"25",n)?o+3:n,c,"%25")}else p=""
A.ln(a,b,o)
return"["+B.b.u(a,b,o)+p+"]"}}return A.oQ(a,b,c)},
oG(a,b,c){var s=B.b.bf(a,"%",b)
return s>=b&&s<c?s:c},
lK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aj(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.k8(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aj("")
l=h.a+=B.b.u(a,q,r)
if(m)n=B.b.u(a,r,r+3)
else if(n==="%")A.cF(a,r,"ZoneID should not contain % anymore")
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
l=A.k7(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.u(a,b,c)
if(q<c){i=B.b.u(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
oQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.k8(a,r,!0)
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
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cF(a,r,"Invalid character")
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
j=A.k7(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.u(a,b,c)
if(q<c){k=B.b.u(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
oN(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.c(a,b)
if(!A.lH(a.charCodeAt(b)))A.cF(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.cF(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.u(a,b,c)
return A.oF(q?a.toLowerCase():a)},
oF(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oO(a,b,c){return A.dV(a,b,c,16,!1,!1)},
oK(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.dV(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.S(q,"/"))q="/"+q
return A.oP(q,e,f)},
oP(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.S(a,"/")&&!B.b.S(a,"\\"))return A.oR(a,!s||c)
return A.oS(a)},
oM(a,b,c,d){return A.dV(a,b,c,256,!0,!1)},
oI(a,b,c){return A.dV(a,b,c,256,!0,!1)},
k8(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.c(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.c(a,l)
q=a.charCodeAt(l)
p=A.jq(r)
o=A.jq(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.c(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.R(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.u(a,b,b+3).toUpperCase()
return null},
k7(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
o+=3}}return A.lg(s,0,null)},
dV(a,b,c,d,e,f){var s=A.lJ(a,b,c,d,e,f)
return s==null?B.b.u(a,b,c):s},
lJ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.c(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.k8(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cF(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.c(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.k7(n)}if(o==null){o=new A.aj("")
k=o}else k=o
k.a=(k.a+=B.b.u(a,p,q))+l
if(typeof m!=="number")return A.fC(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.u(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
lI(a){if(B.b.S(a,"."))return!0
return B.b.be(a,"/.")!==-1},
oS(a){var s,r,q,p,o,n,m
if(!A.lI(a))return a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.bj(s,"/")},
oR(a,b){var s,r,q,p,o,n
if(!A.lI(a))return!b?A.lG(a):a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gG(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.k(s,0,A.lG(s[0]))}return B.a.bj(s,"/")},
lG(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.lH(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.u(a,0,s)+"%3A"+B.b.aQ(a,s+1)
if(r<=127){if(!(r<128))return A.c(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
oH(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.c(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.e(A.ad("Invalid URL encoding",null))}}return r},
k9(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.O===d)return B.b.u(a,b,c)
else p=new A.ee(B.b.u(a,b,c))
else{p=A.j([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.e(A.ad("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.e(A.ad("Truncated URI",null))
B.a.m(p,A.oH(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}t.I.a(p)
return B.bu.i5(p)},
lH(a){var s=a|32
return 97<=s&&s<=122},
lk(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.j([b-1],t.t)
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
else{l=A.lJ(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aB(a,m,s,l)}return new A.ik(a,j,c)},
mh(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
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
fe:function fe(){},
I:function I(){},
e7:function e7(a){this.a=a},
bq:function bq(){},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
er:function er(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dp:function dp(a){this.a=a},
eZ:function eZ(a){this.a=a},
cv:function cv(a){this.a=a},
ef:function ef(a){this.a=a},
eM:function eM(){},
dj:function dj(){},
iG:function iG(a){this.a=a},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},
P:function P(){},
v:function v(){},
fs:function fs(){},
aj:function aj(a){this.a=a},
im:function im(a){this.a=a},
il:function il(a){this.a=a},
dU:function dU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
fd:function fd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
hR:function hR(a){this.a=a},
a0(a){var s
if(typeof a=="function")throw A.e(A.ad("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fz,a)
s[$.cS()]=a
return s},
fz(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
q6(a,b,c){return c.a(a[b])},
b4(a,b,c,d){return d.a(a[b].apply(a,c))},
lY(a,b,c,d){return d.a(a[b](c))},
b6(a,b){var s=new A.U($.S,b.i("U<0>")),r=new A.dt(s,b.i("dt<0>"))
a.then(A.cQ(new A.jK(r,b),1),A.cQ(new A.jL(r),1))
return s},
m8(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
fB(a){if(A.m8(a))return a
return new A.jl(new A.dA(t.hg)).$1(a)},
jK:function jK(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
jl:function jl(a){this.a=a},
fh:function fh(){},
dH:function dH(){this.b=this.a=0},
ej:function ej(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fQ(a,b){var s=0,r=A.bi(t.f_),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$fQ=A.bj(function(a0,a1){if(a0===1)return A.bf(a1,r)
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
c=new A.e9(p,b,m,l,k,j,i,h,g,f,e,d,n,B.P,A.r(o,t.aT))
c.fJ(p,b)
p=A.m(a).i("K<1,2>")
s=3
return A.ac(A.kT(A.hP(new A.K(a,p),p.i("aO<P>(l.E)").a(new A.fR(c)),p.i("l.E"),t.aQ),t.P),$async$fQ)
case 3:n=n.h(0,"ir-stone")
p=n==null?c.hb():n
d.buffer=p
q=c
s=1
break
case 1:return A.bg(q,r)}})
return A.bh($async$fQ,r)},
e9:function e9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fR:function fR(a){this.a=a},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
h9:function h9(a){this.a=a},
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
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
hg:function hg(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=0
this.$ti=b},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
eD:function eD(a){this.a=a},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hQ:function hQ(a,b){this.a=a
this.b=b},
dl(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aL(a)
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
dk:function dk(a){this.a=a
this.b=0},
hW:function hW(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
i0:function i0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nW(a,b,c){var s,r,q,p,o,n,m,l,k,j=t.N,i=A.j([],t.s),h=new Float32Array(336e3),g=new Float32Array(67200),f=J.hv(800,t.cO)
for(s=0;s<800;++s)f[s]=new A.fn(new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0))
r=t.S
q=A.c_(800,0,!1,r)
p=new Float32Array(8064)
o=J.hv(4000,t.as)
for(s=0;s<4000;++s)o[s]=new A.fl(new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),0,1,0,0,0)
n=A.c_(4000,0,!1,r)
m=new A.i(0.3,0.7,-0.5).ga1()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.f1
k=new A.hX(a,new A.hf(a,A.r(t.m,r)),b,c,A.af(j),new A.eT(B.l,i,A.af(j)),h,g,f,q,p,A.r(r,t.er),o,n,m,B.b2,new A.i(0,0,0),new A.i(0,0,1),new A.i(0,1,0),new A.i(1,0,0),new A.eD(l),a,A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k))
k.fO(a,b,c)
return k},
hX:function hX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.a4=a
_.a8=b
_.al=c
_.am=d
_.cf=_.eC=1
_.cq=_.cp=_.eU=_.eT=_.eS=_.eR=_.eQ=_.eP=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.ci=_.eO=_.eN=_.eM=_.cg=_.eL=_.eK=_.eJ=_.eI=_.eH=_.eG=_.eF=_.eE=_.eD=_.V=$
_.b4=null
_.dI=e
_.e8=_.e7=_.e6=_.e5=_.e4=_.e3=_.e2=_.e1=_.e0=_.e_=_.dZ=_.dY=_.dX=_.dW=_.dV=_.dU=_.dT=_.dS=_.dR=_.dQ=_.dP=_.dO=_.dN=_.dM=_.dL=_.dK=_.dJ=_.b5=$
_.b6=0
_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=$
_.ba=_.b9=_.b8=_.b7=_.aH=_.ak=null
_.aI=$
_.eb=_.ea=_.e9=!1
_.ii=1
_.c_=f
_.c0=g
_.ij=h
_.ec=i
_.bb=0
_.ed=j
_.ik=k
_.c1=0
_.c2=l
_.il=1
_.c3=!1
_.aJ=0
_.c4=m
_.aK=0
_.ee=n
_.ef=o
_.ei=_.eh=_.eg=1
_.ej=0.55
_.c5=p
_.ek=q
_.c6=r
_.c7=s
_.c8=a0
_.el=_.cc=_.cb=_.ca=_.c9=0
_.em=null
_.en=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.ex=_.ce=_.cd=_.ew=_.ev=_.ip=_.io=_.im=_.eu=_.es=_.er=_.eq=_.ep=_.eo=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.ey=a7
_.ez=a8
_.eA=a9
_.eB=b0},
m9(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.T(0,c).b2(f.T(0,c)).ga1(),r=A.jj(g)
return A.mb(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
e3(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aL(a)
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
mb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.e3(a,A.e3(a,A.e3(a,A.e3(a,A.e3(a,A.e3(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
jj(a){return new A.cC((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
pa(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.eV(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.L(),i=A.L(),h=A.L()
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
s=B.d.ap(s*255)
r=i.av()
if(typeof r!=="number")return r.a_()
r=B.d.ap(r*255)
q=h.av()
if(typeof q!=="number")return q.a_()
return new A.cC(s,r,B.d.ap(q*255))},
dx:function dx(){},
fq:function fq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
fn:function fn(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
fl:function fl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
iy:function iy(){},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
f3(a,b,c){return new A.i(a,b,c)},
lp(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.i(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a){this.a=a},
nn(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.d1(new A.H(B.b5,t.aO.a(new A.h7(a)),t.bX),t.k)
return s==null?null:new A.cj(s)},
nm(a){if(a.a!==21)return null
if(a.e)return B.as
if(!a.d&&a.b>=0.6&&a.c>=3)return B.at
return B.ar},
aN:function aN(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cj:function cj(a){this.a=a},
h7:function h7(a){this.a=a},
nK(a){var s,r,q,p,o,n,m,l,k=null,j=t.f
if(!j.b(a))return k
s=a.h(0,"roomId")
r=a.h(0,"eye")
q=a.h(0,"yaw")
p=a.h(0,"pitch")
if(typeof s!="string"||!j.b(r)||typeof q!="number"||typeof p!="number")return k
o=r.h(0,"x")
n=r.h(0,"y")
m=r.h(0,"z")
if(typeof o!="number"||typeof n!="number"||typeof m!="number")return k
l=new A.eO(s,new A.i(o,n,m),q,p)
return isFinite(o)&&isFinite(n)&&isFinite(m)&&isFinite(q)&&isFinite(p)&&Math.abs(p)<=1.5707963267948966?l:k},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ld(a,b,c){var s=A.ke(b),r=A.ke(a)
if(c!==1)A.B(A.aV(c,"version","unsupported save version"))
return new A.cs(c,s,r)},
ke(a){var s,r,q,p,o=A.m(a).i("Z<1>"),n=A.aE(new A.Z(a,o),o.i("l.E"))
B.a.a2(n)
o=t.z
s=A.r(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.x)(n),++q){p=n[q]
s.k(0,p,A.lZ(a.h(0,p)))}return A.jP(s,t.N,o)},
lZ(a){var s
if(t.f.b(a))return A.ke(A.al(a,t.N,t.z))
if(t.j.b(a)){s=t.z
return A.bD(J.mT(a,A.qn(),s),s)}if(a==null||A.b3(a)||typeof a=="number"||typeof a=="string")return a
throw A.e(A.Y("save contains unsupported value "+J.kI(a).p(0),null,null))},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(){},
c3:function c3(a,b){this.a=a
this.b=b},
kU(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.az(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.e(B.aC)
r=e.h(0,"runSeed")
q=A.az(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.az(p)||p<1||typeof o!="number")throw A.e(B.aG)
if(!isFinite(480))throw A.e(A.aV(480,"daySeconds","must be finite and > 0"))
n=new A.eo(p,480)
if(!isFinite(o)||o<0||o>=24)A.B(A.Y("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.nD(a3,A.al(a,s,m))
k=A.n9(l,A.al(b,s,m),n)
j=A.kV(d)
A.nv(A.al(a0,s,m)).hU(j)
m=A.al(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.b3(f))A.B(B.au)
return new A.em(d,q,j,n,l,k,new A.ej(i,h,g,f),A.j([],t.gF))},
bV:function bV(a,b){this.a=a
this.b=b},
en:function en(){},
hc:function hc(a,b){this.a=a
this.b=b},
em:function em(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=1},
hd:function hd(a){this.a=a},
he:function he(){},
eb:function eb(a,b){this.a=a
this.b=b
this.d=null},
eE:function eE(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
d0:function d0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(){this.b=0},
i1:function i1(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kV(a4){var s,r,q,p=null,o="living-room",n="mantle-living",m="the mantle by the door",l="mantle-living-second",k="the mantle by the window",j="hall",i="kitchen",h="mantle-kitchen",g="mantle-bedroom",f="landing",e="landing-bathroom",d="bathroom",c="spare-room",b=t.bv,a=A.j([],b),a0=t.d6,a1=A.j([],a0),a2=A.j([],t.gd),a3=t.N
a3=new A.hj(a,a1,a2,A.r(a3,t.J),A.r(a3,t.ap),new A.hk())
s=t.E
r=t.s
q=t.h1
B.a.Y(a,A.j([new A.ai(o,new A.i(4.5,2.6,4),new A.i(0,0,0),A.j([new A.an("living-north-west",B.e,0.5,0.6,1.2,1.2),new A.an("living-north-east",B.e,2.7,0.6,1.2,1.2)],s),A.j(["hall-living","kitchen-living"],r),A.j([new A.as(n,m,new A.i(1,1.3,1),!1,n),new A.as(l,k,new A.i(3,1.3,3),!1,l)],q)),new A.ai(j,new A.i(2.5,2.6,7),new A.i(4.5,0,0),A.j([new A.an("hall-fanlight",B.e,0.85,2.15,0.8,0.35)],s),A.j(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.j([new A.as("mantle-hall","the hall mantle",new A.i(1,1.3,3.5),!1,p)],q)),new A.ai(i,new A.i(4.5,2.5,3),new A.i(0,0,4),A.j([new A.an("kitchen-south",B.h,1.5,0.7,1.2,1.1),new A.an("kitchen-west",B.q,1,0.8,0.9,1)],s),A.j(["hall-kitchen","kitchen-living"],r),A.j([new A.as(h,"the mantle by the stove",new A.i(0.8,1.2,0.5),!1,h),new A.as("mantle-kitchen-second",m,new A.i(2.2,1.2,2),!1,p),new A.as("mantle-kitchen-third",k,new A.i(3.8,1.2,1.2),!1,p)],q)),new A.ai("cellar",new A.i(4,2,4),new A.i(1,-2,2),B.a2,A.j(["hall-cellar"],r),B.b1),new A.ai("bedroom",new A.i(4.5,2.4,4),new A.i(0,2.8,0),A.j([new A.an("bedroom-north-west",B.e,0.7,0.7,1.1,1.1),new A.an("bedroom-north-east",B.e,2.7,0.7,1,1.1)],s),A.j(["landing-bedroom"],r),A.j([new A.as(g,"the bedroom mantle",new A.i(1,1.3,1),!1,g),new A.as("mantle-bedroom-bedside","the bedside mantle",new A.i(3.5,1,3),!1,p)],q)),new A.ai(f,new A.i(2.5,2.4,3),new A.i(4.5,2.8,0),B.a2,A.j(["hall-landing","landing-bedroom",e,"landing-spare"],r),A.j([new A.as("mantle-landing","the landing mantle",new A.i(1,1.2,1.5),!1,p)],q)),new A.ai(d,new A.i(2.5,2.4,2.5),new A.i(4.5,2.8,3),A.j([new A.an("bathroom-east",B.k,0.9,1,0.7,1)],s),A.j([e],r),A.j([new A.as("mantle-bathroom","the bathroom mantle",new A.i(1.5,1.2,1),!1,p)],q)),new A.ai(c,new A.i(4.5,2.1,3),new A.i(0,2.8,4),A.j([new A.an("spare-south",B.h,1.8,0.7,0.9,0.9)],s),A.j(["landing-spare"],r),A.j([new A.as("mantle-spare","the broken mantle",new A.i(2,1.3,1),!0,p)],q))],b))
B.a.Y(a1,A.j([A.bF(j,"outside",!0,B.e,B.h,2.1,"front-door",0.8,0,!0,!1,!1,0.9),A.bF(j,o,!1,B.q,B.k,2.1,"hall-living",1.8,1.8,!0,!1,!1,0.9),A.bF(j,i,!1,B.q,B.k,2.1,"hall-kitchen",4.9,1,!0,!1,!1,0.9),A.bF(i,o,!1,B.e,B.h,2.1,"kitchen-living",2,2,!0,!1,!1,0.9),A.bF(j,"cellar",!1,B.h,B.k,2,"hall-cellar",0.5,1.5,!1,!1,!0,0.9),A.bF(j,f,!1,B.k,B.k,2.1,"hall-landing",4,0.7,!0,!0,!1,1.2),A.bF(f,"bedroom",!1,B.q,B.k,2.1,"landing-bedroom",1,1,!0,!1,!1,0.9),A.bF(f,d,!1,B.h,B.e,2.1,e,1,0.8,!0,!1,!1,0.9),A.bF(f,c,!1,B.h,B.e,2.1,"landing-spare",0.1,2,!0,!1,!1,0.9)],a0))
B.a.m(a2,new A.eV(B.b4,new A.i(5.75,1.65,5.8),new A.i(5.75,4.45,2.2)))
a3.hc()
b=a.length
if(b!==8)A.B(A.a2("expected eight rooms, got "+b))
b=a3.gj6()
if(b!==9)A.B(A.a2("window discrepancy must be 9 inside / 11 outside"))
B.a.gcL(a2)
b=B.a.gG(B.a.gcL(a2).c)
if(b!==4.2)A.B(A.a2("stairs must expose landings at 1.4, 2.8 and 4.2"))
if(a1.length!==9)A.B(A.a2("expected nine physical portals"))
a3.hK()
a3.hJ()
return a3},
hj:function hj(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ho:function ho(){},
hn:function hn(){},
hp:function hp(a){this.a=a},
hq:function hq(){},
mu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.x)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.i(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gn(0)
if(g<0.01||g>3)continue
f=h.ga1()
j=a.b
if(Math.acos(B.d.a3(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
ql(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aO(c),r=J.M(s.a),s=new A.a9(r,s.b,s.$ti.i("a9<1>")),q=null,p=3;s.l();){o=r.gq()
n=b.iO(c,o)
m=a.a
l=new A.i(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gn(0)
if(!A.m3(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
qm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
m=A.pO(b,i,n)
l=a.a
k=new A.i(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gn(0)
if(!A.m3(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
m3(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.a3(a.ga1().i9(c.b),-1,1))<=e},
pO(a,b,c){var s=a.aG(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.i(q.a+r,p,q.c)
break
case 2:q=new A.i(q.a+r,p,q.c+s.c)
break
case 1:q=new A.i(q.a+s.a,p,q.c+r)
break
case 3:q=new A.i(q.a,p,q.c+r)
break
default:q=null}return q},
h8:function h8(){this.a=null
this.b=0},
i6:function i6(){},
i7:function i7(){},
b9:function b9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
bF(a,b,c,d,e,f,g,h,i,j,k,l,m){return new A.c2(g,a,b,d,e,h,i,m,f,l,k,j)},
by:function by(a,b){this.a=a
this.b=b},
an:function an(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=!0},
c2:function c2(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
as:function as(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=d
_.f=e
_.r=!1},
eV:function eV(a,b,c){this.c=a
this.f=b
this.r=c},
ai:function ai(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
nu(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.r(i,t.aw)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
h.k(0,p.a,new A.dg(p.at,p.ax))}s=A.r(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.x)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.x)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.r(i,t.e)
for(q=0;q<r.length;r.length===n||(0,A.x)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.x)(o),++l){j=o[l]
i.k(0,j.a,new A.d7(j.d,j.r))}return new A.ep(h,s,i,a.r.b)},
nv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.h(0,"portals"),e=a.h(0,"windows"),d=a.h(0,"mantles"),c=a.h(0,"driftLandedCount")
if(c==null)c=0
s=t.f
if(!s.b(f)||!s.b(e)||!s.b(d)||!A.az(c))throw A.e(B.aA)
r=t.N
q=A.r(r,t.aw)
for(p=f.gO(),p=p.gt(p),o=t.z;p.l();){n=p.gq()
m=n.a
if(typeof m!="string"||!s.b(n.b))throw A.e(B.X)
n=A.al(s.a(n.b),r,o)
l=n.h(0,"open")
k=n.h(0,"locked")
if(!A.b3(l)||!A.b3(k))A.B(B.X)
q.k(0,m,new A.dg(l,k))}j=A.r(r,t.y)
for(p=e.gO(),p=p.gt(p);p.l();){n=p.gq()
m=n.a
if(typeof m!="string"||!A.b3(n.b))throw A.e(B.ay)
j.k(0,m,A.ay(n.b))}i=A.r(r,t.e)
for(p=d.gO(),p=p.gt(p);p.l();){n=p.gq()
m=n.a
if(typeof m!="string"||!s.b(n.b))throw A.e(B.W)
n=A.al(s.a(n.b),r,o)
h=n.h(0,"lit")
g=n.h(0,"examined")
if(!A.b3(h)||!A.b3(g))A.B(B.W)
i.k(0,m,new A.d7(h,g))}return new A.ep(q,j,i,c)},
kq(a,b){return a.a.a===b.a&&a.ae(0,b.gdF(b))},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
nk(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.l6(e,A.V(e).c)
q=new A.dH()
q.cM((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.cZ(a,q,2,r,1+s,A.eC(["time"],t.N))
break
case 3:A.cZ(a,q,3,r,1+s,A.eC(["place"],t.N))
break
case 4:A.cZ(a,q,4,r,2+s,p)
A.ng(a,q,4)
break
case 5:A.cZ(a,q,5,r,s,p)
A.ne(a,q,5)
break
case 6:A.cZ(a,q,6,r,s,p)
A.nf(a,q)
A.nj(a,q,6)
break
case 7:A.nh(a,q,7)
break
default:if(s>0)A.cZ(a,q,b,r,s,p)}},
nd(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.B(0,b.a))return!1
if(A.ni(a,b,c))return!1
return!0},
cZ(a,b,c,d,e,f){var s,r,q,p,o=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(A.nd(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.bu(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.c(o,p)
A.kR(a,b,o[p],f)}},
kR(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.al(B.a.gG(o).a,n,n)
if(d==null)s=A.j(B.i.slice(0),t.s)
else{n=t.cc
s=A.aE(new A.H(B.i,t.bB.a(new A.h3(d)),n),n.i("l.E"))}n=s.length
if(n===0)return
n=b.a6(n)
if(!(n>=0&&n<s.length))return A.c(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.cK(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.a6(n)
if(!(n>=0&&n<p.length))return A.c(p,n)
m.k(0,r,p[n])}a.bS(c.a,m,B.a.gG(o).b)},
ng(a,b,c){var s=A.kS(a,b,c)
if(!a.aF(s))return
a.cT(c,t.G.a(s),0,B.E,null)},
kS(a,b,c){var s,r,q,p,o,n=t.N,m=A.r(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.i[s]
q=n.h(0,r)
if(q==null)q=B.m
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.a6(p)
if(!(o>=0&&o<p))return A.c(q,o)
m.k(0,r,q[o])}}return m},
ne(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.bu(i,b)
s=i.length
if(0>=s)return A.c(i,0)
q=i[0]
if(1>=s)return A.c(i,1)
p=i[1]
i=q.c
s=t.N
o=A.al(B.a.gG(i).a,s,s)
r=p.c
n=A.al(B.a.gG(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.i[m]
k=o.h(0,l)
j=s.cK(l,k==null?"":k)
k=j.length
if(k!==0){k=b.a6(k)
if(!(k>=0&&k<j.length))return A.c(j,k)
o.k(0,l,j[k])}}a.bS(q.a,o,B.a.gG(i).b)
a.bS(p.a,n,B.a.gG(r).b)},
nf(a,b){var s,r,q=A.j([],t.r)
for(s=a.b,r=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));r.l();)q.push(r.d)
r=q.length
if(r===0)return
r=b.a6(r)
if(!(r>=0&&r<q.length))return A.c(q,r)
s.aP(0,q[r].a)},
nj(a,b,c){var s,r,q=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.a6(s)
if(!(s>=0&&s<q.length))return A.c(q,s)
A.kR(a,b,q[s],null)},
nh(a,b,c){var s=c+1,r=A.kS(a,b,s)
if(!a.aF(r))return
a.cT(s,t.G.a(r),0,B.E,null)},
ni(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gG(b.c).c===B.w}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gG(b.c).c===B.w}if(c===21)return b.e
return!1},
h3:function h3(a){this.a=a},
od(a){var s,r,q,p,o=t.N,n=A.r(o,t.h)
for(s=0;s<5;++s){r=B.i[s]
q=a.h(0,r)
p=A.bC(q==null?B.m:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.iw(n)},
hI(a,b,c){var s,r,q,p=t.z
p=A.r(p,p)
for(s=0;s<5;++s){r=B.i[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.eB(A.jP(p,q,q),b,c)},
l2(a){var s=t.N
return A.hI(t.a.a(a.h(0,"fields")).az(0,new A.hJ(),s,s),A.fy(a.h(0,"shakiness")),A.np(B.aZ,A.y(a.h(0,"hand")),t.hh))},
no(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.j([],t.aW)
for(s=J.M(t.j.a(a.h(0,"revisions"))),r=t.a;s.l();)l.push(A.l2(r.a(s.gq())))
s=A.dZ(a.h(0,"corroborator"))
q=A.ay(a.h(0,"locked"))
p=A.lV(a.h(0,"lastReadDay"))
return new A.aC(n,m,l,s,q,p,o==null?null:A.l2(r.a(o)))},
bz:function bz(a,b){this.a=a
this.b=b},
iw:function iw(a){this.a=a},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
aC:function aC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l_(a){return new A.hx(a,A.r(t.S,t.L),A.af(t.N),A.j([],t.t))},
nD(a,b){var s,r,q,p,o=A.l_(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.Y(0,J.mR(s.a(b.h(0,"tags")),t.N))
for(s=J.M(s.a(b.h(0,"entries"))),r=t.a,q=o.b;s.l();){p=A.no(r.a(s.gq()))
q.k(0,p.a,p)}return o},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
hE:function hE(a,b){this.a=a
this.b=b},
kQ(a,b,c,d,e,f,g){var s=A.aE(f,t.ff)
if(b<0||a<0||e<0)A.B(A.Y("saved day-loop resources must not be negative",null,null))
return new A.fX(c,g,b,a,e,d===!0,s)},
n9(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.e(B.ax)
s=A.j([],t.ai)
for(r=J.M(a0),q=t.e2,p=t.aH,o=t.p,n=t.fq,m=t.aD,l=t.eq,k=t.f;r.l();){j=r.gq()
if(!k.b(j))throw A.e(B.aB)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.az(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.e(B.aw)
f=A.d1(new A.H(B.a0,q.a(new A.fY(h)),p),o)
e=A.d1(new A.H(B.a3,n.a(new A.fZ(g)),m),l)
if(f==null||e==null)throw A.e(B.aH)
B.a.m(s,new A.cu(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.az(d)||!A.az(c)||!A.az(b)||!A.b3(a))throw A.e(B.aD)
return A.kQ(c,d,a1,a,b,s,a3)},
au:function au(a,b){this.a=a
this.b=b},
am:function am(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
et:function et(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.b=a
this.c=b},
c7:function c7(a,b){this.a=a
this.b=b},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
hr:function hr(a){this.c=a},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(){},
ba:function ba(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
eo:function eo(a,b){this.a=a
this.b=6
this.c=b},
cw(a){var s,r,q=A.r(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.l();){r=s.gq()
q.k(0,B.c.p(r.a),r.b)}return q},
ia:function ia(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ib:function ib(){},
ic:function ic(){},
c6:function c6(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a,b){this.a=a
this.b=b},
ie:function ie(){var _=this
_.z=_.w=_.c=_.b=_.a=$},
ig:function ig(){},
ih:function ih(){},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
fT:function fT(a){this.a=a
this.b=null},
nc(a){var s=A.j([],t.W)
s=new A.h_(A.E(a,"div","door",null),s)
s.fK(a)
return s},
h_:function h_(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b},
nl(a){var s=new A.h5(a,A.b(a.createElement("div")))
s.aR(a)
s.fL(a)
return s},
h5:function h5(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h6:function h6(a){this.a=a},
nt(a){var s=new A.hh(a,A.b(a.createElement("div")))
s.aR(a)
s.fM(a)
return s},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hi:function hi(a){this.a=a},
hy:function hy(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(){},
hD:function hD(){},
E(a,b,c,d){var s=A.b(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
m0(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.j([],t.W)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.d(p.item(r))
if(s.b(q))B.a.m(o,q)}return o},
df:function df(){},
hV:function hV(a){this.a=a
this.b=null},
nY(a){var s=new A.i8(a,A.b(a.createElement("div")))
s.aR(a)
s.fQ(a)
return s},
i8:function i8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
mY(a){var s,r,q,p,o,n,m,l,k,j,i=A.j([],t.cy)
for(s=a.d,s=new A.K(s,A.m(s).i("K<1,2>")).gt(0),r=a.b;s.l();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gO(),n=n.gt(n),p+=":";n.l();){m=n.gq()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.m(i,new A.aT(p+m+":"+k,m,l.a,l.b,j))}}B.a.X(i,new A.fL())
return new A.fK(A.bD(i,t.c),A.af(t.N))},
aT:function aT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fK:function fK(a,b){this.a=a
this.b=b},
fM:function fM(){},
fL:function fL(){},
oc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.bO
s=t.g
r=A.r(s,t.fZ)
q=A.m(e).i("Z<1>")
p=A.aE(new A.Z(e,q),q.i("l.E"))
B.a.a2(p)
for(q=p.length,o=t.e0,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.x)(p),++l){k=p[l]
for(j=e.h(0,k).gO(),j=j.gt(j);j.l();){i=j.gq()
h=i.a
if(h<1||h>21)return new A.aw(new A.aH(B.bA,k+" has an out-of-range authored day "+h+"."))
g=A.ob(k,h,i.b,m)
if(g instanceof A.aw)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.k(0,new A.av(k,h,f.a,f.b),o.a(g).a)}}return new A.f8(new A.f7(r,A.af(t.N),A.af(s),A.j([],t.fo),B.y))},
ob(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.r(t.b,t.f6)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.h3,p=0;p<3;++p){o=B.a_[p]
n=o.b
m=n+"."
l=A.j([],q)
for(k=a0.gO(),k=k.gt(k),j=m.length;k.l();){i=k.gq()
h=i.a
if(!B.b.S(h,m))continue
g=A.hU(B.b.aQ(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.aw(new A.aH(B.bB,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.a1
B.a.m(l,new A.aP(g,i.b,f))}if(l.length===0)continue
B.a.X(l,new A.iq())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.aw(new A.aH(B.ae,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.aw(new A.aH(B.ae,a+" day "+s+" has no authored tiers."))
return new A.fm(c)},
f7:function f7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(){},
iq:function iq(){},
f8:function f8(a){this.a=a},
fm:function fm(a){this.a=a},
q_(a){var s,r,q,p=A.af(t.N)
for(s=new A.K(a,A.m(a).i("K<1,2>")).gt(0);s.l();){r=s.d
for(q=r.b.gag(),q=q.gt(q);q.l();)if(q.gq().gL().aj(0,new A.jo())){p.m(0,r.a)
break}}s=A.aE(p,p.$ti.c)
B.a.a2(s)
return s},
pZ(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.m
s=t.N
r=A.bC(b,!0,s)
B.a.a2(r)
q=new A.dH()
q.cM((a^913741)>>>0)
p=q.a6(4)
if(!(p>=0&&p<4))return A.c(B.Z,p)
o=B.Z[p]
n=r.length
n=o>n?n:o
if(n===0)return B.m
m=A.bC(r,!0,s)
B.a.bu(m,q)
s=A.jZ(m,0,A.cP(n,"count",t.S),A.V(m).c).fc(0)
B.a.a2(s)
return s},
jo:function jo(){},
lq(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.az(r)||!A.az(q)||!A.az(p)||r<1||q<0||q>23||p<0)return null
return new A.av(s,r,q,p)},
oa(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.af(t.N)
for(s=t.j,q=J.M(s.a(a.h(0,k)));q.l();){p=q.gq()
if(typeof p!="string")return i
r.m(0,p)}o=A.af(t.g)
for(s=J.M(s.a(a.h(0,j)));s.l();){n=A.lq(s.gq())
if(n==null)return i
o.m(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.mX(m)
if(!s&&l==null)return i
return new A.f9(r,o,l)},
mX(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.lq(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.az(p))if(!(p<0))if(A.b3(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.d1(new A.H(B.a_,t.aR.a(new A.fH(r)),t.dg),t.b)
k=A.d1(new A.H(B.b6,t.ci.a(new A.fI(q)),t.ew),t.gY)
m=o==null
j=m?h:A.d1(new A.H(B.aW,t.hc.a(new A.fJ(o)),t.ct),t.V)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.e6(s,l,k,p,j,n)},
ap:function ap(a,b){this.a=a
this.b=b},
aF:function aF(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
this.b=b},
bH:function bH(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bd:function bd(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(){},
e6:function e6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
iv:function iv(){},
aw:function aw(a){this.a=a},
f5:function f5(a){this.a=a},
f4:function f4(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
jv(){var s=0,r=A.bi(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$jv=A.bj(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b6=v.G
b7=A.d(A.b(b6.document).getElementById("game"))
if(b7==null){s=1
break}$.a3.b=b7
$.kj=A.d(A.b(b6.document).getElementById("fps"))
A.pb()
n=A.d(b7.getContext("webgl2"))
if(n==null){A.bM("no-webgl2")
j=A.d(A.b(b6.document).getElementById("credits"))
if(j!=null)j.textContent="this browser has no webgl2."
s=1
break}p=4
A.bM("initializing")
$.bt.b=new A.fV(new A.i(0,0,0),new A.i(0,0,1),new A.i(0,1,0),new A.i(1,0,0))
a2=$.bt.j()
a2.f=A.ay(A.b(A.b(b6.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)?0.5:1
a2=A.b(b6.window)
a3=t.N
a4=A.b(a2.document)
a5=new A.es(a4,A.af(a3),A.af(a3))
a2.addEventListener("keydown",A.a0(a5.ghh()))
a2.addEventListener("keyup",A.a0(a5.ghj()))
a2.addEventListener("mousemove",A.a0(a5.ghn()))
a4.addEventListener("pointerlockchange",A.a0(a5.ghl()))
$.aI.b=a5
$.lP.b=new A.eq(A.j([],t.cB),t.gO)
a5=$.a3.j()
a2=A.a(A.b(b6.window).innerWidth)>0?A.a(A.b(b6.window).innerWidth):800
a5.width=a2
a2=$.a3.j()
a4=A.a(A.b(b6.window).innerHeight)>0?A.a(A.b(b6.window).innerHeight):600
a2.height=a4
A.bM("renderer")
a4=$.cK=A.nW(n,A.a($.a3.j().width),A.a($.a3.j().height))
a2=A.k0().gbo().h(0,"render")
a5=A.k0().gbo().h(0,"render")
a6=A.k0().gbo().h(0,"render")
a4.e9=a2==="legacy"
a4.ea=a5==="legacy"
a4.eb=a6==="legacy"
A.bM("text")
a6=$.jN()
s=7
return A.ac(a6.aL(),$async$jv)
case 7:m=a6.j5()
l=A.oc(m)
if(!(l instanceof A.f8)){k=t.fQ.a(l).a
j=k.b
throw A.e("Failed to build visitors: "+j)}$.ab.b=l.a
$.fu.b=A.mY(m)
j=A.r(a3,t.h)
for(a2=t.j,a7=0;a7<5;++a7){i=B.i[a7]
a4=A.y(i)
a5=a6.c
a5===$&&A.f()
a8=a5.h(0,a4)
a4=a2.b(a8)?A.bC(a8,!0,a3):B.m
J.bO(j,i,a4)}h=A.od(j)
$.kc.b=new A.fU(B.aq)
g=$.kc.j().iQ(new A.jw(h))
if(g.a==null){j=B.P.a6(2147483647)
if(!isFinite(480))A.B(A.aV(480,"daySeconds","must be finite and > 0"))
a9=new A.eo(1,480)
a9.b=10
b0=A.l_(h)
j=new A.em(42,1+j,A.kV(42),a9,b0,A.kQ(6,16,b0,null,6,B.b_,a9),new A.ej(0,0,0,!1),A.j([],t.gF))}else{j=g.a
j.toString
j=A.kU(j,h)}$.T.b=j
if(g.b!=null){j=g.b
j.toString
A.cL(j)}j=$.ab.j()
a2=A.pZ($.T.j().b,A.q_(m.b))
j.sfD(A.l6(a2,A.V(a2).c))
A.bM("house")
$.a6.b=$.T.j().c
$.dY.b=$.T.j().d
a2=new A.i(5.5,1.65,3.5)
$.kv=$.ko=$.kt=a2
f=a2.T(0,new A.i(0,1.3499999999999999,0))
$.kb.b=new A.eb(f,J.kF(f,new A.i(0,1.2000000000000002,0)))
$.cG.b=new A.h8()
$.b1.b=new A.eT(B.l,A.j([],t.s),A.af(a3))
$.b2="hall"
a2=g.a
e=A.nK(a2==null?null:a2.c.h(0,"player"))
if(e!=null&&e.iy($.a6.j())){j=e.b
$.kv=$.ko=$.kt=j
$.bv=e.c
$.cM=e.d
$.b2=e.a
d=j.T(0,new A.i(0,1.3499999999999999,0))
j=$.kb.j()
j.shV(d)
j.b=J.kF(d,new A.i(0,1.2000000000000002,0))
A.cL("restored position")}j=$.T.j().e
a2=$.dY.j()
$.T.j()
$.fw.b=new A.ht(j,a2)
a2=A.b(b6.document)
j=$.T.j().e
a4=$.dY.j()
a5=$.fw.j()
a6=A.b(a2.createElement("div"))
a5=new A.hy(j,a4,a5,a2,a6)
a5.aR(a2)
A.b(a6.appendChild(A.E(a2,"div","journal-title","The Journal")))
b1=A.E(a2,"div","journal-pages",null)
a4=A.E(a2,"div","page page-left",null)
a5.y!==$&&A.o()
a5.y=a4
j=A.E(a2,"div","page page-right",null)
a5.z!==$&&A.o()
a5.z=j
A.b(b1.appendChild(a4))
A.b(b1.appendChild(j))
A.b(a6.appendChild(b1))
A.b(a6.appendChild(a5.fX()))
b2=A.E(a2,"div","tape-roll",null)
A.b(b2.style).setProperty("width","8rem")
j=A.E(a2,"div","tape-fill",null)
a5.as!==$&&A.o()
a5.as=j
A.b(b2.appendChild(j))
A.b(a6.appendChild(b2))
b3=A.E(a2,"div","consult",null)
A.b(b3.appendChild(A.E(a2,"div","consult-label","Cite an entry")))
j=A.E(a2,"div","entry-picker",null)
a5.at!==$&&A.o()
a5.at=j
a4=A.E(a2,"div","consult-result",null)
a5.ax!==$&&A.o()
a5.ax=a4
A.b(b3.appendChild(j))
A.b(b3.appendChild(a4))
A.b(a6.appendChild(b3))
b4=A.d(a2.documentElement)
if(t.m.b(b4)){A.b(b4.style).setProperty("--shake-max-deg","3deg")
A.b(b4.style).setProperty("--shake-max-px","2px")}$.cH.b=a5
$.cH.j().sbm(new A.jx())
j=A.b(b6.document)
a2=A.E(j,"div","prompt",null)
A.b(a2.style).setProperty("transition-duration","0.3s")
A.b(A.d(j.body).appendChild(a2))
$.lQ.b=new A.hV(a2)
a2=A.b(b6.document)
j=A.E(a2,"div","broadcast",null)
A.b(A.d(a2.body).appendChild(j))
$.lO.b=new A.fT(j)
j=A.b(b6.document)
a2=A.E(j,"div","ambient-notice",null)
A.b(A.d(j.body).appendChild(a2))
$.lN.b=new A.fN(a2)
a2=A.nc(A.b(b6.document))
a2.siI(A.qg())
a2.siK(A.qi())
a2.siJ(A.qh())
$.aa.b=a2
a2=g.a
c=A.oa(a2==null?null:a2.c.h(0,"visitors"))
if(c!=null&&$.ab.j().iV(c))A.py()
j=$.fu.j()
a2=g.a
j.iW(a2==null?null:a2.c.h(0,"ambient"))
j=A.nY(A.b(b6.document))
j.siM(new A.jy())
j.sbm(new A.jA())
$.fx.b=j
j=A.nt(A.b(b6.document))
j.sbm(new A.jB())
$.fv.b=j
j=A.nl(A.b(b6.document))
j.sbm(new A.jC())
j.siL(new A.jD())
$.ka.b=j
j=g.a
b=A.nn(j==null?null:j.c.h(0,"ending"))
if(b!=null)A.ma(b)
a=$.cK
if(a!=null){A.bM("world")
j=$.a6.j()
a2=a
a3=new A.i1(j,a2,A.r(a3,t.I))
a3.fP(j,a2)
$.kh=a3}j=B.b.B(A.y(A.b(A.b(b6.window).location).search),"shaders=live")
$.mj=j
if(j){j=$.cK
if(j!=null)j.aA()}A.mc()
A.b(b6.window).addEventListener("resize",A.a0(new A.jE()))
A.b(b6.window).addEventListener("keydown",A.a0(new A.jF()))
A.b(b6.window).addEventListener("keydown",A.a0(new A.jG()))
A.b(b6.window).addEventListener("click",A.a0(new A.jH()))
$.a3.j().addEventListener("click",A.a0(new A.jz()))
A.e2()
A.bM("raf")
A.a(A.b(b6.window).requestAnimationFrame(A.a0(A.mq())))
p=2
s=6
break
case 4:p=3
b8=o.pop()
a0=A.a4(b8)
a1=A.bw(b8)
A.jf(a0,a1)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bg(q,r)
case 2:return A.bf(o.at(-1),r)}})
return A.bh($async$jv,r)},
pb(){var s=v.G
A.b(s.window).addEventListener("error",A.a0(new A.jc()))
A.b(s.window).addEventListener("unhandledrejection",A.a0(new A.jd()))},
bM(a){if($.lX===a)return
$.lX=a
$.a3.j().setAttribute("data-boot-phase",a)},
kr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if($.b1.j().a!==B.l){A.cL("save unavailable during rupture")
return}try{r=$.kc.j()
q=$.T.j()
p=t.N
o=t.z
s=A.r(p,o)
J.bO(s,"player",new A.eO($.b2,$.e5(),$.bv,$.cM).A())
n=$.ab.j()
m=A.le(n.b,p)
l=A.le(n.c,t.g)
n=n.e
J.bO(s,"visitors",new A.f9(m,l,n==null?null:new A.e6(n.a,n.b,n.d,n.f,n.e,n.r)).A())
n=$.fu.j().b
n=A.aE(n,A.m(n).c)
B.a.a2(n)
J.bO(s,"ambient",n)
n=$.ki
if(n!=null)J.bO(s,"ending",A.O(["kind",n.a.b],p,p))
s=t.a.a(s)
n=q.a
m=q.b
l=A.nu(q.c).A()
k=q.d
j=B.D.ie(A.ld(s,A.O(["houseSeed",n,"runSeed",m,"house",l,"time",A.O(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.A(),"journal",q.e.A(),"difficulty",q.r.A()],p,o),1).A(),null)
r.a.dG(j)
i=A.b(A.b(v.G.window).localStorage)
h=A.dZ(i.getItem("quarantine.save.active"))
if(h!=null)i.setItem("quarantine.save.previous",h)
i.setItem("quarantine.save.active",j)
A.cL(a)}catch(g){A.cL("save failed")}},
cL(a){var s=v.G,r=A.d(A.b(s.document).getElementById("save-status"))
if(r==null)return
r.textContent=a
r.className="visible"
A.a(A.b(s.window).setTimeout(A.a0(new A.ji(r)),2400))},
jf(a,b){var s,r,q,p
A.bM("error")
s=A.w(a)
r=A.qp(s,"\n"," ")
s=$.kj
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.d(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.w(a):A.w(a)+"\n"+b.p(0)
$.a3.j().setAttribute("data-boot-error",p)
A.b(s.console).error(p)},
lS(){if($.kd)return
$.kd=!0
var s=$.e_
if(s!=null)s.fb()
B.a.m($.bL,"arm")},
e2(){var s=0,r=A.bi(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$e2=A.bj(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=null
q=3
s=6
return A.ac(A.b6(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$e2)
case 6:o=b
i=A
s=7
return A.ac(A.b6(A.b(o.json()),t.X),$async$e2)
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
return A.ac(A.kT(A.j([A.je(k),A.jb(k)],t.fG),t.H),$async$e2)
case 8:return A.bg(null,r)
case 1:return A.bf(p.at(-1),r)}})
return A.bh($async$e2,r)},
kg(a,b,c){var s,r,q
if(a==null)return
s=t.a6.a(v.G.Object.keys(a))
s=J.M(t.h.b(s)?s:new A.aW(s,A.V(s).i("aW<1,k>")))
while(s.l()){r=s.gq()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.y(q))}},
jb(a){var s=0,r=A.bi(t.H),q,p,o,n,m
var $async$jb=A.bj(function(b,c){if(b===1)return A.bf(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.r(n,n)
n=a==null
A.kg(A.d(n?null:a.sfx),m,"")
A.kg(A.d(n?null:a.ir),m,"ir-")
q=A.d(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.y(p))
s=2
return A.ac(A.fQ(m,$.a6.j()),$async$jb)
case 2:o=c
$.e_=o
if($.kd)o.fb()
return A.bg(null,r)}})
return A.bh($async$jb,r)},
je(a){var s=0,r=A.bi(t.H),q,p
var $async$je=A.bj(function(b,c){if(b===1)return A.bf(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.r(q,q)
A.kg(A.d(a==null?null:a.tex),p,"")
q=$.cK
q=q==null?null:q.aM(p)
s=2
return A.ac(q instanceof A.U?q:A.oi(q,t.H),$async$je)
case 2:return A.bg(null,r)}})
return A.bh($async$je,r)},
mc(){var s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.a(A.b(h.window).innerWidth),f=A.a(A.b(h.window).innerHeight)
h=$.a3.j()
s=g>0?g:800
h.width=s
s=$.a3.j()
h=f>0?f:600
s.height=h
h=$.cK
if(h!=null){s=A.a($.a3.j().width)
r=A.a($.a3.j().height)
h.al=s
h.am=r
h.cf=r/s
q=h.b5
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
m=h.ak
l=h.aH
k=h.b7
j=h.b8
i=h.b9
if(m!=null)h.a8.a9(m,s,r)
if(l!=null)h.a8.a9(l,s,r)
if(k!=null)h.a8.a9(k,h.gaU(),h.gaT())
if(j!=null)h.a8.a9(j,h.gaU(),h.gaT())
if(i!=null)h.a8.a9(i,s,r)}},
pv(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
A.fy(a4)
try{s=a4
if(!$.m2){$.km=s
$.m2=!0}i=s
h=$.km
if(typeof i!=="number")return i.T()
r=(i-h)/1000
$.km=s
i=r
if(typeof i!=="number")return i.bs()
if(i<0)r=0
i=r
if(typeof i!=="number")return i.R()
if(i>0.25)r=0.25
A.pL(r)
if(!$.kn){i=$.j7
h=r
if(typeof h!=="number")return A.fC(h)
h=$.j7=i+h
q=0
i=t.h0
for(;;){if(h>=0.008333333333333333){g=q
if(typeof g!=="number")return g.bs()
g=g<10}else g=!1
if(!g)break
$.ko=$.e5()
h=$.T.b
if(h===$.T)A.B(A.ar(""))
h.hR(0.008333333333333333)
A.pN()
h=$.ab.b
if(h===$.ab)A.B(A.ar(""))
g=$.T.b
if(g===$.T)A.B(A.ar(""))
h.f=g.r.c>=0.5
h=h.d
f=A.bC(h,!1,i)
f.$flags=3
e=f
B.a.I(h)
if(e.length!==0){h=$.T.b
if(h===$.T)A.B(A.ar(""))
h.iS(e)}A.pK()
A.pM()
A.pJ(0.008333333333333333)
h=$.cG.b
if(h===$.cG)A.B(A.ar(""))
if(h.a!=null)if((h.b-=0.008333333333333333)<=0)h.a=null
h=$.b1.b
if(h===$.b1)A.B(A.ar(""))
p=h.a!==B.l
g=$.a6.b
if(g===$.a6)A.B(A.ar(""))
h.hS(0.008333333333333333,g)
if(p){h=$.b1.b
if(h===$.b1)A.B(A.ar(""))
h=h.e}else h=!1
if(h)A.md(!0)
h=$.j7-0.008333333333333333
$.j7=h
g=q
if(typeof g!=="number")return g.Z()
q=g+1}o=B.d.a3(h/0.008333333333333333,0,1)
$.kv=A.lp($.mM(),$.e5(),o)
n=$.e_
if(n!=null){for(i=$.bL.length,d=0;d<$.bL.length;$.bL.length===i||(0,A.x)($.bL),++d){m=$.bL[d]
A.p4(n,m)}B.a.I($.bL)}}l=$.cK
if(l!=null){$.bt.j().f2($.kE(),$.bv,$.cM)
i=$.ax===$.cH.j()?1:0
l.b6=i
i=l
h=r
g=$.b1.j()
i.ef=A.qs($.dY.j().gbx()).ga1()
i.sf1(A.qr($.dY.j().gbx()))
c=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dY.j().gbx()))
i.ej=c<0?0:c
c=$.bt.j()
b=c.r+=h
a=0.025*c.f
c.a=c.a.Z(0,c.d.a_(0,(A.jM(b*0.28,1309)*2-1)*a)).Z(0,c.c.a_(0,(A.jM(c.r*0.28,2839)*2-1)*a))
c=$.bt.j()
i.ek=c.a
i.c6=c.b
i.c7=c.c
i.c8=c.d
a0=A.pa(0,0.25,0.11)
i.c9=a0.a
i.ca=a0.b
i.cb=a0.c
c=i.ba
a1=c==null?i.aH:c
if(a1==null)a1=i.ak
c=i.a8
c.ac(a1)
i.a4.depthMask(!0)
c.i1(a1,i.c9/255,i.ca/255,i.cb/255)
i.c1=i.bb=0
i.c3=!1
i.aJ=0
a2=$.kh
if(a2!=null)a2.ia($.b2,$.kE())
i.ir(h,g)
$.lP.j().cD(B.ao,h)}A.bM("running")
i=$.aI.j()
i.e=i.d=0
i.c.I(0)
A.a(A.b(v.G.window).requestAnimationFrame(A.a0(A.mq())))}catch(a3){k=A.a4(a3)
j=A.bw(a3)
A.jf(k,j)}},
p4(a,b){switch(b){case"arm":a.iN("confirm")
break
case"ambient-winnow":a.cv("winnow",0.28)
break
case"ambient-gate":a.cv("gate",0.22)
break}},
pL(a){var s=$.kj
if(s==null)return
s.textContent=""+B.d.ap(a>0?1/a:0)+" fps"},
pJ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if($.mg||$.ax!=null||$.aa.j().z){$.fE().a=new A.i(0,0,0)
return}s=$.aI.j().b
r=s.B(0,"KeyA")?-1:0
if(s.B(0,"KeyD"))++r
q=s.B(0,"KeyW")?1:0
p=new A.i(r,0,s.B(0,"KeyS")?q-1:q)
o=p.gn(0)>1?p.ga1():p
n=$.aI.j().d
m=$.aI.j().e
$.bv=$.bv+n*0.0028
s=$.cM-m*0.0028
$.cM=s
$.cM=B.d.a3(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.i(s*Math.cos($.bv)+l*Math.sin($.bv),0,l*Math.cos($.bv)-s*Math.sin($.bv)).ga1().a_(0,2)
s=$.fE()
if(!isFinite(a1)||a1<0)A.B(A.aV(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.B(A.aV(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.Z(0,k.T(0,i).a_(0,1-l))
s.a=l
h=$.kb.j().iG($.a6.j(),$.b2,$.e5(),l.a_(0,a1))
$.kt=h.a
if($.b1.j().a!==B.G&&$.b1.j().a!==B.x)$.b2=h.b
$.bt.j().f2($.e5(),$.bv,$.cM)
g=A.mu($.bt.j(),$.a6.j(),$.b2)
f=A.ql($.bt.j(),$.a6.j(),$.b2)
e=A.qm($.bt.j(),$.a6.j(),$.b2)
s=g!=null
if(s&&!g.e)d=g.b
else if(f!=null){l=f.at&&!f.ax&&!f.z?"close door":"open door"
d=l}else{l=e!=null?"the shutter":null
d=l}$.lQ.j().fq(d)
l=$.lO.j()
c=$.jN().fi($.T.j().gaq().a)
i=c==null?null:c.h(0,"status")
l.cD(i,$.b2==="living-room")
if($.aI.j().c.aP(0,"KeyE")){l=$.T.j().gaq()
i=f==null
b=i?null:f.a
a=B.a.ae($.ab.j().dC(21),$.ab.j().giz())
if(l.a===21&&b==="front-door"&&a){$.b1.j().fE($.a6.j())
B.a.m($.bL,"collapse")
A.cL("the front door opens on itself")}else if(s&&!g.e){if(g.d)g.d=!1
else if($.T.j().fC(1,1)){g.d=!0
s=$.cG.j()
s.a=g
s.b=2
if(g.f!=null)g.r=!0}}else if(!i&&!f.z&&!f.ax){f.at=!f.at
s=$.e_
if(s!=null)s.bO()}else if(e!=null)if(e.w){s=$.T.j()
if(s.f.bv(1))e.w=!1}else e.w=!0}s=$.cG.j()
if(s.a!=null&&s.b>0){a0=$.cG.j().a
if(a0!=null&&A.mu($.bt.j(),$.a6.j(),$.b2)!==a0){s=$.cG.j()
s.a=null
s.b=0}}},
pN(){var s,r,q,p,o,n,m,l,k,j=null
if($.aa.j().z||$.ax!=null||$.ab.j().e!=null)return
s=$.T.j().gaq()
for(r=$.ab.j().dC(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.x)(r),++o){n=r[o]
m=$.ab.b
if(m===$.ab)A.B(A.ar(""))
if(m.c.B(0,n)||p<n.c)continue
r=$.ab.b
if(r===$.ab)A.B(A.ar(""))
l=r.hW(n)
if(!(l instanceof A.f5))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.c(r,q)
k=r[q].b}else k=j
if(k==null)return
A.kY(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.fE().a=new A.i(0,0,0)
r=$.aa.b
if(r===$.aa)A.B(A.ar(""))
r.cJ(n.a,k)
return}},
py(){var s=$.ab.j().e,r=s==null,q=r?null:s.gb3()
if(r||q==null)return
$.aa.j().cJ(s.a.a,q)
if(s.d!==B.o){$.aa.j().bt(q)
A.ks()}A.cL("restored visitor")},
pK(){var s,r,q,p,o=$.T.j().gaq(),n=$.fu.j().ic(o.a,o.b)
if(n.length===0)return
s=B.a.gbc(n)
$.fu.j().b.m(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.lN.j().fs(q,s.e)
p=A.pP(r)
if(p!=null)B.a.m($.bL,"ambient-"+p)},
md(a){var s,r,q,p,o
if($.ki!=null)return
s=$.T.j().gaq()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.m(q).i("aY<2>")
o=A.nm(new A.h4(s.a,1-r,new A.H(new A.aY(q,p),p.i("q(l.E)").a(new A.jg()),p.i("H<l.E>")).gn(0),$.T.j().r.d,a))
if(o==null)return
A.ma(o)
A.kr("ending recorded")},
ma(a){var s,r,q
$.ki=a
$.mg=!0
$.fE().a=new A.i(0,0,0)
$.ax=$.ka.j()
s=$.ka.j()
r=$.jN().w
r===$&&A.f()
q=r.h(0,a.a.b)
s.fu(a,t.j.b(q)?A.bC(q,!0,t.N):B.m)},
p_(a){var s,r,q,p,o
A:{if("open"===a){s=B.v
break A}if("chain"===a){s=B.Q
break A}if("through-door"===a){s=B.R
break A}if("letterbox"===a){s=B.S
break A}s=B.p
break A}r=$.ab.j().i_(s)
if(s===B.v){q=$.a6.j().f.h(0,"front-door")
if(q!=null){q.at=!0
p=$.e_
if(p!=null)p.bO()}}if(!(r instanceof A.f4)||s===B.p){$.aa.j().bd()
$.aI.j().af($.a3.j())
return}o=r.a.gb3()
if(o==null){A.kf()
$.aa.j().bd()
$.aI.j().af($.a3.j())
return}$.aa.j().bt(o)
A.ks()},
p1(){var s,r=$.ab.j().hT()
if(!(r instanceof A.dq)||r.b){A.kf()
$.aa.j().bd()
$.aI.j().af($.a3.j())
return}s=r.a.gb3()
if(s==null){A.kf()
$.aa.j().bd()
$.aI.j().af($.a3.j())
return}$.aa.j().bt(s)
A.ks()},
ks(){var s,r,q,p,o=$.aa.j(),n=A.b(v.G.document),m=A.j([],t.ek)
for(s=$.fw.j().cH(),r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
m.push(new A.dI(p.a,B.a.gG(p.c).p(0)))}o.ft(n,m)},
p0(a){var s,r,q,p=$.ab.j().i0(a,!0,$.fw.j())
if(p==null)return
s=$.fw.j().i6(p,B.aP)
r=$.aa.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.f()
r.textContent=q},
kf(){var s,r=$.a6.j().f.h(0,"front-door")
if(r!=null&&r.at){r.at=!1
s=$.e_
if(s!=null)s.bO()}},
pM(){var s,r,q,p,o,n,m,l,k
for(s=$.a6.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.b1.b
if(k===$.b1)A.B(A.ar(""))
if(k.d.B(0,n+m)){l.d=!1
continue}}}},
jw:function jw(a){this.a=a},
jx:function jx(){},
jy:function jy(){},
jA:function jA(){},
jB:function jB(){},
jC:function jC(){},
jD:function jD(){},
jE:function jE(){},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
jz:function jz(){},
jc:function jc(){},
jd:function jd(){},
ji:function ji(a){this.a=a},
jg:function jg(){},
kY(a,b,c,d,e,f){var s=a[b]()
return s},
kZ(a,b,c){var s=null
return c.a(A.kY(a,b,s,s,s,s))},
nb(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
na(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
mp(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
jM(a,b){var s=B.d.eV(a),r=A.mp(s,b),q=A.mp(s+1,b),p=B.d.a3(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
pP(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
qs(a){var s,r,q,p
if(a===0)return new A.i(0,0,1)
s=1.2217304763960306*Math.sin(3.141592653589793*a)
r=(30+(1-a)*180)*3.141592653589793/180
q=Math.sin(s)
p=Math.cos(s)
return new A.i(p*Math.cos(r),q,p*Math.sin(r)).ga1()},
qr(a){var s,r,q,p,o,n,m
if(a===0)return 4491468
s=A.L()
r=A.L()
q=A.L()
if(a<0.5){p=a*2
s.b=B.d.W(68+187*p)
r.b=B.d.W(136+119*p)
q.b=B.d.W(204+51*p)}else{p=(a-0.5)*2
s.b=B.d.W(255+0*p)
r.b=B.d.W(255+-68*p)
q.b=B.d.W(255+-170*p)}o=s.av()
if(typeof o!=="number")return o.fp()
n=r.av()
if(typeof n!=="number")return n.fp()
m=q.av()
if(typeof m!=="number")return A.fC(m)
return(o<<16|n<<8|m)>>>0},
pX(a){var s,r,q,p,o,n,m,l=B.D.dH(a,null),k=t.f
if(!k.b(l))throw A.e(B.aF)
s=t.N
r=t.z
q=A.al(l,s,r)
p=A.r(s,t.a)
for(o=0;o<11;++o){n=B.aX[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.r(s,r))
else if(k.b(m))p.k(0,n,A.al(m,s,r))
else throw A.e(A.Y('text.json section "'+n+'" must be an object',null,null))}return p}},B={}
var w=[A,J,B]
var $={}
A.jT.prototype={}
J.eu.prototype={
P(a,b){return a===b},
gD(a){return A.eP(a)},
p(a){return"Instance of '"+A.eQ(a)+"'"},
gF(a){return A.bk(A.kk(this))}}
J.ew.prototype={
p(a){return String(a)},
gD(a){return a?519018:218159},
gF(a){return A.bk(t.y)},
$iG:1,
$iq:1}
J.d3.prototype={
P(a,b){return null==b},
p(a){return"null"},
gD(a){return 0},
$iG:1,
$iP:1}
J.d4.prototype={$iC:1}
J.bA.prototype={
gD(a){return 0},
gF(a){return B.bo},
p(a){return String(a)}}
J.eN.prototype={}
J.c4.prototype={}
J.bm.prototype={
p(a){var s=a[$.mx()]
if(s==null)s=a[$.cS()]
if(s==null)return this.fG(a)
return"JavaScript function for "+J.cT(s)},
$ibU:1}
J.cl.prototype={
gD(a){return 0},
p(a){return String(a)}}
J.cm.prototype={
gD(a){return 0},
p(a){return String(a)}}
J.p.prototype={
b1(a,b){return new A.aW(a,A.V(a).i("@<1>").v(b).i("aW<1,2>"))},
m(a,b){A.V(a).c.a(b)
a.$flags&1&&A.aL(a,29)
a.push(b)},
Y(a,b){var s
A.V(a).i("l<1>").a(b)
a.$flags&1&&A.aL(a,"addAll",2)
if(Array.isArray(b)){this.fU(a,b)
return}for(s=J.M(b);s.l();)a.push(s.gq())},
fU(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.e(A.a5(a))
for(r=0;r<s;++r)a.push(b[r])},
I(a){a.$flags&1&&A.aL(a,"clear","clear")
a.length=0},
aN(a,b,c){var s=A.V(a)
return new A.at(a,s.v(c).i("1(2)").a(b),s.i("@<1>").v(c).i("at<1,2>"))},
bj(a,b){var s,r=A.c_(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
eW(a,b,c,d){var s,r,q
d.a(b)
A.V(a).v(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.e(A.a5(a))}return r},
K(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
gbc(a){if(a.length>0)return a[0]
throw A.e(A.jR())},
gG(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.jR())},
gcL(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.e(A.jR())
throw A.e(A.nz())},
aj(a,b){var s,r
A.V(a).i("q(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.e(A.a5(a))}return!1},
ae(a,b){var s,r
A.V(a).i("q(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.e(A.a5(a))}return!0},
X(a,b){var s,r,q,p,o,n=A.V(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.aL(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.pg()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.R()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.cQ(b,2))
if(p>0)this.hx(a,p)},
a2(a){return this.X(a,null)},
hx(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bu(a,b){var s,r,q,p
a.$flags&2&&A.aL(a,"shuffle")
s=a.length
while(s>1){r=b.a6(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
be(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.X(a[s],b))return s}return-1},
B(a,b){var s
for(s=0;s<a.length;++s)if(J.X(a[s],b))return!0
return!1},
gC(a){return a.length===0},
gE(a){return a.length!==0},
p(a){return A.jS(a,"[","]")},
gt(a){return new J.bP(a,a.length,A.V(a).i("bP<1>"))},
gD(a){return A.eP(a)},
gn(a){return a.length},
sn(a,b){a.$flags&1&&A.aL(a,"set length","change the length of")
if(b<0)throw A.e(A.ah(b,0,null,"newLength",null))
if(b>a.length)A.V(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.e(A.jm(a,b))
return a[b]},
k(a,b,c){A.V(a).c.a(c)
a.$flags&2&&A.aL(a)
if(!(b>=0&&b<a.length))throw A.e(A.jm(a,b))
a[b]=c},
cG(a,b){return new A.b_(a,b.i("b_<0>"))},
gF(a){return A.bk(A.V(a))},
$it:1,
$il:1,
$iu:1}
J.ev.prototype={
j2(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.eQ(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.hw.prototype={}
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
$iN:1}
J.bW.prototype={
J(a,b){var s
A.fy(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbi(b)
if(this.gbi(a)===s)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi(a){return a===0?1/a<0:a<0},
W(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.a8(""+a+".toInt()"))},
hZ(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.a8(""+a+".ceil()"))},
eV(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.a8(""+a+".floor()"))},
ap(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.a8(""+a+".round()"))},
a3(a,b,c){if(this.J(b,c)>0)throw A.e(A.kw(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
cC(a,b){var s
if(b>20)throw A.e(A.ah(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+s
return s},
j0(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.e(A.ah(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.c(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.B(A.a8("Unexpected toString result: "+s))
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
return this.dq(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.dq(a,b)},
dq(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.a8("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
bM(a,b){var s
if(a>0)s=this.dm(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hB(a,b){if(0>b)throw A.e(A.kw(b))
return this.dm(a,b)},
dm(a,b){return b>31?0:a>>>b},
gF(a){return A.bk(t.o)},
$iaX:1,
$in:1,
$iak:1}
J.d2.prototype={
gF(a){return A.bk(t.S)},
$iG:1,
$ih:1}
J.ex.prototype={
gF(a){return A.bk(t.i)},
$iG:1}
J.bX.prototype={
aB(a,b,c,d){var s=A.dh(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
M(a,b,c){var s
if(c<0||c>a.length)throw A.e(A.ah(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.M(a,b,0)},
u(a,b,c){return a.substring(b,A.dh(b,c,a.length))},
aQ(a,b){return this.u(a,b,null)},
a_(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.ap)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bf(a,b,c){var s
if(c<0||c>a.length)throw A.e(A.ah(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
be(a,b){return this.bf(a,b,0)},
B(a,b){return A.qo(a,b,0)},
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
gF(a){return A.bk(t.N)},
gn(a){return a.length},
$iG:1,
$iaX:1,
$il7:1,
$ik:1}
A.bI.prototype={
gt(a){return new A.cU(J.M(this.gai()),A.m(this).i("cU<1,2>"))},
gn(a){return J.aM(this.gai())},
gC(a){return J.kH(this.gai())},
gE(a){return J.mS(this.gai())},
K(a,b){return A.m(this).y[1].a(J.fG(this.gai(),b))},
p(a){return J.cT(this.gai())}}
A.cU.prototype={
l(){return this.a.l()},
gq(){return this.$ti.y[1].a(this.a.gq())},
$iN:1}
A.bQ.prototype={
gai(){return this.a}}
A.dw.prototype={$it:1}
A.dv.prototype={
h(a,b){return this.$ti.y[1].a(J.ao(this.a,b))},
k(a,b,c){var s=this.$ti
J.bO(this.a,b,s.c.a(s.y[1].a(c)))},
sn(a,b){J.mU(this.a,b)},
m(a,b){var s=this.$ti
J.fF(this.a,s.c.a(s.y[1].a(b)))},
X(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.iE(this,b)
J.mV(this.a,s)},
$it:1,
$iu:1}
A.iE.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.aW.prototype={
b1(a,b){return new A.aW(this.a,this.$ti.i("@<1>").v(b).i("aW<1,2>"))},
gai(){return this.a}}
A.bY.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.ee.prototype={
gn(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.i4.prototype={}
A.t.prototype={}
A.ag.prototype={
gt(a){var s=this
return new A.bZ(s,s.gn(s),A.m(s).i("bZ<ag.E>"))},
gC(a){return this.gn(this)===0},
aj(a,b){var s,r,q=this
A.m(q).i("q(ag.E)").a(b)
s=q.gn(q)
for(r=0;r<s;++r){if(b.$1(q.K(0,r)))return!0
if(s!==q.gn(q))throw A.e(A.a5(q))}return!1},
bj(a,b){var s,r,q,p=this,o=p.gn(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.K(0,0))
if(o!==p.gn(p))throw A.e(A.a5(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.K(0,q))
if(o!==p.gn(p))throw A.e(A.a5(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.K(0,q))
if(o!==p.gn(p))throw A.e(A.a5(p))}return r.charCodeAt(0)==0?r:r}},
cF(a,b){return this.fF(0,A.m(this).i("q(ag.E)").a(b))},
aN(a,b,c){var s=A.m(this)
return new A.at(this,s.v(c).i("1(ag.E)").a(b),s.i("@<ag.E>").v(c).i("at<1,2>"))},
j1(a){var s,r=this,q=A.jV(A.m(r).i("ag.E"))
for(s=0;s<r.gn(r);++s)q.m(0,r.K(0,s))
return q}}
A.dm.prototype={
gh4(){var s=J.aM(this.a),r=this.c
if(r==null||r>s)return s
return r},
ghF(){var s=J.aM(this.a),r=this.b
if(r>s)return s
return r},
gn(a){var s,r=J.aM(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
K(a,b){var s=this,r=s.ghF()+b
if(b<0||r>=s.gh4())throw A.e(A.hs(b,s.gn(0),s,"index"))
return J.fG(s.a,r)},
j_(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.b5(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.kX(0,n):J.kW(0,n)}r=A.c_(s,m.K(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.K(n,o+q))
if(m.gn(n)<l)throw A.e(A.a5(p))}return r},
fc(a){return this.j_(0,!0)}}
A.bZ.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.b5(q),o=p.gn(q)
if(r.b!==o)throw A.e(A.a5(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.K(q,s);++r.c
return!0},
$iN:1}
A.bn.prototype={
gt(a){return new A.c0(J.M(this.a),this.b,A.m(this).i("c0<1,2>"))},
gn(a){return J.aM(this.a)},
gC(a){return J.kH(this.a)},
K(a,b){return this.b.$1(J.fG(this.a,b))}}
A.bT.prototype={$it:1}
A.c0.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gq())
return!0}s.a=null
return!1},
gq(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iN:1}
A.at.prototype={
gn(a){return J.aM(this.a)},
K(a,b){return this.b.$1(J.fG(this.a,b))}}
A.H.prototype={
gt(a){return new A.a9(J.M(this.a),this.b,this.$ti.i("a9<1>"))}}
A.a9.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iN:1}
A.b_.prototype={
gt(a){return new A.ds(J.M(this.a),this.$ti.i("ds<1>"))}}
A.ds.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())},
$iN:1}
A.Q.prototype={
sn(a,b){throw A.e(A.a8("Cannot change the length of a fixed-length list"))},
m(a,b){A.aR(a).i("Q.E").a(b)
throw A.e(A.a8("Cannot add to a fixed-length list"))}}
A.bc.prototype={
k(a,b,c){A.m(this).i("bc.E").a(c)
throw A.e(A.a8("Cannot modify an unmodifiable list"))},
sn(a,b){throw A.e(A.a8("Cannot change the length of an unmodifiable list"))},
m(a,b){A.m(this).i("bc.E").a(b)
throw A.e(A.a8("Cannot add to an unmodifiable list"))},
X(a,b){A.m(this).i("h(bc.E,bc.E)?").a(b)
throw A.e(A.a8("Cannot modify an unmodifiable list"))}}
A.cx.prototype={}
A.dX.prototype={}
A.dI.prototype={$r:"+(1,2)",$s:1}
A.cC.prototype={$r:"+(1,2,3)",$s:2}
A.dJ.prototype={$r:"+(1,2,3,4)",$s:3}
A.cW.prototype={}
A.cV.prototype={
gC(a){return this.gn(this)===0},
gE(a){return this.gn(this)!==0},
p(a){return A.jW(this)},
k(a,b,c){var s=A.m(this)
s.c.a(b)
s.y[1].a(c)
A.n6()},
gO(){return new A.cD(this.ih(),A.m(this).i("cD<A<1,2>>"))},
ih(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
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
az(a,b,c,d){var s=A.r(c,d)
this.a0(0,new A.fW(this,A.m(this).v(c).v(d).i("A<1,2>(3,4)").a(b),s))
return s},
$iD:1}
A.fW.prototype={
$2(a,b){var s=A.m(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.b7.prototype={
gn(a){return this.b.length},
gd6(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
N(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.N(b))return null
return this.b[this.a[b]]},
a0(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gd6()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gL(){return new A.cb(this.gd6(),this.$ti.i("cb<1>"))},
gag(){return new A.cb(this.b,this.$ti.i("cb<2>"))}}
A.cb.prototype={
gn(a){return this.a.length},
gC(a){return 0===this.a.length},
gE(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.cc(s,s.length,this.$ti.i("cc<1>"))}}
A.cc.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iN:1}
A.cX.prototype={
m(a,b){A.m(this).c.a(b)
A.n7()}}
A.cY.prototype={
gn(a){return this.b},
gC(a){return this.b===0},
gE(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.cc(s,s.length,r.$ti.i("cc<1>"))},
B(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.di.prototype={}
A.ii.prototype={
a5(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.de.prototype={
p(a){return"Null check operator used on a null value"}}
A.ey.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.f_.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hS.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.d_.prototype={}
A.dL.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibb:1}
A.bx.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mw(r==null?"unknown":r)+"'"},
gF(a){var s=A.ky(this)
return A.bk(s==null?A.aR(this):s)},
$ibU:1,
gj9(){return this},
$C:"$1",
$R:1,
$D:null}
A.ec.prototype={$C:"$0",$R:0}
A.ed.prototype={$C:"$2",$R:2}
A.eY.prototype={}
A.eW.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mw(s)+"'"}}
A.ci.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ci))return!1
return this.$_target===b.$_target&&this.a===b.a},
gD(a){return(A.jJ(this.a)^A.eP(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eQ(this.a)+"'")}}
A.eS.prototype={
p(a){return"RuntimeError: "+this.a}}
A.b8.prototype={
gn(a){return this.a},
gC(a){return this.a===0},
gE(a){return this.a!==0},
gL(){return new A.Z(this,A.m(this).i("Z<1>"))},
gag(){return new A.aY(this,A.m(this).i("aY<2>"))},
gO(){return new A.K(this,A.m(this).i("K<1,2>"))},
N(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.iu(a)},
iu(a){var s=this.d
if(s==null)return!1
return this.bh(s[this.bg(a)],a)>=0},
Y(a,b){A.m(this).i("D<1,2>").a(b).a0(0,new A.hF(this))},
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
s=q[this.bg(a)]
r=this.bh(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.m(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.cN(s==null?q.b=q.bI():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cN(r==null?q.c=q.bI():r,b,c)}else q.ix(b,c)},
ix(a,b){var s,r,q,p,o=this,n=A.m(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.bI()
r=o.bg(a)
q=s[r]
if(q==null)s[r]=[o.by(a,b)]
else{p=o.bh(q,a)
if(p>=0)q[p].b=b
else q.push(o.by(a,b))}},
iP(a,b){var s,r,q=this,p=A.m(q)
p.c.a(a)
p.i("2()").a(b)
if(q.N(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
aP(a,b){if((b&0x3fffffff)===b)return this.fS(this.c,b)
else return this.iw(b)},
iw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bg(a)
r=n[s]
q=o.bh(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.cP(p)
if(r.length===0)delete n[s]
return p.b},
a0(a,b){var s,r,q=this
A.m(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.a5(q))
s=s.c}},
cN(a,b,c){var s,r=A.m(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.by(b,c)
else s.b=c},
fS(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.cP(s)
delete a[b]
return s.b},
cO(){this.r=this.r+1&1073741823},
by(a,b){var s=this,r=A.m(s),q=new A.hL(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cO()
return q},
cP(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cO()},
bg(a){return J.aB(a)&1073741823},
bh(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.X(a[r].a,b))return r
return-1},
p(a){return A.jW(this)},
bI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$il3:1}
A.hF.prototype={
$2(a,b){var s=this.a,r=A.m(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.m(this.a).i("~(1,2)")}}
A.hL.prototype={}
A.Z.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bB(s,s.r,s.e,this.$ti.i("bB<1>"))}}
A.bB.prototype={
gq(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.a5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iN:1}
A.aY.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gt(a){var s=this.a
return new A.a_(s,s.r,s.e,this.$ti.i("a_<1>"))}}
A.a_.prototype={
gq(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.a5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iN:1}
A.K.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gt(a){var s=this.a
return new A.d6(s,s.r,s.e,this.$ti.i("d6<1,2>"))}}
A.d6.prototype={
gq(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.a5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.A(s.a,s.b,r.$ti.i("A<1,2>"))
r.c=s.c
return!0}},
$iN:1}
A.jr.prototype={
$1(a){return this.a(a)},
$S:5}
A.js.prototype={
$2(a,b){return this.a(a,b)},
$S:44}
A.jt.prototype={
$1(a){return this.a(A.y(a))},
$S:9}
A.b0.prototype={
gF(a){return A.bk(this.d4())},
d4(){return A.q1(this.$r,this.aX())},
p(a){return this.du(!1)},
du(a){var s,r,q,p,o,n=this.h9(),m=this.aX(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.l9(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
h9(){var s,r=this.$s
while($.iX.length<=r)B.a.m($.iX,null)
s=$.iX[r]
if(s==null){s=this.fZ()
B.a.k($.iX,r,s)}return s},
fZ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.hv(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.bD(j,k)}}
A.cz.prototype={
aX(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.cz&&this.$s===b.$s&&J.X(this.a,b.a)&&J.X(this.b,b.b)},
gD(a){return A.cp(this.$s,this.a,this.b,B.f)}}
A.cA.prototype={
aX(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.cA&&s.$s===b.$s&&J.X(s.a,b.a)&&J.X(s.b,b.b)&&J.X(s.c,b.c)},
gD(a){var s=this
return A.cp(s.$s,s.a,s.b,s.c)}}
A.cB.prototype={
aX(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.cB&&this.$s===b.$s&&A.os(this.a,b.a)},
gD(a){return A.cp(this.$s,A.nJ(this.a),B.f,B.f)}}
A.iF.prototype={
av(){var s=this.b
if(s===this)throw A.e(new A.bY("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.e(A.ar(""))
return s}}
A.bE.prototype={
gF(a){return B.bh},
dD(a,b,c){return new Float32Array(a,b,c)},
$iG:1,
$ibE:1}
A.co.prototype={$ico:1}
A.db.prototype={
ghY(a){if(((a.$flags|0)&2)!==0)return new A.j2(a.buffer)
else return a.buffer},
hf(a,b,c,d){var s=A.ah(b,0,c,d,null)
throw A.e(s)},
cY(a,b,c,d){if(b>>>0!==b||b>c)this.hf(a,b,c,d)}}
A.j2.prototype={
dD(a,b,c){var s=A.nH(this.a,b,c)
s.$flags=3
return s}}
A.eF.prototype={
gF(a){return B.bi},
$iG:1}
A.a7.prototype={
gn(a){return a.length},
dl(a,b,c,d,e){var s,r,q=a.length
this.cY(a,b,q,"start")
this.cY(a,c,q,"end")
if(b>c)throw A.e(A.ah(b,0,c,null,null))
s=c-b
if(e<0)throw A.e(A.ad(e,null))
r=d.length
if(r-e<s)throw A.e(A.a2("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaD:1}
A.d9.prototype={
h(a,b){A.bu(b,a,a.length)
return a[b]},
k(a,b,c){A.lT(c)
a.$flags&2&&A.aL(a)
A.bu(b,a,a.length)
a[b]=c},
fm(a,b,c,d){t.bM.a(d)
a.$flags&2&&A.aL(a,5)
this.dl(a,b,c,d,0)
return},
$it:1,
$il:1,
$iu:1}
A.da.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.aL(a)
A.bu(b,a,a.length)
a[b]=c},
fn(a,b,c,d,e){t.hb.a(d)
a.$flags&2&&A.aL(a,5)
this.dl(a,b,c,d,e)
return},
$it:1,
$il:1,
$iu:1}
A.d8.prototype={
gF(a){return B.bj},
bw(a,b,c){return new Float32Array(a.subarray(b,A.oZ(b,c,a.length)))},
$iG:1,
$ijQ:1}
A.eG.prototype={
gF(a){return B.bk},
$iG:1}
A.eH.prototype={
gF(a){return B.bl},
h(a,b){A.bu(b,a,a.length)
return a[b]},
$iG:1}
A.eI.prototype={
gF(a){return B.bm},
h(a,b){A.bu(b,a,a.length)
return a[b]},
$iG:1}
A.eJ.prototype={
gF(a){return B.bn},
h(a,b){A.bu(b,a,a.length)
return a[b]},
$iG:1}
A.eK.prototype={
gF(a){return B.bq},
h(a,b){A.bu(b,a,a.length)
return a[b]},
$iG:1}
A.eL.prototype={
gF(a){return B.br},
h(a,b){A.bu(b,a,a.length)
return a[b]},
$iG:1}
A.dc.prototype={
gF(a){return B.bs},
gn(a){return a.length},
h(a,b){A.bu(b,a,a.length)
return a[b]},
$iG:1}
A.dd.prototype={
gF(a){return B.bt},
gn(a){return a.length},
h(a,b){A.bu(b,a,a.length)
return a[b]},
$iG:1,
$ik_:1}
A.dD.prototype={}
A.dE.prototype={}
A.dF.prototype={}
A.dG.prototype={}
A.aZ.prototype={
i(a){return A.dR(v.typeUniverse,this,a)},
v(a){return A.lE(v.typeUniverse,this,a)}}
A.fg.prototype={}
A.j0.prototype={
p(a){return A.aJ(this.a,null)}}
A.ff.prototype={
p(a){return this.a}}
A.dN.prototype={$ibq:1}
A.iB.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:10}
A.iA.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:38}
A.iC.prototype={
$0(){this.a.$0()},
$S:11}
A.iD.prototype={
$0(){this.a.$0()},
$S:11}
A.iZ.prototype={
fR(a,b){if(self.setTimeout!=null)self.setTimeout(A.cQ(new A.j_(this,b),0),a)
else throw A.e(A.a8("`setTimeout()` not found."))}}
A.j_.prototype={
$0(){this.b.$0()},
$S:0}
A.fa.prototype={
bQ(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cU(a)
else{s=r.a
if(q.i("aO<1>").b(a))s.cX(a)
else s.aW(a)}},
bR(a,b){var s=this.a
if(this.b)s.ar(new A.ae(a,b))
else s.aS(new A.ae(a,b))}}
A.j8.prototype={
$1(a){return this.a.$2(0,a)},
$S:6}
A.j9.prototype={
$2(a,b){this.a.$2(1,new A.d_(a,t.l.a(b)))},
$S:20}
A.jk.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:21}
A.dM.prototype={
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
if(p==null||p.length===0){o.a=A.lz
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
o.a=A.lz
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.e(A.a2("sync*"))}return!1},
ja(a){var s,r,q=this
if(a instanceof A.cD){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.M(a)
return 2}},
$iN:1}
A.cD.prototype={
gt(a){return new A.dM(this.a(),this.$ti.i("dM<1>"))}}
A.ae.prototype={
p(a){return A.w(this.a)},
$iI:1,
gaC(){return this.b}}
A.hb.prototype={
$2(a,b){var s,r,q=this
A.cI(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.ar(new A.ae(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.ar(new A.ae(r,s))}},
$S:23}
A.ha.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bO(r,k.b,a)
if(J.X(s,0)){q=A.j([],j.i("p<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.x)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.fF(q,l)}k.c.aW(q)}}else if(J.X(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.ar(new A.ae(q,o))}},
$S(){return this.d.i("P(0)")}}
A.fc.prototype={
bR(a,b){var s=this.a
if((s.a&30)!==0)throw A.e(A.a2("Future already completed"))
s.aS(A.pf(a,b))},
dE(a){return this.bR(a,null)}}
A.dt.prototype={
bQ(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.e(A.a2("Future already completed"))
s.cU(r.i("1/").a(a))}}
A.c9.prototype={
iF(a){if((this.c&15)!==6)return!0
return this.b.b.cA(t.al.a(this.d),a.a,t.y,t.K)},
it(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.iY(q,m,a.b,o,n,t.l)
else p=l.cA(t.x.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.eK.b(A.a4(s))){if((r.c&1)!==0)throw A.e(A.ad("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.ad("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.U.prototype={
cB(a,b,c){var s,r,q=this.$ti
q.v(c).i("1/(2)").a(a)
s=$.S
if(s===B.j){if(!t.Q.b(b)&&!t.x.b(b))throw A.e(A.aV(b,"onError",u.c))}else{c.i("@<0/>").v(q.c).i("1(2)").a(a)
b=A.px(b,s)}r=new A.U(s,c.i("U<0>"))
this.bz(new A.c9(r,3,a,b,q.i("@<1>").v(c).i("c9<1,2>")))
return r},
dt(a,b,c){var s,r=this.$ti
r.v(c).i("1/(2)").a(a)
s=new A.U($.S,c.i("U<0>"))
this.bz(new A.c9(s,19,a,b,r.i("@<1>").v(c).i("c9<1,2>")))
return s},
hA(a){this.a=this.a&1|16
this.c=a},
aV(a){this.a=a.a&30|this.a&1
this.c=a.c},
bz(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.bz(a)
return}r.aV(s)}A.fA(null,null,r.b,t.M.a(new A.iH(r,a)))}},
dd(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.dd(a)
return}m.aV(n)}l.a=m.b_(a)
A.fA(null,null,m.b,t.M.a(new A.iL(l,m)))}},
aZ(){var s=t.F.a(this.c)
this.c=null
return this.b_(s)},
b_(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aW(a){var s,r=this
r.$ti.c.a(a)
s=r.aZ()
r.a=8
r.c=a
A.cy(r,s)},
fY(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.aZ()
q.aV(a)
A.cy(q,r)},
ar(a){var s=this.aZ()
this.hA(a)
A.cy(this,s)},
cU(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aO<1>").b(a)){this.cX(a)
return}this.fW(a)},
fW(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.fA(null,null,s.b,t.M.a(new A.iJ(s,a)))},
cX(a){A.k1(this.$ti.i("aO<1>").a(a),this,!1)
return},
aS(a){this.a^=2
A.fA(null,null,this.b,t.M.a(new A.iI(this,a)))},
$iaO:1}
A.iH.prototype={
$0(){A.cy(this.a,this.b)},
$S:0}
A.iL.prototype={
$0(){A.cy(this.b,this.a.a)},
$S:0}
A.iK.prototype={
$0(){A.k1(this.a.a,this.b,!0)},
$S:0}
A.iJ.prototype={
$0(){this.a.aW(this.b)},
$S:0}
A.iI.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.iO.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.iX(t.fO.a(q.d),t.z)}catch(p){s=A.a4(p)
r=A.bw(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.fP(q)
n=k.a
n.c=new A.ae(q,o)
q=n}q.b=!0
return}if(j instanceof A.U&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.U){m=k.b.a
l=new A.U(m.b,m.$ti)
j.cB(new A.iP(l,m),new A.iQ(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.iP.prototype={
$1(a){this.a.fY(this.b)},
$S:10}
A.iQ.prototype={
$2(a,b){A.cI(a)
t.l.a(b)
this.a.ar(new A.ae(a,b))},
$S:26}
A.iN.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cA(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.a4(l)
r=A.bw(l)
q=s
p=r
if(p==null)p=A.fP(q)
o=this.a
o.c=new A.ae(q,p)
o.b=!0}},
$S:0}
A.iM.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.iF(s)&&p.a.e!=null){p.c=p.a.it(s)
p.b=!1}}catch(o){r=A.a4(o)
q=A.bw(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fP(p)
m=l.b
m.c=new A.ae(p,n)
p=m}p.b=!0}},
$S:0}
A.fb.prototype={}
A.fr.prototype={}
A.dW.prototype={$ilr:1}
A.fo.prototype={
iZ(a){var s,r,q
t.M.a(a)
try{if(B.j===$.S){a.$0()
return}A.me(null,null,this,a,t.H)}catch(q){s=A.a4(q)
r=A.bw(q)
A.kp(A.cI(s),t.l.a(r))}},
hX(a){return new A.iY(this,t.M.a(a))},
iX(a,b){b.i("0()").a(a)
if($.S===B.j)return a.$0()
return A.me(null,null,this,a,b)},
cA(a,b,c,d){c.i("@<0>").v(d).i("1(2)").a(a)
d.a(b)
if($.S===B.j)return a.$1(b)
return A.pA(null,null,this,a,b,c,d)},
iY(a,b,c,d,e,f){d.i("@<0>").v(e).v(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.S===B.j)return a.$2(b,c)
return A.pz(null,null,this,a,b,c,d,e,f)},
fa(a,b,c,d){return b.i("@<0>").v(c).v(d).i("1(2,3)").a(a)}}
A.iY.prototype={
$0(){return this.a.iZ(this.b)},
$S:0}
A.jh.prototype={
$0(){A.nr(this.a,this.b)},
$S:0}
A.dy.prototype={
gn(a){return this.a},
gC(a){return this.a===0},
gE(a){return this.a!==0},
gL(){return new A.ca(this,this.$ti.i("ca<1>"))},
gag(){var s=this.$ti
return A.hP(new A.ca(this,s.i("ca<1>")),new A.iR(this),s.c,s.y[1])},
N(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.h1(a)},
h1(a){var s=this.d
if(s==null)return!1
return this.ah(this.d3(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.lt(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.lt(q,b)
return r}else return this.ha(b)},
ha(a){var s,r,q=this.d
if(q==null)return null
s=this.d3(q,a)
r=this.ah(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.cR(s==null?m.b=A.k2():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.cR(r==null?m.c=A.k2():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.k2()
p=A.jJ(b)&1073741823
o=q[p]
if(o==null){A.k3(q,p,[b,c]);++m.a
m.e=null}else{n=m.ah(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
a0(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.d_()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.e(A.a5(m))}},
d_(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.c_(i.a,null,!1,t.z)
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
cR(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.k3(a,b,c)},
d3(a,b){return a[A.jJ(b)&1073741823]}}
A.iR.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.dA.prototype={
ah(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.ca.prototype={
gn(a){return this.a.a},
gC(a){return this.a.a===0},
gE(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.dz(s,s.d_(),this.$ti.i("dz<1>"))}}
A.dz.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.e(A.a5(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iN:1}
A.be.prototype={
gt(a){var s=this,r=new A.cd(s,s.r,A.m(s).i("cd<1>"))
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
return this.ah(s[this.bD(a)],a)>=0},
m(a,b){var s,r,q=this
A.m(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cQ(s==null?q.b=A.k4():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cQ(r==null?q.c=A.k4():r,b)}else return q.fT(b)},
fT(a){var s,r,q,p=this
A.m(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.k4()
r=p.bD(a)
q=s[r]
if(q==null)s[r]=[p.bJ(a)]
else{if(p.ah(q,a)>=0)return!1
q.push(p.bJ(a))}return!0},
aP(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.de(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.de(s.c,b)
else return s.hw(b)},
hw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bD(a)
r=n[s]
q=o.ah(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dz(p)
return!0},
I(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bH()}},
cQ(a,b){A.m(this).c.a(b)
if(t.O.a(a[b])!=null)return!1
a[b]=this.bJ(b)
return!0},
de(a,b){var s
if(a==null)return!1
s=t.O.a(a[b])
if(s==null)return!1
this.dz(s)
delete a[b]
return!0},
bH(){this.r=this.r+1&1073741823},
bJ(a){var s,r=this,q=new A.fk(A.m(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bH()
return q},
dz(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bH()},
bD(a){return J.aB(a)&1073741823},
ah(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.X(a[r].a,b))return r
return-1},
$il5:1}
A.fk.prototype={}
A.cd.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.a5(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iN:1}
A.hM.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:34}
A.z.prototype={
gt(a){return new A.bZ(a,this.gn(a),A.aR(a).i("bZ<z.E>"))},
K(a,b){return this.h(a,b)},
gC(a){return this.gn(a)===0},
gE(a){return!this.gC(a)},
cG(a,b){return new A.b_(a,b.i("b_<0>"))},
aN(a,b,c){var s=A.aR(a)
return new A.at(a,s.v(c).i("1(z.E)").a(b),s.i("@<z.E>").v(c).i("at<1,2>"))},
m(a,b){var s
A.aR(a).i("z.E").a(b)
s=this.gn(a)
this.sn(a,s+1)
this.k(a,s,b)},
b1(a,b){return new A.aW(a,A.aR(a).i("@<z.E>").v(b).i("aW<1,2>"))},
X(a,b){var s,r=A.aR(a)
r.i("h(z.E,z.E)?").a(b)
s=b==null?A.pT():b
A.eU(a,0,this.gn(a)-1,s,r.i("z.E"))},
iq(a,b,c,d){var s
A.aR(a).i("z.E?").a(d)
A.dh(b,c,this.gn(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.jS(a,"[","]")},
$it:1,
$il:1,
$iu:1}
A.F.prototype={
a0(a,b){var s,r,q,p=A.m(this)
p.i("~(F.K,F.V)").a(b)
for(s=this.gL(),s=s.gt(s),p=p.i("F.V");s.l();){r=s.gq()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gO(){return this.gL().aN(0,new A.hN(this),A.m(this).i("A<F.K,F.V>"))},
az(a,b,c,d){var s,r,q,p,o,n=A.m(this)
n.v(c).v(d).i("A<1,2>(F.K,F.V)").a(b)
s=A.r(c,d)
for(r=this.gL(),r=r.gt(r),n=n.i("F.V");r.l();){q=r.gq()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
hP(a){var s,r,q
A.m(this).i("l<A<F.K,F.V>>").a(a)
for(s=a.$ti,r=new A.c0(J.M(a.a),a.b,s.i("c0<1,2>")),s=s.y[1];r.l();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
gn(a){var s=this.gL()
return s.gn(s)},
gC(a){var s=this.gL()
return s.gC(s)},
gE(a){var s=this.gL()
return s.gE(s)},
gag(){return new A.dB(this,A.m(this).i("dB<F.K,F.V>"))},
p(a){return A.jW(this)},
$iD:1}
A.hN.prototype={
$1(a){var s=this.a,r=A.m(s)
r.i("F.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("F.V").a(s)
return new A.A(a,s,r.i("A<F.K,F.V>"))},
$S(){return A.m(this.a).i("A<F.K,F.V>(F.K)")}}
A.hO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:12}
A.dB.prototype={
gn(a){var s=this.a
return s.gn(s)},
gC(a){var s=this.a
return s.gC(s)},
gE(a){var s=this.a
return s.gE(s)},
gt(a){var s=this.a,r=s.gL()
return new A.dC(r.gt(r),s,this.$ti.i("dC<1,2>"))}}
A.dC.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.h(0,r.gq())
return!0}s.c=null
return!1},
gq(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iN:1}
A.dS.prototype={
k(a,b,c){var s=A.m(this)
s.c.a(b)
s.y[1].a(c)
throw A.e(A.a8("Cannot modify unmodifiable map"))}}
A.cn.prototype={
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
gO(){return this.a.gO()},
az(a,b,c,d){return this.a.az(0,A.m(this).v(c).v(d).i("A<1,2>(3,4)").a(b),c,d)},
$iD:1}
A.bG.prototype={}
A.bo.prototype={
gC(a){return this.gn(this)===0},
gE(a){return this.gn(this)!==0},
Y(a,b){var s
for(s=J.M(A.m(this).i("l<1>").a(b));s.l();)this.m(0,s.gq())},
p(a){return A.jS(this,"{","}")},
ae(a,b){var s
A.m(this).i("q(1)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gq()))return!1
return!0},
K(a,b){var s,r
A.eR(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gq();--r}throw A.e(A.hs(b,b-r,this,"index"))},
$it:1,
$il:1,
$ict:1}
A.dK.prototype={}
A.ft.prototype={
m(a,b){this.$ti.c.a(b)
return A.oD()}}
A.dn.prototype={
B(a,b){return this.a.B(0,b)},
gn(a){return this.a.a},
gt(a){var s=this.a
return A.ol(s,s.r,A.m(s).c)}}
A.cE.prototype={}
A.dT.prototype={}
A.fi.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.hr(b):s}},
gn(a){return this.b==null?this.c.a:this.au().length},
gC(a){return this.gn(0)===0},
gE(a){return this.gn(0)>0},
gL(){if(this.b==null){var s=this.c
return new A.Z(s,A.m(s).i("Z<1>"))}return new A.fj(this)},
gag(){var s,r=this
if(r.b==null){s=r.c
return new A.aY(s,A.m(s).i("aY<2>"))}return A.hP(r.au(),new A.iT(r),t.N,t.z)},
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
if(typeof p=="undefined"){p=A.ja(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.e(A.a5(o))}},
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
s=A.ja(this.a[a])
return this.b[a]=s}}
A.iT.prototype={
$1(a){return this.a.h(0,A.y(a))},
$S:9}
A.fj.prototype={
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
A.j5.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:13}
A.j4.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:13}
A.ea.prototype={
iH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.dh(a4,a5,a2)
s=$.mI()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.c(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.c(a3,k)
h=A.jq(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.c(a3,g)
f=A.jq(a3.charCodeAt(g))
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
c=A.R(j)
g.a+=c
p=k
continue}}throw A.e(A.Y("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.u(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.kJ(a3,m,a5,n,l,r)
else{b=B.c.aa(r-1,4)+1
if(b===1)throw A.e(A.Y(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aB(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.kJ(a3,m,a5,n,l,a)
else{b=B.c.aa(a,4)
if(b===1)throw A.e(A.Y(a1,a3,a5))
if(b>1)a3=B.b.aB(a3,a5,a5,b===2?"==":"=")}return a3}}
A.fS.prototype={}
A.bR.prototype={}
A.eh.prototype={}
A.ek.prototype={}
A.d5.prototype={
p(a){var s=A.el(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.eA.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.ez.prototype={
dH(a,b){var s=A.pu(a,this.gi8().a)
return s},
ie(a,b){var s=A.ok(a,this.gig().b,null)
return s},
gig(){return B.aU},
gi8(){return B.aT}}
A.hH.prototype={}
A.hG.prototype={}
A.iV.prototype={
fg(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.R(92)
s.a+=o
o=A.R(117)
s.a+=o
o=A.R(100)
s.a+=o
o=p>>>8&15
o=A.R(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.R(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.R(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.R(92)
s.a+=o
switch(p){case 8:o=A.R(98)
s.a+=o
break
case 9:o=A.R(116)
s.a+=o
break
case 10:o=A.R(110)
s.a+=o
break
case 12:o=A.R(102)
s.a+=o
break
case 13:o=A.R(114)
s.a+=o
break
default:o=A.R(117)
s.a+=o
o=A.R(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.R(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.R(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.R(92)
s.a+=o
o=A.R(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.u(a,r,m)},
bB(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.e(new A.eA(a,null))}B.a.m(s,a)},
bp(a){var s,r,q,p,o=this
if(o.ff(a))return
o.bB(a)
try{s=o.b.$1(a)
if(!o.ff(s)){q=A.l0(a,null,o.gdc())
throw A.e(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.a4(p)
q=A.l0(a,r,o.gdc())
throw A.e(q)}},
ff(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.fg(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.bB(a)
q.j7(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.bB(a)
r=q.j8(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
j7(a){var s,r,q=this.c
q.a+="["
s=J.b5(a)
if(s.gE(a)){this.bp(s.h(a,0))
for(r=1;r<s.gn(a);++r){q.a+=","
this.bp(s.h(a,r))}}q.a+="]"},
j8(a){var s,r,q,p,o,n,m=this,l={}
if(a.gC(a)){m.c.a+="{}"
return!0}s=a.gn(a)*2
r=A.c_(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a0(0,new A.iW(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.fg(A.y(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.bp(r[n])}p.a+="}"
return!0}}
A.iW.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:12}
A.iU.prototype={
gdc(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.f2.prototype={}
A.io.prototype={
i5(a){return new A.j3(this.a).h2(t.I.a(a),0,null,!0)}}
A.j3.prototype={
h2(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.I.a(a)
s=A.dh(b,c,J.aM(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.oU(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.oT(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.bE(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.oV(o)
l.b=0
throw A.e(A.Y(m,a,p+l.c))}return n},
bE(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.H(b+c,2)
r=q.bE(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bE(a,s,c,d)}return q.i7(a,b,c,d)},
i7(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aj(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.c(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.c(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.c(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.R(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.R(h)
e.a+=p
break
case 65:p=A.R(h)
e.a+=p;--d
break
default:p=A.R(h)
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
p=A.R(a[l])
e.a+=p}else{p=A.lg(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.R(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.bS.prototype={
P(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bS)if(this.a===b.a)s=this.b===b.b
return s},
gD(a){return A.cp(this.a,this.b,B.f,B.f)},
J(a,b){var s
t.dy.a(b)
s=B.c.J(this.a,b.a)
if(s!==0)return s
return B.c.J(this.b,b.b)},
p(a){var s=this,r=A.n8(A.nT(s)),q=A.ei(A.nR(s)),p=A.ei(A.nN(s)),o=A.ei(A.nO(s)),n=A.ei(A.nQ(s)),m=A.ei(A.nS(s)),l=A.kP(A.nP(s)),k=s.b,j=k===0?"":A.kP(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaX:1}
A.fe.prototype={
p(a){return this.U()},
$iaq:1}
A.I.prototype={
gaC(){return A.nM(this)}}
A.e7.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.el(s)
return"Assertion failed"}}
A.bq.prototype={}
A.aU.prototype={
gbG(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gbG()+q+o
if(!s.a)return n
return n+s.gbF()+": "+A.el(s.gcs())},
gcs(){return this.b}}
A.cr.prototype={
gcs(){return A.lW(this.b)},
gbG(){return"RangeError"},
gbF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.er.prototype={
gcs(){return A.a(this.b)},
gbG(){return"RangeError"},
gbF(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.dp.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.eZ.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.cv.prototype={
p(a){return"Bad state: "+this.a}}
A.ef.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.el(s)+"."}}
A.eM.prototype={
p(a){return"Out of Memory"},
gaC(){return null},
$iI:1}
A.dj.prototype={
p(a){return"Stack Overflow"},
gaC(){return null},
$iI:1}
A.iG.prototype={
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
b1(a,b){return A.n0(this,A.m(this).i("l.E"),b)},
aN(a,b,c){var s=A.m(this)
return A.hP(this,s.v(c).i("1(l.E)").a(b),s.i("l.E"),c)},
cF(a,b){var s=A.m(this)
return new A.H(this,s.i("q(l.E)").a(b),s.i("H<l.E>"))},
cG(a,b){return new A.b_(this,b.i("b_<0>"))},
ae(a,b){var s
A.m(this).i("q(l.E)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gq()))return!1
return!0},
aj(a,b){var s
A.m(this).i("q(l.E)").a(b)
for(s=this.gt(this);s.l();)if(b.$1(s.gq()))return!0
return!1},
gn(a){var s,r=this.gt(this)
for(s=0;r.l();)++s
return s},
gC(a){return!this.gt(this).l()},
gE(a){return!this.gC(this)},
K(a,b){var s,r
A.eR(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gq();--r}throw A.e(A.hs(b,b-r,this,"index"))},
p(a){return A.nA(this,"(",")")}}
A.A.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.P.prototype={
gD(a){return A.v.prototype.gD.call(this,0)},
p(a){return"null"}}
A.v.prototype={$iv:1,
P(a,b){return this===b},
gD(a){return A.eP(this)},
p(a){return"Instance of '"+A.eQ(this)+"'"},
gF(a){return A.kz(this)},
toString(){return this.p(this)}}
A.fs.prototype={
p(a){return""},
$ibb:1}
A.aj.prototype={
gn(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$io1:1}
A.im.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.y(b)
s=B.b.be(b,"=")
if(s===-1){if(b!=="")a.k(0,A.k9(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.u(b,0,s)
q=B.b.aQ(b,s+1)
p=this.a
a.k(0,A.k9(r,0,r.length,p,!0),A.k9(q,0,q.length,p,!0))}return a},
$S:47}
A.il.prototype={
$2(a,b){throw A.e(A.Y("Illegal IPv6 address, "+a,this.a,b))},
$S:57}
A.dU.prototype={
gds(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gD(r.gds())
r.y!==$&&A.mv()
r.y=s
q=s}return q},
gbo(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.lo(s==null?"":s)
r.z!==$&&A.mv()
q=r.z=new A.bG(s,t.dw)}return q},
gfe(){return this.b},
gcr(){var s=this.c
if(s==null)return""
if(B.b.S(s,"[")&&!B.b.M(s,"v",1))return B.b.u(s,1,s.length-1)
return s},
gcw(){var s=this.d
return s==null?A.lF(this.a):s},
gcz(){var s=this.f
return s==null?"":s},
geX(){var s=this.r
return s==null?"":s},
geY(){return this.c!=null},
gf_(){return this.f!=null},
geZ(){return this.r!=null},
p(a){return this.gds()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.gcI())if(p.c!=null===b.geY())if(p.b===b.gfe())if(p.gcr()===b.gcr())if(p.gcw()===b.gcw())if(p.e===b.gf6()){r=p.f
q=r==null
if(!q===b.gf_()){if(q)r=""
if(r===b.gcz()){r=p.r
q=r==null
if(!q===b.geZ()){s=q?"":r
s=s===b.geX()}}}}return s},
$if0:1,
gcI(){return this.a},
gf6(){return this.e}}
A.ik.prototype={
gfd(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.bf(s,"?",m)
q=s.length
if(r>=0){p=A.dV(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.fd("data","",n,n,A.dV(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.fp.prototype={
geY(){return this.c>0},
gf_(){return this.f<this.r},
geZ(){return this.r<this.a.length},
gcI(){var s=this.w
return s==null?this.w=this.h_():s},
h_(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.S(r.a,"http"))return"http"
if(q===5&&B.b.S(r.a,"https"))return"https"
if(s&&B.b.S(r.a,"file"))return"file"
if(q===7&&B.b.S(r.a,"package"))return"package"
return B.b.u(r.a,0,q)},
gfe(){var s=this.c,r=this.b+3
return s>r?B.b.u(this.a,r,s-1):""},
gcr(){var s=this.c
return s>0?B.b.u(this.a,s,this.d):""},
gcw(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.qc(B.b.u(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.S(r.a,"http"))return 80
if(s===5&&B.b.S(r.a,"https"))return 443
return 0},
gf6(){return B.b.u(this.a,this.e,this.f)},
gcz(){var s=this.f,r=this.r
return s<r?B.b.u(this.a,s+1,r):""},
geX(){var s=this.r,r=this.a
return s<r.length?B.b.aQ(r,s+1):""},
gbo(){if(this.f>=this.r)return B.b7
return new A.bG(A.lo(this.gcz()),t.dw)},
gD(a){var s=this.x
return s==null?this.x=B.b.gD(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$if0:1}
A.fd.prototype={}
A.hR.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.jK.prototype={
$1(a){return this.a.bQ(this.b.i("0/?").a(a))},
$S:6}
A.jL.prototype={
$1(a){if(a==null)return this.a.dE(new A.hR(a===undefined))
return this.a.dE(a)},
$S:6}
A.jl.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.m8(a))return a
s=this.a
a.toString
if(s.N(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.B(A.ah(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.cP(!0,"isUtc",t.y)
return new A.bS(r,0,!0)}if(a instanceof RegExp)throw A.e(A.ad("structured clone of RegExp",null))
if(a instanceof Promise)return A.b6(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.r(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bl(n),p=s.gt(n);p.l();)m.push(A.fB(p.gq()))
for(l=0;l<s.gn(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.c(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.b5(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:58}
A.fh.prototype={
a6(a){if(a<=0||a>4294967296)throw A.e(A.lb(u.g+a))
return Math.random()*a>>>0},
cu(){return Math.random()},
$ijX:1}
A.dH.prototype={
cM(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
a6(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.e(A.lb(u.g+a))
s=a-1
if((a&s)>>>0===0){p.ab()
return(p.a&s)>>>0}do{p.ab()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cu(){var s,r=this
r.ab()
s=r.a
r.ab()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ijX:1}
A.ej.prototype={
A(){var s=this
return A.O(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.e9.prototype={
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
fb(){var s=this.a
if(A.y(s.state)==="suspended")A.b(s.resume())},
hC(a){var s,r,q=this
if(B.b.S(a,"vo-")){s=q.x
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
hb(){var s,r,q,p,o,n,m,l=this.a,k=A.fy(l.sampleRate),j=B.d.ap(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cu()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.c(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
cv(a,b){var s,r,q,p=this,o=p.as.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.at.cu()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.d(r.connect(q))
s=B.a5.h(0,a)
A.d(q.connect(p.hC(s==null?"transient":s)))
r.start()},
iN(a){return this.cv(a,1)},
bO(){return}}
A.fR.prototype={
$1(a){return this.fh(t.q.a(a))},
fh(a){var s=0,r=A.bi(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bj(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ac(A.b6(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ac(A.b6(A.b(n.arrayBuffer()),t.e9),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.ac(A.b6(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.a4(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bg(null,r)
case 1:return A.bf(p.at(-1),r)}})
return A.bh($async$$1,r)},
$S:19}
A.fV.prototype={
f2(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.i(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.mO().b2(q).ga1()
p.d=q
p.c=p.b.b2(q).ga1()
p.a=a}}
A.h9.prototype={}
A.eX.prototype={}
A.hf.prototype={
h5(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.d(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.d(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.d(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.fB(s.getParameter(34047))
if(typeof p=="number")o.c=p},
bk(a,b,c,d,e,f){return this.iB(a,b,c,d,e,f)},
iB(a,b,c,a0,a1,a2){var s=0,r=A.bi(t.B),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$bk=A.bj(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.b(A.b(j.document).createElement("img"))
m.src=a
s=7
return A.ac(A.b6(A.b(m.decode()),t.X),$async$bk)
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
case 6:case 1:return A.bg(q,r)
case 2:return A.bf(o.at(-1),r)}})
return A.bh($async$bk,r)},
bl(a,b,c){var s=!1
return this.iC(t.h.a(a),b,!1)},
iC(b0,b1,b2){var s=0,r=A.bi(t.B),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$bl=A.bj(function(b3,b4){if(b3===1){o.push(b4)
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
return A.ac(A.b6(A.b(j.decode()),a1),$async$bl)
case 10:J.fF(l,j)
case 8:b0.length===a||(0,A.x)(b0),++a2
s=7
break
case 9:if(J.aM(l)===0){a=A.a2("texture array needs at least one layer")
throw A.e(a)}i=A.a(J.ao(l,0).width)
h=A.a(J.ao(l,0).height)
if(J.X(i,0)||J.X(h,0)||J.mP(l,new A.hg(i,h))){a=A.a2("texture-array layers must have matching nonzero dimensions")
throw A.e(a)}g=J.aM(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.R()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.fC(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.R()
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
if(a7==null){a=A.a2("could not create texture array")
throw A.e(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.b4(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.X(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a2("texture-array storage failed (WebGL error 0x"+J.jO(d,16)+")")
throw A.e(a)}c=0
for(;;){a1=c
a3=J.aM(l)
if(typeof a1!=="number"){q=a1.bs()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.ao(l,c)])
d=A.a(a.getError())
if(!J.X(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a2("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.jO(d,16)+")")
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
if(!J.X(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a2("texture-array mip generation failed (WebGL error 0x"+J.jO(d,16)+")")
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
b=A.a4(a9)
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
case 6:case 1:return A.bg(q,r)
case 2:return A.bf(o.at(-1),r)}})
return A.bh($async$bl,r)},
dn(a,b){var s=this.a,r=A.d(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.X(A.fB(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.e(A.ck("shader compile failed: "+A.w(A.lY(s,"getShaderInfoLog",r,t.v))+"\n"+b))
return r},
a7(a,b){var s=v.G,r=this.dn(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.dn(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.d(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.X(A.fB(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.e(A.ck("program link failed: "+A.w(A.lY(p,"getProgramInfoLog",o,t.v))))
return o},
gf4(){var s=A.fB(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.W(s):0},
cE(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.dh(0,c,B.c.fI(b.byteLength,p))*p
if(B.c.aa(o,4)!==0)A.B(A.ad("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.mQ(B.r.ghY(b),b.byteOffset+0*p,B.c.H(o,4)))}},
bN(a,b,c){var s,r,q,p,o=this.a,n=v.G
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
bK(a,b,c,d,e){var s,r=this.a,q=A.d(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.b4(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
dr(a,b,c){var s,r=this.a,q=A.d(r.createTexture())
q.toString
this.bN(q,a,b)
s=v.G
A.b4(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
d1(a,b){var s,r,q=this.a,p=A.d(q.createTexture())
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
ct(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.d(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.bK(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.bK(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.dr(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.dr(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.bK(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.d1(a,b)
if(d)h.drawBuffers(A.j([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.u))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.e(A.ck("framebuffer incomplete"))
return new A.eX(g,n,o,m,q,p,l,e,a,b)},
f3(a,b,c,d){return this.ct(a,b,c,d,0)},
iE(a,b,c,d){return this.ct(a,b,!0,c,d)},
an(a,b,c){return this.ct(a,b,c,!1,0)},
bL(a,b,c,d,e){var s,r,q
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
if(q!=null)n.bN(q,b,c)
if(p!=null)n.bN(p,b,c)
n.bL(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.bL(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.bL(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.d1(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
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
A.hg.prototype={
$1(a){A.b(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:18}
A.eq.prototype={
cD(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].jb(a)}}
A.es.prototype={
af(a){if(this.f)return
A.kZ(a,"requestPointerLock",t.X)},
hi(a){A.b(a)
if(A.ay(a.repeat))return
if(this.b.m(0,A.y(a.code)))this.c.m(0,A.y(a.code))},
hk(a){this.b.aP(0,A.y(A.b(a).code))},
ho(a){var s=this
A.b(a)
if(!s.f)return
s.d=s.d+s.d8(a,"movementX")
s.e=s.e+s.d8(a,"movementY")},
hm(a){var s=this
A.b(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
d8(a,b){var s=A.lU(a[b])
if(s==null)s=null
return s==null?0:s}}
A.eD.prototype={}
A.c1.prototype={
gd5(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gD(B.c.cC(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gD(B.c.cC(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.c1&&A.kz(r)===A.kz(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gD(a){return this.gd5()}}
A.hQ.prototype={
fN(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gd5(),q)}}
A.dk.prototype={
f9(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.r.fm(s,0,m,l)
n.a=s}r=b.T(0,a).b2(d.T(0,a)).ga1()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.dl(n.a,n.b,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=f+g
m=A.dl(n.a,m,b,r,q,p,o,0,1,l,h,0)
n.b=m
k=h+i
m=A.dl(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.dl(n.a,m,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=A.dl(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.dl(n.a,l,d,r,q,p,o,0,1,f,k,0)},
f8(a,b,c,d,e,f,g){return this.f9(a,b,c,d,e,0,f,0,g)}}
A.hW.prototype={
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
m.d=s.an(m.ay,m.ch,!1)
m.e=s.an(m.ay,m.ch,!1)
m.f=s.an(m.ay,m.ch,!1)
p=A.d(p.createVertexArray())
p.toString
m.CW!==$&&A.o()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
he(){var s
try{this.r=this.b.an(384,216,!1)}catch(s){this.r=null}},
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
A.i0.prototype={
bC(a,b,c){var s,r,q
try{r=this.a.a7(b,c)
return r}catch(q){s=A.a4(q)
r=A.ck(a+": "+A.w(s))
throw A.e(r)}}}
A.hX.prototype={}
A.dx.prototype={}
A.fq.prototype={}
A.fn.prototype={}
A.fl.prototype={}
A.hY.prototype={
fO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",f=A.j([new A.c1(0,0,1,0),new A.c1(1,0,1,0),new A.c1(2,0,1,0)],t.fK),e=t.S
e=new A.hQ(f,A.r(e,e))
e.fN(f)
h.cq=e
h.eC=1.9
h.cf=h.am/h.al
r=J.hv(6,t.e3)
for(q=0;q<6;++q)r[q]=new A.dx()
t.b1.a(r)
f=h.a8
e=f.a7("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.a7(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.a7(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.a7(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.a7(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.V!==$&&A.o()
h.V=new A.i0(f,e,p,o,n,m)
h.b=t.d1.a(new A.hZ(h))
h.dj()
h.di()
o=h.a4
p=A.d(o.getUniformLocation(m,"uTex"))
h.e5!==$&&A.o()
h.e5=p
p=A.d(o.getUniformLocation(m,"uNoise"))
h.e6!==$&&A.o()
h.e6=p
p=A.d(o.getUniformLocation(m,"uTime"))
h.dM!==$&&A.o()
h.dM=p
p=A.d(o.getUniformLocation(m,"uTexelSize"))
h.dL!==$&&A.o()
h.dL=p
p=A.d(o.getUniformLocation(m,"uNoiseOff"))
h.dN!==$&&A.o()
h.dN=p
p=A.d(o.getUniformLocation(m,"uChromaLuma"))
h.dO!==$&&A.o()
h.dO=p
p=A.d(o.getUniformLocation(m,"uChromaLag"))
h.dP!==$&&A.o()
h.dP=p
p=A.d(o.getUniformLocation(m,"uTapeNoise"))
h.dQ!==$&&A.o()
h.dQ=p
p=A.d(o.getUniformLocation(m,"uHeadSwitch"))
h.dR!==$&&A.o()
h.dR=p
p=A.d(o.getUniformLocation(m,"uTracking"))
h.dS!==$&&A.o()
h.dS=p
p=A.d(o.getUniformLocation(m,"uDropouts"))
h.dT!==$&&A.o()
h.dT=p
p=A.d(o.getUniformLocation(m,"uGhosting"))
h.dU!==$&&A.o()
h.dU=p
p=A.d(o.getUniformLocation(m,"uChromaBlurI"))
h.dV!==$&&A.o()
h.dV=p
p=A.d(o.getUniformLocation(m,"uChromaBlurQ"))
h.dW!==$&&A.o()
h.dW=p
p=A.d(o.getUniformLocation(m,"uChromaLagAmount"))
h.dX!==$&&A.o()
h.dX=p
p=A.d(o.getUniformLocation(m,"uNoiseScale"))
h.dY!==$&&A.o()
h.dY=p
p=A.d(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.dZ!==$&&A.o()
h.dZ=p
p=A.d(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.e_!==$&&A.o()
h.e_=p
p=A.d(o.getUniformLocation(m,"uJitterAmount"))
h.e0!==$&&A.o()
h.e0=p
p=A.d(o.getUniformLocation(m,"uJitterFreq"))
h.e1!==$&&A.o()
h.e1=p
p=A.d(o.getUniformLocation(m,"uDropoutRate"))
h.e2!==$&&A.o()
h.e2=p
p=A.d(o.getUniformLocation(m,"uGhostAmount"))
h.e3!==$&&A.o()
h.e3=p
p=A.d(o.getUniformLocation(m,"uGhostOffset"))
h.e4!==$&&A.o()
h.e4=p
p=A.d(o.getUniformLocation(m,"uGhostTarget"))
h.e7!==$&&A.o()
h.e7=p
m=A.d(o.getUniformLocation(m,"uHasGhost"))
h.e8!==$&&A.o()
h.e8=m
m=A.d(o.getUniformLocation(n,"uTex"))
h.ci!==$&&A.o()
h.ci=m
m=A.d(o.getUniformLocation(n,"uDepth"))
h.cj!==$&&A.o()
h.cj=m
m=A.d(o.getUniformLocation(n,"uFocusDistance"))
h.ck!==$&&A.o()
h.ck=m
m=A.d(o.getUniformLocation(n,"uDofBlurScale"))
h.cl!==$&&A.o()
h.cl=m
m=A.d(o.getUniformLocation(n,"uBlurRadius"))
h.cm!==$&&A.o()
h.cm=m
m=A.d(o.getUniformLocation(n,"uDofStrength"))
h.cn!==$&&A.o()
h.cn=m
n=A.d(o.getUniformLocation(n,"uTexel"))
h.co!==$&&A.o()
h.co=n
n=A.ay(A.b(A.b(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.aI!==$&&A.o()
h.aI=n
h.sf1(16777215)
n=new A.i5(o,f,A.j([],t.aN),A.j([],t.f7),A.j([],t.gi),A.j([],t.bK))
m=n.c=f.a7("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.d(o.getUniformLocation(m,"uLightProj"))
n.e=A.d(o.getUniformLocation(m,"uModel"))
h.cp!==$&&A.o()
h.cp=n
n=new A.hW(f,o)
n.hd()
n.he()
h.b5!==$&&A.o()
h.b5=n
n=f.a
m=A.d(n.createBuffer())
m.toString
h.bT!==$&&A.o()
h.bT=m
p=A.d(n.createBuffer())
p.toString
h.bU!==$&&A.o()
h.bU=p
n=A.d(n.createBuffer())
n.toString
h.bV!==$&&A.o()
h.bV=n
e=A.d(o.createVertexArray())
e.toString
h.bW!==$&&A.o()
h.bW=e
l=A.d(o.createVertexArray())
l.toString
h.bX!==$&&A.o()
h.bX=l
k=A.d(o.createVertexArray())
k.toString
h.bY!==$&&A.o()
h.bY=k
j=A.d(o.createVertexArray())
j.toString
h.bZ!==$&&A.o()
h.bZ=j
o.bindVertexArray(e)
h.bA(m)
o.bindVertexArray(l)
h.bA(p)
o.bindVertexArray(k)
h.bA(n)
o.bindVertexArray(null)
try{h.ba=f.f3(384,216,!0,!0)}catch(i){h.ba=null}s=4<f.gf4()?4:f.gf4()
e=s
if(typeof e!=="number")return e.R()
if(e>1)try{h.aH=f.iE(h.al,h.am,!0,s)}catch(i){h.aH=null}try{h.ak=f.f3(h.al,h.am,!0,!0)}catch(i){h.aH=h.ak=null}if(h.ak!=null)try{h.b7=f.an(h.gaU(),h.gaT(),!1)
h.b8=f.an(h.gaU(),h.gaT(),!1)
h.b9=f.an(h.al,h.am,!1)}catch(i){h.b9=h.b8=h.b7=null}},
gaU(){var s=B.c.H(this.al,4)
return s<1?1:s},
gaT(){var s=B.c.H(this.am,4)
return s<1?1:s},
aM(a){return this.iD(t.G.a(a))},
iD(a){var s=0,r=A.bi(t.H),q=this,p,o,n,m,l,k,j
var $async$aM=A.bj(function(b,c){if(b===1)return A.bf(c,r)
for(;;)switch(s){case 0:p=new A.K(a,A.m(a).i("K<1,2>")).gt(0),o=q.a8
case 2:if(!p.l()){s=3
break}n=p.d
m=n.a
l=B.a4.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ac(o.bk(k,l,!1,!1,!1,m==="grime"),$async$aM)
case 4:if(c!=null)q.d2(m,l)
s=2
break
case 3:p=t.eJ
j=A.aE(new A.b_(new A.at(A.j(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.gk.a(new A.i_(a)),t.e1),p),p.i("l.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ac(o.bl(j,12,!1),$async$aM)
case 7:q.b4=c
case 6:return A.bg(null,r)}})
return A.bh($async$aM,r)},
aA(){var s=0,r=A.bi(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$aA=A.bj(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.r(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ac(A.b6(A.b(A.b(g.window).fetch("shaders/"+A.w(m))),f),$async$aA)
case 13:l=a3
if(!A.ay(l.ok)){i=A.ck("HTTP "+A.w(A.q6(l,"status",t.S)))
throw A.e(i)}a=J
a0=n
a1=m
s=14
return A.ac(A.b6(A.b(l.text()),i),$async$aA)
case 14:a.bO(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.a4(c)
i=A.ck("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
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
j=A.a4(b)
A.b(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bg(null,r)
case 1:return A.bf(p.at(-1),r)}})
return A.bh($async$aA,r)},
ht(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.V
q===$&&A.f()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.bC("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.bC("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.bC("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.dj()
i.di()
q=i.dI
q=A.aE(q,A.m(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.x)(q),++k){s=q[k]
o=B.a4.h(0,s)
o.toString
i.d2(s,o)}A.b(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.a4(j)
A.b(v.G.console).error("shader recompile failed: "+A.w(r))}},
di(){var s=this,r=s.a4,q=s.V
q===$&&A.f()
s.eD=A.d(r.getUniformLocation(q.c,"uTex"))
s.eE=A.d(r.getUniformLocation(q.c,"uTime"))
s.eF=A.d(r.getUniformLocation(q.c,"uFlash"))
s.eG=A.d(r.getUniformLocation(q.c,"uVignette"))
s.eH=A.d(r.getUniformLocation(q.c,"uGrain"))
s.eI=A.d(r.getUniformLocation(q.c,"uDesat"))
s.eJ=A.d(r.getUniformLocation(q.c,"uBloom"))
s.eK=A.d(r.getUniformLocation(q.c,"uBloomStrength"))
s.eR=A.d(r.getUniformLocation(q.c,"uNoiseOff"))
s.eU=A.d(r.getUniformLocation(q.c,"uLutMix"))
s.eN=A.d(r.getUniformLocation(q.c,"uDepth"))
s.eO=A.d(r.getUniformLocation(q.c,"uDepthViz"))
s.dJ=A.d(r.getUniformLocation(q.c,"uSSAO"))
s.dK=A.d(r.getUniformLocation(q.c,"uSSAOStrength"))
s.eP=A.d(r.getUniformLocation(q.c,"uNoise"))
s.eQ=A.d(r.getUniformLocation(q.c,"uNoiseOn"))
s.eS=A.d(r.getUniformLocation(q.c,"uLut"))
s.eT=A.d(r.getUniformLocation(q.c,"uLutOn"))
s.eL=A.d(r.getUniformLocation(q.d,"uTex"))
s.cg=A.d(r.getUniformLocation(q.d,"uDir"))
s.eM=A.d(r.getUniformLocation(q.c,"uBlur"))},
d2(a,b){var s,r,q,p=this
p.dI.m(0,a)
switch(a){case"bluenoise":s=p.V
s===$&&A.f()
s=s.c
r=p.eP
r===$&&A.f()
q=p.eQ
q===$&&A.f()
p.aD(s,r,q,b)
break
case"lut-gothic":s=p.V
s===$&&A.f()
s=s.c
r=p.eS
r===$&&A.f()
q=p.eT
q===$&&A.f()
p.aD(s,r,q,b)
break
case"grime":s=p.V
s===$&&A.f()
s=s.b
r=p.RG
r===$&&A.f()
q=p.rx
q===$&&A.f()
p.aD(s,r,q,b)
break
case"glass":s=p.V
s===$&&A.f()
s=s.b
r=p.x2
r===$&&A.f()
q=p.xr
q===$&&A.f()
p.aD(s,r,q,b)
break
case"soft":s=p.V
s===$&&A.f()
s=s.b
r=p.eo
r===$&&A.f()
q=p.ep
q===$&&A.f()
p.aD(s,r,q,b)
break}},
aD(a,b,c,d){var s=this.a4
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sf1(a){var s=A.jj(a)
this.eg=s.a
this.eh=s.b
this.ei=s.c},
bP(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.aa(a1,14)!==0)throw A.e(A.ad("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.a4
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
b.cV(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.il++
b.c2.k(0,a1,new A.fq(e,d,i,s,s,a3))
return a1},
ib(a){var s,r,q,p=this,o=p.c2.h(0,a)
if(o==null)return
p.da()
s=p.em
r=p.en
if(s!==r)p.dk(r)
s=p.a4
r=p.dy
r===$&&A.f()
s.uniform1i(r,0)
r=p.ce
r===$&&A.f()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.aJ},
is(a){var s,r=this.c2.aP(0,a)
if(r==null)return
s=this.a4
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
da(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.c3)return
c.c3=!0
s=c.a4
r=c.V
r===$&&A.f()
s.useProgram(r.b)
r=c.as
r===$&&A.f()
q=c.ek
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.f()
r=c.c6
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.f()
q=c.c7
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.f()
r=c.c8
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.f()
s.uniform1f(r,c.eC)
r=c.CW
r===$&&A.f()
s.uniform1f(r,c.cf)
r=c.cx
r===$&&A.f()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.f()
s.uniform1f(r,60)
r=c.db
r===$&&A.f()
q=c.e9?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.f()
s.uniform3f(q,c.c9/255*0.25,c.ca/255*0.25,c.cb/255*0.25)
q=c.fx
q===$&&A.f()
r=c.ef
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.f()
s.uniform3f(r,c.eg,c.eh,c.ei)
r=c.go
r===$&&A.f()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.f()
s.uniform1f(r,14)
r=c.k1
r===$&&A.f()
s.uniform1f(r,c.ej)
r=c.k2
r===$&&A.f()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.f()
s.uniform1i(r,c.c5.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.c5
l=m.length
if(n<l){if(!(n<l))return A.c(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],0)
continue}j=A.jj(k.b)
m=c.aI
m===$&&A.f()
i=m?1:1+(A.jM(c.cc*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.c(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.c(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.c(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],k.d*i)}r=c.aI
r===$&&A.f()
q=r?1:1+(A.jM(c.cc*2.5,40503)*2-1)*0
c.ii=q
p=c.p3
p===$&&A.f()
s.uniform1f(p,q)
q=c.p4
q===$&&A.f()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.f()
p=c.eb?1:0
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
q=c.ea
h=q?384:0
g=q?216:0
q=c.c_
p=q.a
if(p===B.F){f=B.d.a3(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.eq
r===$&&A.f()
s.uniform2f(r,h,g)
r=c.cp
r===$&&A.f()
q=c.ev
q===$&&A.f()
s.uniform1f(q,0)
q=c.ew
q===$&&A.f()
s.uniform3f(q,0.0015,0.005,0)
q=c.er
q===$&&A.f()
if(q!=null)r.bq(0)
q=c.es
q===$&&A.f()
if(q!=null)r.bq(1)
q=c.eu
q===$&&A.f()
if(q!=null)r.bq(2)
r.br(0)
r.br(1)
r.br(2)
r=c.ex
r===$&&A.f()
if(c.b4==null)q=0
else{c.cq===$&&A.f()
q=3}s.uniform1i(r,q)
if(c.b4!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.b4)
r=c.cd
r===$&&A.f()
s.uniform1i(r,12)}r=c.eB
q=c.eA
p=c.ez
o=c.ey
n=0
for(;;){m=c.cq
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
if(m!=null)s.uniform1i(m,d.d);++n}c.dk(c.en)
r=c.dy
r===$&&A.f()
s.uniform1i(r,0)
r=c.ce
r===$&&A.f()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
dk(a){var s
this.em=a
s=this.dx
s===$&&A.f()
this.a4.uniformMatrix4fv(s,!1,a.a)},
hE(a){var s,r,q,p,o,n,m
for(s=this.ed,r=this.ec,q=1;q<a;++q){if(!(q<800))return A.c(s,q)
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
for(s=this.ee,r=this.c4,q=1;q<a;++q){if(!(q<4000))return A.c(s,q)
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
b2.c_=b4
s=b2.aK
r=0
if(s>0){for(s=b2.ee,q=0;p=b2.aK,q<p;++q)B.a.k(s,q,q)
b2.hD(p)
for(p=b2.c4,o=b2.c0,n=0;n<b2.aK;++n){if(!(n<4000))return A.c(s,n)
m=s[n]
if(!(m<p.length))return A.c(p,m)
l=p[m]
r=A.m9(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.c4,p=b2.c0,q=0;q<b2.aK;++q){if(!(q<s.length))return A.c(s,q)
l=s[q]
r=A.m9(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.aK=0
for(s=b2.ed,q=0;p=b2.bb,q<p;++q)B.a.k(s,q,q)
b2.hE(p)
for(p=b2.ij,o=b2.ec,k=0,n=0;n<b2.bb;++n){if(!(n<800))return A.c(s,n)
m=s[n]
if(!(m<o.length))return A.c(o,m)
j=o[m]
i=A.jj(0)
m=j.b
h=b2.c8
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.c7
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
e=b2.c6
k=A.mb(p,k,a3,a4,a5,a6,new A.i(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.bb=0
s=b2.a8
o=b2.bT
o===$&&A.f()
s.cE(o,b2.c0,r)
o=b2.bU
o===$&&A.f()
s.cE(o,p,k)
b2.da()
p=b2.a4
o=b2.dy
o===$&&A.f()
p.uniform1i(o,0)
o=b2.bW
o===$&&A.f()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.H(r,14));++b2.aJ
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.bX
m===$&&A.f()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.H(k,14));++b2.aJ
m=b2.c1
if(m>0){h=b2.bV
h===$&&A.f()
s.cE(h,b2.ik,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.bY
m===$&&A.f()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.c1/14|0);++b2.aJ}m=b2.ba
if(m!=null){a7=b2.ak
if(a7!=null)s.iU(m,a7)}a8=b2.ak
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.bZ
m===$&&A.f()
p.bindVertexArray(m)
a3=b2.b7
a4=b2.b8
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.V
g===$&&A.f()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.eL
g===$&&A.f()
p.uniform1i(g,0)
s.ac(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.cg
g===$&&A.f()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.ac(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.cg,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.b9
if(b2.b6>0&&a6!=null){s.ac(a6)
g=b2.V
g===$&&A.f()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.ci
g===$&&A.f()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.cj
g===$&&A.f()
p.uniform1i(g,7)
g=b2.ck
g===$&&A.f()
p.uniform1f(g,0.03171953255425709)
g=b2.cl
g===$&&A.f()
p.uniform1f(g,1)
g=b2.cm
g===$&&A.f()
p.uniform1f(g,0.5)
g=b2.cn
g===$&&A.f()
p.uniform1f(g,b2.b6)
g=b2.co
g===$&&A.f()
p.uniform2f(g,1/b2.al,1/b2.am)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.b5
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
g=b2.eJ
g===$&&A.f()
p.uniform1i(g,1)
g=b2.eK
g===$&&A.f()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.eM
s===$&&A.f()
b2.aI===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.eN
s===$&&A.f()
p.uniform1i(s,7)
s=b2.eO
s===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.dJ
s===$&&A.f()
p.uniform1i(s,11)
s=b2.dK
s===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.b6>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.eD
h===$&&A.f()
p.uniform1i(h,0)
h=b2.cc+=b3;++b2.el
s=b2.eE
s===$&&A.f()
p.uniform1f(s,h)
h=b2.eR
h===$&&A.f()
s=b2.el
p.uniform2f(h,B.c.aa(s*13,64),B.c.aa(s*29,64))
s=b2.eF
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eG
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eH
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eI
s===$&&A.f()
p.uniform1f(s,0)
s=b2.c_
if(s.a===B.a9)b1=0*(1-s.b/1)
else b1=0
s=b2.eU
s===$&&A.f()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.hZ.prototype={
$0(){var s=this.a.V
s===$&&A.f()
return s.b},
$S:22}
A.i_.prototype={
$1(a){return this.a.h(0,A.y(a))},
$S:15}
A.iy.prototype={
ghN(){var s=this.b
s===$&&A.f()
return s},
dj(){var s,r,q,p,o,n,m=this,l=m.hO(),k=m.a
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
m.eo=A.d(k.getUniformLocation(l,"uSoft"))
m.ep=A.d(k.getUniformLocation(l,"uSoftOn"))
m.eq=A.d(k.getUniformLocation(l,"uInternal"))
m.er=A.d(k.getUniformLocation(l,"uLightProj0"))
m.es=A.d(k.getUniformLocation(l,"uLightProj1"))
m.eu=A.d(k.getUniformLocation(l,"uLightProj2"))
m.im=A.d(k.getUniformLocation(l,"uShadow0"))
m.io=A.d(k.getUniformLocation(l,"uShadow1"))
m.ip=A.d(k.getUniformLocation(l,"uShadow2"))
m.ev=A.d(k.getUniformLocation(l,"uShadowCasters"))
m.cd=A.d(k.getUniformLocation(l,"uMaterialAlbedo"))
m.ce=A.d(k.getUniformLocation(l,"uStaticMaterial"))
m.ew=A.d(k.getUniformLocation(l,"uShadowBias"))
m.ex=A.d(k.getUniformLocation(l,"uMaterialCount"))
s=m.ey
B.a.I(s)
r=m.ez
B.a.I(r)
q=m.eA
B.a.I(q)
p=m.eB
B.a.I(p)
for(o=0;o<32;++o){n=""+o
B.a.m(s,A.d(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.m(r,A.d(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.m(q,A.d(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.m(p,A.d(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.cd,12)},
bA(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.cV(56)},
cV(a){var s=this,r=s.c
r===$&&A.f()
s.aE(r,3,a,0)
r=s.f
r===$&&A.f()
s.aE(r,3,a,12)
r=s.d
r===$&&A.f()
s.aE(r,4,a,24)
r=s.e
r===$&&A.f()
s.aE(r,1,a,40)
r=s.r
r===$&&A.f()
s.aE(r,3,a,44)},
aE(a,b,c,d){var s=this.a
A.b4(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
hO(){return this.ghN().$0()}}
A.i5.prototype={
bq(a){return null},
br(a){return null}}
A.i.prototype={
Z(a,b){return new A.i(this.a+b.a,this.b+b.b,this.c+b.c)},
T(a,b){return new A.i(this.a-b.a,this.b-b.b,this.c-b.c)},
a_(a,b){return new A.i(this.a*b,this.b*b,this.c*b)},
i9(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b2(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.i(s*r-q*p,q*o-n*r,n*p-s*o)},
gn(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga1(){var s=this,r=s.gn(0)
return r<1e-9?new A.i(0,0,0):new A.i(s.a/r,s.b/r,s.c/r)}}
A.fU.prototype={
iQ(a){var s,r,q,p,o,n
t.a3.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.dZ(s.getItem("quarantine.save.active"))
q=A.dZ(s.getItem("quarantine.save.previous"))
p=this.d0(r,a)
if(p!=null)return new A.c3(p,null)
o=this.d0(q,a)
if(o!=null)return new A.c3(o,"recovered previous save")
if(r==null)return B.bc
return B.bb}catch(n){return B.ba}},
d0(a,b){var s,r,q
t.a3.a(b)
if(a==null)return null
try{s=this.a.dG(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.a4(q) instanceof A.J)return null
else throw q}}}
A.aN.prototype={
U(){return"EndingKind."+this.b}}
A.h4.prototype={}
A.cj.prototype={
A(){var s=t.N
return A.O(["kind",this.a.b],s,s)}}
A.h7.prototype={
$1(a){return t.k.a(a).b===this.a.h(0,"kind")},
$S:24}
A.eO.prototype={
A(){var s=this,r=s.b,q=t.N
return A.O(["roomId",s.a,"eye",A.O(["x",r.a,"y",r.b,"z",r.c],q,t.i),"yaw",s.c,"pitch",s.d],q,t.z)},
iy(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.T(0,new A.i(0,1.3499999999999999,0))
return!new A.eb(s,s.Z(0,new A.i(0,1.2000000000000002,0))).f0(a,r)}}
A.cs.prototype={
A(){return A.O(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.i3.prototype={
dG(a){var s,r,q,p,o,n,m=B.D.dH(a,null),l=t.f
if(!l.b(m))throw A.e(B.aI)
s=t.N
r=t.z
q=A.al(m,s,r)
p=q.h(0,"version")
if(!A.az(p)||p!==1)A.B(A.Y("unsupported save version "+A.w(p),null,null))
o=q.h(0,"run")
n=q.h(0,"meta")
if(!l.b(o)||!l.b(n))A.B(B.az)
l=A.al(o,s,r)
return A.ld(A.al(n,s,r),l,p)}}
A.c3.prototype={}
A.bV.prototype={
U(){return"GameSessionEventType."+this.b}}
A.en.prototype={}
A.hc.prototype={}
A.em.prototype={
gaq(){var s=this.d
return new A.hc(s.a,s.b)},
hR(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.e(A.aV(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.aY(B.aJ)}if(n<a)this.aY(B.aK)},
fC(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.bv(a)&&s.fB(b)},
iS(a){var s,r,q
t.au.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.ad)r.c=Math.min(1,r.c+0.1)},
fA(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.nb(j,A.bD(i.d,h).length)
if(a===B.ac)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.V(r)
A.na(j,new A.H(r,q.i("q(1)").a(new A.hd(k)),q.i("H<1>")).gn(0))
r=k.f
q=r.b
if(B.a.B(B.aV,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.ap(j.a/1*3)
B.a.m(r.r,new A.cu(q.a,a,b))
m=r.a
A.nk(m,q.a,n,k.b,A.bD(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.fo(B.b0)
s.r.i3(o,c)
l=B.d.ap(j.b/1*6)
if(l>0)r.bv(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aY(i,A.m(i).i("aY<2>")).aj(0,new A.he())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.aY(B.aM)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.aY(B.aL)},
aY(a){++this.x
B.a.m(this.w,new A.en())}}
A.hd.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.i6().fv(this.a.c,a.a)},
$S:25}
A.he.prototype={
$1(a){return t.L.a(a).e},
$S:16}
A.eb.prototype={
iG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.d7(f,c,d)
s=g.h6(a,b,c,d)
if(s!=null){g.d=s
return g.d7(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.hZ(Math.sqrt(r*r+q*q)/0.08))
o=d.a_(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.dv(a,n,m,new A.i(q,0,0))
l=l||j.b
i=g.f7(a,n)
n=i==null?n:i
h=g.dv(a,n,j.a,new A.i(0,0,r))
l=l||h.b
m=h.a
i=g.f7(a,n)
n=i==null?n:i}g.b0(m)
return new A.eE(m,n)},
h6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.d9(c,l.f)&&n
j=q&&this.d9(c,l.r)&&o
if(k||j)return new A.iz(l,k?0:1)}return null},
d7(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.T(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.a3(a.b+o/p,0,1)
n=A.lp(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.b0(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.eE(n,k)},
d9(a,b){var s=a.T(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
dv(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.du(c,!1)
s=c.Z(0,d)
this.b0(s)
if(this.f0(a,b)){this.b0(c)
return new A.du(c,!0)}return new A.du(s,!1)},
b0(a){var s=a.T(0,new A.i(0,1.3499999999999999,0))
this.a=s
this.b=s.Z(0,new A.i(0,1.2000000000000002,0))},
f0(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.hG(a,m,s)},
f7(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aG(k)
for(r=k.a,q=a.aO(r),p=J.M(q.a),q=new A.a9(p,q.b,q.$ti.i("a9<1>"));q.l();){o=p.gq()
n=o.f5(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.at&&!o.ax&&!o.z&&this.dB(k,o,s)&&this.h3(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
hG(a,b,c){var s,r,q
for(s=a.aO(b.a),r=J.M(s.a),s=new A.a9(r,s.b,s.$ti.i("a9<1>"));s.l();){q=r.gq()
if(q.at&&!q.ax&&!q.z&&this.dB(b,q,c))return!0}return!1},
dB(a,b,c){var s,r,q,p=a.a,o=b.aw(p),n=b.ao(p)
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
A.eE.prototype={}
A.du.prototype={}
A.iz.prototype={}
A.d0.prototype={}
A.hk.prototype={
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
A(){return A.O(["landedCount",this.b],t.N,t.z)}}
A.i1.prototype={
fP(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.o()
o.c=new A.hl(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.x)(n),++q){p=n[q]
r.k(0,p.a,o.cW(p))}},
iR(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.x)(r),++o)p.is(r[o])
s.k(0,a,n.cW(m))},
cW(a){var s,r=new A.dk(new Float32Array(5376)),q=new A.dk(new Float32Array(5376)),p=new A.dk(new Float32Array(5376)),o=a.d,n=this.a.aG(a),m=o.a,l=o.b,k=o.c,j=n.c,i=k+j,h=n.a,g=m+h
h/=2
j/=2
r.f8(new A.i(m,l,k),new A.i(m,l,i),new A.i(g,l,i),new A.i(g,l,k),11053224,h,j)
l+=n.b
q.f8(new A.i(m,l,k),new A.i(g,l,k),new A.i(g,l,i),new A.i(m,l,i),12632256,h,j)
for(s=0;s<4;++s)this.fV(p,a,n,B.b3[s])
m=this.b
return A.j([m.bP(B.r.bw(r.a,0,r.b),1),m.bP(B.r.bw(q.a,0,q.b),2),m.bP(B.r.bw(p.a,0,p.b),0)],t.t)},
fV(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a3===B.e||a3===B.h?a2.a:a2.c,a=A.j([],t.bx)
for(s=a1.a,r=this.a.aO(s),q=J.M(r.a),r=new A.a9(q,r.b,r.$ti.i("a9<1>"));r.l();){p=q.gq()
if(!p.as&&p.aw(s)===a3)a.push(new A.bJ(p.ao(s),p.ao(s)+p.w,0,p.x))}for(s=a1.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
if(n.b===a3){q=n.c
p=n.d
a.push(new A.bJ(q,q+n.e,p,p+n.f))}}s=t.i
r=A.eC([0,b],s)
for(q=a.length,p=t.u,o=0;o<a.length;a.length===q||(0,A.x)(a),++o){m=a[o]
r.Y(0,A.j([m.a,m.b],p))}l=A.aE(r,r.$ti.c)
B.a.a2(l)
s=A.eC([0,a2.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.x)(a),++o){m=a[o]
s.Y(0,A.j([m.c,m.d],p))}k=A.aE(s,s.$ti.c)
B.a.a2(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.c(l,j)
f=l[j]
if(!(i<r))return A.c(l,i)
e=l[i]
if(!(h<s))return A.c(k,h)
d=k[h]
c=k[g]
if(B.a.aj(a,new A.i2(f,e,d,c)))continue
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
default:o=p}a.f9(s,r,q,o,9145227,e/2,(f-e)/2,g/2,(h-g)/2)},
fj(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.y
s=l.a
r=A.eC([s],t.N)
for(n=n.aO(s),q=J.M(n.a),n=new A.a9(q,n.b,n.$ti.i("a9<1>"));n.l();){p=q.gq()
o=p.f5(s)
if(!(p.at&&!p.ax&&!p.z)||o==null||m.h(0,o)==null)continue
r.m(0,o)}return r},
ia(a,b){var s,r,q,p,o=this,n=o.fj(a),m=o.b,l=o.c
l===$&&A.f()
l=t.cH.a(l.j4(n,b))
s=t.A
m.c5=l.length<=4?A.bD(l,s):A.bD(A.jZ(l,0,A.cP(4,"count",t.S),A.V(l).c),s)
for(l=n.gt(n),s=o.d;l.l();){r=s.h(0,l.gq())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.x)(r),++p)m.ib(r[p])}}}
A.i2.prototype={
$1(a){var s,r,q=this
t.cp.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:27}
A.bJ.prototype={}
A.hj.prototype={
hc(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.x)(s),++p){o=s[p]
n=o.a
if(q.N(n))throw A.e(A.a2("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.x)(s),++p){m=s[p]
n=m.a
if(q.N(n))throw A.e(A.a2("duplicate portal "+n))
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
if(g&&f&&e)throw A.e(A.a2("3D room overlap: "+n.a+" and "+m.a))}},
hJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.r(t.N,t.h7)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.x)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.x)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.dA(o,i,h,g,f,e)
a5.cS(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.x)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.e(A.a2(l+" references invalid portal "+d))
i=c.aw(l)
h=c.ao(l)
g=c.w
f=c.x
a5.dA(o,i,h,g,0,f)
a5.cS(a6,l,c.aw(l),c.ao(l),c.ao(l)+g,0,f)}}for(s=new A.K(a6,a6.$ti.i("K<1,2>")).gt(0);s.l();){b=s.d
a=b.b
r=J.bl(a)
r.X(a,new A.ho())
for(a0=0;a0<r.gn(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gn(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.e(A.a2("overlapping apertures on "+b.a))}}},
dA(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.e||b===B.h
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.e(A.a2("aperture outside "+a.a+" "+b.b+" wall"))},
cS(a,b,c,d,e,f,g){J.fF(t.h6.a(a).iP(b+":"+c.b,new A.hn()),new A.dJ([d,e,f,g]))},
aG(a){var s=a.c,r=this.r,q=a.a
return new A.i(s.a+r.fw(q),s.b+r.fz(q),s.c)},
aO(a){var s=this.c,r=A.V(s)
return new A.H(s,r.i("q(1)").a(new A.hp(a)),r.i("H<1>"))},
iO(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.e(A.aV(a,"roomId","not a portal endpoint"))
r=this.aG(o)
q=b.ao(a)+b.w*0.5
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
gj6(){return B.a.eW(this.b,0,new A.hq(),t.S)}}
A.ho.prototype={
$2(a,b){var s=t.bq
s.a(a)
s.a(b)
return B.d.J(a.a[0],b.a[0])},
$S:28}
A.hn.prototype={
$0(){return A.j([],t.eV)},
$S:29}
A.hp.prototype={
$1(a){var s
t.ap.a(a)
s=this.a
return a.b===s||a.c===s},
$S:30}
A.hq.prototype={
$2(a,b){return A.a(a)+t.J.a(b).e.length},
$S:31}
A.h8.prototype={}
A.i6.prototype={
fv(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.ae(s,new A.i7())}else s=!1
return s}}
A.i7.prototype={
$1(a){return t.g4.a(a).w},
$S:32}
A.b9.prototype={}
A.hl.prototype={
j4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.cq.a(a)
s=A.j([],t.bs)
for(r=a.gt(a),q=this.a.e;r.l();){p=q.h(0,r.gq())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.x)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.m(s,new A.b9(new A.i(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.hz(j),0.06))}}B.a.X(s,new A.hm(b))
return A.jZ(s,0,A.cP(4,"count",t.S),t.A).fc(0)},
hz(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.hm.prototype={
$2(a,b){var s=t.A
s.a(a)
s.a(b)
s=this.a
return B.d.J(a.a.T(0,s).gn(0),b.a.T(0,s).gn(0))},
$S:33}
A.by.prototype={
U(){return"Facing."+this.b}}
A.an.prototype={}
A.c2.prototype={
f5(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aw(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.e(A.aV(a,"roomId","not an endpoint of "+s.a))},
ao(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.e(A.aV(a,"roomId","not an endpoint of "+s.a))}}
A.as.prototype={}
A.eV.prototype={}
A.ai.prototype={}
A.ep.prototype={
A(){var s,r,q,p,o,n=this,m=t.N,l=t.am,k=A.r(m,l)
for(s=n.a,s=new A.K(s,A.m(s).i("K<1,2>")).gt(0),r=t.y;s.l();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.O(["open",o.a,"locked",o.b],m,r))}l=A.r(m,l)
for(s=n.c,s=new A.K(s,A.m(s).i("K<1,2>")).gt(0);s.l();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.O(["lit",o.a,"examined",o.b],m,r))}return A.O(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d],m,t.z)},
hU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.af(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q)d.m(0,s[q].a)
r=A.af(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.x)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.x)(n),++l)r.m(0,n[l].a)
e=A.af(e)
for(q=0;q<p.length;p.length===n||(0,A.x)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.x)(o),++l)e.m(0,o[l].a)
o=f.a
n=!0
if(A.kq(new A.Z(o,A.m(o).i("Z<1>")),d)){d=f.b
if(A.kq(new A.Z(d,A.m(d).i("Z<1>")),r)){d=f.c
e=!A.kq(new A.Z(d,A.m(d).i("Z<1>")),e)}else e=n}else e=n
if(e)throw A.e(B.aE)
e=f.d
if(e<0||e>2)A.B(B.av)
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
A.dg.prototype={
A(){return A.O(["open",this.a,"locked",this.b],t.N,t.y)}}
A.d7.prototype={
A(){return A.O(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.h3.prototype={
$1(a){return this.a.B(0,A.y(a))},
$S:2}
A.bz.prototype={
U(){return"Hand."+this.b}}
A.iw.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.m:s},
cK(a,b){var s,r,q,p,o=A.j([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.eB.prototype={
A(){var s,r,q,p=t.N,o=A.r(p,t.v)
for(s=this.a,r=0;r<5;++r){q=B.i[r]
o.k(0,q,s.h(0,q))}return A.O(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.at(B.i,t.gk.a(new A.hK(this)),t.e1).bj(0," \xb7 ")}}
A.hJ.prototype={
$2(a,b){return new A.A(A.y(a),A.y(b),t.q)},
$S:35}
A.hK.prototype={
$1(a){return this.a.a.h(0,A.y(a))},
$S:15}
A.aC.prototype={
A(){var s,r,q,p=this,o=A.j([],t.c7)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q)o.push(s[q].A())
s=p.r
s=s==null?null:s.A()
return A.O(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.hx.prototype={
aF(a){t.G.a(a)
return a.a===5&&B.a.ae(B.i,new A.hE(this,a))},
cT(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.aF(b))return null
s=this.e++
r=new A.aC(s,a,A.j([A.hI(b,c,d)],t.aW),e,!1,null,null)
this.b.k(0,s,r)
return r},
bS(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.aF(b))return!1
B.a.m(s.c,A.hI(b,c,B.w))
return!0},
hQ(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.aF(b))return!1
s.r=A.hI(b,0,B.Y)
return!0},
fo(a){var s,r,q,p
t.I.a(a)
s=this.d
B.a.I(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.N(p)&&!B.a.B(s,p))B.a.m(s,p)}},
j3(a){var s
if(!this.b.N(a))return!1
s=this.d
if(!B.a.B(s,a))B.a.m(s,a)
return!0},
A(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.aE(n,A.m(n).c)
B.a.a2(n)
s=A.j([],t.c7)
for(r=q.b,r=new A.a_(r,r.r,r.e,A.m(r).i("a_<2>"));r.l();)s.push(r.d.A())
return A.O(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.hE.prototype={
$1(a){var s
A.y(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.B(this.a.a.h(0,a),s)},
$S:2}
A.au.prototype={
U(){return"SleepQuality."+this.b}}
A.am.prototype={
U(){return"SleepLocation."+this.b}}
A.cu.prototype={}
A.fX.prototype={
bv(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
fB(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
A(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.j([],t.ez)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
i.push(A.O(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.O(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.fY.prototype={
$1(a){return t.p.a(a).b===this.a},
$S:36}
A.fZ.prototype={
$1(a){return t.eq.a(a).b===this.a},
$S:37}
A.et.prototype={
U(){return"InteractionType."+this.b}}
A.c8.prototype={
U(){return"WorldComparisonKind."+this.b}}
A.ix.prototype={}
A.c7.prototype={}
A.eg.prototype={}
A.hr.prototype={}
A.ht.prototype={
cH(){var s,r,q,p=t.r,o=A.j([],p)
for(s=this.a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>")),r=this.b;s.l();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.j(o.slice(0),p)
B.a.X(p,new A.hu())
return p},
i2(a,b){var s,r,q,p,o,n=b.b
if(n.gC(n))return B.bR
s=t.N
r=A.af(s)
q=A.af(s)
for(s=n.gL(),s=s.gt(s),p=a.c;s.l();){o=s.gq()
if(B.a.gG(p).a.h(0,o)==n.h(0,o))r.m(0,o)
else q.m(0,o)}if(q.a!==0)return new A.c7(B.C,r)
s=r.a
o=B.a.gG(p).a
if(s===o.gn(o)){n=n.gn(n)
p=B.a.gG(p).a
p=n===p.gn(p)
n=p}else n=!1
if(n)return new A.c7(B.ag,r)
return new A.c7(B.L,r)},
hs(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.eg(e,!1,B.bQ,null)
s=p.d===c
r=this.i2(p,d)
q.j3(e)
return new A.eg(e,s,r,r.a===B.C&&s?'The world says "'+d.c+'". The entry says "'+B.a.gG(p.c).p(0)+'".':null)},
i6(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.C)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.hr(B.a.gG(s.c).p(0)+" but "+A.w(a.f))}}
A.hu.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.J(s.a(b).a,a.a)},
$S:7}
A.ba.prototype={
U(){return"RuptureStep."+this.b}}
A.eT.prototype={
fE(a){var s=this
if(s.a!==B.l)return
s.a=B.a9
s.b=0
s.e=!1
s.hu(a)},
hu(a){var s,r,q,p,o,n,m,l,k,j=this.c
B.a.I(j)
for(s=a.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.x)(s),++q){p=s[q]
for(o=p.r,n=o.length,m=p.a+":",l=0;l<o.length;o.length===n||(0,A.x)(o),++l){k=o[l]
if(k.d&&!k.e)B.a.m(j,m+B.a.be(o,k))}}},
hS(a,b){var s,r,q=this,p=q.a
if(p===B.l)return
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
case 6:if(s>=4){q.a=B.l
q.b=0
q.e=!0
s=r
p=B.l}break
case 0:break}if(p===B.x)q.h8(s,b)},
h8(a,b){var s,r,q,p,o=this.d
o.I(0)
s=this.c
r=s.length
if(r===0)return
q=B.c.a3(B.d.W(a/(4/r)),0,r)
for(p=0;p<q;++p){if(!(p<s.length))return A.c(s,p)
o.m(0,s[p])}}}
A.eo.prototype={
gbx(){var s=this.b
if(s<6||s>18)return 0
return B.d.a3((s-6)/12,0,1)}}
A.ia.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.cw(g.a),e=t.N,d=A.r(e,t.a)
for(s=g.b,s=new A.K(s,A.m(s).i("K<1,2>")).gt(0);s.l();){r=s.d
q=r.a
d.k(0,q,g.hL(q,r.b))}s=A.cw(g.r)
q=A.cw(g.w)
p=A.cw(g.x)
o=A.r(e,t.dW)
for(n=g.as,n=new A.K(n,A.m(n).i("K<1,2>")).gt(0),m=t.gE;n.l();){l=n.d
k=l.a
j=A.j([],m)
for(i=J.M(l.b);i.l();){h=i.gq()
j.push(A.O(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.O(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
hL(a,b){var s,r=A.cw(t.bw.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.cw(q.az(0,new A.ib(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gE(s))r.k(0,"_ambient",A.cw(s.az(0,new A.ic(),t.S,t.z)))
return r}}
A.ib.prototype={
$2(a,b){return new A.A(A.a(a),t.f2.a(b).A(),t.b3)},
$S:39}
A.ic.prototype={
$2(a,b){return new A.A(A.a(a),t.d8.a(b).A(),t.b3)},
$S:61}
A.c6.prototype={
A(){return A.O(["hour",this.a,"order",this.b],t.N,t.S)}}
A.c5.prototype={
A(){return A.O(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.dr.prototype={
A(){var s=t.N
return A.O(["field",this.a,"value",this.b],s,s)}}
A.ie.prototype={
aL(){var s=0,r=A.bi(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$aL=A.bj(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ac(A.b6(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$aL)
case 6:n=b
s=7
return A.ac(A.b6(A.b(n.text()),t.N),$async$aL)
case 7:m=b
l=A.pX(m)
j=J.ao(l,"broadcasts")
j.toString
i=t.a
o.a=i.a(j)
j=J.ao(l,"visitors")
j.toString
o.b=i.a(j)
j=J.ao(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.ao(l,"documents")
j.toString
i.a(j)
j=J.ao(l,"street")
j.toString
i.a(j)
j=J.ao(l,"unverifiables")
j.toString
i.a(j)
j=J.ao(l,"nights")
j.toString
i.a(j)
j=J.ao(l,"endings")
j.toString
o.w=i.a(j)
j=J.ao(l,"records")
j.toString
i.a(j)
j=J.ao(l,"cues")
j.toString
i.a(j)
j=J.ao(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.a4(g)
j=A.w(k)
throw A.e("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bg(null,r)
case 1:return A.bf(p.at(-1),r)}})
return A.bh($async$aL,r)},
fi(a){var s,r,q,p=this.a
p===$&&A.f()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gO().cF(0,new A.ig())
r=p.$ti
q=t.N
q=A.r(q,q)
q.hP(new A.bn(p,r.i("A<k,k>(1)").a(new A.ih()),r.i("bn<1,A<k,k>>")))
return q}return null},
fl(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.f()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.W(p)||o!==B.d.W(o))return n
return new A.c6(B.d.W(p),B.d.W(o))},
fk(a,b){var s,r,q,p,o,n,m=null,l=this.b
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
return new A.c5(B.d.W(p),o,n)},
j5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.r(a1,t.bw),a3=A.r(a1,t.gy),a4=A.r(a1,t.c9),a5=t.h,a6=A.r(a1,t.et),a7=b.b
a7===$&&A.f()
a7=new A.K(a7,A.m(a7).i("K<1,2>")).gt(0)
s=t.d8
r=t.f2
q=t.f
while(a7.l()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.r(a,a0)
for(o=o.gO(),o=o.gt(o);o.l();){m=o.gq()
l=m.a
k=typeof l=="string"?A.hU(l,null):null
if(k==null||!q.b(m.b))continue
j=A.r(a1,a1)
for(m=q.a(m.b).gO(),m=m.gt(m);m.l();){l=m.gq()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.y(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.r(a,r)
for(m=n.$ti.i("bB<1>"),l=new A.bB(n,n.r,n.e,m);l.l();){i=l.d
g=b.fl(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.r(a,s)
for(m=new A.bB(n,n.r,n.e,m);m.l();){l=m.d
e=b.fk(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.f()
a7=new A.K(a7,A.m(a7).i("K<1,2>")).gt(0)
s=t.eW
r=t.j
while(a7.l()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.j([],s)
for(m=J.M(d);m.l();){c=m.gq()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.dr(A.y(c.h(0,"field")),A.y(c.h(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.ia(A.r(a,a0),a2,a3,a4,A.r(a1,a5),A.r(a1,a5),A.r(a,a5),A.r(a,a5),A.r(a,a5),A.r(a1,a5),A.r(a1,a5),A.r(a1,a5),a6)}}
A.ig.prototype={
$1(a){t.bz.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:41}
A.ih.prototype={
$1(a){t.bz.a(a)
return new A.A(A.y(a.a),A.y(a.b),t.q)},
$S:42}
A.fN.prototype={
fs(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.b(v.G.window).setTimeout(A.a0(new A.fO(this)),7000))}}
A.fO.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:43}
A.fT.prototype={
cD(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.h_.prototype={
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
for(i=A.fz,s=l.r,q=0;q<5;++q){p=B.aY[q]
o=A.b(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.h0(l,p)
if(typeof n=="function")A.B(A.ad("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.cS()]=n
o.addEventListener("click",m)
A.b(r.appendChild(o))
B.a.m(s,o)}i=A.E(a,"button","door-continue","continue")
l.d!==$&&A.o()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.a0(new A.h1(l)))
A.b(r.appendChild(i))
A.b(A.d(a.body).appendChild(r))},
cJ(a,b){var s,r,q,p=this
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
bt(a){var s,r,q=this,p=q.c
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
for(r=b.length,q=A.fz,p=0;p<b.length;b.length===r||(0,A.x)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.h2(o,this)
if(typeof o=="function")A.B(A.ad("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.cS()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
bd(){var s,r=this
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
A.h0.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.h1.prototype={
$1(a){var s
A.b(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.h2.prototype={
$1(a){var s
A.b(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.h5.prototype={
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
q.addEventListener("click",A.a0(new A.h6(p)))
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
A.b(s.appendChild(n))}m.bn()},
siL(a){this.w=t.Y.a(a)}}
A.h6.prototype={
$1(a){var s
A.b(a)
s=this.a
s.ad()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.hh.prototype={
fM(a){var s,r="help-copy",q=this.b,p=this.a
A.b(q.appendChild(A.E(p,"h1","journal-title","house notes")))
A.b(q.appendChild(A.E(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.b(q.appendChild(A.E(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.E(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.a0(new A.hi(this)))
A.b(q.appendChild(s))}}
A.hi.prototype={
$1(a){A.b(a)
return this.a.ad()},
$S:1}
A.hy.prototype={
fX(){var s,r=this,q=r.a,p=A.E(q,"div","page-turn",null),o=A.E(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a0(new A.hz(r)))
s=A.E(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a0(new A.hA(r)))
q=A.E(q,"span","right-day-label",null)
r.Q!==$&&A.o()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
dw(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.cZ(s.CW+a,r)
s.dg()},
cZ(a,b){if(a<1)return 1
if(a>b)return b
return a},
hv(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.f()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.f()
s.textContent=""
for(s=j.w.cH(),r=s.length,q=A.fz,p=j.a,o=0;o<s.length;s.length===r||(0,A.x)(s),++o){n=s[o]
m=B.a.gG(n.c).p(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.hB(j,n,l)
if(typeof m=="function")A.B(A.ad("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.cS()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
dg(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.f()
s=t.r
r=A.j([],s)
for(q=j.f,p=q.b,o=A.m(p).i("a_<2>"),n=new A.a_(p,p.r,p.e,o),m=j.r;n.l();){l=n.d
if(l.b===m.a)r.push(l)}B.a.X(r,new A.hC())
j.df(i,r)
i=j.Q
i===$&&A.f()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.f()
s=A.j([],s)
for(r=new A.a_(p,p.r,p.e,o);r.l();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.X(s,new A.hD())
j.df(i,s)
k=B.d.a3(q.f/4,0,1)
i=j.as
i===$&&A.f()
A.b(i.style).setProperty("width",B.d.cC(k*100,1)+"%")},
df(a,b){var s,r
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
A.hz.prototype={
$1(a){A.b(a)
return this.a.dw(-1)},
$S:1}
A.hA.prototype={
$1(a){A.b(a)
return this.a.dw(1)},
$S:1}
A.hB.prototype={
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
A.hC.prototype={
$2(a,b){var s=t.L
return B.c.J(s.a(a).a,s.a(b).a)},
$S:7}
A.hD.prototype={
$2(a,b){var s=t.L
return B.c.J(s.a(a).a,s.a(b).a)},
$S:7}
A.df.prototype={
aR(a){var s=this.b
s.className="panel"
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.d(this.a.body).appendChild(s))},
bn(){var s,r,q,p,o=this,n=o.b
if(B.b.B(A.y(n.className),"open"))return
s=$.hT
if(s!=null&&s!==o)s.ad()
$.hT=o
r=o.a
o.d=A.d(r.activeElement)
A.kZ(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.a0(o.ghp())
o.e=q
r.addEventListener("keydown",q)
p=A.m0(n)
if(p.length!==0)B.a.gbc(p).focus()},
ad(){var s,r,q=this,p=q.b
if(!B.b.B(A.y(p.className),"open"))return
p.className="panel"
if($.hT===q)$.hT=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
hq(a){A.b(a)
if(A.ay(a.defaultPrevented))return
if(A.y(a.code)==="Escape"){this.ad()
return}if(A.y(a.code)==="Tab")this.hH(a)},
hH(a){var s,r=A.m0(this.b)
if(r.length===0)return
s=A.d(this.a.activeElement)
if(A.ay(a.shiftKey)){if(s===B.a.gbc(r)||!B.a.B(r,s)){a.preventDefault()
B.a.gG(r).focus()}}else if(s===B.a.gG(r)||!B.a.B(r,s)){a.preventDefault()
B.a.gbc(r).focus()}},
sbm(a){this.c=t.Y.a(a)}}
A.hV.prototype={
fq(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.i8.prototype={
fQ(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.b(i.appendChild(A.E(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.E(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.E(a,"div","entry-picker",null)
for(r=A.fz,q=0;q<2;++q){p=B.a0[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.a3[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.i9(this,p,m)
if(typeof k=="function")A.B(A.ad("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.cS()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
siM(a){this.f=t.bV.a(a)}}
A.i9.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ad()},
$S:3}
A.aT.prototype={}
A.fK.prototype={
iW(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.V(s)
q=new A.at(s,r.i("k(1)").a(new A.fM()),r.i("at<1,k>")).j1(0)
r=this.b
r.I(0)
s=J.mW(a,t.N)
p=s.$ti
r.Y(0,new A.H(s,p.i("q(l.E)").a(q.gdF(q)),p.i("H<l.E>")))},
ic(a,b){var s,r,q,p,o,n=A.j([],t.cy)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.B(0,o.a))n.push(o)}return n}}
A.fM.prototype={
$1(a){return t.c.a(a).a},
$S:45}
A.fL.prototype={
$2(a,b){var s,r=t.c
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.J(r,s):B.c.J(a.c,b.c)},
$S:46}
A.f7.prototype={
iA(a){return this.c.B(0,t.g.a(a))},
iV(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.ae(0,j.gi4())||!a.a.ae(0,new A.iu(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.B(0,r)){o=s.c
if(o!==B.B){n=s.d
if(n<J.aM(p)){o=o===B.o
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.p}else j=!1}}}if(j)return!1
m=new A.f6(r,s.b,A.bD(p,t.w),B.o)
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
dC(a){var s=this.a,r=A.m(s).i("Z<1>"),q=r.i("H<l.E>")
s=A.aE(new A.H(new A.Z(s,r),r.i("q(l.E)").a(new A.ir(a)),q),q.i("l.E"))
B.a.X(s,new A.is())
return s},
hW(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.bM
s=m.a.h(0,a)
if(s==null)return B.bN
r=B.c.H(a.b-1,7)
q=a.a
p=m.b.B(0,q)||r+1>=3||m.f?B.I:B.t
o=p===B.t&&m.r.B(0,q)&&s.N(B.J)?B.J:p
if(s.N(o))n=o
else n=s.N(B.t)?B.t:B.I
r=s.h(0,n)
r.toString
r=new A.f6(a,n,A.bD(r,t.w),B.o)
m.e=r
return new A.f5(r)},
i_(a){var s,r,q,p,o,n=this.e
if(n==null)return B.af
if(n.d!==B.o)return B.bK
n.e=a
s=a===B.p
n.d=s?B.B:B.z
r=this.d
q=s?B.ad:B.bv
p=n.a
o=p.a
p=p.b
B.a.m(r,new A.bs(q,o,p,a,null))
if(a===B.v)B.a.m(r,new A.bs(B.by,o,p,a,null))
if(s)this.dh(n)
return new A.f4(n)},
hT(){var s,r=this.e
if(r==null)return B.af
s=r.d
if(s!==B.z&&s!==B.A)return B.bL
r.d=B.A
if(++r.f>=r.c.length){r.d=B.B
this.dh(r)
return new A.dq(r,!0)}return new A.dq(r,!1)},
i0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.z&&s!==B.A}else s=!0
if(s)return i
r=h.gb3()
if(r==null)return i
s=t.N
q=A.r(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.c(o,p)
p=o[p].c}else p=B.a1
p=J.M(p)
while(p.l()){o=p.gq()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.jP(q,s,s)
m=c.hs(!0,!0,o,new A.ix(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.C){B.a.m(this.d,new A.bs(B.bx,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gG(j.c)
s=A.l4(s,s)
s.Y(0,o.a)
s.Y(0,q)
p.hQ(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ag)if(k===B.L){s=n.b
s=s.gE(s)}else s=!1
else s=!0
if(s)B.a.m(this.d,new A.bs(B.bw,o,p.b,i,l))}}return m},
dh(a){var s=a.a
this.b.m(0,s.a)
this.c.m(0,s)
this.e=null},
sfD(a){this.r=t.cq.a(a)}}
A.iu.prototype={
$1(a){var s=this.a.a
return new A.Z(s,A.m(s).i("Z<1>")).aj(0,new A.it(A.y(a)))},
$S:2}
A.it.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:8}
A.ir.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:8}
A.is.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.J(a.c,b.c)
return s!==0?s:B.c.J(a.d,b.d)},
$S:48}
A.iq.prototype={
$2(a,b){var s=t.w
return B.c.J(s.a(a).a,s.a(b).a)},
$S:49}
A.f8.prototype={}
A.fm.prototype={}
A.jo.prototype={
$1(a){return B.b.S(A.y(a),"off.")},
$S:2}
A.ap.prototype={
U(){return"DoorChoice."+this.b}}
A.aF.prototype={
U(){return"VisitPhase."+this.b}}
A.aG.prototype={
U(){return"VisitTier."+this.b}}
A.bH.prototype={
U(){return"VisitorFactKind."+this.b}}
A.bs.prototype={
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
U(){return"VisitorIssueCode."+this.b}}
A.aH.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aH&&b.a===this.a&&b.b===this.b},
gD(a){return A.cp(this.a,this.b,B.f,B.f)}}
A.aP.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aP&&b.a===this.a&&b.b===this.b},
gD(a){return A.cp(this.a,this.b,B.f,B.f)}}
A.av.prototype={
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.av&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gD(a){var s=this
return A.cp(s.a,s.b,s.c,s.d)},
A(){var s=this
return A.O(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.f9.prototype={
A(){var s,r,q,p=this.a
p=A.aE(p,A.m(p).c)
B.a.a2(p)
s=this.b
r=A.m(s)
q=r.i("bT<1,D<k,@>>")
s=A.aE(new A.bT(s,r.i("D<k,@>(1)").a(new A.ip()),q),q.i("l.E"))
r=this.c
return A.O(["contacted",p,"resolved",s,"active",r==null?null:r.A()],t.N,t.z)}}
A.ip.prototype={
$1(a){return t.g.a(a).A()},
$S:50}
A.e6.prototype={
A(){var s=this,r=s.a.A(),q=s.e
q=q==null?null:q.b
return A.O(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.fH.prototype={
$1(a){return t.b.a(a).b===this.a},
$S:51}
A.fI.prototype={
$1(a){return t.gY.a(a).b===this.a},
$S:52}
A.fJ.prototype={
$1(a){return t.V.a(a).b===this.a},
$S:53}
A.f6.prototype={
gb3(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
s=r[s].b}else s=null
return s}}
A.iv.prototype={}
A.aw.prototype={}
A.f5.prototype={}
A.f4.prototype={}
A.dq.prototype={}
A.jw.prototype={
$1(a){var s
try{A.kU(a,this.a)
return!0}catch(s){if(A.a4(s) instanceof A.J)return!1
else throw s}},
$S:54}
A.jx.prototype={
$0(){$.ax=null
$.aI.j().af($.a3.j())},
$S:0}
A.jy.prototype={
$2(a,b){var s,r,q,p,o
if($.T.j().gaq().a===21){A.md(!1)
return}s=$.a6.j().r.b
$.T.j().fA(a,b,$.b2)
r=$.a6.j().r.b
q=s
for(;;){p=q
o=r
if(typeof p!=="number")return p.bs()
if(typeof o!=="number")return A.fC(o)
if(!(p<o))break
p=$.kh
if(p!=null){if($.a6.b===$.a6)A.B(A.ar(""))
p.iR(B.a.h(B.n,q).b)}p=q
if(typeof p!=="number")return p.Z()
q=p+1}A.kr("saved after sleep")},
$S:55}
A.jA.prototype={
$0(){$.ax=null
$.aI.j().af($.a3.j())},
$S:0}
A.jB.prototype={
$0(){$.ax=null
$.aI.j().af($.a3.j())},
$S:0}
A.jC.prototype={
$0(){$.ax=null},
$S:0}
A.jD.prototype={
$0(){$.ax=null},
$S:0}
A.jE.prototype={
$1(a){A.b(a)
return A.mc()},
$S:1}
A.jF.prototype={
$1(a){var s,r
A.b(a)
if(A.y(a.code)==="KeyP"&&!A.ay(a.repeat))$.kn=!$.kn
if(A.y(a.code)==="KeyR"&&!A.ay(a.repeat)&&$.mj){s=$.cK
if(s!=null)s.aA()}if(A.y(a.code)==="KeyJ"&&!A.ay(a.repeat)&&!$.aa.j().z){s=$.ax
if(s==null){$.ax=$.cH.j()
s=$.cH.j()
s.fH()
r=s.r.a-1
if(r<1)r=1
s.CW=s.cZ(s.CW,r)
s.hv()
s.dg()}else if(s===$.cH.j())$.cH.j().ad()}if(A.y(a.code)==="KeyL"&&!A.ay(a.repeat)&&!$.aa.j().z){s=$.ax
if(s==null){$.ax=$.fx.j()
$.fx.j().bn()}else if(s===$.fx.j())$.fx.j().ad()}if(A.y(a.code)==="KeyH"&&!A.ay(a.repeat)&&!$.aa.j().z){s=$.ax
if(s==null){$.ax=$.fv.j()
$.fv.j().bn()}else if(s===$.fv.j())$.fv.j().ad()}if(A.y(a.code)==="KeyK"&&!A.ay(a.repeat))A.kr("saved")},
$S:3}
A.jG.prototype={
$1(a){A.b(a)
return A.lS()},
$S:1}
A.jH.prototype={
$1(a){A.b(a)
return A.lS()},
$S:1}
A.jz.prototype={
$1(a){A.b(a)
return $.aI.j().af($.a3.j())},
$S:1}
A.jc.prototype={
$1(a){var s=A.y(A.b(a).message)
A.jf(s,null)},
$S:3}
A.jd.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.jf("unhandled rejection: "+A.w(s==null?A.y(a.type):s),null)},
$S:3}
A.ji.prototype={
$1(a){this.a.className=""},
$S:56}
A.jg.prototype={
$1(a){return t.L.a(a).e},
$S:16};(function aliases(){var s=J.bA.prototype
s.fG=s.p
s=A.l.prototype
s.fF=s.cF
s=A.df.prototype
s.fH=s.bn})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1u,q=hunkHelpers._static_1,p=hunkHelpers._static_0,o=hunkHelpers._instance_1i
s(J,"pg","nC",17)
r(A.b8.prototype,"gi4","N",14)
q(A,"pQ","of",4)
q(A,"pR","og",4)
q(A,"pS","oh",4)
p(A,"ml","pE",0)
s(A,"pT","nG",17)
o(A.be.prototype,"gdF","B",14)
q(A,"pV","p2",5)
var n
r(n=A.es.prototype,"ghh","hi",1)
r(n,"ghj","hk",1)
r(n,"ghn","ho",1)
r(n,"ghl","hm",1)
q(A,"qn","lZ",5)
r(A.df.prototype,"ghp","hq",1)
r(A.f7.prototype,"giz","iA",8)
q(A,"mq","pv",59)
q(A,"qg","p_",60)
p(A,"qi","p1",0)
q(A,"qh","p0",40)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.jT,J.eu,A.di,J.bP,A.l,A.cU,A.bx,A.I,A.z,A.i4,A.bZ,A.c0,A.a9,A.ds,A.Q,A.bc,A.b0,A.cn,A.cV,A.cc,A.bo,A.ii,A.hS,A.d_,A.dL,A.F,A.hL,A.bB,A.a_,A.d6,A.iF,A.j2,A.aZ,A.fg,A.j0,A.iZ,A.fa,A.dM,A.ae,A.fc,A.c9,A.U,A.fb,A.fr,A.dW,A.dz,A.fk,A.cd,A.dC,A.dS,A.ft,A.bR,A.eh,A.iV,A.j3,A.bS,A.fe,A.eM,A.dj,A.iG,A.J,A.A,A.P,A.fs,A.aj,A.dU,A.ik,A.fp,A.hR,A.fh,A.dH,A.ej,A.e9,A.fV,A.h9,A.eX,A.hf,A.eq,A.es,A.eD,A.c1,A.hQ,A.dk,A.hW,A.i0,A.iy,A.dx,A.fq,A.fn,A.fl,A.i5,A.i,A.fU,A.h4,A.cj,A.eO,A.cs,A.i3,A.c3,A.en,A.hc,A.em,A.eb,A.eE,A.du,A.iz,A.d0,A.hk,A.i1,A.bJ,A.hj,A.h8,A.i6,A.b9,A.hl,A.an,A.c2,A.as,A.eV,A.ai,A.ep,A.dg,A.d7,A.iw,A.eB,A.aC,A.hx,A.cu,A.fX,A.ix,A.c7,A.eg,A.hr,A.ht,A.eT,A.eo,A.ia,A.c6,A.c5,A.dr,A.ie,A.fN,A.fT,A.h_,A.df,A.hV,A.aT,A.fK,A.f7,A.iv,A.bs,A.aH,A.aP,A.av,A.f9,A.e6,A.f6])
q(J.eu,[J.ew,J.d3,J.d4,J.cl,J.cm,J.bW,J.bX])
q(J.d4,[J.bA,J.p,A.bE,A.db])
q(J.bA,[J.eN,J.c4,J.bm])
r(J.ev,A.di)
r(J.hw,J.p)
q(J.bW,[J.d2,J.ex])
q(A.l,[A.bI,A.t,A.bn,A.H,A.b_,A.cb,A.cD])
q(A.bI,[A.bQ,A.dX])
r(A.dw,A.bQ)
r(A.dv,A.dX)
q(A.bx,[A.ed,A.ec,A.eY,A.jr,A.jt,A.iB,A.iA,A.j8,A.ha,A.iP,A.iR,A.hN,A.iT,A.jK,A.jL,A.jl,A.fR,A.hg,A.i_,A.h7,A.hd,A.he,A.i2,A.hp,A.i7,A.h3,A.hK,A.hE,A.fY,A.fZ,A.ig,A.ih,A.fO,A.h0,A.h1,A.h2,A.h6,A.hi,A.hz,A.hA,A.hB,A.i9,A.fM,A.iu,A.it,A.ir,A.jo,A.ip,A.fH,A.fI,A.fJ,A.jw,A.jE,A.jF,A.jG,A.jH,A.jz,A.jc,A.jd,A.ji,A.jg])
q(A.ed,[A.iE,A.fW,A.hF,A.js,A.j9,A.jk,A.hb,A.iQ,A.hM,A.hO,A.iW,A.im,A.il,A.ho,A.hq,A.hm,A.hJ,A.hu,A.ib,A.ic,A.hC,A.hD,A.fL,A.is,A.iq,A.jy])
r(A.aW,A.dv)
q(A.I,[A.bY,A.bq,A.ey,A.f_,A.eS,A.ff,A.d5,A.e7,A.aU,A.dp,A.eZ,A.cv,A.ef])
r(A.cx,A.z)
r(A.ee,A.cx)
q(A.t,[A.ag,A.Z,A.aY,A.K,A.ca,A.dB])
q(A.ag,[A.dm,A.at,A.fj])
r(A.bT,A.bn)
q(A.b0,[A.cz,A.cA,A.cB])
r(A.dI,A.cz)
r(A.cC,A.cA)
r(A.dJ,A.cB)
r(A.cE,A.cn)
r(A.bG,A.cE)
r(A.cW,A.bG)
r(A.b7,A.cV)
q(A.bo,[A.cX,A.dK,A.dT])
r(A.cY,A.cX)
r(A.de,A.bq)
q(A.eY,[A.eW,A.ci])
q(A.F,[A.b8,A.dy,A.fi])
r(A.co,A.bE)
q(A.db,[A.eF,A.a7])
q(A.a7,[A.dD,A.dF])
r(A.dE,A.dD)
r(A.d9,A.dE)
r(A.dG,A.dF)
r(A.da,A.dG)
q(A.d9,[A.d8,A.eG])
q(A.da,[A.eH,A.eI,A.eJ,A.eK,A.eL,A.dc,A.dd])
r(A.dN,A.ff)
q(A.ec,[A.iC,A.iD,A.j_,A.iH,A.iL,A.iK,A.iJ,A.iI,A.iO,A.iN,A.iM,A.iY,A.jh,A.j5,A.j4,A.hZ,A.hn,A.jx,A.jA,A.jB,A.jC,A.jD])
r(A.dt,A.fc)
r(A.fo,A.dW)
r(A.dA,A.dy)
r(A.be,A.dK)
r(A.dn,A.dT)
q(A.bR,[A.ea,A.ek,A.ez])
q(A.eh,[A.fS,A.hH,A.hG,A.io])
r(A.eA,A.d5)
r(A.iU,A.iV)
r(A.f2,A.ek)
q(A.aU,[A.cr,A.er])
r(A.fd,A.dU)
r(A.hY,A.iy)
r(A.hX,A.hY)
q(A.fe,[A.aN,A.bV,A.by,A.bz,A.au,A.am,A.et,A.c8,A.ba,A.ap,A.aF,A.aG,A.bH,A.bd])
q(A.df,[A.h5,A.hh,A.hy,A.i8])
q(A.iv,[A.f8,A.fm,A.aw,A.f5,A.f4,A.dq])
s(A.cx,A.bc)
s(A.dX,A.z)
s(A.dD,A.z)
s(A.dE,A.Q)
s(A.dF,A.z)
s(A.dG,A.Q)
s(A.cE,A.dS)
s(A.dT,A.ft)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",n:"double",ak:"num",k:"String",q:"bool",P:"Null",u:"List",v:"Object",D:"Map",C:"JSObject"},mangledNames:{},types:["~()","~(C)","q(k)","P(C)","~(~())","@(@)","~(@)","h(aC,aC)","q(av)","@(k)","P(@)","P()","~(v?,v?)","@()","q(v?)","k?(k)","q(aC)","h(@,@)","q(C)","aO<P>(A<k,k>)","P(@,bb)","~(h,@)","C()","~(v,bb)","q(aN)","q(ai)","P(v,bb)","q(bJ)","h(+(n,n,n,n),+(n,n,n,n))","u<+(n,n,n,n)>()","q(c2)","h(h,ai)","q(an)","h(b9,b9)","~(@,@)","A<k,k>(k,@)","q(au)","q(am)","P(~())","A<h,@>(h,c6)","~(h)","q(A<@,@>)","A<k,k>(A<@,@>)","k(v?)","@(@,k)","k(aT)","h(aT,aT)","D<k,k>(D<k,k>,k)","h(av,av)","h(aP,aP)","D<k,@>(av)","q(aG)","q(aF)","q(ap)","q(cs)","~(au,am)","P(v?)","0&(k,h?)","v?(v?)","~(ak)","~(k)","A<h,@>(h,c5)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.dI&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.cC&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.dJ&&A.qk(a,b.a)}}
A.oA(v.typeUniverse,JSON.parse('{"eN":"bA","c4":"bA","bm":"bA","qA":"bE","p":{"u":["1"],"t":["1"],"C":[],"l":["1"]},"ew":{"q":[],"G":[]},"d3":{"P":[],"G":[]},"d4":{"C":[]},"bA":{"C":[]},"ev":{"di":[]},"hw":{"p":["1"],"u":["1"],"t":["1"],"C":[],"l":["1"]},"bP":{"N":["1"]},"bW":{"n":[],"ak":[],"aX":["ak"]},"d2":{"n":[],"h":[],"ak":[],"aX":["ak"],"G":[]},"ex":{"n":[],"ak":[],"aX":["ak"],"G":[]},"bX":{"k":[],"aX":["k"],"l7":[],"G":[]},"bI":{"l":["2"]},"cU":{"N":["2"]},"bQ":{"bI":["1","2"],"l":["2"],"l.E":"2"},"dw":{"bQ":["1","2"],"bI":["1","2"],"t":["2"],"l":["2"],"l.E":"2"},"dv":{"z":["2"],"u":["2"],"bI":["1","2"],"t":["2"],"l":["2"]},"aW":{"dv":["1","2"],"z":["2"],"u":["2"],"bI":["1","2"],"t":["2"],"l":["2"],"z.E":"2","l.E":"2"},"bY":{"I":[]},"ee":{"z":["h"],"bc":["h"],"u":["h"],"t":["h"],"l":["h"],"z.E":"h","bc.E":"h"},"t":{"l":["1"]},"ag":{"t":["1"],"l":["1"]},"dm":{"ag":["1"],"t":["1"],"l":["1"],"ag.E":"1","l.E":"1"},"bZ":{"N":["1"]},"bn":{"l":["2"],"l.E":"2"},"bT":{"bn":["1","2"],"t":["2"],"l":["2"],"l.E":"2"},"c0":{"N":["2"]},"at":{"ag":["2"],"t":["2"],"l":["2"],"ag.E":"2","l.E":"2"},"H":{"l":["1"],"l.E":"1"},"a9":{"N":["1"]},"b_":{"l":["1"],"l.E":"1"},"ds":{"N":["1"]},"cx":{"z":["1"],"bc":["1"],"u":["1"],"t":["1"],"l":["1"]},"dI":{"cz":[],"b0":[]},"cC":{"cA":[],"b0":[]},"dJ":{"cB":[],"b0":[]},"cW":{"bG":["1","2"],"cE":["1","2"],"cn":["1","2"],"dS":["1","2"],"D":["1","2"]},"cV":{"D":["1","2"]},"b7":{"cV":["1","2"],"D":["1","2"]},"cb":{"l":["1"],"l.E":"1"},"cc":{"N":["1"]},"cX":{"bo":["1"],"ct":["1"],"t":["1"],"l":["1"]},"cY":{"cX":["1"],"bo":["1"],"ct":["1"],"t":["1"],"l":["1"]},"de":{"bq":[],"I":[]},"ey":{"I":[]},"f_":{"I":[]},"dL":{"bb":[]},"bx":{"bU":[]},"ec":{"bU":[]},"ed":{"bU":[]},"eY":{"bU":[]},"eW":{"bU":[]},"ci":{"bU":[]},"eS":{"I":[]},"b8":{"F":["1","2"],"l3":["1","2"],"D":["1","2"],"F.K":"1","F.V":"2"},"Z":{"t":["1"],"l":["1"],"l.E":"1"},"bB":{"N":["1"]},"aY":{"t":["1"],"l":["1"],"l.E":"1"},"a_":{"N":["1"]},"K":{"t":["A<1,2>"],"l":["A<1,2>"],"l.E":"A<1,2>"},"d6":{"N":["A<1,2>"]},"cz":{"b0":[]},"cA":{"b0":[]},"cB":{"b0":[]},"co":{"bE":[],"C":[],"G":[]},"bE":{"C":[],"G":[]},"db":{"C":[]},"eF":{"C":[],"G":[]},"a7":{"aD":["1"],"C":[]},"d9":{"z":["n"],"a7":["n"],"u":["n"],"aD":["n"],"t":["n"],"C":[],"l":["n"],"Q":["n"]},"da":{"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"]},"d8":{"jQ":[],"z":["n"],"a7":["n"],"u":["n"],"aD":["n"],"t":["n"],"C":[],"l":["n"],"Q":["n"],"G":[],"z.E":"n","Q.E":"n"},"eG":{"z":["n"],"a7":["n"],"u":["n"],"aD":["n"],"t":["n"],"C":[],"l":["n"],"Q":["n"],"G":[],"z.E":"n","Q.E":"n"},"eH":{"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eI":{"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eJ":{"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eK":{"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"eL":{"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"dc":{"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"dd":{"k_":[],"z":["h"],"a7":["h"],"u":["h"],"aD":["h"],"t":["h"],"C":[],"l":["h"],"Q":["h"],"G":[],"z.E":"h","Q.E":"h"},"ff":{"I":[]},"dN":{"bq":[],"I":[]},"dM":{"N":["1"]},"cD":{"l":["1"],"l.E":"1"},"ae":{"I":[]},"dt":{"fc":["1"]},"U":{"aO":["1"]},"dW":{"lr":[]},"fo":{"dW":[],"lr":[]},"dy":{"F":["1","2"],"D":["1","2"]},"dA":{"dy":["1","2"],"F":["1","2"],"D":["1","2"],"F.K":"1","F.V":"2"},"ca":{"t":["1"],"l":["1"],"l.E":"1"},"dz":{"N":["1"]},"be":{"bo":["1"],"l5":["1"],"ct":["1"],"t":["1"],"l":["1"]},"cd":{"N":["1"]},"z":{"u":["1"],"t":["1"],"l":["1"]},"F":{"D":["1","2"]},"dB":{"t":["2"],"l":["2"],"l.E":"2"},"dC":{"N":["2"]},"cn":{"D":["1","2"]},"bG":{"cE":["1","2"],"cn":["1","2"],"dS":["1","2"],"D":["1","2"]},"bo":{"ct":["1"],"t":["1"],"l":["1"]},"dK":{"bo":["1"],"ct":["1"],"t":["1"],"l":["1"]},"dn":{"bo":["1"],"ft":["1"],"ct":["1"],"t":["1"],"l":["1"]},"fi":{"F":["k","@"],"D":["k","@"],"F.K":"k","F.V":"@"},"fj":{"ag":["k"],"t":["k"],"l":["k"],"ag.E":"k","l.E":"k"},"ea":{"bR":["u<h>","k"]},"ek":{"bR":["k","u<h>"]},"d5":{"I":[]},"eA":{"I":[]},"ez":{"bR":["v?","k"]},"f2":{"bR":["k","u<h>"]},"bS":{"aX":["bS"]},"n":{"ak":[],"aX":["ak"]},"h":{"ak":[],"aX":["ak"]},"u":{"t":["1"],"l":["1"]},"ak":{"aX":["ak"]},"k":{"aX":["k"],"l7":[]},"fe":{"aq":[]},"e7":{"I":[]},"bq":{"I":[]},"aU":{"I":[]},"cr":{"I":[]},"er":{"I":[]},"dp":{"I":[]},"eZ":{"I":[]},"cv":{"I":[]},"ef":{"I":[]},"eM":{"I":[]},"dj":{"I":[]},"fs":{"bb":[]},"aj":{"o1":[]},"dU":{"f0":[]},"fp":{"f0":[]},"fd":{"f0":[]},"fh":{"jX":[]},"dH":{"jX":[]},"aN":{"aq":[]},"bV":{"aq":[]},"by":{"aq":[]},"bz":{"aq":[]},"au":{"aq":[]},"am":{"aq":[]},"et":{"aq":[]},"c8":{"aq":[]},"ba":{"aq":[]},"ap":{"aq":[]},"aF":{"aq":[]},"aG":{"aq":[]},"bH":{"aq":[]},"bd":{"aq":[]},"ny":{"u":["h"],"t":["h"],"l":["h"]},"k_":{"u":["h"],"t":["h"],"l":["h"]},"o5":{"u":["h"],"t":["h"],"l":["h"]},"nw":{"u":["h"],"t":["h"],"l":["h"]},"o3":{"u":["h"],"t":["h"],"l":["h"]},"nx":{"u":["h"],"t":["h"],"l":["h"]},"o4":{"u":["h"],"t":["h"],"l":["h"]},"jQ":{"u":["n"],"t":["n"],"l":["n"]},"ns":{"u":["n"],"t":["n"],"l":["n"]}}'))
A.oz(v.typeUniverse,JSON.parse('{"cx":1,"dX":2,"a7":1,"dK":1,"dT":1,"eh":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.aA
return{c:s("aT"),n:s("ae"),f_:s("e9"),U:s("aX<@>"),D:s("b7<k,k>"),dy:s("bS"),V:s("ap"),d:s("t<@>"),k:s("aN"),L:s("aC"),C:s("I"),Z:s("bU"),aQ:s("aO<P>"),hh:s("bz"),gO:s("eq<v>"),bM:s("l<n>"),hf:s("l<@>"),hb:s("l<h>"),cy:s("p<aT>"),r:s("p<aC>"),fG:s("p<aO<~>>"),gF:s("p<en>"),cB:s("p<qz<v>>"),W:s("p<C>"),aW:s("p<eB>"),h1:s("p<as>"),ez:s("p<D<k,v>>"),gE:s("p<D<k,k>>"),c7:s("p<D<k,@>>"),bK:s("p<eD>"),fK:s("p<c1>"),bs:s("p<b9>"),d6:s("p<c2>"),ek:s("p<+(h,k)>"),eV:s("p<+(n,n,n,n)>"),bv:s("p<ai>"),ai:s("p<cu>"),gd:s("p<eV>"),s:s("p<k>"),aN:s("p<eX>"),gi:s("p<i>"),eW:s("p<dr>"),fo:s("p<bs>"),h3:s("p<aP>"),E:s("p<an>"),bx:s("p<bJ>"),f7:s("p<q>"),u:s("p<n>"),gn:s("p<@>"),t:s("p<h>"),f1:s("p<C?>"),a6:s("p<v?>"),T:s("d3"),m:s("C"),d1:s("C()"),cj:s("bm"),aU:s("aD<@>"),cR:s("u<aC>"),dW:s("u<D<k,k>>"),cH:s("u<b9>"),dC:s("u<+(h,k)>"),h7:s("u<+(n,n,n,n)>"),h:s("u<k>"),et:s("u<dr>"),au:s("u<bs>"),f6:s("u<aP>"),b1:s("u<dx>"),j:s("u<@>"),I:s("u<h>"),e:s("d7"),q:s("A<k,k>"),bz:s("A<@,@>"),b3:s("A<h,@>"),G:s("D<k,k>"),am:s("D<k,q>"),a:s("D<k,@>"),f:s("D<@,@>"),c9:s("D<h,c5>"),gy:s("D<h,c6>"),h6:s("D<k,u<+(n,n,n,n)>>"),fZ:s("D<aG,u<aP>>"),bw:s("D<h,D<k,k>>"),e1:s("at<k,k?>"),e9:s("co"),P:s("P"),K:s("v"),A:s("b9"),ap:s("c2"),aw:s("dg"),gT:s("qB"),bQ:s("+()"),aT:s("+(k,C)"),bq:s("+(n,n,n,n)"),J:s("ai"),cq:s("ct<k>"),eq:s("am"),p:s("au"),ff:s("cu"),l:s("bb"),N:s("k"),dm:s("G"),eK:s("bq"),ak:s("c4"),dw:s("bG<k,k>"),R:s("f0"),fP:s("i"),g:s("av"),gY:s("aF"),b:s("aG"),d8:s("c5"),f2:s("c6"),h0:s("bs"),w:s("aP"),fQ:s("aw"),ct:s("H<ap>"),bX:s("H<aN>"),aD:s("H<am>"),aH:s("H<au>"),cc:s("H<k>"),ew:s("H<aF>"),dg:s("H<aG>"),eJ:s("b_<k>"),g4:s("an"),e3:s("dx"),_:s("U<@>"),hg:s("dA<v?,v?>"),as:s("fl"),cp:s("bJ"),e0:s("fm"),cO:s("fn"),er:s("fq"),y:s("q"),hc:s("q(ap)"),aO:s("q(aN)"),al:s("q(v)"),fq:s("q(am)"),e2:s("q(au)"),bB:s("q(k)"),ci:s("q(aF)"),aR:s("q(aG)"),i:s("n"),z:s("@"),fO:s("@()"),x:s("@(v)"),Q:s("@(v,bb)"),S:s("h"),eH:s("aO<P>?"),B:s("C?"),bE:s("u<@>?"),X:s("v?"),v:s("k?"),gk:s("k?(k)"),F:s("c9<@,@>?"),O:s("fk?"),a7:s("q?"),a3:s("q(cs)?"),cD:s("n?"),gs:s("h?"),cg:s("ak?"),Y:s("~()?"),bV:s("~(au,am)?"),b2:s("~(k)?"),bI:s("~(h)?"),o:s("ak"),H:s("~"),M:s("~()"),cA:s("~(k,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aQ=J.eu.prototype
B.a=J.p.prototype
B.c=J.d2.prototype
B.d=J.bW.prototype
B.b=J.bX.prototype
B.aR=J.bm.prototype
B.aS=J.d4.prototype
B.r=A.d8.prototype
B.a6=A.dd.prototype
B.a8=J.eN.prototype
B.H=J.c4.prototype
B.bS=new A.fS()
B.ah=new A.ea()
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

B.D=new A.ez()
B.ao=new A.v()
B.ap=new A.eM()
B.aq=new A.i3()
B.f=new A.i4()
B.O=new A.f2()
B.P=new A.fh()
B.j=new A.fo()
B.u=new A.fs()
B.v=new A.ap(0,"open")
B.Q=new A.ap(1,"chain")
B.R=new A.ap(2,"throughDoor")
B.S=new A.ap(3,"letterbox")
B.p=new A.ap(4,"ignore")
B.T=new A.aN(0,"compliance")
B.ar=new A.cj(B.T)
B.U=new A.aN(1,"rupture")
B.as=new A.cj(B.U)
B.V=new A.aN(2,"synchronisation")
B.at=new A.cj(B.V)
B.e=new A.by(0,"north")
B.k=new A.by(1,"east")
B.h=new A.by(2,"south")
B.q=new A.by(3,"west")
B.W=new A.J("saved mantle state is malformed",null,null)
B.au=new A.J("saved difficulty state is malformed",null,null)
B.av=new A.J("saved house drift state is malformed",null,null)
B.aw=new A.J("saved sleep record is malformed",null,null)
B.ax=new A.J("saved day-loop sleepHistory must be a list",null,null)
B.ay=new A.J("saved window state is malformed",null,null)
B.az=new A.J("save run and meta must be objects",null,null)
B.aA=new A.J("saved house state is malformed",null,null)
B.aB=new A.J("saved sleep record must be an object",null,null)
B.aC=new A.J("saved session run is malformed",null,null)
B.aD=new A.J("saved day-loop state is malformed",null,null)
B.X=new A.J("saved portal state is malformed",null,null)
B.aE=new A.J("saved house state does not match this house",null,null)
B.aF=new A.J("text.json root must be an object",null,null)
B.aG=new A.J("saved session clock is malformed",null,null)
B.aH=new A.J("saved sleep record has an unknown enum",null,null)
B.aI=new A.J("save root must be an object",null,null)
B.aJ=new A.bV(0,"timeAdvanced")
B.aK=new A.bV(1,"dayEndReached")
B.aL=new A.bV(4,"slept")
B.aM=new A.bV(5,"complianceFloorTripped")
B.w=new A.bz(0,"player")
B.E=new A.bz(1,"inserted")
B.Y=new A.bz(2,"warden")
B.aP=new A.et(1,"visitor")
B.aT=new A.hG(null)
B.aU=new A.hH(null)
B.Z=s([0,2,2,3],t.t)
B.i=s(["who","verb","object","place","time"],t.s)
B.aV=s([2,5,9,12,16,19],t.t)
B.aW=s([B.v,B.Q,B.R,B.S,B.p],A.aA("p<ap>"))
B.aX=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.t=new A.aG(0,"full")
B.I=new A.aG(1,"compressed")
B.J=new A.aG(2,"off")
B.a_=s([B.t,B.I,B.J],A.aA("p<aG>"))
B.aY=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bg=new A.au(0,"long")
B.ac=new A.au(1,"short")
B.a0=s([B.bg,B.ac],A.aA("p<au>"))
B.aZ=s([B.w,B.E,B.Y],A.aA("p<bz>"))
B.b1=s([],t.h1)
B.b2=s([],t.bs)
B.b_=s([],t.ai)
B.m=s([],t.s)
B.a1=s([],t.eW)
B.a2=s([],t.E)
B.b0=s([],t.t)
B.aO=new A.d0(15,"kitchen",-0.3,0)
B.aN=new A.d0(19,"spare-room",0,0.3)
B.n=s([B.aO,B.aN],A.aA("p<d0>"))
B.bd=new A.am(0,"bed")
B.be=new A.am(1,"chair")
B.bf=new A.am(2,"floor")
B.a3=s([B.bd,B.be,B.bf],A.aA("p<am>"))
B.b3=s([B.e,B.k,B.h,B.q],A.aA("p<by>"))
B.b4=s([1.4,2.8,4.2],t.u)
B.b5=s([B.T,B.U,B.V],A.aA("p<aN>"))
B.o=new A.aF(0,"waiting")
B.z=new A.aF(1,"atDoor")
B.A=new A.aF(2,"consulting")
B.B=new A.aF(3,"resolved")
B.b6=s([B.o,B.z,B.A,B.B],A.aA("p<aF>"))
B.b8={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.a4=new A.b7(B.b8,[2,3,4,5,6],A.aA("b7<k,h>"))
B.a7={}
B.b7=new A.b7(B.a7,[],t.D)
B.b9={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.a5=new A.b7(B.b9,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.D)
B.l=new A.ba(0,"inactive")
B.a9=new A.ba(1,"gradeLUT")
B.aa=new A.ba(2,"affineWarp")
B.F=new A.ba(3,"vertexSnap")
B.ab=new A.ba(4,"tapeGiveup")
B.G=new A.ba(5,"portalFail")
B.x=new A.ba(6,"lightsOut")
B.ba=new A.c3(null,"save storage unavailable")
B.bb=new A.c3(null,"save could not be recovered")
B.bc=new A.c3(null,null)
B.y=new A.cY(B.a7,0,A.aA("cY<k>"))
B.bh=A.aS("qv")
B.bi=A.aS("qw")
B.bj=A.aS("jQ")
B.bk=A.aS("ns")
B.bl=A.aS("nw")
B.bm=A.aS("nx")
B.bn=A.aS("ny")
B.bo=A.aS("C")
B.bp=A.aS("v")
B.bq=A.aS("o3")
B.br=A.aS("o4")
B.bs=A.aS("o5")
B.bt=A.aS("k_")
B.bu=new A.io(!1)
B.bv=new A.bH(0,"visitorAnswered")
B.ad=new A.bH(1,"visitorIgnored")
B.bw=new A.bH(2,"entryVerified")
B.bx=new A.bH(3,"entryContradicted")
B.by=new A.bH(4,"exposureAccepted")
B.bA=new A.bd(1,"malformedDay")
B.bB=new A.bd(2,"malformedTier")
B.ae=new A.bd(3,"missingTierLines")
B.K=new A.bd(6,"invalidPhase")
B.bH=new A.aH(B.K,"The active visit cannot be chosen.")
B.bK=new A.aw(B.bH)
B.bE=new A.aH(B.K,"The active visit has no line to advance.")
B.bL=new A.aw(B.bE)
B.bD=new A.bd(5,"noActiveVisit")
B.bF=new A.aH(B.bD,"There is no active visit.")
B.af=new A.aw(B.bF)
B.bG=new A.aH(B.K,"A visit is already active.")
B.bM=new A.aw(B.bG)
B.bC=new A.bd(4,"noArrival")
B.bJ=new A.aH(B.bC,"The authored arrival is missing.")
B.bN=new A.aw(B.bJ)
B.bz=new A.bd(0,"missingCorpus")
B.bI=new A.aH(B.bz,"The authored visitor corpus is empty.")
B.bO=new A.aw(B.bI)
B.ag=new A.c8(1,"exact")
B.L=new A.c8(2,"partial")
B.C=new A.c8(3,"contradiction")
B.bP=new A.c8(0,"skipped")
B.bQ=new A.c7(B.bP,B.y)
B.bR=new A.c7(B.L,B.y)})();(function staticFields(){$.iS=null
$.aK=A.j([],A.aA("p<v>"))
$.l8=null
$.kM=null
$.kL=null
$.mo=null
$.mk=null
$.ms=null
$.jn=null
$.ju=null
$.kA=null
$.iX=A.j([],A.aA("p<u<v>?>"))
$.cJ=null
$.e0=null
$.e1=null
$.kl=!1
$.S=B.j
$.ll=""
$.lm=null
$.lh=null
$.hT=null
$.a3=A.L()
$.bt=A.L()
$.aI=A.L()
$.lP=A.L()
$.cK=null
$.a6=A.L()
$.kh=null
$.dY=A.L()
$.T=A.L()
$.kc=A.L()
$.kj=null
$.e_=null
$.kd=!1
$.kn=!1
$.m2=!1
$.km=0
$.j7=0
$.mj=!1
$.lX="booting"
$.bv=0
$.cM=0
$.b2="hall"
$.kb=A.L()
$.cG=A.L()
$.b1=A.L()
$.ax=null
$.cH=A.L()
$.fw=A.L()
$.lQ=A.L()
$.lO=A.L()
$.aa=A.L()
$.fx=A.L()
$.fv=A.L()
$.ka=A.L()
$.ab=A.L()
$.fu=A.L()
$.lN=A.L()
$.bL=A.j([],t.s)
$.ki=null
$.mg=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qy","mx",()=>A.mn("_$dart_dartClosure"))
s($,"qx","cS",()=>A.mn("_$dart_dartClosure_dartJSInterop"))
s($,"qU","mN",()=>A.j([new J.ev()],A.aA("p<di>")))
s($,"qD","my",()=>A.br(A.ij({
toString:function(){return"$receiver$"}})))
s($,"qE","mz",()=>A.br(A.ij({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"qF","mA",()=>A.br(A.ij(null)))
s($,"qG","mB",()=>A.br(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qJ","mE",()=>A.br(A.ij(void 0)))
s($,"qK","mF",()=>A.br(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"qI","mD",()=>A.br(A.li(null)))
s($,"qH","mC",()=>A.br(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"qM","mH",()=>A.br(A.li(void 0)))
s($,"qL","mG",()=>A.br(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"qN","kD",()=>A.oe())
s($,"qR","mL",()=>A.nI(4096))
s($,"qP","mJ",()=>new A.j5().$0())
s($,"qQ","mK",()=>new A.j4().$0())
s($,"qO","mI",()=>new Int8Array(A.p5(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"qS","fD",()=>A.jJ(B.bp))
s($,"qV","mO",()=>A.f3(0,1,0))
s($,"qX","jN",()=>{var q=$.lh
if(q==null){A.e4()
A.e4()
A.e4()
A.e4()
A.e4()
A.e4()
q=$.lh=new A.ie()}return q})
r($,"kt","e5",()=>A.f3(0,0,0))
r($,"ko","mM",()=>A.f3(0,0,0))
r($,"kv","kE",()=>A.f3(0,0,0))
s($,"qT","fE",()=>new A.h9(A.f3(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.bE,ArrayBuffer:A.co,ArrayBufferView:A.db,DataView:A.eF,Float32Array:A.d8,Float64Array:A.eG,Int16Array:A.eH,Int32Array:A.eI,Int8Array:A.eJ,Uint16Array:A.eK,Uint32Array:A.eL,Uint8ClampedArray:A.dc,CanvasPixelArray:A.dc,Uint8Array:A.dd})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.dD.$nativeSuperclassTag="ArrayBufferView"
A.dE.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="ArrayBufferView"
A.dF.$nativeSuperclassTag="ArrayBufferView"
A.dG.$nativeSuperclassTag="ArrayBufferView"
A.da.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jv
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()