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
if(a[b]!==s){A.qN(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.kK(b)
return new s(c,this)}:function(){if(s===null)s=A.kK(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.kK(a).prototype
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
kP(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jE(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kN==null){A.qu()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.lz("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.j5
if(o==null)o=$.j5=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.qA(a)
if(p!=null)return p
if(typeof a=="function")return B.bd
s=Object.getPrototypeOf(a)
if(s==null)return B.ad
if(s===Object.prototype)return B.ad
if(typeof q=="function"){o=$.j5
if(o==null)o=$.j5=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.K,enumerable:false,writable:true,configurable:true})
return B.K}return B.K},
lb(a,b){if(a<0||a>4294967295)throw A.d(A.aj(a,0,4294967295,"length",null))
return J.nU(new Array(a),b)},
lc(a,b){if(a<0)throw A.d(A.a7("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("o<0>"))},
hI(a,b){if(a<0)throw A.d(A.a7("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("o<0>"))},
nU(a,b){var s=A.j(a,b.i("o<0>"))
s.$flags=1
return s},
nV(a,b){var s=t.U
return J.kU(s.a(a),s.a(b))},
cj(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.eE.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.eD.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cr.prototype
if(typeof a=="bigint")return J.cq.prototype
return a}if(a instanceof A.v)return a
return J.jE(a)},
ba(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cr.prototype
if(typeof a=="bigint")return J.cq.prototype
return a}if(a instanceof A.v)return a
return J.jE(a)},
bp(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cr.prototype
if(typeof a=="bigint")return J.cq.prototype
return a}if(a instanceof A.v)return a
return J.jE(a)},
qp(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.c7.prototype
return a},
mD(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.c7.prototype
return a},
qq(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
if(typeof a=="symbol")return J.cr.prototype
if(typeof a=="bigint")return J.cq.prototype
return a}if(a instanceof A.v)return a
return J.jE(a)},
kT(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mD(a).a_(a,b)},
Y(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cj(a).R(a,b)},
as(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.qy(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ba(a).h(a,b)},
bA(a,b,c){return J.bp(a).k(a,b,c)},
fO(a,b){return J.bp(a).m(a,b)},
n6(a,b){return J.bp(a).ak(a,b)},
n7(a,b,c){return J.qq(a).dG(a,b,c)},
n8(a,b){return J.bp(a).b6(a,b)},
kU(a,b){return J.mD(a).K(a,b)},
fP(a,b){return J.bp(a).L(a,b)},
aD(a){return J.cj(a).gC(a)},
kV(a){return J.ba(a).gD(a)},
n9(a){return J.ba(a).gE(a)},
J(a){return J.bp(a).gt(a)},
aP(a){return J.ba(a).gn(a)},
kW(a){return J.cj(a).gF(a)},
na(a,b,c){return J.bp(a).aQ(a,b,c)},
nb(a,b){return J.ba(a).sn(a,b)},
nc(a,b){return J.bp(a).Z(a,b)},
k0(a,b){return J.qp(a).j3(a,b)},
d0(a){return J.cj(a).p(a)},
nd(a,b){return J.bp(a).cM(a,b)},
eB:function eB(){},
eD:function eD(){},
db:function db(){},
dc:function dc(){},
bE:function bE(){},
eU:function eU(){},
c7:function c7(){},
bq:function bq(){},
cq:function cq(){},
cr:function cr(){},
o:function o(a){this.$ti=a},
eC:function eC(){},
hJ:function hJ(a){this.$ti=a},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bY:function bY(){},
da:function da(){},
eE:function eE(){},
bZ:function bZ(){}},A={k3:function k3(){},
fH(){return $},
ni(a,b,c){if(t.gt.b(a))return new A.dG(a,b.i("@<0>").v(c).i("dG<1,2>"))
return new A.bR(a,b.i("@<0>").v(c).i("bR<1,2>"))},
lh(a){return new A.c_("Field '"+a+"' has been assigned during initialization.")},
au(a){return new A.c_("Field '"+a+"' has not been initialized.")},
nX(a){return new A.c_("Field '"+a+"' has already been initialized.")},
jF(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bt(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
iu(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cW(a,b,c){return a},
kO(a){var s,r
for(s=$.aN.length,r=0;r<s;++r)if(a===$.aN[r])return!0
return!1},
ka(a,b,c,d){A.eX(b,"start")
if(c!=null){A.eX(c,"end")
if(b>c)A.B(A.aj(b,0,c,"start",null))}return new A.dx(a,b,c,d.i("dx<0>"))},
i1(a,b,c,d){if(t.gt.b(a))return new A.bU(a,b,c.i("@<0>").v(d).i("bU<1,2>"))
return new A.br(a,b,c.i("@<0>").v(d).i("br<1,2>"))},
hH(){return new A.cA("No element")},
nS(){return new A.cA("Too many elements")},
eZ(a,b,c,d,e){if(c-b<=32)A.oi(a,b,c,d,e)
else A.oh(a,b,c,d,e)},
oi(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ba(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.S()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
oh(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.H(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.H(a4+a5,2),f=g-j,e=g+j,d=J.ba(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
p=J.Y(a6.$2(b,a0),0)
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
A.eZ(a3,a4,r-2,a6,a7)
A.eZ(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.Y(a6.$2(d.h(a3,r),b),0))++r
while(J.Y(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.eZ(a3,r,q,a6,a7)}else A.eZ(a3,r,q,a6,a7)},
bK:function bK(){},
d1:function d1(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b){this.a=a
this.$ti=b},
dG:function dG(a,b){this.a=a
this.$ti=b},
dF:function dF(){},
iS:function iS(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.$ti=b},
c_:function c_(a){this.a=a},
el:function el(a){this.a=a},
ik:function ik(){},
t:function t(){},
ah:function ah(){},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c0:function c0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b){this.a=a
this.$ti=b},
Q:function Q(){},
bf:function bf(){},
cC:function cC(){},
e5:function e5(){},
en(a,b,c){var s,r,q,p,o,n,m,l=A.aU(a.gJ(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.y)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aU(a.gaa(),!0,c)
m=new A.aQ(q,n,b.i("@<0>").v(c).i("aQ<1,2>"))
m.$keys=l
return m}return new A.d2(A.ao(a,b,c),b.i("@<0>").v(c).i("d2<1,2>"))},
no(){throw A.d(A.a9("Cannot modify unmodifiable Map"))},
np(){throw A.d(A.a9("Cannot modify constant Set"))},
mO(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
qy(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d0(a)
return s},
dr(a){var s,r=$.ln
if(r==null)r=$.ln=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
i6(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eW(a){var s,r,q,p
if(a instanceof A.v)return A.aM(A.aZ(a),null)
s=J.cj(a)
if(s===B.bc||s===B.be||t.cx.b(a)){r=B.P(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aM(A.aZ(a),null)},
lo(a){var s,r,q
if(a==null||typeof a=="number"||A.b8(a))return J.d0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bB)return a.p(0)
if(a instanceof A.aX)return a.dz(!0)
s=$.n4()
for(r=0;r<1;++r){q=s[r].j5(a)
if(q!=null)return q}return"Instance of '"+A.eW(a)+"'"},
o3(){if(!!self.location)return self.location.href
return null},
oc(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
R(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.bR(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aj(a,0,1114111,null,null))},
cv(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ob(a){var s=A.cv(a).getUTCFullYear()+0
return s},
o9(a){var s=A.cv(a).getUTCMonth()+1
return s},
o5(a){var s=A.cv(a).getUTCDate()+0
return s},
o6(a){var s=A.cv(a).getUTCHours()+0
return s},
o8(a){var s=A.cv(a).getUTCMinutes()+0
return s},
oa(a){var s=A.cv(a).getUTCSeconds()+0
return s},
o7(a){var s=A.cv(a).getUTCMilliseconds()+0
return s},
o4(a){var s=a.$thrownJsError
if(s==null)return null
return A.bz(s)},
lp(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.X(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
fJ(a){throw A.d(A.kJ(a))},
c(a,b){if(a==null)J.aP(a)
throw A.d(A.jB(a,b))},
jB(a,b){var s,r="index"
if(!A.ar(b))return new A.b1(!0,b,r,null)
s=A.a(J.aP(a))
if(b<0||b>=s)return A.hE(b,s,a,r)
return A.od(b,r)},
qj(a,b,c){if(a>c)return A.aj(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aj(b,a,c,"end",null)
return new A.b1(!0,b,"end",null)},
kJ(a){return new A.b1(!0,a,null,null)},
d(a){return A.X(a,new Error())},
X(a,b){var s
if(a==null)a=new A.bu()
b.dartException=a
s=A.qO
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
qO(){return J.d0(this.dartException)},
B(a,b){throw A.X(a,b==null?new Error():b)},
aO(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.B(A.pm(a,b,c),s)},
pm(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.dz("'"+s+"': Cannot "+o+" "+l+k+n)},
y(a){throw A.d(A.a6(a))},
bv(a){var s,r,q,p,o,n
a=A.mK(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.iy(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iz(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ly(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
k4(a,b){var s=b==null,r=s?null:b.method
return new A.eF(a,r,s?null:b.receiver)},
a5(a){var s
if(a==null)return new A.i4(a)
if(a instanceof A.d6){s=a.a
return A.bP(a,s==null?A.cO(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.bP(a,a.dartException)
return A.q1(a)},
bP(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.bR(r,16)&8191)===10)switch(q){case 438:return A.bP(a,A.k4(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.bP(a,new A.dn())}}if(a instanceof TypeError){p=$.mQ()
o=$.mR()
n=$.mS()
m=$.mT()
l=$.mW()
k=$.mX()
j=$.mV()
$.mU()
i=$.mZ()
h=$.mY()
g=p.a5(s)
if(g!=null)return A.bP(a,A.k4(A.x(s),g))
else{g=o.a5(s)
if(g!=null){g.method="call"
return A.bP(a,A.k4(A.x(s),g))}else if(n.a5(s)!=null||m.a5(s)!=null||l.a5(s)!=null||k.a5(s)!=null||j.a5(s)!=null||m.a5(s)!=null||i.a5(s)!=null||h.a5(s)!=null){A.x(s)
return A.bP(a,new A.dn())}}return A.bP(a,new A.f3(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.du()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bP(a,new A.b1(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.du()
return a},
bz(a){var s
if(a instanceof A.d6)return a.b
if(a==null)return new A.dU(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.dU(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fK(a){if(a==null)return J.aD(a)
if(typeof a=="object")return A.dr(a)
return J.aD(a)},
qe(a){if(typeof a=="number")return B.d.gC(a)
if(a instanceof A.fy)return A.dr(a)
if(a instanceof A.aX)return a.gC(a)
return A.fK(a)},
mC(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
qo(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
pB(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.co("Unsupported number of arguments for wrapped closure"))},
cX(a,b){var s=a.$identity
if(!!s)return s
s=A.qf(a,b)
a.$identity=s
return s},
qf(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.pB)},
nn(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.f_().constructor.prototype):Object.create(new A.cl(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.l1(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.nj(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.l1(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
nj(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ng)}throw A.d("Error in functionType of tearoff")},
nk(a,b,c,d){var s=A.l0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
l1(a,b,c,d){if(c)return A.nm(a,b,d)
return A.nk(b.length,d,a,b)},
nl(a,b,c,d){var s=A.l0,r=A.nh
switch(b?-1:a){case 0:throw A.d(new A.eY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
nm(a,b,c){var s,r
if($.kZ==null)$.kZ=A.kY("interceptor")
if($.l_==null)$.l_=A.kY("receiver")
s=b.length
r=A.nl(s,c,a,b)
return r},
kK(a){return A.nn(a)},
ng(a,b){return A.e_(v.typeUniverse,A.aZ(a.a),b)},
l0(a){return a.a},
nh(a){return a.b},
kY(a){var s,r,q,p=new A.cl("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.a7("Field name "+a+" not found.",null))},
mE(a){return v.getIsolateTag(a)},
rf(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qA(a){var s,r,q,p,o,n=A.x($.mF.$1(a)),m=$.jC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.cP($.mA.$2(a,n))
if(q!=null){m=$.jC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jX(s)
$.jC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jJ[n]=s
return s}if(p==="-"){o=A.jX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mI(a,s)
if(p==="*")throw A.d(A.lz(n))
if(v.leafTags[n]===true){o=A.jX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mI(a,s)},
mI(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kP(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jX(a){return J.kP(a,!1,null,!!a.$iaF)},
qE(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jX(s)
else return J.kP(s,c,null,null)},
qu(){if(!0===$.kN)return
$.kN=!0
A.qv()},
qv(){var s,r,q,p,o,n,m,l
$.jC=Object.create(null)
$.jJ=Object.create(null)
A.qt()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mJ.$1(o)
if(n!=null){m=A.qE(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qt(){var s,r,q,p,o,n,m=B.am()
m=A.cV(B.an,A.cV(B.ao,A.cV(B.Q,A.cV(B.Q,A.cV(B.ap,A.cV(B.aq,A.cV(B.ar(B.P),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mF=new A.jG(p)
$.mA=new A.jH(o)
$.mJ=new A.jI(n)},
cV(a,b){return a(b)||b},
oL(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.Y(r,b[s]))return!1}return!0},
qh(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
qJ(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qm(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mK(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
qK(a,b,c){var s=A.qL(a,b,c)
return s},
qL(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.mK(b),"g"),A.qm(c))},
dR:function dR(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a},
d2:function d2(a,b){this.a=a
this.$ti=b},
cm:function cm(){},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b){this.a=a
this.$ti=b},
cf:function cf(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d7:function d7(a,b){this.a=a
this.$ti=b},
d3:function d3(){},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
dt:function dt(){},
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dn:function dn(){},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
i4:function i4(a){this.a=a},
d6:function d6(a,b){this.a=a
this.b=b},
dU:function dU(a){this.a=a
this.b=null},
bB:function bB(){},
ej:function ej(){},
ek:function ek(){},
f1:function f1(){},
f_:function f_(){},
cl:function cl(a,b){this.a=a
this.b=b},
eY:function eY(a){this.a=a},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hS:function hS(a){this.a=a},
hY:function hY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
V:function V(a,b){this.a=a
this.$ti=b},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aG:function aG(a,b){this.a=a
this.$ti=b},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
L:function L(a,b){this.a=a
this.$ti=b},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dd:function dd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
aX:function aX(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
qN(a){throw A.X(A.lh(a),new Error())},
f(){throw A.X(A.au(""),new Error())},
p(){throw A.X(A.nX(""),new Error())},
mN(){throw A.X(A.lh(""),new Error())},
T(){var s=new A.iT()
return s.b=s},
iT:function iT(){this.b=null},
po(a){return a},
o_(a,b,c){return new Float32Array(a,b,c)},
o0(a){return new Uint8Array(a)},
bx(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.jB(b,a))},
ph(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.qj(a,b,c))
return b},
bG:function bG(){},
ct:function ct(){},
dk:function dk(){},
jf:function jf(a){this.a=a},
eM:function eM(){},
a8:function a8(){},
di:function di(){},
dj:function dj(){},
dh:function dh(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
dl:function dl(){},
dm:function dm(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
k9(a,b){var s=b.c
return s==null?b.c=A.dY(a,"aS",[b.x]):s},
lr(a){var s=a.w
if(s===6||s===7)return A.lr(a.x)
return s===11||s===12},
of(a){return a.as},
qF(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ae(a){return A.je(v.typeUniverse,a,!1)},
ci(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ci(a1,s,a3,a4)
if(r===s)return a2
return A.lS(a1,r,!0)
case 7:s=a2.x
r=A.ci(a1,s,a3,a4)
if(r===s)return a2
return A.lR(a1,r,!0)
case 8:q=a2.y
p=A.cU(a1,q,a3,a4)
if(p===q)return a2
return A.dY(a1,a2.x,p)
case 9:o=a2.x
n=A.ci(a1,o,a3,a4)
m=a2.y
l=A.cU(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.kh(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.cU(a1,j,a3,a4)
if(i===j)return a2
return A.lT(a1,k,i)
case 11:h=a2.x
g=A.ci(a1,h,a3,a4)
f=a2.y
e=A.pZ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.lQ(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.cU(a1,d,a3,a4)
o=a2.x
n=A.ci(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ki(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.ef("Attempted to substitute unexpected RTI kind "+a0))}},
cU(a,b,c,d){var s,r,q,p,o=b.length,n=A.jj(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ci(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
q_(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.jj(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ci(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
pZ(a,b,c,d){var s,r=b.a,q=A.cU(a,r,c,d),p=b.b,o=A.cU(a,p,c,d),n=b.c,m=A.q_(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.fl()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
kL(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.qs(s)
return a.$S()}return null},
qw(a,b){var s
if(A.lr(b))if(a instanceof A.bB){s=A.kL(a)
if(s!=null)return s}return A.aZ(a)},
aZ(a){if(a instanceof A.v)return A.m(a)
if(Array.isArray(a))return A.W(a)
return A.kx(J.cj(a))},
W(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.kx(a)},
kx(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.py(a,s)},
py(a,b){var s=a instanceof A.bB?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.oU(v.typeUniverse,s.name)
b.$ccache=r
return r},
qs(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.je(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
kM(a){return A.bo(A.m(a))},
kH(a){var s
if(a instanceof A.aX)return a.d9()
s=a instanceof A.bB?A.kL(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.kW(a).a
if(Array.isArray(a))return A.W(a)
return A.aZ(a)},
bo(a){var s=a.r
return s==null?a.r=new A.fy(a):s},
qn(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.c(q,0)
s=A.e_(v.typeUniverse,A.kH(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.lU(v.typeUniverse,s,A.kH(q[r]))}return A.e_(v.typeUniverse,s,a)},
b_(a){return A.bo(A.je(v.typeUniverse,a,!1))},
px(a){var s=this
s.b=A.pX(s)
return s.b(a)},
pX(a){var s,r,q,p,o
if(a===t.K)return A.pH
if(A.ck(a))return A.pL
s=a.w
if(s===6)return A.pt
if(s===1)return A.mm
if(s===7)return A.pC
r=A.pW(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ck)){a.f="$i"+q
if(q==="u")return A.pF
if(a===t.m)return A.pE
return A.pK}}else if(s===10){p=A.qh(a.x,a.y)
o=p==null?A.mm:p
return o==null?A.cO(o):o}return A.pr},
pW(a){if(a.w===8){if(a===t.S)return A.ar
if(a===t.i||a===t.o)return A.pG
if(a===t.N)return A.pJ
if(a===t.y)return A.b8}return null},
pw(a){var s=this,r=A.pq
if(A.ck(s))r=A.pf
else if(s===t.K)r=A.cO
else if(A.cY(s)){r=A.ps
if(s===t.aV)r=A.m9
else if(s===t.v)r=A.cP
else if(s===t.fU)r=A.pe
else if(s===t.jh)r=A.ma
else if(s===t.dA)r=A.m8
else if(s===t.B)r=A.e}else if(s===t.S)r=A.a
else if(s===t.N)r=A.x
else if(s===t.y)r=A.aC
else if(s===t.o)r=A.fE
else if(s===t.i)r=A.m7
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
pr(a){var s=this
if(a==null)return A.cY(s)
return A.qz(v.typeUniverse,A.qw(a,s),s)},
pt(a){if(a==null)return!0
return this.x.b(a)},
pK(a){var s,r=this
if(a==null)return A.cY(r)
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.cj(a)[s]},
pF(a){var s,r=this
if(a==null)return A.cY(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.v)return!!a[s]
return!!J.cj(a)[s]},
pE(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.v)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ml(a){if(typeof a=="object"){if(a instanceof A.v)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
pq(a){var s=this
if(a==null){if(A.cY(s))return a}else if(s.b(a))return a
throw A.X(A.me(a,s),new Error())},
ps(a){var s=this
if(a==null||s.b(a))return a
throw A.X(A.me(a,s),new Error())},
me(a,b){return new A.dW("TypeError: "+A.lI(a,A.aM(b,null)))},
lI(a,b){return A.eu(a)+": type '"+A.aM(A.kH(a),null)+"' is not a subtype of type '"+b+"'"},
aY(a,b){return new A.dW("TypeError: "+A.lI(a,b))},
pC(a){var s=this
return s.x.b(a)||A.k9(v.typeUniverse,s).b(a)},
pH(a){return a!=null},
cO(a){if(a!=null)return a
throw A.X(A.aY(a,"Object"),new Error())},
pL(a){return!0},
pf(a){return a},
mm(a){return!1},
b8(a){return!0===a||!1===a},
aC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.X(A.aY(a,"bool"),new Error())},
pe(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.X(A.aY(a,"bool?"),new Error())},
m7(a){if(typeof a=="number")return a
throw A.X(A.aY(a,"double"),new Error())},
m8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.X(A.aY(a,"double?"),new Error())},
ar(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.X(A.aY(a,"int"),new Error())},
m9(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.X(A.aY(a,"int?"),new Error())},
pG(a){return typeof a=="number"},
fE(a){if(typeof a=="number")return a
throw A.X(A.aY(a,"num"),new Error())},
ma(a){if(typeof a=="number")return a
if(a==null)return a
throw A.X(A.aY(a,"num?"),new Error())},
pJ(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.X(A.aY(a,"String"),new Error())},
cP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.X(A.aY(a,"String?"),new Error())},
b(a){if(A.ml(a))return a
throw A.X(A.aY(a,"JSObject"),new Error())},
e(a){if(a==null)return a
if(A.ml(a))return a
throw A.X(A.aY(a,"JSObject?"),new Error())},
mv(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aM(a[q],b)
return s},
pQ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.mv(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aM(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
mg(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aM(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aM(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aM(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aM(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aM(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aM(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aM(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aM(a.x,b)+">"
if(l===8){p=A.q0(a.x)
o=a.y
return o.length>0?p+("<"+A.mv(o,b)+">"):p}if(l===10)return A.pQ(a,b)
if(l===11)return A.mg(a,b,null)
if(l===12)return A.mg(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
q0(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oV(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
oU(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.je(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dZ(a,5,"#")
q=A.jj(s)
for(p=0;p<s;++p)q[p]=r
o=A.dY(a,b,q)
n[b]=o
return o}else return m},
oT(a,b){return A.m1(a.tR,b)},
oS(a,b){return A.m1(a.eT,b)},
je(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lN(A.lL(a,null,b,!1))
r.set(b,s)
return s},
e_(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lN(A.lL(a,b,c,!0))
q.set(c,r)
return r},
lU(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.kh(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
bM(a,b){b.a=A.pw
b.b=A.px
return b},
dZ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.b5(null,null)
s.w=b
s.as=c
r=A.bM(a,s)
a.eC.set(c,r)
return r},
lS(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.oQ(a,b,r,c)
a.eC.set(r,s)
return s},
oQ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ck(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.cY(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.b5(null,null)
q.w=6
q.x=b
q.as=c
return A.bM(a,q)},
lR(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.oO(a,b,r,c)
a.eC.set(r,s)
return s},
oO(a,b,c,d){var s,r
if(d){s=b.w
if(A.ck(b)||b===t.K)return b
else if(s===1)return A.dY(a,"aS",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.b5(null,null)
r.w=7
r.x=b
r.as=c
return A.bM(a,r)},
oR(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.b5(null,null)
s.w=13
s.x=b
s.as=q
r=A.bM(a,s)
a.eC.set(q,r)
return r},
dX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
oN(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dY(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dX(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.b5(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.bM(a,r)
a.eC.set(p,q)
return q},
kh(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dX(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.b5(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.bM(a,o)
a.eC.set(q,n)
return n},
lT(a,b,c){var s,r,q="+"+(b+"("+A.dX(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.b5(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.bM(a,s)
a.eC.set(q,r)
return r},
lQ(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dX(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dX(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.oN(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.b5(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.bM(a,p)
a.eC.set(r,o)
return o},
ki(a,b,c,d){var s,r=b.as+("<"+A.dX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.oP(a,b,c,r,d)
a.eC.set(r,s)
return s},
oP(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.jj(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ci(a,b,r,0)
m=A.cU(a,c,r,0)
return A.ki(a,n,m,c!==m)}}l=new A.b5(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.bM(a,l)},
lL(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lN(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.oG(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.lM(a,r,l,k,!1)
else if(q===46)r=A.lM(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ch(a.u,a.e,k.pop()))
break
case 94:k.push(A.oR(a.u,k.pop()))
break
case 35:k.push(A.dZ(a.u,5,"#"))
break
case 64:k.push(A.dZ(a.u,2,"@"))
break
case 126:k.push(A.dZ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.oI(a,k)
break
case 38:A.oH(a,k)
break
case 63:p=a.u
k.push(A.lS(p,A.ch(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lR(p,A.ch(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.oF(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.lO(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.oK(a.u,a.e,o)
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
return A.ch(a.u,a.e,m)},
oG(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lM(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.oV(s,o.x)[p]
if(n==null)A.B('No "'+p+'" in "'+A.of(o)+'"')
d.push(A.e_(s,o,n))}else d.push(p)
return m},
oI(a,b){var s,r=a.u,q=A.lK(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dY(r,p,q))
else{s=A.ch(r,a.e,p)
switch(s.w){case 11:b.push(A.ki(r,s,q,a.n))
break
default:b.push(A.kh(r,s,q))
break}}},
oF(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.lK(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ch(p,a.e,o)
q=new A.fl()
q.a=s
q.b=n
q.c=m
b.push(A.lQ(p,r,q))
return
case-4:b.push(A.lT(p,b.pop(),s))
return
default:throw A.d(A.ef("Unexpected state under `()`: "+A.w(o)))}},
oH(a,b){var s=b.pop()
if(0===s){b.push(A.dZ(a.u,1,"0&"))
return}if(1===s){b.push(A.dZ(a.u,4,"1&"))
return}throw A.d(A.ef("Unexpected extended operation "+A.w(s)))},
lK(a,b){var s=b.splice(a.p)
A.lO(a.u,a.e,s)
a.p=b.pop()
return s},
ch(a,b,c){if(typeof c=="string")return A.dY(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.oJ(a,b,c)}else return c},
lO(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ch(a,b,c[s])},
oK(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ch(a,b,c[s])},
oJ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.ef("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.ef("Bad index "+c+" for "+b.p(0)))},
qz(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a2(a,b,null,c,null)
r.set(c,s)}return s},
a2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ck(d))return!0
s=b.w
if(s===4)return!0
if(A.ck(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a2(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.a2(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.a2(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a2(a,b.x,c,d,e))return!1
return A.a2(a,A.k9(a,b),c,d,e)}if(s===6)return A.a2(a,p,c,d,e)&&A.a2(a,b.x,c,d,e)
if(q===7){if(A.a2(a,b,c,d.x,e))return!0
return A.a2(a,b,c,A.k9(a,d),e)}if(q===6)return A.a2(a,b,c,p,e)||A.a2(a,b,c,d.x,e)
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
if(!A.a2(a,j,c,i,e)||!A.a2(a,i,e,j,c))return!1}return A.mk(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.mk(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.pD(a,b,c,d,e)}if(o&&q===10)return A.pI(a,b,c,d,e)
return!1},
mk(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pD(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.e_(a,b,r[o])
return A.m5(a,p,null,c,d.y,e)}return A.m5(a,b.y,null,c,d.y,e)},
m5(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a2(a,b[s],d,e[s],f))return!1
return!0},
pI(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a2(a,r[s],c,q[s],e))return!1
return!0},
cY(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ck(a))if(s!==6)r=s===7&&A.cY(a.x)
return r},
ck(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
m1(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
jj(a){return a>0?new Array(a):v.typeUniverse.sEA},
b5:function b5(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
fl:function fl(){this.c=this.b=this.a=null},
fy:function fy(a){this.a=a},
fk:function fk(){},
dW:function dW(a){this.a=a},
ox(){var s,r,q
if(self.scheduleImmediate!=null)return A.qa()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cX(new A.iP(s),1)).observe(r,{childList:true})
return new A.iO(s,r,q)}else if(self.setImmediate!=null)return A.qb()
return A.qc()},
oy(a){self.scheduleImmediate(A.cX(new A.iQ(t.M.a(a)),0))},
oz(a){self.setImmediate(A.cX(new A.iR(t.M.a(a)),0))},
oA(a){t.M.a(a)
A.oM(0,a)},
oM(a,b){var s=new A.jc()
s.fU(a,b)
return s},
bm(a){return new A.ff(new A.U($.S,a.i("U<0>")),a.i("ff<0>"))},
bl(a,b){a.$2(0,null)
b.b=!0
return b.a},
ad(a,b){A.pg(a,b)},
bk(a,b){b.bV(a)},
bj(a,b){b.bW(A.a5(a),A.bz(a))},
pg(a,b){var s,r,q=new A.jl(b),p=new A.jm(b)
if(a instanceof A.U)a.dw(q,p,t.z)
else{s=t.z
if(a instanceof A.U)a.cH(q,p,s)
else{r=new A.U($.S,t._)
r.a=8
r.c=a
r.dw(q,p,s)}}},
bn(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.S.fc(new A.jz(s),t.H,t.S,t.z)},
lP(a,b,c){return 0},
fY(a){var s
if(t.C.b(a)){s=a.gaC()
if(s!=null)return s}return B.v},
l6(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.U($.S,b.i("U<u<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.hl(i,h,g,f)
try{for(n=J.J(a),m=t.P;n.l();){r=n.gq()
q=i.b
r.cH(new A.hk(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.aZ(A.j([],b.i("o<0>")))
return n}i.a=A.c1(n,null,!1,b.i("0?"))}catch(l){p=A.a5(l)
o=A.bz(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.mj(m,k)
m=new A.af(m,k==null?A.fY(m):k)
n.aV(m)
return n}else{i.d=p
i.c=o}}return f},
mj(a,b){if($.S===B.k)return null
return null},
pz(a,b){if($.S!==B.k)A.mj(a,b)
if(b==null)if(t.C.b(a)){b=a.gaC()
if(b==null){A.lp(a,B.v)
b=B.v}}else b=B.v
else if(t.C.b(a))A.lp(a,b)
return new A.af(a,b)},
oB(a,b){var s=new A.U($.S,b.i("U<0>"))
b.a(a)
s.a=8
s.c=a
return s},
kd(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.oj()
b.aV(new A.af(new A.b1(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dh(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.b2()
b.aY(o.a)
A.cD(b,p)
return}b.a^=2
A.fG(null,null,b.b,t.M.a(new A.iY(o,b)))},
cD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.kC(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.cD(d.a,c)
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
A.kC(j.a,j.b)
return}g=$.S
if(g!==h)$.S=h
else g=null
c=c.c
if((c&15)===8)new A.j1(q,d,n).$0()
else if(o){if((c&1)!==0)new A.j0(q,j).$0()}else if((c&2)!==0)new A.j_(d,q).$0()
if(g!=null)$.S=g
c=q.c
if(c instanceof A.U){p=q.a.$ti
p=p.i("aS<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.b3(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.kd(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.b3(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
pR(a,b){var s
if(t.Q.b(a))return b.fc(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.d(A.b2(a,"onError",u.c))},
pN(){var s,r
for(s=$.cQ;s!=null;s=$.cQ){$.ea=null
r=s.b
$.cQ=r
if(r==null)$.e9=null
s.a.$0()}},
pY(){$.ky=!0
try{A.pN()}finally{$.ea=null
$.ky=!1
if($.cQ!=null)$.kR().$1(A.mB())}},
my(a){var s=new A.fg(a),r=$.e9
if(r==null){$.cQ=$.e9=s
if(!$.ky)$.kR().$1(A.mB())}else $.e9=r.b=s},
pV(a){var s,r,q,p=$.cQ
if(p==null){A.my(a)
$.ea=$.e9
return}s=new A.fg(a)
r=$.ea
if(r==null){s.b=p
$.cQ=$.ea=s}else{q=r.b
s.b=q
$.ea=r.b=s
if(q==null)$.e9=s}},
qW(a,b){A.cW(a,"stream",t.K)
return new A.fw(b.i("fw<0>"))},
kC(a,b){A.pV(new A.jv(a,b))},
mu(a,b,c,d,e){var s,r=$.S
if(r===c)return d.$0()
$.S=c
s=r
try{r=d.$0()
return r}finally{$.S=s}},
pU(a,b,c,d,e,f,g){var s,r=$.S
if(r===c)return d.$1(e)
$.S=c
s=r
try{r=d.$1(e)
return r}finally{$.S=s}},
pT(a,b,c,d,e,f,g,h,i){var s,r=$.S
if(r===c)return d.$2(e,f)
$.S=c
s=r
try{r=d.$2(e,f)
return r}finally{$.S=s}},
fG(a,b,c,d){t.M.a(d)
if(B.k!==c){d=c.hZ(d)
d=d}A.my(d)},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
jc:function jc(){},
jd:function jd(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=!1
this.$ti=b},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jz:function jz(a){this.a=a},
dV:function dV(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
af:function af(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fh:function fh(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c,d,e){var _=this
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
iV:function iV(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
fg:function fg(a){this.a=a
this.b=null},
fw:function fw(a){this.$ti=a},
e4:function e4(){},
ft:function ft(){},
jb:function jb(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
lJ(a,b){var s=a[b]
return s===a?null:s},
kf(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ke(){var s=Object.create(null)
A.kf(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
lj(a,b){return new A.aT(a.i("@<0>").v(b).i("aT<1,2>"))},
M(a,b,c){return b.i("@<0>").v(c).i("k5<1,2>").a(A.mC(a,new A.aT(b.i("@<0>").v(c).i("aT<1,2>"))))},
r(a,b){return new A.aT(a.i("@<0>").v(b).i("aT<1,2>"))},
k6(a){return new A.bh(a.i("bh<0>"))},
ag(a){return new A.bh(a.i("bh<0>"))},
eJ(a,b){return b.i("lk<0>").a(A.qo(a,new A.bh(b.i("bh<0>"))))},
kg(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oE(a,b,c){var s=new A.cg(a,b,c.i("cg<0>"))
s.c=a.e
return s},
d9(a,b){var s=J.J(a.a)
if(new A.aa(s,a.b,a.$ti.i("aa<1>")).l())return s.gq()
return null},
ao(a,b,c){var s=A.lj(b,c)
a.Y(0,new A.hZ(s,b,c))
return s},
ll(a,b){var s,r,q=A.k6(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.y)(a),++r)q.m(0,b.a(a[r]))
return q},
nY(a,b){var s=A.k6(b)
s.V(0,a)
return s},
nZ(a,b){var s=t.U
return J.kU(s.a(a),s.a(b))},
k7(a){var s,r
if(A.kO(a))return"{...}"
s=new A.al("")
try{r={}
B.a.m($.aN,a)
s.a+="{"
r.a=!0
a.Y(0,new A.i0(r,s))
s.a+="}"}finally{if(0>=$.aN.length)return A.c($.aN,-1)
$.aN.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
oW(){throw A.d(A.a9("Cannot change an unmodifiable set"))},
dI:function dI(){},
j4:function j4(a){this.a=a},
dK:function dK(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cd:function cd(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bh:function bh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fp:function fp(a){this.a=a
this.c=this.b=null},
cg:function cg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
z:function z(){},
E:function E(){},
i_:function i_(a){this.a=a},
i0:function i0(a,b){this.a=a
this.b=b},
dL:function dL(a,b){this.a=a
this.$ti=b},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
e0:function e0(){},
cs:function cs(){},
bI:function bI(a,b){this.a=a
this.$ti=b},
bs:function bs(){},
dT:function dT(){},
fz:function fz(){},
dy:function dy(a,b){this.a=a
this.$ti=b},
cK:function cK(){},
e1:function e1(){},
pO(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a5(r)
q=A.Z(String(s),null,null)
throw A.d(q)}q=A.jn(p)
return q},
jn(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.fn(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.jn(a[s])
return a},
pc(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.n2()
else s=new Uint8Array(o)
for(r=J.ba(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
pb(a,b,c,d){var s=a?$.n1():$.n0()
if(s==null)return null
if(0===c&&d===b.length)return A.m0(s,b)
return A.m0(s,b.subarray(c,d))},
m0(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
kX(a,b,c,d,e,f){if(B.c.ab(f,4)!==0)throw A.d(A.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.Z("Invalid base64 padding, more than two '=' characters",a,b))},
lg(a,b,c){return new A.de(a,b)},
pl(a){return a.A()},
oC(a,b){return new A.j7(a,[],A.qg())},
oD(a,b,c){var s,r=new A.al(""),q=A.oC(r,b)
q.br(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
pd(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
fn:function fn(a,b){this.a=a
this.b=b
this.c=null},
j6:function j6(a){this.a=a},
fo:function fo(a){this.a=a},
ji:function ji(){},
jh:function jh(){},
eh:function eh(){},
h0:function h0(){},
bS:function bS(){},
ep:function ep(){},
et:function et(){},
de:function de(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
eG:function eG(){},
hU:function hU(a){this.b=a},
hT:function hT(a){this.a=a},
j8:function j8(){},
j9:function j9(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c){this.c=a
this.a=b
this.b=c},
f6:function f6(){},
iD:function iD(a){this.a=a},
jg:function jg(a){this.a=a
this.b=16
this.c=0},
qx(a){var s=A.i6(a,null)
if(s!=null)return s
throw A.d(A.Z(a,null,null))},
nJ(a,b){a=A.X(a,new Error())
if(a==null)a=A.cO(a)
a.stack=b.p(0)
throw a},
c1(a,b,c,d){var s,r=c?J.lc(a,d):J.lb(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aU(a,b,c){var s,r=A.j([],c.i("o<0>"))
for(s=J.J(a);s.l();)B.a.m(r,c.a(s.gq()))
if(b)return r
r.$flags=1
return r},
av(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.i("o<0>"))
s=A.j([],b.i("o<0>"))
for(r=J.J(a);r.l();)B.a.m(s,r.gq())
return s},
ai(a,b){var s=A.aU(a,!1,b)
s.$flags=3
return s},
lw(a,b,c){var s,r
A.eX(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aj(c,b,null,"end",null))
if(s===0)return""}r=A.ol(a,b,c)
return r},
ol(a,b,c){var s=a.length
if(b>=s)return""
return A.oc(a,b,c==null||c>s?s:c)},
lv(a,b,c){var s=J.J(b)
if(!s.l())return a
if(c.length===0){do a+=A.w(s.gq())
while(s.l())}else{a+=A.w(s.gq())
while(s.l())a=a+c+A.w(s.gq())}return a},
kc(){var s,r,q=A.o3()
if(q==null)throw A.d(A.a9("'Uri.base' is not supported"))
s=$.lC
if(s!=null&&q===$.lB)return s
r=A.os(q)
$.lC=r
$.lB=q
return r},
oj(){return A.bz(new Error())},
nq(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
l2(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eq(a){if(a>=10)return""+a
return"0"+a},
nI(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.b2(b,"name","No enum value with that name"))},
eu(a){if(typeof a=="number"||A.b8(a)||a==null)return J.d0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lo(a)},
nK(a,b){A.cW(a,"error",t.K)
A.cW(b,"stackTrace",t.l)
A.nJ(a,b)},
ef(a){return new A.ee(a)},
a7(a,b){return new A.b1(!1,null,b,a)},
b2(a,b,c){return new A.b1(!0,a,b,c)},
lq(a){var s=null
return new A.cw(s,s,!1,s,s,a)},
od(a,b){return new A.cw(null,null,!0,a,b,"Value not in range")},
aj(a,b,c,d,e){return new A.cw(b,c,!0,a,d,"Invalid value")},
ds(a,b,c){if(0>a||a>c)throw A.d(A.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aj(b,a,c,"end",null))
return b}return c},
eX(a,b){if(a<0)throw A.d(A.aj(a,0,null,b,null))
return a},
hE(a,b,c,d){return new A.ey(b,!0,a,d,"Index out of range")},
a9(a){return new A.dz(a)},
lz(a){return new A.f2(a)},
a3(a){return new A.cA(a)},
a6(a){return new A.em(a)},
co(a){return new A.iU(a)},
Z(a,b,c){return new A.C(a,b,c)},
nT(a,b,c){var s,r
if(A.kO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
B.a.m($.aN,a)
try{A.pM(a,s)}finally{if(0>=$.aN.length)return A.c($.aN,-1)
$.aN.pop()}r=A.lv(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
k2(a,b,c){var s,r
if(A.kO(a))return b+"..."+c
s=new A.al(b)
B.a.m($.aN,a)
try{r=s
r.a=A.lv(r.a,a,", ")}finally{if(0>=$.aN.length)return A.c($.aN,-1)
$.aN.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
pM(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
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
cu(a,b,c,d){var s
if(B.f===c){s=J.aD(a)
b=J.aD(b)
return A.iu(A.bt(A.bt($.fL(),s),b))}if(B.f===d){s=J.aD(a)
b=J.aD(b)
c=J.aD(c)
return A.iu(A.bt(A.bt(A.bt($.fL(),s),b),c))}s=J.aD(a)
b=J.aD(b)
c=J.aD(c)
d=J.aD(d)
d=A.iu(A.bt(A.bt(A.bt(A.bt($.fL(),s),b),c),d))
return d},
o1(a){var s,r,q=$.fL()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.y)(a),++r)q=A.bt(q,J.aD(a[r]))
return A.iu(q)},
lu(a,b){return new A.dy(A.nY(a,b),b.i("dy<0>"))},
os(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.c(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.lA(a4<a4?B.b.u(a5,0,a4):a5,5,a3).gff()
else if(s===32)return A.lA(B.b.u(a5,5,a4),0,a3).gff()}r=A.c1(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.mx(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.mx(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.N(a5,"\\",n))if(p>0)h=B.b.N(a5,"\\",p-1)||B.b.N(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.N(a5,"..",n)))h=m>n+2&&B.b.N(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.N(a5,"file",0)){if(p<=0){if(!B.b.N(a5,"/",n)){g="file:///"
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
m=f}j="file"}else if(B.b.N(a5,"http",0)){if(i&&o+3===n&&B.b.N(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.aB(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.N(a5,"https",0)){if(i&&o+4===n&&B.b.N(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.aB(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.fu(a4<a5.length?B.b.u(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.p5(a5,0,q)
else{if(q===0)A.cL(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.p6(a5,c,p-1):""
a=A.p1(a5,p,o,!1)
i=o+1
if(i<n){a0=A.i6(B.b.u(a5,i,n),a3)
d=A.p3(a0==null?A.B(A.Z("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.p2(a5,n,m,a3,j,a!=null)
a2=m<l?A.p4(a5,m+1,l,a3):a3
return A.oX(j,b,a,d,a1,a2,l<a4?A.p0(a5,l+1,a4):a3)},
lE(a){var s=t.N
return B.a.eX(A.j(a.split("&"),t.s),A.r(s,s),new A.iC(B.R),t.G)},
f5(a,b,c){throw A.d(A.Z("Illegal IPv4 address, "+a,b,c))},
op(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.c(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.f5("each part must be in the range 0..255",a,r)}A.f5("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.f5(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aO(d)
if(!(k<16))return A.c(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.f5(j,a,q)
p=l}A.f5("IPv4 address should contain exactly 4 parts",a,q)},
oq(a,b,c){var s
if(b===c)throw A.d(A.Z("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.c(a,b)
if(a.charCodeAt(b)===118){s=A.or(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.lD(a,b,c)
return!0},
or(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.C(n,a,q)
r=q
break}return new A.C("Unexpected character",a,q-1)}if(r-1===b)return new A.C(n,a,r)
return new A.C("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.C("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.c(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.C("Invalid IPvFuture address character",a,r)}},
lD(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.iB(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.op(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.bR(l,8)
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
B.ac.fp(s,a0,16,s,a)
B.ac.is(s,a,a0,0)}}return s},
oX(a,b,c,d,e,f,g){return new A.e2(a,b,c,d,e,f,g)},
lV(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cL(a,b,c){throw A.d(A.Z(c,a,b))},
p3(a,b){var s=A.lV(b)
if(a===s)return null
return a},
p1(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.c(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.c(a,r)
if(a.charCodeAt(r)!==93)A.cL(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.c(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.oZ(a,q,r)
if(o<r){n=o+1
p=A.m_(a,B.b.N(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.oq(a,q,o)
l=B.b.u(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.c(a,k)
if(a.charCodeAt(k)===58){o=B.b.bj(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.m_(a,B.b.N(a,"25",n)?o+3:n,c,"%25")}else p=""
A.lD(a,b,o)
return"["+B.b.u(a,b,o)+p+"]"}}return A.p8(a,b,c)},
oZ(a,b,c){var s=B.b.bj(a,"%",b)
return s>=b&&s<c?s:c},
m_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.al(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.kk(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.al("")
l=h.a+=B.b.u(a,q,r)
if(m)n=B.b.u(a,r,r+3)
else if(n==="%")A.cL(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.al("")
if(q<r){h.a+=B.b.u(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.c(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.u(a,q,r)
if(h==null){h=new A.al("")
m=h}else m=h
m.a+=i
l=A.kj(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.u(a,b,c)
if(q<c){i=B.b.u(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
p8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.kk(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.al("")
k=B.b.u(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.u(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.al("")
if(q<r){p.a+=B.b.u(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.cL(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.c(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.u(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.al("")
l=p}else l=p
l.a+=k
j=A.kj(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.u(a,b,c)
if(q<c){k=B.b.u(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
p5(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.c(a,b)
if(!A.lX(a.charCodeAt(b)))A.cL(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.cL(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.u(a,b,c)
return A.oY(q?a.toLowerCase():a)},
oY(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p6(a,b,c){return A.e3(a,b,c,16,!1,!1)},
p2(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.e3(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.p7(q,e,f)},
p7(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.p9(a,!s||c)
return A.pa(a)},
p4(a,b,c,d){return A.e3(a,b,c,256,!0,!1)},
p0(a,b,c){return A.e3(a,b,c,256,!0,!1)},
kk(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.c(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.c(a,l)
q=a.charCodeAt(l)
p=A.jF(r)
o=A.jF(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.c(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.R(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.u(a,b,b+3).toUpperCase()
return null},
kj(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.hC(a,6*p)&63|q
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
o+=3}}return A.lw(s,0,null)},
e3(a,b,c,d,e,f){var s=A.lZ(a,b,c,d,e,f)
return s==null?B.b.u(a,b,c):s},
lZ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.c(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.kk(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.cL(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.c(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.kj(n)}if(o==null){o=new A.al("")
k=o}else k=o
k.a=(k.a+=B.b.u(a,p,q))+l
if(typeof m!=="number")return A.fJ(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.u(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
lY(a){if(B.b.T(a,"."))return!0
return B.b.f1(a,"/.")!==-1},
pa(a){var s,r,q,p,o,n,m
if(!A.lY(a))return a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.bl(s,"/")},
p9(a,b){var s,r,q,p,o,n
if(!A.lY(a))return!b?A.lW(a):a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gG(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.k(s,0,A.lW(s[0]))}return B.a.bl(s,"/")},
lW(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.lX(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.u(a,0,s)+"%3A"+B.b.aT(a,s+1)
if(r<=127){if(!(r<128))return A.c(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
p_(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.c(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.a7("Invalid URL encoding",null))}}return r},
kl(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.R===d)return B.b.u(a,b,c)
else p=new A.el(B.b.u(a,b,c))
else{p=A.j([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.a7("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.a7("Truncated URI",null))
B.a.m(p,A.p_(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}t.I.a(p)
return B.bS.i7(p)},
lX(a){var s=a|32
return 97<=s&&s<=122},
lA(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.j([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.Z(k,a,r))}}if(q<0&&r>b)throw A.d(A.Z(k,a,r))
while(p!==44){B.a.m(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.c(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.m(j,o)
else{n=B.a.gG(j)
if(p!==44||r!==n+7||!B.b.N(a,"base64",n+1))throw A.d(A.Z("Expecting '='",a,r))
break}}B.a.m(j,r)
m=r+1
if((j.length&1)===1)a=B.al.iJ(a,m,s)
else{l=A.lZ(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aB(a,m,s,l)}return new A.iA(a,j,c)},
mx(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.c(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(){},
K:function K(){},
ee:function ee(a){this.a=a},
bu:function bu(){},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ey:function ey(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dz:function dz(a){this.a=a},
f2:function f2(a){this.a=a},
cA:function cA(a){this.a=a},
em:function em(a){this.a=a},
eT:function eT(){},
du:function du(){},
iU:function iU(a){this.a=a},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},
P:function P(){},
v:function v(){},
fx:function fx(){},
al:function al(a){this.a=a},
iC:function iC(a){this.a=a},
iB:function iB(a){this.a=a},
e2:function e2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
fi:function fi(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
i3:function i3(a){this.a=a},
a1(a){var s
if(typeof a=="function")throw A.d(A.a7("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fF,a)
s[$.cZ()]=a
return s},
fF(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
qr(a,b,c){return c.a(a[b])},
b9(a,b,c,d){return d.a(a[b].apply(a,c))},
mc(a,b,c,d){return d.a(a[b](c))},
bb(a,b){var s=new A.U($.S,b.i("U<0>")),r=new A.dD(s,b.i("dD<0>"))
a.then(A.cX(new A.jY(r,b),1),A.cX(new A.jZ(r),1))
return s},
mo(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
fI(a){if(A.mo(a))return a
return new A.jA(new A.dK(t.mp)).$1(a)},
jY:function jY(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
jA:function jA(a){this.a=a},
fm:function fm(){},
cE:function cE(){this.b=this.a=0},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ(a,b){var s=0,r=A.bm(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$fZ=A.bn(function(a0,a1){if(a0===1)return A.bj(a1,r)
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
c=new A.eg(p,b,m,l,k,j,i,h,g,f,e,d,n,B.S,A.r(o,t.iL))
c.fL(p,b)
p=A.m(a).i("L<1,2>")
s=3
return A.ad(A.l6(A.i1(new A.L(a,p),p.i("aS<P>(l.E)").a(new A.h_(c)),p.i("l.E"),t.mj),t.P),$async$fZ)
case 3:n=n.h(0,"ir-stone")
p=n==null?c.hd():n
d.buffer=p
q=c
s=1
break
case 1:return A.bk(q,r)}})
return A.bl($async$fZ,r)},
eg:function eg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
h_:function h_(a){this.a=a},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
hj:function hj(a){this.a=a},
f0:function f0(a,b,c,d,e,f,g,h,i,j){var _=this
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
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
hr:function hr(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=0
this.$ti=b},
ez:function ez(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
eK:function eK(a){this.a=a},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b){this.a=a
this.b=b},
dw(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aO(a)
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
dv:function dv(a){this.a=a
this.b=0},
i8:function i8(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
id:function id(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oe(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.ls(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.hI(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.fs(new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0))
r=t.S
q=A.c1(800,0,!1,r)
p=new Float32Array(8064)
o=J.hI(4000,t.hZ)
for(s=0;s<4000;++s)o[s]=new A.fq(new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),new A.i(0,0,0),0,1,0,0,0)
n=A.c1(4000,0,!1,r)
m=new A.i(0.3,0.7,-0.5).ga3()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.i9(a,new A.hq(a,A.r(t.m,r)),b,c,A.ag(t.N),j,i,h,g,q,p,A.r(r,t.hX),o,n,m,B.bq,new A.i(0,0,0),new A.i(0,0,1),new A.i(0,1,0),new A.i(1,0,0),new A.eK(l),a,A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k),A.j([],k))
k.fR(a,b,c)
return k},
i9:function i9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.a4=a
_.a8=b
_.am=c
_.an=d
_.cl=_.eE=1
_.cv=_.cu=_.eW=_.eV=_.eU=_.eT=_.eS=_.eR=_.ct=_.cs=_.cr=_.cq=_.cp=_.co=_.cn=_.eQ=_.eP=_.eO=_.cm=_.eN=_.eM=_.eL=_.eK=_.eJ=_.eI=_.eH=_.eG=_.eF=_.X=$
_.ba=null
_.dK=e
_.ea=_.e9=_.e8=_.e7=_.e6=_.e5=_.e4=_.e3=_.e2=_.e1=_.e0=_.e_=_.dZ=_.dY=_.dX=_.dW=_.dV=_.dU=_.dT=_.dS=_.dR=_.dQ=_.dP=_.dO=_.dN=_.dM=_.dL=_.bb=$
_.bc=0
_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=$
_.bg=_.bf=_.be=_.bd=_.aI=_.al=null
_.aJ=$
_.ed=_.ec=_.eb=!1
_.ik=1
_.c4=f
_.c5=g
_.il=h
_.ee=i
_.bh=0
_.ef=j
_.im=k
_.c6=0
_.c7=l
_.io=1
_.c8=!1
_.aK=0
_.c9=m
_.aL=0
_.eg=n
_.eh=o
_.ek=_.ej=_.ei=1
_.el=0.55
_.ca=p
_.em=q
_.cb=r
_.cc=s
_.cd=a0
_.en=_.ci=_.cg=_.cf=_.ce=0
_.eo=null
_.ep=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.ez=_.ck=_.cj=_.ey=_.ex=_.ir=_.iq=_.ip=_.ew=_.ev=_.eu=_.es=_.er=_.eq=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.eA=a7
_.eB=a8
_.eC=a9
_.eD=b0},
mp(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.U(0,c).b8(f.U(0,c)).ga3(),r=A.jx(g)
return A.mr(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
ec(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aO(a)
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
mr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.ec(a,A.ec(a,A.ec(a,A.ec(a,A.ec(a,A.ec(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
jx(a){return new A.cI((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
pu(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.cw(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.T(),i=A.T(),h=A.T()
switch(B.c.ab(o,6)){case 0:j.b=c
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
h.b=l}s=j.bP()
if(typeof s!=="number")return s.a0()
s=B.d.ag(s*255)
r=i.bP()
if(typeof r!=="number")return r.a0()
r=B.d.ag(r*255)
q=h.bP()
if(typeof q!=="number")return q.a0()
return new A.cI(s,r,B.d.ag(q*255))},
dH:function dH(){},
fv:function fv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
fs:function fs(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
fq:function fq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ia:function ia(){},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
iN:function iN(){},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
f7(a,b,c){return new A.i(a,b,c)},
lF(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.i(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a){this.a=a},
nu(a,b,c){var s=new A.es(a,c,null,b)
s.fM(a,null,null,b,c)
return s},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
nG(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.d9(new A.I(B.bt,t.gl.a(new A.hh(a)),t.ns),t.k)
return s==null?null:new A.cn(s)},
nF(a){if(a.a!==21)return null
if(a.e)return B.az
if(!a.d&&a.b>=0.6&&a.c>=3)return B.aA
return B.ay},
aR:function aR(a,b){this.a=a
this.b=b},
he:function he(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cn:function cn(a){this.a=a},
hh:function hh(a){this.a=a},
o2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.eV(s,new A.i(o,n,m),q,p,l,j)
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
eV:function eV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lt(a,b,c){var s=A.kq(b),r=A.kq(a)
if(c!==2)A.B(A.b2(c,"version","unsupported save version"))
return new A.cx(c,s,r)},
kq(a){var s,r,q,p,o=A.m(a).i("V<1>"),n=A.av(new A.V(a,o),o.i("l.E"))
B.a.a1(n)
o=t.z
s=A.r(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.y)(n),++q){p=n[q]
s.k(0,p,A.md(a.h(0,p)))}return A.en(s,t.N,o)},
md(a){var s,r,q,p
if(t.f.b(a)){s=A.r(t.N,t.z)
for(r=a.gM(),r=r.gt(r);r.l();){q=r.gq()
p=q.a
if(typeof p!="string")throw A.d(B.aU)
s.k(0,p,q.b)}return A.kq(s)}if(t.j.b(a)){r=t.z
return A.ai(J.na(a,A.qI(),r),r)}if(a==null||A.b8(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.aY)
return a}throw A.d(A.Z("save contains unsupported value "+J.kW(a).p(0),null,null))},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(){},
c5:function c5(a,b){this.a=a
this.b=b},
l7(a,b,c,d,e,f,g){return new A.hm(a,b,c,d,e,f,g,A.j([],t.mc),A.j([],t.ag))},
l8(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.ar(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.d(B.aT)
r=e.h(0,"runSeed")
q=A.ar(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.ar(p)||p<1||typeof o!="number")throw A.d(B.b0)
if(!isFinite(480))throw A.d(A.b2(480,"daySeconds","must be finite and > 0"))
n=new A.ew(p,480)
if(!isFinite(o)||o<0||o>=24)A.B(A.Z("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.nW(a3,A.ao(a,s,m))
k=A.nr(l,A.ao(b,s,m),n)
j=A.l9(d)
A.nO(A.ao(a0,s,m)).hW(j)
m=A.ao(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.b8(f))A.B(B.aK)
return A.l7(d,q,j,n,l,k,new A.er(i,h,g,f))},
pp(a){var s
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
bX:function bX(a,b){this.a=a
this.b=b},
ev:function ev(){},
hn:function hn(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c,d,e,f,g,h,i){var _=this
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
ho:function ho(a){this.a=a},
hp:function hp(){},
ei:function ei(a,b){this.a=a
this.b=b
this.d=null},
h4:function h4(a){this.a=a},
eL:function eL(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(){this.b=0},
ie:function ie(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qH(a,b,c){var s,r,q=A.kQ(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.cp(B.aB,s)}r=A.mL(a,c,b)
if(r!=null)return new A.cp(B.aC,r.at&&!r.ax&&!r.z?"close door":"open door")
if(A.mM(a,c,b)!=null)return B.aG
return B.aF},
bV:function bV(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.c=b},
l9(a4){var s,r,q,p=null,o="living-room",n="mantle-living",m="the mantle by the door",l="mantle-living-second",k="the mantle by the window",j="hall",i="kitchen",h="mantle-kitchen",g="mantle-bedroom",f="landing",e="landing-bathroom",d="bathroom",c="spare-room",b=t.kl,a=A.j([],b),a0=t.aN,a1=A.j([],a0),a2=A.j([],t.jn),a3=t.N
a3=new A.hu(a,a1,a2,A.r(a3,t.J),A.r(a3,t.gm),new A.hv())
s=t.E
r=t.s
q=t.cs
B.a.V(a,A.j([new A.ak(o,new A.i(4.5,2.6,4),new A.i(0,0,0),A.j([new A.aq("living-north-west",B.e,0.5,0.6,1.2,1.2),new A.aq("living-north-east",B.e,2.7,0.6,1.2,1.2)],s),A.j(["hall-living","kitchen-living"],r),A.j([new A.aw(n,m,new A.i(1,1.3,1),!1,n),new A.aw(l,k,new A.i(3,1.3,3),!1,l)],q)),new A.ak(j,new A.i(2.5,2.6,7),new A.i(4.5,0,0),A.j([new A.aq("hall-fanlight",B.e,0.85,2.15,0.8,0.35)],s),A.j(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.j([new A.aw("mantle-hall","the hall mantle",new A.i(1,1.3,3.5),!1,p)],q)),new A.ak(i,new A.i(4.5,2.5,3),new A.i(0,0,4),A.j([new A.aq("kitchen-south",B.h,1.5,0.7,1.2,1.1),new A.aq("kitchen-west",B.q,1,0.8,0.9,1)],s),A.j(["hall-kitchen","kitchen-living"],r),A.j([new A.aw(h,"the mantle by the stove",new A.i(0.8,1.2,0.5),!1,h),new A.aw("mantle-kitchen-second",m,new A.i(2.2,1.2,2),!1,p),new A.aw("mantle-kitchen-third",k,new A.i(3.8,1.2,1.2),!1,p)],q)),new A.ak("cellar",new A.i(4,2,4),new A.i(1,-2,2),B.a7,A.j(["hall-cellar"],r),B.bp),new A.ak("bedroom",new A.i(4.5,2.4,4),new A.i(0,2.8,0),A.j([new A.aq("bedroom-north-west",B.e,0.7,0.7,1.1,1.1),new A.aq("bedroom-north-east",B.e,2.7,0.7,1,1.1)],s),A.j(["landing-bedroom"],r),A.j([new A.aw(g,"the bedroom mantle",new A.i(1,1.3,1),!1,g),new A.aw("mantle-bedroom-bedside","the bedside mantle",new A.i(3.5,1,3),!1,p)],q)),new A.ak(f,new A.i(2.5,2.4,3),new A.i(4.5,2.8,0),B.a7,A.j(["hall-landing","landing-bedroom",e,"landing-spare"],r),A.j([new A.aw("mantle-landing","the landing mantle",new A.i(1,1.2,1.5),!1,p)],q)),new A.ak(d,new A.i(2.5,2.4,2.5),new A.i(4.5,2.8,3),A.j([new A.aq("bathroom-east",B.m,0.9,1,0.7,1)],s),A.j([e],r),A.j([new A.aw("mantle-bathroom","the bathroom mantle",new A.i(1.5,1.2,1),!1,p)],q)),new A.ak(c,new A.i(4.5,2.1,3),new A.i(0,2.8,4),A.j([new A.aq("spare-south",B.h,1.8,0.7,0.9,0.9)],s),A.j(["landing-spare"],r),A.j([new A.aw("mantle-spare","the broken mantle",new A.i(2,1.3,1),!0,p)],q))],b))
B.a.V(a1,A.j([A.bH(j,"outside",!0,B.e,B.h,2.1,"front-door",0.8,0,!0,!1,!1,0.9),A.bH(j,o,!1,B.q,B.m,2.1,"hall-living",1.8,1.8,!0,!1,!1,0.9),A.bH(j,i,!1,B.q,B.m,2.1,"hall-kitchen",4.9,1,!0,!1,!1,0.9),A.bH(i,o,!1,B.e,B.h,2.1,"kitchen-living",2,2,!0,!1,!1,0.9),A.bH(j,"cellar",!1,B.h,B.m,2,"hall-cellar",0.5,1.5,!1,!1,!0,0.9),A.bH(j,f,!1,B.m,B.m,2.1,"hall-landing",4,0.7,!0,!0,!1,1.2),A.bH(f,"bedroom",!1,B.q,B.m,2.1,"landing-bedroom",1,1,!0,!1,!1,0.9),A.bH(f,d,!1,B.h,B.e,2.1,e,1,0.8,!0,!1,!1,0.9),A.bH(f,c,!1,B.h,B.e,2.1,"landing-spare",0.1,2,!0,!1,!1,0.9)],a0))
B.a.m(a2,new A.c6("hall-stairs",B.bs,new A.i(5.75,1.65,5.8),new A.i(5.75,4.45,2.2)))
a3.he()
b=a.length
if(b!==8)A.B(A.a3("expected eight rooms, got "+b))
b=a3.gj9()
if(b!==9)A.B(A.a3("window discrepancy must be 9 inside / 11 outside"))
B.a.gbx(a2)
b=B.a.gG(B.a.gbx(a2).c)
if(b!==4.2)A.B(A.a3("stairs must expose landings at 1.4, 2.8 and 4.2"))
if(a1.length!==9)A.B(A.a3("expected nine physical portals"))
a3.hM()
a3.hL()
return a3},
hu:function hu(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
hA:function hA(){},
hz:function hz(){},
hB:function hB(a){this.a=a},
hC:function hC(){},
kQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.y)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.i(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gn(0)
if(g<0.01||g>3)continue
f=h.ga3()
j=a.b
if(Math.acos(B.d.W(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
mL(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aR(c),r=J.J(s.a),s=new A.aa(r,s.b,s.$ti.i("aa<1>")),q=null,p=3;s.l();){o=r.gq()
n=b.iQ(c,o)
m=a.a
l=new A.i(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gn(0)
if(!A.mi(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
mM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
m=A.q8(b,i,n)
l=a.a
k=new A.i(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gn(0)
if(!A.mi(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
mi(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.W(a.ga3().ib(c.b),-1,1))<=e},
q8(a,b,c){var s=a.aH(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.i(q.a+r,p,q.c)
break
case 2:q=new A.i(q.a+r,p,q.c+s.c)
break
case 1:q=new A.i(q.a+s.a,p,q.c+r)
break
case 3:q=new A.i(q.a,p,q.c+r)
break
default:q=null}return q},
hi:function hi(){this.a=null
this.b=0},
im:function im(){},
io:function io(){},
bc:function bc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
bH(a,b,c,d,e,f,g,h,i,j,k,l,m){return new A.c4(g,a,b,d,e,h,i,m,f,l,k,j)},
bC:function bC(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=!0},
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
aw:function aw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=d
_.f=e
_.r=!1},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.c=b
_.f=c
_.r=d},
ak:function ak(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
la(a,b,c,d,e,f){var s=t.N
return new A.hy(e,f,c,a,A.en(A.ao(d,s,s),s,s),A.ai(b,s))},
nN(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.r(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q){p=s[q]
h.k(0,p.a,new A.dq(p.at,p.ax))}s=A.r(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.y)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.y)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.r(i,t.e)
for(q=0;q<r.length;r.length===n||(0,A.y)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.y)(o),++l){j=o[l]
i.k(0,j.a,new A.dg(j.d,j.r))}return A.la(a.r.b,B.i,i,B.aa,h,s)},
nO(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.bv
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bo
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.ar(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.aR)
p=t.N
o=A.r(p,t.ku)
for(n=a.gM(),n=n.gt(n),m=t.z;n.l();){l=n.gq()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.a_)
l=A.ao(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.b8(j)||!A.b8(i))A.B(B.a_)
o.k(0,k,new A.dq(j,i))}h=A.r(p,t.y)
for(n=a0.gM(),n=n.gt(n);n.l();){l=n.gq()
k=l.a
if(typeof k!="string"||!A.b8(l.b))throw A.d(B.aP)
h.k(0,k,A.aC(l.b))}g=A.r(p,t.e)
for(n=a1.gM(),n=n.gt(n);n.l();){l=n.gq()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.Z)
l=A.ao(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.b8(f)||!A.b8(e))A.B(B.Z)
g.k(0,k,new A.dg(f,e))}d=A.r(p,p)
for(q=s.gM(),q=q.gt(q);q.l();){p=q.gq()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.b4)
d.k(0,n,A.x(p.b))}c=A.j([],t.s)
for(q=J.J(r);q.l();){b=q.gq()
if(typeof b!="string"||b.length===0)throw A.d(B.aH)
B.a.m(c,b)}return A.la(a2,c,g,d,o,h)},
kD(a,b){return a.a.a===b.a&&a.a7(0,b.gb7(b))},
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dq:function dq(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
nD(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.ll(e,A.W(e).c)
q=new A.cE()
q.bB((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.d5(a,q,2,r,1+s,A.eJ(["time"],t.N))
break
case 3:A.d5(a,q,3,r,1+s,A.eJ(["place"],t.N))
break
case 4:A.d5(a,q,4,r,2+s,p)
A.nz(a,q,4)
break
case 5:A.d5(a,q,5,r,s,p)
A.nx(a,q,5)
break
case 6:A.d5(a,q,6,r,s,p)
A.ny(a,q)
A.nC(a,q,6)
break
case 7:A.nA(a,q,7)
break
default:if(s>0)A.d5(a,q,b,r,s,p)}},
nw(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.B(0,b.a))return!1
if(A.nB(a,b,c))return!1
return!0},
d5(a,b,c,d,e,f){var s,r,q,p,o=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(A.nw(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.bw(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.c(o,p)
A.l4(a,b,o[p],f)}},
l4(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.ao(B.a.gG(o).a,n,n)
if(d==null)s=A.j(B.j.slice(0),t.s)
else{n=t.nn
s=A.av(new A.I(B.j,t.gS.a(new A.hd(d)),n),n.i("l.E"))}n=s.length
if(n===0)return
n=b.a2(n)
if(!(n>=0&&n<s.length))return A.c(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.cR(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.a2(n)
if(!(n>=0&&n<p.length))return A.c(p,n)
m.k(0,r,p[n])}a.bX(c.a,m,B.a.gG(o).b)},
nz(a,b,c){var s=A.l5(a,b,c)
if(!a.aG(s))return
a.cY(c,t.G.a(s),0,B.F,null)},
l5(a,b,c){var s,r,q,p,o,n=t.N,m=A.r(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.j[s]
q=n.h(0,r)
if(q==null)q=B.i
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.a2(p)
if(!(o>=0&&o<p))return A.c(q,o)
m.k(0,r,q[o])}}return m},
nx(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.bw(i,b)
s=i.length
if(0>=s)return A.c(i,0)
q=i[0]
if(1>=s)return A.c(i,1)
p=i[1]
i=q.c
s=t.N
o=A.ao(B.a.gG(i).a,s,s)
r=p.c
n=A.ao(B.a.gG(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.j[m]
k=o.h(0,l)
j=s.cR(l,k==null?"":k)
k=j.length
if(k!==0){k=b.a2(k)
if(!(k>=0&&k<j.length))return A.c(j,k)
o.k(0,l,j[k])}}a.bX(q.a,o,B.a.gG(i).b)
a.bX(p.a,n,B.a.gG(r).b)},
ny(a,b){var s,r,q=A.j([],t.r)
for(s=a.b,r=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));r.l();)q.push(r.d)
r=q.length
if(r===0)return
r=b.a2(r)
if(!(r>=0&&r<q.length))return A.c(q,r)
s.aS(0,q[r].a)},
nC(a,b,c){var s,r,q=A.j([],t.r)
for(s=a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>"));s.l();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.a2(s)
if(!(s>=0&&s<q.length))return A.c(q,s)
A.l4(a,b,q[s],null)},
nA(a,b,c){var s=c+1,r=A.l5(a,b,s)
if(!a.aG(r))return
a.cY(s,t.G.a(r),0,B.F,null)},
nB(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gG(b.c).c===B.x}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gG(b.c).c===B.x}if(c===21)return b.e
return!1},
hd:function hd(a){this.a=a},
ow(a){var s,r,q,p,o=t.N,n=A.r(o,t.h)
for(s=0;s<5;++s){r=B.j[s]
q=a.h(0,r)
p=A.aU(q==null?B.i:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.iL(n)},
hV(a,b,c){var s,r,q,p=t.z
p=A.r(p,p)
for(s=0;s<5;++s){r=B.j[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.eI(A.en(p,q,q),b,c)},
li(a){var s=t.N
return A.hV(t.a.a(a.h(0,"fields")).az(0,new A.hW(),s,s),A.fE(a.h(0,"shakiness")),A.nI(B.bl,A.x(a.h(0,"hand")),t.bU))},
nH(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.j([],t.b1)
for(s=J.J(t.j.a(a.h(0,"revisions"))),r=t.a;s.l();)l.push(A.li(r.a(s.gq())))
s=A.cP(a.h(0,"corroborator"))
q=A.aC(a.h(0,"locked"))
p=A.m9(a.h(0,"lastReadDay"))
return new A.aE(n,m,l,s,q,p,o==null?null:A.li(r.a(o)))},
bD:function bD(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(){},
hX:function hX(a){this.a=a},
aE:function aE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lf(a){return new A.hK(a,A.r(t.S,t.L),A.ag(t.N),A.j([],t.t))},
nW(a,b){var s,r,q,p,o=A.lf(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.V(0,J.n8(s.a(b.h(0,"tags")),t.N))
for(s=J.J(s.a(b.h(0,"entries"))),r=t.a,q=o.b;s.l();){p=A.nH(r.a(s.gq()))
q.k(0,p.a,p)}return o},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
hR:function hR(a,b){this.a=a
this.b=b},
l3(a,b,c,d,e,f,g){var s=A.av(f,t.ad)
if(b<0||a<0||e<0)A.B(A.Z("saved day-loop resources must not be negative",null,null))
return new A.h6(c,g,b,a,e,d===!0,s)},
nr(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.aN)
s=A.j([],t.b2)
for(r=J.J(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.nO,l=t.m9,k=t.f;r.l();){j=r.gq()
if(!k.b(j))throw A.d(B.aS)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.ar(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.aM)
f=A.d9(new A.I(B.a3,q.a(new A.h7(h)),p),o)
e=A.d9(new A.I(B.a8,n.a(new A.h8(g)),m),l)
if(f==null||e==null)throw A.d(B.b2)
B.a.m(s,new A.cz(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.ar(d)||!A.ar(c)||!A.ar(b)||!A.b8(a))throw A.d(B.aV)
return A.l3(c,d,a1,a,b,s,a3)},
ay:function ay(a,b){this.a=a
this.b=b},
ap:function ap(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
eA:function eA(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.b=a
this.c=b},
ca:function ca(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
hD:function hD(a){this.c=a},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
ls(){var s=A.kw(B.i),r=A.kw(B.i),q=new A.ii(B.l,s,r)
if(!isFinite(0))A.B(B.aI)
if(!B.a.a7(r,B.a.gb7(s)))A.B(B.aW)
if(q.a===B.l&&q.b!==0&&!q.e)A.B(B.aJ)
return q},
kw(a){var s,r,q,p=A.j([],t.s),o=A.ag(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.m(0,q))throw A.d(B.b1)
B.a.m(p,q)}return p},
aV:function aV(a,b){this.a=a
this.b=b},
ih:function ih(){},
bd:function bd(){},
ii:function ii(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
ew:function ew(a,b){this.a=a
this.b=6
this.c=b},
qM(a){var s=B.d.W(a,0,1)
if(s<=0.5)return A.mn(4491468,16777215,s*2)
return A.mn(16777215,16759637,(s-0.5)*2)},
mn(a,b,c){var s,r=new A.jr(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.fs()
s=r.$1(8)
if(typeof s!=="number")return s.fs()
r=r.$1(0)
if(typeof r!=="number")return A.fJ(r)
return(q<<16|s<<8|r)>>>0},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
cB(a){var s,r,q=A.r(t.N,t.z)
for(s=a.gM(),s=s.gt(s);s.l();){r=s.gq()
q.k(0,B.c.p(r.a),r.b)}return q},
ir:function ir(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
is:function is(){},
it:function it(){},
c9:function c9(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b){this.a=a
this.b=b},
iv:function iv(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
iw:function iw(){},
ix:function ix(){},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
h1:function h1(a){this.a=a
this.b=null},
nv(a){var s=A.j([],t.W)
s=new A.h9(A.G(a,"div","door",null),s)
s.fN(a)
return s},
h9:function h9(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
nE(a){var s=new A.hf(a,A.b(a.createElement("div")))
s.aU(a)
s.fO(a)
return s},
hf:function hf(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hg:function hg(a){this.a=a},
nM(a){var s=new A.hs(a,A.b(a.createElement("div")))
s.aU(a)
s.fP(a)
return s},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(a){this.a=a},
hL:function hL(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(){},
hQ:function hQ(){},
G(a,b,c,d){var s=A.b(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
mf(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.j([],t.W)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.e(p.item(r))
if(s.b(q))B.a.m(o,q)}return o},
dp:function dp(){},
i7:function i7(a){this.a=a
this.b=null},
og(a){var s=new A.ip(a,A.b(a.createElement("div")))
s.aU(a)
s.fT(a)
return s},
ip:function ip(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
nf(a){var s,r,q,p,o,n,m,l,k,j,i=A.j([],t.od)
for(s=a.d,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0),r=a.b;s.l();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gM(),n=n.gt(n),p+=":";n.l();){m=n.gq()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.m(i,new A.b0(p+m+":"+k,m,l.a,l.b,j))}}B.a.Z(i,new A.fU())
return new A.fT(A.ai(i,t.c),A.ag(t.N))},
b0:function b0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fT:function fT(a,b){this.a=a
this.b=b},
fV:function fV(){},
fU:function fU(){},
ov(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.cb
s=t.g
r=A.r(s,t.kz)
q=A.m(e).i("V<1>")
p=A.av(new A.V(e,q),q.i("l.E"))
B.a.a1(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.y)(p),++l){k=p[l]
for(j=e.h(0,k).gM(),j=j.gt(j);j.l();){i=j.gq()
h=i.a
if(h<1||h>21)return new A.aA(new A.aJ(B.bY,k+" has an out-of-range authored day "+h+"."))
g=A.ou(k,h,i.b,m)
if(g instanceof A.aA)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.k(0,new A.az(k,h,f.a,f.b),o.a(g).a)}}return new A.fc(new A.fb(r,A.ag(t.N),A.ag(s),A.j([],t.bl),B.z))},
ou(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.r(t.p,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.a2[p]
n=o.b
m=n+"."
l=A.j([],q)
for(k=a0.gM(),k=k.gt(k),j=m.length;k.l();){i=k.gq()
h=i.a
if(!B.b.T(h,m))continue
g=A.i6(B.b.aT(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.aA(new A.aJ(B.bZ,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.a6
B.a.m(l,new A.aW(g,i.b,f))}if(l.length===0)continue
B.a.Z(l,new A.iF())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.aA(new A.aJ(B.ai,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.aA(new A.aJ(B.ai,a+" day "+s+" has no authored tiers."))
return new A.fr(c)},
fb:function fb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(){},
iF:function iF(){},
fc:function fc(a){this.a=a},
fr:function fr(a){this.a=a},
ql(a){var s,r,q,p=A.ag(t.N)
for(s=new A.L(a,A.m(a).i("L<1,2>")).gt(0);s.l();){r=s.d
for(q=r.b.gaa(),q=q.gt(q);q.l();)if(q.gq().gJ().ak(0,new A.jD())){p.m(0,r.a)
break}}s=A.av(p,p.$ti.c)
B.a.a1(s)
return s},
qk(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.i
s=t.N
r=A.aU(b,!0,s)
B.a.a1(r)
q=new A.cE()
q.bB((a^913741)>>>0)
p=q.a2(4)
if(!(p>=0&&p<4))return A.c(B.a1,p)
o=B.a1[p]
n=r.length
n=o>n?n:o
if(n===0)return B.i
m=A.aU(r,!0,s)
B.a.bw(m,q)
s=A.ka(m,0,A.cW(n,"count",t.S),A.W(m).c).fe(0)
B.a.a1(s)
return s},
jD:function jD(){},
lG(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.ar(r)||!A.ar(q)||!A.ar(p)||r<1||q<0||q>23||p<0)return null
return new A.az(s,r,q,p)},
ot(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.ag(t.N)
for(s=t.j,q=J.J(s.a(a.h(0,k)));q.l();){p=q.gq()
if(typeof p!="string")return i
r.m(0,p)}o=A.ag(t.g)
for(s=J.J(s.a(a.h(0,j)));s.l();){n=A.lG(s.gq())
if(n==null)return i
o.m(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.ne(m)
if(!s&&l==null)return i
return new A.fd(r,o,l)},
ne(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.lG(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.ar(p))if(!(p<0))if(A.b8(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.d9(new A.I(B.a2,t.nw.a(new A.fQ(r)),t.na),t.p)
k=A.d9(new A.I(B.bu,t.bQ.a(new A.fR(q)),t.cB),t.nq)
m=o==null
j=m?h:A.d9(new A.I(B.bi,t.hg.a(new A.fS(o)),t.bn),t.V)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.ed(s,l,k,p,j,n)},
at:function at(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
bw:function bw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bg:function bg(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(){},
ed:function ed(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
iK:function iK(){},
aA:function aA(a){this.a=a},
f9:function f9(a){this.a=a},
f8:function f8(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
jK(){var s=0,r=A.bm(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$jK=A.bn(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b9=v.G
c0=A.e(A.b(b9.document).getElementById("game"))
if(c0==null){s=1
break}$.a4.b=c0
$.kv=A.e(A.b(b9.document).getElementById("fps"))
A.pv()
n=A.e(c0.getContext("webgl2"))
if(n==null){A.bO("no-webgl2")
j=A.e(A.b(b9.document).getElementById("credits"))
if(j!=null)j.textContent="this browser has no webgl2."
s=1
break}p=4
A.bO("initializing")
$.bi.b=new A.h3(new A.i(0,0,0),new A.i(0,0,1),new A.i(0,1,0),new A.i(1,0,0))
a4=$.bi.j()
a4.f=A.aC(A.b(A.b(b9.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)?0.5:1
a4=A.b(b9.window)
a5=t.N
a6=A.b(a4.document)
a7=new A.ez(a6,A.ag(a5),A.ag(a5))
a4.addEventListener("keydown",A.a1(a7.ghj()))
a4.addEventListener("keyup",A.a1(a7.ghl()))
a4.addEventListener("mousemove",A.a1(a7.ghp()))
a6.addEventListener("pointerlockchange",A.a1(a7.ghn()))
$.aK.b=a7
$.m3.b=new A.ex(A.j([],t.oX),t.lv)
a7=$.a4.j()
a4=A.a(A.b(b9.window).innerWidth)>0?A.a(A.b(b9.window).innerWidth):800
a7.width=a4
a4=$.a4.j()
a6=A.a(A.b(b9.window).innerHeight)>0?A.a(A.b(b9.window).innerHeight):600
a4.height=a6
A.bO("renderer")
a6=$.cR=A.oe(n,A.a($.a4.j().width),A.a($.a4.j().height))
a4=A.kc().gbq().h(0,"render")
a7=A.kc().gbq().h(0,"render")
a8=A.kc().gbq().h(0,"render")
a6.eb=a4==="legacy"
a6.ec=a7==="legacy"
a6.ed=a8==="legacy"
A.bO("text")
a8=$.fN()
s=7
return A.ad(a8.aO(),$async$jK)
case 7:m=a8.j8()
l=A.ov(m)
if(!(l instanceof A.fc)){k=t.cq.a(l).a
j=k.b
throw A.d("Failed to build visitors: "+j)}$.ac.b=l.a
$.fA.b=A.nf(m)
j=A.r(a5,t.h)
for(a4=t.j,a9=0;a9<5;++a9){i=B.j[a9]
a6=A.x(i)
a7=a8.c
a7===$&&A.f()
b0=a7.h(0,a6)
a6=a4.b(b0)?A.aU(b0,!0,a5):B.i
J.bA(j,i,a6)}h=A.ow(j)
$.ko.b=new A.h2(B.ax)
g=$.ko.j().iS(new A.jL(h))
if(g.a==null){j=B.S.a2(2147483647)
if(!isFinite(480))A.B(A.b2(480,"daySeconds","must be finite and > 0"))
b1=new A.ew(1,480)
b1.b=10
b2=A.lf(h)
j=A.l7(42,1+j,A.l9(42),b1,b2,A.l3(6,16,b2,null,6,B.bm,b1),new A.er(0,0,0,!1))}else{j=g.a
j.toString
j=A.l8(j,h)}$.N.b=j
if(g.b!=null){j=g.b
j.toString
A.cS(j)}j=$.ac.j()
a6=A.qk($.N.j().b,A.ql(m.b))
j.sfF(A.ll(a6,A.W(a6).c))
A.bO("house")
$.a0.b=$.N.j().c
$.e7.b=$.N.j().d
a6=new A.i(5.5,1.65,3.5)
$.kI=$.kB=$.kG=a6
f=a6.U(0,new A.i(0,1.3499999999999999,0))
$.e6.b=new A.ei(f,J.kT(f,new A.i(0,1.2000000000000002,0)))
$.cM.b=new A.hi()
$.b7.b=A.ls()
$.aL="hall"
a6=g.a
e=A.o2(a6==null?null:a6.c.h(0,"player"))
if(e!=null&&e.iA($.a0.j())){j=e.b
$.kI=$.kB=$.kG=j
$.by=e.c
$.cT=e.d
$.aL=e.a
d=j.U(0,new A.i(0,1.3499999999999999,0))
j=$.e6.j()
j.shX(d)
j.b=J.kT(d,new A.i(0,1.2000000000000002,0))
j=$.e6.j()
a6=$.a0.j()
a7=e.e
a8=e.f
j.iY($.aL,$.d_(),a6,a8,a7)
A.cS("restored position")}j=$.N.j().e
a6=$.e7.j()
$.N.j()
$.fC.b=new A.hF(j,a6)
a6=A.b(b9.document)
j=$.N.j().e
a7=$.e7.j()
a8=$.fC.j()
b3=A.b(a6.createElement("div"))
a8=new A.hL(j,a7,a8,a6,b3)
a8.aU(a6)
A.b(b3.appendChild(A.G(a6,"div","journal-title","The Journal")))
b4=A.G(a6,"div","journal-pages",null)
a7=A.G(a6,"div","page page-left",null)
a8.y!==$&&A.p()
a8.y=a7
j=A.G(a6,"div","page page-right",null)
a8.z!==$&&A.p()
a8.z=j
A.b(b4.appendChild(a7))
A.b(b4.appendChild(j))
A.b(b3.appendChild(b4))
A.b(b3.appendChild(a8.h_()))
b5=A.G(a6,"div","tape-roll",null)
A.b(b5.style).setProperty("width","8rem")
j=A.G(a6,"div","tape-fill",null)
a8.as!==$&&A.p()
a8.as=j
A.b(b5.appendChild(j))
A.b(b3.appendChild(b5))
b6=A.G(a6,"div","consult",null)
A.b(b6.appendChild(A.G(a6,"div","consult-label","Cite an entry")))
j=A.G(a6,"div","entry-picker",null)
a8.at!==$&&A.p()
a8.at=j
a7=A.G(a6,"div","consult-result",null)
a8.ax!==$&&A.p()
a8.ax=a7
A.b(b6.appendChild(j))
A.b(b6.appendChild(a7))
A.b(b3.appendChild(b6))
b7=A.e(a6.documentElement)
if(t.m.b(b7)){A.b(b7.style).setProperty("--shake-max-deg","3deg")
A.b(b7.style).setProperty("--shake-max-px","2px")}$.cN.b=a8
$.cN.j().sbo(new A.jM())
j=A.b(b9.document)
a6=A.G(j,"div","prompt",null)
A.b(a6.style).setProperty("transition-duration","0.3s")
A.b(A.e(j.body).appendChild(a6))
$.m4.b=new A.i7(a6)
a6=A.b(b9.document)
j=A.G(a6,"div","broadcast",null)
A.b(A.e(a6.body).appendChild(j))
$.m2.b=new A.h1(j)
j=A.b(b9.document)
a6=A.G(j,"div","ambient-notice",null)
A.b(A.e(j.body).appendChild(a6))
$.km.b=new A.fW(a6)
a6=A.nv(A.b(b9.document))
a6.siK(A.qB())
a6.siM(A.qD())
a6.siL(A.qC())
$.ab.b=a6
a6=g.a
c=A.ot(a6==null?null:a6.c.h(0,"visitors"))
if(c!=null&&$.ac.j().iX(c))A.pS()
j=$.fA.j()
a6=g.a
j.iZ(a6==null?null:a6.c.h(0,"ambient"))
j=g.a
b=j==null?null:j.c.h(0,"unverifiables")
if(a4.b(b))for(j=J.J(b);j.l();){a=j.gq()
if(A.ar(a))$.jy.m(0,a)}j=A.og(A.b(b9.document))
j.siO(new A.jN())
j.sbo(new A.jP())
$.fD.b=j
j=A.nM(A.b(b9.document))
j.sbo(new A.jQ())
$.fB.b=j
j=A.nE(A.b(b9.document))
j.sbo(new A.jR())
j.siN(new A.jS())
$.kn.b=j
j=g.a
a0=A.nG(j==null?null:j.c.h(0,"ending"))
if(a0!=null)A.mq(a0)
a1=$.cR
if(a1!=null){A.bO("world")
j=$.a0.j()
a4=a1
a5=new A.ie(j,a4,A.r(a5,t.I))
a5.fS(j,a4)
$.kt=a5}j=B.b.B(A.x(A.b(A.b(b9.window).location).search),"shaders=live")
$.mz=j
if(j){j=$.cR
if(j!=null)j.aA()}A.ms()
A.b(b9.window).addEventListener("resize",A.a1(new A.jT()))
A.b(b9.window).addEventListener("keydown",A.a1(new A.jU()))
A.b(b9.window).addEventListener("keydown",A.a1(new A.jV()))
A.b(b9.window).addEventListener("click",A.a1(new A.jW()))
$.a4.j().addEventListener("click",A.a1(new A.jO()))
A.eb()
A.bO("raf")
A.a(A.b(b9.window).requestAnimationFrame(A.a1(A.mH())))
p=2
s=6
break
case 4:p=3
c1=o.pop()
a2=A.a5(c1)
a3=A.bz(c1)
A.jt(a2,a3)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$jK,r)},
pv(){var s=v.G
A.b(s.window).addEventListener("error",A.a1(new A.jp()))
A.b(s.window).addEventListener("unhandledrejection",A.a1(new A.jq()))},
bO(a){if($.mb===a)return
$.mb=a
$.a4.j().setAttribute("data-boot-phase",a)},
kE(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.b7.j().a!==B.l){A.cS("save unavailable during rupture")
return}try{r=$.ko.j()
q=$.N.j()
p=t.N
o=t.z
s=A.r(p,o)
n=$.aL
m=$.d_()
l=$.by
k=$.cT
j=$.e6.j().d
j=j==null?null:j.a.a
i=$.e6.j().d
J.bA(s,"player",new A.eV(n,m,l,k,j,i==null?null:i.b).A())
n=$.ac.j()
m=A.lu(n.b,p)
l=A.lu(n.c,t.g)
n=n.e
J.bA(s,"visitors",new A.fd(m,l,n==null?null:new A.ed(n.a,n.b,n.d,n.f,n.e,n.r)).A())
n=$.fA.j().b
n=A.av(n,A.m(n).c)
B.a.a1(n)
J.bA(s,"ambient",n)
n=A.av($.jy,A.m($.jy).c)
B.a.a1(n)
J.bA(s,"unverifiables",n)
n=$.ku
if(n!=null)J.bA(s,"ending",A.M(["kind",n.a.b],p,p))
s=t.a.a(s)
n=q.a
m=q.b
l=A.nN(q.c).A()
k=q.d
r.ja(A.lt(s,A.M(["houseSeed",n,"runSeed",m,"house",l,"time",A.M(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.A(),"journal",q.e.A(),"difficulty",q.r.A()],p,o),2))
A.cS(a)}catch(h){A.cS("save failed")}},
cS(a){var s=v.G,r=A.e(A.b(s.document).getElementById("save-status"))
if(r==null)return
r.textContent=a
r.className="visible"
A.a(A.b(s.window).setTimeout(A.a1(new A.jw(r)),2400))},
jt(a,b){var s,r,q,p
A.bO("error")
s=A.w(a)
r=A.qK(s,"\n"," ")
s=$.kv
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.e(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.w(a):A.w(a)+"\n"+b.p(0)
$.a4.j().setAttribute("data-boot-error",p)
A.b(s.console).error(p)},
m6(){if($.kp)return
$.kp=!0
var s=$.e8
if(s!=null)s.fd()
B.a.m($.bN,"arm")},
eb(){var s=0,r=A.bm(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$eb=A.bn(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=null
q=3
s=6
return A.ad(A.bb(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$eb)
case 6:o=b
i=A
s=7
return A.ad(A.bb(A.b(o.json()),t.X),$async$eb)
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
if(l!=null&&typeof l==="string"){m=A.e(A.b(v.G.document).getElementById("credits"))
if(m!=null)m.textContent=A.x(l)}s=8
return A.ad(A.l6(A.j([A.js(k),A.jo(k)],t.iw),t.H),$async$eb)
case 8:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$eb,r)},
ks(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.J(t.h.b(s)?s:new A.b3(s,A.W(s).i("b3<1,k>")))
while(s.l()){r=s.gq()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.x(q))}},
jo(a){var s=0,r=A.bm(t.H),q,p,o,n,m
var $async$jo=A.bn(function(b,c){if(b===1)return A.bj(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.r(n,n)
n=a==null
A.ks(A.e(n?null:a.sfx),m,"")
A.ks(A.e(n?null:a.ir),m,"ir-")
q=A.e(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.x(p))
s=2
return A.ad(A.fZ(m,$.a0.j()),$async$jo)
case 2:o=c
$.e8=o
if($.kp)o.fd()
return A.bk(null,r)}})
return A.bl($async$jo,r)},
js(a){var s=0,r=A.bm(t.H),q,p
var $async$js=A.bn(function(b,c){if(b===1)return A.bj(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.r(q,q)
A.ks(A.e(a==null?null:a.tex),p,"")
q=$.cR
q=q==null?null:q.aP(p)
s=2
return A.ad(q instanceof A.U?q:A.oB(q,t.H),$async$js)
case 2:return A.bk(null,r)}})
return A.bl($async$js,r)},
ms(){var s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.a(A.b(h.window).innerWidth),f=A.a(A.b(h.window).innerHeight)
h=$.a4.j()
s=g>0?g:800
h.width=s
s=$.a4.j()
h=f>0?f:600
s.height=h
h=$.cR
if(h!=null){s=A.a($.a4.j().width)
r=A.a($.a4.j().height)
h.am=s
h.an=r
h.cl=r/s
q=h.bb
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
k=h.bd
j=h.be
i=h.bf
if(m!=null)h.a8.a9(m,s,r)
if(l!=null)h.a8.a9(l,s,r)
if(k!=null)h.a8.a9(k,h.gaX(),h.gaW())
if(j!=null)h.a8.a9(j,h.gaX(),h.gaW())
if(i!=null)h.a8.a9(i,s,r)}},
pP(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
A.fE(a5)
try{s=a5
if(!$.mh){$.kz=s
$.mh=!0}i=s
h=$.kz
if(typeof i!=="number")return i.U()
r=(i-h)/1000
$.kz=s
i=r
if(typeof i!=="number")return i.bu()
if(i<0)r=0
i=r
if(typeof i!=="number")return i.S()
if(i>0.25)r=0.25
A.q4(r)
if(!$.kA){i=$.jk
h=r
if(typeof h!=="number")return A.fJ(h)
h=$.jk=i+h
q=0
i=t.mv
for(;;){if(h>=0.008333333333333333){g=q
if(typeof g!=="number")return g.bu()
g=g<10}else g=!1
if(!g)break
$.kB=$.d_()
h=$.N.b
if(h===$.N)A.B(A.au(""))
h.hT(0.008333333333333333)
A.q7()
h=$.ac.b
if(h===$.ac)A.B(A.au(""))
g=$.N.b
if(g===$.N)A.B(A.au(""))
h.f=g.r.c>=0.5
h=h.d
f=A.aU(h,!1,i)
f.$flags=3
e=f
B.a.I(h)
if(e.length!==0){h=$.N.b
if(h===$.N)A.B(A.au(""))
h.iU(e)}A.q3()
A.q6()
A.q5()
A.q2(0.008333333333333333)
h=$.cM.b
if(h===$.cM)A.B(A.au(""))
if(h.a!=null)if((h.b-=0.008333333333333333)<=0)h.a=null
h=$.b7.b
if(h===$.b7)A.B(A.au(""))
p=h.a!==B.l
g=$.a0.b
if(g===$.a0)A.B(A.au(""))
h.hU(0.008333333333333333,g)
if(p){h=$.b7.b
if(h===$.b7)A.B(A.au(""))
h=h.e}else h=!1
if(h)A.mt(!0)
h=$.jk-0.008333333333333333
$.jk=h
g=q
if(typeof g!=="number")return g.a_()
q=g+1}o=B.d.W(h/0.008333333333333333,0,1)
$.kI=A.lF($.n3(),$.d_(),o)
n=$.e8
if(n!=null){for(i=$.bN.length,d=0;d<$.bN.length;$.bN.length===i||(0,A.y)($.bN),++d){m=$.bN[d]
A.pn(n,m)}B.a.I($.bN)}}l=$.cR
if(l!=null){$.bi.j().f4($.kS(),$.by,$.cT)
i=$.aB===$.cN.j()?1:0
l.bc=i
i=l
h=r
g=$.b7.j()
c=B.d.W($.e7.j().gbA(),0,1)
i.eh=new A.i(Math.cos((c-0.5)*3.141592653589793),Math.sin(3.141592653589793*c),-0.5).ga3().ga3()
i.sf3(A.qM($.e7.j().gbA()))
b=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.e7.j().gbA()))
i.el=b<0?0:b
b=$.bi.j()
a=b.r+=h
a0=0.025*b.f
b.a=b.a.a_(0,b.d.a0(0,(A.k_(a*0.28,1309)*2-1)*a0)).a_(0,b.c.a0(0,(A.k_(b.r*0.28,2839)*2-1)*a0))
b=$.bi.j()
i.em=b.a
i.cb=b.b
i.cc=b.c
i.cd=b.d
a1=A.pu(0,0.25,0.11)
i.ce=a1.a
i.cf=a1.b
i.cg=a1.c
b=i.bg
a2=b==null?i.aI:b
if(a2==null)a2=i.al
b=i.a8
b.ad(a2)
i.a4.depthMask(!0)
b.i3(a2,i.ce/255,i.cf/255,i.cg/255)
i.c6=i.bh=0
i.c8=!1
i.aK=0
a3=$.kt
if(a3!=null)a3.ic($.aL,$.kS())
i.it(h,g)
$.m3.j().cJ(B.as,h)}A.bO("running")
i=$.aK.j()
i.e=i.d=0
i.c.I(0)
A.a(A.b(v.G.window).requestAnimationFrame(A.a1(A.mH())))}catch(a4){k=A.a5(a4)
j=A.bz(a4)
A.jt(k,j)}},
pn(a,b){switch(b){case"arm":a.iP("confirm")
break
case"ambient-winnow":a.cD("winnow",0.28)
break
case"ambient-gate":a.cD("gate",0.22)
break}},
q4(a){var s=$.kv
if(s==null)return
s.textContent=""+B.d.ag(a>0?1/a:0)+" fps"},
q2(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.mw||$.aB!=null||$.ab.j().z){$.fM().a=new A.i(0,0,0)
return}s=$.aK.j().b
r=s.B(0,"KeyA")?-1:0
if(s.B(0,"KeyD"))++r
q=s.B(0,"KeyW")?1:0
p=new A.i(r,0,s.B(0,"KeyS")?q-1:q)
o=p.gn(0)>1?p.ga3():p
n=$.aK.j().d
m=$.aK.j().e
$.by=$.by+n*0.0028
s=$.cT-m*0.0028
$.cT=s
$.cT=B.d.W(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.i(s*Math.cos($.by)+l*Math.sin($.by),0,l*Math.cos($.by)-s*Math.sin($.by)).ga3().a0(0,2)
s=$.fM()
if(!isFinite(a1)||a1<0)A.B(A.b2(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.B(A.b2(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.a_(0,k.U(0,i).a0(0,1-l))
s.a=l
h=$.e6.j().iI($.a0.j(),$.aL,$.d_(),l.a0(0,a1))
$.kG=h.a
if($.b7.j().a!==B.J&&$.b7.j().a!==B.t)$.aL=h.b
$.bi.j().f4($.d_(),$.by,$.cT)
s=$.bi.j()
l=$.a0.j()
g=A.qH(s,$.aL,l)
$.m4.j().ft(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.kQ($.bi.j(),$.a0.j(),$.aL)
break
case 1:e=A.mL($.bi.j(),$.a0.j(),$.aL)
break
case 2:d=A.mM($.bi.j(),$.a0.j(),$.aL)
break
case 3:break}s=$.m2.j()
c=$.fN().fk($.N.j().gah().a)
l=c==null?a0:c.h(0,"status")
s.cJ(l,$.aL==="living-room")
if($.aK.j().c.aS(0,"KeyE")){s=$.N.j().gah()
l=e==null
i=l?a0:e.a
b=B.a.a7($.ac.j().dF(21),$.ac.j().giB())
if(s.a===21&&i==="front-door"&&b){s=$.b7.j()
$.a0.j()
s.fG(B.aw,A.ai(s.c,t.N))
B.a.m($.bN,"collapse")
A.cS("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.N.j().fD(1,1)){f.d=!0
s=$.cM.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ax){e.at=!e.at
s=$.e8
if(s!=null)s.bT()}else if(d!=null)if(d.w){s=$.N.j()
if(s.f.by(1))d.w=!1}else d.w=!0}s=$.cM.j()
if(s.a!=null&&s.b>0){a=$.cM.j().a
if(a!=null&&A.kQ($.bi.j(),$.a0.j(),$.aL)!==a){s=$.cM.j()
s.a=null
s.b=0}}},
q7(){var s,r,q,p,o,n,m,l,k,j=null
if($.ab.j().z||$.aB!=null||$.ac.j().e!=null)return
s=$.N.j().gah()
for(r=$.ac.j().dF(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.y)(r),++o){n=r[o]
m=$.ac.b
if(m===$.ac)A.B(A.au(""))
if(m.c.B(0,n)||p<n.c)continue
r=$.ac.b
if(r===$.ac)A.B(A.au(""))
l=r.hY(n)
if(!(l instanceof A.f9))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.c(r,q)
k=r[q].b}else k=j
if(k==null)return
A.ld(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.fM().a=new A.i(0,0,0)
r=$.ab.b
if(r===$.ab)A.B(A.au(""))
r.cQ(n.a,k)
return}},
pS(){var s=$.ac.j().e,r=s==null,q=r?null:s.gb9()
if(r||q==null)return
$.ab.j().cQ(s.a.a,q)
if(s.d!==B.o){$.ab.j().bv(q)
A.kF()}A.cS("restored visitor")},
q3(){var s,r,q,p,o=$.N.j().gah(),n=$.fA.j().ig(o.a,o.b)
if(n.length===0)return
s=B.a.gaw(n)
$.fA.j().b.m(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.km.j().cP(q,s.e)
p=A.q9(r)
if(p!=null)B.a.m($.bN,"ambient-"+p)},
q6(){var s,r,q,p,o=$.N.j().gah()
if(o.b<20)return
s=o.a
if(!$.jy.m(0,s))return
r=$.fN().f
r===$&&A.f()
q=r.h(0,B.c.p(s))
r=t.j.b(q)?A.aU(q,!0,t.N):B.i
p=A.qG(r,$.N.j().b,s)
if(p!=null)$.km.j().cP("noticed",p)},
mt(a){var s,r,q,p,o
if($.ku!=null)return
s=$.N.j().gah()
r=$.N.j().r.c
q=$.N.j().e.b
p=A.m(q).i("aG<2>")
o=A.nF(new A.he(s.a,1-r,new A.I(new A.aG(q,p),p.i("q(l.E)").a(new A.ju()),p.i("I<l.E>")).gn(0),$.N.j().r.d,a))
if(o==null)return
A.mq(o)
A.kE("ending recorded")},
mq(a){var s,r,q
$.ku=a
$.mw=!0
$.fM().a=new A.i(0,0,0)
$.aB=$.kn.j()
s=$.kn.j()
r=$.fN().w
r===$&&A.f()
q=r.h(0,a.a.b)
s.fv(a,t.j.b(q)?A.aU(q,!0,t.N):B.i)},
pi(a){var s,r,q,p,o
A:{if("open"===a){s=B.w
break A}if("chain"===a){s=B.T
break A}if("through-door"===a){s=B.U
break A}if("letterbox"===a){s=B.V
break A}s=B.p
break A}r=$.ac.j().i1(s)
if(s===B.w){q=$.a0.j().f.h(0,"front-door")
if(q!=null){q.at=!0
p=$.e8
if(p!=null)p.bT()}}if(!(r instanceof A.f8)||s===B.p){$.ab.j().bi()
$.aK.j().af($.a4.j())
return}o=r.a.gb9()
if(o==null){A.kr()
$.ab.j().bi()
$.aK.j().af($.a4.j())
return}$.ab.j().bv(o)
A.kF()},
pk(){var s,r=$.ac.j().hV()
if(!(r instanceof A.dA)||r.b){A.kr()
$.ab.j().bi()
$.aK.j().af($.a4.j())
return}s=r.a.gb9()
if(s==null){A.kr()
$.ab.j().bi()
$.aK.j().af($.a4.j())
return}$.ab.j().bv(s)
A.kF()},
kF(){var s,r,q,p,o=$.ab.j(),n=A.b(v.G.document),m=A.j([],t.fR)
for(s=$.fC.j().cN(),r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q){p=s[q]
m.push(new A.dR(p.a,B.a.gG(p.c).p(0)))}o.fu(n,m)},
pj(a){var s,r,q,p=$.ac.j().i2(a,!0,$.fC.j())
if(p==null)return
s=$.fC.j().i8(p,B.bb)
r=$.ab.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.f()
r.textContent=q},
kr(){var s,r=$.a0.j().f.h(0,"front-door")
if(r!=null&&r.at){r.at=!1
s=$.e8
if(s!=null)s.bT()}},
q5(){var s,r,q,p,o,n,m,l,k
for(s=$.a0.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.b7.b
if(k===$.b7)A.B(A.au(""))
if(B.a.B(k.d,n+m)){l.d=!1
continue}}}},
jL:function jL(a){this.a=a},
jM:function jM(){},
jN:function jN(){},
jP:function jP(){},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
jT:function jT(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
jO:function jO(){},
jp:function jp(){},
jq:function jq(){},
jw:function jw(a){this.a=a},
ju:function ju(){},
ld(a,b,c,d,e,f){var s=a[b]()
return s},
le(a,b,c){var s=null
return c.a(A.ld(a,b,s,s,s,s))},
nt(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
ns(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
mG(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
k_(a,b){var s=B.d.cw(a),r=A.mG(s,b),q=A.mG(s+1,b),p=B.d.W(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
q9(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
qi(a){var s,r,q,p,o,n,m,l=B.E.dJ(a,null),k=t.f
if(!k.b(l))throw A.d(B.aZ)
s=t.N
r=t.z
q=A.ao(l,s,r)
p=A.r(s,t.a)
for(o=0;o<11;++o){n=B.bj[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.r(s,r))
else if(k.b(m))p.k(0,n,A.ao(m,s,r))
else throw A.d(A.Z('text.json section "'+n+'" must be an object',null,null))}return p},
qG(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbx(a)
s=new A.cE()
s.bB((b^274953^c)>>>0)
r=s.a2(a.length)
if(!(r>=0&&r<a.length))return A.c(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.k3.prototype={}
J.eB.prototype={
R(a,b){return a===b},
gC(a){return A.dr(a)},
p(a){return"Instance of '"+A.eW(a)+"'"},
gF(a){return A.bo(A.kx(this))}}
J.eD.prototype={
p(a){return String(a)},
gC(a){return a?519018:218159},
gF(a){return A.bo(t.y)},
$iH:1,
$iq:1}
J.db.prototype={
R(a,b){return null==b},
p(a){return"null"},
gC(a){return 0},
$iH:1,
$iP:1}
J.dc.prototype={$iF:1}
J.bE.prototype={
gC(a){return 0},
gF(a){return B.bM},
p(a){return String(a)}}
J.eU.prototype={}
J.c7.prototype={}
J.bq.prototype={
p(a){var s=a[$.mP()]
if(s==null)s=a[$.cZ()]
if(s==null)return this.fI(a)
return"JavaScript function for "+J.d0(s)},
$ibW:1}
J.cq.prototype={
gC(a){return 0},
p(a){return String(a)}}
J.cr.prototype={
gC(a){return 0},
p(a){return String(a)}}
J.o.prototype={
b6(a,b){return new A.b3(a,A.W(a).i("@<1>").v(b).i("b3<1,2>"))},
m(a,b){A.W(a).c.a(b)
a.$flags&1&&A.aO(a,29)
a.push(b)},
V(a,b){var s
A.W(a).i("l<1>").a(b)
a.$flags&1&&A.aO(a,"addAll",2)
if(Array.isArray(b)){this.fX(a,b)
return}for(s=J.J(b);s.l();)a.push(s.gq())},
fX(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.a6(a))
for(r=0;r<s;++r)a.push(b[r])},
I(a){a.$flags&1&&A.aO(a,"clear","clear")
a.length=0},
aQ(a,b,c){var s=A.W(a)
return new A.ax(a,s.v(c).i("1(2)").a(b),s.i("@<1>").v(c).i("ax<1,2>"))},
bl(a,b){var s,r=A.c1(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
eX(a,b,c,d){var s,r,q
d.a(b)
A.W(a).v(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.a6(a))}return r},
L(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
gaw(a){if(a.length>0)return a[0]
throw A.d(A.hH())},
gG(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.hH())},
gbx(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.d(A.hH())
throw A.d(A.nS())},
ak(a,b){var s,r
A.W(a).i("q(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.a6(a))}return!1},
a7(a,b){var s,r
A.W(a).i("q(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.a6(a))}return!0},
Z(a,b){var s,r,q,p,o,n=A.W(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.aO(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.pA()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.S()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.cX(b,2))
if(p>0)this.hy(a,p)},
a1(a){return this.Z(a,null)},
hy(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bw(a,b){var s,r,q,p
a.$flags&2&&A.aO(a,"shuffle")
s=a.length
while(s>1){r=b.a2(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
B(a,b){var s
for(s=0;s<a.length;++s)if(J.Y(a[s],b))return!0
return!1},
gD(a){return a.length===0},
gE(a){return a.length!==0},
p(a){return A.k2(a,"[","]")},
gt(a){return new J.bQ(a,a.length,A.W(a).i("bQ<1>"))},
gC(a){return A.dr(a)},
gn(a){return a.length},
sn(a,b){a.$flags&1&&A.aO(a,"set length","change the length of")
if(b<0)throw A.d(A.aj(b,0,null,"newLength",null))
if(b>a.length)A.W(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.jB(a,b))
return a[b]},
k(a,b,c){A.W(a).c.a(c)
a.$flags&2&&A.aO(a)
if(!(b>=0&&b<a.length))throw A.d(A.jB(a,b))
a[b]=c},
cM(a,b){return new A.b6(a,b.i("b6<0>"))},
gF(a){return A.bo(A.W(a))},
$it:1,
$il:1,
$iu:1}
J.eC.prototype={
j5(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.eW(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.hJ.prototype={}
J.bQ.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.y(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iO:1}
J.bY.prototype={
K(a,b){var s
A.fE(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbk(b)
if(this.gbk(a)===s)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk(a){return a===0?1/a<0:a<0},
aq(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.a9(""+a+".toInt()"))},
i0(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.a9(""+a+".ceil()"))},
cw(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.a9(""+a+".floor()"))},
ag(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.a9(""+a+".round()"))},
W(a,b,c){if(this.K(b,c)>0)throw A.d(A.kJ(b))
if(this.K(a,b)<0)return b
if(this.K(a,c)>0)return c
return a},
cI(a,b){var s
if(b>20)throw A.d(A.aj(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbk(a))return"-"+s
return s},
j3(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aj(b,2,36,"radix",null))
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
o-=r.length}return s+B.b.a0("0",o)},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ab(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
fK(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dt(a,b)},
H(a,b){return(a|0)===a?a/b|0:this.dt(a,b)},
dt(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.a9("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
bR(a,b){var s
if(a>0)s=this.b5(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hC(a,b){if(0>b)throw A.d(A.kJ(b))
return this.b5(a,b)},
b5(a,b){return b>31?0:a>>>b},
gF(a){return A.bo(t.o)},
$ib4:1,
$in:1,
$iam:1}
J.da.prototype={
gF(a){return A.bo(t.S)},
$iH:1,
$ih:1}
J.eE.prototype={
gF(a){return A.bo(t.i)},
$iH:1}
J.bZ.prototype={
aB(a,b,c,d){var s=A.ds(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
N(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aj(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.N(a,b,0)},
u(a,b,c){return a.substring(b,A.ds(b,c,a.length))},
aT(a,b){return this.u(a,b,null)},
a0(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.at)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bj(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aj(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
f1(a,b){return this.bj(a,b,0)},
B(a,b){return A.qJ(a,b,0)},
K(a,b){var s
A.x(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gC(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return A.bo(t.N)},
gn(a){return a.length},
$iH:1,
$ib4:1,
$ilm:1,
$ik:1}
A.bK.prototype={
gt(a){return new A.d1(J.J(this.gaj()),A.m(this).i("d1<1,2>"))},
gn(a){return J.aP(this.gaj())},
gD(a){return J.kV(this.gaj())},
gE(a){return J.n9(this.gaj())},
L(a,b){return A.m(this).y[1].a(J.fP(this.gaj(),b))},
p(a){return J.d0(this.gaj())}}
A.d1.prototype={
l(){return this.a.l()},
gq(){return this.$ti.y[1].a(this.a.gq())},
$iO:1}
A.bR.prototype={
gaj(){return this.a}}
A.dG.prototype={$it:1}
A.dF.prototype={
h(a,b){return this.$ti.y[1].a(J.as(this.a,b))},
k(a,b,c){var s=this.$ti
J.bA(this.a,b,s.c.a(s.y[1].a(c)))},
sn(a,b){J.nb(this.a,b)},
m(a,b){var s=this.$ti
J.fO(this.a,s.c.a(s.y[1].a(b)))},
Z(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.iS(this,b)
J.nc(this.a,s)},
$it:1,
$iu:1}
A.iS.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.b3.prototype={
b6(a,b){return new A.b3(this.a,this.$ti.i("@<1>").v(b).i("b3<1,2>"))},
gaj(){return this.a}}
A.c_.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.el.prototype={
gn(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.ik.prototype={}
A.t.prototype={}
A.ah.prototype={
gt(a){var s=this
return new A.c0(s,s.gn(s),A.m(s).i("c0<ah.E>"))},
gD(a){return this.gn(this)===0},
ak(a,b){var s,r,q=this
A.m(q).i("q(ah.E)").a(b)
s=q.gn(q)
for(r=0;r<s;++r){if(b.$1(q.L(0,r)))return!0
if(s!==q.gn(q))throw A.d(A.a6(q))}return!1},
bl(a,b){var s,r,q,p=this,o=p.gn(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.L(0,0))
if(o!==p.gn(p))throw A.d(A.a6(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.L(0,q))
if(o!==p.gn(p))throw A.d(A.a6(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.L(0,q))
if(o!==p.gn(p))throw A.d(A.a6(p))}return r.charCodeAt(0)==0?r:r}},
cL(a,b){return this.fH(0,A.m(this).i("q(ah.E)").a(b))},
aQ(a,b,c){var s=A.m(this)
return new A.ax(this,s.v(c).i("1(ah.E)").a(b),s.i("@<ah.E>").v(c).i("ax<1,2>"))},
j4(a){var s,r=this,q=A.k6(A.m(r).i("ah.E"))
for(s=0;s<r.gn(r);++s)q.m(0,r.L(0,s))
return q}}
A.dx.prototype={
gh7(){var s=J.aP(this.a),r=this.c
if(r==null||r>s)return s
return r},
ghG(){var s=J.aP(this.a),r=this.b
if(r>s)return s
return r},
gn(a){var s,r=J.aP(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
L(a,b){var s=this,r=s.ghG()+b
if(b<0||r>=s.gh7())throw A.d(A.hE(b,s.gn(0),s,"index"))
return J.fP(s.a,r)},
j2(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ba(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.lc(0,n):J.lb(0,n)}r=A.c1(s,m.L(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.L(n,o+q))
if(m.gn(n)<l)throw A.d(A.a6(p))}return r},
fe(a){return this.j2(0,!0)}}
A.c0.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.ba(q),o=p.gn(q)
if(r.b!==o)throw A.d(A.a6(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.L(q,s);++r.c
return!0},
$iO:1}
A.br.prototype={
gt(a){return new A.c2(J.J(this.a),this.b,A.m(this).i("c2<1,2>"))},
gn(a){return J.aP(this.a)},
gD(a){return J.kV(this.a)},
L(a,b){return this.b.$1(J.fP(this.a,b))}}
A.bU.prototype={$it:1}
A.c2.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gq())
return!0}s.a=null
return!1},
gq(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iO:1}
A.ax.prototype={
gn(a){return J.aP(this.a)},
L(a,b){return this.b.$1(J.fP(this.a,b))}}
A.I.prototype={
gt(a){return new A.aa(J.J(this.a),this.b,this.$ti.i("aa<1>"))}}
A.aa.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gq()))return!0
return!1},
gq(){return this.a.gq()},
$iO:1}
A.b6.prototype={
gt(a){return new A.dC(J.J(this.a),this.$ti.i("dC<1>"))}}
A.dC.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())},
$iO:1}
A.Q.prototype={
sn(a,b){throw A.d(A.a9("Cannot change the length of a fixed-length list"))},
m(a,b){A.aZ(a).i("Q.E").a(b)
throw A.d(A.a9("Cannot add to a fixed-length list"))}}
A.bf.prototype={
k(a,b,c){A.m(this).i("bf.E").a(c)
throw A.d(A.a9("Cannot modify an unmodifiable list"))},
sn(a,b){throw A.d(A.a9("Cannot change the length of an unmodifiable list"))},
m(a,b){A.m(this).i("bf.E").a(b)
throw A.d(A.a9("Cannot add to an unmodifiable list"))},
Z(a,b){A.m(this).i("h(bf.E,bf.E)?").a(b)
throw A.d(A.a9("Cannot modify an unmodifiable list"))}}
A.cC.prototype={}
A.e5.prototype={}
A.dR.prototype={$r:"+(1,2)",$s:1}
A.cI.prototype={$r:"+(1,2,3)",$s:2}
A.dS.prototype={$r:"+(1,2,3,4)",$s:3}
A.d2.prototype={}
A.cm.prototype={
gD(a){return this.gn(this)===0},
gE(a){return this.gn(this)!==0},
p(a){return A.k7(this)},
k(a,b,c){var s=A.m(this)
s.c.a(b)
s.y[1].a(c)
A.no()},
gM(){return new A.cJ(this.ij(),A.m(this).i("cJ<A<1,2>>"))},
ij(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gM(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gJ(),o=o.gt(o),n=A.m(s),m=n.y[1],n=n.i("A<1,2>")
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
this.Y(0,new A.h5(this,A.m(this).v(c).v(d).i("A<1,2>(3,4)").a(b),s))
return s},
$iD:1}
A.h5.prototype={
$2(a,b){var s=A.m(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.m(this.a).i("~(1,2)")}}
A.aQ.prototype={
gn(a){return this.b.length},
gdc(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
O(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.O(b))return null
return this.b[this.a[b]]},
Y(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gdc()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gJ(){return new A.ce(this.gdc(),this.$ti.i("ce<1>"))},
gaa(){return new A.ce(this.b,this.$ti.i("ce<2>"))}}
A.ce.prototype={
gn(a){return this.a.length},
gD(a){return 0===this.a.length},
gE(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.cf(s,s.length,this.$ti.i("cf<1>"))}}
A.cf.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iO:1}
A.d7.prototype={
aD(){var s=this,r=s.$map
if(r==null){r=new A.dd(s.$ti.i("dd<1,2>"))
A.mC(s.a,r)
s.$map=r}return r},
h(a,b){return this.aD().h(0,b)},
Y(a,b){this.$ti.i("~(1,2)").a(b)
this.aD().Y(0,b)},
gJ(){var s=this.aD()
return new A.V(s,A.m(s).i("V<1>"))},
gaa(){var s=this.aD()
return new A.aG(s,A.m(s).i("aG<2>"))},
gn(a){return this.aD().a}}
A.d3.prototype={
m(a,b){A.m(this).c.a(b)
A.np()}}
A.d4.prototype={
gn(a){return this.b},
gD(a){return this.b===0},
gE(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.cf(s,s.length,r.$ti.i("cf<1>"))},
B(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.dt.prototype={}
A.iy.prototype={
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
A.dn.prototype={
p(a){return"Null check operator used on a null value"}}
A.eF.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.f3.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.i4.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.d6.prototype={}
A.dU.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibe:1}
A.bB.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mO(r==null?"unknown":r)+"'"},
gF(a){var s=A.kL(this)
return A.bo(s==null?A.aZ(this):s)},
$ibW:1,
gjd(){return this},
$C:"$1",
$R:1,
$D:null}
A.ej.prototype={$C:"$0",$R:0}
A.ek.prototype={$C:"$2",$R:2}
A.f1.prototype={}
A.f_.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mO(s)+"'"}}
A.cl.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cl))return!1
return this.$_target===b.$_target&&this.a===b.a},
gC(a){return(A.fK(this.a)^A.dr(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eW(this.a)+"'")}}
A.eY.prototype={
p(a){return"RuntimeError: "+this.a}}
A.aT.prototype={
gn(a){return this.a},
gD(a){return this.a===0},
gE(a){return this.a!==0},
gJ(){return new A.V(this,A.m(this).i("V<1>"))},
gaa(){return new A.aG(this,A.m(this).i("aG<2>"))},
gM(){return new A.L(this,A.m(this).i("L<1,2>"))},
O(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.iw(a)},
iw(a){var s=this.d
if(s==null)return!1
return this.aN(s[this.aM(a)],a)>=0},
V(a,b){A.m(this).i("D<1,2>").a(b).Y(0,new A.hS(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ix(b)},
ix(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aM(a)]
r=this.aN(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.m(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.cS(s==null?q.b=q.bM():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.cS(r==null?q.c=q.bM():r,b,c)}else q.iz(b,c)},
iz(a,b){var s,r,q,p,o=this,n=A.m(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.bM()
r=o.aM(a)
q=s[r]
if(q==null)s[r]=[o.bC(a,b)]
else{p=o.aN(q,a)
if(p>=0)q[p].b=b
else q.push(o.bC(a,b))}},
iR(a,b){var s,r,q=this,p=A.m(q)
p.c.a(a)
p.i("2()").a(b)
if(q.O(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
aS(a,b){if((b&0x3fffffff)===b)return this.fV(this.c,b)
else return this.iy(b)},
iy(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.aM(a)
r=n[s]
q=o.aN(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.cU(p)
if(r.length===0)delete n[s]
return p.b},
Y(a,b){var s,r,q=this
A.m(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.a6(q))
s=s.c}},
cS(a,b,c){var s,r=A.m(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.bC(b,c)
else s.b=c},
fV(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.cU(s)
delete a[b]
return s.b},
cT(){this.r=this.r+1&1073741823},
bC(a,b){var s=this,r=A.m(s),q=new A.hY(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cT()
return q},
cU(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cT()},
aM(a){return J.aD(a)&1073741823},
aN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
p(a){return A.k7(this)},
bM(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ik5:1}
A.hS.prototype={
$2(a,b){var s=this.a,r=A.m(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.m(this.a).i("~(1,2)")}}
A.hY.prototype={}
A.V.prototype={
gn(a){return this.a.a},
gD(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bF(s,s.r,s.e,this.$ti.i("bF<1>"))}}
A.bF.prototype={
gq(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iO:1}
A.aG.prototype={
gn(a){return this.a.a},
gD(a){return this.a.a===0},
gt(a){var s=this.a
return new A.a_(s,s.r,s.e,this.$ti.i("a_<1>"))}}
A.a_.prototype={
gq(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iO:1}
A.L.prototype={
gn(a){return this.a.a},
gD(a){return this.a.a===0},
gt(a){var s=this.a
return new A.df(s,s.r,s.e,this.$ti.i("df<1,2>"))}}
A.df.prototype={
gq(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.A(s.a,s.b,r.$ti.i("A<1,2>"))
r.c=s.c
return!0}},
$iO:1}
A.dd.prototype={
aM(a){return A.qe(a)&1073741823},
aN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1}}
A.jG.prototype={
$1(a){return this.a(a)},
$S:5}
A.jH.prototype={
$2(a,b){return this.a(a,b)},
$S:39}
A.jI.prototype={
$1(a){return this.a(A.x(a))},
$S:10}
A.aX.prototype={
gF(a){return A.bo(this.d9())},
d9(){return A.qn(this.$r,this.b_())},
p(a){return this.dz(!1)},
dz(a){var s,r,q,p,o,n=this.hb(),m=this.b_(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.lo(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
hb(){var s,r=this.$s
while($.ja.length<=r)B.a.m($.ja,null)
s=$.ja[r]
if(s==null){s=this.h1()
B.a.k($.ja,r,s)}return s},
h1(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.hI(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ai(j,k)}}
A.cF.prototype={
b_(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.cF&&this.$s===b.$s&&J.Y(this.a,b.a)&&J.Y(this.b,b.b)},
gC(a){return A.cu(this.$s,this.a,this.b,B.f)}}
A.cG.prototype={
b_(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.cG&&s.$s===b.$s&&J.Y(s.a,b.a)&&J.Y(s.b,b.b)&&J.Y(s.c,b.c)},
gC(a){var s=this
return A.cu(s.$s,s.a,s.b,s.c)}}
A.cH.prototype={
b_(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.cH&&this.$s===b.$s&&A.oL(this.a,b.a)},
gC(a){return A.cu(this.$s,A.o1(this.a),B.f,B.f)}}
A.iT.prototype={
bP(){var s=this.b
if(s===this)throw A.d(new A.c_("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.au(""))
return s}}
A.bG.prototype={
gF(a){return B.bF},
dG(a,b,c){return new Float32Array(a,b,c)},
$iH:1,
$ibG:1}
A.ct.prototype={$ict:1}
A.dk.prototype={
gi_(a){if(((a.$flags|0)&2)!==0)return new A.jf(a.buffer)
else return a.buffer},
hh(a,b,c,d){var s=A.aj(b,0,c,d,null)
throw A.d(s)},
d2(a,b,c,d){if(b>>>0!==b||b>c)this.hh(a,b,c,d)}}
A.jf.prototype={
dG(a,b,c){var s=A.o_(this.a,b,c)
s.$flags=3
return s}}
A.eM.prototype={
gF(a){return B.bG},
$iH:1}
A.a8.prototype={
gn(a){return a.length},
dr(a,b,c,d,e){var s,r,q=a.length
this.d2(a,b,q,"start")
this.d2(a,c,q,"end")
if(b>c)throw A.d(A.aj(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.a7(e,null))
r=d.length
if(r-e<s)throw A.d(A.a3("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaF:1}
A.di.prototype={
h(a,b){A.bx(b,a,a.length)
return a[b]},
k(a,b,c){A.m7(c)
a.$flags&2&&A.aO(a)
A.bx(b,a,a.length)
a[b]=c},
fo(a,b,c,d){t.id.a(d)
a.$flags&2&&A.aO(a,5)
this.dr(a,b,c,d,0)
return},
$it:1,
$il:1,
$iu:1}
A.dj.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.aO(a)
A.bx(b,a,a.length)
a[b]=c},
fp(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.aO(a,5)
this.dr(a,b,c,d,e)
return},
$it:1,
$il:1,
$iu:1}
A.dh.prototype={
gF(a){return B.bH},
bz(a,b,c){return new Float32Array(a.subarray(b,A.ph(b,c,a.length)))},
$iH:1,
$ik1:1}
A.eN.prototype={
gF(a){return B.bI},
$iH:1}
A.eO.prototype={
gF(a){return B.bJ},
h(a,b){A.bx(b,a,a.length)
return a[b]},
$iH:1}
A.eP.prototype={
gF(a){return B.bK},
h(a,b){A.bx(b,a,a.length)
return a[b]},
$iH:1}
A.eQ.prototype={
gF(a){return B.bL},
h(a,b){A.bx(b,a,a.length)
return a[b]},
$iH:1}
A.eR.prototype={
gF(a){return B.bO},
h(a,b){A.bx(b,a,a.length)
return a[b]},
$iH:1}
A.eS.prototype={
gF(a){return B.bP},
h(a,b){A.bx(b,a,a.length)
return a[b]},
$iH:1}
A.dl.prototype={
gF(a){return B.bQ},
gn(a){return a.length},
h(a,b){A.bx(b,a,a.length)
return a[b]},
$iH:1}
A.dm.prototype={
gF(a){return B.bR},
gn(a){return a.length},
h(a,b){A.bx(b,a,a.length)
return a[b]},
$iH:1,
$ikb:1}
A.dN.prototype={}
A.dO.prototype={}
A.dP.prototype={}
A.dQ.prototype={}
A.b5.prototype={
i(a){return A.e_(v.typeUniverse,this,a)},
v(a){return A.lU(v.typeUniverse,this,a)}}
A.fl.prototype={}
A.fy.prototype={
p(a){return A.aM(this.a,null)}}
A.fk.prototype={
p(a){return this.a}}
A.dW.prototype={$ibu:1}
A.iP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
A.iO.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:21}
A.iQ.prototype={
$0(){this.a.$0()},
$S:12}
A.iR.prototype={
$0(){this.a.$0()},
$S:12}
A.jc.prototype={
fU(a,b){if(self.setTimeout!=null)self.setTimeout(A.cX(new A.jd(this,b),0),a)
else throw A.d(A.a9("`setTimeout()` not found."))}}
A.jd.prototype={
$0(){this.b.$0()},
$S:0}
A.ff.prototype={
bV(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cZ(a)
else{s=r.a
if(q.i("aS<1>").b(a))s.d1(a)
else s.aZ(a)}},
bW(a,b){var s=this.a
if(this.b)s.ar(new A.af(a,b))
else s.aV(new A.af(a,b))}}
A.jl.prototype={
$1(a){return this.a.$2(0,a)},
$S:6}
A.jm.prototype={
$2(a,b){this.a.$2(1,new A.d6(a,t.l.a(b)))},
$S:46}
A.jz.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:18}
A.dV.prototype={
gq(){var s=this.b
return s==null?this.$ti.c.a(s):s},
hz(a,b){var s,r,q
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
o.d=null}q=o.hz(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.lP
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
o.a=A.lP
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.a3("sync*"))}return!1},
je(a){var s,r,q=this
if(a instanceof A.cJ){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.J(a)
return 2}},
$iO:1}
A.cJ.prototype={
gt(a){return new A.dV(this.a(),this.$ti.i("dV<1>"))}}
A.af.prototype={
p(a){return A.w(this.a)},
$iK:1,
gaC(){return this.b}}
A.hl.prototype={
$2(a,b){var s,r,q=this
A.cO(a)
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
A.hk.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bA(r,k.b,a)
if(J.Y(s,0)){q=A.j([],j.i("o<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.y)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.fO(q,l)}k.c.aZ(q)}}else if(J.Y(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.ar(new A.af(q,o))}},
$S(){return this.d.i("P(0)")}}
A.fh.prototype={
bW(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.a3("Future already completed"))
s.aV(A.pz(a,b))},
dH(a){return this.bW(a,null)}}
A.dD.prototype={
bV(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.a3("Future already completed"))
s.cZ(r.i("1/").a(a))}}
A.cc.prototype={
iH(a){if((this.c&15)!==6)return!0
return this.b.b.cG(t.iW.a(this.d),a.a,t.y,t.K)},
iv(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.j0(q,m,a.b,o,n,t.l)
else p=l.cG(t.x.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.a5(s))){if((r.c&1)!==0)throw A.d(A.a7("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a7("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.U.prototype={
cH(a,b,c){var s,r,q=this.$ti
q.v(c).i("1/(2)").a(a)
s=$.S
if(s===B.k){if(!t.Q.b(b)&&!t.x.b(b))throw A.d(A.b2(b,"onError",u.c))}else{c.i("@<0/>").v(q.c).i("1(2)").a(a)
b=A.pR(b,s)}r=new A.U(s,c.i("U<0>"))
this.bD(new A.cc(r,3,a,b,q.i("@<1>").v(c).i("cc<1,2>")))
return r},
dw(a,b,c){var s,r=this.$ti
r.v(c).i("1/(2)").a(a)
s=new A.U($.S,c.i("U<0>"))
this.bD(new A.cc(s,19,a,b,r.i("@<1>").v(c).i("cc<1,2>")))
return s},
hB(a){this.a=this.a&1|16
this.c=a},
aY(a){this.a=a.a&30|this.a&1
this.c=a.c},
bD(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.bD(a)
return}r.aY(s)}A.fG(null,null,r.b,t.M.a(new A.iV(r,a)))}},
dh(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.dh(a)
return}m.aY(n)}l.a=m.b3(a)
A.fG(null,null,m.b,t.M.a(new A.iZ(l,m)))}},
b2(){var s=t.F.a(this.c)
this.c=null
return this.b3(s)},
b3(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aZ(a){var s,r=this
r.$ti.c.a(a)
s=r.b2()
r.a=8
r.c=a
A.cD(r,s)},
h0(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.b2()
q.aY(a)
A.cD(q,r)},
ar(a){var s=this.b2()
this.hB(a)
A.cD(this,s)},
cZ(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aS<1>").b(a)){this.d1(a)
return}this.fZ(a)},
fZ(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.fG(null,null,s.b,t.M.a(new A.iX(s,a)))},
d1(a){A.kd(this.$ti.i("aS<1>").a(a),this,!1)
return},
aV(a){this.a^=2
A.fG(null,null,this.b,t.M.a(new A.iW(this,a)))},
$iaS:1}
A.iV.prototype={
$0(){A.cD(this.a,this.b)},
$S:0}
A.iZ.prototype={
$0(){A.cD(this.b,this.a.a)},
$S:0}
A.iY.prototype={
$0(){A.kd(this.a.a,this.b,!0)},
$S:0}
A.iX.prototype={
$0(){this.a.aZ(this.b)},
$S:0}
A.iW.prototype={
$0(){this.a.ar(this.b)},
$S:0}
A.j1.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.j_(t.mY.a(q.d),t.z)}catch(p){s=A.a5(p)
r=A.bz(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.fY(q)
n=k.a
n.c=new A.af(q,o)
q=n}q.b=!0
return}if(j instanceof A.U&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.U){m=k.b.a
l=new A.U(m.b,m.$ti)
j.cH(new A.j2(l,m),new A.j3(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.j2.prototype={
$1(a){this.a.h0(this.b)},
$S:11}
A.j3.prototype={
$2(a,b){A.cO(a)
t.l.a(b)
this.a.ar(new A.af(a,b))},
$S:26}
A.j0.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cG(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.a5(l)
r=A.bz(l)
q=s
p=r
if(p==null)p=A.fY(q)
o=this.a
o.c=new A.af(q,p)
o.b=!0}},
$S:0}
A.j_.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.iH(s)&&p.a.e!=null){p.c=p.a.iv(s)
p.b=!1}}catch(o){r=A.a5(o)
q=A.bz(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fY(p)
m=l.b
m.c=new A.af(p,n)
p=m}p.b=!0}},
$S:0}
A.fg.prototype={}
A.fw.prototype={}
A.e4.prototype={$ilH:1}
A.ft.prototype={
j1(a){var s,r,q
t.M.a(a)
try{if(B.k===$.S){a.$0()
return}A.mu(null,null,this,a,t.H)}catch(q){s=A.a5(q)
r=A.bz(q)
A.kC(A.cO(s),t.l.a(r))}},
hZ(a){return new A.jb(this,t.M.a(a))},
j_(a,b){b.i("0()").a(a)
if($.S===B.k)return a.$0()
return A.mu(null,null,this,a,b)},
cG(a,b,c,d){c.i("@<0>").v(d).i("1(2)").a(a)
d.a(b)
if($.S===B.k)return a.$1(b)
return A.pU(null,null,this,a,b,c,d)},
j0(a,b,c,d,e,f){d.i("@<0>").v(e).v(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.S===B.k)return a.$2(b,c)
return A.pT(null,null,this,a,b,c,d,e,f)},
fc(a,b,c,d){return b.i("@<0>").v(c).v(d).i("1(2,3)").a(a)}}
A.jb.prototype={
$0(){return this.a.j1(this.b)},
$S:0}
A.jv.prototype={
$0(){A.nK(this.a,this.b)},
$S:0}
A.dI.prototype={
gn(a){return this.a},
gD(a){return this.a===0},
gE(a){return this.a!==0},
gJ(){return new A.cd(this,this.$ti.i("cd<1>"))},
gaa(){var s=this.$ti
return A.i1(new A.cd(this,s.i("cd<1>")),new A.j4(this),s.c,s.y[1])},
O(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.h4(a)},
h4(a){var s=this.d
if(s==null)return!1
return this.ai(this.d8(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.lJ(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.lJ(q,b)
return r}else return this.hc(b)},
hc(a){var s,r,q=this.d
if(q==null)return null
s=this.d8(q,a)
r=this.ai(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.cW(s==null?m.b=A.ke():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.cW(r==null?m.c=A.ke():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.ke()
p=A.fK(b)&1073741823
o=q[p]
if(o==null){A.kf(q,p,[b,c]);++m.a
m.e=null}else{n=m.ai(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
Y(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.d4()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.a6(m))}},
d4(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.c1(i.a,null,!1,t.z)
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
cW(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.kf(a,b,c)},
d8(a,b){return a[A.fK(b)&1073741823]}}
A.j4.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.dK.prototype={
ai(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cd.prototype={
gn(a){return this.a.a},
gD(a){return this.a.a===0},
gE(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.dJ(s,s.d4(),this.$ti.i("dJ<1>"))}}
A.dJ.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.a6(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iO:1}
A.bh.prototype={
gt(a){var s=this,r=new A.cg(s,s.r,A.m(s).i("cg<1>"))
r.c=s.e
return r},
gn(a){return this.a},
gD(a){return this.a===0},
gE(a){return this.a!==0},
B(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.O.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.O.a(r[b])!=null}else return this.h3(b)},
h3(a){var s=this.d
if(s==null)return!1
return this.ai(s[this.bH(a)],a)>=0},
m(a,b){var s,r,q=this
A.m(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cV(s==null?q.b=A.kg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cV(r==null?q.c=A.kg():r,b)}else return q.fW(b)},
fW(a){var s,r,q,p=this
A.m(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.kg()
r=p.bH(a)
q=s[r]
if(q==null)s[r]=[p.bN(a)]
else{if(p.ai(q,a)>=0)return!1
q.push(p.bN(a))}return!0},
aS(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.di(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.di(s.c,b)
else return s.hx(b)},
hx(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bH(a)
r=n[s]
q=o.ai(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dC(p)
return!0},
I(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bL()}},
cV(a,b){A.m(this).c.a(b)
if(t.O.a(a[b])!=null)return!1
a[b]=this.bN(b)
return!0},
di(a,b){var s
if(a==null)return!1
s=t.O.a(a[b])
if(s==null)return!1
this.dC(s)
delete a[b]
return!0},
bL(){this.r=this.r+1&1073741823},
bN(a){var s,r=this,q=new A.fp(A.m(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bL()
return q},
dC(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bL()},
bH(a){return J.aD(a)&1073741823},
ai(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
$ilk:1}
A.fp.prototype={}
A.cg.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.a6(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iO:1}
A.hZ.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:35}
A.z.prototype={
gt(a){return new A.c0(a,this.gn(a),A.aZ(a).i("c0<z.E>"))},
L(a,b){return this.h(a,b)},
gD(a){return this.gn(a)===0},
gE(a){return!this.gD(a)},
cM(a,b){return new A.b6(a,b.i("b6<0>"))},
aQ(a,b,c){var s=A.aZ(a)
return new A.ax(a,s.v(c).i("1(z.E)").a(b),s.i("@<z.E>").v(c).i("ax<1,2>"))},
m(a,b){var s
A.aZ(a).i("z.E").a(b)
s=this.gn(a)
this.sn(a,s+1)
this.k(a,s,b)},
b6(a,b){return new A.b3(a,A.aZ(a).i("@<z.E>").v(b).i("b3<1,2>"))},
Z(a,b){var s,r=A.aZ(a)
r.i("h(z.E,z.E)?").a(b)
s=b==null?A.qd():b
A.eZ(a,0,this.gn(a)-1,s,r.i("z.E"))},
is(a,b,c,d){var s
A.aZ(a).i("z.E?").a(d)
A.ds(b,c,this.gn(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.k2(a,"[","]")},
$it:1,
$il:1,
$iu:1}
A.E.prototype={
Y(a,b){var s,r,q,p=A.m(this)
p.i("~(E.K,E.V)").a(b)
for(s=this.gJ(),s=s.gt(s),p=p.i("E.V");s.l();){r=s.gq()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gM(){return this.gJ().aQ(0,new A.i_(this),A.m(this).i("A<E.K,E.V>"))},
az(a,b,c,d){var s,r,q,p,o,n=A.m(this)
n.v(c).v(d).i("A<1,2>(E.K,E.V)").a(b)
s=A.r(c,d)
for(r=this.gJ(),r=r.gt(r),n=n.i("E.V");r.l();){q=r.gq()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
hR(a){var s,r,q
A.m(this).i("l<A<E.K,E.V>>").a(a)
for(s=a.$ti,r=new A.c2(J.J(a.a),a.b,s.i("c2<1,2>")),s=s.y[1];r.l();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
gn(a){var s=this.gJ()
return s.gn(s)},
gD(a){var s=this.gJ()
return s.gD(s)},
gE(a){var s=this.gJ()
return s.gE(s)},
gaa(){return new A.dL(this,A.m(this).i("dL<E.K,E.V>"))},
p(a){return A.k7(this)},
$iD:1}
A.i_.prototype={
$1(a){var s=this.a,r=A.m(s)
r.i("E.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("E.V").a(s)
return new A.A(a,s,r.i("A<E.K,E.V>"))},
$S(){return A.m(this.a).i("A<E.K,E.V>(E.K)")}}
A.i0.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:13}
A.dL.prototype={
gn(a){var s=this.a
return s.gn(s)},
gD(a){var s=this.a
return s.gD(s)},
gE(a){var s=this.a
return s.gE(s)},
gt(a){var s=this.a,r=s.gJ()
return new A.dM(r.gt(r),s,this.$ti.i("dM<1,2>"))}}
A.dM.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.h(0,r.gq())
return!0}s.c=null
return!1},
gq(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iO:1}
A.e0.prototype={
k(a,b,c){var s=A.m(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.a9("Cannot modify unmodifiable map"))}}
A.cs.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.m(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
Y(a,b){this.a.Y(0,A.m(this).i("~(1,2)").a(b))},
gD(a){var s=this.a
return s.gD(s)},
gE(a){var s=this.a
return s.gE(s)},
gn(a){var s=this.a
return s.gn(s)},
gJ(){return this.a.gJ()},
p(a){return this.a.p(0)},
gaa(){return this.a.gaa()},
gM(){return this.a.gM()},
az(a,b,c,d){return this.a.az(0,A.m(this).v(c).v(d).i("A<1,2>(3,4)").a(b),c,d)},
$iD:1}
A.bI.prototype={}
A.bs.prototype={
gD(a){return this.gn(this)===0},
gE(a){return this.gn(this)!==0},
V(a,b){var s
for(s=J.J(A.m(this).i("l<1>").a(b));s.l();)this.m(0,s.gq())},
p(a){return A.k2(this,"{","}")},
a7(a,b){var s
A.m(this).i("q(1)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gq()))return!1
return!0},
L(a,b){var s,r
A.eX(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gq();--r}throw A.d(A.hE(b,b-r,this,"index"))},
$it:1,
$il:1,
$icy:1}
A.dT.prototype={}
A.fz.prototype={
m(a,b){this.$ti.c.a(b)
return A.oW()}}
A.dy.prototype={
B(a,b){return this.a.B(0,b)},
gn(a){return this.a.a},
gt(a){var s=this.a
return A.oE(s,s.r,A.m(s).c)}}
A.cK.prototype={}
A.e1.prototype={}
A.fn.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ht(b):s}},
gn(a){return this.b==null?this.c.a:this.au().length},
gD(a){return this.gn(0)===0},
gE(a){return this.gn(0)>0},
gJ(){if(this.b==null){var s=this.c
return new A.V(s,A.m(s).i("V<1>"))}return new A.fo(this)},
gaa(){var s,r=this
if(r.b==null){s=r.c
return new A.aG(s,A.m(s).i("aG<2>"))}return A.i1(r.au(),new A.j6(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.x(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.O(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.hK().k(0,b,c)},
O(a){if(this.b==null)return this.c.O(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
Y(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.Y(0,b)
s=o.au()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.jn(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.a6(o))}},
au(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
hK(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.r(t.N,t.z)
r=n.au()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.m(r,"")
else B.a.I(r)
n.a=n.b=null
return n.c=s},
ht(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.jn(this.a[a])
return this.b[a]=s}}
A.j6.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:10}
A.fo.prototype={
gn(a){return this.a.gn(0)},
L(a,b){var s=this.a
if(s.b==null)s=s.gJ().L(0,b)
else{s=s.au()
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gJ()
s=s.gt(s)}else{s=s.au()
s=new J.bQ(s,s.length,A.W(s).i("bQ<1>"))}return s}}
A.ji.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:14}
A.jh.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:14}
A.eh.prototype={
iJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.ds(a4,a5,a2)
s=$.n_()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.c(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.c(a3,k)
h=A.jF(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.c(a3,g)
f=A.jF(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.al("")
g=o}else g=o
g.a+=B.b.u(a3,p,q)
c=A.R(j)
g.a+=c
p=k
continue}}throw A.d(A.Z("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.u(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.kX(a3,m,a5,n,l,r)
else{b=B.c.ab(r-1,4)+1
if(b===1)throw A.d(A.Z(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aB(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.kX(a3,m,a5,n,l,a)
else{b=B.c.ab(a,4)
if(b===1)throw A.d(A.Z(a1,a3,a5))
if(b>1)a3=B.b.aB(a3,a5,a5,b===2?"==":"=")}return a3}}
A.h0.prototype={}
A.bS.prototype={}
A.ep.prototype={}
A.et.prototype={}
A.de.prototype={
p(a){var s=A.eu(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.eH.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.eG.prototype={
dJ(a,b){var s=A.pO(a,this.gia().a)
return s},
ih(a,b){var s=A.oD(a,this.gii().b,null)
return s},
gii(){return B.bg},
gia(){return B.bf}}
A.hU.prototype={}
A.hT.prototype={}
A.j8.prototype={
fi(a){var s,r,q,p,o,n,m=a.length
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
bF(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.eH(a,null))}B.a.m(s,a)},
br(a){var s,r,q,p,o=this
if(o.fh(a))return
o.bF(a)
try{s=o.b.$1(a)
if(!o.fh(s)){q=A.lg(a,null,o.gdg())
throw A.d(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.a5(p)
q=A.lg(a,r,o.gdg())
throw A.d(q)}},
fh(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.fi(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.bF(a)
q.jb(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.bF(a)
r=q.jc(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
jb(a){var s,r,q=this.c
q.a+="["
s=J.ba(a)
if(s.gE(a)){this.br(s.h(a,0))
for(r=1;r<s.gn(a);++r){q.a+=","
this.br(s.h(a,r))}}q.a+="]"},
jc(a){var s,r,q,p,o,n,m=this,l={}
if(a.gD(a)){m.c.a+="{}"
return!0}s=a.gn(a)*2
r=A.c1(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.Y(0,new A.j9(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.fi(A.x(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.br(r[n])}p.a+="}"
return!0}}
A.j9.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:13}
A.j7.prototype={
gdg(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.f6.prototype={}
A.iD.prototype={
i7(a){return new A.jg(this.a).h5(t.I.a(a),0,null,!0)}}
A.jg.prototype={
h5(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.I.a(a)
s=A.ds(b,c,J.aP(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.pc(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.pb(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.bI(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.pd(o)
l.b=0
throw A.d(A.Z(m,a,p+l.c))}return n},
bI(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.H(b+c,2)
r=q.bI(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bI(a,s,c,d)}return q.i9(a,b,c,d)},
i9(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.al(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.lw(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.R(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.bT.prototype={
R(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bT)if(this.a===b.a)s=this.b===b.b
return s},
gC(a){return A.cu(this.a,this.b,B.f,B.f)},
K(a,b){var s
t.ml.a(b)
s=B.c.K(this.a,b.a)
if(s!==0)return s
return B.c.K(this.b,b.b)},
p(a){var s=this,r=A.nq(A.ob(s)),q=A.eq(A.o9(s)),p=A.eq(A.o5(s)),o=A.eq(A.o6(s)),n=A.eq(A.o8(s)),m=A.eq(A.oa(s)),l=A.l2(A.o7(s)),k=s.b,j=k===0?"":A.l2(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib4:1}
A.fj.prototype={
p(a){return this.P()},
$ian:1}
A.K.prototype={
gaC(){return A.o4(this)}}
A.ee.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.eu(s)
return"Assertion failed"}}
A.bu.prototype={}
A.b1.prototype={
gbK(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gbK()+q+o
if(!s.a)return n
return n+s.gbJ()+": "+A.eu(s.gcA())},
gcA(){return this.b}}
A.cw.prototype={
gcA(){return A.ma(this.b)},
gbK(){return"RangeError"},
gbJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.ey.prototype={
gcA(){return A.a(this.b)},
gbK(){return"RangeError"},
gbJ(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.dz.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.f2.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.cA.prototype={
p(a){return"Bad state: "+this.a}}
A.em.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eu(s)+"."}}
A.eT.prototype={
p(a){return"Out of Memory"},
gaC(){return null},
$iK:1}
A.du.prototype={
p(a){return"Stack Overflow"},
gaC(){return null},
$iK:1}
A.iU.prototype={
p(a){return"Exception: "+this.a}}
A.C.prototype={
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
k=""}return g+l+B.b.u(e,i,j)+k+"\n"+B.b.a0(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.l.prototype={
b6(a,b){return A.ni(this,A.m(this).i("l.E"),b)},
aQ(a,b,c){var s=A.m(this)
return A.i1(this,s.v(c).i("1(l.E)").a(b),s.i("l.E"),c)},
cL(a,b){var s=A.m(this)
return new A.I(this,s.i("q(l.E)").a(b),s.i("I<l.E>"))},
cM(a,b){return new A.b6(this,b.i("b6<0>"))},
a7(a,b){var s
A.m(this).i("q(l.E)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gq()))return!1
return!0},
ak(a,b){var s
A.m(this).i("q(l.E)").a(b)
for(s=this.gt(this);s.l();)if(b.$1(s.gq()))return!0
return!1},
gn(a){var s,r=this.gt(this)
for(s=0;r.l();)++s
return s},
gD(a){return!this.gt(this).l()},
gE(a){return!this.gD(this)},
gaw(a){var s=this.gt(this)
if(!s.l())throw A.d(A.hH())
return s.gq()},
L(a,b){var s,r
A.eX(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gq();--r}throw A.d(A.hE(b,b-r,this,"index"))},
p(a){return A.nT(this,"(",")")}}
A.A.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.P.prototype={
gC(a){return A.v.prototype.gC.call(this,0)},
p(a){return"null"}}
A.v.prototype={$iv:1,
R(a,b){return this===b},
gC(a){return A.dr(this)},
p(a){return"Instance of '"+A.eW(this)+"'"},
gF(a){return A.kM(this)},
toString(){return this.p(this)}}
A.fx.prototype={
p(a){return""},
$ibe:1}
A.al.prototype={
gn(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iok:1}
A.iC.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.x(b)
s=B.b.f1(b,"=")
if(s===-1){if(b!=="")a.k(0,A.kl(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.u(b,0,s)
q=B.b.aT(b,s+1)
p=this.a
a.k(0,A.kl(r,0,r.length,p,!0),A.kl(q,0,q.length,p,!0))}return a},
$S:49}
A.iB.prototype={
$2(a,b){throw A.d(A.Z("Illegal IPv6 address, "+a,this.a,b))},
$S:59}
A.e2.prototype={
gdv(){var s,r,q,p,o=this,n=o.w
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
gC(a){var s,r=this,q=r.y
if(q===$){s=B.b.gC(r.gdv())
r.y!==$&&A.mN()
r.y=s
q=s}return q},
gbq(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.lE(s==null?"":s)
r.z!==$&&A.mN()
q=r.z=new A.bI(s,t.ph)}return q},
gfg(){return this.b},
gcz(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.N(s,"v",1))return B.b.u(s,1,s.length-1)
return s},
gcE(){var s=this.d
return s==null?A.lV(this.a):s},
gcF(){var s=this.f
return s==null?"":s},
geY(){var s=this.r
return s==null?"":s},
geZ(){return this.c!=null},
gf0(){return this.f!=null},
gf_(){return this.r!=null},
p(a){return this.gdv()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.gcO())if(p.c!=null===b.geZ())if(p.b===b.gfg())if(p.gcz()===b.gcz())if(p.gcE()===b.gcE())if(p.e===b.gf8()){r=p.f
q=r==null
if(!q===b.gf0()){if(q)r=""
if(r===b.gcF()){r=p.r
q=r==null
if(!q===b.gf_()){s=q?"":r
s=s===b.geY()}}}}return s},
$if4:1,
gcO(){return this.a},
gf8(){return this.e}}
A.iA.prototype={
gff(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.bj(s,"?",m)
q=s.length
if(r>=0){p=A.e3(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.fi("data","",n,n,A.e3(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.fu.prototype={
geZ(){return this.c>0},
gf0(){return this.f<this.r},
gf_(){return this.r<this.a.length},
gcO(){var s=this.w
return s==null?this.w=this.h2():s},
h2(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.u(r.a,0,q)},
gfg(){var s=this.c,r=this.b+3
return s>r?B.b.u(this.a,r,s-1):""},
gcz(){var s=this.c
return s>0?B.b.u(this.a,s,this.d):""},
gcE(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.qx(B.b.u(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gf8(){return B.b.u(this.a,this.e,this.f)},
gcF(){var s=this.f,r=this.r
return s<r?B.b.u(this.a,s+1,r):""},
geY(){var s=this.r,r=this.a
return s<r.length?B.b.aT(r,s+1):""},
gbq(){if(this.f>=this.r)return B.aa
return new A.bI(A.lE(this.gcF()),t.ph)},
gC(a){var s=this.x
return s==null?this.x=B.b.gC(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$if4:1}
A.fi.prototype={}
A.i3.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.jY.prototype={
$1(a){return this.a.bV(this.b.i("0/?").a(a))},
$S:6}
A.jZ.prototype={
$1(a){if(a==null)return this.a.dH(new A.i3(a===undefined))
return this.a.dH(a)},
$S:6}
A.jA.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.mo(a))return a
s=this.a
a.toString
if(s.O(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.B(A.aj(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.cW(!0,"isUtc",t.y)
return new A.bT(r,0,!0)}if(a instanceof RegExp)throw A.d(A.a7("structured clone of RegExp",null))
if(a instanceof Promise)return A.bb(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.r(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bp(n),p=s.gt(n);p.l();)m.push(A.fI(p.gq()))
for(l=0;l<s.gn(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.c(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.ba(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:60}
A.fm.prototype={
a2(a){if(a<=0||a>4294967296)throw A.d(A.lq(u.g+a))
return Math.random()*a>>>0},
cC(){return Math.random()},
$ik8:1}
A.cE.prototype={
bB(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.ac()
l.ac()
l.ac()
l.ac()},
ac(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.H(o-n+(q-p)+(m-r),4294967296)>>>0},
a2(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.lq(u.g+a))
s=a-1
if((a&s)>>>0===0){p.ac()
return(p.a&s)>>>0}do{p.ac()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cC(){var s,r=this
r.ac()
s=r.a
r.ac()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ik8:1}
A.er.prototype={
A(){var s=this
return A.M(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.eg.prototype={
fL(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
j===$&&A.f()
s=k.a
A.e(j.connect(A.b(s.destination)))
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
for(r=[r,q,p,o,n,m],l=0;l<6;++l)A.e(r[l].connect(j))
r=k.y
r===$&&A.f()
A.b(r.gain).value=1
q=k.z
q===$&&A.f()
A.b(q.gain).value=0.35
A.e(p.connect(r))
A.e(o.connect(r))
o=k.Q
o===$&&A.f()
A.e(r.connect(o))
A.e(o.connect(q))
A.e(q.connect(j))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
k.dx!==$&&A.p()
k.dx=q
o=A.b(s.createBiquadFilter())
o.type="lowpass"
A.b(o.frequency).value=11e3
k.dy!==$&&A.p()
k.dy=o
A.e(q.connect(o))
A.e(o.connect(A.b(s.destination)))
j.disconnect(A.b(s.destination))
A.e(j.connect(q))},
fd(){var s=this.a
if(A.x(s.state)==="suspended")A.b(s.resume())},
hD(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.x
s===$&&A.f()
return s}r=B.ab.h(0,a)
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
hd(){var s,r,q,p,o,n,m,l=this.a,k=A.fE(l.sampleRate),j=B.d.ag(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cC()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.c(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
cD(a,b){var s,r,q,p=this,o=p.as.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.at.cC()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.e(r.connect(q))
s=B.ab.h(0,a)
A.e(q.connect(p.hD(s==null?"transient":s)))
r.start()},
iP(a){return this.cD(a,1)},
bT(){return}}
A.h_.prototype={
$1(a){return this.fj(t.q.a(a))},
fj(a){var s=0,r=A.bm(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bn(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ad(A.bb(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ad(A.bb(A.b(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.ad(A.bb(A.b(j.a.decodeAudioData(m)),k),$async$$1)
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
case 5:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$$1,r)},
$S:19}
A.h3.prototype={
f4(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.i(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.n5().b8(q).ga3()
p.d=q
p.c=p.b.b8(q).ga3()
p.a=a}}
A.hj.prototype={}
A.f0.prototype={}
A.hq.prototype={
h8(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.e(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.e(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.e(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.fI(s.getParameter(34047))
if(typeof p=="number")o.c=p},
bm(a,b,c,d,e,f){return this.iD(a,b,c,d,e,f)},
iD(a,b,c,a0,a1,a2){var s=0,r=A.bm(t.B),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$bm=A.bn(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.b(A.b(j.document).createElement("img"))
m.src=a
s=7
return A.ad(A.bb(A.b(m.decode()),t.X),$async$bm)
case 7:i=n.a
h=A.e(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.b9(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.h8()
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
case 6:case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$bm,r)},
bn(a,b,c){var s=!1
return this.iE(t.h.a(a),b,!1)},
iE(b0,b1,b2){var s=0,r=A.bm(t.B),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$bn=A.bn(function(b3,b4){if(b3===1){o.push(b4)
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
return A.ad(A.bb(A.b(j.decode()),a1),$async$bn)
case 10:J.fO(l,j)
case 8:b0.length===a||(0,A.y)(b0),++a2
s=7
break
case 9:if(J.aP(l)===0){a=A.a3("texture array needs at least one layer")
throw A.d(a)}i=A.a(J.as(l,0).width)
h=A.a(J.as(l,0).height)
if(J.Y(i,0)||J.Y(h,0)||J.n6(l,new A.hr(i,h))){a=A.a3("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.aP(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.S()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.fJ(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.S()
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
break A}e=B.d.H(a+1,2)}}a=m.a
a7=A.e(a.createTexture())
if(a7==null){a=A.a3("could not create texture array")
throw A.d(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.b9(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.Y(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a3("texture-array storage failed (WebGL error 0x"+J.k0(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.aP(l)
if(typeof a1!=="number"){q=a1.bu()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.as(l,c)])
d=A.a(a.getError())
if(!J.Y(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a3("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.k0(d,16)+")")
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
if(!J.Y(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.a3("texture-array mip generation failed (WebGL error 0x"+J.k0(d,16)+")")
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
case 6:case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$bn,r)},
ds(a,b){var s=this.a,r=A.e(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.Y(A.fI(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.co("shader compile failed: "+A.w(A.mc(s,"getShaderInfoLog",r,t.v))+"\n"+b))
return r},
a6(a,b){var s=v.G,r=this.ds(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.ds(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.e(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.Y(A.fI(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.co("program link failed: "+A.w(A.mc(p,"getProgramInfoLog",o,t.v))))
return o},
gf6(){var s=A.fI(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aq(s):0},
cK(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.ds(0,c,B.c.fK(b.byteLength,p))*p
if(B.c.ab(o,4)!==0)A.B(A.a7("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.n7(B.r.gi_(b),b.byteOffset+0*p,B.c.H(o,4)))}},
bS(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.b9(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
bO(a,b,c,d,e){var s,r=this.a,q=A.e(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.b9(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
du(a,b,c){var s,r=this.a,q=A.e(r.createTexture())
q.toString
this.bS(q,a,b)
s=v.G
A.b9(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
d6(a,b){var s,r,q=this.a,p=A.e(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.b9(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.b9(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
cB(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.e(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.bO(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.bO(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.du(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.du(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.bO(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.d6(a,b)
if(d)h.drawBuffers(A.j([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.u))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.co("framebuffer incomplete"))
return new A.f0(g,n,o,m,q,p,l,e,a,b)},
f5(a,b,c,d){return this.cB(a,b,c,d,0)},
iG(a,b,c,d){return this.cB(a,b,!0,c,d)},
ao(a,b,c){return this.cB(a,b,c,!1,0)},
bQ(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.b9(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
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
if(q!=null)n.bS(q,b,c)
if(p!=null)n.bS(p,b,c)
n.bQ(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.bQ(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.bQ(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.d6(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
iW(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.u
p.drawBuffers(A.j([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.b9(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.j([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.b9(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.b9(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.j([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
i3(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
ad(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.hr.prototype={
$1(a){A.b(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:20}
A.ex.prototype={
cJ(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].jf(a)}}
A.ez.prototype={
af(a){if(this.f)return
A.le(a,"requestPointerLock",t.X)},
hk(a){A.b(a)
if(A.aC(a.repeat))return
if(this.b.m(0,A.x(a.code)))this.c.m(0,A.x(a.code))},
hm(a){this.b.aS(0,A.x(A.b(a).code))},
hq(a){var s=this
A.b(a)
if(!s.f)return
s.d=s.d+s.de(a,"movementX")
s.e=s.e+s.de(a,"movementY")},
ho(a){var s=this
A.b(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
de(a,b){var s=A.m8(a[b])
if(s==null)s=null
return s==null?0:s}}
A.eK.prototype={}
A.c3.prototype={
gda(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gC(B.c.cI(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gC(B.c.cI(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.c3&&A.kM(r)===A.kM(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gC(a){return this.gda()}}
A.i2.prototype={
fQ(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gda(),q)}}
A.dv.prototype={
fb(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.r.fo(s,0,m,l)
n.a=s}r=b.U(0,a).b8(d.U(0,a)).ga3()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.dw(n.a,n.b,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=f+g
m=A.dw(n.a,m,b,r,q,p,o,0,1,l,h,0)
n.b=m
k=h+i
m=A.dw(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.dw(n.a,m,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=A.dw(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.dw(n.a,l,d,r,q,p,o,0,1,f,k,0)},
fa(a,b,c,d,e,f,g){return this.fb(a,b,c,d,e,0,f,0,g)}}
A.i8.prototype={
hf(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.a6(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.p()
m.w=r
q=s.a6(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.p()
m.x=q
p=m.c
o=A.e(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.p()
m.y=o
o=A.e(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.p()
m.z=o
o=A.e(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.p()
m.Q=o
r=A.e(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.p()
m.as=r
r=A.e(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.p()
m.at=r
q=A.e(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.p()
m.ax=q
m.d=s.ao(m.ay,m.ch,!1)
m.e=s.ao(m.ay,m.ch,!1)
m.f=s.ao(m.ay,m.ch,!1)
p=A.e(p.createVertexArray())
p.toString
m.CW!==$&&A.p()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
hg(){var s
try{this.r=this.b.ao(384,216,!1)}catch(s){this.r=null}},
iV(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.ad(n)
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
p.ad(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.f()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.ad(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.id.prototype={
bG(a,b,c){var s,r,q
try{r=this.a.a6(b,c)
return r}catch(q){s=A.a5(q)
r=A.co(a+": "+A.w(s))
throw A.d(r)}}}
A.i9.prototype={}
A.dH.prototype={}
A.fv.prototype={}
A.fs.prototype={}
A.fq.prototype={}
A.ia.prototype={
fR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",f=A.j([new A.c3(0,0,1,0),new A.c3(1,0,1,0),new A.c3(2,0,1,0)],t.mm),e=t.S
e=new A.i2(f,A.r(e,e))
e.fQ(f)
h.cv=e
h.eE=1.9
h.cl=h.an/h.am
r=J.hI(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.dH()
t.dz.a(r)
f=h.a8
e=f.a6("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.a6(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.a6(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.a6(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.a6(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.X!==$&&A.p()
h.X=new A.id(f,e,p,o,n,m)
h.b=t.d4.a(new A.ib(h))
h.dn()
h.dm()
o=h.a4
p=A.e(o.getUniformLocation(m,"uTex"))
h.e7!==$&&A.p()
h.e7=p
p=A.e(o.getUniformLocation(m,"uNoise"))
h.e8!==$&&A.p()
h.e8=p
p=A.e(o.getUniformLocation(m,"uTime"))
h.dO!==$&&A.p()
h.dO=p
p=A.e(o.getUniformLocation(m,"uTexelSize"))
h.dN!==$&&A.p()
h.dN=p
p=A.e(o.getUniformLocation(m,"uNoiseOff"))
h.dP!==$&&A.p()
h.dP=p
p=A.e(o.getUniformLocation(m,"uChromaLuma"))
h.dQ!==$&&A.p()
h.dQ=p
p=A.e(o.getUniformLocation(m,"uChromaLag"))
h.dR!==$&&A.p()
h.dR=p
p=A.e(o.getUniformLocation(m,"uTapeNoise"))
h.dS!==$&&A.p()
h.dS=p
p=A.e(o.getUniformLocation(m,"uHeadSwitch"))
h.dT!==$&&A.p()
h.dT=p
p=A.e(o.getUniformLocation(m,"uTracking"))
h.dU!==$&&A.p()
h.dU=p
p=A.e(o.getUniformLocation(m,"uDropouts"))
h.dV!==$&&A.p()
h.dV=p
p=A.e(o.getUniformLocation(m,"uGhosting"))
h.dW!==$&&A.p()
h.dW=p
p=A.e(o.getUniformLocation(m,"uChromaBlurI"))
h.dX!==$&&A.p()
h.dX=p
p=A.e(o.getUniformLocation(m,"uChromaBlurQ"))
h.dY!==$&&A.p()
h.dY=p
p=A.e(o.getUniformLocation(m,"uChromaLagAmount"))
h.dZ!==$&&A.p()
h.dZ=p
p=A.e(o.getUniformLocation(m,"uNoiseScale"))
h.e_!==$&&A.p()
h.e_=p
p=A.e(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.e0!==$&&A.p()
h.e0=p
p=A.e(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.e1!==$&&A.p()
h.e1=p
p=A.e(o.getUniformLocation(m,"uJitterAmount"))
h.e2!==$&&A.p()
h.e2=p
p=A.e(o.getUniformLocation(m,"uJitterFreq"))
h.e3!==$&&A.p()
h.e3=p
p=A.e(o.getUniformLocation(m,"uDropoutRate"))
h.e4!==$&&A.p()
h.e4=p
p=A.e(o.getUniformLocation(m,"uGhostAmount"))
h.e5!==$&&A.p()
h.e5=p
p=A.e(o.getUniformLocation(m,"uGhostOffset"))
h.e6!==$&&A.p()
h.e6=p
p=A.e(o.getUniformLocation(m,"uGhostTarget"))
h.e9!==$&&A.p()
h.e9=p
m=A.e(o.getUniformLocation(m,"uHasGhost"))
h.ea!==$&&A.p()
h.ea=m
m=A.e(o.getUniformLocation(n,"uTex"))
h.cn!==$&&A.p()
h.cn=m
m=A.e(o.getUniformLocation(n,"uDepth"))
h.co!==$&&A.p()
h.co=m
m=A.e(o.getUniformLocation(n,"uFocusDistance"))
h.cp!==$&&A.p()
h.cp=m
m=A.e(o.getUniformLocation(n,"uDofBlurScale"))
h.cq!==$&&A.p()
h.cq=m
m=A.e(o.getUniformLocation(n,"uBlurRadius"))
h.cr!==$&&A.p()
h.cr=m
m=A.e(o.getUniformLocation(n,"uDofStrength"))
h.cs!==$&&A.p()
h.cs=m
n=A.e(o.getUniformLocation(n,"uTexel"))
h.ct!==$&&A.p()
h.ct=n
n=A.aC(A.b(A.b(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.aJ!==$&&A.p()
h.aJ=n
h.sf3(16777215)
n=new A.il(o,f,A.j([],t.aA),A.j([],t.df),A.j([],t.hL),A.j([],t.kS))
m=n.c=f.a6("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.e(o.getUniformLocation(m,"uLightProj"))
n.e=A.e(o.getUniformLocation(m,"uModel"))
h.cu!==$&&A.p()
h.cu=n
n=new A.i8(f,o)
n.hf()
n.hg()
h.bb!==$&&A.p()
h.bb=n
n=f.a
m=A.e(n.createBuffer())
m.toString
h.bY!==$&&A.p()
h.bY=m
p=A.e(n.createBuffer())
p.toString
h.bZ!==$&&A.p()
h.bZ=p
n=A.e(n.createBuffer())
n.toString
h.c_!==$&&A.p()
h.c_=n
e=A.e(o.createVertexArray())
e.toString
h.c0!==$&&A.p()
h.c0=e
l=A.e(o.createVertexArray())
l.toString
h.c1!==$&&A.p()
h.c1=l
k=A.e(o.createVertexArray())
k.toString
h.c2!==$&&A.p()
h.c2=k
j=A.e(o.createVertexArray())
j.toString
h.c3!==$&&A.p()
h.c3=j
o.bindVertexArray(e)
h.bE(m)
o.bindVertexArray(l)
h.bE(p)
o.bindVertexArray(k)
h.bE(n)
o.bindVertexArray(null)
try{h.bg=f.f5(384,216,!0,!0)}catch(i){h.bg=null}s=4<f.gf6()?4:f.gf6()
e=s
if(typeof e!=="number")return e.S()
if(e>1)try{h.aI=f.iG(h.am,h.an,!0,s)}catch(i){h.aI=null}try{h.al=f.f5(h.am,h.an,!0,!0)}catch(i){h.aI=h.al=null}if(h.al!=null)try{h.bd=f.ao(h.gaX(),h.gaW(),!1)
h.be=f.ao(h.gaX(),h.gaW(),!1)
h.bf=f.ao(h.am,h.an,!1)}catch(i){h.bf=h.be=h.bd=null}},
gaX(){var s=B.c.H(this.am,4)
return s<1?1:s},
gaW(){var s=B.c.H(this.an,4)
return s<1?1:s},
aP(a){return this.iF(t.G.a(a))},
iF(a){var s=0,r=A.bm(t.H),q=this,p,o,n,m,l,k,j
var $async$aP=A.bn(function(b,c){if(b===1)return A.bj(c,r)
for(;;)switch(s){case 0:p=new A.L(a,A.m(a).i("L<1,2>")).gt(0),o=q.a8
case 2:if(!p.l()){s=3
break}n=p.d
m=n.a
l=B.a9.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ad(o.bm(k,l,!1,!1,!1,m==="grime"),$async$aP)
case 4:if(c!=null)q.d7(m,l)
s=2
break
case 3:p=t.lS
j=A.av(new A.b6(new A.ax(A.j(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.ic(a)),t.dD),p),p.i("l.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ad(o.bn(j,12,!1),$async$aP)
case 7:q.ba=c
case 6:return A.bk(null,r)}})
return A.bl($async$aP,r)},
aA(){var s=0,r=A.bm(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$aA=A.bn(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.r(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ad(A.bb(A.b(A.b(g.window).fetch("shaders/"+A.w(m))),f),$async$aA)
case 13:l=a3
if(!A.aC(l.ok)){i=A.co("HTTP "+A.w(A.qr(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.ad(A.bb(A.b(l.text()),i),$async$aA)
case 14:a.bA(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.a5(c)
i=A.co("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.hv(n)
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
case 5:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$aA,r)},
hv(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.X
q===$&&A.f()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.bG("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.bG("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.bG("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.dn()
i.dm()
q=i.dK
q=A.av(q,A.m(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.y)(q),++k){s=q[k]
o=B.a9.h(0,s)
o.toString
i.d7(s,o)}A.b(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.a5(j)
A.b(v.G.console).error("shader recompile failed: "+A.w(r))}},
dm(){var s=this,r=s.a4,q=s.X
q===$&&A.f()
s.eF=A.e(r.getUniformLocation(q.c,"uTex"))
s.eG=A.e(r.getUniformLocation(q.c,"uTime"))
s.eH=A.e(r.getUniformLocation(q.c,"uFlash"))
s.eI=A.e(r.getUniformLocation(q.c,"uVignette"))
s.eJ=A.e(r.getUniformLocation(q.c,"uGrain"))
s.eK=A.e(r.getUniformLocation(q.c,"uDesat"))
s.eL=A.e(r.getUniformLocation(q.c,"uBloom"))
s.eM=A.e(r.getUniformLocation(q.c,"uBloomStrength"))
s.eT=A.e(r.getUniformLocation(q.c,"uNoiseOff"))
s.eW=A.e(r.getUniformLocation(q.c,"uLutMix"))
s.eP=A.e(r.getUniformLocation(q.c,"uDepth"))
s.eQ=A.e(r.getUniformLocation(q.c,"uDepthViz"))
s.dL=A.e(r.getUniformLocation(q.c,"uSSAO"))
s.dM=A.e(r.getUniformLocation(q.c,"uSSAOStrength"))
s.eR=A.e(r.getUniformLocation(q.c,"uNoise"))
s.eS=A.e(r.getUniformLocation(q.c,"uNoiseOn"))
s.eU=A.e(r.getUniformLocation(q.c,"uLut"))
s.eV=A.e(r.getUniformLocation(q.c,"uLutOn"))
s.eN=A.e(r.getUniformLocation(q.d,"uTex"))
s.cm=A.e(r.getUniformLocation(q.d,"uDir"))
s.eO=A.e(r.getUniformLocation(q.c,"uBlur"))},
d7(a,b){var s,r,q,p=this
p.dK.m(0,a)
switch(a){case"bluenoise":s=p.X
s===$&&A.f()
s=s.c
r=p.eR
r===$&&A.f()
q=p.eS
q===$&&A.f()
p.aE(s,r,q,b)
break
case"lut-gothic":s=p.X
s===$&&A.f()
s=s.c
r=p.eU
r===$&&A.f()
q=p.eV
q===$&&A.f()
p.aE(s,r,q,b)
break
case"grime":s=p.X
s===$&&A.f()
s=s.b
r=p.RG
r===$&&A.f()
q=p.rx
q===$&&A.f()
p.aE(s,r,q,b)
break
case"glass":s=p.X
s===$&&A.f()
s=s.b
r=p.x2
r===$&&A.f()
q=p.xr
q===$&&A.f()
p.aE(s,r,q,b)
break
case"soft":s=p.X
s===$&&A.f()
s=s.b
r=p.eq
r===$&&A.f()
q=p.er
q===$&&A.f()
p.aE(s,r,q,b)
break}},
aE(a,b,c,d){var s=this.a4
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sf3(a){var s=A.jx(a)
this.ei=s.a
this.ej=s.b
this.ek=s.c},
bU(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.ab(a1,14)!==0)throw A.d(A.a7("static mesh needs a multiple of 14 floats, got "+a1,null))
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
i=A.e(a1.createVertexArray())
i.toString
e=A.e(a1.createBuffer())
e.toString
d=A.e(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.a(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.d_(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.io++
b.c7.k(0,a1,new A.fv(e,d,i,s,s,a3))
return a1},
ie(a){var s,r,q,p=this,o=p.c7.h(0,a)
if(o==null)return
p.df()
s=p.eo
r=p.ep
if(s!==r)p.dq(r)
s=p.a4
r=p.dy
r===$&&A.f()
s.uniform1i(r,0)
r=p.ck
r===$&&A.f()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.aK},
iu(a){var s,r=this.c7.aS(0,a)
if(r==null)return
s=this.a4
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
df(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.c8)return
c.c8=!0
s=c.a4
r=c.X
r===$&&A.f()
s.useProgram(r.b)
r=c.as
r===$&&A.f()
q=c.em
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.f()
r=c.cb
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.f()
q=c.cc
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.f()
r=c.cd
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.f()
s.uniform1f(r,c.eE)
r=c.CW
r===$&&A.f()
s.uniform1f(r,c.cl)
r=c.cx
r===$&&A.f()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.f()
s.uniform1f(r,60)
r=c.db
r===$&&A.f()
q=c.eb?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.f()
s.uniform3f(q,c.ce/255*0.25,c.cf/255*0.25,c.cg/255*0.25)
q=c.fx
q===$&&A.f()
r=c.eh
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.f()
s.uniform3f(r,c.ei,c.ej,c.ek)
r=c.go
r===$&&A.f()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.f()
s.uniform1f(r,14)
r=c.k1
r===$&&A.f()
s.uniform1f(r,c.el)
r=c.k2
r===$&&A.f()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.f()
s.uniform1i(r,c.ca.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.ca
l=m.length
if(n<l){if(!(n<l))return A.c(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],0)
continue}j=A.jx(k.b)
m=c.aJ
m===$&&A.f()
i=m?1:1+(A.k_(c.ci*8,27229+n)*2-1)*k.e
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
q=r?1:1+(A.k_(c.ci*2.5,40503)*2-1)*0
c.ik=q
p=c.p3
p===$&&A.f()
s.uniform1f(p,q)
q=c.p4
q===$&&A.f()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.f()
p=c.ed?1:0
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
q=c.ec
h=q?384:0
g=q?216:0
q=c.c4
p=q.a
if(p===B.I){f=B.d.W(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.es
r===$&&A.f()
s.uniform2f(r,h,g)
r=c.cu
r===$&&A.f()
q=c.ex
q===$&&A.f()
s.uniform1f(q,0)
q=c.ey
q===$&&A.f()
s.uniform3f(q,0.0015,0.005,0)
q=c.eu
q===$&&A.f()
if(q!=null)r.bs(0)
q=c.ev
q===$&&A.f()
if(q!=null)r.bs(1)
q=c.ew
q===$&&A.f()
if(q!=null)r.bs(2)
r.bt(0)
r.bt(1)
r.bt(2)
r=c.ez
r===$&&A.f()
if(c.ba==null)q=0
else{c.cv===$&&A.f()
q=3}s.uniform1i(r,q)
if(c.ba!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.ba)
r=c.cj
r===$&&A.f()
s.uniform1i(r,12)}r=c.eD
q=c.eC
p=c.eB
o=c.eA
n=0
for(;;){m=c.cv
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
if(m!=null)s.uniform1i(m,d.d);++n}c.dq(c.ep)
r=c.dy
r===$&&A.f()
s.uniform1i(r,0)
r=c.ck
r===$&&A.f()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
dq(a){var s
this.eo=a
s=this.dx
s===$&&A.f()
this.a4.uniformMatrix4fv(s,!1,a.a)},
hF(a){var s,r,q,p,o,n,m
for(s=this.ef,r=this.ee,q=1;q<a;++q){if(!(q<800))return A.c(s,q)
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
hE(a){var s,r,q,p,o,n,m,l
for(s=this.eg,r=this.c9,q=1;q<a;++q){if(!(q<4000))return A.c(s,q)
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
it(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.c4=b4
s=b2.aL
r=0
if(s>0){for(s=b2.eg,q=0;p=b2.aL,q<p;++q)B.a.k(s,q,q)
b2.hE(p)
for(p=b2.c9,o=b2.c5,n=0;n<b2.aL;++n){if(!(n<4000))return A.c(s,n)
m=s[n]
if(!(m<p.length))return A.c(p,m)
l=p[m]
r=A.mp(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.c9,p=b2.c5,q=0;q<b2.aL;++q){if(!(q<s.length))return A.c(s,q)
l=s[q]
r=A.mp(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.aL=0
for(s=b2.ef,q=0;p=b2.bh,q<p;++q)B.a.k(s,q,q)
b2.hF(p)
for(p=b2.il,o=b2.ee,k=0,n=0;n<b2.bh;++n){if(!(n<800))return A.c(s,n)
m=s[n]
if(!(m<o.length))return A.c(o,m)
j=o[m]
i=A.jx(0)
m=j.b
h=b2.cd
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.cc
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
e=b2.cb
k=A.mr(p,k,a3,a4,a5,a6,new A.i(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.bh=0
s=b2.a8
o=b2.bY
o===$&&A.f()
s.cK(o,b2.c5,r)
o=b2.bZ
o===$&&A.f()
s.cK(o,p,k)
b2.df()
p=b2.a4
o=b2.dy
o===$&&A.f()
p.uniform1i(o,0)
o=b2.c0
o===$&&A.f()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.H(r,14));++b2.aK
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.c1
m===$&&A.f()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.H(k,14));++b2.aK
m=b2.c6
if(m>0){h=b2.c_
h===$&&A.f()
s.cK(h,b2.im,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.c2
m===$&&A.f()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.c6/14|0);++b2.aK}m=b2.bg
if(m!=null){a7=b2.al
if(a7!=null)s.iW(m,a7)}a8=b2.al
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.c3
m===$&&A.f()
p.bindVertexArray(m)
a3=b2.bd
a4=b2.be
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.X
g===$&&A.f()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.eN
g===$&&A.f()
p.uniform1i(g,0)
s.ad(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.cm
g===$&&A.f()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.ad(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.cm,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.bf
if(b2.bc>0&&a6!=null){s.ad(a6)
g=b2.X
g===$&&A.f()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.cn
g===$&&A.f()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.co
g===$&&A.f()
p.uniform1i(g,7)
g=b2.cp
g===$&&A.f()
p.uniform1f(g,0.03171953255425709)
g=b2.cq
g===$&&A.f()
p.uniform1f(g,1)
g=b2.cr
g===$&&A.f()
p.uniform1f(g,0.5)
g=b2.cs
g===$&&A.f()
p.uniform1f(g,b2.bc)
g=b2.ct
g===$&&A.f()
p.uniform2f(g,1/b2.am,1/b2.an)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.bb
g===$&&A.f()
b0=g.iV(a8,0.5)
s.ad(null)
s=b2.X
s===$&&A.f()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.eL
g===$&&A.f()
p.uniform1i(g,1)
g=b2.eM
g===$&&A.f()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.eO
s===$&&A.f()
b2.aJ===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.eP
s===$&&A.f()
p.uniform1i(s,7)
s=b2.eQ
s===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.dL
s===$&&A.f()
p.uniform1i(s,11)
s=b2.dM
s===$&&A.f()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.bc>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.eF
h===$&&A.f()
p.uniform1i(h,0)
h=b2.ci+=b3;++b2.en
s=b2.eG
s===$&&A.f()
p.uniform1f(s,h)
h=b2.eT
h===$&&A.f()
s=b2.en
p.uniform2f(h,B.c.ab(s*13,64),B.c.ab(s*29,64))
s=b2.eH
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eI
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eJ
s===$&&A.f()
p.uniform1f(s,0)
s=b2.eK
s===$&&A.f()
p.uniform1f(s,0)
s=b2.c4
if(s.a===B.y)b1=0*(1-s.b/1)
else b1=0
s=b2.eW
s===$&&A.f()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.ib.prototype={
$0(){var s=this.a.X
s===$&&A.f()
return s.b},
$S:22}
A.ic.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:15}
A.iN.prototype={
ghP(){var s=this.b
s===$&&A.f()
return s},
dn(){var s,r,q,p,o,n,m=this,l=m.hQ(),k=m.a
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
m.as=A.e(k.getUniformLocation(l,"uEye"))
m.at=A.e(k.getUniformLocation(l,"uFwd"))
m.ax=A.e(k.getUniformLocation(l,"uUp"))
m.ay=A.e(k.getUniformLocation(l,"uRight"))
m.ch=A.e(k.getUniformLocation(l,"uScale"))
m.CW=A.e(k.getUniformLocation(l,"uAspect"))
m.cx=A.e(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.e(k.getUniformLocation(l,"uDepthFar"))
m.db=A.e(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.e(k.getUniformLocation(l,"uModel"))
m.dy=A.e(k.getUniformLocation(l,"uInstanced"))
m.fr=A.e(k.getUniformLocation(l,"uFog"))
m.fx=A.e(k.getUniformLocation(l,"uLight"))
m.fy=A.e(k.getUniformLocation(l,"uLightColor"))
m.go=A.e(k.getUniformLocation(l,"uFogStart"))
m.id=A.e(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.e(k.getUniformLocation(l,"uAmbient"))
m.k2=A.e(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.e(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.I(s)
r=m.ok
B.a.I(r)
q=m.p1
B.a.I(q)
p=m.p2
B.a.I(p)
for(o=0;o<4;++o){n=""+o
B.a.m(s,A.e(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.m(r,A.e(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.m(q,A.e(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.m(p,A.e(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.e(k.getUniformLocation(l,"uFlicker"))
m.p4=A.e(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.e(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.e(k.getUniformLocation(l,"uWall"))
m.rx=A.e(k.getUniformLocation(l,"uWallOn"))
m.ry=A.e(k.getUniformLocation(l,"uWallMid"))
m.to=A.e(k.getUniformLocation(l,"uWallAmt"))
m.x1=A.e(k.getUniformLocation(l,"uWallScale"))
m.x2=A.e(k.getUniformLocation(l,"uGlass"))
m.xr=A.e(k.getUniformLocation(l,"uGlassOn"))
m.y1=A.e(k.getUniformLocation(l,"uGlassGain"))
m.y2=A.e(k.getUniformLocation(l,"uGlassFog"))
m.eq=A.e(k.getUniformLocation(l,"uSoft"))
m.er=A.e(k.getUniformLocation(l,"uSoftOn"))
m.es=A.e(k.getUniformLocation(l,"uInternal"))
m.eu=A.e(k.getUniformLocation(l,"uLightProj0"))
m.ev=A.e(k.getUniformLocation(l,"uLightProj1"))
m.ew=A.e(k.getUniformLocation(l,"uLightProj2"))
m.ip=A.e(k.getUniformLocation(l,"uShadow0"))
m.iq=A.e(k.getUniformLocation(l,"uShadow1"))
m.ir=A.e(k.getUniformLocation(l,"uShadow2"))
m.ex=A.e(k.getUniformLocation(l,"uShadowCasters"))
m.cj=A.e(k.getUniformLocation(l,"uMaterialAlbedo"))
m.ck=A.e(k.getUniformLocation(l,"uStaticMaterial"))
m.ey=A.e(k.getUniformLocation(l,"uShadowBias"))
m.ez=A.e(k.getUniformLocation(l,"uMaterialCount"))
s=m.eA
B.a.I(s)
r=m.eB
B.a.I(r)
q=m.eC
B.a.I(q)
p=m.eD
B.a.I(p)
for(o=0;o<32;++o){n=""+o
B.a.m(s,A.e(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.m(r,A.e(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.m(q,A.e(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.m(p,A.e(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.cj,12)},
bE(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.d_(56)},
d_(a){var s=this,r=s.c
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
A.b9(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
hQ(){return this.ghP().$0()}}
A.il.prototype={
bs(a){return null},
bt(a){return null}}
A.i.prototype={
a_(a,b){return new A.i(this.a+b.a,this.b+b.b,this.c+b.c)},
U(a,b){return new A.i(this.a-b.a,this.b-b.b,this.c-b.c)},
a0(a,b){return new A.i(this.a*b,this.b*b,this.c*b)},
ib(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b8(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.i(s*r-q*p,q*o-n*r,n*p-s*o)},
gn(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga3(){var s=this,r=s.gn(0)
return r<1e-9?new A.i(0,0,0):new A.i(s.a/r,s.b/r,s.c/r)}}
A.h2.prototype={
ja(a){var s,r,q,p,o,n=B.E.ih(a.A(),null)
this.a.dI(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.cP(s.getItem("quarantine.save.active"))
q=A.cP(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
iS(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.cP(s.getItem("quarantine.save.active"))
q=A.cP(s.getItem("quarantine.save.previous"))
p=this.d5(r,a)
if(p!=null)return new A.c5(p,null)
o=this.d5(q,a)
if(o!=null)return new A.c5(o,"recovered previous save")
if(r==null)return B.bA
return B.bz}catch(n){return B.by}},
d5(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.dI(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.a5(q) instanceof A.C)return null
else throw q}}}
A.es.prototype={
fM(a,b,c,d,e){if(this.a.length===0)throw A.d(B.b_)
if(this.b<0)throw A.d(B.aO)},
A(){var s,r=this,q=r.d
q=q==null?null:A.ai(q,t.i)
s=t.z
return A.en(A.M(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.aR.prototype={
P(){return"EndingKind."+this.b}}
A.he.prototype={}
A.cn.prototype={
A(){var s=t.N
return A.M(["kind",this.a.b],s,s)}}
A.hh.prototype={
$1(a){return t.k.a(a).b===this.a.h(0,"kind")},
$S:24}
A.eV.prototype={
A(){var s,r=this,q=t.N,p=A.r(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.M(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
iA(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.U(0,new A.i(0,1.3499999999999999,0))
return!new A.ei(s,s.a_(0,new A.i(0,1.2000000000000002,0))).f2(a,r)}}
A.cx.prototype={
A(){return A.M(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.ij.prototype={
dI(a){var s,r,q,p,o,n,m,l=B.E.dJ(a,null),k=t.f
if(!k.b(l))throw A.d(B.b3)
s=t.N
r=t.z
q=A.ao(l,s,r)
p=q.h(0,"version")
if(A.ar(p))o=p!==1&&p!==2
else o=!0
if(o)A.B(A.Z("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.B(B.aQ)
k=A.ao(n,s,r)
return A.lt(A.ao(m,s,r),k,2)}}
A.c5.prototype={}
A.bX.prototype={
P(){return"GameSessionEventType."+this.b}}
A.ev.prototype={}
A.hn.prototype={}
A.hm.prototype={
gah(){var s=this.d
return new A.hn(s.a,s.b)},
hT(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.b2(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.b1(B.b5)}if(n<a)this.b1(B.b6)},
fD(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.by(a)&&s.fC(b)},
iU(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.ah)r.c=Math.min(1,r.c+0.1)},
fB(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.nt(j,A.ai(i.d,h).length)
if(a===B.ag)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.W(r)
A.ns(j,new A.I(r,q.i("q(1)").a(new A.ho(k)),q.i("I<1>")).gn(0))
r=k.f
q=r.b
if(B.a.B(B.bh,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.ag(j.a/1*3)
B.a.m(r.r,new A.cz(q.a,a,b))
m=r.a
A.nD(m,q.a,n,k.b,A.ai(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.fq(B.bn)
s.r.i5(o,c)
l=B.d.ag(j.b/1*6)
if(l>0)r.by(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aG(i,A.m(i).i("aG<2>")).ak(0,new A.hp())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.b1(B.b8)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.b1(B.b7)},
b1(a){var s=this;++s.y
B.a.m(s.w,new A.ev())
B.a.m(s.x,A.nu(A.pp(a),s.b,s.y-1))}}
A.ho.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.im().fw(this.a.c,a.a)},
$S:25}
A.hp.prototype={
$1(a){return t.L.a(a).e},
$S:16}
A.ei.prototype={
iY(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.W(s)
q=new A.I(s,r.i("q(1)").a(new A.h4(e)),r.i("I<1>"))
p=!q.gt(0).l()?null:q.gaw(0)
if(p==null){n.d=null
return}if(!(n.b0(b,p.f)&&a==="hall"))o=n.b0(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.fe(p,B.d.W(d,0,1))},
iI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.dd(f,c,d)
s=g.h9(a,b,c,d)
if(s!=null){g.d=s
return g.dd(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.i0(Math.sqrt(r*r+q*q)/0.08))
o=d.a0(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.dA(a,n,m,new A.i(q,0,0))
l=l||j.b
i=g.f9(a,n)
n=i==null?n:i
h=g.dA(a,n,j.a,new A.i(0,0,r))
l=l||h.b
m=h.a
i=g.f9(a,n)
n=i==null?n:i}g.b4(m)
return new A.eL(m,n)},
h9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.b0(c,l.f)&&n
j=q&&this.b0(c,l.r)&&o
if(k||j)return new A.fe(l,k?0:1)}return null},
dd(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.U(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.W(a.b+o/p,0,1)
n=A.lF(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.b4(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.eL(n,k)},
b0(a,b){var s=a.U(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
dA(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.dE(c,!1)
s=c.a_(0,d)
this.b4(s)
if(this.f2(a,b)){this.b4(c)
return new A.dE(c,!0)}return new A.dE(s,!1)},
b4(a){var s=a.U(0,new A.i(0,1.3499999999999999,0))
this.a=s
this.b=s.a_(0,new A.i(0,1.2000000000000002,0))},
f2(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.hH(a,m,s)},
f9(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aH(k)
for(r=k.a,q=a.aR(r),p=J.J(q.a),q=new A.aa(p,q.b,q.$ti.i("aa<1>"));q.l();){o=p.gq()
n=o.f7(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.at&&!o.ax&&!o.z&&this.dE(k,o,s)&&this.h6(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
hH(a,b,c){var s,r,q
for(s=a.aR(b.a),r=J.J(s.a),s=new A.aa(r,s.b,s.$ti.i("aa<1>"));s.l();){q=r.gq()
if(q.at&&!q.ax&&!q.z&&this.dE(b,q,c))return!0}return!1},
dE(a,b,c){var s,r,q,p=a.a,o=b.av(p),n=b.ap(p)
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
h6(a,b,c){var s,r=this
switch(b.av(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
shX(a){this.a=t.b9.a(a)}}
A.h4.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:27}
A.eL.prototype={}
A.dE.prototype={}
A.fe.prototype={}
A.d8.prototype={}
A.hv.prototype={
i5(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.c(B.n,r)
s=B.n[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
fz(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.n,q)
p=B.n[q]
if(p.b===a)r+=p.c}return r},
fA(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.n,q)
p=B.n[q]
if(p.b===a)r+=p.d}return r},
A(){return A.M(["landedCount",this.b],t.N,t.z)}}
A.ie.prototype={
fS(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.p()
o.c=new A.hw(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.y)(n),++q){p=n[q]
r.k(0,p.a,o.d0(p))}},
iT(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.y)(r),++o)p.iu(r[o])
s.k(0,a,n.d0(m))},
d0(a){var s,r=new A.dv(new Float32Array(5376)),q=new A.dv(new Float32Array(5376)),p=new A.dv(new Float32Array(5376)),o=a.d,n=this.a.aH(a),m=o.a,l=o.b,k=o.c,j=n.c,i=k+j,h=n.a,g=m+h
h/=2
j/=2
r.fa(new A.i(m,l,k),new A.i(m,l,i),new A.i(g,l,i),new A.i(g,l,k),11053224,h,j)
l+=n.b
q.fa(new A.i(m,l,k),new A.i(g,l,k),new A.i(g,l,i),new A.i(m,l,i),12632256,h,j)
for(s=0;s<4;++s)this.fY(p,a,n,B.br[s])
m=this.b
return A.j([m.bU(B.r.bz(r.a,0,r.b),1),m.bU(B.r.bz(q.a,0,q.b),2),m.bU(B.r.bz(p.a,0,p.b),0)],t.t)},
fY(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a3===B.e||a3===B.h?a2.a:a2.c,a=A.j([],t.jX)
for(s=a1.a,r=this.a.aR(s),q=J.J(r.a),r=new A.aa(q,r.b,r.$ti.i("aa<1>"));r.l();){p=q.gq()
if(!p.as&&p.av(s)===a3)a.push(new A.bL(p.ap(s),p.ap(s)+p.w,0,p.x))}for(s=a1.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
if(n.b===a3){q=n.c
p=n.d
a.push(new A.bL(q,q+n.e,p,p+n.f))}}s=t.i
r=A.eJ([0,b],s)
for(q=a.length,p=t.u,o=0;o<a.length;a.length===q||(0,A.y)(a),++o){m=a[o]
r.V(0,A.j([m.a,m.b],p))}l=A.av(r,r.$ti.c)
B.a.a1(l)
s=A.eJ([0,a2.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.y)(a),++o){m=a[o]
s.V(0,A.j([m.c,m.d],p))}k=A.av(s,s.$ti.c)
B.a.a1(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.c(l,j)
f=l[j]
if(!(i<r))return A.c(l,i)
e=l[i]
if(!(h<s))return A.c(k,h)
d=k[h]
c=k[g]
if(B.a.ak(a,new A.ig(f,e,d,c)))continue
this.hO(a0,a1,a2,a3,f,e,d,c)}},
hO(a,b,c,d,e,f,g,h){var s,r,q,p=null,o=b.d,n=o.a,m=o.b,l=o.c
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
default:o=p}a.fb(s,r,q,o,9145227,e/2,(f-e)/2,g/2,(h-g)/2)},
fl(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.z
s=l.a
r=A.eJ([s],t.N)
for(n=n.aR(s),q=J.J(n.a),n=new A.aa(q,n.b,n.$ti.i("aa<1>"));n.l();){p=q.gq()
o=p.f7(s)
if(!(p.at&&!p.ax&&!p.z)||o==null||m.h(0,o)==null)continue
r.m(0,o)}return r},
ic(a,b){var s,r,q,p,o=this,n=o.fl(a),m=o.b,l=o.c
l===$&&A.f()
l=t.b3.a(l.j7(n,b))
s=t.A
m.ca=l.length<=4?A.ai(l,s):A.ai(A.ka(l,0,A.cW(4,"count",t.S),A.W(l).c),s)
for(l=n.gt(n),s=o.d;l.l();){r=s.h(0,l.gq())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.y)(r),++p)m.ie(r[p])}}}
A.ig.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:28}
A.bL.prototype={}
A.bV.prototype={
P(){return"FocusKind."+this.b}}
A.cp.prototype={}
A.hu.prototype={
he(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
n=o.a
if(q.O(n))throw A.d(A.a3("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){m=s[p]
n=m.a
if(q.O(n))throw A.d(A.a3("duplicate portal "+n))
q.k(0,n,m)}},
hM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.d(A.a3("3D room overlap: "+n.a+" and "+m.a))}},
hL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.r(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.y)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.y)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.dD(o,i,h,g,f,e)
a5.cX(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.y)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.a3(l+" references invalid portal "+d))
i=c.av(l)
h=c.ap(l)
g=c.w
f=c.x
a5.dD(o,i,h,g,0,f)
a5.cX(a6,l,c.av(l),c.ap(l),c.ap(l)+g,0,f)}}for(s=new A.L(a6,a6.$ti.i("L<1,2>")).gt(0);s.l();){b=s.d
a=b.b
r=J.bp(a)
r.Z(a,new A.hA())
for(a0=0;a0<r.gn(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gn(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.a3("overlapping apertures on "+b.a))}}},
dD(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.e||b===B.h
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.a3("aperture outside "+a.a+" "+b.b+" wall"))},
cX(a,b,c,d,e,f,g){J.fO(t.gz.a(a).iR(b+":"+c.b,new A.hz()),new A.dS([d,e,f,g]))},
aH(a){var s=a.c,r=this.r,q=a.a
return new A.i(s.a+r.fz(q),s.b+r.fA(q),s.c)},
aR(a){var s=this.c,r=A.W(s)
return new A.I(s,r.i("q(1)").a(new A.hB(a)),r.i("I<1>"))},
iQ(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.b2(a,"roomId","not a portal endpoint"))
r=this.aH(o)
q=b.ap(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.av(a).a){case 0:s=new A.i(s.a+q,p,s.c)
break
case 2:s=new A.i(s.a+q,p,s.c+r.c)
break
case 1:s=new A.i(s.a+r.a,p,s.c+q)
break
case 3:s=new A.i(s.a,p,s.c+q)
break
default:s=null}return s},
gj9(){return B.a.eX(this.b,0,new A.hC(),t.S)}}
A.hA.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.K(a.a[0],b.a[0])},
$S:29}
A.hz.prototype={
$0(){return A.j([],t.a3)},
$S:30}
A.hB.prototype={
$1(a){var s
t.gm.a(a)
s=this.a
return a.b===s||a.c===s},
$S:31}
A.hC.prototype={
$2(a,b){return A.a(a)+t.J.a(b).e.length},
$S:32}
A.hi.prototype={}
A.im.prototype={
fw(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.io())}else s=!1
return s}}
A.io.prototype={
$1(a){return t.hE.a(a).w},
$S:33}
A.bc.prototype={}
A.hw.prototype={
j7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.gi.a(a)
s=A.j([],t.bz)
for(r=a.gt(a),q=this.a.e;r.l();){p=q.h(0,r.gq())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.y)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.m(s,new A.bc(new A.i(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.hA(j),0.06))}}B.a.Z(s,new A.hx(b))
return A.ka(s,0,A.cW(4,"count",t.S),t.A).fe(0)},
hA(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.hx.prototype={
$2(a,b){var s=t.A
s.a(a)
s.a(b)
s=this.a
return B.d.K(a.a.U(0,s).gn(0),b.a.U(0,s).gn(0))},
$S:34}
A.bC.prototype={
P(){return"Facing."+this.b}}
A.aq.prototype={}
A.c4.prototype={
f7(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
av(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.b2(a,"roomId","not an endpoint of "+s.a))},
ap(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.b2(a,"roomId","not an endpoint of "+s.a))}}
A.aw.prototype={}
A.c6.prototype={}
A.ak.prototype={}
A.hy.prototype={
A(){var s,r,q,p,o,n=this,m=t.N,l=t.oP,k=A.r(m,l)
for(s=n.a,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0),r=t.y;s.l();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.M(["open",o.a,"locked",o.b],m,r))}l=A.r(m,l)
for(s=n.c,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0);s.l();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.M(["lit",o.a,"examined",o.b],m,r))}return A.M(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
hW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.ag(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)d.m(0,s[q].a)
r=A.ag(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.y)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.y)(n),++l)r.m(0,n[l].a)
e=A.ag(e)
for(q=0;q<p.length;p.length===n||(0,A.y)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.y)(o),++l)e.m(0,o[l].a)
o=f.a
n=!0
if(A.kD(new A.V(o,A.m(o).i("V<1>")),d)){d=f.b
if(A.kD(new A.V(d,A.m(d).i("V<1>")),r)){d=f.c
e=!A.kD(new A.V(d,A.m(d).i("V<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.aX)
e=f.d
if(e<0||e>2)A.B(B.aL)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.y)(s),++q){k=s[q]
j=o.h(0,k.a)
k.at=j.a
k.ax=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.y)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.y)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.y)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.dq.prototype={
A(){return A.M(["open",this.a,"locked",this.b],t.N,t.y)}}
A.dg.prototype={
A(){return A.M(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.hd.prototype={
$1(a){return this.a.B(0,A.x(a))},
$S:2}
A.bD.prototype={
P(){return"Hand."+this.b}}
A.iL.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.i:s},
cR(a,b){var s,r,q,p,o=A.j([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.eI.prototype={
A(){var s,r,q,p=t.N,o=A.r(p,t.v)
for(s=this.a,r=0;r<5;++r){q=B.j[r]
o.k(0,q,s.h(0,q))}return A.M(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.ax(B.j,t.ej.a(new A.hX(this)),t.dD).bl(0," \xb7 ")}}
A.hW.prototype={
$2(a,b){return new A.A(A.x(a),A.x(b),t.q)},
$S:36}
A.hX.prototype={
$1(a){return this.a.a.h(0,A.x(a))},
$S:15}
A.aE.prototype={
A(){var s,r,q,p=this,o=A.j([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)o.push(s[q].A())
s=p.r
s=s==null?null:s.A()
return A.M(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.hK.prototype={
aG(a){t.G.a(a)
return a.a===5&&B.a.a7(B.j,new A.hR(this,a))},
cY(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.aG(b))return null
s=this.e++
r=new A.aE(s,a,A.j([A.hV(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
bX(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.aG(b))return!1
B.a.m(s.c,A.hV(b,c,B.x))
return!0},
hS(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.aG(b))return!1
s.r=A.hV(b,0,B.a0)
return!0},
fq(a){var s,r,q,p
t.I.a(a)
s=this.d
B.a.I(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.O(p)&&!B.a.B(s,p))B.a.m(s,p)}},
j6(a){var s
if(!this.b.O(a))return!1
s=this.d
if(!B.a.B(s,a))B.a.m(s,a)
return!0},
A(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.av(n,A.m(n).c)
B.a.a1(n)
s=A.j([],t.bV)
for(r=q.b,r=new A.a_(r,r.r,r.e,A.m(r).i("a_<2>"));r.l();)s.push(r.d.A())
return A.M(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.hR.prototype={
$1(a){var s
A.x(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.B(this.a.a.h(0,a),s)},
$S:2}
A.ay.prototype={
P(){return"SleepQuality."+this.b}}
A.ap.prototype={
P(){return"SleepLocation."+this.b}}
A.cz.prototype={}
A.h6.prototype={
by(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
fC(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
A(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.j([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
i.push(A.M(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.M(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.h7.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:37}
A.h8.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:38}
A.eA.prototype={
P(){return"InteractionType."+this.b}}
A.cb.prototype={
P(){return"WorldComparisonKind."+this.b}}
A.iM.prototype={}
A.ca.prototype={}
A.eo.prototype={}
A.hD.prototype={}
A.hF.prototype={
cN(){var s,r,q,p=t.r,o=A.j([],p)
for(s=this.a.b,s=new A.a_(s,s.r,s.e,A.m(s).i("a_<2>")),r=this.b;s.l();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.j(o.slice(0),p)
B.a.Z(p,new A.hG())
return p},
i4(a,b){var s,r,q,p,o,n=b.b
if(n.gD(n))return B.ce
s=t.N
r=A.ag(s)
q=A.ag(s)
for(s=n.gJ(),s=s.gt(s),p=a.c;s.l();){o=s.gq()
if(B.a.gG(p).a.h(0,o)==n.h(0,o))r.m(0,o)
else q.m(0,o)}if(q.a!==0)return new A.ca(B.D,r)
s=r.a
o=B.a.gG(p).a
if(s===o.gn(o)){n=n.gn(n)
p=B.a.gG(p).a
p=n===p.gn(p)
n=p}else n=!1
if(n)return new A.ca(B.ak,r)
return new A.ca(B.O,r)},
hu(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.eo(e,!1,B.cd,null)
s=p.d===c
r=this.i4(p,d)
q.j6(e)
return new A.eo(e,s,r,r.a===B.D&&s?'The world says "'+d.c+'". The entry says "'+B.a.gG(p.c).p(0)+'".':null)},
i8(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.D)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.hD(B.a.gG(s.c).p(0)+" but "+A.w(a.f))}}
A.hG.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.K(s.a(b).a,a.a)},
$S:8}
A.aV.prototype={
P(){return"RuptureStep."+this.b}}
A.ih.prototype={}
A.bd.prototype={}
A.ii.prototype={
gfE(){var s=B.G.h(0,this.a)
return s==null?0:s},
fG(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.l)s=q.e
else s=!0
if(s)return B.a5
r=A.kw(b)
s=q.c
B.a.I(s)
B.a.V(s,r)
B.a.I(q.d)
q.a=B.y
q.b=0
q.e=!1
return A.j([B.av],t.Y)},
hU(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.a7("rupture advance must be a finite non-negative duration",null))
if(l.a===B.l||a===0)return B.a5
s=A.j([],t.Y)
r=a
for(;;){if(!(r>0&&l.a!==B.l))break
A:{q=l.a
p=B.G.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.t)l.hJ(s)
p=l.b
o=B.G.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.m(s,new A.bd())
if(q===B.t){l.a=B.l
l.b=0
l.e=!0
B.a.m(s,B.au)}else{p=q.a+1
if(!(p<7))return A.c(B.a4,p)
l.a=B.a4[p]
l.b=0
B.a.m(s,new A.bd())}}}return A.ai(s,t.k8)},
A(){var s=this,r=t.N
return A.M(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ai(s.c,r),"extinguishedMantles",A.ai(s.d,r),"completed",s.e],r,t.z)},
hJ(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.W(B.d.cw(l.b/l.gfE()*A.ai(s,r).length),0,A.ai(s,r).length)
p=l.d
for(;;){o=A.aU(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aU(s,!1,r)
o.$flags=3
n=o
o=A.aU(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.c(n,m)
B.a.m(p,n[m])
B.a.m(a,new A.bd())}}}
A.ew.prototype={
gbA(){var s=this.b
if(s<6||s>18)return 0
return B.d.W((s-6)/12,0,1)}}
A.jr.prototype={
$1(a){var s=B.c.b5(this.a,a)&255
return B.c.W(B.d.ag(s+((B.c.b5(this.b,a)&255)-s)*this.c),0,255)},
$S:40}
A.ir.prototype={
A(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.cB(g.a),e=t.N,d=A.r(e,t.a)
for(s=g.b,s=new A.L(s,A.m(s).i("L<1,2>")).gt(0);s.l();){r=s.d
q=r.a
d.k(0,q,g.hN(q,r.b))}s=A.cB(g.r)
q=A.cB(g.w)
p=A.cB(g.x)
o=A.r(e,t.l_)
for(n=g.as,n=new A.L(n,A.m(n).i("L<1,2>")).gt(0),m=t.hq;n.l();){l=n.d
k=l.a
j=A.j([],m)
for(i=J.J(l.b);i.l();){h=i.gq()
j.push(A.M(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.M(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
hN(a,b){var s,r=A.cB(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.cB(q.az(0,new A.is(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gE(s))r.k(0,"_ambient",A.cB(s.az(0,new A.it(),t.S,t.z)))
return r}}
A.is.prototype={
$2(a,b){return new A.A(A.a(a),t.ey.a(b).A(),t.iI)},
$S:63}
A.it.prototype={
$2(a,b){return new A.A(A.a(a),t.bR.a(b).A(),t.iI)},
$S:42}
A.c9.prototype={
A(){return A.M(["hour",this.a,"order",this.b],t.N,t.S)}}
A.c8.prototype={
A(){return A.M(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.dB.prototype={
A(){var s=t.N
return A.M(["field",this.a,"value",this.b],s,s)}}
A.iv.prototype={
aO(){var s=0,r=A.bm(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$aO=A.bn(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ad(A.bb(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$aO)
case 6:n=b
s=7
return A.ad(A.bb(A.b(n.text()),t.N),$async$aO)
case 7:m=b
l=A.qi(m)
j=J.as(l,"broadcasts")
j.toString
i=t.a
o.a=i.a(j)
j=J.as(l,"visitors")
j.toString
o.b=i.a(j)
j=J.as(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.as(l,"documents")
j.toString
i.a(j)
j=J.as(l,"street")
j.toString
i.a(j)
j=J.as(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.as(l,"nights")
j.toString
i.a(j)
j=J.as(l,"endings")
j.toString
o.w=i.a(j)
j=J.as(l,"records")
j.toString
i.a(j)
j=J.as(l,"cues")
j.toString
i.a(j)
j=J.as(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.a5(g)
j=A.w(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$aO,r)},
fk(a){var s,r,q,p=this.a
p===$&&A.f()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gM().cL(0,new A.iw())
r=p.$ti
q=t.N
q=A.r(q,q)
q.hR(new A.br(p,r.i("A<k,k>(1)").a(new A.ix()),r.i("br<1,A<k,k>>")))
return q}return null},
fn(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.f()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aq(p)||o!==B.d.aq(o))return n
return new A.c9(B.d.aq(p),B.d.aq(o))},
fm(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.f()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aq(p)||typeof o!="string"||typeof n!="string")return m
return new A.c8(B.d.aq(p),o,n)},
j8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.r(a1,t.iu),a3=A.r(a1,t.c_),a4=A.r(a1,t.d8),a5=t.h,a6=A.r(a1,t.iD),a7=b.b
a7===$&&A.f()
a7=new A.L(a7,A.m(a7).i("L<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(a7.l()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.r(a,a0)
for(o=o.gM(),o=o.gt(o);o.l();){m=o.gq()
l=m.a
k=typeof l=="string"?A.i6(l,null):null
if(k==null||!q.b(m.b))continue
j=A.r(a1,a1)
for(m=q.a(m.b).gM(),m=m.gt(m);m.l();){l=m.gq()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.x(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.r(a,r)
for(m=n.$ti.i("bF<1>"),l=new A.bF(n,n.r,n.e,m);l.l();){i=l.d
g=b.fn(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.r(a,s)
for(m=new A.bF(n,n.r,n.e,m);m.l();){l=m.d
e=b.fm(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.f()
a7=new A.L(a7,A.m(a7).i("L<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.l()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.j([],s)
for(m=J.J(d);m.l();){c=m.gq()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.dB(A.x(c.h(0,"field")),A.x(c.h(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.ir(A.r(a,a0),a2,a3,a4,A.r(a1,a5),A.r(a1,a5),A.r(a,a5),A.r(a,a5),A.r(a,a5),A.r(a1,a5),A.r(a1,a5),A.r(a1,a5),a6)}}
A.iw.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:43}
A.ix.prototype={
$1(a){t.d7.a(a)
return new A.A(A.x(a.a),A.x(a.b),t.q)},
$S:44}
A.fW.prototype={
cP(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.b(v.G.window).setTimeout(A.a1(new A.fX(this)),7000))}}
A.fX.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:45}
A.h1.prototype={
cJ(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.h9.prototype={
fN(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.G(a,k,"door-speaker",j)
l.b!==$&&A.p()
l.b=i
s=A.G(a,k,"door-line",j)
l.c!==$&&A.p()
l.c=s
r=l.a
A.b(r.appendChild(i))
A.b(r.appendChild(s))
s=A.G(a,k,"door-cite-list",j)
l.e!==$&&A.p()
l.e=s
i=A.G(a,k,"door-cite-result",j)
l.f!==$&&A.p()
l.f=i
A.b(r.appendChild(s))
A.b(r.appendChild(i))
for(i=A.fF,s=l.r,q=0;q<5;++q){p=B.bk[q]
o=A.b(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.ha(l,p)
if(typeof n=="function")A.B(A.a7("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.cZ()]=n
o.addEventListener("click",m)
A.b(r.appendChild(o))
B.a.m(s,o)}i=A.G(a,"button","door-continue","continue")
l.d!==$&&A.p()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.a1(new A.hb(l)))
A.b(r.appendChild(i))
A.b(A.e(a.body).appendChild(r))},
cQ(a,b){var s,r,q,p=this
p.z=!0
s=p.b
s===$&&A.f()
s.textContent=a
s=p.c
s===$&&A.f()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.y)(s),++q)A.b(s[q].style).display=""
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
bv(a){var s,r,q=this,p=q.c
p===$&&A.f()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.y)(p),++r)A.b(p[r].style).display="none"
p=q.d
p===$&&A.f()
A.b(p.style).display=""
p=q.f
p===$&&A.f()
p.textContent=""},
fu(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.f()
s.textContent=""
for(r=b.length,q=A.fF,p=0;p<b.length;b.length===r||(0,A.y)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.hc(o,this)
if(typeof o=="function")A.B(A.a7("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.cZ()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
bi(){var s,r=this
r.z=!1
s=r.e
s===$&&A.f()
s.textContent=""
s=r.f
s===$&&A.f()
s.textContent=""
r.a.className="door"},
siK(a){this.w=t.ov.a(a)},
siM(a){this.x=t.d.a(a)},
siL(a){this.y=t.bZ.a(a)}}
A.ha.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.hb.prototype={
$1(a){var s
A.b(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.hc.prototype={
$1(a){var s
A.b(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.hf.prototype={
fO(a){var s,r,q,p=this,o=p.a,n=A.G(o,"h1","journal-title",null)
p.f!==$&&A.p()
p.f=n
s=A.G(o,"div","ending-copy",null)
p.r!==$&&A.p()
p.r=s
r=p.b
A.b(r.appendChild(n))
A.b(r.appendChild(s))
q=A.G(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.a1(new A.hg(p)))
A.b(r.appendChild(q))},
fv(a,b){var s,r,q,p,o,n,m=this
t.h.a(b)
s=m.f
s===$&&A.f()
s.textContent=a.a.b
s=m.r
s===$&&A.f()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.y)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bp()},
siN(a){this.w=t.d.a(a)}}
A.hg.prototype={
$1(a){var s
A.b(a)
s=this.a
s.ae()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.hs.prototype={
fP(a){var s,r="help-copy",q=this.b,p=this.a
A.b(q.appendChild(A.G(p,"h1","journal-title","house notes")))
A.b(q.appendChild(A.G(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.b(q.appendChild(A.G(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.G(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.a1(new A.ht(this)))
A.b(q.appendChild(s))}}
A.ht.prototype={
$1(a){A.b(a)
return this.a.ae()},
$S:1}
A.hL.prototype={
h_(){var s,r=this,q=r.a,p=A.G(q,"div","page-turn",null),o=A.G(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a1(new A.hM(r)))
s=A.G(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a1(new A.hN(r)))
q=A.G(q,"span","right-day-label",null)
r.Q!==$&&A.p()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
dB(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.d3(s.CW+a,r)
s.dk()},
d3(a,b){if(a<1)return 1
if(a>b)return b
return a},
hw(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.f()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.f()
s.textContent=""
for(s=j.w.cN(),r=s.length,q=A.fF,p=j.a,o=0;o<s.length;s.length===r||(0,A.y)(s),++o){n=s[o]
m=B.a.gG(n.c).p(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.hO(j,n,l)
if(typeof m=="function")A.B(A.a7("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.cZ()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
dk(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.f()
s=t.r
r=A.j([],s)
for(q=j.f,p=q.b,o=A.m(p).i("a_<2>"),n=new A.a_(p,p.r,p.e,o),m=j.r;n.l();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Z(r,new A.hP())
j.dj(i,r)
i=j.Q
i===$&&A.f()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.f()
s=A.j([],s)
for(r=new A.a_(p,p.r,p.e,o);r.l();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Z(s,new A.hQ())
j.dj(i,s)
k=B.d.W(q.f/4,0,1)
i=j.as
i===$&&A.f()
A.b(i.style).setProperty("width",B.d.cI(k*100,1)+"%")},
dj(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.y)(b),++r)A.b(a.appendChild(this.ha(b[r])))},
ha(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.G(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.b(k.createElement("div"))
n.className=q
n.textContent=o
A.b(n.style).setProperty("--shake",B.d.p(p.b))
A.b(j.appendChild(n))}m=a.r
if(m!=null){l=this.hi(m,!1)
l.className=A.x(l.className)+" margin"
A.b(j.appendChild(l))}return j},
hi(a,b){var s=b?"hand-line struck":"hand-line",r=A.G(this.a,"div",s,a.p(0))
A.b(r.style).setProperty("--shake",B.d.p(a.b))
return r}}
A.hM.prototype={
$1(a){A.b(a)
return this.a.dB(-1)},
$S:1}
A.hN.prototype={
$1(a){A.b(a)
return this.a.dB(1)},
$S:1}
A.hO.prototype={
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
A.hP.prototype={
$2(a,b){var s=t.L
return B.c.K(s.a(a).a,s.a(b).a)},
$S:8}
A.hQ.prototype={
$2(a,b){var s=t.L
return B.c.K(s.a(a).a,s.a(b).a)},
$S:8}
A.dp.prototype={
aU(a){var s=this.b
s.className="panel"
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.e(this.a.body).appendChild(s))},
bp(){var s,r,q,p,o=this,n=o.b
if(B.b.B(A.x(n.className),"open"))return
s=$.i5
if(s!=null&&s!==o)s.ae()
$.i5=o
r=o.a
o.d=A.e(r.activeElement)
A.le(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.a1(o.ghr())
o.e=q
r.addEventListener("keydown",q)
p=A.mf(n)
if(p.length!==0)B.a.gaw(p).focus()},
ae(){var s,r,q=this,p=q.b
if(!B.b.B(A.x(p.className),"open"))return
p.className="panel"
if($.i5===q)$.i5=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
hs(a){A.b(a)
if(A.aC(a.defaultPrevented))return
if(A.x(a.code)==="Escape"){this.ae()
return}if(A.x(a.code)==="Tab")this.hI(a)},
hI(a){var s,r=A.mf(this.b)
if(r.length===0)return
s=A.e(this.a.activeElement)
if(A.aC(a.shiftKey)){if(s===B.a.gaw(r)||!B.a.B(r,s)){a.preventDefault()
B.a.gG(r).focus()}}else if(s===B.a.gG(r)||!B.a.B(r,s)){a.preventDefault()
B.a.gaw(r).focus()}},
sbo(a){this.c=t.d.a(a)}}
A.i7.prototype={
ft(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.ip.prototype={
fT(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.b(i.appendChild(A.G(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.G(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.G(a,"div","entry-picker",null)
for(r=A.fF,q=0;q<2;++q){p=B.a3[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.a8[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.iq(this,p,m)
if(typeof k=="function")A.B(A.a7("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.cZ()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
siO(a){this.f=t.as.a(a)}}
A.iq.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ae()},
$S:3}
A.b0.prototype={}
A.fT.prototype={
iZ(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.W(s)
q=new A.ax(s,r.i("k(1)").a(new A.fV()),r.i("ax<1,k>")).j4(0)
r=this.b
r.I(0)
s=J.nd(a,t.N)
p=s.$ti
r.V(0,new A.I(s,p.i("q(l.E)").a(q.gb7(q)),p.i("I<l.E>")))},
ig(a,b){var s,r,q,p,o,n=A.j([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.B(0,o.a))n.push(o)}return n}}
A.fV.prototype={
$1(a){return t.c.a(a).a},
$S:47}
A.fU.prototype={
$2(a,b){var s,r=t.c
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.K(r,s):B.c.K(a.c,b.c)},
$S:48}
A.fb.prototype={
iC(a){return this.c.B(0,t.g.a(a))},
iX(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a7(0,j.gi6())||!a.a.a7(0,new A.iJ(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.B(0,r)){o=s.c
if(o!==B.C){n=s.d
if(n<J.aP(p)){o=o===B.o
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.p}else j=!1}}}if(j)return!1
m=new A.fa(r,s.b,A.ai(p,t.w),B.o)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.I(0)
j.V(0,a.a)
j=l.c
j.I(0)
j.V(0,k)
l.e=m
return!0},
dF(a){var s=this.a,r=A.m(s).i("V<1>"),q=r.i("I<l.E>")
s=A.av(new A.I(new A.V(s,r),r.i("q(l.E)").a(new A.iG(a)),q),q.i("l.E"))
B.a.Z(s,new A.iH())
return s},
hY(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.c9
s=m.a.h(0,a)
if(s==null)return B.ca
r=B.c.H(a.b-1,7)
q=a.a
p=m.b.B(0,q)||r+1>=3||m.f?B.L:B.u
o=p===B.u&&m.r.B(0,q)&&s.O(B.M)?B.M:p
if(s.O(o))n=o
else n=s.O(B.u)?B.u:B.L
r=s.h(0,n)
r.toString
r=new A.fa(a,n,A.ai(r,t.w),B.o)
m.e=r
return new A.f9(r)},
i1(a){var s,r,q,p,o,n=this.e
if(n==null)return B.aj
if(n.d!==B.o)return B.c7
n.e=a
s=a===B.p
n.d=s?B.C:B.A
r=this.d
q=s?B.ah:B.bT
p=n.a
o=p.a
p=p.b
B.a.m(r,new A.bw(q,o,p,a,null))
if(a===B.w)B.a.m(r,new A.bw(B.bW,o,p,a,null))
if(s)this.dl(n)
return new A.f8(n)},
hV(){var s,r=this.e
if(r==null)return B.aj
s=r.d
if(s!==B.A&&s!==B.B)return B.c8
r.d=B.B
if(++r.f>=r.c.length){r.d=B.C
this.dl(r)
return new A.dA(r,!0)}return new A.dA(r,!1)},
i2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.A&&s!==B.B}else s=!0
if(s)return i
r=h.gb9()
if(r==null)return i
s=t.N
q=A.r(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.c(o,p)
p=o[p].c}else p=B.a6
p=J.J(p)
while(p.l()){o=p.gq()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.en(q,s,s)
m=c.hu(!0,!0,o,new A.iM(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.D){B.a.m(this.d,new A.bw(B.bV,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gG(j.c)
s=A.lj(s,s)
s.V(0,o.a)
s.V(0,q)
p.hS(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ak)if(k===B.O){s=n.b
s=s.gE(s)}else s=!1
else s=!0
if(s)B.a.m(this.d,new A.bw(B.bU,o,p.b,i,l))}}return m},
dl(a){var s=a.a
this.b.m(0,s.a)
this.c.m(0,s)
this.e=null},
sfF(a){this.r=t.gi.a(a)}}
A.iJ.prototype={
$1(a){var s=this.a.a
return new A.V(s,A.m(s).i("V<1>")).ak(0,new A.iI(A.x(a)))},
$S:2}
A.iI.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:9}
A.iG.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:9}
A.iH.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.K(a.c,b.c)
return s!==0?s:B.c.K(a.d,b.d)},
$S:50}
A.iF.prototype={
$2(a,b){var s=t.w
return B.c.K(s.a(a).a,s.a(b).a)},
$S:51}
A.fc.prototype={}
A.fr.prototype={}
A.jD.prototype={
$1(a){return B.b.T(A.x(a),"off.")},
$S:2}
A.at.prototype={
P(){return"DoorChoice."+this.b}}
A.aH.prototype={
P(){return"VisitPhase."+this.b}}
A.aI.prototype={
P(){return"VisitTier."+this.b}}
A.bJ.prototype={
P(){return"VisitorFactKind."+this.b}}
A.bw.prototype={
A(){var s,r=this,q=A.r(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.bg.prototype={
P(){return"VisitorIssueCode."+this.b}}
A.aJ.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aJ&&b.a===this.a&&b.b===this.b},
gC(a){return A.cu(this.a,this.b,B.f,B.f)}}
A.aW.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aW&&b.a===this.a&&b.b===this.b},
gC(a){return A.cu(this.a,this.b,B.f,B.f)}}
A.az.prototype={
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.az&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gC(a){var s=this
return A.cu(s.a,s.b,s.c,s.d)},
A(){var s=this
return A.M(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.fd.prototype={
A(){var s,r,q,p=this.a
p=A.av(p,A.m(p).c)
B.a.a1(p)
s=this.b
r=A.m(s)
q=r.i("bU<1,D<k,@>>")
s=A.av(new A.bU(s,r.i("D<k,@>(1)").a(new A.iE()),q),q.i("l.E"))
r=this.c
return A.M(["contacted",p,"resolved",s,"active",r==null?null:r.A()],t.N,t.z)}}
A.iE.prototype={
$1(a){return t.g.a(a).A()},
$S:52}
A.ed.prototype={
A(){var s=this,r=s.a.A(),q=s.e
q=q==null?null:q.b
return A.M(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.fQ.prototype={
$1(a){return t.p.a(a).b===this.a},
$S:53}
A.fR.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:54}
A.fS.prototype={
$1(a){return t.V.a(a).b===this.a},
$S:55}
A.fa.prototype={
gb9(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
s=r[s].b}else s=null
return s}}
A.iK.prototype={}
A.aA.prototype={}
A.f9.prototype={}
A.f8.prototype={}
A.dA.prototype={}
A.jL.prototype={
$1(a){var s
try{A.l8(a,this.a)
return!0}catch(s){if(A.a5(s) instanceof A.C)return!1
else throw s}},
$S:56}
A.jM.prototype={
$0(){$.aB=null
$.aK.j().af($.a4.j())},
$S:0}
A.jN.prototype={
$2(a,b){var s,r,q,p,o
if($.N.j().gah().a===21){A.mt(!1)
return}s=$.a0.j().r.b
$.N.j().fB(a,b,$.aL)
r=$.a0.j().r.b
q=s
for(;;){p=q
o=r
if(typeof p!=="number")return p.bu()
if(typeof o!=="number")return A.fJ(o)
if(!(p<o))break
p=$.kt
if(p!=null){if($.a0.b===$.a0)A.B(A.au(""))
p.iT(B.a.h(B.n,q).b)}p=q
if(typeof p!=="number")return p.a_()
q=p+1}A.kE("saved after sleep")},
$S:57}
A.jP.prototype={
$0(){$.aB=null
$.aK.j().af($.a4.j())},
$S:0}
A.jQ.prototype={
$0(){$.aB=null
$.aK.j().af($.a4.j())},
$S:0}
A.jR.prototype={
$0(){$.aB=null},
$S:0}
A.jS.prototype={
$0(){$.aB=null},
$S:0}
A.jT.prototype={
$1(a){A.b(a)
return A.ms()},
$S:1}
A.jU.prototype={
$1(a){var s,r
A.b(a)
if(A.x(a.code)==="KeyP"&&!A.aC(a.repeat))$.kA=!$.kA
if(A.x(a.code)==="KeyR"&&!A.aC(a.repeat)&&$.mz){s=$.cR
if(s!=null)s.aA()}if(A.x(a.code)==="KeyJ"&&!A.aC(a.repeat)&&!$.ab.j().z){s=$.aB
if(s==null){$.aB=$.cN.j()
s=$.cN.j()
s.fJ()
r=s.r.a-1
if(r<1)r=1
s.CW=s.d3(s.CW,r)
s.hw()
s.dk()}else if(s===$.cN.j())$.cN.j().ae()}if(A.x(a.code)==="KeyL"&&!A.aC(a.repeat)&&!$.ab.j().z){s=$.aB
if(s==null){$.aB=$.fD.j()
$.fD.j().bp()}else if(s===$.fD.j())$.fD.j().ae()}if(A.x(a.code)==="KeyH"&&!A.aC(a.repeat)&&!$.ab.j().z){s=$.aB
if(s==null){$.aB=$.fB.j()
$.fB.j().bp()}else if(s===$.fB.j())$.fB.j().ae()}if(A.x(a.code)==="KeyK"&&!A.aC(a.repeat))A.kE("saved")},
$S:3}
A.jV.prototype={
$1(a){A.b(a)
return A.m6()},
$S:1}
A.jW.prototype={
$1(a){A.b(a)
return A.m6()},
$S:1}
A.jO.prototype={
$1(a){A.b(a)
return $.aK.j().af($.a4.j())},
$S:1}
A.jp.prototype={
$1(a){var s=A.x(A.b(a).message)
A.jt(s,null)},
$S:3}
A.jq.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.jt("unhandled rejection: "+A.w(s==null?A.x(a.type):s),null)},
$S:3}
A.jw.prototype={
$1(a){this.a.className=""},
$S:58}
A.ju.prototype={
$1(a){return t.L.a(a).e},
$S:16};(function aliases(){var s=J.bE.prototype
s.fI=s.p
s=A.l.prototype
s.fH=s.cL
s=A.dp.prototype
s.fJ=s.bp})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._instance_1u,p=hunkHelpers._static_1,o=hunkHelpers._static_0
s(J,"pA","nV",17)
r(J.o.prototype,"gb7","B",7)
q(A.aT.prototype,"gi6","O",7)
p(A,"qa","oy",4)
p(A,"qb","oz",4)
p(A,"qc","oA",4)
o(A,"mB","pY",0)
s(A,"qd","nZ",17)
r(A.bh.prototype,"gb7","B",7)
p(A,"qg","pl",5)
var n
q(n=A.ez.prototype,"ghj","hk",1)
q(n,"ghl","hm",1)
q(n,"ghp","hq",1)
q(n,"ghn","ho",1)
p(A,"qI","md",5)
q(A.dp.prototype,"ghr","hs",1)
q(A.fb.prototype,"giB","iC",9)
p(A,"mH","pP",61)
p(A,"qB","pi",62)
o(A,"qD","pk",0)
p(A,"qC","pj",41)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.k3,J.eB,A.dt,J.bQ,A.l,A.d1,A.bB,A.K,A.z,A.ik,A.c0,A.c2,A.aa,A.dC,A.Q,A.bf,A.aX,A.cs,A.cm,A.cf,A.bs,A.iy,A.i4,A.d6,A.dU,A.E,A.hY,A.bF,A.a_,A.df,A.iT,A.jf,A.b5,A.fl,A.fy,A.jc,A.ff,A.dV,A.af,A.fh,A.cc,A.U,A.fg,A.fw,A.e4,A.dJ,A.fp,A.cg,A.dM,A.e0,A.fz,A.bS,A.ep,A.j8,A.jg,A.bT,A.fj,A.eT,A.du,A.iU,A.C,A.A,A.P,A.fx,A.al,A.e2,A.iA,A.fu,A.i3,A.fm,A.cE,A.er,A.eg,A.h3,A.hj,A.f0,A.hq,A.ex,A.ez,A.eK,A.c3,A.i2,A.dv,A.i8,A.id,A.iN,A.dH,A.fv,A.fs,A.fq,A.il,A.i,A.h2,A.es,A.he,A.cn,A.eV,A.cx,A.ij,A.c5,A.ev,A.hn,A.hm,A.ei,A.eL,A.dE,A.fe,A.d8,A.hv,A.ie,A.bL,A.cp,A.hu,A.hi,A.im,A.bc,A.hw,A.aq,A.c4,A.aw,A.c6,A.ak,A.hy,A.dq,A.dg,A.iL,A.eI,A.aE,A.hK,A.cz,A.h6,A.iM,A.ca,A.eo,A.hD,A.hF,A.ih,A.bd,A.ii,A.ew,A.ir,A.c9,A.c8,A.dB,A.iv,A.fW,A.h1,A.h9,A.dp,A.i7,A.b0,A.fT,A.fb,A.iK,A.bw,A.aJ,A.aW,A.az,A.fd,A.ed,A.fa])
q(J.eB,[J.eD,J.db,J.dc,J.cq,J.cr,J.bY,J.bZ])
q(J.dc,[J.bE,J.o,A.bG,A.dk])
q(J.bE,[J.eU,J.c7,J.bq])
r(J.eC,A.dt)
r(J.hJ,J.o)
q(J.bY,[J.da,J.eE])
q(A.l,[A.bK,A.t,A.br,A.I,A.b6,A.ce,A.cJ])
q(A.bK,[A.bR,A.e5])
r(A.dG,A.bR)
r(A.dF,A.e5)
q(A.bB,[A.ek,A.ej,A.f1,A.jG,A.jI,A.iP,A.iO,A.jl,A.hk,A.j2,A.j4,A.i_,A.j6,A.jY,A.jZ,A.jA,A.h_,A.hr,A.ic,A.hh,A.ho,A.hp,A.h4,A.ig,A.hB,A.io,A.hd,A.hX,A.hR,A.h7,A.h8,A.jr,A.iw,A.ix,A.fX,A.ha,A.hb,A.hc,A.hg,A.ht,A.hM,A.hN,A.hO,A.iq,A.fV,A.iJ,A.iI,A.iG,A.jD,A.iE,A.fQ,A.fR,A.fS,A.jL,A.jT,A.jU,A.jV,A.jW,A.jO,A.jp,A.jq,A.jw,A.ju])
q(A.ek,[A.iS,A.h5,A.hS,A.jH,A.jm,A.jz,A.hl,A.j3,A.hZ,A.i0,A.j9,A.iC,A.iB,A.hA,A.hC,A.hx,A.hW,A.hG,A.is,A.it,A.hP,A.hQ,A.fU,A.iH,A.iF,A.jN])
r(A.b3,A.dF)
q(A.K,[A.c_,A.bu,A.eF,A.f3,A.eY,A.fk,A.de,A.ee,A.b1,A.dz,A.f2,A.cA,A.em])
r(A.cC,A.z)
r(A.el,A.cC)
q(A.t,[A.ah,A.V,A.aG,A.L,A.cd,A.dL])
q(A.ah,[A.dx,A.ax,A.fo])
r(A.bU,A.br)
q(A.aX,[A.cF,A.cG,A.cH])
r(A.dR,A.cF)
r(A.cI,A.cG)
r(A.dS,A.cH)
r(A.cK,A.cs)
r(A.bI,A.cK)
r(A.d2,A.bI)
q(A.cm,[A.aQ,A.d7])
q(A.bs,[A.d3,A.dT,A.e1])
r(A.d4,A.d3)
r(A.dn,A.bu)
q(A.f1,[A.f_,A.cl])
q(A.E,[A.aT,A.dI,A.fn])
r(A.dd,A.aT)
r(A.ct,A.bG)
q(A.dk,[A.eM,A.a8])
q(A.a8,[A.dN,A.dP])
r(A.dO,A.dN)
r(A.di,A.dO)
r(A.dQ,A.dP)
r(A.dj,A.dQ)
q(A.di,[A.dh,A.eN])
q(A.dj,[A.eO,A.eP,A.eQ,A.eR,A.eS,A.dl,A.dm])
r(A.dW,A.fk)
q(A.ej,[A.iQ,A.iR,A.jd,A.iV,A.iZ,A.iY,A.iX,A.iW,A.j1,A.j0,A.j_,A.jb,A.jv,A.ji,A.jh,A.ib,A.hz,A.jM,A.jP,A.jQ,A.jR,A.jS])
r(A.dD,A.fh)
r(A.ft,A.e4)
r(A.dK,A.dI)
r(A.bh,A.dT)
r(A.dy,A.e1)
q(A.bS,[A.eh,A.et,A.eG])
q(A.ep,[A.h0,A.hU,A.hT,A.iD])
r(A.eH,A.de)
r(A.j7,A.j8)
r(A.f6,A.et)
q(A.b1,[A.cw,A.ey])
r(A.fi,A.e2)
r(A.ia,A.iN)
r(A.i9,A.ia)
q(A.fj,[A.aR,A.bX,A.bV,A.bC,A.bD,A.ay,A.ap,A.eA,A.cb,A.aV,A.at,A.aH,A.aI,A.bJ,A.bg])
q(A.dp,[A.hf,A.hs,A.hL,A.ip])
q(A.iK,[A.fc,A.fr,A.aA,A.f9,A.f8,A.dA])
s(A.cC,A.bf)
s(A.e5,A.z)
s(A.dN,A.z)
s(A.dO,A.Q)
s(A.dP,A.z)
s(A.dQ,A.Q)
s(A.cK,A.e0)
s(A.e1,A.fz)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",n:"double",am:"num",k:"String",q:"bool",P:"Null",u:"List",v:"Object",D:"Map",F:"JSObject"},mangledNames:{},types:["~()","~(F)","q(k)","P(F)","~(~())","@(@)","~(@)","q(v?)","h(aE,aE)","q(az)","@(k)","P(@)","P()","~(v?,v?)","@()","k?(k)","q(aE)","h(@,@)","~(h,@)","aS<P>(A<k,k>)","q(F)","P(~())","F()","~(v,be)","q(aR)","q(ak)","P(v,be)","q(c6)","q(bL)","h(+(n,n,n,n),+(n,n,n,n))","u<+(n,n,n,n)>()","q(c4)","h(h,ak)","q(aq)","h(bc,bc)","~(@,@)","A<k,k>(k,@)","q(ay)","q(ap)","@(@,k)","h(h)","~(h)","A<h,@>(h,c8)","q(A<@,@>)","A<k,k>(A<@,@>)","k(v?)","P(@,be)","k(b0)","h(b0,b0)","D<k,k>(D<k,k>,k)","h(az,az)","h(aW,aW)","D<k,@>(az)","q(aI)","q(aH)","q(at)","q(cx)","~(ay,ap)","P(v?)","0&(k,h?)","v?(v?)","~(am)","~(k)","A<h,@>(h,c9)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.dR&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.cI&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.dS&&A.qF(a,b.a)}}
A.oT(v.typeUniverse,JSON.parse('{"eU":"bE","c7":"bE","bq":"bE","qU":"bG","o":{"u":["1"],"t":["1"],"F":[],"l":["1"]},"eD":{"q":[],"H":[]},"db":{"P":[],"H":[]},"dc":{"F":[]},"bE":{"F":[]},"eC":{"dt":[]},"hJ":{"o":["1"],"u":["1"],"t":["1"],"F":[],"l":["1"]},"bQ":{"O":["1"]},"bY":{"n":[],"am":[],"b4":["am"]},"da":{"n":[],"h":[],"am":[],"b4":["am"],"H":[]},"eE":{"n":[],"am":[],"b4":["am"],"H":[]},"bZ":{"k":[],"b4":["k"],"lm":[],"H":[]},"bK":{"l":["2"]},"d1":{"O":["2"]},"bR":{"bK":["1","2"],"l":["2"],"l.E":"2"},"dG":{"bR":["1","2"],"bK":["1","2"],"t":["2"],"l":["2"],"l.E":"2"},"dF":{"z":["2"],"u":["2"],"bK":["1","2"],"t":["2"],"l":["2"]},"b3":{"dF":["1","2"],"z":["2"],"u":["2"],"bK":["1","2"],"t":["2"],"l":["2"],"l.E":"2","z.E":"2"},"c_":{"K":[]},"el":{"z":["h"],"bf":["h"],"u":["h"],"t":["h"],"l":["h"],"z.E":"h","bf.E":"h"},"t":{"l":["1"]},"ah":{"t":["1"],"l":["1"]},"dx":{"ah":["1"],"t":["1"],"l":["1"],"ah.E":"1","l.E":"1"},"c0":{"O":["1"]},"br":{"l":["2"],"l.E":"2"},"bU":{"br":["1","2"],"t":["2"],"l":["2"],"l.E":"2"},"c2":{"O":["2"]},"ax":{"ah":["2"],"t":["2"],"l":["2"],"ah.E":"2","l.E":"2"},"I":{"l":["1"],"l.E":"1"},"aa":{"O":["1"]},"b6":{"l":["1"],"l.E":"1"},"dC":{"O":["1"]},"cC":{"z":["1"],"bf":["1"],"u":["1"],"t":["1"],"l":["1"]},"dR":{"cF":[],"aX":[]},"cI":{"cG":[],"aX":[]},"dS":{"cH":[],"aX":[]},"d2":{"bI":["1","2"],"cK":["1","2"],"cs":["1","2"],"e0":["1","2"],"D":["1","2"]},"cm":{"D":["1","2"]},"aQ":{"cm":["1","2"],"D":["1","2"]},"ce":{"l":["1"],"l.E":"1"},"cf":{"O":["1"]},"d7":{"cm":["1","2"],"D":["1","2"]},"d3":{"bs":["1"],"cy":["1"],"t":["1"],"l":["1"]},"d4":{"d3":["1"],"bs":["1"],"cy":["1"],"t":["1"],"l":["1"]},"dn":{"bu":[],"K":[]},"eF":{"K":[]},"f3":{"K":[]},"dU":{"be":[]},"bB":{"bW":[]},"ej":{"bW":[]},"ek":{"bW":[]},"f1":{"bW":[]},"f_":{"bW":[]},"cl":{"bW":[]},"eY":{"K":[]},"aT":{"E":["1","2"],"k5":["1","2"],"D":["1","2"],"E.K":"1","E.V":"2"},"V":{"t":["1"],"l":["1"],"l.E":"1"},"bF":{"O":["1"]},"aG":{"t":["1"],"l":["1"],"l.E":"1"},"a_":{"O":["1"]},"L":{"t":["A<1,2>"],"l":["A<1,2>"],"l.E":"A<1,2>"},"df":{"O":["A<1,2>"]},"dd":{"aT":["1","2"],"E":["1","2"],"k5":["1","2"],"D":["1","2"],"E.K":"1","E.V":"2"},"cF":{"aX":[]},"cG":{"aX":[]},"cH":{"aX":[]},"ct":{"bG":[],"F":[],"H":[]},"bG":{"F":[],"H":[]},"dk":{"F":[]},"eM":{"F":[],"H":[]},"a8":{"aF":["1"],"F":[]},"di":{"z":["n"],"a8":["n"],"u":["n"],"aF":["n"],"t":["n"],"F":[],"l":["n"],"Q":["n"]},"dj":{"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"]},"dh":{"k1":[],"z":["n"],"a8":["n"],"u":["n"],"aF":["n"],"t":["n"],"F":[],"l":["n"],"Q":["n"],"H":[],"z.E":"n","Q.E":"n"},"eN":{"z":["n"],"a8":["n"],"u":["n"],"aF":["n"],"t":["n"],"F":[],"l":["n"],"Q":["n"],"H":[],"z.E":"n","Q.E":"n"},"eO":{"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"],"H":[],"z.E":"h","Q.E":"h"},"eP":{"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"],"H":[],"z.E":"h","Q.E":"h"},"eQ":{"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"],"H":[],"z.E":"h","Q.E":"h"},"eR":{"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"],"H":[],"z.E":"h","Q.E":"h"},"eS":{"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"],"H":[],"z.E":"h","Q.E":"h"},"dl":{"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"],"H":[],"z.E":"h","Q.E":"h"},"dm":{"kb":[],"z":["h"],"a8":["h"],"u":["h"],"aF":["h"],"t":["h"],"F":[],"l":["h"],"Q":["h"],"H":[],"z.E":"h","Q.E":"h"},"fk":{"K":[]},"dW":{"bu":[],"K":[]},"dV":{"O":["1"]},"cJ":{"l":["1"],"l.E":"1"},"af":{"K":[]},"dD":{"fh":["1"]},"U":{"aS":["1"]},"e4":{"lH":[]},"ft":{"e4":[],"lH":[]},"dI":{"E":["1","2"],"D":["1","2"]},"dK":{"dI":["1","2"],"E":["1","2"],"D":["1","2"],"E.K":"1","E.V":"2"},"cd":{"t":["1"],"l":["1"],"l.E":"1"},"dJ":{"O":["1"]},"bh":{"bs":["1"],"lk":["1"],"cy":["1"],"t":["1"],"l":["1"]},"cg":{"O":["1"]},"z":{"u":["1"],"t":["1"],"l":["1"]},"E":{"D":["1","2"]},"dL":{"t":["2"],"l":["2"],"l.E":"2"},"dM":{"O":["2"]},"cs":{"D":["1","2"]},"bI":{"cK":["1","2"],"cs":["1","2"],"e0":["1","2"],"D":["1","2"]},"bs":{"cy":["1"],"t":["1"],"l":["1"]},"dT":{"bs":["1"],"cy":["1"],"t":["1"],"l":["1"]},"dy":{"bs":["1"],"fz":["1"],"cy":["1"],"t":["1"],"l":["1"]},"fn":{"E":["k","@"],"D":["k","@"],"E.K":"k","E.V":"@"},"fo":{"ah":["k"],"t":["k"],"l":["k"],"ah.E":"k","l.E":"k"},"eh":{"bS":["u<h>","k"]},"et":{"bS":["k","u<h>"]},"de":{"K":[]},"eH":{"K":[]},"eG":{"bS":["v?","k"]},"f6":{"bS":["k","u<h>"]},"bT":{"b4":["bT"]},"n":{"am":[],"b4":["am"]},"h":{"am":[],"b4":["am"]},"u":{"t":["1"],"l":["1"]},"am":{"b4":["am"]},"k":{"b4":["k"],"lm":[]},"fj":{"an":[]},"ee":{"K":[]},"bu":{"K":[]},"b1":{"K":[]},"cw":{"K":[]},"ey":{"K":[]},"dz":{"K":[]},"f2":{"K":[]},"cA":{"K":[]},"em":{"K":[]},"eT":{"K":[]},"du":{"K":[]},"fx":{"be":[]},"al":{"ok":[]},"e2":{"f4":[]},"fu":{"f4":[]},"fi":{"f4":[]},"fm":{"k8":[]},"cE":{"k8":[]},"aR":{"an":[]},"bX":{"an":[]},"bV":{"an":[]},"bC":{"an":[]},"bD":{"an":[]},"ay":{"an":[]},"ap":{"an":[]},"eA":{"an":[]},"cb":{"an":[]},"aV":{"an":[]},"at":{"an":[]},"aH":{"an":[]},"aI":{"an":[]},"bJ":{"an":[]},"bg":{"an":[]},"nR":{"u":["h"],"t":["h"],"l":["h"]},"kb":{"u":["h"],"t":["h"],"l":["h"]},"oo":{"u":["h"],"t":["h"],"l":["h"]},"nP":{"u":["h"],"t":["h"],"l":["h"]},"om":{"u":["h"],"t":["h"],"l":["h"]},"nQ":{"u":["h"],"t":["h"],"l":["h"]},"on":{"u":["h"],"t":["h"],"l":["h"]},"k1":{"u":["n"],"t":["n"],"l":["n"]},"nL":{"u":["n"],"t":["n"],"l":["n"]}}'))
A.oS(v.typeUniverse,JSON.parse('{"cC":1,"e5":2,"a8":1,"dT":1,"e1":1,"ep":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ae
return{c:s("b0"),n:s("af"),f5:s("eg"),U:s("b4<@>"),D:s("aQ<k,k>"),ml:s("bT"),V:s("at"),gt:s("t<@>"),k:s("aR"),L:s("aE"),C:s("K"),Z:s("bW"),mj:s("aS<P>"),bU:s("bD"),lv:s("ex<v>"),bq:s("l<k>"),id:s("l<n>"),e7:s("l<@>"),fm:s("l<h>"),od:s("o<b0>"),ag:s("o<es>"),r:s("o<aE>"),iw:s("o<aS<~>>"),mc:s("o<ev>"),oX:s("o<qT<v>>"),W:s("o<F>"),b1:s("o<eI>"),cs:s("o<aw>"),ic:s("o<D<k,v>>"),hq:s("o<D<k,k>>"),bV:s("o<D<k,@>>"),kS:s("o<eK>"),mm:s("o<c3>"),bz:s("o<bc>"),aN:s("o<c4>"),fR:s("o<+(h,k)>"),a3:s("o<+(n,n,n,n)>"),kl:s("o<ak>"),Y:s("o<bd>"),b2:s("o<cz>"),jn:s("o<c6>"),s:s("o<k>"),aA:s("o<f0>"),hL:s("o<i>"),cF:s("o<dB>"),bl:s("o<bw>"),ah:s("o<aW>"),E:s("o<aq>"),jX:s("o<bL>"),df:s("o<q>"),u:s("o<n>"),b:s("o<@>"),t:s("o<h>"),kC:s("o<F?>"),dM:s("o<v?>"),T:s("db"),m:s("F"),d4:s("F()"),dY:s("bq"),dX:s("aF<@>"),bY:s("u<aE>"),l_:s("u<D<k,k>>"),b3:s("u<bc>"),jz:s("u<+(h,k)>"),ge:s("u<+(n,n,n,n)>"),io:s("u<bd>"),h:s("u<k>"),iD:s("u<dB>"),ee:s("u<bw>"),eU:s("u<aW>"),dz:s("u<dH>"),j:s("u<@>"),I:s("u<h>"),e:s("dg"),q:s("A<k,k>"),d7:s("A<@,@>"),iI:s("A<h,@>"),G:s("D<k,k>"),oP:s("D<k,q>"),a:s("D<k,@>"),f:s("D<@,@>"),d8:s("D<h,c8>"),c_:s("D<h,c9>"),gz:s("D<k,u<+(n,n,n,n)>>"),kz:s("D<aI,u<aW>>"),iu:s("D<h,D<k,k>>"),dD:s("ax<k,k?>"),eb:s("ct"),P:s("P"),K:s("v"),A:s("bc"),gm:s("c4"),ku:s("dq"),lZ:s("qV"),aK:s("+()"),iL:s("+(k,F)"),cW:s("+(n,n,n,n)"),J:s("ak"),k8:s("bd"),gi:s("cy<k>"),m9:s("ap"),gC:s("ay"),ad:s("cz"),l:s("be"),fO:s("c6"),N:s("k"),aJ:s("H"),do:s("bu"),cx:s("c7"),ph:s("bI<k,k>"),R:s("f4"),b9:s("i"),g:s("az"),nq:s("aH"),p:s("aI"),bR:s("c8"),ey:s("c9"),mv:s("bw"),w:s("aW"),cq:s("aA"),bn:s("I<at>"),ns:s("I<aR>"),nO:s("I<ap>"),am:s("I<ay>"),nn:s("I<k>"),cB:s("I<aH>"),na:s("I<aI>"),lS:s("b6<k>"),hE:s("aq"),fH:s("dH"),_:s("U<@>"),mp:s("dK<v?,v?>"),hZ:s("fq"),fg:s("bL"),ln:s("fr"),fw:s("fs"),hX:s("fv"),y:s("q"),hg:s("q(at)"),gl:s("q(aR)"),iW:s("q(v)"),aZ:s("q(ap)"),gw:s("q(ay)"),gS:s("q(k)"),bQ:s("q(aH)"),nw:s("q(aI)"),i:s("n"),z:s("@"),mY:s("@()"),x:s("@(v)"),Q:s("@(v,be)"),S:s("h"),gK:s("aS<P>?"),B:s("F?"),lH:s("u<@>?"),X:s("v?"),v:s("k?"),ej:s("k?(k)"),F:s("cc<@,@>?"),O:s("fp?"),fU:s("q?"),hK:s("q(cx)?"),dA:s("n?"),aV:s("h?"),jh:s("am?"),d:s("~()?"),as:s("~(ay,ap)?"),ov:s("~(k)?"),bZ:s("~(h)?"),o:s("am"),H:s("~"),M:s("~()"),lc:s("~(k,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bc=J.eB.prototype
B.a=J.o.prototype
B.c=J.da.prototype
B.d=J.bY.prototype
B.b=J.bZ.prototype
B.bd=J.bq.prototype
B.be=J.dc.prototype
B.r=A.dh.prototype
B.ac=A.dm.prototype
B.ad=J.eU.prototype
B.K=J.c7.prototype
B.cf=new A.h0()
B.al=new A.eh()
B.P=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.am=function() {
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
B.ar=function(getTagFallback) {
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
B.an=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aq=function(hooks) {
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
B.ap=function(hooks) {
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
B.ao=function(hooks) {
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
B.Q=function(hooks) { return hooks; }

B.E=new A.eG()
B.as=new A.v()
B.at=new A.eT()
B.au=new A.bd()
B.y=new A.aV(1,"gradeLUT")
B.av=new A.bd()
B.aw=new A.ih()
B.ax=new A.ij()
B.f=new A.ik()
B.R=new A.f6()
B.S=new A.fm()
B.k=new A.ft()
B.v=new A.fx()
B.w=new A.at(0,"open")
B.T=new A.at(1,"chain")
B.U=new A.at(2,"throughDoor")
B.V=new A.at(3,"letterbox")
B.p=new A.at(4,"ignore")
B.W=new A.aR(0,"compliance")
B.ay=new A.cn(B.W)
B.X=new A.aR(1,"rupture")
B.az=new A.cn(B.X)
B.Y=new A.aR(2,"synchronisation")
B.aA=new A.cn(B.Y)
B.e=new A.bC(0,"north")
B.m=new A.bC(1,"east")
B.h=new A.bC(2,"south")
B.q=new A.bC(3,"west")
B.aB=new A.bV(0,"mantle")
B.aC=new A.bV(1,"portal")
B.aE=new A.bV(3,"none")
B.aF=new A.cp(B.aE,null)
B.aD=new A.bV(2,"window")
B.aG=new A.cp(B.aD,"the shutter")
B.aH=new A.C("saved mantle history is malformed",null,null)
B.aI=new A.C("rupture elapsed time is malformed",null,null)
B.Z=new A.C("saved mantle state is malformed",null,null)
B.aJ=new A.C("inactive rupture has elapsed time",null,null)
B.aK=new A.C("saved difficulty state is malformed",null,null)
B.aL=new A.C("saved house drift state is malformed",null,null)
B.aM=new A.C("saved sleep record is malformed",null,null)
B.aN=new A.C("saved day-loop sleepHistory must be a list",null,null)
B.aO=new A.C("event sequence must be non-negative",null,null)
B.aP=new A.C("saved window state is malformed",null,null)
B.aQ=new A.C("save run and meta must be objects",null,null)
B.aR=new A.C("saved house state is malformed",null,null)
B.aS=new A.C("saved sleep record must be an object",null,null)
B.aT=new A.C("saved session run is malformed",null,null)
B.aU=new A.C("save map keys must be strings",null,null)
B.aV=new A.C("saved day-loop state is malformed",null,null)
B.aW=new A.C("rupture extinguished mantle is unknown",null,null)
B.a_=new A.C("saved portal state is malformed",null,null)
B.aX=new A.C("saved house state does not match this house",null,null)
B.aY=new A.C("save contains a non-finite number",null,null)
B.aZ=new A.C("text.json root must be an object",null,null)
B.b_=new A.C("event kind is empty",null,null)
B.b0=new A.C("saved session clock is malformed",null,null)
B.b1=new A.C("rupture mantle IDs are malformed",null,null)
B.b2=new A.C("saved sleep record has an unknown enum",null,null)
B.b3=new A.C("save root must be an object",null,null)
B.b4=new A.C("saved house overrides are malformed",null,null)
B.b5=new A.bX(0,"timeAdvanced")
B.b6=new A.bX(1,"dayEndReached")
B.b7=new A.bX(4,"slept")
B.b8=new A.bX(5,"complianceFloorTripped")
B.x=new A.bD(0,"player")
B.F=new A.bD(1,"inserted")
B.a0=new A.bD(2,"warden")
B.bb=new A.eA(1,"visitor")
B.bf=new A.hT(null)
B.bg=new A.hU(null)
B.a1=s([0,2,2,3],t.t)
B.j=s(["who","verb","object","place","time"],t.s)
B.bh=s([2,5,9,12,16,19],t.t)
B.bi=s([B.w,B.T,B.U,B.V,B.p],A.ae("o<at>"))
B.bj=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.u=new A.aI(0,"full")
B.L=new A.aI(1,"compressed")
B.M=new A.aI(2,"off")
B.a2=s([B.u,B.L,B.M],A.ae("o<aI>"))
B.bk=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bE=new A.ay(0,"long")
B.ag=new A.ay(1,"short")
B.a3=s([B.bE,B.ag],A.ae("o<ay>"))
B.l=new A.aV(0,"inactive")
B.ae=new A.aV(2,"affineWarp")
B.I=new A.aV(3,"vertexSnap")
B.af=new A.aV(4,"tapeGiveup")
B.J=new A.aV(5,"portalFail")
B.t=new A.aV(6,"lightsOut")
B.a4=s([B.l,B.y,B.ae,B.I,B.af,B.J,B.t],A.ae("o<aV>"))
B.bl=s([B.x,B.F,B.a0],A.ae("o<bD>"))
B.bp=s([],t.cs)
B.bq=s([],t.bz)
B.a5=s([],t.Y)
B.bm=s([],t.b2)
B.i=s([],t.s)
B.a6=s([],t.cF)
B.a7=s([],t.E)
B.bn=s([],t.t)
B.bo=s([],t.b)
B.ba=new A.d8(15,"kitchen",-0.3,0)
B.b9=new A.d8(19,"spare-room",0,0.3)
B.n=s([B.ba,B.b9],A.ae("o<d8>"))
B.bB=new A.ap(0,"bed")
B.bC=new A.ap(1,"chair")
B.bD=new A.ap(2,"floor")
B.a8=s([B.bB,B.bC,B.bD],A.ae("o<ap>"))
B.br=s([B.e,B.m,B.h,B.q],A.ae("o<bC>"))
B.bs=s([1.4,2.8,4.2],t.u)
B.bt=s([B.W,B.X,B.Y],A.ae("o<aR>"))
B.o=new A.aH(0,"waiting")
B.A=new A.aH(1,"atDoor")
B.B=new A.aH(2,"consulting")
B.C=new A.aH(3,"resolved")
B.bu=s([B.o,B.A,B.B,B.C],A.ae("o<aH>"))
B.bw={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.a9=new A.aQ(B.bw,[2,3,4,5,6],A.ae("aQ<k,h>"))
B.H={}
B.aa=new A.aQ(B.H,[],t.D)
B.bv=new A.aQ(B.H,[],A.ae("aQ<@,@>"))
B.bx={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.ab=new A.aQ(B.bx,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.D)
B.G=new A.d7([B.y,1,B.ae,1.5,B.I,1.5,B.af,2,B.J,2,B.t,4],A.ae("d7<aV,n>"))
B.by=new A.c5(null,"save storage unavailable")
B.bz=new A.c5(null,"save could not be recovered")
B.bA=new A.c5(null,null)
B.z=new A.d4(B.H,0,A.ae("d4<k>"))
B.bF=A.b_("qP")
B.bG=A.b_("qQ")
B.bH=A.b_("k1")
B.bI=A.b_("nL")
B.bJ=A.b_("nP")
B.bK=A.b_("nQ")
B.bL=A.b_("nR")
B.bM=A.b_("F")
B.bN=A.b_("v")
B.bO=A.b_("om")
B.bP=A.b_("on")
B.bQ=A.b_("oo")
B.bR=A.b_("kb")
B.bS=new A.iD(!1)
B.bT=new A.bJ(0,"visitorAnswered")
B.ah=new A.bJ(1,"visitorIgnored")
B.bU=new A.bJ(2,"entryVerified")
B.bV=new A.bJ(3,"entryContradicted")
B.bW=new A.bJ(4,"exposureAccepted")
B.bY=new A.bg(1,"malformedDay")
B.bZ=new A.bg(2,"malformedTier")
B.ai=new A.bg(3,"missingTierLines")
B.N=new A.bg(6,"invalidPhase")
B.c4=new A.aJ(B.N,"The active visit cannot be chosen.")
B.c7=new A.aA(B.c4)
B.c1=new A.aJ(B.N,"The active visit has no line to advance.")
B.c8=new A.aA(B.c1)
B.c0=new A.bg(5,"noActiveVisit")
B.c2=new A.aJ(B.c0,"There is no active visit.")
B.aj=new A.aA(B.c2)
B.c3=new A.aJ(B.N,"A visit is already active.")
B.c9=new A.aA(B.c3)
B.c_=new A.bg(4,"noArrival")
B.c6=new A.aJ(B.c_,"The authored arrival is missing.")
B.ca=new A.aA(B.c6)
B.bX=new A.bg(0,"missingCorpus")
B.c5=new A.aJ(B.bX,"The authored visitor corpus is empty.")
B.cb=new A.aA(B.c5)
B.ak=new A.cb(1,"exact")
B.O=new A.cb(2,"partial")
B.D=new A.cb(3,"contradiction")
B.cc=new A.cb(0,"skipped")
B.cd=new A.ca(B.cc,B.z)
B.ce=new A.ca(B.O,B.z)})();(function staticFields(){$.j5=null
$.aN=A.j([],A.ae("o<v>"))
$.ln=null
$.l_=null
$.kZ=null
$.mF=null
$.mA=null
$.mJ=null
$.jC=null
$.jJ=null
$.kN=null
$.ja=A.j([],A.ae("o<u<v>?>"))
$.cQ=null
$.e9=null
$.ea=null
$.ky=!1
$.S=B.k
$.lB=""
$.lC=null
$.lx=null
$.i5=null
$.a4=A.T()
$.bi=A.T()
$.aK=A.T()
$.m3=A.T()
$.cR=null
$.a0=A.T()
$.kt=null
$.e7=A.T()
$.N=A.T()
$.ko=A.T()
$.kv=null
$.e8=null
$.kp=!1
$.kA=!1
$.mh=!1
$.kz=0
$.jk=0
$.mz=!1
$.mb="booting"
$.by=0
$.cT=0
$.aL="hall"
$.e6=A.T()
$.cM=A.T()
$.b7=A.T()
$.aB=null
$.cN=A.T()
$.fC=A.T()
$.m4=A.T()
$.m2=A.T()
$.ab=A.T()
$.fD=A.T()
$.fB=A.T()
$.kn=A.T()
$.ac=A.T()
$.fA=A.T()
$.km=A.T()
$.jy=A.ag(t.S)
$.bN=A.j([],t.s)
$.ku=null
$.mw=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qS","mP",()=>A.mE("_$dart_dartClosure"))
s($,"qR","cZ",()=>A.mE("_$dart_dartClosure_dartJSInterop"))
s($,"rd","n4",()=>A.j([new J.eC()],A.ae("o<dt>")))
s($,"qX","mQ",()=>A.bv(A.iz({
toString:function(){return"$receiver$"}})))
s($,"qY","mR",()=>A.bv(A.iz({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"qZ","mS",()=>A.bv(A.iz(null)))
s($,"r_","mT",()=>A.bv(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"r2","mW",()=>A.bv(A.iz(void 0)))
s($,"r3","mX",()=>A.bv(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"r1","mV",()=>A.bv(A.ly(null)))
s($,"r0","mU",()=>A.bv(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"r5","mZ",()=>A.bv(A.ly(void 0)))
s($,"r4","mY",()=>A.bv(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"r6","kR",()=>A.ox())
s($,"ra","n2",()=>A.o0(4096))
s($,"r8","n0",()=>new A.ji().$0())
s($,"r9","n1",()=>new A.jh().$0())
s($,"r7","n_",()=>new Int8Array(A.po(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"rb","fL",()=>A.fK(B.bN))
s($,"re","n5",()=>A.f7(0,1,0))
s($,"rg","fN",()=>{var q=$.lx
if(q==null){A.fH()
A.fH()
A.fH()
A.fH()
A.fH()
q=$.lx=new A.iv()}return q})
r($,"kG","d_",()=>A.f7(0,0,0))
r($,"kB","n3",()=>A.f7(0,0,0))
r($,"kI","kS",()=>A.f7(0,0,0))
s($,"rc","fM",()=>new A.hj(A.f7(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.bG,ArrayBuffer:A.ct,ArrayBufferView:A.dk,DataView:A.eM,Float32Array:A.dh,Float64Array:A.eN,Int16Array:A.eO,Int32Array:A.eP,Int8Array:A.eQ,Uint16Array:A.eR,Uint32Array:A.eS,Uint8ClampedArray:A.dl,CanvasPixelArray:A.dl,Uint8Array:A.dm})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a8.$nativeSuperclassTag="ArrayBufferView"
A.dN.$nativeSuperclassTag="ArrayBufferView"
A.dO.$nativeSuperclassTag="ArrayBufferView"
A.di.$nativeSuperclassTag="ArrayBufferView"
A.dP.$nativeSuperclassTag="ArrayBufferView"
A.dQ.$nativeSuperclassTag="ArrayBufferView"
A.dj.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jK
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()