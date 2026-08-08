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
if(a[b]!==s){A.vD(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.i(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.nK(b)
return new s(c,this)}:function(){if(s===null)s=A.nK(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.nK(a).prototype
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
nP(a,b,c,d){return{i:a,p:b,e:c,x:d}},
my(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.nN==null){A.vi()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.oC("Return interceptor for "+A.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.lV
if(o==null)o=$.lV=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.vo(a)
if(p!=null)return p
if(typeof a=="function")return B.cC
s=Object.getPrototypeOf(a)
if(s==null)return B.aP
if(s===Object.prototype)return B.aP
if(typeof q=="function"){o=$.lV
if(o==null)o=$.lV=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a7,enumerable:false,writable:true,configurable:true})
return B.a7}return B.a7},
ob(a,b){if(a<0||a>4294967295)throw A.b(A.aq(a,0,4294967295,"length",null))
return J.rk(new Array(a),b)},
oc(a,b){if(a<0)throw A.b(A.x("Length must be a non-negative integer: "+a,null))
return A.i(new Array(a),b.h("o<0>"))},
fY(a,b){if(a<0)throw A.b(A.x("Length must be a non-negative integer: "+a,null))
return A.i(new Array(a),b.h("o<0>"))},
rk(a,b){var s=A.i(a,b.h("o<0>"))
s.$flags=1
return s},
rl(a,b){var s=t.bP
return J.nT(s.a(a),s.a(b))},
of(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
rm(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.of(r))break;++b}return b},
rn(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.of(q))break}return b},
d0(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e3.prototype
return J.h_.prototype}if(typeof a=="string")return J.cA.prototype
if(a==null)return J.e4.prototype
if(typeof a=="boolean")return J.fZ.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.A)return a
return J.my(a)},
bf(a){if(typeof a=="string")return J.cA.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.A)return a
return J.my(a)},
bw(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.A)return a
return J.my(a)},
ve(a){if(typeof a=="number")return J.cz.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.cM.prototype
return a},
pW(a){if(typeof a=="number")return J.cz.prototype
if(typeof a=="string")return J.cA.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.cM.prototype
return a},
vf(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
if(typeof a=="symbol")return J.de.prototype
if(typeof a=="bigint")return J.dd.prototype
return a}if(a instanceof A.A)return a
return J.my(a)},
nS(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pW(a).a3(a,b)},
Z(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d0(a).R(a,b)},
au(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.vm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).i(a,b)},
by(a,b,c){return J.bw(a).k(a,b,c)},
fe(a,b){return J.bw(a).m(a,b)},
qu(a,b){return J.bw(a).I(a,b)},
qv(a,b){return J.bw(a).ab(a,b)},
qw(a,b,c){return J.vf(a).eg(a,b,c)},
qx(a,b){return J.bw(a).bo(a,b)},
nT(a,b){return J.pW(a).E(a,b)},
iy(a,b){return J.bw(a).N(a,b)},
aQ(a){return J.d0(a).gD(a)},
nU(a){return J.bf(a).gF(a)},
qy(a){return J.bf(a).gH(a)},
H(a){return J.bw(a).gt(a)},
av(a){return J.bf(a).gq(a)},
ff(a){return J.d0(a).gJ(a)},
nV(a,b,c){return J.bw(a).b8(a,b,c)},
qz(a,b){return J.bf(a).sq(a,b)},
qA(a,b){return J.bw(a).T(a,b)},
n_(a,b){return J.ve(a).ko(a,b)},
d2(a){return J.d0(a).n(a)},
qB(a,b){return J.bw(a).di(a,b)},
fV:function fV(){},
fZ:function fZ(){},
e4:function e4(){},
e5:function e5(){},
c4:function c4(){},
hg:function hg(){},
cM:function cM(){},
bK:function bK(){},
dd:function dd(){},
de:function de(){},
o:function o(a){this.$ti=a},
fX:function fX(){},
jO:function jO(a){this.$ti=a},
co:function co(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cz:function cz(){},
e3:function e3(){},
h_:function h_(){},
cA:function cA(){}},A={n1:function n1(){},
iq(){return $},
qG(a,b,c){if(t.gt.b(a))return new A.eG(a,b.h("@<0>").C(c).h("eG<1,2>"))
return new A.cp(a,b.h("@<0>").C(c).h("cp<1,2>"))},
oi(a){return new A.cB("Field '"+a+"' has been assigned during initialization.")},
aI(a){return new A.cB("Field '"+a+"' has not been initialized.")},
rp(a){return new A.cB("Field '"+a+"' has already been initialized.")},
mz(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bT(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
la(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
d_(a,b,c){return a},
nO(a){var s,r
for(s=$.b0.length,r=0;r<s;++r)if(a===$.b0[r])return!0
return!1},
l8(a,b,c,d){A.hp(b,"start")
if(c!=null){A.hp(c,"end")
if(b>c)A.m(A.aq(b,0,c,"start",null))}return new A.ew(a,b,c,d.h("ew<0>"))},
h4(a,b,c,d){if(t.gt.b(a))return new A.cs(a,b,c.h("@<0>").C(d).h("cs<1,2>"))
return new A.bN(a,b,c.h("@<0>").C(d).h("bN<1,2>"))},
fW(){return new A.dm("No element")},
ri(){return new A.dm("Too many elements")},
hv(a,b,c,d,e){if(c-b<=32)A.rS(a,b,c,d,e)
else A.rR(a,b,c,d,e)},
rS(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.bf(a);s<=c;++s){q=r.i(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.X()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.i(a,n))
p=n}r.k(a,p,q)}},
rR(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.K(a4+a5,2),f=g-j,e=g+j,d=J.bf(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.i(a3,a4))
d.k(a3,e,d.i(a3,a5))
r=a4+1
q=a5-1
p=J.Z(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.i(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.k(a3,o,d.i(a3,r))
d.k(a3,r,n)}++r}else for(;;){m=a6.$2(d.i(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.k(a3,o,d.i(a3,r))
k=r+1
d.k(a3,r,d.i(a3,q))
d.k(a3,q,n)
q=l
r=k
break}else{d.k(a3,o,d.i(a3,q))
d.k(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.i(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.k(a3,o,d.i(a3,r))
d.k(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;;)if(a6.$2(d.i(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.i(a3,q),b)<0){d.k(a3,o,d.i(a3,r))
k=r+1
d.k(a3,r,d.i(a3,q))
d.k(a3,q,n)
r=k}else{d.k(a3,o,d.i(a3,q))
d.k(a3,q,n)}q=l
break}}a2=r-1
d.k(a3,a4,d.i(a3,a2))
d.k(a3,a2,b)
a2=q+1
d.k(a3,a5,d.i(a3,a2))
d.k(a3,a2,a0)
A.hv(a3,a4,r-2,a6,a7)
A.hv(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.Z(a6.$2(d.i(a3,r),b),0))++r
while(J.Z(a6.$2(d.i(a3,q),a0),0))--q
for(o=r;o<=q;++o){n=d.i(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.k(a3,o,d.i(a3,r))
d.k(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;;)if(a6.$2(d.i(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.i(a3,q),b)<0){d.k(a3,o,d.i(a3,r))
k=r+1
d.k(a3,r,d.i(a3,q))
d.k(a3,q,n)
r=k}else{d.k(a3,o,d.i(a3,q))
d.k(a3,q,n)}q=l
break}}A.hv(a3,r,q,a6,a7)}else A.hv(a3,r,q,a6,a7)},
cf:function cf(){},
dP:function dP(a,b){this.a=a
this.$ti=b},
cp:function cp(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b){this.a=a
this.$ti=b},
eF:function eF(){},
lH:function lH(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.$ti=b},
cB:function cB(a){this.a=a},
fv:function fv(a){this.a=a},
l_:function l_(){},
y:function y(){},
a6:function a6(){},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bL:function bL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cD:function cD(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
bp:function bp(a,b){this.a=a
this.$ti=b},
eC:function eC(a,b){this.a=a
this.$ti=b},
a_:function a_(){},
bD:function bD(){},
dq:function dq(){},
eq:function eq(a,b){this.a=a
this.$ti=b},
f6:function f6(){},
d6(a,b,c){var s,r,q,p,o,n,m,l=A.b5(a.gL(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.w)(l),++j,p=o){r=l[j]
c.a(a.i(0,r))
o=p+1
q[r]=p}n=A.b5(a.ga9(),!0,c)
m=new A.ap(q,n,b.h("@<0>").C(c).h("ap<1,2>"))
m.$keys=l
return m}return new A.dR(A.ay(a,b,c),b.h("@<0>").C(c).h("dR<1,2>"))},
qM(){throw A.b(A.ah("Cannot modify unmodifiable Map"))},
qN(){throw A.b(A.ah("Cannot modify constant Set"))},
q9(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
vm(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
u(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d2(a)
return s},
el(a){var s,r=$.oq
if(r==null)r=$.oq=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
kt(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hm(a){var s,r,q,p
if(a instanceof A.A)return A.b_(A.b1(a),null)
s=J.d0(a)
if(s===B.cB||s===B.cD||t.cx.b(a)){r=B.ac(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.b_(A.b1(a),null)},
or(a){var s,r,q
if(a==null||typeof a=="number"||A.be(a))return J.d2(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.c1)return a.n(0)
if(a instanceof A.ba)return a.e8(!0)
s=$.qs()
for(r=0;r<1;++r){q=s[r].kq(a)
if(q!=null)return q}return"Instance of '"+A.hm(a)+"'"},
ry(){if(!!self.location)return self.location.href
return null},
rH(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
a1(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cc(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aq(a,0,1114111,null,null))},
dh(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
rG(a){var s=A.dh(a).getUTCFullYear()+0
return s},
rE(a){var s=A.dh(a).getUTCMonth()+1
return s},
rA(a){var s=A.dh(a).getUTCDate()+0
return s},
rB(a){var s=A.dh(a).getUTCHours()+0
return s},
rD(a){var s=A.dh(a).getUTCMinutes()+0
return s},
rF(a){var s=A.dh(a).getUTCSeconds()+0
return s},
rC(a){var s=A.dh(a).getUTCMilliseconds()+0
return s},
rz(a){var s=a.$thrownJsError
if(s==null)return null
return A.c0(s)},
os(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.ab(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
is(a){throw A.b(A.nJ(a))},
c(a,b){if(a==null)J.av(a)
throw A.b(A.mv(a,b))},
mv(a,b){var s,r="index"
if(!A.aD(b))return new A.bi(!0,b,r,null)
s=A.a(J.av(a))
if(b<0||b>=s)return A.jL(b,s,a,r)
return A.rI(b,r)},
v8(a,b,c){if(a>c)return A.aq(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aq(b,a,c,"end",null)
return new A.bi(!0,b,"end",null)},
nJ(a){return new A.bi(!0,a,null,null)},
b(a){return A.ab(a,new Error())},
ab(a,b){var s
if(a==null)a=new A.bU()
b.dartException=a
s=A.vE
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
vE(){return J.d2(this.dartException)},
m(a,b){throw A.ab(a,b==null?new Error():b)},
aP(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.m(A.u7(a,b,c),s)},
u7(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ey("'"+s+"': Cannot "+o+" "+l+k+n)},
w(a){throw A.b(A.af(a))},
bV(a){var s,r,q,p,o,n
a=A.q2(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.i([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.li(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
lj(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
oB(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
n2(a,b){var s=b==null,r=s?null:b.method
return new A.h0(a,r,s?null:b.receiver)},
ac(a){var s
if(a==null)return new A.kg(a)
if(a instanceof A.dV){s=a.a
return A.cn(a,s==null?A.dE(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cn(a,a.dartException)
return A.uO(a)},
cn(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
uO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cc(r,16)&8191)===10)switch(q){case 438:return A.cn(a,A.n2(A.u(s)+" (Error "+q+")",null))
case 445:case 5007:A.u(s)
return A.cn(a,new A.ei())}}if(a instanceof TypeError){p=$.qc()
o=$.qd()
n=$.qe()
m=$.qf()
l=$.qi()
k=$.qj()
j=$.qh()
$.qg()
i=$.ql()
h=$.qk()
g=p.a8(s)
if(g!=null)return A.cn(a,A.n2(A.B(s),g))
else{g=o.a8(s)
if(g!=null){g.method="call"
return A.cn(a,A.n2(A.B(s),g))}else if(n.a8(s)!=null||m.a8(s)!=null||l.a8(s)!=null||k.a8(s)!=null||j.a8(s)!=null||m.a8(s)!=null||i.a8(s)!=null||h.a8(s)!=null){A.B(s)
return A.cn(a,new A.ei())}}return A.cn(a,new A.hB(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.et()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cn(a,new A.bi(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.et()
return a},
c0(a){var s
if(a instanceof A.dV)return a.b
if(a==null)return new A.eU(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.eU(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
it(a){if(a==null)return J.aQ(a)
if(typeof a=="object")return A.el(a)
return J.aQ(a)},
v2(a){if(typeof a=="number")return B.d.gD(a)
if(a instanceof A.id)return A.el(a)
if(a instanceof A.ba)return a.gD(a)
return A.it(a)},
pV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
vd(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
um(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.d9("Unsupported number of arguments for wrapped closure"))},
dK(a,b){var s=a.$identity
if(!!s)return s
s=A.v3(a,b)
a.$identity=s
return s},
v3(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.um)},
qL(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hw().constructor.prototype):Object.create(new A.d4(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.o0(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.qH(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.o0(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
qH(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.qE)}throw A.b("Error in functionType of tearoff")},
qI(a,b,c,d){var s=A.o_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
o0(a,b,c,d){if(c)return A.qK(a,b,d)
return A.qI(b.length,d,a,b)},
qJ(a,b,c,d){var s=A.o_,r=A.qF
switch(b?-1:a){case 0:throw A.b(new A.ht("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
qK(a,b,c){var s,r
if($.nY==null)$.nY=A.nX("interceptor")
if($.nZ==null)$.nZ=A.nX("receiver")
s=b.length
r=A.qJ(s,c,a,b)
return r},
nK(a){return A.qL(a)},
qE(a,b){return A.eZ(v.typeUniverse,A.b1(a.a),b)},
o_(a){return a.a},
qF(a){return a.b},
nX(a){var s,r,q,p=new A.d4("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.x("Field name "+a+" not found.",null))},
pX(a){return v.getIsolateTag(a)},
q5(){return v.G},
w8(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
vo(a){var s,r,q,p,o,n=A.B($.pY.$1(a)),m=$.mw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bd($.pS.$2(a,n))
if(q!=null){m=$.mw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.mS(s)
$.mw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.mD[n]=s
return s}if(p==="-"){o=A.mS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.q0(a,s)
if(p==="*")throw A.b(A.oC(n))
if(v.leafTags[n]===true){o=A.mS(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.q0(a,s)},
q0(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.nP(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
mS(a){return J.nP(a,!1,null,!!a.$iaS)},
vs(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.mS(s)
else return J.nP(s,c,null,null)},
vi(){if(!0===$.nN)return
$.nN=!0
A.vj()},
vj(){var s,r,q,p,o,n,m,l
$.mw=Object.create(null)
$.mD=Object.create(null)
A.vh()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.q1.$1(o)
if(n!=null){m=A.vs(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
vh(){var s,r,q,p,o,n,m=B.bl()
m=A.dJ(B.bm,A.dJ(B.bn,A.dJ(B.ad,A.dJ(B.ad,A.dJ(B.bo,A.dJ(B.bp,A.dJ(B.bq(B.ac),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.pY=new A.mA(p)
$.pS=new A.mB(o)
$.q1=new A.mC(n)},
dJ(a,b){return a(b)||b},
tt(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.Z(r,b[s]))return!1}return!0},
v5(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vA(a,b,c){var s=a.indexOf(b,c)
return s>=0},
vb(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
q2(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
vB(a,b,c){var s=A.vC(a,b,c)
return s},
vC(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.q2(b),"g"),A.vb(c))},
dw:function dw(a,b){this.a=a
this.b=b},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a){this.a=a},
dR:function dR(a,b){this.a=a
this.$ti=b},
d5:function d5(){},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b){this.a=a
this.$ti=b},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dW:function dW(a,b){this.a=a
this.$ti=b},
dS:function dS(){},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
er:function er(){},
li:function li(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ei:function ei(){},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
kg:function kg(a){this.a=a},
dV:function dV(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a
this.b=null},
c1:function c1(){},
ft:function ft(){},
fu:function fu(){},
hy:function hy(){},
hw:function hw(){},
d4:function d4(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a},
b4:function b4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jX:function jX(a){this.a=a},
k4:function k4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a5:function a5(a,b){this.a=a
this.$ti=b},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ax:function ax(a,b){this.a=a
this.$ti=b},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
R:function R(a,b){this.a=a
this.$ti=b},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e6:function e6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mA:function mA(a){this.a=a},
mB:function mB(a){this.a=a},
mC:function mC(a){this.a=a},
ba:function ba(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
vD(a){throw A.ab(A.oi(a),new Error())},
h(){throw A.ab(A.aI(""),new Error())},
v(){throw A.ab(A.rp(""),new Error())},
q8(){throw A.ab(A.oi(""),new Error())},
Y(){var s=new A.lI()
return s.b=s},
lI:function lI(){this.b=null},
ck(a){return a},
rt(a,b,c){return new Float32Array(a,b,c)},
ru(a){return new Uint8Array(a)},
rv(a){return new Uint8Array(a)},
bZ(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.mv(b,a))},
u1(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.v8(a,b,c))
return b},
c7:function c7(){},
dg:function dg(){},
ef:function ef(){},
m5:function m5(a){this.a=a},
h7:function h7(){},
aj:function aj(){},
ed:function ed(){},
ee:function ee(){},
ec:function ec(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
eg:function eg(){},
eh:function eh(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
n9(a,b){var s=b.c
return s==null?b.c=A.eX(a,"b3",[b.x]):s},
ov(a){var s=a.w
if(s===6||s===7)return A.ov(a.x)
return s===11||s===12},
rP(a){return a.as},
vt(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ai(a){return A.m4(v.typeUniverse,a,!1)},
cZ(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.cZ(a1,s,a3,a4)
if(r===s)return a2
return A.p5(a1,r,!0)
case 7:s=a2.x
r=A.cZ(a1,s,a3,a4)
if(r===s)return a2
return A.p4(a1,r,!0)
case 8:q=a2.y
p=A.dI(a1,q,a3,a4)
if(p===q)return a2
return A.eX(a1,a2.x,p)
case 9:o=a2.x
n=A.cZ(a1,o,a3,a4)
m=a2.y
l=A.dI(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.nh(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.dI(a1,j,a3,a4)
if(i===j)return a2
return A.p6(a1,k,i)
case 11:h=a2.x
g=A.cZ(a1,h,a3,a4)
f=a2.y
e=A.uL(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.p3(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.dI(a1,d,a3,a4)
o=a2.x
n=A.cZ(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ni(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.fj("Attempted to substitute unexpected RTI kind "+a0))}},
dI(a,b,c,d){var s,r,q,p,o=b.length,n=A.m9(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cZ(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
uM(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.m9(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cZ(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
uL(a,b,c,d){var s,r=b.a,q=A.dI(a,r,c,d),p=b.b,o=A.dI(a,p,c,d),n=b.c,m=A.uM(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hY()
s.a=q
s.b=o
s.c=m
return s},
i(a,b){a[v.arrayRti]=b
return a},
nL(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.vg(s)
return a.$S()}return null},
vk(a,b){var s
if(A.ov(b))if(a instanceof A.c1){s=A.nL(a)
if(s!=null)return s}return A.b1(a)},
b1(a){if(a instanceof A.A)return A.n(a)
if(Array.isArray(a))return A.M(a)
return A.nx(J.d0(a))},
M(a){var s=a[v.arrayRti],r=t.x
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.nx(a)},
nx(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.uj(a,s)},
uj(a,b){var s=a instanceof A.c1?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.tD(v.typeUniverse,s.name)
b.$ccache=r
return r},
vg(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.m4(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ir(a){return A.bH(A.n(a))},
nH(a){var s
if(a instanceof A.ba)return a.dN()
s=a instanceof A.c1?A.nL(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.ff(a).a
if(Array.isArray(a))return A.M(a)
return A.b1(a)},
bH(a){var s=a.r
return s==null?a.r=new A.id(a):s},
vc(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.c(q,0)
s=A.eZ(v.typeUniverse,A.nH(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.p7(v.typeUniverse,s,A.nH(q[r]))}return A.eZ(v.typeUniverse,s,a)},
bg(a){return A.bH(A.m4(v.typeUniverse,a,!1))},
ui(a){var s=this
s.b=A.uI(s)
return s.b(a)},
uI(a){var s,r,q,p,o
if(a===t.K)return A.us
if(A.d1(a))return A.uw
s=a.w
if(s===6)return A.ue
if(s===1)return A.pC
if(s===7)return A.un
r=A.uH(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.d1)){a.f="$i"+q
if(q==="z")return A.uq
if(a===t.m)return A.up
return A.uv}}else if(s===10){p=A.v5(a.x,a.y)
o=p==null?A.pC:p
return o==null?A.dE(o):o}return A.uc},
uH(a){if(a.w===8){if(a===t.S)return A.aD
if(a===t.i||a===t.o)return A.ur
if(a===t.N)return A.uu
if(a===t.y)return A.be}return null},
uh(a){var s=this,r=A.ub
if(A.d1(s))r=A.u_
else if(s===t.K)r=A.dE
else if(A.dL(s)){r=A.ud
if(s===t.aV)r=A.pm
else if(s===t.w)r=A.bd
else if(s===t.fU)r=A.tZ
else if(s===t.jh)r=A.pn
else if(s===t.dA)r=A.pl
else if(s===t.mU)r=A.e}else if(s===t.S)r=A.a
else if(s===t.N)r=A.B
else if(s===t.y)r=A.aB
else if(s===t.o)r=A.il
else if(s===t.i)r=A.mc
else if(s===t.m)r=A.d
s.a=r
return s.a(a)},
uc(a){var s=this
if(a==null)return A.dL(s)
return A.vn(v.typeUniverse,A.vk(a,s),s)},
ue(a){if(a==null)return!0
return this.x.b(a)},
uv(a){var s,r=this
if(a==null)return A.dL(r)
s=r.f
if(a instanceof A.A)return!!a[s]
return!!J.d0(a)[s]},
uq(a){var s,r=this
if(a==null)return A.dL(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.A)return!!a[s]
return!!J.d0(a)[s]},
up(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.A)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
pB(a){if(typeof a=="object"){if(a instanceof A.A)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ub(a){var s=this
if(a==null){if(A.dL(s))return a}else if(s.b(a))return a
throw A.ab(A.ps(a,s),new Error())},
ud(a){var s=this
if(a==null||s.b(a))return a
throw A.ab(A.ps(a,s),new Error())},
ps(a,b){return new A.eV("TypeError: "+A.oW(a,A.b_(b,null)))},
oW(a,b){return A.fI(a)+": type '"+A.b_(A.nH(a),null)+"' is not a subtype of type '"+b+"'"},
bb(a,b){return new A.eV("TypeError: "+A.oW(a,b))},
un(a){var s=this
return s.x.b(a)||A.n9(v.typeUniverse,s).b(a)},
us(a){return a!=null},
dE(a){if(a!=null)return a
throw A.ab(A.bb(a,"Object"),new Error())},
uw(a){return!0},
u_(a){return a},
pC(a){return!1},
be(a){return!0===a||!1===a},
aB(a){if(!0===a)return!0
if(!1===a)return!1
throw A.ab(A.bb(a,"bool"),new Error())},
tZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.ab(A.bb(a,"bool?"),new Error())},
mc(a){if(typeof a=="number")return a
throw A.ab(A.bb(a,"double"),new Error())},
pl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ab(A.bb(a,"double?"),new Error())},
aD(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.ab(A.bb(a,"int"),new Error())},
pm(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.ab(A.bb(a,"int?"),new Error())},
ur(a){return typeof a=="number"},
il(a){if(typeof a=="number")return a
throw A.ab(A.bb(a,"num"),new Error())},
pn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ab(A.bb(a,"num?"),new Error())},
uu(a){return typeof a=="string"},
B(a){if(typeof a=="string")return a
throw A.ab(A.bb(a,"String"),new Error())},
bd(a){if(typeof a=="string")return a
if(a==null)return a
throw A.ab(A.bb(a,"String?"),new Error())},
d(a){if(A.pB(a))return a
throw A.ab(A.bb(a,"JSObject"),new Error())},
e(a){if(a==null)return a
if(A.pB(a))return a
throw A.ab(A.bb(a,"JSObject?"),new Error())},
pM(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.b_(a[q],b)
return s},
uB(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.pM(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.b_(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
pv(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.i([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.m(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.c(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.b_(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.b_(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.b_(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.b_(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.b_(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
b_(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.b_(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.b_(a.x,b)+">"
if(l===8){p=A.uN(a.x)
o=a.y
return o.length>0?p+("<"+A.pM(o,b)+">"):p}if(l===10)return A.uB(a,b)
if(l===11)return A.pv(a,b,null)
if(l===12)return A.pv(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
uN(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tE(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
tD(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.m4(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eY(a,5,"#")
q=A.m9(s)
for(p=0;p<s;++p)q[p]=r
o=A.eX(a,b,q)
n[b]=o
return o}else return m},
tC(a,b){return A.pf(a.tR,b)},
tB(a,b){return A.pf(a.eT,b)},
m4(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.p0(A.oZ(a,null,b,!1))
r.set(b,s)
return s},
eZ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.p0(A.oZ(a,b,c,!0))
q.set(c,r)
return r},
p7(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.nh(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ci(a,b){b.a=A.uh
b.b=A.ui
return b},
eY(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bo(null,null)
s.w=b
s.as=c
r=A.ci(a,s)
a.eC.set(c,r)
return r},
p5(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.tz(a,b,r,c)
a.eC.set(r,s)
return s},
tz(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.d1(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.dL(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.bo(null,null)
q.w=6
q.x=b
q.as=c
return A.ci(a,q)},
p4(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.tx(a,b,r,c)
a.eC.set(r,s)
return s},
tx(a,b,c,d){var s,r
if(d){s=b.w
if(A.d1(b)||b===t.K)return b
else if(s===1)return A.eX(a,"b3",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.bo(null,null)
r.w=7
r.x=b
r.as=c
return A.ci(a,r)},
tA(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bo(null,null)
s.w=13
s.x=b
s.as=q
r=A.ci(a,s)
a.eC.set(q,r)
return r},
eW(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
tw(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
eX(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.eW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bo(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ci(a,r)
a.eC.set(p,q)
return q},
nh(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.eW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bo(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ci(a,o)
a.eC.set(q,n)
return n},
p6(a,b,c){var s,r,q="+"+(b+"("+A.eW(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bo(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ci(a,s)
a.eC.set(q,r)
return r},
p3(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.eW(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.eW(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.tw(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bo(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ci(a,p)
a.eC.set(r,o)
return o},
ni(a,b,c,d){var s,r=b.as+("<"+A.eW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ty(a,b,c,r,d)
a.eC.set(r,s)
return s},
ty(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.m9(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.cZ(a,b,r,0)
m=A.dI(a,c,r,0)
return A.ni(a,n,m,c!==m)}}l=new A.bo(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ci(a,l)},
oZ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
p0(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.to(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.p_(a,r,l,k,!1)
else if(q===46)r=A.p_(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.cW(a.u,a.e,k.pop()))
break
case 94:k.push(A.tA(a.u,k.pop()))
break
case 35:k.push(A.eY(a.u,5,"#"))
break
case 64:k.push(A.eY(a.u,2,"@"))
break
case 126:k.push(A.eY(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.tq(a,k)
break
case 38:A.tp(a,k)
break
case 63:p=a.u
k.push(A.p5(p,A.cW(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.p4(p,A.cW(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.tn(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.p1(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.ts(a.u,a.e,o)
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
return A.cW(a.u,a.e,m)},
to(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
p_(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.tE(s,o.x)[p]
if(n==null)A.m('No "'+p+'" in "'+A.rP(o)+'"')
d.push(A.eZ(s,o,n))}else d.push(p)
return m},
tq(a,b){var s,r=a.u,q=A.oY(a,b),p=b.pop()
if(typeof p=="string")b.push(A.eX(r,p,q))
else{s=A.cW(r,a.e,p)
switch(s.w){case 11:b.push(A.ni(r,s,q,a.n))
break
default:b.push(A.nh(r,s,q))
break}}},
tn(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.oY(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.cW(p,a.e,o)
q=new A.hY()
q.a=s
q.b=n
q.c=m
b.push(A.p3(p,r,q))
return
case-4:b.push(A.p6(p,b.pop(),s))
return
default:throw A.b(A.fj("Unexpected state under `()`: "+A.u(o)))}},
tp(a,b){var s=b.pop()
if(0===s){b.push(A.eY(a.u,1,"0&"))
return}if(1===s){b.push(A.eY(a.u,4,"1&"))
return}throw A.b(A.fj("Unexpected extended operation "+A.u(s)))},
oY(a,b){var s=b.splice(a.p)
A.p1(a.u,a.e,s)
a.p=b.pop()
return s},
cW(a,b,c){if(typeof c=="string")return A.eX(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.tr(a,b,c)}else return c},
p1(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cW(a,b,c[s])},
ts(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cW(a,b,c[s])},
tr(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.fj("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.fj("Bad index "+c+" for "+b.n(0)))},
vn(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ae(a,b,null,c,null)
r.set(c,s)}return s},
ae(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.d1(d))return!0
s=b.w
if(s===4)return!0
if(A.d1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ae(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.ae(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.ae(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ae(a,b.x,c,d,e))return!1
return A.ae(a,A.n9(a,b),c,d,e)}if(s===6)return A.ae(a,p,c,d,e)&&A.ae(a,b.x,c,d,e)
if(q===7){if(A.ae(a,b,c,d.x,e))return!0
return A.ae(a,b,c,A.n9(a,d),e)}if(q===6)return A.ae(a,b,c,p,e)||A.ae(a,b,c,d.x,e)
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
if(!A.ae(a,j,c,i,e)||!A.ae(a,i,e,j,c))return!1}return A.pA(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.pA(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.uo(a,b,c,d,e)}if(o&&q===10)return A.ut(a,b,c,d,e)
return!1},
pA(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ae(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.ae(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ae(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ae(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.ae(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
uo(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.eZ(a,b,r[o])
return A.pj(a,p,null,c,d.y,e)}return A.pj(a,b.y,null,c,d.y,e)},
pj(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ae(a,b[s],d,e[s],f))return!1
return!0},
ut(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ae(a,r[s],c,q[s],e))return!1
return!0},
dL(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.d1(a))if(s!==6)r=s===7&&A.dL(a.x)
return r},
d1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
pf(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
m9(a){return a>0?new Array(a):v.typeUniverse.sEA},
bo:function bo(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
hY:function hY(){this.c=this.b=this.a=null},
id:function id(a){this.a=a},
hW:function hW(){},
eV:function eV(a){this.a=a},
tg(){var s,r,q
if(self.scheduleImmediate!=null)return A.uY()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dK(new A.lE(s),1)).observe(r,{childList:true})
return new A.lD(s,r,q)}else if(self.setImmediate!=null)return A.uZ()
return A.v_()},
th(a){self.scheduleImmediate(A.dK(new A.lF(t.M.a(a)),0))},
ti(a){self.setImmediate(A.dK(new A.lG(t.M.a(a)),0))},
tj(a){t.M.a(a)
A.tv(0,a)},
tv(a,b){var s=new A.m2()
s.hL(a,b)
return s},
bu(a){return new A.hR(new A.a4($.a2,a.h("a4<0>")),a.h("hR<0>"))},
bt(a,b){a.$2(0,null)
b.b=!0
return b.a},
an(a,b){A.u0(a,b)},
bs(a,b){b.cg(a)},
br(a,b){b.ci(A.ac(a),A.c0(a))},
u0(a,b){var s,r,q=new A.md(b),p=new A.me(b)
if(a instanceof A.a4)a.e7(q,p,t.z)
else{s=t.z
if(a instanceof A.a4)a.dc(q,p,s)
else{r=new A.a4($.a2,t.e)
r.a=8
r.c=a
r.e7(q,p,s)}}},
bv(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.a2.fZ(new A.mt(s),t.H,t.S,t.z)},
p2(a,b,c){return 0},
iJ(a){var s
if(t.Q.b(a)){s=a.gaQ()
if(s!=null)return s}return B.E},
o5(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.a4($.a2,b.h("a4<z<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.jo(i,h,g,f)
try{for(n=J.H(a),m=t.P;n.l();){r=n.gp()
q=i.b
r.dc(new A.jn(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bg(A.i([],b.h("o<0>")))
return n}i.a=A.bM(n,null,!1,b.h("0?"))}catch(l){p=A.ac(l)
o=A.c0(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.pz(m,k)
m=new A.ao(m,k==null?A.iJ(m):k)
n.bc(m)
return n}else{i.d=p
i.c=o}}return f},
pz(a,b){if($.a2===B.m)return null
return null},
uk(a,b){if($.a2!==B.m)A.pz(a,b)
if(b==null)if(t.Q.b(a)){b=a.gaQ()
if(b==null){A.os(a,B.E)
b=B.E}}else b=B.E
else if(t.Q.b(a))A.os(a,b)
return new A.ao(a,b)},
tk(a,b){var s=new A.a4($.a2,b.h("a4<0>"))
b.a(a)
s.a=8
s.c=a
return s},
nd(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.e;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.rT()
b.bc(new A.ao(new A.bi(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dU(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bk()
b.bf(o.a)
A.dr(b,p)
return}b.a^=2
A.ip(null,null,b.b,t.M.a(new A.lN(o,b)))},
dr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.u,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.nC(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dr(d.a,c)
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
A.nC(j.a,j.b)
return}g=$.a2
if(g!==h)$.a2=h
else g=null
c=c.c
if((c&15)===8)new A.lR(q,d,n).$0()
else if(o){if((c&1)!==0)new A.lQ(q,j).$0()}else if((c&2)!==0)new A.lP(d,q).$0()
if(g!=null)$.a2=g
c=q.c
if(c instanceof A.a4){p=q.a.$ti
p=p.h("b3<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bl(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.nd(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bl(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
uC(a,b){var s
if(t.ng.b(a))return b.fZ(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.b(A.aF(a,"onError",u.c))},
uy(){var s,r
for(s=$.dF;s!=null;s=$.dF){$.fa=null
r=s.b
$.dF=r
if(r==null)$.f9=null
s.a.$0()}},
uJ(){$.ny=!0
try{A.uy()}finally{$.fa=null
$.ny=!1
if($.dF!=null)$.nR().$1(A.pT())}},
pP(a){var s=new A.hS(a),r=$.f9
if(r==null){$.dF=$.f9=s
if(!$.ny)$.nR().$1(A.pT())}else $.f9=r.b=s},
uG(a){var s,r,q,p=$.dF
if(p==null){A.pP(a)
$.fa=$.f9
return}s=new A.hS(a)
r=$.fa
if(r==null){s.b=p
$.dF=$.fa=s}else{q=r.b
s.b=q
$.fa=r.b=s
if(q==null)$.f9=s}},
vO(a,b){A.d_(a,"stream",t.K)
return new A.ib(b.h("ib<0>"))},
nC(a,b){A.uG(new A.mp(a,b))},
pL(a,b,c,d,e){var s,r=$.a2
if(r===c)return d.$0()
$.a2=c
s=r
try{r=d.$0()
return r}finally{$.a2=s}},
uF(a,b,c,d,e,f,g){var s,r=$.a2
if(r===c)return d.$1(e)
$.a2=c
s=r
try{r=d.$1(e)
return r}finally{$.a2=s}},
uE(a,b,c,d,e,f,g,h,i){var s,r=$.a2
if(r===c)return d.$2(e,f)
$.a2=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a2=s}},
ip(a,b,c,d){t.M.a(d)
if(B.m!==c){d=c.j6(d)
d=d}A.pP(d)},
lE:function lE(a){this.a=a},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
lF:function lF(a){this.a=a},
lG:function lG(a){this.a=a},
m2:function m2(){},
m3:function m3(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=!1
this.$ti=b},
md:function md(a){this.a=a},
me:function me(a){this.a=a},
mt:function mt(a){this.a=a},
aX:function aX(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bF:function bF(a,b){this.a=a
this.$ti=b},
ao:function ao(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hT:function hT(){},
eD:function eD(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a4:function a4(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
lK:function lK(a,b){this.a=a
this.b=b},
lO:function lO(a,b){this.a=a
this.b=b},
lN:function lN(a,b){this.a=a
this.b=b},
lM:function lM(a,b){this.a=a
this.b=b},
lL:function lL(a,b){this.a=a
this.b=b},
lR:function lR(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a,b){this.a=a
this.b=b},
lT:function lT(a){this.a=a},
lQ:function lQ(a,b){this.a=a
this.b=b},
lP:function lP(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a
this.b=null},
ib:function ib(a){this.$ti=a},
f5:function f5(){},
i8:function i8(){},
m1:function m1(a,b){this.a=a
this.b=b},
mp:function mp(a,b){this.a=a
this.b=b},
oX(a,b){var s=a[b]
return s===a?null:s},
nf(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ne(){var s=Object.create(null)
A.nf(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
ok(a,b){return new A.b4(a.h("@<0>").C(b).h("b4<1,2>"))},
K(a,b,c){return b.h("@<0>").C(c).h("n3<1,2>").a(A.pV(a,new A.b4(b.h("@<0>").C(c).h("b4<1,2>"))))},
t(a,b){return new A.b4(a.h("@<0>").C(b).h("b4<1,2>"))},
n4(a){return new A.b9(a.h("b9<0>"))},
a0(a){return new A.b9(a.h("b9<0>"))},
bl(a,b){return b.h("ol<0>").a(A.vd(a,new A.b9(b.h("b9<0>"))))},
ng(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
m_(a,b,c){var s=new A.cV(a,b,c.h("cV<0>"))
s.c=a.e
return s},
e2(a,b){var s=J.H(a.a)
if(new A.L(s,a.b,a.$ti.h("L<1>")).l())return s.gp()
return null},
ay(a,b,c){var s=A.ok(b,c)
a.a0(0,new A.k5(s,b,c))
return s},
k6(a,b){var s,r,q=A.n4(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r)q.m(0,b.a(a[r]))
return q},
n5(a,b){var s=A.n4(b)
s.I(0,a)
return s},
rq(a,b){var s=t.bP
return J.nT(s.a(a),s.a(b))},
n6(a){var s,r
if(A.nO(a))return"{...}"
s=new A.as("")
try{r={}
B.a.m($.b0,a)
s.a+="{"
r.a=!0
a.a0(0,new A.k8(r,s))
s.a+="}"}finally{if(0>=$.b0.length)return A.c($.b0,-1)
$.b0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
tF(){throw A.b(A.ah("Cannot change an unmodifiable set"))},
eI:function eI(){},
lU:function lU(a){this.a=a},
eK:function eK(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cS:function cS(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b9:function b9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i1:function i1(a){this.a=a
this.c=this.b=null},
cV:function cV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
D:function D(){},
N:function N(){},
k7:function k7(a){this.a=a},
k8:function k8(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
f_:function f_(){},
df:function df(){},
cd:function cd(a,b){this.a=a
this.$ti=b},
bS:function bS(){},
eT:function eT(){},
ie:function ie(){},
ex:function ex(a,b){this.a=a
this.$ti=b},
dz:function dz(){},
f0:function f0(){},
uz(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ac(r)
q=A.a9(String(s),null,null)
throw A.b(q)}q=A.mf(p)
return q},
mf(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.i_(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.mf(a[s])
return a},
tW(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.qp()
else s=new Uint8Array(o)
for(r=J.bf(a),q=0;q<o;++q){p=r.i(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
tV(a,b,c,d){var s=a?$.qo():$.qn()
if(s==null)return null
if(0===c&&d===b.length)return A.pe(s,b)
return A.pe(s,b.subarray(c,d))},
pe(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
nW(a,b,c,d,e,f){if(B.c.aa(f,4)!==0)throw A.b(A.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a9("Invalid base64 padding, more than two '=' characters",a,b))},
oh(a,b,c){return new A.e7(a,b)},
u6(a){return a.B()},
tl(a,b){return new A.lX(a,[],A.v4())},
tm(a,b,c){var s,r=new A.as(""),q=A.tl(r,b)
q.bL(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
tX(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
i_:function i_(a,b){this.a=a
this.b=b
this.c=null},
lW:function lW(a){this.a=a},
i0:function i0(a){this.a=a},
m8:function m8(){},
m7:function m7(){},
fl:function fl(){},
iO:function iO(){},
cq:function cq(){},
fz:function fz(){},
fH:function fH(){},
e7:function e7(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
h1:function h1(){},
jZ:function jZ(a){this.b=a},
jY:function jY(a){this.a=a},
lY:function lY(){},
lZ:function lZ(a,b){this.a=a
this.b=b},
lX:function lX(a,b,c){this.c=a
this.a=b
this.b=c},
hG:function hG(){},
ln:function ln(a){this.a=a},
m6:function m6(a){this.a=a
this.b=16
this.c=0},
vl(a){var s=A.kt(a,null)
if(s!=null)return s
throw A.b(A.a9(a,null,null))},
r7(a,b){a=A.ab(a,new Error())
if(a==null)a=A.dE(a)
a.stack=b.n(0)
throw a},
bM(a,b,c,d){var s,r=c?J.oc(a,d):J.ob(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
b5(a,b,c){var s,r=A.i([],c.h("o<0>"))
for(s=J.H(a);s.l();)B.a.m(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
U(a,b){var s,r
if(Array.isArray(a))return A.i(a.slice(0),b.h("o<0>"))
s=A.i([],b.h("o<0>"))
for(r=J.H(a);r.l();)B.a.m(s,r.gp())
return s},
ag(a,b){var s=A.b5(a,!1,b)
s.$flags=3
return s},
oz(a,b,c){var s,r
A.hp(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aq(c,b,null,"end",null))
if(s===0)return""}r=A.rV(a,b,c)
return r},
rV(a,b,c){var s=a.length
if(b>=s)return""
return A.rH(a,b,c==null||c>s?s:c)},
oy(a,b,c){var s=J.H(b)
if(!s.l())return a
if(c.length===0){do a+=A.u(s.gp())
while(s.l())}else{a+=A.u(s.gp())
while(s.l())a=a+c+A.u(s.gp())}return a},
hF(){var s,r,q=A.ry()
if(q==null)throw A.b(A.ah("'Uri.base' is not supported"))
s=$.oF
if(s!=null&&q===$.oE)return s
r=A.t1(q)
$.oF=r
$.oE=q
return r},
rT(){return A.c0(new Error())},
qO(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
o1(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fB(a){if(a>=10)return""+a
return"0"+a},
r6(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.aF(b,"name","No enum value with that name"))},
fI(a){if(typeof a=="number"||A.be(a)||a==null)return J.d2(a)
if(typeof a=="string")return JSON.stringify(a)
return A.or(a)},
r8(a,b){A.d_(a,"error",t.K)
A.d_(b,"stackTrace",t.l)
A.r7(a,b)},
fj(a){return new A.fi(a)},
x(a,b){return new A.bi(!1,null,b,a)},
aF(a,b,c){return new A.bi(!0,a,b,c)},
ot(a){var s=null
return new A.di(s,s,!1,s,s,a)},
rI(a,b){return new A.di(null,null,!0,a,b,"Value not in range")},
aq(a,b,c,d,e){return new A.di(b,c,!0,a,d,"Invalid value")},
em(a,b,c){if(0>a||a>c)throw A.b(A.aq(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aq(b,a,c,"end",null))
return b}return c},
hp(a,b){if(a<0)throw A.b(A.aq(a,0,null,b,null))
return a},
jL(a,b,c,d){return new A.fS(b,!0,a,d,"Index out of range")},
ah(a){return new A.ey(a)},
oC(a){return new A.hA(a)},
q(a){return new A.dm(a)},
af(a){return new A.fx(a)},
d9(a){return new A.lJ(a)},
a9(a,b,c){return new A.G(a,b,c)},
rj(a,b,c){var s,r
if(A.nO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.i([],t.s)
B.a.m($.b0,a)
try{A.ux(a,s)}finally{if(0>=$.b0.length)return A.c($.b0,-1)
$.b0.pop()}r=A.oy(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
n0(a,b,c){var s,r
if(A.nO(a))return b+"..."+c
s=new A.as(b)
B.a.m($.b0,a)
try{r=s
r.a=A.oy(r.a,a,", ")}finally{if(0>=$.b0.length)return A.c($.b0,-1)
$.b0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ux(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.u(l.gp())
B.a.m(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.l()){if(j<=4){B.a.m(b,A.u(p))
return}r=A.u(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.l();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.u(p)
r=A.u(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
bP(a,b,c,d){var s
if(B.h===c){s=J.aQ(a)
b=J.aQ(b)
return A.la(A.bT(A.bT($.iu(),s),b))}if(B.h===d){s=J.aQ(a)
b=J.aQ(b)
c=J.aQ(c)
return A.la(A.bT(A.bT(A.bT($.iu(),s),b),c))}s=J.aQ(a)
b=J.aQ(b)
c=J.aQ(c)
d=J.aQ(d)
d=A.la(A.bT(A.bT(A.bT(A.bT($.iu(),s),b),c),d))
return d},
rw(a){var s,r,q=$.iu()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r)q=A.bT(q,J.aQ(a[r]))
return A.la(q)},
na(a,b){return new A.ex(A.n5(a,b),b.h("ex<0>"))},
t1(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.c(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.oD(a4<a4?B.b.A(a5,0,a4):a5,5,a3).gh2()
else if(s===32)return A.oD(B.b.A(a5,5,a4),0,a3).gh2()}r=A.bM(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.pO(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.pO(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.U(a5,"\\",n))if(p>0)h=B.b.U(a5,"\\",p-1)||B.b.U(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.U(a5,"..",n)))h=m>n+2&&B.b.U(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.U(a5,"file",0)){if(p<=0){if(!B.b.U(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.A(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.aM(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.U(a5,"http",0)){if(i&&o+3===n&&B.b.U(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.aM(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.U(a5,"https",0)){if(i&&o+4===n&&B.b.U(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.aM(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.i9(a4<a5.length?B.b.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.tP(a5,0,q)
else{if(q===0)A.dA(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.tQ(a5,c,p-1):""
a=A.tL(a5,p,o,!1)
i=o+1
if(i<n){a0=A.kt(B.b.A(a5,i,n),a3)
d=A.tN(a0==null?A.m(A.a9("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.tM(a5,n,m,a3,j,a!=null)
a2=m<l?A.tO(a5,m+1,l,a3):a3
return A.tG(j,b,a,d,a1,a2,l<a4?A.tK(a5,l+1,a4):a3)},
oH(a){var s=t.N
return B.a.fG(A.i(a.split("&"),t.s),A.t(s,s),new A.lm(B.ag),t.G)},
hE(a,b,c){throw A.b(A.a9("Illegal IPv4 address, "+a,b,c))},
rZ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.c(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.hE("each part must be in the range 0..255",a,r)}A.hE("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.hE(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aP(d)
if(!(k<16))return A.c(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.hE(j,a,q)
p=l}A.hE("IPv4 address should contain exactly 4 parts",a,q)},
t_(a,b,c){var s
if(b===c)throw A.b(A.a9("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.c(a,b)
if(a.charCodeAt(b)===118){s=A.t0(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.oG(a,b,c)
return!0},
t0(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.G(n,a,q)
r=q
break}return new A.G("Unexpected character",a,q-1)}if(r-1===b)return new A.G(n,a,r)
return new A.G("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.G("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.c(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.G("Invalid IPvFuture address character",a,r)}},
oG(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.ll(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.rZ(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cc(l,8)
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
B.aO.hg(s,a0,16,s,a)
B.aO.jC(s,a,a0,0)}}return s},
tG(a,b,c,d,e,f,g){return new A.f1(a,b,c,d,e,f,g)},
p8(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dA(a,b,c){throw A.b(A.a9(c,a,b))},
tN(a,b){var s=A.p8(b)
if(a===s)return null
return a},
tL(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.c(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.c(a,r)
if(a.charCodeAt(r)!==93)A.dA(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.c(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.tI(a,q,r)
if(o<r){n=o+1
p=A.pd(a,B.b.U(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.t_(a,q,o)
l=B.b.A(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.c(a,k)
if(a.charCodeAt(k)===58){o=B.b.bB(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.pd(a,B.b.U(a,"25",n)?o+3:n,c,"%25")}else p=""
A.oG(a,b,o)
return"["+B.b.A(a,b,o)+p+"]"}}return A.tS(a,b,c)},
tI(a,b,c){var s=B.b.bB(a,"%",b)
return s>=b&&s<c?s:c},
pd(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.as(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.nk(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.as("")
l=h.a+=B.b.A(a,q,r)
if(m)n=B.b.A(a,r,r+3)
else if(n==="%")A.dA(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.as("")
if(q<r){h.a+=B.b.A(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.c(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.A(a,q,r)
if(h==null){h=new A.as("")
m=h}else m=h
m.a+=i
l=A.nj(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.A(a,b,c)
if(q<c){i=B.b.A(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
tS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.nk(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.as("")
k=B.b.A(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.A(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.as("")
if(q<r){p.a+=B.b.A(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.dA(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.c(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.A(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.as("")
l=p}else l=p
l.a+=k
j=A.nj(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.A(a,b,c)
if(q<c){k=B.b.A(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
tP(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.c(a,b)
if(!A.pa(a.charCodeAt(b)))A.dA(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.dA(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.A(a,b,c)
return A.tH(q?a.toLowerCase():a)},
tH(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
tQ(a,b,c){return A.f2(a,b,c,16,!1,!1)},
tM(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.f2(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.S(q,"/"))q="/"+q
return A.tR(q,e,f)},
tR(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.S(a,"/")&&!B.b.S(a,"\\"))return A.tT(a,!s||c)
return A.tU(a)},
tO(a,b,c,d){return A.f2(a,b,c,256,!0,!1)},
tK(a,b,c){return A.f2(a,b,c,256,!0,!1)},
nk(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.c(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.c(a,l)
q=a.charCodeAt(l)
p=A.mz(r)
o=A.mz(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.c(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.a1(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.A(a,b,b+3).toUpperCase()
return null},
nj(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.iJ(a,6*p)&63|q
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
o+=3}}return A.oz(s,0,null)},
f2(a,b,c,d,e,f){var s=A.pc(a,b,c,d,e,f)
return s==null?B.b.A(a,b,c):s},
pc(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.c(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.nk(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.dA(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.c(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.nj(n)}if(o==null){o=new A.as("")
k=o}else k=o
k.a=(k.a+=B.b.A(a,p,q))+l
if(typeof m!=="number")return A.is(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.A(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
pb(a){if(B.b.S(a,"."))return!0
return B.b.bA(a,"/.")!==-1},
tU(a){var s,r,q,p,o,n,m
if(!A.pb(a))return a
s=A.i([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.aI(s,"/")},
tT(a,b){var s,r,q,p,o,n
if(!A.pb(a))return!b?A.p9(a):a
s=A.i([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gM(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.k(s,0,A.p9(s[0]))}return B.a.aI(s,"/")},
p9(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.pa(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.A(a,0,s)+"%3A"+B.b.ba(a,s+1)
if(r<=127){if(!(r<128))return A.c(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
tJ(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.c(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.x("Invalid URL encoding",null))}}return r},
nl(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.ag===d)return B.b.A(a,b,c)
else p=new A.fv(B.b.A(a,b,c))
else{p=A.i([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.x("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.x("Truncated URI",null))
B.a.m(p,A.tJ(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}t.I.a(p)
return B.dD.ji(p)},
pa(a){var s=a|32
return 97<=s&&s<=122},
oD(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.i([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a9(k,a,r))}}if(q<0&&r>b)throw A.b(A.a9(k,a,r))
while(p!==44){B.a.m(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.c(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.m(j,o)
else{n=B.a.gM(j)
if(p!==44||r!==n+7||!B.b.U(a,"base64",n+1))throw A.b(A.a9("Expecting '='",a,r))
break}}B.a.m(j,r)
m=r+1
if((j.length&1)===1)a=B.bj.jY(a,m,s)
else{l=A.pc(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aM(a,m,s,l)}return new A.lk(a,j,c)},
pO(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.c(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(){},
T:function T(){},
fi:function fi(a){this.a=a},
bU:function bU(){},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fS:function fS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ey:function ey(a){this.a=a},
hA:function hA(a){this.a=a},
dm:function dm(a){this.a=a},
fx:function fx(a){this.a=a},
he:function he(){},
et:function et(){},
lJ:function lJ(a){this.a=a},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
E:function E(a,b,c){this.a=a
this.b=b
this.$ti=c},
X:function X(){},
A:function A(){},
ic:function ic(){},
as:function as(a){this.a=a},
lm:function lm(a){this.a=a},
ll:function ll(a){this.a=a},
f1:function f1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
hU:function hU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
kf:function kf(a){this.a=a},
a8(a){var s
if(typeof a=="function")throw A.b(A.x("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.im,a)
s[$.dM()]=a
return s},
im(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
nM(a,b,c){return c.a(a[b])},
pw(a,b){return a[b]},
aE(a,b,c,d){return d.a(a[b].apply(a,c))},
pp(a,b,c,d){return d.a(a[b](c))},
bx(a,b){var s=new A.a4($.a2,b.h("a4<0>")),r=new A.eD(s,b.h("eD<0>"))
a.then(A.dK(new A.mT(r,b),1),A.dK(new A.mU(r),1))
return s},
pE(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
c_(a){if(A.pE(a))return a
return new A.mu(new A.eK(t.mp)).$1(a)},
mT:function mT(a,b){this.a=a
this.b=b},
mU:function mU(a){this.a=a},
mu:function mu(a){this.a=a},
hZ:function hZ(){},
ds:function ds(){this.b=this.a=0},
ky:function ky(a,b,c,d,e,f,g){var _=this
_.a=a
_.d=b
_.f=c
_.x=d
_.z=e
_.Q=f
_.as=g},
ho:function ho(a,b){this.a=a
this.b=b},
kw:function kw(){},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(){this.a=null
this.d=0},
kq:function kq(){},
fq:function fq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fK:function fK(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
cx(a,b){return new A.jz(a,b)},
bQ:function bQ(){},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a,b){this.a=a
this.c=b},
hi:function hi(a,b,c){this.b=a
this.d=b
this.e=c},
fh:function fh(a,b){this.a=a
this.b=b},
ea:function ea(){},
bW:function bW(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function lo(){},
eb:function eb(a,b,c){this.a=a
this.b=b
this.d=c},
ki(a){var s,r=t.N,q=A.bl(["sceneColor","present"],r)
if(B.f.u(0,"shadows"))q.I(0,A.bl(["shadowMap","sceneDepth"],r))
if(B.f.u(0,"ssao"))q.I(0,A.bl(["ssaoRaw","ssaoBlurred"],r))
if(B.f.u(0,"bloom"))q.I(0,A.bl(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(B.f.u(0,"dof"))q.I(0,A.bl(["dofBlurH","dofBlurV","dofOutput"],r))
if(B.f.u(0,"grade"))q.m(0,"gradeOutput")
if(B.f.u(0,"ps1"))q.m(0,"ps1Output")
s=B.f.u(0,"vhs")
if(s)q.m(0,"vhsOutput")
return new A.kh(A.na(q,r),s)},
kh:function kh(a,b){this.a=a
this.b=b},
kj:function kj(){},
kr:function kr(a){this.b=a},
hs:function hs(){this.a=null
this.c=0
this.d=!1},
dT:function dT(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c,d,e,f,g,h,i,j){var _=this
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
l9:function l9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
kK:function kK(){},
cI:function cI(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
rr(){return new A.ka(new A.bA(new A.kb(),A.i([],t.dz),A.i([],t.t),t.kk))},
ka:function ka(a){this.a=a},
kb:function kb(){},
pQ(a){var s=4
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
case 3:s=A.m(A.ah("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
u4(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.W[r]
if(A.pQ(q.a)===b)s+=q.c}return s},
rs(a){return new A.kd(a,new A.bA(new A.ke(),A.i([],t.jk),A.i([],t.t),t.ll),A.t(t.S,t.mL))},
hC:function hC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(){},
rW(a){var s=new A.le(a,new A.bA(new A.lf(),A.i([],t.mQ),A.i([],t.t),t.ox),A.t(t.S,t.k))
s.dG()
return s},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function lf(){},
lg:function lg(){},
v0(a){var s,r,q,p,o=A.i([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.w)(a),++q){p=a[q]
B.a.m(o,new A.e1(p,A.i([p],r)))
continue}return o},
e1:function e1(a,b){this.a=a
this.b=b},
jb:function jb(a){this.a=a},
je:function je(){},
jf:function jf(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b
this.c=0},
n7(){return!0},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(){},
km:function km(){},
bI:function bI(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
kS:function kS(){},
dj:function dj(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
dQ:function dQ(a){this.b=a},
ku:function ku(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oo(a,b,c,d,e,f){return new A.kn(d,f,b,c,a)},
kA:function kA(){},
hj:function hj(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e},
kC:function kC(a,b){this.a=a
this.b=b},
kG:function kG(){},
kF:function kF(){},
kE:function kE(a){this.a=a},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a,b){this.a=a
this.b=b},
rM(a){return new A.en(a,new A.bA(new A.kI(),A.i([],t.fS),A.i([],t.t),t.mn))},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b){this.a=a
this.b=b},
kI:function kI(){},
pt(a){var s,r=a.y
r.toString
r=A.i([new A.hP(r,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",new A.mh(a)),new A.hl(r,u.l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",a.a)],t.o5)
a.r.toString
a.as.toString
a.x.gp()
s=new A.jb(r).j9(B.f,new A.kA(),!1,new A.i6())
r=s.a.b
if(r.length!==0)throw A.b(A.q("safe renderer graph is invalid: "+A.u(r)))
a.Q=s},
ua(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="sceneColor",a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.b(A.q("renderer graph is not initialized"))
s=a4.gd1()
r=a5.a
q=A.v6(A.rb(r.c),s,-1).a
p=A.i([],t.mX)
o=A.i([],t.ao)
for(s=q.length,n=t.R,m=r.a,l=t.d,k=0;k<q.length;q.length===s||(0,A.w)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.bE)B.a.m(o,new A.ad(new A.aG(m.h1(B.w).c,h),j,l))
else B.a.m(p,new A.ad(new A.aK(B.db,i.b,i.a,h),j,n))}g=new A.hX(A.v0(A.vz(p)),A.vy(o),r,a5.b)
f=new A.fD(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.w)(s),++k){e=s[k]
d=A.t(n,m)
for(e.gaq(),c=0;c<1;++c){b=a2.c
if(b==null)A.m(A.q("GPU resource adapter is not initialized"))
a=b.b.i(0,a0)
if(a==null)A.m(A.q("resource is not in candidate: sceneColor"))
d.k(0,a0,new A.fp(a))}e.ep(new A.fo(d,f,g))}},
mh:function mh(a){this.a=a},
i6:function i6(){},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kR:function kR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
kY:function kY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
kZ:function kZ(){},
vz(a){var s,r,q=A.U(a,t.R)
B.a.T(q,new A.mY())
s=A.M(q)
r=s.h("W<1,aT>")
s=A.U(new A.W(q,s.h("aT(1)").a(new A.mZ()),r),r.h("a6.E"))
s.$flags=1
return s},
vy(a){var s,r,q=A.U(a,t.d)
B.a.T(q,new A.mW())
s=A.M(q)
r=s.h("W<1,aT>")
s=A.U(new A.W(q,s.h("aT(1)").a(new A.mX()),r),r.h("a6.E"))
s.$flags=1
return s},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c){this.a=a
this.b=b
this.$ti=c},
mY:function mY(){},
mZ:function mZ(){},
mW:function mW(){},
mX:function mX(){},
v6(a,b,c){var s,r,q,p,o,n,m,l=A.i([],t.bH)
for(s=b.$ti,r=new A.aX(b.a(),s.h("aX<1>")),s=s.c,q=0,p=0;r.l();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.b(A.x("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.kn(n)===B.aq){++p
continue}B.a.m(l,o)}return new A.iW(l)},
iW:function iW(a){this.a=a},
iA(a){var s,r,q,p,o,n,m,l,k
for(s=J.H(a),r=B.dG,q=B.dH,p=!1;s.l();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.F(m,k,Math.min(r.c,o))
q=new A.F(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.x("Aabb.fromPoints requires at least one point",null))
return new A.iz(r,q)},
iz:function iz(a,b){this.a=a
this.b=b},
rb(a){var s,r,q,p,o,n,m=a.a,l=new A.jm(),k=m.length
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
return new A.jl(A.i([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
cF:function cF(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
jl:function jl(a){this.a=a},
jm:function jm(){},
om(a){if(a.length!==16)throw A.b(A.x("Mat4.fromColumnMajor requires 16 values",null))
return new A.bO(new Float32Array(A.ck(a)))},
on(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.bO(q)},
bO:function bO(a){this.a=a},
k9:function k9(){},
kx:function kx(){},
lh:function lh(){},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.b=a},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
hu(a,b){return new A.es(a,b)},
fN:function fN(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(){},
cw:function cw(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dY:function dY(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
fD:function fD(a){this.a=a},
hk:function hk(a,b){this.a=a
this.b=b},
jx:function jx(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
dy:function dy(a,b){this.a=a
this.b=b},
ch:function ch(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
fm:function fm(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.w=d},
ak:function ak(a,b){this.a=a
this.b=b},
lA:function lA(){this.a=null},
t6(a){var s=new A.hO(a,B.e,new A.lA())
s.hK(a)
return s},
oM(a,b){var s,r
if(a.b!==B.e)A.m(A.q(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
ta(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
t9(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
oK(a,b){var s
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
t7(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
oL(a,b){var s,r,q,p
if(a.b!==B.e)A.m(A.q(u.k))
s=a.f
r=s.jo(b)
if(r.a===0)return
if(r.u(0,B.a3)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.u(0,B.b1))a.a.depthFunc(A.ta(a,B.bC))
if(r.u(0,B.a4))a.a.depthMask(b.c)
if(r.u(0,B.a5)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.u(0,B.b7))a.a.cullFace(A.t9(a,B.bB))
if(r.u(0,B.b8)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.u(0,B.b4)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.BLEND))}if(r.u(0,B.b5))a.a.blendFunc(A.oK(a,B.bh),A.oK(a,B.bg))
if(r.u(0,B.b6))a.a.blendEquation(A.t7(a,B.bf))
if(r.u(0,B.b2))a.a.colorMask(!0,!0,!0,!0)
if(r.u(0,B.b3)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
t8(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
oO(a,b){var s
if(a.b!==B.e)A.m(A.q(u.k))
s=A.d(b.a)
a.a.useProgram(s)
a.e=s},
eB(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.e)A.m(A.q(u.k))
s=a.e
if(s==null)throw A.b(A.q("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.e(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.mc(c.b))
break
case 1:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
m=p[1]
if(2>=o)return A.c(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 4:r.uniform1i(q,A.a(c.b))
break}},
lx(a,b){if(a.b!==B.e)A.m(A.q(u.k))
a.a.bindVertexArray(A.d(b.a))},
tb(a,b,c){var s,r,q,p,o,n
if(a.b!==B.e)A.m(A.q(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.f4){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.f3){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.q("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.q("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
oN(a,b,c){if(a.b!==B.e)A.m(A.q(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
tc(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
td(a,b){var s,r,q,p
if(a.b!==B.e)A.m(A.q(u.k))
s=a.a
r=A.e(s.createBuffer())
if(r==null)throw A.b(A.q("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.co?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.tc(a,b.b))
return new A.cj(r)},
oP(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
oQ(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
oR(a,b){var s,r,q,p,o
if(a.b!==B.e)A.m(A.q(u.k))
s=a.a
r=A.e(s.createTexture())
if(r==null)throw A.b(A.q("WebGl2Device: gl.createTexture() returned null"))
q=v.G
p=q.WebGL2RenderingContext
o=A.a(p.TEXTURE_2D)
s.bindTexture(o,r)
p=q.WebGL2RenderingContext
A.aE(s,"texStorage2D",[o,1,A.a(p.RGBA8),1,1],t.H)
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.oP(a,B.as))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.oP(a,B.as))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_WRAP_S),A.oQ(a,B.at))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_WRAP_T),A.oQ(a,B.at))
return new A.cj(new A.f4(r,1,1,1,!1))},
oS(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.e)A.m(A.q(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.b(A.x("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.x("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aE(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aE(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
te(a,b){if(a.b!==B.e)A.m(A.q(u.k))
t.fL.a(b.a)
return},
nc(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
oU(a){var s
if(a.b!==B.e)A.m(A.q(u.k))
s=A.e(a.a.createVertexArray())
if(s==null)throw A.b(A.q("WebGl2Device: gl.createVertexArray() returned null"))
return new A.cj(s)},
oT(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.e(p.createShader(b))
if(o==null)throw A.b(A.hu(b===A.nM(A.pw(A.q5(),r),q,t.S)?B.aX:B.aY,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.Z(A.c_(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bd(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.hu(b===A.nM(A.pw(A.q5(),r),q,t.S)?B.aX:B.aY,s))}return o},
tf(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.e)A.m(A.q(u.k))
q=v.G
s=A.oT(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.oT(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.e(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.di)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.Z(A.c_(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bd(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.hu(B.aZ,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.w)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.hu(B.b_,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.e(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.hu(B.b_,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.cj(n)},
cj:function cj(a){this.a=a},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f3:function f3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hO:function hO(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
ly:function ly(a){this.a=a},
lz:function lz(a){this.a=a},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK(a,b){var s=0,r=A.bu(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$iK=A.bv(function(a0,a1){if(a0===1)return A.br(a1,r)
for(;;)switch(s){case 0:p=A.d(new v.G.AudioContext())
o=t.m
n=A.t(t.N,o)
m=A.d(p.createGain())
l=A.d(p.createGain())
k=A.d(p.createGain())
j=A.d(p.createGain())
i=A.d(p.createGain())
h=A.d(p.createGain())
g=A.d(p.createGain())
f=A.d(p.createGain())
e=A.d(p.createGain())
d=A.d(p.createConvolver())
c=new A.fk(p,b,m,l,k,j,i,h,g,f,e,d,n,B.ah,A.t(o,t.iL))
c.hA(p,b)
p=A.n(a).h("R<1,2>")
s=3
return A.an(A.o5(A.h4(new A.R(a,p),p.h("b3<X>(l.E)").a(new A.iL(c)),p.h("l.E"),t.mj),t.P),$async$iK)
case 3:n=n.i(0,"ir-stone")
p=n==null?c.ig():n
d.buffer=p
q=c
s=1
break
case 1:return A.bs(q,r)}})
return A.bt($async$iK,r)},
fk:function fk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
iL:function iL(a){this.a=a},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
jh:function jh(a){this.a=a},
hx:function hx(a,b,c,d,e,f,g,h,i,j){var _=this
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
jt:function jt(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
ju:function ju(a,b){this.a=a
this.b=b},
fR:function fR(a,b){this.a=a
this.b=0
this.$ti=b},
fT:function fT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
h5:function h5(a){this.a=a},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a,b){this.a=a
this.b=b},
ev(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aP(a)
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
eu:function eu(a){this.a=a
this.b=0},
kH:function kH(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
kQ:function kQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rN(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.ow(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.fY(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.i4(new A.k(0,0,0),new A.k(0,0,0),new A.k(0,0,0),new A.k(0,0,0))
r=t.S
q=A.bM(800,0,!1,r)
p=new Float32Array(8064)
o=J.fY(4000,t.hZ)
for(s=0;s<4000;++s)o[s]=new A.i2(new A.k(0,0,0),new A.k(0,0,0),new A.k(0,0,0),new A.k(0,0,0),0,1,0,0,0)
n=A.bM(4000,0,!1,r)
m=new A.k(0.3,0.7,-0.5).ga2()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.kJ(a,new A.jt(a,A.t(t.m,r)),b,c,A.a0(t.N),j,i,h,g,q,p,A.t(r,t.hX),o,n,m,B.cT,new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0),new A.h5(l),a,A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k))
k.hG(a,b,c)
return k},
kJ:function kJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.a7=a
_.ad=b
_.au=c
_.av=d
_.cM=_.fk=1
_.cW=_.cV=_.fF=_.fE=_.fD=_.fC=_.fB=_.fA=_.cU=_.cT=_.cS=_.cR=_.cQ=_.cP=_.cO=_.fz=_.fw=_.fv=_.cN=_.fu=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.a_=$
_.br=null
_.eq=e
_.eS=_.eR=_.eQ=_.eP=_.eO=_.eN=_.eM=_.eL=_.eK=_.eJ=_.eI=_.eH=_.eG=_.eF=_.eE=_.eD=_.eC=_.eB=_.eA=_.ez=_.ey=_.ex=_.ew=_.ev=_.eu=_.es=_.er=_.bs=$
_.bt=0
_.ct=_.cs=_.cr=_.cq=_.cp=_.co=_.cn=$
_.bx=_.bw=_.bv=_.bu=_.b_=_.ar=null
_.b0=$
_.eV=_.eU=_.eT=!1
_.jv=1
_.cu=f
_.cv=g
_.jw=h
_.eW=i
_.by=0
_.eX=j
_.jx=k
_.cw=0
_.cz=l
_.jy=1
_.cA=!1
_.b1=0
_.cB=m
_.b2=0
_.eY=n
_.eZ=o
_.f1=_.f0=_.f_=1
_.f2=0.55
_.cC=p
_.f3=q
_.cD=r
_.cE=s
_.cF=a0
_.f4=_.cJ=_.cI=_.cH=_.cG=0
_.f5=null
_.f6=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.ff=_.cL=_.cK=_.fe=_.fd=_.jB=_.jA=_.jz=_.fc=_.fb=_.fa=_.f9=_.f8=_.f7=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.fg=a7
_.fh=a8
_.fi=a9
_.fj=b0},
pF(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.Y(0,c).ap(f.Y(0,c)).ga2(),r=A.mr(g)
return A.pI(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
fd(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aP(a)
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
pI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.fd(a,A.fd(a,A.fd(a,A.fd(a,A.fd(a,A.fd(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
mr(a){return new A.dx((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
uf(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.cX(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.Y(),i=A.Y(),h=A.Y()
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
h.b=l}s=j.ca()
if(typeof s!=="number")return s.W()
s=B.d.ak(s*255)
r=i.ca()
if(typeof r!=="number")return r.W()
r=B.d.ak(r*255)
q=h.ca()
if(typeof q!=="number")return q.W()
return new A.dx(s,r,B.d.ak(q*255))},
eH:function eH(){},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
i4:function i4(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i2:function i2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kL:function kL(){},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
lC:function lC(){},
l0:function l0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
hH(a,b,c){return new A.k(a,b,c)},
oI(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.k(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
qS(a,b,c){var s=new A.fG(a,c,null,b)
s.hB(a,null,null,b,c)
return s},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
r4(a){var s
if(!t.f.b(a)||typeof a.i(0,"kind")!="string")return null
s=A.e2(new A.J(B.cZ,t.gl.a(new A.j9(a)),t.ns),t.no)
return s==null?null:new A.d8(s)},
r3(a){if(a.a!==21)return null
if(a.e)return B.bG
if(!a.d&&a.b>=0.6&&a.c>=3)return B.bH
return B.bF},
b2:function b2(a,b){this.a=a
this.b=b},
j6:function j6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d8:function d8(a){this.a=a},
j9:function j9(a){this.a=a},
rx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.i(0,f)=="string"?A.B(a.i(0,f)):g
k=a.i(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.hh(s,new A.k(o,n,m),q,p,l,j)
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
hh:function hh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uK(a){var s,r,q,p=A.t(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.l();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.b(B.bQ)
p.k(0,q,r.b)}return p},
io(a){var s,r,q,p,o,n=a.gL().aN(0)
B.a.a4(n)
s=t.z
r=A.t(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.w)(n),++p){o=n[p]
r.k(0,o,A.pr(a.i(0,o)))}return A.d6(r,t.N,s)},
pr(a){var s
if(t.f.b(a))return A.io(A.uK(a))
if(t.j.b(a)){s=t.z
return A.ag(J.nV(a,A.vv(),s),s)}if(a==null||A.be(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.c5)
return a}throw A.b(A.a9("presentation snapshot contains unsupported value "+J.ff(a).n(0),null,null))},
ks:function ks(a){this.a=a},
ox(a,b,c){var s=A.nq(b),r=A.nq(a)
if(c!==2)A.m(A.aF(c,"version","unsupported save version"))
return new A.dk(c,s,r)},
nq(a){var s,r,q,p,o=A.n(a).h("a5<1>"),n=A.U(new A.a5(a,o),o.h("l.E"))
B.a.a4(n)
o=t.z
s=A.t(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.w)(n),++q){p=n[q]
s.k(0,p,A.pq(a.i(0,p)))}return A.d6(s,t.N,o)},
pq(a){var s,r,q,p
if(t.f.b(a)){s=A.t(t.N,t.z)
for(r=a.gO(),r=r.gt(r);r.l();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.b(B.c1)
s.k(0,p,q.b)}return A.nq(s)}if(t.j.b(a)){r=t.z
return A.ag(J.nV(a,A.vx(),r),r)}if(a==null||A.be(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.c6)
return a}throw A.b(A.a9("save contains unsupported value "+J.ff(a).n(0),null,null))},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(){},
cJ:function cJ(a,b){this.a=a
this.b=b},
o6(a,b,c,d,e,f,g){return new A.jp(a,b,c,d,e,f,g,A.i([],t.mc),A.i([],t.ag))},
o7(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.i(0,"houseSeed"),c=e.i(0,"time"),b=e.i(0,"dayLoop"),a=e.i(0,"journal"),a0=e.i(0,"house"),a1=e.i(0,"difficulty")
if(A.aD(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.b(B.c0)
r=e.i(0,"runSeed")
q=A.aD(r)?r:0
p=c.i(0,"day")
o=c.i(0,"hour")
if(!A.aD(p)||p<1||typeof o!="number")throw A.b(B.c9)
if(!isFinite(480))throw A.b(A.aF(480,"daySeconds","must be finite and > 0"))
n=new A.fM(p,480)
if(!isFinite(o)||o<0||o>=24)A.m(A.a9("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.ro(a3,A.ay(a,s,m))
k=A.qP(l,A.ay(b,s,m),n)
j=A.o8(d)
A.re(A.ay(a0,s,m)).j2(j)
m=A.ay(a1,s,m)
i=m.i(0,"scrutiny")
h=m.i(0,"exhaustion")
g=m.i(0,"isolation")
f=m.i(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.be(f))A.m(B.bS)
return A.o6(d,q,j,n,l,k,new A.fF(i,h,g,f))},
u9(a){var s
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
cv:function cv(a,b){this.a=a
this.b=b},
fL:function fL(){},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d,e,f,g,h,i){var _=this
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
jr:function jr(a){this.a=a},
js:function js(){},
fr:function fr(a,b){this.a=a
this.b=b
this.d=null},
iS:function iS(a){this.a=a},
h6:function h6(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jD:function jD(){this.b=0},
kT:function kT(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
vw(a,b,c){var s,r,q=A.nQ(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.da(B.bI,s)}r=A.q3(a,c,b)
if(r!=null)return new A.da(B.bJ,r.at&&!r.ax&&!r.z?"close door":"open door")
if(A.q4(a,c,b)!=null)return B.bN
return B.bM},
ct:function ct(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.c=b},
pU(a,b){var s,r=new A.eu(new Float32Array(5376)),q=new A.eu(new Float32Array(5376)),p=new A.eu(new Float32Array(5376)),o=b.d,n=a.aZ(b),m=o.a,l=o.b,k=o.c,j=n.c,i=k+j,h=n.a,g=m+h
h/=2
j/=2
r.fX(new A.k(m,l,k),new A.k(m,l,i),new A.k(g,l,i),new A.k(g,l,k),11053224,h,j)
l+=n.b
q.fX(new A.k(m,l,k),new A.k(g,l,k),new A.k(g,l,i),new A.k(m,l,i),12632256,h,j)
for(s=0;s<4;++s)A.tY(p,a,b,n,B.cW[s])
return new A.kU(B.u.bT(r.a,0,r.b),B.u.bT(q.a,0,q.b),B.u.bT(p.a,0,p.b))},
tY(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.k?a3.a:a3.c,a=A.i([],t.jX)
for(s=a2.a,r=a1.aA(s),q=J.H(r.a),r=new A.L(q,r.b,r.$ti.h("L<1>"));r.l();){p=q.gp()
if(!p.as&&p.aG(s)===a4)a.push(new A.cg(p.az(s),p.az(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cg(q,q+n.e,p,p+n.f))}}s=t.i
r=A.bl([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.w)(a),++o){m=a[o]
r.I(0,A.i([m.a,m.b],p))}l=A.U(r,r.$ti.c)
B.a.a4(l)
s=A.bl([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.w)(a),++o){m=a[o]
s.I(0,A.i([m.c,m.d],p))}k=A.U(s,s.$ti.c)
B.a.a4(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.c(l,j)
f=l[j]
if(!(i<r))return A.c(l,i)
e=l[i]
if(!(h<s))return A.c(k,h)
d=k[h]
c=k[g]
if(B.a.ab(a,new A.mb(f,e,d,c)))continue
A.uV(a0,a2,a3,a4,f,e,d,c)}},
uV(a,b,c,d,e,f,g,h){var s,r,q,p=null,o=b.d,n=o.a,m=o.b,l=o.c
o=d.a
switch(o){case 0:s=new A.k(n+e,m+g,l)
break
case 2:s=new A.k(n+f,m+g,l+c.c)
break
case 1:s=new A.k(n+c.a,m+h,l+f)
break
case 3:s=new A.k(n,m+h,l+e)
break
default:s=p}switch(o){case 0:r=new A.k(n+f,m+g,l)
break
case 2:r=new A.k(n+e,m+g,l+c.c)
break
case 1:r=new A.k(n+c.a,m+h,l+e)
break
case 3:r=new A.k(n,m+h,l+f)
break
default:r=p}switch(o){case 0:q=new A.k(n+f,m+h,l)
break
case 2:q=new A.k(n+e,m+h,l+c.c)
break
case 1:q=new A.k(n+c.a,m+g,l+e)
break
case 3:q=new A.k(n,m+g,l+f)
break
default:q=p}switch(o){case 0:o=new A.k(n+e,m+h,l)
break
case 2:o=new A.k(n+f,m+h,l+c.c)
break
case 1:o=new A.k(n+c.a,m+g,l+f)
break
case 3:o=new A.k(n,m+g,l+e)
break
default:o=p}a.fY(s,r,q,o,9145227,e/2,(f-e)/2,g/2,(h-g)/2)},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
mb:function mb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o8(a4){var s,r,q,p=null,o="living-room",n="mantle-living",m="the mantle by the door",l="mantle-living-second",k="the mantle by the window",j="hall",i="kitchen",h="mantle-kitchen",g="mantle-bedroom",f="landing",e="landing-bathroom",d="bathroom",c="spare-room",b=t.kl,a=A.i([],b),a0=t.aN,a1=A.i([],a0),a2=A.i([],t.jn),a3=t.N
a3=new A.jC(a,a1,a2,A.t(a3,t.E),A.t(a3,t.gm),new A.jD())
s=t.cJ
r=t.s
q=t.cs
B.a.I(a,A.i([new A.ar(o,new A.k(4.5,2.6,4),new A.k(0,0,0),A.i([new A.aA("living-north-west",B.i,0.5,0.6,1.2,1.2),new A.aA("living-north-east",B.i,2.7,0.6,1.2,1.2)],s),A.i(["hall-living","kitchen-living"],r),A.i([new A.aJ(n,m,new A.k(1,1.3,1),!1,n),new A.aJ(l,k,new A.k(3,1.3,3),!1,l)],q)),new A.ar(j,new A.k(2.5,2.6,7),new A.k(4.5,0,0),A.i([new A.aA("hall-fanlight",B.i,0.85,2.15,0.8,0.35)],s),A.i(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.i([new A.aJ("mantle-hall","the hall mantle",new A.k(1,1.3,3.5),!1,p)],q)),new A.ar(i,new A.k(4.5,2.5,3),new A.k(0,0,4),A.i([new A.aA("kitchen-south",B.k,1.5,0.7,1.2,1.1),new A.aA("kitchen-west",B.z,1,0.8,0.9,1)],s),A.i(["hall-kitchen","kitchen-living"],r),A.i([new A.aJ(h,"the mantle by the stove",new A.k(0.8,1.2,0.5),!1,h),new A.aJ("mantle-kitchen-second",m,new A.k(2.2,1.2,2),!1,p),new A.aJ("mantle-kitchen-third",k,new A.k(3.8,1.2,1.2),!1,p)],q)),new A.ar("cellar",new A.k(4,2,4),new A.k(1,-2,2),B.aI,A.i(["hall-cellar"],r),B.cS),new A.ar("bedroom",new A.k(4.5,2.4,4),new A.k(0,2.8,0),A.i([new A.aA("bedroom-north-west",B.i,0.7,0.7,1.1,1.1),new A.aA("bedroom-north-east",B.i,2.7,0.7,1,1.1)],s),A.i(["landing-bedroom"],r),A.i([new A.aJ(g,"the bedroom mantle",new A.k(1,1.3,1),!1,g),new A.aJ("mantle-bedroom-bedside","the bedside mantle",new A.k(3.5,1,3),!1,p)],q)),new A.ar(f,new A.k(2.5,2.4,3),new A.k(4.5,2.8,0),B.aI,A.i(["hall-landing","landing-bedroom",e,"landing-spare"],r),A.i([new A.aJ("mantle-landing","the landing mantle",new A.k(1,1.2,1.5),!1,p)],q)),new A.ar(d,new A.k(2.5,2.4,2.5),new A.k(4.5,2.8,3),A.i([new A.aA("bathroom-east",B.q,0.9,1,0.7,1)],s),A.i([e],r),A.i([new A.aJ("mantle-bathroom","the bathroom mantle",new A.k(1.5,1.2,1),!1,p)],q)),new A.ar(c,new A.k(4.5,2.1,3),new A.k(0,2.8,4),A.i([new A.aA("spare-south",B.k,1.8,0.7,0.9,0.9)],s),A.i(["landing-spare"],r),A.i([new A.aJ("mantle-spare","the broken mantle",new A.k(2,1.3,1),!0,p)],q))],b))
B.a.I(a1,A.i([A.c8(j,"outside",!0,B.i,B.k,2.1,"front-door",0.8,0,!0,!1,!1,0.9),A.c8(j,o,!1,B.z,B.q,2.1,"hall-living",1.8,1.8,!0,!1,!1,0.9),A.c8(j,i,!1,B.z,B.q,2.1,"hall-kitchen",4.9,1,!0,!1,!1,0.9),A.c8(i,o,!1,B.i,B.k,2.1,"kitchen-living",2,2,!0,!1,!1,0.9),A.c8(j,"cellar",!1,B.k,B.q,2,"hall-cellar",0.5,1.5,!1,!1,!0,0.9),A.c8(j,f,!1,B.q,B.q,2.1,"hall-landing",4,0.7,!0,!0,!1,1.2),A.c8(f,"bedroom",!1,B.z,B.q,2.1,"landing-bedroom",1,1,!0,!1,!1,0.9),A.c8(f,d,!1,B.k,B.i,2.1,e,1,0.8,!0,!1,!1,0.9),A.c8(f,c,!1,B.k,B.i,2.1,"landing-spare",0.1,2,!0,!1,!1,0.9)],a0))
B.a.m(a2,new A.cL("hall-stairs",B.cY,new A.k(5.75,1.65,5.8),new A.k(5.75,4.45,2.2)))
a3.ih()
b=a.length
if(b!==8)A.m(A.q("expected eight rooms, got "+b))
b=a3.gkt()
if(b!==9)A.m(A.q("window discrepancy must be 9 inside / 11 outside"))
B.a.gbR(a2)
b=B.a.gM(B.a.gbR(a2).c)
if(b!==4.2)A.m(A.q("stairs must expose landings at 1.4, 2.8 and 4.2"))
if(a1.length!==9)A.m(A.q("expected nine physical portals"))
a3.iU()
a3.iT()
return a3},
jC:function jC(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
jH:function jH(){},
jG:function jG(){},
jI:function jI(a){this.a=a},
jJ:function jJ(){},
nQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.i(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.w)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.k(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga2()
j=a.b
if(Math.acos(B.d.Z(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
q3(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.aA(c),r=J.H(s.a),s=new A.L(r,s.b,s.$ti.h("L<1>")),q=null,p=3;s.l();){o=r.gp()
n=b.k8(c,o)
m=a.a
l=new A.k(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.py(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
q4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.i(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){n=s[o]
m=A.uW(b,i,n)
l=a.a
k=new A.k(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.py(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
py(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.Z(a.ga2().aY(c.b),-1,1))<=e},
uW(a,b,c){var s=a.aZ(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.k(q.a+r,p,q.c)
break
case 2:q=new A.k(q.a+r,p,q.c+s.c)
break
case 1:q=new A.k(q.a+s.a,p,q.c+r)
break
case 3:q=new A.k(q.a,p,q.c+r)
break
default:q=null}return q},
ja:function ja(){this.a=null
this.b=0},
l1:function l1(){},
l2:function l2(){},
bz:function bz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fQ:function fQ(a){this.a=a},
jE:function jE(a){this.a=a},
c8(a,b,c,d,e,f,g,h,i,j,k,l,m){return new A.cG(g,a,b,d,e,h,i,m,f,l,k,j)},
c2:function c2(a,b){this.a=a
this.b=b},
aA:function aA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=!0},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
aJ:function aJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=d
_.f=e
_.r=!1},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.c=b
_.f=c
_.r=d},
ar:function ar(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
o9(a,b,c,d,e,f){var s=t.N
return new A.jF(e,f,c,a,A.d6(A.ay(d,s,s),s,s),A.ag(b,s))},
oa(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.t(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
h.k(0,p.a,new A.ek(p.at,p.ax))}s=A.t(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.w)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.w)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.t(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.w)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.w)(o),++l){j=o[l]
i.k(0,j.a,new A.e9(j.d,j.r))}return A.o9(a.r.b,B.j,i,B.aL,h,s)},
re(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.i(0,"portals"),a0=a3.i(0,"windows"),a1=a3.i(0,"mantles"),a2=a3.i(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.i(0,"overrides")
if(s==null)s=B.d2
r=a3.i(0,"mantleHistory")
if(r==null)r=B.cR
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aD(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.bZ)
p=t.N
o=A.t(p,t.ku)
for(n=a.gO(),n=n.gt(n),m=t.z;n.l();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.ap)
l=A.ay(q.a(l.b),p,m)
j=l.i(0,"open")
i=l.i(0,"locked")
if(!A.be(j)||!A.be(i))A.m(B.ap)
o.k(0,k,new A.ek(j,i))}h=A.t(p,t.y)
for(n=a0.gO(),n=n.gt(n);n.l();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.be(l.b))throw A.b(B.bX)
h.k(0,k,A.aB(l.b))}g=A.t(p,t.mK)
for(n=a1.gO(),n=n.gt(n);n.l();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.ao)
l=A.ay(q.a(l.b),p,m)
f=l.i(0,"lit")
e=l.i(0,"examined")
if(!A.be(f)||!A.be(e))A.m(B.ao)
g.k(0,k,new A.e9(f,e))}d=A.t(p,p)
for(q=s.gO(),q=q.gt(q);q.l();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.cd)
d.k(0,n,A.B(p.b))}c=A.i([],t.s)
for(q=J.H(r);q.l();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.b(B.bO)
B.a.m(c,b)}return A.o9(a2,c,g,d,o,h)},
nD(a,b){return a.a.a===b.a&&a.a5(0,b.gbp(b))},
jF:function jF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ek:function ek(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
r1(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.k6(e,A.M(e).c)
q=new A.ds()
q.bV((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.dU(a,q,2,r,1+s,A.bl(["time"],t.N))
break
case 3:A.dU(a,q,3,r,1+s,A.bl(["place"],t.N))
break
case 4:A.dU(a,q,4,r,2+s,p)
A.qY(a,q,4)
break
case 5:A.dU(a,q,5,r,s,p)
A.qW(a,q,5)
break
case 6:A.dU(a,q,6,r,s,p)
A.qX(a,q)
A.r0(a,q,6)
break
case 7:A.qZ(a,q,7)
break
default:if(s>0)A.dU(a,q,b,r,s,p)}},
qV(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.u(0,b.a))return!1
if(A.r_(a,b,c))return!1
return!0},
dU(a,b,c,d,e,f){var s,r,q,p,o=A.i([],t.r)
for(s=a.b,s=new A.aa(s,s.r,s.e,A.n(s).h("aa<2>"));s.l();){r=s.d
if(A.qV(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.bQ(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.c(o,p)
A.o3(a,b,o[p],f)}},
o3(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.ay(B.a.gM(o).a,n,n)
if(d==null)s=A.i(B.l.slice(0),t.s)
else{n=t.nn
s=A.U(new A.J(B.l,t.gS.a(new A.j5(d)),n),n.h("l.E"))}n=s.length
if(n===0)return
n=b.a6(n)
if(!(n>=0&&n<s.length))return A.c(s,n)
r=s[n]
q=m.i(0,r)
if(q==null)q=""
p=a.a.dn(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.a6(n)
if(!(n>=0&&n<p.length))return A.c(p,n)
m.k(0,r,p[n])}a.ck(c.a,m,B.a.gM(o).b)},
qY(a,b,c){var s=A.o4(a,b,c)
if(!a.aW(s))return
a.dv(c,t.G.a(s),0,B.U,null)},
o4(a,b,c){var s,r,q,p,o,n=t.N,m=A.t(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.l[s]
q=n.i(0,r)
if(q==null)q=B.j
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.a6(p)
if(!(o>=0&&o<p))return A.c(q,o)
m.k(0,r,q[o])}}return m},
qW(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.i([],t.r)
for(s=a.b,s=new A.aa(s,s.r,s.e,A.n(s).h("aa<2>"));s.l();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.bQ(i,b)
s=i.length
if(0>=s)return A.c(i,0)
q=i[0]
if(1>=s)return A.c(i,1)
p=i[1]
i=q.c
s=t.N
o=A.ay(B.a.gM(i).a,s,s)
r=p.c
n=A.ay(B.a.gM(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.l[m]
k=o.i(0,l)
j=s.dn(l,k==null?"":k)
k=j.length
if(k!==0){k=b.a6(k)
if(!(k>=0&&k<j.length))return A.c(j,k)
o.k(0,l,j[k])}}a.ck(q.a,o,B.a.gM(i).b)
a.ck(p.a,n,B.a.gM(r).b)},
qX(a,b){var s,r,q=A.i([],t.r)
for(s=a.b,r=new A.aa(s,s.r,s.e,A.n(s).h("aa<2>"));r.l();)q.push(r.d)
r=q.length
if(r===0)return
r=b.a6(r)
if(!(r>=0&&r<q.length))return A.c(q,r)
s.ai(0,q[r].a)},
r0(a,b,c){var s,r,q=A.i([],t.r)
for(s=a.b,s=new A.aa(s,s.r,s.e,A.n(s).h("aa<2>"));s.l();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.a6(s)
if(!(s>=0&&s<q.length))return A.c(q,s)
A.o3(a,b,q[s],null)},
qZ(a,b,c){var s=c+1,r=A.o4(a,b,s)
if(!a.aW(r))return
a.dv(s,t.G.a(r),0,B.U,null)},
r_(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gM(b.c).c===B.G}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gM(b.c).c===B.G}if(c===21)return b.e
return!1},
j5:function j5(a){this.a=a},
t5(a){var s,r,q,p,o=t.N,n=A.t(o,t.a)
for(s=0;s<5;++s){r=B.l[s]
q=a.i(0,r)
p=A.b5(q==null?B.j:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.lw(n)},
k1(a,b,c){var s,r,q,p=t.z
p=A.t(p,p)
for(s=0;s<5;++s){r=B.l[s]
q=a.i(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.h3(A.d6(p,q,q),b,c)},
oj(a){var s=t.N
return A.k1(t.b.a(a.i(0,"fields")).aJ(0,new A.k2(),s,s),A.il(a.i(0,"shakiness")),A.r6(B.cN,A.B(a.i(0,"hand")),t.bU))},
r5(a){var s,r,q,p,o=a.i(0,"margin"),n=A.a(a.i(0,"ordinal")),m=A.a(a.i(0,"day")),l=A.i([],t.b1)
for(s=J.H(t.j.a(a.i(0,"revisions"))),r=t.b;s.l();)l.push(A.oj(r.a(s.gp())))
s=A.bd(a.i(0,"corroborator"))
q=A.aB(a.i(0,"locked"))
p=A.pm(a.i(0,"lastReadDay"))
return new A.aR(n,m,l,s,q,p,o==null?null:A.oj(r.a(o)))},
c3:function c3(a,b){this.a=a
this.b=b},
lw:function lw(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(){},
k3:function k3(a){this.a=a},
aR:function aR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
og(a){return new A.jP(a,A.t(t.S,t.L),A.a0(t.N),A.i([],t.t))},
ro(a,b){var s,r,q,p,o=A.og(a)
o.e=A.a(b.i(0,"nextOrdinal"))
o.f=A.a(b.i(0,"locksRemaining"))
s=t.j
o.c.I(0,J.qx(s.a(b.i(0,"tags")),t.N))
for(s=J.H(s.a(b.i(0,"entries"))),r=t.b,q=o.b;s.l();){p=A.r5(r.a(s.gp()))
q.k(0,p.a,p)}return o},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
jW:function jW(a,b){this.a=a
this.b=b},
iM:function iM(){},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(){},
k0:function k0(){},
k_:function k_(a){this.d=a},
kp:function kp(){},
ko:function ko(a,b){this.b=a
this.c=b},
ou(a){if(!isFinite(0))A.m(A.aF(0,"interpolation",null))
return new A.kP(a)},
eo:function eo(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
kP:function kP(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
mg(a){var s=B.d1.i(0,a)
return s.length===0?null:s},
kO:function kO(a,b,c,d,e,f,g,h,i,j){var _=this
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
o2(a,b,c,d,e,f,g){var s=A.U(f,t.ad)
if(b<0||a<0||e<0)A.m(A.a9("saved day-loop resources must not be negative",null,null))
return new A.iX(c,g,b,a,e,d===!0,s)},
qP(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.i(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.bV)
s=A.i([],t.b2)
for(r=J.H(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.l();){j=r.gp()
if(!k.b(j))throw A.b(B.c_)
i=j.i(0,"day")
h=j.i(0,"quality")
g=j.i(0,"location")
if(!A.aD(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.bU)
f=A.e2(new A.J(B.aE,q.a(new A.iY(h)),p),o)
e=A.e2(new A.J(B.aJ,n.a(new A.iZ(g)),m),l)
if(f==null||e==null)throw A.b(B.cb)
B.a.m(s,new A.dl(i,f,e))}d=a2.i(0,"hoursRemaining")
c=a2.i(0,"gasRemaining")
b=a2.i(0,"rationCoupons")
a=a2.i(0,"rationCollectedToday")
if(!A.aD(d)||!A.aD(c)||!A.aD(b)||!A.be(a))throw A.b(B.c2)
return A.o2(c,d,a1,a,b,s,a3)},
aL:function aL(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
fU:function fU(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
lB:function lB(a,b){this.b=a
this.c=b},
cP:function cP(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
jK:function jK(a){this.c=a},
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(){},
ow(){var s=A.nw(B.j),r=A.nw(B.j),q=new A.kW(B.o,s,r)
if(!isFinite(0))A.m(B.bP)
if(!B.a.a5(r,B.a.gbp(s)))A.m(B.c3)
if(q.a===B.o&&q.b!==0&&!q.e)A.m(B.bR)
return q},
nw(a){var s,r,q,p=A.i([],t.s),o=A.a0(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.m(0,q))throw A.b(B.ca)
B.a.m(p,q)}return p},
b7:function b7(a,b){this.a=a
this.b=b},
kV:function kV(){},
bB:function bB(){},
kW:function kW(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
fM:function fM(a,b){this.a=a
this.b=6
this.c=b},
q6(a){var s=B.d.Z(a,0,1)
if(s<=0.5)return A.pD(4491468,16777215,s*2)
return A.pD(16777215,16759637,(s-0.5)*2)},
q7(a){var s=B.d.Z(a,0,1)
return new A.k(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga2()},
pD(a,b,c){var s,r=new A.ml(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.hj()
s=r.$1(8)
if(typeof s!=="number")return s.hj()
r=r.$1(0)
if(typeof r!=="number")return A.is(r)
return(q<<16|s<<8|r)>>>0},
ml:function ml(a,b,c){this.a=a
this.b=b
this.c=c},
dn(a){var s,r,q=A.t(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.l();){r=s.gp()
q.k(0,B.c.n(r.a),r.b)}return q},
l5:function l5(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
l6:function l6(){},
l7:function l7(){},
cO:function cO(a,b){this.a=a
this.b=b},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a,b){this.a=a
this.b=b},
lb:function lb(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
lc:function lc(){},
ld:function ld(){},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
iP:function iP(a){this.a=a
this.b=null},
qT(a){var s=A.i([],t.W)
s=new A.j0(A.P(a,"div","door",null),s)
s.hC(a)
return s},
j0:function j0(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(a){this.a=a},
j3:function j3(a,b){this.a=a
this.b=b},
r2(a){var s=new A.j7(a,A.d(a.createElement("div")))
s.bb(a)
s.hD(a)
return s},
j7:function j7(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
j8:function j8(a){this.a=a},
rd(a){var s=new A.jA(a,A.d(a.createElement("div")))
s.bb(a)
s.hE(a)
return s},
jA:function jA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
jB:function jB(a){this.a=a},
jQ:function jQ(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(){},
jV:function jV(){},
P(a,b,c,d){var s=A.d(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
pu(a){var s,r,q,p=A.d(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.i([],t.W)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.e(p.item(r))
if(s.b(q))B.a.m(o,q)}return o},
ej:function ej(){},
kv:function kv(a){this.a=a
this.b=null},
rQ(a){var s=new A.l3(a,A.d(a.createElement("div")))
s.bb(a)
s.hJ(a)
return s},
l3:function l3(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
l4:function l4(a,b,c){this.a=a
this.b=b
this.c=c},
qD(a){var s,r,q,p,o,n,m,l,k,j,i=A.i([],t.od)
for(s=a.d,s=new A.R(s,A.n(s).h("R<1,2>")).gt(0),r=a.b;s.l();){q=s.d
p=q.a
o=r.i(0,p)
o.toString
for(n=q.b.gO(),n=n.gt(n),p+=":";n.l();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.i(0,m).i(0,k)
j.toString
B.a.m(i,new A.bh(p+m+":"+k,m,l.a,l.b,j))}}B.a.T(i,new A.iF())
return new A.iE(A.ag(i,t.h),A.a0(t.N))},
bh:function bh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iE:function iE(a,b){this.a=a
this.b=b},
iG:function iG(){},
iF:function iF(){},
t4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.ec
s=t.g
r=A.t(s,t.kz)
q=A.n(e).h("a5<1>")
p=A.U(new A.a5(e,q),q.h("l.E"))
B.a.a4(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.w)(p),++l){k=p[l]
for(j=e.i(0,k).gO(),j=j.gt(j);j.l();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.aN(new A.aW(B.dZ,k+" has an out-of-range authored day "+h+"."))
g=A.t3(k,h,i.b,m)
if(g instanceof A.aN)return g
i=n.i(0,k)
f=i==null?null:i.i(0,h)
if(f==null)continue
r.k(0,new A.aM(k,h,f.a,f.b),o.a(g).a)}}return new A.hM(new A.hL(r,A.a0(t.N),A.a0(s),A.i([],t.bl),B.f))},
t3(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.t(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.aD[p]
n=o.b
m=n+"."
l=A.i([],q)
for(k=a0.gO(),k=k.gt(k),j=m.length;k.l();){i=k.gp()
h=i.a
if(!B.b.S(h,m))continue
g=A.kt(B.b.ba(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.aN(new A.aW(B.e_,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.i(0,r+h)
if(f==null)f=B.aH
B.a.m(l,new A.b8(g,i.b,f))}if(l.length===0)continue
B.a.T(l,new A.lq())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.aN(new A.aW(B.bb,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.aN(new A.aW(B.bb,a+" day "+s+" has no authored tiers."))
return new A.i3(c)},
hL:function hL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
lu:function lu(a){this.a=a},
lt:function lt(a){this.a=a},
lr:function lr(a){this.a=a},
ls:function ls(){},
lq:function lq(){},
hM:function hM(a){this.a=a},
i3:function i3(a){this.a=a},
va(a){var s,r,q,p=A.a0(t.N)
for(s=new A.R(a,A.n(a).h("R<1,2>")).gt(0);s.l();){r=s.d
for(q=r.b.ga9(),q=q.gt(q);q.l();)if(q.gp().gL().ab(0,new A.mx())){p.m(0,r.a)
break}}s=A.U(p,p.$ti.c)
B.a.a4(s)
return s},
v9(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.j
s=t.N
r=A.b5(b,!0,s)
B.a.a4(r)
q=new A.ds()
q.bV((a^913741)>>>0)
p=q.a6(4)
if(!(p>=0&&p<4))return A.c(B.aC,p)
o=B.aC[p]
n=r.length
n=o>n?n:o
if(n===0)return B.j
m=A.b5(r,!0,s)
B.a.bQ(m,q)
s=A.l8(m,0,A.d_(n,"count",t.S),A.M(m).c).aN(0)
B.a.a4(s)
return s},
mx:function mx(){},
oJ(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.i(0,"visitor")
r=a.i(0,"day")
q=a.i(0,"hour")
p=a.i(0,"order")
if(typeof s!="string"||!A.aD(r)||!A.aD(q)||!A.aD(p)||r<1||q<0||q>23||p<0)return null
return new A.aM(s,r,q,p)},
t2(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.i(0,k))||!s.b(a.i(0,j))}else s=!0
if(s)return i
r=A.a0(t.N)
for(s=t.j,q=J.H(s.a(a.i(0,k)));q.l();){p=q.gp()
if(typeof p!="string")return i
r.m(0,p)}o=A.a0(t.g)
for(s=J.H(s.a(a.i(0,j)));s.l();){n=A.oJ(s.gp())
if(n==null)return i
o.m(0,n)}m=a.i(0,"active")
s=m==null
l=s?i:A.qC(m)
if(!s&&l==null)return i
return new A.hN(r,o,l)},
qC(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.oJ(a.i(0,"arrival"))
r=a.i(0,"tier")
q=a.i(0,"phase")
p=a.i(0,"lineIndex")
o=a.i(0,"choice")
n=a.i(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aD(p))if(!(p<0))if(A.be(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.e2(new A.J(B.aD,t.nw.a(new A.iB(r)),t.na),t.kM)
k=A.e2(new A.J(B.d0,t.bQ.a(new A.iC(q)),t.cB),t.nq)
m=o==null
j=m?h:A.e2(new A.J(B.cK,t.hg.a(new A.iD(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.fg(s,l,k,p,j,n)},
aH:function aH(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bE:function bE(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.b=b},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
lp:function lp(){},
fg:function fg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
lv:function lv(){},
aN:function aN(a){this.a=a},
hJ:function hJ(a){this.a=a},
hI:function hI(a){this.a=a},
ez:function ez(a,b){this.a=a
this.b=b},
mE(){var s=0,r=A.bu(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$mE=A.bv(function(c7,c8){if(c7===1){o.push(c8)
s=p}for(;;)switch(s){case 0:c3=v.G
c4=A.e(A.d(c3.document).getElementById("game"))
if(c4==null){s=1
break}$.a3.b=c4
$.nv=A.e(A.d(c3.document).getElementById("fps"))
$.aY.b=$.qq().hd(A.hF().gaK().i(0,"renderer"))
A.ug()
a6=$.a3.j()
a7=A.a(A.d(c3.window).innerWidth)>0?A.a(A.d(c3.window).innerWidth):800
a6.width=a7
a7=$.a3.j()
a6=A.a(A.d(c3.window).innerHeight)>0?A.a(A.d(c3.window).innerHeight):600
a7.height=a6
n=A.e(c4.getContext("webgl2"))
if(n==null){$.aY.b=new A.d3(B.I,$.aY.j().b,!0,"webgl2 unavailable")
h=B.Q.ei($.aY.j())
h.bC()
$.dD.b=h
A.pH(B.cI)
A.cm("no-webgl2")
c3=A.e(A.d(c3.document).getElementById("credits"))
if(c3!=null)c3.textContent="this browser has no webgl2."
s=1
break}try{if($.aY.j().a===B.A){a6=t.N
a8=new A.i5(n,A.a($.a3.j().width),A.a($.a3.j().height),A.i([],t.dg),A.i([],t.jj),A.t(a6,t.i1),A.t(a6,t.p9),B.ce)}else a8=null
m=a8
$.fc=m
a6=B.Q.ej($.aY.j(),m)
a6.bC()
$.dD.b=a6}catch(c6){l=A.ac(c6)
$.aY.b=new A.d3(B.I,!0,!0,"pixeldart initialization failed")
a6=$.aY.j()
a6=B.Q.ei(a6)
a6.bC()
$.dD.b=a6
$.a3.j().setAttribute("data-renderer-error",A.u(l))}a6=$.fc
b0=a6==null?null:a6.gja()
A.pH(b0==null||b0.length===0?B.d_:b0)
p=4
A.cm("initializing")
$.bc.b=new A.iR(new A.k(0,0,0),new A.k(0,0,1),new A.k(0,1,0),new A.k(1,0,0))
a6=$.bc.j()
a6.f=A.aB(A.d(A.d(c3.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)?0.5:1
a6=A.d(c3.window)
a7=t.N
b1=A.d(a6.document)
b2=new A.fT(b1,A.a0(a7),A.a0(a7))
a6.addEventListener("keydown",A.a8(b2.gio()))
a6.addEventListener("keyup",A.a8(b2.giq()))
a6.addEventListener("mousemove",A.a8(b2.giu()))
b1.addEventListener("pointerlockchange",A.a8(b2.gis()))
$.aZ.b=b2
$.ph.b=new A.fR(A.i([],t.oX),t.lv)
b2=$.a3.j()
a6=A.a(A.d(c3.window).innerWidth)>0?A.a(A.d(c3.window).innerWidth):800
b2.width=a6
a6=$.a3.j()
b1=A.a(A.d(c3.window).innerHeight)>0?A.a(A.d(c3.window).innerHeight):600
a6.height=b1
A.cm("renderer")
if($.aY.j().a===B.I){a6=$.dG=A.rN(n,A.a($.a3.j().width),A.a($.a3.j().height))
b1=A.hF().gaK().i(0,"render")
b2=A.hF().gaK().i(0,"render")
b3=A.hF().gaK().i(0,"render")
a6.eT=b1==="legacy"
a6.eU=b2==="legacy"
a6.eV=b3==="legacy"}A.cm("text")
a6=$.ix()
s=7
return A.an(a6.b6(),$async$mE)
case 7:k=a6.ks()
j=A.t4(k)
if(!(j instanceof A.hM)){i=t.cq.a(j).a
h=i.b
throw A.b("Failed to build visitors: "+h)}$.am.b=j.a
$.ih.b=A.qD(k)
h=A.t(a7,t.a)
for(b1=t.j,b4=0;b4<5;++b4){g=B.l[b4]
b2=A.B(g)
b3=a6.c
b3===$&&A.h()
b5=b3.i(0,b2)
b2=b1.b(b5)?A.b5(b5,!0,a7):B.j
J.by(h,g,b2)}f=A.t5(h)
$.no.b=new A.iQ(B.by)
e=$.no.j().ka(new A.mF(f))
if(e.a==null){h=B.ah.a6(2147483647)
if(!isFinite(480))A.m(A.aF(480,"daySeconds","must be finite and > 0"))
b6=new A.fM(1,480)
b6.b=10
b7=A.og(f)
h=A.o6(42,1+h,A.o8(42),b6,b7,A.o2(6,16,b7,null,6,B.cO,b6),new A.fF(0,0,0,!1))}else{h=e.a
h.toString
h=A.o7(h,f)}$.S.b=h
$.dD.j().bU(A.ou($.S.j().gfV()))
if(e.b!=null){h=e.b
h.toString
A.dH(h)}h=$.am.j()
a6=A.v9($.S.j().b,A.va(k.b))
h.shu(A.k6(a6,A.M(a6).c))
A.cm("house")
$.a7.b=$.S.j().c
a6=$.fc
if(a6!=null)a6.j3($.a7.j())
$.cX.b=$.S.j().d
h=new A.k(5.5,1.65,3.5)
$.nI=$.nB=$.nG=h
d=h.Y(0,new A.k(0,1.3499999999999999,0))
$.f7.b=new A.fr(d,J.nS(d,new A.k(0,1.2000000000000002,0)))
$.dB.b=new A.ja()
$.bq.b=A.ow()
$.aC="hall"
h=e.a
c=A.rx(h==null?null:h.c.i(0,"player"))
if(c!=null&&c.jM($.a7.j())){h=c.b
$.nI=$.nB=$.nG=h
$.bG=c.c
$.cY=c.d
$.aC=c.a
b=h.Y(0,new A.k(0,1.3499999999999999,0))
h=$.f7.j()
h.sj4(b)
h.b=J.nS(b,new A.k(0,1.2000000000000002,0))
h=$.f7.j()
a6=$.a7.j()
b2=c.e
b3=c.f
h.ki($.aC,$.dN(),a6,b3,b2)
A.dH("restored position")}h=$.S.j().e
a6=$.cX.j()
$.S.j()
$.ij.b=new A.jM(h,a6)
a6=A.d(c3.document)
h=$.S.j().e
b2=$.cX.j()
b3=$.ij.j()
b8=A.d(a6.createElement("div"))
b3=new A.jQ(h,b2,b3,a6,b8)
b3.bb(a6)
A.d(b8.appendChild(A.P(a6,"div","journal-title","The Journal")))
b9=A.P(a6,"div","journal-pages",null)
b2=A.P(a6,"div","page page-left",null)
b3.y!==$&&A.v()
b3.y=b2
h=A.P(a6,"div","page page-right",null)
b3.z!==$&&A.v()
b3.z=h
A.d(b9.appendChild(b2))
A.d(b9.appendChild(h))
A.d(b8.appendChild(b9))
A.d(b8.appendChild(b3.hQ()))
c0=A.P(a6,"div","tape-roll",null)
A.d(c0.style).setProperty("width","8rem")
h=A.P(a6,"div","tape-fill",null)
b3.as!==$&&A.v()
b3.as=h
A.d(c0.appendChild(h))
A.d(b8.appendChild(c0))
c1=A.P(a6,"div","consult",null)
A.d(c1.appendChild(A.P(a6,"div","consult-label","Cite an entry")))
h=A.P(a6,"div","entry-picker",null)
b3.at!==$&&A.v()
b3.at=h
b2=A.P(a6,"div","consult-result",null)
b3.ax!==$&&A.v()
b3.ax=b2
A.d(c1.appendChild(h))
A.d(c1.appendChild(b2))
A.d(b8.appendChild(c1))
c2=A.e(a6.documentElement)
if(t.m.b(c2)){A.d(c2.style).setProperty("--shake-max-deg","3deg")
A.d(c2.style).setProperty("--shake-max-px","2px")}$.dC.b=b3
$.dC.j().sbH(new A.mG())
h=A.d(c3.document)
a6=A.P(h,"div","prompt",null)
A.d(a6.style).setProperty("transition-duration","0.3s")
A.d(A.e(h.body).appendChild(a6))
$.pi.b=new A.kv(a6)
a6=A.d(c3.document)
h=A.P(a6,"div","broadcast",null)
A.d(A.e(a6.body).appendChild(h))
$.pg.b=new A.iP(h)
h=A.d(c3.document)
a6=A.P(h,"div","ambient-notice",null)
A.d(A.e(h.body).appendChild(a6))
$.nm.b=new A.iH(a6)
a6=A.qT(A.d(c3.document))
a6.sjZ(A.vp())
a6.sk0(A.vr())
a6.sk_(A.vq())
$.al.b=a6
a6=e.a
a=A.t2(a6==null?null:a6.c.i(0,"visitors"))
if(a!=null&&$.am.j().kh(a))A.uD()
h=$.ih.j()
a6=e.a
h.kj(a6==null?null:a6.c.i(0,"ambient"))
h=e.a
a0=h==null?null:h.c.i(0,"unverifiables")
if(b1.b(a0))for(h=J.H(a0);h.l();){a1=h.gp()
if(A.aD(a1))$.ms.m(0,a1)}h=A.rQ(A.d(c3.document))
h.sk6(new A.mH())
h.sbH(new A.mK())
$.ik.b=h
h=A.rd(A.d(c3.document))
h.sbH(new A.mL())
$.ii.b=h
h=A.r2(A.d(c3.document))
h.sbH(new A.mM())
h.sk5(new A.mN())
$.nn.b=h
h=e.a
a2=A.r4(h==null?null:h.c.i(0,"ending"))
if(a2!=null)A.pG(a2)
a3=$.dG
if(a3!=null){A.cm("world")
h=$.a7.j()
a6=a3
a7=new A.kT(h,a6,A.t(a7,t.I))
a7.hI(h,a6)
$.nt=a7}h=B.b.u(A.B(A.d(A.d(c3.window).location).search),"shaders=live")
$.pR=h
if(h){h=$.dG
if(h!=null)h.aL()}A.pJ()
A.d(c3.window).addEventListener("resize",A.a8(new A.mO()))
A.d(c3.window).addEventListener("keydown",A.a8(new A.mP()))
A.d(c3.window).addEventListener("keyup",A.a8(new A.mQ()))
A.d(c3.window).addEventListener("keydown",A.a8(new A.mR()))
A.d(c3.window).addEventListener("click",A.a8(new A.mI()))
$.a3.j().addEventListener("click",A.a8(new A.mJ()))
A.fb()
A.cm("raf")
A.a(A.d(c3.window).requestAnimationFrame(A.a8(A.q_())))
p=2
s=6
break
case 4:p=3
c5=o.pop()
a4=A.ac(c5)
a5=A.c0(c5)
A.mn(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$mE,r)},
ug(){var s=v.G
A.d(s.window).addEventListener("error",A.a8(new A.mj()))
A.d(s.window).addEventListener("unhandledrejection",A.a8(new A.mk()))},
cm(a){if($.po===a)return
$.po=a
$.a3.j().setAttribute("data-boot-phase",a)},
pH(a){var s,r="1b82fc18c0b0-b201e5b993d4-dirty",q=$.aY.j().a.b,p=$.aY.j().a===B.A?"safe":"legacy",o=$.aY.j().c,n=$.aY.j().d,m=A.mg("RENDERER_SHA"),l=A.mg("GAME_SHA"),k=A.mg("DART_SDK_VERSION"),j=A.mg("LOCKFILE_SHA256"),i=A.k6(a,A.M(a).c)
i=A.U(i,A.n(i).c)
B.a.a4(i)
s=new A.kO(q,p,r,A.ag(i,t.N),m,l,k,j,o,n)
s.hH(q,r,a,o,n,l,j,p,m,k)
p=$.a3.j()
n=A.hF().gaK().i(0,"renderer")
if(n==null)n="legacy"
p.setAttribute("data-renderer-request",n)
p.setAttribute("data-renderer-backend",q)
p.setAttribute("data-renderer-fallback",String(o))
p.setAttribute("data-renderer-diagnostics",B.p.aF(s.B(),null))},
nE(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bq.j().a!==B.o){A.dH("save unavailable during rupture")
return}try{r=$.no.j()
q=$.S.j()
p=t.N
o=t.z
s=A.t(p,o)
n=$.aC
m=$.dN()
l=$.bG
k=$.cY
j=$.f7.j().d
j=j==null?null:j.a.a
i=$.f7.j().d
J.by(s,"player",new A.hh(n,m,l,k,j,i==null?null:i.b).B())
n=$.am.j()
m=A.na(n.b,p)
l=A.na(n.c,t.g)
n=n.e
J.by(s,"visitors",new A.hN(m,l,n==null?null:new A.fg(n.a,n.b,n.d,n.f,n.e,n.r)).B())
n=$.ih.j().b
n=A.U(n,A.n(n).c)
B.a.a4(n)
J.by(s,"ambient",n)
n=A.U($.ms,A.n($.ms).c)
B.a.a4(n)
J.by(s,"unverifiables",n)
n=$.nu
if(n!=null)J.by(s,"ending",A.K(["kind",n.a.b],p,p))
s=t.b.a(s)
n=q.a
m=q.b
l=A.oa(q.c).B()
k=q.d
r.ku(A.ox(s,A.K(["houseSeed",n,"runSeed",m,"house",l,"time",A.K(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B()],p,o),2))
A.dH(a)}catch(h){A.dH("save failed")}},
dH(a){var s=v.G,r=A.e(A.d(s.document).getElementById("save-status"))
if(r==null)return
r.textContent=a
r.className="visible"
A.a(A.d(s.window).setTimeout(A.a8(new A.mq(r)),2400))},
mn(a,b){var s,r,q,p
A.cm("error")
s=A.u(a)
r=A.vB(s,"\n"," ")
s=$.nv
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.e(A.d(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.u(a):A.u(a)+"\n"+b.n(0)
$.a3.j().setAttribute("data-boot-error",p)
A.d(s.console).error(p)},
pk(){if($.np)return
$.np=!0
var s=$.f8
if(s!=null)s.h_()
B.a.m($.cl,"arm")},
fb(){var s=0,r=A.bu(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fb=A.bv(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=null
q=3
s=6
return A.an(A.bx(A.d(A.d(v.G.window).fetch("res/manifest.json")),t.m),$async$fb)
case 6:o=b
i=A
s=7
return A.an(A.bx(A.d(o.json()),t.X),$async$fb)
case 7:k=i.d(b)
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
if(l!=null&&typeof l==="string"){m=A.e(A.d(v.G.document).getElementById("credits"))
if(m!=null)m.textContent=A.B(l)}s=8
return A.an(A.o5(A.i([A.mm(k),A.mi(k)],t.iw),t.H),$async$fb)
case 8:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$fb,r)},
ns(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.H(t.a.b(s)?s:new A.bj(s,A.M(s).h("bj<1,j>")))
while(s.l()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.B(q))}},
mi(a){var s=0,r=A.bu(t.H),q,p,o,n,m
var $async$mi=A.bv(function(b,c){if(b===1)return A.br(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.t(n,n)
n=a==null
A.ns(A.e(n?null:a.sfx),m,"")
A.ns(A.e(n?null:a.ir),m,"ir-")
q=A.e(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.B(p))
s=2
return A.an(A.iK(m,$.a7.j()),$async$mi)
case 2:o=c
$.f8=o
if($.np)o.h_()
return A.bs(null,r)}})
return A.bt($async$mi,r)},
mm(a){var s=0,r=A.bu(t.H),q,p
var $async$mm=A.bv(function(b,c){if(b===1)return A.br(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.t(q,q)
A.ns(A.e(a==null?null:a.tex),p,"")
q=$.dG
q=q==null?null:q.b7(p)
s=2
return A.an(q instanceof A.a4?q:A.tk(q,t.H),$async$mm)
case 2:return A.bs(null,r)}})
return A.bt($async$mm,r)},
pJ(){var s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.a(A.d(h.window).innerWidth),f=A.a(A.d(h.window).innerHeight)
h=$.a3.j()
s=g>0?g:800
h.width=s
s=$.a3.j()
h=f>0?f:600
s.height=h
h=$.dG
if(h!=null){s=A.a($.a3.j().width)
r=A.a($.a3.j().height)
h.au=s
h.av=r
h.cM=r/s
q=h.bs
q===$&&A.h()
p=B.c.K(s,2)
q.ay=p
o=B.c.K(r,2)
q.ch=o
n=q.d
if(n!=null)q.b.ae(n,p,o)
p=q.e
if(p!=null)q.b.ae(p,q.ay,q.ch)
p=q.f
if(p!=null)q.b.ae(p,q.ay,q.ch)
p=q.r
if(p!=null)q.b.ae(p,384,216)
m=h.ar
l=h.b_
k=h.bu
j=h.bv
i=h.bw
if(m!=null)h.ad.ae(m,s,r)
if(l!=null)h.ad.ae(l,s,r)
if(k!=null)h.ad.ae(k,h.gbe(),h.gbd())
if(j!=null)h.ad.ae(j,h.gbe(),h.gbd())
if(i!=null)h.ad.ae(i,s,r)}},
uA(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
A.il(b2)
try{s=b2
if(!$.px){$.nz=s
$.px=!0}i=s
h=$.nz
if(typeof i!=="number")return i.Y()
r=(i-h)/1000
$.nz=s
i=r
if(typeof i!=="number")return i.aP()
if(i<0)r=0
i=r
if(typeof i!=="number")return i.X()
if(i>0.25)r=0.25
A.uR(r)
if(!$.nA){i=$.ma
h=r
if(typeof h!=="number")return A.is(h)
h=$.ma=i+h
q=0
i=t.mv
for(;;){if(h>=0.008333333333333333){g=q
if(typeof g!=="number")return g.aP()
g=g<10}else g=!1
if(!g)break
$.nB=$.dN()
h=$.S.b
if(h===$.S)A.m(A.aI(""))
h.j_(0.008333333333333333)
A.uU()
h=$.am.b
if(h===$.am)A.m(A.aI(""))
g=$.S.b
if(g===$.S)A.m(A.aI(""))
h.f=g.r.c>=0.5
h=h.d
f=A.b5(h,!1,i)
f.$flags=3
e=f
B.a.G(h)
if(e.length!==0){h=$.S.b
if(h===$.S)A.m(A.aI(""))
h.kc(e)}A.uQ()
A.uT()
A.uS()
A.uP(0.008333333333333333)
h=$.dB.b
if(h===$.dB)A.m(A.aI(""))
if(h.a!=null)if((h.b-=0.008333333333333333)<=0)h.a=null
h=$.bq.b
if(h===$.bq)A.m(A.aI(""))
p=h.a!==B.o
g=$.a7.b
if(g===$.a7)A.m(A.aI(""))
h.j0(0.008333333333333333,g)
if(p){h=$.bq.b
if(h===$.bq)A.m(A.aI(""))
h=h.e}else h=!1
if(h)A.pK(!0)
h=$.ma-0.008333333333333333
$.ma=h
g=q
if(typeof g!=="number")return g.a3()
q=g+1}o=B.d.Z(h/0.008333333333333333,0,1)
$.nI=A.oI($.qr(),$.dN(),o)
n=$.f8
if(n!=null){for(i=$.cl.length,d=0;d<$.cl.length;$.cl.length===i||(0,A.w)($.cl),++d){m=$.cl[d]
A.u8(n,m)}B.a.G($.cl)}}l=$.dG
if(l!=null){$.bc.j().d2($.iw(),$.bG,$.cY)
i=$.aO===$.dC.j()?1:0
l.bt=i
i=l
h=r
g=$.bq.j()
i.eZ=A.q7($.cX.j().gaR()).ga2()
i.sfQ(A.q6($.cX.j().gaR()))
c=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.cX.j().gaR()))
i.f2=c<0?0:c
c=$.bc.j()
b=c.r+=h
a=0.025*c.f
c.a=c.a.a3(0,c.d.W(0,(A.mV(b*0.28,1309)*2-1)*a)).a3(0,c.c.W(0,(A.mV(c.r*0.28,2839)*2-1)*a))
c=$.bc.j()
i.f3=c.a
i.cD=c.b
i.cE=c.c
i.cF=c.d
a0=A.uf(0,0.25,0.11)
i.cG=a0.a
i.cH=a0.b
i.cI=a0.c
c=i.bx
a1=c==null?i.b_:c
if(a1==null)a1=i.ar
c=i.ad
c.ag(a1)
i.a7.depthMask(!0)
c.je(a1,i.cG/255,i.cH/255,i.cI/255)
i.cw=i.by=0
i.cA=!1
i.b1=0
a2=$.nt
if(a2!=null)a2.jp($.aC,$.iw())
i.jE(h,g)
$.ph.j().df(B.bs,h)}else if($.aY.j().a===B.A){$.bc.j().d2($.iw(),$.bG,$.cY)
i=$.fc
if(i!=null){h=$.bc.j()
g=h.a
a3=new A.F(g.a,g.b,g.c)
g=h.b
a4=new A.F(g.a,g.b,g.c)
h=h.c
a5=i.b/i.c
a6=a4.ga2()
a7=a6.ap(new A.F(h.a,h.b,h.c)).ga2()
a8=a7.ap(a6)
h=new Float32Array(16)
h.$flags&2&&A.aP(h)
h[0]=a7.a
h[1]=a8.a
h[2]=-a6.a
h[3]=0
h[4]=a7.b
h[5]=a8.b
h[6]=-a6.b
h[7]=0
h[8]=a7.c
h[9]=a8.c
h[10]=-a6.c
h[11]=0
h[12]=-a7.aY(a3)
h[13]=-a8.aY(a3)
h[14]=a6.aY(a3)
h[15]=1
a9=new A.bO(h)
b0=A.on(a5,60,1.0471975511965976,0.1)
i.Q=new A.fq(a9,b0,b0.W(0,a9),a3,a4,0.1,60,a5)}i=$.fc
if(i!=null)i.hi($.a7.j(),$.aC)
i=$.fc
if(i!=null)i.he($.a7.j(),$.aC,$.iw(),$.cX.j().gaR(),Math.sin(3.141592653589793*$.cX.j().gaR()))
$.dD.j().bU(A.ou($.S.j().gfV()))}A.cm("running")
i=$.aZ.j()
i.e=i.d=0
i.c.G(0)
A.a(A.d(v.G.window).requestAnimationFrame(A.a8(A.q_())))}catch(b1){k=A.ac(b1)
j=A.c0(b1)
A.mn(k,j)}},
u8(a,b){switch(b){case"arm":a.k7("confirm")
break
case"ambient-winnow":a.d5("winnow",0.28)
break
case"ambient-gate":a.d5("gate",0.22)
break}},
uR(a){var s=$.nv
if(s==null)return
s.textContent=""+B.d.ak(a>0?1/a:0)+" fps"},
uP(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.pN||$.aO!=null||$.al.j().z){$.iv().a=new A.k(0,0,0)
return}s=$.aZ.j().b
r=s.u(0,"KeyA")?-1:0
if(s.u(0,"KeyD"))++r
q=s.u(0,"KeyW")?1:0
p=new A.k(r,0,s.u(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga2():p
n=$.aZ.j().d
m=$.aZ.j().e
$.bG=$.bG+n*0.0028
s=$.cY-m*0.0028
$.cY=s
$.cY=B.d.Z(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.k(s*Math.cos($.bG)+l*Math.sin($.bG),0,l*Math.cos($.bG)-s*Math.sin($.bG)).ga2().W(0,2)
s=$.iv()
if(!isFinite(a1)||a1<0)A.m(A.aF(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.m(A.aF(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.a3(0,k.Y(0,i).W(0,1-l))
s.a=l
h=$.f7.j().jW($.a7.j(),$.aC,$.dN(),l.W(0,a1))
$.nG=h.a
if($.bq.j().a!==B.a2&&$.bq.j().a!==B.B)$.aC=h.b
$.bc.j().d2($.dN(),$.bG,$.cY)
s=$.bc.j()
l=$.a7.j()
g=A.vw(s,$.aC,l)
$.pi.j().hk(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.nQ($.bc.j(),$.a7.j(),$.aC)
break
case 1:e=A.q3($.bc.j(),$.a7.j(),$.aC)
break
case 2:d=A.q4($.bc.j(),$.a7.j(),$.aC)
break
case 3:break}s=$.pg.j()
c=$.ix().h9($.S.j().gam().a)
l=c==null?a0:c.i(0,"status")
s.df(l,$.aC==="living-room")
if($.aZ.j().c.ai(0,"KeyE")){s=$.S.j().gam()
l=e==null
i=l?a0:e.a
b=B.a.a5($.am.j().ef(21),$.am.j().gjN())
if(s.a===21&&i==="front-door"&&b){s=$.bq.j()
$.a7.j()
s.hv(B.bx,A.ag(s.c,t.N))
B.a.m($.cl,"collapse")
A.dH("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.S.j().hs(1,1)){f.d=!0
s=$.dB.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ax){e.at=!e.at
s=$.f8
if(s!=null)s.ce()}else if(d!=null)if(d.w){s=$.S.j()
if(s.f.bS(1))d.w=!1}else d.w=!0}s=$.dB.j()
if(s.a!=null&&s.b>0){a=$.dB.j().a
if(a!=null&&A.nQ($.bc.j(),$.a7.j(),$.aC)!==a){s=$.dB.j()
s.a=null
s.b=0}}},
uU(){var s,r,q,p,o,n,m,l,k,j=null
if($.al.j().z||$.aO!=null||$.am.j().e!=null)return
s=$.S.j().gam()
for(r=$.am.j().ef(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.w)(r),++o){n=r[o]
m=$.am.b
if(m===$.am)A.m(A.aI(""))
if(m.c.u(0,n)||p<n.c)continue
r=$.am.b
if(r===$.am)A.m(A.aI(""))
l=r.j5(n)
if(!(l instanceof A.hJ))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.c(r,q)
k=r[q].b}else k=j
if(k==null)return
A.od(A.d(v.G.document),"exitPointerLock",j,j,j,j)
$.iv().a=new A.k(0,0,0)
r=$.al.b
if(r===$.al)A.m(A.aI(""))
r.dm(n.a,k)
return}},
uD(){var s=$.am.j().e,r=s==null,q=r?null:s.gbq()
if(r||q==null)return
$.al.j().dm(s.a.a,q)
if(s.d!==B.x){$.al.j().bP(q)
A.nF()}A.dH("restored visitor")},
uQ(){var s,r,q,p,o=$.S.j().gam(),n=$.ih.j().jr(o.a,o.b)
if(n.length===0)return
s=B.a.gaH(n)
$.ih.j().b.m(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.nm.j().dl(q,s.e)
p=A.uX(r)
if(p!=null)B.a.m($.cl,"ambient-"+p)},
uT(){var s,r,q,p,o=$.S.j().gam()
if(o.b<20)return
s=o.a
if(!$.ms.m(0,s))return
r=$.ix().f
r===$&&A.h()
q=r.i(0,B.c.n(s))
r=t.j.b(q)?A.b5(q,!0,t.N):B.j
p=A.vu(r,$.S.j().b,s)
if(p!=null)$.nm.j().dl("noticed",p)},
pK(a){var s,r,q,p,o
if($.nu!=null)return
s=$.S.j().gam()
r=$.S.j().r.c
q=$.S.j().e.b
p=A.n(q).h("ax<2>")
o=A.r3(new A.j6(s.a,1-r,new A.J(new A.ax(q,p),p.h("r(l.E)").a(new A.mo()),p.h("J<l.E>")).gq(0),$.S.j().r.d,a))
if(o==null)return
A.pG(o)
A.nE("ending recorded")},
pG(a){var s,r,q
$.nu=a
$.pN=!0
$.iv().a=new A.k(0,0,0)
$.aO=$.nn.j()
s=$.nn.j()
r=$.ix().w
r===$&&A.h()
q=r.i(0,a.a.b)
s.hm(a,t.j.b(q)?A.b5(q,!0,t.N):B.j)},
u2(a){var s,r,q,p,o
A:{if("open"===a){s=B.F
break A}if("chain"===a){s=B.ai
break A}if("through-door"===a){s=B.aj
break A}if("letterbox"===a){s=B.ak
break A}s=B.y
break A}r=$.am.j().jc(s)
if(s===B.F){q=$.a7.j().f.i(0,"front-door")
if(q!=null){q.at=!0
p=$.f8
if(p!=null)p.ce()}}if(!(r instanceof A.hI)||s===B.y){$.al.j().bz()
$.aZ.j().aj($.a3.j())
return}o=r.a.gbq()
if(o==null){A.nr()
$.al.j().bz()
$.aZ.j().aj($.a3.j())
return}$.al.j().bP(o)
A.nF()},
u5(){var s,r=$.am.j().j1()
if(!(r instanceof A.ez)||r.b){A.nr()
$.al.j().bz()
$.aZ.j().aj($.a3.j())
return}s=r.a.gbq()
if(s==null){A.nr()
$.al.j().bz()
$.aZ.j().aj($.a3.j())
return}$.al.j().bP(s)
A.nF()},
nF(){var s,r,q,p,o=$.al.j(),n=A.d(v.G.document),m=A.i([],t.fR)
for(s=$.ij.j().dj(),r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
m.push(new A.dw(p.a,B.a.gM(p.c).n(0)))}o.hl(n,m)},
u3(a){var s,r,q,p=$.am.j().jd(a,!0,$.ij.j())
if(p==null)return
s=$.ij.j().jj(p,B.cA)
r=$.al.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.h()
r.textContent=q},
nr(){var s,r=$.a7.j().f.i(0,"front-door")
if(r!=null&&r.at){r.at=!1
s=$.f8
if(s!=null)s.ce()}},
uS(){var s,r,q,p,o,n,m,l,k
for(s=$.a7.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bq.b
if(k===$.bq)A.m(A.aI(""))
if(B.a.u(k.d,n+m)){l.d=!1
continue}}}},
i5:function i5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=$
_.r=d
_.w=e
_.x=f
_.y=g
_.Q=_.z=null
_.as=h
_.at=0
_.ax=!1},
mF:function mF(a){this.a=a},
mG:function mG(){},
mH:function mH(){},
mK:function mK(){},
mL:function mL(){},
mM:function mM(){},
mN:function mN(){},
mO:function mO(){},
mP:function mP(){},
mQ:function mQ(){},
mR:function mR(){},
mI:function mI(){},
mJ:function mJ(){},
mj:function mj(){},
mk:function mk(){},
mq:function mq(a){this.a=a},
mo:function mo(){},
od(a,b,c,d,e,f){var s=a[b]()
return s},
oe(a,b,c){var s=null
return c.a(A.od(a,b,s,s,s,s))},
qR(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
qQ(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
pZ(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
mV(a,b){var s=B.d.cX(a),r=A.pZ(s,b),q=A.pZ(s+1,b),p=B.d.Z(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
uX(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
v7(a){var s,r,q,p,o,n,m,l=B.p.en(a,null),k=t.f
if(!k.b(l))throw A.b(B.c7)
s=t.N
r=t.z
q=A.ay(l,s,r)
p=A.t(s,t.b)
for(o=0;o<11;++o){n=B.cL[o]
m=q.i(0,n)
if(m==null)p.k(0,n,A.t(s,r))
else if(k.b(m))p.k(0,n,A.ay(m,s,r))
else throw A.b(A.a9('text.json section "'+n+'" must be an object',null,null))}return p},
vu(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbR(a)
s=new A.ds()
s.bV((b^274953^c)>>>0)
r=s.a6(a.length)
if(!(r>=0&&r<a.length))return A.c(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.n1.prototype={}
J.fV.prototype={
R(a,b){return a===b},
gD(a){return A.el(a)},
n(a){return"Instance of '"+A.hm(a)+"'"},
gJ(a){return A.bH(A.nx(this))}}
J.fZ.prototype={
n(a){return String(a)},
gD(a){return a?519018:218159},
gJ(a){return A.bH(t.y)},
$iQ:1,
$ir:1}
J.e4.prototype={
R(a,b){return null==b},
n(a){return"null"},
gD(a){return 0},
$iQ:1,
$iX:1}
J.e5.prototype={$iO:1}
J.c4.prototype={
gD(a){return 0},
gJ(a){return B.dw},
n(a){return String(a)}}
J.hg.prototype={}
J.cM.prototype={}
J.bK.prototype={
n(a){var s=a[$.qa()]
if(s==null)s=a[$.dM()]
if(s==null)return this.hx(a)
return"JavaScript function for "+J.d2(s)},
$icu:1}
J.dd.prototype={
gD(a){return 0},
n(a){return String(a)}}
J.de.prototype={
gD(a){return 0},
n(a){return String(a)}}
J.o.prototype={
bo(a,b){return new A.bj(a,A.M(a).h("@<1>").C(b).h("bj<1,2>"))},
m(a,b){A.M(a).c.a(b)
a.$flags&1&&A.aP(a,29)
a.push(b)},
I(a,b){var s
A.M(a).h("l<1>").a(b)
a.$flags&1&&A.aP(a,"addAll",2)
if(Array.isArray(b)){this.hO(a,b)
return}for(s=J.H(b);s.l();)a.push(s.gp())},
hO(a,b){var s,r
t.x.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.af(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){a.$flags&1&&A.aP(a,"clear","clear")
a.length=0},
b8(a,b,c){var s=A.M(a)
return new A.W(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("W<1,2>"))},
aI(a,b){var s,r=A.bM(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.u(a[s]))
return r.join(b)},
fG(a,b,c,d){var s,r,q
d.a(b)
A.M(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.af(a))}return r},
N(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
gaH(a){if(a.length>0)return a[0]
throw A.b(A.fW())},
gM(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.fW())},
gbR(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.b(A.fW())
throw A.b(A.ri())},
ab(a,b){var s,r
A.M(a).h("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.af(a))}return!1},
a5(a,b){var s,r
A.M(a).h("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.af(a))}return!0},
T(a,b){var s,r,q,p,o,n=A.M(a)
n.h("f(1,1)?").a(b)
a.$flags&2&&A.aP(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.ul()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.X()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dK(b,2))
if(p>0)this.iE(a,p)},
a4(a){return this.T(a,null)},
iE(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bQ(a,b){var s,r,q,p
a.$flags&2&&A.aP(a,"shuffle")
s=a.length
while(s>1){r=b.a6(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
bA(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.Z(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.Z(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gH(a){return a.length!==0},
n(a){return A.n0(a,"[","]")},
gt(a){return new J.co(a,a.length,A.M(a).h("co<1>"))},
gD(a){return A.el(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.aP(a,"set length","change the length of")
if(b<0)throw A.b(A.aq(b,0,null,"newLength",null))
if(b>a.length)A.M(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.b(A.mv(a,b))
return a[b]},
k(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.aP(a)
if(!(b>=0&&b<a.length))throw A.b(A.mv(a,b))
a[b]=c},
di(a,b){return new A.bp(a,b.h("bp<0>"))},
fM(a,b){var s
A.M(a).h("r(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gJ(a){return A.bH(A.M(a))},
$iy:1,
$il:1,
$iz:1}
J.fX.prototype={
kq(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.hm(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.jO.prototype={}
J.co.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.w(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iV:1}
J.cz.prototype={
E(a,b){var s
A.il(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbD(b)
if(this.gbD(a)===s)return 0
if(this.gbD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbD(a){return a===0?1/a<0:a<0},
al(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.ah(""+a+".toInt()"))},
jb(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.ah(""+a+".ceil()"))},
cX(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.ah(""+a+".floor()"))},
ak(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.ah(""+a+".round()"))},
Z(a,b,c){if(this.E(b,c)>0)throw A.b(A.nJ(b))
if(this.E(a,b)<0)return b
if(this.E(a,c)>0)return c
return a},
dd(a,b){var s
if(b>20)throw A.b(A.aq(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbD(a))return"-"+s
return s},
ko(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.b(A.aq(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.c(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.m(A.ah("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.c(p,1)
s=p[1]
if(3>=r)return A.c(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.W("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
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
hz(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e4(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.e4(a,b)},
e4(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.ah("Result of truncating division is "+A.u(s)+": "+A.u(a)+" ~/ "+b))},
cc(a,b){var s
if(a>0)s=this.bn(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
iJ(a,b){if(0>b)throw A.b(A.nJ(b))
return this.bn(a,b)},
bn(a,b){return b>31?0:a>>>b},
aP(a,b){return a<b},
gJ(a){return A.bH(t.o)},
$iaw:1,
$ip:1,
$iat:1}
J.e3.prototype={
gJ(a){return A.bH(t.S)},
$iQ:1,
$if:1}
J.h_.prototype={
gJ(a){return A.bH(t.i)},
$iQ:1}
J.cA.prototype={
aM(a,b,c,d){var s=A.em(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
U(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aq(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.U(a,b,0)},
A(a,b,c){return a.substring(b,A.em(b,c,a.length))},
ba(a,b){return this.A(a,b,null)},
kp(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.rm(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.rn(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
W(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bt)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bB(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aq(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bA(a,b){return this.bB(a,b,0)},
u(a,b){return A.vA(a,b,0)},
E(a,b){var s
A.B(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
n(a){return a},
gD(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gJ(a){return A.bH(t.N)},
gq(a){return a.length},
$iQ:1,
$iaw:1,
$iop:1,
$ij:1}
A.cf.prototype={
gt(a){return new A.dP(J.H(this.gao()),A.n(this).h("dP<1,2>"))},
gq(a){return J.av(this.gao())},
gF(a){return J.nU(this.gao())},
gH(a){return J.qy(this.gao())},
N(a,b){return A.n(this).y[1].a(J.iy(this.gao(),b))},
n(a){return J.d2(this.gao())}}
A.dP.prototype={
l(){return this.a.l()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iV:1}
A.cp.prototype={
gao(){return this.a}}
A.eG.prototype={$iy:1}
A.eF.prototype={
i(a,b){return this.$ti.y[1].a(J.au(this.a,b))},
k(a,b,c){var s=this.$ti
J.by(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.qz(this.a,b)},
m(a,b){var s=this.$ti
J.fe(this.a,s.c.a(s.y[1].a(b)))},
T(a,b){var s
this.$ti.h("f(2,2)?").a(b)
s=b==null?null:new A.lH(this,b)
J.qA(this.a,s)},
$iy:1,
$iz:1}
A.lH.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("f(1,1)")}}
A.bj.prototype={
bo(a,b){return new A.bj(this.a,this.$ti.h("@<1>").C(b).h("bj<1,2>"))},
gao(){return this.a}}
A.cB.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.fv.prototype={
gq(a){return this.a.length},
i(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.l_.prototype={}
A.y.prototype={}
A.a6.prototype={
gt(a){var s=this
return new A.bL(s,s.gq(s),A.n(s).h("bL<a6.E>"))},
gF(a){return this.gq(this)===0},
ab(a,b){var s,r,q=this
A.n(q).h("r(a6.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.N(0,r)))return!0
if(s!==q.gq(q))throw A.b(A.af(q))}return!1},
aI(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.u(p.N(0,0))
if(o!==p.gq(p))throw A.b(A.af(p))
for(r=s,q=1;q<o;++q){r=r+b+A.u(p.N(0,q))
if(o!==p.gq(p))throw A.b(A.af(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.u(p.N(0,q))
if(o!==p.gq(p))throw A.b(A.af(p))}return r.charCodeAt(0)==0?r:r}},
dh(a,b){return this.hw(0,A.n(this).h("r(a6.E)").a(b))},
b8(a,b,c){var s=A.n(this)
return new A.W(this,s.C(c).h("1(a6.E)").a(b),s.h("@<a6.E>").C(c).h("W<1,2>"))},
aO(a,b){var s=A.n(this).h("a6.E")
if(b)s=A.U(this,s)
else{s=A.U(this,s)
s.$flags=1
s=s}return s},
aN(a){return this.aO(0,!0)},
aB(a){var s,r=this,q=A.n4(A.n(r).h("a6.E"))
for(s=0;s<r.gq(r);++s)q.m(0,r.N(0,s))
return q}}
A.ew.prototype={
gi8(){var s=J.av(this.a),r=this.c
if(r==null||r>s)return s
return r},
giN(){var s=J.av(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.av(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
N(a,b){var s=this,r=s.giN()+b
if(b<0||r>=s.gi8())throw A.b(A.jL(b,s.gq(0),s,"index"))
return J.iy(s.a,r)},
aO(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.bf(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.oc(0,n):J.ob(0,n)}r=A.bM(s,m.N(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.N(n,o+q))
if(m.gq(n)<l)throw A.b(A.af(p))}return r},
aN(a){return this.aO(0,!0)}}
A.bL.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.bf(q),o=p.gq(q)
if(r.b!==o)throw A.b(A.af(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.N(q,s);++r.c
return!0},
$iV:1}
A.bN.prototype={
gt(a){return new A.cD(J.H(this.a),this.b,A.n(this).h("cD<1,2>"))},
gq(a){return J.av(this.a)},
gF(a){return J.nU(this.a)},
N(a,b){return this.b.$1(J.iy(this.a,b))}}
A.cs.prototype={$iy:1}
A.cD.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iV:1}
A.W.prototype={
gq(a){return J.av(this.a)},
N(a,b){return this.b.$1(J.iy(this.a,b))}}
A.J.prototype={
gt(a){return new A.L(J.H(this.a),this.b,this.$ti.h("L<1>"))}}
A.L.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iV:1}
A.bp.prototype={
gt(a){return new A.eC(J.H(this.a),this.$ti.h("eC<1>"))}}
A.eC.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iV:1}
A.a_.prototype={
sq(a,b){throw A.b(A.ah("Cannot change the length of a fixed-length list"))},
m(a,b){A.b1(a).h("a_.E").a(b)
throw A.b(A.ah("Cannot add to a fixed-length list"))}}
A.bD.prototype={
k(a,b,c){A.n(this).h("bD.E").a(c)
throw A.b(A.ah("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.b(A.ah("Cannot change the length of an unmodifiable list"))},
m(a,b){A.n(this).h("bD.E").a(b)
throw A.b(A.ah("Cannot add to an unmodifiable list"))},
T(a,b){A.n(this).h("f(bD.E,bD.E)?").a(b)
throw A.b(A.ah("Cannot modify an unmodifiable list"))}}
A.dq.prototype={}
A.eq.prototype={
gq(a){return J.av(this.a)},
N(a,b){var s=this.a,r=J.bf(s)
return r.N(s,r.gq(s)-1-b)}}
A.f6.prototype={}
A.dw.prototype={$r:"+(1,2)",$s:1}
A.dx.prototype={$r:"+(1,2,3)",$s:2}
A.eS.prototype={$r:"+(1,2,3,4)",$s:3}
A.dR.prototype={}
A.d5.prototype={
gF(a){return this.gq(this)===0},
gH(a){return this.gq(this)!==0},
n(a){return A.n6(this)},
k(a,b,c){var s=A.n(this)
s.c.a(b)
s.y[1].a(c)
A.qM()},
gO(){return new A.bF(this.ju(),A.n(this).h("bF<E<1,2>>"))},
ju(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gL(),o=o.gt(o),n=A.n(s),m=n.y[1],n=n.h("E<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gp()
k=s.i(0,l)
r=4
return a.b=new A.E(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aJ(a,b,c,d){var s=A.t(c,d)
this.a0(0,new A.iV(this,A.n(this).C(c).C(d).h("E<1,2>(3,4)").a(b),s))
return s},
$iI:1}
A.iV.prototype={
$2(a,b){var s=A.n(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.n(this.a).h("~(1,2)")}}
A.ap.prototype={
gq(a){return this.b.length},
gdP(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
V(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.V(b))return null
return this.b[this.a[b]]},
a0(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gdP()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gL(){return new A.cT(this.gdP(),this.$ti.h("cT<1>"))},
ga9(){return new A.cT(this.b,this.$ti.h("cT<2>"))}}
A.cT.prototype={
gq(a){return this.a.length},
gF(a){return 0===this.a.length},
gH(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.cU(s,s.length,this.$ti.h("cU<1>"))}}
A.cU.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iV:1}
A.dW.prototype={
aS(){var s=this,r=s.$map
if(r==null){r=new A.e6(s.$ti.h("e6<1,2>"))
A.pV(s.a,r)
s.$map=r}return r},
i(a,b){return this.aS().i(0,b)},
a0(a,b){this.$ti.h("~(1,2)").a(b)
this.aS().a0(0,b)},
gL(){var s=this.aS()
return new A.a5(s,A.n(s).h("a5<1>"))},
ga9(){var s=this.aS()
return new A.ax(s,A.n(s).h("ax<2>"))},
gq(a){return this.aS().a}}
A.dS.prototype={
m(a,b){A.n(this).c.a(b)
A.qN()}}
A.d7.prototype={
gq(a){return this.b},
gF(a){return this.b===0},
gH(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.cU(s,s.length,r.$ti.h("cU<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
aB(a){return A.n5(this,this.$ti.c)}}
A.er.prototype={}
A.li.prototype={
a8(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.ei.prototype={
n(a){return"Null check operator used on a null value"}}
A.h0.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hB.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kg.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dV.prototype={}
A.eU.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibC:1}
A.c1.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.q9(r==null?"unknown":r)+"'"},
gJ(a){var s=A.nL(this)
return A.bH(s==null?A.b1(this):s)},
$icu:1,
gkx(){return this},
$C:"$1",
$R:1,
$D:null}
A.ft.prototype={$C:"$0",$R:0}
A.fu.prototype={$C:"$2",$R:2}
A.hy.prototype={}
A.hw.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.q9(s)+"'"}}
A.d4.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.d4))return!1
return this.$_target===b.$_target&&this.a===b.a},
gD(a){return(A.it(this.a)^A.el(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hm(this.a)+"'")}}
A.ht.prototype={
n(a){return"RuntimeError: "+this.a}}
A.b4.prototype={
gq(a){return this.a},
gF(a){return this.a===0},
gH(a){return this.a!==0},
gL(){return new A.a5(this,A.n(this).h("a5<1>"))},
ga9(){return new A.ax(this,A.n(this).h("ax<2>"))},
gO(){return new A.R(this,A.n(this).h("R<1,2>"))},
V(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jI(a)},
jI(a){var s=this.d
if(s==null)return!1
return this.b4(s[this.b3(a)],a)>=0},
I(a,b){A.n(this).h("I<1,2>").a(b).a0(0,new A.jX(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.jJ(b)},
jJ(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b3(a)]
r=this.b4(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.n(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.dq(s==null?q.b=q.c7():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.dq(r==null?q.c=q.c7():r,b,c)}else q.jL(b,c)},
jL(a,b){var s,r,q,p,o=this,n=A.n(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.c7()
r=o.b3(a)
q=s[r]
if(q==null)s[r]=[o.bX(a,b)]
else{p=o.b4(q,a)
if(p>=0)q[p].b=b
else q.push(o.bX(a,b))}},
k9(a,b){var s,r,q=this,p=A.n(q)
p.c.a(a)
p.h("2()").a(b)
if(q.V(a)){s=q.i(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
ai(a,b){if((b&0x3fffffff)===b)return this.hM(this.c,b)
else return this.jK(b)},
jK(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.b3(a)
r=n[s]
q=o.b4(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dr(p)
if(r.length===0)delete n[s]
return p.b},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bW()}},
a0(a,b){var s,r,q=this
A.n(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.af(q))
s=s.c}},
dq(a,b,c){var s,r=A.n(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.bX(b,c)
else s.b=c},
hM(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.dr(s)
delete a[b]
return s.b},
bW(){this.r=this.r+1&1073741823},
bX(a,b){var s=this,r=A.n(s),q=new A.k4(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bW()
return q},
dr(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bW()},
b3(a){return J.aQ(a)&1073741823},
b4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1},
n(a){return A.n6(this)},
c7(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$in3:1}
A.jX.prototype={
$2(a,b){var s=this.a,r=A.n(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.n(this.a).h("~(1,2)")}}
A.k4.prototype={}
A.a5.prototype={
gq(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.c5(s,s.r,s.e,this.$ti.h("c5<1>"))}}
A.c5.prototype={
gp(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.af(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iV:1}
A.ax.prototype={
gq(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.aa(s,s.r,s.e,this.$ti.h("aa<1>"))}}
A.aa.prototype={
gp(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.af(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iV:1}
A.R.prototype={
gq(a){return this.a.a},
gF(a){return this.a.a===0},
gt(a){var s=this.a
return new A.e8(s,s.r,s.e,this.$ti.h("e8<1,2>"))}}
A.e8.prototype={
gp(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.af(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.E(s.a,s.b,r.$ti.h("E<1,2>"))
r.c=s.c
return!0}},
$iV:1}
A.e6.prototype={
b3(a){return A.v2(a)&1073741823},
b4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1}}
A.mA.prototype={
$1(a){return this.a(a)},
$S:4}
A.mB.prototype={
$2(a,b){return this.a(a,b)},
$S:27}
A.mC.prototype={
$1(a){return this.a(A.B(a))},
$S:18}
A.ba.prototype={
gJ(a){return A.bH(this.dN())},
dN(){return A.vc(this.$r,this.bh())},
n(a){return this.e8(!1)},
e8(a){var s,r,q,p,o,n=this.ic(),m=this.bh(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.or(o):l+A.u(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ic(){var s,r=this.$s
while($.m0.length<=r)B.a.m($.m0,null)
s=$.m0[r]
if(s==null){s=this.i_()
B.a.k($.m0,r,s)}return s},
i_(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.fY(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ag(j,k)}}
A.dt.prototype={
bh(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.dt&&this.$s===b.$s&&J.Z(this.a,b.a)&&J.Z(this.b,b.b)},
gD(a){return A.bP(this.$s,this.a,this.b,B.h)}}
A.du.prototype={
bh(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.du&&s.$s===b.$s&&J.Z(s.a,b.a)&&J.Z(s.b,b.b)&&J.Z(s.c,b.c)},
gD(a){var s=this
return A.bP(s.$s,s.a,s.b,s.c)}}
A.dv.prototype={
bh(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.dv&&this.$s===b.$s&&A.tt(this.a,b.a)},
gD(a){return A.bP(this.$s,A.rw(this.a),B.h,B.h)}}
A.lI.prototype={
ca(){var s=this.b
if(s===this)throw A.b(new A.cB("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.b(A.aI(""))
return s}}
A.c7.prototype={
gJ(a){return B.dp},
eg(a,b,c){return new Float32Array(a,b,c)},
$iQ:1,
$ic7:1}
A.dg.prototype={$idg:1}
A.ef.prototype={
gj7(a){if(((a.$flags|0)&2)!==0)return new A.m5(a.buffer)
else return a.buffer},
ik(a,b,c,d){var s=A.aq(b,0,c,d,null)
throw A.b(s)},
dC(a,b,c,d){if(b>>>0!==b||b>c)this.ik(a,b,c,d)}}
A.m5.prototype={
eg(a,b,c){var s=A.rt(this.a,b,c)
s.$flags=3
return s}}
A.h7.prototype={
gJ(a){return B.dq},
$iQ:1}
A.aj.prototype={
gq(a){return a.length},
e2(a,b,c,d,e){var s,r,q=a.length
this.dC(a,b,q,"start")
this.dC(a,c,q,"end")
if(b>c)throw A.b(A.aq(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.x(e,null))
r=d.length
if(r-e<s)throw A.b(A.q("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaS:1}
A.ed.prototype={
i(a,b){A.bZ(b,a,a.length)
return a[b]},
k(a,b,c){A.mc(c)
a.$flags&2&&A.aP(a)
A.bZ(b,a,a.length)
a[b]=c},
hf(a,b,c,d){t.id.a(d)
a.$flags&2&&A.aP(a,5)
this.e2(a,b,c,d,0)
return},
$iy:1,
$il:1,
$iz:1}
A.ee.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.aP(a)
A.bZ(b,a,a.length)
a[b]=c},
hg(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.aP(a,5)
this.e2(a,b,c,d,e)
return},
$iy:1,
$il:1,
$iz:1}
A.ec.prototype={
gJ(a){return B.dr},
bT(a,b,c){return new Float32Array(a.subarray(b,A.u1(b,c,a.length)))},
$iQ:1,
$ijg:1}
A.h8.prototype={
gJ(a){return B.ds},
$iQ:1}
A.h9.prototype={
gJ(a){return B.dt},
i(a,b){A.bZ(b,a,a.length)
return a[b]},
$iQ:1}
A.ha.prototype={
gJ(a){return B.du},
i(a,b){A.bZ(b,a,a.length)
return a[b]},
$iQ:1}
A.hb.prototype={
gJ(a){return B.dv},
i(a,b){A.bZ(b,a,a.length)
return a[b]},
$iQ:1}
A.hc.prototype={
gJ(a){return B.dy},
i(a,b){A.bZ(b,a,a.length)
return a[b]},
$iQ:1,
$inb:1}
A.hd.prototype={
gJ(a){return B.dz},
i(a,b){A.bZ(b,a,a.length)
return a[b]},
$iQ:1}
A.eg.prototype={
gJ(a){return B.dA},
gq(a){return a.length},
i(a,b){A.bZ(b,a,a.length)
return a[b]},
$iQ:1}
A.eh.prototype={
gJ(a){return B.dB},
gq(a){return a.length},
i(a,b){A.bZ(b,a,a.length)
return a[b]},
$iQ:1,
$ihz:1}
A.eO.prototype={}
A.eP.prototype={}
A.eQ.prototype={}
A.eR.prototype={}
A.bo.prototype={
h(a){return A.eZ(v.typeUniverse,this,a)},
C(a){return A.p7(v.typeUniverse,this,a)}}
A.hY.prototype={}
A.id.prototype={
n(a){return A.b_(this.a,null)}}
A.hW.prototype={
n(a){return this.a}}
A.eV.prototype={$ibU:1}
A.lE.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.lD.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
A.lF.prototype={
$0(){this.a.$0()},
$S:19}
A.lG.prototype={
$0(){this.a.$0()},
$S:19}
A.m2.prototype={
hL(a,b){if(self.setTimeout!=null)self.setTimeout(A.dK(new A.m3(this,b),0),a)
else throw A.b(A.ah("`setTimeout()` not found."))}}
A.m3.prototype={
$0(){this.b.$0()},
$S:0}
A.hR.prototype={
cg(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dw(a)
else{s=r.a
if(q.h("b3<1>").b(a))s.dB(a)
else s.bg(a)}},
ci(a,b){var s=this.a
if(this.b)s.aD(new A.ao(a,b))
else s.bc(new A.ao(a,b))}}
A.md.prototype={
$1(a){return this.a.$2(0,a)},
$S:7}
A.me.prototype={
$2(a,b){this.a.$2(1,new A.dV(a,t.l.a(b)))},
$S:42}
A.mt.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:59}
A.aX.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
iF(a,b){var s,r,q
a=A.a(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
l(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.l()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.iF(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.p2
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
o.a=A.p2
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.q("sync*"))}return!1},
ky(a){var s,r,q=this
if(a instanceof A.bF){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.H(a)
return 2}},
$iV:1}
A.bF.prototype={
gt(a){return new A.aX(this.a(),this.$ti.h("aX<1>"))}}
A.ao.prototype={
n(a){return A.u(this.a)},
$iT:1,
gaQ(){return this.b}}
A.jo.prototype={
$2(a,b){var s,r,q=this
A.dE(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aD(new A.ao(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aD(new A.ao(r,s))}},
$S:68}
A.jn.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.by(r,k.b,a)
if(J.Z(s,0)){q=A.i([],j.h("o<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.w)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.fe(q,l)}k.c.bg(q)}}else if(J.Z(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aD(new A.ao(q,o))}},
$S(){return this.d.h("X(0)")}}
A.hT.prototype={
ci(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.q("Future already completed"))
s.bc(A.uk(a,b))},
eh(a){return this.ci(a,null)}}
A.eD.prototype={
cg(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.q("Future already completed"))
s.dw(r.h("1/").a(a))}}
A.cR.prototype={
jV(a){if((this.c&15)!==6)return!0
return this.b.b.da(t.iW.a(this.d),a.a,t.y,t.K)},
jG(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.kl(q,m,a.b,o,n,t.l)
else p=l.da(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.ac(s))){if((r.c&1)!==0)throw A.b(A.x("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.x("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.a4.prototype={
dc(a,b,c){var s,r,q=this.$ti
q.C(c).h("1/(2)").a(a)
s=$.a2
if(s===B.m){if(!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aF(b,"onError",u.c))}else{c.h("@<0/>").C(q.c).h("1(2)").a(a)
b=A.uC(b,s)}r=new A.a4(s,c.h("a4<0>"))
this.bY(new A.cR(r,3,a,b,q.h("@<1>").C(c).h("cR<1,2>")))
return r},
e7(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new A.a4($.a2,c.h("a4<0>"))
this.bY(new A.cR(s,19,a,b,r.h("@<1>").C(c).h("cR<1,2>")))
return s},
iI(a){this.a=this.a&1|16
this.c=a},
bf(a){this.a=a.a&30|this.a&1
this.c=a.c},
bY(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.e.a(r.c)
if((s.a&24)===0){s.bY(a)
return}r.bf(s)}A.ip(null,null,r.b,t.M.a(new A.lK(r,a)))}},
dU(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.e.a(m.c)
if((n.a&24)===0){n.dU(a)
return}m.bf(n)}l.a=m.bl(a)
A.ip(null,null,m.b,t.M.a(new A.lO(l,m)))}},
bk(){var s=t.F.a(this.c)
this.c=null
return this.bl(s)},
bl(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bg(a){var s,r=this
r.$ti.c.a(a)
s=r.bk()
r.a=8
r.c=a
A.dr(r,s)},
hZ(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bk()
q.bf(a)
A.dr(q,r)},
aD(a){var s=this.bk()
this.iI(a)
A.dr(this,s)},
dw(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("b3<1>").b(a)){this.dB(a)
return}this.hP(a)},
hP(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ip(null,null,s.b,t.M.a(new A.lM(s,a)))},
dB(a){A.nd(this.$ti.h("b3<1>").a(a),this,!1)
return},
bc(a){this.a^=2
A.ip(null,null,this.b,t.M.a(new A.lL(this,a)))},
$ib3:1}
A.lK.prototype={
$0(){A.dr(this.a,this.b)},
$S:0}
A.lO.prototype={
$0(){A.dr(this.b,this.a.a)},
$S:0}
A.lN.prototype={
$0(){A.nd(this.a.a,this.b,!0)},
$S:0}
A.lM.prototype={
$0(){this.a.bg(this.b)},
$S:0}
A.lL.prototype={
$0(){this.a.aD(this.b)},
$S:0}
A.lR.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.kk(t.mY.a(q.d),t.z)}catch(p){s=A.ac(p)
r=A.c0(p)
if(k.c&&t.u.a(k.b.a.c).a===s){q=k.a
q.c=t.u.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.iJ(q)
n=k.a
n.c=new A.ao(q,o)
q=n}q.b=!0
return}if(j instanceof A.a4&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.u.a(j.c)
q.b=!0}return}if(j instanceof A.a4){m=k.b.a
l=new A.a4(m.b,m.$ti)
j.dc(new A.lS(l,m),new A.lT(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.lS.prototype={
$1(a){this.a.hZ(this.b)},
$S:13}
A.lT.prototype={
$2(a,b){A.dE(a)
t.l.a(b)
this.a.aD(new A.ao(a,b))},
$S:79}
A.lQ.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.da(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ac(l)
r=A.c0(l)
q=s
p=r
if(p==null)p=A.iJ(q)
o=this.a
o.c=new A.ao(q,p)
o.b=!0}},
$S:0}
A.lP.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.u.a(l.a.a.c)
p=l.b
if(p.a.jV(s)&&p.a.e!=null){p.c=p.a.jG(s)
p.b=!1}}catch(o){r=A.ac(o)
q=A.c0(o)
p=t.u.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.iJ(p)
m=l.b
m.c=new A.ao(p,n)
p=m}p.b=!0}},
$S:0}
A.hS.prototype={}
A.ib.prototype={}
A.f5.prototype={$ioV:1}
A.i8.prototype={
km(a){var s,r,q
t.M.a(a)
try{if(B.m===$.a2){a.$0()
return}A.pL(null,null,this,a,t.H)}catch(q){s=A.ac(q)
r=A.c0(q)
A.nC(A.dE(s),t.l.a(r))}},
j6(a){return new A.m1(this,t.M.a(a))},
kk(a,b){b.h("0()").a(a)
if($.a2===B.m)return a.$0()
return A.pL(null,null,this,a,b)},
da(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.a2===B.m)return a.$1(b)
return A.uF(null,null,this,a,b,c,d)},
kl(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a2===B.m)return a.$2(b,c)
return A.uE(null,null,this,a,b,c,d,e,f)},
fZ(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
A.m1.prototype={
$0(){return this.a.km(this.b)},
$S:0}
A.mp.prototype={
$0(){A.r8(this.a,this.b)},
$S:0}
A.eI.prototype={
gq(a){return this.a},
gF(a){return this.a===0},
gH(a){return this.a!==0},
gL(){return new A.cS(this,this.$ti.h("cS<1>"))},
ga9(){var s=this.$ti
return A.h4(new A.cS(this,s.h("cS<1>")),new A.lU(this),s.c,s.y[1])},
V(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.i2(a)},
i2(a){var s=this.d
if(s==null)return!1
return this.an(this.dM(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.oX(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.oX(q,b)
return r}else return this.ie(b)},
ie(a){var s,r,q=this.d
if(q==null)return null
s=this.dM(q,a)
r=this.an(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.dt(s==null?m.b=A.ne():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.dt(r==null?m.c=A.ne():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.ne()
p=A.it(b)&1073741823
o=q[p]
if(o==null){A.nf(q,p,[b,c]);++m.a
m.e=null}else{n=m.an(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
a0(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.dE()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.af(m))}},
dE(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.bM(i.a,null,!1,t.z)
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
dt(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.nf(a,b,c)},
dM(a,b){return a[A.it(b)&1073741823]}}
A.lU.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.i(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.h("2(1)")}}
A.eK.prototype={
an(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cS.prototype={
gq(a){return this.a.a},
gF(a){return this.a.a===0},
gH(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.eJ(s,s.dE(),this.$ti.h("eJ<1>"))}}
A.eJ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.af(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iV:1}
A.b9.prototype={
im(){return new A.b9(A.n(this).h("b9<1>"))},
gt(a){var s=this,r=new A.cV(s,s.r,A.n(s).h("cV<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gF(a){return this.a===0},
gH(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.V.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.V.a(r[b])!=null}else return this.i1(b)},
i1(a){var s=this.d
if(s==null)return!1
return this.an(s[this.c1(a)],a)>=0},
m(a,b){var s,r,q=this
A.n(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ds(s==null?q.b=A.ng():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ds(r==null?q.c=A.ng():r,b)}else return q.hN(b)},
hN(a){var s,r,q,p=this
A.n(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ng()
r=p.c1(a)
q=s[r]
if(q==null)s[r]=[p.c8(a)]
else{if(p.an(q,a)>=0)return!1
q.push(p.c8(a))}return!0},
ai(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.dV(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.dV(s.c,b)
else return s.iD(b)},
iD(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c1(a)
r=n[s]
q=o.an(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eb(p)
return!0},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.c6()}},
ds(a,b){A.n(this).c.a(b)
if(t.V.a(a[b])!=null)return!1
a[b]=this.c8(b)
return!0},
dV(a,b){var s
if(a==null)return!1
s=t.V.a(a[b])
if(s==null)return!1
this.eb(s)
delete a[b]
return!0},
c6(){this.r=this.r+1&1073741823},
c8(a){var s,r=this,q=new A.i1(A.n(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c6()
return q},
eb(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c6()},
c1(a){return J.aQ(a)&1073741823},
an(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1},
$iol:1}
A.i1.prototype={}
A.cV.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.af(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iV:1}
A.k5.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:78}
A.D.prototype={
gt(a){return new A.bL(a,this.gq(a),A.b1(a).h("bL<D.E>"))},
N(a,b){return this.i(a,b)},
gF(a){return this.gq(a)===0},
gH(a){return!this.gF(a)},
a5(a,b){var s,r
A.b1(a).h("r(D.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.i(a,r)))return!1
if(s!==this.gq(a))throw A.b(A.af(a))}return!0},
di(a,b){return new A.bp(a,b.h("bp<0>"))},
b8(a,b,c){var s=A.b1(a)
return new A.W(a,s.C(c).h("1(D.E)").a(b),s.h("@<D.E>").C(c).h("W<1,2>"))},
m(a,b){var s
A.b1(a).h("D.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.k(a,s,b)},
bo(a,b){return new A.bj(a,A.b1(a).h("@<D.E>").C(b).h("bj<1,2>"))},
T(a,b){var s,r=A.b1(a)
r.h("f(D.E,D.E)?").a(b)
s=b==null?A.v1():b
A.hv(a,0,this.gq(a)-1,s,r.h("D.E"))},
jC(a,b,c,d){var s
A.b1(a).h("D.E?").a(d)
A.em(b,c,this.gq(a))
for(s=b;s<c;++s)this.k(a,s,d)},
n(a){return A.n0(a,"[","]")},
$iy:1,
$il:1,
$iz:1}
A.N.prototype={
a0(a,b){var s,r,q,p=A.n(this)
p.h("~(N.K,N.V)").a(b)
for(s=this.gL(),s=s.gt(s),p=p.h("N.V");s.l();){r=s.gp()
q=this.i(0,r)
b.$2(r,q==null?p.a(q):q)}},
gO(){return this.gL().b8(0,new A.k7(this),A.n(this).h("E<N.K,N.V>"))},
aJ(a,b,c,d){var s,r,q,p,o,n=A.n(this)
n.C(c).C(d).h("E<1,2>(N.K,N.V)").a(b)
s=A.t(c,d)
for(r=this.gL(),r=r.gt(r),n=n.h("N.V");r.l();){q=r.gp()
p=this.i(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
iY(a){var s,r,q
A.n(this).h("l<E<N.K,N.V>>").a(a)
for(s=a.$ti,r=new A.cD(J.H(a.a),a.b,s.h("cD<1,2>")),s=s.y[1];r.l();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
gq(a){var s=this.gL()
return s.gq(s)},
gF(a){var s=this.gL()
return s.gF(s)},
gH(a){var s=this.gL()
return s.gH(s)},
ga9(){return new A.eM(this,A.n(this).h("eM<N.K,N.V>"))},
n(a){return A.n6(this)},
$iI:1}
A.k7.prototype={
$1(a){var s=this.a,r=A.n(s)
r.h("N.K").a(a)
s=s.i(0,a)
if(s==null)s=r.h("N.V").a(s)
return new A.E(a,s,r.h("E<N.K,N.V>"))},
$S(){return A.n(this.a).h("E<N.K,N.V>(N.K)")}}
A.k8.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.u(a)
r.a=(r.a+=s)+": "
s=A.u(b)
r.a+=s},
$S:12}
A.eM.prototype={
gq(a){var s=this.a
return s.gq(s)},
gF(a){var s=this.a
return s.gF(s)},
gH(a){var s=this.a
return s.gH(s)},
gt(a){var s=this.a,r=s.gL()
return new A.eN(r.gt(r),s,this.$ti.h("eN<1,2>"))}}
A.eN.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.i(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iV:1}
A.f_.prototype={
k(a,b,c){var s=A.n(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.ah("Cannot modify unmodifiable map"))}}
A.df.prototype={
i(a,b){return this.a.i(0,b)},
k(a,b,c){var s=A.n(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
a0(a,b){this.a.a0(0,A.n(this).h("~(1,2)").a(b))},
gF(a){var s=this.a
return s.gF(s)},
gH(a){var s=this.a
return s.gH(s)},
gq(a){var s=this.a
return s.gq(s)},
gL(){return this.a.gL()},
n(a){return this.a.n(0)},
ga9(){return this.a.ga9()},
gO(){return this.a.gO()},
aJ(a,b,c,d){return this.a.aJ(0,A.n(this).C(c).C(d).h("E<1,2>(3,4)").a(b),c,d)},
$iI:1}
A.cd.prototype={}
A.bS.prototype={
gF(a){return this.gq(this)===0},
gH(a){return this.gq(this)!==0},
I(a,b){var s
for(s=J.H(A.n(this).h("l<1>").a(b));s.l();)this.m(0,s.gp())},
eo(a){var s,r,q=this.aB(0)
for(s=this.gt(this);s.l();){r=s.gp()
if(a.u(0,r))q.ai(0,r)}return q},
n(a){return A.n0(this,"{","}")},
a5(a,b){var s
A.n(this).h("r(1)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gp()))return!1
return!0},
aI(a,b){var s,r,q=this.gt(this)
if(!q.l())return""
s=J.d2(q.gp())
if(!q.l())return s
if(b.length===0){r=s
do r+=A.u(q.gp())
while(q.l())}else{r=s
do r=r+b+A.u(q.gp())
while(q.l())}return r.charCodeAt(0)==0?r:r},
ab(a,b){var s
A.n(this).h("r(1)").a(b)
for(s=this.gt(this);s.l();)if(b.$1(s.gp()))return!0
return!1},
N(a,b){var s,r
A.hp(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.b(A.jL(b,b-r,this,"index"))},
$iy:1,
$il:1,
$ica:1}
A.eT.prototype={
aB(a){var s=this.im()
s.I(0,this)
return s}}
A.ie.prototype={
m(a,b){this.$ti.c.a(b)
return A.tF()}}
A.ex.prototype={
u(a,b){return this.a.u(0,b)},
gq(a){return this.a.a},
gt(a){var s=this.a
return A.m_(s,s.r,A.n(s).c)},
aB(a){return this.a.aB(0)}}
A.dz.prototype={}
A.f0.prototype={}
A.i_.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.iy(b):s}},
gq(a){return this.b==null?this.c.a:this.aE().length},
gF(a){return this.gq(0)===0},
gH(a){return this.gq(0)>0},
gL(){if(this.b==null){var s=this.c
return new A.a5(s,A.n(s).h("a5<1>"))}return new A.i0(this)},
ga9(){var s,r=this
if(r.b==null){s=r.c
return new A.ax(s,A.n(s).h("ax<2>"))}return A.h4(r.aE(),new A.lW(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.B(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.V(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.iR().k(0,b,c)},
V(a){if(this.b==null)return this.c.V(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a0(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.a0(0,b)
s=o.aE()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.mf(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.af(o))}},
aE(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.i(Object.keys(this.a),t.s)
return s},
iR(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.t(t.N,t.z)
r=n.aE()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.i(0,o))}if(p===0)B.a.m(r,"")
else B.a.G(r)
n.a=n.b=null
return n.c=s},
iy(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.mf(this.a[a])
return this.b[a]=s}}
A.lW.prototype={
$1(a){return this.a.i(0,A.B(a))},
$S:18}
A.i0.prototype={
gq(a){return this.a.gq(0)},
N(a,b){var s=this.a
if(s.b==null)s=s.gL().N(0,b)
else{s=s.aE()
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gL()
s=s.gt(s)}else{s=s.aE()
s=new J.co(s,s.length,A.M(s).h("co<1>"))}return s}}
A.m8.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:14}
A.m7.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:14}
A.fl.prototype={
jY(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.em(a4,a5,a2)
s=$.qm()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.c(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.c(a3,k)
h=A.mz(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.c(a3,g)
f=A.mz(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.as("")
g=o}else g=o
g.a+=B.b.A(a3,p,q)
c=A.a1(j)
g.a+=c
p=k
continue}}throw A.b(A.a9("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.A(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.nW(a3,m,a5,n,l,r)
else{b=B.c.aa(r-1,4)+1
if(b===1)throw A.b(A.a9(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aM(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.nW(a3,m,a5,n,l,a)
else{b=B.c.aa(a,4)
if(b===1)throw A.b(A.a9(a1,a3,a5))
if(b>1)a3=B.b.aM(a3,a5,a5,b===2?"==":"=")}return a3}}
A.iO.prototype={}
A.cq.prototype={}
A.fz.prototype={}
A.fH.prototype={}
A.e7.prototype={
n(a){var s=A.fI(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.h2.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.h1.prototype={
en(a,b){var s=A.uz(a,this.gjm().a)
return s},
aF(a,b){var s=A.tm(a,this.gjs().b,null)
return s},
gjs(){return B.cF},
gjm(){return B.cE}}
A.jZ.prototype={}
A.jY.prototype={}
A.lY.prototype={
h7(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.A(a,r,q)
r=q+1
o=A.a1(92)
s.a+=o
o=A.a1(117)
s.a+=o
o=A.a1(100)
s.a+=o
o=p>>>8&15
o=A.a1(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.a1(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.a1(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.A(a,r,q)
r=q+1
o=A.a1(92)
s.a+=o
switch(p){case 8:o=A.a1(98)
s.a+=o
break
case 9:o=A.a1(116)
s.a+=o
break
case 10:o=A.a1(110)
s.a+=o
break
case 12:o=A.a1(102)
s.a+=o
break
case 13:o=A.a1(114)
s.a+=o
break
default:o=A.a1(117)
s.a+=o
o=A.a1(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.a1(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.a1(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.A(a,r,q)
r=q+1
o=A.a1(92)
s.a+=o
o=A.a1(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.A(a,r,m)},
c_(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.h2(a,null))}B.a.m(s,a)},
bL(a){var s,r,q,p,o=this
if(o.h6(a))return
o.c_(a)
try{s=o.b.$1(a)
if(!o.h6(s)){q=A.oh(a,null,o.gdT())
throw A.b(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.ac(p)
q=A.oh(a,r,o.gdT())
throw A.b(q)}},
h6(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.h7(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.c_(a)
q.kv(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.c_(a)
r=q.kw(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
kv(a){var s,r,q=this.c
q.a+="["
s=J.bf(a)
if(s.gH(a)){this.bL(s.i(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.bL(s.i(a,r))}}q.a+="]"},
kw(a){var s,r,q,p,o,n,m=this,l={}
if(a.gF(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.bM(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a0(0,new A.lZ(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.h7(A.B(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.bL(r[n])}p.a+="}"
return!0}}
A.lZ.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:12}
A.lX.prototype={
gdT(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.hG.prototype={}
A.ln.prototype={
ji(a){return new A.m6(this.a).i3(t.I.a(a),0,null,!0)}}
A.m6.prototype={
i3(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.I.a(a)
s=A.em(b,c,J.av(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.tW(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.tV(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.c2(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.tX(o)
l.b=0
throw A.b(A.a9(m,a,p+l.c))}return n},
c2(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.K(b+c,2)
r=q.c2(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c2(a,s,c,d)}return q.jl(a,b,c,d)},
jl(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.as(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.c(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.c(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.c(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.a1(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.a1(h)
e.a+=p
break
case 65:p=A.a1(h)
e.a+=p;--d
break
default:p=A.a1(h)
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
p=A.a1(a[l])
e.a+=p}else{p=A.oz(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.a1(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.cr.prototype={
R(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.cr)if(this.a===b.a)s=this.b===b.b
return s},
gD(a){return A.bP(this.a,this.b,B.h,B.h)},
E(a,b){var s
t.ml.a(b)
s=B.c.E(this.a,b.a)
if(s!==0)return s
return B.c.E(this.b,b.b)},
n(a){var s=this,r=A.qO(A.rG(s)),q=A.fB(A.rE(s)),p=A.fB(A.rA(s)),o=A.fB(A.rB(s)),n=A.fB(A.rD(s)),m=A.fB(A.rF(s)),l=A.o1(A.rC(s)),k=s.b,j=k===0?"":A.o1(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaw:1}
A.hV.prototype={
n(a){return this.v()},
$iC:1}
A.T.prototype={
gaQ(){return A.rz(this)}}
A.fi.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fI(s)
return"Assertion failed"}}
A.bU.prototype={}
A.bi.prototype={
gc5(){return"Invalid argument"+(!this.a?"(s)":"")},
gc4(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.u(p),n=s.gc5()+q+o
if(!s.a)return n
return n+s.gc4()+": "+A.fI(s.gd0())},
gd0(){return this.b}}
A.di.prototype={
gd0(){return A.pn(this.b)},
gc5(){return"RangeError"},
gc4(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.u(q):""
else if(q==null)s=": Not greater than or equal to "+A.u(r)
else if(q>r)s=": Not in inclusive range "+A.u(r)+".."+A.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.u(r)
return s}}
A.fS.prototype={
gd0(){return A.a(this.b)},
gc5(){return"RangeError"},
gc4(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.ey.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.hA.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.dm.prototype={
n(a){return"Bad state: "+this.a}}
A.fx.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fI(s)+"."}}
A.he.prototype={
n(a){return"Out of Memory"},
gaQ(){return null},
$iT:1}
A.et.prototype={
n(a){return"Stack Overflow"},
gaQ(){return null},
$iT:1}
A.lJ.prototype={
n(a){return"Exception: "+this.a}}
A.G.prototype={
n(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.A(e,0,75)+"..."
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
k=""}return g+l+B.b.A(e,i,j)+k+"\n"+B.b.W(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.u(f)+")"):g}}
A.l.prototype={
bo(a,b){return A.qG(this,A.n(this).h("l.E"),b)},
b8(a,b,c){var s=A.n(this)
return A.h4(this,s.C(c).h("1(l.E)").a(b),s.h("l.E"),c)},
dh(a,b){var s=A.n(this)
return new A.J(this,s.h("r(l.E)").a(b),s.h("J<l.E>"))},
di(a,b){return new A.bp(this,b.h("bp<0>"))},
a5(a,b){var s
A.n(this).h("r(l.E)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gp()))return!1
return!0},
ab(a,b){var s
A.n(this).h("r(l.E)").a(b)
for(s=this.gt(this);s.l();)if(b.$1(s.gp()))return!0
return!1},
aO(a,b){var s=A.U(this,A.n(this).h("l.E"))
return s},
aN(a){return this.aO(0,!0)},
gq(a){var s,r=this.gt(this)
for(s=0;r.l();)++s
return s},
gF(a){return!this.gt(this).l()},
gH(a){return!this.gF(this)},
gaH(a){var s=this.gt(this)
if(!s.l())throw A.b(A.fW())
return s.gp()},
jD(a,b){var s,r
A.n(this).h("r(l.E)").a(b)
for(s=this.gt(this);s.l();){r=s.gp()
if(b.$1(r))return r}throw A.b(A.fW())},
N(a,b){var s,r
A.hp(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.b(A.jL(b,b-r,this,"index"))},
n(a){return A.rj(this,"(",")")}}
A.E.prototype={
n(a){return"MapEntry("+A.u(this.a)+": "+A.u(this.b)+")"}}
A.X.prototype={
gD(a){return A.A.prototype.gD.call(this,0)},
n(a){return"null"}}
A.A.prototype={$iA:1,
R(a,b){return this===b},
gD(a){return A.el(this)},
n(a){return"Instance of '"+A.hm(this)+"'"},
gJ(a){return A.ir(this)},
toString(){return this.n(this)}}
A.ic.prototype={
n(a){return""},
$ibC:1}
A.as.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$irU:1}
A.lm.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.B(b)
s=B.b.bA(b,"=")
if(s===-1){if(b!=="")a.k(0,A.nl(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.A(b,0,s)
q=B.b.ba(b,s+1)
p=this.a
a.k(0,A.nl(r,0,r.length,p,!0),A.nl(q,0,q.length,p,!0))}return a},
$S:47}
A.ll.prototype={
$2(a,b){throw A.b(A.a9("Illegal IPv6 address, "+a,this.a,b))},
$S:44}
A.f1.prototype={
ge6(){var s,r,q,p,o=this,n=o.w
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
gD(a){var s,r=this,q=r.y
if(q===$){s=B.b.gD(r.ge6())
r.y!==$&&A.q8()
r.y=s
q=s}return q},
gaK(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.oH(s==null?"":s)
r.z!==$&&A.q8()
q=r.z=new A.cd(s,t.ph)}return q},
gh3(){return this.b},
gcZ(){var s=this.c
if(s==null)return""
if(B.b.S(s,"[")&&!B.b.U(s,"v",1))return B.b.A(s,1,s.length-1)
return s},
gd6(){var s=this.d
return s==null?A.p8(this.a):s},
gd7(){var s=this.f
return s==null?"":s},
gfH(){var s=this.r
return s==null?"":s},
gfI(){return this.c!=null},
gfK(){return this.f!=null},
gfJ(){return this.r!=null},
n(a){return this.ge6()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gdk())if(p.c!=null===b.gfI())if(p.b===b.gh3())if(p.gcZ()===b.gcZ())if(p.gd6()===b.gd6())if(p.e===b.gfT()){r=p.f
q=r==null
if(!q===b.gfK()){if(q)r=""
if(r===b.gd7()){r=p.r
q=r==null
if(!q===b.gfJ()){s=q?"":r
s=s===b.gfH()}}}}return s},
$ihD:1,
gdk(){return this.a},
gfT(){return this.e}}
A.lk.prototype={
gh2(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.bB(s,"?",m)
q=s.length
if(r>=0){p=A.f2(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.hU("data","",n,n,A.f2(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.i9.prototype={
gfI(){return this.c>0},
gfK(){return this.f<this.r},
gfJ(){return this.r<this.a.length},
gdk(){var s=this.w
return s==null?this.w=this.i0():s},
i0(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.S(r.a,"http"))return"http"
if(q===5&&B.b.S(r.a,"https"))return"https"
if(s&&B.b.S(r.a,"file"))return"file"
if(q===7&&B.b.S(r.a,"package"))return"package"
return B.b.A(r.a,0,q)},
gh3(){var s=this.c,r=this.b+3
return s>r?B.b.A(this.a,r,s-1):""},
gcZ(){var s=this.c
return s>0?B.b.A(this.a,s,this.d):""},
gd6(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.vl(B.b.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.S(r.a,"http"))return 80
if(s===5&&B.b.S(r.a,"https"))return 443
return 0},
gfT(){return B.b.A(this.a,this.e,this.f)},
gd7(){var s=this.f,r=this.r
return s<r?B.b.A(this.a,s+1,r):""},
gfH(){var s=this.r,r=this.a
return s<r.length?B.b.ba(r,s+1):""},
gaK(){if(this.f>=this.r)return B.aL
return new A.cd(A.oH(this.gd7()),t.ph)},
gD(a){var s=this.x
return s==null?this.x=B.b.gD(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$ihD:1}
A.hU.prototype={}
A.kf.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.mT.prototype={
$1(a){return this.a.cg(this.b.h("0/?").a(a))},
$S:7}
A.mU.prototype={
$1(a){if(a==null)return this.a.eh(new A.kf(a===undefined))
return this.a.eh(a)},
$S:7}
A.mu.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.pE(a))return a
s=this.a
a.toString
if(s.V(a))return s.i(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.m(A.aq(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.d_(!0,"isUtc",t.y)
return new A.cr(r,0,!0)}if(a instanceof RegExp)throw A.b(A.x("structured clone of RegExp",null))
if(a instanceof Promise)return A.bx(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.t(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bw(n),p=s.gt(n);p.l();)m.push(A.c_(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.i(n,l)
if(!(l<m.length))return A.c(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.bf(i),l=0;l<h;++l)o.push(this.$1(s.i(i,l)))
return o}return a},
$S:39}
A.hZ.prototype={
a6(a){if(a<=0||a>4294967296)throw A.b(A.ot(u.g+a))
return Math.random()*a>>>0},
d4(){return Math.random()},
$in8:1}
A.ds.prototype={
bV(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.af()
l.af()
l.af()
l.af()},
af(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.K(o-n+(q-p)+(m-r),4294967296)>>>0},
a6(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.ot(u.g+a))
s=a-1
if((a&s)>>>0===0){p.af()
return(p.a&s)>>>0}do{p.af()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
d4(){var s,r=this
r.af()
s=r.a
r.af()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$in8:1}
A.ky.prototype={}
A.ho.prototype={
v(){return"QualityProfileKind."+this.b}}
A.kw.prototype={}
A.iT.prototype={}
A.iU.prototype={}
A.kq.prototype={
P(){var s,r,q,p
for(s=A.K(["exposure",1,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",0,"affineWarpStrength",0,"vertexSnapGrid",0,"vhsChromaWeight",0,"vhsTrackingWeight",0,"vhsNoiseWeight",0,"vhsHeadSwitchWeight",0,"vhsDropoutWeight",0,"vhsGhostWeight",0],t.N,t.i),s=new A.R(s,A.n(s).h("R<1,2>")).gt(0);s.l();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.b(A.x("PostProcessState."+q+" must be >= 0: "+A.u(p),null))}}}
A.fq.prototype={}
A.fK.prototype={
P(){var s,r,q,p,o,n=this,m=null
if(!B.aA.ga1(0)||!n.b.ga1(0)||!n.r.ga1(0))throw A.b(A.x("FrameEnvironment colors must be finite",m))
s=n.c
if(isFinite(s)){r=n.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.x("FrameEnvironment requires fogEnd >= fogStart, got "+A.u(s)+"/"+n.d,m))
s=n.w
if(!isFinite(s)||s<0)throw A.b(A.x("FrameEnvironment.ambientIntensity must be >= 0: "+A.u(s),m))
s=n.x
if(s!=null){r=s.a
if(!r.ga1(0)||r.gb5()<1e-12)A.m(A.x("DirectionalLight.direction must be finite and nonzero: "+r.n(0),m))
s=s.c
if(!isFinite(s))A.m(A.x("DirectionalLight.intensity must be >= 0: "+s,m))}for(s=n.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.m(A.x("PointLight.position must be finite: "+o.n(0),m))
o=p.d
if(!isFinite(o)||o<0)A.m(A.x("PointLight.intensity must be >= 0: "+A.u(o),m))
o=p.e
if(!isFinite(o)||o<=0)A.m(A.x("PointLight.radius must be > 0: "+A.u(o),m))}for(q=0;!1;++q)B.cU[q].P()}}
A.ji.prototype={}
A.bQ.prototype={
R(a,b){if(b==null)return!1
return J.ff(b)===A.ir(this)&&b instanceof A.bQ&&this.a===b.a&&this.b===b.b},
gD(a){return A.bP(A.ir(this),this.a,this.b,B.h)}}
A.bm.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.cb.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c6.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.hf.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.bJ.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.cy.prototype={
v(){return"HandleRejection."+this.b}}
A.jz.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.cC.prototype={
ga1(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
R(a,b){if(b==null)return!1
return b instanceof A.cC&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gD(a){return A.bP(this.a,this.b,this.c,B.h)},
n(a){return"LinearColor("+A.u(this.a)+", "+A.u(this.b)+", "+A.u(this.c)+")"}}
A.j_.prototype={}
A.hi.prototype={}
A.fh.prototype={
v(){return"AlphaMode."+this.b}}
A.ea.prototype={}
A.bW.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bX.prototype={}
A.lo.prototype={
P(){var s,r,q,p
for(s=0;s<6;++s){r=B.W[s]
q=r.b
p=q+r.c
if(p>14)throw A.b(A.x('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.eb.prototype={
P(){var s,r
this.a.P()
s=this.b.length
if(B.c.aa(s,14)!==0)throw A.b(A.x("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
s=this.d
r=s.a
if(r.ga1(0)&&s.b.ga1(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.x("MeshData.localBounds must be a valid AABB",null))}}
A.kh.prototype={
P(){var s=this.a,r=s.a
if(!r.u(0,"sceneColor")||!r.u(0,"present"))throw A.b(A.x("resource plan must contain sceneColor and present",null))
if(s.ab(0,new A.kj()))throw A.b(A.x("resource plan contains an empty resource ID",null))
if(this.b!==r.u(0,"vhsOutput"))throw A.b(A.x("resource history does not match vhsOutput ownership",null))}}
A.kj.prototype={
$1(a){return A.B(a).length===0},
$S:3}
A.kr.prototype={}
A.hs.prototype={
fN(a){var s=this
if(s.d)A.m(A.q("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.q("resource assembler is initialized"))
a.P()
s.a=a
s.c=1},
aX(){if(this.d)return
this.d=!0
this.a=null}}
A.dT.prototype={
v(){return"DrawMode."+this.b}}
A.fn.prototype={
v(){return"BlendMode."+this.b}}
A.bn.prototype={}
A.l9.prototype={}
A.fw.prototype={
v(){return"ColorEncoding."+this.b}}
A.fE.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.kK.prototype={
P(){var s,r="installedFeatures",q=B.f.eo(B.dh)
if(q.a!==0)A.m(A.aF(q,r,"contains unknown pipeline features"))
s=B.f.gH(B.f)
if(s)A.m(A.aF(B.f,r,"safe profiles cannot install optional features"))}}
A.cI.prototype={
v(){return"RendererState."+this.b}}
A.jk.prototype={
n(a){return"FrameStats(#"+this.a+" draws="+this.b+" tris="+this.c+" culled=0 gpu=0B)"}}
A.ka.prototype={}
A.kb.prototype={
$3(a,b,c){return new A.c6(A.a(a),A.a(b),A.bd(c))},
$S:20}
A.hC.prototype={}
A.kd.prototype={
ec(a){var s,r,q,p,o,n,m,l,k,j,i=u.k,h=this.a,g=a.b,f=A.td(h,new A.jv(g.byteLength,B.cp,B.cn))
if(h.b!==B.e)A.m(A.q(i))
s=A.d(f.a)
r=h.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,g)
p=A.oU(h)
A.lx(h,p)
if(h.b!==B.e)A.m(A.q(i))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a0(t.S)
for(n=a.a,m=0;m<6;++m){l=B.W[m]
k=A.pQ(l.a)
if(!o.m(0,k))continue
j=A.u4(n,k,l)
if(h.b!==B.e)A.m(A.q(i))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(h.b!==B.e)A.m(A.q(i))
r.enableVertexAttribArray(k)}return new A.hC(f,null,p,0,g.length/14|0)},
ke(a){var s=this.c.i(0,a.a)
if(s==null)throw A.b(A.cx(B.V,a))
this.b.jn(a)
return s},
d8(){var s,r,q,p
for(s=this.b.bE(),r=s.$ti,s=new A.aX(s.a(),r.h("aX<1>")),q=this.c,r=r.c;s.l();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.ec(p.b))}}}
A.ke.prototype={
$3(a,b,c){return new A.bm(A.a(a),A.a(b),A.bd(c))},
$S:21}
A.le.prototype={
dG(){var s=this.a,r=A.oR(s,B.bk)
A.oS(s,r,0,$.qb())
return r},
d8(){var s,r,q,p,o,n,m,l,k,j=this
j.dG()
for(s=j.b.bE(),r=s.$ti,s=new A.aX(s.a(),r.h("aX<1>")),q=j.c,p=j.a,r=r.c;s.l();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
if(m.gfP().a5(0,new A.lg()))continue
l=A.oR(p,m.gaq())
for(k=0;B.c.aP(k,m.gfP().length);++k){o=m.gfP()
if(!(k<o.length))return A.c(o,k)
A.oS(p,l,k,o[k])}if(m.gkz())A.te(p,l)
q.k(0,n.a,l)}}}
A.lf.prototype={
$3(a,b,c){return new A.cb(A.a(a),A.a(b),A.bd(c))},
$S:22}
A.lg.prototype={
$1(a){return!1},
$S:23}
A.e1.prototype={}
A.jb.prototype={
j9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.C.a(a)
s=new A.kC(A.i([],t.hJ),A.a0(t.N))
for(r=this.a,q=0;q<2;++q)r[q].el(s,b)
p=s.j8(a,!1)
if(p.b.length!==0)return new A.fJ(p,B.cV)
o=p.a
n=A.M(o)
m=new A.W(o,n.h("j(1)").a(new A.je()),n.h("W<1,j>")).aB(0)
l=A.i([],t.c)
for(q=0;q<2;++q){k=r[q]
for(o=k.ek(d),j=0;j<1;++j){i=o[j]
if(!m.u(0,i.gaq().a))throw A.b(A.q('RenderFeature "'+k.gfL()+'" created a pass "'+i.gaq().a+'" that it never declared into the graph'))
B.a.m(l,i)}}B.a.T(l,new A.jf(p))
return new A.fJ(p,l)}}
A.je.prototype={
$1(a){return t.A.a(a).a},
$S:24}
A.jf.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.E(B.a.fM(s,new A.jc(a)),B.a.fM(s,new A.jd(b)))},
$S:25}
A.jc.prototype={
$1(a){return t.A.a(a).a===this.a.gaq().a},
$S:5}
A.jd.prototype={
$1(a){return t.A.a(a).a===this.a.gaq().a},
$S:5}
A.fJ.prototype={}
A.db.prototype={
v(){return"FrameQueueState."+this.b}}
A.jj.prototype={}
A.b6.prototype={
gb9(){var s=this.c,r=A.M(s)
return new A.J(s,r.h("r(1)").a(new A.kl()),r.h("J<1>"))},
gbM(){var s=this.c,r=A.M(s)
return new A.J(s,r.h("r(1)").a(new A.km()),r.h("J<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.kl.prototype={
$1(a){var s=t.J.a(a).b
return s===B.a0||s===B.v},
$S:8}
A.km.prototype={
$1(a){return t.J.a(a).b===B.aT},
$S:8}
A.bI.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bk.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.hr.prototype={
v(){return"ResourceFormat."+this.b}}
A.e_.prototype={
v(){return"GraphStage."+this.b}}
A.kS.prototype={
n(a){var s=B.dd.n(0)
return"ResourceRef(sceneColor#0, "+s+", 384x216)"}}
A.dj.prototype={
v(){return"ResourceAccess."+this.b}}
A.bR.prototype={}
A.dQ.prototype={}
A.ku.prototype={
fW(a){var s,r,q,p,o,n,m=this
a.P()
s=null
try{r=t.a
s=A.tf(m.a,a.c,r.a(a.d.gL().aN(0)),r.a(a.f),a.b)}catch(q){if(A.ac(q) instanceof A.es){++m.e
throw q}else throw q}p=new A.dQ(s)
r=m.b
o=a.a
n=r.i(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.d(n.b.a))
return p},
i6(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.aa(s,s.r,s.e,a.$ti.h("aa<1>")),r=this.a.a;s.l();)r.deleteProgram(A.d(s.d.b.a))}}
A.hn.prototype={
P(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.x("ProgramSource.id must not be empty",m))
s=t.S
r=A.a0(s)
for(q=this.d.gO(),q=q.gt(q);q.l();){p=q.gp()
o=p.b
if(o<0)throw A.b(A.x('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.m(0,o))throw A.b(A.x('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a0(s)
for(s=this.e.gO(),s=s.gt(s);s.l();){q=s.gp()
p=q.b
if(p<0)throw A.b(A.x('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.m(0,p))throw A.b(A.x('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.kA.prototype={}
A.hj.prototype={
v(){return"PolygonOffset."+this.b}}
A.kn.prototype={
h0(){return new A.j4(this.d,this.e,!1,this.r)}}
A.kC.prototype={
j8(a,b){var s=this.iS(t.C.a(a),!1),r=this.a,q=A.M(r)
return new A.kB(A.ag(new A.J(r,q.h("r(1)").a(new A.kG()),q.h("J<1>")),t.A),s)},
iS(a,b){var s,r,q,p,o,n,m=this
t.C.a(a)
s=A.i([],t.aW)
r=m.a
q=A.M(r)
p=q.h("J<1>")
o=A.U(new A.J(r,q.h("r(1)").a(new A.kF()),p),p.h("l.E"))
m.hR(o,a,s)
m.hV(o,s)
m.hU(o,!1,s)
n=m.hY(o,s)
m.hW(o,n,s)
m.hX(o,s)
m.hT(o,n,s)
m.hS(o,s)
return s},
hR(a,b,c){var s,r,q,p
t.O.a(a)
t.C.a(b)
t._.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
p=B.f.eo(b)
if(p.a!==0)B.a.m(c,new A.bk(B.cw,q.a,"missing capabilities: "+p.aI(0,", ")))}},
hV(a,b){var s,r,q,p
t.O.a(a)
t._.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r)for(q=a[r].gb9(),p=J.H(q.a),q=new A.L(p,q.b,q.$ti.h("L<1>"));q.l();)p.gp()},
hU(a,b,c){var s,r,q,p,o,n
t.O.a(a)
t._.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
for(p=q.c,o=q.a,n=0;n<1;++n)if(p[n].b===B.v)B.a.m(c,new A.bk(B.cu,o,"history read of sceneColor with no valid previous frame"))}},
hY(a,b){var s,r,q,p,o,n,m,l,k,j="sceneColor#0"
t.O.a(a)
t._.a(b)
s=A.t(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.w)(a),++q){p=a[q]
for(o=p.gbM(),n=J.H(o.a),o=new A.L(n,o.b,o.$ti.h("L<1>")),m=p.a;o.l();){l=n.gp()
k=s.i(0,j)
if(k!=null){B.a.m(b,new A.bk(B.cs,m,l.a.n(0)+" already written by "+k.a))
continue}s.k(0,j,p)}}return s},
hW(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t._.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gb9(),p=J.H(q.a),q=new A.L(p,q.b,q.$ti.h("L<1>")),o=r.a;q.l();){n=p.gp()
if(n.b===B.v)continue
m=b.i(0,"sceneColor#0")
if(m==null){B.a.m(c,new A.bk(B.aw,o,"reads "+n.a.n(0)+" but no pass writes that version"))
continue}if(B.a.bA(a,m)>s)B.a.m(c,new A.bk(B.aw,o,"reads "+n.a.n(0)+" before writer "+m.a+" runs"))}}},
hX(a,b){var s,r,q,p,o,n,m,l,k
t.O.a(a)
t._.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r){q=a[r]
for(p=q.gb9(),o=J.H(p.a),p=new A.L(o,p.b,p.$ti.h("L<1>")),n=q.a;p.l();){m=o.gp()
if(m.b===B.v)continue
for(l=q.gbM(),k=J.H(l.a),l=new A.L(k,l.b,l.$ti.h("L<1>")),m=m.a;l.l();){k.gp()
B.a.m(b,new A.bk(B.ct,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
hT(a,b,c){var s,r,q,p,o,n
t.O.a(a)
t.iE.a(b)
t._.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.w)(a),++r)for(q=a[r].gb9(),p=J.H(q.a),q=new A.L(p,q.b,q.$ti.h("L<1>"));q.l();){o=p.gp()
if(o.b===B.v)continue
n=b.i(0,"sceneColor#0")
if(n==null)continue
n.gbM().jD(0,new A.kE(o))}},
hS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="sceneColor#0"
t.O.a(a)
t._.a(b)
s=t.S
r=A.t(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gbM(),o=J.H(p.a),p=new A.L(o,p.b,p.$ti.h("L<1>"));p.l();){o.gp()
r.k(0,h,q)}n=J.fY(p,t.nO)
for(m=0;m<p;++m)n[m]=A.a0(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gb9(),p=J.H(s.a),s=new A.L(p,s.b,s.$ti.h("L<1>"));s.l();){if(p.gp().b===B.v)continue
l=r.i(0,h)
if(l!=null&&l!==q){if(l>>>0!==l||l>=n.length)return A.c(n,l)
n[l].m(0,q)}}p=t.y
k=A.bM(s,!1,!1,p)
s=a.length
j=A.bM(s,!1,!1,p)
i=new A.kD(k,j,n)
for(q=0;q<a.length;++q){if(!(q<s))return A.c(j,q)
if(!j[q]&&i.$1(q)){if(!(q<a.length))return A.c(a,q)
B.a.m(b,new A.bk(B.cv,a[q].a,"participates in a resource dependency cycle"))}}}}
A.kG.prototype={
$1(a){t.A.a(a)
return A.n7()},
$S:5}
A.kF.prototype={
$1(a){t.A.a(a)
return A.n7()},
$S:5}
A.kE.prototype={
$1(a){t.J.a(a)
return!0},
$S:8}
A.kD.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.c(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.c(s,a)
if(s[a])return!1
B.a.k(n,a,!0)
r=o.c
if(!(a<r.length))return A.c(r,a)
r=r[a]
r=A.m_(r,r.r,A.n(r).c)
q=r.$ti.c
while(r.l()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.kB.prototype={}
A.eL.prototype={$iaT:1}
A.en.prototype={
gd1(){return new A.bF(this.jP(),t.fJ)},
jP(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gd1(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bE(),n=o.$ti,o=new A.aX(o.a(),n.h("aX<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.l()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.P()
f=k.a(g.a)
m.aC(f)
f=f.a
if(!(f>=0&&f<j.length)){A.c(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.bK()
f=f.gcj()
d=A.M(f)
r=5
return a.b=new A.eL(h,g,A.iA(new A.W(f,d.h("F(1)").a(i.gde()),d.h("W<1,F>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$irL:1}
A.kI.prototype={
$3(a,b,c){return new A.bJ(A.a(a),A.a(b),A.bd(c))},
$S:29}
A.mh.prototype={
$1(a){var s=this.a.w.a.ke(a),r=s.b!=null,q=r?s.d:s.e
return new A.ep(s.c,r,q)},
$S:30}
A.i6.prototype={$irK:1}
A.hX.prototype={$ira:1}
A.kR.prototype={
aX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.r)return
s=f.f
r=A.U(s,A.n(s).c)
q=r.length
p=f.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.w)(r),++l){k=r[l]
j=o.ai(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.d9(k)}r=f.e
q=A.U(r,A.n(r).c)
p=q.length
o=f.b.a
l=0
for(;l<q.length;q.length===p||(0,A.w)(q),++l)o.d9(q[l])
q=f.d
p=A.U(q,A.n(q).c)
o=p.length
n=f.a
m=n.c
i=n.a.a
l=0
for(;l<p.length;p.length===o||(0,A.w)(p),++l){k=p[l]
h=m.ai(0,k.a)
if(h!=null){i.deleteVertexArray(A.d(h.c.a))
i.deleteBuffer(A.d(h.a.a))
g=h.b
if(g!=null)i.deleteBuffer(A.d(g.a))}n.b.d9(k)}s.G(0)
r.G(0)
q.G(0)
f.r=!0}}
A.kY.prototype={
gkg(){var s=this.w
return s==null?A.m(A.q("renderer is not initialized")):s},
d_(a,b){return this.jH(a,b)},
jH(a,b){var s=0,r=A.bu(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$d_=A.bv(function(c,a0){if(c===1)return A.br(a0,r)
for(;;)switch(s){case 0:if(q.e!==B.Z)throw A.b(A.q("renderer can only be initialized once"))
a.P()
if(b.a<0||b.b<0)A.m(A.x("SurfaceMetrics css size must be >= 0",null))
if(b.c<0||b.d<0)A.m(A.x("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))A.m(A.x("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))
p=q.a
if(p.b===B.t)throw A.b(A.q("renderer device is context lost"))
q.e=B.dc
try{o=v.G
n=p.aT(A.a(o.WebGL2RenderingContext.MAX_TEXTURE_SIZE))
p.aT(A.a(o.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS))
m=p.aT(A.a(o.WebGL2RenderingContext.MAX_SAMPLES))
p.aT(A.a(o.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS))
p.aT(A.a(o.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS))
l=p.a
k=A.e(l.getExtension("EXT_texture_filter_anisotropic"))
A.e(l.getExtension("EXT_disjoint_timer_query_webgl2"))
j=A.e(l.getExtension("EXT_color_buffer_float"))
i=A.e(l.getExtension("EXT_color_buffer_half_float"))
h=A.e(l.getExtension("WEBGL_lose_context"))
A.c_(l.getParameter(A.a(o.WebGL2RenderingContext.RENDERER)))
A.c_(l.getParameter(A.a(o.WebGL2RenderingContext.VENDOR)))
q.r=new A.ky("WebGL2",n,m,k!=null,j!=null,i!=null,h!=null)
o=q.b
g=A.ki(a)
l=o.a
if(l.a!=null)A.m(A.q("configuration state is already initialized"))
a.P()
l.a=a
A.ki(a)
l.d=1
o.b.fN(g)
o=A.rr()
q.w=new A.kR(A.rs(p),o,A.rW(p),A.a0(t.l0),A.a0(t.fP),A.a0(t.lu))
o=new A.hs()
l=new A.jx(p,o)
g=A.ki(a)
f=l.dH(g,a)
o.fN(g)
l.c=new A.hk(new A.kr(g),f)
q.x=l
q.y=new A.ku(p,A.t(t.N,t.gY))
q.as=a
A.pt(q)
q.e=B.a_}catch(d){p=q.y
if(p!=null){o=p.b
p.i6(new A.ax(o,A.n(o).h("ax<2>")))
o.G(0)}p=q.x
if(p!=null)p.aX()
p=q.w
if(p!=null)p.aX()
q.w=null
q.e=B.Z
throw d}return A.bs(null,r)}})
return A.bt($async$d_,r)},
jt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.c3()
s=c.at
r=c.ax
if(s==null||r==null)throw A.b(A.q("renderer.endFrame called without an active frame"))
k=c.c
if(k.b!==B.S)A.m(A.q("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.l8(j,0,A.d_(k.c,"count",t.S),A.M(j).c).aO(0,!1)
k.b=B.cg
q=i
try{A.ua(c,r,s)
k=r.gd1()
j=t.p9
h=k.$ti
k=A.U(A.h4(k,h.h("bn(l.E)").a(new A.kZ()),h.h("l.E"),j),j)
p=k
J.qu(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.w)(p),++g){m=p[g]
j=c.w.a
h=m.a
f=h.a
e=j.c.i(0,f)
if(e==null)A.m(A.cx(B.V,h))
j=j.b
d=j.$ti
j.aC(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.c(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.K(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.a3()
n=j+h}p=s.e
k=J.av(o)
j=n
J.av(o)
return new A.jk(p,k,j)}finally{c.ax=c.at=null}},
iB(){var s,r,q,p=this
if(p.e!==B.aS)return
if(p.a.b===B.t)throw A.b(A.q("renderer context remains lost"))
s=p.w
if(s.r)A.m(A.q("resource library is disposed"))
s.a.d8()
s.c.d8()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.m(A.q("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.m(A.q("GPU resource adapter is not initialized"))
s.c=new A.hk(q.a,s.dH(A.ki(r),r))
s=p.y
s.c=null
s.b.G(0)
A.pt(p)
p.e=B.a_},
c3(){var s=this.e
if(s!==B.a_)throw A.b(A.q("renderer is not ready: "+s.b))
if(this.a.b===B.t){this.e=B.aS
throw A.b(A.q("renderer context lost"))}}}
A.kZ.prototype={
$1(a){return t.os.a(a).b},
$S:31}
A.aK.prototype={
E(a,b){var s,r=this
t.nL.a(b)
s=B.c.E(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.E(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.E(r.c.a,b.c.a)
if(s!==0)return s
return B.c.E(r.d,b.d)},
$iaw:1}
A.aG.prototype={
E(a,b){var s
t.dP.a(b)
s=B.d.E(b.a,this.a)
if(s!==0)return s
return B.c.E(this.b,b.b)},
$iaw:1}
A.ad.prototype={}
A.mY.prototype={
$2(a,b){var s=t.R
return s.a(a).a.E(0,s.a(b).a)},
$S:32}
A.mZ.prototype={
$1(a){return t.R.a(a).b},
$S:33}
A.mW.prototype={
$2(a,b){var s=t.d
return s.a(a).a.E(0,s.a(b).a)},
$S:34}
A.mX.prototype={
$1(a){return t.d.a(a).b},
$S:35}
A.iW.prototype={}
A.iz.prototype={
gcj(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.i([new A.F(o,n,p),new A.F(r,n,p),new A.F(o,q,p),new A.F(r,q,p),new A.F(o,n,s),new A.F(r,n,s),new A.F(o,q,s),new A.F(r,q,s)],t.hL)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.cF.prototype={}
A.dc.prototype={
v(){return"FrustumTest."+this.b}}
A.jl.prototype={
kn(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.aq
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.ch:B.ci}}
A.jm.prototype={
$4(a,b,c,d){var s=new A.F(a,b,c),r=new A.cF(s,d),q=Math.sqrt(s.gb5())
if(q<1e-9)s=r
else{s=1/q
s=new A.cF(new A.F(a*s,b*s,c*s),d/q)}return s},
$S:36}
A.bO.prototype={
W(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.c(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.c(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.c(h,j)
h[j]=l}return new A.bO(h)},
h1(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.F(k,j,i):new A.F(k/h,j/h,i/h)},
jX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.m(A.q("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.u(k)+")"))
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
return new A.bO(h)},
ga1(a){return B.u.a5(this.a,new A.k9())},
n(a){return"Mat4("+A.u(this.a)+")"}}
A.k9.prototype={
$1(a){return isFinite(A.mc(a))},
$S:38}
A.kx.prototype={
n(a){return"Quat(0, 0, 0, 1)"}}
A.lh.prototype={
P(){if(!B.w.ga1(0))throw A.b(A.x("Transform.translation must be finite: "+B.w.n(0),null))
var s=!1
if(isFinite(0))s=isFinite(1)
if(!s)throw A.b(A.x("Transform.rotation must be finite: "+B.af.n(0),null))
if(!isFinite(1))throw A.b(A.x("Transform.scale must be finite and positive: 1",null))},
bK(){var s,r,q,p,o,n,m,l,k=t.n,j=A.om(A.i([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],k)).a,i=j.length
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
return A.om(A.i([s,r,q,0,p,o,n,0,m,l,j[10],0,0,0,0,1],k))},
n(a){return"Transform("+B.w.n(0)+", "+B.af.n(0)+", scale=1)"}}
A.F.prototype={
aY(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.F(s*r-q*p,q*o-n*r,n*p-s*o)},
gb5(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gb5())},
ga1(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga2(){var s=this,r=Math.sqrt(s.gb5())
return r<1e-9?B.w:new A.F(s.a/r,s.b/r,s.c/r)},
R(a,b){if(b==null)return!1
return b instanceof A.F&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gD(a){return A.bP(this.a,this.b,this.c,B.h)},
n(a){return"Vec3("+A.u(this.a)+", "+A.u(this.b)+", "+A.u(this.c)+")"}}
A.fp.prototype={}
A.fo.prototype={
h4(a){var s=this.a.i(0,a)
if(s==null)throw A.b(A.q('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$irJ:1}
A.hl.prototype={
gfL(){return"present"},
el(a,b){B.a.m(a.a,new A.b6("present",B.av,A.i([new A.bR(B.D,B.a0)],t.U)))},
ek(a){var s=this,r=s.a.fW(new A.hn("present",s.b,s.c,B.aM,B.d4,B.j)),q=A.oU(s.d)
return A.i([new A.i7(A.oo(!1,!1,!1,"present",B.av,A.i([new A.bR(B.D,B.a0)],t.U)),r,q,B.D)],t.c)},
$ikz:1}
A.i7.prototype={
ep(a){var s=a.h4("sceneColor"),r=a.b.a
A.oM(r,null)
A.oL(r,this.a.h0())
A.oO(r,this.b.b)
A.lx(r,this.c)
A.tb(r,0,s.b)
A.oN(r,3,0)},
$ic9:1,
gaq(){return this.a}}
A.ep.prototype={}
A.hP.prototype={
gfL(){return"world"},
el(a,b){B.a.m(a.a,new A.b6("worldOpaqueTransparent",B.au,A.i([B.aU],t.U)))},
ek(a){var s=this,r=s.a.fW(new A.hn("safeWorld",s.b,s.c,B.d3,B.aM,B.cH))
return A.i([new A.ig(A.oo(!0,!0,!0,"worldOpaqueTransparent",B.au,A.i([B.aU],t.U)),r,s.d)],t.c)},
$ikz:1}
A.ig.prototype={
ep(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.oM(j,a.h4("sceneColor").b)
A.oL(j,n.a.h0())
if(j.b!==B.e)A.m(A.q(u.k))
s=j.a
s.clearColor(0,0,0,1)
s.clear(A.t8(j,B.bA))
A.oO(j,n.b.b)
A.eB(j,"uViewProjection",new A.cc(B.a6,new Float32Array(A.ck(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.dF
s=t.n
A.eB(j,"uLightDir",new A.cc(B.b9,new Float32Array(A.ck(A.i([q.a,q.b,q.c],s)))))
p=k.r
A.eB(j,"uAmbientColor",new A.cc(B.b9,new Float32Array(A.ck(A.i([p.a,p.b,p.c],s)))))
A.eB(j,"uAmbientIntensity",new A.cc(B.dC,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.w)(j),++o)n.dK(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.w)(l),++o)n.dK(m,l[o])},
dK(a,b){var s,r,q,p,o,n=this,m=u.k
if(b instanceof A.e1){s=b.a.b
n.e1(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.lx(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q){if(s.b!==B.e)A.m(A.q(m))
q=v.G
A.aE(s.a,"drawElementsInstanced",[A.a(q.WebGL2RenderingContext.TRIANGLES),p,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0,o],t.H)}else{if(s.b!==B.e)A.m(A.q(m))
s.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),0,p,o)}}else if(b instanceof A.eL){s=b.b
n.e1(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.lx(s,r.a)
q=r.b
p=r.c
if(q){if(s.b!==B.e)A.m(A.q(m))
q=v.G
s.a.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),p,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)}else A.oN(s,p,0)}else throw A.b(A.x("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ff(b).n(0),null))},
e1(a,b){var s=b.bK(),r=a.a
A.eB(r,"uModel",new A.cc(B.a6,new Float32Array(A.ck(s.a))))
A.eB(r,"uNormalMatrix",new A.cc(B.a6,new Float32Array(A.ck(s.jX().a))))},
$ic9:1,
gaq(){return this.a}}
A.fN.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.dX.prototype={
v(){return"GpuBufferKind."+this.b}}
A.fO.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.fP.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jv.prototype={}
A.jy.prototype={}
A.cw.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.dZ.prototype={}
A.dY.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.cK.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.es.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.dp.prototype={
v(){return"UniformType."+this.b}}
A.cc.prototype={}
A.fs.prototype={
v(){return"ClearMask."+this.b}}
A.fD.prototype={$iqU:1}
A.hk.prototype={}
A.jx.prototype={
gp(){var s=this.c
if(s==null)throw A.b(A.q("GPU resource adapter is not initialized"))
return s},
aX(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.i5(s.b)
r.b.aX()
r.c=null
r.e=!0},
dH(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t.k,a8=A.t(a6,a7),a9=A.i([],t.l2)
try{for(p=b0.a.a,p=A.m_(p,p.r,A.n(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.l();){j=p.d
s=j==null?m.a(j):j
if(J.Z(s,"sceneColor#1")){j=J.au(a8,"sceneColor")
j.toString
J.by(a8,s,j)
continue}j=this.i7(s,b1)
if(n.b!==B.e)A.m(A.q(u.k))
i=j.a
if(i<=0||j.b<=0)A.m(A.x("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.e(l.createFramebuffer())
if(h==null)A.m(A.q("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.T
if(f&&!j.e)A.m(A.x("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.ar||g===B.cr
d=a5
c=a5
b=a5
a=a5
if(f){l.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.NONE)],k))
l.readBuffer(A.a(o.WebGL2RenderingContext.NONE))}else{g=j.c
a0=j.b
if(g>1){c=A.e(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),c)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.RENDERBUFFER),c)
if(e){a=A.e(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),a)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(o.WebGL2RenderingContext.RENDERBUFFER),a)
l.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}else{d=A.e(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),d)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.TEXTURE_2D),d,0])
if(e){b=A.e(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.RGBA8),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.LINEAR))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.a(o.WebGL2RenderingContext.TEXTURE_2D),b,0])
l.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],k))}}}a1=a5
a2=a5
if(j.e){g=j.c
a0=j.b
if(g>1){a1=A.e(l.createRenderbuffer())
l.bindRenderbuffer(A.a(o.WebGL2RenderingContext.RENDERBUFFER),a1)
l.renderbufferStorageMultisample.apply(l,[A.a(o.WebGL2RenderingContext.RENDERBUFFER),g,A.a(o.WebGL2RenderingContext.DEPTH_COMPONENT24),i,a0])
l.framebufferRenderbuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(o.WebGL2RenderingContext.RENDERBUFFER),a1)}else{a2=A.e(l.createTexture())
l.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a2)
l.texStorage2D.apply(l,[A.a(o.WebGL2RenderingContext.TEXTURE_2D),1,A.a(o.WebGL2RenderingContext.DEPTH_COMPONENT24),i,a0])
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(o.WebGL2RenderingContext.NEAREST))
l.texParameteri(A.a(o.WebGL2RenderingContext.TEXTURE_2D),A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(o.WebGL2RenderingContext.NEAREST))
l.framebufferTexture2D.apply(l,[A.a(o.WebGL2RenderingContext.FRAMEBUFFER),A.a(o.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(o.WebGL2RenderingContext.TEXTURE_2D),a2,0])}}g=A.a(l.checkFramebufferStatus(A.a(o.WebGL2RenderingContext.FRAMEBUFFER)))
a0=A.a(o.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)
if(g!==a0){A.nc(n,h,d,c,a1,a2,b,a)
A.m(A.q("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.cj(new A.f3(h,d,c,a1,a2,b,a,i,j.b))
J.fe(a9,r)
J.by(a8,s,r)}a6=A.d6(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.M(a6).h("eq<1>"),a6=new A.eq(a6,p),a6=new A.bL(a6,a6.gq(0),p.h("bL<a6.E>")),o=this.a,n=t.jg,p=p.h("a6.E");a6.l();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.nc(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
i7(a,b){var s,r,q,p
if(a==="shadowMap")return new A.dZ(512,512,1,B.T,!0)
if(a==="sceneDepth")return new A.dZ(384,216,1,B.T,!0)
s=B.b.S(a,"ssao")||B.b.S(a,"bloomBlur")||B.b.S(a,"dofBlur")
r=s?192:384
q=s?108:216
p=a==="sceneColor"
return new A.dZ(r,q,1,p?B.ar:B.cq,p)},
i5(a){var s,r,q,p,o,n=A.n5(t.f7.a(a).ga9(),t.k)
for(n=A.m_(n,n.r,A.n(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.l();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.nc(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.dy.prototype={
v(){return"_SlotState."+this.b}}
A.ch.prototype={
scl(a){this.c=this.$ti.h("1?").a(a)}}
A.bA.prototype={
cm(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.c(s,-1)
q=s.pop()}else{s=o.b
B.a.m(s,new A.ch(B.O,n.h("ch<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.c(n,q)
p=n[q];++p.a
p.b=B.eg
p.scl(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
jk(a){return this.cm(a,null)},
aC(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.cx(B.ay,a))
r=this.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.cx(B.az,a))
s=q.b
if(s===B.P||s===B.O)throw A.b(A.cx(B.V,a))},
jn(a){var s,r,q=this.$ti
q.c.a(a)
this.aC(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.c(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
d9(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.cx(B.ay,a))
r=p.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.cx(B.az,a))
r=q.b
if(r===B.P||r===B.O)throw A.b(A.cx(B.cx,a))
q.b=B.P
q.scl(null)
B.a.m(p.c,s);++p.e},
bE(){return new A.bF(this.jQ(),this.$ti.h("bF<+(1,2)>"))},
jQ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bE(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.P||j===B.O){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.dw(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.fm.prototype={
v(){return"BlendEquation."+this.b}}
A.dO.prototype={
v(){return"BlendFactor."+this.b}}
A.fA.prototype={
v(){return"CullFace."+this.b}}
A.fC.prototype={
v(){return"DepthFunc."+this.b}}
A.j4.prototype={}
A.ak.prototype={
v(){return"StateField."+this.b}}
A.lA.prototype={
jo(a){var s,r=this.a
if(r==null)return A.k6(B.cX,t.dB)
s=A.a0(t.dB)
if(r.a!==a.a)s.m(0,B.a3)
if(r.c!==a.c)s.m(0,B.a4)
if(r.w!==a.w)s.m(0,B.a5)
return s}}
A.cj.prototype={$ijw:1}
A.f4.prototype={}
A.f3.prototype={}
A.hO.prototype={
hK(a){var s=this,r=A.d(s.a.canvas)
s.c=A.a8(new A.ly(s))
s.d=A.a8(new A.lz(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
aT(a){var s=A.c_(this.a.getParameter(a))
return typeof s=="number"?B.d.al(s):0},
$irc:1}
A.ly.prototype={
$1(a){A.d(a).preventDefault()
this.a.b=B.t},
$S:2}
A.lz.prototype={
$1(a){A.d(a)
this.a.b=B.e},
$S:2}
A.fF.prototype={
B(){var s=this
return A.K(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.fk.prototype={
hA(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
j===$&&A.h()
s=k.a
A.e(j.connect(A.d(s.destination)))
r=k.d
r===$&&A.h()
A.d(r.gain).value=0.25
q=k.e
q===$&&A.h()
A.d(q.gain).value=0.12
p=k.f
p===$&&A.h()
A.d(p.gain).value=0.2
o=k.r
o===$&&A.h()
A.d(o.gain).value=0.4
n=k.w
n===$&&A.h()
A.d(n.gain).value=0.1
m=k.x
m===$&&A.h()
A.d(m.gain).value=1
for(r=[r,q,p,o,n,m],l=0;l<6;++l)A.e(r[l].connect(j))
r=k.y
r===$&&A.h()
A.d(r.gain).value=1
q=k.z
q===$&&A.h()
A.d(q.gain).value=0.35
A.e(p.connect(r))
A.e(o.connect(r))
o=k.Q
o===$&&A.h()
A.e(r.connect(o))
A.e(o.connect(q))
A.e(q.connect(j))
q=A.d(s.createBiquadFilter())
q.type="highpass"
A.d(q.frequency).value=80
k.dx!==$&&A.v()
k.dx=q
o=A.d(s.createBiquadFilter())
o.type="lowpass"
A.d(o.frequency).value=11e3
k.dy!==$&&A.v()
k.dy=o
A.e(q.connect(o))
A.e(o.connect(A.d(s.destination)))
j.disconnect(A.d(s.destination))
A.e(j.connect(q))},
h_(){var s=this.a
if(A.B(s.state)==="suspended")A.d(s.resume())},
iK(a){var s,r,q=this
if(B.b.S(a,"vo-")){s=q.x
s===$&&A.h()
return s}r=B.aN.i(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.h()
break A}if("bed"===r){s=q.e
s===$&&A.h()
break A}if("mid"===r){s=q.f
s===$&&A.h()
break A}if("air"===r){s=q.w
s===$&&A.h()
break A}s=q.r
s===$&&A.h()
break A}return s},
ig(){var s,r,q,p,o,n,m,l=this.a,k=A.il(l.sampleRate),j=B.d.ak(k*2),i=A.d(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.d4()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.c(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
d5(a,b){var s,r,q,p=this,o=p.as.i(0,a)
if(o==null)return
s=p.a
r=A.d(s.createBufferSource())
r.buffer=o
A.d(r.playbackRate).value=0.94+p.at.d4()*0.12
q=A.d(s.createGain())
A.d(q.gain).value=b
A.e(r.connect(q))
s=B.aN.i(0,a)
A.e(q.connect(p.iK(s==null?"transient":s)))
r.start()},
k7(a){return this.d5(a,1)},
ce(){return}}
A.iL.prototype={
$1(a){return this.h8(t.q.a(a))},
h8(a){var s=0,r=A.bu(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bv(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.an(A.bx(A.d(A.d(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.an(A.bx(A.d(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.an(A.bx(A.d(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ac(h)
A.d(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.u(l))
s=5
break
case 2:s=1
break
case 5:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$$1,r)},
$S:40}
A.iR.prototype={
d2(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.k(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.qt().ap(q).ga2()
p.d=q
p.c=p.b.ap(q).ga2()
p.a=a}}
A.jh.prototype={}
A.hx.prototype={}
A.jt.prototype={
i9(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.e(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.e(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.e(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.c_(s.getParameter(34047))
if(typeof p=="number")o.c=p},
bF(a,b,c,d,e,f){return this.jR(a,b,c,d,e,f)},
jR(a,b,c,a0,a1,a2){var s=0,r=A.bu(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$bF=A.bv(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.d(A.d(j.document).createElement("img"))
m.src=a
s=7
return A.an(A.bx(A.d(m.decode()),t.X),$async$bF)
case 7:i=n.a
h=A.e(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aE(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.i9()
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
case 6:case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$bF,r)},
bG(a,b,c){var s=!1
return this.jS(t.a.a(a),b,!1)},
jS(b0,b1,b2){var s=0,r=A.bu(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$bG=A.bv(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.i([],t.W)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.d(A.d(a0.document).createElement("img"))
j.src=k
s=10
return A.an(A.bx(A.d(j.decode()),a1),$async$bG)
case 10:J.fe(l,j)
case 8:b0.length===a||(0,A.w)(b0),++a2
s=7
break
case 9:if(J.av(l)===0){a=A.q("texture array needs at least one layer")
throw A.b(a)}i=A.a(J.au(l,0).width)
h=A.a(J.au(l,0).height)
if(J.Z(i,0)||J.Z(h,0)||J.qv(l,new A.ju(i,h))){a=A.q("texture-array layers must have matching nonzero dimensions")
throw A.b(a)}g=J.av(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.X()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.is(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.X()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a3()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a3()
n=[1]
s=5
break A}e=B.d.K(a+1,2)}}a=m.a
a7=A.e(a.createTexture())
if(a7==null){a=A.q("could not create texture array")
throw A.b(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aE(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.Z(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.q("texture-array storage failed (WebGL error 0x"+J.n_(d,16)+")")
throw A.b(a)}c=0
for(;;){a1=c
a3=J.av(l)
if(typeof a1!=="number"){q=a1.aP()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.au(l,c)])
d=A.a(a.getError())
if(!J.Z(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.q("texture-array layer "+A.u(c)+" failed (WebGL error 0x"+J.n_(d,16)+")")
throw A.b(a)}a1=c
if(typeof a1!=="number"){q=a1.a3()
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
if(!J.Z(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.q("texture-array mip generation failed (WebGL error 0x"+J.n_(d,16)+")")
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
b=A.ac(a9)
A.d(v.G.console).error("texture array load failed: "+A.u(b))
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
case 6:case 1:return A.bs(q,r)
case 2:return A.br(o.at(-1),r)}})
return A.bt($async$bG,r)},
e3(a,b){var s=this.a,r=A.e(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.Z(A.c_(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.b(A.d9("shader compile failed: "+A.u(A.pp(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
ac(a,b){var s=v.G,r=this.e3(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.e3(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.e(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.Z(A.c_(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.b(A.d9("program link failed: "+A.u(A.pp(p,"getProgramInfoLog",o,t.w))))
return o},
gfS(){var s=A.c_(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.al(s):0},
dg(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.i(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.em(0,c,B.c.hz(b.byteLength,p))*p
if(B.c.aa(o,4)!==0)A.m(A.x("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.qw(B.u.gj7(b),b.byteOffset+0*p,B.c.K(o,4)))}},
cd(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aE(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
c9(a,b,c,d,e){var s,r=this.a,q=A.e(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aE(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
e5(a,b,c){var s,r=this.a,q=A.e(r.createTexture())
q.toString
this.cd(q,a,b)
s=v.G
A.aE(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
dJ(a,b){var s,r,q=this.a,p=A.e(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aE(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aE(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
d3(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.e(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.c9(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.c9(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.e5(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.e5(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.c9(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.dJ(a,b)
if(d)h.drawBuffers(A.i([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.b(A.d9("framebuffer incomplete"))
return new A.hx(g,n,o,m,q,p,l,e,a,b)},
fR(a,b,c,d){return this.d3(a,b,c,d,0)},
jU(a,b,c,d){return this.d3(a,b,!0,c,d)},
aw(a,b,c){return this.d3(a,b,c,!1,0)},
cb(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aE(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
ae(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cd(q,b,c)
if(p!=null)n.cd(p,b,c)
n.cb(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cb(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cb(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.dJ(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
kf(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aE(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aE(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aE(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
je(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.n
s.drawBuffers(A.i([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.i([A.a(q.WebGL2RenderingContext.NONE),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.i([A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
ag(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.ju.prototype={
$1(a){A.d(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:41}
A.fR.prototype={
df(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].kA(a)}}
A.fT.prototype={
aj(a){if(this.f)return
A.oe(a,"requestPointerLock",t.X)},
ip(a){A.d(a)
if(A.aB(a.repeat))return
if(this.b.m(0,A.B(a.code)))this.c.m(0,A.B(a.code))},
ir(a){this.b.ai(0,A.B(A.d(a).code))},
iv(a){var s=this
A.d(a)
if(!s.f)return
s.d=s.d+s.dR(a,"movementX")
s.e=s.e+s.dR(a,"movementY")},
it(a){var s=this
A.d(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
dR(a,b){var s=A.pl(a[b])
if(s==null)s=null
return s==null?0:s}}
A.h5.prototype={}
A.cE.prototype={
gdO(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gD(B.c.dd(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gD(B.c.dd(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.cE&&A.ir(r)===A.ir(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gD(a){return this.gdO()}}
A.kc.prototype={
hF(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gdO(),q)}}
A.eu.prototype={
fY(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.u.hf(s,0,m,l)
n.a=s}r=b.Y(0,a).ap(d.Y(0,a)).ga2()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ev(n.a,n.b,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=f+g
m=A.ev(n.a,m,b,r,q,p,o,0,1,l,h,0)
n.b=m
k=h+i
m=A.ev(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ev(n.a,m,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=A.ev(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ev(n.a,l,d,r,q,p,o,0,1,f,k,0)},
fX(a,b,c,d,e,f,g){return this.fY(a,b,c,d,e,0,f,0,g)}}
A.kH.prototype={
ii(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.ac(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.v()
m.w=r
q=s.ac(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.v()
m.x=q
p=m.c
o=A.e(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.v()
m.y=o
o=A.e(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.v()
m.z=o
o=A.e(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.v()
m.Q=o
r=A.e(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.v()
m.as=r
r=A.e(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.v()
m.at=r
q=A.e(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.v()
m.ax=q
m.d=s.aw(m.ay,m.ch,!1)
m.e=s.aw(m.ay,m.ch,!1)
m.f=s.aw(m.ay,m.ch,!1)
p=A.e(p.createVertexArray())
p.toString
m.CW!==$&&A.v()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
ij(){var s
try{this.r=this.b.aw(384,216,!1)}catch(s){this.r=null}},
kd(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.ag(n)
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
p.ag(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.ag(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.kQ.prototype={
c0(a,b,c){var s,r,q
try{r=this.a.ac(b,c)
return r}catch(q){s=A.ac(q)
r=A.d9(a+": "+A.u(s))
throw A.b(r)}}}
A.kJ.prototype={}
A.eH.prototype={}
A.ia.prototype={}
A.i4.prototype={}
A.i2.prototype={}
A.kL.prototype={
hG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.i([new A.cE(0,0,1,0),new A.cE(1,0,1,0),new A.cE(2,0,1,0)],t.mm),e=t.S
e=new A.kc(f,A.t(e,e))
e.hF(f)
h.cW=e
h.fk=1.9
h.cM=h.av/h.au
r=J.fY(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.eH()
t.cu.a(r)
f=h.ad
e=f.ac("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.ac(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.ac(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.ac(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.ac(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.a_!==$&&A.v()
h.a_=new A.kQ(f,e,p,o,n,m)
h.b=t.d4.a(new A.kM(h))
h.e_()
h.dZ()
o=h.a7
p=A.e(o.getUniformLocation(m,"uTex"))
h.eP!==$&&A.v()
h.eP=p
p=A.e(o.getUniformLocation(m,"uNoise"))
h.eQ!==$&&A.v()
h.eQ=p
p=A.e(o.getUniformLocation(m,"uTime"))
h.ev!==$&&A.v()
h.ev=p
p=A.e(o.getUniformLocation(m,"uTexelSize"))
h.eu!==$&&A.v()
h.eu=p
p=A.e(o.getUniformLocation(m,"uNoiseOff"))
h.ew!==$&&A.v()
h.ew=p
p=A.e(o.getUniformLocation(m,"uChromaLuma"))
h.ex!==$&&A.v()
h.ex=p
p=A.e(o.getUniformLocation(m,"uChromaLag"))
h.ey!==$&&A.v()
h.ey=p
p=A.e(o.getUniformLocation(m,"uTapeNoise"))
h.ez!==$&&A.v()
h.ez=p
p=A.e(o.getUniformLocation(m,"uHeadSwitch"))
h.eA!==$&&A.v()
h.eA=p
p=A.e(o.getUniformLocation(m,"uTracking"))
h.eB!==$&&A.v()
h.eB=p
p=A.e(o.getUniformLocation(m,"uDropouts"))
h.eC!==$&&A.v()
h.eC=p
p=A.e(o.getUniformLocation(m,"uGhosting"))
h.eD!==$&&A.v()
h.eD=p
p=A.e(o.getUniformLocation(m,"uChromaBlurI"))
h.eE!==$&&A.v()
h.eE=p
p=A.e(o.getUniformLocation(m,"uChromaBlurQ"))
h.eF!==$&&A.v()
h.eF=p
p=A.e(o.getUniformLocation(m,"uChromaLagAmount"))
h.eG!==$&&A.v()
h.eG=p
p=A.e(o.getUniformLocation(m,"uNoiseScale"))
h.eH!==$&&A.v()
h.eH=p
p=A.e(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.eI!==$&&A.v()
h.eI=p
p=A.e(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.eJ!==$&&A.v()
h.eJ=p
p=A.e(o.getUniformLocation(m,"uJitterAmount"))
h.eK!==$&&A.v()
h.eK=p
p=A.e(o.getUniformLocation(m,"uJitterFreq"))
h.eL!==$&&A.v()
h.eL=p
p=A.e(o.getUniformLocation(m,"uDropoutRate"))
h.eM!==$&&A.v()
h.eM=p
p=A.e(o.getUniformLocation(m,"uGhostAmount"))
h.eN!==$&&A.v()
h.eN=p
p=A.e(o.getUniformLocation(m,"uGhostOffset"))
h.eO!==$&&A.v()
h.eO=p
p=A.e(o.getUniformLocation(m,"uGhostTarget"))
h.eR!==$&&A.v()
h.eR=p
m=A.e(o.getUniformLocation(m,"uHasGhost"))
h.eS!==$&&A.v()
h.eS=m
m=A.e(o.getUniformLocation(n,"uTex"))
h.cO!==$&&A.v()
h.cO=m
m=A.e(o.getUniformLocation(n,"uDepth"))
h.cP!==$&&A.v()
h.cP=m
m=A.e(o.getUniformLocation(n,"uFocusDistance"))
h.cQ!==$&&A.v()
h.cQ=m
m=A.e(o.getUniformLocation(n,"uDofBlurScale"))
h.cR!==$&&A.v()
h.cR=m
m=A.e(o.getUniformLocation(n,"uBlurRadius"))
h.cS!==$&&A.v()
h.cS=m
m=A.e(o.getUniformLocation(n,"uDofStrength"))
h.cT!==$&&A.v()
h.cT=m
n=A.e(o.getUniformLocation(n,"uTexel"))
h.cU!==$&&A.v()
h.cU=n
n=A.aB(A.d(A.d(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.b0!==$&&A.v()
h.b0=n
h.sfQ(16777215)
n=new A.l0(o,f,A.i([],t.aA),A.i([],t.df),A.i([],t.cC),A.i([],t.kS))
m=n.c=f.ac("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.e(o.getUniformLocation(m,"uLightProj"))
n.e=A.e(o.getUniformLocation(m,"uModel"))
h.cV!==$&&A.v()
h.cV=n
n=new A.kH(f,o)
n.ii()
n.ij()
h.bs!==$&&A.v()
h.bs=n
n=f.a
m=A.e(n.createBuffer())
m.toString
h.cn!==$&&A.v()
h.cn=m
p=A.e(n.createBuffer())
p.toString
h.co!==$&&A.v()
h.co=p
n=A.e(n.createBuffer())
n.toString
h.cp!==$&&A.v()
h.cp=n
e=A.e(o.createVertexArray())
e.toString
h.cq!==$&&A.v()
h.cq=e
l=A.e(o.createVertexArray())
l.toString
h.cr!==$&&A.v()
h.cr=l
k=A.e(o.createVertexArray())
k.toString
h.cs!==$&&A.v()
h.cs=k
j=A.e(o.createVertexArray())
j.toString
h.ct!==$&&A.v()
h.ct=j
o.bindVertexArray(e)
h.bZ(m)
o.bindVertexArray(l)
h.bZ(p)
o.bindVertexArray(k)
h.bZ(n)
o.bindVertexArray(null)
try{h.bx=f.fR(384,216,!0,!0)}catch(i){h.bx=null}s=4<f.gfS()?4:f.gfS()
e=s
if(typeof e!=="number")return e.X()
if(e>1)try{h.b_=f.jU(h.au,h.av,!0,s)}catch(i){h.b_=null}try{h.ar=f.fR(h.au,h.av,!0,!0)}catch(i){h.b_=h.ar=null}if(h.ar!=null)try{h.bu=f.aw(h.gbe(),h.gbd(),!1)
h.bv=f.aw(h.gbe(),h.gbd(),!1)
h.bw=f.aw(h.au,h.av,!1)}catch(i){h.bw=h.bv=h.bu=null}},
gbe(){var s=B.c.K(this.au,4)
return s<1?1:s},
gbd(){var s=B.c.K(this.av,4)
return s<1?1:s},
b7(a){return this.jT(t.G.a(a))},
jT(a){var s=0,r=A.bu(t.H),q=this,p,o,n,m,l,k,j
var $async$b7=A.bv(function(b,c){if(b===1)return A.br(c,r)
for(;;)switch(s){case 0:p=new A.R(a,A.n(a).h("R<1,2>")).gt(0),o=q.ad
case 2:if(!p.l()){s=3
break}n=p.d
m=n.a
l=B.aK.i(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.an(o.bF(k,l,!1,!1,!1,m==="grime"),$async$b7)
case 4:if(c!=null)q.dL(m,l)
s=2
break
case 3:p=t.lS
j=A.U(new A.bp(new A.W(A.i(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.kN(a)),t.dD),p),p.h("l.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.an(o.bG(j,12,!1),$async$b7)
case 7:q.br=c
case 6:return A.bs(null,r)}})
return A.bt($async$b7,r)},
aL(){var s=0,r=A.bu(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$aL=A.bv(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.t(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.an(A.bx(A.d(A.d(g.window).fetch("shaders/"+A.u(m))),f),$async$aL)
case 13:l=a3
if(!A.aB(l.ok)){i=A.d9("HTTP "+A.u(A.nM(l,"status",t.S)))
throw A.b(i)}a=J
a0=n
a1=m
s=14
return A.an(A.bx(A.d(l.text()),i),$async$aL)
case 14:a.by(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ac(c)
i=A.d9("shaders/"+A.u(m)+": fetch failed - "+A.u(k))
throw A.b(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.iA(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ac(b)
A.d(v.G.console).error("shader reload failed: "+A.u(j))
s=5
break
case 2:s=1
break
case 5:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$aL,r)},
iA(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.a_
q===$&&A.h()
p=a.i(0,"world.vert")
p.toString
o=a.i(0,"world.frag")
o.toString
n=q.c0("world.vert/world.frag",p,o)
o=a.i(0,h)
o.toString
p=a.i(0,"post.frag")
p.toString
m=q.c0("post.vert/post.frag",o,p)
p=a.i(0,h)
p.toString
o=a.i(0,"blur.frag")
o.toString
l=q.c0("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.e_()
i.dZ()
q=i.eq
q=A.U(q,A.n(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.w)(q),++k){s=q[k]
o=B.aK.i(0,s)
o.toString
i.dL(s,o)}A.d(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ac(j)
A.d(v.G.console).error("shader recompile failed: "+A.u(r))}},
dZ(){var s=this,r=s.a7,q=s.a_
q===$&&A.h()
s.fl=A.e(r.getUniformLocation(q.c,"uTex"))
s.fm=A.e(r.getUniformLocation(q.c,"uTime"))
s.fn=A.e(r.getUniformLocation(q.c,"uFlash"))
s.fo=A.e(r.getUniformLocation(q.c,"uVignette"))
s.fp=A.e(r.getUniformLocation(q.c,"uGrain"))
s.fq=A.e(r.getUniformLocation(q.c,"uDesat"))
s.fs=A.e(r.getUniformLocation(q.c,"uBloom"))
s.ft=A.e(r.getUniformLocation(q.c,"uBloomStrength"))
s.fC=A.e(r.getUniformLocation(q.c,"uNoiseOff"))
s.fF=A.e(r.getUniformLocation(q.c,"uLutMix"))
s.fw=A.e(r.getUniformLocation(q.c,"uDepth"))
s.fz=A.e(r.getUniformLocation(q.c,"uDepthViz"))
s.er=A.e(r.getUniformLocation(q.c,"uSSAO"))
s.es=A.e(r.getUniformLocation(q.c,"uSSAOStrength"))
s.fA=A.e(r.getUniformLocation(q.c,"uNoise"))
s.fB=A.e(r.getUniformLocation(q.c,"uNoiseOn"))
s.fD=A.e(r.getUniformLocation(q.c,"uLut"))
s.fE=A.e(r.getUniformLocation(q.c,"uLutOn"))
s.fu=A.e(r.getUniformLocation(q.d,"uTex"))
s.cN=A.e(r.getUniformLocation(q.d,"uDir"))
s.fv=A.e(r.getUniformLocation(q.c,"uBlur"))},
dL(a,b){var s,r,q,p=this
p.eq.m(0,a)
switch(a){case"bluenoise":s=p.a_
s===$&&A.h()
s=s.c
r=p.fA
r===$&&A.h()
q=p.fB
q===$&&A.h()
p.aU(s,r,q,b)
break
case"lut-gothic":s=p.a_
s===$&&A.h()
s=s.c
r=p.fD
r===$&&A.h()
q=p.fE
q===$&&A.h()
p.aU(s,r,q,b)
break
case"grime":s=p.a_
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.aU(s,r,q,b)
break
case"glass":s=p.a_
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.aU(s,r,q,b)
break
case"soft":s=p.a_
s===$&&A.h()
s=s.b
r=p.f7
r===$&&A.h()
q=p.f8
q===$&&A.h()
p.aU(s,r,q,b)
break}},
aU(a,b,c,d){var s=this.a7
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sfQ(a){var s=A.mr(a)
this.f_=s.a
this.f0=s.b
this.f1=s.c},
cf(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.aa(a1,14)!==0)throw A.b(A.x("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.a7
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
b.dz(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.jy++
b.cz.k(0,a1,new A.ia(e,d,i,s,s,a3))
return a1},
jq(a){var s,r,q,p=this,o=p.cz.i(0,a)
if(o==null)return
p.dS()
s=p.f5
r=p.f6
if(s!==r)p.e0(r)
s=p.a7
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.cL
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.b1},
jF(a){var s,r=this.cz.ai(0,a)
if(r==null)return
s=this.a7
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
dS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.cA)return
c.cA=!0
s=c.a7
r=c.a_
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.f3
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.cD
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.cE
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.cF
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.fk)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.cM)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.eT?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.cG/255*0.25,c.cH/255*0.25,c.cI/255*0.25)
q=c.fx
q===$&&A.h()
r=c.eZ
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.f_,c.f0,c.f1)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.f2)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.cC.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.cC
l=m.length
if(n<l){if(!(n<l))return A.c(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],0)
continue}j=A.mr(k.b)
m=c.b0
m===$&&A.h()
i=m?1:1+(A.mV(c.cJ*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.c(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.c(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.c(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],k.d*i)}r=c.b0
r===$&&A.h()
q=r?1:1+(A.mV(c.cJ*2.5,40503)*2-1)*0
c.jv=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.eV?1:0
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
q=c.eU
h=q?384:0
g=q?216:0
q=c.cu
p=q.a
if(p===B.a1){f=B.d.Z(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.f9
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.cV
r===$&&A.h()
q=c.fd
q===$&&A.h()
s.uniform1f(q,0)
q=c.fe
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.fa
q===$&&A.h()
if(q!=null)r.bN(0)
q=c.fb
q===$&&A.h()
if(q!=null)r.bN(1)
q=c.fc
q===$&&A.h()
if(q!=null)r.bN(2)
r.bO(0)
r.bO(1)
r.bO(2)
r=c.ff
r===$&&A.h()
if(c.br==null)q=0
else{c.cW===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.br!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.br)
r=c.cK
r===$&&A.h()
s.uniform1i(r,12)}r=c.fj
q=c.fi
p=c.fh
o=c.fg
n=0
for(;;){m=c.cW
m===$&&A.h()
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
if(m!=null)s.uniform1i(m,d.d);++n}c.e0(c.f6)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.cL
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
e0(a){var s
this.f5=a
s=this.dx
s===$&&A.h()
this.a7.uniformMatrix4fv(s,!1,a.a)},
iM(a){var s,r,q,p,o,n,m
for(s=this.eX,r=this.eW,q=1;q<a;++q){if(!(q<800))return A.c(s,q)
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
iL(a){var s,r,q,p,o,n,m,l
for(s=this.eY,r=this.cB,q=1;q<a;++q){if(!(q<4000))return A.c(s,q)
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
jE(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.cu=b4
s=b2.b2
r=0
if(s>0){for(s=b2.eY,q=0;p=b2.b2,q<p;++q)B.a.k(s,q,q)
b2.iL(p)
for(p=b2.cB,o=b2.cv,n=0;n<b2.b2;++n){if(!(n<4000))return A.c(s,n)
m=s[n]
if(!(m<p.length))return A.c(p,m)
l=p[m]
r=A.pF(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.cB,p=b2.cv,q=0;q<b2.b2;++q){if(!(q<s.length))return A.c(s,q)
l=s[q]
r=A.pF(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.b2=0
for(s=b2.eX,q=0;p=b2.by,q<p;++q)B.a.k(s,q,q)
b2.iM(p)
for(p=b2.jw,o=b2.eW,k=0,n=0;n<b2.by;++n){if(!(n<800))return A.c(s,n)
m=s[n]
if(!(m<o.length))return A.c(o,m)
j=o[m]
i=A.mr(0)
m=j.b
h=b2.cF
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.cE
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
e=[new A.k(a-d,a1-c,a2-e),new A.k(g-d,f-c,h-e),new A.k(g+d,f+c,h+e),new A.k(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.cD
k=A.pI(p,k,a3,a4,a5,a6,new A.k(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.by=0
s=b2.ad
o=b2.cn
o===$&&A.h()
s.dg(o,b2.cv,r)
o=b2.co
o===$&&A.h()
s.dg(o,p,k)
b2.dS()
p=b2.a7
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.cq
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(r,14));++b2.b1
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.cr
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(k,14));++b2.b1
m=b2.cw
if(m>0){h=b2.cp
h===$&&A.h()
s.dg(h,b2.jx,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.cs
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.cw/14|0);++b2.b1}m=b2.bx
if(m!=null){a7=b2.ar
if(a7!=null)s.kf(m,a7)}a8=b2.ar
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.ct
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.bu
a4=b2.bv
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.a_
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.fu
g===$&&A.h()
p.uniform1i(g,0)
s.ag(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.cN
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.ag(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.cN,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.bw
if(b2.bt>0&&a6!=null){s.ag(a6)
g=b2.a_
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.cO
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.cP
g===$&&A.h()
p.uniform1i(g,7)
g=b2.cQ
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.cR
g===$&&A.h()
p.uniform1f(g,1)
g=b2.cS
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.cT
g===$&&A.h()
p.uniform1f(g,b2.bt)
g=b2.cU
g===$&&A.h()
p.uniform2f(g,1/b2.au,1/b2.av)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.bs
g===$&&A.h()
b0=g.kd(a8,0.5)
s.ag(null)
s=b2.a_
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.fs
g===$&&A.h()
p.uniform1i(g,1)
g=b2.ft
g===$&&A.h()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.fv
s===$&&A.h()
b2.b0===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.fw
s===$&&A.h()
p.uniform1i(s,7)
s=b2.fz
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.er
s===$&&A.h()
p.uniform1i(s,11)
s=b2.es
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.bt>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.fl
h===$&&A.h()
p.uniform1i(h,0)
h=b2.cJ+=b3;++b2.f4
s=b2.fm
s===$&&A.h()
p.uniform1f(s,h)
h=b2.fC
h===$&&A.h()
s=b2.f4
p.uniform2f(h,B.c.aa(s*13,64),B.c.aa(s*29,64))
s=b2.fn
s===$&&A.h()
p.uniform1f(s,0)
s=b2.fo
s===$&&A.h()
p.uniform1f(s,0)
s=b2.fp
s===$&&A.h()
p.uniform1f(s,0)
s=b2.fq
s===$&&A.h()
p.uniform1f(s,0)
s=b2.cu
if(s.a===B.J)b1=0*(1-s.b/1)
else b1=0
s=b2.fF
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.kM.prototype={
$0(){var s=this.a.a_
s===$&&A.h()
return s.b},
$S:43}
A.kN.prototype={
$1(a){return this.a.i(0,A.B(a))},
$S:17}
A.lC.prototype={
giW(){var s=this.b
s===$&&A.h()
return s},
e_(){var s,r,q,p,o,n,m=this,l=m.iX(),k=m.a
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
B.a.G(s)
r=m.ok
B.a.G(r)
q=m.p1
B.a.G(q)
p=m.p2
B.a.G(p)
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
m.f7=A.e(k.getUniformLocation(l,"uSoft"))
m.f8=A.e(k.getUniformLocation(l,"uSoftOn"))
m.f9=A.e(k.getUniformLocation(l,"uInternal"))
m.fa=A.e(k.getUniformLocation(l,"uLightProj0"))
m.fb=A.e(k.getUniformLocation(l,"uLightProj1"))
m.fc=A.e(k.getUniformLocation(l,"uLightProj2"))
m.jz=A.e(k.getUniformLocation(l,"uShadow0"))
m.jA=A.e(k.getUniformLocation(l,"uShadow1"))
m.jB=A.e(k.getUniformLocation(l,"uShadow2"))
m.fd=A.e(k.getUniformLocation(l,"uShadowCasters"))
m.cK=A.e(k.getUniformLocation(l,"uMaterialAlbedo"))
m.cL=A.e(k.getUniformLocation(l,"uStaticMaterial"))
m.fe=A.e(k.getUniformLocation(l,"uShadowBias"))
m.ff=A.e(k.getUniformLocation(l,"uMaterialCount"))
s=m.fg
B.a.G(s)
r=m.fh
B.a.G(r)
q=m.fi
B.a.G(q)
p=m.fj
B.a.G(p)
for(o=0;o<32;++o){n=""+o
B.a.m(s,A.e(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.m(r,A.e(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.m(q,A.e(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.m(p,A.e(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.cK,12)},
bZ(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.dz(56)},
dz(a){var s=this,r=s.c
r===$&&A.h()
s.aV(r,3,a,0)
r=s.f
r===$&&A.h()
s.aV(r,3,a,12)
r=s.d
r===$&&A.h()
s.aV(r,4,a,24)
r=s.e
r===$&&A.h()
s.aV(r,1,a,40)
r=s.r
r===$&&A.h()
s.aV(r,3,a,44)},
aV(a,b,c,d){var s=this.a
A.aE(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
iX(){return this.giW().$0()}}
A.l0.prototype={
bN(a){return null},
bO(a){return null}}
A.k.prototype={
a3(a,b){return new A.k(this.a+b.a,this.b+b.b,this.c+b.c)},
Y(a,b){return new A.k(this.a-b.a,this.b-b.b,this.c-b.c)},
W(a,b){return new A.k(this.a*b,this.b*b,this.c*b)},
aY(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.k(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga2(){var s=this,r=s.gq(0)
return r<1e-9?new A.k(0,0,0):new A.k(s.a/r,s.b/r,s.c/r)}}
A.iQ.prototype={
ku(a){var s,r,q,p,o,n=B.p.aF(a.B(),null)
this.a.em(n)
s=A.d(A.d(v.G.window).localStorage)
r=A.bd(s.getItem("quarantine.save.active"))
q=A.bd(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
ka(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.d(A.d(v.G.window).localStorage)
r=A.bd(s.getItem("quarantine.save.active"))
q=A.bd(s.getItem("quarantine.save.previous"))
p=this.dI(r,a)
if(p!=null)return new A.cJ(p,null)
o=this.dI(q,a)
if(o!=null)return new A.cJ(o,"recovered previous save")
if(r==null)return B.dg
return B.df}catch(n){return B.de}},
dI(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.em(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ac(q) instanceof A.G)return null
else throw q}}}
A.fG.prototype={
hB(a,b,c,d,e){if(this.a.length===0)throw A.b(B.c8)
if(this.b<0)throw A.b(B.bW)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ag(q,t.i)
s=t.z
return A.d6(A.K(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.b2.prototype={
v(){return"EndingKind."+this.b}}
A.j6.prototype={}
A.d8.prototype={
B(){var s=t.N
return A.K(["kind",this.a.b],s,s)}}
A.j9.prototype={
$1(a){return t.no.a(a).b===this.a.i(0,"kind")},
$S:45}
A.hh.prototype={
B(){var s,r=this,q=t.N,p=A.t(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.K(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
jM(a){var s,r=this.a
if(a.e.i(0,r)==null)return!1
s=this.b.Y(0,new A.k(0,1.3499999999999999,0))
return!new A.fr(s,s.a3(0,new A.k(0,1.2000000000000002,0))).fO(a,r)}}
A.ks.prototype={
B(){return A.io(this.a)}}
A.dk.prototype={
B(){return A.K(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.kX.prototype={
em(a){var s,r,q,p,o,n,m,l=B.p.en(a,null),k=t.f
if(!k.b(l))throw A.b(B.cc)
s=t.N
r=t.z
q=A.ay(l,s,r)
p=q.i(0,"version")
if(A.aD(p))o=p!==1&&p!==2
else o=!0
if(o)A.m(A.a9("unsupported save version "+A.u(p),null,null))
n=q.i(0,"run")
m=q.i(0,"meta")
if(!k.b(n)||!k.b(m))A.m(B.bY)
k=A.ay(n,s,r)
return A.ox(A.ay(m,s,r),k,2)}}
A.cJ.prototype={}
A.cv.prototype={
v(){return"GameSessionEventType."+this.b}}
A.fL.prototype={}
A.jq.prototype={}
A.jp.prototype={
gam(){var s=this.d
return new A.jq(s.a,s.b)},
gfV(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.K(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.K(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.K(["entryCount",m.e.b.a],k,t.S)
p=A.oa(m.c).B()
o=m.r
n=o.c
return new A.ks(A.io(A.K(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.K(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
j_(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.aF(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bj(B.cj)}if(n<a)this.bj(B.ck)},
hs(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.bS(a)&&s.hr(b)},
kc(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.ba)r.c=Math.min(1,r.c+0.1)},
hq(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.qR(j,A.ag(i.d,h).length)
if(a===B.b0)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.M(r)
A.qQ(j,new A.J(r,q.h("r(1)").a(new A.jr(k)),q.h("J<1>")).gq(0))
r=k.f
q=r.b
if(B.a.u(B.cJ,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.ak(j.a/1*3)
B.a.m(r.r,new A.dl(q.a,a,b))
m=r.a
A.r1(m,q.a,n,k.b,A.ag(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.hh(B.cQ)
s.r.jg(o,c)
l=B.d.ak(j.b/1*6)
if(l>0)r.bS(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.ax(i,A.n(i).h("ax<2>")).ab(0,new A.js())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bj(B.cm)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bj(B.cl)},
bj(a){var s=this;++s.y
B.a.m(s.w,new A.fL())
B.a.m(s.x,A.qS(A.u9(a),s.b,s.y-1))}}
A.jr.prototype={
$1(a){t.E.a(a)
return a.e.length!==0&&!new A.l1().hn(this.a.c,a.a)},
$S:46}
A.js.prototype={
$1(a){return t.L.a(a).e},
$S:16}
A.fr.prototype={
ki(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.M(s)
q=new A.J(s,r.h("r(1)").a(new A.iS(e)),r.h("J<1>"))
p=!q.gt(0).l()?null:q.gaH(0)
if(p==null){n.d=null
return}if(!(n.bi(b,p.f)&&a==="hall"))o=n.bi(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.hQ(p,B.d.Z(d,0,1))},
jW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.dQ(f,c,d)
s=g.ia(a,b,c,d)
if(s!=null){g.d=s
return g.dQ(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.jb(Math.sqrt(r*r+q*q)/0.08))
o=d.W(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.e9(a,n,m,new A.k(q,0,0))
l=l||j.b
i=g.fU(a,n)
n=i==null?n:i
h=g.e9(a,n,j.a,new A.k(0,0,r))
l=l||h.b
m=h.a
i=g.fU(a,n)
n=i==null?n:i}g.bm(m)
return new A.h6(m,n)},
ia(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bi(c,l.f)&&n
j=q&&this.bi(c,l.r)&&o
if(k||j)return new A.hQ(l,k?0:1)}return null},
dQ(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.Y(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.Z(a.b+o/p,0,1)
n=A.oI(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bm(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.h6(n,k)},
bi(a,b){var s=a.Y(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
e9(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.eE(c,!1)
s=c.a3(0,d)
this.bm(s)
if(this.fO(a,b)){this.bm(c)
return new A.eE(c,!0)}return new A.eE(s,!1)},
bm(a){var s=a.Y(0,new A.k(0,1.3499999999999999,0))
this.a=s
this.b=s.a3(0,new A.k(0,1.2000000000000002,0))},
fO(a,b){var s,r,q,p,o,n,m=a.e.i(0,b)
if(m==null)return!0
s=a.aZ(m)
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
return!this.iO(a,m,s)},
fU(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.i(0,b)
if(k==null)return null
s=a.aZ(k)
for(r=k.a,q=a.aA(r),p=J.H(q.a),q=new A.L(p,q.b,q.$ti.h("L<1>"));q.l();){o=p.gp()
n=o.bJ(r)
m=!1
if(n!=null)if(l.i(0,n)!=null)if(!o.as)o=o.at&&!o.ax&&!o.z&&this.ee(k,o,s)&&this.i4(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
iO(a,b,c){var s,r,q
for(s=a.aA(b.a),r=J.H(s.a),s=new A.L(r,s.b,s.$ti.h("L<1>"));s.l();){q=r.gp()
if(q.at&&!q.ax&&!q.z&&this.ee(b,q,c))return!0}return!1},
ee(a,b,c){var s,r,q,p=a.a,o=b.aG(p),n=b.az(p)
p=o===B.i||o===B.k
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
i4(a,b,c){var s,r=this
switch(b.aG(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sj4(a){this.a=t.mz.a(a)}}
A.iS.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:48}
A.h6.prototype={}
A.eE.prototype={}
A.hQ.prototype={}
A.e0.prototype={}
A.jD.prototype={
jg(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.c(B.r,r)
s=B.r[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
ho(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.r,q)
p=B.r[q]
if(p.b===a)r+=p.c}return r},
hp(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.r,q)
p=B.r[q]
if(p.b===a)r+=p.d}return r},
B(){return A.K(["landedCount",this.b],t.N,t.z)}}
A.kT.prototype={
hI(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.v()
o.c=new A.fQ(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.w)(n),++q){p=n[q]
r.k(0,p.a,o.dA(p))}},
kb(a){var s,r,q,p,o,n=this,m=n.a.e.i(0,a)
if(m==null)return
s=n.d
r=s.i(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.w)(r),++o)p.jF(r[o])
s.k(0,a,n.dA(m))},
dA(a){var s=A.pU(this.a,a),r=this.b
return A.i([r.cf(s.a,1),r.cf(s.b,2),r.cf(s.c,0)],t.t)},
ha(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.i(0,a)
if(l==null)return B.f
s=l.a
r=A.bl([s],t.N)
for(n=n.aA(s),q=J.H(n.a),n=new A.L(q,n.b,n.$ti.h("L<1>"));n.l();){p=q.gp()
o=p.bJ(s)
if(!(p.at&&!p.ax&&!p.z)||o==null||m.i(0,o)==null)continue
r.m(0,o)}return r},
jp(a,b){var s,r,q,p,o=this,n=o.ha(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.h5(n,b))
s=t.D
m.cC=l.length<=4?A.ag(l,s):A.ag(A.l8(l,0,A.d_(4,"count",t.S),A.M(l).c),s)
for(l=n.gt(n),s=o.d;l.l();){r=s.i(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.w)(r),++p)m.jq(r[p])}}}
A.ct.prototype={
v(){return"FocusKind."+this.b}}
A.da.prototype={}
A.kU.prototype={}
A.mb.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:49}
A.cg.prototype={}
A.jC.prototype={
ih(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
n=o.a
if(q.V(n))throw A.b(A.q("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){m=s[p]
n=m.a
if(q.V(n))throw A.b(A.q("duplicate portal "+n))
q.k(0,n,m)}},
iU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.b(A.q("3D room overlap: "+n.a+" and "+m.a))}},
iT(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.t(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.w)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.w)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.ed(o,i,h,g,f,e)
a5.du(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.w)(n),++k){d=n[k]
c=q.i(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.q(l+" references invalid portal "+d))
i=c.aG(l)
h=c.az(l)
g=c.w
f=c.x
a5.ed(o,i,h,g,0,f)
a5.du(a6,l,c.aG(l),c.az(l),c.az(l)+g,0,f)}}for(s=new A.R(a6,a6.$ti.h("R<1,2>")).gt(0);s.l();){b=s.d
a=b.b
r=J.bw(a)
r.T(a,new A.jH())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.i(a,a0).a[0]<r.i(a,a2).a[1]&&r.i(a,a2).a[0]<r.i(a,a0).a[1]
a4=r.i(a,a0).a[2]<r.i(a,a2).a[3]&&r.i(a,a2).a[2]<r.i(a,a0).a[3]
if(a3&&a4)throw A.b(A.q("overlapping apertures on "+b.a))}}},
ed(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.k
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.q("aperture outside "+a.a+" "+b.b+" wall"))},
du(a,b,c,d,e,f,g){J.fe(t.gz.a(a).k9(b+":"+c.b,new A.jG()),new A.eS([d,e,f,g]))},
aZ(a){var s=a.c,r=this.r,q=a.a
return new A.k(s.a+r.ho(q),s.b+r.hp(q),s.c)},
aA(a){var s=this.c,r=A.M(s)
return new A.J(s,r.h("r(1)").a(new A.jI(a)),r.h("J<1>"))},
k8(a,b){var s,r,q,p,o=this.e.i(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.aF(a,"roomId","not a portal endpoint"))
r=this.aZ(o)
q=b.az(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aG(a).a){case 0:s=new A.k(s.a+q,p,s.c)
break
case 2:s=new A.k(s.a+q,p,s.c+r.c)
break
case 1:s=new A.k(s.a+r.a,p,s.c+q)
break
case 3:s=new A.k(s.a,p,s.c+q)
break
default:s=null}return s},
gkt(){return B.a.fG(this.b,0,new A.jJ(),t.S)}}
A.jH.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.E(a.a[0],b.a[0])},
$S:50}
A.jG.prototype={
$0(){return A.i([],t.a3)},
$S:51}
A.jI.prototype={
$1(a){var s
t.gm.a(a)
s=this.a
return a.b===s||a.c===s},
$S:52}
A.jJ.prototype={
$2(a,b){return A.a(a)+t.E.a(b).e.length},
$S:53}
A.ja.prototype={}
A.l1.prototype={
hn(a,b){var s,r=a.e.i(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a5(s,new A.l2())}else s=!1
return s}}
A.l2.prototype={
$1(a){return t.hE.a(a).w},
$S:54}
A.bz.prototype={}
A.fQ.prototype={
h5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.C.a(a)
s=A.i([],t.bz)
for(r=a.gt(a),q=this.a.e;r.l();){p=q.i(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.w)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.m(s,new A.bz(new A.k(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.iG(j),0.06))}}B.a.T(s,new A.jE(b))
return A.l8(s,0,A.d_(4,"count",t.S),t.D).aN(0)},
iG(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.jE.prototype={
$2(a,b){var s=t.D
s.a(a)
s.a(b)
s=this.a
return B.d.E(a.a.Y(0,s).gq(0),b.a.Y(0,s).gq(0))},
$S:83}
A.c2.prototype={
v(){return"Facing."+this.b}}
A.aA.prototype={}
A.cG.prototype={
bJ(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aG(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.aF(a,"roomId","not an endpoint of "+s.a))},
az(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.aF(a,"roomId","not an endpoint of "+s.a))}}
A.aJ.prototype={}
A.cL.prototype={}
A.ar.prototype={}
A.jF.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.oP,k=A.t(m,l)
for(s=n.a,s=new A.R(s,A.n(s).h("R<1,2>")).gt(0),r=t.y;s.l();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.K(["open",o.a,"locked",o.b],m,r))}l=A.t(m,l)
for(s=n.c,s=new A.R(s,A.n(s).h("R<1,2>")).gt(0);s.l();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.K(["lit",o.a,"examined",o.b],m,r))}return A.K(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
j2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a0(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)d.m(0,s[q].a)
r=A.a0(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.w)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.w)(n),++l)r.m(0,n[l].a)
e=A.a0(e)
for(q=0;q<p.length;p.length===n||(0,A.w)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.w)(o),++l)e.m(0,o[l].a)
o=f.a
n=!0
if(A.nD(new A.a5(o,A.n(o).h("a5<1>")),d)){d=f.b
if(A.nD(new A.a5(d,A.n(d).h("a5<1>")),r)){d=f.c
e=!A.nD(new A.a5(d,A.n(d).h("a5<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.c4)
e=f.d
if(e<0||e>2)A.m(B.bT)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.w)(s),++q){k=s[q]
j=o.i(0,k.a)
k.at=j.a
k.ax=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.w)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.w)(r),++l){h=r[l]
n=s.i(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.w)(r),++l){g=r[l]
j=d.i(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.ek.prototype={
B(){return A.K(["open",this.a,"locked",this.b],t.N,t.y)}}
A.e9.prototype={
B(){return A.K(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.j5.prototype={
$1(a){return this.a.u(0,A.B(a))},
$S:3}
A.c3.prototype={
v(){return"Hand."+this.b}}
A.lw.prototype={
i(a,b){var s=this.a.i(0,b)
return s==null?B.j:s},
dn(a,b){var s,r,q,p,o=A.i([],t.s)
for(s=this.i(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.h3.prototype={
B(){var s,r,q,p=t.N,o=A.t(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.l[r]
o.k(0,q,s.i(0,q))}return A.K(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.W(B.l,t.ej.a(new A.k3(this)),t.dD).aI(0," \xb7 ")}}
A.k2.prototype={
$2(a,b){return new A.E(A.B(a),A.B(b),t.q)},
$S:56}
A.k3.prototype={
$1(a){return this.a.a.i(0,A.B(a))},
$S:17}
A.aR.prototype={
B(){var s,r,q,p=this,o=A.i([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.K(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.jP.prototype={
aW(a){t.G.a(a)
return a.a===5&&B.a.a5(B.l,new A.jW(this,a))},
dv(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.aW(b))return null
s=this.e++
r=new A.aR(s,a,A.i([A.k1(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
ck(a,b,c){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||!this.aW(b))return!1
B.a.m(s.c,A.k1(b,c,B.G))
return!0},
iZ(a,b){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||s.r!=null)return!1
if(!this.aW(b))return!1
s.r=A.k1(b,0,B.ax)
return!0},
hh(a){var s,r,q,p
t.I.a(a)
s=this.d
B.a.G(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.V(p)&&!B.a.u(s,p))B.a.m(s,p)}},
kr(a){var s
if(!this.b.V(a))return!1
s=this.d
if(!B.a.u(s,a))B.a.m(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.U(n,A.n(n).c)
B.a.a4(n)
s=A.i([],t.bV)
for(r=q.b,r=new A.aa(r,r.r,r.e,A.n(r).h("aa<2>"));r.l();)s.push(r.d.B())
return A.K(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.jW.prototype={
$1(a){var s
A.B(a)
s=this.b.i(0,a)
if(s==null)s=""
return B.a.u(this.a.a.i(0,a),s)},
$S:3}
A.iM.prototype={
ej(a,b){if(a.a===B.A&&!a.c)return new A.ko(b,B.aQ)
return new A.k_(B.aQ)},
ei(a){return this.ej(a,null)}}
A.d3.prototype={}
A.iN.prototype={
hd(a){var s,r=a==null?null:B.b.kp(a).toLowerCase()
if(r==="next")return B.be
s=r!=null&&r!=="legacy"
return new A.d3(B.I,!1,s,s?"unknown renderer query":null)}}
A.k0.prototype={}
A.k_.prototype={
bC(){if(this.d===B.aR)throw A.b(A.q("legacy backend is disposed"))
this.d=B.n},
bU(a){if(this.d!==B.n)A.m(A.q("legacy backend is not ready"))
B.p.aF(A.K(["backend","legacy","interpolation",0,"facts",A.io(a.a.a)],t.N,t.X),null)},
cY(a){if(this.d!==B.n)A.m(A.q("legacy backend is not ready"))
B.p.aF(A.K(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.kp.prototype={}
A.ko.prototype={
bC(){var s,r,q,p,o
if(this.c===B.aR)throw A.b(A.q("pixeldart backend is disposed"))
s=this.b
if(s!=null){r=A.t6(s.a)
s.d=r
r=new A.kY(r,new A.iT(new A.iU(),new A.hs()),new A.jj(A.i([],t.c8),B.cf),A.i([],t.oZ),B.Z)
s.e=r
q=s.b
p=s.c
r.d_(B.bu,new A.l9(q,p,q,p))
p=s.e
p.c3()
o=A.rM(p.w.a.b)
B.a.m(p.d,o)
s.f=o
s.ax=!0}this.c=B.n},
bU(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="pixeldart backend is not ready",h=k.b,g=k.c
if(g===B.Y){if(h!=null){if(h.ax){s=h.d
s===$&&A.h()
s=s.b===B.t}else s=!1
s=!s}else s=!0
if(s){k.c=B.n
g=B.n}if(g===B.Y)return}if(g!==B.n)A.m(A.q(i))
B.p.aF(A.K(["backend","next","interpolation",0,"facts",A.io(a.a.a)],t.N,t.X),j)
if(h!=null){g=h.ax
if(g){s=h.d
s===$&&A.h()
s=s.b===B.t}else s=!1
if(s){if(k.c!==B.n)A.m(A.q(i))
k.c=B.Y
return}if(!g)A.m(A.q("Pixeldart runtime is not initialized"))
g=h.Q
if(g==null){g=new Float32Array(16)
g[0]=1
g[5]=1
g[10]=1
g[15]=1
r=new A.bO(g)
g=h.b/h.c
q=A.on(g,60,1.0471975511965976,0.1)
g=new A.fq(r,q,q.W(0,r),B.w,B.dE,0.1,60,g)}s=h.as
p=h.at++
o=h.e
o===$&&A.h()
n=h.f
n===$&&A.h()
o.iB()
o.c3()
m=B.a.u(o.d,n)
if(!m)A.m(A.x("world was not created by this renderer",j))
if(o.at!=null)A.m(A.q("renderer.beginFrame called twice without end/abort"))
m=g.d
if(!m.ga1(0))A.m(A.x("CameraView.eye must be finite: "+m.n(0),j))
m=g.e
if(!m.ga1(0)||m.gb5()<1e-12)A.m(A.x("CameraView.forward must be finite and nonzero: "+m.n(0),j))
m=g.f
if(isFinite(m)){l=g.r
l=!isFinite(l)||m<=0||l<=m}else l=!0
if(l)A.m(A.x("CameraView requires 0 < near < far, got "+A.u(m)+"/"+g.r,j))
m=g.w
if(!isFinite(m)||m<=0)A.m(A.x("CameraView.aspect must be finite and > 0: "+A.u(m),j))
if(!g.a.ga1(0)||!g.b.ga1(0)||!g.c.ga1(0))A.m(A.x("CameraView matrices must be finite",j))
s.P()
B.ae.P()
if(!isFinite(0))A.m(A.x("FrameInput.timeSeconds must be finite: 0",j))
o.at=new A.ji(g,s,B.ae,p,0)
o.ax=n
g=o.c
if(g.b===B.S)A.m(A.q("FrameQueue.beginFrame called twice without end/abort"))
g.b=B.S
g.c=0
B.a.G(g.a)
h.e.jt()}},
cY(a){if(this.c!==B.n)A.m(A.q("pixeldart backend is not ready"))
B.p.aF(A.K(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.eo.prototype={
v(){return"RendererBackendKind."+this.b}}
A.cH.prototype={
v(){return"RendererBackendState."+this.b}}
A.kP.prototype={}
A.hq.prototype={}
A.kO.prototype={
hH(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.x("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w],r=0;r<4;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.x("renderer provenance values must be non-empty",null))}},
B(){var s,r,q,p=this,o=A.t(t.N,t.z)
o.k(0,"backend",p.a)
o.k(0,"profile",p.b)
o.k(0,"buildId",p.c)
o.k(0,"capabilities",p.d)
s=p.e
r=s!=null
o.k(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null)
o.k(0,"fallback",p.x)
q=p.y
if(q!=null)o.k(0,"fallbackReason",q)
if(r)o.k(0,"rendererSha",s)
s=p.f
if(s!=null)o.k(0,"gameSha",s)
s=p.r
if(s!=null)o.k(0,"sdkVersion",s)
s=p.w
if(s!=null)o.k(0,"lockfileDigest",s)
return o}}
A.aL.prototype={
v(){return"SleepQuality."+this.b}}
A.az.prototype={
v(){return"SleepLocation."+this.b}}
A.dl.prototype={}
A.iX.prototype={
bS(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hr(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.i([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){n=s[o]
i.push(A.K(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.K(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.iY.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:57}
A.iZ.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:58}
A.fU.prototype={
v(){return"InteractionType."+this.b}}
A.cQ.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.lB.prototype={}
A.cP.prototype={}
A.fy.prototype={}
A.jK.prototype={}
A.jM.prototype={
dj(){var s,r,q,p=t.r,o=A.i([],p)
for(s=this.a.b,s=new A.aa(s,s.r,s.e,A.n(s).h("aa<2>")),r=this.b;s.l();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.i(o.slice(0),p)
B.a.T(p,new A.jN())
return p},
jf(a,b){var s,r,q,p,o,n=b.b
if(n.gF(n))return B.ef
s=t.N
r=A.a0(s)
q=A.a0(s)
for(s=n.gL(),s=s.gt(s),p=a.c;s.l();){o=s.gp()
if(B.a.gM(p).a.i(0,o)==n.i(0,o))r.m(0,o)
else q.m(0,o)}if(q.a!==0)return new A.cP(B.N,r)
s=r.a
o=B.a.gM(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gM(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.cP(B.bd,r)
return new A.cP(B.ab,r)},
iz(a,b,c,d,e){var s,r,q=this.a,p=q.b.i(0,e)
if(p==null)return new A.fy(e,!1,B.ee,null)
s=p.d===c
r=this.jf(p,d)
q.kr(e)
return new A.fy(e,s,r,r.a===B.N&&s?'The world says "'+d.c+'". The entry says "'+B.a.gM(p.c).n(0)+'".':null)},
jj(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.N)return null
s=this.a.b.i(0,r)
if(s==null)return null
return new A.jK(B.a.gM(s.c).n(0)+" but "+A.u(a.f))}}
A.jN.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.E(s.a(b).a,a.a)},
$S:10}
A.b7.prototype={
v(){return"RuptureStep."+this.b}}
A.kV.prototype={}
A.bB.prototype={}
A.kW.prototype={
ght(){var s=B.X.i(0,this.a)
return s==null?0:s},
hv(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.o)s=q.e
else s=!0
if(s)return B.aG
r=A.nw(b)
s=q.c
B.a.G(s)
B.a.I(s,r)
B.a.G(q.d)
q.a=B.J
q.b=0
q.e=!1
return A.i([B.bw],t.Y)},
j0(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.x("rupture advance must be a finite non-negative duration",null))
if(l.a===B.o||a===0)return B.aG
s=A.i([],t.Y)
r=a
for(;;){if(!(r>0&&l.a!==B.o))break
A:{q=l.a
p=B.X.i(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.B)l.iQ(s)
p=l.b
o=B.X.i(0,l.a)
if(p<(o==null?0:o))break A
B.a.m(s,new A.bB())
if(q===B.B){l.a=B.o
l.b=0
l.e=!0
B.a.m(s,B.bv)}else{p=q.a+1
if(!(p<7))return A.c(B.aF,p)
l.a=B.aF[p]
l.b=0
B.a.m(s,new A.bB())}}}return A.ag(s,t.k8)},
B(){var s=this,r=t.N
return A.K(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ag(s.c,r),"extinguishedMantles",A.ag(s.d,r),"completed",s.e],r,t.z)},
iQ(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.Z(B.d.cX(l.b/l.ght()*A.ag(s,r).length),0,A.ag(s,r).length)
p=l.d
for(;;){o=A.b5(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.b5(s,!1,r)
o.$flags=3
n=o
o=A.b5(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.c(n,m)
B.a.m(p,n[m])
B.a.m(a,new A.bB())}}}
A.fM.prototype={
gaR(){var s=this.b
if(s<6||s>18)return 0
return B.d.Z((s-6)/12,0,1)}}
A.ml.prototype={
$1(a){var s=B.c.bn(this.a,a)&255
return B.c.Z(B.d.ak(s+((B.c.bn(this.b,a)&255)-s)*this.c),0,255)},
$S:60}
A.l5.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.dn(g.a),e=t.N,d=A.t(e,t.b)
for(s=g.b,s=new A.R(s,A.n(s).h("R<1,2>")).gt(0);s.l();){r=s.d
q=r.a
d.k(0,q,g.iV(q,r.b))}s=A.dn(g.r)
q=A.dn(g.w)
p=A.dn(g.x)
o=A.t(e,t.l_)
for(n=g.as,n=new A.R(n,A.n(n).h("R<1,2>")).gt(0),m=t.hq;n.l();){l=n.d
k=l.a
j=A.i([],m)
for(i=J.H(l.b);i.l();){h=i.gp()
j.push(A.K(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.K(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
iV(a,b){var s,r=A.dn(t.iu.a(b)),q=this.c.i(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.dn(q.aJ(0,new A.l6(),t.S,t.z)))
s=this.d.i(0,a)
if(s!=null&&s.gH(s))r.k(0,"_ambient",A.dn(s.aJ(0,new A.l7(),t.S,t.z)))
return r}}
A.l6.prototype={
$2(a,b){return new A.E(A.a(a),t.ey.a(b).B(),t.iI)},
$S:61}
A.l7.prototype={
$2(a,b){return new A.E(A.a(a),t.bR.a(b).B(),t.iI)},
$S:62}
A.cO.prototype={
B(){return A.K(["hour",this.a,"order",this.b],t.N,t.S)}}
A.cN.prototype={
B(){return A.K(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.eA.prototype={
B(){var s=t.N
return A.K(["field",this.a,"value",this.b],s,s)}}
A.lb.prototype={
b6(){var s=0,r=A.bu(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$b6=A.bv(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.an(A.bx(A.d(A.d(v.G.window).fetch("res/text.json")),t.m),$async$b6)
case 6:n=b
s=7
return A.an(A.bx(A.d(n.text()),t.N),$async$b6)
case 7:m=b
l=A.v7(m)
j=J.au(l,"broadcasts")
j.toString
i=t.b
o.a=i.a(j)
j=J.au(l,"visitors")
j.toString
o.b=i.a(j)
j=J.au(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.au(l,"documents")
j.toString
i.a(j)
j=J.au(l,"street")
j.toString
i.a(j)
j=J.au(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.au(l,"nights")
j.toString
i.a(j)
j=J.au(l,"endings")
j.toString
o.w=i.a(j)
j=J.au(l,"records")
j.toString
i.a(j)
j=J.au(l,"cues")
j.toString
i.a(j)
j=J.au(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ac(g)
j=A.u(k)
throw A.b("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bs(null,r)
case 1:return A.br(p.at(-1),r)}})
return A.bt($async$b6,r)},
h9(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.i(0,B.c.n(a))
if(t.f.b(s)){p=s.gO().dh(0,new A.lc())
r=p.$ti
q=t.N
q=A.t(q,q)
q.iY(new A.bN(p,r.h("E<j,j>(1)").a(new A.ld()),r.h("bN<1,E<j,j>>")))
return q}return null},
hc(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.i(0,a)
m=t.f
r=m.b(s)?s.i(0,"_arrival"):n
q=m.b(r)?r.i(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.i(0,"hour")
o=q.i(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.al(p)||o!==B.d.al(o))return n
return new A.cO(B.d.al(p),B.d.al(o))},
hb(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.i(0,a)
l=t.f
r=l.b(s)?s.i(0,"_ambient"):m
q=l.b(r)?r.i(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.i(0,"hour")
o=q.i(0,"channel")
n=q.i(0,"lineKey")
if(typeof p!="number"||p!==B.d.al(p)||typeof o!="string"||typeof n!="string")return m
return new A.cN(B.d.al(p),o,n)},
ks(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.t(a1,t.iu),a3=A.t(a1,t.c_),a4=A.t(a1,t.d8),a5=t.a,a6=A.t(a1,t.iD),a7=b.b
a7===$&&A.h()
a7=new A.R(a7,A.n(a7).h("R<1,2>")).gt(0)
s=t.bR
r=t.ey
q=t.f
while(a7.l()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.t(a,a0)
for(o=o.gO(),o=o.gt(o);o.l();){m=o.gp()
l=m.a
k=typeof l=="string"?A.kt(l,null):null
if(k==null||!q.b(m.b))continue
j=A.t(a1,a1)
for(m=q.a(m.b).gO(),m=m.gt(m);m.l();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.B(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.t(a,r)
for(m=n.$ti.h("c5<1>"),l=new A.c5(n,n.r,n.e,m);l.l();){i=l.d
g=b.hc(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.t(a,s)
for(m=new A.c5(n,n.r,n.e,m);m.l();){l=m.d
e=b.hb(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.h()
a7=new A.R(a7,A.n(a7).h("R<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.l()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.i([],s)
for(m=J.H(d);m.l();){c=m.gp()
if(q.b(c)&&typeof c.i(0,"field")=="string"&&typeof c.i(0,"value")=="string")o.push(new A.eA(A.B(c.i(0,"field")),A.B(c.i(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.l5(A.t(a,a0),a2,a3,a4,A.t(a1,a5),A.t(a1,a5),A.t(a,a5),A.t(a,a5),A.t(a,a5),A.t(a1,a5),A.t(a1,a5),A.t(a1,a5),a6)}}
A.lc.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:63}
A.ld.prototype={
$1(a){t.d7.a(a)
return new A.E(A.B(a.a),A.B(a.b),t.q)},
$S:64}
A.iH.prototype={
dl(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.d(v.G.window).setTimeout(A.a8(new A.iI(this)),7000))}}
A.iI.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:65}
A.iP.prototype={
df(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.j0.prototype={
hC(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.P(a,k,"door-speaker",j)
l.b!==$&&A.v()
l.b=i
s=A.P(a,k,"door-line",j)
l.c!==$&&A.v()
l.c=s
r=l.a
A.d(r.appendChild(i))
A.d(r.appendChild(s))
s=A.P(a,k,"door-cite-list",j)
l.e!==$&&A.v()
l.e=s
i=A.P(a,k,"door-cite-result",j)
l.f!==$&&A.v()
l.f=i
A.d(r.appendChild(s))
A.d(r.appendChild(i))
for(i=A.im,s=l.r,q=0;q<5;++q){p=B.cM[q]
o=A.d(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.j1(l,p)
if(typeof n=="function")A.m(A.x("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.dM()]=n
o.addEventListener("click",m)
A.d(r.appendChild(o))
B.a.m(s,o)}i=A.P(a,"button","door-continue","continue")
l.d!==$&&A.v()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.a8(new A.j2(l)))
A.d(r.appendChild(i))
A.d(A.e(a.body).appendChild(r))},
dm(a,b){var s,r,q,p=this
p.z=!0
s=p.b
s===$&&A.h()
s.textContent=a
s=p.c
s===$&&A.h()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.w)(s),++q)A.d(s[q].style).display=""
s=p.d
s===$&&A.h()
A.d(s.style).display="none"
s=p.e
s===$&&A.h()
s.textContent=""
s=p.f
s===$&&A.h()
s.textContent=""
p.a.className="door visible"},
bP(a){var s,r,q=this,p=q.c
p===$&&A.h()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.w)(p),++r)A.d(p[r].style).display="none"
p=q.d
p===$&&A.h()
A.d(p.style).display=""
p=q.f
p===$&&A.h()
p.textContent=""},
hl(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.im,p=0;p<b.length;b.length===r||(0,A.w)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.d(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.j3(o,this)
if(typeof o=="function")A.m(A.x("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.dM()]=o
m.addEventListener("click",l)
A.d(s.appendChild(m))}},
bz(){var s,r=this
r.z=!1
s=r.e
s===$&&A.h()
s.textContent=""
s=r.f
s===$&&A.h()
s.textContent=""
r.a.className="door"},
sjZ(a){this.w=t.ov.a(a)},
sk0(a){this.x=t.jE.a(a)},
sk_(a){this.y=t.bZ.a(a)}}
A.j1.prototype={
$1(a){var s
A.d(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.j2.prototype={
$1(a){var s
A.d(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.j3.prototype={
$1(a){var s
A.d(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.j7.prototype={
hD(a){var s,r,q,p=this,o=p.a,n=A.P(o,"h1","journal-title",null)
p.f!==$&&A.v()
p.f=n
s=A.P(o,"div","ending-copy",null)
p.r!==$&&A.v()
p.r=s
r=p.b
A.d(r.appendChild(n))
A.d(r.appendChild(s))
q=A.P(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.a8(new A.j8(p)))
A.d(r.appendChild(q))},
hm(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.w)(b),++p){o=b[p]
n=A.d(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.d(s.appendChild(n))}m.bI()},
sk5(a){this.w=t.jE.a(a)}}
A.j8.prototype={
$1(a){var s
A.d(a)
s=this.a
s.ah()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.jA.prototype={
hE(a){var s,r="help-copy",q=this.b,p=this.a
A.d(q.appendChild(A.P(p,"h1","journal-title","house notes")))
A.d(q.appendChild(A.P(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.d(q.appendChild(A.P(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.P(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.a8(new A.jB(this)))
A.d(q.appendChild(s))}}
A.jB.prototype={
$1(a){A.d(a)
return this.a.ah()},
$S:1}
A.jQ.prototype={
hQ(){var s,r=this,q=r.a,p=A.P(q,"div","page-turn",null),o=A.P(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a8(new A.jR(r)))
s=A.P(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a8(new A.jS(r)))
q=A.P(q,"span","right-day-label",null)
r.Q!==$&&A.v()
r.Q=q
A.d(p.appendChild(o))
A.d(p.appendChild(q))
A.d(p.appendChild(s))
return p},
ea(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.dD(s.CW+a,r)
s.dX()},
dD(a,b){if(a<1)return 1
if(a>b)return b
return a},
iC(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.dj(),r=s.length,q=A.im,p=j.a,o=0;o<s.length;s.length===r||(0,A.w)(s),++o){n=s[o]
m=B.a.gM(n.c).n(0)
l=A.d(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.jT(j,n,l)
if(typeof m=="function")A.m(A.x("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.dM()]=m
l.addEventListener("click",k)
A.d(i.appendChild(l))}},
dX(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.i([],s)
for(q=j.f,p=q.b,o=A.n(p).h("aa<2>"),n=new A.aa(p,p.r,p.e,o),m=j.r;n.l();){l=n.d
if(l.b===m.a)r.push(l)}B.a.T(r,new A.jU())
j.dW(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.i([],s)
for(r=new A.aa(p,p.r,p.e,o);r.l();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.T(s,new A.jV())
j.dW(i,s)
k=B.d.Z(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.d(i.style).setProperty("width",B.d.dd(k*100,1)+"%")},
dW(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.w)(b),++r)A.d(a.appendChild(this.ib(b[r])))},
ib(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.P(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.d(k.createElement("div"))
n.className=q
n.textContent=o
A.d(n.style).setProperty("--shake",B.d.n(p.b))
A.d(j.appendChild(n))}m=a.r
if(m!=null){l=this.il(m,!1)
l.className=A.B(l.className)+" margin"
A.d(j.appendChild(l))}return j},
il(a,b){var s=b?"hand-line struck":"hand-line",r=A.P(this.a,"div",s,a.n(0))
A.d(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.jR.prototype={
$1(a){A.d(a)
return this.a.ea(-1)},
$S:1}
A.jS.prototype={
$1(a){A.d(a)
return this.a.ea(1)},
$S:1}
A.jT.prototype={
$1(a){var s,r,q
A.d(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:1}
A.jU.prototype={
$2(a,b){var s=t.L
return B.c.E(s.a(a).a,s.a(b).a)},
$S:10}
A.jV.prototype={
$2(a,b){var s=t.L
return B.c.E(s.a(a).a,s.a(b).a)},
$S:10}
A.ej.prototype={
bb(a){var s=this.b
s.className="panel"
A.d(s.style).setProperty("--panel-fade","0.25s")
A.d(A.e(this.a.body).appendChild(s))},
bI(){var s,r,q,p,o=this,n=o.b
if(B.b.u(A.B(n.className),"open"))return
s=$.kk
if(s!=null&&s!==o)s.ah()
$.kk=o
r=o.a
o.d=A.e(r.activeElement)
A.oe(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.a8(o.giw())
o.e=q
r.addEventListener("keydown",q)
p=A.pu(n)
if(p.length!==0)B.a.gaH(p).focus()},
ah(){var s,r,q=this,p=q.b
if(!B.b.u(A.B(p.className),"open"))return
p.className="panel"
if($.kk===q)$.kk=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
ix(a){A.d(a)
if(A.aB(a.defaultPrevented))return
if(A.B(a.code)==="Escape"){this.ah()
return}if(A.B(a.code)==="Tab")this.iP(a)},
iP(a){var s,r=A.pu(this.b)
if(r.length===0)return
s=A.e(this.a.activeElement)
if(A.aB(a.shiftKey)){if(s===B.a.gaH(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gM(r).focus()}}else if(s===B.a.gM(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gaH(r).focus()}},
sbH(a){this.c=t.jE.a(a)}}
A.kv.prototype={
hk(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.l3.prototype={
hJ(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.d(i.appendChild(A.P(a,"h2","journal-title","Rest")))
A.d(i.appendChild(A.P(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.P(a,"div","entry-picker",null)
for(r=A.im,q=0;q<2;++q){p=B.aE[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.aJ[n]
l=A.d(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.l4(this,p,m)
if(typeof k=="function")A.m(A.x("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.dM()]=k
l.addEventListener("click",j)
A.d(s.appendChild(l))}}A.d(i.appendChild(s))},
sk6(a){this.f=t.as.a(a)}}
A.l4.prototype={
$1(a){var s,r
A.d(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ah()},
$S:2}
A.bh.prototype={}
A.iE.prototype={
kj(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.M(s)
q=new A.W(s,r.h("j(1)").a(new A.iG()),r.h("W<1,j>")).aB(0)
r=this.b
r.G(0)
s=J.qB(a,t.N)
p=s.$ti
r.I(0,new A.J(s,p.h("r(l.E)").a(q.gbp(q)),p.h("J<l.E>")))},
jr(a,b){var s,r,q,p,o,n=A.i([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.u(0,o.a))n.push(o)}return n}}
A.iG.prototype={
$1(a){return t.h.a(a).a},
$S:66}
A.iF.prototype={
$2(a,b){var s,r=t.h
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.E(r,s):B.c.E(a.c,b.c)},
$S:67}
A.hL.prototype={
jO(a){return this.c.u(0,t.g.a(a))},
kh(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a5(0,j.gjh())||!a.a.a5(0,new A.lu(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.i(0,r)
p=q==null?null:q.i(0,s.b)
j=!0
if(p!=null)if(!k.u(0,r)){o=s.c
if(o!==B.M){n=s.d
if(n<J.av(p)){o=o===B.x
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.y}else j=!1}}}if(j)return!1
m=new A.hK(r,s.b,A.ag(p,t.kX),B.x)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.G(0)
j.I(0,a.a)
j=l.c
j.G(0)
j.I(0,k)
l.e=m
return!0},
ef(a){var s=this.a,r=A.n(s).h("a5<1>"),q=r.h("J<l.E>")
s=A.U(new A.J(new A.a5(s,r),r.h("r(l.E)").a(new A.lr(a)),q),q.h("l.E"))
B.a.T(s,new A.ls())
return s},
j5(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.ea
s=m.a.i(0,a)
if(s==null)return B.eb
r=B.c.K(a.b-1,7)
q=a.a
p=m.b.u(0,q)||r+1>=3||m.f?B.a8:B.C
o=p===B.C&&m.r.u(0,q)&&s.V(B.a9)?B.a9:p
if(s.V(o))n=o
else n=s.V(B.C)?B.C:B.a8
r=s.i(0,n)
r.toString
r=new A.hK(a,n,A.ag(r,t.kX),B.x)
m.e=r
return new A.hJ(r)},
jc(a){var s,r,q,p,o,n=this.e
if(n==null)return B.bc
if(n.d!==B.x)return B.e8
n.e=a
s=a===B.y
n.d=s?B.M:B.K
r=this.d
q=s?B.ba:B.dU
p=n.a
o=p.a
p=p.b
B.a.m(r,new A.bY(q,o,p,a,null))
if(a===B.F)B.a.m(r,new A.bY(B.dX,o,p,a,null))
if(s)this.dY(n)
return new A.hI(n)},
j1(){var s,r=this.e
if(r==null)return B.bc
s=r.d
if(s!==B.K&&s!==B.L)return B.e9
r.d=B.L
if(++r.f>=r.c.length){r.d=B.M
this.dY(r)
return new A.ez(r,!0)}return new A.ez(r,!1)},
jd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.K&&s!==B.L}else s=!0
if(s)return i
r=h.gbq()
if(r==null)return i
s=t.N
q=A.t(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.c(o,p)
p=o[p].c}else p=B.aH
p=J.H(p)
while(p.l()){o=p.gp()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.d6(q,s,s)
m=c.iz(!0,!0,o,new A.lB(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.N){B.a.m(this.d,new A.bY(B.dW,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.i(0,l)
if(j!=null){o=B.a.gM(j.c)
s=A.ok(s,s)
s.I(0,o.a)
s.I(0,q)
p.iZ(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.bd)if(k===B.ab){s=n.b
s=s.gH(s)}else s=!1
else s=!0
if(s)B.a.m(this.d,new A.bY(B.dV,o,p.b,i,l))}}return m},
dY(a){var s=a.a
this.b.m(0,s.a)
this.c.m(0,s)
this.e=null},
shu(a){this.r=t.C.a(a)}}
A.lu.prototype={
$1(a){var s=this.a.a
return new A.a5(s,A.n(s).h("a5<1>")).ab(0,new A.lt(A.B(a)))},
$S:3}
A.lt.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:11}
A.lr.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:11}
A.ls.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.E(a.c,b.c)
return s!==0?s:B.c.E(a.d,b.d)},
$S:69}
A.lq.prototype={
$2(a,b){var s=t.kX
return B.c.E(s.a(a).a,s.a(b).a)},
$S:70}
A.hM.prototype={}
A.i3.prototype={}
A.mx.prototype={
$1(a){return B.b.S(A.B(a),"off.")},
$S:3}
A.aH.prototype={
v(){return"DoorChoice."+this.b}}
A.aU.prototype={
v(){return"VisitPhase."+this.b}}
A.aV.prototype={
v(){return"VisitTier."+this.b}}
A.ce.prototype={
v(){return"VisitorFactKind."+this.b}}
A.bY.prototype={
B(){var s,r=this,q=A.t(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.bE.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.aW.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aW&&b.a===this.a&&b.b===this.b},
gD(a){return A.bP(this.a,this.b,B.h,B.h)}}
A.b8.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.b8&&b.a===this.a&&b.b===this.b},
gD(a){return A.bP(this.a,this.b,B.h,B.h)}}
A.aM.prototype={
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.aM&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gD(a){var s=this
return A.bP(s.a,s.b,s.c,s.d)},
B(){var s=this
return A.K(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.hN.prototype={
B(){var s,r,q,p=this.a
p=A.U(p,A.n(p).c)
B.a.a4(p)
s=this.b
r=A.n(s)
q=r.h("cs<1,I<j,@>>")
s=A.U(new A.cs(s,r.h("I<j,@>(1)").a(new A.lp()),q),q.h("l.E"))
r=this.c
return A.K(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.lp.prototype={
$1(a){return t.g.a(a).B()},
$S:71}
A.fg.prototype={
B(){var s=this,r=s.a.B(),q=s.e
q=q==null?null:q.b
return A.K(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.iB.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:72}
A.iC.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:73}
A.iD.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:74}
A.hK.prototype={
gbq(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
s=r[s].b}else s=null
return s}}
A.lv.prototype={}
A.aN.prototype={}
A.hJ.prototype={}
A.hI.prototype={}
A.ez.prototype={}
A.i5.prototype={
gja(){var s,r
if(!this.ax)return B.j
s=this.e
s===$&&A.h()
r=s.r
if(r==null)r=A.m(A.q("renderer is not initialized"))
s=A.i([r.a,"max-texture-"+r.d,"max-samples-"+r.f],t.s)
if(r.x)s.push("anisotropic-filtering")
if(r.z)s.push("float-render-target")
if(r.Q)s.push("half-float-render-target")
if(r.as)s.push("context-loss")
return s},
j3(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="resource library is disposed"
if(!b.ax||b.w.length!==0)return
s=b.e
s===$&&A.h()
s=s.gkg()
if(s.r)A.m(A.q(a0))
if(!isFinite(0))A.m(A.x("MaterialDefinition.emissiveStrength must be >= 0: 0",a))
if(!isFinite(0.5))A.m(A.x("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",a))
r=s.b.a.cm(B.br,a)
s.e.m(0,r)
b.z=r
for(s=a1.b,q=s.length,p=b.w,o=b.x,n=b.y,m=b.r,l=0;l<s.length;s.length===q||(0,A.w)(s),++l){k=s[l]
j=b.iH(a1,k)
i=b.e.w
if(i==null)i=A.m(A.q("renderer is not initialized"))
h=k.a
if(i.r)A.m(A.q(a0))
g=i.a
j.P()
r=g.b.cm(j,"room:"+h)
f=r.a
g.c.k(0,f,g.ec(j))
i.d.m(0,r)
B.a.m(m,r)
i=b.z
i.toString
e=new A.bn(r,i,B.R,-1,B.bD,B.bi,!0,!0,0,a)
i=b.f
i===$&&A.h()
B.R.P()
g=i.a
d=g.$ti
g.aC(d.c.a(r))
g=g.b
if(!(f>=0&&f<g.length))return A.c(g,f)
j=g[f].c
g=(j==null?d.y[1].a(j):j).d
f=B.R.bK()
g=g.gcj()
d=A.M(g)
A.iA(new A.W(g,d.h("F(1)").a(f.gde()),d.h("W<1,F>")))
c=i.b.jk(e)
B.a.m(p,c)
o.k(0,h,c)
n.k(0,h,e)}},
hi(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.e,d=e.i(0,b)
if(d==null)return
s=d.a
r=A.bl([s],t.N)
for(q=a.aA(s),p=J.H(q.a),q=new A.L(p,q.b,q.$ti.h("L<1>"));q.l();){o=p.gp()
n=o.bJ(s)
if(o.at&&!o.ax&&!o.z&&n!=null&&e.i(0,n)!=null)r.m(0,n)}for(e=this.x,e=new A.R(e,A.n(e).h("R<1,2>")).gt(0),s=this.y;e.l();){m=e.d
q=m.a
l=s.i(0,q)
p=l.a
o=l.b
k=l.c
j=r.u(0,q)?-1:0
i=new A.bn(p,o,k,j,l.e,l.f,!0,!0,l.x,l.y)
j=this.f
j===$&&A.h()
o=m.b
k.P()
h=j.a
g=h.$ti
g.c.a(p)
h.aC(p)
h=h.b
p=p.a
if(!(p>=0&&p<h.length))return A.c(h,p)
f=h[p].c
p=(f==null?g.y[1].a(f):f).d
k=k.bK()
p=p.gcj()
h=A.M(p)
A.iA(new A.W(p,h.h("F(1)").a(k.gde()),h.h("W<1,F>")))
j=j.b
h=j.$ti
h.c.a(o)
h.y[1].a(i)
j.aC(o)
j=j.b
o=o.a
if(!(o>=0&&o<j.length))return A.c(j,o)
j[o].scl(i)
s.k(0,q,i)}},
he(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.bl([b],t.N),h=a.e,g=h.i(0,b)
if(g!=null)for(s=g.a,r=a.aA(s),q=J.H(r.a),r=new A.L(q,r.b,r.$ti.h("L<1>"));r.l();){p=q.gp()
o=p.bJ(s)
if(p.at&&!p.ax&&!p.z&&o!=null&&h.i(0,o)!=null)i.m(0,o)}n=new A.fQ(a).h5(i,c)
m=A.i([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.dF(k.b)
h=k.a
B.a.m(m,new A.hi(new A.F(h.a,h.b,h.c),k.d,k.c))}j=A.q7(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.dF(A.q6(d))
s=new A.j_(new A.F(j.a,j.b,j.c),1)}this.as=new A.fK(B.cG,1.5,14,B.aB,h,s,m)},
iH(a,b){var s,r,q,p,o,n=A.pU(a,b),m=A.U(n.a,t.i)
B.a.I(m,n.b)
B.a.I(m,n.c)
s=new Float32Array(A.ck(m))
r=A.i([],t.hL)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.c(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.c(s,o)
B.a.m(r,new A.F(m,p,s[o]))}return new A.eb(B.bz,s,A.iA(r))},
dF(a){return new A.cC((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$irO:1}
A.mF.prototype={
$1(a){var s
try{A.o7(a,this.a)
return!0}catch(s){if(A.ac(s) instanceof A.G)return!1
else throw s}},
$S:75}
A.mG.prototype={
$0(){$.aO=null
$.aZ.j().aj($.a3.j())},
$S:0}
A.mH.prototype={
$2(a,b){var s,r,q,p,o
if($.S.j().gam().a===21){A.pK(!1)
return}s=$.a7.j().r.b
$.S.j().hq(a,b,$.aC)
r=$.a7.j().r.b
q=s
for(;;){p=q
o=r
if(typeof p!=="number")return p.aP()
if(typeof o!=="number")return A.is(o)
if(!(p<o))break
p=$.nt
if(p!=null){if($.a7.b===$.a7)A.m(A.aI(""))
p.kb(B.a.i(B.r,q).b)}p=q
if(typeof p!=="number")return p.a3()
q=p+1}A.nE("saved after sleep")},
$S:76}
A.mK.prototype={
$0(){$.aO=null
$.aZ.j().aj($.a3.j())},
$S:0}
A.mL.prototype={
$0(){$.aO=null
$.aZ.j().aj($.a3.j())},
$S:0}
A.mM.prototype={
$0(){$.aO=null},
$S:0}
A.mN.prototype={
$0(){$.aO=null},
$S:0}
A.mO.prototype={
$1(a){A.d(a)
return A.pJ()},
$S:1}
A.mP.prototype={
$1(a){var s,r
A.d(a)
if(!A.aB(a.repeat))$.dD.j().cY(new A.hq(A.B(a.code),!0,1))
if(A.B(a.code)==="KeyP"&&!A.aB(a.repeat))$.nA=!$.nA
if(A.B(a.code)==="KeyR"&&!A.aB(a.repeat)&&$.pR){s=$.dG
if(s!=null)s.aL()}if(A.B(a.code)==="KeyJ"&&!A.aB(a.repeat)&&!$.al.j().z){s=$.aO
if(s==null){$.aO=$.dC.j()
s=$.dC.j()
s.hy()
r=s.r.a-1
if(r<1)r=1
s.CW=s.dD(s.CW,r)
s.iC()
s.dX()}else if(s===$.dC.j())$.dC.j().ah()}if(A.B(a.code)==="KeyL"&&!A.aB(a.repeat)&&!$.al.j().z){s=$.aO
if(s==null){$.aO=$.ik.j()
$.ik.j().bI()}else if(s===$.ik.j())$.ik.j().ah()}if(A.B(a.code)==="KeyH"&&!A.aB(a.repeat)&&!$.al.j().z){s=$.aO
if(s==null){$.aO=$.ii.j()
$.ii.j().bI()}else if(s===$.ii.j())$.ii.j().ah()}if(A.B(a.code)==="KeyK"&&!A.aB(a.repeat))A.nE("saved")},
$S:2}
A.mQ.prototype={
$1(a){A.d(a)
$.dD.j().cY(new A.hq(A.B(a.code),!1,0))},
$S:2}
A.mR.prototype={
$1(a){A.d(a)
return A.pk()},
$S:1}
A.mI.prototype={
$1(a){A.d(a)
return A.pk()},
$S:1}
A.mJ.prototype={
$1(a){A.d(a)
return $.aZ.j().aj($.a3.j())},
$S:1}
A.mj.prototype={
$1(a){var s=A.B(A.d(a).message)
A.mn(s,null)},
$S:2}
A.mk.prototype={
$1(a){var s
A.d(a)
s=a.reason
A.mn("unhandled rejection: "+A.u(s==null?A.B(a.type):s),null)},
$S:2}
A.mq.prototype={
$1(a){this.a.className=""},
$S:77}
A.mo.prototype={
$1(a){return t.L.a(a).e},
$S:16};(function aliases(){var s=J.c4.prototype
s.hx=s.n
s=A.l.prototype
s.hw=s.dh
s=A.ej.prototype
s.hy=s.bI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._instance_1u,p=hunkHelpers._static_1,o=hunkHelpers._static_0
s(J,"ul","rl",15)
r(J.o.prototype,"gbp","u",9)
q(A.b4.prototype,"gjh","V",9)
p(A,"uY","th",6)
p(A,"uZ","ti",6)
p(A,"v_","tj",6)
o(A,"pT","uJ",0)
s(A,"v1","rq",15)
r(A.b9.prototype,"gbp","u",9)
p(A,"v4","u6",4)
o(A,"w9","n7",80)
q(A.bO.prototype,"gde","h1",37)
var n
q(n=A.fT.prototype,"gio","ip",1)
q(n,"giq","ir",1)
q(n,"giu","iv",1)
q(n,"gis","it",1)
p(A,"vv","pr",4)
p(A,"vx","pq",4)
q(A.ej.prototype,"giw","ix",1)
q(A.hL.prototype,"gjN","jO",11)
p(A,"q_","uA",81)
p(A,"vp","u2",82)
o(A,"vr","u5",0)
p(A,"vq","u3",55)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.A,null)
q(A.A,[A.n1,J.fV,A.er,J.co,A.l,A.dP,A.c1,A.T,A.D,A.l_,A.bL,A.cD,A.L,A.eC,A.a_,A.bD,A.ba,A.df,A.d5,A.cU,A.bS,A.li,A.kg,A.dV,A.eU,A.N,A.k4,A.c5,A.aa,A.e8,A.lI,A.m5,A.bo,A.hY,A.id,A.m2,A.hR,A.aX,A.ao,A.hT,A.cR,A.a4,A.hS,A.ib,A.f5,A.eJ,A.i1,A.cV,A.eN,A.f_,A.ie,A.cq,A.fz,A.lY,A.m6,A.cr,A.hV,A.he,A.et,A.lJ,A.G,A.E,A.X,A.ic,A.as,A.f1,A.lk,A.i9,A.kf,A.hZ,A.ds,A.ky,A.kw,A.iT,A.iU,A.kq,A.fq,A.fK,A.ji,A.bQ,A.jz,A.cC,A.j_,A.hi,A.ea,A.bX,A.lo,A.eb,A.kh,A.kr,A.hs,A.bn,A.l9,A.kK,A.jk,A.ka,A.hC,A.kd,A.le,A.e1,A.jb,A.fJ,A.jj,A.b6,A.bk,A.kS,A.bR,A.dQ,A.ku,A.hn,A.kA,A.kn,A.kC,A.kB,A.eL,A.en,A.i6,A.hX,A.kR,A.kY,A.aK,A.aG,A.ad,A.iW,A.iz,A.cF,A.jl,A.bO,A.kx,A.lh,A.F,A.fp,A.fo,A.hl,A.i7,A.ep,A.hP,A.ig,A.jv,A.jy,A.dZ,A.es,A.cc,A.fD,A.hk,A.jx,A.ch,A.bA,A.j4,A.lA,A.cj,A.f4,A.f3,A.hO,A.fF,A.fk,A.iR,A.jh,A.hx,A.jt,A.fR,A.fT,A.h5,A.cE,A.kc,A.eu,A.kH,A.kQ,A.lC,A.eH,A.ia,A.i4,A.i2,A.l0,A.k,A.iQ,A.fG,A.j6,A.d8,A.hh,A.ks,A.dk,A.kX,A.cJ,A.fL,A.jq,A.jp,A.fr,A.h6,A.eE,A.hQ,A.e0,A.jD,A.kT,A.da,A.kU,A.cg,A.jC,A.ja,A.l1,A.bz,A.fQ,A.aA,A.cG,A.aJ,A.cL,A.ar,A.jF,A.ek,A.e9,A.lw,A.h3,A.aR,A.jP,A.iM,A.d3,A.iN,A.k0,A.k_,A.kp,A.ko,A.kP,A.hq,A.kO,A.dl,A.iX,A.lB,A.cP,A.fy,A.jK,A.jM,A.kV,A.bB,A.kW,A.fM,A.l5,A.cO,A.cN,A.eA,A.lb,A.iH,A.iP,A.j0,A.ej,A.kv,A.bh,A.iE,A.hL,A.lv,A.bY,A.aW,A.b8,A.aM,A.hN,A.fg,A.hK,A.i5])
q(J.fV,[J.fZ,J.e4,J.e5,J.dd,J.de,J.cz,J.cA])
q(J.e5,[J.c4,J.o,A.c7,A.ef])
q(J.c4,[J.hg,J.cM,J.bK])
r(J.fX,A.er)
r(J.jO,J.o)
q(J.cz,[J.e3,J.h_])
q(A.l,[A.cf,A.y,A.bN,A.J,A.bp,A.cT,A.bF])
q(A.cf,[A.cp,A.f6])
r(A.eG,A.cp)
r(A.eF,A.f6)
q(A.c1,[A.fu,A.ft,A.hy,A.mA,A.mC,A.lE,A.lD,A.md,A.jn,A.lS,A.lU,A.k7,A.lW,A.mT,A.mU,A.mu,A.kj,A.kb,A.ke,A.lf,A.lg,A.je,A.jc,A.jd,A.kl,A.km,A.kG,A.kF,A.kE,A.kD,A.kI,A.mh,A.kZ,A.mZ,A.mX,A.jm,A.k9,A.ly,A.lz,A.iL,A.ju,A.kN,A.j9,A.jr,A.js,A.iS,A.mb,A.jI,A.l2,A.j5,A.k3,A.jW,A.iY,A.iZ,A.ml,A.lc,A.ld,A.iI,A.j1,A.j2,A.j3,A.j8,A.jB,A.jR,A.jS,A.jT,A.l4,A.iG,A.lu,A.lt,A.lr,A.mx,A.lp,A.iB,A.iC,A.iD,A.mF,A.mO,A.mP,A.mQ,A.mR,A.mI,A.mJ,A.mj,A.mk,A.mq,A.mo])
q(A.fu,[A.lH,A.iV,A.jX,A.mB,A.me,A.mt,A.jo,A.lT,A.k5,A.k8,A.lZ,A.lm,A.ll,A.jf,A.mY,A.mW,A.jH,A.jJ,A.jE,A.k2,A.jN,A.l6,A.l7,A.jU,A.jV,A.iF,A.ls,A.lq,A.mH])
r(A.bj,A.eF)
q(A.T,[A.cB,A.bU,A.h0,A.hB,A.ht,A.hW,A.e7,A.fi,A.bi,A.ey,A.hA,A.dm,A.fx])
r(A.dq,A.D)
r(A.fv,A.dq)
q(A.y,[A.a6,A.a5,A.ax,A.R,A.cS,A.eM])
q(A.a6,[A.ew,A.W,A.eq,A.i0])
r(A.cs,A.bN)
q(A.ba,[A.dt,A.du,A.dv])
r(A.dw,A.dt)
r(A.dx,A.du)
r(A.eS,A.dv)
r(A.dz,A.df)
r(A.cd,A.dz)
r(A.dR,A.cd)
q(A.d5,[A.ap,A.dW])
q(A.bS,[A.dS,A.eT,A.f0])
r(A.d7,A.dS)
r(A.ei,A.bU)
q(A.hy,[A.hw,A.d4])
q(A.N,[A.b4,A.eI,A.i_])
r(A.e6,A.b4)
r(A.dg,A.c7)
q(A.ef,[A.h7,A.aj])
q(A.aj,[A.eO,A.eQ])
r(A.eP,A.eO)
r(A.ed,A.eP)
r(A.eR,A.eQ)
r(A.ee,A.eR)
q(A.ed,[A.ec,A.h8])
q(A.ee,[A.h9,A.ha,A.hb,A.hc,A.hd,A.eg,A.eh])
r(A.eV,A.hW)
q(A.ft,[A.lF,A.lG,A.m3,A.lK,A.lO,A.lN,A.lM,A.lL,A.lR,A.lQ,A.lP,A.m1,A.mp,A.m8,A.m7,A.kM,A.jG,A.mG,A.mK,A.mL,A.mM,A.mN])
r(A.eD,A.hT)
r(A.i8,A.f5)
r(A.eK,A.eI)
r(A.b9,A.eT)
r(A.ex,A.f0)
q(A.cq,[A.fl,A.fH,A.h1])
q(A.fz,[A.iO,A.jZ,A.jY,A.ln])
r(A.h2,A.e7)
r(A.lX,A.lY)
r(A.hG,A.fH)
q(A.bi,[A.di,A.fS])
r(A.hU,A.f1)
q(A.hV,[A.ho,A.cy,A.fh,A.bW,A.dT,A.fn,A.fw,A.fE,A.cI,A.db,A.bI,A.hr,A.e_,A.dj,A.hj,A.dc,A.fN,A.dX,A.fO,A.fP,A.cw,A.dY,A.cK,A.dp,A.fs,A.dy,A.fm,A.dO,A.fA,A.fC,A.ak,A.b2,A.cv,A.ct,A.c2,A.c3,A.eo,A.cH,A.aL,A.az,A.fU,A.cQ,A.b7,A.aH,A.aU,A.aV,A.ce,A.bE])
q(A.bQ,[A.bm,A.cb,A.c6,A.hf,A.bJ])
r(A.kL,A.lC)
r(A.kJ,A.kL)
q(A.ej,[A.j7,A.jA,A.jQ,A.l3])
q(A.lv,[A.hM,A.i3,A.aN,A.hJ,A.hI,A.ez])
s(A.dq,A.bD)
s(A.f6,A.D)
s(A.eO,A.D)
s(A.eP,A.a_)
s(A.eQ,A.D)
s(A.eR,A.a_)
s(A.dz,A.f_)
s(A.f0,A.ie)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",p:"double",at:"num",j:"String",r:"bool",X:"Null",z:"List",A:"Object",I:"Map",O:"JSObject"},mangledNames:{},types:["~()","~(O)","X(O)","r(j)","@(@)","r(b6)","~(~())","~(@)","r(bR)","r(A?)","f(aR,aR)","r(aM)","~(A?,A?)","X(@)","@()","f(@,@)","r(aR)","j?(j)","@(j)","X()","c6(f,f,j?)","bm(f,f,j?)","cb(f,f,j?)","r(hz?)","j(b6)","f(c9,c9)","X(~())","@(@,j)","r(f)","bJ(f,f,j?)","ep(bm)","bn(aT)","f(ad<aK>,ad<aK>)","aT(ad<aK>)","f(ad<aG>,ad<aG>)","aT(ad<aG>)","cF(p,p,p,p)","F(F)","r(p)","A?(A?)","b3<X>(E<j,j>)","r(O)","X(@,bC)","O()","0&(j,f?)","r(b2)","r(ar)","I<j,j>(I<j,j>,j)","r(cL)","r(cg)","f(+(p,p,p,p),+(p,p,p,p))","z<+(p,p,p,p)>()","r(cG)","f(f,ar)","r(aA)","~(f)","E<j,j>(j,@)","r(aL)","r(az)","~(f,@)","f(f)","E<f,@>(f,cO)","E<f,@>(f,cN)","r(E<@,@>)","E<j,j>(E<@,@>)","j(A?)","j(bh)","f(bh,bh)","~(A,bC)","f(aM,aM)","f(b8,b8)","I<j,@>(aM)","r(aV)","r(aU)","r(aH)","r(dk)","~(aL,az)","X(A?)","~(@,@)","X(A,bC)","r()","~(at)","~(j)","f(bz,bz)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.dw&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.dx&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eS&&A.vt(a,b.a)}}
A.tC(v.typeUniverse,JSON.parse('{"hg":"c4","cM":"c4","bK":"c4","vL":"c7","o":{"z":["1"],"y":["1"],"O":[],"l":["1"]},"fZ":{"r":[],"Q":[]},"e4":{"X":[],"Q":[]},"e5":{"O":[]},"c4":{"O":[]},"fX":{"er":[]},"jO":{"o":["1"],"z":["1"],"y":["1"],"O":[],"l":["1"]},"co":{"V":["1"]},"cz":{"p":[],"at":[],"aw":["at"]},"e3":{"p":[],"f":[],"at":[],"aw":["at"],"Q":[]},"h_":{"p":[],"at":[],"aw":["at"],"Q":[]},"cA":{"j":[],"aw":["j"],"op":[],"Q":[]},"cf":{"l":["2"]},"dP":{"V":["2"]},"cp":{"cf":["1","2"],"l":["2"],"l.E":"2"},"eG":{"cp":["1","2"],"cf":["1","2"],"y":["2"],"l":["2"],"l.E":"2"},"eF":{"D":["2"],"z":["2"],"cf":["1","2"],"y":["2"],"l":["2"]},"bj":{"eF":["1","2"],"D":["2"],"z":["2"],"cf":["1","2"],"y":["2"],"l":["2"],"l.E":"2","D.E":"2"},"cB":{"T":[]},"fv":{"D":["f"],"bD":["f"],"z":["f"],"y":["f"],"l":["f"],"D.E":"f","bD.E":"f"},"y":{"l":["1"]},"a6":{"y":["1"],"l":["1"]},"ew":{"a6":["1"],"y":["1"],"l":["1"],"a6.E":"1","l.E":"1"},"bL":{"V":["1"]},"bN":{"l":["2"],"l.E":"2"},"cs":{"bN":["1","2"],"y":["2"],"l":["2"],"l.E":"2"},"cD":{"V":["2"]},"W":{"a6":["2"],"y":["2"],"l":["2"],"a6.E":"2","l.E":"2"},"J":{"l":["1"],"l.E":"1"},"L":{"V":["1"]},"bp":{"l":["1"],"l.E":"1"},"eC":{"V":["1"]},"dq":{"D":["1"],"bD":["1"],"z":["1"],"y":["1"],"l":["1"]},"eq":{"a6":["1"],"y":["1"],"l":["1"],"a6.E":"1","l.E":"1"},"dw":{"dt":[],"ba":[]},"dx":{"du":[],"ba":[]},"eS":{"dv":[],"ba":[]},"dR":{"cd":["1","2"],"dz":["1","2"],"df":["1","2"],"f_":["1","2"],"I":["1","2"]},"d5":{"I":["1","2"]},"ap":{"d5":["1","2"],"I":["1","2"]},"cT":{"l":["1"],"l.E":"1"},"cU":{"V":["1"]},"dW":{"d5":["1","2"],"I":["1","2"]},"dS":{"bS":["1"],"ca":["1"],"y":["1"],"l":["1"]},"d7":{"dS":["1"],"bS":["1"],"ca":["1"],"y":["1"],"l":["1"]},"ei":{"bU":[],"T":[]},"h0":{"T":[]},"hB":{"T":[]},"eU":{"bC":[]},"c1":{"cu":[]},"ft":{"cu":[]},"fu":{"cu":[]},"hy":{"cu":[]},"hw":{"cu":[]},"d4":{"cu":[]},"ht":{"T":[]},"b4":{"N":["1","2"],"n3":["1","2"],"I":["1","2"],"N.K":"1","N.V":"2"},"a5":{"y":["1"],"l":["1"],"l.E":"1"},"c5":{"V":["1"]},"ax":{"y":["1"],"l":["1"],"l.E":"1"},"aa":{"V":["1"]},"R":{"y":["E<1,2>"],"l":["E<1,2>"],"l.E":"E<1,2>"},"e8":{"V":["E<1,2>"]},"e6":{"b4":["1","2"],"N":["1","2"],"n3":["1","2"],"I":["1","2"],"N.K":"1","N.V":"2"},"dt":{"ba":[]},"du":{"ba":[]},"dv":{"ba":[]},"dg":{"c7":[],"O":[],"Q":[]},"c7":{"O":[],"Q":[]},"ef":{"O":[]},"h7":{"O":[],"Q":[]},"aj":{"aS":["1"],"O":[]},"ed":{"D":["p"],"aj":["p"],"z":["p"],"aS":["p"],"y":["p"],"O":[],"l":["p"],"a_":["p"]},"ee":{"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"]},"ec":{"jg":[],"D":["p"],"aj":["p"],"z":["p"],"aS":["p"],"y":["p"],"O":[],"l":["p"],"a_":["p"],"Q":[],"D.E":"p","a_.E":"p"},"h8":{"D":["p"],"aj":["p"],"z":["p"],"aS":["p"],"y":["p"],"O":[],"l":["p"],"a_":["p"],"Q":[],"D.E":"p","a_.E":"p"},"h9":{"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"],"Q":[],"D.E":"f","a_.E":"f"},"ha":{"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"],"Q":[],"D.E":"f","a_.E":"f"},"hb":{"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"],"Q":[],"D.E":"f","a_.E":"f"},"hc":{"nb":[],"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"],"Q":[],"D.E":"f","a_.E":"f"},"hd":{"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"],"Q":[],"D.E":"f","a_.E":"f"},"eg":{"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"],"Q":[],"D.E":"f","a_.E":"f"},"eh":{"hz":[],"D":["f"],"aj":["f"],"z":["f"],"aS":["f"],"y":["f"],"O":[],"l":["f"],"a_":["f"],"Q":[],"D.E":"f","a_.E":"f"},"hW":{"T":[]},"eV":{"bU":[],"T":[]},"aX":{"V":["1"]},"bF":{"l":["1"],"l.E":"1"},"ao":{"T":[]},"eD":{"hT":["1"]},"a4":{"b3":["1"]},"f5":{"oV":[]},"i8":{"f5":[],"oV":[]},"eI":{"N":["1","2"],"I":["1","2"]},"eK":{"eI":["1","2"],"N":["1","2"],"I":["1","2"],"N.K":"1","N.V":"2"},"cS":{"y":["1"],"l":["1"],"l.E":"1"},"eJ":{"V":["1"]},"b9":{"bS":["1"],"ol":["1"],"ca":["1"],"y":["1"],"l":["1"]},"cV":{"V":["1"]},"D":{"z":["1"],"y":["1"],"l":["1"]},"N":{"I":["1","2"]},"eM":{"y":["2"],"l":["2"],"l.E":"2"},"eN":{"V":["2"]},"df":{"I":["1","2"]},"cd":{"dz":["1","2"],"df":["1","2"],"f_":["1","2"],"I":["1","2"]},"bS":{"ca":["1"],"y":["1"],"l":["1"]},"eT":{"bS":["1"],"ca":["1"],"y":["1"],"l":["1"]},"ex":{"bS":["1"],"ie":["1"],"ca":["1"],"y":["1"],"l":["1"]},"i_":{"N":["j","@"],"I":["j","@"],"N.K":"j","N.V":"@"},"i0":{"a6":["j"],"y":["j"],"l":["j"],"a6.E":"j","l.E":"j"},"fl":{"cq":["z<f>","j"]},"fH":{"cq":["j","z<f>"]},"e7":{"T":[]},"h2":{"T":[]},"h1":{"cq":["A?","j"]},"hG":{"cq":["j","z<f>"]},"cr":{"aw":["cr"]},"p":{"at":[],"aw":["at"]},"f":{"at":[],"aw":["at"]},"z":{"y":["1"],"l":["1"]},"at":{"aw":["at"]},"ca":{"y":["1"],"l":["1"]},"j":{"aw":["j"],"op":[]},"hV":{"C":[]},"fi":{"T":[]},"bU":{"T":[]},"bi":{"T":[]},"di":{"T":[]},"fS":{"T":[]},"ey":{"T":[]},"hA":{"T":[]},"dm":{"T":[]},"fx":{"T":[]},"he":{"T":[]},"et":{"T":[]},"ic":{"bC":[]},"as":{"rU":[]},"f1":{"hD":[]},"i9":{"hD":[]},"hU":{"hD":[]},"hZ":{"n8":[]},"ds":{"n8":[]},"ho":{"C":[]},"bm":{"bQ":[]},"cb":{"bQ":[]},"c6":{"bQ":[]},"bJ":{"bQ":[]},"hf":{"bQ":[]},"cy":{"C":[]},"fh":{"C":[]},"bW":{"C":[]},"dT":{"C":[]},"fn":{"C":[]},"fw":{"C":[]},"fE":{"C":[]},"cI":{"C":[]},"db":{"C":[]},"bI":{"C":[]},"hr":{"C":[]},"e_":{"C":[]},"dj":{"C":[]},"hj":{"C":[]},"en":{"rL":[]},"eL":{"aT":[]},"i6":{"rK":[]},"hX":{"ra":[]},"aK":{"aw":["aK"]},"aG":{"aw":["aG"]},"dc":{"C":[]},"fo":{"rJ":[]},"hl":{"kz":[]},"i7":{"c9":[]},"hP":{"kz":[]},"ig":{"c9":[]},"fN":{"C":[]},"dX":{"C":[]},"fO":{"C":[]},"fP":{"C":[]},"cw":{"C":[]},"dY":{"C":[]},"cK":{"C":[]},"dp":{"C":[]},"fs":{"C":[]},"fD":{"qU":[]},"dy":{"C":[]},"ak":{"C":[]},"fm":{"C":[]},"dO":{"C":[]},"fA":{"C":[]},"fC":{"C":[]},"cj":{"jw":[]},"hO":{"rc":[]},"b2":{"C":[]},"cv":{"C":[]},"ct":{"C":[]},"c2":{"C":[]},"c3":{"C":[]},"eo":{"C":[]},"cH":{"C":[]},"aL":{"C":[]},"az":{"C":[]},"fU":{"C":[]},"cQ":{"C":[]},"b7":{"C":[]},"aH":{"C":[]},"aU":{"C":[]},"aV":{"C":[]},"ce":{"C":[]},"bE":{"C":[]},"i5":{"rO":[]},"rh":{"z":["f"],"y":["f"],"l":["f"]},"hz":{"z":["f"],"y":["f"],"l":["f"]},"rY":{"z":["f"],"y":["f"],"l":["f"]},"rf":{"z":["f"],"y":["f"],"l":["f"]},"nb":{"z":["f"],"y":["f"],"l":["f"]},"rg":{"z":["f"],"y":["f"],"l":["f"]},"rX":{"z":["f"],"y":["f"],"l":["f"]},"jg":{"z":["p"],"y":["p"],"l":["p"]},"r9":{"z":["p"],"y":["p"],"l":["p"]}}'))
A.tB(v.typeUniverse,JSON.parse('{"dq":1,"f6":2,"aj":1,"eT":1,"f0":1,"fz":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",g:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ai
return{h:s("bh"),u:s("ao"),f5:s("fk"),dP:s("aG"),kp:s("fp"),bP:s("aw<@>"),gY:s("dQ"),p:s("ap<j,j>"),v:s("ap<j,f>"),lq:s("d7<j>"),ml:s("cr"),lD:s("aH"),gt:s("y<@>"),no:s("b2"),L:s("aR"),Q:s("T"),B:s("jg"),Z:s("cu"),mj:s("b3<X>"),k:s("jw"),bU:s("c3"),lv:s("fR<A>"),i1:s("bJ"),dp:s("l<dQ>"),bq:s("l<j>"),id:s("l<p>"),e7:s("l<@>"),fm:s("l<f>"),od:s("o<bh>"),ag:s("o<fG>"),r:s("o<aR>"),iw:s("o<b3<~>>"),mc:s("o<fL>"),l2:s("o<jw>"),aW:s("o<bk>"),oX:s("o<vK<A>>"),og:s("o<e1>"),jj:s("o<bJ>"),W:s("o<O>"),b1:s("o<h3>"),cs:s("o<aJ>"),ic:s("o<I<j,A>>"),hq:s("o<I<j,j>>"),bV:s("o<I<j,@>>"),kS:s("o<h5>"),mm:s("o<cE>"),dg:s("o<bm>"),hJ:s("o<b6>"),de:s("o<cF>"),bz:s("o<bz>"),dQ:s("o<hi>"),aN:s("o<cG>"),fR:s("o<+(f,j)>"),a3:s("o<+(p,p,p,p)>"),o5:s("o<kz>"),c:s("o<c9>"),oZ:s("o<en>"),U:s("o<bR>"),c8:s("o<bn>"),bH:s("o<aT>"),kl:s("o<ar>"),Y:s("o<bB>"),b2:s("o<dl>"),ao:s("o<ad<aG>>"),mX:s("o<ad<aK>>"),jn:s("o<cL>"),s:s("o<j>"),aA:s("o<hx>"),hL:s("o<F>"),cC:s("o<k>"),cF:s("o<eA>"),bl:s("o<bY>"),ah:s("o<b8>"),cJ:s("o<aA>"),jX:s("o<cg>"),dz:s("o<ch<ea>>"),jk:s("o<ch<eb>>"),fS:s("o<ch<bn>>"),mQ:s("o<ch<tu>>"),df:s("o<r>"),n:s("o<p>"),x:s("o<@>"),t:s("o<f>"),kC:s("o<O?>"),dM:s("o<A?>"),T:s("e4"),m:s("O"),d4:s("O()"),dY:s("bK"),dX:s("aS<@>"),bY:s("z<aR>"),_:s("z<bk>"),l_:s("z<I<j,j>>"),O:s("z<b6>"),b3:s("z<bz>"),jz:s("z<+(f,j)>"),ge:s("z<+(p,p,p,p)>"),io:s("z<bB>"),a:s("z<j>"),iD:s("z<eA>"),ee:s("z<bY>"),eU:s("z<b8>"),cu:s("z<eH>"),j:s("z<@>"),I:s("z<f>"),mK:s("e9"),q:s("E<j,j>"),d7:s("E<@,@>"),iI:s("E<f,@>"),f7:s("I<j,jw>"),iE:s("I<j,b6>"),G:s("I<j,j>"),oP:s("I<j,r>"),b:s("I<j,@>"),f:s("I<@,@>"),d8:s("I<f,cN>"),c_:s("I<f,cO>"),gz:s("I<j,z<+(p,p,p,p)>>"),kz:s("I<aV,z<b8>>"),iu:s("I<f,I<j,j>>"),dD:s("W<j,j?>"),fP:s("c6"),l0:s("bm"),eb:s("dg"),P:s("X"),K:s("A"),nL:s("aK"),A:s("b6"),D:s("bz"),gm:s("cG"),ku:s("ek"),lZ:s("vM"),aK:s("+()"),iL:s("+(j,O)"),cW:s("+(p,p,p,p)"),ks:s("c9"),mn:s("bA<bJ,bn>"),kk:s("bA<c6,ea>"),ll:s("bA<bm,eb>"),ox:s("bA<cb,tu>"),J:s("bR"),p9:s("bn"),os:s("aT"),E:s("ar"),k8:s("bB"),C:s("ca<j>"),nO:s("ca<f>"),m9:s("az"),gC:s("aL"),ad:s("dl"),d:s("ad<aG>"),R:s("ad<aK>"),l:s("bC"),fO:s("cL"),dB:s("ak"),N:s("j"),lu:s("cb"),aJ:s("Q"),do:s("bU"),cx:s("cM"),ph:s("cd<j,j>"),mL:s("hC"),jJ:s("hD"),b9:s("F"),mz:s("k"),g:s("aM"),nq:s("aU"),kM:s("aV"),bR:s("cN"),ey:s("cO"),mv:s("bY"),kX:s("b8"),cq:s("aN"),bn:s("J<aH>"),ns:s("J<b2>"),hr:s("J<az>"),am:s("J<aL>"),nn:s("J<j>"),cB:s("J<aU>"),na:s("J<aV>"),lS:s("bp<j>"),hE:s("aA"),fH:s("eH"),e:s("a4<@>"),mp:s("eK<A?,A?>"),hZ:s("i2"),fg:s("cg"),ln:s("i3"),fw:s("i4"),hX:s("ia"),fJ:s("bF<aT>"),jg:s("f3"),fL:s("f4"),y:s("r"),hg:s("r(aH)"),gl:s("r(b2)"),iW:s("r(A)"),aZ:s("r(az)"),gw:s("r(aL)"),gS:s("r(j)"),bQ:s("r(aU)"),nw:s("r(aV)"),i:s("p"),z:s("@"),mY:s("@()"),mq:s("@(A)"),ng:s("@(A,bC)"),S:s("f"),gK:s("b3<X>?"),mU:s("O?"),lH:s("z<@>?"),X:s("A?"),w:s("j?"),ej:s("j?(j)"),F:s("cR<@,@>?"),V:s("i1?"),fU:s("r?"),hK:s("r(dk)?"),dA:s("p?"),aV:s("f?"),jh:s("at?"),jE:s("~()?"),as:s("~(aL,az)?"),ov:s("~(j)?"),bZ:s("~(f)?"),o:s("at"),H:s("~"),M:s("~()"),lc:s("~(j,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cB=J.fV.prototype
B.a=J.o.prototype
B.c=J.e3.prototype
B.d=J.cz.prototype
B.b=J.cA.prototype
B.cC=J.bK.prototype
B.cD=J.e5.prototype
B.u=A.ec.prototype
B.aO=A.eh.prototype
B.aP=J.hg.prototype
B.a7=J.cM.prototype
B.A=new A.eo(1,"next")
B.be=new A.d3(B.A,!0,!1,null)
B.bf=new A.fm(0,"add")
B.bg=new A.dO(0,"zero")
B.bh=new A.dO(1,"one")
B.bi=new A.fn(0,"alpha")
B.Q=new A.iM()
B.ei=new A.iO()
B.bj=new A.fl()
B.as=new A.fO(1,"linear")
B.at=new A.fP(0,"clampToEdge")
B.bk=new A.jy()
B.ac=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bl=function() {
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
B.bq=function(getTagFallback) {
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
B.bm=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bp=function(hooks) {
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
B.bo=function(hooks) {
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
B.bn=function(hooks) {
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
B.ad=function(hooks) { return hooks; }

B.p=new A.h1()
B.ej=new A.k0()
B.eh=new A.fh(0,"opaque")
B.br=new A.ea()
B.bs=new A.A()
B.bt=new A.he()
B.ek=new A.kp()
B.ae=new A.kq()
B.ep=new A.ho(0,"safe")
B.H={}
B.f=new A.d7(B.H,0,t.lq)
B.el=new A.kw()
B.af=new A.kx()
B.em=new A.fw(1,"srgb")
B.en=new A.fE(1,"errorsOnly")
B.bu=new A.kK()
B.dd=new A.hr(0,"rgba8")
B.D=new A.kS()
B.bv=new A.bB()
B.J=new A.b7(1,"gradeLUT")
B.bw=new A.bB()
B.bx=new A.kV()
B.by=new A.kX()
B.h=new A.l_()
B.w=new A.F(0,0,0)
B.R=new A.lh()
B.ag=new A.hG()
B.dI=new A.bW(0,"position")
B.dO=new A.bX(B.dI,0,3)
B.dJ=new A.bW(1,"normal")
B.dP=new A.bX(B.dJ,3,3)
B.dK=new A.bW(2,"color")
B.dQ=new A.bX(B.dK,6,4)
B.dL=new A.bW(4,"alpha")
B.dR=new A.bX(B.dL,10,1)
B.dM=new A.bW(5,"uv0")
B.dS=new A.bX(B.dM,11,2)
B.dN=new A.bW(6,"legacyMaterialEffect")
B.dT=new A.bX(B.dN,13,1)
B.W=s([B.dO,B.dP,B.dQ,B.dR,B.dS,B.dT],A.ai("o<bX>"))
B.bz=new A.lo()
B.ah=new A.hZ()
B.m=new A.i8()
B.E=new A.ic()
B.bA=new A.fs(1,"colorAndDepth")
B.bB=new A.fA(1,"back")
B.bC=new A.fC(0,"less")
B.F=new A.aH(0,"open")
B.ai=new A.aH(1,"chain")
B.aj=new A.aH(2,"throughDoor")
B.ak=new A.aH(3,"letterbox")
B.y=new A.aH(4,"ignore")
B.bD=new A.dT(0,"opaque")
B.bE=new A.dT(2,"blended")
B.al=new A.b2(0,"compliance")
B.bF=new A.d8(B.al)
B.am=new A.b2(1,"rupture")
B.bG=new A.d8(B.am)
B.an=new A.b2(2,"synchronisation")
B.bH=new A.d8(B.an)
B.i=new A.c2(0,"north")
B.q=new A.c2(1,"east")
B.k=new A.c2(2,"south")
B.z=new A.c2(3,"west")
B.bI=new A.ct(0,"mantle")
B.bJ=new A.ct(1,"portal")
B.bL=new A.ct(3,"none")
B.bM=new A.da(B.bL,null)
B.bK=new A.ct(2,"window")
B.bN=new A.da(B.bK,"the shutter")
B.bO=new A.G("saved mantle history is malformed",null,null)
B.bP=new A.G("rupture elapsed time is malformed",null,null)
B.bQ=new A.G("presentation keys must be strings",null,null)
B.ao=new A.G("saved mantle state is malformed",null,null)
B.bR=new A.G("inactive rupture has elapsed time",null,null)
B.bS=new A.G("saved difficulty state is malformed",null,null)
B.bT=new A.G("saved house drift state is malformed",null,null)
B.bU=new A.G("saved sleep record is malformed",null,null)
B.bV=new A.G("saved day-loop sleepHistory must be a list",null,null)
B.bW=new A.G("event sequence must be non-negative",null,null)
B.bX=new A.G("saved window state is malformed",null,null)
B.bY=new A.G("save run and meta must be objects",null,null)
B.bZ=new A.G("saved house state is malformed",null,null)
B.c_=new A.G("saved sleep record must be an object",null,null)
B.c0=new A.G("saved session run is malformed",null,null)
B.c1=new A.G("save map keys must be strings",null,null)
B.c2=new A.G("saved day-loop state is malformed",null,null)
B.c3=new A.G("rupture extinguished mantle is unknown",null,null)
B.ap=new A.G("saved portal state is malformed",null,null)
B.c4=new A.G("saved house state does not match this house",null,null)
B.c5=new A.G("presentation snapshot contains a non-finite number",null,null)
B.c6=new A.G("save contains a non-finite number",null,null)
B.c7=new A.G("text.json root must be an object",null,null)
B.c8=new A.G("event kind is empty",null,null)
B.c9=new A.G("saved session clock is malformed",null,null)
B.ca=new A.G("rupture mantle IDs are malformed",null,null)
B.cb=new A.G("saved sleep record has an unknown enum",null,null)
B.cc=new A.G("save root must be an object",null,null)
B.cd=new A.G("saved house overrides are malformed",null,null)
B.aA=new A.cC(0,0,0)
B.aB=new A.cC(1,1,1)
B.cP=s([],t.dQ)
B.cU=s([],A.ai("o<vN>"))
B.ce=new A.fK(B.aA,0,1,B.aB,0,null,B.cP)
B.cf=new A.db(0,"idle")
B.S=new A.db(1,"active")
B.cg=new A.db(2,"ended")
B.aq=new A.dc(0,"outside")
B.ch=new A.dc(1,"intersects")
B.ci=new A.dc(2,"inside")
B.cj=new A.cv(0,"timeAdvanced")
B.ck=new A.cv(1,"dayEndReached")
B.cl=new A.cv(4,"slept")
B.cm=new A.cv(5,"complianceFloorTripped")
B.cn=new A.dX(0,"vertex")
B.co=new A.dX(1,"indices")
B.cp=new A.fN(0,"staticDraw")
B.e=new A.dY(0,"ready")
B.t=new A.dY(1,"lost")
B.cq=new A.cw(0,"color")
B.ar=new A.cw(1,"colorAndGlow")
B.cr=new A.cw(2,"colorDepthGlow")
B.T=new A.cw(3,"depthOnly")
B.au=new A.e_(4,"beforeWorld")
B.av=new A.e_(9,"beforePresent")
B.aw=new A.bI(0,"readBeforeWrite")
B.cs=new A.bI(1,"duplicateWriter")
B.ct=new A.bI(5,"unversionedReadWrite")
B.cu=new A.bI(6,"invalidHistoryRead")
B.cv=new A.bI(7,"dependencyCycle")
B.cw=new A.bI(8,"missingCapability")
B.G=new A.c3(0,"player")
B.U=new A.c3(1,"inserted")
B.ax=new A.c3(2,"warden")
B.ay=new A.cy(0,"wrongKind")
B.az=new A.cy(1,"staleGeneration")
B.cx=new A.cy(2,"doubleRelease")
B.V=new A.cy(3,"releasedResource")
B.cA=new A.fU(1,"visitor")
B.cE=new A.jY(null)
B.cF=new A.jZ(null)
B.cG=new A.cC(0.03,0.03,0.04)
B.aC=s([0,2,2,3],t.t)
B.cH=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cI=s(["webgl2-unavailable"],t.s)
B.l=s(["who","verb","object","place","time"],t.s)
B.cJ=s([2,5,9,12,16,19],t.t)
B.cK=s([B.F,B.ai,B.aj,B.ak,B.y],A.ai("o<aH>"))
B.cL=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.C=new A.aV(0,"full")
B.a8=new A.aV(1,"compressed")
B.a9=new A.aV(2,"off")
B.aD=s([B.C,B.a8,B.a9],A.ai("o<aV>"))
B.cM=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.dm=new A.aL(0,"long")
B.b0=new A.aL(1,"short")
B.aE=s([B.dm,B.b0],A.ai("o<aL>"))
B.o=new A.b7(0,"inactive")
B.aV=new A.b7(2,"affineWarp")
B.a1=new A.b7(3,"vertexSnap")
B.aW=new A.b7(4,"tapeGiveup")
B.a2=new A.b7(5,"portalFail")
B.B=new A.b7(6,"lightsOut")
B.aF=s([B.o,B.J,B.aV,B.a1,B.aW,B.a2,B.B],A.ai("o<b7>"))
B.cN=s([B.G,B.U,B.ax],A.ai("o<c3>"))
B.cS=s([],t.cs)
B.cT=s([],t.bz)
B.cV=s([],t.c)
B.aG=s([],t.Y)
B.cO=s([],t.b2)
B.j=s([],t.s)
B.aH=s([],t.cF)
B.aI=s([],t.cJ)
B.cQ=s([],t.t)
B.cR=s([],t.x)
B.cz=new A.e0(15,"kitchen",-0.3,0)
B.cy=new A.e0(19,"spare-room",0,0.3)
B.r=s([B.cz,B.cy],A.ai("o<e0>"))
B.dj=new A.az(0,"bed")
B.dk=new A.az(1,"chair")
B.dl=new A.az(2,"floor")
B.aJ=s([B.dj,B.dk,B.dl],A.ai("o<az>"))
B.cW=s([B.i,B.q,B.k,B.z],A.ai("o<c2>"))
B.a3=new A.ak(0,"depthTest")
B.b1=new A.ak(1,"depthFunc")
B.a4=new A.ak(2,"depthWrite")
B.b4=new A.ak(3,"blendEnable")
B.b5=new A.ak(4,"blendFunc")
B.b6=new A.ak(5,"blendEquation")
B.a5=new A.ak(6,"cullEnable")
B.b7=new A.ak(7,"cullFace")
B.b8=new A.ak(8,"frontFace")
B.dn=new A.ak(9,"stencilEnable")
B.b2=new A.ak(10,"colorMask")
B.b3=new A.ak(11,"scissorEnable")
B.cX=s([B.a3,B.b1,B.a4,B.b4,B.b5,B.b6,B.a5,B.b7,B.b8,B.dn,B.b2,B.b3],A.ai("o<ak>"))
B.cY=s([1.4,2.8,4.2],t.n)
B.cZ=s([B.al,B.am,B.an],A.ai("o<b2>"))
B.d_=s(["webgl2"],t.s)
B.x=new A.aU(0,"waiting")
B.K=new A.aU(1,"atDoor")
B.L=new A.aU(2,"consulting")
B.M=new A.aU(3,"resolved")
B.d0=s([B.x,B.K,B.L,B.M],A.ai("o<aU>"))
B.d6={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.aK=new A.ap(B.d6,[2,3,4,5,6],t.v)
B.d7={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.d1=new A.ap(B.d7,["b201e5b993d49b5f4aaddeafe6f7eaa1708c1ca0","1b82fc18c0b0346e038504d174edd44fe42c2516","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.p)
B.aL=new A.ap(B.H,[],t.p)
B.aM=new A.ap(B.H,[],t.v)
B.d2=new A.ap(B.H,[],A.ai("ap<@,@>"))
B.d8={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.aN=new A.ap(B.d8,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.p)
B.d9={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.d3=new A.ap(B.d9,[0,1,2,3],t.v)
B.da={uTex:0}
B.d4=new A.ap(B.da,[0],t.v)
B.X=new A.dW([B.J,1,B.aV,1.5,B.a1,1.5,B.aW,2,B.a2,2,B.B,4],A.ai("dW<b7,p>"))
B.db=new A.hf(0,1,null)
B.eo=new A.hj(0,"none")
B.I=new A.eo(0,"legacy")
B.aQ=new A.cH(0,"constructed")
B.n=new A.cH(1,"ready")
B.Y=new A.cH(2,"lost")
B.aR=new A.cH(3,"disposed")
B.Z=new A.cI(0,"constructed")
B.dc=new A.cI(1,"initializing")
B.a_=new A.cI(2,"ready")
B.aS=new A.cI(3,"contextLost")
B.a0=new A.dj(0,"read")
B.aT=new A.dj(1,"write")
B.v=new A.dj(2,"historyRead")
B.aU=new A.bR(B.D,B.aT)
B.de=new A.cJ(null,"save storage unavailable")
B.df=new A.cJ(null,"save could not be recovered")
B.dg=new A.cJ(null,null)
B.d5={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.dh=new A.d7(B.d5,9,t.lq)
B.aZ=new A.cK(2,"link")
B.di=new A.es(B.aZ,"gl.createProgram() returned null")
B.aX=new A.cK(0,"vertex")
B.aY=new A.cK(1,"fragment")
B.b_=new A.cK(3,"validation")
B.dp=A.bg("vF")
B.dq=A.bg("vG")
B.dr=A.bg("jg")
B.ds=A.bg("r9")
B.dt=A.bg("rf")
B.du=A.bg("rg")
B.dv=A.bg("rh")
B.dw=A.bg("O")
B.dx=A.bg("A")
B.dy=A.bg("nb")
B.dz=A.bg("rX")
B.dA=A.bg("rY")
B.dB=A.bg("hz")
B.dC=new A.dp(0,"float1")
B.b9=new A.dp(2,"float3")
B.a6=new A.dp(3,"mat4")
B.dD=new A.ln(!1)
B.dE=new A.F(0,0,1)
B.dF=new A.F(0,1,0)
B.dG=new A.F(1/0,1/0,1/0)
B.dH=new A.F(-1/0,-1/0,-1/0)
B.dU=new A.ce(0,"visitorAnswered")
B.ba=new A.ce(1,"visitorIgnored")
B.dV=new A.ce(2,"entryVerified")
B.dW=new A.ce(3,"entryContradicted")
B.dX=new A.ce(4,"exposureAccepted")
B.dZ=new A.bE(1,"malformedDay")
B.e_=new A.bE(2,"malformedTier")
B.bb=new A.bE(3,"missingTierLines")
B.aa=new A.bE(6,"invalidPhase")
B.e5=new A.aW(B.aa,"The active visit cannot be chosen.")
B.e8=new A.aN(B.e5)
B.e2=new A.aW(B.aa,"The active visit has no line to advance.")
B.e9=new A.aN(B.e2)
B.e1=new A.bE(5,"noActiveVisit")
B.e3=new A.aW(B.e1,"There is no active visit.")
B.bc=new A.aN(B.e3)
B.e4=new A.aW(B.aa,"A visit is already active.")
B.ea=new A.aN(B.e4)
B.e0=new A.bE(4,"noArrival")
B.e7=new A.aW(B.e0,"The authored arrival is missing.")
B.eb=new A.aN(B.e7)
B.dY=new A.bE(0,"missingCorpus")
B.e6=new A.aW(B.dY,"The authored visitor corpus is empty.")
B.ec=new A.aN(B.e6)
B.bd=new A.cQ(1,"exact")
B.ab=new A.cQ(2,"partial")
B.N=new A.cQ(3,"contradiction")
B.ed=new A.cQ(0,"skipped")
B.ee=new A.cP(B.ed,B.f)
B.ef=new A.cP(B.ab,B.f)
B.O=new A.dy(0,"empty")
B.eg=new A.dy(1,"cpuReady")
B.P=new A.dy(4,"released")})();(function staticFields(){$.lV=null
$.b0=A.i([],A.ai("o<A>"))
$.oq=null
$.nZ=null
$.nY=null
$.pY=null
$.pS=null
$.q1=null
$.mw=null
$.mD=null
$.nN=null
$.m0=A.i([],A.ai("o<z<A>?>"))
$.dF=null
$.f9=null
$.fa=null
$.ny=!1
$.a2=B.m
$.oE=""
$.oF=null
$.oA=null
$.kk=null
$.aY=A.Y()
$.dD=A.Y()
$.fc=null
$.a3=A.Y()
$.bc=A.Y()
$.aZ=A.Y()
$.ph=A.Y()
$.dG=null
$.a7=A.Y()
$.nt=null
$.cX=A.Y()
$.S=A.Y()
$.no=A.Y()
$.nv=null
$.f8=null
$.np=!1
$.nA=!1
$.px=!1
$.nz=0
$.ma=0
$.pR=!1
$.po="booting"
$.bG=0
$.cY=0
$.aC="hall"
$.f7=A.Y()
$.dB=A.Y()
$.bq=A.Y()
$.aO=null
$.dC=A.Y()
$.ij=A.Y()
$.pi=A.Y()
$.pg=A.Y()
$.al=A.Y()
$.ik=A.Y()
$.ii=A.Y()
$.nn=A.Y()
$.am=A.Y()
$.ih=A.Y()
$.nm=A.Y()
$.ms=A.a0(t.S)
$.cl=A.i([],t.s)
$.nu=null
$.pN=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"vI","qa",()=>A.pX("_$dart_dartClosure"))
s($,"vH","dM",()=>A.pX("_$dart_dartClosure_dartJSInterop"))
s($,"w6","qs",()=>A.i([new J.fX()],A.ai("o<er>")))
s($,"vP","qc",()=>A.bV(A.lj({
toString:function(){return"$receiver$"}})))
s($,"vQ","qd",()=>A.bV(A.lj({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"vR","qe",()=>A.bV(A.lj(null)))
s($,"vS","qf",()=>A.bV(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"vV","qi",()=>A.bV(A.lj(void 0)))
s($,"vW","qj",()=>A.bV(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"vU","qh",()=>A.bV(A.oB(null)))
s($,"vT","qg",()=>A.bV(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"vY","ql",()=>A.bV(A.oB(void 0)))
s($,"vX","qk",()=>A.bV(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"vZ","nR",()=>A.tg())
s($,"w2","qp",()=>A.ru(4096))
s($,"w0","qn",()=>new A.m8().$0())
s($,"w1","qo",()=>new A.m7().$0())
s($,"w_","qm",()=>new Int8Array(A.ck(A.i([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"w4","iu",()=>A.it(B.dx))
s($,"vJ","qb",()=>A.rv(A.ck(A.i([255,255,255,255],t.t))))
s($,"w7","qt",()=>A.hH(0,1,0))
s($,"wa","ix",()=>{var q=$.oA
if(q==null){A.iq()
A.iq()
A.iq()
A.iq()
A.iq()
q=$.oA=new A.lb()}return q})
s($,"w3","qq",()=>new A.iN())
r($,"nG","dN",()=>A.hH(0,0,0))
r($,"nB","qr",()=>A.hH(0,0,0))
r($,"nI","iw",()=>A.hH(0,0,0))
s($,"w5","iv",()=>new A.jh(A.hH(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.c7,ArrayBuffer:A.dg,ArrayBufferView:A.ef,DataView:A.h7,Float32Array:A.ec,Float64Array:A.h8,Int16Array:A.h9,Int32Array:A.ha,Int8Array:A.hb,Uint16Array:A.hc,Uint32Array:A.hd,Uint8ClampedArray:A.eg,CanvasPixelArray:A.eg,Uint8Array:A.eh})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aj.$nativeSuperclassTag="ArrayBufferView"
A.eO.$nativeSuperclassTag="ArrayBufferView"
A.eP.$nativeSuperclassTag="ArrayBufferView"
A.ed.$nativeSuperclassTag="ArrayBufferView"
A.eQ.$nativeSuperclassTag="ArrayBufferView"
A.eR.$nativeSuperclassTag="ArrayBufferView"
A.ee.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
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
var s=A.mE
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()