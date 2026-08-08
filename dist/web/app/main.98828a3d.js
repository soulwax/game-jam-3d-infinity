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
if(a[b]!==s){A.xT(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.pI(b)
return new s(c,this)}:function(){if(s===null)s=A.pI(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.pI(a).prototype
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
pN(a,b,c,d){return{i:a,p:b,e:c,x:d}},
oj(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.pL==null){A.xy()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.qA("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.nj
if(o==null)o=$.nj=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.xE(a)
if(p!=null)return p
if(typeof a=="function")return B.dR
s=Object.getPrototypeOf(a)
if(s==null)return B.by
if(s===Object.prototype)return B.by
if(typeof q=="function"){o=$.nj
if(o==null)o=$.nj=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
q9(a,b){if(a<0||a>4294967295)throw A.c(A.aH(a,0,4294967295,"length",null))
return J.uh(new Array(a),b)},
qa(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("p<0>"))},
hR(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("p<0>"))},
uh(a,b){var s=A.e(a,b.h("p<0>"))
s.$flags=1
return s},
ui(a,b){var s=t.bP
return J.pS(s.a(a),s.a(b))},
qd(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
uj(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.qd(r))break;++b}return b},
uk(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.qd(q))break}return b},
dD(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eR.prototype
return J.hT.prototype}if(typeof a=="string")return J.d4.prototype
if(a==null)return J.eS.prototype
if(typeof a=="boolean")return J.hS.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
if(typeof a=="symbol")return J.e0.prototype
if(typeof a=="bigint")return J.e_.prototype
return a}if(a instanceof A.E)return a
return J.oj(a)},
bt(a){if(typeof a=="string")return J.d4.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
if(typeof a=="symbol")return J.e0.prototype
if(typeof a=="bigint")return J.e_.prototype
return a}if(a instanceof A.E)return a
return J.oj(a)},
bP(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
if(typeof a=="symbol")return J.e0.prototype
if(typeof a=="bigint")return J.e_.prototype
return a}if(a instanceof A.E)return a
return J.oj(a)},
xu(a){if(typeof a=="number")return J.d3.prototype
if(a==null)return a
if(!(a instanceof A.E))return J.dk.prototype
return a},
rQ(a){if(typeof a=="number")return J.d3.prototype
if(typeof a=="string")return J.d4.prototype
if(a==null)return a
if(!(a instanceof A.E))return J.dk.prototype
return a},
xv(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c9.prototype
if(typeof a=="symbol")return J.e0.prototype
if(typeof a=="bigint")return J.e_.prototype
return a}if(a instanceof A.E)return a
return J.oj(a)},
pR(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.rQ(a).U(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dD(a).S(a,b)},
aM(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.xC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bt(a).i(a,b)},
bQ(a,b,c){return J.bP(a).l(a,b,c)},
h2(a,b){return J.bP(a).k(a,b)},
to(a,b){return J.bP(a).I(a,b)},
tp(a,b){return J.bP(a).a5(a,b)},
tq(a,b,c){return J.xv(a).eV(a,b,c)},
tr(a,b){return J.bP(a).bS(a,b)},
pS(a,b){return J.rQ(a).F(a,b)},
jM(a,b){return J.bP(a).P(a,b)},
b8(a){return J.dD(a).gE(a)},
pT(a){return J.bt(a).gG(a)},
ts(a){return J.bt(a).gL(a)},
I(a){return J.bP(a).gu(a)},
aN(a){return J.bt(a).gq(a)},
dF(a){return J.dD(a).gM(a)},
dG(a,b,c){return J.bP(a).bx(a,b,c)},
tt(a,b){return J.bt(a).sq(a,b)},
tu(a,b){return J.bP(a).Y(a,b)},
oM(a,b){return J.xu(a).l7(a,b)},
dH(a){return J.dD(a).n(a)},
tv(a,b){return J.bP(a).dR(a,b)},
hO:function hO(){},
hS:function hS(){},
eS:function eS(){},
eT:function eT(){},
cv:function cv(){},
ia:function ia(){},
dk:function dk(){},
c9:function c9(){},
e_:function e_(){},
e0:function e0(){},
p:function p(a){this.$ti=a},
hQ:function hQ(){},
lb:function lb(a){this.$ti=a},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d3:function d3(){},
eR:function eR(){},
hT:function hT(){},
d4:function d4(){}},A={oP:function oP(){},
jE(){return $},
tC(a,b,c){if(t.gt.b(a))return new A.ft(a,b.h("@<0>").D(c).h("ft<1,2>"))
return new A.cS(a,b.h("@<0>").D(c).h("cS<1,2>"))},
qg(a){return new A.d5("Field '"+a+"' has been assigned during initialization.")},
aw(a){return new A.d5("Field '"+a+"' has not been initialized.")},
um(a){return new A.d5("Field '"+a+"' has already been initialized.")},
ok(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cg(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
my(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dC(a,b,c){return a},
pM(a){var s,r
for(s=$.br.length,r=0;r<s;++r)if(a===$.br[r])return!0
return!1},
mx(a,b,c,d){A.ii(b,"start")
if(c!=null){A.ii(c,"end")
if(b>c)A.k(A.aH(b,0,c,"start",null))}return new A.fh(a,b,c,d.h("fh<0>"))},
hY(a,b,c,d){if(t.gt.b(a))return new A.cV(a,b,c.h("@<0>").D(d).h("cV<1,2>"))
return new A.cb(a,b,c.h("@<0>").D(d).h("cb<1,2>"))},
hP(){return new A.e9("No element")},
uf(){return new A.e9("Too many elements")},
ir(a,b,c,d,e){if(c-b<=32)A.uQ(a,b,c,d,e)
else A.uP(a,b,c,d,e)},
uQ(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.bt(a);s<=c;++s){q=r.i(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.a3()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.i(a,n))
p=n}r.l(a,p,q)}},
uP(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.K(a4+a5,2),f=g-j,e=g+j,d=J.bt(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.i(a3,a4))
d.l(a3,e,d.i(a3,a5))
r=a4+1
q=a5-1
p=J.aa(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.i(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.l(a3,o,d.i(a3,r))
d.l(a3,r,n)}++r}else for(;;){m=a6.$2(d.i(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.l(a3,o,d.i(a3,r))
k=r+1
d.l(a3,r,d.i(a3,q))
d.l(a3,q,n)
q=l
r=k
break}else{d.l(a3,o,d.i(a3,q))
d.l(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.i(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.l(a3,o,d.i(a3,r))
d.l(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;;)if(a6.$2(d.i(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.i(a3,q),b)<0){d.l(a3,o,d.i(a3,r))
k=r+1
d.l(a3,r,d.i(a3,q))
d.l(a3,q,n)
r=k}else{d.l(a3,o,d.i(a3,q))
d.l(a3,q,n)}q=l
break}}a2=r-1
d.l(a3,a4,d.i(a3,a2))
d.l(a3,a2,b)
a2=q+1
d.l(a3,a5,d.i(a3,a2))
d.l(a3,a2,a0)
A.ir(a3,a4,r-2,a6,a7)
A.ir(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.aa(a6.$2(d.i(a3,r),b),0))++r
while(J.aa(a6.$2(d.i(a3,q),a0),0))--q
for(o=r;o<=q;++o){n=d.i(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.l(a3,o,d.i(a3,r))
d.l(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;;)if(a6.$2(d.i(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.i(a3,q),b)<0){d.l(a3,o,d.i(a3,r))
k=r+1
d.l(a3,r,d.i(a3,q))
d.l(a3,q,n)
r=k}else{d.l(a3,o,d.i(a3,q))
d.l(a3,q,n)}q=l
break}}A.ir(a3,r,q,a6,a7)}else A.ir(a3,r,q,a6,a7)},
cG:function cG(){},
eD:function eD(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b){this.a=a
this.$ti=b},
ft:function ft(a,b){this.a=a
this.$ti=b},
fr:function fr(){},
n4:function n4(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.$ti=b},
d5:function d5(a){this.a=a},
hi:function hi(a){this.a=a},
mn:function mn(){},
B:function B(){},
a3:function a3(){},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ca:function ca(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(a,b){this.a=a
this.$ti=b},
fn:function fn(a,b){this.a=a
this.$ti=b},
ab:function ab(){},
bY:function bY(){},
eb:function eb(){},
fc:function fc(a,b){this.a=a
this.$ti=b},
fU:function fU(){},
dS(a,b,c){var s,r,q,p,o,n,m,l=A.aX(a.gN(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.i(0,r))
o=p+1
q[r]=p}n=A.aX(a.gan(),!0,c)
m=new A.a1(q,n,b.h("@<0>").D(c).h("a1<1,2>"))
m.$keys=l
return m}return new A.eF(A.aP(a,b,c),b.h("@<0>").D(c).h("eF<1,2>"))},
tI(){throw A.c(A.as("Cannot modify unmodifiable Map"))},
tJ(){throw A.c(A.as("Cannot modify constant Set"))},
t3(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xC(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dH(a)
return s},
f6(a){var s,r=$.qn
if(r==null)r=$.qn=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
lR(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
ig(a){var s,r,q,p
if(a instanceof A.E)return A.bq(A.b6(a),null)
s=J.dD(a)
if(s===B.dQ||s===B.dS||t.cx.b(a)){r=B.aQ(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bq(A.b6(a),null)},
qo(a){var s,r,q
if(a==null||typeof a=="number"||A.bF(a))return J.dH(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cq)return a.n(0)
if(a instanceof A.bA)return a.eO(!0)
s=$.tm()
for(r=0;r<1;++r){q=s[r].l9(a)
if(q!=null)return q}return"Instance of '"+A.ig(a)+"'"},
uw(){return Date.now()},
uF(){var s,r
if($.lS!==0)return
$.lS=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.lS=1e6
$.lT=new A.lQ(r)},
uv(){if(!!self.location)return self.location.href
return null},
uG(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ac(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cJ(s,10)|55296)>>>0,s&1023|56320)}}throw A.c(A.aH(a,0,1114111,null,null))},
e3(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
uE(a){var s=A.e3(a).getUTCFullYear()+0
return s},
uC(a){var s=A.e3(a).getUTCMonth()+1
return s},
uy(a){var s=A.e3(a).getUTCDate()+0
return s},
uz(a){var s=A.e3(a).getUTCHours()+0
return s},
uB(a){var s=A.e3(a).getUTCMinutes()+0
return s},
uD(a){var s=A.e3(a).getUTCSeconds()+0
return s},
uA(a){var s=A.e3(a).getUTCMilliseconds()+0
return s},
ux(a){var s=a.$thrownJsError
if(s==null)return null
return A.c4(s)},
qp(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.am(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
jG(a){throw A.c(A.pH(a))},
d(a,b){if(a==null)J.aN(a)
throw A.c(A.og(a,b))},
og(a,b){var s,r="index"
if(!A.aU(b))return new A.bI(!0,b,r,null)
s=A.a(J.aN(a))
if(b<0||b>=s)return A.l8(b,s,a,r)
return A.uH(b,r)},
xo(a,b,c){if(a>c)return A.aH(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aH(b,a,c,"end",null)
return new A.bI(!0,b,"end",null)},
pH(a){return new A.bI(!0,a,null,null)},
c(a){return A.am(a,new Error())},
am(a,b){var s
if(a==null)a=new A.ch()
b.dartException=a
s=A.xV
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
xV(){return J.dH(this.dartException)},
k(a,b){throw A.am(a,b==null?new Error():b)},
bu(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.w8(a,b,c),s)},
w8(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fk("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.c(A.an(a))},
ci(a){var s,r,q,p,o,n
a=A.rX(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.mG(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
mH(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
qz(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
oQ(a,b){var s=b==null,r=s?null:b.method
return new A.hU(a,r,s?null:b.receiver)},
ae(a){var s
if(a==null)return new A.lE(a)
if(a instanceof A.eK){s=a.a
return A.cP(a,s==null?A.er(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cP(a,a.dartException)
return A.x_(a)},
cP(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
x_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cJ(r,16)&8191)===10)switch(q){case 438:return A.cP(a,A.oQ(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.cP(a,new A.f2())}}if(a instanceof TypeError){p=$.t6()
o=$.t7()
n=$.t8()
m=$.t9()
l=$.tc()
k=$.td()
j=$.tb()
$.ta()
i=$.tf()
h=$.te()
g=p.am(s)
if(g!=null)return A.cP(a,A.oQ(A.F(s),g))
else{g=o.am(s)
if(g!=null){g.method="call"
return A.cP(a,A.oQ(A.F(s),g))}else if(n.am(s)!=null||m.am(s)!=null||l.am(s)!=null||k.am(s)!=null||j.am(s)!=null||m.am(s)!=null||i.am(s)!=null||h.am(s)!=null){A.F(s)
return A.cP(a,new A.f2())}}return A.cP(a,new A.iA(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ff()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cP(a,new A.bI(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ff()
return a},
c4(a){var s
if(a instanceof A.eK)return a.b
if(a==null)return new A.fH(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fH(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jH(a){if(a==null)return J.b8(a)
if(typeof a=="object")return A.f6(a)
return J.b8(a)},
xi(a){if(typeof a=="number")return B.d.gE(a)
if(a instanceof A.jo)return A.f6(a)
if(a instanceof A.bA)return a.gE(a)
return A.jH(a)},
rP(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
xt(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
wt(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.dV("Unsupported number of arguments for wrapped closure"))},
ey(a,b){var s=a.$identity
if(!!s)return s
s=A.xj(a,b)
a.$identity=s
return s},
xj(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.wt)},
tH(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iu().constructor.prototype):Object.create(new A.dO(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.pZ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.tD(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.pZ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
tD(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.tA)}throw A.c("Error in functionType of tearoff")},
tE(a,b,c,d){var s=A.pY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
pZ(a,b,c,d){if(c)return A.tG(a,b,d)
return A.tE(b.length,d,a,b)},
tF(a,b,c,d){var s=A.pY,r=A.tB
switch(b?-1:a){case 0:throw A.c(new A.im("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
tG(a,b,c){var s,r
if($.pW==null)$.pW=A.pV("interceptor")
if($.pX==null)$.pX=A.pV("receiver")
s=b.length
r=A.tF(s,c,a,b)
return r},
pI(a){return A.tH(a)},
tA(a,b){return A.fM(v.typeUniverse,A.b6(a.a),b)},
pY(a){return a.a},
tB(a){return a.b},
pV(a){var s,r,q,p=new A.dO("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.w("Field name "+a+" not found.",null))},
rR(a){return v.getIsolateTag(a)},
t_(){return v.G},
yq(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
xE(a){var s,r,q,p,o,n=A.F($.rS.$1(a)),m=$.oh[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oo[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bE($.rM.$2(a,n))
if(q!=null){m=$.oh[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oo[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.oD(s)
$.oh[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.oo[n]=s
return s}if(p==="-"){o=A.oD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.rV(a,s)
if(p==="*")throw A.c(A.qA(n))
if(v.leafTags[n]===true){o=A.oD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.rV(a,s)},
rV(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.pN(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
oD(a){return J.pN(a,!1,null,!!a.$ibc)},
xI(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.oD(s)
else return J.pN(s,c,null,null)},
xy(){if(!0===$.pL)return
$.pL=!0
A.xz()},
xz(){var s,r,q,p,o,n,m,l
$.oh=Object.create(null)
$.oo=Object.create(null)
A.xx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.rW.$1(o)
if(n!=null){m=A.xI(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
xx(){var s,r,q,p,o,n,m=B.cr()
m=A.ex(B.cs,A.ex(B.ct,A.ex(B.aR,A.ex(B.aR,A.ex(B.cu,A.ex(B.cv,A.ex(B.cw(B.aQ),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.rS=new A.ol(p)
$.rM=new A.om(o)
$.rW=new A.on(n)},
ex(a,b){return a(b)||b},
vo(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
xl(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xQ(a,b,c){var s=a.indexOf(b,c)
return s>=0},
xr(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
rX(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xR(a,b,c){var s=A.xS(a,b,c)
return s},
xS(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.rX(b),"g"),A.xr(c))},
ei:function ei(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
eF:function eF(a,b){this.a=a
this.$ti=b},
dR:function dR(){},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
dv:function dv(a,b){this.a=a
this.$ti=b},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eM:function eM(a,b){this.a=a
this.$ti=b},
eG:function eG(){},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
lQ:function lQ(a){this.a=a},
fd:function fd(){},
mG:function mG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f2:function f2(){},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a){this.a=a},
lE:function lE(a){this.a=a},
eK:function eK(a,b){this.a=a
this.b=b},
fH:function fH(a){this.a=a
this.b=null},
cq:function cq(){},
hg:function hg(){},
hh:function hh(){},
ix:function ix(){},
iu:function iu(){},
dO:function dO(a,b){this.a=a
this.b=b},
im:function im(a){this.a=a},
bw:function bw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lk:function lk(a){this.a=a},
ls:function ls(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ai:function ai(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aO:function aO(a,b){this.a=a
this.$ti=b},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
Y:function Y(a,b){this.a=a
this.$ti=b},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eU:function eU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ol:function ol(a){this.a=a},
om:function om(a){this.a=a},
on:function on(a){this.a=a},
bA:function bA(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
xT(a){throw A.am(A.qg(a),new Error())},
j(){throw A.am(A.aw(""),new Error())},
y(){throw A.am(A.um(""),new Error())},
t2(){throw A.am(A.qg(""),new Error())},
a8(){var s=new A.n5()
return s.b=s},
n5:function n5(){this.b=null},
a_(a){return a},
uq(a,b,c){return new Float32Array(a,b,c)},
ur(a){return new Uint8Array(a)},
us(a){return new Uint8Array(A.a_(a))},
co(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.og(b,a))},
w1(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.xo(a,b,c))
return b},
cx:function cx(){},
e2:function e2(){},
f0:function f0(){},
nw:function nw(a){this.a=a},
i1:function i1(){},
ax:function ax(){},
eZ:function eZ(){},
f_:function f_(){},
eY:function eY(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
da:function da(){},
f1:function f1(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
p0(a,b){var s=b.c
return s==null?b.c=A.fK(a,"ba",[b.x]):s},
qr(a){var s=a.w
if(s===6||s===7)return A.qr(a.x)
return s===11||s===12},
uN(a){return a.as},
xJ(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
at(a){return A.nv(v.typeUniverse,a,!1)},
dB(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dB(a1,s,a3,a4)
if(r===s)return a2
return A.qY(a1,r,!0)
case 7:s=a2.x
r=A.dB(a1,s,a3,a4)
if(r===s)return a2
return A.qX(a1,r,!0)
case 8:q=a2.y
p=A.ew(a1,q,a3,a4)
if(p===q)return a2
return A.fK(a1,a2.x,p)
case 9:o=a2.x
n=A.dB(a1,o,a3,a4)
m=a2.y
l=A.ew(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.pd(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ew(a1,j,a3,a4)
if(i===j)return a2
return A.qZ(a1,k,i)
case 11:h=a2.x
g=A.dB(a1,h,a3,a4)
f=a2.y
e=A.wW(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.qW(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ew(a1,d,a3,a4)
o=a2.x
n=A.dB(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.pe(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.h7("Attempted to substitute unexpected RTI kind "+a0))}},
ew(a,b,c,d){var s,r,q,p,o=b.length,n=A.nA(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dB(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
wX(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.nA(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dB(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
wW(a,b,c,d){var s,r=b.a,q=A.ew(a,r,c,d),p=b.b,o=A.ew(a,p,c,d),n=b.c,m=A.wX(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.j1()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
pJ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.xw(s)
return a.$S()}return null},
xA(a,b){var s
if(A.qr(b))if(a instanceof A.cq){s=A.pJ(a)
if(s!=null)return s}return A.b6(a)},
b6(a){if(a instanceof A.E)return A.o(a)
if(Array.isArray(a))return A.Q(a)
return A.ps(J.dD(a))},
Q(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.ps(a)},
ps(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.wq(a,s)},
wq(a,b){var s=a instanceof A.cq?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.vx(v.typeUniverse,s.name)
b.$ccache=r
return r},
xw(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.nv(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jF(a){return A.c3(A.o(a))},
pF(a){var s
if(a instanceof A.bA)return a.ek()
s=a instanceof A.cq?A.pJ(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dF(a).a
if(Array.isArray(a))return A.Q(a)
return A.b6(a)},
c3(a){var s=a.r
return s==null?a.r=new A.jo(a):s},
xs(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.d(q,0)
s=A.fM(v.typeUniverse,A.pF(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.r_(v.typeUniverse,s,A.pF(q[r]))}return A.fM(v.typeUniverse,s,a)},
bG(a){return A.c3(A.nv(v.typeUniverse,a,!1))},
wp(a){var s=this
s.b=A.wT(s)
return s.b(a)},
wT(a){var s,r,q,p,o
if(a===t.K)return A.wz
if(A.dE(a))return A.wD
s=a.w
if(s===6)return A.wl
if(s===1)return A.rt
if(s===7)return A.wu
r=A.wS(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dE)){a.f="$i"+q
if(q==="D")return A.wx
if(a===t.m)return A.ww
return A.wC}}else if(s===10){p=A.xl(a.x,a.y)
o=p==null?A.rt:p
return o==null?A.er(o):o}return A.wj},
wS(a){if(a.w===8){if(a===t.S)return A.aU
if(a===t.i||a===t.o)return A.wy
if(a===t.N)return A.wB
if(a===t.y)return A.bF}return null},
wo(a){var s=this,r=A.wi
if(A.dE(s))r=A.vZ
else if(s===t.K)r=A.er
else if(A.ez(s)){r=A.wk
if(s===t.aV)r=A.re
else if(s===t.w)r=A.bE
else if(s===t.fU)r=A.vY
else if(s===t.jh)r=A.rf
else if(s===t.dA)r=A.rd
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.F
else if(s===t.y)r=A.aS
else if(s===t.o)r=A.eq
else if(s===t.i)r=A.fW
else if(s===t.m)r=A.f
s.a=r
return s.a(a)},
wj(a){var s=this
if(a==null)return A.ez(s)
return A.xD(v.typeUniverse,A.xA(a,s),s)},
wl(a){if(a==null)return!0
return this.x.b(a)},
wC(a){var s,r=this
if(a==null)return A.ez(r)
s=r.f
if(a instanceof A.E)return!!a[s]
return!!J.dD(a)[s]},
wx(a){var s,r=this
if(a==null)return A.ez(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.E)return!!a[s]
return!!J.dD(a)[s]},
ww(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.E)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
rs(a){if(typeof a=="object"){if(a instanceof A.E)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
wi(a){var s=this
if(a==null){if(A.ez(s))return a}else if(s.b(a))return a
throw A.am(A.rk(a,s),new Error())},
wk(a){var s=this
if(a==null||s.b(a))return a
throw A.am(A.rk(a,s),new Error())},
rk(a,b){return new A.fI("TypeError: "+A.qO(a,A.bq(b,null)))},
qO(a,b){return A.hx(a)+": type '"+A.bq(A.pF(a),null)+"' is not a subtype of type '"+b+"'"},
bB(a,b){return new A.fI("TypeError: "+A.qO(a,b))},
wu(a){var s=this
return s.x.b(a)||A.p0(v.typeUniverse,s).b(a)},
wz(a){return a!=null},
er(a){if(a!=null)return a
throw A.am(A.bB(a,"Object"),new Error())},
wD(a){return!0},
vZ(a){return a},
rt(a){return!1},
bF(a){return!0===a||!1===a},
aS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.am(A.bB(a,"bool"),new Error())},
vY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.am(A.bB(a,"bool?"),new Error())},
fW(a){if(typeof a=="number")return a
throw A.am(A.bB(a,"double"),new Error())},
rd(a){if(typeof a=="number")return a
if(a==null)return a
throw A.am(A.bB(a,"double?"),new Error())},
aU(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.am(A.bB(a,"int"),new Error())},
re(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.am(A.bB(a,"int?"),new Error())},
wy(a){return typeof a=="number"},
eq(a){if(typeof a=="number")return a
throw A.am(A.bB(a,"num"),new Error())},
rf(a){if(typeof a=="number")return a
if(a==null)return a
throw A.am(A.bB(a,"num?"),new Error())},
wB(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.am(A.bB(a,"String"),new Error())},
bE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.am(A.bB(a,"String?"),new Error())},
f(a){if(A.rs(a))return a
throw A.am(A.bB(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.rs(a))return a
throw A.am(A.bB(a,"JSObject?"),new Error())},
rF(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bq(a[q],b)
return s},
wJ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.rF(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bq(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
rn(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bq(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bq(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bq(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bq(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bq(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bq(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bq(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bq(a.x,b)+">"
if(l===8){p=A.wZ(a.x)
o=a.y
return o.length>0?p+("<"+A.rF(o,b)+">"):p}if(l===10)return A.wJ(a,b)
if(l===11)return A.rn(a,b,null)
if(l===12)return A.rn(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
wZ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
vy(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
vx(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.nv(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fL(a,5,"#")
q=A.nA(s)
for(p=0;p<s;++p)q[p]=r
o=A.fK(a,b,q)
n[b]=o
return o}else return m},
vw(a,b){return A.r7(a.tR,b)},
vv(a,b){return A.r7(a.eT,b)},
nv(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.qT(A.qR(a,null,b,!1))
r.set(b,s)
return s},
fM(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.qT(A.qR(a,b,c,!0))
q.set(c,r)
return r},
r_(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.pd(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cK(a,b){b.a=A.wo
b.b=A.wp
return b},
fL(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bL(null,null)
s.w=b
s.as=c
r=A.cK(a,s)
a.eC.set(c,r)
return r},
qY(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.vt(a,b,r,c)
a.eC.set(r,s)
return s},
vt(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dE(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.ez(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.bL(null,null)
q.w=6
q.x=b
q.as=c
return A.cK(a,q)},
qX(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.vr(a,b,r,c)
a.eC.set(r,s)
return s},
vr(a,b,c,d){var s,r
if(d){s=b.w
if(A.dE(b)||b===t.K)return b
else if(s===1)return A.fK(a,"ba",[b])
else if(b===t.b||b===t.T)return t.gK}r=new A.bL(null,null)
r.w=7
r.x=b
r.as=c
return A.cK(a,r)},
vu(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bL(null,null)
s.w=13
s.x=b
s.as=q
r=A.cK(a,s)
a.eC.set(q,r)
return r},
fJ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
vq(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fK(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fJ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bL(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cK(a,r)
a.eC.set(p,q)
return q},
pd(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fJ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bL(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cK(a,o)
a.eC.set(q,n)
return n},
qZ(a,b,c){var s,r,q="+"+(b+"("+A.fJ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bL(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cK(a,s)
a.eC.set(q,r)
return r},
qW(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fJ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fJ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.vq(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bL(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cK(a,p)
a.eC.set(r,o)
return o},
pe(a,b,c,d){var s,r=b.as+("<"+A.fJ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.vs(a,b,c,r,d)
a.eC.set(r,s)
return s},
vs(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.nA(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dB(a,b,r,0)
m=A.ew(a,c,r,0)
return A.pe(a,n,m,c!==m)}}l=new A.bL(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cK(a,l)},
qR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
qT(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.vj(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.qS(a,r,l,k,!1)
else if(q===46)r=A.qS(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dy(a.u,a.e,k.pop()))
break
case 94:k.push(A.vu(a.u,k.pop()))
break
case 35:k.push(A.fL(a.u,5,"#"))
break
case 64:k.push(A.fL(a.u,2,"@"))
break
case 126:k.push(A.fL(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.vl(a,k)
break
case 38:A.vk(a,k)
break
case 63:p=a.u
k.push(A.qY(p,A.dy(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.qX(p,A.dy(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.vi(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.qU(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.vn(a.u,a.e,o)
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
return A.dy(a.u,a.e,m)},
vj(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
qS(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.vy(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.uN(o)+'"')
d.push(A.fM(s,o,n))}else d.push(p)
return m},
vl(a,b){var s,r=a.u,q=A.qQ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fK(r,p,q))
else{s=A.dy(r,a.e,p)
switch(s.w){case 11:b.push(A.pe(r,s,q,a.n))
break
default:b.push(A.pd(r,s,q))
break}}},
vi(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.qQ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dy(p,a.e,o)
q=new A.j1()
q.a=s
q.b=n
q.c=m
b.push(A.qW(p,r,q))
return
case-4:b.push(A.qZ(p,b.pop(),s))
return
default:throw A.c(A.h7("Unexpected state under `()`: "+A.q(o)))}},
vk(a,b){var s=b.pop()
if(0===s){b.push(A.fL(a.u,1,"0&"))
return}if(1===s){b.push(A.fL(a.u,4,"1&"))
return}throw A.c(A.h7("Unexpected extended operation "+A.q(s)))},
qQ(a,b){var s=b.splice(a.p)
A.qU(a.u,a.e,s)
a.p=b.pop()
return s},
dy(a,b,c){if(typeof c=="string")return A.fK(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vm(a,b,c)}else return c},
qU(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dy(a,b,c[s])},
vn(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dy(a,b,c[s])},
vm(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.h7("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.h7("Bad index "+c+" for "+b.n(0)))},
xD(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aq(a,b,null,c,null)
r.set(c,s)}return s},
aq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dE(d))return!0
s=b.w
if(s===4)return!0
if(A.dE(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aq(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.T){if(q===7)return A.aq(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aq(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aq(a,b.x,c,d,e))return!1
return A.aq(a,A.p0(a,b),c,d,e)}if(s===6)return A.aq(a,p,c,d,e)&&A.aq(a,b.x,c,d,e)
if(q===7){if(A.aq(a,b,c,d.x,e))return!0
return A.aq(a,b,c,A.p0(a,d),e)}if(q===6)return A.aq(a,b,c,p,e)||A.aq(a,b,c,d.x,e)
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
if(!A.aq(a,j,c,i,e)||!A.aq(a,i,e,j,c))return!1}return A.rr(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.rr(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.wv(a,b,c,d,e)}if(o&&q===10)return A.wA(a,b,c,d,e)
return!1},
rr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aq(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aq(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aq(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aq(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aq(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
wv(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fM(a,b,r[o])
return A.rb(a,p,null,c,d.y,e)}return A.rb(a,b.y,null,c,d.y,e)},
rb(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aq(a,b[s],d,e[s],f))return!1
return!0},
wA(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aq(a,r[s],c,q[s],e))return!1
return!0},
ez(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.dE(a))if(s!==6)r=s===7&&A.ez(a.x)
return r},
dE(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
r7(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
nA(a){return a>0?new Array(a):v.typeUniverse.sEA},
bL:function bL(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
j1:function j1(){this.c=this.b=this.a=null},
jo:function jo(a){this.a=a},
j_:function j_(){},
fI:function fI(a){this.a=a},
vc(){var s,r,q
if(self.scheduleImmediate!=null)return A.xb()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ey(new A.n1(s),1)).observe(r,{childList:true})
return new A.n0(s,r,q)}else if(self.setImmediate!=null)return A.xc()
return A.xd()},
vd(a){self.scheduleImmediate(A.ey(new A.n2(t.M.a(a)),0))},
ve(a){self.setImmediate(A.ey(new A.n3(t.M.a(a)),0))},
vf(a){A.p2(B.cI,t.M.a(a))},
p2(a,b){return A.vp(a.a/1000|0,b)},
vp(a,b){var s=new A.nt()
s.ij(a,b)
return s},
bp(a){return new A.iQ(new A.ad($.a5,a.h("ad<0>")),a.h("iQ<0>"))},
bo(a,b){a.$2(0,null)
b.b=!0
return b.a},
ak(a,b){A.w_(a,b)},
bn(a,b){b.cP(a)},
bm(a,b){b.cQ(A.ae(a),A.c4(a))},
w_(a,b){var s,r,q=new A.nF(b),p=new A.nG(b)
if(a instanceof A.ad)a.eN(q,p,t.z)
else{s=t.z
if(a instanceof A.ad)a.dN(q,p,s)
else{r=new A.ad($.a5,t.d)
r.a=8
r.c=a
r.eN(q,p,s)}}},
bs(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.a5.hv(new A.oc(s),t.H,t.S,t.z)},
qV(a,b,c){return 0},
jV(a){var s
if(t.V.b(a)){s=a.gb9()
if(s!=null)return s}return B.Q},
oN(a){var s
a.a(null)
s=new A.ad($.a5,a.h("ad<0>"))
s.cr(null)
return s},
u8(a,b,c){var s=new A.ad($.a5,c.h("ad<0>"))
A.uV(a,new A.kI(b,s,c))
return s},
kJ(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ad($.a5,b.h("ad<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.kL(i,h,g,f)
try{for(n=J.I(a),m=t.b;n.m();){r=n.gp()
q=i.b
r.dN(new A.kK(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bI(A.e([],b.h("p<0>")))
return n}i.a=A.bR(n,null,!1,b.h("0?"))}catch(l){p=A.ae(l)
o=A.c4(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.pt(m,k)
m=new A.au(m,k==null?A.jV(m):k)
n.bE(m)
return n}else{i.d=p
i.c=o}}return f},
pt(a,b){if($.a5===B.q)return null
return null},
wr(a,b){if($.a5!==B.q)A.pt(a,b)
if(b==null)if(t.V.b(a)){b=a.gb9()
if(b==null){A.qp(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.V.b(a))A.qp(a,b)
return new A.au(a,b)},
na(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.d;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.uR()
b.bE(new A.au(new A.bI(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eu(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.be()
b.bH(o.a)
A.ds(b,p)
return}b.a^=2
A.jC(null,null,b.b,t.M.a(new A.nb(o,b)))},
ds(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.pA(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.ds(d.a,c)
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
A.pA(j.a,j.b)
return}g=$.a5
if(g!==h)$.a5=h
else g=null
c=c.c
if((c&15)===8)new A.nf(q,d,n).$0()
else if(o){if((c&1)!==0)new A.ne(q,j).$0()}else if((c&2)!==0)new A.nd(d,q).$0()
if(g!=null)$.a5=g
c=q.c
if(c instanceof A.ad){p=q.a.$ti
p=p.h("ba<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bO(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.na(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bO(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
wK(a,b){var s
if(t.ng.b(a))return b.hv(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.c(A.aD(a,"onError",u.c))},
wG(){var s,r
for(s=$.et;s!=null;s=$.et){$.h_=null
r=s.b
$.et=r
if(r==null)$.fZ=null
s.a.$0()}},
wU(){$.pu=!0
try{A.wG()}finally{$.h_=null
$.pu=!1
if($.et!=null)$.pQ().$1(A.rN())}},
rJ(a){var s=new A.iR(a),r=$.fZ
if(r==null){$.et=$.fZ=s
if(!$.pu)$.pQ().$1(A.rN())}else $.fZ=r.b=s},
wQ(a){var s,r,q,p=$.et
if(p==null){A.rJ(a)
$.h_=$.fZ
return}s=new A.iR(a)
r=$.h_
if(r==null){s.b=p
$.et=$.h_=s}else{q=r.b
s.b=q
$.h_=r.b=s
if(q==null)$.fZ=s}},
y5(a,b){A.dC(a,"stream",t.K)
return new A.jm(b.h("jm<0>"))},
uV(a,b){var s=$.a5
if(s===B.q)return A.p2(a,t.M.a(b))
return A.p2(a,t.M.a(s.eW(b)))},
pA(a,b){A.wQ(new A.o7(a,b))},
rE(a,b,c,d,e){var s,r=$.a5
if(r===c)return d.$0()
$.a5=c
s=r
try{r=d.$0()
return r}finally{$.a5=s}},
wO(a,b,c,d,e,f,g){var s,r=$.a5
if(r===c)return d.$1(e)
$.a5=c
s=r
try{r=d.$1(e)
return r}finally{$.a5=s}},
wN(a,b,c,d,e,f,g,h,i){var s,r=$.a5
if(r===c)return d.$2(e,f)
$.a5=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a5=s}},
jC(a,b,c,d){t.M.a(d)
if(B.q!==c){d=c.eW(d)
d=d}A.rJ(d)},
n1:function n1(a){this.a=a},
n0:function n0(a,b,c){this.a=a
this.b=b
this.c=c},
n2:function n2(a){this.a=a},
n3:function n3(a){this.a=a},
nt:function nt(){},
nu:function nu(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=!1
this.$ti=b},
nF:function nF(a){this.a=a},
nG:function nG(a){this.a=a},
oc:function oc(a){this.a=a},
bk:function bk(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
c0:function c0(a,b){this.a=a
this.$ti=b},
au:function au(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kK:function kK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iU:function iU(){},
fo:function fo(a,b){this.a=a
this.$ti=b},
dr:function dr(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ad:function ad(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
n7:function n7(a,b){this.a=a
this.b=b},
nc:function nc(a,b){this.a=a
this.b=b},
nb:function nb(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
this.b=b},
n8:function n8(a,b){this.a=a
this.b=b},
nf:function nf(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function ng(a,b){this.a=a
this.b=b},
nh:function nh(a){this.a=a},
ne:function ne(a,b){this.a=a
this.b=b},
nd:function nd(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a
this.b=null},
jm:function jm(a){this.$ti=a},
fT:function fT(){},
jf:function jf(){},
nr:function nr(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
qP(a,b){var s=a[b]
return s===a?null:s},
pb(a,b,c){if(c==null)a[b]=a
else a[b]=c},
pa(){var s=Object.create(null)
A.pb(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
qi(a,b){return new A.bw(a.h("@<0>").D(b).h("bw<1,2>"))},
R(a,b,c){return b.h("@<0>").D(c).h("oR<1,2>").a(A.rP(a,new A.bw(b.h("@<0>").D(c).h("bw<1,2>"))))},
x(a,b){return new A.bw(a.h("@<0>").D(b).h("bw<1,2>"))},
oS(a){return new A.bz(a.h("bz<0>"))},
a7(a){return new A.bz(a.h("bz<0>"))},
ar(a,b){return b.h("qj<0>").a(A.xt(a,new A.bz(b.h("bz<0>"))))},
pc(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
j7(a,b,c){var s=new A.dx(a,b,c.h("dx<0>"))
s.c=a.e
return s},
dZ(a,b){var s=J.I(a.a)
if(new A.O(s,a.b,a.$ti.h("O<1>")).m())return s.gp()
return null},
aP(a,b,c){var s=A.qi(b,c)
a.aa(0,new A.lt(s,b,c))
return s},
lu(a,b){var s,r,q=A.oS(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.k(0,b.a(a[r]))
return q},
oT(a,b){var s=A.oS(b)
s.I(0,a)
return s},
un(a,b){var s=t.bP
return J.pS(s.a(a),s.a(b))},
oU(a){var s,r
if(A.pM(a))return"{...}"
s=new A.aJ("")
try{r={}
B.a.k($.br,a)
s.a+="{"
r.a=!0
a.aa(0,new A.lw(r,s))
s.a+="}"}finally{if(0>=$.br.length)return A.d($.br,-1)
$.br.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
vz(){throw A.c(A.as("Cannot change an unmodifiable set"))},
fv:function fv(){},
ni:function ni(a){this.a=a},
fx:function fx(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dt:function dt(a,b){this.a=a
this.$ti=b},
fw:function fw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bz:function bz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j6:function j6(a){this.a=a
this.c=this.b=null},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lt:function lt(a,b,c){this.a=a
this.b=b
this.c=c},
H:function H(){},
T:function T(){},
lv:function lv(a){this.a=a},
lw:function lw(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.$ti=b},
fz:function fz(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fN:function fN(){},
e1:function e1(){},
cD:function cD(a,b){this.a=a
this.$ti=b},
cf:function cf(){},
fG:function fG(){},
jp:function jp(){},
fj:function fj(a,b){this.a=a
this.$ti=b},
em:function em(){},
fO:function fO(){},
wH(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ae(r)
q=A.ah(String(s),null,null)
throw A.c(q)}q=A.nH(p)
return q},
nH(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.j4(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.nH(a[s])
return a},
vQ(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.tj()
else s=new Uint8Array(o)
for(r=J.bt(a),q=0;q<o;++q){p=r.i(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
vP(a,b,c,d){var s=a?$.ti():$.th()
if(s==null)return null
if(0===c&&d===b.length)return A.r6(s,b)
return A.r6(s,b.subarray(c,d))},
r6(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
pU(a,b,c,d,e,f){if(B.c.ah(f,4)!==0)throw A.c(A.ah("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.c(A.ah("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.c(A.ah("Invalid base64 padding, more than two '=' characters",a,b))},
qf(a,b,c){return new A.eV(a,b)},
w7(a){return a.C()},
vg(a,b){return new A.nl(a,[],A.xk())},
vh(a,b,c){var s,r=new A.aJ(""),q=A.vg(r,b)
q.cf(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
vR(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
j4:function j4(a,b){this.a=a
this.b=b
this.c=null},
nk:function nk(a){this.a=a},
j5:function j5(a){this.a=a},
nz:function nz(){},
ny:function ny(){},
h9:function h9(){},
k6:function k6(){},
cT:function cT(){},
hm:function hm(){},
hw:function hw(){},
eV:function eV(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
hV:function hV(){},
lm:function lm(a){this.b=a},
ll:function ll(a){this.a=a},
nm:function nm(){},
nn:function nn(a,b){this.a=a
this.b=b},
nl:function nl(a,b,c){this.c=a
this.a=b
this.b=c},
iE:function iE(){},
mM:function mM(a){this.a=a},
nx:function nx(a){this.a=a
this.b=16
this.c=0},
xB(a){var s=A.lR(a,null)
if(s!=null)return s
throw A.c(A.ah(a,null,null))},
u3(a,b){a=A.am(a,new Error())
if(a==null)a=A.er(a)
a.stack=b.n(0)
throw a},
bR(a,b,c,d){var s,r=c?J.qa(a,d):J.q9(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aX(a,b,c){var s,r=A.e([],c.h("p<0>"))
for(s=J.I(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
S(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("p<0>"))
s=A.e([],b.h("p<0>"))
for(r=J.I(a);r.m();)B.a.k(s,r.gp())
return s},
ao(a,b){var s=A.aX(a,!1,b)
s.$flags=3
return s},
qx(a,b,c){var s,r
A.ii(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.c(A.aH(c,b,null,"end",null))
if(s===0)return""}r=A.uT(a,b,c)
return r},
uT(a,b,c){var s=a.length
if(b>=s)return""
return A.uG(a,b,c==null||c>s?s:c)},
qw(a,b,c){var s=J.I(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
mJ(){var s,r,q=A.uv()
if(q==null)throw A.c(A.as("'Uri.base' is not supported"))
s=$.qD
if(s!=null&&q===$.qC)return s
r=A.v0(q)
$.qD=r
$.qC=q
return r},
uR(){return A.c4(new Error())},
tK(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
q_(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ho(a){if(a>=10)return""+a
return"0"+a},
u2(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.c(A.aD(b,"name","No enum value with that name"))},
hx(a){if(typeof a=="number"||A.bF(a)||a==null)return J.dH(a)
if(typeof a=="string")return JSON.stringify(a)
return A.qo(a)},
u4(a,b){A.dC(a,"error",t.K)
A.dC(b,"stackTrace",t.l)
A.u3(a,b)},
h7(a){return new A.h6(a)},
w(a,b){return new A.bI(!1,null,b,a)},
aD(a,b,c){return new A.bI(!0,a,b,c)},
qq(a){var s=null
return new A.e4(s,s,!1,s,s,a)},
uH(a,b){return new A.e4(null,null,!0,a,b,"Value not in range")},
aH(a,b,c,d,e){return new A.e4(b,c,!0,a,d,"Invalid value")},
f7(a,b,c){if(0>a||a>c)throw A.c(A.aH(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aH(b,a,c,"end",null))
return b}return c},
ii(a,b){if(a<0)throw A.c(A.aH(a,0,null,b,null))
return a},
l8(a,b,c,d){return new A.hL(b,!0,a,d,"Index out of range")},
as(a){return new A.fk(a)},
qA(a){return new A.iz(a)},
m(a){return new A.e9(a)},
an(a){return new A.hk(a)},
dV(a){return new A.n6(a)},
ah(a,b,c){return new A.J(a,b,c)},
ug(a,b,c){var s,r
if(A.pM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.k($.br,a)
try{A.wE(a,s)}finally{if(0>=$.br.length)return A.d($.br,-1)
$.br.pop()}r=A.qw(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
oO(a,b,c){var s,r
if(A.pM(a))return b+"..."+c
s=new A.aJ(b)
B.a.k($.br,a)
try{r=s
r.a=A.qw(r.a,a,", ")}finally{if(0>=$.br.length)return A.d($.br,-1)
$.br.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
wE(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.q(l.gp())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.k(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
cd(a,b,c,d){var s
if(B.k===c){s=J.b8(a)
b=J.b8(b)
return A.my(A.cg(A.cg($.jI(),s),b))}if(B.k===d){s=J.b8(a)
b=J.b8(b)
c=J.b8(c)
return A.my(A.cg(A.cg(A.cg($.jI(),s),b),c))}s=J.b8(a)
b=J.b8(b)
c=J.b8(c)
d=J.b8(d)
d=A.my(A.cg(A.cg(A.cg(A.cg($.jI(),s),b),c),d))
return d},
ut(a){var s,r,q=$.jI()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.cg(q,J.b8(a[r]))
return A.my(q)},
p1(a,b){return new A.fj(A.oT(a,b),b.h("fj<0>"))},
v0(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.qB(a4<a4?B.b.B(a5,0,a4):a5,5,a3).ghB()
else if(s===32)return A.qB(B.b.B(a5,5,a4),0,a3).ghB()}r=A.bR(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.rI(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.rI(a5,0,q,20,r)===20)r[7]=q
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
a5=B.b.b5(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.Z(a5,"http",0)){if(i&&o+3===n&&B.b.Z(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.b5(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.Z(a5,"https",0)){if(i&&o+4===n&&B.b.Z(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.b5(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.ji(a4<a5.length?B.b.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.vJ(a5,0,q)
else{if(q===0)A.en(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.vK(a5,c,p-1):""
a=A.vF(a5,p,o,!1)
i=o+1
if(i<n){a0=A.lR(B.b.B(a5,i,n),a3)
d=A.vH(a0==null?A.k(A.ah("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.vG(a5,n,m,a3,j,a!=null)
a2=m<l?A.vI(a5,m+1,l,a3):a3
return A.vA(j,b,a,d,a1,a2,l<a4?A.vE(a5,l+1,a4):a3)},
qF(a){var s=t.N
return B.a.br(A.e(a.split("&"),t.s),A.x(s,s),new A.mL(B.aS),t.G)},
iD(a,b,c){throw A.c(A.ah("Illegal IPv4 address, "+a,b,c))},
uY(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iD("each part must be in the range 0..255",a,r)}A.iD("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iD(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bu(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iD(j,a,q)
p=l}A.iD("IPv4 address should contain exactly 4 parts",a,q)},
uZ(a,b,c){var s
if(b===c)throw A.c(A.ah("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.v_(a,b,c)
if(s!=null)throw A.c(s)
return!1}A.qE(a,b,c)
return!0},
v_(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
qE(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.mK(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.uY(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cJ(l,8)
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
B.bx.hO(s,a0,16,s,a)
B.bx.kj(s,a,a0,0)}}return s},
vA(a,b,c,d,e,f,g){return new A.fP(a,b,c,d,e,f,g)},
r0(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
en(a,b,c){throw A.c(A.ah(c,a,b))},
vH(a,b){var s=A.r0(b)
if(a===s)return null
return a},
vF(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.en(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.vC(a,q,r)
if(o<r){n=o+1
p=A.r5(a,B.b.Z(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.uZ(a,q,o)
l=B.b.B(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.c6(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.r5(a,B.b.Z(a,"25",n)?o+3:n,c,"%25")}else p=""
A.qE(a,b,o)
return"["+B.b.B(a,b,o)+p+"]"}}return A.vM(a,b,c)},
vC(a,b,c){var s=B.b.c6(a,"%",b)
return s>=b&&s<c?s:c},
r5(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aJ(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.pg(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aJ("")
l=h.a+=B.b.B(a,q,r)
if(m)n=B.b.B(a,r,r+3)
else if(n==="%")A.en(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aJ("")
if(q<r){h.a+=B.b.B(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.B(a,q,r)
if(h==null){h=new A.aJ("")
m=h}else m=h
m.a+=i
l=A.pf(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.B(a,b,c)
if(q<c){i=B.b.B(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
vM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.pg(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aJ("")
k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.B(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aJ("")
if(q<r){p.a+=B.b.B(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.en(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aJ("")
l=p}else l=p
l.a+=k
j=A.pf(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.B(a,b,c)
if(q<c){k=B.b.B(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
vJ(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.r2(a.charCodeAt(b)))A.en(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.en(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.B(a,b,c)
return A.vB(q?a.toLowerCase():a)},
vB(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
vK(a,b,c){return A.fQ(a,b,c,16,!1,!1)},
vG(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.fQ(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.vL(q,e,f)},
vL(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.vN(a,!s||c)
return A.vO(a)},
vI(a,b,c,d){return A.fQ(a,b,c,256,!0,!1)},
vE(a,b,c){return A.fQ(a,b,c,256,!0,!1)},
pg(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.ok(r)
o=A.ok(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ac(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
pf(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.jj(a,6*p)&63|q
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
o+=3}}return A.qx(s,0,null)},
fQ(a,b,c,d,e,f){var s=A.r4(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
r4(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.pg(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.en(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.pf(n)}if(o==null){o=new A.aJ("")
k=o}else k=o
k.a=(k.a+=B.b.B(a,p,q))+l
if(typeof m!=="number")return A.jG(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.B(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
r3(a){if(B.b.W(a,"."))return!0
return B.b.c5(a,"/.")!==-1},
vO(a){var s,r,q,p,o,n,m
if(!A.r3(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.aU(s,"/")},
vN(a,b){var s,r,q,p,o,n
if(!A.r3(a))return!b?A.r1(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gO(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.r1(s[0]))}return B.a.aU(s,"/")},
r1(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.r2(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.bC(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
vD(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.c(A.w("Invalid URL encoding",null))}}return r},
ph(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aS===d)return B.b.B(a,b,c)
else p=new A.hi(B.b.B(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.c(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.c(A.w("Truncated URI",null))
B.a.k(p,A.vD(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.J.a(p)
return B.fv.jW(p)},
r2(a){var s=a|32
return 97<=s&&s<=122},
qB(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.c(A.ah(k,a,r))}}if(q<0&&r>b)throw A.c(A.ah(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gO(j)
if(p!==44||r!==n+7||!B.b.Z(a,"base64",n+1))throw A.c(A.ah("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.cl.kH(a,m,s)
else{l=A.r4(a,m,s,256,!0,!1)
if(l!=null)a=B.b.b5(a,m,s,l)}return new A.mI(a,j,c)},
rI(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a){this.a=a},
iZ:function iZ(){},
a2:function a2(){},
h6:function h6(a){this.a=a},
ch:function ch(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hL:function hL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fk:function fk(a){this.a=a},
iz:function iz(a){this.a=a},
e9:function e9(a){this.a=a},
hk:function hk(a){this.a=a},
i8:function i8(){},
ff:function ff(){},
n6:function n6(a){this.a=a},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
K:function K(a,b,c){this.a=a
this.b=b
this.$ti=c},
af:function af(){},
E:function E(){},
jn:function jn(){},
mt:function mt(){this.b=this.a=0},
aJ:function aJ(a){this.a=a},
mL:function mL(a){this.a=a},
mK:function mK(a){this.a=a},
fP:function fP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mI:function mI(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
iV:function iV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
lD:function lD(a){this.a=a},
al(a){var s
if(typeof a=="function")throw A.c(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jw,a)
s[$.eA()]=a
return s},
jw(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
pK(a,b,c){return c.a(a[b])},
ro(a,b){return a[b]},
aL(a,b,c,d){return d.a(a[b].apply(a,c))},
rh(a,b,c,d){return d.a(a[b](c))},
b7(a,b){var s=new A.ad($.a5,b.h("ad<0>")),r=new A.fo(s,b.h("fo<0>"))
a.then(A.ey(new A.oE(r,b),1),A.ey(new A.oF(r),1))
return s},
rx(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cp(a){if(A.rx(a))return a
return new A.of(new A.fx(t.mp)).$1(a)},
oE:function oE(a,b){this.a=a
this.b=b},
oF:function oF(a){this.a=a},
of:function of(a){this.a=a},
j3:function j3(){},
ee:function ee(){this.b=this.a=0},
lX:function lX(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lY:function lY(){},
dd:function dd(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(){this.a=null
this.d=0},
id:function id(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
dP:function dP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hA:function hA(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
kD:function kD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
d0(a,b){return new A.kT(a,b)},
ce:function ce(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b){this.a=a
this.b=b},
kT:function kT(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a,b){this.a=a
this.c=b},
ic:function ic(a,b,c){this.b=a
this.d=b
this.e=c},
e8:function e8(){},
oW(a,b,c,d,e,f,g,h){return new A.d9(c,a,f,e,d,g,h,b)},
h5:function h5(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h},
cj:function cj(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
mN:function mN(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lG(a){var s,r=t.N,q=A.ar(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.I(0,A.ar(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.I(0,A.ar(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.I(0,A.ar(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.I(0,A.ar(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.k(0,"gradeOutput")
if(p.v(0,"ps1"))q.k(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.lF(A.p1(q,r),s)},
lF:function lF(a,b){this.a=a
this.b=b},
lH:function lH(){},
lO:function lO(a){this.b=a},
il:function il(){this.a=null
this.c=0
this.d=!1},
dT:function dT(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
bd:function bd(a,b,c,d,e,f,g,h,i,j){var _=this
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
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj:function hj(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
df:function df(a,b){this.a=a
this.b=b},
kF:function kF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
uo(){return new A.i_(new A.bV(new A.ly(),A.e([],t.dz),A.e([],t.t),t.kk))},
i_:function i_(a){this.a=a},
ly:function ly(){},
rK(a){var s=4
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
case 3:s=A.k(A.as("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
w5(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.ap[r]
if(A.rK(q.a)===b)s+=q.c}return s},
up(a){return new A.lA(a,new A.bV(new A.lB(),A.e([],t.jk),A.e([],t.t),t.ll),A.x(t.S,t.mL))},
iB:function iB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lA:function lA(a,b,c){this.a=a
this.b=b
this.c=c},
lB:function lB(){},
lC:function lC(){},
uU(a){var s=new A.iy(a,new A.bV(new A.mC(),A.e([],t.mQ),A.e([],t.t),t.ox),A.x(t.S,t._))
s.d=s.ed()
return s},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
mC:function mC(){},
mE:function mE(){},
mD:function mD(){},
xe(a){var s,r,q,p,o=A.e([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
B.a.k(o,new A.d2(p,A.e([p],r)))
continue}return o},
d2:function d2(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
kz:function kz(){},
kA:function kA(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
hz:function hz(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b
this.c=0},
oX(){return!0},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
lJ:function lJ(){},
lK:function lK(){},
bK:function bK(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e5:function e5(a,b){this.a=a
this.b=b},
L:function L(a,b){this.a=a
this.b=b},
eE:function eE(a){this.b=a},
lU:function lU(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aG:function aG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lZ:function lZ(){},
aF:function aF(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
m0:function m0(a,b){this.a=a
this.b=b},
m4:function m4(){},
m3:function m3(){},
m2:function m2(a){this.a=a},
m1:function m1(a,b,c){this.a=a
this.b=b
this.c=c},
m_:function m_(a,b){this.a=a
this.b=b},
uL(a){return new A.f8(a,new A.bV(new A.m6(),A.e([],t.n_),A.e([],t.t),t.mn))},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a,b){this.a=a
this.b=b},
m6:function m6(){},
rl(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.wc(a,r,s,a.x.gp().a.b.a).b},
wc(a,b,c,d){var s,r,q,p,o=new A.nY(a),n=new A.nZ(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.xg(b,l,m,s.c.gkX(),new A.nK(n),new A.nL(n),new A.nM(a),new A.nQ(a),new A.nR(n),new A.nS(n),new A.nT(a),r.gkZ(),o,new A.nU(n),new A.nV(n),new A.nW(n),new A.nX(n),new A.nN(n),new A.nO(a),new A.nP(n),c.c,c.b)}else q=new A.hy(A.e([new A.iO(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.f5(b,u.l,u.q,l,B.N)],t.o5))
a.r.toString
p=q.jK(B.D,new A.lZ(),!1,new A.jc())
o=p.a.b
if(o.length!==0)throw A.c(A.m("safe renderer graph is invalid: "+A.q(o)))
return new A.ns(q,p)},
wd(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.c(A.m("renderer graph is not initialized"))
s=a4.gdB()
r=a5.a
q=A.xm(A.u7(r.c),s,-1).a
p=A.e([],t.mX)
o=A.e([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.c,k=0;k<q.length;q.length===s||(0,A.r)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.aj)B.a.k(o,new A.ap(new A.aV(m.hz(B.y).c,h),j,l))
else B.a.k(p,new A.ap(new A.aZ(B.eY,i.b,i.a,h),j,n))}g=new A.j0(A.xe(A.xP(p)),A.xO(o),r,a5.b,a5.c)
f=new A.hr(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.r)(s),++k){e=s[k]
d=A.x(n,m)
for(l=e.gT().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.r)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.m("GPU resource adapter is not initialized"))
a0=a.b.i(0,b)
if(a0==null)A.k(A.m("resource is not in candidate: "+b))
d.l(0,b,new A.he(a0))}e.a8(new A.hd(d,f,g))}},
qu(a){return new A.ml(a,new A.kc(new A.kd(),new A.il()),new A.kE(A.e([],t.c8),B.dq),A.e([],t.oZ),B.au)},
nY:function nY(a){this.a=a},
nZ:function nZ(a,b){this.a=a
this.b=b},
nW:function nW(a){this.a=a},
nQ:function nQ(a){this.a=a},
nV:function nV(a){this.a=a},
nM:function nM(a){this.a=a},
nN:function nN(a){this.a=a},
nX:function nX(a){this.a=a},
nU:function nU(a){this.a=a},
nK:function nK(a){this.a=a},
nL:function nL(a){this.a=a},
nR:function nR(a){this.a=a},
nS:function nS(a){this.a=a},
nT:function nT(a){this.a=a},
nP:function nP(a){this.a=a},
nO:function nO(a){this.a=a},
ns:function ns(a,b){this.a=a
this.b=b},
jc:function jc(){},
j0:function j0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mf:function mf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
ml:function ml(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
mm:function mm(){},
xP(a){var s,r,q=A.S(a,t.p)
B.a.Y(q,new A.oJ())
s=A.Q(q)
r=s.h("a0<1,be>")
s=A.S(new A.a0(q,s.h("be(1)").a(new A.oK()),r),r.h("a3.E"))
s.$flags=1
return s},
xO(a){var s,r,q=A.S(a,t.c)
B.a.Y(q,new A.oH())
s=A.Q(q)
r=s.h("a0<1,be>")
s=A.S(new A.a0(q,s.h("be(1)").a(new A.oI()),r),r.h("a3.E"))
s.$flags=1
return s},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
oJ:function oJ(){},
oK:function oK(){},
oH:function oH(){},
oI:function oI(){},
xm(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.bH)
for(s=b.$ti,r=new A.bk(b.a(),s.h("bk<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.c(A.w("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.l6(n)===B.b4){++p
continue}B.a.k(l,o)}return new A.kf(l)},
kf:function kf(a){this.a=a},
dI(a){var s,r,q,p,o,n,m,l,k
for(s=J.I(a),r=B.fy,q=B.fz,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.A(m,k,Math.min(r.c,o))
q=new A.A(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.c(A.w("Aabb.fromPoints requires at least one point",null))
return new A.h3(r,q)},
h3:function h3(a,b){this.a=a
this.b=b},
u7(a){var s,r,q,p,o,n,m=a.a,l=new A.kH(),k=m.length
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
return new A.kG(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
db:function db(a,b){this.a=a
this.b=b},
dY:function dY(a,b){this.a=a
this.b=b},
kG:function kG(a){this.a=a},
kH:function kH(){},
qk(a){if(a.length!==16)throw A.c(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.cc(new Float32Array(A.a_(a)))},
oV(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cc(q)},
ql(a,b,c){var s=b.gac(),r=s.aN(c).gac(),q=r.aN(s),p=new Float32Array(16)
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
p[12]=-r.bm(a)
p[13]=-q.bm(a)
p[14]=s.bm(a)
p[15]=1
return new A.cc(p)},
cc:function cc(a){this.a=a},
lx:function lx(){},
lW:function lW(){},
mF:function mF(){},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hc:function hc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq:function hq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fs:function fs(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c,d,e,f,g,h,i,j){var _=this
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
iX:function iX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hu:function hu(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
iY:function iY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hI:function hI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
j2:function j2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
he:function he(a){this.b=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qv(a){var s=A.ql(B.I,B.a3,Math.abs(0)<0.99?B.fx:B.I)
return new A.di(A.oV(1,1,B.c.a_(1,0.1,3),0.05).V(0,s))},
di:function di(a){this.a=a},
ip:function ip(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jg:function jg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xg(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.c(A.aD(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.qv(B.cE)
c=t.o5
l=A.e([],c)
if(r){B.a.I(l,A.e([new A.eC(a,j,i,b,h,h,B.cf,!0,B.N,B.bK,b1),new A.eC(a,j,i,b,g,g,B.h8,!1,B.bK,B.bL,a2),new A.hc(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.oL()}else k=B.N
if(q){B.a.I(l,A.e([new A.eH(a,j,i,b,f,f,B.cg,k,B.bD,b1),new A.eH(a,j,i,b,e,e,B.h9,B.bD,B.bE,a6),new A.hu(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bF}if(p){B.a.k(l,new A.hI(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bJ}if(o){B.a.k(l,new A.ih(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bM}if(n){B.a.k(l,new A.iG(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.aw}c=A.e([new A.hq(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.it(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.is(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.ip(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.od(d)))
c.push(new A.iq(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 toLight=normalize(uLightPosition-vWorldPos);\n  float ndotl=max(dot(n,toLight),0.);\n  float shadow=shadowFactor(ndotl);\n  float attenuation=lightAttenuation(vWorldPos);\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+vec3(ndotl*shadow*attenuation),0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.oe(d,m),a5,b4,s,b9,b8))
B.a.I(c,l)
c.push(new A.f5(a,j,u.q,b,k))
return new A.hy(c)},
od:function od(a){this.a=a},
oe:function oe(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jh:function jh(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jk:function jk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
is:function is(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jj:function jj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iG:function iG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jq:function jq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(){},
io(a,b){return new A.fe(a,b)},
hE:function hE(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d_:function d_(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eO:function eO(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
C:function C(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
hr:function hr(a){this.a=a},
ie:function ie(a,b){this.a=a
this.b=b},
kS:function kS(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
ek:function ek(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
q1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eI(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
ha:function ha(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mY:function mY(){this.a=null},
v5(a){var s=new A.iN(a,B.f,new A.mY())
s.ii(a)
return s},
bM(a,b){var s,r
if(a.b!==B.f)A.k(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
v9(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
v8(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
qI(a,b){var s
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
v6(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b3(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.m(u.k))
s=a.f
r=s.k0(b)
if(r.a===0)return
if(r.v(0,B.aB)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aC))a.a.depthFunc(A.v9(a,b.b))
if(r.v(0,B.aD))a.a.depthMask(b.c)
if(r.v(0,B.aH)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aI))a.a.cullFace(A.v8(a,b.x))
if(r.v(0,B.c8)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aE)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aF))a.a.blendFunc(A.qI(a,b.e),A.qI(a,b.f))
if(r.v(0,B.aG))a.a.blendEquation(A.v6(a,b.r))
if(r.v(0,B.c6))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.c7)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
v7(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
ec(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.v7(a,b))},
cF(a,b){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=A.f(b.a)
a.a.useProgram(s)
a.e=s},
z(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.m(u.k))
s=a.e
if(s==null)throw A.c(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.fW(c.b))
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
bN(a,b){if(a.b!==B.f)A.k(A.m(u.k))
a.a.bindVertexArray(A.f(b.a))},
bj(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.fS){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.fR){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.c(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.c(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
dn(a,b,c){if(a.b!==B.f)A.k(A.m(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
p4(a,b,c,d){if(a.b!==B.f)A.k(A.m(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
p5(a,b,c){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
p6(a,b,c,d){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=v.G
A.aL(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
va(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
qL(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.m(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.c(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b5?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.va(a,b.b))
return new A.cL(r)},
qJ(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
qK(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
p7(a,b){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.m(u.k))
s=a.a
r=A.i(s.createTexture())
if(r==null)throw A.c(A.m("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.a(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.aL(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aL(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.qJ(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.qJ(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.qK(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.qK(a,p))
return new A.cL(new A.fS(r,l,k,q,!1))},
p8(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.m(u.k))
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
if(r)A.aL(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aL(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
p9(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
c_(a){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.c(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.cL(s)},
qM(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.c(A.io(b===A.pK(A.ro(A.t_(),r),q,t.S)?B.c1:B.c2,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.cp(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bE(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.c(A.io(b===A.pK(A.ro(A.t_(),r),q,t.S)?B.c1:B.c2,s))}return o},
vb(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.m(u.k))
q=v.G
s=A.qM(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.qM(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.c(B.fc)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.cp(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bE(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.io(B.c3,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.io(B.c4,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.io(B.c4,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.cL(n)},
cL:function cL(a){this.a=a},
fS:function fS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fR:function fR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iN:function iN(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
mW:function mW(a){this.a=a},
mX:function mX(a){this.a=a},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jW(a,b){var s=0,r=A.bp(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$jW=A.bs(function(a0,a1){if(a0===1)return A.bm(a1,r)
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
c=new A.h8(p,b,m,l,k,j,i,h,g,f,e,d,n,B.aT,A.x(o,t.iL))
c.i6(p,b)
p=A.o(a).h("Y<1,2>")
s=3
return A.ak(A.kJ(A.hY(new A.Y(a,p),p.h("ba<af>(n.E)").a(new A.jX(c)),p.h("n.E"),t.mj),t.b),$async$jW)
case 3:n=n.i(0,"ir-stone")
p=n==null?c.iS():n
d.buffer=p
q=c
s=1
break
case 1:return A.bn(q,r)}})
return A.bo($async$jW,r)},
h8:function h8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
jX:function jX(a){this.a=a},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
kC:function kC(a){this.a=a},
iw:function iw(a,b,c,d,e,f,g,h,i,j){var _=this
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
kQ:function kQ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
kR:function kR(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=0
this.$ti=b},
hM:function hM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
hZ:function hZ(a){this.a=a},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lz:function lz(a,b){this.a=a
this.b=b},
fg(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bu(a)
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
dj:function dj(a){this.a=a
this.b=0},
m5:function m5(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
me:function me(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uM(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.qs(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.hR(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.ja(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.bR(800,0,!1,r)
p=new Float32Array(8064)
o=J.hR(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.j8(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.bR(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).gac()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.m7(a,new A.kQ(a,A.x(t.m,r)),b,c,A.a7(t.N),j,i,h,g,q,p,A.x(r,t.hX),o,n,m,B.eb,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.hZ(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.ic(a,b,c)
return k},
m7:function m7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.ak=a
_.aq=b
_.aQ=c
_.aR=d
_.dk=_.fV=1
_.dw=_.dv=_.hc=_.hb=_.ha=_.h9=_.h8=_.h7=_.du=_.dt=_.ds=_.dr=_.dq=_.dn=_.dm=_.h6=_.h5=_.h4=_.dl=_.h3=_.h2=_.h1=_.h0=_.h_=_.fZ=_.fY=_.fX=_.fW=_.a9=$
_.bW=null
_.eZ=e
_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.fj=_.fi=_.fh=_.fg=_.ff=_.fe=_.fd=_.fc=_.fb=_.fa=_.f9=_.f8=_.f7=_.f6=_.f5=_.f4=_.f3=_.f2=_.f1=_.f0=_.f_=_.bX=$
_.bY=0
_.d2=_.d1=_.d0=_.d_=_.cZ=_.cY=_.cX=$
_.c1=_.c0=_.c_=_.bZ=_.bn=_.aP=null
_.bo=$
_.ft=_.fs=_.fq=!1
_.kc=1
_.d3=f
_.d4=g
_.kd=h
_.fu=i
_.c2=0
_.fv=j
_.ke=k
_.d5=0
_.d6=l
_.kf=1
_.d7=!1
_.bp=0
_.d8=m
_.bq=0
_.fw=n
_.fz=o
_.fC=_.fB=_.fA=1
_.fD=0.55
_.d9=p
_.fE=q
_.da=r
_.dc=s
_.dd=a0
_.fF=_.dh=_.dg=_.df=_.de=0
_.fG=null
_.fH=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.fQ=_.dj=_.di=_.fP=_.fO=_.ki=_.kh=_.kg=_.fN=_.fM=_.fL=_.fK=_.fJ=_.fI=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.fR=a7
_.fS=a8
_.fT=a9
_.fU=b0},
ry(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.a4(0,c).aN(f.a4(0,c)).gac(),r=A.o9(g)
return A.rB(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
h1(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bu(a)
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
rB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.h1(a,A.h1(a,A.h1(a,A.h1(a,A.h1(a,A.h1(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
o9(a){return new A.ej((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
wm(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.c3(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a8(),i=A.a8(),h=A.a8()
switch(B.c.ah(o,6)){case 0:j.b=c
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
h.b=l}s=j.cH()
if(typeof s!=="number")return s.V()
s=B.d.aH(s*255)
r=i.cH()
if(typeof r!=="number")return r.V()
r=B.d.aH(r*255)
q=h.cH()
if(typeof q!=="number")return q.V()
return new A.ej(s,r,B.d.aH(q*255))},
fu:function fu(){},
jl:function jl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
ja:function ja(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j8:function j8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
m8:function m8(){},
m9:function m9(a){this.a=a},
ma:function ma(a){this.a=a},
n_:function n_(){},
mo:function mo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iF(a,b,c){return new A.b(a,b,c)},
qG(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a){this.a=a},
tO(a,b,c){var s=new A.hv(a,c,null,b)
s.i7(a,null,null,b,c)
return s},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
u0(a){var s
if(!t.f.b(a)||typeof a.i(0,"kind")!="string")return null
s=A.dZ(new A.N(B.el,t.gl.a(new A.ks(a)),t.ns),t.no)
return s==null?null:new A.dU(s)},
u_(a){if(a.a!==21)return null
if(a.e)return B.cL
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cM
return B.cK},
bv:function bv(a,b){this.a=a
this.b=b},
kp:function kp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dU:function dU(a){this.a=a},
ks:function ks(a){this.a=a},
uu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
if(!e.b(a))return g
s=a.i(0,"roomId")
r=a.i(0,"eye")
q=a.i(0,"yaw")
p=a.i(0,"pitch")
if(typeof s!="string"||!e.b(r)||typeof q!="number"||typeof p!="number")return g
o=r.i(0,"x")
n=r.i(0,"y")
m=r.i(0,"z")
if(typeof o!="number"||typeof n!="number"||typeof m!="number")return g
l=typeof a.i(0,f)=="string"?A.F(a.i(0,f)):g
k=a.i(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.ib(s,new A.b(o,n,m),q,p,l,j)
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
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wV(a){var s,r,q,p=A.x(t.N,t.z)
for(s=a.gR(),s=s.gu(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.c(B.cY)
p.l(0,q,r.b)}return p},
jx(a){var s,r,q,p,o,n=a.gN().b6(0)
B.a.X(n)
s=t.z
r=A.x(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.l(0,o,A.rj(a.i(0,o)))}return A.dS(r,t.N,s)},
rj(a){var s
if(t.f.b(a))return A.jx(A.wV(a))
if(t.j.b(a)){s=t.z
return A.ao(J.dG(a,A.xL(),s),s)}if(a==null||A.bF(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.de)
return a}throw A.c(A.ah("presentation snapshot contains unsupported value "+J.dF(a).n(0),null,null))},
lP:function lP(a){this.a=a},
qt(a,b,c){var s=A.pm(b),r=A.pm(a)
if(c!==2)A.k(A.aD(c,"version","unsupported save version"))
return new A.e6(c,s,r)},
pm(a){var s,r,q,p,o=A.o(a).h("ai<1>"),n=A.S(new A.ai(a,o),o.h("n.E"))
B.a.X(n)
o=t.z
s=A.x(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.l(0,p,A.ri(a.i(0,p)))}return A.dS(s,t.N,o)},
ri(a){var s,r,q,p
if(t.f.b(a)){s=A.x(t.N,t.z)
for(r=a.gR(),r=r.gu(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.c(B.da)
s.l(0,p,q.b)}return A.pm(s)}if(t.j.b(a)){r=t.z
return A.ao(J.dG(a,A.xN(),r),r)}if(a==null||A.bF(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.df)
return a}throw A.c(A.ah("save contains unsupported value "+J.dF(a).n(0),null,null))},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function mk(){},
dg:function dg(a,b){this.a=a
this.b=b},
q4(a,b,c,d,e,f,g){return new A.kM(a,b,c,d,e,f,g,A.e([],t.mc),A.e([],t.ag))},
q5(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.i(0,"houseSeed"),c=e.i(0,"time"),b=e.i(0,"dayLoop"),a=e.i(0,"journal"),a0=e.i(0,"house"),a1=e.i(0,"difficulty")
if(A.aU(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.c(B.d9)
r=e.i(0,"runSeed")
q=A.aU(r)?r:0
p=c.i(0,"day")
o=c.i(0,"hour")
if(!A.aU(p)||p<1||typeof o!="number")throw A.c(B.di)
if(!isFinite(480))throw A.c(A.aD(480,"daySeconds","must be finite and > 0"))
n=new A.hC(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ah("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.ul(a3,A.aP(a,s,m))
k=A.tL(l,A.aP(b,s,m),n)
j=A.q6(d)
A.ub(A.aP(a0,s,m)).jD(j)
m=A.aP(a1,s,m)
i=m.i(0,"scrutiny")
h=m.i(0,"exhaustion")
g=m.i(0,"isolation")
f=m.i(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bF(f))A.k(B.d_)
return A.q4(d,q,j,n,l,k,new A.ht(i,h,g,f))},
wb(a){var s
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
cZ:function cZ(a,b){this.a=a
this.b=b},
hB:function hB(){},
kN:function kN(a,b){this.a=a
this.b=b},
kM:function kM(a,b,c,d,e,f,g,h,i){var _=this
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
kO:function kO(a){this.a=a},
kP:function kP(){},
ty(a){var s,r,q,p,o,n,m="modelScale",l=A.jB(a,"house manifest"),k=typeof l.i(0,m)=="number"?A.eq(l.i(0,m)):1
if(!isFinite(k)||k<=0)throw A.c(B.d4)
s=A.cO(l,"houseId")
r=A.cO(l,"sourceRef")
q=J.dG(A.jz(l,"rooms"),new A.jZ(k),t.fS)
q=A.S(q,q.$ti.h("a3.E"))
q.$flags=1
p=J.dG(A.jz(l,"portals"),new A.k_(k),t.gE)
p=A.S(p,p.$ti.h("a3.E"))
p.$flags=1
o=J.dG(A.jz(l,"stairs"),new A.k0(),t.d2)
o=A.S(o,o.$ti.h("a3.E"))
o.$flags=1
n=J.dG(A.jz(l,"exteriorCells"),new A.k1(),t.N)
n=A.S(n,n.$ti.h("a3.E"))
n.$flags=1
return new A.jY(s,r,q,p,o)},
tz(a,b){var s=A.jB(a,"room"),r=A.cO(s,"id"),q=A.rH(s.i(0,"origin"),"origin",b),p=A.rH(s.i(0,"size"),"size",b),o=J.dG(A.jz(s,"windows"),new A.k3(b),t.lJ)
o=A.S(o,o.$ti.h("a3.E"))
o.$flags=1
return new A.dK(r,q,p,o)},
jB(a,b){return t.P.b(a)?a:A.fY(b+" is not an object")},
jz(a,b){return t.j.b(a.i(0,b))?t.ia.a(a.i(0,b)):A.fY(b+" is not a list")},
cO(a,b){var s=a.i(0,b)
return typeof s=="string"&&s.length!==0?s:A.fY(b+" is not a string")},
h0(a,b){var s=a.i(0,b)
return typeof s=="number"&&isFinite(s)?s:A.fY(b+" is not finite")},
x6(a,b){var s,r
if(t.j.b(a)){s=J.bt(a)
s=s.gq(a)!==3||s.a5(a,new A.ob())}else s=!0
if(s)return A.fY(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.I(a);r.m();)s.push(A.eq(r.gp()))
return s},
rH(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.x6(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
fY(a){return A.k(A.ah(a,null,null))},
jY:function jY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(){},
k1:function k1(){},
k2:function k2(a){this.a=a},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(a){this.a=a},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dJ:function dJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dL:function dL(a){this.b=a},
ob:function ob(){},
hf:function hf(a,b){this.a=a
this.b=b
this.d=null},
kb:function kb(a){this.a=a},
i0:function i0(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kX:function kX(){this.b=0},
mg:function mg(a,b,c){var _=this
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
ku:function ku(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kv:function kv(){},
kY:function kY(a,b,c){this.a=a
this.b=b
this.c=c},
l_:function l_(){},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b},
kw:function kw(){},
xf(a){var s,r,q,p=new A.kZ(A.e([],t.oP),A.e([],t.t),A.x(t.N,t.S))
for(s=0;s<4;++s)A.we(p,a,B.bp[s],10.5,10.5,8.03,0.42)
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
p.b_(r,new A.aE(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b_(r,q,new A.aE(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aE(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aE(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b_(q,new A.aE(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b_(q,r,new A.aE(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.t(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.wM(p,10.5,10.5,8.03,10.88)
A.w2(p,10.5,10.5,10.88)
A.wa(p,10.5,10.5,8.03)
A.wh(p,a,10.5)
A.wR(p,10.5,10.5)
A.w0(p,10.5)
return p.jI()},
we(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.jX)
for(s=b6.b,r=s.length,q=B.v!==b7,p=B.i!==b7,o=B.m===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.aO(k)
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
B.a.k(b4,new A.cI(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.ar(i),b=J.I(h.a),h=new A.O(b,h.b,h.$ti.h("O<1>"));h.m();){a=b.gp()
if(!a.Q||a.aj(i)!==b7)continue
B:{if(!p||o){a0=g+a.ad(i)
break B}if(!q||n){a0=e+a.ad(i)
break B}a0=null}B.a.k(b4,new A.cI(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.m?b8:b9
r=t.i
a1=A.ar([0,s],r)
a2=A.ar([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.S(a1,a1.$ti.c)
B.a.X(a4)
a5=A.S(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.a5(b4,new A.o_(b0,b1,b2,b3)))continue
switch(m){case 0:b5.t(0,b1,b3,0,b0,b2,r)
break
case 2:b5.t(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.t(0,0,b3,b1,r,b2,b0)
break
case 1:b5.t(0,s,b3,b1,b8,b2,b0)
break}}A.wg(b5,b4,b7,b8,b9,c1)
A.wf(b5,b4,b7,b8,b9,c1)},
wf(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
wg(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.wP(a2,g,a4,a5,a6,a7,q)}},
wP(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
wM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.t(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.t(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.t(4,i,p,-0.38,j,q,-0.44)
a.t(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.t(5,h+0.5,p,o,h-0.5,r,q)}},
w2(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.t(0,g+0.35,k,n,g-0.35,l,q)
a.t(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.t(5,d+0.1,o,m,d-0.1,r,p)}}},
wa(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[-0.48,c+0.48],r=a0-0.16,q=b+0.1,p=0;p<2;++p){o=s[p]
a.t(6,q,a0,o+0.08,-0.1,r,o-0.08)}for(s=[0,b],r=c+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.11,l=n+0.11,k=n-0.07,j=n+0.07,i=0;i<2;++i){o=q[i]
a.t(6,j,a0,o+0.07,k,0,o-0.07)
for(h=[2,4,6],g=o-0.11,f=o+0.11,e=0;e<3;++e){d=h[e]
a.t(6,l,d+0.06,f,m,d,g)}}}},
wh(a,b,c){var s,r,q,p,o,n,m,l,k=b.e.i(0,"hall")
k.toString
s=b.f.i(0,"front-door")
r=k.d.a+s.ad("hall")
q=r+s.w
for(k=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.t(2,p+n,0.02-m,-0.42-l,k-n,-0.08-m,-0.7-l)}a.t(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.t(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.t(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.t(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)},
wR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
w0(a,b){var s,r
a.t(0,6.7,1,-4.05,-2.5,0,-4.4)
a.t(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.t(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.t(7,b+3,0,-4.55,-3,-0.08,-5.2)},
cI:function cI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o_:function o_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xM(a,b,c){var s,r,q=A.pO(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.dW(B.cQ,s)}r=A.rY(a,c,b)
if(r!=null)return new A.dW(B.cR,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.rZ(a,c,b)!=null)return B.cV
return B.cU},
cX:function cX(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.c=b},
rO(a,b){var s,r=new A.dj(new Float32Array(5376)),q=new A.dj(new Float32Array(5376)),p=new A.dj(new Float32Array(5376)),o=new A.dj(new Float32Array(5376)),n=b.d,m=a.aO(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cd(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
k+=m.b
q.cd(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.vW(p,a,b,m,B.bp[s])
for(l=a.ar(b.a),k=J.I(l.a),l=new A.O(k,l.b,l.$ti.h("O<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.vT(o,b,m,j)}A.vS(p,b,m)
A.vU(p,a,b,m)
return new A.mh(B.w.ba(r.a,0,r.b),B.w.ba(q.a,0,q.b),B.w.ba(p.a,0,p.b),B.w.ba(o.a,0,o.b))},
vU(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
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
case"hall":A.vV(b1,b2,b3,b4,a5,a4)
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
A.v(b1,new A.b(a7+m,a9,q),new A.b(p+m,o+B.c.ah(k,2)*0.18,n),a5)}A.v(b1,new A.b(a8+2.55,a9+0.15,b0+0.38),new A.b(a8+2.72,a9+1.55,b0+0.56),a4)
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
vV(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gaS(a)
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
vW(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.m?a3.a:a3.c,a=A.e([],t.a9)
for(s=a2.a,r=a1.ar(s),q=J.I(r.a),r=new A.O(q,r.b,r.$ti.h("O<1>"));r.m();){p=q.gp()
if(!p.as&&p.aj(s)===a4)a.push(new A.cH(p.ad(s),p.ad(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cH(q,q+n.e,p,p+n.f))}}s=t.i
r=A.ar([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.I(0,A.e([m.a,m.b],p))}l=A.S(r,r.$ti.c)
B.a.X(l)
s=A.ar([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.I(0,A.e([m.c,m.d],p))}k=A.S(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.a5(a,new A.nE(f,e,d,c)))continue
A.x7(a0,a2,a3,a4,f,e,d,c)}A.vX(a0,a2,a3,a4,b,a)},
vX(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.a
if(c==="cellar")return
s=c==="living-room"||c==="hall"
r=c==="bedroom"
q=r||c==="landing"||c==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.nC(a,b,a0,a1,a2,a3,0.02,0.17,0.032,p)
o=!s
if(!o||c==="landing")A.nC(a,b,a0,a1,a2,a3,0.88,0.94,0.022,p)
if(!o||r){n=a0.b-0.58
A.nC(a,b,a0,a1,a2,a3,n,n+0.055,0.022,p)}c=a0.b
r=s?0.13:0.09
m=c-0.012
o=s?0.055:0.038
A.nC(a,b,a0,a1,a2,a3,c-r,m,o,p)
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
if(o>0)A.jD(a,b,a0,a1,j,o,f,d,0.04,p)
if(i<a2)A.jD(a,b,a0,a1,i,h,f,d,0.04,p)
if(e<c)A.jD(a,b,a0,a1,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.jD(a,b,a0,a1,j,h,0>o?0:o,g,0.065,p)}}},
nC(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.wY(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.jD(a,b,c,d,n,o,g,h,i,j)}},
wY(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.e([new A.el(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.el(j,m))
j=k.b
if(n<j)B.a.k(p,new A.el(n,j))}h=p}return h},
vS(a,b,c){var s,r,q,p,o=b.a,n=o==="living-room"
if(!n&&o!=="hall"&&o!=="bedroom")return
o=b.d
s=o.a+c.a*0.5
r=o.c+c.c*0.5
q=o.b+c.b
p=n?13748148:13024682
o=q-0.018
A.v(a,new A.b(s-0.24,o,r-0.24),new A.b(s+0.24,q,r+0.24),p)
n=q-0.034
A.v(a,new A.b(s-0.15,n,r-0.15),new A.b(s+0.15,o,r+0.15),p)
A.v(a,new A.b(s-0.055,q-0.048,r-0.055),new A.b(s+0.055,n,r+0.055),p)},
jD(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.aW(j,l,g,h,d)
a.aW(s,r,q,p,d)
a.aW(l,s,p,g,d)
a.aW(r,j,h,q,d)
a.aW(l,j,r,s,d)
a.aW(g,p,q,h,d)},
x7(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
default:o=m}a.cd(s.U(0,o),r.U(0,o),q.U(0,o),p.U(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.x8(b,d)
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
x8(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
vT(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aj(d),b=a3.ad(d),a=b+a3.w
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
A.nD(a0,a1,a2,a3,q)
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
A.nD(a0,a1,a2,a3,q)
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
A.nD(a0,a1,a2,a3,q)
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
A.nD(a0,a1,a2,a3,q)
break}},
nD(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aj(o),m=d.ad(o)
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
mh:function mh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nE:function nE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(a,b){this.a=a
this.b=b},
q6(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.e([],b4),b6=t.aN,b7=A.e([],b6),b8=A.e([],t.jn),b9=t.N
b9=new A.kW(b5,b7,b8,A.x(b9,t.W),A.x(b9,t.gm),new A.kX())
s=t.E
r=t.s
q=t.cs
p=t.x
B.a.I(b5,A.e([new A.ay(n,B.T,new A.b(4.5,3.9,4),new A.b(0,0,0),A.e([new A.aK("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.aK("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.aQ(m,l,new A.b(1,1.95,1),!1,!1,m),new A.aQ(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.ao,"wallpaper-stripes",i,h,B.A),new A.ay(g,B.T,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.e([new A.aK("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.aQ("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.e([new A.b_(e,e,new A.b(0.2,2.175,0.35)),new A.b_(d,d,new A.b(2.2,2.55,3)),new A.b_(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.A),new A.ay(a,B.T,new A.b(4.5,3.75,3),new A.b(0,0,4),A.e([new A.aK("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.aK("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.aQ(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.aQ("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.aQ("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.b_(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.dX),new A.ay("cellar",B.T,new A.b(4,3,4),new A.b(1,-3,2),B.bn,A.e(["hall-cellar"],r),B.ef,B.ao,"wallpaper-damp","floor-concrete","ceiling-pipes",B.A),new A.ay("bedroom",B.U,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.e([new A.aK("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.aK("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.aQ(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.aQ("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.e([new A.b_(a3,a3,new A.b(2.2,1.125,2.5)),new A.b_(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.A),new A.ay(a5,B.U,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bn,A.e(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.e([new A.aQ("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.ao,b,i,h,B.A),new A.ay(a7,B.U,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.e([new A.aK("bathroom-east",B.v,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a6],r),A.e([new A.aQ("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.e([new A.b_(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.A),new A.ay(a9,B.U,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.e([new A.aK("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.aQ("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.e([new A.b_(b0,b0,new A.b(0.5,1.8,0.3)),new A.b_(b1,b1,new A.b(3.7,2.1,2.7)),new A.b_(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.A)],b4))
B.a.I(b7,A.e([A.cz(g,"outside","kit-front-door-recessed",!0,B.i,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cz(g,n,b3,!1,B.G,B.v,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cz(g,a,b3,!1,B.G,B.v,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cz(a,n,b3,!1,B.i,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cz(g,"cellar","kit-cellar-door-grille",!1,B.m,B.v,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cz(g,a5,o,!1,B.v,B.v,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cz(a5,"bedroom",b3,!1,B.G,B.v,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cz(a5,a7,b3,!1,B.m,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cz(a5,a9,b3,!1,B.m,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cB("hall-stairs",f,B.e7,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
b9.io()
b9.iR()
b4=b5.length
if(b4!==8)A.k(A.m("expected eight rooms, got "+b4))
b4=b9.gle()
if(b4!==9)A.k(A.m("window discrepancy must be 9 inside / 11 outside"))
B.a.gb8(b8)
b4=B.a.gO(B.a.gb8(b8).c)
if(b4!==6.3)A.k(A.m("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.m("expected nine physical portals"))
b9.ju()
b9.jt()
return b9},
kW:function kW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
l3:function l3(){},
l4:function l4(){},
l2:function l2(){},
l5:function l5(a){this.a=a},
l6:function l6(){},
pO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.i(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.gac()
j=a.b
if(Math.acos(B.d.a_(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
rY(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.ar(c),r=J.I(s.a),s=new A.O(r,s.b,s.$ti.h("O<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.kP(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.rq(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
rZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.i(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.x9(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.rq(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
rq(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.a_(a.gac().bm(c.b),-1,1))<=e},
x9(a,b,c){var s=a.aO(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
kt:function kt(){this.a=null
this.b=0},
mp:function mp(){},
mq:function mq(){},
bU:function bU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hJ:function hJ(a){this.a=a},
l0:function l0(a){this.a=a},
cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.cy(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
eL:function eL(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cy:function cy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aQ:function aQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(){},
cB:function cB(a,b,c,d,e,f,g){var _=this
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
q7(a,b,c,d,e,f){var s=t.N
return new A.l1(e,f,c,a,A.dS(A.aP(d,s,s),s,s),A.ao(b,s))},
q8(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.x(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.l(0,p.a,new A.f4(p.ax,p.ay))}s=A.x(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.x(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.l(0,j.a,new A.eX(j.d,j.r))}return A.q7(a.r.b,B.l,i,B.bv,h,s)},
ub(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.i(0,"portals"),a0=a3.i(0,"windows"),a1=a3.i(0,"mantles"),a2=a3.i(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.i(0,"overrides")
if(s==null)s=B.ez
r=a3.i(0,"mantleHistory")
if(r==null)r=B.ee
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aU(a2)||!q.b(s)||!t.j.b(r))throw A.c(B.d7)
p=t.N
o=A.x(p,t.ku)
for(n=a.gR(),n=n.gu(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b3)
l=A.aP(q.a(l.b),p,m)
j=l.i(0,"open")
i=l.i(0,"locked")
if(!A.bF(j)||!A.bF(i))A.k(B.b3)
o.l(0,k,new A.f4(j,i))}h=A.x(p,t.y)
for(n=a0.gR(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bF(l.b))throw A.c(B.d5)
h.l(0,k,A.aS(l.b))}g=A.x(p,t.mK)
for(n=a1.gR(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b2)
l=A.aP(q.a(l.b),p,m)
f=l.i(0,"lit")
e=l.i(0,"examined")
if(!A.bF(f)||!A.bF(e))A.k(B.b2)
g.l(0,k,new A.eX(f,e))}d=A.x(p,p)
for(q=s.gR(),q=q.gu(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.c(B.dn)
d.l(0,n,A.F(p.b))}c=A.e([],t.s)
for(q=J.I(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.c(B.cW)
B.a.k(c,b)}return A.q7(a2,c,g,d,o,h)},
pB(a,b){return a.a.a===b.a&&a.ag(0,b.gbT(b))},
l1:function l1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f4:function f4(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
tY(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.lu(e,A.Q(e).c)
q=new A.ee()
q.co((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eJ(a,q,2,r,1+s,A.ar(["time"],t.N))
break
case 3:A.eJ(a,q,3,r,1+s,A.ar(["place"],t.N))
break
case 4:A.eJ(a,q,4,r,2+s,p)
A.tU(a,q,4)
break
case 5:A.eJ(a,q,5,r,s,p)
A.tS(a,q,5)
break
case 6:A.eJ(a,q,6,r,s,p)
A.tT(a,q)
A.tX(a,q,6)
break
case 7:A.tV(a,q,7)
break
default:if(s>0)A.eJ(a,q,b,r,s,p)}},
tR(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.tW(a,b,c))return!1
return!0},
eJ(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));s.m();){r=s.d
if(A.tR(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cm(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.q2(a,b,o[p],f)}},
q2(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aP(B.a.gO(o).a,n,n)
if(d==null)s=A.e(B.r.slice(0),t.s)
else{n=t.nn
s=A.S(new A.N(B.r,t.gS.a(new A.ko(d)),n),n.h("n.E"))}n=s.length
if(n===0)return
n=b.ai(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.i(0,r)
if(q==null)q=""
p=a.a.dX(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.ai(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.cS(c.a,m,B.a.gO(o).b)},
tU(a,b,c){var s=A.q3(a,b,c)
if(!a.bh(s))return
a.e2(c,t.G.a(s),0,B.am,null)},
q3(a,b,c){var s,r,q,p,o,n=t.N,m=A.x(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.r[s]
q=n.i(0,r)
if(q==null)q=B.l
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.ai(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
tS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cm(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aP(B.a.gO(i).a,s,s)
r=p.c
n=A.aP(B.a.gO(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.r[m]
k=o.i(0,l)
j=s.dX(l,k==null?"":k)
k=j.length
if(k!==0){k=b.ai(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.cS(q.a,o,B.a.gO(i).b)
a.cS(p.a,n,B.a.gO(r).b)},
tT(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.ai(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.aE(0,q[r].a)},
tX(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.ai(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.q2(a,b,q[s],null)},
tV(a,b,c){var s=c+1,r=A.q3(a,b,s)
if(!a.bh(r))return
a.e2(s,t.G.a(r),0,B.am,null)},
tW(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gO(b.c).c===B.W}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gO(b.c).c===B.W}if(c===21)return b.e
return!1},
ko:function ko(a){this.a=a},
v4(a){var s,r,q,p,o=t.N,n=A.x(o,t.h)
for(s=0;s<5;++s){r=B.r[s]
q=a.i(0,r)
p=A.aX(q==null?B.l:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.mV(n)},
lp(a,b,c){var s,r,q,p=t.z
p=A.x(p,p)
for(s=0;s<5;++s){r=B.r[s]
q=a.i(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.hX(A.dS(p,q,q),b,c)},
qh(a){var s=t.N
return A.lp(t.P.a(a.i(0,"fields")).b3(0,new A.lq(),s,s),A.eq(a.i(0,"shakiness")),A.u2(B.e9,A.F(a.i(0,"hand")),t.bU))},
u1(a){var s,r,q,p,o=a.i(0,"margin"),n=A.a(a.i(0,"ordinal")),m=A.a(a.i(0,"day")),l=A.e([],t.b1)
for(s=J.I(t.j.a(a.i(0,"revisions"))),r=t.P;s.m();)l.push(A.qh(r.a(s.gp())))
s=A.bE(a.i(0,"corroborator"))
q=A.aS(a.i(0,"locked"))
p=A.re(a.i(0,"lastReadDay"))
return new A.b9(n,m,l,s,q,p,o==null?null:A.qh(r.a(o)))},
cu:function cu(a,b){this.a=a
this.b=b},
mV:function mV(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(){},
lr:function lr(a){this.a=a},
b9:function b9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qe(a){return new A.lc(a,A.x(t.S,t.L),A.a7(t.N),A.e([],t.t))},
ul(a,b){var s,r,q,p,o=A.qe(a)
o.e=A.a(b.i(0,"nextOrdinal"))
o.f=A.a(b.i(0,"locksRemaining"))
s=t.j
o.c.I(0,J.tr(s.a(b.i(0,"tags")),t.N))
for(s=J.I(s.a(b.i(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.u1(r.a(s.gp()))
q.l(0,p.a,p)}return o},
lc:function lc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
lj:function lj(a,b){this.a=a
this.b=b},
k4:function k4(){},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k5:function k5(){},
lo:function lo(){},
ln:function ln(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lM:function lM(){},
lL:function lL(a,b){this.b=a
this.c=b},
lN:function lN(){},
oZ(a){if(!isFinite(0))A.k(A.aD(0,"interpolation",null))
return new A.md(a)},
f9:function f9(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
md:function md(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
mc(a,b,c,d,e){var s="c3dfdcaef8d6-e81ac167594e-dirty",r=A.nJ("RENDERER_SHA"),q=A.nJ("GAME_SHA"),p=A.nJ("DART_SDK_VERSION"),o=A.nJ("LOCKFILE_SHA256"),n=A.lu(b,A.Q(b).c)
n=A.S(n,A.o(n).c)
B.a.X(n)
n=new A.mb(a,e,s,A.ao(n,t.N),r,q,p,o,c,d)
n.ie(a,s,b,c,d,q,o,e,r,p)
return n},
nJ(a){var s=B.et.i(0,a)
return s.length===0?null:s},
mb:function mb(a,b,c,d,e,f,g,h,i,j){var _=this
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
q0(a,b,c,d,e,f,g){var s=A.S(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ah("saved day-loop resources must not be negative",null,null))
return new A.kg(c,g,b,a,e,d===!0,s)},
tL(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.i(0,"sleepHistory")
if(!t.j.b(a0))throw A.c(B.d2)
s=A.e([],t.b2)
for(r=J.I(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.c(B.d8)
i=j.i(0,"day")
h=j.i(0,"quality")
g=j.i(0,"location")
if(!A.aU(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.c(B.d1)
f=A.dZ(new A.N(B.bj,q.a(new A.kh(h)),p),o)
e=A.dZ(new A.N(B.bo,n.a(new A.ki(g)),m),l)
if(f==null||e==null)throw A.c(B.dk)
B.a.k(s,new A.e7(i,f,e))}d=a2.i(0,"hoursRemaining")
c=a2.i(0,"gasRemaining")
b=a2.i(0,"rationCoupons")
a=a2.i(0,"rationCollectedToday")
if(!A.aU(d)||!A.aU(c)||!A.aU(b)||!A.bF(a))throw A.c(B.db)
return A.q0(c,d,a1,a,b,s,a3)},
b0:function b0(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
hN:function hN(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b){this.b=a
this.c=b},
dp:function dp(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
l7:function l7(a){this.c=a},
l9:function l9(a,b){this.a=a
this.b=b},
la:function la(){},
qs(){var s=A.pr(B.l),r=A.pr(B.l),q=new A.mj(B.x,s,r)
if(!isFinite(0))A.k(B.cX)
if(!B.a.ag(r,B.a.gbT(s)))A.k(B.dc)
if(q.a===B.x&&q.b!==0&&!q.e)A.k(B.cZ)
return q},
pr(a){var s,r,q,p=A.e([],t.s),o=A.a7(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.c(B.dj)
B.a.k(p,q)}return p},
bx:function bx(a,b){this.a=a
this.b=b},
mi:function mi(){},
bW:function bW(){},
mj:function mj(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hC:function hC(a,b){this.a=a
this.b=6
this.c=b},
t0(a){var s=B.d.a_(a,0,1)
if(s<=0.5)return A.rw(4491468,16777215,s*2)
return A.rw(16777215,16759637,(s-0.5)*2)},
t1(a){var s=B.d.a_(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).gac()},
rw(a,b,c){var s,r=new A.o3(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.hR()
s=r.$1(8)
if(typeof s!=="number")return s.hR()
r=r.$1(0)
if(typeof r!=="number")return A.jG(r)
return(q<<16|s<<8|r)>>>0},
o3:function o3(a,b,c){this.a=a
this.b=b
this.c=c},
ea(a){var s,r,q=A.x(t.N,t.z)
for(s=a.gR(),s=s.gu(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
mu:function mu(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mv:function mv(){},
mw:function mw(){},
dm:function dm(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b){this.a=a
this.b=b},
mz:function mz(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
mA:function mA(){},
mB:function mB(){},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
k7:function k7(a){this.a=a
this.b=null},
tP(a){var s=A.e([],t.kG)
s=new A.kk(A.V(a,"div","door",null),s)
s.i8(a)
return s},
kk:function kk(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
kn:function kn(a,b){this.a=a
this.b=b},
tZ(a){var s=new A.kq(a,A.f(a.createElement("div")))
s.bD(a)
s.i9(a)
return s},
kq:function kq(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
kr:function kr(a){this.a=a},
ua(a){var s=new A.kU(a,A.f(a.createElement("div")))
s.bD(a)
s.ia(a)
return s},
kU:function kU(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
kV:function kV(a){this.a=a},
ld:function ld(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
lh:function lh(){},
li:function li(){},
V(a,b,c,d){var s=A.f(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
rm(a){var s,r,q,p=A.f(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.kG)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
f3:function f3(){},
lV:function lV(a){this.a=a
this.b=null},
uO(a){var s=new A.mr(a,A.f(a.createElement("div")))
s.bD(a)
s.ih(a)
return s},
mr:function mr(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ms:function ms(a,b,c){this.a=a
this.b=b
this.c=c},
tx(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.od)
for(s=a.d,s=new A.Y(s,A.o(s).h("Y<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.i(0,p)
o.toString
for(n=q.b.gR(),n=n.gu(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.i(0,m).i(0,k)
j.toString
B.a.k(i,new A.bH(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.jR())
return new A.jQ(A.ao(i,t.e),A.a7(t.N))},
bH:function bH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jQ:function jQ(a,b){this.a=a
this.b=b},
jS:function jS(){},
jR:function jR(){},
v3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.h4
s=t.g
r=A.x(s,t.kz)
q=A.o(e).h("ai<1>")
p=A.S(new A.ai(e,q),q.h("n.E"))
B.a.X(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=e.i(0,k).gR(),j=j.gu(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.b2(new A.bi(B.fR,k+" has an out-of-range authored day "+h+"."))
g=A.v2(k,h,i.b,m)
if(g instanceof A.b2)return g
i=n.i(0,k)
f=i==null?null:i.i(0,h)
if(f==null)continue
r.l(0,new A.b1(k,h,f.a,f.b),o.a(g).a)}}return new A.iL(new A.iK(r,A.a7(t.N),A.a7(s),A.e([],t.bl),B.D))},
v2(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.x(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bi[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gR(),k=k.gu(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.W(h,m))continue
g=A.lR(B.b.bC(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b2(new A.bi(B.fS,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.i(0,r+h)
if(f==null)f=B.bm
B.a.k(l,new A.by(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.mP())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b2(new A.bi(B.cc,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.b2(new A.bi(B.cc,a+" day "+s+" has no authored tiers."))
return new A.j9(c)},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
mT:function mT(a){this.a=a},
mS:function mS(a){this.a=a},
mQ:function mQ(a){this.a=a},
mR:function mR(){},
mP:function mP(){},
iL:function iL(a){this.a=a},
j9:function j9(a){this.a=a},
xq(a){var s,r,q,p=A.a7(t.N)
for(s=new A.Y(a,A.o(a).h("Y<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gan(),q=q.gu(q);q.m();)if(q.gp().gN().a5(0,new A.oi())){p.k(0,r.a)
break}}s=A.S(p,p.$ti.c)
B.a.X(s)
return s},
xp(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.l
s=t.N
r=A.aX(b,!0,s)
B.a.X(r)
q=new A.ee()
q.co((a^913741)>>>0)
p=q.ai(4)
if(!(p>=0&&p<4))return A.d(B.bh,p)
o=B.bh[p]
n=r.length
n=o>n?n:o
if(n===0)return B.l
m=A.aX(r,!0,s)
B.a.cm(m,q)
s=A.mx(m,0,A.dC(n,"count",t.S),A.Q(m).c).b6(0)
B.a.X(s)
return s},
oi:function oi(){},
qH(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.i(0,"visitor")
r=a.i(0,"day")
q=a.i(0,"hour")
p=a.i(0,"order")
if(typeof s!="string"||!A.aU(r)||!A.aU(q)||!A.aU(p)||r<1||q<0||q>23||p<0)return null
return new A.b1(s,r,q,p)},
v1(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.i(0,k))||!s.b(a.i(0,j))}else s=!0
if(s)return i
r=A.a7(t.N)
for(s=t.j,q=J.I(s.a(a.i(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a7(t.g)
for(s=J.I(s.a(a.i(0,j)));s.m();){n=A.qH(s.gp())
if(n==null)return i
o.k(0,n)}m=a.i(0,"active")
s=m==null
l=s?i:A.tw(m)
if(!s&&l==null)return i
return new A.iM(r,o,l)},
tw(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.qH(a.i(0,"arrival"))
r=a.i(0,"tier")
q=a.i(0,"phase")
p=a.i(0,"lineIndex")
o=a.i(0,"choice")
n=a.i(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aU(p))if(!(p<0))if(A.bF(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.dZ(new A.N(B.bi,t.nw.a(new A.jN(r)),t.na),t.kM)
k=A.dZ(new A.N(B.ep,t.bQ.a(new A.jO(q)),t.cB),t.nq)
m=o==null
j=m?h:A.dZ(new A.N(B.e2,t.hg.a(new A.jP(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.h4(s,l,k,p,j,n)},
aW:function aW(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bZ:function bZ(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
mO:function mO(){},
h4:function h4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
mU:function mU(){},
b2:function b2(a){this.a=a},
iI:function iI(a){this.a=a},
iH:function iH(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
op(){var s=0,r=A.bp(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$op=A.bs(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.i(A.f(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.M.b=c3
$.pq=A.i(A.f(c2.document).getElementById("fps"))
$.bC.b=$.tk().bB(A.mJ().gby().i(0,"renderer"))
A.wn()
a6=$.M.j()
a7=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
a6.width=a7
a7=$.M.j()
a6=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a7.height=a6
n=A.i(c3.getContext("webgl2"))
if(n==null){$.bC.b=new A.dN(B.Z,$.bC.j().b,!0,"webgl2 unavailable")
h=B.ad.jX($.bC.j())
h.aD()
$.cn.b=h
A.rA()
A.cN("no-webgl2")
c2=A.i(A.f(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bC.j().a===B.a_){a6=t.N
a8=new A.fE(n,A.a($.M.j().width),A.a($.M.j().height),A.e([],t.dg),A.e([],t.jj),A.x(a6,t.hL),A.x(a6,t.p9),A.e([],t.jU),A.x(a6,t.lu),A.x(a6,t.fP),B.dp,B.eZ)}else a8=new A.ed(n,A.a($.M.j().width),A.a($.M.j().height),A.mJ().gby().i(0,"render")==="legacy",$.bC.j().c,$.bC.j().d)
m=a8
$.c1=m instanceof A.fE?m:null
$.jy=m instanceof A.ed?m:null
a6=B.ad.cT($.bC.j(),m)
a6.aD()
$.cn.b=a6}catch(c5){l=A.ae(c5)
$.bC.b=new A.dN(B.Z,!0,!0,"pixeldart initialization failed")
$.jy=new A.ed(n,A.a($.M.j().width),A.a($.M.j().height),A.mJ().gby().i(0,"render")==="legacy",!0,$.bC.j().d)
a6=B.ad.cT($.bC.j(),$.jy)
a6.aD()
$.cn.b=a6
$.M.j().setAttribute("data-renderer-error",A.q(l))}A.rA()
p=4
A.cN("initializing")
$.bD.b=new A.k9(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.py=A.aS(A.f(A.f(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bD.j()
a6.f=$.py?0.5:1
a6=A.f(c2.window)
a7=t.N
b0=A.f(a6.document)
b1=new A.hM(b0,A.a7(a7),A.a7(a7))
a6.addEventListener("keydown",A.al(b1.giZ()))
a6.addEventListener("keyup",A.al(b1.gj0()))
a6.addEventListener("mousemove",A.al(b1.gj4()))
b0.addEventListener("pointerlockchange",A.al(b1.gj2()))
$.bl.b=b1
$.r9.b=new A.hK(A.e([],t.oX),t.lv)
b1=$.M.j()
a6=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
b1.width=a6
a6=$.M.j()
b0=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a6.height=b0
A.cN("renderer")
if($.bC.j().a===B.Z){a6=$.jy
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.j()}$.eu=a6
if(a6==null){h=A.m("legacy runtime did not initialize its renderer")
throw A.c(h)}}A.cN("text")
a6=$.jL()
s=7
return A.ak(a6.bw(),$async$op)
case 7:k=a6.ld()
j=A.v3(k)
if(!(j instanceof A.iL)){i=t.cq.a(j).a
h=i.b
throw A.c("Failed to build visitors: "+h)}$.aB.b=j.a
$.js.b=A.tx(k)
h=A.x(a7,t.h)
for(b0=t.j,b2=0;b2<5;++b2){g=B.r[b2]
b1=A.F(g)
b3=a6.c
b3===$&&A.j()
b4=b3.i(0,b1)
b1=b0.b(b4)?A.aX(b4,!0,a7):B.l
J.bQ(h,g,b1)}f=A.v4(h)
$.pk.b=new A.k8(B.cD)
e=$.pk.j().kR(new A.oq(f))
if(e.a==null){h=B.aT.ai(2147483647)
if(!isFinite(480))A.k(A.aD(480,"daySeconds","must be finite and > 0"))
b5=new A.hC(1,480)
b5.b=10
b6=A.qe(f)
h=A.q4(42,1+h,A.q6(42),b5,b6,A.q0(6,16,b6,null,6,B.ea,b5),new A.ht(0,0,0,!1))}else{h=e.a
h.toString
h=A.q5(h,f)}$.Z.b=h
$.cn.j().az(A.oZ($.Z.j().gdH()))
if(e.b!=null){h=e.b
h.toString
A.ev(h)}h=$.aB.j()
a6=A.xp($.Z.j().b,A.xq(k.b))
h.si0(A.lu(a6,A.Q(a6).c))
A.cN("house")
$.a9.b=$.Z.j().c
a6=$.c1
if(a6!=null)a6.jE($.a9.j())
$.dz.b=$.Z.j().d
h=new A.b(5.5,1.65,3.5)
$.pG=$.px=$.pE=h
d=h.a4(0,new A.b(0,1.3499999999999999,0))
$.fV.b=new A.hf(d,J.pR(d,new A.b(0,1.2000000000000002,0)))
$.eo.b=new A.kt()
$.b4.b=A.qs()
$.aT="hall"
h=e.a
c=A.uu(h==null?null:h.c.i(0,"player"))
if(c!=null&&c.ku($.a9.j())){h=c.b
$.pG=$.px=$.pE=h
$.c2=c.c
$.dA=c.d
$.aT=c.a
b=h.a4(0,new A.b(0,1.3499999999999999,0))
h=$.fV.j()
h.sjF(b)
h.b=J.pR(b,new A.b(0,1.2000000000000002,0))
h=$.fV.j()
a6=$.a9.j()
b1=c.e
b3=c.f
h.l1($.aT,$.eB(),a6,b3,b1)
A.ev("restored position")}h=$.Z.j().e
a6=$.dz.j()
$.Z.j()
$.ju.b=new A.l9(h,a6)
a6=A.f(c2.document)
h=$.Z.j().e
b1=$.dz.j()
b3=$.ju.j()
b7=A.f(a6.createElement("div"))
b3=new A.ld(h,b1,b3,a6,b7)
b3.bD(a6)
A.f(b7.appendChild(A.V(a6,"div","journal-title","The Journal")))
b8=A.V(a6,"div","journal-pages",null)
b1=A.V(a6,"div","page page-left",null)
b3.y!==$&&A.y()
b3.y=b1
h=A.V(a6,"div","page page-right",null)
b3.z!==$&&A.y()
b3.z=h
A.f(b8.appendChild(b1))
A.f(b8.appendChild(h))
A.f(b7.appendChild(b8))
A.f(b7.appendChild(b3.iq()))
b9=A.V(a6,"div","tape-roll",null)
A.f(b9.style).setProperty("width","8rem")
h=A.V(a6,"div","tape-fill",null)
b3.as!==$&&A.y()
b3.as=h
A.f(b9.appendChild(h))
A.f(b7.appendChild(b9))
c0=A.V(a6,"div","consult",null)
A.f(c0.appendChild(A.V(a6,"div","consult-label","Cite an entry")))
h=A.V(a6,"div","entry-picker",null)
b3.at!==$&&A.y()
b3.at=h
b1=A.V(a6,"div","consult-result",null)
b3.ax!==$&&A.y()
b3.ax=b1
A.f(c0.appendChild(h))
A.f(c0.appendChild(b1))
A.f(b7.appendChild(c0))
c1=A.i(a6.documentElement)
if(t.m.b(c1)){A.f(c1.style).setProperty("--shake-max-deg","3deg")
A.f(c1.style).setProperty("--shake-max-px","2px")}$.ep.b=b3
$.ep.j().sca(new A.or())
h=A.f(c2.document)
a6=A.V(h,"div","prompt",null)
A.f(a6.style).setProperty("transition-duration","0.3s")
A.f(A.i(h.body).appendChild(a6))
$.ra.b=new A.lV(a6)
a6=A.f(c2.document)
h=A.V(a6,"div","broadcast",null)
A.f(A.i(a6.body).appendChild(h))
$.r8.b=new A.k7(h)
h=A.f(c2.document)
a6=A.V(h,"div","ambient-notice",null)
A.f(A.i(h.body).appendChild(a6))
$.pi.b=new A.jT(a6)
a6=A.tP(A.f(c2.document))
a6.skI(A.xF())
a6.skK(A.xH())
a6.skJ(A.xG())
$.aA.b=a6
a6=e.a
a=A.v1(a6==null?null:a6.c.i(0,"visitors"))
if(a!=null&&$.aB.j().l0(a))A.wL()
h=$.js.j()
a6=e.a
h.l2(a6==null?null:a6.c.i(0,"ambient"))
h=e.a
a0=h==null?null:h.c.i(0,"unverifiables")
if(b0.b(a0))for(h=J.I(a0);h.m();){a1=h.gp()
if(A.aU(a1))$.oa.k(0,a1)}h=A.uO(A.f(c2.document))
h.skM(new A.os())
h.sca(new A.ov())
$.jv.b=h
h=A.ua(A.f(c2.document))
h.sca(new A.ow())
$.jt.b=h
h=A.tZ(A.f(c2.document))
h.sca(new A.ox())
h.skL(new A.oy())
$.pj.b=h
h=e.a
a2=A.u0(h==null?null:h.c.i(0,"ending"))
if(a2!=null)A.rz(a2)
a3=$.eu
if(a3!=null){A.cN("world")
h=$.a9.j()
a6=a3
a7=new A.mg(h,a6,A.x(a7,t.J))
a7.ig(h,a6)
$.nI=a7}h=B.b.v(A.F(A.f(A.f(c2.window).location).search),"shaders=live")
$.rL=h
if(h){h=$.eu
if(h!=null)h.b4()}A.rC()
A.f(c2.window).addEventListener("resize",A.al(new A.oz()))
A.f(c2.window).addEventListener("keydown",A.al(new A.oA()))
A.f(c2.window).addEventListener("keyup",A.al(new A.oB()))
A.f(c2.window).addEventListener("keydown",A.al(new A.oC()))
A.f(c2.window).addEventListener("click",A.al(new A.ot()))
$.M.j().addEventListener("click",A.al(new A.ou()))
A.es()
A.cN("raf")
A.a(A.f(c2.window).requestAnimationFrame(A.al(A.rU())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ae(c4)
a5=A.c4(c4)
A.o5(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bn(q,r)
case 2:return A.bm(o.at(-1),r)}})
return A.bo($async$op,r)},
wn(){var s=v.G
A.f(s.window).addEventListener("error",A.al(new A.o1()))
A.f(s.window).addEventListener("unhandledrejection",A.al(new A.o2()))},
cN(a){if($.rg===a)return
$.rg=a
$.M.j().setAttribute("data-boot-phase",a)},
rA(){var s,r,q=$.cn.j().gb0(),p=$.M.j(),o=A.mJ().gby().i(0,"renderer")
if(o==null)o="legacy"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.x))
p.setAttribute("data-renderer-diagnostics",B.u.b1(q.C(),null))
p=$.c1
s=p==null?null:p.x
if(s!=null)$.M.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jy
r=p==null?null:p.y
if(r!=null)$.M.j().setAttribute("data-renderer-frame-submits",A.q(r))},
pC(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.b4.j().a!==B.x){A.ev("save unavailable during rupture")
return}try{r=$.pk.j()
q=$.Z.j()
p=t.N
o=t.z
s=A.x(p,o)
n=$.aT
m=$.eB()
l=$.c2
k=$.dA
j=$.fV.j().d
j=j==null?null:j.a.a
i=$.fV.j().d
J.bQ(s,"player",new A.ib(n,m,l,k,j,i==null?null:i.b).C())
n=$.aB.j()
m=A.p1(n.b,p)
l=A.p1(n.c,t.g)
n=n.e
J.bQ(s,"visitors",new A.iM(m,l,n==null?null:new A.h4(n.a,n.b,n.d,n.f,n.e,n.r)).C())
n=$.js.j().b
n=A.S(n,A.o(n).c)
B.a.X(n)
J.bQ(s,"ambient",n)
n=A.S($.oa,A.o($.oa).c)
B.a.X(n)
J.bQ(s,"unverifiables",n)
n=$.pp
if(n!=null)J.bQ(s,"ending",A.R(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.q8(q.c).C()
k=q.d
r.lf(A.qt(s,A.R(["houseSeed",n,"runSeed",m,"house",l,"time",A.R(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C()],p,o),2))
A.ev(a)}catch(h){A.ev("save failed")}},
ev(a){var s=A.i(A.f(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.u8(B.cJ,new A.o8(s),t.H)},
o5(a,b){var s,r,q,p
A.cN("error")
s=A.q(a)
r=A.xR(s,"\n"," ")
s=$.pq
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.f(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.M.j().setAttribute("data-boot-error",p)
A.f(s.console).error(p)},
rc(){if($.pl)return
$.pl=!0
var s=$.fX
if(s!=null)s.hy()
B.a.k($.cM,"arm")},
es(){var s=0,r=A.bp(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$es=A.bs(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ak(A.jA(),$async$es)
case 2:o=null
q=4
s=7
return A.ak(A.b7(A.f(A.f(v.G.window).fetch("res/manifest.json")),t.m),$async$es)
case 7:n=b
i=A
s=8
return A.ak(A.b7(A.f(n.json()),t.X),$async$es)
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
return A.ak(A.kJ(A.e([A.o4(o),A.o0(o)],t.iw),t.H),$async$es)
case 9:return A.bn(null,r)
case 1:return A.bm(p.at(-1),r)}})
return A.bo($async$es,r)},
jA(){var s=0,r=A.bp(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$jA=A.bs(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.e8[f]
p=7
s=10
return A.ak(A.b7(A.f(A.f(i.window).fetch(n)),h),$async$jA)
case 10:m=a0
s=11
return A.ak(A.b7(A.f(m.text()),g),$async$jA)
case 11:l=a0
k=A.ty(B.u.cV(l,null))
e=$.a9.b
if(e===$.a9)A.k(A.aw(""))
k.lb(e)
e=$.M.b
if(e===$.M)A.k(A.aw(""))
e.setAttribute("data-house-manifest","validated")
e=$.M.b
if(e===$.M)A.k(A.aw(""))
e.setAttribute("data-house-manifest-source",n)
s=1
break
p=2
s=9
break
case 7:p=6
b=o.pop()
j=A.ae(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:$.M.j().setAttribute("data-house-manifest","unavailable")
A.f(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.bn(q,r)
case 2:return A.bm(o.at(-1),r)}})
return A.bo($async$jA,r)},
po(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.I(t.h.b(s)?s:new A.bJ(s,A.Q(s).h("bJ<1,l>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.F(q))}},
o0(a){var s=0,r=A.bp(t.H),q,p,o,n,m
var $async$o0=A.bs(function(b,c){if(b===1)return A.bm(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.x(n,n)
n=a==null
A.po(A.i(n?null:a.sfx),m,"")
A.po(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.F(p))
s=2
return A.ak(A.jW(m,$.a9.j()),$async$o0)
case 2:o=c
$.fX=o
if($.pl)o.hy()
return A.bn(null,r)}})
return A.bo($async$o0,r)},
o4(a){var s=0,r=A.bp(t.H),q,p,o
var $async$o4=A.bs(function(b,c){if(b===1)return A.bm(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.x(p,p)
A.po(A.i(a==null?null:a.tex),o,"")
p=$.eu
p=p==null?null:p.al(o)
if(p==null)p=A.oN(t.H)
q=$.c1
q=q==null?null:q.al(o)
s=2
return A.ak(A.kJ(A.e([p,q==null?A.oN(t.H):q],t.iw),t.H),$async$o4)
case 2:return A.bn(null,r)}})
return A.bo($async$o4,r)},
rC(){var s,r,q=v.G,p=A.a(A.f(q.window).innerWidth),o=A.a(A.f(q.window).innerHeight)
q=$.M.j()
s=p>0?p:800
q.width=s
s=$.M.j()
q=o>0?o:600
s.height=q
q=$.eu
if(q!=null)q.au(A.a($.M.j().width),A.a($.M.j().height))
$.cn.j().au(A.a($.M.j().width),A.a($.M.j().height))
q=$.c1
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.M.j().setAttribute("data-renderer-surface",r)},
wI(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
A.eq(b9)
try{s=b9
if(!$.rp){$.pv=s
$.rp=!0}g=s
f=$.pv
if(typeof g!=="number")return g.a4()
r=(g-f)/1000
$.pv=s
g=r
if(typeof g!=="number")return g.ck()
if(g<0)r=0
g=r
if(typeof g!=="number")return g.a3()
if(g>0.25)r=0.25
A.x2(r)
if(!$.pw){g=$.nB
f=r
if(typeof f!=="number")return A.jG(f)
f=$.nB=g+f
q=0
g=t.mv
for(;;){if(f>=0.008333333333333333){e=q
if(typeof e!=="number")return e.ck()
e=e<10}else e=!1
if(!e)break
$.px=$.eB()
f=$.Z.b
if(f===$.Z)A.k(A.aw(""))
f.jA(0.008333333333333333)
A.x5()
f=$.aB.b
if(f===$.aB)A.k(A.aw(""))
e=$.Z.b
if(e===$.Z)A.k(A.aw(""))
f.f=e.r.c>=0.5
f=f.d
d=A.aX(f,!1,g)
d.$flags=3
c=d
B.a.J(f)
if(c.length!==0){f=$.Z.b
if(f===$.Z)A.k(A.aw(""))
f.kT(c)}A.x1()
A.x4()
A.x3()
A.x0(0.008333333333333333)
f=$.eo.b
if(f===$.eo)A.k(A.aw(""))
if(f.a!=null)if((f.b-=0.008333333333333333)<=0)f.a=null
f=$.b4.b
if(f===$.b4)A.k(A.aw(""))
p=f.a!==B.x
e=$.a9.b
if(e===$.a9)A.k(A.aw(""))
f.jB(0.008333333333333333,e)
if(p){f=$.b4.b
if(f===$.b4)A.k(A.aw(""))
f=f.e}else f=!1
if(f)A.rD(!0)
f=$.nB-0.008333333333333333
$.nB=f
e=q
if(typeof e!=="number")return e.U()
q=e+1}o=B.d.a_(f/0.008333333333333333,0,1)
$.pG=A.qG($.tl(),$.eB(),o)
n=$.fX
if(n!=null){for(g=$.cM.length,b=0;b<$.cM.length;$.cM.length===g||(0,A.r)($.cM),++b){m=$.cM[b]
A.w9(n,m)}B.a.J($.cM)}}l=$.eu
if(l!=null){$.bD.j().dC($.jK(),$.c2,$.dA)
g=$.b5===$.ep.j()?1:0
l.bY=g
$.rv=r
$.cn.j().az(A.oZ($.Z.j().gdH()))}else if($.bC.j().a===B.a_){$.bD.j().dC($.jK(),$.c2,$.dA)
g=$.c1
if(g!=null){f=$.bD.j()
e=f.a
a=new A.A(e.a,e.b,e.c)
e=f.b
a0=new A.A(e.a,e.b,e.c)
f=f.c
a1=g.b/g.c
a2=A.ql(a,a0,new A.A(f.a,f.b,f.c))
a3=A.oV(a1,60,1.0471975511965976,0.1)
g.db=new A.dP(a2,a3,a3.V(0,a2),a,a0,0.1,60,a1)}g=$.c1
if(g!=null)g.hQ($.a9.j(),$.aT)
g=$.c1
if(g!=null)g.hM($.a9.j(),$.aT,$.jK(),$.dz.j().gbb(),Math.sin(3.141592653589793*$.dz.j().gbb()))
if($.ru!==$.b4.j().a){$.ru=$.b4.j().a
$.pz=$.pz+1}g=$.c1
if(g!=null){f=s
if(typeof f!=="number")return f.lj()
f/=1000
e=$.pz
a4=A.a(Math.max(0,$.Z.j().b))
if(!isFinite(f)||f<0)A.k(A.aD(f,"timeSeconds",null))
if(a4<0)A.k(A.w("frame clock seeds must be non-negative",null))
g.fy=f
g.go=e
g.id=a4}g=$.c1
if(g!=null){f=$.b4.j()
e=$.py
a5=f.a
a6=f.gdY()
a7=a6>0?B.d.a_(f.b/a6,0,1):0
f=a5.a
a8=f>=3
a9=a5===B.az
a4=a5===B.H?0.45:1
if(f>=1)b0=a5===B.O?a7:1
else b0=0
if(f>=2)f=a5===B.ax?a7:1
else f=0
b1=a8?320:0
b2=a8?5:8
b3=a9?1:0
b4=a9?a7:0
b5=a9?a7:0
b6=a9?a7:0
b7=a9?a7:0
g.dy=new A.id(a4,b0,f,b1,b2,b3,b4,b5,b6,b7,a9?a7:0,e)}$.cn.j().az(A.oZ($.Z.j().gdH()))
k=$.c1
if(k!=null){j=k.gkn()
if(j!=null){$.M.j().setAttribute("data-renderer-frame-stats",j)
g=$.M.j()
f=k.gkm()?"ok":"exceeded"
g.setAttribute("data-renderer-budget",f)}}}A.cN("running")
g=$.bl.j()
g.e=g.d=0
g.c.J(0)
A.a(A.f(v.G.window).requestAnimationFrame(A.al(A.rU())))}catch(b8){i=A.ae(b8)
h=A.c4(b8)
A.o5(i,h)}},
w9(a,b){switch(b){case"arm":a.kO("confirm")
break
case"ambient-winnow":a.dF("winnow",0.28)
break
case"ambient-gate":a.dF("gate",0.22)
break}},
x2(a){var s=$.pq
if(s==null)return
s.textContent=""+B.d.aH(a>0?1/a:0)+" fps"},
x0(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.rG||$.b5!=null||$.aA.j().z){$.jJ().a=new A.b(0,0,0)
return}s=$.bl.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.gac():p
n=$.bl.j().d
m=$.bl.j().e
$.c2=$.c2+n*0.0028
s=$.dA-m*0.0028
$.dA=s
$.dA=B.d.a_(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.c2)+l*Math.sin($.c2),0,l*Math.cos($.c2)-s*Math.sin($.c2)).gac().V(0,2)
s=$.jJ()
if(!isFinite(a1)||a1<0)A.k(A.aD(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.aD(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.U(0,k.a4(0,i).V(0,1-l))
s.a=l
h=$.fV.j().kG($.a9.j(),$.aT,$.eB(),l.V(0,a1))
$.pE=h.a
if($.b4.j().a!==B.aA&&$.b4.j().a!==B.H)$.aT=h.b
$.bD.j().dC($.eB(),$.c2,$.dA)
s=$.bD.j()
l=$.a9.j()
g=A.xM(s,$.aT,l)
$.ra.j().hS(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.pO($.bD.j(),$.a9.j(),$.aT)
break
case 1:e=A.rY($.bD.j(),$.a9.j(),$.aT)
break
case 2:d=A.rZ($.bD.j(),$.a9.j(),$.aT)
break
case 3:break}s=$.r8.j()
c=$.jL().hH($.Z.j().gaJ().a)
l=c==null?a0:c.i(0,"status")
s.dO(l,$.aT==="living-room")
if($.bl.j().c.aE(0,"KeyE")){s=$.Z.j().gaJ()
l=e==null
i=l?a0:e.a
b=B.a.ag($.aB.j().eU(21),$.aB.j().gkv())
if(s.a===21&&i==="front-door"&&b){s=$.b4.j()
$.a9.j()
s.i1(B.cC,A.ao(s.c,t.N))
B.a.k($.cM,"collapse")
A.ev("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.Z.j().i_(1,1)){f.d=!0
s=$.eo.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.fX
if(s!=null)s.cL()}else if(d!=null)if(d.w){s=$.Z.j()
if(s.f.cn(1))d.w=!1}else d.w=!0}s=$.eo.j()
if(s.a!=null&&s.b>0){a=$.eo.j().a
if(a!=null&&A.pO($.bD.j(),$.a9.j(),$.aT)!==a){s=$.eo.j()
s.a=null
s.b=0}}},
x5(){var s,r,q,p,o,n,m,l,k,j=null
if($.aA.j().z||$.b5!=null||$.aB.j().e!=null)return
s=$.Z.j().gaJ()
for(r=$.aB.j().eU(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aB.b
if(m===$.aB)A.k(A.aw(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aB.b
if(r===$.aB)A.k(A.aw(""))
l=r.jG(n)
if(!(l instanceof A.iI))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.qb(A.f(v.G.document),"exitPointerLock",j,j,j,j)
$.jJ().a=new A.b(0,0,0)
r=$.aA.b
if(r===$.aA)A.k(A.aw(""))
r.dW(n.a,k)
return}},
wL(){var s=$.aB.j().e,r=s==null,q=r?null:s.gbV()
if(r||q==null)return
$.aA.j().dW(s.a.a,q)
if(s.d!==B.J){$.aA.j().cl(q)
A.pD()}A.ev("restored visitor")},
x1(){var s,r,q,p,o=$.Z.j().gaJ(),n=$.js.j().k7(o.a,o.b)
if(n.length===0)return
s=B.a.gaS(n)
$.js.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.pi.j().dV(q,s.e)
p=A.xa(r)
if(p!=null)B.a.k($.cM,"ambient-"+p)},
x4(){var s,r,q,p,o=$.Z.j().gaJ()
if(o.b<20)return
s=o.a
if(!$.oa.k(0,s))return
r=$.jL().f
r===$&&A.j()
q=r.i(0,B.c.n(s))
r=t.j.b(q)?A.aX(q,!0,t.N):B.l
p=A.xK(r,$.Z.j().b,s)
if(p!=null)$.pi.j().dV("noticed",p)},
rD(a){var s,r,q,p,o
if($.pp!=null)return
s=$.Z.j().gaJ()
r=$.Z.j().r.c
q=$.Z.j().e.b
p=A.o(q).h("aO<2>")
o=A.u_(new A.kp(s.a,1-r,new A.N(new A.aO(q,p),p.h("u(n.E)").a(new A.o6()),p.h("N<n.E>")).gq(0),$.Z.j().r.d,a))
if(o==null)return
A.rz(o)
A.pC("ending recorded")},
rz(a){var s,r,q
$.pp=a
$.rG=!0
$.jJ().a=new A.b(0,0,0)
$.b5=$.pj.j()
s=$.pj.j()
r=$.jL().w
r===$&&A.j()
q=r.i(0,a.a.b)
s.hU(a,t.j.b(q)?A.aX(q,!0,t.N):B.l)},
w3(a){var s,r,q,p,o
A:{if("open"===a){s=B.R
break A}if("chain"===a){s=B.aW
break A}if("through-door"===a){s=B.aX
break A}if("letterbox"===a){s=B.aY
break A}s=B.L
break A}r=$.aB.j().jQ(s)
if(s===B.R){q=$.a9.j().f.i(0,"front-door")
if(q!=null){q.ax=!0
p=$.fX
if(p!=null)p.cL()}}if(!(r instanceof A.iH)||s===B.L){$.aA.j().c4()
$.bl.j().aF($.M.j())
return}o=r.a.gbV()
if(o==null){A.pn()
$.aA.j().c4()
$.bl.j().aF($.M.j())
return}$.aA.j().cl(o)
A.pD()},
w6(){var s,r=$.aB.j().jC()
if(!(r instanceof A.fl)||r.b){A.pn()
$.aA.j().c4()
$.bl.j().aF($.M.j())
return}s=r.a.gbV()
if(s==null){A.pn()
$.aA.j().c4()
$.bl.j().aF($.M.j())
return}$.aA.j().cl(s)
A.pD()},
pD(){var s,r,q,p,o=$.aA.j(),n=A.f(v.G.document),m=A.e([],t.fR)
for(s=$.ju.j().dT(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.ei(p.a,B.a.gO(p.c).n(0)))}o.hT(n,m)},
w4(a){var s,r,q,p=$.aB.j().jR(a,!0,$.ju.j())
if(p==null)return
s=$.ju.j().jY(p,B.dP)
r=$.aA.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.j()
r.textContent=q},
pn(){var s,r=$.a9.j().f.i(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fX
if(s!=null)s.cL()}},
x3(){var s,r,q,p,o,n,m,l,k
for(s=$.a9.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.b4.b
if(k===$.b4)A.k(A.aw(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fE:function fE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$
_.x=null
_.y=d
_.z=e
_.Q=f
_.as=g
_.ax=_.at=null
_.ay=h
_.ch=i
_.CW=j
_.db=_.cy=_.cx=null
_.dx=k
_.dy=l
_.fr=null
_.k1=_.id=_.go=_.fy=_.fx=0
_.k2=!1},
no:function no(a){this.a=a},
np:function np(a){this.a=a},
ed:function ed(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oq:function oq(a){this.a=a},
or:function or(){},
os:function os(){},
ov:function ov(){},
ow:function ow(){},
ox:function ox(){},
oy:function oy(){},
oz:function oz(){},
oA:function oA(){},
oB:function oB(){},
oC:function oC(){},
ot:function ot(){},
ou:function ou(){},
o1:function o1(){},
o2:function o2(){},
o8:function o8(a){this.a=a},
o6:function o6(){},
qb(a,b,c,d,e,f){var s=a[b]()
return s},
qc(a,b,c){var s=null
return c.a(A.qb(a,b,s,s,s,s))},
tN(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
tM(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
rT(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
oG(a,b){var s=B.d.c3(a),r=A.rT(s,b),q=A.rT(s+1,b),p=B.d.a_(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
xa(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
xU(a){var s,r,q,p,o,n,m,l
a.H()
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
return new A.bT(B.af,p,new Uint16Array(A.a_(a.b)),new A.h3(new A.A(s.a,s.b,s.c),new A.A(s.d,s.e,s.f)))},
xn(a){var s,r,q,p,o,n,m,l=B.u.cV(a,null),k=t.f
if(!k.b(l))throw A.c(B.dg)
s=t.N
r=t.z
q=A.aP(l,s,r)
p=A.x(s,t.P)
for(o=0;o<11;++o){n=B.e3[o]
m=q.i(0,n)
if(m==null)p.l(0,n,A.x(s,r))
else if(k.b(m))p.l(0,n,A.aP(m,s,r))
else throw A.c(A.ah('text.json section "'+n+'" must be an object',null,null))}return p},
xK(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gb8(a)
s=new A.ee()
s.co((b^274953^c)>>>0)
r=s.ai(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.oP.prototype={}
J.hO.prototype={
S(a,b){return a===b},
gE(a){return A.f6(a)},
n(a){return"Instance of '"+A.ig(a)+"'"},
gM(a){return A.c3(A.ps(this))}}
J.hS.prototype={
n(a){return String(a)},
gE(a){return a?519018:218159},
gM(a){return A.c3(t.y)},
$iX:1,
$iu:1}
J.eS.prototype={
S(a,b){return null==b},
n(a){return"null"},
gE(a){return 0},
$iX:1,
$iaf:1}
J.eT.prototype={$iU:1}
J.cv.prototype={
gE(a){return 0},
gM(a){return B.fp},
n(a){return String(a)}}
J.ia.prototype={}
J.dk.prototype={}
J.c9.prototype={
n(a){var s=a[$.t4()]
if(s==null)s=a[$.eA()]
if(s==null)return this.i3(a)
return"JavaScript function for "+J.dH(s)},
$icY:1}
J.e_.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.e0.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.p.prototype={
bS(a,b){return new A.bJ(a,A.Q(a).h("@<1>").D(b).h("bJ<1,2>"))},
k(a,b){A.Q(a).c.a(b)
a.$flags&1&&A.bu(a,29)
a.push(b)},
I(a,b){var s
A.Q(a).h("n<1>").a(b)
a.$flags&1&&A.bu(a,"addAll",2)
if(Array.isArray(b)){this.im(a,b)
return}for(s=J.I(b);s.m();)a.push(s.gp())},
im(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.an(a))
for(r=0;r<s;++r)a.push(b[r])},
J(a){a.$flags&1&&A.bu(a,"clear","clear")
a.length=0},
bx(a,b,c){var s=A.Q(a)
return new A.a0(a,s.D(c).h("1(2)").a(b),s.h("@<1>").D(c).h("a0<1,2>"))},
aU(a,b){var s,r=A.bR(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.q(a[s]))
return r.join(b)},
br(a,b,c,d){var s,r,q
d.a(b)
A.Q(a).D(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.an(a))}return r},
P(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
gaS(a){if(a.length>0)return a[0]
throw A.c(A.hP())},
gO(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.hP())},
gb8(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.c(A.hP())
throw A.c(A.uf())},
a5(a,b){var s,r
A.Q(a).h("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.an(a))}return!1},
ag(a,b){var s,r
A.Q(a).h("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.an(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.Q(a)
n.h("h(1,1)?").a(b)
a.$flags&2&&A.bu(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.ws()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.a3()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.ey(b,2))
if(p>0)this.je(a,p)},
X(a){return this.Y(a,null)},
je(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cm(a,b){var s,r,q,p
a.$flags&2&&A.bu(a,"shuffle")
s=a.length
while(s>1){r=b.ai(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
c5(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.aa(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
gG(a){return a.length===0},
gL(a){return a.length!==0},
n(a){return A.oO(a,"[","]")},
gu(a){return new J.cQ(a,a.length,A.Q(a).h("cQ<1>"))},
gE(a){return A.f6(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.bu(a,"set length","change the length of")
if(b<0)throw A.c(A.aH(b,0,null,"newLength",null))
if(b>a.length)A.Q(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.c(A.og(a,b))
return a[b]},
l(a,b,c){A.Q(a).c.a(c)
a.$flags&2&&A.bu(a)
if(!(b>=0&&b<a.length))throw A.c(A.og(a,b))
a[b]=c},
dR(a,b){return new A.bO(a,b.h("bO<0>"))},
hh(a,b){var s
A.Q(a).h("u(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gM(a){return A.c3(A.Q(a))},
$iB:1,
$in:1,
$iD:1}
J.hQ.prototype={
l9(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ig(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.lb.prototype={}
J.cQ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia6:1}
J.d3.prototype={
F(a,b){var s
A.eq(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc7(b)
if(this.gc7(a)===s)return 0
if(this.gc7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc7(a){return a===0?1/a<0:a<0},
aI(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.as(""+a+".toInt()"))},
jN(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.as(""+a+".ceil()"))},
c3(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.as(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.as(""+a+".round()"))},
a_(a,b,c){if(this.F(b,c)>0)throw A.c(A.pH(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
ce(a,b){var s
if(b>20)throw A.c(A.aH(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc7(a))return"-"+s
return s},
l7(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.c(A.aH(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.as("Unexpected toString result: "+s))
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
ah(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
i5(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eK(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.eK(a,b)},
eK(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.as("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cJ(a,b){var s
if(a>0)s=this.bQ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jj(a,b){if(0>b)throw A.c(A.pH(b))
return this.bQ(a,b)},
bQ(a,b){return b>31?0:a>>>b},
gM(a){return A.c3(t.o)},
$iav:1,
$it:1,
$iaC:1}
J.eR.prototype={
gM(a){return A.c3(t.S)},
$iX:1,
$ih:1}
J.hT.prototype={
gM(a){return A.c3(t.i)},
$iX:1}
J.d4.prototype={
b5(a,b,c,d){var s=A.f7(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
Z(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aH(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.Z(a,b,0)},
B(a,b,c){return a.substring(b,A.f7(b,c,a.length))},
bC(a,b){return this.B(a,b,null)},
l8(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.uj(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.uk(p,r):o
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
kN(a,b,c){var s=b-a.length
if(s<=0)return a
return this.V(c,s)+a},
c6(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aH(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c5(a,b){return this.c6(a,b,0)},
v(a,b){return A.xQ(a,b,0)},
F(a,b){var s
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
gM(a){return A.c3(t.N)},
gq(a){return a.length},
$iX:1,
$iav:1,
$iqm:1,
$il:1}
A.cG.prototype={
gu(a){return new A.eD(J.I(this.gaM()),A.o(this).h("eD<1,2>"))},
gq(a){return J.aN(this.gaM())},
gG(a){return J.pT(this.gaM())},
gL(a){return J.ts(this.gaM())},
P(a,b){return A.o(this).y[1].a(J.jM(this.gaM(),b))},
n(a){return J.dH(this.gaM())}}
A.eD.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$ia6:1}
A.cS.prototype={
gaM(){return this.a}}
A.ft.prototype={$iB:1}
A.fr.prototype={
i(a,b){return this.$ti.y[1].a(J.aM(this.a,b))},
l(a,b,c){var s=this.$ti
J.bQ(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.tt(this.a,b)},
k(a,b){var s=this.$ti
J.h2(this.a,s.c.a(s.y[1].a(b)))},
Y(a,b){var s
this.$ti.h("h(2,2)?").a(b)
s=b==null?null:new A.n4(this,b)
J.tu(this.a,s)},
$iB:1,
$iD:1}
A.n4.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("h(1,1)")}}
A.bJ.prototype={
bS(a,b){return new A.bJ(this.a,this.$ti.h("@<1>").D(b).h("bJ<1,2>"))},
gaM(){return this.a}}
A.d5.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.hi.prototype={
gq(a){return this.a.length},
i(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.mn.prototype={}
A.B.prototype={}
A.a3.prototype={
gu(a){var s=this
return new A.ca(s,s.gq(s),A.o(s).h("ca<a3.E>"))},
gG(a){return this.gq(this)===0},
a5(a,b){var s,r,q=this
A.o(q).h("u(a3.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.P(0,r)))return!0
if(s!==q.gq(q))throw A.c(A.an(q))}return!1},
aU(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.P(0,0))
if(o!==p.gq(p))throw A.c(A.an(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.P(0,q))
if(o!==p.gq(p))throw A.c(A.an(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.P(0,q))
if(o!==p.gq(p))throw A.c(A.an(p))}return r.charCodeAt(0)==0?r:r}},
dQ(a,b){return this.i2(0,A.o(this).h("u(a3.E)").a(b))},
bx(a,b,c){var s=A.o(this)
return new A.a0(this,s.D(c).h("1(a3.E)").a(b),s.h("@<a3.E>").D(c).h("a0<1,2>"))},
b7(a,b){var s=A.o(this).h("a3.E")
if(b)s=A.S(this,s)
else{s=A.S(this,s)
s.$flags=1
s=s}return s},
b6(a){return this.b7(0,!0)},
aX(a){var s,r=this,q=A.oS(A.o(r).h("a3.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.P(0,s))
return q}}
A.fh.prototype={
giL(){var s=J.aN(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjn(){var s=J.aN(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aN(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
P(a,b){var s=this,r=s.gjn()+b
if(b<0||r>=s.giL())throw A.c(A.l8(b,s.gq(0),s,"index"))
return J.jM(s.a,r)},
b7(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.bt(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.qa(0,n):J.q9(0,n)}r=A.bR(s,m.P(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.P(n,o+q))
if(m.gq(n)<l)throw A.c(A.an(p))}return r},
b6(a){return this.b7(0,!0)}}
A.ca.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.bt(q),o=p.gq(q)
if(r.b!==o)throw A.c(A.an(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.P(q,s);++r.c
return!0},
$ia6:1}
A.cb.prototype={
gu(a){return new A.d7(J.I(this.a),this.b,A.o(this).h("d7<1,2>"))},
gq(a){return J.aN(this.a)},
gG(a){return J.pT(this.a)},
P(a,b){return this.b.$1(J.jM(this.a,b))}}
A.cV.prototype={$iB:1}
A.d7.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia6:1}
A.a0.prototype={
gq(a){return J.aN(this.a)},
P(a,b){return this.b.$1(J.jM(this.a,b))}}
A.N.prototype={
gu(a){return new A.O(J.I(this.a),this.b,this.$ti.h("O<1>"))}}
A.O.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$ia6:1}
A.bO.prototype={
gu(a){return new A.fn(J.I(this.a),this.$ti.h("fn<1>"))}}
A.fn.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$ia6:1}
A.ab.prototype={
sq(a,b){throw A.c(A.as("Cannot change the length of a fixed-length list"))},
k(a,b){A.b6(a).h("ab.E").a(b)
throw A.c(A.as("Cannot add to a fixed-length list"))}}
A.bY.prototype={
l(a,b,c){A.o(this).h("bY.E").a(c)
throw A.c(A.as("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.c(A.as("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).h("bY.E").a(b)
throw A.c(A.as("Cannot add to an unmodifiable list"))},
Y(a,b){A.o(this).h("h(bY.E,bY.E)?").a(b)
throw A.c(A.as("Cannot modify an unmodifiable list"))}}
A.eb.prototype={}
A.fc.prototype={
gq(a){return J.aN(this.a)},
P(a,b){var s=this.a,r=J.bt(s)
return r.P(s,r.gq(s)-1-b)}}
A.fU.prototype={}
A.ei.prototype={$r:"+(1,2)",$s:1}
A.ej.prototype={$r:"+(1,2,3)",$s:2}
A.fF.prototype={$r:"+(1,2,3,4)",$s:3}
A.eF.prototype={}
A.dR.prototype={
gG(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
n(a){return A.oU(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.tI()},
gR(){return new A.c0(this.kb(),A.o(this).h("c0<K<1,2>>"))},
kb(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gR(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gN(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.h("K<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.i(0,l)
r=4
return a.b=new A.K(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
b3(a,b,c,d){var s=A.x(c,d)
this.aa(0,new A.ke(this,A.o(this).D(c).D(d).h("K<1,2>(3,4)").a(b),s))
return s},
$iP:1}
A.ke.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).h("~(1,2)")}}
A.a1.prototype={
gq(a){return this.b.length},
gem(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a0(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.a0(b))return null
return this.b[this.a[b]]},
aa(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gem()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gN(){return new A.dv(this.gem(),this.$ti.h("dv<1>"))},
gan(){return new A.dv(this.b,this.$ti.h("dv<2>"))}}
A.dv.prototype={
gq(a){return this.a.length},
gG(a){return 0===this.a.length},
gL(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dw(s,s.length,this.$ti.h("dw<1>"))}}
A.dw.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia6:1}
A.eM.prototype={
bc(){var s=this,r=s.$map
if(r==null){r=new A.eU(s.$ti.h("eU<1,2>"))
A.rP(s.a,r)
s.$map=r}return r},
i(a,b){return this.bc().i(0,b)},
aa(a,b){this.$ti.h("~(1,2)").a(b)
this.bc().aa(0,b)},
gN(){var s=this.bc()
return new A.ai(s,A.o(s).h("ai<1>"))},
gan(){var s=this.bc()
return new A.aO(s,A.o(s).h("aO<2>"))},
gq(a){return this.bc().a}}
A.eG.prototype={
k(a,b){A.o(this).c.a(b)
A.tJ()}}
A.c5.prototype={
gq(a){return this.b},
gG(a){return this.b===0},
gL(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dw(s,s.length,r.$ti.h("dw<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
aX(a){return A.oT(this,this.$ti.c)}}
A.lQ.prototype={
$0(){return B.d.c3(1000*this.a.now())},
$S:16}
A.fd.prototype={}
A.mG.prototype={
am(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.f2.prototype={
n(a){return"Null check operator used on a null value"}}
A.hU.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iA.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.lE.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eK.prototype={}
A.fH.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibX:1}
A.cq.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.t3(r==null?"unknown":r)+"'"},
gM(a){var s=A.pJ(this)
return A.c3(s==null?A.b6(this):s)},
$icY:1,
gli(){return this},
$C:"$1",
$R:1,
$D:null}
A.hg.prototype={$C:"$0",$R:0}
A.hh.prototype={$C:"$2",$R:2}
A.ix.prototype={}
A.iu.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.t3(s)+"'"}}
A.dO.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dO))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.jH(this.a)^A.f6(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ig(this.a)+"'")}}
A.im.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bw.prototype={
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.ai(this,A.o(this).h("ai<1>"))},
gan(){return new A.aO(this,A.o(this).h("aO<2>"))},
gR(){return new A.Y(this,A.o(this).h("Y<1,2>"))},
a0(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.kq(a)},
kq(a){var s=this.d
if(s==null)return!1
return this.bt(s[this.bs(a)],a)>=0},
I(a,b){A.o(this).h("P<1,2>").a(b).aa(0,new A.lk(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.kr(b)},
kr(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bs(a)]
r=this.bt(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.e0(s==null?q.b=q.cE():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.e0(r==null?q.c=q.cE():r,b,c)}else q.kt(b,c)},
kt(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cE()
r=o.bs(a)
q=s[r]
if(q==null)s[r]=[o.cF(a,b)]
else{p=o.bt(q,a)
if(p>=0)q[p].b=b
else q.push(o.cF(a,b))}},
kQ(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.h("2()").a(b)
if(q.a0(a)){s=q.i(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
aE(a,b){if((b&0x3fffffff)===b)return this.ik(this.c,b)
else return this.ks(b)},
ks(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bs(a)
r=n[s]
q=o.bt(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dZ(p)
if(r.length===0)delete n[s]
return p.b},
J(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cp()}},
aa(a,b){var s,r,q=this
A.o(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.an(q))
s=s.c}},
e0(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cF(b,c)
else s.b=c},
ik(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.dZ(s)
delete a[b]
return s.b},
cp(){this.r=this.r+1&1073741823},
cF(a,b){var s=this,r=A.o(s),q=new A.ls(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cp()
return q},
dZ(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cp()},
bs(a){return J.b8(a)&1073741823},
bt(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
n(a){return A.oU(this)},
cE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ioR:1}
A.lk.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).h("~(1,2)")}}
A.ls.prototype={}
A.ai.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cw(s,s.r,s.e,this.$ti.h("cw<1>"))}}
A.cw.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.an(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia6:1}
A.aO.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aj(s,s.r,s.e,this.$ti.h("aj<1>"))}}
A.aj.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.an(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia6:1}
A.Y.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gu(a){var s=this.a
return new A.eW(s,s.r,s.e,this.$ti.h("eW<1,2>"))}}
A.eW.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.an(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.K(s.a,s.b,r.$ti.h("K<1,2>"))
r.c=s.c
return!0}},
$ia6:1}
A.eU.prototype={
bs(a){return A.xi(a)&1073741823},
bt(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.ol.prototype={
$1(a){return this.a(a)},
$S:5}
A.om.prototype={
$2(a,b){return this.a(a,b)},
$S:48}
A.on.prototype={
$1(a){return this.a(A.F(a))},
$S:17}
A.bA.prototype={
gM(a){return A.c3(this.ek())},
ek(){return A.xs(this.$r,this.bK())},
n(a){return this.eO(!1)},
eO(a){var s,r,q,p,o,n=this.iP(),m=this.bK(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.qo(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iP(){var s,r=this.$s
while($.nq.length<=r)B.a.k($.nq,null)
s=$.nq[r]
if(s==null){s=this.iA()
B.a.l($.nq,r,s)}return s},
iA(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.hR(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ao(j,k)}}
A.ef.prototype={
bK(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.ef&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gE(a){return A.cd(this.$s,this.a,this.b,B.k)}}
A.eg.prototype={
bK(){return[this.a,this.b,this.c]},
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.eg&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gE(a){var s=this
return A.cd(s.$s,s.a,s.b,s.c)}}
A.eh.prototype={
bK(){return this.a},
S(a,b){if(b==null)return!1
return b instanceof A.eh&&this.$s===b.$s&&A.vo(this.a,b.a)},
gE(a){return A.cd(this.$s,A.ut(this.a),B.k,B.k)}}
A.n5.prototype={
cH(){var s=this.b
if(s===this)throw A.c(new A.d5("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.c(A.aw(""))
return s}}
A.cx.prototype={
gM(a){return B.fi},
eV(a,b,c){return new Float32Array(a,b,c)},
$iX:1,
$icx:1}
A.e2.prototype={$ie2:1}
A.f0.prototype={
gjH(a){if(((a.$flags|0)&2)!==0)return new A.nw(a.buffer)
else return a.buffer},
iV(a,b,c,d){var s=A.aH(b,0,c,d,null)
throw A.c(s)},
e6(a,b,c,d){if(b>>>0!==b||b>c)this.iV(a,b,c,d)}}
A.nw.prototype={
eV(a,b,c){var s=A.uq(this.a,b,c)
s.$flags=3
return s}}
A.i1.prototype={
gM(a){return B.fj},
$iX:1}
A.ax.prototype={
gq(a){return a.length},
eF(a,b,c,d,e){var s,r,q=a.length
this.e6(a,b,q,"start")
this.e6(a,c,q,"end")
if(b>c)throw A.c(A.aH(b,0,c,null,null))
s=c-b
if(e<0)throw A.c(A.w(e,null))
r=d.length
if(r-e<s)throw A.c(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibc:1}
A.eZ.prototype={
i(a,b){A.co(b,a,a.length)
return a[b]},
l(a,b,c){A.fW(c)
a.$flags&2&&A.bu(a)
A.co(b,a,a.length)
a[b]=c},
hN(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bu(a,5)
this.eF(a,b,c,d,0)
return},
$iB:1,
$in:1,
$iD:1}
A.f_.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.bu(a)
A.co(b,a,a.length)
a[b]=c},
hO(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bu(a,5)
this.eF(a,b,c,d,e)
return},
$iB:1,
$in:1,
$iD:1}
A.eY.prototype={
gM(a){return B.fk},
ba(a,b,c){return new Float32Array(a.subarray(b,A.w1(b,c,a.length)))},
$iX:1,
$ikB:1}
A.i2.prototype={
gM(a){return B.fl},
$iX:1}
A.i3.prototype={
gM(a){return B.fm},
i(a,b){A.co(b,a,a.length)
return a[b]},
$iX:1}
A.i4.prototype={
gM(a){return B.fn},
i(a,b){A.co(b,a,a.length)
return a[b]},
$iX:1}
A.i5.prototype={
gM(a){return B.fo},
i(a,b){A.co(b,a,a.length)
return a[b]},
$iX:1}
A.i6.prototype={
gM(a){return B.fr},
i(a,b){A.co(b,a,a.length)
return a[b]},
$iX:1,
$ip3:1}
A.i7.prototype={
gM(a){return B.fs},
i(a,b){A.co(b,a,a.length)
return a[b]},
$iX:1}
A.da.prototype={
gM(a){return B.ft},
gq(a){return a.length},
i(a,b){A.co(b,a,a.length)
return a[b]},
$iX:1,
$ida:1}
A.f1.prototype={
gM(a){return B.fu},
gq(a){return a.length},
i(a,b){A.co(b,a,a.length)
return a[b]},
$iX:1,
$ifi:1}
A.fA.prototype={}
A.fB.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.bL.prototype={
h(a){return A.fM(v.typeUniverse,this,a)},
D(a){return A.r_(v.typeUniverse,this,a)}}
A.j1.prototype={}
A.jo.prototype={
n(a){return A.bq(this.a,null)}}
A.j_.prototype={
n(a){return this.a}}
A.fI.prototype={$ich:1}
A.n1.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:18}
A.n0.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.n2.prototype={
$0(){this.a.$0()},
$S:8}
A.n3.prototype={
$0(){this.a.$0()},
$S:8}
A.nt.prototype={
ij(a,b){if(self.setTimeout!=null)self.setTimeout(A.ey(new A.nu(this,b),0),a)
else throw A.c(A.as("`setTimeout()` not found."))}}
A.nu.prototype={
$0(){this.b.$0()},
$S:0}
A.iQ.prototype={
cP(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cr(a)
else{s=r.a
if(q.h("ba<1>").b(a))s.e5(a)
else s.bI(a)}},
cQ(a,b){var s=this.a
if(this.b)s.aK(new A.au(a,b))
else s.bE(new A.au(a,b))}}
A.nF.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.nG.prototype={
$2(a,b){this.a.$2(1,new A.eK(a,t.l.a(b)))},
$S:51}
A.oc.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:59}
A.bk.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jf(a,b){var s,r,q
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
o.d=null}q=o.jf(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.qV
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
o.a=A.qV
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.c(A.m("sync*"))}return!1},
lk(a){var s,r,q=this
if(a instanceof A.c0){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.I(a)
return 2}},
$ia6:1}
A.c0.prototype={
gu(a){return new A.bk(this.a(),this.$ti.h("bk<1>"))}}
A.au.prototype={
n(a){return A.q(this.a)},
$ia2:1,
gb9(){return this.b}}
A.kI.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.ec(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ae(p)
q=A.c4(p)
l=r
o=q
n=A.pt(l,o)
l=new A.au(l,o)
m.b.aK(l)
return}m.b.ec(s)}},
$S:0}
A.kL.prototype={
$2(a,b){var s,r,q=this
A.er(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aK(new A.au(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aK(new A.au(r,s))}},
$S:63}
A.kK.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bQ(r,k.b,a)
if(J.aa(s,0)){q=A.e([],j.h("p<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.h2(q,l)}k.c.bI(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aK(new A.au(q,o))}},
$S(){return this.d.h("af(0)")}}
A.iU.prototype={
cQ(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.m("Future already completed"))
s.bE(A.wr(a,b))},
eX(a){return this.cQ(a,null)}}
A.fo.prototype={
cP(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.m("Future already completed"))
s.cr(r.h("1/").a(a))}}
A.dr.prototype={
kF(a){if((this.c&15)!==6)return!0
return this.b.b.dM(t.iW.a(this.d),a.a,t.y,t.K)},
kp(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.l4(q,m,a.b,o,n,t.l)
else p=l.dM(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.ae(s))){if((r.c&1)!==0)throw A.c(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ad.prototype={
dN(a,b,c){var s,r,q=this.$ti
q.D(c).h("1/(2)").a(a)
s=$.a5
if(s===B.q){if(!t.ng.b(b)&&!t.mq.b(b))throw A.c(A.aD(b,"onError",u.c))}else{c.h("@<0/>").D(q.c).h("1(2)").a(a)
b=A.wK(b,s)}r=new A.ad(s,c.h("ad<0>"))
this.cq(new A.dr(r,3,a,b,q.h("@<1>").D(c).h("dr<1,2>")))
return r},
eN(a,b,c){var s,r=this.$ti
r.D(c).h("1/(2)").a(a)
s=new A.ad($.a5,c.h("ad<0>"))
this.cq(new A.dr(s,19,a,b,r.h("@<1>").D(c).h("dr<1,2>")))
return s},
ji(a){this.a=this.a&1|16
this.c=a},
bH(a){this.a=a.a&30|this.a&1
this.c=a.c},
cq(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.cq(a)
return}r.bH(s)}A.jC(null,null,r.b,t.M.a(new A.n7(r,a)))}},
eu(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.eu(a)
return}m.bH(n)}l.a=m.bO(a)
A.jC(null,null,m.b,t.M.a(new A.nc(l,m)))}},
be(){var s=t.F.a(this.c)
this.c=null
return this.bO(s)},
bO(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ec(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("ba<1>").b(a))A.na(a,r,!0)
else{s=r.be()
q.c.a(a)
r.a=8
r.c=a
A.ds(r,s)}},
bI(a){var s,r=this
r.$ti.c.a(a)
s=r.be()
r.a=8
r.c=a
A.ds(r,s)},
iz(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.be()
q.bH(a)
A.ds(q,r)},
aK(a){var s=this.be()
this.ji(a)
A.ds(this,s)},
cr(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ba<1>").b(a)){this.e5(a)
return}this.ip(a)},
ip(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.jC(null,null,s.b,t.M.a(new A.n9(s,a)))},
e5(a){A.na(this.$ti.h("ba<1>").a(a),this,!1)
return},
bE(a){this.a^=2
A.jC(null,null,this.b,t.M.a(new A.n8(this,a)))},
$iba:1}
A.n7.prototype={
$0(){A.ds(this.a,this.b)},
$S:0}
A.nc.prototype={
$0(){A.ds(this.b,this.a.a)},
$S:0}
A.nb.prototype={
$0(){A.na(this.a.a,this.b,!0)},
$S:0}
A.n9.prototype={
$0(){this.a.bI(this.b)},
$S:0}
A.n8.prototype={
$0(){this.a.aK(this.b)},
$S:0}
A.nf.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.l3(t.mY.a(q.d),t.z)}catch(p){s=A.ae(p)
r=A.c4(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.jV(q)
n=k.a
n.c=new A.au(q,o)
q=n}q.b=!0
return}if(j instanceof A.ad&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ad){m=k.b.a
l=new A.ad(m.b,m.$ti)
j.dN(new A.ng(l,m),new A.nh(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ng.prototype={
$1(a){this.a.iz(this.b)},
$S:18}
A.nh.prototype={
$2(a,b){A.er(a)
t.l.a(b)
this.a.aK(new A.au(a,b))},
$S:32}
A.ne.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dM(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ae(l)
r=A.c4(l)
q=s
p=r
if(p==null)p=A.jV(q)
o=this.a
o.c=new A.au(q,p)
o.b=!0}},
$S:0}
A.nd.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.kF(s)&&p.a.e!=null){p.c=p.a.kp(s)
p.b=!1}}catch(o){r=A.ae(o)
q=A.c4(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.jV(p)
m=l.b
m.c=new A.au(p,n)
p=m}p.b=!0}},
$S:0}
A.iR.prototype={}
A.jm.prototype={}
A.fT.prototype={$iqN:1}
A.jf.prototype={
l5(a){var s,r,q
t.M.a(a)
try{if(B.q===$.a5){a.$0()
return}A.rE(null,null,this,a,t.H)}catch(q){s=A.ae(q)
r=A.c4(q)
A.pA(A.er(s),t.l.a(r))}},
eW(a){return new A.nr(this,t.M.a(a))},
l3(a,b){b.h("0()").a(a)
if($.a5===B.q)return a.$0()
return A.rE(null,null,this,a,b)},
dM(a,b,c,d){c.h("@<0>").D(d).h("1(2)").a(a)
d.a(b)
if($.a5===B.q)return a.$1(b)
return A.wO(null,null,this,a,b,c,d)},
l4(a,b,c,d,e,f){d.h("@<0>").D(e).D(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a5===B.q)return a.$2(b,c)
return A.wN(null,null,this,a,b,c,d,e,f)},
hv(a,b,c,d){return b.h("@<0>").D(c).D(d).h("1(2,3)").a(a)}}
A.nr.prototype={
$0(){return this.a.l5(this.b)},
$S:0}
A.o7.prototype={
$0(){A.u4(this.a,this.b)},
$S:0}
A.fv.prototype={
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.dt(this,this.$ti.h("dt<1>"))},
gan(){var s=this.$ti
return A.hY(new A.dt(this,s.h("dt<1>")),new A.ni(this),s.c,s.y[1])},
a0(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iD(a)},
iD(a){var s=this.d
if(s==null)return!1
return this.aL(this.ej(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.qP(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.qP(q,b)
return r}else return this.iQ(b)},
iQ(a){var s,r,q=this.d
if(q==null)return null
s=this.ej(q,a)
r=this.aL(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.e9(s==null?m.b=A.pa():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.e9(r==null?m.c=A.pa():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.pa()
p=A.jH(b)&1073741823
o=q[p]
if(o==null){A.pb(q,p,[b,c]);++m.a
m.e=null}else{n=m.aL(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aa(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.ea()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.an(m))}},
ea(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.bR(i.a,null,!1,t.z)
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
e9(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.pb(a,b,c)},
ej(a,b){return a[A.jH(b)&1073741823]}}
A.ni.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.i(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.h("2(1)")}}
A.fx.prototype={
aL(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dt.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gL(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.fw(s,s.ea(),this.$ti.h("fw<1>"))}}
A.fw.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.an(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia6:1}
A.bz.prototype={
ep(){return new A.bz(A.o(this).h("bz<1>"))},
gu(a){var s=this,r=new A.dx(s,s.r,A.o(s).h("dx<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
v(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Y.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Y.a(r[b])!=null}else return this.iC(b)},
iC(a){var s=this.d
if(s==null)return!1
return this.aL(s[this.cw(a)],a)>=0},
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.e8(s==null?q.b=A.pc():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.e8(r==null?q.c=A.pc():r,b)}else return q.il(b)},
il(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.pc()
r=p.cw(a)
q=s[r]
if(q==null)s[r]=[p.cu(a)]
else{if(p.aL(q,a)>=0)return!1
q.push(p.cu(a))}return!0},
aE(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ev(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ev(s.c,b)
else return s.jd(b)},
jd(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cw(a)
r=n[s]
q=o.aL(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eR(p)
return!0},
J(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cD()}},
e8(a,b){A.o(this).c.a(b)
if(t.Y.a(a[b])!=null)return!1
a[b]=this.cu(b)
return!0},
ev(a,b){var s
if(a==null)return!1
s=t.Y.a(a[b])
if(s==null)return!1
this.eR(s)
delete a[b]
return!0},
cD(){this.r=this.r+1&1073741823},
cu(a){var s,r=this,q=new A.j6(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cD()
return q},
eR(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cD()},
cw(a){return J.b8(a)&1073741823},
aL(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$iqj:1}
A.j6.prototype={}
A.dx.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.an(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$ia6:1}
A.lt.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:33}
A.H.prototype={
gu(a){return new A.ca(a,this.gq(a),A.b6(a).h("ca<H.E>"))},
P(a,b){return this.i(a,b)},
gG(a){return this.gq(a)===0},
gL(a){return!this.gG(a)},
ag(a,b){var s,r
A.b6(a).h("u(H.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.i(a,r)))return!1
if(s!==this.gq(a))throw A.c(A.an(a))}return!0},
a5(a,b){var s,r
A.b6(a).h("u(H.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.i(a,r)))return!0
if(s!==this.gq(a))throw A.c(A.an(a))}return!1},
dR(a,b){return new A.bO(a,b.h("bO<0>"))},
bx(a,b,c){var s=A.b6(a)
return new A.a0(a,s.D(c).h("1(H.E)").a(b),s.h("@<H.E>").D(c).h("a0<1,2>"))},
k(a,b){var s
A.b6(a).h("H.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
bS(a,b){return new A.bJ(a,A.b6(a).h("@<H.E>").D(b).h("bJ<1,2>"))},
Y(a,b){var s,r=A.b6(a)
r.h("h(H.E,H.E)?").a(b)
s=b==null?A.xh():b
A.ir(a,0,this.gq(a)-1,s,r.h("H.E"))},
kj(a,b,c,d){var s
A.b6(a).h("H.E?").a(d)
A.f7(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.oO(a,"[","]")},
$iB:1,
$in:1,
$iD:1}
A.T.prototype={
aa(a,b){var s,r,q,p=A.o(this)
p.h("~(T.K,T.V)").a(b)
for(s=this.gN(),s=s.gu(s),p=p.h("T.V");s.m();){r=s.gp()
q=this.i(0,r)
b.$2(r,q==null?p.a(q):q)}},
gR(){return this.gN().bx(0,new A.lv(this),A.o(this).h("K<T.K,T.V>"))},
b3(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.D(c).D(d).h("K<1,2>(T.K,T.V)").a(b)
s=A.x(c,d)
for(r=this.gN(),r=r.gu(r),n=n.h("T.V");r.m();){q=r.gp()
p=this.i(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
jy(a){var s,r,q
A.o(this).h("n<K<T.K,T.V>>").a(a)
for(s=a.$ti,r=new A.d7(J.I(a.a),a.b,s.h("d7<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gN()
return s.gq(s)},
gG(a){var s=this.gN()
return s.gG(s)},
gL(a){var s=this.gN()
return s.gL(s)},
gan(){return new A.fy(this,A.o(this).h("fy<T.K,T.V>"))},
n(a){return A.oU(this)},
$iP:1}
A.lv.prototype={
$1(a){var s=this.a,r=A.o(s)
r.h("T.K").a(a)
s=s.i(0,a)
if(s==null)s=r.h("T.V").a(s)
return new A.K(a,s,r.h("K<T.K,T.V>"))},
$S(){return A.o(this.a).h("K<T.K,T.V>(T.K)")}}
A.lw.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:19}
A.fy.prototype={
gq(a){var s=this.a
return s.gq(s)},
gG(a){var s=this.a
return s.gG(s)},
gL(a){var s=this.a
return s.gL(s)},
gu(a){var s=this.a,r=s.gN()
return new A.fz(r.gu(r),s,this.$ti.h("fz<1,2>"))}}
A.fz.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.i(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia6:1}
A.fN.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.c(A.as("Cannot modify unmodifiable map"))}}
A.e1.prototype={
i(a,b){return this.a.i(0,b)},
l(a,b,c){var s=A.o(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
aa(a,b){this.a.aa(0,A.o(this).h("~(1,2)").a(b))},
gG(a){var s=this.a
return s.gG(s)},
gL(a){var s=this.a
return s.gL(s)},
gq(a){var s=this.a
return s.gq(s)},
gN(){return this.a.gN()},
n(a){return this.a.n(0)},
gan(){return this.a.gan()},
gR(){return this.a.gR()},
b3(a,b,c,d){return this.a.b3(0,A.o(this).D(c).D(d).h("K<1,2>(3,4)").a(b),c,d)},
$iP:1}
A.cD.prototype={}
A.cf.prototype={
gG(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
I(a,b){var s
for(s=J.I(A.o(this).h("n<1>").a(b));s.m();)this.k(0,s.gp())},
cW(a){var s,r,q=this.aX(0)
for(s=this.gu(this);s.m();){r=s.gp()
if(a.v(0,r))q.aE(0,r)}return q},
n(a){return A.oO(this,"{","}")},
ag(a,b){var s
A.o(this).h("u(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aU(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dH(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
a5(a,b){var s
A.o(this).h("u(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
P(a,b){var s,r
A.ii(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.l8(b,b-r,this,"index"))},
$iB:1,
$in:1,
$icA:1}
A.fG.prototype={
cW(a){var s,r,q,p=this,o=p.ep()
for(s=A.j7(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.k(0,q)}return o},
aX(a){var s=this.ep()
s.I(0,this)
return s}}
A.jp.prototype={
k(a,b){this.$ti.c.a(b)
return A.vz()}}
A.fj.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gu(a){var s=this.a
return A.j7(s,s.r,A.o(s).c)},
aX(a){return this.a.aX(0)}}
A.em.prototype={}
A.fO.prototype={}
A.j4.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.j8(b):s}},
gq(a){return this.b==null?this.c.a:this.aY().length},
gG(a){return this.gq(0)===0},
gL(a){return this.gq(0)>0},
gN(){if(this.b==null){var s=this.c
return new A.ai(s,A.o(s).h("ai<1>"))}return new A.j5(this)},
gan(){var s,r=this
if(r.b==null){s=r.c
return new A.aO(s,A.o(s).h("aO<2>"))}return A.hY(r.aY(),new A.nk(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.F(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a0(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jr().l(0,b,c)},
a0(a){if(this.b==null)return this.c.a0(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aa(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.aa(0,b)
s=o.aY()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.nH(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.an(o))}},
aY(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
jr(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.x(t.N,t.z)
r=n.aY()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.i(0,o))}if(p===0)B.a.k(r,"")
else B.a.J(r)
n.a=n.b=null
return n.c=s},
j8(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.nH(this.a[a])
return this.b[a]=s}}
A.nk.prototype={
$1(a){return this.a.i(0,A.F(a))},
$S:17}
A.j5.prototype={
gq(a){return this.a.gq(0)},
P(a,b){var s=this.a
if(s.b==null)s=s.gN().P(0,b)
else{s=s.aY()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gN()
s=s.gu(s)}else{s=s.aY()
s=new J.cQ(s,s.length,A.Q(s).h("cQ<1>"))}return s}}
A.nz.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:20}
A.ny.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:20}
A.h9.prototype={
kH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.f7(a4,a5,a2)
s=$.tg()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.ok(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.ok(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aJ("")
g=o}else g=o
g.a+=B.b.B(a3,p,q)
c=A.ac(j)
g.a+=c
p=k
continue}}throw A.c(A.ah("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.B(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.pU(a3,m,a5,n,l,r)
else{b=B.c.ah(r-1,4)+1
if(b===1)throw A.c(A.ah(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.b5(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.pU(a3,m,a5,n,l,a)
else{b=B.c.ah(a,4)
if(b===1)throw A.c(A.ah(a1,a3,a5))
if(b>1)a3=B.b.b5(a3,a5,a5,b===2?"==":"=")}return a3}}
A.k6.prototype={}
A.cT.prototype={}
A.hm.prototype={}
A.hw.prototype={}
A.eV.prototype={
n(a){var s=A.hx(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hW.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.hV.prototype={
cV(a,b){var s=A.wH(a,this.gk_().a)
return s},
b1(a,b){var s=A.vh(a,this.gk9().b,null)
return s},
gk9(){return B.dU},
gk_(){return B.dT}}
A.lm.prototype={}
A.ll.prototype={}
A.nm.prototype={
hF(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ac(92)
s.a+=o
o=A.ac(117)
s.a+=o
o=A.ac(100)
s.a+=o
o=p>>>8&15
o=A.ac(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ac(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ac(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ac(92)
s.a+=o
switch(p){case 8:o=A.ac(98)
s.a+=o
break
case 9:o=A.ac(116)
s.a+=o
break
case 10:o=A.ac(110)
s.a+=o
break
case 12:o=A.ac(102)
s.a+=o
break
case 13:o=A.ac(114)
s.a+=o
break
default:o=A.ac(117)
s.a+=o
o=A.ac(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ac(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ac(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ac(92)
s.a+=o
o=A.ac(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.B(a,r,m)},
ct(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.hW(a,null))}B.a.k(s,a)},
cf(a){var s,r,q,p,o=this
if(o.hE(a))return
o.ct(a)
try{s=o.b.$1(a)
if(!o.hE(s)){q=A.qf(a,null,o.ges())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ae(p)
q=A.qf(a,r,o.ges())
throw A.c(q)}},
hE(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hF(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ct(a)
q.lg(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.ct(a)
r=q.lh(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
lg(a){var s,r,q=this.c
q.a+="["
s=J.bt(a)
if(s.gL(a)){this.cf(s.i(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cf(s.i(a,r))}}q.a+="]"},
lh(a){var s,r,q,p,o,n,m=this,l={}
if(a.gG(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.bR(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aa(0,new A.nn(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hF(A.F(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cf(r[n])}p.a+="}"
return!0}}
A.nn.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:19}
A.nl.prototype={
ges(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iE.prototype={}
A.mM.prototype={
jW(a){return new A.nx(this.a).iE(t.J.a(a),0,null,!0)}}
A.nx.prototype={
iE(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.f7(b,c,J.aN(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.vQ(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.vP(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cz(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.vR(o)
l.b=0
throw A.c(A.ah(m,a,p+l.c))}return n},
cz(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.K(b+c,2)
r=q.cz(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cz(a,s,c,d)}return q.jZ(a,b,c,d)},
jZ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aJ(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ac(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ac(h)
e.a+=p
break
case 65:p=A.ac(h)
e.a+=p;--d
break
default:p=A.ac(h)
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
p=A.ac(a[l])
e.a+=p}else{p=A.qx(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ac(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.cU.prototype={
S(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.cU)if(this.a===b.a)s=this.b===b.b
return s},
gE(a){return A.cd(this.a,this.b,B.k,B.k)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
n(a){var s=this,r=A.tK(A.uE(s)),q=A.ho(A.uC(s)),p=A.ho(A.uy(s)),o=A.ho(A.uz(s)),n=A.ho(A.uB(s)),m=A.ho(A.uD(s)),l=A.q_(A.uA(s)),k=s.b,j=k===0?"":A.q_(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iav:1}
A.cs.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.cs&&this.a===b.a},
gE(a){return B.c.gE(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.K(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.K(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.kN(B.c.n(o%1e6),6,"0")},
$iav:1}
A.iZ.prototype={
n(a){return this.A()},
$iG:1}
A.a2.prototype={
gb9(){return A.ux(this)}}
A.h6.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hx(s)
return"Assertion failed"}}
A.ch.prototype={}
A.bI.prototype={
gcB(){return"Invalid argument"+(!this.a?"(s)":"")},
gcA(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gcB()+q+o
if(!s.a)return n
return n+s.gcA()+": "+A.hx(s.gdA())},
gdA(){return this.b}}
A.e4.prototype={
gdA(){return A.rf(this.b)},
gcB(){return"RangeError"},
gcA(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.hL.prototype={
gdA(){return A.a(this.b)},
gcB(){return"RangeError"},
gcA(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fk.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.iz.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.e9.prototype={
n(a){return"Bad state: "+this.a}}
A.hk.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hx(s)+"."}}
A.i8.prototype={
n(a){return"Out of Memory"},
gb9(){return null},
$ia2:1}
A.ff.prototype={
n(a){return"Stack Overflow"},
gb9(){return null},
$ia2:1}
A.n6.prototype={
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
k=""}return g+l+B.b.B(e,i,j)+k+"\n"+B.b.V(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g}}
A.n.prototype={
bS(a,b){return A.tC(this,A.o(this).h("n.E"),b)},
bx(a,b,c){var s=A.o(this)
return A.hY(this,s.D(c).h("1(n.E)").a(b),s.h("n.E"),c)},
dQ(a,b){var s=A.o(this)
return new A.N(this,s.h("u(n.E)").a(b),s.h("N<n.E>"))},
dR(a,b){return new A.bO(this,b.h("bO<0>"))},
br(a,b,c,d){var s,r
d.a(b)
A.o(this).D(d).h("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
ag(a,b){var s
A.o(this).h("u(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a5(a,b){var s
A.o(this).h("u(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
b7(a,b){var s=A.S(this,A.o(this).h("n.E"))
return s},
b6(a){return this.b7(0,!0)},
gq(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gG(a){return!this.gu(this).m()},
gL(a){return!this.gG(this)},
gaS(a){var s=this.gu(this)
if(!s.m())throw A.c(A.hP())
return s.gp()},
kk(a,b){var s,r
A.o(this).h("u(n.E)").a(b)
for(s=this.gu(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.c(A.hP())},
P(a,b){var s,r
A.ii(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.l8(b,b-r,this,"index"))},
n(a){return A.ug(this,"(",")")}}
A.K.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.af.prototype={
gE(a){return A.E.prototype.gE.call(this,0)},
n(a){return"null"}}
A.E.prototype={$iE:1,
S(a,b){return this===b},
gE(a){return A.f6(this)},
n(a){return"Instance of '"+A.ig(this)+"'"},
gM(a){return A.jF(this)},
toString(){return this.n(this)}}
A.jn.prototype={
n(a){return""},
$ibX:1}
A.mt.prototype={
gk8(){var s,r=this.b
if(r==null)r=$.lT.$0()
s=r-this.a
if($.pP()===1e6)return s
return s*1000}}
A.aJ.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iuS:1}
A.mL.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.F(b)
s=B.b.c5(b,"=")
if(s===-1){if(b!=="")a.l(0,A.ph(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.B(b,0,s)
q=B.b.bC(b,s+1)
p=this.a
a.l(0,A.ph(r,0,r.length,p,!0),A.ph(q,0,q.length,p,!0))}return a},
$S:27}
A.mK.prototype={
$2(a,b){throw A.c(A.ah("Illegal IPv6 address, "+a,this.a,b))},
$S:54}
A.fP.prototype={
geM(){var s,r,q,p,o=this,n=o.w
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
gE(a){var s,r=this,q=r.y
if(q===$){s=B.b.gE(r.geM())
r.y!==$&&A.t2()
r.y=s
q=s}return q},
gby(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.qF(s==null?"":s)
r.z!==$&&A.t2()
q=r.z=new A.cD(s,t.ph)}return q},
ghC(){return this.b},
gdz(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.Z(s,"v",1))return B.b.B(s,1,s.length-1)
return s},
gdG(){var s=this.d
return s==null?A.r0(this.a):s},
gdI(){var s=this.f
return s==null?"":s},
ghd(){var s=this.r
return s==null?"":s},
ghe(){return this.c!=null},
ghg(){return this.f!=null},
ghf(){return this.r!=null},
n(a){return this.geM()},
S(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gdU())if(p.c!=null===b.ghe())if(p.b===b.ghC())if(p.gdz()===b.gdz())if(p.gdG()===b.gdG())if(p.e===b.ghr()){r=p.f
q=r==null
if(!q===b.ghg()){if(q)r=""
if(r===b.gdI()){r=p.r
q=r==null
if(!q===b.ghf()){s=q?"":r
s=s===b.ghd()}}}}return s},
$iiC:1,
gdU(){return this.a},
ghr(){return this.e}}
A.mI.prototype={
ghB(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.c6(s,"?",m)
q=s.length
if(r>=0){p=A.fQ(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.iV("data","",n,n,A.fQ(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.ji.prototype={
ghe(){return this.c>0},
ghg(){return this.f<this.r},
ghf(){return this.r<this.a.length},
gdU(){var s=this.w
return s==null?this.w=this.iB():s},
iB(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.W(r.a,"http"))return"http"
if(q===5&&B.b.W(r.a,"https"))return"https"
if(s&&B.b.W(r.a,"file"))return"file"
if(q===7&&B.b.W(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
ghC(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gdz(){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gdG(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.xB(B.b.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
ghr(){return B.b.B(this.a,this.e,this.f)},
gdI(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
ghd(){var s=this.r,r=this.a
return s<r.length?B.b.bC(r,s+1):""},
gby(){if(this.f>=this.r)return B.bv
return new A.cD(A.qF(this.gdI()),t.ph)},
gE(a){var s=this.x
return s==null?this.x=B.b.gE(this.a):s},
S(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiC:1}
A.iV.prototype={}
A.lD.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.oE.prototype={
$1(a){return this.a.cP(this.b.h("0/?").a(a))},
$S:9}
A.oF.prototype={
$1(a){if(a==null)return this.a.eX(new A.lD(a===undefined))
return this.a.eX(a)},
$S:9}
A.of.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.rx(a))return a
s=this.a
a.toString
if(s.a0(a))return s.i(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aH(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dC(!0,"isUtc",t.y)
return new A.cU(r,0,!0)}if(a instanceof RegExp)throw A.c(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.b7(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.x(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bP(n),p=s.gu(n);p.m();)m.push(A.cp(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.i(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.bt(i),l=0;l<h;++l)o.push(this.$1(s.i(i,l)))
return o}return a},
$S:56}
A.j3.prototype={
ai(a){if(a<=0||a>4294967296)throw A.c(A.qq(u.w+a))
return Math.random()*a>>>0},
dE(){return Math.random()},
$ioY:1}
A.ee.prototype={
co(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.aA()
l.aA()
l.aA()
l.aA()},
aA(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.K(o-n+(q-p)+(m-r),4294967296)>>>0},
ai(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.c(A.qq(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aA()
return(p.a&s)>>>0}do{p.aA()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
dE(){var s,r=this
r.aA()
s=r.a
r.aA()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ioY:1}
A.lX.prototype={
H(){var s=this
if(B.a.a5(A.e([s.d,s.e,s.f,s.r,s.w],t.t),new A.lY()))throw A.c(B.dm)}}
A.lY.prototype={
$1(a){return A.a(a)<=0},
$S:21}
A.dd.prototype={
A(){return"QualityProfileKind."+this.b}}
A.dc.prototype={}
A.kc.prototype={}
A.kd.prototype={}
A.id.prototype={
H(){var s,r,q,p,o=this
for(s=A.R(["exposure",o.a,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.Y(s,A.o(s).h("Y<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.c(A.w("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.c(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.dP.prototype={}
A.hA.prototype={
H(){var s,r,q,p,o,n,m=this,l=null
if(!B.bf.ga1(0)||!m.b.ga1(0)||!m.r.ga1(0))throw A.c(A.w("FrameEnvironment colors must be finite",l))
s=m.c
if(isFinite(s)){r=m.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.c(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+m.d,l))
s=m.w
if(!isFinite(s)||s<0)throw A.c(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),l))
s=m.x
if(s!=null){r=s.a
if(!r.ga1(0)||r.gbu()<1e-12)A.k(A.w("DirectionalLight.direction must be finite and nonzero: "+r.n(0),l))
s=s.c
if(!isFinite(s))A.k(A.w("DirectionalLight.intensity must be >= 0: "+s,l))}for(s=m.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.w("PointLight.position must be finite: "+o.n(0),l))
o=p.d
if(!isFinite(o)||o<0)A.k(A.w("PointLight.intensity must be >= 0: "+A.q(o),l))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.w("PointLight.radius must be > 0: "+A.q(o),l))}for(s=isFinite(0),r=isFinite(1),o=isFinite(-1),q=0;!1;++q){if(s)n=r
else n=!1
if(!n)A.k(A.w("SpotLight.position must be finite: "+B.I.n(0),l))
if(s)n=o
else n=!1
if(!n)A.k(A.w("SpotLight.direction must be finite and nonzero: "+B.a3.n(0),l))}}}
A.kD.prototype={}
A.ce.prototype={
S(a,b){if(b==null)return!1
return J.dF(b)===A.jF(this)&&b instanceof A.ce&&this.a===b.a&&this.b===b.b},
gE(a){return A.cd(A.jF(this),this.a,this.b,B.k)}}
A.aY.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bf.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.bS.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.i9.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.c8.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.d1.prototype={
A(){return"HandleRejection."+this.b}}
A.kT.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.d6.prototype={
ga1(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
S(a,b){if(b==null)return!1
return b instanceof A.d6&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.cd(this.a,this.b,this.c,B.k)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.kj.prototype={}
A.ic.prototype={}
A.e8.prototype={}
A.h5.prototype={
A(){return"AlphaMode."+this.b}}
A.d9.prototype={}
A.cj.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.ck.prototype={}
A.mN.prototype={
H(){var s,r,q,p
for(s=0;s<6;++s){r=B.ap[s]
q=r.b
p=q+r.c
if(p>14)throw A.c(A.w('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bT.prototype={
H(){var s,r,q,p,o,n=this
n.a.H()
s=n.b.length
if(B.c.ah(s,14)!==0)throw A.c(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.c(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga1(0)&&s.b.ga1(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.c(A.w("MeshData.localBounds must be a valid AABB",null))}}
A.lF.prototype={
H(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.c(A.w("resource plan must contain sceneColor and present",null))
if(s.a5(0,new A.lH()))throw A.c(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.c(A.w("resource history does not match vhsOutput ownership",null))}}
A.lH.prototype={
$1(a){return A.F(a).length===0},
$S:4}
A.lO.prototype={}
A.il.prototype={
hi(a){var s=this
if(s.d)A.k(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.c(A.m("resource assembler is initialized"))
a.H()
s.a=a
s.c=1},
bl(){if(this.d)return
this.d=!0
this.a=null}}
A.dT.prototype={
A(){return"DrawMode."+this.b}}
A.hb.prototype={
A(){return"BlendMode."+this.b}}
A.bd.prototype={}
A.iv.prototype={
H(){var s=this
if(s.a<0||s.b<0)throw A.c(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.c(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.c(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hj.prototype={
A(){return"ColorEncoding."+this.b}}
A.hs.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.ij.prototype={
H(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.cW(B.fa)
if(o.a!==0)A.k(A.aD(o,r,"contains unknown pipeline features"))
if(q.a===B.ar&&p.gL(p))A.k(A.aD(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.c(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.df.prototype={
A(){return"RendererState."+this.b}}
A.kF.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.i_.prototype={
l_(a){return this.a.bk(a)}}
A.ly.prototype={
$3(a,b,c){return new A.bS(A.a(a),A.a(b),A.bE(c))},
$S:79}
A.iB.prototype={}
A.lA.prototype={
cM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.qL(d,new A.hD(c.byteLength,B.b6,B.dy))
if(d.b!==B.f)A.k(A.m(e))
s=A.f(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.c_(d)
A.bN(d,p)
if(d.b!==B.f)A.k(A.m(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a7(t.S)
for(n=a.a,m=0;m<6;++m){l=B.ap[m]
k=A.rK(l.a)
if(!o.k(0,k))continue
j=A.w5(n,k,l)
if(d.b!==B.f)A.k(A.m(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.m(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.qL(d,new A.hD(i.byteLength,B.b6,B.b5))
if(d.b!==B.f)A.k(A.m(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.f(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.m(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iB(b,h,p,d,c.length/14|0)},
kV(a){var s=this.c.i(0,a.a)
if(s==null)throw A.c(A.d0(B.an,a))
this.b.bk(a)
return s},
dK(){var s,r,q,p
for(s=this.b.b2(),r=s.$ti,s=new A.bk(s.a(),r.h("bk<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.cM(p.b))}},
gbv(){return this.b.b2().br(0,0,new A.lC(),t.S)}}
A.lB.prototype={
$3(a,b,c){return new A.aY(A.a(a),A.a(b),A.bE(c))},
$S:87}
A.lC.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:94}
A.cm.prototype={}
A.iy.prototype={
ed(){var s=this.a,r=A.p7(s,B.dB)
A.p8(s,r,0,$.t5())
return r},
la(a,b){var s,r,q,p=this,o=p.b,n=o.bk(a),m=A.S(n.b,t.nh)
B.a.l(m,0,b)
s=n.a
o.hA(a,new A.cm(s,m,!1))
o=p.c
r=a.a
q=o.i(0,r)
if(q==null){q=A.p7(p.a,s)
o.l(0,r,q)}A.p8(p.a,q,0,b)},
kY(a){var s,r=this
if(a==null){s=r.d
s===$&&A.j()
return s}r.b.bk(a)
s=r.c.i(0,a.a)
if(s==null){s=r.d
s===$&&A.j()}return s},
dK(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.ed()
for(s=i.b.b2(),r=s.$ti,s=new A.bk(s.a(),r.h("bk<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.ag(o,new A.mE()))continue
l=A.p7(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.p8(p,l,k,j)}q.l(0,n.a,l)}},
gbv(){return this.b.b2().br(0,0,new A.mD(),t.S)}}
A.mC.prototype={
$3(a,b,c){return new A.bf(A.a(a),A.a(b),A.bE(c))},
$S:98}
A.mE.prototype={
$1(a){return t.nh.a(a)==null},
$S:28}
A.mD.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:29}
A.d2.prototype={}
A.hy.prototype={
jK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.m0(A.e([],t.hJ),A.a7(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].a7(s,b)
o=s.jJ(a,!1)
if(o.b.length!==0)return new A.hz(o,B.eg)
q=o.a
n=A.Q(q)
m=new A.a0(q,n.h("l(1)").a(new A.kz()),n.h("a0<1,l>")).aX(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.a6(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.gT().a))throw A.c(A.m('RenderFeature "'+k.gab()+'" created a pass "'+i.gT().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.Y(l,new A.kA(o))
return new A.hz(o,l)}}
A.kz.prototype={
$1(a){return t.A.a(a).a},
$S:30}
A.kA.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.hh(s,new A.kx(a)),B.a.hh(s,new A.ky(b)))},
$S:31}
A.kx.prototype={
$1(a){return t.A.a(a).a===this.a.gT().a},
$S:6}
A.ky.prototype={
$1(a){return t.A.a(a).a===this.a.gT().a},
$S:6}
A.hz.prototype={}
A.dX.prototype={
A(){return"FrameQueueState."+this.b}}
A.kE.prototype={}
A.ag.prototype={
gbz(){var s=this.c,r=A.Q(s)
return new A.N(s,r.h("u(1)").a(new A.lJ()),r.h("N<1>"))},
gcg(){var s=this.c,r=A.Q(s)
return new A.N(s,r.h("u(1)").a(new A.lK()),r.h("N<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.lJ.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.C},
$S:10}
A.lK.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:10}
A.bK.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bb.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.fb.prototype={
A(){return"ResourceFormat."+this.b}}
A.c7.prototype={
A(){return"GraphStage."+this.b}}
A.aI.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.e5.prototype={
A(){return"ResourceAccess."+this.b}}
A.L.prototype={}
A.eE.prototype={}
A.lU.prototype={
ae(a){var s,r,q,p,o,n,m=this
a.H()
s=null
try{r=t.h
s=A.vb(m.a,a.c,r.a(a.d.gN().b6(0)),r.a(a.f),a.b)}catch(q){if(A.ae(q) instanceof A.fe){++m.e
throw q}else throw q}p=new A.eE(s)
r=m.b
o=a.a
n=r.i(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.f(n.b.a))
return p},
iH(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.aj(s,s.r,s.e,a.$ti.h("aj<1>")),r=this.a.a;s.m();)r.deleteProgram(A.f(s.d.b.a))}}
A.aG.prototype={
H(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.c(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a7(s)
for(q=this.d.gR(),q=q.gu(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.c(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.c(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a7(s)
for(s=this.e.gR(),s=s.gu(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.c(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.c(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.lZ.prototype={}
A.aF.prototype={
a2(){var s=this
return A.q1(B.ci,s.f,B.aa,B.ab,!0,!0,!0,!0,s.r,B.ah,B.ai,s.d,s.e,!0,!1,!1)}}
A.m0.prototype={
jJ(a,b){var s=this.js(t.Q.a(a),!1),r=this.a,q=A.Q(r)
return new A.m_(A.ao(new A.N(r,q.h("u(1)").a(new A.m4()),q.h("N<1>")),t.A),s)},
js(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.aW)
r=m.a
q=A.Q(r)
p=q.h("N<1>")
o=A.S(new A.N(r,q.h("u(1)").a(new A.m3()),p),p.h("n.E"))
m.ir(o,a,s)
m.iv(o,s)
m.iu(o,!1,s)
n=m.iy(o,s)
m.iw(o,n,s)
m.ix(o,s)
m.it(o,n,s)
m.is(o,s)
return s},
ir(a,b,c){var s,r,q,p
t.O.a(a)
t.Q.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.D.cW(b)
if(p.a!==0)B.a.k(c,new A.bb(B.dL,q.a,"missing capabilities: "+p.aU(0,", ")))}},
iv(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbz(),o=J.I(p.a),p=new A.O(o,p.b,p.$ti.h("O<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bb(B.dG,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
iu(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.C)B.a.k(c,new A.bb(B.dJ,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iy(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.a.a(b)
s=A.x(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcg(),n=J.I(o.a),o=new A.O(n,o.b,o.$ti.h("O<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.i(0,k)
if(j!=null){B.a.k(b,new A.bb(B.dF,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
iw(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbz(),p=J.I(q.a),q=new A.O(p,q.b,q.$ti.h("O<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.C)continue
n=n.a
m=b.i(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bb(B.bb,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.c5(a,m)>s)B.a.k(c,new A.bb(B.bb,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
ix(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbz(),o=J.I(p.a),p=new A.O(o,p.b,p.$ti.h("O<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.C)continue
for(l=q.gcg(),k=J.I(l.a),l=new A.O(k,l.b,l.$ti.h("O<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bb(B.dI,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
it(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbz(),o=J.I(p.a),p=new A.O(o,p.b,p.$ti.h("O<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.C)continue
l=m.a
k=b.i(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcg().kk(0,new A.m2(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bb(B.dH,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
is(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
s=t.S
r=A.x(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcg(),o=J.I(p.a),p=new A.O(o,p.b,p.$ti.h("O<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.hR(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a7(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbz(),p=J.I(s.a),s=new A.O(p,s.b,s.$ti.h("O<1>"));s.m();){o=p.gp()
if(o.b===B.C)continue
o=o.a
k=r.i(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.bR(s,!1,!1,p)
s=a.length
i=A.bR(s,!1,!1,p)
h=new A.m1(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bb(B.dK,a[q].a,"participates in a resource dependency cycle"))}}}}
A.m4.prototype={
$1(a){t.A.a(a)
return A.oX()},
$S:6}
A.m3.prototype={
$1(a){t.A.a(a)
return A.oX()},
$S:6}
A.m2.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:10}
A.m1.prototype={
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
r=A.j7(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:21}
A.m_.prototype={}
A.du.prototype={$ibe:1}
A.f8.prototype={
cO(a){var s,r,q,p,o,n,m
if(!B.y.ga1(0))A.k(A.w("Transform.translation must be finite: "+B.y.n(0),null))
s=!1
if(isFinite(0))s=isFinite(1)
if(!s)A.k(A.w("Transform.rotation must be finite: "+B.ae.n(0),null))
if(!isFinite(1))A.k(A.w(u.u,null))
s=this.a.bk(a.a).d
r=a.c.aw()
q=s.a
p=q.a
o=q.b
q=q.c
s=s.b
n=s.a
m=s.b
s=s.c
return A.dI(new A.a0(A.e([new A.A(p,o,q),new A.A(n,o,q),new A.A(p,m,q),new A.A(n,m,q),new A.A(p,o,s),new A.A(n,o,s),new A.A(p,m,s),new A.A(n,m,s)],t.k),t.pc.a(r.gbA()),t.mz))},
gdB(){return new A.c0(this.ky(),t.fJ)},
ky(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdB(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.b2(),n=o.$ti,o=new A.bk(o.a(),n.h("bk<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.H()
f=k.a(g.a)
m.ao(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.aw()
f=f.gbU()
d=A.Q(f)
r=5
return a.b=new A.du(h,g,A.dI(new A.a0(f,d.h("A(1)").a(i.gbA()),d.h("a0<1,A>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iuK:1}
A.m6.prototype={
$3(a,b,c){return new A.c8(A.a(a),A.a(b),A.bE(c))},
$S:34}
A.nY.prototype={
$1(a){var s=this.a.w.a.kV(a),r=s.b!=null,q=r?s.d:s.e
return new A.fa(s.c,r,q)},
$S:35}
A.nZ.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hq(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hq(b)
throw A.c(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.nW.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.nQ.prototype={
$0(){return null},
$S:38}
A.nV.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.nM.prototype={
$0(){return this.a.at.a},
$S:39}
A.nN.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.nX.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.nU.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.nK.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.nL.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.nR.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.nS.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.nT.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.j()
return s},
$S:2}
A.nP.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.nO.prototype={
$0(){return this.a.at.w},
$S:40}
A.ns.prototype={}
A.jc.prototype={$iuJ:1}
A.j0.prototype={$iu6:1}
A.mf.prototype={
hw(a,b){var s,r
if(this.r)A.k(A.m("resource library is disposed"))
s=this.a
a.H()
r=s.b.bj(a,b)
s.c.l(0,r.a,s.cM(a))
this.d.k(0,r)
return r},
dJ(a){var s,r=null
if(this.r)A.k(A.m("resource library is disposed"))
if(a.a.length===0)A.k(A.w("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",r))
if(a.w===0||a.x===0)A.k(A.w("MaterialDefinition uv scale must not be zero",r))
if(!isFinite(0.5))A.k(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",r))
s=this.b.a.bj(a,r)
this.e.k(0,s)
return s},
hx(a,b,c){var s
if(this.r)A.k(A.m("resource library is disposed"))
s=this.c.b.bj(new A.cm(new A.hF(c,b,1,!1,B.V,B.V,B.b8),A.bR(1,null,!1,t.nh),!1),a)
this.f.k(0,s)
return s},
bl(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.r)return
s=f.f
r=A.S(s,A.o(s).c)
q=r.length
p=f.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.aE(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.dL(k)}r=f.e
q=A.S(r,A.o(r).c)
p=q.length
o=f.b.a
l=0
for(;l<q.length;q.length===p||(0,A.r)(q),++l)o.dL(q[l])
q=f.d
p=A.S(q,A.o(q).c)
o=p.length
n=f.a
m=n.c
i=n.a.a
l=0
for(;l<p.length;p.length===o||(0,A.r)(p),++l){k=p[l]
h=m.aE(0,k.a)
if(h!=null){i.deleteVertexArray(A.f(h.c.a))
i.deleteBuffer(A.f(h.a.a))
g=h.b
if(g!=null)i.deleteBuffer(A.f(g.a))}n.b.dL(k)}s.J(0)
r.J(0)
q.J(0)
f.r=!0}}
A.ml.prototype={
gaG(){var s=this.w
return s==null?A.k(A.m("renderer is not initialized")):s},
hj(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.au)throw A.c(A.m("renderer can only be initialized once"))
a.H()
b.H()
s=m.a
if(s.b===B.M)throw A.c(A.m("renderer device is context lost"))
m.e=B.f3
try{m.r=s.ht()
r=m.b
q=A.lG(a)
p=r.a
if(p.a!=null)A.k(A.m("configuration state is already initialized"))
a.H()
p.a=a
A.lG(a)
p.d=1
r.b.hi(q)
r=A.uo()
m.w=new A.mf(A.up(s),r,A.uU(s),A.a7(t.l0),A.a7(t.fP),A.a7(t.lu))
r=new A.il()
p=new A.kS(s,r)
q=A.lG(a)
o=p.ee(q,a)
r.hi(q)
p.c=new A.ie(new A.lO(q),o)
m.x=p
m.y=new A.lU(s,A.x(t.N,t.gY))
m.as=a
A.rl(m)
m.e=B.av}catch(n){s=m.y
if(s!=null){r=s.b
s.iH(new A.aO(r,A.o(r).h("aO<2>")))
r.J(0)}s=m.x
if(s!=null)s.bl()
s=m.w
if(s!=null)s.bl()
m.w=null
m.e=B.au
throw n}return A.oN(t.H)},
ka(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bJ()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.c(A.m("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.ak)A.k(A.m("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.mx(j,0,A.dC(k.c,"count",t.S),A.Q(j).c).b7(0,!1)
k.b=B.dr
q=i
try{A.wd(a3,r,s)
k=r.gdB()
j=t.p9
h=k.$ti
k=A.S(A.hY(k,h.h("bd(n.E)").a(new A.mm()),h.h("n.E"),j),j)
p=k
J.to(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.r)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.i(0,f)
if(e==null)A.k(A.d0(B.an,h))
j=j.b
d=j.$ti
j.ao(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.d(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.K(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.U()
n=j+h}p=s.e
k=J.aN(o)
j=n
h=J.aN(o)
f=a3.w
d=f.a.gbv()
f=f.c.gbv()
c=a3.w
c.a.gbv()
c.c.gbv()
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
return new A.kF(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
jb(){var s,r,q,p=this
if(p.e!==B.bB)return
if(p.a.b===B.M)throw A.c(A.m("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.m("resource library is disposed"))
s.a.dK()
s.c.dK()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.m("GPU resource adapter is not initialized"))
s.c=new A.ie(q.a,s.ee(A.lG(r),r))
s=p.y
s.c=null
s.b.J(0)
A.rl(p)
p.e=B.av},
bJ(){var s=this.e
if(s!==B.av)throw A.c(A.m("renderer is not ready: "+s.b))
if(this.a.b===B.M){this.e=B.bB
throw A.c(A.m("renderer context lost"))}}}
A.mm.prototype={
$1(a){return t.os.a(a).b},
$S:41}
A.aZ.prototype={
F(a,b){var s,r=this
t.nL.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$iav:1}
A.aV.prototype={
F(a,b){var s
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$iav:1}
A.ap.prototype={}
A.oJ.prototype={
$2(a,b){var s=t.p
return s.a(a).a.F(0,s.a(b).a)},
$S:42}
A.oK.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.oH.prototype={
$2(a,b){var s=t.c
return s.a(a).a.F(0,s.a(b).a)},
$S:44}
A.oI.prototype={
$1(a){return t.c.a(a).b},
$S:45}
A.kf.prototype={}
A.h3.prototype={
gbU(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.A(o,n,p),new A.A(r,n,p),new A.A(o,q,p),new A.A(r,q,p),new A.A(o,n,s),new A.A(r,n,s),new A.A(o,q,s),new A.A(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.db.prototype={}
A.dY.prototype={
A(){return"FrustumTest."+this.b}}
A.kG.prototype={
l6(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b4
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.ds:B.dt}}
A.kH.prototype={
$4(a,b,c,d){var s=new A.A(a,b,c),r=new A.db(s,d),q=Math.sqrt(s.gbu())
if(q<1e-9)s=r
else{s=1/q
s=new A.db(new A.A(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.cc.prototype={
V(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.cc(h)},
hz(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.A(k,j,i):new A.A(k/h,j/h,i/h)},
hp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.k(A.m("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.q(k)+")"))
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
return new A.cc(h)},
ga1(a){return B.w.ag(this.a,new A.lx())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.lx.prototype={
$1(a){return isFinite(A.fW(a))},
$S:12}
A.lW.prototype={
n(a){return"Quat(0, 0, 0, 1)"}}
A.mF.prototype={
H(){if(!B.y.ga1(0))throw A.c(A.w("Transform.translation must be finite: "+B.y.n(0),null))
var s=!1
if(isFinite(0))s=isFinite(1)
if(!s)throw A.c(A.w("Transform.rotation must be finite: "+B.ae.n(0),null))
if(!isFinite(1))throw A.c(A.w(u.u,null))},
aw(){var s,r,q,p,o,n,m,l,k=t.n,j=A.qk(A.e([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],k)).a,i=j.length
if(0>=i)return A.d(j,0)
s=j[0]
if(1>=i)return A.d(j,1)
r=j[1]
if(2>=i)return A.d(j,2)
q=j[2]
if(4>=i)return A.d(j,4)
p=j[4]
if(5>=i)return A.d(j,5)
o=j[5]
if(6>=i)return A.d(j,6)
n=j[6]
if(8>=i)return A.d(j,8)
m=j[8]
if(9>=i)return A.d(j,9)
l=j[9]
if(10>=i)return A.d(j,10)
return A.qk(A.e([s,r,q,0,p,o,n,0,m,l,j[10],0,0,0,0,1],k))},
n(a){return"Transform("+B.y.n(0)+", "+B.ae.n(0)+", scale=1)"}}
A.A.prototype={
bm(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aN(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.A(s*r-q*p,q*o-n*r,n*p-s*o)},
gbu(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbu())},
ga1(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gac(){var s=this,r=Math.sqrt(s.gbu())
return r<1e-9?B.y:new A.A(s.a/r,s.b/r,s.c/r)},
S(a,b){if(b==null)return!1
return b instanceof A.A&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.cd(this.a,this.b,this.c,B.k)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.fq.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eC.prototype={
gab(){return this.f},
a7(a,b){B.a.k(a.a,new A.ag(this.f,B.z,A.e([new A.L(this.x,B.h),new A.L(this.y,B.j)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG(s.e,s.b,s.c,B.p,B.bu,B.bq)),q=A.c_(s.d),p=t.n,o=s.y,n=s.r===B.cf?new Float32Array(A.a_(A.e([1/o.c,0],p))):new Float32Array(A.a_(A.e([0,1/o.d],p)))
return A.e([new A.iS(new A.aF(s.f,A.e([new A.L(s.x,B.h),new A.L(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$ia4:1}
A.iS.prototype={
a8(a){return},
$iW:1,
gT(){return this.a}}
A.hc.prototype={
gab(){return"bloomComposite"},
a7(a,b){B.a.k(a.a,new A.ag("bloomComposite",B.z,A.e([B.c0,B.bV,new A.L($.oL(),B.j)],t.C)))},
a6(a){var s=this,r="bloomComposite",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.ew,B.ej)),p=A.c_(s.d)
return A.e([new A.iT(new A.aF(r,A.e([B.c0,B.bV,new A.L($.oL(),B.j)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$ia4:1}
A.iT.prototype={
a8(a){return},
$iW:1,
gT(){return this.a}}
A.hq.prototype={
gab(){return"depthPrepass"},
a7(a,b){B.a.k(a.a,new A.ag("depthPrepass",B.dD,A.e([B.bW],t.C)))},
a6(a){var s=this,r="depthPrepass",q=s.a.ae(new A.aG(r,s.b,s.c,B.bt,B.br,B.e5))
return A.e([new A.iW(new A.aF(r,A.e([B.bW],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$ia4:1}
A.iW.prototype={
a8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bM(b,a.af("sceneDepth").b)
A.b3(b,g.a.a2())
A.ec(b,B.ag,1,0,0,0)
A.cF(b,g.b.b)
A.z(b,"uVertexSnapGrid",new A.C(B.e,c.y))
A.z(b,"uAlbedo",B.F)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.r)(s),++m){l=s[m]
k=l.a.b
A.z(b,"uViewProjection",new A.C(B.o,new Float32Array(A.a_(d))))
A.z(b,"uModel",new A.C(B.o,new Float32Array(A.a_(k.c.aw().a))))
g.iI(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.f)A.k(A.m(f))
n.bindVertexArray(A.f(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.f)A.k(A.m(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.f)A.k(A.m(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
iI(a,b,c){var s,r=this.d.$1(b),q=a.a
A.bj(q,0,t._.a(this.e.$1(r.b)))
A.z(q,"uAlphaCutoff",new A.C(B.e,0))
A.z(q,"uAffineWarpStrength",new A.C(B.e,0))
s=this.a.a2()
A.b3(q,r.at?s.dS(!1):s)},
$iW:1,
gT(){return this.a}}
A.fs.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eH.prototype={
gab(){return this.f},
a7(a,b){B.a.k(a.a,new A.ag(this.f,B.z,A.e([new A.L(this.w,B.h),new A.L(this.x,B.j)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG(s.e,s.b,s.c,B.p,B.bu,B.bq)),q=A.c_(s.d),p=t.n,o=s.x,n=s.r===B.cg?new Float32Array(A.a_(A.e([1/o.c,0],p))):new Float32Array(A.a_(A.e([0,1/o.d],p)))
return A.e([new A.iX(new A.aF(s.f,A.e([new A.L(s.w,B.h),new A.L(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$ia4:1}
A.iX.prototype={
a8(a){return},
$iW:1,
gT(){return this.a}}
A.hu.prototype={
gab(){return"dofComposite"},
a7(a,b){B.a.k(a.a,new A.ag("dofComposite",B.z,A.e([new A.L(this.z,B.h),B.bZ,B.bT],t.C)))},
a6(a){var s=this,r="dofComposite",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.ev,B.e4)),p=A.c_(s.d)
return A.e([new A.iY(new A.aF(r,A.e([new A.L(s.z,B.h),B.bZ,B.bT],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$ia4:1}
A.iY.prototype={
a8(a){var s,r=this,q=a.af("dofOutput"),p=r.r.$0(),o=a.b.a
A.bM(o,q.b)
A.b3(o,r.a.a2())
A.cF(o,r.b.b)
s=t._
A.bj(o,0,s.a(r.d.$0()))
A.z(o,"uSharp",B.F)
A.bj(o,1,s.a(r.e.$0()))
A.z(o,"uBlurred",B.a2)
A.bj(o,2,s.a(r.f.$0()))
A.z(o,"uSceneDepth",B.ca)
A.z(o,"uNear",new A.C(B.e,p.f))
A.z(o,"uFar",new A.C(B.e,p.r))
A.z(o,"uFocusDistance",new A.C(B.e,r.w))
A.z(o,"uFocusRange",new A.C(B.e,r.x))
A.z(o,"uStrength",new A.C(B.e,0))
A.bN(o,r.c)
A.dn(o,3,0)},
$iW:1,
gT(){return this.a}}
A.hI.prototype={
gab(){return"grade"},
a7(a,b){B.a.k(a.a,new A.ag("grade",B.z,A.e([new A.L(this.r,B.h),B.bR],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("grade",s.b,s.c,B.p,B.eu,B.ek)),q=A.c_(s.d),p=s.r
return A.e([new A.j2(new A.aF("grade",A.e([new A.L(p,B.h),B.bR],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$ia4:1}
A.j2.prototype={
a8(a){var s=this,r=a.af(s.f.a),q=a.b.a
A.bM(q,a.af("gradeOutput").b)
A.b3(q,s.a.a2())
A.cF(q,s.b.b)
A.bj(q,0,r.b)
A.z(q,"uScene",B.F)
A.bj(q,1,t._.a(s.d.$0()))
A.z(q,"uLut",B.a2)
A.z(q,"uLutSize",new A.C(B.e,s.e))
A.z(q,"uStrength",new A.C(B.e,a.c.e.w))
A.bN(q,s.c)
A.dn(q,3,0)},
$iW:1,
gT(){return this.a}}
A.he.prototype={}
A.hd.prototype={
af(a){var s=this.a.i(0,a)
if(s==null)throw A.c(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$iuI:1}
A.f5.prototype={
gab(){return"present"},
a7(a,b){B.a.k(a.a,new A.ag("present",B.dE,A.e([new A.L(this.f,B.h)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("present",s.b,s.c,B.p,B.eC,B.l)),q=A.c_(s.d),p=s.f
return A.e([new A.jd(new A.aF("present",A.e([new A.L(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$ia4:1}
A.jd.prototype={
a8(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bM(q,null)
A.b3(q,s.a.a2())
A.cF(q,s.b.b)
A.bN(q,s.c)
A.bj(q,0,r.b)
A.dn(q,3,0)},
$iW:1,
gT(){return this.a}}
A.ih.prototype={
gab(){return"ps1Quantize"},
a7(a,b){B.a.k(a.a,new A.ag("ps1Quantize",B.z,A.e([new A.L(this.e,B.h),B.bY],t.C)))},
a6(a){var s=this,r="ps1Quantize",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.ey,B.e0)),p=A.c_(s.d),o=s.e
return A.e([new A.je(new A.aF(r,A.e([new A.L(o,B.h),B.bY],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$ia4:1}
A.je.prototype={
a8(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bM(q,a.af("ps1Output").b)
A.b3(q,s.a.a2())
A.cF(q,s.b.b)
A.bj(q,0,r.b)
A.z(q,"uScene",B.F)
A.z(q,"uQuantizationBits",new A.C(B.e,a.c.e.z))
A.z(q,"uDitherStrength",new A.C(B.e,0))
A.bN(q,s.c)
A.dn(q,3,0)},
$iW:1,
gT(){return this.a}}
A.di.prototype={}
A.ip.prototype={
gab(){return"shadow"},
a7(a,b){B.a.k(a.a,new A.ag("shadowCaster",B.dC,A.e([B.bS],t.C)))},
a6(a){var s=this,r="shadowCaster",q=s.a.ae(new A.aG(r,s.b,s.c,B.bt,B.br,B.ei))
return A.e([new A.jg(new A.aF(r,A.e([B.bS],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$ia4:1}
A.jg.prototype={
a8(a){var s,r,q,p,o=this,n=a.af("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bM(s,n.b)
A.b3(s,o.a.a2())
A.ec(s,B.ag,1,0,0,0)
return}r=A.qv(l)
o.r.$1(r)
s=m.a
A.bM(s,n.b)
A.b3(s,o.a.a2())
A.ec(s,B.ag,1,0,0,0)
A.cF(s,o.b.b)
A.z(s,"uAlbedo",B.F)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.iK(m,s[p],r)},
eG(a,b){var s,r=this.d.$1(b),q=a.a
A.bj(q,0,t._.a(this.e.$1(r.b)))
A.z(q,"uAlphaCutoff",new A.C(B.e,0))
s=this.a.a2()
A.b3(q,r.at?s.dS(!1):s)},
iK(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.du){s=b.b
n.eB(a,s.c,c)
n.eG(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bN(s,r.a)
q=r.b
p=r.c
if(q)A.p5(s,p,0)
else A.dn(s,p,0)}else if(b instanceof A.d2){s=b.a.b
n.eB(a,s.c,c)
n.eG(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bN(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.p6(s,p,o,0)
else A.p4(s,p,0,o)}else throw A.c(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dF(b).n(0),null))},
eB(a,b,c){var s=a.a
A.z(s,"uModel",new A.C(B.o,new Float32Array(A.a_(b.aw().a))))
A.z(s,"uLightViewProjection",new A.C(B.o,new Float32Array(A.a_(c.a.a))))},
$iW:1,
gT(){return this.a}}
A.od.prototype={
$1(a){return this.a.a=a},
$S:49}
A.oe.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.iq.prototype={
gab(){return"shadowedWorld"},
a7(a,b){var s=A.e([B.bX],t.C)
if(this.z)s.push(B.c_)
s.push(B.a1)
B.a.k(a.a,new A.ag("shadowedWorld",B.ba,s))},
a6(a){var s=this,r="shadowedWorld",q=s.a.ae(new A.aG(r,s.b,s.c,B.eB,B.eq,B.dZ)),p=A.e([B.bX],t.C)
if(s.z)p.push(B.c_)
p.push(B.a1)
return A.e([new A.jh(new A.aF(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$ia4:1}
A.jh.prototype={
a8(a){var s,r,q,p,o,n,m,l=this,k=null,j=a.af("sceneColor"),i=a.b,h=a.c,g=h.c,f=h.d,e=h.e,d=l.r.$0(),c=i.a
A.bM(c,j.b)
A.b3(c,l.a.a2())
A.ec(c,B.aV,1,0,0,0)
A.cF(c,l.b.b)
A.z(c,"uAlbedo",B.F)
s=t._
A.bj(c,1,s.a(l.f.$0()))
A.z(c,"uShadowMap",B.a2)
r=t.n
A.z(c,"uShadowMapTexelSize",new A.C(B.c9,new Float32Array(A.a_(A.e([0.001953125,0.001953125],r)))))
A.bj(c,2,s.a(l.x.$0()))
A.z(c,"uSsao",B.ca)
A.z(c,"uVertexSnapGrid",new A.C(B.e,e.y))
A.z(c,"uSceneColorSize",new A.C(B.c9,new Float32Array(A.a_(A.e([l.y,l.z],r)))))
A.z(c,"uViewProjection",new A.C(B.o,new Float32Array(A.a_(g.c.a))))
A.z(c,"uView",new A.C(B.o,new Float32Array(A.a_(g.a.a))))
A.z(c,"uLightViewProjection",new A.C(B.o,new Float32Array(A.a_(d.a.a))))
s=f.b
A.z(c,"uFogColor",new A.C(B.E,new Float32Array(A.a_(A.e([s.a,s.b,s.c],r)))))
A.z(c,"uFogStart",new A.C(B.e,f.c))
A.z(c,"uFogEnd",new A.C(B.e,f.d))
A.z(c,"uFogHeightFalloff",new A.C(B.e,0))
A.z(c,"uFogDensity",new A.C(B.e,0))
s=l.w.$0()==null
q=s?k:B.I
if(q==null)q=B.I
p=s?k:B.a3
if(p==null)p=B.a3
A.z(c,"uLightPosition",new A.C(B.E,new Float32Array(A.a_(A.e([q.a,q.b,q.c],r)))))
A.z(c,"uLightDirection",new A.C(B.E,new Float32Array(A.a_(A.e([p.a,p.b,p.c],r)))))
o=s?k:1
A.z(c,"uLightRange",new A.C(B.e,o==null?1:o))
o=s?k:0.3
if(o==null)o=0.3
A.z(c,"uLightInnerCos",new A.C(B.e,Math.cos(o)))
s=s?k:0.5
if(s==null)s=0.5
A.z(c,"uLightOuterCos",new A.C(B.e,Math.cos(s)))
n=f.r
A.z(c,"uAmbientColor",new A.C(B.E,new Float32Array(A.a_(A.e([n.a,n.b,n.c],r)))))
A.z(c,"uAmbientIntensity",new A.C(B.e,f.w))
for(c=h.a,s=c.length,r=e.x,m=0;m<c.length;c.length===s||(0,A.r)(c),++m)l.eH(i,c[m],r)
for(h=h.b,c=h.length,m=0;m<h.length;h.length===c||(0,A.r)(h),++m)l.eH(i,h[m],r)},
eH(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.du){s=b.b
n.eI(a,s.c)
n.eC(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bN(s,r.a)
q=r.b
p=r.c
if(q)A.p5(s,p,0)
else A.dn(s,p,0)}else if(b instanceof A.d2){s=b.a.b
n.eI(a,s.c)
n.eC(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bN(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.p6(s,p,o,0)
else A.p4(s,p,0,o)}else throw A.c(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dF(b).n(0),null))},
eC(a,b,c,d,e){var s,r=this.d.$1(b),q=a.a
A.bj(q,0,t._.a(this.e.$1(r.b)))
A.z(q,"uAlphaCutoff",new A.C(B.e,0))
A.z(q,"uOpaqueCoverage",new A.C(B.e,c===B.aj?0:1))
A.z(q,"uAffineWarpStrength",new A.C(B.e,0))
A.z(q,"uMaterialTint",new A.C(B.E,new Float32Array(A.a_(A.e([r.c,r.d,r.e],t.n)))))
A.z(q,"uEmissiveStrength",new A.C(B.e,0))
A:{s=null
if(B.aj===c){switch(d.a){case 0:s=B.cH
break
case 1:s=B.cG
break}break A}if(B.S===c||B.cF===c){s=this.a.a2()
break A}}A.b3(q,r.at?s.dS(!1):s)},
eI(a,b){var s=b.aw(),r=a.a
A.z(r,"uModel",new A.C(B.o,new Float32Array(A.a_(s.a))))
A.z(r,"uNormalMatrix",new A.C(B.o,new Float32Array(A.a_(s.hp().a))))},
$iW:1,
gT(){return this.a}}
A.it.prototype={
gab(){return"ssaoOcclusion"},
a7(a,b){B.a.k(a.a,new A.ag("ssaoOcclusion",B.b9,A.e([B.bO],t.C)))},
a6(a){var s=this,r="ssaoOcclusion",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.ex,B.dY)),p=A.c_(s.d)
return A.e([new A.jk(new A.aF(r,A.e([B.bO],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$ia4:1}
A.jk.prototype={
a8(a){var s=a.b.a
A.bM(s,a.af("ssaoRaw").b)
A.b3(s,this.a.a2())
A.ec(s,B.aU,1,1,1,1)
return},
$iW:1,
gT(){return this.a}}
A.is.prototype={
gab(){return"ssaoBlur"},
a7(a,b){B.a.k(a.a,new A.ag("ssaoBlur",B.b9,A.e([B.bU,B.bN],t.C)))},
a6(a){var s=this,r="ssaoBlur",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.er,B.en)),p=A.c_(s.d)
return A.e([new A.jj(new A.aF(r,A.e([B.bU,B.bN],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$ia4:1}
A.jj.prototype={
a8(a){var s=a.b.a
A.bM(s,a.af("ssaoBlurred").b)
A.b3(s,this.a.a2())
A.ec(s,B.aU,1,1,1,1)
return},
$iW:1,
gT(){return this.a}}
A.iG.prototype={
gab(){return"vhs"},
a7(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.ag("vhs",B.z,A.e([new A.L(this.r,B.h),B.bQ,B.bP],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("vhs",s.b,s.c,B.p,B.es,B.e1)),q=A.c_(s.d),p=s.r
return A.e([new A.jq(new A.aF("vhs",A.e([new A.L(p,B.h),B.bQ,B.bP],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$ia4:1}
A.jq.prototype={
a8(a){var s,r=this,q=a.af(r.f.a),p=a.af("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bM(n,p.b)
A.b3(n,r.a.a2())
A.cF(n,r.b.b)
A.bj(n,0,q.b)
A.z(n,"uScene",B.F)
A.bj(n,1,t._.a(r.d.$0()))
A.z(n,"uHistory",B.a2)
A.z(n,"uTime",new A.C(B.e,r.e.$0()))
A.z(n,"uChromaWeight",new A.C(B.e,o.Q))
A.z(n,"uTrackingWeight",new A.C(B.e,m))
A.z(n,"uNoiseWeight",new A.C(B.e,o.at))
A.z(n,"uHeadSwitchWeight",new A.C(B.e,o.ax))
A.z(n,"uDropoutWeight",new A.C(B.e,o.ay))
A.z(n,"uGhostWeight",new A.C(B.e,s))
A.bN(n,r.c)
A.dn(n,3,0)},
$iW:1,
gT(){return this.a}}
A.fa.prototype={}
A.iO.prototype={
gab(){return"world"},
a7(a,b){B.a.k(a.a,new A.ag("worldOpaqueTransparent",B.ba,A.e([B.a1],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("safeWorld",s.b,s.c,B.eA,B.p,B.dW))
return A.e([new A.jr(new A.aF("worldOpaqueTransparent",A.e([B.a1],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$ia4:1}
A.jr.prototype={
a8(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bM(j,a.af("sceneColor").b)
A.b3(j,n.a.a2())
A.ec(j,B.aV,1,0,0,0)
A.cF(j,n.b.b)
A.z(j,"uViewProjection",new A.C(B.o,new Float32Array(A.a_(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.I
q=t.n
A.z(j,"uLightDir",new A.C(B.E,new Float32Array(A.a_(A.e([r.a,r.b,r.c],q)))))
p=k.r
A.z(j,"uAmbientColor",new A.C(B.E,new Float32Array(A.a_(A.e([p.a,p.b,p.c],q)))))
A.z(j,"uAmbientIntensity",new A.C(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.r)(j),++o)n.eh(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.eh(m,l[o])},
eh(a,b){var s,r,q,p,o,n=this
if(b instanceof A.d2){s=b.a.b
n.eE(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bN(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.p6(s,p,o,0)
else A.p4(s,p,0,o)}else if(b instanceof A.du){s=b.b
n.eE(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bN(s,r.a)
q=r.b
p=r.c
if(q)A.p5(s,p,0)
else A.dn(s,p,0)}else throw A.c(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dF(b).n(0),null))},
eE(a,b){var s=b.aw(),r=a.a
A.z(r,"uModel",new A.C(B.o,new Float32Array(A.a_(s.a))))
A.z(r,"uNormalMatrix",new A.C(B.o,new Float32Array(A.a_(s.hp().a))))},
$iW:1,
gT(){return this.a}}
A.ka.prototype={
bB(a){var s,r,q
a.H()
s=A.a7(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.at
else q=r===0?B.ar:B.as
return new A.dc(q,s)},
hL(a){var s,r=this.bB(a).a
A:{if(B.at===r){s=B.f1
break A}if(B.as===r){s=B.f0
break A}s=B.Y
break A}return s}}
A.hE.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.eN.prototype={
A(){return"GpuBufferKind."+this.b}}
A.hG.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.hH.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.hD.prototype={}
A.hF.prototype={}
A.d_.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.eP.prototype={}
A.eO.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dh.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.fe.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cC.prototype={
A(){return"UniformType."+this.b}}
A.C.prototype={}
A.dQ.prototype={
A(){return"ClearMask."+this.b}}
A.hr.prototype={$itQ:1}
A.ie.prototype={
hq(a){var s=this.b.i(0,a)
if(s==null)throw A.c(A.m("resource is not in candidate: "+a))
return s}}
A.kS.prototype={
gp(){var s=this.c
if(s==null)throw A.c(A.m("GPU resource adapter is not initialized"))
return s},
bl(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.iG(s.b)
r.b.bl()
r.c=null
r.e=!0},
ee(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.x(a6,a7),a9=A.e([],t.l2)
try{for(p=b0.a.a,p=A.j7(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.aa(s,"sceneColor#1")){j=J.aM(a8,"sceneColor")
j.toString
J.bQ(a8,s,j)
continue}j=this.iJ(s,b1)
if(n.b!==B.f)A.k(A.m(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.w("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.i(l.createFramebuffer())
if(h==null)A.k(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.al
if(f&&!j.e)A.k(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.b7||g===B.dA
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
if(g!==a0){A.p9(n,h,d,c,a1,a2,b,a)
A.k(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.cL(new A.fR(h,d,c,a1,a2,b,a,i,j.b))
J.h2(a9,r)
J.bQ(a8,s,r)}a6=A.dS(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.Q(a6).h("fc<1>"),a6=new A.fc(a6,p),a6=new A.ca(a6,a6.gq(0),p.h("ca<a3.E>")),o=this.a,n=t.jg,p=p.h("a3.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.p9(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
iJ(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.eP(512,512,1,B.al,!0)
if(a==="sceneDepth")return new A.eP(o,n,1,B.al,!0)
s=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.eP(r,q,1,p?B.b7:B.dz,p)},
iG(a){var s,r,q,p,o,n=A.oT(t.f7.a(a).gan(),t._)
for(n=A.j7(n,n.r,A.o(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.p9(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.ek.prototype={
A(){return"_SlotState."+this.b}}
A.cJ.prototype={
sbi(a){this.c=this.$ti.h("1?").a(a)}}
A.bV.prototype={
bj(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.cJ(B.a8,n.h("cJ<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.ha
p.sbi(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
cU(a){return this.bj(a,null)},
ao(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.c(A.d0(B.bd,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.d0(B.be,a))
s=q.b
if(s===B.a9||s===B.a8)throw A.c(A.d0(B.an,a))},
bk(a){var s,r,q=this.$ti
q.c.a(a)
this.ao(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
hA(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.ao(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sbi(b)},
dL(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.c(A.d0(B.bd,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.d0(B.be,a))
r=q.b
if(r===B.a9||r===B.a8)throw A.c(A.d0(B.dM,a))
q.b=B.a9
q.sbi(null)
B.a.k(p.c,s);++p.e},
b2(){return new A.c0(this.kz(),this.$ti.h("c0<+(1,2)>"))},
kz(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$b2(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.a9||j===B.a8){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.ei(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.ha.prototype={
A(){return"BlendEquation."+this.b}}
A.cR.prototype={
A(){return"BlendFactor."+this.b}}
A.hn.prototype={
A(){return"CullFace."+this.b}}
A.hp.prototype={
A(){return"DepthFunc."+this.b}}
A.eI.prototype={
dS(a){var s=this
return A.q1(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.az.prototype={
A(){return"StateField."+this.b}}
A.mY.prototype={
k0(a){var s,r=this.a
if(r==null)return A.lu(B.eh,t.dB)
s=A.a7(t.dB)
if(r.a!==a.a)s.k(0,B.aB)
if(r.b!==a.b)s.k(0,B.aC)
if(r.c!==a.c)s.k(0,B.aD)
if(r.d!==a.d)s.k(0,B.aE)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aF)
if(r.r!==a.r)s.k(0,B.aG)
if(r.w!==a.w)s.k(0,B.aH)
if(r.x!==a.x)s.k(0,B.aI)
return s}}
A.cL.prototype={$ic6:1}
A.fS.prototype={}
A.fR.prototype={}
A.iN.prototype={
ii(a){var s=this,r=A.f(s.a.canvas)
s.c=A.al(new A.mW(s))
s.d=A.al(new A.mX(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
ht(){var s=this,r=v.G,q=s.bd(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bd(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bd(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bd(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bd(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.cp(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.cp(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.lX("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bd(a){var s=A.cp(this.a.getParameter(a))
return typeof s=="number"?B.d.aI(s):0},
$iu9:1}
A.mW.prototype={
$1(a){A.f(a).preventDefault()
this.a.b=B.M},
$S:3}
A.mX.prototype={
$1(a){A.f(a)
this.a.b=B.f},
$S:3}
A.ht.prototype={
C(){var s=this
return A.R(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.h8.prototype={
i6(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
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
hy(){var s=this.a
if(A.F(s.state)==="suspended")A.f(s.resume())},
jk(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.x
s===$&&A.j()
return s}r=B.bw.i(0,a)
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
iS(){var s,r,q,p,o,n,m,l=this.a,k=A.eq(l.sampleRate),j=B.d.aH(k*2),i=A.f(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.dE()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dF(a,b){var s,r,q,p=this,o=p.as.i(0,a)
if(o==null)return
s=p.a
r=A.f(s.createBufferSource())
r.buffer=o
A.f(r.playbackRate).value=0.94+p.at.dE()*0.12
q=A.f(s.createGain())
A.f(q.gain).value=b
A.i(r.connect(q))
s=B.bw.i(0,a)
A.i(q.connect(p.jk(s==null?"transient":s)))
r.start()},
kO(a){return this.dF(a,1)},
cL(){return}}
A.jX.prototype={
$1(a){return this.hG(t.q.a(a))},
hG(a){var s=0,r=A.bp(t.b),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bs(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ak(A.b7(A.f(A.f(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ak(A.b7(A.f(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.ak(A.b7(A.f(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ae(h)
A.f(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.bn(null,r)
case 1:return A.bm(p.at(-1),r)}})
return A.bo($async$$1,r)},
$S:52}
A.k9.prototype={
dC(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.tn().aN(q).gac()
p.d=q
p.c=p.b.aN(q).gac()
p.a=a}}
A.kC.prototype={}
A.iw.prototype={}
A.kQ.prototype={
iM(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cp(s.getParameter(34047))
if(typeof p=="number")o.c=p},
c8(a,b,c,d,e,f){return this.kA(a,b,c,d,e,f)},
kA(a,b,c,a0,a1,a2){var s=0,r=A.bp(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$c8=A.bs(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.f(A.f(j.document).createElement("img"))
m.src=a
s=7
return A.ak(A.b7(A.f(m.decode()),t.X),$async$c8)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aL(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.iM()
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
case 6:case 1:return A.bn(q,r)
case 2:return A.bm(o.at(-1),r)}})
return A.bo($async$c8,r)},
c9(a,b,c){var s=!1
return this.kB(t.h.a(a),b,!1)},
kB(b0,b1,b2){var s=0,r=A.bp(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$c9=A.bs(function(b3,b4){if(b3===1){o.push(b4)
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
return A.ak(A.b7(A.f(j.decode()),a1),$async$c9)
case 10:J.h2(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.aN(l)===0){a=A.m("texture array needs at least one layer")
throw A.c(a)}i=A.a(J.aM(l,0).width)
h=A.a(J.aM(l,0).height)
if(J.aa(i,0)||J.aa(h,0)||J.tp(l,new A.kR(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.c(a)}g=J.aN(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.a3()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jG(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.a3()
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
if(a7==null){a=A.m("could not create texture array")
throw A.c(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aL(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.aa(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.oM(d,16)+")")
throw A.c(a)}c=0
for(;;){a1=c
a3=J.aN(l)
if(typeof a1!=="number"){q=a1.ck()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aM(l,c)])
d=A.a(a.getError())
if(!J.aa(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.oM(d,16)+")")
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
if(!J.aa(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.oM(d,16)+")")
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
b=A.ae(a9)
A.f(v.G.console).error("texture array load failed: "+A.q(b))
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
case 6:case 1:return A.bn(q,r)
case 2:return A.bm(o.at(-1),r)}})
return A.bo($async$c9,r)},
eJ(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.aa(A.cp(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.c(A.dV("shader compile failed: "+A.q(A.rh(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
ap(a,b){var s=v.G,r=this.eJ(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.eJ(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.aa(A.cp(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.c(A.dV("program link failed: "+A.q(A.rh(p,"getProgramInfoLog",o,t.w))))
return o},
gho(){var s=A.cp(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aI(s):0},
dP(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.i(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.f7(0,c,B.c.i5(b.byteLength,p))*p
if(B.c.ah(o,4)!==0)A.k(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.tq(B.w.gjH(b),b.byteOffset+0*p,B.c.K(o,4)))}},
cK(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aL(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cG(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aL(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
eL(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.cK(q,a,b)
s=v.G
A.aL(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
eg(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aL(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aL(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dD(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cG(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cG(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.eL(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.eL(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cG(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.eg(a,b)
if(d)h.drawBuffers(A.e([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.c(A.dV("framebuffer incomplete"))
return new A.iw(g,n,o,m,q,p,l,e,a,b)},
hn(a,b,c,d){return this.dD(a,b,c,d,0)},
kE(a,b,c,d){return this.dD(a,b,!0,c,d)},
aV(a,b,c){return this.dD(a,b,c,!1,0)},
cI(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aL(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
av(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cK(q,b,c)
if(p!=null)n.cK(p,b,c)
n.cI(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cI(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cI(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.eg(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
kW(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aL(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aL(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aL(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
jS(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
aB(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.kR.prototype={
$1(a){A.f(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:53}
A.hK.prototype={
dO(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].ll(a)}}
A.hM.prototype={
aF(a){if(this.f)return
A.qc(a,"requestPointerLock",t.X)},
j_(a){A.f(a)
if(A.aS(a.repeat))return
if(this.b.k(0,A.F(a.code)))this.c.k(0,A.F(a.code))},
j1(a){this.b.aE(0,A.F(A.f(a).code))},
j5(a){var s=this
A.f(a)
if(!s.f)return
s.d=s.d+s.eo(a,"movementX")
s.e=s.e+s.eo(a,"movementY")},
j3(a){var s=this
A.f(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
eo(a,b){var s=A.rd(a[b])
if(s==null)s=null
return s==null?0:s}}
A.hZ.prototype={}
A.d8.prototype={
gel(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gE(B.c.ce(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gE(B.c.ce(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
S(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.d8&&A.jF(r)===A.jF(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gE(a){return this.gel()}}
A.lz.prototype={
ib(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].gel(),q)}}
A.dj.prototype={
cd(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.w.hN(s,0,m,l)
n.a=s}r=b.a4(0,a).aN(d.a4(0,a)).gac()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fg(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fg(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fg(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fg(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fg(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fg(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aW(a,b,c,d,e){return this.cd(a,b,c,d,e,1,1)}}
A.m5.prototype={
iT(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.ap(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.y()
m.w=r
q=s.ap(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
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
m.d=s.aV(m.ay,m.ch,!1)
m.e=s.aV(m.ay,m.ch,!1)
m.f=s.aV(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.y()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
iU(){var s
try{this.r=this.b.aV(384,216,!1)}catch(s){this.r=null}},
kU(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.aB(n)
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
p.aB(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.j()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aB(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.me.prototype={
cv(a,b,c){var s,r,q
try{r=this.a.ap(b,c)
return r}catch(q){s=A.ae(q)
r=A.dV(a+": "+A.q(s))
throw A.c(r)}}}
A.m7.prototype={}
A.fu.prototype={}
A.jl.prototype={}
A.ja.prototype={}
A.j8.prototype={}
A.m8.prototype={
ic(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([new A.d8(0,0,1,0),new A.d8(1,0,1,0),new A.d8(2,0,1,0)],t.mm),e=t.S
e=new A.lz(f,A.x(e,e))
e.ib(f)
h.dw=e
h.fV=1.9
h.dk=h.aR/h.aQ
r=J.hR(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fu()
t.cu.a(r)
f=h.aq
e=f.ap("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.ap(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.ap(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.ap(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.ap(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.a9!==$&&A.y()
h.a9=new A.me(f,e,p,o,n,m)
h.b=t.d4.a(new A.m9(h))
h.eA()
h.ez()
o=h.ak
p=A.i(o.getUniformLocation(m,"uTex"))
h.fm!==$&&A.y()
h.fm=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.fn!==$&&A.y()
h.fn=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.f2!==$&&A.y()
h.f2=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.f1!==$&&A.y()
h.f1=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.f3!==$&&A.y()
h.f3=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.f4!==$&&A.y()
h.f4=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.f5!==$&&A.y()
h.f5=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.f6!==$&&A.y()
h.f6=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.f7!==$&&A.y()
h.f7=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.f8!==$&&A.y()
h.f8=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.f9!==$&&A.y()
h.f9=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.fa!==$&&A.y()
h.fa=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.fb!==$&&A.y()
h.fb=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.fc!==$&&A.y()
h.fc=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.fd!==$&&A.y()
h.fd=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.fe!==$&&A.y()
h.fe=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.ff!==$&&A.y()
h.ff=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fg!==$&&A.y()
h.fg=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.fh!==$&&A.y()
h.fh=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.fi!==$&&A.y()
h.fi=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.fj!==$&&A.y()
h.fj=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.fk!==$&&A.y()
h.fk=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.fl!==$&&A.y()
h.fl=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.fo!==$&&A.y()
h.fo=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.fp!==$&&A.y()
h.fp=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.dm!==$&&A.y()
h.dm=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.dn!==$&&A.y()
h.dn=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.dq!==$&&A.y()
h.dq=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.dr!==$&&A.y()
h.dr=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.ds!==$&&A.y()
h.ds=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.dt!==$&&A.y()
h.dt=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.du!==$&&A.y()
h.du=n
n=A.aS(A.f(A.f(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bo!==$&&A.y()
h.bo=n
h.shl(16777215)
n=new A.mo(o,f,A.e([],t.aA),A.e([],t.df),A.e([],t.U),A.e([],t.kS))
m=n.c=f.ap("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.dv!==$&&A.y()
h.dv=n
n=new A.m5(f,o)
n.iT()
n.iU()
h.bX!==$&&A.y()
h.bX=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.cX!==$&&A.y()
h.cX=m
p=A.i(n.createBuffer())
p.toString
h.cY!==$&&A.y()
h.cY=p
n=A.i(n.createBuffer())
n.toString
h.cZ!==$&&A.y()
h.cZ=n
e=A.i(o.createVertexArray())
e.toString
h.d_!==$&&A.y()
h.d_=e
l=A.i(o.createVertexArray())
l.toString
h.d0!==$&&A.y()
h.d0=l
k=A.i(o.createVertexArray())
k.toString
h.d1!==$&&A.y()
h.d1=k
j=A.i(o.createVertexArray())
j.toString
h.d2!==$&&A.y()
h.d2=j
o.bindVertexArray(e)
h.cs(m)
o.bindVertexArray(l)
h.cs(p)
o.bindVertexArray(k)
h.cs(n)
o.bindVertexArray(null)
try{h.c1=f.hn(384,216,!0,!0)}catch(i){h.c1=null}s=4<f.gho()?4:f.gho()
e=s
if(typeof e!=="number")return e.a3()
if(e>1)try{h.bn=f.kE(h.aQ,h.aR,!0,s)}catch(i){h.bn=null}try{h.aP=f.hn(h.aQ,h.aR,!0,!0)}catch(i){h.bn=h.aP=null}if(h.aP!=null)try{h.bZ=f.aV(h.gbG(),h.gbF(),!1)
h.c_=f.aV(h.gbG(),h.gbF(),!1)
h.c0=f.aV(h.aQ,h.aR,!1)}catch(i){h.c0=h.c_=h.bZ=null}},
gbG(){var s=B.c.K(this.aQ,4)
return s<1?1:s},
gbF(){var s=B.c.K(this.aR,4)
return s<1?1:s},
al(a){return this.kC(t.G.a(a))},
kC(a){var s=0,r=A.bp(t.H),q=this,p,o,n,m,l,k,j
var $async$al=A.bs(function(b,c){if(b===1)return A.bm(c,r)
for(;;)switch(s){case 0:p=new A.Y(a,A.o(a).h("Y<1,2>")).gu(0),o=q.aq
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.bs.i(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ak(o.c8(k,l,!1,!1,!1,m==="grime"),$async$al)
case 4:if(c!=null)q.ei(m,l)
s=2
break
case 3:p=t.lS
j=A.S(new A.bO(new A.a0(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.ma(a)),t.dD),p),p.h("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ak(o.c9(j,12,!1),$async$al)
case 7:q.bW=c
case 6:return A.bn(null,r)}})
return A.bo($async$al,r)},
b4(){var s=0,r=A.bp(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b4=A.bs(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.x(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ak(A.b7(A.f(A.f(g.window).fetch("shaders/"+A.q(m))),f),$async$b4)
case 13:l=a3
if(!A.aS(l.ok)){i=A.dV("HTTP "+A.q(A.pK(l,"status",t.S)))
throw A.c(i)}a=J
a0=n
a1=m
s=14
return A.ak(A.b7(A.f(l.text()),i),$async$b4)
case 14:a.bQ(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ae(c)
i=A.dV("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.c(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.ja(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ae(b)
A.f(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.bn(null,r)
case 1:return A.bm(p.at(-1),r)}})
return A.bo($async$b4,r)},
ja(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.a9
q===$&&A.j()
p=a.i(0,"world.vert")
p.toString
o=a.i(0,"world.frag")
o.toString
n=q.cv("world.vert/world.frag",p,o)
o=a.i(0,h)
o.toString
p=a.i(0,"post.frag")
p.toString
m=q.cv("post.vert/post.frag",o,p)
p=a.i(0,h)
p.toString
o=a.i(0,"blur.frag")
o.toString
l=q.cv("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.eA()
i.ez()
q=i.eZ
q=A.S(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.bs.i(0,s)
o.toString
i.ei(s,o)}A.f(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ae(j)
A.f(v.G.console).error("shader recompile failed: "+A.q(r))}},
ez(){var s=this,r=s.ak,q=s.a9
q===$&&A.j()
s.fW=A.i(r.getUniformLocation(q.c,"uTex"))
s.fX=A.i(r.getUniformLocation(q.c,"uTime"))
s.fY=A.i(r.getUniformLocation(q.c,"uFlash"))
s.fZ=A.i(r.getUniformLocation(q.c,"uVignette"))
s.h_=A.i(r.getUniformLocation(q.c,"uGrain"))
s.h0=A.i(r.getUniformLocation(q.c,"uDesat"))
s.h1=A.i(r.getUniformLocation(q.c,"uBloom"))
s.h2=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.h9=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.hc=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.h5=A.i(r.getUniformLocation(q.c,"uDepth"))
s.h6=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.f_=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.f0=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.h7=A.i(r.getUniformLocation(q.c,"uNoise"))
s.h8=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.ha=A.i(r.getUniformLocation(q.c,"uLut"))
s.hb=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.h3=A.i(r.getUniformLocation(q.d,"uTex"))
s.dl=A.i(r.getUniformLocation(q.d,"uDir"))
s.h4=A.i(r.getUniformLocation(q.c,"uBlur"))},
ei(a,b){var s,r,q,p=this
p.eZ.k(0,a)
switch(a){case"bluenoise":s=p.a9
s===$&&A.j()
s=s.c
r=p.h7
r===$&&A.j()
q=p.h8
q===$&&A.j()
p.bf(s,r,q,b)
break
case"lut-gothic":s=p.a9
s===$&&A.j()
s=s.c
r=p.ha
r===$&&A.j()
q=p.hb
q===$&&A.j()
p.bf(s,r,q,b)
break
case"grime":s=p.a9
s===$&&A.j()
s=s.b
r=p.RG
r===$&&A.j()
q=p.rx
q===$&&A.j()
p.bf(s,r,q,b)
break
case"glass":s=p.a9
s===$&&A.j()
s=s.b
r=p.x2
r===$&&A.j()
q=p.xr
q===$&&A.j()
p.bf(s,r,q,b)
break
case"soft":s=p.a9
s===$&&A.j()
s=s.b
r=p.fI
r===$&&A.j()
q=p.fJ
q===$&&A.j()
p.bf(s,r,q,b)
break}},
bf(a,b,c,d){var s=this.ak
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shl(a){var s=A.o9(a)
this.fA=s.a
this.fB=s.b
this.fC=s.c},
bR(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.ah(a1,14)!==0)throw A.c(A.w("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.ak
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
b.e3(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.kf++
b.d6.l(0,a1,new A.jl(e,d,i,s,s,a3))
return a1},
k6(a){var s,r,q,p=this,o=p.d6.i(0,a)
if(o==null)return
p.eq()
s=p.fG
r=p.fH
if(s!==r)p.eD(r)
s=p.ak
r=p.dy
r===$&&A.j()
s.uniform1i(r,0)
r=p.dj
r===$&&A.j()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bp},
ko(a){var s,r=this.d6.aE(0,a)
if(r==null)return
s=this.ak
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
eq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.d7)return
c.d7=!0
s=c.ak
r=c.a9
r===$&&A.j()
s.useProgram(r.b)
r=c.as
r===$&&A.j()
q=c.fE
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.j()
r=c.da
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.j()
q=c.dc
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.j()
r=c.dd
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.j()
s.uniform1f(r,c.fV)
r=c.CW
r===$&&A.j()
s.uniform1f(r,c.dk)
r=c.cx
r===$&&A.j()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.j()
s.uniform1f(r,60)
r=c.db
r===$&&A.j()
q=c.fq?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.j()
s.uniform3f(q,c.de/255*0.25,c.df/255*0.25,c.dg/255*0.25)
q=c.fx
q===$&&A.j()
r=c.fz
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.j()
s.uniform3f(r,c.fA,c.fB,c.fC)
r=c.go
r===$&&A.j()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.j()
s.uniform1f(r,14)
r=c.k1
r===$&&A.j()
s.uniform1f(r,c.fD)
r=c.k2
r===$&&A.j()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.j()
s.uniform1i(r,c.d9.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.d9
l=m.length
if(n<l){if(!(n<l))return A.d(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],0)
continue}j=A.o9(k.b)
m=c.bo
m===$&&A.j()
i=m?1:1+(A.oG(c.dh*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.d(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.d(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.d(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bo
r===$&&A.j()
q=r?1:1+(A.oG(c.dh*2.5,40503)*2-1)*0
c.kc=q
p=c.p3
p===$&&A.j()
s.uniform1f(p,q)
q=c.p4
q===$&&A.j()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.j()
p=c.ft?1:0
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
q=c.fs
h=q?384:0
g=q?216:0
q=c.d3
p=q.a
if(p===B.ay){f=B.d.a_(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.fK
r===$&&A.j()
s.uniform2f(r,h,g)
r=c.dv
r===$&&A.j()
q=c.fO
q===$&&A.j()
s.uniform1f(q,0)
q=c.fP
q===$&&A.j()
s.uniform3f(q,0.0015,0.005,0)
q=c.fL
q===$&&A.j()
if(q!=null)r.ci(0)
q=c.fM
q===$&&A.j()
if(q!=null)r.ci(1)
q=c.fN
q===$&&A.j()
if(q!=null)r.ci(2)
r.cj(0)
r.cj(1)
r.cj(2)
r=c.fQ
r===$&&A.j()
if(c.bW==null)q=0
else{c.dw===$&&A.j()
q=3}s.uniform1i(r,q)
if(c.bW!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.bW)
r=c.di
r===$&&A.j()
s.uniform1i(r,12)}r=c.fU
q=c.fT
p=c.fS
o=c.fR
n=0
for(;;){m=c.dw
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
if(m!=null)s.uniform1i(m,d.d);++n}c.eD(c.fH)
r=c.dy
r===$&&A.j()
s.uniform1i(r,0)
r=c.dj
r===$&&A.j()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eD(a){var s
this.fG=a
s=this.dx
s===$&&A.j()
this.ak.uniformMatrix4fv(s,!1,a.a)},
au(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.aQ=a
j.aR=b
j.dk=b/a
s=j.bX
s===$&&A.j()
r=B.c.K(a,2)
s.ay=r
q=B.c.K(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.av(p,r,q)
r=s.e
if(r!=null)s.b.av(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.av(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.av(r,384,216)
o=j.aP
n=j.bn
m=j.bZ
l=j.c_
k=j.c0
if(o!=null)j.aq.av(o,a,b)
if(n!=null)j.aq.av(n,a,b)
if(m!=null)j.aq.av(m,j.gbG(),j.gbF())
if(l!=null)j.aq.av(l,j.gbG(),j.gbF())
if(k!=null)j.aq.av(k,a,b)},
jm(a){var s,r,q,p,o,n,m
for(s=this.fv,r=this.fu,q=1;q<a;++q){if(!(q<800))return A.d(s,q)
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
jl(a){var s,r,q,p,o,n,m,l
for(s=this.fw,r=this.d8,q=1;q<a;++q){if(!(q<4000))return A.d(s,q)
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
kl(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.d3=b4
s=b2.bq
r=0
if(s>0){for(s=b2.fw,q=0;p=b2.bq,q<p;++q)B.a.l(s,q,q)
b2.jl(p)
for(p=b2.d8,o=b2.d4,n=0;n<b2.bq;++n){if(!(n<4000))return A.d(s,n)
m=s[n]
if(!(m<p.length))return A.d(p,m)
l=p[m]
r=A.ry(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.d8,p=b2.d4,q=0;q<b2.bq;++q){if(!(q<s.length))return A.d(s,q)
l=s[q]
r=A.ry(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bq=0
for(s=b2.fv,q=0;p=b2.c2,q<p;++q)B.a.l(s,q,q)
b2.jm(p)
for(p=b2.kd,o=b2.fu,k=0,n=0;n<b2.c2;++n){if(!(n<800))return A.d(s,n)
m=s[n]
if(!(m<o.length))return A.d(o,m)
j=o[m]
i=A.o9(0)
m=j.b
h=b2.dd
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.dc
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
e=b2.da
k=A.rB(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.c2=0
s=b2.aq
o=b2.cX
o===$&&A.j()
s.dP(o,b2.d4,r)
o=b2.cY
o===$&&A.j()
s.dP(o,p,k)
b2.eq()
p=b2.ak
o=b2.dy
o===$&&A.j()
p.uniform1i(o,0)
o=b2.d_
o===$&&A.j()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(r,14));++b2.bp
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.d0
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(k,14));++b2.bp
m=b2.d5
if(m>0){h=b2.cZ
h===$&&A.j()
s.dP(h,b2.ke,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.d1
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.d5/14|0);++b2.bp}m=b2.c1
if(m!=null){a7=b2.aP
if(a7!=null)s.kW(m,a7)}a8=b2.aP
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.d2
m===$&&A.j()
p.bindVertexArray(m)
a3=b2.bZ
a4=b2.c_
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.a9
g===$&&A.j()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.h3
g===$&&A.j()
p.uniform1i(g,0)
s.aB(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.dl
g===$&&A.j()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aB(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.dl,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.c0
if(b2.bY>0&&a6!=null){s.aB(a6)
g=b2.a9
g===$&&A.j()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dm
g===$&&A.j()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.dn
g===$&&A.j()
p.uniform1i(g,7)
g=b2.dq
g===$&&A.j()
p.uniform1f(g,0.03171953255425709)
g=b2.dr
g===$&&A.j()
p.uniform1f(g,1)
g=b2.ds
g===$&&A.j()
p.uniform1f(g,0.5)
g=b2.dt
g===$&&A.j()
p.uniform1f(g,b2.bY)
g=b2.du
g===$&&A.j()
p.uniform2f(g,1/b2.aQ,1/b2.aR)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.bX
g===$&&A.j()
b0=g.kU(a8,0.5)
s.aB(null)
s=b2.a9
s===$&&A.j()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.h1
g===$&&A.j()
p.uniform1i(g,1)
g=b2.h2
g===$&&A.j()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.h4
s===$&&A.j()
b2.bo===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.h5
s===$&&A.j()
p.uniform1i(s,7)
s=b2.h6
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.f_
s===$&&A.j()
p.uniform1i(s,11)
s=b2.f0
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.bY>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.fW
h===$&&A.j()
p.uniform1i(h,0)
h=b2.dh+=b3;++b2.fF
s=b2.fX
s===$&&A.j()
p.uniform1f(s,h)
h=b2.h9
h===$&&A.j()
s=b2.fF
p.uniform2f(h,B.c.ah(s*13,64),B.c.ah(s*29,64))
s=b2.fY
s===$&&A.j()
p.uniform1f(s,0)
s=b2.fZ
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h_
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h0
s===$&&A.j()
p.uniform1f(s,0)
s=b2.d3
if(s.a===B.O)b1=0*(1-s.b/1)
else b1=0
s=b2.hc
s===$&&A.j()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.m9.prototype={
$0(){var s=this.a.a9
s===$&&A.j()
return s.b},
$S:55}
A.ma.prototype={
$1(a){return this.a.i(0,A.F(a))},
$S:22}
A.n_.prototype={
gjw(){var s=this.b
s===$&&A.j()
return s},
eA(){var s,r,q,p,o,n,m=this,l=m.jx(),k=m.a
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
B.a.J(s)
r=m.ok
B.a.J(r)
q=m.p1
B.a.J(q)
p=m.p2
B.a.J(p)
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
m.fI=A.i(k.getUniformLocation(l,"uSoft"))
m.fJ=A.i(k.getUniformLocation(l,"uSoftOn"))
m.fK=A.i(k.getUniformLocation(l,"uInternal"))
m.fL=A.i(k.getUniformLocation(l,"uLightProj0"))
m.fM=A.i(k.getUniformLocation(l,"uLightProj1"))
m.fN=A.i(k.getUniformLocation(l,"uLightProj2"))
m.kg=A.i(k.getUniformLocation(l,"uShadow0"))
m.kh=A.i(k.getUniformLocation(l,"uShadow1"))
m.ki=A.i(k.getUniformLocation(l,"uShadow2"))
m.fO=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.di=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dj=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.fP=A.i(k.getUniformLocation(l,"uShadowBias"))
m.fQ=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.fR
B.a.J(s)
r=m.fS
B.a.J(r)
q=m.fT
B.a.J(q)
p=m.fU
B.a.J(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.di,12)},
cs(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.e3(56)},
e3(a){var s=this,r=s.c
r===$&&A.j()
s.bg(r,3,a,0)
r=s.f
r===$&&A.j()
s.bg(r,3,a,12)
r=s.d
r===$&&A.j()
s.bg(r,4,a,24)
r=s.e
r===$&&A.j()
s.bg(r,1,a,40)
r=s.r
r===$&&A.j()
s.bg(r,3,a,44)},
bg(a,b,c,d){var s=this.a
A.aL(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
jx(){return this.gjw().$0()}}
A.mo.prototype={
ci(a){return null},
cj(a){return null}}
A.b.prototype={
U(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
a4(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
V(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
bm(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aN(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gac(){var s=this,r=s.gq(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.k8.prototype={
lf(a){var s,r,q,p,o,n=B.u.b1(a.C(),null)
this.a.eY(n)
s=A.f(A.f(v.G.window).localStorage)
r=A.bE(s.getItem("quarantine.save.active"))
q=A.bE(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
kR(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.f(A.f(v.G.window).localStorage)
r=A.bE(s.getItem("quarantine.save.active"))
q=A.bE(s.getItem("quarantine.save.previous"))
p=this.ef(r,a)
if(p!=null)return new A.dg(p,null)
o=this.ef(q,a)
if(o!=null)return new A.dg(o,"recovered previous save")
if(r==null)return B.f7
return B.f6}catch(n){return B.f5}},
ef(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.eY(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ae(q) instanceof A.J)return null
else throw q}}}
A.hv.prototype={
i7(a,b,c,d,e){if(this.a.length===0)throw A.c(B.dh)
if(this.b<0)throw A.c(B.d3)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ao(q,t.i)
s=t.z
return A.dS(A.R(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bv.prototype={
A(){return"EndingKind."+this.b}}
A.kp.prototype={}
A.dU.prototype={
C(){var s=t.N
return A.R(["kind",this.a.b],s,s)}}
A.ks.prototype={
$1(a){return t.no.a(a).b===this.a.i(0,"kind")},
$S:57}
A.ib.prototype={
C(){var s,r=this,q=t.N,p=A.x(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.R(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
ku(a){var s,r=this.a
if(a.e.i(0,r)==null)return!1
s=this.b.a4(0,new A.b(0,1.3499999999999999,0))
return!new A.hf(s,s.U(0,new A.b(0,1.2000000000000002,0))).hk(a,r)}}
A.lP.prototype={
C(){return A.jx(this.a)}}
A.e6.prototype={
C(){return A.R(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.mk.prototype={
eY(a){var s,r,q,p,o,n,m,l=B.u.cV(a,null),k=t.f
if(!k.b(l))throw A.c(B.dl)
s=t.N
r=t.z
q=A.aP(l,s,r)
p=q.i(0,"version")
if(A.aU(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ah("unsupported save version "+A.q(p),null,null))
n=q.i(0,"run")
m=q.i(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.d6)
k=A.aP(n,s,r)
return A.qt(A.aP(m,s,r),k,2)}}
A.dg.prototype={}
A.cZ.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hB.prototype={}
A.kN.prototype={}
A.kM.prototype={
gaJ(){var s=this.d
return new A.kN(s.a,s.b)},
gdH(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.R(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.R(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.R(["entryCount",m.e.b.a],k,t.S)
p=A.q8(m.c).C()
o=m.r
n=o.c
return new A.lP(A.jx(A.R(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.R(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
jA(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.c(A.aD(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bN(B.du)}if(n<a)this.bN(B.dv)},
i_(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cn(a)&&s.hZ(b)},
kT(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cb)r.c=Math.min(1,r.c+0.1)},
hY(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.tN(j,A.ao(i.d,h).length)
if(a===B.c5)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.Q(r)
A.tM(j,new A.N(r,q.h("u(1)").a(new A.kO(k)),q.h("N<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.e_,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aH(j.a/1*3)
B.a.k(r.r,new A.e7(q.a,a,b))
m=r.a
A.tY(m,q.a,n,k.b,A.ao(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.hP(B.ed)
s.r.jU(o,c)
l=B.d.aH(j.b/1*6)
if(l>0)r.cn(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aO(i,A.o(i).h("aO<2>")).a5(0,new A.kP())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bN(B.dx)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bN(B.dw)},
bN(a){var s=this;++s.y
B.a.k(s.w,new A.hB())
B.a.k(s.x,A.tO(A.wb(a),s.b,s.y-1))}}
A.kO.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.mp().hV(this.a.c,a.a)},
$S:58}
A.kP.prototype={
$1(a){return t.L.a(a).e},
$S:23}
A.jY.prototype={
lb(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.c(A.m("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.c(A.m("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.c(A.m("authored/runtime room or portal count mismatch"))
for(r=t.hE,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
n=o.a
m=q.i(0,n)
if(m==null)throw A.c(A.m("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" origin.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" origin.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" origin.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" size.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" size.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" size.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.c(A.m("window count mismatch for "+n))
for(n=A.Q(j),i=n.h("u(1)"),n=n.h("N<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.dZ(new A.N(j,i.a(new A.k2(e)),n),r)
if(d==null)throw A.c(A.m("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.k(A.m(c+" offset mismatch: "+A.q(h)+" != "+A.q(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.k(A.m(c+a+A.q(h)+" != "+A.q(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.k(A.m(c+a0+A.q(h)+" != "+A.q(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
q=o.a
m=r.i(0,q)
if(m==null)throw A.c(A.m("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.c(A.m("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a+A.q(n)+" != "+A.q(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a0+A.q(n)+" != "+A.q(l)))
if(o.f!=m.at)throw A.c(A.m("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gb8(a1).b!==B.a.gb8(s).b)throw A.c(A.m("stair manifest mismatch"))}}
A.jZ.prototype={
$1(a){return A.tz(a,this.a)},
$S:60}
A.k_.prototype={
$1(a){var s=this.a,r=A.jB(a,"portal"),q=A.cO(r,"id"),p=A.cO(r,"a"),o=A.cO(r,"b"),n=A.h0(r,"width"),m=A.h0(r,"height"),l=typeof r.i(0,"doorKit")=="string"?A.F(r.i(0,"doorKit")):null
return new A.dJ(q,p,o,n*s,m*s,l)},
$S:61}
A.k0.prototype={
$1(a){var s=A.jB(a,"stair")
A.cO(s,"id")
return new A.dL(A.cO(s,"portalId"))},
$S:62}
A.k1.prototype={
$1(a){return typeof a=="string"?a:A.fY("exterior cell")},
$S:24}
A.k2.prototype={
$1(a){return t.hE.a(a).a===this.a.a},
$S:25}
A.dK.prototype={}
A.k3.prototype={
$1(a){var s=this.a,r=A.jB(a,"window"),q=A.cO(r,"id"),p=A.h0(r,"offset")
A.h0(r,"sill")
return new A.dM(q,p*s,A.h0(r,"width")*s,A.h0(r,"height")*s)},
$S:65}
A.dM.prototype={}
A.dJ.prototype={}
A.dL.prototype={}
A.ob.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:66}
A.hf.prototype={
l1(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.Q(s)
q=new A.N(s,r.h("u(1)").a(new A.kb(e)),r.h("N<1>"))
p=!q.gu(0).m()?null:q.gaS(0)
if(p==null){n.d=null
return}if(!(n.bM(b,p.f)&&a==="hall"))o=n.bM(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.iP(p,B.d.a_(d,0,1))},
kG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.en(f,c,d)
s=g.iN(a,b,c,d)
if(s!=null){g.d=s
return g.en(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.jN(Math.sqrt(r*r+q*q)/0.08))
o=d.V(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.eP(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.hs(a,n)
n=i==null?n:i
h=g.eP(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.hs(a,n)
n=i==null?n:i}g.bP(m)
return new A.i0(m,n)},
iN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bM(c,l.f)&&n
j=q&&this.bM(c,l.r)&&o
if(k||j)return new A.iP(l,k?0:1)}return null},
en(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a4(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.a_(a.b+o/p,0,1)
n=A.qG(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bP(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.i0(n,k)},
bM(a,b){var s=a.a4(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
eP(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.fp(c,!1)
s=c.U(0,d)
this.bP(s)
if(this.hk(a,b)){this.bP(c)
return new A.fp(c,!0)}return new A.fp(s,!1)},
bP(a){var s=a.a4(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.U(0,new A.b(0,1.2000000000000002,0))},
hk(a,b){var s,r,q,p,o,n,m=a.e.i(0,b)
if(m==null)return!0
s=a.aO(m)
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
return!this.jo(a,m,s)},
hs(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.i(0,b)
if(k==null)return null
s=a.aO(k)
for(r=k.a,q=a.ar(r),p=J.I(q.a),q=new A.O(p,q.b,q.$ti.h("O<1>"));q.m();){o=p.gp()
n=o.cc(r)
m=!1
if(n!=null)if(l.i(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.eT(k,o,s)&&this.iF(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jo(a,b,c){var s,r,q
for(s=a.ar(b.a),r=J.I(s.a),s=new A.O(r,s.b,s.$ti.h("O<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.eT(b,q,c))return!0}return!1},
eT(a,b,c){var s,r,q,p=a.a,o=b.aj(p),n=b.ad(p)
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
iF(a,b,c){var s,r=this
switch(b.aj(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sjF(a){this.a=t.bf.a(a)}}
A.kb.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:101}
A.i0.prototype={}
A.fp.prototype={}
A.iP.prototype={}
A.eQ.prototype={}
A.kX.prototype={
jU(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.B,r)
s=B.B[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hW(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.B,q)
p=B.B[q]
if(p.b===a)r+=p.c}return r},
hX(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.B,q)
p=B.B[q]
if(p.b===a)r+=p.d}return r},
C(){return A.R(["landedCount",this.b],t.N,t.z)}}
A.mg.prototype={
ig(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.y()
o.c=new A.hJ(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.l(0,p.a,o.e4(p))}},
kS(a){var s,r,q,p,o,n=this,m=n.a.e.i(0,a)
if(m==null)return
s=n.d
r=s.i(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.ko(r[o])
s.l(0,a,n.e4(m))},
e4(a){var s=A.rO(this.a,a),r=this.b,q=A.e([r.bR(s.a,1),r.bR(s.b,2),r.bR(s.c,0)],t.t),p=s.d
if(!B.w.gG(p))q.push(r.bR(p,0))
return q},
hI(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.i(0,a)
if(l==null)return B.D
s=l.a
r=A.ar([s],t.N)
for(n=n.ar(s),q=J.I(n.a),n=new A.O(q,n.b,n.$ti.h("O<1>"));n.m();){p=q.gp()
o=p.cc(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.i(0,o)==null)continue
r.k(0,o)}return r},
k5(a,b){var s,r,q,p,o=this,n=o.hI(a),m=o.b,l=o.c
l===$&&A.j()
l=t.b3.a(l.hD(n,b))
s=t.f0
m.d9=l.length<=4?A.ao(l,s):A.ao(A.mx(l,0,A.dC(4,"count",t.S),A.Q(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.i(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.k6(r[p])}}}
A.aE.prototype={}
A.ku.prototype={
gkx(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.ag(A.e([r,q,p,o,n,m],t.n),new A.kv())&&o>=r&&n>=q&&m>=p}}
A.kv.prototype={
$1(a){return isFinite(A.fW(a))},
$S:12}
A.kY.prototype={
H(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.ah(s,3)!==0}else s=!0
if(s)throw A.c(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.c(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gkx())throw A.c(A.w("QHMX bounds are invalid",m))
for(s=t.n,r=0;r<k;++r){q=l[r]
if(B.a.a5(A.e([q.a,q.b,q.c,q.d,q.e,q.f,q.r,q.w],s),new A.l_()))throw A.c(A.w("QHMX contains a non-finite vertex",m))
p=q.x>255
if(p)throw A.c(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,s=l.length,r=0;r<s;++r){o=l[r]
if(o>=k)throw A.c(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.l_.prototype={
$1(a){return!isFinite(A.fW(a))},
$S:12}
A.kZ.prototype={
t(a,b,c,d,e,f,g){var s=this
s.aZ(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.aZ(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.aZ(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.aZ(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.aZ(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.aZ(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aE(a,b,c,m,n,o,0,0,p),r=new A.aE(g,h,i,m,n,o,1,1,p)
this.b_(s,new A.aE(d,e,f,m,n,o,1,0,p),r)
this.b_(s,r,new A.aE(j,k,l,m,n,o,0,1,p))},
b_(a,b,c){var s=this,r=s.b
B.a.k(r,s.cC(a))
B.a.k(r,s.cC(b))
B.a.k(r,s.cC(c))},
cC(a){var s,r,q=B.a.aU(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.i(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.c(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
jI(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.c(A.m("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.kY(A.ao(g,t.hZ),new Uint16Array(A.a_(this.b)),new A.ku(s,r,q,p,o,n))
h.H()
return h}}
A.cW.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.kw.prototype={
jO(a){var s
switch(a.a){case 0:s=A.ar(["front","street","opposite-house"],t.N)
break
case 1:s=A.ar(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.ar(["side-boundary","rear-service"],t.N)
break
case 3:s=A.ar(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.ar(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
jP(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b1
break A}if("kitchen"===a||"cellar"===a){s=B.cN
break A}if("bathroom"===a){s=B.cO
break A}if("spare-room"===a){s=B.cP
break A}s=B.b1
break A}return this.jO(s)}}
A.cI.prototype={}
A.o_.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:68}
A.cX.prototype={
A(){return"FocusKind."+this.b}}
A.dW.prototype={}
A.mh.prototype={}
A.nE.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:69}
A.cH.prototype={}
A.el.prototype={}
A.kW.prototype={
io(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.l3(),a4=this.b,a5=A.aX(a4,!0,t.W)
B.a.J(a4)
s=A.e([],t.kl)
for(r=a5.length,q=t.x,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.aK(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.aQ(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.b_(b.a,b.b,a3.$1(b.c)))}s.push(new A.ay(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.aX(a4,!0,t.gm)
B.a.J(a4)
s=A.e([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.cy(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cB(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
iR(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.a0(n))throw A.c(A.m("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.a0(n))throw A.c(A.m("duplicate portal "+n))
q.l(0,n,m)}},
ju(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.c(A.m("3D room overlap: "+n.a+" and "+m.a))}},
jt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.x(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.eS(o,i,h,g,f,e)
a5.e1(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.i(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.c(A.m(l+" references invalid portal "+d))
i=c.aj(l)
h=c.ad(l)
g=c.w
f=c.x
a5.eS(o,i,h,g,0,f)
a5.e1(a6,l,c.aj(l),c.ad(l),c.ad(l)+g,0,f)}}for(s=new A.Y(a6,a6.$ti.h("Y<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.bP(a)
r.Y(a,new A.l4())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.i(a,a0).a[0]<r.i(a,a2).a[1]&&r.i(a,a2).a[0]<r.i(a,a0).a[1]
a4=r.i(a,a0).a[2]<r.i(a,a2).a[3]&&r.i(a,a2).a[2]<r.i(a,a0).a[3]
if(a3&&a4)throw A.c(A.m("overlapping apertures on "+b.a))}}},
eS(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.c(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
e1(a,b,c,d,e,f,g){J.h2(t.gz.a(a).kQ(b+":"+c.b,new A.l2()),new A.fF([d,e,f,g]))},
aO(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.hW(q),s.b+r.hX(q),s.c)},
ar(a){var s=this.c,r=A.Q(s)
return new A.N(s,r.h("u(1)").a(new A.l5(a)),r.h("N<1>"))},
kP(a,b){var s,r,q,p,o=this.e.i(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.c(A.aD(a,"roomId","not a portal endpoint"))
r=this.aO(o)
q=b.ad(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aj(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
gle(){return B.a.br(this.b,0,new A.l6(),t.S)}}
A.l3.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:70}
A.l4.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:71}
A.l2.prototype={
$0(){return A.e([],t.a3)},
$S:72}
A.l5.prototype={
$1(a){var s
t.gm.a(a)
s=this.a
return a.b===s||a.c===s},
$S:73}
A.l6.prototype={
$2(a,b){return A.a(a)+t.W.a(b).e.length},
$S:74}
A.kt.prototype={}
A.mp.prototype={
hV(a,b){var s,r=a.e.i(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.ag(s,new A.mq())}else s=!1
return s}}
A.mq.prototype={
$1(a){return t.hE.a(a).w},
$S:25}
A.bU.prototype={}
A.hJ.prototype={
hD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.bz)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.i(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.bU(new A.b(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.jg(j),0.06))}}B.a.Y(s,new A.l0(b))
return A.mx(s,0,A.dC(4,"count",t.S),t.f0).b6(0)},
jg(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.l0.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.a4(0,s).gq(0),b.a.a4(0,s).gq(0))},
$S:75}
A.eL.prototype={
A(){return"Floor."+this.b}}
A.ct.prototype={
A(){return"Facing."+this.b}}
A.aK.prototype={}
A.cy.prototype={
cc(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aj(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.c(A.aD(a,"roomId","not an endpoint of "+s.a))},
ad(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.c(A.aD(a,"roomId","not an endpoint of "+s.a))}}
A.aQ.prototype={}
A.b_.prototype={}
A.cr.prototype={}
A.cB.prototype={}
A.ay.prototype={}
A.l1.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.x(m,l)
for(s=n.a,s=new A.Y(s,A.o(s).h("Y<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.R(["open",o.a,"locked",o.b],m,r))}l=A.x(m,l)
for(s=n.c,s=new A.Y(s,A.o(s).h("Y<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.R(["lit",o.a,"examined",o.b],m,r))}return A.R(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a7(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.k(0,s[q].a)
r=A.a7(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.k(0,n[l].a)
e=A.a7(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.pB(new A.ai(o,A.o(o).h("ai<1>")),d)){d=f.b
if(A.pB(new A.ai(d,A.o(d).h("ai<1>")),r)){d=f.c
e=!A.pB(new A.ai(d,A.o(d).h("ai<1>")),e)}else e=n}else e=n
if(e)throw A.c(B.dd)
e=f.d
if(e<0||e>2)A.k(B.d0)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.r)(s),++q){k=s[q]
j=o.i(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.r)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){h=r[l]
n=s.i(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){g=r[l]
j=d.i(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.f4.prototype={
C(){return A.R(["open",this.a,"locked",this.b],t.N,t.y)}}
A.eX.prototype={
C(){return A.R(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.ko.prototype={
$1(a){return this.a.v(0,A.F(a))},
$S:4}
A.cu.prototype={
A(){return"Hand."+this.b}}
A.mV.prototype={
i(a,b){var s=this.a.i(0,b)
return s==null?B.l:s},
dX(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.i(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.hX.prototype={
C(){var s,r,q,p=t.N,o=A.x(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.r[r]
o.l(0,q,s.i(0,q))}return A.R(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.a0(B.r,t.ej.a(new A.lr(this)),t.dD).aU(0," \xb7 ")}}
A.lq.prototype={
$2(a,b){return new A.K(A.F(a),A.F(b),t.q)},
$S:76}
A.lr.prototype={
$1(a){return this.a.a.i(0,A.F(a))},
$S:22}
A.b9.prototype={
C(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.R(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.lc.prototype={
bh(a){t.G.a(a)
return a.a===5&&B.a.ag(B.r,new A.lj(this,a))},
e2(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bh(b))return null
s=this.e++
r=new A.b9(s,a,A.e([A.lp(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
cS(a,b,c){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||!this.bh(b))return!1
B.a.k(s.c,A.lp(b,c,B.W))
return!0},
jz(a,b){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||s.r!=null)return!1
if(!this.bh(b))return!1
s.r=A.lp(b,0,B.bc)
return!0},
hP(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.J(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a0(p)&&!B.a.v(s,p))B.a.k(s,p)}},
lc(a){var s
if(!this.b.a0(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.S(n,A.o(n).c)
B.a.X(n)
s=A.e([],t.bV)
for(r=q.b,r=new A.aj(r,r.r,r.e,A.o(r).h("aj<2>"));r.m();)s.push(r.d.C())
return A.R(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.lj.prototype={
$1(a){var s
A.F(a)
s=this.b.i(0,a)
if(s==null)s=""
return B.a.v(this.a.a.i(0,a),s)},
$S:4}
A.k4.prototype={
cT(a,b){if(a.a===B.a_&&!a.c)return new A.lL(b,B.bz)
return new A.ln(b,a.c,a.d,B.bz)},
jX(a){return this.cT(a,null)}}
A.dN.prototype={}
A.k5.prototype={
bB(a){var s,r=a==null?null:B.b.l8(a).toLowerCase()
if(r==="next")return B.ch
s=r!=null&&r!=="legacy"
return new A.dN(B.Z,!1,s,s?"unknown renderer query":null)}}
A.lo.prototype={}
A.ln.prototype={
gb0(){var s=this.b
s=s==null?null:s.gb0()
return s==null?A.mc("legacy",A.e([],t.s),this.c,this.d,"legacy"):s},
aD(){if(this.e===B.bA)throw A.c(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aD()
this.e=B.t},
au(a,b){var s
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
if(this.e!==B.t)A.k(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.au(a,b)},
az(a){var s
if(this.e!==B.t)A.k(A.m("legacy backend is not ready"))
B.u.b1(A.R(["backend","legacy","interpolation",0,"facts",A.jx(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.az(a)},
aT(a){var s
if(this.e!==B.t)A.k(A.m("legacy backend is not ready"))
B.u.b1(A.R(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aT(a)}}
A.lM.prototype={}
A.lL.prototype={
gb0(){var s=this.b
s=s==null?null:s.gb0()
return s==null?A.mc("next",A.e([],t.s),!1,null,"safe"):s},
aD(){if(this.c===B.bA)throw A.c(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aD()
this.c=B.t},
au(a,b){var s
if(this.c!==B.t)A.k(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.c(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.au(a,b)},
az(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a0){p=q==null
if(p||!q.gcR()){if(s.c!==B.a0)A.k(A.m("pixeldart backend is not context-lost"))
s.c=B.t
if(!p)q.hu()}p=s.c
if(p===B.a0)return}if(p!==B.t)A.k(A.m(r))
B.u.b1(A.R(["backend","next","interpolation",0,"facts",A.jx(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gcR()){if(s.c!==B.t)A.k(A.m(r))
s.c=B.a0
q.hm()
return}q.az(a)}},
aT(a){var s
if(this.c!==B.t)A.k(A.m("pixeldart backend is not ready"))
B.u.b1(A.R(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aT(a)}}
A.lN.prototype={
jM(a,b){var s,r,q,p,o,n,m
a.H()
s=B.aP.bB(a)
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
o=A.S(o,A.o(o).c)
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
A.f9.prototype={
A(){return"RendererBackendKind."+this.b}}
A.de.prototype={
A(){return"RendererBackendState."+this.b}}
A.md.prototype={}
A.ik.prototype={}
A.mb.prototype={
ie(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
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
A.b0.prototype={
A(){return"SleepQuality."+this.b}}
A.aR.prototype={
A(){return"SleepLocation."+this.b}}
A.e7.prototype={}
A.kg.prototype={
cn(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hZ(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.R(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.R(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kh.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:77}
A.ki.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:78}
A.hN.prototype={
A(){return"InteractionType."+this.b}}
A.dq.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.mZ.prototype={}
A.dp.prototype={}
A.hl.prototype={}
A.l7.prototype={}
A.l9.prototype={
dT(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.Y(p,new A.la())
return p},
jT(a,b){var s,r,q,p,o,n=b.b
if(n.gG(n))return B.h7
s=t.N
r=A.a7(s)
q=A.a7(s)
for(s=n.gN(),s=s.gu(s),p=a.c;s.m();){o=s.gp()
if(B.a.gO(p).a.i(0,o)==n.i(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.dp(B.a7,r)
s=r.a
o=B.a.gO(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gO(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dp(B.ce,r)
return new A.dp(B.aO,r)},
j9(a,b,c,d,e){var s,r,q=this.a,p=q.b.i(0,e)
if(p==null)return new A.hl(e,!1,B.h6,null)
s=p.d===c
r=this.jT(p,d)
q.lc(e)
return new A.hl(e,s,r,r.a===B.a7&&s?'The world says "'+d.c+'". The entry says "'+B.a.gO(p.c).n(0)+'".':null)},
jY(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.a7)return null
s=this.a.b.i(0,r)
if(s==null)return null
return new A.l7(B.a.gO(s.c).n(0)+" but "+A.q(a.f))}}
A.la.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:13}
A.bx.prototype={
A(){return"RuptureStep."+this.b}}
A.mi.prototype={}
A.bW.prototype={}
A.mj.prototype={
gdY(){var s=B.aq.i(0,this.a)
return s==null?0:s},
i1(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.x)s=q.e
else s=!0
if(s)return B.bl
r=A.pr(b)
s=q.c
B.a.J(s)
B.a.I(s,r)
B.a.J(q.d)
q.a=B.O
q.b=0
q.e=!1
return A.e([B.cB],t.e_)},
jB(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.c(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.x||a===0)return B.bl
s=A.e([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.x))break
A:{q=l.a
p=B.aq.i(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.H)l.jq(s)
p=l.b
o=B.aq.i(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.bW())
if(q===B.H){l.a=B.x
l.b=0
l.e=!0
B.a.k(s,B.cA)}else{p=q.a+1
if(!(p<7))return A.d(B.bk,p)
l.a=B.bk[p]
l.b=0
B.a.k(s,new A.bW())}}}return A.ao(s,t.k8)},
C(){var s=this,r=t.N
return A.R(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ao(s.c,r),"extinguishedMantles",A.ao(s.d,r),"completed",s.e],r,t.z)},
jq(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.a_(B.d.c3(l.b/l.gdY()*A.ao(s,r).length),0,A.ao(s,r).length)
p=l.d
for(;;){o=A.aX(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aX(s,!1,r)
o.$flags=3
n=o
o=A.aX(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.bW())}}}
A.hC.prototype={
gbb(){var s=this.b
if(s<6||s>18)return 0
return B.d.a_((s-6)/12,0,1)}}
A.o3.prototype={
$1(a){var s=B.c.bQ(this.a,a)&255
return B.c.a_(B.d.aH(s+((B.c.bQ(this.b,a)&255)-s)*this.c),0,255)},
$S:80}
A.mu.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.ea(g.a),e=t.N,d=A.x(e,t.P)
for(s=g.b,s=new A.Y(s,A.o(s).h("Y<1,2>")).gu(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.jv(q,r.b))}s=A.ea(g.r)
q=A.ea(g.w)
p=A.ea(g.x)
o=A.x(e,t.l_)
for(n=g.as,n=new A.Y(n,A.o(n).h("Y<1,2>")).gu(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.I(l.b);i.m();){h=i.gp()
j.push(A.R(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.R(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
jv(a,b){var s,r=A.ea(t.iu.a(b)),q=this.c.i(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.ea(q.b3(0,new A.mv(),t.S,t.z)))
s=this.d.i(0,a)
if(s!=null&&s.gL(s))r.l(0,"_ambient",A.ea(s.b3(0,new A.mw(),t.S,t.z)))
return r}}
A.mv.prototype={
$2(a,b){return new A.K(A.a(a),t.ey.a(b).C(),t.iI)},
$S:81}
A.mw.prototype={
$2(a,b){return new A.K(A.a(a),t.bR.a(b).C(),t.iI)},
$S:82}
A.dm.prototype={
C(){return A.R(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dl.prototype={
C(){return A.R(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fm.prototype={
C(){var s=t.N
return A.R(["field",this.a,"value",this.b],s,s)}}
A.mz.prototype={
bw(){var s=0,r=A.bp(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bw=A.bs(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ak(A.b7(A.f(A.f(v.G.window).fetch("res/text.json")),t.m),$async$bw)
case 6:n=b
s=7
return A.ak(A.b7(A.f(n.text()),t.N),$async$bw)
case 7:m=b
l=A.xn(m)
j=J.aM(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.aM(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aM(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aM(l,"documents")
j.toString
i.a(j)
j=J.aM(l,"street")
j.toString
i.a(j)
j=J.aM(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aM(l,"nights")
j.toString
i.a(j)
j=J.aM(l,"endings")
j.toString
o.w=i.a(j)
j=J.aM(l,"records")
j.toString
i.a(j)
j=J.aM(l,"cues")
j.toString
i.a(j)
j=J.aM(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ae(g)
j=A.q(k)
throw A.c("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bn(null,r)
case 1:return A.bm(p.at(-1),r)}})
return A.bo($async$bw,r)},
hH(a){var s,r,q,p=this.a
p===$&&A.j()
s=p.i(0,B.c.n(a))
if(t.f.b(s)){p=s.gR().dQ(0,new A.mA())
r=p.$ti
q=t.N
q=A.x(q,q)
q.jy(new A.cb(p,r.h("K<l,l>(1)").a(new A.mB()),r.h("cb<1,K<l,l>>")))
return q}return null},
hK(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.j()
s=m.i(0,a)
m=t.f
r=m.b(s)?s.i(0,"_arrival"):n
q=m.b(r)?r.i(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.i(0,"hour")
o=q.i(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aI(p)||o!==B.d.aI(o))return n
return new A.dm(B.d.aI(p),B.d.aI(o))},
hJ(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.j()
s=l.i(0,a)
l=t.f
r=l.b(s)?s.i(0,"_ambient"):m
q=l.b(r)?r.i(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.i(0,"hour")
o=q.i(0,"channel")
n=q.i(0,"lineKey")
if(typeof p!="number"||p!==B.d.aI(p)||typeof o!="string"||typeof n!="string")return m
return new A.dl(B.d.aI(p),o,n)},
ld(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.x(a1,t.iu),a3=A.x(a1,t.c_),a4=A.x(a1,t.d8),a5=t.h,a6=A.x(a1,t.iD),a7=b.b
a7===$&&A.j()
a7=new A.Y(a7,A.o(a7).h("Y<1,2>")).gu(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.x(a,a0)
for(o=o.gR(),o=o.gu(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.lR(l,null):null
if(k==null||!q.b(m.b))continue
j=A.x(a1,a1)
for(m=q.a(m.b).gR(),m=m.gu(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.F(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.x(a,r)
for(m=n.$ti.h("cw<1>"),l=new A.cw(n,n.r,n.e,m);l.m();){i=l.d
g=b.hK(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.x(a,s)
for(m=new A.cw(n,n.r,n.e,m);m.m();){l=m.d
e=b.hJ(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.j()
a7=new A.Y(a7,A.o(a7).h("Y<1,2>")).gu(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.I(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.i(0,"field")=="string"&&typeof c.i(0,"value")=="string")o.push(new A.fm(A.F(c.i(0,"field")),A.F(c.i(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.mu(A.x(a,a0),a2,a3,a4,A.x(a1,a5),A.x(a1,a5),A.x(a,a5),A.x(a,a5),A.x(a,a5),A.x(a1,a5),A.x(a1,a5),A.x(a1,a5),a6)}}
A.mA.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:83}
A.mB.prototype={
$1(a){t.d7.a(a)
return new A.K(A.F(a.a),A.F(a.b),t.q)},
$S:84}
A.jT.prototype={
dV(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.f(v.G.window).setTimeout(A.al(new A.jU(this)),7000))}}
A.jU.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:24}
A.k7.prototype={
dO(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.kk.prototype={
i8(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.V(a,k,"door-speaker",j)
l.b!==$&&A.y()
l.b=i
s=A.V(a,k,"door-line",j)
l.c!==$&&A.y()
l.c=s
r=l.a
A.f(r.appendChild(i))
A.f(r.appendChild(s))
s=A.V(a,k,"door-cite-list",j)
l.e!==$&&A.y()
l.e=s
i=A.V(a,k,"door-cite-result",j)
l.f!==$&&A.y()
l.f=i
A.f(r.appendChild(s))
A.f(r.appendChild(i))
for(i=A.jw,s=l.r,q=0;q<5;++q){p=B.e6[q]
o=A.f(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.kl(l,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.eA()]=n
o.addEventListener("click",m)
A.f(r.appendChild(o))
B.a.k(s,o)}i=A.V(a,"button","door-continue","continue")
l.d!==$&&A.y()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.al(new A.km(l)))
A.f(r.appendChild(i))
A.f(A.i(a.body).appendChild(r))},
dW(a,b){var s,r,q,p=this
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
cl(a){var s,r,q=this,p=q.c
p===$&&A.j()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.r)(p),++r)A.f(p[r].style).display="none"
p=q.d
p===$&&A.j()
A.f(p.style).display=""
p=q.f
p===$&&A.j()
p.textContent=""},
hT(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.j()
s.textContent=""
for(r=b.length,q=A.jw,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.f(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.kn(o,this)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eA()]=o
m.addEventListener("click",l)
A.f(s.appendChild(m))}},
c4(){var s,r=this
r.z=!1
s=r.e
s===$&&A.j()
s.textContent=""
s=r.f
s===$&&A.j()
s.textContent=""
r.a.className="door"},
skI(a){this.w=t.ov.a(a)},
skK(a){this.x=t.jE.a(a)},
skJ(a){this.y=t.bZ.a(a)}}
A.kl.prototype={
$1(a){var s
A.f(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.km.prototype={
$1(a){var s
A.f(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.kn.prototype={
$1(a){var s
A.f(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.kq.prototype={
i9(a){var s,r,q,p=this,o=p.a,n=A.V(o,"h1","journal-title",null)
p.f!==$&&A.y()
p.f=n
s=A.V(o,"div","ending-copy",null)
p.r!==$&&A.y()
p.r=s
r=p.b
A.f(r.appendChild(n))
A.f(r.appendChild(s))
q=A.V(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.al(new A.kr(p)))
A.f(r.appendChild(q))},
hU(a,b){var s,r,q,p,o,n,m=this
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
A.f(s.appendChild(n))}m.cb()},
skL(a){this.w=t.jE.a(a)}}
A.kr.prototype={
$1(a){var s
A.f(a)
s=this.a
s.aC()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.kU.prototype={
ia(a){var s,r="help-copy",q=this.b,p=this.a
A.f(q.appendChild(A.V(p,"h1","journal-title","house notes")))
A.f(q.appendChild(A.V(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.f(q.appendChild(A.V(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.V(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.al(new A.kV(this)))
A.f(q.appendChild(s))}}
A.kV.prototype={
$1(a){A.f(a)
return this.a.aC()},
$S:1}
A.ld.prototype={
iq(){var s,r=this,q=r.a,p=A.V(q,"div","page-turn",null),o=A.V(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.al(new A.le(r)))
s=A.V(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.al(new A.lf(r)))
q=A.V(q,"span","right-day-label",null)
r.Q!==$&&A.y()
r.Q=q
A.f(p.appendChild(o))
A.f(p.appendChild(q))
A.f(p.appendChild(s))
return p},
eQ(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.e7(s.CW+a,r)
s.ex()},
e7(a,b){if(a<1)return 1
if(a>b)return b
return a},
jc(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.j()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.j()
s.textContent=""
for(s=j.w.dT(),r=s.length,q=A.jw,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gO(n.c).n(0)
l=A.f(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.lg(j,n,l)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eA()]=m
l.addEventListener("click",k)
A.f(i.appendChild(l))}},
ex(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.j()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.o(p).h("aj<2>"),n=new A.aj(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.lh())
j.ew(i,r)
i=j.Q
i===$&&A.j()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.j()
s=A.e([],s)
for(r=new A.aj(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.li())
j.ew(i,s)
k=B.d.a_(q.f/4,0,1)
i=j.as
i===$&&A.j()
A.f(i.style).setProperty("width",B.d.ce(k*100,1)+"%")},
ew(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.f(a.appendChild(this.iO(b[r])))},
iO(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.V(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.f(k.createElement("div"))
n.className=q
n.textContent=o
A.f(n.style).setProperty("--shake",B.d.n(p.b))
A.f(j.appendChild(n))}m=a.r
if(m!=null){l=this.iW(m,!1)
l.className=A.F(l.className)+" margin"
A.f(j.appendChild(l))}return j},
iW(a,b){var s=b?"hand-line struck":"hand-line",r=A.V(this.a,"div",s,a.n(0))
A.f(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.le.prototype={
$1(a){A.f(a)
return this.a.eQ(-1)},
$S:1}
A.lf.prototype={
$1(a){A.f(a)
return this.a.eQ(1)},
$S:1}
A.lg.prototype={
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
A.lh.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.li.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.f3.prototype={
bD(a){var s=this.b
s.className="panel"
A.f(s.style).setProperty("--panel-fade","0.25s")
A.f(A.i(this.a.body).appendChild(s))},
cb(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.F(n.className),"open"))return
s=$.lI
if(s!=null&&s!==o)s.aC()
$.lI=o
r=o.a
o.d=A.i(r.activeElement)
A.qc(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.al(o.gj6())
o.e=q
r.addEventListener("keydown",q)
p=A.rm(n)
if(p.length!==0)B.a.gaS(p).focus()},
aC(){var s,r,q=this,p=q.b
if(!B.b.v(A.F(p.className),"open"))return
p.className="panel"
if($.lI===q)$.lI=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
j7(a){A.f(a)
if(A.aS(a.defaultPrevented))return
if(A.F(a.code)==="Escape"){this.aC()
return}if(A.F(a.code)==="Tab")this.jp(a)},
jp(a){var s,r=A.rm(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.aS(a.shiftKey)){if(s===B.a.gaS(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gO(r).focus()}}else if(s===B.a.gO(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gaS(r).focus()}},
sca(a){this.c=t.jE.a(a)}}
A.lV.prototype={
hS(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.mr.prototype={
ih(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.f(i.appendChild(A.V(a,"h2","journal-title","Rest")))
A.f(i.appendChild(A.V(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.V(a,"div","entry-picker",null)
for(r=A.jw,q=0;q<2;++q){p=B.bj[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bo[n]
l=A.f(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.ms(this,p,m)
if(typeof k=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eA()]=k
l.addEventListener("click",j)
A.f(s.appendChild(l))}}A.f(i.appendChild(s))},
skM(a){this.f=t.as.a(a)}}
A.ms.prototype={
$1(a){var s,r
A.f(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aC()},
$S:3}
A.bH.prototype={}
A.jQ.prototype={
l2(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.Q(s)
q=new A.a0(s,r.h("l(1)").a(new A.jS()),r.h("a0<1,l>")).aX(0)
r=this.b
r.J(0)
s=J.tv(a,t.N)
p=s.$ti
r.I(0,new A.N(s,p.h("u(n.E)").a(q.gbT(q)),p.h("N<n.E>")))},
k7(a,b){var s,r,q,p,o,n=A.e([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.jS.prototype={
$1(a){return t.e.a(a).a},
$S:85}
A.jR.prototype={
$2(a,b){var s,r=t.e
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:86}
A.iK.prototype={
kw(a){return this.c.v(0,t.g.a(a))},
l0(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.ag(0,j.gjV())||!a.a.ag(0,new A.mT(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.i(0,r)
p=q==null?null:q.i(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.a6){n=s.d
if(n<J.aN(p)){o=o===B.J
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.L}else j=!1}}}if(j)return!1
m=new A.iJ(r,s.b,A.ao(p,t.kX),B.J)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.J(0)
j.I(0,a.a)
j=l.c
j.J(0)
j.I(0,k)
l.e=m
return!0},
eU(a){var s=this.a,r=A.o(s).h("ai<1>"),q=r.h("N<n.E>")
s=A.S(new A.N(new A.ai(s,r),r.h("u(n.E)").a(new A.mQ(a)),q),q.h("n.E"))
B.a.Y(s,new A.mR())
return s},
jG(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.h2
s=m.a.i(0,a)
if(s==null)return B.h3
r=B.c.K(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aL:B.P
o=p===B.P&&m.r.v(0,q)&&s.a0(B.aM)?B.aM:p
if(s.a0(o))n=o
else n=s.a0(B.P)?B.P:B.aL
r=s.i(0,n)
r.toString
r=new A.iJ(a,n,A.ao(r,t.kX),B.J)
m.e=r
return new A.iI(r)},
jQ(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cd
if(n.d!==B.J)return B.h0
n.e=a
s=a===B.L
n.d=s?B.a6:B.a4
r=this.d
q=s?B.cb:B.fM
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.cl(q,o,p,a,null))
if(a===B.R)B.a.k(r,new A.cl(B.fP,o,p,a,null))
if(s)this.ey(n)
return new A.iH(n)},
jC(){var s,r=this.e
if(r==null)return B.cd
s=r.d
if(s!==B.a4&&s!==B.a5)return B.h1
r.d=B.a5
if(++r.f>=r.c.length){r.d=B.a6
this.ey(r)
return new A.fl(r,!0)}return new A.fl(r,!1)},
jR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.a4&&s!==B.a5}else s=!0
if(s)return i
r=h.gbV()
if(r==null)return i
s=t.N
q=A.x(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.bm
p=J.I(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.dS(q,s,s)
m=c.j9(!0,!0,o,new A.mZ(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.a7){B.a.k(this.d,new A.cl(B.fO,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.i(0,l)
if(j!=null){o=B.a.gO(j.c)
s=A.qi(s,s)
s.I(0,o.a)
s.I(0,q)
p.jz(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ce)if(k===B.aO){s=n.b
s=s.gL(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.cl(B.fN,o,p.b,i,l))}}return m},
ey(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
si0(a){this.r=t.Q.a(a)}}
A.mT.prototype={
$1(a){var s=this.a.a
return new A.ai(s,A.o(s).h("ai<1>")).a5(0,new A.mS(A.F(a)))},
$S:4}
A.mS.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:14}
A.mQ.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:14}
A.mR.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:88}
A.mP.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:89}
A.iL.prototype={}
A.j9.prototype={}
A.oi.prototype={
$1(a){return B.b.W(A.F(a),"off.")},
$S:4}
A.aW.prototype={
A(){return"DoorChoice."+this.b}}
A.bg.prototype={
A(){return"VisitPhase."+this.b}}
A.bh.prototype={
A(){return"VisitTier."+this.b}}
A.cE.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cl.prototype={
C(){var s,r=this,q=A.x(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.bZ.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bi.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.bi&&b.a===this.a&&b.b===this.b},
gE(a){return A.cd(this.a,this.b,B.k,B.k)}}
A.by.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.by&&b.a===this.a&&b.b===this.b},
gE(a){return A.cd(this.a,this.b,B.k,B.k)}}
A.b1.prototype={
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.b1&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gE(a){var s=this
return A.cd(s.a,s.b,s.c,s.d)},
C(){var s=this
return A.R(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.iM.prototype={
C(){var s,r,q,p=this.a
p=A.S(p,A.o(p).c)
B.a.X(p)
s=this.b
r=A.o(s)
q=r.h("cV<1,P<l,@>>")
s=A.S(new A.cV(s,r.h("P<l,@>(1)").a(new A.mO()),q),q.h("n.E"))
r=this.c
return A.R(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.mO.prototype={
$1(a){return t.g.a(a).C()},
$S:90}
A.h4.prototype={
C(){var s=this,r=s.a.C(),q=s.e
q=q==null?null:q.b
return A.R(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.jN.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:91}
A.jO.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:92}
A.jP.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:93}
A.iJ.prototype={
gbV(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.mU.prototype={}
A.b2.prototype={}
A.iI.prototype={}
A.iH.prototype={}
A.fl.prototype={}
A.fE.prototype={
gb0(){var s,r=this.k2
if(r){s=this.w
s===$&&A.j()
s=s.a.b}else s="safe"
return A.mc("next",r?this.gjL():B.eo,!1,null,s)},
gcR(){if(this.k2){var s=this.d
s===$&&A.j()
s=s.b===B.M}else s=!1
return s},
gjL(){var s,r
if(!this.k2)return B.l
s=this.r
s===$&&A.j()
r=this.w
r===$&&A.j()
return B.cz.jM(s,r)},
gkn(){var s=this.fr
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.ce(this.fx,3)},
gkm(){var s=this.fr
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.fx<=100},
aD(){var s,r,q,p,o,n,m=this,l=A.v5(m.a)
m.d=l
l=l.ht()
m.r=l
l=m.w=B.aP.hL(l)
q=m.b
p=m.c
s=new A.iv(q,p,q,p)
p=A.qu(m.d)
m.e=p
try{p.hj(new A.ij(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.ae(o)
l=m.w
if(l===B.Y)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.Y
l=A.qu(m.d)
l.hj(B.f2,s)
m.e=l}l=m.e
l.bJ()
n=A.uL(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.k2=!0},
au(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("Pixeldart surface size must be positive",null))
if(!r.k2){r.b=a
r.c=b
return}s=r.e
s===$&&A.j()
s.bJ()
new A.iv(a,b,a,b).H()
r.b=a
r.c=b},
jE(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="wall-plaster",a8="grime"
if(!a6.k2||a6.z.length!==0)return
s=a6.ch
r=a6.e
r===$&&A.j()
s.l(0,a7,r.gaG().hx("texture:wall-plaster",256,256))
s.l(0,a8,a6.e.gaG().hx("texture:grime",512,512))
a6.cx=a6.e.gaG().dJ(A.oW(s.i(0,a7),!1,"quarantine-house-safe",0.58,0.58,0.58,1,1))
r=a6.CW
r.l(0,"cellar",a6.e.gaG().dJ(A.oW(s.i(0,a8),!1,"quarantine-house-cellar",0.44,0.46,0.48,1,1)))
for(q=a9.b,p=q.length,o=a6.z,n=a6.Q,m=a6.as,l=a6.y,k=0;j=q.length,k<j;q.length===p||(0,A.r)(q),++k){i=q[k]
h=a6.jh(a9,i)
j=a6.e.w
if(j==null)j=A.k(A.m("renderer is not initialized"))
g=i.a
if(j.r)A.k(A.m("resource library is disposed"))
f=j.a
h.H()
e=f.b.bj(h,"room:"+g)
d=e.a
f.c.l(0,d,f.cM(h))
j.d.k(0,e)
B.a.k(l,e)
j=r.i(0,g)
if(j==null){j=a6.cx
j.toString}c=new A.bd(e,j,B.K,-1,B.S,B.ac,!0,!0,0,null)
j=a6.f
j===$&&A.j()
B.K.H()
f=j.a
b=f.$ti
f.ao(b.c.a(e))
f=f.b
if(!(d>=0&&d<f.length))return A.d(f,d)
h=f[d].c
f=(h==null?b.y[1].a(h):h).d
d=B.K.aw()
f=f.gbU()
b=A.Q(f)
A.dI(new A.a0(f,b.h("A(1)").a(d.gbA()),b.h("a0<1,A>")))
a=j.b.cU(c)
B.a.k(o,a)
n.l(0,g,a)
m.l(0,g,c)}for(k=0;k<q.length;q.length===j||(0,A.r)(q),++k){i=q[k]
for(r=i.e,p=r.length,o=i.a,a0=0;a0<r.length;r.length===p||(0,A.r)(r),++a0){a1=r[a0]
n=a1.c
m=a1.d
a6.e_(o,a6.er(i,a1.b,n,n+a1.e,m,m+a1.f,7902632),new A.no(a1))}}for(r=a9.c,q=r.length,p=a9.e,k=0;k<r.length;r.length===q||(0,A.r)(r),++k){a2=r[k]
if(a2.as)continue
i=p.i(0,a2.b)
if(i==null)continue
o=i.a
a6.e_(o,a6.er(i,a2.aj(o),a2.ad(o),a2.ad(o)+a2.w,0,a2.x,5915445),new A.np(a2))}a3=A.xU(A.xf(a9))
a6.cy=a6.e.gaG().dJ(A.oW(s.i(0,a8),!0,"quarantine-house-exterior-shell",0.5,0.5,0.5,1,1))
a4=a6.e.gaG().hw(a3,"exterior:main-shell")
B.a.k(l,a4)
s=a6.cy
s.toString
a5=a6.ax=new A.bd(a4,s,B.K,-1,B.S,B.ac,!0,!0,0,null)
s=a6.f
s===$&&A.j()
s.cO(a5)
a6.at=s.b.cU(a5)},
hQ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a2.e,a1=a0.i(0,a3)
if(a1==null)return
s=a1.a
r=A.ar([s],t.N)
for(q=a2.ar(s),p=J.I(q.a),q=new A.O(p,q.b,q.$ti.h("O<1>"));q.m();){o=p.gp()
n=o.cc(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a0.i(0,n)!=null)r.k(0,n)}for(a0=a.Q,a0=new A.Y(a0,A.o(a0).h("Y<1,2>")).gu(0),s=a.as;a0.m();){m=a0.d
q=m.a
p=s.i(0,q)
p.toString
l=a.cN(p,r.v(0,q)?-1:0)
p=a.f
p===$&&A.j()
o=m.b
k=l.c
k.H()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.ao(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.d(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.aw()
j=j.gbU()
i=A.Q(j)
A.dI(new A.a0(j,i.h("A(1)").a(k.gbA()),i.h("a0<1,A>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.ao(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.d(p,o)
p[o].sbi(l)
s.l(0,q,l)}for(a0=a.ay,s=a0.length,f=0;f<a0.length;a0.length===s||(0,A.r)(a0),++f){e=a0[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a.f
q===$&&A.j()
p=a.cN(e.c,d)
o=p.c
o.H()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.ao(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.d(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.aw()
k=k.gbU()
j=A.Q(k)
A.dI(new A.a0(k,j.h("A(1)").a(o.gbA()),j.h("a0<1,A>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.ao(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.d(q,o)
q[o].sbi(p)}a0=new A.kw().jP(a3).a
c=a.at
b=a.ax
if(c!=null&&b!=null){l=a.cN(b,a0!==0?-1:0)
s=a.f
s===$&&A.j()
s.cO(l)
s.b.hA(c,l)
a.ax=l}},
hM(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.ar([b],t.N),h=a.e,g=h.i(0,b)
if(g!=null)for(s=g.a,r=a.ar(s),q=J.I(r.a),r=new A.O(q,r.b,r.$ti.h("O<1>"));r.m();){p=q.gp()
o=p.cc(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h.i(0,o)!=null)i.k(0,o)}n=new A.hJ(a).hD(i,c)
m=A.e([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.eb(k.b)
h=k.a
B.a.k(m,new A.ic(new A.A(h.a,h.b,h.c),k.d,k.c))}j=A.t1(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.eb(A.t0(d))
s=new A.kj(new A.A(j.a,j.b,j.c),1)}this.dx=new A.hA(B.dV,1.5,14,B.bg,h,s,m)},
az(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.k2)throw A.c(A.m("Pixeldart runtime is not initialized"))
s=g.db
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cc(s)
q=A.oV(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.dP(r,q,q.V(0,r),B.y,B.fw,0.1,60,g.b/g.c)}p=g.dx
o=g.dy
n=g.k1++
m=g.fy
l=new A.mt()
$.pP()
k=$.lT.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.j()
j=g.f
j===$&&A.j()
k.jb()
k.bJ()
i=B.a.v(k.d,j)
if(!i)A.k(A.w("world was not created by this renderer",f))
if(k.at!=null)A.k(A.m("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga1(0))A.k(A.w("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga1(0)||i.gbu()<1e-12)A.k(A.w("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.w("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.w("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.ga1(0)||!s.b.ga1(0)||!s.c.ga1(0))A.k(A.w("CameraView matrices must be finite",f))
p.H()
o.H()
if(!isFinite(m))A.k(A.w("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.kD(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.ak)A.k(A.m("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.ak
s.c=0
B.a.J(s.a)
g.fr=g.e.ka()
s=$.lT.$0()
l.b=s
g.fx=l.gk8()/1000},
aT(a){},
hm(){},
hu(){++this.go},
jh(a,b){var s,r,q,p,o,n=A.rO(a,b),m=A.S(n.a,t.i)
B.a.I(m,n.b)
B.a.I(m,n.c)
B.a.I(m,n.d)
s=new Float32Array(A.a_(m))
r=A.e([],t.k)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.d(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.d(s,o)
B.a.k(r,new A.A(m,p,s[o]))}return new A.bT(B.af,s,null,A.dI(r))},
e_(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.j()
r=s.gaG().hw(b,"decoration:"+a)
B.a.k(p.y,r)
q=new A.bd(r,p.iY(a),B.K,0,B.S,B.ac,!0,!0,0,null)
s=p.f
s===$&&A.j()
s.cO(q)
B.a.k(p.ay,new A.jb(a,s.b.cU(q),q,c))},
iY(a){var s=this.CW.i(0,a)
if(s==null){s=this.cx
s.toString}return s},
al(a){return this.kD(t.G.a(a))},
kD(a){var s=0,r=A.bp(t.H),q,p=this,o,n,m,l
var $async$al=A.bs(function(b,c){if(b===1)return A.bm(c,r)
for(;;)switch(s){case 0:if(!p.k2){s=1
break}o=A.e([],t.iw)
for(n=0;n<2;++n){m=B.em[n]
l=a.i(0,m)
if(l!=null)o.push(p.bL(m,l))}s=3
return A.ak(A.kJ(o,t.H),$async$al)
case 3:case 1:return A.bn(q,r)}})
return A.bo($async$al,r)},
bL(a,b){return this.iX(a,b)},
iX(a,b){var s=0,r=A.bp(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bL=A.bs(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.ch.i(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.f(A.f(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ak(A.b7(A.f(m.decode()),t.X),$async$bL)
case 7:g=A.f(A.f(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.m("2D canvas context unavailable for "+a)
throw A.c(h)}k.drawImage(m,0,0)
j=t.mR.a(A.f(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.j()
h=h.gaG()
f=new Uint8Array(A.a_(j))
if(h.r)A.k(A.m("resource library is disposed"))
h.c.la(d,f)
$.M.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ae(c)
h=$.M.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.f(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.q(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bn(q,r)
case 2:return A.bm(o.at(-1),r)}})
return A.bo($async$bL,r)},
cN(a,b){return new A.bd(a.a,a.b,a.c,b,a.e,a.f,!0,!0,a.x,a.y)},
er(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.a9.j().aO(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.dj(new Float32Array(5376))
o.aW(k[0],k[1],k[2],k[3],g)
n=B.w.ba(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.A(r,q,n[p]))}return new A.bT(B.af,n,null,A.dI(k))},
eb(a){return new A.d6((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ip_:1}
A.no.prototype={
$0(){return!this.a.w},
$S:15}
A.np.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:15}
A.ed.prototype={
gb0(){return A.mc("legacy",B.l,this.e,this.f,"legacy")},
gcR(){return this.x},
aD(){var s,r=this
if(r.w)return
s=A.uM(r.a,r.b,r.c)
r.r!==$&&A.y()
r.r=s
s.ft=s.fs=s.fq=r.d
r.w=!0},
au(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.j()
s.au(a,b)}},
az(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.c(A.m("legacy runtime is not initialized"))
if(j.x||$.nI==null)return;++j.y
$.M.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.j()
r=$.rv
q=$.b4.j()
s.fz=A.t1($.dz.j().gbb()).gac()
s.shl(A.t0($.dz.j().gbb()))
p=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dz.j().gbb()))
s.fD=p<0?0:p
p=$.bD.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.U(0,p.d.V(0,(A.oG(o*0.28,1309)*2-1)*n)).U(0,p.c.V(0,(A.oG(p.r*0.28,2839)*2-1)*n))
p=$.bD.j()
s.fE=p.a
s.da=p.b
s.dc=p.c
s.dd=p.d
m=A.wm(0,0.25,0.11)
s.de=m.a
s.df=m.b
s.dg=m.c
p=s.c1
l=p==null?s.bn:p
if(l==null)l=s.aP
p=s.aq
p.aB(l)
s.ak.depthMask(!0)
p.jS(l,s.de/255,s.df/255,s.dg/255)
s.d5=s.c2=0
s.d7=!1
s.bp=0
k=$.nI
if(k!=null)k.k5($.aT,$.jK())
s.kl(r,q)
$.r9.j().dO(B.cx,r)},
aT(a){},
hm(){this.x=!0},
hu(){this.x=!1},
$ip_:1}
A.jb.prototype={}
A.oq.prototype={
$1(a){var s
try{A.q5(a,this.a)
return!0}catch(s){if(A.ae(s) instanceof A.J)return!1
else throw s}},
$S:95}
A.or.prototype={
$0(){$.b5=null
$.bl.j().aF($.M.j())},
$S:0}
A.os.prototype={
$2(a,b){var s,r,q,p,o
if($.Z.j().gaJ().a===21){A.rD(!1)
return}s=$.a9.j().r.b
$.Z.j().hY(a,b,$.aT)
r=$.a9.j().r.b
q=s
for(;;){p=q
o=r
if(typeof p!=="number")return p.ck()
if(typeof o!=="number")return A.jG(o)
if(!(p<o))break
p=$.nI
if(p!=null){if($.a9.b===$.a9)A.k(A.aw(""))
p.kS(B.a.i(B.B,q).b)}p=q
if(typeof p!=="number")return p.U()
q=p+1}A.pC("saved after sleep")},
$S:96}
A.ov.prototype={
$0(){$.b5=null
$.bl.j().aF($.M.j())},
$S:0}
A.ow.prototype={
$0(){$.b5=null
$.bl.j().aF($.M.j())},
$S:0}
A.ox.prototype={
$0(){$.b5=null},
$S:0}
A.oy.prototype={
$0(){$.b5=null},
$S:0}
A.oz.prototype={
$1(a){A.f(a)
return A.rC()},
$S:1}
A.oA.prototype={
$1(a){var s,r
A.f(a)
if(!A.aS(a.repeat))$.cn.j().aT(new A.ik(A.F(a.code),!0,1))
if(A.F(a.code)==="KeyP"&&!A.aS(a.repeat))$.pw=!$.pw
if(A.F(a.code)==="KeyR"&&!A.aS(a.repeat)&&$.rL){s=$.eu
if(s!=null)s.b4()}if(A.F(a.code)==="KeyJ"&&!A.aS(a.repeat)&&!$.aA.j().z){s=$.b5
if(s==null){$.b5=$.ep.j()
s=$.ep.j()
s.i4()
r=s.r.a-1
if(r<1)r=1
s.CW=s.e7(s.CW,r)
s.jc()
s.ex()}else if(s===$.ep.j())$.ep.j().aC()}if(A.F(a.code)==="KeyL"&&!A.aS(a.repeat)&&!$.aA.j().z){s=$.b5
if(s==null){$.b5=$.jv.j()
$.jv.j().cb()}else if(s===$.jv.j())$.jv.j().aC()}if(A.F(a.code)==="KeyH"&&!A.aS(a.repeat)&&!$.aA.j().z){s=$.b5
if(s==null){$.b5=$.jt.j()
$.jt.j().cb()}else if(s===$.jt.j())$.jt.j().aC()}if(A.F(a.code)==="KeyK"&&!A.aS(a.repeat))A.pC("saved")},
$S:3}
A.oB.prototype={
$1(a){A.f(a)
$.cn.j().aT(new A.ik(A.F(a.code),!1,0))},
$S:3}
A.oC.prototype={
$1(a){A.f(a)
return A.rc()},
$S:1}
A.ot.prototype={
$1(a){A.f(a)
return A.rc()},
$S:1}
A.ou.prototype={
$1(a){A.f(a)
return $.bl.j().aF($.M.j())},
$S:1}
A.o1.prototype={
$1(a){var s=A.F(A.f(a).message)
A.o5(s,null)},
$S:3}
A.o2.prototype={
$1(a){var s
A.f(a)
s=a.reason
A.o5("unhandled rejection: "+A.q(s==null?A.F(a.type):s),null)},
$S:3}
A.o8.prototype={
$0(){this.a.className=""},
$S:8}
A.o6.prototype={
$1(a){return t.L.a(a).e},
$S:23};(function aliases(){var s=J.cv.prototype
s.i3=s.n
s=A.n.prototype
s.i2=s.dQ
s=A.f3.prototype
s.i4=s.cb})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"ws","ui",26)
r(J.p.prototype,"gbT","v",11)
q(A,"wF","uw",16)
p(A.bw.prototype,"gjV","a0",11)
o(A,"xb","vd",7)
o(A,"xc","ve",7)
o(A,"xd","vf",7)
q(A,"rN","wU",0)
s(A,"xh","un",26)
r(A.bz.prototype,"gbT","v",11)
o(A,"xk","w7",5)
p(A.i_.prototype,"gkZ","l_",64)
p(A.iy.prototype,"gkX","kY",97)
q(A,"yr","oX",15)
p(A.cc.prototype,"gbA","hz",47)
var n
p(n=A.hM.prototype,"giZ","j_",1)
p(n,"gj0","j1",1)
p(n,"gj4","j5",1)
p(n,"gj2","j3",1)
o(A,"xL","rj",5)
o(A,"xN","ri",5)
p(A.f3.prototype,"gj6","j7",1)
p(A.iK.prototype,"gkv","kw",14)
o(A,"rU","wI",99)
o(A,"xF","w3",100)
q(A,"xH","w6",0)
o(A,"xG","w4",67)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.E,null)
q(A.E,[A.oP,J.hO,A.fd,J.cQ,A.n,A.eD,A.cq,A.a2,A.H,A.mn,A.ca,A.d7,A.O,A.fn,A.ab,A.bY,A.bA,A.e1,A.dR,A.dw,A.cf,A.mG,A.lE,A.eK,A.fH,A.T,A.ls,A.cw,A.aj,A.eW,A.n5,A.nw,A.bL,A.j1,A.jo,A.nt,A.iQ,A.bk,A.au,A.iU,A.dr,A.ad,A.iR,A.jm,A.fT,A.fw,A.j6,A.dx,A.fz,A.fN,A.jp,A.cT,A.hm,A.nm,A.nx,A.cU,A.cs,A.iZ,A.i8,A.ff,A.n6,A.J,A.K,A.af,A.jn,A.mt,A.aJ,A.fP,A.mI,A.ji,A.lD,A.j3,A.ee,A.lX,A.dc,A.kc,A.kd,A.id,A.dP,A.hA,A.kD,A.ce,A.kT,A.d6,A.kj,A.ic,A.e8,A.d9,A.ck,A.mN,A.bT,A.lF,A.lO,A.il,A.bd,A.iv,A.ij,A.kF,A.i_,A.iB,A.lA,A.cm,A.iy,A.d2,A.hy,A.hz,A.kE,A.ag,A.bb,A.aI,A.L,A.eE,A.lU,A.aG,A.lZ,A.aF,A.m0,A.m_,A.du,A.f8,A.ns,A.jc,A.j0,A.mf,A.ml,A.aZ,A.aV,A.ap,A.kf,A.h3,A.db,A.kG,A.cc,A.lW,A.mF,A.A,A.eC,A.iS,A.hc,A.iT,A.hq,A.iW,A.eH,A.iX,A.hu,A.iY,A.hI,A.j2,A.he,A.hd,A.f5,A.jd,A.ih,A.je,A.di,A.ip,A.jg,A.iq,A.jh,A.it,A.jk,A.is,A.jj,A.iG,A.jq,A.fa,A.iO,A.jr,A.ka,A.hD,A.hF,A.eP,A.fe,A.C,A.hr,A.ie,A.kS,A.cJ,A.bV,A.eI,A.mY,A.cL,A.fS,A.fR,A.iN,A.ht,A.h8,A.k9,A.kC,A.iw,A.kQ,A.hK,A.hM,A.hZ,A.d8,A.lz,A.dj,A.m5,A.me,A.n_,A.fu,A.jl,A.ja,A.j8,A.mo,A.b,A.k8,A.hv,A.kp,A.dU,A.ib,A.lP,A.e6,A.mk,A.dg,A.hB,A.kN,A.kM,A.jY,A.dK,A.dM,A.dJ,A.dL,A.hf,A.i0,A.fp,A.iP,A.eQ,A.kX,A.mg,A.aE,A.ku,A.kY,A.kZ,A.kw,A.cI,A.dW,A.mh,A.cH,A.el,A.kW,A.kt,A.mp,A.bU,A.hJ,A.aK,A.cy,A.aQ,A.b_,A.cr,A.cB,A.ay,A.l1,A.f4,A.eX,A.mV,A.hX,A.b9,A.lc,A.k4,A.dN,A.k5,A.lo,A.ln,A.lM,A.lL,A.lN,A.md,A.ik,A.mb,A.e7,A.kg,A.mZ,A.dp,A.hl,A.l7,A.l9,A.mi,A.bW,A.mj,A.hC,A.mu,A.dm,A.dl,A.fm,A.mz,A.jT,A.k7,A.kk,A.f3,A.lV,A.bH,A.jQ,A.iK,A.mU,A.cl,A.bi,A.by,A.b1,A.iM,A.h4,A.iJ,A.fE,A.ed,A.jb])
q(J.hO,[J.hS,J.eS,J.eT,J.e_,J.e0,J.d3,J.d4])
q(J.eT,[J.cv,J.p,A.cx,A.f0])
q(J.cv,[J.ia,J.dk,J.c9])
r(J.hQ,A.fd)
r(J.lb,J.p)
q(J.d3,[J.eR,J.hT])
q(A.n,[A.cG,A.B,A.cb,A.N,A.bO,A.dv,A.c0])
q(A.cG,[A.cS,A.fU])
r(A.ft,A.cS)
r(A.fr,A.fU)
q(A.cq,[A.hh,A.hg,A.ix,A.ol,A.on,A.n1,A.n0,A.nF,A.kK,A.ng,A.ni,A.lv,A.nk,A.oE,A.oF,A.of,A.lY,A.lH,A.ly,A.lB,A.mC,A.mE,A.kz,A.kx,A.ky,A.lJ,A.lK,A.m4,A.m3,A.m2,A.m1,A.m6,A.nY,A.nZ,A.mm,A.oK,A.oI,A.kH,A.lx,A.od,A.mW,A.mX,A.jX,A.kR,A.ma,A.ks,A.kO,A.kP,A.jZ,A.k_,A.k0,A.k1,A.k2,A.k3,A.ob,A.kb,A.kv,A.l_,A.o_,A.nE,A.l3,A.l5,A.mq,A.ko,A.lr,A.lj,A.kh,A.ki,A.o3,A.mA,A.mB,A.jU,A.kl,A.km,A.kn,A.kr,A.kV,A.le,A.lf,A.lg,A.ms,A.jS,A.mT,A.mS,A.mQ,A.oi,A.mO,A.jN,A.jO,A.jP,A.oq,A.oz,A.oA,A.oB,A.oC,A.ot,A.ou,A.o1,A.o2,A.o6])
q(A.hh,[A.n4,A.ke,A.lk,A.om,A.nG,A.oc,A.kL,A.nh,A.lt,A.lw,A.nn,A.mL,A.mK,A.lC,A.mD,A.kA,A.oJ,A.oH,A.l4,A.l6,A.l0,A.lq,A.la,A.mv,A.mw,A.lh,A.li,A.jR,A.mR,A.mP,A.os])
r(A.bJ,A.fr)
q(A.a2,[A.d5,A.ch,A.hU,A.iA,A.im,A.j_,A.eV,A.h6,A.bI,A.fk,A.iz,A.e9,A.hk])
r(A.eb,A.H)
r(A.hi,A.eb)
q(A.B,[A.a3,A.ai,A.aO,A.Y,A.dt,A.fy])
q(A.a3,[A.fh,A.a0,A.fc,A.j5])
r(A.cV,A.cb)
q(A.bA,[A.ef,A.eg,A.eh])
r(A.ei,A.ef)
r(A.ej,A.eg)
r(A.fF,A.eh)
r(A.em,A.e1)
r(A.cD,A.em)
r(A.eF,A.cD)
q(A.dR,[A.a1,A.eM])
q(A.cf,[A.eG,A.fG,A.fO])
r(A.c5,A.eG)
q(A.hg,[A.lQ,A.n2,A.n3,A.nu,A.kI,A.n7,A.nc,A.nb,A.n9,A.n8,A.nf,A.ne,A.nd,A.nr,A.o7,A.nz,A.ny,A.nW,A.nQ,A.nV,A.nM,A.nN,A.nX,A.nU,A.nK,A.nL,A.nR,A.nS,A.nT,A.nP,A.nO,A.oe,A.m9,A.l2,A.no,A.np,A.or,A.ov,A.ow,A.ox,A.oy,A.o8])
r(A.f2,A.ch)
q(A.ix,[A.iu,A.dO])
q(A.T,[A.bw,A.fv,A.j4])
r(A.eU,A.bw)
r(A.e2,A.cx)
q(A.f0,[A.i1,A.ax])
q(A.ax,[A.fA,A.fC])
r(A.fB,A.fA)
r(A.eZ,A.fB)
r(A.fD,A.fC)
r(A.f_,A.fD)
q(A.eZ,[A.eY,A.i2])
q(A.f_,[A.i3,A.i4,A.i5,A.i6,A.i7,A.da,A.f1])
r(A.fI,A.j_)
r(A.fo,A.iU)
r(A.jf,A.fT)
r(A.fx,A.fv)
r(A.bz,A.fG)
r(A.fj,A.fO)
q(A.cT,[A.h9,A.hw,A.hV])
q(A.hm,[A.k6,A.lm,A.ll,A.mM])
r(A.hW,A.eV)
r(A.nl,A.nm)
r(A.iE,A.hw)
q(A.bI,[A.e4,A.hL])
r(A.iV,A.fP)
q(A.iZ,[A.dd,A.d1,A.h5,A.cj,A.dT,A.hb,A.hj,A.hs,A.df,A.dX,A.bK,A.fb,A.c7,A.e5,A.dY,A.fq,A.fs,A.hE,A.eN,A.hG,A.hH,A.d_,A.eO,A.dh,A.cC,A.dQ,A.ek,A.ha,A.cR,A.hn,A.hp,A.az,A.bv,A.cZ,A.cW,A.cX,A.eL,A.ct,A.cu,A.f9,A.de,A.b0,A.aR,A.hN,A.dq,A.bx,A.aW,A.bg,A.bh,A.cE,A.bZ])
q(A.ce,[A.aY,A.bf,A.bS,A.i9,A.c8])
r(A.m8,A.n_)
r(A.m7,A.m8)
q(A.f3,[A.kq,A.kU,A.ld,A.mr])
q(A.mU,[A.iL,A.j9,A.b2,A.iI,A.iH,A.fl])
s(A.eb,A.bY)
s(A.fU,A.H)
s(A.fA,A.H)
s(A.fB,A.ab)
s(A.fC,A.H)
s(A.fD,A.ab)
s(A.em,A.fN)
s(A.fO,A.jp)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",t:"double",aC:"num",l:"String",u:"bool",af:"Null",D:"List",E:"Object",P:"Map",U:"JSObject"},mangledNames:{},types:["~()","~(U)","c6()","af(U)","u(l)","@(@)","u(ag)","~(~())","af()","~(@)","u(L)","u(E?)","u(t)","h(b9,b9)","u(b1)","u()","h()","@(l)","af(@)","~(E?,E?)","@()","u(h)","l?(l)","u(b9)","l(E?)","u(aK)","h(@,@)","P<l,l>(P<l,l>,l)","u(fi?)","h(h,+(bf,cm))","l(ag)","h(W,W)","af(E,bX)","~(@,@)","c8(h,h,l?)","fa(aY)","c6(l{fallback:l?})","af(~())","e8?()","dP()","t()","bd(be)","h(ap<aZ>,ap<aZ>)","be(ap<aZ>)","h(ap<aV>,ap<aV>)","be(ap<aV>)","db(t,t,t,t)","A(A)","@(@,l)","~(di)","di()","af(@,bX)","ba<af>(K<l,l>)","u(U)","0&(l,h?)","U()","E?(E?)","u(bv)","u(ay)","~(h,@)","dK(E?)","dJ(E?)","dL(E?)","~(E,bX)","d9(bS)","dM(E?)","u(@)","~(h)","u(cI)","u(cH)","b(b)","h(+(t,t,t,t),+(t,t,t,t))","D<+(t,t,t,t)>()","u(cy)","h(h,ay)","h(bU,bU)","K<l,l>(l,@)","u(b0)","u(aR)","bS(h,h,l?)","h(h)","K<h,@>(h,dm)","K<h,@>(h,dl)","u(K<@,@>)","K<l,l>(K<@,@>)","l(bH)","h(bH,bH)","aY(h,h,l?)","h(b1,b1)","h(by,by)","P<l,@>(b1)","u(bh)","u(bg)","u(aW)","h(h,+(aY,bT))","u(e6)","~(b0,aR)","c6(bf?)","bf(h,h,l?)","~(aC)","~(l)","u(cB)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.ei&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ej&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fF&&A.xJ(a,b.a)}}
A.vw(v.typeUniverse,JSON.parse('{"ia":"cv","dk":"cv","c9":"cv","y2":"cx","p":{"D":["1"],"B":["1"],"U":[],"n":["1"]},"hS":{"u":[],"X":[]},"eS":{"af":[],"X":[]},"eT":{"U":[]},"cv":{"U":[]},"hQ":{"fd":[]},"lb":{"p":["1"],"D":["1"],"B":["1"],"U":[],"n":["1"]},"cQ":{"a6":["1"]},"d3":{"t":[],"aC":[],"av":["aC"]},"eR":{"t":[],"h":[],"aC":[],"av":["aC"],"X":[]},"hT":{"t":[],"aC":[],"av":["aC"],"X":[]},"d4":{"l":[],"av":["l"],"qm":[],"X":[]},"cG":{"n":["2"]},"eD":{"a6":["2"]},"cS":{"cG":["1","2"],"n":["2"],"n.E":"2"},"ft":{"cS":["1","2"],"cG":["1","2"],"B":["2"],"n":["2"],"n.E":"2"},"fr":{"H":["2"],"D":["2"],"cG":["1","2"],"B":["2"],"n":["2"]},"bJ":{"fr":["1","2"],"H":["2"],"D":["2"],"cG":["1","2"],"B":["2"],"n":["2"],"n.E":"2","H.E":"2"},"d5":{"a2":[]},"hi":{"H":["h"],"bY":["h"],"D":["h"],"B":["h"],"n":["h"],"H.E":"h","bY.E":"h"},"B":{"n":["1"]},"a3":{"B":["1"],"n":["1"]},"fh":{"a3":["1"],"B":["1"],"n":["1"],"a3.E":"1","n.E":"1"},"ca":{"a6":["1"]},"cb":{"n":["2"],"n.E":"2"},"cV":{"cb":["1","2"],"B":["2"],"n":["2"],"n.E":"2"},"d7":{"a6":["2"]},"a0":{"a3":["2"],"B":["2"],"n":["2"],"a3.E":"2","n.E":"2"},"N":{"n":["1"],"n.E":"1"},"O":{"a6":["1"]},"bO":{"n":["1"],"n.E":"1"},"fn":{"a6":["1"]},"eb":{"H":["1"],"bY":["1"],"D":["1"],"B":["1"],"n":["1"]},"fc":{"a3":["1"],"B":["1"],"n":["1"],"a3.E":"1","n.E":"1"},"ei":{"ef":[],"bA":[]},"ej":{"eg":[],"bA":[]},"fF":{"eh":[],"bA":[]},"eF":{"cD":["1","2"],"em":["1","2"],"e1":["1","2"],"fN":["1","2"],"P":["1","2"]},"dR":{"P":["1","2"]},"a1":{"dR":["1","2"],"P":["1","2"]},"dv":{"n":["1"],"n.E":"1"},"dw":{"a6":["1"]},"eM":{"dR":["1","2"],"P":["1","2"]},"eG":{"cf":["1"],"cA":["1"],"B":["1"],"n":["1"]},"c5":{"eG":["1"],"cf":["1"],"cA":["1"],"B":["1"],"n":["1"]},"f2":{"ch":[],"a2":[]},"hU":{"a2":[]},"iA":{"a2":[]},"fH":{"bX":[]},"cq":{"cY":[]},"hg":{"cY":[]},"hh":{"cY":[]},"ix":{"cY":[]},"iu":{"cY":[]},"dO":{"cY":[]},"im":{"a2":[]},"bw":{"T":["1","2"],"oR":["1","2"],"P":["1","2"],"T.K":"1","T.V":"2"},"ai":{"B":["1"],"n":["1"],"n.E":"1"},"cw":{"a6":["1"]},"aO":{"B":["1"],"n":["1"],"n.E":"1"},"aj":{"a6":["1"]},"Y":{"B":["K<1,2>"],"n":["K<1,2>"],"n.E":"K<1,2>"},"eW":{"a6":["K<1,2>"]},"eU":{"bw":["1","2"],"T":["1","2"],"oR":["1","2"],"P":["1","2"],"T.K":"1","T.V":"2"},"ef":{"bA":[]},"eg":{"bA":[]},"eh":{"bA":[]},"e2":{"cx":[],"U":[],"X":[]},"da":{"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"],"X":[],"H.E":"h","ab.E":"h"},"cx":{"U":[],"X":[]},"f0":{"U":[]},"i1":{"U":[],"X":[]},"ax":{"bc":["1"],"U":[]},"eZ":{"H":["t"],"ax":["t"],"D":["t"],"bc":["t"],"B":["t"],"U":[],"n":["t"],"ab":["t"]},"f_":{"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"]},"eY":{"kB":[],"H":["t"],"ax":["t"],"D":["t"],"bc":["t"],"B":["t"],"U":[],"n":["t"],"ab":["t"],"X":[],"H.E":"t","ab.E":"t"},"i2":{"H":["t"],"ax":["t"],"D":["t"],"bc":["t"],"B":["t"],"U":[],"n":["t"],"ab":["t"],"X":[],"H.E":"t","ab.E":"t"},"i3":{"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"],"X":[],"H.E":"h","ab.E":"h"},"i4":{"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"],"X":[],"H.E":"h","ab.E":"h"},"i5":{"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"],"X":[],"H.E":"h","ab.E":"h"},"i6":{"p3":[],"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"],"X":[],"H.E":"h","ab.E":"h"},"i7":{"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"],"X":[],"H.E":"h","ab.E":"h"},"f1":{"fi":[],"H":["h"],"ax":["h"],"D":["h"],"bc":["h"],"B":["h"],"U":[],"n":["h"],"ab":["h"],"X":[],"H.E":"h","ab.E":"h"},"j_":{"a2":[]},"fI":{"ch":[],"a2":[]},"bk":{"a6":["1"]},"c0":{"n":["1"],"n.E":"1"},"au":{"a2":[]},"fo":{"iU":["1"]},"ad":{"ba":["1"]},"fT":{"qN":[]},"jf":{"fT":[],"qN":[]},"fv":{"T":["1","2"],"P":["1","2"]},"fx":{"fv":["1","2"],"T":["1","2"],"P":["1","2"],"T.K":"1","T.V":"2"},"dt":{"B":["1"],"n":["1"],"n.E":"1"},"fw":{"a6":["1"]},"bz":{"cf":["1"],"qj":["1"],"cA":["1"],"B":["1"],"n":["1"]},"dx":{"a6":["1"]},"H":{"D":["1"],"B":["1"],"n":["1"]},"T":{"P":["1","2"]},"fy":{"B":["2"],"n":["2"],"n.E":"2"},"fz":{"a6":["2"]},"e1":{"P":["1","2"]},"cD":{"em":["1","2"],"e1":["1","2"],"fN":["1","2"],"P":["1","2"]},"cf":{"cA":["1"],"B":["1"],"n":["1"]},"fG":{"cf":["1"],"cA":["1"],"B":["1"],"n":["1"]},"fj":{"cf":["1"],"jp":["1"],"cA":["1"],"B":["1"],"n":["1"]},"j4":{"T":["l","@"],"P":["l","@"],"T.K":"l","T.V":"@"},"j5":{"a3":["l"],"B":["l"],"n":["l"],"a3.E":"l","n.E":"l"},"h9":{"cT":["D<h>","l"]},"hw":{"cT":["l","D<h>"]},"eV":{"a2":[]},"hW":{"a2":[]},"hV":{"cT":["E?","l"]},"iE":{"cT":["l","D<h>"]},"cU":{"av":["cU"]},"t":{"aC":[],"av":["aC"]},"cs":{"av":["cs"]},"h":{"aC":[],"av":["aC"]},"D":{"B":["1"],"n":["1"]},"aC":{"av":["aC"]},"cA":{"B":["1"],"n":["1"]},"l":{"av":["l"],"qm":[]},"iZ":{"G":[]},"h6":{"a2":[]},"ch":{"a2":[]},"bI":{"a2":[]},"e4":{"a2":[]},"hL":{"a2":[]},"fk":{"a2":[]},"iz":{"a2":[]},"e9":{"a2":[]},"hk":{"a2":[]},"i8":{"a2":[]},"ff":{"a2":[]},"jn":{"bX":[]},"aJ":{"uS":[]},"fP":{"iC":[]},"ji":{"iC":[]},"iV":{"iC":[]},"j3":{"oY":[]},"ee":{"oY":[]},"dd":{"G":[]},"aY":{"ce":[]},"bf":{"ce":[]},"bS":{"ce":[]},"c8":{"ce":[]},"i9":{"ce":[]},"d1":{"G":[]},"h5":{"G":[]},"cj":{"G":[]},"dT":{"G":[]},"hb":{"G":[]},"hj":{"G":[]},"hs":{"G":[]},"df":{"G":[]},"dX":{"G":[]},"bK":{"G":[]},"fb":{"G":[]},"c7":{"G":[]},"e5":{"G":[]},"f8":{"uK":[]},"du":{"be":[]},"jc":{"uJ":[]},"j0":{"u6":[]},"aZ":{"av":["aZ"]},"aV":{"av":["aV"]},"dY":{"G":[]},"fq":{"G":[]},"eC":{"a4":[]},"iS":{"W":[]},"hc":{"a4":[]},"iT":{"W":[]},"hq":{"a4":[]},"iW":{"W":[]},"fs":{"G":[]},"eH":{"a4":[]},"iX":{"W":[]},"hu":{"a4":[]},"iY":{"W":[]},"hI":{"a4":[]},"j2":{"W":[]},"hd":{"uI":[]},"f5":{"a4":[]},"jd":{"W":[]},"ih":{"a4":[]},"je":{"W":[]},"ip":{"a4":[]},"jg":{"W":[]},"iq":{"a4":[]},"jh":{"W":[]},"it":{"a4":[]},"jk":{"W":[]},"is":{"a4":[]},"jj":{"W":[]},"iG":{"a4":[]},"jq":{"W":[]},"iO":{"a4":[]},"jr":{"W":[]},"hE":{"G":[]},"eN":{"G":[]},"hG":{"G":[]},"hH":{"G":[]},"d_":{"G":[]},"eO":{"G":[]},"dh":{"G":[]},"cC":{"G":[]},"dQ":{"G":[]},"hr":{"tQ":[]},"ek":{"G":[]},"az":{"G":[]},"ha":{"G":[]},"cR":{"G":[]},"hn":{"G":[]},"hp":{"G":[]},"cL":{"c6":[]},"iN":{"u9":[]},"bv":{"G":[]},"cZ":{"G":[]},"cW":{"G":[]},"cX":{"G":[]},"ct":{"G":[]},"eL":{"G":[]},"cu":{"G":[]},"f9":{"G":[]},"de":{"G":[]},"b0":{"G":[]},"aR":{"G":[]},"hN":{"G":[]},"dq":{"G":[]},"bx":{"G":[]},"aW":{"G":[]},"bg":{"G":[]},"bh":{"G":[]},"cE":{"G":[]},"bZ":{"G":[]},"fE":{"p_":[]},"ed":{"p_":[]},"ue":{"D":["h"],"B":["h"],"n":["h"]},"fi":{"D":["h"],"B":["h"],"n":["h"]},"uX":{"D":["h"],"B":["h"],"n":["h"]},"uc":{"D":["h"],"B":["h"],"n":["h"]},"p3":{"D":["h"],"B":["h"],"n":["h"]},"ud":{"D":["h"],"B":["h"],"n":["h"]},"uW":{"D":["h"],"B":["h"],"n":["h"]},"kB":{"D":["t"],"B":["t"],"n":["t"]},"u5":{"D":["t"],"B":["t"],"n":["t"]}}'))
A.vv(v.typeUniverse,JSON.parse('{"eb":1,"fU":2,"ax":1,"fG":1,"fO":1,"hm":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.at
return{e:s("bH"),v:s("au"),f5:s("h8"),gE:s("dJ"),fS:s("dK"),d2:s("dL"),lJ:s("dM"),dP:s("aV"),kp:s("he"),bP:s("av<@>"),gY:s("eE"),B:s("a1<l,l>"),I:s("a1<l,h>"),R:s("c5<l>"),ml:s("cU"),lD:s("aW"),jS:s("cs"),gt:s("B<@>"),no:s("bv"),L:s("b9"),V:s("a2"),hZ:s("aE"),D:s("kB"),Z:s("cY"),mj:s("ba<af>"),_:s("c6"),bU:s("cu"),lv:s("hK<E>"),hL:s("c8"),dp:s("n<eE>"),bq:s("n<l>"),id:s("n<t>"),e7:s("n<@>"),fm:s("n<h>"),od:s("p<bH>"),ag:s("p<hv>"),hS:s("p<cr>"),r:s("p<b9>"),oP:s("p<aE>"),iw:s("p<ba<~>>"),mc:s("p<hB>"),l2:s("p<c6>"),aW:s("p<bb>"),oX:s("p<y1<E>>"),og:s("p<d2>"),jj:s("p<c8>"),kG:s("p<U>"),b1:s("p<hX>"),cs:s("p<aQ>"),ic:s("p<P<l,E>>"),hq:s("p<P<l,l>>"),bV:s("p<P<l,@>>"),kS:s("p<hZ>"),mm:s("p<d8>"),dg:s("p<aY>"),hJ:s("p<ag>"),x:s("p<b_>"),de:s("p<db>"),bz:s("p<bU>"),dQ:s("p<ic>"),aN:s("p<cy>"),fR:s("p<+(h,l)>"),a3:s("p<+(t,t,t,t)>"),o5:s("p<a4>"),u:s("p<W>"),oZ:s("p<f8>"),C:s("p<L>"),c8:s("p<bd>"),bH:s("p<be>"),kl:s("p<ay>"),e_:s("p<bW>"),b2:s("p<e7>"),ao:s("p<ap<aV>>"),mX:s("p<ap<aZ>>"),jn:s("p<cB>"),s:s("p<l>"),aA:s("p<iw>"),k:s("p<A>"),U:s("p<b>"),cF:s("p<fm>"),bl:s("p<cl>"),ah:s("p<by>"),E:s("p<aK>"),jX:s("p<cI>"),a9:s("p<cH>"),jU:s("p<jb>"),dz:s("p<cJ<d9>>"),jk:s("p<cJ<bT>>"),n_:s("p<cJ<bd>>"),mQ:s("p<cJ<cm>>"),eP:s("p<el>"),df:s("p<u>"),n:s("p<t>"),dG:s("p<@>"),t:s("p<h>"),kC:s("p<U?>"),dM:s("p<E?>"),g2:s("p<aC>"),T:s("eS"),m:s("U"),d4:s("U()"),dY:s("c9"),dX:s("bc<@>"),bY:s("D<b9>"),a:s("D<bb>"),l_:s("D<P<l,l>>"),O:s("D<ag>"),b3:s("D<bU>"),jz:s("D<+(h,l)>"),ge:s("D<+(t,t,t,t)>"),io:s("D<bW>"),h:s("D<l>"),iD:s("D<fm>"),ee:s("D<cl>"),eU:s("D<by>"),cu:s("D<fu>"),j:s("D<@>"),J:s("D<h>"),ia:s("D<E?>"),mK:s("eX"),q:s("K<l,l>"),d7:s("K<@,@>"),iI:s("K<h,@>"),f7:s("P<l,c6>"),iE:s("P<l,ag>"),G:s("P<l,l>"),oQ:s("P<l,u>"),P:s("P<l,@>"),f:s("P<@,@>"),d8:s("P<h,dl>"),c_:s("P<h,dm>"),gz:s("P<l,D<+(t,t,t,t)>>"),kz:s("P<bh,D<by>>"),iu:s("P<h,P<l,l>>"),mz:s("a0<A,A>"),dD:s("a0<l,l?>"),fP:s("bS"),l0:s("aY"),eb:s("e2"),mR:s("da"),b:s("af"),K:s("E"),nL:s("aZ"),A:s("ag"),f0:s("bU"),gm:s("cy"),ku:s("f4"),lZ:s("y3"),aK:s("+()"),o7:s("+(aY,bT)"),iL:s("+(l,U)"),p3:s("+(bf,cm)"),cW:s("+(t,t,t,t)"),ks:s("W"),mn:s("bV<c8,bd>"),kk:s("bV<bS,d9>"),ll:s("bV<aY,bT>"),ox:s("bV<bf,cm>"),n4:s("L"),p9:s("bd"),os:s("be"),W:s("ay"),k8:s("bW"),Q:s("cA<l>"),nO:s("cA<h>"),m9:s("aR"),gC:s("b0"),ad:s("e7"),c:s("ap<aV>"),p:s("ap<aZ>"),l:s("bX"),fO:s("cB"),dB:s("az"),N:s("l"),lu:s("bf"),aJ:s("X"),do:s("ch"),cx:s("dk"),ph:s("cD<l,l>"),mL:s("iB"),jJ:s("iC"),b9:s("A"),bf:s("b"),pc:s("A(A)"),g:s("b1"),nq:s("bg"),kM:s("bh"),bR:s("dl"),ey:s("dm"),mv:s("cl"),kX:s("by"),cq:s("b2"),bn:s("N<aW>"),ns:s("N<bv>"),hr:s("N<aR>"),am:s("N<b0>"),nn:s("N<l>"),cB:s("N<bg>"),na:s("N<bh>"),lS:s("bO<l>"),hE:s("aK"),fH:s("fu"),d:s("ad<@>"),mp:s("fx<E?,E?>"),j8:s("j8"),fg:s("cI"),at:s("cH"),ln:s("j9"),fw:s("ja"),hX:s("jl"),fJ:s("c0<be>"),jg:s("fR"),fL:s("fS"),y:s("u"),al:s("u()"),hg:s("u(aW)"),gl:s("u(bv)"),iW:s("u(E)"),aZ:s("u(aR)"),gw:s("u(b0)"),gS:s("u(l)"),bQ:s("u(bg)"),nw:s("u(bh)"),i:s("t"),z:s("@"),mY:s("@()"),mq:s("@(E)"),ng:s("@(E,bX)"),S:s("h"),gK:s("ba<af>?"),mU:s("U?"),lH:s("D<@>?"),X:s("E?"),w:s("l?"),ej:s("l?(l)"),nh:s("fi?"),F:s("dr<@,@>?"),Y:s("j6?"),fU:s("u?"),hK:s("u(e6)?"),dA:s("t?"),aV:s("h?"),jh:s("aC?"),jE:s("~()?"),as:s("~(b0,aR)?"),ov:s("~(l)?"),bZ:s("~(h)?"),o:s("aC"),H:s("~"),M:s("~()"),lc:s("~(l,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.dQ=J.hO.prototype
B.a=J.p.prototype
B.c=J.eR.prototype
B.d=J.d3.prototype
B.b=J.d4.prototype
B.dR=J.c9.prototype
B.dS=J.eT.prototype
B.w=A.eY.prototype
B.bx=A.f1.prototype
B.by=J.ia.prototype
B.aK=J.dk.prototype
B.hb=new A.h5(0,"opaque")
B.a_=new A.f9(1,"next")
B.ch=new A.dN(B.a_,!0,!1,null)
B.aa=new A.ha(0,"add")
B.ci=new A.cR(0,"zero")
B.ab=new A.cR(1,"one")
B.ac=new A.hb(0,"alpha")
B.ad=new A.k4()
B.hc=new A.k6()
B.cl=new A.h9()
B.aP=new A.ka()
B.aQ=function getTagFallback(o) {
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
B.aR=function(hooks) { return hooks; }

B.u=new A.hV()
B.hd=new A.lo()
B.cx=new A.E()
B.cy=new A.i8()
B.he=new A.lM()
B.cz=new A.lN()
B.ae=new A.lW()
B.cA=new A.bW()
B.O=new A.bx(1,"gradeLUT")
B.cB=new A.bW()
B.cC=new A.mi()
B.cD=new A.mk()
B.k=new A.mn()
B.I=new A.A(0,1,0)
B.a3=new A.A(0,-1,0)
B.bg=new A.d6(1,1,1)
B.cE=new A.e8()
B.y=new A.A(0,0,0)
B.K=new A.mF()
B.aS=new A.iE()
B.fA=new A.cj(0,"position")
B.fG=new A.ck(B.fA,0,3)
B.fB=new A.cj(1,"normal")
B.fH=new A.ck(B.fB,3,3)
B.fC=new A.cj(2,"color")
B.fI=new A.ck(B.fC,6,4)
B.fD=new A.cj(4,"alpha")
B.fJ=new A.ck(B.fD,10,1)
B.fE=new A.cj(5,"uv0")
B.fK=new A.ck(B.fE,11,2)
B.fF=new A.cj(6,"legacyMaterialEffect")
B.fL=new A.ck(B.fF,13,1)
B.ap=s([B.fG,B.fH,B.fI,B.fJ,B.fK,B.fL],A.at("p<ck>"))
B.af=new A.mN()
B.aT=new A.j3()
B.q=new A.jf()
B.Q=new A.jn()
B.aU=new A.dQ(0,"colorOnly")
B.aV=new A.dQ(1,"colorAndDepth")
B.ag=new A.dQ(2,"depthOnly")
B.ah=new A.hn(1,"back")
B.ai=new A.hp(0,"less")
B.R=new A.aW(0,"open")
B.aW=new A.aW(1,"chain")
B.aX=new A.aW(2,"throughDoor")
B.aY=new A.aW(3,"letterbox")
B.L=new A.aW(4,"ignore")
B.S=new A.dT(0,"opaque")
B.cF=new A.dT(1,"masked")
B.aj=new A.dT(2,"blended")
B.cG=new A.eI(!0,B.ai,!1,!0,B.ab,B.ab,B.aa,!0,B.ah,!0,!1,!0,!0,!0,!0,!1)
B.cj=new A.cR(2,"srcAlpha")
B.ck=new A.cR(3,"oneMinusSrcAlpha")
B.cH=new A.eI(!0,B.ai,!1,!0,B.cj,B.ck,B.aa,!0,B.ah,!0,!1,!0,!0,!0,!0,!1)
B.cI=new A.cs(0)
B.cJ=new A.cs(24e5)
B.aZ=new A.bv(0,"compliance")
B.cK=new A.dU(B.aZ)
B.b_=new A.bv(1,"rupture")
B.cL=new A.dU(B.b_)
B.b0=new A.bv(2,"synchronisation")
B.cM=new A.dU(B.b0)
B.b1=new A.cW(0,"front")
B.cN=new A.cW(1,"rearService")
B.cO=new A.cW(2,"sideBoundary")
B.cP=new A.cW(3,"roofline")
B.i=new A.ct(0,"north")
B.v=new A.ct(1,"east")
B.m=new A.ct(2,"south")
B.G=new A.ct(3,"west")
B.T=new A.eL(0,"ground")
B.U=new A.eL(1,"first")
B.cQ=new A.cX(0,"mantle")
B.cR=new A.cX(1,"portal")
B.cT=new A.cX(3,"none")
B.cU=new A.dW(B.cT,null)
B.cS=new A.cX(2,"window")
B.cV=new A.dW(B.cS,"the shutter")
B.cW=new A.J("saved mantle history is malformed",null,null)
B.cX=new A.J("rupture elapsed time is malformed",null,null)
B.cY=new A.J("presentation keys must be strings",null,null)
B.b2=new A.J("saved mantle state is malformed",null,null)
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
B.d9=new A.J("saved session run is malformed",null,null)
B.da=new A.J("save map keys must be strings",null,null)
B.db=new A.J("saved day-loop state is malformed",null,null)
B.dc=new A.J("rupture extinguished mantle is unknown",null,null)
B.b3=new A.J("saved portal state is malformed",null,null)
B.dd=new A.J("saved house state does not match this house",null,null)
B.de=new A.J("presentation snapshot contains a non-finite number",null,null)
B.df=new A.J("save contains a non-finite number",null,null)
B.dg=new A.J("text.json root must be an object",null,null)
B.dh=new A.J("event kind is empty",null,null)
B.di=new A.J("saved session clock is malformed",null,null)
B.dj=new A.J("rupture mantle IDs are malformed",null,null)
B.dk=new A.J("saved sleep record has an unknown enum",null,null)
B.dl=new A.J("save root must be an object",null,null)
B.dm=new A.J("render capabilities contain invalid limits",null,null)
B.dn=new A.J("saved house overrides are malformed",null,null)
B.bf=new A.d6(0,0,0)
B.ec=s([],t.dQ)
B.hh=s([],A.at("p<e8>"))
B.dp=new A.hA(B.bf,0,1,B.bg,0,null,B.ec)
B.dq=new A.dX(0,"idle")
B.ak=new A.dX(1,"active")
B.dr=new A.dX(2,"ended")
B.b4=new A.dY(0,"outside")
B.ds=new A.dY(1,"intersects")
B.dt=new A.dY(2,"inside")
B.du=new A.cZ(0,"timeAdvanced")
B.dv=new A.cZ(1,"dayEndReached")
B.dw=new A.cZ(4,"slept")
B.dx=new A.cZ(5,"complianceFloorTripped")
B.dy=new A.eN(0,"vertex")
B.b5=new A.eN(1,"indices")
B.b6=new A.hE(0,"staticDraw")
B.f=new A.eO(0,"ready")
B.M=new A.eO(1,"lost")
B.dz=new A.d_(0,"color")
B.b7=new A.d_(1,"colorAndGlow")
B.dA=new A.d_(2,"colorDepthGlow")
B.al=new A.d_(3,"depthOnly")
B.V=new A.hG(1,"linear")
B.b8=new A.hH(0,"clampToEdge")
B.dB=new A.hF(1,1,1,!1,B.V,B.V,B.b8)
B.dC=new A.c7(0,"beforeShadow")
B.dD=new A.c7(2,"beforeDepth")
B.b9=new A.c7(3,"afterDepth")
B.ba=new A.c7(4,"beforeWorld")
B.z=new A.c7(6,"afterResolve")
B.dE=new A.c7(9,"beforePresent")
B.bb=new A.bK(0,"readBeforeWrite")
B.dF=new A.bK(1,"duplicateWriter")
B.dG=new A.bK(2,"sampledMultisampledAttachment")
B.dH=new A.bK(4,"formatOrSizeMismatch")
B.dI=new A.bK(5,"unversionedReadWrite")
B.dJ=new A.bK(6,"invalidHistoryRead")
B.dK=new A.bK(7,"dependencyCycle")
B.dL=new A.bK(8,"missingCapability")
B.W=new A.cu(0,"player")
B.am=new A.cu(1,"inserted")
B.bc=new A.cu(2,"warden")
B.bd=new A.d1(0,"wrongKind")
B.be=new A.d1(1,"staleGeneration")
B.dM=new A.d1(2,"doubleRelease")
B.an=new A.d1(3,"releasedResource")
B.dP=new A.hN(1,"visitor")
B.dT=new A.ll(null)
B.dU=new A.lm(null)
B.dV=new A.d6(0.03,0.03,0.04)
B.bh=s([0,2,2,3],t.t)
B.dW=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cm=new A.cr()
B.cn=new A.cr()
B.co=new A.cr()
B.cp=new A.cr()
B.cq=new A.cr()
B.dX=s([B.cm,B.cn,B.co,B.cp,B.cq],t.hS)
B.dY=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.r=s(["who","verb","object","place","time"],t.s)
B.dZ=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightRange","uLightInnerCos","uLightOuterCos","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity"],t.s)
B.e_=s([2,5,9,12,16,19],t.t)
B.e0=s(["uQuantizationBits","uDitherStrength"],t.s)
B.e1=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.e2=s([B.R,B.aW,B.aX,B.aY,B.L],A.at("p<aW>"))
B.e3=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.P=new A.bh(0,"full")
B.aL=new A.bh(1,"compressed")
B.aM=new A.bh(2,"off")
B.bi=s([B.P,B.aL,B.aM],A.at("p<bh>"))
B.e4=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.e5=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.e6=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fg=new A.b0(0,"long")
B.c5=new A.b0(1,"short")
B.bj=s([B.fg,B.c5],A.at("p<b0>"))
B.e7=s([2.1,4.2,6.3],t.n)
B.e8=s(["res/house/house.json","assets/house/house.json"],t.s)
B.x=new A.bx(0,"inactive")
B.ax=new A.bx(2,"affineWarp")
B.ay=new A.bx(3,"vertexSnap")
B.az=new A.bx(4,"tapeGiveup")
B.aA=new A.bx(5,"portalFail")
B.H=new A.bx(6,"lightsOut")
B.bk=s([B.x,B.O,B.ax,B.ay,B.az,B.aA,B.H],A.at("p<bx>"))
B.e9=s([B.W,B.am,B.bc],A.at("p<cu>"))
B.A=s([],t.hS)
B.ef=s([],t.cs)
B.ao=s([],t.x)
B.eb=s([],t.bz)
B.eg=s([],t.u)
B.bl=s([],t.e_)
B.ea=s([],t.b2)
B.l=s([],t.s)
B.bm=s([],t.cF)
B.bn=s([],t.E)
B.ed=s([],t.t)
B.ee=s([],t.dG)
B.dO=new A.eQ(15,"kitchen",-0.3,0)
B.dN=new A.eQ(19,"spare-room",0,0.3)
B.B=s([B.dO,B.dN],A.at("p<eQ>"))
B.fd=new A.aR(0,"bed")
B.fe=new A.aR(1,"chair")
B.ff=new A.aR(2,"floor")
B.bo=s([B.fd,B.fe,B.ff],A.at("p<aR>"))
B.bp=s([B.i,B.v,B.m,B.G],A.at("p<ct>"))
B.aB=new A.az(0,"depthTest")
B.aC=new A.az(1,"depthFunc")
B.aD=new A.az(2,"depthWrite")
B.aE=new A.az(3,"blendEnable")
B.aF=new A.az(4,"blendFunc")
B.aG=new A.az(5,"blendEquation")
B.aH=new A.az(6,"cullEnable")
B.aI=new A.az(7,"cullFace")
B.c8=new A.az(8,"frontFace")
B.fh=new A.az(9,"stencilEnable")
B.c6=new A.az(10,"colorMask")
B.c7=new A.az(11,"scissorEnable")
B.eh=s([B.aB,B.aC,B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.c8,B.fh,B.c6,B.c7],A.at("p<az>"))
B.ei=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.ej=s(["uBloomStrength"],t.s)
B.ek=s(["uLutSize","uStrength"],t.s)
B.el=s([B.aZ,B.b_,B.b0],A.at("p<bv>"))
B.em=s(["wall-plaster","grime"],t.s)
B.en=s(["uTexelSize","uNear","uFar"],t.s)
B.bq=s(["uTexelStep"],t.s)
B.eo=s(["uninitialized"],t.s)
B.J=new A.bg(0,"waiting")
B.a4=new A.bg(1,"atDoor")
B.a5=new A.bg(2,"consulting")
B.a6=new A.bg(3,"resolved")
B.ep=s([B.J,B.a4,B.a5,B.a6],A.at("p<bg>"))
B.eO={uAlbedo:0}
B.br=new A.a1(B.eO,[0],t.I)
B.eE={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.bs=new A.a1(B.eE,[2,3,4,5,6],t.I)
B.eX={uAlbedo:0,uShadowMap:1,uSsao:2}
B.eq=new A.a1(B.eX,[0,1,2],t.I)
B.eV={uSsaoRaw:0,uSceneDepth:1}
B.er=new A.a1(B.eV,[0,1],t.I)
B.eS={uScene:0,uHistory:1}
B.es=new A.a1(B.eS,[0,1],t.I)
B.eF={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.et=new A.a1(B.eF,["e81ac167594e3b48012c9911d2f429a8a4af04fd","c3dfdcaef8d620f112aecf2f9860f50076306012","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.B)
B.eL={aPosition:0,aUvMat:1}
B.bt=new A.a1(B.eL,[0,4],t.I)
B.eT={uScene:0,uLut:1}
B.eu=new A.a1(B.eT,[0,1],t.I)
B.eU={uSource:0}
B.bu=new A.a1(B.eU,[0],t.I)
B.eJ={uSharp:0,uBlurred:1,uSceneDepth:2}
B.ev=new A.a1(B.eJ,[0,1,2],t.I)
B.eP={uBloom:0}
B.ew=new A.a1(B.eP,[0],t.I)
B.eQ={uSceneDepth:0}
B.ex=new A.a1(B.eQ,[0],t.I)
B.eR={uScene:0}
B.ey=new A.a1(B.eR,[0],t.I)
B.X={}
B.bv=new A.a1(B.X,[],t.B)
B.p=new A.a1(B.X,[],t.I)
B.ez=new A.a1(B.X,[],A.at("a1<@,@>"))
B.eK={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.bw=new A.a1(B.eK,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.B)
B.eM={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.eA=new A.a1(B.eM,[0,1,2,3],t.I)
B.eG={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.eB=new A.a1(B.eG,[0,1,2,3,4],t.I)
B.eW={uTex:0}
B.eC=new A.a1(B.eW,[0],t.I)
B.aq=new A.eM([B.O,1,B.ax,1.5,B.ay,1.5,B.az,2,B.aA,2,B.H,4],A.at("eM<bx,t>"))
B.eY=new A.i9(0,1,null)
B.eZ=new A.id(1,0,0,0,8,0,0,0,0,0,0,!1)
B.ar=new A.dd(0,"safe")
B.as=new A.dd(1,"standard")
B.at=new A.dd(2,"high")
B.D=new A.c5(B.X,0,t.R)
B.Y=new A.dc(B.ar,B.D)
B.eN={shadows:0}
B.fb=new A.c5(B.eN,1,t.R)
B.f0=new A.dc(B.as,B.fb)
B.eH={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.f8=new A.c5(B.eH,5,t.R)
B.f1=new A.dc(B.at,B.f8)
B.f_=new A.dd(4,"shipping")
B.eI={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.f9=new A.c5(B.eI,7,t.R)
B.hi=new A.dc(B.f_,B.f9)
B.Z=new A.f9(0,"legacy")
B.bz=new A.de(0,"constructed")
B.t=new A.de(1,"ready")
B.a0=new A.de(2,"lost")
B.bA=new A.de(3,"disposed")
B.hf=new A.hj(1,"srgb")
B.hg=new A.hs(1,"errorsOnly")
B.f2=new A.ij(B.Y,384,216,0)
B.au=new A.df(0,"constructed")
B.f3=new A.df(1,"initializing")
B.av=new A.df(2,"ready")
B.bB=new A.df(3,"contextLost")
B.h=new A.e5(0,"read")
B.j=new A.e5(1,"write")
B.C=new A.e5(2,"historyRead")
B.n=new A.fb(0,"rgba8")
B.bD=new A.aI("dofBlurH",B.n,192,108,1,0)
B.bE=new A.aI("dofBlurV",B.n,192,108,1,0)
B.bF=new A.aI("dofOutput",B.n,384,216,1,0)
B.bJ=new A.aI("gradeOutput",B.n,384,216,1,0)
B.aw=new A.aI("vhsOutput",B.n,384,216,1,0)
B.bK=new A.aI("bloomBlurH",B.n,192,108,1,0)
B.bL=new A.aI("bloomBlurV",B.n,192,108,1,0)
B.N=new A.aI("sceneColor",B.n,384,216,1,0)
B.bM=new A.aI("ps1Output",B.n,384,216,1,0)
B.bI=new A.aI("ssaoBlurred",B.n,192,108,1,0)
B.bN=new A.L(B.bI,B.j)
B.bH=new A.aI("ssaoRaw",B.n,192,108,1,0)
B.bO=new A.L(B.bH,B.j)
B.a1=new A.L(B.N,B.j)
B.bP=new A.L(B.aw,B.j)
B.bQ=new A.L(B.aw,B.C)
B.bR=new A.L(B.bJ,B.j)
B.bC=new A.fb(2,"depth24")
B.bG=new A.aI("shadowMap",B.bC,512,512,1,0)
B.bS=new A.L(B.bG,B.j)
B.bT=new A.L(B.bF,B.j)
B.bU=new A.L(B.bH,B.h)
B.bV=new A.L(B.N,B.h)
B.f4=new A.aI("sceneDepth",B.bC,384,216,1,0)
B.bW=new A.L(B.f4,B.j)
B.bX=new A.L(B.bG,B.h)
B.bY=new A.L(B.bM,B.j)
B.bZ=new A.L(B.bE,B.h)
B.c_=new A.L(B.bI,B.h)
B.c0=new A.L(B.bL,B.h)
B.f5=new A.dg(null,"save storage unavailable")
B.f6=new A.dg(null,"save could not be recovered")
B.f7=new A.dg(null,null)
B.eD={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.fa=new A.c5(B.eD,9,t.R)
B.c3=new A.dh(2,"link")
B.fc=new A.fe(B.c3,"gl.createProgram() returned null")
B.c1=new A.dh(0,"vertex")
B.c2=new A.dh(1,"fragment")
B.c4=new A.dh(3,"validation")
B.fi=A.bG("xX")
B.fj=A.bG("xY")
B.fk=A.bG("kB")
B.fl=A.bG("u5")
B.fm=A.bG("uc")
B.fn=A.bG("ud")
B.fo=A.bG("ue")
B.fp=A.bG("U")
B.fq=A.bG("E")
B.fr=A.bG("p3")
B.fs=A.bG("uW")
B.ft=A.bG("uX")
B.fu=A.bG("fi")
B.e=new A.cC(0,"float1")
B.c9=new A.cC(1,"float2")
B.E=new A.cC(2,"float3")
B.o=new A.cC(3,"mat4")
B.aJ=new A.cC(4,"sampler")
B.F=new A.C(B.aJ,0)
B.a2=new A.C(B.aJ,1)
B.ca=new A.C(B.aJ,2)
B.fv=new A.mM(!1)
B.fw=new A.A(0,0,1)
B.fx=new A.A(1,0,0)
B.fy=new A.A(1/0,1/0,1/0)
B.fz=new A.A(-1/0,-1/0,-1/0)
B.fM=new A.cE(0,"visitorAnswered")
B.cb=new A.cE(1,"visitorIgnored")
B.fN=new A.cE(2,"entryVerified")
B.fO=new A.cE(3,"entryContradicted")
B.fP=new A.cE(4,"exposureAccepted")
B.fR=new A.bZ(1,"malformedDay")
B.fS=new A.bZ(2,"malformedTier")
B.cc=new A.bZ(3,"missingTierLines")
B.aN=new A.bZ(6,"invalidPhase")
B.fY=new A.bi(B.aN,"The active visit cannot be chosen.")
B.h0=new A.b2(B.fY)
B.fV=new A.bi(B.aN,"The active visit has no line to advance.")
B.h1=new A.b2(B.fV)
B.fU=new A.bZ(5,"noActiveVisit")
B.fW=new A.bi(B.fU,"There is no active visit.")
B.cd=new A.b2(B.fW)
B.fX=new A.bi(B.aN,"A visit is already active.")
B.h2=new A.b2(B.fX)
B.fT=new A.bZ(4,"noArrival")
B.h_=new A.bi(B.fT,"The authored arrival is missing.")
B.h3=new A.b2(B.h_)
B.fQ=new A.bZ(0,"missingCorpus")
B.fZ=new A.bi(B.fQ,"The authored visitor corpus is empty.")
B.h4=new A.b2(B.fZ)
B.ce=new A.dq(1,"exact")
B.aO=new A.dq(2,"partial")
B.a7=new A.dq(3,"contradiction")
B.h5=new A.dq(0,"skipped")
B.h6=new A.dp(B.h5,B.D)
B.h7=new A.dp(B.aO,B.D)
B.cf=new A.fq(0,"horizontal")
B.h8=new A.fq(1,"vertical")
B.cg=new A.fs(0,"horizontal")
B.h9=new A.fs(1,"vertical")
B.a8=new A.ek(0,"empty")
B.ha=new A.ek(1,"cpuReady")
B.a9=new A.ek(4,"released")})();(function staticFields(){$.nj=null
$.br=A.e([],A.at("p<E>"))
$.qn=null
$.lS=0
$.lT=A.wF()
$.pX=null
$.pW=null
$.rS=null
$.rM=null
$.rW=null
$.oh=null
$.oo=null
$.pL=null
$.nq=A.e([],A.at("p<D<E>?>"))
$.et=null
$.fZ=null
$.h_=null
$.pu=!1
$.a5=B.q
$.qC=""
$.qD=null
$.qy=null
$.lI=null
$.bC=A.a8()
$.cn=A.a8()
$.c1=null
$.jy=null
$.M=A.a8()
$.bD=A.a8()
$.bl=A.a8()
$.r9=A.a8()
$.eu=null
$.a9=A.a8()
$.nI=null
$.dz=A.a8()
$.Z=A.a8()
$.pk=A.a8()
$.pq=null
$.fX=null
$.pl=!1
$.py=!1
$.pw=!1
$.rp=!1
$.pv=0
$.rv=0
$.nB=0
$.rL=!1
$.rg="booting"
$.c2=0
$.dA=0
$.aT="hall"
$.fV=A.a8()
$.eo=A.a8()
$.b4=A.a8()
$.ru=null
$.pz=0
$.b5=null
$.ep=A.a8()
$.ju=A.a8()
$.ra=A.a8()
$.r8=A.a8()
$.aA=A.a8()
$.jv=A.a8()
$.jt=A.a8()
$.pj=A.a8()
$.aB=A.a8()
$.js=A.a8()
$.pi=A.a8()
$.oa=A.a7(t.S)
$.cM=A.e([],t.s)
$.pp=null
$.rG=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"y_","t4",()=>A.rR("_$dart_dartClosure"))
s($,"xZ","eA",()=>A.rR("_$dart_dartClosure_dartJSInterop"))
s($,"yo","tm",()=>A.e([new J.hQ()],A.at("p<fd>")))
s($,"y6","t6",()=>A.ci(A.mH({
toString:function(){return"$receiver$"}})))
s($,"y7","t7",()=>A.ci(A.mH({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"y8","t8",()=>A.ci(A.mH(null)))
s($,"y9","t9",()=>A.ci(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yc","tc",()=>A.ci(A.mH(void 0)))
s($,"yd","td",()=>A.ci(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yb","tb",()=>A.ci(A.qz(null)))
s($,"ya","ta",()=>A.ci(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"yf","tf",()=>A.ci(A.qz(void 0)))
s($,"ye","te",()=>A.ci(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"yg","pQ",()=>A.vc())
s($,"yk","tj",()=>A.ur(4096))
s($,"yi","th",()=>new A.nz().$0())
s($,"yj","ti",()=>new A.ny().$0())
s($,"yh","tg",()=>new Int8Array(A.a_(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"ym","jI",()=>A.jH(B.fq))
s($,"y4","pP",()=>{A.uF()
return $.lS})
s($,"xW","oL",()=>new A.aI("sceneColor",B.n,384,216,1,1))
s($,"y0","t5",()=>A.us(A.e([255,255,255,255],t.t)))
s($,"yp","tn",()=>A.iF(0,1,0))
s($,"ys","jL",()=>{var q=$.qy
if(q==null){A.jE()
A.jE()
A.jE()
A.jE()
A.jE()
q=$.qy=new A.mz()}return q})
s($,"yl","tk",()=>new A.k5())
r($,"pE","eB",()=>A.iF(0,0,0))
r($,"px","tl",()=>A.iF(0,0,0))
r($,"pG","jK",()=>A.iF(0,0,0))
s($,"yn","jJ",()=>new A.kC(A.iF(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cx,ArrayBuffer:A.e2,ArrayBufferView:A.f0,DataView:A.i1,Float32Array:A.eY,Float64Array:A.i2,Int16Array:A.i3,Int32Array:A.i4,Int8Array:A.i5,Uint16Array:A.i6,Uint32Array:A.i7,Uint8ClampedArray:A.da,CanvasPixelArray:A.da,Uint8Array:A.f1})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ax.$nativeSuperclassTag="ArrayBufferView"
A.fA.$nativeSuperclassTag="ArrayBufferView"
A.fB.$nativeSuperclassTag="ArrayBufferView"
A.eZ.$nativeSuperclassTag="ArrayBufferView"
A.fC.$nativeSuperclassTag="ArrayBufferView"
A.fD.$nativeSuperclassTag="ArrayBufferView"
A.f_.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.op
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()