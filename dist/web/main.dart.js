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
if(a[b]!==s){A.DM(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.v7(b)
return new s(c,this)}:function(){if(s===null)s=A.v7(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.v7(a).prototype
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
vc(a,b,c,d){return{i:a,p:b,e:c,x:d}},
tl(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.va==null){A.Dp()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.wd("Return interceptor for "+A.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.qL
if(o==null)o=$.qL=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Dv(a)
if(p!=null)return p
if(typeof a=="function")return B.fH
s=Object.getPrototypeOf(a)
if(s==null)return B.cF
if(s===Object.prototype)return B.cF
if(typeof q=="function"){o=$.qL
if(o==null)o=$.qL=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bf,enumerable:false,writable:true,configurable:true})
return B.bf}return B.bf},
vK(a,b){if(a<0||a>4294967295)throw A.d(A.aL(a,0,4294967295,"length",null))
return J.vM(new Array(a),b)},
vL(a,b){if(a<0)throw A.d(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("q<0>"))},
jk(a,b){if(a<0)throw A.d(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("q<0>"))},
vM(a,b){var s=A.e(a,b.i("q<0>"))
s.$flags=1
return s},
zA(a,b){var s=t.bP
return J.vn(s.a(a),s.a(b))},
vP(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
zB(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.vP(r))break;++b}return b},
zC(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.vP(q))break}return b},
dQ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fY.prototype
return J.jm.prototype}if(typeof a=="string")return J.du.prototype
if(a==null)return J.fZ.prototype
if(typeof a=="boolean")return J.jl.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
if(typeof a=="symbol")return J.f0.prototype
if(typeof a=="bigint")return J.f_.prototype
return a}if(a instanceof A.C)return a
return J.tl(a)},
aB(a){if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
if(typeof a=="symbol")return J.f0.prototype
if(typeof a=="bigint")return J.f_.prototype
return a}if(a instanceof A.C)return a
return J.tl(a)},
c0(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
if(typeof a=="symbol")return J.f0.prototype
if(typeof a=="bigint")return J.f_.prototype
return a}if(a instanceof A.C)return a
return J.tl(a)},
Dk(a){if(typeof a=="number")return J.e7.prototype
if(a==null)return a
if(!(a instanceof A.C))return J.dC.prototype
return a},
xL(a){if(typeof a=="number")return J.e7.prototype
if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(!(a instanceof A.C))return J.dC.prototype
return a},
Dl(a){if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(!(a instanceof A.C))return J.dC.prototype
return a},
Dm(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
if(typeof a=="symbol")return J.f0.prototype
if(typeof a=="bigint")return J.f_.prototype
return a}if(a instanceof A.C)return a
return J.tl(a)},
vm(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.xL(a).a4(a,b)},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dQ(a).W(a,b)},
b9(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Du(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aB(a).h(a,b)},
bI(a,b,c){return J.c0(a).k(a,b,c)},
ip(a,b){return J.c0(a).l(a,b)},
u_(a,b){return J.c0(a).M(a,b)},
yt(a,b,c){return J.Dm(a).h0(a,b,c)},
yu(a,b){return J.c0(a).cr(a,b)},
vn(a,b){return J.xL(a).H(a,b)},
vo(a,b){return J.aB(a).u(a,b)},
lv(a,b){return J.c0(a).X(a,b)},
yv(a,b){return J.c0(a).a6(a,b)},
vp(a){return J.c0(a).gP(a)},
ar(a){return J.dQ(a).gI(a)},
u0(a){return J.aB(a).gJ(a)},
yw(a){return J.aB(a).gU(a)},
S(a){return J.c0(a).gt(a)},
bJ(a){return J.aB(a).gq(a)},
eF(a){return J.dQ(a).gY(a)},
yx(a,b){return J.c0(a).aw(a,b)},
eG(a,b,c){return J.c0(a).c3(a,b,c)},
yy(a,b){return J.aB(a).sq(a,b)},
yz(a,b){return J.c0(a).a1(a,b)},
yA(a,b){return J.Dl(a).bn(a,b)},
u1(a,b){return J.Dk(a).o_(a,b)},
cT(a){return J.dQ(a).p(a)},
yB(a,b){return J.c0(a).eE(a,b)},
ji:function ji(){},
jl:function jl(){},
fZ:function fZ(){},
h_:function h_(){},
dv:function dv(){},
jI:function jI(){},
dC:function dC(){},
d1:function d1(){},
f_:function f_(){},
f0:function f0(){},
q:function q(a){this.$ti=a},
jj:function jj(){},
nX:function nX(a){this.$ti=a},
dS:function dS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e7:function e7(){},
fY:function fY(){},
jm:function jm(){},
du:function du(){}},A={u5:function u5(){},
lo(){return $},
yO(a,b,c){if(t.gt.b(a))return new A.hF(a,b.i("@<0>").F(c).i("hF<1,2>"))
return new A.dV(a,b.i("@<0>").F(c).i("dV<1,2>"))},
vS(a){return new A.e8("Field '"+a+"' has been assigned during initialization.")},
ab(a){return new A.e8("Field '"+a+"' has not been initialized.")},
zF(a){return new A.e8("Field '"+a+"' has already been initialized.")},
tm(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aF(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hr(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dP(a,b,c){return a},
vb(a){var s,r
for(s=$.c_.length,r=0;r<s;++r)if(a===$.c_[r])return!0
return!1},
hq(a,b,c,d){A.jS(b,"start")
if(c!=null){A.jS(c,"end")
if(b>c)A.j(A.aL(b,0,c,"start",null))}return new A.hp(a,b,c,d.i("hp<0>"))},
oh(a,b,c,d){if(t.gt.b(a))return new A.dZ(a,b,c.i("@<0>").F(d).i("dZ<1,2>"))
return new A.cg(a,b,c.i("@<0>").F(d).i("cg<1,2>"))},
cw(){return new A.f9("No element")},
vJ(){return new A.f9("Too many elements")},
k_(a,b,c,d,e){if(c-b<=32)A.Ac(a,b,c,d,e)
else A.Ab(a,b,c,d,e)},
Ac(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aB(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ai()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
Ab(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.R(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.R(a4+a5,2),f=g-j,e=g+j,d=J.aB(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ai()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a3(a6.$2(b,a0),0)
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
A.k_(a3,a4,r-2,a6,a7)
A.k_(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a3(a6.$2(d.h(a3,r),b),0))++r
while(J.a3(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.k_(a3,r,q,a6,a7)}else A.k_(a3,r,q,a6,a7)},
dF:function dF(){},
fI:function fI(a,b){this.a=a
this.$ti=b},
dV:function dV(a,b){this.a=a
this.$ti=b},
hF:function hF(a,b){this.a=a
this.$ti=b},
hD:function hD(){},
qu:function qu(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.$ti=b},
e8:function e8(a){this.a=a},
dW:function dW(a){this.a=a},
pj:function pj(){},
M:function M(){},
a1:function a1(){},
hp:function hp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aU:function aU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ea:function ea(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fO:function fO(a){this.$ti=a},
cj:function cj(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b){this.a=a
this.$ti=b},
am:function am(){},
cH:function cH(){},
fb:function fb(){},
hi:function hi(a,b){this.a=a
this.$ti=b},
i6:function i6(){},
bt(a,b,c){var s,r,q,p,o,n,m,l=A.az(a.gV(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.t)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.az(a.gaq(),!0,c)
m=new A.a4(q,n,b.i("@<0>").F(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.fK(A.aT(a,b,c),b.i("@<0>").F(c).i("fK<1,2>"))},
yU(){throw A.d(A.aN("Cannot modify unmodifiable Map"))},
yV(){throw A.d(A.aN("Cannot modify constant Set"))},
y3(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Du(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
u(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cT(a)
return s},
hc(a){var s,r=$.vZ
if(r==null)r=$.vZ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jP(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
jO(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bI(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
jN(a){var s,r,q,p
if(a instanceof A.C)return A.bp(A.bH(a),null)
s=J.dQ(a)
if(s===B.fG||s===B.fI||t.cx.b(a)){r=B.bw(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bp(A.bH(a),null)},
w_(a){var s,r,q
if(a==null||typeof a=="number"||A.bY(a))return J.cT(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dl)return a.p(0)
if(a instanceof A.bV)return a.fU(!0)
s=$.yq()
for(r=0;r<1;++r){q=s[r].o0(a)
if(q!=null)return q}return"Instance of '"+A.jN(a)+"'"},
zQ(){return Date.now()},
zZ(){var s,r
if($.oM!==0)return
$.oM=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.oM=1e6
$.oN=new A.oL(r)},
zP(){if(!!self.location)return self.location.href
return null},
A_(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ap(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.dt(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aL(a,0,1114111,null,null))},
f4(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
zY(a){var s=A.f4(a).getUTCFullYear()+0
return s},
zW(a){var s=A.f4(a).getUTCMonth()+1
return s},
zS(a){var s=A.f4(a).getUTCDate()+0
return s},
zT(a){var s=A.f4(a).getUTCHours()+0
return s},
zV(a){var s=A.f4(a).getUTCMinutes()+0
return s},
zX(a){var s=A.f4(a).getUTCSeconds()+0
return s},
zU(a){var s=A.f4(a).getUTCMilliseconds()+0
return s},
zR(a){var s=a.$thrownJsError
if(s==null)return null
return A.cl(s)},
w0(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.au(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
lq(a){throw A.d(A.v6(a))},
f(a,b){if(a==null)J.bJ(a)
throw A.d(A.ti(a,b))},
ti(a,b){var s,r="index"
if(!A.aO(b))return new A.cc(!0,b,r,null)
s=A.a(J.bJ(a))
if(b<0||b>=s)return A.nP(b,s,a,r)
return A.w2(b,r)},
De(a,b,c){if(a>c)return A.aL(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aL(b,a,c,"end",null)
return new A.cc(!0,b,"end",null)},
v6(a){return new A.cc(!0,a,null,null)},
d(a){return A.au(a,new Error())},
au(a,b){var s
if(a==null)a=new A.d8()
b.dartException=a
s=A.DP
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
DP(){return J.cT(this.dartException)},
j(a,b){throw A.au(a,b==null?new Error():b)},
br(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.j(A.BJ(a,b,c),s)},
BJ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.hu("'"+s+"': Cannot "+o+" "+l+k+n)},
t(a){throw A.d(A.at(a))},
d9(a){var s,r,q,p,o,n
a=A.xW(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.q5(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
q6(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
wc(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
u6(a,b){var s=b==null,r=s?null:b.method
return new A.jo(a,r,s?null:b.receiver)},
ah(a){var s
if(a==null)return new A.os(a)
if(a instanceof A.fP){s=a.a
return A.dR(a,s==null?A.fq(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.dR(a,a.dartException)
return A.CM(a)},
dR(a,b){if(t.W.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
CM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.dt(r,16)&8191)===10)switch(q){case 438:return A.dR(a,A.u6(A.u(s)+" (Error "+q+")",null))
case 445:case 5007:A.u(s)
return A.dR(a,new A.h8())}}if(a instanceof TypeError){p=$.y7()
o=$.y8()
n=$.y9()
m=$.ya()
l=$.yd()
k=$.ye()
j=$.yc()
$.yb()
i=$.yg()
h=$.yf()
g=p.aM(s)
if(g!=null)return A.dR(a,A.u6(A.A(s),g))
else{g=o.aM(s)
if(g!=null){g.method="call"
return A.dR(a,A.u6(A.A(s),g))}else if(n.aM(s)!=null||m.aM(s)!=null||l.aM(s)!=null||k.aM(s)!=null||j.aM(s)!=null||m.aM(s)!=null||i.aM(s)!=null||h.aM(s)!=null){A.A(s)
return A.dR(a,new A.h8())}}return A.dR(a,new A.k9(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hn()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.dR(a,new A.cc(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hn()
return a},
cl(a){var s
if(a instanceof A.fP)return a.b
if(a==null)return new A.hV(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.hV(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
lr(a){if(a==null)return J.ar(a)
if(typeof a=="object")return A.hc(a)
return J.ar(a)},
D8(a){if(typeof a=="number")return B.d.gI(a)
if(a instanceof A.l4)return A.hc(a)
if(a instanceof A.bV)return a.gI(a)
return A.lr(a)},
xJ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Dj(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
C4(a,b,c,d,e,f){t.gY.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.eW("Unsupported number of arguments for wrapped closure"))},
fB(a,b){var s=a.$identity
if(!!s)return s
s=A.D9(a,b)
a.$identity=s
return s},
D9(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.C4)},
yT(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.k2().constructor.prototype):Object.create(new A.eM(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.vv(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.yP(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.vv(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
yP(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.yL)}throw A.d("Error in functionType of tearoff")},
yQ(a,b,c,d){var s=A.vu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
vv(a,b,c,d){if(c)return A.yS(a,b,d)
return A.yQ(b.length,d,a,b)},
yR(a,b,c,d){var s=A.vu,r=A.yM
switch(b?-1:a){case 0:throw A.d(new A.jW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
yS(a,b,c){var s,r
if($.vs==null)$.vs=A.vr("interceptor")
if($.vt==null)$.vt=A.vr("receiver")
s=b.length
r=A.yR(s,c,a,b)
return r},
v7(a){return A.yT(a)},
yL(a,b){return A.hZ(v.typeUniverse,A.bH(a.a),b)},
vu(a){return a.a},
yM(a){return a.b},
vr(a){var s,r,q,p=new A.eM("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.w("Field name "+a+" not found.",null))},
xM(a){return v.getIsolateTag(a)},
y_(){return v.G},
Ew(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Dv(a){var s,r,q,p,o,n=A.A($.xN.$1(a)),m=$.tj[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.tq[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aJ($.xG.$2(a,n))
if(q!=null){m=$.tj[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.tq[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.tP(s)
$.tj[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.tq[n]=s
return s}if(p==="-"){o=A.tP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.xU(a,s)
if(p==="*")throw A.d(A.wd(n))
if(v.leafTags[n]===true){o=A.tP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.xU(a,s)},
xU(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.vc(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
tP(a){return J.vc(a,!1,null,!!a.$ibN)},
Dz(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.tP(s)
else return J.vc(s,c,null,null)},
Dp(){if(!0===$.va)return
$.va=!0
A.Dq()},
Dq(){var s,r,q,p,o,n,m,l
$.tj=Object.create(null)
$.tq=Object.create(null)
A.Do()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.xV.$1(o)
if(n!=null){m=A.Dz(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Do(){var s,r,q,p,o,n,m=B.dy()
m=A.fA(B.dz,A.fA(B.dA,A.fA(B.bx,A.fA(B.bx,A.fA(B.dB,A.fA(B.dC,A.fA(B.dD(B.bw),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.xN=new A.tn(p)
$.xG=new A.to(o)
$.xV=new A.tp(n)},
fA(a,b){return a(b)||b},
AR(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a3(r,b[s]))return!1}return!0},
Db(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
zD(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a5("Illegal RegExp pattern ("+String(o)+")",a,null))},
DJ(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Dh(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
xW(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
DK(a,b,c){var s=A.DL(a,b,c)
return s},
DL(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.xW(b),"g"),A.Dh(c))},
ax:function ax(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a){this.a=a},
fK:function fK(a,b){this.a=a
this.$ti=b},
eQ:function eQ(){},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
et:function et(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cr:function cr(a,b){this.a=a
this.$ti=b},
fL:function fL(){},
bb:function bb(a,b,c){this.a=a
this.b=b
this.$ti=c},
oL:function oL(a){this.a=a},
hj:function hj(){},
q5:function q5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h8:function h8(){},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a){this.a=a},
os:function os(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a
this.b=null},
dl:function dl(){},
iF:function iF(){},
iG:function iG(){},
k5:function k5(){},
k2:function k2(){},
eM:function eM(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
c3:function c3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
o5:function o5(a){this.a=a},
od:function od(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aS:function aS(a,b){this.a=a
this.$ti=b},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
O:function O(a,b){this.a=a
this.$ti=b},
e9:function e9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h0:function h0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tn:function tn(a){this.a=a},
to:function to(a){this.a=a},
tp:function tp(a){this.a=a},
bV:function bV(){},
ex:function ex(){},
ff:function ff(){},
fg:function fg(){},
jn:function jn(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
DM(a){throw A.au(A.vS(a),new Error())},
h(){throw A.au(A.ab(""),new Error())},
G(){throw A.au(A.zF(""),new Error())},
y2(){throw A.au(A.vS(""),new Error())},
a9(){var s=new A.qv()
return s.b=s},
qv:function qv(){this.b=null},
x1(a,b,c){},
Z(a){return a},
zK(a,b,c){A.x1(a,b,c)
return new Float32Array(a,b,c)},
zL(a){return new Int8Array(a)},
zM(a){return new Uint8Array(a)},
jF(a){return new Uint8Array(A.Z(a))},
dg(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ti(b,a))},
Bz(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.De(a,b,c))
return b},
dw:function dw(){},
f3:function f3(){},
h6:function h6(){},
qZ:function qZ(a){this.a=a},
jy:function jy(){},
aV:function aV(){},
h4:function h4(){},
h5:function h5(){},
h3:function h3(){},
jz:function jz(){},
jA:function jA(){},
jB:function jB(){},
jC:function jC(){},
jD:function jD(){},
jE:function jE(){},
ed:function ed(){},
h7:function h7(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
ui(a,b){var s=b.c
return s==null?b.c=A.hX(a,"bM",[b.x]):s},
w4(a){var s=a.w
if(s===6||s===7)return A.w4(a.x)
return s===11||s===12},
A6(a){return a.as},
DA(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a_(a){return A.qY(v.typeUniverse,a,!1)},
eC(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eC(a1,s,a3,a4)
if(r===s)return a2
return A.wB(a1,r,!0)
case 7:s=a2.x
r=A.eC(a1,s,a3,a4)
if(r===s)return a2
return A.wA(a1,r,!0)
case 8:q=a2.y
p=A.fz(a1,q,a3,a4)
if(p===q)return a2
return A.hX(a1,a2.x,p)
case 9:o=a2.x
n=A.eC(a1,o,a3,a4)
m=a2.y
l=A.fz(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.uu(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fz(a1,j,a3,a4)
if(i===j)return a2
return A.wC(a1,k,i)
case 11:h=a2.x
g=A.eC(a1,h,a3,a4)
f=a2.y
e=A.CI(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.wz(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fz(a1,d,a3,a4)
o=a2.x
n=A.eC(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.uv(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.iu("Attempted to substitute unexpected RTI kind "+a0))}},
fz(a,b,c,d){var s,r,q,p,o=b.length,n=A.r2(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eC(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
CJ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.r2(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eC(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
CI(a,b,c,d){var s,r=b.a,q=A.fz(a,r,c,d),p=b.b,o=A.fz(a,p,c,d),n=b.c,m=A.CJ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.kC()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
v8(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Dn(s)
return a.$S()}return null},
Dr(a,b){var s
if(A.w4(b))if(a instanceof A.dl){s=A.v8(a)
if(s!=null)return s}return A.bH(a)},
bH(a){if(a instanceof A.C)return A.p(a)
if(Array.isArray(a))return A.K(a)
return A.uM(J.dQ(a))},
K(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
p(a){var s=a.$ti
return s!=null?s:A.uM(a)},
uM(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.C1(a,s)},
C1(a,b){var s=a instanceof A.dl?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.B0(v.typeUniverse,s.name)
b.$ccache=r
return r},
Dn(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.qY(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
lp(a){return A.cP(A.p(a))},
v2(a){var s
if(a instanceof A.bV)return a.fj()
s=a instanceof A.dl?A.v8(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.eF(a).a
if(Array.isArray(a))return A.K(a)
return A.bH(a)},
cP(a){var s=a.r
return s==null?a.r=new A.l4(a):s},
Di(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.f(q,0)
s=A.hZ(v.typeUniverse,A.v2(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.wD(v.typeUniverse,s,A.v2(q[r]))}return A.hZ(v.typeUniverse,s,a)},
ca(a){return A.cP(A.qY(v.typeUniverse,a,!1))},
C0(a){var s=this
s.b=A.CE(s)
return s.b(a)},
CE(a){var s,r,q,p,o
if(a===t.K)return A.Ca
if(A.eD(a))return A.Ce
s=a.w
if(s===6)return A.BW
if(s===1)return A.xd
if(s===7)return A.C5
r=A.CD(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eD)){a.f="$i"+q
if(q==="E")return A.C8
if(a===t.m)return A.C7
return A.Cd}}else if(s===10){p=A.Db(a.x,a.y)
o=p==null?A.xd:p
return o==null?A.fq(o):o}return A.BU},
CD(a){if(a.w===8){if(a===t.S)return A.aO
if(a===t.i||a===t.o)return A.C9
if(a===t.N)return A.Cc
if(a===t.y)return A.bY}return null},
C_(a){var s=this,r=A.BT
if(A.eD(s))r=A.Bu
else if(s===t.K)r=A.fq
else if(A.fC(s)){r=A.BV
if(s===t.aV)r=A.wX
else if(s===t.x)r=A.aJ
else if(s===t.fU)r=A.Bt
else if(s===t.jh)r=A.uB
else if(s===t.dE)r=A.wW
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.A
else if(s===t.y)r=A.U
else if(s===t.o)r=A.aI
else if(s===t.i)r=A.bX
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
BU(a){var s=this
if(a==null)return A.fC(s)
return A.xR(v.typeUniverse,A.Dr(a,s),s)},
BW(a){if(a==null)return!0
return this.x.b(a)},
Cd(a){var s,r=this
if(a==null)return A.fC(r)
s=r.f
if(a instanceof A.C)return!!a[s]
return!!J.dQ(a)[s]},
C8(a){var s,r=this
if(a==null)return A.fC(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.C)return!!a[s]
return!!J.dQ(a)[s]},
C7(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.C)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
xc(a){if(typeof a=="object"){if(a instanceof A.C)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
BT(a){var s=this
if(a==null){if(A.fC(s))return a}else if(s.b(a))return a
throw A.au(A.x2(a,s),new Error())},
BV(a){var s=this
if(a==null||s.b(a))return a
throw A.au(A.x2(a,s),new Error())},
x2(a,b){return new A.fj("TypeError: "+A.wr(a,A.bp(b,null)))},
D6(a,b,c,d){if(A.xR(v.typeUniverse,a,b))return a
throw A.au(A.AT("The type argument '"+A.bp(a,null)+"' is not a subtype of the type variable bound '"+A.bp(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
wr(a,b){return A.iX(a)+": type '"+A.bp(A.v2(a),null)+"' is not a subtype of type '"+b+"'"},
AT(a){return new A.fj("TypeError: "+a)},
c9(a,b){return new A.fj("TypeError: "+A.wr(a,b))},
C5(a){var s=this
return s.x.b(a)||A.ui(v.typeUniverse,s).b(a)},
Ca(a){return a!=null},
fq(a){if(a!=null)return a
throw A.au(A.c9(a,"Object"),new Error())},
Ce(a){return!0},
Bu(a){return a},
xd(a){return!1},
bY(a){return!0===a||!1===a},
U(a){if(!0===a)return!0
if(!1===a)return!1
throw A.au(A.c9(a,"bool"),new Error())},
Bt(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.au(A.c9(a,"bool?"),new Error())},
bX(a){if(typeof a=="number")return a
throw A.au(A.c9(a,"double"),new Error())},
wW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.au(A.c9(a,"double?"),new Error())},
aO(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.au(A.c9(a,"int"),new Error())},
wX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.au(A.c9(a,"int?"),new Error())},
C9(a){return typeof a=="number"},
aI(a){if(typeof a=="number")return a
throw A.au(A.c9(a,"num"),new Error())},
uB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.au(A.c9(a,"num?"),new Error())},
Cc(a){return typeof a=="string"},
A(a){if(typeof a=="string")return a
throw A.au(A.c9(a,"String"),new Error())},
aJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.au(A.c9(a,"String?"),new Error())},
b(a){if(A.xc(a))return a
throw A.au(A.c9(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.xc(a))return a
throw A.au(A.c9(a,"JSObject?"),new Error())},
xx(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bp(a[q],b)
return s},
Cu(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.xx(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bp(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
x5(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.f(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bp(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bp(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bp(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bp(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bp(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bp(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bp(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bp(a.x,b)+">"
if(l===8){p=A.CL(a.x)
o=a.y
return o.length>0?p+("<"+A.xx(o,b)+">"):p}if(l===10)return A.Cu(a,b)
if(l===11)return A.x5(a,b,null)
if(l===12)return A.x5(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
CL(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
B1(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
B0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.qY(a,b,!1)
else if(typeof m=="number"){s=m
r=A.hY(a,5,"#")
q=A.r2(s)
for(p=0;p<s;++p)q[p]=r
o=A.hX(a,b,q)
n[b]=o
return o}else return m},
B_(a,b){return A.wL(a.tR,b)},
AZ(a,b){return A.wL(a.eT,b)},
qY(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ww(A.wu(a,null,b,!1))
r.set(b,s)
return s},
hZ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ww(A.wu(a,b,c,!0))
q.set(c,r)
return r},
wD(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.uu(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
dJ(a,b){b.a=A.C_
b.b=A.C0
return b},
hY(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ci(null,null)
s.w=b
s.as=c
r=A.dJ(a,s)
a.eC.set(c,r)
return r},
wB(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.AX(a,b,r,c)
a.eC.set(r,s)
return s},
AX(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eD(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.fC(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.ci(null,null)
q.w=6
q.x=b
q.as=c
return A.dJ(a,q)},
wA(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.AV(a,b,r,c)
a.eC.set(r,s)
return s},
AV(a,b,c,d){var s,r
if(d){s=b.w
if(A.eD(b)||b===t.K)return b
else if(s===1)return A.hX(a,"bM",[b])
else if(b===t.c||b===t.w)return t.gK}r=new A.ci(null,null)
r.w=7
r.x=b
r.as=c
return A.dJ(a,r)},
AY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ci(null,null)
s.w=13
s.x=b
s.as=q
r=A.dJ(a,s)
a.eC.set(q,r)
return r},
hW(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
AU(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
hX(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.hW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ci(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dJ(a,r)
a.eC.set(p,q)
return q},
uu(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.hW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ci(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dJ(a,o)
a.eC.set(q,n)
return n},
wC(a,b,c){var s,r,q="+"+(b+"("+A.hW(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ci(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dJ(a,s)
a.eC.set(q,r)
return r},
wz(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.hW(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.hW(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.AU(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ci(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dJ(a,p)
a.eC.set(r,o)
return o},
uv(a,b,c,d){var s,r=b.as+("<"+A.hW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.AW(a,b,c,r,d)
a.eC.set(r,s)
return s},
AW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.r2(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eC(a,b,r,0)
m=A.fz(a,c,r,0)
return A.uv(a,n,m,c!==m)}}l=new A.ci(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dJ(a,l)},
wu(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ww(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.AM(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.wv(a,r,l,k,!1)
else if(q===46)r=A.wv(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ew(a.u,a.e,k.pop()))
break
case 94:k.push(A.AY(a.u,k.pop()))
break
case 35:k.push(A.hY(a.u,5,"#"))
break
case 64:k.push(A.hY(a.u,2,"@"))
break
case 126:k.push(A.hY(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.AO(a,k)
break
case 38:A.AN(a,k)
break
case 63:p=a.u
k.push(A.wB(p,A.ew(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.wA(p,A.ew(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.AL(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.wx(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.AQ(a.u,a.e,o)
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
return A.ew(a.u,a.e,m)},
AM(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
wv(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.B1(s,o.x)[p]
if(n==null)A.j('No "'+p+'" in "'+A.A6(o)+'"')
d.push(A.hZ(s,o,n))}else d.push(p)
return m},
AO(a,b){var s,r=a.u,q=A.wt(a,b),p=b.pop()
if(typeof p=="string")b.push(A.hX(r,p,q))
else{s=A.ew(r,a.e,p)
switch(s.w){case 11:b.push(A.uv(r,s,q,a.n))
break
default:b.push(A.uu(r,s,q))
break}}},
AL(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.wt(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ew(p,a.e,o)
q=new A.kC()
q.a=s
q.b=n
q.c=m
b.push(A.wz(p,r,q))
return
case-4:b.push(A.wC(p,b.pop(),s))
return
default:throw A.d(A.iu("Unexpected state under `()`: "+A.u(o)))}},
AN(a,b){var s=b.pop()
if(0===s){b.push(A.hY(a.u,1,"0&"))
return}if(1===s){b.push(A.hY(a.u,4,"1&"))
return}throw A.d(A.iu("Unexpected extended operation "+A.u(s)))},
wt(a,b){var s=b.splice(a.p)
A.wx(a.u,a.e,s)
a.p=b.pop()
return s},
ew(a,b,c){if(typeof c=="string")return A.hX(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.AP(a,b,c)}else return c},
wx(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ew(a,b,c[s])},
AQ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ew(a,b,c[s])},
AP(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.iu("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.iu("Bad index "+c+" for "+b.p(0)))},
xR(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aG(a,b,null,c,null)
r.set(c,s)}return s},
aG(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eD(d))return!0
s=b.w
if(s===4)return!0
if(A.eD(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aG(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aG(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aG(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aG(a,b.x,c,d,e))return!1
return A.aG(a,A.ui(a,b),c,d,e)}if(s===6)return A.aG(a,p,c,d,e)&&A.aG(a,b.x,c,d,e)
if(q===7){if(A.aG(a,b,c,d.x,e))return!0
return A.aG(a,b,c,A.ui(a,d),e)}if(q===6)return A.aG(a,b,c,p,e)||A.aG(a,b,c,d.x,e)
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
if(!A.aG(a,j,c,i,e)||!A.aG(a,i,e,j,c))return!1}return A.xb(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.xb(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.C6(a,b,c,d,e)}if(o&&q===10)return A.Cb(a,b,c,d,e)
return!1},
xb(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aG(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aG(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aG(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aG(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aG(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
C6(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hZ(a,b,r[o])
return A.wU(a,p,null,c,d.y,e)}return A.wU(a,b.y,null,c,d.y,e)},
wU(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aG(a,b[s],d,e[s],f))return!1
return!0},
Cb(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aG(a,r[s],c,q[s],e))return!1
return!0},
fC(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.eD(a))if(s!==6)r=s===7&&A.fC(a.x)
return r},
eD(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
wL(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
r2(a){return a>0?new Array(a):v.typeUniverse.sEA},
ci:function ci(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
kC:function kC(){this.c=this.b=this.a=null},
l4:function l4(a){this.a=a},
kA:function kA(){},
fj:function fj(a){this.a=a},
AE(){var s,r,q
if(self.scheduleImmediate!=null)return A.CZ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fB(new A.qr(s),1)).observe(r,{childList:true})
return new A.qq(s,r,q)}else if(self.setImmediate!=null)return A.D_()
return A.D0()},
AF(a){self.scheduleImmediate(A.fB(new A.qs(t.M.a(a)),0))},
AG(a){self.setImmediate(A.fB(new A.qt(t.M.a(a)),0))},
AH(a){A.um(B.dP,t.M.a(a))},
um(a,b){return A.AS(a.a/1000|0,b)},
AS(a,b){var s=new A.qW()
s.jY(a,b)
return s},
bn(a){return new A.kq(new A.aq($.ak,a.i("aq<0>")),a.i("kq<0>"))},
bl(a,b){a.$2(0,null)
b.b=!0
return b.a},
aj(a,b){A.Bw(a,b)},
bk(a,b){b.dA(a)},
bj(a,b){b.dB(A.ah(a),A.cl(a))},
Bw(a,b){var s,r,q=new A.rb(b),p=new A.rc(b)
if(a instanceof A.aq)a.fS(q,p,t.z)
else{s=t.z
if(a instanceof A.aq)a.ez(q,p,s)
else{r=new A.aq($.ak,t.j_)
r.a=8
r.c=a
r.fS(q,p,s)}}},
bq(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ak.iN(new A.te(s),t.H,t.S,t.z)},
wy(a,b,c){return 0},
lL(a){var s
if(t.W.b(a)){s=a.gbJ()
if(s!=null)return s}return B.ae},
u3(a){var s
a.a(null)
s=new A.aq($.ak,a.i("aq<0>"))
s.d6(null)
return s},
zm(a,b,c){var s=new A.aq($.ak,c.i("aq<0>"))
A.Ah(a,new A.n3(b,s,c))
return s},
n4(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.aq($.ak,b.i("aq<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.n6(i,h,g,f)
try{for(n=J.S(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.ez(new A.n5(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.ce(A.e([],b.i("q<0>")))
return n}i.a=A.cy(n,null,!1,b.i("0?"))}catch(l){p=A.ah(l)
o=A.cl(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.uN(m,k)
m=new A.aQ(m,k==null?A.lL(m):k)
n.ca(m)
return n}else{i.d=p
i.c=o}}return f},
uN(a,b){if($.ak===B.v)return null
return null},
C2(a,b){if($.ak!==B.v)A.uN(a,b)
if(b==null)if(t.W.b(a)){b=a.gbJ()
if(b==null){A.w0(a,B.ae)
b=B.ae}}else b=B.ae
else if(t.W.b(a))A.w0(a,b)
return new A.aQ(a,b)},
qB(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Ad()
b.ca(new A.aQ(new A.cc(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fw(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bN()
b.cd(o.a)
A.er(b,p)
return}b.a^=2
A.lm(null,null,b.b,t.M.a(new A.qC(o,b)))},
er(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.uW(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.er(d.a,c)
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
A.uW(j.a,j.b)
return}g=$.ak
if(g!==h)$.ak=h
else g=null
c=c.c
if((c&15)===8)new A.qG(q,d,n).$0()
else if(o){if((c&1)!==0)new A.qF(q,j).$0()}else if((c&2)!==0)new A.qE(d,q).$0()
if(g!=null)$.ak=g
c=q.c
if(c instanceof A.aq){p=q.a.$ti
p=p.i("bM<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cl(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.qB(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cl(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Cv(a,b){var s
if(t.ng.b(a))return b.iN(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.av(a,"onError",u.c))},
Cn(){var s,r
for(s=$.fv;s!=null;s=$.fv){$.ii=null
r=s.b
$.fv=r
if(r==null)$.ih=null
s.a.$0()}},
CG(){$.uO=!0
try{A.Cn()}finally{$.ii=null
$.uO=!1
if($.fv!=null)$.vk().$1(A.xH())}},
xB(a){var s=new A.kr(a),r=$.ih
if(r==null){$.fv=$.ih=s
if(!$.uO)$.vk().$1(A.xH())}else $.ih=r.b=s},
CB(a){var s,r,q,p=$.fv
if(p==null){A.xB(a)
$.ii=$.ih
return}s=new A.kr(a)
r=$.ii
if(r==null){s.b=p
$.fv=$.ii=s}else{q=r.b
s.b=q
$.ii=r.b=s
if(q==null)$.ih=s}},
E4(a,b){A.dP(a,"stream",t.K)
return new A.l1(b.i("l1<0>"))},
Ah(a,b){var s=$.ak
if(s===B.v)return A.um(a,t.M.a(b))
return A.um(a,t.M.a(s.h2(b)))},
uW(a,b){A.CB(new A.t4(a,b))},
xw(a,b,c,d,e){var s,r=$.ak
if(r===c)return d.$0()
$.ak=c
s=r
try{r=d.$0()
return r}finally{$.ak=s}},
Cz(a,b,c,d,e,f,g){var s,r=$.ak
if(r===c)return d.$1(e)
$.ak=c
s=r
try{r=d.$1(e)
return r}finally{$.ak=s}},
Cy(a,b,c,d,e,f,g,h,i){var s,r=$.ak
if(r===c)return d.$2(e,f)
$.ak=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ak=s}},
lm(a,b,c,d){t.M.a(d)
if(B.v!==c){d=c.h2(d)
d=d}A.xB(d)},
qr:function qr(a){this.a=a},
qq:function qq(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(a){this.a=a},
qt:function qt(a){this.a=a},
qW:function qW(){},
qX:function qX(a,b){this.a=a
this.b=b},
kq:function kq(a,b){this.a=a
this.b=!1
this.$ti=b},
rb:function rb(a){this.a=a},
rc:function rc(a){this.a=a},
te:function te(a){this.a=a},
ck:function ck(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cL:function cL(a,b){this.a=a
this.$ti=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
n3:function n3(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n5:function n5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ku:function ku(){},
hA:function hA(a,b){this.a=a
this.$ti=b},
eq:function eq(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
qy:function qy(a,b){this.a=a
this.b=b},
qD:function qD(a,b){this.a=a
this.b=b},
qC:function qC(a,b){this.a=a
this.b=b},
qA:function qA(a,b){this.a=a
this.b=b},
qz:function qz(a,b){this.a=a
this.b=b},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(a,b){this.a=a
this.b=b},
qI:function qI(a){this.a=a},
qF:function qF(a,b){this.a=a
this.b=b},
qE:function qE(a,b){this.a=a
this.b=b},
kr:function kr(a){this.a=a
this.b=null},
l1:function l1(a){this.$ti=a},
i5:function i5(){},
kT:function kT(){},
qU:function qU(a,b){this.a=a
this.b=b},
t4:function t4(a,b){this.a=a
this.b=b},
ws(a,b){var s=a[b]
return s===a?null:s},
us(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ur(){var s=Object.create(null)
A.us(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
vU(a,b){return new A.c3(a.i("@<0>").F(b).i("c3<1,2>"))},
P(a,b,c){return b.i("@<0>").F(c).i("u7<1,2>").a(A.xJ(a,new A.c3(b.i("@<0>").F(c).i("c3<1,2>"))))},
r(a,b){return new A.c3(a.i("@<0>").F(b).i("c3<1,2>"))},
u8(a){return new A.c8(a.i("c8<0>"))},
a6(a){return new A.c8(a.i("c8<0>"))},
aC(a,b){return b.i("vV<0>").a(A.Dj(a,new A.c8(b.i("c8<0>"))))},
ut(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
kJ(a,b,c){var s=new A.ev(a,b,c.i("ev<0>"))
s.c=a.e
return s},
eZ(a,b){var s=J.S(a.a)
if(new A.L(s,a.b,a.$ti.i("L<1>")).m())return s.gn()
return null},
aT(a,b,c){var s=A.vU(b,c)
a.am(0,new A.oe(s,b,c))
return s},
f1(a,b,c){var s=A.vU(b,c)
s.K(0,a)
return s},
js(a,b){var s,r,q=A.u8(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q.l(0,b.a(a[r]))
return q},
u9(a,b){var s=A.u8(b)
s.K(0,a)
return s},
zG(a,b){var s=t.bP
return J.vn(s.a(a),s.a(b))},
ua(a){var s,r
if(A.vb(a))return"{...}"
s=new A.b5("")
try{r={}
B.a.l($.c_,a)
s.a+="{"
r.a=!0
a.am(0,new A.og(r,s))
s.a+="}"}finally{if(0>=$.c_.length)return A.f($.c_,-1)
$.c_.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
B2(){throw A.d(A.aN("Cannot change an unmodifiable set"))},
hH:function hH(){},
qK:function qK(a){this.a=a},
hJ:function hJ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
es:function es(a,b){this.a=a
this.$ti=b},
hI:function hI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c8:function c8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kI:function kI(a){this.a=a
this.c=this.b=null},
ev:function ev(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
oe:function oe(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(){},
a2:function a2(){},
of:function of(a){this.a=a},
og:function og(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.$ti=b},
hL:function hL(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i_:function i_(){},
f2:function f2(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
d6:function d6(){},
hU:function hU(){},
l5:function l5(){},
ht:function ht(a,b){this.a=a
this.$ti=b},
fk:function fk(){},
i0:function i0(){},
Cp(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ah(r)
q=A.a5(String(s),null,null)
throw A.d(q)}q=A.rz(p)
return q},
rz(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.kG(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.rz(a[s])
return a},
Bj(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.yk()
else s=new Uint8Array(o)
for(r=J.aB(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Bi(a,b,c,d){var s=a?$.yj():$.yi()
if(s==null)return null
if(0===c&&d===b.length)return A.wK(s,b)
return A.wK(s,b.subarray(c,d))},
wK(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
vq(a,b,c,d,e,f){if(B.c.a2(f,4)!==0)throw A.d(A.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a5("Invalid base64 padding, more than two '=' characters",a,b))},
vR(a,b,c){return new A.h1(a,b)},
BI(a){return a.B()},
AI(a,b){return new A.qN(a,[],A.Da())},
AJ(a,b,c){var s,r=new A.b5(""),q=A.AI(r,b)
q.cT(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Bk(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
kG:function kG(a,b){this.a=a
this.b=b
this.c=null},
qM:function qM(a){this.a=a},
kH:function kH(a){this.a=a},
r1:function r1(){},
r0:function r0(){},
ix:function ix(){},
md:function md(){},
dX:function dX(){},
iM:function iM(){},
iW:function iW(){},
h1:function h1(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(){},
o7:function o7(a){this.b=a},
o6:function o6(a){this.a=a},
qO:function qO(){},
qP:function qP(a,b){this.a=a
this.b=b},
qN:function qN(a,b,c){this.c=a
this.a=b
this.b=c},
kd:function kd(){},
qa:function qa(a){this.a=a},
r_:function r_(a){this.a=a
this.b=16
this.c=0},
xQ(a){var s=A.jP(a,null)
if(s!=null)return s
throw A.d(A.a5(a,null,null))},
zh(a,b){a=A.au(a,new Error())
if(a==null)a=A.fq(a)
a.stack=b.p(0)
throw a},
cy(a,b,c,d){var s,r=c?J.vL(a,d):J.vK(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
az(a,b,c){var s,r=A.e([],c.i("q<0>"))
for(s=J.S(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
N(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("q<0>"))
s=A.e([],b.i("q<0>"))
for(r=J.S(a);r.m();)B.a.l(s,r.gn())
return s},
an(a,b){var s=A.az(a,!1,b)
s.$flags=3
return s},
wa(a,b,c){var s,r
A.jS(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aL(c,b,null,"end",null))
if(s===0)return""}r=A.Af(a,b,c)
return r},
Af(a,b,c){var s=a.length
if(b>=s)return""
return A.A_(a,b,c==null||c>s?s:c)},
A0(a){return new A.jn(a,A.zD(a,!1,!0,!1,!1,""))},
ul(a,b,c){var s=J.S(b)
if(!s.m())return a
if(c.length===0){do a+=A.u(s.gn())
while(s.m())}else{a+=A.u(s.gn())
while(s.m())a=a+c+A.u(s.gn())}return a},
hv(){var s,r,q=A.zP()
if(q==null)throw A.d(A.aN("'Uri.base' is not supported"))
s=$.wg
if(s!=null&&q===$.wf)return s
r=A.An(q)
$.wg=r
$.wf=q
return r},
Ad(){return A.cl(new Error())},
yY(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
vx(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iO(a){if(a>=10)return""+a
return"0"+a},
zg(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.av(b,"name","No enum value with that name"))},
iX(a){if(typeof a=="number"||A.bY(a)||a==null)return J.cT(a)
if(typeof a=="string")return JSON.stringify(a)
return A.w_(a)},
zi(a,b){A.dP(a,"error",t.K)
A.dP(b,"stackTrace",t.l)
A.zh(a,b)},
iu(a){return new A.it(a)},
w(a,b){return new A.cc(!1,null,b,a)},
av(a,b,c){return new A.cc(!0,a,b,c)},
w1(a){var s=null
return new A.f5(s,s,!1,s,s,a)},
w2(a,b){return new A.f5(null,null,!0,a,b,"Value not in range")},
aL(a,b,c,d,e){return new A.f5(b,c,!0,a,d,"Invalid value")},
hd(a,b,c){if(0>a||a>c)throw A.d(A.aL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aL(b,a,c,"end",null))
return b}return c},
jS(a,b){if(a<0)throw A.d(A.aL(a,0,null,b,null))
return a},
nP(a,b,c,d){return new A.jf(b,!0,a,d,"Index out of range")},
aN(a){return new A.hu(a)},
wd(a){return new A.k8(a)},
l(a){return new A.f9(a)},
at(a){return new A.iI(a)},
eW(a){return new A.qw(a)},
a5(a,b,c){return new A.F(a,b,c)},
zz(a,b,c){var s,r
if(A.vb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.c_,a)
try{A.Cf(a,s)}finally{if(0>=$.c_.length)return A.f($.c_,-1)
$.c_.pop()}r=A.ul(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
u4(a,b,c){var s,r
if(A.vb(a))return b+"..."+c
s=new A.b5(b)
B.a.l($.c_,a)
try{r=s
r.a=A.ul(r.a,a,", ")}finally{if(0>=$.c_.length)return A.f($.c_,-1)
$.c_.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Cf(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.u(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.u(p))
return}r=A.u(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.u(p)
r=A.u(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
ch(a,b,c,d,e,f){var s
if(B.f===c){s=J.ar(a)
b=J.ar(b)
return A.hr(A.aF(A.aF($.fD(),s),b))}if(B.f===d){s=J.ar(a)
b=J.ar(b)
c=J.ar(c)
return A.hr(A.aF(A.aF(A.aF($.fD(),s),b),c))}if(B.f===e){s=J.ar(a)
b=J.ar(b)
c=J.ar(c)
d=J.ar(d)
return A.hr(A.aF(A.aF(A.aF(A.aF($.fD(),s),b),c),d))}if(B.f===f){s=J.ar(a)
b=J.ar(b)
c=J.ar(c)
d=J.ar(d)
e=J.ar(e)
return A.hr(A.aF(A.aF(A.aF(A.aF(A.aF($.fD(),s),b),c),d),e))}s=J.ar(a)
b=J.ar(b)
c=J.ar(c)
d=J.ar(d)
e=J.ar(e)
f=J.ar(f)
f=A.hr(A.aF(A.aF(A.aF(A.aF(A.aF(A.aF($.fD(),s),b),c),d),e),f))
return f},
zN(a){var s,r,q=$.fD()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)q=A.aF(q,J.ar(a[r]))
return A.hr(q)},
uj(a,b){return new A.ht(A.u9(a,b),b.i("ht<0>"))},
An(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.we(a4<a4?B.b.E(a5,0,a4):a5,5,a3).giV()
else if(s===32)return A.we(B.b.E(a5,5,a4),0,a3).giV()}r=A.cy(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.xA(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.xA(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.a7(a5,"\\",n))if(p>0)h=B.b.a7(a5,"\\",p-1)||B.b.a7(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.a7(a5,"..",n)))h=m>n+2&&B.b.a7(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.a7(a5,"file",0)){if(p<=0){if(!B.b.a7(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.E(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bF(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a7(a5,"http",0)){if(i&&o+3===n&&B.b.a7(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bF(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.a7(a5,"https",0)){if(i&&o+4===n&&B.b.a7(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bF(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.kX(a4<a5.length?B.b.E(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Bc(a5,0,q)
else{if(q===0)A.fl(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Bd(a5,c,p-1):""
a=A.B8(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jP(B.b.E(a5,i,n),a3)
d=A.Ba(a0==null?A.j(A.a5("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.B9(a5,n,m,a3,j,a!=null)
a2=m<l?A.Bb(a5,m+1,l,a3):a3
return A.B3(j,b,a,d,a1,a2,l<a4?A.B7(a5,l+1,a4):a3)},
wi(a){var s=t.N
return B.a.by(A.e(a.split("&"),t.s),A.r(s,s),new A.q9(B.by),t.G)},
kc(a,b,c){throw A.d(A.a5("Illegal IPv4 address, "+a,b,c))},
Ak(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kc("each part must be in the range 0..255",a,r)}A.kc("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kc(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.br(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kc(j,a,q)
p=l}A.kc("IPv4 address should contain exactly 4 parts",a,q)},
Al(a,b,c){var s
if(b===c)throw A.d(A.a5("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.Am(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.wh(a,b,c)
return!0},
Am(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.F(n,a,q)
r=q
break}return new A.F("Unexpected character",a,q-1)}if(r-1===b)return new A.F(n,a,r)
return new A.F("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.F("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.f(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.F("Invalid IPvFuture address character",a,r)}},
wh(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.q8(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.f(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.f(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.f(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Ak(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.dt(l,8)
if(!(o<16))return A.f(s,o)
s[o]=e;++o
if(!(o<16))return A.f(s,o)
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
B.ct.jj(s,a0,16,s,a)
B.ct.mL(s,a,a0,0)}}return s},
B3(a,b,c,d,e,f,g){return new A.i1(a,b,c,d,e,f,g)},
wE(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fl(a,b,c){throw A.d(A.a5(c,a,b))},
Ba(a,b){var s=A.wE(b)
if(a===s)return null
return a},
B8(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.fl(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.B5(a,q,r)
if(o<r){n=o+1
p=A.wJ(a,B.b.a7(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Al(a,q,o)
l=B.b.E(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.cH(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.wJ(a,B.b.a7(a,"25",n)?o+3:n,c,"%25")}else p=""
A.wh(a,b,o)
return"["+B.b.E(a,b,o)+p+"]"}}return A.Bf(a,b,c)},
B5(a,b,c){var s=B.b.cH(a,"%",b)
return s>=b&&s<c?s:c},
wJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.b5(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.ux(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.b5("")
l=h.a+=B.b.E(a,q,r)
if(m)n=B.b.E(a,r,r+3)
else if(n==="%")A.fl(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.b5("")
if(q<r){h.a+=B.b.E(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.f(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.E(a,q,r)
if(h==null){h=new A.b5("")
m=h}else m=h
m.a+=i
l=A.uw(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.E(a,b,c)
if(q<c){i=B.b.E(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
Bf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.ux(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.b5("")
k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.E(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.b5("")
if(q<r){p.a+=B.b.E(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fl(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.f(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.b5("")
l=p}else l=p
l.a+=k
j=A.uw(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.E(a,b,c)
if(q<c){k=B.b.E(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Bc(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.wG(a.charCodeAt(b)))A.fl(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fl(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.E(a,b,c)
return A.B4(q?a.toLowerCase():a)},
B4(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Bd(a,b,c){return A.i2(a,b,c,16,!1,!1)},
B9(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.i2(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.Be(q,e,f)},
Be(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.Bg(a,!s||c)
return A.Bh(a)},
Bb(a,b,c,d){return A.i2(a,b,c,256,!0,!1)},
B7(a,b,c){return A.i2(a,b,c,256,!0,!1)},
ux(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.tm(r)
o=A.tm(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ap(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.E(a,b,b+3).toUpperCase()
return null},
uw(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.f(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.c.lh(a,6*p)&63|q
if(!(o<r))return A.f(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.f(k,l)
if(!(m<r))return A.f(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.f(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.wa(s,0,null)},
i2(a,b,c,d,e,f){var s=A.wI(a,b,c,d,e,f)
return s==null?B.b.E(a,b,c):s},
wI(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.ux(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fl(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.uw(n)}if(o==null){o=new A.b5("")
k=o}else k=o
k.a=(k.a+=B.b.E(a,p,q))+l
if(typeof m!=="number")return A.lq(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.E(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
wH(a){if(B.b.T(a,"."))return!0
return B.b.cG(a,"/.")!==-1},
Bh(a){var s,r,q,p,o,n,m
if(!A.wH(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.aw(s,"/")},
Bg(a,b){var s,r,q,p,o,n
if(!A.wH(a))return!b?A.wF(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gS(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.wF(s[0]))}return B.a.aw(s,"/")},
wF(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.wG(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.E(a,0,s)+"%3A"+B.b.bn(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
B6(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.w("Invalid URL encoding",null))}}return r},
uy(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.by===d)return B.b.E(a,b,c)
else p=new A.dW(B.b.E(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.w("Truncated URI",null))
B.a.l(p,A.B6(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.L.a(p)
return B.k9.m0(p)},
wG(a){var s=a|32
return 97<=s&&s<=122},
we(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a5(k,a,r))}}if(q<0&&r>b)throw A.d(A.a5(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.f(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gS(j)
if(p!==44||r!==n+7||!B.b.a7(a,"base64",n+1))throw A.d(A.a5("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.dr.n8(a,m,s)
else{l=A.wI(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bF(a,m,s,l)}return new A.q7(a,j,c)},
xA(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.a=a},
kz:function kz(){},
ai:function ai(){},
it:function it(a){this.a=a},
d8:function d8(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jf:function jf(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hu:function hu(a){this.a=a},
k8:function k8(a){this.a=a},
f9:function f9(a){this.a=a},
iI:function iI(a){this.a=a},
jG:function jG(){},
hn:function hn(){},
qw:function qw(a){this.a=a},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(){},
C:function C(){},
l2:function l2(){},
pW:function pW(){this.b=this.a=0},
b5:function b5(a){this.a=a},
q9:function q9(a){this.a=a},
q8:function q8(a){this.a=a},
i1:function i1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
kv:function kv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
or:function or(a){this.a=a},
W(a){var s
if(typeof a=="function")throw A.d(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.dL,a)
s[$.cR()]=a
return s},
dL(a,b,c){t.gY.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
v9(a,b,c){return c.a(a[b])},
x6(a,b){return a[b]},
af(a,b,c,d){return d.a(a[b].apply(a,c))},
wZ(a,b,c,d){return d.a(a[b](c))},
aP(a,b){var s=new A.aq($.ak,b.i("aq<0>")),r=new A.hA(s,b.i("hA<0>"))
a.then(A.fB(new A.tQ(r,b),1),A.fB(new A.tR(r),1))
return s},
xh(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cQ(a){if(A.xh(a))return a
return new A.th(new A.hJ(t.mp)).$1(a)},
tQ:function tQ(a,b){this.a=a
this.b=b},
tR:function tR(a){this.a=a},
th:function th(a){this.a=a},
kF:function kF(){},
fe:function fe(){this.b=this.a=0},
oQ:function oQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
oR:function oR(){},
eg:function eg(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
ml:function ml(a,b){this.a=a
this.b=b},
mm:function mm(){this.a=null
this.d=0},
jL:function jL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eO:function eO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
j1:function j1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
mZ:function mZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dt(a,b){return new A.nq(a,b)},
d5:function d5(){},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b){this.a=a
this.b=b},
nq:function nq(a,b){this.a=a
this.b=b},
DF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.gf)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.t)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.hS(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.a1(f,new A.tS())
s=A.e([],t.D)
for(r=A.hq(f,0,A.dP(b,"count",t.S),t.jX),q=r.$ti,r=new A.aU(r,r.gq(0),q.i("aU<a1.E>")),q=q.i("a1.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
mE:function mE(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bg:function bg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tS:function tS(){},
ju(a,b,c,d,e,f,g,h,i){return new A.ec(c,a,g,f,e,h,i,b,!0)},
uc(a,b){var s
if(isFinite(b))s=b>1
else s=!0
if(s)throw A.d(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+b,null))},
is:function is(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ay=f
_.ch=g
_.dx=h
_.dy=i},
zI(a){A:{break A}return a},
cI:function cI(a,b){this.a=a
this.b=b},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
qb:function qb(){},
qc:function qc(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ol:function ol(){},
om:function om(){},
on:function on(){},
ou(a){var s,r=t.N,q=A.aC(["sceneColor","present"],r),p=a.a.b
if(p.u(0,"shadows"))q.K(0,A.aC(["shadowMap","sceneDepth"],r))
if(p.u(0,"ssao"))q.K(0,A.aC(["ssaoRaw","ssaoBlurred"],r))
if(p.u(0,"bloom"))q.K(0,A.aC(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.u(0,"dof"))q.K(0,A.aC(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.u(0,"grade"))q.l(0,"gradeOutput")
if(p.u(0,"ps1"))q.l(0,"ps1Output")
s=p.u(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.ot(A.uj(q,r),s)},
ot:function ot(a,b){this.a=a
this.b=b},
ov:function ov(){},
oJ:function oJ(a){this.b=a},
jV:function jV(){this.a=null
this.c=0
this.d=!1},
eT:function eT(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c,d,e,f,g,h,i,j){var _=this
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
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
ei:function ei(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.d=c},
n0:function n0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h},
zH(){return new A.jv(new A.cD(new A.oj(),A.e([],t.dz),A.e([],t.t),t.kk))},
jv:function jv(a){this.a=a},
oj:function oj(){},
xD(a){var s=4
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
case 3:s=A.j(A.aN("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
BD(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.Q[r]
if(A.xD(q.a)===b)s+=q.c}return s},
zJ(a){return new A.oo(a,new A.cD(new A.op(),A.e([],t.jk),A.e([],t.t),t.ll),A.r(t.S,t.mL))},
vY(a){var s
A:{s=a.byteLength
break A}return s},
ka:function ka(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oo:function oo(a,b,c){this.a=a
this.b=b
this.c=c},
op:function op(){},
oq:function oq(){},
Ag(a){var s=new A.k6(a,new A.cD(new A.q2(),A.e([],t.mQ),A.e([],t.t),t.ox),A.r(t.S,t._))
s.d=s.aI($.vi())
s.e=s.aI($.vf())
s.f=s.aI($.vg())
s.r=s.aI($.ve())
s.w=s.aI($.vh())
return s},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
q2:function q2(){},
q4:function q4(){},
q3:function q3(){},
D1(a){var s,r,q,p,o=A.e([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.t)(a),++q){p=a[q]
p.gC()
B.a.l(o,new A.e6(p,A.e([p],r)))
continue}return o},
e6:function e6(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
mU:function mU(){},
mV:function mV(a){this.a=a},
mS:function mS(a){this.a=a},
mT:function mT(a){this.a=a},
j0:function j0(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
n_:function n_(a,b){this.a=a
this.b=b
this.c=0},
AK(){return new A.fd()},
mY:function mY(a){this.a=a
this.b=null},
fd:function fd(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
ud(){return!0},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
ox:function ox(){},
oy:function oy(){},
c2:function c2(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
aD:function aD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f6:function f6(a,b){this.a=a
this.b=b},
J:function J(a,b){this.a=a
this.b=b},
fJ:function fJ(a){this.b=a},
oO:function oO(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
b4:function b4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oS:function oS(){},
aW:function aW(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oU:function oU(a,b){this.a=a
this.b=b},
oZ:function oZ(){},
oY:function oY(){},
oX:function oX(){},
oW:function oW(a){this.a=a},
oV:function oV(a,b,c){this.a=a
this.b=b
this.c=c},
oT:function oT(a,b){this.a=a
this.b=b},
A4(a){return new A.he(a,new A.cD(new A.p0(),A.e([],t.n_),A.e([],t.t),t.mo))},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a,b){this.a=a
this.b=b},
p0:function p0(){},
x3(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.BN(a,r,s,a.x.gn().a.b.a).b},
BN(a,b,c,d){var s,r,q,p,o,n=new A.rP(a),m=new A.rQ(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.u(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.D5(b,k,B.aF,l,s.gnI(),new A.rA(m),new A.rB(m),new A.rC(a),new A.rH(a),new A.rI(a),new A.rJ(m),new A.rK(m),s.gnK(),new A.rL(a),s.gnO(),r.gnM(),n,s.gnQ(),s.gnS(),new A.rM(m,c),new A.rN(m),new A.rO(m),new A.rD(m),new A.rE(m),new A.rF(a),new A.rG(m),1,i,j,512)}else{p=new A.aD("sceneColor",B.p,j,i,1,0)
n=A.e([new A.ko(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.o5)
n.push(new A.hb(b,u.l,u.a,k,p,B.aF))
q=new A.j_(n)}a.r.toString
o=q.lN(B.K,new A.oS(),!1,new A.kQ())
n=o.a.b
if(n.length!==0)throw A.d(A.l("safe renderer graph is invalid: "+A.u(n)))
return new A.qV(q,o)},
BO(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.l("renderer graph is not initialized"))
s=A.N(b7.giw(),t.Y)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.Z(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.aa()
p=p.gar()
n=A.K(p)
B.a.l(s,new A.l3(new A.cu((r|1073741824)>>>0,0,"transient"),q,A.ba(new A.Q(p,n.i("H(1)").a(o.gaA()),n.i("Q<1,H>")))))}p=b8.a
m=A.Dc(A.zl(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gC().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dt(B.an,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.c.R(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.t)(s),++k){n=s[k].gC().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.j(A.dt(B.an,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.c.R(n>0?n:h.e,3)}o=t.N
n=A.r(o,t.a1)
e=new A.mY(n)
e.lJ("cull")
j=l-f
d=e.b
if(d==null)A.j(A.l("cull recorded outside an active frame"))
if(j<0)A.j(A.w("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.e([],t.mX)
a=A.e([],t.ao)
for(i=s.length,g=t.q,a0=p.a,a1=t.e,k=0;k<s.length;s.length===i||(0,A.t)(s),++k){a2=s[k]
if(a2.gC().e===B.aG)B.a.l(a,new A.aE(new A.bs(a0.iS(a2.gC().c.a).c,a2.ga_().a),a2,a1))
else B.a.l(b,new A.aE(new A.bw(B.iI,a2.gC().b,a2.gC().a,a2.ga_().a),a2,g))}a3=new A.kB(A.D1(A.DH(b)),A.DG(a),p,b8.b,b8.c)
a4=new A.iR(b6.a,e)
for(s=b4.b,p=s.length,i=t.kp,k=0;k<s.length;s.length===p||(0,A.t)(s),++k){a5=s[k]
g=a5.gC().a
if(g.length===0)A.j(A.av(g,"passId",null))
e.b=g
n.cM(g,A.xK())
a6=A.r(o,i)
for(g=a5.gC().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.t)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.j(A.l("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.j(A.l("resource is not in candidate: "+b1))
b3=new A.eN(b2)
a6.k(0,b0+"#"+a1,b3)
a6.cM(b0,new A.rR(b3))}a5.ad(new A.iB(a6,a4,a3))}return new A.qx(e,m,j)},
w7(a){return new A.pf(a,new A.ml(new A.mm(),new A.jV()),new A.n_(A.e([],t.c8),B.f_),A.e([],t.oZ),B.b0,A.e([],t.is),null)},
p9:function p9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
qx:function qx(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
rP:function rP(a){this.a=a},
rQ:function rQ(a,b){this.a=a
this.b=b},
rO:function rO(a){this.a=a},
rH:function rH(a){this.a=a},
rI:function rI(a){this.a=a},
rN:function rN(a){this.a=a},
rC:function rC(a){this.a=a},
rE:function rE(a){this.a=a},
rD:function rD(a){this.a=a},
rM:function rM(a,b){this.a=a
this.b=b},
rA:function rA(a){this.a=a},
rB:function rB(a){this.a=a},
rJ:function rJ(a){this.a=a},
rK:function rK(a){this.a=a},
rL:function rL(a){this.a=a},
rG:function rG(a){this.a=a},
rF:function rF(a){this.a=a},
rR:function rR(a){this.a=a},
qV:function qV(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
kB:function kB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pf:function pf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
pg:function pg(){},
ph:function ph(){},
pi:function pi(){},
kO:function kO(a){this.b=a},
qJ:function qJ(){},
kU:function kU(){},
DH(a){var s,r,q=A.N(a,t.q)
B.a.a1(q,new A.tW())
s=A.K(q)
r=s.i("Q<1,bP>")
s=A.N(new A.Q(q,s.i("bP(1)").a(new A.tX()),r),r.i("a1.E"))
s.$flags=1
return s},
DG(a){var s,r,q=A.N(a,t.e)
B.a.a1(q,new A.tU())
s=A.K(q)
r=s.i("Q<1,bP>")
s=A.N(new A.Q(q,s.i("bP(1)").a(new A.tV()),r),r.i("a1.E"))
s.$flags=1
return s},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
tW:function tW(){},
tX:function tX(){},
tU:function tU(){},
tV:function tV(){},
Dc(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.bH)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p];++r
if((o.gC().d&c)>>>0===0){++q
continue}n=o.geG()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.w("cullItems: non-finite world bounds for instance "+o.ga_().p(0),null))
if(a.nZ(o.geG())===B.bL){++q
continue}B.a.l(l,o)}return new A.mz(l,new A.mA(q))},
mA:function mA(a){this.b=a},
mz:function mz(a,b){this.a=a
this.b=b},
ba(a){var s,r,q,p,o,n,m,l,k
for(s=J.S(a),r=B.kc,q=B.kd,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.H(m,k,Math.min(r.c,o))
q=new A.H(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.w("Aabb.fromPoints requires at least one point",null))
return new A.iq(r,q)},
iq:function iq(a,b){this.a=a
this.b=b},
zl(a){var s,r,q,p,o,n,m=a.a,l=new A.n2(),k=m.length
if(3>=k)return A.f(m,3)
s=m[3]
r=m[0]
if(7>=k)return A.f(m,7)
q=m[7]
p=m[4]
if(11>=k)return A.f(m,11)
o=m[11]
n=m[8]
if(15>=k)return A.f(m,15)
return new A.n1(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
ee:function ee(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
n1:function n1(a){this.a=a},
n2:function n2(){},
vW(a){if(a.length!==16)throw A.d(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.d3(new Float32Array(A.Z(a)))},
ub(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.d3(q)},
vX(a,b,c){var s=b.ga8(),r=s.bd(c).ga8(),q=r.bd(s),p=new Float32Array(16)
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
p[12]=-r.bU(a)
p[13]=-q.bU(a)
p[14]=s.bU(a)
p[15]=1
return new A.d3(p)},
d3:function d3(a){this.a=a},
oi:function oi(){},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k7:function k7(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ks:function ks(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iA:function iA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kt:function kt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
kw:function kw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iU:function iU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ky:function ky(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
j9:function j9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
kD:function kD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.b=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
bd(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aD(a.a,a.b,b,c,s,r)},
ue:function ue(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
hb:function hb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
kR:function kR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jQ:function jQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kS:function kS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w9(a){var s=a.c,r=Math.abs(s.a)<0.99?B.kb:B.X,q=A.vX(a.b,s,r)
return new A.el(A.ub(1,a.f,B.d.N(a.w*2,0.1,3),0.05).a3(0,q))},
el:function el(a){this.a=a},
jY:function jY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kV:function kV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
D5(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.u(0,"shadows"))throw A.d(A.av(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.u(0,"ssao")
r=b6.u(0,"bloom")
q=b6.u(0,"dof")
p=b6.u(0,"grade")
o=b6.u(0,"ps1")
n=b6.u(0,"vhs")
b6=(e5+1)/2|0
m=(e4+1)/2|0
l=A.bd(B.b2,e5,e4,e3,a8)
k=A.bd(B.b2.iB(),e5,e4,a8,a8)
A.bd(B.jo,e5,e4,a8,a8)
j=A.bd(B.jl,e5,e4,a8,a8)
i=A.bd(B.jg,e6,e6,a8,a8)
h=A.bd(B.jh,b6,m,a8,a8)
g=A.bd(B.ji,b6,m,a8,a8)
f=A.bd(B.jm,b6,m,a8,a8)
e=A.bd(B.jn,b6,m,a8,a8)
d=$.y4()
c=e3>1
b=A.bd(d,e5,e4,a8,c?2:1)
d=A.bd(B.jd,b6,m,a8,a8)
a=A.bd(B.je,b6,m,a8,a8)
a0=A.bd(B.jf,e5,e4,a8,a8)
a1=A.bd(B.jj,e5,e4,a8,a8)
a2=A.bd(B.jp,e5,e4,a8,a8)
a3=A.bd(B.jk,e5,e4,a8,a8)
a4=c?new A.jx(b8,l,k):a8
b5.a=null
a5=A.w9(B.jP)
a6=t.o5
a7=A.e([],a6)
k=c?k:l
if(r){B.a.K(a7,A.e([new A.fH(b7,a9,b0,b8,b1,b1,B.d1,!0,k,f,d6,b6,m),new A.fH(b7,a9,b0,b8,b2,b2,B.kO,!1,f,e,c2,b6,m),new A.iA(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.K(a7,A.e([new A.fM(b7,a9,b0,b8,b3,b3,B.d2,k,d,d6,b6,m),new A.fM(b7,a9,b0,b8,b4,b4,B.kP,d,a,c7,b6,m),new A.iU(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.j9(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.jQ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.kf(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.iQ(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.k1(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.k0(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.jY(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,new A.tf(b5),i))
j.push(new A.jZ(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(uNormalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.tg(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.K(j,a7)
j.push(new A.hb(b7,a9,u.a,b8,k,b9))
return new A.j_(j)},
tf:function tf(a){this.a=a},
tg:function tg(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
kW:function kW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
k1:function k1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
l_:function l_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k0:function k0(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
kZ:function kZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kf:function kf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l6:function l6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l9:function l9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mj:function mj(){},
jX(a,b){return new A.hm(a,b)},
j5:function j5(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
e4:function e4(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fU:function fU(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
ne:function ne(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
nf:function nf(){},
ng:function ng(){},
fh:function fh(a,b){this.a=a
this.b=b},
dI:function dI(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
vz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eU(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
iy:function iy(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
eU:function eU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aY:function aY(a,b){this.a=a
this.b=b},
qn:function qn(){this.a=null},
As(a){var s=new A.km(a,B.h,new A.qn(),A.AD(a))
s.jX(a)
return s},
AD(a){var s,r,q=t.hH.a(a.getSupportedExtensions())
if(q==null)return A.a6(t.N)
s=A.a6(t.N)
r=J.S(t.a.b(q)?q:new A.bK(q,A.K(q).i("bK<1,m>")))
while(r.m())s.l(0,r.gn())
return s},
bU(a,b){var s,r
if(a.b!==B.h)A.j(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
Ay(a,b){var s
if(a.b!==B.h)A.j(A.l(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.a(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
Ax(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.l(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.l("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
Aw(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
Av(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
wl(a,b){var s
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
At(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b6(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.l(u.k))
s=a.f
r=s.mu(b)
if(r.a===0)return
if(r.u(0,B.b7)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.u(0,B.b8))a.a.depthFunc(A.Aw(a,b.b))
if(r.u(0,B.b9))a.a.depthMask(b.c)
if(r.u(0,B.bd)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.u(0,B.be))a.a.cullFace(A.Av(a,b.x))
if(r.u(0,B.cU)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.u(0,B.ba)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.u(0,B.bb))a.a.blendFunc(A.wl(a,b.e),A.wl(a,b.f))
if(r.u(0,B.bc))a.a.blendEquation(A.At(a,b.r))
if(r.u(0,B.cS))a.a.colorMask(!0,!0,!0,!0)
if(r.u(0,B.cT)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
Au(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dc(a,b,c,d,e,f){var s
if(a.b!==B.h)A.j(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.Au(a,b))},
c7(a,b){var s
if(a.b!==B.h)A.j(A.l(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.j(A.l(u.k))
s=a.e
if(s==null)throw A.d(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bX(c.b))
break
case 1:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.f(p,0)
n=p[0]
if(1>=o)return A.f(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.f(p,0)
n=p[0]
if(1>=o)return A.f(p,1)
m=p[1]
if(2>=o)return A.f(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.f(p,0)
n=p[0]
if(1>=o)return A.f(p,1)
m=p[1]
if(2>=o)return A.f(p,2)
l=p[2]
if(3>=o)return A.f(p,3)
A.af(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniform1i(q,A.a(c.b))
break}},
bi(a,b){if(a.b!==B.h)A.j(A.l(u.k))
a.a.bindVertexArray(A.b(b.a))},
aw(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.j(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.i4){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.i3){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
Az(a,b,c){var s,r,q,p
if(a.b!==B.h)A.j(A.l(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.a(p.ELEMENT_ARRAY_BUFFER),c,A.a(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
AA(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
wo(a,b){var s,r,q,p
if(a.b!==B.h)A.j(A.l(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.d(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.bT?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.AA(a,b.b))
return new A.de(r)},
wm(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
wn(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
uo(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.j(A.l(u.k))
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
if(p)A.af(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.af(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.wm(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.wm(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.wn(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.wn(a,p))
j=a.r.u(0,"EXT_texture_filter_anisotropic")
i=j?a.fu(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.j(A.av(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.de(new A.i4(r,l,k,q,!1))},
up(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.j(A.l(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.d(A.w("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.d(A.w("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.af(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.af(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
kn(a,b){a.a.deleteTexture(t.fL.a(b.a).a)},
AC(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.j(A.l(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.i(r.createFramebuffer())
if(q==null)throw A.d(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aH
if(n&&!a1.e)throw A.d(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.bV||o===B.fk
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.e([A.a(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.a(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.a(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.af(r,c,[A.a(p.WebGL2RenderingContext.RENDERBUFFER),o,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.a(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.af(r,c,[A.a(p.WebGL2RenderingContext.RENDERBUFFER),o,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.e([A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.i(r.createTexture())
r.bindTexture(A.a(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.af(r,b,[A.a(p.WebGL2RenderingContext.TEXTURE_2D),1,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
A.af(r,a,[A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.i(r.createTexture())
r.bindTexture(A.a(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.af(r,b,[A.a(p.WebGL2RenderingContext.TEXTURE_2D),1,A.a(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(p.WebGL2RenderingContext.LINEAR))
A.af(r,a,[A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.e([A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.i(r.createRenderbuffer())
r.bindRenderbuffer(A.a(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.af(r,c,[A.a(p.WebGL2RenderingContext.RENDERBUFFER),o,A.a(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.i(r.createTexture())
r.bindTexture(A.a(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.af(r,b,[A.a(p.WebGL2RenderingContext.TEXTURE_2D),1,A.a(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.a(p.WebGL2RenderingContext.TEXTURE_2D),A.a(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(p.WebGL2RenderingContext.NEAREST))
A.af(r,a,[A.a(p.WebGL2RenderingContext.FRAMEBUFFER),A.a(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.a(r.checkFramebufferStatus(A.a(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.a(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.a(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.uq(a0,q,l,k,f,e,j,i)
throw A.d(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.de(new A.i3(q,l,k,f,e,j,i,s,a1.b,a1.c))},
uq(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cK(a){var s
if(a.b!==B.h)A.j(A.l(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.d(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.de(s)},
wp(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.d(A.jX(b===A.v9(A.x6(A.y_(),r),q,t.S)?B.cN:B.cO,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a3(A.cQ(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aJ(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.jX(b===A.v9(A.x6(A.y_(),r),q,t.S)?B.cN:B.cO,s))}return o},
AB(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.j(A.l(u.k))
q=v.G
s=A.wp(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.wp(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.jK)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a3(A.cQ(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aJ(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.jX(B.cP,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.t)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.jX(B.cQ,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.jX(B.cQ,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.de(n)},
de:function de(a){this.a=a},
i4:function i4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i3:function i3(a,b,c,d,e,f,g,h,i,j){var _=this
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
l8:function l8(a){this.a=a
this.b=!1},
km:function km(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
ql:function ql(a){this.a=a},
qm:function qm(a){this.a=a},
r3:function r3(){},
l7:function l7(){},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lZ(a,a0){var s=0,r=A.bn(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$lZ=A.bq(function(a1,a2){if(a1===1)return A.bj(a2,r)
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
d=A.b(p.createGain())
c=A.b(p.createConvolver())
b=new A.iv(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.bz,A.r(o,t.h6))
b.jF(p,a0)
p=A.p(a).i("O<1,2>")
s=3
return A.aj(A.n4(A.oh(new A.O(a,p),p.i("bM<al>(o.E)").a(new A.m_(b)),p.i("o.E"),t.mj),t.c),$async$lZ)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.kH():n
c.buffer=p
q=b
s=1
break
case 1:return A.bk(q,r)}})
return A.bl($async$lZ,r)},
iv:function iv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
m_:function m_(a){this.a=a},
m1:function m1(a,b){this.a=a
this.b=b},
m0:function m0(a,b){this.a=a
this.b=b},
m2:function m2(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
yH(a,b,c,d,e,f,g){var s=new A.lQ(c,f,b,g,new A.c(d.a,d.b,d.c),e,a)
s.jH(a,b,c,d,0,e,f,g)
return s},
yD(a,b){var s=new A.lz(b)
s.jE(a,b)
return s},
yG(a){var s,r,q,p,o,n=t.z
n=A.r(n,n)
for(s=new A.O(a,A.p(a).i("O<1,2>")).gt(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.az(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.lM(A.bt(n,r,t.a))
n.jG(a)
return n},
CF(a,b){var s,r,q,p=b>>>0
for(s=new A.dW(a),r=t.gS,s=new A.aU(s,s.gq(0),r.i("aU<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.xO(p,q==null?r.a(q):q)}return p&2147483647},
iw:function iw(a,b){this.a=a
this.b=b},
lQ:function lQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lR:function lR(){},
lz:function lz(a){this.a=a},
lA:function lA(){},
fF:function fF(){},
lB:function lB(){},
lM:function lM(a){this.a=a},
lO:function lO(){},
lP:function lP(){},
lN:function lN(){},
u2:function u2(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e},
lY:function lY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
lT:function lT(a){this.a=a},
lU:function lU(){},
hz:function hz(a,b){this.a=a
this.b=b},
mi:function mi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
mX:function mX(a){this.a=a},
k4:function k4(a,b,c,d,e,f,g,h,i,j){var _=this
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
nc:function nc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
nd:function nd(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=0
this.$ti=b},
jg:function jg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1
_.w=!0
_.x=d
_.y=e},
zt(a){var s,r,q,p,o=t.N,n=A.r(o,t.a)
for(s=new A.O(a,A.p(a).i("O<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=A.az(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.nQ(n)},
nQ:function nQ(a){this.a=a},
nT:function nT(){var _=this
_.c=_.b=_.a=!1
_.d=0},
jt:function jt(a){this.a=a},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ok:function ok(a,b){this.a=a
this.b=b},
ho(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.br(a)
s=a.length
if(!(b<s))return A.f(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.f(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.f(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.f(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.f(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.f(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.f(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.f(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.f(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.f(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.f(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.f(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.f(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.f(a,r)
a[r]=l
return b+14},
cG:function cG(a){this.a=a
this.b=0},
p_:function p_(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
p8:function p8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
A5(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.w5(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.jk(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.kN(new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0))
r=t.S
q=A.cy(800,0,!1,r)
p=new Float32Array(8064)
o=J.jk(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.kL(new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0),new A.c(0,0,0),0,1,0,0,0)
n=A.cy(4000,0,!1,r)
m=new A.c(0.3,0.7,-0.5).ga8()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.p1(a,new A.nc(a,A.r(t.m,r)),b,c,A.a6(t.N),j,i,h,g,q,p,A.r(r,t.hX),o,n,m,B.hp,new A.c(0,0,0),new A.c(0,0,1),new A.c(0,1,0),new A.c(1,0,0),new A.jt(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.jQ(a,b,c)
return k},
p1:function p1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aK=a
_.aU=b
_.bh=c
_.bi=d
_.e7=_.i2=1
_.eh=_.eg=_.im=_.il=_.ik=_.ij=_.ii=_.ih=_.ef=_.ee=_.ed=_.ec=_.eb=_.ea=_.e9=_.ig=_.ie=_.ic=_.e8=_.ib=_.ia=_.i9=_.i8=_.i7=_.i6=_.i5=_.i4=_.i3=_.ak=$
_.cv=null
_.h9=e
_.hA=_.hz=_.hy=_.hx=_.hw=_.hv=_.hu=_.ht=_.hs=_.hr=_.hq=_.hp=_.ho=_.hn=_.hm=_.hl=_.hk=_.hj=_.hi=_.hh=_.hg=_.hf=_.he=_.hd=_.hc=_.hb=_.ha=_.cw=$
_.cz=0
_.dR=_.dQ=_.dP=_.dO=_.dN=_.dM=_.dL=$
_.cD=_.cC=_.cB=_.cA=_.bV=_.bg=null
_.bW=$
_.hD=_.hC=_.hB=!1
_.mE=1
_.dS=f
_.dT=g
_.mF=h
_.hE=i
_.cE=0
_.hF=j
_.mG=k
_.dU=0
_.dV=l
_.mH=1
_.dW=!1
_.bX=0
_.dX=m
_.bY=0
_.hG=n
_.hH=o
_.hK=_.hJ=_.hI=1
_.hL=0.4
_.dY=p
_.hM=q
_.dZ=r
_.e_=s
_.e0=a0
_.hN=_.e4=_.e3=_.e2=_.e1=0
_.hO=null
_.hP=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.hY=_.e6=_.e5=_.hX=_.hW=_.mK=_.mJ=_.mI=_.hV=_.hU=_.hT=_.hS=_.hR=_.hQ=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.hZ=a7
_.i_=a8
_.i0=a9
_.i1=b0},
xk(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.aj(0,c).bd(f.aj(0,c)).ga8(),r=A.t9(g)
return A.xr(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
im(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.br(a)
s=a.length
if(!(b<s))return A.f(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.f(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.f(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.f(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.f(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.f(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.f(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.f(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.f(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.f(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.f(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.f(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.f(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.f(a,r)
a[r]=l
return b+14},
xr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.im(a,A.im(a,A.im(a,A.im(a,A.im(a,A.im(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
t9(a){return new A.ae((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
BX(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aW(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a9(),i=A.a9(),h=A.a9()
switch(B.c.a2(o,6)){case 0:j.b=c
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
h.b=l}s=j.dq()
if(typeof s!=="number")return s.a3()
s=B.d.aO(s*255)
r=i.dq()
if(typeof r!=="number")return r.a3()
r=B.d.aO(r*255)
q=h.dq()
if(typeof q!=="number")return q.a3()
return new A.ae(s,r,B.d.aO(q*255))},
hG:function hG(){},
l0:function l0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
kN:function kN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
kL:function kL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
p2:function p2(){},
p3:function p3(a){this.a=a},
p4:function p4(a){this.a=a},
qp:function qp(){},
pR:function pR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
ke(a,b,c){return new A.c(a,b,c)},
wj(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.c(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
c:function c(a,b,c){this.a=a
this.b=b
this.c=c},
mf:function mf(a){this.a=a},
z1(a,b,c){var s=new A.iV(a,c,null,b)
s.jK(a,null,null,b,c)
return s},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
ze(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.eZ(new A.R(B.hJ,t.gl.a(new A.mO(a)),t.ns),t.no)
return s==null?null:new A.eV(s)},
zd(a){if(a.a!==21)return null
if(a.e)return B.dS
if(!a.d&&a.b>=0.6&&a.c>=3)return B.dT
return B.dR},
c1:function c1(a,b){this.a=a
this.b=b},
mL:function mL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eV:function eV(a){this.a=a},
mO:function mO(a){this.a=a},
zO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.A(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.jJ(s,new A.c(o,n,m),q,p,l,j)
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
jJ:function jJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
CH(a){var s,r,q,p=A.r(t.N,t.z)
for(s=a.gL(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.e5)
p.k(0,q,r.b)}return p},
lc(a){var s,r,q,p,o,n=a.gV().bG(0)
B.a.a0(n)
s=t.z
r=A.r(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.t)(n),++p){o=n[p]
r.k(0,o,A.x0(a.h(0,o)))}return A.bt(r,t.N,s)},
x0(a){var s
if(t.f.b(a))return A.lc(A.CH(a))
if(t.j.b(a)){s=t.z
return A.an(J.eG(a,A.DC(),s),s)}if(a==null||A.bY(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.eH)
return a}throw A.d(A.a5("presentation snapshot contains unsupported value "+J.eF(a).p(0),null,null))},
oK:function oK(a){this.a=a},
w6(a,b,c){var s=A.uF(b),r=A.uF(a)
if(c!==2)A.j(A.av(c,"version","unsupported save version"))
return new A.f7(c,s,r)},
uF(a){var s,r,q,p,o=A.p(a).i("aa<1>"),n=A.N(new A.aa(a,o),o.i("o.E"))
B.a.a0(n)
o=t.z
s=A.r(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.t)(n),++q){p=n[q]
s.k(0,p,A.x_(a.h(0,p)))}return A.bt(s,t.N,o)},
x_(a){var s,r,q,p
if(t.f.b(a)){s=A.r(t.N,t.z)
for(r=a.gL(),r=r.gt(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.ey)
s.k(0,p,q.b)}return A.uF(s)}if(t.j.b(a)){r=t.z
return A.an(J.eG(a,A.DE(),r),r)}if(a==null||A.bY(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.eI)
return a}throw A.d(A.a5("save contains unsupported value "+J.eF(a).p(0),null,null))},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
pe:function pe(){},
ej:function ej(a,b){this.a=a
this.b=b},
vC(a,b,c,d,e,f,g){return new A.n7(a,b,c,d,e,f,g,A.e([],t.mc),A.e([],t.ag))},
vD(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aO(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.d(B.ex)
r=e.h(0,"runSeed")
q=A.aO(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aO(p)||p<1||typeof o!="number")throw A.d(B.eP)
if(!isFinite(480))throw A.d(A.av(480,"daySeconds","must be finite and > 0"))
n=new A.j3(p,480)
if(!isFinite(o)||o<0||o>=24)A.j(A.a5("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.zE(a3,A.aT(a,s,m))
k=A.yZ(l,A.aT(b,s,m),n)
j=A.vG(d)
A.zs(A.aT(a0,s,m)).lD(j)
m=A.aT(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bY(f))A.j(B.ed)
return A.vC(d,q,j,n,l,k,new A.iT(i,h,g,f))},
BM(a){var s
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
e3:function e3(a,b){this.a=a
this.b=b},
j2:function j2(){},
n8:function n8(a,b){this.a=a
this.b=b},
n7:function n7(a,b,c,d,e,f,g,h,i){var _=this
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
n9:function n9(a){this.a=a},
na:function na(){},
yJ(a){var s,r,q,p,o,n,m="modelScale",l=A.lj(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.aI(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.eo)
s=A.dO(l,"houseId")
r=A.dO(l,"sourceRef")
q=J.eG(A.lg(l,"rooms"),new A.m4(k),t.fS)
q=A.N(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.eG(A.lg(l,"portals"),new A.m5(k),t.gE)
p=A.N(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.eG(A.lg(l,"stairs"),new A.m6(),t.d2)
o=A.N(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.eG(A.lg(l,"exteriorCells"),new A.m7(),t.N)
n=A.N(n,n.$ti.i("a1.E"))
n.$flags=1
return new A.m3(s,r,q,p,o)},
yK(a,b){var s=A.lj(a,"room"),r=A.dO(s,"id"),q=A.xz(s.h(0,"origin"),"origin",b),p=A.xz(s.h(0,"size"),"size",b),o=J.eG(A.lg(s,"windows"),new A.m9(b),t.lJ)
o=A.N(o,o.$ti.i("a1.E"))
o.$flags=1
return new A.eI(r,q,p,o)},
lj(a,b){return t.P.b(a)?a:A.ig(b+" is not an object")},
lg(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.ig(b+" is not a list")},
dO(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.ig(b+" is not a string")},
ij(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.ig(b+" is not finite")},
CU(a,b){var s,r
if(t.j.b(a)){s=J.aB(a)
s=s.gq(a)!==3||s.M(a,new A.td())}else s=!0
if(s)return A.ig(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.S(a);r.m();)s.push(A.aI(r.gn()))
return s},
xz(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.CU(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)p.push(s[q]*c)
return p},
ig(a){return A.j(A.a5(a,null,null))},
m3:function m3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
m4:function m4(a){this.a=a},
m5:function m5(a){this.a=a},
m6:function m6(){},
m7:function m7(){},
m8:function m8(a){this.a=a},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m9:function m9(a){this.a=a},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
eH:function eH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eJ:function eJ(a){this.b=a},
td:function td(){},
iE:function iE(a,b){this.a=a
this.b=b
this.d=null},
mk:function mk(a){this.a=a},
jw:function jw(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
kp:function kp(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nv:function nv(){this.b=0},
pa:function pa(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
b1:function b1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iY:function iY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mQ:function mQ(){},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(){},
nw:function nw(a,b,c){this.a=a
this.b=b
this.c=c},
DN(a){var s,r,q,p,o,n,m,l
a.D()
s=a.a
r=s.length
q=r*14
p=new Float32Array(q)
for(o=0;o<r;++o){n=s[o]
m=o*14
if(!(m<q))return A.f(p,m)
p[m]=n.a
l=m+1
if(!(l<q))return A.f(p,l)
p[l]=n.b
l=m+2
if(!(l<q))return A.f(p,l)
p[l]=n.c
l=m+3
if(!(l<q))return A.f(p,l)
p[l]=n.d
l=m+4
if(!(l<q))return A.f(p,l)
p[l]=n.e
l=m+5
if(!(l<q))return A.f(p,l)
p[l]=n.f
l=m+6
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+7
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+8
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+9
if(!(l<q))return A.f(p,l)
p[l]=0
l=m+10
if(!(l<q))return A.f(p,l)
p[l]=1
l=m+11
if(!(l<q))return A.f(p,l)
p[l]=n.r
l=m+12
if(!(l<q))return A.f(p,l)
p[l]=n.w
l=m+13
if(!(l<q))return A.f(p,l)
p[l]=n.x}s=a.c
return new A.c4(B.a0,p,new Uint16Array(A.Z(a.b)),new A.iq(new A.H(s.a,s.b,s.c),new A.H(s.d,s.e,s.f)))},
DO(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
a3.D()
s=t.S
r=A.r(s,t.L)
for(q=a3.b,p=q.length,o=t.t,n=a3.a,m=0;m<p;m+=3){l=q[m]
k=m+1
if(!(k<p))return A.f(q,k)
j=q[k]
k=m+2
if(!(k<p))return A.f(q,k)
i=q[k]
k=n.length
if(!(l<k))return A.f(n,l)
h=n[l].x
if(!(j<k))return A.f(n,j)
g=n[j].x
if(g===h){if(!(i<k))return A.f(n,i)
f=n[i].x!==h}else f=!0
if(f){if(!(i<k))return A.f(n,i)
throw A.d(A.w("QHMX triangle "+m+" crosses material slots "+h+", "+g+", "+n[i].x,null))}k=r.h(0,h)
if(k==null){k=A.e([],o)
r.k(0,h,k)}B.a.K(k,A.e([l,j,i],o))}e=A.e([],t.bp)
q=r.$ti.i("aa<1>")
q=A.N(new A.aa(r,q),q.i("o.E"))
B.a.a0(q)
p=q.length
k=t.ph
d=0
for(;d<q.length;q.length===p||(0,A.t)(q),++d){h=q[d]
g=r.h(0,h)
g.toString
c=A.r(s,s)
b=A.e([],k)
a=A.e([],o)
for(f=g.length,a0=0;a0<g.length;g.length===f||(0,A.t)(g),++a0){a1=g[a0]
a2=c.h(0,a1)
if(a2==null){a2=b.length
c.k(0,a1,a2)}if(a2===b.length){if(!(a1>=0&&a1<n.length))return A.f(n,a1)
B.a.l(b,n[a1])}B.a.l(a,a2)}B.a.l(e,new A.iZ(h,A.DN(new A.jc(b,new Uint16Array(A.Z(a)),A.By(b)))))}return e},
By(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.iY(r,q,p,o,n,m)},
iZ:function iZ(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
mR:function mR(){},
D4(a){var s,r,q,p=new A.nw(A.e([],t.ph),A.e([],t.t),A.r(t.N,t.S))
for(s=0;s<4;++s)A.BP(p,a,B.cj[s],10.5,10.5,8.03,0.42)
p.v(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.v(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.v(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.v(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.v(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.v(1,11,0,11,-0.5,-0.35,10.58)
p.v(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.v(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.b1(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.b1(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.bt(r,new A.b1(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.bt(r,q,new A.b1(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.b1(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.b1(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.bt(q,new A.b1(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.bt(q,r,new A.b1(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.v(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.Cx(p,10.5,10.5,8.03,10.88)
A.BA(p,10.5,10.5,10.88)
A.BL(p,10.5,10.5,8.03)
A.BS(p,a,10.5)
A.CC(p,10.5,10.5)
A.Bx(p,10.5)
return p.lL()},
BP(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.dA)
for(s=b6.b,r=s.length,q=B.B!==b7,p=B.l!==b7,o=B.m===b7,n=B.O===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=b6.aT(k)
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
B.a.l(b4,new A.dH(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.az(i),b=J.S(h.a),h=new A.L(b,h.b,h.$ti.i("L<1>"));h.m();){a=b.gn()
if(!a.Q||a.aE(i)!==b7)continue
B:{if(!p||o){a0=g+a.af(i)
break B}if(!q||n){a0=e+a.af(i)
break B}a0=null}B.a.l(b4,new A.dH(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.l||b7===B.m?b8:b9
r=t.i
a1=A.aC([0,s],r)
a2=A.aC([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.t)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.N(a1,a1.$ti.c)
B.a.a0(a4)
a5=A.N(a2,a2.$ti.c)
B.a.a0(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.f(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.f(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.f(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.M(b4,new A.rS(b0,b1,b2,b3)))continue
switch(m){case 0:b5.v(0,b1,b3,0,b0,b2,r)
break
case 2:b5.v(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.v(0,0,b3,b1,r,b2,b0)
break
case 1:b5.v(0,s,b3,b1,b8,b2,b0)
break}}A.BR(b5,b4,b7,b8,b9,c1)
A.BQ(b5,b4,b7,b8,b9,c1)},
BQ(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.t)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.v(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.v(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.v(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.v(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.v(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.v(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.l)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.v(2,a+0.18,n,r,a,a1,p)}}},
BR(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.t)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.v(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.v(e,a1,a,l,a0,b,m)
a2.v(e,a1,b,l,c,b-0.06,m)
a2.v(e,a1,a+0.06,l,c,a,m)
if(f)a2.v(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.v(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.v(e,a1,a,j,a0,b,k)
a2.v(e,a1,b,j,c,b-0.06,k)
a2.v(e,a1,a+0.06,j,c,a,k)
if(f)a2.v(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.v(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.v(e,l,a,a1,m,d,a0)
a2.v(e,l,d,a1,m,d-0.06,b)
a2.v(e,l,a+0.06,a1,m,a,b)
if(f)a2.v(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.v(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.v(e,o,a,a1,p,d,a0)
a2.v(e,o,d,a1,p,d-0.06,b)
a2.v(e,o,a+0.06,a1,p,a,b)
if(f)a2.v(3,p,a,c+0.07,n,d,c)
break}if(!f)A.CA(a2,g,a4,a5,a6,a7,q)}},
CA(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.v(3,o+0.025,m,r,o-0.025,n,s)
a.v(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.v(3,o+0.025,m,r,o-0.025,n,s)
a.v(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.v(3,r,m,o+0.025,s,n,o-0.025)
a.v(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.v(3,r,m,o+0.025,s,n,o-0.025)
a.v(3,r,l+0.025,p,s,l-0.025,q)
break}},
Cx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.v(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.v(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.v(4,i,p,-0.38,j,q,-0.44)
a.v(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.v(5,h+0.5,p,o,h-0.5,r,q)}},
BA(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.v(0,g+0.35,k,n,g-0.35,l,q)
a.v(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.v(5,d+0.1,o,m,d-0.1,r,p)}}},
BL(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.v(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.v(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.v(6,j,b+0.06,d,k,b,e)}a.v(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
BS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.af("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.v(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.v(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.v(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.v(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.v(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)
k=r-0.18
a.v(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.v(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
CC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.v(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.v(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.v(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.v(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.v(6,m,j+0.06,l,s,j,n)}a.v(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.v(6,i+0.34,0.22,s,i,0.1,h)}},
Bx(a,b){var s,r
a.v(0,6.7,1,-4.05,-2.5,0,-4.4)
a.v(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.v(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.v(7,b+3,0,-4.55,-3,-0.08,-5.2)},
dH:function dH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rS:function rS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
DD(a,b,c,d){var s,r,q,p,o,n=A.vd(a,c,b)
if(n!=null&&!n.e){s=n.b
return new A.e0(B.dX,s)}r=A.xY(a,c,b)
if(r!=null)return new A.e0(B.dY,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.xZ(a,c,b)!=null)return B.e2
q=A.xX(a,b,c,d)
if(q!=null){p=d.cp(q.c)
o=q.y
return new A.e0(B.e_,o==null?"inspect the "+p.b:"inspect "+o)}return B.e1},
xX(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a0==null)return null
s=c.e.h(0,b)
if(s==null)return null
for(r=a0.nx(b),q=J.S(r.a),r=new A.L(q,r.b,r.$ti.i("L<1>")),p=a0.c,o=s.d,n=o.a,m=o.b,o=o.c,l=null,k=3;r.m();){j=q.gn()
if(!j.x)continue
i=a0.cp(j.c)
h=j.f.a
g=j.iR(i,p)
f=a.a
e=new A.c(n+(h.a*p+0)-f.a,m+(h.b*p+(g.a+g.b)*0.5)-f.b,o+(h.c*p+0)-f.c)
d=e.gq(0)
if(d<0.01||d>3)continue
h=e.ga8()
f=a.b
if(Math.acos(B.d.N(h.a*f.a+h.b*f.b+h.c*f.c,-1,1))>0.5236||d>=k)continue
k=d
l=j}return l},
dq:function dq(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.c=b},
xI(a,b){var s,r=new A.cG(new Float32Array(5376)),q=new A.cG(new Float32Array(5376)),p=new A.cG(new Float32Array(5376)),o=new A.cG(new Float32Array(5376)),n=b.d,m=a.aT(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cN(new A.c(l,k,j),new A.c(l,k,h),new A.c(f,k,h),new A.c(f,k,j),11053224,g,i)
A.Bn(r,b,m)
k+=m.b
q.cN(new A.c(l,k,j),new A.c(f,k,j),new A.c(f,k,h),new A.c(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.Bq(p,a,b,m,B.cj[s])
for(l=a.az(b.a),k=J.S(l.a),l=new A.L(k,l.b,l.$ti.i("L<1>"));l.m();){j=k.gn()
if(j.at==null||j.as)continue
A.wP(o,b,m,j,!0)}A.Bl(p,b,m)
A.Bo(p,a,b,m)
return new A.pb(B.q.aH(r.a,0,r.b),B.q.aH(q.a,0,q.b),B.q.aH(p.a,0,p.b),B.q.aH(o.a,0,o.b))},
D2(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.cG(new Float32Array(5376))
r=a.aT(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.wQ(s,b,r,c,q)
return B.q.aH(s.a,0,s.b)},
D3(a,b){var s,r,q,p=new A.cG(new Float32Array(5376)),o=a.aT(b)
for(s=a.az(b.a),r=J.S(s.a),s=new A.L(r,s.b,s.$ti.i("L<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.wP(p,b,o,q,!1)}return B.q.aH(p.a,0,p.b)},
Bn(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aW(e/0.22)
for(r=c+0.004,q=a1.a,p=d+q,o=c+0.014,n=0;n<s;++n){m=b+n*0.22+0.018
l=(n&1)===0?7952963:7031607
A.z(a,new A.c(d,r,m),new A.c(p,o,m+0.15),l)}r=a0.a
p=r==="hall"
if(p||r==="landing"){k=p?1:0.82
j=d+(q-k)*0.5
q=j+k
e=b+e
A.z(a,new A.c(j,c+0.016,b+0.18),new A.c(q,c+0.026,e-0.18),6443866)
A.z(a,new A.c(j+0.08,c+0.027,b+0.22),new A.c(q-0.08,c+0.033,e-0.22),8548460)}if(r==="living-room"){A.z(a,new A.c(d+1.15,c+0.018,b+2.15),new A.c(d+4.7,c+0.03,b+4.35),5589578)
A.z(a,new A.c(d+1.28,c+0.031,b+2.28),new A.c(d+4.57,c+0.037,b+4.22),7824746)}return}if(e==="floor-linoleum"){for(e=b+0.18,r=d+0.08,q=c+0.004,p=d+a1.a-0.08,o=c+0.012,n=0;n<5;++n){m=e+n*0.62
i=(n&1)===0?7764332:6843233
A.z(a,new A.c(r,q,m),new A.c(p,o,m+0.5),i)}return}if(e==="floor-tiles"){for(e=d+0.08,r=b+0.08,q=c+0.004,p=c+0.012,h=0;h<4;++h)for(g=e+h*0.86,o=g+0.78,f=0;f<3;++f){m=r+f*0.86
i=(h+f&1)===0?12170408:10657172
A.z(a,new A.c(g,q,m),new A.c(o,p,m+0.78),i)}return}if(e==="floor-concrete"){A.z(a,new A.c(d+0.08,c+0.004,b+0.08),new A.c(d+a1.a-0.08,c+0.014,b+a1.c-0.08),7828331)
A.z(a,new A.c(d+2.2,c+0.015,b+2.45),new A.c(d+2.68,c+0.021,b+2.93),4868420)}},
Bo(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
switch(b3.a){case"living-room":a7=a8+b4.a
s=a7-0.48
r=b0+b4.c*0.4
A.z(b1,new A.c(s,a9,r-0.85),new A.c(a7,a9+2.55,r+0.85),7824724)
A.z(b1,new A.c(s-0.38,a9+0.02,r-0.72),new A.c(a7+0.05,a9+0.16,r+0.72),a2)
q=a9+2.34
A.z(b1,new A.c(s-0.52,a9+2.18,r-0.94),new A.c(a7+0.08,q,r+0.94),a3)
p=s-0.02
A.z(b1,new A.c(p,a9+0.45,r-0.48),new A.c(a7+0.03,a9+1.48,r+0.48),2170396)
for(a7=s-0.08,o=a9+0.28,n=r-0.42,m=a9+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.z(b1,new A.c(a7+j,o,n),new A.c(p+j,m,l),a4)}for(a7=s-0.01,p=a9+1.55,o=s+0.04,n=a9+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.z(b1,new A.c(a7,p,l+j),new A.c(o,n,m+j),a2)}for(a7=[r-0.68,r+0.56],p=s-0.42,o=a9+2,n=s-0.26,m=a9+2.2,i=0;i<2;++i){h=a7[i]
A.z(b1,new A.c(p,o,h),new A.c(n,m,h+0.16),a5)}A.z(b1,new A.c(s-0.27,q,r-0.58),new A.c(s-0.07,a9+2.52,r-0.38),a6)
A.z(b1,new A.c(s-0.25,q,r+0.34),new A.c(s-0.06,a9+2.49,r+0.52),a3)
break
case"hall":A.Bp(b1,b2,b3,b4,a5,a4)
A.z(b1,new A.c(a8+0.28,a9+0.78,b0+0.52),new A.c(a8+0.68,a9+0.88,b0+2.15),a5)
for(a7=[b0+0.66,b0+2.01],q=a8+0.34,p=a8+0.42,o=a9+0.8,i=0;i<2;++i){g=a7[i]
A.z(b1,new A.c(q,a9,g),new A.c(p,o,g+0.08),a3)}f=a8+1.22
a7=b0+0.1
A.z(b1,new A.c(f-0.28,a9+2.35,b0+0.02),new A.c(f+0.28,a9+3.02,a7),a5)
A.z(b1,new A.c(f-0.13,a9+2.48,a7),new A.c(f+0.13,a9+2.72,b0+0.15),a2)
a7=b0+0.08
A.z(b1,new A.c(f-0.025,a9+1.82,a7),new A.c(f+0.025,a9+2.36,b0+0.13),a4)
for(q=a8+1.7,p=a9+1.74,o=a8+1.78,n=a9+1.84,m=b0+0.16,k=0;k<3;++k){l=k*0.36
A.z(b1,new A.c(q+l,p,a7),new A.c(o+l,n,m),a4)}a7=a9+0.72
A.z(b1,new A.c(a8+0.86,a9,b0+0.62),new A.c(a8+1.1,a7,b0+0.9),a6)
A.z(b1,new A.c(a8+0.91,a7,b0+0.68),new A.c(a8+1.05,a9+0.82,b0+0.84),a5)
break
case"kitchen":a7=a8+b4.a
e=a7-0.62
q=a9+1.28
A.z(b1,new A.c(e,a9,b0+0.72),new A.c(a7,q,b0+2.18),a4)
A.z(b1,new A.c(e-0.08,q,b0+0.62),new A.c(a7+0.04,a9+1.38,b0+2.28),a2)
for(a7=e+0.12,q=a9+1.39,p=b0+0.88,o=e+0.4,n=a9+1.45,m=b0+1.16,k=0;k<3;++k){l=k*0.4
A.z(b1,new A.c(a7,q,p+l),new A.c(o,n,m+l),2170396)}a7=a9+0.82
q=a9+0.94
A.z(b1,new A.c(a8+1.05,a7,b0+1.15),new A.c(a8+3.1,q,b0+2.35),a3)
for(p=[a8+1.18,a8+2.94],o=b0+1.28,n=b0+1.38,i=0;i<2;++i){d=p[i]
A.z(b1,new A.c(d,a9,o),new A.c(d+0.1,a7,n),a5)}A.z(b1,new A.c(a8+0.48,a9+1.72,b0+2.74),new A.c(a8+2.55,a9+1.84,b0+2.88),a5)
a7=a9+1.02
A.z(b1,new A.c(a8+3.38,q,b0+1.26),new A.c(a8+4.48,a7,b0+2.22),a6)
q=b0+1.66
p=b0+1.74
A.z(b1,new A.c(a8+3.82,a7,q),new A.c(a8+3.9,a9+1.34,p),a4)
A.z(b1,new A.c(a8+3.72,a9+1.3,q),new A.c(a8+4,a9+1.36,p),a4)
for(a7=a8+1.38,q=a9+0.95,p=b0+1.48,o=a8+1.78,n=a9+1.05,m=b0+1.88,k=0;k<2;++k){l=k*0.55
A.z(b1,new A.c(a7+l,q,p),new A.c(o+l,n,m),a6)}break
case"cellar":for(a7=a8+0.35,q=b0+1.05,p=a8+0.58,o=a9+0.55,n=b0+2,k=0;k<4;++k){m=k*0.28
A.z(b1,new A.c(a7+m,a9,q),new A.c(p+m,o+B.c.a2(k,2)*0.18,n),a5)}A.z(b1,new A.c(a8+2.55,a9+0.15,b0+0.38),new A.c(a8+2.72,a9+1.55,b0+0.56),a4)
A.z(b1,new A.c(a8+2.42,a9+1.28,b0+0.32),new A.c(a8+2.86,a9+1.38,b0+0.65),a6)
A.z(b1,new A.c(a8+0.4,a9+1.72,b0+0.45),new A.c(a8+3.4,a9+1.82,b0+0.58),a4)
A.z(b1,new A.c(a8+1.9,a9+1.58,b0+0.42),new A.c(a8+2.06,a9+1.76,b0+0.61),a4)
A.z(b1,new A.c(a8+1.84,a9+1.62,b0+0.55),new A.c(a8+2.12,a9+1.7,b0+0.64),a4)
break
case"bedroom":c=a8+0.85
b=b0+2.08
a7=a9+0.72
A.z(b1,new A.c(c,a9+0.42,b),new A.c(c+3.65,a7,b+2.05),6972528)
A.z(b1,new A.c(c-0.1,a7,b-0.12),new A.c(c+3.75,a9+1.28,b+0.1),a3)
A.z(b1,new A.c(c+0.22,a9+0.74,b+1.35),new A.c(c+1.05,a9+0.9,b+1.82),a6)
a7=a8+b4.a
q=a9+1.48
A.z(b1,new A.c(a7-0.95,a9+0.78,b0+0.58),new A.c(a7-0.18,q,b0+1.42),a3)
A.z(b1,new A.c(a7-1.04,q,b0+0.48),new A.c(a7-0.1,a9+1.57,b0+1.52),a5)
for(a7=[b+0.22,b+0.78],q=c+0.36,p=a9+0.75,o=c+1.12,n=a9+0.92,i=0;i<2;++i){a=a7[i]
A.z(b1,new A.c(q,p,a),new A.c(o,n,a+0.42),a6)}for(a7=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=a9+0.08,n=a9+0.44,i=0;i<2;++i){a0=a7[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.z(b1,new A.c(a0,o,g),new A.c(l,n,g+0.1),a5)}}break
case"landing":a7=a8+0.48
A.z(b1,new A.c(a8+0.34,a9+0.02,b0+1.62),new A.c(a7,a9+1.06,b0+2.7),a5)
for(q=a9+0.82,p=b0+1.68,o=a8+2.14,n=a9+0.9,m=b0+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.z(b1,new A.c(a7,q+l,p+j),new A.c(o,n+l,m+j),a3)}for(a7=a8+0.62,q=a9+1.02,p=b0+1.74,o=a8+0.7,n=a9+1.78,m=b0+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.z(b1,new A.c(a7+l,q,p+j),new A.c(o+l,n,m+j),a5)}break
case"bathroom":a7=a9+0.62
A.z(b1,new A.c(a8+0.3,a9+0.04,b0+0.38),new A.c(a8+2.15,a7,b0+1.22),a6)
q=a9+0.72
A.z(b1,new A.c(a8+0.42,a7,b0+0.48),new A.c(a8+2.03,q,b0+1.12),a2)
a7=a8+b4.a
p=b0+b4.c
A.z(b1,new A.c(a7-0.78,a9+0.12,p-0.88),new A.c(a7-0.18,a9+1.75,p-0.28),a6)
A.z(b1,new A.c(a7-0.86,a9+1.68,p-0.98),new A.c(a7-0.1,a9+1.82,p-0.18),a4)
p=b0+0.68
a7=a9+1.18
o=b0+0.78
A.z(b1,new A.c(a8+0.86,q,p),new A.c(a8+0.96,a7,o),a4)
A.z(b1,new A.c(a8+0.7,a9+1.12,p),new A.c(a8+1.12,a7,o),a4)
break
case"spare-room":A.z(b1,new A.c(a8+1,a9,b0+0.7),new A.c(a8+3.25,a9+1.65,b0+2),6972528)
A.z(b1,new A.c(a8+0.8,a9+1.6,b0+0.52),new A.c(a8+3.45,a9+1.74,b0+2.18),a3)
a7=a8+b4.a
q=b0+b4.c
A.z(b1,new A.c(a7-1.05,a9,q-1.02),new A.c(a7-0.25,a9+0.72,q-0.24),a5)
for(p=a7-0.98,o=a9+0.18,n=q-1.12,a7-=0.28,m=a9+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.z(b1,new A.c(p,o+l,n),new A.c(a7,m+l,q),a4)}break}},
Bp(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gP(a)
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
A.z(a0,new A.c(p,c,b-0.18),new A.c(o,c+0.11,b+0.18),a4)}k=a+0.08
h=a+0.34
A.z(a0,new A.c(p-0.1,k,g),new A.c(p,h,i),3680031)
A.z(a0,new A.c(o,k,g),new A.c(o+0.1,h,i),3680031)
h=a+1.52
k=h<m?h:m
A.z(a0,new A.c(o+0.16,a+1.42,g+0.25),new A.c(o+0.25,k,i-0.25),a5)},
Bq(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.l||a4===B.m?a3.a:a3.c,a=A.e([],t.a9)
for(s=a2.a,r=a1.az(s),q=J.S(r.a),r=new A.L(q,r.b,r.$ti.i("L<1>"));r.m();){p=q.gn()
if(!p.as&&p.aE(s)===a4)a.push(new A.dG(p.af(s),p.af(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.dG(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aC([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.t)(a),++o){m=a[o]
r.K(0,A.e([m.a,m.b],p))}l=A.N(r,r.$ti.c)
B.a.a0(l)
s=A.aC([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.t)(a),++o){m=a[o]
s.K(0,A.e([m.c,m.d],p))}k=A.N(s,s.$ti.c)
B.a.a0(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.M(a,new A.r7(f,e,d,c)))continue
A.CV(a0,a2,a3,a4,f,e,d,c)}A.Br(a0,a2,a3,a4,b,a)},
Br(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.r5(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.r5(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.r5(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.r5(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.b_(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.b_(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.b_(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.b_(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.K(a9),o=r.i("n(1)").a(new A.r6(b3)),a9=B.a.gt(a9),r=new A.L(a9,o,r.i("L<1>")),o=b2.c,i=b3!==B.l,e=b3===B.m,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.b_(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.b_(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.b_(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.b_(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.Bs(b0,b1,b2,b3,b,p)}},
Bs(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
if(a2==="hall"||a7.r||a7.f<1)return
s=a6===B.l||a6===B.m?a5.a:a5.c
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
A.b_(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.b_(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.b_(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.b_(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.b_(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
r5(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.CK(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.b_(a,b,c,d,n,o,g,h,i,j)}},
CK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.e([new A.fi(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.t)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fi(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fi(n,j))}h=p}return h},
Bl(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.ju.u(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.z(a,new A.c(p-0.025,n,o-0.025),new A.c(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.z(a,new A.c(p-0.14,k,o-0.14),new A.c(p+0.14,n,o+0.14),j)
A.z(a,new A.c(p-0.09,n-0.16,o-0.09),new A.c(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.z(a,new A.c(h-0.24,k,e-0.24),new A.c(h+0.24,s,e+0.24),l)
j=s-0.034
A.z(a,new A.c(h-0.15,j,e-0.15),new A.c(h+0.15,k,e+0.15),l)
A.z(a,new A.c(h-0.055,s-0.048,e-0.055),new A.c(h+0.055,j,e+0.055),l)},
b_(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.z(a,new A.c(r+e,q+g,p),new A.c(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.z(a,new A.c(r+e,q+g,s-i),new A.c(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.z(a,new A.c(s-i,q+g,p+e),new A.c(s,q+h,p+f),j)
return
case 3:A.z(a,new A.c(r,q+g,p+e),new A.c(r+i,q+h,p+f),j)
return}},
z(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.c(o,n,m),k=c.a,j=new A.c(k,n,m),i=c.b,h=new A.c(k,i,m),g=new A.c(o,i,m)
m=c.c
s=new A.c(o,n,m)
r=new A.c(k,n,m)
q=new A.c(k,i,m)
p=new A.c(o,i,m)
a.ap(j,l,g,h,d)
a.ap(s,r,q,p,d)
a.ap(l,s,p,g,d)
a.ap(r,j,h,q,d)
a.ap(l,j,r,s,d)
a.ap(g,p,q,h,d)},
CV(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
l=d.a
switch(l){case 0:s=new A.c(k+e,j+g,i)
break
case 2:s=new A.c(k+f,j+g,i+c.c)
break
case 1:s=new A.c(k+c.a,j+h,i+f)
break
case 3:s=new A.c(k,j+h,i+e)
break
default:s=m}switch(l){case 0:r=new A.c(k+f,j+g,i)
break
case 2:r=new A.c(k+e,j+g,i+c.c)
break
case 1:r=new A.c(k+c.a,j+h,i+e)
break
case 3:r=new A.c(k,j+h,i+f)
break
default:r=m}switch(l){case 0:q=new A.c(k+f,j+h,i)
break
case 2:q=new A.c(k+e,j+h,i+c.c)
break
case 1:q=new A.c(k+c.a,j+g,i+e)
break
case 3:q=new A.c(k,j+g,i+f)
break
default:q=m}switch(l){case 0:p=new A.c(k+e,j+h,i)
break
case 2:p=new A.c(k+f,j+h,i+c.c)
break
case 1:p=new A.c(k+c.a,j+g,i+f)
break
case 3:p=new A.c(k,j+g,i+e)
break
default:p=m}switch(l){case 0:o=new A.c(0,0,0.003)
break
case 2:o=new A.c(0,0,-0.003)
break
case 1:o=new A.c(-0.003,0,0)
break
case 3:o=new A.c(0.003,0,0)
break
default:o=m}a.cN(s.a4(0,o),r.a4(0,o),q.a4(0,o),p.a4(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.CW(b,d)
switch(l){case 0:o=new A.c(s.a,s.b,s.c-n)
break
case 2:o=new A.c(r.a,s.b,s.c)
break
case 1:o=new A.c(s.a,s.b,p.c)
break
case 3:o=new A.c(s.a-n,s.b,s.c)
break
default:o=m}switch(l){case 0:l=new A.c(r.a,q.b,s.c)
break
case 2:l=new A.c(s.a,q.b,s.c+n)
break
case 1:l=new A.c(s.a+n,q.b,r.c)
break
case 3:l=new A.c(p.a,q.b,r.c)
break
default:l=m}A.z(a,o,l,9145227)},
CW(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
wP(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aE(d),b=a3.af(d),a=b+a3.w
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
A.z(a0,new A.c(r+l,s,d),new A.c(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(l,s,d),new A.c(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.z(a0,new A.c(r+n,s+m,d),new A.c(r+h,j,i),q)
A.z(a0,new A.c(k,s,d),new A.c(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.z(a0,new A.c(r+l,s,k),new A.c(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(l,s,k),new A.c(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.z(a0,new A.c(r+n,s+m,k),new A.c(r+h,i,d),q)
A.z(a0,new A.c(j,s,k),new A.c(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.z(a0,new A.c(n,s,d+k),new A.c(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(n,s,k),new A.c(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.z(a0,new A.c(n,s+e,d+m),new A.c(r,j,d+l),q)
A.z(a0,new A.c(n,s,i),new A.c(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.z(a0,new A.c(r,s,d+l),new A.c(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.z(a0,new A.c(r,s,l),new A.c(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.z(a0,new A.c(r,s+e,d+n),new A.c(k,j,d+m),q)
A.z(a0,new A.c(r,s,i),new A.c(k,s+0.05,l),q)
break}if(a4)A.wQ(a0,a1,a2,a3,q)
A.Bm(a0,a1,a2,a3)},
Bm(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.af(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aE(d)
d=a0-0.035
if(0>d)d=0
r=s!==B.l
q=!r||s===B.m?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.035
A.b_(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.m,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.b_(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.b_(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.b_(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
wQ(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aE(o),m=d.af(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.z(a,new A.c(p,s,o),new A.c(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.z(a,new A.c(p,s,o-d.w),new A.c(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.z(a,new A.c(p-d.w,s,o),new A.c(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.z(a,new A.c(p,s,o),new A.c(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.z(a,new A.c(p,s,o),new A.c(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.z(a,new A.c(p,s,o-0.055),new A.c(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.z(a,new A.c(p-0.055,s,o),new A.c(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.z(a,new A.c(p,s,o),new A.c(p+0.055,s+r,o+d.w),e)
break}},
pb:function pb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r7:function r7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r6:function r6(a){this.a=a},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a,b){this.a=a
this.b=b},
vG(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.e([],b4),b6=t.aN,b7=A.e([],b6),b8=A.e([],t.jn),b9=t.N
b9=new A.nt(b5,b7,b8,A.r(b9,t.J),A.r(b9,t.U),new A.nv())
s=t.cJ
r=t.s
q=t.cs
p=t.jc
B.a.K(b5,A.e([new A.aX(n,B.ai,new A.c(4.5,3.9,4),new A.c(0,0,0),A.e([new A.b7("living-north-west",B.l,0.5,0.9,1.2,1.8,!1,!0),new A.b7("living-north-east",B.l,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.bc(m,l,new A.c(1,1.95,1),!1,!1,m),new A.bc(k,j,new A.c(3,1.95,3),!1,!1,k)],q),B.aQ,"wallpaper-stripes",i,h,B.I),new A.aX(g,B.ai,new A.c(2.5,3.9,7),new A.c(4.5,0,0),A.e([new A.b7("hall-fanlight",B.l,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.bc("mantle-hall","the hall mantle",new A.c(1,1.95,3.5),!1,!1,o)],q),A.e([new A.by(e,e,new A.c(0.2,2.175,0.35)),new A.by(d,d,new A.c(2.2,2.55,3)),new A.by(c,c,new A.c(0.4,1.35,4.1))],p),b,i,h,B.I),new A.aX(a,B.ai,new A.c(4.5,3.75,3),new A.c(0,0,4),A.e([new A.b7("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.b7("kitchen-west",B.O,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.bc(a0,"the mantle by the stove",new A.c(0.8,1.8,0.5),!1,!1,a0),new A.bc("mantle-kitchen-second",l,new A.c(2.2,1.8,2),!1,!1,o),new A.bc("mantle-kitchen-third",j,new A.c(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.by(a1,a1,new A.c(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.fP),new A.aX("cellar",B.ai,new A.c(4,3,4),new A.c(1,-3,2),B.cd,A.e(["hall-cellar"],r),B.hn,B.aQ,"wallpaper-damp","floor-concrete","ceiling-pipes",B.I),new A.aX("bedroom",B.aj,new A.c(4.5,3.6,4),new A.c(0,4.2,0),A.e([new A.b7("bedroom-north-west",B.l,0.7,1.05,1.1,1.65,!1,!0),new A.b7("bedroom-north-east",B.l,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.bc(a2,"the bedroom mantle",new A.c(1,1.95,1),!1,!1,a2),new A.bc("mantle-bedroom-bedside","the bedside mantle",new A.c(3.5,1.5,3),!1,!1,o)],q),A.e([new A.by(a3,a3,new A.c(2.2,1.125,2.5)),new A.by(a4,a4,new A.c(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.I),new A.aX(a5,B.aj,new A.c(2.5,3.6,3),new A.c(4.5,4.2,0),B.cd,A.e(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.e([new A.bc("mantle-landing","the landing mantle",new A.c(1,1.8,1.5),!1,!1,o)],q),B.aQ,b,i,h,B.I),new A.aX(a7,B.aj,new A.c(2.5,3.6,2.5),new A.c(4.5,4.2,3),A.e([new A.b7("bathroom-east",B.B,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a6],r),A.e([new A.bc("mantle-bathroom","the bathroom mantle",new A.c(1.5,1.8,1),!1,!1,o)],q),A.e([new A.by(a8,a8,new A.c(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.I),new A.aX(a9,B.aj,new A.c(4.5,3.15,3),new A.c(0,4.2,4),A.e([new A.b7("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.bc("mantle-spare","the broken mantle",new A.c(2,1.95,1),!1,!0,o)],q),A.e([new A.by(b0,b0,new A.c(0.5,1.8,0.3)),new A.by(b1,b1,new A.c(3.7,2.1,2.7)),new A.by(b2,b2,new A.c(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.I)],b4))
B.a.K(b7,A.e([A.dz(g,"outside","kit-front-door-recessed",!0,B.l,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.dz(g,n,b3,!1,B.O,B.B,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.dz(g,a,b3,!1,B.O,B.B,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.dz(a,n,b3,!1,B.l,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.dz(g,"cellar","kit-cellar-door-grille",!1,B.m,B.B,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.dz(g,a5,o,!1,B.B,B.B,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.dz(a5,"bedroom",b3,!1,B.O,B.B,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.dz(a5,a7,b3,!1,B.m,B.l,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.dz(a5,a9,b3,!1,B.m,B.l,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.l(b8,new A.dB("hall-stairs",f,B.hg,new A.c(5,0,2.8),new A.c(6.5,6.3,6),new A.c(5.75,2.475,5.8),new A.c(5.75,6.675,2.2)))
b9.k5()
b9.kG()
b4=b5.length
if(b4!==8)A.j(A.l("expected eight rooms, got "+b4))
b4=b9.go5()
if(b4!==9)A.j(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gaG(b8)
b4=B.a.gS(B.a.gaG(b8).c)
if(b4!==6.3)A.j(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.j(A.l("expected nine physical portals"))
b9.lu()
b9.ls()
return b9},
nt:function nt(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
nK:function nK(){},
nL:function nL(){},
nJ:function nJ(){},
nM:function nM(a){this.a=a},
nN:function nN(){},
vd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.c(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga8()
j=a.b
if(Math.acos(B.d.N(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
xY(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.az(c),r=J.S(s.a),s=new A.L(r,s.b,s.$ti.i("L<1>")),q=null,p=3;s.m();){o=r.gn()
n=b.nz(c,o)
m=a.a
l=new A.c(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.xa(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
xZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
m=A.CX(b,i,n)
l=a.a
k=new A.c(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.xa(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
xa(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.N(a.ga8().bU(c.b),-1,1))<=e},
CX(a,b,c){var s=a.aT(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.c(q.a+r,p,q.c)
break
case 2:q=new A.c(q.a+r,p,q.c+s.c)
break
case 1:q=new A.c(q.a+s.a,p,q.c+r)
break
case 3:q=new A.c(q.a,p,q.c+r)
break
default:q=null}return q},
mP:function mP(){this.a=null
this.b=0},
pS:function pS(){},
pT:function pT(){},
zx(a){var s=A.ik(a,"inventory asset"),r=A.dh(s,"id"),q=A.dh(s,"kind")
A.dh(s,"source")
A.dh(s,"proxy")
A.dh(s,"pivot")
s=A.ik(s.h(0,"bounds"),"inventory bounds")
return new A.cv(r,q,new A.nU(A.ln(s.h(0,"min"),"bounds.min"),A.ln(s.h(0,"max"),"bounds.max")))},
zy(a){var s,r,q,p,o,n,m,l="stateKey",k=A.ik(a,"inventory placement"),j=A.ik(k.h(0,"visibility"),"placement visibility"),i=A.ik(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dh(k,"id"),f=A.dh(k,"roomId"),e=A.dh(k,"assetId")
A.dh(k,"role")
s=typeof k.h(0,"socket")=="string"?A.A(k.h(0,"socket")):null
k=A.ik(k.h(0,"transform"),"inventory transform")
r=A.ln(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.j(B.eB)
q=A.ln(k.h(0,"position"),"transform.position")
p=A.ln(k.h(0,"rotation"),"transform.rotation")
A.dh(j,"layer")
if(typeof j.h(0,l)=="string")A.A(j.h(0,l))
o=J.a3(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.A(i.h(0,"focusId")):null
m=t.P.b(h)?A.Co(h,"radius"):0
return new A.cf(g,f,e,s,new A.nW(q,p,r),o,n,m)},
ik(a,b){return t.P.b(a)?a:A.df(b+" is not an object")},
dh(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.df(b+" is not a string")},
Co(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.df(b+" is not finite")},
ln(a,b){var s
if(t.j.b(a)){s=J.aB(a)
s=s.gq(a)!==3||s.M(a,new A.tc())}else s=!0
if(s)return A.df(b+" is not a finite vec3")
s=J.aB(a)
return new A.c(A.aI(s.h(a,0)),A.aI(s.h(a,1)),A.aI(s.h(a,2)))},
df(a){return A.j(A.a5(a,null,null))},
ny:function ny(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nB:function nB(a){this.a=a},
nz:function nz(a){this.a=a},
nA:function nA(a){this.a=a},
cv:function cv(a,b,c){this.a=a
this.b=b
this.f=c},
cf:function cf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
nW:function nW(a,b,c){this.a=a
this.b=b
this.c=c},
nU:function nU(a,b){this.a=a
this.b=b},
tc:function tc(){},
nV:function nV(a){this.a=a},
cC:function cC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jd:function jd(a){this.a=a},
nC:function nC(a){this.a=a},
dz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bz(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
fS:function fS(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
b7:function b7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bz:function bz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bc:function bc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(){},
dB:function dB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aX:function aX(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
zr(a){return A.zq(a)},
zq(a){var s,r,q,p,o,n,m=A.xi(a,"sound emitter"),l=t.N,k=A.r(l,l)
for(s=A.xi(m.h(0,"cues"),"sound emitter cues").gL(),s=s.gt(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.ew)
k.k(0,r.a,q)}s=A.v1(m,"id")
r=A.v1(m,"roomId")
p=A.v1(m,"placementId")
o=A.CT(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.fr("gain is not a number")
return new A.ct(s,r,p,o,n,A.bt(k,l,l))},
xi(a,b){return t.P.b(a)?a:A.fr(b+" is not an object")},
v1(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.fr(b+" is not a string")},
CT(a,b){var s
if(t.j.b(a)){s=J.aB(a)
s=s.gq(a)!==3||s.M(a,new A.tb())}else s=!0
if(s)throw A.d(A.a5(b+" must be a numeric vec3",null,null))
s=J.aB(a)
return new A.c(A.aI(s.h(a,0)),A.aI(s.h(a,1)),A.aI(s.h(a,2)))},
fr(a){return A.j(A.a5(a,null,null))},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
nF:function nF(a){this.a=a},
nG:function nG(a){this.a=a},
nH:function nH(){},
ct:function ct(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nu:function nu(){this.b=this.a=null},
fW:function fW(a){this.a=a},
nD:function nD(){this.b=this.a=null},
eY:function eY(a,b){this.a=a
this.b=b},
tb:function tb(){},
vH(a,b,c,d,e,f){var s=t.N
return new A.nI(e,f,c,a,A.bt(A.aT(d,s,s),s,s),A.an(b,s))},
vI(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.r(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
h.k(0,p.a,new A.ha(p.ax,p.ay))}s=A.r(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.t)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.r(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.t)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){j=o[l]
i.k(0,j.a,new A.h2(j.d,j.r))}return A.vH(a.r.b,B.o,i,B.cr,h,s)},
zs(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.i_
r=a3.h(0,"mantleHistory")
if(r==null)r=B.hw
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aO(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.eu)
p=t.N
o=A.r(p,t.ku)
for(n=a.gL(),n=n.gt(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bK)
l=A.aT(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bY(j)||!A.bY(i))A.j(B.bK)
o.k(0,k,new A.ha(j,i))}h=A.r(p,t.y)
for(n=a0.gL(),n=n.gt(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bY(l.b))throw A.d(B.er)
h.k(0,k,A.U(l.b))}g=A.r(p,t.mK)
for(n=a1.gL(),n=n.gt(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.bI)
l=A.aT(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bY(f)||!A.bY(e))A.j(B.bI)
g.k(0,k,new A.h2(f,e))}d=A.r(p,p)
for(q=s.gL(),q=q.gt(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.eX)
d.k(0,n,A.A(p.b))}c=A.e([],t.s)
for(q=J.S(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.e3)
B.a.l(c,b)}return A.vH(a2,c,g,d,o,h)},
uX(a,b){return a.a.a===b.a&&a.a6(0,b.gaC(b))},
nI:function nI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ha:function ha(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
zb(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.js(e,A.K(e).c)
q=new A.fe()
q.d1((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.fN(a,q,2,r,1+s,A.aC(["time"],t.N))
break
case 3:A.fN(a,q,3,r,1+s,A.aC(["place"],t.N))
break
case 4:A.fN(a,q,4,r,2+s,p)
A.z7(a,q,4)
break
case 5:A.fN(a,q,5,r,s,p)
A.z5(a,q,5)
break
case 6:A.fN(a,q,6,r,s,p)
A.z6(a,q)
A.za(a,q,6)
break
case 7:A.z8(a,q,7)
break
default:if(s>0)A.fN(a,q,b,r,s,p)}},
z4(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.u(0,b.a))return!1
if(A.z9(a,b,c))return!1
return!0},
fN(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));s.m();){r=s.d
if(A.z4(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.d_(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.vA(a,b,o[p],f)}},
vA(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aT(B.a.gS(o).a,n,n)
if(d==null)s=A.e(B.w.slice(0),t.s)
else{n=t.nn
s=A.N(new A.R(B.w,t.dC.a(new A.mK(d)),n),n.i("o.E"))}n=s.length
if(n===0)return
n=b.aF(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.eO(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aF(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.dF(c.a,m,B.a.gS(o).b)},
z7(a,b,c){var s=A.vB(a,b,c)
if(!a.bR(s))return
a.eW(c,t.G.a(s),0,B.aL,null)},
vB(a,b,c){var s,r,q,p,o,n=t.N,m=A.r(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.w[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aF(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
z5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.d_(i,b)
s=i.length
if(0>=s)return A.f(i,0)
q=i[0]
if(1>=s)return A.f(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aT(B.a.gS(i).a,s,s)
r=p.c
n=A.aT(B.a.gS(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.w[m]
k=o.h(0,l)
j=s.eO(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aF(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.dF(q.a,o,B.a.gS(i).b)
a.dF(p.a,n,B.a.gS(r).b)},
z6(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aF(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.ag(0,q[r].a)},
za(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aF(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.vA(a,b,q[s],null)},
z8(a,b,c){var s=c+1,r=A.vB(a,b,s)
if(!a.bR(r))return
a.eW(s,t.G.a(r),0,B.aL,null)},
z9(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gS(b.c).c===B.am}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gS(b.c).c===B.am}if(c===21)return b.e
return!1},
mK:function mK(a){this.a=a},
Ar(a){var s,r,q,p,o=t.N,n=A.r(o,t.a)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p=A.az(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.qk(n)},
oa(a,b,c){var s,r,q,p=t.z
p=A.r(p,p)
for(s=0;s<5;++s){r=B.w[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.jr(A.bt(p,q,q),b,c)},
vT(a){var s=t.N
return A.oa(t.P.a(a.h(0,"fields")).bA(0,new A.ob(),s,s),A.aI(a.h(0,"shakiness")),A.zg(B.hj,A.A(a.h(0,"hand")),t.bU))},
zf(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.e([],t.b1)
for(s=J.S(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.vT(r.a(s.gn())))
s=A.aJ(a.h(0,"corroborator"))
q=A.U(a.h(0,"locked"))
p=A.wX(a.h(0,"lastReadDay"))
return new A.bL(n,m,l,s,q,p,o==null?null:A.vT(r.a(o)))},
ds:function ds(a,b){this.a=a
this.b=b},
qk:function qk(a){this.a=a},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
ob:function ob(){},
oc:function oc(a){this.a=a},
bL:function bL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vQ(a){return new A.nY(a,A.r(t.S,t.T),A.a6(t.N),A.e([],t.t))},
zE(a,b){var s,r,q,p,o=A.vQ(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.K(0,J.yu(s.a(b.h(0,"tags")),t.N))
for(s=J.S(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.zf(r.a(s.gn()))
q.k(0,p.a,p)}return o},
nY:function nY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
o4:function o4(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c){this.c=a
this.a=b
this.b=c},
ma:function ma(){},
mb:function mb(){},
eL:function eL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mc:function mc(){},
o9:function o9(){},
o8:function o8(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
oH:function oH(){},
oG:function oG(a,b,c){this.b=a
this.c=b
this.d=c},
oI:function oI(){},
ug(a){if(!isFinite(0))A.j(A.av(0,"interpolation",null))
return new A.p7(a)},
hf:function hf(a,b){this.a=a
this.b=b},
eh:function eh(a,b){this.a=a
this.b=b},
p7:function p7(a){this.a=a},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
w3(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.js(c,A.K(c).c)
r=A.N(r,A.p(r).c)
B.a.a0(r)
s=t.N
r=A.an(r,s)
r=new A.p5(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.bt(l,s,t.X))
r.jR(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
p6(a,b,c,d,e){var s=A.ld("RENDERER_SHA"),r=A.ld("GAME_SHA"),q=A.ld("DART_SDK_VERSION")
return A.w3(a,"0bacd2158890-9715bfc572f1-dirty",b,c,d,r,A.ld("LOCKFILE_SHA256"),e,A.ld("PROJECT_VERSION"),s,q,null)},
ld(a){var s=B.hS.h(0,a)
return s.length===0?null:s},
p5:function p5(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
vy(a,b,c,d,e,f,g){var s=A.N(f,t.ad)
if(b<0||a<0||e<0)A.j(A.a5("saved day-loop resources must not be negative",null,null))
return new A.mB(c,g,b,a,e,d===!0,s)},
yZ(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.ej)
s=A.e([],t.b2)
for(r=J.S(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.oB,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.ev)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aO(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.ef)
f=A.eZ(new A.R(B.c9,q.a(new A.mC(h)),p),o)
e=A.eZ(new A.R(B.cg,n.a(new A.mD(g)),m),l)
if(f==null||e==null)throw A.d(B.eS)
B.a.l(s,new A.f8(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aO(d)||!A.aO(c)||!A.aO(b)||!A.bY(a))throw A.d(B.eD)
return A.vy(c,d,a1,a,b,s,a3)},
bB:function bB(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
mB:function mB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mC:function mC(a){this.a=a},
mD:function mD(a){this.a=a},
jh:function jh(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.b=a
this.c=b},
eo:function eo(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
nO:function nO(a){this.c=a},
nR:function nR(a,b){this.a=a
this.b=b},
nS:function nS(){},
w5(){var s=A.uL(B.o),r=A.uL(B.o),q=new A.pd(B.D,s,r)
if(!isFinite(0))A.j(B.e4)
if(!B.a.a6(r,B.a.gaC(s)))A.j(B.eE)
if(q.a===B.D&&q.b!==0&&!q.e)A.j(B.e8)
return q},
uL(a){var s,r,q,p=A.e([],t.s),o=A.a6(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.eQ)
B.a.l(p,q)}return p},
c5:function c5(a,b){this.a=a
this.b=b},
pc:function pc(){},
cE:function cE(){},
pd:function pd(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
j3:function j3(a,b){this.a=a
this.b=6
this.c=b},
y0(a){var s=B.d.N(a,0,1)
if(s<=0.5)return A.xg(4491468,16777215,s*2)
return A.xg(16777215,16759637,(s-0.5)*2)},
y1(a){var s=B.d.N(a,0,1)
return new A.c(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga8()},
xg(a,b,c){var s,r=new A.t_(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.jm()
s=r.$1(8)
if(typeof s!=="number")return s.jm()
r=r.$1(0)
if(typeof r!=="number")return A.lq(r)
return(q<<16|s<<8|r)>>>0},
t_:function t_(a,b,c){this.a=a
this.b=b
this.c=c},
fa(a){var s,r,q=A.r(t.N,t.z)
for(s=a.gL(),s=s.gt(s);s.m();){r=s.gn()
q.k(0,B.c.p(r.a),r.b)}return q},
pX:function pX(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
pY:function pY(){},
pZ:function pZ(){},
en:function en(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a,b){this.a=a
this.b=b},
q_:function q_(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
q0:function q0(){},
q1:function q1(){},
yC(a){var s,r,q,p
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.e6)
s=new A.ly()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.uB(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.di(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aV(B.hA,new A.lw(a),new A.lx()))},
cm:function cm(a,b){this.a=a
this.b=b},
di:function di(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
ly:function ly(){},
lw:function lw(a){this.a=a},
lx:function lx(){},
lI:function lI(a,b){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0},
lK:function lK(a){this.a=a},
lJ:function lJ(a,b){this.a=a
this.b=b},
yI(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.eA)
s=new A.lV()
return new A.dj(s.$1$2(B.aR,a.h(0,"output"),t.cK),s.$1$2(B.aO,a.h(0,"dynamicRange"),t.cS),s.$1$2(B.aN,a.h(0,"reverb"),t.f1),s.$1$2(B.aM,a.h(0,"ducking"),t.oA))},
cd:function cd(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lV:function lV(){},
lW:function lW(a,b){this.a=a
this.b=b},
lX:function lX(a){this.a=a},
me:function me(a){this.a=a
this.b=null},
yN(a,b,c){var s,r,q=b.a
if(B.b.bI(q).length===0||B.b.bI(b.c).length===0)A.j(B.eK)
s=b.c
r=A.B(a,"button","brush-button brush-state-normal",s)
r.id=q
r.setAttribute("aria-label",s)
r.setAttribute("data-brush-kind",b.b.b)
r.setAttribute("data-brush-state","normal")
r.type="button"
r.disabled=!1
r.addEventListener("click",A.W(new A.mh(c)))
return r},
mh:function mh(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
vw(a){var s=!1
if(a.length!==0)if(!B.cM.u(0,a))s=B.jx.u(0,a)||B.jt.u(0,a)||!B.b.T(a,"Mouse")
return s},
BH(a){var s,r,q,p,o=t.N,n=A.r(o,t.a)
for(s=new A.O(a,A.p(a).i("O<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=A.az(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
Ch(a){var s,r,q=A.r(t.N,t.a),p=a==null?null:new A.O(a,A.p(a).i("O<1,2>"))
p=J.S(p==null?A.e([],t.cj):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
eS(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.f1(B.hP,s,r)
if(b!=null)q.K(0,b)
q.K(0,A.Ch(a))
s=new A.eR(g,d,h,e,f,c,A.bt(A.BH(q),s,r))
s.D()
return s},
yX(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.bJ)
s=a.h(0,"version")
r=J.dQ(s)
if(!r.W(s,1)&&!r.W(s,2))throw A.d(B.bJ)
q=A.r(t.N,t.a)
for(j=j.a(a.h(0,k)).gL(),j=j.gt(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.eq)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.yv(m,new A.mt())){o=A.e([],r)
for(l=J.S(m);l.m();)o.push(A.A(l.gn()))
q.k(0,n,o)}else throw A.d(B.ea)}j=A.aI(a.h(0,"horizontalSensitivity"))
r=A.aI(a.h(0,"verticalSensitivity"))
p=A.U(a.h(0,"invertX"))
o=A.U(a.h(0,"invertY"))
return A.eS(null,q,A.U(a.h(0,"holdToInteract")),j,p,o,2,r)},
uD(a){var s,r,q,p=t.N,o=A.r(p,t.a)
for(s=a.gL(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
r=A.N(r.b,p)
o.k(0,q,r)}return o},
uU(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
v5(a,b){var s,r,q,p=A.e([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
eR:function eR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mv:function mv(){},
mu:function mu(a){this.a=a},
mw:function mw(){},
mx:function mx(){},
my:function my(){},
mt:function mt(){},
dk:function dk(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.c=b},
iK:function iK(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
yW(a){var s=t.N,r=t.m
r=new A.iL(A.eS(null,null,!1,1,!1,!1,2,1),A.r(s,r),A.r(s,r),A.r(s,r),a,A.b(a.createElement("div")))
r.aP(a)
r.jJ(a)
return r},
iL:function iL(a,b,c,d,e,f){var _=this
_.r=_.f=null
_.w=a
_.x=$
_.y=b
_.z=c
_.Q=d
_.at=_.as=null
_.a=e
_.b=f
_.e=_.d=_.c=null},
mr:function mr(a,b){this.a=a
this.b=b},
ms:function ms(a){this.a=a},
mq:function mq(a,b){this.a=a
this.b=b},
mo:function mo(a,b,c){this.a=a
this.b=b
this.c=c},
mp:function mp(a,b,c){this.a=a
this.b=b
this.c=c},
z2(a){var s=A.e([],t.d)
s=new A.mF(A.B(a,"div","door",null),s)
s.jL(a)
return s},
mF:function mF(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.z=_.y=_.x=_.w=null
_.Q=!1},
mG:function mG(a,b){this.a=a
this.b=b},
mH:function mH(a){this.a=a},
mI:function mI(a,b){this.a=a
this.b=b},
mJ:function mJ(a,b){this.a=a
this.b=b},
zc(a){var s=new A.mM(a,A.b(a.createElement("div")))
s.aP(a)
s.jM(a)
return s},
mM:function mM(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
mN:function mN(a){this.a=a},
vE(a,b,c,d,e,f,g,h){return new A.nb(d,f,h,e,a,g,c,b)},
cY:function cY(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
nb:function nb(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
vF(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.ez)
s=new A.dr(1,B.a.aV(B.cb,new A.nn(a),new A.no()),A.A(a.h(0,"renderScale")),A.U(a.h(0,"dynamicResolution")),A.A(a.h(0,"frameTarget")),A.A(a.h(0,"antialiasing")),A.A(a.h(0,"textureQuality")))
s.D()
return s},
jb(a,b){var s=b==null?B.aK:b
return new A.np(s,a==null?B.aK:a)},
xT(a,b){var s,r,q
a.D()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dD(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dD("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.h4(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.c_&&b.a<2){q=q.h5(B.aJ)
B.a.l(s,"High preset was reduced to Standard")}return new A.ni(q,A.an(s,t.N))},
ce:function ce(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nn:function nn(a){this.a=a},
no:function no(){},
np:function np(a,b){this.a=a
this.b=b},
nh:function nh(a,b){this.a=a
this.b=b},
ni:function ni(a,b){this.a=a
this.b=b},
zo(a){var s=new A.ja(A.r(t.N,t.m),B.aK,a,A.b(a.createElement("div")))
s.aP(a)
s.jN(a)
return s},
ja:function ja(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
nl:function nl(a){this.a=a},
nm:function nm(a){this.a=a},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
nj:function nj(a){this.a=a},
zp(a){var s=new A.nr(a,A.b(a.createElement("div")))
s.aP(a)
s.jO(a)
return s},
nr:function nr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ns:function ns(a){this.a=a},
nZ:function nZ(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
o_:function o_(a){this.a=a},
o0:function o0(a){this.a=a},
o1:function o1(a,b,c){this.a=a
this.b=b
this.c=c},
o2:function o2(){},
o3:function o3(){},
B(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
x4(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.d)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
h9:function h9(){},
b3:function b3(a,b){this.a=a
this.b=b},
cA:function cA(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
oB:function oB(){},
oC:function oC(){},
bO:function bO(a,b,c){this.a=a
this.c=b
this.d=c},
oA:function oA(a){this.a=a},
oD:function oD(a){this.a=a},
cB:function cB(a,b){this.a=a
this.b=b},
oE:function oE(a,b){var _=this
_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
oF:function oF(a,b){this.a=a
this.b=b},
bx:function bx(a,b){this.a=a
this.b=b},
oP:function oP(a){this.a=a
this.b=null},
A7(a){var s=new A.pk(a,A.b(a.createElement("div")))
s.aP(a)
s.jT(a)
return s},
pk:function pk(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pl:function pl(a,b){this.a=a
this.b=b},
pm:function pm(a){this.a=a},
pn(a,b){var s=t.N,r=t.m
r=new A.hl(b,A.r(s,r),A.r(s,r),A.r(s,t.aL),A.r(s,r),$.y6(),B.ac,A.r(s,r),B.aB,A.r(s,r),a,A.b(a.createElement("div")))
r.aP(a)
r.jU(a,b)
return r},
hl:function hl(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.f=a
_.cx=_.CW=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.k1=f
_.k2=g
_.k3=h
_.k4=i
_.ok=j
_.a=k
_.b=l
_.e=_.d=_.c=null},
pH:function pH(a){this.a=a},
pI:function pI(a){this.a=a},
pJ:function pJ(a,b){this.a=a
this.b=b},
pK:function pK(a){this.a=a},
pL:function pL(a){this.a=a},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a){this.a=a},
po:function po(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a,b){this.a=a
this.b=b},
pB:function pB(a,b,c){this.a=a
this.b=b
this.c=c},
pu:function pu(a){this.a=a},
pv:function pv(a){this.a=a},
pw:function pw(a){this.a=a},
px:function px(a){this.a=a},
py:function py(a){this.a=a},
pz:function pz(a){this.a=a},
pA:function pA(a){this.a=a},
pt:function pt(a,b,c){this.a=a
this.b=b
this.c=c},
pp:function pp(a){this.a=a},
pq:function pq(a){this.a=a},
pr:function pr(a){this.a=a},
ps:function ps(a){this.a=a},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
pF:function pF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pN(a){return B.a.aV(B.C,new A.pO(a),new A.pP(a))},
A8(){var s,r,q=A.r(t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
q.k(0,r.a,r.e)}return q},
d7(a,b){var s=t.z
s=A.f1(A.A8(),s,s)
if(a!=null)s.K(0,a)
s=new A.pM(b,A.bt(s,t.N,t.K))
s.jV(a,b)
return s},
w8(a){var s,r=t.f
if(!r.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.eO)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.ei)
return A.d7(A.aT(s,t.N,t.K),A.a(a.h(0,"version")))},
be:function be(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
aM:function aM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pO:function pO(a){this.a=a},
pP:function pP(a){this.a=a},
pM:function pM(a,b){this.a=a
this.b=b},
uk(a,b){var s=b==null?A.d7(null,1):b
return new A.pQ(s,a==null?A.d7(null,1):a)},
A9(a,b){var s,r,q,p,o,n,m,l=A.r(t.N,t.K)
for(q=0;q<10;++q){s=B.C[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.jO(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cQ(r)
J.bI(l,s.a,r)}catch(n){if(!(A.ah(n) instanceof A.F))throw n}}m=A.d7(l,1)
return A.uk(m,m)},
pQ:function pQ(a,b){this.a=a
this.b=b},
Aa(a){var s=new A.pU(a,A.b(a.createElement("div")))
s.aP(a)
s.jW(a)
return s},
pU:function pU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
yF(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.od)
for(s=a.d,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gL(),n=n.gt(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cb(p+m+":"+k,m,l.a,l.b,j))}}B.a.a1(i,new A.lG())
return new A.lF(A.an(i,t.ot),A.a6(t.N))},
cb:function cb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lF:function lF(a,b){this.a=a
this.b=b},
lH:function lH(){},
lG:function lG(){},
Aq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.kI
s=t.g
r=A.r(s,t.kz)
q=A.p(e).i("aa<1>")
p=A.N(new A.aa(e,q),q.i("o.E"))
B.a.a0(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.t)(p),++l){k=p[l]
for(j=e.h(0,k).gL(),j=j.gt(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.bD(new A.bT(B.ku,k+" has an out-of-range authored day "+h+"."))
g=A.Ap(k,h,i.b,m)
if(g instanceof A.bD)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.k(0,new A.bC(k,h,f.a,f.b),o.a(g).a)}}return new A.kk(new A.kj(r,A.a6(t.N),A.a6(s),A.e([],t.bl),B.K))},
Ap(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.r(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.c7[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gL(),k=k.gt(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.jP(B.b.bn(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bD(new A.bT(B.kv,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cf
B.a.l(l,new A.c6(g,i.b,f))}if(l.length===0)continue
B.a.a1(l,new A.qe())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bD(new A.bT(B.cZ,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bD(new A.bT(B.cZ,a+" day "+s+" has no authored tiers."))
return new A.kM(c)},
kj:function kj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
qi:function qi(a){this.a=a},
qh:function qh(a){this.a=a},
qf:function qf(a){this.a=a},
qg:function qg(){},
qe:function qe(){},
kk:function kk(a){this.a=a},
kM:function kM(a){this.a=a},
Dg(a){var s,r,q,p=A.a6(t.N)
for(s=new A.O(a,A.p(a).i("O<1,2>")).gt(0);s.m();){r=s.d
for(q=r.b.gaq(),q=q.gt(q);q.m();)if(q.gn().gV().M(0,new A.tk())){p.l(0,r.a)
break}}s=A.N(p,p.$ti.c)
B.a.a0(s)
return s},
Df(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.az(b,!0,s)
B.a.a0(r)
q=new A.fe()
q.d1((a^913741)>>>0)
p=q.aF(4)
if(!(p>=0&&p<4))return A.f(B.c4,p)
o=B.c4[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.az(r,!0,s)
B.a.d_(m,q)
s=A.hq(m,0,A.dP(n,"count",t.S),A.K(m).c).bG(0)
B.a.a0(s)
return s},
tk:function tk(){},
wk(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aO(r)||!A.aO(q)||!A.aO(p)||r<1||q<0||q>23||p<0)return null
return new A.bC(s,r,q,p)},
Ao(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a6(t.N)
for(s=t.j,q=J.S(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a6(t.g)
for(s=J.S(s.a(a.h(0,j)));s.m();){n=A.wk(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.yE(m)
if(!s&&l==null)return i
return new A.kl(r,o,l)},
yE(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.wk(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aO(p))if(!(p<0))if(A.bY(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.eZ(new A.R(B.c7,t.nw.a(new A.lC(r)),t.na),t.kM)
k=A.eZ(new A.R(B.hN,t.bQ.a(new A.lD(q)),t.cB),t.nq)
m=o==null
j=m?h:A.eZ(new A.R(B.fX,t.hg.a(new A.lE(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.ir(s,l,k,p,j,n)},
bu:function bu(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cJ:function cJ(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(){},
ir:function ir(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lC:function lC(a){this.a=a},
lD:function lD(a){this.a=a},
lE:function lE(a){this.a=a},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
qj:function qj(){},
bD:function bD(a){this.a=a},
kh:function kh(a){this.a=a},
kg:function kg(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
lk(a){var s=$.b8
if(s===a&&B.b.u(A.A(a.b.className),"open"))return
if(s!=null)s.a5()
$.b8=a
if(a===$.cM.j())$.fE().iF("gameplay.viewport")
else $.fE().nv(A.xl(a))
s=$.aA.j()
s.w=!1
s.b1()
$.dK=0
a.bB()},
xj(a,b,c){var s,r,q
$.il=!0
s=$.b8
if(s!=null)s.a5()
$.b8=a
s=$.fE()
if(s.a.a.length===0)s.iF(c)
r=A.N(s.a.a,t.lf)
r.push(new A.d4(b,B.a4,c))
q=s.a
s.a=new A.dx(r,q.b,q.c)
s.kr(b)
s=$.aA.j()
s.w=!1
s.b1()
$.dK=0
a.bB()
$.il=!1},
fx(a){var s,r,q,p,o,n,m,l=null
if($.il)return
$.il=!0
a.a5()
$.b8=null
s=$.fE().lF()
$.il=!1
r=s.a
if(r===B.cE){$.dK=0
r=$.aA.j()
r.b1()
r.w=!0
q=A.i(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.cD)return
r=s.c.a
r=r.length===0?l:B.a.gS(r)
p=r==null?l:r.a
A:{if(B.aV===p){r=$.cM.j()
break A}if(B.aW===p){r=$.ic.j()
break A}r=l
break A}if(r!=null){o=s.d
$.b8=r
n=$.aA.j()
n.w=!1
n.b1()
$.dK=0
r.bB()
m=o==null?l:A.i(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
t8(a){if($.b8===a&&B.b.u(A.A(a.b.className),"open"))a.a5()
else A.lk(a)},
eB(a){var s
if($.il)return
if($.b8===a)$.b8=null
if(a===$.cM.j())$.fE().c5()
else $.fE().mv(A.xl(a))
$.dK=0
s=$.aA.j()
s.b1()
s.w=!0},
xl(a){if(a===$.cM.j())return B.cv
if(a===$.ic.j())return B.a4
if(a instanceof A.hl)return B.a4
if(a instanceof A.ja)return B.a4
if(a instanceof A.iL)return B.a4
if(a===$.ia.j())return B.iC
if(a===$.r4.j())return B.iD
if(a===$.i9.j())return B.iE
if(a===$.i8.j())return B.iG
return B.iF},
rj(a,b){var s
a.snk(new A.rk())
a.snm(new A.rl())
a.snl(new A.rm())
a.snh(new A.rr())
a.snj(new A.rs())
a.snu(new A.rt())
a.snp(new A.ru())
a.sno(new A.rv())
a.saX(b?new A.rw(a):new A.rx(a))
a.saY(b?new A.ry(a):new A.rn(a))
s=a.f
if(s===B.x)a.sna(new A.ro())
if(s===B.y){a.sn9(new A.rp())
a.snn(new A.rq())}},
BF(){var s=$.fo.j()
s.sem(new A.rg())
s.saX(new A.rh())
s.saY(new A.ri())},
Cl(){var s,r,q,p,o,n=null
try{n=A.aJ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aJ(n,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.eJ)
q=A.vF(r.h(0,"requested"))
$.rT=A.jb(A.vF(r.h(0,"effective")),q)}catch(s){$.rT=A.jb(null,null)}p=$.vl().a
o=A.xT(p,A.x7())
r=o.a
$.rT=A.jb(r,p)
$.fo.j().eM(p,r,o.b)
A.xo()},
x7(){var s,r,q,p,o=$.cN.j().gbe().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.jP(B.b.bn(p,12),null)
if(r==null)r=1}return new A.nh(r,B.a.u(o,"disjoint-timer-query"))},
xo(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.av($.vl().B(),null))}catch(s){}},
BE(){var s=$.i7.j()
s.sem(new A.rd())
s.saX(new A.re())
s.saY(new A.rf())},
Ck(){var s,r,q,p,o,n=null
try{n=A.aJ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.uI=A.yX(B.k.aJ(n,null))}catch(s){$.uI=A.eS(null,null,!1,1,!1,!1,2,1)}r=$.i7.j()
q=r.w=$.ls()
r.x=new A.iK(q)
p=r.y
o=p.h(0,"horizontalSensitivity")
if(o!=null)o.value=B.d.p(q.b)
p=p.h(0,"verticalSensitivity")
if(p!=null)p.value=B.d.p(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,"holdToInteract")
if(p!=null)p.checked=q.f
r.dr()
$.aA.j().eK($.ls().gcq())
r=$.aA.j()
q=$.ls()
p=r.x
p.a=q.f
p.ev()
r.b1()
A.xn()},
xn(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.av($.ls().B(),null))}catch(s){}},
Cj(){var s,r=null
try{r=A.aJ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.ie=A.yI(B.k.aJ(r,null))}catch(s){$.ie=B.aB}$.fm.j().j7($.ie)
A.xm()
A.uA()},
xm(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.av($.ie.B(),null))}catch(s){}},
uA(){var s=$.bm
if(s==null)return
s.jh($.ie)},
Ci(){var s,r=null
try{r=A.aJ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.eA=A.yC(B.k.aJ(r,null))}catch(s){$.eA=B.ac}$.ey.j().eJ($.eA)
A.uR()
A.r8()},
uR(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.av($.eA.B(),null))}catch(s){}},
r8(){var s,r,q=$.eA,p=$.t7,o=$.v3,n=q.d
if(n==null)n=1
if(n<0.8||n>2)A.j(B.eg)
s=q.b
p=s==null?p:s
s=q.c
o=s==null?o:s
q=q.e===!0
$.ll=p
s=$.bF.j()
s.f=$.ll?0.5:1
r=A.i(A.b(v.G.document).documentElement)
s=r==null
if(!s)A.U(A.b(r.classList).toggle("reduced-motion",p))
if(!s)A.U(A.b(r.classList).toggle("photosensitivity-safe",o))
if(!s)A.U(A.b(r.classList).toggle("captions-enabled",q))
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.u(n*100)+"%")
s=$.I.j()
s.setAttribute("data-accessibility-reduced-motion",""+p)
s.setAttribute("data-accessibility-photosensitivity-safe",""+o)
s.setAttribute("data-accessibility-ui-scale",A.u(n))
s.setAttribute("data-accessibility-captions",""+q)
if($.wR){p=$.bE.j()
p.c=q
if(!q){q=p.b
q.textContent=""
q.className="caption-cue"}}},
BY(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.rX(r,q)
r.addEventListener("change",A.W(new A.rV(s)))
q.addEventListener("change",A.W(new A.rW(s)))},
tr(){var s=0,r=A.bn(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6
var $async$tr=A.bq(function(c8,c9){if(c8===1){o.push(c9)
s=p}for(;;)switch(s){case 0:c4=v.G
c5=A.i(A.b(c4.document).getElementById("game"))
if(c5==null){s=1
break}$.I.b=c5
$.uK=A.i(A.b(c4.document).getElementById("fps"))
$.bW.b=$.yl().c8(A.hv().gbl().h(0,"renderer"))
A.BZ()
a7=$.I.j()
a8=A.a(A.b(c4.window).innerWidth)>0?A.a(A.b(c4.window).innerWidth):800
a7.width=a8
a8=$.I.j()
a7=A.a(A.b(c4.window).innerHeight)>0?A.a(A.b(c4.window).innerHeight):600
a8.height=a7
n=A.i(c5.getContext("webgl2"))
if(n==null){$.bW.b=B.bu.h8($.bW.j(),B.de)
g=B.aD.mq($.bW.j())
g.b6()
$.cN.b=g
A.xq()
A.dM("no-webgl2")
c4=A.i(A.b(c4.document).getElementById("credits"))
if(c4!=null)c4.textContent="this browser has no webgl2."
s=1
break}try{if($.bW.j().a===B.U){a7=t.dg
a8=t.N
a9=t.hL
b0=t.ob
b1=t.S
b2=t.fP
b3=new A.hR(n,A.a($.I.j().width),A.a($.I.j().height),A.e([],a7),A.r(a8,t.l0),A.e([],t.jj),A.r(a8,a9),A.r(a8,b0),A.r(a8,a9),A.r(a8,b0),A.e([],a7),A.r(b1,a9),A.r(b1,b0),A.r(a8,t.bS),A.e([],t.jU),B.hl,A.r(a8,t.lu),A.r(a8,b2),A.r(a8,b2),B.eY,B.iJ)}else b3=new A.fc(n,A.a($.I.j().width),A.a($.I.j().height),A.hv().gbl().h(0,"render")==="legacy",$.bW.j().d,$.bW.j().e)
m=b3
$.bo=m instanceof A.hR?m:null
$.lf=m instanceof A.fc?m:null
a7=B.aD.dG($.bW.j(),m)
a7.b6()
$.cN.b=a7}catch(c7){l=A.ah(c7)
k=A.cl(c7)
a7=$.bW.j()
$.bW.b=B.bu.h8(a7,B.dd)
$.lf=new A.fc(n,A.a($.I.j().width),A.a($.I.j().height),A.hv().gbl().h(0,"render")==="legacy",!0,$.bW.j().e)
a7=B.aD.dG($.bW.j(),$.lf)
a7.b6()
$.cN.b=a7
$.I.j().setAttribute("data-renderer-error",A.u(l))
if($.tY())$.I.j().setAttribute("data-renderer-error-stack",A.u(k))}A.xq()
p=4
A.dM("initializing")
$.bF.b=new A.mi(new A.c(0,0,0),new A.c(0,0,1),new A.c(0,1,0),new A.c(1,0,0))
$.t7=A.U(A.b(A.b(c4.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.v3=A.U(A.b(A.b(c4.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.ll=$.t7
a7=$.bF.j()
a7.f=$.ll?0.5:1
a7=A.b(c4.window)
a8=t.N
a9=t.s
b0=t.a
a9=A.zt(A.P(["moveForward",A.e(["KeyW"],a9),"moveBack",A.e(["KeyS"],a9),"moveLeft",A.e(["KeyA"],a9),"moveRight",A.e(["KeyD"],a9),"interact",A.e(["KeyE"],a9),"secondary",A.e(["KeyQ"],a9),"run",A.e(["ShiftLeft"],a9),"crouch",A.e(["ControlLeft"],a9),"rotate",A.e(["KeyR"],a9),"reach",A.e(["KeyF"],a9),"journal",A.e(["KeyJ"],a9),"sleep",A.e(["KeyL"],a9),"pause",A.e(["Escape"],a9)],a8,b0))
b1=A.b(a7.document)
a9=new A.jg(b1,A.a6(a8),A.a6(a8),new A.nT(),a9)
a7.addEventListener("keydown",A.W(a9.gkT()))
a7.addEventListener("keyup",A.W(a9.gkV()))
a7.addEventListener("mousemove",A.W(a9.gkZ()))
b1.addEventListener("pointerlockchange",A.W(a9.gkX()))
$.aA.b=a9
$.wN.b=new A.je(A.e([],t.oX),t.lv)
a9=$.I.j()
a7=A.a(A.b(c4.window).innerWidth)>0?A.a(A.b(c4.window).innerWidth):800
a9.width=a7
a7=$.I.j()
a9=A.a(A.b(c4.window).innerHeight)>0?A.a(A.b(c4.window).innerHeight):600
a7.height=a9
A.dM("renderer")
if($.bW.j().a===B.b_){a7=$.lf
if(a7==null)a7=null
else{a7=a7.r
a7===$&&A.h()}$.fw=a7
if(a7==null){g=A.l("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.dM("text")
a7=$.lu()
s=7
return A.aj(a7.c2(),$async$tr)
case 7:j=a7.o4()
i=A.Aq(j)
if(!(i instanceof A.kk)){h=t.cq.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aZ.b=i.a
$.la.b=A.yF(j)
g=A.r(a8,b0)
for(a9=t.j,b5=0;b5<5;++b5){f=B.w[b5]
b0=A.A(f)
b1=a7.c
b1===$&&A.h()
b6=b1.h(0,b0)
b0=a9.b(b6)?A.az(b6,!0,a8):B.o
J.bI(g,f,b0)}e=A.Ar(g)
$.uz.b=new A.mf(B.dK)
d=$.uz.j().nA(new A.ts(e))
if(d.a==null){g=B.bz.aF(2147483647)
if(!isFinite(480))A.j(A.av(480,"daySeconds","must be finite and > 0"))
b7=new A.j3(1,480)
b7.b=10
b8=A.vQ(e)
g=A.vC(42,1+g,A.vG(42),b7,b8,A.vy(6,16,b8,null,6,B.hm,b7),new A.iT(0,0,0,!1))}else{g=d.a
g.toString
g=A.vD(g,e)}$.Y.b=g
g=$.tZ()
a7=d.a
g.ex(a7==null?null:a7.c.h(0,"inventoryInspections"))
$.cN.j().b0(A.ug($.Y.j().gep()))
if(d.b!=null){g=d.b
g.toString
A.fy(g)}g=$.aZ.j()
a7=A.Df($.Y.j().b,A.Dg(j.b))
g.sjx(A.js(a7,A.K(a7).c))
A.dM("house")
$.a0.b=$.Y.j().c
a7=$.bo
if(a7!=null)a7.lE($.a0.j())
$.ez.b=$.Y.j().d
g=new A.c(5.5,1.65,3.5)
$.v4=$.uT=$.uZ=g
c=g.aj(0,new A.c(0,1.3499999999999999,0))
$.ib.b=new A.iE(c,J.vm(c,new A.c(0,1.2000000000000002,0)))
$.fn.b=new A.mP()
$.bG.b=A.w5()
$.aK="hall"
g=d.a
b=A.zO(g==null?null:g.c.h(0,"player"))
if(b!=null&&b.mV($.a0.j())){g=b.b
$.v4=$.uT=$.uZ=g
$.bZ=b.c
$.dN=b.d
$.aK=b.a
a=g.aj(0,new A.c(0,1.3499999999999999,0))
g=$.ib.j()
g.slG(a)
g.b=J.vm(a,new A.c(0,1.2000000000000002,0))
g=$.ib.j()
a7=$.a0.j()
b0=b.e
b1=b.f
g.nU($.aK,$.eE(),a7,b1,b0)
A.fy("restored position")}g=A.A7(A.b(c4.document))
g.snb(new A.tt())
g.saX(new A.tu())
g.saY(new A.tF())
$.ic.b=g
g=A.b(c4.document)
a7=A.b(g.createElement("div"))
b0=new A.oE(g,a7)
b0.aP(g)
a7.setAttribute("aria-label","Pause menu")
A.b(a7.appendChild(A.B(g,"h1","journal-title","Paused")))
A.b(a7.appendChild(A.B(g,"p","settings-copy","The house waits. Choose what to do next.")))
b9=A.B(g,"nav","pause-actions",null)
b9.setAttribute("aria-label","Pause actions")
b0.bo(g,b9,B.cw,"resume")
b0.bo(g,b9,B.cx,"settings")
b0.bo(g,b9,B.cy,"controls")
b0.bo(g,b9,B.cz,"save now")
b0.bo(g,b9,B.cA,"help")
b0.bo(g,b9,B.cB,"back")
A.b(a7.appendChild(b9))
b0.snq(new A.tI())
b0.saX(new A.tJ())
b0.sns(new A.tK())
b0.snf(new A.tL())
b0.snr(new A.tM())
b0.sni(new A.tN())
b0.saY(new A.tO())
$.cM.b=b0
b0=$.Y.j().e
a7=$.ez.j()
$.Y.j()
$.lb.b=new A.nR(b0,a7)
a7=A.b(c4.document)
b0=$.Y.j().e
g=$.ez.j()
b1=$.lb.j()
b2=A.b(a7.createElement("div"))
b1=new A.nZ(b0,g,b1,a7,b2)
b1.aP(a7)
b2.setAttribute("aria-label","The Journal")
A.b(b2.appendChild(A.B(a7,"div","journal-title","The Journal")))
c0=A.B(a7,"div","journal-pages",null)
g=A.B(a7,"div","page page-left",null)
b1.y!==$&&A.G()
b1.y=g
b0=A.B(a7,"div","page page-right",null)
b1.z!==$&&A.G()
b1.z=b0
A.b(c0.appendChild(g))
A.b(c0.appendChild(b0))
A.b(b2.appendChild(c0))
A.b(b2.appendChild(b1.ka()))
c1=A.B(a7,"div","tape-roll",null)
A.b(c1.style).setProperty("width","8rem")
b0=A.B(a7,"div","tape-fill",null)
b1.as!==$&&A.G()
b1.as=b0
A.b(c1.appendChild(b0))
A.b(b2.appendChild(c1))
c2=A.B(a7,"div","consult",null)
A.b(c2.appendChild(A.B(a7,"div","consult-label","Cite an entry")))
b0=A.B(a7,"div","entry-picker",null)
b1.at!==$&&A.G()
b1.at=b0
g=A.B(a7,"div","consult-result",null)
b1.ax!==$&&A.G()
b1.ax=g
A.b(c2.appendChild(b0))
A.b(c2.appendChild(g))
A.b(b2.appendChild(c2))
c3=A.i(a7.documentElement)
if(t.m.b(c3)){A.b(c3.style).setProperty("--shake-max-deg","3deg")
A.b(c3.style).setProperty("--shake-max-px","2px")}$.ia.b=b1
$.ia.j().saY(new A.tv())
g=A.b(c4.document)
a7=A.B(g,"div","prompt",null)
a7.setAttribute("role","status")
a7.setAttribute("aria-live","polite")
a7.setAttribute("aria-atomic","true")
A.b(a7.style).setProperty("transition-duration","0.3s")
A.b(A.i(g.body).appendChild(a7))
$.wO.b=new A.oP(a7)
a7=A.b(c4.document)
g=A.B(a7,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.i(a7.body).appendChild(g))
$.wM.b=new A.me(g)
g=A.b(c4.document)
a7=A.B(g,"div","ambient-notice",null)
b0=A.B(g,"div","caption-cue",null)
a7.setAttribute("role","status")
a7.setAttribute("aria-live","polite")
a7.setAttribute("aria-atomic","true")
b0.setAttribute("aria-hidden","true")
b0.setAttribute("data-caption-kind","non-speech")
A.b(A.i(g.body).appendChild(a7))
A.b(A.i(g.body).appendChild(b0))
$.bE.b=new A.lI(a7,b0)
$.wR=!0
b0=A.z2(A.b(c4.document))
b0.snc(A.Dw())
b0.sne(A.Dy())
b0.snd(A.Dx())
$.aH.b=b0
b0=d.a
a0=A.Ao(b0==null?null:b0.c.h(0,"visitors"))
if(a0!=null&&$.aZ.j().ex(a0))A.Cw()
g=$.la.j()
a7=d.a
g.nV(a7==null?null:a7.c.h(0,"ambient"))
g=d.a
a1=g==null?null:g.c.h(0,"unverifiables")
if(a9.b(a1))for(g=J.S(a1);g.m();){a2=g.gn()
if(A.aO(a2))$.ta.l(0,a2)}g=A.Aa(A.b(c4.document))
g.snt(new A.tw())
g.saY(new A.tx())
$.r4.b=g
g=A.zp(A.b(c4.document))
g.saY(new A.ty())
$.i9.b=g
$.fp.b=A.pn(A.b(c4.document),null)
$.id.b=A.pn(A.b(c4.document),B.F)
$.ey.b=A.pn(A.b(c4.document),B.y)
A.rj($.fp.j(),!1)
A.rj($.id.j(),!0)
A.rj($.ey.j(),!0)
A.Ci()
A.BY()
$.fo.b=A.zo(A.b(c4.document))
A.BF()
A.Cl()
$.fm.b=A.pn(A.b(c4.document),B.x)
A.rj($.fm.j(),!0)
A.Cj()
$.i7.b=A.yW(A.b(c4.document))
A.BE()
A.Ck()
g=A.zc(A.b(c4.document))
g.saY(new A.tz())
g.sng(new A.tA())
$.i8.b=g
g=d.a
a3=A.ze(g==null?null:g.c.h(0,"ending"))
if(a3!=null)A.xp(a3)
a4=$.fw
if(a4!=null){A.dM("world")
g=$.a0.j()
a7=a4
a8=new A.pa(g,a7,A.r(a8,t.L))
a8.jS(g,a7)
$.fs=a8}g=B.b.u(A.A(A.b(A.b(c4.window).location).search),"shaders=live")
$.xE=g
if(g){g=$.fw
if(g!=null)g.bE()}A.xs()
A.b(c4.window).addEventListener("resize",A.W(new A.tB()))
A.b(c4.window).addEventListener("keydown",A.W(new A.tC()))
A.b(c4.window).addEventListener("keyup",A.W(new A.tD()))
A.b(c4.window).addEventListener("keydown",A.W(new A.tE()))
A.b(c4.window).addEventListener("click",A.W(new A.tG()))
$.I.j().addEventListener("click",A.W(new A.tH()))
A.fu()
A.dM("raf")
A.a(A.b(c4.window).requestAnimationFrame(A.W(A.xS())))
p=2
s=6
break
case 4:p=3
c6=o.pop()
a5=A.ah(c6)
a6=A.cl(c6)
A.t2(a5,a6)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$tr,r)},
BZ(){var s=v.G
A.b(s.window).addEventListener("error",A.W(new A.rY()))
A.b(s.window).addEventListener("unhandledrejection",A.W(new A.rZ()))},
dM(a){if($.uE===a)return
$.uE=a
$.I.j().setAttribute("data-boot-phase",a)},
xq(){var s,r,q=$.cN.j().gbe(),p=$.I.j(),o=A.hv().gbl().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.y))
p.setAttribute("data-renderer-diagnostics",B.k.av(q.B(),null))
p=$.bo
s=p==null?null:p.x
if(s!=null)$.I.j().setAttribute("data-renderer-profile-fallback",s)
p=$.lf
r=p==null?null:p.y
if(r!=null)$.I.j().setAttribute("data-renderer-frame-submits",A.u(r))},
Cq(){var s,r,q,p,o,n,m,l
if(!$.tY())return
s=$.I.j()
r=$.uE
q=$.aK
p=$.eE()
o=t.N
p=A.P(["x",p.a,"y",p.b,"z",p.c],o,t.i)
n=$.bZ
m=$.dN
l=$.b8!=null||$.aH.j().Q
s.setAttribute("data-automation-player",B.k.av(A.P(["schemaVersion",1,"phase",r,"roomId",q,"eye",p,"yaw",n,"pitch",m,"modal",l,"inputEnabled",$.aA.j().w,"day",$.Y.j().gao().a,"hour",$.Y.j().gao().b],o,t.K),null))},
t5(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bG.j().a!==B.D){A.fy("save unavailable during rupture")
return}try{r=$.uz.j()
q=$.Y.j()
p=t.N
o=t.z
s=A.r(p,o)
n=$.aK
m=$.eE()
l=$.bZ
k=$.dN
j=$.ib.j().d
j=j==null?null:j.a.a
i=$.ib.j().d
J.bI(s,"player",new A.jJ(n,m,l,k,j,i==null?null:i.b).B())
n=$.aZ.j()
m=A.uj(n.b,p)
l=A.uj(n.c,t.g)
n=n.e
J.bI(s,"visitors",new A.kl(m,l,n==null?null:new A.ir(n.a,n.b,n.d,n.f,n.e,n.r)).B())
n=$.la.j().b
n=A.N(n,A.p(n).c)
B.a.a0(n)
J.bI(s,"ambient",n)
n=A.N($.ta,A.p($.ta).c)
B.a.a0(n)
J.bI(s,"unverifiables",n)
J.bI(s,"inventoryInspections",$.tZ().B())
n=$.uJ
if(n!=null)J.bI(s,"ending",A.P(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.vI(q.c).B()
k=q.d
r.o6(A.w6(s,A.P(["houseSeed",n,"runSeed",m,"house",l,"time",A.P(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B()],p,o),2))
A.fy(a)}catch(h){A.fy("save failed")}},
fy(a){var s=A.i(A.b(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.zm(B.dQ,new A.t6(s),t.H)},
t2(a,b){var s,r,q,p
A.dM("error")
s=A.u(a)
r=A.DK(s,"\n"," ")
s=$.uK
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.u(a):A.u(a)+"\n"+b.p(0)
$.I.j().setAttribute("data-boot-error",p)
if($.tY()&&!q)$.I.j().setAttribute("data-boot-stack",b.p(0))
A.b(s.console).error(p)},
wV(){var s,r
if($.uC)return
$.uC=!0
s=$.bm
r=s==null
if(!r)s.c5()
if(!r)s.eQ("music")
B.a.l($.cO,"arm")},
fu(){var s=0,r=A.bn(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fu=A.bq(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.aj(A.ft(),$async$fu)
case 2:o=null
q=4
s=7
return A.aj(A.aP(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$fu)
case 7:n=b
i=A
s=8
return A.aj(A.aP(A.b(n.json()),t.X),$async$fu)
case 8:o=i.b(b)
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
if(k!=null&&typeof k==="string"){l=A.i(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.A(k)}s=9
return A.aj(A.n4(A.e([A.t0(o),A.rU(o)],t.iw),t.H),$async$fu)
case 9:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$fu,r)},
ft(){var s=0,r=A.bn(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ft=A.bq(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.hi[f]
p=7
s=10
return A.aj(A.aP(A.b(A.b(i.window).fetch(n)),h),$async$ft)
case 10:m=a0
s=11
return A.aj(A.aP(A.b(m.text()),g),$async$ft)
case 11:l=a0
k=A.yJ(B.k.aJ(l,null))
e=$.a0.b
if(e===$.a0)A.j(A.ab(""))
k.eD(e)
e=$.I.b
if(e===$.I)A.j(A.ab(""))
e.setAttribute("data-house-manifest","validated")
e=$.I.b
if(e===$.I)A.j(A.ab(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.aj(A.lh(),$async$ft)
case 12:s=13
return A.aj(A.li(),$async$ft)
case 13:s=1
break
p=2
s=9
break
case 7:p=6
b=o.pop()
j=A.ah(b)
c=j
s=9
break
case 6:s=2
break
case 9:case 4:++f
s=3
break
case 5:$.I.j().setAttribute("data-house-manifest","unavailable")
A.b(i.console).warn("authored house manifest unavailable: "+A.u(c))
case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$ft,r)},
lh(){var s=0,r=A.bn(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$lh=A.bq(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.h0[c]
p=7
s=10
return A.aj(A.aP(A.b(A.b(g.window).fetch(n)),f),$async$lh)
case 10:m=b1
s=11
return A.aj(A.aP(A.b(m.text()),e),$async$lh)
case 11:l=b1
b=B.k.aJ(l,null)
b=h.b(b)?b:A.df("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.df("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aO(a)?a:A.df("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.df("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.az(a,!0,d):A.df("assets is not a list")
a4=A.K(a3)
a5=a4.i("Q<1,cv>")
a3=A.N(new A.Q(a3,a4.i("cv(1)").a(A.Ds()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.az(a,!0,d):A.df("placements is not a list")
a5=A.K(a4)
a6=a5.i("Q<1,cf>")
a4=A.N(new A.Q(a4,a5.i("cf(1)").a(A.Dt()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.ny(a1,a2,a0,a3,a4)
a1=$.a0.b
if(a1===$.a0)A.j(A.ab(""))
k.eD(a1)
$.le=k
a1=$.bo
if(a1!=null)a1.j8(k)
a1=$.I.b
if(a1===$.I)A.j(A.ab(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.I.b
if(a1===$.I)A.j(A.ab(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.I.b
if(a1===$.I)A.j(A.ab(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ah(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.I.j().setAttribute("data-house-inventory","unavailable")
A.b(g.console).warn("authored house inventory unavailable: "+A.u(a8))
case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$lh,r)},
li(){var s=0,r=A.bn(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$li=A.bq(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.le
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.hx[a4]
p=7
s=10
return A.aj(A.aP(A.b(A.b(a1.window).fetch(m)),a2),$async$li)
case 10:l=b5
s=11
return A.aj(A.aP(A.b(l.text()),e),$async$li)
case 11:k=b5
a5=B.k.aJ(k,null)
a5=a0.b(a5)?a5:A.fr("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.az(a6,!0,a3):A.fr("emitters is not a list")
a8=A.K(a7)
a9=a8.i("Q<1,ct>")
a7=A.N(new A.Q(a7,a8.i("ct(1)").a(A.DI()),a9),a9.i("a1.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aO(a6)?a6:A.fr("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.fr("sourceRef is not a string")
j=new A.nE(a8,a9,a7)
a7=$.a0.b
if(a7===$.a0)A.j(A.ab(""))
j.o2(a7,b2)
$.x9=j
i=A.r(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.t)(a7),++b0){h=a7[b0]
for(a9=h.f.gL(),a9=a9.gt(a9);a9.m();){g=a9.gn()
J.bI(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.a0.b
if(a7===$.a0)A.j(A.ab(""))
a8=A.yG(i)
a9=new A.lS(a7,A.bt(B.cs,e,d),a8)
a9.jI(a8,a7,B.cs)
$.ra=a9
a7=$.bm
if(a7!=null){a7.ch=a9
a7.bu()}a7=$.I.b
if(a7===$.I)A.j(A.ab(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.I.b
if(a7===$.I)A.j(A.ab(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.I.b
if(a7===$.I)A.j(A.ab(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.I.b
if(a7===$.I)A.j(A.ab(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ah(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.ra=null
$.I.j().setAttribute("data-audio-planner","unavailable")
$.I.j().setAttribute("data-house-soundscape","unavailable")
A.b(a1.console).warn("authored house soundscape unavailable: "+A.u(n))
case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$li,r)},
uH(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.S(t.a.b(s)?s:new A.bK(s,A.K(s).i("bK<1,m>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.A(q))}},
rU(a){var s=0,r=A.bn(t.H),q,p,o,n,m,l
var $async$rU=A.bq(function(b,c){if(b===1)return A.bj(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.r(n,n)
n=a==null
A.uH(A.i(n?null:a.sfx),m,"")
A.uH(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.A(p))
l=$
s=2
return A.aj(A.lZ(m,$.a0.j()),$async$rU)
case 2:o=l.bm=c
o.ch=$.ra
o.bu()
A.Cm()
A.xu(o)
A.uA()
A.xv()
if($.uC){o.c5()
o.eQ("music")}return A.bk(null,r)}})
return A.bl($async$rU,r)},
v0(a,b){var s
A.xF(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Ct(a){var s,r
try{s=A.aJ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
wS(a,b){var s
if(a!=="brightness")return
s=A.i(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.u(B.d.N(b,0.6,1.4))+")")},
r9(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.i(A.b(v.G.document).documentElement)
if(r!=null)A.U(A.b(r.classList).toggle(s,b))},
xv(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.aI($.cS().a.c6(o)),k=A.U($.cS().a.c6(n)),j=A.U($.cS().a.c6(m))
for(s=[$.fp.j(),$.id.j(),$.ey.j(),$.fm.j()],r=0;r<4;++r)s[r].eL(o,l)
A.wS(o,l)
for(s=[$.fp.j(),$.id.j(),$.ey.j(),$.fm.j()],r=0;r<4;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.r9(n,k)
A.r9(m,j)},
v_(a,b){var s
A.xF(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Cs(a){var s,r
try{s=A.aJ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
xu(a){var s,r,q,p,o,n,m,l,k,j=A.r(t.N,t.i)
for(s=0;s<5;++s){r=B.hh[s]
q=$.cS().a.b.h(0,r)
j.k(0,r,A.aI(q==null?A.j(A.l("setting missing from profile: "+r)):q))}p=A.U($.cS().a.c6("muted"))
o=A.U($.cS().a.c6("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.b9(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cX(o)
for(q=[$.fp.j(),$.id.j(),$.ey.j(),$.fm.j()],n=j.$ti.i("e9<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.e9(j,j.r,j.e,n);m.m();){k=m.d
l.eL(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
wT(){var s=$.bm
if(s!=null)A.xu(s)
A.xv()},
Cm(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aJ(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aJ(k,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.j(B.eh)
q=A.w8(r.h(0,"requested"))
$.xC=A.uk(A.w8(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.x
o=A.r(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.Cs(l))}}r=A.r(r,p)
for(n=0;n<10;++n){m=B.C[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Ct(p))}}$.xC=A.A9(o,r)
A.t1()},
t1(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.av($.cS().B(),null))}catch(s){}},
xF(a,b){var s,r,q,p,o,n,m
switch(A.pN(a).d.a){case 0:r=A.jO(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.cS()
q=s
A.pN(a).cQ(q)
p=t.N
o=t.K
n=A.f1(r.a.b,p,o)
n.k(0,a,q)
r.a=A.d7(n,1)
n=s
A.pN(a).cQ(n)
o=A.f1(r.b.b,p,o)
o.k(0,a,n)
r.b=A.d7(o,1)
A.t1()}catch(m){if(!(A.ah(m) instanceof A.F))throw m}},
t0(a){var s=0,r=A.bn(t.H),q,p,o
var $async$t0=A.bq(function(b,c){if(b===1)return A.bj(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.r(p,p)
A.uH(A.i(a==null?null:a.tex),o,"")
p=$.fw
p=p==null?null:p.aL(o)
if(p==null)p=A.u3(t.H)
q=$.bo
q=q==null?null:q.aL(o)
s=2
return A.aj(A.n4(A.e([p,q==null?A.u3(t.H):q],t.iw),t.H),$async$t0)
case 2:return A.bk(null,r)}})
return A.bl($async$t0,r)},
xs(){var s,r,q=v.G,p=A.a(A.b(q.window).innerWidth),o=A.a(A.b(q.window).innerHeight)
q=$.I.j()
s=p>0?p:800
q.width=s
s=$.I.j()
q=o>0?o:600
s.height=q
q=$.fw
if(q!=null)q.aZ(A.a($.I.j().width),A.a($.I.j().height))
$.cN.j().aZ(A.a($.I.j().width),A.a($.I.j().height))
q=$.bo
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.I.j().setAttribute("data-renderer-surface",r)},
Cr(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
A.aI(c2)
try{s=c2
if(!$.x8){$.uP=s
$.x8=!0}e=s
d=$.uP
if(typeof e!=="number")return e.aj()
r=(e-d)/1000
$.uP=s
e=r
if(typeof e!=="number")return e.cW()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.ai()
if(e>0.25)r=0.25
A.CP(r)
if(!$.uQ&&$.b8==null){e=$.dK
d=r
if(typeof d!=="number")return A.lq(d)
d=$.dK=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.cW()
c=c<10}else c=!1
if(!c)break
$.uT=$.eE()
d=$.Y.b
if(d===$.Y)A.j(A.ab(""))
d.lA(0.008333333333333333)
d=$.yn()
c=$.Y.b
if(c===$.Y)A.j(A.ab(""))
c=c.gao()
b=$.Y.b
if(b===$.Y)A.j(A.ab(""))
d=d.dw(c.a,b.gao().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){p=d[a]
B.a.l($.cO,"clock:"+p.a)}d=$.yo()
c=$.Y.b
if(c===$.Y)A.j(A.ab(""))
c=c.gao()
b=$.Y.b
if(b===$.Y)A.j(A.ab(""))
d=d.dw(c.a,b.gao().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.t)(d),++a){o=d[a]
B.a.l($.cO,"service:"+o.a+":"+o.b)}A.CS()
d=$.aZ.b
if(d===$.aZ)A.j(A.ab(""))
c=$.Y.b
if(c===$.Y)A.j(A.ab(""))
d.f=c.r.c>=0.5
d=d.d
a0=A.az(d,!1,e)
a0.$flags=3
a1=a0
B.a.G(d)
if(a1.length!==0){d=$.Y.b
if(d===$.Y)A.j(A.ab(""))
d.nB(a1)}A.CO()
A.CR()
A.CQ()
A.CN(0.008333333333333333)
d=$.fn.b
if(d===$.fn)A.j(A.ab(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.bG.b
if(d===$.bG)A.j(A.ab(""))
n=d.a!==B.D
c=$.a0.b
if(c===$.a0)A.j(A.ab(""))
d.lB(0.008333333333333333,c)
if(n){d=$.bG.b
if(d===$.bG)A.j(A.ab(""))
d=d.e}else d=!1
if(d)A.xt(!0)
d=$.dK-0.008333333333333333
$.dK=d
c=q
if(typeof c!=="number")return c.a4()
q=c+1}m=B.d.N(d/0.008333333333333333,0,1)
e=$.v4=A.wj($.yp(),$.eE(),m)
l=$.bm
if(l!=null){d=l
c=Math.sin($.bZ)
b=Math.cos($.bZ)
a2=A.b(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.af(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.ja($.aK)
for(e=$.cO.length,a=0;a<$.cO.length;$.cO.length===e||(0,A.t)($.cO),++a){k=$.cO[a]
A.BK(l,k)}B.a.G($.cO)
$.I.j().setAttribute("data-audio-spatial-active",""+l.CW.a)
e=$.I.j()
d=l.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.I.j()
e=l.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}j=$.fw
if(j!=null){$.bF.j().ek($.io(),$.bZ,$.dN)
e=$.b8===$.ia.j()?1:0
j.cz=e
$.xf=r
$.cN.j().b0(A.ug($.Y.j().gep()))}else if($.bW.j().a===B.U){$.bF.j().ek($.io(),$.bZ,$.dN)
e=$.bo
if(e!=null){d=$.bF.j()
c=d.a
a3=new A.H(c.a,c.b,c.c)
c=d.b
a4=new A.H(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.vX(a3,a4,new A.H(d.a,d.b,d.c))
a7=A.ub(a5,60,1.0471975511965976,0.1)
e.go=new A.eO(a6,a7,a7.a3(0,a6),a3,a4,0.1,60,a5)}e=$.bo
if(e!=null)e.jl($.a0.j(),$.aK)
e=$.bo
if(e!=null)e.j9($.a0.j(),$.aK,$.io(),$.ez.j().gbK(),Math.sin(3.141592653589793*$.ez.j().gbK()))
if($.xe!==$.bG.j().a){$.xe=$.bG.j().a
$.uV=$.uV+1}e=$.bo
if(e!=null){d=s
if(typeof d!=="number")return d.oa()
d/=1000
c=$.uV
b=A.a(Math.max(0,$.Y.j().b))
if(!isFinite(d)||d<0)A.j(A.av(d,"timeSeconds",null))
if(b<0)A.j(A.w("frame clock seeds must be non-negative",null))
e.k4=d
e.ok=c
e.p1=b}e=$.bo
if(e!=null){d=$.bG.j()
c=$.ll
a8=d.a
a9=d.geP()
b0=a9>0?B.d.N(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.b5
b=a8===B.V?0.45:1
if(d>=1)b3=a8===B.a7?b0:1
else b3=0
if(d>=2)d=a8===B.b3?b0:1
else d=0
b4=b1?320:0
b5=b1?5:8
b6=b2?1:0
b7=b2?b0:0
b8=b2?b0:0
b9=b2?b0:0
c0=b2?b0:0
e.k1=new A.jL(b,0.38,0.28,0.18,0.015,b3,d,b4,b5,b6,b7,b8,b9,c0,b2?b0:0,c)}$.cN.j().b0(A.ug($.Y.j().gep()))
i=$.bo
if(i!=null){h=i.gmO()
if(h!=null){$.I.j().setAttribute("data-renderer-frame-stats",h)
e=$.I.j()
d=i.gmN()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.dM("running")
A.Cq()
e=$.aA.j()
e.e=e.d=0
e.c.G(0)
A.a(A.b(v.G.window).requestAnimationFrame(A.W(A.xS())))}catch(c1){g=A.ah(c1)
f=A.cl(c1)
A.t2(g,f)}},
BK(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.iI("confirm")
$.bE.j().aB("interface confirmation")
break
case"ambient-winnow":a.en("winnow",0.28)
$.bE.j().aB("wind moving through the house")
break
case"ambient-gate":a.en("gate",0.22)
$.bE.j().aB("distant gate")
break
case"collapse":a.iI("collapse")
$.bE.j().aB("front door shudders and collapses")
break
case"clock:tick":A.uS(a,p,"tick")
break
case"clock:chime":A.uS(a,p,"chime")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.uS(a,q,s[2])}}}},
uS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.x9,g=$.le
if(h==null||g==null)return
s=h.mA(b)
r=b+":"+c
A:{if("hall-clock:tick"===r){q="clock ticking"
break A}if("hall-clock:chime"===r){q="clock chime"
break A}if("kitchen-range:settle"===r){q="kitchen range settling"
break A}if("cellar-drain:drip"===r){q="water dripping in the cellar"
break A}if("bathroom-cistern:settle"===r){q="bathroom cistern settling"
break A}q=null
break A}if(q!=null)$.bE.j().aB(q)
q=$.a0.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.j(A.l("sound room missing: "+o))
m=n.d.a4(0,s.d.a3(0,p))
l=$.ra
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.j(A.l("sound emitter "+s.a+" has no cue for "+c))
a.ny(q,m,s.e,o)
return}q=$.wY
$.wY=q+1
o=A.yH(B.d6,r,r+":"+q,m,A.Bv(b,c),q,o)
q=$.aK
q=A.yD($.io(),q)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.j(A.l("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.j(A.l("audio listener room missing: "+q))
j=l.iU(p,q)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.j(A.l("audio cue family missing: "+q))
k=J.aB(i)
k=k.h(i,B.c.a2(A.CF(q,o.f),k.gq(i)))
o=o.e
A.an(j.a,t.N)
a.iJ(k,new A.c(o.a,o.b,o.c),s.e,1,p,j.c,j.b)},
Bv(a,b){var s,r,q,p=$.Y.j().b
for(s=new A.dW(a+":"+b),r=t.gS,s=new A.aU(s,s.gq(0),r.i("aU<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.xO(p,q==null?r.a(q):q)}return p},
CP(a){var s=$.uK
if(s==null)return
s.textContent=""+B.d.aO(a>0?1/a:0)+" fps"},
CN(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4="interact"
if($.xy||$.b8!=null||$.aH.j().Q){$.lt().a=new A.c(0,0,0)
return}s=$.aA.j()
r=s.y
s=t.R.a(s.b)
q=B.a.M(r.aR("moveLeft"),s.gaC(s))?-1:0
if(B.a.M(r.aR("moveRight"),s.gaC(s)))++q
p=B.a.M(r.aR("moveForward"),s.gaC(s))?1:0
o=new A.c(q,0,B.a.M(r.aR("moveBack"),s.gaC(s))?p-1:p)
n=o.gq(0)>1?o.ga8():o
s=$.aA.j()
if(s.x.jz(a5)){m=s.y.aR(a4)
if(m.length!==0)s.c.l(0,B.a.gP(m))}l=$.aA.j().d
k=$.aA.j().e
$.bZ=$.bZ+l*0.0028
s=$.dN-k*0.0028
$.dN=s
$.dN=B.d.N(s,-1.5607963267948965,1.5607963267948965)
s=n.a
r=n.c
j=new A.c(s*Math.cos($.bZ)+r*Math.sin($.bZ),0,r*Math.cos($.bZ)-s*Math.sin($.bZ)).ga8().a3(0,2)
s=$.lt()
if(!isFinite(a5)||a5<0)A.j(A.av(a5,"dt","must be finite and non-negative"))
i=j.a!==0||j.c!==0?14:10
if(!isFinite(i))A.j(A.av(i,"rate","must be finite and positive"))
r=Math.exp(-i*a5)
h=s.a
r=h.a4(0,j.aj(0,h).a3(0,1-r))
s.a=r
g=$.ib.j().n7($.a0.j(),$.aK,$.eE(),r.a3(0,a5))
$.uZ=g.a
if($.bG.j().a!==B.b6&&$.bG.j().a!==B.V)$.aK=g.b
$.bF.j().ek($.eE(),$.bZ,$.dN)
s=$.bF.j()
r=$.a0.j()
f=A.DD(s,$.aK,r,$.le)
$.wO.j().jn(f.c)
e=a3
d=a3
c=a3
b=a3
switch(f.a.a){case 0:e=A.vd($.bF.j(),$.a0.j(),$.aK)
break
case 1:d=A.xY($.bF.j(),$.a0.j(),$.aK)
break
case 2:c=A.xZ($.bF.j(),$.a0.j(),$.aK)
break
case 3:s=$.bF.j()
r=$.a0.j()
h=$.le
b=A.xX(s,$.aK,r,h)
break
case 4:break}s=$.wM.j()
a=$.lu().j1($.Y.j().gao().a)
r=a==null?a3:a.h(0,"status")
s.eA(r,$.aK==="living-room")
s=$.aA.j()
if(s.y.lZ(a4,s.c)){s=$.Y.j().gao()
r=d==null
h=r?a3:d.a
a0=B.a.a6($.aZ.j().h_(21),$.aZ.j().gmW())
if(s.a===21&&h==="front-door"&&a0){s=$.bG.j()
$.a0.j()
s.jy(B.dJ,A.an(s.c,t.N))
B.a.l($.cO,"collapse")
A.fy("the front door opens on itself")}else if(e!=null&&!e.e){if(e.d){e.d=!1
$.bE.j().aB("mantle flame extinguished")}else if($.Y.j().jw(1,1)){e.d=!0
s=$.fn.j()
s.a=e
s.b=2
if(e.f!=null)e.r=!0
$.bE.j().aB("mantle flame catches")}}else if(!r&&!d.z&&!d.ay){d.ax=!d.ax
s=$.bE.j()
s.aB(d.ax?"door opens":"door closes")
s=$.fs
if(s!=null)s.cO(d.b)
s=$.bo
if(s!=null)s.er($.a0.j(),d.a)
s=$.bm
if(s!=null)s.bu()}else if(c!=null)if(c.w){s=$.Y.j()
if(s.f.d0(1)){c.w=!1
$.bE.j().aB("shutter closes")}}else{c.w=!0
$.bE.j().aB("shutter opens")}else if(b!=null){s=$.tZ()
if(!b.x)A.j(A.l("inventory placement is not pickable: "+b.a))
a1=b.y
if(a1==null)a1=b.a
s=s.a
r=b.a
h=s.h(0,r)
s.k(0,r,(h==null?0:h)+1)
r=$.I.j()
r.setAttribute("data-inventory-last-focus",a1)
r.setAttribute("data-inventory-last-event","inventory-inspected:"+a1)
s=A.bt(s,t.N,t.S)
r.setAttribute("data-inventory-inspections",""+s.gq(s))
$.bE.j().cY("noticed","you inspect "+a1)}}s=$.fn.j()
if(s.a!=null&&s.b>0){a2=$.fn.j().a
if(a2!=null&&A.vd($.bF.j(),$.a0.j(),$.aK)!==a2){s=$.fn.j()
s.a=null
s.b=0}}},
CS(){var s,r,q,p,o,n,m,l,k,j=null
if($.aH.j().Q||$.b8!=null||$.aZ.j().e!=null)return
s=$.Y.j().gao()
for(r=$.aZ.j().h_(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o){n=r[o]
m=$.aZ.b
if(m===$.aZ)A.j(A.ab(""))
if(m.c.u(0,n)||p<n.c)continue
r=$.aZ.b
if(r===$.aZ)A.j(A.ab(""))
l=r.dz(n)
if(!(l instanceof A.kh))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.vN(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.lt().a=new A.c(0,0,0)
r=$.aH.b
if(r===$.aH)A.j(A.ab(""))
r.eN(n.a,k)
return}},
Cw(){var s=$.aZ.j().e,r=s==null,q=r?null:s.gcu()
if(r||q==null)return
$.aH.j().eN(s.a.a,q)
if(s.d!==B.Y){$.aH.j().cZ(q)
A.uY()}A.fy("restored visitor")},
CO(){var s,r,q,p,o=$.Y.j().gao(),n=$.la.j().my(o.a,o.b)
if(n.length===0)return
s=B.a.gP(n)
$.la.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bE.j().cY(q,s.e)
p=A.CY(r)
if(p!=null)B.a.l($.cO,"ambient-"+p)},
CR(){var s,r,q,p,o=$.Y.j().gao()
if(o.b<20)return
s=o.a
if(!$.ta.l(0,s))return
r=$.lu().f
r===$&&A.h()
q=r.h(0,B.c.p(s))
r=t.j.b(q)?A.az(q,!0,t.N):B.o
p=A.DB(r,$.Y.j().b,s)
if(p!=null)$.bE.j().cY("noticed",p)},
xt(a){var s,r,q,p,o
if($.uJ!=null)return
s=$.Y.j().gao()
r=$.Y.j().r.c
q=$.Y.j().e.b
p=A.p(q).i("aS<2>")
o=A.zd(new A.mL(s.a,1-r,new A.R(new A.aS(q,p),p.i("n(o.E)").a(new A.t3()),p.i("R<o.E>")).gq(0),$.Y.j().r.d,a))
if(o==null)return
A.xp(o)
A.t5("ending recorded")},
xp(a){var s,r,q
$.uJ=a
$.xy=!0
$.lt().a=new A.c(0,0,0)
A.lk($.i8.j())
s=$.i8.j()
r=$.lu().w
r===$&&A.h()
q=r.h(0,a.a.b)
s.jp(a,t.j.b(q)?A.az(q,!0,t.N):B.o)},
BB(a){var s,r,q,p,o
A:{if("open"===a){s=B.ah
break A}if("chain"===a){s=B.bB
break A}if("through-door"===a){s=B.bC
break A}if("letterbox"===a){s=B.bD
break A}s=B.a2
break A}r=$.aZ.j().lU(s)
if(s===B.ah){q=$.a0.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.fs
if(p!=null)p.cO(q.b)
p=$.bo
if(p!=null)p.er($.a0.j(),q.a)
p=$.bm
if(p!=null)p.bu()}}if(!(r instanceof A.kg)||s===B.a2){$.aH.j().cF()
$.aA.j().c4($.I.j())
return}o=r.a.gcu()
if(o==null){A.uG()
$.aH.j().cF()
$.aA.j().c4($.I.j())
return}$.aH.j().cZ(o)
A.uY()},
BG(){var s,r=$.aZ.j().lC()
if(!(r instanceof A.hw)||r.b){A.uG()
$.aH.j().cF()
$.aA.j().c4($.I.j())
return}s=r.a.gcu()
if(s==null){A.uG()
$.aH.j().cF()
$.aA.j().c4($.I.j())
return}$.aH.j().cZ(s)
A.uY()},
uY(){var s,r,q,p,o=$.aH.j(),n=A.b(v.G.document),m=A.e([],t.fR)
for(s=$.lb.j().eH(),r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
m.push(new A.ax(p.a,B.a.gS(p.c).p(0)))}o.jo(n,m)},
BC(a){var s,r,q,p=$.aZ.j().lV(a,!0,$.lb.j())
if(p==null)return
s=$.lb.j().mr(p,B.fF)
r=$.aH.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.h()
r.textContent=q},
uG(){var s,r=$.a0.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.fs
if(s!=null)s.cO(r.b)
s=$.bo
if(s!=null)s.er($.a0.j(),r.a)
s=$.bm
if(s!=null)s.bu()}},
CQ(){var s,r,q,p,o,n,m,l,k
for(s=$.a0.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bG.b
if(k===$.bG)A.j(A.ab(""))
if(B.a.u(k.d,n+m)){l.d=!1
continue}}}},
hR:function hR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
qQ:function qQ(){},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
fc:function fc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
kP:function kP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hQ:function hQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rk:function rk(){},
rl:function rl(){},
rm:function rm(){},
rr:function rr(){},
rs:function rs(){},
rt:function rt(){},
ru:function ru(){},
rv:function rv(){},
rw:function rw(a){this.a=a},
rx:function rx(a){this.a=a},
ry:function ry(a){this.a=a},
rn:function rn(a){this.a=a},
ro:function ro(){},
rp:function rp(){},
rq:function rq(){},
rg:function rg(){},
rh:function rh(){},
ri:function ri(){},
rd:function rd(){},
re:function re(){},
rf:function rf(){},
rX:function rX(a,b){this.a=a
this.b=b},
rV:function rV(a){this.a=a},
rW:function rW(a){this.a=a},
ts:function ts(a){this.a=a},
tt:function tt(){},
tu:function tu(){},
tF:function tF(){},
tI:function tI(){},
tJ:function tJ(){},
tK:function tK(){},
tL:function tL(){},
tM:function tM(){},
tN:function tN(){},
tO:function tO(){},
tv:function tv(){},
tw:function tw(){},
tx:function tx(){},
ty:function ty(){},
tz:function tz(){},
tA:function tA(){},
tB:function tB(){},
tC:function tC(){},
tD:function tD(){},
tE:function tE(){},
tG:function tG(){},
tH:function tH(){},
rY:function rY(){},
rZ:function rZ(){},
t6:function t6(a){this.a=a},
t3:function t3(){},
vN(a,b,c,d,e,f){var s=a[b]()
return s},
vO(a,b,c){var s=null
return c.a(A.vN(a,b,s,s,s,s))},
z0(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
z_(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
xP(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
tT(a,b){var s=B.d.aW(a),r=A.xP(s,b),q=A.xP(s+1,b),p=B.d.N(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
xO(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
CY(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
Dd(a){var s,r,q,p,o,n,m,l=B.k.aJ(a,null),k=t.f
if(!k.b(l))throw A.d(B.eL)
s=t.N
r=t.z
q=A.aT(l,s,r)
p=A.r(s,t.P)
for(o=0;o<11;++o){n=B.fY[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.r(s,r))
else if(k.b(m))p.k(0,n,A.aT(m,s,r))
else throw A.d(A.a5('text.json section "'+n+'" must be an object',null,null))}return p},
DB(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaG(a)
s=new A.fe()
s.d1((b^274953^c)>>>0)
r=s.aF(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.u5.prototype={}
J.ji.prototype={
W(a,b){return a===b},
gI(a){return A.hc(a)},
p(a){return"Instance of '"+A.jN(a)+"'"},
gY(a){return A.cP(A.uM(this))}}
J.jl.prototype={
p(a){return String(a)},
gI(a){return a?519018:218159},
gY(a){return A.cP(t.y)},
$iac:1,
$in:1}
J.fZ.prototype={
W(a,b){return null==b},
p(a){return"null"},
gI(a){return 0},
$iac:1,
$ial:1}
J.h_.prototype={$ia7:1}
J.dv.prototype={
gI(a){return 0},
gY(a){return B.jY},
p(a){return String(a)}}
J.jI.prototype={}
J.dC.prototype={}
J.d1.prototype={
p(a){var s=a[$.y5()]
if(s==null)s=a[$.cR()]
if(s==null)return this.jB(a)
return"JavaScript function for "+J.cT(s)},
$ie2:1}
J.f_.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.f0.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.q.prototype={
cr(a,b){return new A.bK(a,A.K(a).i("@<1>").F(b).i("bK<1,2>"))},
l(a,b){A.K(a).c.a(b)
a.$flags&1&&A.br(a,29)
a.push(b)},
nD(a,b){var s
a.$flags&1&&A.br(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.w2(b,null))
return a.splice(b,1)[0]},
ag(a,b){var s
a.$flags&1&&A.br(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a3(a[s],b)){a.splice(s,1)
return!0}return!1},
K(a,b){var s
A.K(a).i("o<1>").a(b)
a.$flags&1&&A.br(a,"addAll",2)
if(Array.isArray(b)){this.k_(a,b)
return}for(s=J.S(b);s.m();)a.push(s.gn())},
k_(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.at(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.br(a,"clear","clear")
a.length=0},
c3(a,b,c){var s=A.K(a)
return new A.Q(a,s.F(c).i("1(2)").a(b),s.i("@<1>").F(c).i("Q<1,2>"))},
aw(a,b){var s,r=A.cy(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.u(a[s]))
return r.join(b)},
by(a,b,c,d){var s,r,q
d.a(b)
A.K(a).F(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.at(a))}return r},
aV(a,b,c){var s,r,q,p=A.K(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.at(a))}if(c!=null)return c.$0()
throw A.d(A.cw())},
al(a,b){return this.aV(a,b,null)},
X(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aH(a,b,c){var s=a.length
if(b>s)throw A.d(A.aL(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aL(c,b,s,"end",null))
if(b===c)return A.e([],A.K(a))
return A.e(a.slice(b,c),A.K(a))},
gP(a){if(a.length>0)return a[0]
throw A.d(A.cw())},
gS(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cw())},
gaG(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.cw())
throw A.d(A.vJ())},
M(a,b){var s,r
A.K(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.at(a))}return!1},
a6(a,b){var s,r
A.K(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.at(a))}return!0},
a1(a,b){var s,r,q,p,o,n=A.K(a)
n.i("k(1,1)?").a(b)
a.$flags&2&&A.br(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.C3()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.ai()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fB(b,2))
if(p>0)this.l9(a,p)},
a0(a){return this.a1(a,null)},
l9(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
d_(a,b){var s,r,q,p
a.$flags&2&&A.br(a,"shuffle")
s=a.length
while(s>1){r=b.aF(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
cG(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.a3(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.a3(a[s],b))return!0
return!1},
gJ(a){return a.length===0},
gU(a){return a.length!==0},
p(a){return A.u4(a,"[","]")},
gt(a){return new J.dS(a,a.length,A.K(a).i("dS<1>"))},
gI(a){return A.hc(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.br(a,"set length","change the length of")
if(b<0)throw A.d(A.aL(b,0,null,"newLength",null))
if(b>a.length)A.K(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ti(a,b))
return a[b]},
k(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.br(a)
if(!(b>=0&&b<a.length))throw A.d(A.ti(a,b))
a[b]=c},
eE(a,b){return new A.cj(a,b.i("cj<0>"))},
is(a,b){var s
A.K(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gY(a){return A.cP(A.K(a))},
$iM:1,
$io:1,
$iE:1}
J.jj.prototype={
o0(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.jN(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.nX.prototype={}
J.dS.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.t(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iad:1}
J.e7.prototype={
H(a,b){var s
A.aI(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcI(b)
if(this.gcI(a)===s)return 0
if(this.gcI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcI(a){return a===0?1/a<0:a<0},
b8(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aN(""+a+".toInt()"))},
lR(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aN(""+a+".ceil()"))},
aW(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aN(""+a+".floor()"))},
aO(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aN(""+a+".round()"))},
N(a,b,c){if(this.H(b,c)>0)throw A.d(A.v6(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
cP(a,b){var s
if(b>20)throw A.d(A.aL(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcI(a))return"-"+s
return s},
o_(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aL(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.f(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.j(A.aN("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.f(p,1)
s=p[1]
if(3>=r)return A.f(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a3("0",o)},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a2(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
jD(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fP(a,b)},
R(a,b){return(a|0)===a?a/b|0:this.fP(a,b)},
fP(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aN("Result of truncating division is "+A.u(s)+": "+A.u(a)+" ~/ "+b))},
dt(a,b){var s
if(a>0)s=this.cn(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lh(a,b){if(0>b)throw A.d(A.v6(b))
return this.cn(a,b)},
cn(a,b){return b>31?0:a>>>b},
gY(a){return A.cP(t.o)},
$iaR:1,
$iy:1,
$ib0:1}
J.fY.prototype={
gY(a){return A.cP(t.S)},
$iac:1,
$ik:1}
J.jm.prototype={
gY(a){return A.cP(t.i)},
$iac:1}
J.du.prototype={
bF(a,b,c,d){var s=A.hd(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a7(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aL(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.a7(a,b,0)},
E(a,b,c){return a.substring(b,A.hd(b,c,a.length))},
bn(a,b){return this.E(a,b,null)},
bI(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.zB(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.zC(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.dF)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
nw(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
cH(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aL(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cG(a,b){return this.cH(a,b,0)},
u(a,b){return A.DJ(a,b,0)},
H(a,b){var s
A.A(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gI(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gY(a){return A.cP(t.N)},
gq(a){return a.length},
$iac:1,
$iaR:1,
$ioz:1,
$im:1}
A.dF.prototype={
gt(a){return new A.fI(J.S(this.gaQ()),A.p(this).i("fI<1,2>"))},
gq(a){return J.bJ(this.gaQ())},
gJ(a){return J.u0(this.gaQ())},
gU(a){return J.yw(this.gaQ())},
X(a,b){return A.p(this).y[1].a(J.lv(this.gaQ(),b))},
gP(a){return A.p(this).y[1].a(J.vp(this.gaQ()))},
u(a,b){return J.vo(this.gaQ(),b)},
p(a){return J.cT(this.gaQ())}}
A.fI.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iad:1}
A.dV.prototype={
gaQ(){return this.a}}
A.hF.prototype={$iM:1}
A.hD.prototype={
h(a,b){return this.$ti.y[1].a(J.b9(this.a,b))},
k(a,b,c){var s=this.$ti
J.bI(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.yy(this.a,b)},
l(a,b){var s=this.$ti
J.ip(this.a,s.c.a(s.y[1].a(b)))},
a1(a,b){var s
this.$ti.i("k(2,2)?").a(b)
s=b==null?null:new A.qu(this,b)
J.yz(this.a,s)},
$iM:1,
$iE:1}
A.qu.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("k(1,1)")}}
A.bK.prototype={
cr(a,b){return new A.bK(this.a,this.$ti.i("@<1>").F(b).i("bK<1,2>"))},
gaQ(){return this.a}}
A.e8.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dW.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.pj.prototype={}
A.M.prototype={}
A.a1.prototype={
gt(a){var s=this
return new A.aU(s,s.gq(s),A.p(s).i("aU<a1.E>"))},
gJ(a){return this.gq(this)===0},
gP(a){if(this.gq(this)===0)throw A.d(A.cw())
return this.X(0,0)},
u(a,b){var s,r=this,q=r.gq(r)
for(s=0;s<q;++s){if(J.a3(r.X(0,s),b))return!0
if(q!==r.gq(r))throw A.d(A.at(r))}return!1},
M(a,b){var s,r,q=this
A.p(q).i("n(a1.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.X(0,r)))return!0
if(s!==q.gq(q))throw A.d(A.at(q))}return!1},
aw(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.u(p.X(0,0))
if(o!==p.gq(p))throw A.d(A.at(p))
for(r=s,q=1;q<o;++q){r=r+b+A.u(p.X(0,q))
if(o!==p.gq(p))throw A.d(A.at(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.u(p.X(0,q))
if(o!==p.gq(p))throw A.d(A.at(p))}return r.charCodeAt(0)==0?r:r}},
cS(a,b){return this.jA(0,A.p(this).i("n(a1.E)").a(b))},
c3(a,b,c){var s=A.p(this)
return new A.Q(this,s.F(c).i("1(a1.E)").a(b),s.i("@<a1.E>").F(c).i("Q<1,2>"))},
bH(a,b){var s=A.p(this).i("a1.E")
if(b)s=A.N(this,s)
else{s=A.N(this,s)
s.$flags=1
s=s}return s},
bG(a){return this.bH(0,!0)},
bm(a){var s,r=this,q=A.u8(A.p(r).i("a1.E"))
for(s=0;s<r.gq(r);++s)q.l(0,r.X(0,s))
return q}}
A.hp.prototype={
gky(){var s=J.bJ(this.a),r=this.c
if(r==null||r>s)return s
return r},
glk(){var s=J.bJ(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.bJ(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
X(a,b){var s=this,r=s.glk()+b
if(b<0||r>=s.gky())throw A.d(A.nP(b,s.gq(0),s,"index"))
return J.lv(s.a,r)},
bH(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aB(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.vL(0,n):J.vK(0,n)}r=A.cy(s,m.X(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.X(n,o+q))
if(m.gq(n)<l)throw A.d(A.at(p))}return r},
bG(a){return this.bH(0,!0)}}
A.aU.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aB(q),o=p.gq(q)
if(r.b!==o)throw A.d(A.at(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.X(q,s);++r.c
return!0},
$iad:1}
A.cg.prototype={
gt(a){return new A.ea(J.S(this.a),this.b,A.p(this).i("ea<1,2>"))},
gq(a){return J.bJ(this.a)},
gJ(a){return J.u0(this.a)},
gP(a){return this.b.$1(J.vp(this.a))},
X(a,b){return this.b.$1(J.lv(this.a,b))}}
A.dZ.prototype={$iM:1}
A.ea.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.Q.prototype={
gq(a){return J.bJ(this.a)},
X(a,b){return this.b.$1(J.lv(this.a,b))}}
A.R.prototype={
gt(a){return new A.L(J.S(this.a),this.b,this.$ti.i("L<1>"))}}
A.L.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iad:1}
A.fQ.prototype={
gt(a){return new A.fR(J.S(this.a),this.b,B.dx,this.$ti.i("fR<1,2>"))}}
A.fR.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.S(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iad:1}
A.fO.prototype={
m(){return!1},
gn(){throw A.d(A.cw())},
$iad:1}
A.cj.prototype={
gt(a){return new A.hy(J.S(this.a),this.$ti.i("hy<1>"))}}
A.hy.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iad:1}
A.am.prototype={
sq(a,b){throw A.d(A.aN("Cannot change the length of a fixed-length list"))},
l(a,b){A.bH(a).i("am.E").a(b)
throw A.d(A.aN("Cannot add to a fixed-length list"))}}
A.cH.prototype={
k(a,b,c){A.p(this).i("cH.E").a(c)
throw A.d(A.aN("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.d(A.aN("Cannot change the length of an unmodifiable list"))},
l(a,b){A.p(this).i("cH.E").a(b)
throw A.d(A.aN("Cannot add to an unmodifiable list"))},
a1(a,b){A.p(this).i("k(cH.E,cH.E)?").a(b)
throw A.d(A.aN("Cannot modify an unmodifiable list"))}}
A.fb.prototype={}
A.hi.prototype={
gq(a){return J.bJ(this.a)},
X(a,b){var s=this.a,r=J.aB(s)
return r.X(s,r.gq(s)-1-b)}}
A.i6.prototype={}
A.ax.prototype={$r:"+(1,2)",$s:1}
A.hS.prototype={$r:"+influence,light(1,2)",$s:2}
A.ae.prototype={$r:"+(1,2,3)",$s:3}
A.hT.prototype={$r:"+(1,2,3,4)",$s:4}
A.fK.prototype={}
A.eQ.prototype={
gJ(a){return this.gq(this)===0},
gU(a){return this.gq(this)!==0},
p(a){return A.ua(this)},
k(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
A.yU()},
gL(){return new A.cL(this.mD(),A.p(this).i("cL<T<1,2>>"))},
mD(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gV(),o=o.gt(o),n=A.p(s),m=n.y[1],n=n.i("T<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.T(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bA(a,b,c,d){var s=A.r(c,d)
this.am(0,new A.mn(this,A.p(this).F(c).F(d).i("T<1,2>(3,4)").a(b),s))
return s},
$iX:1}
A.mn.prototype={
$2(a,b){var s=A.p(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.p(this.a).i("~(1,2)")}}
A.a4.prototype={
gq(a){return this.b.length},
gfn(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
O(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.O(b))return null
return this.b[this.a[b]]},
am(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfn()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gV(){return new A.et(this.gfn(),this.$ti.i("et<1>"))},
gaq(){return new A.et(this.b,this.$ti.i("et<2>"))}}
A.et.prototype={
gq(a){return this.a.length},
gJ(a){return 0===this.a.length},
gU(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.eu(s,s.length,this.$ti.i("eu<1>"))}}
A.eu.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iad:1}
A.cr.prototype={
bs(){var s=this,r=s.$map
if(r==null){r=new A.h0(s.$ti.i("h0<1,2>"))
A.xJ(s.a,r)
s.$map=r}return r},
O(a){return this.bs().O(a)},
h(a,b){return this.bs().h(0,b)},
am(a,b){this.$ti.i("~(1,2)").a(b)
this.bs().am(0,b)},
gV(){var s=this.bs()
return new A.aa(s,A.p(s).i("aa<1>"))},
gaq(){var s=this.bs()
return new A.aS(s,A.p(s).i("aS<2>"))},
gq(a){return this.bs().a}}
A.fL.prototype={
l(a,b){A.p(this).c.a(b)
A.yV()}}
A.bb.prototype={
gq(a){return this.b},
gJ(a){return this.b===0},
gU(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eu(s,s.length,r.$ti.i("eu<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bm(a){return A.u9(this,this.$ti.c)}}
A.oL.prototype={
$0(){return B.d.aW(1000*this.a.now())},
$S:23}
A.hj.prototype={}
A.q5.prototype={
aM(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.h8.prototype={
p(a){return"Null check operator used on a null value"}}
A.jo.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.k9.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.os.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.fP.prototype={}
A.hV.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icF:1}
A.dl.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.y3(r==null?"unknown":r)+"'"},
gY(a){var s=A.v8(this)
return A.cP(s==null?A.bH(this):s)},
$ie2:1,
go9(){return this},
$C:"$1",
$R:1,
$D:null}
A.iF.prototype={$C:"$0",$R:0}
A.iG.prototype={$C:"$2",$R:2}
A.k5.prototype={}
A.k2.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.y3(s)+"'"}}
A.eM.prototype={
W(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.eM))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.lr(this.a)^A.hc(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jN(this.a)+"'")}}
A.jW.prototype={
p(a){return"RuntimeError: "+this.a}}
A.c3.prototype={
gq(a){return this.a},
gJ(a){return this.a===0},
gU(a){return this.a!==0},
gV(){return new A.aa(this,A.p(this).i("aa<1>"))},
gaq(){return new A.aS(this,A.p(this).i("aS<2>"))},
gL(){return new A.O(this,A.p(this).i("O<1,2>"))},
O(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mR(a)},
mR(a){var s=this.d
if(s==null)return!1
return this.c_(s[this.bZ(a)],a)>=0},
K(a,b){A.p(this).i("X<1,2>").a(b).am(0,new A.o5(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mS(b)},
mS(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bZ(a)]
r=this.c_(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.p(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.eT(s==null?q.b=q.dl():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.eT(r==null?q.c=q.dl():r,b,c)}else q.mU(b,c)},
mU(a,b){var s,r,q,p,o=this,n=A.p(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dl()
r=o.bZ(a)
q=s[r]
if(q==null)s[r]=[o.dm(a,b)]
else{p=o.c_(q,a)
if(p>=0)q[p].b=b
else q.push(o.dm(a,b))}},
cM(a,b){var s,r,q=this,p=A.p(q)
p.c.a(a)
p.i("2()").a(b)
if(q.O(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
ag(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.l8(this.c,b)
else return this.mT(b)},
mT(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bZ(a)
r=n[s]
q=o.c_(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fX(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.d2()}},
am(a,b){var s,r,q=this
A.p(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.at(q))
s=s.c}},
eT(a,b,c){var s,r=A.p(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dm(b,c)
else s.b=c},
l8(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fX(s)
delete a[b]
return s.b},
d2(){this.r=this.r+1&1073741823},
dm(a,b){var s=this,r=A.p(s),q=new A.od(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d2()
return q},
fX(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.d2()},
bZ(a){return J.ar(a)&1073741823},
c_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
p(a){return A.ua(this)},
dl(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iu7:1}
A.o5.prototype={
$2(a,b){var s=this.a,r=A.p(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.p(this.a).i("~(1,2)")}}
A.od.prototype={}
A.aa.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gt(a){var s=this.a
return new A.cx(s,s.r,s.e,this.$ti.i("cx<1>"))},
u(a,b){return this.a.O(b)}}
A.cx.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iad:1}
A.aS.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gt(a){var s=this.a
return new A.as(s,s.r,s.e,this.$ti.i("as<1>"))}}
A.as.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iad:1}
A.O.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gt(a){var s=this.a
return new A.e9(s,s.r,s.e,this.$ti.i("e9<1,2>"))}}
A.e9.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.T(s.a,s.b,r.$ti.i("T<1,2>"))
r.c=s.c
return!0}},
$iad:1}
A.h0.prototype={
bZ(a){return A.D8(a)&1073741823},
c_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1}}
A.tn.prototype={
$1(a){return this.a(a)},
$S:9}
A.to.prototype={
$2(a,b){return this.a(a,b)},
$S:141}
A.tp.prototype={
$1(a){return this.a(A.A(a))},
$S:27}
A.bV.prototype={
gY(a){return A.cP(this.fj())},
fj(){return A.Di(this.$r,this.cg())},
p(a){return this.fU(!1)},
fU(a){var s,r,q,p,o,n=this.kD(),m=this.cg(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.w_(o):l+A.u(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
kD(){var s,r=this.$s
while($.qT.length<=r)B.a.l($.qT,null)
s=$.qT[r]
if(s==null){s=this.kl()
B.a.k($.qT,r,s)}return s},
kl(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.jk(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.an(j,k)}}
A.ex.prototype={
cg(){return[this.a,this.b]},
W(a,b){if(b==null)return!1
return b instanceof A.ex&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gI(a){return A.ch(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.ff.prototype={
cg(){return[this.a,this.b,this.c]},
W(a,b){var s=this
if(b==null)return!1
return b instanceof A.ff&&s.$s===b.$s&&J.a3(s.a,b.a)&&J.a3(s.b,b.b)&&J.a3(s.c,b.c)},
gI(a){var s=this
return A.ch(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fg.prototype={
cg(){return this.a},
W(a,b){if(b==null)return!1
return b instanceof A.fg&&this.$s===b.$s&&A.AR(this.a,b.a)},
gI(a){return A.ch(this.$s,A.zN(this.a),B.f,B.f,B.f,B.f)}}
A.jn.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ioz:1}
A.qv.prototype={
dq(){var s=this.b
if(s===this)throw A.d(new A.e8("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.ab(""))
return s}}
A.dw.prototype={
gY(a){return B.jR},
h0(a,b,c){A.x1(a,b,c)
return new Float32Array(a,b,c)},
$iac:1,
$idw:1}
A.f3.prototype={$if3:1}
A.h6.prototype={
glK(a){if(((a.$flags|0)&2)!==0)return new A.qZ(a.buffer)
else return a.buffer},
kM(a,b,c,d){var s=A.aL(b,0,c,d,null)
throw A.d(s)},
f0(a,b,c,d){if(b>>>0!==b||b>c)this.kM(a,b,c,d)}}
A.qZ.prototype={
h0(a,b,c){var s=A.zK(this.a,b,c)
s.$flags=3
return s}}
A.jy.prototype={
gY(a){return B.jS},
$iac:1}
A.aV.prototype={
gq(a){return a.length},
fJ(a,b,c,d,e){var s,r,q=a.length
this.f0(a,b,q,"start")
this.f0(a,c,q,"end")
if(b>c)throw A.d(A.aL(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.w(e,null))
r=d.length
if(r-e<s)throw A.d(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibN:1}
A.h4.prototype={
h(a,b){A.dg(b,a,a.length)
return a[b]},
k(a,b,c){A.bX(c)
a.$flags&2&&A.br(a)
A.dg(b,a,a.length)
a[b]=c},
ji(a,b,c,d){t.id.a(d)
a.$flags&2&&A.br(a,5)
this.fJ(a,b,c,d,0)
return},
$iM:1,
$io:1,
$iE:1}
A.h5.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.br(a)
A.dg(b,a,a.length)
a[b]=c},
jj(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.br(a,5)
this.fJ(a,b,c,d,e)
return},
$iM:1,
$io:1,
$iE:1}
A.h3.prototype={
gY(a){return B.jT},
aH(a,b,c){return new Float32Array(a.subarray(b,A.Bz(b,c,a.length)))},
$iac:1,
$imW:1}
A.jz.prototype={
gY(a){return B.jU},
$iac:1}
A.jA.prototype={
gY(a){return B.jV},
h(a,b){A.dg(b,a,a.length)
return a[b]},
$iac:1}
A.jB.prototype={
gY(a){return B.jW},
h(a,b){A.dg(b,a,a.length)
return a[b]},
$iac:1}
A.jC.prototype={
gY(a){return B.jX},
h(a,b){A.dg(b,a,a.length)
return a[b]},
$iac:1}
A.jD.prototype={
gY(a){return B.k_},
h(a,b){A.dg(b,a,a.length)
return a[b]},
$iac:1,
$iun:1}
A.jE.prototype={
gY(a){return B.k0},
h(a,b){A.dg(b,a,a.length)
return a[b]},
$iac:1}
A.ed.prototype={
gY(a){return B.k1},
gq(a){return a.length},
h(a,b){A.dg(b,a,a.length)
return a[b]},
$iac:1,
$ied:1}
A.h7.prototype={
gY(a){return B.k2},
gq(a){return a.length},
h(a,b){A.dg(b,a,a.length)
return a[b]},
$iac:1,
$ihs:1}
A.hM.prototype={}
A.hN.prototype={}
A.hO.prototype={}
A.hP.prototype={}
A.ci.prototype={
i(a){return A.hZ(v.typeUniverse,this,a)},
F(a){return A.wD(v.typeUniverse,this,a)}}
A.kC.prototype={}
A.l4.prototype={
p(a){return A.bp(this.a,null)}}
A.kA.prototype={
p(a){return this.a}}
A.fj.prototype={$id8:1}
A.qr.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:28}
A.qq.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:132}
A.qs.prototype={
$0(){this.a.$0()},
$S:17}
A.qt.prototype={
$0(){this.a.$0()},
$S:17}
A.qW.prototype={
jY(a,b){if(self.setTimeout!=null)self.setTimeout(A.fB(new A.qX(this,b),0),a)
else throw A.d(A.aN("`setTimeout()` not found."))}}
A.qX.prototype={
$0(){this.b.$0()},
$S:0}
A.kq.prototype={
dA(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d6(a)
else{s=r.a
if(q.i("bM<1>").b(a))s.f_(a)
else s.ce(a)}},
dB(a,b){var s=this.a
if(this.b)s.bb(new A.aQ(a,b))
else s.ca(new A.aQ(a,b))}}
A.rb.prototype={
$1(a){return this.a.$2(0,a)},
$S:13}
A.rc.prototype={
$2(a,b){this.a.$2(1,new A.fP(a,t.l.a(b)))},
$S:59}
A.te.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:67}
A.ck.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lb(a,b){var s,r,q
a=A.a(a)
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
o.d=null}q=o.lb(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.wy
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.wy
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.l("sync*"))}return!1},
ob(a){var s,r,q=this
if(a instanceof A.cL){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.S(a)
return 2}},
$iad:1}
A.cL.prototype={
gt(a){return new A.ck(this.a(),this.$ti.i("ck<1>"))}}
A.aQ.prototype={
p(a){return A.u(this.a)},
$iai:1,
gbJ(){return this.b}}
A.n3.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.f8(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ah(p)
q=A.cl(p)
l=r
o=q
n=A.uN(l,o)
l=new A.aQ(l,o)
m.b.bb(l)
return}m.b.f8(s)}},
$S:0}
A.n6.prototype={
$2(a,b){var s,r,q=this
A.fq(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bb(new A.aQ(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bb(new A.aQ(r,s))}},
$S:68}
A.n5.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bI(r,k.b,a)
if(J.a3(s,0)){q=A.e([],j.i("q<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.t)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.ip(q,l)}k.c.ce(q)}}else if(J.a3(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bb(new A.aQ(q,o))}},
$S(){return this.d.i("al(0)")}}
A.ku.prototype={
dB(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.ca(A.C2(a,b))},
h3(a){return this.dB(a,null)}}
A.hA.prototype={
dA(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.l("Future already completed"))
s.d6(r.i("1/").a(a))}}
A.eq.prototype={
n6(a){if((this.c&15)!==6)return!0
return this.b.b.ey(t.iW.a(this.d),a.a,t.y,t.K)},
mQ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.nX(q,m,a.b,o,n,t.l)
else p=l.ey(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ah(s))){if((r.c&1)!==0)throw A.d(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aq.prototype={
ez(a,b,c){var s,r,q=this.$ti
q.F(c).i("1/(2)").a(a)
s=$.ak
if(s===B.v){if(!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.av(b,"onError",u.c))}else{c.i("@<0/>").F(q.c).i("1(2)").a(a)
b=A.Cv(b,s)}r=new A.aq(s,c.i("aq<0>"))
this.d4(new A.eq(r,3,a,b,q.i("@<1>").F(c).i("eq<1,2>")))
return r},
fS(a,b,c){var s,r=this.$ti
r.F(c).i("1/(2)").a(a)
s=new A.aq($.ak,c.i("aq<0>"))
this.d4(new A.eq(s,19,a,b,r.i("@<1>").F(c).i("eq<1,2>")))
return s},
lf(a){this.a=this.a&1|16
this.c=a},
cd(a){this.a=a.a&30|this.a&1
this.c=a.c},
d4(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.d4(a)
return}r.cd(s)}A.lm(null,null,r.b,t.M.a(new A.qy(r,a)))}},
fw(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.fw(a)
return}m.cd(n)}l.a=m.cl(a)
A.lm(null,null,m.b,t.M.a(new A.qD(l,m)))}},
bN(){var s=t.F.a(this.c)
this.c=null
return this.cl(s)},
cl(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
f8(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bM<1>").b(a))A.qB(a,r,!0)
else{s=r.bN()
q.c.a(a)
r.a=8
r.c=a
A.er(r,s)}},
ce(a){var s,r=this
r.$ti.c.a(a)
s=r.bN()
r.a=8
r.c=a
A.er(r,s)},
kk(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bN()
q.cd(a)
A.er(q,r)},
bb(a){var s=this.bN()
this.lf(a)
A.er(this,s)},
d6(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bM<1>").b(a)){this.f_(a)
return}this.k6(a)},
k6(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.lm(null,null,s.b,t.M.a(new A.qA(s,a)))},
f_(a){A.qB(this.$ti.i("bM<1>").a(a),this,!1)
return},
ca(a){this.a^=2
A.lm(null,null,this.b,t.M.a(new A.qz(this,a)))},
$ibM:1}
A.qy.prototype={
$0(){A.er(this.a,this.b)},
$S:0}
A.qD.prototype={
$0(){A.er(this.b,this.a.a)},
$S:0}
A.qC.prototype={
$0(){A.qB(this.a.a,this.b,!0)},
$S:0}
A.qA.prototype={
$0(){this.a.ce(this.b)},
$S:0}
A.qz.prototype={
$0(){this.a.bb(this.b)},
$S:0}
A.qG.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.nW(t.mY.a(q.d),t.z)}catch(p){s=A.ah(p)
r=A.cl(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.lL(q)
n=k.a
n.c=new A.aQ(q,o)
q=n}q.b=!0
return}if(j instanceof A.aq&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.aq){m=k.b.a
l=new A.aq(m.b,m.$ti)
j.ez(new A.qH(l,m),new A.qI(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.qH.prototype={
$1(a){this.a.kk(this.b)},
$S:28}
A.qI.prototype={
$2(a,b){A.fq(a)
t.l.a(b)
this.a.bb(new A.aQ(a,b))},
$S:72}
A.qF.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.ey(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ah(l)
r=A.cl(l)
q=s
p=r
if(p==null)p=A.lL(q)
o=this.a
o.c=new A.aQ(q,p)
o.b=!0}},
$S:0}
A.qE.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.n6(s)&&p.a.e!=null){p.c=p.a.mQ(s)
p.b=!1}}catch(o){r=A.ah(o)
q=A.cl(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.lL(p)
m=l.b
m.c=new A.aQ(p,n)
p=m}p.b=!0}},
$S:0}
A.kr.prototype={}
A.l1.prototype={}
A.i5.prototype={$iwq:1}
A.kT.prototype={
nY(a){var s,r,q
t.M.a(a)
try{if(B.v===$.ak){a.$0()
return}A.xw(null,null,this,a,t.H)}catch(q){s=A.ah(q)
r=A.cl(q)
A.uW(A.fq(s),t.l.a(r))}},
h2(a){return new A.qU(this,t.M.a(a))},
nW(a,b){b.i("0()").a(a)
if($.ak===B.v)return a.$0()
return A.xw(null,null,this,a,b)},
ey(a,b,c,d){c.i("@<0>").F(d).i("1(2)").a(a)
d.a(b)
if($.ak===B.v)return a.$1(b)
return A.Cz(null,null,this,a,b,c,d)},
nX(a,b,c,d,e,f){d.i("@<0>").F(e).F(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ak===B.v)return a.$2(b,c)
return A.Cy(null,null,this,a,b,c,d,e,f)},
iN(a,b,c,d){return b.i("@<0>").F(c).F(d).i("1(2,3)").a(a)}}
A.qU.prototype={
$0(){return this.a.nY(this.b)},
$S:0}
A.t4.prototype={
$0(){A.zi(this.a,this.b)},
$S:0}
A.hH.prototype={
gq(a){return this.a},
gJ(a){return this.a===0},
gU(a){return this.a!==0},
gV(){return new A.es(this,this.$ti.i("es<1>"))},
gaq(){var s=this.$ti
return A.oh(new A.es(this,s.i("es<1>")),new A.qK(this),s.c,s.y[1])},
O(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ko(a)},
ko(a){var s=this.d
if(s==null)return!1
return this.bc(this.fi(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.ws(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.ws(q,b)
return r}else return this.kF(b)},
kF(a){var s,r,q=this.d
if(q==null)return null
s=this.fi(q,a)
r=this.bc(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.f3(s==null?m.b=A.ur():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.f3(r==null?m.c=A.ur():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.ur()
p=A.lr(b)&1073741823
o=q[p]
if(o==null){A.us(q,p,[b,c]);++m.a
m.e=null}else{n=m.bc(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
am(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.f4()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.at(m))}},
f4(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cy(i.a,null,!1,t.z)
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
f3(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.us(a,b,c)},
fi(a,b){return a[A.lr(b)&1073741823]}}
A.qK.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.hJ.prototype={
bc(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.es.prototype={
gq(a){return this.a.a},
gJ(a){return this.a.a===0},
gU(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.hI(s,s.f4(),this.$ti.i("hI<1>"))},
u(a,b){return this.a.O(b)}}
A.hI.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.at(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iad:1}
A.c8.prototype={
fq(){return new A.c8(A.p(this).i("c8<1>"))},
gt(a){var s=this,r=new A.ev(s,s.r,A.p(s).i("ev<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gJ(a){return this.a===0},
gU(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.kn(b)},
kn(a){var s=this.d
if(s==null)return!1
return this.bc(s[this.dd(a)],a)>=0},
gP(a){var s=this.e
if(s==null)throw A.d(A.l("No elements"))
return A.p(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.p(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.f2(s==null?q.b=A.ut():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.f2(r==null?q.c=A.ut():r,b)}else return q.jZ(b)},
jZ(a){var s,r,q,p=this
A.p(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ut()
r=p.dd(a)
q=s[r]
if(q==null)s[r]=[p.da(a)]
else{if(p.bc(q,a)>=0)return!1
q.push(p.da(a))}return!0},
ag(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f5(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f5(s.c,b)
else return s.l7(b)},
l7(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dd(a)
r=n[s]
q=o.bc(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.f6(p)
return!0},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dk()}},
f2(a,b){A.p(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.da(b)
return!0},
f5(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.f6(s)
delete a[b]
return!0},
dk(){this.r=this.r+1&1073741823},
da(a){var s,r=this,q=new A.kI(A.p(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dk()
return q},
f6(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dk()},
dd(a){return J.ar(a)&1073741823},
bc(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
$ivV:1}
A.kI.prototype={}
A.ev.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.at(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iad:1}
A.oe.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:102}
A.V.prototype={
gt(a){return new A.aU(a,this.gq(a),A.bH(a).i("aU<V.E>"))},
X(a,b){return this.h(a,b)},
gJ(a){return this.gq(a)===0},
gU(a){return!this.gJ(a)},
gP(a){if(this.gq(a)===0)throw A.d(A.cw())
return this.h(a,0)},
u(a,b){var s,r=this.gq(a)
for(s=0;s<r;++s){if(J.a3(this.h(a,s),b))return!0
if(r!==this.gq(a))throw A.d(A.at(a))}return!1},
a6(a,b){var s,r
A.bH(a).i("n(V.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.d(A.at(a))}return!0},
M(a,b){var s,r
A.bH(a).i("n(V.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.d(A.at(a))}return!1},
aw(a,b){var s
if(this.gq(a)===0)return""
s=A.ul("",a,b)
return s.charCodeAt(0)==0?s:s},
eE(a,b){return new A.cj(a,b.i("cj<0>"))},
c3(a,b,c){var s=A.bH(a)
return new A.Q(a,s.F(c).i("1(V.E)").a(b),s.i("@<V.E>").F(c).i("Q<1,2>"))},
l(a,b){var s
A.bH(a).i("V.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.k(a,s,b)},
cr(a,b){return new A.bK(a,A.bH(a).i("@<V.E>").F(b).i("bK<1,2>"))},
a1(a,b){var s,r=A.bH(a)
r.i("k(V.E,V.E)?").a(b)
s=b==null?A.D7():b
A.k_(a,0,this.gq(a)-1,s,r.i("V.E"))},
mL(a,b,c,d){var s
A.bH(a).i("V.E?").a(d)
A.hd(b,c,this.gq(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.u4(a,"[","]")},
$iM:1,
$io:1,
$iE:1}
A.a2.prototype={
am(a,b){var s,r,q,p=A.p(this)
p.i("~(a2.K,a2.V)").a(b)
for(s=this.gV(),s=s.gt(s),p=p.i("a2.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gL(){return this.gV().c3(0,new A.of(this),A.p(this).i("T<a2.K,a2.V>"))},
bA(a,b,c,d){var s,r,q,p,o,n=A.p(this)
n.F(c).F(d).i("T<1,2>(a2.K,a2.V)").a(b)
s=A.r(c,d)
for(r=this.gV(),r=r.gt(r),n=n.i("a2.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
ly(a){var s,r,q
A.p(this).i("o<T<a2.K,a2.V>>").a(a)
for(s=a.$ti,r=new A.ea(J.S(a.a),a.b,s.i("ea<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
O(a){return this.gV().u(0,a)},
gq(a){var s=this.gV()
return s.gq(s)},
gJ(a){var s=this.gV()
return s.gJ(s)},
gU(a){var s=this.gV()
return s.gU(s)},
gaq(){return new A.hK(this,A.p(this).i("hK<a2.K,a2.V>"))},
p(a){return A.ua(this)},
$iX:1}
A.of.prototype={
$1(a){var s=this.a,r=A.p(s)
r.i("a2.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a2.V").a(s)
return new A.T(a,s,r.i("T<a2.K,a2.V>"))},
$S(){return A.p(this.a).i("T<a2.K,a2.V>(a2.K)")}}
A.og.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.u(a)
r.a=(r.a+=s)+": "
s=A.u(b)
r.a+=s},
$S:24}
A.hK.prototype={
gq(a){var s=this.a
return s.gq(s)},
gJ(a){var s=this.a
return s.gJ(s)},
gU(a){var s=this.a
return s.gU(s)},
gP(a){var s=this.a,r=s.gV()
r=s.h(0,r.gP(r))
return r==null?this.$ti.y[1].a(r):r},
gt(a){var s=this.a,r=s.gV()
return new A.hL(r.gt(r),s,this.$ti.i("hL<1,2>"))}}
A.hL.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.i_.prototype={
k(a,b,c){var s=A.p(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aN("Cannot modify unmodifiable map"))}}
A.f2.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.p(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
O(a){return this.a.O(a)},
am(a,b){this.a.am(0,A.p(this).i("~(1,2)").a(b))},
gJ(a){var s=this.a
return s.gJ(s)},
gU(a){var s=this.a
return s.gU(s)},
gq(a){var s=this.a
return s.gq(s)},
gV(){return this.a.gV()},
p(a){return this.a.p(0)},
gaq(){return this.a.gaq()},
gL(){return this.a.gL()},
bA(a,b,c,d){return this.a.bA(0,A.p(this).F(c).F(d).i("T<1,2>(3,4)").a(b),c,d)},
$iX:1}
A.dD.prototype={}
A.d6.prototype={
gJ(a){return this.gq(this)===0},
gU(a){return this.gq(this)!==0},
K(a,b){var s
for(s=J.S(A.p(this).i("o<1>").a(b));s.m();)this.l(0,s.gn())},
dH(a){var s,r,q=this.bm(0)
for(s=this.gt(this);s.m();){r=s.gn()
if(a.u(0,r))q.ag(0,r)}return q},
p(a){return A.u4(this,"{","}")},
a6(a,b){var s
A.p(this).i("n(1)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
aw(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.cT(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.u(q.gn())
while(q.m())}else{r=s
do r=r+b+A.u(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.p(this).i("n(1)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gP(a){var s=this.gt(this)
if(!s.m())throw A.d(A.cw())
return s.gn()},
X(a,b){var s,r
A.jS(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.nP(b,b-r,this,"index"))},
$iM:1,
$io:1,
$idA:1}
A.hU.prototype={
dH(a){var s,r,q,p=this,o=p.fq()
for(s=A.kJ(p,p.r,A.p(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.u(0,q))o.l(0,q)}return o},
bm(a){var s=this.fq()
s.K(0,this)
return s}}
A.l5.prototype={
l(a,b){this.$ti.c.a(b)
return A.B2()}}
A.ht.prototype={
u(a,b){return this.a.u(0,b)},
gq(a){return this.a.a},
gt(a){var s=this.a
return A.kJ(s,s.r,A.p(s).c)},
bm(a){return this.a.bm(0)}}
A.fk.prototype={}
A.i0.prototype={}
A.kG.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.l2(b):s}},
gq(a){return this.b==null?this.c.a:this.bp().length},
gJ(a){return this.gq(0)===0},
gU(a){return this.gq(0)>0},
gV(){if(this.b==null){var s=this.c
return new A.aa(s,A.p(s).i("aa<1>"))}return new A.kH(this)},
gaq(){var s,r=this
if(r.b==null){s=r.c
return new A.aS(s,A.p(s).i("aS<2>"))}return A.oh(r.bp(),new A.qM(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.A(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.O(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.lq().k(0,b,c)},
O(a){if(this.b==null)return this.c.O(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
am(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.am(0,b)
s=o.bp()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.rz(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.at(o))}},
bp(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
lq(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.r(t.N,t.z)
r=n.bp()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
l2(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.rz(this.a[a])
return this.b[a]=s}}
A.qM.prototype={
$1(a){return this.a.h(0,A.A(a))},
$S:27}
A.kH.prototype={
gq(a){return this.a.gq(0)},
X(a,b){var s=this.a
if(s.b==null)s=s.gV().X(0,b)
else{s=s.bp()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gV()
s=s.gt(s)}else{s=s.bp()
s=new J.dS(s,s.length,A.K(s).i("dS<1>"))}return s},
u(a,b){return this.a.O(b)}}
A.r1.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:25}
A.r0.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:25}
A.ix.prototype={
n8(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.hd(a4,a5,a2)
s=$.yh()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.tm(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.tm(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.f(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.f(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.b5("")
g=o}else g=o
g.a+=B.b.E(a3,p,q)
c=A.ap(j)
g.a+=c
p=k
continue}}throw A.d(A.a5("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.E(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.vq(a3,m,a5,n,l,r)
else{b=B.c.a2(r-1,4)+1
if(b===1)throw A.d(A.a5(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bF(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.vq(a3,m,a5,n,l,a)
else{b=B.c.a2(a,4)
if(b===1)throw A.d(A.a5(a1,a3,a5))
if(b>1)a3=B.b.bF(a3,a5,a5,b===2?"==":"=")}return a3}}
A.md.prototype={}
A.dX.prototype={}
A.iM.prototype={}
A.iW.prototype={}
A.h1.prototype={
p(a){var s=A.iX(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.jq.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.jp.prototype={
aJ(a,b){var s=A.Cp(a,this.gmt().a)
return s},
av(a,b){var s=A.AJ(a,this.gmB().b,null)
return s},
gmB(){return B.fK},
gmt(){return B.fJ}}
A.o7.prototype={}
A.o6.prototype={}
A.qO.prototype={
j_(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.ap(92)
s.a+=o
o=A.ap(117)
s.a+=o
o=A.ap(100)
s.a+=o
o=p>>>8&15
o=A.ap(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ap(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ap(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.ap(92)
s.a+=o
switch(p){case 8:o=A.ap(98)
s.a+=o
break
case 9:o=A.ap(116)
s.a+=o
break
case 10:o=A.ap(110)
s.a+=o
break
case 12:o=A.ap(102)
s.a+=o
break
case 13:o=A.ap(114)
s.a+=o
break
default:o=A.ap(117)
s.a+=o
o=A.ap(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ap(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ap(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.ap(92)
s.a+=o
o=A.ap(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.E(a,r,m)},
d8(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.jq(a,null))}B.a.l(s,a)},
cT(a){var s,r,q,p,o=this
if(o.iZ(a))return
o.d8(a)
try{s=o.b.$1(a)
if(!o.iZ(s)){q=A.vR(a,null,o.gfv())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.ah(p)
q=A.vR(a,r,o.gfv())
throw A.d(q)}},
iZ(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.j_(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d8(a)
q.o7(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d8(a)
r=q.o8(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
o7(a){var s,r,q=this.c
q.a+="["
s=J.aB(a)
if(s.gU(a)){this.cT(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cT(s.h(a,r))}}q.a+="]"},
o8(a){var s,r,q,p,o,n,m=this,l={}
if(a.gJ(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.cy(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.am(0,new A.qP(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.j_(A.A(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.cT(r[n])}p.a+="}"
return!0}}
A.qP.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:24}
A.qN.prototype={
gfv(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.kd.prototype={}
A.qa.prototype={
m0(a){return new A.r_(this.a).kp(t.L.a(a),0,null,!0)}}
A.r_.prototype={
kp(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.hd(b,c,J.bJ(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.Bj(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.Bi(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.de(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.Bk(o)
l.b=0
throw A.d(A.a5(m,a,p+l.c))}return n},
de(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.R(b+c,2)
r=q.de(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.de(a,s,c,d)}return q.ms(a,b,c,d)},
ms(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.b5(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.f(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.f(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.f(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ap(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ap(h)
e.a+=p
break
case 65:p=A.ap(h)
e.a+=p;--d
break
default:p=A.ap(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.f(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.f(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.f(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.f(a,l)
p=A.ap(a[l])
e.a+=p}else{p=A.wa(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ap(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.dY.prototype={
W(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.dY)if(this.a===b.a)s=this.b===b.b
return s},
gI(a){return A.ch(this.a,this.b,B.f,B.f,B.f,B.f)},
H(a,b){var s
t.ml.a(b)
s=B.c.H(this.a,b.a)
if(s!==0)return s
return B.c.H(this.b,b.b)},
p(a){var s=this,r=A.yY(A.zY(s)),q=A.iO(A.zW(s)),p=A.iO(A.zS(s)),o=A.iO(A.zT(s)),n=A.iO(A.zV(s)),m=A.iO(A.zX(s)),l=A.vx(A.zU(s)),k=s.b,j=k===0?"":A.vx(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaR:1}
A.dn.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.dn&&this.a===b.a},
gI(a){return B.c.gI(this.a)},
H(a,b){return B.c.H(this.a,t.jS.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.R(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.R(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.nw(B.c.p(o%1e6),6,"0")},
$iaR:1}
A.kz.prototype={
p(a){return this.A()},
$iD:1}
A.ai.prototype={
gbJ(){return A.zR(this)}}
A.it.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iX(s)
return"Assertion failed"}}
A.d8.prototype={}
A.cc.prototype={
gdh(){return"Invalid argument"+(!this.a?"(s)":"")},
gdg(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.u(p),n=s.gdh()+q+o
if(!s.a)return n
return n+s.gdg()+": "+A.iX(s.gej())},
gej(){return this.b}}
A.f5.prototype={
gej(){return A.uB(this.b)},
gdh(){return"RangeError"},
gdg(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.u(q):""
else if(q==null)s=": Not greater than or equal to "+A.u(r)
else if(q>r)s=": Not in inclusive range "+A.u(r)+".."+A.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.u(r)
return s}}
A.jf.prototype={
gej(){return A.a(this.b)},
gdh(){return"RangeError"},
gdg(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.hu.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.k8.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.f9.prototype={
p(a){return"Bad state: "+this.a}}
A.iI.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iX(s)+"."}}
A.jG.prototype={
p(a){return"Out of Memory"},
gbJ(){return null},
$iai:1}
A.hn.prototype={
p(a){return"Stack Overflow"},
gbJ(){return null},
$iai:1}
A.qw.prototype={
p(a){return"Exception: "+this.a}}
A.F.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.E(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.f(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.f(e,n)
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
k=""}return g+l+B.b.E(e,i,j)+k+"\n"+B.b.a3(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.u(f)+")"):g}}
A.o.prototype={
cr(a,b){return A.yO(this,A.p(this).i("o.E"),b)},
c3(a,b,c){var s=A.p(this)
return A.oh(this,s.F(c).i("1(o.E)").a(b),s.i("o.E"),c)},
cS(a,b){var s=A.p(this)
return new A.R(this,s.i("n(o.E)").a(b),s.i("R<o.E>"))},
eE(a,b){return new A.cj(this,b.i("cj<0>"))},
u(a,b){var s
for(s=this.gt(this);s.m();)if(J.a3(s.gn(),b))return!0
return!1},
by(a,b,c,d){var s,r
d.a(b)
A.p(this).F(d).i("1(1,o.E)").a(c)
for(s=this.gt(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a6(a,b){var s
A.p(this).i("n(o.E)").a(b)
for(s=this.gt(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
aw(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=J.cT(q.gn())
if(!q.m())return s
r=b.gJ(b)
if(r){r=s
do r+=J.cT(q.gn())
while(q.m())}else{r=s
do r=r+A.u(b)+J.cT(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
M(a,b){var s
A.p(this).i("n(o.E)").a(b)
for(s=this.gt(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bH(a,b){var s=A.N(this,A.p(this).i("o.E"))
return s},
bG(a){return this.bH(0,!0)},
gq(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gJ(a){return!this.gt(this).m()},
gU(a){return!this.gJ(this)},
gP(a){var s=this.gt(this)
if(!s.m())throw A.d(A.cw())
return s.gn()},
gaG(a){var s,r=this.gt(this)
if(!r.m())throw A.d(A.cw())
s=r.gn()
if(r.m())throw A.d(A.vJ())
return s},
aV(a,b,c){var s,r=A.p(this)
r.i("n(o.E)").a(b)
r.i("o.E()?").a(c)
for(r=this.gt(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.cw())},
al(a,b){return this.aV(0,b,null)},
X(a,b){var s,r
A.jS(b,"index")
s=this.gt(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.nP(b,b-r,this,"index"))},
p(a){return A.zz(this,"(",")")}}
A.T.prototype={
p(a){return"MapEntry("+A.u(this.a)+": "+A.u(this.b)+")"}}
A.al.prototype={
gI(a){return A.C.prototype.gI.call(this,0)},
p(a){return"null"}}
A.C.prototype={$iC:1,
W(a,b){return this===b},
gI(a){return A.hc(this)},
p(a){return"Instance of '"+A.jN(this)+"'"},
gY(a){return A.lp(this)},
toString(){return this.p(this)}}
A.l2.prototype={
p(a){return""},
$icF:1}
A.pW.prototype={
gmz(){var s,r=this.b
if(r==null)r=$.oN.$0()
s=r-this.a
if($.vj()===1e6)return s
return s*1000}}
A.b5.prototype={
gq(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iAe:1}
A.q9.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.A(b)
s=B.b.cG(b,"=")
if(s===-1){if(b!=="")a.k(0,A.uy(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.E(b,0,s)
q=B.b.bn(b,s+1)
p=this.a
a.k(0,A.uy(r,0,r.length,p,!0),A.uy(q,0,q.length,p,!0))}return a},
$S:40}
A.q8.prototype={
$2(a,b){throw A.d(A.a5("Illegal IPv6 address, "+a,this.a,b))},
$S:49}
A.i1.prototype={
gfR(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.u(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.b.gI(r.gfR())
r.y!==$&&A.y2()
r.y=s
q=s}return q},
gbl(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.wi(s==null?"":s)
r.z!==$&&A.y2()
q=r.z=new A.dD(s,t.oP)}return q},
giW(){return this.b},
gei(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.a7(s,"v",1))return B.b.E(s,1,s.length-1)
return s},
geo(){var s=this.d
return s==null?A.wE(this.a):s},
geq(){var s=this.f
return s==null?"":s},
gio(){var s=this.r
return s==null?"":s},
gip(){return this.c!=null},
gir(){return this.f!=null},
giq(){return this.r!=null},
p(a){return this.gfR()},
W(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.geI())if(p.c!=null===b.gip())if(p.b===b.giW())if(p.gei()===b.gei())if(p.geo()===b.geo())if(p.e===b.giG()){r=p.f
q=r==null
if(!q===b.gir()){if(q)r=""
if(r===b.geq()){r=p.r
q=r==null
if(!q===b.giq()){s=q?"":r
s=s===b.gio()}}}}return s},
$ikb:1,
geI(){return this.a},
giG(){return this.e}}
A.q7.prototype={
giV(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.cH(s,"?",m)
q=s.length
if(r>=0){p=A.i2(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.kv("data","",n,n,A.i2(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.kX.prototype={
gip(){return this.c>0},
gir(){return this.f<this.r},
giq(){return this.r<this.a.length},
geI(){var s=this.w
return s==null?this.w=this.km():s},
km(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.E(r.a,0,q)},
giW(){var s=this.c,r=this.b+3
return s>r?B.b.E(this.a,r,s-1):""},
gei(){var s=this.c
return s>0?B.b.E(this.a,s,this.d):""},
geo(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.xQ(B.b.E(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
giG(){return B.b.E(this.a,this.e,this.f)},
geq(){var s=this.f,r=this.r
return s<r?B.b.E(this.a,s+1,r):""},
gio(){var s=this.r,r=this.a
return s<r.length?B.b.bn(r,s+1):""},
gbl(){if(this.f>=this.r)return B.cr
return new A.dD(A.wi(this.geq()),t.oP)},
gI(a){var s=this.x
return s==null?this.x=B.b.gI(this.a):s},
W(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$ikb:1}
A.kv.prototype={}
A.or.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.tQ.prototype={
$1(a){return this.a.dA(this.b.i("0/?").a(a))},
$S:13}
A.tR.prototype={
$1(a){if(a==null)return this.a.h3(new A.or(a===undefined))
return this.a.h3(a)},
$S:13}
A.th.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.xh(a))return a
s=this.a
a.toString
if(s.O(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.j(A.aL(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dP(!0,"isUtc",t.y)
return new A.dY(r,0,!0)}if(a instanceof RegExp)throw A.d(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aP(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.r(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c0(n),p=s.gt(n);p.m();)m.push(A.cQ(p.gn()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.f(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.aB(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:57}
A.kF.prototype={
aF(a){if(a<=0||a>4294967296)throw A.d(A.w1(u.w+a))
return Math.random()*a>>>0},
cL(){return Math.random()},
$iuf:1}
A.fe.prototype={
d1(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.c.R(a-s,k)
r=a>>>0
a=B.c.R(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.R(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.R(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.R(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.R(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.R(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.b2()
l.b2()
l.b2()
l.b2()},
b2(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.R(o-n+(q-p)+(m-r),4294967296)>>>0},
aF(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.w1(u.w+a))
s=a-1
if((a&s)>>>0===0){p.b2()
return(p.a&s)>>>0}do{p.b2()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
cL(){var s,r=this
r.b2()
s=r.a
r.b2()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iuf:1}
A.oQ.prototype={
D(){var s,r=this
if(B.a.M(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.oR()))throw A.d(B.eW)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.ek)}}
A.oR.prototype={
$1(a){return A.a(a)<=0},
$S:26}
A.eg.prototype={
A(){return"QualityProfileKind."+this.b}}
A.ef.prototype={}
A.ml.prototype={}
A.mm.prototype={}
A.jL.prototype={
D(){var s,r,q,p,o=this
for(s=A.P(["exposure",o.a,"bloomStrength",o.b,"ssaoStrength",o.c,"depthOfFieldStrength",0,"vignette",o.e,"grain",o.f,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.O(s,A.p(s).i("O<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.d(A.w("PostProcessState."+q+" must be >= 0: "+A.u(p),null))}s=o.z
if(s<1||s>8)throw A.d(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.eO.prototype={}
A.j1.prototype={
D(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gae(0)||!k.b.gae(0)||!k.r.gae(0))throw A.d(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.u(s)+"/"+k.d,j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.u(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gae(0)||r.gc0()<1e-12)A.j(A.w("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.j(A.w("DirectionalLight.intensity must be >= 0: "+A.u(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.j(A.w("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.j(A.w("PointLight.intensity must be >= 0: "+A.u(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.j(A.w("PointLight.radius must be > 0: "+A.u(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
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
A.mZ.prototype={}
A.d5.prototype={
W(a,b){if(b==null)return!1
return J.eF(b)===A.lp(this)&&b instanceof A.d5&&this.a===b.a&&this.b===b.b},
gI(a){return A.ch(A.lp(this),this.a,this.b,B.f,B.f,B.f)}}
A.bv.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bQ.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cz.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.jH.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cu.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.e5.prototype={
A(){return"HandleRejection."+this.b}}
A.nq.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.d2.prototype={
gae(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
W(a,b){if(b==null)return!1
return b instanceof A.d2&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.ch(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.u(this.a)+", "+A.u(this.b)+", "+A.u(this.c)+")"}}
A.mE.prototype={}
A.jK.prototype={}
A.bg.prototype={}
A.tS.prototype={
$2(a,b){var s,r=t.jX
r.a(a)
r.a(b)
s=B.d.H(b.a,a.a)
return s===0?B.c.H(a.b.a,b.b.a):s},
$S:65}
A.is.prototype={
A(){return"AlphaMode."+this.b}}
A.ec.prototype={
D(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.uc("roughness",1)
A.uc("metallic",0)
A.uc("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.ax("uvScaleU",s),new A.ax("uvScaleV",r),new A.ax("uvOffsetU",0),new A.ax("uvOffsetV",0),new A.ax("tintR",l.c),new A.ax("tintG",l.d),new A.ax("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.w("MaterialDefinition."+n+" must be finite: "+A.u(m),k))}if(s===0||r===0)throw A.d(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.cI.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.bh.prototype={}
A.qb.prototype={
D(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.Q[s]
q=r.c
if(q<=0)throw A.d(A.w(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.w(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.iV.a(new A.qc())
for(p=B.a.gt(B.Q),q=new A.L(p,q,t.mW);q.m();)if(p.gn().c!==4)throw A.d(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.qc.prototype={
$1(a){return t.gm.a(a).a===B.cX},
$S:14}
A.c4.prototype={
D(){var s,r,q,p,o,n=this
n.a.D()
s=n.b.length
if(B.c.a2(s,14)!==0)throw A.d(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.lt()
r=n.c
if(r!=null){q=s/14|0
for(s=A.zI(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gae(0)&&s.b.gae(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.w("MeshData.localBounds must be a valid AABB",null))},
lt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.iV,a3=t.kh,a4=new A.R(B.Q,a2.a(new A.ol()),a3)
if(!a4.gt(0).m())return
s=new A.R(B.Q,a2.a(new A.om()),a3)
if(s.gq(0)!==1)throw A.d(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaG(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaG(0).b,n=r.b,m=0;m<q;++m){l=m*14
k=l+o
if(!(k<a3))return A.f(a2,k)
j=a2[k]
i=k+1
if(!(i<a3))return A.f(a2,i)
h=a2[i]
k+=2
if(!(k<a3))return A.f(a2,k)
g=a2[k]
k=l+n
if(!(k<a3))return A.f(a2,k)
f=a2[k]
i=k+1
if(!(i<a3))return A.f(a2,i)
e=a2[i]
i=k+2
if(!(i<a3))return A.f(a2,i)
d=a2[i]
k+=3
if(!(k<a3))return A.f(a2,k)
c=a2[k]
b=j*j+h*h+g*g
a=f*f+e*e+d*d
if(!B.a.a6(A.e([j,h,g,f,e,d,c],p),new A.on()))throw A.d(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.u(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.u(c),a1))}}}
A.ol.prototype={
$1(a){return t.gm.a(a).a===B.cX},
$S:14}
A.om.prototype={
$1(a){return t.gm.a(a).a===B.cW},
$S:14}
A.on.prototype={
$1(a){return isFinite(A.bX(a))},
$S:5}
A.ot.prototype={
D(){var s=this.a,r=s.a
if(!r.u(0,"sceneColor")||!r.u(0,"present"))throw A.d(A.w("resource plan must contain sceneColor and present",null))
if(s.M(0,new A.ov()))throw A.d(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.u(0,"vhsOutput"))throw A.d(A.w("resource history does not match vhsOutput ownership",null))}}
A.ov.prototype={
$1(a){return A.A(a).length===0},
$S:3}
A.oJ.prototype={}
A.jV.prototype={
it(a){var s=this
if(s.d)A.j(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.l("resource assembler is initialized"))
a.D()
s.a=a
s.c=1},
bf(){if(this.d)return
this.d=!0
this.a=null}}
A.eT.prototype={
A(){return"DrawMode."+this.b}}
A.iz.prototype={
A(){return"BlendMode."+this.b}}
A.bA.prototype={}
A.k3.prototype={
D(){var s=this
if(s.a<0||s.b<0)throw A.d(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.iH.prototype={
A(){return"ColorEncoding."+this.b}}
A.iS.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.jT.prototype={
D(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.dH(B.jy)
if(o.a!==0)A.j(A.av(o,r,"contains unknown pipeline features"))
if(q.a===B.aX&&p.gU(p))A.j(A.av(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.ei.prototype={
A(){return"RendererState."+this.b}}
A.ay.prototype={}
A.n0.prototype={
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.jv.prototype={
nN(a){return this.a.bT(a)}}
A.oj.prototype={
$3(a,b,c){return new A.cz(A.a(a),A.a(b),A.aJ(c))},
$S:75}
A.ka.prototype={}
A.oo.prototype={
bv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.wo(f,new A.j4(e.byteLength,B.bU,B.fi))
if(f.b!==B.h)A.j(A.l(g))
s=A.b(d.a)
r=f.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.cK(f)
A.bi(f,p)
if(f.b!==B.h)A.j(A.l(g))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a6(t.S)
for(n=a.a,m=0;m<6;++m){l=B.Q[m]
k=A.xD(l.a)
if(!o.l(0,k))continue
j=A.BD(n,k,l)
if(f.b!==B.h)A.j(A.l(g))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.j(A.l(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.wo(f,new A.j4(A.vY(i),B.bU,B.bT))
if(f.b!==B.h)A.j(A.l(g))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(h.a))
A.Az(f,h,t.L.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.ka(d,h,p,f,e.length/14|0,!1)},
ew(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dt(B.an,a))
this.b.bT(a)
return s},
b7(a){var s,r,q=this.c.ag(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.b7(a)},
eu(){var s,r,q,p
for(s=this.b.bz(),r=s.$ti,s=new A.ck(s.a(),r.i("ck<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bv(p.b))}},
gc1(){return this.b.bz().by(0,0,new A.oq(),t.S)}}
A.op.prototype={
$3(a,b,c){return new A.bv(A.a(a),A.a(b),A.aJ(c))},
$S:86}
A.oq.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.vY(s)
return a+r+s},
$S:92}
A.dd.prototype={}
A.k6.prototype={
aI(a){var s=this.a,r=A.uo(s,B.fl)
A.up(s,r,0,a)
return r},
o1(a,b){var s,r,q,p=this,o=p.b,n=o.bT(a),m=A.N(n.b,t.nh)
B.a.k(m,0,b)
s=n.a
o.eB(a,new A.dd(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.uo(p.a,s)
o.k(0,r,q)}A.up(p.a,q,0,b)},
ll(a,b){var s
this.b.bT(a)
s=this.c.h(0,a.a)
return s==null?b:s},
nJ(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.ll(a,s)},
nR(a){var s=this.e
s===$&&A.h()
return s},
nT(a){var s=this.f
s===$&&A.h()
return s},
nL(a){var s=this.r
s===$&&A.h()
return s},
nP(a){var s=this.w
s===$&&A.h()
return s},
bf(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.as(s,s.r,s.e,A.p(s).i("as<2>")),q=n.a,p=q.a,o=t.fL;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.G(0)
s=n.d
s===$&&A.h()
A.kn(q,s)
s=n.e
s===$&&A.h()
A.kn(q,s)
s=n.f
s===$&&A.h()
A.kn(q,s)
s=n.r
s===$&&A.h()
A.kn(q,s)
s=n.w
s===$&&A.h()
A.kn(q,s)},
eu(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aI($.vi())
i.e=i.aI($.vf())
i.f=i.aI($.vg())
i.r=i.aI($.ve())
i.w=i.aI($.vh())
for(s=i.b.bz(),r=s.$ti,s=new A.ck(s.a(),r.i("ck<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a6(o,new A.q4()))continue
l=A.uo(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.up(p,l,k,j)}q.k(0,n.a,l)}},
gc1(){return this.b.bz().by(0,0,new A.q3(),t.S)}}
A.q2.prototype={
$3(a,b,c){return new A.bQ(A.a(a),A.a(b),A.aJ(c))},
$S:104}
A.q4.prototype={
$1(a){return t.nh.a(a)==null},
$S:109}
A.q3.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:123}
A.e6.prototype={}
A.j_.prototype={
lN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.R.a(a)
s=new A.oU(A.e([],t.hJ),A.a6(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)r[p].ac(s,b)
o=s.lM(a,!1)
if(o.b.length!==0)return new A.j0(o,B.ho)
q=o.a
n=A.K(q)
m=new A.Q(q,n.i("m(1)").a(new A.mU()),n.i("Q<1,m>")).bm(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){k=r[p]
for(n=k.ab(d),j=0;j<1;++j){i=n[j]
if(!m.u(0,i.gC().a))throw A.d(A.l('RenderFeature "'+k.ga_()+'" created a pass "'+i.gC().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.a1(l,new A.mV(o))
return new A.j0(o,l)}}
A.mU.prototype={
$1(a){return t.A.a(a).a},
$S:130}
A.mV.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.H(B.a.is(s,new A.mS(a)),B.a.is(s,new A.mT(b)))},
$S:131}
A.mS.prototype={
$1(a){return t.A.a(a).a===this.a.gC().a},
$S:8}
A.mT.prototype={
$1(a){return t.A.a(a).a===this.a.gC().a},
$S:8}
A.j0.prototype={}
A.e1.prototype={
A(){return"FrameQueueState."+this.b}}
A.n_.prototype={}
A.mY.prototype={
lJ(a){if(a.length===0)throw A.d(A.av(a,"passId",null))
this.b=a
this.a.cM(a,A.xK())},
ju(){var s,r,q,p,o=t.z
o=A.r(o,o)
for(s=this.a,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.ay(p.a,p.b,p.d))}return A.bt(o,t.N,t.m9)},
br(a,b){var s,r=this.b
if(r==null)throw A.d(A.l("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.c.R(a,3)*b}}
A.fd.prototype={}
A.ao.prototype={
gbD(){var s=this.c,r=A.K(s)
return new A.R(s,r.i("n(1)").a(new A.ox()),r.i("R<1>"))},
gc7(){var s=this.c,r=A.K(s)
return new A.R(s,r.i("n(1)").a(new A.oy()),r.i("R<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.ox.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.i||s===B.G},
$S:16}
A.oy.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:16}
A.c2.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.b2.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.hh.prototype={
A(){return"ResourceFormat."+this.b}}
A.cs.prototype={
A(){return"GraphStage."+this.b}}
A.aD.prototype={
iB(){var s=this
return new A.aD(s.a,s.b,s.c,s.d,s.e,s.f+1)},
W(a,b){var s=this
if(b==null)return!1
return b instanceof A.aD&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gI(a){var s=this
return A.ch(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.f6.prototype={
A(){return"ResourceAccess."+this.b}}
A.J.prototype={}
A.fJ.prototype={}
A.oO.prototype={
an(a){var s,r,q,p,o,n,m=this
a.D()
s=null
try{r=t.a
s=A.AB(m.a,a.c,r.a(a.d.gV().bG(0)),r.a(a.f),a.b)}catch(q){if(A.ah(q) instanceof A.hm){++m.e
throw q}else throw q}p=new A.fJ(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
kt(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.as(s,s.r,s.e,a.$ti.i("as<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.b4.prototype={
D(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a6(s)
for(q=this.d.gL(),q=q.gt(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a6(s)
for(s=this.e.gL(),s=s.gt(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.oS.prototype={}
A.aW.prototype={
a9(){var s=this
return A.vz(B.dm,s.f,B.ad,B.Z,!0,!0,!0,!0,s.r,B.af,B.ag,s.d,s.e,!0,!1,!1)}}
A.oU.prototype={
lM(a,b){var s=this.lr(t.R.a(a),!1),r=this.a,q=A.K(r)
return new A.oT(A.an(new A.R(r,q.i("n(1)").a(new A.oZ()),q.i("R<1>")),t.A),s)},
lr(a,b){var s,r,q,p,o,n,m=this
t.R.a(a)
s=A.e([],t.aW)
r=m.a
q=A.K(r)
p=q.i("R<1>")
o=A.N(new A.R(r,q.i("n(1)").a(new A.oY()),p),p.i("o.E"))
m.kb(o,a,s)
m.kf(o,s)
m.kh(o,s)
m.ke(o,!1,s)
n=m.kj(o,s)
m.kg(o,n,s)
m.ki(o,s)
m.kd(o,n,s)
m.kc(o,s)
return s},
kb(a,b,c){var s,r,q,p
t.Q.a(a)
t.R.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
p=B.K.dH(b)
if(p.a!==0)B.a.l(c,new A.b2(B.fw,q.a,"missing capabilities: "+p.aw(0,", ")))}},
kf(a,b){var s,r,q,p,o,n,m
t.Q.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbD(),o=J.S(p.a),p=new A.L(o,p.b,p.$ti.i("L<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.b2(B.fr,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
kh(a,b){var s,r,q,p,o,n,m,l
t.Q.a(a)
t.b.a(b)
for(s=A.K(a),r=s.i("n(1)").a(new A.oX()),q=B.a.gt(a),s=new A.L(q,r,s.i("L<1>"));s.m();){r=q.gn()
p=r.gbD()
o=A.N(p,p.$ti.i("o.E"))
p=r.gc7()
n=A.N(p,p.$ti.i("o.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.b2(B.aI,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaG(o).a
l=B.a.gaG(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.b2(B.aI,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.b2(B.aI,r.a,"resolve source and destination must match format and extent"))}},
ke(a,b,c){var s,r,q,p,o,n,m,l
t.Q.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.t)(p),++m){l=p[m]
if(l.b===B.G)B.a.l(c,new A.b2(B.fu,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kj(a,b){var s,r,q,p,o,n,m,l,k,j
t.Q.a(a)
t.b.a(b)
s=A.r(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.t)(a),++q){p=a[q]
for(o=p.gc7(),n=J.S(o.a),o=new A.L(n,o.b,o.$ti.i("L<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.b2(B.fq,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kg(a,b,c){var s,r,q,p,o,n,m
t.Q.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbD(),p=J.S(q.a),q=new A.L(p,q.b,q.$ti.i("L<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.G)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.b2(B.bZ,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.cG(a,m)>s)B.a.l(c,new A.b2(B.bZ,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
ki(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbD(),o=J.S(p.a),p=new A.L(o,p.b,p.$ti.i("L<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
for(l=q.gc7(),k=J.S(l.a),l=new A.L(k,l.b,l.$ti.i("L<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.b2(B.ft,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
kd(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.Q.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r){q=a[r]
for(p=q.gbD(),o=J.S(p.a),p=new A.L(o,p.b,p.$ti.i("L<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.G)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gc7().al(0,new A.oW(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.b2(B.fs,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
kc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
t.b.a(b)
s=t.S
r=A.r(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gc7(),o=J.S(p.a),p=new A.L(o,p.b,p.$ti.i("L<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.jk(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a6(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbD(),p=J.S(s.a),s=new A.L(p,s.b,s.$ti.i("L<1>"));s.m();){o=p.gn()
if(o.b===B.G)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cy(s,!1,!1,p)
s=a.length
i=A.cy(s,!1,!1,p)
h=new A.oV(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.b2(B.fv,a[q].a,"participates in a resource dependency cycle"))}}}}
A.oZ.prototype={
$1(a){t.A.a(a)
return A.ud()},
$S:8}
A.oY.prototype={
$1(a){t.A.a(a)
return A.ud()},
$S:8}
A.oX.prototype={
$1(a){return t.A.a(a).f},
$S:8}
A.oW.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:16}
A.oV.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.f(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.f(s,a)
if(s[a])return!1
B.a.k(n,a,!0)
r=o.c
if(!(a<r.length))return A.f(r,a)
r=r[a]
r=A.kJ(r,r.r,A.p(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:26}
A.oT.prototype={}
A.kE.prototype={$ibP:1,
ga_(){return this.a},
gC(){return this.b},
geG(){return this.c}}
A.he.prototype={
dv(a){var s,r,q=a.c,p=q.a
if(!p.gae(0))A.j(A.w("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.j(A.w("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.j(A.w(u.u,null))
s=this.a.bT(a.a)
q=q.aa()
p=s.d.gar()
r=A.K(p)
return A.ba(new A.Q(p,r.i("H(1)").a(q.gaA()),r.i("Q<1,H>")))},
giw(){return new A.cL(this.mZ(),t.fJ)},
mZ(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$giw(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bz(),n=o.$ti,o=new A.ck(o.a(),n.i("ck<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.D()
f=k.a(g.a)
m.Z(f)
f=f.a
if(!(f>=0&&f<j.length)){A.f(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.aa()
f=f.gar()
d=A.K(f)
r=5
return a.b=new A.kE(h,g,A.ba(new A.Q(f,d.i("H(1)").a(i.gaA()),d.i("Q<1,H>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iA3:1}
A.p0.prototype={
$3(a,b,c){return new A.cu(A.a(a),A.a(b),A.aJ(c))},
$S:142}
A.p9.prototype={
es(a,b){var s,r
if(this.r)A.j(A.l("resource library is disposed"))
s=this.a
a.D()
r=s.b.aD(a,b)
s.c.k(0,r.a,s.bv(a))
this.d.l(0,r)
return r},
iQ(a){if(this.r)A.j(A.l("resource library is disposed"))
this.a.b7(a)
this.d.ag(0,a)},
iO(a){var s
if(this.r)A.j(A.l("resource library is disposed"))
a.D()
s=this.b.a.aD(a,null)
this.e.l(0,s)
return s},
iP(a,b,c){var s,r
if(this.r)A.j(A.l("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.j(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.j(A.w("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aD(new A.dd(new A.j6(c,b,1,!1,B.al,B.al,B.bW,1),A.cy(1,null,!1,t.nh),!1),a)
this.f.l(0,r)
return r},
bf(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.N(s,A.p(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.t)(r),++l){k=r[l]
j=o.ag(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b7(k)}r=i.e
q=A.N(r,A.p(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.t)(q),++l)n.b7(q[l])
q=i.d
o=A.N(q,A.p(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.t)(o),++l)m.b7(o[l])
s.G(0)
r.G(0)
q.G(0)
p.bf()
i.r=!0}}
A.qx.prototype={}
A.l3.prototype={$ibP:1,
ga_(){return this.a},
gC(){return this.b},
geG(){return this.c}}
A.rP.prototype={
$1(a){var s=this.a.w.a.ew(a),r=s.b!=null,q=r?s.d:s.e
return new A.hg(s.c,r,q,s.f)},
$S:38}
A.rQ.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.u(0,a))return this.b.x.gn().iD(a)
if(b!=null&&s.u(0,b))return this.b.x.gn().iD(b)
throw A.d(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:39}
A.rO.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.rH.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gP(r)},
$S:41}
A.rI.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.aP
s=q.b.z
r=s.length===0?null:B.a.gP(s)
return A.DF(s,3,q.a.d,r)},
$S:42}
A.rN.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.rC.prototype={
$0(){return this.a.at.a},
$S:43}
A.rE.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.rD.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.rM.prototype={
$0(){return this.a.$1("sceneColor")},
$S:4}
A.rA.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.rB.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.rJ.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.rK.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.rL.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.rG.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.rF.prototype={
$0(){return this.a.at.w},
$S:44}
A.rR.prototype={
$0(){return this.a},
$S:45}
A.qV.prototype={}
A.kQ.prototype={$iA2:1}
A.kB.prototype={$izk:1}
A.pf.prototype={
gaN(){var s=this.w
return s==null?A.j(A.l("renderer is not initialized")):s},
iu(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.b0)throw A.d(A.l("renderer can only be initialized once"))
a.D()
b.D()
s=m.a
if(s.b===B.a3)throw A.d(A.l("renderer device is context lost"))
m.e=B.jc
try{m.r=s.iL()
r=m.b
q=A.ou(a)
p=r.a
if(p.a!=null)A.j(A.l("configuration state is already initialized"))
a.D()
p.a=a
A.ou(a)
p.d=1
r.b.it(q)
r=A.zH()
m.w=new A.p9(A.zJ(s),r,A.Ag(s),A.a6(t.l0),A.a6(t.fP),A.a6(t.lu))
r=new A.jV()
p=new A.ne(s,r)
q=A.ou(a)
o=p.fa(q,a)
r.it(q)
p.c=new A.jM(new A.oJ(q),o)
m.x=p
m.y=new A.oO(s,A.r(t.N,t.e3))
m.as=a
A.x3(m)
m.e=B.b1}catch(n){s=m.y
if(s!=null){r=s.b
s.kt(new A.aS(r,A.p(r).i("aS<2>")))
r.G(0)}s=m.x
if(s!=null)s.bf()
s=m.w
if(s!=null)s.bf()
m.w=null
m.e=B.b0
throw n}return A.u3(t.H)},
lH(a,b){var s,r,q,p,o,n,m=this,l=null
m.l5()
m.cf()
r=B.a.u(m.d,a)
if(!r)throw A.d(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.l("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gae(0))A.j(A.w("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gae(0)||q.gc0()<1e-12)A.j(A.w("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.j(A.w("CameraView requires 0 < near < far, got "+A.u(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.j(A.w("CameraView.aspect must be finite and > 0: "+A.u(q),l))
if(!r.a.gae(0)||!r.b.gae(0)||!r.c.gae(0))A.j(A.w("CameraView matrices must be finite",l))
b.b.D()
b.c.D()
r=b.w
if(!isFinite(r))A.j(A.w("FrameInput.timeSeconds must be finite: "+A.u(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ak)A.j(A.l("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ak
o.c=0
B.a.G(o.a)
s=o
try{r=m.r
if((r==null?A.j(A.l("renderer is not initialized")):r).z)m.b$=m.a.lI()
return s}catch(n){if(o.b!==B.ak)A.j(A.l("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.f1
m.eR()
m.ax=m.at=null
throw n}},
mC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cf()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.l("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ak)A.j(A.l("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hq(l,0,A.dP(m.c,"count",t.S),A.K(l).c).bH(0,!1)
m.b=B.f0
q=k
try{p=A.BO(a1,r,s,q)
o=p.a.ju()
m=o.gL().cS(0,new A.pg())
l=m.$ti
n=new A.cg(m,l.i("ay(1)").a(new A.ph()),l.i("cg<1,ay>")).by(0,B.eZ,new A.pi(),t.m9)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gc1()
g=g.c.gc1()
e=a1.w
e.a.gc1()
e.c.gc1()
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
return new A.n0(l,m,j,i,h,f+g,c+a+a0,d+b+e)}finally{a1.kE(s.e)
a1.ax=a1.at=null}},
l5(){var s,r,q,p=this
if(p.e!==B.cJ)return
if(p.a.b===B.a3)throw A.d(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.j(A.l("resource library is disposed"))
s.a.eu()
s.c.eu()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.j(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.j(A.l("GPU resource adapter is not initialized"))
s.c=new A.jM(q.a,s.fa(A.ou(r),r))
s=p.y
s.c=null
s.b.G(0)
A.x3(p)
p.e=B.b1},
cf(){var s=this,r=s.e
if(r!==B.b1)throw A.d(A.l("renderer is not ready: "+r.b))
if(s.a.b===B.a3){s.kw()
s.e=B.cJ
throw A.d(A.l("renderer context lost"))}}}
A.pg.prototype={
$1(a){return B.b.u(t.iO.a(a).a.toLowerCase(),"world")},
$S:46}
A.ph.prototype={
$1(a){return t.iO.a(a).b},
$S:47}
A.pi.prototype={
$2(a,b){var s=t.m9
s.a(a)
s.a(b)
return new A.ay(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:48}
A.kO.prototype={}
A.qJ.prototype={
kE(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.j(A.l(u.k))
r=s.fT(o)
if(r.b)A.j(A.l("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.kO(o))}catch(q){p.df(o)}},
eR(){var s=this.b$
this.b$=null
if(s!=null)this.df(s)},
kw(){var s,r,q
this.eR()
s=this.a$
r=J.vM(s.slice(0),A.K(s).c)
B.a.G(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.t)(r),++q)this.df(r[q].b)},
df(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fT(a).a)}catch(r){}}}
A.kU.prototype={}
A.bw.prototype={
H(a,b){var s,r=this
t.nL.a(b)
s=B.c.H(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.H(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.H(r.c.a,b.c.a)
if(s!==0)return s
return B.c.H(r.d,b.d)},
$iaR:1}
A.bs.prototype={
H(a,b){var s
t.dP.a(b)
s=B.d.H(b.a,this.a)
if(s!==0)return s
return B.c.H(this.b,b.b)},
$iaR:1}
A.aE.prototype={}
A.tW.prototype={
$2(a,b){var s=t.q
return s.a(a).a.H(0,s.a(b).a)},
$S:37}
A.tX.prototype={
$1(a){return t.q.a(a).b},
$S:50}
A.tU.prototype={
$2(a,b){var s=t.e
return s.a(a).a.H(0,s.a(b).a)},
$S:51}
A.tV.prototype={
$1(a){return t.e.a(a).b},
$S:52}
A.mA.prototype={}
A.mz.prototype={}
A.iq.prototype={
gar(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.H(o,n,p),new A.H(r,n,p),new A.H(o,q,p),new A.H(r,q,p),new A.H(o,n,s),new A.H(r,n,s),new A.H(o,q,s),new A.H(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.ee.prototype={}
A.eX.prototype={
A(){return"FrustumTest."+this.b}}
A.n1.prototype={
nZ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.bL
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.f2:B.f3}}
A.n2.prototype={
$4(a,b,c,d){var s=new A.H(a,b,c),r=new A.ee(s,d),q=Math.sqrt(s.gc0())
if(q<1e-9)s=r
else{s=1/q
s=new A.ee(new A.H(a*s,b*s,c*s),d/q)}return s},
$S:53}
A.d3.prototype={
a3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.d3(h)},
iS(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.fQ.a(a)
s=a.a
r=this.a
q=r.length
if(0>=q)return A.f(r,0)
p=r[0]
o=a.b
if(4>=q)return A.f(r,4)
n=r[4]
m=a.c
if(8>=q)return A.f(r,8)
l=r[8]
if(12>=q)return A.f(r,12)
k=s*p+o*n+m*l+r[12]
l=r[1]
n=r[5]
p=r[9]
if(13>=q)return A.f(r,13)
j=s*l+o*n+m*p+r[13]
p=r[2]
n=r[6]
l=r[10]
if(14>=q)return A.f(r,14)
i=s*p+o*n+m*l+r[14]
l=r[3]
n=r[7]
p=r[11]
if(15>=q)return A.f(r,15)
h=s*l+o*n+m*p+r[15]
return h===0||h===1?new A.H(k,j,i):new A.H(k/h,j/h,i/h)},
iC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
if(0>=d)return A.f(e,0)
s=e[0]
if(5>=d)return A.f(e,5)
r=e[5]
if(10>=d)return A.f(e,10)
d=e[10]
q=e[9]
p=e[6]
o=r*d-q*p
n=e[4]
m=e[1]
l=e[2]
k=s*o-n*(m*d-q*l)+e[8]*(m*p-r*l)
if(!isFinite(k)||Math.abs(k)<1e-12)A.j(A.l("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.u(k)+")"))
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
if(!(s<16))return A.f(i,s)
s=i[s]
if(!(d<16))return A.f(h,d)
h[d]=s}if(15>=16)return A.f(h,15)
h[15]=1
return new A.d3(h)},
gae(a){return B.q.a6(this.a,new A.oi())},
p(a){return"Mat4("+A.u(this.a)+")"}}
A.oi.prototype={
$1(a){return isFinite(A.bX(a))},
$S:5}
A.jR.prototype={
p(a){var s=this
return"Quat("+A.u(s.a)+", "+A.u(s.b)+", "+A.u(s.c)+", "+A.u(s.d)+")"}}
A.k7.prototype={
D(){var s=this.a
if(!s.gae(0))throw A.d(A.w("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.w("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.w(u.u,null))},
aa(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.vW(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
f=i.length
if(0>=f)return A.f(i,0)
h=i[0]
if(1>=f)return A.f(i,1)
p=i[1]
if(2>=f)return A.f(i,2)
o=i[2]
if(4>=f)return A.f(i,4)
n=i[4]
if(5>=f)return A.f(i,5)
m=i[5]
if(6>=f)return A.f(i,6)
l=i[6]
if(8>=f)return A.f(i,8)
k=i[8]
if(9>=f)return A.f(i,9)
j=i[9]
if(10>=f)return A.f(i,10)
f=this.a
return A.vW(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.H.prototype={
bU(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bd(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.H(s*r-q*p,q*o-n*r,n*p-s*o)},
gc0(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gc0())},
gae(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga8(){var s=this,r=Math.sqrt(s.gc0())
return r<1e-9?B.aa:new A.H(s.a/r,s.b/r,s.c/r)},
W(a,b){if(b==null)return!1
return b instanceof A.H&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.ch(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.u(this.a)+", "+A.u(this.b)+", "+A.u(this.c)+")"}}
A.hC.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.fH.prototype={
ga_(){return this.f},
ac(a,b){B.a.l(a.a,new A.ao(this.f,B.H,A.e([new A.J(this.x,B.i),new A.J(this.y,B.j)],t.C),!1))},
ab(a){var s=this,r=s.a.an(new A.b4(s.e,s.b,s.c,B.t,B.cp,B.ck)),q=A.cK(s.d),p=t.n,o=s.r===B.d1?new Float32Array(A.Z(A.e([1/s.Q,0],p))):new Float32Array(A.Z(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.ks(new A.aW(s.f,A.e([new A.J(s.x,B.i),new A.J(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$iag:1}
A.ks.prototype={
ad(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bU(r,a.ah(o.r).b)
A.b6(r,o.a.a9())
A.dc(r,B.a1,1,0,0,0)
A.c7(r,o.b.b)
q=t._
p=o.d
if(o.e)A.Ax(r,0,q.a(p.$0()))
else A.aw(r,0,q.a(p.$0()))
A.v(r,"uSource",B.u)
A.v(r,"uTexelStep",new A.x(B.as,o.f))
A.bi(r,o.c)
s.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.iA.prototype={
ga_(){return"bloomComposite"},
ac(a,b){B.a.l(a.a,new A.ao("bloomComposite",B.H,A.e([new A.J(this.f,B.i),new A.J(this.r,B.i),new A.J(this.w,B.j)],t.C),!1))},
ab(a){var s=this,r="bloomComposite",q=s.a.an(new A.b4(r,s.b,s.c,B.t,B.hX,B.hH)),p=A.cK(s.d),o=s.w,n=A.e([new A.J(s.f,B.i),new A.J(s.r,B.i),new A.J(o,B.j)],t.C)
return A.e([new A.kt(new A.aW(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$iag:1}
A.kt.prototype={
ad(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bU(r,a.cR(q.f).b)
A.Ay(r,1)
A.b6(r,B.dM)
A.c7(r,q.b.b)
A.aw(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.u)
A.v(r,"uBloomStrength",new A.x(B.e,p))
A.bi(r,q.c)
s.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.iQ.prototype={
ga_(){return"depthPrepass"},
ac(a,b){B.a.l(a.a,new A.ao("depthPrepass",B.fn,A.e([new A.J(this.w,B.j)],t.C),!1))},
ab(a){var s=this,r="depthPrepass",q=s.a.an(new A.b4(r,s.b,s.c,B.co,B.cm,B.hc))
return A.e([new A.kw(new A.aW(r,A.e([new A.J(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iag:1}
A.kw.prototype={
ad(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bU(a1,a2.ah("sceneDepth").b)
A.b6(a1,d.a.a9())
A.dc(a1,B.aE,1,0,0,0)
A.c7(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.x(B.e,a0.y))
A.v(a1,"uAlbedo",B.u)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.x,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.t)(s),++l){k=s[l]
j=k.a
i=j.gC()
A.v(a1,"uViewProjection",new A.x(B.r,new Float32Array(A.Z(a))))
A.v(a1,"uModel",new A.x(B.r,new Float32Array(A.Z(i.c.aa().a))))
d.ku(b,j.gC().b,p)
h=q.$1(j.gC().a)
i=h.a
if(a1.b!==B.h)A.j(A.l(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.j(A.l(c))
e=A.a(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.a(o.WebGL2RenderingContext.UNSIGNED_INT):A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.br(g,f)}else{if(a1.b!==B.h)A.j(A.l(c))
m.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.br(g,f)}}},
ku(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aw(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.x(B.e,0))
A.v(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.a9()
A.b6(q,r.dx?s.eF(!1):s)},
$ia8:1,
gC(){return this.a}}
A.hE.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.fM.prototype={
ga_(){return this.f},
ac(a,b){B.a.l(a.a,new A.ao(this.f,B.H,A.e([new A.J(this.w,B.i),new A.J(this.x,B.j)],t.C),!1))},
ab(a){var s=this,r=s.a.an(new A.b4(s.e,s.b,s.c,B.t,B.cp,B.ck)),q=A.cK(s.d),p=t.n,o=s.r===B.d2?new Float32Array(A.Z(A.e([1/s.z,0],p))):new Float32Array(A.Z(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.kx(new A.aW(s.f,A.e([new A.J(s.w,B.i),new A.J(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$iag:1}
A.kx.prototype={
ad(a){return},
$ia8:1,
gC(){return this.a}}
A.iU.prototype={
ga_(){return"dofComposite"},
ac(a,b){var s=this
B.a.l(a.a,new A.ao("dofComposite",B.H,A.e([new A.J(s.z,B.i),new A.J(s.Q,B.i),new A.J(s.as,B.i),new A.J(s.at,B.j)],t.C),!1))},
ab(a){var s=this,r="dofComposite",q=s.a.an(new A.b4(r,s.b,s.c,B.t,B.hW,B.h1)),p=A.cK(s.d)
return A.e([new A.ky(new A.aW(r,A.e([new A.J(s.z,B.i),new A.J(s.Q,B.i),new A.J(s.as,B.i),new A.J(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iag:1}
A.ky.prototype={
ad(a){var s,r=this,q=a.ah("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bU(n,q.b)
A.b6(n,r.a.a9())
A.c7(n,r.b.b)
s=t._
A.aw(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.u)
A.aw(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.a9)
A.aw(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.cV)
A.v(n,"uNear",new A.x(B.e,o.f))
A.v(n,"uFar",new A.x(B.e,o.r))
A.v(n,"uFocusDistance",new A.x(B.e,r.w))
A.v(n,"uFocusRange",new A.x(B.e,r.x))
A.v(n,"uStrength",new A.x(B.e,0))
A.bi(n,r.c)
p.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.j9.prototype={
ga_(){return"grade"},
ac(a,b){B.a.l(a.a,new A.ao("grade",B.H,A.e([new A.J(this.r,B.i),new A.J(this.w,B.j)],t.C),!1))},
ab(a){var s=this,r=s.a.an(new A.b4("grade",s.b,s.c,B.t,B.hT,B.hI)),q=A.cK(s.d),p=s.r,o=s.w
return A.e([new A.kD(new A.aW("grade",A.e([new A.J(p,B.i),new A.J(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$iag:1}
A.kD.prototype={
ad(a){var s=this,r=a.ah(s.f.a),q=a.b,p=q.a
A.bU(p,a.ah(s.r.a).b)
A.b6(p,s.a.a9())
A.c7(p,s.b.b)
A.aw(p,0,r.b)
A.v(p,"uScene",B.u)
A.aw(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.a9)
A.v(p,"uLutSize",new A.x(B.e,s.e))
A.v(p,"uStrength",new A.x(B.e,a.c.e.w))
A.bi(p,s.c)
q.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.jx.prototype={
ga_(){return"msaaResolve"},
ac(a,b){B.a.l(a.a,new A.ao("msaaResolve",B.fo,A.e([new A.J(this.b,B.i),new A.J(this.c,B.j)],t.C),!0))},
ab(a){var s=this.b,r=this.c
return A.e([new A.kK(new A.aW("msaaResolve",A.e([new A.J(s,B.i),new A.J(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$iag:1}
A.kK.prototype={
ad(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cR(this.c),j=a.cR(this.d),i=this.b
if(i.b!==B.h)A.j(A.l(u.k))
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
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.e([A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(m.WebGL2RenderingContext.NONE)],t.n))}A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.a(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.e([A.a(m.WebGL2RenderingContext.NONE),A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.a(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.a(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.e([A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.a(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$ia8:1,
gC(){return this.a}}
A.eN.prototype={}
A.iB.prototype={
ah(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cR(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ah(s)},
$iA1:1}
A.ue.prototype={}
A.hb.prototype={
ga_(){return"present"},
ac(a,b){B.a.l(a.a,new A.ao("present",B.fp,A.e([new A.J(this.f,B.i)],t.C),!1))},
ab(a){var s=this,r=s.a.an(new A.b4("present",s.b,s.c,B.t,B.i3,B.h_)),q=A.cK(s.d),p=s.f
return A.e([new A.kR(new A.aW("present",A.e([new A.J(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$iag:1}
A.kR.prototype={
ad(a){var s,r=this,q=a.cR(r.d),p=a.b,o=p.a
A.bU(o,null)
A.b6(o,r.a.a9())
A.c7(o,r.b.b)
A.bi(o,r.c)
A.aw(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.x(B.e,s.a))
A.v(o,"uVignette",new A.x(B.e,s.e))
A.v(o,"uGrain",new A.x(B.e,s.f))
A.v(o,"uOutputEncoding",new A.x(B.e,r.e===B.aF?1:0))
A.v(o,"uToneMap",B.k4)
p.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.jQ.prototype={
ga_(){return"ps1Quantize"},
ac(a,b){B.a.l(a.a,new A.ao("ps1Quantize",B.H,A.e([new A.J(this.e,B.i),new A.J(this.f,B.j)],t.C),!1))},
ab(a){var s=this,r="ps1Quantize",q=s.a.an(new A.b4(r,s.b,s.c,B.t,B.hZ,B.fU)),p=A.cK(s.d),o=s.e,n=s.f
return A.e([new A.kS(new A.aW(r,A.e([new A.J(o,B.i),new A.J(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$iag:1}
A.kS.prototype={
ad(a){var s=this,r=a.ah(s.d.a),q=a.b,p=q.a
A.bU(p,a.ah(s.e.a).b)
A.b6(p,s.a.a9())
A.c7(p,s.b.b)
A.aw(p,0,r.b)
A.v(p,"uScene",B.u)
A.v(p,"uQuantizationBits",new A.x(B.e,a.c.e.z))
A.v(p,"uDitherStrength",new A.x(B.e,0))
A.bi(p,s.c)
q.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.el.prototype={}
A.jY.prototype={
ga_(){return"shadow"},
ac(a,b){B.a.l(a.a,new A.ao("shadowCaster",B.fm,A.e([new A.J(this.x,B.j)],t.C),!1))},
ab(a){var s=this,r="shadowCaster",q=s.a.an(new A.b4(r,s.b,s.c,B.co,B.cm,B.hG))
return A.e([new A.kV(new A.aW(r,A.e([new A.J(s.x,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$iag:1}
A.kV.prototype={
ad(a){var s,r,q,p,o=this,n=a.ah("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bU(s,n.b)
A.b6(s,o.a.a9())
A.dc(s,B.aE,1,0,0,0)
return}r=A.w9(l)
o.r.$1(r)
s=m.a
A.bU(s,n.b)
A.b6(s,o.a.a9())
A.dc(s,B.aE,1,0,0,0)
A.c7(s,o.b.b)
A.v(s,"uAlbedo",B.u)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.t)(s),++p)o.kx(m,s[p],r)},
fK(a,b){var s,r=this.d.$1(b),q=a.a
A.aw(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.x(B.e,0))
s=this.a.a9()
A.b6(q,r.dx?s.eF(!1):s)},
kx(a,b,c){var s,r,q,p,o,n=this
if(t.Y.b(b)){if(!b.gC().r)return
n.fF(a,b.gC().c,c)
n.fK(a,b.gC().b)
s=n.c.$1(b.gC().a)
A.bi(a.a,s.a)
r=s.b
q=s.c
if(r)a.dJ(q,s.d,0)
else a.au(q,0)}else if(b instanceof A.e6){p=b.a
if(!p.gC().r)return
n.fF(a,p.gC().c,c)
n.fK(a,p.gC().b)
s=n.c.$1(p.gC().a)
A.bi(a.a,s.a)
r=s.b
q=s.c
o=b.b.length
if(r)a.dK(q,s.d,o,0)
else a.dI(q,0,o)}else throw A.d(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eF(b).p(0),null))},
fF(a,b,c){var s=a.a
A.v(s,"uModel",new A.x(B.r,new Float32Array(A.Z(b.aa().a))))
A.v(s,"uLightViewProjection",new A.x(B.r,new Float32Array(A.Z(c.a.a))))},
$ia8:1,
gC(){return this.a}}
A.tf.prototype={
$1(a){return this.a.a=a},
$S:55}
A.tg.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:56}
A.jZ.prototype={
ga_(){return"shadowedWorld"},
ac(a,b){var s=this,r=A.e([new A.J(s.db,B.i)],t.C)
if(s.ay)r.push(new A.J(s.dx,B.i))
r.push(new A.J(s.dy,B.j))
B.a.l(a.a,new A.ao("shadowedWorld",B.bY,r,!1))},
ab(a){var s=this,r="shadowedWorld",q=s.a.an(new A.b4(r,s.b,s.c,B.i0,B.hU,B.hF)),p=A.e([new A.J(s.db,B.i)],t.C)
if(s.ay)p.push(new A.J(s.dx,B.i))
p.push(new A.J(s.dy,B.j))
return A.e([new A.kW(new A.aW(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
$iag:1}
A.kW.prototype={
ad(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ah("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bU(b1,a4.b)
A.b6(b1,a2.a.a9())
s=a8.a
A.dc(b1,B.bA,1,s.c,s.b,s.a)
A.c7(b1,a2.b.b)
A.v(b1,"uAlbedo",B.u)
A.v(b1,"uNormalMap",B.k5)
A.v(b1,"uOrmMap",B.k6)
A.v(b1,"uEmissiveMap",B.k7)
A.v(b1,"uLightmap",B.k8)
s=t._
A.aw(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.a9)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.x(B.as,new Float32Array(A.Z(A.e([1/a2.ch,1/a2.CW],r)))))
A.aw(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.cV)
A.v(b1,"uVertexSnapGrid",new A.x(B.e,a9.y))
A.v(b1,"uSceneColorSize",new A.x(B.as,new Float32Array(A.Z(A.e([a2.ax,a2.ay],r)))))
A.v(b1,"uViewProjection",new A.x(B.r,new Float32Array(A.Z(a7.c.a))))
A.v(b1,"uView",new A.x(B.r,new Float32Array(A.Z(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.x(B.r,new Float32Array(A.Z(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.x(B.n,new Float32Array(A.Z(A.e([s.a,s.b,s.c],r)))))
A.v(b1,"uFogStart",new A.x(B.e,a8.c))
A.v(b1,"uFogEnd",new A.x(B.e,a8.d))
A.v(b1,"uFogHeightFalloff",new A.x(B.e,0))
A.v(b1,"uFogDensity",new A.x(B.e,0))
q=a2.Q.$0()
s=A.e([],t.D)
p=a2.as.$0()
p=J.S(p==null?B.aP:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.X
k=o?a3:q.c
if(k==null)k=B.at
A.v(b1,"uLightPosition",new A.x(B.n,new Float32Array(A.Z(A.e([l.a,l.b,l.c],r)))))
A.v(b1,"uLightDirection",new A.x(B.n,new Float32Array(A.Z(A.e([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.P
A.v(b1,"uLightColor",new A.x(B.n,new Float32Array(A.Z(A.e([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.v(b1,"uLightIntensity",new A.x(B.e,p==null?0:p))
A.v(b1,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.X
g=p?a3:i.b
if(g==null)g=B.P
A.v(b1,"uDirectionalDirection",new A.x(B.n,new Float32Array(A.Z(A.e([h.a,h.b,h.c],r)))))
A.v(b1,"uDirectionalColor",new A.x(B.n,new Float32Array(A.Z(A.e([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.x(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.f(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.aa
c=n?a3:e.c
if(c==null)c=B.P
m=""+f
A.v(b1,"uPointPosition"+m,new A.x(B.n,new Float32Array(A.Z(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uPointColor"+m,new A.x(B.n,new Float32Array(A.Z(A.e([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.x(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.x(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.f(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.aa
a=p?a3:e.c
if(a==null)a=B.at
c=p?a3:e.d
if(c==null)c=B.P
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.x(B.n,new Float32Array(A.Z(A.e([d.a,d.b,d.c],r)))))
A.v(b1,"uDirectSpotDirection"+n,new A.x(B.n,new Float32Array(A.Z(A.e([a.a,a.b,a.c],r)))))
A.v(b1,"uDirectSpotColor"+n,new A.x(B.n,new Float32Array(A.Z(A.e([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.v(b1,"uDirectSpotIntensity"+n,new A.x(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.v(b1,"uDirectSpotRange"+n,new A.x(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.v(b1,"uDirectSpotInnerCos"+n,new A.x(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.v(b1,"uDirectSpotOuterCos"+n,new A.x(B.e,Math.cos(m)))
p=p?0:1
A.v(b1,"uDirectSpotEnabled"+n,new A.x(B.e,p))}s=o?a3:q.f
A.v(b1,"uLightRange",new A.x(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.v(b1,"uLightInnerCos",new A.x(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.v(b1,"uLightOuterCos",new A.x(B.e,Math.cos(s)))
a0=a8.r
A.v(b1,"uAmbientColor",new A.x(B.n,new Float32Array(A.Z(A.e([a0.a,a0.b,a0.c],r)))))
A.v(b1,"uAmbientIntensity",new A.x(B.e,a8.w))
for(b1=a6.a,s=b1.length,r=a9.x,a1=0;a1<b1.length;b1.length===s||(0,A.t)(b1),++a1)a2.fL(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.t)(a6),++a1)a2.fL(a5,a6[a1],r)},
fL(a,b,c){var s,r,q,p,o,n=this
if(t.Y.b(b)){n.fM(a,b.gC().c)
s=b.gC()
r=b.gC()
q=b.gC()
b.gC()
n.fG(a,s.b,r.e,q.f,c,!0)
p=n.c.$1(b.gC().a)
A.bi(a.a,p.a)
s=p.b
r=p.c
if(s)a.dJ(r,p.d,0)
else a.au(r,0)}else if(b instanceof A.e6){o=b.a
n.fM(a,o.gC().c)
s=o.gC()
r=o.gC()
q=o.gC()
o.gC()
n.fG(a,s.b,r.e,q.f,c,!0)
p=n.c.$1(o.gC().a)
A.bi(a.a,p.a)
s=p.b
r=p.c
q=b.b.length
if(s)a.dK(r,p.d,q,0)
else a.dI(r,0,q)}else throw A.d(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eF(b).p(0),null))},
fG(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aw(o,0,p.a(s.e.$1(q.b)))
A.aw(o,3,p.a(s.f.$1(r)))
A.aw(o,4,p.a(s.r.$1(r)))
A.aw(o,5,p.a(s.w.$1(r)))
A.aw(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.x(B.e,0))
A.v(o,"uOpaqueCoverage",new A.x(B.e,c===B.aG?0:1))
A.v(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.x(B.n,new Float32Array(A.Z(A.e([q.c,q.d,q.e],p)))))
A.v(o,"uEmissiveStrength",new A.x(B.e,0))
A.v(o,"uUvScaleOffset",new A.x(B.k3,new Float32Array(A.Z(A.e([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.x(B.e,1))
A.v(o,"uRoughness",new A.x(B.e,1))
A.v(o,"uMetallic",new A.x(B.e,0))
A.v(o,"uOcclusionStrength",new A.x(B.e,1))
A.v(o,"uLightmapIntensity",new A.x(B.e,0))
A.v(o,"uReceivesShadow",new A.x(B.e,1))
A:{p=r
if(B.aG===c){switch(d.a){case 0:p=B.dO
break
case 1:p=B.dN
break}break A}if(B.N===c||B.dL===c){p=s.a.a9()
break A}}A.b6(o,q.dx?p.eF(!1):p)},
fM(a,b){var s=b.aa(),r=a.a
A.v(r,"uModel",new A.x(B.r,new Float32Array(A.Z(s.a))))
A.v(r,"uNormalMatrix",new A.x(B.r,new Float32Array(A.Z(s.iC().a))))},
$ia8:1,
gC(){return this.a}}
A.k1.prototype={
ga_(){return"ssaoOcclusion"},
ac(a,b){B.a.l(a.a,new A.ao("ssaoOcclusion",B.bX,A.e([new A.J(this.w,B.j)],t.C),!1))},
ab(a){var s=this,r="ssaoOcclusion",q=s.a.an(new A.b4(r,s.b,s.c,B.t,B.hY,B.fQ)),p=A.cK(s.d)
return A.e([new A.l_(new A.aW(r,A.e([new A.J(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iag:1}
A.l_.prototype={
ad(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bU(m,a.ah("ssaoRaw").b)
A.b6(m,p.a.a9())
if(n<=0){A.dc(m,B.a1,1,1,1,1)
return}A.dc(m,B.a1,1,0,0,0)
s=p.e.$0()
A.c7(m,p.b.b)
A.aw(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.u)
A.v(m,"uNear",new A.x(B.e,s.f))
A.v(m,"uFar",new A.x(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.f(r,0)
A.v(m,"uProjScaleX",new A.x(B.e,r[0]))
if(5>=q)return A.f(r,5)
A.v(m,"uProjScaleY",new A.x(B.e,r[5]))
A.v(m,"uRadius",new A.x(B.e,p.f))
A.v(m,"uStrength",new A.x(B.e,n))
A.bi(m,p.c)
o.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.k0.prototype={
ga_(){return"ssaoBlur"},
ac(a,b){B.a.l(a.a,new A.ao("ssaoBlur",B.bX,A.e([new A.J(this.y,B.i),new A.J(this.z,B.j)],t.C),!1))},
ab(a){var s=this,r="ssaoBlur",q=s.a.an(new A.b4(r,s.b,s.c,B.t,B.hO,B.hL)),p=A.cK(s.d)
return A.e([new A.kZ(new A.aW(r,A.e([new A.J(s.y,B.i),new A.J(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$iag:1}
A.kZ.prototype={
ad(a){var s,r,q=this,p=a.b,o=p.a
A.bU(o,a.ah("ssaoBlurred").b)
A.b6(o,q.a.a9())
if(a.c.e.c<=0){A.dc(o,B.a1,1,1,1,1)
return}A.dc(o,B.a1,1,0,0,0)
s=q.f.$0()
A.c7(o,q.b.b)
r=t._
A.aw(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.u)
A.aw(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.a9)
A.v(o,"uTexelSize",new A.x(B.as,new Float32Array(A.Z(A.e([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.x(B.e,s.f))
A.v(o,"uFar",new A.x(B.e,s.r))
A.bi(o,q.c)
p.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.kf.prototype={
ga_(){return"vhs"},
ac(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.ao("vhs",B.H,A.e([new A.J(this.r,B.i),new A.J(s,B.G),new A.J(s,B.j)],t.C),!1))},
ab(a){var s=this,r=s.a.an(new A.b4("vhs",s.b,s.c,B.t,B.hR,B.fW)),q=A.cK(s.d),p=s.r,o=s.w
return A.e([new A.l6(new A.aW("vhs",A.e([new A.J(p,B.i),new A.J(o,B.G),new A.J(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$iag:1}
A.l6.prototype={
ad(a){var s,r=this,q=a.ah(r.f.a),p=a.ah(r.r.a),o=a.b,n=a.c.e,m=n.CW,l=n.as
if(m)l*=0.5
s=m?0:n.ch
m=o.a
A.bU(m,p.b)
A.b6(m,r.a.a9())
A.c7(m,r.b.b)
A.aw(m,0,q.b)
A.v(m,"uScene",B.u)
A.aw(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.a9)
A.v(m,"uTime",new A.x(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.x(B.e,n.Q))
A.v(m,"uTrackingWeight",new A.x(B.e,l))
A.v(m,"uNoiseWeight",new A.x(B.e,n.at))
A.v(m,"uHeadSwitchWeight",new A.x(B.e,n.ax))
A.v(m,"uDropoutWeight",new A.x(B.e,n.ay))
A.v(m,"uGhostWeight",new A.x(B.e,s))
A.bi(m,r.c)
o.au(3,0)},
$ia8:1,
gC(){return this.a}}
A.hg.prototype={}
A.ko.prototype={
ga_(){return"world"},
ac(a,b){B.a.l(a.a,new A.ao("worldOpaqueTransparent",B.bY,A.e([new A.J(this.e,B.j)],t.C),!1))},
ab(a){var s=this,r=s.a.an(new A.b4("safeWorld",s.b,s.c,B.i2,B.t,B.fO)),q=s.e
return A.e([new A.l9(new A.aW("worldOpaqueTransparent",A.e([new A.J(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$iag:1}
A.l9.prototype={
ad(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bU(j,a.ah(n.d).b)
A.b6(j,n.a.a9())
s=k.a
A.dc(j,B.bA,1,s.c,s.b,s.a)
A.c7(j,n.b.b)
A.v(j,"uViewProjection",new A.x(B.r,new Float32Array(A.Z(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.X
s=t.n
A.v(j,"uLightDir",new A.x(B.n,new Float32Array(A.Z(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.x(B.n,new Float32Array(A.Z(A.e([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.x(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.t)(j),++o)n.fe(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.t)(l),++o)n.fe(m,l[o])},
fe(a,b){var s,r,q,p,o,n=this
if(b instanceof A.e6){s=b.a
n.fI(a,s.gC().c)
r=n.c.$1(s.gC().a)
A.bi(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dK(p,r.d,o,0)
else a.dI(p,0,o)}else if(t.Y.b(b)){n.fI(a,b.gC().c)
r=n.c.$1(b.gC().a)
A.bi(a.a,r.a)
q=r.b
p=r.c
if(q)a.dJ(p,r.d,0)
else a.au(p,0)}else throw A.d(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.eF(b).p(0),null))},
fI(a,b){var s=b.aa(),r=a.a
A.v(r,"uModel",new A.x(B.r,new Float32Array(A.Z(s.a))))
A.v(r,"uNormalMatrix",new A.x(B.r,new Float32Array(A.Z(s.iC().a))))},
$ia8:1,
gC(){return this.a}}
A.mj.prototype={
c8(a){var s,r,q
a.D()
s=A.a6(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.aZ
else q=r===0?B.aX:B.aY
return new A.ef(q,s)},
j5(a){var s,r=this.c8(a).a
A:{if(B.aZ===r){s=B.iM
break A}if(B.aY===r){s=B.iL
break A}s=B.ap
break A}return s}}
A.j5.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.fT.prototype={
A(){return"GpuBufferKind."+this.b}}
A.j7.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.j8.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.j4.prototype={}
A.j6.prototype={}
A.e4.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.fV.prototype={}
A.fU.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.ek.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.hm.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.da.prototype={
A(){return"UniformType."+this.b}}
A.x.prototype={}
A.eP.prototype={
A(){return"ClearMask."+this.b}}
A.iR.prototype={
au(a,b){var s=this.a
if(s.b!==B.h)A.j(A.l(u.k))
s.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.br(a,1)},
dI(a,b,c){var s=this.a
if(s.b!==B.h)A.j(A.l(u.k))
s.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.br(a,c)},
dJ(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.j(A.l(u.k))
s=v.G
r=A.a(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.a(s.WebGL2RenderingContext.UNSIGNED_INT):A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.br(a,1)},
dK(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.j(A.l(u.k))
s=v.G
r=A.a(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.a(s.WebGL2RenderingContext.UNSIGNED_INT):A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.af(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.br(a,c)},
$iz3:1}
A.jM.prototype={
iD(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.l("resource is not in candidate: "+a))
return s}}
A.ne.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.l("GPU resource adapter is not initialized"))
return s},
bf(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.ks(s.b)
r.b.bf()
r.c=null
r.e=!0},
fa(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.r(b,a),a1=A.e([],t.l2)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("R<1>")
s=new A.R(l,j.a(new A.nf()),k)
for(i=s,h=J.S(i.a),i=new A.L(h,i.b,i.$ti.i("L<1>")),g=this.a;i.m();){r=h.gn()
q=A.AC(g,this.kv(r,a3))
J.ip(a1,q)
J.bI(a0,r,q)}f=A.N(new A.R(l,j.a(new A.ng()),k),k.i("o.E"))
B.a.a0(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.t)(l),++e){o=l[e]
n=A.xQ(J.yA(o,11))
j=J.b9(a0,"sceneColor")
j.toString
J.bI(a0,o,j)}b=A.bt(a0,b,a)
return b}catch(d){for(b=a1,l=A.K(b).i("hi<1>"),b=new A.hi(b,l),b=new A.aU(b,b.gq(0),l.i("aU<a1.E>")),k=this.a,j=t.V,l=l.i("a1.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.uq(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
kv(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.fV(512,512,1,B.aH,!0)
if(a==="sceneDepth")return new A.fV(o,n,1,B.aH,!0)
s=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.T(a,"sceneColor#")
return new A.fV(r,q,1,p?B.bV:B.fj,p)},
ks(a){var s,r,q,p,o,n=A.u9(t.f7.a(a).gaq(),t._)
for(n=A.kJ(n,n.r,A.p(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.uq(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.nf.prototype={
$1(a){return!B.b.T(A.A(a),"sceneColor#")},
$S:3}
A.ng.prototype={
$1(a){return B.b.T(A.A(a),"sceneColor#")},
$S:3}
A.fh.prototype={
A(){return"_SlotState."+this.b}}
A.dI.prototype={
sb5(a){this.c=this.$ti.i("1?").a(a)}}
A.cD.prototype={
aD(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.dI(B.ay,n.i("dI<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.kQ
p.sb5(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bS(a){return this.aD(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dt(B.c1,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dt(B.c2,a))
s=q.b
if(s===B.az||s===B.ay)throw A.d(A.dt(B.an,a))},
bT(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.f(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
eB(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.Z(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.f(r,s)
r[s].sb5(b)},
b7(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dt(B.c1,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dt(B.c2,a))
r=q.b
if(r===B.az||r===B.ay)throw A.d(A.dt(B.fz,a))
q.b=B.az
q.sb5(null)
B.a.l(p.c,s);++p.e},
bz(){return new A.cL(this.n0(),this.$ti.i("cL<+(1,2)>"))},
n0(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bz(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.az||j===B.ay){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.ax(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.iy.prototype={
A(){return"BlendEquation."+this.b}}
A.dU.prototype={
A(){return"BlendFactor."+this.b}}
A.iN.prototype={
A(){return"CullFace."+this.b}}
A.iP.prototype={
A(){return"DepthFunc."+this.b}}
A.eU.prototype={
eF(a){var s=this
return A.vz(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aY.prototype={
A(){return"StateField."+this.b}}
A.qn.prototype={
mu(a){var s,r=this.a
if(r==null)return A.js(B.hD,t.dB)
s=A.a6(t.dB)
if(r.a!==a.a)s.l(0,B.b7)
if(r.b!==a.b)s.l(0,B.b8)
if(r.c!==a.c)s.l(0,B.b9)
if(r.d!==a.d)s.l(0,B.ba)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bb)
if(r.r!==a.r)s.l(0,B.bc)
if(r.w!==a.w)s.l(0,B.bd)
if(r.x!==a.x)s.l(0,B.be)
return s}}
A.de.prototype={$id0:1}
A.i4.prototype={}
A.i3.prototype={}
A.l8.prototype={}
A.km.prototype={
jX(a){var s=this,r=A.b(s.a.canvas)
s.c=A.W(new A.ql(s))
s.d=A.W(new A.qm(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
iL(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bM(A.a(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bM(A.a(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bM(A.a(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bM(A.a(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bM(A.a(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.u(0,"EXT_texture_filter_anisotropic")
if(d){s=l.fu(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.u(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.u(0,"EXT_color_buffer_float")
p=e.u(0,"EXT_color_buffer_half_float")
o=e.u(0,"WEBGL_lose_context")
e=l.a
n=A.cQ(e.getParameter(A.a(k.WebGL2RenderingContext.RENDERER)))
m=A.cQ(e.getParameter(A.a(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.oQ("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bM(a){var s=A.cQ(this.a.getParameter(a))
return typeof s=="number"?B.d.b8(s):0},
fu(a){var s=A.cQ(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$izn:1}
A.ql.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.a3},
$S:2}
A.qm.prototype={
$1(a){A.b(a)
this.a.b=B.h},
$S:2}
A.r3.prototype={
lI(){var s,r=this
if(r.b!==B.h)A.j(A.l(u.k))
s=r.w?A.i(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.de(new A.l8(s))},
fT(a){var s=a.a
if(!(s instanceof A.l8))throw A.d(A.av(a,"query","is not a GPU timer query"))
return s}}
A.l7.prototype={}
A.iT.prototype={
B(){var s=this
return A.P(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.iv.prototype={
jF(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.i(i.connect(A.b(s.destination)))
r=j.d
r===$&&A.h()
A.b(r.gain).value=0.25
q=j.e
q===$&&A.h()
A.b(q.gain).value=0.12
p=j.f
p===$&&A.h()
A.b(p.gain).value=0.4
o=j.r
o===$&&A.h()
A.b(o.gain).value=0.2
n=j.w
n===$&&A.h()
A.b(n.gain).value=0.4
m=j.x
m===$&&A.h()
A.b(m.gain).value=0.1
l=j.y
l===$&&A.h()
A.b(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.i(r[k].connect(i))
r=j.z
r===$&&A.h()
A.b(r.gain).value=1
q=j.Q
q===$&&A.h()
A.b(q.gain).value=0.35
A.i(o.connect(r))
A.i(n.connect(r))
A.i(p.connect(r))
p=j.as
p===$&&A.h()
A.i(r.connect(p))
A.i(p.connect(q))
A.i(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k2!==$&&A.G()
j.k2=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k3!==$&&A.G()
j.k3=p
A.i(q.connect(p))
A.i(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.i(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.k4!==$&&A.G()
j.k4=q
i=A.b(s.createChannelMerger(2))
j.ok!==$&&A.G()
j.ok=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p1!==$&&A.G()
j.p1=r
A.i(p.connect(q))
A.i(i.connect(A.b(s.destination)))
j.eX()},
eX(){var s,r=this,q=r.k4
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
c5(){var s=this.a
if(A.A(s.state)==="suspended")A.b(s.resume())},
fN(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"){s=q.f
s===$&&A.h()
return s}r=B.hV.h(0,a)
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
kH(){var s,r,q,p,o,n,m,l=this.a,k=A.aI(l.sampleRate),j=B.d.aO(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.cL()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
en(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ax.cL()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.i(r.connect(q))
A.i(q.connect(p.fN(a)))
r.onended=A.W(new A.m1(r,q))
r.start()},
iI(a){return this.en(a,1)},
iJ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this,k=l.at.h(0,a)
if(k==null)return
s=l.a
r=A.b(s.createBufferSource())
r.buffer=k
A.b(r.playbackRate).value=d*(0.94+l.ax.cL()*0.12)
q=A.b(s.createGain())
A.b(q.gain).value=c
p=A.b(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.b(p.positionX).value=b.a
A.b(p.positionY).value=b.b
A.b(p.positionZ).value=b.c
o=A.b(s.createBiquadFilter())
o.type="lowpass"
A.b(o.frequency).value=2e4
n=A.b(s.createGain())
A.b(n.gain).value=1
if(g!=null&&f!=null){A.b(o.frequency).value=f
A.b(n.gain).value=Math.pow(10,g/20)}else{s=l.ay!=null
if(s){s=l.ay
s.toString
m=l.f9(l.b.iH(e,s))
A.b(o.frequency).value=m.b
A.b(n.gain).value=Math.pow(10,m.a/20)}}l.CW.k(0,o,new A.kY(r,q,n,o,p,e))
r.onended=A.W(new A.m0(l,o))
A.i(r.connect(q))
A.i(q.connect(n))
A.i(n.connect(o))
A.i(o.connect(p))
A.i(p.connect(l.fN(a)))
r.start()},
ny(a,b,c,d){return this.iJ(a,b,c,1,d,null,null)},
f9(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.ax(r,q)},
eQ(a){var s,r,q,p,o=this
if(o.cx)return
s=o.at.h(0,a)
if(s==null)return
o.cx=!0
r=o.a
q=A.b(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.b(r.createGain())
A.b(p.gain).value=0.6
A.i(q.connect(p))
r=o.e
r===$&&A.h()
A.i(p.connect(r))
q.onended=A.W(new A.m2(o,q,p))
q.start()
o.cy=q},
cX(a){if(this.p2===a)return
this.p2=a
this.eX()},
jh(a){var s,r,q=this
q.cX(a.b===B.bn)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aA?1:0.55
r=q.c
r===$&&A.h()
r=A.b(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.b(s.gain).value=0.35*q.p4},
b9(a,b,c,d,e,f){var s,r,q=this
q.fr=B.d.N(c==null?q.fr:c,0,1)
q.fx=B.d.N(f==null?q.fx:f,0,1)
q.fy=B.d.N(b==null?q.fy:b,0,1)
q.go=B.d.N(a==null?q.go:a,0,1)
q.id=B.d.N(d==null?q.id:d,0,1)
if(e!=null)q.k1=e
s=q.d
s===$&&A.h()
A.b(s.gain).value=0.25*q.fy
s=q.r
s===$&&A.h()
A.b(s.gain).value=0.2*q.fy
s=q.w
s===$&&A.h()
A.b(s.gain).value=0.4*q.fy
s=q.x
s===$&&A.h()
A.b(s.gain).value=0.1*q.fy
s=q.f
s===$&&A.h()
A.b(s.gain).value=0.4*q.go
s=q.e
s===$&&A.h()
A.b(s.gain).value=0.12*q.id
s=q.y
s===$&&A.h()
A.b(s.gain).value=q.fx
s=q.c
s===$&&A.h()
s=A.b(s.gain)
r=q.k1?0:q.fr*q.p3
s.value=r},
jf(a){var s=null
return this.b9(s,s,s,s,a,s)},
jd(a){var s=null
return this.b9(s,s,a,s,s,s)},
jg(a){var s=null
return this.b9(s,s,s,s,s,a)},
jc(a){var s=null
return this.b9(s,a,s,s,s,s)},
jb(a){var s=null
return this.b9(a,s,s,s,s,s)},
je(a){var s=null
return this.b9(s,s,s,a,s,s)},
ja(a){if(this.ay===a)return
this.ay=a
this.bu()},
bu(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.iU(p,g)
m=n==null?i.f9(h.iH(p,g)):new A.ax(n.b,n.c)
l=A.aI(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.aI(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.aI(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))}}}
A.m_.prototype={
$1(a){return this.j0(t.gc.a(a))},
j0(a){var s=0,r=A.bn(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bq(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.aj(A.aP(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.aj(A.aP(A.b(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.aj(A.aP(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ah(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.u(l))
s=5
break
case 2:s=1
break
case 5:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$$1,r)},
$S:58}
A.m1.prototype={
$1(a){A.b(a)
this.a.disconnect()
this.b.disconnect()},
$S:2}
A.m0.prototype={
$1(a){var s
A.b(a)
s=this.a.CW.ag(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.m2.prototype={
$1(a){var s,r
A.b(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:2}
A.kY.prototype={}
A.iw.prototype={
A(){return"AudioCategory."+this.b}}
A.lQ.prototype={
jH(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.eV)
if(!B.a.a6(A.e([d.a,d.b,d.c],t.n),new A.lR()))throw A.d(B.el)}}
A.lR.prototype={
$1(a){return isFinite(A.bX(a))},
$S:5}
A.lz.prototype={
jE(a,b){if(this.a.length===0)throw A.d(B.eb)
if(!B.a.a6(A.e([a.a,a.b,a.c],t.n),new A.lA()))throw A.d(B.ep)}}
A.lA.prototype={
$1(a){return isFinite(A.bX(a))},
$S:5}
A.fF.prototype={
D(){if(B.a.M(A.e([-1.5,-12,-28,2e4,1100,320],t.n),new A.lB()))throw A.d(B.eF)},
iT(a){this.D()
if(a.ax&&!a.ay&&!a.z)return new A.ax(-1.5,2e4)
if(a.ay)return new A.ax(-28,320)
return new A.ax(-12,1100)}}
A.lB.prototype={
$1(a){return!isFinite(A.bX(a))},
$S:5}
A.lM.prototype={
jG(a){var s=A.p(a)
if(new A.aa(a,s.i("aa<1>")).M(0,new A.lO())||new A.aS(a,s.i("aS<2>")).M(0,new A.lP()))throw A.d(B.eT)}}
A.lO.prototype={
$1(a){return A.A(a).length===0},
$S:3}
A.lP.prototype={
$1(a){var s
t.a.a(a)
s=J.aB(a)
return s.gJ(a)||s.M(a,new A.lN())},
$S:60}
A.lN.prototype={
$1(a){return A.A(a).length===0},
$S:3}
A.u2.prototype={}
A.lY.prototype={}
A.lS.prototype={
jI(a,b,c){var s
for(s=this.b.gaq(),s=s.gt(s);s.m();)s.gn().D()},
iU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this.a.e
if(h.h(0,a)==null)throw A.d(A.l("audio source room missing: "+a))
if(h.h(0,b)==null)throw A.d(A.l("audio listener room missing: "+b))
s=this.le(a,b)
for(h=s.a,r=h.length,q=this.b,p=0,o=2e4,n=0;n<h.length;h.length===r||(0,A.t)(h),++n){m=h[n]
l=q.h(0,m.a)
k=(l==null?B.bt:l).iT(m)
j=k.b
p+=k.a
if(j<o)o=j}r=!s.b
if(r&&a!==b){p=-48
o=240}q=A.e([],t.s)
for(i=h.length,n=0;n<h.length;h.length===i||(0,A.t)(h),++n)q.push(h[n].a)
h=B.d.N(p,-60,0)
i=B.c.N(o,120,2e4)
r=!r||a===b
return new A.lY(A.an(q,t.N),h,i,r)},
le(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.kN
s=t.N
r=A.P([a0,0],s,t.i)
q=A.P([a0,B.R],s,t.fB)
p=A.aC([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.U,l=p.$ti.c;p.a!==0;){k=A.N(p,l)
B.a.a1(k,new A.lT(r))
j=B.a.gP(k)
p.ag(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.hz(s,!0)}i=o.az(j)
h=A.N(i,i.$ti.i("o.E"))
B.a.a1(h,new A.lU())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.t)(h),++g){f=h[g]
e=f.bC(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.bt:d).iT(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.N(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.kM}}
A.lT.prototype={
$2(a,b){var s,r,q
A.A(a)
A.A(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.H(r,s)
return q===0?B.b.H(a,b):q},
$S:61}
A.lU.prototype={
$2(a,b){var s=t.U
return B.b.H(s.a(a).a,s.a(b).a)},
$S:62}
A.hz.prototype={}
A.mi.prototype={
ek(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.c(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.ys().bd(q).ga8()
p.d=q
p.c=p.b.bd(q).ga8()
p.a=a}}
A.mX.prototype={}
A.k4.prototype={}
A.nc.prototype={
kz(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cQ(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cJ(a,b,c,d,e,f){return this.n1(a,b,c,d,e,f)},
n1(a,b,c,a0,a1,a2){var s=0,r=A.bn(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cJ=A.bq(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.b(A.b(j.document).createElement("img"))
m.src=a
s=7
return A.aj(A.aP(A.b(m.decode()),t.X),$async$cJ)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.af(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.kz()
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
return A.bl($async$cJ,r)},
cK(a,b,c){var s=!1
return this.n2(t.a.a(a),b,!1)},
n2(b0,b1,b2){var s=0,r=A.bn(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cK=A.bq(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.e([],t.d)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.b(A.b(a0.document).createElement("img"))
j.src=k
s=10
return A.aj(A.aP(A.b(j.decode()),a1),$async$cK)
case 10:J.ip(l,j)
case 8:b0.length===a||(0,A.t)(b0),++a2
s=7
break
case 9:if(J.bJ(l)===0){a=A.l("texture array needs at least one layer")
throw A.d(a)}i=A.a(J.b9(l,0).width)
h=A.a(J.b9(l,0).height)
if(J.a3(i,0)||J.a3(h,0)||J.u_(l,new A.nd(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.bJ(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.ai()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.lq(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.ai()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a4()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a4()
n=[1]
s=5
break A}e=B.d.R(a+1,2)}}a=m.a
a7=A.i(a.createTexture())
if(a7==null){a=A.l("could not create texture array")
throw A.d(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.af(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.a3(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.u1(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.bJ(l)
if(typeof a1!=="number"){q=a1.cW()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.b9(l,c)])
d=A.a(a.getError())
if(!J.a3(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.u(c)+" failed (WebGL error 0x"+J.u1(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.a4()
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
if(!J.a3(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.u1(d,16)+")")
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
b=A.ah(a9)
A.b(v.G.console).error("texture array load failed: "+A.u(b))
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
return A.bl($async$cK,r)},
fO(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a3(A.cQ(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.eW("shader compile failed: "+A.u(A.wZ(s,"getShaderInfoLog",r,t.x))+"\n"+b))
return r},
aS(a,b){var s=v.G,r=this.fO(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.fO(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a3(A.cQ(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.eW("program link failed: "+A.u(A.wZ(p,"getProgramInfoLog",o,t.x))))
return o},
giA(){var s=A.cQ(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.b8(s):0},
eC(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.hd(0,c,B.c.jD(b.byteLength,p))*p
if(B.c.a2(o,4)!==0)A.j(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.yt(B.q.glK(b),b.byteOffset+0*p,B.c.R(o,4)))}},
du(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.af(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
dn(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.af(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
fQ(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.du(q,a,b)
s=v.G
A.af(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
fc(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.af(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.af(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
el(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.dn(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.dn(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.fQ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.fQ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.dn(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.fc(a,b)
if(d)h.drawBuffers(A.e([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.eW("framebuffer incomplete"))
return new A.k4(g,n,o,m,q,p,l,e,a,b)},
iz(a,b,c,d){return this.el(a,b,c,d,0)},
n5(a,b,c,d){return this.el(a,b,!0,c,d)},
bk(a,b,c){return this.el(a,b,c,!1,0)},
ds(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.af(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
b_(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.du(q,b,c)
if(p!=null)n.du(p,b,c)
n.ds(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.ds(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.ds(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.fc(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
nH(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
lW(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
b3(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.nd.prototype={
$1(a){A.b(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:63}
A.je.prototype={
eA(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].oc(a)}}
A.jg.prototype={
c4(a){if(this.f)return
A.vO(a,"requestPointerLock",t.X)},
eK(a){var s,r,q,p
t.G.a(a)
s=A.r(t.N,t.a)
for(r=new A.O(a,A.p(a).i("O<1,2>")).gt(0),q=t.s;r.m();){p=r.d
s.k(0,p.a,A.e([p.b],q))}this.j6(s)},
j6(a){var s,r,q,p,o,n,m,l,k
t.i3.a(a)
for(s=this.y,r=s.a,r=new A.cx(r,r.r,r.e,A.p(r).i("cx<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a6(q)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l){k=o[l]
if(k.length!==0)n.l(0,k)}s.nF(p,n)}this.b1()},
kU(a){var s=this
A.b(a)
if(A.U(a.repeat))return
if(!s.w)return
if(s.b.l(0,A.A(a.code)))if(B.a.u(s.y.aR("interact"),A.A(a.code))){if(s.x.n_())s.c.l(0,A.A(a.code))}else s.c.l(0,A.A(a.code))},
kW(a){var s,r,q="interact"
A.b(a)
s=this.b
s.ag(0,A.A(a.code))
r=this.y
if(B.a.u(r.aR(q),A.A(a.code))){t.R.a(s)
s=!B.a.M(r.aR(q),s.gaC(s))}else s=!1
if(s){s=this.x
s.c=s.b=!1
s.d=0}},
l_(a){var s=this
A.b(a)
if(!s.f||!s.w)return
s.d=s.d+s.fp(a,"movementX")
s.e=s.e+s.fp(a,"movementY")},
kY(a){var s=this
A.b(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
fp(a,b){var s=A.wW(a[b])
if(s==null)s=null
return s==null?0:s},
b1(){var s=this
s.b.G(0)
s.c.G(0)
s.e=s.d=0
s.x.ev()}}
A.nQ.prototype={
aR(a){var s=this.a.h(0,a)
return s==null?B.o:s},
nF(a,b){var s,r,q,p,o,n
t.bq.a(b)
s=this.a
if(!s.O(a))return
r=t.N
q=A.a6(r)
for(p=A.kJ(b,b.r,A.p(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.an(q,r))},
lZ(a,b){var s,r,q
t.R.a(b)
for(s=this.aR(a),r=s.length,q=0;q<r;++q)if(b.ag(0,s[q]))return!0
return!1}}
A.nT.prototype={
n_(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
jz(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.d.N(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
ev(){this.c=this.b=!1
this.d=0}}
A.jt.prototype={}
A.eb.prototype={
gfl(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gI(B.c.cP(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.c.cP(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
W(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.eb&&A.lp(r)===A.lp(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gI(a){return this.gfl()}}
A.ok.prototype={
jP(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gfl(),q)}}
A.cG.prototype={
cN(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.q.ji(s,0,m,l)
n.a=s}r=b.aj(0,a).bd(d.aj(0,a)).ga8()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ho(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ho(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ho(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ho(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ho(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ho(n.a,l,d,r,q,p,o,0,1,0,k,0)},
ap(a,b,c,d,e){return this.cN(a,b,c,d,e,1,1)}}
A.p_.prototype={
kK(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.aS(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.G()
m.w=r
q=s.aS(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.G()
m.x=q
p=m.c
o=A.i(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.G()
m.y=o
o=A.i(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.G()
m.z=o
o=A.i(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.G()
m.Q=o
r=A.i(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.G()
m.as=r
r=A.i(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.G()
m.at=r
q=A.i(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.G()
m.ax=q
m.d=s.bk(m.ay,m.ch,!1)
m.e=s.bk(m.ay,m.ch,!1)
m.f=s.bk(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.G()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
kL(){var s
try{this.r=this.b.bk(384,216,!1)}catch(s){this.r=null}},
nE(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.b3(n)
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
p.b3(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.b3(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.p8.prototype={
dc(a,b,c){var s,r,q
try{r=this.a.aS(b,c)
return r}catch(q){s=A.ah(q)
r=A.eW(a+": "+A.u(s))
throw A.d(r)}}}
A.p1.prototype={}
A.hG.prototype={}
A.l0.prototype={}
A.kN.prototype={}
A.kL.prototype={}
A.p2.prototype={
jQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([new A.eb(0,0,1,0),new A.eb(1,0,1,0),new A.eb(2,0,1,0)],t.mn),e=t.S
e=new A.ok(f,A.r(e,e))
e.jP(f)
h.eh=e
h.i2=1.9
h.e7=h.bi/h.bh
r=J.jk(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.hG()
t.cu.a(r)
f=h.aU
e=f.aS("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.aS(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.aS(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.aS(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.aS(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ak!==$&&A.G()
h.ak=new A.p8(f,e,p,o,n,m)
h.b=t.d4.a(new A.p3(h))
h.fD()
h.fC()
o=h.aK
p=A.i(o.getUniformLocation(m,"uTex"))
h.hx!==$&&A.G()
h.hx=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.hy!==$&&A.G()
h.hy=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.hd!==$&&A.G()
h.hd=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.hc!==$&&A.G()
h.hc=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.he!==$&&A.G()
h.he=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.hf!==$&&A.G()
h.hf=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.hg!==$&&A.G()
h.hg=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.hh!==$&&A.G()
h.hh=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.hi!==$&&A.G()
h.hi=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.hj!==$&&A.G()
h.hj=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.hk!==$&&A.G()
h.hk=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.hl!==$&&A.G()
h.hl=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.hm!==$&&A.G()
h.hm=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.hn!==$&&A.G()
h.hn=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.ho!==$&&A.G()
h.ho=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.hp!==$&&A.G()
h.hp=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.hq!==$&&A.G()
h.hq=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.hr!==$&&A.G()
h.hr=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.hs!==$&&A.G()
h.hs=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.ht!==$&&A.G()
h.ht=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.hu!==$&&A.G()
h.hu=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.hv!==$&&A.G()
h.hv=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.hw!==$&&A.G()
h.hw=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.hz!==$&&A.G()
h.hz=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.hA!==$&&A.G()
h.hA=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.e9!==$&&A.G()
h.e9=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.ea!==$&&A.G()
h.ea=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.eb!==$&&A.G()
h.eb=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.ec!==$&&A.G()
h.ec=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.ed!==$&&A.G()
h.ed=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.ee!==$&&A.G()
h.ee=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.ef!==$&&A.G()
h.ef=n
n=A.U(A.b(A.b(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bW!==$&&A.G()
h.bW=n
h.six(16777215)
n=new A.pR(o,f,A.e([],t.aA),A.e([],t.df),A.e([],t.h),A.e([],t.kS))
m=n.c=f.aS("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.eg!==$&&A.G()
h.eg=n
n=new A.p_(f,o)
n.kK()
n.kL()
h.cw!==$&&A.G()
h.cw=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.dL!==$&&A.G()
h.dL=m
p=A.i(n.createBuffer())
p.toString
h.dM!==$&&A.G()
h.dM=p
n=A.i(n.createBuffer())
n.toString
h.dN!==$&&A.G()
h.dN=n
e=A.i(o.createVertexArray())
e.toString
h.dO!==$&&A.G()
h.dO=e
l=A.i(o.createVertexArray())
l.toString
h.dP!==$&&A.G()
h.dP=l
k=A.i(o.createVertexArray())
k.toString
h.dQ!==$&&A.G()
h.dQ=k
j=A.i(o.createVertexArray())
j.toString
h.dR!==$&&A.G()
h.dR=j
o.bindVertexArray(e)
h.d7(m)
o.bindVertexArray(l)
h.d7(p)
o.bindVertexArray(k)
h.d7(n)
o.bindVertexArray(null)
try{h.cD=f.iz(384,216,!0,!0)}catch(i){h.cD=null}s=4<f.giA()?4:f.giA()
e=s
if(typeof e!=="number")return e.ai()
if(e>1)try{h.bV=f.n5(h.bh,h.bi,!0,s)}catch(i){h.bV=null}try{h.bg=f.iz(h.bh,h.bi,!0,!0)}catch(i){h.bV=h.bg=null}if(h.bg!=null)try{h.cA=f.bk(h.gcc(),h.gcb(),!1)
h.cB=f.bk(h.gcc(),h.gcb(),!1)
h.cC=f.bk(h.bh,h.bi,!1)}catch(i){h.cC=h.cB=h.cA=null}},
gcc(){var s=B.c.R(this.bh,4)
return s<1?1:s},
gcb(){var s=B.c.R(this.bi,4)
return s<1?1:s},
aL(a){return this.n3(t.G.a(a))},
n3(a){var s=0,r=A.bn(t.H),q=this,p,o,n,m,l,k,j
var $async$aL=A.bq(function(b,c){if(b===1)return A.bj(c,r)
for(;;)switch(s){case 0:p=new A.O(a,A.p(a).i("O<1,2>")).gt(0),o=q.aU
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.cn.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.aj(o.cJ(k,l,!1,!1,!1,m==="grime"),$async$aL)
case 4:if(c!=null)q.fg(m,l)
s=2
break
case 3:p=t.lS
j=A.N(new A.cj(new A.Q(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.p4(a)),t.dD),p),p.i("o.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.aj(o.cK(j,12,!1),$async$aL)
case 7:q.cv=c
case 6:return A.bk(null,r)}})
return A.bl($async$aL,r)},
bE(){var s=0,r=A.bn(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bE=A.bq(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.r(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.aj(A.aP(A.b(A.b(g.window).fetch("shaders/"+A.u(m))),f),$async$bE)
case 13:l=a3
if(!A.U(l.ok)){i=A.eW("HTTP "+A.u(A.v9(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.aj(A.aP(A.b(l.text()),i),$async$bE)
case 14:a.bI(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ah(c)
i=A.eW("shaders/"+A.u(m)+": fetch failed - "+A.u(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.l4(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ah(b)
A.b(v.G.console).error("shader reload failed: "+A.u(j))
s=5
break
case 2:s=1
break
case 5:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$bE,r)},
l4(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ak
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.dc("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.dc("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.dc("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.fD()
i.fC()
q=i.h9
q=A.N(q,A.p(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.t)(q),++k){s=q[k]
o=B.cn.h(0,s)
o.toString
i.fg(s,o)}A.b(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ah(j)
A.b(v.G.console).error("shader recompile failed: "+A.u(r))}},
fC(){var s=this,r=s.aK,q=s.ak
q===$&&A.h()
s.i3=A.i(r.getUniformLocation(q.c,"uTex"))
s.i4=A.i(r.getUniformLocation(q.c,"uTime"))
s.i5=A.i(r.getUniformLocation(q.c,"uFlash"))
s.i6=A.i(r.getUniformLocation(q.c,"uVignette"))
s.i7=A.i(r.getUniformLocation(q.c,"uGrain"))
s.i8=A.i(r.getUniformLocation(q.c,"uDesat"))
s.i9=A.i(r.getUniformLocation(q.c,"uBloom"))
s.ia=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.ij=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.im=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.ie=A.i(r.getUniformLocation(q.c,"uDepth"))
s.ig=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.ha=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.hb=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.ih=A.i(r.getUniformLocation(q.c,"uNoise"))
s.ii=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.ik=A.i(r.getUniformLocation(q.c,"uLut"))
s.il=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.ib=A.i(r.getUniformLocation(q.d,"uTex"))
s.e8=A.i(r.getUniformLocation(q.d,"uDir"))
s.ic=A.i(r.getUniformLocation(q.c,"uBlur"))},
fg(a,b){var s,r,q,p=this
p.h9.l(0,a)
switch(a){case"bluenoise":s=p.ak
s===$&&A.h()
s=s.c
r=p.ih
r===$&&A.h()
q=p.ii
q===$&&A.h()
p.bO(s,r,q,b)
break
case"lut-gothic":s=p.ak
s===$&&A.h()
s=s.c
r=p.ik
r===$&&A.h()
q=p.il
q===$&&A.h()
p.bO(s,r,q,b)
break
case"grime":s=p.ak
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.bO(s,r,q,b)
break
case"glass":s=p.ak
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.bO(s,r,q,b)
break
case"soft":s=p.ak
s===$&&A.h()
s=s.b
r=p.hQ
r===$&&A.h()
q=p.hR
q===$&&A.h()
p.bO(s,r,q,b)
break}},
bO(a,b,c,d){var s=this.aK
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
six(a){var s=A.t9(a)
this.hI=s.a
this.hJ=s.b
this.hK=s.c},
co(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.a2(a1,14)!==0)throw A.d(A.w("static mesh needs a multiple of 14 floats, got "+a1,null))
s=a1/14|0
for(r=a0,q=r,p=q,o=a,n=o,m=n,l=0;l<s;++l){k=l*14
if(!(k<a1))return A.f(a2,k)
j=a2[k]
i=k+1
if(!(i<a1))return A.f(a2,i)
h=a2[i]
i=k+2
if(!(i<a1))return A.f(a2,i)
g=a2[i]
if(j<m)m=j
if(h<n)n=h
if(g<o)o=g
if(j>p)p=j
if(h>q)q=h
if(g>r)r=g}f=new Uint16Array(s)
for(l=0;l<s;++l){if(!(l<s))return A.f(f,l)
f[l]=l}a1=b.aK
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
b.eY(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.mH++
b.dV.k(0,a1,new A.l0(e,d,i,s,s,a3))
return a1},
mx(a){var s,r,q,p=this,o=p.dV.h(0,a)
if(o==null)return
p.fs()
s=p.hO
r=p.hP
if(s!==r)p.fH(r)
s=p.aK
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.e6
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bX},
mP(a){var s,r=this.dV.ag(0,a)
if(r==null)return
s=this.aK
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
fs(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.dW)return
c.dW=!0
s=c.aK
r=c.ak
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.hM
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.dZ
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.e_
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.e0
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.i2)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.e7)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.hB?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.e1/255*0.34,c.e2/255*0.34,c.e3/255*0.34)
q=c.fx
q===$&&A.h()
r=c.hH
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.hI,c.hJ,c.hK)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.hL)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.6)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.dY.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.dY
l=m.length
if(n<l){if(!(n<l))return A.f(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],0)
continue}j=A.t9(k.b)
m=c.bW
m===$&&A.h()
i=m?1:1+(A.tT(c.e4*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.f(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.f(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.f(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bW
r===$&&A.h()
q=r?1:1+(A.tT(c.e4*2.5,40503)*2-1)*0
c.mE=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.hD?1:0
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
q=c.hC
h=q?384:0
g=q?216:0
q=c.dS
p=q.a
if(p===B.b4){f=B.d.N(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.hS
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.eg
r===$&&A.h()
q=c.hW
q===$&&A.h()
s.uniform1f(q,0)
q=c.hX
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.hT
q===$&&A.h()
if(q!=null)r.cU(0)
q=c.hU
q===$&&A.h()
if(q!=null)r.cU(1)
q=c.hV
q===$&&A.h()
if(q!=null)r.cU(2)
r.cV(0)
r.cV(1)
r.cV(2)
r=c.hY
r===$&&A.h()
if(c.cv==null)q=0
else{c.eh===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.cv!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.cv)
r=c.e5
r===$&&A.h()
s.uniform1i(r,12)}r=c.i1
q=c.i0
p=c.i_
o=c.hZ
n=0
for(;;){m=c.eh
m===$&&A.h()
if(!(n<3))break
d=m.a[n]
if(!(n<o.length))return A.f(o,n)
m=o[n]
if(m!=null)s.uniform1f(m,d.b)
if(!(n<p.length))return A.f(p,n)
m=p[n]
if(m!=null)s.uniform1f(m,d.c)
if(!(n<q.length))return A.f(q,n)
m=q[n]
if(m!=null)s.uniform1i(m,d.a)
if(!(n<r.length))return A.f(r,n)
m=r[n]
if(m!=null)s.uniform1i(m,d.d);++n}c.fH(c.hP)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.e6
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
fH(a){var s
this.hO=a
s=this.dx
s===$&&A.h()
this.aK.uniformMatrix4fv(s,!1,a.a)},
aZ(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bh=a
j.bi=b
j.e7=b/a
s=j.cw
s===$&&A.h()
r=B.c.R(a,2)
s.ay=r
q=B.c.R(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.b_(p,r,q)
r=s.e
if(r!=null)s.b.b_(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.b_(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.b_(r,384,216)
o=j.bg
n=j.bV
m=j.cA
l=j.cB
k=j.cC
if(o!=null)j.aU.b_(o,a,b)
if(n!=null)j.aU.b_(n,a,b)
if(m!=null)j.aU.b_(m,j.gcc(),j.gcb())
if(l!=null)j.aU.b_(l,j.gcc(),j.gcb())
if(k!=null)j.aU.b_(k,a,b)},
lj(a){var s,r,q,p,o,n,m
for(s=this.hF,r=this.hE,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
p=s[q]
if(!(p<r.length))return A.f(r,p)
o=q-1
for(;;){if(o>=0){n=s[o]
if(!(n<r.length))return A.f(r,n)}if(!!1)break
n=o+1
if(!(o>=0))return A.f(s,o)
m=s[o]
if(!(n>=0&&n<800))return A.f(s,n)
s[n]=m;--o}n=o+1
if(!(n>=0&&n<800))return A.f(s,n)
s[n]=p}},
li(a){var s,r,q,p,o,n,m,l
for(s=this.hG,r=this.dX,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
p=s[q]
if(!(p<r.length))return A.f(r,p)
o=r[p].x
n=q-1
for(;;){if(n>=0){m=s[n]
if(!(m<r.length))return A.f(r,m)
m=r[m].x>o}else m=!1
if(!m)break
m=n+1
if(!(n>=0))return A.f(s,n)
l=s[n]
if(!(m>=0&&m<4000))return A.f(s,m)
s[m]=l;--n}m=n+1
if(!(m>=0&&m<4000))return A.f(s,m)
s[m]=p}},
mM(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.dS=b4
s=b2.bY
r=0
if(s>0){for(s=b2.hG,q=0;p=b2.bY,q<p;++q)B.a.k(s,q,q)
b2.li(p)
for(p=b2.dX,o=b2.dT,n=0;n<b2.bY;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.xk(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.dX,p=b2.dT,q=0;q<b2.bY;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.xk(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bY=0
for(s=b2.hF,q=0;p=b2.cE,q<p;++q)B.a.k(s,q,q)
b2.lj(p)
for(p=b2.mF,o=b2.hE,k=0,n=0;n<b2.cE;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.t9(0)
m=j.b
h=b2.e0
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.e_
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
e=[new A.c(a-d,a1-c,a2-e),new A.c(g-d,f-c,h-e),new A.c(g+d,f+c,h+e),new A.c(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.dZ
k=A.xr(p,k,a3,a4,a5,a6,new A.c(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cE=0
s=b2.aU
o=b2.dL
o===$&&A.h()
s.eC(o,b2.dT,r)
o=b2.dM
o===$&&A.h()
s.eC(o,p,k)
b2.fs()
p=b2.aK
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.dO
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.R(r,14));++b2.bX
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.dP
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.R(k,14));++b2.bX
m=b2.dU
if(m>0){h=b2.dN
h===$&&A.h()
s.eC(h,b2.mG,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.dQ
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.dU/14|0);++b2.bX}m=b2.cD
if(m!=null){a7=b2.bg
if(a7!=null)s.nH(m,a7)}a8=b2.bg
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.dR
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.cA
a4=b2.cB
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.ak
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.ib
g===$&&A.h()
p.uniform1i(g,0)
s.b3(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.e8
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.b3(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.e8,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cC
if(b2.cz>0&&a6!=null){s.b3(a6)
g=b2.ak
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.e9
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.ea
g===$&&A.h()
p.uniform1i(g,7)
g=b2.eb
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.ec
g===$&&A.h()
p.uniform1f(g,1)
g=b2.ed
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.ee
g===$&&A.h()
p.uniform1f(g,b2.cz)
g=b2.ef
g===$&&A.h()
p.uniform2f(g,1/b2.bh,1/b2.bi)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cw
g===$&&A.h()
b0=g.nE(a8,0.5)
s.b3(null)
s=b2.ak
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.i9
g===$&&A.h()
p.uniform1i(g,1)
g=b2.ia
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.ic
s===$&&A.h()
b2.bW===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.ie
s===$&&A.h()
p.uniform1i(s,7)
s=b2.ig
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.ha
s===$&&A.h()
p.uniform1i(s,11)
s=b2.hb
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cz>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.i3
h===$&&A.h()
p.uniform1i(h,0)
h=b2.e4+=b3;++b2.hN
s=b2.i4
s===$&&A.h()
p.uniform1f(s,h)
h=b2.ij
h===$&&A.h()
s=b2.hN
p.uniform2f(h,B.c.a2(s*13,64),B.c.a2(s*29,64))
s=b2.i5
s===$&&A.h()
p.uniform1f(s,0)
s=b2.i6
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.i7
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.i8
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.dS
if(s.a===B.a7)b1=0*(1-s.b/1)
else b1=0
s=b2.im
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.p3.prototype={
$0(){var s=this.a.ak
s===$&&A.h()
return s.b},
$S:64}
A.p4.prototype={
$1(a){return this.a.h(0,A.A(a))},
$S:29}
A.qp.prototype={
glw(){var s=this.b
s===$&&A.h()
return s},
fD(){var s,r,q,p,o,n,m=this,l=m.lx(),k=m.a
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
m.hQ=A.i(k.getUniformLocation(l,"uSoft"))
m.hR=A.i(k.getUniformLocation(l,"uSoftOn"))
m.hS=A.i(k.getUniformLocation(l,"uInternal"))
m.hT=A.i(k.getUniformLocation(l,"uLightProj0"))
m.hU=A.i(k.getUniformLocation(l,"uLightProj1"))
m.hV=A.i(k.getUniformLocation(l,"uLightProj2"))
m.mI=A.i(k.getUniformLocation(l,"uShadow0"))
m.mJ=A.i(k.getUniformLocation(l,"uShadow1"))
m.mK=A.i(k.getUniformLocation(l,"uShadow2"))
m.hW=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.e5=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.e6=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.hX=A.i(k.getUniformLocation(l,"uShadowBias"))
m.hY=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.hZ
B.a.G(s)
r=m.i_
B.a.G(r)
q=m.i0
B.a.G(q)
p=m.i1
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.e5,12)},
d7(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.eY(56)},
eY(a){var s=this,r=s.c
r===$&&A.h()
s.bP(r,3,a,0)
r=s.f
r===$&&A.h()
s.bP(r,3,a,12)
r=s.d
r===$&&A.h()
s.bP(r,4,a,24)
r=s.e
r===$&&A.h()
s.bP(r,1,a,40)
r=s.r
r===$&&A.h()
s.bP(r,3,a,44)},
bP(a,b,c,d){var s=this.a
A.af(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
lx(){return this.glw().$0()}}
A.pR.prototype={
cU(a){return null},
cV(a){return null}}
A.c.prototype={
a4(a,b){return new A.c(this.a+b.a,this.b+b.b,this.c+b.c)},
aj(a,b){return new A.c(this.a-b.a,this.b-b.b,this.c-b.c)},
a3(a,b){return new A.c(this.a*b,this.b*b,this.c*b)},
bU(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bd(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.c(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga8(){var s=this,r=s.gq(0)
return r<1e-9?new A.c(0,0,0):new A.c(s.a/r,s.b/r,s.c/r)}}
A.mf.prototype={
o6(a){var s,r,q,p,o,n=B.k.av(a.B(),null)
this.a.h7(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.aJ(s.getItem("quarantine.save.active"))
q=A.aJ(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
nA(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.aJ(s.getItem("quarantine.save.active"))
q=A.aJ(s.getItem("quarantine.save.previous"))
p=this.fb(r,a)
if(p!=null)return new A.ej(p,null)
o=this.fb(q,a)
if(o!=null)return new A.ej(o,"recovered previous save")
if(r==null)return B.js
return B.jr}catch(n){return B.jq}},
fb(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.h7(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ah(q) instanceof A.F)return null
else throw q}}}
A.iV.prototype={
jK(a,b,c,d,e){if(this.a.length===0)throw A.d(B.eM)
if(this.b<0)throw A.d(B.em)},
B(){var s,r=this,q=r.d
q=q==null?null:A.an(q,t.i)
s=t.z
return A.bt(A.P(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.c1.prototype={
A(){return"EndingKind."+this.b}}
A.mL.prototype={}
A.eV.prototype={
B(){var s=t.N
return A.P(["kind",this.a.b],s,s)}}
A.mO.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:66}
A.jJ.prototype={
B(){var s,r=this,q=t.N,p=A.r(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.P(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
mV(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.aj(0,new A.c(0,1.3499999999999999,0))
return!new A.iE(s,s.a4(0,new A.c(0,1.2000000000000002,0))).iv(a,r)}}
A.oK.prototype={
B(){return A.lc(this.a)}}
A.f7.prototype={
B(){return A.P(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.pe.prototype={
h7(a){var s,r,q,p,o,n,m,l=B.k.aJ(a,null),k=t.f
if(!k.b(l))throw A.d(B.eU)
s=t.N
r=t.z
q=A.aT(l,s,r)
p=q.h(0,"version")
if(A.aO(p))o=p!==1&&p!==2
else o=!0
if(o)A.j(A.a5("unsupported save version "+A.u(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.j(B.et)
k=A.aT(n,s,r)
return A.w6(A.aT(m,s,r),k,2)}}
A.ej.prototype={}
A.e3.prototype={
A(){return"GameSessionEventType."+this.b}}
A.j2.prototype={}
A.n8.prototype={}
A.n7.prototype={
gao(){var s=this.d
return new A.n8(s.a,s.b)},
gep(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.P(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.P(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.P(["entryCount",m.e.b.a],k,t.S)
p=A.vI(m.c).B()
o=m.r
n=o.c
return new A.oK(A.lc(A.P(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.P(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
lA(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.av(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.ck(B.f4)}if(n<a)this.ck(B.f5)},
jw(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.d0(a)&&s.jv(b)},
nB(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cY)r.c=Math.min(1,r.c+0.1)},
jt(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.z0(j,A.an(i.d,h).length)
if(a===B.cR)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.K(r)
A.z_(j,new A.R(r,q.i("n(1)").a(new A.n9(k)),q.i("R<1>")).gq(0))
r=k.f
q=r.b
if(B.a.u(B.fT,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aO(j.a/1*3)
B.a.l(r.r,new A.f8(q.a,a,b))
m=r.a
A.zb(m,q.a,n,k.b,A.an(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.jk(B.hv)
s.r.lY(o,c)
l=B.d.aO(j.b/1*6)
if(l>0)r.d0(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aS(i,A.p(i).i("aS<2>")).M(0,new A.na())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.ck(B.f7)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.ck(B.f6)},
ck(a){var s=this;++s.y
B.a.l(s.w,new A.j2())
B.a.l(s.x,A.z1(A.BM(a),s.b,s.y-1))}}
A.n9.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.pS().jq(this.a.c,a.a)},
$S:30}
A.na.prototype={
$1(a){return t.T.a(a).e},
$S:31}
A.m3.prototype={
eD(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.d(A.l("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.d(A.l("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.d(A.l("authored/runtime room or portal count mismatch"))
for(r=t.E,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.d(A.l("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.l(n+" origin.x mismatch: "+A.u(g)+" != "+A.u(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.l(n+" origin.y mismatch: "+A.u(j)+" != "+A.u(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.l(n+" origin.z mismatch: "+A.u(l)+" != "+A.u(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.j(A.l(n+" size.x mismatch: "+A.u(g)+" != "+A.u(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.j(A.l(n+" size.y mismatch: "+A.u(j)+" != "+A.u(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.j(A.l(n+" size.z mismatch: "+A.u(l)+" != "+A.u(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.d(A.l("window count mismatch for "+n))
for(n=A.K(j),i=n.i("n(1)"),n=n.i("R<1>"),f=0;f<l.length;l.length===k||(0,A.t)(l),++f){e=l[f]
d=A.eZ(new A.R(j,i.a(new A.m8(e)),n),r)
if(d==null)throw A.d(A.l("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.j(A.l(c+" offset mismatch: "+A.u(h)+" != "+A.u(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.j(A.l(c+a+A.u(h)+" != "+A.u(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.j(A.l(c+a0+A.u(h)+" != "+A.u(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.t)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.d(A.l("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.d(A.l("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.j(A.l(q+a+A.u(n)+" != "+A.u(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.j(A.l(q+a0+A.u(n)+" != "+A.u(l)))
if(o.f!=m.at)throw A.d(A.l("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaG(a1).b!==B.a.gaG(s).b)throw A.d(A.l("stair manifest mismatch"))}}
A.m4.prototype={
$1(a){return A.yK(a,this.a)},
$S:69}
A.m5.prototype={
$1(a){var s=this.a,r=A.lj(a,"portal"),q=A.dO(r,"id"),p=A.dO(r,"a"),o=A.dO(r,"b"),n=A.ij(r,"width"),m=A.ij(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.A(r.h(0,"doorKit")):null
return new A.eH(q,p,o,n*s,m*s,l)},
$S:70}
A.m6.prototype={
$1(a){var s=A.lj(a,"stair")
A.dO(s,"id")
return new A.eJ(A.dO(s,"portalId"))},
$S:71}
A.m7.prototype={
$1(a){return typeof a=="string"?a:A.ig("exterior cell")},
$S:36}
A.m8.prototype={
$1(a){return t.E.a(a).a===this.a.a},
$S:18}
A.eI.prototype={}
A.m9.prototype={
$1(a){var s=this.a,r=A.lj(a,"window"),q=A.dO(r,"id"),p=A.ij(r,"offset")
A.ij(r,"sill")
return new A.eK(q,p*s,A.ij(r,"width")*s,A.ij(r,"height")*s)},
$S:74}
A.eK.prototype={}
A.eH.prototype={}
A.eJ.prototype={}
A.td.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:11}
A.iE.prototype={
nU(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.K(s)
q=new A.R(s,r.i("n(1)").a(new A.mk(e)),r.i("R<1>"))
p=!q.gt(0).m()?null:q.gP(0)
if(p==null){n.d=null
return}if(!(n.cj(b,p.f)&&a==="hall"))o=n.cj(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.kp(p,B.d.N(d,0,1))},
n7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.fo(f,c,d)
s=g.kA(a,b,c,d)
if(s!=null){g.d=s
return g.fo(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.lR(Math.sqrt(r*r+q*q)/0.08))
o=d.a3(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.fV(a,n,m,new A.c(q,0,0))
l=l||j.b
i=g.iK(a,n)
n=i==null?n:i
h=g.fV(a,n,j.a,new A.c(0,0,r))
l=l||h.b
m=h.a
i=g.iK(a,n)
n=i==null?n:i}g.cm(m)
return new A.jw(m,n)},
kA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.cj(c,l.f)&&n
j=q&&this.cj(c,l.r)&&o
if(k||j)return new A.kp(l,k?0:1)}return null},
fo(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.aj(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.N(a.b+o/p,0,1)
n=A.wj(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.cm(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.jw(n,k)},
cj(a,b){var s=a.aj(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
fV(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.hB(c,!1)
s=c.a4(0,d)
this.cm(s)
if(this.iv(a,b)){this.cm(c)
return new A.hB(c,!0)}return new A.hB(s,!1)},
cm(a){var s=a.aj(0,new A.c(0,1.3499999999999999,0))
this.a=s
this.b=s.a4(0,new A.c(0,1.2000000000000002,0))},
iv(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aT(m)
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
return!this.lm(a,m,s)},
iK(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aT(k)
for(r=k.a,q=a.az(r),p=J.S(q.a),q=new A.L(p,q.b,q.$ti.i("L<1>"));q.m();){o=p.gn()
n=o.bC(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.fZ(k,o,s)&&this.kq(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
lm(a,b,c){var s,r,q
for(s=a.az(b.a),r=J.S(s.a),s=new A.L(r,s.b,s.$ti.i("L<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.fZ(b,q,c))return!0}return!1},
fZ(a,b,c){var s,r,q,p=a.a,o=b.aE(p),n=b.af(p)
p=o===B.l||o===B.m
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
kq(a,b,c){var s,r=this
switch(b.aE(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
slG(a){this.a=t.mz.a(a)}}
A.mk.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:76}
A.jw.prototype={}
A.hB.prototype={}
A.kp.prototype={}
A.fX.prototype={}
A.nv.prototype={
lY(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.J,r)
s=B.J[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jr(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.c}return r},
js(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.J,q)
p=B.J[q]
if(p.b===a)r+=p.d}return r},
B(){return A.P(["landedCount",this.b],t.N,t.z)}}
A.pa.prototype={
jS(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.G()
o.c=new A.jd(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.t)(n),++q){p=n[q]
r.k(0,p.a,o.eZ(p))}},
cO(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.t)(r),++o)p.mP(r[o])
s.k(0,a,n.eZ(m))},
eZ(a){var s=A.xI(this.a,a),r=this.b,q=A.e([r.co(s.a,1),r.co(s.b,2),r.co(s.c,0)],t.t),p=s.d
if(!B.q.gJ(p))q.push(r.co(p,0))
return q},
j2(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.K
s=l.a
r=A.aC([s],t.N)
for(n=n.az(s),q=J.S(n.a),n=new A.L(q,n.b,n.$ti.i("L<1>"));n.m();){p=q.gn()
o=p.bC(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
mw(a,b){var s,r,q,p,o=this,n=o.j2(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.iX(n,b))
s=t.f0
m.dY=l.length<=4?A.an(l,s):A.an(A.hq(l,0,A.dP(4,"count",t.S),A.K(l).c),s)
for(l=n.gt(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p)m.mx(r[p])}}}
A.b1.prototype={}
A.iY.prototype={
gmY(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a6(A.e([r,q,p,o,n,m],t.n),new A.mQ())&&o>=r&&n>=q&&m>=p}}
A.mQ.prototype={
$1(a){return isFinite(A.bX(a))},
$S:5}
A.jc.prototype={
D(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.a2(s,3)!==0}else s=!0
if(s)throw A.d(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gmY())throw A.d(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.t)(l),++r){p=l[r]
if(B.a.M(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.nx()))throw A.d(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.nx.prototype={
$1(a){return!isFinite(A.bX(a))},
$S:5}
A.nw.prototype={
v(a,b,c,d,e,f,g){var s=this
s.bq(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bq(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bq(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bq(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bq(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bq(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.b1(a,b,c,m,n,o,0,0,p),r=new A.b1(g,h,i,m,n,o,1,1,p)
this.bt(s,new A.b1(d,e,f,m,n,o,1,0,p),r)
this.bt(s,r,new A.b1(j,k,l,m,n,o,0,1,p))},
bt(a,b,c){var s=this,r=s.b
B.a.l(r,s.di(a))
B.a.l(r,s.di(b))
B.a.l(r,s.di(c))},
di(a){var s,r,q=B.a.aw(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
lL(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.jc(A.an(g,t.hZ),new Uint16Array(A.Z(this.b)),new A.iY(s,r,q,p,o,n))
h.D()
return h}}
A.iZ.prototype={}
A.e_.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.mR.prototype={
lS(a){var s
switch(a.a){case 0:s=A.aC(["front","street","opposite-house"],t.N)
break
case 1:s=A.aC(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aC(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aC(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aC(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
lT(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.bH
break A}if("kitchen"===a||"cellar"===a){s=B.dU
break A}if("bathroom"===a){s=B.dV
break A}if("spare-room"===a){s=B.dW
break A}s=B.bH
break A}return this.lS(s)}}
A.dH.prototype={}
A.rS.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:77}
A.dq.prototype={
A(){return"FocusKind."+this.b}}
A.e0.prototype={}
A.pb.prototype={}
A.r7.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:78}
A.r6.prototype={
$1(a){return t.E.a(a).b===this.a},
$S:18}
A.dG.prototype={}
A.fi.prototype={}
A.nt.prototype={
k5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.nK(),a4=this.b,a5=A.az(a4,!0,t.J)
B.a.G(a4)
s=A.e([],t.kl)
for(r=a5.length,q=t.jc,p=t.cs,o=t.cJ,n=0;n<a5.length;a5.length===r||(0,A.t)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.t)(i),++g){f=i[g]
j.push(new A.b7(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.t)(h),++g){d=h[g]
i.push(new A.bc(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.t)(e),++g){b=e[g]
h.push(new A.by(b.a,b.b,a3.$1(b.c)))}s.push(new A.aX(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.K(a4,s)
a4=this.c
a=A.az(a4,!0,t.U)
B.a.G(a4)
s=A.e([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bz(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.K(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dB(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
kG(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
n=o.a
if(q.O(n))throw A.d(A.l("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){m=s[p]
n=m.a
if(q.O(n))throw A.d(A.l("duplicate portal "+n))
q.k(0,n,m)}},
lu(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
ls(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.r(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.t)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fY(o,i,h,g,f,e)
a5.eV(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.t)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.l(l+" references invalid portal "+d))
i=c.aE(l)
h=c.af(l)
g=c.w
f=c.x
a5.fY(o,i,h,g,0,f)
a5.eV(a6,l,c.aE(l),c.af(l),c.af(l)+g,0,f)}}for(s=new A.O(a6,a6.$ti.i("O<1,2>")).gt(0);s.m();){b=s.d
a=b.b
r=J.c0(a)
r.a1(a,new A.nL())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.l("overlapping apertures on "+b.a))}}},
fY(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.l||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
eV(a,b,c,d,e,f,g){J.ip(t.gz.a(a).cM(b+":"+c.b,new A.nJ()),new A.hT([d,e,f,g]))},
aT(a){var s=a.c,r=this.r,q=a.a
return new A.c(s.a+r.jr(q),s.b+r.js(q),s.c)},
az(a){var s=this.c,r=A.K(s)
return new A.R(s,r.i("n(1)").a(new A.nM(a)),r.i("R<1>"))},
nz(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.av(a,"roomId","not a portal endpoint"))
r=this.aT(o)
q=b.af(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aE(a).a){case 0:s=new A.c(s.a+q,p,s.c)
break
case 2:s=new A.c(s.a+q,p,s.c+r.c)
break
case 1:s=new A.c(s.a+r.a,p,s.c+q)
break
case 3:s=new A.c(s.a,p,s.c+q)
break
default:s=null}return s},
go5(){return B.a.by(this.b,0,new A.nN(),t.S)},
iH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.R
s=A.e([new A.ax(a,B.R)],t.bM)
r=A.aC([a],t.N)
for(q=this.e,p=t.U;s.length!==0;){o=B.a.nD(s,0)
n=o.a
m=o.b
for(l=this.az(n),k=J.S(l.a),l=new A.L(k,l.b,l.$ti.i("L<1>"));l.m();){j=k.gn()
i=j.bC(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.N(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.N(m,p)
h.push(j)
B.a.l(s,new A.ax(i,h))}}}return B.R}}
A.nK.prototype={
$1(a){return new A.c(a.a*1.5,a.b,a.c*1.5)},
$S:79}
A.nL.prototype={
$2(a,b){var s=t.oJ
s.a(a)
s.a(b)
return B.d.H(a.a[0],b.a[0])},
$S:80}
A.nJ.prototype={
$0(){return A.e([],t.a3)},
$S:81}
A.nM.prototype={
$1(a){var s
t.U.a(a)
s=this.a
return a.b===s||a.c===s},
$S:82}
A.nN.prototype={
$2(a,b){return A.a(a)+t.J.a(b).e.length},
$S:83}
A.mP.prototype={}
A.pS.prototype={
jq(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a6(s,new A.pT())}else s=!1
return s}}
A.pT.prototype={
$1(a){return t.E.a(a).w},
$S:18}
A.ny.prototype={
nx(a){var s=this.e,r=A.K(s)
return new A.R(s,r.i("n(1)").a(new A.nB(a)),r.i("R<1>"))},
cp(a){return B.a.aV(this.d,new A.nz(a),new A.nA(a))},
eD(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.d(A.l("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.d(A.l("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-1.5)>0.0001)throw A.d(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a6(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.d(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.l("invalid bounds for inventory asset "+m))}j=A.a6(s)
i=A.a6(s)
h=A.a6(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.t)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.d(A.l("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.d(A.l(a7+m+" references "+l))
n=a6.cp(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.yr()
if(!e.b.test(k))throw A.d(A.l("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.d(A.l("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.d(A.l("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.d(A.l("duplicate inventory socket "+l+":"+e))
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
a4=g.iR(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.l(a7+m+" escapes "+f.a))}}}
A.nB.prototype={
$1(a){return t.gB.a(a).b===this.a},
$S:84}
A.nz.prototype={
$1(a){return t.p9.a(a).a===this.a},
$S:85}
A.nA.prototype={
$0(){return A.j(A.l("inventory asset missing: "+this.a))},
$S:6}
A.cv.prototype={}
A.cf.prototype={
iR(a,b){var s=this.f.c.b*b,r=a.f
return new A.c(r.a.b*s,r.b.b*s,0)}}
A.nW.prototype={}
A.nU.prototype={}
A.tc.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:11}
A.nV.prototype={
B(){var s,r,q,p=A.r(t.N,t.z),o=this.a,n=A.p(o).i("aa<1>")
n=A.N(new A.aa(o,n),n.i("o.E"))
B.a.a0(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.t)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
ex(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.e7)
s=t.X
r=A.aT(a,s,s)
s=this.a
s.G(0)
for(q=new A.O(r,A.p(r).i("O<1,2>")).gt(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aO(o)||o<0)throw A.d(B.en)
s.k(0,n,o)}}}
A.cC.prototype={}
A.jd.prototype={
iX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.R.a(a)
s=A.e([],t.bz)
for(r=a.gt(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.t)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cC(new A.c(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.lc(j),0.06))}}B.a.a1(s,new A.nC(b))
return A.hq(s,0,A.dP(4,"count",t.S),t.f0).bG(0)},
lc(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.nC.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.H(a.a.aj(0,s).gq(0),b.a.aj(0,s).gq(0))},
$S:87}
A.fS.prototype={
A(){return"Floor."+this.b}}
A.dp.prototype={
A(){return"Facing."+this.b}}
A.b7.prototype={}
A.bz.prototype={
bC(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aE(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.av(a,"roomId","not an endpoint of "+s.a))},
af(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.av(a,"roomId","not an endpoint of "+s.a))}}
A.bc.prototype={}
A.by.prototype={}
A.dm.prototype={}
A.dB.prototype={}
A.aX.prototype={}
A.nE.prototype={
mA(a){return B.a.aV(this.c,new A.nF(a),new A.nG(a))},
o2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.l("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.l("soundscape source changed: "+f))
f=t.N
s=A.a6(f)
f=A.r(f,t.gB)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.t)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.d(A.l("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.d(A.l("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.d(A.l("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.d(A.l("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gJ(k)||k.gaq().M(0,new A.nH()))throw A.d(A.l("sound emitter "+l+" has no usable cues"))
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
A.nF.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:88}
A.nG.prototype={
$0(){return A.j(A.l("sound emitter missing: "+this.a))},
$S:6}
A.nH.prototype={
$1(a){return B.b.bI(A.A(a)).length===0},
$S:3}
A.ct.prototype={}
A.nu.prototype={
dw(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.av(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.hu}q=A.e([],t.iG)
p=B.d.aW(r)+1
o=B.d.aW(b)
for(n=p;n<=o;++n){m=B.c.a2(n,24)
B.a.l(q,new A.fW("tick"))
if(B.c.a2(m,6)===0)B.a.l(q,new A.fW("chime"))}l.b=b
return q}}
A.fW.prototype={}
A.nD.prototype={
dw(a,b){var s,r,q,p,o,n=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.av(b,"hour","must be in [0, 24)"))
s=n.a
r=n.b
if(s==null||r==null||a!==s||b<r){n.a=a
n.b=b
return B.ht}q=A.e([],t.dL)
for(p=B.d.aW(r)+1;p<=B.d.aW(b);++p){o=B.c.a2(p,24)
if(B.c.a2(o,4)===2)B.a.l(q,B.fC)
if(B.c.a2(o,3)===1)B.a.l(q,B.fD)
if(B.c.a2(o,8)===5)B.a.l(q,B.fE)}n.b=b
return q}}
A.eY.prototype={}
A.tb.prototype={
$1(a){return typeof a!="number"},
$S:11}
A.nI.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.r(m,l)
for(s=n.a,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.P(["open",o.a,"locked",o.b],m,r))}l=A.r(m,l)
for(s=n.c,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.P(["lit",o.a,"examined",o.b],m,r))}return A.P(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
lD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a6(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)d.l(0,s[q].a)
r=A.a6(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.t)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.t)(n),++l)r.l(0,n[l].a)
e=A.a6(e)
for(q=0;q<p.length;p.length===n||(0,A.t)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.t)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.uX(new A.aa(o,A.p(o).i("aa<1>")),d)){d=f.b
if(A.uX(new A.aa(d,A.p(d).i("aa<1>")),r)){d=f.c
e=!A.uX(new A.aa(d,A.p(d).i("aa<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.eG)
e=f.d
if(e<0||e>2)A.j(B.ee)
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
A.ha.prototype={
B(){return A.P(["open",this.a,"locked",this.b],t.N,t.y)}}
A.h2.prototype={
B(){return A.P(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.mK.prototype={
$1(a){return this.a.u(0,A.A(a))},
$S:3}
A.ds.prototype={
A(){return"Hand."+this.b}}
A.qk.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
eO(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.jr.prototype={
B(){var s,r,q,p=t.N,o=A.r(p,t.x)
for(s=this.a,r=0;r<5;++r){q=B.w[r]
o.k(0,q,s.h(0,q))}return A.P(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.Q(B.w,t.ej.a(new A.oc(this)),t.dD).aw(0," \xb7 ")}}
A.ob.prototype={
$2(a,b){return new A.T(A.A(a),A.A(b),t.gc)},
$S:89}
A.oc.prototype={
$1(a){return this.a.a.h(0,A.A(a))},
$S:29}
A.bL.prototype={
B(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.P(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.nY.prototype={
bR(a){t.G.a(a)
return a.a===5&&B.a.a6(B.w,new A.o4(this,a))},
eW(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bR(b))return null
s=this.e++
r=new A.bL(s,a,A.e([A.oa(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
dF(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bR(b))return!1
B.a.l(s.c,A.oa(b,c,B.am))
return!0},
lz(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bR(b))return!1
s.r=A.oa(b,0,B.c0)
return!0},
jk(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.O(p)&&!B.a.u(s,p))B.a.l(s,p)}},
o3(a){var s
if(!this.b.O(a))return!1
s=this.d
if(!B.a.u(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.N(n,A.p(n).c)
B.a.a0(n)
s=A.e([],t.bV)
for(r=q.b,r=new A.as(r,r.r,r.e,A.p(r).i("as<2>"));r.m();)s.push(r.d.B())
return A.P(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.o4.prototype={
$1(a){var s
A.A(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.u(this.a.a.h(0,a),s)},
$S:3}
A.fG.prototype={
A(){return"BackendFallbackReason."+this.b}}
A.ma.prototype={
h8(a,b){if(a.a!==B.U)return a
return new A.eL(B.b_,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.mb.prototype={
dG(a,b){if(a.a===B.U&&!a.d)return new A.oG(b,a.B(),B.cH)
return new A.o8(b,a.d,a.e,a.B(),B.cH)},
mq(a){return this.dG(a,null)}}
A.eL.prototype={
B(){var s,r=this,q=A.r(t.N,t.X)
q.k(0,"kind",r.a.b)
q.k(0,"explicit",r.b)
q.k(0,"automatic",r.c)
q.k(0,"fallback",r.d)
q.k(0,"rejected",r.f)
q.k(0,"aliasUsed",r.w)
s=r.e
if(s!=null)q.k(0,"fallbackReason",s)
s=r.r
if(s!=null)q.k(0,"rejectionReason",s)
s=r.x
if(s!=null)q.k(0,"aliasReason",s)
return q}}
A.mc.prototype={
c8(a){var s,r,q,p,o=null,n=a==null?o:B.b.bI(a).toLowerCase()
if(n==null||n.length===0)return B.df
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.eL(B.U,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.eL(B.b_,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.o9.prototype={}
A.o8.prototype={
gbe(){var s=this,r=s.b,q=r==null?null:r.gbe()
if(q==null)q=A.p6("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.iY(s.e)
return r},
b6(){if(this.f===B.cI)throw A.d(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.b6()
this.f=B.z},
aZ(a,b){var s
if(a<=0||b<=0)throw A.d(A.w("legacy surface size must be positive",null))
if(this.f!==B.z)A.j(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aZ(a,b)},
b0(a){var s
if(this.f!==B.z)A.j(A.l("legacy backend is not ready"))
B.k.av(A.P(["backend","legacy","interpolation",0,"facts",A.lc(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.b0(a)},
bj(a){var s
if(this.f!==B.z)A.j(A.l("legacy backend is not ready"))
B.k.av(A.P(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bj(a)}}
A.oH.prototype={}
A.oG.prototype={
gbe(){var s=this.b,r=s==null?null:s.gbe()
if(r==null)r=A.p6("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.iY(this.c)
return s},
b6(){if(this.d===B.cI)throw A.d(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.b6()
this.d=B.z},
aZ(a,b){var s
if(this.d!==B.z)A.j(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aZ(a,b)},
b0(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.aq){p=q==null
if(p||!q.gdC()){if(s.d!==B.aq)A.j(A.l("pixeldart backend is not context-lost"))
s.d=B.z
if(!p)q.iM()}p=s.d
if(p===B.aq)return}if(p!==B.z)A.j(A.l(r))
B.k.av(A.P(["backend","pixeldart","interpolation",0,"facts",A.lc(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdC()){if(s.d!==B.z)A.j(A.l(r))
s.d=B.aq
q.iy()
return}q.b0(a)}},
bj(a){var s
if(this.d!==B.z)A.j(A.l("pixeldart backend is not ready"))
B.k.av(A.P(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bj(a)}}
A.oI.prototype={
lP(a,b){var s,r,q,p,o,n,m
a.D()
s=B.bv.c8(a)
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
o=A.N(o,A.p(o).c)
B.a.a0(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.t)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.hf.prototype={
A(){return"RendererBackendKind."+this.b}}
A.eh.prototype={
A(){return"RendererBackendState."+this.b}}
A.p7.prototype={}
A.jU.prototype={}
A.p5.prototype={
jR(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.w("renderer provenance values must be non-empty",null))}},
iY(a){var s=this
return A.w3(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.lb.a(a))},
B(){var s,r,q,p=this,o=A.r(t.N,t.z)
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
A.bB.prototype={
A(){return"SleepQuality."+this.b}}
A.bf.prototype={
A(){return"SleepLocation."+this.b}}
A.f8.prototype={}
A.mB.prototype={
d0(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jv(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
i.push(A.P(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.P(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.mC.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:90}
A.mD.prototype={
$1(a){return t.oB.a(a).b===this.a},
$S:91}
A.jh.prototype={
A(){return"InteractionType."+this.b}}
A.ep.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.qo.prototype={}
A.eo.prototype={}
A.iJ.prototype={}
A.nO.prototype={}
A.nR.prototype={
eH(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.as(s,s.r,s.e,A.p(s).i("as<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.a1(p,new A.nS())
return p},
lX(a,b){var s,r,q,p,o,n=b.b
if(n.gJ(n))return B.kL
s=t.N
r=A.a6(s)
q=A.a6(s)
for(s=n.gV(),s=s.gt(s),p=a.c;s.m();){o=s.gn()
if(B.a.gS(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eo(B.ax,r)
s=r.a
o=B.a.gS(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gS(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.eo(B.d0,r)
return new A.eo(B.bj,r)},
l3(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.iJ(e,!1,B.kK,null)
s=p.d===c
r=this.lX(p,d)
q.o3(e)
return new A.iJ(e,s,r,r.a===B.ax&&s?'The world says "'+d.c+'". The entry says "'+B.a.gS(p.c).p(0)+'".':null)},
mr(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.ax)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.nO(B.a.gS(s.c).p(0)+" but "+A.u(a.f))}}
A.nS.prototype={
$2(a,b){var s=t.T
s.a(a)
return B.c.H(s.a(b).a,a.a)},
$S:19}
A.c5.prototype={
A(){return"RuptureStep."+this.b}}
A.pc.prototype={}
A.cE.prototype={}
A.pd.prototype={
geP(){var s=B.aT.h(0,this.a)
return s==null?0:s},
jy(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.D)s=q.e
else s=!0
if(s)return B.ce
r=A.uL(b)
s=q.c
B.a.G(s)
B.a.K(s,r)
B.a.G(q.d)
q.a=B.a7
q.b=0
q.e=!1
return A.e([B.dI],t.e_)},
lB(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.D||a===0)return B.ce
s=A.e([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.D))break
A:{q=l.a
p=B.aT.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.V)l.lp(s)
p=l.b
o=B.aT.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cE())
if(q===B.V){l.a=B.D
l.b=0
l.e=!0
B.a.l(s,B.dH)}else{p=q.a+1
if(!(p<7))return A.f(B.cc,p)
l.a=B.cc[p]
l.b=0
B.a.l(s,new A.cE())}}}return A.an(s,t.k8)},
B(){var s=this,r=t.N
return A.P(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.an(s.c,r),"extinguishedMantles",A.an(s.d,r),"completed",s.e],r,t.z)},
lp(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.N(B.d.aW(l.b/l.geP()*A.an(s,r).length),0,A.an(s,r).length)
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
if(!(m<n.length))return A.f(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cE())}}}
A.j3.prototype={
gbK(){var s=this.b
if(s<6||s>18)return 0
return B.d.N((s-6)/12,0,1)}}
A.t_.prototype={
$1(a){var s=B.c.cn(this.a,a)&255
return B.c.N(B.d.aO(s+((B.c.cn(this.b,a)&255)-s)*this.c),0,255)},
$S:93}
A.pX.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.fa(g.a),e=t.N,d=A.r(e,t.P)
for(s=g.b,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0);s.m();){r=s.d
q=r.a
d.k(0,q,g.lv(q,r.b))}s=A.fa(g.r)
q=A.fa(g.w)
p=A.fa(g.x)
o=A.r(e,t.l_)
for(n=g.as,n=new A.O(n,A.p(n).i("O<1,2>")).gt(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.S(l.b);i.m();){h=i.gn()
j.push(A.P(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.P(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
lv(a,b){var s,r=A.fa(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fa(q.bA(0,new A.pY(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gU(s))r.k(0,"_ambient",A.fa(s.bA(0,new A.pZ(),t.S,t.z)))
return r}}
A.pY.prototype={
$2(a,b){return new A.T(A.a(a),t.ey.a(b).B(),t.iI)},
$S:94}
A.pZ.prototype={
$2(a,b){return new A.T(A.a(a),t.bR.a(b).B(),t.iI)},
$S:95}
A.en.prototype={
B(){return A.P(["hour",this.a,"order",this.b],t.N,t.S)}}
A.em.prototype={
B(){return A.P(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.hx.prototype={
B(){var s=t.N
return A.P(["field",this.a,"value",this.b],s,s)}}
A.q_.prototype={
c2(){var s=0,r=A.bn(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$c2=A.bq(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.aj(A.aP(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$c2)
case 6:n=b
s=7
return A.aj(A.aP(A.b(n.text()),t.N),$async$c2)
case 7:m=b
l=A.Dd(m)
j=J.b9(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.b9(l,"visitors")
j.toString
o.b=i.a(j)
j=J.b9(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.b9(l,"documents")
j.toString
i.a(j)
j=J.b9(l,"street")
j.toString
i.a(j)
j=J.b9(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.b9(l,"nights")
j.toString
i.a(j)
j=J.b9(l,"endings")
j.toString
o.w=i.a(j)
j=J.b9(l,"records")
j.toString
i.a(j)
j=J.b9(l,"cues")
j.toString
i.a(j)
j=J.b9(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ah(g)
j=A.u(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bk(null,r)
case 1:return A.bj(p.at(-1),r)}})
return A.bl($async$c2,r)},
j1(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.c.p(a))
if(t.f.b(s)){p=s.gL().cS(0,new A.q0())
r=p.$ti
q=t.N
q=A.r(q,q)
q.ly(new A.cg(p,r.i("T<m,m>(1)").a(new A.q1()),r.i("cg<1,T<m,m>>")))
return q}return null},
j4(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.b8(p)||o!==B.d.b8(o))return n
return new A.en(B.d.b8(p),B.d.b8(o))},
j3(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.b8(p)||typeof o!="string"||typeof n!="string")return m
return new A.em(B.d.b8(p),o,n)},
o4(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.r(a1,t.iu),a3=A.r(a1,t.c_),a4=A.r(a1,t.d8),a5=t.a,a6=A.r(a1,t.iD),a7=b.b
a7===$&&A.h()
a7=new A.O(a7,A.p(a7).i("O<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.r(a,a0)
for(o=o.gL(),o=o.gt(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.jP(l,null):null
if(k==null||!q.b(m.b))continue
j=A.r(a1,a1)
for(m=q.a(m.b).gL(),m=m.gt(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.A(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.r(a,r)
for(m=n.$ti.i("cx<1>"),l=new A.cx(n,n.r,n.e,m);l.m();){i=l.d
g=b.j4(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.r(a,s)
for(m=new A.cx(n,n.r,n.e,m);m.m();){l=m.d
e=b.j3(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.h()
a7=new A.O(a7,A.p(a7).i("O<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.S(d);m.m();){c=m.gn()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.hx(A.A(c.h(0,"field")),A.A(c.h(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.pX(A.r(a,a0),a2,a3,a4,A.r(a1,a5),A.r(a1,a5),A.r(a,a5),A.r(a,a5),A.r(a,a5),A.r(a1,a5),A.r(a1,a5),A.r(a1,a5),a6)}}
A.q0.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:96}
A.q1.prototype={
$1(a){t.d7.a(a)
return new A.T(A.A(a.a),A.A(a.b),t.gc)},
$S:97}
A.cm.prototype={
A(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.di.prototype={
cs(a,b,c,d){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=d==null?s.d:d,n=a==null?s.e:a,m=s.f
return new A.di(q,p,o,n,m)},
mo(a){return this.cs(null,null,null,a)},
mi(a){return this.cs(null,null,a,null)},
mg(a){return this.cs(null,a,null,null)},
m1(a){return this.cs(a,null,null,null)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.P(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.ly.prototype={
$1(a){return a==null?null:A.U(a)},
$S:98}
A.lw.prototype={
$1(a){return t.g8.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:149}
A.lx.prototype={
$0(){return A.j(B.eR)},
$S:6}
A.lI.prototype={
cY(a,b){var s=this.a,r=a+": "+b
s.textContent=r
s.className="ambient-notice visible"
this.aB(r)
A.a(A.b(v.G.window).setTimeout(A.W(new A.lK(this)),7000))},
aB(a){var s,r,q=this
if(!q.c||B.b.bI(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.a(A.b(v.G.window).setTimeout(A.W(new A.lJ(q,s)),4200))}}
A.lK.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:36}
A.lJ.prototype={
$1(a){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:100}
A.cd.prototype={
A(){return"AudioOutputMode."+this.b}}
A.cn.prototype={
A(){return"AudioDynamicRange."+this.b}}
A.cV.prototype={
A(){return"AudioReverbMode."+this.b}}
A.cU.prototype={
A(){return"AudioDuckingMode."+this.b}}
A.dj.prototype={
ct(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dj(r,q,p,a==null?s.e:a)},
mf(a){return this.ct(null,null,a,null)},
m6(a){return this.ct(null,a,null,null)},
mk(a){return this.ct(null,null,null,a)},
m5(a){return this.ct(a,null,null,null)},
B(){var s=this
return A.P(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.lV.prototype={
$1$2(a,b,c){return B.a.aV(c.i("o<0>").a(a),new A.lW(b,c),new A.lX(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:101}
A.lW.prototype={
$1(a){return t.aT.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.lX.prototype={
$0(){return A.j(A.a5("unsupported audio option: "+A.u(this.a),null,null))},
$S:6}
A.me.prototype={
eA(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.mh.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.iC.prototype={
A(){return"BrushComponentKind."+this.b}}
A.iD.prototype={
A(){return"BrushComponentState."+this.b}}
A.mg.prototype={}
A.eR.prototype={
gcq(){var s,r,q,p,o=t.N
o=A.r(o,o)
for(s=this.r.gL(),s=s.gt(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aB(r)
o.k(0,q,p.gJ(r)?"":p.gP(r))}return o},
bx(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.kN.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.P(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.a(s)
r=n.h(0,j)
r.toString
A.bX(r)
q=n.h(0,i)
q.toString
A.bX(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
return A.eS(null,a,A.U(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.a(s)
r=n.h(0,j)
r.toString
A.bX(r)
q=n.h(0,i)
q.toString
A.bX(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
A.U(m)
l=k.gcq()
return A.eS(l,null,m,r,p,o,s,q)},
dE(a){var s=null
return this.bx(a,s,s,s,s,s)},
mc(a){var s=null
return this.bx(s,s,s,a,s,s)},
md(a){var s=null
return this.bx(s,s,s,s,a,s)},
m9(a){var s=null
return this.bx(s,a,s,s,s,s)},
ma(a){var s=null
return this.bx(s,s,a,s,s,s)},
mp(a){var s=null
return this.bx(s,s,s,s,s,a)},
D(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.e9)
p=this.r
if(p.gL().M(0,new A.mv()))throw A.d(B.eN)
if(p.gL().M(0,new A.mw()))throw A.d(B.eC)
p=p.gaq()
o=A.p(p)
s=o.i("fQ<o.E,m>")
r=s.i("R<o.E>")
q=A.N(new A.R(new A.fQ(p,o.i("o<m>(o.E)").a(new A.mx()),s),s.i("n(o.E)").a(new A.my()),r),r.i("o.E"))
if(A.js(q,A.K(q).c).a!==q.length)throw A.d(B.ec)},
B(){var s,r,q=this,p=t.N,o=A.r(p,t.a)
for(s=q.r.gL(),s=s.gt(s);s.m();){r=s.gn()
o.k(0,r.a,A.az(r.b,!0,p))}return A.P(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.mv.prototype={
$1(a){t.cW.a(a)
return J.u_(a.b,new A.mu(a))},
$S:33}
A.mu.prototype={
$1(a){var s
A.A(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.vw(a)
else s=!1
return s},
$S:3}
A.mw.prototype={
$1(a){t.cW.a(a)
return a.a!=="pause"&&J.u_(a.b,B.cL.gaC(B.cL))},
$S:33}
A.mx.prototype={
$1(a){return t.a.a(a)},
$S:103}
A.my.prototype={
$1(a){return A.A(a).length!==0},
$S:3}
A.mt.prototype={
$1(a){return typeof a=="string"},
$S:11}
A.dk.prototype={
A(){return"BindingCaptureStatus."+this.b}}
A.dT.prototype={
A(){return"BindingConflictResolution."+this.b}}
A.cW.prototype={}
A.iK.prototype={
dz(a){var s=this
if(!s.a.r.O(a))return new A.cW(B.bq,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.dg},
lQ(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aC
if(!A.vw(a)){p.c=p.b=null
return new A.cW(B.bs,B.cM.u(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gL()
r=r.gt(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.vo(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.cW(B.bp,a+" is already bound to "+s)}return p.k0(a)},
ew(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aC
switch(a.a){case 2:m.c=m.e=m.d=null
return B.dh
case 1:s=A.uD(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.uU(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.v5(r,k))
m.a=m.a.dE(s)
break
case 0:s=A.uD(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gP(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.hq(p,1,null,A.K(p).c)
o=p.$ti
p=new A.aU(p,p.gq(0),o.i("aU<a1.E>"))
o=o.i("a1.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.v5(r,k)}else{r=s.h(0,j)
r.toString
r=A.uU(A.v5(r,k),q)}s.k(0,j,r)
m.a=m.a.dE(s)
break}m.c=m.e=m.d=null
return B.bo},
k0(a){var s,r,q=this,p=q.b
if(p==null)return B.aC
s=A.uD(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.uU(r,a))
q.a=q.a.dE(s)
q.b=null
return B.bo}}
A.iL.prototype={
jJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="settings-copy",b="settings-grid"
e.x=new A.iK(e.w)
s=e.b
s.setAttribute("aria-label","Controls settings")
A.b(s.appendChild(A.B(a,"h1","journal-title","Controls")))
A.b(s.appendChild(A.B(a,"p",c,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.B(a,"div",b,d)
e.eU(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
e.eU(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
e.d5(a,r,"invertX","Invert horizontal look")
e.d5(a,r,"invertY","Invert vertical look")
e.d5(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.B(a,"div",b,d)
for(p=B.hQ.gL(),p=p.gt(p),o=A.dL,n=e.Q;p.m();){m=p.gn()
l=m.a
k=A.eS(d,d,!1,1,!1,!1,2,1).r.h(0,l)
j=k==null||J.u0(k)?"unbound":J.yx(k," / ")
i=A.b(a.createElement("div"))
i.className="setting-row"
m=m.b
i.setAttribute("aria-label",m+": "+j)
h=A.b(a.createElement("span"))
h.textContent=m
A.b(i.appendChild(h))
h=A.b(a.createElement("button"))
h.className="door-continue"
h.setAttribute("type","button")
h.id="settings.controls.bind."+l
m=new A.mr(e,l)
if(typeof m=="function")A.j(A.w("Attempting to rewrap a JS function.",d))
g=function(a0,a1){return function(a2){return a0(a1,a2,arguments.length)}}(o,m)
g[$.cR()]=m
h.addEventListener("click",g)
A.b(i.appendChild(h))
A.b(q.appendChild(i))
n.k(0,l,h)}A.b(s.appendChild(q))
p=A.B(a,"p",c,d)
e.as=p
p.setAttribute("aria-live","polite")
p=e.as
p.toString
A.b(s.appendChild(p))
p=A.B(a,"div","pause-actions",d)
e.at=p
A.b(s.appendChild(p))
e.dr()
f=A.B(a,"button","door-continue","back")
f.setAttribute("type","button")
f.id="settings.controls.back"
f.setAttribute("aria-label","back to settings categories")
f.addEventListener("click",A.W(new A.ms(e)))
A.b(s.appendChild(f))},
iE(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.fh(this.x.lQ(A.A(a.code)))},
fh(a){var s,r=this,q=r.as
if(q!=null){s=a.c
if(s==null)s=a.a.b
q.textContent=s}q=a.a
if(q===B.bp)r.lg()
else if(q===B.br){q=r.x
q===$&&A.h()
q=q.a
r.w=q
s=r.f
if(s!=null)s.$1(q)
r.dr()}else r.d9()},
lg(){var s,r,q,p,o,n,m
this.d9()
s=this.at
if(s==null)return
for(r=A.dL,q=0;q<3;++q){p=B.fR[q]
o=A.b(A.i(s.ownerDocument).createElement("button"))
o.className="door-continue"
o.textContent=p.b
o.setAttribute("type","button")
n=new A.mq(this,p)
if(typeof n=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
m=function(a,b){return function(c){return a(b,c,arguments.length)}}(r,n)
m[$.cR()]=n
o.addEventListener("click",m)
A.b(s.appendChild(o))}},
d9(){var s,r=this.at
if(r==null)return
while(A.i(r.firstChild)!=null){s=A.i(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
dr(){var s,r,q,p
for(s=this.Q,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0);s.m();){r=s.d
q=r.b
p=this.x
p===$&&A.h()
p=p.a.gcq().h(0,r.a)
if(p==null)p="unbound"
q.textContent=p}},
eU(a,b,c,d,e,f){var s,r=A.B(a,"label","setting-row",null)
A.b(r.appendChild(A.B(a,"span",null,d)))
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.u(e)
s.max=""+f
s.step="0.1"
s.addEventListener("input",A.W(new A.mo(this,s,c)))
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
d5(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.W(new A.mp(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.B(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
ff(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sem(a){this.f=t.dO.a(a)},
saX(a){this.r=t.Z.a(a)}}
A.mr.prototype={
$1(a){var s,r,q,p,o
A.b(a)
s=this.a
r=this.b
q=s.x
q===$&&A.h()
p=q.dz(r)
q=s.as
if(q!=null){o=p.c
r=o==null?"press a key for "+r+"; Escape cancels":o
q.textContent=r}s.d9()},
$S:2}
A.ms.prototype={
$1(a){var s
A.b(a)
s=this.a.r
if(s!=null)s.$0()},
$S:2}
A.mq.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.x
r===$&&A.h()
s.fh(r.ew(this.b))},
$S:2}
A.mo.prototype={
$1(a){var s,r,q
A.b(a)
s=A.jO(A.A(this.b.value))
if(s==null)s=1
r=this.a
q=r.w
r.ff(this.c==="horizontalSensitivity"?q.ma(s):q.mp(s))},
$S:2}
A.mp.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.U(this.b.checked)
r=this.a
q=this.c
A:{if("invertX"===q){p=r.w.mc(s)
break A}if("invertY"===q){p=r.w.md(s)
break A}p=r.w.m9(s)
break A}r.ff(p)},
$S:2}
A.mF.prototype={
jL(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h=k.a
h.setAttribute("role","dialog")
h.setAttribute("aria-modal","true")
h.setAttribute("aria-label","Front door visitor")
h.setAttribute("tabindex","-1")
h.setAttribute("hidden","")
s=A.B(a,i,"door-speaker",j)
k.b!==$&&A.G()
k.b=s
r=A.B(a,i,"door-line",j)
k.c!==$&&A.G()
k.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(h.appendChild(s))
A.b(h.appendChild(r))
r=A.B(a,i,"door-cite-list",j)
k.e!==$&&A.G()
k.e=r
s=A.B(a,i,"door-cite-result",j)
k.f!==$&&A.G()
k.f=s
A.b(h.appendChild(r))
A.b(h.appendChild(s))
for(s=A.dL,r=k.r,q=0;q<5;++q){p=B.hd[q]
o=A.b(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.mG(k,p)
if(typeof n=="function")A.j(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(s,n)
m[$.cR()]=n
o.addEventListener("click",m)
A.b(h.appendChild(o))
B.a.l(r,o)}s=A.B(a,"button","door-continue","continue")
k.d!==$&&A.G()
k.d=s
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.mH(k)))
A.b(h.appendChild(s))
l=A.W(new A.mI(k,a))
k.w=l
h.addEventListener("keydown",l)
A.b(A.i(a.body).appendChild(h))},
eN(a,b){var s,r,q,p=this
p.Q=!0
s=p.b
s===$&&A.h()
s.textContent=a
s=p.c
s===$&&A.h()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.t)(s),++q)A.b(s[q].style).display=""
r=p.d
r===$&&A.h()
A.b(r.style).display="none"
r=p.e
r===$&&A.h()
r.textContent=""
r=p.f
r===$&&A.h()
r.textContent=""
r=p.a
r.className="door visible"
r.removeAttribute("hidden")
B.a.gP(s).focus()},
cZ(a){var s,r,q=this,p=q.c
p===$&&A.h()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.t)(p),++r)A.b(p[r].style).display="none"
p=q.d
p===$&&A.h()
A.b(p.style).display=""
s=q.f
s===$&&A.h()
s.textContent=""
p.focus()},
jo(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.dL,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.mJ(o,this)
if(typeof o=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.cR()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
cF(){var s,r,q=this
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
snc(a){this.x=t.ov.a(a)},
sne(a){this.y=t.Z.a(a)},
snd(a){this.z=t.bZ.a(a)}}
A.mG.prototype={
$1(a){var s
A.b(a)
s=this.a.x
return s==null?null:s.$1(this.b)},
$S:1}
A.mH.prototype={
$1(a){var s
A.b(a)
s=this.a.y
return s==null?null:s.$0()},
$S:1}
A.mI.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j
A.b(a)
s=this.a
if(!s.Q||A.A(a.code)!=="Tab")return
r=A.e([],t.d)
for(q=s.r,p=q.length,o=0;o<q.length;q.length===p||(0,A.t)(q),++o){n=q[o]
if(A.A(A.b(n.style).display)!=="none")r.push(n)}q=s.d
q===$&&A.h()
if(A.A(A.b(q.style).display)!=="none")r.push(q)
s=s.e
s===$&&A.h()
m=A.b(s.querySelectorAll("button"))
for(s=t.m,l=0;l<A.a(m.length);++l){k=A.i(m.item(l))
if(s.b(k))B.a.l(r,k)}if(r.length===0)return
j=A.i(this.b.activeElement)
if(A.U(a.shiftKey)){if(j===B.a.gP(r)||!B.a.u(r,j)){a.preventDefault()
B.a.gS(r).focus()}}else if(j===B.a.gS(r)||!B.a.u(r,j)){a.preventDefault()
B.a.gP(r).focus()}},
$S:2}
A.mJ.prototype={
$1(a){var s
A.b(a)
s=this.b.z
return s==null?null:s.$1(this.a.a)},
$S:1}
A.mM.prototype={
jM(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.B(s,"h1","journal-title",null)
o.f!==$&&A.G()
o.f=r
q=A.B(s,"div","ending-copy",null)
o.r!==$&&A.G()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.B(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.W(new A.mN(o)))
A.b(n.appendChild(p))},
jp(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.t)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bB()},
sng(a){this.w=t.Z.a(a)}}
A.mN.prototype={
$1(a){var s
A.b(a)
s=this.a
s.a5()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.cY.prototype={
A(){return"GameplayInteractionMode."+this.b}}
A.cp.prototype={
A(){return"GameplayPromptDensity."+this.b}}
A.cq.prototype={
A(){return"GameplayTextPacing."+this.b}}
A.cZ.prototype={
A(){return"GameplayJournalLayout."+this.b}}
A.cX.prototype={
A(){return"GameplayConfirmationLevel."+this.b}}
A.d_.prototype={
A(){return"GameplaySaveFeedback."+this.b}}
A.co.prototype={
A(){return"GameplayFocusLossBehavior."+this.b}}
A.nb.prototype={
b4(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.vE(n,b==null?s.x:b,l,r,o,q,m,p)},
m3(a){var s=null
return this.b4(s,a,s,s,s,s,s,s)},
mb(a){var s=null
return this.b4(s,s,s,a,s,s,s,s)},
mh(a){var s=null
return this.b4(s,s,s,s,s,a,s,s)},
mm(a){var s=null
return this.b4(s,s,s,s,s,s,s,a)},
me(a){var s=null
return this.b4(s,s,s,s,a,s,s,s)},
m2(a){var s=null
return this.b4(a,s,s,s,s,s,s,s)},
ml(a){var s=null
return this.b4(s,s,s,s,s,s,a,s)},
m7(a){var s=null
return this.b4(s,s,a,s,s,s,s,s)},
B(){var s=this
return A.P(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.ce.prototype={
A(){return"GraphicsPreset."+this.b}}
A.dr.prototype={
bw(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dr(s.a,r,q,p,o,n,m)},
dD(a){var s=null
return this.bw(a,s,s,s,s,s)},
h4(a){var s=null
return this.bw(s,a,s,s,s,s)},
h5(a){var s=null
return this.bw(s,s,s,a,s,s)},
mj(a){var s=null
return this.bw(s,s,s,s,a,s)},
m8(a){var s=null
return this.bw(s,s,a,s,s,s)},
mn(a){var s=null
return this.bw(s,s,s,s,s,a)},
D(){var s=this,r=null,q=s.c
if(!B.a.u(B.hB,q))throw A.d(A.a5("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.u(B.fZ,q))throw A.d(A.a5("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.u(B.hE,q))throw A.d(A.a5("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.u(B.hy,q))throw A.d(A.a5("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.P(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.nn.prototype={
$1(a){return t.jI.a(a).b===this.a.h(0,"preset")},
$S:34}
A.no.prototype={
$0(){return A.j(B.es)},
$S:6}
A.np.prototype={
B(){return A.P(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.nh.prototype={}
A.ni.prototype={}
A.ja.prototype={
jN(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.b(l.appendChild(A.B(a,"h1","journal-title","Graphics")))
A.b(l.appendChild(A.B(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.B(a,"div","settings-grid",n)
r=t.N
o.bL(a,s,"preset","quality preset",A.P(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bL(a,s,"renderScale","render scale",A.P(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bL(a,s,"frameTarget","frame target",A.P(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bL(a,s,"antialiasing","anti-aliasing",A.P(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bL(a,s,"textureQuality","texture quality",A.P(["high","High","medium","Medium","low","Low"],r,r))
q=A.B(a,"label","setting-toggle",n)
r=A.b(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.W(new A.nl(o)))
r=o.x
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.B(a,"span",n,"Dynamic resolution")))
A.b(s.appendChild(q))
A.b(l.appendChild(s))
r=A.B(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.b(l.appendChild(r))
p=A.B(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.W(new A.nm(o)))
A.b(l.appendChild(p))},
bL(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.b(s.appendChild(A.B(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.O(e,A.p(e).i("O<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.W(new A.nk(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.w.k(0,c,r)},
fk(a){var s
a.D()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
eM(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.aw(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
sem(a){this.f=t.ft.a(a)},
saX(a){this.r=t.Z.a(a)}}
A.nl.prototype={
$1(a){var s
A.b(a)
s=this.a
s.fk(s.z.h4(A.U(s.x.checked)))},
$S:2}
A.nm.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.r
if(r!=null)r.$0()
else s.a5()},
$S:2}
A.nk.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.A(this.b.value)
r=this.a
q=this.c
A:{if("preset"===q){p=r.z.h5(B.a.al(B.cb,new A.nj(s)))
break A}if("renderScale"===q){p=r.z.mj(s)
break A}if("frameTarget"===q){p=r.z.m8(s)
break A}if("antialiasing"===q){p=r.z.dD(s)
break A}if("textureQuality"===q){p=r.z.mn(s)
break A}p=r.z
break A}r.fk(p)},
$S:2}
A.nj.prototype={
$1(a){return t.jI.a(a).b===this.a},
$S:34}
A.nr.prototype={
jO(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.B(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.B(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.B(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.B(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.W(new A.ns(this)))
A.b(p.appendChild(r))}}
A.ns.prototype={
$1(a){A.b(a)
return this.a.a5()},
$S:1}
A.nZ.prototype={
bB(){var s,r=this
r.jC()
s=r.r.a-1
if(s<1)s=1
r.CW=r.f1(r.CW,s)
r.l6()
r.fA()},
ka(){var s,r=this,q=r.a,p=A.B(q,"div","page-turn",null),o=A.B(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.W(new A.o_(r)))
s=A.B(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.W(new A.o0(r)))
q=A.B(q,"span","right-day-label",null)
r.Q!==$&&A.G()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
fW(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.f1(s.CW+a,r)
s.fA()},
f1(a,b){if(a<1)return 1
if(a>b)return b
return a},
l6(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.eH(),r=s.length,q=A.dL,p=j.a,o=0;o<s.length;s.length===r||(0,A.t)(s),++o){n=s[o]
m=B.a.gS(n.c).p(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.o1(j,n,l)
if(typeof m=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.cR()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
fA(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.p(p).i("as<2>"),n=new A.as(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.a1(r,new A.o2())
j.fz(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.as(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.a1(s,new A.o3())
j.fz(i,s)
k=B.d.N(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.b(i.style).setProperty("width",B.d.cP(k*100,1)+"%")},
fz(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.t)(b),++r)A.b(a.appendChild(this.kB(b[r])))},
kB(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.B(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.b(k.createElement("div"))
n.className=q
n.textContent=o
A.b(n.style).setProperty("--shake",B.d.p(p.b))
A.b(j.appendChild(n))}m=a.r
if(m!=null){l=this.kQ(m,!1)
l.className=A.A(l.className)+" margin"
A.b(j.appendChild(l))}return j},
kQ(a,b){var s=b?"hand-line struck":"hand-line",r=A.B(this.a,"div",s,a.p(0))
A.b(r.style).setProperty("--shake",B.d.p(a.b))
return r}}
A.o_.prototype={
$1(a){A.b(a)
return this.a.fW(-1)},
$S:1}
A.o0.prototype={
$1(a){A.b(a)
return this.a.fW(1)},
$S:1}
A.o1.prototype={
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
A.o2.prototype={
$2(a,b){var s=t.T
return B.c.H(s.a(a).a,s.a(b).a)},
$S:19}
A.o3.prototype={
$2(a,b){var s=t.T
return B.c.H(s.a(a).a,s.a(b).a)},
$S:19}
A.h9.prototype={
aP(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.i(this.a.body).appendChild(s))},
bB(){var s,r,q,p,o=this,n=o.b
if(B.b.u(A.A(n.className),"open"))return
s=$.ow
if(s!=null&&s!==o)s.a5()
$.ow=o
r=o.a
o.d=A.i(r.activeElement)
A.vO(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.W(o.gl0())
o.e=q
r.addEventListener("keydown",q)
p=A.x4(n)
if(p.length!==0)B.a.gP(p).focus()
else n.focus()},
a5(){var s,r,q=this,p=q.b
if(!B.b.u(A.A(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.ow===q)$.ow=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
iE(a){},
l1(a){A.b(a)
this.iE(a)
if(A.U(a.defaultPrevented))return
if(A.A(a.code)==="Escape"){a.preventDefault()
this.a5()
return}if(A.A(a.code)==="Tab")this.lo(a)},
lo(a){var s,r=A.x4(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.U(a.shiftKey)){if(s===B.a.gP(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gS(r).focus()}}else if(s===B.a.gS(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gP(r).focus()}},
saY(a){this.c=t.Z.a(a)}}
A.b3.prototype={
A(){return"PauseReason."+this.b}}
A.cA.prototype={
A(){return"PausePage."+this.b}}
A.dy.prototype={
A(){return"PauseTransitionKind."+this.b}}
A.d4.prototype={
B(){var s,r=A.r(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
W(a,b){if(b==null)return!1
return b instanceof A.d4&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gI(a){return A.ch(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.dx.prototype={
gh1(){var s=this.a
return s.length===1&&B.a.gP(s).a===B.aV},
B(){var s=A.r(t.N,t.X),r=this.a,q=A.K(r),p=q.i("Q<1,X<m,C?>>")
r=A.N(new A.Q(r,q.i("X<m,C?>(1)").a(new A.oB()),p),p.i("a1.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.K(r)
p=q.i("Q<1,m>")
r=A.N(new A.Q(r,q.i("m(1)").a(new A.oC()),p),p.i("a1.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.oB.prototype={
$1(a){return t.lf.a(a).B()},
$S:105}
A.oC.prototype={
$1(a){return t.e0.a(a).b},
$S:106}
A.bO.prototype={}
A.oA.prototype={
iF(a){var s,r=this
if(r.a.gh1())return new A.bO(B.T,r.a,null)
s=r.a
s=new A.dx(B.hz,s.b,a)
r.a=s
return new A.bO(B.cC,s,"pause.resume")},
lF(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gS(p)
q=r.a.a
q=B.a.aH(q,0,q.length-1)
p=r.a
p=new A.dx(q,p.b,p.c)
r.a=p
return new A.bO(B.cD,p,s.c)}if(q.gh1()&&r.a.b.length===0)return r.c5()
return new A.bO(B.T,r.a,null)},
c5(){var s=this.a
if(s.a.length===0)return new A.bO(B.T,s,null)
if(s.b.length!==0)return new A.bO(B.T,s,null)
this.a=B.aU
return new A.bO(B.cE,B.aU,s.c)},
nv(a){var s,r,q=this
if(B.a.u(q.a.b,a))return new A.bO(B.T,q.a,null)
s=q.a
r=A.N(s.b,t.e0)
r.push(a)
s=new A.dx(s.a,r,q.a.c)
q.a=s
return new A.bO(B.cC,s,null)},
mv(a){var s,r,q,p,o=this
if(!B.a.u(o.a.b,a))return new A.bO(B.T,o.a,null)
s=o.a
r=s.b
q=A.K(r)
p=q.i("R<1>")
r=A.N(new A.R(r,q.i("n(1)").a(new A.oD(a)),p),p.i("o.E"))
q=o.a.c
r=new A.dx(s.a,r,q)
o.a=r
return new A.bO(B.iH,r,q)},
kr(a){var s
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
case 8:s="help.close"
break
default:s=null}return s}}
A.oD.prototype={
$1(a){return t.e0.a(a)!==this.a},
$S:107}
A.cB.prototype={
A(){return"PauseRootAction."+this.b}}
A.oE.prototype={
bo(a,b,c,d){var s=B.i1.h(0,c)
s.toString
A.b(b.appendChild(A.yN(a,new A.mg(s,B.dq,d),new A.oF(this,c))))},
snq(a){this.f=t.Z.a(a)},
sns(a){this.r=t.Z.a(a)},
snf(a){this.w=t.Z.a(a)},
snr(a){this.x=t.Z.a(a)},
sni(a){this.y=t.Z.a(a)},
saX(a){this.z=t.Z.a(a)}}
A.oF.prototype={
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
break}},
$S:0}
A.bx.prototype={
A(){return"PauseSettingsCategory."+this.b}}
A.oP.prototype={
jn(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.pk.prototype={
jT(a){var s,r,q,p,o,n,m,l,k=this.b
k.setAttribute("aria-label","Settings categories")
A.b(k.appendChild(A.B(a,"h1","journal-title","Settings")))
A.b(k.appendChild(A.B(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.B(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=A.dL,q=0;q<6;++q){p=B.hf[q]
o=B.aS.h(0,p)
o.toString
n=A.b(a.createElement("button"))
n.className="door-continue"
n.textContent=o
n.setAttribute("type","button")
o=B.cq.h(0,p)
o.toString
n.id=o
n.setAttribute("aria-label",A.u(B.aS.h(0,p))+" settings")
o=new A.pl(this,p)
if(typeof o=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,o)
m[$.cR()]=o
n.addEventListener("click",m)
A.b(s.appendChild(n))}l=A.B(a,"button","door-continue","back")
l.setAttribute("type","button")
l.id="settings.back"
l.setAttribute("aria-label","back to pause menu")
l.addEventListener("click",A.W(new A.pm(this)))
A.b(s.appendChild(l))
A.b(k.appendChild(s))},
snb(a){this.f=t.mP.a(a)},
saX(a){this.r=t.Z.a(a)}}
A.pl.prototype={
$1(a){var s
A.b(a)
s=this.a.f
return s==null?null:s.$1(this.b)},
$S:1}
A.pm.prototype={
$1(a){var s
A.b(a)
s=this.a.r
return s==null?null:s.$0()},
$S:1}
A.hl.prototype={
jU(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="settings-grid",a="door-continue",a0=d.f,a1=a0==null?"House settings":A.u(B.aS.h(0,a0))+" settings",a2=d.b
a2.setAttribute("aria-label",a1)
A.b(a2.appendChild(A.B(a3,"h2","journal-title",a1)))
A.b(a2.appendChild(A.B(a3,"p","settings-copy","Change presentation without changing what happened in the house.")))
s=A.B(a3,"div",b,c)
for(r=t.ib,q=r.a(new A.pH(d)),p=B.a.gt(B.C),o=t.pl,q=new A.L(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(s.appendChild(d.kP(a3,m,l,n==null?1:n,k)))}A.b(a2.appendChild(s))
j=A.B(a3,"div",b,c)
for(r=r.a(new A.pI(d)),q=B.a.gt(B.C),o=new A.L(q,r,o);o.m();)A.b(j.appendChild(d.ln(a3,q.gn())))
A.b(a2.appendChild(j))
if(a0===B.x)A.b(a2.appendChild(d.k8(a3)))
if(a0===B.y)A.b(a2.appendChild(d.k7(a3)))
if(a0===B.ao)A.b(a2.appendChild(d.k9(a3)))
i=A.B(a3,"div",b,c)
for(a0=t.lt.a(d.gkI()),r=B.a.gt(B.hC),a0=new A.L(r,a0,t.nU),q=A.dL;a0.m();){p=r.gn()
o=p.b
h=A.b(a3.createElement("button"))
h.className="door-continue"
h.textContent="reset "+o
h.setAttribute("type","button")
p=new A.pJ(d,p)
if(typeof p=="function")A.j(A.w("Attempting to rewrap a JS function.",c))
g=function(a5,a6){return function(a7){return a5(a6,a7,arguments.length)}}(q,p)
g[$.cR()]=p
h.addEventListener("click",g)
A.b(i.appendChild(h))}f=A.B(a3,"button",a,"reset all settings")
f.setAttribute("type","button")
f.addEventListener("click",A.W(new A.pK(d)))
A.b(i.appendChild(f))
A.b(a2.appendChild(i))
e=A.B(a3,"button",a,"return")
e.setAttribute("type","button")
e.addEventListener("click",A.W(new A.pL(d)))
A.b(a2.appendChild(e))},
k7(a){var s,r,q=this,p="photosensitivitySafe",o=A.B(a,"div","settings-grid",null),n=q.d3(a,o,"reducedMotion","reduced motion (system default)"),m=q.d3(a,o,p,"photosensitivity-safe effects (system default)"),l=q.d3(a,o,"captions","non-speech captions"),k=A.B(a,"label","setting-row",null)
A.b(k.appendChild(A.B(a,"span",null,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.W(new A.pC(q,s)))
A.b(k.appendChild(s))
A.b(o.appendChild(k))
r=A.B(a,"button","door-continue","follow system accessibility defaults")
r.setAttribute("type","button")
r.setAttribute("aria-label","follow system accessibility defaults")
r.addEventListener("click",A.W(new A.pD(q)))
A.b(o.appendChild(r))
q.k3.K(0,A.P(["reducedMotion",n,p,m,"captions",l,"uiScale",s],t.N,t.m))
return o},
d3(a,b,c,d){var s=A.B(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.W(new A.po(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.B(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
eJ(a){var s,r
this.k2=a
s=this.k3
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.d.p(r==null?1:r)}},
k9(a){var s,r,q=this,p="confirmations",o=A.B(a,"div","settings-grid",null)
q.ba(a,o,"interactionMode","interaction mode",B.ch,t.hP)
q.ba(a,o,"promptDensity","prompt density",B.cl,t.mV)
q.ba(a,o,"textPacing","dialogue text pacing",B.ci,t.ce)
q.ba(a,o,"journalLayout","journal layout",B.c8,t.jp)
q.ba(a,o,p,p,B.c5,t.iv)
q.ba(a,o,"saveFeedback","save feedback",B.ca,t.iZ)
q.ba(a,o,"focusLossBehavior","when the window loses focus",B.c6,t.bW)
s=A.B(a,"label","setting-toggle",null)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.W(new A.pE(q,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.B(a,"span",null,"contextual reminders")))
A.b(o.appendChild(s))
return o},
ba(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.D6(f,t.aT,"T","_addGameplaySelect")
f.i("E<0>").a(e)
s=A.B(a,"label","setting-row",null)
A.b(s.appendChild(A.B(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(r.appendChild(n))}r.addEventListener("change",A.W(new A.pB(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.k(0,c,r)},
k8(a){var s,r,q=this,p=A.B(a,"div","settings-grid",null),o=t.N,n=A.r(o,o)
for(s=0;s<4;++s){r=B.aR[s].b
n.k(0,r,r)}q.c9(a,p,"output","output",n)
n=A.r(o,o)
for(s=0;s<3;++s){r=B.aO[s].b
n.k(0,r,r)}q.c9(a,p,"dynamicRange","dynamic range",n)
n=A.r(o,o)
for(s=0;s<2;++s){r=B.aN[s].b
n.k(0,r,r)}q.c9(a,p,"reverb","room effect",n)
o=A.r(o,o)
for(s=0;s<2;++s){n=B.aM[s].b
o.k(0,n,n)}q.c9(a,p,"ducking","voice intelligibility",o)
return p},
c9(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.B(a,"label","setting-row",null)
A.b(s.appendChild(A.B(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.O(e,A.p(e).i("O<1,2>")).gt(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.W(new A.pt(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.ok.k(0,c,r)},
j7(a){var s,r,q,p,o,n,m,l,k
this.k4=a
for(s=this.ok,s=new A.O(s,A.p(s).i("O<1,2>")).gt(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fm(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.F===r){s=a.c===B.ar
break A}if(B.y===r){s=a.c===B.W
break A}if(B.x===r){s=a.c===B.E
break A}s=!1
break A}return s},
kJ(a){var s,r
t.op.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.F===s){r=a===B.ar
break A}if(B.y===s){r=a===B.W
break A}if(B.x===s){r=a===B.E
break A}r=!1
break A}return r},
ln(a,b){var s=this,r=A.B(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.W(new A.pG(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.B(a,"span",null,b.b)))
return r},
kP(a,b,c,d,e){var s,r,q=this,p=A.B(a,"label","setting-row",null),o=A.B(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.u(e)
n.max=A.u(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.B(a,"output",null,"100%")
n.addEventListener("input",A.W(new A.pF(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.ax(e,d))
return p},
eL(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.iO
r=B.d.N(b,s.a,s.b)
q.value=B.d.p(r)
p.textContent=""+B.d.aO(r*100)+"%"},
snk(a){this.r=t.hm.a(a)},
snm(a){this.w=t.cz.a(a)},
snl(a){this.x=t.cz.a(a)},
snh(a){this.y=t.hm.a(a)},
snj(a){this.z=t.cz.a(a)},
snu(a){this.Q=t.cz.a(a)},
snp(a){this.as=t.m5.a(a)},
sno(a){this.at=t.Z.a(a)},
saX(a){this.ax=t.Z.a(a)},
sna(a){this.ay=t.kn.a(a)},
sn9(a){this.CW=t.km.a(a)},
snn(a){this.cx=t.Z.a(a)}}
A.pH.prototype={
$1(a){t.b9.a(a)
return a.d===B.L&&this.a.fm(a)},
$S:20}
A.pI.prototype={
$1(a){t.b9.a(a)
return a.d===B.a8&&this.a.fm(a)},
$S:20}
A.pJ.prototype={
$1(a){var s
A.b(a)
s=this.a.as
return s==null?null:s.$1(this.b)},
$S:1}
A.pK.prototype={
$1(a){var s
A.b(a)
s=this.a.at
return s==null?null:s.$0()},
$S:1}
A.pL.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.ax
if(r!=null)r.$0()
else s.a5()},
$S:2}
A.pC.prototype={
$1(a){var s,r,q
A.b(a)
s=this.a
r=s.k2
q=A.jO(A.A(this.b.value))
r=r.mo(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.pD.prototype={
$1(a){var s
A.b(a)
s=this.a.cx
return s==null?null:s.$0()},
$S:1}
A.po.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.U(this.b.checked)
r=this.a
q=this.c
A:{if("reducedMotion"===q){p=r.k2.mi(s)
break A}if("photosensitivitySafe"===q){p=r.k2.mg(s)
break A}p=r.k2.m1(s)
break A}r.k2=p
r=r.CW
if(r!=null)r.$1(p)},
$S:2}
A.pE.prototype={
$1(a){var s
A.b(a)
s=this.a
s.k1=s.k1.m3(A.U(this.b.checked))},
$S:2}
A.pB.prototype={
$1(a){var s,r,q,p=this
A.b(a)
s=p.a
r=p.b
A:{if("interactionMode"===r){q=s.k1.mb(B.a.al(B.ch,new A.pu(p.c)))
break A}if("promptDensity"===r){q=s.k1.mh(B.a.al(B.cl,new A.pv(p.c)))
break A}if("textPacing"===r){q=s.k1.mm(B.a.al(B.ci,new A.pw(p.c)))
break A}if("journalLayout"===r){q=s.k1.me(B.a.al(B.c8,new A.px(p.c)))
break A}if("confirmations"===r){q=s.k1.m2(B.a.al(B.c5,new A.py(p.c)))
break A}if("saveFeedback"===r){q=s.k1.ml(B.a.al(B.ca,new A.pz(p.c)))
break A}q=s.k1.m7(B.a.al(B.c6,new A.pA(p.c)))
break A}s.k1=q},
$S:2}
A.pu.prototype={
$1(a){return t.hP.a(a).b===A.A(this.a.value)},
$S:110}
A.pv.prototype={
$1(a){return t.mV.a(a).b===A.A(this.a.value)},
$S:111}
A.pw.prototype={
$1(a){return t.ce.a(a).b===A.A(this.a.value)},
$S:112}
A.px.prototype={
$1(a){return t.jp.a(a).b===A.A(this.a.value)},
$S:113}
A.py.prototype={
$1(a){return t.iv.a(a).b===A.A(this.a.value)},
$S:114}
A.pz.prototype={
$1(a){return t.iZ.a(a).b===A.A(this.a.value)},
$S:115}
A.pA.prototype={
$1(a){return t.bW.a(a).b===A.A(this.a.value)},
$S:116}
A.pt.prototype={
$1(a){var s,r,q,p,o=this
A.b(a)
s=o.a
r=s.k4
q=o.b
A:{if("output"===q){p=r.mf(B.a.al(B.aR,new A.pp(o.c)))
break A}if("dynamicRange"===q){p=r.m6(B.a.al(B.aO,new A.pq(o.c)))
break A}if("reverb"===q){p=r.mk(B.a.al(B.aN,new A.pr(o.c)))
break A}p=r.m5(B.a.al(B.aM,new A.ps(o.c)))
break A}s.k4=p
s=s.ay
if(s!=null)s.$1(p)},
$S:2}
A.pp.prototype={
$1(a){return t.cK.a(a).b===A.A(this.a.value)},
$S:117}
A.pq.prototype={
$1(a){return t.cS.a(a).b===A.A(this.a.value)},
$S:118}
A.pr.prototype={
$1(a){return t.f1.a(a).b===A.A(this.a.value)},
$S:119}
A.ps.prototype={
$1(a){return t.oA.a(a).b===A.A(this.a.value)},
$S:120}
A.pG.prototype={
$1(a){var s,r=this
A.b(a)
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.U(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.U(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.U(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.U(r.c.checked))
break}},
$S:2}
A.pF.prototype={
$1(a){var s,r,q,p=this
A.b(a)
s=A.jO(A.A(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.d.aO(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.y
if(q!=null)q.$2(r,s)}else{q=q.r
if(q!=null)q.$2(r,s)}},
$S:2}
A.be.prototype={
A(){return"SettingCategory."+this.b}}
A.hk.prototype={
A(){return"SettingKind."+this.b}}
A.aM.prototype={
cQ(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a5(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a5(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bY(a))throw A.d(A.a5(r.a+" must be boolean",q,q))
break}}}
A.pO.prototype={
$1(a){return t.b9.a(a).a===this.a},
$S:20}
A.pP.prototype={
$0(){return A.j(A.l("unknown setting: "+this.a))},
$S:6}
A.pM.prototype={
jV(a,b){var s,r=this.a
if(r!==1)throw A.d(A.w("unsupported settings version "+r,null))
for(r=this.b.gL(),r=r.gt(r);r.m();){s=r.gn()
A.pN(s.a).cQ(s.b)}},
c6(a){var s=this.b.h(0,a)
return s==null?A.j(A.l("setting missing from profile: "+a)):s},
B(){return A.P(["version",this.a,"values",this.b],t.N,t.K)}}
A.pQ.prototype={
nG(a){var s,r,q=A.f1(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.d7(q,1)
this.la(a)},
B(){return A.P(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
la(a){var s,r,q=A.f1(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.C[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.d7(q,1)}}
A.pU.prototype={
jW(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.b(i.appendChild(A.B(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.B(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.B(a,"div","entry-picker",null)
for(r=A.dL,q=0;q<2;++q){p=B.c9[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cg[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.pV(this,p,m)
if(typeof k=="function")A.j(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.cR()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
snt(a){this.f=t.as.a(a)}}
A.pV.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a5()},
$S:2}
A.cb.prototype={}
A.lF.prototype={
nV(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.K(s)
q=new A.Q(s,r.i("m(1)").a(new A.lH()),r.i("Q<1,m>")).bm(0)
r=this.b
r.G(0)
s=J.yB(a,t.N)
p=s.$ti
r.K(0,new A.R(s,p.i("n(o.E)").a(q.gaC(q)),p.i("R<o.E>")))},
my(a,b){var s,r,q,p,o,n=A.e([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.u(0,o.a))n.push(o)}return n}}
A.lH.prototype={
$1(a){return t.ot.a(a).a},
$S:121}
A.lG.prototype={
$2(a,b){var s,r=t.ot
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.H(r,s):B.c.H(a.c,b.c)},
$S:122}
A.kj.prototype={
mX(a){return this.c.u(0,t.g.a(a))},
ex(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a6(0,j.gm_())||!a.a.a6(0,new A.qi(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.u(0,r)){o=s.c
if(o!==B.aw){n=s.d
if(n<J.bJ(p)){o=o===B.Y
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.a2}else j=!1}}}if(j)return!1
m=new A.ki(r,s.b,A.an(p,t.kX),B.Y)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.G(0)
j.K(0,a.a)
j=l.c
j.G(0)
j.K(0,k)
l.e=m
return!0},
h_(a){var s=this.a,r=A.p(s).i("aa<1>"),q=r.i("R<o.E>")
s=A.N(new A.R(new A.aa(s,r),r.i("n(o.E)").a(new A.qf(a)),q),q.i("o.E"))
B.a.a1(s,new A.qg())
return s},
dz(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.kG
s=m.a.h(0,a)
if(s==null)return B.kH
r=B.c.R(a.b-1,7)
q=a.a
p=m.b.u(0,q)||r+1>=3||m.f?B.bg:B.ab
o=p===B.ab&&m.r.u(0,q)&&s.O(B.bh)?B.bh:p
if(s.O(o))n=o
else n=s.O(B.ab)?B.ab:B.bg
r=s.h(0,n)
r.toString
r=new A.ki(a,n,A.an(r,t.kX),B.Y)
m.e=r
return new A.kh(r)},
lU(a){var s,r,q,p,o,n=this.e
if(n==null)return B.d_
if(n.d!==B.Y)return B.kE
n.e=a
s=a===B.a2
n.d=s?B.aw:B.au
r=this.d
q=s?B.cY:B.kp
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.db(q,o,p,a,null))
if(a===B.ah)B.a.l(r,new A.db(B.ks,o,p,a,null))
if(s)this.fB(n)
return new A.kg(n)},
lC(){var s,r=this.e
if(r==null)return B.d_
s=r.d
if(s!==B.au&&s!==B.av)return B.kF
r.d=B.av
if(++r.f>=r.c.length){r.d=B.aw
this.fB(r)
return new A.hw(r,!0)}return new A.hw(r,!1)},
lV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.au&&s!==B.av}else s=!0
if(s)return i
r=h.gcu()
if(r==null)return i
s=t.N
q=A.r(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.cf
p=J.S(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.bt(q,s,s)
m=c.l3(!0,!0,o,new A.qo(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.ax){B.a.l(this.d,new A.db(B.kr,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.f1(B.a.gS(j.c).a,s,s)
s.K(0,q)
p.lz(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.d0)if(k===B.bj){s=n.b
s=s.gU(s)}else s=!1
else s=!0
if(s)B.a.l(this.d,new A.db(B.kq,o,p.b,i,l))}}return m},
fB(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.e=null},
sjx(a){this.r=t.R.a(a)}}
A.qi.prototype={
$1(a){var s=this.a.a
return new A.aa(s,A.p(s).i("aa<1>")).M(0,new A.qh(A.A(a)))},
$S:3}
A.qh.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:21}
A.qf.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:21}
A.qg.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.H(a.c,b.c)
return s!==0?s:B.c.H(a.d,b.d)},
$S:124}
A.qe.prototype={
$2(a,b){var s=t.kX
return B.c.H(s.a(a).a,s.a(b).a)},
$S:125}
A.kk.prototype={}
A.kM.prototype={}
A.tk.prototype={
$1(a){return B.b.T(A.A(a),"off.")},
$S:3}
A.bu.prototype={
A(){return"DoorChoice."+this.b}}
A.bR.prototype={
A(){return"VisitPhase."+this.b}}
A.bS.prototype={
A(){return"VisitTier."+this.b}}
A.dE.prototype={
A(){return"VisitorFactKind."+this.b}}
A.db.prototype={
B(){var s,r=this,q=A.r(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.cJ.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bT.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.bT&&b.a===this.a&&b.b===this.b},
gI(a){return A.ch(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c6.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.c6&&b.a===this.a&&b.b===this.b},
gI(a){return A.ch(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bC.prototype={
W(a,b){var s=this
if(b==null)return!1
return b instanceof A.bC&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gI(a){var s=this
return A.ch(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.P(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.kl.prototype={
B(){var s,r,q,p=this.a
p=A.N(p,A.p(p).c)
B.a.a0(p)
s=this.b
r=A.p(s)
q=r.i("dZ<1,X<m,@>>")
s=A.N(new A.dZ(s,r.i("X<m,@>(1)").a(new A.qd()),q),q.i("o.E"))
r=this.c
return A.P(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.qd.prototype={
$1(a){return t.g.a(a).B()},
$S:126}
A.ir.prototype={
B(){var s=this,r=s.a.B(),q=s.e
q=q==null?null:q.b
return A.P(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.lC.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:127}
A.lD.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:128}
A.lE.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:129}
A.ki.prototype={
gcu(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.qj.prototype={}
A.bD.prototype={}
A.kh.prototype={}
A.kg.prototype={}
A.hw.prototype={}
A.hR.prototype={
gbe(){var s,r=this.p3
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.p6("pixeldart",r?this.glO():B.hM,!1,null,s)},
gdC(){if(this.p3){var s=this.d
s===$&&A.h()
s=s.b===B.a3}else s=!1
return s},
glO(){var s,r
if(!this.p3)return B.o
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.dG.lP(s,r)},
gmO(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.cP(this.k3,3)},
gmN(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
b6(){var s,r,q,p,o,n,m=this,l=A.As(m.a)
m.d=l
l=l.iL()
m.r=l
l=m.w=B.bv.j5(l)
q=m.b
p=m.c
s=new A.k3(q,p,q,p)
p=A.w7(m.d)
m.e=p
try{p.iu(new A.jT(l,384,216,l.b.u(0,"shadows")?1:0),s)}catch(o){r=A.ah(o)
l=m.w
if(l===B.ap)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.u(r)
m.w=B.ap
l=A.w7(m.d)
l.iu(B.jb,s)
m.e=l}l=m.e
l.cf()
n=A.A4(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.p3=!0},
aZ(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.w("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.cf()
new A.k3(a,b,a,b).D()
r.b=a
r.c=b},
lE(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1="wall-plaster",b2="grime",b3="renderer is not initialized",b4="resource library is disposed"
if(!a9.p3||a9.Q.length!==0)return
a9.p4=b5
s=a9.dy
r=a9.e
r===$&&A.h()
s.k(0,b1,r.gaN().iP("texture:wall-plaster",256,256))
s.k(0,b2,a9.e.gaN().iP("texture:grime",512,512))
a9.fy=a9.e.gaN().iO(A.ju(s.h(0,b1),!1,"quarantine-house-safe",!0,0.48,0.44,0.46,1,1))
r=a9.fr
r.k(0,"cellar",a9.e.gaN().iO(A.ju(s.h(0,b2),!1,"quarantine-house-cellar",!0,0.3,0.28,0.29,1,1)))
for(q=b5.b,p=A.K(q),o=p.i("n(1)").a(new A.qQ()),n=B.a.gt(q),p=new A.L(n,o,p.i("L<1>"));p.m();){o=n.gn().a
m=a9.ld(o)
l=a9.e.w
if(l==null)l=A.j(A.l(b3))
k=A.ju(s.h(0,b1),!1,"quarantine-house-"+o+"-gothic",!0,m.c,m.b,m.a,1,1)
if(l.r)A.j(A.l(b4))
k.D()
j=l.b.a.aD(k,b0)
l.e.l(0,j)
r.k(0,o,j)}for(p=a9.fx,i=0;i<7;++i){h=B.hk[i]
o=a9.e.w
if(o==null)o=A.j(A.l(b3))
n=h==="service"?s.h(0,b2):s.h(0,b1)
l=a9.dj(h)
k=a9.dj(h)
l=A.ju(n,!1,"quarantine-inventory-"+h,!0,a9.dj(h).c,k.b,l.a,1,1)
if(o.r)A.j(A.l(b4))
l.D()
j=o.b.a.aD(l,b0)
o.e.l(0,j)
p.k(0,h,j)}for(p=q.length,o=a9.Q,n=a9.as,l=a9.at,k=a9.y,g=a9.z,i=0;f=q.length,i<f;q.length===p||(0,A.t)(q),++i){e=q[i]
d=a9.fE(b5,e)
f=a9.e.w
if(f==null)f=A.j(A.l(b3))
c=e.a
if(f.r)A.j(A.l(b4))
b=f.a
d.D()
j=b.b.aD(d,"room:"+c)
a=j.a
b.c.k(0,a,b.bv(d))
f.d.l(0,j)
B.a.l(k,j)
g.k(0,c,j)
f=r.h(0,c)
if(f==null){f=a9.fy
f.toString}a0=new A.bA(j,f,B.A,-1,B.N,B.a_,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.A.D()
b=f.a
a1=b.$ti
b.Z(a1.c.a(j))
b=b.b
if(!(a>=0&&a<b.length))return A.f(b,a)
d=b[a].c
b=(d==null?a1.y[1].a(d):d).d
a=B.A.aa()
b=b.gar()
a1=A.K(b)
A.ba(new A.Q(b,a1.i("H(1)").a(a.gaA()),a1.i("Q<1,H>")))
a2=f.b.bS(a0)
B.a.l(o,a2)
n.k(0,c,a2)
l.k(0,c,a0)}for(i=0;i<q.length;q.length===f||(0,A.t)(q),++i){e=q[i]
for(p=e.e,o=p.length,n=e.a,a3=0;a3<p.length;p.length===o||(0,A.t)(p),++a3){a4=p[a3]
l=a4.c
g=a4.d
a9.eS(n,a9.ft(e,a4.b,l,l+a4.e,g,g+a4.f,7902632),new A.qR(a4))}}for(q=b5.c,p=q.length,o=a9.cy,n=b5.e,i=0;l=q.length,i<l;q.length===p||(0,A.t)(q),++i){a5=q[i]
if(a5.at==null||a5.as)continue
e=n.h(0,a5.b)
if(e==null)continue
d=a9.fd(b5,e,a5)
l=a9.e.w
if(l==null)l=A.j(A.l(b3))
g=a5.a
if(l.r)A.j(A.l(b4))
f=l.a
d.D()
j=f.b.aD(d,"door-leaf:"+g)
c=j.a
f.c.k(0,c,f.bv(d))
l.d.l(0,j)
B.a.l(k,j)
l=e.a
f=r.h(0,l)
if(f==null){f=a9.fy
f.toString}a0=new A.bA(j,f,B.A,0,B.N,B.a_,!0,!0,0,b0)
f=a9.f
f===$&&A.h()
B.A.D()
b=f.a
a=b.$ti
b.Z(a.c.a(j))
b=b.b
if(!(c>=0&&c<b.length))return A.f(b,c)
d=b[c].c
c=(d==null?a.y[1].a(d):d).d
b=B.A.aa()
c=c.gar()
a=A.K(c)
A.ba(new A.Q(c,a.i("H(1)").a(b.gaA()),a.i("Q<1,H>")))
o.k(0,g,new A.hQ(g,l,f.b.bS(a0),j,a0))}for(i=0;i<q.length;q.length===l||(0,A.t)(q),++i){a5=q[i]
if(a5.as||a5.at!=null)continue
e=n.h(0,a5.b)
if(e==null)continue
r=e.a
a9.eS(r,a9.ft(e,a5.aE(r),a5.af(r),a5.af(r)+a5.w,0,a5.x,5915445),new A.qS(a5))}for(r=A.DO(A.D4(b5)),q=r.length,p=a9.cx,o=a9.CW,i=0;i<r.length;r.length===q||(0,A.t)(r),++i){a6=r[i]
n=a6.a
m=a9.kC(n)
l=a9.e.w
if(l==null)l=A.j(A.l(b3))
g=""+n
f=n===4?s.h(0,b2):s.h(0,b1)
f=A.ju(f,!0,"quarantine-house-exterior-slot-"+g,!0,m.c,m.b,m.a,1,1)
if(l.r)A.j(A.l(b4))
f.D()
j=l.b.a.aD(f,b0)
l.e.l(0,j)
l=a9.e.w
if(l==null)l=A.j(A.l(b3))
f=a6.b
if(l.r)A.j(A.l(b4))
c=l.a
f.D()
a7=c.b.aD(f,"exterior:slot-"+g)
g=a7.a
c.c.k(0,g,c.bv(f))
l.d.l(0,a7)
B.a.l(k,a7)
a8=new A.bA(a7,j,B.A,-1,B.N,B.a_,!0,!0,0,b0)
p.k(0,n,a8)
l=a9.f
l===$&&A.h()
B.A.D()
f=l.a
c=f.$ti
f.Z(c.c.a(a7))
f=f.b
if(!(g>=0&&g<f.length))return A.f(f,g)
d=f[g].c
g=(d==null?c.y[1].a(d):d).d
f=B.A.aa()
g=g.gar()
c=A.K(g)
A.ba(new A.Q(g,c.i("H(1)").a(f.gaA()),c.i("Q<1,H>")))
o.k(0,n,l.b.bS(a8))}},
j8(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.dx=A.an(a8.e,t.gB)
if(!a5.p3)return
for(s=a5.ax,r=new A.O(s,A.p(s).i("O<1,2>")).gt(0),q=a5.ay;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.b7(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.j(A.l(a6))
o=n.a
if(p.r)A.j(A.l(a7))
p.a.b7(o)
p.d.ag(0,o)}}s.G(0)
q.G(0)
r=a5.ch
B.a.G(r)
for(p=a5.dx,o=p.length,m=a8.c,l=a5.fx,k=0;k<o;++k){j=p[k]
i=a5.p4
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cp(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.j(A.l(a6))
f=a5.kO(g,j,m)
e=j.a
if(i.r)A.j(A.l(a7))
d=i.a
f.D()
c=d.b.aD(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bv(f))
i.d.l(0,c)
i=j.f
f=i.a
a=B.X.ga8()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.k7(new A.H(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.jR(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bA(c,a2,i,-1,B.N,B.a_,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.D()
a2=d.a
f=a2.$ti
a2.Z(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.f(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.aa()
f=f.gar()
b=A.K(f)
A.ba(new A.Q(f,b.i("H(1)").a(i.gaA()),b.i("Q<1,H>")))
s.k(0,e,d.b.bS(n))}$.I.j().setAttribute("data-renderer-inventory-items",""+s.a)},
jl(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a8.e,a7=a6.h(0,a9)
if(a7==null)return
s=a7.a
r=A.aC([s],t.N)
for(q=a8.az(s),p=J.S(q.a),q=new A.L(p,q.b,q.$ti.i("L<1>"));q.m();){o=p.gn()
n=o.bC(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a6.h(0,n)!=null)r.l(0,n)}for(a6=a5.as,a6=new A.O(a6,A.p(a6).i("O<1,2>")).gt(0),s=a5.at;a6.m();){m=a6.d
q=m.a
p=s.h(0,q)
p.toString
l=a5.bQ(p,r.u(0,q)?-1:0)
p=a5.f
p===$&&A.h()
o=m.b
k=l.c
k.D()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.Z(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.f(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.aa()
j=j.gar()
i=A.K(j)
A.ba(new A.Q(j,i.i("H(1)").a(k.gaA()),i.i("Q<1,H>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.Z(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.f(p,o)
p[o].sb5(l)
s.k(0,q,l)}for(a6=a5.db,s=a6.length,f=0;f<a6.length;a6.length===s||(0,A.t)(a6),++f){e=a6[f]
d=r.u(0,e.a)&&e.d.$0()?-1:0
q=a5.f
q===$&&A.h()
p=a5.bQ(e.c,d)
o=p.c
o.D()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.Z(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.f(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.aa()
k=k.gar()
j=A.K(k)
A.ba(new A.Q(k,j.i("H(1)").a(o.gaA()),j.i("Q<1,H>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.Z(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.f(q,o)
q[o].sb5(p)}a6=a5.cy
s=A.p(a6).i("aa<1>")
s=A.N(new A.aa(a6,s),s.i("o.E"))
q=s.length
f=0
for(;f<s.length;s.length===q||(0,A.t)(s),++f){c=a6.h(0,s[f])
p=c.e
l=a5.bQ(p,r.u(0,c.b)?-1:0)
p=a5.f
p===$&&A.h()
o=c.c
k=l.c
k.D()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.Z(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.f(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.aa()
j=j.gar()
i=A.K(j)
A.ba(new A.Q(j,i.i("H(1)").a(k.gaA()),i.i("Q<1,H>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.Z(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.f(p,o)
p[o].sb5(l)
a6.k(0,c.a,c.m4(l))}for(a6=a5.dx,s=a6.length,q=a5.ax,p=a5.ay,f=0;f<s;++f){b=a6[f]
o=b.a
a=q.h(0,o)
a0=p.h(0,o)
if(a==null||a0==null)continue
o=a5.f
o===$&&A.h()
k=a5.bQ(a0,r.u(0,b.b)?-1:0)
j=k.c
j.D()
i=o.a
h=i.$ti
a1=h.c.a(k.a)
i.Z(a1)
i=i.b
a1=a1.a
if(!(a1>=0&&a1<i.length))return A.f(i,a1)
g=i[a1].c
i=(g==null?h.y[1].a(g):g).d
j=j.aa()
i=i.gar()
h=A.K(i)
A.ba(new A.Q(i,h.i("H(1)").a(j.gaA()),h.i("Q<1,H>")))
o=o.b
h=o.$ti
h.c.a(a)
h.y[1].a(k)
o.Z(a)
o=o.b
h=a.a
if(!(h>=0&&h<o.length))return A.f(o,h)
o[h].sb5(k)}a2=new A.mR().lT(a9).a!==0
a6=a5.cx
s=A.p(a6).i("aa<1>")
s=A.N(new A.aa(a6,s),s.i("o.E"))
q=s.length
p=a5.CW
f=0
for(;f<s.length;s.length===q||(0,A.t)(s),++f){a3=s[f]
a4=p.h(0,a3)
if(a4==null)continue
o=a6.h(0,a3)
o.toString
l=a5.bQ(o,a2?-1:0)
o=a5.f
o===$&&A.h()
k=l.c
k.D()
j=o.a
i=j.$ti
h=i.c.a(l.a)
j.Z(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.f(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.aa()
j=j.gar()
i=A.K(j)
A.ba(new A.Q(j,i.i("H(1)").a(k.gaA()),i.i("Q<1,H>")))
o=o.b
i=o.$ti
i.c.a(a4)
i.y[1].a(l)
o.Z(a4)
o=o.b
i=a4.a
if(!(i>=0&&i<o.length))return A.f(o,i)
o[i].sb5(l)
a6.k(0,a3,l)}},
nC(a,b){var s,r,q,p,o,n,m,l,k,j=this
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
l=m.gaN().es(j.fE(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.bA(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.h()
m.dv(k)
m.b.eB(s,k)
r.k(0,b,k)
p.k(0,b,l)
p=j.y
B.a.ag(p,o)
B.a.l(p,l)
j.e.gaN().iQ(o)
$.I.j().setAttribute("data-renderer-geometry-refreshes",""+(j.R8+1));++j.R8},
er(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gaN().es(k.fd(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bA(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.dv(l)
p.b.eB(n,l)
s.k(0,b,r.h6(l,m))
s=k.y
n=r.d
B.a.ag(s,n)
B.a.l(s,m)
k.e.gaN().iQ(n)},
j9(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.aC([b],t.N),e=a.e,d=e.h(0,b)
if(d!=null)for(s=d.a,r=a.az(s),q=J.S(r.a),r=new A.L(q,r.b,r.$ti.i("L<1>"));r.m();){p=q.gn()
o=p.bC(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&e.h(0,o)!=null)f.l(0,o)}n=new A.jd(a).iX(f,c)
m=A.e([],t.dQ)
l=A.e([],t.D)
for(k=0;k<n.length;++k){j=n[k]
i=this.f7(j.b)
e=j.a
h=new A.H(e.a,e.b,e.c)
e=j.d
s=j.c
if(k===0)B.a.l(l,new A.bg(k,h,B.at,i,e,s,1.05,1.4))
else B.a.l(m,new A.jK(h,i,e,s))}g=A.y1(a0)
e=Math.max(0.045,0.52*a1)
this.id=new A.j1(B.fN,B.fM,1.5,14,B.fL,e,a0===0?null:new A.mE(new A.H(g.a,g.b,g.c),this.f7(A.y0(a0)),0.72+a1*0.18),m,l)},
b0(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.p3)throw A.d(A.l("Pixeldart runtime is not initialized"))
s=i.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.d3(s)
q=A.ub(i.b/i.c,60,1.0471975511965976,0.1)
s=new A.eO(r,q,q.a3(0,r),B.aa,B.ka,0.1,60,i.b/i.c)}p=i.id
o=i.k1
n=i.p2++
m=i.k4
l=new A.pW()
$.vj()
k=$.oN.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.lH(j,new A.mZ(s,p,o,n,m))
i.k2=i.e.mC()
s=$.oN.$0()
l.b=s
i.k3=l.gmz()/1000},
bj(a){},
iy(){},
iM(){++this.ok},
fE(a,b){var s,r,q,p,o,n,m=A.xI(a,b),l=A.D3(a,b),k=A.N(m.a,t.i)
B.a.K(k,m.b)
B.a.K(k,m.c)
B.a.K(k,l)
s=new Float32Array(A.Z(k))
r=A.e([],t.k)
for(k=s.length,q=0;q<k;q+=14){p=s[q]
o=q+1
if(!(o<k))return A.f(s,o)
o=s[o]
n=q+2
if(!(n<k))return A.f(s,n)
B.a.l(r,new A.H(p,o,s[n]))}return new A.c4(B.a0,s,null,A.ba(r))},
eS(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.h()
r=s.gaN().es(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bA(r,p.kS(a),B.A,0,B.N,B.a_,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.dv(q)
B.a.l(p.db,new A.kP(a,s.b.bS(q),q,c))},
kS(a){var s=this.fr.h(0,a)
if(s==null){s=this.fy
s.toString}return s},
kO(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cG(new Float32Array(5376))
g=this.kN(a0.b)
r=new A.c(d,b,f)
q=new A.c(e,b,f)
p=new A.c(e,c,f)
o=new A.c(d,c,f)
n=new A.c(d,b,a)
m=new A.c(e,b,a)
l=new A.c(e,c,a)
k=new A.c(d,c,a)
s.ap(q,r,o,p,g)
s.ap(n,m,l,k,g)
s.ap(r,n,k,o,g)
s.ap(m,q,p,l,g)
s.ap(r,q,m,n,g)
s.ap(o,k,l,p,g)
j=B.q.aH(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.H(e,d,j[c]))}return new A.c4(B.a0,j,null,A.ba(g))},
kN(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
kC(a){var s
A:{if(0===a){s=B.iQ
break A}if(1===a){s=B.iS
break A}if(2===a){s=B.iY
break A}if(3===a){s=B.j7
break A}if(4===a){s=B.j9
break A}if(5===a){s=B.iW
break A}if(6===a){s=B.j6
break A}if(7===a){s=B.j1
break A}s=B.j5
break A}return s},
dj(a){var s
A:{if("architecture"===a){s=B.iR
break A}if("furniture"===a){s=B.cG
break A}if("fixture"===a){s=B.j0
break A}if("service"===a){s=B.j2
break A}if("story"===a){s=B.j_
break A}if("decor"===a){s=B.iV
break A}if("micro"===a){s=B.iX
break A}s=B.cG
break A}return s},
ld(a){var s
A:{if("living-room"===a){s=B.iU
break A}if("hall"===a){s=B.iZ
break A}if("kitchen"===a){s=B.j8
break A}if("bedroom"===a){s=B.ja
break A}if("landing"===a){s=B.j3
break A}if("bathroom"===a){s=B.iT
break A}if("spare-room"===a){s=B.j4
break A}s=B.iP
break A}return s},
aL(a){return this.n4(t.G.a(a))},
n4(a){var s=0,r=A.bn(t.H),q,p=this,o,n,m,l
var $async$aL=A.bq(function(b,c){if(b===1)return A.bj(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.e([],t.iw)
for(n=0;n<2;++n){m=B.hK[n]
l=a.h(0,m)
if(l!=null)o.push(p.ci(m,l))}s=3
return A.aj(A.n4(o,t.H),$async$aL)
case 3:case 1:return A.bk(q,r)}})
return A.bl($async$aL,r)},
ci(a,b){return this.kR(a,b)},
kR(a,b){var s=0,r=A.bn(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$ci=A.bq(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dy.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.b(A.b(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.aj(A.aP(A.b(m.decode()),t.X),$async$ci)
case 7:g=A.b(A.b(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mR.a(A.b(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gaN()
f=new Uint8Array(A.Z(j))
if(h.r)A.j(A.l("resource library is disposed"))
h.c.o1(d,f)
$.I.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ah(c)
h=$.I.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.b(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.u(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bk(q,r)
case 2:return A.bj(o.at(-1),r)}})
return A.bl($async$ci,r)},
bQ(a,b){return new A.bA(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
fd(a,b,c){var s,r,q,p,o,n=A.D2(a,b,c),m=n.length
if(m===0)throw A.d(A.l("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.H(q,p,n[o]))}return new A.c4(B.a0,n,null,A.ba(s))},
ft(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.a0.j().aT(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.e([new A.c(k,s,r),new A.c(q,s,r),new A.c(q,p,r),new A.c(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.e([new A.c(k,s,r),new A.c(q,s,r),new A.c(q,p,r),new A.c(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.e([new A.c(k,s,r),new A.c(k,s,q),new A.c(k,p,q),new A.c(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.e([new A.c(k,s,r),new A.c(k,s,q),new A.c(k,p,q),new A.c(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.cG(new Float32Array(5376))
o.ap(k[0],k[1],k[2],k[3],g)
n=B.q.aH(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.H(r,q,n[p]))}return new A.c4(B.a0,n,null,A.ba(k))},
f7(a){return new A.d2((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$iuh:1}
A.qQ.prototype={
$1(a){return t.J.a(a).a!=="cellar"},
$S:30}
A.qR.prototype={
$0(){return!this.a.w},
$S:22}
A.qS.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:22}
A.fc.prototype={
gbe(){return A.p6("legacy",B.o,this.e,this.f,"legacy")},
gdC(){return this.x},
b6(){var s,r=this
if(r.w)return
s=A.A5(r.a,r.b,r.c)
r.r!==$&&A.G()
r.r=s
s.hD=s.hC=s.hB=r.d
r.w=!0},
aZ(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.aZ(a,b)}},
b0(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.d(A.l("legacy runtime is not initialized"))
if(j.x||$.fs==null)return;++j.y
$.I.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.h()
r=$.xf
q=$.bG.j()
s.hH=A.y1($.ez.j().gbK()).ga8()
s.six(A.y0($.ez.j().gbK()))
p=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.ez.j().gbK()))
s.hL=p<0?0:p
p=$.bF.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.a4(0,p.d.a3(0,(A.tT(o*0.28,1309)*2-1)*n)).a4(0,p.c.a3(0,(A.tT(p.r*0.28,2839)*2-1)*n))
p=$.bF.j()
s.hM=p.a
s.dZ=p.b
s.e_=p.c
s.e0=p.d
m=A.BX(0,0.25,0.11)
s.e1=m.a
s.e2=m.b
s.e3=m.c
p=s.cD
l=p==null?s.bV:p
if(l==null)l=s.bg
p=s.aU
p.b3(l)
s.aK.depthMask(!0)
p.lW(l,s.e1/255,s.e2/255,s.e3/255)
s.dU=s.cE=0
s.dW=!1
s.bX=0
k=$.fs
if(k!=null)k.mw($.aK,$.io())
s.mM(r,q)
$.wN.j().eA(B.dE,r)},
bj(a){},
iy(){this.x=!0},
iM(){this.x=!1},
$iuh:1}
A.kP.prototype={}
A.hQ.prototype={
h6(a,b){var s=this,r=b==null?s.d:b
return new A.hQ(s.a,s.b,s.c,r,a)},
m4(a){return this.h6(a,null)}}
A.rk.prototype={
$2(a,b){var s
A.v_(a,A.u(b))
switch(a){case"master":s=$.bm
if(s!=null)s.jd(b)
break
case"voice":s=$.bm
if(s!=null)s.jg(b)
break
case"effects":s=$.bm
if(s!=null)s.jc(b)
break
case"ambience":s=$.bm
if(s!=null)s.jb(b)
break
case"music":s=$.bm
if(s!=null)s.je(b)
break}},
$S:35}
A.rl.prototype={
$1(a){var s
A.v_("muted",""+a)
s=$.bm
if(s!=null)s.jf(a)},
$S:12}
A.rm.prototype={
$1(a){var s
A.v_("mono",""+a)
s=$.bm
if(s!=null)s.cX(a)},
$S:12}
A.rr.prototype={
$2(a,b){A.v0(a,A.u(b))
A.wS(a,b)},
$S:35}
A.rs.prototype={
$1(a){var s="high-contrast"
A.v0(s,""+a)
A.r9(s,a)},
$S:12}
A.rt.prototype={
$1(a){var s="strong-highlights"
A.v0(s,""+a)
A.r9(s,a)},
$S:12}
A.ru.prototype={
$1(a){$.cS().nG(a)
A.t1()
A.wT()},
$S:133}
A.rv.prototype={
$0(){var s=$.cS()
s.a=A.d7(null,1)
s.b=A.d7(null,1)
A.t1()
A.wT()},
$S:0}
A.rw.prototype={
$0(){A.fx(this.a)},
$S:0}
A.rx.prototype={
$0(){this.a.a5()},
$S:0}
A.ry.prototype={
$0(){A.fx(this.a)},
$S:0}
A.rn.prototype={
$0(){A.eB(this.a)},
$S:0}
A.ro.prototype={
$1(a){$.ie=a
A.xm()
A.uA()},
$S:134}
A.rp.prototype={
$1(a){$.eA=a
A.uR()
A.r8()},
$S:135}
A.rq.prototype={
$0(){$.eA=B.ac
$.ey.j().eJ($.eA)
A.uR()
A.r8()},
$S:0}
A.rg.prototype={
$1(a){var s,r=A.xT(a,A.x7()),q=r.a
$.rT=A.jb(q,a)
A.xo()
s=r.b
$.fo.j().eM(a,q,s)
$.I.j().setAttribute("data-graphics-fallback",B.a.aw(s,"|"))},
$S:136}
A.rh.prototype={
$0(){A.fx($.fo.j())},
$S:0}
A.ri.prototype={
$0(){A.fx($.fo.j())},
$S:0}
A.rd.prototype={
$1(a){var s,r
$.uI=a
$.aA.j().eK(a.gcq())
s=$.aA.j()
r=s.x
r.a=a.f
r.ev()
s.b1()
A.xn()},
$S:137}
A.re.prototype={
$0(){A.fx($.i7.j())},
$S:0}
A.rf.prototype={
$0(){A.fx($.i7.j())},
$S:0}
A.rX.prototype={
$0(){$.t7=A.U(this.a.matches)
$.v3=A.U(this.b.matches)
A.r8()},
$S:0}
A.rV.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.rW.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.ts.prototype={
$1(a){var s
try{A.vD(a,this.a)
return!0}catch(s){if(A.ah(s) instanceof A.F)return!1
else throw s}},
$S:138}
A.tt.prototype={
$1(a){var s,r,q,p,o=null,n=a
A:{if(B.F===n){o=$.id.j()
break A}if(B.y===n){o=$.ey.j()
break A}if(B.a5===n){o=$.fo.j()
break A}if(B.x===n){o=$.fm.j()
break A}if(B.a6===n){o=$.i7.j()
break A}o=$.fp.j()
break A}s=o
r=null
q=a
B:{if(B.F===q){r=B.ix
break B}if(B.y===q){r=B.iB
break B}if(B.a5===q){r=B.iy
break B}if(B.x===q){r=B.iA
break B}if(B.a6===q){r=B.iz
break B}r=B.aW
break B}p=r
o=B.cq.h(0,a)
o.toString
A.xj(s,p,o)},
$S:139}
A.tu.prototype={
$0(){A.fx($.ic.j())},
$S:0}
A.tF.prototype={
$0(){return A.eB($.ic.j())},
$S:0}
A.tI.prototype={
$0(){$.cM.j().a5()},
$S:0}
A.tJ.prototype={
$0(){$.cM.j().a5()},
$S:0}
A.tK.prototype={
$0(){A.xj($.ic.j(),B.aW,"pause.settings")},
$S:0}
A.tL.prototype={
$0(){$.cM.j().a5()
A.lk($.i9.j())},
$S:0}
A.tM.prototype={
$0(){A.t5("saved")},
$S:0}
A.tN.prototype={
$0(){$.cM.j().a5()
A.lk($.i9.j())},
$S:0}
A.tO.prototype={
$0(){return A.eB($.cM.j())},
$S:0}
A.tv.prototype={
$0(){return A.eB($.ia.j())},
$S:0}
A.tw.prototype={
$2(a,b){var s,r,q,p,o,n
if($.Y.j().gao().a===21){A.xt(!1)
return}s=$.a0.j().r.b
$.Y.j().jt(a,b,$.aK)
r=$.a0.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cW()
if(typeof n!=="number")return A.lq(n)
if(!(o<n))break
if($.a0.b===$.a0)A.j(A.ab(""))
p=B.a.h(B.J,q).b
o=$.fs
if(o!=null)o.cO(p)
o=$.bo
if(o!=null){n=$.a0.b
if(n===$.a0)A.j(A.ab(""))
o.nC(n,p)}o=q
if(typeof o!=="number")return o.a4()
q=o+1}A.t5("saved after sleep")},
$S:140}
A.tx.prototype={
$0(){return A.eB($.r4.j())},
$S:0}
A.ty.prototype={
$0(){return A.eB($.i9.j())},
$S:0}
A.tz.prototype={
$0(){A.eB($.i8.j())},
$S:0}
A.tA.prototype={
$0(){A.eB($.i8.j())},
$S:0}
A.tB.prototype={
$1(a){A.b(a)
return A.xs()},
$S:1}
A.tC.prototype={
$1(a){var s,r
A.b(a)
if(A.U(a.defaultPrevented))return
if(A.A(a.code)==="Escape"&&!A.U(a.repeat)){r=$.b8
if(r==null)A.lk($.cM.j())
else r.a5()
return}s=$.b8==null
if(!A.U(a.repeat)&&s)$.cN.j().bj(new A.jU(A.A(a.code),!0,1))
if(A.A(a.code)==="KeyP"&&!A.U(a.repeat)&&$.ym())$.uQ=!$.uQ
if(A.A(a.code)==="KeyR"&&!A.U(a.repeat)&&s&&$.xE){r=$.fw
if(r!=null)r.bE()}if(A.A(a.code)==="KeyJ"&&!A.U(a.repeat)&&!$.aH.j().Q)A.t8($.ia.j())
if(A.A(a.code)==="KeyL"&&!A.U(a.repeat)&&!$.aH.j().Q)A.t8($.r4.j())
if(A.A(a.code)==="KeyH"&&!A.U(a.repeat)&&!$.aH.j().Q)A.t8($.i9.j())
if(A.A(a.code)==="KeyO"&&!A.U(a.repeat)&&!$.aH.j().Q)A.t8($.fp.j())
if(A.A(a.code)==="KeyK"&&!A.U(a.repeat)&&s)A.t5("saved")},
$S:2}
A.tD.prototype={
$1(a){A.b(a)
if($.b8==null)$.cN.j().bj(new A.jU(A.A(a.code),!1,0))},
$S:2}
A.tE.prototype={
$1(a){A.b(a)
return A.wV()},
$S:1}
A.tG.prototype={
$1(a){A.b(a)
return A.wV()},
$S:1}
A.tH.prototype={
$1(a){A.b(a)
return $.aA.j().c4($.I.j())},
$S:1}
A.rY.prototype={
$1(a){var s=A.A(A.b(a).message)
A.t2(s,null)},
$S:2}
A.rZ.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.t2("unhandled rejection: "+A.u(s==null?A.A(a.type):s),null)},
$S:2}
A.t6.prototype={
$0(){this.a.className=""},
$S:17}
A.t3.prototype={
$1(a){return t.T.a(a).e},
$S:31};(function aliases(){var s=J.dv.prototype
s.jB=s.p
s=A.o.prototype
s.jA=s.cS
s=A.h9.prototype
s.jC=s.bB})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"C3","zA",32)
r(J.q.prototype,"gaC","u",10)
q(A,"Cg","zQ",23)
r(A.bb.prototype,"gaC","u",10)
p(A.c3.prototype,"gm_","O",10)
o(A,"CZ","AF",15)
o(A,"D_","AG",15)
o(A,"D0","AH",15)
q(A,"xH","CG",0)
s(A,"D7","zG",32)
r(A.c8.prototype,"gaC","u",10)
o(A,"Da","BI",9)
p(A.jv.prototype,"gnM","nN",73)
var n
p(n=A.k6.prototype,"gnI","nJ",7)
p(n,"gnQ","nR",7)
p(n,"gnS","nT",7)
p(n,"gnK","nL",7)
p(n,"gnO","nP",7)
q(A,"xK","AK",143)
q(A,"Ex","ud",22)
p(A.d3.prototype,"gaA","iS",54)
p(n=A.jg.prototype,"gkT","kU",1)
p(n,"gkV","kW",1)
p(n,"gkZ","l_",1)
p(n,"gkX","kY",1)
o(A,"DC","x0",9)
o(A,"DE","x_",9)
o(A,"Ds","zx",144)
o(A,"Dt","zy",145)
o(A,"DI","zr",146)
p(A.h9.prototype,"gl0","l1",1)
p(A.hl.prototype,"gkI","kJ",108)
p(A.kj.prototype,"gmW","mX",21)
o(A,"xS","Cr",147)
o(A,"Dw","BB",148)
q(A,"Dy","BG",0)
o(A,"Dx","BC",99)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.C,null)
q(A.C,[A.u5,J.ji,A.hj,J.dS,A.o,A.fI,A.dl,A.ai,A.V,A.pj,A.aU,A.ea,A.L,A.fR,A.fO,A.hy,A.am,A.cH,A.bV,A.f2,A.eQ,A.eu,A.d6,A.q5,A.os,A.fP,A.hV,A.a2,A.od,A.cx,A.as,A.e9,A.jn,A.qv,A.qZ,A.ci,A.kC,A.l4,A.qW,A.kq,A.ck,A.aQ,A.ku,A.eq,A.aq,A.kr,A.l1,A.i5,A.hI,A.kI,A.ev,A.hL,A.i_,A.l5,A.dX,A.iM,A.qO,A.r_,A.dY,A.dn,A.kz,A.jG,A.hn,A.qw,A.F,A.T,A.al,A.l2,A.pW,A.b5,A.i1,A.q7,A.kX,A.or,A.kF,A.fe,A.oQ,A.ef,A.ml,A.mm,A.jL,A.eO,A.j1,A.mZ,A.d5,A.nq,A.d2,A.mE,A.jK,A.bg,A.ec,A.bh,A.qb,A.c4,A.ot,A.oJ,A.jV,A.bA,A.k3,A.jT,A.ay,A.n0,A.jv,A.ka,A.oo,A.dd,A.k6,A.e6,A.j_,A.j0,A.n_,A.mY,A.fd,A.ao,A.b2,A.aD,A.J,A.fJ,A.oO,A.b4,A.oS,A.aW,A.oU,A.oT,A.kE,A.he,A.p9,A.qx,A.l3,A.qV,A.kQ,A.kB,A.kU,A.kO,A.qJ,A.bw,A.bs,A.aE,A.mA,A.mz,A.iq,A.ee,A.n1,A.d3,A.jR,A.k7,A.H,A.fH,A.ks,A.iA,A.kt,A.iQ,A.kw,A.fM,A.kx,A.iU,A.ky,A.j9,A.kD,A.jx,A.kK,A.eN,A.iB,A.ue,A.hb,A.kR,A.jQ,A.kS,A.el,A.jY,A.kV,A.jZ,A.kW,A.k1,A.l_,A.k0,A.kZ,A.kf,A.l6,A.hg,A.ko,A.l9,A.mj,A.j4,A.j6,A.fV,A.hm,A.x,A.iR,A.jM,A.ne,A.dI,A.cD,A.eU,A.qn,A.de,A.i4,A.i3,A.l8,A.l7,A.r3,A.iT,A.iv,A.kY,A.lQ,A.lz,A.fF,A.lM,A.u2,A.lY,A.lS,A.hz,A.mi,A.mX,A.k4,A.nc,A.je,A.jg,A.nQ,A.nT,A.jt,A.eb,A.ok,A.cG,A.p_,A.p8,A.qp,A.hG,A.l0,A.kN,A.kL,A.pR,A.c,A.mf,A.iV,A.mL,A.eV,A.jJ,A.oK,A.f7,A.pe,A.ej,A.j2,A.n8,A.n7,A.m3,A.eI,A.eK,A.eH,A.eJ,A.iE,A.jw,A.hB,A.kp,A.fX,A.nv,A.pa,A.b1,A.iY,A.jc,A.nw,A.iZ,A.mR,A.dH,A.e0,A.pb,A.dG,A.fi,A.nt,A.mP,A.pS,A.ny,A.cv,A.cf,A.nW,A.nU,A.nV,A.cC,A.jd,A.b7,A.bz,A.bc,A.by,A.dm,A.dB,A.aX,A.nE,A.ct,A.nu,A.fW,A.nD,A.eY,A.nI,A.ha,A.h2,A.qk,A.jr,A.bL,A.nY,A.ma,A.mb,A.eL,A.mc,A.o9,A.o8,A.oH,A.oG,A.oI,A.p7,A.jU,A.p5,A.f8,A.mB,A.qo,A.eo,A.iJ,A.nO,A.nR,A.pc,A.cE,A.pd,A.j3,A.pX,A.en,A.em,A.hx,A.q_,A.di,A.lI,A.dj,A.me,A.mg,A.eR,A.cW,A.iK,A.h9,A.mF,A.nb,A.dr,A.np,A.nh,A.ni,A.d4,A.dx,A.bO,A.oA,A.oP,A.aM,A.pM,A.pQ,A.cb,A.lF,A.kj,A.qj,A.db,A.bT,A.c6,A.bC,A.kl,A.ir,A.ki,A.hR,A.fc,A.kP,A.hQ])
q(J.ji,[J.jl,J.fZ,J.h_,J.f_,J.f0,J.e7,J.du])
q(J.h_,[J.dv,J.q,A.dw,A.h6])
q(J.dv,[J.jI,J.dC,J.d1])
r(J.jj,A.hj)
r(J.nX,J.q)
q(J.e7,[J.fY,J.jm])
q(A.o,[A.dF,A.M,A.cg,A.R,A.fQ,A.cj,A.et,A.cL])
q(A.dF,[A.dV,A.i6])
r(A.hF,A.dV)
r(A.hD,A.i6)
q(A.dl,[A.iG,A.iF,A.k5,A.tn,A.tp,A.qr,A.qq,A.rb,A.n5,A.qH,A.qK,A.of,A.qM,A.tQ,A.tR,A.th,A.oR,A.qc,A.ol,A.om,A.on,A.ov,A.oj,A.op,A.q2,A.q4,A.mU,A.mS,A.mT,A.ox,A.oy,A.oZ,A.oY,A.oX,A.oW,A.oV,A.p0,A.rP,A.rQ,A.pg,A.ph,A.tX,A.tV,A.n2,A.oi,A.tf,A.nf,A.ng,A.ql,A.qm,A.m_,A.m1,A.m0,A.m2,A.lR,A.lA,A.lB,A.lO,A.lP,A.lN,A.nd,A.p4,A.mO,A.n9,A.na,A.m4,A.m5,A.m6,A.m7,A.m8,A.m9,A.td,A.mk,A.mQ,A.nx,A.rS,A.r7,A.r6,A.nK,A.nM,A.pT,A.nB,A.nz,A.tc,A.nF,A.nH,A.tb,A.mK,A.oc,A.o4,A.mC,A.mD,A.t_,A.q0,A.q1,A.ly,A.lw,A.lK,A.lJ,A.lV,A.lW,A.mh,A.mv,A.mu,A.mw,A.mx,A.my,A.mt,A.mr,A.ms,A.mq,A.mo,A.mp,A.mG,A.mH,A.mI,A.mJ,A.mN,A.nn,A.nl,A.nm,A.nk,A.nj,A.ns,A.o_,A.o0,A.o1,A.oB,A.oC,A.oD,A.pl,A.pm,A.pH,A.pI,A.pJ,A.pK,A.pL,A.pC,A.pD,A.po,A.pE,A.pB,A.pu,A.pv,A.pw,A.px,A.py,A.pz,A.pA,A.pt,A.pp,A.pq,A.pr,A.ps,A.pG,A.pF,A.pO,A.pV,A.lH,A.qi,A.qh,A.qf,A.tk,A.qd,A.lC,A.lD,A.lE,A.qQ,A.rl,A.rm,A.rs,A.rt,A.ru,A.ro,A.rp,A.rg,A.rd,A.rV,A.rW,A.ts,A.tt,A.tB,A.tC,A.tD,A.tE,A.tG,A.tH,A.rY,A.rZ,A.t3])
q(A.iG,[A.qu,A.mn,A.o5,A.to,A.rc,A.te,A.n6,A.qI,A.oe,A.og,A.qP,A.q9,A.q8,A.tS,A.oq,A.q3,A.mV,A.pi,A.tW,A.tU,A.lT,A.lU,A.nL,A.nN,A.nC,A.ob,A.nS,A.pY,A.pZ,A.o2,A.o3,A.lG,A.qg,A.qe,A.rk,A.rr,A.tw])
r(A.bK,A.hD)
q(A.ai,[A.e8,A.d8,A.jo,A.k9,A.jW,A.kA,A.h1,A.it,A.cc,A.hu,A.k8,A.f9,A.iI])
r(A.fb,A.V)
r(A.dW,A.fb)
q(A.M,[A.a1,A.aa,A.aS,A.O,A.es,A.hK])
q(A.a1,[A.hp,A.Q,A.hi,A.kH])
r(A.dZ,A.cg)
q(A.bV,[A.ex,A.ff,A.fg])
q(A.ex,[A.ax,A.hS])
r(A.ae,A.ff)
r(A.hT,A.fg)
r(A.fk,A.f2)
r(A.dD,A.fk)
r(A.fK,A.dD)
q(A.eQ,[A.a4,A.cr])
q(A.d6,[A.fL,A.hU,A.i0])
r(A.bb,A.fL)
q(A.iF,[A.oL,A.qs,A.qt,A.qX,A.n3,A.qy,A.qD,A.qC,A.qA,A.qz,A.qG,A.qF,A.qE,A.qU,A.t4,A.r1,A.r0,A.rO,A.rH,A.rI,A.rN,A.rC,A.rE,A.rD,A.rM,A.rA,A.rB,A.rJ,A.rK,A.rL,A.rG,A.rF,A.rR,A.tg,A.p3,A.nJ,A.nA,A.nG,A.lx,A.lX,A.no,A.oF,A.pP,A.qR,A.qS,A.rv,A.rw,A.rx,A.ry,A.rn,A.rq,A.rh,A.ri,A.re,A.rf,A.rX,A.tu,A.tF,A.tI,A.tJ,A.tK,A.tL,A.tM,A.tN,A.tO,A.tv,A.tx,A.ty,A.tz,A.tA,A.t6])
r(A.h8,A.d8)
q(A.k5,[A.k2,A.eM])
q(A.a2,[A.c3,A.hH,A.kG])
r(A.h0,A.c3)
r(A.f3,A.dw)
q(A.h6,[A.jy,A.aV])
q(A.aV,[A.hM,A.hO])
r(A.hN,A.hM)
r(A.h4,A.hN)
r(A.hP,A.hO)
r(A.h5,A.hP)
q(A.h4,[A.h3,A.jz])
q(A.h5,[A.jA,A.jB,A.jC,A.jD,A.jE,A.ed,A.h7])
r(A.fj,A.kA)
r(A.hA,A.ku)
r(A.kT,A.i5)
r(A.hJ,A.hH)
r(A.c8,A.hU)
r(A.ht,A.i0)
q(A.dX,[A.ix,A.iW,A.jp])
q(A.iM,[A.md,A.o7,A.o6,A.qa])
r(A.jq,A.h1)
r(A.qN,A.qO)
r(A.kd,A.iW)
q(A.cc,[A.f5,A.jf])
r(A.kv,A.i1)
q(A.kz,[A.eg,A.e5,A.is,A.cI,A.eT,A.iz,A.iH,A.iS,A.ei,A.e1,A.c2,A.hh,A.cs,A.f6,A.eX,A.hC,A.hE,A.j5,A.fT,A.j7,A.j8,A.e4,A.fU,A.ek,A.da,A.eP,A.fh,A.iy,A.dU,A.iN,A.iP,A.aY,A.iw,A.c1,A.e3,A.e_,A.dq,A.fS,A.dp,A.ds,A.fG,A.hf,A.eh,A.bB,A.bf,A.jh,A.ep,A.c5,A.cm,A.cd,A.cn,A.cV,A.cU,A.iC,A.iD,A.dk,A.dT,A.cY,A.cp,A.cq,A.cZ,A.cX,A.d_,A.co,A.ce,A.b3,A.cA,A.dy,A.cB,A.bx,A.be,A.hk,A.bu,A.bR,A.bS,A.dE,A.cJ])
q(A.d5,[A.bv,A.bQ,A.cz,A.jH,A.cu])
r(A.pf,A.kU)
r(A.km,A.l7)
r(A.p2,A.qp)
r(A.p1,A.p2)
q(A.h9,[A.iL,A.mM,A.ja,A.nr,A.nZ,A.oE,A.pk,A.hl,A.pU])
q(A.qj,[A.kk,A.kM,A.bD,A.kh,A.kg,A.hw])
s(A.fb,A.cH)
s(A.i6,A.V)
s(A.hM,A.V)
s(A.hN,A.am)
s(A.hO,A.V)
s(A.hP,A.am)
s(A.fk,A.i_)
s(A.i0,A.l5)
s(A.kU,A.qJ)
s(A.l7,A.r3)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",y:"double",b0:"num",m:"String",n:"bool",al:"Null",E:"List",C:"Object",X:"Map",a7:"JSObject"},mangledNames:{},types:["~()","~(a7)","al(a7)","n(m)","d0()","n(y)","0&()","d0(bQ?)","n(ao)","@(@)","n(C?)","n(@)","~(n)","~(@)","n(bh)","~(~())","n(J)","al()","n(b7)","k(bL,bL)","n(aM)","n(bC)","n()","k()","~(C?,C?)","@()","n(k)","@(m)","al(@)","m?(m)","n(aX)","n(bL)","k(@,@)","n(T<m,E<m>>)","n(ce)","~(m,y)","m(C?)","k(aE<bw>,aE<bw>)","hg(bv)","d0(m{fallback:m?})","X<m,m>(X<m,m>,m)","bg?()","E<bg>()","eO()","y()","eN()","n(T<m,ay>)","ay(T<m,ay>)","ay(ay,ay)","0&(m,k?)","bP(aE<bw>)","k(aE<bs>,aE<bs>)","bP(aE<bs>)","ee(y,y,y,y)","H(H)","~(el)","el()","C?(C?)","bM<al>(T<m,m>)","al(@,cF)","n(E<m>)","k(m,m)","k(bz,bz)","n(a7)","a7()","k(+influence,light(y,bg),+influence,light(y,bg))","n(c1)","~(k,@)","~(C,cF)","eI(C?)","eH(C?)","eJ(C?)","al(C,cF)","ec(cz)","eK(C?)","cz(k,k,m?)","n(dB)","n(dH)","n(dG)","c(c)","k(+(y,y,y,y),+(y,y,y,y))","E<+(y,y,y,y)>()","n(bz)","k(k,aX)","n(cf)","n(cv)","bv(k,k,m?)","k(cC,cC)","n(ct)","T<m,m>(m,@)","n(bB)","n(bf)","k(k,+(bv,c4))","k(k)","T<k,@>(k,en)","T<k,@>(k,em)","n(T<@,@>)","T<m,m>(T<@,@>)","n?(C?)","~(k)","al(C?)","0^(o<0^>,C?)<C?>","~(@,@)","E<m>(E<m>)","bQ(k,k,m?)","X<m,C?>(d4)","m(b3)","n(b3)","n(be)","n(hs?)","n(cY)","n(cp)","n(cq)","n(cZ)","n(cX)","n(d_)","n(co)","n(cd)","n(cn)","n(cV)","n(cU)","m(cb)","k(cb,cb)","k(k,+(bQ,dd))","k(bC,bC)","k(c6,c6)","X<m,@>(bC)","n(bS)","n(bR)","n(bu)","m(ao)","k(a8,a8)","al(~())","~(be)","~(dj)","~(di)","~(dr)","~(eR)","n(f7)","~(bx)","~(bB,bf)","@(@,m)","cu(k,k,m?)","fd()","cv(C?)","cf(C?)","ct(C?)","~(b0)","~(m)","n(cm)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.ax&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.hS&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ae&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.hT&&A.DA(a,b.a)}}
A.B_(v.typeUniverse,JSON.parse('{"d1":"dv","jI":"dv","dC":"dv","E1":"dw","q":{"E":["1"],"M":["1"],"a7":[],"o":["1"]},"jl":{"n":[],"ac":[]},"fZ":{"al":[],"ac":[]},"h_":{"a7":[]},"dv":{"a7":[]},"jj":{"hj":[]},"nX":{"q":["1"],"E":["1"],"M":["1"],"a7":[],"o":["1"]},"dS":{"ad":["1"]},"e7":{"y":[],"b0":[],"aR":["b0"]},"fY":{"y":[],"k":[],"b0":[],"aR":["b0"],"ac":[]},"jm":{"y":[],"b0":[],"aR":["b0"],"ac":[]},"du":{"m":[],"aR":["m"],"oz":[],"ac":[]},"dF":{"o":["2"]},"fI":{"ad":["2"]},"dV":{"dF":["1","2"],"o":["2"],"o.E":"2"},"hF":{"dV":["1","2"],"dF":["1","2"],"M":["2"],"o":["2"],"o.E":"2"},"hD":{"V":["2"],"E":["2"],"dF":["1","2"],"M":["2"],"o":["2"]},"bK":{"hD":["1","2"],"V":["2"],"E":["2"],"dF":["1","2"],"M":["2"],"o":["2"],"o.E":"2","V.E":"2"},"e8":{"ai":[]},"dW":{"V":["k"],"cH":["k"],"E":["k"],"M":["k"],"o":["k"],"V.E":"k","cH.E":"k"},"M":{"o":["1"]},"a1":{"M":["1"],"o":["1"]},"hp":{"a1":["1"],"M":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"aU":{"ad":["1"]},"cg":{"o":["2"],"o.E":"2"},"dZ":{"cg":["1","2"],"M":["2"],"o":["2"],"o.E":"2"},"ea":{"ad":["2"]},"Q":{"a1":["2"],"M":["2"],"o":["2"],"a1.E":"2","o.E":"2"},"R":{"o":["1"],"o.E":"1"},"L":{"ad":["1"]},"fQ":{"o":["2"],"o.E":"2"},"fR":{"ad":["2"]},"fO":{"ad":["1"]},"cj":{"o":["1"],"o.E":"1"},"hy":{"ad":["1"]},"fb":{"V":["1"],"cH":["1"],"E":["1"],"M":["1"],"o":["1"]},"hi":{"a1":["1"],"M":["1"],"o":["1"],"a1.E":"1","o.E":"1"},"ax":{"ex":[],"bV":[]},"hS":{"ex":[],"bV":[]},"ae":{"ff":[],"bV":[]},"hT":{"fg":[],"bV":[]},"fK":{"dD":["1","2"],"fk":["1","2"],"f2":["1","2"],"i_":["1","2"],"X":["1","2"]},"eQ":{"X":["1","2"]},"a4":{"eQ":["1","2"],"X":["1","2"]},"et":{"o":["1"],"o.E":"1"},"eu":{"ad":["1"]},"cr":{"eQ":["1","2"],"X":["1","2"]},"fL":{"d6":["1"],"dA":["1"],"M":["1"],"o":["1"]},"bb":{"fL":["1"],"d6":["1"],"dA":["1"],"M":["1"],"o":["1"]},"h8":{"d8":[],"ai":[]},"jo":{"ai":[]},"k9":{"ai":[]},"hV":{"cF":[]},"dl":{"e2":[]},"iF":{"e2":[]},"iG":{"e2":[]},"k5":{"e2":[]},"k2":{"e2":[]},"eM":{"e2":[]},"jW":{"ai":[]},"c3":{"a2":["1","2"],"u7":["1","2"],"X":["1","2"],"a2.K":"1","a2.V":"2"},"aa":{"M":["1"],"o":["1"],"o.E":"1"},"cx":{"ad":["1"]},"aS":{"M":["1"],"o":["1"],"o.E":"1"},"as":{"ad":["1"]},"O":{"M":["T<1,2>"],"o":["T<1,2>"],"o.E":"T<1,2>"},"e9":{"ad":["T<1,2>"]},"h0":{"c3":["1","2"],"a2":["1","2"],"u7":["1","2"],"X":["1","2"],"a2.K":"1","a2.V":"2"},"ex":{"bV":[]},"ff":{"bV":[]},"fg":{"bV":[]},"jn":{"oz":[]},"f3":{"dw":[],"a7":[],"ac":[]},"ed":{"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"],"ac":[],"V.E":"k","am.E":"k"},"dw":{"a7":[],"ac":[]},"h6":{"a7":[]},"jy":{"a7":[],"ac":[]},"aV":{"bN":["1"],"a7":[]},"h4":{"V":["y"],"aV":["y"],"E":["y"],"bN":["y"],"M":["y"],"a7":[],"o":["y"],"am":["y"]},"h5":{"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"]},"h3":{"mW":[],"V":["y"],"aV":["y"],"E":["y"],"bN":["y"],"M":["y"],"a7":[],"o":["y"],"am":["y"],"ac":[],"V.E":"y","am.E":"y"},"jz":{"V":["y"],"aV":["y"],"E":["y"],"bN":["y"],"M":["y"],"a7":[],"o":["y"],"am":["y"],"ac":[],"V.E":"y","am.E":"y"},"jA":{"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"],"ac":[],"V.E":"k","am.E":"k"},"jB":{"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"],"ac":[],"V.E":"k","am.E":"k"},"jC":{"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"],"ac":[],"V.E":"k","am.E":"k"},"jD":{"un":[],"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"],"ac":[],"V.E":"k","am.E":"k"},"jE":{"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"],"ac":[],"V.E":"k","am.E":"k"},"h7":{"hs":[],"V":["k"],"aV":["k"],"E":["k"],"bN":["k"],"M":["k"],"a7":[],"o":["k"],"am":["k"],"ac":[],"V.E":"k","am.E":"k"},"kA":{"ai":[]},"fj":{"d8":[],"ai":[]},"ck":{"ad":["1"]},"cL":{"o":["1"],"o.E":"1"},"aQ":{"ai":[]},"hA":{"ku":["1"]},"aq":{"bM":["1"]},"i5":{"wq":[]},"kT":{"i5":[],"wq":[]},"hH":{"a2":["1","2"],"X":["1","2"]},"hJ":{"hH":["1","2"],"a2":["1","2"],"X":["1","2"],"a2.K":"1","a2.V":"2"},"es":{"M":["1"],"o":["1"],"o.E":"1"},"hI":{"ad":["1"]},"c8":{"d6":["1"],"vV":["1"],"dA":["1"],"M":["1"],"o":["1"]},"ev":{"ad":["1"]},"V":{"E":["1"],"M":["1"],"o":["1"]},"a2":{"X":["1","2"]},"hK":{"M":["2"],"o":["2"],"o.E":"2"},"hL":{"ad":["2"]},"f2":{"X":["1","2"]},"dD":{"fk":["1","2"],"f2":["1","2"],"i_":["1","2"],"X":["1","2"]},"d6":{"dA":["1"],"M":["1"],"o":["1"]},"hU":{"d6":["1"],"dA":["1"],"M":["1"],"o":["1"]},"ht":{"d6":["1"],"l5":["1"],"dA":["1"],"M":["1"],"o":["1"]},"kG":{"a2":["m","@"],"X":["m","@"],"a2.K":"m","a2.V":"@"},"kH":{"a1":["m"],"M":["m"],"o":["m"],"a1.E":"m","o.E":"m"},"ix":{"dX":["E<k>","m"]},"iW":{"dX":["m","E<k>"]},"h1":{"ai":[]},"jq":{"ai":[]},"jp":{"dX":["C?","m"]},"kd":{"dX":["m","E<k>"]},"dY":{"aR":["dY"]},"y":{"b0":[],"aR":["b0"]},"dn":{"aR":["dn"]},"k":{"b0":[],"aR":["b0"]},"E":{"M":["1"],"o":["1"]},"b0":{"aR":["b0"]},"dA":{"M":["1"],"o":["1"]},"m":{"aR":["m"],"oz":[]},"kz":{"D":[]},"it":{"ai":[]},"d8":{"ai":[]},"cc":{"ai":[]},"f5":{"ai":[]},"jf":{"ai":[]},"hu":{"ai":[]},"k8":{"ai":[]},"f9":{"ai":[]},"iI":{"ai":[]},"jG":{"ai":[]},"hn":{"ai":[]},"l2":{"cF":[]},"b5":{"Ae":[]},"i1":{"kb":[]},"kX":{"kb":[]},"kv":{"kb":[]},"kF":{"uf":[]},"fe":{"uf":[]},"eg":{"D":[]},"bv":{"d5":[]},"bQ":{"d5":[]},"cz":{"d5":[]},"cu":{"d5":[]},"jH":{"d5":[]},"e5":{"D":[]},"is":{"D":[]},"cI":{"D":[]},"eT":{"D":[]},"iz":{"D":[]},"iH":{"D":[]},"iS":{"D":[]},"ei":{"D":[]},"e1":{"D":[]},"c2":{"D":[]},"hh":{"D":[]},"cs":{"D":[]},"f6":{"D":[]},"he":{"A3":[]},"kE":{"bP":[]},"l3":{"bP":[]},"kQ":{"A2":[]},"kB":{"zk":[]},"bw":{"aR":["bw"]},"bs":{"aR":["bs"]},"eX":{"D":[]},"hC":{"D":[]},"fH":{"ag":[]},"ks":{"a8":[]},"iA":{"ag":[]},"kt":{"a8":[]},"iQ":{"ag":[]},"kw":{"a8":[]},"hE":{"D":[]},"fM":{"ag":[]},"kx":{"a8":[]},"iU":{"ag":[]},"ky":{"a8":[]},"j9":{"ag":[]},"kD":{"a8":[]},"jx":{"ag":[]},"kK":{"a8":[]},"iB":{"A1":[]},"hb":{"ag":[]},"kR":{"a8":[]},"jQ":{"ag":[]},"kS":{"a8":[]},"jY":{"ag":[]},"kV":{"a8":[]},"jZ":{"ag":[]},"kW":{"a8":[]},"k1":{"ag":[]},"l_":{"a8":[]},"k0":{"ag":[]},"kZ":{"a8":[]},"kf":{"ag":[]},"l6":{"a8":[]},"ko":{"ag":[]},"l9":{"a8":[]},"j5":{"D":[]},"fT":{"D":[]},"j7":{"D":[]},"j8":{"D":[]},"e4":{"D":[]},"fU":{"D":[]},"ek":{"D":[]},"da":{"D":[]},"eP":{"D":[]},"iR":{"z3":[]},"fh":{"D":[]},"aY":{"D":[]},"iy":{"D":[]},"dU":{"D":[]},"iN":{"D":[]},"iP":{"D":[]},"de":{"d0":[]},"km":{"zn":[]},"iw":{"D":[]},"c1":{"D":[]},"e3":{"D":[]},"e_":{"D":[]},"dq":{"D":[]},"dp":{"D":[]},"fS":{"D":[]},"ds":{"D":[]},"fG":{"D":[]},"hf":{"D":[]},"eh":{"D":[]},"bB":{"D":[]},"bf":{"D":[]},"jh":{"D":[]},"ep":{"D":[]},"c5":{"D":[]},"cm":{"D":[]},"cd":{"D":[]},"cn":{"D":[]},"cV":{"D":[]},"cU":{"D":[]},"iC":{"D":[]},"iD":{"D":[]},"dT":{"D":[]},"dk":{"D":[]},"cY":{"D":[]},"cp":{"D":[]},"cq":{"D":[]},"cZ":{"D":[]},"cX":{"D":[]},"d_":{"D":[]},"co":{"D":[]},"ce":{"D":[]},"b3":{"D":[]},"cA":{"D":[]},"dy":{"D":[]},"cB":{"D":[]},"bx":{"D":[]},"be":{"D":[]},"hk":{"D":[]},"bu":{"D":[]},"bR":{"D":[]},"bS":{"D":[]},"dE":{"D":[]},"cJ":{"D":[]},"hR":{"uh":[]},"fc":{"uh":[]},"zw":{"E":["k"],"M":["k"],"o":["k"]},"hs":{"E":["k"],"M":["k"],"o":["k"]},"Aj":{"E":["k"],"M":["k"],"o":["k"]},"zu":{"E":["k"],"M":["k"],"o":["k"]},"un":{"E":["k"],"M":["k"],"o":["k"]},"zv":{"E":["k"],"M":["k"],"o":["k"]},"Ai":{"E":["k"],"M":["k"],"o":["k"]},"mW":{"E":["y"],"M":["y"],"o":["y"]},"zj":{"E":["y"],"M":["y"],"o":["y"]}}'))
A.AZ(v.typeUniverse,JSON.parse('{"fb":1,"i6":2,"aV":1,"hU":1,"i0":1,"iM":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",a:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a_
return{g8:s("cm"),lC:s("fF"),ot:s("cb"),v:s("aQ"),f5:s("iv"),oA:s("cU"),cS:s("cn"),cK:s("cd"),f1:s("cV"),gE:s("eH"),fS:s("eI"),d2:s("eJ"),lJ:s("eK"),dP:s("bs"),kp:s("eN"),gS:s("dW"),bP:s("aR<@>"),e3:s("fJ"),p:s("a4<m,m>"),I:s("a4<m,k>"),O:s("bb<m>"),ml:s("dY"),lD:s("bu"),jS:s("dn"),gt:s("M<@>"),no:s("c1"),T:s("bL"),aT:s("D"),W:s("ai"),hZ:s("b1"),B:s("mW"),m9:s("ay"),gY:s("e2"),mj:s("bM<al>"),iv:s("cX"),bW:s("co"),hP:s("cY"),jp:s("cZ"),mV:s("cp"),iZ:s("d_"),ce:s("cq"),iP:s("cr<bx,m>"),_:s("d0"),jI:s("ce"),bU:s("ds"),mm:s("ct"),lv:s("je<C>"),hL:s("cu"),p9:s("cv"),gB:s("cf"),dp:s("o<fJ>"),bq:s("o<m>"),id:s("o<y>"),e7:s("o<@>"),fm:s("o<k>"),od:s("q<cb>"),ag:s("q<iV>"),hS:s("q<dm>"),r:s("q<bL>"),bp:s("q<iZ>"),ph:s("q<b1>"),iw:s("q<bM<~>>"),mc:s("q<j2>"),l2:s("q<d0>"),aW:s("q<b2>"),iG:s("q<fW>"),dL:s("q<eY>"),oX:s("q<E0<C>>"),og:s("q<e6>"),jj:s("q<cu>"),d:s("q<a7>"),b1:s("q<jr>"),cs:s("q<bc>"),cj:s("q<T<m,m>>"),ic:s("q<X<m,C>>"),hq:s("q<X<m,m>>"),bV:s("q<X<m,@>>"),kS:s("q<jt>"),mn:s("q<eb>"),dg:s("q<bv>"),hJ:s("q<ao>"),eY:s("q<d4>"),jc:s("q<by>"),de:s("q<ee>"),bz:s("q<cC>"),dQ:s("q<jK>"),aN:s("q<bz>"),bM:s("q<+(m,E<bz>)>"),gf:s("q<+influence,light(y,bg)>"),fR:s("q<+(k,m)>"),a3:s("q<+(y,y,y,y)>"),o5:s("q<ag>"),u:s("q<a8>"),oZ:s("q<he>"),C:s("q<J>"),c8:s("q<bA>"),bH:s("q<bP>"),kl:s("q<aX>"),e_:s("q<cE>"),b2:s("q<f8>"),ao:s("q<aE<bs>>"),mX:s("q<aE<bw>>"),D:s("q<bg>"),jn:s("q<dB>"),s:s("q<m>"),aA:s("q<k4>"),k:s("q<H>"),h:s("q<c>"),cF:s("q<hx>"),bl:s("q<db>"),ah:s("q<c6>"),cJ:s("q<b7>"),dA:s("q<dH>"),a9:s("q<dG>"),is:s("q<kO>"),jU:s("q<kP>"),dz:s("q<dI<ec>>"),jk:s("q<dI<c4>>"),n_:s("q<dI<bA>>"),mQ:s("q<dI<dd>>"),eP:s("q<fi>"),df:s("q<n>"),n:s("q<y>"),dG:s("q<@>"),t:s("q<k>"),kC:s("q<a7?>"),dM:s("q<C?>"),g2:s("q<b0>"),w:s("fZ"),m:s("a7"),d4:s("a7()"),dY:s("d1"),dX:s("bN<@>"),bY:s("E<bL>"),b:s("E<b2>"),l_:s("E<X<m,m>>"),Q:s("E<ao>"),b3:s("E<cC>"),fB:s("E<bz>"),jz:s("E<+(k,m)>"),ge:s("E<+(y,y,y,y)>"),io:s("E<cE>"),a:s("E<m>"),iD:s("E<hx>"),ee:s("E<db>"),eU:s("E<c6>"),cu:s("E<hG>"),j:s("E<@>"),L:s("E<k>"),ia:s("E<C?>"),mK:s("h2"),iO:s("T<m,ay>"),gc:s("T<m,m>"),d7:s("T<@,@>"),iI:s("T<k,@>"),cW:s("T<m,E<m>>"),f7:s("X<m,d0>"),iE:s("X<m,ao>"),G:s("X<m,m>"),oQ:s("X<m,n>"),P:s("X<m,@>"),f:s("X<@,@>"),d8:s("X<k,em>"),c_:s("X<k,en>"),gz:s("X<m,E<+(y,y,y,y)>>"),i3:s("X<m,E<m>>"),lb:s("X<m,C?>"),kz:s("X<bS,E<c6>>"),iu:s("X<k,X<m,m>>"),dD:s("Q<m,m?>"),fP:s("cz"),l0:s("bv"),eb:s("f3"),mR:s("ed"),c:s("al"),K:s("C"),nL:s("bw"),A:s("ao"),lf:s("d4"),e0:s("b3"),f0:s("cC"),U:s("bz"),ku:s("ha"),lZ:s("E2"),aK:s("+()"),o7:s("+(bv,c4)"),p3:s("+(bQ,dd)"),aL:s("+(y,y)"),jX:s("+influence,light(y,bg)"),oJ:s("+(y,y,y,y)"),ks:s("a8"),mo:s("cD<cu,bA>"),kk:s("cD<cz,ec>"),ll:s("cD<bv,c4>"),ox:s("cD<bQ,dd>"),n4:s("J"),ob:s("bA"),Y:s("bP"),J:s("aX"),k8:s("cE"),R:s("dA<m>"),nO:s("dA<k>"),op:s("be"),b9:s("aM"),oB:s("bf"),gC:s("bB"),ad:s("f8"),e:s("aE<bs>"),q:s("aE<bw>"),l:s("cF"),fO:s("dB"),dB:s("aY"),N:s("m"),lu:s("bQ"),aJ:s("ac"),do:s("d8"),cx:s("dC"),oP:s("dD<m,m>"),mL:s("ka"),jJ:s("kb"),fQ:s("H"),mz:s("c"),gm:s("bh"),g:s("bC"),nq:s("bR"),kM:s("bS"),bR:s("em"),ey:s("en"),mv:s("db"),kX:s("c6"),cq:s("bD"),bn:s("R<bu>"),ns:s("R<c1>"),hr:s("R<bf>"),am:s("R<bB>"),nn:s("R<m>"),kh:s("R<bh>"),cB:s("R<bR>"),na:s("R<bS>"),nU:s("L<be>"),pl:s("L<aM>"),mW:s("L<bh>"),lS:s("cj<m>"),E:s("b7"),fH:s("hG"),j_:s("aq<@>"),mp:s("hJ<C?,C?>"),a1:s("fd"),j8:s("kL"),fg:s("dH"),at:s("dG"),ln:s("kM"),fw:s("kN"),bS:s("hQ"),h6:s("kY"),hX:s("l0"),fJ:s("cL<bP>"),V:s("i3"),fL:s("i4"),y:s("n"),al:s("n()"),hg:s("n(bu)"),gl:s("n(c1)"),iW:s("n(C)"),lt:s("n(be)"),ib:s("n(aM)"),aZ:s("n(bf)"),gw:s("n(bB)"),dC:s("n(m)"),iV:s("n(bh)"),bQ:s("n(bR)"),nw:s("n(bS)"),i:s("y"),z:s("@"),mY:s("@()"),mq:s("@(C)"),ng:s("@(C,cF)"),S:s("k"),gK:s("bM<al>?"),hH:s("q<C?>?"),mU:s("a7?"),lH:s("E<@>?"),kN:s("X<m,E<m>>?"),X:s("C?"),x:s("m?"),ej:s("m?(m)"),nh:s("hs?"),F:s("eq<@,@>?"),nF:s("kI?"),fU:s("n?"),hK:s("n(f7)?"),dE:s("y?"),aV:s("k?"),jh:s("b0?"),Z:s("~()?"),km:s("~(di)?"),kn:s("~(dj)?"),dO:s("~(eR)?"),ft:s("~(dr)?"),mP:s("~(bx)?"),m5:s("~(be)?"),as:s("~(bB,bf)?"),ov:s("~(m)?"),hm:s("~(m,y)?"),cz:s("~(n)?"),bZ:s("~(k)?"),o:s("b0"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.fG=J.ji.prototype
B.a=J.q.prototype
B.c=J.fY.prototype
B.d=J.e7.prototype
B.b=J.du.prototype
B.fH=J.d1.prototype
B.fI=J.h_.prototype
B.q=A.h3.prototype
B.ct=A.h7.prototype
B.cF=J.jI.prototype
B.bf=J.dC.prototype
B.ac=new A.di(null,null,null,null,null)
B.kR=new A.is(0,"opaque")
B.d6=new A.iw(4,"ambience")
B.bn=new A.cd(3,"mono")
B.aA=new A.cV(0,"full")
B.bm=new A.cd(0,"auto")
B.bl=new A.cn(1,"standard")
B.bk=new A.cU(0,"defaultMix")
B.aB=new A.dj(B.bm,B.bl,B.aA,B.bk)
B.dd=new A.fG("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.de=new A.fG("webgl2 unavailable",0,"webglUnavailable")
B.U=new A.hf(1,"pixeldart")
B.df=new A.eL(B.U,!1,!0,!1,null,!1,null,!1,null)
B.di=new A.dk(1,"capturing")
B.dg=new A.cW(B.di,null)
B.bq=new A.dk(3,"rejected")
B.aC=new A.cW(B.bq,null)
B.br=new A.dk(4,"applied")
B.bo=new A.cW(B.br,null)
B.bs=new A.dk(5,"cancelled")
B.dh=new A.cW(B.bs,null)
B.bp=new A.dk(2,"conflict")
B.ad=new A.iy(0,"add")
B.dm=new A.dU(0,"zero")
B.Z=new A.dU(1,"one")
B.a_=new A.iz(0,"alpha")
B.dq=new A.iC(0,"button")
B.kS=new A.iD(0,"normal")
B.bt=new A.fF()
B.bu=new A.ma()
B.aD=new A.mb()
B.kT=new A.md()
B.dr=new A.ix()
B.bv=new A.mj()
B.dx=new A.fO(A.a_("fO<0&>"))
B.bw=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.dy=function() {
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
B.dD=function(getTagFallback) {
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
B.dz=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.dC=function(hooks) {
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
B.dB=function(hooks) {
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
B.dA=function(hooks) {
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
B.bx=function(hooks) { return hooks; }

B.k=new A.jp()
B.kU=new A.o9()
B.dE=new A.C()
B.dF=new A.jG()
B.kV=new A.oH()
B.dG=new A.oI()
B.dH=new A.cE()
B.a7=new A.c5(1,"gradeLUT")
B.dI=new A.cE()
B.dJ=new A.pc()
B.dK=new A.pe()
B.f=new A.pj()
B.by=new A.kd()
B.ke=new A.cI(0,"position")
B.kj=new A.bh(B.ke,0,3)
B.cW=new A.cI(1,"normal")
B.kk=new A.bh(B.cW,3,3)
B.kf=new A.cI(2,"color")
B.kl=new A.bh(B.kf,6,4)
B.kg=new A.cI(4,"alpha")
B.km=new A.bh(B.kg,10,1)
B.kh=new A.cI(5,"uv0")
B.kn=new A.bh(B.kh,11,2)
B.ki=new A.cI(8,"legacyMaterialEffect")
B.ko=new A.bh(B.ki,13,1)
B.Q=s([B.kj,B.kk,B.kl,B.km,B.kn,B.ko],A.a_("q<bh>"))
B.a0=new A.qb()
B.bz=new A.kF()
B.v=new A.kT()
B.ae=new A.l2()
B.a1=new A.eP(0,"colorOnly")
B.bA=new A.eP(1,"colorAndDepth")
B.aE=new A.eP(2,"depthOnly")
B.aF=new A.iH(1,"srgb")
B.af=new A.iN(1,"back")
B.ag=new A.iP(0,"less")
B.ah=new A.bu(0,"open")
B.bB=new A.bu(1,"chain")
B.bC=new A.bu(2,"throughDoor")
B.bD=new A.bu(3,"letterbox")
B.a2=new A.bu(4,"ignore")
B.N=new A.eT(0,"opaque")
B.dL=new A.eT(1,"masked")
B.aG=new A.eT(2,"blended")
B.dM=new A.eU(!1,B.ag,!1,!0,B.Z,B.Z,B.ad,!1,B.af,!0,!1,!0,!0,!0,!0,!1)
B.dN=new A.eU(!0,B.ag,!1,!0,B.Z,B.Z,B.ad,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.dn=new A.dU(2,"srcAlpha")
B.dp=new A.dU(3,"oneMinusSrcAlpha")
B.dO=new A.eU(!0,B.ag,!1,!0,B.dn,B.dp,B.ad,!0,B.af,!0,!1,!0,!0,!0,!0,!1)
B.dP=new A.dn(0)
B.dQ=new A.dn(24e5)
B.bE=new A.c1(0,"compliance")
B.dR=new A.eV(B.bE)
B.bF=new A.c1(1,"rupture")
B.dS=new A.eV(B.bF)
B.bG=new A.c1(2,"synchronisation")
B.dT=new A.eV(B.bG)
B.bH=new A.e_(0,"front")
B.dU=new A.e_(1,"rearService")
B.dV=new A.e_(2,"sideBoundary")
B.dW=new A.e_(3,"roofline")
B.l=new A.dp(0,"north")
B.B=new A.dp(1,"east")
B.m=new A.dp(2,"south")
B.O=new A.dp(3,"west")
B.ai=new A.fS(0,"ground")
B.aj=new A.fS(1,"first")
B.dX=new A.dq(0,"mantle")
B.dY=new A.dq(1,"portal")
B.e_=new A.dq(3,"inventory")
B.e0=new A.dq(4,"none")
B.e1=new A.e0(B.e0,null)
B.dZ=new A.dq(2,"window")
B.e2=new A.e0(B.dZ,"the shutter")
B.e3=new A.F("saved mantle history is malformed",null,null)
B.e4=new A.F("rupture elapsed time is malformed",null,null)
B.e5=new A.F("presentation keys must be strings",null,null)
B.e6=new A.F("unsupported accessibility profile",null,null)
B.e7=new A.F("inventory inspections must be an object",null,null)
B.bI=new A.F("saved mantle state is malformed",null,null)
B.e8=new A.F("inactive rupture has elapsed time",null,null)
B.e9=new A.F("control sensitivity is outside 0.1\u20133.0",null,null)
B.ea=new A.F("invalid action bindings",null,null)
B.eb=new A.F("listener room is empty",null,null)
B.ec=new A.F("control bindings conflict",null,null)
B.ed=new A.F("saved difficulty state is malformed",null,null)
B.ee=new A.F("saved house drift state is malformed",null,null)
B.ef=new A.F("saved sleep record is malformed",null,null)
B.eg=new A.F("UI scale must be between 0.8 and 2.0",null,null)
B.eh=new A.F("unsupported settings store",null,null)
B.ei=new A.F("settings values must be an object",null,null)
B.ej=new A.F("saved day-loop sleepHistory must be a list",null,null)
B.ek=new A.F("invalid anisotropy limit",null,null)
B.el=new A.F("audio event position is not finite",null,null)
B.em=new A.F("event sequence must be non-negative",null,null)
B.en=new A.F("inventory inspection counts are invalid",null,null)
B.eo=new A.F("modelScale must be positive and finite",null,null)
B.ep=new A.F("listener position is not finite",null,null)
B.eq=new A.F("invalid action ID",null,null)
B.er=new A.F("saved window state is malformed",null,null)
B.es=new A.F("unsupported graphics preset",null,null)
B.et=new A.F("save run and meta must be objects",null,null)
B.eu=new A.F("saved house state is malformed",null,null)
B.ev=new A.F("saved sleep record must be an object",null,null)
B.ew=new A.F("sound cue must be a non-empty string",null,null)
B.ex=new A.F("saved session run is malformed",null,null)
B.ey=new A.F("save map keys must be strings",null,null)
B.ez=new A.F("unsupported graphics profile",null,null)
B.eA=new A.F("unsupported audio options",null,null)
B.eB=new A.F("transform.scale must be positive",null,null)
B.eC=new A.F("Escape is reserved for pause navigation",null,null)
B.eD=new A.F("saved day-loop state is malformed",null,null)
B.eE=new A.F("rupture extinguished mantle is unknown",null,null)
B.bJ=new A.F("unsupported controls profile",null,null)
B.bK=new A.F("saved portal state is malformed",null,null)
B.eF=new A.F("acoustic portal profile is not finite",null,null)
B.eG=new A.F("saved house state does not match this house",null,null)
B.eH=new A.F("presentation snapshot contains a non-finite number",null,null)
B.eI=new A.F("save contains a non-finite number",null,null)
B.eJ=new A.F("unsupported graphics store",null,null)
B.eK=new A.F("brush component needs an id and label",null,null)
B.eL=new A.F("text.json root must be an object",null,null)
B.eM=new A.F("event kind is empty",null,null)
B.eN=new A.F("invalid control binding token",null,null)
B.eO=new A.F("unsupported settings profile",null,null)
B.eP=new A.F("saved session clock is malformed",null,null)
B.eQ=new A.F("rupture mantle IDs are malformed",null,null)
B.eR=new A.F("invalid screen-reader verbosity",null,null)
B.eS=new A.F("saved sleep record has an unknown enum",null,null)
B.eT=new A.F("audio cue variants are empty",null,null)
B.eU=new A.F("save root must be an object",null,null)
B.eV=new A.F("audio event identity is empty",null,null)
B.eW=new A.F("render capabilities contain invalid limits",null,null)
B.eX=new A.F("saved house overrides are malformed",null,null)
B.P=new A.d2(0,0,0)
B.c3=new A.d2(1,1,1)
B.hq=s([],t.dQ)
B.aP=s([],t.D)
B.eY=new A.j1(B.P,B.P,0,1,B.c3,0,null,B.hq,B.aP)
B.eZ=new A.ay(0,0,0)
B.f_=new A.e1(0,"idle")
B.ak=new A.e1(1,"active")
B.f0=new A.e1(2,"ended")
B.f1=new A.e1(3,"aborted")
B.bL=new A.eX(0,"outside")
B.f2=new A.eX(1,"intersects")
B.f3=new A.eX(2,"inside")
B.f4=new A.e3(0,"timeAdvanced")
B.f5=new A.e3(1,"dayEndReached")
B.f6=new A.e3(4,"slept")
B.f7=new A.e3(5,"complianceFloorTripped")
B.bM=new A.cX(0,"important")
B.bN=new A.co(0,"pauseAndMute")
B.bO=new A.cY(0,"press")
B.bP=new A.cZ(1,"spacious")
B.bQ=new A.cp(1,"standard")
B.bR=new A.d_(0,"toast")
B.bS=new A.cq(1,"readable")
B.fi=new A.fT(0,"vertex")
B.bT=new A.fT(1,"indices")
B.bU=new A.j5(0,"staticDraw")
B.h=new A.fU(0,"ready")
B.a3=new A.fU(1,"lost")
B.fj=new A.e4(0,"color")
B.bV=new A.e4(1,"colorAndGlow")
B.fk=new A.e4(2,"colorDepthGlow")
B.aH=new A.e4(3,"depthOnly")
B.al=new A.j7(1,"linear")
B.bW=new A.j8(0,"clampToEdge")
B.fl=new A.j6(1,1,1,!1,B.al,B.al,B.bW,1)
B.fm=new A.cs(0,"beforeShadow")
B.fn=new A.cs(2,"beforeDepth")
B.bX=new A.cs(3,"afterDepth")
B.bY=new A.cs(4,"beforeWorld")
B.fo=new A.cs(5,"afterWorld")
B.H=new A.cs(6,"afterResolve")
B.fp=new A.cs(9,"beforePresent")
B.bZ=new A.c2(0,"readBeforeWrite")
B.fq=new A.c2(1,"duplicateWriter")
B.fr=new A.c2(2,"sampledMultisampledAttachment")
B.aI=new A.c2(3,"invalidResolve")
B.fs=new A.c2(4,"formatOrSizeMismatch")
B.ft=new A.c2(5,"unversionedReadWrite")
B.fu=new A.c2(6,"invalidHistoryRead")
B.fv=new A.c2(7,"dependencyCycle")
B.fw=new A.c2(8,"missingCapability")
B.c_=new A.ce(0,"high")
B.aJ=new A.ce(1,"standard")
B.aK=new A.dr(1,B.aJ,"auto",!1,"display","off","high")
B.am=new A.ds(0,"player")
B.aL=new A.ds(1,"inserted")
B.c0=new A.ds(2,"warden")
B.c1=new A.e5(0,"wrongKind")
B.c2=new A.e5(1,"staleGeneration")
B.fz=new A.e5(2,"doubleRelease")
B.an=new A.e5(3,"releasedResource")
B.fC=new A.eY("kitchen-range","settle")
B.fD=new A.eY("cellar-drain","drip")
B.fE=new A.eY("bathroom-cistern","settle")
B.fF=new A.jh(1,"visitor")
B.fJ=new A.o6(null)
B.fK=new A.o7(null)
B.fL=new A.d2(0.34,0.39,0.5)
B.fM=new A.d2(0.012,0.016,0.028)
B.fN=new A.d2(0.008,0.012,0.024)
B.c4=s([0,2,2,3],t.t)
B.fO=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.f8=new A.cX(1,"always")
B.c5=s([B.bM,B.f8],A.a_("q<cX>"))
B.ds=new A.dm()
B.dt=new A.dm()
B.du=new A.dm()
B.dv=new A.dm()
B.dw=new A.dm()
B.fP=s([B.ds,B.dt,B.du,B.dv,B.dw],t.hS)
B.fQ=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.E=new A.be(0,"audio")
B.L=new A.hk(0,"level")
B.jE=new A.aM("master","Master",B.E,B.L,1,0,1,"audio")
B.jJ=new A.aM("voice","Visitor voice",B.E,B.L,1,0,1,"audio")
B.jA=new A.aM("effects","Effects",B.E,B.L,1,0,1,"audio")
B.jB=new A.aM("ambience","House ambience",B.E,B.L,1,0,1,"audio")
B.jF=new A.aM("music","Music",B.E,B.L,1,0,1,"audio")
B.ar=new A.be(1,"display")
B.jI=new A.aM("brightness","Display brightness",B.ar,B.L,1,0.6,1.4,"display")
B.a8=new A.hk(1,"toggle")
B.jD=new A.aM("muted","Mute house audio",B.E,B.a8,!1,null,null,"audio")
B.W=new A.be(2,"accessibility")
B.jG=new A.aM("mono","Mono-compatible mix",B.W,B.a8,!1,null,null,"audio")
B.jC=new A.aM("high-contrast","High-contrast interface",B.W,B.a8,!1,null,null,"display")
B.jH=new A.aM("strong-highlights","Strong focus highlights",B.W,B.a8,!1,null,null,"display")
B.C=s([B.jE,B.jJ,B.jA,B.jB,B.jF,B.jI,B.jD,B.jG,B.jC,B.jH],A.a_("q<aM>"))
B.w=s(["who","verb","object","place","time"],t.s)
B.d7=new A.cU(1,"strong")
B.aM=s([B.bk,B.d7],A.a_("q<cU>"))
B.dj=new A.dT(0,"swap")
B.dk=new A.dT(1,"replace")
B.dl=new A.dT(2,"cancel")
B.fR=s([B.dj,B.dk,B.dl],A.a_("q<dT>"))
B.fT=s([2,5,9,12,16,19],t.t)
B.f9=new A.co(1,"pauseOnly")
B.fa=new A.co(2,"continuePlayback")
B.c6=s([B.bN,B.f9,B.fa],A.a_("q<co>"))
B.fU=s(["uQuantizationBits","uDitherStrength"],t.s)
B.fW=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.fX=s([B.ah,B.bB,B.bC,B.bD,B.a2],A.a_("q<bu>"))
B.fY=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.fZ=s(["30","60","display"],t.s)
B.h_=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap"],t.s)
B.ab=new A.bS(0,"full")
B.bg=new A.bS(1,"compressed")
B.bh=new A.bS(2,"off")
B.c7=s([B.ab,B.bg,B.bh],A.a_("q<bS>"))
B.h0=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.dc=new A.cV(1,"reduced")
B.aN=s([B.aA,B.dc],A.a_("q<cV>"))
B.d8=new A.cn(0,"wide")
B.d9=new A.cn(2,"night")
B.aO=s([B.d8,B.bl,B.d9],A.a_("q<cn>"))
B.h1=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.hc=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.hd=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fc=new A.cZ(0,"compact")
B.c8=s([B.fc,B.bP],A.a_("q<cZ>"))
B.jO=new A.bB(0,"long")
B.cR=new A.bB(1,"short")
B.c9=s([B.jO,B.cR],A.a_("q<bB>"))
B.F=new A.bx(0,"visual")
B.a5=new A.bx(1,"graphics")
B.ao=new A.bx(2,"gameplay")
B.a6=new A.bx(3,"controls")
B.x=new A.bx(4,"audio")
B.y=new A.bx(5,"accessibility")
B.hf=s([B.F,B.a5,B.ao,B.a6,B.x,B.y],A.a_("q<bx>"))
B.hg=s([2.1,4.2,6.3],t.n)
B.hh=s(["master","voice","effects","ambience","music"],t.s)
B.ff=new A.d_(1,"detailed")
B.ca=s([B.bR,B.ff],A.a_("q<d_>"))
B.hi=s(["res/house/house.json","assets/house/house.json"],t.s)
B.fx=new A.ce(2,"safe")
B.fy=new A.ce(3,"custom")
B.cb=s([B.c_,B.aJ,B.fx,B.fy],A.a_("q<ce>"))
B.D=new A.c5(0,"inactive")
B.b3=new A.c5(2,"affineWarp")
B.b4=new A.c5(3,"vertexSnap")
B.b5=new A.c5(4,"tapeGiveup")
B.b6=new A.c5(5,"portalFail")
B.V=new A.c5(6,"lightsOut")
B.cc=s([B.D,B.a7,B.b3,B.b4,B.b5,B.b6,B.V],A.a_("q<c5>"))
B.hj=s([B.am,B.aL,B.c0],A.a_("q<ds>"))
B.hk=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.I=s([],t.hS)
B.hu=s([],t.iG)
B.ht=s([],t.dL)
B.hl=s([],A.a_("q<cf>"))
B.hn=s([],t.cs)
B.aQ=s([],t.jc)
B.hp=s([],t.bz)
B.R=s([],t.aN)
B.ho=s([],t.u)
B.ce=s([],t.e_)
B.hm=s([],t.b2)
B.o=s([],t.s)
B.cf=s([],t.cF)
B.cd=s([],t.cJ)
B.hv=s([],t.t)
B.hw=s([],t.dG)
B.fB=new A.fX(15,"kitchen",-0.3,0)
B.fA=new A.fX(19,"spare-room",0,0.3)
B.J=s([B.fB,B.fA],A.a_("q<fX>"))
B.hx=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.jL=new A.bf(0,"bed")
B.jM=new A.bf(1,"chair")
B.jN=new A.bf(2,"floor")
B.cg=s([B.jL,B.jM,B.jN],A.a_("q<bf>"))
B.hy=s(["high","medium","low"],t.s)
B.da=new A.cd(1,"headphones")
B.db=new A.cd(2,"speakers")
B.aR=s([B.bm,B.da,B.db,B.bn],A.a_("q<cd>"))
B.fb=new A.cY(1,"hold")
B.ch=s([B.bO,B.fb],A.a_("q<cY>"))
B.aV=new A.cA(0,"root")
B.cv=new A.b3(0,"pauseMenu")
B.iw=new A.d4(B.aV,B.cv,null)
B.hz=s([B.iw],t.eY)
B.d3=new A.cm(0,"concise")
B.d4=new A.cm(1,"standard")
B.d5=new A.cm(2,"verbose")
B.hA=s([B.d3,B.d4,B.d5],A.a_("q<cm>"))
B.fg=new A.cq(0,"instant")
B.fh=new A.cq(2,"slow")
B.ci=s([B.fg,B.bS,B.fh],A.a_("q<cq>"))
B.hB=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.hC=s([B.E,B.ar,B.W],A.a_("q<be>"))
B.cj=s([B.l,B.B,B.m,B.O],A.a_("q<dp>"))
B.b7=new A.aY(0,"depthTest")
B.b8=new A.aY(1,"depthFunc")
B.b9=new A.aY(2,"depthWrite")
B.ba=new A.aY(3,"blendEnable")
B.bb=new A.aY(4,"blendFunc")
B.bc=new A.aY(5,"blendEquation")
B.bd=new A.aY(6,"cullEnable")
B.be=new A.aY(7,"cullFace")
B.cU=new A.aY(8,"frontFace")
B.jQ=new A.aY(9,"stencilEnable")
B.cS=new A.aY(10,"colorMask")
B.cT=new A.aY(11,"scissorEnable")
B.hD=s([B.b7,B.b8,B.b9,B.ba,B.bb,B.bc,B.bd,B.be,B.cU,B.jQ,B.cS,B.cT],A.a_("q<aY>"))
B.hE=s(["off","fxaa","msaa2","msaa4"],t.s)
B.hF=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow"],t.s)
B.hG=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.hH=s(["uBloomStrength"],t.s)
B.hI=s(["uLutSize","uStrength"],t.s)
B.hJ=s([B.bE,B.bF,B.bG],A.a_("q<c1>"))
B.hK=s(["wall-plaster","grime"],t.s)
B.hL=s(["uTexelSize","uNear","uFar"],t.s)
B.ck=s(["uTexelStep"],t.s)
B.hM=s(["uninitialized"],t.s)
B.fd=new A.cp(0,"minimal")
B.fe=new A.cp(2,"detailed")
B.cl=s([B.fd,B.bQ,B.fe],A.a_("q<cp>"))
B.Y=new A.bR(0,"waiting")
B.au=new A.bR(1,"atDoor")
B.av=new A.bR(2,"consulting")
B.aw=new A.bR(3,"resolved")
B.hN=s([B.Y,B.au,B.av,B.aw],A.a_("q<bR>"))
B.im={uAlbedo:0}
B.cm=new A.a4(B.im,[0],t.I)
B.i6={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.cn=new A.a4(B.i6,[2,3,4,5,6],t.I)
B.iu={uSsaoRaw:0,uSceneDepth:1}
B.hO=new A.a4(B.iu,[0,1],t.I)
B.cu={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.hb=s(["KeyW"],t.s)
B.ha=s(["KeyS"],t.s)
B.h2=s(["KeyA"],t.s)
B.h3=s(["KeyD"],t.s)
B.h4=s(["KeyE"],t.s)
B.h8=s(["KeyQ"],t.s)
B.he=s(["ShiftLeft"],t.s)
B.fS=s(["ControlLeft"],t.s)
B.h9=s(["KeyR"],t.s)
B.h5=s(["KeyF"],t.s)
B.h6=s(["KeyJ"],t.s)
B.h7=s(["KeyL"],t.s)
B.fV=s(["Escape"],t.s)
B.hP=new A.a4(B.cu,[B.hb,B.ha,B.h2,B.h3,B.h4,B.h8,B.he,B.fS,B.h9,B.h5,B.h6,B.h7,B.fV],A.a_("a4<m,E<m>>"))
B.hQ=new A.a4(B.cu,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.ir={uScene:0,uHistory:1}
B.hR=new A.a4(B.ir,[0,1],t.I)
B.i4={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.hS=new A.a4(B.i4,["9715bfc572f1518acb8fa53414e1dd87c6a0ab89","0bacd2158890248859931323f4746bce4a3757f3","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.ii={aPosition:0,aUvMat:1}
B.co=new A.a4(B.ii,[0,4],t.I)
B.is={uScene:0,uLut:1}
B.hT=new A.a4(B.is,[0,1],t.I)
B.it={uSource:0}
B.cp=new A.a4(B.it,[0],t.I)
B.ik={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.hU=new A.a4(B.ik,[0,1,2,3,4,5,6],t.I)
B.i8={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"range-settle":16,"cellar-drip":17,"cistern-settle":18,"step-above-0":19,"step-above-1":20,"step-above-2":21,"step-above-3":22}
B.hV=new A.a4(B.i8,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.cq=new A.cr([B.F,"settings.visual",B.a5,"settings.graphics",B.ao,"settings.gameplay",B.a6,"settings.controls",B.x,"settings.audio",B.y,"settings.accessibility"],t.iP)
B.aS=new A.cr([B.F,"visual",B.a5,"graphics",B.ao,"gameplay",B.a6,"controls",B.x,"audio",B.y,"accessibility"],t.iP)
B.id={uSharp:0,uBlurred:1,uSceneDepth:2}
B.hW=new A.a4(B.id,[0,1,2],t.I)
B.io={uBloom:0}
B.hX=new A.a4(B.io,[0],t.I)
B.ip={uSceneDepth:0}
B.hY=new A.a4(B.ip,[0],t.I)
B.iq={uScene:0}
B.hZ=new A.a4(B.iq,[0],t.I)
B.S={}
B.cs=new A.a4(B.S,[],A.a_("a4<m,fF>"))
B.cr=new A.a4(B.S,[],t.p)
B.t=new A.a4(B.S,[],t.I)
B.kX=new A.a4(B.S,[],A.a_("a4<m,m?>"))
B.i_=new A.a4(B.S,[],A.a_("a4<@,@>"))
B.i7={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.i0=new A.a4(B.i7,[0,1,2,3,4,5,6],t.I)
B.cw=new A.cB(0,"resume")
B.cx=new A.cB(1,"settings")
B.cy=new A.cB(2,"controls")
B.cz=new A.cB(3,"save")
B.cA=new A.cB(4,"help")
B.cB=new A.cB(5,"back")
B.i1=new A.cr([B.cw,"pause.resume",B.cx,"pause.settings",B.cy,"pause.controls",B.cz,"pause.save",B.cA,"pause.help",B.cB,"pause.back"],A.a_("cr<cB,m>"))
B.ij={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.i2=new A.a4(B.ij,[0,1,2,3],t.I)
B.iv={uTex:0}
B.i3=new A.a4(B.iv,[0],t.I)
B.aT=new A.cr([B.a7,1,B.b3,1.5,B.b4,1.5,B.b5,2,B.b6,2,B.V,4],A.a_("cr<c5,y>"))
B.hr=s([],t.eY)
B.hs=s([],A.a_("q<b3>"))
B.aU=new A.dx(B.hr,B.hs,null)
B.aW=new A.cA(1,"settings")
B.ix=new A.cA(2,"visual")
B.iy=new A.cA(3,"graphics")
B.iz=new A.cA(5,"controls")
B.iA=new A.cA(6,"audio")
B.iB=new A.cA(7,"accessibility")
B.a4=new A.b3(1,"settings")
B.iC=new A.b3(2,"journal")
B.iD=new A.b3(3,"sleep")
B.iE=new A.b3(4,"help")
B.iF=new A.b3(5,"visitor")
B.iG=new A.b3(6,"ending")
B.cC=new A.dy(0,"opened")
B.cD=new A.dy(2,"backed")
B.cE=new A.dy(3,"resumed")
B.iH=new A.dy(4,"dismissed")
B.T=new A.dy(5,"unchanged")
B.iI=new A.jH(0,1,null)
B.iJ=new A.jL(1,0,0,0,0,0,0,0,8,0,0,0,0,0,0,!1)
B.aX=new A.eg(0,"safe")
B.aY=new A.eg(1,"standard")
B.aZ=new A.eg(2,"high")
B.K=new A.bb(B.S,0,t.O)
B.ap=new A.ef(B.aX,B.K)
B.il={shadows:0}
B.jz=new A.bb(B.il,1,t.O)
B.iL=new A.ef(B.aY,B.jz)
B.ib={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.jv=new A.bb(B.ib,5,t.O)
B.iM=new A.ef(B.aZ,B.jv)
B.iK=new A.eg(4,"shipping")
B.ic={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.jw=new A.bb(B.ic,7,t.O)
B.kY=new A.ef(B.iK,B.jw)
B.iO=new A.ax(0,1)
B.iP=new A.ae(0.46,0.44,0.48)
B.iQ=new A.ae(0.46,0.25,0.2)
B.iR=new A.ae(0.48,0.4,0.34)
B.iS=new A.ae(0.31,0.25,0.23)
B.iT=new A.ae(0.42,0.44,0.43)
B.iU=new A.ae(0.43,0.38,0.43)
B.iV=new A.ae(0.37,0.33,0.31)
B.iW=new A.ae(0.34,0.32,0.29)
B.cG=new A.ae(0.38,0.25,0.19)
B.iX=new A.ae(0.31,0.28,0.24)
B.iY=new A.ae(0.58,0.56,0.5)
B.iZ=new A.ae(0.36,0.39,0.46)
B.j_=new A.ae(0.44,0.37,0.28)
B.j0=new A.ae(0.52,0.5,0.44)
B.j1=new A.ae(0.24,0.25,0.27)
B.j2=new A.ae(0.28,0.27,0.25)
B.j3=new A.ae(0.31,0.34,0.4)
B.j4=new A.ae(0.34,0.3,0.36)
B.j5=new A.ae(0.42,0.4,0.38)
B.j6=new A.ae(0.18,0.2,0.21)
B.j7=new A.ae(0.2,0.12,0.1)
B.j8=new A.ae(0.45,0.42,0.35)
B.j9=new A.ae(0.12,0.15,0.2)
B.ja=new A.ae(0.34,0.36,0.45)
B.b_=new A.hf(0,"legacy")
B.cH=new A.eh(0,"constructed")
B.z=new A.eh(1,"ready")
B.aq=new A.eh(2,"lost")
B.cI=new A.eh(3,"disposed")
B.kW=new A.iS(1,"errorsOnly")
B.jb=new A.jT(B.ap,384,216,0)
B.b0=new A.ei(0,"constructed")
B.jc=new A.ei(1,"initializing")
B.b1=new A.ei(2,"ready")
B.cJ=new A.ei(3,"contextLost")
B.i=new A.f6(0,"read")
B.j=new A.f6(1,"write")
B.G=new A.f6(2,"historyRead")
B.p=new A.hh(0,"rgba8")
B.jd=new A.aD("dofBlurH",B.p,192,108,1,0)
B.je=new A.aD("dofBlurV",B.p,192,108,1,0)
B.jf=new A.aD("dofOutput",B.p,384,216,1,0)
B.cK=new A.hh(2,"depth24")
B.jg=new A.aD("shadowMap",B.cK,512,512,1,0)
B.jh=new A.aD("ssaoRaw",B.p,192,108,1,0)
B.ji=new A.aD("ssaoBlurred",B.p,192,108,1,0)
B.jj=new A.aD("gradeOutput",B.p,384,216,1,0)
B.jk=new A.aD("vhsOutput",B.p,384,216,1,0)
B.jl=new A.aD("sceneDepth",B.cK,384,216,1,0)
B.jm=new A.aD("bloomBlurH",B.p,192,108,1,0)
B.jn=new A.aD("bloomBlurV",B.p,192,108,1,0)
B.jo=new A.aD("present",B.p,384,216,1,0)
B.b2=new A.aD("sceneColor",B.p,384,216,1,0)
B.jp=new A.aD("ps1Output",B.p,384,216,1,0)
B.jq=new A.ej(null,"save storage unavailable")
B.jr=new A.ej(null,"save could not be recovered")
B.js=new A.ej(null,null)
B.ig={WheelUp:0,WheelDown:1}
B.jt=new A.bb(B.ig,2,t.O)
B.ia={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.ju=new A.bb(B.ia,4,t.O)
B.i9={Escape:0}
B.cL=new A.bb(B.i9,1,t.O)
B.ih={Escape:0,Tab:1,F11:2}
B.cM=new A.bb(B.ih,3,t.O)
B.ie={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.jx=new A.bb(B.ie,5,t.O)
B.i5={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.jy=new A.bb(B.i5,9,t.O)
B.cP=new A.ek(2,"link")
B.jK=new A.hm(B.cP,"gl.createProgram() returned null")
B.cN=new A.ek(0,"vertex")
B.cO=new A.ek(1,"fragment")
B.cQ=new A.ek(3,"validation")
B.X=new A.H(0,1,0)
B.at=new A.H(0,-1,0)
B.jP=new A.bg(-1,B.X,B.at,B.c3,1,1,0.3,0.5)
B.aa=new A.H(0,0,0)
B.iN=new A.jR(0,0,0,1)
B.A=new A.k7(B.aa,B.iN)
B.jR=A.ca("DR")
B.jS=A.ca("DS")
B.jT=A.ca("mW")
B.jU=A.ca("zj")
B.jV=A.ca("zu")
B.jW=A.ca("zv")
B.jX=A.ca("zw")
B.jY=A.ca("a7")
B.jZ=A.ca("C")
B.k_=A.ca("un")
B.k0=A.ca("Ai")
B.k1=A.ca("Aj")
B.k2=A.ca("hs")
B.e=new A.da(0,"float1")
B.as=new A.da(1,"float2")
B.n=new A.da(2,"float3")
B.k3=new A.da(3,"float4")
B.r=new A.da(4,"mat4")
B.k4=new A.x(B.e,1)
B.M=new A.da(5,"sampler")
B.u=new A.x(B.M,0)
B.a9=new A.x(B.M,1)
B.cV=new A.x(B.M,2)
B.k5=new A.x(B.M,3)
B.k6=new A.x(B.M,4)
B.k7=new A.x(B.M,5)
B.k8=new A.x(B.M,6)
B.k9=new A.qa(!1)
B.ka=new A.H(0,0,1)
B.kb=new A.H(1,0,0)
B.kc=new A.H(1/0,1/0,1/0)
B.kd=new A.H(-1/0,-1/0,-1/0)
B.cX=new A.cI(6,"tangent4")
B.kp=new A.dE(0,"visitorAnswered")
B.cY=new A.dE(1,"visitorIgnored")
B.kq=new A.dE(2,"entryVerified")
B.kr=new A.dE(3,"entryContradicted")
B.ks=new A.dE(4,"exposureAccepted")
B.ku=new A.cJ(1,"malformedDay")
B.kv=new A.cJ(2,"malformedTier")
B.cZ=new A.cJ(3,"missingTierLines")
B.bi=new A.cJ(6,"invalidPhase")
B.kB=new A.bT(B.bi,"The active visit cannot be chosen.")
B.kE=new A.bD(B.kB)
B.ky=new A.bT(B.bi,"The active visit has no line to advance.")
B.kF=new A.bD(B.ky)
B.kx=new A.cJ(5,"noActiveVisit")
B.kz=new A.bT(B.kx,"There is no active visit.")
B.d_=new A.bD(B.kz)
B.kA=new A.bT(B.bi,"A visit is already active.")
B.kG=new A.bD(B.kA)
B.kw=new A.cJ(4,"noArrival")
B.kD=new A.bT(B.kw,"The authored arrival is missing.")
B.kH=new A.bD(B.kD)
B.kt=new A.cJ(0,"missingCorpus")
B.kC=new A.bT(B.kt,"The authored visitor corpus is empty.")
B.kI=new A.bD(B.kC)
B.d0=new A.ep(1,"exact")
B.bj=new A.ep(2,"partial")
B.ax=new A.ep(3,"contradiction")
B.kJ=new A.ep(0,"skipped")
B.kK=new A.eo(B.kJ,B.K)
B.kL=new A.eo(B.bj,B.K)
B.kM=new A.hz(B.R,!1)
B.kN=new A.hz(B.R,!0)
B.d1=new A.hC(0,"horizontal")
B.kO=new A.hC(1,"vertical")
B.d2=new A.hE(0,"horizontal")
B.kP=new A.hE(1,"vertical")
B.ay=new A.fh(0,"empty")
B.kQ=new A.fh(1,"cpuReady")
B.az=new A.fh(4,"released")})();(function staticFields(){$.qL=null
$.c_=A.e([],A.a_("q<C>"))
$.vZ=null
$.oM=0
$.oN=A.Cg()
$.vt=null
$.vs=null
$.xN=null
$.xG=null
$.xV=null
$.tj=null
$.tq=null
$.va=null
$.qT=A.e([],A.a_("q<E<C>?>"))
$.fv=null
$.ih=null
$.ii=null
$.uO=!1
$.ak=B.v
$.wf=""
$.wg=null
$.wb=null
$.ow=null
$.bW=A.a9()
$.cN=A.a9()
$.bo=null
$.lf=null
$.I=A.a9()
$.bF=A.a9()
$.aA=A.a9()
$.wN=A.a9()
$.fw=null
$.a0=A.a9()
$.fs=null
$.ez=A.a9()
$.Y=A.a9()
$.uz=A.a9()
$.uK=null
$.bm=null
$.uC=!1
$.ll=!1
$.ie=B.aB
$.eA=B.ac
$.t7=!1
$.v3=!1
$.x9=null
$.le=null
$.ra=null
$.wY=0
$.uQ=!1
$.x8=!1
$.uP=0
$.xf=0
$.dK=0
$.xE=!1
$.uE="booting"
$.bZ=0
$.dN=0
$.aK="hall"
$.ib=A.a9()
$.fn=A.a9()
$.bG=A.a9()
$.xe=null
$.uV=0
$.b8=null
$.il=!1
$.cM=A.a9()
$.ic=A.a9()
$.ia=A.a9()
$.lb=A.a9()
$.wO=A.a9()
$.wM=A.a9()
$.aH=A.a9()
$.r4=A.a9()
$.i9=A.a9()
$.fp=A.a9()
$.id=A.a9()
$.ey=A.a9()
$.fo=A.a9()
$.fm=A.a9()
$.i7=A.a9()
$.i8=A.a9()
$.aZ=A.a9()
$.la=A.a9()
$.bE=A.a9()
$.ta=A.a6(t.S)
$.cO=A.e([],t.s)
$.uJ=null
$.xy=!1
$.wR=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"DU","y5",()=>A.xM("_$dart_dartClosure"))
s($,"DT","cR",()=>A.xM("_$dart_dartClosure_dartJSInterop"))
s($,"Et","yq",()=>A.e([new J.jj()],A.a_("q<hj>")))
s($,"E5","y7",()=>A.d9(A.q6({
toString:function(){return"$receiver$"}})))
s($,"E6","y8",()=>A.d9(A.q6({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"E7","y9",()=>A.d9(A.q6(null)))
s($,"E8","ya",()=>A.d9(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Eb","yd",()=>A.d9(A.q6(void 0)))
s($,"Ec","ye",()=>A.d9(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ea","yc",()=>A.d9(A.wc(null)))
s($,"E9","yb",()=>A.d9(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Ee","yg",()=>A.d9(A.wc(void 0)))
s($,"Ed","yf",()=>A.d9(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Ef","vk",()=>A.AE())
s($,"Ej","yk",()=>A.zM(4096))
s($,"Eh","yi",()=>new A.r1().$0())
s($,"Ei","yj",()=>new A.r0().$0())
s($,"Eg","yh",()=>A.zL(A.Z(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"En","fD",()=>A.lr(B.jZ))
s($,"E3","vj",()=>{A.zZ()
return $.oM})
s($,"DQ","y4",()=>B.b2.iB())
s($,"DZ","vi",()=>A.jF(A.e([255,255,255,255],t.t)))
s($,"DW","vf",()=>A.jF(A.e([128,128,255,255],t.t)))
s($,"DV","ve",()=>A.jF(A.e([0,0,0,255],t.t)))
s($,"DX","vg",()=>A.jF(A.e([255,255,0,255],t.t)))
s($,"DY","vh",()=>A.jF(A.e([255,255,255,255],t.t)))
s($,"Ev","ys",()=>A.ke(0,1,0))
s($,"Eu","yr",()=>A.A0("^[a-z0-9][a-z0-9._-]*$"))
s($,"Ey","lu",()=>{var q=$.wb
if(q==null){A.lo()
A.lo()
A.lo()
A.lo()
A.lo()
q=$.wb=new A.q_()}return q})
s($,"E_","y6",()=>A.vE(B.bM,!0,B.bN,B.bO,B.bP,B.bQ,B.bR,B.bS))
s($,"El","yl",()=>new A.mc())
r($,"xC","cS",()=>A.uk(null,null))
r($,"rT","vl",()=>A.jb(null,null))
r($,"uI","ls",()=>A.eS(null,null,!1,1,!1,!1,2,1))
s($,"Eo","yn",()=>new A.nu())
s($,"Ep","yo",()=>new A.nD())
s($,"Eq","tZ",()=>new A.nV(A.r(t.N,t.S)))
s($,"Em","ym",()=>A.hv().gbl().h(0,"debugPause")==="1")
s($,"Ek","tY",()=>A.hv().gbl().h(0,"automation")==="1")
r($,"uZ","eE",()=>A.ke(0,0,0))
r($,"uT","yp",()=>A.ke(0,0,0))
r($,"v4","io",()=>A.ke(0,0,0))
s($,"Er","lt",()=>new A.mX(A.ke(0,0,0)))
s($,"Es","fE",()=>new A.oA(B.aU))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.dw,ArrayBuffer:A.f3,ArrayBufferView:A.h6,DataView:A.jy,Float32Array:A.h3,Float64Array:A.jz,Int16Array:A.jA,Int32Array:A.jB,Int8Array:A.jC,Uint16Array:A.jD,Uint32Array:A.jE,Uint8ClampedArray:A.ed,CanvasPixelArray:A.ed,Uint8Array:A.h7})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aV.$nativeSuperclassTag="ArrayBufferView"
A.hM.$nativeSuperclassTag="ArrayBufferView"
A.hN.$nativeSuperclassTag="ArrayBufferView"
A.h4.$nativeSuperclassTag="ArrayBufferView"
A.hO.$nativeSuperclassTag="ArrayBufferView"
A.hP.$nativeSuperclassTag="ArrayBufferView"
A.h5.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.tr
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
