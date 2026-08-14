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
if(a[b]!==s){A.GB(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xh(b)
return new s(c,this)}:function(){if(s===null)s=A.xh(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xh(a).prototype
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
xn(a,b,c,d){return{i:a,p:b,e:c,x:d}},
xj(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.xl==null){A.Gf()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.yA("Return interceptor for "+A.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tu
if(o==null)o=$.tu=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Gl(a)
if(p!=null)return p
if(typeof a=="function")return B.id
s=Object.getPrototypeOf(a)
if(s==null)return B.ds
if(s===Object.prototype)return B.ds
if(typeof q=="function"){o=$.tu
if(o==null)o=$.tu=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bS,enumerable:false,writable:true,configurable:true})
return B.bS}return B.bS},
y3(a,b){if(a<0||a>4294967295)throw A.b(A.aZ(a,0,4294967295,"length",null))
return J.y5(new Array(a),b)},
y4(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("q<0>"))},
y2(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("q<0>"))},
y5(a,b){var s=A.c(a,b.i("q<0>"))
s.$flags=1
return s},
C8(a,b){var s=t.hO
return J.xE(s.a(a),s.a(b))},
y7(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
C9(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.y7(r))break;++b}return b},
Ca(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.y7(q))break}return b},
eq(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hL.prototype
return J.kb.prototype}if(typeof a=="string")return J.e_.prototype
if(a==null)return J.hM.prototype
if(typeof a=="boolean")return J.ka.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e0.prototype
if(typeof a=="symbol")return J.hQ.prototype
if(typeof a=="bigint")return J.hO.prototype
return a}if(a instanceof A.J)return a
return J.xj(a)},
aC(a){if(typeof a=="string")return J.e_.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e0.prototype
if(typeof a=="symbol")return J.hQ.prototype
if(typeof a=="bigint")return J.hO.prototype
return a}if(a instanceof A.J)return a
return J.xj(a)},
cd(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e0.prototype
if(typeof a=="symbol")return J.hQ.prototype
if(typeof a=="bigint")return J.hO.prototype
return a}if(a instanceof A.J)return a
return J.xj(a)},
Ac(a){if(typeof a=="number")return J.fE.prototype
if(typeof a=="string")return J.e_.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.eU.prototype
return a},
Ad(a){if(typeof a=="string")return J.e_.prototype
if(a==null)return a
if(!(a instanceof A.J))return J.eU.prototype
return a},
xC(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Ac(a).ah(a,b)},
ad(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eq(a).a4(a,b)},
aU(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Gk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aC(a).h(a,b)},
bt(a,b,c){return J.cd(a).k(a,b,c)},
ho(a,b){return J.cd(a).l(a,b)},
AY(a,b){return J.Ad(a).ft(a,b)},
xD(a,b){return J.cd(a).M(a,b)},
AZ(a,b){return J.cd(a).cG(a,b)},
xE(a,b){return J.Ac(a).F(a,b)},
xF(a,b){return J.aC(a).q(a,b)},
mt(a,b){return J.cd(a).a0(a,b)},
B_(a,b){return J.cd(a).a7(a,b)},
xG(a){return J.cd(a).gU(a)},
aA(a){return J.eq(a).gN(a)},
mu(a){return J.aC(a).gO(a)},
B0(a){return J.aC(a).gW(a)},
R(a){return J.cd(a).gu(a)},
cM(a){return J.aC(a).gt(a)},
fg(a){return J.eq(a).ga3(a)},
xH(a,b){return J.cd(a).X(a,b)},
fh(a,b,c){return J.cd(a).cc(a,b,c)},
B1(a,b){return J.aC(a).st(a,b)},
B2(a,b){return J.cd(a).P(a,b)},
B3(a,b){return J.Ad(a).b1(a,b)},
dd(a){return J.eq(a).p(a)},
B4(a,b){return J.cd(a).e1(a,b)},
k8:function k8(){},
ka:function ka(){},
hM:function hM(){},
hP:function hP(){},
e1:function e1(){},
kw:function kw(){},
eU:function eU(){},
e0:function e0(){},
hO:function hO(){},
hQ:function hQ(){},
q:function q(a){this.$ti=a},
k9:function k9(){},
pf:function pf(a){this.$ti=a},
et:function et(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fE:function fE(){},
hL:function hL(){},
kb:function kb(){},
e_:function e_(){}},A={we:function we(){},
vh(){return $},
Bi(a,b,c){if(t.he.b(a))return new A.iy(a,b.i("@<0>").K(c).i("iy<1,2>"))
return new A.ew(a,b.i("@<0>").K(c).i("ew<1,2>"))},
yb(a){return new A.fF("Field '"+a+"' has been assigned during initialization.")},
a5(a){return new A.fF("Field '"+a+"' has not been initialized.")},
Cc(a){return new A.fF("Field '"+a+"' has already been initialized.")},
vm(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
il(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fc(a,b,c){return a},
xm(a){var s,r
for(s=$.cc.length,r=0;r<s;++r)if(a===$.cc[r])return!0
return!1},
kV(a,b,c,d){A.kG(b,"start")
if(c!=null){A.kG(c,"end")
if(b>c)A.j(A.aZ(b,0,c,"start",null))}return new A.ik(a,b,c,d.i("ik<0>"))},
ki(a,b,c,d){if(t.he.b(a))return new A.di(a,b,c.i("@<0>").K(d).i("di<1,2>"))
return new A.cC(a,b,c.i("@<0>").K(d).i("cC<1,2>"))},
cA(){return new A.fT("No element")},
y1(){return new A.fT("Too many elements")},
kQ(a,b,c,d,e){if(c-b<=32)A.CP(a,b,c,d,e)
else A.CO(a,b,c,d,e)},
CP(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aC(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aL()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
CO(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.a2(a4+a5,2),f=g-j,e=g+j,d=J.aC(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aL()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.ad(a6.$2(b,a0),0)
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
A.kQ(a3,a4,r-2,a6,a7)
A.kQ(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.ad(a6.$2(d.h(a3,r),b),0))++r
while(J.ad(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.kQ(a3,r,q,a6,a7)}else A.kQ(a3,r,q,a6,a7)},
ed:function ed(){},
hs:function hs(a,b){this.a=a
this.$ti=b},
ew:function ew(a,b){this.a=a
this.$ti=b},
iy:function iy(a,b){this.a=a
this.$ti=b},
iw:function iw(){},
td:function td(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.$ti=b},
fF:function fF(a){this.a=a},
dT:function dT(a){this.a=a},
qL:function qL(){},
P:function P(){},
a1:function a1(){},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aH:function aH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.$ti=c},
di:function di(a,b,c){this.a=a
this.b=b
this.$ti=c},
hV:function hV(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
hC:function hC(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hA:function hA(a){this.$ti=a},
dF:function dF(a,b){this.a=a
this.$ti=b},
is:function is(a,b){this.a=a
this.$ti=b},
av:function av(){},
d3:function d3(){},
fV:function fV(){},
eP:function eP(a,b){this.a=a
this.$ti=b},
j_:function j_(){},
aY(a,b,c){var s,r,q,p,o,n,m,l=A.ap(a.ga1(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.t)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.ap(a.gaD(),!0,c)
m=new A.a2(q,n,b.i("@<0>").K(c).i("a2<1,2>"))
m.$keys=l
return m}return new A.hu(A.aM(a,b,c),b.i("@<0>").K(c).i("hu<1,2>"))},
Bo(){throw A.b(A.ba("Cannot modify unmodifiable Map"))},
Bp(){throw A.b(A.ba("Cannot modify constant Set"))},
Au(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Gk(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
x(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dd(a)
return s},
i6(a){var s,r=$.yk
if(r==null)r=$.yk=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
du(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
eK(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bg(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kC(a){var s,r,q,p
if(a instanceof A.J)return A.bM(A.bW(a),null)
s=J.eq(a)
if(s===B.ic||s===B.ie||t.qF.b(a)){r=B.cb(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bM(A.bW(a),null)},
yl(a){var s,r,q
if(a==null||typeof a=="number"||A.bK(a))return J.dd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dS)return a.p(0)
if(a instanceof A.bq)return a.fj(!0)
s=$.AT()
for(r=0;r<1;++r){q=s[r].mF(a)
if(q!=null)return q}return"Instance of '"+A.kC(a)+"'"},
Cq(){return Date.now()},
Cz(){var s,r
if($.qk!==0)return
$.qk=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qk=1e6
$.ql=new A.qj(r)},
Cp(){if(!!self.location)return self.location.href
return null},
CA(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dn(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aZ(a,0,1114111,null,null))},
fM(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Cy(a){var s=A.fM(a).getUTCFullYear()+0
return s},
Cw(a){var s=A.fM(a).getUTCMonth()+1
return s},
Cs(a){var s=A.fM(a).getUTCDate()+0
return s},
Ct(a){var s=A.fM(a).getUTCHours()+0
return s},
Cv(a){var s=A.fM(a).getUTCMinutes()+0
return s},
Cx(a){var s=A.fM(a).getUTCSeconds()+0
return s},
Cu(a){var s=A.fM(a).getUTCMilliseconds()+0
return s},
Cr(a){var s=a.$thrownJsError
if(s==null)return null
return A.cK(s)},
ym(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aD(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
vn(a){throw A.b(A.xg(a))},
d(a,b){if(a==null)J.cM(a)
throw A.b(A.vj(a,b))},
vj(a,b){var s,r="index"
if(!A.aJ(b))return new A.cv(!0,b,r,null)
s=A.e(J.cM(a))
if(b<0||b>=s)return A.p5(b,s,a,r)
return A.yo(b,r)},
G7(a,b,c){if(a>c)return A.aZ(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aZ(b,a,c,"end",null)
return new A.cv(!0,b,"end",null)},
xg(a){return new A.cv(!0,a,null,null)},
b(a){return A.aD(a,new Error())},
aD(a,b){var s
if(a==null)a=new A.dB()
b.dartException=a
s=A.GE
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
GE(){return J.dd(this.dartException)},
j(a,b){throw A.aD(a,b==null?new Error():b)},
bY(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.Eo(a,b,c),s)},
Eo(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.io("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.b(A.au(a))},
dC(a){var s,r,q,p,o,n
a=A.Ap(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rI(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rJ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yz(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
wf(a,b){var s=b==null,r=s?null:b.method
return new A.kc(a,r,s?null:b.receiver)},
al(a){var s
if(a==null)return new A.pY(a)
if(a instanceof A.hB){s=a.a
return A.er(a,s==null?A.f8(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.er(a,a.dartException)
return A.FF(a)},
er(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
FF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dn(r,16)&8191)===10)switch(q){case 438:return A.er(a,A.wf(A.x(s)+" (Error "+q+")",null))
case 445:case 5007:A.x(s)
return A.er(a,new A.i1())}}if(a instanceof TypeError){p=$.Ax()
o=$.Ay()
n=$.Az()
m=$.AA()
l=$.AD()
k=$.AE()
j=$.AC()
$.AB()
i=$.AG()
h=$.AF()
g=p.aZ(s)
if(g!=null)return A.er(a,A.wf(A.r(s),g))
else{g=o.aZ(s)
if(g!=null){g.method="call"
return A.er(a,A.wf(A.r(s),g))}else if(n.aZ(s)!=null||m.aZ(s)!=null||l.aZ(s)!=null||k.aZ(s)!=null||j.aZ(s)!=null||m.aZ(s)!=null||i.aZ(s)!=null||h.aZ(s)!=null){A.r(s)
return A.er(a,new A.i1())}}return A.er(a,new A.l0(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ih()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.er(a,new A.cv(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ih()
return a},
cK(a){var s
if(a instanceof A.hB)return a.b
if(a==null)return new A.iO(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iO(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mq(a){if(a==null)return J.aA(a)
if(typeof a=="object")return A.i6(a)
return J.aA(a)},
G1(a){if(typeof a=="number")return B.c.gN(a)
if(a instanceof A.lZ)return A.i6(a)
if(a instanceof A.bq)return a.gN(a)
return A.mq(a)},
Aa(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Gc(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
EO(a,b,c,d,e,f){t.BO.a(a)
switch(A.e(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.tf("Unsupported number of arguments for wrapped closure"))},
hh(a,b){var s=a.$identity
if(!!s)return s
s=A.G2(a,b)
a.$identity=s
return s},
G2(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.EO)},
Bn(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kU().constructor.prototype):Object.create(new A.fm(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xN(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Bj(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xN(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Bj(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Be)}throw A.b("Error in functionType of tearoff")},
Bk(a,b,c,d){var s=A.xM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xN(a,b,c,d){if(c)return A.Bm(a,b,d)
return A.Bk(b.length,d,a,b)},
Bl(a,b,c,d){var s=A.xM,r=A.Bf
switch(b?-1:a){case 0:throw A.b(new A.kL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Bm(a,b,c){var s,r
if($.xK==null)$.xK=A.xJ("interceptor")
if($.xL==null)$.xL=A.xJ("receiver")
s=b.length
r=A.Bl(s,c,a,b)
return r},
xh(a){return A.Bn(a)},
Be(a,b){return A.iS(v.typeUniverse,A.bW(a.a),b)},
xM(a){return a.a},
Bf(a){return a.b},
xJ(a){var s,r,q,p=new A.fm("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.w("Field name "+a+" not found.",null))},
Ae(a){return v.getIsolateTag(a)},
At(){return v.G},
Hw(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Gl(a){var s,r,q,p,o,n=A.r($.Ag.$1(a)),m=$.vk[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vr[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aB($.A6.$2(a,n))
if(q!=null){m=$.vk[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vr[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vW(s)
$.vk[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vr[n]=s
return s}if(p==="-"){o=A.vW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.An(a,s)
if(p==="*")throw A.b(A.yA(n))
if(v.leafTags[n]===true){o=A.vW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.An(a,s)},
An(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xn(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vW(a){return J.xn(a,!1,null,!!a.$ic0)},
Gn(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vW(s)
else return J.xn(s,c,null,null)},
Gf(){if(!0===$.xl)return
$.xl=!0
A.Gg()},
Gg(){var s,r,q,p,o,n,m,l
$.vk=Object.create(null)
$.vr=Object.create(null)
A.Ge()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ao.$1(o)
if(n!=null){m=A.Gn(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Ge(){var s,r,q,p,o,n,m=B.eu()
m=A.hg(B.ev,A.hg(B.ew,A.hg(B.cc,A.hg(B.cc,A.hg(B.ex,A.hg(B.ey,A.hg(B.ez(B.cb),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Ag=new A.vo(p)
$.A6=new A.vp(o)
$.Ao=new A.vq(n)},
hg(a,b){return a(b)||b},
Dw(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.ad(r,b[s]))return!1}return!0},
G4(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
y8(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a3("Illegal RegExp pattern ("+String(o)+")",a,null))},
Gz(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Ga(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ap(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xp(a,b,c){var s=A.GA(a,b,c)
return s},
GA(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ap(b),"g"),A.Ga(c))},
aQ:function aQ(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a){this.a=a},
hu:function hu(a,b){this.a=a
this.$ti=b},
ft:function ft(){},
nv:function nv(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
f1:function f1(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cS:function cS(a,b){this.a=a
this.$ti=b},
hv:function hv(){},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
qj:function qj(a){this.a=a},
ic:function ic(){},
rI:function rI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(){},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a){this.a=a},
pY:function pY(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a
this.b=null},
dS:function dS(){},
jz:function jz(){},
jA:function jA(){},
kX:function kX(){},
kU:function kU(){},
fm:function fm(a,b){this.a=a
this.b=b},
kL:function kL(a){this.a=a},
cj:function cj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
po:function po(a){this.a=a},
pA:function pA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aj:function aj(a,b){this.a=a
this.$ti=b},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
H:function H(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hR:function hR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vo:function vo(a){this.a=a},
vp:function vp(a){this.a=a},
vq:function vq(a){this.a=a},
bq:function bq(){},
eh:function eh(){},
ei:function ei(){},
fZ:function fZ(){},
hN:function hN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lE:function lE(a){this.b=a},
lj:function lj(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ij:function ij(a,b){this.a=a
this.c=b},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
GB(a){throw A.aD(A.yb(a),new Error())},
p(){throw A.aD(A.a5(""),new Error())},
aX(){throw A.aD(A.Cc(""),new Error())},
xq(){throw A.aD(A.yb(""),new Error())},
ab(){var s=new A.te()
return s.b=s},
te:function te(){this.b=null},
a0(a){return a},
Ck(a){return new Int8Array(a)},
Cl(a){return new Uint8Array(a)},
ks(a){return new Uint8Array(A.a0(a))},
dJ(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.vj(b,a))},
Eb(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.G7(a,b,c))
return b},
fK:function fK(){},
fJ:function fJ(){},
i_:function i_(){},
kl:function kl(){},
b6:function b6(){},
hY:function hY(){},
hZ:function hZ(){},
hX:function hX(){},
km:function km(){},
kn:function kn(){},
ko:function ko(){},
kp:function kp(){},
kq:function kq(){},
kr:function kr(){},
eI:function eI(){},
i0:function i0(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
wq(a,b){var s=b.c
return s==null?b.c=A.iQ(a,"c_",[b.x]):s},
ys(a){var s=a.w
if(s===6||s===7)return A.ys(a.x)
return s===11||s===12},
CJ(a){return a.as},
Go(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
Y(a){return A.tR(v.typeUniverse,a,!1)},
fb(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fb(a1,s,a3,a4)
if(r===s)return a2
return A.z_(a1,r,!0)
case 7:s=a2.x
r=A.fb(a1,s,a3,a4)
if(r===s)return a2
return A.yZ(a1,r,!0)
case 8:q=a2.y
p=A.hf(a1,q,a3,a4)
if(p===q)return a2
return A.iQ(a1,a2.x,p)
case 9:o=a2.x
n=A.fb(a1,o,a3,a4)
m=a2.y
l=A.hf(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wB(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hf(a1,j,a3,a4)
if(i===j)return a2
return A.z0(a1,k,i)
case 11:h=a2.x
g=A.fb(a1,h,a3,a4)
f=a2.y
e=A.FA(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yY(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hf(a1,d,a3,a4)
o=a2.x
n=A.fb(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wC(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.jq("Attempted to substitute unexpected RTI kind "+a0))}},
hf(a,b,c,d){var s,r,q,p,o=b.length,n=A.tV(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fb(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
FB(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tV(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fb(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
FA(a,b,c,d){var s,r=b.a,q=A.hf(a,r,c,d),p=b.b,o=A.hf(a,p,c,d),n=b.c,m=A.FB(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lx()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
xi(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Gd(s)
return a.$S()}return null},
Gh(a,b){var s
if(A.ys(b))if(a instanceof A.dS){s=A.xi(a)
if(s!=null)return s}return A.bW(a)},
bW(a){if(a instanceof A.J)return A.o(a)
if(Array.isArray(a))return A.C(a)
return A.wU(J.eq(a))},
C(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.wU(a)},
wU(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.EL(a,s)},
EL(a,b){var s=a instanceof A.dS?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.DG(v.typeUniverse,s.name)
b.$ccache=r
return r},
Gd(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
xk(a){return A.db(A.o(a))},
xc(a){var s
if(a instanceof A.bq)return a.eQ()
s=a instanceof A.dS?A.xi(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fg(a).a
if(Array.isArray(a))return A.C(a)
return A.bW(a)},
db(a){var s=a.r
return s==null?a.r=new A.lZ(a):s},
Gb(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iS(v.typeUniverse,A.xc(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.z1(v.typeUniverse,s,A.xc(q[r]))}return A.iS(v.typeUniverse,s,a)},
ct(a){return A.db(A.tR(v.typeUniverse,a,!1))},
EK(a){var s=this
s.b=A.Fv(s)
return s.b(a)},
Fv(a){var s,r,q,p,o
if(a===t.K)return A.EU
if(A.fd(a))return A.EZ
s=a.w
if(s===6)return A.EC
if(s===1)return A.zF
if(s===7)return A.EP
r=A.Fu(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fd)){a.f="$i"+q
if(q==="D")return A.ES
if(a===t.m)return A.ER
return A.EY}}else if(s===10){p=A.G4(a.x,a.y)
o=p==null?A.zF:p
return o==null?A.f8(o):o}return A.EA},
Fu(a){if(a.w===8){if(a===t.S)return A.aJ
if(a===t.i||a===t.o)return A.ET
if(a===t.N)return A.EX
if(a===t.y)return A.bK}return null},
EJ(a){var s=this,r=A.Ez
if(A.fd(s))r=A.E5
else if(s===t.K)r=A.f8
else if(A.hj(s)){r=A.EB
if(s===t.lo)r=A.zm
else if(s===t.dR)r=A.aB
else if(s===t.k7)r=A.E4
else if(s===t.s7)r=A.wI
else if(s===t.u6)r=A.zl
else if(s===t.gt)r=A.E}else if(s===t.S)r=A.e
else if(s===t.N)r=A.r
else if(s===t.y)r=A.Q
else if(s===t.o)r=A.a4
else if(s===t.i)r=A.br
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
EA(a){var s=this
if(a==null)return A.hj(s)
return A.Aj(v.typeUniverse,A.Gh(a,s),s)},
EC(a){if(a==null)return!0
return this.x.b(a)},
EY(a){var s,r=this
if(a==null)return A.hj(r)
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.eq(a)[s]},
ES(a){var s,r=this
if(a==null)return A.hj(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.J)return!!a[s]
return!!J.eq(a)[s]},
ER(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.J)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zE(a){if(typeof a=="object"){if(a instanceof A.J)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ez(a){var s=this
if(a==null){if(A.hj(s))return a}else if(s.b(a))return a
throw A.aD(A.zr(a,s),new Error())},
EB(a){var s=this
if(a==null||s.b(a))return a
throw A.aD(A.zr(a,s),new Error())},
zr(a,b){return new A.h3("TypeError: "+A.yQ(a,A.bM(b,null)))},
A8(a,b,c,d){if(A.Aj(v.typeUniverse,a,b))return a
throw A.aD(A.Dy("The type argument '"+A.bM(a,null)+"' is not a subtype of the type variable bound '"+A.bM(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yQ(a,b){return A.jP(a)+": type '"+A.bM(A.xc(a),null)+"' is not a subtype of type '"+b+"'"},
Dy(a){return new A.h3("TypeError: "+a)},
cq(a,b){return new A.h3("TypeError: "+A.yQ(a,b))},
EP(a){var s=this
return s.x.b(a)||A.wq(v.typeUniverse,s).b(a)},
EU(a){return a!=null},
f8(a){if(a!=null)return a
throw A.aD(A.cq(a,"Object"),new Error())},
EZ(a){return!0},
E5(a){return a},
zF(a){return!1},
bK(a){return!0===a||!1===a},
Q(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aD(A.cq(a,"bool"),new Error())},
E4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aD(A.cq(a,"bool?"),new Error())},
br(a){if(typeof a=="number")return a
throw A.aD(A.cq(a,"double"),new Error())},
zl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cq(a,"double?"),new Error())},
aJ(a){return typeof a=="number"&&Math.floor(a)===a},
e(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aD(A.cq(a,"int"),new Error())},
zm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aD(A.cq(a,"int?"),new Error())},
ET(a){return typeof a=="number"},
a4(a){if(typeof a=="number")return a
throw A.aD(A.cq(a,"num"),new Error())},
wI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cq(a,"num?"),new Error())},
EX(a){return typeof a=="string"},
r(a){if(typeof a=="string")return a
throw A.aD(A.cq(a,"String"),new Error())},
aB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aD(A.cq(a,"String?"),new Error())},
a(a){if(A.zE(a))return a
throw A.aD(A.cq(a,"JSObject"),new Error())},
E(a){if(a==null)return a
if(A.zE(a))return a
throw A.aD(A.cq(a,"JSObject?"),new Error())},
zW(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bM(a[q],b)
return s},
Fj(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zW(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bM(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zv(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.c([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bM(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bM(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bM(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bM(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bM(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bM(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bM(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bM(a.x,b)+">"
if(l===8){p=A.FE(a.x)
o=a.y
return o.length>0?p+("<"+A.zW(o,b)+">"):p}if(l===10)return A.Fj(a,b)
if(l===11)return A.zv(a,b,null)
if(l===12)return A.zv(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
FE(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
DH(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
DG(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tR(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iR(a,5,"#")
q=A.tV(s)
for(p=0;p<s;++p)q[p]=r
o=A.iQ(a,b,q)
n[b]=o
return o}else return m},
DF(a,b){return A.z9(a.tR,b)},
DE(a,b){return A.z9(a.eT,b)},
tR(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yV(A.yT(a,null,b,!1))
r.set(b,s)
return s},
iS(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yV(A.yT(a,b,c,!0))
q.set(c,r)
return r},
z1(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wB(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ek(a,b){b.a=A.EJ
b.b=A.EK
return b},
iR(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cG(null,null)
s.w=b
s.as=c
r=A.ek(a,s)
a.eC.set(c,r)
return r},
z_(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.DC(a,b,r,c)
a.eC.set(r,s)
return s},
DC(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fd(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hj(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cG(null,null)
q.w=6
q.x=b
q.as=c
return A.ek(a,q)},
yZ(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.DA(a,b,r,c)
a.eC.set(r,s)
return s},
DA(a,b,c,d){var s,r
if(d){s=b.w
if(A.fd(b)||b===t.K)return b
else if(s===1)return A.iQ(a,"c_",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cG(null,null)
r.w=7
r.x=b
r.as=c
return A.ek(a,r)},
DD(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cG(null,null)
s.w=13
s.x=b
s.as=q
r=A.ek(a,s)
a.eC.set(q,r)
return r},
iP(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Dz(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iQ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iP(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cG(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ek(a,r)
a.eC.set(p,q)
return q},
wB(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iP(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cG(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ek(a,o)
a.eC.set(q,n)
return n},
z0(a,b,c){var s,r,q="+"+(b+"("+A.iP(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cG(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ek(a,s)
a.eC.set(q,r)
return r},
yY(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iP(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iP(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Dz(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cG(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ek(a,p)
a.eC.set(r,o)
return o},
wC(a,b,c,d){var s,r=b.as+("<"+A.iP(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.DB(a,b,c,r,d)
a.eC.set(r,s)
return s},
DB(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tV(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fb(a,b,r,0)
m=A.hf(a,c,r,0)
return A.wC(a,n,m,c!==m)}}l=new A.cG(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ek(a,l)},
yT(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yV(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Dr(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yU(a,r,l,k,!1)
else if(q===46)r=A.yU(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f4(a.u,a.e,k.pop()))
break
case 94:k.push(A.DD(a.u,k.pop()))
break
case 35:k.push(A.iR(a.u,5,"#"))
break
case 64:k.push(A.iR(a.u,2,"@"))
break
case 126:k.push(A.iR(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Dt(a,k)
break
case 38:A.Ds(a,k)
break
case 63:p=a.u
k.push(A.z_(p,A.f4(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yZ(p,A.f4(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Dq(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yW(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Dv(a.u,a.e,o)
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
return A.f4(a.u,a.e,m)},
Dr(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yU(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.DH(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.CJ(o)+'"')
d.push(A.iS(s,o,n))}else d.push(p)
return m},
Dt(a,b){var s,r=a.u,q=A.yS(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iQ(r,p,q))
else{s=A.f4(r,a.e,p)
switch(s.w){case 11:b.push(A.wC(r,s,q,a.n))
break
default:b.push(A.wB(r,s,q))
break}}},
Dq(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yS(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f4(p,a.e,o)
q=new A.lx()
q.a=s
q.b=n
q.c=m
b.push(A.yY(p,r,q))
return
case-4:b.push(A.z0(p,b.pop(),s))
return
default:throw A.b(A.jq("Unexpected state under `()`: "+A.x(o)))}},
Ds(a,b){var s=b.pop()
if(0===s){b.push(A.iR(a.u,1,"0&"))
return}if(1===s){b.push(A.iR(a.u,4,"1&"))
return}throw A.b(A.jq("Unexpected extended operation "+A.x(s)))},
yS(a,b){var s=b.splice(a.p)
A.yW(a.u,a.e,s)
a.p=b.pop()
return s},
f4(a,b,c){if(typeof c=="string")return A.iQ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Du(a,b,c)}else return c},
yW(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f4(a,b,c[s])},
Dv(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f4(a,b,c[s])},
Du(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.jq("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.jq("Bad index "+c+" for "+b.p(0)))},
Aj(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aR(a,b,null,c,null)
r.set(c,s)}return s},
aR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fd(d))return!0
s=b.w
if(s===4)return!0
if(A.fd(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aR(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aR(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aR(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aR(a,b.x,c,d,e))return!1
return A.aR(a,A.wq(a,b),c,d,e)}if(s===6)return A.aR(a,p,c,d,e)&&A.aR(a,b.x,c,d,e)
if(q===7){if(A.aR(a,b,c,d.x,e))return!0
return A.aR(a,b,c,A.wq(a,d),e)}if(q===6)return A.aR(a,b,c,p,e)||A.aR(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.BO)return!0
o=s===10
if(o&&d===t.iM)return!0
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
if(!A.aR(a,j,c,i,e)||!A.aR(a,i,e,j,c))return!1}return A.zD(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zD(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.EQ(a,b,c,d,e)}if(o&&q===10)return A.EV(a,b,c,d,e)
return!1},
zD(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
EQ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iS(a,b,r[o])
return A.zj(a,p,null,c,d.y,e)}return A.zj(a,b.y,null,c,d.y,e)},
zj(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aR(a,b[s],d,e[s],f))return!1
return!0},
EV(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aR(a,r[s],c,q[s],e))return!1
return!0},
hj(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fd(a))if(s!==6)r=s===7&&A.hj(a.x)
return r},
fd(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
z9(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tV(a){return a>0?new Array(a):v.typeUniverse.sEA},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lx:function lx(){this.c=this.b=this.a=null},
lZ:function lZ(a){this.a=a},
lv:function lv(){},
h3:function h3(a){this.a=a},
Dj(){var s,r,q
if(self.scheduleImmediate!=null)return A.FS()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hh(new A.t9(s),1)).observe(r,{childList:true})
return new A.t8(s,r,q)}else if(self.setImmediate!=null)return A.FT()
return A.FU()},
Dk(a){self.scheduleImmediate(A.hh(new A.ta(t.O.a(a)),0))},
Dl(a){self.setImmediate(A.hh(new A.tb(t.O.a(a)),0))},
Dm(a){A.wt(B.f3,t.O.a(a))},
wt(a,b){return A.Dx(a.a/1000|0,b)},
Dx(a,b){var s=new A.tP()
s.ib(a,b)
return s},
bL(a){return new A.ll(new A.ar($.an,a.i("ar<0>")),a.i("ll<0>"))},
bJ(a,b){a.$2(0,null)
b.b=!0
return b.a},
as(a,b){A.E7(a,b)},
bI(a,b){b.ds(a)},
bH(a,b){b.dt(A.al(a),A.cK(a))},
E7(a,b){var s,r,q=new A.u1(b),p=new A.u2(b)
if(a instanceof A.ar)a.fh(q,p,t.z)
else{s=t.z
if(a instanceof A.ar)a.dZ(q,p,s)
else{r=new A.ar($.an,t.hR)
r.a=8
r.c=a
r.fh(q,p,s)}}},
bN(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.an.h4(new A.ve(s),t.H,t.S,t.z)},
yX(a,b,c){return 0},
mL(a){var s
if(t.yt.b(a)){s=a.gbM()
if(s!=null)return s}return B.at},
xV(a){var s
a.a(null)
s=new A.ar($.an,a.i("ar<0>"))
s.d3(null)
return s},
BT(a,b,c){var s=new A.ar($.an,c.i("ar<0>"))
A.CU(a,new A.oc(b,s,c))
return s},
od(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ar($.an,b.i("ar<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.of(i,h,g,f)
try{for(n=J.R(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.dZ(new A.oe(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cr(A.c([],b.i("q<0>")))
return n}i.a=A.e2(n,null,!1,b.i("0?"))}catch(l){p=A.al(l)
o=A.cK(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wV(m,k)
m=new A.b3(m,k==null?A.mL(m):k)
n.cp(m)
return n}else{i.d=p
i.c=o}}return f},
wV(a,b){if($.an===B.w)return null
return null},
EM(a,b){if($.an!==B.w)A.wV(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbM()
if(b==null){A.ym(a,B.at)
b=B.at}}else b=B.at
else if(t.yt.b(a))A.ym(a,b)
return new A.b3(a,b)},
tk(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.CQ()
b.cp(new A.b3(new A.cv(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.f0(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bT()
b.cq(o.a)
A.f_(b,p)
return}b.a^=2
A.ml(null,null,b.b,t.O.a(new A.tl(o,b)))},
f_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.x5(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.f_(d.a,c)
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
A.x5(j.a,j.b)
return}g=$.an
if(g!==h)$.an=h
else g=null
c=c.c
if((c&15)===8)new A.tp(q,d,n).$0()
else if(o){if((c&1)!==0)new A.to(q,j).$0()}else if((c&2)!==0)new A.tn(d,q).$0()
if(g!=null)$.an=g
c=q.c
if(c instanceof A.ar){p=q.a.$ti
p=p.i("c_<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cB(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.tk(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cB(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
zQ(a,b){var s
if(t.nW.b(a))return b.h4(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.ah(a,"onError",u.c))},
F8(){var s,r
for(s=$.hc;s!=null;s=$.hc){$.jc=null
r=s.b
$.hc=r
if(r==null)$.jb=null
s.a.$0()}},
Fy(){$.wW=!0
try{A.F8()}finally{$.jc=null
$.wW=!1
if($.hc!=null)$.xx().$1(A.A7())}},
A_(a){var s=new A.lm(a),r=$.jb
if(r==null){$.hc=$.jb=s
if(!$.wW)$.xx().$1(A.A7())}else $.jb=r.b=s},
Fr(a){var s,r,q,p=$.hc
if(p==null){A.A_(a)
$.jc=$.jb
return}s=new A.lm(a)
r=$.jc
if(r==null){s.b=p
$.hc=$.jc=s}else{q=r.b
s.b=q
$.jc=r.b=s
if(q==null)$.jb=s}},
GT(a,b){A.fc(a,"stream",t.K)
return new A.lU(b.i("lU<0>"))},
CU(a,b){var s=$.an
if(s===B.w)return A.wt(a,t.O.a(b))
return A.wt(a,t.O.a(s.fw(b)))},
x5(a,b){A.Fr(new A.v4(a,b))},
zV(a,b,c,d,e){var s,r=$.an
if(r===c)return d.$0()
$.an=c
s=r
try{r=d.$0()
return r}finally{$.an=s}},
Fp(a,b,c,d,e,f,g){var s,r=$.an
if(r===c)return d.$1(e)
$.an=c
s=r
try{r=d.$1(e)
return r}finally{$.an=s}},
Fo(a,b,c,d,e,f,g,h,i){var s,r=$.an
if(r===c)return d.$2(e,f)
$.an=c
s=r
try{r=d.$2(e,f)
return r}finally{$.an=s}},
ml(a,b,c,d){t.O.a(d)
if(B.w!==c){d=c.fw(d)
d=d}A.A_(d)},
t9:function t9(a){this.a=a},
t8:function t8(a,b,c){this.a=a
this.b=b
this.c=c},
ta:function ta(a){this.a=a},
tb:function tb(a){this.a=a},
tP:function tP(){},
tQ:function tQ(a,b){this.a=a
this.b=b},
ll:function ll(a,b){this.a=a
this.b=!1
this.$ti=b},
u1:function u1(a){this.a=a},
u2:function u2(a){this.a=a},
ve:function ve(a){this.a=a},
ca:function ca(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bV:function bV(a,b){this.a=a
this.$ti=b},
b3:function b3(a,b){this.a=a
this.b=b},
oc:function oc(a,b,c){this.a=a
this.b=b
this.c=c},
of:function of(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oe:function oe(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lp:function lp(){},
iu:function iu(a,b){this.a=a
this.$ti=b},
dG:function dG(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ar:function ar(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
th:function th(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
tl:function tl(a,b){this.a=a
this.b=b},
tj:function tj(a,b){this.a=a
this.b=b},
ti:function ti(a,b){this.a=a
this.b=b},
tp:function tp(a,b,c){this.a=a
this.b=b
this.c=c},
tq:function tq(a,b){this.a=a
this.b=b},
tr:function tr(a){this.a=a},
to:function to(a,b){this.a=a
this.b=b},
tn:function tn(a,b){this.a=a
this.b=b},
lm:function lm(a){this.a=a
this.b=null},
lU:function lU(a){this.$ti=a},
iZ:function iZ(){},
lN:function lN(){},
tN:function tN(a,b){this.a=a
this.b=b},
v4:function v4(a,b){this.a=a
this.b=b},
yR(a,b){var s=a[b]
return s===a?null:s},
wz(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wy(){var s=Object.create(null)
A.wz(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
yd(a,b){return new A.cj(a.i("@<0>").K(b).i("cj<1,2>"))},
N(a,b,c){return b.i("@<0>").K(c).i("wg<1,2>").a(A.Aa(a,new A.cj(b.i("@<0>").K(c).i("cj<1,2>"))))},
m(a,b){return new A.cj(a.i("@<0>").K(b).i("cj<1,2>"))},
wh(a){return new A.cp(a.i("cp<0>"))},
a_(a){return new A.cp(a.i("cp<0>"))},
aN(a,b){return b.i("ye<0>").a(A.Gc(a,new A.cp(b.i("cp<0>"))))},
wA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fX(a,b,c){var s=new A.f3(a,b,c.i("f3<0>"))
s.c=a.e
return s},
bu(a,b){var s=J.R(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.yd(b,c)
a.ar(0,new A.pB(s,b,c))
return s},
fG(a,b,c){var s=A.yd(b,c)
s.I(0,a)
return s},
hT(a,b){var s,r=A.wh(b)
for(s=J.R(a);s.m();)r.l(0,b.a(s.gn()))
return r},
kh(a,b){var s=A.wh(b)
s.I(0,a)
return s},
Cd(a,b){var s=t.hO
return J.xE(s.a(a),s.a(b))},
wi(a){var s,r
if(A.xm(a))return"{...}"
s=new A.bm("")
try{r={}
B.a.l($.cc,a)
s.a+="{"
r.a=!0
a.ar(0,new A.pE(r,s))
s.a+="}"}finally{if(0>=$.cc.length)return A.d($.cc,-1)
$.cc.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
DI(){throw A.b(A.ba("Cannot change an unmodifiable set"))},
iz:function iz(){},
tt:function tt(a){this.a=a},
iB:function iB(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
f0:function f0(a,b){this.a=a
this.$ti=b},
iA:function iA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cp:function cp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lD:function lD(a){this.a=a
this.c=this.b=null},
f3:function f3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pB:function pB(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(){},
a6:function a6(){},
pD:function pD(a){this.a=a},
pE:function pE(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.$ti=b},
iD:function iD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iT:function iT(){},
fH:function fH(){},
ea:function ea(a,b){this.a=a
this.$ti=b},
dw:function dw(){},
iN:function iN(){},
m_:function m_(){},
fW:function fW(a,b){this.a=a
this.$ti=b},
h4:function h4(){},
iU:function iU(){},
Fc(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.al(r)
q=A.a3(String(s),null,null)
throw A.b(q)}q=A.us(p)
return q},
us(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lB(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.us(a[s])
return a},
DZ(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.AL()
else s=new Uint8Array(o)
for(r=J.aC(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
DY(a,b,c,d){var s=a?$.AK():$.AJ()
if(s==null)return null
if(0===c&&d===b.length)return A.z8(s,b)
return A.z8(s,b.subarray(c,d))},
z8(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xI(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.b(A.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a3("Invalid base64 padding, more than two '=' characters",a,b))},
ya(a,b,c){return new A.hS(a,b)},
En(a){return a.B()},
Dn(a,b){return new A.tw(a,[],A.G3())},
Do(a,b,c){var s,r=new A.bm(""),q=A.Dn(r,b)
q.cU(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
E_(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lB:function lB(a,b){this.a=a
this.b=b
this.c=null},
tv:function tv(a){this.a=a},
lC:function lC(a){this.a=a},
tU:function tU(){},
tT:function tT(){},
jt:function jt(){},
nd:function nd(){},
ex:function ex(){},
jF:function jF(){},
jO:function jO(){},
hS:function hS(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(){},
pq:function pq(a){this.b=a},
pp:function pp(a){this.a=a},
tx:function tx(){},
ty:function ty(a,b){this.a=a
this.b=b},
tw:function tw(a,b,c){this.c=a
this.a=b
this.b=c},
l4:function l4(){},
rN:function rN(a){this.a=a},
tS:function tS(a){this.a=a
this.b=16
this.c=0},
Ai(a){var s=A.du(a,null)
if(s!=null)return s
throw A.b(A.a3(a,null,null))},
A9(a){var s=A.eK(a)
if(s!=null)return s
throw A.b(A.a3("Invalid double",a,null))},
BN(a,b){a=A.aD(a,new Error())
if(a==null)a=A.f8(a)
a.stack=b.p(0)
throw a},
e2(a,b,c,d){var s,r=c?J.y4(a,d):J.y3(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ap(a,b,c){var s,r=A.c([],c.i("q<0>"))
for(s=J.R(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
I(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("q<0>"))
s=A.c([],b.i("q<0>"))
for(r=J.R(a);r.m();)B.a.l(s,r.gn())
return s},
ai(a,b){var s=A.ap(a,!1,b)
s.$flags=3
return s},
yx(a,b,c){var s,r
A.kG(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aZ(c,b,null,"end",null))
if(s===0)return""}r=A.CS(a,b,c)
return r},
CS(a,b,c){var s=a.length
if(b>=s)return""
return A.CA(a,b,c==null||c>s?s:c)},
yp(a){return new A.hN(a,A.y8(a,!1,!0,!1,!1,""))},
ws(a,b,c){var s=J.R(b)
if(!s.m())return a
if(c.length===0){do a+=A.x(s.gn())
while(s.m())}else{a+=A.x(s.gn())
while(s.m())a=a+c+A.x(s.gn())}return a},
eb(){var s,r,q=A.Cp()
if(q==null)throw A.b(A.ba("'Uri.base' is not supported"))
s=$.yD
if(s!=null&&q===$.yC)return s
r=A.D_(q)
$.yD=r
$.yC=q
return r},
CQ(){return A.cK(new Error())},
Bt(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xP(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jH(a){if(a>=10)return""+a
return"0"+a},
BM(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.ah(b,"name","No enum value with that name"))},
jP(a){if(typeof a=="number"||A.bK(a)||a==null)return J.dd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yl(a)},
BO(a,b){A.fc(a,"error",t.K)
A.fc(b,"stackTrace",t.l)
A.BN(a,b)},
jq(a){return new A.jp(a)},
w(a,b){return new A.cv(!1,null,b,a)},
ah(a,b,c){return new A.cv(!0,a,b,c)},
yn(a){var s=null
return new A.fN(s,s,!1,s,s,a)},
yo(a,b){return new A.fN(null,null,!0,a,b,"Value not in range")},
aZ(a,b,c,d,e){return new A.fN(b,c,!0,a,d,"Invalid value")},
kH(a,b,c){if(0>a||a>c)throw A.b(A.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aZ(b,a,c,"end",null))
return b}return c},
kG(a,b){if(a<0)throw A.b(A.aZ(a,0,null,b,null))
return a},
p5(a,b,c,d){return new A.k5(b,!0,a,d,"Index out of range")},
ba(a){return new A.io(a)},
yA(a){return new A.l_(a)},
k(a){return new A.fT(a)},
au(a){return new A.jC(a)},
a3(a,b,c){return new A.G(a,b,c)},
C7(a,b,c){var s,r
if(A.xm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.cc,a)
try{A.F_(a,s)}finally{if(0>=$.cc.length)return A.d($.cc,-1)
$.cc.pop()}r=A.ws(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
wd(a,b,c){var s,r
if(A.xm(a))return b+"..."+c
s=new A.bm(b)
B.a.l($.cc,a)
try{r=s
r.a=A.ws(r.a,a,", ")}finally{if(0>=$.cc.length)return A.d($.cc,-1)
$.cc.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
F_(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.x(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.x(p))
return}r=A.x(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.x(p)
r=A.x(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
wj(a,b,c){var s=A.m(b,c)
s.jX(a)
return s},
cE(a,b,c,d,e,f){var s
if(B.f===c){s=J.aA(a)
b=J.aA(b)
return A.il(A.aP(A.aP($.hl(),s),b))}if(B.f===d){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
return A.il(A.aP(A.aP(A.aP($.hl(),s),b),c))}if(B.f===e){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
return A.il(A.aP(A.aP(A.aP(A.aP($.hl(),s),b),c),d))}if(B.f===f){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
return A.il(A.aP(A.aP(A.aP(A.aP(A.aP($.hl(),s),b),c),d),e))}s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
f=J.aA(f)
f=A.il(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.hl(),s),b),c),d),e),f))
return f},
Cm(a){var s,r,q=$.hl()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q=A.aP(q,J.aA(a[r]))
return A.il(q)},
eR(a,b){return new A.fW(A.kh(a,b),b.i("fW<0>"))},
D_(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.yB(a4<a4?B.b.G(a5,0,a4):a5,5,a3).gh8()
else if(s===32)return A.yB(B.b.G(a5,5,a4),0,a3).gh8()}r=A.e2(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zZ(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zZ(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ac(a5,"\\",n))if(p>0)h=B.b.ac(a5,"\\",p-1)||B.b.ac(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ac(a5,"..",n)))h=m>n+2&&B.b.ac(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ac(a5,"file",0)){if(p<=0){if(!B.b.ac(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.G(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bI(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ac(a5,"http",0)){if(i&&o+3===n&&B.b.ac(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bI(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ac(a5,"https",0)){if(i&&o+4===n&&B.b.ac(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bI(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lR(a4<a5.length?B.b.G(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.DS(a5,0,q)
else{if(q===0)A.h5(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.DT(a5,c,p-1):""
a=A.DO(a5,p,o,!1)
i=o+1
if(i<n){a0=A.du(B.b.G(a5,i,n),a3)
d=A.DQ(a0==null?A.j(A.a3("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.DP(a5,n,m,a3,j,a!=null)
a2=m<l?A.DR(a5,m+1,l,a3):a3
return A.DJ(j,b,a,d,a1,a2,l<a4?A.DN(a5,l+1,a4):a3)},
yF(a){var s=t.N
return B.a.bd(A.c(a.split("&"),t.s),A.m(s,s),new A.rM(B.cd),t.G)},
l3(a,b,c){throw A.b(A.a3("Illegal IPv4 address, "+a,b,c))},
CX(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.l3("each part must be in the range 0..255",a,r)}A.l3("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.l3(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bY(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.l3(j,a,q)
p=l}A.l3("IPv4 address should contain exactly 4 parts",a,q)},
CY(a,b,c){var s
if(b===c)throw A.b(A.a3("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.CZ(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.yE(a,b,c)
return!0},
CZ(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.G(n,a,q)
r=q
break}return new A.G("Unexpected character",a,q-1)}if(r-1===b)return new A.G(n,a,r)
return new A.G("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.G("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.G("Invalid IPvFuture address character",a,r)}},
yE(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rL(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.CX(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.dn(l,8)
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
B.dd.hw(s,a0,16,s,a)
B.dd.li(s,a,a0,0)}}return s},
DJ(a,b,c,d,e,f,g){return new A.iV(a,b,c,d,e,f,g)},
z2(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h5(a,b,c){throw A.b(A.a3(c,a,b))},
DQ(a,b){var s=A.z2(b)
if(a===s)return null
return a},
DO(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.h5(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.DL(a,q,r)
if(o<r){n=o+1
p=A.z7(a,B.b.ac(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.CY(a,q,o)
l=B.b.G(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cJ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.z7(a,B.b.ac(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yE(a,b,o)
return"["+B.b.G(a,b,o)+p+"]"}}return A.DV(a,b,c)},
DL(a,b,c){var s=B.b.cJ(a,"%",b)
return s>=b&&s<c?s:c},
z7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bm(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wE(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bm("")
l=h.a+=B.b.G(a,q,r)
if(m)n=B.b.G(a,r,r+3)
else if(n==="%")A.h5(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bm("")
if(q<r){h.a+=B.b.G(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.G(a,q,r)
if(h==null){h=new A.bm("")
m=h}else m=h
m.a+=i
l=A.wD(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.G(a,b,c)
if(q<c){i=B.b.G(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
DV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wE(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bm("")
k=B.b.G(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.G(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bm("")
if(q<r){p.a+=B.b.G(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h5(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.G(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bm("")
l=p}else l=p
l.a+=k
j=A.wD(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.G(a,b,c)
if(q<c){k=B.b.G(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
DS(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.z4(a.charCodeAt(b)))A.h5(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h5(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.G(a,b,c)
return A.DK(q?a.toLowerCase():a)},
DK(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
DT(a,b,c){return A.iW(a,b,c,16,!1,!1)},
DP(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iW(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.DU(q,e,f)},
DU(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.DW(a,!s||c)
return A.DX(a)},
DR(a,b,c,d){return A.iW(a,b,c,256,!0,!1)},
DN(a,b,c){return A.iW(a,b,c,256,!0,!1)},
wE(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.vm(r)
o=A.vm(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.G(a,b,b+3).toUpperCase()
return null},
wD(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.jF(a,6*p)&63|q
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
o+=3}}return A.yx(s,0,null)},
iW(a,b,c,d,e,f){var s=A.z6(a,b,c,d,e,f)
return s==null?B.b.G(a,b,c):s},
z6(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wE(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h5(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wD(n)}if(o==null){o=new A.bm("")
k=o}else k=o
k.a=(k.a+=B.b.G(a,p,q))+l
if(typeof m!=="number")return A.vn(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.G(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
z5(a){if(B.b.T(a,"."))return!0
return B.b.bD(a,"/.")!==-1},
DX(a){var s,r,q,p,o,n,m
if(!A.z5(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.X(s,"/")},
DW(a,b){var s,r,q,p,o,n
if(!A.z5(a))return!b?A.z3(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gV(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.z3(s[0]))}return B.a.X(s,"/")},
z3(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.z4(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.G(a,0,s)+"%3A"+B.b.b1(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
DM(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.w("Invalid URL encoding",null))}}return r},
wF(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cd===d)return B.b.G(a,b,c)
else p=new A.dT(B.b.G(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.w("Truncated URI",null))
B.a.l(p,A.DM(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.m7.ku(p)},
z4(a){var s=a|32
return 97<=s&&s<=122},
yB(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a3(k,a,r))}}if(q<0&&r>b)throw A.b(A.a3(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gV(j)
if(p!==44||r!==n+7||!B.b.ac(a,"base64",n+1))throw A.b(A.a3("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.es.lG(a,m,s)
else{l=A.z6(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bI(a,m,s,l)}return new A.rK(a,j,c)},
zZ(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a},
lu:function lu(){},
am:function am(){},
jp:function jp(a){this.a=a},
dB:function dB(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
k5:function k5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(a){this.a=a},
l_:function l_(a){this.a=a},
fT:function fT(a){this.a=a},
jC:function jC(a){this.a=a},
kt:function kt(){},
ih:function ih(){},
tf:function tf(a){this.a=a},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(){},
J:function J(){},
lX:function lX(){},
ru:function ru(){this.b=this.a=0},
bm:function bm(a){this.a=a},
rM:function rM(a){this.a=a},
rL:function rL(a){this.a=a},
iV:function iV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rK:function rK(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lq:function lq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pX:function pX(a){this.a=a},
zw(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Ea,a)
s[$.hk()]=a
return s},
X(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.u3,a)
s[$.hk()]=a
return s},
Ea(a){return t.BO.a(a).$0()},
u3(a,b,c){t.BO.a(a)
if(A.e(c)>=1)return a.$1(b)
return a.$0()},
Af(a,b,c){return c.a(a[b])},
zx(a,b){return a[b]},
aK(a,b,c,d){return d.a(a[b].apply(a,c))},
bX(a,b){var s=new A.ar($.an,b.i("ar<0>")),r=new A.iu(s,b.i("iu<0>"))
a.then(A.hh(new A.vX(r,b),1),A.hh(new A.vY(r),1))
return s},
zI(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hi(a){if(A.zI(a))return a
return new A.vi(new A.iB(t.BT)).$1(a)},
vX:function vX(a,b){this.a=a
this.b=b},
vY:function vY(a){this.a=a},
vi:function vi(a){this.a=a},
CB(a){var s
if(a==null)s=B.aU
else{s=new A.eg()
s.bN(a)}return s},
lA:function lA(){},
eg:function eg(){this.b=this.a=0},
qo:function qo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qp:function qp(){},
eL:function eL(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
kA:function kA(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(a,b){this.a=a
this.b=b
this.c=null},
fs:function fs(a,b){this.a=a
this.b=b},
ns:function ns(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nu:function nu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nt:function nt(){var _=this
_.c=_.b=_.a=null
_.d=0},
kz:function kz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s},
fp:function fp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jV:function jV(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
o7:function o7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dZ(a,b){return new A.k2(a,b)},
dv:function dv(){},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
Gv(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.t)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iK(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.P(f,new A.vZ())
s=A.c([],t.cv)
for(r=A.kV(f,0,A.fc(b,"count",t.S),t.mn),q=r.$ti,r=new A.aH(r,r.gt(0),q.i("aH<a1.E>")),q=q.i("a1.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
nP:function nP(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bC:function bC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vZ:function vZ(){},
pG(a,b,c,d,e,f,g,h,i,j){return new A.e3(c,a,h,g,f,e,i,j,b,!0)},
wl(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.x(b),null))},
jo:function jo(a,b){this.a=a
this.b=b},
e3:function e3(a,b,c,d,e,f,g,h,i,j){var _=this
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
Cg(a){A:{break A}return a},
d4:function d4(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
rO:function rO(){},
rP:function rP(){},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pM:function pM(){},
pN:function pN(){},
pO:function pO(){},
i2(a){var s,r=t.N,q=A.aN(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.I(0,A.aN(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.I(0,A.aN(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.I(0,A.aN(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.I(0,A.aN(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pZ(A.eR(q,r),s)},
pZ:function pZ(a,b){this.a=a
this.b=b},
q_:function q_(){},
fP:function fP(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fx:function fx(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e,f,g,h,i,j){var _=this
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
kW:function kW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jB:function jB(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c,d,e,f,g,h,i,j){var _=this
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
eO:function eO(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.a=a
this.b=b
this.d=c},
o9:function o9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Ce(a){var s,r,q
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=B.bs;s.m();){switch(s.d.a){case 0:q=B.bs
break
case 1:q=B.da
break
case 2:q=B.db
break
case 3:q=B.dc
break
default:q=null}if(A.yh(q)>A.yh(r))r=q}return r},
yh(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
A4(a){return new A.bV(A.FC(a),t.EF)},
FC(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$A4(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.aQ("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eH:function eH(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b){this.a=a
this.b=b},
pJ:function pJ(a){this.a=a},
pK:function pK(a){this.a=a},
pH:function pH(a){this.a=a},
pI:function pI(){},
Cf(){return new A.kj(new A.cZ(new A.pL(),A.c([],t.Fy),A.c([],t.t),t.ja))},
kj:function kj(a){this.a=a},
pL:function pL(){},
A1(a){var s=4
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
case 3:s=A.j(A.ba("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
Eh(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.W[r]
if(A.A1(q.a)===b)s+=q.c}return s},
Ch(a){return new A.pP(a,new A.cZ(new A.pQ(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
yi(a){var s
A:{s=a.byteLength
break A}return s},
l1:function l1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(){},
pR:function pR(){},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=a
this.b=b},
rD:function rD(a,b){this.a=a
this.b=b},
rE:function rE(a){this.a=a},
rB:function rB(a,b){this.a=a
this.b=b},
rC:function rC(){},
CT(a){var s=new A.kY(a,new A.cZ(new A.rF(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.aT($.xv())
s.e=s.aT($.xs())
s.f=s.aT($.xt())
s.r=s.aT($.xr())
s.w=s.aT($.xu())
return s},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rF:function rF(){},
rH:function rH(){},
rG:function rG(){},
FV(a){var s,r,q,p,o=A.c([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
p.gE()
B.a.l(o,new A.eG(p,A.c([p],r)))
continue}return o},
eG:function eG(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
o2:function o2(){},
o3:function o3(a){this.a=a},
o0:function o0(a){this.a=a},
o1:function o1(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
o8:function o8(a,b){this.a=a
this.b=b
this.c=0},
Dp(){return new A.fY()},
o6:function o6(a){this.a=a
this.b=null},
fY:function fY(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wn(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
q2:function q2(){},
q3:function q3(){},
ci:function ci(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fO:function fO(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
ht:function ht(a){this.b=a},
kD:function kD(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bl:function bl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qq:function qq(){},
b7:function b7(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qs:function qs(a,b){this.a=a
this.b=b},
qx:function qx(){},
qw:function qw(){},
qv:function qv(){},
qu:function qu(a){this.a=a},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qr:function qr(a,b){this.a=a
this.b=b},
CG(a){return new A.i8(a,new A.cZ(new A.qy(),A.c([],t.w_),A.c([],t.t),t.tc))},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b){this.a=a
this.b=b},
qy:function qy(){},
uL(a,b){return A.Es(a,b)},
Es(a,b){var s=0,r=A.bL(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uL=A.bN(function(c,a0){if(c===1)return A.bH(a0,r)
for(;;)switch(s){case 0:a.bQ()
if(a.at!=null)throw A.b(A.k("renderer.configure cannot overlap an active frame"))
i=a.b
p=i.bV(b)
h=p.a.d
if(!(h.a.gt(0)!==0||h.b.gt(0)!==0||h.c.gt(0)!==0||h.d.gt(0)!==0||h.e||h.f)&&!h.r){i.bW(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.cM(b)
n=new A.kD(a.a,A.m(t.N,t.CH))
l=A.zs(a,n,b,o.a.b.a)
m=l.a
i.bW(p)
h=a.x
g=o
if(h.e)A.j(A.k("GPU resource adapter is disposed"))
h.ev(g)
f=h.c
h.b.bW(g.a)
h.c=g
h.d=null
if(f!=null)h.dc(f.b)
g.c=B.hx
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bA()
h=j
if(h!=null)h.bA()}catch(d){if(p.c===B.aX){h=t.AB.a(p)
i.eD(h)
i.a.fq(h.a)
i.b.dX(h.b)
h.c=B.eS
i.c=null}i=o
if((i==null?null:i.c)===B.af){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.j(A.k("GPU resource adapter is disposed"))
i.ev(h)
i.dc(h.b)
i.b.dX(h.a)
h.c=B.hy
i.d=null}i=m
if(i!=null)i.bA()
i=n
if(i!=null)i.bA()
throw d}case 1:return A.bI(q,r)}})
return A.bJ($async$uL,r)},
zt(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zs(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zs(a,b,c,d){var s,r,q,p,o,n,m,l="sceneColor",k=new A.uJ(a),j=new A.uK(d,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.G_(b,h,B.aW,i,s.gml(),new A.uu(j),new A.uv(j),new A.uw(a),new A.uB(a),new A.uC(a),new A.uD(j),new A.uE(j),s.gmn(),new A.uF(a),s.gmr(),r.gmp(),k,s.gmt(),s.gmv(),new A.uG(j,c),new A.uH(j),new A.uI(j),new A.ux(j),new A.uy(j),new A.uz(a),new A.uA(j),e,f,g,c.r)}else{p=new A.aI(l,B.r,g,f,e,0)
o=new A.aI(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hW(h,p,o):null
k=A.c([new A.lg(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i5(b,u.l,u.B,h,i,B.aW))
q=new A.jT(k)}a.r.toString
m=q.kh(B.a3,new A.qq(),!1,new A.lK())
k=m.a.b
if(k.length!==0)throw A.b(A.k("safe renderer graph is invalid: "+A.x(k)))
return new A.tO(q,m)},
Et(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.k("renderer graph is not initialized"))
s=A.I(b7.gfS(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.a9()
p=p.gaq()
n=A.C(p)
B.a.l(s,new A.lY(new A.cy((r|1073741824)>>>0,0,"transient"),q,A.b2(new A.M(p,n.i("K(1)").a(o.gaw()),n.i("M<1,K>")))))}p=b8.a
m=A.G5(A.BS(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dZ(B.aB,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a2(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dZ(B.aB,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.a2(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.o6(n)
e.kd("cull")
j=l-f
d=e.b
if(d==null)A.j(A.k("cull recorded outside an active frame"))
if(j<0)A.j(A.w("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.t)(s),++k){a2=s[k]
if(a2.gE().e===B.aY)B.a.l(a,new A.aO(new A.bO(a0.h6(a2.gE().c.a).c,a2.ga8().a),a2,a1))
else B.a.l(b,new A.aO(new A.bQ(B.kv,a2.gE().b,a2.gE().a,a2.ga8().a),a2,g))}a3=new A.lw(A.FV(A.Gx(b)),A.Gw(a),p,b8.b,b8.c)
a4=new A.jK(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.t)(s),++k){a5=s[k]
g=a5.gE().a
if(g.length===0)A.j(A.ah(g,"passId",null))
e.b=g
n.ce(g,A.Ab())
a6=A.m(o,i)
for(g=a5.gE().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.t)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.j(A.k("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.j(A.k("resource is not in candidate: "+b1))
b3=new A.fn(b2)
a6.k(0,b0+"#"+a1,b3)
a6.ce(b0,new A.uM(b3))}a5.ak(new A.jx(a6,a4,a3))}return new A.tg(e,m,j)},
yu(a){return new A.qH(a,new A.nr(new A.nt(),new A.kK()),new A.o8(A.c([],t.h1),B.hi),A.c([],t.Ft),B.bC,A.c([],t.ow),null)},
qC:function qC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
tg:function tg(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
uJ:function uJ(a){this.a=a},
uK:function uK(a,b){this.a=a
this.b=b},
uI:function uI(a){this.a=a},
uB:function uB(a){this.a=a},
uC:function uC(a){this.a=a},
uH:function uH(a){this.a=a},
uw:function uw(a){this.a=a},
uy:function uy(a){this.a=a},
ux:function ux(a){this.a=a},
uG:function uG(a,b){this.a=a
this.b=b},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
uF:function uF(a){this.a=a},
uA:function uA(a){this.a=a},
uz:function uz(a){this.a=a},
uM:function uM(a){this.a=a},
tO:function tO(a,b){this.a=a
this.b=b},
lK:function lK(){},
lw:function lw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qH:function qH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qI:function qI(){},
qJ:function qJ(){},
qK:function qK(){},
lH:function lH(a){this.b=a},
ts:function ts(){},
lO:function lO(){},
ig:function ig(a,b){this.a=a
this.b=b},
Gx(a){var s,r,q=A.I(a,t.E0)
B.a.P(q,new A.w2())
s=A.C(q)
r=s.i("M<1,c4>")
s=A.I(new A.M(q,s.i("c4(1)").a(new A.w3()),r),r.i("a1.E"))
s.$flags=1
return s},
Gw(a){var s,r,q=A.I(a,t.EH)
B.a.P(q,new A.w0())
s=A.C(q)
r=s.i("M<1,c4>")
s=A.I(new A.M(q,s.i("c4(1)").a(new A.w1()),r),r.i("a1.E"))
s.$flags=1
return s},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
w2:function w2(){},
w3:function w3(){},
w0:function w0(){},
w1:function w1(){},
G5(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p];++r
if((o.gE().d&c)>>>0===0){++q
continue}n=o.ge3()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.w("cullItems: non-finite world bounds for instance "+o.ga8().p(0),null))
if(a.mD(o.ge3())===B.cs){++q
continue}B.a.l(l,o)}return new A.nJ(l,new A.nK(q))},
nK:function nK(a){this.b=a},
nJ:function nJ(a,b){this.a=a
this.b=b},
b2(a){var s,r,q,p,o,n,m,l,k
for(s=J.R(a),r=B.ma,q=B.mb,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.K(m,k,Math.min(r.c,o))
q=new A.K(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.w("Aabb.fromPoints requires at least one point",null))
return new A.jk(r,q)},
jk:function jk(a,b){this.a=a
this.b=b},
BS(a){var s,r,q,p,o,n,m=a.a,l=new A.ob(),k=m.length
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
return new A.oa(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eJ:function eJ(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
oa:function oa(a){this.a=a},
ob:function ob(){},
yf(a){if(a.length!==16)throw A.b(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dr(new Float32Array(A.a0(a)))},
wk(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dr(q)},
yg(a,b,c){var s=b.gau(),r=c.bx(s).gau(),q=s.bx(r),p=new Float32Array(16)
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
p[12]=-r.c0(a)
p[13]=-q.c0(a)
p[14]=s.c0(a)
p[15]=1
return new A.dr(p)},
dr:function dr(a){this.a=a},
pF:function pF(){},
kF:function kF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kZ:function kZ(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ln:function ln(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jw:function jw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lo:function lo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jJ:function jJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lr:function lr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ix:function ix(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ls:function ls(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jM:function jM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lt:function lt(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
k1:function k1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
ly:function ly(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.b=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
bx(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aI(a.a,a.b,b,c,s,r)},
wo:function wo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kE:function kE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lM:function lM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yw(a){var s=a.c,r=Math.abs(s.a)<0.99?B.m9:B.a6,q=A.yg(a.b,s,r)
return new A.eT(A.wk(1,a.f,B.c.D(a.w*2,0.1,3),0.05).an(0,q))},
eT:function eT(a){this.a=a},
kO:function kO(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lP:function lP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
G_(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.b(A.ah(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.a2(e5+1,2)
m=B.d.a2(e4+1,2)
l=A.bx(B.bF,e5,e4,e3,a8)
k=A.bx(B.bF.fU(),e5,e4,a8,a8)
A.bx(B.l9,e5,e4,a8,a8)
j=A.bx(B.l6,e5,e4,a8,a8)
i=A.bx(B.l1,e6,e6,a8,a8)
h=A.bx(B.l2,b6,m,a8,a8)
g=A.bx(B.l3,b6,m,a8,a8)
f=A.bx(B.l7,b6,m,a8,a8)
e=A.bx(B.l8,b6,m,a8,a8)
d=$.Av()
c=e3>1
b=A.bx(d,e5,e4,a8,c?2:1)
d=A.bx(B.kZ,b6,m,a8,a8)
a=A.bx(B.l_,b6,m,a8,a8)
a0=A.bx(B.l0,e5,e4,a8,a8)
a1=A.bx(B.l4,e5,e4,a8,a8)
a2=A.bx(B.la,e5,e4,a8,a8)
a3=A.bx(B.l5,e5,e4,a8,a8)
a4=c?new A.hW(b8,l,k):a8
b5.a=null
a5=A.yw(B.lN)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.I(a7,A.c([new A.hr(b7,a9,b0,b8,b1,b1,B.e0,!0,k,f,d6,b6,m),new A.hr(b7,a9,b0,b8,b2,b2,B.mQ,!1,f,e,c2,b6,m),new A.jw(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.I(a7,A.c([new A.hy(b7,a9,b0,b8,b3,b3,B.e1,k,d,d6,b6,m),new A.hy(b7,a9,b0,b8,b4,b4,B.mR,d,a,c7,b6,m),new A.jM(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.k1(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kE(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.l5(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.jJ(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kS(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kR(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kO(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.vf(b5),i))
j.push(new A.kP(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.vg(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.I(j,a7)
j.push(new A.i5(b7,a9,u.B,b8,k,b9))
return new A.jT(j)},
vf:function vf(a){this.a=a},
vg:function vg(a,b){this.a=a
this.b=b},
kP:function kP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lQ:function lQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kS:function kS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lT:function lT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kR:function kR(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lS:function lS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l5:function l5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m0:function m0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lg:function lg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
m3:function m3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
np:function np(){},
kN(a,b){return new A.ie(a,b)},
jZ:function jZ(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eD:function eD(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
y:function y(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function ot(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
ou:function ou(){},
ov:function ov(){},
h0:function h0(a,b){this.a=a
this.b=b},
ej:function ej(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
xS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fy(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
ju:function ju(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b8:function b8(a,b){this.a=a
this.b=b},
t5:function t5(){this.a=null},
D4(a){var s=new A.le(a,B.h,new A.t5(),A.Df(a))
s.ia(a)
return s},
Df(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.R(t.a.b(q)?q:new A.aW(q,A.C(q).i("aW<1,h>")))
while(r.m())s.l(0,r.gn())
return s},
c9(a,b){var s,r
if(a.b!==B.h)A.j(A.k(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.e(s.drawingBufferWidth),A.e(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
Da(a,b){var s
if(a.b!==B.h)A.j(A.k(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.e(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
D9(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.k("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
D8(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.e(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
D7(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yI(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.e(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.e(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.e(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
D5(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bo(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=a.f
r=s.l1(b)
if(r.a===0)return
if(r.q(0,B.bJ)){q=v.G
p=a.a
if(b.a)p.enable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bK))a.a.depthFunc(A.D8(a,b.b))
if(r.q(0,B.bL))a.a.depthMask(b.c)
if(r.q(0,B.bP)){q=v.G
p=a.a
if(b.w)p.enable(A.e(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.e(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bQ))a.a.cullFace(A.D7(a,b.x))
if(r.q(0,B.dN)){q=v.G.WebGL2RenderingContext
q=A.e(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bM)){q=v.G
p=a.a
if(b.d)p.enable(A.e(q.WebGL2RenderingContext.BLEND))
else p.disable(A.e(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bN))a.a.blendFunc(A.yI(a,b.e),A.yI(a,b.f))
if(r.q(0,B.bO))a.a.blendEquation(A.D5(a,b.r))
if(r.q(0,B.dL))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dM)){q=v.G.WebGL2RenderingContext
a.a.disable(A.e(q.SCISSOR_TEST))}s.a=b},
D6(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.e(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.e(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.e(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dE(a,b,c,d,e,f){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.D6(a,b))},
co(a,b){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.j(A.k(u.k))
s=a.e
if(s==null)throw A.b(A.k("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.E(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.br(c.b))
break
case 1:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
m=p[1]
if(2>=o)return A.d(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
m=p[1]
if(2>=o)return A.d(p,2)
l=p[2]
if(3>=o)return A.d(p,3)
A.aK(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.e(c.b))
break}},
bE(a,b){if(a.b!==B.h)A.j(A.k(u.k))
a.a.bindVertexArray(A.a(b.a))},
aE(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.j(A.k(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iY){p=s.d>1?A.e(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iX){o=s.b
if(o!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.k("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.k("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Db(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.e(p.ELEMENT_ARRAY_BUFFER),c,A.e(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
Dc(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yL(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
r=A.E(s.createBuffer())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cF?A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.e(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.Dc(a,b.b))
return new A.dH(r)},
yJ(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yK(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
Dd(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
wv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.h)A.j(A.k(u.k))
s=a.a
r=A.E(s.createTexture())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.e(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.Dd(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aK(s,"texStorage3D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aK(s,"texStorage2D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yJ(a,b.e))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yJ(a,b.f))
p=b.r
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yK(a,p))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yK(a,p))
h=a.r.q(0,"EXT_texture_filter_anisotropic")
g=h?a.eZ(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.j(A.ah(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dH(new A.iY(r,j,i,q,m))},
ww(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.j(A.k(u.k))
s=t.h.a(b.a)
r=s.d
if(c>=r)throw A.b(A.w("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.w("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.e(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aK(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aK(l,"texSubImage2D",[m,0,0,0,q,p,A.e(n.WebGL2RenderingContext.RGBA),A.e(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
yM(a,b){var s,r,q
if(a.b!==B.h)A.j(A.k(u.k))
s=t.h.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.e(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
lf(a,b){a.a.deleteTexture(t.h.a(b.a).a)},
yO(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.j(A.k(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.E(r.createFramebuffer())
if(q==null)throw A.b(A.k("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.b0
if(n&&!a1.e)throw A.b(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cH||o===B.hA
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.e(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.aK(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.aK(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.E(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.aK(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aK(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.E(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.aK(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.LINEAR))
A.aK(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.e(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.c([A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.E(r.createRenderbuffer())
r.bindRenderbuffer(A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.aK(r,c,[A.e(p.WebGL2RenderingContext.RENDERBUFFER),o,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.E(r.createTexture())
r.bindTexture(A.e(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.aK(r,b,[A.e(p.WebGL2RenderingContext.TEXTURE_2D),1,A.e(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.e(p.WebGL2RenderingContext.TEXTURE_2D),A.e(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.e(p.WebGL2RenderingContext.NEAREST))
A.aK(r,a,[A.e(p.WebGL2RenderingContext.FRAMEBUFFER),A.e(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.e(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.e(r.checkFramebufferStatus(A.e(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.e(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wx(a0,q,l,k,f,e,j,i)
throw A.b(A.k("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dH(new A.iX(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wx(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d7(a){var s
if(a.b!==B.h)A.j(A.k(u.k))
s=A.E(a.a.createVertexArray())
if(s==null)throw A.b(A.k("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dH(s)},
yN(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.E(p.createShader(b))
if(o==null)throw A.b(A.kN(b===A.Af(A.zx(A.At(),r),q,t.S)?B.dG:B.dH,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ad(A.hi(p.getShaderParameter(o,A.e(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aB(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kN(b===A.Af(A.zx(A.At(),r),q,t.S)?B.dG:B.dH,s))}return o},
De(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.j(A.k(u.k))
q=v.G
s=A.yN(a,A.e(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yN(a,A.e(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.E(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lz)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ad(A.hi(o.getProgramParameter(n,A.e(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aB(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kN(B.dI,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.t)(c),++l){k=c[l]
if(A.e(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kN(B.dJ,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.E(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kN(B.dJ,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dH(n)},
dH:function dH(a){this.a=a},
iY:function iY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iX:function iX(a,b,c,d,e,f,g,h,i,j){var _=this
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
m2:function m2(a){this.a=a
this.b=!1},
le:function le(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
t3:function t3(a){this.a=a},
t4:function t4(a){this.a=a},
tW:function tW(){},
m1:function m1(){},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mZ(a,a0){var s=0,r=A.bL(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mZ=A.bN(function(a1,a2){if(a1===1)return A.bH(a2,r)
for(;;)switch(s){case 0:p=A.a(new v.G.AudioContext())
o=t.m
n=A.m(t.N,o)
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
b=new A.jr(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aU,A.m(o,t.jS))
b.hV(p,a0)
p=A.o(a).i("H<1,2>")
s=3
return A.as(A.od(A.ki(new A.H(a,p),p.i("c_<aq>(n.E)").a(new A.n_(b)),p.i("n.E"),t.ls),t.c),$async$mZ)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.iW():n
c.buffer=p
q=b
s=1
break
case 1:return A.bI(q,r)}})
return A.bJ($async$mZ,r)},
jr:function jr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
n0:function n0(){},
n_:function n_(a){this.a=a},
n2:function n2(a,b){this.a=a
this.b=b},
n1:function n1(a,b){this.a=a
this.b=b},
n3:function n3(a,b,c){this.a=a
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
Ba(a,b,c,d,e,f,g){var s=new A.mQ(c,f,b,g,new A.f(d.a,d.b,d.c),e,a)
s.hX(a,b,c,d,0,e,f,g)
return s},
B6(a,b){var s=new A.my(b)
s.hU(a,b)
return s},
B9(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.H(a,A.o(a).i("H<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.ap(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mM(A.aY(n,r,t.a))
n.hW(a)
return n},
Fx(a,b){var s,r,q,p=b>>>0
for(s=new A.dT(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.Ah(p,q==null?r.a(q):q)}return p&2147483647},
js:function js(a,b){this.a=a
this.b=b},
mQ:function mQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mR:function mR(){},
my:function my(a){this.a=a},
mz:function mz(){},
hp:function hp(){},
mA:function mA(){},
mB:function mB(){},
mM:function mM(a){this.a=a},
mO:function mO(){},
mP:function mP(){},
mN:function mN(){},
wa:function wa(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mY:function mY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mS:function mS(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function mT(a){this.a=a},
mU:function mU(){},
it:function it(a,b){this.a=a
this.b=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
nm:function nm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
o5:function o5(a){this.a=a},
k6:function k6(a,b,c,d,e,f,g,h,i,j){var _=this
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
p7:function p7(a){this.a=a},
C1(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.H(a,A.o(a).i("H<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ap(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.p6(n)},
p6:function p6(a){this.a=a},
pa:function pa(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aV:function aV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pw:function pw(a,b,c){this.a=a
this.c=b
this.e=c},
pt:function pt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pu:function pu(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(){},
nL:function nL(){this.b=this.a=0},
pC:function pC(a){this.a=a
this.b=0
this.e=!1},
ii(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bY(a)
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
d1:function d1(a){this.a=a
this.b=0},
ip(a,b,c){return new A.f(a,b,c)},
yG(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.f(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
f:function f(a,b,c){this.a=a
this.b=b
this.c=c},
Dg(a,b,c,d){return new A.lh(d,b,c,a)},
Di(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.AH()
s=a.d
r=A.t7(s,0)
q=A.t7(s,1)
p=A.t7(s,2)
o=A.t7(s,3)
s=t.N
n=A.a_(s)
m=a.e
if(A.bF(m,0))n.l(0,"GamepadA")
if(A.bF(m,1))n.l(0,"GamepadB")
if(A.bF(m,2))n.l(0,"GamepadX")
if(A.bF(m,3))n.l(0,"GamepadY")
if(A.bF(m,4))n.l(0,"GamepadLB")
if(A.bF(m,5))n.l(0,"GamepadRB")
if(A.bF(m,6))n.l(0,"GamepadLT")
if(A.bF(m,7))n.l(0,"GamepadRT")
if(A.bF(m,8))n.l(0,"GamepadView")
if(A.bF(m,9))n.l(0,"GamepadMenu")
if(A.bF(m,10))n.l(0,"GamepadLStick")
if(A.bF(m,11))n.l(0,"GamepadRStick")
if(A.bF(m,12))n.l(0,h)
if(A.bF(m,13))n.l(0,g)
if(A.bF(m,14))n.l(0,f)
if(A.bF(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.f(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gau():i
return new A.lh(m,p,o,A.eR(n,s))},
t7(a,b){return A.Dh(b<a.length?a[b]:0)},
bF(a,b){return b<a.length&&a[b]>=0.5},
Dh(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc8(a)?-s:s},
kT:function kT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nf:function nf(a){this.a=a},
Bx(a,b,c){var s=new A.jN(a,c,null,b)
s.i0(a,null,null,b,c)
return s},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
BK(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bu(new A.F(B.jg,t.e2.a(new A.nY(a)),t.vL),t.yW)
return s==null?null:new A.fz(s)},
Ci(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.wm(s,a,B.iR)
break
case 1:A.wm(s,a,B.iS)
break
case 2:A.wm(s,a,B.jj)
break}return s},
wm(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
BJ(a){if(a.a!==21)return null
if(a.e)return B.f6
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f7
return B.f5},
cg:function cg(a,b){this.a=a
this.b=b},
nV:function nV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fz:function fz(a){this.a=a},
nY:function nY(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
Co(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.r(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.kx(s,new A.f(o,n,m),q,p,l,j)
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
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Fz(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.fk)
p.k(0,q,r.b)}return p},
ma(a){var s,r,q,p,o,n=a.ga1().bJ(0)
B.a.Y(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.t)(n),++p){o=n[p]
r.k(0,o,A.zp(a.h(0,o)))}return A.aY(r,t.N,s)},
zp(a){var s
if(t.f.b(a))return A.ma(A.Fz(a))
if(t.j.b(a)){s=t.z
return A.ai(J.fh(a,A.Gq(),s),s)}if(a==null||A.bK(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fX)
return a}throw A.b(A.a3("presentation snapshot contains unsupported value "+J.fg(a).p(0),null,null))},
qi:function qi(a){this.a=a},
yt(a,b,c){var s=A.wM(b),r=A.wM(a)
if(c!==2)A.j(A.ah(c,"version","unsupported save version"))
return new A.fQ(c,s,r)},
wM(a){var s,r,q,p,o=A.o(a).i("aa<1>"),n=A.I(new A.aa(a,o),o.i("n.E"))
B.a.Y(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.t)(n),++q){p=n[q]
s.k(0,p,A.zo(a.h(0,p)))}return A.aY(s,t.N,o)},
zo(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fO)
s.k(0,p,q.b)}return A.wM(s)}if(t.j.b(a)){r=t.z
return A.ai(J.fh(a,A.Gu(),r),r)}if(a==null||A.bK(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fZ)
return a}throw A.b(A.a3("save contains unsupported value "+J.fg(a).p(0),null,null))},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
qG:function qG(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
xW(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.og(a,b,c,d,e,f,g,s,r,h)},
xX(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aJ(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.b(B.fN)
r=c.h(0,"runSeed")
q=A.aJ(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aJ(p)||p<1||typeof o!="number")throw A.b(B.h7)
if(!isFinite(5760))throw A.b(A.ah(5760,"daySeconds","must be finite and > 0"))
n=new A.jX(p,7,5760)
if(!isFinite(o)||o<0||o>=24)A.j(A.a3("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.Cb(a5,A.aM(a1,s,m))
k=A.Bu(l,A.aM(a0,s,m),n)
j=A.xZ(b)
A.C0(A.aM(a2,s,m)).k7(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bK(f))A.j(B.fs)
e=A.Cj(c.h(0,"narrative"))
if(e==null)e=A.pT(d,d,d)
return A.xW(b,q,j,n,l,k,new A.jL(i,h,g,f),e)},
Er(a){var s
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
eC:function eC(a,b){this.a=a
this.b=b},
jW:function jW(){},
oh:function oh(a,b){this.a=a
this.b=b},
og:function og(a,b,c,d,e,f,g,h,i,j){var _=this
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
oi:function oi(a){this.a=a},
oj:function oj(){},
ok:function ok(){},
ol:function ol(a){this.a=a},
om:function om(){},
Bc(a){var s,r,q,p,o,n,m="modelScale",l=A.mi(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.a4(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.b(B.fE)
s=A.ep(l,"houseId")
r=A.ep(l,"sourceRef")
q=J.fh(A.mf(l,"rooms"),new A.n5(k),t.bJ)
q=A.I(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.fh(A.mf(l,"portals"),new A.n6(k),t.lT)
p=A.I(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.fh(A.mf(l,"stairs"),new A.n7(),t.gI)
o=A.I(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.fh(A.mf(l,"exteriorCells"),new A.n8(),t.N)
n=A.I(n,n.$ti.i("a1.E"))
n.$flags=1
return new A.n4(s,r,q,p,o)},
Bd(a,b){var s=A.mi(a,"room"),r=A.ep(s,"id"),q=A.zY(s.h(0,"origin"),"origin",b),p=A.zY(s.h(0,"size"),"size",b),o=J.fh(A.mf(s,"windows"),new A.na(b),t.ya)
o=A.I(o,o.$ti.i("a1.E"))
o.$flags=1
return new A.fj(r,q,p,o)},
mi(a,b){return t.P.b(a)?a:A.j9(b+" is not an object")},
mf(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.j9(b+" is not a list")},
ep(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.j9(b+" is not a string")},
jd(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.j9(b+" is not finite")},
FN(a,b){var s,r
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.vd())}else s=!0
if(s)return A.j9(b+" is not a finite vec3")
s=A.c([],t.n)
for(r=J.R(a);r.m();)s.push(A.a4(r.gn()))
return s},
zY(a,b,c){var s,r,q,p=A.c([],t.n)
for(s=A.FN(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)p.push(s[q]*c)
return p},
j9(a){return A.j(A.a3(a,null,null))},
n4:function n4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
n5:function n5(a){this.a=a},
n6:function n6(a){this.a=a},
n7:function n7(){},
n8:function n8(){},
n9:function n9(a){this.a=a},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
na:function na(a){this.a=a},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
fi:function fi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fk:function fk(a){this.b=a},
vd:function vd(){},
jy:function jy(a,b){this.a=a
this.b=b
this.d=null},
nq:function nq(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
li:function li(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oK:function oK(){this.b=0},
Z:function Z(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jQ:function jQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o_:function o_(){},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
oM:function oM(){},
oL:function oL(a,b,c){this.a=a
this.b=b
this.c=c},
GD(a){var s,r,q,p,o,n,m,l
a.C()
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
return new A.cl(B.ac,p,new Uint16Array(A.a0(a.b)),new A.jk(new A.K(s.a,s.b,s.c),new A.K(s.d,s.e,s.f)))},
GC(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Fw(a,new A.w4(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jR(o,p.c,p.e))}return n},
Fw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.m(t.N,t.Ez)
for(r=a.b,q=r.length,p=t.t,o=a.a,n=0;n<q;n+=3){m=r[n]
l=n+1
if(!(l<q))return A.d(r,l)
k=r[l]
l=n+2
if(!(l<q))return A.d(r,l)
j=r[l]
l=o.length
if(!(m<l))return A.d(o,m)
i=o[m]
h=i.x
if(!(k<l))return A.d(o,k)
g=o[k]
f=g.x
if(f===h){if(!(j<l))return A.d(o,j)
e=o[j].x!==h}else e=!0
if(e){if(!(j<l))return A.d(o,j)
throw A.b(A.w("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.d(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.q(d,":")?B.b.G(d,0,B.b.bD(d,":")):null
l=new A.d8(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.I(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("aj<2>")
q=A.I(new A.aj(s,q),q.i("n.E"))
B.a.P(q,new A.v7())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.t)(q),++c)r.push(q[c].mP(a))
return r},
E9(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jQ(r,q,p,o,n,m)},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
w4:function w4(a){this.a=a},
v7:function v7(){},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ez:function ez(a,b){this.a=a
this.b=b},
jS:function jS(){},
FY(a){var s,r,q,p=new A.oL(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.Eu(p,a,B.d0[s],15.75,15.75,12.044999999999998,0.63)
p.A(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.A(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.A(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.A(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.A(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.A(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.A(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.Z(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.Z(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ad(r,new A.Z(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ad(r,q,new A.Z(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.Z(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.Z(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ad(q,new A.Z(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ad(q,r,new A.Z(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ad(new A.Z(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.Z(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.Z(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ad(new A.Z(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.Z(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.Z(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.Z(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.Z(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ad(r,new A.Z(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ad(r,q,new A.Z(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.Z(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.Z(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ad(q,new A.Z(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ad(q,r,new A.Z(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.Fm(p,15.75,15.75,12.044999999999998,16.32)
A.Ec(p,15.75,15.75,16.32)
A.Eq(p,15.75,15.75,12.044999999999998)
A.Ey(p,a,15.75)
A.Fs(p,15.75,15.75)
A.E8(p,15.75)
return p.kf()},
Eu(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.x!==b7,p=B.m!==b7,o=B.l===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=b6.aA(k)
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
B.a.l(b4,new A.ef(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aJ(i),b=J.R(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aH(i)!==b7)continue
B:{if(!p||o){a0=g+a.af(i)
break B}if(!q||n){a0=e+a.af(i)
break B}a0=null}B.a.l(b4,new A.ef(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.m||b7===B.l?b8:b9
r=t.i
a1=A.aN([0,s],r)
a2=A.aN([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.t)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.I(a1,a1.$ti.c)
B.a.Y(a4)
a5=A.I(a2,a2.$ti.c)
B.a.Y(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.uO(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.Ex(b5,b4,b7,b8,b9,c1)
A.Ev(b5,b4,b7,b8,b9,c1)
A.Ew(b5,b4,b7,b8,b9,c0,c1)},
Ew(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aN([0,a4===B.m||a4===B.l?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.t)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.I(a1,a1.$ti.c)
B.a.Y(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.M(a3,new A.uN(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
Ev(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Ex(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.Fq(a2,g,a4,a5,a6,a7,q)}},
Fq(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
Fm(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.Fn(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
Fn(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.Z(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.Z(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ad(n,new A.Z(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ad(n,m,new A.Z(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.Z(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.Z(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ad(m,new A.Z(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ad(m,n,new A.Z(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Ec(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
Eq(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Ey(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.af("hall")
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
Fs(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
E8(a,b){var s,r
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
uO:function uO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uN:function uN(a,b,c){this.a=a
this.b=b
this.c=c},
Gs(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.xo(b,d,c)
if(k!=null&&!k.e){s=k.b
return new A.dW(B.fb,k.a,s)}r=A.Ar(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.dW(B.fc,r.a,s)}if(A.As(b,d,c)!=null)return B.fg
q=A.Gr(a,b,c,d)
if(q!=null)return new A.dW(B.cn,q.a,"inspect the "+q.b)
p=A.Aq(b,c,d,e)
if(p!=null){o=e.cF(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.dW(B.fe,l,m?"inspect the "+o.b:"inspect "+n)}return B.fh},
Aq(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mo(a5,s,4.5)
for(q=a6.m6(a4),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cF(i.c)
g=i.f.a
f=i.h5(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.f(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gau()
a0=a3.b
a1=Math.acos(B.c.D(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mp(a5,a4,a3.a,new A.f(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Gr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hg(c)
if(s.length===0)return f
r=d.aA(e)
q=A.mo(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.t)(s),++l){k=s[l]
j=b.a
i=new A.f(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gau()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mp(d,c,b.a,new A.f(n,m,o)))return k}return f},
dj:function dj(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
FZ(a,b){var s,r=new A.d1(new Float32Array(5376)),q=new A.d1(new Float32Array(5376)),p=new A.d1(new Float32Array(5376)),o=new A.d1(new Float32Array(5376)),n=b.d,m=a.aA(b),l=A.k4(b.y),k=A.k4(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cO(new A.f(j,i,h),new A.f(j,i,f),new A.f(d,i,f),new A.f(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cO(new A.f(j,i,h),new A.f(d,i,h),new A.f(d,i,f),new A.f(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.E1(p,a,b,m,B.d0[s])
for(j=a.aJ(b.a),i=J.R(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.zd(o,b,m,h,!0)}j=B.t.aR(r.a,0,r.b)
i=B.t.aR(q.a,0,q.b)
h=B.t.aR(p.a,0,p.b)
B.t.aR(o.a,0,o.b)
return new A.qD(j,i,h)},
FW(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.d1(new Float32Array(5376))
r=a.aA(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.ze(s,b,r,c,q)
return B.t.aR(s.a,0,s.b)},
FX(a,b){var s,r,q,p=new A.d1(new Float32Array(5376)),o=a.aA(b)
for(s=a.aJ(b.a),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.zd(p,b,o,q,!1)}return B.t.aR(p.a,0,p.b)},
E1(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.m||a4===B.l?a3.a:a3.c,a=A.c([],t.l5)
for(s=a2.a,r=a1.aJ(s),q=J.R(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
if(!p.as&&p.aH(s)===a4)a.push(new A.ee(p.af(s),p.af(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.ee(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aN([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.t)(a),++o){m=a[o]
r.I(0,A.c([m.a,m.b],p))}l=A.I(r,r.$ti.c)
B.a.Y(l)
s=A.aN([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.t)(a),++o){m=a[o]
s.I(0,A.c([m.c,m.d],p))}k=A.I(s,s.$ti.c)
B.a.Y(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.u_(f,e,d,c)))continue
A.FO(a0,a2,a3,a4,f,e,d,c)}A.E2(a0,a2,a3,a4,b,a)},
E2(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tY(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tY(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tY(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tY(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.aT(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.aT(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.aT(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.aT(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.C(a9),o=r.i("l(1)").a(new A.tZ(b3)),a9=B.a.gu(a9),r=new A.S(a9,o,r.i("S<1>")),o=b2.c,i=b3!==B.m,e=b3===B.l,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.aT(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.aT(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.aT(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.aT(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.E3(b0,b1,b2,b3,b,p)}},
E3(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
A.aT(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.aT(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.aT(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.aT(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.aT(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
tY(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.FD(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aT(a,b,c,d,n,o,g,h,i,j)}},
FD(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.c([new A.h1(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.c([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.t)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.h1(j,m))
j=k.b
if(n<j)B.a.l(p,new A.h1(n,j))}h=p}return h},
aT(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.ao(a,new A.f(r+e,q+g,p),new A.f(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.ao(a,new A.f(r+e,q+g,s-i),new A.f(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.ao(a,new A.f(s-i,q+g,p+e),new A.f(s,q+h,p+f),j)
return
case 3:A.ao(a,new A.f(r,q+g,p+e),new A.f(r+i,q+h,p+f),j)
return}},
ao(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.f(o,n,m),k=c.a,j=new A.f(k,n,m),i=c.b,h=new A.f(k,i,m),g=new A.f(o,i,m)
m=c.c
s=new A.f(o,n,m)
r=new A.f(k,n,m)
q=new A.f(k,i,m)
p=new A.f(o,i,m)
a.aB(j,l,g,h,d)
a.aB(s,r,q,p,d)
a.aB(l,s,p,g,d)
a.aB(r,j,h,q,d)
a.aB(l,j,r,s,d)
a.aB(g,p,q,h,d)},
FO(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.f(i+e,h+a0,g)
break
case 2:s=new A.f(i+f,h+a0,g+c.c)
break
case 1:s=new A.f(i+c.a,h+a1,g+f)
break
case 3:s=new A.f(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.f(i+f,h+a0,g)
break
case 2:r=new A.f(i+e,h+a0,g+c.c)
break
case 1:r=new A.f(i+c.a,h+a1,g+e)
break
case 3:r=new A.f(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.f(i+f,h+a1,g)
break
case 2:q=new A.f(i+e,h+a1,g+c.c)
break
case 1:q=new A.f(i+c.a,h+a0,g+e)
break
case 3:q=new A.f(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.f(i+e,h+a1,g)
break
case 2:p=new A.f(i+f,h+a1,g+c.c)
break
case 1:p=new A.f(i+c.a,h+a0,g+f)
break
case 3:p=new A.f(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.f(0,0,0.003)
break
case 2:o=new A.f(0,0,-0.003)
break
case 1:o=new A.f(-0.003,0,0)
break
case 3:o=new A.f(0.003,0,0)
break
default:o=k}n=b.x
m=A.k4(n).e
a.cO(s.ah(0,o),r.ah(0,o),q.ah(0,o),p.ah(0,o),A.k4(n).c,(f-e)/m,(a1-a0)/m)
l=A.FP(b,d)
switch(j){case 0:o=new A.f(s.a,s.b,s.c-l)
break
case 2:o=new A.f(r.a,s.b,s.c)
break
case 1:o=new A.f(s.a,s.b,p.c)
break
case 3:o=new A.f(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.f(r.a,q.b,s.c)
break
case 2:j=new A.f(s.a,q.b,s.c+l)
break
case 1:j=new A.f(s.a+l,q.b,r.c)
break
case 3:j=new A.f(p.a,q.b,r.c)
break
default:j=k}A.ao(a,o,j,A.Ft(A.k4(n).c,0.68))},
Ft(a,b){var s,r=new A.v5(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hz()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hz()
r=r.$1(a&255)
if(typeof r!=="number")return A.vn(r)
return(q<<16|s<<8|r)>>>0},
FP(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
zd(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aH(d),b=a3.af(d),a=b+a3.w
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
A.ao(a0,new A.f(r+l,s,d),new A.f(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.ao(a0,new A.f(l,s,d),new A.f(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.ao(a0,new A.f(r+n,s+m,d),new A.f(r+h,j,i),q)
A.ao(a0,new A.f(k,s,d),new A.f(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.ao(a0,new A.f(r+l,s,k),new A.f(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.ao(a0,new A.f(l,s,k),new A.f(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.ao(a0,new A.f(r+n,s+m,k),new A.f(r+h,i,d),q)
A.ao(a0,new A.f(j,s,k),new A.f(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.ao(a0,new A.f(n,s,d+k),new A.f(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.ao(a0,new A.f(n,s,k),new A.f(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.ao(a0,new A.f(n,s+e,d+m),new A.f(r,j,d+l),q)
A.ao(a0,new A.f(n,s,i),new A.f(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.ao(a0,new A.f(r,s,d+l),new A.f(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.ao(a0,new A.f(r,s,l),new A.f(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.ao(a0,new A.f(r,s+e,d+n),new A.f(k,j,d+m),q)
A.ao(a0,new A.f(r,s,i),new A.f(k,s+0.05,l),q)
break}if(a4)A.ze(a0,a1,a2,a3,q)
A.E0(a0,a1,a2,a3)},
E0(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.af(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aH(d)
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
A.aT(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.l?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.aT(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.l?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.aT(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.l?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.aT(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.l,i=a7.a,h=0;h<3;++h){g=a3[h]
if(g<=0.12||g>=n)continue
f=0>o?0:o
e=!r||m?i:p
e=e<q?e:q
A.aT(a5,a6,a7,s,f,e,g-0.075,g+0.075,0.11,4078133)}if(d){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.aT(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,4078133)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.aT(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
ze(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aH(o),m=d.af(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.ao(a,new A.f(p,s,o),new A.f(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.ao(a,new A.f(p,s,o-d.w),new A.f(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.ao(a,new A.f(p-d.w,s,o),new A.f(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.ao(a,new A.f(p,s,o),new A.f(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.ao(a,new A.f(p,s,o),new A.f(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.ao(a,new A.f(p,s,o-0.055),new A.f(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.ao(a,new A.f(p-0.055,s,o),new A.f(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.ao(a,new A.f(p,s,o),new A.f(p+0.055,s+r,o+d.w),e)
break}},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
u_:function u_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tZ:function tZ(a){this.a=a},
v5:function v5(a){this.a=a},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(a,b){this.a=a
this.b=b},
xZ(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.c([],b5),b7=t.qP,b8=A.c([],b7),b9=A.c([],t.DZ),c0=t.N
c0=new A.oI(b6,b8,b9,A.m(c0,t.U),A.m(c0,t.T),new A.oK())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.I(b6,A.c([new A.b_(n,B.ax,new A.f(4.5,3.9,4),new A.f(0,0,0),A.c([new A.bc("living-north-west",B.m,0.5,0.9,1.2,1.8,!1,!0),new A.bc("living-north-east",B.m,2.7,0.9,1.2,1.8,!1,!0)],s),A.c(["hall-living","kitchen-living"],r),A.c([new A.bi(m,l,new A.f(1,1.95,1),!1,!1,m),new A.bi(k,j,new A.f(3,1.95,3),!1,!1,k)],q),B.bg,"wallpaper-stripes",i,h,B.M),new A.b_(g,B.ax,new A.f(2.5,3.9,7),new A.f(4.5,0,0),A.c([new A.bc("hall-fanlight",B.m,0.85,3.225,0.8,0.525,!1,!0)],s),A.c(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.c([new A.bi("mantle-hall","the hall mantle",new A.f(1,1.95,3.5),!1,!1,o)],q),A.c([new A.bk(e,e,new A.f(0.2,2.175,0.35)),new A.bk(d,d,new A.f(2.2,2.55,3)),new A.bk(c,c,new A.f(0.4,1.35,4.1)),new A.bk(b,b,new A.f(0.92,0.82,5.55))],p),a,i,h,B.M),new A.b_(a0,B.ax,new A.f(4.5,3.75,3),new A.f(0,0,4),A.c([new A.bc("kitchen-south",B.l,1.5,1.05,1.2,1.65,!1,!0),new A.bc("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.c(["hall-kitchen","kitchen-living"],r),A.c([new A.bi(a1,"the mantle by the stove",new A.f(0.8,1.8,0.5),!1,!1,a1),new A.bi("mantle-kitchen-second",l,new A.f(2.2,1.8,2),!1,!1,o),new A.bi("mantle-kitchen-third",j,new A.f(3.8,1.8,1.2),!1,!1,o)],q),A.c([new A.bk(a2,a2,new A.f(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.jc),new A.b_("cellar",B.ax,new A.f(4,3,4),new A.f(1,-3,2),B.bh,A.c(["hall-cellar"],r),B.iX,B.bg,"wallpaper-damp","floor-concrete","ceiling-pipes",B.M),new A.b_("bedroom",B.ay,new A.f(4.5,3.6,4),new A.f(0,4.2,0),A.c([new A.bc("bedroom-north-west",B.m,0.7,1.05,1.1,1.65,!1,!0),new A.bc("bedroom-north-east",B.m,2.7,1.05,1,1.65,!1,!0)],s),A.c(["landing-bedroom"],r),A.c([new A.bi(a3,"the bedroom mantle",new A.f(1,1.95,1),!1,!1,a3),new A.bi("mantle-bedroom-bedside","the bedside mantle",new A.f(3.5,1.5,3),!1,!1,o)],q),A.c([new A.bk(a4,a4,new A.f(2.2,1.125,2.5)),new A.bk(a5,a5,new A.f(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.M),new A.b_(a6,B.ay,new A.f(2.5,3.6,3),new A.f(4.5,4.2,0),B.bh,A.c(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.c([new A.bi("mantle-landing","the landing mantle",new A.f(1,1.8,1.5),!1,!1,o)],q),B.bg,a,i,h,B.M),new A.b_(a8,B.ay,new A.f(2.5,3.6,2.5),new A.f(4.5,4.2,3),A.c([new A.bc("bathroom-east",B.x,0.9,1.5,0.7,1.5,!0,!0)],s),A.c([a7],r),A.c([new A.bi("mantle-bathroom","the bathroom mantle",new A.f(1.5,1.8,1),!1,!1,o)],q),A.c([new A.bk(a9,a9,new A.f(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.M),new A.b_(b0,B.ay,new A.f(4.5,3.15,3),new A.f(0,4.2,4),A.c([new A.bc("spare-south",B.l,1.8,1.05,0.9,1.35,!1,!0)],s),A.c(["landing-spare"],r),A.c([new A.bi("mantle-spare","the broken mantle",new A.f(2,1.95,1),!1,!0,o)],q),A.c([new A.bk(b1,b1,new A.f(0.5,1.8,0.3)),new A.bk(b2,b2,new A.f(3.7,2.1,2.7)),new A.bk(b3,b3,new A.f(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.M)],b5))
B.a.I(b8,A.c([A.e6(g,"outside","kit-front-door-recessed",!0,B.m,B.l,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.e6(g,n,b4,!1,B.G,B.x,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.e6(g,a0,b4,!1,B.G,B.x,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.e6(a0,n,b4,!1,B.m,B.l,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.e6(g,"cellar","kit-cellar-door-grille",!1,B.l,B.x,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.e6(g,a6,o,!1,B.x,B.x,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.e6(a6,"bedroom",b4,!1,B.G,B.x,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.e6(a6,a8,b4,!1,B.l,B.m,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.e6(a6,b0,b4,!1,B.l,B.m,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dz("hall-stairs",f,B.iL,new A.f(5,0,2.8),new A.f(6.5,6.3,6),new A.f(5.75,2.475,5.8),new A.f(5.75,6.675,2.2)))
c0.ii()
c0.ij()
c0.iV()
b5=b6.length
if(b5!==8)A.j(A.k("expected eight rooms, got "+b5))
b5=c0.gmO()
if(b5!==9)A.j(A.k("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaQ(b9).c.length!==3||B.a.gV(B.a.gaQ(b9).c)!==9.45)A.j(A.k("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.j(A.k("expected nine physical portals"))
c0.jS()
c0.jQ()
return c0},
oI:function oI(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
p_:function p_(a){this.a=a},
p0:function p0(){},
p1:function p1(){},
oZ:function oZ(){},
p2:function p2(a){this.a=a},
p3:function p3(){},
mo(a,b,c){var s=a.aA(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mp(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.EW(a,s,c,d)},
EW(a,b,c,d){var s,r,q,p,o=a.aA(b),n=d.ao(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.u4(a,b,o,B.m,r,q,p,c,n,m))return!0
if(A.u4(a,b,o,B.l,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.u4(a,b,o,B.G,s,r,q,c,n,m))return!0
if(A.u4(a,b,o,B.x,s+o.a,r,q,c,n,m))return!0
return!1},
u4(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.ah(0,a6.an(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.m||a1===B.l
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aJ(m),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aH(m)===a1){g=q.af(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
xo(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mo(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.t)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.f(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gau()
f=a.b
if(Math.acos(B.c.D(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mp(a0,a1,a.a,new A.f(h,g,i)))continue
m=d
l=j}}return l},
Ar(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mo(b,j,4.5):4.5
for(s=b.aJ(c),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.m9(c,o)
m=a.a
l=new A.f(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zC(l,k,a,i,0.5236)||k>=q)continue
if(!A.mp(b,c,a.a,n))continue
q=k
p=o}return p},
As(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mo(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.t)(r),++n){m=r[n]
l=A.FQ(b,h,m)
k=a.a
j=new A.f(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zC(j,i,a,s,0.5236)||i>=p)continue
if(!A.mp(b,c,a.a,l))continue
p=i
o=m}return o},
zC(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gau().c0(c.b),-1,1))<=e},
FQ(a,b,c){var s=a.aA(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.f(q.a+r,p,q.c)
break
case 2:q=new A.f(q.a+r,p,q.c+s.c)
break
case 1:q=new A.f(q.a+s.a,p,q.c+r)
break
case 3:q=new A.f(q.a,p,q.c+r)
break
default:q=null}return q},
nZ:function nZ(){this.a=null
this.b=0},
rq:function rq(){},
rr:function rr(){},
C5(a){var s=A.je(a,"inventory asset"),r=A.dL(s,"id"),q=A.dL(s,"kind")
A.dL(s,"source")
A.dL(s,"proxy")
A.dL(s,"pivot")
s=A.je(s.h(0,"bounds"),"inventory bounds")
return new A.cW(r,q,new A.pb(A.mn(s.h(0,"min"),"bounds.min"),A.mn(s.h(0,"max"),"bounds.max")))},
C6(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.je(a,"inventory placement"),i=A.je(j.h(0,"visibility"),"placement visibility"),h=A.je(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dL(j,"id"),e=A.dL(j,"roomId"),d=A.dL(j,"assetId")
A.dL(j,"role")
s=typeof j.h(0,"socket")=="string"?A.r(j.h(0,"socket")):null
j=A.je(j.h(0,"transform"),"inventory transform")
r=A.mn(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.j(B.fR)
q=A.mn(j.h(0,"position"),"transform.position")
p=A.mn(j.h(0,"rotation"),"transform.rotation")
o=A.dL(i,"layer")
if(typeof i.h(0,k)=="string")A.r(i.h(0,k))
n=J.ad(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.r(h.h(0,"focusId")):null
l=t.P.b(g)?A.Fa(g,"radius"):0
return new A.cz(f,e,d,s,new A.pd(q,p,r),o,n,m,l)},
je(a,b){return t.P.b(a)?a:A.dI(b+" is not an object")},
dL(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dI(b+" is not a string")},
Fa(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dI(b+" is not finite")},
mn(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.vc())}else s=!0
if(s)return A.dI(b+" is not a finite vec3")
s=J.aC(a)
return new A.f(A.a4(s.h(a,0)),A.a4(s.h(a,1)),A.a4(s.h(a,2)))},
dI(a){return A.j(A.a3(a,null,null))},
oN:function oN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oQ:function oQ(a){this.a=a},
oO:function oO(a){this.a=a},
oP:function oP(a){this.a=a},
cW:function cW(a,b,c){this.a=a
this.b=b
this.f=c},
cz:function cz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
pd:function pd(a,b,c){this.a=a
this.b=b
this.c=c},
pb:function pb(a,b){this.a=a
this.b=b},
vc:function vc(){},
pc:function pc(a){this.a=a},
dt:function dt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oR:function oR(a){this.a=a},
oS:function oS(a){this.a=a},
e6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.by(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hE:function hE(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
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
by:function by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bi:function bi(a,b,c,d,e,f){var _=this
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
dh:function dh(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
b_:function b_(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
C_(a){return A.BZ(a)},
BZ(a){var s,r,q,p,o,n,m=A.zJ(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.zJ(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.fM)
k.k(0,r.a,q)}s=A.xb(m,"id")
r=A.xb(m,"roomId")
p=A.xb(m,"placementId")
o=A.FM(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h9("gain is not a number")
return new A.cV(s,r,p,o,n,A.aY(k,l,l))},
zJ(a,b){return t.P.b(a)?a:A.h9(b+" is not an object")},
xb(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h9(b+" is not a string")},
FM(a,b){var s
if(t.j.b(a)){s=J.aC(a)
s=s.gt(a)!==3||s.M(a,new A.vb())}else s=!0
if(s)throw A.b(A.a3(b+" must be a numeric vec3",null,null))
s=J.aC(a)
return new A.f(A.a4(s.h(a,0)),A.a4(s.h(a,1)),A.a4(s.h(a,2)))},
h9(a){return A.j(A.a3(a,null,null))},
oU:function oU(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function oV(a){this.a=a},
oW:function oW(a){this.a=a},
oX:function oX(){},
cV:function cV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oJ:function oJ(){this.b=this.a=null},
eF:function eF(a){this.a=a},
oT:function oT(){this.b=this.a=null},
cU:function cU(a,b){this.a=a
this.b=b},
vb:function vb(){},
y_(a,b,c,d,e,f){var s=t.N
return new A.oY(e,f,c,a,A.aY(A.aM(d,s,s),s,s),A.ai(b,s))},
y0(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
h.k(0,p.a,new A.i4(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.t)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.t)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){j=o[l]
i.k(0,j.a,new A.hU(j.d,j.r))}return A.y_(a.r.b,B.o,i,B.d8,h,s)},
C0(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jz
r=a3.h(0,"mantleHistory")
if(r==null)r=B.iW
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aJ(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fK)
p=t.N
o=A.m(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cq)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bK(j)||!A.bK(i))A.j(B.cq)
o.k(0,k,new A.i4(j,i))}h=A.m(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bK(l.b))throw A.b(B.fH)
h.k(0,k,A.Q(l.b))}g=A.m(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.co)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bK(f)||!A.bK(e))A.j(B.co)
g.k(0,k,new A.hU(f,e))}d=A.m(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.hg)
d.k(0,n,A.r(p.b))}c=A.c([],t.s)
for(q=J.R(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fi)
B.a.l(c,b)}return A.y_(a2,c,g,d,o,h)},
x6(a,b){return a.a.a===b.a&&a.a7(0,b.gap(b))},
oY:function oY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i4:function i4(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
k4(a){var s=B.bp.h(0,a)
if(s==null)throw A.b(A.k("Unknown house surface material: "+a))
return s},
bh:function bh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
BH(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hT(e,A.C(e).c)
q=new A.eg()
q.bN((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hz(a,q,2,r,1+s,A.aN(["time"],t.N))
break
case 3:A.hz(a,q,3,r,1+s,A.aN(["place"],t.N))
break
case 4:A.hz(a,q,4,r,2+s,p)
A.BD(a,q,4)
break
case 5:A.hz(a,q,5,r,s,p)
A.BB(a,q,5)
break
case 6:A.hz(a,q,6,r,s,p)
A.BC(a,q)
A.BG(a,q,6)
break
case 7:A.BE(a,q,7)
break
default:if(s>0)A.hz(a,q,b,r,s,p)}},
BA(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.BF(a,b,c))return!1
return!0},
hz(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(A.BA(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cY(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.xT(a,b,o[p],f)}},
xT(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gV(o).a,n,n)
if(d==null)s=A.c(B.B.slice(0),t.s)
else{n=t.vY
s=A.I(new A.F(B.B,t.Ag.a(new A.nU(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aN(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eg(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aN(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dz(c.a,m,B.a.gV(o).b)},
BD(a,b,c){var s=A.xU(a,b,c)
if(!a.bX(s))return
a.eq(c,t.G.a(s),0,B.b6,null)},
xU(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.B[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aN(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
BB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cY(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aM(B.a.gV(i).a,s,s)
r=p.c
n=A.aM(B.a.gV(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.B[m]
k=o.h(0,l)
j=s.eg(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aN(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dz(q.a,o,B.a.gV(i).b)
a.dz(p.a,n,B.a.gV(r).b)},
BC(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aN(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a5(0,q[r].a)},
BG(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aN(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.xT(a,b,q[s],null)},
BE(a,b,c){var s=c+1,r=A.xU(a,b,s)
if(!a.bX(r))return
a.eq(s,t.G.a(r),0,B.b6,null)},
BF(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gV(b.c).c===B.aA}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gV(b.c).c===B.aA}if(c===21)return b.e
return!1},
nU:function nU(a){this.a=a},
D3(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p=A.ap(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.t1(n)},
px(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kg(A.aY(p,q,q),b,c)},
yc(a){var s=t.N
return A.px(t.P.a(a.h(0,"fields")).bF(0,new A.py(),s,s),A.a4(a.h(0,"shakiness")),A.BM(B.iP,A.r(a.h(0,"hand")),t.qX))},
BL(a){var s,r,q,p,o=a.h(0,"margin"),n=A.e(a.h(0,"ordinal")),m=A.e(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.R(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.yc(r.a(s.gn())))
s=A.aB(a.h(0,"corroborator"))
q=A.Q(a.h(0,"locked"))
p=A.zm(a.h(0,"lastReadDay"))
return new A.bZ(n,m,l,s,q,p,o==null?null:A.yc(r.a(o)))},
dY:function dY(a,b){this.a=a
this.b=b},
t1:function t1(a){this.a=a},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
py:function py(){},
pz:function pz(a){this.a=a},
bZ:function bZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y9(a){return new A.pg(a,A.m(t.S,t.g),A.a_(t.N),A.c([],t.t))},
Cb(a,b){var s,r,q,p,o=A.y9(a)
o.e=A.e(b.h(0,"nextOrdinal"))
o.f=A.e(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.AZ(s.a(b.h(0,"tags")),t.N))
for(s=J.R(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.BL(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pg:function pg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pn:function pn(a,b){this.a=a
this.b=b},
nb:function nb(){},
hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g},
nc:function nc(){},
ps:function ps(){},
pr:function pr(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
qe:function qe(){},
qd:function qd(a,b,c){this.b=a
this.c=b
this.d=c},
qf:function qf(){},
Cn(a,b,c){return B.kw},
kv:function kv(a,b){this.a=a
this.b=b},
qg:function qg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
qh:function qh(){},
kf:function kf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qn:function qn(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yr(a){if(!isFinite(0))A.j(A.ah(0,"interpolation",null))
return new A.qA(a)},
kI:function kI(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
qA:function qA(a){this.a=a},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
yq(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hT(c,A.C(c).c)
r=A.I(r,A.o(r).c)
B.a.Y(r)
s=t.N
r=A.ai(r,s)
r=new A.qz(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aY(l,s,t.X))
r.i5(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
CH(a,b,c,d,e){var s=A.md("RENDERER_SHA"),r=A.md("GAME_SHA"),q=A.md("DART_SDK_VERSION")
return A.yq(a,"838f2abdef9e-f8ff05f01916-dirty",b,!1,d,r,A.md("LOCKFILE_SHA256"),e,A.md("PROJECT_VERSION"),s,q,null)},
md(a){var s=B.jr.h(0,a)
return s.length===0?null:s},
qz:function qz(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qB:function qB(a){var _=this
_.a=a
_.d=_.c=_.b=0},
rl:function rl(a){this.a=a},
a7(a,b,c,d,e,f,g,h,i,j){return new A.e9(e,g,a,f,i,h,j,c,c,b)},
cH:function cH(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c,d,e,f,g,h,i,j){var _=this
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
rm:function rm(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rp:function rp(a){this.a=a},
ro:function ro(a){this.a=a},
rn:function rn(a){this.a=a},
xQ(a,b,c,d,e,f,g){var s=A.I(f,t.ho)
if(b<0||a<0||e<0)A.j(A.a3("saved day-loop resources must not be negative",null,null))
return new A.nM(c,g,b,a,e,d===!0,s)},
Bu(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.fy)
s=A.c([],t.El)
for(r=J.R(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fL)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aJ(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fu)
f=A.bu(new A.F(B.cU,q.a(new A.nN(h)),p),o)
e=A.bu(new A.F(B.d_,n.a(new A.nO(g)),m),l)
if(f==null||e==null)throw A.b(B.hb)
B.a.l(s,new A.fS(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aJ(d)||!A.aJ(c)||!A.aJ(b)||!A.bK(a))throw A.b(B.fT)
return A.xQ(c,d,a1,a,b,s,a3)},
bS:function bS(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
nM:function nM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nN:function nN(a){this.a=a},
nO:function nO(a){this.a=a},
k7:function k7(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
t6:function t6(a,b){this.b=a
this.c=b},
eY:function eY(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
p4:function p4(a){this.c=a},
p8:function p8(a,b){this.a=a
this.b=b},
p9:function p9(){},
wT(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.h8)
B.a.l(p,q)}return p},
cn:function cn(a,b){this.a=a
this.b=b},
qE:function qE(){},
d_:function d_(){},
qF:function qF(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
ED(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uP(s).$0())
return r},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t2:function t2(a){this.b=a},
uP:function uP(a){this.a=a},
pT(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.I(0,a)
s=A.m(r,r)
if(b!=null)s.I(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.I(0,c)
return new A.pS(q,s,r)},
Cj(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aJ(s)||s!==1)return l
r=A.yj(a.h(0,"choices"))
q=A.yj(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.BR(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pT(r,q,p)},
yj(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.r(q.b))}return r},
BR(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aJ(r)||r<1||!A.aJ(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cP(s,r,q,p)},
pS:function pS(a,b,c){this.a=a
this.b=b
this.c=c},
pU:function pU(){},
pV:function pV(){},
pW:function pW(){},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qb:function qb(a){this.a=a},
qc:function qc(a){this.a=a},
fU(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
rv:function rv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rw:function rw(){},
rx:function rx(){},
eW:function eW(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b){this.a=a
this.b=b},
ld:function ld(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ry:function ry(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
rz:function rz(){},
rA:function rA(){},
jl:function jl(a){this.a=a},
w9:function w9(a,b,c){this.b=a
this.e=b
this.f=c},
B5(a){var s,r,q,p
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fl)
s=new A.mx()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wI(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dM(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aW(B.bl,new A.mv(a),new A.mw()))},
cN:function cN(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mx:function mx(){},
mv:function mv(a){this.a=a},
mw:function mw(){},
mI:function mI(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mK:function mK(a){this.a=a},
mJ:function mJ(a,b){this.a=a
this.b=b},
Bb(a){var s
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fQ)
s=new A.mV()
return new A.dN(s.$1$2(B.bj,a.h(0,"output"),t.xs),s.$1$2(B.bd,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bc,a.h(0,"reverb"),t.gc),s.$1$2(B.ba,a.h(0,"ducking"),t.ul))},
cw:function cw(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mV:function mV(){},
mW:function mW(a,b){this.a=a
this.b=b},
mX:function mX(a){this.a=a},
ne:function ne(a){this.a=a
this.b=null},
ni(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.ah(c,"level","must be between 1 and 6"))
s=A.B(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.ng(s,b)
return s},
dR(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.B(a,"button","brush-button brush-state-"+s.b,r)
A.ng(q,b)
q.type="button"
q.disabled=s===B.as
q.addEventListener("click",A.X(new A.nh(c)))
return q},
Bh(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.as
A.ng(s,b)
s.addEventListener("change",A.X(new A.nl(d,s)))
return s},
Bg(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.x(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.as
A.ng(s,b)
s.addEventListener("input",A.X(new A.nk(s,e)))
return s},
wb(a,b){var s=B.b.hO(A.r(a.className),A.yp("\\s+")),r=A.C(s),q=r.i("F<1>"),p=A.I(new A.F(s,r.i("l(1)").a(new A.nj()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.X(p," ")
a.setAttribute("data-brush-state",s)},
ng(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gjW())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.as)a.setAttribute("aria-disabled","true")},
nh:function nh(a){this.a=a},
nl:function nl(a,b){this.a=a
this.b=b},
nk:function nk(a,b){this.a=a
this.b=b},
nj:function nj(){},
dP:function dP(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nn:function nn(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
no:function no(a){this.a=a},
xO(a){var s=!1
if(a.length!==0)if(!B.dF.q(0,a))s=B.lm.q(0,a)||B.le.q(0,a)||B.ll.q(0,a)||!B.b.T(a,"Mouse")
return s},
Em(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.H(a,A.o(a).i("H<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ap(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
F1(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.H(a,A.o(a).i("H<1,2>"))
p=J.R(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fv(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fG(B.jo,s,r)
if(b!=null)q.I(0,b)
q.I(0,A.F1(a))
s=new A.fu(g,d,h,e,f,c,A.aY(A.Em(q),s,r))
s.C()
return s},
Br(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cp)
s=a.h(0,"version")
r=J.eq(s)
if(!r.a4(s,1)&&!r.a4(s,2))throw A.b(B.cp)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fG)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.B_(m,new A.nB())){o=A.c([],r)
for(l=J.R(m);l.m();)o.push(A.r(l.gn()))
q.k(0,n,o)}else throw A.b(B.fp)}j=A.a4(a.h(0,"horizontalSensitivity"))
r=A.a4(a.h(0,"verticalSensitivity"))
p=A.Q(a.h(0,"invertX"))
o=A.Q(a.h(0,"invertY"))
return A.fv(null,q,A.Q(a.h(0,"holdToInteract")),j,p,o,2,r)},
wK(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.I(r.b,p)
o.k(0,q,r)}return o},
x2(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
xf(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fu:function fu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nD:function nD(){},
nC:function nC(a){this.a=a},
nE:function nE(){},
nF:function nF(){},
nG:function nG(){},
nB:function nB(){},
dO:function dO(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.c=b},
jE:function jE(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Bq(a){var s=t.N,r=t.m
r=new A.hw(A.fv(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.hZ(a)
return r},
hw:function hw(a,b,c,d,e,f){var _=this
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
nz:function nz(a,b){this.a=a
this.b=b},
nA:function nA(a){this.a=a},
ny:function ny(a,b){this.a=a
this.b=b},
nw:function nw(a,b){this.a=a
this.b=b},
nx:function nx(a,b){this.a=a
this.b=b},
Bs(a){var s=new A.nH(a,A.a(a.createElement("div")))
s.aS(a)
s.i_(a)
return s},
nH:function nH(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nI:function nI(a){this.a=a},
By(a){var s=new A.nQ(A.B(a,"div","door",null))
s.i1(a)
return s},
xR(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.X(s,"; ")+"."},
nQ:function nQ(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
nR:function nR(a){this.a=a},
nS:function nS(a,b){this.a=a
this.b=b},
nT:function nT(a,b){this.a=a
this.b=b},
BI(a){var s=new A.nW(a,A.a(a.createElement("div")))
s.aS(a)
s.i2(a)
return s},
nW:function nW(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nX:function nX(a){this.a=a},
on:function on(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
oo:function oo(){},
BU(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.op(a.b===B.cx,a.c===B.cB,s,a.e===B.cy,a.f===B.cv,a.r===B.cD,a.w,a.x)},
op:function op(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wc(a,b,c,d,e,f,g,h,i,j){return new A.fB(e,g,j,f,b,h,d,c,a,i)},
BV(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat"
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fY)
s=new A.oq(a)
r=a.h(0,"contextualReminders")
if(!A.bK(r))throw A.b(B.h9)
q=!A.bK(a.h(0,i))||A.Q(a.h(0,i))
p=s.$1$2("interactionMode",B.bk,t.bK)
o=s.$1$2("promptDensity",B.bo,t.dn)
n=s.$1$2("textPacing",B.bm,t.j_)
m=s.$1$2("journalLayout",B.be,t.gm)
l=s.$1$2("confirmations",B.b8,t.aJ)
k=s.$1$2("saveFeedback",B.bf,t.mx)
j=s.$1$2("focusLossBehavior",B.aC,t.x)
return A.wc(typeof a.h(0,h)=="string"?s.$1$2(h,B.bb,t.vS):B.aZ,l,r,j,p,m,o,k,q,n)},
dm:function dm(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j},
oq:function oq(a){this.a=a},
or:function or(a,b){this.a=a
this.b=b},
os:function os(a){this.a=a},
xY(a){var s
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fP)
s=new A.dX(1,B.a.aW(B.cV,new A.oC(a),new A.oD()),A.r(a.h(0,"renderScale")),A.Q(a.h(0,"dynamicResolution")),A.r(a.h(0,"frameTarget")),A.r(a.h(0,"antialiasing")),A.r(a.h(0,"textureQuality")))
s.C()
return s},
fD(a,b){var s=b==null?B.b5:b
return new A.oE(s,a==null?B.b5:a)},
Am(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dv(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dv("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fB(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cM&&b.a<2){q=q.fC(B.b4)
B.a.l(s,"High preset was reduced to Standard")}return new A.ox(q,A.ai(s,t.N))},
cx:function cx(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oC:function oC(a){this.a=a},
oD:function oD(){},
oE:function oE(a,b){this.a=a
this.b=b},
ow:function ow(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
BX(a){var s=new A.hJ(A.m(t.N,t.m),B.b5,a,A.a(a.createElement("div")))
s.aS(a)
s.i3(a)
return s},
hJ:function hJ(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oA:function oA(a){this.a=a},
oB:function oB(a){this.a=a},
oz:function oz(a,b,c){this.a=a
this.b=b
this.c=c},
oy:function oy(a){this.a=a},
jm:function jm(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
oF:function oF(){this.c=0},
BY(a){var s=new A.oG(a,A.a(a.createElement("div")))
s.aS(a)
s.i4(a)
return s},
oG:function oG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oH:function oH(a){this.a=a},
ph:function ph(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
pi:function pi(a){this.a=a},
pj:function pj(a){this.a=a},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
pl:function pl(){},
pm:function pm(){},
cY:function cY(a,b){this.a=a
this.b=b},
fq:function fq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q0:function q0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
B(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zu(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(p.length);++r){q=A.E(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
i3:function i3(){},
bj:function bj(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(){},
q7:function q7(){},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
q5:function q5(a){this.a=a},
q8:function q8(a){this.a=a},
cF:function cF(a,b){this.a=a
this.b=b},
q9:function q9(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qa:function qa(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
qm:function qm(a){this.a=a
this.b=null},
CK(a){var s=new A.qM(a,A.a(a.createElement("div")))
s.aS(a)
s.i6(a)
return s},
qM:function qM(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qN:function qN(a,b){this.a=a
this.b=b},
qO:function qO(a){this.a=a},
kM(a,b){var s=t.N,r=t.m
r=new A.fR(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.w5(),B.ap,A.m(s,r),A.m(s,r),B.aQ,A.m(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.i7(a,b)
return r},
fR:function fR(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.k1=_.id=null
_.k2=f
_.k3=g
_.k4=h
_.ok=i
_.p1=j
_.p2=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
rd:function rd(a,b){this.a=a
this.b=b},
re:function re(a){this.a=a},
rf:function rf(a){this.a=a},
r4:function r4(a,b){this.a=a
this.b=b},
r5:function r5(a,b){this.a=a
this.b=b},
r3:function r3(a){this.a=a},
r6:function r6(a){this.a=a},
qP:function qP(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
qV:function qV(a){this.a=a},
qW:function qW(a){this.a=a},
qX:function qX(a){this.a=a},
qY:function qY(a){this.a=a},
qZ:function qZ(a){this.a=a},
r_:function r_(a){this.a=a},
r0:function r0(a){this.a=a},
r1:function r1(a){this.a=a},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
qT:function qT(a){this.a=a},
ra:function ra(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rh(a){return B.a.aW(B.C,new A.ri(a),new A.rj(a))},
CL(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
dx(a,b){var s=t.z
s=A.fG(A.CL(),s,s)
if(a!=null)s.I(0,a)
s=new A.rg(b,A.aY(s,t.N,t.K))
s.i8(a,b)
return s},
yv(a){var s,r=t.f
if(!r.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.h6)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fx)
return A.dx(A.aM(s,t.N,t.K),A.e(a.h(0,"version")))},
bA:function bA(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
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
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
rg:function rg(a,b){this.a=a
this.b=b},
wr(a,b){var s=b==null?A.dx(null,1):b
return new A.rk(s,a==null?A.dx(null,1):a)},
CM(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eK(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cR(r)
J.bt(l,s.a,r)}catch(n){if(!(A.al(n) instanceof A.G))throw n}}m=A.dx(l,1)
return A.wr(m,m)},
rk:function rk(a,b){this.a=a
this.b=b},
CN(a){var s=new A.rs(a,A.a(a.createElement("div")))
s.aS(a)
s.i9(a)
return s},
rs:function rs(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
B8(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cu(p+m+":"+k,m,l.a,l.b,j))}}B.a.P(i,new A.mG())
return new A.mF(A.ai(i,t.bC),A.a_(t.N))},
cu:function cu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mF:function mF(a,b){this.a=a
this.b=b},
mH:function mH(){},
mG:function mG(){},
D2(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mK
s=t.L
r=A.m(s,t.q1)
q=A.o(a).i("aa<1>")
p=A.I(new A.aa(a,q),q.i("n.E"))
B.a.Y(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.t)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.bb(new A.bn(B.ms,k+" has an out-of-range authored day "+h+"."))
g=A.D1(k,h,i.b,m)
if(g instanceof A.bb)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bU(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.af(o,o.r,o.e,A.o(o).i("af<2>"));o.m();){n=o.d
J.ho(e.ce(n.b,new A.rW()),n)}o=A.aY(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.H(e,e.$ti.i("H<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.ap(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.lb(new A.la(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a3,A.pT(b,b,b)))},
D1(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cS[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.du(B.b.b1(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bb(new A.bn(B.mt,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cZ
B.a.l(l,new A.c8(g,i.b,f))}if(l.length===0)continue
B.a.P(l,new A.rT())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bb(new A.bn(B.dY,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bb(new A.bn(B.dY,a+" day "+s+" has no authored tiers."))
return new A.lG(c)},
la:function la(a,b,c,d,e,f,g,h){var _=this
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
rZ:function rZ(a){this.a=a},
rY:function rY(a){this.a=a},
t_:function t_(a){this.a=a},
rU:function rU(a){this.a=a},
rV:function rV(){},
rX:function rX(a){this.a=a},
rW:function rW(){},
rS:function rS(a){this.a=a},
rR:function rR(a){this.a=a},
rT:function rT(){},
lb:function lb(a){this.a=a},
lG:function lG(a){this.a=a},
G9(a){var s,r,q,p=A.a_(t.N)
for(s=new A.H(a,A.o(a).i("H<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaD(),q=q.gu(q);q.m();)if(q.gn().ga1().M(0,new A.vl())){p.l(0,r.a)
break}}s=A.I(p,p.$ti.c)
B.a.Y(s)
return s},
G8(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.ap(b,!0,s)
B.a.Y(r)
q=new A.eg()
q.bN((a^913741)>>>0)
p=q.aN(4)
if(!(p>=0&&p<4))return A.d(B.cR,p)
o=B.cR[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.ap(r,!0,s)
B.a.cY(m,q)
s=A.kV(m,0,A.fc(n,"count",t.S),A.C(m).c).bJ(0)
B.a.Y(s)
return s},
vl:function vl(){},
yH(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aJ(r)||!A.aJ(q)||!A.aJ(p)||r<1||q<0||q>23||p<0)return null
return new A.bU(s,r,q,p)},
D0(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.R(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a_(t.L)
for(s=J.R(s.a(a.h(0,j)));s.m();){n=A.yH(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.B7(m)
if(!s&&l==null)return i
return new A.lc(r,o,l)},
B7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yH(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aJ(p))if(!(p<0))if(A.bK(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bu(new A.F(B.cS,t.qR.a(new A.mC(r)),t.cE),t.hF)
j=A.bu(new A.F(B.jk,t.da.a(new A.mD(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bu(new A.F(B.is,t.kr.a(new A.mE(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jn(s,k,j,p,i,n,A.aB(m))},
bP:function bP(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d5:function d5(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
rQ:function rQ(){},
jn:function jn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mC:function mC(a){this.a=a},
mD:function mD(a){this.a=a},
mE:function mE(a){this.a=a},
l9:function l9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
t0:function t0(){},
bb:function bb(a){this.a=a},
l8:function l8(a){this.a=a},
l6:function l6(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
Fg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.ji())return f
n=A.eb().gb0()
m=n.h(0,"captureSeed")
l=A.du(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.du(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eK(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.j.aF(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.lf.q(0,o.b))return f
J.bt(p,A.r(o.a),A.r(o.b))}r=p}else return f}catch(g){if(A.al(g) instanceof A.G)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lk.q(0,i))return f
if(h!=null&&!B.li.q(0,h))return f
return new A.tc(l,k,j,h,r)},
Fh(){var s,r,q,p=A.eb().gb0().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eG
break A}if("intimate"===p){s=B.eI
break A}s=B.eH
break A}r=A.eb().gb0().h(0,"cameraFov")
q=A.eK(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fo(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
jf(a){var s=$.be
if(s===a&&B.b.q(A.r(a.b.className),"open"))return
if(s!=null)s.a6()
$.be=a
if(a===$.cr.j())$.hm().fX("gameplay.viewport")
else $.hm().m5(A.zK(a))
s=$.ac.j()
s.ay=!1
s.b8()
$.en=0
a.bG()},
wY(a,b,c){var s,r,q
$.jg=!0
s=$.be
if(s!=null)s.a6()
$.be=a
s=$.hm()
if(s.a.a.length===0)s.fX(c)
r=A.I(s.a.a,t.oP)
r.push(new A.ds(b,B.Y,c))
q=s.a
s.a=new A.e4(r,q.b,q.c)
s.iI(b)
s=$.ac.j()
s.ay=!1
s.b8()
$.en=0
a.bG()
$.jg=!1},
dK(a){var s,r,q,p,o,n,m,l=null
if($.jg)return
$.jg=!0
a.a6()
$.be=null
s=$.hm().k9()
$.jg=!1
r=s.a
if(r===B.dr){$.en=0
r=$.ac.j()
r.b8()
r.ay=!0
q=A.E(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dq)return
r=s.c.a
r=r.length===0?l:B.a.gV(r)
p=r==null?l:r.a
A:{if(B.bu===p){r=$.cr.j()
break A}if(B.df===p){r=$.h8.j()
break A}r=l
break A}if(r!=null){o=s.d
$.be=r
n=$.ac.j()
n.ay=!1
n.b8()
$.en=0
r.bG()
m=o==null?l:A.E(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jh(a){if($.be===a&&B.b.q(A.r(a.b.className),"open"))a.a6()
else A.jf(a)},
hd(a){var s
if($.jg)return
if($.be===a)$.be=null
if(a===$.cr.j())$.hm().cf()
else $.hm().l2(A.zK(a))
$.en=0
s=$.ac.j()
s.b8()
s.ay=!0},
zK(a){if(a===$.cr.j())return B.dg
if(a===$.h8.j())return B.Y
if(a instanceof A.fR)return B.Y
if(a instanceof A.hJ)return B.Y
if(a instanceof A.hw)return B.Y
if(a===$.j4.j())return B.kg
if(a===$.m7.j())return B.kh
if(a===$.j3.j())return B.ki
if(a===$.m5.j())return B.Y
if(a===$.j1.j())return B.kk
return B.kj},
mc(a,b){var s
a.slV(new A.uc())
a.slX(new A.ud())
a.slW(new A.ue())
a.slR(new A.uk())
a.slU(new A.ul())
a.sm4(new A.um())
a.sm_(new A.un())
a.slZ(new A.uo())
a.sb4(b?new A.up(a):new A.uq(a))
a.sb_(b?new A.ur(a):new A.uf(a))
s=a.f
if(s===B.H)a.slI(new A.ug())
if(s===B.a_)a.slS(new A.uh())
if(s===B.I){a.slH(new A.ui())
a.slY(new A.uj())}},
Ej(){var s=$.el.j()
s.sdM(new A.u9())
s.sb4(new A.ua())
s.sb_(new A.ub())},
mb(a,b,c){return A.Eg(a,b,c)},
Eg(a,b,c){var s=0,r=A.bL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$mb=A.bN(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.u5()
k=c.$ti
j=$.an
i=new A.ar(j,k)
if(j!==B.w)l=A.zQ(l,j)
c.co(new A.dG(i,2,null,l,k.i("dG<1,1>")))
s=4
return A.as(i,$async$mb)
case 4:case 3:o=$.jj().b
n=$.aS
q=6
s=n!=null?9:10
break
case 9:s=11
return A.as(n.cE(b.a),$async$mb)
case 11:case 10:k=b.a
$.ja=A.fD(k,a)
$.el.j().cm(a,k,b.b)
A.x_()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.al(g)
$.ja=A.fD(o,o)
k=$.el.j()
k.cm(o,o,A.c(["renderer transaction rejected: "+A.x(m)],t.s))
A.x_()
s=8
break
case 5:s=1
break
case 8:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$mb,r)},
F6(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.j.aF(n,null)
if(!t.f.b(r)||!J.ad(r.h(0,"version"),1))A.j(B.h_)
q=A.xY(r.h(0,"requested"))
$.ja=A.fD(A.xY(r.h(0,"effective")),q)}catch(s){$.ja=A.fD(null,null)}p=$.jj().a
o=A.Am(p,A.zy())
r=o.a
$.ja=A.fD(r,p)
$.el.j().cm(p,r,o.b)
A.x_()},
zy(){var s,r,q,p,o=$.f7.j().gbz().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.du(B.b.b1(p,12),null)
if(r==null)r=1}return new A.ow(r,B.a.q(o,"disjoint-timer-query"))},
x_(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.j.ab($.jj().B(),null))}catch(s){}},
Ei(){var s=$.j0.j()
s.sdM(new A.u6())
s.sb4(new A.u7())
s.sb_(new A.u8())},
F4(){var s,r,q,p,o,n=null
try{n=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wP=A.Br(B.j.aF(n,null))}catch(s){$.wP=A.fv(null,null,!1,1,!1,!1,2,1)}r=$.j0.j()
q=r.w=$.fe()
r.x=new A.jE(q)
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
r.dm()
$.ac.j().ea($.fe().r)
r=$.ac.j()
q=$.fe()
p=r.ch
p.a=q.f
p.dU()
r.b8()
A.zM()},
zM(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.j.ab($.fe().B(),null))}catch(s){}},
F3(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j8=A.Bb(B.j.aF(r,null))}catch(s){$.j8=B.aQ}$.h6.j().hl($.j8)
A.zL()
A.wH()},
zL(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.j.ab($.j8.B(),null))}catch(s){}},
wH(){var s=$.bs
if(s==null)return
s.hv($.j8)},
F5(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wS=A.BV(B.j.aF(r,null))}catch(s){$.wS=$.w5()}$.j2.j().hm($.mr())
A.zN()
A.zh()},
zN(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.j.ab($.mr().B(),null))}catch(s){}},
zh(){var s,r="detailed",q=A.BU($.mr()),p=A.E(A.a(v.G.document).documentElement)
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
F2(){var s,r=null
try{r=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.em=A.B5(B.j.aF(r,null))}catch(s){$.em=B.ap}$.f6.j().e9($.em)
A.wZ()
A.m8()},
wZ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.j.ab($.em.B(),null))}catch(s){}},
m8(){var s,r,q,p,o,n,m=$.em,l=$.v8,k=$.xd,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.j(B.fv)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a9
$.x3=l
$.cJ.j()
r=A.E(A.a(v.G.document).documentElement)
q=r==null
p=q?null:A.Q(A.a(r.classList).contains("high-contrast"))
o=q?null:A.Q(A.a(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.Q(A.a(r.classList).toggle("reduced-motion",l))
if(!q)A.Q(A.a(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.Q(A.a(r.classList).toggle("captions-enabled",s))
if(!q)A.Q(A.a(r.classList).toggle("reduced-effects",o))
if(!q)A.Q(A.a(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.x(j*100)+"%")
q=$.z.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.x(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.zf){m=$.bd.j()
l=$.em.f
m.e=new A.jl(l==null?B.a9:l)
m=$.bd.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
EH(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uT(r,q)
r.addEventListener("change",A.X(new A.uR(s)))
q.addEventListener("change",A.X(new A.uS(s)))},
vs(){var s=0,r=A.bL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9
var $async$vs=A.bN(function(e1,e2){if(e1===1){o.push(e2)
s=p}for(;;)switch(s){case 0:d7=v.G
d8=A.E(A.a(d7.document).getElementById("game"))
if(d8==null){s=1
break}$.z.b=d8
$.wR=A.E(A.a(d7.document).getElementById("fps"))
$.za.b=$.AM().ck(A.eb().gb0().h(0,"renderer"))
A.EI()
b8=$.z.j()
b9=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
b8.width=b9
b9=$.z.j()
b8=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b9.height=b8
c0=A.E(A.a(d7.document).getElementById("ui-canvas"))
if(c0!=null){c0.width=A.e($.z.j().width)
c0.height=A.e($.z.j().height)
b8=new A.nn(c0,A.c([],t.km))
c1=A.E(c0.getContext("2d"))
if(!t.m.b(c1))A.j(A.k("Failed to get 2D context for CanvasP5GuiEngine"))
b8.b=c1
b8=new A.qB(b8)
$.eo=b8
b8.bf(A.e($.z.j().width),A.e($.z.j().height))}n=A.E(d8.getContext("webgl2"))
if(n==null)throw A.b(A.k("Pixeldart requires WebGL2"))
try{b8=t.s6
b9=t.N
c2=t.iO
c3=t.m3
c4=t.pw
m=new A.lJ(n,A.e($.z.j().width),A.e($.z.j().height),A.c([],b8),A.m(b9,t.qr),A.c([],t.s3),A.m(b9,c2),A.m(b9,c3),A.m(b9,t.xp),A.m(b9,t.bE),A.m(b9,c2),A.m(b9,c3),A.c([],b8),A.m(b9,c2),A.m(b9,c3),A.m(b9,b9),A.m(t.S,c4),A.m(b9,t.qS),A.c([],t.j5),B.iT,A.m(b9,t.Aj),A.m(b9,b9),A.m(b9,c4),A.m(b9,t.vD),A.m(b9,c4),A.m(b9,t.w1),B.hh,B.ky)
$.aS=m
b9=B.er.kX($.za.j(),m)
b9.c5()
$.f7.b=b9}catch(e0){l=A.al(e0)
k=A.cK(e0)
g=$.z.j()
g.setAttribute("data-renderer-error",A.x(l))
if($.ji())$.z.j().setAttribute("data-renderer-error-stack",A.x(k))
throw e0}A.v0()
p=4
A.f9("initializing")
$.cJ.b=new A.nm(new A.f(0,0,0),new A.f(0,0,1),new A.f(0,1,0),new A.f(1,0,0),$.xB())
$.v8=A.Q(A.a(A.a(d7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.xd=A.Q(A.a(A.a(d7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.x3=$.v8
$.cJ.j()
b8=A.a(d7.window)
b9=t.N
c2=t.s
c3=t.a
c2=A.C1(A.N(["moveForward",A.c(["KeyW"],c2),"moveBack",A.c(["KeyS"],c2),"moveLeft",A.c(["KeyA"],c2),"moveRight",A.c(["KeyD"],c2),"interact",A.c(["KeyE"],c2),"secondary",A.c(["KeyQ"],c2),"run",A.c(["ShiftLeft"],c2),"crouch",A.c(["ControlLeft"],c2),"rotate",A.c(["KeyR"],c2),"reach",A.c(["KeyF"],c2),"journal",A.c(["KeyJ"],c2),"sleep",A.c(["KeyL"],c2),"pause",A.c(["Escape"],c2)],b9,c3))
c4=A.a(b8.document)
c2=new A.k6(b8,c4,A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),new A.f(0,0,0),new A.pa(),c2)
b8.addEventListener("keydown",A.X(c2.gj7()))
b8.addEventListener("keyup",A.X(c2.gj9()))
b8.addEventListener("mousemove",A.X(c2.gjf()))
b8.addEventListener("mousedown",A.X(c2.gjd()))
b8.addEventListener("mouseup",A.X(c2.gjh()))
b8.addEventListener("wheel",A.X(c2.gjj()))
c4.addEventListener("pointerlockchange",A.X(c2.gjb()))
$.ac.b=c2
c2=$.z.j()
b8=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
c2.width=b8
b8=$.z.j()
c2=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b8.height=c2
A.f9("renderer")
A.f9("text")
c2=$.ff()
s=7
return A.as(c2.cb(),$async$vs)
case 7:j=c2.mN()
i=A.D2(j)
if(!(i instanceof A.lb)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aF.b=i.a
$.m4.b=A.B8(j)
g=A.m(b9,c3)
for(b8=t.j,c6=0;c6<5;++c6){f=B.B[c6]
c3=A.r(f)
c4=c2.c
c4===$&&A.p()
c7=c4.h(0,c3)
c3=b8.b(c7)?A.ap(c7,!0,b9):B.o
J.bt(g,f,c3)}e=A.D3(g)
$.wG.b=new A.nf(B.eF)
d=$.wG.j().mc(new A.vt(e))
c8=$.w6()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aU.aN(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.c.aX(c2.c)
if(c2==null)c2=7
if(b9<1)A.j(A.ah(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.j(A.ah(c2,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.j(A.ah(5760,"daySeconds","must be finite and > 0"))
c9=new A.jX(b9,7,5760)
c9.b=c2
d0=A.y9(e)
g=A.xW(42,g,A.xZ(42),c9,d0,A.xQ(6,16,d0,null,6,B.iU,c9),new A.jL(0,0,0,!1),A.pT(null,null,null))}else{g=d.a
g.toString
g=A.xX(g,e)}$.T.b=g
$.aF.j().y=$.T.j().z
g=A.ai(A.ED($.T.j().b),t.fu)
$.tX.b=new A.t2(g)
g=$.w7()
b9=d.a
g.dW(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.f7.j().bp(A.yr($.T.j().gh2()))
if(d.b!=null){g=d.b
g.toString
A.he(g)}g=$.aF.j()
b9=A.G8($.T.j().b,A.G9(j.b))
g.shP(A.hT(b9,A.C(b9).c))
A.f9("house")
$.U.b=$.T.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.U.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.t)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.ad(b,"open")||J.ad(b,"closed")){a3=J.ad(b,"open")
for(g=$.U.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.t)(c2),++d1){a5=c2[d1]
a5.shF(a3)}}}a6=$.xz()
if(a6!=null&&a6.length!==0)for(g=$.U.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.t)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.xA()}}g=$.aS
if(g!=null)g.k8($.U.j())
$.bG.b=$.T.j().d
$.U.j()
g=new A.f(12.9375,1.65,0.825)
$.xe=$.x1=$.x7=g
a9=g.ao(0,new A.f(0,1.3499999999999999,0))
$.j5.b=new A.jy(a9,J.xC(a9,new A.f(0,1.2000000000000002,0)))
$.h7.b=new A.nZ()
g=A.wT(B.o)
b9=A.wT(B.o)
c2=new A.qF(B.D,g,b9)
if(!isFinite(0))A.j(B.fj)
if(!B.a.a7(b9,B.a.gap(g)))A.j(B.fU)
if(c2.a===B.D&&c2.b!==0&&!c2.e)A.j(B.fn)
$.cb.b=c2
$.at="hall"
g=d.a
b0=A.Co(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.lw($.U.j())){g=b0.b
$.xe=$.x1=$.x7=g
$.cs=b0.c
$.fa=b0.d
$.at=b0.a
b1=g.ao(0,new A.f(0,1.3499999999999999,0))
g=$.j5.j()
g.ska(b1)
g.b=J.xC(b1,new A.f(0,1.2000000000000002,0))
g=$.j5.j()
b9=$.U.j()
c2=b0.e
c3=b0.f
g.mx($.at,$.es(),b9,c3,c2)
A.he("restored position")}g=A.CK(A.a(d7.document))
g.slJ(new A.vu())
g.sb4(new A.vv())
g.sb_(new A.vG())
$.h8.b=g
g=A.a(d7.document)
b9=A.a(g.createElement("div"))
c2=new A.q9(g,b9)
c2.aS(g)
b9.className=A.r(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.a(b9.appendChild(A.ni(g,B.em,1)))
A.a(b9.appendChild(A.B(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.B(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bi(g,d2,B.dh,"resume")
c2.bi(g,d2,B.di,"settings")
c2.bi(g,d2,B.dj,"controls")
c2.bi(g,d2,B.dk,"save now")
c2.bi(g,d2,B.dl,"help")
c2.bi(g,d2,B.dm,"credits")
c2.bi(g,d2,B.dn,"back")
A.a(b9.appendChild(d2))
c2.sm0(new A.vP())
c2.sb4(new A.vQ())
c2.sm2(new A.vR())
c2.slN(new A.vS())
c2.sm1(new A.vT())
c2.slT(new A.vU())
c2.slO(new A.vV())
c2.sb_(new A.vw())
$.cr.b=c2
c2=$.T.j().e
b9=$.bG.j()
$.T.j()
$.m6.b=new A.p8(c2,b9)
b9=A.a(d7.document)
c2=$.T.j().e
g=$.bG.j()
c3=$.m6.j()
c4=A.a(b9.createElement("div"))
c3=new A.ph(c2,g,c3,b9,c4)
c3.aS(b9)
c4.setAttribute("aria-label","The Journal")
A.a(c4.appendChild(A.B(b9,"div","journal-title","The Journal")))
d3=A.B(b9,"div","journal-pages",null)
g=A.B(b9,"div","page page-left",null)
c3.y!==$&&A.aX()
c3.y=g
c2=A.B(b9,"div","page page-right",null)
c3.z!==$&&A.aX()
c3.z=c2
A.a(d3.appendChild(g))
A.a(d3.appendChild(c2))
A.a(c4.appendChild(d3))
A.a(c4.appendChild(c3.ip()))
d4=A.B(b9,"div","tape-roll",null)
A.a(d4.style).setProperty("width","8rem")
c2=A.B(b9,"div","tape-fill",null)
c3.as!==$&&A.aX()
c3.as=c2
A.a(d4.appendChild(c2))
A.a(c4.appendChild(d4))
d5=A.B(b9,"div","consult",null)
A.a(d5.appendChild(A.B(b9,"div","consult-label","Cite an entry")))
c2=A.B(b9,"div","entry-picker",null)
c3.at!==$&&A.aX()
c3.at=c2
g=A.B(b9,"div","consult-result",null)
c3.ax!==$&&A.aX()
c3.ax=g
A.a(d5.appendChild(c2))
A.a(d5.appendChild(g))
A.a(c4.appendChild(d5))
d6=A.E(b9.documentElement)
if(t.m.b(d6)){A.a(d6.style).setProperty("--shake-max-deg","3deg")
A.a(d6.style).setProperty("--shake-max-px","2px")}$.j4.b=c3
$.j4.j().sb_(new A.vx())
g=A.a(d7.document)
b9=A.B(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.a(b9.style).setProperty("transition-duration","0.3s")
A.a(A.E(g.body).appendChild(b9))
$.zc.b=new A.qm(b9)
b9=A.a(d7.document)
g=A.B(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.E(b9.body).appendChild(g))
$.zb.b=new A.ne(g)
g=A.a(d7.document)
b9=A.B(g,"div","ambient-notice",null)
c2=A.B(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.a(A.E(g.body).appendChild(b9))
A.a(A.E(g.body).appendChild(c2))
$.bd.b=new A.mI(b9,c2,B.K)
$.zf=!0
c2=A.By(A.a(d7.document))
c2.slM(A.Ak())
c2.slL(A.Gm())
$.az.b=c2
c2=$.cL()
c2.slK(new A.vy())
c2.slP(A.Ak())
c2=d.a
b2=A.D0(c2==null?null:c2.c.h(0,"visitors"))
if(b2!=null&&$.aF.j().dW(b2))A.Fl()
g=$.m4.j()
b9=d.a
g.my(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(b8.b(b3))for(g=J.R(b3);g.m();){b4=g.gn()
if(A.aJ(b4))$.v9.l(0,b4)}g=A.CN(A.a(d7.document))
g.sm3(new A.vz())
g.sb_(new A.vA())
$.m7.b=g
g=A.BY(A.a(d7.document))
g.sb_(new A.vB())
$.j3.b=g
g=A.Bs(A.a(d7.document))
g.sb_(new A.vC())
$.m5.b=g
$.j6.b=A.kM(A.a(d7.document),null)
$.j7.b=A.kM(A.a(d7.document),B.Z)
$.f6.b=A.kM(A.a(d7.document),B.I)
A.mc($.j6.j(),!1)
A.mc($.j7.j(),!0)
A.mc($.f6.j(),!0)
A.F2()
A.EH()
$.el.b=A.BX(A.a(d7.document))
A.Ej()
A.F6()
$.h6.b=A.kM(A.a(d7.document),B.H)
A.mc($.h6.j(),!0)
A.F3()
$.j2.b=A.kM(A.a(d7.document),B.a_)
A.mc($.j2.j(),!0)
A.F5()
$.j0.b=A.Bq(A.a(d7.document))
A.Ei()
A.F4()
g=A.BI(A.a(d7.document))
g.sb_(new A.vD())
g.slQ(new A.vE())
$.j1.b=g
g=d.a
b5=A.BK(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zO(b5)
A.f9("world")
A.zR()
A.a(d7.window).addEventListener("resize",A.X(new A.vF()))
A.a(d7.document).addEventListener("visibilitychange",A.X(new A.vH()))
A.a(d7.window).addEventListener("keydown",A.X(new A.vI()))
A.a(d7.window).addEventListener("keyup",A.X(new A.vJ()))
A.a(d7.window).addEventListener("keydown",A.X(new A.vK()))
A.a(d7.window).addEventListener("click",A.X(new A.vL()))
$.z.j().addEventListener("mousemove",A.X(new A.vM()))
$.z.j().addEventListener("click",A.X(new A.vN()))
$.z.j().addEventListener("wheel",A.X(new A.vO()))
A.hb()
A.f9("raf")
A.e(A.a(d7.window).requestAnimationFrame(A.X(A.Al())))
p=2
s=6
break
case 4:p=3
d9=o.pop()
b6=A.al(d9)
b7=A.cK(d9)
A.v2(b6,b7)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$vs,r)},
EG(a){var s,r,q,p=$.eo
if(!$.az.j().y||p==null)return
s=A.zq(a)
if(s==null)return
r=$.cL()
q=p.fP(s.a,s.b)
r.r=q==null?null:q.b},
EF(a){var s,r=$.eo
if(!$.az.j().y||r==null)return!1
s=A.zq(a)
if(s==null)return!1
return $.cL().lq(r.fP(s.a,s.b))},
zq(a){var s=A.a($.z.j().getBoundingClientRect()),r=A.a4(s.width),q=A.a4(s.height)
if(r<=0||q<=0)return null
return new A.aQ(A.e(a.clientX)-A.a4(s.left),A.e(a.clientY)-A.a4(s.top))},
EI(){var s=v.G
A.a(s.window).addEventListener("error",A.X(new A.uU()))
A.a(s.window).addEventListener("unhandledrejection",A.X(new A.uV()))},
f9(a){if($.wL===a)return
$.wL=a
$.z.j().setAttribute("data-boot-phase",a)},
v0(){var s,r,q,p,o,n=$.f7.j().gbz(),m=$.z.j(),l=A.eb().gb0().h(0,"renderer")
if(l==null)l="auto"
m.setAttribute("data-renderer-request",l)
m.setAttribute("data-renderer-backend",n.a)
m.setAttribute("data-renderer-profile",n.b)
m.setAttribute("data-renderer-diagnostics",B.j.ab(n.B(),null))
l=$.aS
if(l==null)l="{}"
else{l=l.e
l===$&&A.p()
l=l.as
if(l==null)l=A.j(A.k("renderer is not initialized"))
s=l.a
s.C()
r=s.b
q=A.I(r,A.o(r).c)
B.a.Y(q)
r=t.N
p=t.K
p=B.j.ab(A.N(["profile",A.N(["kind",s.a.b,"features",q],r,p),"internalWidth",l.b,"internalHeight",l.c,"sampleCount",l.d,"outputEncoding","srgb","shadowMapCount",l.f,"shadowMapSize",l.r,"materialTableCapacity",l.w,"lightTableCapacity",l.x,"textureArrayLayerCapacity",l.y,"diagnosticLevel",l.z.b],r,p),null)
l=p}m.setAttribute("data-renderer-configuration",l)
m.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
m.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
m.setAttribute("data-renderer-lighting-falloff","smoothstep")
m.setAttribute("data-renderer-dof-focal-distance","2.5m")
m.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
m=$.aS
o=m==null?null:m.x
if(o!=null)$.z.j().setAttribute("data-renderer-profile-fallback",o)},
Fd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
if(!$.ji())return
s=$.xz()
if(s!=null&&s.length!==0){r=$.z.j()
q=$.xA()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tX.j().dE($.T.j().gaa().a)
r=$.z.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.w6()
o=q==null?c:q.e
if(o!=null)$.z.j().setAttribute("data-automation-capture-shutters",o)
$.z.j().setAttribute("data-automation-rain-window-visibility",B.c.aK(A.zP($.at),3))
r=$.z.j()
q=$.wL
n=$.at
m=$.es()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.j.ab(A.N(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.N(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.cs,"pitch",$.fa,"modal",$.be!=null,"dialogueOverlay",$.az.j().y,"inputEnabled",$.ac.j().ay,"day",$.T.j().gaa().a,"hour",$.T.j().gaa().b],l,k),c))
j=A.m(l,t.X)
for(r=$.U.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.t)(r),++i){h=r[i]
n=h.ax
m=h.ay
g=h.z
f=n&&!m&&!g
j.k(0,h.a,A.N(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",g,"passable",f],l,k))}$.z.j().setAttribute("data-automation-portals",B.j.ab(j,c))
e=$.m9
r=!1
if(e!=null)if($.U.j().e.h(0,"cellar")!=null){r=$.U.j()
q=$.at
q=r.e.h(0,q)!=null
r=q}if(r){d=e.cg("cellar",$.at)
$.z.j().setAttribute("data-audio-transmission-cellar",B.j.ab(A.N(["sourceRoom","cellar","listenerRoom",$.at,"portalPath",d.a,"gainDb",d.c,"lowPassHz",d.d,"muffle01",d.e,"barrierIds",d.b,"reasonTrace",d.r,"reachable",d.f],l,k),c))}else $.z.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mm(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.cb.j().a!==B.D){A.he("save unavailable during rupture")
return}try{r=$.wG.j()
q=$.T.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.at
m=$.es()
l=$.cs
k=$.fa
j=$.j5.j().d
j=j==null?null:j.a.a
i=$.j5.j().d
J.bt(s,"player",new A.kx(n,m,l,k,j,i==null?null:i.b).B())
n=$.aF.j()
m=A.eR(n.b,p)
l=A.eR(n.c,t.L)
n=n.r
J.bt(s,"visitors",new A.lc(m,l,n==null?null:new A.jn(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.m4.j().b
n=A.I(n,A.o(n).c)
B.a.Y(n)
J.bt(s,"ambient",n)
n=A.I($.v9,A.o($.v9).c)
B.a.Y(n)
J.bt(s,"unverifiables",n)
J.bt(s,"inventoryInspections",$.w7().B())
n=$.wQ
if(n!=null)J.bt(s,"ending",A.N(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.y0(q.c).B()
k=q.d
r.mQ(A.yt(s,A.N(["houseSeed",n,"runSeed",m,"house",l,"time",A.N(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.he(a)}catch(h){A.he("save failed")}},
Fb(){var s=A.E(A.a(v.G.document).documentElement),r=s==null?null:A.aB(s.getAttribute("data-gameplay-focus-loss")),q=A.bu(new A.F(B.aC,t.rg.a(new A.uY(r)),t.vK),t.x)
switch((q==null?B.b_:q).a){case 0:$.mj=!0
s=$.bs
if(s!=null)s.ec(!0)
break
case 1:$.mj=!0
break
case 2:break}},
he(a){var s=v.G,r=A.E(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.E(A.a(s.document).documentElement)
s=s==null?null:A.aB(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.BT(B.f4,new A.v6(r),t.H)},
v2(a,b){var s,r,q,p
A.f9("error")
s=A.x(a)
r=A.xp(s,"\n"," ")
s=$.wR
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.E(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.x(a):A.x(a)+"\n"+b.p(0)
$.z.j().setAttribute("data-boot-error",p)
if($.ji()&&!q)$.z.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
zk(){var s,r
if($.wJ)return
$.wJ=!0
s=$.bs
r=s==null
if(!r)s.cf()
if(!r)s.ej("music")
B.a.l($.da,"arm")},
hb(){var s=0,r=A.bL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$hb=A.bN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.as(A.ha(),$async$hb)
case 2:o=null
q=4
s=7
return A.as(A.bX(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$hb)
case 7:n=b
i=A
s=8
return A.as(A.bX(A.a(n.json()),t.X),$async$hb)
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
if(k!=null&&typeof k==="string"){A.r(k)
l=A.E(A.a(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.m5.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.as(A.od(A.c([A.uW(o),A.uQ(o)],t.iJ),t.H),$async$hb)
case 9:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$hb,r)},
ha(){var s=0,r=A.bL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ha=A.bN(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.iN[g]
q=6
s=9
return A.as(A.bX(A.a(A.a(j.window).fetch(o)),i),$async$ha)
case 9:n=a0
s=10
return A.as(A.bX(A.a(n.text()),h),$async$ha)
case 10:m=a0
l=A.Bc(B.j.aF(m,null))
f=$.U.b
if(f===$.U)A.j(A.a5(""))
l.e0(f)
f=$.z.b
if(f===$.z)A.j(A.a5(""))
f.setAttribute("data-house-manifest","validated")
f=$.z.b
if(f===$.z)A.j(A.a5(""))
f.setAttribute("data-house-manifest-source",o)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.al(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.z.j().setAttribute("data-house-manifest","unavailable")
A.a(j.console).warn("authored house manifest unavailable: "+A.x(d))}s=11
return A.as(A.mg(),$async$ha)
case 11:s=12
return A.as(A.mh(),$async$ha)
case 12:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$ha,r)},
mg(){var s=0,r=A.bL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mg=A.bN(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.iv[c]
p=7
s=10
return A.as(A.bX(A.a(A.a(g.window).fetch(n)),f),$async$mg)
case 10:m=b1
s=11
return A.as(A.bX(A.a(m.text()),e),$async$mg)
case 11:l=b1
b=B.j.aF(l,null)
b=h.b(b)?b:A.dI("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dI("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aJ(a)?a:A.dI("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dI("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.ap(a,!0,d):A.dI("assets is not a list")
a4=A.C(a3)
a5=a4.i("M<1,cW>")
a3=A.I(new A.M(a3,a4.i("cW(1)").a(A.Gi()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.ap(a,!0,d):A.dI("placements is not a list")
a5=A.C(a4)
a6=a5.i("M<1,cz>")
a4=A.I(new A.M(a4,a5.i("cz(1)").a(A.Gj()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.oN(a1,a2,a0,a3,a4)
a1=$.U.b
if(a1===$.U)A.j(A.a5(""))
k.e0(a1)
$.me=k
a1=$.aS
if(a1!=null)a1.hn(k)
a1=$.z.b
if(a1===$.z)A.j(A.a5(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.z.b
if(a1===$.z)A.j(A.a5(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.z.b
if(a1===$.z)A.j(A.a5(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.al(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.z.j().setAttribute("data-house-inventory","unavailable")
$.z.j().setAttribute("data-house-inventory-error",A.x(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.x(a8))
case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$mg,r)},
mh(){var s=0,r=A.bL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mh=A.bN(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.me
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.j4[a4]
p=7
s=10
return A.as(A.bX(A.a(A.a(a1.window).fetch(m)),a2),$async$mh)
case 10:l=b5
s=11
return A.as(A.bX(A.a(l.text()),e),$async$mh)
case 11:k=b5
a5=B.j.aF(k,null)
a5=a0.b(a5)?a5:A.h9("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.ap(a6,!0,a3):A.h9("emitters is not a list")
a8=A.C(a7)
a9=a8.i("M<1,cV>")
a7=A.I(new A.M(a7,a8.i("cV(1)").a(A.Gy()),a9),a9.i("a1.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aJ(a6)?a6:A.h9("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h9("sourceRef is not a string")
j=new A.oU(a8,a9,a7)
a7=$.U.b
if(a7===$.U)A.j(A.a5(""))
j.mK(a7,b2)
$.zB=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.t)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bt(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.U.b
if(a7===$.U)A.j(A.a5(""))
a8=A.B9(i)
a9=new A.mS(a7,A.aY(B.d9,e,d),a8)
a9.hY(a8,a7,B.d9)
$.m9=a9
a7=$.bs
if(a7!=null){a7.ch=a9
a7.bu()}a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.z.b
if(a7===$.z)A.j(A.a5(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.al(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.m9=null
$.z.j().setAttribute("data-audio-planner","unavailable")
$.z.j().setAttribute("data-house-soundscape","unavailable")
$.z.j().setAttribute("data-house-soundscape-error",A.x(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.x(n))
case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$mh,r)},
wO(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.R(t.a.b(s)?s:new A.aW(s,A.C(s).i("aW<1,h>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.r(q))}},
uQ(a){var s=0,r=A.bL(t.H),q,p,o,n,m,l
var $async$uQ=A.bN(function(b,c){if(b===1)return A.bH(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.wO(A.E(n?null:a.sfx),m,"")
A.wO(A.E(n?null:a.ir),m,"ir-")
q=A.E(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.r(p))
l=$
s=2
return A.as(A.mZ(m,$.U.j()),$async$uQ)
case 2:o=l.bs=c
o.ch=$.m9
o.bu()
A.F7()
A.zT(o)
A.wH()
A.zU()
if($.wJ){o.cf()
o.ej("music")}return A.bI(null,r)}})
return A.bJ($async$uQ,r)},
xa(a,b){var s
A.A5(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Fi(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
zg(a,b){var s
if(a!=="brightness")return
s=A.E(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.x(B.c.D(b,0.6,1.4))+")")},
u0(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.E(A.a(v.G.document).documentElement)
if(r!=null)A.Q(A.a(r.classList).toggle(s,b))
A.m8()},
zU(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a4($.dc().a.ci(o)),k=A.Q($.dc().a.ci(n)),j=A.Q($.dc().a.ci(m))
for(s=[$.j6.j(),$.j7.j(),$.f6.j(),$.h6.j(),$.j2.j()],r=0;r<5;++r)s[r].eb(o,l)
A.zg(o,l)
for(s=[$.j6.j(),$.j7.j(),$.f6.j(),$.h6.j(),$.j2.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.u0(n,k)
A.u0(m,j)},
x9(a,b){var s
A.A5(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Ff(a){var s,r
try{s=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zT(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.iM[s]
q=$.dc().a.b.h(0,r)
j.k(0,r,A.a4(q==null?A.j(A.k("setting missing from profile: "+r)):q))}p=A.Q($.dc().a.ci("muted"))
o=A.Q($.dc().a.ci("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bh(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cW(o)
for(q=[$.j6.j(),$.j7.j(),$.f6.j(),$.h6.j()],n=j.$ti.i("cB<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cB(j,j.r,j.e,n);m.m();){k=m.d
l.eb(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
zi(){var s=$.bs
if(s!=null)A.zT(s)
A.zU()},
F7(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aB(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.j.aF(k,null)
if(!t.f.b(r)||!J.ad(r.h(0,"version"),1))A.j(B.fw)
q=A.yv(r.h(0,"requested"))
$.A0=A.wr(A.yv(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.Ff(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Fi(p))}}$.A0=A.CM(o,r)
A.uZ()},
uZ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.j.ab($.dc().B(),null))}catch(s){}},
A5(a,b){var s,r,q,p,o,n,m
switch(A.rh(a).d.a){case 0:r=A.eK(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dc()
q=s
A.rh(a).cR(q)
p=t.N
o=t.K
n=A.fG(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dx(n,1)
n=s
A.rh(a).cR(n)
o=A.fG(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dx(o,1)
A.uZ()}catch(m){if(!(A.al(m) instanceof A.G))throw m}},
uW(a){var s=0,r=A.bL(t.H),q,p
var $async$uW=A.bN(function(b,c){if(b===1)return A.bH(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.wO(A.E(a==null?null:a.tex),p,"")
q=$.aS
q=q==null?null:q.cL(p)
s=2
return A.as(A.od(A.c([q==null?A.xV(t.H):q],t.iJ),t.H),$async$uW)
case 2:return A.bI(null,r)}})
return A.bJ($async$uW,r)},
zR(){var s,r,q=v.G,p=A.e(A.a(q.window).innerWidth),o=A.e(A.a(q.window).innerHeight)
q=$.z.j()
s=p>0?p:800
q.width=s
s=$.z.j()
q=o>0?o:600
s.height=q
q=$.eo
if(q!=null)q.bf(A.e($.z.j().width),A.e($.z.j().height))
$.f7.j().bf(A.e($.z.j().width),A.e($.z.j().height))
q=$.aS
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.z.j().setAttribute("data-renderer-surface",r)},
EE(){var s,r,q=$.be
if(q!=null){s=$.ac.j()
if(!s.CW.bc("pause",s.f)){s=$.ac.j()
s=s.CW.bc("secondary",s.f)}else s=!0
if(s){A.El(q)
return}if($.ac.j().f.a5(0,"GamepadDpadUp")){A.zH(q,-1)
return}if($.ac.j().f.a5(0,"GamepadDpadDown")){A.zH(q,1)
return}s=$.ac.j()
if(s.CW.bc("interact",s.f)){r=A.E(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.Q(q.b.contains(r)))A.pe(r,"click",t.X)}return}s=$.ac.j()
if(s.CW.bc("pause",s.f)){A.jf($.cr.j())
return}if($.az.j().y)return
s=$.ac.j()
if(s.CW.bc("journal",s.f))A.jh($.j4.j())
else{s=$.ac.j()
if(s.CW.bc("sleep",s.f))A.jh($.m7.j())}},
El(a){if(a===$.cr.j()){a.a6()
return}if(a===$.h8.j()||a instanceof A.fR||a instanceof A.hJ||a instanceof A.hw){A.dK(a)
return}a.a6()},
zH(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(l.length);++r){q=A.E(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.E(A.a(v.G.document).activeElement)
o=B.a.bD(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
Fe(d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1
A.a4(d2)
try{s=d2
if(!$.zA){$.wX=s
$.zA=!0}e=s
d=$.wX
if(typeof e!=="number")return e.ao()
r=(e-d)/1000
$.wX=s
e=r
if(typeof e!=="number")return e.e7()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.aL()
if(e>0.25)r=0.25
A.FI(r)
$.ac.j().m8()
e=$.z.j()
d=$.ac.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ac.j().z
if(q!=null)$.z.j().setAttribute("data-controller-id",q)
else $.z.j().removeAttribute("data-controller-id")
A.EE()
if(!$.mj&&$.be==null){e=$.en
d=r
if(typeof d!=="number")return A.vn(d)
d=$.en=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e7()
c=c<10}else c=!1
if(!c)break
$.x1=$.es()
if(!$.xy()){d=$.T.b
if(d===$.T)A.j(A.a5(""))
d.jZ(0.008333333333333333)
d=$.AP()
c=$.T.b
if(c===$.T)A.j(A.a5(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.j(A.a5(""))
d=d.dr(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){o=d[a]
B.a.l($.da,"clock:"+o.a)}d=$.AQ()
c=$.T.b
if(c===$.T)A.j(A.a5(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.j(A.a5(""))
d=d.dr(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){n=d[a]
B.a.l($.da,"service:"+n.a+":"+n.b)}}A.FL()
d=$.aF.b
if(d===$.aF)A.j(A.a5(""))
c=$.T.b
if(c===$.T)A.j(A.a5(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.ap(d,!1,e)
a0.$flags=3
a1=a0
B.a.L(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.j(A.a5(""))
d.md(a1)}A.FH()
A.FK()
A.FJ()
A.FG(0.008333333333333333)
d=$.h7.b
if(d===$.h7)A.j(A.a5(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.cb.b
if(d===$.cb)A.j(A.a5(""))
m=d.a!==B.D
c=$.U.b
if(c===$.U)A.j(A.a5(""))
d.dq(0.008333333333333333,c)
if(m){d=$.cb.b
if(d===$.cb)A.j(A.a5(""))
d=d.e}else d=!1
if(d)A.zS(!0)
d=$.en-0.008333333333333333
$.en=d
c=p
if(typeof c!=="number")return c.ah()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.xe=A.yG($.AS(),$.es(),l)
k=$.bs
if(k!=null){d=k
c=Math.sin($.cs)
b=Math.cos($.cs)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aK(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hp($.at)
for(e=$.da.length,a=0;a<$.da.length;$.da.length===e||(0,A.t)($.da),++a){j=$.da[a]
A.Ep(k,j)}B.a.L($.da)
$.z.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.z.j().setAttribute("data-audio-muffle01",B.c.aK(k.glE(),3))
e=$.z.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.z.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.cJ.j().fT($.w8(),$.cs,$.fa)
e=$.aS
if(e!=null){d=$.cJ.j()
c=d.a
a3=new A.K(c.a,c.b,c.c)
c=d.b
a4=new A.K(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.yg(a3,a4,new A.K(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.wk(a5,b,d.a,c)
e.p3=new A.fp(a6,a7,a7.an(0,a6),a3,a4,c,b,a5)}e=$.aS
if(e!=null)e.hy($.U.j(),$.at)
e=$.aS
if(e!=null)e.ho($.U.j(),$.at,$.w8(),$.bG.j().gek(),$.bG.j().gkZ(),$.tX.j().dE($.T.j().gaa().a),A.Gt($.at),$.bG.j().b)
if($.zG!==$.cb.j().a){$.zG=$.cb.j().a
$.x4=$.x4+1}e=$.aS
if(e!=null){if($.xy())d=0
else{d=s
if(typeof d!=="number")return d.mU()
d/=1000}c=$.x4
b=A.e(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.j(A.ah(d,"timeSeconds",null))
if(b<0)A.j(A.w("frame clock seeds must be non-negative",null))
e.ry=d
e.to=c
e.x1=b}e=$.aS
if(e!=null){d=$.cb.j()
c=$.x3
b=$.tX.j().dE($.T.j().gaa().a)
a8=A.zP($.at)
a9=d.a
b0=d.geh()
b1=b0>0?B.c.D(d.b/b0,0,1):0
d=a9.a
b2=d>=3
b3=a9===B.bH
b4=$.hn()
b5=b4.H("post_exposure")
b6=b4.H("post_bloom")
b7=b4.H("post_vignette")
b8=b4.H("post_film_grain")
b9=b4.H("post_dither")
c0=b4.H("shadow_ao_intensity")
c1=a9===B.a2?0.45:b5
b4=b4.aP("shadow_ssdo_enable")?c0:0
if(d>=1)c2=a9===B.aH?b1:1
else c2=0
if(d>=2)d=a9===B.bG?b1:1
else d=0
c3=b2?320:0
c4=b2?5:8
c5=b3?1:0
c6=b3?b1:0
c7=b3?b1:0
c8=b3?b1:0
c9=b3?b1:0
d0=b3?b1:0
e.R8=new A.kz(c1,b6,b4,b7,b8,b.c,a8,b9,c2,d,c3,c4,c5,c6,c7,c8,c9,d0,c)}$.f7.j().bp(A.yr($.T.j().gh2()))
i=$.aS
if(i!=null){h=i.glm()
if(h!=null){$.z.j().setAttribute("data-renderer-frame-stats",h)
e=$.z.j()
d=i.gll()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.f9("running")
A.Fd()
e=$.ac.j()
e.as=e.Q=0
d=e.c
d.a5(0,"WheelUp")
d.a5(0,"WheelDown")
e.d.L(0)
e.f.L(0)
A.e(A.a(v.G.window).requestAnimationFrame(A.X(A.Al())))}catch(d1){g=A.al(d1)
f=A.cK(d1)
A.v2(g,f)}},
Ep(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.h0("confirm")
$.bd.j().aM("interface confirmation")
break
case"ambient-winnow":a.dO("winnow",0.28)
$.bd.j().aM("wind moving through the house")
break
case"ambient-gate":a.dO("gate",0.22)
$.bd.j().aM("distant gate")
break
case"collapse":a.h0("collapse")
$.bd.j().aM("front door shudders and collapses")
break
case"clock:tick":A.mk(a,p,"tick")
break
case"clock:chime":A.mk(a,p,"chime")
break
case"clock:cuckoo":A.mk(a,p,"cuckoo")
break
case"clock:bell":A.mk(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mk(a,q,s[2])}}}},
mk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zB,g=$.me
if(h==null||g==null)return
s=h.lc(b)
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
break A}if(q!=null)$.bd.j().aM(q)
q=$.U.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.j(A.k("sound room missing: "+o))
m=n.d.ah(0,s.d.an(0,p))
l=$.m9
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.j(A.k("sound emitter "+s.a+" has no cue for "+c))
a.m7(q,m,s.e,o)
return}q=$.zn
$.zn=q+1
o=A.Ba(B.e2,r,r+":"+q,m,A.E6(b,c),q,o)
q=$.at
q=A.B6($.w8(),q)
t.gG.a(B.bq)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.j(A.k("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.j(A.k("audio listener room missing: "+q))
j=l.h7(p,q,B.bq)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.j(A.k("audio cue family missing: "+q))
k=J.aC(i)
k=k.h(i,B.d.S(A.Fx(q,o.f),k.gt(i)))
o=o.e
A.ai(j.a,t.N)
a.h1(k,new A.f(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
E6(a,b){var s,r,q,p=$.T.j().b
for(s=new A.dT(a+":"+b),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.Ah(p,q==null?r.a(q):q)}return p},
FI(a){var s=$.wR
if(s==null)return
s.textContent=""+B.c.aO(a>0?1/a:0)+" fps"},
FG(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.zX||$.be!=null){$.ms().a=new A.f(0,0,0)
return}s=$.ac.j()
r=s.cu("moveLeft")?-1:0
if(s.cu("moveRight"))++r
q=s.cu("moveForward")?1:0
if(s.cu("moveBack"))--q
s=s.ay?s.w:new A.f(0,0,0)
p=new A.f(r,0,q).ah(0,s)
o=p.gt(0)>1?p.gau():p
$.ac.j().d_(b3)
n=$.ac.j().Q
m=$.ac.j().as
s=$.fe()
l=s.d?-1:1
k=s.e?-1:1
j=$.cs
i=$.ac.j()
i=i.ay?i.x:0
h=$.fe()
g=h.d?-1:1
$.cs=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.fa
h=$.ac.j()
l=h.ay?h.y:0
j=$.fe()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.fa=i
$.fa=B.c.D(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.f(i*Math.cos($.cs)+j*Math.sin($.cs),0,-i*Math.sin($.cs)+j*Math.cos($.cs)).gau().an(0,2)
j=$.ms()
if(!isFinite(b3)||b3<0)A.j(A.ah(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.j(A.ah(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.ah(0,f.ao(0,l).an(0,1-s))
j.a=s
d=$.j5.j().lF($.U.j(),$.at,$.es(),s.an(0,b3))
$.x7=d.a
if($.cb.j().a!==B.bI&&$.cb.j().a!==B.a2)$.at=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.AR()
$.x8=s.hK($.x8,$.es().b,b3)
b=s.k_(b3,c)
s=$.es()
l=$.x8
$.cJ.j().fT(new A.f(s.a+b.a,l+b.b,s.c+b.c),$.cs,$.fa)
s=$.T.j().z
a=new A.qb(s)
s=$.cJ.j()
l=$.U.j()
a0=A.Gs(a,s,$.at,l,$.me)
l=a0.c
$.zc.j().hA(l)
a1=A.E(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.xo($.cJ.j(),$.U.j(),$.at)
break
case 1:a3=A.Ar($.cJ.j(),$.U.j(),$.at)
break
case 2:a4=A.As($.cJ.j(),$.U.j(),$.at)
break
case 3:l=$.cJ.j()
k=$.U.j()
j=$.me
a5=A.Aq(l,$.at,k,j)
break
case 4:case 5:break}$.zb.j().mH($.ff().e5($.T.j().gaa().a,"status"),$.at==="living-room")
l=$.ac.j()
k=l.CW
if(k.bc(b2,l.d)||k.bc(b2,l.f)){l=$.T.j().gaa()
k=a3==null
j=k?b1:a3.a
i=B.a.a7($.aF.j().fu(21),$.aF.j().glx())
if(l.a===21&&j==="front-door"&&i){s=$.cb.j()
$.U.j()
s.hQ(B.eE,A.ai(s.c,t.N))
B.a.l($.da,"collapse")
A.he("the front door opens on itself")}else if(a2!=null&&!a2.e){if(a2.d){a2.d=!1
$.bd.j().aM("mantle flame extinguished")}else if($.T.j().hN(1,1)){a2.d=!0
s=$.h7.j()
s.a=a2
s.b=2
if(a2.f!=null)a2.r=!0
$.bd.j().aM("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bd.j()
s.aM(a3.ax?"door opens":"door closes")
s=$.aS
if(s!=null)s.cP($.U.j(),a3.b)
s=$.aS
if(s!=null)s.dR($.U.j(),a3.a)
s=$.bs
if(s!=null)s.bu()}else if(a4!=null)if(a4.w){s=$.T.j()
if(s.f.cZ(1)){a4.w=!1
$.bd.j().aM("shutter closes")}}else{a4.w=!0
$.bd.j().aM("shutter opens")}else if(s===B.cn){a6=a.e4()
s=A.C(a6)
l=t.E4
a7=A.bu(new A.F(a6,s.i("l(1)").a(new A.va(a0)),s.i("F<1>")),l)
if(a7==null)a7=A.bu(a6,l)
if(a7!=null)$.bd.j().bL("noticed",a7.d)}else if(a5!=null){s=$.w7()
if(!a5.x)A.j(A.k("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.z.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.aY(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.F9(a8)
s=$.bd.j()
s.bL("noticed",a9==null?"you inspect "+a8:a9)}}s=$.h7.j()
if(s.a!=null&&s.b>0){b0=$.h7.j().a
if(b0!=null&&A.xo($.cJ.j(),$.U.j(),$.at)!==b0){s=$.h7.j()
s.a=null
s.b=0}}A.Fk(b3,a0)},
Fk(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9="rgba(12, 10, 14, 0.92)",c0=$.eo
if(c0==null)return
s=A.a($.z.j().getBoundingClientRect())
r=A.a4(s.width)
q=A.a4(s.height)
if(r<=0||q<=0)return
p=$.cL()
p.mG(c1)
o=$.AO()
n=o.c
if(n<1)o.c=Math.min(1,n+c1*6)
n=c2.c
m=n!=null
l=o.he(n,m,$.az.j().y)
o=$.hn()
k=o.a
j=o.d
i=c1*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.U.j()
j=$.at
h=k.e.h(0,j)
k=!$.az.j().y&&$.be==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.T.j().gaa()
b=$.bG.j().b
a=$.mr()
a0=a.y===B.ct
a1=h==null?null:h.a
if(a1==null)a1=$.at
a=a.z?$.ff().e5($.T.j().gaa().a,"status"):null
a2=c0.a
a2.c+=c1
a3=a2.d
B.a.L(a3)
a4=A.a4(A.a(v.G.window).devicePixelRatio)
a5=B.c.aC(r*a4)
a6=B.c.aC(q*a4)
a7=a2.a
if(A.e(a7.width)!==a5||A.e(a7.height)!==a6){a7.width=a5
a7.height=a6}a7=a2.b
a7===$&&A.p()
a7.save()
a7.scale(a4,a4)
a7.clearRect(0,0,r,q)
if(k){a7.save()
a7.translate(r*0.5,q*0.5)
k=t.H
if(m){m=Math.sin(a2.c*8)
a8=a2.c
a9=22*(1+m*0.08)
a7.strokeStyle="rgba(0, 0, 0, 0.85)"
a7.lineWidth=3.5
a7.save()
a8=a8*1.5+0.7853981633974483
a7.rotate(a8)
m=-a9*0.5
a7.strokeRect(m,m,a9,a9)
a7.restore()
a7.strokeStyle="#c49a45"
a7.lineWidth=2
a7.save()
a7.rotate(a8)
a7.strokeRect(m,m,a9,a9)
a7.restore()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aK(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}else{a7.fillStyle="rgba(0, 0, 0, 0.85)"
a7.beginPath()
A.aK(a7,"arc",[1,1,3,0,6.283185307179586],k)
a7.fill()
a7.fillStyle="#f5f0e6"
a7.beginPath()
A.aK(a7,"arc",[0,0,2.5,0,6.283185307179586],k)
a7.fill()}a7.restore()
a2.l7(n,q,r)}a2.l6(q,r,new A.q0(j,i,g,f,e,d,p))
b0=r-80-24
a2.aV("#d32f2f",2,8,b9,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.D(B.c.aX(b*60),0,1439)
b2=B.d.a2(b1,60)
b3=B.d.S(b1,60)
b4=a0?B.d.S(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.dN(B.d.p(b4),2,"0")+":"+B.b.dN(B.d.p(b3),2,"0")+b5,b0,42)
a7.restore()
a2.aV("#c49a45",1.8,6,b9,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bR(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
b8=r<640||q<540?78:76
a2.aV("#f5f0e6",1.5,6,b9,32,-0.04,b6,b7,b8)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bR(a,b6-28),b7,b8)
a7.restore()}a2.l5(l,q,r)
a2.l8(q,r,o)
a7.restore();++c0.b
p=$.z.j()
p.setAttribute("data-renderer-gui-frame",""+c0.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ai(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+c0.c+"x"+c0.d)},
F9(a){var s,r,q,p,o=$.T.j().z.b,n=A.o(o).i("H<1,2>"),m=A.I(new A.H(o,n),n.i("n.E"))
B.a.P(m,new A.uX())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.t)(m),++s){r=m[s]
n=$.ff().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
FL(){var s,r,q,p,o,n,m,l,k,j=null
if($.az.j().y||$.be!=null||$.aF.j().r!=null)return
s=$.T.j().gaa()
for(r=$.aF.j().fu(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=$.aF.b
if(m===$.aF)A.j(A.a5(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aF.b
if(r===$.aF)A.j(A.a5(""))
l=r.bV(n)
if(!(l instanceof A.l8))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.y6(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.ms().a=new A.f(0,0,0)
r=$.az.b
if(r===$.az)A.j(A.a5(""))
q=n.a
r.ed(q,k)
$.cL().bo(!0,B.b9,q,k)
A.A3(n)
return}},
Fl(){var s,r,q=$.aF.j().r,p=q==null,o=p?null:q.gbl()
if(p||o==null)return
p=$.az.j()
s=q.a
r=s.a
p.ed(r,o)
$.cL().bo(!0,B.b9,r,o)
A.A3(s)
if(q.d!==B.a7)A.x0()
A.he("restored visitor")},
A3(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.T.j().ln("stranger-17-eileen-case")
r=$.ff().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
p=A.bu(r,t.N)
if(s==null||p==null)return
$.bd.j().bL("inside the case",p+" \u201c"+s.d+"\u201d")},
FH(){var s,r,q,p,o=$.T.j().gaa(),n=$.m4.j().la(o.a,o.b)
if(n.length===0)return
s=B.a.gU(n)
$.m4.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bd.j().bL(q,s.e)
p=A.FR(r)
if(p!=null)B.a.l($.da,"ambient-"+p)},
FK(){var s,r,q,p,o=$.T.j().gaa()
if(o.b<20)return
s=o.a
if(!$.v9.l(0,s))return
r=$.ff().f
r===$&&A.p()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
p=A.Gp(r,$.T.j().b,s)
if(p!=null)$.bd.j().bL("noticed",p)},
zS(a){var s,r,q,p,o
if($.wQ!=null)return
s=$.T.j().gaa()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("aj<2>")
o=A.BJ(new A.nV(s.a,1-r,new A.F(new A.aj(q,p),p.i("l(n.E)").a(new A.v3()),p.i("F<n.E>")).gt(0),$.T.j().r.d,a))
if(o==null)return
A.zO(o)
A.mm("ending recorded")},
zO(a){var s,r,q
$.wQ=a
$.zX=!0
$.ms().a=new A.f(0,0,0)
A.jf($.j1.j())
s=a.a
r=$.ff().w
r===$&&A.p()
q=r.h(0,s.b)
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
r=A.I(r,t.N)
B.a.I(r,A.Ci($.T.j().z,s))
$.j1.j().hD(a,r)},
Ed(a){var s,r,q,p
A:{if("open"===a){s=B.aw
break A}if("chain"===a){s=B.cg
break A}if("through-door"===a){s=B.ch
break A}if("letterbox"===a){s=B.ci
break A}s=B.ae
break A}r=$.aF.j().ko(s)
if(s===B.aw){q=$.U.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aS
if(p!=null)p.cP($.U.j(),q.b)
p=$.aS
if(p!=null)p.dR($.U.j(),q.a)
p=$.bs
if(p!=null)p.bu()}}if(!(r instanceof A.l6)||s===B.ae){A.ut()
return}if(r.a.gbl()==null){A.wN()
A.ut()
return}A.x0()},
Ek(){var s=$.aF.j().k0()
if(!(s instanceof A.iq)||s.b){A.wN()
A.ut()
return}if(s.a.gbl()==null){A.wN()
A.ut()
return}A.x0()},
x0(){var s,r,q,p,o,n,m,l,k,j=$.aF.j().r,i=j==null,h=i?null:j.gbl()
if(i||h==null)return
s=$.aF.j().gbZ()
if(s==null){$.az.j().hC(h)
$.cL().bo(!0,B.o,j.a.a,h)}else{r=j.w
i=r==null
$.az.j().ee(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.az.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aQ(k.a,k.b))}m.hE(l,r)
o=$.cL()
m=j.a.a
o.bo(!0,i?q:B.o,m,h)
if(!i){i=A.C(p)
k=A.bu(new A.F(p,i.i("l(1)").a(new A.v_(r)),i.i("F<1>")),t.Y)
if(k!=null){i=$.az.j()
q=k.c
i.ef(h,q)
o.bo(!0,B.o,m,h+"\n\n"+q)}}}A.A2()},
Ee(a){var s,r,q,p,o,n=$.aF.j().kp(a)
if(!(n instanceof A.l7))return
s=n.c
if(!$.T.j().k6(n.b,s))return
r=s.c
s=$.az.j()
q=n.a
p=q.gbl()
s.ef(p==null?"":p,r)
o=q.gbl()
if(o==null)o=""
$.cL().bo(!0,B.o,q.a.a,o+"\n\n"+r)
A.A2()
A.mm("saved after visitor answer")},
ut(){var s,r=$.az.j()
r.y=!1
s=r.d
s===$&&A.p()
s.textContent=""
s=r.f
s===$&&A.p()
s.textContent=""
s=r.r
s===$&&A.p()
s.textContent=""
r=r.a
r.className="door"
r.setAttribute("hidden","")
r=$.cL()
r.a=null
r.b=""
r.e=A.c([],t.s)
r.c=1
r.r=r.f=null
r.w=!1
r.x=0
$.ac.j().cQ($.z.j())},
A2(){var s,r,q,p,o=$.az.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.m6.j().e6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
m.push(new A.aQ(p.a,B.a.gV(p.c).p(0)))}o.hB(n,m)},
Ef(a){var s,r,q,p=$.aF.j().kq(a,!0,$.m6.j())
if(p==null)return
s=$.m6.j().kY(p,B.ib)
r=$.az.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.K.bC("",!0,q)},
wN(){var s,r=$.U.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aS
if(s!=null)s.cP($.U.j(),r.b)
s=$.aS
if(s!=null)s.dR($.U.j(),r.a)
s=$.bs
if(s!=null)s.bu()}},
FJ(){var s,r,q,p,o,n,m,l,k
for(s=$.U.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.cb.b
if(k===$.cb)A.j(A.a5(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Gt(a){var s,r,q,p,o,n,m,l=$.U.j().e.h(0,a)
if(l==null||$.bG.j().gek()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.m){n=$.bG.b
if(n===$.bG)A.j(A.a5(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.l){n=$.bG.b
if(n===$.bG)A.j(A.a5(""))
n=n.b>12}else n=!1
if(!n){if(o===B.x){n=$.bG.b
if(n===$.bG)A.j(A.a5(""))
n=n.b<9}else n=!1
if(!n)if(o===B.G){o=$.bG.b
if(o===$.bG)A.j(A.a5(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zP(a){var s,r=$.U.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.bh
if(q.length===0)return 0.12
s=A.C(q)
return B.c.D(new A.F(q,s.i("l(1)").a(new A.v1()),s.i("F<1>")).gt(0)/q.length,0.12,1)},
h_:function h_(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
_.p1=a6
_.p3=_.p2=null
_.p4=a7
_.R8=a8
_.RG=null
_.xr=_.x2=_.x1=_.to=_.ry=_.rx=0
_.y1=!1
_.y2=null
_.c2=_.c1=0
_.c4=_.c3=null
_.lh=$
_.fG=null
_.fH=0},
tJ:function tJ(a){this.a=a},
tK:function tK(a){this.a=a},
tL:function tL(a){this.a=a},
tF:function tF(){},
tG:function tG(){},
tH:function tH(){},
tI:function tI(){},
tD:function tD(){},
tE:function tE(){},
tz:function tz(){},
tA:function tA(){},
tB:function tB(){},
tC:function tC(){},
lI:function lI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tc:function tc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
uc:function uc(){},
ud:function ud(){},
ue:function ue(){},
uk:function uk(){},
ul:function ul(){},
um:function um(){},
un:function un(){},
uo:function uo(){},
up:function up(a){this.a=a},
uq:function uq(a){this.a=a},
ur:function ur(a){this.a=a},
uf:function uf(a){this.a=a},
ug:function ug(){},
uh:function uh(){},
ui:function ui(){},
uj:function uj(){},
u9:function u9(){},
ua:function ua(){},
ub:function ub(){},
u5:function u5(){},
u6:function u6(){},
u7:function u7(){},
u8:function u8(){},
uT:function uT(a,b){this.a=a
this.b=b},
uR:function uR(a){this.a=a},
uS:function uS(a){this.a=a},
vt:function vt(a){this.a=a},
vu:function vu(){},
vv:function vv(){},
vG:function vG(){},
vP:function vP(){},
vQ:function vQ(){},
vR:function vR(){},
vS:function vS(){},
vT:function vT(){},
vU:function vU(){},
vV:function vV(){},
vw:function vw(){},
vx:function vx(){},
vy:function vy(){},
vz:function vz(){},
vA:function vA(){},
vB:function vB(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
vH:function vH(){},
vI:function vI(){},
vJ:function vJ(){},
vK:function vK(){},
vL:function vL(){},
vM:function vM(){},
vN:function vN(){},
vO:function vO(){},
uU:function uU(){},
uV:function uV(){},
uY:function uY(a){this.a=a},
v6:function v6(a){this.a=a},
va:function va(a){this.a=a},
uX:function uX(){},
v3:function v3(){},
v_:function v_(a){this.a=a},
v1:function v1(){},
y6(a,b,c,d,e,f){var s=a[b]()
return s},
pe(a,b,c){var s=null
return c.a(A.y6(a,b,s,s,s,s))},
w_(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.ah(b.glr(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gE().c.a9()
o=q*16
n=o+16
B.t.cX(s,o,n,p.a)
if(l)B.t.cX(r,o,n,p.dL().a)}m=a.a
A.v(m,"uInstanceModels",new A.y(B.dS,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.y(B.dS,r))
A.v(m,"uUseInstances",B.dT)},
Bw(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Bv(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Ah(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
FR(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cf(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b1(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
G6(a){var s,r,q,p,o,n,m,l=B.j.aF(a,null),k=t.f
if(!k.b(l))throw A.b(B.h1)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.j6[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.b(A.a3('text.json section "'+n+'" must be an object',null,null))}return p},
Gp(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaQ(a)
s=new A.eg()
s.bN((b^274953^c)>>>0)
r=s.aN(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.we.prototype={}
J.k8.prototype={
a4(a,b){return a===b},
gN(a){return A.i6(a)},
p(a){return"Instance of '"+A.kC(a)+"'"},
ga3(a){return A.db(A.wU(this))}}
J.ka.prototype={
p(a){return String(a)},
gN(a){return a?519018:218159},
ga3(a){return A.db(t.y)},
$iag:1,
$il:1}
J.hM.prototype={
a4(a,b){return null==b},
p(a){return"null"},
gN(a){return 0},
$iag:1,
$iaq:1}
J.hP.prototype={$iae:1}
J.e1.prototype={
gN(a){return 0},
ga3(a){return B.lX},
p(a){return String(a)}}
J.kw.prototype={}
J.eU.prototype={}
J.e0.prototype={
p(a){var s=a[$.Aw()]
if(s==null)s=a[$.hk()]
if(s==null)return this.hS(a)
return"JavaScript function for "+J.dd(s)},
$ieB:1}
J.hO.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.hQ.prototype={
gN(a){return 0},
p(a){return String(a)}}
J.q.prototype={
cG(a,b){return new A.aW(a,A.C(a).i("@<1>").K(b).i("aW<1,2>"))},
l(a,b){A.C(a).c.a(b)
a.$flags&1&&A.bY(a,29)
a.push(b)},
mg(a,b){var s
a.$flags&1&&A.bY(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.yo(b,null))
return a.splice(b,1)[0]},
a5(a,b){var s
a.$flags&1&&A.bY(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ad(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.C(a).i("n<1>").a(b)
a.$flags&1&&A.bY(a,"addAll",2)
if(Array.isArray(b)){this.ig(a,b)
return}for(s=J.R(b);s.m();)a.push(s.gn())},
ig(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.au(a))
for(r=0;r<s;++r)a.push(b[r])},
L(a){a.$flags&1&&A.bY(a,"clear","clear")
a.length=0},
cc(a,b,c){var s=A.C(a)
return new A.M(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("M<1,2>"))},
X(a,b){var s,r=A.e2(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.x(a[s]))
return r.join(b)},
bd(a,b,c,d){var s,r,q
d.a(b)
A.C(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.au(a))}return r},
aW(a,b,c){var s,r,q,p=A.C(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.au(a))}if(c!=null)return c.$0()
throw A.b(A.cA())},
ae(a,b){return this.aW(a,b,null)},
a0(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aR(a,b,c){var s=a.length
if(b>s)throw A.b(A.aZ(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aZ(c,b,s,"end",null))
if(b===c)return A.c([],A.C(a))
return A.c(a.slice(b,c),A.C(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cA())},
gV(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cA())},
gaQ(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cA())
throw A.b(A.y1())},
M(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.au(a))}return!1},
a7(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.au(a))}return!0},
P(a,b){var s,r,q,p,o,n=A.C(a)
n.i("i(1,1)?").a(b)
a.$flags&2&&A.bY(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.EN()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aL()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hh(b,2))
if(p>0)this.jw(a,p)},
Y(a){return this.P(a,null)},
jw(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cY(a,b){var s,r,q,p
a.$flags&2&&A.bY(a,"shuffle")
s=a.length
while(s>1){r=b.aN(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bD(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.ad(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.ad(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gW(a){return a.length!==0},
p(a){return A.wd(a,"[","]")},
gu(a){return new J.et(a,a.length,A.C(a).i("et<1>"))},
gN(a){return A.i6(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bY(a,"set length","change the length of")
if(b<0)throw A.b(A.aZ(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.vj(a,b))
return a[b]},
k(a,b,c){A.C(a).c.a(c)
a.$flags&2&&A.bY(a)
if(!(b>=0&&b<a.length))throw A.b(A.vj(a,b))
a[b]=c},
e1(a,b){return new A.dF(a,b.i("dF<0>"))},
dH(a,b){var s
A.C(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.db(A.C(a))},
$iP:1,
$in:1,
$iD:1}
J.k9.prototype={
mF(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kC(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pf.prototype={}
J.et.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.t(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia8:1}
J.fE.prototype={
F(a,b){var s
A.a4(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc8(b)
if(this.gc8(a)===s)return 0
if(this.gc8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc8(a){return a===0?1/a<0:a<0},
aC(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.ba(""+a+".toInt()"))},
kl(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.ba(""+a+".ceil()"))},
aX(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.ba(""+a+".floor()"))},
aO(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.ba(""+a+".round()"))},
D(a,b,c){if(this.F(b,c)>0)throw A.b(A.xg(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
aK(a,b){var s
if(b>20)throw A.b(A.aZ(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc8(a))return"-"+s
return s},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
S(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a2(a,b){return(a|0)===a?a/b|0:this.jH(a,b)},
jH(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.ba("Result of truncating division is "+A.x(s)+": "+A.x(a)+" ~/ "+b))},
dn(a,b){var s
if(a>0)s=this.fc(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jF(a,b){if(0>b)throw A.b(A.xg(b))
return this.fc(a,b)},
fc(a,b){return b>31?0:a>>>b},
ga3(a){return A.db(t.o)},
$ib5:1,
$iu:1,
$ibf:1}
J.hL.prototype={
ga3(a){return A.db(t.S)},
$iag:1,
$ii:1}
J.kb.prototype={
ga3(a){return A.db(t.i)},
$iag:1}
J.e_.prototype={
ft(a,b){return new A.lV(b,a,0)},
hO(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hN){s=b.e
s=!(s==null?b.e=b.iC():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iJ(a,b)}},
bI(a,b,c,d){var s=A.kH(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iJ(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.AY(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gei()
n=p.gdD()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.G(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.b1(a,r))
return m},
ac(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aZ(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ac(a,b,0)},
G(a,b,c){return a.substring(b,A.kH(b,c,a.length))},
b1(a,b){return this.G(a,b,null)},
bg(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.C9(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.Ca(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
an(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.eA)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
dN(a,b,c){var s=b-a.length
if(s<=0)return a
return this.an(c,s)+a},
cJ(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aZ(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bD(a,b){return this.cJ(a,b,0)},
q(a,b){return A.Gz(a,b,0)},
F(a,b){var s
A.r(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gN(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga3(a){return A.db(t.N)},
gt(a){return a.length},
$iag:1,
$ib5:1,
$iq4:1,
$ih:1}
A.ed.prototype={
gu(a){return new A.hs(J.R(this.gb2()),A.o(this).i("hs<1,2>"))},
gt(a){return J.cM(this.gb2())},
gO(a){return J.mu(this.gb2())},
gW(a){return J.B0(this.gb2())},
a0(a,b){return A.o(this).y[1].a(J.mt(this.gb2(),b))},
gU(a){return A.o(this).y[1].a(J.xG(this.gb2()))},
q(a,b){return J.xF(this.gb2(),b)},
p(a){return J.dd(this.gb2())}}
A.hs.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia8:1}
A.ew.prototype={
gb2(){return this.a}}
A.iy.prototype={$iP:1}
A.iw.prototype={
h(a,b){return this.$ti.y[1].a(J.aU(this.a,b))},
k(a,b,c){var s=this.$ti
J.bt(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.B1(this.a,b)},
l(a,b){var s=this.$ti
J.ho(this.a,s.c.a(s.y[1].a(b)))},
P(a,b){var s
this.$ti.i("i(2,2)?").a(b)
s=b==null?null:new A.td(this,b)
J.B2(this.a,s)},
$iP:1,
$iD:1}
A.td.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.aW.prototype={
cG(a,b){return new A.aW(this.a,this.$ti.i("@<1>").K(b).i("aW<1,2>"))},
gb2(){return this.a}}
A.fF.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dT.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.qL.prototype={}
A.P.prototype={}
A.a1.prototype={
gu(a){var s=this
return new A.aH(s,s.gt(s),A.o(s).i("aH<a1.E>"))},
gO(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cA())
return this.a0(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.ad(r.a0(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.au(r))}return!1},
a7(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a0(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.au(q))}return!0},
M(a,b){var s,r,q=this
A.o(q).i("l(a1.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a0(0,r)))return!0
if(s!==q.gt(q))throw A.b(A.au(q))}return!1},
X(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.x(p.a0(0,0))
if(o!==p.gt(p))throw A.b(A.au(p))
for(r=s,q=1;q<o;++q){r=r+b+A.x(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.au(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.x(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.au(p))}return r.charCodeAt(0)==0?r:r}},
cT(a,b){return this.hR(0,A.o(this).i("l(a1.E)").a(b))},
cc(a,b,c){var s=A.o(this)
return new A.M(this,s.K(c).i("1(a1.E)").a(b),s.i("@<a1.E>").K(c).i("M<1,2>"))},
bK(a,b){var s=A.o(this).i("a1.E")
if(b)s=A.I(this,s)
else{s=A.I(this,s)
s.$flags=1
s=s}return s},
bJ(a){return this.bK(0,!0)},
bn(a){var s,r=this,q=A.wh(A.o(r).i("a1.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a0(0,s))
return q}}
A.ik.prototype={
giN(){var s=J.cM(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjG(){var s=J.cM(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cM(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a0(a,b){var s=this,r=s.gjG()+b
if(b<0||r>=s.giN())throw A.b(A.p5(b,s.gt(0),s,"index"))
return J.mt(s.a,r)},
bK(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aC(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.y4(0,n):J.y3(0,n)}r=A.e2(s,m.a0(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a0(n,o+q))
if(m.gt(n)<l)throw A.b(A.au(p))}return r},
bJ(a){return this.bK(0,!0)}}
A.aH.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aC(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.au(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a0(q,s);++r.c
return!0},
$ia8:1}
A.cC.prototype={
gu(a){return new A.hV(J.R(this.a),this.b,A.o(this).i("hV<1,2>"))},
gt(a){return J.cM(this.a)},
gO(a){return J.mu(this.a)},
gU(a){return this.b.$1(J.xG(this.a))},
a0(a,b){return this.b.$1(J.mt(this.a,b))}}
A.di.prototype={$iP:1}
A.hV.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia8:1}
A.M.prototype={
gt(a){return J.cM(this.a)},
a0(a,b){return this.b.$1(J.mt(this.a,b))}}
A.F.prototype={
gu(a){return new A.S(J.R(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia8:1}
A.hC.prototype={
gu(a){return new A.hD(J.R(this.a),this.b,B.et,this.$ti.i("hD<1,2>"))}}
A.hD.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.R(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$ia8:1}
A.hA.prototype={
m(){return!1},
gn(){throw A.b(A.cA())},
$ia8:1}
A.dF.prototype={
gu(a){return new A.is(J.R(this.a),this.$ti.i("is<1>"))}}
A.is.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia8:1}
A.av.prototype={
st(a,b){throw A.b(A.ba("Cannot change the length of a fixed-length list"))},
l(a,b){A.bW(a).i("av.E").a(b)
throw A.b(A.ba("Cannot add to a fixed-length list"))}}
A.d3.prototype={
k(a,b,c){A.o(this).i("d3.E").a(c)
throw A.b(A.ba("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.ba("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("d3.E").a(b)
throw A.b(A.ba("Cannot add to an unmodifiable list"))},
P(a,b){A.o(this).i("i(d3.E,d3.E)?").a(b)
throw A.b(A.ba("Cannot modify an unmodifiable list"))}}
A.fV.prototype={}
A.eP.prototype={
gt(a){return J.cM(this.a)},
a0(a,b){var s=this.a,r=J.aC(s)
return r.a0(s,r.gt(s)-1-b)}}
A.j_.prototype={}
A.aQ.prototype={$r:"+(1,2)",$s:1}
A.f5.prototype={$r:"+height,width(1,2)",$s:2}
A.iK.prototype={$r:"+influence,light(1,2)",$s:3}
A.ay.prototype={$r:"+(1,2,3)",$s:4}
A.b1.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iL.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.iM.prototype={$r:"+(1,2,3,4)",$s:8}
A.hu.prototype={}
A.ft.prototype={
gO(a){return this.gt(this)===0},
gW(a){return this.gt(this)!==0},
p(a){return A.wi(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.Bo()},
gJ(){return new A.bV(this.lg(),A.o(this).i("bV<L<1,2>>"))},
lg(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga1(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("L<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.L(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bF(a,b,c,d){var s=A.m(c,d)
this.ar(0,new A.nv(this,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),s))
return s},
$iW:1}
A.nv.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a2.prototype={
gt(a){return this.b.length},
geT(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
ar(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geT()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga1(){return new A.f1(this.geT(),this.$ti.i("f1<1>"))},
gaD(){return new A.f1(this.b,this.$ti.i("f1<2>"))}}
A.f1.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.f2(s,s.length,this.$ti.i("f2<1>"))}}
A.f2.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia8:1}
A.cS.prototype={
bt(){var s=this,r=s.$map
if(r==null){r=new A.hR(s.$ti.i("hR<1,2>"))
A.Aa(s.a,r)
s.$map=r}return r},
R(a){return this.bt().R(a)},
h(a,b){return this.bt().h(0,b)},
ar(a,b){this.$ti.i("~(1,2)").a(b)
this.bt().ar(0,b)},
ga1(){var s=this.bt()
return new A.aa(s,A.o(s).i("aa<1>"))},
gaD(){var s=this.bt()
return new A.aj(s,A.o(s).i("aj<2>"))},
gt(a){return this.bt().a}}
A.hv.prototype={
l(a,b){A.o(this).c.a(b)
A.Bp()}}
A.aL.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gW(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f2(s,s.length,r.$ti.i("f2<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bn(a){return A.kh(this,this.$ti.c)}}
A.qj.prototype={
$0(){return B.c.aX(1000*this.a.now())},
$S:39}
A.ic.prototype={}
A.rI.prototype={
aZ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.i1.prototype={
p(a){return"Null check operator used on a null value"}}
A.kc.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.l0.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pY.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hB.prototype={}
A.iO.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$id0:1}
A.dS.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Au(r==null?"unknown":r)+"'"},
ga3(a){var s=A.xi(this)
return A.db(s==null?A.bW(this):s)},
$ieB:1,
gmT(){return this},
$C:"$1",
$R:1,
$D:null}
A.jz.prototype={$C:"$0",$R:0}
A.jA.prototype={$C:"$2",$R:2}
A.kX.prototype={}
A.kU.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Au(s)+"'"}}
A.fm.prototype={
a4(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fm))return!1
return this.$_target===b.$_target&&this.a===b.a},
gN(a){return(A.mq(this.a)^A.i6(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kC(this.a)+"'")}}
A.kL.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cj.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gW(a){return this.a!==0},
ga1(){return new A.aa(this,A.o(this).i("aa<1>"))},
gaD(){return new A.aj(this,A.o(this).i("aj<2>"))},
gJ(){return new A.H(this,A.o(this).i("H<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ls(a)},
ls(a){var s=this.d
if(s==null)return!1
return this.c7(s[this.c6(a)],a)>=0},
I(a,b){A.o(this).i("W<1,2>").a(b).ar(0,new A.po(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lt(b)},
lt(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c6(a)]
r=this.c7(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.en(s==null?q.b=q.dj():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.en(r==null?q.c=q.dj():r,b,c)}else q.lv(b,c)},
lv(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dj()
r=o.c6(a)
q=s[r]
if(q==null)s[r]=[o.dk(a,b)]
else{p=o.c7(q,a)
if(p>=0)q[p].b=b
else q.push(o.dk(a,b))}},
ce(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.R(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a5(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.ic(this.c,b)
else return this.lu(b)},
lu(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c6(a)
r=n[s]
q=o.c7(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.el(p)
if(r.length===0)delete n[s]
return p.b},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d0()}},
ar(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.au(q))
s=s.c}},
en(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dk(b,c)
else s.b=c},
ic(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.el(s)
delete a[b]
return s.b},
d0(){this.r=this.r+1&1073741823},
dk(a,b){var s=this,r=A.o(s),q=new A.pA(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d0()
return q},
el(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d0()},
c6(a){return J.aA(a)&1073741823},
c7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1},
p(a){return A.wi(this)},
dj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iwg:1}
A.po.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.pA.prototype={}
A.aa.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ck(s,s.r,s.e,this.$ti.i("ck<1>"))},
q(a,b){return this.a.R(b)}}
A.ck.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia8:1}
A.aj.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.af(s,s.r,s.e,this.$ti.i("af<1>"))}}
A.af.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia8:1}
A.H.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cB(s,s.r,s.e,this.$ti.i("cB<1,2>"))}}
A.cB.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.L(s.a,s.b,r.$ti.i("L<1,2>"))
r.c=s.c
return!0}},
$ia8:1}
A.hR.prototype={
c6(a){return A.G1(a)&1073741823},
c7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1}}
A.vo.prototype={
$1(a){return this.a(a)},
$S:13}
A.vp.prototype={
$2(a,b){return this.a(a,b)},
$S:143}
A.vq.prototype={
$1(a){return this.a(A.r(a))},
$S:37}
A.bq.prototype={
ga3(a){return A.db(this.eQ())},
eQ(){return A.Gb(this.$r,this.ct())},
p(a){return this.fj(!1)},
fj(a){var s,r,q,p,o,n=this.iR(),m=this.ct(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.yl(o):l+A.x(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iR(){var s,r=this.$s
while($.tM.length<=r)B.a.l($.tM,null)
s=$.tM[r]
if(s==null){s=this.iB()
B.a.k($.tM,r,s)}return s},
iB(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.y2(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ai(j,k)}}
A.eh.prototype={
ct(){return[this.a,this.b]},
a4(a,b){if(b==null)return!1
return b instanceof A.eh&&this.$s===b.$s&&J.ad(this.a,b.a)&&J.ad(this.b,b.b)},
gN(a){return A.cE(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ei.prototype={
ct(){return[this.a,this.b,this.c]},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.ei&&s.$s===b.$s&&J.ad(s.a,b.a)&&J.ad(s.b,b.b)&&J.ad(s.c,b.c)},
gN(a){var s=this
return A.cE(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fZ.prototype={
ct(){return this.a},
a4(a,b){if(b==null)return!1
return b instanceof A.fZ&&this.$s===b.$s&&A.Dw(this.a,b.a)},
gN(a){return A.cE(this.$s,A.Cm(this.a),B.f,B.f,B.f,B.f)}}
A.hN.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gj6(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.y8(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iC(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ft(a,b){return new A.lj(this,b,0)},
iQ(a,b){var s,r=this.gj6()
if(r==null)r=A.f8(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lE(s)},
$iq4:1,
$iCC:1}
A.lE.prototype={
gei(){return this.b.index},
gdD(){var s=this.b
return s.index+s[0].length},
$ifI:1,
$ii7:1}
A.lj.prototype={
gu(a){return new A.lk(this.a,this.b,this.c)}}
A.lk.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iQ(l,s)
if(p!=null){m.d=p
o=p.gdD()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.d(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.d(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia8:1}
A.ij.prototype={
gdD(){return this.a+this.c.length},
$ifI:1,
gei(){return this.a}}
A.lV.prototype={
gu(a){return new A.lW(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ij(r,s)
throw A.b(A.cA())}}
A.lW.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ij(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia8:1}
A.te.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a5(""))
return s}}
A.fK.prototype={
ga3(a){return B.lQ},
$iag:1}
A.fJ.prototype={$ifJ:1}
A.i_.prototype={
j_(a,b,c,d){var s=A.aZ(b,0,c,d,null)
throw A.b(s)},
ew(a,b,c,d){if(b>>>0!==b||b>c)this.j_(a,b,c,d)}}
A.kl.prototype={
ga3(a){return B.lR},
$iag:1}
A.b6.prototype={
gt(a){return a.length},
f9(a,b,c,d,e){var s,r,q=a.length
this.ew(a,b,q,"start")
this.ew(a,c,q,"end")
if(b>c)throw A.b(A.aZ(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.w(e,null))
r=d.length
if(r-e<s)throw A.b(A.k("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic0:1}
A.hY.prototype={
h(a,b){A.dJ(b,a,a.length)
return a[b]},
k(a,b,c){A.br(c)
a.$flags&2&&A.bY(a)
A.dJ(b,a,a.length)
a[b]=c},
cX(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bY(a,5)
this.f9(a,b,c,d,0)
return},
$iP:1,
$in:1,
$iD:1}
A.hZ.prototype={
k(a,b,c){A.e(c)
a.$flags&2&&A.bY(a)
A.dJ(b,a,a.length)
a[b]=c},
hw(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bY(a,5)
this.f9(a,b,c,d,e)
return},
$iP:1,
$in:1,
$iD:1}
A.hX.prototype={
ga3(a){return B.lS},
aR(a,b,c){return new Float32Array(a.subarray(b,A.Eb(b,c,a.length)))},
$iag:1,
$io4:1}
A.km.prototype={
ga3(a){return B.lT},
$iag:1}
A.kn.prototype={
ga3(a){return B.lU},
h(a,b){A.dJ(b,a,a.length)
return a[b]},
$iag:1}
A.ko.prototype={
ga3(a){return B.lV},
h(a,b){A.dJ(b,a,a.length)
return a[b]},
$iag:1}
A.kp.prototype={
ga3(a){return B.lW},
h(a,b){A.dJ(b,a,a.length)
return a[b]},
$iag:1}
A.kq.prototype={
ga3(a){return B.lZ},
h(a,b){A.dJ(b,a,a.length)
return a[b]},
$iag:1,
$iwu:1}
A.kr.prototype={
ga3(a){return B.m_},
h(a,b){A.dJ(b,a,a.length)
return a[b]},
$iag:1}
A.eI.prototype={
ga3(a){return B.m0},
gt(a){return a.length},
h(a,b){A.dJ(b,a,a.length)
return a[b]},
$iag:1,
$ieI:1}
A.i0.prototype={
ga3(a){return B.m1},
gt(a){return a.length},
h(a,b){A.dJ(b,a,a.length)
return a[b]},
$iag:1,
$iim:1}
A.iF.prototype={}
A.iG.prototype={}
A.iH.prototype={}
A.iI.prototype={}
A.cG.prototype={
i(a){return A.iS(v.typeUniverse,this,a)},
K(a){return A.z1(v.typeUniverse,this,a)}}
A.lx.prototype={}
A.lZ.prototype={
p(a){return A.bM(this.a,null)}}
A.lv.prototype={
p(a){return this.a}}
A.h3.prototype={$idB:1}
A.t9.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
A.t8.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:112}
A.ta.prototype={
$0(){this.a.$0()},
$S:12}
A.tb.prototype={
$0(){this.a.$0()},
$S:12}
A.tP.prototype={
ib(a,b){if(self.setTimeout!=null)self.setTimeout(A.hh(new A.tQ(this,b),0),a)
else throw A.b(A.ba("`setTimeout()` not found."))}}
A.tQ.prototype={
$0(){this.b.$0()},
$S:0}
A.ll.prototype={
ds(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d3(a)
else{s=r.a
if(q.i("c_<1>").b(a))s.eu(a)
else s.cr(a)}},
dt(a,b){var s=this.a
if(this.b)s.bj(new A.b3(a,b))
else s.cp(new A.b3(a,b))}}
A.u1.prototype={
$1(a){return this.a.$2(0,a)},
$S:26}
A.u2.prototype={
$2(a,b){this.a.$2(1,new A.hB(a,t.l.a(b)))},
$S:61}
A.ve.prototype={
$2(a,b){this.a(A.e(a),b)},
$S:71}
A.ca.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jz(a,b){var s,r,q
a=A.e(a)
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
o.d=null}q=o.jz(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yX
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
o.a=A.yX
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.k("sync*"))}return!1},
mW(a){var s,r,q=this
if(a instanceof A.bV){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.R(a)
return 2}},
$ia8:1}
A.bV.prototype={
gu(a){return new A.ca(this.a(),this.$ti.i("ca<1>"))}}
A.b3.prototype={
p(a){return A.x(this.a)},
$iam:1,
gbM(){return this.b}}
A.oc.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eB(null)}else{s=null
try{s=l.$0()}catch(p){r=A.al(p)
q=A.cK(p)
l=r
o=q
n=A.wV(l,o)
l=new A.b3(l,o)
m.b.bj(l)
return}m.b.eB(s)}},
$S:0}
A.of.prototype={
$2(a,b){var s,r,q=this
A.f8(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bj(new A.b3(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bj(new A.b3(r,s))}},
$S:72}
A.oe.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bt(r,k.b,a)
if(J.ad(s,0)){q=A.c([],j.i("q<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.t)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.ho(q,l)}k.c.cr(q)}}else if(J.ad(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bj(new A.b3(q,o))}},
$S(){return this.d.i("aq(0)")}}
A.lp.prototype={
dt(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.cp(A.EM(a,b))},
fz(a){return this.dt(a,null)}}
A.iu.prototype={
ds(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.d3(r.i("1/").a(a))}}
A.dG.prototype={
lD(a){if((this.c&15)!==6)return!0
return this.b.b.dY(t.bl.a(this.d),a.a,t.y,t.K)},
lo(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mB(q,m,a.b,o,n,t.l)
else p=l.dY(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.al(s))){if((r.c&1)!==0)throw A.b(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ar.prototype={
dZ(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.an
if(s===B.w){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.ah(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.zQ(b,s)}r=new A.ar(s,c.i("ar<0>"))
this.co(new A.dG(r,3,a,b,q.i("@<1>").K(c).i("dG<1,2>")))
return r},
fh(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.ar($.an,c.i("ar<0>"))
this.co(new A.dG(s,19,a,b,r.i("@<1>").K(c).i("dG<1,2>")))
return s},
jC(a){this.a=this.a&1|16
this.c=a},
cq(a){this.a=a.a&30|this.a&1
this.c=a.c},
co(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.co(a)
return}r.cq(s)}A.ml(null,null,r.b,t.O.a(new A.th(r,a)))}},
f0(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.f0(a)
return}m.cq(n)}l.a=m.cB(a)
A.ml(null,null,m.b,t.O.a(new A.tm(l,m)))}},
bT(){var s=t.F.a(this.c)
this.c=null
return this.cB(s)},
cB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eB(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("c_<1>").b(a))A.tk(a,r,!0)
else{s=r.bT()
q.c.a(a)
r.a=8
r.c=a
A.f_(r,s)}},
cr(a){var s,r=this
r.$ti.c.a(a)
s=r.bT()
r.a=8
r.c=a
A.f_(r,s)},
iA(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bT()
q.cq(a)
A.f_(q,r)},
bj(a){var s=this.bT()
this.jC(a)
A.f_(this,s)},
d3(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("c_<1>").b(a)){this.eu(a)
return}this.ik(a)},
ik(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ml(null,null,s.b,t.O.a(new A.tj(s,a)))},
eu(a){A.tk(this.$ti.i("c_<1>").a(a),this,!1)
return},
cp(a){this.a^=2
A.ml(null,null,this.b,t.O.a(new A.ti(this,a)))},
$ic_:1}
A.th.prototype={
$0(){A.f_(this.a,this.b)},
$S:0}
A.tm.prototype={
$0(){A.f_(this.b,this.a.a)},
$S:0}
A.tl.prototype={
$0(){A.tk(this.a.a,this.b,!0)},
$S:0}
A.tj.prototype={
$0(){this.a.cr(this.b)},
$S:0}
A.ti.prototype={
$0(){this.a.bj(this.b)},
$S:0}
A.tp.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mA(t.pF.a(q.d),t.z)}catch(p){s=A.al(p)
r=A.cK(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mL(q)
n=k.a
n.c=new A.b3(q,o)
q=n}q.b=!0
return}if(j instanceof A.ar&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ar){m=k.b.a
l=new A.ar(m.b,m.$ti)
j.dZ(new A.tq(l,m),new A.tr(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tq.prototype={
$1(a){this.a.iA(this.b)},
$S:21}
A.tr.prototype={
$2(a,b){A.f8(a)
t.l.a(b)
this.a.bj(new A.b3(a,b))},
$S:73}
A.to.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dY(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.al(l)
r=A.cK(l)
q=s
p=r
if(p==null)p=A.mL(q)
o=this.a
o.c=new A.b3(q,p)
o.b=!0}},
$S:0}
A.tn.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lD(s)&&p.a.e!=null){p.c=p.a.lo(s)
p.b=!1}}catch(o){r=A.al(o)
q=A.cK(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mL(p)
m=l.b
m.c=new A.b3(p,n)
p=m}p.b=!0}},
$S:0}
A.lm.prototype={}
A.lU.prototype={}
A.iZ.prototype={$iyP:1}
A.lN.prototype={
mC(a){var s,r,q
t.O.a(a)
try{if(B.w===$.an){a.$0()
return}A.zV(null,null,this,a,t.H)}catch(q){s=A.al(q)
r=A.cK(q)
A.x5(A.f8(s),t.l.a(r))}},
fw(a){return new A.tN(this,t.O.a(a))},
mA(a,b){b.i("0()").a(a)
if($.an===B.w)return a.$0()
return A.zV(null,null,this,a,b)},
dY(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.an===B.w)return a.$1(b)
return A.Fp(null,null,this,a,b,c,d)},
mB(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.an===B.w)return a.$2(b,c)
return A.Fo(null,null,this,a,b,c,d,e,f)},
h4(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.tN.prototype={
$0(){return this.a.mC(this.b)},
$S:0}
A.v4.prototype={
$0(){A.BO(this.a,this.b)},
$S:0}
A.iz.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gW(a){return this.a!==0},
ga1(){return new A.f0(this,this.$ti.i("f0<1>"))},
gaD(){var s=this.$ti
return A.ki(new A.f0(this,s.i("f0<1>")),new A.tt(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iF(a)},
iF(a){var s=this.d
if(s==null)return!1
return this.bk(this.eP(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yR(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yR(q,b)
return r}else return this.iU(b)},
iU(a){var s,r,q=this.d
if(q==null)return null
s=this.eP(q,a)
r=this.bk(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ez(s==null?m.b=A.wy():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ez(r==null?m.c=A.wy():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wy()
p=A.mq(b)&1073741823
o=q[p]
if(o==null){A.wz(q,p,[b,c]);++m.a
m.e=null}else{n=m.bk(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ar(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.eA()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.au(m))}},
eA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.e2(i.a,null,!1,t.z)
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
ez(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wz(a,b,c)},
eP(a,b){return a[A.mq(b)&1073741823]}}
A.tt.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iB.prototype={
bk(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.f0.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iA(s,s.eA(),this.$ti.i("iA<1>"))},
q(a,b){return this.a.R(b)}}
A.iA.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.au(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia8:1}
A.cp.prototype={
eY(){return new A.cp(A.o(this).i("cp<1>"))},
gu(a){var s=this,r=new A.f3(s,s.r,A.o(s).i("f3<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gW(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iE(b)},
iE(a){var s=this.d
if(s==null)return!1
return this.bk(s[this.d7(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.k("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ey(s==null?q.b=A.wA():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ey(r==null?q.c=A.wA():r,b)}else return q.ie(b)},
ie(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wA()
r=p.d7(a)
q=s[r]
if(q==null)s[r]=[p.d6(a)]
else{if(p.bk(q,a)>=0)return!1
q.push(p.d6(a))}return!0},
a5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f1(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f1(s.c,b)
else return s.jv(b)},
jv(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d7(a)
r=n[s]
q=o.bk(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fl(p)
return!0},
iS(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.au(n))
if(!0===o)n.a5(0,r)}},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.di()}},
ey(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d6(b)
return!0},
f1(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fl(s)
delete a[b]
return!0},
di(){this.r=this.r+1&1073741823},
d6(a){var s,r=this,q=new A.lD(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.di()
return q},
fl(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.di()},
d7(a){return J.aA(a)&1073741823},
bk(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1},
$iye:1}
A.lD.prototype={}
A.f3.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.au(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia8:1}
A.pB.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:100}
A.V.prototype={
gu(a){return new A.aH(a,this.gt(a),A.bW(a).i("aH<V.E>"))},
a0(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gW(a){return!this.gO(a)},
gU(a){if(this.gt(a)===0)throw A.b(A.cA())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.ad(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.b(A.au(a))}return!1},
a7(a,b){var s,r
A.bW(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.b(A.au(a))}return!0},
M(a,b){var s,r
A.bW(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.b(A.au(a))}return!1},
X(a,b){var s
if(this.gt(a)===0)return""
s=A.ws("",a,b)
return s.charCodeAt(0)==0?s:s},
e1(a,b){return new A.dF(a,b.i("dF<0>"))},
cc(a,b,c){var s=A.bW(a)
return new A.M(a,s.K(c).i("1(V.E)").a(b),s.i("@<V.E>").K(c).i("M<1,2>"))},
l(a,b){var s
A.bW(a).i("V.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cG(a,b){return new A.aW(a,A.bW(a).i("@<V.E>").K(b).i("aW<1,2>"))},
P(a,b){var s,r=A.bW(a)
r.i("i(V.E,V.E)?").a(b)
s=b==null?A.G0():b
A.kQ(a,0,this.gt(a)-1,s,r.i("V.E"))},
li(a,b,c,d){var s
A.bW(a).i("V.E?").a(d)
A.kH(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.wd(a,"[","]")},
$iP:1,
$in:1,
$iD:1}
A.a6.prototype={
ar(a,b){var s,r,q,p=A.o(this)
p.i("~(a6.K,a6.V)").a(b)
for(s=this.ga1(),s=s.gu(s),p=p.i("a6.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga1().cc(0,new A.pD(this),A.o(this).i("L<a6.K,a6.V>"))},
bF(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("L<1,2>(a6.K,a6.V)").a(b)
s=A.m(c,d)
for(r=this.ga1(),r=r.gu(r),n=n.i("a6.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
jX(a){var s,r
for(s=J.R(A.o(this).i("n<L<a6.K,a6.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.ga1().q(0,a)},
gt(a){var s=this.ga1()
return s.gt(s)},
gO(a){var s=this.ga1()
return s.gO(s)},
gW(a){var s=this.ga1()
return s.gW(s)},
gaD(){return new A.iC(this,A.o(this).i("iC<a6.K,a6.V>"))},
p(a){return A.wi(this)},
$iW:1}
A.pD.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a6.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a6.V").a(s)
return new A.L(a,s,r.i("L<a6.K,a6.V>"))},
$S(){return A.o(this.a).i("L<a6.K,a6.V>(a6.K)")}}
A.pE.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.x(a)
r.a=(r.a+=s)+": "
s=A.x(b)
r.a+=s},
$S:35}
A.iC.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gW(a){var s=this.a
return s.gW(s)},
gU(a){var s=this.a,r=s.ga1()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga1()
return new A.iD(r.gu(r),s,this.$ti.i("iD<1,2>"))}}
A.iD.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia8:1}
A.iT.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.ba("Cannot modify unmodifiable map"))}}
A.fH.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
ar(a,b){this.a.ar(0,A.o(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gW(a){var s=this.a
return s.gW(s)},
gt(a){var s=this.a
return s.gt(s)},
ga1(){return this.a.ga1()},
p(a){return this.a.p(0)},
gaD(){return this.a.gaD()},
gJ(){return this.a.gJ()},
bF(a,b,c,d){return this.a.bF(0,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),c,d)},
$iW:1}
A.ea.prototype={}
A.dw.prototype={
gO(a){return this.gt(this)===0},
gW(a){return this.gt(this)!==0},
I(a,b){var s
for(s=J.R(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
bm(a){var s,r,q=this.bn(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a5(0,r)}return q},
p(a){return A.wd(this,"{","}")},
a7(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
X(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dd(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.x(q.gn())
while(q.m())}else{r=s
do r=r+b+A.x(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cA())
return s.gn()},
a0(a,b){var s,r
A.kG(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.p5(b,b-r,this,"index"))},
$iP:1,
$in:1,
$ie8:1}
A.iN.prototype={
bm(a){var s,r,q,p=this,o=p.eY()
for(s=A.fX(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bn(a){var s=this.eY()
s.I(0,this)
return s}}
A.m_.prototype={
l(a,b){this.$ti.c.a(b)
return A.DI()}}
A.fW.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fX(s,s.r,A.o(s).c)},
bn(a){return this.a.bn(0)}}
A.h4.prototype={}
A.iU.prototype={}
A.lB.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jp(b):s}},
gt(a){return this.b==null?this.c.a:this.bq().length},
gO(a){return this.gt(0)===0},
gW(a){return this.gt(0)>0},
ga1(){if(this.b==null){var s=this.c
return new A.aa(s,A.o(s).i("aa<1>"))}return new A.lC(this)},
gaD(){var s,r=this
if(r.b==null){s=r.c
return new A.aj(s,A.o(s).i("aj<2>"))}return A.ki(r.bq(),new A.tv(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.r(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jO().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ar(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.ar(0,b)
s=o.bq()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.us(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.au(o))}},
bq(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
jO(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bq()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.L(r)
n.a=n.b=null
return n.c=s},
jp(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.us(this.a[a])
return this.b[a]=s}}
A.tv.prototype={
$1(a){return this.a.h(0,A.r(a))},
$S:37}
A.lC.prototype={
gt(a){return this.a.gt(0)},
a0(a,b){var s=this.a
if(s.b==null)s=s.ga1().a0(0,b)
else{s=s.bq()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga1()
s=s.gu(s)}else{s=s.bq()
s=new J.et(s,s.length,A.C(s).i("et<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.tU.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:31}
A.tT.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:31}
A.jt.prototype={
lG(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kH(a4,a5,a2)
s=$.AI()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.vm(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.vm(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bm("")
g=o}else g=o
g.a+=B.b.G(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.b(A.a3("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.G(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xI(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.b(A.a3(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bI(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xI(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.b(A.a3(a1,a3,a5))
if(b>1)a3=B.b.bI(a3,a5,a5,b===2?"==":"=")}return a3}}
A.nd.prototype={}
A.ex.prototype={}
A.jF.prototype={}
A.jO.prototype={}
A.hS.prototype={
p(a){var s=A.jP(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ke.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.kd.prototype={
aF(a,b){var s=A.Fc(a,this.gl0().a)
return s},
ab(a,b){var s=A.Do(a,this.gld().b,null)
return s},
gld(){return B.ih},
gl0(){return B.ig}}
A.pq.prototype={}
A.pp.prototype={}
A.tx.prototype={
hc(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.G(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(117)
s.a+=o
o=A.ax(100)
s.a+=o
o=p>>>8&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ax(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.G(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
switch(p){case 8:o=A.ax(98)
s.a+=o
break
case 9:o=A.ax(116)
s.a+=o
break
case 10:o=A.ax(110)
s.a+=o
break
case 12:o=A.ax(102)
s.a+=o
break
case 13:o=A.ax(114)
s.a+=o
break
default:o=A.ax(117)
s.a+=o
o=A.ax(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ax(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.G(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.G(a,r,m)},
d4(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.ke(a,null))}B.a.l(s,a)},
cU(a){var s,r,q,p,o=this
if(o.hb(a))return
o.d4(a)
try{s=o.b.$1(a)
if(!o.hb(s)){q=A.ya(a,null,o.gf_())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.al(p)
q=A.ya(a,r,o.gf_())
throw A.b(q)}},
hb(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hc(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d4(a)
q.mR(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d4(a)
r=q.mS(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
mR(a){var s,r,q=this.c
q.a+="["
s=J.aC(a)
if(s.gW(a)){this.cU(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cU(s.h(a,r))}}q.a+="]"},
mS(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e2(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ar(0,new A.ty(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hc(A.r(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cU(r[n])}p.a+="}"
return!0}}
A.ty.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:35}
A.tw.prototype={
gf_(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.l4.prototype={}
A.rN.prototype={
ku(a){return new A.tS(this.a).iG(t.J.a(a),0,null,!0)}}
A.tS.prototype={
iG(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.kH(b,c,J.cM(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.DZ(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.DY(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.d9(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.E_(o)
l.b=0
throw A.b(A.a3(m,a,p+l.c))}return n},
d9(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a2(b+c,2)
r=q.d9(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.d9(a,s,c,d)}return q.l_(a,b,c,d)},
l_(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bm(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ax(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ax(h)
e.a+=p
break
case 65:p=A.ax(h)
e.a+=p;--d
break
default:p=A.ax(h)
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
p=A.ax(a[l])
e.a+=p}else{p=A.yx(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ey.prototype={
a4(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ey)if(this.a===b.a)s=this.b===b.b
return s},
gN(a){return A.cE(this.a,this.b,B.f,B.f,B.f,B.f)},
F(a,b){var s
t.f7.a(b)
s=B.d.F(this.a,b.a)
if(s!==0)return s
return B.d.F(this.b,b.b)},
p(a){var s=this,r=A.Bt(A.Cy(s)),q=A.jH(A.Cw(s)),p=A.jH(A.Cs(s)),o=A.jH(A.Ct(s)),n=A.jH(A.Cv(s)),m=A.jH(A.Cx(s)),l=A.xP(A.Cu(s)),k=s.b,j=k===0?"":A.xP(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib5:1}
A.dU.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.dU&&this.a===b.a},
gN(a){return B.d.gN(this.a)},
F(a,b){return B.d.F(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a2(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a2(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.dN(B.d.p(o%1e6),6,"0")},
$ib5:1}
A.lu.prototype={
p(a){return this.v()},
$iA:1}
A.am.prototype={
gbM(){return A.Cr(this)}}
A.jp.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jP(s)
return"Assertion failed"}}
A.dB.prototype={}
A.cv.prototype={
gde(){return"Invalid argument"+(!this.a?"(s)":"")},
gdd(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.x(p),n=s.gde()+q+o
if(!s.a)return n
return n+s.gdd()+": "+A.jP(s.gdI())},
gdI(){return this.b}}
A.fN.prototype={
gdI(){return A.wI(this.b)},
gde(){return"RangeError"},
gdd(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.x(q):""
else if(q==null)s=": Not greater than or equal to "+A.x(r)
else if(q>r)s=": Not in inclusive range "+A.x(r)+".."+A.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.x(r)
return s}}
A.k5.prototype={
gdI(){return A.e(this.b)},
gde(){return"RangeError"},
gdd(){if(A.e(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.io.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.l_.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fT.prototype={
p(a){return"Bad state: "+this.a}}
A.jC.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jP(s)+"."}}
A.kt.prototype={
p(a){return"Out of Memory"},
gbM(){return null},
$iam:1}
A.ih.prototype={
p(a){return"Stack Overflow"},
gbM(){return null},
$iam:1}
A.tf.prototype={
p(a){return"Exception: "+this.a}}
A.G.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.G(e,0,75)+"..."
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
k=""}return g+l+B.b.G(e,i,j)+k+"\n"+B.b.an(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.x(f)+")"):g}}
A.n.prototype={
cG(a,b){return A.Bi(this,A.o(this).i("n.E"),b)},
cc(a,b,c){var s=A.o(this)
return A.ki(this,s.K(c).i("1(n.E)").a(b),s.i("n.E"),c)},
cT(a,b){var s=A.o(this)
return new A.F(this,s.i("l(n.E)").a(b),s.i("F<n.E>"))},
e1(a,b){return new A.dF(this,b.i("dF<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.ad(s.gn(),b))return!0
return!1},
bd(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a7(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
X(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dd(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.dd(q.gn())
while(q.m())}else{r=s
do r=r+A.x(b)+J.dd(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bK(a,b){var s=A.I(this,A.o(this).i("n.E"))
return s},
bJ(a){return this.bK(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gW(a){return!this.gO(this)},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cA())
return s.gn()},
gaQ(a){var s,r=this.gu(this)
if(!r.m())throw A.b(A.cA())
s=r.gn()
if(r.m())throw A.b(A.y1())
return s},
aW(a,b,c){var s,r=A.o(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cA())},
ae(a,b){return this.aW(0,b,null)},
a0(a,b){var s,r
A.kG(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.p5(b,b-r,this,"index"))},
p(a){return A.C7(this,"(",")")}}
A.L.prototype={
p(a){return"MapEntry("+A.x(this.a)+": "+A.x(this.b)+")"}}
A.aq.prototype={
gN(a){return A.J.prototype.gN.call(this,0)},
p(a){return"null"}}
A.J.prototype={$iJ:1,
a4(a,b){return this===b},
gN(a){return A.i6(this)},
p(a){return"Instance of '"+A.kC(this)+"'"},
ga3(a){return A.xk(this)},
toString(){return this.p(this)}}
A.lX.prototype={
p(a){return""},
$id0:1}
A.ru.prototype={
glb(){var s,r=this.b
if(r==null)r=$.ql.$0()
s=r-this.a
if($.xw()===1e6)return s
return s*1000}}
A.bm.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCR:1}
A.rM.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.r(b)
s=B.b.bD(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wF(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.G(b,0,s)
q=B.b.b1(b,s+1)
p=this.a
a.k(0,A.wF(r,0,r.length,p,!0),A.wF(q,0,q.length,p,!0))}return a},
$S:153}
A.rL.prototype={
$2(a,b){throw A.b(A.a3("Illegal IPv6 address, "+a,this.a,b))},
$S:163}
A.iV.prototype={
gfe(){var s,r,q,p,o=this,n=o.w
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
gN(a){var s,r=this,q=r.y
if(q===$){s=B.b.gN(r.gfe())
r.y!==$&&A.xq()
r.y=s
q=s}return q},
gb0(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yF(s==null?"":s)
r.z!==$&&A.xq()
q=r.z=new A.ea(s,t.hL)}return q},
gh9(){return this.b},
gdG(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ac(s,"v",1))return B.b.G(s,1,s.length-1)
return s},
gdP(){var s=this.d
return s==null?A.z2(this.a):s},
gdQ(){var s=this.f
return s==null?"":s},
gfL(){var s=this.r
return s==null?"":s},
gfM(){return this.c!=null},
gfO(){return this.f!=null},
gfN(){return this.r!=null},
p(a){return this.gfe()},
a4(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge8())if(p.c!=null===b.gfM())if(p.b===b.gh9())if(p.gdG()===b.gdG())if(p.gdP()===b.gdP())if(p.e===b.gfZ()){r=p.f
q=r==null
if(!q===b.gfO()){if(q)r=""
if(r===b.gdQ()){r=p.r
q=r==null
if(!q===b.gfN()){s=q?"":r
s=s===b.gfL()}}}}return s},
$il2:1,
ge8(){return this.a},
gfZ(){return this.e}}
A.rK.prototype={
gh8(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cJ(s,"?",m)
q=s.length
if(r>=0){p=A.iW(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lq("data","",n,n,A.iW(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lR.prototype={
gfM(){return this.c>0},
gfO(){return this.f<this.r},
gfN(){return this.r<this.a.length},
ge8(){var s=this.w
return s==null?this.w=this.iD():s},
iD(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.G(r.a,0,q)},
gh9(){var s=this.c,r=this.b+3
return s>r?B.b.G(this.a,r,s-1):""},
gdG(){var s=this.c
return s>0?B.b.G(this.a,s,this.d):""},
gdP(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Ai(B.b.G(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gfZ(){return B.b.G(this.a,this.e,this.f)},
gdQ(){var s=this.f,r=this.r
return s<r?B.b.G(this.a,s+1,r):""},
gfL(){var s=this.r,r=this.a
return s<r.length?B.b.b1(r,s+1):""},
gb0(){if(this.f>=this.r)return B.d8
return new A.ea(A.yF(this.gdQ()),t.hL)},
gN(a){var s=this.x
return s==null?this.x=B.b.gN(this.a):s},
a4(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$il2:1}
A.lq.prototype={}
A.pX.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vX.prototype={
$1(a){return this.a.ds(this.b.i("0/?").a(a))},
$S:26}
A.vY.prototype={
$1(a){if(a==null)return this.a.fz(new A.pX(a===undefined))
return this.a.fz(a)},
$S:26}
A.vi.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zI(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.j(A.aZ(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fc(!0,"isUtc",t.y)
return new A.ey(r,0,!0)}if(a instanceof RegExp)throw A.b(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.bX(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.cd(n),p=s.gu(n);p.m();)m.push(A.hi(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.e(a.length)
for(s=J.aC(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:60}
A.lA.prototype={
aN(a){if(a<=0||a>4294967296)throw A.b(A.yn(u.w+a))
return Math.random()*a>>>0},
aI(){return Math.random()},
$iwp:1}
A.eg.prototype={
bN(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.a2(a-s,k)
r=a>>>0
a=B.d.a2(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.a2(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.a2(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.a2(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.a2(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.a2(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.b9()
l.b9()
l.b9()
l.b9()},
b9(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.a2(o-n+(q-p)+(m-r),4294967296)>>>0},
aN(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.yn(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b9()
return(p.a&s)>>>0}do{p.b9()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aI(){var s,r=this
r.b9()
s=r.a
r.b9()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwp:1}
A.qo.prototype={
C(){var s,r=this
if(B.a.M(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.qp()))throw A.b(B.hf)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.fz)}}
A.qp.prototype={
$1(a){return A.e(a)<=0},
$S:30}
A.eL.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e7.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bm(B.ln)
if(q.a!==0)throw A.b(A.ah(q,s,"contains unknown pipeline features"))
if(this.a===B.bx&&r.gW(r))throw A.b(A.ah(r,s,"safe profiles cannot install optional features"))}}
A.fw.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kA.prototype={}
A.nr.prototype={
bV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.k("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.j(A.k("configuration state is not initialized"))
if(p.c!=null)A.j(A.k("a configuration transition is already open"))
a2.C()
n=A.i2(a2)
m=p.d
l=p.b
if(l==null)A.j(A.k("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bm(h)
f=h.bm(j)
j=n.a
h=l.a
e=j.bm(h)
d=h.bm(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.nu(m,a2,n,new A.ns(A.eR(g,k),A.eR(f,k),A.eR(e,k),A.eR(d,k),c,b,o.z!==a2.z),B.cf)
p.c=a
s=a
try{r=a1.b.cM(s.c)
q=new A.kA(s,r,B.aX)
a1.c=q
return q}catch(a0){p.fq(s)
throw a0}},
bW(a){var s,r,q,p=this
p.eD(a)
s=p.a
r=a.a
s.eE(r)
q=s.d
if(r.a!==q)A.j(A.k("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eJ
s.c=null
p.b.bW(a.b)
a.c=B.eR
p.c=null},
eD(a){if(this.c!==a||a.c!==B.aX)throw A.b(A.k("coordinated transition is not open"))}}
A.fs.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.ns.prototype={}
A.nu.prototype={}
A.nt.prototype={
fq(a){this.eE(a)
a.e=B.eK
this.c=null},
eE(a){if(this.c!==a||a.e!==B.cf)throw A.b(A.k("configuration transition is not open"))}}
A.kz.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.N(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",m.x,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.H(q,A.o(q).i("H<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.b(A.w("PostProcessState."+o+" must be >= 0: "+A.x(n),l))}q=m.as
if(q<1||q>8)throw A.b(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.b(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.x(s),l))
if(r>1)throw A.b(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.x(r),l))}}
A.fp.prototype={}
A.jV.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gal(0)||!k.b.gal(0)||!k.r.gal(0))throw A.b(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.x(s)+"/"+A.x(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.x(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gal(0)||r.gc9()<1e-12)A.j(A.w("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.j(A.w("DirectionalLight.intensity must be >= 0: "+A.x(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.w("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.j(A.w("PointLight.intensity must be >= 0: "+A.x(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.j(A.w("PointLight.radius must be > 0: "+A.x(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.w("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.j(A.w("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.j(A.w("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.o7.prototype={}
A.dv.prototype={
a4(a,b){if(b==null)return!1
return J.fg(b)===A.xk(this)&&b instanceof A.dv&&this.a===b.a&&this.b===b.b},
gN(a){return A.cE(A.xk(this),this.a,this.b,B.f,B.f,B.f)}}
A.bv.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.b9.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cD.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ku.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cy.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eE.prototype={
v(){return"HandleRejection."+this.b}}
A.k2.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.c1.prototype={
gal(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a4(a,b){if(b==null)return!1
return b instanceof A.c1&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cE(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.x(this.a)+", "+A.x(this.b)+", "+A.x(this.c)+")"}}
A.nP.prototype={}
A.ky.prototype={}
A.bC.prototype={}
A.vZ.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.F(b.a,a.a)
return s===0?B.d.F(a.b.a,b.b.a):s},
$S:67}
A.jo.prototype={
v(){return"AlphaMode."+this.b}}
A.e3.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.b(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.b(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.wl("roughness",l.z)
A.wl("metallic",0)
A.wl("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aQ("uvScaleU",s),new A.aQ("uvScaleV",r),new A.aQ("uvOffsetU",0),new A.aQ("uvOffsetV",0),new A.aQ("tintR",l.c),new A.aQ("tintG",l.d),new A.aQ("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.w("MaterialDefinition."+n+" must be finite: "+A.x(m),k))}if(s===0||r===0)throw A.b(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d4.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bD.prototype={}
A.rO.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.W[s]
q=r.c
if(q<=0)throw A.b(A.w(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.w(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rP())
for(p=B.a.gu(B.W),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rP.prototype={
$1(a){return t.qY.a(a).a===B.dW},
$S:19}
A.cl.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.S(s,14)!==0)throw A.b(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jR()
r=n.c
if(r!=null){q=s/14|0
for(s=A.Cg(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gal(0)&&s.b.gal(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.w("MeshData.localBounds must be a valid AABB",null))},
jR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.F(B.W,a2.a(new A.pM()),a3)
if(!a4.gu(0).m())return
s=new A.F(B.W,a2.a(new A.pN()),a3)
if(s.gt(0)!==1)throw A.b(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaQ(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaQ(0).b,n=r.b,m=0;m<q;++m){l=m*14
k=l+o
if(!(k<a3))return A.d(a2,k)
j=a2[k]
i=k+1
if(!(i<a3))return A.d(a2,i)
h=a2[i]
k+=2
if(!(k<a3))return A.d(a2,k)
g=a2[k]
k=l+n
if(!(k<a3))return A.d(a2,k)
f=a2[k]
i=k+1
if(!(i<a3))return A.d(a2,i)
e=a2[i]
i=k+2
if(!(i<a3))return A.d(a2,i)
d=a2[i]
k+=3
if(!(k<a3))return A.d(a2,k)
c=a2[k]
b=j*j+h*h+g*g
a=f*f+e*e+d*d
if(!B.a.a7(A.c([j,h,g,f,e,d,c],p),new A.pO()))throw A.b(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.x(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.x(c),a1))}}}
A.pM.prototype={
$1(a){return t.qY.a(a).a===B.dW},
$S:19}
A.pN.prototype={
$1(a){return t.qY.a(a).a===B.dV},
$S:19}
A.pO.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.pZ.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.w("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.q_()))throw A.b(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.w("resource history does not match vhsOutput ownership",null))}}
A.q_.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.fP.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.kB.prototype={}
A.kK.prototype={
fQ(a){var s=this
if(s.d)A.j(A.k("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.k("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cM(a){var s=this
if(s.d)A.j(A.k("resource assembler is disposed"))
if(s.a==null)throw A.b(A.k("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.k("resource assembly is already open"))
a.C()
return s.b=new A.kB(s.c,a,B.bE)},
bW(a){var s,r=this
if(r.d)A.j(A.k("resource assembler is disposed"))
r.f5(a)
s=r.c
if(a.a!==s)throw A.b(A.k("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.kX
r.b=null},
dX(a){if(this.d)A.j(A.k("resource assembler is disposed"))
this.f5(a)
a.c=B.kY
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.k("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f5(a){if(this.b!==a||a.c!==B.bE)throw A.b(A.k("resource assembly is not prepared"))}}
A.fx.prototype={
v(){return"DrawMode."+this.b}}
A.jv.prototype={
v(){return"BlendMode."+this.b}}
A.bz.prototype={}
A.kW.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jB.prototype={
v(){return"ColorEncoding."+this.b}}
A.hx.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.i9.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.w("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.w("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.w("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.w("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eO.prototype={
v(){return"RendererState."+this.b}}
A.aG.prototype={}
A.o9.prototype={
fY(a){var s=this.z.h(0,a)
return s==null?B.cr:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eH.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cX.prototype={}
A.c2.prototype={}
A.pJ.prototype={
cs(a){var s=this.a,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.pK(a)),r.i("F<1>")).gt(0)}}
A.pK.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:79}
A.pH.prototype={
cN(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.t)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.j(A.w("material residency key is empty",null))
k=m.b
k.C()
if(r.R(l))throw A.b(A.w("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.m(s,s)
for(k=A.A4(k),i=k.$ti,k=new A.ca(k.a(),i.i("ca<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bT(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.cN(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("aj<2>")
a=A.I(new A.aj(r,o),o.i("n.E"))
B.a.P(a,new A.pI())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.t)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.jy(m,k,s))}return new A.pJ(A.ai(o,t.wl))},
jy(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.H(b,A.o(b).i("H<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.Ce(new A.aj(q,q.$ti.i("aj<2>")))
A.aY(q,s,r)
return new A.c2(a,p)}}
A.pI.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:81}
A.kj.prototype={
mq(a){return this.a.by(a)}}
A.pL.prototype={
$3(a,b,c){return new A.cD(A.e(a),A.e(b),A.aB(c))},
$S:88}
A.l1.prototype={}
A.pP.prototype={
bb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yL(f,new A.jY(e.byteLength,B.cG,B.hw))
if(f.b!==B.h)A.j(A.k(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d7(f)
A.bE(f,p)
if(f.b!==B.h)A.j(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.W[m]
k=A.A1(l.a)
if(!o.l(0,k))continue
j=A.Eh(n,k,l)
if(f.b!==B.h)A.j(A.k(g))
r.vertexAttribPointer.apply(r,[k,j,A.e(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.j(A.k(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yL(f,new A.jY(A.yi(i),B.cG,B.cF))
if(f.b!==B.h)A.j(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.Db(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.l1(d,h,p,f,e.length/14|0,!1)},
dV(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.dZ(B.aB,a))
this.b.by(a)
return s},
b5(a){var s,r,q=this.c.a5(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b5(a)},
dT(){var s,r,q,p
for(s=this.b.bE(),r=s.$ti,s=new A.ca(s.a(),r.i("ca<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bb(p.b))}},
gca(){return this.b.bE().bd(0,0,new A.pR(),t.S)}}
A.pQ.prototype={
$3(a,b,c){return new A.bv(A.e(a),A.e(b),A.aB(c))},
$S:95}
A.pR.prototype={
$2(a,b){var s,r
A.e(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.yi(s)
return a+r+s},
$S:181}
A.bT.prototype={}
A.dA.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c5.prototype={}
A.rD.prototype={
cC(a){var s=this.a,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.rE(a)),r.i("F<1>")).gt(0)}}
A.rE.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:104}
A.rB.prototype={
cN(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.j(A.w("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.j(A.ah(n,"handle","must be valid"))
if(s.R(o))throw A.b(A.w("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("aj<2>")
m=A.I(new A.aj(s,r),r.i("n.E"))
B.a.P(m,new A.rC())
r=t.Aj
l=A.a_(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.t)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.jo(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c5(p,i))}r=l.a
return new A.rD(A.ai(j,t.d),r)},
jo(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.fg(a,r)===s.d)return B.dP
this.b.k(0,a,!0)
return B.dO}catch(q){if(A.al(q) instanceof A.k2){s=this.b.h(0,a)===!0?B.dR:B.dQ
return s}else throw q}}}
A.rC.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.F(b.c,a.c)
return s===0?B.b.F(a.a,b.a):s},
$S:106}
A.d9.prototype={}
A.kY.prototype={
aT(a){var s=this.a,r=A.wv(s,B.hB)
A.ww(s,r,0,a)
return r},
mJ(a,b){var s,r,q,p=this,o=p.b,n=o.by(a),m=A.I(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.e_(a,new A.d9(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wv(p.a,s)
o.k(0,r,q)}A.ww(p.a,q,0,b)},
lk(a){var s,r=this.b,q=r.by(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.k("TextureStore.finalizeMips: no pixels uploaded yet for "+a.p(0)))
A.yM(this.a,s)
r.e_(a,new A.d9(p,q.b,!0))},
fg(a,b){var s
this.b.by(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mm(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.fg(a,s)},
mu(a){var s=this.e
s===$&&A.p()
return s},
mw(a){var s=this.f
s===$&&A.p()
return s},
mo(a){var s=this.r
s===$&&A.p()
return s},
ms(a){var s=this.w
s===$&&A.p()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),q=n.a,p=q.a,o=t.h;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.L(0)
s=n.d
s===$&&A.p()
A.lf(q,s)
s=n.e
s===$&&A.p()
A.lf(q,s)
s=n.f
s===$&&A.p()
A.lf(q,s)
s=n.r
s===$&&A.p()
A.lf(q,s)
s=n.w
s===$&&A.p()
A.lf(q,s)},
dT(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aT($.xv())
i.e=i.aT($.xs())
i.f=i.aT($.xt())
i.r=i.aT($.xr())
i.w=i.aT($.xu())
for(s=i.b.bE(),r=s.$ti,s=new A.ca(s.a(),r.i("ca<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.rH()))continue
l=A.wv(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.ww(p,l,k,j)}if(m.c)A.yM(p,l)
q.k(0,n.a,l)}},
gca(){return this.b.bE().bd(0,0,new A.rG(),t.S)}}
A.rF.prototype={
$3(a,b,c){return new A.b9(A.e(a),A.e(b),A.aB(c))},
$S:116}
A.rH.prototype={
$1(a){return t.Fx.a(a)==null},
$S:119}
A.rG.prototype={
$2(a,b){var s
A.e(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:123}
A.eG.prototype={
glr(){return this.b.length}}
A.jT.prototype={
kh(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qs(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)r[p].aj(s,b)
o=s.kg(a,!1)
if(o.b.length!==0)return new A.jU(o,B.j2)
q=o.a
n=A.C(q)
m=new A.M(q,n.i("h(1)").a(new A.o2()),n.i("M<1,h>")).bn(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){k=r[p]
for(n=k.ai(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gE().a))throw A.b(A.k('RenderFeature "'+k.ga8()+'" created a pass "'+i.gE().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.P(l,new A.o3(o))
return new A.jU(o,l)},
bA(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)s[q].a_()}}
A.o2.prototype={
$1(a){return t.A.a(a).a},
$S:128}
A.o3.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.F(B.a.dH(s,new A.o0(a)),B.a.dH(s,new A.o1(b)))},
$S:136}
A.o0.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:9}
A.o1.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:9}
A.jU.prototype={}
A.eA.prototype={
v(){return"FrameQueueState."+this.b}}
A.o8.prototype={}
A.o6.prototype={
kd(a){if(a.length===0)throw A.b(A.ah(a,"passId",null))
this.b=a
this.a.ce(a,A.Ab())},
hL(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aG(p.a,p.b,p.d))}return A.aY(o,t.N,t.pH)},
bs(a,b){var s,r=this.b
if(r==null)throw A.b(A.k("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a2(a,3)*b}}
A.fY.prototype={}
A.aw.prototype={
gbH(){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.q2()),r.i("F<1>"))},
gcj(){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.q3()),r.i("F<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.q2.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:23}
A.q3.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:23}
A.ci.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bg.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ib.prototype={
v(){return"ResourceFormat."+this.b}}
A.cT.prototype={
v(){return"GraphStage."+this.b}}
A.aI.prototype={
fU(){var s=this
return new A.aI(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.aI&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gN(a){var s=this
return A.cE(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fO.prototype={
v(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.ht.prototype={}
A.kD.prototype={
av(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.De(m.a,a.c,r.a(a.d.ga1().bJ(0)),r.a(a.f),a.b)}catch(q){if(A.al(q) instanceof A.ie){++m.e
throw q}else throw q}p=new A.ht(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bA(){var s=this.b
this.iK(new A.aj(s,A.o(s).i("aj<2>")))
s.L(0)},
iK(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bl.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a_(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.b(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.b(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a_(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.b(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.b(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.qq.prototype={}
A.b7.prototype={
ag(){var s=this
return A.xS(B.ef,s.f,B.aq,B.aa,!0,!0,!0,!0,s.r,B.au,B.av,s.d,s.e,!0,!1,!1)}}
A.qs.prototype={
kg(a,b){var s=this.jP(t.Q.a(a),!1),r=this.a,q=A.C(r)
return new A.qr(A.ai(new A.F(r,q.i("l(1)").a(new A.qx()),q.i("F<1>")),t.A),s)},
jP(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.C(r)
p=q.i("F<1>")
o=A.I(new A.F(r,q.i("l(1)").a(new A.qw()),p),p.i("n.E"))
m.ir(o,a,s)
m.iv(o,s)
m.ix(o,s)
m.iu(o,!1,s)
n=m.iz(o,s)
m.iw(o,n,s)
m.iy(o,s)
m.it(o,n,s)
m.is(o,s)
return s},
ir(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=B.a3.bm(b)
if(p.a!==0)B.a.l(c,new A.bg(B.hM,q.a,"missing capabilities: "+p.X(0,", ")))}},
iv(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbH(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bg(B.hH,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
ix(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.C(a),r=s.i("l(1)").a(new A.qv()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbH()
o=A.I(p,p.$ti.i("n.E"))
p=r.gcj()
n=A.I(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bg(B.b3,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaQ(o).a
l=B.a.gaQ(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bg(B.b3,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bg(B.b3,r.a,"resolve source and destination must match format and extent"))}},
iu(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.t)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bg(B.hK,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iz(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
for(o=p.gcj(),n=J.R(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bg(B.hG,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
iw(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbH(),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bg(B.cL,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bD(a,m)>s)B.a.l(c,new A.bg(B.cL,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
iy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbH(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gcj(),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bg(B.hJ,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
it(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbH(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcj().ae(0,new A.qu(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bg(B.hI,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
is(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcj(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.y2(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbH(),p=J.R(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.e2(s,!1,!1,p)
s=a.length
i=A.e2(s,!1,!1,p)
h=new A.qt(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bg(B.hL,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qx.prototype={
$1(a){t.A.a(a)
return A.wn()},
$S:9}
A.qw.prototype={
$1(a){t.A.a(a)
return A.wn()},
$S:9}
A.qv.prototype={
$1(a){return t.A.a(a).f},
$S:9}
A.qu.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:23}
A.qt.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.d(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.d(s,a)
if(s[a])return!1
B.a.k(n,a,!0)
r=o.c
if(!(a<r.length))return A.d(r,a)
r=r[a]
r=A.fX(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:30}
A.qr.prototype={}
A.lz.prototype={$ic4:1,
ga8(){return this.a},
gE(){return this.b},
ge3(){return this.c}}
A.i8.prototype={
jU(a){var s,r,q=a.c,p=q.a
if(!p.gal(0))A.j(A.w("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.j(A.w("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.j(A.w(u.u,null))
s=this.a.by(a.a)
q=q.a9()
p=s.d.gaq()
r=A.C(p)
return A.b2(new A.M(p,r.i("K(1)").a(q.gaw()),r.i("M<1,K>")))},
gfS(){return new A.bV(this.lA(),t.Br)},
lA(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gfS(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bE(),n=o.$ti,o=new A.ca(o.a(),n.i("ca<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.Z(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.a9()
f=f.gaq()
d=A.C(f)
r=5
return a.b=new A.lz(h,g,A.b2(new A.M(f,d.i("K(1)").a(i.gaw()),d.i("M<1,K>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCF:1}
A.qy.prototype={
$3(a,b,c){return new A.cy(A.e(a),A.e(b),A.aB(c))},
$S:154}
A.qC.prototype={
gff(){var s=this.d
return s===$?this.d=new A.rB(this.c,A.m(t.Aj,t.y)):s},
me(a,b){var s,r
if(this.x)A.j(A.k("resource library is disposed"))
s=this.a
a.C()
r=s.b.az(a,b)
s.c.k(0,r.a,s.bb(a))
this.f.l(0,r)
return r},
mf(a){if(this.x)A.j(A.k("resource library is disposed"))
this.a.b5(a)
this.f.a5(0,a)},
dS(a,b,c,d,e,f){var s,r
if(this.x)A.j(A.k("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.j(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.j(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.az(new A.d9(new A.k_(f,d,1,!0,e,B.b1,B.cI,a),A.e2(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.I(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.h
l=0
for(;l<r.length;r.length===q||(0,A.t)(r),++l){k=r[l]
j=o.a5(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b5(k)}r=i.r
q=A.I(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.t)(q),++l)n.b5(q[l])
q=i.f
o=A.I(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.t)(o),++l)m.b5(o[l])
s.L(0)
r.L(0)
q.L(0)
p.a_()
i.x=!0}}
A.tg.prototype={}
A.lY.prototype={$ic4:1,
ga8(){return this.a},
gE(){return this.b},
ge3(){return this.c}}
A.uJ.prototype={
$1(a){var s=this.a.w.a.dV(a),r=s.b!=null,q=r?s.d:s.e
return new A.ia(s.c,r,q,s.f)},
$S:157}
A.uK.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().fV(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().fV(b)
throw A.b(A.k("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:161}
A.uI.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uB.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:174}
A.uC.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bi
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.Gv(s,3,q.a.d,r)},
$S:175}
A.uH.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.uw.prototype={
$0(){return this.a.at.a},
$S:47}
A.uy.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.ux.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uG.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.uu.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uv.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uD.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.uE.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uF.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:4}
A.uA.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uz.prototype={
$0(){return this.a.at.w},
$S:48}
A.uM.prototype={
$0(){return this.a},
$S:49}
A.tO.prototype={}
A.lK.prototype={$iCE:1}
A.lw.prototype={$iBQ:1}
A.qH.prototype={
gb6(){var s=this.w
return s==null?A.j(A.k("renderer is not initialized")):s},
fR(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bC)throw A.b(A.k("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.U)throw A.b(A.k("renderer device is context lost"))
m.e=B.kW
try{m.r=s.h3()
r=m.b
q=A.i2(a)
p=r.a
if(p.a!=null)A.j(A.k("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.i2(a)
p.d=1
r.b.fQ(q)
r=A.Cf()
m.w=new A.qC(A.Ch(s),r,A.CT(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.kK()
p=new A.ot(s,r)
q=A.i2(a)
o=p.d8(q,a)
r.fQ(q)
p.c=new A.fL(new A.kB(0,q,B.bE),o,B.af)
m.x=p
m.y=new A.kD(s,A.m(t.N,t.CH))
m.as=a
A.zt(m)
m.e=B.bD}catch(n){s=m.y
if(s!=null)s.bA()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bC
throw n}return A.xV(t.H)},
kb(a,b){var s,r,q,p,o,n,m=this,l=null
m.js()
m.bQ()
r=B.a.q(m.d,a)
if(!r)throw A.b(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.k("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gal(0))A.j(A.w("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gal(0)||q.gc9()<1e-12)A.j(A.w("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.j(A.w("CameraView requires 0 < near < far, got "+A.x(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.j(A.w("CameraView.aspect must be finite and > 0: "+A.x(q),l))
if(!r.a.gal(0)||!r.b.gal(0)||!r.c.gal(0))A.j(A.w("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.j(A.w("FrameInput.timeSeconds must be finite: "+A.x(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.az)A.j(A.k("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.az
o.c=0
B.a.L(o.a)
s=o
try{r=m.r
if((r==null?A.j(A.k("renderer is not initialized")):r).z)m.b$=m.a.kc()
return s}catch(n){if(o.b!==B.az)A.j(A.k("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hk
m.em()
m.ax=m.at=null
throw n}},
le(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bQ()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.k("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.az)A.j(A.k("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.kV(l,0,A.fc(m.c,"count",t.S),A.C(l).c).bK(0,!1)
m.b=B.hj
q=k
try{p=A.Et(a1,r,s,q)
o=p.a.hL()
m=o.gJ().cT(0,new A.qI())
l=m.$ti
n=new A.cC(m,l.i("aG(1)").a(new A.qJ()),l.i("cC<1,aG>")).bd(0,B.cr,new A.qK(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gca()
g=g.c.gca()
e=a1.w
e.a.gca()
e.c.gca()
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
return new A.o9(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.iT(s.e)
a1.ax=a1.at=null}},
js(){var s,r,q,p=this
if(p.e!==B.dB)return
if(p.a.b===B.U)throw A.b(A.k("renderer context remains lost"))
s=p.w
if(s.x)A.j(A.k("resource library is disposed"))
s.a.dT()
s.c.dT()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.j(A.k("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.j(A.k("GPU resource adapter is not initialized"))
s.c=new A.fL(q.a,s.d8(A.i2(r),r),B.af)
s=p.y
s.c=null
s.b.L(0)
A.zt(p)
p.e=B.bD},
bQ(){var s=this,r=s.e
if(r!==B.bD)throw A.b(A.k("renderer is not ready: "+r.b))
if(s.a.b===B.U){s.iL()
s.e=B.dB
throw A.b(A.k("renderer context lost"))}}}
A.qI.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:50}
A.qJ.prototype={
$1(a){return t.h6.a(a).b},
$S:51}
A.qK.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aG(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:52}
A.lH.prototype={}
A.ts.prototype={
iT(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.j(A.k(u.k))
r=s.fi(o)
if(r.b)A.j(A.k("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lH(o))}catch(q){p.da(o)}},
em(){var s=this.b$
this.b$=null
if(s!=null)this.da(s)},
iL(){var s,r,q
this.em()
s=this.a$
r=J.y5(s.slice(0),A.C(s).c)
B.a.L(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.t)(r),++q)this.da(r[q].b)},
da(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fi(a).a)}catch(r){}}}
A.lO.prototype={}
A.ig.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bQ.prototype={
F(a,b){var s,r=this
t.BB.a(b)
s=B.d.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.F(r.c.a,b.c.a)
if(s!==0)return s
return B.d.F(r.d,b.d)},
$ib5:1}
A.bO.prototype={
F(a,b){var s
t.z3.a(b)
s=B.c.F(b.a,this.a)
if(s!==0)return s
return B.d.F(this.b,b.b)},
$ib5:1}
A.aO.prototype={}
A.w2.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.F(0,s.a(b).a)},
$S:53}
A.w3.prototype={
$1(a){return t.E0.a(a).b},
$S:54}
A.w0.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.F(0,s.a(b).a)},
$S:55}
A.w1.prototype={
$1(a){return t.EH.a(a).b},
$S:56}
A.nK.prototype={}
A.nJ.prototype={}
A.jk.prototype={
gaq(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.K(o,n,p),new A.K(r,n,p),new A.K(o,q,p),new A.K(r,q,p),new A.K(o,n,s),new A.K(r,n,s),new A.K(o,q,s),new A.K(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eJ.prototype={}
A.fA.prototype={
v(){return"FrustumTest."+this.b}}
A.oa.prototype={
mD(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hl:B.hm}}
A.ob.prototype={
$4(a,b,c,d){var s=new A.K(a,b,c),r=new A.eJ(s,d),q=Math.sqrt(s.gc9())
if(q<1e-9)s=r
else{s=1/q
s=new A.eJ(new A.K(a*s,b*s,c*s),d/q)}return s},
$S:57}
A.dr.prototype={
an(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dr(h)},
h6(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.cV.a(a)
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
return h===0||h===1?new A.K(k,j,i):new A.K(k/h,j/h,i/h)},
dL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.j(A.k("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.x(k)+")"))
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
return new A.dr(h)},
gal(a){return B.t.a7(this.a,new A.pF())},
p(a){return"Mat4("+A.x(this.a)+")"}}
A.pF.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.kF.prototype={
p(a){var s=this
return"Quat("+A.x(s.a)+", "+A.x(s.b)+", "+A.x(s.c)+", "+A.x(s.d)+")"}}
A.kZ.prototype={
C(){var s=this.a
if(!s.gal(0))throw A.b(A.w("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.w("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.b(A.w(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.yf(A.c([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.yf(A.c([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.K.prototype={
c0(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bx(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.K(s*r-q*p,q*o-n*r,n*p-s*o)},
gc9(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc9())},
gal(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gau(){var s=this,r=Math.sqrt(s.gc9())
return r<1e-9?B.al:new A.K(s.a/r,s.b/r,s.c/r)},
a4(a,b){if(b==null)return!1
return b instanceof A.K&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.cE(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.x(this.a)+", "+A.x(this.b)+", "+A.x(this.c)+")"}}
A.iv.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hr.prototype={
ga8(){return this.f},
aj(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.c([new A.O(this.x,B.i),new A.O(this.y,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bl(s.e,s.b,s.c,B.y,B.d5,B.d2)),q=A.d7(s.d),p=t.n,o=s.r===B.e0?new Float32Array(A.a0(A.c([1/s.Q,0],p))):new Float32Array(A.a0(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.ln(new A.b7(s.f,A.c([new A.O(s.x,B.i),new A.O(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iak:1}
A.ln.prototype={
ak(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c9(r,a.am(o.r).b)
A.bo(r,o.a.ag())
A.dE(r,B.ad,1,0,0,0)
A.co(r,o.b.b)
q=t._
p=o.d
if(o.e)A.D9(r,0,q.a(p.$0()))
else A.aE(r,0,q.a(p.$0()))
A.v(r,"uSource",B.A)
A.v(r,"uTexelStep",new A.y(B.aK,o.f))
A.bE(r,o.c)
s.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.jw.prototype={
ga8(){return"bloomComposite"},
aj(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.L,A.c([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r="bloomComposite",q=s.a.av(new A.bl(r,s.b,s.c,B.y,B.jw,B.je)),p=A.d7(s.d),o=s.w,n=A.c([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.k)],t.C)
return A.c([new A.lo(new A.b7(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iak:1}
A.lo.prototype={
ak(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c9(r,a.cS(q.f).b)
A.Da(r,1)
A.bo(r,B.f0)
A.co(r,q.b.b)
A.aE(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.A)
A.v(r,"uBloomStrength",new A.y(B.e,p))
A.bE(r,q.c)
s.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.jJ.prototype={
ga8(){return"depthPrepass"},
aj(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.hD,A.c([new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r="depthPrepass",q=s.a.av(new A.bl(r,s.b,s.c,B.d4,B.d3,B.iH))
return A.c([new A.lr(new A.b7(r,A.c([new A.O(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iak:1}
A.lr.prototype={
ak(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c9(a1,a2.am("sceneDepth").b)
A.bo(a1,d.a.ag())
A.dE(a1,B.aV,1,0,0,0)
A.co(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.y(B.e,a0.Q))
A.v(a1,"uAlbedo",B.A)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.a
i=j.gE()
A.v(a1,"uViewProjection",new A.y(B.v,new Float32Array(A.a0(a))))
A.v(a1,"uModel",new A.y(B.v,new Float32Array(A.a0(i.c.a9().a))))
A.w_(b,k,!1)
d.jD(b,j.gE().b,p)
h=q.$1(j.gE().a)
i=h.a
if(a1.b!==B.h)A.j(A.k(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.j(A.k(c))
e=A.e(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.e(o.WebGL2RenderingContext.UNSIGNED_INT):A.e(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bs(g,f)}else{if(a1.b!==B.h)A.j(A.k(c))
m.drawArraysInstanced(A.e(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bs(g,f)}}},
jD(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,0))
A.v(q,"uAffineWarpStrength",new A.y(B.e,0))
s=this.a.ag()
A.bo(q,r.dx?s.e2(!1):s)},
$ia9:1,
gE(){return this.a}}
A.ix.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hy.prototype={
ga8(){return this.f},
aj(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.c([new A.O(this.w,B.i),new A.O(this.x,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bl(s.e,s.b,s.c,B.y,B.d5,B.d2)),q=A.d7(s.d),p=t.n,o=s.r===B.e1?new Float32Array(A.a0(A.c([1/s.z,0],p))):new Float32Array(A.a0(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.ls(new A.b7(s.f,A.c([new A.O(s.w,B.i),new A.O(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iak:1}
A.ls.prototype={
ak(a){return},
$ia9:1,
gE(){return this.a}}
A.jM.prototype={
ga8(){return"dofComposite"},
aj(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.L,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.k)],t.C),!1))},
ai(a){var s=this,r="dofComposite",q=s.a.av(new A.bl(r,s.b,s.c,B.y,B.ju,B.iw)),p=A.d7(s.d)
return A.c([new A.lt(new A.b7(r,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iak:1}
A.lt.prototype={
ak(a){var s,r=this,q=a.am("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c9(n,q.b)
A.bo(n,r.a.ag())
A.co(n,r.b.b)
s=t._
A.aE(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.A)
A.aE(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ak)
A.aE(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.dU)
A.v(n,"uNear",new A.y(B.e,o.f))
A.v(n,"uFar",new A.y(B.e,o.r))
A.v(n,"uFocusDistance",new A.y(B.e,r.w))
A.v(n,"uFocusRange",new A.y(B.e,r.x))
A.v(n,"uStrength",new A.y(B.e,0))
A.bE(n,r.c)
p.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.k1.prototype={
ga8(){return"grade"},
aj(a,b){B.a.l(a.a,new A.aw("grade",B.L,A.c([new A.O(this.r,B.i),new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bl("grade",s.b,s.c,B.y,B.js,B.jf)),q=A.d7(s.d),p=s.r,o=s.w
return A.c([new A.ly(new A.b7("grade",A.c([new A.O(p,B.i),new A.O(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iak:1}
A.ly.prototype={
ak(a){var s=this,r=a.am(s.f.a),q=a.b,p=q.a
A.c9(p,a.am(s.r.a).b)
A.bo(p,s.a.ag())
A.co(p,s.b.b)
A.aE(p,0,r.b)
A.v(p,"uScene",B.A)
A.aE(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ak)
A.v(p,"uLutSize",new A.y(B.e,s.e))
A.v(p,"uStrength",new A.y(B.e,a.c.e.y))
A.bE(p,s.c)
q.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.hW.prototype={
ga8(){return"msaaResolve"},
aj(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.hE,A.c([new A.O(this.b,B.i),new A.O(this.c,B.k)],t.C),!0))},
ai(a){var s=this.b,r=this.c
return A.c([new A.lF(new A.b7("msaaResolve",A.c([new A.O(s,B.i),new A.O(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iak:1}
A.lF.prototype={
ak(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cS(this.c),j=a.cS(this.d),i=this.b
if(i.b!==B.h)A.j(A.k(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.j(A.w("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.j(A.w("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.j(A.w("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.NONE)],t.n))}A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.NONE),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.e(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.aK(i,l,[0,0,s,r.x,0,0,p,q.x,A.e(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.e(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.c([A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.e(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$ia9:1,
gE(){return this.a}}
A.fn.prototype={}
A.jx.prototype={
am(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.k('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cS(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.am(s)},
$iCD:1}
A.wo.prototype={}
A.i5.prototype={
ga8(){return"present"},
aj(a,b){B.a.l(a.a,new A.aw("present",B.hF,A.c([new A.O(this.f,B.i)],t.C),!1))},
ai(a){var s,r=this,q=r.a.av(new A.bl("present",r.b,r.c,B.y,B.jD,B.iO)),p=A.d7(r.d)
r.w=p
s=r.f
return A.c([new A.lL(new A.b7("present",A.c([new A.O(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iak:1}
A.lL.prototype={
ak(a){var s,r=this,q=a.cS(r.d),p=a.b,o=p.a
A.c9(o,null)
A.bo(o,r.a.ag())
A.co(o,r.b.b)
A.bE(o,r.c)
A.aE(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.y(B.e,s.a))
A.v(o,"uVignette",new A.y(B.e,s.e))
A.v(o,"uGrain",new A.y(B.e,s.f))
A.v(o,"uRainIntensity",new A.y(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.y(B.e,s.w))
A.v(o,"uOutputEncoding",new A.y(B.e,r.e===B.aW?1:0))
A.v(o,"uToneMap",B.dT)
p.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.kE.prototype={
ga8(){return"ps1Quantize"},
aj(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.L,A.c([new A.O(this.e,B.i),new A.O(this.f,B.k)],t.C),!1))},
ai(a){var s=this,r="ps1Quantize",q=s.a.av(new A.bl(r,s.b,s.c,B.y,B.jy,B.ip)),p=A.d7(s.d),o=s.e,n=s.f
return A.c([new A.lM(new A.b7(r,A.c([new A.O(o,B.i),new A.O(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iak:1}
A.lM.prototype={
ak(a){var s=this,r=a.am(s.d.a),q=a.b,p=a.c.e,o=q.a
A.c9(o,a.am(s.e.a).b)
A.bo(o,s.a.ag())
A.co(o,s.b.b)
A.aE(o,0,r.b)
A.v(o,"uScene",B.A)
A.v(o,"uQuantizationBits",new A.y(B.e,p.as))
A.v(o,"uDitherStrength",new A.y(B.e,p.x))
A.bE(o,s.c)
q.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.eT.prototype={}
A.kO.prototype={
ga8(){return"shadow"},
aj(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.hC,A.c([new A.O(this.z,B.k)],t.C),!1))},
ai(a){var s=this,r="shadowCaster",q=s.a.av(new A.bl(r,s.b,s.c,B.d4,B.d3,B.jd))
return A.c([new A.lP(new A.b7(r,A.c([new A.O(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iak:1}
A.lP.prototype={
ak(a){var s,r,q,p,o=this,n=a.am("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c9(s,n.b)
A.bo(s,o.a.ag())
A.dE(s,B.aV,1,0,0,0)
return}r=A.yw(l)
o.x.$1(r)
s=m.a
A.c9(s,n.b)
A.bo(s,o.a.ag())
A.dE(s,B.aV,1,0,0,0)
A.co(s,o.b.b)
A.v(s,"uAlbedo",B.A)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.t)(s),++p)o.iM(m,s[p],l,r)},
fa(a,b){var s,r=this.d.$1(b),q=a.a
A.aE(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.y(B.e,0))
s=this.a.ag()
A.bo(q,r.dx?s.e2(!1):s)},
iM(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gE().r)return
s=a.a
A.v(s,"uUseInstances",B.bR)
n.f7(a,b.gE().c,d)
n.fa(a,b.gE().b)
r=b.gE()
q=n.c.$1(r.a)
A.bE(s,q.a)
s=q.b
r=q.c
if(s)a.dB(r,q.d,0)
else a.aG(r,0)}else if(b instanceof A.eG){p=b.a
if(!p.gE().r)return
if(n.jM(b,c)===B.lI)return
n.f7(a,p.gE().c,d)
A.w_(a,b,!1)
n.fa(a,p.gE().b)
s=p.gE()
q=n.c.$1(s.a)
A.bE(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dC(r,q.d,o,0)
else a.dA(r,0,o)}else throw A.b(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fg(b).p(0),null))},
jM(a,b){return B.lH},
f7(a,b,c){var s=a.a
A.v(s,"uModel",new A.y(B.v,new Float32Array(A.a0(b.a9().a))))
A.v(s,"uLightViewProjection",new A.y(B.v,new Float32Array(A.a0(c.a.a))))},
$ia9:1,
gE(){return this.a}}
A.vf.prototype={
$1(a){return this.a.a=a},
$S:59}
A.vg.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:46}
A.kP.prototype={
ga8(){return"shadowedWorld"},
aj(a,b){var s=this,r=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.k))
B.a.l(a.a,new A.aw("shadowedWorld",B.cK,r,!1))},
ai(a){var s=this,r="shadowedWorld",q=s.a.av(new A.bl(r,s.b,s.c,B.jA,B.jt,B.il)),p=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.k))
return A.c([new A.lQ(new A.b7(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iak:1}
A.lQ.prototype={
ak(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.am("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c9(b1,a4.b)
A.bo(b1,a2.a.ag())
s=a8.a
A.dE(b1,B.ce,1,s.c,s.b,s.a)
A.co(b1,a2.b.b)
A.v(b1,"uAlbedo",B.A)
A.v(b1,"uNormalMap",B.m3)
A.v(b1,"uOrmMap",B.m4)
A.v(b1,"uEmissiveMap",B.m5)
A.v(b1,"uLightmap",B.m6)
s=t._
A.aE(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ak)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.y(B.aK,new Float32Array(A.a0(A.c([1/a2.ch,1/a2.CW],r)))))
A.aE(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.dU)
A.v(b1,"uVertexSnapGrid",new A.y(B.e,a9.Q))
A.v(b1,"uSceneColorSize",new A.y(B.aK,new Float32Array(A.a0(A.c([a2.ax,a2.ay],r)))))
A.v(b1,"uViewProjection",new A.y(B.v,new Float32Array(A.a0(a7.c.a))))
A.v(b1,"uView",new A.y(B.v,new Float32Array(A.a0(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.y(B.v,new Float32Array(A.a0(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.y(B.q,new Float32Array(A.a0(A.c([s.a,s.b,s.c],r)))))
A.v(b1,"uFogStart",new A.y(B.e,a8.c))
A.v(b1,"uFogEnd",new A.y(B.e,a8.d))
s=a8.e
A.v(b1,"uFogHeightFalloff",new A.y(B.e,s==null?0:s))
s=a8.f
A.v(b1,"uFogDensity",new A.y(B.e,s==null?0:s))
q=a2.Q.$0()
s=A.c([],t.cv)
p=a2.as.$0()
p=J.R(p==null?B.bi:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a6
k=o?a3:q.c
if(k==null)k=B.bT
A.v(b1,"uLightPosition",new A.y(B.q,new Float32Array(A.a0(A.c([l.a,l.b,l.c],r)))))
A.v(b1,"uLightDirection",new A.y(B.q,new Float32Array(A.a0(A.c([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.V
A.v(b1,"uLightColor",new A.y(B.q,new Float32Array(A.a0(A.c([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.v(b1,"uLightIntensity",new A.y(B.e,p==null?0:p))
A.v(b1,"uSpotEnabled",new A.y(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a6
g=p?a3:i.b
if(g==null)g=B.V
A.v(b1,"uDirectionalDirection",new A.y(B.q,new Float32Array(A.a0(A.c([h.a,h.b,h.c],r)))))
A.v(b1,"uDirectionalColor",new A.y(B.q,new Float32Array(A.a0(A.c([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.y(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.d(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.al
c=n?a3:e.c
if(c==null)c=B.V
m=""+f
A.v(b1,"uPointPosition"+m,new A.y(B.q,new Float32Array(A.a0(A.c([d.a,d.b,d.c],r)))))
A.v(b1,"uPointColor"+m,new A.y(B.q,new Float32Array(A.a0(A.c([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.y(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.y(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.d(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.al
a=p?a3:e.c
if(a==null)a=B.bT
c=p?a3:e.d
if(c==null)c=B.V
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.y(B.q,new Float32Array(A.a0(A.c([d.a,d.b,d.c],r)))))
A.v(b1,"uDirectSpotDirection"+n,new A.y(B.q,new Float32Array(A.a0(A.c([a.a,a.b,a.c],r)))))
A.v(b1,"uDirectSpotColor"+n,new A.y(B.q,new Float32Array(A.a0(A.c([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.v(b1,"uDirectSpotIntensity"+n,new A.y(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.v(b1,"uDirectSpotRange"+n,new A.y(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.v(b1,"uDirectSpotInnerCos"+n,new A.y(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.v(b1,"uDirectSpotOuterCos"+n,new A.y(B.e,Math.cos(m)))
p=p?0:1
A.v(b1,"uDirectSpotEnabled"+n,new A.y(B.e,p))}s=o?a3:q.f
A.v(b1,"uLightRange",new A.y(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.v(b1,"uLightInnerCos",new A.y(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.v(b1,"uLightOuterCos",new A.y(B.e,Math.cos(s)))
a0=a8.r
A.v(b1,"uAmbientColor",new A.y(B.q,new Float32Array(A.a0(A.c([a0.a,a0.b,a0.c],r)))))
A.v(b1,"uAmbientIntensity",new A.y(B.e,a8.w))
A.v(b1,"uRainWetness",new A.y(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.t)(b1),++a1)a2.eJ(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.t)(a6),++a1)a2.eJ(a5,a6[a1],r)},
eJ(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.bR)
m.f8(a,b.gE().c)
r=b.gE()
q=b.gE()
p=b.gE()
b.gE()
m.fb(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gE().a)
A.bE(s,o.a)
s=o.b
r=o.c
if(s)a.dB(r,o.d,0)
else a.aG(r,0)}else if(b instanceof A.eG){n=b.a
m.f8(a,n.gE().c)
A.w_(a,b,!0)
s=n.gE()
r=n.gE()
q=n.gE()
n.gE()
m.fb(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gE().a)
A.bE(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dC(r,o.d,q,0)
else a.dA(r,0,q)}else throw A.b(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fg(b).p(0),null))},
fb(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aE(o,0,p.a(s.e.$1(q.b)))
A.aE(o,3,p.a(s.f.$1(r)))
A.aE(o,4,p.a(s.r.$1(r)))
A.aE(o,5,p.a(s.w.$1(r)))
A.aE(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.y(B.e,0))
A.v(o,"uOpaqueCoverage",new A.y(B.e,c===B.aY?0:1))
A.v(o,"uAffineWarpStrength",new A.y(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.y(B.q,new Float32Array(A.a0(A.c([q.c,q.d,q.e],p)))))
A.v(o,"uEmissiveStrength",new A.y(B.e,0))
A.v(o,"uUvScaleOffset",new A.y(B.m2,new Float32Array(A.a0(A.c([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.y(B.e,1))
A.v(o,"uRoughness",new A.y(B.e,q.z))
A.v(o,"uMetallic",new A.y(B.e,0))
A.v(o,"uOcclusionStrength",new A.y(B.e,1))
A.v(o,"uLightmapIntensity",new A.y(B.e,0))
A.v(o,"uReceivesShadow",new A.y(B.e,1))
A:{p=r
if(B.aY===c){switch(d.a){case 0:p=B.f2
break
case 1:p=B.f1
break}break A}if(B.T===c||B.f_===c){p=s.a.ag()
break A}}A.bo(o,q.dx?p.e2(!1):p)},
f8(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.y(B.v,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.v,new Float32Array(A.a0(s.dL().a))))},
$ia9:1,
gE(){return this.a}}
A.kS.prototype={
ga8(){return"ssaoOcclusion"},
aj(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.cJ,A.c([new A.O(this.w,B.k)],t.C),!1))},
ai(a){var s=this,r="ssaoOcclusion",q=s.a.av(new A.bl(r,s.b,s.c,B.y,B.jx,B.ik)),p=A.d7(s.d)
return A.c([new A.lT(new A.b7(r,A.c([new A.O(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iak:1}
A.lT.prototype={
ak(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c9(m,a.am("ssaoRaw").b)
A.bo(m,p.a.ag())
if(n<=0){A.dE(m,B.ad,1,1,1,1)
return}A.dE(m,B.ad,1,0,0,0)
s=p.e.$0()
A.co(m,p.b.b)
A.aE(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.A)
A.v(m,"uNear",new A.y(B.e,s.f))
A.v(m,"uFar",new A.y(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.v(m,"uProjScaleX",new A.y(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.v(m,"uProjScaleY",new A.y(B.e,r[5]))
A.v(m,"uRadius",new A.y(B.e,p.f))
A.v(m,"uStrength",new A.y(B.e,n))
A.bE(m,p.c)
o.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.kR.prototype={
ga8(){return"ssaoBlur"},
aj(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.cJ,A.c([new A.O(this.y,B.i),new A.O(this.z,B.k)],t.C),!1))},
ai(a){var s=this,r="ssaoBlur",q=s.a.av(new A.bl(r,s.b,s.c,B.y,B.jn,B.jh)),p=A.d7(s.d)
return A.c([new A.lS(new A.b7(r,A.c([new A.O(s.y,B.i),new A.O(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iak:1}
A.lS.prototype={
ak(a){var s,r,q=this,p=a.b,o=p.a
A.c9(o,a.am("ssaoBlurred").b)
A.bo(o,q.a.ag())
if(a.c.e.c<=0){A.dE(o,B.ad,1,1,1,1)
return}A.dE(o,B.ad,1,0,0,0)
s=q.f.$0()
A.co(o,q.b.b)
r=t._
A.aE(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.A)
A.aE(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ak)
A.v(o,"uTexelSize",new A.y(B.aK,new Float32Array(A.a0(A.c([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.y(B.e,s.f))
A.v(o,"uFar",new A.y(B.e,s.r))
A.bE(o,q.c)
p.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.l5.prototype={
ga8(){return"vhs"},
aj(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.L,A.c([new A.O(this.r,B.i),new A.O(s,B.J),new A.O(s,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bl("vhs",s.b,s.c,B.y,B.jq,B.ir)),q=A.d7(s.d),p=s.r,o=s.w
return A.c([new A.m0(new A.b7("vhs",A.c([new A.O(p,B.i),new A.O(o,B.J),new A.O(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iak:1}
A.m0.prototype={
ak(a){var s,r=this,q=a.am(r.f.a),p=a.am(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c9(m,p.b)
A.bo(m,r.a.ag())
A.co(m,r.b.b)
A.aE(m,0,q.b)
A.v(m,"uScene",B.A)
A.aE(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ak)
A.v(m,"uTime",new A.y(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.y(B.e,n.at))
A.v(m,"uTrackingWeight",new A.y(B.e,l))
A.v(m,"uNoiseWeight",new A.y(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.y(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.y(B.e,n.CW))
A.v(m,"uGhostWeight",new A.y(B.e,s))
A.bE(m,r.c)
o.aG(3,0)},
$ia9:1,
gE(){return this.a}}
A.ia.prototype={}
A.lg.prototype={
ga8(){return"world"},
aj(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.cK,A.c([new A.O(this.e,B.k)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bl("safeWorld",s.b,s.c,B.jC,B.y,B.ij)),q=s.e
return A.c([new A.m3(new A.b7("worldOpaqueTransparent",A.c([new A.O(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iak:1}
A.m3.prototype={
ak(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c9(j,a.am(n.d).b)
A.bo(j,n.a.ag())
s=k.a
A.dE(j,B.ce,1,s.c,s.b,s.a)
A.co(j,n.b.b)
A.v(j,"uViewProjection",new A.y(B.v,new Float32Array(A.a0(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a6
s=t.n
A.v(j,"uLightDir",new A.y(B.q,new Float32Array(A.a0(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.y(B.q,new Float32Array(A.a0(A.c([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.y(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.t)(j),++o)n.fo(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.t)(l),++o)n.fo(m,l[o])},
fo(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eG){s=b.a
n.fp(a,s.gE().c)
A.w_(a,b,!0)
r=n.c.$1(s.gE().a)
A.bE(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dC(p,r.d,o,0)
else a.dA(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.bR)
n.fp(a,b.gE().c)
r=n.c.$1(b.gE().a)
A.bE(q,r.a)
q=r.b
p=r.c
if(q)a.dB(p,r.d,0)
else a.aG(p,0)}else throw A.b(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fg(b).p(0),null))},
fp(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.y(B.v,new Float32Array(A.a0(s.a))))
A.v(r,"uNormalMatrix",new A.y(B.v,new Float32Array(A.a0(s.dL().a))))},
$ia9:1,
gE(){return this.a}}
A.np.prototype={
ck(a){var s,r,q
a.C()
s=A.a_(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.a1
else q=r===0?B.bx:B.P
return new A.e7(q,s)},
hk(a){var s,r=this.ck(a).a
A:{if(B.a1===r){s=B.du
break A}if(B.P===r){s=B.dt
break A}s=B.ag
break A}return s}}
A.jZ.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hF.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hI.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.k0.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jY.prototype={}
A.k_.prototype={}
A.eD.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hH.prototype={}
A.hG.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eS.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.ie.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d2.prototype={
v(){return"UniformType."+this.b}}
A.y.prototype={}
A.fr.prototype={
v(){return"ClearMask."+this.b}}
A.jK.prototype={
aG(a,b){var s=this.a
if(s.b!==B.h)A.j(A.k(u.k))
s.a.drawArrays(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bs(a,1)},
dA(a,b,c){var s=this.a
if(s.b!==B.h)A.j(A.k(u.k))
s.a.drawArraysInstanced(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bs(a,c)},
dB(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.j(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bs(a,1)},
dC(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.j(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aK(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bs(a,c)},
$iBz:1}
A.fC.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fL.prototype={
fV(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.k("resource is not in candidate: "+a))
return s}}
A.ot.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.k("GPU resource adapter is not initialized"))
return s},
cM(a){var s,r,q,p,o,n=this
if(n.e)A.j(A.k("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.k("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.k("GPU resource candidate is already open"))
s=A.i2(a)
p=n.b
r=p.cM(s)
try{q=new A.fL(r,n.d8(s,a),B.af)
n.d=q
return q}catch(o){p.dX(r)
throw o}},
a_(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.k("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.dc(s.b)
r.b.a_()
r.c=null
r.e=!0},
d8(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.c([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("F<1>")
s=new A.F(k,i.a(new A.ou()),j)
for(h=s,g=J.R(h.a),h=new A.S(g,h.b,h.$ti.i("S<1>")),f=a.a;h.m();){r=g.gn()
q=A.yO(f,a.eH(r,a5))
J.ho(a3,q)
J.bt(a2,r,q)}e=A.I(new A.F(k,i.a(new A.ov()),j),j.i("n.E"))
B.a.Y(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.t)(k),++d){o=k[d]
n=A.Ai(J.B3(o,11))
if(i){h=J.aU(a2,"sceneColor")
h.toString
J.bt(a2,o,h)}else{h=n
if(typeof h!=="number")return h.mV()
if(h>=2){h=J.aU(a2,"sceneColor#1")
h.toString
J.bt(a2,o,h)}else{m=A.yO(f,a.eH(o,a5))
J.ho(a3,m)
J.bt(a2,o,m)}}}a0=A.aY(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.C(a0).i("eP<1>"),a0=new A.eP(a0,k),a0=new A.aH(a0,a0.gt(0),k.i("aH<a1.E>")),j=a.a,i=t.V,k=k.i("a1.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wx(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eH(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hH(s,s,1,B.b0,!0)}if(a==="sceneDepth")return new A.hH(n,m,1,B.b0,!0)
r=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
q=r?B.d.a2(n+1,2):n
p=r?B.d.a2(m+1,2):m
s=a==="sceneColor"
o=s||B.b.T(a,"sceneColor#")
s=s?b.d:1
return new A.hH(q,p,s,o?B.cH:B.hz,o)},
dc(a){var s,r,q,p,o,n=A.kh(t.mf.a(a).gaD(),t._)
for(n=A.fX(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wx(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
ev(a){if(this.d!==a||a.c!==B.af)throw A.b(A.k("GPU resource candidate is not open"))}}
A.ou.prototype={
$1(a){return!B.b.T(A.r(a),"sceneColor#")},
$S:3}
A.ov.prototype={
$1(a){return B.b.T(A.r(a),"sceneColor#")},
$S:3}
A.h0.prototype={
v(){return"_SlotState."+this.b}}
A.ej.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.cZ.prototype={
az(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.ej(B.aN,n.i("ej<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.n4
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c_(a){return this.az(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.dZ(B.cO,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dZ(B.cP,a))
s=q.b
if(s===B.aO||s===B.aN)throw A.b(A.dZ(B.aB,a))},
by(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
e_(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.Z(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb3(b)},
b5(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.dZ(B.cO,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dZ(B.cP,a))
r=q.b
if(r===B.aO||r===B.aN)throw A.b(A.dZ(B.hP,a))
q.b=B.aO
q.sb3(null)
B.a.l(p.c,s);++p.e},
bE(){return new A.bV(this.lB(),this.$ti.i("bV<+(1,2)>"))},
lB(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bE(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aO||j===B.aN){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aQ(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.ju.prototype={
v(){return"BlendEquation."+this.b}}
A.ev.prototype={
v(){return"BlendFactor."+this.b}}
A.jG.prototype={
v(){return"CullFace."+this.b}}
A.jI.prototype={
v(){return"DepthFunc."+this.b}}
A.fy.prototype={
e2(a){var s=this
return A.xS(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b8.prototype={
v(){return"StateField."+this.b}}
A.t5.prototype={
l1(a){var s,r=this.a
if(r==null)return A.hT(B.ja,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.l(0,B.bJ)
if(r.b!==a.b)s.l(0,B.bK)
if(r.c!==a.c)s.l(0,B.bL)
if(r.d!==a.d)s.l(0,B.bM)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bN)
if(r.r!==a.r)s.l(0,B.bO)
if(r.w!==a.w)s.l(0,B.bP)
if(r.x!==a.x)s.l(0,B.bQ)
return s}}
A.dH.prototype={$idq:1}
A.iY.prototype={}
A.iX.prototype={}
A.m2.prototype={}
A.le.prototype={
ia(a){var s=this,r=A.a(s.a.canvas)
s.c=A.X(new A.t3(s))
s.d=A.X(new A.t4(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
h3(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bS(A.e(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bS(A.e(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bS(A.e(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bS(A.e(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bS(A.e(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.eZ(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.hi(e.getParameter(A.e(k.WebGL2RenderingContext.RENDERER)))
m=A.hi(e.getParameter(A.e(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qo("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bS(a){var s=A.hi(this.a.getParameter(a))
return typeof s=="number"?B.c.aC(s):0},
eZ(a){var s=A.hi(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBW:1}
A.t3.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.U},
$S:1}
A.t4.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.tW.prototype={
kc(){var s,r=this
if(r.b!==B.h)A.j(A.k(u.k))
s=r.w?A.E(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dH(new A.m2(s))},
fi(a){var s=a.a
if(!(s instanceof A.m2))throw A.b(A.ah(a,"query","is not a GPU timer query"))
return s}}
A.m1.prototype={}
A.jL.prototype={
B(){var s=this
return A.N(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jr.prototype={
glE(){var s=this.CW
return new A.aj(s,A.o(s).i("aj<2>")).bd(0,0,new A.n0(),t.i)},
hV(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.p()
s=j.a
A.E(i.connect(A.a(s.destination)))
r=j.d
r===$&&A.p()
A.a(r.gain).value=0.25
q=j.e
q===$&&A.p()
A.a(q.gain).value=0.12
p=j.f
p===$&&A.p()
A.a(p.gain).value=0.4
o=j.r
o===$&&A.p()
A.a(o.gain).value=0.2
n=j.w
n===$&&A.p()
A.a(n.gain).value=0.4
m=j.x
m===$&&A.p()
A.a(m.gain).value=0.1
l=j.y
l===$&&A.p()
A.a(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.E(r[k].connect(i))
r=j.z
r===$&&A.p()
A.a(r.gain).value=1
q=j.Q
q===$&&A.p()
A.a(q.gain).value=0.35
A.E(o.connect(r))
A.E(n.connect(r))
A.E(p.connect(r))
p=j.as
p===$&&A.p()
A.E(r.connect(p))
A.E(p.connect(q))
A.E(q.connect(i))
q=A.a(s.createBiquadFilter())
q.type="highpass"
A.a(q.frequency).value=80
j.k2!==$&&A.aX()
j.k2=q
p=A.a(s.createBiquadFilter())
p.type="lowpass"
A.a(p.frequency).value=11e3
j.k3!==$&&A.aX()
j.k3=p
A.E(q.connect(p))
A.E(p.connect(A.a(s.destination)))
i.disconnect(A.a(s.destination))
A.E(i.connect(q))
p.disconnect(A.a(s.destination))
q=A.a(s.createChannelSplitter(2))
j.k4!==$&&A.aX()
j.k4=q
i=A.a(s.createChannelMerger(2))
j.ok!==$&&A.aX()
j.ok=i
r=A.a(s.createGain())
A.a(r.gain).value=0.5
j.p1!==$&&A.aX()
j.p1=r
A.E(p.connect(q))
A.E(i.connect(A.a(s.destination)))
j.er()},
er(){var s,r=this,q=r.k4
q===$&&A.p()
q.disconnect()
s=r.p1
s===$&&A.p()
s.disconnect()
if(r.p2){A.E(q.connect(s,0))
A.E(q.connect(s,1))
q=r.ok
q===$&&A.p()
A.E(s.connect(q,0,0))
A.E(s.connect(q,0,1))}else{s=r.ok
s===$&&A.p()
A.E(q.connect(s,0,0))
A.E(q.connect(s,1,1))}},
cf(){var s=this.a
if(A.r(s.state)==="suspended")A.a(s.resume())},
fd(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.p()
return s}r=B.jv.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.p()
break A}if("bed"===r){s=q.e
s===$&&A.p()
break A}if("mid"===r){s=q.r
s===$&&A.p()
break A}if("air"===r){s=q.x
s===$&&A.p()
break A}s=q.w
s===$&&A.p()
break A}return s},
iW(){var s,r,q,p,o,n,m,l=this.a,k=A.a4(l.sampleRate),j=B.c.aO(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aI()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dO(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.aI()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.E(r.connect(q))
A.E(q.connect(p.fd(a)))
r.onended=A.X(new A.n2(r,q))
r.start()},
h0(a){return this.dO(a,1)},
h1(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ax.aI()*0.12)
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
m=h==null?0:h
if(g!=null&&f!=null){A.a(o.frequency).value=f
A.a(n.gain).value=Math.pow(10,g/20)}else{s=j.ay!=null
if(s){s=j.ay
s.toString
l=j.eC(j.b.h_(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.h2(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.X(new A.n1(j,o))
A.E(r.connect(q))
A.E(q.connect(n))
A.E(n.connect(o))
A.E(o.connect(p))
A.E(p.connect(j.fd(a)))
r.start()},
m7(a,b,c,d){return this.h1(a,b,c,1,d,null,null,null)},
eC(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.ay(r,q,p)},
ej(a){var s,r,q,p,o=this
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
A.E(q.connect(p))
r=o.e
r===$&&A.p()
A.E(p.connect(r))
q.onended=A.X(new A.n3(o,q,p))
q.start()
o.cy=q},
cW(a){if(this.p2===a)return
this.p2=a
this.er()},
hv(a){var s,r,q=this
q.cW(a.b===B.c1)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aP?1:0.55
r=q.c
r===$&&A.p()
r=A.a(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.p()
A.a(s.gain).value=0.35*q.p4},
bh(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.D(c==null?q.fr:c,0,1)
q.fx=B.c.D(f==null?q.fx:f,0,1)
q.fy=B.c.D(b==null?q.fy:b,0,1)
q.go=B.c.D(a==null?q.go:a,0,1)
q.id=B.c.D(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.p()
A.a(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.p()
A.a(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.p()
A.a(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.p()
A.a(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.p()
A.a(s.gain).value=0.4*q.go
s=q.e
s===$&&A.p()
A.a(s.gain).value=0.12*q.id
s=q.y
s===$&&A.p()
A.a(s.gain).value=q.fx
s=q.c
s===$&&A.p()
s=A.a(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
ec(a){var s=null
return this.bh(s,s,s,s,a,s)},
hs(a){var s=null
return this.bh(s,s,a,s,s,s)},
hu(a){var s=null
return this.bh(s,s,s,s,s,a)},
hr(a){var s=null
return this.bh(s,a,s,s,s,s)},
hq(a){var s=null
return this.bh(a,s,s,s,s,s)},
ht(a){var s=null
return this.bh(s,s,s,a,s,s)},
hp(a){if(this.ay===a)return
this.ay=a
this.bu()},
bu(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cg(p,g)
m=n==null?i.eC(h.h_(p,g)):new A.ay(n.c,n.d,n.e)
l=A.a4(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.a4(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.a4(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.D(m.c,0,1)}}}
A.n0.prototype={
$2(a,b){return Math.max(A.br(a),t.jS.a(b).r)},
$S:62}
A.n_.prototype={
$1(a){return this.hd(t.q.a(a))},
hd(a){var s=0,r=A.bL(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bN(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.as(A.bX(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.as(A.bX(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.as(A.bX(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.al(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.x(l))
s=5
break
case 2:s=1
break
case 5:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$$1,r)},
$S:63}
A.n2.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.n1.prototype={
$1(a){var s=this.a.CW.a5(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.n3.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.h2.prototype={}
A.js.prototype={
v(){return"AudioCategory."+this.b}}
A.mQ.prototype={
hX(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.he)
if(!B.a.a7(A.c([d.a,d.b,d.c],t.n),new A.mR()))throw A.b(B.fA)}}
A.mR.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.my.prototype={
hU(a,b){if(this.a.length===0)throw A.b(B.fq)
if(!B.a.a7(A.c([a.a,a.b,a.c],t.n),new A.mz()))throw A.b(B.fF)}}
A.mz.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.hp.prototype={
C(){var s=t.n
if(B.a.M(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mA()))throw A.b(B.fV)
s=B.a.M(A.c([0,0.55,1],s),new A.mB())
if(s)throw A.b(B.h5)},
cg(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ay(-1.5,2e4,0)
if(a.ay)return new A.ay(-28,320,1)
return new A.ay(-12,1100,0.55)},
mE(a){return this.cg(a,null)}}
A.mA.prototype={
$1(a){return!isFinite(A.br(a))},
$S:5}
A.mB.prototype={
$1(a){A.br(a)
return a<0||a>1},
$S:5}
A.mM.prototype={
hW(a){var s=A.o(a)
if(new A.aa(a,s.i("aa<1>")).M(0,new A.mO())||new A.aj(a,s.i("aj<2>")).M(0,new A.mP()))throw A.b(B.hc)}}
A.mO.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.mP.prototype={
$1(a){var s
t.a.a(a)
s=J.aC(a)
return s.gO(a)||s.M(a,new A.mN())},
$S:64}
A.mN.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.wa.prototype={}
A.mY.prototype={}
A.mS.prototype={
hY(a,b,c){var s
for(s=this.b.gaD(),s=s.gu(s);s.m();)s.gn().C()},
h7(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.k("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.k("audio listener room missing: "+a0))
r=this.jB(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c9
e=f.cg(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.l(q,g)
B.a.l(p,"portal:"+g)}n=!r.b
if(n&&a!==a0){B.a.l(p,"unreachable")
l=-48
k=240
j=1}s=A.c([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.t)(o),++i)s.push(o[i].a)
o=B.c.D(l,-60,0)
m=B.d.D(k,120,2e4)
g=B.c.D(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.X(p,"; ")
b=t.N
s=A.ai(s,b)
b=A.ai(q,b)
if(!isFinite(g)||g<0||g>1)A.j(B.h4)
return new A.mY(s,b,o,m,g,n,c)},
cg(a,b){return this.h7(a,b,B.bq)},
jB(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.mP
s=t.N
r=A.N([a0,0],s,t.i)
q=A.N([a0,B.X],s,t.Es)
p=A.aN([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.I(p,l)
B.a.P(k,new A.mT(r))
j=B.a.gU(k)
p.a5(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.it(s,!0)}i=o.aJ(j)
h=A.I(i,i.$ti.i("n.E"))
B.a.P(h,new A.mU())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.t)(h),++g){f=h[g]
e=f.cd(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c9:d).mE(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.I(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.mO}}
A.mT.prototype={
$2(a,b){var s,r,q
A.r(a)
A.r(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.F(r,s)
return q===0?B.b.F(a,b):q},
$S:65}
A.mU.prototype={
$2(a,b){var s=t.T
return B.b.F(s.a(a).a,s.a(b).a)},
$S:66}
A.it.prototype={}
A.fo.prototype={}
A.nm.prototype={
fT(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.f(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.AX().bx(q).gau()
p.d=q
p.c=p.b.bx(q).gau()
p.a=a}}
A.o5.prototype={}
A.k6.prototype={
cQ(a){if(this.at)return
A.pe(a,"requestPointerLock",t.X)},
ea(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.ck(r,r.r,r.e,A.o(r).i("ck<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.R(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mh(p,n)}this.b8()},
d_(a){var s,r,q,p,o,n,m=this
if(m.ch.d_(a))for(s=m.CW.aE("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
m8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.R(t.ik.b(c)?c:new A.aW(c,A.C(c).i("aW<1,ae?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.Q(r.connected)||A.r(r.mapping)!=="standard")break A
c=A.r(r.id)
q=A.r(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.R(t.dd.b(n)?n:new A.aW(n,A.C(n).i("aW<1,u>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.R(t.nx.b(d)?d:new A.aW(d,A.C(d).i("aW<1,ae>")))
while(d.m()){r=d.gn()
p.push(A.Q(r.pressed)?1:A.a4(r.value))}s=new A.kT(!0,c,q,o,p)
break}}d=s==null
m=A.Di(d?B.lO:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.M(c.aE(e),q.gap(q))
q=f.r
q.iS(A.o(q).i("l(1)").a(new A.p7(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.dJ())n.l(0,h)}else n.l(0,h)}}f.e=A.hT(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.M(c.aE(e),l.gap(l))){d=r.a(f.c)
d=!B.a.M(c.aE(e),d.gap(d))}}if(d)i.dK()},
j8(a){var s=this
A.a(a)
if(A.Q(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.r(a.code)))if(B.a.q(s.CW.aE("interact"),A.r(a.code))){if(s.ch.dJ())s.d.l(0,A.r(a.code))}else s.d.l(0,A.r(a.code))},
ja(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a5(0,A.r(a.code))
r=this.CW
if(B.a.q(r.aE(q),A.r(a.code))){t.Q.a(s)
s=!B.a.M(r.aE(q),s.gap(s))}else s=!1
if(s)this.ch.dK()},
je(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.e(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aE("interact"),s)){if(r.ch.dJ())r.d.l(0,s)}else r.d.l(0,s)},
ji(a){var s,r="interact",q="Mouse"+A.e(A.a(a).button),p=this.c
p.a5(0,q)
s=this.CW
if(B.a.q(s.aE(r),q)){t.Q.a(p)
p=!B.a.M(s.aE(r),p.gap(p))}else p=!1
if(p)this.ch.dK()},
jk(a){var s
A.a(a)
if(!this.ay)return
s=A.a4(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jg(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.eX(a,"movementX")
s.as=s.as+s.eX(a,"movementY")},
jc(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
eX(a,b){var s=A.zl(a[b])
if(s==null)s=null
return s==null?0:s},
cu(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.kh(n.c,t.N)
for(r=n.e,r=A.fX(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.M(n.CW.aE(a),s.gap(s))},
b8(){var s=this
s.c.L(0)
s.d.L(0)
s.f.L(0)
s.r.I(0,s.e)
s.as=s.Q=0
s.ch.dU()}}
A.p7.prototype={
$1(a){return!this.a.q(0,A.r(a))},
$S:3}
A.p6.prototype={
aE(a){var s=this.a.h(0,a)
return s==null?B.o:s},
mh(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a_(r)
for(p=A.fX(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ai(q,r))},
bc(a,b){var s,r,q
t.Q.a(b)
for(s=this.aE(a),r=s.length,q=0;q<r;++q)if(b.a5(0,s[q]))return!0
return!1}}
A.pa.prototype={
dJ(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dK(){this.c=this.b=!1
this.d=0},
d_(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dU(){this.c=this.b=!1
this.d=0}}
A.aV.prototype={}
A.pw.prototype={}
A.pt.prototype={
mb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.I(b,t.p)
B.a.I(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.b(A.w("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.eN(n,i.d,a,b,i.a,j,m)
i.eN(l,i.e,a,c,i.b,j,k)
return new A.pw(n,l,j)},
eN(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.C(d)
s=k.i("M<1,+effectiveScore,light,score(u,aV,u)>")
r=A.I(new A.M(d,k.i("+effectiveScore,light,score(u,aV,u)(1)").a(new A.pu(this,c,b)),s),s.i("a1.E"))
B.a.P(r,new A.pv())
q=A.a_(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.L(0)
b.I(0,q)}}
A.pu.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ao(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iL(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:68}
A.pv.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.F(b.a,a.a)
return s===0?B.d.F(a.b.a,b.b.a):s},
$S:69}
A.nL.prototype={
dq(a,b){var s,r,q,p,o,n,m,l=this
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
A.pC.prototype={
hK(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dq(b,c)},
k_(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.f(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.S(s,6.283185307179586)
r=Math.sin(s)
return new A.f(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.d1.prototype={
cO(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.cX(s,0,m,l)
n.a=s}r=b.ao(0,a).bx(d.ao(0,a)).gau()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ii(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ii(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ii(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ii(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ii(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ii(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aB(a,b,c,d,e){return this.cO(a,b,c,d,e,1,1)}}
A.f.prototype={
ah(a,b){return new A.f(this.a+b.a,this.b+b.b,this.c+b.c)},
ao(a,b){return new A.f(this.a-b.a,this.b-b.b,this.c-b.c)},
an(a,b){return new A.f(this.a*b,this.b*b,this.c*b)},
c0(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bx(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.f(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gau(){var s=this,r=s.gt(0)
return r<1e-9?new A.f(0,0,0):new A.f(s.a/r,s.b/r,s.c/r)}}
A.kT.prototype={}
A.lh.prototype={}
A.nf.prototype={
mQ(a){var s,r,q,p,o,n=B.j.ab(a.B(),null)
this.a.fE(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
mc(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.aB(s.getItem("quarantine.save.active"))
q=A.aB(s.getItem("quarantine.save.previous"))
p=this.eG(r,a)
if(p!=null)return new A.eQ(p,null)
o=this.eG(q,a)
if(o!=null)return new A.eQ(o,"recovered previous save")
if(r==null)return B.ld
return B.lc}catch(n){return B.lb}},
eG(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fE(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.al(q) instanceof A.G)return null
else throw q}}}
A.jN.prototype={
i0(a,b,c,d,e){if(this.a.length===0)throw A.b(B.h2)
if(this.b<0)throw A.b(B.fB)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ai(q,t.i)
s=t.z
return A.aY(A.N(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cg.prototype={
v(){return"EndingKind."+this.b}}
A.nV.prototype={}
A.fz.prototype={
B(){var s=t.N
return A.N(["kind",this.a.b],s,s)}}
A.nY.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:70}
A.bp.prototype={}
A.kx.prototype={
B(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.N(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
lw(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ao(0,new A.f(0,1.3499999999999999,0))
return!new A.jy(s,s.ah(0,new A.f(0,1.2000000000000002,0))).cK(a,r)}}
A.qi.prototype={
B(){return A.ma(this.a)}}
A.fQ.prototype={
B(){return A.N(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qG.prototype={
fE(a){var s,r,q,p,o,n,m,l=B.j.aF(a,null),k=t.f
if(!k.b(l))throw A.b(B.hd)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aJ(p))o=p!==1&&p!==2
else o=!0
if(o)A.j(A.a3("unsupported save version "+A.x(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.j(B.fJ)
k=A.aM(n,s,r)
return A.yt(A.aM(m,s,r),k,2)}}
A.eQ.prototype={}
A.eC.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jW.prototype={}
A.oh.prototype={}
A.og.prototype={
gaa(){var s=this.d
return new A.oh(s.a,s.b)},
gh2(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.N(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.N(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.N(["entryCount",m.e.b.a],k,t.S)
p=A.y0(m.c).B()
o=m.r
n=o.c
return new A.qi(A.ma(A.N(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.N(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
k6(a,b){if(!B.a.M(a.f,new A.oi(b)))return!1
this.z.k5(a,b)
return!0},
ln(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("aj<2>")
q=A.I(new A.aj(s,r),r.i("n.E"))
B.a.P(q,new A.oj())
if(q.length===0)return null
s=A.C(q)
r=s.i("F<1>")
p=A.I(new A.F(q,s.i("l(1)").a(new A.ok()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dT(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cP(a,l.a,s.length-1,B.a.gV(s).p(0))
j.k(0,a,k)
return k},
jZ(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.ah(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cA(B.hn)}if(n<a)this.cA(B.ho)},
hN(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cZ(a)&&s.hM(b)},
md(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dX){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hJ(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Bw(j,A.ai(i.d,h).length)
if(a===B.dK)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.C(r)
A.Bv(j,new A.F(r,q.i("l(1)").a(new A.ol(k)),q.i("F<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.io,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aO(j.a/1*3)
B.a.l(r.r,new A.fS(q.a,a,b))
m=r.a
A.BH(m,q.a,n,k.b,A.ai(m.d,h));++q.a
q.b=7
r.c=16
r.d=6
r.f=!1
m.hx(B.iV)
s.r.ks(o,c)
l=B.c.aO(j.b/1*6)
if(l>0)r.cZ(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aj(i,A.o(i).i("aj<2>")).M(0,new A.om())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cA(B.hq)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cA(B.hp)},
cA(a){var s=this;++s.y
B.a.l(s.w,new A.jW())
B.a.l(s.x,A.Bx(A.Er(a),s.b,s.y-1))}}
A.oi.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:14}
A.oj.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:15}
A.ok.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:25}
A.ol.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.rq().hG(this.a.c,a.a)},
$S:74}
A.om.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.n4.prototype={
e0(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.k("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.k("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.b(A.k("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.b(A.k("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.k(n+" origin.x mismatch: "+A.x(g)+" != "+A.x(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.k(n+" origin.y mismatch: "+A.x(j)+" != "+A.x(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.k(n+" origin.z mismatch: "+A.x(l)+" != "+A.x(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.k(n+" size.x mismatch: "+A.x(g)+" != "+A.x(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.k(n+" size.y mismatch: "+A.x(j)+" != "+A.x(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.k(n+" size.z mismatch: "+A.x(l)+" != "+A.x(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.b(A.k("window count mismatch for "+n))
for(n=A.C(j),i=n.i("l(1)"),n=n.i("F<1>"),f=0;f<l.length;l.length===k||(0,A.t)(l),++f){e=l[f]
d=A.bu(new A.F(j,i.a(new A.n9(e)),n),r)
if(d==null)throw A.b(A.k("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.j(A.k(c+" offset mismatch: "+A.x(h)+" != "+A.x(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.j(A.k(c+a+A.x(h)+" != "+A.x(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.j(A.k(c+a0+A.x(h)+" != "+A.x(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.b(A.k("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.b(A.k("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.j(A.k(q+a+A.x(n)+" != "+A.x(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.j(A.k(q+a0+A.x(n)+" != "+A.x(l)))
if(o.f!=m.at)throw A.b(A.k("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaQ(a1).b!==B.a.gaQ(s).b)throw A.b(A.k("stair manifest mismatch"))}}
A.n5.prototype={
$1(a){return A.Bd(a,this.a)},
$S:75}
A.n6.prototype={
$1(a){var s=this.a,r=A.mi(a,"portal"),q=A.ep(r,"id"),p=A.ep(r,"a"),o=A.ep(r,"b"),n=A.jd(r,"width"),m=A.jd(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.r(r.h(0,"doorKit")):null
return new A.fi(q,p,o,n*s,m*s,l)},
$S:76}
A.n7.prototype={
$1(a){var s=A.mi(a,"stair")
A.ep(s,"id")
return new A.fk(A.ep(s,"portalId"))},
$S:77}
A.n8.prototype={
$1(a){return typeof a=="string"?a:A.j9("exterior cell")},
$S:78}
A.n9.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:16}
A.fj.prototype={}
A.na.prototype={
$1(a){var s=this.a,r=A.mi(a,"window"),q=A.ep(r,"id"),p=A.jd(r,"offset")
A.jd(r,"sill")
return new A.fl(q,p*s,A.jd(r,"width")*s,A.jd(r,"height")*s)},
$S:80}
A.fl.prototype={}
A.fi.prototype={}
A.fk.prototype={}
A.vd.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:11}
A.jy.prototype={
mx(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.C(s)
q=new A.F(s,r.i("l(1)").a(new A.nq(e)),r.i("F<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cw(b,p.f)&&a==="hall"))o=n.cw(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.li(p,B.c.D(d,0,1))},
lF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.eW(g,c,d)
s=h.iO(a,b,c,d)
if(s!=null){h.d=s
return h.eW(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.kl(Math.sqrt(r*r+q*q)/0.08))
o=d.an(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jL(a,n,m,o)
l=l||j.b
m=j.a
i=h.ma(a,n)
n=i==null?n:i}h.ba(m)
return new A.kk(m,n)},
iO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.cw(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.cw(c,l)){l=j<0||o
h=l}if(i||h)return new A.li(m,i?0:1)}return null},
eW(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ao(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.yG(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.ba(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kk(n,k)},
cw(a,b){var s=a.ao(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cI(c,!1)
s=h.cD(a,b,c,new A.f(g,0,0))
r=s.a
q=d.c
p=h.cD(a,b,r,new A.f(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cI(p.a,!1)
n=c.ah(0,new A.f(0,0.35,0))
h.ba(n)
if(!h.cK(a,b)){m=h.cD(a,b,n,new A.f(g,0,0))
l=h.cD(a,b,m.a,new A.f(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.f(g,r-j,q)
h.ba(i)
if(h.cK(a,b))break}h.ba(k)
return new A.cI(k,!1)}}if(o)return new A.cI(r,!0)
if(!p.b)return new A.cI(p.a,!0)
h.ba(c)
return new A.cI(c,!0)},
cD(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cI(c,!1)
s=c.ah(0,d)
this.ba(s)
if(this.cK(a,b)){this.ba(c)
return new A.cI(c,!0)}return new A.cI(s,!1)},
ba(a){var s=a.ao(0,new A.f(0,1.3499999999999999,0))
this.a=s
this.b=s.ah(0,new A.f(0,1.2000000000000002,0))},
cK(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aA(m)
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
return!this.jI(a,m,s)},
ma(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aA(k)
for(r=k.a,q=a.aJ(r),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.cd(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fn(k,o,s)&&this.iH(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jI(a,b,c){var s,r,q
for(s=a.aJ(b.a),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.fn(b,q,c))return!0}return!1},
fn(a,b,c){var s,r,q,p=a.a,o=b.aH(p),n=b.af(p)
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
iH(a,b,c){var s,r=this
switch(b.aH(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
ska(a){this.a=t.a7.a(a)}}
A.nq.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:82}
A.kk.prototype={}
A.cI.prototype={}
A.li.prototype={}
A.hK.prototype={}
A.oK.prototype={
ks(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.N,r)
s=B.N[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hH(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.c}return r},
hI(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.d}return r},
B(){return A.N(["landedCount",this.b],t.N,t.z)}}
A.Z.prototype={}
A.jQ.prototype={
glz(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.c([r,q,p,o,n,m],t.n),new A.o_())&&o>=r&&n>=q&&m>=p}}
A.o_.prototype={
$1(a){return isFinite(A.br(a))},
$S:5}
A.k3.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.b(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glz())throw A.b(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.t)(l),++r){p=l[r]
if(B.a.M(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oM()))throw A.b(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.oM.prototype={
$1(a){return!isFinite(A.br(a))},
$S:5}
A.oL.prototype={
A(a,b,c,d,e,f,g){var s=this
s.br(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.br(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.br(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.br(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.br(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.br(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
br(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.Z(a,b,c,m,n,o,0,0,p),r=new A.Z(g,h,i,m,n,o,1,1,p)
this.ad(s,new A.Z(d,e,f,m,n,o,1,0,p),r)
this.ad(s,r,new A.Z(j,k,l,m,n,o,0,1,p))},
ad(a,b,c){var s=this,r=s.b
B.a.l(r,s.dg(a))
B.a.l(r,s.dg(b))
B.a.l(r,s.dg(c))},
dg(a){var s,r,q=B.a.X(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.k("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
kf(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.b(A.k("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.k3(A.ai(g,t.hl),new Uint16Array(A.a0(this.b)),new A.jQ(s,r,q,p,o,n))
h.C()
return h}}
A.jR.prototype={}
A.w4.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ah.q(0,s))A.j(A.k("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:83}
A.v7.prototype={
$2(a,b){var s=t.Ez
return B.b.F(s.a(a).a,s.a(b).a)},
$S:84}
A.d8.prototype={
mP(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iE(A.GD(new A.k3(i,new Uint16Array(A.a0(s)),A.E9(i))),l.a,l.b,l.c,A.c([],k))}}
A.iE.prototype={}
A.ez.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jS.prototype={
km(a){var s
switch(a.a){case 0:s=A.aN(["front","street","opposite-house"],t.N)
break
case 1:s=A.aN(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aN(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aN(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aN(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
kn(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cm
break A}if("kitchen"===a||"cellar"===a){s=B.f8
break A}if("bathroom"===a){s=B.f9
break A}if("spare-room"===a){s=B.fa
break A}s=B.cm
break A}return this.km(s)},
fI(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bV(this.lj(d.i("h(0)").a(a),b,c,d),d.i("bV<0>"))},
lj(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fI(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a7(0,B.ah.gap(B.ah)))throw A.b(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.ck(l,l.r,l.e,r.$ti.i("ck<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ah.q(0,j))throw A.b(A.k("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ef.prototype={
fA(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uO.prototype={
$1(a){var s=this
return t.xT.a(a).fA(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:27}
A.uN.prototype={
$1(a){return t.xT.a(a).fA(0,(this.a+this.b)*0.5,this.c)},
$S:27}
A.dj.prototype={
v(){return"FocusKind."+this.b}}
A.dW.prototype={}
A.qD.prototype={}
A.u_.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:86}
A.tZ.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:16}
A.v5.prototype={
$1(a){return B.d.D(B.c.aO(a*this.a),0,255)},
$S:87}
A.ee.prototype={}
A.h1.prototype={}
A.oI.prototype={
ii(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.p_(1.5),a4=this.b,a5=A.ap(a4,!0,t.U)
B.a.L(a4)
s=A.c([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.t)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.c([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.t)(i),++g){f=i[g]
j.push(new A.bc(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.c([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.t)(h),++g){d=h[g]
i.push(new A.bi(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.c([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.t)(e),++g){b=e[g]
h.push(new A.bk(b.a,b.b,a3.$1(b.c)))}s.push(new A.b_(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.ap(a4,!0,t.T)
B.a.L(a4)
s=A.c([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.by(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dz(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
ij(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.p0(),a7=this.b,a8=A.ap(a7,!0,t.U)
B.a.L(a7)
s=A.c([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.t)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.c([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.t)(h),++f){e=h[f]
i.push(new A.bc(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.c([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.t)(g),++f){c=g[f]
h.push(new A.bi(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.c([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.t)(d),++f){a=d[f]
g.push(new A.bk(a.a,a.b,a6.$1(a.c)))}d=A.c([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.t)(b),++f){a1=b[f]
d.push(new A.dh(a1.a,a1.b*1.5))}s.push(new A.b_(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.I(a7,s)
a7=this.c
a2=A.ap(a7,!0,t.T)
B.a.L(a7)
s=A.c([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.by(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.I(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.c([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.t)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dz(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
iV(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.b(A.k("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.b(A.k("duplicate portal "+n))
q.k(0,n,m)}},
jS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.b(A.k("3D room overlap: "+n.a+" and "+m.a))}},
jQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.m(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fm(o,i,h,g,f,e)
a5.ep(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.k(l+" references invalid portal "+d))
i=c.aH(l)
h=c.af(l)
g=c.w
f=c.x
a5.fm(o,i,h,g,0,f)
a5.ep(a6,l,c.aH(l),c.af(l),c.af(l)+g,0,f)}}for(s=new A.H(a6,a6.$ti.i("H<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.cd(a)
r.P(a,new A.p1())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.b(A.k("overlapping apertures on "+b.a))}}},
fm(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.m||b===B.l
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.k("aperture outside "+a.a+" "+b.b+" wall"))},
ep(a,b,c,d,e,f,g){J.ho(t.aD.a(a).ce(b+":"+c.b,new A.oZ()),new A.iM([d,e,f,g]))},
aA(a){var s=a.c,r=this.r,q=a.a
return new A.f(s.a+r.hH(q),s.b+r.hI(q),s.c)},
aJ(a){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.p2(a)),r.i("F<1>"))},
m9(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.ah(a,"roomId","not a portal endpoint"))
r=this.aA(o)
q=b.af(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aH(a).a){case 0:s=new A.f(s.a+q,p,s.c)
break
case 2:s=new A.f(s.a+q,p,s.c+r.c)
break
case 1:s=new A.f(s.a+r.a,p,s.c+q)
break
case 3:s=new A.f(s.a,p,s.c+q)
break
default:s=null}return s},
gmO(){return B.a.bd(this.b,0,new A.p3(),t.S)},
h_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.X
s=A.c([new A.aQ(a,B.X)],t.nR)
r=A.aN([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.mg(s,0)
n=o.a
m=o.b
for(l=this.aJ(n),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.cd(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.I(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.I(m,p)
h.push(j)
B.a.l(s,new A.aQ(i,h))}}}return B.X}}
A.p_.prototype={
$1(a){var s=this.a
return new A.f(a.a*s,a.b,a.c*s)},
$S:28}
A.p0.prototype={
$1(a){return a.an(0,1.5)},
$S:28}
A.p1.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.F(a.a[0],b.a[0])},
$S:89}
A.oZ.prototype={
$0(){return A.c([],t.wx)},
$S:90}
A.p2.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:91}
A.p3.prototype={
$2(a,b){return A.e(a)+t.U.a(b).e.length},
$S:92}
A.nZ.prototype={}
A.rq.prototype={
hG(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.rr())}else s=!1
return s}}
A.rr.prototype={
$1(a){return t.e.a(a).w},
$S:16}
A.oN.prototype={
m6(a){var s=this.e,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.oQ(a)),r.i("F<1>"))},
cF(a){return B.a.aW(this.d,new A.oO(a),new A.oP(a))},
e0(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.k("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.k("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.k("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.b(A.k("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.k("invalid bounds for inventory asset "+m))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.t)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.b(A.k("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.b(A.k(a7+m+" references "+l))
n=a6.cF(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.AU()
if(!e.b.test(k))throw A.b(A.k("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.b(A.k("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.b(A.k("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.b(A.k("duplicate inventory socket "+l+":"+e))
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
a4=g.h5(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.b(A.k(a7+m+" escapes "+f.a))}}}
A.oQ.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:93}
A.oO.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:94}
A.oP.prototype={
$0(){return A.j(A.k("inventory asset missing: "+this.a))},
$S:6}
A.cW.prototype={}
A.cz.prototype={
h5(a,b){var s=this.f.c.b*b,r=a.f
return new A.f(r.a.b*s,r.b.b*s,0)}}
A.pd.prototype={}
A.pb.prototype={}
A.vc.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:11}
A.pc.prototype={
B(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.o(o).i("aa<1>")
n=A.I(new A.aa(o,n),n.i("n.E"))
B.a.Y(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.t)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dW(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.fm)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.L(0)
for(q=new A.H(r,A.o(r).i("H<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aJ(o)||o<0)throw A.b(B.fC)
s.k(0,n,o)}}}
A.dt.prototype={}
A.oR.prototype={
mM(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fX(a5,a5.r,A.o(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.t)(n),++g){f=n[g]
if(!f.d||f.e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aA(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.f(a,a0,a1).gt(0)
if(a2>0.0001){a3=1/a2
a4=new A.f(a*a3,a0*a3,a1*a3)}else a4=new A.f(0,-1,0)
B.a.l(s,new A.dt(new A.f(d,c,e),a4,16760952,3.8,2.1*this.jA(k)))}}B.a.P(s,new A.oS(a6))
return A.kV(s,0,A.fc(4,"count",t.S),t.A_).bJ(0)},
jA(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.oS.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.F(a.a.ao(0,s).gt(0),b.a.ao(0,s).gt(0))},
$S:96}
A.hE.prototype={
v(){return"Floor."+this.b}}
A.dV.prototype={
v(){return"Facing."+this.b}}
A.bc.prototype={
shF(a){this.w=A.Q(a)}}
A.by.prototype={
cd(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aH(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.ah(a,"roomId","not an endpoint of "+s.a))},
af(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.ah(a,"roomId","not an endpoint of "+s.a))}}
A.bi.prototype={}
A.bk.prototype={}
A.dh.prototype={}
A.dz.prototype={}
A.b_.prototype={}
A.oU.prototype={
lc(a){return B.a.aW(this.c,new A.oV(a),new A.oW(a))},
mK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.k("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.k("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.b(A.k("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.b(A.k("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.b(A.k("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.b(A.k("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gO(k)||k.gaD().M(0,new A.oX()))throw A.b(A.k("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.b(A.k("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.b(A.k("sound emitter "+l+" escapes "+j.a))}}}
A.oV.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:97}
A.oW.prototype={
$0(){return A.j(A.k("sound emitter missing: "+this.a))},
$S:6}
A.oX.prototype={
$1(a){return B.b.bg(A.r(a)).length===0},
$S:3}
A.cV.prototype={}
A.oJ.prototype={
dr(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ah(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.j1}q=A.c([],t.Fm)
p=B.c.aX(r)+1
o=B.c.aX(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.eF("tick"))
if(B.d.S(m,3)===0){B.a.l(q,new A.eF("cuckoo"))
B.a.l(q,new A.eF("bell"))}if(B.d.S(m,6)===0)B.a.l(q,new A.eF("chime"))}l.b=b
return q}}
A.eF.prototype={}
A.oT.prototype={
dr(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ah(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.j0}q=A.c([],t.op)
for(p=B.c.aX(r)+1;p<=B.c.aX(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.hS)
if(B.d.S(o,3)===1)B.a.l(q,B.hU)
if(B.d.S(o,8)===5)B.a.l(q,B.hX)
if(B.d.S(o,5)===0)B.a.l(q,B.hT)
if(B.d.S(o,7)===3)B.a.l(q,B.hY)
if(n===1)B.a.l(q,B.hV)
if(B.d.S(o,6)===4)B.a.l(q,B.hW)}m.b=b
return q}}
A.cU.prototype={}
A.vb.prototype={
$1(a){return typeof a!="number"},
$S:11}
A.oY.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.N(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.N(["lit",o.a,"examined",o.b],m,r))}return A.N(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
k7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)d.l(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.t)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l)r.l(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.t)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.x6(new A.aa(o,A.o(o).i("aa<1>")),d)){d=f.b
if(A.x6(new A.aa(d,A.o(d).i("aa<1>")),r)){d=f.c
e=!A.x6(new A.aa(d,A.o(d).i("aa<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.fW)
e=f.d
if(e<0||e>2)A.j(B.ft)
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
A.i4.prototype={
B(){return A.N(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hU.prototype={
B(){return A.N(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bh.prototype={}
A.nU.prototype={
$1(a){return this.a.q(0,A.r(a))},
$S:3}
A.dY.prototype={
v(){return"Hand."+this.b}}
A.t1.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
eg(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kg.prototype={
B(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.B[r]
o.k(0,q,s.h(0,q))}return A.N(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.M(B.B,t.oI.a(new A.pz(this)),t.jT).X(0," \xb7 ")}}
A.py.prototype={
$2(a,b){return new A.L(A.r(a),A.r(b),t.q)},
$S:98}
A.pz.prototype={
$1(a){return this.a.a.h(0,A.r(a))},
$S:99}
A.bZ.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.N(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.pg.prototype={
bX(a){t.G.a(a)
return a.a===5&&B.a.a7(B.B,new A.pn(this,a))},
eq(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bX(b))return null
s=this.e++
r=new A.bZ(s,a,A.c([A.px(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dz(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bX(b))return!1
B.a.l(s.c,A.px(b,c,B.aA))
return!0},
jY(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bX(b))return!1
s.r=A.px(b,0,B.cN)
return!0},
hx(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.L(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
mL(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.I(n,A.o(n).c)
B.a.Y(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.af(r,r.r,r.e,A.o(r).i("af<2>"));r.m();)s.push(r.d.B())
return A.N(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pn.prototype={
$1(a){var s
A.r(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.nb.prototype={
kX(a,b){if(a.a===B.aG)return new A.qd(b,a.B(),B.dz)
return new A.pr(b,!1,null,a.B(),B.dz)}}
A.hq.prototype={
B(){var s,r=this,q=A.m(t.N,t.X)
q.k(0,"kind",r.a.b)
q.k(0,"explicit",r.b)
q.k(0,"automatic",r.c)
q.k(0,"fallback",!1)
q.k(0,"rejected",r.f)
q.k(0,"aliasUsed",r.w)
s=r.r
if(s!=null)q.k(0,"rejectionReason",s)
s=r.x
if(s!=null)q.k(0,"aliasReason",s)
return q}}
A.nc.prototype={
ck(a){var s,r,q,p=null,o=a==null?p:B.b.bg(a).toLowerCase()
if(o==null||o.length===0)return B.e9
s=o!=="pixeldart"
if(!s||o==="next"||o==="auto"||o==="legacy"){s=!s||o==="next"
r=o==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':p
return new A.hq(B.aG,s,o==="auto",!1,p,r,q)}return new A.hq(B.aG,!1,!1,!0,'unsupported renderer query "'+o+'"; use pixeldart',!1,p)}}
A.ps.prototype={}
A.pr.prototype={
gbz(){var s=this.b.gbz(),r=s.ha(this.e)
return r},
c5(){if(this.f===B.dA)throw A.b(A.k("legacy backend is disposed"))
this.b.c5()
this.f=B.z},
bf(a,b){if(a<=0||b<=0)throw A.b(A.w("legacy surface size must be positive",null))
if(this.f!==B.z)A.j(A.k("legacy backend is not ready"))
this.b.bf(a,b)},
bp(a){if(this.f!==B.z)A.j(A.k("legacy backend is not ready"))
B.j.ab(A.N(["backend","legacy","interpolation",0,"facts",A.ma(a.a.a)],t.N,t.X),null)
this.b.bp(a)},
dF(a){if(this.f!==B.z)A.j(A.k("legacy backend is not ready"))
B.j.ab(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.qe.prototype={}
A.qd.prototype={
gbz(){var s=this.b.gbz(),r=s.ha(this.c)
return r},
c5(){if(this.d===B.dA)throw A.b(A.k("pixeldart backend is disposed"))
this.b.c5()
this.d=B.z},
bf(a,b){if(this.d!==B.z)A.j(A.k("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.b(A.w("pixeldart surface size must be positive",null))
this.b.bf(a,b)},
bp(a){var s,r=this,q="pixeldart backend is not ready",p=r.b,o=r.d
if(o===B.bB){if(p.y1){s=p.d
s===$&&A.p()
s=s.b===B.U}else s=!1
s=!s
if(s){r.d=B.z;++p.to
o=B.z}if(o===B.bB)return}if(o!==B.z)A.j(A.k(q))
B.j.ab(A.N(["backend","pixeldart","interpolation",0,"facts",A.ma(a.a.a)],t.N,t.X),null)
if(p.y1){o=p.d
o===$&&A.p()
o=o.b===B.U}else o=!1
if(o){if(r.d!==B.z)A.j(A.k(q))
r.d=B.bB
return}p.bp(a)},
dF(a){if(this.d!==B.z)A.j(A.k("pixeldart backend is not ready"))
B.j.ab(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.qf.prototype={
kj(a,b){var s,r,q,p,o,n,m
a.C()
s=B.ca.ck(a)
r=A.c([a.a,"webgl2"],t.s)
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
o=A.I(o,A.o(o).c)
B.a.Y(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.t)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.kv.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.qg.prototype={
B(){var s=this
return A.N(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.qh.prototype={
du(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<=0||d<=0)throw A.b(A.w("surface dimensions must be positive",null))
s=b.a
A:{if(B.a1===s){r=new A.f5(1080,1920)
break A}if(B.P===s){r=new A.f5(720,1280)
break A}r=new A.f5(540,960)
break A}B:{if("0.50"===c){q=0.5
break B}if("0.67"===c){q=0.67
break B}if("0.75"===c){q=0.75
break B}if("0.85"===c){q=0.85
break B}q=1
break B}p=B.c.aO(r.b*q)
q=B.c.aO(r.a*q)
o=B.c.D(a0/p,0,1)
n=B.c.D(d/q,0,1)
m=o<n?o:n
r=this.es(B.c.aO(p*m),320,a0)
q=this.es(B.c.aO(q*m),180,d)
l=s===B.a1
k=s===B.P
j=b.b.q(0,"shadows")
C:{if("msaa4"===a){p=4
break C}if("msaa2"===a||"auto"===a){p=2
break C}p=1
break C}if(j)if(l)i=3
else i=k?2:1
else i=0
if(l)h=1024
else h=k?768:512
if(l)g=64
else g=k?32:16
if(l)f=8
else f=k?4:1
if(l)e=8
else e=k?4:1
return new A.i9(b,r,q,p,i,h,g,f,e,B.eU)},
es(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.kf.prototype={}
A.qn.prototype={
mI(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b7
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b7
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.kf(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.aI()*0.1,0.9+s.aI()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aI()*0.15
p.e=(0.6+s.aI()*2.8)/0.343
p.b=16-b*11+s.aI()*6}}}
A.kI.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eN.prototype={
v(){return"RendererBackendState."+this.b}}
A.qA.prototype={}
A.kJ.prototype={}
A.qz.prototype={
i5(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.w("renderer provenance values must be non-empty",null))}},
ha(a){var s=this
return A.yq(s.a,s.c,s.d,!1,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
B(){var s,r,q,p=this,o=A.m(t.N,t.z)
o.k(0,"backend",p.a)
o.k(0,"profile",p.b)
o.k(0,"buildId",p.c)
o.k(0,"capabilities",p.d)
s=p.e
r=s!=null
o.k(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null&&p.x!=null)
o.k(0,"fallback",!1)
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
A.qB.prototype={
bf(a,b){if(a<=0||b<=0)throw A.b(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fP(a,b){var s,r,q,p,o
for(s=A.ai(this.a.d,t.rO),r=A.C(s).i("eP<1>"),s=new A.eP(s,r),s=new A.aH(s,s.gt(0),r.i("aH<a1.E>")),r=r.i("a1.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.rl.prototype={}
A.cH.prototype={
v(){return"ShaderDebugMode."+this.b},
gl3(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dy.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e9.prototype={
gfK(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aK(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aK(r,2)
else return B.c.aK(r,3)}}}
A.rm.prototype={
gbe(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bn,p)
s=B.bn[p]
p=this.f
p===$&&A.p()
r=A.C(p)
q=r.i("F<1>")
p=A.I(new A.F(p,r.i("l(1)").a(new A.rp(s)),q),q.i("n.E"))
return p},
gcI(){var s,r=this.gbe(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
mk(){var s,r,q,p,o
if(this.b===4)this.e=B.aJ
else for(s=this.gbe(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
mi(){var s,r,q,p
this.e=B.aJ
s=this.f
s===$&&A.p()
r=0
for(;r<36;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
H(a){var s,r,q=this.f
q===$&&A.p()
s=A.C(q)
r=A.bu(new A.F(q,s.i("l(1)").a(new A.ro(a)),s.i("F<1>")),t.W)
q=r==null?null:r.y
return q==null?1:q},
aP(a){var s,r,q=this.f
q===$&&A.p()
s=A.C(q)
r=A.bu(new A.F(q,s.i("l(1)").a(new A.rn(a)),s.i("F<1>")),t.W)
q=r==null?null:r.z
return q!==!1}}
A.rp.prototype={
$1(a){return t.W.a(a).d===this.a},
$S:18}
A.ro.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:18}
A.rn.prototype={
$1(a){return t.W.a(a).a===this.a},
$S:18}
A.bS.prototype={
v(){return"SleepQuality."+this.b}}
A.bB.prototype={
v(){return"SleepLocation."+this.b}}
A.fS.prototype={}
A.nM.prototype={
cZ(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hM(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
i.push(A.N(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.N(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nN.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:101}
A.nO.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:102}
A.k7.prototype={
v(){return"InteractionType."+this.b}}
A.eZ.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.t6.prototype={}
A.eY.prototype={}
A.jD.prototype={}
A.p4.prototype={}
A.p8.prototype={
e6(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.P(p,new A.p9())
return p},
kr(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.mN
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga1(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gV(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eY(B.aM,r)
s=r.a
o=B.a.gV(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gV(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eY(B.e_,r)
return new A.eY(B.bW,r)},
jq(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jD(e,!1,B.mM,null)
s=p.d===c
r=this.kr(p,d)
q.mL(e)
return new A.jD(e,s,r,r.a===B.aM&&s?'The world says "'+d.c+'". The entry says "'+B.a.gV(p.c).p(0)+'".':null)},
kY(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aM)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.p4(B.a.gV(s.c).p(0)+" but "+A.x(a.f))}}
A.p9.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.F(s.a(b).a,a.a)},
$S:15}
A.cn.prototype={
v(){return"RuptureStep."+this.b}}
A.qE.prototype={}
A.d_.prototype={}
A.qF.prototype={
geh(){var s=B.br.h(0,this.a)
return s==null?0:s},
hQ(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.cY
r=A.wT(b)
s=q.c
B.a.L(s)
B.a.I(s,r)
B.a.L(q.d)
q.a=B.aH
q.b=0
q.e=!1
return A.c([B.eD],t.xB)},
dq(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.cY
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.D))break
A:{q=l.a
p=B.br.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a2)l.jN(s)
p=l.b
o=B.br.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.d_())
if(q===B.a2){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.eC)}else{p=q.a+1
if(!(p<7))return A.d(B.cW,p)
l.a=B.cW[p]
l.b=0
B.a.l(s,new A.d_())}}}return A.ai(s,t.F3)},
B(){var s=this,r=t.N
return A.N(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ai(s.c,r),"extinguishedMantles",A.ai(s.d,r),"completed",s.e],r,t.z)},
jN(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aX(l.b/l.geh()*A.ai(s,r).length),0,A.ai(s,r).length)
p=l.d
for(;;){o=A.ap(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.ap(s,!1,r)
o.$flags=3
n=o
o=A.ap(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.d_())}}}
A.jX.prototype={
gek(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
gkZ(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))}}
A.eX.prototype={
B(){var s=this
return A.N(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.t2.prototype={
dE(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aZ(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.uP.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.D(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.eX(r,q,A.A9(B.c.aK(s,2)),A.A9(B.c.aK(12-(r-1)*0.11000000000000001,2)))},
$S:103}
A.pS.prototype={
aY(a,b){var s=this.b
if(s.R(a))s=s.h(0,a)===b
else s=!1
return s},
k5(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("H<1,2>")
k=A.I(new A.H(k,j),j.i("n.E"))
B.a.P(k,new A.pU())
j=t.N
k=A.wj(k,j,j)
s=this.b
r=A.o(s).i("H<1,2>")
s=A.I(new A.H(s,r),r.i("n.E"))
B.a.P(s,new A.pV())
s=A.wj(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.o(q).i("H<1,2>")
q=A.I(new A.H(q,p),p.i("n.E"))
B.a.P(q,new A.pW())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.t)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.N(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.N(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pU.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:17}
A.pV.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:17}
A.pW.prototype={
$2(a,b){var s=t.gJ
return B.b.F(s.a(a).a,s.a(b).a)},
$S:105}
A.cP.prototype={
B(){var s=this
return A.N(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bw.prototype={
B(){var s=this
return A.N(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.qb.prototype={
e4(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aY("ashworth.compact","accepted"))B.a.l(r,B.kq)
if(q.aY(s,"taken"))B.a.l(r,B.ku)
else if(q.aY(s,"left"))B.a.l(r,B.kr)
if(q.aY("sylvia.certificate","granted"))B.a.l(r,B.kt)
if(q.aY("residue.coal","cellar"))B.a.l(r,B.kp)
if(q.aY("telegram.08","read"))B.a.l(r,B.ko)
if(q.aY("truth.shawl","home"))B.a.l(r,B.kn)
if(q.aY("sowerby.paraffin","received"))B.a.l(r,B.ks)
if(q.aY("inspector.proclamation","acknowledged"))B.a.l(r,B.km)
return r},
hg(a){var s=this.e4(),r=A.C(s),q=r.i("F<1>")
s=A.I(new A.F(s,r.i("l(1)").a(new A.qc(a)),q),q.i("n.E"))
return s}}
A.qc.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:32}
A.rv.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fU(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.jT(q,r.b))}s=A.fU(e.r)
q=A.fU(e.w)
p=A.fU(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.H(n,A.o(n).i("H<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.R(l.b);i.m();){h=i.gn()
j.push(A.N(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.H(m,A.o(m).i("H<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.m(c,b)
for(m=e.ax,m=new A.H(m,A.o(m).i("H<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.N(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
jT(a,b){var s,r=A.fU(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fU(q.bF(0,new A.rw(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gW(s))r.k(0,"_ambient",A.fU(s.bF(0,new A.rx(),t.S,t.z)))
return r}}
A.rw.prototype={
$2(a,b){return new A.L(A.e(a),t.BX.a(b).B(),t.pr)},
$S:107}
A.rx.prototype={
$2(a,b){return new A.L(A.e(a),t.vw.a(b).B(),t.pr)},
$S:108}
A.eW.prototype={
B(){return A.N(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eV.prototype={
B(){return A.N(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.ir.prototype={
B(){var s=t.N
return A.N(["field",this.a,"value",this.b],s,s)}}
A.ld.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.N(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eM.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gW(s))q.k(0,"effects",s)
return q}}
A.d6.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gW(s))q.k(0,"when",s)
return q}}
A.ry.prototype={
cb(){var s=0,r=A.bL(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$cb=A.bN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.as(A.bX(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$cb)
case 6:n=b
j=t.N
s=7
return A.as(A.bX(A.a(n.text()),j),$async$cb)
case 7:m=b
l=A.G6(m)
i=J.aU(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aU(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aU(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aU(l,"documents")
i.toString
h.a(i)
i=J.aU(l,"street")
i.toString
h.a(i)
i=J.aU(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aU(l,"nights")
i.toString
h.a(i)
i=J.aU(l,"endings")
i.toString
o.w=h.a(i)
i=J.aU(l,"records")
i.toString
o.x=h.a(i)
i=J.aU(l,"cues")
i.toString
h.a(i)
i=J.aU(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aU(l,"reactions"))){g=J.aU(l,"reactions")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.m(j,t.z)
o.Q=h.a(g)
if(i.b(J.aU(l,"variants"))){g=J.aU(l,"variants")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.m(j,t.z)
o.as=h.a(g)
if(i.b(J.aU(l,"residues"))){g=J.aU(l,"residues")
i=g==null?i.a(g):g
j=A.aM(i,j,t.z)}else j=A.m(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.al(e)
j=A.x(k)
throw A.b("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$cb,r)},
hf(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().cT(0,new A.rz())
r=p.$ti
q=t.N
return A.wj(new A.cC(p,r.i("L<h,h>(1)").a(new A.rA()),r.i("cC<1,L<h,h>>")),q,q)}return null},
e5(a,b){var s=this.hf(a)
return s==null?null:s.h(0,b)},
hj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.p()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.c([],t.kv)
for(o=J.R(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.m(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.r(i.b))}B.a.l(p,new A.eM(A.r(m.h(0,"id")),A.r(m.h(0,"label")),A.r(m.h(0,"reply")),A.aY(k,n,n)))}if(p.length<2)return g
return new A.ld(r,a,b,c,d,A.ai(p,t.Y))},
hi(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.aC(p)||o!==B.c.aC(o))return n
return new A.eW(B.c.aC(p),B.c.aC(o))},
hh(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.aC(p)||typeof o!="string"||typeof n!="string")return m
return new A.eV(B.c.aC(p),o,n)},
mN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.H(b4,A.o(b4).i("H<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.du(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.r(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("ck<1>"),l=new A.ck(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hi(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.ck(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hh(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.af(b4,b4.r,b4.e,A.o(b4).i("af<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hj(A.r(d.h(0,"visitor")),B.c.aC(A.a4(d.h(0,"day"))),A.r(d.h(0,"tier")),B.c.aC(A.a4(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.p()
b4=new A.af(b4,b4.r,b4.e,A.o(b4).i("af<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.r(r.b))}s=A.r(d.h(0,"id"))
b2.k(0,s,new A.d6(s,A.r(d.h(0,"target")),A.r(d.h(0,a2)),A.aY(b,a5,a5)))}b4=a1.at
b4===$&&A.p()
b4=new A.H(b4,A.o(b4).i("H<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.p()
b4=new A.H(b4,A.o(b4).i("H<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.R(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.ir(A.r(a0.h(0,"field")),A.r(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rv(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.rz.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:109}
A.rA.prototype={
$1(a){t.AC.a(a)
return new A.L(A.r(a.a),A.r(a.b),t.q)},
$S:110}
A.jl.prototype={
bC(a,b,c){var s=B.b.bg(a),r=B.b.bg(c)
if(r.length===0)return""
if(b||this.a===B.bY)return s.length===0?r:s+": "+r
if(this.a===B.bX)return r
return s.length===0?r:s+": "+r},
fJ(a,b){return this.bC(a,!1,b)}}
A.w9.prototype={}
A.cN.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dM.prototype={
bY(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dM(q,p,o,n,m)},
kR(a){var s=null
return this.bY(s,s,s,a,s)},
kV(a){var s=null
return this.bY(s,s,s,s,a)},
kN(a){var s=null
return this.bY(s,s,a,s,s)},
kL(a){var s=null
return this.bY(s,a,s,s,s)},
kv(a){var s=null
return this.bY(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.N(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mx.prototype={
$1(a){return a==null?null:A.Q(a)},
$S:111}
A.mv.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:33}
A.mw.prototype={
$0(){return A.j(B.ha)},
$S:6}
A.mI.prototype={
bL(a,b){var s,r=this,q=r.e.fJ(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aM(q)
A.e(A.a(v.G.window).setTimeout(A.zw(new A.mK(r)),7000))},
aM(a){var s,r,q=this
if(!q.c||B.b.bg(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.e(A.a(v.G.window).setTimeout(A.zw(new A.mJ(q,s)),4200))}}
A.mK.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:113}
A.mJ.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cw.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cO.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.df.prototype={
v(){return"AudioReverbMode."+this.b}}
A.de.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dN.prototype={
cH(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dN(r,q,p,a==null?s.e:a)},
kK(a){return this.cH(null,null,a,null)},
kB(a){return this.cH(null,a,null,null)},
kP(a){return this.cH(null,null,null,a)},
kA(a){return this.cH(a,null,null,null)},
B(){var s=this
return A.N(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mV.prototype={
$1$2(a,b,c){return B.a.aW(c.i("n<0>").a(a),new A.mW(b,c),new A.mX(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:114}
A.mW.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.mX.prototype={
$0(){return A.j(A.a3("unsupported audio option: "+A.x(this.a),null,null))},
$S:6}
A.ne.prototype={
mH(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.fJ(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.nh.prototype={
$1(a){return this.a.$0()},
$S:2}
A.nl.prototype={
$1(a){return this.a.$1(A.Q(this.b.checked))},
$S:2}
A.nk.prototype={
$1(a){var s=A.eK(A.r(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.nj.prototype={
$1(a){A.r(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dP.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dQ.prototype={
v(){return"BrushComponentState."+this.b}}
A.b4.prototype={
gjW(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bg(s.a).length===0||B.b.bg(s.c).length===0)throw A.b(B.h0)
if(s.e===B.c8&&s.b!==B.c7)throw A.b(B.fD)}}
A.nn.prototype={
lf(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.D(a>=r+c?q.e=a-c+1:r,0,s)},
cV(a,b){if(b<=0){this.f=0
return}this.f=B.d.D(this.f+a,0,Math.max(0,b-1))},
bB(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.p()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cY(o+c,n)
l=new A.cY(s+p,n)
k=s-p
j=new A.cY(k,r-c)
i=new A.cY(k-c,r)
h=new A.cY(q-p,r)
g=new A.cY(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.eL(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eL(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aV(a,b,c,d,e,f,g,h,i){return this.bB(a,b,c,d,e,!0,f,g,h,i)},
l4(a,b,c,d,e,f,g,h,i){return this.bB(a,b,14,c,d,e,f,g,h,i)},
l9(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eg()
s.bN(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aI()-0.5)*8
l=s.aI()
k=s.aI()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fF(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eK(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eK(0,0,c)
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
l7(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a4(A.a(q.measureText(a.toUpperCase())).width)+70)
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
l6(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aV(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.p()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a4(A.a(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bB(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gmz()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.jV(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bd(i,0,new A.no(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.c.aX((a5+a2-a1)/a2))
d1=d4.f
c7.lf(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.D(c7.e,0,a7)
c7.e=j
a8=Math.min(c,j+a6)
l.save()
l.beginPath()
j=a0*0.5
l.rect(p-j-12,a3-16,a0+24,Math.max(1,a5+20))
l.clip()
l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="bottom"
l.fillText("YOUR RESPONSE",p,a3-4)
l.restore()
for(a9=c7.e,g=a0-72,f=c7.d,c=a1*0.5,b0=d4.e;a9<a8;a9=b2){if(!(a9>=0&&a9<i.length))return A.d(i,a9)
b1=i[a9]
b2=a9+1
b3=a3+(a9-c7.e)*a2+c
b4=d1===a9
b5=b0===a9
b6=!b4
b7=p+(!b6||b5?18:0)
b8=b7-j
b9=Math.max(a1,40)
B.a.l(f,new A.fq("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aV(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.fF(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bR(b1,g),c1+22,b3)
l.restore()}l.restore()
if(a7>0){l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="middle"
if(c7.e>0)l.fillText("\u25b2 MORE",p+j-28,a3-8)
if(c7.e<a7)l.fillText("\u25bc MORE",p+j-28,a4+8)
l.restore()}}else if(d1&&d4.b.length!==0){c3=s?104:118
c4=s?28:30
c5=p+j-c3*0.62
c6=o+g-c4*0.72
B.a.l(c7.d,new A.fq("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aV("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
l5(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.d(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bB(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
m=this.b
m===$&&A.p()
m.save()
l=n?"#f5f0e6":"#c49a45"
m.fillStyle=l
m.font='bold 11px "Courier New", monospace'
m.textAlign="center"
m.textBaseline="middle"
m.fillText(this.bR("["+p.a+"] "+p.b,122),o,r)
m.restore()}},
l8(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
if(c7<=0.001)return
s=Math.sin(c7*3.141592653589793*0.5)
r=Math.min(c9*0.92,860)
q=Math.min(c8*0.88,620)
p=c9+r*0.6
o=p+(c9*0.5-p)*s
n=c8*0.5
c7=c0.b
c7===$&&A.p()
c7.save()
c7.fillStyle="rgba(10, 8, 12, "+A.x(0.75*s)+")"
c7.fillRect(0,0,c9,c8)
c0.aV(c2,3,18,c1,q,-0.025,r,o,n)
c0.l9(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c0.aV(c3,2,8,c2,42,-0.06,Math.min(r*0.85,560),o,k)
c7.save()
c7.fillStyle="#f5f0e6"
c7.font='bold 16px "Cinzel", serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.shadowColor="rgba(0, 0, 0, 0.85)"
c7.shadowBlur=4
c7.fillText("\u25c6 SHADER LAB & POST-PROCESSING SUITE \u25c6",o,k)
c7.restore()
j=r-60
i=j/5
h=l+75
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bn[g]
e=d0.b===g
d=l+i*(g+0.5)
c=e?c4:c5
b=e?c3:c6
c0.bB(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
default:c=null}c7.save()
a=e?"#0c0a0e":c3
c7.fillStyle=a
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(c,d,h)
c7.restore()}a0=h+36
if(d0.b===4){a1=a0+70+20
c0.aV(c4,2.5,10,c5,140,-0.02,r-80,o,a1)
c7.save()
c7.fillStyle="#c49a45"
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText("ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [\u2190 / \u2192] TO CYCLE):",o,a1-35)
c7.fillStyle="#f5f0e6"
c7.font='bold 22px "Cinzel", serif'
c7.shadowColor="rgba(0, 0, 0, 0.85)"
c7.shadowBlur=6
c7.fillText(d0.e.gl3().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbe()
a3=n+m-52
a4=Math.max(1,a3-a0)
a5=Math.max(1,B.c.aX((a4+52-44)/52))
a6=Math.max(0,a2.length-a5)
l=B.d.D(c0.f,0,a6)
c0.f=l
a7=Math.min(a2.length,l+a5)
c7.save()
c7.beginPath()
l=r*0.5
c7.rect(o-l+24,a0,r-48,a4)
c7.clip()
for(g=c0.f,a8=r-80,j=a8*0.5;g<a7;++g){if(!(g>=0&&g<a2.length))return A.d(a2,g)
a9=a2[g]
e=d0.c===g
b0=a0+(g-c0.f)*52+22
b1=o+(e?12:0)
c=e?c5:c1
b=e?c4:c6
c0.bB(b,e?2.2:1,6,c,44,e,-0.02,a8,b1,b0)
if(e)c0.fF(!0,g+1,20,b1-j+20,b0)
c7.save()
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 14px "Cinzel", serif'
c7.textAlign="left"
c7.textBaseline="middle"
b2=e?38:18
c=a9.e
b=c?122:250
c7.fillText(c0.bR(a9.b.toUpperCase(),a8-b),b1-j+b2,b0)
b3=b1+j-20
if(c){b4=a9.z
c=b3-37
b=b4?c2:"#0c0a0e"
c0.l4(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
c7.fillStyle="#f5f0e6"
c7.font='bold 12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText(a9.gfK(),c,b0)}else{b5=b3-80-80
c7.fillStyle="#0c0a0e"
c=b5-80
b=b0-4
c7.fillRect(c,b,160,8)
b6=a9.f
b7=a9.r
b8=B.c.D((a9.y-b6)/(b7-b6),0,1)
a=e?c4:c2
c7.fillStyle=a
b9=160*b8
c7.fillRect(c,b,b9,8)
c7.fillStyle="#f5f0e6"
c7.fillRect(c+b9-3,b0-7,6,14)
c7.fillStyle="#8c887e"
c7.font='10px "Courier New", monospace'
c7.textAlign="right"
c7.textBaseline="middle"
c7.fillText(B.c.aK(b6,1)+" ",c-4,b0)
c7.textAlign="left"
c7.fillText(" "+B.c.aK(b7,1),b5+80+4,b0)
a=e?"#ffd54f":c3
c7.fillStyle=a
c7.font='bold 13px "Courier New", monospace'
c7.textAlign="right"
c7.textBaseline="middle"
c7.fillText(a9.gfK(),b3,b0)}c7.restore()}c7.restore()
if(a6>0){c7.save()
c7.fillStyle="#ffd54f"
c7.font='bold 10px "Cinzel", serif'
c7.textAlign="right"
c7.textBaseline="middle"
if(c0.f>0)c7.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c0.f<a6)c7.fillText("\u25bc SCROLL DOWN",o+l-28,a3+8)
c7.restore()}}c7.save()
c7.fillStyle="#8c887e"
c7.font='12px "Cinzel", sans-serif'
c7.textAlign="center"
c7.textBaseline="middle"
c7.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Coarse  \u2022  [Q / E] Fine (1/5)  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,n+m-24)
c7.restore()
c7.restore()},
eL(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eK(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
jV(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a4(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bR(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.a4(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.a4(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.b.G(r,0,s-1)}return q?"...":r+"..."}}
A.no.prototype={
$2(a,b){var s
A.br(a)
A.r(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.a4(A.a(s.measureText(b)).width))},
$S:115}
A.fu.prototype={
gke(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aC(r)
o.k(0,q,p.gO(r)?"":p.gU(r))}return o},
bw(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.N(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.br(r)
q=n.h(0,i)
q.toString
A.br(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
return A.fv(null,a,A.Q(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.br(r)
q=n.h(0,i)
q.toString
A.br(q)
p=n.h(0,"invertX")
p.toString
A.Q(p)
o=n.h(0,"invertY")
o.toString
A.Q(o)
m=n.h(0,h)
m.toString
A.Q(m)
l=k.gke()
return A.fv(l,null,m,r,p,o,s,q)},
dw(a){var s=null
return this.bw(a,s,s,s,s,s)},
kH(a){var s=null
return this.bw(s,s,s,a,s,s)},
kI(a){var s=null
return this.bw(s,s,s,s,a,s)},
kE(a){var s=null
return this.bw(s,a,s,s,s,s)},
kF(a){var s=null
return this.bw(s,s,a,s,s,s)},
kW(a){var s=null
return this.bw(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fo)
p=this.r
if(p.gJ().M(0,new A.nD()))throw A.b(B.h3)
if(p.gJ().M(0,new A.nE()))throw A.b(B.fS)
p=p.gaD()
o=A.o(p)
s=o.i("hC<n.E,h>")
r=s.i("F<n.E>")
q=A.I(new A.F(new A.hC(p,o.i("n<h>(n.E)").a(new A.nF()),s),s.i("l(n.E)").a(new A.nG()),r),r.i("n.E"))
if(A.hT(q,A.C(q).c).a!==q.length)throw A.b(B.fr)},
B(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.ap(r.b,!0,p))}return A.N(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nD.prototype={
$1(a){t.yx.a(a)
return J.xD(a.b,new A.nC(a))},
$S:34}
A.nC.prototype={
$1(a){var s
A.r(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xO(a)
else s=!1
return s},
$S:3}
A.nE.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.xD(a.b,B.dE.gap(B.dE))},
$S:34}
A.nF.prototype={
$1(a){return t.a.a(a)},
$S:117}
A.nG.prototype={
$1(a){return A.r(a).length!==0},
$S:3}
A.nB.prototype={
$1(a){return typeof a=="string"},
$S:11}
A.dO.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.eu.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dg.prototype={}
A.jE.prototype={
bV(a){var s=this
if(!s.a.r.R(a))return new A.dg(B.c4,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.ea},
kk(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aR
if(!A.xO(a)){p.c=p.b=null
return new A.dg(B.c6,B.dF.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xF(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dg(B.aS,a+" is already bound to "+s)}return p.ih(a)},
dV(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aR
switch(a.a){case 2:m.c=m.e=m.d=null
return B.eb
case 1:s=A.wK(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.x2(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.xf(r,k))
m.a=m.a.dw(s)
break
case 0:s=A.wK(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.kV(p,1,null,A.C(p).c)
o=p.$ti
p=new A.aH(p,p.gt(0),o.i("aH<a1.E>"))
o=o.i("a1.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.xf(r,k)}else{r=s.h(0,j)
r.toString
r=A.x2(A.xf(r,k),q)}s.k(0,j,r)
m.a=m.a.dw(s)
break}m.c=m.e=m.d=null
return B.c2},
ih(a){var s,r,q=this,p=q.b
if(p==null)return B.aR
s=A.wK(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.x2(r,a))
q.a=q.a.dw(s)
q.b=null
return B.c2}}
A.hw.prototype={
hZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jE(f.w)
s=f.b
s.className=A.r(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.ni(a,B.ek,1)))
A.a(s.appendChild(A.B(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.B(a,"div",c,e)
f.eo(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.eo(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.d2(a,r,"invertX","Invert horizontal look")
f.d2(a,r,"invertY","Invert vertical look")
f.d2(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.B(a,"div",c,e)
for(p=B.jp.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fv(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mu(l)?"unbound":J.xH(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dR(a,new A.b4("settings.controls.bind."+m,B.c7,n,h,B.p),new A.nz(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.B(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.B(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.dm()
A.a(s.appendChild(A.dR(a,B.el,new A.nA(f),e)))},
fW(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.eO(this.x.kk(A.r(a.code)))},
eO(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aS?B.ep:B.p
p=o.Q.h(0,r)
if(p!=null)A.wb(p,q)}n=a.a
if(n===B.aS)o.jE()
else if(n===B.c5){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dm()}else{o.d5()
o.ax=null}},
jE(){var s,r,q,p,o
this.d5()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.im[r]
p=A.E(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dR(p,new A.b4("settings.controls.resolve."+o,B.F,o,"resolve key binding conflict",B.p),new A.ny(this,q),null)))}},
d5(){var s,r=this.at
if(r==null)return
while(A.E(r.firstChild)!=null){s=A.E(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
dm(){var s,r,q,p
for(s=this.Q,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mu(p)?"unbound":J.xH(p," / ")
r.textContent=q
A.wb(r,B.p)}},
eo(a,b,c,d,e,f){var s,r=A.B(a,"label","setting-row",null)
A.a(r.appendChild(A.B(a,"span",null,d)))
s=A.Bg(a,new A.b4("settings.controls."+c,B.en,d,null,B.p),f,e,new A.nw(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d2(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.Bh(a,new A.b4("settings.controls."+c,B.eo,d,null,B.p),!1,new A.nx(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.B(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eM(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdM(a){this.f=t.pf.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.nz.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.bV(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.c3){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.wb(q,B.c8)}p.d5()
return null},
$S:0}
A.nA.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.ny.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.eO(r.dV(this.b))},
$S:0}
A.nw.prototype={
$1(a){var s=this.a,r=s.w
s.eM(this.b==="horizontalSensitivity"?r.kF(a):r.kW(a))},
$S:118}
A.nx.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kH(a)
break A}if("invertY"===q){s=r.w.kI(a)
break A}s=r.w.kE(a)
break A}r.eM(s)},
$S:8}
A.nH.prototype={
i_(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.B(s,"h1","journal-title","credits")))
r=A.B(s,"p","credits-body",null)
p.f!==$&&A.aX()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.B(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.B(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.X(new A.nI(p)))
A.a(o.appendChild(q))}}
A.nI.prototype={
$1(a){return this.a.a6()},
$S:2}
A.nQ.prototype={
i1(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.B(a,o,"door-speaker",p)
q.b!==$&&A.aX()
q.b=s
r=A.B(a,o,"door-line",p)
q.c!==$&&A.aX()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.B(a,o,"door-choice-status",p)
q.d!==$&&A.aX()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.B(a,o,"door-cite-list",p)
q.f!==$&&A.aX()
q.f=r
s=A.B(a,o,"door-cite-result",p)
q.r!==$&&A.aX()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.B(a,"button","door-continue","continue")
q.e!==$&&A.aX()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.X(new A.nR(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.X(new A.nS(q,a)))
A.a(A.E(a.body).appendChild(n))},
ed(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.K.bC("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.xR(B.b9)
s=r.e
s===$&&A.p()
A.a(s.style).display="none"
s=r.f
s===$&&A.p()
s.textContent=""
s=r.r
s===$&&A.p()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
ee(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.K.bC("",!0,a)
q=r.d
q===$&&A.p()
q.textContent=""
q=r.e
q===$&&A.p()
q=A.a(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.p()
s.textContent=""},
hC(a){return this.ee(a,!1)},
hE(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.p()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.p()
s.textContent=A.xR(r)},
ef(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.K.bC("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.a(s.style).display=""},
hB(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.p()
s.textContent=""
for(r=b.length,q=A.u3,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nT(o,this)
if(typeof o=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.hk()]=o
m.addEventListener("click",l)
A.a(s.appendChild(m))}},
slM(a){this.w=t.Z.a(a)},
slL(a){this.x=t.vR.a(a)}}
A.nR.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:45}
A.nS.prototype={
$1(a){var s,r,q,p,o,n,m
A.a(a)
s=this.a
if(!s.y||A.r(a.code)!=="Tab")return
r=A.c([],t.sL)
q=s.e
q===$&&A.p()
if(A.r(A.a(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.p()
p=A.a(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.e(p.length);++o){n=A.E(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.E(this.b.activeElement)
if(A.Q(a.shiftKey)){if(m===B.a.gU(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gV(r).focus()}}else if(m===B.a.gV(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gU(r).focus()}},
$S:121}
A.nT.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:45}
A.nW.prototype={
i2(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.B(s,"h1","journal-title",null)
o.f!==$&&A.aX()
o.f=r
q=A.B(s,"div","ending-copy",null)
o.r!==$&&A.aX()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.B(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.X(new A.nX(o)))
A.a(n.appendChild(p))},
hD(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.p()
s.textContent=a.a.b
s=m.r
s===$&&A.p()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bG()},
slQ(a){this.w=t.Z.a(a)}}
A.nX.prototype={
$1(a){var s=this.a
s.a6()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.on.prototype={
bo(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.ap(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
mG(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lp(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fs()
return!0}return!1}if(a==="Space"){s=B.a.dH(l,new A.oo())
if(s!==-1){n.cl(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.S(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.S(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cl(q)
return!0}}if(B.b.T(a,"Digit")){p=A.du(B.b.b1(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.T(a,"Numpad")){p=A.du(B.b.b1(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cl(o)
return!0}return!1},
cl(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.d(r,a)
s.$2(a,r[a])}},
fs(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lq(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fs()
return!0}this.cl(a.b)
return!0},
slK(a){this.y=t.dt.a(a)},
slP(a){this.z=t.Z.a(a)}}
A.oo.prototype={
$1(a){A.r(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.op.prototype={}
A.dm.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cQ.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cR.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dn.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dl.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dp.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.ch.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.dk.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fB.prototype={
aU(a,b,c,d,e,f,g,h,i,a0){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a0==null?s.d:a0,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a
return A.wc(j,n,k,l,r,o,q,m,i==null?s.z:i,p)},
kS(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,a,s)},
ky(a){var s=null
return this.aU(s,s,a,s,s,s,s,s,s,s)},
kG(a){var s=null
return this.aU(s,s,s,s,a,s,s,s,s,s)},
kM(a){var s=null
return this.aU(s,s,s,s,s,s,a,s,s,s)},
kT(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,s,a)},
kJ(a){var s=null
return this.aU(s,s,s,s,s,a,s,s,s,s)},
kx(a){var s=null
return this.aU(s,a,s,s,s,s,s,s,s,s)},
kQ(a){var s=null
return this.aU(s,s,s,s,s,s,s,a,s,s)},
kw(a){var s=null
return this.aU(a,s,s,s,s,s,s,s,s,s)},
kC(a){var s=null
return this.aU(s,s,s,a,s,s,s,s,s,s)},
B(){var s=this
return A.N(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z],t.N,t.K)}}
A.oq.prototype={
$1$2(a,b,c){var s
A.A8(c,t.Ct,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.a3("invalid gameplay setting: "+a,null,null))
return B.a.aW(b,new A.or(s,c),new A.os(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:122}
A.or.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.os.prototype={
$0(){return A.j(A.a3("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cx.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dX.prototype={
bv(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dX(s.a,r,q,p,o,n,m)},
dv(a){var s=null
return this.bv(a,s,s,s,s,s)},
fB(a){var s=null
return this.bv(s,a,s,s,s,s)},
fC(a){var s=null
return this.bv(s,s,s,a,s,s)},
kO(a){var s=null
return this.bv(s,s,s,s,a,s)},
kD(a){var s=null
return this.bv(s,s,a,s,s,s)},
kU(a){var s=null
return this.bv(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.j8,q))throw A.b(A.a3("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.iu,q))throw A.b(A.a3("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.jb,q))throw A.b(A.a3("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.j5,q))throw A.b(A.a3("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.N(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.oC.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:36}
A.oD.prototype={
$0(){return A.j(B.fI)},
$S:6}
A.oE.prototype={
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.ow.prototype={}
A.ox.prototype={}
A.hJ.prototype={
i3(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.a(l.appendChild(A.B(a,"h1","journal-title","Graphics")))
A.a(l.appendChild(A.B(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.B(a,"div","settings-grid",n)
r=t.N
o.bO(a,s,"preset","quality preset",A.N(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bO(a,s,"renderScale","render scale",A.N(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bO(a,s,"frameTarget","frame target",A.N(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bO(a,s,"antialiasing","anti-aliasing",A.N(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bO(a,s,"textureQuality","texture quality",A.N(["high","High","medium","Medium","low","Low"],r,r))
q=A.B(a,"label","setting-toggle",n)
r=A.a(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.X(new A.oA(o)))
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
p.addEventListener("click",A.X(new A.oB(o)))
A.a(l.appendChild(p))},
bO(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.a(s.appendChild(A.B(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.H(e,A.o(e).i("H<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.X(new A.oz(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
eR(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
cm(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.X(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
sdM(a){this.f=t.CA.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.oA.prototype={
$1(a){var s=this.a
s.eR(s.z.fB(A.Q(s.x.checked)))},
$S:1}
A.oB.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a6()},
$S:1}
A.oz.prototype={
$1(a){var s,r=A.r(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.z.fC(B.a.ae(B.cV,new A.oy(r)))
break A}if("renderScale"===p){s=q.z.kO(r)
break A}if("frameTarget"===p){s=q.z.kD(r)
break A}if("antialiasing"===p){s=q.z.dv(r)
break A}if("textureQuality"===p){s=q.z.kU(r)
break A}s=q.z
break A}q.eR(s)},
$S:1}
A.oy.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:36}
A.jm.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ce.prototype={}
A.oF.prototype={
he(a,b,c){if(c)return B.iJ
if(b&&a!=null)return A.c([new A.ce("E","Examine "+a,!0),new A.ce("TAB","Journal",!1),new A.ce("CAPS","Shader Lab",!1)],t.sa)
return B.jl}}
A.oG.prototype={
i4(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.B(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.B(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.B(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.B(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.X(new A.oH(this)))
A.a(p.appendChild(r))}}
A.oH.prototype={
$1(a){return this.a.a6()},
$S:2}
A.ph.prototype={
bG(){var s,r=this
r.hT()
s=r.r.a-1
if(s<1)s=1
r.CW=r.ex(r.CW,s)
r.jt()
r.f3()},
ip(){var s,r=this,q=r.a,p=A.B(q,"div","page-turn",null),o=A.B(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.X(new A.pi(r)))
s=A.B(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.X(new A.pj(r)))
q=A.B(q,"span","right-day-label",null)
r.Q!==$&&A.aX()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fk(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ex(s.CW+a,r)
s.f3()},
ex(a,b){if(a<1)return 1
if(a>b)return b
return a},
jt(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.p()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.p()
s.textContent=""
for(s=j.w.e6(),r=s.length,q=A.u3,p=j.a,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
m=B.a.gV(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.pk(j,n,l)
if(typeof m=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.hk()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
f3(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("af<2>"),n=new A.af(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.P(r,new A.pl())
j.f2(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.af(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.P(s,new A.pm())
j.f2(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.a(i.style).setProperty("width",B.c.aK(k*100,1)+"%")},
f2(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r)A.a(a.appendChild(this.iP(b[r])))},
iP(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.B(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.c.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.j3(m,!1)
l.className=A.r(l.className)+" margin"
A.a(j.appendChild(l))}return j},
j3(a,b){var s=b?"hand-line struck":"hand-line",r=A.B(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.pi.prototype={
$1(a){return this.a.fk(-1)},
$S:2}
A.pj.prototype={
$1(a){return this.a.fk(1)},
$S:2}
A.pk.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.pl.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:15}
A.pm.prototype={
$2(a,b){var s=t.g
return B.d.F(s.a(a).a,s.a(b).a)},
$S:15}
A.cY.prototype={}
A.fq.prototype={}
A.q0.prototype={
gmz(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.G(s,0,B.c.aC(B.c.D(r*q,0,r)))}}
A.i3.prototype={
aS(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.E(this.a.body).appendChild(s))},
bG(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.r(n.className),"open"))return
s=$.q1
if(s!=null&&s!==o)s.a6()
$.q1=o
r=o.a
o.d=A.E(r.activeElement)
A.pe(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.X(o.gjl())
o.e=q
r.addEventListener("keydown",q)
p=A.zu(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a6(){var s,r,q=this,p=q.b
if(!B.b.q(A.r(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.q1===q)$.q1=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
fW(a){},
jm(a){A.a(a)
this.fW(a)
if(A.Q(a.defaultPrevented))return
if(A.r(a.code)==="Escape"){a.preventDefault()
this.a6()
return}if(A.r(a.code)==="Tab")this.jK(a)},
jK(a){var s,r=A.zu(this.b)
if(r.length===0)return
s=A.E(this.a.activeElement)
if(A.Q(a.shiftKey)){if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gV(r).focus()}}else if(s===B.a.gV(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}},
sb_(a){this.c=t.Z.a(a)}}
A.bj.prototype={
v(){return"PauseReason."+this.b}}
A.cm.prototype={
v(){return"PausePage."+this.b}}
A.e5.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.ds.prototype={
B(){var s,r=A.m(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a4(a,b){if(b==null)return!1
return b instanceof A.ds&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gN(a){return A.cE(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e4.prototype={
gfv(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bu},
B(){var s=A.m(t.N,t.X),r=this.a,q=A.C(r),p=q.i("M<1,W<h,J?>>")
r=A.I(new A.M(r,q.i("W<h,J?>(1)").a(new A.q6()),p),p.i("a1.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.C(r)
p=q.i("M<1,h>")
r=A.I(new A.M(r,q.i("h(1)").a(new A.q7()),p),p.i("a1.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.q6.prototype={
$1(a){return t.oP.a(a).B()},
$S:124}
A.q7.prototype={
$1(a){return t.wJ.a(a).b},
$S:125}
A.c3.prototype={}
A.q5.prototype={
fX(a){var s,r=this
if(r.a.gfv())return new A.c3(B.a0,r.a,null)
s=r.a
s=new A.e4(B.j7,s.b,a)
r.a=s
return new A.c3(B.dp,s,"pause.resume")},
k9(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gV(p)
q=r.a.a
q=B.a.aR(q,0,q.length-1)
p=r.a
p=new A.e4(q,p.b,p.c)
r.a=p
return new A.c3(B.dq,p,s.c)}if(q.gfv()&&r.a.b.length===0)return r.cf()
return new A.c3(B.a0,r.a,null)},
cf(){var s=this.a
if(s.a.length===0)return new A.c3(B.a0,s,null)
if(s.b.length!==0)return new A.c3(B.a0,s,null)
this.a=B.bt
return new A.c3(B.dr,B.bt,s.c)},
m5(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c3(B.a0,q.a,null)
s=q.a
r=A.I(s.b,t.wJ)
r.push(a)
s=new A.e4(s.a,r,q.a.c)
q.a=s
return new A.c3(B.dp,s,null)},
l2(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c3(B.a0,o.a,null)
s=o.a
r=s.b
q=A.C(r)
p=q.i("F<1>")
r=A.I(new A.F(r,q.i("l(1)").a(new A.q8(a)),p),p.i("n.E"))
q=o.a.c
r=new A.e4(s.a,r,q)
o.a=r
return new A.c3(B.kl,r,q)},
iI(a){var s
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
A.q8.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:126}
A.cF.prototype={
v(){return"PauseRootAction."+this.b}}
A.q9.prototype={
bi(a,b,c,d){var s=B.jB.h(0,c)
s.toString
A.a(b.appendChild(A.dR(a,new A.b4(s,B.F,d,null,B.p),new A.qa(this,c),null)))},
sm0(a){this.f=t.Z.a(a)},
sm2(a){this.r=t.Z.a(a)},
slN(a){this.w=t.Z.a(a)},
sm1(a){this.x=t.Z.a(a)},
slT(a){this.y=t.Z.a(a)},
slO(a){this.z=t.Z.a(a)},
sb4(a){this.Q=t.Z.a(a)}}
A.qa.prototype={
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
A.bR.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.qm.prototype={
hA(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bC("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qM.prototype={
i6(a){var s,r,q,p,o,n=this.b
n.className=A.r(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.ni(a,B.ej,1)))
A.a(n.appendChild(A.B(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.B(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iK[r]
p=B.d7.h(0,q)
p.toString
o=B.d6.h(0,q)
o.toString
A.a(s.appendChild(A.dR(a,new A.b4(o,B.F,p,p+" settings",B.p),new A.qN(this,q),null)))}A.a(s.appendChild(A.dR(a,B.ei,new A.qO(this),null)))
A.a(n.appendChild(s))},
slJ(a){this.f=t.hQ.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.qN.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qO.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fR.prototype={
i7(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.x(B.d7.h(0,d))+" settings",a=h.b
a.className=A.r(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.ni(a0,new A.b4("settings."+(s==null?f:s)+".heading",B.ar,b,g,B.p),2)))
A.a(a.appendChild(A.B(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.B(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.rb(h)),p=B.a.gu(B.C),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.j2(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.B(a0,"div",e,g)
for(s=s.a(new A.rc(h)),q=B.a.gu(B.C),o=new A.S(q,s,o);o.m();)A.a(j.appendChild(h.jJ(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.H)A.a(a.appendChild(h.im(a0)))
if(d===B.I)A.a(a.appendChild(h.il(a0)))
if(d===B.a_)A.a(a.appendChild(h.io(a0)))
i=A.B(a0,"div",e,g)
for(s=t.pz.a(h.giX()),q=B.a.gu(B.j9),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dR(a0,new A.b4("settings."+o+".reset."+n,B.F,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.rd(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dR(a0,new A.b4("settings."+(s==null?f:s)+".reset.all",B.F,"reset all settings","restore all settings to defaults",B.eq),new A.re(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dR(a0,new A.b4("settings."+(d==null?f:d)+".back",B.F,"return","return to settings categories",B.p),new A.rf(h),g)))},
il(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.B(a,"div","settings-grid",j),f=k.d1(a,g,"reducedMotion","reduced motion (system default)"),e=k.d1(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d1(a,g,"captions","non-speech captions"),c=A.B(a,"label",h,j)
A.a(c.appendChild(A.B(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.X(new A.r4(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.B(a,"label",h,j)
A.a(r.appendChild(A.B(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bl[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.X(new A.r5(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.B(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.X(new A.r6(k)))
A.a(g.appendChild(l))
k.k4.I(0,A.N(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.ok.k(0,"screenReaderVerbosity",q)
return g},
d1(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.X(new A.qP(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.B(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
e9(a){var s,r
this.k3=a
s=this.k4
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.c.p(r==null?1:r)}s=this.ok.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a9:r).b}},
io(a){var s,r,q,p,o=this,n=null,m="confirmations",l="setting-toggle",k=A.B(a,"div","settings-grid",n)
o.b7(a,k,"interactionMode","interaction mode",B.bk,t.bK)
o.b7(a,k,"promptDensity","prompt density",B.bo,t.dn)
o.b7(a,k,"textPacing","text pacing",B.bm,t.j_)
o.b7(a,k,"journalLayout","journal layout",B.be,t.gm)
o.b7(a,k,m,m,B.b8,t.aJ)
o.b7(a,k,"saveFeedback","save feedback",B.bf,t.mx)
o.b7(a,k,"focusLossBehavior","when the window loses focus",B.aC,t.x)
o.b7(a,k,"clockFormat","clock format",B.bb,t.vS)
s=A.B(a,"label",l,n)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=o.k2.x
r.addEventListener("change",A.X(new A.r7(o,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.B(a,"span",n,"contextual reminders")))
A.a(k.appendChild(s))
o.id=r
q=A.B(a,"label",l,n)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=o.k2.z
p.addEventListener("change",A.X(new A.r8(o,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.B(a,"span",n,"show daily objective")))
A.a(k.appendChild(q))
o.k1=p
return k},
b7(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.A8(f,t.Ct,"T","_addGameplaySelect")
f.i("D<0>").a(e)
s=A.B(a,"label","setting-row",null)
A.a(s.appendChild(A.B(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.X(new A.r2(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
hm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k2=a
for(s=f.go,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
i=j.b
h=j.a
A:{if("interactionMode"===h){g=k
break A}if("promptDensity"===h){g=l
break A}if("textPacing"===h){g=m
break A}if("journalLayout"===h){g=n
break A}if("confirmations"===h){g=o
break A}if("saveFeedback"===h){g=p
break A}if("focusLossBehavior"===h){g=q
break A}g=r
break A}i.value=g}s=f.id
if(s!=null)s.checked=a.x
s=f.k1
if(s!=null)s.checked=a.z},
im(a){var s,r,q=this,p=A.B(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bj[s].b
n.k(0,r,r)}q.cn(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.bd[s].b
n.k(0,r,r)}q.cn(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.bc[s].b
n.k(0,r,r)}q.cn(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.ba[s].b
o.k(0,n,n)}q.cn(a,p,"ducking","voice intelligibility",o)
return p},
cn(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.a(s.appendChild(A.B(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.H(e,A.o(e).i("H<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.X(new A.qU(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p2.k(0,c,r)},
hl(a){var s,r,q,p,o,n,m,l,k
this.p1=a
for(s=this.p2,s=new A.H(s,A.o(s).i("H<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eS(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.Z===r){s=a.c===B.aI
break A}if(B.I===r){s=a.c===B.a4
break A}if(B.H===r){s=a.c===B.E
break A}s=!1
break A}return s},
iY(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.Z===s){r=a===B.aI
break A}if(B.I===s){r=a===B.a4
break A}if(B.H===s){r=a===B.E
break A}r=!1
break A}return r},
jJ(a,b){var s=this,r=A.B(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.X(new A.ra(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.B(a,"span",null,b.b)))
return r},
j2(a,b,c,d,e){var s,r,q=this,p=A.B(a,"label","setting-row",null),o=A.B(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.x(e)
n.max=A.x(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.B(a,"output",null,"100%")
n.addEventListener("input",A.X(new A.r9(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aQ(e,d))
return p},
eb(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kB
r=B.c.D(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aO(r*100)+"%"},
slV(a){this.r=t.DI.a(a)},
slX(a){this.w=t.xl.a(a)},
slW(a){this.x=t.xl.a(a)},
slR(a){this.y=t.DI.a(a)},
slU(a){this.z=t.xl.a(a)},
sm4(a){this.Q=t.xl.a(a)},
sm_(a){this.as=t.Ci.a(a)},
slZ(a){this.at=t.Z.a(a)},
sb4(a){this.ax=t.Z.a(a)},
slI(a){this.ay=t.kC.a(a)},
slS(a){this.ch=t.hq.a(a)},
slH(a){this.CW=t.Cv.a(a)},
slY(a){this.cx=t.Z.a(a)}}
A.rb.prototype={
$1(a){t.gl.a(a)
return a.d===B.Q&&this.a.eS(a)},
$S:20}
A.rc.prototype={
$1(a){t.gl.a(a)
return a.d===B.ai&&this.a.eS(a)},
$S:20}
A.rd.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.re.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.rf.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a6()},
$S:0}
A.r4.prototype={
$1(a){var s=this.a,r=s.k3,q=A.eK(A.r(this.b.value))
r=r.kV(q==null?1:q)
s.k3=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.r5.prototype={
$1(a){var s=this.a,r=s.k3.kR(B.a.ae(B.bl,new A.r3(this.b)))
s.k3=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.r3.prototype={
$1(a){return t.mq.a(a).b===A.r(this.a.value)},
$S:33}
A.r6.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.qP.prototype={
$1(a){var s,r=A.Q(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k3.kN(r)
break A}if("photosensitivitySafe"===p){s=q.k3.kL(r)
break A}if("captions"===p){s=q.k3.kv(r)
break A}s=q.k3
break A}q.k3=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.r7.prototype={
$1(a){var s=this.a,r=s.k2.ky(A.Q(this.b.checked))
s.k2=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.r8.prototype={
$1(a){var s=this.a,r=s.k2.kS(A.Q(this.b.checked))
s.k2=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.r2.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k2.kG(B.a.ae(B.bk,new A.qV(r.c)))
break A}if("promptDensity"===p){s=q.k2.kM(B.a.ae(B.bo,new A.qW(r.c)))
break A}if("textPacing"===p){s=q.k2.kT(B.a.ae(B.bm,new A.qX(r.c)))
break A}if("journalLayout"===p){s=q.k2.kJ(B.a.ae(B.be,new A.qY(r.c)))
break A}if("confirmations"===p){s=q.k2.kx(B.a.ae(B.b8,new A.qZ(r.c)))
break A}if("saveFeedback"===p){s=q.k2.kQ(B.a.ae(B.bf,new A.r_(r.c)))
break A}if("clockFormat"===p){s=q.k2.kw(B.a.ae(B.bb,new A.r0(r.c)))
break A}s=q.k2.kC(B.a.ae(B.aC,new A.r1(r.c)))
break A}q.k2=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.qV.prototype={
$1(a){return t.bK.a(a).b===A.r(this.a.value)},
$S:129}
A.qW.prototype={
$1(a){return t.dn.a(a).b===A.r(this.a.value)},
$S:130}
A.qX.prototype={
$1(a){return t.j_.a(a).b===A.r(this.a.value)},
$S:131}
A.qY.prototype={
$1(a){return t.gm.a(a).b===A.r(this.a.value)},
$S:132}
A.qZ.prototype={
$1(a){return t.aJ.a(a).b===A.r(this.a.value)},
$S:133}
A.r_.prototype={
$1(a){return t.mx.a(a).b===A.r(this.a.value)},
$S:134}
A.r0.prototype={
$1(a){return t.vS.a(a).b===A.r(this.a.value)},
$S:135}
A.r1.prototype={
$1(a){return t.x.a(a).b===A.r(this.a.value)},
$S:38}
A.qU.prototype={
$1(a){var s,r=this,q=r.a,p=q.p1,o=r.b
A:{if("output"===o){s=p.kK(B.a.ae(B.bj,new A.qQ(r.c)))
break A}if("dynamicRange"===o){s=p.kB(B.a.ae(B.bd,new A.qR(r.c)))
break A}if("reverb"===o){s=p.kP(B.a.ae(B.bc,new A.qS(r.c)))
break A}s=p.kA(B.a.ae(B.ba,new A.qT(r.c)))
break A}q.p1=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.qQ.prototype={
$1(a){return t.xs.a(a).b===A.r(this.a.value)},
$S:137}
A.qR.prototype={
$1(a){return t.EL.a(a).b===A.r(this.a.value)},
$S:138}
A.qS.prototype={
$1(a){return t.gc.a(a).b===A.r(this.a.value)},
$S:139}
A.qT.prototype={
$1(a){return t.ul.a(a).b===A.r(this.a.value)},
$S:140}
A.ra.prototype={
$1(a){var s,r=this
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.Q(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.Q(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.Q(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.Q(r.c.checked))
break}},
$S:1}
A.r9.prototype={
$1(a){var s,r,q=this,p=A.eK(A.r(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aO(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bA.prototype={
v(){return"SettingCategory."+this.b}}
A.id.prototype={
v(){return"SettingKind."+this.b}}
A.b0.prototype={
cR(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.a3(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.a3(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bK(a))throw A.b(A.a3(r.a+" must be boolean",q,q))
break}}}
A.ri.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:20}
A.rj.prototype={
$0(){return A.j(A.k("unknown setting: "+this.a))},
$S:6}
A.rg.prototype={
i8(a,b){var s,r=this.a
if(r!==1)throw A.b(A.w("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.rh(s.a).cR(s.b)}},
ci(a){var s=this.b.h(0,a)
return s==null?A.j(A.k("setting missing from profile: "+a)):s},
B(){return A.N(["version",this.a,"values",this.b],t.N,t.K)}}
A.rk.prototype={
mj(a){var s,r,q=A.fG(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dx(q,1)
this.jx(a)},
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jx(a){var s,r,q=A.fG(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dx(q,1)}}
A.rs.prototype={
i9(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.B(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.B(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.B(a,"div","entry-picker",null)
for(r=A.u3,q=0;q<2;++q){p=B.cU[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.d_[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.rt(this,p,m)
if(typeof k=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.hk()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
sm3(a){this.f=t.nf.a(a)}}
A.rt.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a6()},
$S:1}
A.cu.prototype={}
A.mF.prototype={
my(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.C(s)
q=new A.M(s,r.i("h(1)").a(new A.mH()),r.i("M<1,h>")).bn(0)
r=this.b
r.L(0)
s=J.B4(a,t.N)
p=s.$ti
r.I(0,new A.F(s,p.i("l(n.E)").a(q.gap(q)),p.i("F<n.E>")))},
la(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mH.prototype={
$1(a){return t.bC.a(a).a},
$S:141}
A.mG.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.F(r,s):B.d.F(a.c,b.c)},
$S:142}
A.la.prototype={
gbZ(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
ly(a){return this.c.q(0,t.L.a(a))},
dW(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a7(0,g.gkt())||!a.a.a7(0,new A.rZ(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eU(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aL){m=s.d
if(m<o.length){n=n===B.a7
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ae}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.M(l.f,new A.t_(s))
else k=!1
if(k)return!1
j=new A.l9(r,g,A.ai(o,t.AP),B.a7)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.L(0)
g.I(0,a.a)
g=i.c
g.L(0)
g.I(0,h)
i.r=j
return!0},
fu(a){var s=this.a,r=A.o(s).i("aa<1>"),q=r.i("F<n.E>")
s=A.I(new A.F(new A.aa(s,r),r.i("l(n.E)").a(new A.rU(a)),q),q.i("n.E"))
B.a.P(s,new A.rV())
return s},
bV(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mH
s=m.a.h(0,a)
if(s==null)return B.mI
r=B.d.a2(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bU:B.ao
o=p===B.ao&&m.x.q(0,q)&&s.R(B.bV)?B.bV:p
if(s.R(o))n=o
else n=s.R(B.ao)?B.ao:B.bU
r=s.h(0,n)
r.toString
m.r=new A.l9(a,n,A.ai(m.eU(a,n,r),t.AP),B.a7)
m.gbZ()
r=m.r
r.toString
return new A.l8(r)},
ko(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dZ
if(n.d!==B.a7)return B.mF
n.e=a
s=a===B.ae
n.d=s?B.aL:B.am
r=this.f
q=s?B.dX:B.mn
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dD(q,o,p,a,null))
if(a===B.aw)B.a.l(r,new A.dD(B.mq,o,p,a,null))
if(s)this.f4(n)
return new A.l6(n)},
k0(){var s,r=this.r
if(r==null)return B.dZ
s=r.d
if(s!==B.am&&s!==B.an)return B.mG
if(this.gbZ()!=null&&r.w==null)return new A.bb(new A.bn(B.a8,"The visitor is waiting for an answer."))
r.d=B.an
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aL
this.f4(r)
return new A.iq(r,!0)}return new A.iq(r,!1)},
kp(a){var s,r,q=this.r,p=this.gbZ(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.am&&o!==B.an}if(o)return B.mE
o=p.f
s=A.C(o)
r=A.bu(new A.F(o,s.i("l(1)").a(new A.rX(a)),s.i("F<1>")),t.Y)
if(r==null)return B.mJ
q.w=r.a
return new A.l7(q,p,r)},
kq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.am&&s!==B.an}else s=!0
if(s)return i
r=h.gbl()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cZ
p=J.R(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aY(q,s,s)
m=c.jq(!0,!0,o,new A.t6(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aM){B.a.l(this.f,new A.dD(B.mp,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fG(B.a.gV(j.c).a,s,s)
s.I(0,q)
p.jY(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.e_)if(k===B.bW){s=n.b
s=s.gW(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dD(B.mo,o,p.b,i,l))}}return m},
f4(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eU(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.R(c);r.m();)s.push(this.j4(a,b,r.gn()))
return s},
j4(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.C(p)
s=A.bu(new A.F(p,r.i("l(1)").a(new A.rS(this)),r.i("F<1>")),t.aS)}return s==null?c:new A.c8(q,s.c,c.c)},
shP(a){this.x=t.Q.a(a)}}
A.rZ.prototype={
$1(a){var s=this.a.a
return new A.aa(s,A.o(s).i("aa<1>")).M(0,new A.rY(A.r(a)))},
$S:3}
A.rY.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:24}
A.t_.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:14}
A.rU.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:24}
A.rV.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.F(a.c,b.c)
return s!==0?s:B.d.F(a.d,b.d)},
$S:144}
A.rX.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.rW.prototype={
$0(){return A.c([],t.jV)},
$S:145}
A.rS.prototype={
$1(a){return t.aS.a(a).d.gJ().a7(0,new A.rR(this.a))},
$S:146}
A.rR.prototype={
$1(a){t.q.a(a)
return this.a.y.aY(a.a,a.b)},
$S:147}
A.rT.prototype={
$2(a,b){var s=t.AP
return B.d.F(s.a(a).a,s.a(b).a)},
$S:148}
A.lb.prototype={}
A.lG.prototype={}
A.vl.prototype={
$1(a){return B.b.T(A.r(a),"off.")},
$S:3}
A.bP.prototype={
v(){return"DoorChoice."+this.b}}
A.c6.prototype={
v(){return"VisitPhase."+this.b}}
A.c7.prototype={
v(){return"VisitTier."+this.b}}
A.ec.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dD.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.d5.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bn.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.bn&&b.a===this.a&&b.b===this.b},
gN(a){return A.cE(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c8.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.c8&&b.a===this.a&&b.b===this.b},
gN(a){return A.cE(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bU.prototype={
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.bU&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gN(a){var s=this
return A.cE(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.N(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.lc.prototype={
B(){var s,r,q,p=this.a
p=A.I(p,A.o(p).c)
B.a.Y(p)
s=this.b
r=A.o(s)
q=r.i("di<1,W<h,@>>")
s=A.I(new A.di(s,r.i("W<h,@>(1)").a(new A.rQ()),q),q.i("n.E"))
r=this.c
return A.N(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rQ.prototype={
$1(a){return t.L.a(a).B()},
$S:149}
A.jn.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
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
A.mC.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:150}
A.mD.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:151}
A.mE.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:152}
A.l9.prototype={
gbl(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.t0.prototype={}
A.bb.prototype={}
A.l8.prototype={}
A.l6.prototype={}
A.iq.prototype={}
A.l7.prototype={}
A.h_.prototype={}
A.lJ.prototype={
gbz(){var s,r=this.y1
if(r){s=this.w
s===$&&A.p()
s=s.a.b}else s="safe"
return A.CH("pixeldart",r?this.gki():B.ji,!1,null,s)},
gki(){var s,r
if(!this.y1)return B.o
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.eB.kj(s,r)},
glm(){var s="shadowCaster",r=this.RG
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.fY(s).a+";shadowTriangles="+r.fY(s).b+";frameMs="+B.c.aK(this.rx,3)},
gll(){var s=this.RG
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.rx<=100},
c5(){var s,r,q,p,o,n,m,l=this,k=A.D4(l.a)
l.d=k
k=k.h3()
l.r=k
k=B.ca.hk(k)
l.w=k
q=l.b
p=l.c
s=new A.kW(q,p,q,p)
o=A.yu(l.d)
l.e=o
try{o.fR(B.aT.du("auto",k,"auto",p,q),s)}catch(n){r=A.al(n)
k=l.w
if(k===B.ag)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.x(r)
l.w=B.ag
k=A.yu(l.d)
k.fR(B.kV,s)
l.e=k}k=l.e
k.bQ()
m=A.CG(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c1=l.b
l.c2=l.c
l.eF()
l.lh=A.Cn(!0,!0,!0)
l.y1=!0},
bf(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.w("Pixeldart surface size must be positive",null))
if(!r.y1){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c3!==a||r.c4!==b)r.c4=r.c3=null
s=r.e
s===$&&A.p()
s.bQ()
new A.kW(a,b,a,b).C()
if(r.y2==null)r.y2=r.bP()},
bP(){var s=0,r=A.bL(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bP=A.bN(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.c1
h=n.b
if(!(i!==h||n.c2!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.p()
h=n.w
h===$&&A.p()
g=A.e(m)
s=8
return A.as(A.uL(i,B.aT.du("auto",h,"auto",A.e(l),g)),$async$bP)
case 8:n.c1=m
n.c2=l
n.c4=n.c3=null
A.v0()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.al(e)
i=n.w
i===$&&A.p()
n.x=i.a.b+" surface reconfigure failed: "+A.x(k)
n.c3=n.b
n.c4=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.y2=null
i=n.c3
h=n.b
j=i===h&&n.c4===n.c
if(!j)i=n.c1!==h||n.c2!==n.c
else i=!1
if(i)n.y2=n.bP()
s=o.pop()
break
case 5:return A.bI(null,r)
case 1:return A.bH(p.at(-1),r)}})
return A.bJ($async$bP,r)},
eF(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.a1===s
if(p){r=7
break A}if(B.P===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.P===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.j(A.w("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.pt(r,p,A.a_(q),A.a_(q),A.m(q,t.i))},
cE(a){var s=0,r=A.bL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$cE=A.bN(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.y1){s=1
break}switch(a.b.a){case 0:i=B.du
break
case 2:i=B.ag
break
case 1:i=B.dt
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
i=n.b
h=n.c
g=t.xK
k=B.aT.du(a.f,g.a(m),a.c,h,i)
p=4
i=n.e
i===$&&A.p()
s=7
return A.as(A.uL(i,t.lg.a(k)),$async$cE)
case 7:n.w=g.a(m)
n.eF()
n.c1=n.b
n.c2=n.c
n.x=null
A.v0()
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.al(e)
n.w=g.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.x(j)
A.v0()
throw e
s=6
break
case 3:s=2
break
case 6:case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$cE,r)},
k8(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.y1||b4.Q.length!==0)return
b4.fG=c0
s=b4.k1
r=b4.e
r===$&&A.p()
s.k(0,b6,r.gb6().dS(8,"texture:wall-plaster",!0,256,B.b2,256))
s.k(0,b7,b4.e.gb6().dS(8,"texture:grime",!0,512,B.b2,512))
for(q=0;q<2;++q){p=B.jm[q]
r=b4.e.w
if(r==null)r=A.j(A.k(b8))
s.k(0,p,r.dS(8,"texture:"+p,!0,256,B.b2,256))}b4.dl()
b4.cz()
b4.p2=b4.ju(A.pG(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.p1,j=t.pw,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.N(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cB(g,g.r,g.e,A.o(g).i("cB<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bp.h(0,c)
if(b==null)A.j(A.k("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.pG(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.j(A.k(b8))
if(a0.x)A.j(A.k(b9))
c.C()
a1=a0.b.a.az(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.iQ[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dh(a2)
j=b4.dh(a2)
l=A.pG(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dh(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.j(A.k(b8)):j
if(n.x)A.j(A.k(b9))
l.C()
a1=n.b.a.az(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.cz()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.t)(r),++q)b4.iZ(c0,r[q])
b4.jr(c0)
$.z.j().setAttribute("data-renderer-house-model-scale",B.c.aK(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.t)(r),++q){a4=r[q]
if(a4.at==null||a4.as)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.eI(c0,i,a4)
g=b4.e.w
if(g==null)g=A.j(A.k(b8))
f=a4.a
if(g.x)A.j(A.k(b9))
e=g.a
a5.C()
a1=e.b.az(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.bb(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.p2
e.toString}a6=new A.bz(a1,e,B.u,0,B.T,B.ab,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.u.C()
a=e.a
a0=a.$ti
a.Z(a0.c.a(a1))
a=a.b
if(!(c>=0&&c<a.length))return A.d(a,c)
a5=a[c].c
c=(a5==null?a0.y[1].a(a5):a5).d
a=B.u.a9()
c=c.gaq()
a0=A.C(c)
A.b2(new A.M(c,a0.i("K(1)").a(a.gaw()),a0.i("M<1,K>")))
n.k(0,f,new A.iJ(f,g,e.b.c_(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.t)(r),++q){a4=r[q]
if(a4.as||a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.jn(i,a4.aH(f),a4.af(f),a4.af(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.tJ(a4))
a=b4.e.w
if(a==null)a=A.j(A.k(b8))
if(a.x)A.j(A.k(b9))
a0=a.a
e.C()
a1=a0.b.az(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.bb(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.p2
e.toString}else e=a
a8=new A.bz(a1,e,B.u,0,B.T,B.ab,!0,!0,0,b5)
e=b4.f
e===$&&A.p()
B.u.C()
a=e.a
a0=a.$ti
a.Z(a0.c.a(a1))
a=a.b
if(!(a7>=0&&a7<a.length))return A.d(a,a7)
a5=a[a7].c
a=(a5==null?a0.y[1].a(a5):a5).d
a0=B.u.a9()
a=a.gaq()
a7=A.C(a)
A.b2(new A.M(a,a7.i("K(1)").a(a0.gaw()),a7.i("M<1,K>")))
B.a.l(o,new A.lI(f,e.b.c_(a8),a8,c))}for(r=A.GC(A.FY(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.t)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.df(e)
a0=b4.df(e)
a=A.pG(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.df(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.j(A.k(b8)):a0
if(c.x)A.j(A.k(b9))
a.C()
a1=c.b.a.az(a,b5)
c.r.l(0,a1)
k.k(0,a.a,a)
f.k(0,e,a1)
b=a1}c=b4.e.w
if(c==null)c=A.j(A.k(b8))
a=a9.c
a0=a9.a
e=""+e
if(c.x)A.j(A.k(b9))
a7=c.a
a.C()
a1=a7.b.az(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.bb(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ah.q(0,a0))A.j(A.w("unknown exterior cell: "+a0,b5))
b3=new A.bz(a1,b,B.u,-1,B.T,B.ab,B.lj.q(0,a0),!0,0,b5)
n.k(0,b2,a0)
m.k(0,b2,b3)
e=b4.f
e===$&&A.p()
B.u.C()
c=e.a
a=c.$ti
c.Z(a.c.a(a1))
c=c.b
if(!(b1>=0&&b1<c.length))return A.d(c,b1)
a5=c[b1].c
c=(a5==null?a.y[1].a(a5):a5).d
a=B.u.a9()
c=c.gaq()
a0=A.C(c)
A.b2(new A.M(c,a0.i("K(1)").a(a.gaw()),a0.i("M<1,K>")))
j.k(0,b2,e.b.c_(b3))}},
hn(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ai(a8.e,t.fl)
if(!a5.y1)return
for(s=a5.ch,r=new A.H(s,A.o(s).i("H<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.p()
o.b.b5(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.p()
p=p.w
if(p==null)p=A.j(A.k(a6))
o=n.a
if(p.x)A.j(A.k(a7))
p.a.b5(o)
p.f.a5(0,o)}}s.L(0)
q.L(0)
r=a5.cx
B.a.L(r)
for(p=a5.id,o=p.length,m=a8.c,l=a5.ok,k=0;k<o;++k){j=p[k]
i=j.c
h=B.b.q(i.toLowerCase(),"stair")
if(h)continue
h=j.r
h=h!=="story"&&h!=="architecture"
if(h)continue
h=a5.fG
g=h==null?null:h.e.h(0,j.b)
if(g==null)continue
f=a8.cF(i)
i=a5.e
i===$&&A.p()
i=i.w
if(i==null)i=A.j(A.k(a6))
h=a5.j1(f,j,m)
e=j.a
if(i.x)A.j(A.k(a7))
d=i.a
h.C()
c=d.b.az(h,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bb(h))
i.f.l(0,c)
i=j.f
h=i.a
a=B.a6.gau()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=f.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=g.d
i=new A.kZ(new A.K(a3.a+h.a*m,a3.b+h.b*m,a3.c+h.c*m),new A.kF(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bz(c,a2,i,-1,B.T,B.ab,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.p()
i.C()
a2=d.a
h=a2.$ti
a2.Z(h.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.d(a2,b)
a4=a2[b].c
h=(a4==null?h.y[1].a(a4):a4).d
i=i.a9()
h=h.gaq()
b=A.C(h)
A.b2(new A.M(h,b.i("K(1)").a(i.gaw()),b.i("M<1,K>")))
s.k(0,e,d.b.c_(n))}$.z.j().setAttribute("data-renderer-inventory-items",""+s.a)},
hy(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aN([s],r)
for(p=c1.aJ(s),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.cd(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.H(b9,A.o(b9).i("H<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aC(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
e=b8.bU(i[f],k)
d=b8.f
d===$&&A.p()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.Z(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.d(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.a9()
a=a.gaq()
a0=A.C(a)
A.b2(new A.M(a,a0.i("K(1)").a(b.gaw()),a0.i("M<1,K>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.Z(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.d(d,c)
d[c].sb3(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gU(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.t)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.p()
o=b8.bU(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.Z(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gaq()
g=A.C(i)
A.b2(new A.M(i,g.i("K(1)").a(n.gaw()),g.i("M<1,K>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.d(p,n)
p[n].sb3(o)}b9=b8.fr
s=A.o(b9).i("aa<1>")
s=A.I(new A.aa(b9,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.t)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.bU(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.p()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.Z(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.d(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.a9()
g=g.gaq()
d=A.C(g)
A.b2(new A.M(g,d.i("K(1)").a(i.gaw()),d.i("M<1,K>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb3(e)
b9.k(0,a5.a,a5.kz(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.p()
i=b8.bU(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.Z(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.d(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.a9()
d=d.gaq()
c=A.C(d)
A.b2(new A.M(d,c.i("K(1)").a(g.gaw()),c.i("M<1,K>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.Z(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb3(i)}a9=new A.jS().kn(c2)
b9=$.z.j()
s=A.I(a9,A.o(a9).c)
B.a.Y(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.X(s,","))
b9=b8.dx
r=new A.jS().fI(new A.tK(b8),new A.aa(b9,A.o(b9).i("aa<1>")),a9,r)
b0=A.kh(r,r.$ti.i("n.E"))
b9=b8.db
s=A.o(b9).i("aa<1>")
s=A.I(new A.aa(b9,s),s.i("n.E"))
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
e=b8.bU(a8,b6?-1:0)
o=b8.f
o===$&&A.p()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.Z(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.d(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.a9()
i=i.gaq()
g=A.C(i)
A.b2(new A.M(i,g.i("K(1)").a(n.gaw()),g.i("M<1,K>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.Z(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb3(e)
b9.k(0,b4,e)}$.z.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.z.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("di<1,h>")
b7=A.I(new A.di(b0,b9.i("h(1)").a(new A.tL(b8)),s),s.i("n.E"))
B.a.Y(b7)
$.z.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.X(b7,","))},
cP(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.y1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.f6(b0,n)
l=J.aC(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.j(A.k(a8))
c=a7.eV(e.b)
b=g.b
if(d.x)A.j(A.k(a9))
a=d.a
c.C()
a0=a.b.az(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bb(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bz(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.p()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.Z(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.d(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.a9()
b=b.gaq()
a3=A.C(b)
A.b2(new A.M(b,a3.i("K(1)").a(d.gaw()),a3.i("M<1,K>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.Z(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.d(c,a)
c[a].sb3(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.d(o,f)
a6=o[f]
B.a.a5(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.j(A.k(a8)):a
if(d.x)A.j(A.k(a9))
d.a.b5(a6)
d.f.a5(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.z.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fH+1));++a7.fH},
dR(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.y1)return
s=k.fr
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.p()
m=p.gb6().me(k.eI(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bz(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.jU(l)
p.b.e_(n,l)
s.k(0,b,r.fD(l,m))
s=k.y
n=r.d
B.a.a5(s,n)
B.a.l(s,m)
k.e.gb6().mf(n)},
ho(d2,d3,d4,d5,d6,d7,d8,d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="time_override",c5="wetness_override",c6="fog_density",c7="fog_height_falloff",c8="rain_override",c9=A.aN([d3],t.N),d0=d2.e,d1=d0.h(0,d3)
if(d1!=null)for(s=d1.a,r=d2.aJ(s),q=J.R(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.cd(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&d0.h(0,o)!=null)c9.l(0,o)}n=new A.oR(d2).mM(c9,d4)
d0=t.jC
m=A.c([],d0)
l=A.c([],d0)
for(k=0;k<n.length;++k){j=n[k]
d0=k===0
s=d0?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.j(A.ah(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.j(A.ah(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.j(A.ah(p,"radius","must be finite and > 0"))
d0=d0?l:m
B.a.l(d0,new A.aV(k,s,j.a,new A.f((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d0=c3.fx
d0===$&&A.p()
i=d0.mb(d4,m,l)
d0=A.m(t.S,t.A_)
for(k=0;k<n.length;++k)d0.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.t)(r),++h){g=r[h]
p=d0.h(0,g.a).a
f=g.d
s.push(new A.ky(new A.K(p.a,p.b,p.c),new A.c1(f.a,f.b,f.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.t)(q),++h){g=q[h]
f=g.a
e=d0.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bC(f,new A.K(d.a,d.b,d.c),new A.K(e.a,e.b,e.c),new A.c1(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c3.iq(i,++c3.fy)
d0=$.hn()
b=d0.H(c4)
if(b>=0)a=B.c.D(b,0,23.999)
else a=d9
a0=d7.c
a1=B.c.S(B.c.S(a,24)+24,24)
a2=B.c.D(a0,0,1)
a3=B.c.D(d7.d,6,16)/2
a4=13-a3
a5=13+a3
q=a1>=a4
a6=q&&a1<=a5?Math.sin(3.141592653589793*((a1-a4)/(a5-a4)))*65:-18
a7=a6*3.141592653589793/180
a8=(90+a1/24*360)*3.141592653589793/180
p=Math.cos(a8)*Math.cos(a7)
f=B.c.D(Math.sin(a7),0,1)
e=Math.sin(a8)*Math.cos(a7)
d=B.c.D(1-f,0.1,0.9)
c=a4-1.5
if(a1>=c&&a1<a4){a9=(a1-c)/1.5
b0=A.cf(B.kG,B.bz,a9)
b1=A.cf(B.kI,B.by,a9)
b2=A.cf(B.kC,B.bA,a9)
b3=0.3+0.5*a9
b4=0.25+0.2*a9}else if(q&&a1<14){b0=B.bz
b1=B.by
b2=B.bA
b3=0.85
b4=0.45}else if(a1>=14&&a1<a5){a9=(a1-14)/(a5-14)
b0=A.cf(B.bz,B.dv,a9)
b1=A.cf(B.by,B.dy,a9)
b2=A.cf(B.bA,B.dx,a9)
b3=0.85*(1-a9*0.35)
b4=0.45*(1-a9*0.25)}else if(a1>=a5&&a1<a5+1.5){a9=(a1-a5)/1.5
b0=A.cf(B.dv,B.aE,a9)
b1=A.cf(B.dy,B.aD,a9)
b2=A.cf(B.dx,B.aF,a9)
b3=0.55*(1-a9*0.8)
b4=0.34*(1-a9*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){a9=(a1-q)/1.5
b0=A.cf(B.aE,B.aE,a9)
b1=A.cf(B.aD,B.aD,a9)
b2=A.cf(B.aF,B.aF,a9)
b3=0.11*(1-a9*0.25)
b4=0.16*(1-a9*0.15)}else{b0=B.aE
b1=B.aD
b2=B.aF
b3=0.15
b4=0.18}}if(a2>0){b5=A.cf(b2,B.kQ,a2*0.7)
b3*=1-a2*0.35
b4*=1-a2*0.15}else b5=b2
b6=d8?1:0.15
B.c.D(a2*0.75+B.c.D(0.3333333333333333,0,1)*0.25,0,1)
q=$.AW().a
q.k(0,"pbrRoughnessScale",d0.H("pbr_roughness"))
q.k(0,"pbrMetallicScale",d0.H("pbr_metallic"))
q.k(0,"pbrSpecularMult",d0.H("pbr_specular"))
q.k(0,"pbrWrapDiffuse",d0.H("pbr_wrap_diffuse"))
q.k(0,"pbrFresnelF0",d0.H("pbr_fresnel_f0"))
q.k(0,"ambientLightScale",d0.H("light_ambient_mult"))
q.k(0,"directLightScale",d0.H("light_direct_mult"))
q.k(0,"ssdoEnabled",d0.aP("shadow_ssdo_enable"))
q.k(0,"aoIntensity",d0.H("shadow_ao_intensity"))
q.k(0,"csmEnabled",d0.aP("shadow_csm_enable"))
q.k(0,"csmHardness",d0.H("shadow_csm_hardness"))
q.k(0,"shadowBias",d0.H("shadow_bias"))
q.k(0,"weatheringEnabled",d0.aP("weathering_enable"))
q.k(0,"normalBumpStrength",d0.H("normal_bump_strength"))
q.k(0,"grimeAccumulation",d0.H("grime_accumulation"))
q.k(0,"wetnessOverride",d0.H(c5))
q.k(0,"fogEnabled",d0.aP("fog_enable"))
q.k(0,"fogDensity",d0.H(c6))
q.k(0,"fogHeightFalloff",d0.H(c7))
q.k(0,"volumetricEnabled",d0.aP("volumetric_light_enable"))
q.k(0,"volumetricShaftIntensity",d0.H("volumetric_shaft_intensity"))
q.k(0,"volumetricScattering",d0.H("volumetric_scattering"))
q.k(0,"ssrEnabled",d0.aP("ssr_enable"))
q.k(0,"tonemapMode",B.c.aC(d0.H("tonemap_mode")))
q.k(0,"ssssEnabled",d0.aP("ssss_enable"))
q.k(0,"taaEnabled",d0.aP("taa_enable"))
q.k(0,"lensFlareEnabled",d0.aP("lens_flare_enable"))
q.k(0,"timeOverride",d0.H(c4))
q.k(0,"rainOverride",d0.H(c8))
q.k(0,"postBloom",d0.H("post_bloom"))
q.k(0,"postVignette",d0.H("post_vignette"))
q.k(0,"postChromaticAberration",d0.H("post_chromatic_aberration"))
q.k(0,"postFilmGrain",d0.H("post_film_grain"))
q.k(0,"postExposure",d0.H("post_exposure"))
q.k(0,"postSaturation",d0.H("post_saturation"))
q.k(0,"postBloomThreshold",d0.H("post_bloom_threshold"))
q.k(0,"postDither",d0.H("post_dither"))
q.k(0,"contactLightBoost",d0.H("light_contact_boost"))
q.k(0,"debugViewMode",d0.e.b)
$.z.j().setAttribute("data-renderer-shader-overrides",B.j.ab(q,null))
if(d0.H(c8)>=0)a0=d0.H(c8)
if(d0.H(c5)>=0)d0.H(c5)
q=$.AV()
q.mI(0.0166,a0)
b7=q.f
b8=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
b9=b8>0.001
c0=b9?new A.K(p,f,e):new A.K(-p,d,-e)
c1=b9?new A.c1(b0.c,b0.b,b0.a):new A.c1(0.35,0.45,0.65)
q=b7.a
if(q){p=b7.b
c2=new A.c1(c1.a+b7.c*p*2,c1.b+b7.d*p*2,c1.c+b7.e*p*2.5)}else c2=c1
b3*=b6
if(q)b3+=b7.b*4.5
q=Math.max(0.045,b4*(b9?b8:1)*b6)
c3.p4=new A.jV(B.ii,new A.c1(b5.c*0.08,b5.b*0.08,b5.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),d0.H(c7),d0.H(c6),new A.c1(b1.c,b1.b,b1.a),q,new A.nP(c0,c2,b3),s,r)},
bp(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1)throw A.b(A.k("Pixeldart runtime is not initialized"))
s=i.p3
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dr(s)
s=$.xB()
q=s.b
p=s.c
o=A.wk(i.b/i.c,p,s.a,q)
p=new A.fp(r,o,o.an(0,r),B.al,B.m8,q,p,i.b/i.c)
s=p}q=i.p4
p=i.R8
n=i.x2++
m=i.ry
l=new A.ru()
$.xw()
k=$.ql.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.p()
j=i.f
j===$&&A.p()
k.kb(j,new A.o7(s,q,p,n,m))
i.RG=i.e.le()
s=$.ql.$0()
l.b=s
i.rx=l.glb()/1000},
f6(a,b){var s=A.FZ(a,b),r=A.FX(a,b),q=A.I(s.c,t.i)
B.a.I(q,r)
return A.c([new A.h_("wall",new Float32Array(A.a0(q))),new A.h_("floor",s.a),new A.h_("ceiling",s.b)],t.pv)},
eV(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.K(q,p,a[o]))}if(n.length===0)throw A.b(A.k("house surface mesh cannot be empty"))
return new A.cl(B.ac,a,null,A.b2(n))},
iZ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.f6(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.k("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.j(A.k("renderer is not initialized"))
j=b.eV(l.b)
i=l.a
if(k.x)A.j(A.k("resource library is disposed"))
h=k.a
j.C()
g=h.b.az(j,n+i)
f=g.a
h.c.k(0,f,h.bb(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bz(g,i,B.u,-1,B.T,B.ab,!0,!0,0,null)
i=b.f
i===$&&A.p()
B.u.C()
k=i.a
j=k.$ti
k.Z(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.d(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.u.a9()
k=k.gaq()
h=A.C(k)
A.b2(new A.M(k,h.i("K(1)").a(j.gaw()),h.i("M<1,K>")))
c=i.b.c_(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gU(r))
if(q.length!==0)b.at.k(0,a0,B.a.gU(q))},
jr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.t)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.N(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cB(l,l.r,l.e,A.o(l).i("cB<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bp.h(0,i)
if(h==null)A.j(A.k("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Y(d)
f=$.z.j()
B.a.Y(e)
f.setAttribute("data-renderer-house-materials",B.a.X(e,","))
$.z.j().setAttribute("data-renderer-house-surface-bindings",B.a.X(d,","))},
j1(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d1(new Float32Array(5376))
g=this.j0(a0.b)
r=new A.f(d,b,f)
q=new A.f(e,b,f)
p=new A.f(e,c,f)
o=new A.f(d,c,f)
n=new A.f(d,b,a)
m=new A.f(e,b,a)
l=new A.f(e,c,a)
k=new A.f(d,c,a)
s.aB(q,r,o,p,g)
s.aB(n,m,l,k,g)
s.aB(r,n,k,o,g)
s.aB(m,q,p,l,g)
s.aB(r,q,m,n,g)
s.aB(o,k,l,p,g)
j=B.t.aR(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.K(e,d,j[c]))}return new A.cl(B.ac,j,null,A.b2(g))},
j0(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
df(a){var s
A:{if(0===a){s=B.kD
break A}if(1===a){s=B.kF
break A}if(2===a){s=B.kL
break A}if(3===a){s=B.kT
break A}if(4===a){s=B.kU
break A}if(5===a){s=B.kJ
break A}if(6===a){s=B.kS
break A}if(7===a){s=B.kO
break A}s=B.kR
break A}return s},
dh(a){var s
A:{if("architecture"===a){s=B.kE
break A}if("furniture"===a){s=B.dw
break A}if("fixture"===a){s=B.kN
break A}if("service"===a){s=B.kP
break A}if("story"===a){s=B.kM
break A}if("decor"===a){s=B.kH
break A}if("micro"===a){s=B.kK
break A}s=B.dw
break A}return s},
cL(a){return this.lC(t.G.a(a))},
lC(a){var s=0,r=A.bL(t.H),q,p=this,o,n,m,l
var $async$cL=A.bN(function(b,c){if(b===1)return A.bH(c,r)
for(;;)switch(s){case 0:if(!p.y1){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.it[n]
l=a.h(0,m)
if(l!=null)o.push(p.cv(m,l))}s=3
return A.as(A.od(o,t.H),$async$cL)
case 3:case 1:return A.bI(q,r)}})
return A.bJ($async$cL,r)},
cv(a,b){return this.j5(a,b)},
j5(a,b){var s=0,r=A.bL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cv=A.bN(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.as(A.bX(A.a(m.decode()),t.X),$async$cv)
case 7:g=A.a(A.a(h.document).createElement("canvas"))
g.width=A.e(m.naturalWidth)
g.height=A.e(m.naturalHeight)
l=g
k=A.E(l.getContext("2d"))
if(!t.m.b(k)){h=A.k("2D canvas context unavailable for "+a)
throw A.b(h)}k.drawImage(m,0,0)
j=t.mV.a(A.a(k.getImageData(0,0,A.e(m.naturalWidth),A.e(m.naturalHeight))).data)
h=n.e
h===$&&A.p()
h=h.gb6()
f=new Uint8Array(A.a0(j))
if(h.x)A.j(A.k("resource library is disposed"))
h.c.mJ(d,f)
h=n.e.gb6()
if(h.x)A.j(A.k("resource library is disposed"))
h.c.lk(d)
$.z.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dl()
n.cz()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.al(c)
h=$.z.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dl()
n.cz()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.x(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bI(q,r)
case 2:return A.bH(o.at(-1),r)}})
return A.bJ($async$cv,r)},
dl(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1||i.k1.a===0)return
s=i.k1
r=A.o(s).i("H<1,2>")
r=A.ki(new A.H(s,r),r.i("bT(n.E)").a(new A.tF()),r.i("n.E"),t.jP)
q=A.I(r,A.o(r).i("n.E"))
s=i.e
s===$&&A.p()
p=s.gb6().gff().cN(q)
s=p.a
o=A.c(s.slice(0),A.C(s))
B.a.P(o,new A.tG())
s=A.C(o)
r=s.i("h(1)")
s=s.i("M<1,h>")
n=new A.M(o,r.a(new A.tH()),s).X(0,",")
m=new A.M(o,r.a(new A.tI()),s).X(0,",")
s=p.cC(B.dO)
r=p.cC(B.dP)
l=p.cC(B.dQ)
k=p.cC(B.dR);++i.xr
j=$.z.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.xr)
if(!A.Q($.z.j().hasAttribute("data-renderer-texture-residency-initial")))$.z.j().setAttribute("data-renderer-texture-residency-initial",n)},
cz(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.y1||j.p1.a===0)return
s=A.c([],t.a6)
for(r=j.p1,r=new A.H(r,A.o(r).i("H<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.cX(p,o,B.b.q(p,"wall")?2:1))}r=j.e
r===$&&A.p()
r=r.gb6()
n=r.e
if(n===$){p=r.gff()
r.e!==$&&A.xq()
n=r.e=new A.pH(p)}m=n.cN(s)
s=m.a
l=A.c(s.slice(0),A.C(s))
B.a.P(l,new A.tD())
s=A.C(l)
k=new A.M(l,s.i("h(1)").a(new A.tE()),s.i("M<1,h>")).X(0,",")
s=$.z.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cs(B.bs)+";pending="+m.cs(B.da)+";missing="+m.cs(B.db)+";evicted="+m.cs(B.dc))},
bU(a,b){return new A.bz(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eI(a,b,c){var s,r,q,p,o,n=A.FW(a,b,c),m=n.length
if(m===0)throw A.b(A.k("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.K(q,p,n[o]))}return new A.cl(B.ac,n,null,A.b2(s))},
jn(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.U.j().aA(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.c([new A.f(k,s,r),new A.f(q,s,r),new A.f(q,p,r),new A.f(k,p,r)],t.fi)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.c([new A.f(k,s,r),new A.f(q,s,r),new A.f(q,p,r),new A.f(k,p,r)],t.fi)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.c([new A.f(k,s,r),new A.f(k,s,q),new A.f(k,p,q),new A.f(k,p,r)],t.fi)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.c([new A.f(k,s,r),new A.f(k,s,q),new A.f(k,p,q),new A.f(k,p,r)],t.fi)
k=r
break
default:k=null}o=new A.d1(new Float32Array(5376))
o.aB(k[0],k[1],k[2],k[3],g)
n=B.t.aR(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.K(r,q,n[p]))}return new A.cl(B.ac,n,null,A.b2(k))},
iq(a,b){var s,r,q,p=a.e,o=A.o(p).i("H<1,2>"),n=A.I(new A.H(p,o),o.i("n.E"))
B.a.P(n,new A.tz())
p=$.z.j()
o=a.a
s=A.C(o)
r=a.c
q=A.C(r)
p.setAttribute("data-renderer-light-selection","points="+new A.M(o,s.i("i(1)").a(new A.tA()),s.i("M<1,i>")).X(0,":")+";spots="+new A.M(r,q.i("i(1)").a(new A.tB()),q.i("M<1,i>")).X(0,":"))
q=A.C(n)
p.setAttribute("data-renderer-light-rejections",new A.M(n,q.i("h(1)").a(new A.tC()),q.i("M<1,h>")).X(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
ju(a){var s,r=this.e
r===$&&A.p()
r=r.gb6()
if(r.x)A.j(A.k("resource library is disposed"))
a.C()
s=r.b.a.az(a,null)
r.r.l(0,s)
this.p1.k(0,a.a,a)
return s},
$iCI:1}
A.tJ.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:40}
A.tK.prototype={
$1(a){var s=this.a.dx.h(0,A.r(a))
s.toString
return s},
$S:41}
A.tL.prototype={
$1(a){var s,r,q,p
A.r(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.k("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:41}
A.tF.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bT(s,a.b,r)},
$S:155}
A.tG.prototype={
$2(a,b){var s=t.d
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:156}
A.tH.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:42}
A.tI.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:42}
A.tD.prototype={
$2(a,b){var s=t.wl
return B.b.F(s.a(a).a.a,s.a(b).a.a)},
$S:158}
A.tE.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:159}
A.tz.prototype={
$2(a,b){var s=t.ou
return B.d.F(s.a(a).a,s.a(b).a)},
$S:160}
A.tA.prototype={
$1(a){return t.p.a(a).a},
$S:43}
A.tB.prototype={
$1(a){return t.p.a(a).a},
$S:43}
A.tC.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:162}
A.lI.prototype={}
A.iJ.prototype={
fD(a,b){var s=this,r=b==null?s.d:b
return new A.iJ(s.a,s.b,s.c,r,a)},
kz(a){return this.fD(a,null)}}
A.tc.prototype={}
A.uc.prototype={
$2(a,b){var s
A.x9(a,A.x(b))
switch(a){case"master":s=$.bs
if(s!=null)s.hs(b)
break
case"voice":s=$.bs
if(s!=null)s.hu(b)
break
case"effects":s=$.bs
if(s!=null)s.hr(b)
break
case"ambience":s=$.bs
if(s!=null)s.hq(b)
break
case"music":s=$.bs
if(s!=null)s.ht(b)
break}},
$S:44}
A.ud.prototype={
$1(a){var s
A.x9("muted",""+a)
s=$.bs
if(s!=null)s.ec(a)},
$S:8}
A.ue.prototype={
$1(a){var s
A.x9("mono",""+a)
s=$.bs
if(s!=null)s.cW(a)},
$S:8}
A.uk.prototype={
$2(a,b){A.xa(a,A.x(b))
A.zg(a,b)},
$S:44}
A.ul.prototype={
$1(a){var s="high-contrast"
A.xa(s,""+a)
A.u0(s,a)},
$S:8}
A.um.prototype={
$1(a){var s="strong-highlights"
A.xa(s,""+a)
A.u0(s,a)},
$S:8}
A.un.prototype={
$1(a){$.dc().mj(a)
A.uZ()
A.zi()},
$S:164}
A.uo.prototype={
$0(){var s=$.dc()
s.a=A.dx(null,1)
s.b=A.dx(null,1)
A.uZ()
A.zi()},
$S:0}
A.up.prototype={
$0(){A.dK(this.a)},
$S:0}
A.uq.prototype={
$0(){this.a.a6()},
$S:0}
A.ur.prototype={
$0(){A.dK(this.a)},
$S:0}
A.uf.prototype={
$0(){A.hd(this.a)},
$S:0}
A.ug.prototype={
$1(a){$.j8=a
A.zL()
A.wH()},
$S:165}
A.uh.prototype={
$1(a){$.wS=a
A.zN()
A.zh()},
$S:166}
A.ui.prototype={
$1(a){$.em=a
A.wZ()
A.m8()},
$S:167}
A.uj.prototype={
$0(){$.em=B.ap
$.f6.j().e9($.em)
A.wZ()
A.m8()},
$S:0}
A.u9.prototype={
$1(a){var s,r=A.Am(a,A.zy())
$.ja=A.fD($.jj().b,a)
s=r.b
$.el.j().cm(a,$.jj().b,s)
$.z.j().setAttribute("data-graphics-fallback",B.a.X(s,"|"))
$.zz=A.mb(a,r,$.zz)},
$S:168}
A.ua.prototype={
$0(){A.dK($.el.j())},
$S:0}
A.ub.prototype={
$0(){A.dK($.el.j())},
$S:0}
A.u5.prototype={
$1(a){},
$S:21}
A.u6.prototype={
$1(a){var s,r
$.wP=a
$.ac.j().ea(a.r)
s=$.ac.j()
r=s.ch
r.a=a.f
r.dU()
s.b8()
A.zM()},
$S:169}
A.u7.prototype={
$0(){A.dK($.j0.j())},
$S:0}
A.u8.prototype={
$0(){A.dK($.j0.j())},
$S:0}
A.uT.prototype={
$0(){$.v8=A.Q(this.a.matches)
$.xd=A.Q(this.b.matches)
A.m8()},
$S:0}
A.uR.prototype={
$1(a){return this.a.$0()},
$S:2}
A.uS.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vt.prototype={
$1(a){var s
try{A.xX(a,this.a)
return!0}catch(s){if(A.al(s) instanceof A.G)return!1
else throw s}},
$S:170}
A.vu.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j7.j()
break
case 5:p=$.f6.j()
break
case 1:p=$.el.j()
break
case 4:p=$.h6.j()
break
case 2:p=$.j2.j()
break
case 3:p=$.j0.j()
break}s=p
r=null
switch(o){case 0:r=B.k9
break
case 5:r=B.ke
break
case 1:r=B.ka
break
case 4:r=B.kd
break
case 2:r=B.kb
break
case 3:r=B.kc
break}q=r
p=B.d6.h(0,a)
p.toString
A.wY(s,q,p)},
$S:171}
A.vv.prototype={
$0(){A.dK($.h8.j())},
$S:0}
A.vG.prototype={
$0(){return A.dK($.h8.j())},
$S:0}
A.vP.prototype={
$0(){$.cr.j().a6()},
$S:0}
A.vQ.prototype={
$0(){$.cr.j().a6()},
$S:0}
A.vR.prototype={
$0(){A.wY($.h8.j(),B.df,"pause.settings")},
$S:0}
A.vS.prototype={
$0(){$.cr.j().a6()
A.jf($.j3.j())},
$S:0}
A.vT.prototype={
$0(){A.mm("saved")},
$S:0}
A.vU.prototype={
$0(){$.cr.j().a6()
A.jf($.j3.j())},
$S:0}
A.vV.prototype={
$0(){A.wY($.m5.j(),B.kf,"pause.credits")},
$S:0}
A.vw.prototype={
$0(){return A.hd($.cr.j())},
$S:0}
A.vx.prototype={
$0(){return A.hd($.j4.j())},
$S:0}
A.vy.prototype={
$2(a,b){var s,r
if($.az.j().y){s=$.aF.j().gbZ()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.Ee(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cT,a)
A.Ed(B.cT[a])}}},
$S:172}
A.vz.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gaa().a===21){A.zS(!1)
return}s=$.U.j().r.b
$.T.j().hJ(a,b,$.at)
r=$.U.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e7()
if(typeof n!=="number")return A.vn(n)
if(!(o<n))break
if($.U.b===$.U)A.j(A.a5(""))
p=B.a.h(B.N,q).b
o=$.aS
if(o!=null){n=$.U.b
if(n===$.U)A.j(A.a5(""))
o.cP(n,p)}o=q
if(typeof o!=="number")return o.ah()
q=o+1}A.mm("saved after sleep")},
$S:173}
A.vA.prototype={
$0(){return A.hd($.m7.j())},
$S:0}
A.vB.prototype={
$0(){return A.hd($.j3.j())},
$S:0}
A.vC.prototype={
$0(){return A.dK($.m5.j())},
$S:0}
A.vD.prototype={
$0(){A.hd($.j1.j())},
$S:0}
A.vE.prototype={
$0(){A.hd($.j1.j())},
$S:0}
A.vF.prototype={
$1(a){return A.zR()},
$S:2}
A.vH.prototype={
$1(a){if(A.r(A.a(v.G.document).visibilityState)==="hidden")A.Fb()},
$S:1}
A.vI.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.r(m.code)==="CapsLock"&&!A.Q(m.repeat)){m.preventDefault()
p=$.hn()
o=!p.a
p.a=o
if(o)A.pe(A.a(v.G.document),"exitPointerLock",t.X)
else $.ac.j().cQ($.z.j())
return}p=$.hn()
if(p.a&&!A.Q(m.repeat)){if(A.r(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ac.j().cQ($.z.j())
return}if(A.r(m.code)==="ArrowUp"||A.r(m.code)==="KeyW"){m.preventDefault()
n=p.gbe().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.eo
if(o!=null){p=p.gbe().length
o.a.cV(-1,p)}return}if(A.r(m.code)==="ArrowDown"||A.r(m.code)==="KeyS"){m.preventDefault()
n=p.gbe().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.eo
if(o!=null){p=p.gbe().length
o.a.cV(1,p)}return}if(A.r(m.code)==="ArrowLeft"||A.r(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.d1[B.d.S(p.e.a-1+7,7)]
else{p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w,p.f,p.r)}return}if(A.r(m.code)==="ArrowRight"||A.r(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.d1[(p.e.a+1)%7]
else{p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w,p.f,p.r)}return}if(A.r(m.code)==="KeyQ"){m.preventDefault()
p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w*0.2,p.f,p.r)
return}if(A.r(m.code)==="KeyE"){m.preventDefault()
p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y+p.w*0.2,p.f,p.r)
return}if(A.r(m.code)==="KeyR"){m.preventDefault()
if(A.Q(m.shiftKey))p.mi()
else p.mk()
return}if(B.b.T(A.r(m.code),"Digit")||B.b.T(A.r(m.code),"Numpad")){o=A.r(m.code)
o=A.xp(o,"Digit","")
s=A.xp(o,"Numpad","")
r=A.du(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.az.j().y&&!A.Q(m.repeat))if($.cL().lp(A.r(m.code))){m.preventDefault()
return}if(A.r(m.code)==="Escape"&&!A.Q(m.repeat)){p=$.be
if(p==null)A.jf($.cr.j())
else p.a6()
return}q=$.be==null&&!p.a
if(!A.Q(m.repeat)&&q)$.f7.j().dF(new A.kJ(A.r(m.code),!0,1))
if(A.r(m.code)==="KeyP"&&!A.Q(m.repeat)&&$.AN())$.mj=!$.mj
if((A.r(m.code)==="KeyJ"||A.r(m.code)==="Tab")&&!A.Q(m.repeat)&&!$.az.j().y){m.preventDefault()
A.jh($.j4.j())}if(A.r(m.code)==="KeyL"&&!A.Q(m.repeat)&&!$.az.j().y)A.jh($.m7.j())
if(A.r(m.code)==="KeyH"&&!A.Q(m.repeat)&&!$.az.j().y)A.jh($.j3.j())
if(A.r(m.code)==="KeyO"&&!A.Q(m.repeat)&&!$.az.j().y)A.jh($.j6.j())
if(A.r(m.code)==="KeyK"&&!A.Q(m.repeat)&&q)A.mm("saved")},
$S:1}
A.vJ.prototype={
$1(a){var s=A.a(a)
if($.be==null)$.f7.j().dF(new A.kJ(A.r(s.code),!1,0))},
$S:1}
A.vK.prototype={
$1(a){return A.zk()},
$S:2}
A.vL.prototype={
$1(a){return A.zk()},
$S:2}
A.vM.prototype={
$1(a){return A.EG(A.a(a))},
$S:2}
A.vN.prototype={
$1(a){var s=A.a(a)
if($.az.j().y){s.preventDefault()
A.EF(s)
return}$.ac.j().cQ($.z.j())},
$S:1}
A.vO.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.hn()
if(!o.a||$.eo==null)return
p.preventDefault()
s=o.gbe()
r=A.a4(p.deltaY)>0?1:-1
o=$.eo
o.toString
q=J.cM(s)
o.a.cV(A.e(r),q)},
$S:1}
A.uU.prototype={
$1(a){var s=A.r(A.a(a).message)
A.v2(s,null)},
$S:1}
A.uV.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.v2("unhandled rejection: "+A.x(s==null?A.r(a.type):s),null)},
$S:1}
A.uY.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:38}
A.v6.prototype={
$0(){this.a.className=""},
$S:12}
A.va.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:32}
A.uX.prototype={
$2(a,b){var s=t.q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:17}
A.v3.prototype={
$1(a){return t.g.a(a).e},
$S:25}
A.v_.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.v1.prototype={
$1(a){return t.e.a(a).w},
$S:16};(function aliases(){var s=J.e1.prototype
s.hS=s.p
s=A.n.prototype
s.hR=s.cT
s=A.i3.prototype
s.hT=s.bG})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"EN","C8",29)
r(J.q.prototype,"gap","q",10)
q(A,"F0","Cq",39)
r(A.aL.prototype,"gap","q",10)
p(A.cj.prototype,"gkt","R",10)
o(A,"FS","Dk",22)
o(A,"FT","Dl",22)
o(A,"FU","Dm",22)
q(A,"A7","Fy",0)
s(A,"G0","Cd",29)
r(A.cp.prototype,"gap","q",10)
r(A.fW.prototype,"gap","q",10)
o(A,"G3","En",13)
p(A.kj.prototype,"gmp","mq",85)
var n
p(n=A.kY.prototype,"gml","mm",7)
p(n,"gmt","mu",7)
p(n,"gmv","mw",7)
p(n,"gmn","mo",7)
p(n,"gmr","ms",7)
q(A,"Ab","Dp",176)
q(A,"Hx","wn",40)
p(A.dr.prototype,"gaw","h6",58)
p(n=A.k6.prototype,"gj7","j8",2)
p(n,"gj9","ja",2)
p(n,"gjd","je",2)
p(n,"gjh","ji",2)
p(n,"gjj","jk",2)
p(n,"gjf","jg",2)
p(n,"gjb","jc",2)
o(A,"Gq","zp",13)
o(A,"Gu","zo",13)
o(A,"Gi","C5",177)
o(A,"Gj","C6",178)
o(A,"Gy","C_",179)
p(A.i3.prototype,"gjl","jm",2)
p(A.fR.prototype,"giX","iY",127)
p(A.la.prototype,"glx","ly",24)
o(A,"Al","Fe",180)
q(A,"Ak","Ek",0)
o(A,"Gm","Ef",120)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.J,null)
q(A.J,[A.we,J.k8,A.ic,J.et,A.n,A.hs,A.dS,A.am,A.V,A.qL,A.aH,A.hV,A.S,A.hD,A.hA,A.is,A.av,A.d3,A.bq,A.fH,A.ft,A.f2,A.dw,A.rI,A.pY,A.hB,A.iO,A.a6,A.pA,A.ck,A.af,A.cB,A.hN,A.lE,A.lk,A.ij,A.lW,A.te,A.cG,A.lx,A.lZ,A.tP,A.ll,A.ca,A.b3,A.lp,A.dG,A.ar,A.lm,A.lU,A.iZ,A.iA,A.lD,A.f3,A.iD,A.iT,A.m_,A.ex,A.jF,A.tx,A.tS,A.ey,A.dU,A.lu,A.kt,A.ih,A.tf,A.G,A.L,A.aq,A.lX,A.ru,A.bm,A.iV,A.rK,A.lR,A.pX,A.lA,A.eg,A.qo,A.e7,A.kA,A.nr,A.ns,A.nu,A.nt,A.kz,A.fp,A.jV,A.o7,A.dv,A.k2,A.c1,A.nP,A.ky,A.bC,A.e3,A.bD,A.rO,A.cl,A.pZ,A.kB,A.kK,A.bz,A.kW,A.i9,A.aG,A.o9,A.cX,A.c2,A.pJ,A.pH,A.kj,A.l1,A.pP,A.bT,A.c5,A.rD,A.rB,A.d9,A.kY,A.eG,A.jT,A.jU,A.o8,A.o6,A.fY,A.aw,A.bg,A.aI,A.O,A.ht,A.kD,A.bl,A.qq,A.b7,A.qs,A.qr,A.lz,A.i8,A.qC,A.tg,A.lY,A.tO,A.lK,A.lw,A.lO,A.lH,A.ts,A.bQ,A.bO,A.aO,A.nK,A.nJ,A.jk,A.eJ,A.oa,A.dr,A.kF,A.kZ,A.K,A.hr,A.ln,A.jw,A.lo,A.jJ,A.lr,A.hy,A.ls,A.jM,A.lt,A.k1,A.ly,A.hW,A.lF,A.fn,A.jx,A.wo,A.i5,A.lL,A.kE,A.lM,A.eT,A.kO,A.lP,A.kP,A.lQ,A.kS,A.lT,A.kR,A.lS,A.l5,A.m0,A.ia,A.lg,A.m3,A.np,A.jY,A.k_,A.hH,A.ie,A.y,A.jK,A.fL,A.ot,A.ej,A.cZ,A.fy,A.t5,A.dH,A.iY,A.iX,A.m2,A.m1,A.tW,A.jL,A.jr,A.h2,A.mQ,A.my,A.hp,A.mM,A.wa,A.mY,A.mS,A.it,A.fo,A.nm,A.o5,A.k6,A.p6,A.pa,A.aV,A.pw,A.pt,A.nL,A.pC,A.d1,A.f,A.kT,A.lh,A.nf,A.jN,A.nV,A.fz,A.bp,A.kx,A.qi,A.fQ,A.qG,A.eQ,A.jW,A.oh,A.og,A.n4,A.fj,A.fl,A.fi,A.fk,A.jy,A.kk,A.cI,A.li,A.hK,A.oK,A.Z,A.jQ,A.k3,A.oL,A.jR,A.d8,A.jS,A.ef,A.dW,A.qD,A.ee,A.h1,A.oI,A.nZ,A.rq,A.oN,A.cW,A.cz,A.pd,A.pb,A.pc,A.dt,A.oR,A.bc,A.by,A.bi,A.bk,A.dh,A.dz,A.b_,A.oU,A.cV,A.oJ,A.eF,A.oT,A.cU,A.oY,A.i4,A.hU,A.bh,A.t1,A.kg,A.bZ,A.pg,A.nb,A.hq,A.nc,A.ps,A.pr,A.qe,A.qd,A.qf,A.qg,A.qh,A.kf,A.qn,A.qA,A.kJ,A.qz,A.qB,A.rl,A.e9,A.rm,A.fS,A.nM,A.t6,A.eY,A.jD,A.p4,A.p8,A.qE,A.d_,A.qF,A.jX,A.eX,A.t2,A.pS,A.cP,A.bw,A.qb,A.rv,A.eW,A.eV,A.ir,A.ld,A.eM,A.d6,A.ry,A.jl,A.w9,A.dM,A.mI,A.dN,A.ne,A.b4,A.nn,A.fu,A.dg,A.jE,A.i3,A.nQ,A.on,A.op,A.fB,A.dX,A.oE,A.ow,A.ox,A.ce,A.oF,A.cY,A.fq,A.q0,A.ds,A.e4,A.c3,A.q5,A.qm,A.b0,A.rg,A.rk,A.cu,A.mF,A.la,A.t0,A.dD,A.bn,A.c8,A.bU,A.lc,A.jn,A.l9,A.h_,A.lJ,A.lI,A.iJ,A.tc])
q(J.k8,[J.ka,J.hM,J.hP,J.hO,J.hQ,J.fE,J.e_])
q(J.hP,[J.e1,J.q,A.fK,A.i_])
q(J.e1,[J.kw,J.eU,J.e0])
r(J.k9,A.ic)
r(J.pf,J.q)
q(J.fE,[J.hL,J.kb])
q(A.n,[A.ed,A.P,A.cC,A.F,A.hC,A.dF,A.f1,A.lj,A.lV,A.bV])
q(A.ed,[A.ew,A.j_])
r(A.iy,A.ew)
r(A.iw,A.j_)
q(A.dS,[A.jA,A.jz,A.kX,A.vo,A.vq,A.t9,A.t8,A.u1,A.oe,A.tq,A.tt,A.pD,A.tv,A.vX,A.vY,A.vi,A.qp,A.rP,A.pM,A.pN,A.pO,A.q_,A.pK,A.pL,A.pQ,A.rE,A.rF,A.rH,A.o2,A.o0,A.o1,A.q2,A.q3,A.qx,A.qw,A.qv,A.qu,A.qt,A.qy,A.uJ,A.uK,A.qI,A.qJ,A.w3,A.w1,A.ob,A.pF,A.vf,A.ou,A.ov,A.t3,A.t4,A.n_,A.n2,A.n1,A.n3,A.mR,A.mz,A.mA,A.mB,A.mO,A.mP,A.mN,A.p7,A.pu,A.nY,A.oi,A.ok,A.ol,A.om,A.n5,A.n6,A.n7,A.n8,A.n9,A.na,A.vd,A.nq,A.o_,A.oM,A.w4,A.uO,A.uN,A.u_,A.tZ,A.v5,A.p_,A.p0,A.p2,A.rr,A.oQ,A.oO,A.vc,A.oV,A.oX,A.vb,A.nU,A.pz,A.pn,A.rp,A.ro,A.rn,A.nN,A.nO,A.qc,A.rz,A.rA,A.mx,A.mv,A.mV,A.mW,A.nh,A.nl,A.nk,A.nj,A.nD,A.nC,A.nE,A.nF,A.nG,A.nB,A.nw,A.nx,A.nI,A.nR,A.nS,A.nT,A.nX,A.oo,A.oq,A.or,A.oC,A.oA,A.oB,A.oz,A.oy,A.oH,A.pi,A.pj,A.pk,A.q6,A.q7,A.q8,A.rb,A.rc,A.r4,A.r5,A.r3,A.r6,A.qP,A.r7,A.r8,A.r2,A.qV,A.qW,A.qX,A.qY,A.qZ,A.r_,A.r0,A.r1,A.qU,A.qQ,A.qR,A.qS,A.qT,A.ra,A.r9,A.ri,A.rt,A.mH,A.rZ,A.rY,A.t_,A.rU,A.rX,A.rS,A.rR,A.vl,A.rQ,A.mC,A.mD,A.mE,A.tK,A.tL,A.tF,A.tH,A.tI,A.tE,A.tA,A.tB,A.tC,A.ud,A.ue,A.ul,A.um,A.un,A.ug,A.uh,A.ui,A.u9,A.u5,A.u6,A.uR,A.uS,A.vt,A.vu,A.vF,A.vH,A.vI,A.vJ,A.vK,A.vL,A.vM,A.vN,A.vO,A.uU,A.uV,A.uY,A.va,A.v3,A.v_,A.v1])
q(A.jA,[A.td,A.nv,A.po,A.vp,A.u2,A.ve,A.of,A.tr,A.pB,A.pE,A.ty,A.rM,A.rL,A.vZ,A.pI,A.pR,A.rC,A.rG,A.o3,A.qK,A.w2,A.w0,A.n0,A.mT,A.mU,A.pv,A.oj,A.v7,A.p1,A.p3,A.oS,A.py,A.p9,A.pU,A.pV,A.pW,A.rw,A.rx,A.no,A.pl,A.pm,A.mG,A.rV,A.rT,A.tG,A.tD,A.tz,A.uc,A.uk,A.vy,A.vz,A.uX])
r(A.aW,A.iw)
q(A.am,[A.fF,A.dB,A.kc,A.l0,A.kL,A.lv,A.hS,A.jp,A.cv,A.io,A.l_,A.fT,A.jC])
r(A.fV,A.V)
r(A.dT,A.fV)
q(A.P,[A.a1,A.aa,A.aj,A.H,A.f0,A.iC])
q(A.a1,[A.ik,A.M,A.eP,A.lC])
r(A.di,A.cC)
q(A.bq,[A.eh,A.ei,A.fZ])
q(A.eh,[A.aQ,A.f5,A.iK])
q(A.ei,[A.ay,A.b1,A.iL])
r(A.iM,A.fZ)
r(A.h4,A.fH)
r(A.ea,A.h4)
r(A.hu,A.ea)
q(A.ft,[A.a2,A.cS])
q(A.dw,[A.hv,A.iN,A.iU])
r(A.aL,A.hv)
q(A.jz,[A.qj,A.ta,A.tb,A.tQ,A.oc,A.th,A.tm,A.tl,A.tj,A.ti,A.tp,A.to,A.tn,A.tN,A.v4,A.tU,A.tT,A.uI,A.uB,A.uC,A.uH,A.uw,A.uy,A.ux,A.uG,A.uu,A.uv,A.uD,A.uE,A.uF,A.uA,A.uz,A.uM,A.vg,A.oZ,A.oP,A.oW,A.uP,A.mw,A.mK,A.mJ,A.mX,A.nz,A.nA,A.ny,A.os,A.oD,A.qa,A.qN,A.qO,A.rd,A.re,A.rf,A.rj,A.rW,A.tJ,A.uo,A.up,A.uq,A.ur,A.uf,A.uj,A.ua,A.ub,A.u7,A.u8,A.uT,A.vv,A.vG,A.vP,A.vQ,A.vR,A.vS,A.vT,A.vU,A.vV,A.vw,A.vx,A.vA,A.vB,A.vC,A.vD,A.vE,A.v6])
r(A.i1,A.dB)
q(A.kX,[A.kU,A.fm])
q(A.a6,[A.cj,A.iz,A.lB])
r(A.hR,A.cj)
r(A.fJ,A.fK)
q(A.i_,[A.kl,A.b6])
q(A.b6,[A.iF,A.iH])
r(A.iG,A.iF)
r(A.hY,A.iG)
r(A.iI,A.iH)
r(A.hZ,A.iI)
q(A.hY,[A.hX,A.km])
q(A.hZ,[A.kn,A.ko,A.kp,A.kq,A.kr,A.eI,A.i0])
r(A.h3,A.lv)
r(A.iu,A.lp)
r(A.lN,A.iZ)
r(A.iB,A.iz)
r(A.cp,A.iN)
r(A.fW,A.iU)
q(A.ex,[A.jt,A.jO,A.kd])
q(A.jF,[A.nd,A.pq,A.pp,A.rN])
r(A.ke,A.hS)
r(A.tw,A.tx)
r(A.l4,A.jO)
q(A.cv,[A.fN,A.k5])
r(A.lq,A.iV)
q(A.lu,[A.eL,A.fw,A.fs,A.eE,A.jo,A.d4,A.fP,A.fx,A.jv,A.jB,A.hx,A.eO,A.eH,A.dA,A.eA,A.ci,A.ib,A.cT,A.fO,A.ig,A.fA,A.iv,A.ix,A.jZ,A.hF,A.hI,A.k0,A.eD,A.hG,A.eS,A.d2,A.fr,A.fC,A.h0,A.ju,A.ev,A.jG,A.jI,A.b8,A.js,A.cg,A.eC,A.ez,A.dj,A.hE,A.dV,A.dY,A.kv,A.kI,A.eN,A.cH,A.dy,A.bS,A.bB,A.k7,A.eZ,A.cn,A.cN,A.cw,A.cO,A.df,A.de,A.dP,A.dQ,A.dO,A.eu,A.dm,A.cQ,A.cR,A.dn,A.dl,A.dp,A.ch,A.dk,A.cx,A.jm,A.bj,A.cm,A.e5,A.cF,A.bR,A.bA,A.id,A.bP,A.c6,A.c7,A.ec,A.d5])
q(A.dv,[A.bv,A.b9,A.cD,A.ku,A.cy])
r(A.qH,A.lO)
r(A.le,A.m1)
r(A.iE,A.d8)
q(A.i3,[A.hw,A.nH,A.nW,A.hJ,A.oG,A.ph,A.q9,A.qM,A.fR,A.rs])
q(A.t0,[A.lb,A.lG,A.bb,A.l8,A.l6,A.iq,A.l7])
s(A.fV,A.d3)
s(A.j_,A.V)
s(A.iF,A.V)
s(A.iG,A.av)
s(A.iH,A.V)
s(A.iI,A.av)
s(A.h4,A.iT)
s(A.iU,A.m_)
s(A.lO,A.ts)
s(A.m1,A.tW)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",u:"double",bf:"num",h:"String",l:"bool",aq:"Null",D:"List",J:"Object",W:"Map",ae:"JSObject"},mangledNames:{},types:["~()","aq(J?)","~(J?)","l(h)","dq()","l(u)","0&()","dq(b9?)","~(l)","l(aw)","l(J?)","l(@)","aq()","@(@)","l(eM)","i(bZ,bZ)","l(bc)","i(L<h,h>,L<h,h>)","l(e9)","l(bD)","l(b0)","aq(@)","~(~())","l(O)","l(bU)","l(bZ)","~(@)","l(ef)","f(f)","i(@,@)","l(i)","@()","l(bw)","l(cN)","l(L<h,D<h>>)","~(J?,J?)","l(cx)","@(h)","l(ch)","i()","l()","h(h)","h(c5)","i(aV)","~(h,u)","~(ae)","eT()","fp()","u()","fn()","l(L<h,aG>)","aG(L<h,aG>)","aG(aG,aG)","i(aO<bQ>,aO<bQ>)","c4(aO<bQ>)","i(aO<bO>,aO<bO>)","c4(aO<bO>)","eJ(u,u,u,u)","K(K)","~(eT)","J?(J?)","aq(@,d0)","u(u,h2)","c_<aq>(L<h,h>)","l(D<h>)","i(h,h)","i(by,by)","i(+influence,light(u,bC),+influence,light(u,bC))","+effectiveScore,light,score(u,aV,u)(aV)","i(+effectiveScore,light,score(u,aV,u),+effectiveScore,light,score(u,aV,u))","l(cg)","~(i,@)","~(J,d0)","aq(J,d0)","l(b_)","fj(J?)","fi(J?)","fk(J?)","h(J?)","l(c2)","fl(J?)","i(cX,cX)","l(dz)","h(i,Z,Z,Z)","i(d8,d8)","e3(cD)","l(ee)","i(i)","cD(i,i,h?)","i(+(u,u,u,u),+(u,u,u,u))","D<+(u,u,u,u)>()","l(by)","i(i,b_)","l(cz)","l(cW)","bv(i,i,h?)","i(dt,dt)","l(cV)","L<h,h>(h,@)","h?(h)","~(@,@)","l(bS)","l(bB)","eX()","l(c5)","i(L<h,cP>,L<h,cP>)","i(bT,bT)","L<i,@>(i,eW)","L<i,@>(i,eV)","l(L<@,@>)","L<h,h>(L<@,@>)","l?(J?)","aq(~())","h()","0^(n<0^>,J?)<J?>","u(u,h)","b9(i,i,h?)","D<h>(D<h>)","~(u)","l(im?)","~(i)","aq(ae)","0^(h,n<0^>)<A>","i(i,+(b9,d9))","W<h,J?>(ds)","h(bj)","l(bj)","l(bA)","h(aw)","l(dm)","l(cQ)","l(cR)","l(dn)","l(dl)","l(dp)","l(dk)","i(a9,a9)","l(cw)","l(cO)","l(df)","l(de)","h(cu)","i(cu,cu)","@(@,h)","i(bU,bU)","D<d6>()","l(d6)","l(L<h,h>)","i(c8,c8)","W<h,@>(bU)","l(c7)","l(c6)","l(bP)","W<h,h>(W<h,h>,h)","cy(i,i,h?)","bT(L<h,b9>)","i(c5,c5)","ia(bv)","i(c2,c2)","h(c2)","i(L<i,h>,L<i,h>)","dq(h{fallback:h?})","h(L<i,h>)","0&(h,i?)","~(bA)","~(dN)","~(fB)","~(dM)","~(dX)","~(fu)","l(fQ)","~(bR)","~(i,h)","~(bS,bB)","bC?()","D<bC>()","fY()","cW(J?)","cz(J?)","cV(J?)","~(bf)","i(i,+(bv,cl))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aQ&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.f5&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iK&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ay&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b1&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iL&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iM&&A.Go(a,b.a)}}
A.DF(v.typeUniverse,JSON.parse('{"e0":"e1","kw":"e1","eU":"e1","GQ":"fK","q":{"D":["1"],"P":["1"],"ae":[],"n":["1"]},"ka":{"l":[],"ag":[]},"hM":{"aq":[],"ag":[]},"hP":{"ae":[]},"e1":{"ae":[]},"k9":{"ic":[]},"pf":{"q":["1"],"D":["1"],"P":["1"],"ae":[],"n":["1"]},"et":{"a8":["1"]},"fE":{"u":[],"bf":[],"b5":["bf"]},"hL":{"u":[],"i":[],"bf":[],"b5":["bf"],"ag":[]},"kb":{"u":[],"bf":[],"b5":["bf"],"ag":[]},"e_":{"h":[],"b5":["h"],"q4":[],"ag":[]},"ed":{"n":["2"]},"hs":{"a8":["2"]},"ew":{"ed":["1","2"],"n":["2"],"n.E":"2"},"iy":{"ew":["1","2"],"ed":["1","2"],"P":["2"],"n":["2"],"n.E":"2"},"iw":{"V":["2"],"D":["2"],"ed":["1","2"],"P":["2"],"n":["2"]},"aW":{"iw":["1","2"],"V":["2"],"D":["2"],"ed":["1","2"],"P":["2"],"n":["2"],"n.E":"2","V.E":"2"},"fF":{"am":[]},"dT":{"V":["i"],"d3":["i"],"D":["i"],"P":["i"],"n":["i"],"V.E":"i","d3.E":"i"},"P":{"n":["1"]},"a1":{"P":["1"],"n":["1"]},"ik":{"a1":["1"],"P":["1"],"n":["1"],"n.E":"1","a1.E":"1"},"aH":{"a8":["1"]},"cC":{"n":["2"],"n.E":"2"},"di":{"cC":["1","2"],"P":["2"],"n":["2"],"n.E":"2"},"hV":{"a8":["2"]},"M":{"a1":["2"],"P":["2"],"n":["2"],"n.E":"2","a1.E":"2"},"F":{"n":["1"],"n.E":"1"},"S":{"a8":["1"]},"hC":{"n":["2"],"n.E":"2"},"hD":{"a8":["2"]},"hA":{"a8":["1"]},"dF":{"n":["1"],"n.E":"1"},"is":{"a8":["1"]},"fV":{"V":["1"],"d3":["1"],"D":["1"],"P":["1"],"n":["1"]},"eP":{"a1":["1"],"P":["1"],"n":["1"],"n.E":"1","a1.E":"1"},"aQ":{"eh":[],"bq":[]},"f5":{"eh":[],"bq":[]},"iK":{"eh":[],"bq":[]},"ay":{"ei":[],"bq":[]},"b1":{"ei":[],"bq":[]},"iL":{"ei":[],"bq":[]},"iM":{"fZ":[],"bq":[]},"hu":{"ea":["1","2"],"h4":["1","2"],"fH":["1","2"],"iT":["1","2"],"W":["1","2"]},"ft":{"W":["1","2"]},"a2":{"ft":["1","2"],"W":["1","2"]},"f1":{"n":["1"],"n.E":"1"},"f2":{"a8":["1"]},"cS":{"ft":["1","2"],"W":["1","2"]},"hv":{"dw":["1"],"e8":["1"],"P":["1"],"n":["1"]},"aL":{"hv":["1"],"dw":["1"],"e8":["1"],"P":["1"],"n":["1"]},"i1":{"dB":[],"am":[]},"kc":{"am":[]},"l0":{"am":[]},"iO":{"d0":[]},"dS":{"eB":[]},"jz":{"eB":[]},"jA":{"eB":[]},"kX":{"eB":[]},"kU":{"eB":[]},"fm":{"eB":[]},"kL":{"am":[]},"cj":{"a6":["1","2"],"wg":["1","2"],"W":["1","2"],"a6.K":"1","a6.V":"2"},"aa":{"P":["1"],"n":["1"],"n.E":"1"},"ck":{"a8":["1"]},"aj":{"P":["1"],"n":["1"],"n.E":"1"},"af":{"a8":["1"]},"H":{"P":["L<1,2>"],"n":["L<1,2>"],"n.E":"L<1,2>"},"cB":{"a8":["L<1,2>"]},"hR":{"cj":["1","2"],"a6":["1","2"],"wg":["1","2"],"W":["1","2"],"a6.K":"1","a6.V":"2"},"eh":{"bq":[]},"ei":{"bq":[]},"fZ":{"bq":[]},"hN":{"CC":[],"q4":[]},"lE":{"i7":[],"fI":[]},"lj":{"n":["i7"],"n.E":"i7"},"lk":{"a8":["i7"]},"ij":{"fI":[]},"lV":{"n":["fI"],"n.E":"fI"},"lW":{"a8":["fI"]},"fJ":{"ae":[],"ag":[]},"eI":{"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"],"ag":[],"V.E":"i","av.E":"i"},"fK":{"ae":[],"ag":[]},"i_":{"ae":[]},"kl":{"ae":[],"ag":[]},"b6":{"c0":["1"],"ae":[]},"hY":{"V":["u"],"b6":["u"],"D":["u"],"c0":["u"],"P":["u"],"ae":[],"n":["u"],"av":["u"]},"hZ":{"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"]},"hX":{"o4":[],"V":["u"],"b6":["u"],"D":["u"],"c0":["u"],"P":["u"],"ae":[],"n":["u"],"av":["u"],"ag":[],"V.E":"u","av.E":"u"},"km":{"V":["u"],"b6":["u"],"D":["u"],"c0":["u"],"P":["u"],"ae":[],"n":["u"],"av":["u"],"ag":[],"V.E":"u","av.E":"u"},"kn":{"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"],"ag":[],"V.E":"i","av.E":"i"},"ko":{"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"],"ag":[],"V.E":"i","av.E":"i"},"kp":{"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"],"ag":[],"V.E":"i","av.E":"i"},"kq":{"wu":[],"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"],"ag":[],"V.E":"i","av.E":"i"},"kr":{"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"],"ag":[],"V.E":"i","av.E":"i"},"i0":{"im":[],"V":["i"],"b6":["i"],"D":["i"],"c0":["i"],"P":["i"],"ae":[],"n":["i"],"av":["i"],"ag":[],"V.E":"i","av.E":"i"},"lv":{"am":[]},"h3":{"dB":[],"am":[]},"ca":{"a8":["1"]},"bV":{"n":["1"],"n.E":"1"},"b3":{"am":[]},"iu":{"lp":["1"]},"ar":{"c_":["1"]},"iZ":{"yP":[]},"lN":{"iZ":[],"yP":[]},"iz":{"a6":["1","2"],"W":["1","2"]},"iB":{"iz":["1","2"],"a6":["1","2"],"W":["1","2"],"a6.K":"1","a6.V":"2"},"f0":{"P":["1"],"n":["1"],"n.E":"1"},"iA":{"a8":["1"]},"cp":{"dw":["1"],"ye":["1"],"e8":["1"],"P":["1"],"n":["1"]},"f3":{"a8":["1"]},"V":{"D":["1"],"P":["1"],"n":["1"]},"a6":{"W":["1","2"]},"iC":{"P":["2"],"n":["2"],"n.E":"2"},"iD":{"a8":["2"]},"fH":{"W":["1","2"]},"ea":{"h4":["1","2"],"fH":["1","2"],"iT":["1","2"],"W":["1","2"]},"dw":{"e8":["1"],"P":["1"],"n":["1"]},"iN":{"dw":["1"],"e8":["1"],"P":["1"],"n":["1"]},"fW":{"dw":["1"],"m_":["1"],"e8":["1"],"P":["1"],"n":["1"]},"lB":{"a6":["h","@"],"W":["h","@"],"a6.K":"h","a6.V":"@"},"lC":{"a1":["h"],"P":["h"],"n":["h"],"n.E":"h","a1.E":"h"},"jt":{"ex":["D<i>","h"]},"jO":{"ex":["h","D<i>"]},"hS":{"am":[]},"ke":{"am":[]},"kd":{"ex":["J?","h"]},"l4":{"ex":["h","D<i>"]},"ey":{"b5":["ey"]},"u":{"bf":[],"b5":["bf"]},"dU":{"b5":["dU"]},"i":{"bf":[],"b5":["bf"]},"D":{"P":["1"],"n":["1"]},"bf":{"b5":["bf"]},"i7":{"fI":[]},"e8":{"P":["1"],"n":["1"]},"h":{"b5":["h"],"q4":[]},"lu":{"A":[]},"jp":{"am":[]},"dB":{"am":[]},"cv":{"am":[]},"fN":{"am":[]},"k5":{"am":[]},"io":{"am":[]},"l_":{"am":[]},"fT":{"am":[]},"jC":{"am":[]},"kt":{"am":[]},"ih":{"am":[]},"lX":{"d0":[]},"bm":{"CR":[]},"iV":{"l2":[]},"lR":{"l2":[]},"lq":{"l2":[]},"lA":{"wp":[]},"eg":{"wp":[]},"eL":{"A":[]},"fw":{"A":[]},"fs":{"A":[]},"bv":{"dv":[]},"b9":{"dv":[]},"cD":{"dv":[]},"cy":{"dv":[]},"ku":{"dv":[]},"eE":{"A":[]},"jo":{"A":[]},"d4":{"A":[]},"fP":{"A":[]},"fx":{"A":[]},"jv":{"A":[]},"jB":{"A":[]},"hx":{"A":[]},"eO":{"A":[]},"eH":{"A":[]},"dA":{"A":[]},"eA":{"A":[]},"ci":{"A":[]},"ib":{"A":[]},"cT":{"A":[]},"fO":{"A":[]},"i8":{"CF":[]},"lz":{"c4":[]},"lY":{"c4":[]},"lK":{"CE":[]},"lw":{"BQ":[]},"ig":{"A":[]},"bQ":{"b5":["bQ"]},"bO":{"b5":["bO"]},"fA":{"A":[]},"iv":{"A":[]},"hr":{"ak":[]},"ln":{"a9":[]},"jw":{"ak":[]},"lo":{"a9":[]},"jJ":{"ak":[]},"lr":{"a9":[]},"ix":{"A":[]},"hy":{"ak":[]},"ls":{"a9":[]},"jM":{"ak":[]},"lt":{"a9":[]},"k1":{"ak":[]},"ly":{"a9":[]},"hW":{"ak":[]},"lF":{"a9":[]},"jx":{"CD":[]},"i5":{"ak":[]},"lL":{"a9":[]},"kE":{"ak":[]},"lM":{"a9":[]},"kO":{"ak":[]},"lP":{"a9":[]},"kP":{"ak":[]},"lQ":{"a9":[]},"kS":{"ak":[]},"lT":{"a9":[]},"kR":{"ak":[]},"lS":{"a9":[]},"l5":{"ak":[]},"m0":{"a9":[]},"lg":{"ak":[]},"m3":{"a9":[]},"jZ":{"A":[]},"hF":{"A":[]},"hI":{"A":[]},"k0":{"A":[]},"eD":{"A":[]},"hG":{"A":[]},"eS":{"A":[]},"d2":{"A":[]},"fr":{"A":[]},"jK":{"Bz":[]},"fC":{"A":[]},"h0":{"A":[]},"b8":{"A":[]},"ju":{"A":[]},"ev":{"A":[]},"jG":{"A":[]},"jI":{"A":[]},"dH":{"dq":[]},"le":{"BW":[]},"js":{"A":[]},"cg":{"A":[]},"eC":{"A":[]},"iE":{"d8":[]},"ez":{"A":[]},"dj":{"A":[]},"dV":{"A":[]},"hE":{"A":[]},"dY":{"A":[]},"kv":{"A":[]},"kI":{"A":[]},"eN":{"A":[]},"cH":{"A":[]},"dy":{"A":[]},"bS":{"A":[]},"bB":{"A":[]},"k7":{"A":[]},"eZ":{"A":[]},"cn":{"A":[]},"cN":{"A":[]},"cw":{"A":[]},"cO":{"A":[]},"df":{"A":[]},"de":{"A":[]},"dP":{"A":[]},"dQ":{"A":[]},"eu":{"A":[]},"dO":{"A":[]},"dm":{"A":[]},"cQ":{"A":[]},"cR":{"A":[]},"dn":{"A":[]},"dl":{"A":[]},"dp":{"A":[]},"ch":{"A":[]},"dk":{"A":[]},"cx":{"A":[]},"jm":{"A":[]},"bj":{"A":[]},"cm":{"A":[]},"e5":{"A":[]},"cF":{"A":[]},"bR":{"A":[]},"bA":{"A":[]},"id":{"A":[]},"bP":{"A":[]},"c6":{"A":[]},"c7":{"A":[]},"ec":{"A":[]},"d5":{"A":[]},"lJ":{"CI":[]},"C4":{"D":["i"],"P":["i"],"n":["i"]},"im":{"D":["i"],"P":["i"],"n":["i"]},"CW":{"D":["i"],"P":["i"],"n":["i"]},"C2":{"D":["i"],"P":["i"],"n":["i"]},"wu":{"D":["i"],"P":["i"],"n":["i"]},"C3":{"D":["i"],"P":["i"],"n":["i"]},"CV":{"D":["i"],"P":["i"],"n":["i"]},"o4":{"D":["u"],"P":["u"],"n":["u"]},"BP":{"D":["u"],"P":["u"],"n":["u"]}}'))
A.DE(v.typeUniverse,JSON.parse('{"fV":1,"j_":2,"b6":1,"iN":1,"iU":1,"jF":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.Y
return{mq:s("cN"),dx:s("hp"),bC:s("cu"),v:s("b3"),iF:s("jr"),ul:s("de"),EL:s("cO"),xs:s("cw"),gc:s("df"),lT:s("fi"),bJ:s("fj"),gI:s("fk"),ya:s("fl"),z3:s("bO"),Bu:s("fn"),p:s("aV"),rO:s("fq"),sU:s("dT"),hO:s("b5<@>"),CH:s("ht"),D:s("a2<h,h>"),I:s("a2<h,i>"),M:s("aL<h>"),f7:s("ey"),fP:s("bP"),yb:s("dU"),he:s("P<@>"),yW:s("cg"),g:s("bZ"),Ct:s("A"),yt:s("am"),hl:s("Z"),B:s("o4"),pH:s("aG"),Fr:s("cP"),BO:s("eB"),ls:s("c_<aq>"),vS:s("dk"),aJ:s("dl"),x:s("ch"),bK:s("dm"),gm:s("dn"),dn:s("cQ"),mx:s("dp"),j_:s("cR"),EJ:s("cS<bR,h>"),_:s("dq"),Eb:s("cx"),qX:s("dY"),mF:s("cV"),iO:s("cy"),oW:s("cW"),fl:s("cz"),FA:s("n<ht>"),CB:s("n<cX>"),yT:s("n<h>"),x6:s("n<bT>"),oJ:s("n<u>"),tY:s("n<@>"),uI:s("n<i>"),Fg:s("q<cu>"),jC:s("q<aV>"),km:s("q<fq>"),sa:s("q<ce>"),ns:s("q<jN>"),cO:s("q<dh>"),r:s("q<bZ>"),uH:s("q<jR>"),Dl:s("q<Z>"),iJ:s("q<c_<~>>"),pC:s("q<jW>"),C1:s("q<dq>"),ka:s("q<bg>"),Fm:s("q<eF>"),op:s("q<cU>"),hr:s("q<eG>"),s3:s("q<cy>"),sL:s("q<ae>"),Bv:s("q<kg>"),yH:s("q<bi>"),Bq:s("q<L<h,h>>"),rq:s("q<W<h,J>>"),A7:s("q<W<h,h>>"),cs:s("q<W<h,@>>"),a6:s("q<cX>"),p0:s("q<c2>"),s6:s("q<bv>"),pq:s("q<aw>"),bA:s("q<ds>"),xz:s("q<bw>"),b4:s("q<bk>"),s0:s("q<eJ>"),hc:s("q<cY>"),ea:s("q<dt>"),Fk:s("q<ky>"),qP:s("q<by>"),kv:s("q<eM>"),nR:s("q<+(h,D<by>)>"),kd:s("q<+(h,h)>"),rh:s("q<+influence,light(u,bC)>"),wt:s("q<+(i,h)>"),wx:s("q<+(u,u,u,u)>"),e_:s("q<ak>"),u:s("q<a9>"),Ft:s("q<i8>"),C:s("q<O>"),h1:s("q<bz>"),s2:s("q<c4>"),eY:s("q<b_>"),xB:s("q<d_>"),El:s("q<fS>"),AM:s("q<aO<bO>>"),fs:s("q<aO<bQ>>"),cv:s("q<bC>"),DZ:s("q<dz>"),s:s("q<h>"),r8:s("q<bT>"),fa:s("q<c5>"),k:s("q<K>"),fi:s("q<f>"),ld:s("q<ir>"),Dc:s("q<dD>"),Fi:s("q<c8>"),jV:s("q<d6>"),yo:s("q<eX>"),E:s("q<bc>"),uk:s("q<bp>"),wf:s("q<iE>"),il:s("q<ef>"),l5:s("q<ee>"),ow:s("q<lH>"),j5:s("q<lI>"),pv:s("q<h_>"),Fy:s("q<ej<e3>>"),EM:s("q<ej<cl>>"),w_:s("q<ej<bz>>"),f2:s("q<ej<d9>>"),Fa:s("q<h1>"),n:s("q<u>"),zz:s("q<@>"),t:s("q<i>"),Cf:s("q<J?>"),AN:s("q<bf>"),w:s("hM"),m:s("ae"),ud:s("e0"),Eh:s("c0<@>"),AQ:s("D<aV>"),hk:s("D<bZ>"),b:s("D<bg>"),xp:s("D<cy>"),nx:s("D<ae>"),rW:s("D<W<h,h>>"),qr:s("D<bv>"),R:s("D<aw>"),fG:s("D<cY>"),Es:s("D<by>"),DX:s("D<+(h,h)>"),pL:s("D<+(i,h)>"),xM:s("D<+(u,u,u,u)>"),bE:s("D<bz>"),fx:s("D<d_>"),a:s("D<h>"),uh:s("D<ir>"),D0:s("D<dD>"),cf:s("D<c8>"),p7:s("D<d6>"),dd:s("D<u>"),j:s("D<@>"),J:s("D<i>"),ik:s("D<ae?>"),vX:s("D<J?>"),m2:s("hU"),h6:s("L<h,aG>"),gJ:s("L<h,cP>"),q:s("L<h,h>"),no:s("L<h,b9>"),AC:s("L<@,@>"),ou:s("L<i,h>"),pr:s("L<i,@>"),yx:s("L<h,D<h>>"),mf:s("W<h,dq>"),vD:s("W<h,cD>"),ap:s("W<h,aw>"),G:s("W<h,h>"),qH:s("W<h,dA>"),m0:s("W<h,l>"),gG:s("W<h,u>"),P:s("W<h,@>"),f:s("W<@,@>"),eU:s("W<i,h>"),pG:s("W<i,eV>"),tQ:s("W<i,eW>"),aD:s("W<h,D<+(u,u,u,u)>>"),Bx:s("W<h,D<h>>"),oZ:s("W<h,J?>"),q1:s("W<c7,D<c8>>"),ee:s("W<i,W<h,h>>"),jT:s("M<h,h?>"),w1:s("e3"),pw:s("cD"),jt:s("cX"),wl:s("c2"),kc:s("bv"),rV:s("fJ"),mV:s("eI"),c:s("aq"),K:s("J"),BB:s("bQ"),A:s("aw"),oP:s("ds"),wJ:s("bj"),E4:s("bw"),A_:s("dt"),T:s("by"),DL:s("i4"),AB:s("kA"),yi:s("fL"),xK:s("e7"),Y:s("eM"),iM:s("GR"),ep:s("+()"),k0:s("+(bv,cl)"),ut:s("+(b9,d9)"),rf:s("+(u,u)"),mn:s("+influence,light(u,bC)"),tK:s("+effectiveScore,light,score(u,aV,u)"),nz:s("+(u,u,u,u)"),ez:s("i7"),wZ:s("a9"),lg:s("i9"),tc:s("cZ<cy,bz>"),ja:s("cZ<cD,e3>"),wm:s("cZ<bv,cl>"),qq:s("cZ<b9,d9>"),j2:s("O"),m3:s("bz"),yz:s("c4"),U:s("b_"),F3:s("d_"),Q:s("e8<h>"),oG:s("e8<i>"),en:s("bA"),gl:s("b0"),W:s("e9"),u5:s("bB"),bG:s("bS"),ho:s("fS"),EH:s("aO<bO>"),E0:s("aO<bQ>"),l:s("d0"),w8:s("dz"),qL:s("b8"),N:s("h"),Aj:s("b9"),jP:s("bT"),d:s("c5"),bp:s("dA"),sg:s("ag"),bs:s("dB"),qF:s("eU"),hL:s("ea<h,h>"),qt:s("l1"),eP:s("l2"),cV:s("K"),a7:s("f"),qY:s("bD"),L:s("bU"),gM:s("c6"),hF:s("c7"),vw:s("eV"),BX:s("eW"),aA:s("dD"),AP:s("c8"),sy:s("ld"),bB:s("bb"),aS:s("d6"),fu:s("eX"),fw:s("F<bP>"),vL:s("F<cg>"),vK:s("F<ch>"),Fj:s("F<bB>"),rZ:s("F<bS>"),vY:s("F<h>"),r4:s("F<bD>"),g2:s("F<c6>"),cE:s("F<c7>"),rt:s("S<bA>"),xG:s("S<b0>"),fh:s("S<bD>"),e:s("bc"),hR:s("ar<@>"),BT:s("iB<J?,J?>"),Ez:s("d8"),rL:s("fY"),xT:s("ef"),wU:s("ee"),la:s("lG"),qS:s("iJ"),jS:s("h2"),EF:s("bV<+(h,b9)>"),Br:s("bV<c4>"),V:s("iX"),h:s("iY"),y:s("l"),Bs:s("l()"),kr:s("l(bP)"),e2:s("l(cg)"),rg:s("l(ch)"),bl:s("l(J)"),pz:s("l(bA)"),aV:s("l(b0)"),y2:s("l(bB)"),ty:s("l(bS)"),Ag:s("l(h)"),rd:s("l(bD)"),da:s("l(c6)"),qR:s("l(c7)"),i:s("u"),z:s("@"),pF:s("@()"),h_:s("@(J)"),nW:s("@(J,d0)"),S:s("i"),eZ:s("c_<aq>?"),r9:s("q<J?>?"),gt:s("ae?"),rK:s("D<@>?"),jd:s("W<h,D<h>>?"),X:s("J?"),dR:s("h?"),oI:s("h?(h)"),Fx:s("im?"),F:s("dG<@,@>?"),Af:s("lD?"),k7:s("l?"),wK:s("l(fQ)?"),u6:s("u?"),lo:s("i?"),s7:s("bf?"),Z:s("~()?"),Cv:s("~(dM)?"),kC:s("~(dN)?"),pf:s("~(fu)?"),hq:s("~(fB)?"),CA:s("~(dX)?"),hQ:s("~(bR)?"),Ci:s("~(bA)?"),nf:s("~(bS,bB)?"),DI:s("~(h,u)?"),xl:s("~(l)?"),vR:s("~(i)?"),dt:s("~(i,h)?"),o:s("bf"),H:s("~"),O:s("~()"),m1:s("~(h,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ic=J.k8.prototype
B.a=J.q.prototype
B.d=J.hL.prototype
B.c=J.fE.prototype
B.b=J.e_.prototype
B.id=J.e0.prototype
B.ie=J.hP.prototype
B.t=A.hX.prototype
B.dd=A.i0.prototype
B.ds=J.kw.prototype
B.bS=J.eU.prototype
B.a9=new A.cN(1,"standard")
B.K=new A.jl(B.a9)
B.bX=new A.cN(0,"concise")
B.bY=new A.cN(2,"verbose")
B.ap=new A.dM(null,null,null,null,null)
B.n5=new A.jm(0,"none")
B.n6=new A.jo(0,"opaque")
B.e2=new A.js(4,"ambience")
B.c1=new A.cw(3,"mono")
B.aP=new A.df(0,"full")
B.c0=new A.cw(0,"auto")
B.c_=new A.cO(1,"standard")
B.bZ=new A.de(0,"defaultMix")
B.aQ=new A.dN(B.c0,B.c_,B.aP,B.bZ)
B.aG=new A.kI(1,"pixeldart")
B.e9=new A.hq(B.aG,!1,!0,!1,null,!1,null)
B.c3=new A.dO(1,"capturing")
B.ea=new A.dg(B.c3,null)
B.c4=new A.dO(3,"rejected")
B.aR=new A.dg(B.c4,null)
B.c5=new A.dO(4,"applied")
B.c2=new A.dg(B.c5,null)
B.c6=new A.dO(5,"cancelled")
B.eb=new A.dg(B.c6,null)
B.aS=new A.dO(2,"conflict")
B.aq=new A.ju(0,"add")
B.ef=new A.ev(0,"zero")
B.aa=new A.ev(1,"one")
B.ab=new A.jv(0,"alpha")
B.F=new A.dP(1,"button")
B.p=new A.dQ(0,"normal")
B.ei=new A.b4("settings.back",B.F,"back","back to pause menu",B.p)
B.ar=new A.dP(0,"heading")
B.ej=new A.b4("settings.heading",B.ar,"Settings",null,B.p)
B.ek=new A.b4("settings.controls.heading",B.ar,"Controls",null,B.p)
B.el=new A.b4("settings.controls.back",B.F,"back","back to settings categories",B.p)
B.em=new A.b4("pause.heading",B.ar,"Paused",null,B.p)
B.en=new A.dP(3,"slider")
B.eo=new A.dP(4,"toggle")
B.c7=new A.dP(5,"keybind")
B.as=new A.dQ(5,"disabled")
B.ep=new A.dQ(6,"error")
B.eq=new A.dQ(7,"destructive")
B.c8=new A.dQ(8,"remapping")
B.c9=new A.hp()
B.er=new A.nb()
B.n7=new A.nd()
B.es=new A.jt()
B.ca=new A.np()
B.et=new A.hA(A.Y("hA<0&>"))
B.cb=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.eu=function() {
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
B.ez=function(getTagFallback) {
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
B.ev=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.ey=function(hooks) {
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
B.ex=function(hooks) {
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
B.ew=function(hooks) {
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
B.cc=function(hooks) { return hooks; }

B.j=new A.kd()
B.n8=new A.ps()
B.eA=new A.kt()
B.n9=new A.qe()
B.eB=new A.qf()
B.aT=new A.qh()
B.eC=new A.d_()
B.aH=new A.cn(1,"gradeLUT")
B.eD=new A.d_()
B.eE=new A.qE()
B.eF=new A.qG()
B.f=new A.qL()
B.cd=new A.l4()
B.mc=new A.d4(0,"position")
B.mh=new A.bD(B.mc,0,3)
B.dV=new A.d4(1,"normal")
B.mi=new A.bD(B.dV,3,3)
B.md=new A.d4(2,"color")
B.mj=new A.bD(B.md,6,4)
B.me=new A.d4(4,"alpha")
B.mk=new A.bD(B.me,10,1)
B.mf=new A.d4(5,"uv0")
B.ml=new A.bD(B.mf,11,2)
B.mg=new A.d4(8,"legacyMaterialEffect")
B.mm=new A.bD(B.mg,13,1)
B.W=s([B.mh,B.mi,B.mj,B.mk,B.ml,B.mm],A.Y("q<bD>"))
B.ac=new A.rO()
B.aU=new A.lA()
B.w=new A.lN()
B.at=new A.lX()
B.eG=new A.fo(1.3089969389957472,0.1,60)
B.eH=new A.fo(1.0471975511965976,0.1,60)
B.eI=new A.fo(0.8726646259971648,0.08,45)
B.ad=new A.fr(0,"colorOnly")
B.ce=new A.fr(1,"colorAndDepth")
B.aV=new A.fr(2,"depthOnly")
B.aW=new A.jB(1,"srgb")
B.cf=new A.fs(0,"open")
B.eJ=new A.fs(1,"committed")
B.eK=new A.fs(2,"aborted")
B.aX=new A.fw(0,"open")
B.eR=new A.fw(1,"committed")
B.eS=new A.fw(2,"rolledBack")
B.au=new A.jG(1,"back")
B.av=new A.jI(0,"less")
B.eU=new A.hx(2,"full")
B.aw=new A.bP(0,"open")
B.cg=new A.bP(1,"chain")
B.ch=new A.bP(2,"throughDoor")
B.ci=new A.bP(3,"letterbox")
B.ae=new A.bP(4,"ignore")
B.T=new A.fx(0,"opaque")
B.f_=new A.fx(1,"masked")
B.aY=new A.fx(2,"blended")
B.f0=new A.fy(!1,B.av,!1,!0,B.aa,B.aa,B.aq,!1,B.au,!0,!1,!0,!0,!0,!0,!1)
B.f1=new A.fy(!0,B.av,!1,!0,B.aa,B.aa,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eg=new A.ev(2,"srcAlpha")
B.eh=new A.ev(3,"oneMinusSrcAlpha")
B.f2=new A.fy(!0,B.av,!1,!0,B.eg,B.eh,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.f3=new A.dU(0)
B.f4=new A.dU(24e5)
B.cj=new A.cg(0,"compliance")
B.f5=new A.fz(B.cj)
B.ck=new A.cg(1,"rupture")
B.f6=new A.fz(B.ck)
B.cl=new A.cg(2,"synchronisation")
B.f7=new A.fz(B.cl)
B.cm=new A.ez(0,"front")
B.f8=new A.ez(1,"rearService")
B.f9=new A.ez(2,"sideBoundary")
B.fa=new A.ez(3,"roofline")
B.m=new A.dV(0,"north")
B.x=new A.dV(1,"east")
B.l=new A.dV(2,"south")
B.G=new A.dV(3,"west")
B.ax=new A.hE(0,"ground")
B.ay=new A.hE(1,"first")
B.fb=new A.dj(0,"mantle")
B.fc=new A.dj(1,"portal")
B.fe=new A.dj(3,"inventory")
B.cn=new A.dj(4,"aftermath")
B.fd=new A.dj(2,"window")
B.fg=new A.dW(B.fd,"shutter","the shutter")
B.ff=new A.dj(5,"none")
B.fh=new A.dW(B.ff,null,null)
B.fi=new A.G("saved mantle history is malformed",null,null)
B.fj=new A.G("rupture elapsed time is malformed",null,null)
B.fk=new A.G("presentation keys must be strings",null,null)
B.fl=new A.G("unsupported accessibility profile",null,null)
B.fm=new A.G("inventory inspections must be an object",null,null)
B.co=new A.G("saved mantle state is malformed",null,null)
B.fn=new A.G("inactive rupture has elapsed time",null,null)
B.fo=new A.G("control sensitivity is outside 0.1\u20133.0",null,null)
B.fp=new A.G("invalid action bindings",null,null)
B.fq=new A.G("listener room is empty",null,null)
B.fr=new A.G("control bindings conflict",null,null)
B.fs=new A.G("saved difficulty state is malformed",null,null)
B.ft=new A.G("saved house drift state is malformed",null,null)
B.fu=new A.G("saved sleep record is malformed",null,null)
B.fv=new A.G("UI scale must be between 0.8 and 2.0",null,null)
B.fw=new A.G("unsupported settings store",null,null)
B.fx=new A.G("settings values must be an object",null,null)
B.fy=new A.G("saved day-loop sleepHistory must be a list",null,null)
B.fz=new A.G("invalid anisotropy limit",null,null)
B.fA=new A.G("audio event position is not finite",null,null)
B.fB=new A.G("event sequence must be non-negative",null,null)
B.fC=new A.G("inventory inspection counts are invalid",null,null)
B.fD=new A.G("only keybinds can be remapping",null,null)
B.fE=new A.G("modelScale must be positive and finite",null,null)
B.fF=new A.G("listener position is not finite",null,null)
B.fG=new A.G("invalid action ID",null,null)
B.fH=new A.G("saved window state is malformed",null,null)
B.fI=new A.G("unsupported graphics preset",null,null)
B.fJ=new A.G("save run and meta must be objects",null,null)
B.fK=new A.G("saved house state is malformed",null,null)
B.fL=new A.G("saved sleep record must be an object",null,null)
B.fM=new A.G("sound cue must be a non-empty string",null,null)
B.fN=new A.G("saved session run is malformed",null,null)
B.fO=new A.G("save map keys must be strings",null,null)
B.fP=new A.G("unsupported graphics profile",null,null)
B.fQ=new A.G("unsupported audio options",null,null)
B.fR=new A.G("transform.scale must be positive",null,null)
B.fS=new A.G("Escape is reserved for pause navigation",null,null)
B.fT=new A.G("saved day-loop state is malformed",null,null)
B.fU=new A.G("rupture extinguished mantle is unknown",null,null)
B.cp=new A.G("unsupported controls profile",null,null)
B.cq=new A.G("saved portal state is malformed",null,null)
B.fV=new A.G("acoustic portal profile is not finite",null,null)
B.fW=new A.G("saved house state does not match this house",null,null)
B.fX=new A.G("presentation snapshot contains a non-finite number",null,null)
B.fY=new A.G("unsupported gameplay settings profile",null,null)
B.fZ=new A.G("save contains a non-finite number",null,null)
B.h_=new A.G("unsupported graphics store",null,null)
B.h0=new A.G("brush component needs an id and label",null,null)
B.h1=new A.G("text.json root must be an object",null,null)
B.h2=new A.G("event kind is empty",null,null)
B.h3=new A.G("invalid control binding token",null,null)
B.h4=new A.G("audio transmission muffle is invalid",null,null)
B.h5=new A.G("acoustic portal muffle order is invalid",null,null)
B.h6=new A.G("unsupported settings profile",null,null)
B.h7=new A.G("saved session clock is malformed",null,null)
B.h8=new A.G("rupture mantle IDs are malformed",null,null)
B.h9=new A.G("invalid gameplay setting: contextualReminders",null,null)
B.ha=new A.G("invalid screen-reader verbosity",null,null)
B.hb=new A.G("saved sleep record has an unknown enum",null,null)
B.hc=new A.G("audio cue variants are empty",null,null)
B.hd=new A.G("save root must be an object",null,null)
B.he=new A.G("audio event identity is empty",null,null)
B.hf=new A.G("render capabilities contain invalid limits",null,null)
B.hg=new A.G("saved house overrides are malformed",null,null)
B.V=new A.c1(0,0,0)
B.cQ=new A.c1(1,1,1)
B.iY=s([],t.Fk)
B.bi=s([],t.cv)
B.hh=new A.jV(B.V,B.V,0,1,null,null,B.cQ,0,null,B.iY,B.bi)
B.cr=new A.aG(0,0,0)
B.hi=new A.eA(0,"idle")
B.az=new A.eA(1,"active")
B.hj=new A.eA(2,"ended")
B.hk=new A.eA(3,"aborted")
B.cs=new A.fA(0,"outside")
B.hl=new A.fA(1,"intersects")
B.hm=new A.fA(2,"inside")
B.hn=new A.eC(0,"timeAdvanced")
B.ho=new A.eC(1,"dayEndReached")
B.hp=new A.eC(4,"slept")
B.hq=new A.eC(5,"complianceFloorTripped")
B.aZ=new A.dk(0,"twentyFourHour")
B.ct=new A.dk(1,"twelveHour")
B.cu=new A.dl(0,"important")
B.cv=new A.dl(1,"always")
B.b_=new A.ch(0,"pauseAndMute")
B.cw=new A.dm(0,"press")
B.cx=new A.dm(1,"hold")
B.cy=new A.dn(0,"compact")
B.cz=new A.dn(1,"spacious")
B.cA=new A.cQ(1,"standard")
B.cB=new A.cQ(2,"detailed")
B.cC=new A.dp(0,"toast")
B.cD=new A.dp(1,"detailed")
B.cE=new A.cR(1,"readable")
B.hw=new A.hF(0,"vertex")
B.cF=new A.hF(1,"indices")
B.cG=new A.jZ(0,"staticDraw")
B.h=new A.hG(0,"ready")
B.U=new A.hG(1,"lost")
B.af=new A.fC(0,"prepared")
B.hx=new A.fC(1,"committed")
B.hy=new A.fC(2,"rolledBack")
B.hz=new A.eD(0,"color")
B.cH=new A.eD(1,"colorAndGlow")
B.hA=new A.eD(2,"colorDepthGlow")
B.b0=new A.eD(3,"depthOnly")
B.b1=new A.hI(1,"linear")
B.cI=new A.k0(0,"clampToEdge")
B.hB=new A.k_(1,1,1,!1,B.b1,B.b1,B.cI,1)
B.b2=new A.hI(2,"linearMipmapLinear")
B.hC=new A.cT(0,"beforeShadow")
B.hD=new A.cT(2,"beforeDepth")
B.cJ=new A.cT(3,"afterDepth")
B.cK=new A.cT(4,"beforeWorld")
B.hE=new A.cT(5,"afterWorld")
B.L=new A.cT(6,"afterResolve")
B.hF=new A.cT(9,"beforePresent")
B.cL=new A.ci(0,"readBeforeWrite")
B.hG=new A.ci(1,"duplicateWriter")
B.hH=new A.ci(2,"sampledMultisampledAttachment")
B.b3=new A.ci(3,"invalidResolve")
B.hI=new A.ci(4,"formatOrSizeMismatch")
B.hJ=new A.ci(5,"unversionedReadWrite")
B.hK=new A.ci(6,"invalidHistoryRead")
B.hL=new A.ci(7,"dependencyCycle")
B.hM=new A.ci(8,"missingCapability")
B.cM=new A.cx(0,"high")
B.b4=new A.cx(1,"standard")
B.b5=new A.dX(1,B.b4,"auto",!1,"display","off","high")
B.aA=new A.dY(0,"player")
B.b6=new A.dY(1,"inserted")
B.cN=new A.dY(2,"warden")
B.cO=new A.eE(0,"wrongKind")
B.cP=new A.eE(1,"staleGeneration")
B.hP=new A.eE(2,"doubleRelease")
B.aB=new A.eE(3,"releasedResource")
B.hS=new A.cU("kitchen-range","settle")
B.hT=new A.cU("front-door-knocker","knock")
B.hU=new A.cU("cellar-drain","drip")
B.hV=new A.cU("bedroom-timber","creak")
B.hW=new A.cU("kitchen-pipe","tick")
B.hX=new A.cU("bathroom-cistern","settle")
B.hY=new A.cU("landing-window","wind")
B.ib=new A.k7(1,"visitor")
B.ig=new A.pp(null)
B.ih=new A.pq(null)
B.b7=new A.kf(!1,0,0.85,0.92,1)
B.ii=new A.c1(0.008,0.012,0.024)
B.cR=s([0,2,2,3],t.t)
B.ij=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b8=s([B.cu,B.cv],A.Y("q<dl>"))
B.ik=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b9=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.E=new A.bA(0,"audio")
B.Q=new A.id(0,"level")
B.lt=new A.b0("master","Master",B.E,B.Q,1,0,1,"audio")
B.ly=new A.b0("voice","Visitor voice",B.E,B.Q,1,0,1,"audio")
B.lp=new A.b0("effects","Effects",B.E,B.Q,1,0,1,"audio")
B.lq=new A.b0("ambience","House ambience",B.E,B.Q,1,0,1,"audio")
B.lu=new A.b0("music","Music",B.E,B.Q,1,0,1,"audio")
B.aI=new A.bA(1,"display")
B.lx=new A.b0("brightness","Display brightness",B.aI,B.Q,1,0.6,1.4,"display")
B.ai=new A.id(1,"toggle")
B.ls=new A.b0("muted","Mute house audio",B.E,B.ai,!1,null,null,"audio")
B.a4=new A.bA(2,"accessibility")
B.lv=new A.b0("mono","Mono-compatible mix",B.a4,B.ai,!1,null,null,"audio")
B.lr=new A.b0("high-contrast","High-contrast interface",B.a4,B.ai,!1,null,null,"display")
B.lw=new A.b0("strong-highlights","Strong focus highlights",B.a4,B.ai,!1,null,null,"display")
B.C=s([B.lt,B.ly,B.lp,B.lq,B.lu,B.lx,B.ls,B.lv,B.lr,B.lw],A.Y("q<b0>"))
B.B=s(["who","verb","object","place","time"],t.s)
B.il=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.e3=new A.de(1,"strong")
B.ba=s([B.bZ,B.e3],A.Y("q<de>"))
B.ec=new A.eu(0,"swap")
B.ed=new A.eu(1,"replace")
B.ee=new A.eu(2,"cancel")
B.im=s([B.ec,B.ed,B.ee],A.Y("q<eu>"))
B.io=s([2,5,9,12,16,19],t.t)
B.hr=new A.ch(1,"pauseOnly")
B.hs=new A.ch(2,"continuePlayback")
B.aC=s([B.b_,B.hr,B.hs],A.Y("q<ch>"))
B.ip=s(["uQuantizationBits","uDitherStrength"],t.s)
B.ir=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.is=s([B.aw,B.cg,B.ch,B.ci,B.ae],A.Y("q<bP>"))
B.it=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.iu=s(["30","60","display"],t.s)
B.ao=new A.c7(0,"full")
B.bU=new A.c7(1,"compressed")
B.bV=new A.c7(2,"off")
B.cS=s([B.ao,B.bU,B.bV],A.Y("q<c7>"))
B.bb=s([B.aZ,B.ct],A.Y("q<dk>"))
B.iv=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e8=new A.df(1,"reduced")
B.bc=s([B.aP,B.e8],A.Y("q<df>"))
B.e4=new A.cO(0,"wide")
B.e5=new A.cO(2,"night")
B.bd=s([B.e4,B.c_,B.e5],A.Y("q<cO>"))
B.iw=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iH=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cT=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.be=s([B.cy,B.cz],A.Y("q<dn>"))
B.lM=new A.bS(0,"long")
B.dK=new A.bS(1,"short")
B.cU=s([B.lM,B.dK],A.Y("q<bS>"))
B.eP=new A.ce("1 - 9","Select Response",!0)
B.eL=new A.ce("SPACE","Silence Ring",!1)
B.iJ=s([B.eP,B.eL],t.sa)
B.Z=new A.bR(0,"visual")
B.bv=new A.bR(1,"graphics")
B.a_=new A.bR(2,"gameplay")
B.bw=new A.bR(3,"controls")
B.H=new A.bR(4,"audio")
B.I=new A.bR(5,"accessibility")
B.iK=s([B.Z,B.bv,B.a_,B.bw,B.H,B.I],A.Y("q<bR>"))
B.iL=s([2.1,4.2,6.3],t.n)
B.iM=s(["master","voice","effects","ambience","music"],t.s)
B.bf=s([B.cC,B.cD],A.Y("q<dp>"))
B.iN=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hN=new A.cx(2,"safe")
B.hO=new A.cx(3,"custom")
B.cV=s([B.cM,B.b4,B.hN,B.hO],A.Y("q<cx>"))
B.D=new A.cn(0,"inactive")
B.bG=new A.cn(2,"affineWarp")
B.dD=new A.cn(3,"vertexSnap")
B.bH=new A.cn(4,"tapeGiveup")
B.bI=new A.cn(5,"portalFail")
B.a2=new A.cn(6,"lightsOut")
B.cW=s([B.D,B.aH,B.bG,B.dD,B.bH,B.bI,B.a2],A.Y("q<cn>"))
B.iO=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iP=s([B.aA,B.b6,B.cN],A.Y("q<dY>"))
B.iQ=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.n0=new A.bp("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.n_=new A.bp("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.mW=new A.bp("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.n3=new A.bp("ronnie.response","named","A route card has Ronnie written on its back.")
B.n2=new A.bp("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iR=s([B.n0,B.n_,B.mW,B.n3,B.n2],t.uk)
B.n1=new A.bp("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.mZ=new A.bp("ronnie.response","named","The name Ronnie holds when the room does not.")
B.mX=new A.bp("denise.revision","accepted","One correction remains yours to protect.")
B.mU=new A.bp("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iS=s([B.n1,B.mZ,B.mX,B.mU],t.uk)
B.M=s([],t.cO)
B.j1=s([],t.Fm)
B.j0=s([],t.op)
B.iT=s([],A.Y("q<cz>"))
B.iX=s([],t.yH)
B.bg=s([],t.b4)
B.X=s([],t.qP)
B.j2=s([],t.u)
B.cY=s([],t.xB)
B.iU=s([],t.El)
B.o=s([],t.s)
B.cZ=s([],t.ld)
B.bh=s([],t.E)
B.iV=s([],t.t)
B.iW=s([],t.zz)
B.hR=new A.hK(15,"kitchen",-0.3,0)
B.hQ=new A.hK(19,"spare-room",0,0.3)
B.N=s([B.hR,B.hQ],A.Y("q<hK>"))
B.j4=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lJ=new A.bB(0,"bed")
B.lK=new A.bB(1,"chair")
B.lL=new A.bB(2,"floor")
B.d_=s([B.lJ,B.lK,B.lL],A.Y("q<bB>"))
B.j5=s(["high","medium","low"],t.s)
B.e6=new A.cw(1,"headphones")
B.e7=new A.cw(2,"speakers")
B.bj=s([B.c0,B.e6,B.e7,B.c1],A.Y("q<cw>"))
B.j6=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bk=s([B.cw,B.cx],A.Y("q<dm>"))
B.bu=new A.cm(0,"root")
B.dg=new A.bj(0,"pauseMenu")
B.k8=new A.ds(B.bu,B.dg,null)
B.j7=s([B.k8],t.bA)
B.bl=s([B.bX,B.a9,B.bY],A.Y("q<cN>"))
B.hu=new A.cR(0,"instant")
B.hv=new A.cR(2,"slow")
B.bm=s([B.hu,B.cE,B.hv],A.Y("q<cR>"))
B.j8=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.j9=s([B.E,B.aI,B.a4],A.Y("q<bA>"))
B.d0=s([B.m,B.x,B.l,B.G],A.Y("q<dV>"))
B.R=new A.dy(0,"pbrMaterial")
B.a5=new A.dy(1,"shadowsAndOcclusion")
B.aj=new A.dy(2,"surfaceWeathering")
B.n=new A.dy(3,"atmosphereAndPost")
B.lG=new A.dy(4,"debugView")
B.bn=s([B.R,B.a5,B.aj,B.n,B.lG],A.Y("q<dy>"))
B.bJ=new A.b8(0,"depthTest")
B.bK=new A.b8(1,"depthFunc")
B.bL=new A.b8(2,"depthWrite")
B.bM=new A.b8(3,"blendEnable")
B.bN=new A.b8(4,"blendFunc")
B.bO=new A.b8(5,"blendEquation")
B.bP=new A.b8(6,"cullEnable")
B.bQ=new A.b8(7,"cullFace")
B.dN=new A.b8(8,"frontFace")
B.lP=new A.b8(9,"stencilEnable")
B.dL=new A.b8(10,"colorMask")
B.dM=new A.b8(11,"scissorEnable")
B.ja=s([B.bJ,B.bK,B.bL,B.bM,B.bN,B.bO,B.bP,B.bQ,B.dN,B.lP,B.dL,B.dM],A.Y("q<b8>"))
B.aJ=new A.cH(0,"none")
B.lA=new A.cH(1,"albedoOnly")
B.lB=new A.cH(2,"normalsOnly")
B.lC=new A.cH(3,"roughnessOnly")
B.lD=new A.cH(4,"metallicOnly")
B.lE=new A.cH(5,"aoOnly")
B.lF=new A.cH(6,"wireframeOnly")
B.d1=s([B.aJ,B.lA,B.lB,B.lC,B.lD,B.lE,B.lF],A.Y("q<cH>"))
B.jb=s(["off","fxaa","msaa2","msaa4"],t.s)
B.eX=new A.dh("A.J.",1.275)
B.eV=new A.dh("A.J.",1.53)
B.eY=new A.dh("A.J.",1.77)
B.eZ=new A.dh("A.J.",2.025)
B.eW=new A.dh("A.J.",4.8)
B.jc=s([B.eX,B.eV,B.eY,B.eZ,B.eW],t.cO)
B.jd=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.je=s(["uBloomStrength"],t.s)
B.jf=s(["uLutSize","uStrength"],t.s)
B.jg=s([B.cj,B.ck,B.cl],A.Y("q<cg>"))
B.jh=s(["uTexelSize","uNear","uFar"],t.s)
B.d2=s(["uTexelStep"],t.s)
B.ji=s(["uninitialized"],t.s)
B.ht=new A.cQ(0,"minimal")
B.bo=s([B.ht,B.cA,B.cB],A.Y("q<cQ>"))
B.mY=new A.bp("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.mT=new A.bp("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.mS=new A.bp("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.mV=new A.bp("ronnie.response","named","The route card gives one name its own line.")
B.jj=s([B.mY,B.mT,B.mS,B.mV],t.uk)
B.a7=new A.c6(0,"waiting")
B.am=new A.c6(1,"atDoor")
B.an=new A.c6(2,"consulting")
B.aL=new A.c6(3,"resolved")
B.jk=s([B.a7,B.am,B.an,B.aL],A.Y("q<c6>"))
B.eQ=new A.ce("W A S D","Move",!1)
B.eO=new A.ce("TAB","Journal",!1)
B.eN=new A.ce("CAPS","Shader Lab",!1)
B.eM=new A.ce("ESC","Pause",!1)
B.jl=s([B.eQ,B.eO,B.eN,B.eM],t.sa)
B.jm=s(["floor-linoleum","ceiling-stained"],t.s)
B.jZ={uAlbedo:0}
B.d3=new A.a2(B.jZ,[0],t.I)
B.k5={uSsaoRaw:0,uSceneDepth:1}
B.jn=new A.a2(B.k5,[0,1],t.I)
B.de={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iG=s(["KeyW","GamepadDpadUp"],t.s)
B.iF=s(["KeyS","GamepadDpadDown"],t.s)
B.ix=s(["KeyA","GamepadDpadLeft"],t.s)
B.iy=s(["KeyD","GamepadDpadRight"],t.s)
B.iz=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iD=s(["KeyQ","GamepadB"],t.s)
B.iI=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.j3=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iE=s(["KeyR","GamepadX"],t.s)
B.iA=s(["KeyF","GamepadRB"],t.s)
B.iB=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iC=s(["KeyL"],t.s)
B.iq=s(["Escape","GamepadMenu"],t.s)
B.jo=new A.a2(B.de,[B.iG,B.iF,B.ix,B.iy,B.iz,B.iD,B.iI,B.j3,B.iE,B.iA,B.iB,B.iC,B.iq],A.Y("a2<h,D<h>>"))
B.jp=new A.a2(B.de,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.D)
B.k2={uScene:0,uHistory:1}
B.jq=new A.a2(B.k2,[0,1],t.I)
B.jE={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.jr=new A.a2(B.jE,["f8ff05f019166b02150cde34c23a826d99fb13cc","838f2abdef9e45c6f2f4b8c952bdd7694ba3cfdd","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.D)
B.jQ={aPosition:0,aUvMat:1}
B.d4=new A.a2(B.jQ,[0,4],t.I)
B.k3={uScene:0,uLut:1}
B.js=new A.a2(B.k3,[0,1],t.I)
B.k4={uSource:0}
B.d5=new A.a2(B.k4,[0],t.I)
B.jX={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jt=new A.a2(B.jX,[0,1,2,3,4,5,6],t.I)
B.d6=new A.cS([B.Z,"settings.visual",B.bv,"settings.graphics",B.a_,"settings.gameplay",B.bw,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d7=new A.cS([B.Z,"visual",B.bv,"graphics",B.a_,"gameplay",B.bw,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jM={uSharp:0,uBlurred:1,uSceneDepth:2}
B.ju=new A.a2(B.jM,[0,1,2],t.I)
B.k7={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jv=new A.a2(B.k7,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.D)
B.jS={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.i7=new A.bh("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.i2=new A.bh("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.i6=new A.bh("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.i9=new A.bh("wallpaper-damp","grime",7106925,0.94,0.76)
B.i3=new A.bh("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.i8=new A.bh("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.ia=new A.bh("wallpaper-peeling","grime",9340536,0.91,0.68)
B.i4=new A.bh("floor-wood","wall-plaster",7755327,0.88,0.22)
B.i0=new A.bh("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.i1=new A.bh("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hZ=new A.bh("floor-concrete","grime",7828331,0.96,0.92)
B.i_=new A.bh("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.i5=new A.bh("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bp=new A.a2(B.jS,[B.i7,B.i2,B.i6,B.i9,B.i3,B.i8,B.ia,B.i4,B.i0,B.i1,B.hZ,B.i_,B.i5],A.Y("a2<h,bh>"))
B.k_={uBloom:0}
B.jw=new A.a2(B.k_,[0],t.I)
B.k0={uSceneDepth:0}
B.jx=new A.a2(B.k0,[0],t.I)
B.k1={uScene:0}
B.jy=new A.a2(B.k1,[0],t.I)
B.O={}
B.d9=new A.a2(B.O,[],A.Y("a2<h,hp>"))
B.d8=new A.a2(B.O,[],t.D)
B.bq=new A.a2(B.O,[],A.Y("a2<h,u>"))
B.y=new A.a2(B.O,[],t.I)
B.na=new A.a2(B.O,[],A.Y("a2<h,h?>"))
B.jz=new A.a2(B.O,[],A.Y("a2<@,@>"))
B.jH={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jA=new A.a2(B.jH,[0,1,2,3,4,5,6],t.I)
B.dh=new A.cF(0,"resume")
B.di=new A.cF(1,"settings")
B.dj=new A.cF(2,"controls")
B.dk=new A.cF(3,"save")
B.dl=new A.cF(4,"help")
B.dm=new A.cF(5,"credits")
B.dn=new A.cF(6,"back")
B.jB=new A.cS([B.dh,"pause.resume",B.di,"pause.settings",B.dj,"pause.controls",B.dk,"pause.save",B.dl,"pause.help",B.dm,"pause.credits",B.dn,"pause.back"],A.Y("cS<cF,h>"))
B.jU={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jC=new A.a2(B.jU,[0,1,2,3],t.I)
B.k6={uTex:0}
B.jD=new A.a2(B.k6,[0],t.I)
B.br=new A.cS([B.aH,1,B.bG,1.5,B.dD,1.5,B.bH,2,B.bI,2,B.a2,4],A.Y("cS<cn,u>"))
B.bs=new A.eH(0,"resident")
B.da=new A.eH(1,"pending")
B.db=new A.eH(2,"missing")
B.dc=new A.eH(3,"evicted")
B.iZ=s([],t.bA)
B.j_=s([],A.Y("q<bj>"))
B.bt=new A.e4(B.iZ,B.j_,null)
B.df=new A.cm(1,"settings")
B.k9=new A.cm(2,"visual")
B.ka=new A.cm(3,"graphics")
B.kb=new A.cm(4,"gameplay")
B.kc=new A.cm(5,"controls")
B.kd=new A.cm(6,"audio")
B.ke=new A.cm(7,"accessibility")
B.kf=new A.cm(8,"credits")
B.Y=new A.bj(1,"settings")
B.kg=new A.bj(2,"journal")
B.kh=new A.bj(3,"sleep")
B.ki=new A.bj(4,"help")
B.kj=new A.bj(5,"visitor")
B.kk=new A.bj(6,"ending")
B.dp=new A.e5(0,"opened")
B.dq=new A.e5(2,"backed")
B.dr=new A.e5(3,"resumed")
B.kl=new A.e5(4,"dismissed")
B.a0=new A.e5(5,"unchanged")
B.km=new A.bw("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.kn=new A.bw("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.ko=new A.bw("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.kp=new A.bw("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kq=new A.bw("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kr=new A.bw("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.ks=new A.bw("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.kt=new A.bw("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.ku=new A.bw("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kv=new A.ku(0,1,null)
B.kx=new A.kv(1,"high")
B.kw=new A.qg(!1,!0,!0,!0,!1,B.kx,35,256)
B.ky=new A.kz(1,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.bx=new A.eL(0,"safe")
B.P=new A.eL(1,"standard")
B.a1=new A.eL(2,"high")
B.a3=new A.aL(B.O,0,t.M)
B.ag=new A.e7(B.bx,B.a3)
B.jY={shadows:0}
B.lo=new A.aL(B.jY,1,t.M)
B.dt=new A.e7(B.P,B.lo)
B.jJ={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lg=new A.aL(B.jJ,5,t.M)
B.du=new A.e7(B.a1,B.lg)
B.kz=new A.eL(4,"shipping")
B.jL={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.lh=new A.aL(B.jL,7,t.M)
B.nb=new A.e7(B.kz,B.lh)
B.kB=new A.aQ(0,1)
B.kC=new A.b1(0.35,0.52,0.88)
B.kD=new A.ay(0.46,0.25,0.2)
B.dv=new A.b1(0.22,0.45,0.92)
B.kE=new A.ay(0.48,0.4,0.34)
B.kF=new A.ay(0.31,0.25,0.23)
B.by=new A.b1(0.75,0.52,0.42)
B.kG=new A.b1(0.4,0.65,0.95)
B.bz=new A.b1(0.88,0.96,1)
B.kH=new A.ay(0.37,0.33,0.31)
B.kI=new A.b1(0.62,0.48,0.45)
B.kJ=new A.ay(0.34,0.32,0.29)
B.dw=new A.ay(0.38,0.25,0.19)
B.bA=new A.b1(0.9,0.8,0.72)
B.aD=new A.b1(0.28,0.16,0.12)
B.kK=new A.ay(0.31,0.28,0.24)
B.aE=new A.b1(0.65,0.45,0.35)
B.kL=new A.ay(0.58,0.56,0.5)
B.dx=new A.b1(0.2,0.38,0.9)
B.kM=new A.ay(0.44,0.37,0.28)
B.kN=new A.ay(0.52,0.5,0.44)
B.kO=new A.ay(0.24,0.25,0.27)
B.kP=new A.ay(0.28,0.27,0.25)
B.kQ=new A.b1(0.35,0.28,0.25)
B.dy=new A.b1(0.52,0.32,0.38)
B.kR=new A.ay(0.42,0.4,0.38)
B.kS=new A.ay(0.18,0.2,0.21)
B.kT=new A.ay(0.2,0.12,0.1)
B.aF=new A.b1(0.35,0.2,0.15)
B.kU=new A.ay(0.12,0.15,0.2)
B.dz=new A.eN(0,"constructed")
B.z=new A.eN(1,"ready")
B.bB=new A.eN(2,"lost")
B.dA=new A.eN(3,"disposed")
B.eT=new A.hx(1,"errorsOnly")
B.kV=new A.i9(B.ag,384,216,1,0,512,32,4,1,B.eT)
B.bC=new A.eO(0,"constructed")
B.kW=new A.eO(1,"initializing")
B.bD=new A.eO(2,"ready")
B.dB=new A.eO(3,"contextLost")
B.i=new A.fO(0,"read")
B.k=new A.fO(1,"write")
B.J=new A.fO(2,"historyRead")
B.bE=new A.fP(0,"prepared")
B.kX=new A.fP(1,"committed")
B.kY=new A.fP(2,"rolledBack")
B.r=new A.ib(0,"rgba8")
B.kZ=new A.aI("dofBlurH",B.r,192,108,1,0)
B.l_=new A.aI("dofBlurV",B.r,192,108,1,0)
B.l0=new A.aI("dofOutput",B.r,384,216,1,0)
B.dC=new A.ib(2,"depth24")
B.l1=new A.aI("shadowMap",B.dC,512,512,1,0)
B.l2=new A.aI("ssaoRaw",B.r,192,108,1,0)
B.l3=new A.aI("ssaoBlurred",B.r,192,108,1,0)
B.l4=new A.aI("gradeOutput",B.r,384,216,1,0)
B.l5=new A.aI("vhsOutput",B.r,384,216,1,0)
B.l6=new A.aI("sceneDepth",B.dC,384,216,1,0)
B.l7=new A.aI("bloomBlurH",B.r,192,108,1,0)
B.l8=new A.aI("bloomBlurV",B.r,192,108,1,0)
B.l9=new A.aI("present",B.r,384,216,1,0)
B.bF=new A.aI("sceneColor",B.r,384,216,1,0)
B.la=new A.aI("ps1Output",B.r,384,216,1,0)
B.lb=new A.eQ(null,"save storage unavailable")
B.lc=new A.eQ(null,"save could not be recovered")
B.ld=new A.eQ(null,null)
B.jO={WheelUp:0,WheelDown:1}
B.le=new A.aL(B.jO,2,t.M)
B.jV={open:0,closed:1}
B.lf=new A.aL(B.jV,2,t.M)
B.jI={Escape:0}
B.dE=new A.aL(B.jI,1,t.M)
B.jG={open:0,closed:1,mixed:2}
B.li=new A.aL(B.jG,3,t.M)
B.jT={front:0,"rear-service":1}
B.lj=new A.aL(B.jT,2,t.M)
B.jW={overcast:0,rain:1}
B.lk=new A.aL(B.jW,2,t.M)
B.jR={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.ll=new A.aL(B.jR,16,t.M)
B.jP={Escape:0,Tab:1,F11:2}
B.dF=new A.aL(B.jP,3,t.M)
B.jN={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lm=new A.aL(B.jN,5,t.M)
B.jK={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ah=new A.aL(B.jK,7,t.M)
B.jF={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.ln=new A.aL(B.jF,9,t.M)
B.dI=new A.eS(2,"link")
B.lz=new A.ie(B.dI,"gl.createProgram() returned null")
B.dG=new A.eS(0,"vertex")
B.dH=new A.eS(1,"fragment")
B.dJ=new A.eS(3,"validation")
B.lH=new A.ig(0,"full")
B.lI=new A.ig(2,"culled")
B.a6=new A.K(0,1,0)
B.bT=new A.K(0,-1,0)
B.lN=new A.bC(-1,B.a6,B.bT,B.cQ,1,1,0.3,0.5)
B.cX=s([],t.n)
B.lO=new A.kT(!1,"","",B.cX,B.cX)
B.dO=new A.dA(0,"resident")
B.dP=new A.dA(1,"pending")
B.dQ=new A.dA(2,"missing")
B.dR=new A.dA(3,"evicted")
B.al=new A.K(0,0,0)
B.kA=new A.kF(0,0,0,1)
B.u=new A.kZ(B.al,B.kA)
B.lQ=A.ct("GG")
B.lR=A.ct("GH")
B.lS=A.ct("o4")
B.lT=A.ct("BP")
B.lU=A.ct("C2")
B.lV=A.ct("C3")
B.lW=A.ct("C4")
B.lX=A.ct("ae")
B.lY=A.ct("J")
B.lZ=A.ct("wu")
B.m_=A.ct("CV")
B.m0=A.ct("CW")
B.m1=A.ct("im")
B.e=new A.d2(0,"float1")
B.aK=new A.d2(1,"float2")
B.q=new A.d2(2,"float3")
B.m2=new A.d2(3,"float4")
B.v=new A.d2(4,"mat4")
B.dS=new A.d2(5,"mat4Array")
B.bR=new A.y(B.e,0)
B.dT=new A.y(B.e,1)
B.S=new A.d2(6,"sampler")
B.A=new A.y(B.S,0)
B.ak=new A.y(B.S,1)
B.dU=new A.y(B.S,2)
B.m3=new A.y(B.S,3)
B.m4=new A.y(B.S,4)
B.m5=new A.y(B.S,5)
B.m6=new A.y(B.S,6)
B.m7=new A.rN(!1)
B.m8=new A.K(0,0,1)
B.m9=new A.K(1,0,0)
B.ma=new A.K(1/0,1/0,1/0)
B.mb=new A.K(-1/0,-1/0,-1/0)
B.dW=new A.d4(6,"tangent4")
B.mn=new A.ec(0,"visitorAnswered")
B.dX=new A.ec(1,"visitorIgnored")
B.mo=new A.ec(2,"entryVerified")
B.mp=new A.ec(3,"entryContradicted")
B.mq=new A.ec(4,"exposureAccepted")
B.ms=new A.d5(1,"malformedDay")
B.mt=new A.d5(2,"malformedTier")
B.dY=new A.d5(3,"missingTierLines")
B.a8=new A.d5(6,"invalidPhase")
B.mw=new A.bn(B.a8,"No reaction is due.")
B.mE=new A.bb(B.mw)
B.mB=new A.bn(B.a8,"The active visit cannot be chosen.")
B.mF=new A.bb(B.mB)
B.mx=new A.bn(B.a8,"The active visit has no line to advance.")
B.mG=new A.bb(B.mx)
B.mv=new A.d5(5,"noActiveVisit")
B.my=new A.bn(B.mv,"There is no active visit.")
B.dZ=new A.bb(B.my)
B.mA=new A.bn(B.a8,"A visit is already active.")
B.mH=new A.bb(B.mA)
B.mu=new A.d5(4,"noArrival")
B.mD=new A.bn(B.mu,"The authored arrival is missing.")
B.mI=new A.bb(B.mD)
B.mz=new A.bn(B.a8,"That answer is not offered.")
B.mJ=new A.bb(B.mz)
B.mr=new A.d5(0,"missingCorpus")
B.mC=new A.bn(B.mr,"The authored visitor corpus is empty.")
B.mK=new A.bb(B.mC)
B.e_=new A.eZ(1,"exact")
B.bW=new A.eZ(2,"partial")
B.aM=new A.eZ(3,"contradiction")
B.mL=new A.eZ(0,"skipped")
B.mM=new A.eY(B.mL,B.a3)
B.mN=new A.eY(B.bW,B.a3)
B.mO=new A.it(B.X,!1)
B.mP=new A.it(B.X,!0)
B.e0=new A.iv(0,"horizontal")
B.mQ=new A.iv(1,"vertical")
B.e1=new A.ix(0,"horizontal")
B.mR=new A.ix(1,"vertical")
B.aN=new A.h0(0,"empty")
B.n4=new A.h0(1,"cpuReady")
B.aO=new A.h0(4,"released")})();(function staticFields(){$.tu=null
$.cc=A.c([],A.Y("q<J>"))
$.yk=null
$.qk=0
$.ql=A.F0()
$.xL=null
$.xK=null
$.Ag=null
$.A6=null
$.Ao=null
$.vk=null
$.vr=null
$.xl=null
$.tM=A.c([],A.Y("q<D<J>?>"))
$.hc=null
$.jb=null
$.jc=null
$.wW=!1
$.an=B.w
$.yC=""
$.yD=null
$.yy=null
$.q1=null
$.za=A.ab()
$.f7=A.ab()
$.aS=null
$.tX=A.ab()
$.zz=null
$.z=A.ab()
$.cJ=A.ab()
$.ac=A.ab()
$.U=A.ab()
$.bG=A.ab()
$.T=A.ab()
$.wG=A.ab()
$.wR=null
$.bs=null
$.wJ=!1
$.x3=!1
$.j8=B.aQ
$.em=B.ap
$.v8=!1
$.xd=!1
$.zB=null
$.me=null
$.m9=null
$.zn=0
$.mj=!1
$.zA=!1
$.wX=0
$.en=0
$.wL="booting"
$.cs=0
$.fa=0
$.at="hall"
$.j5=A.ab()
$.h7=A.ab()
$.cb=A.ab()
$.zG=null
$.x4=0
$.x8=1.65
$.eo=null
$.be=null
$.jg=!1
$.cr=A.ab()
$.h8=A.ab()
$.j4=A.ab()
$.m6=A.ab()
$.zc=A.ab()
$.zb=A.ab()
$.az=A.ab()
$.m7=A.ab()
$.j3=A.ab()
$.m5=A.ab()
$.j6=A.ab()
$.j7=A.ab()
$.f6=A.ab()
$.el=A.ab()
$.h6=A.ab()
$.j2=A.ab()
$.j0=A.ab()
$.j1=A.ab()
$.aF=A.ab()
$.m4=A.ab()
$.bd=A.ab()
$.v9=A.a_(t.S)
$.da=A.c([],t.s)
$.wQ=null
$.zX=!1
$.zf=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"GJ","Aw",()=>A.Ae("_$dart_dartClosure"))
s($,"GI","hk",()=>A.Ae("_$dart_dartClosure_dartJSInterop"))
s($,"Hq","AT",()=>A.c([new J.k9()],A.Y("q<ic>")))
s($,"GU","Ax",()=>A.dC(A.rJ({
toString:function(){return"$receiver$"}})))
s($,"GV","Ay",()=>A.dC(A.rJ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"GW","Az",()=>A.dC(A.rJ(null)))
s($,"GX","AA",()=>A.dC(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"H_","AD",()=>A.dC(A.rJ(void 0)))
s($,"H0","AE",()=>A.dC(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GZ","AC",()=>A.dC(A.yz(null)))
s($,"GY","AB",()=>A.dC(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"H2","AG",()=>A.dC(A.yz(void 0)))
s($,"H1","AF",()=>A.dC(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"H4","xx",()=>A.Dj())
s($,"H8","AL",()=>A.Cl(4096))
s($,"H6","AJ",()=>new A.tU().$0())
s($,"H7","AK",()=>new A.tT().$0())
s($,"H5","AI",()=>A.Ck(A.a0(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Hj","hl",()=>A.mq(B.lY))
s($,"GS","xw",()=>{A.Cz()
return $.qk})
s($,"GF","Av",()=>B.bF.fU())
s($,"GO","xv",()=>A.ks(A.c([255,255,255,255],t.t)))
s($,"GL","xs",()=>A.ks(A.c([128,128,255,255],t.t)))
s($,"GK","xr",()=>A.ks(A.c([0,0,0,255],t.t)))
s($,"GM","xt",()=>A.ks(A.c([255,255,0,255],t.t)))
s($,"GN","xu",()=>A.ks(A.c([255,255,255,255],t.t)))
s($,"Hv","AX",()=>A.ip(0,1,0))
s($,"H3","AH",()=>A.Dg(A.a_(t.N),0,0,A.ip(0,0,0)))
s($,"Hs","AU",()=>A.yp("^[a-z0-9][a-z0-9._-]*$"))
s($,"Hy","ff",()=>{var q=$.yy
if(q==null){A.vh()
A.vh()
A.vh()
A.vh()
q=$.yy=new A.ry()}return q})
s($,"GP","w5",()=>A.wc(B.aZ,B.cu,!0,B.b_,B.cw,B.cz,B.cA,B.cC,!0,B.cE))
s($,"He","AM",()=>new A.nc())
r($,"A0","dc",()=>A.wr(null,null))
r($,"ja","jj",()=>A.fD(null,null))
r($,"wP","fe",()=>A.fv(null,null,!1,1,!1,!1,2,1))
r($,"wS","mr",()=>$.w5())
s($,"Hk","AP",()=>new A.oJ())
s($,"Hl","AQ",()=>new A.oT())
s($,"Hm","w7",()=>new A.pc(A.m(t.N,t.S)))
s($,"Hg","AN",()=>A.eb().gb0().h(0,"debugPause")==="1")
s($,"Hd","ji",()=>A.eb().gb0().h(0,"automation")==="1")
s($,"Ha","w6",()=>A.Fg())
s($,"H9","xy",()=>$.w6()!=null)
s($,"Hb","xz",()=>$.ji()?A.eb().gb0().h(0,"captureMantleId"):null)
s($,"Hc","xA",()=>A.eb().gb0().h(0,"captureMantleLit")==="1")
r($,"x7","es",()=>A.ip(0,0,0))
r($,"x1","AS",()=>A.ip(0,0,0))
r($,"xe","w8",()=>A.ip(0,0,0))
s($,"Hf","xB",()=>A.Fh())
s($,"Ho","ms",()=>new A.o5(A.ip(0,0,0)))
s($,"Hn","AR",()=>new A.pC(new A.nL()))
s($,"Hh","cL",()=>new A.on(A.c([],t.s)))
s($,"Hr","hn",()=>{var q=new A.rm(B.aJ)
q.f=A.Y("D<e9>").a(A.c([A.a7(B.R,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a7(B.R,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a7(B.R,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a7(B.R,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a7(B.R,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a7(B.a5,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a7(B.a5,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a7(B.a5,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a7(B.a5,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a7(B.a5,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a7(B.aj,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a7(B.aj,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a7(B.aj,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a7(B.aj,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a7(B.n,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a7(B.n,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a7(B.n,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a7(B.n,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a7(B.n,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a7(B.n,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a7(B.n,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a7(B.n,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a7(B.n,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a7(B.n,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a7(B.n,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a7(B.n,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a7(B.n,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a7(B.n,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a7(B.n,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a7(B.n,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a7(B.n,!0,0.01,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a7(B.n,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a7(B.n,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a7(B.n,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a7(B.n,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a7(B.R,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.Y("q<e9>")))
return q})
s($,"Hu","AW",()=>new A.rl(A.m(t.N,t.z)))
s($,"Ht","AV",()=>new A.qn(A.CB(520588),B.b7))
s($,"Hi","AO",()=>new A.oF())
s($,"Hp","hm",()=>new A.q5(B.bt))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fK,ArrayBuffer:A.fJ,ArrayBufferView:A.i_,DataView:A.kl,Float32Array:A.hX,Float64Array:A.km,Int16Array:A.kn,Int32Array:A.ko,Int8Array:A.kp,Uint16Array:A.kq,Uint32Array:A.kr,Uint8ClampedArray:A.eI,CanvasPixelArray:A.eI,Uint8Array:A.i0})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b6.$nativeSuperclassTag="ArrayBufferView"
A.iF.$nativeSuperclassTag="ArrayBufferView"
A.iG.$nativeSuperclassTag="ArrayBufferView"
A.hY.$nativeSuperclassTag="ArrayBufferView"
A.iH.$nativeSuperclassTag="ArrayBufferView"
A.iI.$nativeSuperclassTag="ArrayBufferView"
A.hZ.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.vs
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
