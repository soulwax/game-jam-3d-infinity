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
if(a[b]!==s){A.yZ(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.qt(b)
return new s(c,this)}:function(){if(s===null)s=A.qt(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.qt(a).prototype
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
qy(a,b,c,d){return{i:a,p:b,e:c,x:d}},
p0(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.qw==null){A.yB()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.rm("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.nZ
if(o==null)o=$.nZ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.yJ(a)
if(p!=null)return p
if(typeof a=="function")return B.e3
s=Object.getPrototypeOf(a)
if(s==null)return B.bz
if(s===Object.prototype)return B.bz
if(typeof q=="function"){o=$.nZ
if(o==null)o=$.nZ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aJ,enumerable:false,writable:true,configurable:true})
return B.aJ}return B.aJ},
qV(a,b){if(a<0||a>4294967295)throw A.c(A.aO(a,0,4294967295,"length",null))
return J.vg(new Array(a),b)},
qW(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("r<0>"))},
i4(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.i("r<0>"))},
vg(a,b){var s=A.f(a,b.i("r<0>"))
s.$flags=1
return s},
vh(a,b){var s=t.bP
return J.qD(s.a(a),s.a(b))},
qZ(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
vi(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.qZ(r))break;++b}return b},
vj(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.qZ(q))break}return b},
dP(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.f2.prototype
return J.i6.prototype}if(typeof a=="string")return J.di.prototype
if(a==null)return J.f3.prototype
if(typeof a=="boolean")return J.i5.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
if(typeof a=="symbol")return J.eb.prototype
if(typeof a=="bigint")return J.ea.prototype
return a}if(a instanceof A.B)return a
return J.p0(a)},
au(a){if(typeof a=="string")return J.di.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
if(typeof a=="symbol")return J.eb.prototype
if(typeof a=="bigint")return J.ea.prototype
return a}if(a instanceof A.B)return a
return J.p0(a)},
bY(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
if(typeof a=="symbol")return J.eb.prototype
if(typeof a=="bigint")return J.ea.prototype
return a}if(a instanceof A.B)return a
return J.p0(a)},
yx(a){if(typeof a=="number")return J.dh.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.dx.prototype
return a},
tF(a){if(typeof a=="number")return J.dh.prototype
if(typeof a=="string")return J.di.prototype
if(a==null)return a
if(!(a instanceof A.B))return J.dx.prototype
return a},
yy(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ck.prototype
if(typeof a=="symbol")return J.eb.prototype
if(typeof a=="bigint")return J.ea.prototype
return a}if(a instanceof A.B)return a
return J.p0(a)},
qC(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tF(a).T(a,b)},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dP(a).U(a,b)},
aS(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.yH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.au(a).h(a,b)},
bO(a,b,c){return J.bY(a).l(a,b,c)},
hg(a,b){return J.bY(a).k(a,b)},
ug(a,b){return J.bY(a).J(a,b)},
uh(a,b){return J.bY(a).O(a,b)},
ui(a,b,c){return J.yy(a).f3(a,b,c)},
uj(a,b){return J.bY(a).c0(a,b)},
qD(a,b){return J.tF(a).F(a,b)},
k3(a,b){return J.bY(a).S(a,b)},
bi(a){return J.dP(a).gG(a)},
qE(a){return J.au(a).gI(a)},
uk(a){return J.au(a).gL(a)},
M(a){return J.bY(a).gu(a)},
aT(a){return J.au(a).gq(a)},
dR(a){return J.dP(a).gN(a)},
dS(a,b,c){return J.bY(a).bD(a,b,c)},
ul(a,b){return J.au(a).sq(a,b)},
um(a,b){return J.bY(a).X(a,b)},
pt(a,b){return J.yx(a).lw(a,b)},
dT(a){return J.dP(a).n(a)},
un(a,b){return J.bY(a).dX(a,b)},
i1:function i1(){},
i5:function i5(){},
f3:function f3(){},
f4:function f4(){},
cH:function cH(){},
iq:function iq(){},
dx:function dx(){},
ck:function ck(){},
ea:function ea(){},
eb:function eb(){},
r:function r(a){this.$ti=a},
i3:function i3(){},
lT:function lT(a){this.$ti=a},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dh:function dh(){},
f2:function f2(){},
i6:function i6(){},
di:function di(){}},A={pw:function pw(){},
jX(){return $},
ux(a,b,c){if(t.gt.b(a))return new A.fG(a,b.i("@<0>").D(c).i("fG<1,2>"))
return new A.d4(a,b.i("@<0>").D(c).i("d4<1,2>"))},
r1(a){return new A.dj("Field '"+a+"' has been assigned during initialization.")},
a_(a){return new A.dj("Field '"+a+"' has not been initialized.")},
vl(a){return new A.dj("Field '"+a+"' has already been initialized.")},
p1(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cq(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ne(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dO(a,b,c){return a},
qx(a){var s,r
for(s=$.by.length,r=0;r<s;++r)if(a===$.by[r])return!0
return!1},
nd(a,b,c,d){A.iy(b,"start")
if(c!=null){A.iy(c,"end")
if(b>c)A.k(A.aO(b,0,c,"start",null))}return new A.ft(a,b,c,d.i("ft<0>"))},
ib(a,b,c,d){if(t.gt.b(a))return new A.d8(a,b,c.i("@<0>").D(d).i("d8<1,2>"))
return new A.cl(a,b,c.i("@<0>").D(d).i("cl<1,2>"))},
i2(){return new A.ek("No element")},
ve(){return new A.ek("Too many elements")},
iG(a,b,c,d,e){if(c-b<=32)A.vO(a,b,c,d,e)
else A.vN(a,b,c,d,e)},
vO(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.au(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
vN(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.K(a4+a5,2),f=g-j,e=g+j,d=J.au(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a8(a6.$2(b,a0),0)
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
A.iG(a3,a4,r-2,a6,a7)
A.iG(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a8(a6.$2(d.h(a3,r),b),0))++r
while(J.a8(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.iG(a3,r,q,a6,a7)}else A.iG(a3,r,q,a6,a7)},
cT:function cT(){},
eO:function eO(a,b){this.a=a
this.$ti=b},
d4:function d4(a,b){this.a=a
this.$ti=b},
fG:function fG(a,b){this.a=a
this.$ti=b},
fE:function fE(){},
nK:function nK(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.$ti=b},
dj:function dj(a){this.a=a},
d5:function d5(a){this.a=a},
n3:function n3(){},
E:function E(){},
a2:function a2(){},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
dl:function dl(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(a,b){this.a=a
this.$ti=b},
fz:function fz(a,b){this.a=a
this.$ti=b},
af:function af(){},
c6:function c6(){},
em:function em(){},
fo:function fo(a,b){this.a=a
this.$ti=b},
h6:function h6(){},
ce(a,b,c){var s,r,q,p,o,n,m,l=A.aw(a.gP(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.p)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aw(a.gal(),!0,c)
m=new A.a4(q,n,b.i("@<0>").D(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.eQ(A.aU(a,b,c),b.i("@<0>").D(c).i("eQ<1,2>"))},
uD(){throw A.c(A.ax("Cannot modify unmodifiable Map"))},
uE(){throw A.c(A.ax("Cannot modify constant Set"))},
tU(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
yH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dT(a)
return s},
fi(a){var s,r=$.r8
if(r==null)r=$.r8=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
my(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
iv(a){var s,r,q,p
if(a instanceof A.B)return A.bx(A.bh(a),null)
s=J.dP(a)
if(s===B.e2||s===B.e4||t.cx.b(a)){r=B.aR(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bx(A.bh(a),null)},
r9(a){var s,r,q
if(a==null||typeof a=="number"||A.bK(a))return J.dT(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cC)return a.n(0)
if(a instanceof A.bE)return a.eX(!0)
s=$.ue()
for(r=0;r<1;++r){q=s[r].lx(a)
if(q!=null)return q}return"Instance of '"+A.iv(a)+"'"},
vv(){return Date.now()},
vE(){var s,r
if($.mz!==0)return
$.mz=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mz=1e6
$.mA=new A.mx(r)},
vu(){if(!!self.location)return self.location.href
return null},
vF(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ah(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cT(s,10)|55296)>>>0,s&1023|56320)}}throw A.c(A.aO(a,0,1114111,null,null))},
ee(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vD(a){var s=A.ee(a).getUTCFullYear()+0
return s},
vB(a){var s=A.ee(a).getUTCMonth()+1
return s},
vx(a){var s=A.ee(a).getUTCDate()+0
return s},
vy(a){var s=A.ee(a).getUTCHours()+0
return s},
vA(a){var s=A.ee(a).getUTCMinutes()+0
return s},
vC(a){var s=A.ee(a).getUTCSeconds()+0
return s},
vz(a){var s=A.ee(a).getUTCMilliseconds()+0
return s},
vw(a){var s=a.$thrownJsError
if(s==null)return null
return A.cc(s)},
ra(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.ao(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
jZ(a){throw A.c(A.qs(a))},
d(a,b){if(a==null)J.aT(a)
throw A.c(A.oY(a,b))},
oY(a,b){var s,r="index"
if(!A.aI(b))return new A.bQ(!0,b,r,null)
s=A.a(J.aT(a))
if(b<0||b>=s)return A.lO(b,s,a,r)
return A.rc(b,r)},
yr(a,b,c){if(a>c)return A.aO(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aO(b,a,c,"end",null)
return new A.bQ(!0,b,"end",null)},
qs(a){return new A.bQ(!0,a,null,null)},
c(a){return A.ao(a,new Error())},
ao(a,b){var s
if(a==null)a=new A.cr()
b.dartException=a
s=A.z0
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
z0(){return J.dT(this.dartException)},
k(a,b){throw A.ao(a,b==null?new Error():b)},
b3(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.x8(a,b,c),s)},
x8(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fw("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.c(A.ap(a))},
cs(a){var s,r,q,p,o,n
a=A.tN(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.nl(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
nm(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
rl(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
px(a,b){var s=b==null,r=s?null:b.method
return new A.i7(a,r,s?null:b.receiver)},
ab(a){var s
if(a==null)return new A.ml(a)
if(a instanceof A.eV){s=a.a
return A.d1(a,s==null?A.ez(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.d1(a,a.dartException)
return A.y1(a)},
d1(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
y1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cT(r,16)&8191)===10)switch(q){case 438:return A.d1(a,A.px(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.d1(a,new A.fe())}}if(a instanceof TypeError){p=$.tX()
o=$.tY()
n=$.tZ()
m=$.u_()
l=$.u2()
k=$.u3()
j=$.u1()
$.u0()
i=$.u5()
h=$.u4()
g=p.av(s)
if(g!=null)return A.d1(a,A.px(A.G(s),g))
else{g=o.av(s)
if(g!=null){g.method="call"
return A.d1(a,A.px(A.G(s),g))}else if(n.av(s)!=null||m.av(s)!=null||l.av(s)!=null||k.av(s)!=null||j.av(s)!=null||m.av(s)!=null||i.av(s)!=null||h.av(s)!=null){A.G(s)
return A.d1(a,new A.fe())}}return A.d1(a,new A.iQ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fr()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.d1(a,new A.bQ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fr()
return a},
cc(a){var s
if(a instanceof A.eV)return a.b
if(a==null)return new A.fU(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fU(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
k_(a){if(a==null)return J.bi(a)
if(typeof a=="object")return A.fi(a)
return J.bi(a)},
yl(a){if(typeof a=="number")return B.d.gG(a)
if(a instanceof A.jF)return A.fi(a)
if(a instanceof A.bE)return a.gG(a)
return A.k_(a)},
tE(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
yw(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
xt(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.e4("Unsupported number of arguments for wrapped closure"))},
eI(a,b){var s=a.$identity
if(!!s)return s
s=A.ym(a,b)
a.$identity=s
return s},
ym(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.xt)},
uC(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iJ().constructor.prototype):Object.create(new A.dZ(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.qK(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.uy(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.qK(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
uy(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.uv)}throw A.c("Error in functionType of tearoff")},
uz(a,b,c,d){var s=A.qJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
qK(a,b,c,d){if(c)return A.uB(a,b,d)
return A.uz(b.length,d,a,b)},
uA(a,b,c,d){var s=A.qJ,r=A.uw
switch(b?-1:a){case 0:throw A.c(new A.iC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
uB(a,b,c){var s,r
if($.qH==null)$.qH=A.qG("interceptor")
if($.qI==null)$.qI=A.qG("receiver")
s=b.length
r=A.uA(s,c,a,b)
return r},
qt(a){return A.uC(a)},
uv(a,b){return A.fZ(v.typeUniverse,A.bh(a.a),b)},
qJ(a){return a.a},
uw(a){return a.b},
qG(a){var s,r,q,p=new A.dZ("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.w("Field name "+a+" not found.",null))},
tG(a){return v.getIsolateTag(a)},
tQ(){return v.G},
zy(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
yJ(a){var s,r,q,p,o,n=A.G($.tH.$1(a)),m=$.oZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.p5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bJ($.tB.$2(a,n))
if(q!=null){m=$.oZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.p5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.pk(s)
$.oZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.p5[n]=s
return s}if(p==="-"){o=A.pk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.tL(a,s)
if(p==="*")throw A.c(A.rm(n))
if(v.leafTags[n]===true){o=A.pk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.tL(a,s)},
tL(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.qy(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
pk(a){return J.qy(a,!1,null,!!a.$ibm)},
yN(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.pk(s)
else return J.qy(s,c,null,null)},
yB(){if(!0===$.qw)return
$.qw=!0
A.yC()},
yC(){var s,r,q,p,o,n,m,l
$.oZ=Object.create(null)
$.p5=Object.create(null)
A.yA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.tM.$1(o)
if(n!=null){m=A.yN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
yA(){var s,r,q,p,o,n,m=B.ct()
m=A.eH(B.cu,A.eH(B.cv,A.eH(B.aS,A.eH(B.aS,A.eH(B.cw,A.eH(B.cx,A.eH(B.cy(B.aR),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.tH=new A.p2(p)
$.tB=new A.p3(o)
$.tM=new A.p4(n)},
eH(a,b){return a(b)||b},
wm(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.a8(r,b[s]))return!1}return!0},
yo(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
yW(a,b,c){var s=a.indexOf(b,c)
return s>=0},
yu(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
tN(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
yX(a,b,c){var s=A.yY(a,b,c)
return s},
yY(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.tN(b),"g"),A.yu(c))},
bF:function bF(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a){this.a=a},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
e1:function e1(){},
kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
dH:function dH(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eX:function eX(a,b){this.a=a
this.$ti=b},
eR:function eR(){},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
mx:function mx(a){this.a=a},
fp:function fp(){},
nl:function nl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fe:function fe(){},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
ml:function ml(a){this.a=a},
eV:function eV(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a
this.b=null},
cC:function cC(){},
hv:function hv(){},
hw:function hw(){},
iM:function iM(){},
iJ:function iJ(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
iC:function iC(a){this.a=a},
bA:function bA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
m1:function m1(a){this.a=a},
m9:function m9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ag:function ag(a,b){this.a=a
this.$ti=b},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aB:function aB(a,b){this.a=a
this.$ti=b},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
V:function V(a,b){this.a=a
this.$ti=b},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f5:function f5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
p2:function p2(a){this.a=a},
p3:function p3(a){this.a=a},
p4:function p4(a){this.a=a},
bE:function bE(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
yZ(a){throw A.ao(A.r1(a),new Error())},
j(){throw A.ao(A.a_(""),new Error())},
y(){throw A.ao(A.vl(""),new Error())},
tT(){throw A.ao(A.r1(""),new Error())},
ae(){var s=new A.nL()
return s.b=s},
nL:function nL(){this.b=null},
a3(a){return a},
vp(a,b,c){return new Float32Array(a,b,c)},
vq(a){return new Uint8Array(a)},
vr(a){return new Uint8Array(A.a3(a))},
cz(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.oY(b,a))},
x1(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.yr(a,b,c))
return b},
cK:function cK(){},
ed:function ed(){},
fc:function fc(){},
ob:function ob(a){this.a=a},
ig:function ig(){},
aC:function aC(){},
fa:function fa(){},
fb:function fb(){},
f9:function f9(){},
ih:function ih(){},
ii:function ii(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
dn:function dn(){},
fd:function fd(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
pI(a,b){var s=b.c
return s==null?b.c=A.fX(a,"bk",[b.x]):s},
rd(a){var s=a.w
if(s===6||s===7)return A.rd(a.x)
return s===11||s===12},
vL(a){return a.as},
yO(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
at(a){return A.oa(v.typeUniverse,a,!1)},
dN(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dN(a1,s,a3,a4)
if(r===s)return a2
return A.rK(a1,r,!0)
case 7:s=a2.x
r=A.dN(a1,s,a3,a4)
if(r===s)return a2
return A.rJ(a1,r,!0)
case 8:q=a2.y
p=A.eG(a1,q,a3,a4)
if(p===q)return a2
return A.fX(a1,a2.x,p)
case 9:o=a2.x
n=A.dN(a1,o,a3,a4)
m=a2.y
l=A.eG(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.pV(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eG(a1,j,a3,a4)
if(i===j)return a2
return A.rL(a1,k,i)
case 11:h=a2.x
g=A.dN(a1,h,a3,a4)
f=a2.y
e=A.xY(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.rI(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eG(a1,d,a3,a4)
o=a2.x
n=A.dN(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.pW(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.hl("Attempted to substitute unexpected RTI kind "+a0))}},
eG(a,b,c,d){var s,r,q,p,o=b.length,n=A.of(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dN(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
xZ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.of(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dN(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
xY(a,b,c,d){var s,r=b.a,q=A.eG(a,r,c,d),p=b.b,o=A.eG(a,p,c,d),n=b.c,m=A.xZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jh()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
qu(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.yz(s)
return a.$S()}return null},
yD(a,b){var s
if(A.rd(b))if(a instanceof A.cC){s=A.qu(a)
if(s!=null)return s}return A.bh(a)},
bh(a){if(a instanceof A.B)return A.o(a)
if(Array.isArray(a))return A.L(a)
return A.qb(J.dP(a))},
L(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.qb(a)},
qb(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.xq(a,s)},
xq(a,b){var s=a instanceof A.cC?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.wv(v.typeUniverse,s.name)
b.$ccache=r
return r},
yz(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.oa(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jY(a){return A.cb(A.o(a))},
qq(a){var s
if(a instanceof A.bE)return a.es()
s=a instanceof A.cC?A.qu(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dR(a).a
if(Array.isArray(a))return A.L(a)
return A.bh(a)},
cb(a){var s=a.r
return s==null?a.r=new A.jF(a):s},
yv(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.d(q,0)
s=A.fZ(v.typeUniverse,A.qq(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.rM(v.typeUniverse,s,A.qq(q[r]))}return A.fZ(v.typeUniverse,s,a)},
bN(a){return A.cb(A.oa(v.typeUniverse,a,!1))},
xp(a){var s=this
s.b=A.xU(s)
return s.b(a)},
xU(a){var s,r,q,p,o
if(a===t.K)return A.xz
if(A.dQ(a))return A.xD
s=a.w
if(s===6)return A.xl
if(s===1)return A.th
if(s===7)return A.xu
r=A.xT(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dQ)){a.f="$i"+q
if(q==="C")return A.xx
if(a===t.m)return A.xw
return A.xC}}else if(s===10){p=A.yo(a.x,a.y)
o=p==null?A.th:p
return o==null?A.ez(o):o}return A.xj},
xT(a){if(a.w===8){if(a===t.S)return A.aI
if(a===t.i||a===t.o)return A.xy
if(a===t.N)return A.xB
if(a===t.y)return A.bK}return null},
xo(a){var s=this,r=A.xi
if(A.dQ(s))r=A.wY
else if(s===t.K)r=A.ez
else if(A.eJ(s)){r=A.xk
if(s===t.aV)r=A.t0
else if(s===t.w)r=A.bJ
else if(s===t.fU)r=A.wX
else if(s===t.jh)r=A.t1
else if(s===t.dC)r=A.t_
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.G
else if(s===t.y)r=A.aY
else if(s===t.o)r=A.bI
else if(s===t.i)r=A.cZ
else if(s===t.m)r=A.e
s.a=r
return s.a(a)},
xj(a){var s=this
if(a==null)return A.eJ(s)
return A.yI(v.typeUniverse,A.yD(a,s),s)},
xl(a){if(a==null)return!0
return this.x.b(a)},
xC(a){var s,r=this
if(a==null)return A.eJ(r)
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dP(a)[s]},
xx(a){var s,r=this
if(a==null)return A.eJ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.B)return!!a[s]
return!!J.dP(a)[s]},
xw(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.B)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
tg(a){if(typeof a=="object"){if(a instanceof A.B)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
xi(a){var s=this
if(a==null){if(A.eJ(s))return a}else if(s.b(a))return a
throw A.ao(A.t7(a,s),new Error())},
xk(a){var s=this
if(a==null||s.b(a))return a
throw A.ao(A.t7(a,s),new Error())},
t7(a,b){return new A.fV("TypeError: "+A.rA(a,A.bx(b,null)))},
rA(a,b){return A.hL(a)+": type '"+A.bx(A.qq(a),null)+"' is not a subtype of type '"+b+"'"},
bG(a,b){return new A.fV("TypeError: "+A.rA(a,b))},
xu(a){var s=this
return s.x.b(a)||A.pI(v.typeUniverse,s).b(a)},
xz(a){return a!=null},
ez(a){if(a!=null)return a
throw A.ao(A.bG(a,"Object"),new Error())},
xD(a){return!0},
wY(a){return a},
th(a){return!1},
bK(a){return!0===a||!1===a},
aY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.ao(A.bG(a,"bool"),new Error())},
wX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.ao(A.bG(a,"bool?"),new Error())},
cZ(a){if(typeof a=="number")return a
throw A.ao(A.bG(a,"double"),new Error())},
t_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ao(A.bG(a,"double?"),new Error())},
aI(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.ao(A.bG(a,"int"),new Error())},
t0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.ao(A.bG(a,"int?"),new Error())},
xy(a){return typeof a=="number"},
bI(a){if(typeof a=="number")return a
throw A.ao(A.bG(a,"num"),new Error())},
t1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.ao(A.bG(a,"num?"),new Error())},
xB(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.ao(A.bG(a,"String"),new Error())},
bJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.ao(A.bG(a,"String?"),new Error())},
e(a){if(A.tg(a))return a
throw A.ao(A.bG(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.tg(a))return a
throw A.ao(A.bG(a,"JSObject?"),new Error())},
tu(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bx(a[q],b)
return s},
xK(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.tu(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bx(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ta(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.f([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bx(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bx(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bx(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bx(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bx(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bx(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bx(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bx(a.x,b)+">"
if(l===8){p=A.y0(a.x)
o=a.y
return o.length>0?p+("<"+A.tu(o,b)+">"):p}if(l===10)return A.xK(a,b)
if(l===11)return A.ta(a,b,null)
if(l===12)return A.ta(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
y0(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ww(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
wv(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.oa(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fY(a,5,"#")
q=A.of(s)
for(p=0;p<s;++p)q[p]=r
o=A.fX(a,b,q)
n[b]=o
return o}else return m},
wu(a,b){return A.rU(a.tR,b)},
wt(a,b){return A.rU(a.eT,b)},
oa(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.rF(A.rD(a,null,b,!1))
r.set(b,s)
return s},
fZ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.rF(A.rD(a,b,c,!0))
q.set(c,r)
return r},
rM(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.pV(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cX(a,b){b.a=A.xo
b.b=A.xp
return b},
fY(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bU(null,null)
s.w=b
s.as=c
r=A.cX(a,s)
a.eC.set(c,r)
return r},
rK(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.wr(a,b,r,c)
a.eC.set(r,s)
return s},
wr(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dQ(b))if(!(b===t.c||b===t.T))if(s!==6)r=s===7&&A.eJ(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.bU(null,null)
q.w=6
q.x=b
q.as=c
return A.cX(a,q)},
rJ(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.wp(a,b,r,c)
a.eC.set(r,s)
return s},
wp(a,b,c,d){var s,r
if(d){s=b.w
if(A.dQ(b)||b===t.K)return b
else if(s===1)return A.fX(a,"bk",[b])
else if(b===t.c||b===t.T)return t.gK}r=new A.bU(null,null)
r.w=7
r.x=b
r.as=c
return A.cX(a,r)},
ws(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bU(null,null)
s.w=13
s.x=b
s.as=q
r=A.cX(a,s)
a.eC.set(q,r)
return r},
fW(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
wo(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fX(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bU(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cX(a,r)
a.eC.set(p,q)
return q},
pV(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bU(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cX(a,o)
a.eC.set(q,n)
return n},
rL(a,b,c){var s,r,q="+"+(b+"("+A.fW(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bU(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cX(a,s)
a.eC.set(q,r)
return r},
rI(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fW(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fW(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.wo(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bU(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cX(a,p)
a.eC.set(r,o)
return o},
pW(a,b,c,d){var s,r=b.as+("<"+A.fW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.wq(a,b,c,r,d)
a.eC.set(r,s)
return s},
wq(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.of(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dN(a,b,r,0)
m=A.eG(a,c,r,0)
return A.pW(a,n,m,c!==m)}}l=new A.bU(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cX(a,l)},
rD(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
rF(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.wh(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.rE(a,r,l,k,!1)
else if(q===46)r=A.rE(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dK(a.u,a.e,k.pop()))
break
case 94:k.push(A.ws(a.u,k.pop()))
break
case 35:k.push(A.fY(a.u,5,"#"))
break
case 64:k.push(A.fY(a.u,2,"@"))
break
case 126:k.push(A.fY(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.wj(a,k)
break
case 38:A.wi(a,k)
break
case 63:p=a.u
k.push(A.rK(p,A.dK(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.rJ(p,A.dK(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.wg(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.rG(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.wl(a.u,a.e,o)
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
return A.dK(a.u,a.e,m)},
wh(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
rE(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.ww(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.vL(o)+'"')
d.push(A.fZ(s,o,n))}else d.push(p)
return m},
wj(a,b){var s,r=a.u,q=A.rC(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fX(r,p,q))
else{s=A.dK(r,a.e,p)
switch(s.w){case 11:b.push(A.pW(r,s,q,a.n))
break
default:b.push(A.pV(r,s,q))
break}}},
wg(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.rC(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dK(p,a.e,o)
q=new A.jh()
q.a=s
q.b=n
q.c=m
b.push(A.rI(p,r,q))
return
case-4:b.push(A.rL(p,b.pop(),s))
return
default:throw A.c(A.hl("Unexpected state under `()`: "+A.q(o)))}},
wi(a,b){var s=b.pop()
if(0===s){b.push(A.fY(a.u,1,"0&"))
return}if(1===s){b.push(A.fY(a.u,4,"1&"))
return}throw A.c(A.hl("Unexpected extended operation "+A.q(s)))},
rC(a,b){var s=b.splice(a.p)
A.rG(a.u,a.e,s)
a.p=b.pop()
return s},
dK(a,b,c){if(typeof c=="string")return A.fX(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.wk(a,b,c)}else return c},
rG(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dK(a,b,c[s])},
wl(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dK(a,b,c[s])},
wk(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.hl("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.hl("Bad index "+c+" for "+b.n(0)))},
yI(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.as(a,b,null,c,null)
r.set(c,s)}return s},
as(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dQ(d))return!0
s=b.w
if(s===4)return!0
if(A.dQ(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.as(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.T){if(q===7)return A.as(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.as(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.as(a,b.x,c,d,e))return!1
return A.as(a,A.pI(a,b),c,d,e)}if(s===6)return A.as(a,p,c,d,e)&&A.as(a,b.x,c,d,e)
if(q===7){if(A.as(a,b,c,d.x,e))return!0
return A.as(a,b,c,A.pI(a,d),e)}if(q===6)return A.as(a,b,c,p,e)||A.as(a,b,c,d.x,e)
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
if(!A.as(a,j,c,i,e)||!A.as(a,i,e,j,c))return!1}return A.tf(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.tf(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.xv(a,b,c,d,e)}if(o&&q===10)return A.xA(a,b,c,d,e)
return!1},
tf(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.as(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.as(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.as(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.as(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.as(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
xv(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fZ(a,b,r[o])
return A.rY(a,p,null,c,d.y,e)}return A.rY(a,b.y,null,c,d.y,e)},
rY(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.as(a,b[s],d,e[s],f))return!1
return!0},
xA(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.as(a,r[s],c,q[s],e))return!1
return!0},
eJ(a){var s=a.w,r=!0
if(!(a===t.c||a===t.T))if(!A.dQ(a))if(s!==6)r=s===7&&A.eJ(a.x)
return r},
dQ(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
rU(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
of(a){return a>0?new Array(a):v.typeUniverse.sEA},
bU:function bU(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jh:function jh(){this.c=this.b=this.a=null},
jF:function jF(a){this.a=a},
jf:function jf(){},
fV:function fV(a){this.a=a},
wa(){var s,r,q
if(self.scheduleImmediate!=null)return A.ye()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eI(new A.nH(s),1)).observe(r,{childList:true})
return new A.nG(s,r,q)}else if(self.setImmediate!=null)return A.yf()
return A.yg()},
wb(a){self.scheduleImmediate(A.eI(new A.nI(t.M.a(a)),0))},
wc(a){self.setImmediate(A.eI(new A.nJ(t.M.a(a)),0))},
wd(a){A.pK(B.cK,t.M.a(a))},
pK(a,b){return A.wn(a.a/1000|0,b)},
wn(a,b){var s=new A.o8()
s.iC(a,b)
return s},
b1(a){return new A.j5(new A.ai($.aa,a.i("ai<0>")),a.i("j5<0>"))},
b0(a,b){a.$2(0,null)
b.b=!0
return b.a},
a7(a,b){A.x_(a,b)},
b_(a,b){b.cW(a)},
aZ(a,b){b.cX(A.ab(a),A.cc(a))},
x_(a,b){var s,r,q=new A.ok(b),p=new A.ol(b)
if(a instanceof A.ai)a.eW(q,p,t.z)
else{s=t.z
if(a instanceof A.ai)a.dR(q,p,s)
else{r=new A.ai($.aa,t.e)
r.a=8
r.c=a
r.eW(q,p,s)}}},
b2(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.aa.hH(new A.oU(s),t.H,t.S,t.z)},
rH(a,b,c){return 0},
kf(a){var s
if(t.V.b(a)){s=a.gbh()
if(s!=null)return s}return B.U},
pu(a){var s
a.a(null)
s=new A.ai($.aa,a.i("ai<0>"))
s.cC(null)
return s},
v3(a,b,c){var s=new A.ai($.aa,c.i("ai<0>"))
A.vT(a,new A.le(b,s,c))
return s},
lf(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ai($.aa,b.i("ai<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.lh(i,h,g,f)
try{for(n=J.M(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.dR(new A.lg(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bN(A.f([],b.i("r<0>")))
return n}i.a=A.c0(n,null,!1,b.i("0?"))}catch(l){p=A.ab(l)
o=A.cc(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.qc(m,k)
m=new A.az(m,k==null?A.kf(m):k)
n.bJ(m)
return n}else{i.d=p
i.c=o}}return f},
qc(a,b){if($.aa===B.r)return null
return null},
xr(a,b){if($.aa!==B.r)A.qc(a,b)
if(b==null)if(t.V.b(a)){b=a.gbh()
if(b==null){A.ra(a,B.U)
b=B.U}}else b=B.U
else if(t.V.b(a))A.ra(a,b)
return new A.az(a,b)},
nQ(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.e;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.vP()
b.bJ(new A.az(new A.bQ(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.eC(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bl()
b.bM(o.a)
A.dE(b,p)
return}b.a^=2
A.jU(null,null,b.b,t.M.a(new A.nR(o,b)))},
dE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.qk(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dE(d.a,c)
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
A.qk(j.a,j.b)
return}g=$.aa
if(g!==h)$.aa=h
else g=null
c=c.c
if((c&15)===8)new A.nV(q,d,n).$0()
else if(o){if((c&1)!==0)new A.nU(q,j).$0()}else if((c&2)!==0)new A.nT(d,q).$0()
if(g!=null)$.aa=g
c=q.c
if(c instanceof A.ai){p=q.a.$ti
p=p.i("bk<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bT(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.nQ(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bT(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
xL(a,b){var s
if(t.ng.b(a))return b.hH(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.c(A.av(a,"onError",u.c))},
xG(){var s,r
for(s=$.eD;s!=null;s=$.eD){$.hb=null
r=s.b
$.eD=r
if(r==null)$.ha=null
s.a.$0()}},
xW(){$.qd=!0
try{A.xG()}finally{$.hb=null
$.qd=!1
if($.eD!=null)$.qB().$1(A.tC())}},
ty(a){var s=new A.j6(a),r=$.ha
if(r==null){$.eD=$.ha=s
if(!$.qd)$.qB().$1(A.tC())}else $.ha=r.b=s},
xR(a){var s,r,q,p=$.eD
if(p==null){A.ty(a)
$.hb=$.ha
return}s=new A.j6(a)
r=$.hb
if(r==null){s.b=p
$.eD=$.hb=s}else{q=r.b
s.b=q
$.hb=r.b=s
if(q==null)$.ha=s}},
zb(a,b){A.dO(a,"stream",t.K)
return new A.jD(b.i("jD<0>"))},
vT(a,b){var s=$.aa
if(s===B.r)return A.pK(a,t.M.a(b))
return A.pK(a,t.M.a(s.f5(b)))},
qk(a,b){A.xR(new A.oN(a,b))},
tt(a,b,c,d,e){var s,r=$.aa
if(r===c)return d.$0()
$.aa=c
s=r
try{r=d.$0()
return r}finally{$.aa=s}},
xP(a,b,c,d,e,f,g){var s,r=$.aa
if(r===c)return d.$1(e)
$.aa=c
s=r
try{r=d.$1(e)
return r}finally{$.aa=s}},
xO(a,b,c,d,e,f,g,h,i){var s,r=$.aa
if(r===c)return d.$2(e,f)
$.aa=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aa=s}},
jU(a,b,c,d){t.M.a(d)
if(B.r!==c){d=c.f5(d)
d=d}A.ty(d)},
nH:function nH(a){this.a=a},
nG:function nG(a,b,c){this.a=a
this.b=b
this.c=c},
nI:function nI(a){this.a=a},
nJ:function nJ(a){this.a=a},
o8:function o8(){},
o9:function o9(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=!1
this.$ti=b},
ok:function ok(a){this.a=a},
ol:function ol(a){this.a=a},
oU:function oU(a){this.a=a},
bv:function bv(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
c9:function c9(a,b){this.a=a
this.$ti=b},
az:function az(a,b){this.a=a
this.b=b},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lg:function lg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j9:function j9(){},
fB:function fB(a,b){this.a=a
this.$ti=b},
dD:function dD(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ai:function ai(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
nN:function nN(a,b){this.a=a
this.b=b},
nS:function nS(a,b){this.a=a
this.b=b},
nR:function nR(a,b){this.a=a
this.b=b},
nP:function nP(a,b){this.a=a
this.b=b},
nO:function nO(a,b){this.a=a
this.b=b},
nV:function nV(a,b,c){this.a=a
this.b=b
this.c=c},
nW:function nW(a,b){this.a=a
this.b=b},
nX:function nX(a){this.a=a},
nU:function nU(a,b){this.a=a
this.b=b},
nT:function nT(a,b){this.a=a
this.b=b},
j6:function j6(a){this.a=a
this.b=null},
jD:function jD(a){this.$ti=a},
h5:function h5(){},
jv:function jv(){},
o6:function o6(a,b){this.a=a
this.b=b},
oN:function oN(a,b){this.a=a
this.b=b},
rB(a,b){var s=a[b]
return s===a?null:s},
pT(a,b,c){if(c==null)a[b]=a
else a[b]=c},
pS(){var s=Object.create(null)
A.pT(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
r3(a,b){return new A.bA(a.i("@<0>").D(b).i("bA<1,2>"))},
T(a,b,c){return b.i("@<0>").D(c).i("py<1,2>").a(A.tE(a,new A.bA(b.i("@<0>").D(c).i("bA<1,2>"))))},
x(a,b){return new A.bA(a.i("@<0>").D(b).i("bA<1,2>"))},
pz(a){return new A.bD(a.i("bD<0>"))},
a5(a){return new A.bD(a.i("bD<0>"))},
aq(a,b){return b.i("r4<0>").a(A.yw(a,new A.bD(b.i("bD<0>"))))},
pU(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jn(a,b,c){var s=new A.dJ(a,b,c.i("dJ<0>"))
s.c=a.e
return s},
e9(a,b){var s=J.M(a.a)
if(new A.N(s,a.b,a.$ti.i("N<1>")).m())return s.gp()
return null},
aU(a,b,c){var s=A.r3(b,c)
a.ad(0,new A.ma(s,b,c))
return s},
mb(a,b){var s,r,q=A.pz(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.k(0,b.a(a[r]))
return q},
pA(a,b){var s=A.pz(b)
s.J(0,a)
return s},
vm(a,b){var s=t.bP
return J.qD(s.a(a),s.a(b))},
pB(a){var s,r
if(A.qx(a))return"{...}"
s=new A.aQ("")
try{r={}
B.a.k($.by,a)
s.a+="{"
r.a=!0
a.ad(0,new A.md(r,s))
s.a+="}"}finally{if(0>=$.by.length)return A.d($.by,-1)
$.by.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
wx(){throw A.c(A.ax("Cannot change an unmodifiable set"))},
fI:function fI(){},
nY:function nY(a){this.a=a},
fK:function fK(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dF:function dF(a,b){this.a=a
this.$ti=b},
fJ:function fJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bD:function bD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jm:function jm(a){this.a=a
this.c=this.b=null},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
J:function J(){},
W:function W(){},
mc:function mc(a){this.a=a},
md:function md(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.a=a
this.$ti=b},
fM:function fM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
h_:function h_(){},
ec:function ec(){},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
cp:function cp(){},
fT:function fT(){},
jG:function jG(){},
fv:function fv(a,b){this.a=a
this.$ti=b},
ev:function ev(){},
h0:function h0(){},
xI(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ab(r)
q=A.ac(String(s),null,null)
throw A.c(q)}q=A.om(p)
return q},
om(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jk(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.om(a[s])
return a},
wO(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.u9()
else s=new Uint8Array(o)
for(r=J.au(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
wN(a,b,c,d){var s=a?$.u8():$.u7()
if(s==null)return null
if(0===c&&d===b.length)return A.rT(s,b)
return A.rT(s,b.subarray(c,d))},
rT(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
qF(a,b,c,d,e,f){if(B.c.V(f,4)!==0)throw A.c(A.ac("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.c(A.ac("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.c(A.ac("Invalid base64 padding, more than two '=' characters",a,b))},
r0(a,b,c){return new A.f6(a,b)},
x7(a){return a.C()},
we(a,b){return new A.o0(a,[],A.yn())},
wf(a,b,c){var s,r=new A.aQ(""),q=A.we(r,b)
q.cp(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
wP(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jk:function jk(a,b){this.a=a
this.b=b
this.c=null},
o_:function o_(a){this.a=a},
jl:function jl(a){this.a=a},
oe:function oe(){},
od:function od(){},
ho:function ho(){},
kD:function kD(){},
d6:function d6(){},
hA:function hA(){},
hK:function hK(){},
f6:function f6(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
i8:function i8(){},
m3:function m3(a){this.b=a},
m2:function m2(a){this.a=a},
o1:function o1(){},
o2:function o2(a,b){this.a=a
this.b=b},
o0:function o0(a,b,c){this.c=a
this.a=b
this.b=c},
iU:function iU(){},
nr:function nr(a){this.a=a},
oc:function oc(a){this.a=a
this.b=16
this.c=0},
yE(a){var s=A.my(a,null)
if(s!=null)return s
throw A.c(A.ac(a,null,null))},
uZ(a,b){a=A.ao(a,new Error())
if(a==null)a=A.ez(a)
a.stack=b.n(0)
throw a},
c0(a,b,c,d){var s,r=c?J.qW(a,d):J.qV(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aw(a,b,c){var s,r=A.f([],c.i("r<0>"))
for(s=J.M(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.f(a.slice(0),b.i("r<0>"))
s=A.f([],b.i("r<0>"))
for(r=J.M(a);r.m();)B.a.k(s,r.gp())
return s},
an(a,b){var s=A.aw(a,!1,b)
s.$flags=3
return s},
rj(a,b,c){var s,r
A.iy(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.c(A.aO(c,b,null,"end",null))
if(s===0)return""}r=A.vR(a,b,c)
return r},
vR(a,b,c){var s=a.length
if(b>=s)return""
return A.vF(a,b,c==null||c>s?s:c)},
ri(a,b,c){var s=J.M(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
no(){var s,r,q=A.vu()
if(q==null)throw A.c(A.ax("'Uri.base' is not supported"))
s=$.rp
if(s!=null&&q===$.ro)return s
r=A.vZ(q)
$.rp=r
$.ro=q
return r},
vP(){return A.cc(new Error())},
uF(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qL(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hC(a){if(a>=10)return""+a
return"0"+a},
uY(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.c(A.av(b,"name","No enum value with that name"))},
hL(a){if(typeof a=="number"||A.bK(a)||a==null)return J.dT(a)
if(typeof a=="string")return JSON.stringify(a)
return A.r9(a)},
v_(a,b){A.dO(a,"error",t.K)
A.dO(b,"stackTrace",t.l)
A.uZ(a,b)},
hl(a){return new A.hk(a)},
w(a,b){return new A.bQ(!1,null,b,a)},
av(a,b,c){return new A.bQ(!0,a,b,c)},
rb(a){var s=null
return new A.ef(s,s,!1,s,s,a)},
rc(a,b){return new A.ef(null,null,!0,a,b,"Value not in range")},
aO(a,b,c,d,e){return new A.ef(b,c,!0,a,d,"Invalid value")},
fj(a,b,c){if(0>a||a>c)throw A.c(A.aO(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aO(b,a,c,"end",null))
return b}return c},
iy(a,b){if(a<0)throw A.c(A.aO(a,0,null,b,null))
return a},
lO(a,b,c,d){return new A.hZ(b,!0,a,d,"Index out of range")},
ax(a){return new A.fw(a)},
rm(a){return new A.iP(a)},
l(a){return new A.ek(a)},
ap(a){return new A.hy(a)},
e4(a){return new A.nM(a)},
ac(a,b,c){return new A.I(a,b,c)},
vf(a,b,c){var s,r
if(A.qx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.a.k($.by,a)
try{A.xE(a,s)}finally{if(0>=$.by.length)return A.d($.by,-1)
$.by.pop()}r=A.ri(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pv(a,b,c){var s,r
if(A.qx(a))return b+"..."+c
s=new A.aQ(b)
B.a.k($.by,a)
try{r=s
r.a=A.ri(r.a,a,", ")}finally{if(0>=$.by.length)return A.d($.by,-1)
$.by.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
xE(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
cn(a,b,c,d){var s
if(B.k===c){s=J.bi(a)
b=J.bi(b)
return A.ne(A.cq(A.cq($.k0(),s),b))}if(B.k===d){s=J.bi(a)
b=J.bi(b)
c=J.bi(c)
return A.ne(A.cq(A.cq(A.cq($.k0(),s),b),c))}s=J.bi(a)
b=J.bi(b)
c=J.bi(c)
d=J.bi(d)
d=A.ne(A.cq(A.cq(A.cq(A.cq($.k0(),s),b),c),d))
return d},
vs(a){var s,r,q=$.k0()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q=A.cq(q,J.bi(a[r]))
return A.ne(q)},
pJ(a,b){return new A.fv(A.pA(a,b),b.i("fv<0>"))},
vZ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.rn(a4<a4?B.b.B(a5,0,a4):a5,5,a3).ghN()
else if(s===32)return A.rn(B.b.B(a5,5,a4),0,a3).ghN()}r=A.c0(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.tx(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.tx(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.a1(a5,"\\",n))if(p>0)h=B.b.a1(a5,"\\",p-1)||B.b.a1(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.a1(a5,"..",n)))h=m>n+2&&B.b.a1(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.a1(a5,"file",0)){if(p<=0){if(!B.b.a1(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.B(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bd(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a1(a5,"http",0)){if(i&&o+3===n&&B.b.a1(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bd(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.a1(a5,"https",0)){if(i&&o+4===n&&B.b.a1(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bd(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.jy(a4<a5.length?B.b.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.wH(a5,0,q)
else{if(q===0)A.ew(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.wI(a5,c,p-1):""
a=A.wD(a5,p,o,!1)
i=o+1
if(i<n){a0=A.my(B.b.B(a5,i,n),a3)
d=A.wF(a0==null?A.k(A.ac("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.wE(a5,n,m,a3,j,a!=null)
a2=m<l?A.wG(a5,m+1,l,a3):a3
return A.wy(j,b,a,d,a1,a2,l<a4?A.wC(a5,l+1,a4):a3)},
rr(a){var s=t.N
return B.a.bx(A.f(a.split("&"),t.s),A.x(s,s),new A.nq(B.aT),t.G)},
iT(a,b,c){throw A.c(A.ac("Illegal IPv4 address, "+a,b,c))},
vW(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iT("each part must be in the range 0..255",a,r)}A.iT("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iT(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.b3(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iT(j,a,q)
p=l}A.iT("IPv4 address should contain exactly 4 parts",a,q)},
vX(a,b,c){var s
if(b===c)throw A.c(A.ac("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.vY(a,b,c)
if(s!=null)throw A.c(s)
return!1}A.rq(a,b,c)
return!0},
vY(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.I(n,a,q)
r=q
break}return new A.I("Unexpected character",a,q-1)}if(r-1===b)return new A.I(n,a,r)
return new A.I("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.I("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.I("Invalid IPvFuture address character",a,r)}},
rq(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.np(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.vW(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cT(l,8)
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
B.by.i1(s,a0,16,s,a)
B.by.kD(s,a,a0,0)}}return s},
wy(a,b,c,d,e,f,g){return new A.h1(a,b,c,d,e,f,g)},
rN(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ew(a,b,c){throw A.c(A.ac(c,a,b))},
wF(a,b){var s=A.rN(b)
if(a===s)return null
return a},
wD(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.ew(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.wA(a,q,r)
if(o<r){n=o+1
p=A.rS(a,B.b.a1(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.vX(a,q,o)
l=B.b.B(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cf(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.rS(a,B.b.a1(a,"25",n)?o+3:n,c,"%25")}else p=""
A.rq(a,b,o)
return"["+B.b.B(a,b,o)+p+"]"}}return A.wK(a,b,c)},
wA(a,b,c){var s=B.b.cf(a,"%",b)
return s>=b&&s<c?s:c},
rS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aQ(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.pY(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aQ("")
l=h.a+=B.b.B(a,q,r)
if(m)n=B.b.B(a,r,r+3)
else if(n==="%")A.ew(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aQ("")
if(q<r){h.a+=B.b.B(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.B(a,q,r)
if(h==null){h=new A.aQ("")
m=h}else m=h
m.a+=i
l=A.pX(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.B(a,b,c)
if(q<c){i=B.b.B(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
wK(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.pY(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aQ("")
k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.B(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aQ("")
if(q<r){p.a+=B.b.B(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.ew(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aQ("")
l=p}else l=p
l.a+=k
j=A.pX(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.B(a,b,c)
if(q<c){k=B.b.B(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
wH(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.rP(a.charCodeAt(b)))A.ew(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.ew(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.B(a,b,c)
return A.wz(q?a.toLowerCase():a)},
wz(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
wI(a,b,c){return A.h2(a,b,c,16,!1,!1)},
wE(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.h2(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.Y(q,"/"))q="/"+q
return A.wJ(q,e,f)},
wJ(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.Y(a,"/")&&!B.b.Y(a,"\\"))return A.wL(a,!s||c)
return A.wM(a)},
wG(a,b,c,d){return A.h2(a,b,c,256,!0,!1)},
wC(a,b,c){return A.h2(a,b,c,256,!0,!1)},
pY(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.p1(r)
o=A.p1(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ah(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
pX(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.jD(a,6*p)&63|q
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
o+=3}}return A.rj(s,0,null)},
h2(a,b,c,d,e,f){var s=A.rR(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
rR(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.pY(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.ew(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.pX(n)}if(o==null){o=new A.aQ("")
k=o}else k=o
k.a=(k.a+=B.b.B(a,p,q))+l
if(typeof m!=="number")return A.jZ(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.B(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
rQ(a){if(B.b.Y(a,"."))return!0
return B.b.ce(a,"/.")!==-1},
wM(a){var s,r,q,p,o,n,m
if(!A.rQ(a))return a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.aY(s,"/")},
wL(a,b){var s,r,q,p,o,n
if(!A.rQ(a))return!b?A.rO(a):a
s=A.f([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gR(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.rO(s[0]))}return B.a.aY(s,"/")},
rO(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.rP(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.bH(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
wB(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.c(A.w("Invalid URL encoding",null))}}return r},
pZ(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aT===d)return B.b.B(a,b,c)
else p=new A.d5(B.b.B(a,b,c))
else{p=A.f([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.c(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.c(A.w("Truncated URI",null))
B.a.k(p,A.wB(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.J.a(p)
return B.fW.ki(p)},
rP(a){var s=a|32
return 97<=s&&s<=122},
rn(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.f([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.c(A.ac(k,a,r))}}if(q<0&&r>b)throw A.c(A.ac(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gR(j)
if(p!==44||r!==n+7||!B.b.a1(a,"base64",n+1))throw A.c(A.ac("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.cn.l0(a,m,s)
else{l=A.rR(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bd(a,m,s,l)}return new A.nn(a,j,c)},
tx(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a){this.a=a},
je:function je(){},
a6:function a6(){},
hk:function hk(a){this.a=a},
cr:function cr(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ef:function ef(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hZ:function hZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fw:function fw(a){this.a=a},
iP:function iP(a){this.a=a},
ek:function ek(a){this.a=a},
hy:function hy(a){this.a=a},
io:function io(){},
fr:function fr(){},
nM:function nM(a){this.a=a},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
aj:function aj(){},
B:function B(){},
jE:function jE(){},
n9:function n9(){this.b=this.a=0},
aQ:function aQ(a){this.a=a},
nq:function nq(a){this.a=a},
np:function np(a){this.a=a},
h1:function h1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
nn:function nn(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
ja:function ja(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mk:function mk(a){this.a=a},
al(a){var s
if(typeof a=="function")throw A.c(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jN,a)
s[$.eK()]=a
return s},
jN(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
qv(a,b,c){return c.a(a[b])},
tb(a,b){return a[b]},
aJ(a,b,c,d){return d.a(a[b].apply(a,c))},
t4(a,b,c,d){return d.a(a[b](c))},
ay(a,b){var s=new A.ai($.aa,b.i("ai<0>")),r=new A.fB(s,b.i("fB<0>"))
a.then(A.eI(new A.pl(r,b),1),A.eI(new A.pm(r),1))
return s},
tl(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
cB(a){if(A.tl(a))return a
return new A.oX(new A.fK(t.mp)).$1(a)},
pl:function pl(a,b){this.a=a
this.b=b},
pm:function pm(a){this.a=a},
oX:function oX(a){this.a=a},
jj:function jj(){},
ep:function ep(){this.b=this.a=0},
mD:function mD(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mE:function mE(){},
dr:function dr(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b},
kK:function kK(){this.a=null
this.d=0},
it:function it(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
e_:function e_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hO:function hO(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
l9:function l9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
de(a,b){return new A.lp(a,b)},
co:function co(){},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b){this.a=a
this.b=b},
lp:function lp(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
kQ:function kQ(a,b){this.a=a
this.c=b},
is:function is(a,b,c){this.b=a
this.d=b
this.e=c},
ej:function ej(){},
pD(a,b,c,d,e,f,g,h,i){return new A.cJ(c,a,g,f,e,h,i,b)},
hj:function hj(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h},
ct:function ct(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function ns(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mn(a){var s,r=t.N,q=A.aq(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.J(0,A.aq(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.J(0,A.aq(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.J(0,A.aq(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.J(0,A.aq(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.k(0,"gradeOutput")
if(p.v(0,"ps1"))q.k(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.mm(A.pJ(q,r),s)},
mm:function mm(a,b){this.a=a
this.b=b},
mo:function mo(){},
mv:function mv(a){this.b=a},
iB:function iB(){this.a=null
this.c=0
this.d=!1},
e2:function e2(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c,d,e,f,g,h,i,j){var _=this
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
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dt:function dt(a,b){this.a=a
this.b=b},
lb:function lb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
vn(){return new A.id(new A.c3(new A.mf(),A.f([],t.dz),A.f([],t.t),t.kk))},
id:function id(a){this.a=a},
mf:function mf(){},
tz(a){var s=4
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
case 3:s=A.k(A.ax("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
x5(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.ao[r]
if(A.tz(q.a)===b)s+=q.c}return s},
vo(a){return new A.mh(a,new A.c3(new A.mi(),A.f([],t.jk),A.f([],t.t),t.ll),A.x(t.S,t.mL))},
iR:function iR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mh:function mh(a,b,c){this.a=a
this.b=b
this.c=c},
mi:function mi(){},
mj:function mj(){},
vS(a){var s=new A.iN(a,new A.c3(new A.ni(),A.f([],t.mQ),A.f([],t.t),t.ox),A.x(t.S,t._))
s.d=s.el()
return s},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
ni:function ni(){},
nk:function nk(){},
nj:function nj(){},
yh(a){var s,r,q,p,o=A.f([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.p)(a),++q){p=a[q]
B.a.k(o,new A.dg(p,A.f([p],r)))
continue}return o},
dg:function dg(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a},
l5:function l5(){},
l6:function l6(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
hN:function hN(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
la:function la(a,b){this.a=a
this.b=b
this.c=0},
pE(){return!0},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function mq(){},
mr:function mr(){},
bS:function bS(a,b){this.a=a
this.b=b},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eg:function eg(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
eP:function eP(a){this.b=a},
mB:function mB(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mF:function mF(){},
aM:function aM(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
mH:function mH(a,b){this.a=a
this.b=b},
mL:function mL(){},
mK:function mK(){},
mJ:function mJ(a){this.a=a},
mI:function mI(a,b,c){this.a=a
this.b=b
this.c=c},
mG:function mG(a,b){this.a=a
this.b=b},
vJ(a){return new A.fk(a,new A.c3(new A.mN(),A.f([],t.n_),A.f([],t.t),t.mo))},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b){this.a=a
this.b=b},
mN:function mN(){},
t8(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.xc(a,r,s,a.x.gp().a.b.a).b},
xc(a,b,c,d){var s,r,q,p,o=new A.oD(a),n=new A.oE(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.yj(b,l,m,s.c.gll(),new A.op(n),new A.oq(n),new A.or(a),new A.ov(a),new A.ow(n),new A.ox(n),new A.oy(a),r.gln(),o,new A.oz(n),new A.oA(n),new A.oB(n),new A.oC(n),new A.os(n),new A.ot(a),new A.ou(n),c.c,c.b)}else q=new A.hM(A.f([new A.j3(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.fh(b,u.l,u.q,l,B.O)],t.o5))
a.r.toString
p=q.k6(B.C,new A.mF(),!1,new A.js())
o=p.a.b
if(o.length!==0)throw A.c(A.l("safe renderer graph is invalid: "+A.q(o)))
return new A.o7(q,p)},
xd(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.c(A.l("renderer graph is not initialized"))
s=a4.gdG()
r=a5.a
q=A.yp(A.v2(r.c),s,-1).a
p=A.f([],t.mX)
o=A.f([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.d,k=0;k<q.length;q.length===s||(0,A.p)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.ai)B.a.k(o,new A.ar(new A.b4(m.hK(i.c.a).c,h),j,l))
else B.a.k(p,new A.ar(new A.b7(B.fh,i.b,i.a,h),j,n))}g=new A.jg(A.yh(A.yU(p)),A.yT(o),r,a5.b,a5.c)
f=new A.hF(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.p)(s),++k){e=s[k]
d=A.x(n,m)
for(l=e.ga_().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.p)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
a0=a.b.h(0,b)
if(a0==null)A.k(A.l("resource is not in candidate: "+b))
d.l(0,b,new A.ht(a0))}e.ab(new A.hs(d,f,g))}},
rg(a){return new A.n1(a,new A.kJ(new A.kK(),new A.iB()),new A.la(A.f([],t.c8),B.dA),A.f([],t.oZ),B.at)},
oD:function oD(a){this.a=a},
oE:function oE(a,b){this.a=a
this.b=b},
oB:function oB(a){this.a=a},
ov:function ov(a){this.a=a},
oA:function oA(a){this.a=a},
or:function or(a){this.a=a},
os:function os(a){this.a=a},
oC:function oC(a){this.a=a},
oz:function oz(a){this.a=a},
op:function op(a){this.a=a},
oq:function oq(a){this.a=a},
ow:function ow(a){this.a=a},
ox:function ox(a){this.a=a},
oy:function oy(a){this.a=a},
ou:function ou(a){this.a=a},
ot:function ot(a){this.a=a},
o7:function o7(a,b){this.a=a
this.b=b},
js:function js(){},
jg:function jg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mW:function mW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
n1:function n1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
n2:function n2(){},
yU(a){var s,r,q=A.K(a,t.p)
B.a.X(q,new A.pq())
s=A.L(q)
r=s.i("R<1,bo>")
s=A.K(new A.R(q,s.i("bo(1)").a(new A.pr()),r),r.i("a2.E"))
s.$flags=1
return s},
yT(a){var s,r,q=A.K(a,t.d)
B.a.X(q,new A.po())
s=A.L(q)
r=s.i("R<1,bo>")
s=A.K(new A.R(q,s.i("bo(1)").a(new A.pp()),r),r.i("a2.E"))
s.$flags=1
return s},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b){this.a=a
this.b=b},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
pq:function pq(){},
pr:function pr(){},
po:function po(){},
pp:function pp(){},
yp(a,b,c){var s,r,q,p,o,n,m,l=A.f([],t.bH)
for(s=b.$ti,r=new A.bv(b.a(),s.i("bv<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.c(A.w("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.lv(n)===B.b5){++p
continue}B.a.k(l,o)}return new A.kM(l)},
kM:function kM(a){this.a=a},
cd(a){var s,r,q,p,o,n,m,l,k
for(s=J.M(a),r=B.fZ,q=B.h_,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.z(m,k,Math.min(r.c,o))
q=new A.z(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.c(A.w("Aabb.fromPoints requires at least one point",null))
return new A.hh(r,q)},
hh:function hh(a,b){this.a=a
this.b=b},
v2(a){var s,r,q,p,o,n,m=a.a,l=new A.ld(),k=m.length
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
return new A.lc(A.f([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
dp:function dp(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
lc:function lc(a){this.a=a},
ld:function ld(){},
r5(a){if(a.length!==16)throw A.c(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.cm(new Float32Array(A.a3(a)))},
pC(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cm(q)},
r6(a,b,c){var s=b.ga5(),r=s.aR(c).ga5(),q=r.aR(s),p=new Float32Array(16)
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
p[12]=-r.bs(a)
p[13]=-q.bs(a)
p[14]=s.bs(a)
p[15]=1
return new A.cm(p)},
cm:function cm(a){this.a=a},
me:function me(){},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hr:function hr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jb:function jb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fF:function fF(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c,d,e,f,g,h,i,j){var _=this
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
jc:function jc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
jd:function jd(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
ji:function ji(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ht:function ht(a){this.b=a},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iw:function iw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rh(a){var s=A.r6(B.F,B.a5,Math.abs(0)<0.99?B.fY:B.F)
return new A.dw(A.pC(1,1,B.c.Z(1,0.1,3),0.05).W(0,s))},
dw:function dw(a){this.a=a},
iE:function iE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jw:function jw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yj(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.c(A.av(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.rh(B.cG)
c=t.o5
l=A.f([],c)
if(r){B.a.J(l,A.f([new A.eN(a,j,i,b,h,h,B.ch,!0,B.O,B.bM,b1),new A.eN(a,j,i,b,g,g,B.hB,!1,B.bM,B.bN,a2),new A.hr(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.ps()}else k=B.O
if(q){B.a.J(l,A.f([new A.eS(a,j,i,b,f,f,B.ci,k,B.bF,b1),new A.eS(a,j,i,b,e,e,B.hC,B.bF,B.bG,a6),new A.hI(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bH}if(p){B.a.k(l,new A.hW(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bL}if(o){B.a.k(l,new A.iw(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bO}if(n){B.a.k(l,new A.iW(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.av}c=A.f([new A.hE(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.iI(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.iH(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.iE(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.oV(d)))
c.push(new A.iF(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 toLight=normalize(uLightPosition-vWorldPos);\n  float ndotl=max(dot(n,toLight),0.);\n  float shadow=shadowFactor(ndotl);\n  float attenuation=lightAttenuation(vWorldPos);\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+vec3(ndotl*shadow*attenuation),0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.oW(d,m),a5,b4,s,b9,b8))
B.a.J(c,l)
c.push(new A.fh(a,j,u.q,b,k))
return new A.hM(c)},
oV:function oV(a){this.a=a},
oW:function oW(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jx:function jx(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iI:function iI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iH:function iH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jA:function jA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jH:function jH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(){},
iD(a,b){return new A.fq(a,b)},
hS:function hS(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dd:function dd(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eZ:function eZ(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
F:function F(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
hF:function hF(a){this.a=a},
iu:function iu(a,b){this.a=a
this.b=b},
lo:function lo(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
et:function et(a,b){this.a=a
this.b=b},
cW:function cW(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
qN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eT(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
hp:function hp(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aE:function aE(a,b){this.a=a
this.b=b},
nD:function nD(){this.a=null},
w3(a){var s=new A.j2(a,B.f,new A.nD())
s.iB(a)
return s},
bV(a,b){var s,r
if(a.b!==B.f)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
w7(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
w6(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
ru(a,b){var s
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
w4(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bd(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.f
r=s.kn(b)
if(r.a===0)return
if(r.v(0,B.aA)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aB))a.a.depthFunc(A.w7(a,b.b))
if(r.v(0,B.aC))a.a.depthMask(b.c)
if(r.v(0,B.aG)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aH))a.a.cullFace(A.w6(a,b.x))
if(r.v(0,B.ca)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aD)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aE))a.a.blendFunc(A.ru(a,b.e),A.ru(a,b.f))
if(r.v(0,B.aF))a.a.blendEquation(A.w4(a,b.r))
if(r.v(0,B.c8))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.c9)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
w5(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
en(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.w5(a,b))},
cS(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.e(b.a)
a.a.useProgram(s)
a.e=s},
A(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.c(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.cZ(c.b))
break
case 1:p=t.pk.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.pk.a(c.b)
o=p.length
if(0>=o)return A.d(p,0)
n=p[0]
if(1>=o)return A.d(p,1)
m=p[1]
if(2>=o)return A.d(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:r.uniformMatrix4fv(q,!1,t.pk.a(c.b))
break
case 4:r.uniform1i(q,A.a(c.b))
break}},
bW(a,b){if(a.b!==B.f)A.k(A.l(u.k))
a.a.bindVertexArray(A.e(b.a))},
bt(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.h4){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.h3){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.c(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.c(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
dA(a,b,c){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
pM(a,b,c,d){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
pN(a,b,c){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
pO(a,b,c,d){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
A.aJ(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
w8(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
rx(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.c(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b6?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.w8(a,b.b))
return new A.cY(r)},
rv(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
rw(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
pP(a,b){var s,r,q,p,o,n,m,l,k
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
if(p)A.aJ(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aJ(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.rv(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.rv(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.rw(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.rw(a,p))
return new A.cY(new A.h4(r,l,k,q,!1))},
pQ(a,b,c,d){var s,r,q,p,o,n,m,l,k
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
if(r)A.aJ(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aJ(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
pR(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
c8(a){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.c(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.cY(s)},
ry(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.c(A.iD(b===A.qv(A.tb(A.tQ(),r),q,t.S)?B.c3:B.c4,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a8(A.cB(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bJ(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.c(A.iD(b===A.qv(A.tb(A.tQ(),r),q,t.S)?B.c3:B.c4,s))}return o},
w9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.l(u.k))
q=v.G
s=A.ry(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.ry(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.c(B.fD)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a8(A.cB(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bJ(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iD(B.c5,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.p)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iD(B.c6,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iD(B.c6,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.cY(n)},
cY:function cY(a){this.a=a},
h4:function h4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h3:function h3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
j2:function j2(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
nB:function nB(a){this.a=a},
nC:function nC(a){this.a=a},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kq(a,b){var s=0,r=A.b1(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$kq=A.b2(function(a0,a1){if(a0===1)return A.aZ(a1,r)
for(;;)switch(s){case 0:p=A.e(new v.G.AudioContext())
o=t.m
n=A.x(t.N,o)
m=A.e(p.createGain())
l=A.e(p.createGain())
k=A.e(p.createGain())
j=A.e(p.createGain())
i=A.e(p.createGain())
h=A.e(p.createGain())
g=A.e(p.createGain())
f=A.e(p.createGain())
e=A.e(p.createGain())
d=A.e(p.createConvolver())
c=new A.hm(p,b,m,l,k,j,i,h,g,f,e,d,n,B.aU,A.x(o,t.bp))
c.io(p,b)
p=A.o(a).i("V<1,2>")
s=3
return A.a7(A.lf(A.ib(new A.V(a,p),p.i("bk<aj>(n.E)").a(new A.kr(c)),p.i("n.E"),t.mj),t.c),$async$kq)
case 3:n=n.h(0,"ir-stone")
p=n==null?c.j8():n
d.buffer=p
q=c
s=1
break
case 1:return A.b_(q,r)}})
return A.b0($async$kq,r)},
hm:function hm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ax=null
_.ay=o
_.dy=_.dx=$},
kr:function kr(a){this.a=a},
kt:function kt(a,b){this.a=a
this.b=b},
ks:function ks(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
us(a,b,c,d,e,f,g){var s=new A.kk(c,f,b,g,new A.b(d.a,d.b,d.c),e,a)
s.iq(a,b,c,d,0,e,f,g)
return s},
uo(a,b){var s=new A.k4(b)
s.im(a,b)
return s},
ur(a){var s,r,q,p,o,n=t.z
n=A.x(n,n)
for(s=new A.V(a,A.o(a).i("V<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aw(q.b,!1,r)
o.$flags=3
n.l(0,p,o)}n=new A.kg(A.ce(n,r,t.a))
n.ip(a)
return n},
xV(a,b){var s,r,q,p=b>>>0
for(s=new A.d5(a),r=t.gS,s=new A.bn(s,s.gq(0),r.i("bn<J.E>")),r=r.i("J.E");s.m();){q=s.d
p=A.tI(p,q==null?r.a(q):q)}return p&2147483647},
hn:function hn(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kl:function kl(){},
k4:function k4(a){this.a=a},
k5:function k5(){},
eM:function eM(){},
k6:function k6(){},
kg:function kg(a){this.a=a},
ki:function ki(){},
kj:function kj(){},
kh:function kh(){},
km:function km(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a){this.a=a},
kp:function kp(){},
fA:function fA(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
l8:function l8(a){this.a=a},
iL:function iL(a,b,c,d,e,f,g,h,i,j){var _=this
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
lm:function lm(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
ln:function ln(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=0
this.$ti=b},
i_:function i_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
ic:function ic(a){this.a=a},
dm:function dm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mg:function mg(a,b){this.a=a
this.b=b},
fs(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b3(a)
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
cO:function cO(a){this.a=a
this.b=0},
mM:function mM(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
mV:function mV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vK(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.re(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.i4(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.jq(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.c0(800,0,!1,r)
p=new Float32Array(8064)
o=J.i4(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.jo(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.c0(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).ga5()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.mO(a,new A.lm(a,A.x(t.m,r)),b,c,A.a5(t.N),j,i,h,g,q,p,A.x(r,t.hX),o,n,m,B.et,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.ic(l),a,A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k),A.f([],k))
k.ix(a,b,c)
return k},
mO:function mO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.ar=a
_.aA=b
_.aV=c
_.aW=d
_.dr=_.h4=1
_.dD=_.dC=_.hm=_.hl=_.hk=_.hj=_.hi=_.hh=_.dB=_.dA=_.dz=_.dw=_.dv=_.du=_.dt=_.hg=_.hf=_.he=_.ds=_.hd=_.hc=_.hb=_.ha=_.h9=_.h8=_.h7=_.h6=_.h5=_.ac=$
_.c4=null
_.f8=e
_.fC=_.fB=_.fA=_.fz=_.fw=_.fv=_.fu=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.fj=_.fi=_.fh=_.fg=_.ff=_.fe=_.fd=_.fc=_.fb=_.fa=_.f9=_.c5=$
_.c6=0
_.d7=_.d6=_.d5=_.d4=_.d3=_.d2=_.d1=$
_.ca=_.c9=_.c8=_.c7=_.bt=_.aU=null
_.bu=$
_.fF=_.fE=_.fD=!1
_.kw=1
_.d8=f
_.d9=g
_.kx=h
_.fG=i
_.cb=0
_.fH=j
_.ky=k
_.da=0
_.dc=l
_.kz=1
_.dd=!1
_.bv=0
_.de=m
_.bw=0
_.fI=n
_.fJ=o
_.fM=_.fL=_.fK=1
_.fN=0.55
_.df=p
_.fO=q
_.dg=r
_.dh=s
_.di=a0
_.fP=_.dm=_.dl=_.dk=_.dj=0
_.fQ=null
_.fR=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.h_=_.dq=_.dn=_.fZ=_.fY=_.kC=_.kB=_.kA=_.fX=_.fW=_.fV=_.fU=_.fT=_.fS=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.h0=a7
_.h1=a8
_.h2=a9
_.h3=b0},
tn(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.a8(0,c).aR(f.a8(0,c)).ga5(),r=A.oP(g)
return A.tq(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
he(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.b3(a)
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
tq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.he(a,A.he(a,A.he(a,A.he(a,A.he(a,A.he(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
oP(a){return new A.bu((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
xm(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.aB(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.ae(),i=A.ae(),h=A.ae()
switch(B.c.V(o,6)){case 0:j.b=c
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
h.b=l}s=j.cR()
if(typeof s!=="number")return s.W()
s=B.d.aM(s*255)
r=i.cR()
if(typeof r!=="number")return r.W()
r=B.d.aM(r*255)
q=h.cR()
if(typeof q!=="number")return q.W()
return new A.bu(s,r,B.d.aM(q*255))},
fH:function fH(){},
jC:function jC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
jq:function jq(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jo:function jo(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mP:function mP(){},
mQ:function mQ(a){this.a=a},
mR:function mR(a){this.a=a},
nF:function nF(){},
n4:function n4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iV(a,b,c){return new A.b(a,b,c)},
rs(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
uJ(a,b,c){var s=new A.hJ(a,c,null,b)
s.is(a,null,null,b,c)
return s},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
uW(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.e9(new A.Q(B.eE,t.gl.a(new A.kZ(a)),t.ns),t.no)
return s==null?null:new A.e3(s)},
uV(a){if(a.a!==21)return null
if(a.e)return B.cN
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cO
return B.cM},
bz:function bz(a,b){this.a=a
this.b=b},
kW:function kW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e3:function e3(a){this.a=a},
kZ:function kZ(a){this.a=a},
vt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.G(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.ir(s,new A.b(o,n,m),q,p,l,j)
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
ir:function ir(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xX(a){var s,r,q,p=A.x(t.N,t.z)
for(s=a.gM(),s=s.gu(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.c(B.d_)
p.l(0,q,r.b)}return p},
jO(a){var s,r,q,p,o,n=a.gP().be(0)
B.a.a0(n)
s=t.z
r=A.x(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.p)(n),++p){o=n[p]
r.l(0,o,A.t6(a.h(0,o)))}return A.ce(r,t.N,s)},
t6(a){var s
if(t.f.b(a))return A.jO(A.xX(a))
if(t.j.b(a)){s=t.z
return A.an(J.dS(a,A.yQ(),s),s)}if(a==null||A.bK(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dm)
return a}throw A.c(A.ac("presentation snapshot contains unsupported value "+J.dR(a).n(0),null,null))},
mw:function mw(a){this.a=a},
rf(a,b,c){var s=A.q4(b),r=A.q4(a)
if(c!==2)A.k(A.av(c,"version","unsupported save version"))
return new A.eh(c,s,r)},
q4(a){var s,r,q,p,o=A.o(a).i("ag<1>"),n=A.K(new A.ag(a,o),o.i("n.E"))
B.a.a0(n)
o=t.z
s=A.x(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.p)(n),++q){p=n[q]
s.l(0,p,A.t5(a.h(0,p)))}return A.ce(s,t.N,o)},
t5(a){var s,r,q,p
if(t.f.b(a)){s=A.x(t.N,t.z)
for(r=a.gM(),r=r.gu(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.c(B.dg)
s.l(0,p,q.b)}return A.q4(s)}if(t.j.b(a)){r=t.z
return A.an(J.dS(a,A.yS(),r),r)}if(a==null||A.bK(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dn)
return a}throw A.c(A.ac("save contains unsupported value "+J.dR(a).n(0),null,null))},
eh:function eh(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(){},
du:function du(a,b){this.a=a
this.b=b},
qQ(a,b,c,d,e,f,g){return new A.li(a,b,c,d,e,f,g,A.f([],t.mc),A.f([],t.ag))},
qR(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aI(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.c(B.df)
r=e.h(0,"runSeed")
q=A.aI(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aI(p)||p<1||typeof o!="number")throw A.c(B.dr)
if(!isFinite(480))throw A.c(A.av(480,"daySeconds","must be finite and > 0"))
n=new A.hQ(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ac("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.vk(a3,A.aU(a,s,m))
k=A.uG(l,A.aU(b,s,m),n)
j=A.qS(d)
A.v8(A.aU(a0,s,m)).jW(j)
m=A.aU(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bK(f))A.k(B.d2)
return A.qQ(d,q,j,n,l,k,new A.hH(i,h,g,f))},
xb(a){var s
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
dc:function dc(a,b){this.a=a
this.b=b},
hP:function hP(){},
lj:function lj(a,b){this.a=a
this.b=b},
li:function li(a,b,c,d,e,f,g,h,i){var _=this
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
lk:function lk(a){this.a=a},
ll:function ll(){},
ut(a){var s,r,q,p,o,n,m="modelScale",l=A.jT(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.bI(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.c(B.d8)
s=A.d0(l,"houseId")
r=A.d0(l,"sourceRef")
q=J.dS(A.jQ(l,"rooms"),new A.kv(k),t.fS)
q=A.K(q,q.$ti.i("a2.E"))
q.$flags=1
p=J.dS(A.jQ(l,"portals"),new A.kw(k),t.gE)
p=A.K(p,p.$ti.i("a2.E"))
p.$flags=1
o=J.dS(A.jQ(l,"stairs"),new A.kx(),t.d2)
o=A.K(o,o.$ti.i("a2.E"))
o.$flags=1
n=J.dS(A.jQ(l,"exteriorCells"),new A.ky(),t.N)
n=A.K(n,n.$ti.i("a2.E"))
n.$flags=1
return new A.ku(s,r,q,p,o)},
uu(a,b){var s=A.jT(a,"room"),r=A.d0(s,"id"),q=A.tw(s.h(0,"origin"),"origin",b),p=A.tw(s.h(0,"size"),"size",b),o=J.dS(A.jQ(s,"windows"),new A.kA(b),t.lJ)
o=A.K(o,o.$ti.i("a2.E"))
o.$flags=1
return new A.dV(r,q,p,o)},
jT(a,b){return t.P.b(a)?a:A.h9(b+" is not an object")},
jQ(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.h9(b+" is not a list")},
d0(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h9(b+" is not a string")},
hc(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.h9(b+" is not finite")},
y9(a,b){var s,r
if(t.j.b(a)){s=J.au(a)
s=s.gq(a)!==3||s.O(a,new A.oT())}else s=!0
if(s)return A.h9(b+" is not a finite vec3")
s=A.f([],t.n)
for(r=J.M(a);r.m();)s.push(A.bI(r.gp()))
return s},
tw(a,b,c){var s,r,q,p=A.f([],t.n)
for(s=A.y9(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)p.push(s[q]*c)
return p},
h9(a){return A.k(A.ac(a,null,null))},
ku:function ku(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(){},
ky:function ky(){},
kz:function kz(a){this.a=a},
dV:function dV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kA:function kA(a){this.a=a},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dU:function dU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dW:function dW(a){this.b=a},
oT:function oT(){},
hu:function hu(a,b){this.a=a
this.b=b
this.d=null},
kI:function kI(a){this.a=a},
ie:function ie(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lu:function lu(){this.b=0},
mX:function mX(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
aL:function aL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
l0:function l0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l1:function l1(){},
lv:function lv(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(){},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b){this.a=a
this.b=b},
l2:function l2(){},
yi(a){var s,r,q,p=new A.lw(A.f([],t.oP),A.f([],t.t),A.x(t.N,t.S))
for(s=0;s<4;++s)A.xe(p,a,B.bq[s],10.5,10.5,8.03,0.42)
p.t(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.t(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.t(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.t(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.t(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.t(1,11,0,11,-0.5,-0.35,10.58)
p.t(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.t(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aL(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aL(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.b4(r,new A.aL(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b4(r,q,new A.aL(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aL(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aL(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b4(q,new A.aL(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b4(q,r,new A.aL(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.t(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.xN(p,10.5,10.5,8.03,10.88)
A.x2(p,10.5,10.5,10.88)
A.xa(p,10.5,10.5,8.03)
A.xh(p,a,10.5)
A.xS(p,10.5,10.5)
A.x0(p,10.5)
return p.k0()},
xe(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.f([],t.jX)
for(s=b6.b,r=s.length,q=B.w!==b7,p=B.i!==b7,o=B.m===b7,n=B.G===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
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
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.p)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.k(b4,new A.cV(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.ao(i),b=J.M(h.a),h=new A.N(b,h.b,h.$ti.i("N<1>"));h.m();){a=b.gp()
if(!a.Q||a.aq(i)!==b7)continue
B:{if(!p||o){a0=g+a.af(i)
break B}if(!q||n){a0=e+a.af(i)
break B}a0=null}B.a.k(b4,new A.cV(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.m?b8:b9
r=t.i
a1=A.aq([0,s],r)
a2=A.aq([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.p)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.K(a1,a1.$ti.c)
B.a.a0(a4)
a5=A.K(a2,a2.$ti.c)
B.a.a0(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.O(b4,new A.oF(b0,b1,b2,b3)))continue
switch(m){case 0:b5.t(0,b1,b3,0,b0,b2,r)
break
case 2:b5.t(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.t(0,0,b3,b1,r,b2,b0)
break
case 1:b5.t(0,s,b3,b1,b8,b2,b0)
break}}A.xg(b5,b4,b7,b8,b9,c1)
A.xf(b5,b4,b7,b8,b9,c1)},
xf(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
xg(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.xQ(a2,g,a4,a5,a6,a7,q)}},
xQ(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
xN(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.t(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.t(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.t(4,i,p,-0.38,j,q,-0.44)
a.t(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.t(5,h+0.5,p,o,h-0.5,r,q)}},
x2(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.t(0,g+0.35,k,n,g-0.35,l,q)
a.t(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.t(5,d+0.1,o,m,d-0.1,r,p)}}},
xa(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[-0.48,c+0.48],r=a0-0.16,q=b+0.1,p=0;p<2;++p){o=s[p]
a.t(6,q,a0,o+0.08,-0.1,r,o-0.08)}for(s=[0,b],r=c+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.11,l=n+0.11,k=n-0.07,j=n+0.07,i=0;i<2;++i){o=q[i]
a.t(6,j,a0,o+0.07,k,0,o-0.07)
for(h=[2,4,6],g=o-0.11,f=o+0.11,e=0;e<3;++e){d=h[e]
a.t(6,l,d+0.06,f,m,d,g)}}}},
xh(a,b,c){var s,r,q,p,o,n,m,l,k=b.e.h(0,"hall")
k.toString
s=b.f.h(0,"front-door")
r=k.d.a+s.af("hall")
q=r+s.w
for(k=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.t(2,p+n,0.02-m,-0.42-l,k-n,-0.08-m,-0.7-l)}a.t(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.t(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.t(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.t(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)},
xS(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
x0(a,b){var s,r
a.t(0,6.7,1,-4.05,-2.5,0,-4.4)
a.t(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.t(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.t(7,b+3,0,-4.55,-3,-0.08,-5.2)},
cV:function cV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oF:function oF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yR(a,b,c){var s,r,q=A.qz(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.e5(B.cS,s)}r=A.tO(a,c,b)
if(r!=null)return new A.e5(B.cT,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.tP(a,c,b)!=null)return B.cX
return B.cW},
da:function da(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.c=b},
tD(a,b){var s,r=new A.cO(new Float32Array(5376)),q=new A.cO(new Float32Array(5376)),p=new A.cO(new Float32Array(5376)),o=new A.cO(new Float32Array(5376)),n=b.d,m=a.aT(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cn(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
A.wS(r,b,m)
k+=m.b
q.cn(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.wV(p,a,b,m,B.bq[s])
for(l=a.ao(b.a),k=J.M(l.a),l=new A.N(k,l.b,l.$ti.i("N<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.wR(o,b,m,j)}A.wQ(p,b,m)
A.wT(p,a,b,m)
return new A.mY(B.u.b1(r.a,0,r.b),B.u.b1(q.a,0,q.b),B.u.b1(p.a,0,p.b),B.u.b1(o.a,0,o.b))},
wS(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.d,d=e.a,c=e.b,b=e.c
e=a0.y
if(e==="floor-wood"){e=a1.c
s=B.d.aB(e/0.22)
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
wT(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
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
case"hall":A.wU(b1,b2,b3,b4,a5,a4)
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
A.u(b1,new A.b(a7+m,a9,q),new A.b(p+m,o+B.c.V(k,2)*0.18,n),a5)}A.u(b1,new A.b(a8+2.55,a9+0.15,b0+0.38),new A.b(a8+2.72,a9+1.55,b0+0.56),a4)
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
wU(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
if(a.length===0)return
s=B.a.gaI(a)
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
wV(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.m?a3.a:a3.c,a=A.f([],t.a9)
for(s=a2.a,r=a1.ao(s),q=J.M(r.a),r=new A.N(q,r.b,r.$ti.i("N<1>"));r.m();){p=q.gp()
if(!p.as&&p.aq(s)===a4)a.push(new A.cU(p.af(s),p.af(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cU(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aq([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.p)(a),++o){m=a[o]
r.J(0,A.f([m.a,m.b],p))}l=A.K(r,r.$ti.c)
B.a.a0(l)
s=A.aq([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.p)(a),++o){m=a[o]
s.J(0,A.f([m.c,m.d],p))}k=A.K(s,s.$ti.c)
B.a.a0(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.O(a,new A.oj(f,e,d,c)))continue
A.ya(a0,a2,a3,a4,f,e,d,c)}A.wW(a0,a2,a3,a4,b,a)},
wW(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.a
if(c==="cellar")return
s=c==="living-room"||c==="hall"
r=c==="bedroom"
q=r||c==="landing"||c==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.oh(a,b,a0,a1,a2,a3,0.02,0.17,0.032,p)
o=!s
if(!o||c==="landing")A.oh(a,b,a0,a1,a2,a3,0.88,0.94,0.022,p)
if(!o||r){n=a0.b-0.58
A.oh(a,b,a0,a1,a2,a3,n,n+0.055,0.022,p)}c=a0.b
r=s?0.13:0.09
m=c-0.012
o=s?0.055:0.038
A.oh(a,b,a0,a1,a2,a3,c-r,m,o,p)
for(r=a3.length,l=0;l<a3.length;a3.length===r||(0,A.p)(a3),++l){k=a3[l]
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
if(o>0)A.jW(a,b,a0,a1,j,o,f,d,0.04,p)
if(i<a2)A.jW(a,b,a0,a1,i,h,f,d,0.04,p)
if(e<c)A.jW(a,b,a0,a1,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.jW(a,b,a0,a1,j,h,0>o?0:o,g,0.065,p)}}},
oh(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.y_(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.jW(a,b,c,d,n,o,g,h,i,j)}},
y_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.f([new A.eu(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.f([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.p)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.eu(j,m))
j=k.b
if(n<j)B.a.k(p,new A.eu(n,j))}h=p}return h},
wQ(a,b,c){var s,r,q,p,o=b.a,n=o==="living-room"
if(!n&&o!=="hall"&&o!=="bedroom")return
o=b.d
s=o.a+c.a*0.5
r=o.c+c.c*0.5
q=o.b+c.b
p=n?13748148:13024682
o=q-0.018
A.u(a,new A.b(s-0.24,o,r-0.24),new A.b(s+0.24,q,r+0.24),p)
n=q-0.034
A.u(a,new A.b(s-0.15,n,r-0.15),new A.b(s+0.15,o,r+0.15),p)
A.u(a,new A.b(s-0.055,q-0.048,r-0.055),new A.b(s+0.055,n,r+0.055),p)},
jW(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
a.aj(j,l,g,h,d)
a.aj(s,r,q,p,d)
a.aj(l,s,p,g,d)
a.aj(r,j,h,q,d)
a.aj(l,j,r,s,d)
a.aj(g,p,q,h,d)},
ya(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
default:o=m}a.cn(s.T(0,o),r.T(0,o),q.T(0,o),p.T(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.yb(b,d)
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
yb(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
wR(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aq(d),b=a3.af(d),a=b+a3.w
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
A.oi(a0,a1,a2,a3,q)
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
A.oi(a0,a1,a2,a3,q)
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
A.oi(a0,a1,a2,a3,q)
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
A.oi(a0,a1,a2,a3,q)
break}},
oi(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aq(o),m=d.af(o)
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
mY:function mY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oj:function oj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(a,b){this.a=a
this.b=b},
qS(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.f([],b4),b6=t.aN,b7=A.f([],b6),b8=A.f([],t.jn),b9=t.N
b9=new A.ls(b5,b7,b8,A.x(b9,t.W),A.x(b9,t.Q),new A.lu())
s=t.E
r=t.s
q=t.cs
p=t.x
B.a.J(b5,A.f([new A.aD(n,B.W,new A.b(4.5,3.9,4),new A.b(0,0,0),A.f([new A.aR("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.aR("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.f(["hall-living","kitchen-living"],r),A.f([new A.aV(m,l,new A.b(1,1.95,1),!1,!1,m),new A.aV(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.an,"wallpaper-stripes",i,h,B.z),new A.aD(g,B.W,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.f([new A.aR("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.f(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.f([new A.aV("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.f([new A.b8(e,e,new A.b(0.2,2.175,0.35)),new A.b8(d,d,new A.b(2.2,2.55,3)),new A.b8(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.z),new A.aD(a,B.W,new A.b(4.5,3.75,3),new A.b(0,0,4),A.f([new A.aR("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.aR("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.f(["hall-kitchen","kitchen-living"],r),A.f([new A.aV(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.aV("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.aV("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.f([new A.b8(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.e9),new A.aD("cellar",B.W,new A.b(4,3,4),new A.b(1,-3,2),B.bm,A.f(["hall-cellar"],r),B.er,B.an,"wallpaper-damp","floor-concrete","ceiling-pipes",B.z),new A.aD("bedroom",B.X,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.f([new A.aR("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.aR("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.f(["landing-bedroom"],r),A.f([new A.aV(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.aV("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.f([new A.b8(a3,a3,new A.b(2.2,1.125,2.5)),new A.b8(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.z),new A.aD(a5,B.X,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bm,A.f(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.f([new A.aV("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.an,b,i,h,B.z),new A.aD(a7,B.X,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.f([new A.aR("bathroom-east",B.w,0.9,1.5,0.7,1.5,!0,!0)],s),A.f([a6],r),A.f([new A.aV("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.f([new A.b8(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.z),new A.aD(a9,B.X,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.f([new A.aR("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.f(["landing-spare"],r),A.f([new A.aV("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.f([new A.b8(b0,b0,new A.b(0.5,1.8,0.3)),new A.b8(b1,b1,new A.b(3.7,2.1,2.7)),new A.b8(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.z)],b4))
B.a.J(b7,A.f([A.cL(g,"outside","kit-front-door-recessed",!0,B.i,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cL(g,n,b3,!1,B.G,B.w,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cL(g,a,b3,!1,B.G,B.w,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cL(a,n,b3,!1,B.i,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cL(g,"cellar","kit-cellar-door-grille",!1,B.m,B.w,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cL(g,a5,o,!1,B.w,B.w,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cL(a5,"bedroom",b3,!1,B.G,B.w,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cL(a5,a7,b3,!1,B.m,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cL(a5,a9,b3,!1,B.m,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cN("hall-stairs",f,B.el,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
b9.iF()
b9.j7()
b4=b5.length
if(b4!==8)A.k(A.l("expected eight rooms, got "+b4))
b4=b9.glC()
if(b4!==9)A.k(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gbg(b8)
b4=B.a.gR(B.a.gbg(b8).c)
if(b4!==6.3)A.k(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.l("expected nine physical portals"))
b9.jN()
b9.jM()
return b9},
ls:function ls(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
lJ:function lJ(){},
lK:function lK(){},
lI:function lI(){},
lL:function lL(a){this.a=a},
lM:function lM(){},
qz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.b(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga5()
j=a.b
if(Math.acos(B.d.Z(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
tO(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.ao(c),r=J.M(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.la(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.te(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
tP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=A.yc(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.te(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
te(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.Z(a.ga5().bs(c.b),-1,1))<=e},
yc(a,b,c){var s=a.aT(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
l_:function l_(){this.a=null
this.b=0},
n5:function n5(){},
n6:function n6(){},
vc(a){var s=A.hd(a,"inventory asset"),r=A.cA(s,"id"),q=A.cA(s,"kind")
A.cA(s,"source")
A.cA(s,"proxy")
A.cA(s,"pivot")
s=A.hd(s.h(0,"bounds"),"inventory bounds")
return new A.c_(r,q,new A.lR(A.jV(s.h(0,"min"),"bounds.min"),A.jV(s.h(0,"max"),"bounds.max")))},
vd(a){var s,r,q,p,o,n="stateKey",m=A.hd(a,"inventory placement"),l=A.hd(m.h(0,"visibility"),"placement visibility"),k=A.hd(m.h(0,"interaction"),"placement interaction"),j=m.h(0,"clearance"),i=A.cA(m,"id"),h=A.cA(m,"roomId"),g=A.cA(m,"assetId")
A.cA(m,"role")
s=typeof m.h(0,"socket")=="string"?A.G(m.h(0,"socket")):null
m=A.hd(m.h(0,"transform"),"inventory transform")
r=A.jV(m.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.dh)
q=A.jV(m.h(0,"position"),"transform.position")
p=A.jV(m.h(0,"rotation"),"transform.rotation")
A.cA(l,"layer")
if(typeof l.h(0,n)=="string")A.G(l.h(0,n))
J.a8(k.h(0,"pickable"),!0)
o=t.P.b(j)?A.xH(j,"radius"):0
return new A.cj(i,h,g,s,new A.lS(q,p,r),o)},
hd(a,b){return t.P.b(a)?a:A.cy(b+" is not an object")},
cA(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.cy(b+" is not a string")},
xH(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.cy(b+" is not finite")},
jV(a,b){var s
if(t.j.b(a)){s=J.au(a)
s=s.gq(a)!==3||s.O(a,new A.oS())}else s=!0
if(s)return A.cy(b+" is not a finite vec3")
s=J.au(a)
return new A.b(A.bI(s.h(a,0)),A.bI(s.h(a,1)),A.bI(s.h(a,2)))},
cy(a){return A.k(A.ac(a,null,null))},
ly:function ly(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lz:function lz(a){this.a=a},
lA:function lA(a){this.a=a},
c_:function c_(a,b,c){this.a=a
this.b=b
this.f=c},
cj:function cj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.y=f},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(a,b){this.a=a
this.b=b},
oS:function oS(){},
c2:function c2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hX:function hX(a){this.a=a},
lB:function lB(a){this.a=a},
cL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.b9(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
eW:function eW(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b9:function b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aV:function aV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(){},
cN:function cN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aD:function aD(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
v7(a){return A.v6(a)},
v6(a){var s,r,q,p,o,n,m=A.tm(a,"sound emitter"),l=t.N,k=A.x(l,l)
for(s=A.tm(m.h(0,"cues"),"sound emitter cues").gM(),s=s.gu(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.c(B.de)
k.l(0,r.a,q)}s=A.qp(m,"id")
r=A.qp(m,"roomId")
p=A.qp(m,"placementId")
o=A.y8(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.eA("gain is not a number")
return new A.bZ(s,r,p,o,n,A.ce(k,l,l))},
tm(a,b){return t.P.b(a)?a:A.eA(b+" is not an object")},
qp(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.eA(b+" is not a string")},
y8(a,b){var s
if(t.j.b(a)){s=J.au(a)
s=s.gq(a)!==3||s.O(a,new A.oR())}else s=!0
if(s)throw A.c(A.ac(b+" must be a numeric vec3",null,null))
s=J.au(a)
return new A.b(A.bI(s.h(a,0)),A.bI(s.h(a,1)),A.bI(s.h(a,2)))},
eA(a){return A.k(A.ac(a,null,null))},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(a){this.a=a},
lF:function lF(a){this.a=a},
lG:function lG(){},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lt:function lt(){this.b=this.a=null},
f0:function f0(a){this.a=a},
lC:function lC(){this.b=this.a=null},
e8:function e8(a,b){this.a=a
this.b=b},
oR:function oR(){},
qT(a,b,c,d,e,f){var s=t.N
return new A.lH(e,f,c,a,A.ce(A.aU(d,s,s),s,s),A.an(b,s))},
qU(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.x(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
h.l(0,p.a,new A.fg(p.ax,p.ay))}s=A.x(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.p)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.x(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.p)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l){j=o[l]
i.l(0,j.a,new A.f8(j.d,j.r))}return A.qT(a.r.b,B.l,i,B.bw,h,s)},
v8(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.eT
r=a3.h(0,"mantleHistory")
if(r==null)r=B.ey
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aI(a2)||!q.b(s)||!t.j.b(r))throw A.c(B.dc)
p=t.N
o=A.x(p,t.ku)
for(n=a.gM(),n=n.gu(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b4)
l=A.aU(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bK(j)||!A.bK(i))A.k(B.b4)
o.l(0,k,new A.fg(j,i))}h=A.x(p,t.y)
for(n=a0.gM(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bK(l.b))throw A.c(B.da)
h.l(0,k,A.aY(l.b))}g=A.x(p,t.mK)
for(n=a1.gM(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b3)
l=A.aU(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bK(f)||!A.bK(e))A.k(B.b3)
g.l(0,k,new A.f8(f,e))}d=A.x(p,p)
for(q=s.gM(),q=q.gu(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.c(B.dy)
d.l(0,n,A.G(p.b))}c=A.f([],t.s)
for(q=J.M(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.c(B.cY)
B.a.k(c,b)}return A.qT(a2,c,g,d,o,h)},
ql(a,b){return a.a.a===b.a&&a.a3(0,b.gc1(b))},
lH:function lH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fg:function fg(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
uT(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.mb(e,A.L(e).c)
q=new A.ep()
q.cz((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eU(a,q,2,r,1+s,A.aq(["time"],t.N))
break
case 3:A.eU(a,q,3,r,1+s,A.aq(["place"],t.N))
break
case 4:A.eU(a,q,4,r,2+s,p)
A.uP(a,q,4)
break
case 5:A.eU(a,q,5,r,s,p)
A.uN(a,q,5)
break
case 6:A.eU(a,q,6,r,s,p)
A.uO(a,q)
A.uS(a,q,6)
break
case 7:A.uQ(a,q,7)
break
default:if(s>0)A.eU(a,q,b,r,s,p)}},
uM(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.uR(a,b,c))return!1
return!0},
eU(a,b,c,d,e,f){var s,r,q,p,o=A.f([],t.r)
for(s=a.b,s=new A.am(s,s.r,s.e,A.o(s).i("am<2>"));s.m();){r=s.d
if(A.uM(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cv(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.qO(a,b,o[p],f)}},
qO(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aU(B.a.gR(o).a,n,n)
if(d==null)s=A.f(B.t.slice(0),t.s)
else{n=t.nn
s=A.K(new A.Q(B.t,t.dA.a(new A.kV(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.an(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.e2(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.an(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.cZ(c.a,m,B.a.gR(o).b)},
uP(a,b,c){var s=A.qP(a,b,c)
if(!a.bo(s))return
a.e7(c,t.G.a(s),0,B.al,null)},
qP(a,b,c){var s,r,q,p,o,n=t.N,m=A.x(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.t[s]
q=n.h(0,r)
if(q==null)q=B.l
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.an(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
uN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.r)
for(s=a.b,s=new A.am(s,s.r,s.e,A.o(s).i("am<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cv(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aU(B.a.gR(i).a,s,s)
r=p.c
n=A.aU(B.a.gR(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.t[m]
k=o.h(0,l)
j=s.e2(l,k==null?"":k)
k=j.length
if(k!==0){k=b.an(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.cZ(q.a,o,B.a.gR(i).b)
a.cZ(p.a,n,B.a.gR(r).b)},
uO(a,b){var s,r,q=A.f([],t.r)
for(s=a.b,r=new A.am(s,s.r,s.e,A.o(s).i("am<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.an(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.ah(0,q[r].a)},
uS(a,b,c){var s,r,q=A.f([],t.r)
for(s=a.b,s=new A.am(s,s.r,s.e,A.o(s).i("am<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.an(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.qO(a,b,q[s],null)},
uQ(a,b,c){var s=c+1,r=A.qP(a,b,s)
if(!a.bo(r))return
a.e7(s,t.G.a(r),0,B.al,null)},
uR(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gR(b.c).c===B.Z}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gR(b.c).c===B.Z}if(c===21)return b.e
return!1},
kV:function kV(a){this.a=a},
w2(a){var s,r,q,p,o=t.N,n=A.x(o,t.a)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p=A.aw(q==null?B.l:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.nA(n)},
m6(a,b,c){var s,r,q,p=t.z
p=A.x(p,p)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.ia(A.ce(p,q,q),b,c)},
r2(a){var s=t.N
return A.m6(t.P.a(a.h(0,"fields")).ba(0,new A.m7(),s,s),A.bI(a.h(0,"shakiness")),A.uY(B.en,A.G(a.h(0,"hand")),t.bU))},
uX(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.f([],t.b1)
for(s=J.M(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.r2(r.a(s.gp())))
s=A.bJ(a.h(0,"corroborator"))
q=A.aY(a.h(0,"locked"))
p=A.t0(a.h(0,"lastReadDay"))
return new A.bj(n,m,l,s,q,p,o==null?null:A.r2(r.a(o)))},
cG:function cG(a,b){this.a=a
this.b=b},
nA:function nA(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(){},
m8:function m8(a){this.a=a},
bj:function bj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
r_(a){return new A.lU(a,A.x(t.S,t.L),A.a5(t.N),A.f([],t.t))},
vk(a,b){var s,r,q,p,o=A.r_(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.J(0,J.uj(s.a(b.h(0,"tags")),t.N))
for(s=J.M(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.uX(r.a(s.gp()))
q.l(0,p.a,p)}return o},
lU:function lU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
m0:function m0(a,b){this.a=a
this.b=b},
kB:function kB(){},
dY:function dY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kC:function kC(){},
m5:function m5(){},
m4:function m4(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mt:function mt(){},
ms:function ms(a,b){this.b=a
this.c=b},
mu:function mu(){},
pG(a){if(!isFinite(0))A.k(A.av(0,"interpolation",null))
return new A.mU(a)},
fl:function fl(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
mU:function mU(a){this.a=a},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
mT(a,b,c,d,e){var s="7ad365ce3392-d004e52a5506",r=A.oo("RENDERER_SHA"),q=A.oo("GAME_SHA"),p=A.oo("DART_SDK_VERSION"),o=A.oo("LOCKFILE_SHA256"),n=A.mb(b,A.L(b).c)
n=A.K(n,A.o(n).c)
B.a.a0(n)
n=new A.mS(a,e,s,A.an(n,t.N),r,q,p,o,c,d)
n.iy(a,s,b,c,d,q,o,e,r,p)
return n},
oo(a){var s=B.eM.h(0,a)
return s.length===0?null:s},
mS:function mS(a,b,c,d,e,f,g,h,i,j){var _=this
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
qM(a,b,c,d,e,f,g){var s=A.K(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ac("saved day-loop resources must not be negative",null,null))
return new A.kN(c,g,b,a,e,d===!0,s)},
uG(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.c(B.d5)
s=A.f([],t.b2)
for(r=J.M(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.c(B.dd)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aI(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.c(B.d4)
f=A.e9(new A.Q(B.bk,q.a(new A.kO(h)),p),o)
e=A.e9(new A.Q(B.bp,n.a(new A.kP(g)),m),l)
if(f==null||e==null)throw A.c(B.dt)
B.a.k(s,new A.ei(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aI(d)||!A.aI(c)||!A.aI(b)||!A.bK(a))throw A.c(B.di)
return A.qM(c,d,a1,a,b,s,a3)},
ba:function ba(a,b){this.a=a
this.b=b},
aX:function aX(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
i0:function i0(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
nE:function nE(a,b){this.b=a
this.c=b},
dB:function dB(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
lN:function lN(a){this.c=a},
lP:function lP(a,b){this.a=a
this.b=b},
lQ:function lQ(){},
re(){var s=A.qa(B.l),r=A.qa(B.l),q=new A.n_(B.x,s,r)
if(!isFinite(0))A.k(B.cZ)
if(!B.a.a3(r,B.a.gc1(s)))A.k(B.dj)
if(q.a===B.x&&q.b!==0&&!q.e)A.k(B.d0)
return q},
qa(a){var s,r,q,p=A.f([],t.s),o=A.a5(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.c(B.ds)
B.a.k(p,q)}return p},
bB:function bB(a,b){this.a=a
this.b=b},
mZ:function mZ(){},
c4:function c4(){},
n_:function n_(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hQ:function hQ(a,b){this.a=a
this.b=6
this.c=b},
tR(a){var s=B.d.Z(a,0,1)
if(s<=0.5)return A.tk(4491468,16777215,s*2)
return A.tk(16777215,16759637,(s-0.5)*2)},
tS(a){var s=B.d.Z(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).ga5()},
tk(a,b,c){var s,r=new A.oJ(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.i4()
s=r.$1(8)
if(typeof s!=="number")return s.i4()
r=r.$1(0)
if(typeof r!=="number")return A.jZ(r)
return(q<<16|s<<8|r)>>>0},
oJ:function oJ(a,b,c){this.a=a
this.b=b
this.c=c},
el(a){var s,r,q=A.x(t.N,t.z)
for(s=a.gM(),s=s.gu(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
na:function na(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
nb:function nb(){},
nc:function nc(){},
dz:function dz(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b){this.a=a
this.b=b},
nf:function nf(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
ng:function ng(){},
nh:function nh(){},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kE:function kE(a){this.a=a
this.b=null},
uK(a){var s=A.f([],t.kG)
s=new A.kR(A.Z(a,"div","door",null),s)
s.it(a)
return s},
kR:function kR(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
kS:function kS(a,b){this.a=a
this.b=b},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b},
uU(a){var s=new A.kX(a,A.e(a.createElement("div")))
s.bI(a)
s.iu(a)
return s},
kX:function kX(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
kY:function kY(a){this.a=a},
v5(a){var s=new A.lq(a,A.e(a.createElement("div")))
s.bI(a)
s.iv(a)
return s},
lq:function lq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lr:function lr(a){this.a=a},
lV:function lV(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
lW:function lW(a){this.a=a},
lX:function lX(a){this.a=a},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(){},
m_:function m_(){},
Z(a,b,c,d){var s=A.e(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
t9(a){var s,r,q,p=A.e(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.f([],t.kG)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
ff:function ff(){},
mC:function mC(a){this.a=a
this.b=null},
vM(a){var s=new A.n7(a,A.e(a.createElement("div")))
s.bI(a)
s.iA(a)
return s},
n7:function n7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
n8:function n8(a,b,c){this.a=a
this.b=b
this.c=c},
uq(a){var s,r,q,p,o,n,m,l,k,j,i=A.f([],t.od)
for(s=a.d,s=new A.V(s,A.o(s).i("V<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gM(),n=n.gu(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.bP(p+m+":"+k,m,l.a,l.b,j))}}B.a.X(i,new A.kb())
return new A.ka(A.an(i,t.B),A.a5(t.N))},
bP:function bP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ka:function ka(a,b){this.a=a
this.b=b},
kc:function kc(){},
kb:function kb(){},
w1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.hv
s=t.g
r=A.x(s,t.kz)
q=A.o(e).i("ag<1>")
p=A.K(new A.ag(e,q),q.i("n.E"))
B.a.a0(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.p)(p),++l){k=p[l]
for(j=e.h(0,k).gM(),j=j.gu(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bc(new A.bs(B.hh,k+" has an out-of-range authored day "+h+"."))
g=A.w0(k,h,i.b,m)
if(g instanceof A.bc)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.l(0,new A.bb(k,h,f.a,f.b),o.a(g).a)}}return new A.j0(new A.j_(r,A.a5(t.N),A.a5(s),A.f([],t.bl),B.C))},
w0(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.x(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bj[p]
n=o.b
m=n+"."
l=A.f([],q)
for(k=a0.gM(),k=k.gu(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.Y(h,m))continue
g=A.my(B.b.bH(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bc(new A.bs(B.hi,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.bo
B.a.k(l,new A.bC(g,i.b,f))}if(l.length===0)continue
B.a.X(l,new A.nu())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bc(new A.bs(B.ce,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.bc(new A.bs(B.ce,a+" day "+s+" has no authored tiers."))
return new A.jp(c)},
j_:function j_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
ny:function ny(a){this.a=a},
nx:function nx(a){this.a=a},
nv:function nv(a){this.a=a},
nw:function nw(){},
nu:function nu(){},
j0:function j0(a){this.a=a},
jp:function jp(a){this.a=a},
yt(a){var s,r,q,p=A.a5(t.N)
for(s=new A.V(a,A.o(a).i("V<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gal(),q=q.gu(q);q.m();)if(q.gp().gP().O(0,new A.p_())){p.k(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.a0(s)
return s},
ys(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.l
s=t.N
r=A.aw(b,!0,s)
B.a.a0(r)
q=new A.ep()
q.cz((a^913741)>>>0)
p=q.an(4)
if(!(p>=0&&p<4))return A.d(B.bi,p)
o=B.bi[p]
n=r.length
n=o>n?n:o
if(n===0)return B.l
m=A.aw(r,!0,s)
B.a.cv(m,q)
s=A.nd(m,0,A.dO(n,"count",t.S),A.L(m).c).be(0)
B.a.a0(s)
return s},
p_:function p_(){},
rt(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aI(r)||!A.aI(q)||!A.aI(p)||r<1||q<0||q>23||p<0)return null
return new A.bb(s,r,q,p)},
w_(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a5(t.N)
for(s=t.j,q=J.M(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a5(t.g)
for(s=J.M(s.a(a.h(0,j)));s.m();){n=A.rt(s.gp())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.up(m)
if(!s&&l==null)return i
return new A.j1(r,o,l)},
up(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.rt(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aI(p))if(!(p<0))if(A.bK(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.e9(new A.Q(B.bj,t.nw.a(new A.k7(r)),t.na),t.kM)
k=A.e9(new A.Q(B.eI,t.bQ.a(new A.k8(q)),t.cB),t.nq)
m=o==null
j=m?h:A.e9(new A.Q(B.ef,t.hg.a(new A.k9(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.hi(s,l,k,p,j,n)},
b5:function b5(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
br:function br(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
cv:function cv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c7:function c7(a,b){this.a=a
this.b=b},
bs:function bs(a,b){this.a=a
this.b=b},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
nt:function nt(){},
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
nz:function nz(){},
bc:function bc(a){this.a=a},
iY:function iY(a){this.a=a},
iX:function iX(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
p6(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$p6=A.b2(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.i(A.e(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.D.b=c3
$.q8=A.i(A.e(c2.document).getElementById("fps"))
$.be.b=$.ua().bG(A.no().gbE().h(0,"renderer"))
A.xn()
a6=$.D.j()
a7=A.a(A.e(c2.window).innerWidth)>0?A.a(A.e(c2.window).innerWidth):800
a6.width=a7
a7=$.D.j()
a6=A.a(A.e(c2.window).innerHeight)>0?A.a(A.e(c2.window).innerHeight):600
a7.height=a6
n=A.i(c3.getContext("webgl2"))
if(n==null){$.be.b=new A.dY(B.a0,$.be.j().b,$.be.j().c,!0,"webgl2 unavailable")
h=B.ae.kj($.be.j())
h.aJ()
$.cx.b=h
A.tp()
A.d_("no-webgl2")
c2=A.i(A.e(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.be.j().a===B.a1){a6=t.dg
a7=t.N
a8=t.hL
a9=t.p9
b0=t.fP
b1=new A.fR(n,A.a($.D.j().width),A.a($.D.j().height),A.f([],a6),A.x(a7,t.l0),A.f([],t.jj),A.x(a7,a8),A.x(a7,a9),A.x(a7,a8),A.x(a7,a9),A.f([],a6),A.f([],t.jU),B.ep,A.x(a7,t.lu),A.x(a7,b0),A.x(a7,b0),B.dz,B.fi)}else b1=new A.eo(n,A.a($.D.j().width),A.a($.D.j().height),A.no().gbE().h(0,"render")==="legacy",$.be.j().d,$.be.j().e)
m=b1
$.bL=m instanceof A.fR?m:null
$.jP=m instanceof A.eo?m:null
a6=B.ae.d_($.be.j(),m)
a6.aJ()
$.cx.b=a6}catch(c5){l=A.ab(c5)
a6=$.be.j()
$.be.b=new A.dY(B.a0,!0,a6.c,!0,"pixeldart initialization failed")
$.jP=new A.eo(n,A.a($.D.j().width),A.a($.D.j().height),A.no().gbE().h(0,"render")==="legacy",!0,$.be.j().e)
a6=B.ae.d_($.be.j(),$.jP)
a6.aJ()
$.cx.b=a6
$.D.j().setAttribute("data-renderer-error",A.q(l))}A.tp()
p=4
A.d_("initializing")
$.bH.b=new A.kG(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.qi=A.aY(A.e(A.e(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bH.j()
a6.f=$.qi?0.5:1
a6=A.e(c2.window)
a7=t.N
a8=A.e(a6.document)
a9=new A.i_(a8,A.a5(a7),A.a5(a7))
a6.addEventListener("keydown",A.al(a9.gjh()))
a6.addEventListener("keyup",A.al(a9.gjj()))
a6.addEventListener("mousemove",A.al(a9.gjn()))
a8.addEventListener("pointerlockchange",A.al(a9.gjl()))
$.bw.b=a9
$.rW.b=new A.hY(A.f([],t.oX),t.lv)
a9=$.D.j()
a6=A.a(A.e(c2.window).innerWidth)>0?A.a(A.e(c2.window).innerWidth):800
a9.width=a6
a6=$.D.j()
a8=A.a(A.e(c2.window).innerHeight)>0?A.a(A.e(c2.window).innerHeight):600
a6.height=a8
A.d_("renderer")
if($.be.j().a===B.a0){a6=$.jP
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.j()}$.eE=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.c(h)}}A.d_("text")
a6=$.k2()
s=7
return A.a7(a6.bC(),$async$p6)
case 7:k=a6.lB()
j=A.w1(k)
if(!(j instanceof A.j0)){i=t.cq.a(j).a
h=i.b
throw A.c("Failed to build visitors: "+h)}$.aG.b=j.a
$.jJ.b=A.uq(k)
h=A.x(a7,t.a)
for(a8=t.j,b3=0;b3<5;++b3){g=B.t[b3]
a9=A.G(g)
b0=a6.c
b0===$&&A.j()
b4=b0.h(0,a9)
a9=a8.b(b4)?A.aw(b4,!0,a7):B.l
J.bO(h,g,a9)}f=A.w2(h)
$.q1.b=new A.kF(B.cF)
e=$.q1.j().lc(new A.p7(f))
if(e.a==null){h=B.aU.an(2147483647)
if(!isFinite(480))A.k(A.av(480,"daySeconds","must be finite and > 0"))
b5=new A.hQ(1,480)
b5.b=10
b6=A.r_(f)
h=A.qQ(42,1+h,A.qS(42),b5,b6,A.qM(6,16,b6,null,6,B.eq,b5),new A.hH(0,0,0,!1))}else{h=e.a
h.toString
h=A.qR(h,f)}$.S.b=h
$.cx.j().aE(A.pG($.S.j().gdL()))
if(e.b!=null){h=e.b
h.toString
A.eF(h)}h=$.aG.j()
a6=A.ys($.S.j().b,A.yt(k.b))
h.sig(A.mb(a6,A.L(a6).c))
A.d_("house")
$.X.b=$.S.j().c
a6=$.bL
if(a6!=null)a6.jX($.X.j())
$.dL.b=$.S.j().d
h=new A.b(5.5,1.65,3.5)
$.qr=$.qh=$.qo=h
d=h.a8(0,new A.b(0,1.3499999999999999,0))
$.h7.b=new A.hu(d,J.qC(d,new A.b(0,1.2000000000000002,0)))
$.ex.b=new A.l_()
$.bf.b=A.re()
$.aH="hall"
h=e.a
c=A.vt(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.kO($.X.j())){h=c.b
$.qr=$.qh=$.qo=h
$.bM=c.c
$.dM=c.d
$.aH=c.a
b=h.a8(0,new A.b(0,1.3499999999999999,0))
h=$.h7.j()
h.sjY(b)
h.b=J.qC(b,new A.b(0,1.2000000000000002,0))
h=$.h7.j()
a6=$.X.j()
a9=c.e
b0=c.f
h.lq($.aH,$.eL(),a6,b0,a9)
A.eF("restored position")}h=$.S.j().e
a6=$.dL.j()
$.S.j()
$.jL.b=new A.lP(h,a6)
a6=A.e(c2.document)
h=$.S.j().e
a9=$.dL.j()
b0=$.jL.j()
b7=A.e(a6.createElement("div"))
b0=new A.lV(h,a9,b0,a6,b7)
b0.bI(a6)
b7.setAttribute("aria-label","The Journal")
A.e(b7.appendChild(A.Z(a6,"div","journal-title","The Journal")))
b8=A.Z(a6,"div","journal-pages",null)
a9=A.Z(a6,"div","page page-left",null)
b0.y!==$&&A.y()
b0.y=a9
h=A.Z(a6,"div","page page-right",null)
b0.z!==$&&A.y()
b0.z=h
A.e(b8.appendChild(a9))
A.e(b8.appendChild(h))
A.e(b7.appendChild(b8))
A.e(b7.appendChild(b0.iH()))
b9=A.Z(a6,"div","tape-roll",null)
A.e(b9.style).setProperty("width","8rem")
h=A.Z(a6,"div","tape-fill",null)
b0.as!==$&&A.y()
b0.as=h
A.e(b9.appendChild(h))
A.e(b7.appendChild(b9))
c0=A.Z(a6,"div","consult",null)
A.e(c0.appendChild(A.Z(a6,"div","consult-label","Cite an entry")))
h=A.Z(a6,"div","entry-picker",null)
b0.at!==$&&A.y()
b0.at=h
a9=A.Z(a6,"div","consult-result",null)
b0.ax!==$&&A.y()
b0.ax=a9
A.e(c0.appendChild(h))
A.e(c0.appendChild(a9))
A.e(b7.appendChild(c0))
c1=A.i(a6.documentElement)
if(t.m.b(c1)){A.e(c1.style).setProperty("--shake-max-deg","3deg")
A.e(c1.style).setProperty("--shake-max-px","2px")}$.ey.b=b0
$.ey.j().scl(new A.p8())
h=A.e(c2.document)
a6=A.Z(h,"div","prompt",null)
A.e(a6.style).setProperty("transition-duration","0.3s")
A.e(A.i(h.body).appendChild(a6))
$.rX.b=new A.mC(a6)
a6=A.e(c2.document)
h=A.Z(a6,"div","broadcast",null)
A.e(A.i(a6.body).appendChild(h))
$.rV.b=new A.kE(h)
h=A.e(c2.document)
a6=A.Z(h,"div","ambient-notice",null)
A.e(A.i(h.body).appendChild(a6))
$.q_.b=new A.kd(a6)
a6=A.uK(A.e(c2.document))
a6.sl1(A.yK())
a6.sl3(A.yM())
a6.sl2(A.yL())
$.aF.b=a6
a6=e.a
a=A.w_(a6==null?null:a6.c.h(0,"visitors"))
if(a!=null&&$.aG.j().lp(a))A.xM()
h=$.jJ.j()
a6=e.a
h.lr(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(a8.b(a0))for(h=J.M(a0);h.m();){a1=h.gp()
if(A.aI(a1))$.oQ.k(0,a1)}h=A.vM(A.e(c2.document))
h.sl5(new A.p9())
h.scl(new A.pc())
$.jM.b=h
h=A.v5(A.e(c2.document))
h.scl(new A.pd())
$.jK.b=h
h=A.uU(A.e(c2.document))
h.scl(new A.pe())
h.sl4(new A.pf())
$.q0.b=h
h=e.a
a2=A.uW(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.to(a2)
a3=$.eE
if(a3!=null){A.d_("world")
h=$.X.j()
a6=a3
a7=new A.mX(h,a6,A.x(a7,t.J))
a7.iz(h,a6)
$.on=a7}h=B.b.v(A.G(A.e(A.e(c2.window).location).search),"shaders=live")
$.tA=h
if(h){h=$.eE
if(h!=null)h.bc()}A.tr()
A.e(c2.window).addEventListener("resize",A.al(new A.pg()))
A.e(c2.window).addEventListener("keydown",A.al(new A.ph()))
A.e(c2.window).addEventListener("keyup",A.al(new A.pi()))
A.e(c2.window).addEventListener("keydown",A.al(new A.pj()))
A.e(c2.window).addEventListener("click",A.al(new A.pa()))
$.D.j().addEventListener("click",A.al(new A.pb()))
A.eC()
A.d_("raf")
A.a(A.e(c2.window).requestAnimationFrame(A.al(A.tK())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ab(c4)
a5=A.cc(c4)
A.oL(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$p6,r)},
xn(){var s=v.G
A.e(s.window).addEventListener("error",A.al(new A.oH()))
A.e(s.window).addEventListener("unhandledrejection",A.al(new A.oI()))},
d_(a){if($.t3===a)return
$.t3=a
$.D.j().setAttribute("data-boot-phase",a)},
tp(){var s,r,q=$.cx.j().gb7(),p=$.D.j(),o=A.no().gbE().h(0,"renderer")
if(o==null)o="legacy"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.x))
p.setAttribute("data-renderer-diagnostics",B.p.b8(q.C(),null))
p=$.bL
s=p==null?null:p.x
if(s!=null)$.D.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jP
r=p==null?null:p.y
if(r!=null)$.D.j().setAttribute("data-renderer-frame-submits",A.q(r))},
qm(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bf.j().a!==B.x){A.eF("save unavailable during rupture")
return}try{r=$.q1.j()
q=$.S.j()
p=t.N
o=t.z
s=A.x(p,o)
n=$.aH
m=$.eL()
l=$.bM
k=$.dM
j=$.h7.j().d
j=j==null?null:j.a.a
i=$.h7.j().d
J.bO(s,"player",new A.ir(n,m,l,k,j,i==null?null:i.b).C())
n=$.aG.j()
m=A.pJ(n.b,p)
l=A.pJ(n.c,t.g)
n=n.e
J.bO(s,"visitors",new A.j1(m,l,n==null?null:new A.hi(n.a,n.b,n.d,n.f,n.e,n.r)).C())
n=$.jJ.j().b
n=A.K(n,A.o(n).c)
B.a.a0(n)
J.bO(s,"ambient",n)
n=A.K($.oQ,A.o($.oQ).c)
B.a.a0(n)
J.bO(s,"unverifiables",n)
n=$.q7
if(n!=null)J.bO(s,"ending",A.T(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.qU(q.c).C()
k=q.d
r.lD(A.rf(s,A.T(["houseSeed",n,"runSeed",m,"house",l,"time",A.T(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C()],p,o),2))
A.eF(a)}catch(h){A.eF("save failed")}},
eF(a){var s=A.i(A.e(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.v3(B.cL,new A.oO(s),t.H)},
oL(a,b){var s,r,q,p
A.d_("error")
s=A.q(a)
r=A.yX(s,"\n"," ")
s=$.q8
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.e(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.D.j().setAttribute("data-boot-error",p)
A.e(s.console).error(p)},
rZ(){if($.q2)return
$.q2=!0
var s=$.h8
if(s!=null)s.hJ()
B.a.k($.ca,"arm")},
eC(){var s=0,r=A.b1(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$eC=A.b2(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a7(A.eB(),$async$eC)
case 2:o=null
q=4
s=7
return A.a7(A.ay(A.e(A.e(v.G.window).fetch("res/manifest.json")),t.m),$async$eC)
case 7:n=b
i=A
s=8
return A.a7(A.ay(A.e(n.json()),t.X),$async$eC)
case 8:o=i.e(b)
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
if(k!=null&&typeof k==="string"){l=A.i(A.e(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=A.G(k)}s=9
return A.a7(A.lf(A.f([A.oK(o),A.oG(o)],t.iw),t.H),$async$eC)
case 9:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$eC,r)},
eB(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eB=A.b2(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.em[f]
p=7
s=10
return A.a7(A.ay(A.e(A.e(i.window).fetch(n)),h),$async$eB)
case 10:m=a0
s=11
return A.a7(A.ay(A.e(m.text()),g),$async$eB)
case 11:l=a0
k=A.ut(B.p.bp(l,null))
e=$.X.b
if(e===$.X)A.k(A.a_(""))
k.dV(e)
e=$.D.b
if(e===$.D)A.k(A.a_(""))
e.setAttribute("data-house-manifest","validated")
e=$.D.b
if(e===$.D)A.k(A.a_(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.a7(A.jR(),$async$eB)
case 12:s=13
return A.a7(A.jS(),$async$eB)
case 13:s=1
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
case 5:$.D.j().setAttribute("data-house-manifest","unavailable")
A.e(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$eB,r)},
jR(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$jR=A.b2(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.eh[c]
p=7
s=10
return A.a7(A.ay(A.e(A.e(g.window).fetch(n)),f),$async$jR)
case 10:m=b1
s=11
return A.a7(A.ay(A.e(m.text()),e),$async$jR)
case 11:l=b1
b=B.p.bp(l,null)
b=h.b(b)?b:A.cy("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.cy("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aI(a)?a:A.cy("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.cy("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aw(a,!0,d):A.cy("assets is not a list")
a4=A.L(a3)
a5=a4.i("R<1,c_>")
a3=A.K(new A.R(a3,a4.i("c_(1)").a(A.yF()),a5),a5.i("a2.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aw(a,!0,d):A.cy("placements is not a list")
a5=A.L(a4)
a6=a5.i("R<1,cj>")
a4=A.K(new A.R(a4,a5.i("cj(1)").a(A.yG()),a6),a6.i("a2.E"))
a4.$flags=1
k=new A.ly(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.k(A.a_(""))
k.dV(a1)
$.q9=k
a1=$.bL
if(a1!=null)a1.hY(k)
a1=$.D.b
if(a1===$.D)A.k(A.a_(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.D.b
if(a1===$.D)A.k(A.a_(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.D.b
if(a1===$.D)A.k(A.a_(""))
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
case 5:$.D.j().setAttribute("data-house-inventory","unavailable")
A.e(g.console).warn("authored house inventory unavailable: "+A.q(a8))
case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$jR,r)},
jS(){var s=0,r=A.b1(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$jS=A.b2(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.q9
if(b2==null){s=1
break}n=null
e=t.N,d=t.lC,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.ez[a4]
p=7
s=10
return A.a7(A.ay(A.e(A.e(a1.window).fetch(m)),a2),$async$jS)
case 10:l=b5
s=11
return A.a7(A.ay(A.e(l.text()),e),$async$jS)
case 11:k=b5
a5=B.p.bp(k,null)
a5=a0.b(a5)?a5:A.eA("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aw(a6,!0,a3):A.eA("emitters is not a list")
a8=A.L(a7)
a9=a8.i("R<1,bZ>")
a7=A.K(new A.R(a7,a8.i("bZ(1)").a(A.yV()),a9),a9.i("a2.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aI(a6)?a6:A.eA("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.eA("sourceRef is not a string")
j=new A.lD(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.k(A.a_(""))
j.lz(a7,b2)
$.td=j
i=A.x(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.p)(a7),++b0){h=a7[b0]
for(a9=h.f.gM(),a9=a9.gu(a9);a9.m();){g=a9.gp()
J.bO(i,h.a+":"+g.a,A.f([g.b],c))}}a7=$.X.b
if(a7===$.X)A.k(A.a_(""))
a8=A.ur(i)
a9=new A.kn(a7,A.ce(B.bx,e,d),a8)
a9.ir(a8,a7,B.bx)
$.q3=a9
a7=$.D.b
if(a7===$.D)A.k(A.a_(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.D.b
if(a7===$.D)A.k(A.a_(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.D.b
if(a7===$.D)A.k(A.a_(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.D.b
if(a7===$.D)A.k(A.a_(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ab(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.q3=null
$.D.j().setAttribute("data-audio-planner","unavailable")
$.D.j().setAttribute("data-house-soundscape","unavailable")
A.e(a1.console).warn("authored house soundscape unavailable: "+A.q(n))
case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$jS,r)},
q6(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.M(t.a.b(s)?s:new A.bR(s,A.L(s).i("bR<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.G(q))}},
oG(a){var s=0,r=A.b1(t.H),q,p,o,n,m
var $async$oG=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.x(n,n)
n=a==null
A.q6(A.i(n?null:a.sfx),m,"")
A.q6(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.G(p))
s=2
return A.a7(A.kq(m,$.X.j()),$async$oG)
case 2:o=c
$.h8=o
if($.q2)o.hJ()
return A.b_(null,r)}})
return A.b0($async$oG,r)},
oK(a){var s=0,r=A.b1(t.H),q,p,o
var $async$oK=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.x(p,p)
A.q6(A.i(a==null?null:a.tex),o,"")
p=$.eE
p=p==null?null:p.au(o)
if(p==null)p=A.pu(t.H)
q=$.bL
q=q==null?null:q.au(o)
s=2
return A.a7(A.lf(A.f([p,q==null?A.pu(t.H):q],t.iw),t.H),$async$oK)
case 2:return A.b_(null,r)}})
return A.b0($async$oK,r)},
tr(){var s,r,q=v.G,p=A.a(A.e(q.window).innerWidth),o=A.a(A.e(q.window).innerHeight)
q=$.D.j()
s=p>0?p:800
q.width=s
s=$.D.j()
q=o>0?o:600
s.height=q
q=$.eE
if(q!=null)q.aC(A.a($.D.j().width),A.a($.D.j().height))
$.cx.j().aC(A.a($.D.j().width),A.a($.D.j().height))
q=$.bL
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.D.j().setAttribute("data-renderer-surface",r)},
xJ(c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
A.bI(c2)
try{s=c2
if(!$.tc){$.qe=s
$.tc=!0}e=s
d=$.qe
if(typeof e!=="number")return e.a8()
r=(e-d)/1000
$.qe=s
e=r
if(typeof e!=="number")return e.ct()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.a7()
if(e>0.25)r=0.25
A.y4(r)
if(!$.qf){e=$.og
d=r
if(typeof d!=="number")return A.jZ(d)
d=$.og=e+d
q=0
e=t.mv
for(;;){if(d>=0.008333333333333333){c=q
if(typeof c!=="number")return c.ct()
c=c<10}else c=!1
if(!c)break
$.qh=$.eL()
d=$.S.b
if(d===$.S)A.k(A.a_(""))
d.jT(0.008333333333333333)
d=$.ub()
c=$.S.b
if(c===$.S)A.k(A.a_(""))
c=c.gam()
b=$.S.b
if(b===$.S)A.k(A.a_(""))
d=d.cV(c.a,b.gam().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){p=d[a]
B.a.k($.ca,"clock:"+p.a)}d=$.uc()
c=$.S.b
if(c===$.S)A.k(A.a_(""))
c=c.gam()
b=$.S.b
if(b===$.S)A.k(A.a_(""))
d=d.cV(c.a,b.gam().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.p)(d),++a){o=d[a]
B.a.k($.ca,"service:"+o.a+":"+o.b)}A.y7()
d=$.aG.b
if(d===$.aG)A.k(A.a_(""))
c=$.S.b
if(c===$.S)A.k(A.a_(""))
d.f=c.r.c>=0.5
d=d.d
a0=A.aw(d,!1,e)
a0.$flags=3
a1=a0
B.a.H(d)
if(a1.length!==0){d=$.S.b
if(d===$.S)A.k(A.a_(""))
d.le(a1)}A.y3()
A.y6()
A.y5()
A.y2(0.008333333333333333)
d=$.ex.b
if(d===$.ex)A.k(A.a_(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.bf.b
if(d===$.bf)A.k(A.a_(""))
n=d.a!==B.x
c=$.X.b
if(c===$.X)A.k(A.a_(""))
d.jU(0.008333333333333333,c)
if(n){d=$.bf.b
if(d===$.bf)A.k(A.a_(""))
d=d.e}else d=!1
if(d)A.ts(!0)
d=$.og-0.008333333333333333
$.og=d
c=q
if(typeof c!=="number")return c.T()
q=c+1}m=B.d.Z(d/0.008333333333333333,0,1)
e=$.qr=A.rs($.ud(),$.eL(),m)
l=$.h8
if(l!=null){d=l
c=Math.sin($.bM)
b=Math.cos($.bM)
a2=A.e(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aJ(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.i_($.aH)
for(e=$.ca.length,a=0;a<$.ca.length;$.ca.length===e||(0,A.p)($.ca),++a){k=$.ca[a]
A.x9(l,k)}B.a.H($.ca)
$.D.j().setAttribute("data-audio-spatial-active",""+l.ay.a)}}j=$.eE
if(j!=null){$.bH.j().dH($.hf(),$.bM,$.dM)
e=$.bg===$.ey.j()?1:0
j.c6=e
$.tj=r
$.cx.j().aE(A.pG($.S.j().gdL()))}else if($.be.j().a===B.a1){$.bH.j().dH($.hf(),$.bM,$.dM)
e=$.bL
if(e!=null){d=$.bH.j()
c=d.a
a3=new A.z(c.a,c.b,c.c)
c=d.b
a4=new A.z(c.a,c.b,c.c)
d=d.c
a5=e.b/e.c
a6=A.r6(a3,a4,new A.z(d.a,d.b,d.c))
a7=A.pC(a5,60,1.0471975511965976,0.1)
e.go=new A.e_(a6,a7,a7.W(0,a6),a3,a4,0.1,60,a5)}e=$.bL
if(e!=null)e.i3($.X.j(),$.aH)
e=$.bL
if(e!=null)e.hZ($.X.j(),$.aH,$.hf(),$.dL.j().gbi(),Math.sin(3.141592653589793*$.dL.j().gbi()))
if($.ti!==$.bf.j().a){$.ti=$.bf.j().a
$.qj=$.qj+1}e=$.bL
if(e!=null){d=s
if(typeof d!=="number")return d.lH()
d/=1000
c=$.qj
b=A.a(Math.max(0,$.S.j().b))
if(!isFinite(d)||d<0)A.k(A.av(d,"timeSeconds",null))
if(b<0)A.k(A.w("frame clock seeds must be non-negative",null))
e.k4=d
e.ok=c
e.p1=b}e=$.bL
if(e!=null){d=$.bf.j()
c=$.qi
a8=d.a
a9=d.ge3()
b0=a9>0?B.d.Z(d.b/a9,0,1):0
d=a8.a
b1=d>=3
b2=a8===B.ay
b=a8===B.I?0.45:1
if(d>=1)b3=a8===B.P?b0:1
else b3=0
if(d>=2)d=a8===B.aw?b0:1
else d=0
b4=b1?320:0
b5=b1?5:8
b6=b2?1:0
b7=b2?b0:0
b8=b2?b0:0
b9=b2?b0:0
c0=b2?b0:0
e.k1=new A.it(b,b3,d,b4,b5,b6,b7,b8,b9,c0,b2?b0:0,c)}$.cx.j().aE(A.pG($.S.j().gdL()))
i=$.bL
if(i!=null){h=i.gkH()
if(h!=null){$.D.j().setAttribute("data-renderer-frame-stats",h)
e=$.D.j()
d=i.gkG()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}}A.d_("running")
e=$.bw.j()
e.e=e.d=0
e.c.H(0)
A.a(A.e(v.G.window).requestAnimationFrame(A.al(A.tK())))}catch(c1){g=A.ab(c1)
f=A.cc(c1)
A.oL(g,f)}},
x9(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.l8("confirm")
break
case"ambient-winnow":a.dJ("winnow",0.28)
break
case"ambient-gate":a.dJ("gate",0.22)
break
case"clock:tick":A.qg(a,p,"tick")
break
case"clock:chime":A.qg(a,p,"chime")
break
default:if(B.b.Y(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.qg(a,q,s[2])}}}},
qg(a,b,c){var s,r,q,p,o,n,m,l,k=$.td,j=$.q9
if(k==null||j==null)return
s=k.ks(b)
r=$.X.j()
q=j.c
p=s.b
o=r.e.h(0,p)
if(o==null)A.k(A.l("sound room missing: "+p))
n=o.d.T(0,s.d.W(0,q))
m=$.q3
if(m==null){r=s.f.h(0,c)
if(r==null)r=A.k(A.l("sound emitter "+s.a+" has no cue for "+c))
a.l9(r,n,s.e,p)
return}r=b+":"+c
q=$.t2
$.t2=q+1
p=A.us(B.cj,r,r+":"+q,n,A.wZ(b,c),q,p)
q=$.aH
l=m.l7(p,A.uo($.hf(),q))
a.hD(l.b,l.e,s.e,1,l.d,l.w,l.r)},
wZ(a,b){var s,r,q,p=$.S.j().b
for(s=new A.d5(a+":"+b),r=t.gS,s=new A.bn(s,s.gq(0),r.i("bn<J.E>")),r=r.i("J.E");s.m();){q=s.d
p=A.tI(p,q==null?r.a(q):q)}return p},
y4(a){var s=$.q8
if(s==null)return
s.textContent=""+B.d.aM(a>0?1/a:0)+" fps"},
y2(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.tv||$.bg!=null||$.aF.j().z){$.k1().a=new A.b(0,0,0)
return}s=$.bw.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga5():p
n=$.bw.j().d
m=$.bw.j().e
$.bM=$.bM+n*0.0028
s=$.dM-m*0.0028
$.dM=s
$.dM=B.d.Z(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.bM)+l*Math.sin($.bM),0,l*Math.cos($.bM)-s*Math.sin($.bM)).ga5().W(0,2)
s=$.k1()
if(!isFinite(a1)||a1<0)A.k(A.av(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.av(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.T(0,k.a8(0,i).W(0,1-l))
s.a=l
h=$.h7.j().l_($.X.j(),$.aH,$.eL(),l.W(0,a1))
$.qo=h.a
if($.bf.j().a!==B.az&&$.bf.j().a!==B.I)$.aH=h.b
$.bH.j().dH($.eL(),$.bM,$.dM)
s=$.bH.j()
l=$.X.j()
g=A.yR(s,$.aH,l)
$.rX.j().i5(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.qz($.bH.j(),$.X.j(),$.aH)
break
case 1:e=A.tO($.bH.j(),$.X.j(),$.aH)
break
case 2:d=A.tP($.bH.j(),$.X.j(),$.aH)
break
case 3:break}s=$.rV.j()
c=$.k2().hT($.S.j().gam().a)
l=c==null?a0:c.h(0,"status")
s.dS(l,$.aH==="living-room")
if($.bw.j().c.ah(0,"KeyE")){s=$.S.j().gam()
l=e==null
i=l?a0:e.a
b=B.a.a3($.aG.j().f2(21),$.aG.j().gkP())
if(s.a===21&&i==="front-door"&&b){s=$.bf.j()
$.X.j()
s.ih(B.cE,A.an(s.c,t.N))
B.a.k($.ca,"collapse")
A.eF("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.S.j().ie(1,1)){f.d=!0
s=$.ex.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.h8
if(s!=null)s.bW()}else if(d!=null)if(d.w){s=$.S.j()
if(s.f.cw(1))d.w=!1}else d.w=!0}s=$.ex.j()
if(s.a!=null&&s.b>0){a=$.ex.j().a
if(a!=null&&A.qz($.bH.j(),$.X.j(),$.aH)!==a){s=$.ex.j()
s.a=null
s.b=0}}},
y7(){var s,r,q,p,o,n,m,l,k,j=null
if($.aF.j().z||$.bg!=null||$.aG.j().e!=null)return
s=$.S.j().gam()
for(r=$.aG.j().f2(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o){n=r[o]
m=$.aG.b
if(m===$.aG)A.k(A.a_(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aG.b
if(r===$.aG)A.k(A.a_(""))
l=r.jZ(n)
if(!(l instanceof A.iY))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.qX(A.e(v.G.document),"exitPointerLock",j,j,j,j)
$.k1().a=new A.b(0,0,0)
r=$.aF.b
if(r===$.aF)A.k(A.a_(""))
r.e1(n.a,k)
return}},
xM(){var s=$.aG.j().e,r=s==null,q=r?null:s.gc2()
if(r||q==null)return
$.aF.j().e1(s.a.a,q)
if(s.d!==B.J){$.aF.j().cu(q)
A.qn()}A.eF("restored visitor")},
y3(){var s,r,q,p,o=$.S.j().gam(),n=$.jJ.j().kq(o.a,o.b)
if(n.length===0)return
s=B.a.gaI(n)
$.jJ.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.q_.j().e0(q,s.e)
p=A.yd(r)
if(p!=null)B.a.k($.ca,"ambient-"+p)},
y6(){var s,r,q,p,o=$.S.j().gam()
if(o.b<20)return
s=o.a
if(!$.oQ.k(0,s))return
r=$.k2().f
r===$&&A.j()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.aw(q,!0,t.N):B.l
p=A.yP(r,$.S.j().b,s)
if(p!=null)$.q_.j().e0("noticed",p)},
ts(a){var s,r,q,p,o
if($.q7!=null)return
s=$.S.j().gam()
r=$.S.j().r.c
q=$.S.j().e.b
p=A.o(q).i("aB<2>")
o=A.uV(new A.kW(s.a,1-r,new A.Q(new A.aB(q,p),p.i("t(n.E)").a(new A.oM()),p.i("Q<n.E>")).gq(0),$.S.j().r.d,a))
if(o==null)return
A.to(o)
A.qm("ending recorded")},
to(a){var s,r,q
$.q7=a
$.tv=!0
$.k1().a=new A.b(0,0,0)
$.bg=$.q0.j()
s=$.q0.j()
r=$.k2().w
r===$&&A.j()
q=r.h(0,a.a.b)
s.i7(a,t.j.b(q)?A.aw(q,!0,t.N):B.l)},
x3(a){var s,r,q,p,o
A:{if("open"===a){s=B.V
break A}if("chain"===a){s=B.aX
break A}if("through-door"===a){s=B.aY
break A}if("letterbox"===a){s=B.aZ
break A}s=B.K
break A}r=$.aG.j().kc(s)
if(s===B.V){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.h8
if(p!=null)p.bW()}}if(!(r instanceof A.iX)||s===B.K){$.aF.j().cd()
$.bw.j().aL($.D.j())
return}o=r.a.gc2()
if(o==null){A.q5()
$.aF.j().cd()
$.bw.j().aL($.D.j())
return}$.aF.j().cu(o)
A.qn()},
x6(){var s,r=$.aG.j().jV()
if(!(r instanceof A.fx)||r.b){A.q5()
$.aF.j().cd()
$.bw.j().aL($.D.j())
return}s=r.a.gc2()
if(s==null){A.q5()
$.aF.j().cd()
$.bw.j().aL($.D.j())
return}$.aF.j().cu(s)
A.qn()},
qn(){var s,r,q,p,o=$.aF.j(),n=A.e(v.G.document),m=A.f([],t.fR)
for(s=$.jL.j().dZ(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
m.push(new A.bF(p.a,B.a.gR(p.c).n(0)))}o.i6(n,m)},
x4(a){var s,r,q,p=$.aG.j().kd(a,!0,$.jL.j())
if(p==null)return
s=$.jL.j().kk(p,B.e1)
r=$.aF.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.j()
r.textContent=q},
q5(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.h8
if(s!=null)s.bW()}},
y5(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bf.b
if(k===$.bf)A.k(A.a_(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fR:function fR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
o3:function o3(a){this.a=a},
o4:function o4(a){this.a=a},
eo:function eo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p7:function p7(a){this.a=a},
p8:function p8(){},
p9:function p9(){},
pc:function pc(){},
pd:function pd(){},
pe:function pe(){},
pf:function pf(){},
pg:function pg(){},
ph:function ph(){},
pi:function pi(){},
pj:function pj(){},
pa:function pa(){},
pb:function pb(){},
oH:function oH(){},
oI:function oI(){},
oO:function oO(a){this.a=a},
oM:function oM(){},
qX(a,b,c,d,e,f){var s=a[b]()
return s},
qY(a,b,c){var s=null
return c.a(A.qX(a,b,s,s,s,s))},
uI(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
uH(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
tJ(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
pn(a,b){var s=B.d.aB(a),r=A.tJ(s,b),q=A.tJ(s+1,b),p=B.d.Z(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
tI(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
yd(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
z_(a){var s,r,q,p,o,n,m,l
a.E()
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
return new A.bT(B.T,p,new Uint16Array(A.a3(a.b)),new A.hh(new A.z(s.a,s.b,s.c),new A.z(s.d,s.e,s.f)))},
yq(a){var s,r,q,p,o,n,m,l=B.p.bp(a,null),k=t.f
if(!k.b(l))throw A.c(B.dp)
s=t.N
r=t.z
q=A.aU(l,s,r)
p=A.x(s,t.P)
for(o=0;o<11;++o){n=B.eg[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.x(s,r))
else if(k.b(m))p.l(0,n,A.aU(m,s,r))
else throw A.c(A.ac('text.json section "'+n+'" must be an object',null,null))}return p},
yP(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbg(a)
s=new A.ep()
s.cz((b^274953^c)>>>0)
r=s.an(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.pw.prototype={}
J.i1.prototype={
U(a,b){return a===b},
gG(a){return A.fi(a)},
n(a){return"Instance of '"+A.iv(a)+"'"},
gN(a){return A.cb(A.qb(this))}}
J.i5.prototype={
n(a){return String(a)},
gG(a){return a?519018:218159},
gN(a){return A.cb(t.y)},
$ia1:1,
$it:1}
J.f3.prototype={
U(a,b){return null==b},
n(a){return"null"},
gG(a){return 0},
$ia1:1,
$iaj:1}
J.f4.prototype={$iY:1}
J.cH.prototype={
gG(a){return 0},
gN(a){return B.fQ},
n(a){return String(a)}}
J.iq.prototype={}
J.dx.prototype={}
J.ck.prototype={
n(a){var s=a[$.tV()]
if(s==null)s=a[$.eK()]
if(s==null)return this.ij(a)
return"JavaScript function for "+J.dT(s)},
$idb:1}
J.ea.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.eb.prototype={
gG(a){return 0},
n(a){return String(a)}}
J.r.prototype={
c0(a,b){return new A.bR(a,A.L(a).i("@<1>").D(b).i("bR<1,2>"))},
k(a,b){A.L(a).c.a(b)
a.$flags&1&&A.b3(a,29)
a.push(b)},
lh(a,b){var s
a.$flags&1&&A.b3(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.rc(b,null))
return a.splice(b,1)[0]},
ah(a,b){var s
a.$flags&1&&A.b3(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a8(a[s],b)){a.splice(s,1)
return!0}return!1},
J(a,b){var s
A.L(a).i("n<1>").a(b)
a.$flags&1&&A.b3(a,"addAll",2)
if(Array.isArray(b)){this.iE(a,b)
return}for(s=J.M(b);s.m();)a.push(s.gp())},
iE(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.ap(a))
for(r=0;r<s;++r)a.push(b[r])},
H(a){a.$flags&1&&A.b3(a,"clear","clear")
a.length=0},
bD(a,b,c){var s=A.L(a)
return new A.R(a,s.D(c).i("1(2)").a(b),s.i("@<1>").D(c).i("R<1,2>"))},
aY(a,b){var s,r=A.c0(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.q(a[s]))
return r.join(b)},
bx(a,b,c,d){var s,r,q
d.a(b)
A.L(a).D(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.ap(a))}return r},
cc(a,b,c){var s,r,q,p=A.L(a)
p.i("t(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.ap(a))}p=c.$0()
return p},
S(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
gaI(a){if(a.length>0)return a[0]
throw A.c(A.i2())},
gR(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.i2())},
gbg(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.c(A.i2())
throw A.c(A.ve())},
O(a,b){var s,r
A.L(a).i("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.ap(a))}return!1},
a3(a,b){var s,r
A.L(a).i("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.ap(a))}return!0},
X(a,b){var s,r,q,p,o,n=A.L(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.b3(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.xs()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.a7()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eI(b,2))
if(p>0)this.jy(a,p)},
a0(a){return this.X(a,null)},
jy(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cv(a,b){var s,r,q,p
a.$flags&2&&A.b3(a,"shuffle")
s=a.length
while(s>1){r=b.an(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
ce(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a8(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.a8(a[s],b))return!0
return!1},
gI(a){return a.length===0},
gL(a){return a.length!==0},
n(a){return A.pv(a,"[","]")},
gu(a){return new J.d2(a,a.length,A.L(a).i("d2<1>"))},
gG(a){return A.fi(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.b3(a,"set length","change the length of")
if(b<0)throw A.c(A.aO(b,0,null,"newLength",null))
if(b>a.length)A.L(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.oY(a,b))
return a[b]},
l(a,b,c){A.L(a).c.a(c)
a.$flags&2&&A.b3(a)
if(!(b>=0&&b<a.length))throw A.c(A.oY(a,b))
a[b]=c},
dX(a,b){return new A.bX(a,b.i("bX<0>"))},
hr(a,b){var s
A.L(a).i("t(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gN(a){return A.cb(A.L(a))},
$iE:1,
$in:1,
$iC:1}
J.i3.prototype={
lx(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.iv(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.lT.prototype={}
J.d2.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.p(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iad:1}
J.dh.prototype={
F(a,b){var s
A.bI(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gcg(b)
if(this.gcg(a)===s)return 0
if(this.gcg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcg(a){return a===0?1/a<0:a<0},
aN(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.ax(""+a+".toInt()"))},
k9(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.ax(""+a+".ceil()"))},
aB(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.ax(""+a+".floor()"))},
aM(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.ax(""+a+".round()"))},
Z(a,b,c){if(this.F(b,c)>0)throw A.c(A.qs(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
co(a,b){var s
if(b>20)throw A.c(A.aO(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gcg(a))return"-"+s
return s},
lw(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.c(A.aO(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.ax("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.d(p,1)
s=p[1]
if(3>=r)return A.d(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.W("0",o)},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
V(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
il(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eT(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.eT(a,b)},
eT(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.ax("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cT(a,b){var s
if(a>0)s=this.bV(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jD(a,b){if(0>b)throw A.c(A.qs(b))
return this.bV(a,b)},
bV(a,b){return b>31?0:a>>>b},
gN(a){return A.cb(t.o)},
$iaA:1,
$iv:1,
$iaK:1}
J.f2.prototype={
gN(a){return A.cb(t.S)},
$ia1:1,
$ih:1}
J.i6.prototype={
gN(a){return A.cb(t.i)},
$ia1:1}
J.di.prototype={
bd(a,b,c,d){var s=A.fj(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
a1(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aO(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
Y(a,b){return this.a1(a,b,0)},
B(a,b,c){return a.substring(b,A.fj(b,c,a.length))},
bH(a,b){return this.B(a,b,null)},
hM(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.vi(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.vj(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
W(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.cA)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
l6(a,b,c){var s=b-a.length
if(s<=0)return a
return this.W(c,s)+a},
cf(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aO(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ce(a,b){return this.cf(a,b,0)},
v(a,b){return A.yW(a,b,0)},
F(a,b){var s
A.G(b)
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
gN(a){return A.cb(t.N)},
gq(a){return a.length},
$ia1:1,
$iaA:1,
$ir7:1,
$im:1}
A.cT.prototype={
gu(a){return new A.eO(J.M(this.gaQ()),A.o(this).i("eO<1,2>"))},
gq(a){return J.aT(this.gaQ())},
gI(a){return J.qE(this.gaQ())},
gL(a){return J.uk(this.gaQ())},
S(a,b){return A.o(this).y[1].a(J.k3(this.gaQ(),b))},
n(a){return J.dT(this.gaQ())}}
A.eO.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iad:1}
A.d4.prototype={
gaQ(){return this.a}}
A.fG.prototype={$iE:1}
A.fE.prototype={
h(a,b){return this.$ti.y[1].a(J.aS(this.a,b))},
l(a,b,c){var s=this.$ti
J.bO(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.ul(this.a,b)},
k(a,b){var s=this.$ti
J.hg(this.a,s.c.a(s.y[1].a(b)))},
X(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.nK(this,b)
J.um(this.a,s)},
$iE:1,
$iC:1}
A.nK.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.bR.prototype={
c0(a,b){return new A.bR(this.a,this.$ti.i("@<1>").D(b).i("bR<1,2>"))},
gaQ(){return this.a}}
A.dj.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.d5.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.n3.prototype={}
A.E.prototype={}
A.a2.prototype={
gu(a){var s=this
return new A.bn(s,s.gq(s),A.o(s).i("bn<a2.E>"))},
gI(a){return this.gq(this)===0},
O(a,b){var s,r,q=this
A.o(q).i("t(a2.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.S(0,r)))return!0
if(s!==q.gq(q))throw A.c(A.ap(q))}return!1},
aY(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.S(0,0))
if(o!==p.gq(p))throw A.c(A.ap(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.S(0,q))
if(o!==p.gq(p))throw A.c(A.ap(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.S(0,q))
if(o!==p.gq(p))throw A.c(A.ap(p))}return r.charCodeAt(0)==0?r:r}},
dW(a,b){return this.ii(0,A.o(this).i("t(a2.E)").a(b))},
bD(a,b,c){var s=A.o(this)
return new A.R(this,s.D(c).i("1(a2.E)").a(b),s.i("@<a2.E>").D(c).i("R<1,2>"))},
bf(a,b){var s=A.o(this).i("a2.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
be(a){return this.bf(0,!0)},
b_(a){var s,r=this,q=A.pz(A.o(r).i("a2.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.S(0,s))
return q}}
A.ft.prototype={
gj1(){var s=J.aT(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjG(){var s=J.aT(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aT(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
S(a,b){var s=this,r=s.gjG()+b
if(b<0||r>=s.gj1())throw A.c(A.lO(b,s.gq(0),s,"index"))
return J.k3(s.a,r)},
bf(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.au(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.qW(0,n):J.qV(0,n)}r=A.c0(s,m.S(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.S(n,o+q))
if(m.gq(n)<l)throw A.c(A.ap(p))}return r},
be(a){return this.bf(0,!0)}}
A.bn.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.au(q),o=p.gq(q)
if(r.b!==o)throw A.c(A.ap(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.S(q,s);++r.c
return!0},
$iad:1}
A.cl.prototype={
gu(a){return new A.dl(J.M(this.a),this.b,A.o(this).i("dl<1,2>"))},
gq(a){return J.aT(this.a)},
gI(a){return J.qE(this.a)},
S(a,b){return this.b.$1(J.k3(this.a,b))}}
A.d8.prototype={$iE:1}
A.dl.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.R.prototype={
gq(a){return J.aT(this.a)},
S(a,b){return this.b.$1(J.k3(this.a,b))}}
A.Q.prototype={
gu(a){return new A.N(J.M(this.a),this.b,this.$ti.i("N<1>"))}}
A.N.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iad:1}
A.bX.prototype={
gu(a){return new A.fz(J.M(this.a),this.$ti.i("fz<1>"))}}
A.fz.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iad:1}
A.af.prototype={
sq(a,b){throw A.c(A.ax("Cannot change the length of a fixed-length list"))},
k(a,b){A.bh(a).i("af.E").a(b)
throw A.c(A.ax("Cannot add to a fixed-length list"))}}
A.c6.prototype={
l(a,b,c){A.o(this).i("c6.E").a(c)
throw A.c(A.ax("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.c(A.ax("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).i("c6.E").a(b)
throw A.c(A.ax("Cannot add to an unmodifiable list"))},
X(a,b){A.o(this).i("h(c6.E,c6.E)?").a(b)
throw A.c(A.ax("Cannot modify an unmodifiable list"))}}
A.em.prototype={}
A.fo.prototype={
gq(a){return J.aT(this.a)},
S(a,b){var s=this.a,r=J.au(s)
return r.S(s,r.gq(s)-1-b)}}
A.h6.prototype={}
A.bF.prototype={$r:"+(1,2)",$s:1}
A.bu.prototype={$r:"+(1,2,3)",$s:2}
A.fS.prototype={$r:"+(1,2,3,4)",$s:3}
A.eQ.prototype={}
A.e1.prototype={
gI(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
n(a){return A.pB(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.uD()},
gM(){return new A.c9(this.kv(),A.o(this).i("c9<O<1,2>>"))},
kv(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gM(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gP(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("O<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.O(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
ba(a,b,c,d){var s=A.x(c,d)
this.ad(0,new A.kL(this,A.o(this).D(c).D(d).i("O<1,2>(3,4)").a(b),s))
return s},
$iU:1}
A.kL.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a4.prototype={
gq(a){return this.b.length},
gev(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a2(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.a2(b))return null
return this.b[this.a[b]]},
ad(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gev()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gP(){return new A.dH(this.gev(),this.$ti.i("dH<1>"))},
gal(){return new A.dH(this.b,this.$ti.i("dH<2>"))}}
A.dH.prototype={
gq(a){return this.a.length},
gI(a){return 0===this.a.length},
gL(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dI(s,s.length,this.$ti.i("dI<1>"))}}
A.dI.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iad:1}
A.eX.prototype={
bj(){var s=this,r=s.$map
if(r==null){r=new A.f5(s.$ti.i("f5<1,2>"))
A.tE(s.a,r)
s.$map=r}return r},
h(a,b){return this.bj().h(0,b)},
ad(a,b){this.$ti.i("~(1,2)").a(b)
this.bj().ad(0,b)},
gP(){var s=this.bj()
return new A.ag(s,A.o(s).i("ag<1>"))},
gal(){var s=this.bj()
return new A.aB(s,A.o(s).i("aB<2>"))},
gq(a){return this.bj().a}}
A.eR.prototype={
k(a,b){A.o(this).c.a(b)
A.uE()}}
A.cf.prototype={
gq(a){return this.b},
gI(a){return this.b===0},
gL(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dI(s,s.length,r.$ti.i("dI<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
b_(a){return A.pA(this,this.$ti.c)}}
A.mx.prototype={
$0(){return B.d.aB(1000*this.a.now())},
$S:17}
A.fp.prototype={}
A.nl.prototype={
av(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.fe.prototype={
n(a){return"Null check operator used on a null value"}}
A.i7.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iQ.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ml.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eV.prototype={}
A.fU.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ic5:1}
A.cC.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.tU(r==null?"unknown":r)+"'"},
gN(a){var s=A.qu(this)
return A.cb(s==null?A.bh(this):s)},
$idb:1,
glG(){return this},
$C:"$1",
$R:1,
$D:null}
A.hv.prototype={$C:"$0",$R:0}
A.hw.prototype={$C:"$2",$R:2}
A.iM.prototype={}
A.iJ.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.tU(s)+"'"}}
A.dZ.prototype={
U(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dZ))return!1
return this.$_target===b.$_target&&this.a===b.a},
gG(a){return(A.k_(this.a)^A.fi(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.iv(this.a)+"'")}}
A.iC.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bA.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
gP(){return new A.ag(this,A.o(this).i("ag<1>"))},
gal(){return new A.aB(this,A.o(this).i("aB<2>"))},
gM(){return new A.V(this,A.o(this).i("V<1,2>"))},
a2(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.kK(a)},
kK(a){var s=this.d
if(s==null)return!1
return this.bz(s[this.by(a)],a)>=0},
J(a,b){A.o(this).i("U<1,2>").a(b).ad(0,new A.m1(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.kL(b)},
kL(a){var s,r,q=this.d
if(q==null)return null
s=q[this.by(a)]
r=this.bz(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.e5(s==null?q.b=q.cO():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.e5(r==null?q.c=q.cO():r,b,c)}else q.kN(b,c)},
kN(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cO()
r=o.by(a)
q=s[r]
if(q==null)s[r]=[o.cP(a,b)]
else{p=o.bz(q,a)
if(p>=0)q[p].b=b
else q.push(o.cP(a,b))}},
lb(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.a2(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
ah(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.jx(this.c,b)
else return this.kM(b)},
kM(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.by(a)
r=n[s]
q=o.bz(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.f_(p)
if(r.length===0)delete n[s]
return p.b},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cA()}},
ad(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.ap(q))
s=s.c}},
e5(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cP(b,c)
else s.b=c},
jx(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.f_(s)
delete a[b]
return s.b},
cA(){this.r=this.r+1&1073741823},
cP(a,b){var s=this,r=A.o(s),q=new A.m9(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cA()
return q},
f_(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cA()},
by(a){return J.bi(a)&1073741823},
bz(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
n(a){return A.pB(this)},
cO(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ipy:1}
A.m1.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.m9.prototype={}
A.ag.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cI(s,s.r,s.e,this.$ti.i("cI<1>"))}}
A.cI.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iad:1}
A.aB.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.am(s,s.r,s.e,this.$ti.i("am<1>"))}}
A.am.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iad:1}
A.V.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gu(a){var s=this.a
return new A.f7(s,s.r,s.e,this.$ti.i("f7<1,2>"))}}
A.f7.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.O(s.a,s.b,r.$ti.i("O<1,2>"))
r.c=s.c
return!0}},
$iad:1}
A.f5.prototype={
by(a){return A.yl(a)&1073741823},
bz(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.p2.prototype={
$1(a){return this.a(a)},
$S:6}
A.p3.prototype={
$2(a,b){return this.a(a,b)},
$S:48}
A.p4.prototype={
$1(a){return this.a(A.G(a))},
$S:18}
A.bE.prototype={
gN(a){return A.cb(this.es())},
es(){return A.yv(this.$r,this.bP())},
n(a){return this.eX(!1)},
eX(a){var s,r,q,p,o,n=this.j5(),m=this.bP(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.r9(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
j5(){var s,r=this.$s
while($.o5.length<=r)B.a.k($.o5,null)
s=$.o5[r]
if(s==null){s=this.iR()
B.a.l($.o5,r,s)}return s},
iR(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.i4(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.an(j,k)}}
A.eq.prototype={
bP(){return[this.a,this.b]},
U(a,b){if(b==null)return!1
return b instanceof A.eq&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gG(a){return A.cn(this.$s,this.a,this.b,B.k)}}
A.er.prototype={
bP(){return[this.a,this.b,this.c]},
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.er&&s.$s===b.$s&&J.a8(s.a,b.a)&&J.a8(s.b,b.b)&&J.a8(s.c,b.c)},
gG(a){var s=this
return A.cn(s.$s,s.a,s.b,s.c)}}
A.es.prototype={
bP(){return this.a},
U(a,b){if(b==null)return!1
return b instanceof A.es&&this.$s===b.$s&&A.wm(this.a,b.a)},
gG(a){return A.cn(this.$s,A.vs(this.a),B.k,B.k)}}
A.nL.prototype={
cR(){var s=this.b
if(s===this)throw A.c(new A.dj("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.c(A.a_(""))
return s}}
A.cK.prototype={
gN(a){return B.fJ},
f3(a,b,c){return new Float32Array(a,b,c)},
$ia1:1,
$icK:1}
A.ed.prototype={$ied:1}
A.fc.prototype={
gk_(a){if(((a.$flags|0)&2)!==0)return new A.ob(a.buffer)
else return a.buffer},
jb(a,b,c,d){var s=A.aO(b,0,c,d,null)
throw A.c(s)},
eb(a,b,c,d){if(b>>>0!==b||b>c)this.jb(a,b,c,d)}}
A.ob.prototype={
f3(a,b,c){var s=A.vp(this.a,b,c)
s.$flags=3
return s}}
A.ig.prototype={
gN(a){return B.fK},
$ia1:1}
A.aC.prototype={
gq(a){return a.length},
eN(a,b,c,d,e){var s,r,q=a.length
this.eb(a,b,q,"start")
this.eb(a,c,q,"end")
if(b>c)throw A.c(A.aO(b,0,c,null,null))
s=c-b
if(e<0)throw A.c(A.w(e,null))
r=d.length
if(r-e<s)throw A.c(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibm:1}
A.fa.prototype={
h(a,b){A.cz(b,a,a.length)
return a[b]},
l(a,b,c){A.cZ(c)
a.$flags&2&&A.b3(a)
A.cz(b,a,a.length)
a[b]=c},
i0(a,b,c,d){t.id.a(d)
a.$flags&2&&A.b3(a,5)
this.eN(a,b,c,d,0)
return},
$iE:1,
$in:1,
$iC:1}
A.fb.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.b3(a)
A.cz(b,a,a.length)
a[b]=c},
i1(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.b3(a,5)
this.eN(a,b,c,d,e)
return},
$iE:1,
$in:1,
$iC:1}
A.f9.prototype={
gN(a){return B.fL},
b1(a,b,c){return new Float32Array(a.subarray(b,A.x1(b,c,a.length)))},
$ia1:1,
$il7:1}
A.ih.prototype={
gN(a){return B.fM},
$ia1:1}
A.ii.prototype={
gN(a){return B.fN},
h(a,b){A.cz(b,a,a.length)
return a[b]},
$ia1:1}
A.ij.prototype={
gN(a){return B.fO},
h(a,b){A.cz(b,a,a.length)
return a[b]},
$ia1:1}
A.ik.prototype={
gN(a){return B.fP},
h(a,b){A.cz(b,a,a.length)
return a[b]},
$ia1:1}
A.il.prototype={
gN(a){return B.fS},
h(a,b){A.cz(b,a,a.length)
return a[b]},
$ia1:1,
$ipL:1}
A.im.prototype={
gN(a){return B.fT},
h(a,b){A.cz(b,a,a.length)
return a[b]},
$ia1:1}
A.dn.prototype={
gN(a){return B.fU},
gq(a){return a.length},
h(a,b){A.cz(b,a,a.length)
return a[b]},
$ia1:1,
$idn:1}
A.fd.prototype={
gN(a){return B.fV},
gq(a){return a.length},
h(a,b){A.cz(b,a,a.length)
return a[b]},
$ia1:1,
$ifu:1}
A.fN.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.fQ.prototype={}
A.bU.prototype={
i(a){return A.fZ(v.typeUniverse,this,a)},
D(a){return A.rM(v.typeUniverse,this,a)}}
A.jh.prototype={}
A.jF.prototype={
n(a){return A.bx(this.a,null)}}
A.jf.prototype={
n(a){return this.a}}
A.fV.prototype={$icr:1}
A.nH.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:19}
A.nG.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.nI.prototype={
$0(){this.a.$0()},
$S:9}
A.nJ.prototype={
$0(){this.a.$0()},
$S:9}
A.o8.prototype={
iC(a,b){if(self.setTimeout!=null)self.setTimeout(A.eI(new A.o9(this,b),0),a)
else throw A.c(A.ax("`setTimeout()` not found."))}}
A.o9.prototype={
$0(){this.b.$0()},
$S:0}
A.j5.prototype={
cW(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cC(a)
else{s=r.a
if(q.i("bk<1>").b(a))s.ea(a)
else s.bN(a)}},
cX(a,b){var s=this.a
if(this.b)s.aO(new A.az(a,b))
else s.bJ(new A.az(a,b))}}
A.ok.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.ol.prototype={
$2(a,b){this.a.$2(1,new A.eV(a,t.l.a(b)))},
$S:53}
A.oU.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:62}
A.bv.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jz(a,b){var s,r,q
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
o.d=null}q=o.jz(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.rH
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
o.a=A.rH
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.c(A.l("sync*"))}return!1},
lI(a){var s,r,q=this
if(a instanceof A.c9){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.M(a)
return 2}},
$iad:1}
A.c9.prototype={
gu(a){return new A.bv(this.a(),this.$ti.i("bv<1>"))}}
A.az.prototype={
n(a){return A.q(this.a)},
$ia6:1,
gbh(){return this.b}}
A.le.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.ej(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ab(p)
q=A.cc(p)
l=r
o=q
n=A.qc(l,o)
l=new A.az(l,o)
m.b.aO(l)
return}m.b.ej(s)}},
$S:0}
A.lh.prototype={
$2(a,b){var s,r,q=this
A.ez(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aO(new A.az(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aO(new A.az(r,s))}},
$S:66}
A.lg.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bO(r,k.b,a)
if(J.a8(s,0)){q=A.f([],j.i("r<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.p)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hg(q,l)}k.c.bN(q)}}else if(J.a8(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aO(new A.az(q,o))}},
$S(){return this.d.i("aj(0)")}}
A.j9.prototype={
cX(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.bJ(A.xr(a,b))},
f6(a){return this.cX(a,null)}}
A.fB.prototype={
cW(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.cC(r.i("1/").a(a))}}
A.dD.prototype={
kZ(a){if((this.c&15)!==6)return!0
return this.b.b.dQ(t.iW.a(this.d),a.a,t.y,t.K)},
kJ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.lt(q,m,a.b,o,n,t.l)
else p=l.dQ(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ab(s))){if((r.c&1)!==0)throw A.c(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ai.prototype={
dR(a,b,c){var s,r,q=this.$ti
q.D(c).i("1/(2)").a(a)
s=$.aa
if(s===B.r){if(!t.ng.b(b)&&!t.mq.b(b))throw A.c(A.av(b,"onError",u.c))}else{c.i("@<0/>").D(q.c).i("1(2)").a(a)
b=A.xL(b,s)}r=new A.ai(s,c.i("ai<0>"))
this.cB(new A.dD(r,3,a,b,q.i("@<1>").D(c).i("dD<1,2>")))
return r},
eW(a,b,c){var s,r=this.$ti
r.D(c).i("1/(2)").a(a)
s=new A.ai($.aa,c.i("ai<0>"))
this.cB(new A.dD(s,19,a,b,r.i("@<1>").D(c).i("dD<1,2>")))
return s},
jC(a){this.a=this.a&1|16
this.c=a},
bM(a){this.a=a.a&30|this.a&1
this.c=a.c},
cB(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.e.a(r.c)
if((s.a&24)===0){s.cB(a)
return}r.bM(s)}A.jU(null,null,r.b,t.M.a(new A.nN(r,a)))}},
eC(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.e.a(m.c)
if((n.a&24)===0){n.eC(a)
return}m.bM(n)}l.a=m.bT(a)
A.jU(null,null,m.b,t.M.a(new A.nS(l,m)))}},
bl(){var s=t.F.a(this.c)
this.c=null
return this.bT(s)},
bT(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ej(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bk<1>").b(a))A.nQ(a,r,!0)
else{s=r.bl()
q.c.a(a)
r.a=8
r.c=a
A.dE(r,s)}},
bN(a){var s,r=this
r.$ti.c.a(a)
s=r.bl()
r.a=8
r.c=a
A.dE(r,s)},
iQ(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bl()
q.bM(a)
A.dE(q,r)},
aO(a){var s=this.bl()
this.jC(a)
A.dE(this,s)},
cC(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bk<1>").b(a)){this.ea(a)
return}this.iG(a)},
iG(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.jU(null,null,s.b,t.M.a(new A.nP(s,a)))},
ea(a){A.nQ(this.$ti.i("bk<1>").a(a),this,!1)
return},
bJ(a){this.a^=2
A.jU(null,null,this.b,t.M.a(new A.nO(this,a)))},
$ibk:1}
A.nN.prototype={
$0(){A.dE(this.a,this.b)},
$S:0}
A.nS.prototype={
$0(){A.dE(this.b,this.a.a)},
$S:0}
A.nR.prototype={
$0(){A.nQ(this.a.a,this.b,!0)},
$S:0}
A.nP.prototype={
$0(){this.a.bN(this.b)},
$S:0}
A.nO.prototype={
$0(){this.a.aO(this.b)},
$S:0}
A.nV.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.ls(t.mY.a(q.d),t.z)}catch(p){s=A.ab(p)
r=A.cc(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.kf(q)
n=k.a
n.c=new A.az(q,o)
q=n}q.b=!0
return}if(j instanceof A.ai&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ai){m=k.b.a
l=new A.ai(m.b,m.$ti)
j.dR(new A.nW(l,m),new A.nX(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.nW.prototype={
$1(a){this.a.iQ(this.b)},
$S:19}
A.nX.prototype={
$2(a,b){A.ez(a)
t.l.a(b)
this.a.aO(new A.az(a,b))},
$S:32}
A.nU.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dQ(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ab(l)
r=A.cc(l)
q=s
p=r
if(p==null)p=A.kf(q)
o=this.a
o.c=new A.az(q,p)
o.b=!0}},
$S:0}
A.nT.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.kZ(s)&&p.a.e!=null){p.c=p.a.kJ(s)
p.b=!1}}catch(o){r=A.ab(o)
q=A.cc(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.kf(p)
m=l.b
m.c=new A.az(p,n)
p=m}p.b=!0}},
$S:0}
A.j6.prototype={}
A.jD.prototype={}
A.h5.prototype={$irz:1}
A.jv.prototype={
lu(a){var s,r,q
t.M.a(a)
try{if(B.r===$.aa){a.$0()
return}A.tt(null,null,this,a,t.H)}catch(q){s=A.ab(q)
r=A.cc(q)
A.qk(A.ez(s),t.l.a(r))}},
f5(a){return new A.o6(this,t.M.a(a))},
ls(a,b){b.i("0()").a(a)
if($.aa===B.r)return a.$0()
return A.tt(null,null,this,a,b)},
dQ(a,b,c,d){c.i("@<0>").D(d).i("1(2)").a(a)
d.a(b)
if($.aa===B.r)return a.$1(b)
return A.xP(null,null,this,a,b,c,d)},
lt(a,b,c,d,e,f){d.i("@<0>").D(e).D(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aa===B.r)return a.$2(b,c)
return A.xO(null,null,this,a,b,c,d,e,f)},
hH(a,b,c,d){return b.i("@<0>").D(c).D(d).i("1(2,3)").a(a)}}
A.o6.prototype={
$0(){return this.a.lu(this.b)},
$S:0}
A.oN.prototype={
$0(){A.v_(this.a,this.b)},
$S:0}
A.fI.prototype={
gq(a){return this.a},
gI(a){return this.a===0},
gL(a){return this.a!==0},
gP(){return new A.dF(this,this.$ti.i("dF<1>"))},
gal(){var s=this.$ti
return A.ib(new A.dF(this,s.i("dF<1>")),new A.nY(this),s.c,s.y[1])},
a2(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iU(a)},
iU(a){var s=this.d
if(s==null)return!1
return this.aP(this.er(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.rB(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.rB(q,b)
return r}else return this.j6(b)},
j6(a){var s,r,q=this.d
if(q==null)return null
s=this.er(q,a)
r=this.aP(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ee(s==null?m.b=A.pS():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ee(r==null?m.c=A.pS():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.pS()
p=A.k_(b)&1073741823
o=q[p]
if(o==null){A.pT(q,p,[b,c]);++m.a
m.e=null}else{n=m.aP(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ad(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ef()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.ap(m))}},
ef(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
ee(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.pT(a,b,c)},
er(a,b){return a[A.k_(b)&1073741823]}}
A.nY.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.fK.prototype={
aP(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dF.prototype={
gq(a){return this.a.a},
gI(a){return this.a.a===0},
gL(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.fJ(s,s.ef(),this.$ti.i("fJ<1>"))}}
A.fJ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.ap(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iad:1}
A.bD.prototype={
ey(){return new A.bD(A.o(this).i("bD<1>"))},
gu(a){var s=this,r=new A.dJ(s,s.r,A.o(s).i("dJ<1>"))
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
return t.Y.a(r[b])!=null}else return this.iT(b)},
iT(a){var s=this.d
if(s==null)return!1
return this.aP(s[this.cH(a)],a)>=0},
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ed(s==null?q.b=A.pU():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ed(r==null?q.c=A.pU():r,b)}else return q.iD(b)},
iD(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.pU()
r=p.cH(a)
q=s[r]
if(q==null)s[r]=[p.cF(a)]
else{if(p.aP(q,a)>=0)return!1
q.push(p.cF(a))}return!0},
ah(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.eg(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.eg(s.c,b)
else return s.jw(b)},
jw(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cH(a)
r=n[s]
q=o.aP(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eh(p)
return!0},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cN()}},
ed(a,b){A.o(this).c.a(b)
if(t.Y.a(a[b])!=null)return!1
a[b]=this.cF(b)
return!0},
eg(a,b){var s
if(a==null)return!1
s=t.Y.a(a[b])
if(s==null)return!1
this.eh(s)
delete a[b]
return!0},
cN(){this.r=this.r+1&1073741823},
cF(a){var s,r=this,q=new A.jm(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cN()
return q},
eh(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cN()},
cH(a){return J.bi(a)&1073741823},
aP(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
$ir4:1}
A.jm.prototype={}
A.dJ.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.ap(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iad:1}
A.ma.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:33}
A.J.prototype={
gu(a){return new A.bn(a,this.gq(a),A.bh(a).i("bn<J.E>"))},
S(a,b){return this.h(a,b)},
gI(a){return this.gq(a)===0},
gL(a){return!this.gI(a)},
a3(a,b){var s,r
A.bh(a).i("t(J.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.c(A.ap(a))}return!0},
O(a,b){var s,r
A.bh(a).i("t(J.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.c(A.ap(a))}return!1},
dX(a,b){return new A.bX(a,b.i("bX<0>"))},
bD(a,b,c){var s=A.bh(a)
return new A.R(a,s.D(c).i("1(J.E)").a(b),s.i("@<J.E>").D(c).i("R<1,2>"))},
k(a,b){var s
A.bh(a).i("J.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
c0(a,b){return new A.bR(a,A.bh(a).i("@<J.E>").D(b).i("bR<1,2>"))},
X(a,b){var s,r=A.bh(a)
r.i("h(J.E,J.E)?").a(b)
s=b==null?A.yk():b
A.iG(a,0,this.gq(a)-1,s,r.i("J.E"))},
kD(a,b,c,d){var s
A.bh(a).i("J.E?").a(d)
A.fj(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.pv(a,"[","]")},
$iE:1,
$in:1,
$iC:1}
A.W.prototype={
ad(a,b){var s,r,q,p=A.o(this)
p.i("~(W.K,W.V)").a(b)
for(s=this.gP(),s=s.gu(s),p=p.i("W.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gM(){return this.gP().bD(0,new A.mc(this),A.o(this).i("O<W.K,W.V>"))},
ba(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.D(c).D(d).i("O<1,2>(W.K,W.V)").a(b)
s=A.x(c,d)
for(r=this.gP(),r=r.gu(r),n=n.i("W.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
jR(a){var s,r,q
A.o(this).i("n<O<W.K,W.V>>").a(a)
for(s=a.$ti,r=new A.dl(J.M(a.a),a.b,s.i("dl<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gP()
return s.gq(s)},
gI(a){var s=this.gP()
return s.gI(s)},
gL(a){var s=this.gP()
return s.gL(s)},
gal(){return new A.fL(this,A.o(this).i("fL<W.K,W.V>"))},
n(a){return A.pB(this)},
$iU:1}
A.mc.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("W.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("W.V").a(s)
return new A.O(a,s,r.i("O<W.K,W.V>"))},
$S(){return A.o(this.a).i("O<W.K,W.V>(W.K)")}}
A.md.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:20}
A.fL.prototype={
gq(a){var s=this.a
return s.gq(s)},
gI(a){var s=this.a
return s.gI(s)},
gL(a){var s=this.a
return s.gL(s)},
gu(a){var s=this.a,r=s.gP()
return new A.fM(r.gu(r),s,this.$ti.i("fM<1,2>"))}}
A.fM.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iad:1}
A.h_.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.c(A.ax("Cannot modify unmodifiable map"))}}
A.ec.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.o(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
ad(a,b){this.a.ad(0,A.o(this).i("~(1,2)").a(b))},
gI(a){var s=this.a
return s.gI(s)},
gL(a){var s=this.a
return s.gL(s)},
gq(a){var s=this.a
return s.gq(s)},
gP(){return this.a.gP()},
n(a){return this.a.n(0)},
gal(){return this.a.gal()},
gM(){return this.a.gM()},
ba(a,b,c,d){return this.a.ba(0,A.o(this).D(c).D(d).i("O<1,2>(3,4)").a(b),c,d)},
$iU:1}
A.cQ.prototype={}
A.cp.prototype={
gI(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
J(a,b){var s
for(s=J.M(A.o(this).i("n<1>").a(b));s.m();)this.k(0,s.gp())},
d0(a){var s,r,q=this.b_(0)
for(s=this.gu(this);s.m();){r=s.gp()
if(a.v(0,r))q.ah(0,r)}return q},
n(a){return A.pv(this,"{","}")},
a3(a,b){var s
A.o(this).i("t(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aY(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dT(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
O(a,b){var s
A.o(this).i("t(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
S(a,b){var s,r
A.iy(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.lO(b,b-r,this,"index"))},
$iE:1,
$in:1,
$icM:1}
A.fT.prototype={
d0(a){var s,r,q,p=this,o=p.ey()
for(s=A.jn(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.k(0,q)}return o},
b_(a){var s=this.ey()
s.J(0,this)
return s}}
A.jG.prototype={
k(a,b){this.$ti.c.a(b)
return A.wx()}}
A.fv.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gu(a){var s=this.a
return A.jn(s,s.r,A.o(s).c)},
b_(a){return this.a.b_(0)}}
A.ev.prototype={}
A.h0.prototype={}
A.jk.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jr(b):s}},
gq(a){return this.b==null?this.c.a:this.b2().length},
gI(a){return this.gq(0)===0},
gL(a){return this.gq(0)>0},
gP(){if(this.b==null){var s=this.c
return new A.ag(s,A.o(s).i("ag<1>"))}return new A.jl(this)},
gal(){var s,r=this
if(r.b==null){s=r.c
return new A.aB(s,A.o(s).i("aB<2>"))}return A.ib(r.b2(),new A.o_(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.G(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a2(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jK().l(0,b,c)},
a2(a){if(this.b==null)return this.c.a2(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
ad(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ad(0,b)
s=o.b2()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.om(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.ap(o))}},
b2(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.f(Object.keys(this.a),t.s)
return s},
jK(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.x(t.N,t.z)
r=n.b2()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.H(r)
n.a=n.b=null
return n.c=s},
jr(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.om(this.a[a])
return this.b[a]=s}}
A.o_.prototype={
$1(a){return this.a.h(0,A.G(a))},
$S:18}
A.jl.prototype={
gq(a){return this.a.gq(0)},
S(a,b){var s=this.a
if(s.b==null)s=s.gP().S(0,b)
else{s=s.b2()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gP()
s=s.gu(s)}else{s=s.b2()
s=new J.d2(s,s.length,A.L(s).i("d2<1>"))}return s}}
A.oe.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:21}
A.od.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:21}
A.ho.prototype={
l0(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fj(a4,a5,a2)
s=$.u6()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.p1(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.p1(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aQ("")
g=o}else g=o
g.a+=B.b.B(a3,p,q)
c=A.ah(j)
g.a+=c
p=k
continue}}throw A.c(A.ac("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.B(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.qF(a3,m,a5,n,l,r)
else{b=B.c.V(r-1,4)+1
if(b===1)throw A.c(A.ac(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bd(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.qF(a3,m,a5,n,l,a)
else{b=B.c.V(a,4)
if(b===1)throw A.c(A.ac(a1,a3,a5))
if(b>1)a3=B.b.bd(a3,a5,a5,b===2?"==":"=")}return a3}}
A.kD.prototype={}
A.d6.prototype={}
A.hA.prototype={}
A.hK.prototype={}
A.f6.prototype={
n(a){var s=A.hL(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.i9.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.i8.prototype={
bp(a,b){var s=A.xI(a,this.gkm().a)
return s},
b8(a,b){var s=A.wf(a,this.gkt().b,null)
return s},
gkt(){return B.e6},
gkm(){return B.e5}}
A.m3.prototype={}
A.m2.prototype={}
A.o1.prototype={
hR(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ah(92)
s.a+=o
o=A.ah(117)
s.a+=o
o=A.ah(100)
s.a+=o
o=p>>>8&15
o=A.ah(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ah(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ah(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ah(92)
s.a+=o
switch(p){case 8:o=A.ah(98)
s.a+=o
break
case 9:o=A.ah(116)
s.a+=o
break
case 10:o=A.ah(110)
s.a+=o
break
case 12:o=A.ah(102)
s.a+=o
break
case 13:o=A.ah(114)
s.a+=o
break
default:o=A.ah(117)
s.a+=o
o=A.ah(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ah(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ah(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.B(a,r,q)
r=q+1
o=A.ah(92)
s.a+=o
o=A.ah(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.B(a,r,m)},
cE(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.i9(a,null))}B.a.k(s,a)},
cp(a){var s,r,q,p,o=this
if(o.hQ(a))return
o.cE(a)
try{s=o.b.$1(a)
if(!o.hQ(s)){q=A.r0(a,null,o.geB())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ab(p)
q=A.r0(a,r,o.geB())
throw A.c(q)}},
hQ(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hR(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cE(a)
q.lE(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cE(a)
r=q.lF(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
lE(a){var s,r,q=this.c
q.a+="["
s=J.au(a)
if(s.gL(a)){this.cp(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cp(s.h(a,r))}}q.a+="]"},
lF(a){var s,r,q,p,o,n,m=this,l={}
if(a.gI(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.c0(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ad(0,new A.o2(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hR(A.G(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cp(r[n])}p.a+="}"
return!0}}
A.o2.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:20}
A.o0.prototype={
geB(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iU.prototype={}
A.nr.prototype={
ki(a){return new A.oc(this.a).iV(t.J.a(a),0,null,!0)}}
A.oc.prototype={
iV(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.fj(b,c,J.aT(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.wO(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.wN(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cI(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.wP(o)
l.b=0
throw A.c(A.ac(m,a,p+l.c))}return n},
cI(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.K(b+c,2)
r=q.cI(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cI(a,s,c,d)}return q.kl(a,b,c,d)},
kl(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aQ(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ah(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ah(h)
e.a+=p
break
case 65:p=A.ah(h)
e.a+=p;--d
break
default:p=A.ah(h)
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
p=A.ah(a[l])
e.a+=p}else{p=A.rj(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ah(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.d7.prototype={
U(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.d7)if(this.a===b.a)s=this.b===b.b
return s},
gG(a){return A.cn(this.a,this.b,B.k,B.k)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
n(a){var s=this,r=A.uF(A.vD(s)),q=A.hC(A.vB(s)),p=A.hC(A.vx(s)),o=A.hC(A.vy(s)),n=A.hC(A.vA(s)),m=A.hC(A.vC(s)),l=A.qL(A.vz(s)),k=s.b,j=k===0?"":A.qL(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaA:1}
A.cE.prototype={
U(a,b){if(b==null)return!1
return b instanceof A.cE&&this.a===b.a},
gG(a){return B.c.gG(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.K(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.K(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.l6(B.c.n(o%1e6),6,"0")},
$iaA:1}
A.je.prototype={
n(a){return this.A()},
$iH:1}
A.a6.prototype={
gbh(){return A.vw(this)}}
A.hk.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hL(s)
return"Assertion failed"}}
A.cr.prototype={}
A.bQ.prototype={
gcK(){return"Invalid argument"+(!this.a?"(s)":"")},
gcJ(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gcK()+q+o
if(!s.a)return n
return n+s.gcJ()+": "+A.hL(s.gdF())},
gdF(){return this.b}}
A.ef.prototype={
gdF(){return A.t1(this.b)},
gcK(){return"RangeError"},
gcJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.hZ.prototype={
gdF(){return A.a(this.b)},
gcK(){return"RangeError"},
gcJ(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fw.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.iP.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.ek.prototype={
n(a){return"Bad state: "+this.a}}
A.hy.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hL(s)+"."}}
A.io.prototype={
n(a){return"Out of Memory"},
gbh(){return null},
$ia6:1}
A.fr.prototype={
n(a){return"Stack Overflow"},
gbh(){return null},
$ia6:1}
A.nM.prototype={
n(a){return"Exception: "+this.a}}
A.I.prototype={
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
k=""}return g+l+B.b.B(e,i,j)+k+"\n"+B.b.W(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g}}
A.n.prototype={
c0(a,b){return A.ux(this,A.o(this).i("n.E"),b)},
bD(a,b,c){var s=A.o(this)
return A.ib(this,s.D(c).i("1(n.E)").a(b),s.i("n.E"),c)},
dW(a,b){var s=A.o(this)
return new A.Q(this,s.i("t(n.E)").a(b),s.i("Q<n.E>"))},
dX(a,b){return new A.bX(this,b.i("bX<0>"))},
bx(a,b,c,d){var s,r
d.a(b)
A.o(this).D(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a3(a,b){var s
A.o(this).i("t(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
O(a,b){var s
A.o(this).i("t(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
bf(a,b){var s=A.K(this,A.o(this).i("n.E"))
return s},
be(a){return this.bf(0,!0)},
gq(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gI(a){return!this.gu(this).m()},
gL(a){return!this.gI(this)},
gaI(a){var s=this.gu(this)
if(!s.m())throw A.c(A.i2())
return s.gp()},
cc(a,b,c){var s,r
A.o(this).i("t(n.E)").a(b)
for(s=this.gu(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.c(A.i2())},
kE(a,b){return this.cc(0,b,null)},
S(a,b){var s,r
A.iy(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.lO(b,b-r,this,"index"))},
n(a){return A.vf(this,"(",")")}}
A.O.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.aj.prototype={
gG(a){return A.B.prototype.gG.call(this,0)},
n(a){return"null"}}
A.B.prototype={$iB:1,
U(a,b){return this===b},
gG(a){return A.fi(this)},
n(a){return"Instance of '"+A.iv(this)+"'"},
gN(a){return A.jY(this)},
toString(){return this.n(this)}}
A.jE.prototype={
n(a){return""},
$ic5:1}
A.n9.prototype={
gkr(){var s,r=this.b
if(r==null)r=$.mA.$0()
s=r-this.a
if($.qA()===1e6)return s
return s*1000}}
A.aQ.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ivQ:1}
A.nq.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.G(b)
s=B.b.ce(b,"=")
if(s===-1){if(b!=="")a.l(0,A.pZ(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.B(b,0,s)
q=B.b.bH(b,s+1)
p=this.a
a.l(0,A.pZ(r,0,r.length,p,!0),A.pZ(q,0,q.length,p,!0))}return a},
$S:51}
A.np.prototype={
$2(a,b){throw A.c(A.ac("Illegal IPv6 address, "+a,this.a,b))},
$S:29}
A.h1.prototype={
geV(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gG(r.geV())
r.y!==$&&A.tT()
r.y=s
q=s}return q},
gbE(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.rr(s==null?"":s)
r.z!==$&&A.tT()
q=r.z=new A.cQ(s,t.ph)}return q},
ghO(){return this.b},
gdE(){var s=this.c
if(s==null)return""
if(B.b.Y(s,"[")&&!B.b.a1(s,"v",1))return B.b.B(s,1,s.length-1)
return s},
gdK(){var s=this.d
return s==null?A.rN(this.a):s},
gdM(){var s=this.f
return s==null?"":s},
ghn(){var s=this.r
return s==null?"":s},
gho(){return this.c!=null},
ghq(){return this.f!=null},
ghp(){return this.r!=null},
n(a){return this.geV()},
U(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.ge_())if(p.c!=null===b.gho())if(p.b===b.ghO())if(p.gdE()===b.gdE())if(p.gdK()===b.gdK())if(p.e===b.ghB()){r=p.f
q=r==null
if(!q===b.ghq()){if(q)r=""
if(r===b.gdM()){r=p.r
q=r==null
if(!q===b.ghp()){s=q?"":r
s=s===b.ghn()}}}}return s},
$iiS:1,
ge_(){return this.a},
ghB(){return this.e}}
A.nn.prototype={
ghN(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cf(s,"?",m)
q=s.length
if(r>=0){p=A.h2(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.ja("data","",n,n,A.h2(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jy.prototype={
gho(){return this.c>0},
ghq(){return this.f<this.r},
ghp(){return this.r<this.a.length},
ge_(){var s=this.w
return s==null?this.w=this.iS():s},
iS(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.Y(r.a,"http"))return"http"
if(q===5&&B.b.Y(r.a,"https"))return"https"
if(s&&B.b.Y(r.a,"file"))return"file"
if(q===7&&B.b.Y(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
ghO(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gdE(){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gdK(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.yE(B.b.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.Y(r.a,"http"))return 80
if(s===5&&B.b.Y(r.a,"https"))return 443
return 0},
ghB(){return B.b.B(this.a,this.e,this.f)},
gdM(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
ghn(){var s=this.r,r=this.a
return s<r.length?B.b.bH(r,s+1):""},
gbE(){if(this.f>=this.r)return B.bw
return new A.cQ(A.rr(this.gdM()),t.ph)},
gG(a){var s=this.x
return s==null?this.x=B.b.gG(this.a):s},
U(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiS:1}
A.ja.prototype={}
A.mk.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.pl.prototype={
$1(a){return this.a.cW(this.b.i("0/?").a(a))},
$S:10}
A.pm.prototype={
$1(a){if(a==null)return this.a.f6(new A.mk(a===undefined))
return this.a.f6(a)},
$S:10}
A.oX.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.tl(a))return a
s=this.a
a.toString
if(s.a2(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aO(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dO(!0,"isUtc",t.y)
return new A.d7(r,0,!0)}if(a instanceof RegExp)throw A.c(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.ay(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.x(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bY(n),p=s.gu(n);p.m();)m.push(A.cB(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.au(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:59}
A.jj.prototype={
an(a){if(a<=0||a>4294967296)throw A.c(A.rb(u.w+a))
return Math.random()*a>>>0},
ck(){return Math.random()},
$ipF:1}
A.ep.prototype={
cz(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.aF()
l.aF()
l.aF()
l.aF()},
aF(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.K(o-n+(q-p)+(m-r),4294967296)>>>0},
an(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.c(A.rb(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aF()
return(p.a&s)>>>0}do{p.aF()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
ck(){var s,r=this
r.aF()
s=r.a
r.aF()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ipF:1}
A.mD.prototype={
E(){var s=this
if(B.a.O(A.f([s.d,s.e,s.f,s.r,s.w],t.t),new A.mE()))throw A.c(B.dx)}}
A.mE.prototype={
$1(a){return A.a(a)<=0},
$S:22}
A.dr.prototype={
A(){return"QualityProfileKind."+this.b}}
A.dq.prototype={}
A.kJ.prototype={}
A.kK.prototype={}
A.it.prototype={
E(){var s,r,q,p,o=this
for(s=A.T(["exposure",o.a,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.V(s,A.o(s).i("V<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.c(A.w("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.c(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.e_.prototype={}
A.hO.prototype={
E(){var s,r,q,p,o,n,m=this,l=null
if(!B.bg.ga4(0)||!m.b.ga4(0)||!m.r.ga4(0))throw A.c(A.w("FrameEnvironment colors must be finite",l))
s=m.c
if(isFinite(s)){r=m.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.c(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+m.d,l))
s=m.w
if(!isFinite(s)||s<0)throw A.c(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),l))
s=m.x
if(s!=null){r=s.a
if(!r.ga4(0)||r.gbA()<1e-12)A.k(A.w("DirectionalLight.direction must be finite and nonzero: "+r.n(0),l))
s=s.c
if(!isFinite(s))A.k(A.w("DirectionalLight.intensity must be >= 0: "+s,l))}for(s=m.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.w("PointLight.position must be finite: "+o.n(0),l))
o=p.d
if(!isFinite(o)||o<0)A.k(A.w("PointLight.intensity must be >= 0: "+A.q(o),l))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.w("PointLight.radius must be > 0: "+A.q(o),l))}for(s=isFinite(0),r=isFinite(1),o=isFinite(-1),q=0;!1;++q){if(s)n=r
else n=!1
if(!n)A.k(A.w("SpotLight.position must be finite: "+B.F.n(0),l))
if(s)n=o
else n=!1
if(!n)A.k(A.w("SpotLight.direction must be finite and nonzero: "+B.a5.n(0),l))}}}
A.l9.prototype={}
A.co.prototype={
U(a,b){if(b==null)return!1
return J.dR(b)===A.jY(this)&&b instanceof A.co&&this.a===b.a&&this.b===b.b},
gG(a){return A.cn(A.jY(this),this.a,this.b,B.k)}}
A.b6.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bp.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c1.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ip.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.ci.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.df.prototype={
A(){return"HandleRejection."+this.b}}
A.lp.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.dk.prototype={
ga4(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
U(a,b){if(b==null)return!1
return b instanceof A.dk&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.cn(this.a,this.b,this.c,B.k)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.kQ.prototype={}
A.is.prototype={}
A.ej.prototype={}
A.hj.prototype={
A(){return"AlphaMode."+this.b}}
A.cJ.prototype={
E(){var s=null
if(this.a.length===0)throw A.c(A.w("MaterialDefinition.key must not be empty",s))
if(!isFinite(0))throw A.c(A.w(u.i,s))
if(this.w===0||this.x===0)throw A.c(A.w(u.p,s))
if(!isFinite(0.5))throw A.c(A.w(u.n,s))}}
A.ct.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.cu.prototype={}
A.ns.prototype={
E(){var s,r,q,p
for(s=0;s<6;++s){r=B.ao[s]
q=r.b
p=q+r.c
if(p>14)throw A.c(A.w('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bT.prototype={
E(){var s,r,q,p,o,n=this
n.a.E()
s=n.b.length
if(B.c.V(s,14)!==0)throw A.c(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.c(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga4(0)&&s.b.ga4(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.c(A.w("MeshData.localBounds must be a valid AABB",null))}}
A.mm.prototype={
E(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.c(A.w("resource plan must contain sceneColor and present",null))
if(s.O(0,new A.mo()))throw A.c(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.c(A.w("resource history does not match vhsOutput ownership",null))}}
A.mo.prototype={
$1(a){return A.G(a).length===0},
$S:3}
A.mv.prototype={}
A.iB.prototype={
hs(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.c(A.l("resource assembler is initialized"))
a.E()
s.a=a
s.c=1},
br(){if(this.d)return
this.d=!0
this.a=null}}
A.e2.prototype={
A(){return"DrawMode."+this.b}}
A.hq.prototype={
A(){return"BlendMode."+this.b}}
A.aW.prototype={}
A.iK.prototype={
E(){var s=this
if(s.a<0||s.b<0)throw A.c(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.c(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.c(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hx.prototype={
A(){return"ColorEncoding."+this.b}}
A.hG.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.iz.prototype={
E(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.d0(B.fB)
if(o.a!==0)A.k(A.av(o,r,"contains unknown pipeline features"))
if(q.a===B.aq&&p.gL(p))A.k(A.av(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.c(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dt.prototype={
A(){return"RendererState."+this.b}}
A.lb.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.id.prototype={
lo(a){return this.a.bq(a)}}
A.mf.prototype={
$3(a,b,c){return new A.c1(A.a(a),A.a(b),A.bJ(c))},
$S:69}
A.iR.prototype={}
A.mh.prototype={
bX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.rx(d,new A.hR(c.byteLength,B.b7,B.dI))
if(d.b!==B.f)A.k(A.l(e))
s=A.e(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.c8(d)
A.bW(d,p)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a5(t.S)
for(n=a.a,m=0;m<6;++m){l=B.ao[m]
k=A.tz(l.a)
if(!o.k(0,k))continue
j=A.x5(n,k,l)
if(d.b!==B.f)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.rx(d,new A.hR(i.byteLength,B.b7,B.b6))
if(d.b!==B.f)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.e(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iR(b,h,p,d,c.length/14|0)},
lj(a){var s=this.c.h(0,a.a)
if(s==null)throw A.c(A.de(B.am,a))
this.b.bq(a)
return s},
aK(a){var s,r,q=this.c.ah(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.e(q.c.a))
s.deleteBuffer(A.e(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.e(r.a))}this.b.aK(a)},
dP(){var s,r,q,p
for(s=this.b.b9(),r=s.$ti,s=new A.bv(s.a(),r.i("bv<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.bX(p.b))}},
gbB(){return this.b.b9().bx(0,0,new A.mj(),t.S)}}
A.mi.prototype={
$3(a,b,c){return new A.b6(A.a(a),A.a(b),A.bJ(c))},
$S:79}
A.mj.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:85}
A.cw.prototype={}
A.iN.prototype={
el(){var s=this.a,r=A.pP(s,B.dL)
A.pQ(s,r,0,$.tW())
return r},
ly(a,b){var s,r,q,p=this,o=p.b,n=o.bq(a),m=A.K(n.b,t.nh)
B.a.l(m,0,b)
s=n.a
o.dT(a,new A.cw(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.pP(p.a,s)
o.l(0,r,q)}A.pQ(p.a,q,0,b)},
lm(a){var s,r=this
if(a==null){s=r.d
s===$&&A.j()
return s}r.b.bq(a)
s=r.c.h(0,a.a)
if(s==null){s=r.d
s===$&&A.j()}return s},
dP(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.el()
for(s=i.b.b9(),r=s.$ti,s=new A.bv(s.a(),r.i("bv<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a3(o,new A.nk()))continue
l=A.pP(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.pQ(p,l,k,j)}q.l(0,n.a,l)}},
gbB(){return this.b.b9().bx(0,0,new A.nj(),t.S)}}
A.ni.prototype={
$3(a,b,c){return new A.bp(A.a(a),A.a(b),A.bJ(c))},
$S:100}
A.nk.prototype={
$1(a){return t.nh.a(a)==null},
$S:103}
A.nj.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:104}
A.dg.prototype={}
A.hM.prototype={
k6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.R.a(a)
s=new A.mH(A.f([],t.hJ),A.a5(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)r[p].aa(s,b)
o=s.k5(a,!1)
if(o.b.length!==0)return new A.hN(o,B.es)
q=o.a
n=A.L(q)
m=new A.R(q,n.i("m(1)").a(new A.l5()),n.i("R<1,m>")).b_(0)
l=A.f([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){k=r[p]
for(n=k.a9(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.ga_().a))throw A.c(A.l('RenderFeature "'+k.gae()+'" created a pass "'+i.ga_().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.X(l,new A.l6(o))
return new A.hN(o,l)}}
A.l5.prototype={
$1(a){return t.A.a(a).a},
$S:30}
A.l6.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.hr(s,new A.l3(a)),B.a.hr(s,new A.l4(b)))},
$S:31}
A.l3.prototype={
$1(a){return t.A.a(a).a===this.a.ga_().a},
$S:7}
A.l4.prototype={
$1(a){return t.A.a(a).a===this.a.ga_().a},
$S:7}
A.hN.prototype={}
A.e6.prototype={
A(){return"FrameQueueState."+this.b}}
A.la.prototype={}
A.ak.prototype={
gbF(){var s=this.c,r=A.L(s)
return new A.Q(s,r.i("t(1)").a(new A.mq()),r.i("Q<1>"))},
gcq(){var s=this.c,r=A.L(s)
return new A.Q(s,r.i("t(1)").a(new A.mr()),r.i("Q<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.mq.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.B},
$S:11}
A.mr.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:11}
A.bS.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bl.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.fn.prototype={
A(){return"ResourceFormat."+this.b}}
A.ch.prototype={
A(){return"GraphStage."+this.b}}
A.aP.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.eg.prototype={
A(){return"ResourceAccess."+this.b}}
A.P.prototype={}
A.eP.prototype={}
A.mB.prototype={
ag(a){var s,r,q,p,o,n,m=this
a.E()
s=null
try{r=t.a
s=A.w9(m.a,a.c,r.a(a.d.gP().be(0)),r.a(a.f),a.b)}catch(q){if(A.ab(q) instanceof A.fq){++m.e
throw q}else throw q}p=new A.eP(s)
r=m.b
o=a.a
n=r.h(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.e(n.b.a))
return p},
iY(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.am(s,s.r,s.e,a.$ti.i("am<1>")),r=this.a.a;s.m();)r.deleteProgram(A.e(s.d.b.a))}}
A.aN.prototype={
E(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.c(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a5(s)
for(q=this.d.gM(),q=q.gu(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.c(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.c(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a5(s)
for(s=this.e.gM(),s=s.gu(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.c(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.c(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.mF.prototype={}
A.aM.prototype={
a6(){var s=this
return A.qN(B.ck,s.f,B.ac,B.ad,!0,!0,!0,!0,s.r,B.ag,B.ah,s.d,s.e,!0,!1,!1)}}
A.mH.prototype={
k5(a,b){var s=this.jL(t.R.a(a),!1),r=this.a,q=A.L(r)
return new A.mG(A.an(new A.Q(r,q.i("t(1)").a(new A.mL()),q.i("Q<1>")),t.A),s)},
jL(a,b){var s,r,q,p,o,n,m=this
t.R.a(a)
s=A.f([],t.aW)
r=m.a
q=A.L(r)
p=q.i("Q<1>")
o=A.K(new A.Q(r,q.i("t(1)").a(new A.mK()),p),p.i("n.E"))
m.iI(o,a,s)
m.iM(o,s)
m.iL(o,!1,s)
n=m.iP(o,s)
m.iN(o,n,s)
m.iO(o,s)
m.iK(o,n,s)
m.iJ(o,s)
return s},
iI(a,b,c){var s,r,q,p
t.O.a(a)
t.R.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
p=B.C.d0(b)
if(p.a!==0)B.a.k(c,new A.bl(B.dV,q.a,"missing capabilities: "+p.aY(0,", ")))}},
iM(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbF(),o=J.M(p.a),p=new A.N(o,p.b,p.$ti.i("N<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bl(B.dQ,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
iL(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.p)(p),++m){l=p[m]
if(l.b===B.B)B.a.k(c,new A.bl(B.dT,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iP(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.b.a(b)
s=A.x(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.p)(a),++q){p=a[q]
for(o=p.gcq(),n=J.M(o.a),o=new A.N(n,o.b,o.$ti.i("N<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bl(B.dP,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
iN(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbF(),p=J.M(q.a),q=new A.N(p,q.b,q.$ti.i("N<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.B)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bl(B.bc,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.ce(a,m)>s)B.a.k(c,new A.bl(B.bc,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
iO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbF(),o=J.M(p.a),p=new A.N(o,p.b,p.$ti.i("N<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
for(l=q.gcq(),k=J.M(l.a),l=new A.N(k,l.b,l.$ti.i("N<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bl(B.dS,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
iK(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
for(p=q.gbF(),o=J.M(p.a),p=new A.N(o,p.b,p.$ti.i("N<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.B)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcq().kE(0,new A.mJ(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bl(B.dR,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
iJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.b.a(b)
s=t.S
r=A.x(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcq(),o=J.M(p.a),p=new A.N(o,p.b,p.$ti.i("N<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.i4(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a5(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbF(),p=J.M(s.a),s=new A.N(p,s.b,s.$ti.i("N<1>"));s.m();){o=p.gp()
if(o.b===B.B)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.c0(s,!1,!1,p)
s=a.length
i=A.c0(s,!1,!1,p)
h=new A.mI(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bl(B.dU,a[q].a,"participates in a resource dependency cycle"))}}}}
A.mL.prototype={
$1(a){t.A.a(a)
return A.pE()},
$S:7}
A.mK.prototype={
$1(a){t.A.a(a)
return A.pE()},
$S:7}
A.mJ.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:11}
A.mI.prototype={
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
r=A.jn(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:22}
A.mG.prototype={}
A.dG.prototype={$ibo:1}
A.fk.prototype={
bZ(a){var s,r,q,p,o,n=a.c,m=n.a
if(!m.ga4(0))A.k(A.w("Transform.translation must be finite: "+m.n(0),null))
m=n.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)&&isFinite(m.d)))A.k(A.w("Transform.rotation must be finite: "+m.n(0),null))
if(!isFinite(1))A.k(A.w(u.u,null))
m=this.a.bq(a.a).d
n=n.ap()
s=m.a
r=s.a
q=s.b
s=s.c
m=m.b
p=m.a
o=m.b
m=m.c
return A.cd(new A.R(A.f([new A.z(r,q,s),new A.z(p,q,s),new A.z(r,o,s),new A.z(p,o,s),new A.z(r,q,m),new A.z(p,q,m),new A.z(r,o,m),new A.z(p,o,m)],t.k),t.pc.a(n.gb0()),t.mz))},
gdG(){return new A.c9(this.kS(),t.fJ)},
kS(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdG(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.b9(),n=o.$ti,o=new A.bv(o.a(),n.i("bv<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.E()
f=k.a(g.a)
m.ak(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ap()
f=f.gb5()
d=A.L(f)
r=5
return a.b=new A.dG(h,g,A.cd(new A.R(f,d.i("z(1)").a(i.gb0()),d.i("R<1,z>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$ivI:1}
A.mN.prototype={
$3(a,b,c){return new A.ci(A.a(a),A.a(b),A.bJ(c))},
$S:34}
A.oD.prototype={
$1(a){var s=this.a.w.a.lj(a),r=s.b!=null,q=r?s.d:s.e
return new A.fm(s.c,r,q)},
$S:35}
A.oE.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hA(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hA(b)
throw A.c(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.oB.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.ov.prototype={
$0(){return null},
$S:38}
A.oA.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.or.prototype={
$0(){return this.a.at.a},
$S:39}
A.os.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.oC.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.oz.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.op.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.oq.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.ow.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.ox.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.oy.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.j()
return s},
$S:2}
A.ou.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.ot.prototype={
$0(){return this.a.at.w},
$S:40}
A.o7.prototype={}
A.js.prototype={$ivH:1}
A.jg.prototype={$iv1:1}
A.mW.prototype={
dO(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.E()
r=s.b.aS(a,b)
s.c.l(0,r.a,s.bX(a))
this.d.k(0,r)
return r},
lg(a){if(this.r)A.k(A.l("resource library is disposed"))
this.a.aK(a)
this.d.ah(0,a)},
dN(a){var s,r=null
if(this.r)A.k(A.l("resource library is disposed"))
if(a.a.length===0)A.k(A.w("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.w(u.i,r))
if(a.w===0||a.x===0)A.k(A.w(u.p,r))
if(!isFinite(0.5))A.k(A.w(u.n,r))
s=this.b.a.aS(a,r)
this.e.k(0,s)
return s},
hI(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.aS(new A.cw(new A.hT(c,b,1,!1,B.Y,B.Y,B.b9),A.c0(1,null,!1,t.nh),!1),a)
this.f.k(0,s)
return s},
br(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.K(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.p)(r),++l){k=r[l]
j=o.ah(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aK(k)}r=i.e
q=A.K(r,A.o(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.p)(q),++l)o.aK(q[l])
q=i.d
p=A.K(q,A.o(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.p)(p),++l)n.aK(p[l])
s.H(0)
r.H(0)
q.H(0)
i.r=!0}}
A.n1.prototype={
gaw(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
ht(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.at)throw A.c(A.l("renderer can only be initialized once"))
a.E()
b.E()
s=m.a
if(s.b===B.M)throw A.c(A.l("renderer device is context lost"))
m.e=B.fu
try{m.r=s.hF()
r=m.b
q=A.mn(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.E()
p.a=a
A.mn(a)
p.d=1
r.b.hs(q)
r=A.vn()
m.w=new A.mW(A.vo(s),r,A.vS(s),A.a5(t.l0),A.a5(t.fP),A.a5(t.lu))
r=new A.iB()
p=new A.lo(s,r)
q=A.mn(a)
o=p.em(q,a)
r.hs(q)
p.c=new A.iu(new A.mv(q),o)
m.x=p
m.y=new A.mB(s,A.x(t.N,t.gY))
m.as=a
A.t8(m)
m.e=B.au}catch(n){s=m.y
if(s!=null){r=s.b
s.iY(new A.aB(r,A.o(r).i("aB<2>")))
r.H(0)}s=m.x
if(s!=null)s.br()
s=m.w
if(s!=null)s.br()
m.w=null
m.e=B.at
throw n}return A.pu(t.H)},
ku(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bO()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.c(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.aj)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.nd(j,0,A.dO(k.c,"count",t.S),A.L(j).c).bf(0,!1)
k.b=B.dB
q=i
try{A.xd(a3,r,s)
k=r.gdG()
j=t.p9
h=k.$ti
k=A.K(A.ib(k,h.i("aW(n.E)").a(new A.n2()),h.i("n.E"),j),j)
p=k
J.ug(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.p)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.de(B.am,h))
j=j.b
d=j.$ti
j.ak(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.d(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.K(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.T()
n=j+h}p=s.e
k=J.aT(o)
j=n
h=J.aT(o)
f=a3.w
d=f.a.gbB()
f=f.c.gbB()
c=a3.w
c.a.gbB()
c.c.gbB()
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
return new A.lb(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
ju(){var s,r,q,p=this
if(p.e!==B.bD)return
if(p.a.b===B.M)throw A.c(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.l("resource library is disposed"))
s.a.dP()
s.c.dP()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.l("GPU resource adapter is not initialized"))
s.c=new A.iu(q.a,s.em(A.mn(r),r))
s=p.y
s.c=null
s.b.H(0)
A.t8(p)
p.e=B.au},
bO(){var s=this.e
if(s!==B.au)throw A.c(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.M){this.e=B.bD
throw A.c(A.l("renderer context lost"))}}}
A.n2.prototype={
$1(a){return t.os.a(a).b},
$S:41}
A.b7.prototype={
F(a,b){var s,r=this
t.nL.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$iaA:1}
A.b4.prototype={
F(a,b){var s
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$iaA:1}
A.ar.prototype={}
A.pq.prototype={
$2(a,b){var s=t.p
return s.a(a).a.F(0,s.a(b).a)},
$S:42}
A.pr.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.po.prototype={
$2(a,b){var s=t.d
return s.a(a).a.F(0,s.a(b).a)},
$S:44}
A.pp.prototype={
$1(a){return t.d.a(a).b},
$S:45}
A.kM.prototype={}
A.hh.prototype={
gb5(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.f([new A.z(o,n,p),new A.z(r,n,p),new A.z(o,q,p),new A.z(r,q,p),new A.z(o,n,s),new A.z(r,n,s),new A.z(o,q,s),new A.z(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.dp.prototype={}
A.e7.prototype={
A(){return"FrustumTest."+this.b}}
A.lc.prototype={
lv(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.b5
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.dC:B.dD}}
A.ld.prototype={
$4(a,b,c,d){var s=new A.z(a,b,c),r=new A.dp(s,d),q=Math.sqrt(s.gbA())
if(q<1e-9)s=r
else{s=1/q
s=new A.dp(new A.z(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.cm.prototype={
W(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.cm(h)},
hK(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
hz(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!(s<16))return A.d(i,s)
s=i[s]
if(!(d<16))return A.d(h,d)
h[d]=s}if(15>=16)return A.d(h,15)
h[15]=1
return new A.cm(h)},
ga4(a){return B.u.a3(this.a,new A.me())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.me.prototype={
$1(a){return isFinite(A.cZ(a))},
$S:5}
A.ix.prototype={
n(a){var s=this
return"Quat("+A.q(s.a)+", "+A.q(s.b)+", "+A.q(s.c)+", "+A.q(s.d)+")"}}
A.iO.prototype={
E(){var s=this.a
if(!s.ga4(0))throw A.c(A.w("Transform.translation must be finite: "+s.n(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.c(A.w("Transform.rotation must be finite: "+s.n(0),null))
if(!isFinite(1))throw A.c(A.w(u.u,null))},
ap(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.r5(A.f([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.r5(A.f([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
n(a){return"Transform("+this.a.n(0)+", "+this.b.n(0)+", scale=1)"}}
A.z.prototype={
bs(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aR(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.z(s*r-q*p,q*o-n*r,n*p-s*o)},
gbA(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbA())},
ga4(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga5(){var s=this,r=Math.sqrt(s.gbA())
return r<1e-9?B.aK:new A.z(s.a/r,s.b/r,s.c/r)},
U(a,b){if(b==null)return!1
return b instanceof A.z&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gG(a){return A.cn(this.a,this.b,this.c,B.k)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.fD.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eN.prototype={
gae(){return this.f},
aa(a,b){B.a.k(a.a,new A.ak(this.f,B.y,A.f([new A.P(this.x,B.h),new A.P(this.y,B.j)],t.C)))},
a9(a){var s=this,r=s.a.ag(new A.aN(s.e,s.b,s.c,B.q,B.bv,B.br)),q=A.c8(s.d),p=t.n,o=s.y,n=s.r===B.ch?new Float32Array(A.a3(A.f([1/o.c,0],p))):new Float32Array(A.a3(A.f([0,1/o.d],p)))
return A.f([new A.j7(new A.aM(s.f,A.f([new A.P(s.x,B.h),new A.P(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$ia9:1}
A.j7.prototype={
ab(a){return},
$ia0:1,
ga_(){return this.a}}
A.hr.prototype={
gae(){return"bloomComposite"},
aa(a,b){B.a.k(a.a,new A.ak("bloomComposite",B.y,A.f([B.c2,B.bX,new A.P($.ps(),B.j)],t.C)))},
a9(a){var s=this,r="bloomComposite",q=s.a.ag(new A.aN(r,s.b,s.c,B.q,B.eQ,B.eC)),p=A.c8(s.d)
return A.f([new A.j8(new A.aM(r,A.f([B.c2,B.bX,new A.P($.ps(),B.j)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$ia9:1}
A.j8.prototype={
ab(a){return},
$ia0:1,
ga_(){return this.a}}
A.hE.prototype={
gae(){return"depthPrepass"},
aa(a,b){B.a.k(a.a,new A.ak("depthPrepass",B.dN,A.f([B.bY],t.C)))},
a9(a){var s=this,r="depthPrepass",q=s.a.ag(new A.aN(r,s.b,s.c,B.bu,B.bs,B.ej))
return A.f([new A.jb(new A.aM(r,A.f([B.bY],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$ia9:1}
A.jb.prototype={
ab(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bV(b,a.ai("sceneDepth").b)
A.bd(b,g.a.a6())
A.en(b,B.af,1,0,0,0)
A.cS(b,g.b.b)
A.A(b,"uVertexSnapGrid",new A.F(B.e,c.y))
A.A(b,"uAlbedo",B.E)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
k=l.a.b
A.A(b,"uViewProjection",new A.F(B.o,new Float32Array(A.a3(d))))
A.A(b,"uModel",new A.F(B.o,new Float32Array(A.a3(k.c.ap().a))))
g.iZ(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.f)A.k(A.l(f))
n.bindVertexArray(A.e(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.f)A.k(A.l(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.f)A.k(A.l(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
iZ(a,b,c){var s,r=this.d.$1(b),q=a.a
A.bt(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.F(B.e,0))
A.A(q,"uAffineWarpStrength",new A.F(B.e,0))
s=this.a.a6()
A.bd(q,r.at?s.dY(!1):s)},
$ia0:1,
ga_(){return this.a}}
A.fF.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eS.prototype={
gae(){return this.f},
aa(a,b){B.a.k(a.a,new A.ak(this.f,B.y,A.f([new A.P(this.w,B.h),new A.P(this.x,B.j)],t.C)))},
a9(a){var s=this,r=s.a.ag(new A.aN(s.e,s.b,s.c,B.q,B.bv,B.br)),q=A.c8(s.d),p=t.n,o=s.x,n=s.r===B.ci?new Float32Array(A.a3(A.f([1/o.c,0],p))):new Float32Array(A.a3(A.f([0,1/o.d],p)))
return A.f([new A.jc(new A.aM(s.f,A.f([new A.P(s.w,B.h),new A.P(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$ia9:1}
A.jc.prototype={
ab(a){return},
$ia0:1,
ga_(){return this.a}}
A.hI.prototype={
gae(){return"dofComposite"},
aa(a,b){B.a.k(a.a,new A.ak("dofComposite",B.y,A.f([new A.P(this.z,B.h),B.c0,B.bV],t.C)))},
a9(a){var s=this,r="dofComposite",q=s.a.ag(new A.aN(r,s.b,s.c,B.q,B.eP,B.ei)),p=A.c8(s.d)
return A.f([new A.jd(new A.aM(r,A.f([new A.P(s.z,B.h),B.c0,B.bV],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$ia9:1}
A.jd.prototype={
ab(a){var s,r=this,q=a.ai("dofOutput"),p=r.r.$0(),o=a.b.a
A.bV(o,q.b)
A.bd(o,r.a.a6())
A.cS(o,r.b.b)
s=t._
A.bt(o,0,s.a(r.d.$0()))
A.A(o,"uSharp",B.E)
A.bt(o,1,s.a(r.e.$0()))
A.A(o,"uBlurred",B.a4)
A.bt(o,2,s.a(r.f.$0()))
A.A(o,"uSceneDepth",B.cc)
A.A(o,"uNear",new A.F(B.e,p.f))
A.A(o,"uFar",new A.F(B.e,p.r))
A.A(o,"uFocusDistance",new A.F(B.e,r.w))
A.A(o,"uFocusRange",new A.F(B.e,r.x))
A.A(o,"uStrength",new A.F(B.e,0))
A.bW(o,r.c)
A.dA(o,3,0)},
$ia0:1,
ga_(){return this.a}}
A.hW.prototype={
gae(){return"grade"},
aa(a,b){B.a.k(a.a,new A.ak("grade",B.y,A.f([new A.P(this.r,B.h),B.bT],t.C)))},
a9(a){var s=this,r=s.a.ag(new A.aN("grade",s.b,s.c,B.q,B.eN,B.eD)),q=A.c8(s.d),p=s.r
return A.f([new A.ji(new A.aM("grade",A.f([new A.P(p,B.h),B.bT],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$ia9:1}
A.ji.prototype={
ab(a){var s=this,r=a.ai(s.f.a),q=a.b.a
A.bV(q,a.ai("gradeOutput").b)
A.bd(q,s.a.a6())
A.cS(q,s.b.b)
A.bt(q,0,r.b)
A.A(q,"uScene",B.E)
A.bt(q,1,t._.a(s.d.$0()))
A.A(q,"uLut",B.a4)
A.A(q,"uLutSize",new A.F(B.e,s.e))
A.A(q,"uStrength",new A.F(B.e,a.c.e.w))
A.bW(q,s.c)
A.dA(q,3,0)},
$ia0:1,
ga_(){return this.a}}
A.ht.prototype={}
A.hs.prototype={
ai(a){var s=this.a.h(0,a)
if(s==null)throw A.c(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$ivG:1}
A.fh.prototype={
gae(){return"present"},
aa(a,b){B.a.k(a.a,new A.ak("present",B.dO,A.f([new A.P(this.f,B.h)],t.C)))},
a9(a){var s=this,r=s.a.ag(new A.aN("present",s.b,s.c,B.q,B.eW,B.l)),q=A.c8(s.d),p=s.f
return A.f([new A.jt(new A.aM("present",A.f([new A.P(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$ia9:1}
A.jt.prototype={
ab(a){var s=this,r=a.ai(s.d.a),q=a.b.a
A.bV(q,null)
A.bd(q,s.a.a6())
A.cS(q,s.b.b)
A.bW(q,s.c)
A.bt(q,0,r.b)
A.dA(q,3,0)},
$ia0:1,
ga_(){return this.a}}
A.iw.prototype={
gae(){return"ps1Quantize"},
aa(a,b){B.a.k(a.a,new A.ak("ps1Quantize",B.y,A.f([new A.P(this.e,B.h),B.c_],t.C)))},
a9(a){var s=this,r="ps1Quantize",q=s.a.ag(new A.aN(r,s.b,s.c,B.q,B.eS,B.ed)),p=A.c8(s.d),o=s.e
return A.f([new A.ju(new A.aM(r,A.f([new A.P(o,B.h),B.c_],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$ia9:1}
A.ju.prototype={
ab(a){var s=this,r=a.ai(s.d.a),q=a.b.a
A.bV(q,a.ai("ps1Output").b)
A.bd(q,s.a.a6())
A.cS(q,s.b.b)
A.bt(q,0,r.b)
A.A(q,"uScene",B.E)
A.A(q,"uQuantizationBits",new A.F(B.e,a.c.e.z))
A.A(q,"uDitherStrength",new A.F(B.e,0))
A.bW(q,s.c)
A.dA(q,3,0)},
$ia0:1,
ga_(){return this.a}}
A.dw.prototype={}
A.iE.prototype={
gae(){return"shadow"},
aa(a,b){B.a.k(a.a,new A.ak("shadowCaster",B.dM,A.f([B.bU],t.C)))},
a9(a){var s=this,r="shadowCaster",q=s.a.ag(new A.aN(r,s.b,s.c,B.bu,B.bs,B.eB))
return A.f([new A.jw(new A.aM(r,A.f([B.bU],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$ia9:1}
A.jw.prototype={
ab(a){var s,r,q,p,o=this,n=a.ai("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bV(s,n.b)
A.bd(s,o.a.a6())
A.en(s,B.af,1,0,0,0)
return}r=A.rh(l)
o.r.$1(r)
s=m.a
A.bV(s,n.b)
A.bd(s,o.a.a6())
A.en(s,B.af,1,0,0,0)
A.cS(s,o.b.b)
A.A(s,"uAlbedo",B.E)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.p)(s),++p)o.j0(m,s[p],r)},
eO(a,b){var s,r=this.d.$1(b),q=a.a
A.bt(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.F(B.e,0))
s=this.a.a6()
A.bd(q,r.at?s.dY(!1):s)},
j0(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dG){s=b.b
if(!s.r)return
n.eJ(a,s.c,c)
n.eO(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bW(s,r.a)
q=r.b
p=r.c
if(q)A.pN(s,p,0)
else A.dA(s,p,0)}else if(b instanceof A.dg){s=b.a.b
if(!s.r)return
n.eJ(a,s.c,c)
n.eO(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bW(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pO(s,p,o,0)
else A.pM(s,p,0,o)}else throw A.c(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dR(b).n(0),null))},
eJ(a,b,c){var s=a.a
A.A(s,"uModel",new A.F(B.o,new Float32Array(A.a3(b.ap().a))))
A.A(s,"uLightViewProjection",new A.F(B.o,new Float32Array(A.a3(c.a.a))))},
$ia0:1,
ga_(){return this.a}}
A.oV.prototype={
$1(a){return this.a.a=a},
$S:49}
A.oW.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.iF.prototype={
gae(){return"shadowedWorld"},
aa(a,b){var s=A.f([B.bZ],t.C)
if(this.z)s.push(B.c1)
s.push(B.a3)
B.a.k(a.a,new A.ak("shadowedWorld",B.bb,s))},
a9(a){var s=this,r="shadowedWorld",q=s.a.ag(new A.aN(r,s.b,s.c,B.eV,B.eJ,B.eb)),p=A.f([B.bZ],t.C)
if(s.z)p.push(B.c1)
p.push(B.a3)
return A.f([new A.jx(new A.aM(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$ia9:1}
A.jx.prototype={
ab(a){var s,r,q,p,o,n,m,l=this,k=null,j=a.ai("sceneColor"),i=a.b,h=a.c,g=h.c,f=h.d,e=h.e,d=l.r.$0(),c=i.a
A.bV(c,j.b)
A.bd(c,l.a.a6())
A.en(c,B.aW,1,0,0,0)
A.cS(c,l.b.b)
A.A(c,"uAlbedo",B.E)
s=t._
A.bt(c,1,s.a(l.f.$0()))
A.A(c,"uShadowMap",B.a4)
r=t.n
A.A(c,"uShadowMapTexelSize",new A.F(B.cb,new Float32Array(A.a3(A.f([0.001953125,0.001953125],r)))))
A.bt(c,2,s.a(l.x.$0()))
A.A(c,"uSsao",B.cc)
A.A(c,"uVertexSnapGrid",new A.F(B.e,e.y))
A.A(c,"uSceneColorSize",new A.F(B.cb,new Float32Array(A.a3(A.f([l.y,l.z],r)))))
A.A(c,"uViewProjection",new A.F(B.o,new Float32Array(A.a3(g.c.a))))
A.A(c,"uView",new A.F(B.o,new Float32Array(A.a3(g.a.a))))
A.A(c,"uLightViewProjection",new A.F(B.o,new Float32Array(A.a3(d.a.a))))
s=f.b
A.A(c,"uFogColor",new A.F(B.D,new Float32Array(A.a3(A.f([s.a,s.b,s.c],r)))))
A.A(c,"uFogStart",new A.F(B.e,f.c))
A.A(c,"uFogEnd",new A.F(B.e,f.d))
A.A(c,"uFogHeightFalloff",new A.F(B.e,0))
A.A(c,"uFogDensity",new A.F(B.e,0))
s=l.w.$0()==null
q=s?k:B.F
if(q==null)q=B.F
p=s?k:B.a5
if(p==null)p=B.a5
A.A(c,"uLightPosition",new A.F(B.D,new Float32Array(A.a3(A.f([q.a,q.b,q.c],r)))))
A.A(c,"uLightDirection",new A.F(B.D,new Float32Array(A.a3(A.f([p.a,p.b,p.c],r)))))
o=s?k:1
A.A(c,"uLightRange",new A.F(B.e,o==null?1:o))
o=s?k:0.3
if(o==null)o=0.3
A.A(c,"uLightInnerCos",new A.F(B.e,Math.cos(o)))
s=s?k:0.5
if(s==null)s=0.5
A.A(c,"uLightOuterCos",new A.F(B.e,Math.cos(s)))
n=f.r
A.A(c,"uAmbientColor",new A.F(B.D,new Float32Array(A.a3(A.f([n.a,n.b,n.c],r)))))
A.A(c,"uAmbientIntensity",new A.F(B.e,f.w))
for(c=h.a,s=c.length,r=e.x,m=0;m<c.length;c.length===s||(0,A.p)(c),++m)l.eP(i,c[m],r)
for(h=h.b,c=h.length,m=0;m<h.length;h.length===c||(0,A.p)(h),++m)l.eP(i,h[m],r)},
eP(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dG){s=b.b
n.eQ(a,s.c)
n.eK(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bW(s,r.a)
q=r.b
p=r.c
if(q)A.pN(s,p,0)
else A.dA(s,p,0)}else if(b instanceof A.dg){s=b.a.b
n.eQ(a,s.c)
n.eK(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bW(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pO(s,p,o,0)
else A.pM(s,p,0,o)}else throw A.c(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dR(b).n(0),null))},
eK(a,b,c,d,e){var s,r=this.d.$1(b),q=a.a
A.bt(q,0,t._.a(this.e.$1(r.b)))
A.A(q,"uAlphaCutoff",new A.F(B.e,0))
A.A(q,"uOpaqueCoverage",new A.F(B.e,c===B.ai?0:1))
A.A(q,"uAffineWarpStrength",new A.F(B.e,0))
A.A(q,"uMaterialTint",new A.F(B.D,new Float32Array(A.a3(A.f([r.c,r.d,r.e],t.n)))))
A.A(q,"uEmissiveStrength",new A.F(B.e,0))
A:{s=null
if(B.ai===c){switch(d.a){case 0:s=B.cJ
break
case 1:s=B.cI
break}break A}if(B.L===c||B.cH===c){s=this.a.a6()
break A}}A.bd(q,r.at?s.dY(!1):s)},
eQ(a,b){var s=b.ap(),r=a.a
A.A(r,"uModel",new A.F(B.o,new Float32Array(A.a3(s.a))))
A.A(r,"uNormalMatrix",new A.F(B.o,new Float32Array(A.a3(s.hz().a))))},
$ia0:1,
ga_(){return this.a}}
A.iI.prototype={
gae(){return"ssaoOcclusion"},
aa(a,b){B.a.k(a.a,new A.ak("ssaoOcclusion",B.ba,A.f([B.bQ],t.C)))},
a9(a){var s=this,r="ssaoOcclusion",q=s.a.ag(new A.aN(r,s.b,s.c,B.q,B.eR,B.ea)),p=A.c8(s.d)
return A.f([new A.jB(new A.aM(r,A.f([B.bQ],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$ia9:1}
A.jB.prototype={
ab(a){var s=a.b.a
A.bV(s,a.ai("ssaoRaw").b)
A.bd(s,this.a.a6())
A.en(s,B.aV,1,1,1,1)
return},
$ia0:1,
ga_(){return this.a}}
A.iH.prototype={
gae(){return"ssaoBlur"},
aa(a,b){B.a.k(a.a,new A.ak("ssaoBlur",B.ba,A.f([B.bW,B.bP],t.C)))},
a9(a){var s=this,r="ssaoBlur",q=s.a.ag(new A.aN(r,s.b,s.c,B.q,B.eK,B.eG)),p=A.c8(s.d)
return A.f([new A.jA(new A.aM(r,A.f([B.bW,B.bP],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$ia9:1}
A.jA.prototype={
ab(a){var s=a.b.a
A.bV(s,a.ai("ssaoBlurred").b)
A.bd(s,this.a.a6())
A.en(s,B.aV,1,1,1,1)
return},
$ia0:1,
ga_(){return this.a}}
A.iW.prototype={
gae(){return"vhs"},
aa(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.ak("vhs",B.y,A.f([new A.P(this.r,B.h),B.bS,B.bR],t.C)))},
a9(a){var s=this,r=s.a.ag(new A.aN("vhs",s.b,s.c,B.q,B.eL,B.ee)),q=A.c8(s.d),p=s.r
return A.f([new A.jH(new A.aM("vhs",A.f([new A.P(p,B.h),B.bS,B.bR],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$ia9:1}
A.jH.prototype={
ab(a){var s,r=this,q=a.ai(r.f.a),p=a.ai("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bV(n,p.b)
A.bd(n,r.a.a6())
A.cS(n,r.b.b)
A.bt(n,0,q.b)
A.A(n,"uScene",B.E)
A.bt(n,1,t._.a(r.d.$0()))
A.A(n,"uHistory",B.a4)
A.A(n,"uTime",new A.F(B.e,r.e.$0()))
A.A(n,"uChromaWeight",new A.F(B.e,o.Q))
A.A(n,"uTrackingWeight",new A.F(B.e,m))
A.A(n,"uNoiseWeight",new A.F(B.e,o.at))
A.A(n,"uHeadSwitchWeight",new A.F(B.e,o.ax))
A.A(n,"uDropoutWeight",new A.F(B.e,o.ay))
A.A(n,"uGhostWeight",new A.F(B.e,s))
A.bW(n,r.c)
A.dA(n,3,0)},
$ia0:1,
ga_(){return this.a}}
A.fm.prototype={}
A.j3.prototype={
gae(){return"world"},
aa(a,b){B.a.k(a.a,new A.ak("worldOpaqueTransparent",B.bb,A.f([B.a3],t.C)))},
a9(a){var s=this,r=s.a.ag(new A.aN("safeWorld",s.b,s.c,B.eU,B.q,B.e8))
return A.f([new A.jI(new A.aM("worldOpaqueTransparent",A.f([B.a3],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$ia9:1}
A.jI.prototype={
ab(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bV(j,a.ai("sceneColor").b)
A.bd(j,n.a.a6())
A.en(j,B.aW,1,0,0,0)
A.cS(j,n.b.b)
A.A(j,"uViewProjection",new A.F(B.o,new Float32Array(A.a3(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.F
q=t.n
A.A(j,"uLightDir",new A.F(B.D,new Float32Array(A.a3(A.f([r.a,r.b,r.c],q)))))
p=k.r
A.A(j,"uAmbientColor",new A.F(B.D,new Float32Array(A.a3(A.f([p.a,p.b,p.c],q)))))
A.A(j,"uAmbientIntensity",new A.F(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.p)(j),++o)n.ep(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.p)(l),++o)n.ep(m,l[o])},
ep(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dg){s=b.a.b
n.eM(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bW(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pO(s,p,o,0)
else A.pM(s,p,0,o)}else if(b instanceof A.dG){s=b.b
n.eM(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bW(s,r.a)
q=r.b
p=r.c
if(q)A.pN(s,p,0)
else A.dA(s,p,0)}else throw A.c(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dR(b).n(0),null))},
eM(a,b){var s=b.ap(),r=a.a
A.A(r,"uModel",new A.F(B.o,new Float32Array(A.a3(s.a))))
A.A(r,"uNormalMatrix",new A.F(B.o,new Float32Array(A.a3(s.hz().a))))},
$ia0:1,
ga_(){return this.a}}
A.kH.prototype={
bG(a){var s,r,q
a.E()
s=A.a5(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.as
else q=r===0?B.aq:B.ar
return new A.dq(q,s)},
hX(a){var s,r=this.bG(a).a
A:{if(B.as===r){s=B.fl
break A}if(B.ar===r){s=B.fk
break A}s=B.a_
break A}return s}}
A.hS.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.eY.prototype={
A(){return"GpuBufferKind."+this.b}}
A.hU.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.hV.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.hR.prototype={}
A.hT.prototype={}
A.dd.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.f_.prototype={}
A.eZ.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dv.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.fq.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cP.prototype={
A(){return"UniformType."+this.b}}
A.F.prototype={}
A.e0.prototype={
A(){return"ClearMask."+this.b}}
A.hF.prototype={$iuL:1}
A.iu.prototype={
hA(a){var s=this.b.h(0,a)
if(s==null)throw A.c(A.l("resource is not in candidate: "+a))
return s}}
A.lo.prototype={
gp(){var s=this.c
if(s==null)throw A.c(A.l("GPU resource adapter is not initialized"))
return s},
br(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.iX(s.b)
r.b.br()
r.c=null
r.e=!0},
em(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.x(a6,a7),a9=A.f([],t.l2)
try{for(p=b0.a.a,p=A.jn(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.a8(s,"sceneColor#1")){j=J.aS(a8,"sceneColor")
j.toString
J.bO(a8,s,j)
continue}j=this.j_(s,b1)
if(n.b!==B.f)A.k(A.l(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.w("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.i(l.createFramebuffer())
if(h==null)A.k(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.ak
if(f&&!j.e)A.k(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.b8||g===B.dK
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
if(g!==a0){A.pR(n,h,d,c,a1,a2,b,a)
A.k(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.cY(new A.h3(h,d,c,a1,a2,b,a,i,j.b))
J.hg(a9,r)
J.bO(a8,s,r)}a6=A.ce(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.L(a6).i("fo<1>"),a6=new A.fo(a6,p),a6=new A.bn(a6,a6.gq(0),p.i("bn<a2.E>")),o=this.a,n=t.jg,p=p.i("a2.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.pR(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
j_(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.f_(512,512,1,B.ak,!0)
if(a==="sceneDepth")return new A.f_(o,n,1,B.ak,!0)
s=B.b.Y(a,"ssao")||B.b.Y(a,"bloomBlur")||B.b.Y(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.f_(r,q,1,p?B.b8:B.dJ,p)},
iX(a){var s,r,q,p,o,n=A.pA(t.f7.a(a).gal(),t._)
for(n=A.jn(n,n.r,A.o(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.pR(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.et.prototype={
A(){return"_SlotState."+this.b}}
A.cW.prototype={
sb6(a){this.c=this.$ti.i("1?").a(a)}}
A.c3.prototype={
aS(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.cW(B.aa,n.i("cW<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.hD
p.sb6(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c3(a){return this.aS(a,null)},
ak(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.c(A.de(B.be,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.de(B.bf,a))
s=q.b
if(s===B.ab||s===B.aa)throw A.c(A.de(B.am,a))},
bq(a){var s,r,q=this.$ti
q.c.a(a)
this.ak(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dT(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.ak(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sb6(b)},
aK(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.c(A.de(B.be,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.de(B.bf,a))
r=q.b
if(r===B.ab||r===B.aa)throw A.c(A.de(B.dW,a))
q.b=B.ab
q.sb6(null)
B.a.k(p.c,s);++p.e},
b9(){return new A.c9(this.kT(),this.$ti.i("c9<+(1,2)>"))},
kT(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$b9(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.ab||j===B.aa){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.bF(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.hp.prototype={
A(){return"BlendEquation."+this.b}}
A.d3.prototype={
A(){return"BlendFactor."+this.b}}
A.hB.prototype={
A(){return"CullFace."+this.b}}
A.hD.prototype={
A(){return"DepthFunc."+this.b}}
A.eT.prototype={
dY(a){var s=this
return A.qN(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aE.prototype={
A(){return"StateField."+this.b}}
A.nD.prototype={
kn(a){var s,r=this.a
if(r==null)return A.mb(B.eA,t.dB)
s=A.a5(t.dB)
if(r.a!==a.a)s.k(0,B.aA)
if(r.b!==a.b)s.k(0,B.aB)
if(r.c!==a.c)s.k(0,B.aC)
if(r.d!==a.d)s.k(0,B.aD)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aE)
if(r.r!==a.r)s.k(0,B.aF)
if(r.w!==a.w)s.k(0,B.aG)
if(r.x!==a.x)s.k(0,B.aH)
return s}}
A.cY.prototype={$icg:1}
A.h4.prototype={}
A.h3.prototype={}
A.j2.prototype={
iB(a){var s=this,r=A.e(s.a.canvas)
s.c=A.al(new A.nB(s))
s.d=A.al(new A.nC(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hF(){var s=this,r=v.G,q=s.bk(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.bk(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.bk(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.bk(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.bk(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.cB(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.cB(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.mD("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
bk(a){var s=A.cB(this.a.getParameter(a))
return typeof s=="number"?B.d.aN(s):0},
$iv4:1}
A.nB.prototype={
$1(a){A.e(a).preventDefault()
this.a.b=B.M},
$S:4}
A.nC.prototype={
$1(a){A.e(a)
this.a.b=B.f},
$S:4}
A.hH.prototype={
C(){var s=this
return A.T(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.hm.prototype={
io(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
j===$&&A.j()
s=k.a
A.i(j.connect(A.e(s.destination)))
r=k.d
r===$&&A.j()
A.e(r.gain).value=0.25
q=k.e
q===$&&A.j()
A.e(q.gain).value=0.12
p=k.f
p===$&&A.j()
A.e(p.gain).value=0.2
o=k.r
o===$&&A.j()
A.e(o.gain).value=0.4
n=k.w
n===$&&A.j()
A.e(n.gain).value=0.1
m=k.x
m===$&&A.j()
A.e(m.gain).value=1
for(r=[r,q,p,o,n,m],l=0;l<6;++l)A.i(r[l].connect(j))
r=k.y
r===$&&A.j()
A.e(r.gain).value=1
q=k.z
q===$&&A.j()
A.e(q.gain).value=0.35
A.i(p.connect(r))
A.i(o.connect(r))
o=k.Q
o===$&&A.j()
A.i(r.connect(o))
A.i(o.connect(q))
A.i(q.connect(j))
q=A.e(s.createBiquadFilter())
q.type="highpass"
A.e(q.frequency).value=80
k.dx!==$&&A.y()
k.dx=q
o=A.e(s.createBiquadFilter())
o.type="lowpass"
A.e(o.frequency).value=11e3
k.dy!==$&&A.y()
k.dy=o
A.i(q.connect(o))
A.i(o.connect(A.e(s.destination)))
j.disconnect(A.e(s.destination))
A.i(j.connect(q))},
hJ(){var s=this.a
if(A.G(s.state)==="suspended")A.e(s.resume())},
eR(a){var s,r,q=this
if(B.b.Y(a,"vo-")){s=q.x
s===$&&A.j()
return s}r=B.eO.h(0,a)
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
j8(){var s,r,q,p,o,n,m,l=this.a,k=A.bI(l.sampleRate),j=B.d.aM(k*2),i=A.e(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.ck()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dJ(a,b){var s,r,q,p=this,o=p.as.h(0,a)
if(o==null)return
s=p.a
r=A.e(s.createBufferSource())
r.buffer=o
A.e(r.playbackRate).value=0.94+p.at.ck()*0.12
q=A.e(s.createGain())
A.e(q.gain).value=b
A.i(r.connect(q))
A.i(q.connect(p.eR(a)))
r.onended=A.al(new A.kt(r,q))
r.start()},
l8(a){return this.dJ(a,1)},
hD(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this,k=l.as.h(0,a)
if(k==null)return
s=l.a
r=A.e(s.createBufferSource())
r.buffer=k
A.e(r.playbackRate).value=d*(0.94+l.at.ck()*0.12)
q=A.e(s.createGain())
A.e(q.gain).value=c
p=A.e(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.e(p.positionX).value=b.a
A.e(p.positionY).value=b.b
A.e(p.positionZ).value=b.c
o=A.e(s.createBiquadFilter())
o.type="lowpass"
A.e(o.frequency).value=2e4
n=A.e(s.createGain())
A.e(n.gain).value=1
if(g!=null&&f!=null){A.e(o.frequency).value=f
A.e(n.gain).value=Math.pow(10,g/20)}else{s=l.ax!=null
if(s){s=l.ax
s.toString
m=l.ek(l.b.hC(e,s))
A.e(o.frequency).value=m.b
A.e(n.gain).value=Math.pow(10,m.a/20)}}l.ay.l(0,o,new A.jz(r,q,n,o,p,e))
r.onended=A.al(new A.ks(l,o))
A.i(r.connect(q))
A.i(q.connect(n))
A.i(n.connect(o))
A.i(o.connect(p))
A.i(p.connect(l.eR(a)))
r.start()},
l9(a,b,c,d){return this.hD(a,b,c,1,d,null,null)},
ek(a){var s,r,q,p,o
t.fB.a(a)
for(s=a.length,r=0,q=2e4,p=0;p<s;++p){o=a[p]
if(o.ax&&!o.ay&&!o.z){r+=-6
q=Math.min(q,4000)}else{r+=-12
q=Math.min(q,800)}}if(s===0){r=0
q=2e4}return new A.bF(r,q)},
i_(a){if(this.ax===a)return
this.ax=a
this.bW()},
bW(){var s,r,q,p,o,n,m=this,l=m.b,k=m.ax
if(k==null)return
for(s=m.ay,s=new A.V(s,A.o(s).i("V<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o=p.f
if(o==null)continue
n=m.ek(l.hC(o,k))
A.e(q.frequency).value=n.b
A.e(p.c.gain).value=Math.pow(10,n.a/20)}}}
A.kr.prototype={
$1(a){return this.hS(t.q.a(a))},
hS(a){var s=0,r=A.b1(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.b2(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a7(A.ay(A.e(A.e(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a7(A.ay(A.e(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.a7(A.ay(A.e(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ab(h)
A.e(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$$1,r)},
$S:52}
A.kt.prototype={
$1(a){A.e(a)
this.a.disconnect()
this.b.disconnect()},
$S:4}
A.ks.prototype={
$1(a){var s
A.e(a)
s=this.a.ay.ah(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.jz.prototype={}
A.hn.prototype={
A(){return"AudioCategory."+this.b}}
A.kk.prototype={
iq(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.c(B.dw)
if(!B.a.a3(A.f([d.a,d.b,d.c],t.n),new A.kl()))throw A.c(B.d6)}}
A.kl.prototype={
$1(a){return isFinite(A.cZ(a))},
$S:5}
A.k4.prototype={
im(a,b){if(this.a.length===0)throw A.c(B.d1)
if(!B.a.a3(A.f([a.a,a.b,a.c],t.n),new A.k5()))throw A.c(B.d9)}}
A.k5.prototype={
$1(a){return isFinite(A.cZ(a))},
$S:5}
A.eM.prototype={
E(){if(B.a.O(A.f([-1.5,-12,-28,2e4,1100,320],t.n),new A.k6()))throw A.c(B.dk)},
hL(a){this.E()
if(a.ax&&!a.ay&&!a.z)return new A.bF(-1.5,2e4)
if(a.ay)return new A.bF(-28,320)
return new A.bF(-12,1100)}}
A.k6.prototype={
$1(a){return!isFinite(A.cZ(a))},
$S:5}
A.kg.prototype={
ip(a){var s=A.o(a)
if(new A.ag(a,s.i("ag<1>")).O(0,new A.ki())||new A.aB(a,s.i("aB<2>")).O(0,new A.kj()))throw A.c(B.du)}}
A.ki.prototype={
$1(a){return A.G(a).length===0},
$S:3}
A.kj.prototype={
$1(a){var s
t.a.a(a)
s=J.au(a)
return s.gI(a)||s.O(a,new A.kh())},
$S:54}
A.kh.prototype={
$1(a){return A.G(a).length===0},
$S:3}
A.km.prototype={}
A.kn.prototype={
ir(a,b,c){var s
for(s=this.b.gal(),s=s.gu(s);s.m();)s.gp().E()},
l7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.d,d=f.a.e
if(d.h(0,e)==null)throw A.c(A.l("audio source room missing: "+e))
s=b.a
if(d.h(0,s)==null)throw A.c(A.l("audio listener room missing: "+s))
r=f.jB(e,s)
for(d=r.a,q=d.length,p=f.b,o=0,n=2e4,m=0;m<d.length;d.length===q||(0,A.p)(d),++m){l=d[m]
k=p.h(0,l.a)
j=(k==null?B.aP:k).hL(l)
i=j.b
o+=j.a
if(i<n)n=i}if(!r.b&&e!==s){o=-48
n=240}s=a.c
h=f.c.a.h(0,s)
if(h==null)A.k(A.l("audio cue family missing: "+s))
q=J.au(h)
q=q.h(h,B.c.V(A.xV(s,a.f),q.gq(h)))
s=a.e
p=A.f([],t.s)
for(g=d.length,m=0;m<d.length;d.length===g||(0,A.p)(d),++m)p.push(d[m].a)
d=B.d.Z(o,-60,0)
g=B.c.Z(n,120,2e4)
A.an(p,t.N)
return new A.km(q,e,new A.b(s.a,s.b,s.c),d,g)},
jB(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.hA
s=t.N
r=A.T([a0,0],s,t.i)
q=A.T([a0,B.H],s,t.fB)
p=A.aq([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.Q,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.X(k,new A.ko(r))
j=B.a.gaI(k)
p.ah(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.fA(s,!0)}i=o.ao(j)
h=A.K(i,i.$ti.i("n.E"))
B.a.X(h,new A.kp())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.p)(h),++g){f=h[g]
e=f.bb(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.aP:d).hL(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.l(0,e,a)
b=q.h(0,j)
b.toString
b=A.K(b,m)
b.push(f)
q.l(0,e,b)
p.k(0,e)}}}return B.hz}}
A.ko.prototype={
$2(a,b){var s,r,q
A.G(a)
A.G(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.d.F(r,s)
return q===0?B.b.F(a,b):q},
$S:55}
A.kp.prototype={
$2(a,b){var s=t.Q
return B.b.F(s.a(a).a,s.a(b).a)},
$S:56}
A.fA.prototype={}
A.kG.prototype={
dH(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.uf().aR(q).ga5()
p.d=q
p.c=p.b.aR(q).ga5()
p.a=a}}
A.l8.prototype={}
A.iL.prototype={}
A.lm.prototype={
j2(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.cB(s.getParameter(34047))
if(typeof p=="number")o.c=p},
ci(a,b,c,d,e,f){return this.kU(a,b,c,d,e,f)},
kU(a,b,c,a0,a1,a2){var s=0,r=A.b1(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$ci=A.b2(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.e(A.e(j.document).createElement("img"))
m.src=a
s=7
return A.a7(A.ay(A.e(m.decode()),t.X),$async$ci)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aJ(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.j2()
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
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$ci,r)},
cj(a,b,c){var s=!1
return this.kV(t.a.a(a),b,!1)},
kV(b0,b1,b2){var s=0,r=A.b1(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cj=A.b2(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.f([],t.kG)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.e(A.e(a0.document).createElement("img"))
j.src=k
s=10
return A.a7(A.ay(A.e(j.decode()),a1),$async$cj)
case 10:J.hg(l,j)
case 8:b0.length===a||(0,A.p)(b0),++a2
s=7
break
case 9:if(J.aT(l)===0){a=A.l("texture array needs at least one layer")
throw A.c(a)}i=A.a(J.aS(l,0).width)
h=A.a(J.aS(l,0).height)
if(J.a8(i,0)||J.a8(h,0)||J.uh(l,new A.ln(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.c(a)}g=J.aT(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.a7()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jZ(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.a7()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.T()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.T()
n=[1]
s=5
break A}e=B.d.K(a+1,2)}}a=m.a
a7=A.i(a.createTexture())
if(a7==null){a=A.l("could not create texture array")
throw A.c(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aJ(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.a8(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.pt(d,16)+")")
throw A.c(a)}c=0
for(;;){a1=c
a3=J.aT(l)
if(typeof a1!=="number"){q=a1.ct()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aS(l,c)])
d=A.a(a.getError())
if(!J.a8(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.pt(d,16)+")")
throw A.c(a)}a1=c
if(typeof a1!=="number"){q=a1.T()
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
if(!J.a8(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.pt(d,16)+")")
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
A.e(v.G.console).error("texture array load failed: "+A.q(b))
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
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$cj,r)},
eS(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a8(A.cB(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.c(A.e4("shader compile failed: "+A.q(A.t4(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
az(a,b){var s=v.G,r=this.eS(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.eS(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a8(A.cB(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.c(A.e4("program link failed: "+A.q(A.t4(p,"getProgramInfoLog",o,t.w))))
return o},
ghy(){var s=A.cB(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aN(s):0},
dU(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.fj(0,c,B.c.il(b.byteLength,p))*p
if(B.c.V(o,4)!==0)A.k(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.ui(B.u.gk_(b),b.byteOffset+0*p,B.c.K(o,4)))}},
cU(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aJ(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cQ(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aJ(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
eU(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.cU(q,a,b)
s=v.G
A.aJ(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
eo(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aJ(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aJ(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cQ(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cQ(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.eU(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.eU(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cQ(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.eo(a,b)
if(d)h.drawBuffers(A.f([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.c(A.e4("framebuffer incomplete"))
return new A.iL(g,n,o,m,q,p,l,e,a,b)},
hx(a,b,c,d){return this.dI(a,b,c,d,0)},
kY(a,b,c,d){return this.dI(a,b,!0,c,d)},
aZ(a,b,c){return this.dI(a,b,c,!1,0)},
cS(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aJ(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
aD(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cU(q,b,c)
if(p!=null)n.cU(p,b,c)
n.cS(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cS(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cS(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.eo(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
lk(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aJ(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aJ(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aJ(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.f([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
ke(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
aG(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.ln.prototype={
$1(a){A.e(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:57}
A.hY.prototype={
dS(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].lJ(a)}}
A.i_.prototype={
aL(a){if(this.f)return
A.qY(a,"requestPointerLock",t.X)},
ji(a){A.e(a)
if(A.aY(a.repeat))return
if(this.b.k(0,A.G(a.code)))this.c.k(0,A.G(a.code))},
jk(a){this.b.ah(0,A.G(A.e(a).code))},
jo(a){var s=this
A.e(a)
if(!s.f)return
s.d=s.d+s.ex(a,"movementX")
s.e=s.e+s.ex(a,"movementY")},
jm(a){var s=this
A.e(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
ex(a,b){var s=A.t_(a[b])
if(s==null)s=null
return s==null?0:s}}
A.ic.prototype={}
A.dm.prototype={
geu(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gG(B.c.co(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gG(B.c.co(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
U(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.dm&&A.jY(r)===A.jY(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gG(a){return this.geu()}}
A.mg.prototype={
iw(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].geu(),q)}}
A.cO.prototype={
cn(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.u.i0(s,0,m,l)
n.a=s}r=b.a8(0,a).aR(d.a8(0,a)).ga5()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fs(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fs(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fs(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fs(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fs(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fs(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aj(a,b,c,d,e){return this.cn(a,b,c,d,e,1,1)}}
A.mM.prototype={
j9(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.az(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.y()
m.w=r
q=s.az(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
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
m.d=s.aZ(m.ay,m.ch,!1)
m.e=s.aZ(m.ay,m.ch,!1)
m.f=s.aZ(m.ay,m.ch,!1)
p=A.i(p.createVertexArray())
p.toString
m.CW!==$&&A.y()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
ja(){var s
try{this.r=this.b.aZ(384,216,!1)}catch(s){this.r=null}},
li(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.aG(n)
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
p.aG(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.j()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aG(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.mV.prototype={
cG(a,b,c){var s,r,q
try{r=this.a.az(b,c)
return r}catch(q){s=A.ab(q)
r=A.e4(a+": "+A.q(s))
throw A.c(r)}}}
A.mO.prototype={}
A.fH.prototype={}
A.jC.prototype={}
A.jq.prototype={}
A.jo.prototype={}
A.mP.prototype={
ix(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.f([new A.dm(0,0,1,0),new A.dm(1,0,1,0),new A.dm(2,0,1,0)],t.mn),e=t.S
e=new A.mg(f,A.x(e,e))
e.iw(f)
h.dD=e
h.h4=1.9
h.dr=h.aW/h.aV
r=J.i4(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fH()
t.cu.a(r)
f=h.aA
e=f.az("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.az(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.az(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.az(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.az(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ac!==$&&A.y()
h.ac=new A.mV(f,e,p,o,n,m)
h.b=t.d4.a(new A.mQ(h))
h.eH()
h.eG()
o=h.ar
p=A.i(o.getUniformLocation(m,"uTex"))
h.fz!==$&&A.y()
h.fz=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.fA!==$&&A.y()
h.fA=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.fc!==$&&A.y()
h.fc=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.fb!==$&&A.y()
h.fb=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.fd!==$&&A.y()
h.fd=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.fe!==$&&A.y()
h.fe=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.ff!==$&&A.y()
h.ff=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.fg!==$&&A.y()
h.fg=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.fh!==$&&A.y()
h.fh=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.fi!==$&&A.y()
h.fi=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.fj!==$&&A.y()
h.fj=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.fk!==$&&A.y()
h.fk=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.fl!==$&&A.y()
h.fl=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.fm!==$&&A.y()
h.fm=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.fn!==$&&A.y()
h.fn=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.fo!==$&&A.y()
h.fo=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.fp!==$&&A.y()
h.fp=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fq!==$&&A.y()
h.fq=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.fs!==$&&A.y()
h.fs=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.ft!==$&&A.y()
h.ft=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.fu!==$&&A.y()
h.fu=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.fv!==$&&A.y()
h.fv=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.fw!==$&&A.y()
h.fw=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.fB!==$&&A.y()
h.fB=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.fC!==$&&A.y()
h.fC=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.dt!==$&&A.y()
h.dt=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.du!==$&&A.y()
h.du=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.dv!==$&&A.y()
h.dv=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.dw!==$&&A.y()
h.dw=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.dz!==$&&A.y()
h.dz=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.dA!==$&&A.y()
h.dA=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.dB!==$&&A.y()
h.dB=n
n=A.aY(A.e(A.e(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bu!==$&&A.y()
h.bu=n
h.shv(16777215)
n=new A.n4(o,f,A.f([],t.aA),A.f([],t.df),A.f([],t.h),A.f([],t.kS))
m=n.c=f.az("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.dC!==$&&A.y()
h.dC=n
n=new A.mM(f,o)
n.j9()
n.ja()
h.c5!==$&&A.y()
h.c5=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.d1!==$&&A.y()
h.d1=m
p=A.i(n.createBuffer())
p.toString
h.d2!==$&&A.y()
h.d2=p
n=A.i(n.createBuffer())
n.toString
h.d3!==$&&A.y()
h.d3=n
e=A.i(o.createVertexArray())
e.toString
h.d4!==$&&A.y()
h.d4=e
l=A.i(o.createVertexArray())
l.toString
h.d5!==$&&A.y()
h.d5=l
k=A.i(o.createVertexArray())
k.toString
h.d6!==$&&A.y()
h.d6=k
j=A.i(o.createVertexArray())
j.toString
h.d7!==$&&A.y()
h.d7=j
o.bindVertexArray(e)
h.cD(m)
o.bindVertexArray(l)
h.cD(p)
o.bindVertexArray(k)
h.cD(n)
o.bindVertexArray(null)
try{h.ca=f.hx(384,216,!0,!0)}catch(i){h.ca=null}s=4<f.ghy()?4:f.ghy()
e=s
if(typeof e!=="number")return e.a7()
if(e>1)try{h.bt=f.kY(h.aV,h.aW,!0,s)}catch(i){h.bt=null}try{h.aU=f.hx(h.aV,h.aW,!0,!0)}catch(i){h.bt=h.aU=null}if(h.aU!=null)try{h.c7=f.aZ(h.gbL(),h.gbK(),!1)
h.c8=f.aZ(h.gbL(),h.gbK(),!1)
h.c9=f.aZ(h.aV,h.aW,!1)}catch(i){h.c9=h.c8=h.c7=null}},
gbL(){var s=B.c.K(this.aV,4)
return s<1?1:s},
gbK(){var s=B.c.K(this.aW,4)
return s<1?1:s},
au(a){return this.kW(t.G.a(a))},
kW(a){var s=0,r=A.b1(t.H),q=this,p,o,n,m,l,k,j
var $async$au=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:p=new A.V(a,A.o(a).i("V<1,2>")).gu(0),o=q.aA
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.bt.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.a7(o.ci(k,l,!1,!1,!1,m==="grime"),$async$au)
case 4:if(c!=null)q.eq(m,l)
s=2
break
case 3:p=t.lS
j=A.K(new A.bX(new A.R(A.f(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.mR(a)),t.dD),p),p.i("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.a7(o.cj(j,12,!1),$async$au)
case 7:q.c4=c
case 6:return A.b_(null,r)}})
return A.b0($async$au,r)},
bc(){var s=0,r=A.b1(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bc=A.b2(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.x(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.a7(A.ay(A.e(A.e(g.window).fetch("shaders/"+A.q(m))),f),$async$bc)
case 13:l=a3
if(!A.aY(l.ok)){i=A.e4("HTTP "+A.q(A.qv(l,"status",t.S)))
throw A.c(i)}a=J
a0=n
a1=m
s=14
return A.a7(A.ay(A.e(l.text()),i),$async$bc)
case 14:a.bO(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ab(c)
i=A.e4("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.c(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.jt(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ab(b)
A.e(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$bc,r)},
jt(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ac
q===$&&A.j()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.cG("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.cG("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.cG("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.eH()
i.eG()
q=i.f8
q=A.K(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.p)(q),++k){s=q[k]
o=B.bt.h(0,s)
o.toString
i.eq(s,o)}A.e(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ab(j)
A.e(v.G.console).error("shader recompile failed: "+A.q(r))}},
eG(){var s=this,r=s.ar,q=s.ac
q===$&&A.j()
s.h5=A.i(r.getUniformLocation(q.c,"uTex"))
s.h6=A.i(r.getUniformLocation(q.c,"uTime"))
s.h7=A.i(r.getUniformLocation(q.c,"uFlash"))
s.h8=A.i(r.getUniformLocation(q.c,"uVignette"))
s.h9=A.i(r.getUniformLocation(q.c,"uGrain"))
s.ha=A.i(r.getUniformLocation(q.c,"uDesat"))
s.hb=A.i(r.getUniformLocation(q.c,"uBloom"))
s.hc=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.hj=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.hm=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.hf=A.i(r.getUniformLocation(q.c,"uDepth"))
s.hg=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.f9=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.fa=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.hh=A.i(r.getUniformLocation(q.c,"uNoise"))
s.hi=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.hk=A.i(r.getUniformLocation(q.c,"uLut"))
s.hl=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.hd=A.i(r.getUniformLocation(q.d,"uTex"))
s.ds=A.i(r.getUniformLocation(q.d,"uDir"))
s.he=A.i(r.getUniformLocation(q.c,"uBlur"))},
eq(a,b){var s,r,q,p=this
p.f8.k(0,a)
switch(a){case"bluenoise":s=p.ac
s===$&&A.j()
s=s.c
r=p.hh
r===$&&A.j()
q=p.hi
q===$&&A.j()
p.bm(s,r,q,b)
break
case"lut-gothic":s=p.ac
s===$&&A.j()
s=s.c
r=p.hk
r===$&&A.j()
q=p.hl
q===$&&A.j()
p.bm(s,r,q,b)
break
case"grime":s=p.ac
s===$&&A.j()
s=s.b
r=p.RG
r===$&&A.j()
q=p.rx
q===$&&A.j()
p.bm(s,r,q,b)
break
case"glass":s=p.ac
s===$&&A.j()
s=s.b
r=p.x2
r===$&&A.j()
q=p.xr
q===$&&A.j()
p.bm(s,r,q,b)
break
case"soft":s=p.ac
s===$&&A.j()
s=s.b
r=p.fS
r===$&&A.j()
q=p.fT
q===$&&A.j()
p.bm(s,r,q,b)
break}},
bm(a,b,c,d){var s=this.ar
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shv(a){var s=A.oP(a)
this.fK=s.a
this.fL=s.b
this.fM=s.c},
c_(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.V(a1,14)!==0)throw A.c(A.w("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.ar
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
a1=b.kz++
b.dc.l(0,a1,new A.jC(e,d,i,s,s,a3))
return a1},
kp(a){var s,r,q,p=this,o=p.dc.h(0,a)
if(o==null)return
p.ez()
s=p.fQ
r=p.fR
if(s!==r)p.eL(r)
s=p.ar
r=p.dy
r===$&&A.j()
s.uniform1i(r,0)
r=p.dq
r===$&&A.j()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bv},
kI(a){var s,r=this.dc.ah(0,a)
if(r==null)return
s=this.ar
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
ez(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.dd)return
c.dd=!0
s=c.ar
r=c.ac
r===$&&A.j()
s.useProgram(r.b)
r=c.as
r===$&&A.j()
q=c.fO
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.j()
r=c.dg
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.j()
q=c.dh
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.j()
r=c.di
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.j()
s.uniform1f(r,c.h4)
r=c.CW
r===$&&A.j()
s.uniform1f(r,c.dr)
r=c.cx
r===$&&A.j()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.j()
s.uniform1f(r,60)
r=c.db
r===$&&A.j()
q=c.fD?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.j()
s.uniform3f(q,c.dj/255*0.25,c.dk/255*0.25,c.dl/255*0.25)
q=c.fx
q===$&&A.j()
r=c.fJ
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.j()
s.uniform3f(r,c.fK,c.fL,c.fM)
r=c.go
r===$&&A.j()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.j()
s.uniform1f(r,14)
r=c.k1
r===$&&A.j()
s.uniform1f(r,c.fN)
r=c.k2
r===$&&A.j()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.j()
s.uniform1i(r,c.df.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.df
l=m.length
if(n<l){if(!(n<l))return A.d(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],0)
continue}j=A.oP(k.b)
m=c.bu
m===$&&A.j()
i=m?1:1+(A.pn(c.dm*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.d(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.d(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.d(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bu
r===$&&A.j()
q=r?1:1+(A.pn(c.dm*2.5,40503)*2-1)*0
c.kw=q
p=c.p3
p===$&&A.j()
s.uniform1f(p,q)
q=c.p4
q===$&&A.j()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.j()
p=c.fF?1:0
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
q=c.fE
h=q?384:0
g=q?216:0
q=c.d8
p=q.a
if(p===B.ax){f=B.d.Z(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.fU
r===$&&A.j()
s.uniform2f(r,h,g)
r=c.dC
r===$&&A.j()
q=c.fY
q===$&&A.j()
s.uniform1f(q,0)
q=c.fZ
q===$&&A.j()
s.uniform3f(q,0.0015,0.005,0)
q=c.fV
q===$&&A.j()
if(q!=null)r.cr(0)
q=c.fW
q===$&&A.j()
if(q!=null)r.cr(1)
q=c.fX
q===$&&A.j()
if(q!=null)r.cr(2)
r.cs(0)
r.cs(1)
r.cs(2)
r=c.h_
r===$&&A.j()
if(c.c4==null)q=0
else{c.dD===$&&A.j()
q=3}s.uniform1i(r,q)
if(c.c4!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.c4)
r=c.dn
r===$&&A.j()
s.uniform1i(r,12)}r=c.h3
q=c.h2
p=c.h1
o=c.h0
n=0
for(;;){m=c.dD
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
if(m!=null)s.uniform1i(m,d.d);++n}c.eL(c.fR)
r=c.dy
r===$&&A.j()
s.uniform1i(r,0)
r=c.dq
r===$&&A.j()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eL(a){var s
this.fQ=a
s=this.dx
s===$&&A.j()
this.ar.uniformMatrix4fv(s,!1,a.a)},
aC(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.aV=a
j.aW=b
j.dr=b/a
s=j.c5
s===$&&A.j()
r=B.c.K(a,2)
s.ay=r
q=B.c.K(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.aD(p,r,q)
r=s.e
if(r!=null)s.b.aD(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.aD(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.aD(r,384,216)
o=j.aU
n=j.bt
m=j.c7
l=j.c8
k=j.c9
if(o!=null)j.aA.aD(o,a,b)
if(n!=null)j.aA.aD(n,a,b)
if(m!=null)j.aA.aD(m,j.gbL(),j.gbK())
if(l!=null)j.aA.aD(l,j.gbL(),j.gbK())
if(k!=null)j.aA.aD(k,a,b)},
jF(a){var s,r,q,p,o,n,m
for(s=this.fH,r=this.fG,q=1;q<a;++q){if(!(q<800))return A.d(s,q)
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
jE(a){var s,r,q,p,o,n,m,l
for(s=this.fI,r=this.de,q=1;q<a;++q){if(!(q<4000))return A.d(s,q)
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
kF(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.d8=b4
s=b2.bw
r=0
if(s>0){for(s=b2.fI,q=0;p=b2.bw,q<p;++q)B.a.l(s,q,q)
b2.jE(p)
for(p=b2.de,o=b2.d9,n=0;n<b2.bw;++n){if(!(n<4000))return A.d(s,n)
m=s[n]
if(!(m<p.length))return A.d(p,m)
l=p[m]
r=A.tn(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.de,p=b2.d9,q=0;q<b2.bw;++q){if(!(q<s.length))return A.d(s,q)
l=s[q]
r=A.tn(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.bw=0
for(s=b2.fH,q=0;p=b2.cb,q<p;++q)B.a.l(s,q,q)
b2.jF(p)
for(p=b2.kx,o=b2.fG,k=0,n=0;n<b2.cb;++n){if(!(n<800))return A.d(s,n)
m=s[n]
if(!(m<o.length))return A.d(o,m)
j=o[m]
i=A.oP(0)
m=j.b
h=b2.di
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.dh
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
e=b2.dg
k=A.tq(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cb=0
s=b2.aA
o=b2.d1
o===$&&A.j()
s.dU(o,b2.d9,r)
o=b2.d2
o===$&&A.j()
s.dU(o,p,k)
b2.ez()
p=b2.ar
o=b2.dy
o===$&&A.j()
p.uniform1i(o,0)
o=b2.d4
o===$&&A.j()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(r,14));++b2.bv
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.d5
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(k,14));++b2.bv
m=b2.da
if(m>0){h=b2.d3
h===$&&A.j()
s.dU(h,b2.ky,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.d6
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.da/14|0);++b2.bv}m=b2.ca
if(m!=null){a7=b2.aU
if(a7!=null)s.lk(m,a7)}a8=b2.aU
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.d7
m===$&&A.j()
p.bindVertexArray(m)
a3=b2.c7
a4=b2.c8
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.ac
g===$&&A.j()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.hd
g===$&&A.j()
p.uniform1i(g,0)
s.aG(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.ds
g===$&&A.j()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aG(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.ds,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.c9
if(b2.c6>0&&a6!=null){s.aG(a6)
g=b2.ac
g===$&&A.j()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dt
g===$&&A.j()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.du
g===$&&A.j()
p.uniform1i(g,7)
g=b2.dv
g===$&&A.j()
p.uniform1f(g,0.03171953255425709)
g=b2.dw
g===$&&A.j()
p.uniform1f(g,1)
g=b2.dz
g===$&&A.j()
p.uniform1f(g,0.5)
g=b2.dA
g===$&&A.j()
p.uniform1f(g,b2.c6)
g=b2.dB
g===$&&A.j()
p.uniform2f(g,1/b2.aV,1/b2.aW)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.c5
g===$&&A.j()
b0=g.li(a8,0.5)
s.aG(null)
s=b2.ac
s===$&&A.j()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.hb
g===$&&A.j()
p.uniform1i(g,1)
g=b2.hc
g===$&&A.j()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.he
s===$&&A.j()
b2.bu===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.hf
s===$&&A.j()
p.uniform1i(s,7)
s=b2.hg
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.f9
s===$&&A.j()
p.uniform1i(s,11)
s=b2.fa
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.c6>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.h5
h===$&&A.j()
p.uniform1i(h,0)
h=b2.dm+=b3;++b2.fP
s=b2.h6
s===$&&A.j()
p.uniform1f(s,h)
h=b2.hj
h===$&&A.j()
s=b2.fP
p.uniform2f(h,B.c.V(s*13,64),B.c.V(s*29,64))
s=b2.h7
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h8
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h9
s===$&&A.j()
p.uniform1f(s,0)
s=b2.ha
s===$&&A.j()
p.uniform1f(s,0)
s=b2.d8
if(s.a===B.P)b1=0*(1-s.b/1)
else b1=0
s=b2.hm
s===$&&A.j()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.mQ.prototype={
$0(){var s=this.a.ac
s===$&&A.j()
return s.b},
$S:58}
A.mR.prototype={
$1(a){return this.a.h(0,A.G(a))},
$S:23}
A.nF.prototype={
gjP(){var s=this.b
s===$&&A.j()
return s},
eH(){var s,r,q,p,o,n,m=this,l=m.jQ(),k=m.a
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
m.fS=A.i(k.getUniformLocation(l,"uSoft"))
m.fT=A.i(k.getUniformLocation(l,"uSoftOn"))
m.fU=A.i(k.getUniformLocation(l,"uInternal"))
m.fV=A.i(k.getUniformLocation(l,"uLightProj0"))
m.fW=A.i(k.getUniformLocation(l,"uLightProj1"))
m.fX=A.i(k.getUniformLocation(l,"uLightProj2"))
m.kA=A.i(k.getUniformLocation(l,"uShadow0"))
m.kB=A.i(k.getUniformLocation(l,"uShadow1"))
m.kC=A.i(k.getUniformLocation(l,"uShadow2"))
m.fY=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.dn=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dq=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.fZ=A.i(k.getUniformLocation(l,"uShadowBias"))
m.h_=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.h0
B.a.H(s)
r=m.h1
B.a.H(r)
q=m.h2
B.a.H(q)
p=m.h3
B.a.H(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.dn,12)},
cD(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.e8(56)},
e8(a){var s=this,r=s.c
r===$&&A.j()
s.bn(r,3,a,0)
r=s.f
r===$&&A.j()
s.bn(r,3,a,12)
r=s.d
r===$&&A.j()
s.bn(r,4,a,24)
r=s.e
r===$&&A.j()
s.bn(r,1,a,40)
r=s.r
r===$&&A.j()
s.bn(r,3,a,44)},
bn(a,b,c,d){var s=this.a
A.aJ(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
jQ(){return this.gjP().$0()}}
A.n4.prototype={
cr(a){return null},
cs(a){return null}}
A.b.prototype={
T(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
a8(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
W(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
bs(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aR(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga5(){var s=this,r=s.gq(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.kF.prototype={
lD(a){var s,r,q,p,o,n=B.p.b8(a.C(),null)
this.a.f7(n)
s=A.e(A.e(v.G.window).localStorage)
r=A.bJ(s.getItem("quarantine.save.active"))
q=A.bJ(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
lc(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.e(A.e(v.G.window).localStorage)
r=A.bJ(s.getItem("quarantine.save.active"))
q=A.bJ(s.getItem("quarantine.save.previous"))
p=this.en(r,a)
if(p!=null)return new A.du(p,null)
o=this.en(q,a)
if(o!=null)return new A.du(o,"recovered previous save")
if(r==null)return B.fy
return B.fx}catch(n){return B.fw}},
en(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.f7(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ab(q) instanceof A.I)return null
else throw q}}}
A.hJ.prototype={
is(a,b,c,d,e){if(this.a.length===0)throw A.c(B.dq)
if(this.b<0)throw A.c(B.d7)},
C(){var s,r=this,q=r.d
q=q==null?null:A.an(q,t.i)
s=t.z
return A.ce(A.T(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bz.prototype={
A(){return"EndingKind."+this.b}}
A.kW.prototype={}
A.e3.prototype={
C(){var s=t.N
return A.T(["kind",this.a.b],s,s)}}
A.kZ.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:60}
A.ir.prototype={
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
kO(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.a8(0,new A.b(0,1.3499999999999999,0))
return!new A.hu(s,s.T(0,new A.b(0,1.2000000000000002,0))).hu(a,r)}}
A.mw.prototype={
C(){return A.jO(this.a)}}
A.eh.prototype={
C(){return A.T(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.n0.prototype={
f7(a){var s,r,q,p,o,n,m,l=B.p.bp(a,null),k=t.f
if(!k.b(l))throw A.c(B.dv)
s=t.N
r=t.z
q=A.aU(l,s,r)
p=q.h(0,"version")
if(A.aI(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ac("unsupported save version "+A.q(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.db)
k=A.aU(n,s,r)
return A.rf(A.aU(m,s,r),k,2)}}
A.du.prototype={}
A.dc.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hP.prototype={}
A.lj.prototype={}
A.li.prototype={
gam(){var s=this.d
return new A.lj(s.a,s.b)},
gdL(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.T(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.T(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.T(["entryCount",m.e.b.a],k,t.S)
p=A.qU(m.c).C()
o=m.r
n=o.c
return new A.mw(A.jO(A.T(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.T(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
jT(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.c(A.av(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bS(B.dE)}if(n<a)this.bS(B.dF)},
ie(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cw(a)&&s.ic(b)},
le(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cd)r.c=Math.min(1,r.c+0.1)},
ib(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.uI(j,A.an(i.d,h).length)
if(a===B.c7)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.L(r)
A.uH(j,new A.Q(r,q.i("t(1)").a(new A.lk(k)),q.i("Q<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.ec,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aM(j.a/1*3)
B.a.k(r.r,new A.ei(q.a,a,b))
m=r.a
A.uT(m,q.a,n,k.b,A.an(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.i2(B.ex)
s.r.kg(o,c)
l=B.d.aM(j.b/1*6)
if(l>0)r.cw(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aB(i,A.o(i).i("aB<2>")).O(0,new A.ll())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bS(B.dH)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bS(B.dG)},
bS(a){var s=this;++s.y
B.a.k(s.w,new A.hP())
B.a.k(s.x,A.uJ(A.xb(a),s.b,s.y-1))}}
A.lk.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.n5().i8(this.a.c,a.a)},
$S:61}
A.ll.prototype={
$1(a){return t.L.a(a).e},
$S:24}
A.ku.prototype={
dV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.c(A.l("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.c(A.l("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.c(A.l("authored/runtime room or portal count mismatch"))
for(r=t.hE,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.p)(a1),++p){o=a1[p]
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
if(Math.abs(g-j)>0.0001)A.k(A.l(n+" origin.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.l(n+" origin.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.l(n+" origin.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.d(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.l(n+" size.x mismatch: "+A.q(g)+" != "+A.q(j)))
if(1>=h)return A.d(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.l(n+" size.y mismatch: "+A.q(j)+" != "+A.q(i)))
if(2>=h)return A.d(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.l(n+" size.z mismatch: "+A.q(l)+" != "+A.q(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.c(A.l("window count mismatch for "+n))
for(n=A.L(j),i=n.i("t(1)"),n=n.i("Q<1>"),f=0;f<l.length;l.length===k||(0,A.p)(l),++f){e=l[f]
d=A.e9(new A.Q(j,i.a(new A.kz(e)),n),r)
if(d==null)throw A.c(A.l("authored window missing: "+e.a))
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
if(m==null)throw A.c(A.l("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.c(A.l("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a+A.q(n)+" != "+A.q(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.l(q+a0+A.q(n)+" != "+A.q(l)))
if(o.f!=m.at)throw A.c(A.l("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gbg(a1).b!==B.a.gbg(s).b)throw A.c(A.l("stair manifest mismatch"))}}
A.kv.prototype={
$1(a){return A.uu(a,this.a)},
$S:63}
A.kw.prototype={
$1(a){var s=this.a,r=A.jT(a,"portal"),q=A.d0(r,"id"),p=A.d0(r,"a"),o=A.d0(r,"b"),n=A.hc(r,"width"),m=A.hc(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.G(r.h(0,"doorKit")):null
return new A.dU(q,p,o,n*s,m*s,l)},
$S:64}
A.kx.prototype={
$1(a){var s=A.jT(a,"stair")
A.d0(s,"id")
return new A.dW(A.d0(s,"portalId"))},
$S:65}
A.ky.prototype={
$1(a){return typeof a=="string"?a:A.h9("exterior cell")},
$S:25}
A.kz.prototype={
$1(a){return t.hE.a(a).a===this.a.a},
$S:26}
A.dV.prototype={}
A.kA.prototype={
$1(a){var s=this.a,r=A.jT(a,"window"),q=A.d0(r,"id"),p=A.hc(r,"offset")
A.hc(r,"sill")
return new A.dX(q,p*s,A.hc(r,"width")*s,A.hc(r,"height")*s)},
$S:68}
A.dX.prototype={}
A.dU.prototype={}
A.dW.prototype={}
A.oT.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:13}
A.hu.prototype={
lq(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.L(s)
q=new A.Q(s,r.i("t(1)").a(new A.kI(e)),r.i("Q<1>"))
p=!q.gu(0).m()?null:q.gaI(0)
if(p==null){n.d=null
return}if(!(n.bR(b,p.f)&&a==="hall"))o=n.bR(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.j4(p,B.d.Z(d,0,1))},
l_(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.ew(f,c,d)
s=g.j3(a,b,c,d)
if(s!=null){g.d=s
return g.ew(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.k9(Math.sqrt(r*r+q*q)/0.08))
o=d.W(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.eY(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.hE(a,n)
n=i==null?n:i
h=g.eY(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.hE(a,n)
n=i==null?n:i}g.bU(m)
return new A.ie(m,n)},
j3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bR(c,l.f)&&n
j=q&&this.bR(c,l.r)&&o
if(k||j)return new A.j4(l,k?0:1)}return null},
ew(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a8(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.Z(a.b+o/p,0,1)
n=A.rs(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bU(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.ie(n,k)},
bR(a,b){var s=a.a8(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
eY(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.fC(c,!1)
s=c.T(0,d)
this.bU(s)
if(this.hu(a,b)){this.bU(c)
return new A.fC(c,!0)}return new A.fC(s,!1)},
bU(a){var s=a.a8(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.T(0,new A.b(0,1.2000000000000002,0))},
hu(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.jH(a,m,s)},
hE(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aT(k)
for(r=k.a,q=a.ao(r),p=J.M(q.a),q=new A.N(p,q.b,q.$ti.i("N<1>"));q.m();){o=p.gp()
n=o.bb(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.f1(k,o,s)&&this.iW(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jH(a,b,c){var s,r,q
for(s=a.ao(b.a),r=J.M(s.a),s=new A.N(r,s.b,s.$ti.i("N<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.f1(b,q,c))return!0}return!1},
f1(a,b,c){var s,r,q,p=a.a,o=b.aq(p),n=b.af(p)
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
iW(a,b,c){var s,r=this
switch(b.aq(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sjY(a){this.a=t.bf.a(a)}}
A.kI.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:70}
A.ie.prototype={}
A.fC.prototype={}
A.j4.prototype={}
A.f1.prototype={}
A.lu.prototype={
kg(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.A,r)
s=B.A[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
i9(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.c}return r},
ia(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.A,q)
p=B.A[q]
if(p.b===a)r+=p.d}return r},
C(){return A.T(["landedCount",this.b],t.N,t.z)}}
A.mX.prototype={
iz(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.y()
o.c=new A.hX(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.p)(n),++q){p=n[q]
r.l(0,p.a,o.e9(p))}},
ld(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.p)(r),++o)p.kI(r[o])
s.l(0,a,n.e9(m))},
e9(a){var s=A.tD(this.a,a),r=this.b,q=A.f([r.c_(s.a,1),r.c_(s.b,2),r.c_(s.c,0)],t.t),p=s.d
if(!B.u.gI(p))q.push(r.c_(p,0))
return q},
hU(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.C
s=l.a
r=A.aq([s],t.N)
for(n=n.ao(s),q=J.M(n.a),n=new A.N(q,n.b,n.$ti.i("N<1>"));n.m();){p=q.gp()
o=p.bb(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.k(0,o)}return r},
ko(a,b){var s,r,q,p,o=this,n=o.hU(a),m=o.b,l=o.c
l===$&&A.j()
l=t.b3.a(l.hP(n,b))
s=t.f0
m.df=l.length<=4?A.an(l,s):A.an(A.nd(l,0,A.dO(4,"count",t.S),A.L(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p)m.kp(r[p])}}}
A.aL.prototype={}
A.l0.prototype={
gkR(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a3(A.f([r,q,p,o,n,m],t.n),new A.l1())&&o>=r&&n>=q&&m>=p}}
A.l1.prototype={
$1(a){return isFinite(A.cZ(a))},
$S:5}
A.lv.prototype={
E(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.V(s,3)!==0}else s=!0
if(s)throw A.c(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.c(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gkR())throw A.c(A.w("QHMX bounds are invalid",m))
for(s=t.n,r=0;r<k;++r){q=l[r]
if(B.a.O(A.f([q.a,q.b,q.c,q.d,q.e,q.f,q.r,q.w],s),new A.lx()))throw A.c(A.w("QHMX contains a non-finite vertex",m))
p=q.x>255
if(p)throw A.c(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,s=l.length,r=0;r<s;++r){o=l[r]
if(o>=k)throw A.c(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.lx.prototype={
$1(a){return!isFinite(A.cZ(a))},
$S:5}
A.lw.prototype={
t(a,b,c,d,e,f,g){var s=this
s.b3(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.b3(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.b3(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.b3(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.b3(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.b3(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
b3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aL(a,b,c,m,n,o,0,0,p),r=new A.aL(g,h,i,m,n,o,1,1,p)
this.b4(s,new A.aL(d,e,f,m,n,o,1,0,p),r)
this.b4(s,r,new A.aL(j,k,l,m,n,o,0,1,p))},
b4(a,b,c){var s=this,r=s.b
B.a.k(r,s.cL(a))
B.a.k(r,s.cL(b))
B.a.k(r,s.cL(c))},
cL(a){var s,r,q=B.a.aY(A.f([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.c(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
k0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.lv(A.an(g,t.hZ),new Uint16Array(A.a3(this.b)),new A.l0(s,r,q,p,o,n))
h.E()
return h}}
A.d9.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.l2.prototype={
ka(a){var s
switch(a.a){case 0:s=A.aq(["front","street","opposite-house"],t.N)
break
case 1:s=A.aq(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aq(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aq(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aq(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
kb(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b2
break A}if("kitchen"===a||"cellar"===a){s=B.cP
break A}if("bathroom"===a){s=B.cQ
break A}if("spare-room"===a){s=B.cR
break A}s=B.b2
break A}return this.ka(s)}}
A.cV.prototype={}
A.oF.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:71}
A.da.prototype={
A(){return"FocusKind."+this.b}}
A.e5.prototype={}
A.mY.prototype={}
A.oj.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:72}
A.cU.prototype={}
A.eu.prototype={}
A.ls.prototype={
iF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.lJ(),a4=this.b,a5=A.aw(a4,!0,t.W)
B.a.H(a4)
s=A.f([],t.kl)
for(r=a5.length,q=t.x,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.p)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.f([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.p)(i),++g){f=i[g]
j.push(new A.aR(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.f([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.p)(h),++g){d=h[g]
i.push(new A.aV(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.f([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.p)(e),++g){b=e[g]
h.push(new A.b8(b.a,b.b,a3.$1(b.c)))}s.push(new A.aD(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.J(a4,s)
a4=this.c
a=A.aw(a4,!0,t.Q)
B.a.H(a4)
s=A.f([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.b9(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.J(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cN(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
j7(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=o.a
if(q.a2(n))throw A.c(A.l("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){m=s[p]
n=m.a
if(q.a2(n))throw A.c(A.l("duplicate portal "+n))
q.l(0,n,m)}},
jN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
jM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.x(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.f0(o,i,h,g,f,e)
a5.e6(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.p)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.c(A.l(l+" references invalid portal "+d))
i=c.aq(l)
h=c.af(l)
g=c.w
f=c.x
a5.f0(o,i,h,g,0,f)
a5.e6(a6,l,c.aq(l),c.af(l),c.af(l)+g,0,f)}}for(s=new A.V(a6,a6.$ti.i("V<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.bY(a)
r.X(a,new A.lK())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.c(A.l("overlapping apertures on "+b.a))}}},
f0(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.c(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
e6(a,b,c,d,e,f,g){J.hg(t.gz.a(a).lb(b+":"+c.b,new A.lI()),new A.fS([d,e,f,g]))},
aT(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.i9(q),s.b+r.ia(q),s.c)},
ao(a){var s=this.c,r=A.L(s)
return new A.Q(s,r.i("t(1)").a(new A.lL(a)),r.i("Q<1>"))},
la(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.c(A.av(a,"roomId","not a portal endpoint"))
r=this.aT(o)
q=b.af(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aq(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
glC(){return B.a.bx(this.b,0,new A.lM(),t.S)},
hC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.H
s=A.f([new A.bF(a,B.H)],t.bM)
r=A.aq([a],t.N)
for(q=this.e,p=t.Q;s.length!==0;){o=B.a.lh(s,0)
n=o.a
m=o.b
for(l=this.ao(n),k=J.M(l.a),l=new A.N(k,l.b,l.$ti.i("N<1>"));l.m();){j=k.gp()
i=j.bb(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.k(0,i)){h=A.K(m,p)
h.push(j)
B.a.k(s,new A.bF(i,h))}}}return B.H}}
A.lJ.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:110}
A.lK.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:74}
A.lI.prototype={
$0(){return A.f([],t.a3)},
$S:75}
A.lL.prototype={
$1(a){var s
t.Q.a(a)
s=this.a
return a.b===s||a.c===s},
$S:76}
A.lM.prototype={
$2(a,b){return A.a(a)+t.W.a(b).e.length},
$S:77}
A.l_.prototype={}
A.n5.prototype={
i8(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a3(s,new A.n6())}else s=!1
return s}}
A.n6.prototype={
$1(a){return t.hE.a(a).w},
$S:26}
A.ly.prototype={
f4(a){return B.a.cc(this.d,new A.lz(a),new A.lA(a))},
dV(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="inventory placement ",a9=a7.a
if(a9!==1)throw A.c(A.l("unsupported house inventory schema "+a9))
a9=a7.b
if(a9!=="assets/house/house.json")throw A.c(A.l("inventory source changed: "+a9))
a9=a7.c
if(Math.abs(a9-1.5)>0.0001)throw A.c(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a5(s)
for(q=a7.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.c(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.c(A.l("invalid bounds for inventory asset "+m))}j=A.a5(s)
i=A.a5(s)
for(s=a7.e,q=s.length,p=b0.e,o=0;o<s.length;s.length===q||(0,A.p)(s),++o){h=s[o]
m=h.a
if(!j.k(0,m))throw A.c(A.l("duplicate inventory placement "+m))
l=h.b
g=p.h(0,l)
if(g==null)throw A.c(A.l(a8+m+" references "+l))
n=a7.f4(h.c)
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
A.lz.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:78}
A.lA.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:27}
A.c_.prototype={}
A.cj.prototype={}
A.lS.prototype={}
A.lR.prototype={}
A.oS.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:13}
A.c2.prototype={}
A.hX.prototype={
hP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.R.a(a)
s=A.f([],t.bz)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.p)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.c2(new A.b(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.jA(j),0.06))}}B.a.X(s,new A.lB(b))
return A.nd(s,0,A.dO(4,"count",t.S),t.f0).be(0)},
jA(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.lB.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.a8(0,s).gq(0),b.a.a8(0,s).gq(0))},
$S:80}
A.eW.prototype={
A(){return"Floor."+this.b}}
A.cF.prototype={
A(){return"Facing."+this.b}}
A.aR.prototype={}
A.b9.prototype={
bb(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aq(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.c(A.av(a,"roomId","not an endpoint of "+s.a))},
af(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.c(A.av(a,"roomId","not an endpoint of "+s.a))}}
A.aV.prototype={}
A.b8.prototype={}
A.cD.prototype={}
A.cN.prototype={}
A.aD.prototype={}
A.lD.prototype={
ks(a){return B.a.cc(this.c,new A.lE(a),new A.lF(a))},
lz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.c(A.l("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.c(A.l("soundscape source changed: "+f))
f=t.N
s=A.a5(f)
f=A.x(f,t.gB)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
f.l(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){m=r[p]
l=m.a
if(!s.k(0,l))throw A.c(A.l("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.c(A.l("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.c(A.l("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.c(A.l("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gI(k)||k.gal().O(0,new A.lG()))throw A.c(A.l("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.c(A.l("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.c(A.l("sound emitter "+l+" escapes "+j.a))}}}
A.lE.prototype={
$1(a){return t.mm.a(a).a===this.a},
$S:81}
A.lF.prototype={
$0(){return A.k(A.l("sound emitter missing: "+this.a))},
$S:27}
A.lG.prototype={
$1(a){return B.b.hM(A.G(a)).length===0},
$S:3}
A.bZ.prototype={}
A.lt.prototype={
cV(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.av(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.ew}q=A.f([],t.iG)
p=B.d.aB(r)+1
o=B.d.aB(b)
for(n=p;n<=o;++n){m=B.c.V(n,24)
B.a.k(q,new A.f0("tick"))
if(B.c.V(m,6)===0)B.a.k(q,new A.f0("chime"))}l.b=b
return q}}
A.f0.prototype={}
A.lC.prototype={
cV(a,b){var s,r,q,p,o,n=this
if(!isFinite(b)||b<0||b>=24)throw A.c(A.av(b,"hour","must be in [0, 24)"))
s=n.a
r=n.b
if(s==null||r==null||a!==s||b<r){n.a=a
n.b=b
return B.ev}q=A.f([],t.dL)
for(p=B.d.aB(r)+1;p<=B.d.aB(b);++p){o=B.c.V(p,24)
if(B.c.V(o,4)===2)B.a.k(q,B.dZ)
if(B.c.V(o,3)===1)B.a.k(q,B.e_)
if(B.c.V(o,8)===5)B.a.k(q,B.e0)}n.b=b
return q}}
A.e8.prototype={}
A.oR.prototype={
$1(a){return typeof a!="number"},
$S:13}
A.lH.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.x(m,l)
for(s=n.a,s=new A.V(s,A.o(s).i("V<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.T(["open",o.a,"locked",o.b],m,r))}l=A.x(m,l)
for(s=n.c,s=new A.V(s,A.o(s).i("V<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.T(["lit",o.a,"examined",o.b],m,r))}return A.T(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a5(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)d.k(0,s[q].a)
r=A.a5(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.p)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.p)(n),++l)r.k(0,n[l].a)
e=A.a5(e)
for(q=0;q<p.length;p.length===n||(0,A.p)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.p)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.ql(new A.ag(o,A.o(o).i("ag<1>")),d)){d=f.b
if(A.ql(new A.ag(d,A.o(d).i("ag<1>")),r)){d=f.c
e=!A.ql(new A.ag(d,A.o(d).i("ag<1>")),e)}else e=n}else e=n
if(e)throw A.c(B.dl)
e=f.d
if(e<0||e>2)A.k(B.d3)
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
A.fg.prototype={
C(){return A.T(["open",this.a,"locked",this.b],t.N,t.y)}}
A.f8.prototype={
C(){return A.T(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.kV.prototype={
$1(a){return this.a.v(0,A.G(a))},
$S:3}
A.cG.prototype={
A(){return"Hand."+this.b}}
A.nA.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.l:s},
e2(a,b){var s,r,q,p,o=A.f([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.ia.prototype={
C(){var s,r,q,p=t.N,o=A.x(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.t[r]
o.l(0,q,s.h(0,q))}return A.T(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.R(B.t,t.ej.a(new A.m8(this)),t.dD).aY(0," \xb7 ")}}
A.m7.prototype={
$2(a,b){return new A.O(A.G(a),A.G(b),t.q)},
$S:82}
A.m8.prototype={
$1(a){return this.a.a.h(0,A.G(a))},
$S:23}
A.bj.prototype={
C(){var s,r,q,p=this,o=A.f([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.T(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.lU.prototype={
bo(a){t.G.a(a)
return a.a===5&&B.a.a3(B.t,new A.m0(this,a))},
e7(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bo(b))return null
s=this.e++
r=new A.bj(s,a,A.f([A.m6(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
cZ(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bo(b))return!1
B.a.k(s.c,A.m6(b,c,B.Z))
return!0},
jS(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bo(b))return!1
s.r=A.m6(b,0,B.bd)
return!0},
i2(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.H(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a2(p)&&!B.a.v(s,p))B.a.k(s,p)}},
lA(a){var s
if(!this.b.a2(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.o(n).c)
B.a.a0(n)
s=A.f([],t.bV)
for(r=q.b,r=new A.am(r,r.r,r.e,A.o(r).i("am<2>"));r.m();)s.push(r.d.C())
return A.T(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.m0.prototype={
$1(a){var s
A.G(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.v(this.a.a.h(0,a),s)},
$S:3}
A.kB.prototype={
d_(a,b){if(a.a===B.a1&&!a.d)return new A.ms(b,B.bB)
return new A.m4(b,a.d,a.e,B.bB)},
kj(a){return this.d_(a,null)}}
A.dY.prototype={}
A.kC.prototype={
bG(a){var s,r=a==null?null:B.b.hM(a).toLowerCase(),q=r==="next"
if(q||r==="auto")return new A.dY(B.a1,q,r==="auto",!1,null)
s=r!=null&&r!=="legacy"
return new A.dY(B.a0,!1,!1,s,s?"unknown renderer query":null)}}
A.m5.prototype={}
A.m4.prototype={
gb7(){var s=this.b
s=s==null?null:s.gb7()
return s==null?A.mT("legacy",A.f([],t.s),this.c,this.d,"legacy"):s},
aJ(){if(this.e===B.bC)throw A.c(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aJ()
this.e=B.v},
aC(a,b){var s
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aC(a,b)},
aE(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.p.b8(A.T(["backend","legacy","interpolation",0,"facts",A.jO(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aE(a)},
aX(a){var s
if(this.e!==B.v)A.k(A.l("legacy backend is not ready"))
B.p.b8(A.T(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aX(a)}}
A.mt.prototype={}
A.ms.prototype={
gb7(){var s=this.b
s=s==null?null:s.gb7()
return s==null?A.mT("next",A.f([],t.s),!1,null,"safe"):s},
aJ(){if(this.c===B.bC)throw A.c(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aJ()
this.c=B.v},
aC(a,b){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.c(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aC(a,b)},
aE(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a2){p=q==null
if(p||!q.gcY()){if(s.c!==B.a2)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.v
if(!p)q.hG()}p=s.c
if(p===B.a2)return}if(p!==B.v)A.k(A.l(r))
B.p.b8(A.T(["backend","next","interpolation",0,"facts",A.jO(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gcY()){if(s.c!==B.v)A.k(A.l(r))
s.c=B.a2
q.hw()
return}q.aE(a)}},
aX(a){var s
if(this.c!==B.v)A.k(A.l("pixeldart backend is not ready"))
B.p.b8(A.T(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aX(a)}}
A.mu.prototype={
k8(a,b){var s,r,q,p,o,n,m
a.E()
s=B.aQ.bG(a)
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
o=A.K(o,A.o(o).c)
B.a.a0(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.p)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.y)r.push("disjoint-timer-query")
if(a.z)r.push("float-render-target")
if(a.Q)r.push("half-float-render-target")
if(a.as)r.push("context-loss")
return r}}
A.fl.prototype={
A(){return"RendererBackendKind."+this.b}}
A.ds.prototype={
A(){return"RendererBackendState."+this.b}}
A.mU.prototype={}
A.iA.prototype={}
A.mS.prototype={
iy(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
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
A.ba.prototype={
A(){return"SleepQuality."+this.b}}
A.aX.prototype={
A(){return"SleepLocation."+this.b}}
A.ei.prototype={}
A.kN.prototype={
cw(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
ic(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.f([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
i.push(A.T(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.T(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kO.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:83}
A.kP.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:84}
A.i0.prototype={
A(){return"InteractionType."+this.b}}
A.dC.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.nE.prototype={}
A.dB.prototype={}
A.hz.prototype={}
A.lN.prototype={}
A.lP.prototype={
dZ(){var s,r,q,p=t.r,o=A.f([],p)
for(s=this.a.b,s=new A.am(s,s.r,s.e,A.o(s).i("am<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.f(o.slice(0),p)
B.a.X(p,new A.lQ())
return p},
kf(a,b){var s,r,q,p,o,n=b.b
if(n.gI(n))return B.hy
s=t.N
r=A.a5(s)
q=A.a5(s)
for(s=n.gP(),s=s.gu(s),p=a.c;s.m();){o=s.gp()
if(B.a.gR(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.dB(B.a9,r)
s=r.a
o=B.a.gR(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gR(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.dB(B.cg,r)
return new A.dB(B.aO,r)},
js(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.hz(e,!1,B.hx,null)
s=p.d===c
r=this.kf(p,d)
q.lA(e)
return new A.hz(e,s,r,r.a===B.a9&&s?'The world says "'+d.c+'". The entry says "'+B.a.gR(p.c).n(0)+'".':null)},
kk(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.a9)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.lN(B.a.gR(s.c).n(0)+" but "+A.q(a.f))}}
A.lQ.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:14}
A.bB.prototype={
A(){return"RuptureStep."+this.b}}
A.mZ.prototype={}
A.c4.prototype={}
A.n_.prototype={
ge3(){var s=B.ap.h(0,this.a)
return s==null?0:s},
ih(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.x)s=q.e
else s=!0
if(s)return B.bn
r=A.qa(b)
s=q.c
B.a.H(s)
B.a.J(s,r)
B.a.H(q.d)
q.a=B.P
q.b=0
q.e=!1
return A.f([B.cD],t.e_)},
jU(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.c(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.x||a===0)return B.bn
s=A.f([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.x))break
A:{q=l.a
p=B.ap.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.I)l.jJ(s)
p=l.b
o=B.ap.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.c4())
if(q===B.I){l.a=B.x
l.b=0
l.e=!0
B.a.k(s,B.cC)}else{p=q.a+1
if(!(p<7))return A.d(B.bl,p)
l.a=B.bl[p]
l.b=0
B.a.k(s,new A.c4())}}}return A.an(s,t.k8)},
C(){var s=this,r=t.N
return A.T(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.an(s.c,r),"extinguishedMantles",A.an(s.d,r),"completed",s.e],r,t.z)},
jJ(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.Z(B.d.aB(l.b/l.ge3()*A.an(s,r).length),0,A.an(s,r).length)
p=l.d
for(;;){o=A.aw(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aw(s,!1,r)
o.$flags=3
n=o
o=A.aw(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.c4())}}}
A.hQ.prototype={
gbi(){var s=this.b
if(s<6||s>18)return 0
return B.d.Z((s-6)/12,0,1)}}
A.oJ.prototype={
$1(a){var s=B.c.bV(this.a,a)&255
return B.c.Z(B.d.aM(s+((B.c.bV(this.b,a)&255)-s)*this.c),0,255)},
$S:86}
A.na.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.el(g.a),e=t.N,d=A.x(e,t.P)
for(s=g.b,s=new A.V(s,A.o(s).i("V<1,2>")).gu(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.jO(q,r.b))}s=A.el(g.r)
q=A.el(g.w)
p=A.el(g.x)
o=A.x(e,t.l_)
for(n=g.as,n=new A.V(n,A.o(n).i("V<1,2>")).gu(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.f([],m)
for(i=J.M(l.b);i.m();){h=i.gp()
j.push(A.T(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.T(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
jO(a,b){var s,r=A.el(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.el(q.ba(0,new A.nb(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gL(s))r.l(0,"_ambient",A.el(s.ba(0,new A.nc(),t.S,t.z)))
return r}}
A.nb.prototype={
$2(a,b){return new A.O(A.a(a),t.ey.a(b).C(),t.iI)},
$S:87}
A.nc.prototype={
$2(a,b){return new A.O(A.a(a),t.bR.a(b).C(),t.iI)},
$S:88}
A.dz.prototype={
C(){return A.T(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dy.prototype={
C(){return A.T(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fy.prototype={
C(){var s=t.N
return A.T(["field",this.a,"value",this.b],s,s)}}
A.nf.prototype={
bC(){var s=0,r=A.b1(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bC=A.b2(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a7(A.ay(A.e(A.e(v.G.window).fetch("res/text.json")),t.m),$async$bC)
case 6:n=b
s=7
return A.a7(A.ay(A.e(n.text()),t.N),$async$bC)
case 7:m=b
l=A.yq(m)
j=J.aS(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.aS(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aS(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aS(l,"documents")
j.toString
i.a(j)
j=J.aS(l,"street")
j.toString
i.a(j)
j=J.aS(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aS(l,"nights")
j.toString
i.a(j)
j=J.aS(l,"endings")
j.toString
o.w=i.a(j)
j=J.aS(l,"records")
j.toString
i.a(j)
j=J.aS(l,"cues")
j.toString
i.a(j)
j=J.aS(l,"claims")
j.toString
o.z=i.a(j)
q=1
s=5
break
case 3:q=2
g=p.pop()
k=A.ab(g)
j=A.q(k)
throw A.c("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.b_(null,r)
case 1:return A.aZ(p.at(-1),r)}})
return A.b0($async$bC,r)},
hT(a){var s,r,q,p=this.a
p===$&&A.j()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gM().dW(0,new A.ng())
r=p.$ti
q=t.N
q=A.x(q,q)
q.jR(new A.cl(p,r.i("O<m,m>(1)").a(new A.nh()),r.i("cl<1,O<m,m>>")))
return q}return null},
hW(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.j()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aN(p)||o!==B.d.aN(o))return n
return new A.dz(B.d.aN(p),B.d.aN(o))},
hV(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.j()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aN(p)||typeof o!="string"||typeof n!="string")return m
return new A.dy(B.d.aN(p),o,n)},
lB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.x(a1,t.iu),a3=A.x(a1,t.c_),a4=A.x(a1,t.d8),a5=t.a,a6=A.x(a1,t.iD),a7=b.b
a7===$&&A.j()
a7=new A.V(a7,A.o(a7).i("V<1,2>")).gu(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.x(a,a0)
for(o=o.gM(),o=o.gu(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.my(l,null):null
if(k==null||!q.b(m.b))continue
j=A.x(a1,a1)
for(m=q.a(m.b).gM(),m=m.gu(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.G(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.x(a,r)
for(m=n.$ti.i("cI<1>"),l=new A.cI(n,n.r,n.e,m);l.m();){i=l.d
g=b.hW(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.x(a,s)
for(m=new A.cI(n,n.r,n.e,m);m.m();){l=m.d
e=b.hV(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.j()
a7=new A.V(a7,A.o(a7).i("V<1,2>")).gu(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.f([],s)
for(m=J.M(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.fy(A.G(c.h(0,"field")),A.G(c.h(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.na(A.x(a,a0),a2,a3,a4,A.x(a1,a5),A.x(a1,a5),A.x(a,a5),A.x(a,a5),A.x(a,a5),A.x(a1,a5),A.x(a1,a5),A.x(a1,a5),a6)}}
A.ng.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:89}
A.nh.prototype={
$1(a){t.d7.a(a)
return new A.O(A.G(a.a),A.G(a.b),t.q)},
$S:90}
A.kd.prototype={
e0(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.e(v.G.window).setTimeout(A.al(new A.ke(this)),7000))}}
A.ke.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:25}
A.kE.prototype={
dS(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.kR.prototype={
it(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.Z(a,k,"door-speaker",j)
l.b!==$&&A.y()
l.b=i
s=A.Z(a,k,"door-line",j)
l.c!==$&&A.y()
l.c=s
r=l.a
A.e(r.appendChild(i))
A.e(r.appendChild(s))
s=A.Z(a,k,"door-cite-list",j)
l.e!==$&&A.y()
l.e=s
i=A.Z(a,k,"door-cite-result",j)
l.f!==$&&A.y()
l.f=i
A.e(r.appendChild(s))
A.e(r.appendChild(i))
for(i=A.jN,s=l.r,q=0;q<5;++q){p=B.ek[q]
o=A.e(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.kS(l,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.eK()]=n
o.addEventListener("click",m)
A.e(r.appendChild(o))
B.a.k(s,o)}i=A.Z(a,"button","door-continue","continue")
l.d!==$&&A.y()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.al(new A.kT(l)))
A.e(r.appendChild(i))
A.e(A.i(a.body).appendChild(r))},
e1(a,b){var s,r,q,p=this
p.z=!0
s=p.b
s===$&&A.j()
s.textContent=a
s=p.c
s===$&&A.j()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)A.e(s[q].style).display=""
s=p.d
s===$&&A.j()
A.e(s.style).display="none"
s=p.e
s===$&&A.j()
s.textContent=""
s=p.f
s===$&&A.j()
s.textContent=""
p.a.className="door visible"},
cu(a){var s,r,q=this,p=q.c
p===$&&A.j()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.p)(p),++r)A.e(p[r].style).display="none"
p=q.d
p===$&&A.j()
A.e(p.style).display=""
p=q.f
p===$&&A.j()
p.textContent=""},
i6(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.j()
s.textContent=""
for(r=b.length,q=A.jN,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.e(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.kU(o,this)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eK()]=o
m.addEventListener("click",l)
A.e(s.appendChild(m))}},
cd(){var s,r=this
r.z=!1
s=r.e
s===$&&A.j()
s.textContent=""
s=r.f
s===$&&A.j()
s.textContent=""
r.a.className="door"},
sl1(a){this.w=t.ov.a(a)},
sl3(a){this.x=t.jE.a(a)},
sl2(a){this.y=t.bZ.a(a)}}
A.kS.prototype={
$1(a){var s
A.e(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.kT.prototype={
$1(a){var s
A.e(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.kU.prototype={
$1(a){var s
A.e(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.kX.prototype={
iu(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.Z(s,"h1","journal-title",null)
o.f!==$&&A.y()
o.f=r
q=A.Z(s,"div","ending-copy",null)
o.r!==$&&A.y()
o.r=q
A.e(n.appendChild(r))
A.e(n.appendChild(q))
p=A.Z(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.al(new A.kY(o)))
A.e(n.appendChild(p))},
i7(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.j()
s.textContent=a.a.b
s=m.r
s===$&&A.j()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.p)(b),++p){o=b[p]
n=A.e(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.e(s.appendChild(n))}m.cm()},
sl4(a){this.w=t.jE.a(a)}}
A.kY.prototype={
$1(a){var s
A.e(a)
s=this.a
s.aH()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.lq.prototype={
iv(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.e(p.appendChild(A.Z(s,"h1","journal-title","house notes")))
A.e(p.appendChild(A.Z(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.e(p.appendChild(A.Z(s,"p",q,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
r=A.Z(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.al(new A.lr(this)))
A.e(p.appendChild(r))}}
A.lr.prototype={
$1(a){A.e(a)
return this.a.aH()},
$S:1}
A.lV.prototype={
iH(){var s,r=this,q=r.a,p=A.Z(q,"div","page-turn",null),o=A.Z(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.al(new A.lW(r)))
s=A.Z(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.al(new A.lX(r)))
q=A.Z(q,"span","right-day-label",null)
r.Q!==$&&A.y()
r.Q=q
A.e(p.appendChild(o))
A.e(p.appendChild(q))
A.e(p.appendChild(s))
return p},
eZ(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ec(s.CW+a,r)
s.eE()},
ec(a,b){if(a<1)return 1
if(a>b)return b
return a},
jv(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.j()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.j()
s.textContent=""
for(s=j.w.dZ(),r=s.length,q=A.jN,p=j.a,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=B.a.gR(n.c).n(0)
l=A.e(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.lY(j,n,l)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eK()]=m
l.addEventListener("click",k)
A.e(i.appendChild(l))}},
eE(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.j()
s=t.r
r=A.f([],s)
for(q=j.f,p=q.b,o=A.o(p).i("am<2>"),n=new A.am(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.X(r,new A.lZ())
j.eD(i,r)
i=j.Q
i===$&&A.j()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.j()
s=A.f([],s)
for(r=new A.am(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.X(s,new A.m_())
j.eD(i,s)
k=B.d.Z(q.f/4,0,1)
i=j.as
i===$&&A.j()
A.e(i.style).setProperty("width",B.d.co(k*100,1)+"%")},
eD(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r)A.e(a.appendChild(this.j4(b[r])))},
j4(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.Z(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.e(k.createElement("div"))
n.className=q
n.textContent=o
A.e(n.style).setProperty("--shake",B.d.n(p.b))
A.e(j.appendChild(n))}m=a.r
if(m!=null){l=this.je(m,!1)
l.className=A.G(l.className)+" margin"
A.e(j.appendChild(l))}return j},
je(a,b){var s=b?"hand-line struck":"hand-line",r=A.Z(this.a,"div",s,a.n(0))
A.e(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.lW.prototype={
$1(a){A.e(a)
return this.a.eZ(-1)},
$S:1}
A.lX.prototype={
$1(a){A.e(a)
return this.a.eZ(1)},
$S:1}
A.lY.prototype={
$1(a){var s,r,q
A.e(a)
s=this.a
r=this.c
q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:1}
A.lZ.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.m_.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:14}
A.ff.prototype={
bI(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.e(s.style).setProperty("--panel-fade","0.25s")
A.e(A.i(this.a.body).appendChild(s))},
cm(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.G(n.className),"open"))return
s=$.mp
if(s!=null&&s!==o)s.aH()
$.mp=o
r=o.a
o.d=A.i(r.activeElement)
A.qY(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.al(o.gjp())
o.e=q
r.addEventListener("keydown",q)
p=A.t9(n)
if(p.length!==0)B.a.gaI(p).focus()
else n.focus()},
aH(){var s,r,q=this,p=q.b
if(!B.b.v(A.G(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.mp===q)$.mp=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
jq(a){A.e(a)
if(A.aY(a.defaultPrevented))return
if(A.G(a.code)==="Escape"){this.aH()
return}if(A.G(a.code)==="Tab")this.jI(a)},
jI(a){var s,r=A.t9(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.aY(a.shiftKey)){if(s===B.a.gaI(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gR(r).focus()}}else if(s===B.a.gR(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gaI(r).focus()}},
scl(a){this.c=t.jE.a(a)}}
A.mC.prototype={
i5(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.n7.prototype={
iA(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.e(i.appendChild(A.Z(a,"h2","journal-title","Rest")))
A.e(i.appendChild(A.Z(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.Z(a,"div","entry-picker",null)
for(r=A.jN,q=0;q<2;++q){p=B.bk[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bp[n]
l=A.e(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.n8(this,p,m)
if(typeof k=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eK()]=k
l.addEventListener("click",j)
A.e(s.appendChild(l))}}A.e(i.appendChild(s))},
sl5(a){this.f=t.as.a(a)}}
A.n8.prototype={
$1(a){var s,r
A.e(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aH()},
$S:4}
A.bP.prototype={}
A.ka.prototype={
lr(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.L(s)
q=new A.R(s,r.i("m(1)").a(new A.kc()),r.i("R<1,m>")).b_(0)
r=this.b
r.H(0)
s=J.un(a,t.N)
p=s.$ti
r.J(0,new A.Q(s,p.i("t(n.E)").a(q.gc1(q)),p.i("Q<n.E>")))},
kq(a,b){var s,r,q,p,o,n=A.f([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.kc.prototype={
$1(a){return t.B.a(a).a},
$S:91}
A.kb.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:92}
A.j_.prototype={
kQ(a){return this.c.v(0,t.g.a(a))},
lp(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a3(0,j.gkh())||!a.a.a3(0,new A.ny(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.a8){n=s.d
if(n<J.aT(p)){o=o===B.J
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.K}else j=!1}}}if(j)return!1
m=new A.iZ(r,s.b,A.an(p,t.kX),B.J)
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
f2(a){var s=this.a,r=A.o(s).i("ag<1>"),q=r.i("Q<n.E>")
s=A.K(new A.Q(new A.ag(s,r),r.i("t(n.E)").a(new A.nv(a)),q),q.i("n.E"))
B.a.X(s,new A.nw())
return s},
jZ(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.ht
s=m.a.h(0,a)
if(s==null)return B.hu
r=B.c.K(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aL:B.R
o=p===B.R&&m.r.v(0,q)&&s.a2(B.aM)?B.aM:p
if(s.a2(o))n=o
else n=s.a2(B.R)?B.R:B.aL
r=s.h(0,n)
r.toString
r=new A.iZ(a,n,A.an(r,t.kX),B.J)
m.e=r
return new A.iY(r)},
kc(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cf
if(n.d!==B.J)return B.hr
n.e=a
s=a===B.K
n.d=s?B.a8:B.a6
r=this.d
q=s?B.cd:B.hc
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.cv(q,o,p,a,null))
if(a===B.V)B.a.k(r,new A.cv(B.hf,o,p,a,null))
if(s)this.eF(n)
return new A.iX(n)},
jV(){var s,r=this.e
if(r==null)return B.cf
s=r.d
if(s!==B.a6&&s!==B.a7)return B.hs
r.d=B.a7
if(++r.f>=r.c.length){r.d=B.a8
this.eF(r)
return new A.fx(r,!0)}return new A.fx(r,!1)},
kd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.a6&&s!==B.a7}else s=!0
if(s)return i
r=h.gc2()
if(r==null)return i
s=t.N
q=A.x(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.bo
p=J.M(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.ce(q,s,s)
m=c.js(!0,!0,o,new A.nE(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.a9){B.a.k(this.d,new A.cv(B.he,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gR(j.c)
s=A.r3(s,s)
s.J(0,o.a)
s.J(0,q)
p.jS(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.cg)if(k===B.aO){s=n.b
s=s.gL(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.cv(B.hd,o,p.b,i,l))}}return m},
eF(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
sig(a){this.r=t.R.a(a)}}
A.ny.prototype={
$1(a){var s=this.a.a
return new A.ag(s,A.o(s).i("ag<1>")).O(0,new A.nx(A.G(a)))},
$S:3}
A.nx.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:15}
A.nv.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:15}
A.nw.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:94}
A.nu.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:95}
A.j0.prototype={}
A.jp.prototype={}
A.p_.prototype={
$1(a){return B.b.Y(A.G(a),"off.")},
$S:3}
A.b5.prototype={
A(){return"DoorChoice."+this.b}}
A.bq.prototype={
A(){return"VisitPhase."+this.b}}
A.br.prototype={
A(){return"VisitTier."+this.b}}
A.cR.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cv.prototype={
C(){var s,r=this,q=A.x(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.c7.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bs.prototype={
U(a,b){if(b==null)return!1
return b instanceof A.bs&&b.a===this.a&&b.b===this.b},
gG(a){return A.cn(this.a,this.b,B.k,B.k)}}
A.bC.prototype={
U(a,b){if(b==null)return!1
return b instanceof A.bC&&b.a===this.a&&b.b===this.b},
gG(a){return A.cn(this.a,this.b,B.k,B.k)}}
A.bb.prototype={
U(a,b){var s=this
if(b==null)return!1
return b instanceof A.bb&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gG(a){var s=this
return A.cn(s.a,s.b,s.c,s.d)},
C(){var s=this
return A.T(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.j1.prototype={
C(){var s,r,q,p=this.a
p=A.K(p,A.o(p).c)
B.a.a0(p)
s=this.b
r=A.o(s)
q=r.i("d8<1,U<m,@>>")
s=A.K(new A.d8(s,r.i("U<m,@>(1)").a(new A.nt()),q),q.i("n.E"))
r=this.c
return A.T(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.nt.prototype={
$1(a){return t.g.a(a).C()},
$S:96}
A.hi.prototype={
C(){var s=this,r=s.a.C(),q=s.e
q=q==null?null:q.b
return A.T(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.k7.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:97}
A.k8.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:98}
A.k9.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:99}
A.iZ.prototype={
gc2(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.nz.prototype={}
A.bc.prototype={}
A.iY.prototype={}
A.iX.prototype={}
A.fx.prototype={}
A.fR.prototype={
gb7(){var s,r=this.p3
if(r){s=this.w
s===$&&A.j()
s=s.a.b}else s="safe"
return A.mT("next",r?this.gk7():B.eH,!1,null,s)},
gcY(){if(this.p3){var s=this.d
s===$&&A.j()
s=s.b===B.M}else s=!1
return s},
gk7(){var s,r
if(!this.p3)return B.l
s=this.r
s===$&&A.j()
r=this.w
r===$&&A.j()
return B.cB.k8(s,r)},
gkH(){var s=this.k2
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.co(this.k3,3)},
gkG(){var s=this.k2
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.k3<=100},
aJ(){var s,r,q,p,o,n,m=this,l=A.w3(m.a)
m.d=l
l=l.hF()
m.r=l
l=m.w=B.aQ.hX(l)
q=m.b
p=m.c
s=new A.iK(q,p,q,p)
p=A.rg(m.d)
m.e=p
try{p.ht(new A.iz(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.ab(o)
l=m.w
if(l===B.a_)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.a_
l=A.rg(m.d)
l.ht(B.ft,s)
m.e=l}l=m.e
l.bO()
n=A.vJ(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.p3=!0},
aC(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("Pixeldart surface size must be positive",null))
if(!r.p3){r.b=a
r.c=b
return}s=r.e
s===$&&A.j()
s.bO()
new A.iK(a,b,a,b).E()
r.b=a
r.c=b},
jX(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="wall-plaster",b0="grime",b1="renderer is not initialized",b2="resource library is disposed"
if(!a8.p3||a8.Q.length!==0)return
a8.p4=b3
s=a8.dx
r=a8.e
r===$&&A.j()
s.l(0,a9,r.gaw().hI("texture:wall-plaster",256,256))
s.l(0,b0,a8.e.gaw().hI("texture:grime",512,512))
a8.fx=a8.e.gaw().dN(A.pD(s.h(0,a9),!1,"quarantine-house-safe",!0,0.58,0.58,0.58,1,1))
r=a8.dy
r.l(0,"cellar",a8.e.gaw().dN(A.pD(s.h(0,b0),!1,"quarantine-house-cellar",!0,0.44,0.46,0.48,1,1)))
for(q=a8.fr,p=0;p<7;++p){o=B.eo[p]
n=a8.e.w
if(n==null)n=A.k(A.l(b1))
m=o==="service"?s.h(0,b0):s.h(0,a9)
m=new A.cJ("quarantine-inventory-"+o,m,a8.cM(o).a,a8.cM(o).b,a8.cM(o).c,1,1,!1)
if(n.r)A.k(A.l(b2))
m.E()
l=n.b.a.aS(m,null)
n.e.k(0,l)
q.l(0,o,l)}for(q=b3.b,n=q.length,m=a8.Q,k=a8.as,j=a8.at,i=a8.y,h=a8.z,p=0;g=q.length,p<g;q.length===n||(0,A.p)(q),++p){f=q[p]
e=a8.eI(b3,f)
g=a8.e.w
if(g==null)g=A.k(A.l(b1))
d=f.a
if(g.r)A.k(A.l(b2))
c=g.a
e.E()
l=c.b.aS(e,"room:"+d)
b=l.a
c.c.l(0,b,c.bX(e))
g.d.k(0,l)
B.a.k(i,l)
h.l(0,d,l)
g=r.h(0,d)
if(g==null){g=a8.fx
g.toString}a=new A.aW(l,g,B.Q,-1,B.L,B.S,!0,!0,0,null)
g=a8.f
g===$&&A.j()
B.Q.E()
c=g.a
a0=c.$ti
c.ak(a0.c.a(l))
c=c.b
if(!(b>=0&&b<c.length))return A.d(c,b)
e=c[b].c
c=(e==null?a0.y[1].a(e):e).d
b=B.Q.ap()
c=c.gb5()
a0=A.L(c)
A.cd(new A.R(c,a0.i("z(1)").a(b.gb0()),a0.i("R<1,z>")))
a1=g.b.c3(a)
B.a.k(m,a1)
k.l(0,d,a1)
j.l(0,d,a)}for(p=0;p<q.length;q.length===g||(0,A.p)(q),++p){f=q[p]
for(r=f.e,n=r.length,m=f.a,a2=0;a2<r.length;r.length===n||(0,A.p)(r),++a2){a3=r[a2]
k=a3.c
j=a3.d
a8.e4(m,a8.eA(f,a3.b,k,k+a3.e,j,j+a3.f,7902632),new A.o3(a3))}}for(r=b3.c,q=r.length,n=b3.e,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){a4=r[p]
if(a4.as)continue
f=n.h(0,a4.b)
if(f==null)continue
m=f.a
a8.e4(m,a8.eA(f,a4.aq(m),a4.af(m),a4.af(m)+a4.w,0,a4.x,5915445),new A.o4(a4))}a5=A.z_(A.yi(b3))
a8.fy=a8.e.gaw().dN(A.pD(s.h(0,b0),!0,"quarantine-house-exterior-shell",!0,0.5,0.5,0.5,1,1))
a6=a8.e.gaw().dO(a5,"exterior:main-shell")
B.a.k(i,a6)
s=a8.fy
s.toString
a7=a8.cx=new A.aW(a6,s,B.Q,-1,B.L,B.S,!0,!0,0,null)
s=a8.f
s===$&&A.j()
s.bZ(a7)
a8.CW=s.b.c3(a7)},
hY(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5="renderer is not initialized",a6="resource library is disposed"
a4.db=A.an(a7.e,t.gB)
if(!a4.p3)return
for(s=a4.ax,r=new A.V(s,A.o(s).i("V<1,2>")).gu(0),q=a4.ay;r.m();){p=r.d
p.toString
o=a4.f
o===$&&A.j()
o.b.aK(p.b)
n=q.h(0,p.a)
if(n!=null){p=a4.e
p===$&&A.j()
p=p.w
if(p==null)p=A.k(A.l(a5))
o=n.a
if(p.r)A.k(A.l(a6))
p.a.aK(o)
p.d.ah(0,o)}}s.H(0)
q.H(0)
r=a4.ch
B.a.H(r)
for(p=a4.db,o=p.length,m=a7.c,l=a4.fr,k=0;k<o;++k){j=p[k]
i=a4.p4
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a7.f4(j.c)
i=a4.e
i===$&&A.j()
i=i.w
if(i==null)i=A.k(A.l(a5))
f=a4.jd(g,j,m)
e=j.a
if(i.r)A.k(A.l(a6))
d=i.a
f.E()
c=d.b.aS(f,"inventory:"+e)
b=c.a
d.c.l(0,b,d.bX(f))
i.d.k(0,c)
i=j.f
f=i.a
a=B.F.ga5()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=l.h(0,g.b)
if(d==null){d=l.h(0,"furniture")
d.toString}a2=h.d
i=new A.iO(new A.z(a2.a+f.a*m,a2.b+f.b*m,a2.c+f.c*m),new A.ix(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.aW(c,d,i,-1,B.L,B.S,!1,!0,0,null)
B.a.k(r,c)
q.l(0,e,n)
d=a4.f
d===$&&A.j()
i.E()
f=d.a
a2=f.$ti
f.ak(a2.c.a(c))
f=f.b
if(!(b>=0&&b<f.length))return A.d(f,b)
a3=f[b].c
f=(a3==null?a2.y[1].a(a3):a3).d
i=i.ap()
f=f.gb5()
b=A.L(f)
A.cd(new A.R(f,b.i("z(1)").a(i.gb0()),b.i("R<1,z>")))
s.l(0,e,d.b.c3(n))}$.D.j().setAttribute("data-renderer-inventory-items",""+s.a)},
i3(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a6.e,a5=a4.h(0,a7)
if(a5==null)return
s=a5.a
r=A.aq([s],t.N)
for(q=a6.ao(s),p=J.M(q.a),q=new A.N(p,q.b,q.$ti.i("N<1>"));q.m();){o=p.gp()
n=o.bb(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a4.h(0,n)!=null)r.k(0,n)}for(a4=a3.as,a4=new A.V(a4,A.o(a4).i("V<1,2>")).gu(0),s=a3.at;a4.m();){m=a4.d
q=m.a
p=s.h(0,q)
p.toString
l=a3.bY(p,r.v(0,q)?-1:0)
p=a3.f
p===$&&A.j()
o=m.b
k=l.c
k.E()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.ak(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.d(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.ap()
j=j.gb5()
i=A.L(j)
A.cd(new A.R(j,i.i("z(1)").a(k.gb0()),i.i("R<1,z>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.ak(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.d(p,o)
p[o].sb6(l)
s.l(0,q,l)}for(a4=a3.cy,s=a4.length,f=0;f<a4.length;a4.length===s||(0,A.p)(a4),++f){e=a4[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a3.f
q===$&&A.j()
p=a3.bY(e.c,d)
o=p.c
o.E()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.ak(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.d(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.ap()
k=k.gb5()
j=A.L(k)
A.cd(new A.R(k,j.i("z(1)").a(o.gb0()),j.i("R<1,z>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.ak(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.d(q,o)
q[o].sb6(p)}for(a4=a3.db,s=a4.length,q=a3.ax,p=a3.ay,f=0;f<s;++f){c=a4[f]
o=c.a
b=q.h(0,o)
a=p.h(0,o)
if(b==null||a==null)continue
o=a3.f
o===$&&A.j()
k=a3.bY(a,r.v(0,c.b)?-1:0)
j=k.c
j.E()
i=o.a
h=i.$ti
a0=h.c.a(k.a)
i.ak(a0)
i=i.b
a0=a0.a
if(!(a0>=0&&a0<i.length))return A.d(i,a0)
g=i[a0].c
i=(g==null?h.y[1].a(g):g).d
j=j.ap()
i=i.gb5()
h=A.L(i)
A.cd(new A.R(i,h.i("z(1)").a(j.gb0()),h.i("R<1,z>")))
o=o.b
h=o.$ti
h.c.a(b)
h.y[1].a(k)
o.ak(b)
o=o.b
h=b.a
if(!(h>=0&&h<o.length))return A.d(o,h)
o[h].sb6(k)}a4=new A.l2().kb(a7).a
a1=a3.CW
a2=a3.cx
if(a1!=null&&a2!=null){l=a3.bY(a2,a4!==0?-1:0)
s=a3.f
s===$&&A.j()
s.bZ(l)
s.b.dT(a1,l)
a3.cx=l}},
lf(a,b){var s,r,q,p,o,n,m,l,k,j=this
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
l=m.gaw().dO(j.eI(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.aW(l,q.b,q.c,q.d,q.e,q.f,q.r,!0,q.x,q.y)
m=j.f
m===$&&A.j()
m.bZ(k)
m.b.dT(s,k)
r.l(0,b,k)
p.l(0,b,l)
p=j.y
B.a.ah(p,o)
B.a.k(p,l)
j.e.gaw().lg(o)
$.D.j().setAttribute("data-renderer-geometry-refreshes",""+(j.R8+1));++j.R8},
hZ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.aq([b],t.N),h=a.e,g=h.h(0,b)
if(g!=null)for(s=g.a,r=a.ao(s),q=J.M(r.a),r=new A.N(q,r.b,r.$ti.i("N<1>"));r.m();){p=q.gp()
o=p.bb(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h.h(0,o)!=null)i.k(0,o)}n=new A.hX(a).hP(i,c)
m=A.f([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.ei(k.b)
h=k.a
B.a.k(m,new A.is(new A.z(h.a,h.b,h.c),k.d,k.c))}j=A.tS(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.ei(A.tR(d))
s=new A.kQ(new A.z(j.a,j.b,j.c),1)}this.id=new A.hO(B.e7,1.5,14,B.bh,h,s,m)},
aE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.p3)throw A.c(A.l("Pixeldart runtime is not initialized"))
s=g.go
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cm(s)
q=A.pC(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.e_(r,q,q.W(0,r),B.aK,B.fX,0.1,60,g.b/g.c)}p=g.id
o=g.k1
n=g.p2++
m=g.k4
l=new A.n9()
$.qA()
k=$.mA.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.j()
j=g.f
j===$&&A.j()
k.ju()
k.bO()
i=B.a.v(k.d,j)
if(!i)A.k(A.w("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga4(0))A.k(A.w("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga4(0)||i.gbA()<1e-12)A.k(A.w("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.w("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.w("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.ga4(0)||!s.b.ga4(0)||!s.c.ga4(0))A.k(A.w("CameraView matrices must be finite",f))
p.E()
o.E()
if(!isFinite(m))A.k(A.w("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.l9(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.aj)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.aj
s.c=0
B.a.H(s.a)
g.k2=g.e.ku()
s=$.mA.$0()
l.b=s
g.k3=l.gkr()/1000},
aX(a){},
hw(){},
hG(){++this.ok},
eI(a,b){var s,r,q,p,o,n=A.tD(a,b),m=A.K(n.a,t.i)
B.a.J(m,n.b)
B.a.J(m,n.c)
B.a.J(m,n.d)
s=new Float32Array(A.a3(m))
r=A.f([],t.k)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.d(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.d(s,o)
B.a.k(r,new A.z(m,p,s[o]))}return new A.bT(B.T,s,null,A.cd(r))},
e4(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.j()
r=s.gaw().dO(b,"decoration:"+a)
B.a.k(p.y,r)
q=new A.aW(r,p.jg(a),B.Q,0,B.L,B.S,!0,!0,0,null)
s=p.f
s===$&&A.j()
s.bZ(q)
B.a.k(p.cy,new A.jr(a,s.b.c3(q),q,c))},
jg(a){var s=this.dy.h(0,a)
if(s==null){s=this.fx
s.toString}return s},
jd(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.cO(new Float32Array(5376))
g=this.jc(a0.b)
r=new A.b(d,b,f)
q=new A.b(e,b,f)
p=new A.b(e,c,f)
o=new A.b(d,c,f)
n=new A.b(d,b,a)
m=new A.b(e,b,a)
l=new A.b(e,c,a)
k=new A.b(d,c,a)
s.aj(q,r,o,p,g)
s.aj(n,m,l,k,g)
s.aj(r,n,k,o,g)
s.aj(m,q,p,l,g)
s.aj(r,q,m,n,g)
s.aj(o,k,l,p,g)
j=B.u.b1(s.a,0,s.b)
g=A.f([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.z(e,d,j[c]))}return new A.bT(B.T,j,null,A.cd(g))},
jc(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
cM(a){var s
A:{if("architecture"===a){s=B.fp
break A}if("furniture"===a){s=B.bA
break A}if("fixture"===a){s=B.fq
break A}if("service"===a){s=B.fn
break A}if("story"===a){s=B.fo
break A}if("decor"===a){s=B.fs
break A}if("micro"===a){s=B.fr
break A}s=B.bA
break A}return s},
au(a){return this.kX(t.G.a(a))},
kX(a){var s=0,r=A.b1(t.H),q,p=this,o,n,m,l
var $async$au=A.b2(function(b,c){if(b===1)return A.aZ(c,r)
for(;;)switch(s){case 0:if(!p.p3){s=1
break}o=A.f([],t.iw)
for(n=0;n<2;++n){m=B.eF[n]
l=a.h(0,m)
if(l!=null)o.push(p.bQ(m,l))}s=3
return A.a7(A.lf(o,t.H),$async$au)
case 3:case 1:return A.b_(q,r)}})
return A.b0($async$au,r)},
bQ(a,b){return this.jf(a,b)},
jf(a,b){var s=0,r=A.b1(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bQ=A.b2(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.dx.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.e(A.e(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.a7(A.ay(A.e(m.decode()),t.X),$async$bQ)
case 7:g=A.e(A.e(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.c(h)}k.drawImage(m,0,0)
j=t.mR.a(A.e(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.j()
h=h.gaw()
f=new Uint8Array(A.a3(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.ly(d,f)
$.D.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ab(c)
h=$.D.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.e(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.q(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.b_(q,r)
case 2:return A.aZ(o.at(-1),r)}})
return A.b0($async$bQ,r)},
bY(a,b){return new A.aW(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eA(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aT(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.cO(new Float32Array(5376))
o.aj(k[0],k[1],k[2],k[3],g)
n=B.u.b1(o.a,0,o.b)
k=A.f([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.z(r,q,n[p]))}return new A.bT(B.T,n,null,A.cd(k))},
ei(a){return new A.dk((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ipH:1}
A.o3.prototype={
$0(){return!this.a.w},
$S:16}
A.o4.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:16}
A.eo.prototype={
gb7(){return A.mT("legacy",B.l,this.e,this.f,"legacy")},
gcY(){return this.x},
aJ(){var s,r=this
if(r.w)return
s=A.vK(r.a,r.b,r.c)
r.r!==$&&A.y()
r.r=s
s.fF=s.fE=s.fD=r.d
r.w=!0},
aC(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.j()
s.aC(a,b)}},
aE(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.c(A.l("legacy runtime is not initialized"))
if(j.x||$.on==null)return;++j.y
$.D.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.j()
r=$.tj
q=$.bf.j()
s.fJ=A.tS($.dL.j().gbi()).ga5()
s.shv(A.tR($.dL.j().gbi()))
p=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dL.j().gbi()))
s.fN=p<0?0:p
p=$.bH.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.T(0,p.d.W(0,(A.pn(o*0.28,1309)*2-1)*n)).T(0,p.c.W(0,(A.pn(p.r*0.28,2839)*2-1)*n))
p=$.bH.j()
s.fO=p.a
s.dg=p.b
s.dh=p.c
s.di=p.d
m=A.xm(0,0.25,0.11)
s.dj=m.a
s.dk=m.b
s.dl=m.c
p=s.ca
l=p==null?s.bt:p
if(l==null)l=s.aU
p=s.aA
p.aG(l)
s.ar.depthMask(!0)
p.ke(l,s.dj/255,s.dk/255,s.dl/255)
s.da=s.cb=0
s.dd=!1
s.bv=0
k=$.on
if(k!=null)k.ko($.aH,$.hf())
s.kF(r,q)
$.rW.j().dS(B.cz,r)},
aX(a){},
hw(){this.x=!0},
hG(){this.x=!1},
$ipH:1}
A.jr.prototype={}
A.p7.prototype={
$1(a){var s
try{A.qR(a,this.a)
return!0}catch(s){if(A.ab(s) instanceof A.I)return!1
else throw s}},
$S:101}
A.p8.prototype={
$0(){$.bg=null
$.bw.j().aL($.D.j())},
$S:0}
A.p9.prototype={
$2(a,b){var s,r,q,p,o,n
if($.S.j().gam().a===21){A.ts(!1)
return}s=$.X.j().r.b
$.S.j().ib(a,b,$.aH)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.ct()
if(typeof n!=="number")return A.jZ(n)
if(!(o<n))break
if($.X.b===$.X)A.k(A.a_(""))
p=B.a.h(B.A,q).b
o=$.on
if(o!=null)o.ld(p)
o=$.bL
if(o!=null){n=$.X.b
if(n===$.X)A.k(A.a_(""))
o.lf(n,p)}o=q
if(typeof o!=="number")return o.T()
q=o+1}A.qm("saved after sleep")},
$S:102}
A.pc.prototype={
$0(){$.bg=null
$.bw.j().aL($.D.j())},
$S:0}
A.pd.prototype={
$0(){$.bg=null
$.bw.j().aL($.D.j())},
$S:0}
A.pe.prototype={
$0(){$.bg=null},
$S:0}
A.pf.prototype={
$0(){$.bg=null},
$S:0}
A.pg.prototype={
$1(a){A.e(a)
return A.tr()},
$S:1}
A.ph.prototype={
$1(a){var s,r
A.e(a)
if(!A.aY(a.repeat))$.cx.j().aX(new A.iA(A.G(a.code),!0,1))
if(A.G(a.code)==="KeyP"&&!A.aY(a.repeat))$.qf=!$.qf
if(A.G(a.code)==="KeyR"&&!A.aY(a.repeat)&&$.tA){s=$.eE
if(s!=null)s.bc()}if(A.G(a.code)==="KeyJ"&&!A.aY(a.repeat)&&!$.aF.j().z){s=$.bg
if(s==null){$.bg=$.ey.j()
s=$.ey.j()
s.ik()
r=s.r.a-1
if(r<1)r=1
s.CW=s.ec(s.CW,r)
s.jv()
s.eE()}else if(s===$.ey.j())$.ey.j().aH()}if(A.G(a.code)==="KeyL"&&!A.aY(a.repeat)&&!$.aF.j().z){s=$.bg
if(s==null){$.bg=$.jM.j()
$.jM.j().cm()}else if(s===$.jM.j())$.jM.j().aH()}if(A.G(a.code)==="KeyH"&&!A.aY(a.repeat)&&!$.aF.j().z){s=$.bg
if(s==null){$.bg=$.jK.j()
$.jK.j().cm()}else if(s===$.jK.j())$.jK.j().aH()}if(A.G(a.code)==="KeyK"&&!A.aY(a.repeat))A.qm("saved")},
$S:4}
A.pi.prototype={
$1(a){A.e(a)
$.cx.j().aX(new A.iA(A.G(a.code),!1,0))},
$S:4}
A.pj.prototype={
$1(a){A.e(a)
return A.rZ()},
$S:1}
A.pa.prototype={
$1(a){A.e(a)
return A.rZ()},
$S:1}
A.pb.prototype={
$1(a){A.e(a)
return $.bw.j().aL($.D.j())},
$S:1}
A.oH.prototype={
$1(a){var s=A.G(A.e(a).message)
A.oL(s,null)},
$S:4}
A.oI.prototype={
$1(a){var s
A.e(a)
s=a.reason
A.oL("unhandled rejection: "+A.q(s==null?A.G(a.type):s),null)},
$S:4}
A.oO.prototype={
$0(){this.a.className=""},
$S:9}
A.oM.prototype={
$1(a){return t.L.a(a).e},
$S:24};(function aliases(){var s=J.cH.prototype
s.ij=s.n
s=A.n.prototype
s.ii=s.dW
s=A.ff.prototype
s.ik=s.cm})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"xs","vh",28)
r(J.r.prototype,"gc1","v",12)
q(A,"xF","vv",17)
p(A.bA.prototype,"gkh","a2",12)
o(A,"ye","wb",8)
o(A,"yf","wc",8)
o(A,"yg","wd",8)
q(A,"tC","xW",0)
s(A,"yk","vm",28)
r(A.bD.prototype,"gc1","v",12)
o(A,"yn","x7",6)
p(A.id.prototype,"gln","lo",67)
p(A.iN.prototype,"gll","lm",93)
q(A,"zz","pE",16)
p(A.cm.prototype,"gb0","hK",47)
var n
p(n=A.i_.prototype,"gjh","ji",1)
p(n,"gjj","jk",1)
p(n,"gjn","jo",1)
p(n,"gjl","jm",1)
o(A,"yQ","t6",6)
o(A,"yS","t5",6)
o(A,"yF","vc",105)
o(A,"yG","vd",106)
o(A,"yV","v7",107)
p(A.ff.prototype,"gjp","jq",1)
p(A.j_.prototype,"gkP","kQ",15)
o(A,"tK","xJ",108)
o(A,"yK","x3",109)
q(A,"yM","x6",0)
o(A,"yL","x4",73)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.B,null)
q(A.B,[A.pw,J.i1,A.fp,J.d2,A.n,A.eO,A.cC,A.a6,A.J,A.n3,A.bn,A.dl,A.N,A.fz,A.af,A.c6,A.bE,A.ec,A.e1,A.dI,A.cp,A.nl,A.ml,A.eV,A.fU,A.W,A.m9,A.cI,A.am,A.f7,A.nL,A.ob,A.bU,A.jh,A.jF,A.o8,A.j5,A.bv,A.az,A.j9,A.dD,A.ai,A.j6,A.jD,A.h5,A.fJ,A.jm,A.dJ,A.fM,A.h_,A.jG,A.d6,A.hA,A.o1,A.oc,A.d7,A.cE,A.je,A.io,A.fr,A.nM,A.I,A.O,A.aj,A.jE,A.n9,A.aQ,A.h1,A.nn,A.jy,A.mk,A.jj,A.ep,A.mD,A.dq,A.kJ,A.kK,A.it,A.e_,A.hO,A.l9,A.co,A.lp,A.dk,A.kQ,A.is,A.ej,A.cJ,A.cu,A.ns,A.bT,A.mm,A.mv,A.iB,A.aW,A.iK,A.iz,A.lb,A.id,A.iR,A.mh,A.cw,A.iN,A.dg,A.hM,A.hN,A.la,A.ak,A.bl,A.aP,A.P,A.eP,A.mB,A.aN,A.mF,A.aM,A.mH,A.mG,A.dG,A.fk,A.o7,A.js,A.jg,A.mW,A.n1,A.b7,A.b4,A.ar,A.kM,A.hh,A.dp,A.lc,A.cm,A.ix,A.iO,A.z,A.eN,A.j7,A.hr,A.j8,A.hE,A.jb,A.eS,A.jc,A.hI,A.jd,A.hW,A.ji,A.ht,A.hs,A.fh,A.jt,A.iw,A.ju,A.dw,A.iE,A.jw,A.iF,A.jx,A.iI,A.jB,A.iH,A.jA,A.iW,A.jH,A.fm,A.j3,A.jI,A.kH,A.hR,A.hT,A.f_,A.fq,A.F,A.hF,A.iu,A.lo,A.cW,A.c3,A.eT,A.nD,A.cY,A.h4,A.h3,A.j2,A.hH,A.hm,A.jz,A.kk,A.k4,A.eM,A.kg,A.km,A.kn,A.fA,A.kG,A.l8,A.iL,A.lm,A.hY,A.i_,A.ic,A.dm,A.mg,A.cO,A.mM,A.mV,A.nF,A.fH,A.jC,A.jq,A.jo,A.n4,A.b,A.kF,A.hJ,A.kW,A.e3,A.ir,A.mw,A.eh,A.n0,A.du,A.hP,A.lj,A.li,A.ku,A.dV,A.dX,A.dU,A.dW,A.hu,A.ie,A.fC,A.j4,A.f1,A.lu,A.mX,A.aL,A.l0,A.lv,A.lw,A.l2,A.cV,A.e5,A.mY,A.cU,A.eu,A.ls,A.l_,A.n5,A.ly,A.c_,A.cj,A.lS,A.lR,A.c2,A.hX,A.aR,A.b9,A.aV,A.b8,A.cD,A.cN,A.aD,A.lD,A.bZ,A.lt,A.f0,A.lC,A.e8,A.lH,A.fg,A.f8,A.nA,A.ia,A.bj,A.lU,A.kB,A.dY,A.kC,A.m5,A.m4,A.mt,A.ms,A.mu,A.mU,A.iA,A.mS,A.ei,A.kN,A.nE,A.dB,A.hz,A.lN,A.lP,A.mZ,A.c4,A.n_,A.hQ,A.na,A.dz,A.dy,A.fy,A.nf,A.kd,A.kE,A.kR,A.ff,A.mC,A.bP,A.ka,A.j_,A.nz,A.cv,A.bs,A.bC,A.bb,A.j1,A.hi,A.iZ,A.fR,A.eo,A.jr])
q(J.i1,[J.i5,J.f3,J.f4,J.ea,J.eb,J.dh,J.di])
q(J.f4,[J.cH,J.r,A.cK,A.fc])
q(J.cH,[J.iq,J.dx,J.ck])
r(J.i3,A.fp)
r(J.lT,J.r)
q(J.dh,[J.f2,J.i6])
q(A.n,[A.cT,A.E,A.cl,A.Q,A.bX,A.dH,A.c9])
q(A.cT,[A.d4,A.h6])
r(A.fG,A.d4)
r(A.fE,A.h6)
q(A.cC,[A.hw,A.hv,A.iM,A.p2,A.p4,A.nH,A.nG,A.ok,A.lg,A.nW,A.nY,A.mc,A.o_,A.pl,A.pm,A.oX,A.mE,A.mo,A.mf,A.mi,A.ni,A.nk,A.l5,A.l3,A.l4,A.mq,A.mr,A.mL,A.mK,A.mJ,A.mI,A.mN,A.oD,A.oE,A.n2,A.pr,A.pp,A.ld,A.me,A.oV,A.nB,A.nC,A.kr,A.kt,A.ks,A.kl,A.k5,A.k6,A.ki,A.kj,A.kh,A.ln,A.mR,A.kZ,A.lk,A.ll,A.kv,A.kw,A.kx,A.ky,A.kz,A.kA,A.oT,A.kI,A.l1,A.lx,A.oF,A.oj,A.lJ,A.lL,A.n6,A.lz,A.oS,A.lE,A.lG,A.oR,A.kV,A.m8,A.m0,A.kO,A.kP,A.oJ,A.ng,A.nh,A.ke,A.kS,A.kT,A.kU,A.kY,A.lr,A.lW,A.lX,A.lY,A.n8,A.kc,A.ny,A.nx,A.nv,A.p_,A.nt,A.k7,A.k8,A.k9,A.p7,A.pg,A.ph,A.pi,A.pj,A.pa,A.pb,A.oH,A.oI,A.oM])
q(A.hw,[A.nK,A.kL,A.m1,A.p3,A.ol,A.oU,A.lh,A.nX,A.ma,A.md,A.o2,A.nq,A.np,A.mj,A.nj,A.l6,A.pq,A.po,A.ko,A.kp,A.lK,A.lM,A.lB,A.m7,A.lQ,A.nb,A.nc,A.lZ,A.m_,A.kb,A.nw,A.nu,A.p9])
r(A.bR,A.fE)
q(A.a6,[A.dj,A.cr,A.i7,A.iQ,A.iC,A.jf,A.f6,A.hk,A.bQ,A.fw,A.iP,A.ek,A.hy])
r(A.em,A.J)
r(A.d5,A.em)
q(A.E,[A.a2,A.ag,A.aB,A.V,A.dF,A.fL])
q(A.a2,[A.ft,A.R,A.fo,A.jl])
r(A.d8,A.cl)
q(A.bE,[A.eq,A.er,A.es])
r(A.bF,A.eq)
r(A.bu,A.er)
r(A.fS,A.es)
r(A.ev,A.ec)
r(A.cQ,A.ev)
r(A.eQ,A.cQ)
q(A.e1,[A.a4,A.eX])
q(A.cp,[A.eR,A.fT,A.h0])
r(A.cf,A.eR)
q(A.hv,[A.mx,A.nI,A.nJ,A.o9,A.le,A.nN,A.nS,A.nR,A.nP,A.nO,A.nV,A.nU,A.nT,A.o6,A.oN,A.oe,A.od,A.oB,A.ov,A.oA,A.or,A.os,A.oC,A.oz,A.op,A.oq,A.ow,A.ox,A.oy,A.ou,A.ot,A.oW,A.mQ,A.lI,A.lA,A.lF,A.o3,A.o4,A.p8,A.pc,A.pd,A.pe,A.pf,A.oO])
r(A.fe,A.cr)
q(A.iM,[A.iJ,A.dZ])
q(A.W,[A.bA,A.fI,A.jk])
r(A.f5,A.bA)
r(A.ed,A.cK)
q(A.fc,[A.ig,A.aC])
q(A.aC,[A.fN,A.fP])
r(A.fO,A.fN)
r(A.fa,A.fO)
r(A.fQ,A.fP)
r(A.fb,A.fQ)
q(A.fa,[A.f9,A.ih])
q(A.fb,[A.ii,A.ij,A.ik,A.il,A.im,A.dn,A.fd])
r(A.fV,A.jf)
r(A.fB,A.j9)
r(A.jv,A.h5)
r(A.fK,A.fI)
r(A.bD,A.fT)
r(A.fv,A.h0)
q(A.d6,[A.ho,A.hK,A.i8])
q(A.hA,[A.kD,A.m3,A.m2,A.nr])
r(A.i9,A.f6)
r(A.o0,A.o1)
r(A.iU,A.hK)
q(A.bQ,[A.ef,A.hZ])
r(A.ja,A.h1)
q(A.je,[A.dr,A.df,A.hj,A.ct,A.e2,A.hq,A.hx,A.hG,A.dt,A.e6,A.bS,A.fn,A.ch,A.eg,A.e7,A.fD,A.fF,A.hS,A.eY,A.hU,A.hV,A.dd,A.eZ,A.dv,A.cP,A.e0,A.et,A.hp,A.d3,A.hB,A.hD,A.aE,A.hn,A.bz,A.dc,A.d9,A.da,A.eW,A.cF,A.cG,A.fl,A.ds,A.ba,A.aX,A.i0,A.dC,A.bB,A.b5,A.bq,A.br,A.cR,A.c7])
q(A.co,[A.b6,A.bp,A.c1,A.ip,A.ci])
r(A.mP,A.nF)
r(A.mO,A.mP)
q(A.ff,[A.kX,A.lq,A.lV,A.n7])
q(A.nz,[A.j0,A.jp,A.bc,A.iY,A.iX,A.fx])
s(A.em,A.c6)
s(A.h6,A.J)
s(A.fN,A.J)
s(A.fO,A.af)
s(A.fP,A.J)
s(A.fQ,A.af)
s(A.ev,A.h_)
s(A.h0,A.jG)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",v:"double",aK:"num",m:"String",t:"bool",aj:"Null",C:"List",B:"Object",U:"Map",Y:"JSObject"},mangledNames:{},types:["~()","~(Y)","cg()","t(m)","aj(Y)","t(v)","@(@)","t(ak)","~(~())","aj()","~(@)","t(P)","t(B?)","t(@)","h(bj,bj)","t(bb)","t()","h()","@(m)","aj(@)","~(B?,B?)","@()","t(h)","m?(m)","t(bj)","m(B?)","t(aR)","0&()","h(@,@)","0&(m,h?)","m(ak)","h(a0,a0)","aj(B,c5)","~(@,@)","ci(h,h,m?)","fm(b6)","cg(m{fallback:m?})","aj(~())","ej?()","e_()","v()","aW(bo)","h(ar<b7>,ar<b7>)","bo(ar<b7>)","h(ar<b4>,ar<b4>)","bo(ar<b4>)","dp(v,v,v,v)","z(z)","@(@,m)","~(dw)","dw()","U<m,m>(U<m,m>,m)","bk<aj>(O<m,m>)","aj(@,c5)","t(C<m>)","h(m,m)","h(b9,b9)","t(Y)","Y()","B?(B?)","t(bz)","t(aD)","~(h,@)","dV(B?)","dU(B?)","dW(B?)","~(B,c5)","cJ(c1)","dX(B?)","c1(h,h,m?)","t(cN)","t(cV)","t(cU)","~(h)","h(+(v,v,v,v),+(v,v,v,v))","C<+(v,v,v,v)>()","t(b9)","h(h,aD)","t(c_)","b6(h,h,m?)","h(c2,c2)","t(bZ)","O<m,m>(m,@)","t(ba)","t(aX)","h(h,+(b6,bT))","h(h)","O<h,@>(h,dz)","O<h,@>(h,dy)","t(O<@,@>)","O<m,m>(O<@,@>)","m(bP)","h(bP,bP)","cg(bp?)","h(bb,bb)","h(bC,bC)","U<m,@>(bb)","t(br)","t(bq)","t(b5)","bp(h,h,m?)","t(eh)","~(ba,aX)","t(fu?)","h(h,+(bp,cw))","c_(B?)","cj(B?)","bZ(B?)","~(aK)","~(m)","b(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.bF&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.bu&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fS&&A.yO(a,b.a)}}
A.wu(v.typeUniverse,JSON.parse('{"ck":"cH","iq":"cH","dx":"cH","z8":"cK","r":{"C":["1"],"E":["1"],"Y":[],"n":["1"]},"i5":{"t":[],"a1":[]},"f3":{"aj":[],"a1":[]},"f4":{"Y":[]},"cH":{"Y":[]},"i3":{"fp":[]},"lT":{"r":["1"],"C":["1"],"E":["1"],"Y":[],"n":["1"]},"d2":{"ad":["1"]},"dh":{"v":[],"aK":[],"aA":["aK"]},"f2":{"v":[],"h":[],"aK":[],"aA":["aK"],"a1":[]},"i6":{"v":[],"aK":[],"aA":["aK"],"a1":[]},"di":{"m":[],"aA":["m"],"r7":[],"a1":[]},"cT":{"n":["2"]},"eO":{"ad":["2"]},"d4":{"cT":["1","2"],"n":["2"],"n.E":"2"},"fG":{"d4":["1","2"],"cT":["1","2"],"E":["2"],"n":["2"],"n.E":"2"},"fE":{"J":["2"],"C":["2"],"cT":["1","2"],"E":["2"],"n":["2"]},"bR":{"fE":["1","2"],"J":["2"],"C":["2"],"cT":["1","2"],"E":["2"],"n":["2"],"J.E":"2","n.E":"2"},"dj":{"a6":[]},"d5":{"J":["h"],"c6":["h"],"C":["h"],"E":["h"],"n":["h"],"J.E":"h","c6.E":"h"},"E":{"n":["1"]},"a2":{"E":["1"],"n":["1"]},"ft":{"a2":["1"],"E":["1"],"n":["1"],"a2.E":"1","n.E":"1"},"bn":{"ad":["1"]},"cl":{"n":["2"],"n.E":"2"},"d8":{"cl":["1","2"],"E":["2"],"n":["2"],"n.E":"2"},"dl":{"ad":["2"]},"R":{"a2":["2"],"E":["2"],"n":["2"],"a2.E":"2","n.E":"2"},"Q":{"n":["1"],"n.E":"1"},"N":{"ad":["1"]},"bX":{"n":["1"],"n.E":"1"},"fz":{"ad":["1"]},"em":{"J":["1"],"c6":["1"],"C":["1"],"E":["1"],"n":["1"]},"fo":{"a2":["1"],"E":["1"],"n":["1"],"a2.E":"1","n.E":"1"},"bF":{"eq":[],"bE":[]},"bu":{"er":[],"bE":[]},"fS":{"es":[],"bE":[]},"eQ":{"cQ":["1","2"],"ev":["1","2"],"ec":["1","2"],"h_":["1","2"],"U":["1","2"]},"e1":{"U":["1","2"]},"a4":{"e1":["1","2"],"U":["1","2"]},"dH":{"n":["1"],"n.E":"1"},"dI":{"ad":["1"]},"eX":{"e1":["1","2"],"U":["1","2"]},"eR":{"cp":["1"],"cM":["1"],"E":["1"],"n":["1"]},"cf":{"eR":["1"],"cp":["1"],"cM":["1"],"E":["1"],"n":["1"]},"fe":{"cr":[],"a6":[]},"i7":{"a6":[]},"iQ":{"a6":[]},"fU":{"c5":[]},"cC":{"db":[]},"hv":{"db":[]},"hw":{"db":[]},"iM":{"db":[]},"iJ":{"db":[]},"dZ":{"db":[]},"iC":{"a6":[]},"bA":{"W":["1","2"],"py":["1","2"],"U":["1","2"],"W.K":"1","W.V":"2"},"ag":{"E":["1"],"n":["1"],"n.E":"1"},"cI":{"ad":["1"]},"aB":{"E":["1"],"n":["1"],"n.E":"1"},"am":{"ad":["1"]},"V":{"E":["O<1,2>"],"n":["O<1,2>"],"n.E":"O<1,2>"},"f7":{"ad":["O<1,2>"]},"f5":{"bA":["1","2"],"W":["1","2"],"py":["1","2"],"U":["1","2"],"W.K":"1","W.V":"2"},"eq":{"bE":[]},"er":{"bE":[]},"es":{"bE":[]},"ed":{"cK":[],"Y":[],"a1":[]},"dn":{"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"],"a1":[],"J.E":"h","af.E":"h"},"cK":{"Y":[],"a1":[]},"fc":{"Y":[]},"ig":{"Y":[],"a1":[]},"aC":{"bm":["1"],"Y":[]},"fa":{"J":["v"],"aC":["v"],"C":["v"],"bm":["v"],"E":["v"],"Y":[],"n":["v"],"af":["v"]},"fb":{"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"]},"f9":{"l7":[],"J":["v"],"aC":["v"],"C":["v"],"bm":["v"],"E":["v"],"Y":[],"n":["v"],"af":["v"],"a1":[],"J.E":"v","af.E":"v"},"ih":{"J":["v"],"aC":["v"],"C":["v"],"bm":["v"],"E":["v"],"Y":[],"n":["v"],"af":["v"],"a1":[],"J.E":"v","af.E":"v"},"ii":{"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"],"a1":[],"J.E":"h","af.E":"h"},"ij":{"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"],"a1":[],"J.E":"h","af.E":"h"},"ik":{"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"],"a1":[],"J.E":"h","af.E":"h"},"il":{"pL":[],"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"],"a1":[],"J.E":"h","af.E":"h"},"im":{"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"],"a1":[],"J.E":"h","af.E":"h"},"fd":{"fu":[],"J":["h"],"aC":["h"],"C":["h"],"bm":["h"],"E":["h"],"Y":[],"n":["h"],"af":["h"],"a1":[],"J.E":"h","af.E":"h"},"jf":{"a6":[]},"fV":{"cr":[],"a6":[]},"bv":{"ad":["1"]},"c9":{"n":["1"],"n.E":"1"},"az":{"a6":[]},"fB":{"j9":["1"]},"ai":{"bk":["1"]},"h5":{"rz":[]},"jv":{"h5":[],"rz":[]},"fI":{"W":["1","2"],"U":["1","2"]},"fK":{"fI":["1","2"],"W":["1","2"],"U":["1","2"],"W.K":"1","W.V":"2"},"dF":{"E":["1"],"n":["1"],"n.E":"1"},"fJ":{"ad":["1"]},"bD":{"cp":["1"],"r4":["1"],"cM":["1"],"E":["1"],"n":["1"]},"dJ":{"ad":["1"]},"J":{"C":["1"],"E":["1"],"n":["1"]},"W":{"U":["1","2"]},"fL":{"E":["2"],"n":["2"],"n.E":"2"},"fM":{"ad":["2"]},"ec":{"U":["1","2"]},"cQ":{"ev":["1","2"],"ec":["1","2"],"h_":["1","2"],"U":["1","2"]},"cp":{"cM":["1"],"E":["1"],"n":["1"]},"fT":{"cp":["1"],"cM":["1"],"E":["1"],"n":["1"]},"fv":{"cp":["1"],"jG":["1"],"cM":["1"],"E":["1"],"n":["1"]},"jk":{"W":["m","@"],"U":["m","@"],"W.K":"m","W.V":"@"},"jl":{"a2":["m"],"E":["m"],"n":["m"],"a2.E":"m","n.E":"m"},"ho":{"d6":["C<h>","m"]},"hK":{"d6":["m","C<h>"]},"f6":{"a6":[]},"i9":{"a6":[]},"i8":{"d6":["B?","m"]},"iU":{"d6":["m","C<h>"]},"d7":{"aA":["d7"]},"v":{"aK":[],"aA":["aK"]},"cE":{"aA":["cE"]},"h":{"aK":[],"aA":["aK"]},"C":{"E":["1"],"n":["1"]},"aK":{"aA":["aK"]},"cM":{"E":["1"],"n":["1"]},"m":{"aA":["m"],"r7":[]},"je":{"H":[]},"hk":{"a6":[]},"cr":{"a6":[]},"bQ":{"a6":[]},"ef":{"a6":[]},"hZ":{"a6":[]},"fw":{"a6":[]},"iP":{"a6":[]},"ek":{"a6":[]},"hy":{"a6":[]},"io":{"a6":[]},"fr":{"a6":[]},"jE":{"c5":[]},"aQ":{"vQ":[]},"h1":{"iS":[]},"jy":{"iS":[]},"ja":{"iS":[]},"jj":{"pF":[]},"ep":{"pF":[]},"dr":{"H":[]},"b6":{"co":[]},"bp":{"co":[]},"c1":{"co":[]},"ci":{"co":[]},"ip":{"co":[]},"df":{"H":[]},"hj":{"H":[]},"ct":{"H":[]},"e2":{"H":[]},"hq":{"H":[]},"hx":{"H":[]},"hG":{"H":[]},"dt":{"H":[]},"e6":{"H":[]},"bS":{"H":[]},"fn":{"H":[]},"ch":{"H":[]},"eg":{"H":[]},"fk":{"vI":[]},"dG":{"bo":[]},"js":{"vH":[]},"jg":{"v1":[]},"b7":{"aA":["b7"]},"b4":{"aA":["b4"]},"e7":{"H":[]},"fD":{"H":[]},"eN":{"a9":[]},"j7":{"a0":[]},"hr":{"a9":[]},"j8":{"a0":[]},"hE":{"a9":[]},"jb":{"a0":[]},"fF":{"H":[]},"eS":{"a9":[]},"jc":{"a0":[]},"hI":{"a9":[]},"jd":{"a0":[]},"hW":{"a9":[]},"ji":{"a0":[]},"hs":{"vG":[]},"fh":{"a9":[]},"jt":{"a0":[]},"iw":{"a9":[]},"ju":{"a0":[]},"iE":{"a9":[]},"jw":{"a0":[]},"iF":{"a9":[]},"jx":{"a0":[]},"iI":{"a9":[]},"jB":{"a0":[]},"iH":{"a9":[]},"jA":{"a0":[]},"iW":{"a9":[]},"jH":{"a0":[]},"j3":{"a9":[]},"jI":{"a0":[]},"hS":{"H":[]},"eY":{"H":[]},"hU":{"H":[]},"hV":{"H":[]},"dd":{"H":[]},"eZ":{"H":[]},"dv":{"H":[]},"cP":{"H":[]},"e0":{"H":[]},"hF":{"uL":[]},"et":{"H":[]},"aE":{"H":[]},"hp":{"H":[]},"d3":{"H":[]},"hB":{"H":[]},"hD":{"H":[]},"cY":{"cg":[]},"j2":{"v4":[]},"hn":{"H":[]},"bz":{"H":[]},"dc":{"H":[]},"d9":{"H":[]},"da":{"H":[]},"cF":{"H":[]},"eW":{"H":[]},"cG":{"H":[]},"fl":{"H":[]},"ds":{"H":[]},"ba":{"H":[]},"aX":{"H":[]},"i0":{"H":[]},"dC":{"H":[]},"bB":{"H":[]},"b5":{"H":[]},"bq":{"H":[]},"br":{"H":[]},"cR":{"H":[]},"c7":{"H":[]},"fR":{"pH":[]},"eo":{"pH":[]},"vb":{"C":["h"],"E":["h"],"n":["h"]},"fu":{"C":["h"],"E":["h"],"n":["h"]},"vV":{"C":["h"],"E":["h"],"n":["h"]},"v9":{"C":["h"],"E":["h"],"n":["h"]},"pL":{"C":["h"],"E":["h"],"n":["h"]},"va":{"C":["h"],"E":["h"],"n":["h"]},"vU":{"C":["h"],"E":["h"],"n":["h"]},"l7":{"C":["v"],"E":["v"],"n":["v"]},"v0":{"C":["v"],"E":["v"],"n":["v"]}}'))
A.wt(v.typeUniverse,JSON.parse('{"em":1,"h6":2,"aC":1,"fT":1,"h0":1,"hA":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",p:"MaterialDefinition uv scale must not be zero",n:"MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",i:"MaterialDefinition.emissiveStrength must be >= 0: 0",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.at
return{lC:s("eM"),B:s("bP"),v:s("az"),f5:s("hm"),gE:s("dU"),fS:s("dV"),d2:s("dW"),lJ:s("dX"),dP:s("b4"),kp:s("ht"),gS:s("d5"),bP:s("aA<@>"),gY:s("eP"),D:s("a4<m,m>"),I:s("a4<m,h>"),U:s("cf<m>"),ml:s("d7"),lD:s("b5"),jS:s("cE"),gt:s("E<@>"),no:s("bz"),L:s("bj"),V:s("a6"),hZ:s("aL"),pk:s("l7"),Z:s("db"),mj:s("bk<aj>"),_:s("cg"),bU:s("cG"),mm:s("bZ"),lv:s("hY<B>"),hL:s("ci"),ob:s("c_"),gB:s("cj"),dp:s("n<eP>"),bq:s("n<m>"),id:s("n<v>"),e7:s("n<@>"),fm:s("n<h>"),od:s("r<bP>"),ag:s("r<hJ>"),hS:s("r<cD>"),r:s("r<bj>"),oP:s("r<aL>"),iw:s("r<bk<~>>"),mc:s("r<hP>"),l2:s("r<cg>"),aW:s("r<bl>"),iG:s("r<f0>"),dL:s("r<e8>"),oX:s("r<z7<B>>"),og:s("r<dg>"),jj:s("r<ci>"),kG:s("r<Y>"),b1:s("r<ia>"),cs:s("r<aV>"),ic:s("r<U<m,B>>"),hq:s("r<U<m,m>>"),bV:s("r<U<m,@>>"),kS:s("r<ic>"),mn:s("r<dm>"),dg:s("r<b6>"),hJ:s("r<ak>"),x:s("r<b8>"),de:s("r<dp>"),bz:s("r<c2>"),dQ:s("r<is>"),aN:s("r<b9>"),bM:s("r<+(m,C<b9>)>"),fR:s("r<+(h,m)>"),a3:s("r<+(v,v,v,v)>"),o5:s("r<a9>"),u:s("r<a0>"),oZ:s("r<fk>"),C:s("r<P>"),c8:s("r<aW>"),bH:s("r<bo>"),kl:s("r<aD>"),e_:s("r<c4>"),b2:s("r<ei>"),ao:s("r<ar<b4>>"),mX:s("r<ar<b7>>"),jn:s("r<cN>"),s:s("r<m>"),aA:s("r<iL>"),k:s("r<z>"),h:s("r<b>"),cF:s("r<fy>"),bl:s("r<cv>"),ah:s("r<bC>"),E:s("r<aR>"),jX:s("r<cV>"),a9:s("r<cU>"),jU:s("r<jr>"),dz:s("r<cW<cJ>>"),jk:s("r<cW<bT>>"),n_:s("r<cW<aW>>"),mQ:s("r<cW<cw>>"),eP:s("r<eu>"),df:s("r<t>"),n:s("r<v>"),dG:s("r<@>"),t:s("r<h>"),kC:s("r<Y?>"),dM:s("r<B?>"),g2:s("r<aK>"),T:s("f3"),m:s("Y"),d4:s("Y()"),dY:s("ck"),dX:s("bm<@>"),bY:s("C<bj>"),b:s("C<bl>"),l_:s("C<U<m,m>>"),O:s("C<ak>"),b3:s("C<c2>"),fB:s("C<b9>"),jz:s("C<+(h,m)>"),ge:s("C<+(v,v,v,v)>"),io:s("C<c4>"),a:s("C<m>"),iD:s("C<fy>"),ee:s("C<cv>"),eU:s("C<bC>"),cu:s("C<fH>"),j:s("C<@>"),J:s("C<h>"),ia:s("C<B?>"),mK:s("f8"),q:s("O<m,m>"),d7:s("O<@,@>"),iI:s("O<h,@>"),f7:s("U<m,cg>"),iE:s("U<m,ak>"),G:s("U<m,m>"),oQ:s("U<m,t>"),P:s("U<m,@>"),f:s("U<@,@>"),d8:s("U<h,dy>"),c_:s("U<h,dz>"),gz:s("U<m,C<+(v,v,v,v)>>"),kz:s("U<br,C<bC>>"),iu:s("U<h,U<m,m>>"),mz:s("R<z,z>"),dD:s("R<m,m?>"),fP:s("c1"),l0:s("b6"),eb:s("ed"),mR:s("dn"),c:s("aj"),K:s("B"),nL:s("b7"),A:s("ak"),f0:s("c2"),Q:s("b9"),ku:s("fg"),lZ:s("z9"),aK:s("+()"),o7:s("+(b6,bT)"),p3:s("+(bp,cw)"),cW:s("+(v,v,v,v)"),ks:s("a0"),mo:s("c3<ci,aW>"),kk:s("c3<c1,cJ>"),ll:s("c3<b6,bT>"),ox:s("c3<bp,cw>"),n4:s("P"),p9:s("aW"),os:s("bo"),W:s("aD"),k8:s("c4"),R:s("cM<m>"),nO:s("cM<h>"),m9:s("aX"),gC:s("ba"),ad:s("ei"),d:s("ar<b4>"),p:s("ar<b7>"),l:s("c5"),fO:s("cN"),dB:s("aE"),N:s("m"),lu:s("bp"),aJ:s("a1"),do:s("cr"),cx:s("dx"),ph:s("cQ<m,m>"),mL:s("iR"),jJ:s("iS"),b9:s("z"),bf:s("b"),pc:s("z(z)"),g:s("bb"),nq:s("bq"),kM:s("br"),bR:s("dy"),ey:s("dz"),mv:s("cv"),kX:s("bC"),cq:s("bc"),bn:s("Q<b5>"),ns:s("Q<bz>"),hr:s("Q<aX>"),am:s("Q<ba>"),nn:s("Q<m>"),cB:s("Q<bq>"),na:s("Q<br>"),lS:s("bX<m>"),hE:s("aR"),fH:s("fH"),e:s("ai<@>"),mp:s("fK<B?,B?>"),j8:s("jo"),fg:s("cV"),at:s("cU"),ln:s("jp"),fw:s("jq"),bp:s("jz"),hX:s("jC"),fJ:s("c9<bo>"),jg:s("h3"),fL:s("h4"),y:s("t"),al:s("t()"),hg:s("t(b5)"),gl:s("t(bz)"),iW:s("t(B)"),aZ:s("t(aX)"),gw:s("t(ba)"),dA:s("t(m)"),bQ:s("t(bq)"),nw:s("t(br)"),i:s("v"),z:s("@"),mY:s("@()"),mq:s("@(B)"),ng:s("@(B,c5)"),S:s("h"),gK:s("bk<aj>?"),mU:s("Y?"),lH:s("C<@>?"),X:s("B?"),w:s("m?"),ej:s("m?(m)"),nh:s("fu?"),F:s("dD<@,@>?"),Y:s("jm?"),fU:s("t?"),hK:s("t(eh)?"),dC:s("v?"),aV:s("h?"),jh:s("aK?"),jE:s("~()?"),as:s("~(ba,aX)?"),ov:s("~(m)?"),bZ:s("~(h)?"),o:s("aK"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e2=J.i1.prototype
B.a=J.r.prototype
B.c=J.f2.prototype
B.d=J.dh.prototype
B.b=J.di.prototype
B.e3=J.ck.prototype
B.e4=J.f4.prototype
B.u=A.f9.prototype
B.by=A.fd.prototype
B.bz=J.iq.prototype
B.aJ=J.dx.prototype
B.hE=new A.hj(0,"opaque")
B.cj=new A.hn(4,"ambience")
B.ac=new A.hp(0,"add")
B.ck=new A.d3(0,"zero")
B.ad=new A.d3(1,"one")
B.S=new A.hq(0,"alpha")
B.aP=new A.eM()
B.ae=new A.kB()
B.hF=new A.kD()
B.cn=new A.ho()
B.aQ=new A.kH()
B.aR=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ct=function() {
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
B.cy=function(getTagFallback) {
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
B.cu=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cx=function(hooks) {
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
B.cw=function(hooks) {
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
B.cv=function(hooks) {
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
B.aS=function(hooks) { return hooks; }

B.p=new A.i8()
B.hG=new A.m5()
B.cz=new A.B()
B.cA=new A.io()
B.hH=new A.mt()
B.cB=new A.mu()
B.cC=new A.c4()
B.P=new A.bB(1,"gradeLUT")
B.cD=new A.c4()
B.cE=new A.mZ()
B.cF=new A.n0()
B.k=new A.n3()
B.F=new A.z(0,1,0)
B.a5=new A.z(0,-1,0)
B.bh=new A.dk(1,1,1)
B.cG=new A.ej()
B.aT=new A.iU()
B.h0=new A.ct(0,"position")
B.h6=new A.cu(B.h0,0,3)
B.h1=new A.ct(1,"normal")
B.h7=new A.cu(B.h1,3,3)
B.h2=new A.ct(2,"color")
B.h8=new A.cu(B.h2,6,4)
B.h3=new A.ct(4,"alpha")
B.h9=new A.cu(B.h3,10,1)
B.h4=new A.ct(5,"uv0")
B.ha=new A.cu(B.h4,11,2)
B.h5=new A.ct(6,"legacyMaterialEffect")
B.hb=new A.cu(B.h5,13,1)
B.ao=s([B.h6,B.h7,B.h8,B.h9,B.ha,B.hb],A.at("r<cu>"))
B.T=new A.ns()
B.aU=new A.jj()
B.r=new A.jv()
B.U=new A.jE()
B.aV=new A.e0(0,"colorOnly")
B.aW=new A.e0(1,"colorAndDepth")
B.af=new A.e0(2,"depthOnly")
B.ag=new A.hB(1,"back")
B.ah=new A.hD(0,"less")
B.V=new A.b5(0,"open")
B.aX=new A.b5(1,"chain")
B.aY=new A.b5(2,"throughDoor")
B.aZ=new A.b5(3,"letterbox")
B.K=new A.b5(4,"ignore")
B.L=new A.e2(0,"opaque")
B.cH=new A.e2(1,"masked")
B.ai=new A.e2(2,"blended")
B.cI=new A.eT(!0,B.ah,!1,!0,B.ad,B.ad,B.ac,!0,B.ag,!0,!1,!0,!0,!0,!0,!1)
B.cl=new A.d3(2,"srcAlpha")
B.cm=new A.d3(3,"oneMinusSrcAlpha")
B.cJ=new A.eT(!0,B.ah,!1,!0,B.cl,B.cm,B.ac,!0,B.ag,!0,!1,!0,!0,!0,!0,!1)
B.cK=new A.cE(0)
B.cL=new A.cE(24e5)
B.b_=new A.bz(0,"compliance")
B.cM=new A.e3(B.b_)
B.b0=new A.bz(1,"rupture")
B.cN=new A.e3(B.b0)
B.b1=new A.bz(2,"synchronisation")
B.cO=new A.e3(B.b1)
B.b2=new A.d9(0,"front")
B.cP=new A.d9(1,"rearService")
B.cQ=new A.d9(2,"sideBoundary")
B.cR=new A.d9(3,"roofline")
B.i=new A.cF(0,"north")
B.w=new A.cF(1,"east")
B.m=new A.cF(2,"south")
B.G=new A.cF(3,"west")
B.W=new A.eW(0,"ground")
B.X=new A.eW(1,"first")
B.cS=new A.da(0,"mantle")
B.cT=new A.da(1,"portal")
B.cV=new A.da(3,"none")
B.cW=new A.e5(B.cV,null)
B.cU=new A.da(2,"window")
B.cX=new A.e5(B.cU,"the shutter")
B.cY=new A.I("saved mantle history is malformed",null,null)
B.cZ=new A.I("rupture elapsed time is malformed",null,null)
B.d_=new A.I("presentation keys must be strings",null,null)
B.b3=new A.I("saved mantle state is malformed",null,null)
B.d0=new A.I("inactive rupture has elapsed time",null,null)
B.d1=new A.I("listener room is empty",null,null)
B.d2=new A.I("saved difficulty state is malformed",null,null)
B.d3=new A.I("saved house drift state is malformed",null,null)
B.d4=new A.I("saved sleep record is malformed",null,null)
B.d5=new A.I("saved day-loop sleepHistory must be a list",null,null)
B.d6=new A.I("audio event position is not finite",null,null)
B.d7=new A.I("event sequence must be non-negative",null,null)
B.d8=new A.I("modelScale must be positive and finite",null,null)
B.d9=new A.I("listener position is not finite",null,null)
B.da=new A.I("saved window state is malformed",null,null)
B.db=new A.I("save run and meta must be objects",null,null)
B.dc=new A.I("saved house state is malformed",null,null)
B.dd=new A.I("saved sleep record must be an object",null,null)
B.de=new A.I("sound cue must be a non-empty string",null,null)
B.df=new A.I("saved session run is malformed",null,null)
B.dg=new A.I("save map keys must be strings",null,null)
B.dh=new A.I("transform.scale must be positive",null,null)
B.di=new A.I("saved day-loop state is malformed",null,null)
B.dj=new A.I("rupture extinguished mantle is unknown",null,null)
B.b4=new A.I("saved portal state is malformed",null,null)
B.dk=new A.I("acoustic portal profile is not finite",null,null)
B.dl=new A.I("saved house state does not match this house",null,null)
B.dm=new A.I("presentation snapshot contains a non-finite number",null,null)
B.dn=new A.I("save contains a non-finite number",null,null)
B.dp=new A.I("text.json root must be an object",null,null)
B.dq=new A.I("event kind is empty",null,null)
B.dr=new A.I("saved session clock is malformed",null,null)
B.ds=new A.I("rupture mantle IDs are malformed",null,null)
B.dt=new A.I("saved sleep record has an unknown enum",null,null)
B.du=new A.I("audio cue variants are empty",null,null)
B.dv=new A.I("save root must be an object",null,null)
B.dw=new A.I("audio event identity is empty",null,null)
B.dx=new A.I("render capabilities contain invalid limits",null,null)
B.dy=new A.I("saved house overrides are malformed",null,null)
B.bg=new A.dk(0,0,0)
B.eu=s([],t.dQ)
B.hK=s([],A.at("r<ej>"))
B.dz=new A.hO(B.bg,0,1,B.bh,0,null,B.eu)
B.dA=new A.e6(0,"idle")
B.aj=new A.e6(1,"active")
B.dB=new A.e6(2,"ended")
B.b5=new A.e7(0,"outside")
B.dC=new A.e7(1,"intersects")
B.dD=new A.e7(2,"inside")
B.dE=new A.dc(0,"timeAdvanced")
B.dF=new A.dc(1,"dayEndReached")
B.dG=new A.dc(4,"slept")
B.dH=new A.dc(5,"complianceFloorTripped")
B.dI=new A.eY(0,"vertex")
B.b6=new A.eY(1,"indices")
B.b7=new A.hS(0,"staticDraw")
B.f=new A.eZ(0,"ready")
B.M=new A.eZ(1,"lost")
B.dJ=new A.dd(0,"color")
B.b8=new A.dd(1,"colorAndGlow")
B.dK=new A.dd(2,"colorDepthGlow")
B.ak=new A.dd(3,"depthOnly")
B.Y=new A.hU(1,"linear")
B.b9=new A.hV(0,"clampToEdge")
B.dL=new A.hT(1,1,1,!1,B.Y,B.Y,B.b9)
B.dM=new A.ch(0,"beforeShadow")
B.dN=new A.ch(2,"beforeDepth")
B.ba=new A.ch(3,"afterDepth")
B.bb=new A.ch(4,"beforeWorld")
B.y=new A.ch(6,"afterResolve")
B.dO=new A.ch(9,"beforePresent")
B.bc=new A.bS(0,"readBeforeWrite")
B.dP=new A.bS(1,"duplicateWriter")
B.dQ=new A.bS(2,"sampledMultisampledAttachment")
B.dR=new A.bS(4,"formatOrSizeMismatch")
B.dS=new A.bS(5,"unversionedReadWrite")
B.dT=new A.bS(6,"invalidHistoryRead")
B.dU=new A.bS(7,"dependencyCycle")
B.dV=new A.bS(8,"missingCapability")
B.Z=new A.cG(0,"player")
B.al=new A.cG(1,"inserted")
B.bd=new A.cG(2,"warden")
B.be=new A.df(0,"wrongKind")
B.bf=new A.df(1,"staleGeneration")
B.dW=new A.df(2,"doubleRelease")
B.am=new A.df(3,"releasedResource")
B.dZ=new A.e8("kitchen-range","settle")
B.e_=new A.e8("cellar-drain","drip")
B.e0=new A.e8("bathroom-cistern","settle")
B.e1=new A.i0(1,"visitor")
B.e5=new A.m2(null)
B.e6=new A.m3(null)
B.e7=new A.dk(0.03,0.03,0.04)
B.bi=s([0,2,2,3],t.t)
B.e8=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.co=new A.cD()
B.cp=new A.cD()
B.cq=new A.cD()
B.cr=new A.cD()
B.cs=new A.cD()
B.e9=s([B.co,B.cp,B.cq,B.cr,B.cs],t.hS)
B.ea=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.t=s(["who","verb","object","place","time"],t.s)
B.eb=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightRange","uLightInnerCos","uLightOuterCos","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity"],t.s)
B.ec=s([2,5,9,12,16,19],t.t)
B.ed=s(["uQuantizationBits","uDitherStrength"],t.s)
B.ee=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.ef=s([B.V,B.aX,B.aY,B.aZ,B.K],A.at("r<b5>"))
B.eg=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.R=new A.br(0,"full")
B.aL=new A.br(1,"compressed")
B.aM=new A.br(2,"off")
B.bj=s([B.R,B.aL,B.aM],A.at("r<br>"))
B.eh=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.ei=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.ej=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.ek=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fH=new A.ba(0,"long")
B.c7=new A.ba(1,"short")
B.bk=s([B.fH,B.c7],A.at("r<ba>"))
B.el=s([2.1,4.2,6.3],t.n)
B.em=s(["res/house/house.json","assets/house/house.json"],t.s)
B.x=new A.bB(0,"inactive")
B.aw=new A.bB(2,"affineWarp")
B.ax=new A.bB(3,"vertexSnap")
B.ay=new A.bB(4,"tapeGiveup")
B.az=new A.bB(5,"portalFail")
B.I=new A.bB(6,"lightsOut")
B.bl=s([B.x,B.P,B.aw,B.ax,B.ay,B.az,B.I],A.at("r<bB>"))
B.en=s([B.Z,B.al,B.bd],A.at("r<cG>"))
B.eo=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.z=s([],t.hS)
B.ew=s([],t.iG)
B.ev=s([],t.dL)
B.ep=s([],A.at("r<cj>"))
B.er=s([],t.cs)
B.an=s([],t.x)
B.et=s([],t.bz)
B.H=s([],t.aN)
B.es=s([],t.u)
B.bn=s([],t.e_)
B.eq=s([],t.b2)
B.l=s([],t.s)
B.bo=s([],t.cF)
B.bm=s([],t.E)
B.ex=s([],t.t)
B.ey=s([],t.dG)
B.dY=new A.f1(15,"kitchen",-0.3,0)
B.dX=new A.f1(19,"spare-room",0,0.3)
B.A=s([B.dY,B.dX],A.at("r<f1>"))
B.ez=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.fE=new A.aX(0,"bed")
B.fF=new A.aX(1,"chair")
B.fG=new A.aX(2,"floor")
B.bp=s([B.fE,B.fF,B.fG],A.at("r<aX>"))
B.bq=s([B.i,B.w,B.m,B.G],A.at("r<cF>"))
B.aA=new A.aE(0,"depthTest")
B.aB=new A.aE(1,"depthFunc")
B.aC=new A.aE(2,"depthWrite")
B.aD=new A.aE(3,"blendEnable")
B.aE=new A.aE(4,"blendFunc")
B.aF=new A.aE(5,"blendEquation")
B.aG=new A.aE(6,"cullEnable")
B.aH=new A.aE(7,"cullFace")
B.ca=new A.aE(8,"frontFace")
B.fI=new A.aE(9,"stencilEnable")
B.c8=new A.aE(10,"colorMask")
B.c9=new A.aE(11,"scissorEnable")
B.eA=s([B.aA,B.aB,B.aC,B.aD,B.aE,B.aF,B.aG,B.aH,B.ca,B.fI,B.c8,B.c9],A.at("r<aE>"))
B.eB=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.eC=s(["uBloomStrength"],t.s)
B.eD=s(["uLutSize","uStrength"],t.s)
B.eE=s([B.b_,B.b0,B.b1],A.at("r<bz>"))
B.eF=s(["wall-plaster","grime"],t.s)
B.eG=s(["uTexelSize","uNear","uFar"],t.s)
B.br=s(["uTexelStep"],t.s)
B.eH=s(["uninitialized"],t.s)
B.J=new A.bq(0,"waiting")
B.a6=new A.bq(1,"atDoor")
B.a7=new A.bq(2,"consulting")
B.a8=new A.bq(3,"resolved")
B.eI=s([B.J,B.a6,B.a7,B.a8],A.at("r<bq>"))
B.f7={uAlbedo:0}
B.bs=new A.a4(B.f7,[0],t.I)
B.eY={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.bt=new A.a4(B.eY,[2,3,4,5,6],t.I)
B.fg={uAlbedo:0,uShadowMap:1,uSsao:2}
B.eJ=new A.a4(B.fg,[0,1,2],t.I)
B.fe={uSsaoRaw:0,uSceneDepth:1}
B.eK=new A.a4(B.fe,[0,1],t.I)
B.fb={uScene:0,uHistory:1}
B.eL=new A.a4(B.fb,[0,1],t.I)
B.eZ={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.eM=new A.a4(B.eZ,["d004e52a550696538afaab098008c0e195ce13dc","7ad365ce3392e92c6abf07df55d114942afba2d5","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.D)
B.f4={aPosition:0,aUvMat:1}
B.bu=new A.a4(B.f4,[0,4],t.I)
B.fc={uScene:0,uLut:1}
B.eN=new A.a4(B.fc,[0,1],t.I)
B.fd={uSource:0}
B.bv=new A.a4(B.fd,[0],t.I)
B.f_={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"range-settle":16,"cellar-drip":17,"cistern-settle":18,"step-above-0":19,"step-above-1":20,"step-above-2":21,"step-above-3":22}
B.eO=new A.a4(B.f_,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","transient","transient","transient","sub","sub","sub","sub"],t.D)
B.f3={uSharp:0,uBlurred:1,uSceneDepth:2}
B.eP=new A.a4(B.f3,[0,1,2],t.I)
B.f8={uBloom:0}
B.eQ=new A.a4(B.f8,[0],t.I)
B.f9={uSceneDepth:0}
B.eR=new A.a4(B.f9,[0],t.I)
B.fa={uScene:0}
B.eS=new A.a4(B.fa,[0],t.I)
B.N={}
B.bx=new A.a4(B.N,[],A.at("a4<m,eM>"))
B.bw=new A.a4(B.N,[],t.D)
B.q=new A.a4(B.N,[],t.I)
B.eT=new A.a4(B.N,[],A.at("a4<@,@>"))
B.f5={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.eU=new A.a4(B.f5,[0,1,2,3],t.I)
B.f0={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.eV=new A.a4(B.f0,[0,1,2,3,4],t.I)
B.ff={uTex:0}
B.eW=new A.a4(B.ff,[0],t.I)
B.ap=new A.eX([B.P,1,B.aw,1.5,B.ax,1.5,B.ay,2,B.az,2,B.I,4],A.at("eX<bB,v>"))
B.fh=new A.ip(0,1,null)
B.fi=new A.it(1,0,0,0,8,0,0,0,0,0,0,!1)
B.aq=new A.dr(0,"safe")
B.ar=new A.dr(1,"standard")
B.as=new A.dr(2,"high")
B.C=new A.cf(B.N,0,t.U)
B.a_=new A.dq(B.aq,B.C)
B.f6={shadows:0}
B.fC=new A.cf(B.f6,1,t.U)
B.fk=new A.dq(B.ar,B.fC)
B.f1={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.fz=new A.cf(B.f1,5,t.U)
B.fl=new A.dq(B.as,B.fz)
B.fj=new A.dr(4,"shipping")
B.f2={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.fA=new A.cf(B.f2,7,t.U)
B.hL=new A.dq(B.fj,B.fA)
B.fn=new A.bu(0.54,0.5,0.44)
B.bA=new A.bu(0.72,0.52,0.37)
B.fo=new A.bu(0.78,0.7,0.54)
B.fp=new A.bu(0.86,0.78,0.66)
B.fq=new A.bu(0.82,0.8,0.73)
B.fr=new A.bu(0.6,0.55,0.48)
B.fs=new A.bu(0.68,0.62,0.57)
B.a0=new A.fl(0,"legacy")
B.a1=new A.fl(1,"next")
B.bB=new A.ds(0,"constructed")
B.v=new A.ds(1,"ready")
B.a2=new A.ds(2,"lost")
B.bC=new A.ds(3,"disposed")
B.hI=new A.hx(1,"srgb")
B.hJ=new A.hG(1,"errorsOnly")
B.ft=new A.iz(B.a_,384,216,0)
B.at=new A.dt(0,"constructed")
B.fu=new A.dt(1,"initializing")
B.au=new A.dt(2,"ready")
B.bD=new A.dt(3,"contextLost")
B.h=new A.eg(0,"read")
B.j=new A.eg(1,"write")
B.B=new A.eg(2,"historyRead")
B.n=new A.fn(0,"rgba8")
B.bF=new A.aP("dofBlurH",B.n,192,108,1,0)
B.bG=new A.aP("dofBlurV",B.n,192,108,1,0)
B.bH=new A.aP("dofOutput",B.n,384,216,1,0)
B.bL=new A.aP("gradeOutput",B.n,384,216,1,0)
B.av=new A.aP("vhsOutput",B.n,384,216,1,0)
B.bM=new A.aP("bloomBlurH",B.n,192,108,1,0)
B.bN=new A.aP("bloomBlurV",B.n,192,108,1,0)
B.O=new A.aP("sceneColor",B.n,384,216,1,0)
B.bO=new A.aP("ps1Output",B.n,384,216,1,0)
B.bK=new A.aP("ssaoBlurred",B.n,192,108,1,0)
B.bP=new A.P(B.bK,B.j)
B.bJ=new A.aP("ssaoRaw",B.n,192,108,1,0)
B.bQ=new A.P(B.bJ,B.j)
B.a3=new A.P(B.O,B.j)
B.bR=new A.P(B.av,B.j)
B.bS=new A.P(B.av,B.B)
B.bT=new A.P(B.bL,B.j)
B.bE=new A.fn(2,"depth24")
B.bI=new A.aP("shadowMap",B.bE,512,512,1,0)
B.bU=new A.P(B.bI,B.j)
B.bV=new A.P(B.bH,B.j)
B.bW=new A.P(B.bJ,B.h)
B.bX=new A.P(B.O,B.h)
B.fv=new A.aP("sceneDepth",B.bE,384,216,1,0)
B.bY=new A.P(B.fv,B.j)
B.bZ=new A.P(B.bI,B.h)
B.c_=new A.P(B.bO,B.j)
B.c0=new A.P(B.bG,B.h)
B.c1=new A.P(B.bK,B.h)
B.c2=new A.P(B.bN,B.h)
B.fw=new A.du(null,"save storage unavailable")
B.fx=new A.du(null,"save could not be recovered")
B.fy=new A.du(null,null)
B.eX={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.fB=new A.cf(B.eX,9,t.U)
B.c5=new A.dv(2,"link")
B.fD=new A.fq(B.c5,"gl.createProgram() returned null")
B.c3=new A.dv(0,"vertex")
B.c4=new A.dv(1,"fragment")
B.c6=new A.dv(3,"validation")
B.aK=new A.z(0,0,0)
B.fm=new A.ix(0,0,0,1)
B.Q=new A.iO(B.aK,B.fm)
B.fJ=A.bN("z2")
B.fK=A.bN("z3")
B.fL=A.bN("l7")
B.fM=A.bN("v0")
B.fN=A.bN("v9")
B.fO=A.bN("va")
B.fP=A.bN("vb")
B.fQ=A.bN("Y")
B.fR=A.bN("B")
B.fS=A.bN("pL")
B.fT=A.bN("vU")
B.fU=A.bN("vV")
B.fV=A.bN("fu")
B.e=new A.cP(0,"float1")
B.cb=new A.cP(1,"float2")
B.D=new A.cP(2,"float3")
B.o=new A.cP(3,"mat4")
B.aI=new A.cP(4,"sampler")
B.E=new A.F(B.aI,0)
B.a4=new A.F(B.aI,1)
B.cc=new A.F(B.aI,2)
B.fW=new A.nr(!1)
B.fX=new A.z(0,0,1)
B.fY=new A.z(1,0,0)
B.fZ=new A.z(1/0,1/0,1/0)
B.h_=new A.z(-1/0,-1/0,-1/0)
B.hc=new A.cR(0,"visitorAnswered")
B.cd=new A.cR(1,"visitorIgnored")
B.hd=new A.cR(2,"entryVerified")
B.he=new A.cR(3,"entryContradicted")
B.hf=new A.cR(4,"exposureAccepted")
B.hh=new A.c7(1,"malformedDay")
B.hi=new A.c7(2,"malformedTier")
B.ce=new A.c7(3,"missingTierLines")
B.aN=new A.c7(6,"invalidPhase")
B.ho=new A.bs(B.aN,"The active visit cannot be chosen.")
B.hr=new A.bc(B.ho)
B.hl=new A.bs(B.aN,"The active visit has no line to advance.")
B.hs=new A.bc(B.hl)
B.hk=new A.c7(5,"noActiveVisit")
B.hm=new A.bs(B.hk,"There is no active visit.")
B.cf=new A.bc(B.hm)
B.hn=new A.bs(B.aN,"A visit is already active.")
B.ht=new A.bc(B.hn)
B.hj=new A.c7(4,"noArrival")
B.hq=new A.bs(B.hj,"The authored arrival is missing.")
B.hu=new A.bc(B.hq)
B.hg=new A.c7(0,"missingCorpus")
B.hp=new A.bs(B.hg,"The authored visitor corpus is empty.")
B.hv=new A.bc(B.hp)
B.cg=new A.dC(1,"exact")
B.aO=new A.dC(2,"partial")
B.a9=new A.dC(3,"contradiction")
B.hw=new A.dC(0,"skipped")
B.hx=new A.dB(B.hw,B.C)
B.hy=new A.dB(B.aO,B.C)
B.hz=new A.fA(B.H,!1)
B.hA=new A.fA(B.H,!0)
B.ch=new A.fD(0,"horizontal")
B.hB=new A.fD(1,"vertical")
B.ci=new A.fF(0,"horizontal")
B.hC=new A.fF(1,"vertical")
B.aa=new A.et(0,"empty")
B.hD=new A.et(1,"cpuReady")
B.ab=new A.et(4,"released")})();(function staticFields(){$.nZ=null
$.by=A.f([],A.at("r<B>"))
$.r8=null
$.mz=0
$.mA=A.xF()
$.qI=null
$.qH=null
$.tH=null
$.tB=null
$.tM=null
$.oZ=null
$.p5=null
$.qw=null
$.o5=A.f([],A.at("r<C<B>?>"))
$.eD=null
$.ha=null
$.hb=null
$.qd=!1
$.aa=B.r
$.ro=""
$.rp=null
$.rk=null
$.mp=null
$.be=A.ae()
$.cx=A.ae()
$.bL=null
$.jP=null
$.D=A.ae()
$.bH=A.ae()
$.bw=A.ae()
$.rW=A.ae()
$.eE=null
$.X=A.ae()
$.on=null
$.dL=A.ae()
$.S=A.ae()
$.q1=A.ae()
$.q8=null
$.h8=null
$.q2=!1
$.qi=!1
$.td=null
$.q9=null
$.q3=null
$.t2=0
$.qf=!1
$.tc=!1
$.qe=0
$.tj=0
$.og=0
$.tA=!1
$.t3="booting"
$.bM=0
$.dM=0
$.aH="hall"
$.h7=A.ae()
$.ex=A.ae()
$.bf=A.ae()
$.ti=null
$.qj=0
$.bg=null
$.ey=A.ae()
$.jL=A.ae()
$.rX=A.ae()
$.rV=A.ae()
$.aF=A.ae()
$.jM=A.ae()
$.jK=A.ae()
$.q0=A.ae()
$.aG=A.ae()
$.jJ=A.ae()
$.q_=A.ae()
$.oQ=A.a5(t.S)
$.ca=A.f([],t.s)
$.q7=null
$.tv=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"z5","tV",()=>A.tG("_$dart_dartClosure"))
s($,"z4","eK",()=>A.tG("_$dart_dartClosure_dartJSInterop"))
s($,"zw","ue",()=>A.f([new J.i3()],A.at("r<fp>")))
s($,"zc","tX",()=>A.cs(A.nm({
toString:function(){return"$receiver$"}})))
s($,"zd","tY",()=>A.cs(A.nm({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ze","tZ",()=>A.cs(A.nm(null)))
s($,"zf","u_",()=>A.cs(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"zi","u2",()=>A.cs(A.nm(void 0)))
s($,"zj","u3",()=>A.cs(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"zh","u1",()=>A.cs(A.rl(null)))
s($,"zg","u0",()=>A.cs(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"zl","u5",()=>A.cs(A.rl(void 0)))
s($,"zk","u4",()=>A.cs(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"zm","qB",()=>A.wa())
s($,"zq","u9",()=>A.vq(4096))
s($,"zo","u7",()=>new A.oe().$0())
s($,"zp","u8",()=>new A.od().$0())
s($,"zn","u6",()=>new Int8Array(A.a3(A.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"zs","k0",()=>A.k_(B.fR))
s($,"za","qA",()=>{A.vE()
return $.mz})
s($,"z1","ps",()=>new A.aP("sceneColor",B.n,384,216,1,1))
s($,"z6","tW",()=>A.vr(A.f([255,255,255,255],t.t)))
s($,"zx","uf",()=>A.iV(0,1,0))
s($,"zA","k2",()=>{var q=$.rk
if(q==null){A.jX()
A.jX()
A.jX()
A.jX()
A.jX()
q=$.rk=new A.nf()}return q})
s($,"zr","ua",()=>new A.kC())
s($,"zt","ub",()=>new A.lt())
s($,"zu","uc",()=>new A.lC())
r($,"qo","eL",()=>A.iV(0,0,0))
r($,"qh","ud",()=>A.iV(0,0,0))
r($,"qr","hf",()=>A.iV(0,0,0))
s($,"zv","k1",()=>new A.l8(A.iV(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cK,ArrayBuffer:A.ed,ArrayBufferView:A.fc,DataView:A.ig,Float32Array:A.f9,Float64Array:A.ih,Int16Array:A.ii,Int32Array:A.ij,Int8Array:A.ik,Uint16Array:A.il,Uint32Array:A.im,Uint8ClampedArray:A.dn,CanvasPixelArray:A.dn,Uint8Array:A.fd})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aC.$nativeSuperclassTag="ArrayBufferView"
A.fN.$nativeSuperclassTag="ArrayBufferView"
A.fO.$nativeSuperclassTag="ArrayBufferView"
A.fa.$nativeSuperclassTag="ArrayBufferView"
A.fP.$nativeSuperclassTag="ArrayBufferView"
A.fQ.$nativeSuperclassTag="ArrayBufferView"
A.fb.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.p6
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()