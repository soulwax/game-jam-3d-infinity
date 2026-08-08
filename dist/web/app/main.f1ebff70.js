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
if(a[b]!==s){A.xO(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.pD(b)
return new s(c,this)}:function(){if(s===null)s=A.pD(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.pD(a).prototype
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
pI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
oi(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.pG==null){A.xt()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.qw("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.nh
if(o==null)o=$.nh=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.xz(a)
if(p!=null)return p
if(typeof a=="function")return B.dR
s=Object.getPrototypeOf(a)
if(s==null)return B.bx
if(s===Object.prototype)return B.bx
if(typeof q=="function"){o=$.nh
if(o==null)o=$.nh=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aJ,enumerable:false,writable:true,configurable:true})
return B.aJ}return B.aJ},
q5(a,b){if(a<0||a>4294967295)throw A.b(A.aH(a,0,4294967295,"length",null))
return J.uf(new Array(a),b)},
q6(a,b){if(a<0)throw A.b(A.v("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.h("p<0>"))},
hO(a,b){if(a<0)throw A.b(A.v("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.h("p<0>"))},
uf(a,b){var s=A.d(a,b.h("p<0>"))
s.$flags=1
return s},
ug(a,b){var s=t.bP
return J.pN(s.a(a),s.a(b))},
q9(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
uh(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.q9(r))break;++b}return b},
ui(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.q9(q))break}return b},
dB(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eP.prototype
return J.hQ.prototype}if(typeof a=="string")return J.d4.prototype
if(a==null)return J.eQ.prototype
if(typeof a=="boolean")return J.hP.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
if(typeof a=="symbol")return J.dZ.prototype
if(typeof a=="bigint")return J.dY.prototype
return a}if(a instanceof A.D)return a
return J.oi(a)},
bn(a){if(typeof a=="string")return J.d4.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
if(typeof a=="symbol")return J.dZ.prototype
if(typeof a=="bigint")return J.dY.prototype
return a}if(a instanceof A.D)return a
return J.oi(a)},
bP(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
if(typeof a=="symbol")return J.dZ.prototype
if(typeof a=="bigint")return J.dY.prototype
return a}if(a instanceof A.D)return a
return J.oi(a)},
xp(a){if(typeof a=="number")return J.d3.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.di.prototype
return a},
rO(a){if(typeof a=="number")return J.d3.prototype
if(typeof a=="string")return J.d4.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.di.prototype
return a},
xq(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c7.prototype
if(typeof a=="symbol")return J.dZ.prototype
if(typeof a=="bigint")return J.dY.prototype
return a}if(a instanceof A.D)return a
return J.oi(a)},
pM(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.rO(a).a0(a,b)},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dB(a).U(a,b)},
aL(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.xx(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bn(a).i(a,b)},
bQ(a,b,c){return J.bP(a).l(a,b,c)},
h0(a,b){return J.bP(a).k(a,b)},
tm(a,b){return J.bP(a).I(a,b)},
tn(a,b){return J.bP(a).a5(a,b)},
to(a,b,c){return J.xq(a).eT(a,b,c)},
tp(a,b){return J.bP(a).bO(a,b)},
pN(a,b){return J.rO(a).F(a,b)},
jK(a,b){return J.bP(a).S(a,b)},
b7(a){return J.dB(a).gE(a)},
pO(a){return J.bn(a).gG(a)},
tq(a){return J.bn(a).gL(a)},
H(a){return J.bP(a).gt(a)},
aM(a){return J.bn(a).gq(a)},
dD(a){return J.dB(a).gM(a)},
dE(a,b,c){return J.bP(a).bv(a,b,c)},
tr(a,b){return J.bn(a).sq(a,b)},
ts(a,b){return J.bP(a).X(a,b)},
oL(a,b){return J.xp(a).l2(a,b)},
dF(a){return J.dB(a).n(a)},
tt(a,b){return J.bP(a).dP(a,b)},
hL:function hL(){},
hP:function hP(){},
eQ:function eQ(){},
eR:function eR(){},
cu:function cu(){},
i7:function i7(){},
di:function di(){},
c7:function c7(){},
dY:function dY(){},
dZ:function dZ(){},
p:function p(a){this.$ti=a},
hN:function hN(){},
l9:function l9(a){this.$ti=a},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d3:function d3(){},
eP:function eP(){},
hQ:function hQ(){},
d4:function d4(){}},A={oN:function oN(){},
jC(){return $},
tA(a,b,c){if(t.gt.b(a))return new A.fr(a,b.h("@<0>").D(c).h("fr<1,2>"))
return new A.cS(a,b.h("@<0>").D(c).h("cS<1,2>"))},
qc(a){return new A.d5("Field '"+a+"' has been assigned during initialization.")},
aw(a){return new A.d5("Field '"+a+"' has not been initialized.")},
uk(a){return new A.d5("Field '"+a+"' has already been initialized.")},
oj(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cf(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mw(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dA(a,b,c){return a},
pH(a){var s,r
for(s=$.bm.length,r=0;r<s;++r)if(a===$.bm[r])return!0
return!1},
mv(a,b,c,d){A.ie(b,"start")
if(c!=null){A.ie(c,"end")
if(b>c)A.k(A.aH(b,0,c,"start",null))}return new A.fg(a,b,c,d.h("fg<0>"))},
hV(a,b,c,d){if(t.gt.b(a))return new A.cV(a,b,c.h("@<0>").D(d).h("cV<1,2>"))
return new A.ca(a,b,c.h("@<0>").D(d).h("ca<1,2>"))},
hM(){return new A.e7("No element")},
ud(){return new A.e7("Too many elements")},
io(a,b,c,d,e){if(c-b<=32)A.uO(a,b,c,d,e)
else A.uN(a,b,c,d,e)},
uO(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.bn(a);s<=c;++s){q=r.i(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.a3()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.i(a,n))
p=n}r.l(a,p,q)}},
uN(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.K(a4+a5,2),f=g-j,e=g+j,d=J.bn(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
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
p=J.ab(a6.$2(b,a0),0)
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
A.io(a3,a4,r-2,a6,a7)
A.io(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.ab(a6.$2(d.i(a3,r),b),0))++r
while(J.ab(a6.$2(d.i(a3,q),a0),0))--q
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
break}}A.io(a3,r,q,a6,a7)}else A.io(a3,r,q,a6,a7)},
cG:function cG(){},
eB:function eB(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b){this.a=a
this.$ti=b},
fr:function fr(a,b){this.a=a
this.$ti=b},
fp:function fp(){},
n2:function n2(a,b){this.a=a
this.b=b},
bE:function bE(a,b){this.a=a
this.$ti=b},
d5:function d5(a){this.a=a},
hg:function hg(a){this.a=a},
ml:function ml(){},
A:function A(){},
a3:function a3(){},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ca:function ca(a,b,c){this.a=a
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
a_:function a_(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
bJ:function bJ(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b){this.a=a
this.$ti=b},
ac:function ac(){},
bX:function bX(){},
e9:function e9(){},
fb:function fb(a,b){this.a=a
this.$ti=b},
fS:function fS(){},
dQ(a,b,c){var s,r,q,p,o,n,m,l=A.aX(a.gN(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.i(0,r))
o=p+1
q[r]=p}n=A.aX(a.gam(),!0,c)
m=new A.a1(q,n,b.h("@<0>").D(c).h("a1<1,2>"))
m.$keys=l
return m}return new A.eD(A.aO(a,b,c),b.h("@<0>").D(c).h("eD<1,2>"))},
tG(){throw A.b(A.as("Cannot modify unmodifiable Map"))},
tH(){throw A.b(A.as("Cannot modify constant Set"))},
t1(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xx(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dF(a)
return s},
f5(a){var s,r=$.qj
if(r==null)r=$.qj=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
lP(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
ic(a){var s,r,q,p
if(a instanceof A.D)return A.bl(A.b6(a),null)
s=J.dB(a)
if(s===B.dQ||s===B.dS||t.cx.b(a)){r=B.aO(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bl(A.b6(a),null)},
qk(a){var s,r,q
if(a==null||typeof a=="number"||A.bA(a))return J.dF(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cp)return a.n(0)
if(a instanceof A.bv)return a.eM(!0)
s=$.tk()
for(r=0;r<1;++r){q=s[r].l4(a)
if(q!=null)return q}return"Instance of '"+A.ic(a)+"'"},
uu(){return Date.now()},
uD(){var s,r
if($.lQ!==0)return
$.lQ=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.lQ=1e6
$.lR=new A.lO(r)},
ut(){if(!!self.location)return self.location.href
return null},
uE(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ad(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cG(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aH(a,0,1114111,null,null))},
e1(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
uC(a){var s=A.e1(a).getUTCFullYear()+0
return s},
uA(a){var s=A.e1(a).getUTCMonth()+1
return s},
uw(a){var s=A.e1(a).getUTCDate()+0
return s},
ux(a){var s=A.e1(a).getUTCHours()+0
return s},
uz(a){var s=A.e1(a).getUTCMinutes()+0
return s},
uB(a){var s=A.e1(a).getUTCSeconds()+0
return s},
uy(a){var s=A.e1(a).getUTCMilliseconds()+0
return s},
uv(a){var s=a.$thrownJsError
if(s==null)return null
return A.c2(s)},
ql(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.al(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
jE(a){throw A.b(A.pC(a))},
c(a,b){if(a==null)J.aM(a)
throw A.b(A.of(a,b))},
of(a,b){var s,r="index"
if(!A.aT(b))return new A.bD(!0,b,r,null)
s=A.a(J.aM(a))
if(b<0||b>=s)return A.l6(b,s,a,r)
return A.uF(b,r)},
xj(a,b,c){if(a>c)return A.aH(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aH(b,a,c,"end",null)
return new A.bD(!0,b,"end",null)},
pC(a){return new A.bD(!0,a,null,null)},
b(a){return A.al(a,new Error())},
al(a,b){var s
if(a==null)a=new A.cg()
b.dartException=a
s=A.xQ
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
xQ(){return J.dF(this.dartException)},
k(a,b){throw A.al(a,b==null?new Error():b)},
bp(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.w6(a,b,c),s)},
w6(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fi("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.b(A.am(a))},
ch(a){var s,r,q,p,o,n
a=A.rV(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.mE(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
mF(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
qv(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
oO(a,b){var s=b==null,r=s?null:b.method
return new A.hR(a,r,s?null:b.receiver)},
ag(a){var s
if(a==null)return new A.lC(a)
if(a instanceof A.eI){s=a.a
return A.cP(a,s==null?A.ep(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cP(a,a.dartException)
return A.wV(a)},
cP(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
wV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cG(r,16)&8191)===10)switch(q){case 438:return A.cP(a,A.oO(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.cP(a,new A.f1())}}if(a instanceof TypeError){p=$.t4()
o=$.t5()
n=$.t6()
m=$.t7()
l=$.ta()
k=$.tb()
j=$.t9()
$.t8()
i=$.td()
h=$.tc()
g=p.al(s)
if(g!=null)return A.cP(a,A.oO(A.E(s),g))
else{g=o.al(s)
if(g!=null){g.method="call"
return A.cP(a,A.oO(A.E(s),g))}else if(n.al(s)!=null||m.al(s)!=null||l.al(s)!=null||k.al(s)!=null||j.al(s)!=null||m.al(s)!=null||i.al(s)!=null||h.al(s)!=null){A.E(s)
return A.cP(a,new A.f1())}}return A.cP(a,new A.iy(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fe()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cP(a,new A.bD(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fe()
return a},
c2(a){var s
if(a instanceof A.eI)return a.b
if(a==null)return new A.fF(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fF(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jF(a){if(a==null)return J.b7(a)
if(typeof a=="object")return A.f5(a)
return J.b7(a)},
xd(a){if(typeof a=="number")return B.d.gE(a)
if(a instanceof A.jm)return A.f5(a)
if(a instanceof A.bv)return a.gE(a)
return A.jF(a)},
rN(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
xo(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
wq(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dT("Unsupported number of arguments for wrapped closure"))},
ew(a,b){var s=a.$identity
if(!!s)return s
s=A.xe(a,b)
a.$identity=s
return s},
xe(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.wq)},
tF(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ir().constructor.prototype):Object.create(new A.dM(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.pU(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.tB(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.pU(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
tB(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ty)}throw A.b("Error in functionType of tearoff")},
tC(a,b,c,d){var s=A.pT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
pU(a,b,c,d){if(c)return A.tE(a,b,d)
return A.tC(b.length,d,a,b)},
tD(a,b,c,d){var s=A.pT,r=A.tz
switch(b?-1:a){case 0:throw A.b(new A.ij("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
tE(a,b,c){var s,r
if($.pR==null)$.pR=A.pQ("interceptor")
if($.pS==null)$.pS=A.pQ("receiver")
s=b.length
r=A.tD(s,c,a,b)
return r},
pD(a){return A.tF(a)},
ty(a,b){return A.fK(v.typeUniverse,A.b6(a.a),b)},
pT(a){return a.a},
tz(a){return a.b},
pQ(a){var s,r,q,p=new A.dM("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.v("Field name "+a+" not found.",null))},
rP(a){return v.getIsolateTag(a)},
rY(){return v.G},
yl(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
xz(a){var s,r,q,p,o,n=A.E($.rQ.$1(a)),m=$.og[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.on[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bz($.rK.$2(a,n))
if(q!=null){m=$.og[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.on[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.oC(s)
$.og[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.on[n]=s
return s}if(p==="-"){o=A.oC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.rT(a,s)
if(p==="*")throw A.b(A.qw(n))
if(v.leafTags[n]===true){o=A.oC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.rT(a,s)},
rT(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.pI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
oC(a){return J.pI(a,!1,null,!!a.$ibb)},
xD(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.oC(s)
else return J.pI(s,c,null,null)},
xt(){if(!0===$.pG)return
$.pG=!0
A.xu()},
xu(){var s,r,q,p,o,n,m,l
$.og=Object.create(null)
$.on=Object.create(null)
A.xs()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.rU.$1(o)
if(n!=null){m=A.xD(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
xs(){var s,r,q,p,o,n,m=B.cs()
m=A.ev(B.ct,A.ev(B.cu,A.ev(B.aP,A.ev(B.aP,A.ev(B.cv,A.ev(B.cw,A.ev(B.cx(B.aO),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.rQ=new A.ok(p)
$.rK=new A.ol(o)
$.rU=new A.om(n)},
ev(a,b){return a(b)||b},
vo(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.ab(r,b[s]))return!1}return!0},
xg(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xL(a,b,c){var s=a.indexOf(b,c)
return s>=0},
xm(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
rV(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xM(a,b,c){var s=A.xN(a,b,c)
return s},
xN(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.rV(b),"g"),A.xm(c))},
eg:function eg(a,b){this.a=a
this.b=b},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a){this.a=a},
eD:function eD(a,b){this.a=a
this.$ti=b},
dP:function dP(){},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
dt:function dt(a,b){this.a=a
this.$ti=b},
du:function du(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eK:function eK(a,b){this.a=a
this.$ti=b},
eE:function eE(){},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
lO:function lO(a){this.a=a},
fc:function fc(){},
mE:function mE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f1:function f1(){},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
lC:function lC(a){this.a=a},
eI:function eI(a,b){this.a=a
this.b=b},
fF:function fF(a){this.a=a
this.b=null},
cp:function cp(){},
he:function he(){},
hf:function hf(){},
iu:function iu(){},
ir:function ir(){},
dM:function dM(a,b){this.a=a
this.b=b},
ij:function ij(a){this.a=a},
br:function br(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
li:function li(a){this.a=a},
lq:function lq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ai:function ai(a,b){this.a=a
this.$ti=b},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
X:function X(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eS:function eS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ok:function ok(a){this.a=a},
ol:function ol(a){this.a=a},
om:function om(a){this.a=a},
bv:function bv(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
xO(a){throw A.al(A.qc(a),new Error())},
j(){throw A.al(A.aw(""),new Error())},
x(){throw A.al(A.uk(""),new Error())},
t0(){throw A.al(A.qc(""),new Error())},
a9(){var s=new A.n3()
return s.b=s},
n3:function n3(){this.b=null},
a0(a){return a},
uo(a,b,c){return new Float32Array(a,b,c)},
up(a){return new Uint8Array(a)},
uq(a){return new Uint8Array(a)},
cm(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.of(b,a))},
w_(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.xj(a,b,c))
return b},
cx:function cx(){},
e0:function e0(){},
eZ:function eZ(){},
nv:function nv(a){this.a=a},
hZ:function hZ(){},
ax:function ax(){},
eX:function eX(){},
eY:function eY(){},
eW:function eW(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
f_:function f_(){},
f0:function f0(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
oY(a,b){var s=b.c
return s==null?b.c=A.fI(a,"b9",[b.x]):s},
qn(a){var s=a.w
if(s===6||s===7)return A.qn(a.x)
return s===11||s===12},
uL(a){return a.as},
xE(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
at(a){return A.nu(v.typeUniverse,a,!1)},
dz(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dz(a1,s,a3,a4)
if(r===s)return a2
return A.qW(a1,r,!0)
case 7:s=a2.x
r=A.dz(a1,s,a3,a4)
if(r===s)return a2
return A.qV(a1,r,!0)
case 8:q=a2.y
p=A.eu(a1,q,a3,a4)
if(p===q)return a2
return A.fI(a1,a2.x,p)
case 9:o=a2.x
n=A.dz(a1,o,a3,a4)
m=a2.y
l=A.eu(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.p8(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eu(a1,j,a3,a4)
if(i===j)return a2
return A.qX(a1,k,i)
case 11:h=a2.x
g=A.dz(a1,h,a3,a4)
f=a2.y
e=A.wR(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.qU(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eu(a1,d,a3,a4)
o=a2.x
n=A.dz(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.p9(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.h5("Attempted to substitute unexpected RTI kind "+a0))}},
eu(a,b,c,d){var s,r,q,p,o=b.length,n=A.nz(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dz(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
wS(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.nz(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dz(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
wR(a,b,c,d){var s,r=b.a,q=A.eu(a,r,c,d),p=b.b,o=A.eu(a,p,c,d),n=b.c,m=A.wS(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.j_()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
pE(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.xr(s)
return a.$S()}return null},
xv(a,b){var s
if(A.qn(b))if(a instanceof A.cp){s=A.pE(a)
if(s!=null)return s}return A.b6(a)},
b6(a){if(a instanceof A.D)return A.o(a)
if(Array.isArray(a))return A.P(a)
return A.pn(J.dB(a))},
P(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.pn(a)},
pn(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.wn(a,s)},
wn(a,b){var s=a instanceof A.cp?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.vx(v.typeUniverse,s.name)
b.$ccache=r
return r},
xr(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.nu(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jD(a){return A.c1(A.o(a))},
pA(a){var s
if(a instanceof A.bv)return a.ei()
s=a instanceof A.cp?A.pE(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dD(a).a
if(Array.isArray(a))return A.P(a)
return A.b6(a)},
c1(a){var s=a.r
return s==null?a.r=new A.jm(a):s},
xn(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.c(q,0)
s=A.fK(v.typeUniverse,A.pA(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.qY(v.typeUniverse,s,A.pA(q[r]))}return A.fK(v.typeUniverse,s,a)},
bB(a){return A.c1(A.nu(v.typeUniverse,a,!1))},
wm(a){var s=this
s.b=A.wO(s)
return s.b(a)},
wO(a){var s,r,q,p,o
if(a===t.K)return A.ww
if(A.dC(a))return A.wA
s=a.w
if(s===6)return A.wi
if(s===1)return A.rr
if(s===7)return A.wr
r=A.wN(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dC)){a.f="$i"+q
if(q==="C")return A.wu
if(a===t.m)return A.wt
return A.wz}}else if(s===10){p=A.xg(a.x,a.y)
o=p==null?A.rr:p
return o==null?A.ep(o):o}return A.wg},
wN(a){if(a.w===8){if(a===t.S)return A.aT
if(a===t.i||a===t.o)return A.wv
if(a===t.N)return A.wy
if(a===t.y)return A.bA}return null},
wl(a){var s=this,r=A.wf
if(A.dC(s))r=A.vX
else if(s===t.K)r=A.ep
else if(A.ex(s)){r=A.wh
if(s===t.aV)r=A.rc
else if(s===t.w)r=A.bz
else if(s===t.fU)r=A.vW
else if(s===t.jh)r=A.rd
else if(s===t.dA)r=A.rb
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.E
else if(s===t.y)r=A.aR
else if(s===t.o)r=A.eo
else if(s===t.i)r=A.fU
else if(s===t.m)r=A.f
s.a=r
return s.a(a)},
wg(a){var s=this
if(a==null)return A.ex(s)
return A.xy(v.typeUniverse,A.xv(a,s),s)},
wi(a){if(a==null)return!0
return this.x.b(a)},
wz(a){var s,r=this
if(a==null)return A.ex(r)
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.dB(a)[s]},
wu(a){var s,r=this
if(a==null)return A.ex(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.D)return!!a[s]
return!!J.dB(a)[s]},
wt(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.D)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
rq(a){if(typeof a=="object"){if(a instanceof A.D)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
wf(a){var s=this
if(a==null){if(A.ex(s))return a}else if(s.b(a))return a
throw A.al(A.ri(a,s),new Error())},
wh(a){var s=this
if(a==null||s.b(a))return a
throw A.al(A.ri(a,s),new Error())},
ri(a,b){return new A.fG("TypeError: "+A.qM(a,A.bl(b,null)))},
qM(a,b){return A.hv(a)+": type '"+A.bl(A.pA(a),null)+"' is not a subtype of type '"+b+"'"},
bw(a,b){return new A.fG("TypeError: "+A.qM(a,b))},
wr(a){var s=this
return s.x.b(a)||A.oY(v.typeUniverse,s).b(a)},
ww(a){return a!=null},
ep(a){if(a!=null)return a
throw A.al(A.bw(a,"Object"),new Error())},
wA(a){return!0},
vX(a){return a},
rr(a){return!1},
bA(a){return!0===a||!1===a},
aR(a){if(!0===a)return!0
if(!1===a)return!1
throw A.al(A.bw(a,"bool"),new Error())},
vW(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.al(A.bw(a,"bool?"),new Error())},
fU(a){if(typeof a=="number")return a
throw A.al(A.bw(a,"double"),new Error())},
rb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.al(A.bw(a,"double?"),new Error())},
aT(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.al(A.bw(a,"int"),new Error())},
rc(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.al(A.bw(a,"int?"),new Error())},
wv(a){return typeof a=="number"},
eo(a){if(typeof a=="number")return a
throw A.al(A.bw(a,"num"),new Error())},
rd(a){if(typeof a=="number")return a
if(a==null)return a
throw A.al(A.bw(a,"num?"),new Error())},
wy(a){return typeof a=="string"},
E(a){if(typeof a=="string")return a
throw A.al(A.bw(a,"String"),new Error())},
bz(a){if(typeof a=="string")return a
if(a==null)return a
throw A.al(A.bw(a,"String?"),new Error())},
f(a){if(A.rq(a))return a
throw A.al(A.bw(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.rq(a))return a
throw A.al(A.bw(a,"JSObject?"),new Error())},
rD(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bl(a[q],b)
return s},
wG(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.rD(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bl(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
rl(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.d([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.c(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bl(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bl(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bl(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bl(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bl(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bl(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bl(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bl(a.x,b)+">"
if(l===8){p=A.wU(a.x)
o=a.y
return o.length>0?p+("<"+A.rD(o,b)+">"):p}if(l===10)return A.wG(a,b)
if(l===11)return A.rl(a,b,null)
if(l===12)return A.rl(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
wU(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
vy(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
vx(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.nu(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fJ(a,5,"#")
q=A.nz(s)
for(p=0;p<s;++p)q[p]=r
o=A.fI(a,b,q)
n[b]=o
return o}else return m},
vw(a,b){return A.r5(a.tR,b)},
vv(a,b){return A.r5(a.eT,b)},
nu(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.qR(A.qP(a,null,b,!1))
r.set(b,s)
return s},
fK(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.qR(A.qP(a,b,c,!0))
q.set(c,r)
return r},
qY(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.p8(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cK(a,b){b.a=A.wl
b.b=A.wm
return b},
fJ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bG(null,null)
s.w=b
s.as=c
r=A.cK(a,s)
a.eC.set(c,r)
return r},
qW(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.vt(a,b,r,c)
a.eC.set(r,s)
return s},
vt(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dC(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.ex(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.bG(null,null)
q.w=6
q.x=b
q.as=c
return A.cK(a,q)},
qV(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.vr(a,b,r,c)
a.eC.set(r,s)
return s},
vr(a,b,c,d){var s,r
if(d){s=b.w
if(A.dC(b)||b===t.K)return b
else if(s===1)return A.fI(a,"b9",[b])
else if(b===t.b||b===t.T)return t.gK}r=new A.bG(null,null)
r.w=7
r.x=b
r.as=c
return A.cK(a,r)},
vu(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bG(null,null)
s.w=13
s.x=b
s.as=q
r=A.cK(a,s)
a.eC.set(q,r)
return r},
fH(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
vq(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fI(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fH(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bG(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cK(a,r)
a.eC.set(p,q)
return q},
p8(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fH(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bG(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cK(a,o)
a.eC.set(q,n)
return n},
qX(a,b,c){var s,r,q="+"+(b+"("+A.fH(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bG(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cK(a,s)
a.eC.set(q,r)
return r},
qU(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fH(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fH(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.vq(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bG(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cK(a,p)
a.eC.set(r,o)
return o},
p9(a,b,c,d){var s,r=b.as+("<"+A.fH(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.vs(a,b,c,r,d)
a.eC.set(r,s)
return s},
vs(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.nz(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dz(a,b,r,0)
m=A.eu(a,c,r,0)
return A.p9(a,n,m,c!==m)}}l=new A.bG(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cK(a,l)},
qP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
qR(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.vj(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.qQ(a,r,l,k,!1)
else if(q===46)r=A.qQ(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dw(a.u,a.e,k.pop()))
break
case 94:k.push(A.vu(a.u,k.pop()))
break
case 35:k.push(A.fJ(a.u,5,"#"))
break
case 64:k.push(A.fJ(a.u,2,"@"))
break
case 126:k.push(A.fJ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.vl(a,k)
break
case 38:A.vk(a,k)
break
case 63:p=a.u
k.push(A.qW(p,A.dw(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.qV(p,A.dw(p,a.e,k.pop()),a.n))
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
A.qS(a.u,a.e,o)
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
return A.dw(a.u,a.e,m)},
vj(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
qQ(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.vy(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.uL(o)+'"')
d.push(A.fK(s,o,n))}else d.push(p)
return m},
vl(a,b){var s,r=a.u,q=A.qO(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fI(r,p,q))
else{s=A.dw(r,a.e,p)
switch(s.w){case 11:b.push(A.p9(r,s,q,a.n))
break
default:b.push(A.p8(r,s,q))
break}}},
vi(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.qO(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dw(p,a.e,o)
q=new A.j_()
q.a=s
q.b=n
q.c=m
b.push(A.qU(p,r,q))
return
case-4:b.push(A.qX(p,b.pop(),s))
return
default:throw A.b(A.h5("Unexpected state under `()`: "+A.q(o)))}},
vk(a,b){var s=b.pop()
if(0===s){b.push(A.fJ(a.u,1,"0&"))
return}if(1===s){b.push(A.fJ(a.u,4,"1&"))
return}throw A.b(A.h5("Unexpected extended operation "+A.q(s)))},
qO(a,b){var s=b.splice(a.p)
A.qS(a.u,a.e,s)
a.p=b.pop()
return s},
dw(a,b,c){if(typeof c=="string")return A.fI(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vm(a,b,c)}else return c},
qS(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dw(a,b,c[s])},
vn(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dw(a,b,c[s])},
vm(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.h5("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.h5("Bad index "+c+" for "+b.n(0)))},
xy(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aq(a,b,null,c,null)
r.set(c,s)}return s},
aq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dC(d))return!0
s=b.w
if(s===4)return!0
if(A.dC(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aq(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.T){if(q===7)return A.aq(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aq(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aq(a,b.x,c,d,e))return!1
return A.aq(a,A.oY(a,b),c,d,e)}if(s===6)return A.aq(a,p,c,d,e)&&A.aq(a,b.x,c,d,e)
if(q===7){if(A.aq(a,b,c,d.x,e))return!0
return A.aq(a,b,c,A.oY(a,d),e)}if(q===6)return A.aq(a,b,c,p,e)||A.aq(a,b,c,d.x,e)
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
if(!A.aq(a,j,c,i,e)||!A.aq(a,i,e,j,c))return!1}return A.rp(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.rp(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ws(a,b,c,d,e)}if(o&&q===10)return A.wx(a,b,c,d,e)
return!1},
rp(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ws(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fK(a,b,r[o])
return A.r9(a,p,null,c,d.y,e)}return A.r9(a,b.y,null,c,d.y,e)},
r9(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aq(a,b[s],d,e[s],f))return!1
return!0},
wx(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aq(a,r[s],c,q[s],e))return!1
return!0},
ex(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.dC(a))if(s!==6)r=s===7&&A.ex(a.x)
return r},
dC(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
r5(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
nz(a){return a>0?new Array(a):v.typeUniverse.sEA},
bG:function bG(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
j_:function j_(){this.c=this.b=this.a=null},
jm:function jm(a){this.a=a},
iY:function iY(){},
fG:function fG(a){this.a=a},
vb(){var s,r,q
if(self.scheduleImmediate!=null)return A.x6()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ew(new A.n_(s),1)).observe(r,{childList:true})
return new A.mZ(s,r,q)}else if(self.setImmediate!=null)return A.x7()
return A.x8()},
vc(a){self.scheduleImmediate(A.ew(new A.n0(t.M.a(a)),0))},
vd(a){self.setImmediate(A.ew(new A.n1(t.M.a(a)),0))},
ve(a){A.p_(B.cJ,t.M.a(a))},
p_(a,b){return A.vp(a.a/1000|0,b)},
vp(a,b){var s=new A.ns()
s.ih(a,b)
return s},
bN(a){return new A.iO(new A.a5($.a4,a.h("a5<0>")),a.h("iO<0>"))},
bM(a,b){a.$2(0,null)
b.b=!0
return b.a},
ap(a,b){A.vY(a,b)},
bL(a,b){b.cM(a)},
bK(a,b){b.cN(A.ag(a),A.c2(a))},
vY(a,b){var s,r,q=new A.nE(b),p=new A.nF(b)
if(a instanceof A.a5)a.eL(q,p,t.z)
else{s=t.z
if(a instanceof A.a5)a.dL(q,p,s)
else{r=new A.a5($.a4,t.d)
r.a=8
r.c=a
r.eL(q,p,s)}}},
bO(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.a4.hu(new A.ob(s),t.H,t.S,t.z)},
qT(a,b,c){return 0},
jT(a){var s
if(t.V.b(a)){s=a.gb8()
if(s!=null)return s}return B.Q},
u6(a,b,c){var s=new A.a5($.a4,c.h("a5<0>"))
A.uT(a,new A.kG(b,s,c))
return s},
q_(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.a5($.a4,b.h("a5<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.kI(i,h,g,f)
try{for(n=J.H(a),m=t.b;n.m();){r=n.gp()
q=i.b
r.dL(new A.kH(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bF(A.d([],b.h("p<0>")))
return n}i.a=A.c9(n,null,!1,b.h("0?"))}catch(l){p=A.ag(l)
o=A.c2(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.po(m,k)
m=new A.au(m,k==null?A.jT(m):k)
n.bB(m)
return n}else{i.d=p
i.c=o}}return f},
po(a,b){if($.a4===B.q)return null
return null},
wo(a,b){if($.a4!==B.q)A.po(a,b)
if(b==null)if(t.V.b(a)){b=a.gb8()
if(b==null){A.ql(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.V.b(a))A.ql(a,b)
return new A.au(a,b)},
vf(a,b){var s=new A.a5($.a4,b.h("a5<0>"))
b.a(a)
s.a=8
s.c=a
return s},
n8(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.d;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.uP()
b.bB(new A.au(new A.bD(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.er(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bd()
b.bE(o.a)
A.dq(b,p)
return}b.a^=2
A.jA(null,null,b.b,t.M.a(new A.n9(o,b)))},
dq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.pv(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dq(d.a,c)
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
A.pv(j.a,j.b)
return}g=$.a4
if(g!==h)$.a4=h
else g=null
c=c.c
if((c&15)===8)new A.nd(q,d,n).$0()
else if(o){if((c&1)!==0)new A.nc(q,j).$0()}else if((c&2)!==0)new A.nb(d,q).$0()
if(g!=null)$.a4=g
c=q.c
if(c instanceof A.a5){p=q.a.$ti
p=p.h("b9<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bK(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.n8(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bK(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
wH(a,b){var s
if(t.ng.b(a))return b.hu(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.b(A.aD(a,"onError",u.c))},
wD(){var s,r
for(s=$.er;s!=null;s=$.er){$.fY=null
r=s.b
$.er=r
if(r==null)$.fX=null
s.a.$0()}},
wP(){$.pp=!0
try{A.wD()}finally{$.fY=null
$.pp=!1
if($.er!=null)$.pL().$1(A.rL())}},
rH(a){var s=new A.iP(a),r=$.fX
if(r==null){$.er=$.fX=s
if(!$.pp)$.pL().$1(A.rL())}else $.fX=r.b=s},
wM(a){var s,r,q,p=$.er
if(p==null){A.rH(a)
$.fY=$.fX
return}s=new A.iP(a)
r=$.fY
if(r==null){s.b=p
$.er=$.fY=s}else{q=r.b
s.b=q
$.fY=r.b=s
if(q==null)$.fX=s}},
y0(a,b){A.dA(a,"stream",t.K)
return new A.jk(b.h("jk<0>"))},
uT(a,b){var s=$.a4
if(s===B.q)return A.p_(a,t.M.a(b))
return A.p_(a,t.M.a(s.eU(b)))},
pv(a,b){A.wM(new A.o6(a,b))},
rC(a,b,c,d,e){var s,r=$.a4
if(r===c)return d.$0()
$.a4=c
s=r
try{r=d.$0()
return r}finally{$.a4=s}},
wK(a,b,c,d,e,f,g){var s,r=$.a4
if(r===c)return d.$1(e)
$.a4=c
s=r
try{r=d.$1(e)
return r}finally{$.a4=s}},
wJ(a,b,c,d,e,f,g,h,i){var s,r=$.a4
if(r===c)return d.$2(e,f)
$.a4=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a4=s}},
jA(a,b,c,d){t.M.a(d)
if(B.q!==c){d=c.eU(d)
d=d}A.rH(d)},
n_:function n_(a){this.a=a},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(a){this.a=a},
n1:function n1(a){this.a=a},
ns:function ns(){},
nt:function nt(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=!1
this.$ti=b},
nE:function nE(a){this.a=a},
nF:function nF(a){this.a=a},
ob:function ob(a){this.a=a},
bj:function bj(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
c_:function c_(a,b){this.a=a
this.$ti=b},
au:function au(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kH:function kH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iS:function iS(){},
fm:function fm(a,b){this.a=a
this.$ti=b},
dp:function dp(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a5:function a5(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
n5:function n5(a,b){this.a=a
this.b=b},
na:function na(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
this.b=b},
n7:function n7(a,b){this.a=a
this.b=b},
n6:function n6(a,b){this.a=a
this.b=b},
nd:function nd(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function ne(a,b){this.a=a
this.b=b},
nf:function nf(a){this.a=a},
nc:function nc(a,b){this.a=a
this.b=b},
nb:function nb(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a
this.b=null},
jk:function jk(a){this.$ti=a},
fR:function fR(){},
jd:function jd(){},
np:function np(a,b){this.a=a
this.b=b},
o6:function o6(a,b){this.a=a
this.b=b},
qN(a,b){var s=a[b]
return s===a?null:s},
p6(a,b,c){if(c==null)a[b]=a
else a[b]=c},
p5(){var s=Object.create(null)
A.p6(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
qe(a,b){return new A.br(a.h("@<0>").D(b).h("br<1,2>"))},
Q(a,b,c){return b.h("@<0>").D(c).h("oP<1,2>").a(A.rN(a,new A.br(b.h("@<0>").D(c).h("br<1,2>"))))},
w(a,b){return new A.br(a.h("@<0>").D(b).h("br<1,2>"))},
oQ(a){return new A.bu(a.h("bu<0>"))},
a8(a){return new A.bu(a.h("bu<0>"))},
ar(a,b){return b.h("qf<0>").a(A.xo(a,new A.bu(b.h("bu<0>"))))},
p7(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
j5(a,b,c){var s=new A.dv(a,b,c.h("dv<0>"))
s.c=a.e
return s},
dX(a,b){var s=J.H(a.a)
if(new A.M(s,a.b,a.$ti.h("M<1>")).m())return s.gp()
return null},
aO(a,b,c){var s=A.qe(b,c)
a.aa(0,new A.lr(s,b,c))
return s},
ls(a,b){var s,r,q=A.oQ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.k(0,b.a(a[r]))
return q},
oR(a,b){var s=A.oQ(b)
s.I(0,a)
return s},
ul(a,b){var s=t.bP
return J.pN(s.a(a),s.a(b))},
oS(a){var s,r
if(A.pH(a))return"{...}"
s=new A.aJ("")
try{r={}
B.a.k($.bm,a)
s.a+="{"
r.a=!0
a.aa(0,new A.lu(r,s))
s.a+="}"}finally{if(0>=$.bm.length)return A.c($.bm,-1)
$.bm.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
vz(){throw A.b(A.as("Cannot change an unmodifiable set"))},
ft:function ft(){},
ng:function ng(a){this.a=a},
fv:function fv(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dr:function dr(a,b){this.a=a
this.$ti=b},
fu:function fu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bu:function bu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j4:function j4(a){this.a=a
this.c=this.b=null},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
G:function G(){},
S:function S(){},
lt:function lt(a){this.a=a},
lu:function lu(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.$ti=b},
fx:function fx(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fL:function fL(){},
e_:function e_(){},
cD:function cD(a,b){this.a=a
this.$ti=b},
ce:function ce(){},
fE:function fE(){},
jn:function jn(){},
fh:function fh(a,b){this.a=a
this.$ti=b},
ek:function ek(){},
fM:function fM(){},
wE(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ag(r)
q=A.ah(String(s),null,null)
throw A.b(q)}q=A.nG(p)
return q},
nG(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.j2(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.nG(a[s])
return a},
vQ(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.th()
else s=new Uint8Array(o)
for(r=J.bn(a),q=0;q<o;++q){p=r.i(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
vP(a,b,c,d){var s=a?$.tg():$.tf()
if(s==null)return null
if(0===c&&d===b.length)return A.r4(s,b)
return A.r4(s,b.subarray(c,d))},
r4(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
pP(a,b,c,d,e,f){if(B.c.ai(f,4)!==0)throw A.b(A.ah("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.ah("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.ah("Invalid base64 padding, more than two '=' characters",a,b))},
qb(a,b,c){return new A.eT(a,b)},
w5(a){return a.C()},
vg(a,b){return new A.nj(a,[],A.xf())},
vh(a,b,c){var s,r=new A.aJ(""),q=A.vg(r,b)
q.cc(a)
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
j2:function j2(a,b){this.a=a
this.b=b
this.c=null},
ni:function ni(a){this.a=a},
j3:function j3(a){this.a=a},
ny:function ny(){},
nx:function nx(){},
h7:function h7(){},
k4:function k4(){},
cT:function cT(){},
hk:function hk(){},
hu:function hu(){},
eT:function eT(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
hS:function hS(){},
lk:function lk(a){this.b=a},
lj:function lj(a){this.a=a},
nk:function nk(){},
nl:function nl(a,b){this.a=a
this.b=b},
nj:function nj(a,b,c){this.c=a
this.a=b
this.b=c},
iC:function iC(){},
mK:function mK(a){this.a=a},
nw:function nw(a){this.a=a
this.b=16
this.c=0},
xw(a){var s=A.lP(a,null)
if(s!=null)return s
throw A.b(A.ah(a,null,null))},
u1(a,b){a=A.al(a,new Error())
if(a==null)a=A.ep(a)
a.stack=b.n(0)
throw a},
c9(a,b,c,d){var s,r=c?J.q6(a,d):J.q5(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aX(a,b,c){var s,r=A.d([],c.h("p<0>"))
for(s=J.H(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
R(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.h("p<0>"))
s=A.d([],b.h("p<0>"))
for(r=J.H(a);r.m();)B.a.k(s,r.gp())
return s},
an(a,b){var s=A.aX(a,!1,b)
s.$flags=3
return s},
qt(a,b,c){var s,r
A.ie(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aH(c,b,null,"end",null))
if(s===0)return""}r=A.uR(a,b,c)
return r},
uR(a,b,c){var s=a.length
if(b>=s)return""
return A.uE(a,b,c==null||c>s?s:c)},
qs(a,b,c){var s=J.H(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
mH(){var s,r,q=A.ut()
if(q==null)throw A.b(A.as("'Uri.base' is not supported"))
s=$.qz
if(s!=null&&q===$.qy)return s
r=A.uZ(q)
$.qz=r
$.qy=q
return r},
uP(){return A.c2(new Error())},
tI(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
pV(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hm(a){if(a>=10)return""+a
return"0"+a},
u0(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.aD(b,"name","No enum value with that name"))},
hv(a){if(typeof a=="number"||A.bA(a)||a==null)return J.dF(a)
if(typeof a=="string")return JSON.stringify(a)
return A.qk(a)},
u2(a,b){A.dA(a,"error",t.K)
A.dA(b,"stackTrace",t.l)
A.u1(a,b)},
h5(a){return new A.h4(a)},
v(a,b){return new A.bD(!1,null,b,a)},
aD(a,b,c){return new A.bD(!0,a,b,c)},
qm(a){var s=null
return new A.e2(s,s,!1,s,s,a)},
uF(a,b){return new A.e2(null,null,!0,a,b,"Value not in range")},
aH(a,b,c,d,e){return new A.e2(b,c,!0,a,d,"Invalid value")},
f6(a,b,c){if(0>a||a>c)throw A.b(A.aH(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aH(b,a,c,"end",null))
return b}return c},
ie(a,b){if(a<0)throw A.b(A.aH(a,0,null,b,null))
return a},
l6(a,b,c,d){return new A.hI(b,!0,a,d,"Index out of range")},
as(a){return new A.fi(a)},
qw(a){return new A.ix(a)},
m(a){return new A.e7(a)},
am(a){return new A.hi(a)},
dT(a){return new A.n4(a)},
ah(a,b,c){return new A.I(a,b,c)},
ue(a,b,c){var s,r
if(A.pH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.a.k($.bm,a)
try{A.wB(a,s)}finally{if(0>=$.bm.length)return A.c($.bm,-1)
$.bm.pop()}r=A.qs(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
oM(a,b,c){var s,r
if(A.pH(a))return b+"..."+c
s=new A.aJ(b)
B.a.k($.bm,a)
try{r=s
r.a=A.qs(r.a,a,", ")}finally{if(0>=$.bm.length)return A.c($.bm,-1)
$.bm.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
wB(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.q(l.gp())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.k(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
cc(a,b,c,d){var s
if(B.k===c){s=J.b7(a)
b=J.b7(b)
return A.mw(A.cf(A.cf($.jG(),s),b))}if(B.k===d){s=J.b7(a)
b=J.b7(b)
c=J.b7(c)
return A.mw(A.cf(A.cf(A.cf($.jG(),s),b),c))}s=J.b7(a)
b=J.b7(b)
c=J.b7(c)
d=J.b7(d)
d=A.mw(A.cf(A.cf(A.cf(A.cf($.jG(),s),b),c),d))
return d},
ur(a){var s,r,q=$.jG()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.cf(q,J.b7(a[r]))
return A.mw(q)},
oZ(a,b){return new A.fh(A.oR(a,b),b.h("fh<0>"))},
uZ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.c(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.qx(a4<a4?B.b.B(a5,0,a4):a5,5,a3).ghz()
else if(s===32)return A.qx(B.b.B(a5,5,a4),0,a3).ghz()}r=A.c9(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.rG(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.rG(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.Y(a5,"\\",n))if(p>0)h=B.b.Y(a5,"\\",p-1)||B.b.Y(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.Y(a5,"..",n)))h=m>n+2&&B.b.Y(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.Y(a5,"file",0)){if(p<=0){if(!B.b.Y(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.B(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.b3(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.Y(a5,"http",0)){if(i&&o+3===n&&B.b.Y(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.b3(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.Y(a5,"https",0)){if(i&&o+4===n&&B.b.Y(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.b3(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.jg(a4<a5.length?B.b.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.vJ(a5,0,q)
else{if(q===0)A.el(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.vK(a5,c,p-1):""
a=A.vF(a5,p,o,!1)
i=o+1
if(i<n){a0=A.lP(B.b.B(a5,i,n),a3)
d=A.vH(a0==null?A.k(A.ah("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.vG(a5,n,m,a3,j,a!=null)
a2=m<l?A.vI(a5,m+1,l,a3):a3
return A.vA(j,b,a,d,a1,a2,l<a4?A.vE(a5,l+1,a4):a3)},
qB(a){var s=t.N
return B.a.bo(A.d(a.split("&"),t.s),A.w(s,s),new A.mJ(B.aQ),t.G)},
iB(a,b,c){throw A.b(A.ah("Illegal IPv4 address, "+a,b,c))},
uW(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.c(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iB("each part must be in the range 0..255",a,r)}A.iB("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iB(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bp(d)
if(!(k<16))return A.c(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iB(j,a,q)
p=l}A.iB("IPv4 address should contain exactly 4 parts",a,q)},
uX(a,b,c){var s
if(b===c)throw A.b(A.ah("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.c(a,b)
if(a.charCodeAt(b)===118){s=A.uY(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.qA(a,b,c)
return!0},
uY(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.I(n,a,q)
r=q
break}return new A.I("Unexpected character",a,q-1)}if(r-1===b)return new A.I(n,a,r)
return new A.I("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.I("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.c(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.I("Invalid IPvFuture address character",a,r)}},
qA(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.mI(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.uW(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cG(l,8)
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
B.bw.hM(s,a0,16,s,a)
B.bw.kf(s,a,a0,0)}}return s},
vA(a,b,c,d,e,f,g){return new A.fN(a,b,c,d,e,f,g)},
qZ(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
el(a,b,c){throw A.b(A.ah(c,a,b))},
vH(a,b){var s=A.qZ(b)
if(a===s)return null
return a},
vF(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.c(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.c(a,r)
if(a.charCodeAt(r)!==93)A.el(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.c(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.vC(a,q,r)
if(o<r){n=o+1
p=A.r3(a,B.b.Y(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.uX(a,q,o)
l=B.b.B(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.c(a,k)
if(a.charCodeAt(k)===58){o=B.b.c3(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.r3(a,B.b.Y(a,"25",n)?o+3:n,c,"%25")}else p=""
A.qA(a,b,o)
return"["+B.b.B(a,b,o)+p+"]"}}return A.vM(a,b,c)},
vC(a,b,c){var s=B.b.c3(a,"%",b)
return s>=b&&s<c?s:c},
r3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aJ(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.pb(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aJ("")
l=h.a+=B.b.B(a,q,r)
if(m)n=B.b.B(a,r,r+3)
else if(n==="%")A.el(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aJ("")
if(q<r){h.a+=B.b.B(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.c(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.B(a,q,r)
if(h==null){h=new A.aJ("")
m=h}else m=h
m.a+=i
l=A.pa(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.B(a,b,c)
if(q<c){i=B.b.B(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
vM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.pb(a,r,!0)
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
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.el(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.c(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aJ("")
l=p}else l=p
l.a+=k
j=A.pa(n)
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
if(!(b<s))return A.c(a,b)
if(!A.r0(a.charCodeAt(b)))A.el(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.el(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.B(a,b,c)
return A.vB(q?a.toLowerCase():a)},
vB(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
vK(a,b,c){return A.fO(a,b,c,16,!1,!1)},
vG(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.fO(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.V(q,"/"))q="/"+q
return A.vL(q,e,f)},
vL(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.V(a,"/")&&!B.b.V(a,"\\"))return A.vN(a,!s||c)
return A.vO(a)},
vI(a,b,c,d){return A.fO(a,b,c,256,!0,!1)},
vE(a,b,c){return A.fO(a,b,c,256,!0,!1)},
pb(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.c(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.c(a,l)
q=a.charCodeAt(l)
p=A.oj(r)
o=A.oj(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.c(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ad(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
pa(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.jf(a,6*p)&63|q
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
o+=3}}return A.qt(s,0,null)},
fO(a,b,c,d,e,f){var s=A.r2(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
r2(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.c(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.pb(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.el(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.c(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.pa(n)}if(o==null){o=new A.aJ("")
k=o}else k=o
k.a=(k.a+=B.b.B(a,p,q))+l
if(typeof m!=="number")return A.jE(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.B(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
r1(a){if(B.b.V(a,"."))return!0
return B.b.c2(a,"/.")!==-1},
vO(a){var s,r,q,p,o,n,m
if(!A.r1(a))return a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.aR(s,"/")},
vN(a,b){var s,r,q,p,o,n
if(!A.r1(a))return!b?A.r_(a):a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gO(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.l(s,0,A.r_(s[0]))}return B.a.aR(s,"/")},
r_(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.r0(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.bz(a,s+1)
if(r<=127){if(!(r<128))return A.c(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
vD(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.c(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.v("Invalid URL encoding",null))}}return r},
pc(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aQ===d)return B.b.B(a,b,c)
else p=new A.hg(B.b.B(a,b,c))
else{p=A.d([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.v("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.v("Truncated URI",null))
B.a.k(p,A.vD(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.J.a(p)
return B.fw.jS(p)},
r0(a){var s=a|32
return 97<=s&&s<=122},
qx(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.ah(k,a,r))}}if(q<0&&r>b)throw A.b(A.ah(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.c(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gO(j)
if(p!==44||r!==n+7||!B.b.Y(a,"base64",n+1))throw A.b(A.ah("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.ck.kC(a,m,s)
else{l=A.r2(a,m,s,256,!0,!1)
if(l!=null)a=B.b.b3(a,m,s,l)}return new A.mG(a,j,c)},
rG(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.c(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a){this.a=a},
iX:function iX(){},
a2:function a2(){},
h4:function h4(a){this.a=a},
cg:function cg(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hI:function hI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fi:function fi(a){this.a=a},
ix:function ix(a){this.a=a},
e7:function e7(a){this.a=a},
hi:function hi(a){this.a=a},
i5:function i5(){},
fe:function fe(){},
n4:function n4(a){this.a=a},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
ae:function ae(){},
D:function D(){},
jl:function jl(){},
mr:function mr(){this.b=this.a=0},
aJ:function aJ(a){this.a=a},
mJ:function mJ(a){this.a=a},
mI:function mI(a){this.a=a},
fN:function fN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mG:function mG(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
iT:function iT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
lB:function lB(a){this.a=a},
ak(a){var s
if(typeof a=="function")throw A.b(A.v("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ju,a)
s[$.ey()]=a
return s},
ju(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
pF(a,b,c){return c.a(a[b])},
rm(a,b){return a[b]},
aU(a,b,c,d){return d.a(a[b].apply(a,c))},
rf(a,b,c,d){return d.a(a[b](c))},
bo(a,b){var s=new A.a5($.a4,b.h("a5<0>")),r=new A.fm(s,b.h("fm<0>"))
a.then(A.ew(new A.oD(r,b),1),A.ew(new A.oE(r),1))
return s},
rv(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
co(a){if(A.rv(a))return a
return new A.oe(new A.fv(t.mp)).$1(a)},
oD:function oD(a,b){this.a=a
this.b=b},
oE:function oE(a){this.a=a},
oe:function oe(a){this.a=a},
j1:function j1(){},
ec:function ec(){this.b=this.a=0},
lV:function lV(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lW:function lW(){},
db:function db(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(){this.a=null
this.d=0},
ia:function ia(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
dN:function dN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hy:function hy(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
kB:function kB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
d0(a,b){return new A.kR(a,b)},
cd:function cd(){},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b){this.a=a
this.b=b},
kR:function kR(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a,b){this.a=a
this.c=b},
i9:function i9(a,b,c){this.b=a
this.d=b
this.e=c},
e6:function e6(){},
h3:function h3(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.at=e},
ci:function ci(a,b){this.a=a
this.b=b},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
mL:function mL(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lE(a){var s,r=t.N,q=A.ar(["sceneColor","present"],r),p=a.a.b
if(p.u(0,"shadows"))q.I(0,A.ar(["shadowMap","sceneDepth"],r))
if(p.u(0,"ssao"))q.I(0,A.ar(["ssaoRaw","ssaoBlurred"],r))
if(p.u(0,"bloom"))q.I(0,A.ar(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.u(0,"dof"))q.I(0,A.ar(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.u(0,"grade"))q.k(0,"gradeOutput")
if(p.u(0,"ps1"))q.k(0,"ps1Output")
s=p.u(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.lD(A.oZ(q,r),s)},
lD:function lD(a,b){this.a=a
this.b=b},
lF:function lF(){},
lM:function lM(a){this.b=a},
ii:function ii(){this.a=null
this.c=0
this.d=!1},
dR:function dR(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
bc:function bc(a,b,c,d,e,f,g,h,i,j){var _=this
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
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dd:function dd(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
um(){return new A.hX(new A.bU(new A.lw(),A.d([],t.dz),A.d([],t.t),t.kk))},
hX:function hX(a){this.a=a},
lw:function lw(){},
rI(a){var s=4
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
w3(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.ao[r]
if(A.rI(q.a)===b)s+=q.c}return s},
un(a){return new A.ly(a,new A.bU(new A.lz(),A.d([],t.jk),A.d([],t.t),t.ll),A.w(t.S,t.mL))},
iz:function iz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function lz(){},
lA:function lA(){},
uS(a){var s=new A.iv(a,new A.bU(new A.mA(),A.d([],t.mQ),A.d([],t.t),t.ox),A.w(t.S,t._))
s.d=s.eb()
return s},
iv:function iv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
mA:function mA(){},
mC:function mC(){},
mB:function mB(){},
x9(a){var s,r,q,p,o=A.d([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
B.a.k(o,new A.d2(p,A.d([p],r)))
continue}return o},
d2:function d2(a,b){this.a=a
this.b=b},
hw:function hw(a){this.a=a},
kx:function kx(){},
ky:function ky(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
hx:function hx(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
kC:function kC(a,b){this.a=a
this.b=b
this.c=0},
oU(){return!0},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
lH:function lH(){},
lI:function lI(){},
bF:function bF(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e3:function e3(a,b){this.a=a
this.b=b},
K:function K(a,b){this.a=a
this.b=b},
eC:function eC(a){this.b=a},
lS:function lS(a,b){var _=this
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
lX:function lX(){},
aF:function aF(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
lZ:function lZ(a,b){this.a=a
this.b=b},
m2:function m2(){},
m1:function m1(){},
m0:function m0(a){this.a=a},
m_:function m_(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(a,b){this.a=a
this.b=b},
uJ(a){return new A.f7(a,new A.bU(new A.m4(),A.d([],t.n_),A.d([],t.t),t.mn))},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(a,b){this.a=a
this.b=b},
m4:function m4(){},
rj(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.wa(a,r,s,a.x.gp().a.b.a).b},
wa(a,b,c,d){var s,r,q,p,o=new A.nX(a),n=new A.nY(d,a),m=c.a,l=a.a
if(m.b.u(0,"shadows")){s=a.w
r=s.b
q=A.xb(b,l,m,s.c.gkS(),new A.nJ(n),new A.nK(n),new A.nL(a),new A.nP(a),new A.nQ(n),new A.nR(n),new A.nS(a),r.gkU(),o,new A.nT(n),new A.nU(n),new A.nV(n),new A.nW(n),new A.nM(n),new A.nN(a),new A.nO(n),c.c,c.b)}else q=new A.hw(A.d([new A.iM(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.f4(b,u.l,u.q,l,B.N)],t.o5))
a.r.toString
p=q.jG(B.D,new A.lX(),!1,new A.ja())
o=p.a.b
if(o.length!==0)throw A.b(A.m("safe renderer graph is invalid: "+A.q(o)))
return new A.nq(q,p)},
wb(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.b(A.m("renderer graph is not initialized"))
s=a4.gdz()
r=a5.a
q=A.xh(A.u5(r.c),s,-1).a
p=A.d([],t.mX)
o=A.d([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.c,k=0;k<q.length;q.length===s||(0,A.r)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.ai)B.a.k(o,new A.ao(new A.aV(m.hy(B.y).c,h),j,l))
else B.a.k(p,new A.ao(new A.aZ(B.eZ,i.b,i.a,h),j,n))}g=new A.iZ(A.x9(A.xK(p)),A.xJ(o),r,a5.b,a5.c)
f=new A.hp(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.r)(s),++k){e=s[k]
d=A.w(n,m)
for(l=e.gR().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.r)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.m("GPU resource adapter is not initialized"))
a0=a.b.i(0,b)
if(a0==null)A.k(A.m("resource is not in candidate: "+b))
d.l(0,b,new A.hc(a0))}e.a8(new A.hb(d,f,g))}},
qq(a){return new A.mj(a,new A.ka(new A.kb(),new A.ii()),new A.kC(A.d([],t.c8),B.dr),A.d([],t.oZ),B.at)},
nX:function nX(a){this.a=a},
nY:function nY(a,b){this.a=a
this.b=b},
nV:function nV(a){this.a=a},
nP:function nP(a){this.a=a},
nU:function nU(a){this.a=a},
nL:function nL(a){this.a=a},
nM:function nM(a){this.a=a},
nW:function nW(a){this.a=a},
nT:function nT(a){this.a=a},
nJ:function nJ(a){this.a=a},
nK:function nK(a){this.a=a},
nQ:function nQ(a){this.a=a},
nR:function nR(a){this.a=a},
nS:function nS(a){this.a=a},
nO:function nO(a){this.a=a},
nN:function nN(a){this.a=a},
nq:function nq(a,b){this.a=a
this.b=b},
ja:function ja(){},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
md:function md(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
mj:function mj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
mk:function mk(){},
xK(a){var s,r,q=A.R(a,t.p)
B.a.X(q,new A.oI())
s=A.P(q)
r=s.h("a_<1,bd>")
s=A.R(new A.a_(q,s.h("bd(1)").a(new A.oJ()),r),r.h("a3.E"))
s.$flags=1
return s},
xJ(a){var s,r,q=A.R(a,t.c)
B.a.X(q,new A.oG())
s=A.P(q)
r=s.h("a_<1,bd>")
s=A.R(new A.a_(q,s.h("bd(1)").a(new A.oH()),r),r.h("a3.E"))
s.$flags=1
return s},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c){this.a=a
this.b=b
this.$ti=c},
oI:function oI(){},
oJ:function oJ(){},
oG:function oG(){},
oH:function oH(){},
xh(a,b,c){var s,r,q,p,o,n,m,l=A.d([],t.bH)
for(s=b.$ti,r=new A.bj(b.a(),s.h("bj<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.b(A.v("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.l1(n)===B.b2){++p
continue}B.a.k(l,o)}return new A.kd(l)},
kd:function kd(a){this.a=a},
dG(a){var s,r,q,p,o,n,m,l,k
for(s=J.H(a),r=B.fz,q=B.fA,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.z(m,k,Math.min(r.c,o))
q=new A.z(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.v("Aabb.fromPoints requires at least one point",null))
return new A.h1(r,q)},
h1:function h1(a,b){this.a=a
this.b=b},
u5(a){var s,r,q,p,o,n,m=a.a,l=new A.kF(),k=m.length
if(3>=k)return A.c(m,3)
s=m[3]
r=m[0]
if(7>=k)return A.c(m,7)
q=m[7]
p=m[4]
if(11>=k)return A.c(m,11)
o=m[11]
n=m[8]
if(15>=k)return A.c(m,15)
return new A.kE(A.d([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
d9:function d9(a,b){this.a=a
this.b=b},
dW:function dW(a,b){this.a=a
this.b=b},
kE:function kE(a){this.a=a},
kF:function kF(){},
qg(a){if(a.length!==16)throw A.b(A.v("Mat4.fromColumnMajor requires 16 values",null))
return new A.cb(new Float32Array(A.a0(a)))},
oT(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cb(q)},
qh(a,b,c){var s=b.gac(),r=s.aL(c).gac(),q=r.aL(s),p=new Float32Array(16)
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
p[12]=-r.bj(a)
p[13]=-q.bj(a)
p[14]=s.bj(a)
p[15]=1
return new A.cb(p)},
cb:function cb(a){this.a=a},
lv:function lv(){},
lU:function lU(){},
mD:function mD(){},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ha:function ha(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iU:function iU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fq:function fq(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c,d,e,f,g,h,i,j){var _=this
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
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hs:function hs(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
iW:function iW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hF:function hF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hc:function hc(a){this.b=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qr(a){var s=A.qh(B.I,B.a2,Math.abs(0)<0.99?B.fy:B.I)
return new A.dg(A.oT(1,1,B.c.Z(1,0.1,3),0.05).P(0,s))},
dg:function dg(a){this.a=a},
il:function il(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
je:function je(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xb(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.u(0,"shadows"))throw A.b(A.aD(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.u(0,"ssao")
r=c.u(0,"bloom")
q=c.u(0,"dof")
p=c.u(0,"grade")
o=c.u(0,"ps1")
n=c.u(0,"vhs")
d.a=null
m=A.qr(B.cF)
c=t.o5
l=A.d([],c)
if(r){B.a.I(l,A.d([new A.eA(a,j,i,b,h,h,B.ce,!0,B.N,B.bJ,b1),new A.eA(a,j,i,b,g,g,B.h9,!1,B.bJ,B.bK,a2),new A.ha(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.oK()}else k=B.N
if(q){B.a.I(l,A.d([new A.eF(a,j,i,b,f,f,B.cf,k,B.bC,b1),new A.eF(a,j,i,b,e,e,B.ha,B.bC,B.bD,a6),new A.hs(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bE}if(p){B.a.k(l,new A.hF(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bI}if(o){B.a.k(l,new A.id(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bL}if(n){B.a.k(l,new A.iE(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.av}c=A.d([new A.ho(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.iq(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.ip(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.il(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.oc(d)))
c.push(new A.im(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 toLight=normalize(uLightPosition-vWorldPos);\n  float ndotl=max(dot(n,toLight),0.);\n  float shadow=shadowFactor(ndotl);\n  float attenuation=lightAttenuation(vWorldPos);\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+vec3(ndotl*shadow*attenuation),0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.od(d,m),a5,b4,s,b9,b8))
B.a.I(c,l)
c.push(new A.f4(a,j,u.q,b,k))
return new A.hw(c)},
oc:function oc(a){this.a=a},
od:function od(a,b){this.a=a
this.b=b},
im:function im(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jf:function jf(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ji:function ji(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ip:function ip(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jh:function jh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iE:function iE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jo:function jo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(){},
ik(a,b){return new A.fd(a,b)},
hC:function hC(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
kQ:function kQ(){},
d_:function d_(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eM:function eM(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
B:function B(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
hp:function hp(a){this.a=a},
ib:function ib(a,b){this.a=a
this.b=b},
kP:function kP(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
ei:function ei(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
pX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eG(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
h8:function h8(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mW:function mW(){this.a=null},
v3(a){var s=new A.iL(a,B.f,new A.mW())
s.ig(a)
return s},
bH(a,b){var s,r
if(a.b!==B.f)A.k(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
v7(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
v6(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
qE(a,b){var s
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
v4(a,b){var s
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
r=s.jX(b)
if(r.a===0)return
if(r.u(0,B.aA)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.u(0,B.aB))a.a.depthFunc(A.v7(a,b.b))
if(r.u(0,B.aC))a.a.depthMask(b.c)
if(r.u(0,B.aG)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.u(0,B.aH))a.a.cullFace(A.v6(a,b.x))
if(r.u(0,B.c7)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.u(0,B.aD)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.u(0,B.aE))a.a.blendFunc(A.qE(a,b.e),A.qE(a,b.f))
if(r.u(0,B.aF))a.a.blendEquation(A.v4(a,b.r))
if(r.u(0,B.c5))a.a.colorMask(!0,!0,!0,!0)
if(r.u(0,B.c6)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
v5(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
ea(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.v5(a,b))},
cF(a,b){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=A.f(b.a)
a.a.useProgram(s)
a.e=s},
y(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.m(u.k))
s=a.e
if(s==null)throw A.b(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.fU(c.b))
break
case 1:p=t.D.a(c.b)
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.D.a(c.b)
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
m=p[1]
if(2>=o)return A.c(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:r.uniformMatrix4fv(q,!1,t.D.a(c.b))
break
case 4:r.uniform1i(q,A.a(c.b))
break}},
bI(a,b){if(a.b!==B.f)A.k(A.m(u.k))
a.a.bindVertexArray(A.f(b.a))},
bi(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.fQ){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.fP){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
dl(a,b,c){if(a.b!==B.f)A.k(A.m(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
p1(a,b,c,d){if(a.b!==B.f)A.k(A.m(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
p2(a,b,c){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
p3(a,b,c,d){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=v.G
A.aU(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
v8(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
qH(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.m(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.b(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b3?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.v8(a,b.b))
return new A.cL(r)},
qF(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
qG(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
qI(a,b){var s,r,q,p,o
if(a.b!==B.f)A.k(A.m(u.k))
s=a.a
r=A.i(s.createTexture())
if(r==null)throw A.b(A.m("WebGl2Device: gl.createTexture() returned null"))
q=v.G
p=q.WebGL2RenderingContext
o=A.a(p.TEXTURE_2D)
s.bindTexture(o,r)
p=q.WebGL2RenderingContext
A.aU(s,"texStorage2D",[o,1,A.a(p.RGBA8),1,1],t.H)
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.qF(a,B.b6))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.qF(a,B.b6))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_WRAP_S),A.qG(a,B.b7))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_WRAP_T),A.qG(a,B.b7))
return new A.cL(new A.fQ(r,1,1,1,!1))},
qJ(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.f)A.k(A.m(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.b(A.v("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.v("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aU(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aU(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
v9(a,b){if(a.b!==B.f)A.k(A.m(u.k))
t.fL.a(b.a)
return},
p4(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
bZ(a){var s
if(a.b!==B.f)A.k(A.m(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.b(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.cL(s)},
qK(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.b(A.ik(b===A.pF(A.rm(A.rY(),r),q,t.S)?B.c0:B.c1,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ab(A.co(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bz(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.ik(b===A.pF(A.rm(A.rY(),r),q,t.S)?B.c0:B.c1,s))}return o},
va(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.m(u.k))
q=v.G
s=A.qK(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.qK(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.fd)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ab(A.co(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bz(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.ik(B.c2,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.ik(B.c3,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.ik(B.c3,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.cL(n)},
cL:function cL(a){this.a=a},
fQ:function fQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fP:function fP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iL:function iL(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
mU:function mU(a){this.a=a},
mV:function mV(a){this.a=a},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU(a,b){var s=0,r=A.bN(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$jU=A.bO(function(a0,a1){if(a0===1)return A.bK(a1,r)
for(;;)switch(s){case 0:p=A.f(new v.G.AudioContext())
o=t.m
n=A.w(t.N,o)
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
c=new A.h6(p,b,m,l,k,j,i,h,g,f,e,d,n,B.aR,A.w(o,t.iL))
c.i4(p,b)
p=A.o(a).h("X<1,2>")
s=3
return A.ap(A.q_(A.hV(new A.X(a,p),p.h("b9<ae>(n.E)").a(new A.jV(c)),p.h("n.E"),t.mj),t.b),$async$jU)
case 3:n=n.i(0,"ir-stone")
p=n==null?c.iQ():n
d.buffer=p
q=c
s=1
break
case 1:return A.bL(q,r)}})
return A.bM($async$jU,r)},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
jV:function jV(a){this.a=a},
k7:function k7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
kA:function kA(a){this.a=a},
it:function it(a,b,c,d,e,f,g,h,i,j){var _=this
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
kN:function kN(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
kO:function kO(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=0
this.$ti=b},
hJ:function hJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
hW:function hW(a){this.a=a},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lx:function lx(a,b){this.a=a
this.b=b},
ff(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bp(a)
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
dh:function dh(a){this.a=a
this.b=0},
m3:function m3(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
mc:function mc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uK(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.qo(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.hO(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.j8(new A.e(0,0,0),new A.e(0,0,0),new A.e(0,0,0),new A.e(0,0,0))
r=t.S
q=A.c9(800,0,!1,r)
p=new Float32Array(8064)
o=J.hO(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.j6(new A.e(0,0,0),new A.e(0,0,0),new A.e(0,0,0),new A.e(0,0,0),0,1,0,0,0)
n=A.c9(4000,0,!1,r)
m=new A.e(0.3,0.7,-0.5).gac()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.m5(a,new A.kN(a,A.w(t.m,r)),b,c,A.a8(t.N),j,i,h,g,q,p,A.w(r,t.hX),o,n,m,B.eb,new A.e(0,0,0),new A.e(0,0,1),new A.e(0,1,0),new A.e(1,0,0),new A.hW(l),a,A.d([],k),A.d([],k),A.d([],k),A.d([],k),A.d([],k),A.d([],k),A.d([],k),A.d([],k))
k.ia(a,b,c)
return k},
m5:function m5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.ak=a
_.ap=b
_.aO=c
_.aP=d
_.di=_.fT=1
_.du=_.dt=_.ha=_.h9=_.h8=_.h7=_.h6=_.h5=_.ds=_.dr=_.dq=_.dn=_.dm=_.dl=_.dk=_.h4=_.h3=_.h2=_.dj=_.h1=_.h0=_.h_=_.fZ=_.fY=_.fX=_.fW=_.fV=_.fU=_.a9=$
_.bT=null
_.eX=e
_.fn=_.fm=_.fl=_.fk=_.fj=_.fi=_.fh=_.fg=_.ff=_.fe=_.fd=_.fc=_.fb=_.fa=_.f9=_.f8=_.f7=_.f6=_.f5=_.f4=_.f3=_.f2=_.f1=_.f0=_.f_=_.eZ=_.eY=_.bU=$
_.bV=0
_.d0=_.d_=_.cZ=_.cY=_.cX=_.cW=_.cV=$
_.bZ=_.bY=_.bX=_.bW=_.bk=_.aN=null
_.bl=$
_.fq=_.fp=_.fo=!1
_.k8=1
_.d1=f
_.d2=g
_.k9=h
_.fs=i
_.c_=0
_.ft=j
_.ka=k
_.d3=0
_.d4=l
_.kb=1
_.d5=!1
_.bm=0
_.d6=m
_.bn=0
_.fu=n
_.fv=o
_.fA=_.fz=_.fw=1
_.fB=0.55
_.d7=p
_.fC=q
_.d8=r
_.d9=s
_.da=a0
_.fD=_.df=_.de=_.dd=_.dc=0
_.fE=null
_.fF=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.fO=_.dh=_.dg=_.fN=_.fM=_.ke=_.kd=_.kc=_.fL=_.fK=_.fJ=_.fI=_.fH=_.fG=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.fP=a7
_.fQ=a8
_.fR=a9
_.fS=b0},
rw(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.a4(0,c).aL(f.a4(0,c)).gac(),r=A.o8(g)
return A.rz(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
h_(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bp(a)
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
rz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.h_(a,A.h_(a,A.h_(a,A.h_(a,A.h_(a,A.h_(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
o8(a){return new A.eh((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
wj(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.c0(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a9(),i=A.a9(),h=A.a9()
switch(B.c.ai(o,6)){case 0:j.b=c
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
h.b=l}s=j.cE()
if(typeof s!=="number")return s.P()
s=B.d.aF(s*255)
r=i.cE()
if(typeof r!=="number")return r.P()
r=B.d.aF(r*255)
q=h.cE()
if(typeof q!=="number")return q.P()
return new A.eh(s,r,B.d.aF(q*255))},
fs:function fs(){},
jj:function jj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
j8:function j8(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j6:function j6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
m6:function m6(){},
m7:function m7(a){this.a=a},
m8:function m8(a){this.a=a},
mY:function mY(){},
mm:function mm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iD(a,b,c){return new A.e(a,b,c)},
qC(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.e(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
e:function e(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a){this.a=a},
tM(a,b,c){var s=new A.ht(a,c,null,b)
s.i5(a,null,null,b,c)
return s},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
tZ(a){var s
if(!t.f.b(a)||typeof a.i(0,"kind")!="string")return null
s=A.dX(new A.L(B.el,t.gl.a(new A.kq(a)),t.ns),t.no)
return s==null?null:new A.dS(s)},
tY(a){if(a.a!==21)return null
if(a.e)return B.cM
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cN
return B.cL},
bq:function bq(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dS:function dS(a){this.a=a},
kq:function kq(a){this.a=a},
us(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.i(0,f)=="string"?A.E(a.i(0,f)):g
k=a.i(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.i8(s,new A.e(o,n,m),q,p,l,j)
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
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wQ(a){var s,r,q,p=A.w(t.N,t.z)
for(s=a.gT(),s=s.gt(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.b(B.cZ)
p.l(0,q,r.b)}return p},
jv(a){var s,r,q,p,o,n=a.gN().b4(0)
B.a.W(n)
s=t.z
r=A.w(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.l(0,o,A.rh(a.i(0,o)))}return A.dQ(r,t.N,s)},
rh(a){var s
if(t.f.b(a))return A.jv(A.wQ(a))
if(t.j.b(a)){s=t.z
return A.an(J.dE(a,A.xG(),s),s)}if(a==null||A.bA(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.df)
return a}throw A.b(A.ah("presentation snapshot contains unsupported value "+J.dD(a).n(0),null,null))},
lN:function lN(a){this.a=a},
qp(a,b,c){var s=A.ph(b),r=A.ph(a)
if(c!==2)A.k(A.aD(c,"version","unsupported save version"))
return new A.e4(c,s,r)},
ph(a){var s,r,q,p,o=A.o(a).h("ai<1>"),n=A.R(new A.ai(a,o),o.h("n.E"))
B.a.W(n)
o=t.z
s=A.w(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.l(0,p,A.rg(a.i(0,p)))}return A.dQ(s,t.N,o)},
rg(a){var s,r,q,p
if(t.f.b(a)){s=A.w(t.N,t.z)
for(r=a.gT(),r=r.gt(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.b(B.db)
s.l(0,p,q.b)}return A.ph(s)}if(t.j.b(a)){r=t.z
return A.an(J.dE(a,A.xI(),r),r)}if(a==null||A.bA(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.dg)
return a}throw A.b(A.ah("save contains unsupported value "+J.dD(a).n(0),null,null))},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
mi:function mi(){},
de:function de(a,b){this.a=a
this.b=b},
q0(a,b,c,d,e,f,g){return new A.kJ(a,b,c,d,e,f,g,A.d([],t.mc),A.d([],t.ag))},
q1(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.i(0,"houseSeed"),c=e.i(0,"time"),b=e.i(0,"dayLoop"),a=e.i(0,"journal"),a0=e.i(0,"house"),a1=e.i(0,"difficulty")
if(A.aT(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.b(B.da)
r=e.i(0,"runSeed")
q=A.aT(r)?r:0
p=c.i(0,"day")
o=c.i(0,"hour")
if(!A.aT(p)||p<1||typeof o!="number")throw A.b(B.dj)
if(!isFinite(480))throw A.b(A.aD(480,"daySeconds","must be finite and > 0"))
n=new A.hA(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ah("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.uj(a3,A.aO(a,s,m))
k=A.tJ(l,A.aO(b,s,m),n)
j=A.q2(d)
A.u9(A.aO(a0,s,m)).jz(j)
m=A.aO(a1,s,m)
i=m.i(0,"scrutiny")
h=m.i(0,"exhaustion")
g=m.i(0,"isolation")
f=m.i(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bA(f))A.k(B.d0)
return A.q0(d,q,j,n,l,k,new A.hr(i,h,g,f))},
w9(a){var s
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
hz:function hz(){},
kK:function kK(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b,c,d,e,f,g,h,i){var _=this
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
kL:function kL(a){this.a=a},
kM:function kM(){},
tw(a){var s,r,q,p,o,n,m="modelScale",l=A.jz(a,"house manifest"),k=typeof l.i(0,m)=="number"?A.eo(l.i(0,m)):1
if(!isFinite(k)||k<=0)throw A.b(B.d5)
s=A.cO(l,"houseId")
r=A.cO(l,"sourceRef")
q=J.dE(A.jx(l,"rooms"),new A.jX(k),t.fS)
q=A.R(q,q.$ti.h("a3.E"))
q.$flags=1
p=J.dE(A.jx(l,"portals"),new A.jY(k),t.gE)
p=A.R(p,p.$ti.h("a3.E"))
p.$flags=1
o=J.dE(A.jx(l,"stairs"),new A.jZ(),t.d2)
o=A.R(o,o.$ti.h("a3.E"))
o.$flags=1
n=J.dE(A.jx(l,"exteriorCells"),new A.k_(),t.N)
n=A.R(n,n.$ti.h("a3.E"))
n.$flags=1
return new A.jW(s,r,q,p,o)},
tx(a,b){var s=A.jz(a,"room"),r=A.cO(s,"id"),q=A.rF(s.i(0,"origin"),"origin",b),p=A.rF(s.i(0,"size"),"size",b),o=J.dE(A.jx(s,"windows"),new A.k1(b),t.lJ)
o=A.R(o,o.$ti.h("a3.E"))
o.$flags=1
return new A.dI(r,q,p,o)},
jz(a,b){return t.P.b(a)?a:A.fW(b+" is not an object")},
jx(a,b){return t.j.b(a.i(0,b))?t.ia.a(a.i(0,b)):A.fW(b+" is not a list")},
cO(a,b){var s=a.i(0,b)
return typeof s=="string"&&s.length!==0?s:A.fW(b+" is not a string")},
fZ(a,b){var s=a.i(0,b)
return typeof s=="number"&&isFinite(s)?s:A.fW(b+" is not finite")},
x1(a,b){var s,r
if(t.j.b(a)){s=J.bn(a)
s=s.gq(a)!==3||s.a5(a,new A.oa())}else s=!0
if(s)return A.fW(b+" is not a finite vec3")
s=A.d([],t.n)
for(r=J.H(a);r.m();)s.push(A.eo(r.gp()))
return s},
rF(a,b,c){var s,r,q,p=A.d([],t.n)
for(s=A.x1(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
fW(a){return A.k(A.ah(a,null,null))},
jW:function jW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(a){this.a=a},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k1:function k1(a){this.a=a},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dH:function dH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dJ:function dJ(a){this.b=a},
oa:function oa(){},
hd:function hd(a,b){this.a=a
this.b=b
this.d=null},
k9:function k9(a){this.a=a},
hY:function hY(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kV:function kV(){this.b=0},
me:function me(a,b,c){var _=this
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
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kt:function kt(){},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(){},
kX:function kX(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b},
ku:function ku(){},
xa(a){var s,r,q,p=new A.kX(A.d([],t.oP),A.d([],t.t),A.w(t.N,t.S))
for(s=0;s<4;++s)A.wc(p,a,B.bo[s],10.5,10.5,8.03,0.42)
p.A(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,11,0,11,-0.5,-0.35,10.58)
p.A(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.A(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aE(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aE(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.aX(r,new A.aE(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.aX(r,q,new A.aE(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aE(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aE(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.aX(q,new A.aE(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.aX(q,r,new A.aE(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.w0(p,10.5,10.5,10.88)
A.w8(p,10.5,10.5,8.03)
A.we(p,a,10.5)
A.vZ(p,10.5)
return p.jE()},
wc(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.d([],t.jX)
for(s=b6.b,r=s.length,q=B.v!==b7,p=B.j!==b7,o=B.m===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
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
B.a.k(b4,new A.cI(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aq(i),b=J.H(h.a),h=new A.M(b,h.b,h.$ti.h("M<1>"));h.m();){a=b.gp()
if(!a.Q||a.aj(i)!==b7)continue
B:{if(!p||o){a0=g+a.ad(i)
break B}if(!q||n){a0=e+a.ad(i)
break B}a0=null}B.a.k(b4,new A.cI(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.j||b7===B.m?b8:b9
r=t.i
a1=A.ar([0,s],r)
a2=A.ar([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.R(a1,a1.$ti.c)
B.a.W(a4)
a5=A.R(a2,a2.$ti.c)
B.a.W(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.c(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.c(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.c(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.a5(b4,new A.nZ(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.wd(b5,b4,b7,b8,b9,c1)},
wd(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.r)(a3),++h){g=a3[h]
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
break}if(!f)A.wL(a2,g,a4,a5,a6,a7,q)}},
wL(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
w0(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
w8(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[-0.48,c+0.48],r=a0-0.16,q=b+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a0,o+0.08,-0.1,r,o-0.08)}for(s=[0,b],r=c+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.11,l=n+0.11,k=n-0.07,j=n+0.07,i=0;i<2;++i){o=q[i]
a.A(6,j,a0,o+0.07,k,0,o-0.07)
for(h=[2,4,6],g=o-0.11,f=o+0.11,e=0;e<3;++e){d=h[e]
a.A(6,l,d+0.06,f,m,d,g)}}}},
we(a,b,c){var s,r,q,p,o,n,m,l,k=b.e.i(0,"hall")
k.toString
s=b.f.i(0,"front-door")
r=k.d.a+s.ad("hall")
q=r+s.w
for(k=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.A(2,p+n,0.02-m,-0.42-l,k-n,-0.08-m,-0.7-l)}a.A(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.A(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)},
vZ(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
cI:function cI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nZ:function nZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xH(a,b,c){var s,r,q=A.pJ(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.dU(B.cR,s)}r=A.rW(a,c,b)
if(r!=null)return new A.dU(B.cS,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.rX(a,c,b)!=null)return B.cW
return B.cV},
cX:function cX(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.c=b},
rM(a,b){var s,r=new A.dh(new Float32Array(5376)),q=new A.dh(new Float32Array(5376)),p=new A.dh(new Float32Array(5376)),o=new A.dh(new Float32Array(5376)),n=b.d,m=a.aM(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.dG(new A.e(l,k,j),new A.e(l,k,h),new A.e(f,k,h),new A.e(f,k,j),11053224,g,i)
k+=m.b
q.dG(new A.e(l,k,j),new A.e(f,k,j),new A.e(f,k,h),new A.e(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.vU(p,a,b,m,B.bo[s])
for(l=a.aq(b.a),k=J.H(l.a),l=new A.M(k,l.b,l.$ti.h("M<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.vT(o,b,m,j)}A.vS(p,b,m)
return new A.mf(B.w.b9(r.a,0,r.b),B.w.b9(q.a,0,q.b),B.w.b9(p.a,0,p.b),B.w.b9(o.a,0,o.b))},
vU(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.j||a4===B.m?a3.a:a3.c,a=A.d([],t.a9)
for(s=a2.a,r=a1.aq(s),q=J.H(r.a),r=new A.M(q,r.b,r.$ti.h("M<1>"));r.m();){p=q.gp()
if(!p.as&&p.aj(s)===a4)a.push(new A.cH(p.ad(s),p.ad(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cH(q,q+n.e,p,p+n.f))}}s=t.i
r=A.ar([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.I(0,A.d([m.a,m.b],p))}l=A.R(r,r.$ti.c)
B.a.W(l)
s=A.ar([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.I(0,A.d([m.c,m.d],p))}k=A.R(s,s.$ti.c)
B.a.W(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.c(l,j)
f=l[j]
if(!(i<r))return A.c(l,i)
e=l[i]
if(!(h<s))return A.c(k,h)
d=k[h]
c=k[g]
if(B.a.a5(a,new A.nD(f,e,d,c)))continue
A.x2(a0,a2,a3,a4,f,e,d,c)}A.vV(a0,a2,a3,a4,b,a)},
vV(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.a
if(c==="cellar")return
s=c==="living-room"||c==="hall"
r=c==="bedroom"
q=r||c==="landing"||c==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.nB(a,b,a0,a1,a2,a3,0.02,0.17,0.032,p)
o=!s
if(!o||c==="landing")A.nB(a,b,a0,a1,a2,a3,0.88,0.94,0.022,p)
if(!o||r){n=a0.b-0.58
A.nB(a,b,a0,a1,a2,a3,n,n+0.055,0.022,p)}c=a0.b
r=s?0.13:0.09
m=c-0.012
o=s?0.055:0.038
A.nB(a,b,a0,a1,a2,a3,c-r,m,o,p)
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
if(o>0)A.jB(a,b,a0,a1,j,o,f,d,0.04,p)
if(i<a2)A.jB(a,b,a0,a1,i,h,f,d,0.04,p)
if(e<c)A.jB(a,b,a0,a1,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.jB(a,b,a0,a1,j,h,0>o?0:o,g,0.065,p)}}},
nB(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.wT(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.jB(a,b,c,d,n,o,g,h,i,j)}},
wT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.d([new A.ej(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.d([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.ej(j,m))
j=k.b
if(n<j)B.a.k(p,new A.ej(n,j))}h=p}return h},
vS(a,b,c){var s,r,q,p,o=b.a,n=o==="living-room"
if(!n&&o!=="hall"&&o!=="bedroom")return
o=b.d
s=o.a+c.a*0.5
r=o.c+c.c*0.5
q=o.b+c.b
p=n?13748148:13024682
o=q-0.018
A.Z(a,new A.e(s-0.24,o,r-0.24),new A.e(s+0.24,q,r+0.24),p)
n=q-0.034
A.Z(a,new A.e(s-0.15,n,r-0.15),new A.e(s+0.15,o,r+0.15),p)
A.Z(a,new A.e(s-0.055,q-0.048,r-0.055),new A.e(s+0.055,n,r+0.055),p)},
jB(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.Z(a,new A.e(r+e,q+g,p),new A.e(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.Z(a,new A.e(r+e,q+g,s-i),new A.e(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.Z(a,new A.e(s-i,q+g,p+e),new A.e(s,q+h,p+f),j)
return
case 3:A.Z(a,new A.e(r,q+g,p+e),new A.e(r+i,q+h,p+f),j)
return}},
Z(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.e(o,n,m),k=c.a,j=new A.e(k,n,m),i=c.b,h=new A.e(k,i,m),g=new A.e(o,i,m)
m=c.c
s=new A.e(o,n,m)
r=new A.e(k,n,m)
q=new A.e(k,i,m)
p=new A.e(o,i,m)
a.aT(j,l,g,h,d)
a.aT(s,r,q,p,d)
a.aT(l,s,p,g,d)
a.aT(r,j,h,q,d)
a.aT(l,j,r,s,d)
a.aT(g,p,q,h,d)},
x2(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
l=d.a
switch(l){case 0:s=new A.e(k+e,j+g,i)
break
case 2:s=new A.e(k+f,j+g,i+c.c)
break
case 1:s=new A.e(k+c.a,j+h,i+f)
break
case 3:s=new A.e(k,j+h,i+e)
break
default:s=m}switch(l){case 0:r=new A.e(k+f,j+g,i)
break
case 2:r=new A.e(k+e,j+g,i+c.c)
break
case 1:r=new A.e(k+c.a,j+h,i+e)
break
case 3:r=new A.e(k,j+h,i+f)
break
default:r=m}switch(l){case 0:q=new A.e(k+f,j+h,i)
break
case 2:q=new A.e(k+e,j+h,i+c.c)
break
case 1:q=new A.e(k+c.a,j+g,i+e)
break
case 3:q=new A.e(k,j+g,i+f)
break
default:q=m}switch(l){case 0:p=new A.e(k+e,j+h,i)
break
case 2:p=new A.e(k+f,j+h,i+c.c)
break
case 1:p=new A.e(k+c.a,j+g,i+f)
break
case 3:p=new A.e(k,j+g,i+e)
break
default:p=m}o=A.x3(b,d)
switch(l){case 0:n=new A.e(s.a,s.b,s.c-o)
break
case 2:n=new A.e(r.a,s.b,s.c)
break
case 1:n=new A.e(s.a,s.b,p.c)
break
case 3:n=new A.e(s.a-o,s.b,s.c)
break
default:n=m}switch(l){case 0:l=new A.e(r.a,q.b,s.c)
break
case 2:l=new A.e(s.a,q.b,s.c+o)
break
case 1:l=new A.e(s.a+o,q.b,r.c)
break
case 3:l=new A.e(p.a,q.b,r.c)
break
default:l=m}A.Z(a,n,l,9145227)},
x3(a,b){var s
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
A.Z(a0,new A.e(r+l,s,d),new A.e(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.Z(a0,new A.e(l,s,d),new A.e(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.Z(a0,new A.e(r+n,s+m,d),new A.e(r+h,j,i),q)
A.Z(a0,new A.e(k,s,d),new A.e(l,s+0.05,i),q)
A.nC(a0,a1,a2,a3,q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.Z(a0,new A.e(r+l,s,k),new A.e(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.Z(a0,new A.e(l,s,k),new A.e(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.Z(a0,new A.e(r+n,s+m,k),new A.e(r+h,i,d),q)
A.Z(a0,new A.e(j,s,k),new A.e(l,s+0.05,d),q)
A.nC(a0,a1,a2,a3,q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.Z(a0,new A.e(n,s,d+k),new A.e(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.Z(a0,new A.e(n,s,k),new A.e(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.Z(a0,new A.e(n,s+e,d+m),new A.e(r,j,d+l),q)
A.Z(a0,new A.e(n,s,i),new A.e(r,s+0.05,k),q)
A.nC(a0,a1,a2,a3,q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.Z(a0,new A.e(r,s,d+l),new A.e(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.Z(a0,new A.e(r,s,l),new A.e(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.Z(a0,new A.e(r,s+e,d+n),new A.e(k,j,d+m),q)
A.Z(a0,new A.e(r,s,i),new A.e(k,s+0.05,l),q)
A.nC(a0,a1,a2,a3,q)
break}},
nC(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aj(o),m=d.ad(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.Z(a,new A.e(p,s,o),new A.e(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.Z(a,new A.e(p,s,o-d.w),new A.e(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.Z(a,new A.e(p-d.w,s,o),new A.e(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.Z(a,new A.e(p,s,o),new A.e(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.Z(a,new A.e(p,s,o),new A.e(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.Z(a,new A.e(p,s,o-0.055),new A.e(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.Z(a,new A.e(p-0.055,s,o),new A.e(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.Z(a,new A.e(p,s,o),new A.e(p+0.055,s+r,o+d.w),e)
break}},
mf:function mf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nD:function nD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ej:function ej(a,b){this.a=a
this.b=b},
q2(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.d([],b4),b6=t.aN,b7=A.d([],b6),b8=A.d([],t.jn),b9=t.N
b9=new A.kU(b5,b7,b8,A.w(b9,t.W),A.w(b9,t.gm),new A.kV())
s=t.E
r=t.s
q=t.cs
p=t.x
B.a.I(b5,A.d([new A.ay(n,B.T,new A.e(4.5,3.9,4),new A.e(0,0,0),A.d([new A.aK("living-north-west",B.j,0.5,0.9,1.2,1.8,!1,!0),new A.aK("living-north-east",B.j,2.7,0.9,1.2,1.8,!1,!0)],s),A.d(["hall-living","kitchen-living"],r),A.d([new A.aP(m,l,new A.e(1,1.95,1),!1,!1,m),new A.aP(k,j,new A.e(3,1.95,3),!1,!1,k)],q),B.an,"wallpaper-stripes",i,h,B.A),new A.ay(g,B.T,new A.e(2.5,3.9,7),new A.e(4.5,0,0),A.d([new A.aK("hall-fanlight",B.j,0.85,3.225,0.8,0.525,!1,!0)],s),A.d(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.d([new A.aP("mantle-hall","the hall mantle",new A.e(1,1.95,3.5),!1,!1,o)],q),A.d([new A.b_(e,e,new A.e(0.2,2.175,0.35)),new A.b_(d,d,new A.e(2.2,2.55,3)),new A.b_(c,c,new A.e(0.4,1.35,4.1))],p),b,i,h,B.A),new A.ay(a,B.T,new A.e(4.5,3.75,3),new A.e(0,0,4),A.d([new A.aK("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.aK("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.d(["hall-kitchen","kitchen-living"],r),A.d([new A.aP(a0,"the mantle by the stove",new A.e(0.8,1.8,0.5),!1,!1,a0),new A.aP("mantle-kitchen-second",l,new A.e(2.2,1.8,2),!1,!1,o),new A.aP("mantle-kitchen-third",j,new A.e(3.8,1.8,1.2),!1,!1,o)],q),A.d([new A.b_(a1,a1,new A.e(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.dX),new A.ay("cellar",B.T,new A.e(4,3,4),new A.e(1,-3,2),B.bm,A.d(["hall-cellar"],r),B.ef,B.an,"wallpaper-damp","floor-concrete","ceiling-pipes",B.A),new A.ay("bedroom",B.U,new A.e(4.5,3.6,4),new A.e(0,4.2,0),A.d([new A.aK("bedroom-north-west",B.j,0.7,1.05,1.1,1.65,!1,!0),new A.aK("bedroom-north-east",B.j,2.7,1.05,1,1.65,!1,!0)],s),A.d(["landing-bedroom"],r),A.d([new A.aP(a2,"the bedroom mantle",new A.e(1,1.95,1),!1,!1,a2),new A.aP("mantle-bedroom-bedside","the bedside mantle",new A.e(3.5,1.5,3),!1,!1,o)],q),A.d([new A.b_(a3,a3,new A.e(2.2,1.125,2.5)),new A.b_(a4,a4,new A.e(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.A),new A.ay(a5,B.U,new A.e(2.5,3.6,3),new A.e(4.5,4.2,0),B.bm,A.d(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.d([new A.aP("mantle-landing","the landing mantle",new A.e(1,1.8,1.5),!1,!1,o)],q),B.an,b,i,h,B.A),new A.ay(a7,B.U,new A.e(2.5,3.6,2.5),new A.e(4.5,4.2,3),A.d([new A.aK("bathroom-east",B.v,0.9,1.5,0.7,1.5,!0,!0)],s),A.d([a6],r),A.d([new A.aP("mantle-bathroom","the bathroom mantle",new A.e(1.5,1.8,1),!1,!1,o)],q),A.d([new A.b_(a8,a8,new A.e(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.A),new A.ay(a9,B.U,new A.e(4.5,3.15,3),new A.e(0,4.2,4),A.d([new A.aK("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.d(["landing-spare"],r),A.d([new A.aP("mantle-spare","the broken mantle",new A.e(2,1.95,1),!1,!0,o)],q),A.d([new A.b_(b0,b0,new A.e(0.5,1.8,0.3)),new A.b_(b1,b1,new A.e(3.7,2.1,2.7)),new A.b_(b2,b2,new A.e(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.A)],b4))
B.a.I(b7,A.d([A.cz(g,"outside","kit-front-door-recessed",!0,B.j,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cz(g,n,b3,!1,B.G,B.v,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cz(g,a,b3,!1,B.G,B.v,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cz(a,n,b3,!1,B.j,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cz(g,"cellar","kit-cellar-door-grille",!1,B.m,B.v,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cz(g,a5,o,!1,B.v,B.v,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cz(a5,"bedroom",b3,!1,B.G,B.v,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cz(a5,a7,b3,!1,B.m,B.j,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cz(a5,a9,b3,!1,B.m,B.j,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cB("hall-stairs",f,B.e7,new A.e(5,0,2.8),new A.e(6.5,6.3,6),new A.e(5.75,2.475,5.8),new A.e(5.75,6.675,2.2)))
b9.il()
b9.iP()
b4=b5.length
if(b4!==8)A.k(A.m("expected eight rooms, got "+b4))
b4=b9.gl9()
if(b4!==9)A.k(A.m("window discrepancy must be 9 inside / 11 outside"))
B.a.gb7(b8)
b4=B.a.gO(B.a.gb7(b8).c)
if(b4!==6.3)A.k(A.m("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.m("expected nine physical portals"))
b9.jq()
b9.jp()
return b9},
kU:function kU(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
l1:function l1(){},
l2:function l2(){},
l0:function l0(){},
l3:function l3(a){this.a=a},
l4:function l4(){},
pJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.i(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.e(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.gac()
j=a.b
if(Math.acos(B.d.Z(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
rW(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aq(c),r=J.H(s.a),s=new A.M(r,s.b,s.$ti.h("M<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.kK(c,o)
m=a.a
l=new A.e(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.ro(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
rX(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.i(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.x4(b,i,n)
l=a.a
k=new A.e(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.ro(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
ro(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.Z(a.gac().bj(c.b),-1,1))<=e},
x4(a,b,c){var s=a.aM(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.e(q.a+r,p,q.c)
break
case 2:q=new A.e(q.a+r,p,q.c+s.c)
break
case 1:q=new A.e(q.a+s.a,p,q.c+r)
break
case 3:q=new A.e(q.a,p,q.c+r)
break
default:q=null}return q},
kr:function kr(){this.a=null
this.b=0},
mn:function mn(){},
mo:function mo(){},
bT:function bT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(a){this.a=a},
kZ:function kZ(a){this.a=a},
cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.cy(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
eJ:function eJ(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
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
aP:function aP(a,b,c,d,e,f){var _=this
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
cq:function cq(){},
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
q3(a,b,c,d,e,f){var s=t.N
return new A.l_(e,f,c,a,A.dQ(A.aO(d,s,s),s,s),A.an(b,s))},
q4(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.w(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.l(0,p.a,new A.f3(p.ax,p.ay))}s=A.w(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.w(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.l(0,j.a,new A.eV(j.d,j.r))}return A.q3(a.r.b,B.l,i,B.bu,h,s)},
u9(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.i(0,"portals"),a0=a3.i(0,"windows"),a1=a3.i(0,"mantles"),a2=a3.i(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.i(0,"overrides")
if(s==null)s=B.ey
r=a3.i(0,"mantleHistory")
if(r==null)r=B.ee
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aT(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.d8)
p=t.N
o=A.w(p,t.ku)
for(n=a.gT(),n=n.gt(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.b1)
l=A.aO(q.a(l.b),p,m)
j=l.i(0,"open")
i=l.i(0,"locked")
if(!A.bA(j)||!A.bA(i))A.k(B.b1)
o.l(0,k,new A.f3(j,i))}h=A.w(p,t.y)
for(n=a0.gT(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bA(l.b))throw A.b(B.d6)
h.l(0,k,A.aR(l.b))}g=A.w(p,t.mK)
for(n=a1.gT(),n=n.gt(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.b0)
l=A.aO(q.a(l.b),p,m)
f=l.i(0,"lit")
e=l.i(0,"examined")
if(!A.bA(f)||!A.bA(e))A.k(B.b0)
g.l(0,k,new A.eV(f,e))}d=A.w(p,p)
for(q=s.gT(),q=q.gt(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.dp)
d.l(0,n,A.E(p.b))}c=A.d([],t.s)
for(q=J.H(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.b(B.cX)
B.a.k(c,b)}return A.q3(a2,c,g,d,o,h)},
pw(a,b){return a.a.a===b.a&&a.ag(0,b.gbP(b))},
l_:function l_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f3:function f3(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
tW(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.ls(e,A.P(e).c)
q=new A.ec()
q.cl((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eH(a,q,2,r,1+s,A.ar(["time"],t.N))
break
case 3:A.eH(a,q,3,r,1+s,A.ar(["place"],t.N))
break
case 4:A.eH(a,q,4,r,2+s,p)
A.tS(a,q,4)
break
case 5:A.eH(a,q,5,r,s,p)
A.tQ(a,q,5)
break
case 6:A.eH(a,q,6,r,s,p)
A.tR(a,q)
A.tV(a,q,6)
break
case 7:A.tT(a,q,7)
break
default:if(s>0)A.eH(a,q,b,r,s,p)}},
tP(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.u(0,b.a))return!1
if(A.tU(a,b,c))return!1
return!0},
eH(a,b,c,d,e,f){var s,r,q,p,o=A.d([],t.r)
for(s=a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));s.m();){r=s.d
if(A.tP(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cj(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.c(o,p)
A.pY(a,b,o[p],f)}},
pY(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aO(B.a.gO(o).a,n,n)
if(d==null)s=A.d(B.r.slice(0),t.s)
else{n=t.nn
s=A.R(new A.L(B.r,t.gS.a(new A.km(d)),n),n.h("n.E"))}n=s.length
if(n===0)return
n=b.ah(n)
if(!(n>=0&&n<s.length))return A.c(s,n)
r=s[n]
q=m.i(0,r)
if(q==null)q=""
p=a.a.dV(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.ah(n)
if(!(n>=0&&n<p.length))return A.c(p,n)
m.l(0,r,p[n])}a.cP(c.a,m,B.a.gO(o).b)},
tS(a,b,c){var s=A.pZ(a,b,c)
if(!a.bg(s))return
a.e0(c,t.G.a(s),0,B.al,null)},
pZ(a,b,c){var s,r,q,p,o,n=t.N,m=A.w(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.r[s]
q=n.i(0,r)
if(q==null)q=B.l
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.ah(p)
if(!(o>=0&&o<p))return A.c(q,o)
m.l(0,r,q[o])}}return m},
tQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.r)
for(s=a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cj(i,b)
s=i.length
if(0>=s)return A.c(i,0)
q=i[0]
if(1>=s)return A.c(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aO(B.a.gO(i).a,s,s)
r=p.c
n=A.aO(B.a.gO(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.r[m]
k=o.i(0,l)
j=s.dV(l,k==null?"":k)
k=j.length
if(k!==0){k=b.ah(k)
if(!(k>=0&&k<j.length))return A.c(j,k)
o.l(0,l,j[k])}}a.cP(q.a,o,B.a.gO(i).b)
a.cP(p.a,n,B.a.gO(r).b)},
tR(a,b){var s,r,q=A.d([],t.r)
for(s=a.b,r=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.ah(r)
if(!(r>=0&&r<q.length))return A.c(q,r)
s.aD(0,q[r].a)},
tV(a,b,c){var s,r,q=A.d([],t.r)
for(s=a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.ah(s)
if(!(s>=0&&s<q.length))return A.c(q,s)
A.pY(a,b,q[s],null)},
tT(a,b,c){var s=c+1,r=A.pZ(a,b,s)
if(!a.bg(r))return
a.e0(s,t.G.a(r),0,B.al,null)},
tU(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gO(b.c).c===B.V}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gO(b.c).c===B.V}if(c===21)return b.e
return!1},
km:function km(a){this.a=a},
v2(a){var s,r,q,p,o=t.N,n=A.w(o,t.h)
for(s=0;s<5;++s){r=B.r[s]
q=a.i(0,r)
p=A.aX(q==null?B.l:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.mT(n)},
ln(a,b,c){var s,r,q,p=t.z
p=A.w(p,p)
for(s=0;s<5;++s){r=B.r[s]
q=a.i(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.hU(A.dQ(p,q,q),b,c)},
qd(a){var s=t.N
return A.ln(t.P.a(a.i(0,"fields")).b1(0,new A.lo(),s,s),A.eo(a.i(0,"shakiness")),A.u0(B.e9,A.E(a.i(0,"hand")),t.bU))},
u_(a){var s,r,q,p,o=a.i(0,"margin"),n=A.a(a.i(0,"ordinal")),m=A.a(a.i(0,"day")),l=A.d([],t.b1)
for(s=J.H(t.j.a(a.i(0,"revisions"))),r=t.P;s.m();)l.push(A.qd(r.a(s.gp())))
s=A.bz(a.i(0,"corroborator"))
q=A.aR(a.i(0,"locked"))
p=A.rc(a.i(0,"lastReadDay"))
return new A.b8(n,m,l,s,q,p,o==null?null:A.qd(r.a(o)))},
ct:function ct(a,b){this.a=a
this.b=b},
mT:function mT(a){this.a=a},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function lo(){},
lp:function lp(a){this.a=a},
b8:function b8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qa(a){return new A.la(a,A.w(t.S,t.L),A.a8(t.N),A.d([],t.t))},
uj(a,b){var s,r,q,p,o=A.qa(a)
o.e=A.a(b.i(0,"nextOrdinal"))
o.f=A.a(b.i(0,"locksRemaining"))
s=t.j
o.c.I(0,J.tp(s.a(b.i(0,"tags")),t.N))
for(s=J.H(s.a(b.i(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.u_(r.a(s.gp()))
q.l(0,p.a,p)}return o},
la:function la(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
lh:function lh(a,b){this.a=a
this.b=b},
k2:function k2(){},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(){},
lm:function lm(){},
ll:function ll(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lK:function lK(){},
lJ:function lJ(a,b){this.b=a
this.c=b},
lL:function lL(){},
oW(a){if(!isFinite(0))A.k(A.aD(0,"interpolation",null))
return new A.mb(a)},
f8:function f8(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
mb:function mb(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ma(a,b,c,d,e){var s="1396a608ffa6-e81ac167594e-dirty",r=A.nI("RENDERER_SHA"),q=A.nI("GAME_SHA"),p=A.nI("DART_SDK_VERSION"),o=A.nI("LOCKFILE_SHA256"),n=A.ls(b,A.P(b).c)
n=A.R(n,A.o(n).c)
B.a.W(n)
n=new A.m9(a,e,s,A.an(n,t.N),r,q,p,o,c,d)
n.ib(a,s,b,c,d,q,o,e,r,p)
return n},
nI(a){var s=B.es.i(0,a)
return s.length===0?null:s},
m9:function m9(a,b,c,d,e,f,g,h,i,j){var _=this
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
pW(a,b,c,d,e,f,g){var s=A.R(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ah("saved day-loop resources must not be negative",null,null))
return new A.ke(c,g,b,a,e,d===!0,s)},
tJ(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.i(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.d3)
s=A.d([],t.b2)
for(r=J.H(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.b(B.d9)
i=j.i(0,"day")
h=j.i(0,"quality")
g=j.i(0,"location")
if(!A.aT(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.d2)
f=A.dX(new A.L(B.bi,q.a(new A.kf(h)),p),o)
e=A.dX(new A.L(B.bn,n.a(new A.kg(g)),m),l)
if(f==null||e==null)throw A.b(B.dl)
B.a.k(s,new A.e5(i,f,e))}d=a2.i(0,"hoursRemaining")
c=a2.i(0,"gasRemaining")
b=a2.i(0,"rationCoupons")
a=a2.i(0,"rationCollectedToday")
if(!A.aT(d)||!A.aT(c)||!A.aT(b)||!A.bA(a))throw A.b(B.dc)
return A.pW(c,d,a1,a,b,s,a3)},
b0:function b0(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
mX:function mX(a,b){this.b=a
this.c=b},
dm:function dm(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
l5:function l5(a){this.c=a},
l7:function l7(a,b){this.a=a
this.b=b},
l8:function l8(){},
qo(){var s=A.pm(B.l),r=A.pm(B.l),q=new A.mh(B.x,s,r)
if(!isFinite(0))A.k(B.cY)
if(!B.a.ag(r,B.a.gbP(s)))A.k(B.dd)
if(q.a===B.x&&q.b!==0&&!q.e)A.k(B.d_)
return q},
pm(a){var s,r,q,p=A.d([],t.s),o=A.a8(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.b(B.dk)
B.a.k(p,q)}return p},
bs:function bs(a,b){this.a=a
this.b=b},
mg:function mg(){},
bV:function bV(){},
mh:function mh(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hA:function hA(a,b){this.a=a
this.b=6
this.c=b},
rZ(a){var s=B.d.Z(a,0,1)
if(s<=0.5)return A.ru(4491468,16777215,s*2)
return A.ru(16777215,16759637,(s-0.5)*2)},
t_(a){var s=B.d.Z(a,0,1)
return new A.e(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).gac()},
ru(a,b,c){var s,r=new A.o2(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.hP()
s=r.$1(8)
if(typeof s!=="number")return s.hP()
r=r.$1(0)
if(typeof r!=="number")return A.jE(r)
return(q<<16|s<<8|r)>>>0},
o2:function o2(a,b,c){this.a=a
this.b=b
this.c=c},
e8(a){var s,r,q=A.w(t.N,t.z)
for(s=a.gT(),s=s.gt(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
ms:function ms(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mt:function mt(){},
mu:function mu(){},
dk:function dk(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b){this.a=a
this.b=b},
mx:function mx(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
my:function my(){},
mz:function mz(){},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
k5:function k5(a){this.a=a
this.b=null},
tN(a){var s=A.d([],t.kG)
s=new A.ki(A.U(a,"div","door",null),s)
s.i6(a)
return s},
ki:function ki(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
kl:function kl(a,b){this.a=a
this.b=b},
tX(a){var s=new A.ko(a,A.f(a.createElement("div")))
s.bA(a)
s.i7(a)
return s},
ko:function ko(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
kp:function kp(a){this.a=a},
u8(a){var s=new A.kS(a,A.f(a.createElement("div")))
s.bA(a)
s.i8(a)
return s},
kS:function kS(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
kT:function kT(a){this.a=a},
lb:function lb(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function lf(){},
lg:function lg(){},
U(a,b,c,d){var s=A.f(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
rk(a){var s,r,q,p=A.f(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.d([],t.kG)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
f2:function f2(){},
lT:function lT(a){this.a=a
this.b=null},
uM(a){var s=new A.mp(a,A.f(a.createElement("div")))
s.bA(a)
s.ie(a)
return s},
mp:function mp(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
mq:function mq(a,b,c){this.a=a
this.b=b
this.c=c},
tv(a){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.od)
for(s=a.d,s=new A.X(s,A.o(s).h("X<1,2>")).gt(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.i(0,p)
o.toString
for(n=q.b.gT(),n=n.gt(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.i(0,m).i(0,k)
j.toString
B.a.k(i,new A.bC(p+m+":"+k,m,l.a,l.b,j))}}B.a.X(i,new A.jP())
return new A.jO(A.an(i,t.e),A.a8(t.N))},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jO:function jO(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
jP:function jP(){},
v1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.h5
s=t.g
r=A.w(s,t.kz)
q=A.o(e).h("ai<1>")
p=A.R(new A.ai(e,q),q.h("n.E"))
B.a.W(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=e.i(0,k).gT(),j=j.gt(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.b2(new A.bh(B.fS,k+" has an out-of-range authored day "+h+"."))
g=A.v0(k,h,i.b,m)
if(g instanceof A.b2)return g
i=n.i(0,k)
f=i==null?null:i.i(0,h)
if(f==null)continue
r.l(0,new A.b1(k,h,f.a,f.b),o.a(g).a)}}return new A.iJ(new A.iI(r,A.a8(t.N),A.a8(s),A.d([],t.bl),B.D))},
v0(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.w(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bh[p]
n=o.b
m=n+"."
l=A.d([],q)
for(k=a0.gT(),k=k.gt(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.V(h,m))continue
g=A.lP(B.b.bz(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b2(new A.bh(B.fT,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.i(0,r+h)
if(f==null)f=B.bl
B.a.k(l,new A.bt(g,i.b,f))}if(l.length===0)continue
B.a.X(l,new A.mN())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b2(new A.bh(B.cb,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.b2(new A.bh(B.cb,a+" day "+s+" has no authored tiers."))
return new A.j7(c)},
iI:function iI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
mR:function mR(a){this.a=a},
mQ:function mQ(a){this.a=a},
mO:function mO(a){this.a=a},
mP:function mP(){},
mN:function mN(){},
iJ:function iJ(a){this.a=a},
j7:function j7(a){this.a=a},
xl(a){var s,r,q,p=A.a8(t.N)
for(s=new A.X(a,A.o(a).h("X<1,2>")).gt(0);s.m();){r=s.d
for(q=r.b.gam(),q=q.gt(q);q.m();)if(q.gp().gN().a5(0,new A.oh())){p.k(0,r.a)
break}}s=A.R(p,p.$ti.c)
B.a.W(s)
return s},
xk(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.l
s=t.N
r=A.aX(b,!0,s)
B.a.W(r)
q=new A.ec()
q.cl((a^913741)>>>0)
p=q.ah(4)
if(!(p>=0&&p<4))return A.c(B.bg,p)
o=B.bg[p]
n=r.length
n=o>n?n:o
if(n===0)return B.l
m=A.aX(r,!0,s)
B.a.cj(m,q)
s=A.mv(m,0,A.dA(n,"count",t.S),A.P(m).c).b4(0)
B.a.W(s)
return s},
oh:function oh(){},
qD(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.i(0,"visitor")
r=a.i(0,"day")
q=a.i(0,"hour")
p=a.i(0,"order")
if(typeof s!="string"||!A.aT(r)||!A.aT(q)||!A.aT(p)||r<1||q<0||q>23||p<0)return null
return new A.b1(s,r,q,p)},
v_(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.i(0,k))||!s.b(a.i(0,j))}else s=!0
if(s)return i
r=A.a8(t.N)
for(s=t.j,q=J.H(s.a(a.i(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a8(t.g)
for(s=J.H(s.a(a.i(0,j)));s.m();){n=A.qD(s.gp())
if(n==null)return i
o.k(0,n)}m=a.i(0,"active")
s=m==null
l=s?i:A.tu(m)
if(!s&&l==null)return i
return new A.iK(r,o,l)},
tu(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.qD(a.i(0,"arrival"))
r=a.i(0,"tier")
q=a.i(0,"phase")
p=a.i(0,"lineIndex")
o=a.i(0,"choice")
n=a.i(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aT(p))if(!(p<0))if(A.bA(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.dX(new A.L(B.bh,t.nw.a(new A.jL(r)),t.na),t.kM)
k=A.dX(new A.L(B.eo,t.bQ.a(new A.jM(q)),t.cB),t.nq)
m=o==null
j=m?h:A.dX(new A.L(B.e2,t.hg.a(new A.jN(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.h2(s,l,k,p,j,n)},
aW:function aW(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bY:function bY(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
mM:function mM(){},
h2:function h2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
mS:function mS(){},
b2:function b2(a){this.a=a},
iG:function iG(a){this.a=a},
iF:function iF(a){this.a=a},
fj:function fj(a,b){this.a=a
this.b=b},
oo(){var s=0,r=A.bN(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$oo=A.bO(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.i(A.f(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.N.b=c3
$.pl=A.i(A.f(c2.document).getElementById("fps"))
$.bx.b=$.ti().cg(A.mH().gbw().i(0,"renderer"))
A.wk()
a6=$.N.j()
a7=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
a6.width=a7
a7=$.N.j()
a6=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a7.height=a6
n=A.i(c3.getContext("webgl2"))
if(n==null){$.bx.b=new A.dL(B.Y,$.bx.j().b,!0,"webgl2 unavailable")
h=B.ac.jT($.bx.j())
h.aC()
$.cl.b=h
A.ry()
A.cN("no-webgl2")
c2=A.i(A.f(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bx.j().a===B.Z){a6=t.N
a8=new A.fC(n,A.a($.N.j().width),A.a($.N.j().height),A.d([],t.dg),A.d([],t.jj),A.w(a6,t.hL),A.w(a6,t.p9),A.d([],t.jU),B.dq,B.f_)}else a8=new A.eb(n,A.a($.N.j().width),A.a($.N.j().height),A.mH().gbw().i(0,"render")==="legacy",$.bx.j().c,$.bx.j().d)
m=a8
$.cn=m instanceof A.fC?m:null
$.jw=m instanceof A.eb?m:null
a6=B.ac.cQ($.bx.j(),m)
a6.aC()
$.cl.b=a6}catch(c5){l=A.ag(c5)
$.bx.b=new A.dL(B.Y,!0,!0,"pixeldart initialization failed")
$.jw=new A.eb(n,A.a($.N.j().width),A.a($.N.j().height),A.mH().gbw().i(0,"render")==="legacy",!0,$.bx.j().d)
a6=B.ac.cQ($.bx.j(),$.jw)
a6.aC()
$.cl.b=a6
$.N.j().setAttribute("data-renderer-error",A.q(l))}A.ry()
p=4
A.cN("initializing")
$.by.b=new A.k7(new A.e(0,0,0),new A.e(0,0,1),new A.e(0,1,0),new A.e(1,0,0))
$.pt=A.aR(A.f(A.f(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.by.j()
a6.f=$.pt?0.5:1
a6=A.f(c2.window)
a7=t.N
b0=A.f(a6.document)
b1=new A.hJ(b0,A.a8(a7),A.a8(a7))
a6.addEventListener("keydown",A.ak(b1.giV()))
a6.addEventListener("keyup",A.ak(b1.giX()))
a6.addEventListener("mousemove",A.ak(b1.gj0()))
b0.addEventListener("pointerlockchange",A.ak(b1.giZ()))
$.bk.b=b1
$.r7.b=new A.hH(A.d([],t.oX),t.lv)
b1=$.N.j()
a6=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
b1.width=a6
a6=$.N.j()
b0=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a6.height=b0
A.cN("renderer")
if($.bx.j().a===B.Y){a6=$.jw
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.j()}$.es=a6
if(a6==null){h=A.m("legacy runtime did not initialize its renderer")
throw A.b(h)}}A.cN("text")
a6=$.jJ()
s=7
return A.ap(a6.bt(),$async$oo)
case 7:k=a6.l8()
j=A.v1(k)
if(!(j instanceof A.iJ)){i=t.cq.a(j).a
h=i.b
throw A.b("Failed to build visitors: "+h)}$.aB.b=j.a
$.jq.b=A.tv(k)
h=A.w(a7,t.h)
for(b0=t.j,b2=0;b2<5;++b2){g=B.r[b2]
b1=A.E(g)
b3=a6.c
b3===$&&A.j()
b4=b3.i(0,b1)
b1=b0.b(b4)?A.aX(b4,!0,a7):B.l
J.bQ(h,g,b1)}f=A.v2(h)
$.pf.b=new A.k6(B.cE)
e=$.pf.j().kM(new A.op(f))
if(e.a==null){h=B.aR.ah(2147483647)
if(!isFinite(480))A.k(A.aD(480,"daySeconds","must be finite and > 0"))
b5=new A.hA(1,480)
b5.b=10
b6=A.qa(f)
h=A.q0(42,1+h,A.q2(42),b5,b6,A.pW(6,16,b6,null,6,B.ea,b5),new A.hr(0,0,0,!1))}else{h=e.a
h.toString
h=A.q1(h,f)}$.Y.b=h
$.cl.j().aw(A.oW($.Y.j().gdF()))
if(e.b!=null){h=e.b
h.toString
A.et(h)}h=$.aB.j()
a6=A.xk($.Y.j().b,A.xl(k.b))
h.shZ(A.ls(a6,A.P(a6).c))
A.cN("house")
$.aa.b=$.Y.j().c
a6=$.cn
if(a6!=null)a6.jA($.aa.j())
$.dx.b=$.Y.j().d
h=new A.e(5.5,1.65,3.5)
$.pB=$.ps=$.pz=h
d=h.a4(0,new A.e(0,1.3499999999999999,0))
$.fT.b=new A.hd(d,J.pM(d,new A.e(0,1.2000000000000002,0)))
$.em.b=new A.kr()
$.b4.b=A.qo()
$.aS="hall"
h=e.a
c=A.us(h==null?null:h.c.i(0,"player"))
if(c!=null&&c.kq($.aa.j())){h=c.b
$.pB=$.ps=$.pz=h
$.c0=c.c
$.dy=c.d
$.aS=c.a
b=h.a4(0,new A.e(0,1.3499999999999999,0))
h=$.fT.j()
h.sjB(b)
h.b=J.pM(b,new A.e(0,1.2000000000000002,0))
h=$.fT.j()
a6=$.aa.j()
b1=c.e
b3=c.f
h.kX($.aS,$.ez(),a6,b3,b1)
A.et("restored position")}h=$.Y.j().e
a6=$.dx.j()
$.Y.j()
$.js.b=new A.l7(h,a6)
a6=A.f(c2.document)
h=$.Y.j().e
b1=$.dx.j()
b3=$.js.j()
b7=A.f(a6.createElement("div"))
b3=new A.lb(h,b1,b3,a6,b7)
b3.bA(a6)
A.f(b7.appendChild(A.U(a6,"div","journal-title","The Journal")))
b8=A.U(a6,"div","journal-pages",null)
b1=A.U(a6,"div","page page-left",null)
b3.y!==$&&A.x()
b3.y=b1
h=A.U(a6,"div","page page-right",null)
b3.z!==$&&A.x()
b3.z=h
A.f(b8.appendChild(b1))
A.f(b8.appendChild(h))
A.f(b7.appendChild(b8))
A.f(b7.appendChild(b3.io()))
b9=A.U(a6,"div","tape-roll",null)
A.f(b9.style).setProperty("width","8rem")
h=A.U(a6,"div","tape-fill",null)
b3.as!==$&&A.x()
b3.as=h
A.f(b9.appendChild(h))
A.f(b7.appendChild(b9))
c0=A.U(a6,"div","consult",null)
A.f(c0.appendChild(A.U(a6,"div","consult-label","Cite an entry")))
h=A.U(a6,"div","entry-picker",null)
b3.at!==$&&A.x()
b3.at=h
b1=A.U(a6,"div","consult-result",null)
b3.ax!==$&&A.x()
b3.ax=b1
A.f(c0.appendChild(h))
A.f(c0.appendChild(b1))
A.f(b7.appendChild(c0))
c1=A.i(a6.documentElement)
if(t.m.b(c1)){A.f(c1.style).setProperty("--shake-max-deg","3deg")
A.f(c1.style).setProperty("--shake-max-px","2px")}$.en.b=b3
$.en.j().sc7(new A.oq())
h=A.f(c2.document)
a6=A.U(h,"div","prompt",null)
A.f(a6.style).setProperty("transition-duration","0.3s")
A.f(A.i(h.body).appendChild(a6))
$.r8.b=new A.lT(a6)
a6=A.f(c2.document)
h=A.U(a6,"div","broadcast",null)
A.f(A.i(a6.body).appendChild(h))
$.r6.b=new A.k5(h)
h=A.f(c2.document)
a6=A.U(h,"div","ambient-notice",null)
A.f(A.i(h.body).appendChild(a6))
$.pd.b=new A.jR(a6)
a6=A.tN(A.f(c2.document))
a6.skD(A.xA())
a6.skF(A.xC())
a6.skE(A.xB())
$.aA.b=a6
a6=e.a
a=A.v_(a6==null?null:a6.c.i(0,"visitors"))
if(a!=null&&$.aB.j().kW(a))A.wI()
h=$.jq.j()
a6=e.a
h.kY(a6==null?null:a6.c.i(0,"ambient"))
h=e.a
a0=h==null?null:h.c.i(0,"unverifiables")
if(b0.b(a0))for(h=J.H(a0);h.m();){a1=h.gp()
if(A.aT(a1))$.o9.k(0,a1)}h=A.uM(A.f(c2.document))
h.skH(new A.or())
h.sc7(new A.ou())
$.jt.b=h
h=A.u8(A.f(c2.document))
h.sc7(new A.ov())
$.jr.b=h
h=A.tX(A.f(c2.document))
h.sc7(new A.ow())
h.skG(new A.ox())
$.pe.b=h
h=e.a
a2=A.tZ(h==null?null:h.c.i(0,"ending"))
if(a2!=null)A.rx(a2)
a3=$.es
if(a3!=null){A.cN("world")
h=$.aa.j()
a6=a3
a7=new A.me(h,a6,A.w(a7,t.J))
a7.ic(h,a6)
$.nH=a7}h=B.b.u(A.E(A.f(A.f(c2.window).location).search),"shaders=live")
$.rJ=h
if(h){h=$.es
if(h!=null)h.b2()}A.rA()
A.f(c2.window).addEventListener("resize",A.ak(new A.oy()))
A.f(c2.window).addEventListener("keydown",A.ak(new A.oz()))
A.f(c2.window).addEventListener("keyup",A.ak(new A.oA()))
A.f(c2.window).addEventListener("keydown",A.ak(new A.oB()))
A.f(c2.window).addEventListener("click",A.ak(new A.os()))
$.N.j().addEventListener("click",A.ak(new A.ot()))
A.eq()
A.cN("raf")
A.a(A.f(c2.window).requestAnimationFrame(A.ak(A.rS())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ag(c4)
a5=A.c2(c4)
A.o4(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bL(q,r)
case 2:return A.bK(o.at(-1),r)}})
return A.bM($async$oo,r)},
wk(){var s=v.G
A.f(s.window).addEventListener("error",A.ak(new A.o0()))
A.f(s.window).addEventListener("unhandledrejection",A.ak(new A.o1()))},
cN(a){if($.re===a)return
$.re=a
$.N.j().setAttribute("data-boot-phase",a)},
ry(){var s,r,q=$.cl.j().gaY(),p=$.N.j(),o=A.mH().gbw().i(0,"renderer")
if(o==null)o="legacy"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.x))
p.setAttribute("data-renderer-diagnostics",B.u.aZ(q.C(),null))
p=$.cn
s=p==null?null:p.x
if(s!=null)$.N.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jw
r=p==null?null:p.y
if(r!=null)$.N.j().setAttribute("data-renderer-frame-submits",A.q(r))},
px(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.b4.j().a!==B.x){A.et("save unavailable during rupture")
return}try{r=$.pf.j()
q=$.Y.j()
p=t.N
o=t.z
s=A.w(p,o)
n=$.aS
m=$.ez()
l=$.c0
k=$.dy
j=$.fT.j().d
j=j==null?null:j.a.a
i=$.fT.j().d
J.bQ(s,"player",new A.i8(n,m,l,k,j,i==null?null:i.b).C())
n=$.aB.j()
m=A.oZ(n.b,p)
l=A.oZ(n.c,t.g)
n=n.e
J.bQ(s,"visitors",new A.iK(m,l,n==null?null:new A.h2(n.a,n.b,n.d,n.f,n.e,n.r)).C())
n=$.jq.j().b
n=A.R(n,A.o(n).c)
B.a.W(n)
J.bQ(s,"ambient",n)
n=A.R($.o9,A.o($.o9).c)
B.a.W(n)
J.bQ(s,"unverifiables",n)
n=$.pk
if(n!=null)J.bQ(s,"ending",A.Q(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.q4(q.c).C()
k=q.d
r.la(A.qp(s,A.Q(["houseSeed",n,"runSeed",m,"house",l,"time",A.Q(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C()],p,o),2))
A.et(a)}catch(h){A.et("save failed")}},
et(a){var s=A.i(A.f(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.u6(B.cK,new A.o7(s),t.H)},
o4(a,b){var s,r,q,p
A.cN("error")
s=A.q(a)
r=A.xM(s,"\n"," ")
s=$.pl
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.f(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.N.j().setAttribute("data-boot-error",p)
A.f(s.console).error(p)},
ra(){if($.pg)return
$.pg=!0
var s=$.fV
if(s!=null)s.hx()
B.a.k($.cM,"arm")},
eq(){var s=0,r=A.bN(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$eq=A.bO(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ap(A.jy(),$async$eq)
case 2:o=null
q=4
s=7
return A.ap(A.bo(A.f(A.f(v.G.window).fetch("res/manifest.json")),t.m),$async$eq)
case 7:n=b
i=A
s=8
return A.ap(A.bo(A.f(n.json()),t.X),$async$eq)
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
if(l!=null)l.textContent=A.E(k)}s=9
return A.ap(A.q_(A.d([A.o3(o),A.o_(o)],t.iw),t.H),$async$eq)
case 9:return A.bL(null,r)
case 1:return A.bK(p.at(-1),r)}})
return A.bM($async$eq,r)},
jy(){var s=0,r=A.bN(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$jy=A.bO(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.e8[f]
p=7
s=10
return A.ap(A.bo(A.f(A.f(i.window).fetch(n)),h),$async$jy)
case 10:m=a0
s=11
return A.ap(A.bo(A.f(m.text()),g),$async$jy)
case 11:l=a0
k=A.tw(B.u.cS(l,null))
e=$.aa.b
if(e===$.aa)A.k(A.aw(""))
k.l6(e)
e=$.N.b
if(e===$.N)A.k(A.aw(""))
e.setAttribute("data-house-manifest","validated")
e=$.N.b
if(e===$.N)A.k(A.aw(""))
e.setAttribute("data-house-manifest-source",n)
s=1
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
case 5:$.N.j().setAttribute("data-house-manifest","unavailable")
A.f(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.bL(q,r)
case 2:return A.bK(o.at(-1),r)}})
return A.bM($async$jy,r)},
pj(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.H(t.h.b(s)?s:new A.bE(s,A.P(s).h("bE<1,l>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.E(q))}},
o_(a){var s=0,r=A.bN(t.H),q,p,o,n,m
var $async$o_=A.bO(function(b,c){if(b===1)return A.bK(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.w(n,n)
n=a==null
A.pj(A.i(n?null:a.sfx),m,"")
A.pj(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.E(p))
s=2
return A.ap(A.jU(m,$.aa.j()),$async$o_)
case 2:o=c
$.fV=o
if($.pg)o.hx()
return A.bL(null,r)}})
return A.bM($async$o_,r)},
o3(a){var s=0,r=A.bN(t.H),q,p
var $async$o3=A.bO(function(b,c){if(b===1)return A.bK(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.w(q,q)
A.pj(A.i(a==null?null:a.tex),p,"")
q=$.es
q=q==null?null:q.bu(p)
s=2
return A.ap(q instanceof A.a5?q:A.vf(q,t.H),$async$o3)
case 2:return A.bL(null,r)}})
return A.bM($async$o3,r)},
rA(){var s,r,q=v.G,p=A.a(A.f(q.window).innerWidth),o=A.a(A.f(q.window).innerHeight)
q=$.N.j()
s=p>0?p:800
q.width=s
s=$.N.j()
q=o>0?o:600
s.height=q
q=$.es
if(q!=null)q.ar(A.a($.N.j().width),A.a($.N.j().height))
$.cl.j().ar(A.a($.N.j().width),A.a($.N.j().height))
q=$.cn
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.N.j().setAttribute("data-renderer-surface",r)},
wF(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
A.eo(b9)
try{s=b9
if(!$.rn){$.pq=s
$.rn=!0}g=s
f=$.pq
if(typeof g!=="number")return g.a4()
r=(g-f)/1000
$.pq=s
g=r
if(typeof g!=="number")return g.b6()
if(g<0)r=0
g=r
if(typeof g!=="number")return g.a3()
if(g>0.25)r=0.25
A.wY(r)
if(!$.pr){g=$.nA
f=r
if(typeof f!=="number")return A.jE(f)
f=$.nA=g+f
q=0
g=t.mv
for(;;){if(f>=0.008333333333333333){e=q
if(typeof e!=="number")return e.b6()
e=e<10}else e=!1
if(!e)break
$.ps=$.ez()
f=$.Y.b
if(f===$.Y)A.k(A.aw(""))
f.jw(0.008333333333333333)
A.x0()
f=$.aB.b
if(f===$.aB)A.k(A.aw(""))
e=$.Y.b
if(e===$.Y)A.k(A.aw(""))
f.f=e.r.c>=0.5
f=f.d
d=A.aX(f,!1,g)
d.$flags=3
c=d
B.a.J(f)
if(c.length!==0){f=$.Y.b
if(f===$.Y)A.k(A.aw(""))
f.kO(c)}A.wX()
A.x_()
A.wZ()
A.wW(0.008333333333333333)
f=$.em.b
if(f===$.em)A.k(A.aw(""))
if(f.a!=null)if((f.b-=0.008333333333333333)<=0)f.a=null
f=$.b4.b
if(f===$.b4)A.k(A.aw(""))
p=f.a!==B.x
e=$.aa.b
if(e===$.aa)A.k(A.aw(""))
f.jx(0.008333333333333333,e)
if(p){f=$.b4.b
if(f===$.b4)A.k(A.aw(""))
f=f.e}else f=!1
if(f)A.rB(!0)
f=$.nA-0.008333333333333333
$.nA=f
e=q
if(typeof e!=="number")return e.a0()
q=e+1}o=B.d.Z(f/0.008333333333333333,0,1)
$.pB=A.qC($.tj(),$.ez(),o)
n=$.fV
if(n!=null){for(g=$.cM.length,b=0;b<$.cM.length;$.cM.length===g||(0,A.r)($.cM),++b){m=$.cM[b]
A.w7(n,m)}B.a.J($.cM)}}l=$.es
if(l!=null){$.by.j().dA($.jI(),$.c0,$.dy)
g=$.b5===$.en.j()?1:0
l.bV=g
$.rt=r
$.cl.j().aw(A.oW($.Y.j().gdF()))}else if($.bx.j().a===B.Z){$.by.j().dA($.jI(),$.c0,$.dy)
g=$.cn
if(g!=null){f=$.by.j()
e=f.a
a=new A.z(e.a,e.b,e.c)
e=f.b
a0=new A.z(e.a,e.b,e.c)
f=f.c
a1=g.b/g.c
a2=A.qh(a,a0,new A.z(f.a,f.b,f.c))
a3=A.oT(a1,60,1.0471975511965976,0.1)
g.cx=new A.dN(a2,a3,a3.P(0,a2),a,a0,0.1,60,a1)}g=$.cn
if(g!=null)g.hO($.aa.j(),$.aS)
g=$.cn
if(g!=null)g.hK($.aa.j(),$.aS,$.jI(),$.dx.j().gba(),Math.sin(3.141592653589793*$.dx.j().gba()))
if($.rs!==$.b4.j().a){$.rs=$.b4.j().a
$.pu=$.pu+1}g=$.cn
if(g!=null){f=s
if(typeof f!=="number")return f.le()
f/=1000
e=$.pu
a4=A.a(Math.max(0,$.Y.j().b))
if(!isFinite(f)||f<0)A.k(A.aD(f,"timeSeconds",null))
if(a4<0)A.k(A.v("frame clock seeds must be non-negative",null))
g.fr=f
g.fx=e
g.fy=a4}g=$.cn
if(g!=null){f=$.b4.j()
e=$.pt
a5=f.a
a6=f.gdW()
a7=a6>0?B.d.Z(f.b/a6,0,1):0
f=a5.a
a8=f>=3
a9=a5===B.ay
a4=a5===B.H?0.45:1
if(f>=1)b0=a5===B.O?a7:1
else b0=0
if(f>=2)f=a5===B.aw?a7:1
else f=0
b1=a8?320:0
b2=a8?5:8
b3=a9?1:0
b4=a9?a7:0
b5=a9?a7:0
b6=a9?a7:0
b7=a9?a7:0
g.db=new A.ia(a4,b0,f,b1,b2,b3,b4,b5,b6,b7,a9?a7:0,e)}$.cl.j().aw(A.oW($.Y.j().gdF()))
k=$.cn
if(k!=null){j=k.gkj()
if(j!=null){$.N.j().setAttribute("data-renderer-frame-stats",j)
g=$.N.j()
f=k.gki()?"ok":"exceeded"
g.setAttribute("data-renderer-budget",f)}}}A.cN("running")
g=$.bk.j()
g.e=g.d=0
g.c.J(0)
A.a(A.f(v.G.window).requestAnimationFrame(A.ak(A.rS())))}catch(b8){i=A.ag(b8)
h=A.c2(b8)
A.o4(i,h)}},
w7(a,b){switch(b){case"arm":a.kJ("confirm")
break
case"ambient-winnow":a.dD("winnow",0.28)
break
case"ambient-gate":a.dD("gate",0.22)
break}},
wY(a){var s=$.pl
if(s==null)return
s.textContent=""+B.d.aF(a>0?1/a:0)+" fps"},
wW(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.rE||$.b5!=null||$.aA.j().z){$.jH().a=new A.e(0,0,0)
return}s=$.bk.j().b
r=s.u(0,"KeyA")?-1:0
if(s.u(0,"KeyD"))++r
q=s.u(0,"KeyW")?1:0
p=new A.e(r,0,s.u(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.gac():p
n=$.bk.j().d
m=$.bk.j().e
$.c0=$.c0+n*0.0028
s=$.dy-m*0.0028
$.dy=s
$.dy=B.d.Z(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.e(s*Math.cos($.c0)+l*Math.sin($.c0),0,l*Math.cos($.c0)-s*Math.sin($.c0)).gac().P(0,2)
s=$.jH()
if(!isFinite(a1)||a1<0)A.k(A.aD(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.aD(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.a0(0,k.a4(0,i).P(0,1-l))
s.a=l
h=$.fT.j().kB($.aa.j(),$.aS,$.ez(),l.P(0,a1))
$.pz=h.a
if($.b4.j().a!==B.az&&$.b4.j().a!==B.H)$.aS=h.b
$.by.j().dA($.ez(),$.c0,$.dy)
s=$.by.j()
l=$.aa.j()
g=A.xH(s,$.aS,l)
$.r8.j().hQ(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.pJ($.by.j(),$.aa.j(),$.aS)
break
case 1:e=A.rW($.by.j(),$.aa.j(),$.aS)
break
case 2:d=A.rX($.by.j(),$.aa.j(),$.aS)
break
case 3:break}s=$.r6.j()
c=$.jJ().hF($.Y.j().gaH().a)
l=c==null?a0:c.i(0,"status")
s.dM(l,$.aS==="living-room")
if($.bk.j().c.aD(0,"KeyE")){s=$.Y.j().gaH()
l=e==null
i=l?a0:e.a
b=B.a.ag($.aB.j().eS(21),$.aB.j().gkr())
if(s.a===21&&i==="front-door"&&b){s=$.b4.j()
$.aa.j()
s.i_(B.cD,A.an(s.c,t.N))
B.a.k($.cM,"collapse")
A.et("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.Y.j().hY(1,1)){f.d=!0
s=$.em.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.fV
if(s!=null)s.cI()}else if(d!=null)if(d.w){s=$.Y.j()
if(s.f.ck(1))d.w=!1}else d.w=!0}s=$.em.j()
if(s.a!=null&&s.b>0){a=$.em.j().a
if(a!=null&&A.pJ($.by.j(),$.aa.j(),$.aS)!==a){s=$.em.j()
s.a=null
s.b=0}}},
x0(){var s,r,q,p,o,n,m,l,k,j=null
if($.aA.j().z||$.b5!=null||$.aB.j().e!=null)return
s=$.Y.j().gaH()
for(r=$.aB.j().eS(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aB.b
if(m===$.aB)A.k(A.aw(""))
if(m.c.u(0,n)||p<n.c)continue
r=$.aB.b
if(r===$.aB)A.k(A.aw(""))
l=r.jC(n)
if(!(l instanceof A.iG))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.c(r,q)
k=r[q].b}else k=j
if(k==null)return
A.q7(A.f(v.G.document),"exitPointerLock",j,j,j,j)
$.jH().a=new A.e(0,0,0)
r=$.aA.b
if(r===$.aA)A.k(A.aw(""))
r.dU(n.a,k)
return}},
wI(){var s=$.aB.j().e,r=s==null,q=r?null:s.gbR()
if(r||q==null)return
$.aA.j().dU(s.a.a,q)
if(s.d!==B.J){$.aA.j().ci(q)
A.py()}A.et("restored visitor")},
wX(){var s,r,q,p,o=$.Y.j().gaH(),n=$.jq.j().k_(o.a,o.b)
if(n.length===0)return
s=B.a.gb_(n)
$.jq.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.pd.j().dT(q,s.e)
p=A.x5(r)
if(p!=null)B.a.k($.cM,"ambient-"+p)},
x_(){var s,r,q,p,o=$.Y.j().gaH()
if(o.b<20)return
s=o.a
if(!$.o9.k(0,s))return
r=$.jJ().f
r===$&&A.j()
q=r.i(0,B.c.n(s))
r=t.j.b(q)?A.aX(q,!0,t.N):B.l
p=A.xF(r,$.Y.j().b,s)
if(p!=null)$.pd.j().dT("noticed",p)},
rB(a){var s,r,q,p,o
if($.pk!=null)return
s=$.Y.j().gaH()
r=$.Y.j().r.c
q=$.Y.j().e.b
p=A.o(q).h("aN<2>")
o=A.tY(new A.kn(s.a,1-r,new A.L(new A.aN(q,p),p.h("u(n.E)").a(new A.o5()),p.h("L<n.E>")).gq(0),$.Y.j().r.d,a))
if(o==null)return
A.rx(o)
A.px("ending recorded")},
rx(a){var s,r,q
$.pk=a
$.rE=!0
$.jH().a=new A.e(0,0,0)
$.b5=$.pe.j()
s=$.pe.j()
r=$.jJ().w
r===$&&A.j()
q=r.i(0,a.a.b)
s.hS(a,t.j.b(q)?A.aX(q,!0,t.N):B.l)},
w1(a){var s,r,q,p,o
A:{if("open"===a){s=B.R
break A}if("chain"===a){s=B.aU
break A}if("through-door"===a){s=B.aV
break A}if("letterbox"===a){s=B.aW
break A}s=B.L
break A}r=$.aB.j().jM(s)
if(s===B.R){q=$.aa.j().f.i(0,"front-door")
if(q!=null){q.ax=!0
p=$.fV
if(p!=null)p.cI()}}if(!(r instanceof A.iF)||s===B.L){$.aA.j().c1()
$.bk.j().aE($.N.j())
return}o=r.a.gbR()
if(o==null){A.pi()
$.aA.j().c1()
$.bk.j().aE($.N.j())
return}$.aA.j().ci(o)
A.py()},
w4(){var s,r=$.aB.j().jy()
if(!(r instanceof A.fj)||r.b){A.pi()
$.aA.j().c1()
$.bk.j().aE($.N.j())
return}s=r.a.gbR()
if(s==null){A.pi()
$.aA.j().c1()
$.bk.j().aE($.N.j())
return}$.aA.j().ci(s)
A.py()},
py(){var s,r,q,p,o=$.aA.j(),n=A.f(v.G.document),m=A.d([],t.fR)
for(s=$.js.j().dR(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.eg(p.a,B.a.gO(p.c).n(0)))}o.hR(n,m)},
w2(a){var s,r,q,p=$.aB.j().jN(a,!0,$.js.j())
if(p==null)return
s=$.js.j().jU(p,B.dP)
r=$.aA.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.j()
r.textContent=q},
pi(){var s,r=$.aa.j().f.i(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fV
if(s!=null)s.cI()}},
wZ(){var s,r,q,p,o,n,m,l,k
for(s=$.aa.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.b4.b
if(k===$.b4)A.k(A.aw(""))
if(B.a.u(k.d,n+m)){l.d=!1
continue}}}},
fC:function fC(a,b,c,d,e,f,g,h,i,j){var _=this
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
_.cx=_.CW=_.ch=null
_.cy=i
_.db=j
_.dx=null
_.go=_.fy=_.fx=_.fr=_.dy=0
_.id=!1},
nm:function nm(a){this.a=a},
nn:function nn(a){this.a=a},
eb:function eb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
op:function op(a){this.a=a},
oq:function oq(){},
or:function or(){},
ou:function ou(){},
ov:function ov(){},
ow:function ow(){},
ox:function ox(){},
oy:function oy(){},
oz:function oz(){},
oA:function oA(){},
oB:function oB(){},
os:function os(){},
ot:function ot(){},
o0:function o0(){},
o1:function o1(){},
o7:function o7(a){this.a=a},
o5:function o5(){},
q7(a,b,c,d,e,f){var s=a[b]()
return s},
q8(a,b,c){var s=null
return c.a(A.q7(a,b,s,s,s,s))},
tL(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
tK(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
rR(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
oF(a,b){var s=B.d.c0(a),r=A.rR(s,b),q=A.rR(s+1,b),p=B.d.Z(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
x5(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
xP(a){var s,r,q,p,o,n,m,l
a.H()
s=a.a
r=s.length
q=r*14
p=new Float32Array(q)
for(o=0;o<r;++o){n=s[o]
m=o*14
if(!(m<q))return A.c(p,m)
p[m]=n.a
l=m+1
if(!(l<q))return A.c(p,l)
p[l]=n.b
l=m+2
if(!(l<q))return A.c(p,l)
p[l]=n.c
l=m+3
if(!(l<q))return A.c(p,l)
p[l]=n.d
l=m+4
if(!(l<q))return A.c(p,l)
p[l]=n.e
l=m+5
if(!(l<q))return A.c(p,l)
p[l]=n.f
l=m+6
if(!(l<q))return A.c(p,l)
p[l]=1
l=m+7
if(!(l<q))return A.c(p,l)
p[l]=1
l=m+8
if(!(l<q))return A.c(p,l)
p[l]=1
l=m+9
if(!(l<q))return A.c(p,l)
p[l]=0
l=m+10
if(!(l<q))return A.c(p,l)
p[l]=1
l=m+11
if(!(l<q))return A.c(p,l)
p[l]=n.r
l=m+12
if(!(l<q))return A.c(p,l)
p[l]=n.w
l=m+13
if(!(l<q))return A.c(p,l)
p[l]=n.x}s=a.c
return new A.bS(B.ae,p,new Uint16Array(A.a0(a.b)),new A.h1(new A.z(s.a,s.b,s.c),new A.z(s.d,s.e,s.f)))},
xi(a){var s,r,q,p,o,n,m,l=B.u.cS(a,null),k=t.f
if(!k.b(l))throw A.b(B.dh)
s=t.N
r=t.z
q=A.aO(l,s,r)
p=A.w(s,t.P)
for(o=0;o<11;++o){n=B.e3[o]
m=q.i(0,n)
if(m==null)p.l(0,n,A.w(s,r))
else if(k.b(m))p.l(0,n,A.aO(m,s,r))
else throw A.b(A.ah('text.json section "'+n+'" must be an object',null,null))}return p},
xF(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gb7(a)
s=new A.ec()
s.cl((b^274953^c)>>>0)
r=s.ah(a.length)
if(!(r>=0&&r<a.length))return A.c(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.oN.prototype={}
J.hL.prototype={
U(a,b){return a===b},
gE(a){return A.f5(a)},
n(a){return"Instance of '"+A.ic(a)+"'"},
gM(a){return A.c1(A.pn(this))}}
J.hP.prototype={
n(a){return String(a)},
gE(a){return a?519018:218159},
gM(a){return A.c1(t.y)},
$iW:1,
$iu:1}
J.eQ.prototype={
U(a,b){return null==b},
n(a){return"null"},
gE(a){return 0},
$iW:1,
$iae:1}
J.eR.prototype={$iT:1}
J.cu.prototype={
gE(a){return 0},
gM(a){return B.fq},
n(a){return String(a)}}
J.i7.prototype={}
J.di.prototype={}
J.c7.prototype={
n(a){var s=a[$.t2()]
if(s==null)s=a[$.ey()]
if(s==null)return this.i1(a)
return"JavaScript function for "+J.dF(s)},
$icY:1}
J.dY.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.dZ.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.p.prototype={
bO(a,b){return new A.bE(a,A.P(a).h("@<1>").D(b).h("bE<1,2>"))},
k(a,b){A.P(a).c.a(b)
a.$flags&1&&A.bp(a,29)
a.push(b)},
I(a,b){var s
A.P(a).h("n<1>").a(b)
a.$flags&1&&A.bp(a,"addAll",2)
if(Array.isArray(b)){this.ik(a,b)
return}for(s=J.H(b);s.m();)a.push(s.gp())},
ik(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.am(a))
for(r=0;r<s;++r)a.push(b[r])},
J(a){a.$flags&1&&A.bp(a,"clear","clear")
a.length=0},
bv(a,b,c){var s=A.P(a)
return new A.a_(a,s.D(c).h("1(2)").a(b),s.h("@<1>").D(c).h("a_<1,2>"))},
aR(a,b){var s,r=A.c9(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.q(a[s]))
return r.join(b)},
bo(a,b,c,d){var s,r,q
d.a(b)
A.P(a).D(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.am(a))}return r},
S(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
gb_(a){if(a.length>0)return a[0]
throw A.b(A.hM())},
gO(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.hM())},
gb7(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.b(A.hM())
throw A.b(A.ud())},
a5(a,b){var s,r
A.P(a).h("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.am(a))}return!1},
ag(a,b){var s,r
A.P(a).h("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.am(a))}return!0},
X(a,b){var s,r,q,p,o,n=A.P(a)
n.h("h(1,1)?").a(b)
a.$flags&2&&A.bp(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.wp()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.a3()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.ew(b,2))
if(p>0)this.ja(a,p)},
W(a){return this.X(a,null)},
ja(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cj(a,b){var s,r,q,p
a.$flags&2&&A.bp(a,"shuffle")
s=a.length
while(s>1){r=b.ah(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
c2(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.ab(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.ab(a[s],b))return!0
return!1},
gG(a){return a.length===0},
gL(a){return a.length!==0},
n(a){return A.oM(a,"[","]")},
gt(a){return new J.cQ(a,a.length,A.P(a).h("cQ<1>"))},
gE(a){return A.f5(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.bp(a,"set length","change the length of")
if(b<0)throw A.b(A.aH(b,0,null,"newLength",null))
if(b>a.length)A.P(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.b(A.of(a,b))
return a[b]},
l(a,b,c){A.P(a).c.a(c)
a.$flags&2&&A.bp(a)
if(!(b>=0&&b<a.length))throw A.b(A.of(a,b))
a[b]=c},
dP(a,b){return new A.bJ(a,b.h("bJ<0>"))},
hf(a,b){var s
A.P(a).h("u(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gM(a){return A.c1(A.P(a))},
$iA:1,
$in:1,
$iC:1}
J.hN.prototype={
l4(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ic(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.l9.prototype={}
J.cQ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia7:1}
J.d3.prototype={
F(a,b){var s
A.eo(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc4(b)
if(this.gc4(a)===s)return 0
if(this.gc4(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc4(a){return a===0?1/a<0:a<0},
aG(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.as(""+a+".toInt()"))},
jJ(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.as(""+a+".ceil()"))},
c0(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.as(""+a+".floor()"))},
aF(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.as(""+a+".round()"))},
Z(a,b,c){if(this.F(b,c)>0)throw A.b(A.pC(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
cb(a,b){var s
if(b>20)throw A.b(A.aH(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc4(a))return"-"+s
return s},
l2(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.b(A.aH(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.c(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.as("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.c(p,1)
s=p[1]
if(3>=r)return A.c(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.P("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a0(a,b){return a+b},
ai(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
i3(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eI(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.eI(a,b)},
eI(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.as("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cG(a,b){var s
if(a>0)s=this.bM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jf(a,b){if(0>b)throw A.b(A.pC(b))
return this.bM(a,b)},
bM(a,b){return b>31?0:a>>>b},
b6(a,b){return a<b},
gM(a){return A.c1(t.o)},
$iav:1,
$it:1,
$iaC:1}
J.eP.prototype={
gM(a){return A.c1(t.S)},
$iW:1,
$ih:1}
J.hQ.prototype={
gM(a){return A.c1(t.i)},
$iW:1}
J.d4.prototype={
b3(a,b,c,d){var s=A.f6(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
Y(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aH(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
V(a,b){return this.Y(a,b,0)},
B(a,b,c){return a.substring(b,A.f6(b,c,a.length))},
bz(a,b){return this.B(a,b,null)},
l3(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.uh(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.ui(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
P(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.cz)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
kI(a,b,c){var s=b-a.length
if(s<=0)return a
return this.P(c,s)+a},
c3(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aH(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c2(a,b){return this.c3(a,b,0)},
u(a,b){return A.xL(a,b,0)},
F(a,b){var s
A.E(b)
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
gM(a){return A.c1(t.N)},
gq(a){return a.length},
$iW:1,
$iav:1,
$iqi:1,
$il:1}
A.cG.prototype={
gt(a){return new A.eB(J.H(this.gaK()),A.o(this).h("eB<1,2>"))},
gq(a){return J.aM(this.gaK())},
gG(a){return J.pO(this.gaK())},
gL(a){return J.tq(this.gaK())},
S(a,b){return A.o(this).y[1].a(J.jK(this.gaK(),b))},
n(a){return J.dF(this.gaK())}}
A.eB.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$ia7:1}
A.cS.prototype={
gaK(){return this.a}}
A.fr.prototype={$iA:1}
A.fp.prototype={
i(a,b){return this.$ti.y[1].a(J.aL(this.a,b))},
l(a,b,c){var s=this.$ti
J.bQ(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.tr(this.a,b)},
k(a,b){var s=this.$ti
J.h0(this.a,s.c.a(s.y[1].a(b)))},
X(a,b){var s
this.$ti.h("h(2,2)?").a(b)
s=b==null?null:new A.n2(this,b)
J.ts(this.a,s)},
$iA:1,
$iC:1}
A.n2.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("h(1,1)")}}
A.bE.prototype={
bO(a,b){return new A.bE(this.a,this.$ti.h("@<1>").D(b).h("bE<1,2>"))},
gaK(){return this.a}}
A.d5.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.hg.prototype={
gq(a){return this.a.length},
i(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.ml.prototype={}
A.A.prototype={}
A.a3.prototype={
gt(a){var s=this
return new A.c8(s,s.gq(s),A.o(s).h("c8<a3.E>"))},
gG(a){return this.gq(this)===0},
a5(a,b){var s,r,q=this
A.o(q).h("u(a3.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.S(0,r)))return!0
if(s!==q.gq(q))throw A.b(A.am(q))}return!1},
aR(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.S(0,0))
if(o!==p.gq(p))throw A.b(A.am(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.S(0,q))
if(o!==p.gq(p))throw A.b(A.am(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.S(0,q))
if(o!==p.gq(p))throw A.b(A.am(p))}return r.charCodeAt(0)==0?r:r}},
dO(a,b){return this.i0(0,A.o(this).h("u(a3.E)").a(b))},
bv(a,b,c){var s=A.o(this)
return new A.a_(this,s.D(c).h("1(a3.E)").a(b),s.h("@<a3.E>").D(c).h("a_<1,2>"))},
b5(a,b){var s=A.o(this).h("a3.E")
if(b)s=A.R(this,s)
else{s=A.R(this,s)
s.$flags=1
s=s}return s},
b4(a){return this.b5(0,!0)},
aU(a){var s,r=this,q=A.oQ(A.o(r).h("a3.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.S(0,s))
return q}}
A.fg.prototype={
giJ(){var s=J.aM(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjj(){var s=J.aM(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aM(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
S(a,b){var s=this,r=s.gjj()+b
if(b<0||r>=s.giJ())throw A.b(A.l6(b,s.gq(0),s,"index"))
return J.jK(s.a,r)},
b5(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.bn(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.q6(0,n):J.q5(0,n)}r=A.c9(s,m.S(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.S(n,o+q))
if(m.gq(n)<l)throw A.b(A.am(p))}return r},
b4(a){return this.b5(0,!0)}}
A.c8.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.bn(q),o=p.gq(q)
if(r.b!==o)throw A.b(A.am(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.S(q,s);++r.c
return!0},
$ia7:1}
A.ca.prototype={
gt(a){return new A.d7(J.H(this.a),this.b,A.o(this).h("d7<1,2>"))},
gq(a){return J.aM(this.a)},
gG(a){return J.pO(this.a)},
S(a,b){return this.b.$1(J.jK(this.a,b))}}
A.cV.prototype={$iA:1}
A.d7.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia7:1}
A.a_.prototype={
gq(a){return J.aM(this.a)},
S(a,b){return this.b.$1(J.jK(this.a,b))}}
A.L.prototype={
gt(a){return new A.M(J.H(this.a),this.b,this.$ti.h("M<1>"))}}
A.M.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$ia7:1}
A.bJ.prototype={
gt(a){return new A.fl(J.H(this.a),this.$ti.h("fl<1>"))}}
A.fl.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$ia7:1}
A.ac.prototype={
sq(a,b){throw A.b(A.as("Cannot change the length of a fixed-length list"))},
k(a,b){A.b6(a).h("ac.E").a(b)
throw A.b(A.as("Cannot add to a fixed-length list"))}}
A.bX.prototype={
l(a,b,c){A.o(this).h("bX.E").a(c)
throw A.b(A.as("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.b(A.as("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).h("bX.E").a(b)
throw A.b(A.as("Cannot add to an unmodifiable list"))},
X(a,b){A.o(this).h("h(bX.E,bX.E)?").a(b)
throw A.b(A.as("Cannot modify an unmodifiable list"))}}
A.e9.prototype={}
A.fb.prototype={
gq(a){return J.aM(this.a)},
S(a,b){var s=this.a,r=J.bn(s)
return r.S(s,r.gq(s)-1-b)}}
A.fS.prototype={}
A.eg.prototype={$r:"+(1,2)",$s:1}
A.eh.prototype={$r:"+(1,2,3)",$s:2}
A.fD.prototype={$r:"+(1,2,3,4)",$s:3}
A.eD.prototype={}
A.dP.prototype={
gG(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
n(a){return A.oS(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.tG()},
gT(){return new A.c_(this.k7(),A.o(this).h("c_<J<1,2>>"))},
k7(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gT(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gN(),o=o.gt(o),n=A.o(s),m=n.y[1],n=n.h("J<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.i(0,l)
r=4
return a.b=new A.J(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
b1(a,b,c,d){var s=A.w(c,d)
this.aa(0,new A.kc(this,A.o(this).D(c).D(d).h("J<1,2>(3,4)").a(b),s))
return s},
$iO:1}
A.kc.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).h("~(1,2)")}}
A.a1.prototype={
gq(a){return this.b.length},
gek(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a_(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.a_(b))return null
return this.b[this.a[b]]},
aa(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gek()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gN(){return new A.dt(this.gek(),this.$ti.h("dt<1>"))},
gam(){return new A.dt(this.b,this.$ti.h("dt<2>"))}}
A.dt.prototype={
gq(a){return this.a.length},
gG(a){return 0===this.a.length},
gL(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.du(s,s.length,this.$ti.h("du<1>"))}}
A.du.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia7:1}
A.eK.prototype={
bb(){var s=this,r=s.$map
if(r==null){r=new A.eS(s.$ti.h("eS<1,2>"))
A.rN(s.a,r)
s.$map=r}return r},
i(a,b){return this.bb().i(0,b)},
aa(a,b){this.$ti.h("~(1,2)").a(b)
this.bb().aa(0,b)},
gN(){var s=this.bb()
return new A.ai(s,A.o(s).h("ai<1>"))},
gam(){var s=this.bb()
return new A.aN(s,A.o(s).h("aN<2>"))},
gq(a){return this.bb().a}}
A.eE.prototype={
k(a,b){A.o(this).c.a(b)
A.tH()}}
A.c3.prototype={
gq(a){return this.b},
gG(a){return this.b===0},
gL(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.du(s,s.length,r.$ti.h("du<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
aU(a){return A.oR(this,this.$ti.c)}}
A.lO.prototype={
$0(){return B.d.c0(1000*this.a.now())},
$S:16}
A.fc.prototype={}
A.mE.prototype={
al(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.f1.prototype={
n(a){return"Null check operator used on a null value"}}
A.hR.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iy.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.lC.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eI.prototype={}
A.fF.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibW:1}
A.cp.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.t1(r==null?"unknown":r)+"'"},
gM(a){var s=A.pE(this)
return A.c1(s==null?A.b6(this):s)},
$icY:1,
gld(){return this},
$C:"$1",
$R:1,
$D:null}
A.he.prototype={$C:"$0",$R:0}
A.hf.prototype={$C:"$2",$R:2}
A.iu.prototype={}
A.ir.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.t1(s)+"'"}}
A.dM.prototype={
U(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dM))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.jF(this.a)^A.f5(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ic(this.a)+"'")}}
A.ij.prototype={
n(a){return"RuntimeError: "+this.a}}
A.br.prototype={
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.ai(this,A.o(this).h("ai<1>"))},
gam(){return new A.aN(this,A.o(this).h("aN<2>"))},
gT(){return new A.X(this,A.o(this).h("X<1,2>"))},
a_(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.km(a)},
km(a){var s=this.d
if(s==null)return!1
return this.bq(s[this.bp(a)],a)>=0},
I(a,b){A.o(this).h("O<1,2>").a(b).aa(0,new A.li(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.kn(b)},
kn(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bp(a)]
r=this.bq(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.dZ(s==null?q.b=q.cB():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.dZ(r==null?q.c=q.cB():r,b,c)}else q.kp(b,c)},
kp(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cB()
r=o.bp(a)
q=s[r]
if(q==null)s[r]=[o.cC(a,b)]
else{p=o.bq(q,a)
if(p>=0)q[p].b=b
else q.push(o.cC(a,b))}},
kL(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.h("2()").a(b)
if(q.a_(a)){s=q.i(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
aD(a,b){if((b&0x3fffffff)===b)return this.ii(this.c,b)
else return this.ko(b)},
ko(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bp(a)
r=n[s]
q=o.bq(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dX(p)
if(r.length===0)delete n[s]
return p.b},
J(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cm()}},
aa(a,b){var s,r,q=this
A.o(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.am(q))
s=s.c}},
dZ(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cC(b,c)
else s.b=c},
ii(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.dX(s)
delete a[b]
return s.b},
cm(){this.r=this.r+1&1073741823},
cC(a,b){var s=this,r=A.o(s),q=new A.lq(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cm()
return q},
dX(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cm()},
bp(a){return J.b7(a)&1073741823},
bq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
n(a){return A.oS(this)},
cB(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ioP:1}
A.li.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).h("~(1,2)")}}
A.lq.prototype={}
A.ai.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cv(s,s.r,s.e,this.$ti.h("cv<1>"))}}
A.cv.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.am(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia7:1}
A.aN.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aj(s,s.r,s.e,this.$ti.h("aj<1>"))}}
A.aj.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.am(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia7:1}
A.X.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gt(a){var s=this.a
return new A.eU(s,s.r,s.e,this.$ti.h("eU<1,2>"))}}
A.eU.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.am(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.J(s.a,s.b,r.$ti.h("J<1,2>"))
r.c=s.c
return!0}},
$ia7:1}
A.eS.prototype={
bp(a){return A.xd(a)&1073741823},
bq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.ok.prototype={
$1(a){return this.a(a)},
$S:5}
A.ol.prototype={
$2(a,b){return this.a(a,b)},
$S:48}
A.om.prototype={
$1(a){return this.a(A.E(a))},
$S:17}
A.bv.prototype={
gM(a){return A.c1(this.ei())},
ei(){return A.xn(this.$r,this.bH())},
n(a){return this.eM(!1)},
eM(a){var s,r,q,p,o,n=this.iN(),m=this.bH(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.qk(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iN(){var s,r=this.$s
while($.no.length<=r)B.a.k($.no,null)
s=$.no[r]
if(s==null){s=this.iy()
B.a.l($.no,r,s)}return s},
iy(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.hO(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.an(j,k)}}
A.ed.prototype={
bH(){return[this.a,this.b]},
U(a,b){if(b==null)return!1
return b instanceof A.ed&&this.$s===b.$s&&J.ab(this.a,b.a)&&J.ab(this.b,b.b)},
gE(a){return A.cc(this.$s,this.a,this.b,B.k)}}
A.ee.prototype={
bH(){return[this.a,this.b,this.c]},
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.ee&&s.$s===b.$s&&J.ab(s.a,b.a)&&J.ab(s.b,b.b)&&J.ab(s.c,b.c)},
gE(a){var s=this
return A.cc(s.$s,s.a,s.b,s.c)}}
A.ef.prototype={
bH(){return this.a},
U(a,b){if(b==null)return!1
return b instanceof A.ef&&this.$s===b.$s&&A.vo(this.a,b.a)},
gE(a){return A.cc(this.$s,A.ur(this.a),B.k,B.k)}}
A.n3.prototype={
cE(){var s=this.b
if(s===this)throw A.b(new A.d5("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.b(A.aw(""))
return s}}
A.cx.prototype={
gM(a){return B.fj},
eT(a,b,c){return new Float32Array(a,b,c)},
$iW:1,
$icx:1}
A.e0.prototype={$ie0:1}
A.eZ.prototype={
gjD(a){if(((a.$flags|0)&2)!==0)return new A.nv(a.buffer)
else return a.buffer},
iT(a,b,c,d){var s=A.aH(b,0,c,d,null)
throw A.b(s)},
e4(a,b,c,d){if(b>>>0!==b||b>c)this.iT(a,b,c,d)}}
A.nv.prototype={
eT(a,b,c){var s=A.uo(this.a,b,c)
s.$flags=3
return s}}
A.hZ.prototype={
gM(a){return B.fk},
$iW:1}
A.ax.prototype={
gq(a){return a.length},
eD(a,b,c,d,e){var s,r,q=a.length
this.e4(a,b,q,"start")
this.e4(a,c,q,"end")
if(b>c)throw A.b(A.aH(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.v(e,null))
r=d.length
if(r-e<s)throw A.b(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibb:1}
A.eX.prototype={
i(a,b){A.cm(b,a,a.length)
return a[b]},
l(a,b,c){A.fU(c)
a.$flags&2&&A.bp(a)
A.cm(b,a,a.length)
a[b]=c},
hL(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bp(a,5)
this.eD(a,b,c,d,0)
return},
$iA:1,
$in:1,
$iC:1}
A.eY.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.bp(a)
A.cm(b,a,a.length)
a[b]=c},
hM(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bp(a,5)
this.eD(a,b,c,d,e)
return},
$iA:1,
$in:1,
$iC:1}
A.eW.prototype={
gM(a){return B.fl},
b9(a,b,c){return new Float32Array(a.subarray(b,A.w_(b,c,a.length)))},
$iW:1,
$ikz:1}
A.i_.prototype={
gM(a){return B.fm},
$iW:1}
A.i0.prototype={
gM(a){return B.fn},
i(a,b){A.cm(b,a,a.length)
return a[b]},
$iW:1}
A.i1.prototype={
gM(a){return B.fo},
i(a,b){A.cm(b,a,a.length)
return a[b]},
$iW:1}
A.i2.prototype={
gM(a){return B.fp},
i(a,b){A.cm(b,a,a.length)
return a[b]},
$iW:1}
A.i3.prototype={
gM(a){return B.fs},
i(a,b){A.cm(b,a,a.length)
return a[b]},
$iW:1,
$ip0:1}
A.i4.prototype={
gM(a){return B.ft},
i(a,b){A.cm(b,a,a.length)
return a[b]},
$iW:1}
A.f_.prototype={
gM(a){return B.fu},
gq(a){return a.length},
i(a,b){A.cm(b,a,a.length)
return a[b]},
$iW:1}
A.f0.prototype={
gM(a){return B.fv},
gq(a){return a.length},
i(a,b){A.cm(b,a,a.length)
return a[b]},
$iW:1,
$iiw:1}
A.fy.prototype={}
A.fz.prototype={}
A.fA.prototype={}
A.fB.prototype={}
A.bG.prototype={
h(a){return A.fK(v.typeUniverse,this,a)},
D(a){return A.qY(v.typeUniverse,this,a)}}
A.j_.prototype={}
A.jm.prototype={
n(a){return A.bl(this.a,null)}}
A.iY.prototype={
n(a){return this.a}}
A.fG.prototype={$icg:1}
A.n_.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:18}
A.mZ.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.n0.prototype={
$0(){this.a.$0()},
$S:8}
A.n1.prototype={
$0(){this.a.$0()},
$S:8}
A.ns.prototype={
ih(a,b){if(self.setTimeout!=null)self.setTimeout(A.ew(new A.nt(this,b),0),a)
else throw A.b(A.as("`setTimeout()` not found."))}}
A.nt.prototype={
$0(){this.b.$0()},
$S:0}
A.iO.prototype={
cM(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.co(a)
else{s=r.a
if(q.h("b9<1>").b(a))s.e3(a)
else s.bF(a)}},
cN(a,b){var s=this.a
if(this.b)s.aI(new A.au(a,b))
else s.bB(new A.au(a,b))}}
A.nE.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.nF.prototype={
$2(a,b){this.a.$2(1,new A.eI(a,t.l.a(b)))},
$S:51}
A.ob.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:59}
A.bj.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jb(a,b){var s,r,q
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
o.d=null}q=o.jb(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.qT
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
o.a=A.qT
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.m("sync*"))}return!1},
lf(a){var s,r,q=this
if(a instanceof A.c_){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.H(a)
return 2}},
$ia7:1}
A.c_.prototype={
gt(a){return new A.bj(this.a(),this.$ti.h("bj<1>"))}}
A.au.prototype={
n(a){return A.q(this.a)},
$ia2:1,
gb8(){return this.b}}
A.kG.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.ea(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ag(p)
q=A.c2(p)
l=r
o=q
n=A.po(l,o)
l=new A.au(l,o)
m.b.aI(l)
return}m.b.ea(s)}},
$S:0}
A.kI.prototype={
$2(a,b){var s,r,q=this
A.ep(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aI(new A.au(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aI(new A.au(r,s))}},
$S:63}
A.kH.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bQ(r,k.b,a)
if(J.ab(s,0)){q=A.d([],j.h("p<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.h0(q,l)}k.c.bF(q)}}else if(J.ab(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aI(new A.au(q,o))}},
$S(){return this.d.h("ae(0)")}}
A.iS.prototype={
cN(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.m("Future already completed"))
s.bB(A.wo(a,b))},
eV(a){return this.cN(a,null)}}
A.fm.prototype={
cM(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.m("Future already completed"))
s.co(r.h("1/").a(a))}}
A.dp.prototype={
kA(a){if((this.c&15)!==6)return!0
return this.b.b.dK(t.iW.a(this.d),a.a,t.y,t.K)},
kl(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.l_(q,m,a.b,o,n,t.l)
else p=l.dK(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.ag(s))){if((r.c&1)!==0)throw A.b(A.v("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.v("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.a5.prototype={
dL(a,b,c){var s,r,q=this.$ti
q.D(c).h("1/(2)").a(a)
s=$.a4
if(s===B.q){if(!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aD(b,"onError",u.c))}else{c.h("@<0/>").D(q.c).h("1(2)").a(a)
b=A.wH(b,s)}r=new A.a5(s,c.h("a5<0>"))
this.cn(new A.dp(r,3,a,b,q.h("@<1>").D(c).h("dp<1,2>")))
return r},
eL(a,b,c){var s,r=this.$ti
r.D(c).h("1/(2)").a(a)
s=new A.a5($.a4,c.h("a5<0>"))
this.cn(new A.dp(s,19,a,b,r.h("@<1>").D(c).h("dp<1,2>")))
return s},
je(a){this.a=this.a&1|16
this.c=a},
bE(a){this.a=a.a&30|this.a&1
this.c=a.c},
cn(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.cn(a)
return}r.bE(s)}A.jA(null,null,r.b,t.M.a(new A.n5(r,a)))}},
er(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.er(a)
return}m.bE(n)}l.a=m.bK(a)
A.jA(null,null,m.b,t.M.a(new A.na(l,m)))}},
bd(){var s=t.F.a(this.c)
this.c=null
return this.bK(s)},
bK(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ea(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("b9<1>").b(a))A.n8(a,r,!0)
else{s=r.bd()
q.c.a(a)
r.a=8
r.c=a
A.dq(r,s)}},
bF(a){var s,r=this
r.$ti.c.a(a)
s=r.bd()
r.a=8
r.c=a
A.dq(r,s)},
ix(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bd()
q.bE(a)
A.dq(q,r)},
aI(a){var s=this.bd()
this.je(a)
A.dq(this,s)},
co(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("b9<1>").b(a)){this.e3(a)
return}this.im(a)},
im(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.jA(null,null,s.b,t.M.a(new A.n7(s,a)))},
e3(a){A.n8(this.$ti.h("b9<1>").a(a),this,!1)
return},
bB(a){this.a^=2
A.jA(null,null,this.b,t.M.a(new A.n6(this,a)))},
$ib9:1}
A.n5.prototype={
$0(){A.dq(this.a,this.b)},
$S:0}
A.na.prototype={
$0(){A.dq(this.b,this.a.a)},
$S:0}
A.n9.prototype={
$0(){A.n8(this.a.a,this.b,!0)},
$S:0}
A.n7.prototype={
$0(){this.a.bF(this.b)},
$S:0}
A.n6.prototype={
$0(){this.a.aI(this.b)},
$S:0}
A.nd.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.kZ(t.mY.a(q.d),t.z)}catch(p){s=A.ag(p)
r=A.c2(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.jT(q)
n=k.a
n.c=new A.au(q,o)
q=n}q.b=!0
return}if(j instanceof A.a5&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.a5){m=k.b.a
l=new A.a5(m.b,m.$ti)
j.dL(new A.ne(l,m),new A.nf(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ne.prototype={
$1(a){this.a.ix(this.b)},
$S:18}
A.nf.prototype={
$2(a,b){A.ep(a)
t.l.a(b)
this.a.aI(new A.au(a,b))},
$S:32}
A.nc.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dK(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ag(l)
r=A.c2(l)
q=s
p=r
if(p==null)p=A.jT(q)
o=this.a
o.c=new A.au(q,p)
o.b=!0}},
$S:0}
A.nb.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.kA(s)&&p.a.e!=null){p.c=p.a.kl(s)
p.b=!1}}catch(o){r=A.ag(o)
q=A.c2(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.jT(p)
m=l.b
m.c=new A.au(p,n)
p=m}p.b=!0}},
$S:0}
A.iP.prototype={}
A.jk.prototype={}
A.fR.prototype={$iqL:1}
A.jd.prototype={
l0(a){var s,r,q
t.M.a(a)
try{if(B.q===$.a4){a.$0()
return}A.rC(null,null,this,a,t.H)}catch(q){s=A.ag(q)
r=A.c2(q)
A.pv(A.ep(s),t.l.a(r))}},
eU(a){return new A.np(this,t.M.a(a))},
kZ(a,b){b.h("0()").a(a)
if($.a4===B.q)return a.$0()
return A.rC(null,null,this,a,b)},
dK(a,b,c,d){c.h("@<0>").D(d).h("1(2)").a(a)
d.a(b)
if($.a4===B.q)return a.$1(b)
return A.wK(null,null,this,a,b,c,d)},
l_(a,b,c,d,e,f){d.h("@<0>").D(e).D(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a4===B.q)return a.$2(b,c)
return A.wJ(null,null,this,a,b,c,d,e,f)},
hu(a,b,c,d){return b.h("@<0>").D(c).D(d).h("1(2,3)").a(a)}}
A.np.prototype={
$0(){return this.a.l0(this.b)},
$S:0}
A.o6.prototype={
$0(){A.u2(this.a,this.b)},
$S:0}
A.ft.prototype={
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.dr(this,this.$ti.h("dr<1>"))},
gam(){var s=this.$ti
return A.hV(new A.dr(this,s.h("dr<1>")),new A.ng(this),s.c,s.y[1])},
a_(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iB(a)},
iB(a){var s=this.d
if(s==null)return!1
return this.aJ(this.eh(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.qN(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.qN(q,b)
return r}else return this.iO(b)},
iO(a){var s,r,q=this.d
if(q==null)return null
s=this.eh(q,a)
r=this.aJ(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.e7(s==null?m.b=A.p5():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.e7(r==null?m.c=A.p5():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.p5()
p=A.jF(b)&1073741823
o=q[p]
if(o==null){A.p6(q,p,[b,c]);++m.a
m.e=null}else{n=m.aJ(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aa(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.e8()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.am(m))}},
e8(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
e7(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.p6(a,b,c)},
eh(a,b){return a[A.jF(b)&1073741823]}}
A.ng.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.i(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.h("2(1)")}}
A.fv.prototype={
aJ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dr.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gL(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.fu(s,s.e8(),this.$ti.h("fu<1>"))}}
A.fu.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.am(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia7:1}
A.bu.prototype={
en(){return new A.bu(A.o(this).h("bu<1>"))},
gt(a){var s=this,r=new A.dv(s,s.r,A.o(s).h("dv<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Y.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Y.a(r[b])!=null}else return this.iA(b)},
iA(a){var s=this.d
if(s==null)return!1
return this.aJ(s[this.ct(a)],a)>=0},
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.e6(s==null?q.b=A.p7():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.e6(r==null?q.c=A.p7():r,b)}else return q.ij(b)},
ij(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.p7()
r=p.ct(a)
q=s[r]
if(q==null)s[r]=[p.cr(a)]
else{if(p.aJ(q,a)>=0)return!1
q.push(p.cr(a))}return!0},
aD(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.es(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.es(s.c,b)
else return s.j9(b)},
j9(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ct(a)
r=n[s]
q=o.aJ(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eP(p)
return!0},
J(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cA()}},
e6(a,b){A.o(this).c.a(b)
if(t.Y.a(a[b])!=null)return!1
a[b]=this.cr(b)
return!0},
es(a,b){var s
if(a==null)return!1
s=t.Y.a(a[b])
if(s==null)return!1
this.eP(s)
delete a[b]
return!0},
cA(){this.r=this.r+1&1073741823},
cr(a){var s,r=this,q=new A.j4(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cA()
return q},
eP(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cA()},
ct(a){return J.b7(a)&1073741823},
aJ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
$iqf:1}
A.j4.prototype={}
A.dv.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.am(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$ia7:1}
A.lr.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:33}
A.G.prototype={
gt(a){return new A.c8(a,this.gq(a),A.b6(a).h("c8<G.E>"))},
S(a,b){return this.i(a,b)},
gG(a){return this.gq(a)===0},
gL(a){return!this.gG(a)},
ag(a,b){var s,r
A.b6(a).h("u(G.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.i(a,r)))return!1
if(s!==this.gq(a))throw A.b(A.am(a))}return!0},
a5(a,b){var s,r
A.b6(a).h("u(G.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.i(a,r)))return!0
if(s!==this.gq(a))throw A.b(A.am(a))}return!1},
dP(a,b){return new A.bJ(a,b.h("bJ<0>"))},
bv(a,b,c){var s=A.b6(a)
return new A.a_(a,s.D(c).h("1(G.E)").a(b),s.h("@<G.E>").D(c).h("a_<1,2>"))},
k(a,b){var s
A.b6(a).h("G.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
bO(a,b){return new A.bE(a,A.b6(a).h("@<G.E>").D(b).h("bE<1,2>"))},
X(a,b){var s,r=A.b6(a)
r.h("h(G.E,G.E)?").a(b)
s=b==null?A.xc():b
A.io(a,0,this.gq(a)-1,s,r.h("G.E"))},
kf(a,b,c,d){var s
A.b6(a).h("G.E?").a(d)
A.f6(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.oM(a,"[","]")},
$iA:1,
$in:1,
$iC:1}
A.S.prototype={
aa(a,b){var s,r,q,p=A.o(this)
p.h("~(S.K,S.V)").a(b)
for(s=this.gN(),s=s.gt(s),p=p.h("S.V");s.m();){r=s.gp()
q=this.i(0,r)
b.$2(r,q==null?p.a(q):q)}},
gT(){return this.gN().bv(0,new A.lt(this),A.o(this).h("J<S.K,S.V>"))},
b1(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.D(c).D(d).h("J<1,2>(S.K,S.V)").a(b)
s=A.w(c,d)
for(r=this.gN(),r=r.gt(r),n=n.h("S.V");r.m();){q=r.gp()
p=this.i(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
ju(a){var s,r,q
A.o(this).h("n<J<S.K,S.V>>").a(a)
for(s=a.$ti,r=new A.d7(J.H(a.a),a.b,s.h("d7<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gN()
return s.gq(s)},
gG(a){var s=this.gN()
return s.gG(s)},
gL(a){var s=this.gN()
return s.gL(s)},
gam(){return new A.fw(this,A.o(this).h("fw<S.K,S.V>"))},
n(a){return A.oS(this)},
$iO:1}
A.lt.prototype={
$1(a){var s=this.a,r=A.o(s)
r.h("S.K").a(a)
s=s.i(0,a)
if(s==null)s=r.h("S.V").a(s)
return new A.J(a,s,r.h("J<S.K,S.V>"))},
$S(){return A.o(this.a).h("J<S.K,S.V>(S.K)")}}
A.lu.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:19}
A.fw.prototype={
gq(a){var s=this.a
return s.gq(s)},
gG(a){var s=this.a
return s.gG(s)},
gL(a){var s=this.a
return s.gL(s)},
gt(a){var s=this.a,r=s.gN()
return new A.fx(r.gt(r),s,this.$ti.h("fx<1,2>"))}}
A.fx.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.i(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia7:1}
A.fL.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.as("Cannot modify unmodifiable map"))}}
A.e_.prototype={
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
gam(){return this.a.gam()},
gT(){return this.a.gT()},
b1(a,b,c,d){return this.a.b1(0,A.o(this).D(c).D(d).h("J<1,2>(3,4)").a(b),c,d)},
$iO:1}
A.cD.prototype={}
A.ce.prototype={
gG(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
I(a,b){var s
for(s=J.H(A.o(this).h("n<1>").a(b));s.m();)this.k(0,s.gp())},
cU(a){var s,r,q=this.aU(0)
for(s=this.gt(this);s.m();){r=s.gp()
if(a.u(0,r))q.aD(0,r)}return q},
n(a){return A.oM(this,"{","}")},
ag(a,b){var s
A.o(this).h("u(1)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aR(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.dF(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
a5(a,b){var s
A.o(this).h("u(1)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
S(a,b){var s,r
A.ie(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.b(A.l6(b,b-r,this,"index"))},
$iA:1,
$in:1,
$icA:1}
A.fE.prototype={
cU(a){var s,r,q,p=this,o=p.en()
for(s=A.j5(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.u(0,q))o.k(0,q)}return o},
aU(a){var s=this.en()
s.I(0,this)
return s}}
A.jn.prototype={
k(a,b){this.$ti.c.a(b)
return A.vz()}}
A.fh.prototype={
u(a,b){return this.a.u(0,b)},
gq(a){return this.a.a},
gt(a){var s=this.a
return A.j5(s,s.r,A.o(s).c)},
aU(a){return this.a.aU(0)}}
A.ek.prototype={}
A.fM.prototype={}
A.j2.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.j4(b):s}},
gq(a){return this.b==null?this.c.a:this.aV().length},
gG(a){return this.gq(0)===0},
gL(a){return this.gq(0)>0},
gN(){if(this.b==null){var s=this.c
return new A.ai(s,A.o(s).h("ai<1>"))}return new A.j3(this)},
gam(){var s,r=this
if(r.b==null){s=r.c
return new A.aN(s,A.o(s).h("aN<2>"))}return A.hV(r.aV(),new A.ni(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.E(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a_(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jn().l(0,b,c)},
a_(a){if(this.b==null)return this.c.a_(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aa(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.aa(0,b)
s=o.aV()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.nG(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.am(o))}},
aV(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.d(Object.keys(this.a),t.s)
return s},
jn(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.w(t.N,t.z)
r=n.aV()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.i(0,o))}if(p===0)B.a.k(r,"")
else B.a.J(r)
n.a=n.b=null
return n.c=s},
j4(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.nG(this.a[a])
return this.b[a]=s}}
A.ni.prototype={
$1(a){return this.a.i(0,A.E(a))},
$S:17}
A.j3.prototype={
gq(a){return this.a.gq(0)},
S(a,b){var s=this.a
if(s.b==null)s=s.gN().S(0,b)
else{s=s.aV()
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gN()
s=s.gt(s)}else{s=s.aV()
s=new J.cQ(s,s.length,A.P(s).h("cQ<1>"))}return s}}
A.ny.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:20}
A.nx.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:20}
A.h7.prototype={
kC(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.f6(a4,a5,a2)
s=$.te()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.c(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.c(a3,k)
h=A.oj(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.c(a3,g)
f=A.oj(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aJ("")
g=o}else g=o
g.a+=B.b.B(a3,p,q)
c=A.ad(j)
g.a+=c
p=k
continue}}throw A.b(A.ah("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.B(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.pP(a3,m,a5,n,l,r)
else{b=B.c.ai(r-1,4)+1
if(b===1)throw A.b(A.ah(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.b3(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.pP(a3,m,a5,n,l,a)
else{b=B.c.ai(a,4)
if(b===1)throw A.b(A.ah(a1,a3,a5))
if(b>1)a3=B.b.b3(a3,a5,a5,b===2?"==":"=")}return a3}}
A.k4.prototype={}
A.cT.prototype={}
A.hk.prototype={}
A.hu.prototype={}
A.eT.prototype={
n(a){var s=A.hv(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hT.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.hS.prototype={
cS(a,b){var s=A.wE(a,this.gjW().a)
return s},
aZ(a,b){var s=A.vh(a,this.gk5().b,null)
return s},
gk5(){return B.dU},
gjW(){return B.dT}}
A.lk.prototype={}
A.lj.prototype={}
A.nk.prototype={
hD(a){var s,r,q,p,o,n,m=a.length
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
cq(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.hT(a,null))}B.a.k(s,a)},
cc(a){var s,r,q,p,o=this
if(o.hC(a))return
o.cq(a)
try{s=o.b.$1(a)
if(!o.hC(s)){q=A.qb(a,null,o.geq())
throw A.b(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.ag(p)
q=A.qb(a,r,o.geq())
throw A.b(q)}},
hC(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hD(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cq(a)
q.lb(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cq(a)
r=q.lc(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
lb(a){var s,r,q=this.c
q.a+="["
s=J.bn(a)
if(s.gL(a)){this.cc(s.i(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cc(s.i(a,r))}}q.a+="]"},
lc(a){var s,r,q,p,o,n,m=this,l={}
if(a.gG(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.c9(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aa(0,new A.nl(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hD(A.E(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.cc(r[n])}p.a+="}"
return!0}}
A.nl.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:19}
A.nj.prototype={
geq(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iC.prototype={}
A.mK.prototype={
jS(a){return new A.nw(this.a).iC(t.J.a(a),0,null,!0)}}
A.nw.prototype={
iC(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.f6(b,c,J.aM(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.vQ(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.vP(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cu(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.vR(o)
l.b=0
throw A.b(A.ah(m,a,p+l.c))}return n},
cu(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.K(b+c,2)
r=q.cu(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cu(a,s,c,d)}return q.jV(a,b,c,d)},
jV(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aJ(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.c(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.c(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.c(i,p)
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
p=A.ad(a[l])
e.a+=p}else{p=A.qt(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ad(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.cU.prototype={
U(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.cU)if(this.a===b.a)s=this.b===b.b
return s},
gE(a){return A.cc(this.a,this.b,B.k,B.k)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
n(a){var s=this,r=A.tI(A.uC(s)),q=A.hm(A.uA(s)),p=A.hm(A.uw(s)),o=A.hm(A.ux(s)),n=A.hm(A.uz(s)),m=A.hm(A.uB(s)),l=A.pV(A.uy(s)),k=s.b,j=k===0?"":A.pV(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iav:1}
A.cr.prototype={
U(a,b){if(b==null)return!1
return b instanceof A.cr&&this.a===b.a},
gE(a){return B.c.gE(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.K(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.K(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.kI(B.c.n(o%1e6),6,"0")},
$iav:1}
A.iX.prototype={
n(a){return this.v()},
$iF:1}
A.a2.prototype={
gb8(){return A.uv(this)}}
A.h4.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hv(s)
return"Assertion failed"}}
A.cg.prototype={}
A.bD.prototype={
gcw(){return"Invalid argument"+(!this.a?"(s)":"")},
gcv(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gcw()+q+o
if(!s.a)return n
return n+s.gcv()+": "+A.hv(s.gdw())},
gdw(){return this.b}}
A.e2.prototype={
gdw(){return A.rd(this.b)},
gcw(){return"RangeError"},
gcv(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.hI.prototype={
gdw(){return A.a(this.b)},
gcw(){return"RangeError"},
gcv(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fi.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.ix.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.e7.prototype={
n(a){return"Bad state: "+this.a}}
A.hi.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hv(s)+"."}}
A.i5.prototype={
n(a){return"Out of Memory"},
gb8(){return null},
$ia2:1}
A.fe.prototype={
n(a){return"Stack Overflow"},
gb8(){return null},
$ia2:1}
A.n4.prototype={
n(a){return"Exception: "+this.a}}
A.I.prototype={
n(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.B(e,0,75)+"..."
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
k=""}return g+l+B.b.B(e,i,j)+k+"\n"+B.b.P(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g}}
A.n.prototype={
bO(a,b){return A.tA(this,A.o(this).h("n.E"),b)},
bv(a,b,c){var s=A.o(this)
return A.hV(this,s.D(c).h("1(n.E)").a(b),s.h("n.E"),c)},
dO(a,b){var s=A.o(this)
return new A.L(this,s.h("u(n.E)").a(b),s.h("L<n.E>"))},
dP(a,b){return new A.bJ(this,b.h("bJ<0>"))},
bo(a,b,c,d){var s,r
d.a(b)
A.o(this).D(d).h("1(1,n.E)").a(c)
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
ag(a,b){var s
A.o(this).h("u(n.E)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a5(a,b){var s
A.o(this).h("u(n.E)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
b5(a,b){var s=A.R(this,A.o(this).h("n.E"))
return s},
b4(a){return this.b5(0,!0)},
gq(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gG(a){return!this.gt(this).m()},
gL(a){return!this.gG(this)},
gb_(a){var s=this.gt(this)
if(!s.m())throw A.b(A.hM())
return s.gp()},
kg(a,b){var s,r
A.o(this).h("u(n.E)").a(b)
for(s=this.gt(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.b(A.hM())},
S(a,b){var s,r
A.ie(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.b(A.l6(b,b-r,this,"index"))},
n(a){return A.ue(this,"(",")")}}
A.J.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.ae.prototype={
gE(a){return A.D.prototype.gE.call(this,0)},
n(a){return"null"}}
A.D.prototype={$iD:1,
U(a,b){return this===b},
gE(a){return A.f5(this)},
n(a){return"Instance of '"+A.ic(this)+"'"},
gM(a){return A.jD(this)},
toString(){return this.n(this)}}
A.jl.prototype={
n(a){return""},
$ibW:1}
A.mr.prototype={
gk0(){var s,r=this.b
if(r==null)r=$.lR.$0()
s=r-this.a
if($.pK()===1e6)return s
return s*1000}}
A.aJ.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iuQ:1}
A.mJ.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.E(b)
s=B.b.c2(b,"=")
if(s===-1){if(b!=="")a.l(0,A.pc(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.B(b,0,s)
q=B.b.bz(b,s+1)
p=this.a
a.l(0,A.pc(r,0,r.length,p,!0),A.pc(q,0,q.length,p,!0))}return a},
$S:27}
A.mI.prototype={
$2(a,b){throw A.b(A.ah("Illegal IPv6 address, "+a,this.a,b))},
$S:54}
A.fN.prototype={
geK(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gE(r.geK())
r.y!==$&&A.t0()
r.y=s
q=s}return q},
gbw(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.qB(s==null?"":s)
r.z!==$&&A.t0()
q=r.z=new A.cD(s,t.ph)}return q},
ghA(){return this.b},
gdv(){var s=this.c
if(s==null)return""
if(B.b.V(s,"[")&&!B.b.Y(s,"v",1))return B.b.B(s,1,s.length-1)
return s},
gdE(){var s=this.d
return s==null?A.qZ(this.a):s},
gdH(){var s=this.f
return s==null?"":s},
ghb(){var s=this.r
return s==null?"":s},
ghc(){return this.c!=null},
ghe(){return this.f!=null},
ghd(){return this.r!=null},
n(a){return this.geK()},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gdS())if(p.c!=null===b.ghc())if(p.b===b.ghA())if(p.gdv()===b.gdv())if(p.gdE()===b.gdE())if(p.e===b.ghq()){r=p.f
q=r==null
if(!q===b.ghe()){if(q)r=""
if(r===b.gdH()){r=p.r
q=r==null
if(!q===b.ghd()){s=q?"":r
s=s===b.ghb()}}}}return s},
$iiA:1,
gdS(){return this.a},
ghq(){return this.e}}
A.mG.prototype={
ghz(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.c3(s,"?",m)
q=s.length
if(r>=0){p=A.fO(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.iT("data","",n,n,A.fO(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jg.prototype={
ghc(){return this.c>0},
ghe(){return this.f<this.r},
ghd(){return this.r<this.a.length},
gdS(){var s=this.w
return s==null?this.w=this.iz():s},
iz(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.V(r.a,"http"))return"http"
if(q===5&&B.b.V(r.a,"https"))return"https"
if(s&&B.b.V(r.a,"file"))return"file"
if(q===7&&B.b.V(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
ghA(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gdv(){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gdE(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.xw(B.b.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.V(r.a,"http"))return 80
if(s===5&&B.b.V(r.a,"https"))return 443
return 0},
ghq(){return B.b.B(this.a,this.e,this.f)},
gdH(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
ghb(){var s=this.r,r=this.a
return s<r.length?B.b.bz(r,s+1):""},
gbw(){if(this.f>=this.r)return B.bu
return new A.cD(A.qB(this.gdH()),t.ph)},
gE(a){var s=this.x
return s==null?this.x=B.b.gE(this.a):s},
U(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiA:1}
A.iT.prototype={}
A.lB.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.oD.prototype={
$1(a){return this.a.cM(this.b.h("0/?").a(a))},
$S:9}
A.oE.prototype={
$1(a){if(a==null)return this.a.eV(new A.lB(a===undefined))
return this.a.eV(a)},
$S:9}
A.oe.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.rv(a))return a
s=this.a
a.toString
if(s.a_(a))return s.i(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aH(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dA(!0,"isUtc",t.y)
return new A.cU(r,0,!0)}if(a instanceof RegExp)throw A.b(A.v("structured clone of RegExp",null))
if(a instanceof Promise)return A.bo(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.w(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bP(n),p=s.gt(n);p.m();)m.push(A.co(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.i(n,l)
if(!(l<m.length))return A.c(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.bn(i),l=0;l<h;++l)o.push(this.$1(s.i(i,l)))
return o}return a},
$S:56}
A.j1.prototype={
ah(a){if(a<=0||a>4294967296)throw A.b(A.qm(u.w+a))
return Math.random()*a>>>0},
dC(){return Math.random()},
$ioV:1}
A.ec.prototype={
cl(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.az()
l.az()
l.az()
l.az()},
az(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.K(o-n+(q-p)+(m-r),4294967296)>>>0},
ah(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.qm(u.w+a))
s=a-1
if((a&s)>>>0===0){p.az()
return(p.a&s)>>>0}do{p.az()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
dC(){var s,r=this
r.az()
s=r.a
r.az()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ioV:1}
A.lV.prototype={
H(){var s=this
if(B.a.a5(A.d([s.d,s.e,s.f,s.r,s.w],t.t),new A.lW()))throw A.b(B.dn)}}
A.lW.prototype={
$1(a){return A.a(a)<=0},
$S:21}
A.db.prototype={
v(){return"QualityProfileKind."+this.b}}
A.da.prototype={}
A.ka.prototype={}
A.kb.prototype={}
A.ia.prototype={
H(){var s,r,q,p,o=this
for(s=A.Q(["exposure",o.a,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.X(s,A.o(s).h("X<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.b(A.v("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.b(A.v("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.dN.prototype={}
A.hy.prototype={
H(){var s,r,q,p,o,n,m=this,l=null
if(!B.be.ga1(0)||!m.b.ga1(0)||!m.r.ga1(0))throw A.b(A.v("FrameEnvironment colors must be finite",l))
s=m.c
if(isFinite(s)){r=m.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.v("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+m.d,l))
s=m.w
if(!isFinite(s)||s<0)throw A.b(A.v("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),l))
s=m.x
if(s!=null){r=s.a
if(!r.ga1(0)||r.gbr()<1e-12)A.k(A.v("DirectionalLight.direction must be finite and nonzero: "+r.n(0),l))
s=s.c
if(!isFinite(s))A.k(A.v("DirectionalLight.intensity must be >= 0: "+s,l))}for(s=m.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.v("PointLight.position must be finite: "+o.n(0),l))
o=p.d
if(!isFinite(o)||o<0)A.k(A.v("PointLight.intensity must be >= 0: "+A.q(o),l))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.v("PointLight.radius must be > 0: "+A.q(o),l))}for(s=isFinite(0),r=isFinite(1),o=isFinite(-1),q=0;!1;++q){if(s)n=r
else n=!1
if(!n)A.k(A.v("SpotLight.position must be finite: "+B.I.n(0),l))
if(s)n=o
else n=!1
if(!n)A.k(A.v("SpotLight.direction must be finite and nonzero: "+B.a2.n(0),l))}}}
A.kB.prototype={}
A.cd.prototype={
U(a,b){if(b==null)return!1
return J.dD(b)===A.jD(this)&&b instanceof A.cd&&this.a===b.a&&this.b===b.b},
gE(a){return A.cc(A.jD(this),this.a,this.b,B.k)}}
A.aY.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.be.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.bR.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.i6.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.c6.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.d1.prototype={
v(){return"HandleRejection."+this.b}}
A.kR.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.d6.prototype={
ga1(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
U(a,b){if(b==null)return!1
return b instanceof A.d6&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.cc(this.a,this.b,this.c,B.k)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.kh.prototype={}
A.i9.prototype={}
A.e6.prototype={}
A.h3.prototype={
v(){return"AlphaMode."+this.b}}
A.cw.prototype={}
A.ci.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.cj.prototype={}
A.mL.prototype={
H(){var s,r,q,p
for(s=0;s<6;++s){r=B.ao[s]
q=r.b
p=q+r.c
if(p>14)throw A.b(A.v('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bS.prototype={
H(){var s,r,q,p,o,n=this
n.a.H()
s=n.b.length
if(B.c.ai(s,14)!==0)throw A.b(A.v("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.b(A.v("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga1(0)&&s.b.ga1(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.v("MeshData.localBounds must be a valid AABB",null))}}
A.lD.prototype={
H(){var s=this.a,r=s.a
if(!r.u(0,"sceneColor")||!r.u(0,"present"))throw A.b(A.v("resource plan must contain sceneColor and present",null))
if(s.a5(0,new A.lF()))throw A.b(A.v("resource plan contains an empty resource ID",null))
if(this.b!==r.u(0,"vhsOutput"))throw A.b(A.v("resource history does not match vhsOutput ownership",null))}}
A.lF.prototype={
$1(a){return A.E(a).length===0},
$S:4}
A.lM.prototype={}
A.ii.prototype={
hg(a){var s=this
if(s.d)A.k(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.m("resource assembler is initialized"))
a.H()
s.a=a
s.c=1},
bi(){if(this.d)return
this.d=!0
this.a=null}}
A.dR.prototype={
v(){return"DrawMode."+this.b}}
A.h9.prototype={
v(){return"BlendMode."+this.b}}
A.bc.prototype={}
A.is.prototype={
H(){var s=this
if(s.a<0||s.b<0)throw A.b(A.v("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.v("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.v("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hh.prototype={
v(){return"ColorEncoding."+this.b}}
A.hq.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.ig.prototype={
H(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.cU(B.fb)
if(o.a!==0)A.k(A.aD(o,r,"contains unknown pipeline features"))
if(q.a===B.aq&&p.gL(p))A.k(A.aD(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.b(A.v("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dd.prototype={
v(){return"RendererState."+this.b}}
A.kD.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.hX.prototype={
kV(a){return this.a.cT(a)}}
A.lw.prototype={
$3(a,b,c){return new A.bR(A.a(a),A.a(b),A.bz(c))},
$S:79}
A.iz.prototype={}
A.ly.prototype={
cJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.qH(d,new A.hB(c.byteLength,B.b4,B.dz))
if(d.b!==B.f)A.k(A.m(e))
s=A.f(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.bZ(d)
A.bI(d,p)
if(d.b!==B.f)A.k(A.m(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a8(t.S)
for(n=a.a,m=0;m<6;++m){l=B.ao[m]
k=A.rI(l.a)
if(!o.k(0,k))continue
j=A.w3(n,k,l)
if(d.b!==B.f)A.k(A.m(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.m(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.qH(d,new A.hB(i.byteLength,B.b4,B.b3))
if(d.b!==B.f)A.k(A.m(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.f(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.m(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iz(b,h,p,d,c.length/14|0)},
kQ(a){var s=this.c.i(0,a.a)
if(s==null)throw A.b(A.d0(B.am,a))
this.b.cT(a)
return s},
dI(){var s,r,q,p
for(s=this.b.b0(),r=s.$ti,s=new A.bj(s.a(),r.h("bj<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.cJ(p.b))}},
gbs(){return this.b.b0().bo(0,0,new A.lA(),t.S)}}
A.lz.prototype={
$3(a,b,c){return new A.aY(A.a(a),A.a(b),A.bz(c))},
$S:87}
A.lA.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:94}
A.iv.prototype={
eb(){var s=this.a,r=A.qI(s,B.cr)
A.qJ(s,r,0,$.t3())
return r},
kT(a){var s=this.d
s===$&&A.j()
return s},
dI(){var s,r,q,p,o,n,m,l,k,j=this
j.d=j.eb()
for(s=j.b.b0(),r=s.$ti,s=new A.bj(s.a(),r.h("bj<1>")),q=j.c,p=j.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
if(m.ghj().ag(0,new A.mC()))continue
l=A.qI(p,m.gR())
for(k=0;B.c.b6(k,m.ghj().length);++k){o=m.ghj()
if(!(k<o.length))return A.c(o,k)
A.qJ(p,l,k,o[k])}if(m.gli())A.v9(p,l)
q.l(0,n.a,l)}},
gbs(){return this.b.b0().bo(0,0,new A.mB(),t.S)}}
A.mA.prototype={
$3(a,b,c){return new A.be(A.a(a),A.a(b),A.bz(c))},
$S:98}
A.mC.prototype={
$1(a){return!1},
$S:28}
A.mB.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.gR()
return B.c.a0(a,s.glk().P(0,s.glg()).P(0,s.glh()).P(0,4))},
$S:29}
A.d2.prototype={}
A.hw.prototype={
jG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.lZ(A.d([],t.hJ),A.a8(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].a7(s,b)
o=s.jF(a,!1)
if(o.b.length!==0)return new A.hx(o,B.eg)
q=o.a
n=A.P(q)
m=new A.a_(q,n.h("l(1)").a(new A.kx()),n.h("a_<1,l>")).aU(0)
l=A.d([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.a6(d),j=0;j<1;++j){i=n[j]
if(!m.u(0,i.gR().a))throw A.b(A.m('RenderFeature "'+k.gab()+'" created a pass "'+i.gR().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.X(l,new A.ky(o))
return new A.hx(o,l)}}
A.kx.prototype={
$1(a){return t.A.a(a).a},
$S:30}
A.ky.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.hf(s,new A.kv(a)),B.a.hf(s,new A.kw(b)))},
$S:31}
A.kv.prototype={
$1(a){return t.A.a(a).a===this.a.gR().a},
$S:6}
A.kw.prototype={
$1(a){return t.A.a(a).a===this.a.gR().a},
$S:6}
A.hx.prototype={}
A.dV.prototype={
v(){return"FrameQueueState."+this.b}}
A.kC.prototype={}
A.af.prototype={
gbx(){var s=this.c,r=A.P(s)
return new A.L(s,r.h("u(1)").a(new A.lH()),r.h("L<1>"))},
gcd(){var s=this.c,r=A.P(s)
return new A.L(s,r.h("u(1)").a(new A.lI()),r.h("L<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.lH.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.C},
$S:10}
A.lI.prototype={
$1(a){return t.n4.a(a).b===B.i},
$S:10}
A.bF.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.ba.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.fa.prototype={
v(){return"ResourceFormat."+this.b}}
A.c5.prototype={
v(){return"GraphStage."+this.b}}
A.aI.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.e3.prototype={
v(){return"ResourceAccess."+this.b}}
A.K.prototype={}
A.eC.prototype={}
A.lS.prototype={
ae(a){var s,r,q,p,o,n,m=this
a.H()
s=null
try{r=t.h
s=A.va(m.a,a.c,r.a(a.d.gN().b4(0)),r.a(a.f),a.b)}catch(q){if(A.ag(q) instanceof A.fd){++m.e
throw q}else throw q}p=new A.eC(s)
r=m.b
o=a.a
n=r.i(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.f(n.b.a))
return p},
iF(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.aj(s,s.r,s.e,a.$ti.h("aj<1>")),r=this.a.a;s.m();)r.deleteProgram(A.f(s.d.b.a))}}
A.aG.prototype={
H(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.v("ProgramSource.id must not be empty",m))
s=t.S
r=A.a8(s)
for(q=this.d.gT(),q=q.gt(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.b(A.v('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.b(A.v('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a8(s)
for(s=this.e.gT(),s=s.gt(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.b(A.v('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.b(A.v('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.lX.prototype={}
A.aF.prototype={
a2(){var s=this
return A.pX(B.ch,s.f,B.a9,B.aa,!0,!0,!0,!0,s.r,B.ag,B.ah,s.d,s.e,!0,!1,!1)}}
A.lZ.prototype={
jF(a,b){var s=this.jo(t.Q.a(a),!1),r=this.a,q=A.P(r)
return new A.lY(A.an(new A.L(r,q.h("u(1)").a(new A.m2()),q.h("L<1>")),t.A),s)},
jo(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.d([],t.aW)
r=m.a
q=A.P(r)
p=q.h("L<1>")
o=A.R(new A.L(r,q.h("u(1)").a(new A.m1()),p),p.h("n.E"))
m.ip(o,a,s)
m.it(o,s)
m.is(o,!1,s)
n=m.iw(o,s)
m.iu(o,n,s)
m.iv(o,s)
m.ir(o,n,s)
m.iq(o,s)
return s},
ip(a,b,c){var s,r,q,p
t.O.a(a)
t.Q.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.D.cU(b)
if(p.a!==0)B.a.k(c,new A.ba(B.dL,q.a,"missing capabilities: "+p.aR(0,", ")))}},
it(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbx(),o=J.H(p.a),p=new A.M(o,p.b,p.$ti.h("M<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.ba(B.dG,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
is(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.C)B.a.k(c,new A.ba(B.dJ,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iw(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.a.a(b)
s=A.w(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcd(),n=J.H(o.a),o=new A.M(n,o.b,o.$ti.h("M<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.i(0,k)
if(j!=null){B.a.k(b,new A.ba(B.dF,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
iu(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbx(),p=J.H(q.a),q=new A.M(p,q.b,q.$ti.h("M<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.C)continue
n=n.a
m=b.i(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.ba(B.ba,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.c2(a,m)>s)B.a.k(c,new A.ba(B.ba,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
iv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbx(),o=J.H(p.a),p=new A.M(o,p.b,p.$ti.h("M<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.C)continue
for(l=q.gcd(),k=J.H(l.a),l=new A.M(k,l.b,l.$ti.h("M<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.ba(B.dI,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
ir(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbx(),o=J.H(p.a),p=new A.M(o,p.b,p.$ti.h("M<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.C)continue
l=m.a
k=b.i(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcd().kg(0,new A.m0(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.ba(B.dH,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
iq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
s=t.S
r=A.w(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcd(),o=J.H(p.a),p=new A.M(o,p.b,p.$ti.h("M<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.hO(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a8(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbx(),p=J.H(s.a),s=new A.M(p,s.b,s.$ti.h("M<1>"));s.m();){o=p.gp()
if(o.b===B.C)continue
o=o.a
k=r.i(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.c(m,k)
m[k].k(0,q)}}p=t.y
j=A.c9(s,!1,!1,p)
s=a.length
i=A.c9(s,!1,!1,p)
h=new A.m_(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.c(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.c(a,q)
B.a.k(b,new A.ba(B.dK,a[q].a,"participates in a resource dependency cycle"))}}}}
A.m2.prototype={
$1(a){t.A.a(a)
return A.oU()},
$S:6}
A.m1.prototype={
$1(a){t.A.a(a)
return A.oU()},
$S:6}
A.m0.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:10}
A.m_.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.c(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.c(s,a)
if(s[a])return!1
B.a.l(n,a,!0)
r=o.c
if(!(a<r.length))return A.c(r,a)
r=r[a]
r=A.j5(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:21}
A.lY.prototype={}
A.ds.prototype={$ibd:1}
A.f7.prototype={
cL(a){var s,r,q,p,o,n,m
if(!B.y.ga1(0))A.k(A.v("Transform.translation must be finite: "+B.y.n(0),null))
s=!1
if(isFinite(0))s=isFinite(1)
if(!s)A.k(A.v("Transform.rotation must be finite: "+B.ad.n(0),null))
if(!isFinite(1))A.k(A.v(u.u,null))
s=this.a.cT(a.a).d
r=a.c.av()
q=s.a
p=q.a
o=q.b
q=q.c
s=s.b
n=s.a
m=s.b
s=s.c
return A.dG(new A.a_(A.d([new A.z(p,o,q),new A.z(n,o,q),new A.z(p,m,q),new A.z(n,m,q),new A.z(p,o,s),new A.z(n,o,s),new A.z(p,m,s),new A.z(n,m,s)],t.k),t.pc.a(r.gby()),t.mz))},
gdz(){return new A.c_(this.ku(),t.fJ)},
ku(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdz(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.b0(),n=o.$ti,o=new A.bj(o.a(),n.h("bj<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.H()
f=k.a(g.a)
m.an(f)
f=f.a
if(!(f>=0&&f<j.length)){A.c(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.av()
f=f.gbQ()
d=A.P(f)
r=5
return a.b=new A.ds(h,g,A.dG(new A.a_(f,d.h("z(1)").a(i.gby()),d.h("a_<1,z>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iuI:1}
A.m4.prototype={
$3(a,b,c){return new A.c6(A.a(a),A.a(b),A.bz(c))},
$S:34}
A.nX.prototype={
$1(a){var s=this.a.w.a.kQ(a),r=s.b!=null,q=r?s.d:s.e
return new A.f9(s.c,r,q)},
$S:35}
A.nY.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.u(0,a))return this.b.x.gp().hp(a)
if(b!=null&&s.u(0,b))return this.b.x.gp().hp(b)
throw A.b(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.nV.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.nP.prototype={
$0(){return null},
$S:38}
A.nU.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.nL.prototype={
$0(){return this.a.at.a},
$S:39}
A.nM.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.nW.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.nT.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.nJ.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.nK.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.nQ.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.nR.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.nS.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.j()
return s},
$S:2}
A.nO.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.nN.prototype={
$0(){return this.a.at.w},
$S:40}
A.nq.prototype={}
A.ja.prototype={$iuH:1}
A.iZ.prototype={$iu4:1}
A.md.prototype={
hw(a,b){var s,r
if(this.r)A.k(A.m("resource library is disposed"))
s=this.a
a.H()
r=s.b.bS(a,b)
s.c.l(0,r.a,s.cJ(a))
this.d.k(0,r)
return r},
hv(a){var s,r=null
if(this.r)A.k(A.m("resource library is disposed"))
if(a.a.length===0)A.k(A.v("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.v("MaterialDefinition.emissiveStrength must be >= 0: 0",r))
if(!isFinite(0.5))A.k(A.v("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",r))
s=this.b.a.bS(a,r)
this.e.k(0,s)
return s},
bi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.r)return
s=f.f
r=A.R(s,A.o(s).c)
q=r.length
p=f.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.aD(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.dJ(k)}r=f.e
q=A.R(r,A.o(r).c)
p=q.length
o=f.b.a
l=0
for(;l<q.length;q.length===p||(0,A.r)(q),++l)o.dJ(q[l])
q=f.d
p=A.R(q,A.o(q).c)
o=p.length
n=f.a
m=n.c
i=n.a.a
l=0
for(;l<p.length;p.length===o||(0,A.r)(p),++l){k=p[l]
h=m.aD(0,k.a)
if(h!=null){i.deleteVertexArray(A.f(h.c.a))
i.deleteBuffer(A.f(h.a.a))
g=h.b
if(g!=null)i.deleteBuffer(A.f(g.a))}n.b.dJ(k)}s.J(0)
r.J(0)
q.J(0)
f.r=!0}}
A.mj.prototype={
gca(){var s=this.w
return s==null?A.k(A.m("renderer is not initialized")):s},
hh(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.at)throw A.b(A.m("renderer can only be initialized once"))
a.H()
b.H()
s=m.a
if(s.b===B.M)throw A.b(A.m("renderer device is context lost"))
m.e=B.f4
try{m.r=s.hs()
r=m.b
q=A.lE(a)
p=r.a
if(p.a!=null)A.k(A.m("configuration state is already initialized"))
a.H()
p.a=a
A.lE(a)
p.d=1
r.b.hg(q)
r=A.um()
m.w=new A.md(A.un(s),r,A.uS(s),A.a8(t.l0),A.a8(t.fP),A.a8(t.lu))
r=new A.ii()
p=new A.kP(s,r)
q=A.lE(a)
o=p.ec(q,a)
r.hg(q)
p.c=new A.ib(new A.lM(q),o)
m.x=p
m.y=new A.lS(s,A.w(t.N,t.gY))
m.as=a
A.rj(m)
m.e=B.au}catch(n){s=m.y
if(s!=null){r=s.b
s.iF(new A.aN(r,A.o(r).h("aN<2>")))
r.J(0)}s=m.x
if(s!=null)s.bi()
s=m.w
if(s!=null)s.bi()
m.w=null
m.e=B.at
throw n}s=new A.a5($.a4,t.cU)
s.co(null)
return s},
k6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bG()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.b(A.m("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.aj)A.k(A.m("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.mv(j,0,A.dA(k.c,"count",t.S),A.P(j).c).b5(0,!1)
k.b=B.ds
q=i
try{A.wb(a3,r,s)
k=r.gdz()
j=t.p9
h=k.$ti
k=A.R(A.hV(k,h.h("bc(n.E)").a(new A.mk()),h.h("n.E"),j),j)
p=k
J.tm(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.r)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.i(0,f)
if(e==null)A.k(A.d0(B.am,h))
j=j.b
d=j.$ti
j.an(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.c(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.K(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.a0()
n=j+h}p=s.e
k=J.aM(o)
j=n
h=J.aM(o)
f=a3.w
d=f.a.gbs()
f=f.c.gbs()
c=a3.w
c.a.gbs()
c.c.gbs()
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
return new A.kD(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
j7(){var s,r,q,p=this
if(p.e!==B.bA)return
if(p.a.b===B.M)throw A.b(A.m("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.m("resource library is disposed"))
s.a.dI()
s.c.dI()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.m("GPU resource adapter is not initialized"))
s.c=new A.ib(q.a,s.ec(A.lE(r),r))
s=p.y
s.c=null
s.b.J(0)
A.rj(p)
p.e=B.au},
bG(){var s=this.e
if(s!==B.au)throw A.b(A.m("renderer is not ready: "+s.b))
if(this.a.b===B.M){this.e=B.bA
throw A.b(A.m("renderer context lost"))}}}
A.mk.prototype={
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
A.ao.prototype={}
A.oI.prototype={
$2(a,b){var s=t.p
return s.a(a).a.F(0,s.a(b).a)},
$S:42}
A.oJ.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.oG.prototype={
$2(a,b){var s=t.c
return s.a(a).a.F(0,s.a(b).a)},
$S:44}
A.oH.prototype={
$1(a){return t.c.a(a).b},
$S:45}
A.kd.prototype={}
A.h1.prototype={
gbQ(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.d([new A.z(o,n,p),new A.z(r,n,p),new A.z(o,q,p),new A.z(r,q,p),new A.z(o,n,s),new A.z(r,n,s),new A.z(o,q,s),new A.z(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.d9.prototype={}
A.dW.prototype={
v(){return"FrustumTest."+this.b}}
A.kE.prototype={
l1(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b2
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.dt:B.du}}
A.kF.prototype={
$4(a,b,c,d){var s=new A.z(a,b,c),r=new A.d9(s,d),q=Math.sqrt(s.gbr())
if(q<1e-9)s=r
else{s=1/q
s=new A.d9(new A.z(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.cb.prototype={
P(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.c(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.c(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.c(h,j)
h[j]=l}return new A.cb(h)},
hy(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.b9.a(a)
s=a.a
r=this.a
q=r.length
if(0>=q)return A.c(r,0)
p=r[0]
o=a.b
if(4>=q)return A.c(r,4)
n=r[4]
m=a.c
if(8>=q)return A.c(r,8)
l=r[8]
if(12>=q)return A.c(r,12)
k=s*p+o*n+m*l+r[12]
l=r[1]
n=r[5]
p=r[9]
if(13>=q)return A.c(r,13)
j=s*l+o*n+m*p+r[13]
p=r[2]
n=r[6]
l=r[10]
if(14>=q)return A.c(r,14)
i=s*p+o*n+m*l+r[14]
l=r[3]
n=r[7]
p=r[11]
if(15>=q)return A.c(r,15)
h=s*l+o*n+m*p+r[15]
return h===0||h===1?new A.z(k,j,i):new A.z(k/h,j/h,i/h)},
ho(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
if(0>=d)return A.c(e,0)
s=e[0]
if(5>=d)return A.c(e,5)
r=e[5]
if(10>=d)return A.c(e,10)
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
if(!(s<16))return A.c(i,s)
s=i[s]
if(!(d<16))return A.c(h,d)
h[d]=s}if(15>=16)return A.c(h,15)
h[15]=1
return new A.cb(h)},
ga1(a){return B.w.ag(this.a,new A.lv())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.lv.prototype={
$1(a){return isFinite(A.fU(a))},
$S:12}
A.lU.prototype={
n(a){return"Quat(0, 0, 0, 1)"}}
A.mD.prototype={
H(){if(!B.y.ga1(0))throw A.b(A.v("Transform.translation must be finite: "+B.y.n(0),null))
var s=!1
if(isFinite(0))s=isFinite(1)
if(!s)throw A.b(A.v("Transform.rotation must be finite: "+B.ad.n(0),null))
if(!isFinite(1))throw A.b(A.v(u.u,null))},
av(){var s,r,q,p,o,n,m,l,k=t.n,j=A.qg(A.d([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],k)).a,i=j.length
if(0>=i)return A.c(j,0)
s=j[0]
if(1>=i)return A.c(j,1)
r=j[1]
if(2>=i)return A.c(j,2)
q=j[2]
if(4>=i)return A.c(j,4)
p=j[4]
if(5>=i)return A.c(j,5)
o=j[5]
if(6>=i)return A.c(j,6)
n=j[6]
if(8>=i)return A.c(j,8)
m=j[8]
if(9>=i)return A.c(j,9)
l=j[9]
if(10>=i)return A.c(j,10)
return A.qg(A.d([s,r,q,0,p,o,n,0,m,l,j[10],0,0,0,0,1],k))},
n(a){return"Transform("+B.y.n(0)+", "+B.ad.n(0)+", scale=1)"}}
A.z.prototype={
bj(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aL(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.z(s*r-q*p,q*o-n*r,n*p-s*o)},
gbr(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbr())},
ga1(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gac(){var s=this,r=Math.sqrt(s.gbr())
return r<1e-9?B.y:new A.z(s.a/r,s.b/r,s.c/r)},
U(a,b){if(b==null)return!1
return b instanceof A.z&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.cc(this.a,this.b,this.c,B.k)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.fo.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.eA.prototype={
gab(){return this.f},
a7(a,b){B.a.k(a.a,new A.af(this.f,B.z,A.d([new A.K(this.x,B.h),new A.K(this.y,B.i)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG(s.e,s.b,s.c,B.p,B.bt,B.bp)),q=A.bZ(s.d),p=t.n,o=s.y,n=s.r===B.ce?new Float32Array(A.a0(A.d([1/o.c,0],p))):new Float32Array(A.a0(A.d([0,1/o.d],p)))
return A.d([new A.iQ(new A.aF(s.f,A.d([new A.K(s.x,B.h),new A.K(o,B.i)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$ia6:1}
A.iQ.prototype={
a8(a){return},
$iV:1,
gR(){return this.a}}
A.ha.prototype={
gab(){return"bloomComposite"},
a7(a,b){B.a.k(a.a,new A.af("bloomComposite",B.z,A.d([B.c_,B.bU,new A.K($.oK(),B.i)],t.C)))},
a6(a){var s=this,r="bloomComposite",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.ev,B.ej)),p=A.bZ(s.d)
return A.d([new A.iR(new A.aF(r,A.d([B.c_,B.bU,new A.K($.oK(),B.i)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$ia6:1}
A.iR.prototype={
a8(a){return},
$iV:1,
gR(){return this.a}}
A.ho.prototype={
gab(){return"depthPrepass"},
a7(a,b){B.a.k(a.a,new A.af("depthPrepass",B.dD,A.d([B.bV],t.C)))},
a6(a){var s=this,r="depthPrepass",q=s.a.ae(new A.aG(r,s.b,s.c,B.bs,B.bq,B.e5))
return A.d([new A.iU(new A.aF(r,A.d([B.bV],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$ia6:1}
A.iU.prototype={
a8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bH(b,a.af("sceneDepth").b)
A.b3(b,g.a.a2())
A.ea(b,B.af,1,0,0,0)
A.cF(b,g.b.b)
A.y(b,"uVertexSnapGrid",new A.B(B.e,c.y))
A.y(b,"uAlbedo",B.F)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.r)(s),++m){l=s[m]
k=l.a.b
A.y(b,"uViewProjection",new A.B(B.o,new Float32Array(A.a0(d))))
A.y(b,"uModel",new A.B(B.o,new Float32Array(A.a0(k.c.av().a))))
g.iG(e,k.b,p)
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
iG(a,b,c){var s,r=this.d.$1(b),q=a.a
A.bi(q,0,t._.a(this.e.$1(null)))
A.y(q,"uAlphaCutoff",new A.B(B.e,0))
A.y(q,"uAffineWarpStrength",new A.B(B.e,0))
s=this.a.a2()
A.b3(q,r.at?s.dQ(!1):s)},
$iV:1,
gR(){return this.a}}
A.fq.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.eF.prototype={
gab(){return this.f},
a7(a,b){B.a.k(a.a,new A.af(this.f,B.z,A.d([new A.K(this.w,B.h),new A.K(this.x,B.i)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG(s.e,s.b,s.c,B.p,B.bt,B.bp)),q=A.bZ(s.d),p=t.n,o=s.x,n=s.r===B.cf?new Float32Array(A.a0(A.d([1/o.c,0],p))):new Float32Array(A.a0(A.d([0,1/o.d],p)))
return A.d([new A.iV(new A.aF(s.f,A.d([new A.K(s.w,B.h),new A.K(o,B.i)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$ia6:1}
A.iV.prototype={
a8(a){return},
$iV:1,
gR(){return this.a}}
A.hs.prototype={
gab(){return"dofComposite"},
a7(a,b){B.a.k(a.a,new A.af("dofComposite",B.z,A.d([new A.K(this.z,B.h),B.bY,B.bS],t.C)))},
a6(a){var s=this,r="dofComposite",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.eu,B.e4)),p=A.bZ(s.d)
return A.d([new A.iW(new A.aF(r,A.d([new A.K(s.z,B.h),B.bY,B.bS],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$ia6:1}
A.iW.prototype={
a8(a){var s,r=this,q=a.af("dofOutput"),p=r.r.$0(),o=a.b.a
A.bH(o,q.b)
A.b3(o,r.a.a2())
A.cF(o,r.b.b)
s=t._
A.bi(o,0,s.a(r.d.$0()))
A.y(o,"uSharp",B.F)
A.bi(o,1,s.a(r.e.$0()))
A.y(o,"uBlurred",B.a1)
A.bi(o,2,s.a(r.f.$0()))
A.y(o,"uSceneDepth",B.c9)
A.y(o,"uNear",new A.B(B.e,p.f))
A.y(o,"uFar",new A.B(B.e,p.r))
A.y(o,"uFocusDistance",new A.B(B.e,r.w))
A.y(o,"uFocusRange",new A.B(B.e,r.x))
A.y(o,"uStrength",new A.B(B.e,0))
A.bI(o,r.c)
A.dl(o,3,0)},
$iV:1,
gR(){return this.a}}
A.hF.prototype={
gab(){return"grade"},
a7(a,b){B.a.k(a.a,new A.af("grade",B.z,A.d([new A.K(this.r,B.h),B.bQ],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("grade",s.b,s.c,B.p,B.et,B.ek)),q=A.bZ(s.d),p=s.r
return A.d([new A.j0(new A.aF("grade",A.d([new A.K(p,B.h),B.bQ],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$ia6:1}
A.j0.prototype={
a8(a){var s=this,r=a.af(s.f.a),q=a.b.a
A.bH(q,a.af("gradeOutput").b)
A.b3(q,s.a.a2())
A.cF(q,s.b.b)
A.bi(q,0,r.b)
A.y(q,"uScene",B.F)
A.bi(q,1,t._.a(s.d.$0()))
A.y(q,"uLut",B.a1)
A.y(q,"uLutSize",new A.B(B.e,s.e))
A.y(q,"uStrength",new A.B(B.e,a.c.e.w))
A.bI(q,s.c)
A.dl(q,3,0)},
$iV:1,
gR(){return this.a}}
A.hc.prototype={}
A.hb.prototype={
af(a){var s=this.a.i(0,a)
if(s==null)throw A.b(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$iuG:1}
A.f4.prototype={
gab(){return"present"},
a7(a,b){B.a.k(a.a,new A.af("present",B.dE,A.d([new A.K(this.f,B.h)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("present",s.b,s.c,B.p,B.eB,B.l)),q=A.bZ(s.d),p=s.f
return A.d([new A.jb(new A.aF("present",A.d([new A.K(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$ia6:1}
A.jb.prototype={
a8(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bH(q,null)
A.b3(q,s.a.a2())
A.cF(q,s.b.b)
A.bI(q,s.c)
A.bi(q,0,r.b)
A.dl(q,3,0)},
$iV:1,
gR(){return this.a}}
A.id.prototype={
gab(){return"ps1Quantize"},
a7(a,b){B.a.k(a.a,new A.af("ps1Quantize",B.z,A.d([new A.K(this.e,B.h),B.bX],t.C)))},
a6(a){var s=this,r="ps1Quantize",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.ex,B.e0)),p=A.bZ(s.d),o=s.e
return A.d([new A.jc(new A.aF(r,A.d([new A.K(o,B.h),B.bX],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$ia6:1}
A.jc.prototype={
a8(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bH(q,a.af("ps1Output").b)
A.b3(q,s.a.a2())
A.cF(q,s.b.b)
A.bi(q,0,r.b)
A.y(q,"uScene",B.F)
A.y(q,"uQuantizationBits",new A.B(B.e,a.c.e.z))
A.y(q,"uDitherStrength",new A.B(B.e,0))
A.bI(q,s.c)
A.dl(q,3,0)},
$iV:1,
gR(){return this.a}}
A.dg.prototype={}
A.il.prototype={
gab(){return"shadow"},
a7(a,b){B.a.k(a.a,new A.af("shadowCaster",B.dC,A.d([B.bR],t.C)))},
a6(a){var s=this,r="shadowCaster",q=s.a.ae(new A.aG(r,s.b,s.c,B.bs,B.bq,B.ei))
return A.d([new A.je(new A.aF(r,A.d([B.bR],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$ia6:1}
A.je.prototype={
a8(a){var s,r,q,p,o=this,n=a.af("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bH(s,n.b)
A.b3(s,o.a.a2())
A.ea(s,B.af,1,0,0,0)
return}r=A.qr(l)
o.r.$1(r)
s=m.a
A.bH(s,n.b)
A.b3(s,o.a.a2())
A.ea(s,B.af,1,0,0,0)
A.cF(s,o.b.b)
A.y(s,"uAlbedo",B.F)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.iI(m,s[p],r)},
eE(a,b){var s,r=this.d.$1(b),q=a.a
A.bi(q,0,t._.a(this.e.$1(null)))
A.y(q,"uAlphaCutoff",new A.B(B.e,0))
s=this.a.a2()
A.b3(q,r.at?s.dQ(!1):s)},
iI(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.ds){s=b.b
n.ez(a,s.c,c)
n.eE(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bI(s,r.a)
q=r.b
p=r.c
if(q)A.p2(s,p,0)
else A.dl(s,p,0)}else if(b instanceof A.d2){s=b.a.b
n.ez(a,s.c,c)
n.eE(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bI(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.p3(s,p,o,0)
else A.p1(s,p,0,o)}else throw A.b(A.v("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dD(b).n(0),null))},
ez(a,b,c){var s=a.a
A.y(s,"uModel",new A.B(B.o,new Float32Array(A.a0(b.av().a))))
A.y(s,"uLightViewProjection",new A.B(B.o,new Float32Array(A.a0(c.a.a))))},
$iV:1,
gR(){return this.a}}
A.oc.prototype={
$1(a){return this.a.a=a},
$S:49}
A.od.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.im.prototype={
gab(){return"shadowedWorld"},
a7(a,b){var s=A.d([B.bW],t.C)
if(this.z)s.push(B.bZ)
s.push(B.a0)
B.a.k(a.a,new A.af("shadowedWorld",B.b9,s))},
a6(a){var s=this,r="shadowedWorld",q=s.a.ae(new A.aG(r,s.b,s.c,B.eA,B.ep,B.dZ)),p=A.d([B.bW],t.C)
if(s.z)p.push(B.bZ)
p.push(B.a0)
return A.d([new A.jf(new A.aF(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$ia6:1}
A.jf.prototype={
a8(a){var s,r,q,p,o,n,m,l=this,k=null,j=a.af("sceneColor"),i=a.b,h=a.c,g=h.c,f=h.d,e=h.e,d=l.r.$0(),c=i.a
A.bH(c,j.b)
A.b3(c,l.a.a2())
A.ea(c,B.aT,1,0,0,0)
A.cF(c,l.b.b)
A.y(c,"uAlbedo",B.F)
s=t._
A.bi(c,1,s.a(l.f.$0()))
A.y(c,"uShadowMap",B.a1)
r=t.n
A.y(c,"uShadowMapTexelSize",new A.B(B.c8,new Float32Array(A.a0(A.d([0.001953125,0.001953125],r)))))
A.bi(c,2,s.a(l.x.$0()))
A.y(c,"uSsao",B.c9)
A.y(c,"uVertexSnapGrid",new A.B(B.e,e.y))
A.y(c,"uSceneColorSize",new A.B(B.c8,new Float32Array(A.a0(A.d([l.y,l.z],r)))))
A.y(c,"uViewProjection",new A.B(B.o,new Float32Array(A.a0(g.c.a))))
A.y(c,"uView",new A.B(B.o,new Float32Array(A.a0(g.a.a))))
A.y(c,"uLightViewProjection",new A.B(B.o,new Float32Array(A.a0(d.a.a))))
s=f.b
A.y(c,"uFogColor",new A.B(B.E,new Float32Array(A.a0(A.d([s.a,s.b,s.c],r)))))
A.y(c,"uFogStart",new A.B(B.e,f.c))
A.y(c,"uFogEnd",new A.B(B.e,f.d))
A.y(c,"uFogHeightFalloff",new A.B(B.e,0))
A.y(c,"uFogDensity",new A.B(B.e,0))
s=l.w.$0()==null
q=s?k:B.I
if(q==null)q=B.I
p=s?k:B.a2
if(p==null)p=B.a2
A.y(c,"uLightPosition",new A.B(B.E,new Float32Array(A.a0(A.d([q.a,q.b,q.c],r)))))
A.y(c,"uLightDirection",new A.B(B.E,new Float32Array(A.a0(A.d([p.a,p.b,p.c],r)))))
o=s?k:1
A.y(c,"uLightRange",new A.B(B.e,o==null?1:o))
o=s?k:0.3
if(o==null)o=0.3
A.y(c,"uLightInnerCos",new A.B(B.e,Math.cos(o)))
s=s?k:0.5
if(s==null)s=0.5
A.y(c,"uLightOuterCos",new A.B(B.e,Math.cos(s)))
n=f.r
A.y(c,"uAmbientColor",new A.B(B.E,new Float32Array(A.a0(A.d([n.a,n.b,n.c],r)))))
A.y(c,"uAmbientIntensity",new A.B(B.e,f.w))
for(c=h.a,s=c.length,r=e.x,m=0;m<c.length;c.length===s||(0,A.r)(c),++m)l.eF(i,c[m],r)
for(h=h.b,c=h.length,m=0;m<h.length;h.length===c||(0,A.r)(h),++m)l.eF(i,h[m],r)},
eF(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.ds){s=b.b
n.eG(a,s.c)
n.eA(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bI(s,r.a)
q=r.b
p=r.c
if(q)A.p2(s,p,0)
else A.dl(s,p,0)}else if(b instanceof A.d2){s=b.a.b
n.eG(a,s.c)
n.eA(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bI(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.p3(s,p,o,0)
else A.p1(s,p,0,o)}else throw A.b(A.v("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dD(b).n(0),null))},
eA(a,b,c,d,e){var s,r=this.d.$1(b),q=a.a
A.bi(q,0,t._.a(this.e.$1(null)))
A.y(q,"uAlphaCutoff",new A.B(B.e,0))
A.y(q,"uOpaqueCoverage",new A.B(B.e,c===B.ai?0:1))
A.y(q,"uAffineWarpStrength",new A.B(B.e,0))
A.y(q,"uMaterialTint",new A.B(B.E,new Float32Array(A.a0(A.d([r.c,r.d,r.e],t.n)))))
A.y(q,"uEmissiveStrength",new A.B(B.e,0))
A:{s=null
if(B.ai===c){switch(d.a){case 0:s=B.cI
break
case 1:s=B.cH
break}break A}if(B.S===c||B.cG===c){s=this.a.a2()
break A}}A.b3(q,r.at?s.dQ(!1):s)},
eG(a,b){var s=b.av(),r=a.a
A.y(r,"uModel",new A.B(B.o,new Float32Array(A.a0(s.a))))
A.y(r,"uNormalMatrix",new A.B(B.o,new Float32Array(A.a0(s.ho().a))))},
$iV:1,
gR(){return this.a}}
A.iq.prototype={
gab(){return"ssaoOcclusion"},
a7(a,b){B.a.k(a.a,new A.af("ssaoOcclusion",B.b8,A.d([B.bN],t.C)))},
a6(a){var s=this,r="ssaoOcclusion",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.ew,B.dY)),p=A.bZ(s.d)
return A.d([new A.ji(new A.aF(r,A.d([B.bN],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$ia6:1}
A.ji.prototype={
a8(a){var s=a.b.a
A.bH(s,a.af("ssaoRaw").b)
A.b3(s,this.a.a2())
A.ea(s,B.aS,1,1,1,1)
return},
$iV:1,
gR(){return this.a}}
A.ip.prototype={
gab(){return"ssaoBlur"},
a7(a,b){B.a.k(a.a,new A.af("ssaoBlur",B.b8,A.d([B.bT,B.bM],t.C)))},
a6(a){var s=this,r="ssaoBlur",q=s.a.ae(new A.aG(r,s.b,s.c,B.p,B.eq,B.em)),p=A.bZ(s.d)
return A.d([new A.jh(new A.aF(r,A.d([B.bT,B.bM],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$ia6:1}
A.jh.prototype={
a8(a){var s=a.b.a
A.bH(s,a.af("ssaoBlurred").b)
A.b3(s,this.a.a2())
A.ea(s,B.aS,1,1,1,1)
return},
$iV:1,
gR(){return this.a}}
A.iE.prototype={
gab(){return"vhs"},
a7(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.af("vhs",B.z,A.d([new A.K(this.r,B.h),B.bP,B.bO],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("vhs",s.b,s.c,B.p,B.er,B.e1)),q=A.bZ(s.d),p=s.r
return A.d([new A.jo(new A.aF("vhs",A.d([new A.K(p,B.h),B.bP,B.bO],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$ia6:1}
A.jo.prototype={
a8(a){var s,r=this,q=a.af(r.f.a),p=a.af("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bH(n,p.b)
A.b3(n,r.a.a2())
A.cF(n,r.b.b)
A.bi(n,0,q.b)
A.y(n,"uScene",B.F)
A.bi(n,1,t._.a(r.d.$0()))
A.y(n,"uHistory",B.a1)
A.y(n,"uTime",new A.B(B.e,r.e.$0()))
A.y(n,"uChromaWeight",new A.B(B.e,o.Q))
A.y(n,"uTrackingWeight",new A.B(B.e,m))
A.y(n,"uNoiseWeight",new A.B(B.e,o.at))
A.y(n,"uHeadSwitchWeight",new A.B(B.e,o.ax))
A.y(n,"uDropoutWeight",new A.B(B.e,o.ay))
A.y(n,"uGhostWeight",new A.B(B.e,s))
A.bI(n,r.c)
A.dl(n,3,0)},
$iV:1,
gR(){return this.a}}
A.f9.prototype={}
A.iM.prototype={
gab(){return"world"},
a7(a,b){B.a.k(a.a,new A.af("worldOpaqueTransparent",B.b9,A.d([B.a0],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aG("safeWorld",s.b,s.c,B.ez,B.p,B.dW))
return A.d([new A.jp(new A.aF("worldOpaqueTransparent",A.d([B.a0],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$ia6:1}
A.jp.prototype={
a8(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bH(j,a.af("sceneColor").b)
A.b3(j,n.a.a2())
A.ea(j,B.aT,1,0,0,0)
A.cF(j,n.b.b)
A.y(j,"uViewProjection",new A.B(B.o,new Float32Array(A.a0(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.I
q=t.n
A.y(j,"uLightDir",new A.B(B.E,new Float32Array(A.a0(A.d([r.a,r.b,r.c],q)))))
p=k.r
A.y(j,"uAmbientColor",new A.B(B.E,new Float32Array(A.a0(A.d([p.a,p.b,p.c],q)))))
A.y(j,"uAmbientIntensity",new A.B(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.r)(j),++o)n.ef(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.ef(m,l[o])},
ef(a,b){var s,r,q,p,o,n=this
if(b instanceof A.d2){s=b.a.b
n.eC(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bI(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.p3(s,p,o,0)
else A.p1(s,p,0,o)}else if(b instanceof A.ds){s=b.b
n.eC(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bI(s,r.a)
q=r.b
p=r.c
if(q)A.p2(s,p,0)
else A.dl(s,p,0)}else throw A.b(A.v("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dD(b).n(0),null))},
eC(a,b){var s=b.av(),r=a.a
A.y(r,"uModel",new A.B(B.o,new Float32Array(A.a0(s.a))))
A.y(r,"uNormalMatrix",new A.B(B.o,new Float32Array(A.a0(s.ho().a))))},
$iV:1,
gR(){return this.a}}
A.k8.prototype={
cg(a){var s,r,q
a.H()
s=A.a8(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.as
else q=r===0?B.aq:B.ar
return new A.da(q,s)},
hJ(a){var s,r=this.cg(a).a
A:{if(B.as===r){s=B.f2
break A}if(B.ar===r){s=B.f1
break A}s=B.X
break A}return s}}
A.hC.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.eL.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hD.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.hE.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.hB.prototype={}
A.kQ.prototype={}
A.d_.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.eN.prototype={}
A.eM.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.df.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.fd.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cC.prototype={
v(){return"UniformType."+this.b}}
A.B.prototype={}
A.dO.prototype={
v(){return"ClearMask."+this.b}}
A.hp.prototype={$itO:1}
A.ib.prototype={
hp(a){var s=this.b.i(0,a)
if(s==null)throw A.b(A.m("resource is not in candidate: "+a))
return s}}
A.kP.prototype={
gp(){var s=this.c
if(s==null)throw A.b(A.m("GPU resource adapter is not initialized"))
return s},
bi(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.iE(s.b)
r.b.bi()
r.c=null
r.e=!0},
ec(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.w(a6,a7),a9=A.d([],t.l2)
try{for(p=b0.a.a,p=A.j5(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.ab(s,"sceneColor#1")){j=J.aL(a8,"sceneColor")
j.toString
J.bQ(a8,s,j)
continue}j=this.iH(s,b1)
if(n.b!==B.f)A.k(A.m(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.v("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.i(l.createFramebuffer())
if(h==null)A.k(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.ak
if(f&&!j.e)A.k(A.v("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.b5||g===B.dB
d=a5
c=a5
b=a5
a=a5
if(f){l.drawBuffers(A.d([A.a(o.WebGL2RenderingContext.NONE)],k))
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
l.drawBuffers(A.d([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}else{d=A.i(l.createTexture())
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
l.drawBuffers(A.d([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}}a1=a5
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
if(g!==a0){A.p4(n,h,d,c,a1,a2,b,a)
A.k(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.cL(new A.fP(h,d,c,a1,a2,b,a,i,j.b))
J.h0(a9,r)
J.bQ(a8,s,r)}a6=A.dQ(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.P(a6).h("fb<1>"),a6=new A.fb(a6,p),a6=new A.c8(a6,a6.gq(0),p.h("c8<a3.E>")),o=this.a,n=t.jg,p=p.h("a3.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.p4(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
iH(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.eN(512,512,1,B.ak,!0)
if(a==="sceneDepth")return new A.eN(o,n,1,B.ak,!0)
s=B.b.V(a,"ssao")||B.b.V(a,"bloomBlur")||B.b.V(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.eN(r,q,1,p?B.b5:B.dA,p)},
iE(a){var s,r,q,p,o,n=A.oR(t.f7.a(a).gam(),t._)
for(n=A.j5(n,n.r,A.o(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.p4(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.ei.prototype={
v(){return"_SlotState."+this.b}}
A.cJ.prototype={
sbh(a){this.c=this.$ti.h("1?").a(a)}}
A.bU.prototype={
bS(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.c(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.cJ(B.a7,n.h("cJ<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.c(n,q)
p=n[q];++p.a
p.b=B.hb
p.sbh(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
cR(a){return this.bS(a,null)},
an(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.d0(B.bc,a))
r=this.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.d0(B.bd,a))
s=q.b
if(s===B.a8||s===B.a7)throw A.b(A.d0(B.am,a))},
cT(a){var s,r,q=this.$ti
q.c.a(a)
this.an(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.c(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
l5(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.an(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.c(r,s)
r[s].sbh(b)},
dJ(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.d0(B.bc,a))
r=p.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.d0(B.bd,a))
r=q.b
if(r===B.a8||r===B.a7)throw A.b(A.d0(B.dM,a))
q.b=B.a8
q.sbh(null)
B.a.k(p.c,s);++p.e},
b0(){return new A.c_(this.kv(),this.$ti.h("c_<+(1,2)>"))},
kv(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$b0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.a8||j===B.a7){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.eg(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.h8.prototype={
v(){return"BlendEquation."+this.b}}
A.cR.prototype={
v(){return"BlendFactor."+this.b}}
A.hl.prototype={
v(){return"CullFace."+this.b}}
A.hn.prototype={
v(){return"DepthFunc."+this.b}}
A.eG.prototype={
dQ(a){var s=this
return A.pX(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.az.prototype={
v(){return"StateField."+this.b}}
A.mW.prototype={
jX(a){var s,r=this.a
if(r==null)return A.ls(B.eh,t.dB)
s=A.a8(t.dB)
if(r.a!==a.a)s.k(0,B.aA)
if(r.b!==a.b)s.k(0,B.aB)
if(r.c!==a.c)s.k(0,B.aC)
if(r.d!==a.d)s.k(0,B.aD)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aE)
if(r.r!==a.r)s.k(0,B.aF)
if(r.w!==a.w)s.k(0,B.aG)
if(r.x!==a.x)s.k(0,B.aH)
return s}}
A.cL.prototype={$ic4:1}
A.fQ.prototype={}
A.fP.prototype={}
A.iL.prototype={
ig(a){var s=this,r=A.f(s.a.canvas)
s.c=A.ak(new A.mU(s))
s.d=A.ak(new A.mV(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hs(){var s=this,r=v.G,q=s.bc(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bc(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bc(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bc(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bc(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.co(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.co(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.lV("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bc(a){var s=A.co(this.a.getParameter(a))
return typeof s=="number"?B.d.aG(s):0},
$iu7:1}
A.mU.prototype={
$1(a){A.f(a).preventDefault()
this.a.b=B.M},
$S:3}
A.mV.prototype={
$1(a){A.f(a)
this.a.b=B.f},
$S:3}
A.hr.prototype={
C(){var s=this
return A.Q(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.h6.prototype={
i4(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
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
k.dx!==$&&A.x()
k.dx=q
o=A.f(s.createBiquadFilter())
o.type="lowpass"
A.f(o.frequency).value=11e3
k.dy!==$&&A.x()
k.dy=o
A.i(q.connect(o))
A.i(o.connect(A.f(s.destination)))
j.disconnect(A.f(s.destination))
A.i(j.connect(q))},
hx(){var s=this.a
if(A.E(s.state)==="suspended")A.f(s.resume())},
jg(a){var s,r,q=this
if(B.b.V(a,"vo-")){s=q.x
s===$&&A.j()
return s}r=B.bv.i(0,a)
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
iQ(){var s,r,q,p,o,n,m,l=this.a,k=A.eo(l.sampleRate),j=B.d.aF(k*2),i=A.f(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.dC()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.c(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dD(a,b){var s,r,q,p=this,o=p.as.i(0,a)
if(o==null)return
s=p.a
r=A.f(s.createBufferSource())
r.buffer=o
A.f(r.playbackRate).value=0.94+p.at.dC()*0.12
q=A.f(s.createGain())
A.f(q.gain).value=b
A.i(r.connect(q))
s=B.bv.i(0,a)
A.i(q.connect(p.jg(s==null?"transient":s)))
r.start()},
kJ(a){return this.dD(a,1)},
cI(){return}}
A.jV.prototype={
$1(a){return this.hE(t.q.a(a))},
hE(a){var s=0,r=A.bN(t.b),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bO(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ap(A.bo(A.f(A.f(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ap(A.bo(A.f(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.ap(A.bo(A.f(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ag(h)
A.f(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.bL(null,r)
case 1:return A.bK(p.at(-1),r)}})
return A.bM($async$$1,r)},
$S:52}
A.k7.prototype={
dA(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.e(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.tl().aL(q).gac()
p.d=q
p.c=p.b.aL(q).gac()
p.a=a}}
A.kA.prototype={}
A.it.prototype={}
A.kN.prototype={
iK(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.co(s.getParameter(34047))
if(typeof p=="number")o.c=p},
c5(a,b,c,d,e,f){return this.kw(a,b,c,d,e,f)},
kw(a,b,c,a0,a1,a2){var s=0,r=A.bN(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$c5=A.bO(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.f(A.f(j.document).createElement("img"))
m.src=a
s=7
return A.ap(A.bo(A.f(m.decode()),t.X),$async$c5)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aU(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.iK()
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
case 6:case 1:return A.bL(q,r)
case 2:return A.bK(o.at(-1),r)}})
return A.bM($async$c5,r)},
c6(a,b,c){var s=!1
return this.kx(t.h.a(a),b,!1)},
kx(b0,b1,b2){var s=0,r=A.bN(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$c6=A.bO(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.d([],t.kG)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.f(A.f(a0.document).createElement("img"))
j.src=k
s=10
return A.ap(A.bo(A.f(j.decode()),a1),$async$c6)
case 10:J.h0(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.aM(l)===0){a=A.m("texture array needs at least one layer")
throw A.b(a)}i=A.a(J.aL(l,0).width)
h=A.a(J.aL(l,0).height)
if(J.ab(i,0)||J.ab(h,0)||J.tn(l,new A.kO(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.b(a)}g=J.aM(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.a3()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jE(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.a3()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a0()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a0()
n=[1]
s=5
break A}e=B.d.K(a+1,2)}}a=m.a
a7=A.i(a.createTexture())
if(a7==null){a=A.m("could not create texture array")
throw A.b(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aU(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.oL(d,16)+")")
throw A.b(a)}c=0
for(;;){a1=c
a3=J.aM(l)
if(typeof a1!=="number"){q=a1.b6()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aL(l,c)])
d=A.a(a.getError())
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.oL(d,16)+")")
throw A.b(a)}a1=c
if(typeof a1!=="number"){q=a1.a0()
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
if(!J.ab(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.oL(d,16)+")")
throw A.b(a)}a.texParameteri(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.a(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(a0.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR))}else{a1=A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
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
case 6:case 1:return A.bL(q,r)
case 2:return A.bK(o.at(-1),r)}})
return A.bM($async$c6,r)},
eH(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.ab(A.co(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.b(A.dT("shader compile failed: "+A.q(A.rf(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
ao(a,b){var s=v.G,r=this.eH(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.eH(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.ab(A.co(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.b(A.dT("program link failed: "+A.q(A.rf(p,"getProgramInfoLog",o,t.w))))
return o},
ghn(){var s=A.co(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aG(s):0},
dN(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.i(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.f6(0,c,B.c.i3(b.byteLength,p))*p
if(B.c.ai(o,4)!==0)A.k(A.v("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.to(B.w.gjD(b),b.byteOffset+0*p,B.c.K(o,4)))}},
cH(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aU(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cD(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aU(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
eJ(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.cH(q,a,b)
s=v.G
A.aU(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
ee(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aU(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aU(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dB(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cD(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cD(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.eJ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.eJ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cD(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.ee(a,b)
if(d)h.drawBuffers(A.d([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.b(A.dT("framebuffer incomplete"))
return new A.it(g,n,o,m,q,p,l,e,a,b)},
hm(a,b,c,d){return this.dB(a,b,c,d,0)},
kz(a,b,c,d){return this.dB(a,b,!0,c,d)},
aS(a,b,c){return this.dB(a,b,c,!1,0)},
cF(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aU(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
au(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cH(q,b,c)
if(p!=null)n.cH(p,b,c)
n.cF(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cF(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cF(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.ee(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
kR(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.d([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aU(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.d([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aU(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aU(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.d([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
jO(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.n
s.drawBuffers(A.d([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.d([A.a(q.WebGL2RenderingContext.NONE),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.d([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
aA(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.kO.prototype={
$1(a){A.f(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:53}
A.hH.prototype={
dM(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].lj(a)}}
A.hJ.prototype={
aE(a){if(this.f)return
A.q8(a,"requestPointerLock",t.X)},
iW(a){A.f(a)
if(A.aR(a.repeat))return
if(this.b.k(0,A.E(a.code)))this.c.k(0,A.E(a.code))},
iY(a){this.b.aD(0,A.E(A.f(a).code))},
j1(a){var s=this
A.f(a)
if(!s.f)return
s.d=s.d+s.em(a,"movementX")
s.e=s.e+s.em(a,"movementY")},
j_(a){var s=this
A.f(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
em(a,b){var s=A.rb(a[b])
if(s==null)s=null
return s==null?0:s}}
A.hW.prototype={}
A.d8.prototype={
gej(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gE(B.c.cb(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gE(B.c.cb(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
U(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.d8&&A.jD(r)===A.jD(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gE(a){return this.gej()}}
A.lx.prototype={
i9(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].gej(),q)}}
A.dh.prototype={
dG(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.w.hL(s,0,m,l)
n.a=s}r=b.a4(0,a).aL(d.a4(0,a)).gac()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ff(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ff(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ff(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ff(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ff(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ff(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aT(a,b,c,d,e){return this.dG(a,b,c,d,e,1,1)}}
A.m3.prototype={
iR(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.ao(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.x()
m.w=r
q=s.ao(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.x()
m.x=q
p=m.c
o=A.i(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.x()
m.y=o
o=A.i(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.x()
m.z=o
o=A.i(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.x()
m.Q=o
r=A.i(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.x()
m.as=r
r=A.i(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.x()
m.at=r
q=A.i(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.x()
m.ax=q
m.d=s.aS(m.ay,m.ch,!1)
m.e=s.aS(m.ay,m.ch,!1)
m.f=s.aS(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.x()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
iS(){var s
try{this.r=this.b.aS(384,216,!1)}catch(s){this.r=null}},
kP(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.aA(n)
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
p.aA(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.j()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aA(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.mc.prototype={
cs(a,b,c){var s,r,q
try{r=this.a.ao(b,c)
return r}catch(q){s=A.ag(q)
r=A.dT(a+": "+A.q(s))
throw A.b(r)}}}
A.m5.prototype={}
A.fs.prototype={}
A.jj.prototype={}
A.j8.prototype={}
A.j6.prototype={}
A.m6.prototype={
ia(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.d([new A.d8(0,0,1,0),new A.d8(1,0,1,0),new A.d8(2,0,1,0)],t.mm),e=t.S
e=new A.lx(f,A.w(e,e))
e.i9(f)
h.du=e
h.fT=1.9
h.di=h.aP/h.aO
r=J.hO(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fs()
t.cu.a(r)
f=h.ap
e=f.ao("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.ao(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.ao(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.ao(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.ao(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.a9!==$&&A.x()
h.a9=new A.mc(f,e,p,o,n,m)
h.b=t.d4.a(new A.m7(h))
h.ey()
h.ex()
o=h.ak
p=A.i(o.getUniformLocation(m,"uTex"))
h.fk!==$&&A.x()
h.fk=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.fl!==$&&A.x()
h.fl=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.f0!==$&&A.x()
h.f0=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.f_!==$&&A.x()
h.f_=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.f1!==$&&A.x()
h.f1=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.f2!==$&&A.x()
h.f2=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.f3!==$&&A.x()
h.f3=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.f4!==$&&A.x()
h.f4=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.f5!==$&&A.x()
h.f5=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.f6!==$&&A.x()
h.f6=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.f7!==$&&A.x()
h.f7=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.f8!==$&&A.x()
h.f8=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.f9!==$&&A.x()
h.f9=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.fa!==$&&A.x()
h.fa=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.fb!==$&&A.x()
h.fb=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.fc!==$&&A.x()
h.fc=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.fd!==$&&A.x()
h.fd=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fe!==$&&A.x()
h.fe=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.ff!==$&&A.x()
h.ff=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.fg!==$&&A.x()
h.fg=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.fh!==$&&A.x()
h.fh=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.fi!==$&&A.x()
h.fi=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.fj!==$&&A.x()
h.fj=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.fm!==$&&A.x()
h.fm=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.fn!==$&&A.x()
h.fn=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.dk!==$&&A.x()
h.dk=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.dl!==$&&A.x()
h.dl=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.dm!==$&&A.x()
h.dm=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.dn!==$&&A.x()
h.dn=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.dq!==$&&A.x()
h.dq=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.dr!==$&&A.x()
h.dr=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.ds!==$&&A.x()
h.ds=n
n=A.aR(A.f(A.f(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bl!==$&&A.x()
h.bl=n
h.shk(16777215)
n=new A.mm(o,f,A.d([],t.aA),A.d([],t.df),A.d([],t.U),A.d([],t.kS))
m=n.c=f.ao("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.dt!==$&&A.x()
h.dt=n
n=new A.m3(f,o)
n.iR()
n.iS()
h.bU!==$&&A.x()
h.bU=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.cV!==$&&A.x()
h.cV=m
p=A.i(n.createBuffer())
p.toString
h.cW!==$&&A.x()
h.cW=p
n=A.i(n.createBuffer())
n.toString
h.cX!==$&&A.x()
h.cX=n
e=A.i(o.createVertexArray())
e.toString
h.cY!==$&&A.x()
h.cY=e
l=A.i(o.createVertexArray())
l.toString
h.cZ!==$&&A.x()
h.cZ=l
k=A.i(o.createVertexArray())
k.toString
h.d_!==$&&A.x()
h.d_=k
j=A.i(o.createVertexArray())
j.toString
h.d0!==$&&A.x()
h.d0=j
o.bindVertexArray(e)
h.cp(m)
o.bindVertexArray(l)
h.cp(p)
o.bindVertexArray(k)
h.cp(n)
o.bindVertexArray(null)
try{h.bZ=f.hm(384,216,!0,!0)}catch(i){h.bZ=null}s=4<f.ghn()?4:f.ghn()
e=s
if(typeof e!=="number")return e.a3()
if(e>1)try{h.bk=f.kz(h.aO,h.aP,!0,s)}catch(i){h.bk=null}try{h.aN=f.hm(h.aO,h.aP,!0,!0)}catch(i){h.bk=h.aN=null}if(h.aN!=null)try{h.bW=f.aS(h.gbD(),h.gbC(),!1)
h.bX=f.aS(h.gbD(),h.gbC(),!1)
h.bY=f.aS(h.aO,h.aP,!1)}catch(i){h.bY=h.bX=h.bW=null}},
gbD(){var s=B.c.K(this.aO,4)
return s<1?1:s},
gbC(){var s=B.c.K(this.aP,4)
return s<1?1:s},
bu(a){return this.ky(t.G.a(a))},
ky(a){var s=0,r=A.bN(t.H),q=this,p,o,n,m,l,k,j
var $async$bu=A.bO(function(b,c){if(b===1)return A.bK(c,r)
for(;;)switch(s){case 0:p=new A.X(a,A.o(a).h("X<1,2>")).gt(0),o=q.ap
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.br.i(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ap(o.c5(k,l,!1,!1,!1,m==="grime"),$async$bu)
case 4:if(c!=null)q.eg(m,l)
s=2
break
case 3:p=t.lS
j=A.R(new A.bJ(new A.a_(A.d(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.m8(a)),t.dD),p),p.h("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ap(o.c6(j,12,!1),$async$bu)
case 7:q.bT=c
case 6:return A.bL(null,r)}})
return A.bM($async$bu,r)},
b2(){var s=0,r=A.bN(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b2=A.bO(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.w(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ap(A.bo(A.f(A.f(g.window).fetch("shaders/"+A.q(m))),f),$async$b2)
case 13:l=a3
if(!A.aR(l.ok)){i=A.dT("HTTP "+A.q(A.pF(l,"status",t.S)))
throw A.b(i)}a=J
a0=n
a1=m
s=14
return A.ap(A.bo(A.f(l.text()),i),$async$b2)
case 14:a.bQ(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ag(c)
i=A.dT("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.b(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.j6(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ag(b)
A.f(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.bL(null,r)
case 1:return A.bK(p.at(-1),r)}})
return A.bM($async$b2,r)},
j6(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.a9
q===$&&A.j()
p=a.i(0,"world.vert")
p.toString
o=a.i(0,"world.frag")
o.toString
n=q.cs("world.vert/world.frag",p,o)
o=a.i(0,h)
o.toString
p=a.i(0,"post.frag")
p.toString
m=q.cs("post.vert/post.frag",o,p)
p=a.i(0,h)
p.toString
o=a.i(0,"blur.frag")
o.toString
l=q.cs("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.ey()
i.ex()
q=i.eX
q=A.R(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.br.i(0,s)
o.toString
i.eg(s,o)}A.f(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ag(j)
A.f(v.G.console).error("shader recompile failed: "+A.q(r))}},
ex(){var s=this,r=s.ak,q=s.a9
q===$&&A.j()
s.fU=A.i(r.getUniformLocation(q.c,"uTex"))
s.fV=A.i(r.getUniformLocation(q.c,"uTime"))
s.fW=A.i(r.getUniformLocation(q.c,"uFlash"))
s.fX=A.i(r.getUniformLocation(q.c,"uVignette"))
s.fY=A.i(r.getUniformLocation(q.c,"uGrain"))
s.fZ=A.i(r.getUniformLocation(q.c,"uDesat"))
s.h_=A.i(r.getUniformLocation(q.c,"uBloom"))
s.h0=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.h7=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.ha=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.h3=A.i(r.getUniformLocation(q.c,"uDepth"))
s.h4=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.eY=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.eZ=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.h5=A.i(r.getUniformLocation(q.c,"uNoise"))
s.h6=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.h8=A.i(r.getUniformLocation(q.c,"uLut"))
s.h9=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.h1=A.i(r.getUniformLocation(q.d,"uTex"))
s.dj=A.i(r.getUniformLocation(q.d,"uDir"))
s.h2=A.i(r.getUniformLocation(q.c,"uBlur"))},
eg(a,b){var s,r,q,p=this
p.eX.k(0,a)
switch(a){case"bluenoise":s=p.a9
s===$&&A.j()
s=s.c
r=p.h5
r===$&&A.j()
q=p.h6
q===$&&A.j()
p.be(s,r,q,b)
break
case"lut-gothic":s=p.a9
s===$&&A.j()
s=s.c
r=p.h8
r===$&&A.j()
q=p.h9
q===$&&A.j()
p.be(s,r,q,b)
break
case"grime":s=p.a9
s===$&&A.j()
s=s.b
r=p.RG
r===$&&A.j()
q=p.rx
q===$&&A.j()
p.be(s,r,q,b)
break
case"glass":s=p.a9
s===$&&A.j()
s=s.b
r=p.x2
r===$&&A.j()
q=p.xr
q===$&&A.j()
p.be(s,r,q,b)
break
case"soft":s=p.a9
s===$&&A.j()
s=s.b
r=p.fG
r===$&&A.j()
q=p.fH
q===$&&A.j()
p.be(s,r,q,b)
break}},
be(a,b,c,d){var s=this.ak
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shk(a){var s=A.o8(a)
this.fw=s.a
this.fz=s.b
this.fA=s.c},
bN(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.ai(a1,14)!==0)throw A.b(A.v("static mesh needs a multiple of 14 floats, got "+a1,null))
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
b.e1(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.kb++
b.d4.l(0,a1,new A.jj(e,d,i,s,s,a3))
return a1},
jZ(a){var s,r,q,p=this,o=p.d4.i(0,a)
if(o==null)return
p.eo()
s=p.fE
r=p.fF
if(s!==r)p.eB(r)
s=p.ak
r=p.dy
r===$&&A.j()
s.uniform1i(r,0)
r=p.dh
r===$&&A.j()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bm},
kk(a){var s,r=this.d4.aD(0,a)
if(r==null)return
s=this.ak
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
eo(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.d5)return
c.d5=!0
s=c.ak
r=c.a9
r===$&&A.j()
s.useProgram(r.b)
r=c.as
r===$&&A.j()
q=c.fC
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.j()
r=c.d8
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.j()
q=c.d9
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.j()
r=c.da
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.j()
s.uniform1f(r,c.fT)
r=c.CW
r===$&&A.j()
s.uniform1f(r,c.di)
r=c.cx
r===$&&A.j()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.j()
s.uniform1f(r,60)
r=c.db
r===$&&A.j()
q=c.fo?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.j()
s.uniform3f(q,c.dc/255*0.25,c.dd/255*0.25,c.de/255*0.25)
q=c.fx
q===$&&A.j()
r=c.fv
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.j()
s.uniform3f(r,c.fw,c.fz,c.fA)
r=c.go
r===$&&A.j()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.j()
s.uniform1f(r,14)
r=c.k1
r===$&&A.j()
s.uniform1f(r,c.fB)
r=c.k2
r===$&&A.j()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.j()
s.uniform1i(r,c.d7.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.d7
l=m.length
if(n<l){if(!(n<l))return A.c(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],0)
continue}j=A.o8(k.b)
m=c.bl
m===$&&A.j()
i=m?1:1+(A.oF(c.df*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.c(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.c(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.c(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bl
r===$&&A.j()
q=r?1:1+(A.oF(c.df*2.5,40503)*2-1)*0
c.k8=q
p=c.p3
p===$&&A.j()
s.uniform1f(p,q)
q=c.p4
q===$&&A.j()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.j()
p=c.fq?1:0
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
q=c.fp
h=q?384:0
g=q?216:0
q=c.d1
p=q.a
if(p===B.ax){f=B.d.Z(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.fI
r===$&&A.j()
s.uniform2f(r,h,g)
r=c.dt
r===$&&A.j()
q=c.fM
q===$&&A.j()
s.uniform1f(q,0)
q=c.fN
q===$&&A.j()
s.uniform3f(q,0.0015,0.005,0)
q=c.fJ
q===$&&A.j()
if(q!=null)r.ce(0)
q=c.fK
q===$&&A.j()
if(q!=null)r.ce(1)
q=c.fL
q===$&&A.j()
if(q!=null)r.ce(2)
r.cf(0)
r.cf(1)
r.cf(2)
r=c.fO
r===$&&A.j()
if(c.bT==null)q=0
else{c.du===$&&A.j()
q=3}s.uniform1i(r,q)
if(c.bT!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.bT)
r=c.dg
r===$&&A.j()
s.uniform1i(r,12)}r=c.fS
q=c.fR
p=c.fQ
o=c.fP
n=0
for(;;){m=c.du
m===$&&A.j()
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
if(m!=null)s.uniform1i(m,d.d);++n}c.eB(c.fF)
r=c.dy
r===$&&A.j()
s.uniform1i(r,0)
r=c.dh
r===$&&A.j()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eB(a){var s
this.fE=a
s=this.dx
s===$&&A.j()
this.ak.uniformMatrix4fv(s,!1,a.a)},
ar(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.aO=a
j.aP=b
j.di=b/a
s=j.bU
s===$&&A.j()
r=B.c.K(a,2)
s.ay=r
q=B.c.K(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.au(p,r,q)
r=s.e
if(r!=null)s.b.au(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.au(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.au(r,384,216)
o=j.aN
n=j.bk
m=j.bW
l=j.bX
k=j.bY
if(o!=null)j.ap.au(o,a,b)
if(n!=null)j.ap.au(n,a,b)
if(m!=null)j.ap.au(m,j.gbD(),j.gbC())
if(l!=null)j.ap.au(l,j.gbD(),j.gbC())
if(k!=null)j.ap.au(k,a,b)},
ji(a){var s,r,q,p,o,n,m
for(s=this.ft,r=this.fs,q=1;q<a;++q){if(!(q<800))return A.c(s,q)
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
jh(a){var s,r,q,p,o,n,m,l
for(s=this.fu,r=this.d6,q=1;q<a;++q){if(!(q<4000))return A.c(s,q)
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
kh(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.d1=b4
s=b2.bn
r=0
if(s>0){for(s=b2.fu,q=0;p=b2.bn,q<p;++q)B.a.l(s,q,q)
b2.jh(p)
for(p=b2.d6,o=b2.d2,n=0;n<b2.bn;++n){if(!(n<4000))return A.c(s,n)
m=s[n]
if(!(m<p.length))return A.c(p,m)
l=p[m]
r=A.rw(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.d6,p=b2.d2,q=0;q<b2.bn;++q){if(!(q<s.length))return A.c(s,q)
l=s[q]
r=A.rw(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bn=0
for(s=b2.ft,q=0;p=b2.c_,q<p;++q)B.a.l(s,q,q)
b2.ji(p)
for(p=b2.k9,o=b2.fs,k=0,n=0;n<b2.c_;++n){if(!(n<800))return A.c(s,n)
m=s[n]
if(!(m<o.length))return A.c(o,m)
j=o[m]
i=A.o8(0)
m=j.b
h=b2.da
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.d9
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
e=[new A.e(a-d,a1-c,a2-e),new A.e(g-d,f-c,h-e),new A.e(g+d,f+c,h+e),new A.e(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.d8
k=A.rz(p,k,a3,a4,a5,a6,new A.e(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.c_=0
s=b2.ap
o=b2.cV
o===$&&A.j()
s.dN(o,b2.d2,r)
o=b2.cW
o===$&&A.j()
s.dN(o,p,k)
b2.eo()
p=b2.ak
o=b2.dy
o===$&&A.j()
p.uniform1i(o,0)
o=b2.cY
o===$&&A.j()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(r,14));++b2.bm
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.cZ
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(k,14));++b2.bm
m=b2.d3
if(m>0){h=b2.cX
h===$&&A.j()
s.dN(h,b2.ka,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.d_
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.d3/14|0);++b2.bm}m=b2.bZ
if(m!=null){a7=b2.aN
if(a7!=null)s.kR(m,a7)}a8=b2.aN
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.d0
m===$&&A.j()
p.bindVertexArray(m)
a3=b2.bW
a4=b2.bX
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.a9
g===$&&A.j()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.h1
g===$&&A.j()
p.uniform1i(g,0)
s.aA(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.dj
g===$&&A.j()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aA(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.dj,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.bY
if(b2.bV>0&&a6!=null){s.aA(a6)
g=b2.a9
g===$&&A.j()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dk
g===$&&A.j()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.dl
g===$&&A.j()
p.uniform1i(g,7)
g=b2.dm
g===$&&A.j()
p.uniform1f(g,0.03171953255425709)
g=b2.dn
g===$&&A.j()
p.uniform1f(g,1)
g=b2.dq
g===$&&A.j()
p.uniform1f(g,0.5)
g=b2.dr
g===$&&A.j()
p.uniform1f(g,b2.bV)
g=b2.ds
g===$&&A.j()
p.uniform2f(g,1/b2.aO,1/b2.aP)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.bU
g===$&&A.j()
b0=g.kP(a8,0.5)
s.aA(null)
s=b2.a9
s===$&&A.j()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.h_
g===$&&A.j()
p.uniform1i(g,1)
g=b2.h0
g===$&&A.j()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.h2
s===$&&A.j()
b2.bl===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.h3
s===$&&A.j()
p.uniform1i(s,7)
s=b2.h4
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.eY
s===$&&A.j()
p.uniform1i(s,11)
s=b2.eZ
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.bV>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.fU
h===$&&A.j()
p.uniform1i(h,0)
h=b2.df+=b3;++b2.fD
s=b2.fV
s===$&&A.j()
p.uniform1f(s,h)
h=b2.h7
h===$&&A.j()
s=b2.fD
p.uniform2f(h,B.c.ai(s*13,64),B.c.ai(s*29,64))
s=b2.fW
s===$&&A.j()
p.uniform1f(s,0)
s=b2.fX
s===$&&A.j()
p.uniform1f(s,0)
s=b2.fY
s===$&&A.j()
p.uniform1f(s,0)
s=b2.fZ
s===$&&A.j()
p.uniform1f(s,0)
s=b2.d1
if(s.a===B.O)b1=0*(1-s.b/1)
else b1=0
s=b2.ha
s===$&&A.j()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.m7.prototype={
$0(){var s=this.a.a9
s===$&&A.j()
return s.b},
$S:55}
A.m8.prototype={
$1(a){return this.a.i(0,A.E(a))},
$S:22}
A.mY.prototype={
gjs(){var s=this.b
s===$&&A.j()
return s},
ey(){var s,r,q,p,o,n,m=this,l=m.jt(),k=m.a
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
m.fG=A.i(k.getUniformLocation(l,"uSoft"))
m.fH=A.i(k.getUniformLocation(l,"uSoftOn"))
m.fI=A.i(k.getUniformLocation(l,"uInternal"))
m.fJ=A.i(k.getUniformLocation(l,"uLightProj0"))
m.fK=A.i(k.getUniformLocation(l,"uLightProj1"))
m.fL=A.i(k.getUniformLocation(l,"uLightProj2"))
m.kc=A.i(k.getUniformLocation(l,"uShadow0"))
m.kd=A.i(k.getUniformLocation(l,"uShadow1"))
m.ke=A.i(k.getUniformLocation(l,"uShadow2"))
m.fM=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.dg=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dh=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.fN=A.i(k.getUniformLocation(l,"uShadowBias"))
m.fO=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.fP
B.a.J(s)
r=m.fQ
B.a.J(r)
q=m.fR
B.a.J(q)
p=m.fS
B.a.J(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.dg,12)},
cp(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.e1(56)},
e1(a){var s=this,r=s.c
r===$&&A.j()
s.bf(r,3,a,0)
r=s.f
r===$&&A.j()
s.bf(r,3,a,12)
r=s.d
r===$&&A.j()
s.bf(r,4,a,24)
r=s.e
r===$&&A.j()
s.bf(r,1,a,40)
r=s.r
r===$&&A.j()
s.bf(r,3,a,44)},
bf(a,b,c,d){var s=this.a
A.aU(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
jt(){return this.gjs().$0()}}
A.mm.prototype={
ce(a){return null},
cf(a){return null}}
A.e.prototype={
a0(a,b){return new A.e(this.a+b.a,this.b+b.b,this.c+b.c)},
a4(a,b){return new A.e(this.a-b.a,this.b-b.b,this.c-b.c)},
P(a,b){return new A.e(this.a*b,this.b*b,this.c*b)},
bj(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aL(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.e(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gac(){var s=this,r=s.gq(0)
return r<1e-9?new A.e(0,0,0):new A.e(s.a/r,s.b/r,s.c/r)}}
A.k6.prototype={
la(a){var s,r,q,p,o,n=B.u.aZ(a.C(),null)
this.a.eW(n)
s=A.f(A.f(v.G.window).localStorage)
r=A.bz(s.getItem("quarantine.save.active"))
q=A.bz(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
kM(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.f(A.f(v.G.window).localStorage)
r=A.bz(s.getItem("quarantine.save.active"))
q=A.bz(s.getItem("quarantine.save.previous"))
p=this.ed(r,a)
if(p!=null)return new A.de(p,null)
o=this.ed(q,a)
if(o!=null)return new A.de(o,"recovered previous save")
if(r==null)return B.f8
return B.f7}catch(n){return B.f6}},
ed(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.eW(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ag(q) instanceof A.I)return null
else throw q}}}
A.ht.prototype={
i5(a,b,c,d,e){if(this.a.length===0)throw A.b(B.di)
if(this.b<0)throw A.b(B.d4)},
C(){var s,r=this,q=r.d
q=q==null?null:A.an(q,t.i)
s=t.z
return A.dQ(A.Q(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bq.prototype={
v(){return"EndingKind."+this.b}}
A.kn.prototype={}
A.dS.prototype={
C(){var s=t.N
return A.Q(["kind",this.a.b],s,s)}}
A.kq.prototype={
$1(a){return t.no.a(a).b===this.a.i(0,"kind")},
$S:57}
A.i8.prototype={
C(){var s,r=this,q=t.N,p=A.w(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.Q(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
kq(a){var s,r=this.a
if(a.e.i(0,r)==null)return!1
s=this.b.a4(0,new A.e(0,1.3499999999999999,0))
return!new A.hd(s,s.a0(0,new A.e(0,1.2000000000000002,0))).hi(a,r)}}
A.lN.prototype={
C(){return A.jv(this.a)}}
A.e4.prototype={
C(){return A.Q(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.mi.prototype={
eW(a){var s,r,q,p,o,n,m,l=B.u.cS(a,null),k=t.f
if(!k.b(l))throw A.b(B.dm)
s=t.N
r=t.z
q=A.aO(l,s,r)
p=q.i(0,"version")
if(A.aT(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ah("unsupported save version "+A.q(p),null,null))
n=q.i(0,"run")
m=q.i(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.d7)
k=A.aO(n,s,r)
return A.qp(A.aO(m,s,r),k,2)}}
A.de.prototype={}
A.cZ.prototype={
v(){return"GameSessionEventType."+this.b}}
A.hz.prototype={}
A.kK.prototype={}
A.kJ.prototype={
gaH(){var s=this.d
return new A.kK(s.a,s.b)},
gdF(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.Q(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.Q(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.Q(["entryCount",m.e.b.a],k,t.S)
p=A.q4(m.c).C()
o=m.r
n=o.c
return new A.lN(A.jv(A.Q(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.Q(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
jw(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.aD(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bJ(B.dv)}if(n<a)this.bJ(B.dw)},
hY(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.ck(a)&&s.hX(b)},
kO(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.ca)r.c=Math.min(1,r.c+0.1)},
hW(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.tL(j,A.an(i.d,h).length)
if(a===B.c4)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.P(r)
A.tK(j,new A.L(r,q.h("u(1)").a(new A.kL(k)),q.h("L<1>")).gq(0))
r=k.f
q=r.b
if(B.a.u(B.e_,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aF(j.a/1*3)
B.a.k(r.r,new A.e5(q.a,a,b))
m=r.a
A.tW(m,q.a,n,k.b,A.an(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.hN(B.ed)
s.r.jQ(o,c)
l=B.d.aF(j.b/1*6)
if(l>0)r.ck(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aN(i,A.o(i).h("aN<2>")).a5(0,new A.kM())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bJ(B.dy)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bJ(B.dx)},
bJ(a){var s=this;++s.y
B.a.k(s.w,new A.hz())
B.a.k(s.x,A.tM(A.w9(a),s.b,s.y-1))}}
A.kL.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.mn().hT(this.a.c,a.a)},
$S:58}
A.kM.prototype={
$1(a){return t.L.a(a).e},
$S:23}
A.jW.prototype={
l6(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.m("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.m("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.b(A.m("authored/runtime room or portal count mismatch"))
for(r=t.hE,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
n=o.a
m=q.i(0,n)
if(m==null)throw A.b(A.m("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.c(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" origin.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.c(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" origin.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.c(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" origin.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.c(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" size.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.c(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" size.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.c(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" size.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.b(A.m("window count mismatch for "+n))
for(n=A.P(j),i=n.h("u(1)"),n=n.h("L<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.dX(new A.L(j,i.a(new A.k0(e)),n),r)
if(d==null)throw A.b(A.m("authored window missing: "+e.a))
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
if(m==null)throw A.b(A.m("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.b(A.m("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a+A.q(n)+" != "+A.q(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a0+A.q(n)+" != "+A.q(l)))
if(o.f!=m.at)throw A.b(A.m("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gb7(a1).b!==B.a.gb7(s).b)throw A.b(A.m("stair manifest mismatch"))}}
A.jX.prototype={
$1(a){return A.tx(a,this.a)},
$S:60}
A.jY.prototype={
$1(a){var s=this.a,r=A.jz(a,"portal"),q=A.cO(r,"id"),p=A.cO(r,"a"),o=A.cO(r,"b"),n=A.fZ(r,"width"),m=A.fZ(r,"height"),l=typeof r.i(0,"doorKit")=="string"?A.E(r.i(0,"doorKit")):null
return new A.dH(q,p,o,n*s,m*s,l)},
$S:61}
A.jZ.prototype={
$1(a){var s=A.jz(a,"stair")
A.cO(s,"id")
return new A.dJ(A.cO(s,"portalId"))},
$S:62}
A.k_.prototype={
$1(a){return typeof a=="string"?a:A.fW("exterior cell")},
$S:24}
A.k0.prototype={
$1(a){return t.hE.a(a).a===this.a.a},
$S:25}
A.dI.prototype={}
A.k1.prototype={
$1(a){var s=this.a,r=A.jz(a,"window"),q=A.cO(r,"id"),p=A.fZ(r,"offset")
A.fZ(r,"sill")
return new A.dK(q,p*s,A.fZ(r,"width")*s,A.fZ(r,"height")*s)},
$S:65}
A.dK.prototype={}
A.dH.prototype={}
A.dJ.prototype={}
A.oa.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:66}
A.hd.prototype={
kX(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.P(s)
q=new A.L(s,r.h("u(1)").a(new A.k9(e)),r.h("L<1>"))
p=!q.gt(0).m()?null:q.gb_(0)
if(p==null){n.d=null
return}if(!(n.bI(b,p.f)&&a==="hall"))o=n.bI(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.iN(p,B.d.Z(d,0,1))},
kB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.el(f,c,d)
s=g.iL(a,b,c,d)
if(s!=null){g.d=s
return g.el(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.jJ(Math.sqrt(r*r+q*q)/0.08))
o=d.P(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.eN(a,n,m,new A.e(q,0,0))
l=l||j.b
i=g.hr(a,n)
n=i==null?n:i
h=g.eN(a,n,j.a,new A.e(0,0,r))
l=l||h.b
m=h.a
i=g.hr(a,n)
n=i==null?n:i}g.bL(m)
return new A.hY(m,n)},
iL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bI(c,l.f)&&n
j=q&&this.bI(c,l.r)&&o
if(k||j)return new A.iN(l,k?0:1)}return null},
el(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a4(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.Z(a.b+o/p,0,1)
n=A.qC(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bL(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.hY(n,k)},
bI(a,b){var s=a.a4(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
eN(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.fn(c,!1)
s=c.a0(0,d)
this.bL(s)
if(this.hi(a,b)){this.bL(c)
return new A.fn(c,!0)}return new A.fn(s,!1)},
bL(a){var s=a.a4(0,new A.e(0,1.3499999999999999,0))
this.a=s
this.b=s.a0(0,new A.e(0,1.2000000000000002,0))},
hi(a,b){var s,r,q,p,o,n,m=a.e.i(0,b)
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
return!this.jk(a,m,s)},
hr(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.i(0,b)
if(k==null)return null
s=a.aM(k)
for(r=k.a,q=a.aq(r),p=J.H(q.a),q=new A.M(p,q.b,q.$ti.h("M<1>"));q.m();){o=p.gp()
n=o.c9(r)
m=!1
if(n!=null)if(l.i(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.eR(k,o,s)&&this.iD(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jk(a,b,c){var s,r,q
for(s=a.aq(b.a),r=J.H(s.a),s=new A.M(r,s.b,s.$ti.h("M<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.eR(b,q,c))return!0}return!1},
eR(a,b,c){var s,r,q,p=a.a,o=b.aj(p),n=b.ad(p)
p=o===B.j||o===B.m
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
iD(a,b,c){var s,r=this
switch(b.aj(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sjB(a){this.a=t.bf.a(a)}}
A.k9.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:101}
A.hY.prototype={}
A.fn.prototype={}
A.iN.prototype={}
A.eO.prototype={}
A.kV.prototype={
jQ(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.c(B.B,r)
s=B.B[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hU(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.B,q)
p=B.B[q]
if(p.b===a)r+=p.c}return r},
hV(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.B,q)
p=B.B[q]
if(p.b===a)r+=p.d}return r},
C(){return A.Q(["landedCount",this.b],t.N,t.z)}}
A.me.prototype={
ic(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.x()
o.c=new A.hG(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.l(0,p.a,o.e2(p))}},
kN(a){var s,r,q,p,o,n=this,m=n.a.e.i(0,a)
if(m==null)return
s=n.d
r=s.i(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.kk(r[o])
s.l(0,a,n.e2(m))},
e2(a){var s=A.rM(this.a,a),r=this.b,q=A.d([r.bN(s.a,1),r.bN(s.b,2),r.bN(s.c,0)],t.t),p=s.d
if(!B.w.gG(p))q.push(r.bN(p,0))
return q},
hG(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.i(0,a)
if(l==null)return B.D
s=l.a
r=A.ar([s],t.N)
for(n=n.aq(s),q=J.H(n.a),n=new A.M(q,n.b,n.$ti.h("M<1>"));n.m();){p=q.gp()
o=p.c9(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.i(0,o)==null)continue
r.k(0,o)}return r},
jY(a,b){var s,r,q,p,o=this,n=o.hG(a),m=o.b,l=o.c
l===$&&A.j()
l=t.b3.a(l.hB(n,b))
s=t.f0
m.d7=l.length<=4?A.an(l,s):A.an(A.mv(l,0,A.dA(4,"count",t.S),A.P(l).c),s)
for(l=n.gt(n),s=o.d;l.m();){r=s.i(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.jZ(r[p])}}}
A.aE.prototype={}
A.ks.prototype={
gkt(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.ag(A.d([r,q,p,o,n,m],t.n),new A.kt())&&o>=r&&n>=q&&m>=p}}
A.kt.prototype={
$1(a){return isFinite(A.fU(a))},
$S:12}
A.kW.prototype={
H(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.ai(s,3)!==0}else s=!0
if(s)throw A.b(A.v("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.v("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gkt())throw A.b(A.v("QHMX bounds are invalid",m))
for(s=t.n,r=0;r<k;++r){q=l[r]
if(B.a.a5(A.d([q.a,q.b,q.c,q.d,q.e,q.f,q.r,q.w],s),new A.kY()))throw A.b(A.v("QHMX contains a non-finite vertex",m))
p=q.x>255
if(p)throw A.b(A.v("QHMX material/flags must fit u8",m))}for(l=n.b,s=l.length,r=0;r<s;++r){o=l[r]
if(o>=k)throw A.b(A.v("QHMX index "+o+" exceeds vertex count",m))}}}
A.kY.prototype={
$1(a){return!isFinite(A.fU(a))},
$S:12}
A.kX.prototype={
A(a,b,c,d,e,f,g){var s=this
s.aW(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.aW(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.aW(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.aW(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.aW(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.aW(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
aW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aE(a,b,c,m,n,o,0,0,p),r=new A.aE(g,h,i,m,n,o,1,1,p)
this.aX(s,new A.aE(d,e,f,m,n,o,1,0,p),r)
this.aX(s,r,new A.aE(j,k,l,m,n,o,0,1,p))},
aX(a,b,c){var s=this,r=s.b
B.a.k(r,s.cz(a))
B.a.k(r,s.cz(b))
B.a.k(r,s.cz(c))},
cz(a){var s,r,q=B.a.aR(A.d([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.i(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
jE(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.b(A.m("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.kW(A.an(g,t.hZ),new Uint16Array(A.a0(this.b)),new A.ks(s,r,q,p,o,n))
h.H()
return h}}
A.cW.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.ku.prototype={
jK(a){var s
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
jL(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b_
break A}if("kitchen"===a||"cellar"===a){s=B.cO
break A}if("bathroom"===a){s=B.cP
break A}if("spare-room"===a){s=B.cQ
break A}s=B.b_
break A}return this.jK(s)}}
A.cI.prototype={}
A.nZ.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:68}
A.cX.prototype={
v(){return"FocusKind."+this.b}}
A.dU.prototype={}
A.mf.prototype={}
A.nD.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:69}
A.cH.prototype={}
A.ej.prototype={}
A.kU.prototype={
il(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.l1(),a4=this.b,a5=A.aX(a4,!0,t.W)
B.a.J(a4)
s=A.d([],t.kl)
for(r=a5.length,q=t.x,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.d([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.aK(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.d([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.aP(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.d([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.b_(b.a,b.b,a3.$1(b.c)))}s.push(new A.ay(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.aX(a4,!0,t.gm)
B.a.J(a4)
s=A.d([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.cy(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cB(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
iP(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.a_(n))throw A.b(A.m("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.a_(n))throw A.b(A.m("duplicate portal "+n))
q.l(0,n,m)}},
jq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.b(A.m("3D room overlap: "+n.a+" and "+m.a))}},
jp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.w(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.eQ(o,i,h,g,f,e)
a5.e_(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.i(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.m(l+" references invalid portal "+d))
i=c.aj(l)
h=c.ad(l)
g=c.w
f=c.x
a5.eQ(o,i,h,g,0,f)
a5.e_(a6,l,c.aj(l),c.ad(l),c.ad(l)+g,0,f)}}for(s=new A.X(a6,a6.$ti.h("X<1,2>")).gt(0);s.m();){b=s.d
a=b.b
r=J.bP(a)
r.X(a,new A.l2())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.i(a,a0).a[0]<r.i(a,a2).a[1]&&r.i(a,a2).a[0]<r.i(a,a0).a[1]
a4=r.i(a,a0).a[2]<r.i(a,a2).a[3]&&r.i(a,a2).a[2]<r.i(a,a0).a[3]
if(a3&&a4)throw A.b(A.m("overlapping apertures on "+b.a))}}},
eQ(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.j||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
e_(a,b,c,d,e,f,g){J.h0(t.gz.a(a).kL(b+":"+c.b,new A.l0()),new A.fD([d,e,f,g]))},
aM(a){var s=a.c,r=this.r,q=a.a
return new A.e(s.a+r.hU(q),s.b+r.hV(q),s.c)},
aq(a){var s=this.c,r=A.P(s)
return new A.L(s,r.h("u(1)").a(new A.l3(a)),r.h("L<1>"))},
kK(a,b){var s,r,q,p,o=this.e.i(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.aD(a,"roomId","not a portal endpoint"))
r=this.aM(o)
q=b.ad(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aj(a).a){case 0:s=new A.e(s.a+q,p,s.c)
break
case 2:s=new A.e(s.a+q,p,s.c+r.c)
break
case 1:s=new A.e(s.a+r.a,p,s.c+q)
break
case 3:s=new A.e(s.a,p,s.c+q)
break
default:s=null}return s},
gl9(){return B.a.bo(this.b,0,new A.l4(),t.S)}}
A.l1.prototype={
$1(a){return new A.e(a.a*1.5,a.b,a.c*1.5)},
$S:70}
A.l2.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:71}
A.l0.prototype={
$0(){return A.d([],t.a3)},
$S:72}
A.l3.prototype={
$1(a){var s
t.gm.a(a)
s=this.a
return a.b===s||a.c===s},
$S:73}
A.l4.prototype={
$2(a,b){return A.a(a)+t.W.a(b).e.length},
$S:74}
A.kr.prototype={}
A.mn.prototype={
hT(a,b){var s,r=a.e.i(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.ag(s,new A.mo())}else s=!1
return s}}
A.mo.prototype={
$1(a){return t.hE.a(a).w},
$S:25}
A.bT.prototype={}
A.hG.prototype={
hB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.d([],t.bz)
for(r=a.gt(a),q=this.a.e;r.m();){p=q.i(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.bT(new A.e(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.jc(j),0.06))}}B.a.X(s,new A.kZ(b))
return A.mv(s,0,A.dA(4,"count",t.S),t.f0).b4(0)},
jc(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.kZ.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.a4(0,s).gq(0),b.a.a4(0,s).gq(0))},
$S:75}
A.eJ.prototype={
v(){return"Floor."+this.b}}
A.cs.prototype={
v(){return"Facing."+this.b}}
A.aK.prototype={}
A.cy.prototype={
c9(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aj(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.aD(a,"roomId","not an endpoint of "+s.a))},
ad(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.aD(a,"roomId","not an endpoint of "+s.a))}}
A.aP.prototype={}
A.b_.prototype={}
A.cq.prototype={}
A.cB.prototype={}
A.ay.prototype={}
A.l_.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.w(m,l)
for(s=n.a,s=new A.X(s,A.o(s).h("X<1,2>")).gt(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.Q(["open",o.a,"locked",o.b],m,r))}l=A.w(m,l)
for(s=n.c,s=new A.X(s,A.o(s).h("X<1,2>")).gt(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.Q(["lit",o.a,"examined",o.b],m,r))}return A.Q(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a8(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.k(0,s[q].a)
r=A.a8(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.k(0,n[l].a)
e=A.a8(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.pw(new A.ai(o,A.o(o).h("ai<1>")),d)){d=f.b
if(A.pw(new A.ai(d,A.o(d).h("ai<1>")),r)){d=f.c
e=!A.pw(new A.ai(d,A.o(d).h("ai<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.de)
e=f.d
if(e<0||e>2)A.k(B.d1)
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
A.f3.prototype={
C(){return A.Q(["open",this.a,"locked",this.b],t.N,t.y)}}
A.eV.prototype={
C(){return A.Q(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.km.prototype={
$1(a){return this.a.u(0,A.E(a))},
$S:4}
A.ct.prototype={
v(){return"Hand."+this.b}}
A.mT.prototype={
i(a,b){var s=this.a.i(0,b)
return s==null?B.l:s},
dV(a,b){var s,r,q,p,o=A.d([],t.s)
for(s=this.i(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.hU.prototype={
C(){var s,r,q,p=t.N,o=A.w(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.r[r]
o.l(0,q,s.i(0,q))}return A.Q(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.a_(B.r,t.ej.a(new A.lp(this)),t.dD).aR(0," \xb7 ")}}
A.lo.prototype={
$2(a,b){return new A.J(A.E(a),A.E(b),t.q)},
$S:76}
A.lp.prototype={
$1(a){return this.a.a.i(0,A.E(a))},
$S:22}
A.b8.prototype={
C(){var s,r,q,p=this,o=A.d([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.Q(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.la.prototype={
bg(a){t.G.a(a)
return a.a===5&&B.a.ag(B.r,new A.lh(this,a))},
e0(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bg(b))return null
s=this.e++
r=new A.b8(s,a,A.d([A.ln(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
cP(a,b,c){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||!this.bg(b))return!1
B.a.k(s.c,A.ln(b,c,B.V))
return!0},
jv(a,b){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||s.r!=null)return!1
if(!this.bg(b))return!1
s.r=A.ln(b,0,B.bb)
return!0},
hN(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.J(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a_(p)&&!B.a.u(s,p))B.a.k(s,p)}},
l7(a){var s
if(!this.b.a_(a))return!1
s=this.d
if(!B.a.u(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.R(n,A.o(n).c)
B.a.W(n)
s=A.d([],t.bV)
for(r=q.b,r=new A.aj(r,r.r,r.e,A.o(r).h("aj<2>"));r.m();)s.push(r.d.C())
return A.Q(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.lh.prototype={
$1(a){var s
A.E(a)
s=this.b.i(0,a)
if(s==null)s=""
return B.a.u(this.a.a.i(0,a),s)},
$S:4}
A.k2.prototype={
cQ(a,b){if(a.a===B.Z&&!a.c)return new A.lJ(b,B.by)
return new A.ll(b,a.c,a.d,B.by)},
jT(a){return this.cQ(a,null)}}
A.dL.prototype={}
A.k3.prototype={
cg(a){var s,r=a==null?null:B.b.l3(a).toLowerCase()
if(r==="next")return B.cg
s=r!=null&&r!=="legacy"
return new A.dL(B.Y,!1,s,s?"unknown renderer query":null)}}
A.lm.prototype={}
A.ll.prototype={
gaY(){var s=this.b
s=s==null?null:s.gaY()
return s==null?A.ma("legacy",A.d([],t.s),this.c,this.d,"legacy"):s},
aC(){if(this.e===B.bz)throw A.b(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aC()
this.e=B.t},
ar(a,b){var s
if(a<=0||b<=0)throw A.b(A.v("legacy surface size must be positive",null))
if(this.e!==B.t)A.k(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.ar(a,b)},
aw(a){var s
if(this.e!==B.t)A.k(A.m("legacy backend is not ready"))
B.u.aZ(A.Q(["backend","legacy","interpolation",0,"facts",A.jv(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aw(a)},
aQ(a){var s
if(this.e!==B.t)A.k(A.m("legacy backend is not ready"))
B.u.aZ(A.Q(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aQ(a)}}
A.lK.prototype={}
A.lJ.prototype={
gaY(){var s=this.b
s=s==null?null:s.gaY()
return s==null?A.ma("next",A.d([],t.s),!1,null,"safe"):s},
aC(){if(this.c===B.bz)throw A.b(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aC()
this.c=B.t},
ar(a,b){var s
if(this.c!==B.t)A.k(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.b(A.v("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.ar(a,b)},
aw(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a_){p=q==null
if(p||!q.gcO()){if(s.c!==B.a_)A.k(A.m("pixeldart backend is not context-lost"))
s.c=B.t
if(!p)q.ht()}p=s.c
if(p===B.a_)return}if(p!==B.t)A.k(A.m(r))
B.u.aZ(A.Q(["backend","next","interpolation",0,"facts",A.jv(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gcO()){if(s.c!==B.t)A.k(A.m(r))
s.c=B.a_
q.hl()
return}q.aw(a)}},
aQ(a){var s
if(this.c!==B.t)A.k(A.m("pixeldart backend is not ready"))
B.u.aZ(A.Q(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aQ(a)}}
A.lL.prototype={
jI(a,b){var s,r,q,p,o,n
a.H()
s=A.d([a.a],t.s)
r=a.c
if(r!=null)s.push("vendor-"+r)
q=a.b
if(q!=null)s.push("renderer-"+q)
s.push("max-texture-"+a.d)
s.push("max-texture-array-layers-"+a.e)
s.push("max-samples-"+a.f)
s.push("max-vertex-attributes-"+a.r)
s.push("max-color-attachments-"+a.w)
s.push("profile-"+b.a.b)
p=b.b
p=A.R(p,A.o(p).c)
B.a.W(p)
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.r)(p),++n)s.push("feature-"+p[n])
if(a.x)s.push("anisotropic-filtering")
if(a.y)s.push("disjoint-timer-query")
if(a.z)s.push("float-render-target")
if(a.Q)s.push("half-float-render-target")
if(a.as)s.push("context-loss")
return s}}
A.f8.prototype={
v(){return"RendererBackendKind."+this.b}}
A.dc.prototype={
v(){return"RendererBackendState."+this.b}}
A.mb.prototype={}
A.ih.prototype={}
A.m9.prototype={
ib(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.v("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w],r=0;r<4;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.v("renderer provenance values must be non-empty",null))}},
C(){var s,r,q,p=this,o=A.w(t.N,t.z)
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
v(){return"SleepQuality."+this.b}}
A.aQ.prototype={
v(){return"SleepLocation."+this.b}}
A.e5.prototype={}
A.ke.prototype={
ck(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hX(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.d([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.Q(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.Q(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kf.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:77}
A.kg.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:78}
A.hK.prototype={
v(){return"InteractionType."+this.b}}
A.dn.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.mX.prototype={}
A.dm.prototype={}
A.hj.prototype={}
A.l5.prototype={}
A.l7.prototype={
dR(){var s,r,q,p=t.r,o=A.d([],p)
for(s=this.a.b,s=new A.aj(s,s.r,s.e,A.o(s).h("aj<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.d(o.slice(0),p)
B.a.X(p,new A.l8())
return p},
jP(a,b){var s,r,q,p,o,n=b.b
if(n.gG(n))return B.h8
s=t.N
r=A.a8(s)
q=A.a8(s)
for(s=n.gN(),s=s.gt(s),p=a.c;s.m();){o=s.gp()
if(B.a.gO(p).a.i(0,o)==n.i(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.dm(B.a6,r)
s=r.a
o=B.a.gO(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gO(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dm(B.cd,r)
return new A.dm(B.aN,r)},
j5(a,b,c,d,e){var s,r,q=this.a,p=q.b.i(0,e)
if(p==null)return new A.hj(e,!1,B.h7,null)
s=p.d===c
r=this.jP(p,d)
q.l7(e)
return new A.hj(e,s,r,r.a===B.a6&&s?'The world says "'+d.c+'". The entry says "'+B.a.gO(p.c).n(0)+'".':null)},
jU(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.a6)return null
s=this.a.b.i(0,r)
if(s==null)return null
return new A.l5(B.a.gO(s.c).n(0)+" but "+A.q(a.f))}}
A.l8.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:13}
A.bs.prototype={
v(){return"RuptureStep."+this.b}}
A.mg.prototype={}
A.bV.prototype={}
A.mh.prototype={
gdW(){var s=B.ap.i(0,this.a)
return s==null?0:s},
i_(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.x)s=q.e
else s=!0
if(s)return B.bk
r=A.pm(b)
s=q.c
B.a.J(s)
B.a.I(s,r)
B.a.J(q.d)
q.a=B.O
q.b=0
q.e=!1
return A.d([B.cC],t.e_)},
jx(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.v("rupture advance must be a finite non-negative duration",null))
if(l.a===B.x||a===0)return B.bk
s=A.d([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.x))break
A:{q=l.a
p=B.ap.i(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.H)l.jm(s)
p=l.b
o=B.ap.i(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.bV())
if(q===B.H){l.a=B.x
l.b=0
l.e=!0
B.a.k(s,B.cB)}else{p=q.a+1
if(!(p<7))return A.c(B.bj,p)
l.a=B.bj[p]
l.b=0
B.a.k(s,new A.bV())}}}return A.an(s,t.k8)},
C(){var s=this,r=t.N
return A.Q(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.an(s.c,r),"extinguishedMantles",A.an(s.d,r),"completed",s.e],r,t.z)},
jm(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.Z(B.d.c0(l.b/l.gdW()*A.an(s,r).length),0,A.an(s,r).length)
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
if(!(m<n.length))return A.c(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.bV())}}}
A.hA.prototype={
gba(){var s=this.b
if(s<6||s>18)return 0
return B.d.Z((s-6)/12,0,1)}}
A.o2.prototype={
$1(a){var s=B.c.bM(this.a,a)&255
return B.c.Z(B.d.aF(s+((B.c.bM(this.b,a)&255)-s)*this.c),0,255)},
$S:80}
A.ms.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.e8(g.a),e=t.N,d=A.w(e,t.P)
for(s=g.b,s=new A.X(s,A.o(s).h("X<1,2>")).gt(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.jr(q,r.b))}s=A.e8(g.r)
q=A.e8(g.w)
p=A.e8(g.x)
o=A.w(e,t.l_)
for(n=g.as,n=new A.X(n,A.o(n).h("X<1,2>")).gt(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.d([],m)
for(i=J.H(l.b);i.m();){h=i.gp()
j.push(A.Q(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.Q(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
jr(a,b){var s,r=A.e8(t.iu.a(b)),q=this.c.i(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.e8(q.b1(0,new A.mt(),t.S,t.z)))
s=this.d.i(0,a)
if(s!=null&&s.gL(s))r.l(0,"_ambient",A.e8(s.b1(0,new A.mu(),t.S,t.z)))
return r}}
A.mt.prototype={
$2(a,b){return new A.J(A.a(a),t.ey.a(b).C(),t.iI)},
$S:81}
A.mu.prototype={
$2(a,b){return new A.J(A.a(a),t.bR.a(b).C(),t.iI)},
$S:82}
A.dk.prototype={
C(){return A.Q(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dj.prototype={
C(){return A.Q(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fk.prototype={
C(){var s=t.N
return A.Q(["field",this.a,"value",this.b],s,s)}}
A.mx.prototype={
bt(){var s=0,r=A.bN(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bt=A.bO(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ap(A.bo(A.f(A.f(v.G.window).fetch("res/text.json")),t.m),$async$bt)
case 6:n=b
s=7
return A.ap(A.bo(A.f(n.text()),t.N),$async$bt)
case 7:m=b
l=A.xi(m)
j=J.aL(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.aL(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aL(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aL(l,"documents")
j.toString
i.a(j)
j=J.aL(l,"street")
j.toString
i.a(j)
j=J.aL(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aL(l,"nights")
j.toString
i.a(j)
j=J.aL(l,"endings")
j.toString
o.w=i.a(j)
j=J.aL(l,"records")
j.toString
i.a(j)
j=J.aL(l,"cues")
j.toString
i.a(j)
j=J.aL(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ag(g)
j=A.q(k)
throw A.b("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bL(null,r)
case 1:return A.bK(p.at(-1),r)}})
return A.bM($async$bt,r)},
hF(a){var s,r,q,p=this.a
p===$&&A.j()
s=p.i(0,B.c.n(a))
if(t.f.b(s)){p=s.gT().dO(0,new A.my())
r=p.$ti
q=t.N
q=A.w(q,q)
q.ju(new A.ca(p,r.h("J<l,l>(1)").a(new A.mz()),r.h("ca<1,J<l,l>>")))
return q}return null},
hI(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.j()
s=m.i(0,a)
m=t.f
r=m.b(s)?s.i(0,"_arrival"):n
q=m.b(r)?r.i(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.i(0,"hour")
o=q.i(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aG(p)||o!==B.d.aG(o))return n
return new A.dk(B.d.aG(p),B.d.aG(o))},
hH(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.j()
s=l.i(0,a)
l=t.f
r=l.b(s)?s.i(0,"_ambient"):m
q=l.b(r)?r.i(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.i(0,"hour")
o=q.i(0,"channel")
n=q.i(0,"lineKey")
if(typeof p!="number"||p!==B.d.aG(p)||typeof o!="string"||typeof n!="string")return m
return new A.dj(B.d.aG(p),o,n)},
l8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.w(a1,t.iu),a3=A.w(a1,t.c_),a4=A.w(a1,t.d8),a5=t.h,a6=A.w(a1,t.iD),a7=b.b
a7===$&&A.j()
a7=new A.X(a7,A.o(a7).h("X<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.w(a,a0)
for(o=o.gT(),o=o.gt(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.lP(l,null):null
if(k==null||!q.b(m.b))continue
j=A.w(a1,a1)
for(m=q.a(m.b).gT(),m=m.gt(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.E(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.w(a,r)
for(m=n.$ti.h("cv<1>"),l=new A.cv(n,n.r,n.e,m);l.m();){i=l.d
g=b.hI(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.w(a,s)
for(m=new A.cv(n,n.r,n.e,m);m.m();){l=m.d
e=b.hH(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.j()
a7=new A.X(a7,A.o(a7).h("X<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.d([],s)
for(m=J.H(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.i(0,"field")=="string"&&typeof c.i(0,"value")=="string")o.push(new A.fk(A.E(c.i(0,"field")),A.E(c.i(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.ms(A.w(a,a0),a2,a3,a4,A.w(a1,a5),A.w(a1,a5),A.w(a,a5),A.w(a,a5),A.w(a,a5),A.w(a1,a5),A.w(a1,a5),A.w(a1,a5),a6)}}
A.my.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:83}
A.mz.prototype={
$1(a){t.d7.a(a)
return new A.J(A.E(a.a),A.E(a.b),t.q)},
$S:84}
A.jR.prototype={
dT(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.f(v.G.window).setTimeout(A.ak(new A.jS(this)),7000))}}
A.jS.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:24}
A.k5.prototype={
dM(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.ki.prototype={
i6(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.U(a,k,"door-speaker",j)
l.b!==$&&A.x()
l.b=i
s=A.U(a,k,"door-line",j)
l.c!==$&&A.x()
l.c=s
r=l.a
A.f(r.appendChild(i))
A.f(r.appendChild(s))
s=A.U(a,k,"door-cite-list",j)
l.e!==$&&A.x()
l.e=s
i=A.U(a,k,"door-cite-result",j)
l.f!==$&&A.x()
l.f=i
A.f(r.appendChild(s))
A.f(r.appendChild(i))
for(i=A.ju,s=l.r,q=0;q<5;++q){p=B.e6[q]
o=A.f(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.kj(l,p)
if(typeof n=="function")A.k(A.v("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.ey()]=n
o.addEventListener("click",m)
A.f(r.appendChild(o))
B.a.k(s,o)}i=A.U(a,"button","door-continue","continue")
l.d!==$&&A.x()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.ak(new A.kk(l)))
A.f(r.appendChild(i))
A.f(A.i(a.body).appendChild(r))},
dU(a,b){var s,r,q,p=this
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
ci(a){var s,r,q=this,p=q.c
p===$&&A.j()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.r)(p),++r)A.f(p[r].style).display="none"
p=q.d
p===$&&A.j()
A.f(p.style).display=""
p=q.f
p===$&&A.j()
p.textContent=""},
hR(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.j()
s.textContent=""
for(r=b.length,q=A.ju,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.f(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.kl(o,this)
if(typeof o=="function")A.k(A.v("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.ey()]=o
m.addEventListener("click",l)
A.f(s.appendChild(m))}},
c1(){var s,r=this
r.z=!1
s=r.e
s===$&&A.j()
s.textContent=""
s=r.f
s===$&&A.j()
s.textContent=""
r.a.className="door"},
skD(a){this.w=t.ov.a(a)},
skF(a){this.x=t.jE.a(a)},
skE(a){this.y=t.bZ.a(a)}}
A.kj.prototype={
$1(a){var s
A.f(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.kk.prototype={
$1(a){var s
A.f(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.kl.prototype={
$1(a){var s
A.f(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.ko.prototype={
i7(a){var s,r,q,p=this,o=p.a,n=A.U(o,"h1","journal-title",null)
p.f!==$&&A.x()
p.f=n
s=A.U(o,"div","ending-copy",null)
p.r!==$&&A.x()
p.r=s
r=p.b
A.f(r.appendChild(n))
A.f(r.appendChild(s))
q=A.U(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.ak(new A.kp(p)))
A.f(r.appendChild(q))},
hS(a,b){var s,r,q,p,o,n,m=this
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
A.f(s.appendChild(n))}m.c8()},
skG(a){this.w=t.jE.a(a)}}
A.kp.prototype={
$1(a){var s
A.f(a)
s=this.a
s.aB()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.kS.prototype={
i8(a){var s,r="help-copy",q=this.b,p=this.a
A.f(q.appendChild(A.U(p,"h1","journal-title","house notes")))
A.f(q.appendChild(A.U(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.f(q.appendChild(A.U(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.U(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.ak(new A.kT(this)))
A.f(q.appendChild(s))}}
A.kT.prototype={
$1(a){A.f(a)
return this.a.aB()},
$S:1}
A.lb.prototype={
io(){var s,r=this,q=r.a,p=A.U(q,"div","page-turn",null),o=A.U(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.ak(new A.lc(r)))
s=A.U(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.ak(new A.ld(r)))
q=A.U(q,"span","right-day-label",null)
r.Q!==$&&A.x()
r.Q=q
A.f(p.appendChild(o))
A.f(p.appendChild(q))
A.f(p.appendChild(s))
return p},
eO(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.e5(s.CW+a,r)
s.ev()},
e5(a,b){if(a<1)return 1
if(a>b)return b
return a},
j8(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.j()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.j()
s.textContent=""
for(s=j.w.dR(),r=s.length,q=A.ju,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gO(n.c).n(0)
l=A.f(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.le(j,n,l)
if(typeof m=="function")A.k(A.v("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.ey()]=m
l.addEventListener("click",k)
A.f(i.appendChild(l))}},
ev(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.j()
s=t.r
r=A.d([],s)
for(q=j.f,p=q.b,o=A.o(p).h("aj<2>"),n=new A.aj(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.X(r,new A.lf())
j.eu(i,r)
i=j.Q
i===$&&A.j()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.j()
s=A.d([],s)
for(r=new A.aj(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.X(s,new A.lg())
j.eu(i,s)
k=B.d.Z(q.f/4,0,1)
i=j.as
i===$&&A.j()
A.f(i.style).setProperty("width",B.d.cb(k*100,1)+"%")},
eu(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.f(a.appendChild(this.iM(b[r])))},
iM(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.U(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.f(k.createElement("div"))
n.className=q
n.textContent=o
A.f(n.style).setProperty("--shake",B.d.n(p.b))
A.f(j.appendChild(n))}m=a.r
if(m!=null){l=this.iU(m,!1)
l.className=A.E(l.className)+" margin"
A.f(j.appendChild(l))}return j},
iU(a,b){var s=b?"hand-line struck":"hand-line",r=A.U(this.a,"div",s,a.n(0))
A.f(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.lc.prototype={
$1(a){A.f(a)
return this.a.eO(-1)},
$S:1}
A.ld.prototype={
$1(a){A.f(a)
return this.a.eO(1)},
$S:1}
A.le.prototype={
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
A.lf.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.lg.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.f2.prototype={
bA(a){var s=this.b
s.className="panel"
A.f(s.style).setProperty("--panel-fade","0.25s")
A.f(A.i(this.a.body).appendChild(s))},
c8(){var s,r,q,p,o=this,n=o.b
if(B.b.u(A.E(n.className),"open"))return
s=$.lG
if(s!=null&&s!==o)s.aB()
$.lG=o
r=o.a
o.d=A.i(r.activeElement)
A.q8(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.ak(o.gj2())
o.e=q
r.addEventListener("keydown",q)
p=A.rk(n)
if(p.length!==0)B.a.gb_(p).focus()},
aB(){var s,r,q=this,p=q.b
if(!B.b.u(A.E(p.className),"open"))return
p.className="panel"
if($.lG===q)$.lG=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
j3(a){A.f(a)
if(A.aR(a.defaultPrevented))return
if(A.E(a.code)==="Escape"){this.aB()
return}if(A.E(a.code)==="Tab")this.jl(a)},
jl(a){var s,r=A.rk(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.aR(a.shiftKey)){if(s===B.a.gb_(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gO(r).focus()}}else if(s===B.a.gO(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gb_(r).focus()}},
sc7(a){this.c=t.jE.a(a)}}
A.lT.prototype={
hQ(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.mp.prototype={
ie(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.f(i.appendChild(A.U(a,"h2","journal-title","Rest")))
A.f(i.appendChild(A.U(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.U(a,"div","entry-picker",null)
for(r=A.ju,q=0;q<2;++q){p=B.bi[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bn[n]
l=A.f(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.mq(this,p,m)
if(typeof k=="function")A.k(A.v("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.ey()]=k
l.addEventListener("click",j)
A.f(s.appendChild(l))}}A.f(i.appendChild(s))},
skH(a){this.f=t.as.a(a)}}
A.mq.prototype={
$1(a){var s,r
A.f(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aB()},
$S:3}
A.bC.prototype={}
A.jO.prototype={
kY(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.P(s)
q=new A.a_(s,r.h("l(1)").a(new A.jQ()),r.h("a_<1,l>")).aU(0)
r=this.b
r.J(0)
s=J.tt(a,t.N)
p=s.$ti
r.I(0,new A.L(s,p.h("u(n.E)").a(q.gbP(q)),p.h("L<n.E>")))},
k_(a,b){var s,r,q,p,o,n=A.d([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.u(0,o.a))n.push(o)}return n}}
A.jQ.prototype={
$1(a){return t.e.a(a).a},
$S:85}
A.jP.prototype={
$2(a,b){var s,r=t.e
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:86}
A.iI.prototype={
ks(a){return this.c.u(0,t.g.a(a))},
kW(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.ag(0,j.gjR())||!a.a.ag(0,new A.mR(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.i(0,r)
p=q==null?null:q.i(0,s.b)
j=!0
if(p!=null)if(!k.u(0,r)){o=s.c
if(o!==B.a5){n=s.d
if(n<J.aM(p)){o=o===B.J
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.L}else j=!1}}}if(j)return!1
m=new A.iH(r,s.b,A.an(p,t.kX),B.J)
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
eS(a){var s=this.a,r=A.o(s).h("ai<1>"),q=r.h("L<n.E>")
s=A.R(new A.L(new A.ai(s,r),r.h("u(n.E)").a(new A.mO(a)),q),q.h("n.E"))
B.a.X(s,new A.mP())
return s},
jC(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.h3
s=m.a.i(0,a)
if(s==null)return B.h4
r=B.c.K(a.b-1,7)
q=a.a
p=m.b.u(0,q)||r+1>=3||m.f?B.aK:B.P
o=p===B.P&&m.r.u(0,q)&&s.a_(B.aL)?B.aL:p
if(s.a_(o))n=o
else n=s.a_(B.P)?B.P:B.aK
r=s.i(0,n)
r.toString
r=new A.iH(a,n,A.an(r,t.kX),B.J)
m.e=r
return new A.iG(r)},
jM(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cc
if(n.d!==B.J)return B.h1
n.e=a
s=a===B.L
n.d=s?B.a5:B.a3
r=this.d
q=s?B.ca:B.fN
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.ck(q,o,p,a,null))
if(a===B.R)B.a.k(r,new A.ck(B.fQ,o,p,a,null))
if(s)this.ew(n)
return new A.iF(n)},
jy(){var s,r=this.e
if(r==null)return B.cc
s=r.d
if(s!==B.a3&&s!==B.a4)return B.h2
r.d=B.a4
if(++r.f>=r.c.length){r.d=B.a5
this.ew(r)
return new A.fj(r,!0)}return new A.fj(r,!1)},
jN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.a3&&s!==B.a4}else s=!0
if(s)return i
r=h.gbR()
if(r==null)return i
s=t.N
q=A.w(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.c(o,p)
p=o[p].c}else p=B.bl
p=J.H(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.dQ(q,s,s)
m=c.j5(!0,!0,o,new A.mX(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.a6){B.a.k(this.d,new A.ck(B.fP,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.i(0,l)
if(j!=null){o=B.a.gO(j.c)
s=A.qe(s,s)
s.I(0,o.a)
s.I(0,q)
p.jv(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.cd)if(k===B.aN){s=n.b
s=s.gL(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.ck(B.fO,o,p.b,i,l))}}return m},
ew(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
shZ(a){this.r=t.Q.a(a)}}
A.mR.prototype={
$1(a){var s=this.a.a
return new A.ai(s,A.o(s).h("ai<1>")).a5(0,new A.mQ(A.E(a)))},
$S:4}
A.mQ.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:14}
A.mO.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:14}
A.mP.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:88}
A.mN.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:89}
A.iJ.prototype={}
A.j7.prototype={}
A.oh.prototype={
$1(a){return B.b.V(A.E(a),"off.")},
$S:4}
A.aW.prototype={
v(){return"DoorChoice."+this.b}}
A.bf.prototype={
v(){return"VisitPhase."+this.b}}
A.bg.prototype={
v(){return"VisitTier."+this.b}}
A.cE.prototype={
v(){return"VisitorFactKind."+this.b}}
A.ck.prototype={
C(){var s,r=this,q=A.w(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.bY.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bh.prototype={
U(a,b){if(b==null)return!1
return b instanceof A.bh&&b.a===this.a&&b.b===this.b},
gE(a){return A.cc(this.a,this.b,B.k,B.k)}}
A.bt.prototype={
U(a,b){if(b==null)return!1
return b instanceof A.bt&&b.a===this.a&&b.b===this.b},
gE(a){return A.cc(this.a,this.b,B.k,B.k)}}
A.b1.prototype={
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.b1&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gE(a){var s=this
return A.cc(s.a,s.b,s.c,s.d)},
C(){var s=this
return A.Q(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.iK.prototype={
C(){var s,r,q,p=this.a
p=A.R(p,A.o(p).c)
B.a.W(p)
s=this.b
r=A.o(s)
q=r.h("cV<1,O<l,@>>")
s=A.R(new A.cV(s,r.h("O<l,@>(1)").a(new A.mM()),q),q.h("n.E"))
r=this.c
return A.Q(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.mM.prototype={
$1(a){return t.g.a(a).C()},
$S:90}
A.h2.prototype={
C(){var s=this,r=s.a.C(),q=s.e
q=q==null?null:q.b
return A.Q(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.jL.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:91}
A.jM.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:92}
A.jN.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:93}
A.iH.prototype={
gbR(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
s=r[s].b}else s=null
return s}}
A.mS.prototype={}
A.b2.prototype={}
A.iG.prototype={}
A.iF.prototype={}
A.fj.prototype={}
A.fC.prototype={
gaY(){var s,r=this.id
if(r){s=this.w
s===$&&A.j()
s=s.a.b}else s="safe"
return A.ma("next",r?this.gjH():B.en,!1,null,s)},
gcO(){if(this.id){var s=this.d
s===$&&A.j()
s=s.b===B.M}else s=!1
return s},
gjH(){var s,r
if(!this.id)return B.l
s=this.r
s===$&&A.j()
r=this.w
r===$&&A.j()
return B.cA.jI(s,r)},
gkj(){var s=this.dx
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.cb(this.dy,3)},
gki(){var s=this.dx
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.dy<=100},
aC(){var s,r,q,p,o,n,m=this,l=A.v3(m.a)
m.d=l
l=l.hs()
m.r=l
l=m.w=B.cl.hJ(l)
q=m.b
p=m.c
s=new A.is(q,p,q,p)
p=A.qq(m.d)
m.e=p
try{p.hh(new A.ig(l,384,216,l.b.u(0,"shadows")?1:0),s)}catch(o){r=A.ag(o)
l=m.w
if(l===B.X)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.X
l=A.qq(m.d)
l.hh(B.f3,s)
m.e=l}l=m.e
l.bG()
n=A.uJ(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.id=!0},
ar(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.v("Pixeldart surface size must be positive",null))
if(!r.id){r.b=a
r.c=b
return}s=r.e
s===$&&A.j()
s.bG()
new A.is(a,b,a,b).H()
r.b=a
r.c=b},
jA(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(!a4.id||a4.z.length!==0)return
s=a4.e
s===$&&A.j()
a4.ch=s.gca().hv(B.eD)
for(s=a5.b,r=s.length,q=a4.z,p=a4.Q,o=a4.as,n=a4.y,m=0;l=s.length,m<l;s.length===r||(0,A.r)(s),++m){k=s[m]
j=a4.jd(a5,k)
l=a4.e.w
if(l==null)l=A.k(A.m("renderer is not initialized"))
i=k.a
if(l.r)A.k(A.m("resource library is disposed"))
h=l.a
j.H()
g=h.b.bS(j,"room:"+i)
f=g.a
h.c.l(0,f,h.cJ(j))
l.d.k(0,g)
B.a.k(n,g)
l=a4.ch
l.toString
e=new A.bc(g,l,B.K,-1,B.S,B.ab,!0,!0,0,null)
l=a4.f
l===$&&A.j()
B.K.H()
h=l.a
d=h.$ti
h.an(d.c.a(g))
h=h.b
if(!(f>=0&&f<h.length))return A.c(h,f)
j=h[f].c
h=(j==null?d.y[1].a(j):j).d
f=B.K.av()
h=h.gbQ()
d=A.P(h)
A.dG(new A.a_(h,d.h("z(1)").a(f.gby()),d.h("a_<1,z>")))
c=l.b.cR(e)
B.a.k(q,c)
p.l(0,i,c)
o.l(0,i,e)}for(m=0;m<s.length;s.length===l||(0,A.r)(s),++m){k=s[m]
for(r=k.e,q=r.length,p=k.a,b=0;b<r.length;r.length===q||(0,A.r)(r),++b){a=r[b]
o=a.c
i=a.d
a4.dY(p,a4.ep(k,a.b,o,o+a.e,i,i+a.f,7902632),new A.nm(a))}}for(s=a5.c,r=s.length,q=a5.e,m=0;m<s.length;s.length===r||(0,A.r)(s),++m){a0=s[m]
if(a0.as)continue
k=q.i(0,a0.b)
if(k==null)continue
p=k.a
a4.dY(p,a4.ep(k,a0.aj(p),a0.ad(p),a0.ad(p)+a0.w,0,a0.x,5915445),new A.nn(a0))}a1=A.xP(A.xa(a5))
a4.CW=a4.e.gca().hv(B.eC)
a2=a4.e.gca().hw(a1,"exterior:main-shell")
B.a.k(n,a2)
s=a4.CW
s.toString
a3=a4.ax=new A.bc(a2,s,B.K,-1,B.S,B.ab,!0,!0,0,null)
s=a4.f
s===$&&A.j()
s.cL(a3)
a4.at=s.b.cR(a3)},
hO(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a2.e,a1=a0.i(0,a3)
if(a1==null)return
s=a1.a
r=A.ar([s],t.N)
for(q=a2.aq(s),p=J.H(q.a),q=new A.M(p,q.b,q.$ti.h("M<1>"));q.m();){o=p.gp()
n=o.c9(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a0.i(0,n)!=null)r.k(0,n)}for(a0=a.Q,a0=new A.X(a0,A.o(a0).h("X<1,2>")).gt(0),s=a.as;a0.m();){m=a0.d
q=m.a
p=s.i(0,q)
p.toString
l=a.cK(p,r.u(0,q)?-1:0)
p=a.f
p===$&&A.j()
o=m.b
k=l.c
k.H()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.an(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.c(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.av()
j=j.gbQ()
i=A.P(j)
A.dG(new A.a_(j,i.h("z(1)").a(k.gby()),i.h("a_<1,z>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.an(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.c(p,o)
p[o].sbh(l)
s.l(0,q,l)}for(a0=a.ay,s=a0.length,f=0;f<a0.length;a0.length===s||(0,A.r)(a0),++f){e=a0[f]
d=r.u(0,e.a)&&e.d.$0()?-1:0
q=a.f
q===$&&A.j()
p=a.cK(e.c,d)
o=p.c
o.H()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.an(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.c(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.av()
k=k.gbQ()
j=A.P(k)
A.dG(new A.a_(k,j.h("z(1)").a(o.gby()),j.h("a_<1,z>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.an(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.c(q,o)
q[o].sbh(p)}a0=new A.ku().jL(a3).a
c=a.at
b=a.ax
if(c!=null&&b!=null){l=a.cK(b,a0!==0?-1:0)
s=a.f
s===$&&A.j()
s.cL(l)
s.b.l5(c,l)
a.ax=l}},
hK(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.ar([b],t.N),h=a.e,g=h.i(0,b)
if(g!=null)for(s=g.a,r=a.aq(s),q=J.H(r.a),r=new A.M(q,r.b,r.$ti.h("M<1>"));r.m();){p=q.gp()
o=p.c9(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h.i(0,o)!=null)i.k(0,o)}n=new A.hG(a).hB(i,c)
m=A.d([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.e9(k.b)
h=k.a
B.a.k(m,new A.i9(new A.z(h.a,h.b,h.c),k.d,k.c))}j=A.t_(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.e9(A.rZ(d))
s=new A.kh(new A.z(j.a,j.b,j.c),1)}this.cy=new A.hy(B.dV,1.5,14,B.bf,h,s,m)},
aw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.id)throw A.b(A.m("Pixeldart runtime is not initialized"))
s=g.cx
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cb(s)
q=A.oT(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.dN(r,q,q.P(0,r),B.y,B.fx,0.1,60,g.b/g.c)}p=g.cy
o=g.db
n=g.go++
m=g.fr
l=new A.mr()
$.pK()
k=$.lR.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.j()
j=g.f
j===$&&A.j()
k.j7()
k.bG()
i=B.a.u(k.d,j)
if(!i)A.k(A.v("world was not created by this renderer",f))
if(k.at!=null)A.k(A.m("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga1(0))A.k(A.v("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga1(0)||i.gbr()<1e-12)A.k(A.v("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.v("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.v("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.ga1(0)||!s.b.ga1(0)||!s.c.ga1(0))A.k(A.v("CameraView matrices must be finite",f))
p.H()
o.H()
if(!isFinite(m))A.k(A.v("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.kB(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.aj)A.k(A.m("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.aj
s.c=0
B.a.J(s.a)
g.dx=g.e.k6()
s=$.lR.$0()
l.b=s
g.dy=l.gk0()/1000},
aQ(a){},
hl(){},
ht(){++this.fx},
jd(a,b){var s,r,q,p,o,n=A.rM(a,b),m=A.R(n.a,t.i)
B.a.I(m,n.b)
B.a.I(m,n.c)
B.a.I(m,n.d)
s=new Float32Array(A.a0(m))
r=A.d([],t.k)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.c(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.c(s,o)
B.a.k(r,new A.z(m,p,s[o]))}return new A.bS(B.ae,s,null,A.dG(r))},
dY(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.j()
r=s.gca().hw(b,"decoration:"+a)
B.a.k(p.y,r)
s=p.ch
s.toString
q=new A.bc(r,s,B.K,0,B.S,B.ab,!0,!0,0,null)
s=p.f
s===$&&A.j()
s.cL(q)
B.a.k(p.ay,new A.j9(a,s.b.cR(q),q,c))},
cK(a,b){return new A.bc(a.a,a.b,a.c,b,a.e,a.f,!0,!0,a.x,a.y)},
ep(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.aa.j().aM(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.d([new A.e(k,s,r),new A.e(q,s,r),new A.e(q,p,r),new A.e(k,p,r)],t.U)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.d([new A.e(k,s,r),new A.e(q,s,r),new A.e(q,p,r),new A.e(k,p,r)],t.U)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.d([new A.e(k,s,r),new A.e(k,s,q),new A.e(k,p,q),new A.e(k,p,r)],t.U)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.d([new A.e(k,s,r),new A.e(k,s,q),new A.e(k,p,q),new A.e(k,p,r)],t.U)
k=r
break
default:k=null}o=new A.dh(new Float32Array(5376))
o.aT(k[0],k[1],k[2],k[3],g)
n=B.w.b9(o.a,0,o.b)
k=A.d([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.c(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.c(n,p)
k.push(new A.z(r,q,n[p]))}return new A.bS(B.ae,n,null,A.dG(k))},
e9(a){return new A.d6((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ioX:1}
A.nm.prototype={
$0(){return!this.a.w},
$S:15}
A.nn.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:15}
A.eb.prototype={
gaY(){return A.ma("legacy",B.l,this.e,this.f,"legacy")},
gcO(){return this.x},
aC(){var s,r=this
if(r.w)return
s=A.uK(r.a,r.b,r.c)
r.r!==$&&A.x()
r.r=s
s.fq=s.fp=s.fo=r.d
r.w=!0},
ar(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.v("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.j()
s.ar(a,b)}},
aw(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.b(A.m("legacy runtime is not initialized"))
if(j.x||$.nH==null)return;++j.y
$.N.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.j()
r=$.rt
q=$.b4.j()
s.fv=A.t_($.dx.j().gba()).gac()
s.shk(A.rZ($.dx.j().gba()))
p=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dx.j().gba()))
s.fB=p<0?0:p
p=$.by.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.a0(0,p.d.P(0,(A.oF(o*0.28,1309)*2-1)*n)).a0(0,p.c.P(0,(A.oF(p.r*0.28,2839)*2-1)*n))
p=$.by.j()
s.fC=p.a
s.d8=p.b
s.d9=p.c
s.da=p.d
m=A.wj(0,0.25,0.11)
s.dc=m.a
s.dd=m.b
s.de=m.c
p=s.bZ
l=p==null?s.bk:p
if(l==null)l=s.aN
p=s.ap
p.aA(l)
s.ak.depthMask(!0)
p.jO(l,s.dc/255,s.dd/255,s.de/255)
s.d3=s.c_=0
s.d5=!1
s.bm=0
k=$.nH
if(k!=null)k.jY($.aS,$.jI())
s.kh(r,q)
$.r7.j().dM(B.cy,r)},
aQ(a){},
hl(){this.x=!0},
ht(){this.x=!1},
$ioX:1}
A.j9.prototype={}
A.op.prototype={
$1(a){var s
try{A.q1(a,this.a)
return!0}catch(s){if(A.ag(s) instanceof A.I)return!1
else throw s}},
$S:95}
A.oq.prototype={
$0(){$.b5=null
$.bk.j().aE($.N.j())},
$S:0}
A.or.prototype={
$2(a,b){var s,r,q,p,o
if($.Y.j().gaH().a===21){A.rB(!1)
return}s=$.aa.j().r.b
$.Y.j().hW(a,b,$.aS)
r=$.aa.j().r.b
q=s
for(;;){p=q
o=r
if(typeof p!=="number")return p.b6()
if(typeof o!=="number")return A.jE(o)
if(!(p<o))break
p=$.nH
if(p!=null){if($.aa.b===$.aa)A.k(A.aw(""))
p.kN(B.a.i(B.B,q).b)}p=q
if(typeof p!=="number")return p.a0()
q=p+1}A.px("saved after sleep")},
$S:96}
A.ou.prototype={
$0(){$.b5=null
$.bk.j().aE($.N.j())},
$S:0}
A.ov.prototype={
$0(){$.b5=null
$.bk.j().aE($.N.j())},
$S:0}
A.ow.prototype={
$0(){$.b5=null},
$S:0}
A.ox.prototype={
$0(){$.b5=null},
$S:0}
A.oy.prototype={
$1(a){A.f(a)
return A.rA()},
$S:1}
A.oz.prototype={
$1(a){var s,r
A.f(a)
if(!A.aR(a.repeat))$.cl.j().aQ(new A.ih(A.E(a.code),!0,1))
if(A.E(a.code)==="KeyP"&&!A.aR(a.repeat))$.pr=!$.pr
if(A.E(a.code)==="KeyR"&&!A.aR(a.repeat)&&$.rJ){s=$.es
if(s!=null)s.b2()}if(A.E(a.code)==="KeyJ"&&!A.aR(a.repeat)&&!$.aA.j().z){s=$.b5
if(s==null){$.b5=$.en.j()
s=$.en.j()
s.i2()
r=s.r.a-1
if(r<1)r=1
s.CW=s.e5(s.CW,r)
s.j8()
s.ev()}else if(s===$.en.j())$.en.j().aB()}if(A.E(a.code)==="KeyL"&&!A.aR(a.repeat)&&!$.aA.j().z){s=$.b5
if(s==null){$.b5=$.jt.j()
$.jt.j().c8()}else if(s===$.jt.j())$.jt.j().aB()}if(A.E(a.code)==="KeyH"&&!A.aR(a.repeat)&&!$.aA.j().z){s=$.b5
if(s==null){$.b5=$.jr.j()
$.jr.j().c8()}else if(s===$.jr.j())$.jr.j().aB()}if(A.E(a.code)==="KeyK"&&!A.aR(a.repeat))A.px("saved")},
$S:3}
A.oA.prototype={
$1(a){A.f(a)
$.cl.j().aQ(new A.ih(A.E(a.code),!1,0))},
$S:3}
A.oB.prototype={
$1(a){A.f(a)
return A.ra()},
$S:1}
A.os.prototype={
$1(a){A.f(a)
return A.ra()},
$S:1}
A.ot.prototype={
$1(a){A.f(a)
return $.bk.j().aE($.N.j())},
$S:1}
A.o0.prototype={
$1(a){var s=A.E(A.f(a).message)
A.o4(s,null)},
$S:3}
A.o1.prototype={
$1(a){var s
A.f(a)
s=a.reason
A.o4("unhandled rejection: "+A.q(s==null?A.E(a.type):s),null)},
$S:3}
A.o7.prototype={
$0(){this.a.className=""},
$S:8}
A.o5.prototype={
$1(a){return t.L.a(a).e},
$S:23};(function aliases(){var s=J.cu.prototype
s.i1=s.n
s=A.n.prototype
s.i0=s.dO
s=A.f2.prototype
s.i2=s.c8})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"wp","ug",26)
r(J.p.prototype,"gbP","u",11)
q(A,"wC","uu",16)
p(A.br.prototype,"gjR","a_",11)
o(A,"x6","vc",7)
o(A,"x7","vd",7)
o(A,"x8","ve",7)
q(A,"rL","wP",0)
s(A,"xc","ul",26)
r(A.bu.prototype,"gbP","u",11)
o(A,"xf","w5",5)
p(A.hX.prototype,"gkU","kV",64)
p(A.iv.prototype,"gkS","kT",97)
q(A,"ym","oU",15)
p(A.cb.prototype,"gby","hy",47)
var n
p(n=A.hJ.prototype,"giV","iW",1)
p(n,"giX","iY",1)
p(n,"gj0","j1",1)
p(n,"giZ","j_",1)
o(A,"xG","rh",5)
o(A,"xI","rg",5)
p(A.f2.prototype,"gj2","j3",1)
p(A.iI.prototype,"gkr","ks",14)
o(A,"rS","wF",99)
o(A,"xA","w1",100)
q(A,"xC","w4",0)
o(A,"xB","w2",67)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.D,null)
q(A.D,[A.oN,J.hL,A.fc,J.cQ,A.n,A.eB,A.cp,A.a2,A.G,A.ml,A.c8,A.d7,A.M,A.fl,A.ac,A.bX,A.bv,A.e_,A.dP,A.du,A.ce,A.mE,A.lC,A.eI,A.fF,A.S,A.lq,A.cv,A.aj,A.eU,A.n3,A.nv,A.bG,A.j_,A.jm,A.ns,A.iO,A.bj,A.au,A.iS,A.dp,A.a5,A.iP,A.jk,A.fR,A.fu,A.j4,A.dv,A.fx,A.fL,A.jn,A.cT,A.hk,A.nk,A.nw,A.cU,A.cr,A.iX,A.i5,A.fe,A.n4,A.I,A.J,A.ae,A.jl,A.mr,A.aJ,A.fN,A.mG,A.jg,A.lB,A.j1,A.ec,A.lV,A.da,A.ka,A.kb,A.ia,A.dN,A.hy,A.kB,A.cd,A.kR,A.d6,A.kh,A.i9,A.e6,A.cw,A.cj,A.mL,A.bS,A.lD,A.lM,A.ii,A.bc,A.is,A.ig,A.kD,A.hX,A.iz,A.ly,A.iv,A.d2,A.hw,A.hx,A.kC,A.af,A.ba,A.aI,A.K,A.eC,A.lS,A.aG,A.lX,A.aF,A.lZ,A.lY,A.ds,A.f7,A.nq,A.ja,A.iZ,A.md,A.mj,A.aZ,A.aV,A.ao,A.kd,A.h1,A.d9,A.kE,A.cb,A.lU,A.mD,A.z,A.eA,A.iQ,A.ha,A.iR,A.ho,A.iU,A.eF,A.iV,A.hs,A.iW,A.hF,A.j0,A.hc,A.hb,A.f4,A.jb,A.id,A.jc,A.dg,A.il,A.je,A.im,A.jf,A.iq,A.ji,A.ip,A.jh,A.iE,A.jo,A.f9,A.iM,A.jp,A.k8,A.hB,A.kQ,A.eN,A.fd,A.B,A.hp,A.ib,A.kP,A.cJ,A.bU,A.eG,A.mW,A.cL,A.fQ,A.fP,A.iL,A.hr,A.h6,A.k7,A.kA,A.it,A.kN,A.hH,A.hJ,A.hW,A.d8,A.lx,A.dh,A.m3,A.mc,A.mY,A.fs,A.jj,A.j8,A.j6,A.mm,A.e,A.k6,A.ht,A.kn,A.dS,A.i8,A.lN,A.e4,A.mi,A.de,A.hz,A.kK,A.kJ,A.jW,A.dI,A.dK,A.dH,A.dJ,A.hd,A.hY,A.fn,A.iN,A.eO,A.kV,A.me,A.aE,A.ks,A.kW,A.kX,A.ku,A.cI,A.dU,A.mf,A.cH,A.ej,A.kU,A.kr,A.mn,A.bT,A.hG,A.aK,A.cy,A.aP,A.b_,A.cq,A.cB,A.ay,A.l_,A.f3,A.eV,A.mT,A.hU,A.b8,A.la,A.k2,A.dL,A.k3,A.lm,A.ll,A.lK,A.lJ,A.lL,A.mb,A.ih,A.m9,A.e5,A.ke,A.mX,A.dm,A.hj,A.l5,A.l7,A.mg,A.bV,A.mh,A.hA,A.ms,A.dk,A.dj,A.fk,A.mx,A.jR,A.k5,A.ki,A.f2,A.lT,A.bC,A.jO,A.iI,A.mS,A.ck,A.bh,A.bt,A.b1,A.iK,A.h2,A.iH,A.fC,A.eb,A.j9])
q(J.hL,[J.hP,J.eQ,J.eR,J.dY,J.dZ,J.d3,J.d4])
q(J.eR,[J.cu,J.p,A.cx,A.eZ])
q(J.cu,[J.i7,J.di,J.c7])
r(J.hN,A.fc)
r(J.l9,J.p)
q(J.d3,[J.eP,J.hQ])
q(A.n,[A.cG,A.A,A.ca,A.L,A.bJ,A.dt,A.c_])
q(A.cG,[A.cS,A.fS])
r(A.fr,A.cS)
r(A.fp,A.fS)
q(A.cp,[A.hf,A.he,A.iu,A.ok,A.om,A.n_,A.mZ,A.nE,A.kH,A.ne,A.ng,A.lt,A.ni,A.oD,A.oE,A.oe,A.lW,A.lF,A.lw,A.lz,A.mA,A.mC,A.kx,A.kv,A.kw,A.lH,A.lI,A.m2,A.m1,A.m0,A.m_,A.m4,A.nX,A.nY,A.mk,A.oJ,A.oH,A.kF,A.lv,A.oc,A.mU,A.mV,A.jV,A.kO,A.m8,A.kq,A.kL,A.kM,A.jX,A.jY,A.jZ,A.k_,A.k0,A.k1,A.oa,A.k9,A.kt,A.kY,A.nZ,A.nD,A.l1,A.l3,A.mo,A.km,A.lp,A.lh,A.kf,A.kg,A.o2,A.my,A.mz,A.jS,A.kj,A.kk,A.kl,A.kp,A.kT,A.lc,A.ld,A.le,A.mq,A.jQ,A.mR,A.mQ,A.mO,A.oh,A.mM,A.jL,A.jM,A.jN,A.op,A.oy,A.oz,A.oA,A.oB,A.os,A.ot,A.o0,A.o1,A.o5])
q(A.hf,[A.n2,A.kc,A.li,A.ol,A.nF,A.ob,A.kI,A.nf,A.lr,A.lu,A.nl,A.mJ,A.mI,A.lA,A.mB,A.ky,A.oI,A.oG,A.l2,A.l4,A.kZ,A.lo,A.l8,A.mt,A.mu,A.lf,A.lg,A.jP,A.mP,A.mN,A.or])
r(A.bE,A.fp)
q(A.a2,[A.d5,A.cg,A.hR,A.iy,A.ij,A.iY,A.eT,A.h4,A.bD,A.fi,A.ix,A.e7,A.hi])
r(A.e9,A.G)
r(A.hg,A.e9)
q(A.A,[A.a3,A.ai,A.aN,A.X,A.dr,A.fw])
q(A.a3,[A.fg,A.a_,A.fb,A.j3])
r(A.cV,A.ca)
q(A.bv,[A.ed,A.ee,A.ef])
r(A.eg,A.ed)
r(A.eh,A.ee)
r(A.fD,A.ef)
r(A.ek,A.e_)
r(A.cD,A.ek)
r(A.eD,A.cD)
q(A.dP,[A.a1,A.eK])
q(A.ce,[A.eE,A.fE,A.fM])
r(A.c3,A.eE)
q(A.he,[A.lO,A.n0,A.n1,A.nt,A.kG,A.n5,A.na,A.n9,A.n7,A.n6,A.nd,A.nc,A.nb,A.np,A.o6,A.ny,A.nx,A.nV,A.nP,A.nU,A.nL,A.nM,A.nW,A.nT,A.nJ,A.nK,A.nQ,A.nR,A.nS,A.nO,A.nN,A.od,A.m7,A.l0,A.nm,A.nn,A.oq,A.ou,A.ov,A.ow,A.ox,A.o7])
r(A.f1,A.cg)
q(A.iu,[A.ir,A.dM])
q(A.S,[A.br,A.ft,A.j2])
r(A.eS,A.br)
r(A.e0,A.cx)
q(A.eZ,[A.hZ,A.ax])
q(A.ax,[A.fy,A.fA])
r(A.fz,A.fy)
r(A.eX,A.fz)
r(A.fB,A.fA)
r(A.eY,A.fB)
q(A.eX,[A.eW,A.i_])
q(A.eY,[A.i0,A.i1,A.i2,A.i3,A.i4,A.f_,A.f0])
r(A.fG,A.iY)
r(A.fm,A.iS)
r(A.jd,A.fR)
r(A.fv,A.ft)
r(A.bu,A.fE)
r(A.fh,A.fM)
q(A.cT,[A.h7,A.hu,A.hS])
q(A.hk,[A.k4,A.lk,A.lj,A.mK])
r(A.hT,A.eT)
r(A.nj,A.nk)
r(A.iC,A.hu)
q(A.bD,[A.e2,A.hI])
r(A.iT,A.fN)
q(A.iX,[A.db,A.d1,A.h3,A.ci,A.dR,A.h9,A.hh,A.hq,A.dd,A.dV,A.bF,A.fa,A.c5,A.e3,A.dW,A.fo,A.fq,A.hC,A.eL,A.hD,A.hE,A.d_,A.eM,A.df,A.cC,A.dO,A.ei,A.h8,A.cR,A.hl,A.hn,A.az,A.bq,A.cZ,A.cW,A.cX,A.eJ,A.cs,A.ct,A.f8,A.dc,A.b0,A.aQ,A.hK,A.dn,A.bs,A.aW,A.bf,A.bg,A.cE,A.bY])
q(A.cd,[A.aY,A.be,A.bR,A.i6,A.c6])
r(A.m6,A.mY)
r(A.m5,A.m6)
q(A.f2,[A.ko,A.kS,A.lb,A.mp])
q(A.mS,[A.iJ,A.j7,A.b2,A.iG,A.iF,A.fj])
s(A.e9,A.bX)
s(A.fS,A.G)
s(A.fy,A.G)
s(A.fz,A.ac)
s(A.fA,A.G)
s(A.fB,A.ac)
s(A.ek,A.fL)
s(A.fM,A.jn)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",t:"double",aC:"num",l:"String",u:"bool",ae:"Null",C:"List",D:"Object",O:"Map",T:"JSObject"},mangledNames:{},types:["~()","~(T)","c4()","ae(T)","u(l)","@(@)","u(af)","~(~())","ae()","~(@)","u(K)","u(D?)","u(t)","h(b8,b8)","u(b1)","u()","h()","@(l)","ae(@)","~(D?,D?)","@()","u(h)","l?(l)","u(b8)","l(D?)","u(aK)","h(@,@)","O<l,l>(O<l,l>,l)","u(iw?)","h(h,+(be,nr))","l(af)","h(V,V)","ae(D,bW)","~(@,@)","c6(h,h,l?)","f9(aY)","c4(l{fallback:l?})","ae(~())","e6?()","dN()","t()","bc(bd)","h(ao<aZ>,ao<aZ>)","bd(ao<aZ>)","h(ao<aV>,ao<aV>)","bd(ao<aV>)","d9(t,t,t,t)","z(z)","@(@,l)","~(dg)","dg()","ae(@,bW)","b9<ae>(J<l,l>)","u(T)","0&(l,h?)","T()","D?(D?)","u(bq)","u(ay)","~(h,@)","dI(D?)","dH(D?)","dJ(D?)","~(D,bW)","cw(bR)","dK(D?)","u(@)","~(h)","u(cI)","u(cH)","e(e)","h(+(t,t,t,t),+(t,t,t,t))","C<+(t,t,t,t)>()","u(cy)","h(h,ay)","h(bT,bT)","J<l,l>(l,@)","u(b0)","u(aQ)","bR(h,h,l?)","h(h)","J<h,@>(h,dk)","J<h,@>(h,dj)","u(J<@,@>)","J<l,l>(J<@,@>)","l(bC)","h(bC,bC)","aY(h,h,l?)","h(b1,b1)","h(bt,bt)","O<l,@>(b1)","u(bg)","u(bf)","u(aW)","h(h,+(aY,bS))","u(e4)","~(b0,aQ)","c4(be?)","be(h,h,l?)","~(aC)","~(l)","u(cB)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.eg&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eh&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fD&&A.xE(a,b.a)}}
A.vw(v.typeUniverse,JSON.parse('{"i7":"cu","di":"cu","c7":"cu","xY":"cx","p":{"C":["1"],"A":["1"],"T":[],"n":["1"]},"hP":{"u":[],"W":[]},"eQ":{"ae":[],"W":[]},"eR":{"T":[]},"cu":{"T":[]},"hN":{"fc":[]},"l9":{"p":["1"],"C":["1"],"A":["1"],"T":[],"n":["1"]},"cQ":{"a7":["1"]},"d3":{"t":[],"aC":[],"av":["aC"]},"eP":{"t":[],"h":[],"aC":[],"av":["aC"],"W":[]},"hQ":{"t":[],"aC":[],"av":["aC"],"W":[]},"d4":{"l":[],"av":["l"],"qi":[],"W":[]},"cG":{"n":["2"]},"eB":{"a7":["2"]},"cS":{"cG":["1","2"],"n":["2"],"n.E":"2"},"fr":{"cS":["1","2"],"cG":["1","2"],"A":["2"],"n":["2"],"n.E":"2"},"fp":{"G":["2"],"C":["2"],"cG":["1","2"],"A":["2"],"n":["2"]},"bE":{"fp":["1","2"],"G":["2"],"C":["2"],"cG":["1","2"],"A":["2"],"n":["2"],"n.E":"2","G.E":"2"},"d5":{"a2":[]},"hg":{"G":["h"],"bX":["h"],"C":["h"],"A":["h"],"n":["h"],"G.E":"h","bX.E":"h"},"A":{"n":["1"]},"a3":{"A":["1"],"n":["1"]},"fg":{"a3":["1"],"A":["1"],"n":["1"],"a3.E":"1","n.E":"1"},"c8":{"a7":["1"]},"ca":{"n":["2"],"n.E":"2"},"cV":{"ca":["1","2"],"A":["2"],"n":["2"],"n.E":"2"},"d7":{"a7":["2"]},"a_":{"a3":["2"],"A":["2"],"n":["2"],"a3.E":"2","n.E":"2"},"L":{"n":["1"],"n.E":"1"},"M":{"a7":["1"]},"bJ":{"n":["1"],"n.E":"1"},"fl":{"a7":["1"]},"e9":{"G":["1"],"bX":["1"],"C":["1"],"A":["1"],"n":["1"]},"fb":{"a3":["1"],"A":["1"],"n":["1"],"a3.E":"1","n.E":"1"},"eg":{"ed":[],"bv":[]},"eh":{"ee":[],"bv":[]},"fD":{"ef":[],"bv":[]},"eD":{"cD":["1","2"],"ek":["1","2"],"e_":["1","2"],"fL":["1","2"],"O":["1","2"]},"dP":{"O":["1","2"]},"a1":{"dP":["1","2"],"O":["1","2"]},"dt":{"n":["1"],"n.E":"1"},"du":{"a7":["1"]},"eK":{"dP":["1","2"],"O":["1","2"]},"eE":{"ce":["1"],"cA":["1"],"A":["1"],"n":["1"]},"c3":{"eE":["1"],"ce":["1"],"cA":["1"],"A":["1"],"n":["1"]},"f1":{"cg":[],"a2":[]},"hR":{"a2":[]},"iy":{"a2":[]},"fF":{"bW":[]},"cp":{"cY":[]},"he":{"cY":[]},"hf":{"cY":[]},"iu":{"cY":[]},"ir":{"cY":[]},"dM":{"cY":[]},"ij":{"a2":[]},"br":{"S":["1","2"],"oP":["1","2"],"O":["1","2"],"S.K":"1","S.V":"2"},"ai":{"A":["1"],"n":["1"],"n.E":"1"},"cv":{"a7":["1"]},"aN":{"A":["1"],"n":["1"],"n.E":"1"},"aj":{"a7":["1"]},"X":{"A":["J<1,2>"],"n":["J<1,2>"],"n.E":"J<1,2>"},"eU":{"a7":["J<1,2>"]},"eS":{"br":["1","2"],"S":["1","2"],"oP":["1","2"],"O":["1","2"],"S.K":"1","S.V":"2"},"ed":{"bv":[]},"ee":{"bv":[]},"ef":{"bv":[]},"e0":{"cx":[],"T":[],"W":[]},"cx":{"T":[],"W":[]},"eZ":{"T":[]},"hZ":{"T":[],"W":[]},"ax":{"bb":["1"],"T":[]},"eX":{"G":["t"],"ax":["t"],"C":["t"],"bb":["t"],"A":["t"],"T":[],"n":["t"],"ac":["t"]},"eY":{"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"]},"eW":{"kz":[],"G":["t"],"ax":["t"],"C":["t"],"bb":["t"],"A":["t"],"T":[],"n":["t"],"ac":["t"],"W":[],"G.E":"t","ac.E":"t"},"i_":{"G":["t"],"ax":["t"],"C":["t"],"bb":["t"],"A":["t"],"T":[],"n":["t"],"ac":["t"],"W":[],"G.E":"t","ac.E":"t"},"i0":{"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"],"W":[],"G.E":"h","ac.E":"h"},"i1":{"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"],"W":[],"G.E":"h","ac.E":"h"},"i2":{"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"],"W":[],"G.E":"h","ac.E":"h"},"i3":{"p0":[],"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"],"W":[],"G.E":"h","ac.E":"h"},"i4":{"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"],"W":[],"G.E":"h","ac.E":"h"},"f_":{"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"],"W":[],"G.E":"h","ac.E":"h"},"f0":{"iw":[],"G":["h"],"ax":["h"],"C":["h"],"bb":["h"],"A":["h"],"T":[],"n":["h"],"ac":["h"],"W":[],"G.E":"h","ac.E":"h"},"iY":{"a2":[]},"fG":{"cg":[],"a2":[]},"bj":{"a7":["1"]},"c_":{"n":["1"],"n.E":"1"},"au":{"a2":[]},"fm":{"iS":["1"]},"a5":{"b9":["1"]},"fR":{"qL":[]},"jd":{"fR":[],"qL":[]},"ft":{"S":["1","2"],"O":["1","2"]},"fv":{"ft":["1","2"],"S":["1","2"],"O":["1","2"],"S.K":"1","S.V":"2"},"dr":{"A":["1"],"n":["1"],"n.E":"1"},"fu":{"a7":["1"]},"bu":{"ce":["1"],"qf":["1"],"cA":["1"],"A":["1"],"n":["1"]},"dv":{"a7":["1"]},"G":{"C":["1"],"A":["1"],"n":["1"]},"S":{"O":["1","2"]},"fw":{"A":["2"],"n":["2"],"n.E":"2"},"fx":{"a7":["2"]},"e_":{"O":["1","2"]},"cD":{"ek":["1","2"],"e_":["1","2"],"fL":["1","2"],"O":["1","2"]},"ce":{"cA":["1"],"A":["1"],"n":["1"]},"fE":{"ce":["1"],"cA":["1"],"A":["1"],"n":["1"]},"fh":{"ce":["1"],"jn":["1"],"cA":["1"],"A":["1"],"n":["1"]},"j2":{"S":["l","@"],"O":["l","@"],"S.K":"l","S.V":"@"},"j3":{"a3":["l"],"A":["l"],"n":["l"],"a3.E":"l","n.E":"l"},"h7":{"cT":["C<h>","l"]},"hu":{"cT":["l","C<h>"]},"eT":{"a2":[]},"hT":{"a2":[]},"hS":{"cT":["D?","l"]},"iC":{"cT":["l","C<h>"]},"cU":{"av":["cU"]},"t":{"aC":[],"av":["aC"]},"cr":{"av":["cr"]},"h":{"aC":[],"av":["aC"]},"C":{"A":["1"],"n":["1"]},"aC":{"av":["aC"]},"cA":{"A":["1"],"n":["1"]},"l":{"av":["l"],"qi":[]},"iX":{"F":[]},"h4":{"a2":[]},"cg":{"a2":[]},"bD":{"a2":[]},"e2":{"a2":[]},"hI":{"a2":[]},"fi":{"a2":[]},"ix":{"a2":[]},"e7":{"a2":[]},"hi":{"a2":[]},"i5":{"a2":[]},"fe":{"a2":[]},"jl":{"bW":[]},"aJ":{"uQ":[]},"fN":{"iA":[]},"jg":{"iA":[]},"iT":{"iA":[]},"j1":{"oV":[]},"ec":{"oV":[]},"db":{"F":[]},"aY":{"cd":[]},"be":{"cd":[]},"bR":{"cd":[]},"c6":{"cd":[]},"i6":{"cd":[]},"d1":{"F":[]},"h3":{"F":[]},"ci":{"F":[]},"dR":{"F":[]},"h9":{"F":[]},"hh":{"F":[]},"hq":{"F":[]},"dd":{"F":[]},"dV":{"F":[]},"bF":{"F":[]},"fa":{"F":[]},"c5":{"F":[]},"e3":{"F":[]},"f7":{"uI":[]},"ds":{"bd":[]},"ja":{"uH":[]},"iZ":{"u4":[]},"aZ":{"av":["aZ"]},"aV":{"av":["aV"]},"dW":{"F":[]},"fo":{"F":[]},"eA":{"a6":[]},"iQ":{"V":[]},"ha":{"a6":[]},"iR":{"V":[]},"ho":{"a6":[]},"iU":{"V":[]},"fq":{"F":[]},"eF":{"a6":[]},"iV":{"V":[]},"hs":{"a6":[]},"iW":{"V":[]},"hF":{"a6":[]},"j0":{"V":[]},"hb":{"uG":[]},"f4":{"a6":[]},"jb":{"V":[]},"id":{"a6":[]},"jc":{"V":[]},"il":{"a6":[]},"je":{"V":[]},"im":{"a6":[]},"jf":{"V":[]},"iq":{"a6":[]},"ji":{"V":[]},"ip":{"a6":[]},"jh":{"V":[]},"iE":{"a6":[]},"jo":{"V":[]},"iM":{"a6":[]},"jp":{"V":[]},"hC":{"F":[]},"eL":{"F":[]},"hD":{"F":[]},"hE":{"F":[]},"d_":{"F":[]},"eM":{"F":[]},"df":{"F":[]},"cC":{"F":[]},"dO":{"F":[]},"hp":{"tO":[]},"ei":{"F":[]},"az":{"F":[]},"h8":{"F":[]},"cR":{"F":[]},"hl":{"F":[]},"hn":{"F":[]},"cL":{"c4":[]},"iL":{"u7":[]},"bq":{"F":[]},"cZ":{"F":[]},"cW":{"F":[]},"cX":{"F":[]},"cs":{"F":[]},"eJ":{"F":[]},"ct":{"F":[]},"f8":{"F":[]},"dc":{"F":[]},"b0":{"F":[]},"aQ":{"F":[]},"hK":{"F":[]},"dn":{"F":[]},"bs":{"F":[]},"aW":{"F":[]},"bf":{"F":[]},"bg":{"F":[]},"cE":{"F":[]},"bY":{"F":[]},"fC":{"oX":[]},"eb":{"oX":[]},"uc":{"C":["h"],"A":["h"],"n":["h"]},"iw":{"C":["h"],"A":["h"],"n":["h"]},"uV":{"C":["h"],"A":["h"],"n":["h"]},"ua":{"C":["h"],"A":["h"],"n":["h"]},"p0":{"C":["h"],"A":["h"],"n":["h"]},"ub":{"C":["h"],"A":["h"],"n":["h"]},"uU":{"C":["h"],"A":["h"],"n":["h"]},"kz":{"C":["t"],"A":["t"],"n":["t"]},"u3":{"C":["t"],"A":["t"],"n":["t"]}}'))
A.vv(v.typeUniverse,JSON.parse('{"e9":1,"fS":2,"ax":1,"fE":1,"fM":1,"hk":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.at
return{e:s("bC"),v:s("au"),f5:s("h6"),gE:s("dH"),fS:s("dI"),d2:s("dJ"),lJ:s("dK"),dP:s("aV"),kp:s("hc"),bP:s("av<@>"),gY:s("eC"),B:s("a1<l,l>"),I:s("a1<l,h>"),R:s("c3<l>"),ml:s("cU"),lD:s("aW"),jS:s("cr"),gt:s("A<@>"),no:s("bq"),L:s("b8"),V:s("a2"),hZ:s("aE"),D:s("kz"),Z:s("cY"),mj:s("b9<ae>"),_:s("c4"),bU:s("ct"),lv:s("hH<D>"),hL:s("c6"),dp:s("n<eC>"),bq:s("n<l>"),id:s("n<t>"),e7:s("n<@>"),fm:s("n<h>"),od:s("p<bC>"),ag:s("p<ht>"),hS:s("p<cq>"),r:s("p<b8>"),oP:s("p<aE>"),iw:s("p<b9<~>>"),mc:s("p<hz>"),l2:s("p<c4>"),aW:s("p<ba>"),oX:s("p<xX<D>>"),og:s("p<d2>"),jj:s("p<c6>"),kG:s("p<T>"),b1:s("p<hU>"),cs:s("p<aP>"),ic:s("p<O<l,D>>"),hq:s("p<O<l,l>>"),bV:s("p<O<l,@>>"),kS:s("p<hW>"),mm:s("p<d8>"),dg:s("p<aY>"),hJ:s("p<af>"),x:s("p<b_>"),de:s("p<d9>"),bz:s("p<bT>"),dQ:s("p<i9>"),aN:s("p<cy>"),fR:s("p<+(h,l)>"),a3:s("p<+(t,t,t,t)>"),o5:s("p<a6>"),u:s("p<V>"),oZ:s("p<f7>"),C:s("p<K>"),c8:s("p<bc>"),bH:s("p<bd>"),kl:s("p<ay>"),e_:s("p<bV>"),b2:s("p<e5>"),ao:s("p<ao<aV>>"),mX:s("p<ao<aZ>>"),jn:s("p<cB>"),s:s("p<l>"),aA:s("p<it>"),k:s("p<z>"),U:s("p<e>"),cF:s("p<fk>"),bl:s("p<ck>"),ah:s("p<bt>"),E:s("p<aK>"),jX:s("p<cI>"),a9:s("p<cH>"),jU:s("p<j9>"),dz:s("p<cJ<cw>>"),jk:s("p<cJ<bS>>"),n_:s("p<cJ<bc>>"),mQ:s("p<cJ<nr>>"),eP:s("p<ej>"),df:s("p<u>"),n:s("p<t>"),dG:s("p<@>"),t:s("p<h>"),kC:s("p<T?>"),dM:s("p<D?>"),g2:s("p<aC>"),T:s("eQ"),m:s("T"),d4:s("T()"),dY:s("c7"),dX:s("bb<@>"),bY:s("C<b8>"),a:s("C<ba>"),l_:s("C<O<l,l>>"),O:s("C<af>"),b3:s("C<bT>"),jz:s("C<+(h,l)>"),ge:s("C<+(t,t,t,t)>"),io:s("C<bV>"),h:s("C<l>"),iD:s("C<fk>"),ee:s("C<ck>"),eU:s("C<bt>"),cu:s("C<fs>"),j:s("C<@>"),J:s("C<h>"),ia:s("C<D?>"),mK:s("eV"),q:s("J<l,l>"),d7:s("J<@,@>"),iI:s("J<h,@>"),f7:s("O<l,c4>"),iE:s("O<l,af>"),G:s("O<l,l>"),oQ:s("O<l,u>"),P:s("O<l,@>"),f:s("O<@,@>"),d8:s("O<h,dj>"),c_:s("O<h,dk>"),gz:s("O<l,C<+(t,t,t,t)>>"),kz:s("O<bg,C<bt>>"),iu:s("O<h,O<l,l>>"),mz:s("a_<z,z>"),dD:s("a_<l,l?>"),fP:s("bR"),l0:s("aY"),eb:s("e0"),b:s("ae"),K:s("D"),nL:s("aZ"),A:s("af"),f0:s("bT"),gm:s("cy"),ku:s("f3"),lZ:s("xZ"),aK:s("+()"),o7:s("+(aY,bS)"),iL:s("+(l,T)"),p3:s("+(be,nr)"),cW:s("+(t,t,t,t)"),ks:s("V"),mn:s("bU<c6,bc>"),kk:s("bU<bR,cw>"),ll:s("bU<aY,bS>"),ox:s("bU<be,nr>"),n4:s("K"),p9:s("bc"),os:s("bd"),W:s("ay"),k8:s("bV"),Q:s("cA<l>"),nO:s("cA<h>"),m9:s("aQ"),gC:s("b0"),ad:s("e5"),c:s("ao<aV>"),p:s("ao<aZ>"),l:s("bW"),fO:s("cB"),dB:s("az"),N:s("l"),lu:s("be"),aJ:s("W"),do:s("cg"),cx:s("di"),ph:s("cD<l,l>"),mL:s("iz"),jJ:s("iA"),b9:s("z"),bf:s("e"),pc:s("z(z)"),g:s("b1"),nq:s("bf"),kM:s("bg"),bR:s("dj"),ey:s("dk"),mv:s("ck"),kX:s("bt"),cq:s("b2"),bn:s("L<aW>"),ns:s("L<bq>"),hr:s("L<aQ>"),am:s("L<b0>"),nn:s("L<l>"),cB:s("L<bf>"),na:s("L<bg>"),lS:s("bJ<l>"),hE:s("aK"),fH:s("fs"),d:s("a5<@>"),cU:s("a5<~>"),mp:s("fv<D?,D?>"),j8:s("j6"),fg:s("cI"),at:s("cH"),ln:s("j7"),fw:s("j8"),hX:s("jj"),fJ:s("c_<bd>"),jg:s("fP"),fL:s("fQ"),y:s("u"),al:s("u()"),hg:s("u(aW)"),gl:s("u(bq)"),iW:s("u(D)"),aZ:s("u(aQ)"),gw:s("u(b0)"),gS:s("u(l)"),bQ:s("u(bf)"),nw:s("u(bg)"),i:s("t"),z:s("@"),mY:s("@()"),mq:s("@(D)"),ng:s("@(D,bW)"),S:s("h"),gK:s("b9<ae>?"),mU:s("T?"),lH:s("C<@>?"),X:s("D?"),w:s("l?"),ej:s("l?(l)"),F:s("dp<@,@>?"),Y:s("j4?"),fU:s("u?"),hK:s("u(e4)?"),dA:s("t?"),aV:s("h?"),jh:s("aC?"),jE:s("~()?"),as:s("~(b0,aQ)?"),ov:s("~(l)?"),bZ:s("~(h)?"),o:s("aC"),H:s("~"),M:s("~()"),lc:s("~(l,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.dQ=J.hL.prototype
B.a=J.p.prototype
B.c=J.eP.prototype
B.d=J.d3.prototype
B.b=J.d4.prototype
B.dR=J.c7.prototype
B.dS=J.eR.prototype
B.w=A.eW.prototype
B.bw=A.f0.prototype
B.bx=J.i7.prototype
B.aJ=J.di.prototype
B.hc=new A.h3(0,"opaque")
B.Z=new A.f8(1,"next")
B.cg=new A.dL(B.Z,!0,!1,null)
B.a9=new A.h8(0,"add")
B.ch=new A.cR(0,"zero")
B.aa=new A.cR(1,"one")
B.ab=new A.h9(0,"alpha")
B.ac=new A.k2()
B.hd=new A.k4()
B.ck=new A.h7()
B.cl=new A.k8()
B.b6=new A.hD(1,"linear")
B.b7=new A.hE(0,"clampToEdge")
B.cr=new A.kQ()
B.aO=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cs=function() {
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
B.cx=function(getTagFallback) {
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
B.ct=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cw=function(hooks) {
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
B.cv=function(hooks) {
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
B.cu=function(hooks) {
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
B.aP=function(hooks) { return hooks; }

B.u=new A.hS()
B.he=new A.lm()
B.cy=new A.D()
B.cz=new A.i5()
B.hf=new A.lK()
B.cA=new A.lL()
B.ad=new A.lU()
B.cB=new A.bV()
B.O=new A.bs(1,"gradeLUT")
B.cC=new A.bV()
B.cD=new A.mg()
B.cE=new A.mi()
B.k=new A.ml()
B.I=new A.z(0,1,0)
B.a2=new A.z(0,-1,0)
B.bf=new A.d6(1,1,1)
B.cF=new A.e6()
B.y=new A.z(0,0,0)
B.K=new A.mD()
B.aQ=new A.iC()
B.fB=new A.ci(0,"position")
B.fH=new A.cj(B.fB,0,3)
B.fC=new A.ci(1,"normal")
B.fI=new A.cj(B.fC,3,3)
B.fD=new A.ci(2,"color")
B.fJ=new A.cj(B.fD,6,4)
B.fE=new A.ci(4,"alpha")
B.fK=new A.cj(B.fE,10,1)
B.fF=new A.ci(5,"uv0")
B.fL=new A.cj(B.fF,11,2)
B.fG=new A.ci(6,"legacyMaterialEffect")
B.fM=new A.cj(B.fG,13,1)
B.ao=s([B.fH,B.fI,B.fJ,B.fK,B.fL,B.fM],A.at("p<cj>"))
B.ae=new A.mL()
B.aR=new A.j1()
B.q=new A.jd()
B.Q=new A.jl()
B.aS=new A.dO(0,"colorOnly")
B.aT=new A.dO(1,"colorAndDepth")
B.af=new A.dO(2,"depthOnly")
B.ag=new A.hl(1,"back")
B.ah=new A.hn(0,"less")
B.R=new A.aW(0,"open")
B.aU=new A.aW(1,"chain")
B.aV=new A.aW(2,"throughDoor")
B.aW=new A.aW(3,"letterbox")
B.L=new A.aW(4,"ignore")
B.S=new A.dR(0,"opaque")
B.cG=new A.dR(1,"masked")
B.ai=new A.dR(2,"blended")
B.cH=new A.eG(!0,B.ah,!1,!0,B.aa,B.aa,B.a9,!0,B.ag,!0,!1,!0,!0,!0,!0,!1)
B.ci=new A.cR(2,"srcAlpha")
B.cj=new A.cR(3,"oneMinusSrcAlpha")
B.cI=new A.eG(!0,B.ah,!1,!0,B.ci,B.cj,B.a9,!0,B.ag,!0,!1,!0,!0,!0,!0,!1)
B.cJ=new A.cr(0)
B.cK=new A.cr(24e5)
B.aX=new A.bq(0,"compliance")
B.cL=new A.dS(B.aX)
B.aY=new A.bq(1,"rupture")
B.cM=new A.dS(B.aY)
B.aZ=new A.bq(2,"synchronisation")
B.cN=new A.dS(B.aZ)
B.b_=new A.cW(0,"front")
B.cO=new A.cW(1,"rearService")
B.cP=new A.cW(2,"sideBoundary")
B.cQ=new A.cW(3,"roofline")
B.j=new A.cs(0,"north")
B.v=new A.cs(1,"east")
B.m=new A.cs(2,"south")
B.G=new A.cs(3,"west")
B.T=new A.eJ(0,"ground")
B.U=new A.eJ(1,"first")
B.cR=new A.cX(0,"mantle")
B.cS=new A.cX(1,"portal")
B.cU=new A.cX(3,"none")
B.cV=new A.dU(B.cU,null)
B.cT=new A.cX(2,"window")
B.cW=new A.dU(B.cT,"the shutter")
B.cX=new A.I("saved mantle history is malformed",null,null)
B.cY=new A.I("rupture elapsed time is malformed",null,null)
B.cZ=new A.I("presentation keys must be strings",null,null)
B.b0=new A.I("saved mantle state is malformed",null,null)
B.d_=new A.I("inactive rupture has elapsed time",null,null)
B.d0=new A.I("saved difficulty state is malformed",null,null)
B.d1=new A.I("saved house drift state is malformed",null,null)
B.d2=new A.I("saved sleep record is malformed",null,null)
B.d3=new A.I("saved day-loop sleepHistory must be a list",null,null)
B.d4=new A.I("event sequence must be non-negative",null,null)
B.d5=new A.I("modelScale must be positive and finite",null,null)
B.d6=new A.I("saved window state is malformed",null,null)
B.d7=new A.I("save run and meta must be objects",null,null)
B.d8=new A.I("saved house state is malformed",null,null)
B.d9=new A.I("saved sleep record must be an object",null,null)
B.da=new A.I("saved session run is malformed",null,null)
B.db=new A.I("save map keys must be strings",null,null)
B.dc=new A.I("saved day-loop state is malformed",null,null)
B.dd=new A.I("rupture extinguished mantle is unknown",null,null)
B.b1=new A.I("saved portal state is malformed",null,null)
B.de=new A.I("saved house state does not match this house",null,null)
B.df=new A.I("presentation snapshot contains a non-finite number",null,null)
B.dg=new A.I("save contains a non-finite number",null,null)
B.dh=new A.I("text.json root must be an object",null,null)
B.di=new A.I("event kind is empty",null,null)
B.dj=new A.I("saved session clock is malformed",null,null)
B.dk=new A.I("rupture mantle IDs are malformed",null,null)
B.dl=new A.I("saved sleep record has an unknown enum",null,null)
B.dm=new A.I("save root must be an object",null,null)
B.dn=new A.I("render capabilities contain invalid limits",null,null)
B.dp=new A.I("saved house overrides are malformed",null,null)
B.be=new A.d6(0,0,0)
B.ec=s([],t.dQ)
B.hi=s([],A.at("p<e6>"))
B.dq=new A.hy(B.be,0,1,B.bf,0,null,B.ec)
B.dr=new A.dV(0,"idle")
B.aj=new A.dV(1,"active")
B.ds=new A.dV(2,"ended")
B.b2=new A.dW(0,"outside")
B.dt=new A.dW(1,"intersects")
B.du=new A.dW(2,"inside")
B.dv=new A.cZ(0,"timeAdvanced")
B.dw=new A.cZ(1,"dayEndReached")
B.dx=new A.cZ(4,"slept")
B.dy=new A.cZ(5,"complianceFloorTripped")
B.dz=new A.eL(0,"vertex")
B.b3=new A.eL(1,"indices")
B.b4=new A.hC(0,"staticDraw")
B.f=new A.eM(0,"ready")
B.M=new A.eM(1,"lost")
B.dA=new A.d_(0,"color")
B.b5=new A.d_(1,"colorAndGlow")
B.dB=new A.d_(2,"colorDepthGlow")
B.ak=new A.d_(3,"depthOnly")
B.dC=new A.c5(0,"beforeShadow")
B.dD=new A.c5(2,"beforeDepth")
B.b8=new A.c5(3,"afterDepth")
B.b9=new A.c5(4,"beforeWorld")
B.z=new A.c5(6,"afterResolve")
B.dE=new A.c5(9,"beforePresent")
B.ba=new A.bF(0,"readBeforeWrite")
B.dF=new A.bF(1,"duplicateWriter")
B.dG=new A.bF(2,"sampledMultisampledAttachment")
B.dH=new A.bF(4,"formatOrSizeMismatch")
B.dI=new A.bF(5,"unversionedReadWrite")
B.dJ=new A.bF(6,"invalidHistoryRead")
B.dK=new A.bF(7,"dependencyCycle")
B.dL=new A.bF(8,"missingCapability")
B.V=new A.ct(0,"player")
B.al=new A.ct(1,"inserted")
B.bb=new A.ct(2,"warden")
B.bc=new A.d1(0,"wrongKind")
B.bd=new A.d1(1,"staleGeneration")
B.dM=new A.d1(2,"doubleRelease")
B.am=new A.d1(3,"releasedResource")
B.dP=new A.hK(1,"visitor")
B.dT=new A.lj(null)
B.dU=new A.lk(null)
B.dV=new A.d6(0.03,0.03,0.04)
B.bg=s([0,2,2,3],t.t)
B.dW=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cm=new A.cq()
B.cn=new A.cq()
B.co=new A.cq()
B.cp=new A.cq()
B.cq=new A.cq()
B.dX=s([B.cm,B.cn,B.co,B.cp,B.cq],t.hS)
B.dY=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.r=s(["who","verb","object","place","time"],t.s)
B.dZ=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightRange","uLightInnerCos","uLightOuterCos","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity"],t.s)
B.e_=s([2,5,9,12,16,19],t.t)
B.e0=s(["uQuantizationBits","uDitherStrength"],t.s)
B.e1=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.e2=s([B.R,B.aU,B.aV,B.aW,B.L],A.at("p<aW>"))
B.e3=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.P=new A.bg(0,"full")
B.aK=new A.bg(1,"compressed")
B.aL=new A.bg(2,"off")
B.bh=s([B.P,B.aK,B.aL],A.at("p<bg>"))
B.e4=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.e5=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.e6=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fh=new A.b0(0,"long")
B.c4=new A.b0(1,"short")
B.bi=s([B.fh,B.c4],A.at("p<b0>"))
B.e7=s([2.1,4.2,6.3],t.n)
B.e8=s(["res/house/house.json","assets/house/house.json"],t.s)
B.x=new A.bs(0,"inactive")
B.aw=new A.bs(2,"affineWarp")
B.ax=new A.bs(3,"vertexSnap")
B.ay=new A.bs(4,"tapeGiveup")
B.az=new A.bs(5,"portalFail")
B.H=new A.bs(6,"lightsOut")
B.bj=s([B.x,B.O,B.aw,B.ax,B.ay,B.az,B.H],A.at("p<bs>"))
B.e9=s([B.V,B.al,B.bb],A.at("p<ct>"))
B.A=s([],t.hS)
B.ef=s([],t.cs)
B.an=s([],t.x)
B.eb=s([],t.bz)
B.eg=s([],t.u)
B.bk=s([],t.e_)
B.ea=s([],t.b2)
B.l=s([],t.s)
B.bl=s([],t.cF)
B.bm=s([],t.E)
B.ed=s([],t.t)
B.ee=s([],t.dG)
B.dO=new A.eO(15,"kitchen",-0.3,0)
B.dN=new A.eO(19,"spare-room",0,0.3)
B.B=s([B.dO,B.dN],A.at("p<eO>"))
B.fe=new A.aQ(0,"bed")
B.ff=new A.aQ(1,"chair")
B.fg=new A.aQ(2,"floor")
B.bn=s([B.fe,B.ff,B.fg],A.at("p<aQ>"))
B.bo=s([B.j,B.v,B.m,B.G],A.at("p<cs>"))
B.aA=new A.az(0,"depthTest")
B.aB=new A.az(1,"depthFunc")
B.aC=new A.az(2,"depthWrite")
B.aD=new A.az(3,"blendEnable")
B.aE=new A.az(4,"blendFunc")
B.aF=new A.az(5,"blendEquation")
B.aG=new A.az(6,"cullEnable")
B.aH=new A.az(7,"cullFace")
B.c7=new A.az(8,"frontFace")
B.fi=new A.az(9,"stencilEnable")
B.c5=new A.az(10,"colorMask")
B.c6=new A.az(11,"scissorEnable")
B.eh=s([B.aA,B.aB,B.aC,B.aD,B.aE,B.aF,B.aG,B.aH,B.c7,B.fi,B.c5,B.c6],A.at("p<az>"))
B.ei=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.ej=s(["uBloomStrength"],t.s)
B.ek=s(["uLutSize","uStrength"],t.s)
B.el=s([B.aX,B.aY,B.aZ],A.at("p<bq>"))
B.em=s(["uTexelSize","uNear","uFar"],t.s)
B.bp=s(["uTexelStep"],t.s)
B.en=s(["uninitialized"],t.s)
B.J=new A.bf(0,"waiting")
B.a3=new A.bf(1,"atDoor")
B.a4=new A.bf(2,"consulting")
B.a5=new A.bf(3,"resolved")
B.eo=s([B.J,B.a3,B.a4,B.a5],A.at("p<bf>"))
B.eP={uAlbedo:0}
B.bq=new A.a1(B.eP,[0],t.I)
B.eF={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.br=new A.a1(B.eF,[2,3,4,5,6],t.I)
B.eY={uAlbedo:0,uShadowMap:1,uSsao:2}
B.ep=new A.a1(B.eY,[0,1,2],t.I)
B.eW={uSsaoRaw:0,uSceneDepth:1}
B.eq=new A.a1(B.eW,[0,1],t.I)
B.eT={uScene:0,uHistory:1}
B.er=new A.a1(B.eT,[0,1],t.I)
B.eG={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.es=new A.a1(B.eG,["e81ac167594e3b48012c9911d2f429a8a4af04fd","1396a608ffa6f07922983470460c0f24793859da","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.B)
B.eM={aPosition:0,aUvMat:1}
B.bs=new A.a1(B.eM,[0,4],t.I)
B.eU={uScene:0,uLut:1}
B.et=new A.a1(B.eU,[0,1],t.I)
B.eV={uSource:0}
B.bt=new A.a1(B.eV,[0],t.I)
B.eK={uSharp:0,uBlurred:1,uSceneDepth:2}
B.eu=new A.a1(B.eK,[0,1,2],t.I)
B.eQ={uBloom:0}
B.ev=new A.a1(B.eQ,[0],t.I)
B.eR={uSceneDepth:0}
B.ew=new A.a1(B.eR,[0],t.I)
B.eS={uScene:0}
B.ex=new A.a1(B.eS,[0],t.I)
B.W={}
B.bu=new A.a1(B.W,[],t.B)
B.p=new A.a1(B.W,[],t.I)
B.ey=new A.a1(B.W,[],A.at("a1<@,@>"))
B.eL={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.bv=new A.a1(B.eL,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.B)
B.eN={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.ez=new A.a1(B.eN,[0,1,2,3],t.I)
B.eH={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.eA=new A.a1(B.eH,[0,1,2,3,4],t.I)
B.eX={uTex:0}
B.eB=new A.a1(B.eX,[0],t.I)
B.ap=new A.eK([B.O,1,B.aw,1.5,B.ax,1.5,B.ay,2,B.az,2,B.H,4],A.at("eK<bs,t>"))
B.eC=new A.cw("quarantine-house-exterior-shell",0.5,0.5,0.5,!0)
B.eD=new A.cw("quarantine-house-safe",0.58,0.58,0.58,!1)
B.eZ=new A.i6(0,1,null)
B.f_=new A.ia(1,0,0,0,8,0,0,0,0,0,0,!1)
B.aq=new A.db(0,"safe")
B.ar=new A.db(1,"standard")
B.as=new A.db(2,"high")
B.D=new A.c3(B.W,0,t.R)
B.X=new A.da(B.aq,B.D)
B.eO={shadows:0}
B.fc=new A.c3(B.eO,1,t.R)
B.f1=new A.da(B.ar,B.fc)
B.eI={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.f9=new A.c3(B.eI,5,t.R)
B.f2=new A.da(B.as,B.f9)
B.f0=new A.db(4,"shipping")
B.eJ={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.fa=new A.c3(B.eJ,7,t.R)
B.hj=new A.da(B.f0,B.fa)
B.Y=new A.f8(0,"legacy")
B.by=new A.dc(0,"constructed")
B.t=new A.dc(1,"ready")
B.a_=new A.dc(2,"lost")
B.bz=new A.dc(3,"disposed")
B.hg=new A.hh(1,"srgb")
B.hh=new A.hq(1,"errorsOnly")
B.f3=new A.ig(B.X,384,216,0)
B.at=new A.dd(0,"constructed")
B.f4=new A.dd(1,"initializing")
B.au=new A.dd(2,"ready")
B.bA=new A.dd(3,"contextLost")
B.h=new A.e3(0,"read")
B.i=new A.e3(1,"write")
B.C=new A.e3(2,"historyRead")
B.n=new A.fa(0,"rgba8")
B.bC=new A.aI("dofBlurH",B.n,192,108,1,0)
B.bD=new A.aI("dofBlurV",B.n,192,108,1,0)
B.bE=new A.aI("dofOutput",B.n,384,216,1,0)
B.bI=new A.aI("gradeOutput",B.n,384,216,1,0)
B.av=new A.aI("vhsOutput",B.n,384,216,1,0)
B.bJ=new A.aI("bloomBlurH",B.n,192,108,1,0)
B.bK=new A.aI("bloomBlurV",B.n,192,108,1,0)
B.N=new A.aI("sceneColor",B.n,384,216,1,0)
B.bL=new A.aI("ps1Output",B.n,384,216,1,0)
B.bH=new A.aI("ssaoBlurred",B.n,192,108,1,0)
B.bM=new A.K(B.bH,B.i)
B.bG=new A.aI("ssaoRaw",B.n,192,108,1,0)
B.bN=new A.K(B.bG,B.i)
B.a0=new A.K(B.N,B.i)
B.bO=new A.K(B.av,B.i)
B.bP=new A.K(B.av,B.C)
B.bQ=new A.K(B.bI,B.i)
B.bB=new A.fa(2,"depth24")
B.bF=new A.aI("shadowMap",B.bB,512,512,1,0)
B.bR=new A.K(B.bF,B.i)
B.bS=new A.K(B.bE,B.i)
B.bT=new A.K(B.bG,B.h)
B.bU=new A.K(B.N,B.h)
B.f5=new A.aI("sceneDepth",B.bB,384,216,1,0)
B.bV=new A.K(B.f5,B.i)
B.bW=new A.K(B.bF,B.h)
B.bX=new A.K(B.bL,B.i)
B.bY=new A.K(B.bD,B.h)
B.bZ=new A.K(B.bH,B.h)
B.c_=new A.K(B.bK,B.h)
B.f6=new A.de(null,"save storage unavailable")
B.f7=new A.de(null,"save could not be recovered")
B.f8=new A.de(null,null)
B.eE={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.fb=new A.c3(B.eE,9,t.R)
B.c2=new A.df(2,"link")
B.fd=new A.fd(B.c2,"gl.createProgram() returned null")
B.c0=new A.df(0,"vertex")
B.c1=new A.df(1,"fragment")
B.c3=new A.df(3,"validation")
B.fj=A.bB("xS")
B.fk=A.bB("xT")
B.fl=A.bB("kz")
B.fm=A.bB("u3")
B.fn=A.bB("ua")
B.fo=A.bB("ub")
B.fp=A.bB("uc")
B.fq=A.bB("T")
B.fr=A.bB("D")
B.fs=A.bB("p0")
B.ft=A.bB("uU")
B.fu=A.bB("uV")
B.fv=A.bB("iw")
B.e=new A.cC(0,"float1")
B.c8=new A.cC(1,"float2")
B.E=new A.cC(2,"float3")
B.o=new A.cC(3,"mat4")
B.aI=new A.cC(4,"sampler")
B.F=new A.B(B.aI,0)
B.a1=new A.B(B.aI,1)
B.c9=new A.B(B.aI,2)
B.fw=new A.mK(!1)
B.fx=new A.z(0,0,1)
B.fy=new A.z(1,0,0)
B.fz=new A.z(1/0,1/0,1/0)
B.fA=new A.z(-1/0,-1/0,-1/0)
B.fN=new A.cE(0,"visitorAnswered")
B.ca=new A.cE(1,"visitorIgnored")
B.fO=new A.cE(2,"entryVerified")
B.fP=new A.cE(3,"entryContradicted")
B.fQ=new A.cE(4,"exposureAccepted")
B.fS=new A.bY(1,"malformedDay")
B.fT=new A.bY(2,"malformedTier")
B.cb=new A.bY(3,"missingTierLines")
B.aM=new A.bY(6,"invalidPhase")
B.fZ=new A.bh(B.aM,"The active visit cannot be chosen.")
B.h1=new A.b2(B.fZ)
B.fW=new A.bh(B.aM,"The active visit has no line to advance.")
B.h2=new A.b2(B.fW)
B.fV=new A.bY(5,"noActiveVisit")
B.fX=new A.bh(B.fV,"There is no active visit.")
B.cc=new A.b2(B.fX)
B.fY=new A.bh(B.aM,"A visit is already active.")
B.h3=new A.b2(B.fY)
B.fU=new A.bY(4,"noArrival")
B.h0=new A.bh(B.fU,"The authored arrival is missing.")
B.h4=new A.b2(B.h0)
B.fR=new A.bY(0,"missingCorpus")
B.h_=new A.bh(B.fR,"The authored visitor corpus is empty.")
B.h5=new A.b2(B.h_)
B.cd=new A.dn(1,"exact")
B.aN=new A.dn(2,"partial")
B.a6=new A.dn(3,"contradiction")
B.h6=new A.dn(0,"skipped")
B.h7=new A.dm(B.h6,B.D)
B.h8=new A.dm(B.aN,B.D)
B.ce=new A.fo(0,"horizontal")
B.h9=new A.fo(1,"vertical")
B.cf=new A.fq(0,"horizontal")
B.ha=new A.fq(1,"vertical")
B.a7=new A.ei(0,"empty")
B.hb=new A.ei(1,"cpuReady")
B.a8=new A.ei(4,"released")})();(function staticFields(){$.nh=null
$.bm=A.d([],A.at("p<D>"))
$.qj=null
$.lQ=0
$.lR=A.wC()
$.pS=null
$.pR=null
$.rQ=null
$.rK=null
$.rU=null
$.og=null
$.on=null
$.pG=null
$.no=A.d([],A.at("p<C<D>?>"))
$.er=null
$.fX=null
$.fY=null
$.pp=!1
$.a4=B.q
$.qy=""
$.qz=null
$.qu=null
$.lG=null
$.bx=A.a9()
$.cl=A.a9()
$.cn=null
$.jw=null
$.N=A.a9()
$.by=A.a9()
$.bk=A.a9()
$.r7=A.a9()
$.es=null
$.aa=A.a9()
$.nH=null
$.dx=A.a9()
$.Y=A.a9()
$.pf=A.a9()
$.pl=null
$.fV=null
$.pg=!1
$.pt=!1
$.pr=!1
$.rn=!1
$.pq=0
$.rt=0
$.nA=0
$.rJ=!1
$.re="booting"
$.c0=0
$.dy=0
$.aS="hall"
$.fT=A.a9()
$.em=A.a9()
$.b4=A.a9()
$.rs=null
$.pu=0
$.b5=null
$.en=A.a9()
$.js=A.a9()
$.r8=A.a9()
$.r6=A.a9()
$.aA=A.a9()
$.jt=A.a9()
$.jr=A.a9()
$.pe=A.a9()
$.aB=A.a9()
$.jq=A.a9()
$.pd=A.a9()
$.o9=A.a8(t.S)
$.cM=A.d([],t.s)
$.pk=null
$.rE=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"xV","t2",()=>A.rP("_$dart_dartClosure"))
s($,"xU","ey",()=>A.rP("_$dart_dartClosure_dartJSInterop"))
s($,"yj","tk",()=>A.d([new J.hN()],A.at("p<fc>")))
s($,"y1","t4",()=>A.ch(A.mF({
toString:function(){return"$receiver$"}})))
s($,"y2","t5",()=>A.ch(A.mF({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"y3","t6",()=>A.ch(A.mF(null)))
s($,"y4","t7",()=>A.ch(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"y7","ta",()=>A.ch(A.mF(void 0)))
s($,"y8","tb",()=>A.ch(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"y6","t9",()=>A.ch(A.qv(null)))
s($,"y5","t8",()=>A.ch(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"ya","td",()=>A.ch(A.qv(void 0)))
s($,"y9","tc",()=>A.ch(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"yb","pL",()=>A.vb())
s($,"yf","th",()=>A.up(4096))
s($,"yd","tf",()=>new A.ny().$0())
s($,"ye","tg",()=>new A.nx().$0())
s($,"yc","te",()=>new Int8Array(A.a0(A.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"yh","jG",()=>A.jF(B.fr))
s($,"y_","pK",()=>{A.uD()
return $.lQ})
s($,"xR","oK",()=>new A.aI("sceneColor",B.n,384,216,1,1))
s($,"xW","t3",()=>A.uq(A.a0(A.d([255,255,255,255],t.t))))
s($,"yk","tl",()=>A.iD(0,1,0))
s($,"yn","jJ",()=>{var q=$.qu
if(q==null){A.jC()
A.jC()
A.jC()
A.jC()
A.jC()
q=$.qu=new A.mx()}return q})
s($,"yg","ti",()=>new A.k3())
r($,"pz","ez",()=>A.iD(0,0,0))
r($,"ps","tj",()=>A.iD(0,0,0))
r($,"pB","jI",()=>A.iD(0,0,0))
s($,"yi","jH",()=>new A.kA(A.iD(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cx,ArrayBuffer:A.e0,ArrayBufferView:A.eZ,DataView:A.hZ,Float32Array:A.eW,Float64Array:A.i_,Int16Array:A.i0,Int32Array:A.i1,Int8Array:A.i2,Uint16Array:A.i3,Uint32Array:A.i4,Uint8ClampedArray:A.f_,CanvasPixelArray:A.f_,Uint8Array:A.f0})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ax.$nativeSuperclassTag="ArrayBufferView"
A.fy.$nativeSuperclassTag="ArrayBufferView"
A.fz.$nativeSuperclassTag="ArrayBufferView"
A.eX.$nativeSuperclassTag="ArrayBufferView"
A.fA.$nativeSuperclassTag="ArrayBufferView"
A.fB.$nativeSuperclassTag="ArrayBufferView"
A.eY.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.oo
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()