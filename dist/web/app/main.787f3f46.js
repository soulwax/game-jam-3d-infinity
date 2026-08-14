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
if(a[b]!==s){A.Gi(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.c(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.x1(b)
return new s(c,this)}:function(){if(s===null)s=A.x1(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.x1(a).prototype
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
x7(a,b,c,d){return{i:a,p:b,e:c,x:d}},
x3(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.x5==null){A.FY()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.yl("Return interceptor for "+A.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tf
if(o==null)o=$.tf=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.G3(a)
if(p!=null)return p
if(typeof a=="function")return B.i5
s=Object.getPrototypeOf(a)
if(s==null)return B.dn
if(s===Object.prototype)return B.dn
if(typeof q=="function"){o=$.tf
if(o==null)o=$.tf=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bM,enumerable:false,writable:true,configurable:true})
return B.bM}return B.bM},
xP(a,b){if(a<0||a>4294967295)throw A.b(A.aZ(a,0,4294967295,"length",null))
return J.xR(new Array(a),b)},
xQ(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("q<0>"))},
xO(a,b){if(a<0)throw A.b(A.w("Length must be a non-negative integer: "+a,null))
return A.c(new Array(a),b.i("q<0>"))},
xR(a,b){var s=A.c(a,b.i("q<0>"))
s.$flags=1
return s},
BS(a,b){var s=t.hO
return J.xo(s.a(a),s.a(b))},
xT(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
BT(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xT(r))break;++b}return b},
BU(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.xT(q))break}return b},
eo(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hE.prototype
return J.k4.prototype}if(typeof a=="string")return J.dZ.prototype
if(a==null)return J.hF.prototype
if(typeof a=="boolean")return J.k3.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e_.prototype
if(typeof a=="symbol")return J.hJ.prototype
if(typeof a=="bigint")return J.hH.prototype
return a}if(a instanceof A.N)return a
return J.x3(a)},
aF(a){if(typeof a=="string")return J.dZ.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e_.prototype
if(typeof a=="symbol")return J.hJ.prototype
if(typeof a=="bigint")return J.hH.prototype
return a}if(a instanceof A.N)return a
return J.x3(a)},
c9(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.e_.prototype
if(typeof a=="symbol")return J.hJ.prototype
if(typeof a=="bigint")return J.hH.prototype
return a}if(a instanceof A.N)return a
return J.x3(a)},
zX(a){if(typeof a=="number")return J.fz.prototype
if(typeof a=="string")return J.dZ.prototype
if(a==null)return a
if(!(a instanceof A.N))return J.eS.prototype
return a},
zY(a){if(typeof a=="string")return J.dZ.prototype
if(a==null)return a
if(!(a instanceof A.N))return J.eS.prototype
return a},
xm(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.zX(a).ai(a,b)},
ad(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eo(a).a4(a,b)},
aU(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.G2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aF(a).h(a,b)},
bs(a,b,c){return J.c9(a).k(a,b,c)},
hi(a,b){return J.c9(a).l(a,b)},
AJ(a,b){return J.zY(a).fs(a,b)},
xn(a,b){return J.c9(a).N(a,b)},
AK(a,b){return J.c9(a).cG(a,b)},
xo(a,b){return J.zX(a).G(a,b)},
xp(a,b){return J.aF(a).q(a,b)},
mk(a,b){return J.c9(a).a0(a,b)},
AL(a,b){return J.c9(a).a7(a,b)},
xq(a){return J.c9(a).gU(a)},
aA(a){return J.eo(a).gM(a)},
ml(a){return J.aF(a).gO(a)},
AM(a){return J.aF(a).gV(a)},
R(a){return J.c9(a).gu(a)},
cL(a){return J.aF(a).gt(a)},
ff(a){return J.eo(a).ga3(a)},
xr(a,b){return J.c9(a).W(a,b)},
xs(a,b,c){return J.c9(a).cc(a,b,c)},
AN(a,b){return J.aF(a).st(a,b)},
AO(a,b){return J.c9(a).P(a,b)},
AP(a,b){return J.zY(a).b0(a,b)},
de(a){return J.eo(a).p(a)},
AQ(a,b){return J.c9(a).e_(a,b)},
k1:function k1(){},
k3:function k3(){},
hF:function hF(){},
hI:function hI(){},
e0:function e0(){},
kp:function kp(){},
eS:function eS(){},
e_:function e_(){},
hH:function hH(){},
hJ:function hJ(){},
q:function q(a){this.$ti=a},
k2:function k2(){},
p_:function p_(a){this.$ti=a},
er:function er(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fz:function fz(){},
hE:function hE(){},
k4:function k4(){},
dZ:function dZ(){}},A={vZ:function vZ(){},
v1(){return $},
B1(a,b,c){if(t.he.b(a))return new A.is(a,b.i("@<0>").K(c).i("is<1,2>"))
return new A.eu(a,b.i("@<0>").K(c).i("eu<1,2>"))},
xX(a){return new A.fA("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.fA("Field '"+a+"' has not been initialized.")},
BW(a){return new A.fA("Field '"+a+"' has already been initialized.")},
v6(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ie(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fb(a,b,c){return a},
x6(a){var s,r
for(s=$.c8.length,r=0;r<s;++r)if(a===$.c8[r])return!0
return!1},
kO(a,b,c,d){A.kz(b,"start")
if(c!=null){A.kz(c,"end")
if(b>c)A.i(A.aZ(b,0,c,"start",null))}return new A.id(a,b,c,d.i("id<0>"))},
kb(a,b,c,d){if(t.he.b(a))return new A.di(a,b,c.i("@<0>").K(d).i("di<1,2>"))
return new A.cA(a,b,c.i("@<0>").K(d).i("cA<1,2>"))},
cy(){return new A.fP("No element")},
xN(){return new A.fP("Too many elements")},
kJ(a,b,c,d,e){if(c-b<=32)A.Cy(a,b,c,d,e)
else A.Cx(a,b,c,d,e)},
Cy(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aF(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aL()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
Cx(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.a2(a4+a5,2),f=g-j,e=g+j,d=J.aF(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
A.kJ(a3,a4,r-2,a6,a7)
A.kJ(a3,q+2,a5,a6,a7)
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
break}}A.kJ(a3,r,q,a6,a7)}else A.kJ(a3,r,q,a6,a7)},
ec:function ec(){},
hm:function hm(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b){this.a=a
this.$ti=b},
is:function is(a,b){this.a=a
this.$ti=b},
iq:function iq(){},
rZ:function rZ(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.$ti=b},
fA:function fA(a){this.a=a},
dS:function dS(a){this.a=a},
qv:function qv(){},
Q:function Q(){},
a4:function a4(){},
id:function id(a,b,c,d){var _=this
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
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
di:function di(a,b,c){this.a=a
this.b=b
this.$ti=c},
hO:function hO(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.$ti=c},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hu:function hu(a){this.$ti=a},
dD:function dD(a,b){this.a=a
this.$ti=b},
il:function il(a,b){this.a=a
this.$ti=b},
aw:function aw(){},
d3:function d3(){},
fR:function fR(){},
eN:function eN(a,b){this.a=a
this.$ti=b},
iU:function iU(){},
aY(a,b,c){var s,r,q,p,o,n,m,l=A.ap(a.ga1(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.ap(a.gaE(),!0,c)
m=new A.a3(q,n,b.i("@<0>").K(c).i("a3<1,2>"))
m.$keys=l
return m}return new A.hp(A.aM(a,b,c),b.i("@<0>").K(c).i("hp<1,2>"))},
B7(){throw A.b(A.b9("Cannot modify unmodifiable Map"))},
B8(){throw A.b(A.b9("Cannot modify constant Set"))},
Af(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
G2(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.de(a)
return s},
i0(a){var s,r=$.y5
if(r==null)r=$.y5=Symbol("identityHashCode")
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
eI(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bh(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kv(a){var s,r,q,p
if(a instanceof A.N)return A.bH(A.bT(a),null)
s=J.eo(a)
if(s===B.i4||s===B.i6||t.qF.b(a)){r=B.c5(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bH(A.bT(a),null)},
y6(a){var s,r,q
if(a==null||typeof a=="number"||A.br(a))return J.de(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dR)return a.p(0)
if(a instanceof A.bc)return a.fi(!0)
s=$.AE()
for(r=0;r<1;++r){q=s[r].mP(a)
if(q!=null)return q}return"Instance of '"+A.kv(a)+"'"},
C9(){return Date.now()},
Ci(){var s,r
if($.q4!==0)return
$.q4=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.q4=1e6
$.q5=new A.q3(r)},
C8(){if(!!self.location)return self.location.href
return null},
Cj(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ay(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.dn(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aZ(a,0,1114111,null,null))},
fI(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Ch(a){var s=A.fI(a).getUTCFullYear()+0
return s},
Cf(a){var s=A.fI(a).getUTCMonth()+1
return s},
Cb(a){var s=A.fI(a).getUTCDate()+0
return s},
Cc(a){var s=A.fI(a).getUTCHours()+0
return s},
Ce(a){var s=A.fI(a).getUTCMinutes()+0
return s},
Cg(a){var s=A.fI(a).getUTCSeconds()+0
return s},
Cd(a){var s=A.fI(a).getUTCMilliseconds()+0
return s},
Ca(a){var s=a.$thrownJsError
if(s==null)return null
return A.cJ(s)},
y7(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aD(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
v7(a){throw A.b(A.x0(a))},
d(a,b){if(a==null)J.cL(a)
throw A.b(A.v3(a,b))},
v3(a,b){var s,r="index"
if(!A.aJ(b))return new A.ct(!0,b,r,null)
s=A.e(J.cL(a))
if(b<0||b>=s)return A.oQ(b,s,a,r)
return A.y9(b,r)},
FQ(a,b,c){if(a>c)return A.aZ(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aZ(b,a,c,"end",null)
return new A.ct(!0,b,"end",null)},
x0(a){return new A.ct(!0,a,null,null)},
b(a){return A.aD(a,new Error())},
aD(a,b){var s
if(a==null)a=new A.dA()
b.dartException=a
s=A.Gl
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Gl(){return J.de(this.dartException)},
i(a,b){throw A.aD(a,b==null?new Error():b)},
bU(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.i(A.E7(a,b,c),s)},
E7(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ih("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.b(A.av(a))},
dB(a){var s,r,q,p,o,n
a=A.Aa(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rt(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ru(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yk(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
w_(a,b){var s=b==null,r=s?null:b.method
return new A.k5(a,r,s?null:b.receiver)},
ao(a){var s
if(a==null)return new A.pI(a)
if(a instanceof A.hv){s=a.a
return A.ep(a,s==null?A.f7(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ep(a,a.dartException)
return A.Fo(a)},
ep(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Fo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.dn(r,16)&8191)===10)switch(q){case 438:return A.ep(a,A.w_(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.ep(a,new A.hV())}}if(a instanceof TypeError){p=$.Ai()
o=$.Aj()
n=$.Ak()
m=$.Al()
l=$.Ao()
k=$.Ap()
j=$.An()
$.Am()
i=$.Ar()
h=$.Aq()
g=p.aY(s)
if(g!=null)return A.ep(a,A.w_(A.r(s),g))
else{g=o.aY(s)
if(g!=null){g.method="call"
return A.ep(a,A.w_(A.r(s),g))}else if(n.aY(s)!=null||m.aY(s)!=null||l.aY(s)!=null||k.aY(s)!=null||j.aY(s)!=null||m.aY(s)!=null||i.aY(s)!=null||h.aY(s)!=null){A.r(s)
return A.ep(a,new A.hV())}}return A.ep(a,new A.kU(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ia()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ep(a,new A.ct(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ia()
return a},
cJ(a){var s
if(a instanceof A.hv)return a.b
if(a==null)return new A.iI(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iI(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mi(a){if(a==null)return J.aA(a)
if(typeof a=="object")return A.i0(a)
return J.aA(a)},
FK(a){if(typeof a=="number")return B.c.gM(a)
if(a instanceof A.lS)return A.i0(a)
if(a instanceof A.bc)return a.gM(a)
return A.mi(a)},
zV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
FV(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Ex(a,b,c,d,e,f){t.BO.a(a)
switch(A.e(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.t0("Unsupported number of arguments for wrapped closure"))},
hb(a,b){var s=a.$identity
if(!!s)return s
s=A.FL(a,b)
a.$identity=s
return s},
FL(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Ex)},
B6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kN().constructor.prototype):Object.create(new A.fg(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xy(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.B2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xy(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
B2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.AY)}throw A.b("Error in functionType of tearoff")},
B3(a,b,c,d){var s=A.xx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xy(a,b,c,d){if(c)return A.B5(a,b,d)
return A.B3(b.length,d,a,b)},
B4(a,b,c,d){var s=A.xx,r=A.AZ
switch(b?-1:a){case 0:throw A.b(new A.kE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
B5(a,b,c){var s,r
if($.xv==null)$.xv=A.xu("interceptor")
if($.xw==null)$.xw=A.xu("receiver")
s=b.length
r=A.B4(s,c,a,b)
return r},
x1(a){return A.B6(a)},
AY(a,b){return A.iM(v.typeUniverse,A.bT(a.a),b)},
xx(a){return a.a},
AZ(a){return a.b},
xu(a){var s,r,q,p=new A.fg("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.w("Field name "+a+" not found.",null))},
zZ(a){return v.getIsolateTag(a)},
Ae(){return v.G},
Hd(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
G3(a){var s,r,q,p,o,n=A.r($.A0.$1(a)),m=$.v4[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vb[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.at($.zR.$2(a,n))
if(q!=null){m=$.v4[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vb[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vG(s)
$.v4[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vb[n]=s
return s}if(p==="-"){o=A.vG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.A8(a,s)
if(p==="*")throw A.b(A.yl(n))
if(v.leafTags[n]===true){o=A.vG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.A8(a,s)},
A8(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.x7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vG(a){return J.x7(a,!1,null,!!a.$ibX)},
G5(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vG(s)
else return J.x7(s,c,null,null)},
FY(){if(!0===$.x5)return
$.x5=!0
A.FZ()},
FZ(){var s,r,q,p,o,n,m,l
$.v4=Object.create(null)
$.vb=Object.create(null)
A.FX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.A9.$1(o)
if(n!=null){m=A.G5(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
FX(){var s,r,q,p,o,n,m=B.eq()
m=A.ha(B.er,A.ha(B.es,A.ha(B.c6,A.ha(B.c6,A.ha(B.et,A.ha(B.eu,A.ha(B.ev(B.c5),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.A0=new A.v8(p)
$.zR=new A.v9(o)
$.A9=new A.va(n)},
ha(a,b){return a(b)||b},
Df(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.ad(r,b[s]))return!1}return!0},
FN(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xU(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a2("Illegal RegExp pattern ("+String(o)+")",a,null))},
Gg(a,b,c){var s=a.indexOf(b,c)
return s>=0},
FT(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Aa(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
x9(a,b,c){var s=A.Gh(a,b,c)
return s},
Gh(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Aa(b),"g"),A.FT(c))},
aQ:function aQ(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a){this.a=a},
cl:function cl(a){this.a=a},
hp:function hp(a,b){this.a=a
this.$ti=b},
fn:function fn(){},
nf:function nf(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b){this.a=a
this.$ti=b},
f0:function f0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cR:function cR(a,b){this.a=a
this.$ti=b},
hq:function hq(){},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
q3:function q3(a){this.a=a},
i6:function i6(){},
rt:function rt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hV:function hV(){},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function kU(a){this.a=a},
pI:function pI(a){this.a=a},
hv:function hv(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a
this.b=null},
dR:function dR(){},
jr:function jr(){},
js:function js(){},
kQ:function kQ(){},
kN:function kN(){},
fg:function fg(a,b){this.a=a
this.b=b},
kE:function kE(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
p8:function p8(a){this.a=a},
pk:function pk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d){var _=this
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
F:function F(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hK:function hK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
v8:function v8(a){this.a=a},
v9:function v9(a){this.a=a},
va:function va(a){this.a=a},
bc:function bc(){},
eg:function eg(){},
eh:function eh(){},
f3:function f3(){},
hG:function hG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lx:function lx(a){this.b=a},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ic:function ic(a,b){this.a=a
this.c=b},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Gi(a){throw A.aD(A.xX(a),new Error())},
p(){throw A.aD(A.a9(""),new Error())},
aX(){throw A.aD(A.BW(""),new Error())},
xa(){throw A.aD(A.xX(""),new Error())},
ab(){var s=new A.t_()
return s.b=s},
t_:function t_(){this.b=null},
a1(a){return a},
C3(a){return new Int8Array(a)},
C4(a){return new Uint8Array(a)},
kl(a){return new Uint8Array(A.a1(a))},
dI(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.v3(b,a))},
DV(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.FQ(a,b,c))
return b},
fG:function fG(){},
fF:function fF(){},
hT:function hT(){},
ke:function ke(){},
b5:function b5(){},
hR:function hR(){},
hS:function hS(){},
hQ:function hQ(){},
kf:function kf(){},
kg:function kg(){},
kh:function kh(){},
ki:function ki(){},
kj:function kj(){},
kk:function kk(){},
eG:function eG(){},
hU:function hU(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
wa(a,b){var s=b.c
return s==null?b.c=A.iK(a,"bW",[b.x]):s},
yd(a){var s=a.w
if(s===6||s===7)return A.yd(a.x)
return s===11||s===12},
Cs(a){return a.as},
A7(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
Y(a){return A.tC(v.typeUniverse,a,!1)},
fa(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.fa(a1,s,a3,a4)
if(r===s)return a2
return A.yL(a1,r,!0)
case 7:s=a2.x
r=A.fa(a1,s,a3,a4)
if(r===s)return a2
return A.yK(a1,r,!0)
case 8:q=a2.y
p=A.h9(a1,q,a3,a4)
if(p===q)return a2
return A.iK(a1,a2.x,p)
case 9:o=a2.x
n=A.fa(a1,o,a3,a4)
m=a2.y
l=A.h9(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wl(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.h9(a1,j,a3,a4)
if(i===j)return a2
return A.yM(a1,k,i)
case 11:h=a2.x
g=A.fa(a1,h,a3,a4)
f=a2.y
e=A.Fj(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yJ(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.h9(a1,d,a3,a4)
o=a2.x
n=A.fa(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wm(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.ji("Attempted to substitute unexpected RTI kind "+a0))}},
h9(a,b,c,d){var s,r,q,p,o=b.length,n=A.tG(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.fa(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Fk(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tG(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.fa(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Fj(a,b,c,d){var s,r=b.a,q=A.h9(a,r,c,d),p=b.b,o=A.h9(a,p,c,d),n=b.c,m=A.Fk(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lq()
s.a=q
s.b=o
s.c=m
return s},
c(a,b){a[v.arrayRti]=b
return a},
x2(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.FW(s)
return a.$S()}return null},
G_(a,b){var s
if(A.yd(b))if(a instanceof A.dR){s=A.x2(a)
if(s!=null)return s}return A.bT(a)},
bT(a){if(a instanceof A.N)return A.o(a)
if(Array.isArray(a))return A.C(a)
return A.wE(J.eo(a))},
C(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.wE(a)},
wE(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Eu(a,s)},
Eu(a,b){var s=a instanceof A.dR?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Dp(v.typeUniverse,s.name)
b.$ccache=r
return r},
FW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tC(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
x4(a){return A.dc(A.o(a))},
wX(a){var s
if(a instanceof A.bc)return a.eP()
s=a instanceof A.dR?A.x2(a):null
if(s!=null)return s
if(t.sg.b(a))return J.ff(a).a
if(Array.isArray(a))return A.C(a)
return A.bT(a)},
dc(a){var s=a.r
return s==null?a.r=new A.lS(a):s},
FU(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.d(q,0)
s=A.iM(v.typeUniverse,A.wX(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.yN(v.typeUniverse,s,A.wX(q[r]))}return A.iM(v.typeUniverse,s,a)},
cq(a){return A.dc(A.tC(v.typeUniverse,a,!1))},
Et(a){var s=this
s.b=A.Fe(s)
return s.b(a)},
Fe(a){var s,r,q,p,o
if(a===t.K)return A.ED
if(A.fc(a))return A.EI
s=a.w
if(s===6)return A.El
if(s===1)return A.zq
if(s===7)return A.Ey
r=A.Fd(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fc)){a.f="$i"+q
if(q==="D")return A.EB
if(a===t.m)return A.EA
return A.EH}}else if(s===10){p=A.FN(a.x,a.y)
o=p==null?A.zq:p
return o==null?A.f7(o):o}return A.Ej},
Fd(a){if(a.w===8){if(a===t.S)return A.aJ
if(a===t.i||a===t.o)return A.EC
if(a===t.N)return A.EG
if(a===t.y)return A.br}return null},
Es(a){var s=this,r=A.Ei
if(A.fc(s))r=A.DP
else if(s===t.K)r=A.f7
else if(A.hd(s)){r=A.Ek
if(s===t.lo)r=A.z7
else if(s===t.dR)r=A.at
else if(s===t.k7)r=A.DO
else if(s===t.s7)r=A.ws
else if(s===t.u6)r=A.z6
else if(s===t.gt)r=A.E}else if(s===t.S)r=A.e
else if(s===t.N)r=A.r
else if(s===t.y)r=A.P
else if(s===t.o)r=A.a6
else if(s===t.i)r=A.bp
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
Ej(a){var s=this
if(a==null)return A.hd(s)
return A.A3(v.typeUniverse,A.G_(a,s),s)},
El(a){if(a==null)return!0
return this.x.b(a)},
EH(a){var s,r=this
if(a==null)return A.hd(r)
s=r.f
if(a instanceof A.N)return!!a[s]
return!!J.eo(a)[s]},
EB(a){var s,r=this
if(a==null)return A.hd(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.N)return!!a[s]
return!!J.eo(a)[s]},
EA(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.N)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zp(a){if(typeof a=="object"){if(a instanceof A.N)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ei(a){var s=this
if(a==null){if(A.hd(s))return a}else if(s.b(a))return a
throw A.aD(A.zc(a,s),new Error())},
Ek(a){var s=this
if(a==null||s.b(a))return a
throw A.aD(A.zc(a,s),new Error())},
zc(a,b){return new A.fZ("TypeError: "+A.yB(a,A.bH(b,null)))},
zT(a,b,c,d){if(A.A3(v.typeUniverse,a,b))return a
throw A.aD(A.Dh("The type argument '"+A.bH(a,null)+"' is not a subtype of the type variable bound '"+A.bH(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yB(a,b){return A.jH(a)+": type '"+A.bH(A.wX(a),null)+"' is not a subtype of type '"+b+"'"},
Dh(a){return new A.fZ("TypeError: "+a)},
cm(a,b){return new A.fZ("TypeError: "+A.yB(a,b))},
Ey(a){var s=this
return s.x.b(a)||A.wa(v.typeUniverse,s).b(a)},
ED(a){return a!=null},
f7(a){if(a!=null)return a
throw A.aD(A.cm(a,"Object"),new Error())},
EI(a){return!0},
DP(a){return a},
zq(a){return!1},
br(a){return!0===a||!1===a},
P(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aD(A.cm(a,"bool"),new Error())},
DO(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aD(A.cm(a,"bool?"),new Error())},
bp(a){if(typeof a=="number")return a
throw A.aD(A.cm(a,"double"),new Error())},
z6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cm(a,"double?"),new Error())},
aJ(a){return typeof a=="number"&&Math.floor(a)===a},
e(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aD(A.cm(a,"int"),new Error())},
z7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aD(A.cm(a,"int?"),new Error())},
EC(a){return typeof a=="number"},
a6(a){if(typeof a=="number")return a
throw A.aD(A.cm(a,"num"),new Error())},
ws(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aD(A.cm(a,"num?"),new Error())},
EG(a){return typeof a=="string"},
r(a){if(typeof a=="string")return a
throw A.aD(A.cm(a,"String"),new Error())},
at(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aD(A.cm(a,"String?"),new Error())},
a(a){if(A.zp(a))return a
throw A.aD(A.cm(a,"JSObject"),new Error())},
E(a){if(a==null)return a
if(A.zp(a))return a
throw A.aD(A.cm(a,"JSObject?"),new Error())},
zH(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bH(a[q],b)
return s},
F2(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zH(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bH(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zg(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bH(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bH(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bH(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bH(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bH(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bH(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bH(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bH(a.x,b)+">"
if(l===8){p=A.Fn(a.x)
o=a.y
return o.length>0?p+("<"+A.zH(o,b)+">"):p}if(l===10)return A.F2(a,b)
if(l===11)return A.zg(a,b,null)
if(l===12)return A.zg(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
Fn(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Dq(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Dp(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tC(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iL(a,5,"#")
q=A.tG(s)
for(p=0;p<s;++p)q[p]=r
o=A.iK(a,b,q)
n[b]=o
return o}else return m},
Do(a,b){return A.yV(a.tR,b)},
Dn(a,b){return A.yV(a.eT,b)},
tC(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yG(A.yE(a,null,b,!1))
r.set(b,s)
return s},
iM(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yG(A.yE(a,b,c,!0))
q.set(c,r)
return r},
yN(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wl(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ej(a,b){b.a=A.Es
b.b=A.Et
return b},
iL(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cF(null,null)
s.w=b
s.as=c
r=A.ej(a,s)
a.eC.set(c,r)
return r},
yL(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Dl(a,b,r,c)
a.eC.set(r,s)
return s},
Dl(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fc(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hd(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cF(null,null)
q.w=6
q.x=b
q.as=c
return A.ej(a,q)},
yK(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Dj(a,b,r,c)
a.eC.set(r,s)
return s},
Dj(a,b,c,d){var s,r
if(d){s=b.w
if(A.fc(b)||b===t.K)return b
else if(s===1)return A.iK(a,"bW",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cF(null,null)
r.w=7
r.x=b
r.as=c
return A.ej(a,r)},
Dm(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cF(null,null)
s.w=13
s.x=b
s.as=q
r=A.ej(a,s)
a.eC.set(q,r)
return r},
iJ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Di(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iK(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iJ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cF(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ej(a,r)
a.eC.set(p,q)
return q},
wl(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iJ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cF(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ej(a,o)
a.eC.set(q,n)
return n},
yM(a,b,c){var s,r,q="+"+(b+"("+A.iJ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cF(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ej(a,s)
a.eC.set(q,r)
return r},
yJ(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iJ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iJ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Di(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cF(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ej(a,p)
a.eC.set(r,o)
return o},
wm(a,b,c,d){var s,r=b.as+("<"+A.iJ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Dk(a,b,c,r,d)
a.eC.set(r,s)
return s},
Dk(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tG(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.fa(a,b,r,0)
m=A.h9(a,c,r,0)
return A.wm(a,n,m,c!==m)}}l=new A.cF(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ej(a,l)},
yE(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yG(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Da(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yF(a,r,l,k,!1)
else if(q===46)r=A.yF(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f2(a.u,a.e,k.pop()))
break
case 94:k.push(A.Dm(a.u,k.pop()))
break
case 35:k.push(A.iL(a.u,5,"#"))
break
case 64:k.push(A.iL(a.u,2,"@"))
break
case 126:k.push(A.iL(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Dc(a,k)
break
case 38:A.Db(a,k)
break
case 63:p=a.u
k.push(A.yL(p,A.f2(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yK(p,A.f2(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.D9(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yH(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.De(a.u,a.e,o)
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
return A.f2(a.u,a.e,m)},
Da(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yF(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Dq(s,o.x)[p]
if(n==null)A.i('No "'+p+'" in "'+A.Cs(o)+'"')
d.push(A.iM(s,o,n))}else d.push(p)
return m},
Dc(a,b){var s,r=a.u,q=A.yD(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iK(r,p,q))
else{s=A.f2(r,a.e,p)
switch(s.w){case 11:b.push(A.wm(r,s,q,a.n))
break
default:b.push(A.wl(r,s,q))
break}}},
D9(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yD(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f2(p,a.e,o)
q=new A.lq()
q.a=s
q.b=n
q.c=m
b.push(A.yJ(p,r,q))
return
case-4:b.push(A.yM(p,b.pop(),s))
return
default:throw A.b(A.ji("Unexpected state under `()`: "+A.y(o)))}},
Db(a,b){var s=b.pop()
if(0===s){b.push(A.iL(a.u,1,"0&"))
return}if(1===s){b.push(A.iL(a.u,4,"1&"))
return}throw A.b(A.ji("Unexpected extended operation "+A.y(s)))},
yD(a,b){var s=b.splice(a.p)
A.yH(a.u,a.e,s)
a.p=b.pop()
return s},
f2(a,b,c){if(typeof c=="string")return A.iK(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Dd(a,b,c)}else return c},
yH(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f2(a,b,c[s])},
De(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f2(a,b,c[s])},
Dd(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.ji("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.ji("Bad index "+c+" for "+b.p(0)))},
A3(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aR(a,b,null,c,null)
r.set(c,s)}return s},
aR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fc(d))return!0
s=b.w
if(s===4)return!0
if(A.fc(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aR(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aR(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aR(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aR(a,b.x,c,d,e))return!1
return A.aR(a,A.wa(a,b),c,d,e)}if(s===6)return A.aR(a,p,c,d,e)&&A.aR(a,b.x,c,d,e)
if(q===7){if(A.aR(a,b,c,d.x,e))return!0
return A.aR(a,b,c,A.wa(a,d),e)}if(q===6)return A.aR(a,b,c,p,e)||A.aR(a,b,c,d.x,e)
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
if(!A.aR(a,j,c,i,e)||!A.aR(a,i,e,j,c))return!1}return A.zo(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zo(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ez(a,b,c,d,e)}if(o&&q===10)return A.EE(a,b,c,d,e)
return!1},
zo(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Ez(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iM(a,b,r[o])
return A.z4(a,p,null,c,d.y,e)}return A.z4(a,b.y,null,c,d.y,e)},
z4(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aR(a,b[s],d,e[s],f))return!1
return!0},
EE(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aR(a,r[s],c,q[s],e))return!1
return!0},
hd(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.fc(a))if(s!==6)r=s===7&&A.hd(a.x)
return r},
fc(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yV(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tG(a){return a>0?new Array(a):v.typeUniverse.sEA},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lq:function lq(){this.c=this.b=this.a=null},
lS:function lS(a){this.a=a},
lo:function lo(){},
fZ:function fZ(a){this.a=a},
D2(){var s,r,q
if(self.scheduleImmediate!=null)return A.FA()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hb(new A.rV(s),1)).observe(r,{childList:true})
return new A.rU(s,r,q)}else if(self.setImmediate!=null)return A.FB()
return A.FC()},
D3(a){self.scheduleImmediate(A.hb(new A.rW(t.O.a(a)),0))},
D4(a){self.setImmediate(A.hb(new A.rX(t.O.a(a)),0))},
D5(a){A.wd(B.eW,t.O.a(a))},
wd(a,b){return A.Dg(a.a/1000|0,b)},
Dg(a,b){var s=new A.tA()
s.ig(a,b)
return s},
bG(a){return new A.le(new A.ar($.am,a.i("ar<0>")),a.i("le<0>"))},
bF(a,b){a.$2(0,null)
b.b=!0
return b.a},
aB(a,b){A.DR(a,b)},
bE(a,b){b.ds(a)},
bD(a,b){b.dt(A.ao(a),A.cJ(a))},
DR(a,b){var s,r,q=new A.tN(b),p=new A.tO(b)
if(a instanceof A.ar)a.fg(q,p,t.z)
else{s=t.z
if(a instanceof A.ar)a.dY(q,p,s)
else{r=new A.ar($.am,t.hR)
r.a=8
r.c=a
r.fg(q,p,s)}}},
bI(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.am.h5(new A.uZ(s),t.H,t.S,t.z)},
yI(a,b,c){return 0},
mC(a){var s
if(t.yt.b(a)){s=a.gbN()
if(s!=null)return s}return B.at},
xG(a){var s
a.a(null)
s=new A.ar($.am,a.i("ar<0>"))
s.d3(null)
return s},
BC(a,b,c){var s=new A.ar($.am,c.i("ar<0>"))
A.CD(a,new A.nX(b,s,c))
return s},
nY(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ar($.am,b.i("ar<D<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.o_(i,h,g,f)
try{for(n=J.R(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.dY(new A.nZ(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cr(A.c([],b.i("q<0>")))
return n}i.a=A.e1(n,null,!1,b.i("0?"))}catch(l){p=A.ao(l)
o=A.cJ(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wF(m,k)
m=new A.b2(m,k==null?A.mC(m):k)
n.cp(m)
return n}else{i.d=p
i.c=o}}return f},
wF(a,b){if($.am===B.x)return null
return null},
Ev(a,b){if($.am!==B.x)A.wF(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbN()
if(b==null){A.y7(a,B.at)
b=B.at}}else b=B.at
else if(t.yt.b(a))A.y7(a,b)
return new A.b2(a,b)},
t5(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Cz()
b.cp(new A.b2(new A.ct(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.f_(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bT()
b.cq(o.a)
A.eY(b,p)
return}b.a^=2
A.md(null,null,b.b,t.O.a(new A.t6(o,b)))},
eY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.wQ(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eY(d.a,c)
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
A.wQ(j.a,j.b)
return}g=$.am
if(g!==h)$.am=h
else g=null
c=c.c
if((c&15)===8)new A.ta(q,d,n).$0()
else if(o){if((c&1)!==0)new A.t9(q,j).$0()}else if((c&2)!==0)new A.t8(d,q).$0()
if(g!=null)$.am=g
c=q.c
if(c instanceof A.ar){p=q.a.$ti
p=p.i("bW<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cB(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.t5(c,f,!0)
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
zB(a,b){var s
if(t.nW.b(a))return b.h5(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.ah(a,"onError",u.c))},
ES(){var s,r
for(s=$.h6;s!=null;s=$.h6){$.j5=null
r=s.b
$.h6=r
if(r==null)$.j4=null
s.a.$0()}},
Fh(){$.wG=!0
try{A.ES()}finally{$.j5=null
$.wG=!1
if($.h6!=null)$.xh().$1(A.zS())}},
zK(a){var s=new A.lf(a),r=$.j4
if(r==null){$.h6=$.j4=s
if(!$.wG)$.xh().$1(A.zS())}else $.j4=r.b=s},
Fa(a){var s,r,q,p=$.h6
if(p==null){A.zK(a)
$.j5=$.j4
return}s=new A.lf(a)
r=$.j5
if(r==null){s.b=p
$.h6=$.j5=s}else{q=r.b
s.b=q
$.j5=r.b=s
if(q==null)$.j4=s}},
GA(a,b){A.fb(a,"stream",t.K)
return new A.lN(b.i("lN<0>"))},
CD(a,b){var s=$.am
if(s===B.x)return A.wd(a,t.O.a(b))
return A.wd(a,t.O.a(s.fv(b)))},
wQ(a,b){A.Fa(new A.uQ(a,b))},
zG(a,b,c,d,e){var s,r=$.am
if(r===c)return d.$0()
$.am=c
s=r
try{r=d.$0()
return r}finally{$.am=s}},
F8(a,b,c,d,e,f,g){var s,r=$.am
if(r===c)return d.$1(e)
$.am=c
s=r
try{r=d.$1(e)
return r}finally{$.am=s}},
F7(a,b,c,d,e,f,g,h,i){var s,r=$.am
if(r===c)return d.$2(e,f)
$.am=c
s=r
try{r=d.$2(e,f)
return r}finally{$.am=s}},
md(a,b,c,d){t.O.a(d)
if(B.x!==c){d=c.fv(d)
d=d}A.zK(d)},
rV:function rV(a){this.a=a},
rU:function rU(a,b,c){this.a=a
this.b=b
this.c=c},
rW:function rW(a){this.a=a},
rX:function rX(a){this.a=a},
tA:function tA(){},
tB:function tB(a,b){this.a=a
this.b=b},
le:function le(a,b){this.a=a
this.b=!1
this.$ti=b},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
uZ:function uZ(a){this.a=a},
c6:function c6(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bS:function bS(a,b){this.a=a
this.$ti=b},
b2:function b2(a,b){this.a=a
this.b=b},
nX:function nX(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function o_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nZ:function nZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
li:function li(){},
io:function io(a,b){this.a=a
this.$ti=b},
dF:function dF(a,b,c,d,e){var _=this
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
t2:function t2(a,b){this.a=a
this.b=b},
t7:function t7(a,b){this.a=a
this.b=b},
t6:function t6(a,b){this.a=a
this.b=b},
t4:function t4(a,b){this.a=a
this.b=b},
t3:function t3(a,b){this.a=a
this.b=b},
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a,b){this.a=a
this.b=b},
tc:function tc(a){this.a=a},
t9:function t9(a,b){this.a=a
this.b=b},
t8:function t8(a,b){this.a=a
this.b=b},
lf:function lf(a){this.a=a
this.b=null},
lN:function lN(a){this.$ti=a},
iT:function iT(){},
lG:function lG(){},
ty:function ty(a,b){this.a=a
this.b=b},
uQ:function uQ(a,b){this.a=a
this.b=b},
yC(a,b){var s=a[b]
return s===a?null:s},
wj(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wi(){var s=Object.create(null)
A.wj(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
xZ(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
J(a,b,c){return b.i("@<0>").K(c).i("w0<1,2>").a(A.zV(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
m(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
w1(a){return new A.ck(a.i("ck<0>"))},
a_(a){return new A.ck(a.i("ck<0>"))},
aN(a,b){return b.i("y_<0>").a(A.FV(a,new A.ck(b.i("ck<0>"))))},
wk(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fT(a,b,c){var s=new A.f1(a,b,c.i("f1<0>"))
s.c=a.e
return s},
bL(a,b){var s=J.R(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.xZ(b,c)
a.ar(0,new A.pl(s,b,c))
return s},
fB(a,b,c){var s=A.xZ(b,c)
s.I(0,a)
return s},
hM(a,b){var s,r=A.w1(b)
for(s=J.R(a);s.m();)r.l(0,b.a(s.gn()))
return r},
ka(a,b){var s=A.w1(b)
s.I(0,a)
return s},
BX(a,b){var s=t.hO
return J.xo(s.a(a),s.a(b))},
w2(a){var s,r
if(A.x6(a))return"{...}"
s=new A.bl("")
try{r={}
B.a.l($.c8,a)
s.a+="{"
r.a=!0
a.ar(0,new A.po(r,s))
s.a+="}"}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Dr(){throw A.b(A.b9("Cannot change an unmodifiable set"))},
it:function it(){},
te:function te(a){this.a=a},
iv:function iv(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eZ:function eZ(a,b){this.a=a
this.$ti=b},
iu:function iu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ck:function ck(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lw:function lw(a){this.a=a
this.c=this.b=null},
f1:function f1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pl:function pl(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(){},
a5:function a5(){},
pn:function pn(a){this.a=a},
po:function po(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.$ti=b},
ix:function ix(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iN:function iN(){},
fD:function fD(){},
e9:function e9(a,b){this.a=a
this.$ti=b},
dw:function dw(){},
iH:function iH(){},
lT:function lT(){},
fS:function fS(a,b){this.a=a
this.$ti=b},
h_:function h_(){},
iO:function iO(){},
EW(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ao(r)
q=A.a2(String(s),null,null)
throw A.b(q)}q=A.ud(p)
return q},
ud(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lu(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ud(a[s])
return a},
DI(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Aw()
else s=new Uint8Array(o)
for(r=J.aF(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
DH(a,b,c,d){var s=a?$.Av():$.Au()
if(s==null)return null
if(0===c&&d===b.length)return A.yU(s,b)
return A.yU(s,b.subarray(c,d))},
yU(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xt(a,b,c,d,e,f){if(B.d.S(f,4)!==0)throw A.b(A.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a2("Invalid base64 padding, more than two '=' characters",a,b))},
xW(a,b,c){return new A.hL(a,b)},
E6(a){return a.B()},
D6(a,b){return new A.th(a,[],A.FM())},
D7(a,b,c){var s,r=new A.bl(""),q=A.D6(r,b)
q.cU(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
DJ(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lu:function lu(a,b){this.a=a
this.b=b
this.c=null},
tg:function tg(a){this.a=a},
lv:function lv(a){this.a=a},
tF:function tF(){},
tE:function tE(){},
jl:function jl(){},
mY:function mY(){},
ev:function ev(){},
jw:function jw(){},
jG:function jG(){},
hL:function hL(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(){},
pa:function pa(a){this.b=a},
p9:function p9(a){this.a=a},
ti:function ti(){},
tj:function tj(a,b){this.a=a
this.b=b},
th:function th(a,b,c){this.c=a
this.a=b
this.b=c},
kY:function kY(){},
ry:function ry(a){this.a=a},
tD:function tD(a){this.a=a
this.b=16
this.c=0},
A2(a){var s=A.du(a,null)
if(s!=null)return s
throw A.b(A.a2(a,null,null))},
zU(a){var s=A.eI(a)
if(s!=null)return s
throw A.b(A.a2("Invalid double",a,null))},
Bw(a,b){a=A.aD(a,new Error())
if(a==null)a=A.f7(a)
a.stack=b.p(0)
throw a},
e1(a,b,c,d){var s,r=c?J.xQ(a,d):J.xP(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ap(a,b,c){var s,r=A.c([],c.i("q<0>"))
for(s=J.R(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.c(a.slice(0),b.i("q<0>"))
s=A.c([],b.i("q<0>"))
for(r=J.R(a);r.m();)B.a.l(s,r.gn())
return s},
ai(a,b){var s=A.ap(a,!1,b)
s.$flags=3
return s},
yi(a,b,c){var s,r
A.kz(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aZ(c,b,null,"end",null))
if(s===0)return""}r=A.CB(a,b,c)
return r},
CB(a,b,c){var s=a.length
if(b>=s)return""
return A.Cj(a,b,c==null||c>s?s:c)},
ya(a){return new A.hG(a,A.xU(a,!1,!0,!1,!1,""))},
wc(a,b,c){var s=J.R(b)
if(!s.m())return a
if(c.length===0){do a+=A.y(s.gn())
while(s.m())}else{a+=A.y(s.gn())
while(s.m())a=a+c+A.y(s.gn())}return a},
ea(){var s,r,q=A.C8()
if(q==null)throw A.b(A.b9("'Uri.base' is not supported"))
s=$.yo
if(s!=null&&q===$.yn)return s
r=A.CJ(q)
$.yo=r
$.yn=q
return r},
Cz(){return A.cJ(new Error())},
Bc(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xA(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jy(a){if(a>=10)return""+a
return"0"+a},
Bv(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.ah(b,"name","No enum value with that name"))},
jH(a){if(typeof a=="number"||A.br(a)||a==null)return J.de(a)
if(typeof a=="string")return JSON.stringify(a)
return A.y6(a)},
Bx(a,b){A.fb(a,"error",t.K)
A.fb(b,"stackTrace",t.l)
A.Bw(a,b)},
ji(a){return new A.jh(a)},
w(a,b){return new A.ct(!1,null,b,a)},
ah(a,b,c){return new A.ct(!0,a,b,c)},
y8(a){var s=null
return new A.fJ(s,s,!1,s,s,a)},
y9(a,b){return new A.fJ(null,null,!0,a,b,"Value not in range")},
aZ(a,b,c,d,e){return new A.fJ(b,c,!0,a,d,"Invalid value")},
kA(a,b,c){if(0>a||a>c)throw A.b(A.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aZ(b,a,c,"end",null))
return b}return c},
kz(a,b){if(a<0)throw A.b(A.aZ(a,0,null,b,null))
return a},
oQ(a,b,c,d){return new A.jZ(b,!0,a,d,"Index out of range")},
b9(a){return new A.ih(a)},
yl(a){return new A.kT(a)},
k(a){return new A.fP(a)},
av(a){return new A.jt(a)},
a2(a,b,c){return new A.H(a,b,c)},
BR(a,b,c){var s,r
if(A.x6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.c([],t.s)
B.a.l($.c8,a)
try{A.EJ(a,s)}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}r=A.wc(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
vY(a,b,c){var s,r
if(A.x6(a))return b+"..."+c
s=new A.bl(b)
B.a.l($.c8,a)
try{r=s
r.a=A.wc(r.a,a,", ")}finally{if(0>=$.c8.length)return A.d($.c8,-1)
$.c8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
EJ(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.y(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.y(p)
r=A.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
w3(a,b,c){var s=A.m(b,c)
s.k6(a)
return s},
cC(a,b,c,d,e,f){var s
if(B.f===c){s=J.aA(a)
b=J.aA(b)
return A.ie(A.aP(A.aP($.hf(),s),b))}if(B.f===d){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
return A.ie(A.aP(A.aP(A.aP($.hf(),s),b),c))}if(B.f===e){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
return A.ie(A.aP(A.aP(A.aP(A.aP($.hf(),s),b),c),d))}if(B.f===f){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
return A.ie(A.aP(A.aP(A.aP(A.aP(A.aP($.hf(),s),b),c),d),e))}s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
f=J.aA(f)
f=A.ie(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.hf(),s),b),c),d),e),f))
return f},
C5(a){var s,r,q=$.hf()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r)q=A.aP(q,J.aA(a[r]))
return A.ie(q)},
eP(a,b){return new A.fS(A.ka(a,b),b.i("fS<0>"))},
CJ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.ym(a4<a4?B.b.H(a5,0,a4):a5,5,a3).gha()
else if(s===32)return A.ym(B.b.H(a5,5,a4),0,a3).gha()}r=A.e1(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zJ(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zJ(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.b.ad(a5,"\\",n))if(p>0)h=B.b.ad(a5,"\\",p-1)||B.b.ad(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.b.ad(a5,"..",n)))h=m>n+2&&B.b.ad(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.b.ad(a5,"file",0)){if(p<=0){if(!B.b.ad(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.H(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bJ(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ad(a5,"http",0)){if(i&&o+3===n&&B.b.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ad(a5,"https",0)){if(i&&o+4===n&&B.b.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bJ(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lK(a4<a5.length?B.b.H(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.DB(a5,0,q)
else{if(q===0)A.h0(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.DC(a5,c,p-1):""
a=A.Dx(a5,p,o,!1)
i=o+1
if(i<n){a0=A.du(B.b.H(a5,i,n),a3)
d=A.Dz(a0==null?A.i(A.a2("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Dy(a5,n,m,a3,j,a!=null)
a2=m<l?A.DA(a5,m+1,l,a3):a3
return A.Ds(j,b,a,d,a1,a2,l<a4?A.Dw(a5,l+1,a4):a3)},
yq(a){var s=t.N
return B.a.be(A.c(a.split("&"),t.s),A.m(s,s),new A.rx(B.c8),t.G)},
kX(a,b,c){throw A.b(A.a2("Illegal IPv4 address, "+a,b,c))},
CG(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.kX("each part must be in the range 0..255",a,r)}A.kX("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.kX(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bU(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.kX(j,a,q)
p=l}A.kX("IPv4 address should contain exactly 4 parts",a,q)},
CH(a,b,c){var s
if(b===c)throw A.b(A.a2("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.CI(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.yp(a,b,c)
return!0},
CI(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.H(n,a,q)
r=q
break}return new A.H("Unexpected character",a,q-1)}if(r-1===b)return new A.H(n,a,r)
return new A.H("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.H("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.d(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.H("Invalid IPvFuture address character",a,r)}},
yp(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rw(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.CG(a3,m,a5,s,p*2)
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
B.d9.hz(s,a0,16,s,a)
B.d9.ls(s,a,a0,0)}}return s},
Ds(a,b,c,d,e,f,g){return new A.iP(a,b,c,d,e,f,g)},
yO(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
h0(a,b,c){throw A.b(A.a2(c,a,b))},
Dz(a,b){var s=A.yO(b)
if(a===s)return null
return a},
Dx(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.h0(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Du(a,q,r)
if(o<r){n=o+1
p=A.yT(a,B.b.ad(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.CH(a,q,o)
l=B.b.H(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.cJ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.yT(a,B.b.ad(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yp(a,b,o)
return"["+B.b.H(a,b,o)+p+"]"}}return A.DE(a,b,c)},
Du(a,b,c){var s=B.b.cJ(a,"%",b)
return s>=b&&s<c?s:c},
yT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bl(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wo(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bl("")
l=h.a+=B.b.H(a,q,r)
if(m)n=B.b.H(a,r,r+3)
else if(n==="%")A.h0(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bl("")
if(q<r){h.a+=B.b.H(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.H(a,q,r)
if(h==null){h=new A.bl("")
m=h}else m=h
m.a+=i
l=A.wn(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.H(a,b,c)
if(q<c){i=B.b.H(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
DE(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wo(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bl("")
k=B.b.H(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.H(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bl("")
if(q<r){p.a+=B.b.H(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.h0(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.H(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bl("")
l=p}else l=p
l.a+=k
j=A.wn(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.H(a,b,c)
if(q<c){k=B.b.H(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
DB(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.yQ(a.charCodeAt(b)))A.h0(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.h0(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.H(a,b,c)
return A.Dt(q?a.toLowerCase():a)},
Dt(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
DC(a,b,c){return A.iQ(a,b,c,16,!1,!1)},
Dy(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iQ(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.DD(q,e,f)},
DD(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.DF(a,!s||c)
return A.DG(a)},
DA(a,b,c,d){return A.iQ(a,b,c,256,!0,!1)},
Dw(a,b,c){return A.iQ(a,b,c,256,!0,!1)},
wo(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.v6(r)
o=A.v6(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ay(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.H(a,b,b+3).toUpperCase()
return null},
wn(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.jL(a,6*p)&63|q
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
o+=3}}return A.yi(s,0,null)},
iQ(a,b,c,d,e,f){var s=A.yS(a,b,c,d,e,f)
return s==null?B.b.H(a,b,c):s},
yS(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wo(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.h0(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wn(n)}if(o==null){o=new A.bl("")
k=o}else k=o
k.a=(k.a+=B.b.H(a,p,q))+l
if(typeof m!=="number")return A.v7(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.H(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
yR(a){if(B.b.T(a,"."))return!0
return B.b.bE(a,"/.")!==-1},
DG(a){var s,r,q,p,o,n,m
if(!A.yR(a))return a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.W(s,"/")},
DF(a,b){var s,r,q,p,o,n
if(!A.yR(a))return!b?A.yP(a):a
s=A.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gX(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.k(s,0,A.yP(s[0]))}return B.a.W(s,"/")},
yP(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yQ(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.H(a,0,s)+"%3A"+B.b.b0(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Dv(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.w("Invalid URL encoding",null))}}return r},
wp(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.c8===d)return B.b.H(a,b,c)
else p=new A.dS(B.b.H(a,b,c))
else{p=A.c([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.w("Truncated URI",null))
B.a.l(p,A.Dv(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.U.a(p)
return B.mk.kA(p)},
yQ(a){var s=a|32
return 97<=s&&s<=122},
ym(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a2(k,a,r))}}if(q<0&&r>b)throw A.b(A.a2(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gX(j)
if(p!==44||r!==n+7||!B.b.ad(a,"base64",n+1))throw A.b(A.a2("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.eo.lQ(a,m,s)
else{l=A.yS(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bJ(a,m,s,l)}return new A.rv(a,j,c)},
zJ(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a){this.a=a},
ln:function ln(){},
al:function al(){},
jh:function jh(a){this.a=a},
dA:function dA(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jZ:function jZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ih:function ih(a){this.a=a},
kT:function kT(a){this.a=a},
fP:function fP(a){this.a=a},
jt:function jt(a){this.a=a},
km:function km(){},
ia:function ia(){},
t0:function t0(a){this.a=a},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(){},
N:function N(){},
lQ:function lQ(){},
rf:function rf(){this.b=this.a=0},
bl:function bl(a){this.a=a},
rx:function rx(a){this.a=a},
rw:function rw(a){this.a=a},
iP:function iP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rv:function rv(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lj:function lj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pH:function pH(a){this.a=a},
zh(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.DU,a)
s[$.he()]=a
return s},
U(a){var s
if(typeof a=="function")throw A.b(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.tP,a)
s[$.he()]=a
return s},
DU(a){return t.BO.a(a).$0()},
tP(a,b,c){t.BO.a(a)
if(A.e(c)>=1)return a.$1(b)
return a.$0()},
A_(a,b,c){return c.a(a[b])},
zi(a,b){return a[b]},
aK(a,b,c,d){return d.a(a[b].apply(a,c))},
cp(a,b){var s=new A.ar($.am,b.i("ar<0>")),r=new A.io(s,b.i("io<0>"))
a.then(A.hb(new A.vH(r,b),1),A.hb(new A.vI(r),1))
return s},
zt(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hc(a){if(A.zt(a))return a
return new A.v2(new A.iv(t.BT)).$1(a)},
vH:function vH(a,b){this.a=a
this.b=b},
vI:function vI(a){this.a=a},
v2:function v2(a){this.a=a},
Ck(a){var s
if(a==null)s=B.aQ
else{s=new A.ef()
s.bO(a)}return s},
lt:function lt(){},
ef:function ef(){this.b=this.a=0},
q8:function q8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
q9:function q9(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},
nb:function nb(a,b){this.a=a
this.b=b
this.c=null},
fm:function fm(a,b){this.a=a
this.b=b},
nc:function nc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ne:function ne(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nd:function nd(){var _=this
_.c=_.b=_.a=null
_.d=0},
ks:function ks(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
_.cy=a0},
fj:function fj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jO:function jO(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
nS:function nS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dY(a,b){return new A.jW(a,b)},
dv:function dv(){},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.b=b},
Gc(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.c([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iE(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.P(f,new A.vJ())
s=A.c([],t.cv)
for(r=A.kO(f,0,A.fb(b,"count",t.S),t.mn),q=r.$ti,r=new A.aH(r,r.gt(0),q.i("aH<a4.E>")),q=q.i("a4.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
nz:function nz(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bA:function bA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vJ:function vJ(){},
pq(a,b,c,d,e,f,g,h,i,j){return new A.e2(c,a,h,g,f,e,i,j,b,!0)},
w5(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.w("MaterialDefinition."+a+" must be in [0, 1]: "+A.y(b),null))},
jg:function jg(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c,d,e,f,g,h,i,j){var _=this
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
C_(a){A:{break A}return a},
d4:function d4(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
rz:function rz(){},
rA:function rA(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pw:function pw(){},
px:function px(){},
py:function py(){},
hW(a){var s,r=t.N,q=A.aN(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.I(0,A.aN(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.I(0,A.aN(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.I(0,A.aN(["bloomBlurH","bloomBlurV","sceneColor#"+(a.d>1?2:1)],r))
if(a.d>1)q.l(0,"sceneColor#1")
if(p.q(0,"dof"))q.I(0,A.aN(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pJ(A.eP(q,r),s)},
pJ:function pJ(a,b){this.a=a
this.b=b},
pK:function pK(){},
fL:function fL(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
fs:function fs(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
bx:function bx(a,b,c,d,e,f,g,h,i,j){var _=this
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
kP:function kP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
eM:function eM(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.a=a
this.b=b
this.d=c},
nU:function nU(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
BY(a){var s,r,q
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=B.bm;s.m();){switch(s.d.a){case 0:q=B.bm
break
case 1:q=B.d6
break
case 2:q=B.d7
break
case 3:q=B.d8
break
default:q=null}if(A.y2(q)>A.y2(r))r=q}return r},
y2(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
zP(a){return new A.bS(A.Fl(a),t.EF)},
Fl(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$zP(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.aQ("albedo",o),1
case 4:case 3:return 0
case 1:return b.c=p.at(-1),3}}}},
eF:function eF(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b){this.a=a
this.b=b},
pt:function pt(a){this.a=a},
pu:function pu(a){this.a=a},
pr:function pr(a){this.a=a},
ps:function ps(){},
BZ(){return new A.kc(new A.cZ(new A.pv(),A.c([],t.Fy),A.c([],t.t),t.ja))},
kc:function kc(a){this.a=a},
pv:function pv(){},
zM(a){var s=4
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
case 3:s=A.i(A.b9("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
E0(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.W[r]
if(A.zM(q.a)===b)s+=q.c}return s},
C0(a){return new A.pz(a,new A.cZ(new A.pA(),A.c([],t.EM),A.c([],t.t),t.wm),A.m(t.S,t.qt))},
y3(a){var s
A:{s=a.byteLength
break A}return s},
kV:function kV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pz:function pz(a,b,c){this.a=a
this.b=b
this.c=c},
pA:function pA(){},
pB:function pB(){},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
ro:function ro(a,b){this.a=a
this.b=b},
rp:function rp(a){this.a=a},
rm:function rm(a,b){this.a=a
this.b=b},
rn:function rn(){},
CC(a){var s=new A.kR(a,new A.cZ(new A.rq(),A.c([],t.f2),A.c([],t.t),t.qq),A.m(t.S,t._))
s.d=s.aT($.xf())
s.e=s.aT($.xc())
s.f=s.aT($.xd())
s.r=s.aT($.xb())
s.w=s.aT($.xe())
return s},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rq:function rq(){},
rs:function rs(){},
rr:function rr(){},
FD(a){var s,r,q,p,o=A.c([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
p.gE()
B.a.l(o,new A.eE(p,A.c([p],r)))
continue}return o},
eE:function eE(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
nN:function nN(){},
nO:function nO(a){this.a=a},
nL:function nL(a){this.a=a},
nM:function nM(a){this.a=a},
jM:function jM(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
nT:function nT(a,b){this.a=a
this.b=b
this.c=0},
D8(){return new A.fU()},
nR:function nR(a){this.a=a
this.b=null},
fU:function fU(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
w7(){return!0},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pN:function pN(){},
pO:function pO(){},
ce:function ce(a,b){this.a=a
this.b=b},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fK:function fK(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
ho:function ho(a){this.b=a},
kw:function kw(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bk:function bk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qa:function qa(){},
b6:function b6(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
qc:function qc(a,b){this.a=a
this.b=b},
qh:function qh(){},
qg:function qg(){},
qf:function qf(){},
qe:function qe(a){this.a=a},
qd:function qd(a,b,c){this.a=a
this.b=b
this.c=c},
qb:function qb(a,b){this.a=a
this.b=b},
Cp(a){return new A.i2(a,new A.cZ(new A.qi(),A.c([],t.w_),A.c([],t.t),t.tc))},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b){this.a=a
this.b=b},
qi:function qi(){},
uw(a,b){return A.Eb(a,b)},
Eb(a,b){var s=0,r=A.bG(t.H),q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uw=A.bI(function(c,a0){if(c===1)return A.bD(a0,r)
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
n=new A.kw(a.a,A.m(t.N,t.CH))
l=A.zd(a,n,b,o.a.b.a)
m=l.a
i.bW(p)
h=a.x
g=o
if(h.e)A.i(A.k("GPU resource adapter is disposed"))
h.es(g)
f=h.c
h.b.bW(g.a)
h.c=g
h.d=null
if(f!=null)h.dc(f.b)
g.c=B.hp
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
h=k
if(h!=null)h.bB()
h=j
if(h!=null)h.bB()}catch(d){if(p.c===B.aT){h=t.AB.a(p)
i.eC(h)
i.a.fp(h.a)
i.b.dW(h.b)
h.c=B.eP
i.c=null}i=o
if((i==null?null:i.c)===B.ae){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.i(A.k("GPU resource adapter is disposed"))
i.es(h)
i.dc(h.b)
i.b.dW(h.a)
h.c=B.hq
i.d=null}i=m
if(i!=null)i.bB()
i=n
if(i!=null)i.bB()
throw d}case 1:return A.bE(q,r)}})
return A.bF($async$uw,r)},
ze(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.zd(a,q,s,a.x.gn().a.b.a)
a.z=r.a
a.Q=r.b},
zd(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.uu(a),j=new A.uv(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.FI(b,h,d,i,s.gmv(),new A.uf(j),new A.ug(j),new A.uh(a),new A.um(a),new A.un(a),new A.uo(j),new A.up(j),s.gmx(),new A.uq(a),s.gmB(),r.gmz(),k,s.gmD(),s.gmF(),new A.ur(j,c),new A.us(j),new A.ut(j),new A.ui(j),new A.uj(j),new A.uk(a),new A.ul(j),e,f,g,c.r)}else{p=new A.aI(l,B.r,g,f,e,0)
o=new A.aI(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.hP(h,p,o):null
k=A.c([new A.l9(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.i_(b,u.l,u.B,h,i,d))
q=new A.jL(k)}a.r.toString
m=q.kn(B.a3,new A.qa(),!1,new A.lD())
k=m.a.b
if(k.length!==0)throw A.b(A.k("safe renderer graph is invalid: "+A.y(k)))
return new A.tz(q,m)},
Ec(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.k("renderer graph is not initialized"))
s=A.K(b7.gfT(),t.yz)
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
B.a.l(s,new A.lR(new A.cw((r|1073741824)>>>0,0,"transient"),q,A.b1(new A.M(p,n.i("I(1)").a(o.gaz()),n.i("M<1,I>")))))}p=b8.a
m=A.FO(A.BB(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dY(B.az,n))
j=j.b
g=j.$ti
j.Z(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.d(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.a2(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gE().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.i(A.dY(B.az,n))
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
e=new A.nR(n)
e.kj("cull")
j=l-f
d=e.b
if(d==null)A.i(A.k("cull recorded outside an active frame"))
if(j<0)A.i(A.w("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.c([],t.fs)
a=A.c([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.u)(s),++k){a2=s[k]
if(a2.gE().e===B.aU)B.a.l(a,new A.aO(new A.bJ(a0.h8(a2.gE().c.a).c,a2.ga8().a),a2,a1))
else B.a.l(b,new A.aO(new A.bM(B.kA,a2.gE().b,a2.gE().a,a2.ga8().a),a2,g))}a3=new A.lp(A.FD(A.Ge(b)),A.Gd(a),p,b8.b,b8.c)
a4=new A.jB(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gE().a
if(g.length===0)A.i(A.ah(g,"passId",null))
e.b=g
n.ce(g,A.zW())
a6=A.m(o,i)
for(g=a5.gE().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.u)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.i(A.k("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.i(A.k("resource is not in candidate: "+b1))
b3=new A.fh(b2)
a6.k(0,b0+"#"+a1,b3)
a6.ce(b0,new A.ux(b3))}a5.am(new A.jp(a6,a4,a3))}return new A.t1(e,m,j)},
yf(a){return new A.qr(a,new A.nb(new A.nd(),new A.kD()),new A.nT(A.c([],t.h1),B.ha),A.c([],t.Ft),B.bw,A.c([],t.ow),null)},
qm:function qm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
t1:function t1(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(a,b,c){this.a=a
this.b=b
this.c=c},
uu:function uu(a){this.a=a},
uv:function uv(a,b){this.a=a
this.b=b},
ut:function ut(a){this.a=a},
um:function um(a){this.a=a},
un:function un(a){this.a=a},
us:function us(a){this.a=a},
uh:function uh(a){this.a=a},
uj:function uj(a){this.a=a},
ui:function ui(a){this.a=a},
ur:function ur(a,b){this.a=a
this.b=b},
uf:function uf(a){this.a=a},
ug:function ug(a){this.a=a},
uo:function uo(a){this.a=a},
up:function up(a){this.a=a},
uq:function uq(a){this.a=a},
ul:function ul(a){this.a=a},
uk:function uk(a){this.a=a},
ux:function ux(a){this.a=a},
tz:function tz(a,b){this.a=a
this.b=b},
lD:function lD(){},
lp:function lp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qr:function qr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qs:function qs(){},
qt:function qt(){},
qu:function qu(){},
lA:function lA(a){this.b=a},
td:function td(){},
lH:function lH(){},
i9:function i9(a,b){this.a=a
this.b=b},
Ge(a){var s,r,q=A.K(a,t.E0)
B.a.P(q,new A.vN())
s=A.C(q)
r=s.i("M<1,c0>")
s=A.K(new A.M(q,s.i("c0(1)").a(new A.vO()),r),r.i("a4.E"))
s.$flags=1
return s},
Gd(a){var s,r,q=A.K(a,t.EH)
B.a.P(q,new A.vL())
s=A.C(q)
r=s.i("M<1,c0>")
s=A.K(new A.M(q,s.i("c0(1)").a(new A.vM()),r),r.i("a4.E"))
s.$flags=1
return s},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
vN:function vN(){},
vO:function vO(){},
vL:function vL(){},
vM:function vM(){},
FO(a,b,c){var s,r,q,p,o,n,m,l=A.c([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gE().d&c)>>>0===0){++q
continue}n=o.ge1()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.w("cullItems: non-finite world bounds for instance "+o.ga8().p(0),null))
if(a.mN(o.ge1())===B.co){++q
continue}B.a.l(l,o)}return new A.nt(l,new A.nu(q))},
nu:function nu(a){this.b=a},
nt:function nt(a,b){this.a=a
this.b=b},
b1(a){var s,r,q,p,o,n,m,l,k
for(s=J.R(a),r=B.mn,q=B.mo,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.I(m,k,Math.min(r.c,o))
q=new A.I(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.w("Aabb.fromPoints requires at least one point",null))
return new A.jc(r,q)},
jc:function jc(a,b){this.a=a
this.b=b},
BB(a){var s,r,q,p,o,n,m=a.a,l=new A.nW(),k=m.length
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
return new A.nV(A.c([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eH:function eH(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
nV:function nV(a){this.a=a},
nW:function nW(){},
y0(a){if(a.length!==16)throw A.b(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.dr(new Float32Array(A.a1(a)))},
w4(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dr(q)},
y1(a,b,c){var s=b.gau(),r=c.by(s).gau(),q=s.by(r),p=new Float32Array(16)
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
pp:function pp(){},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kS:function kS(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
lg:function lg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jo:function jo(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lh:function lh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jA:function jA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lk:function lk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ir:function ir(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ll:function ll(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jD:function jD(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lm:function lm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jV:function jV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lr:function lr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
ly:function ly(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a){this.b=a},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
bv(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aI(a.a,a.b,b,c,s,r)},
w8:function w8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
i_:function i_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
lE:function lE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lF:function lF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yh(a){var s=a.c,r=Math.abs(s.a)<0.99?B.mm:B.a6,q=A.y1(a.b,s,r)
return new A.eR(A.w4(1,a.f,B.c.D(a.w*2,0.1,3),0.05).aj(0,q))},
eR:function eR(a){this.a=a},
kH:function kH(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lI:function lI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
FI(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.b(A.ah(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=B.d.a2(e5+1,2)
m=B.d.a2(e4+1,2)
l=A.bv(B.bz,e5,e4,e3,a8)
k=A.bv(B.bz.fV(),e5,e4,a8,a8)
A.bv(B.lm,e5,e4,a8,a8)
j=A.bv(B.lj,e5,e4,a8,a8)
i=A.bv(B.le,e6,e6,a8,a8)
h=A.bv(B.lf,b6,m,a8,a8)
g=A.bv(B.lg,b6,m,a8,a8)
f=A.bv(B.lk,b6,m,a8,a8)
e=A.bv(B.ll,b6,m,a8,a8)
d=$.Ag()
c=e3>1
b=A.bv(d,e5,e4,a8,c?2:1)
d=A.bv(B.lb,b6,m,a8,a8)
a=A.bv(B.lc,b6,m,a8,a8)
a0=A.bv(B.ld,e5,e4,a8,a8)
a1=A.bv(B.lh,e5,e4,a8,a8)
a2=A.bv(B.ln,e5,e4,a8,a8)
a3=A.bv(B.li,e5,e4,a8,a8)
a4=c?new A.hP(b8,l,k):a8
b5.a=null
a5=A.yh(B.m_)
a6=t.e_
a7=A.c([],a6)
k=c?k:l
if(r){B.a.I(a7,A.c([new A.hl(b7,a9,b0,b8,b1,b1,B.dX,!0,k,f,d6,b6,m),new A.hl(b7,a9,b0,b8,b2,b2,B.n2,!1,f,e,c2,b6,m),new A.jo(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.I(a7,A.c([new A.hs(b7,a9,b0,b8,b3,b3,B.dY,k,d,d6,b6,m),new A.hs(b7,a9,b0,b8,b4,b4,B.n3,d,a,c7,b6,m),new A.jD(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jV(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kx(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.kZ(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.c([new A.jA(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kL(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kK(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kH(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.v_(b5),i))
j.push(new A.kI(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(.003*(1.-ndotl),.0008);\n  float sum=0.;\n  // Nine-tap rotated-grid PCF removes the old four-corner shimmer while\n  // retaining a bounded kernel and stable cost for every shadow caster.\n  for(int y=-1;y<=1;y++){\n    for(int x=-1;x<=1;x++){\n      vec2 offset=vec2(float(x),float(y))*uShadowMapTexelSize;\n      sum+=sampleShadow(projCoord+vec3(offset,0.),bias);\n    }\n  }\n  return sum/9.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.v0(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.I(j,a7)
j.push(new A.i_(b7,a9,u.B,b8,k,b9))
return new A.jL(j)},
v_:function v_(a){this.a=a},
v0:function v0(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lJ:function lJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kL:function kL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lM:function lM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kK:function kK(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lL:function lL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
kZ:function kZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lU:function lU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l9:function l9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lX:function lX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n9:function n9(){},
kG(a,b){return new A.i8(a,b)},
jS:function jS(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eB:function eB(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hz:function hz(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
x:function x(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
od:function od(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
oe:function oe(){},
of:function of(){},
fW:function fW(a,b){this.a=a
this.b=b},
ei:function ei(a,b){var _=this
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
xD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.ft(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jm:function jm(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b7:function b7(a,b){this.a=a
this.b=b},
rR:function rR(){this.a=null},
CO(a){var s=new A.l7(a,B.h,new A.rR(),A.CZ(a))
s.ie(a)
return s},
CZ(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a_(t.N)
s=A.a_(t.N)
r=J.R(t.a.b(q)?q:new A.aW(q,A.C(q).i("aW<1,f>")))
while(r.m())s.l(0,r.gn())
return s},
bR(a,b){var s,r
if(a.b!==B.h)A.i(A.k(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.e(s.drawingBufferWidth),A.e(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.e(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
CU(a,b){var s
if(a.b!==B.h)A.i(A.k(u.k))
switch(b){case 1:a.a.drawBuffers(A.c([A.e(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.c([A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.e(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.w("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
CT(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.k("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
CS(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.e(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
CR(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yt(a,b){var s
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
CP(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bb(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=a.f
r=s.lb(b)
if(r.a===0)return
if(r.q(0,B.bD)){q=v.G
p=a.a
if(b.a)p.enable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.e(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bE))a.a.depthFunc(A.CS(a,b.b))
if(r.q(0,B.bF))a.a.depthMask(b.c)
if(r.q(0,B.bJ)){q=v.G
p=a.a
if(b.w)p.enable(A.e(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.e(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bK))a.a.cullFace(A.CR(a,b.x))
if(r.q(0,B.dJ)){q=v.G.WebGL2RenderingContext
q=A.e(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bG)){q=v.G
p=a.a
if(b.d)p.enable(A.e(q.WebGL2RenderingContext.BLEND))
else p.disable(A.e(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bH))a.a.blendFunc(A.yt(a,b.e),A.yt(a,b.f))
if(r.q(0,B.bI))a.a.blendEquation(A.CP(a,b.r))
if(r.q(0,B.dH))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dI)){q=v.G.WebGL2RenderingContext
a.a.disable(A.e(q.SCISSOR_TEST))}s.a=b},
CQ(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.e(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.e(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.e(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
d7(a,b,c,d,e,f){var s
if(a.b!==B.h)A.i(A.k(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.CQ(a,b))},
c5(a,b){var s
if(a.b!==B.h)A.i(A.k(u.k))
s=A.a(b.a)
a.a.useProgram(s)
a.e=s},
v(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.i(A.k(u.k))
s=a.e
if(s==null)throw A.b(A.k("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.E(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bp(c.b))
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
bn(a,b){if(a.b!==B.h)A.i(A.k(u.k))
a.a.bindVertexArray(A.a(b.a))},
aC(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.i(A.k(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.e(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iS){p=s.d>1?A.e(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iR){o=s.b
if(o!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.e(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.k("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.k("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
CV(a,b,c){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=A.a(b.a)
r=a.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.e(p.ELEMENT_ARRAY_BUFFER),c,A.e(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
CW(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yw(a,b){var s,r,q,p
if(a.b!==B.h)A.i(A.k(u.k))
s=a.a
r=A.E(s.createBuffer())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cB?A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.e(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.CW(a,b.b))
return new A.dG(r)},
yu(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.e(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yv(a,b){var s
switch(b.a){case 0:s=A.e(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.e(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
CX(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
wf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.h)A.i(A.k(u.k))
s=a.a
r=A.E(s.createTexture())
if(r==null)throw A.b(A.k("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.e(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.CX(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.aK(s,"texStorage3D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.aK(s,"texStorage2D",[n,l,A.e(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yu(a,b.e))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yu(a,b.f))
p=b.r
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yv(a,p))
s.texParameteri(n,A.e(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yv(a,p))
h=a.r.q(0,"EXT_texture_filter_anisotropic")
g=h?a.eY(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.i(A.ah(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.dG(new A.iS(r,j,i,q,m))},
wg(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.i(A.k(u.k))
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
yx(a,b){var s,r,q
if(a.b!==B.h)A.i(A.k(u.k))
s=t.h.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.e(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.e(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
l8(a,b){a.a.deleteTexture(t.h.a(b.a).a)},
yz(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.i(A.k(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.w("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.E(r.createFramebuffer())
if(q==null)throw A.b(A.k("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.e(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aX
if(n&&!a1.e)throw A.b(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cD||o===B.hs
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
if(o!==h){A.wh(a0,q,l,k,f,e,j,i)
throw A.b(A.k("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dG(new A.iR(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wh(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d8(a){var s
if(a.b!==B.h)A.i(A.k(u.k))
s=A.E(a.a.createVertexArray())
if(s==null)throw A.b(A.k("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dG(s)},
yy(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.E(p.createShader(b))
if(o==null)throw A.b(A.kG(b===A.A_(A.zi(A.Ae(),r),q,t.S)?B.dC:B.dD,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ad(A.hc(p.getShaderParameter(o,A.e(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.at(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.kG(b===A.A_(A.zi(A.Ae(),r),q,t.S)?B.dC:B.dD,s))}return o},
CY(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.i(A.k(u.k))
q=v.G
s=A.yy(a,A.e(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yy(a,A.e(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.E(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.lM)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ad(A.hc(o.getProgramParameter(n,A.e(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.at(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kG(B.dE,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.e(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kG(B.dF,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.E(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.kG(B.dF,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dG(n)},
dG:function dG(a){this.a=a},
iS:function iS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iR:function iR(a,b,c,d,e,f,g,h,i,j){var _=this
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
lW:function lW(a){this.a=a
this.b=!1},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
rP:function rP(a){this.a=a},
rQ:function rQ(a){this.a=a},
tH:function tH(){},
lV:function lV(){},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mQ(a,a0){var s=0,r=A.bG(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$mQ=A.bI(function(a1,a2){if(a1===1)return A.bD(a2,r)
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
b=new A.jj(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.aQ,A.m(o,t.jS))
b.hY(p,a0)
p=A.o(a).i("F<1,2>")
s=3
return A.aB(A.nY(A.kb(new A.F(a,p),p.i("bW<aq>(n.E)").a(new A.mR(b)),p.i("n.E"),t.ls),t.c),$async$mQ)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.j1():n
c.buffer=p
q=b
s=1
break
case 1:return A.bE(q,r)}})
return A.bF($async$mQ,r)},
jj:function jj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
mS:function mS(){},
mR:function mR(a){this.a=a},
mU:function mU(a,b){this.a=a
this.b=b},
mT:function mT(a,b){this.a=a
this.b=b},
mV:function mV(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
AW(a,b,c,d,e,f,g){var s=new A.mH(c,f,b,g,new A.j(d.a,d.b,d.c),e,a)
s.i_(a,b,c,d,0,e,f,g)
return s},
AS(a,b){var s=new A.mp(b)
s.hX(a,b)
return s},
AV(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.F(a,A.o(a).i("F<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.ap(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mD(A.aY(n,r,t.a))
n.hZ(a)
return n},
Fg(a,b){var s,r,q,p=b>>>0
for(s=new A.dS(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.A1(p,q==null?r.a(q):q)}return p&2147483647},
jk:function jk(a,b){this.a=a
this.b=b},
mH:function mH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mI:function mI(){},
mp:function mp(a){this.a=a},
mq:function mq(){},
hj:function hj(){},
mr:function mr(){},
ms:function ms(){},
mD:function mD(a){this.a=a},
mF:function mF(){},
mG:function mG(){},
mE:function mE(){},
vV:function vV(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
mP:function mP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mJ:function mJ(a,b,c){this.a=a
this.b=b
this.c=c},
mK:function mK(a){this.a=a},
mL:function mL(){},
im:function im(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
nQ:function nQ(a){this.a=a},
k_:function k_(a,b,c,d,e,f,g,h,i,j){var _=this
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
oS:function oS(a){this.a=a},
BL(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.F(a,A.o(a).i("F<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ap(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.oR(n)},
oR:function oR(a){this.a=a},
oV:function oV(){var _=this
_.c=_.b=_.a=!1
_.d=0},
aV:function aV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pg:function pg(a,b,c){this.a=a
this.c=b
this.e=c},
pd:function pd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
pe:function pe(a,b,c){this.a=a
this.b=b
this.c=c},
pf:function pf(){},
nv:function nv(){this.b=this.a=0},
pm:function pm(a){this.a=a
this.b=0
this.e=!1},
ib(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bU(a)
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
ii(a,b,c){return new A.j(a,b,c)},
yr(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.j(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
D_(a,b,c,d){return new A.la(d,b,c,a)},
D1(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.As()
s=a.d
r=A.rT(s,0)
q=A.rT(s,1)
p=A.rT(s,2)
o=A.rT(s,3)
s=t.N
n=A.a_(s)
m=a.e
if(A.bC(m,0))n.l(0,"GamepadA")
if(A.bC(m,1))n.l(0,"GamepadB")
if(A.bC(m,2))n.l(0,"GamepadX")
if(A.bC(m,3))n.l(0,"GamepadY")
if(A.bC(m,4))n.l(0,"GamepadLB")
if(A.bC(m,5))n.l(0,"GamepadRB")
if(A.bC(m,6))n.l(0,"GamepadLT")
if(A.bC(m,7))n.l(0,"GamepadRT")
if(A.bC(m,8))n.l(0,"GamepadView")
if(A.bC(m,9))n.l(0,"GamepadMenu")
if(A.bC(m,10))n.l(0,"GamepadLStick")
if(A.bC(m,11))n.l(0,"GamepadRStick")
if(A.bC(m,12))n.l(0,h)
if(A.bC(m,13))n.l(0,g)
if(A.bC(m,14))n.l(0,f)
if(A.bC(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.j(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gau():i
return new A.la(m,p,o,A.eP(n,s))},
rT(a,b){return A.D0(b<a.length?a[b]:0)},
bC(a,b){return b<a.length&&a[b]>=0.5},
D0(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.D((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gc8(a)?-s:s},
kM:function kM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
la:function la(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n_:function n_(a){this.a=a},
Bg(a,b,c){var s=new A.jE(a,c,null,b)
s.i3(a,null,null,b,c)
return s},
jE:function jE(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
Bt(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bL(new A.G(B.jh,t.e2.a(new A.nI(a)),t.vL),t.yW)
return s==null?null:new A.fu(s)},
C1(a,b){var s=A.c([],t.s)
switch(b.a){case 0:A.w6(s,a,B.iN)
break
case 1:A.w6(s,a,B.iO)
break
case 2:A.w6(s,a,B.jl)
break}return s},
w6(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.R(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
Bs(a){if(a.a!==21)return null
if(a.e)return B.eZ
if(!a.d&&a.b>=0.6&&a.c>=3)return B.f_
return B.eY},
cc:function cc(a,b){this.a=a
this.b=b},
nF:function nF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fu:function fu(a){this.a=a},
nI:function nI(a){this.a=a},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
C7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.kq(s,new A.j(o,n,m),q,p,l,j)
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
kq:function kq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Fi(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.b(B.fd)
p.k(0,q,r.b)}return p},
m3(a){var s,r,q,p,o,n=a.ga1().bK(0)
B.a.Y(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.k(0,o,A.za(a.h(0,o)))}return A.aY(r,t.N,s)},
za(a){var s
if(t.f.b(a))return A.m3(A.Fi(a))
if(t.j.b(a)){s=t.z
return A.ai(J.xs(a,A.G7(),s),s)}if(a==null||A.br(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fP)
return a}throw A.b(A.a2("presentation snapshot contains unsupported value "+J.ff(a).p(0),null,null))},
q2:function q2(a){this.a=a},
ye(a,b,c){var s=A.ww(b),r=A.ww(a)
if(c!==2)A.i(A.ah(c,"version","unsupported save version"))
return new A.fM(c,s,r)},
ww(a){var s,r,q,p,o=A.o(a).i("aa<1>"),n=A.K(new A.aa(a,o),o.i("n.E"))
B.a.Y(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.k(0,p,A.z9(a.h(0,p)))}return A.aY(s,t.N,o)},
z9(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.b(B.fG)
s.k(0,p,q.b)}return A.ww(s)}if(t.j.b(a)){r=t.z
return A.ai(J.xs(a,A.Gb(),r),r)}if(a==null||A.br(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.fR)
return a}throw A.b(A.a2("save contains unsupported value "+J.ff(a).p(0),null,null))},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(){},
eO:function eO(a,b){this.a=a
this.b=b},
xH(a,b,c,d,e,f,g,h){var s=A.c([],t.pC),r=A.c([],t.ns)
return new A.o0(a,b,c,d,e,f,g,s,r,h)},
xI(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.aJ(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.fF)
r=d.h(0,"runSeed")
q=A.aJ(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.aJ(p)||p<1||typeof o!="number")throw A.b(B.h_)
if(!isFinite(5760))throw A.b(A.ah(5760,"daySeconds","must be finite and > 0"))
n=new A.jQ(p,7,5760)
n.h6(o)
s=t.N
m=t.z
l=A.BV(a4,A.aM(a0,s,m))
k=A.Bd(l,A.aM(a,s,m),n)
j=A.xK(c)
A.BK(A.aM(a1,s,m)).kd(j)
m=A.aM(a2,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.br(f))A.i(B.fl)
e=A.C2(d.h(0,"narrative"))
if(e==null)e=A.pD(null,null,null)
return A.xH(c,q,j,n,l,k,new A.jC(i,h,g,f),e)},
Ea(a){var s
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
eA:function eA(a,b){this.a=a
this.b=b},
jP:function jP(){},
o1:function o1(a,b){this.a=a
this.b=b},
o0:function o0(a,b,c,d,e,f,g,h,i,j){var _=this
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
o2:function o2(a){this.a=a},
o3:function o3(){},
o4:function o4(){},
o5:function o5(a){this.a=a},
o6:function o6(){},
jq:function jq(a,b){this.a=a
this.b=b
this.d=null},
na:function na(a){this.a=a},
kd:function kd(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
lb:function lb(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ou:function ou(){this.b=0},
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
jI:function jI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nK:function nK(){},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function ow(){},
ov:function ov(a,b,c){this.a=a
this.b=b
this.c=c},
Gk(a){var s,r,q,p,o,n,m,l
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
return new A.ch(B.ac,p,new Uint16Array(A.a1(a.b)),new A.jc(new A.I(s.a,s.b,s.c),new A.I(s.d,s.e,s.f)))},
Gj(a){var s,r,q,p,o,n=A.c([],t.uH)
for(s=A.Ff(a,new A.vP(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jJ(o,p.c,p.e))}return n},
Ff(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(l==null){l=B.b.q(d,":")?B.b.H(d,0,B.b.bE(d,":")):null
l=new A.d9(d,l,h,A.c([],p))
s.k(0,d,l)}B.a.I(l.d,A.c([m,k,j],p))}r=A.c([],t.wf)
q=s.$ti.i("aj<2>")
q=A.K(new A.aj(s,q),q.i("n.E"))
B.a.P(q,new A.uT())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].mZ(a))
return r},
DT(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jI(r,q,p,o,n,m)},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
vP:function vP(a){this.a=a},
uT:function uT(){},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ex:function ex(a,b){this.a=a
this.b=b},
jK:function jK(){},
FG(a){var s,r,q,p=new A.ov(A.c([],t.Dl),A.c([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.Ed(p,a,B.cX[s],15.75,15.75,12.044999999999998,0.63)
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
p.ae(r,new A.Z(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ae(r,q,new A.Z(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.Z(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.Z(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ae(q,new A.Z(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ae(q,r,new A.Z(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ae(new A.Z(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.Z(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.Z(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ae(new A.Z(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.Z(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.Z(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.Z(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.Z(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ae(r,new A.Z(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ae(r,q,new A.Z(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.Z(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.Z(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ae(q,new A.Z(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ae(q,r,new A.Z(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.F5(p,15.75,15.75,12.044999999999998,16.32)
A.DW(p,15.75,15.75,16.32)
A.E9(p,15.75,15.75,12.044999999999998)
A.Eh(p,a,15.75)
A.Fb(p,15.75,15.75)
A.DS(p,15.75)
return p.kl()},
Ed(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.c([],t.il)
for(s=b6.b,r=s.length,q=B.A!==b7,p=B.n!==b7,o=B.m===b7,n=B.C===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aC(k)
switch(m){case 0:i=k.d.c===0
break
case 2:i=Math.abs(k.d.c+j.c-b9)<0.001
break
case 3:i=k.d.a===0
break
case 1:i=Math.abs(k.d.a+j.a-b8)<0.001
break
default:i=null}if(!i)continue
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.u)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.ee(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aI(i),b=J.R(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aG(i)!==b7)continue
B:{if(!p||o){a0=g+a.ag(i)
break B}if(!q||n){a0=e+a.ag(i)
break B}a0=null}B.a.l(b4,new A.ee(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.n||b7===B.m?b8:b9
r=t.i
a1=A.aN([0,s],r)
a2=A.aN([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.u)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.K(a1,a1.$ti.c)
B.a.Y(a4)
a5=A.K(a2,a2.$ti.c)
B.a.Y(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.N(b4,new A.uz(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.Eg(b5,b4,b7,b8,b9,c1)
A.Ee(b5,b4,b7,b8,b9,c1)
A.Ef(b5,b4,b7,b8,b9,c0,c1)},
Ef(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aN([0,a4===B.n||a4===B.m?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.Y(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.d(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.N(a3,new A.uy(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
Ee(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.u)(a4),++g){f=a4[g]
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
break}}if(a5!==B.n)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.A(2,a+0.18,n,r,a,a1,p)}}},
Eg(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.u)(a3),++h){g=a3[h]
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
break}if(!f)A.F9(a2,g,a4,a5,a6,a7,q)}},
F9(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
F5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.F6(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
F6(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.Z(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.Z(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ae(n,new A.Z(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ae(n,m,new A.Z(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.Z(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.Z(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ae(m,new A.Z(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ae(m,n,new A.Z(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
DW(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
E9(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Eh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.ag("hall")
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
Fb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
DS(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ee:function ee(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uz:function uz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uy:function uy(a,b,c){this.a=a
this.b=b
this.c=c},
G9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.x8(b,d,c)
if(k!=null){s=k.b
return new A.dV(B.f4,k.a,s)}r=A.Ac(b,d,c)
if(r!=null){if(r.ax)q=!r.ay
else q=!1
s=q?"close door":"open door"
return new A.dV(B.f5,r.a,s)}if(A.Ad(b,d,c)!=null)return B.f9
p=A.G8(a,b,c,d)
if(p!=null)return new A.dV(B.cj,p.a,"inspect the "+p.b)
o=A.Ab(b,c,d,e)
if(o!=null){n=e.cF(o.c)
q=o.y
m=q==null
l=m?o.a:q
return new A.dV(B.f7,l,m?"inspect the "+n.b:"inspect "+q)}return B.fa},
Ab(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mg(a5,s,4.5)
for(q=a6.mg(a4),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cF(i.c)
g=i.f.a
f=i.h7(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.j(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gau()
a0=a3.b
a1=Math.acos(B.c.D(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.mh(a5,a4,a3.a,new A.j(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
G8(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.hj(c)
if(s.length===0)return f
r=d.aC(e)
q=A.mg(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.j(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gau()
j=b.b
if(Math.acos(B.c.D(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.mh(d,c,b.a,new A.j(n,m,o)))return k}return f},
dj:function dj(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
FH(a,b){var s,r=new A.d1(new Float32Array(5376)),q=new A.d1(new Float32Array(5376)),p=new A.d1(new Float32Array(5376)),o=new A.d1(new Float32Array(5376)),n=b.d,m=a.aC(b),l=A.jY(b.y),k=A.jY(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.cO(new A.j(j,i,h),new A.j(j,i,f),new A.j(d,i,f),new A.j(d,i,h),l.c,e/c,g/c)
i+=m.b
c=k.e
q.cO(new A.j(j,i,h),new A.j(d,i,h),new A.j(d,i,f),new A.j(j,i,f),k.c,e/c,g/c)
for(s=0;s<4;++s)A.DL(p,a,b,m,B.cX[s])
for(j=a.aI(b.a),i=J.R(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
g=h.at
if(g==null)continue
A.yZ(o,b,m,h,!0)}j=B.t.aR(r.a,0,r.b)
i=B.t.aR(q.a,0,q.b)
h=B.t.aR(p.a,0,p.b)
B.t.aR(o.a,0,o.b)
return new A.qn(j,i,h)},
FE(a,b,c){var s,r,q=c.at
if(q==null)return new Float32Array(0)
s=new A.d1(new Float32Array(5376))
r=a.aC(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.z_(s,b,r,c,q)
return B.t.aR(s.a,0,s.b)},
FF(a,b){var s,r,q,p,o=new A.d1(new Float32Array(5376)),n=a.aC(b)
for(s=a.aI(b.a),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
p=q.at
if(p==null)continue
A.yZ(o,b,n,q,!1)}return B.t.aR(o.a,0,o.b)},
DL(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a5===B.n||a5===B.m?a4.a:a4.c,a0=A.c([],t.l5)
for(s=a3.a,r=a2.aI(s),q=J.R(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.aG(s)
if(o===a5)a0.push(new A.ed(p.ag(s),p.ag(s)+p.w,0,p.x))}for(s=a3.e,r=s.length,n=0;n<s.length;s.length===r||(0,A.u)(s),++n){m=s[n]
if(m.b===a5){q=m.c
p=m.d
a0.push(new A.ed(q,q+m.e,p,p+m.f))}}s=t.i
r=A.aN([0,a],s)
for(q=a0.length,p=t.n,n=0;n<a0.length;a0.length===q||(0,A.u)(a0),++n){l=a0[n]
r.I(0,A.c([l.a,l.b],p))}k=A.K(r,r.$ti.c)
B.a.Y(k)
s=A.aN([0,a4.b],s)
for(r=a0.length,n=0;n<a0.length;a0.length===r||(0,A.u)(a0),++n){l=a0[n]
s.I(0,A.c([l.c,l.d],p))}j=A.K(s,s.$ti.c)
B.a.Y(j)
for(i=0;h=i+1,h<k.length;i=h)for(g=0;f=g+1,s=j.length,f<s;g=f){r=k.length
if(!(i<r))return A.d(k,i)
e=k[i]
if(!(h<r))return A.d(k,h)
d=k[h]
if(!(g<s))return A.d(j,g)
c=j[g]
b=j[f]
if(B.a.N(a0,new A.tL(e,d,c,b)))continue
A.Fw(a1,a3,a4,a5,e,d,c,b)}A.DM(a1,a3,a4,a5,a,a0)},
DM(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tJ(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tJ(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tJ(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tJ(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
for(r=b5.length,l=0;l<b5.length;b5.length===r||(0,A.u)(b5),++l){k=b5[l]
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
A.aT(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.C(a9),o=r.i("l(1)").a(new A.tK(b3)),a9=B.a.gu(a9),r=new A.S(a9,o,r.i("S<1>")),o=b2.c,i=b3!==B.n,e=b3===B.m,c=b2.a;r.m();){b=a9.gn()
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
A.DN(b0,b1,b2,b3,b,p)}},
DN(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
if(a2==="hall"||a7.r||a7.f<1)return
s=a6===B.n||a6===B.m?a5.a:a5.c
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
tJ(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.Fm(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.aT(a,b,c,d,n,o,g,h,i,j)}},
Fm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.c([new A.fX(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.c([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.u)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fX(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fX(n,j))}h=p}return h},
aT(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.an(a,new A.j(r+e,q+g,p),new A.j(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.an(a,new A.j(r+e,q+g,s-i),new A.j(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.an(a,new A.j(s-i,q+g,p+e),new A.j(s,q+h,p+f),j)
return
case 3:A.an(a,new A.j(r,q+g,p+e),new A.j(r+i,q+h,p+f),j)
return}},
an(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.j(o,n,m),k=c.a,j=new A.j(k,n,m),i=c.b,h=new A.j(k,i,m),g=new A.j(o,i,m)
m=c.c
s=new A.j(o,n,m)
r=new A.j(k,n,m)
q=new A.j(k,i,m)
p=new A.j(o,i,m)
a.aD(j,l,g,h,d)
a.aD(s,r,q,p,d)
a.aD(l,s,p,g,d)
a.aD(r,j,h,q,d)
a.aD(l,j,r,s,d)
a.aD(g,p,q,h,d)},
Fw(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.j(i+e,h+a0,g)
break
case 2:s=new A.j(i+f,h+a0,g+c.c)
break
case 1:s=new A.j(i+c.a,h+a1,g+f)
break
case 3:s=new A.j(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.j(i+f,h+a0,g)
break
case 2:r=new A.j(i+e,h+a0,g+c.c)
break
case 1:r=new A.j(i+c.a,h+a1,g+e)
break
case 3:r=new A.j(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.j(i+f,h+a1,g)
break
case 2:q=new A.j(i+e,h+a1,g+c.c)
break
case 1:q=new A.j(i+c.a,h+a0,g+e)
break
case 3:q=new A.j(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.j(i+e,h+a1,g)
break
case 2:p=new A.j(i+f,h+a1,g+c.c)
break
case 1:p=new A.j(i+c.a,h+a0,g+f)
break
case 3:p=new A.j(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.j(0,0,0.003)
break
case 2:o=new A.j(0,0,-0.003)
break
case 1:o=new A.j(-0.003,0,0)
break
case 3:o=new A.j(0.003,0,0)
break
default:o=k}n=b.x
m=A.jY(n).e
a.cO(s.ai(0,o),r.ai(0,o),q.ai(0,o),p.ai(0,o),A.jY(n).c,(f-e)/m,(a1-a0)/m)
l=A.Fx(b,d)
switch(j){case 0:o=new A.j(s.a,s.b,s.c-l)
break
case 2:o=new A.j(r.a,s.b,s.c)
break
case 1:o=new A.j(s.a,s.b,p.c)
break
case 3:o=new A.j(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.j(r.a,q.b,s.c)
break
case 2:j=new A.j(s.a,q.b,s.c+l)
break
case 1:j=new A.j(s.a+l,q.b,r.c)
break
case 3:j=new A.j(p.a,q.b,r.c)
break
default:j=k}A.an(a,o,j,A.Fc(A.jY(n).c,0.68))},
Fc(a,b){var s,r=new A.uR(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.hC()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.hC()
r=r.$1(a&255)
if(typeof r!=="number")return A.v7(r)
return(q<<16|s<<8|r)>>>0},
Fx(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
yZ(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aG(d),b=a3.ag(d),a=b+a3.w
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
A.an(a0,new A.j(r+l,s,d),new A.j(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(l,s,d),new A.j(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.an(a0,new A.j(r+n,s+m,d),new A.j(r+h,j,i),q)
A.an(a0,new A.j(k,s,d),new A.j(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.an(a0,new A.j(r+l,s,k),new A.j(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(l,s,k),new A.j(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.an(a0,new A.j(r+n,s+m,k),new A.j(r+h,i,d),q)
A.an(a0,new A.j(j,s,k),new A.j(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.an(a0,new A.j(n,s,d+k),new A.j(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(n,s,k),new A.j(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.an(a0,new A.j(n,s+e,d+m),new A.j(r,j,d+l),q)
A.an(a0,new A.j(n,s,i),new A.j(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.an(a0,new A.j(r,s,d+l),new A.j(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.an(a0,new A.j(r,s,l),new A.j(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.an(a0,new A.j(r,s+e,d+n),new A.j(k,j,d+m),q)
A.an(a0,new A.j(r,s,i),new A.j(k,s+0.05,l),q)
break}if(a4)A.z_(a0,a1,a2,a3,q)
A.DK(a0,a1,a2,a3)},
DK(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,c=a8.ag(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aG(d)
d=a0-0.045
if(0>d)d=0
r=s!==B.n
q=!r||s===B.m?a7.a:a7.c
p=a0+0.045
q=q<p?q:p
p=a2-0.08
if(0.12>p)p=0.12
o=a1-0.05
n=a2+0.08
A.aT(a5,a6,a7,s,d,q,p,o<n?o:n,0.165,7232306)
d=a0-0.035
if(0>d)d=0
q=!r||s===B.m?a7.a:a7.c
p=a0+0.035
q=q<p?q:p
p=a2-0.035
if(0.12>p)p=0.12
n=a2+0.035
A.aT(a5,a6,a7,s,d,q,p,o<n?o:n,0.18,9073730)
d=a0-0.01
if(0>d)d=0
q=!r||s===B.m?a7.a:a7.c
p=a0+0.01
q=q<p?q:p
p=a2-0.065
if(0.12>p)p=0.12
n=a2-0.045
A.aT(a5,a6,a7,s,d,q,p,o<n?o:n,0.168,1710100)
d=a8.at==="kit-front-door-recessed"
if(d){q=a0-0.22
if(0>q)q=0
p=!r||s===B.m?a7.a:a7.c
n=a0+0.02
p=p<n?p:n
n=a2+0.25
if(0.12>n)n=0.12
m=a2+0.29
A.aT(a5,a6,a7,s,q,p,n,o<m?o:m,0.17,9073730)}l=a-0.11
k=a1-0.2
j=a3<a1?a3:a1
k=k<j?k:j
for(a3=[0.46,k*0.5,k-0.46],q=l+0.026,p=a7.c,o=l-0.026,n=a1-0.08,m=s===B.m,i=a7.a,h=0;h<3;++h){g=a3[h]
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
z_(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aG(o),m=d.ag(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.an(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.an(a,new A.j(p,s,o-d.w),new A.j(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.an(a,new A.j(p-d.w,s,o),new A.j(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.an(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.an(a,new A.j(p,s,o),new A.j(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.an(a,new A.j(p,s,o-0.055),new A.j(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.an(a,new A.j(p-0.055,s,o),new A.j(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.an(a,new A.j(p,s,o),new A.j(p+0.055,s+r,o+d.w),e)
break}},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
tL:function tL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tK:function tK(a){this.a=a},
uR:function uR(a){this.a=a},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a,b){this.a=a
this.b=b},
xK(a){var s=A.c([],t.eY),r=A.c([],t.J),q=t.N
q=new A.os(s,r,A.c([],t.DZ),A.m(q,t.W),A.m(q,t.T),new A.ou())
q.it()
q.is()
q.il()
q.im()
q.j0()
s=s.length
if(s!==8)A.i(A.k("expected eight rooms, got "+s))
if(q.ghc()<1||11<q.ghc())A.i(A.k("showcase apertures must expose a stable inside/outside split"))
if(r.length!==11)A.i(A.k("expected eleven showcase portals"))
q.jY()
q.jW()
return q},
os:function os(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oK:function oK(a){this.a=a},
oL:function oL(){},
oM:function oM(){},
oJ:function oJ(){},
oN:function oN(a){this.a=a},
oO:function oO(){},
mg(a,b,c){var s=a.aC(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
mh(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.EF(a,s,c,d)},
EF(a,b,c,d){var s,r,q,p,o=a.aC(b),n=d.ao(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.tQ(a,b,o,B.n,r,q,p,c,n,m))return!0
if(A.tQ(a,b,o,B.m,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.tQ(a,b,o,B.C,s,r,q,c,n,m))return!0
if(A.tQ(a,b,o,B.A,s+o.a,r,q,c,n,m))return!0
return!1},
tQ(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.ai(0,a6.aj(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.n||a1===B.m
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aI(m),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aG(m)===a1){g=q.ag(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05){if(q.ax)q=!q.ay
else q=!1
if(q)return!1
else return!0}}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
x8(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.mg(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.u)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.j(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gau()
f=a.b
if(Math.acos(B.c.D(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.mh(a0,a1,a.a,new A.j(h,g,i)))continue
m=d
l=j}}return l},
Ac(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mg(b,j,4.5):4.5
for(s=b.aI(c),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.mj(c,o)
m=a.a
l=new A.j(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zn(l,k,a,i,0.5236)||k>=q)continue
if(!A.mh(b,c,a.a,n))continue
q=k
p=o}return p},
Ad(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mg(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.Fy(b,h,m)
k=a.a
j=new A.j(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zn(j,i,a,s,0.5236)||i>=p)continue
if(!A.mh(b,c,a.a,l))continue
p=i
o=m}return o},
zn(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.D(a.gau().c0(c.b),-1,1))<=e},
Fy(a,b,c){var s=a.aC(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.j(q.a+r,p,q.c)
break
case 2:q=new A.j(q.a+r,p,q.c+s.c)
break
case 1:q=new A.j(q.a+s.a,p,q.c+r)
break
case 3:q=new A.j(q.a,p,q.c+r)
break
default:q=null}return q},
nJ:function nJ(){this.a=null
this.b=0},
rb:function rb(){},
rc:function rc(){},
BP(a){var s=A.j6(a,"inventory asset"),r=A.dK(s,"id"),q=A.dK(s,"kind")
A.dK(s,"source")
A.dK(s,"proxy")
A.dK(s,"pivot")
s=A.j6(s.h(0,"bounds"),"inventory bounds")
return new A.cV(r,q,new A.oW(A.mf(s.h(0,"min"),"bounds.min"),A.mf(s.h(0,"max"),"bounds.max")))},
BQ(a){var s,r,q,p,o,n,m,l,k="stateKey",j=A.j6(a,"inventory placement"),i=A.j6(j.h(0,"visibility"),"placement visibility"),h=A.j6(j.h(0,"interaction"),"placement interaction"),g=j.h(0,"clearance"),f=A.dK(j,"id"),e=A.dK(j,"roomId"),d=A.dK(j,"assetId")
A.dK(j,"role")
s=typeof j.h(0,"socket")=="string"?A.r(j.h(0,"socket")):null
j=A.j6(j.h(0,"transform"),"inventory transform")
r=A.mf(j.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.i(B.fJ)
q=A.mf(j.h(0,"position"),"transform.position")
p=A.mf(j.h(0,"rotation"),"transform.rotation")
o=A.dK(i,"layer")
if(typeof i.h(0,k)=="string")A.r(i.h(0,k))
n=J.ad(h.h(0,"pickable"),!0)
m=typeof h.h(0,"focusId")=="string"?A.r(h.h(0,"focusId")):null
l=t.P.b(g)?A.EU(g,"radius"):0
return new A.cx(f,e,d,s,new A.oY(q,p,r),o,n,m,l)},
j6(a,b){return t.P.b(a)?a:A.dH(b+" is not an object")},
dK(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dH(b+" is not a string")},
EU(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dH(b+" is not finite")},
mf(a,b){var s
if(t.j.b(a)){s=J.aF(a)
s=s.gt(a)!==3||s.N(a,new A.uY())}else s=!0
if(s)return A.dH(b+" is not a finite vec3")
s=J.aF(a)
return new A.j(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
dH(a){return A.i(A.a2(a,null,null))},
ox:function ox(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oA:function oA(a){this.a=a},
oy:function oy(a){this.a=a},
oz:function oz(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.b=b
this.f=c},
cx:function cx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
oY:function oY(a,b,c){this.a=a
this.b=b
this.c=c},
oW:function oW(a,b){this.a=a
this.b=b},
uY:function uY(){},
oX:function oX(a){this.a=a},
dt:function dt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oB:function oB(a){this.a=a},
oC:function oC(a){this.a=a},
cY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bw(i,a,b,e,f,k,l,p,g,!1,!1,d,!1,c,m,j)},
jN:function jN(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bw:function bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fC:function fC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cE:function cE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
BJ(a){return A.BI(a)},
BI(a){var s,r,q,p,o,n,m=A.zu(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.zu(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.fE)
k.k(0,r.a,q)}s=A.wW(m,"id")
r=A.wW(m,"roomId")
p=A.wW(m,"placementId")
o=A.Fv(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h4("gain is not a number")
return new A.cU(s,r,p,o,n,A.aY(k,l,l))},
zu(a,b){return t.P.b(a)?a:A.h4(b+" is not an object")},
wW(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h4(b+" is not a string")},
Fv(a,b){var s
if(t.j.b(a)){s=J.aF(a)
s=s.gt(a)!==3||s.N(a,new A.uX())}else s=!0
if(s)throw A.b(A.a2(b+" must be a numeric vec3",null,null))
s=J.aF(a)
return new A.j(A.a6(s.h(a,0)),A.a6(s.h(a,1)),A.a6(s.h(a,2)))},
h4(a){return A.i(A.a2(a,null,null))},
oE:function oE(a,b,c){this.a=a
this.b=b
this.c=c},
oF:function oF(a){this.a=a},
oG:function oG(a){this.a=a},
oH:function oH(){},
cU:function cU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ot:function ot(){this.b=this.a=null},
eD:function eD(a){this.a=a},
oD:function oD(){this.b=this.a=null},
cT:function cT(a,b){this.a=a
this.b=b},
uX:function uX(){},
xL(a,b,c,d,e,f){var s=t.N
return new A.oI(e,f,c,a,A.aY(A.aM(d,s,s),s,s),A.ai(b,s))},
xM(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.k(0,p.a,new A.hZ(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l){j=o[l]
i.k(0,j.a,new A.hN(j.d,j.r))}return A.xL(a.r.b,B.o,i,B.d4,h,s)},
BK(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.jD
r=a3.h(0,"mantleHistory")
if(r==null)r=B.iS
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aJ(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.fC)
p=t.N
o=A.m(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.cm)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.br(j)||!A.br(i))A.i(B.cm)
o.k(0,k,new A.hZ(j,i))}h=A.m(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.br(l.b))throw A.b(B.fz)
h.k(0,k,A.P(l.b))}g=A.m(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.ck)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.br(f)||!A.br(e))A.i(B.ck)
g.k(0,k,new A.hN(f,e))}d=A.m(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.h8)
d.k(0,n,A.r(p.b))}c=A.c([],t.s)
for(q=J.R(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.b(B.fb)
B.a.l(c,b)}return A.xL(a2,c,g,d,o,h)},
wR(a,b){return a.a.a===b.a&&a.a7(0,b.gap(b))},
oI:function oI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hZ:function hZ(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
jY(a){var s=B.bj.h(0,a)
if(s==null)throw A.b(A.k("Unknown house surface material: "+a))
return s},
bi:function bi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Bq(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hM(e,A.C(e).c)
q=new A.ef()
q.bO((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.ht(a,q,2,r,1+s,A.aN(["time"],t.N))
break
case 3:A.ht(a,q,3,r,1+s,A.aN(["place"],t.N))
break
case 4:A.ht(a,q,4,r,2+s,p)
A.Bm(a,q,4)
break
case 5:A.ht(a,q,5,r,s,p)
A.Bk(a,q,5)
break
case 6:A.ht(a,q,6,r,s,p)
A.Bl(a,q)
A.Bp(a,q,6)
break
case 7:A.Bn(a,q,7)
break
default:if(s>0)A.ht(a,q,b,r,s,p)}},
Bj(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.Bo(a,b,c))return!1
return!0},
ht(a,b,c,d,e,f){var s,r,q,p,o=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(A.Bj(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cY(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.xE(a,b,o[p],f)}},
xE(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gX(o).a,n,n)
if(d==null)s=A.c(B.B.slice(0),t.s)
else{n=t.vY
s=A.K(new A.G(B.B,t.Ag.a(new A.nE(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.aP(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.ee(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aP(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.k(0,r,p[n])}a.dw(c.a,m,B.a.gX(o).b)},
Bm(a,b,c){var s=A.xF(a,b,c)
if(!a.bX(s))return
a.eo(c,t.G.a(s),0,B.b2,null)},
xF(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.B[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aP(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.k(0,r,q[o])}}return m},
Bk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.r)
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
o=A.aM(B.a.gX(i).a,s,s)
r=p.c
n=A.aM(B.a.gX(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.B[m]
k=o.h(0,l)
j=s.ee(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aP(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.k(0,l,j[k])}}a.dw(q.a,o,B.a.gX(i).b)
a.dw(p.a,n,B.a.gX(r).b)},
Bl(a,b){var s,r,q=A.c([],t.r)
for(s=a.b,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aP(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.a5(0,q[r].a)},
Bp(a,b,c){var s,r,q=A.c([],t.r)
for(s=a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aP(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.xE(a,b,q[s],null)},
Bn(a,b,c){var s=c+1,r=A.xF(a,b,s)
if(!a.bX(r))return
a.eo(s,t.G.a(r),0,B.b2,null)},
Bo(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gX(b.c).c===B.ay}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gX(b.c).c===B.ay}if(c===21)return b.e
return!1},
nE:function nE(a){this.a=a},
CN(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p=A.ap(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rN(n)},
ph(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.B[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.k9(A.aY(p,q,q),b,c)},
xY(a){var s=t.N
return A.ph(t.P.a(a.h(0,"fields")).bG(0,new A.pi(),s,s),A.a6(a.h(0,"shakiness")),A.Bv(B.iL,A.r(a.h(0,"hand")),t.qX))},
Bu(a){var s,r,q,p,o=a.h(0,"margin"),n=A.e(a.h(0,"ordinal")),m=A.e(a.h(0,"day")),l=A.c([],t.Bv)
for(s=J.R(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.xY(r.a(s.gn())))
s=A.at(a.h(0,"corroborator"))
q=A.P(a.h(0,"locked"))
p=A.z7(a.h(0,"lastReadDay"))
return new A.bV(n,m,l,s,q,p,o==null?null:A.xY(r.a(o)))},
dX:function dX(a,b){this.a=a
this.b=b},
rN:function rN(a){this.a=a},
k9:function k9(a,b,c){this.a=a
this.b=b
this.c=c},
pi:function pi(){},
pj:function pj(a){this.a=a},
bV:function bV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xV(a){return new A.p0(a,A.m(t.S,t.g),A.a_(t.N),A.c([],t.t))},
BV(a,b){var s,r,q,p,o=A.xV(a)
o.e=A.e(b.h(0,"nextOrdinal"))
o.f=A.e(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.AK(s.a(b.h(0,"tags")),t.N))
for(s=J.R(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.Bu(r.a(s.gn()))
q.k(0,p.a,p)}return o},
p0:function p0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
p7:function p7(a,b){this.a=a
this.b=b},
mW:function mW(){},
hk:function hk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e
_.w=f
_.x=g},
mX:function mX(){},
pc:function pc(){},
pb:function pb(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
pZ:function pZ(){},
pY:function pY(a,b,c){this.b=a
this.c=b
this.d=c},
q_:function q_(){},
C6(a,b,c){return B.kB},
ko:function ko(a,b){this.a=a
this.b=b},
q0:function q0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
q1:function q1(){},
k8:function k8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q7:function q7(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=b},
yc(a){if(!isFinite(0))A.i(A.ah(0,"interpolation",null))
return new A.qk(a)},
kB:function kB(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
qk:function qk(a){this.a=a},
kC:function kC(a,b,c){this.a=a
this.b=b
this.c=c},
yb(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hM(c,A.C(c).c)
r=A.K(r,A.o(r).c)
B.a.Y(r)
s=t.N
r=A.ai(r,s)
r=new A.qj(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aY(l,s,t.X))
r.i8(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Cq(a,b,c,d,e){var s=A.m6("RENDERER_SHA"),r=A.m6("GAME_SHA"),q=A.m6("DART_SDK_VERSION")
return A.yb(a,"f7b4628701e3-2e2444bc2833-dirty",b,!1,d,r,A.m6("LOCKFILE_SHA256"),e,A.m6("PROJECT_VERSION"),s,q,null)},
m6(a){var s=B.ju.h(0,a)
return s.length===0?null:s},
qj:function qj(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ql:function ql(a){var _=this
_.a=a
_.d=_.c=_.b=0},
r6:function r6(a){this.a=a},
a0(a,b,c,d,e,f,g,h,i,j){return new A.e7(e,g,a,f,i,h,j,c,c,b)},
cG:function cG(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c,d,e,f,g,h,i,j){var _=this
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
r7:function r7(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
ra:function ra(a){this.a=a},
r9:function r9(a){this.a=a},
r8:function r8(a){this.a=a},
xB(a,b,c,d,e,f,g){var s=A.K(f,t.ho)
if(b<0||a<0||e<0)A.i(A.a2("saved day-loop resources must not be negative",null,null))
return new A.nw(c,g,b,a,e,d===!0,s)},
Bd(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.fr)
s=A.c([],t.El)
for(r=J.R(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.b(B.fD)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aJ(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.fn)
f=A.bL(new A.G(B.cQ,q.a(new A.nx(h)),p),o)
e=A.bL(new A.G(B.cW,n.a(new A.ny(g)),m),l)
if(f==null||e==null)throw A.b(B.h3)
B.a.l(s,new A.fO(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aJ(d)||!A.aJ(c)||!A.aJ(b)||!A.br(a))throw A.b(B.fL)
return A.xB(c,d,a1,a,b,s,a3)},
bO:function bO(a,b){this.a=a
this.b=b},
bz:function bz(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
nw:function nw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nx:function nx(a){this.a=a},
ny:function ny(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
rS:function rS(a,b){this.b=a
this.c=b},
eW:function eW(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
oP:function oP(a){this.c=a},
oT:function oT(a,b){this.a=a
this.b=b},
oU:function oU(){},
wD(a){var s,r,q,p=A.c([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.h0)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qo:function qo(){},
d_:function d_(){},
qp:function qp(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
Em(a){var s,r=A.c([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uA(s).$0())
return r},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rO:function rO(a){this.b=a},
uA:function uA(a){this.a=a},
pD(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.I(0,a)
s=A.m(r,r)
if(b!=null)s.I(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.I(0,c)
return new A.pC(q,s,r)},
C2(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aJ(s)||s!==1)return l
r=A.y4(a.h(0,"choices"))
q=A.y4(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.BA(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pD(r,q,p)},
y4(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.r(q.b))}return r},
BA(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aJ(r)||r<1||!A.aJ(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cO(s,r,q,p)},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(){},
pF:function pF(){},
pG:function pG(){},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pW:function pW(a){this.a=a},
pX:function pX(a){this.a=a},
fQ(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
rg:function rg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rh:function rh(){},
ri:function ri(){},
eU:function eU(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a,b){this.a=a
this.b=b},
l6:function l6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rj:function rj(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
rk:function rk(){},
rl:function rl(){},
jd:function jd(a){this.a=a},
vU:function vU(a,b,c){this.b=a
this.e=b
this.f=c},
AR(a){var s,r,q,p
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fe)
s=new A.mo()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.ws(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dL(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aV(B.bf,new A.mm(a),new A.mn()))},
cM:function cM(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mo:function mo(){},
mm:function mm(a){this.a=a},
mn:function mn(){},
mz:function mz(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mB:function mB(a){this.a=a},
mA:function mA(a,b){this.a=a
this.b=b},
AX(a){var s
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fI)
s=new A.mM()
return new A.dM(s.$1$2(B.bd,a.h(0,"output"),t.xs),s.$1$2(B.b9,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.b8,a.h(0,"reverb"),t.gc),s.$1$2(B.b6,a.h(0,"ducking"),t.ul))},
cu:function cu(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
mM:function mM(){},
mN:function mN(a,b){this.a=a
this.b=b},
mO:function mO(a){this.a=a},
mZ:function mZ(a){this.a=a
this.b=null},
n2(a,b,c){var s
b.C()
if(c<1||c>6)throw A.b(A.ah(c,"level","must be between 1 and 6"))
s=A.z(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.n0(s,b)
return s},
dQ(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.z(a,"button","brush-button brush-state-"+s.b,r)
A.n0(q,b)
q.type="button"
q.disabled=s===B.as
q.addEventListener("click",A.U(new A.n1(c)))
return q},
B0(a,b,c,d){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.as
A.n0(s,b)
s.addEventListener("change",A.U(new A.n5(d,s)))
return s},
B_(a,b,c,d,e,f){var s,r
b.C()
s=A.a(a.createElement("input"))
s.type="range"
s.min=A.y(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.as
A.n0(s,b)
s.addEventListener("input",A.U(new A.n4(s,e)))
return s},
vW(a,b){var s=B.b.hR(A.r(a.className),A.ya("\\s+")),r=A.C(s),q=r.i("G<1>"),p=A.K(new A.G(s,r.i("l(1)").a(new A.n3()),q),q.i("n.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.W(p," ")
a.setAttribute("data-brush-state",s)},
n0(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gk5())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.as)a.setAttribute("aria-disabled","true")},
n1:function n1(a){this.a=a},
n5:function n5(a,b){this.a=a
this.b=b},
n4:function n4(a,b){this.a=a
this.b=b},
n3:function n3(){},
dO:function dO(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
n7:function n7(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
n8:function n8(a){this.a=a},
xz(a){var s=!1
if(a.length!==0)if(!B.dB.q(0,a))s=B.lz.q(0,a)||B.lr.q(0,a)||B.ly.q(0,a)||!B.b.T(a,"Mouse")
return s},
E5(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.F(a,A.o(a).i("F<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.ap(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
EL(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.F(a,A.o(a).i("F<1,2>"))
p=J.R(p==null?A.c([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.c([r.b],s))}return q},
fp(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fB(B.jr,s,r)
if(b!=null)q.I(0,b)
q.I(0,A.EL(a))
s=new A.fo(g,d,h,e,f,c,A.aY(A.E5(q),s,r))
s.C()
return s},
Ba(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.cl)
s=a.h(0,"version")
r=J.eo(s)
if(!r.a4(s,1)&&!r.a4(s,2))throw A.b(B.cl)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.fy)
if(typeof m=="string")q.k(0,n,A.c([m],r))
else if(p.b(m)&&J.AL(m,new A.nl())){o=A.c([],r)
for(l=J.R(m);l.m();)o.push(A.r(l.gn()))
q.k(0,n,o)}else throw A.b(B.fi)}j=A.a6(a.h(0,"horizontalSensitivity"))
r=A.a6(a.h(0,"verticalSensitivity"))
p=A.P(a.h(0,"invertX"))
o=A.P(a.h(0,"invertY"))
return A.fp(null,q,A.P(a.h(0,"holdToInteract")),j,p,o,2,r)},
wu(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.K(r.b,p)
o.k(0,q,r)}return o},
wN(a,b){var s,r,q,p=A.c([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
x_(a,b){var s,r,q,p=A.c([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
fo:function fo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nn:function nn(){},
nm:function nm(a){this.a=a},
no:function no(){},
np:function np(){},
nq:function nq(){},
nl:function nl(){},
dN:function dN(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.c=b},
jv:function jv(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
B9(a){var s=t.N,r=t.m
r=new A.hr(A.fp(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.i1(a)
return r},
hr:function hr(a,b,c,d,e,f){var _=this
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
nj:function nj(a,b){this.a=a
this.b=b},
nk:function nk(a){this.a=a},
ni:function ni(a,b){this.a=a
this.b=b},
ng:function ng(a,b){this.a=a
this.b=b},
nh:function nh(a,b){this.a=a
this.b=b},
Bb(a){var s=new A.nr(a,A.a(a.createElement("div")))
s.aS(a)
s.i2(a)
return s},
nr:function nr(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
ns:function ns(a){this.a=a},
Bh(a){var s=new A.nA(A.z(a,"div","door",null))
s.i4(a)
return s},
xC(a){var s,r,q
if(a.length===0)return""
s=A.c([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.W(s,"; ")+"."},
nA:function nA(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
nB:function nB(a){this.a=a},
nC:function nC(a,b){this.a=a
this.b=b},
nD:function nD(a,b){this.a=a
this.b=b},
Br(a){var s=new A.nG(a,A.a(a.createElement("div")))
s.aS(a)
s.i5(a)
return s},
nG:function nG(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
nH:function nH(a){this.a=a},
o7:function o7(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
o8:function o8(){},
BD(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.o9(a.b===B.ct,a.c===B.cx,s,a.e===B.cu,a.f===B.cr,a.r===B.cz,a.w,a.x)},
o9:function o9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vX(a,b,c,d,e,f,g,h,i,j,k){return new A.fw(e,g,k,f,b,h,d,c,a,i,j)},
BE(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fQ)
s=new A.oa(a)
r=a.h(0,"contextualReminders")
if(!A.br(r))throw A.b(B.h1)
q=!A.br(a.h(0,i))||A.P(a.h(0,i))
p=s.$1$2("interactionMode",B.be,t.bK)
o=s.$1$2("promptDensity",B.bi,t.dn)
n=s.$1$2("textPacing",B.bg,t.j_)
m=s.$1$2("journalLayout",B.ba,t.gm)
l=s.$1$2("confirmations",B.b4,t.aJ)
k=s.$1$2("saveFeedback",B.bb,t.mx)
j=s.$1$2("focusLossBehavior",B.aA,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.b7,t.vS):B.aV
return A.vX(s,l,r,j,p,m,o,k,q,A.br(a.h(0,g))&&A.P(a.h(0,g)),n)},
dm:function dm(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
fw:function fw(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k},
oa:function oa(a){this.a=a},
ob:function ob(a,b){this.a=a
this.b=b},
oc:function oc(a){this.a=a},
xJ(a){var s,r,q,p,o,n,m,l,k,j
if(!t.f.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fH)
s=B.a.aV(B.cR,new A.om(a),new A.on())
r=A.r(a.h(0,"renderScale"))
q=A.P(a.h(0,"dynamicResolution"))
p=A.r(a.h(0,"frameTarget"))
o=A.r(a.h(0,"antialiasing"))
n=A.r(a.h(0,"textureQuality"))
m=A.at(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.at(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.at(a.h(0,"shadowQuality"))
j=new A.dW(1,s,r,q,p,o,n,m,l,k==null?"profile":k)
j.C()
return j},
fy(a,b){var s=b==null?B.b1:b
return new A.oo(s,a==null?B.b1:a)},
A6(a,b){var s,r,q
a.C()
s=A.c([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.du(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.du("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.fB(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cI&&b.a<2){q=q.fC(B.b0)
B.a.l(s,"High preset was reduced to Standard")}return new A.oh(q,A.ai(s,t.N))},
cv:function cv(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c,d,e,f,g,h,i,j){var _=this
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
om:function om(a){this.a=a},
on:function on(){},
oo:function oo(a,b){this.a=a
this.b=b},
og:function og(a,b){this.a=a
this.b=b},
oh:function oh(a,b){this.a=a
this.b=b},
BG(a){var s=new A.hC(A.m(t.N,t.m),B.b1,a,A.a(a.createElement("div")))
s.aS(a)
s.i6(a)
return s},
hC:function hC(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
ok:function ok(a){this.a=a},
ol:function ol(a){this.a=a},
oj:function oj(a,b,c){this.a=a
this.b=b
this.c=c},
oi:function oi(a){this.a=a},
je:function je(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
op:function op(){this.c=0},
BH(a){var s=new A.oq(a,A.a(a.createElement("div")))
s.aS(a)
s.i7(a)
return s},
oq:function oq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
or:function or(a){this.a=a},
p1:function p1(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
p2:function p2(a){this.a=a},
p3:function p3(a){this.a=a},
p4:function p4(a,b,c){this.a=a
this.b=b
this.c=c},
p5:function p5(){},
p6:function p6(){},
cX:function cX(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pL:function pL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
z(a,b,c,d){var s=A.a(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zf(a){var s,r,q,p=A.a(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(p.length);++r){q=A.E(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hX:function hX(){},
bj:function bj(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
pR:function pR(){},
pS:function pS(){},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
pQ:function pQ(a){this.a=a},
pT:function pT(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
pU:function pU(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pV:function pV(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.b=b},
q6:function q6(a){this.a=a
this.b=null},
Ct(a){var s=new A.qw(a,A.a(a.createElement("div")))
s.aS(a)
s.i9(a)
return s},
qw:function qw(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qx:function qx(a,b){this.a=a
this.b=b},
qy:function qy(a){this.a=a},
kF(a,b){var s=t.N,r=t.m
r=new A.fN(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.vQ(),B.ap,A.m(s,r),A.m(s,r),B.aN,A.m(s,r),a,A.a(a.createElement("div")))
r.aS(a)
r.ia(a,b)
return r},
fN:function fN(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.k2=_.k1=_.id=null
_.k3=f
_.k4=g
_.ok=h
_.p1=i
_.p2=j
_.p3=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
qX:function qX(a){this.a=a},
qY:function qY(a){this.a=a},
qZ:function qZ(a,b){this.a=a
this.b=b},
r_:function r_(a){this.a=a},
r0:function r0(a){this.a=a},
qP:function qP(a,b){this.a=a
this.b=b},
qQ:function qQ(a,b){this.a=a
this.b=b},
qO:function qO(a){this.a=a},
qR:function qR(a){this.a=a},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qS:function qS(a,b){this.a=a
this.b=b},
qT:function qT(a,b){this.a=a
this.b=b},
qU:function qU(a,b){this.a=a
this.b=b},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
qI:function qI(a){this.a=a},
qJ:function qJ(a){this.a=a},
qK:function qK(a){this.a=a},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
qE:function qE(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(a){this.a=a},
qB:function qB(a){this.a=a},
qC:function qC(a){this.a=a},
qD:function qD(a){this.a=a},
qW:function qW(a,b,c){this.a=a
this.b=b
this.c=c},
qV:function qV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r2(a){return B.a.aV(B.D,new A.r3(a),new A.r4(a))},
Cu(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
q.k(0,r.a,r.e)}return q},
dx(a,b){var s=t.z
s=A.fB(A.Cu(),s,s)
if(a!=null)s.I(0,a)
s=new A.r1(b,A.aY(s,t.N,t.K))
s.ib(a,b)
return s},
yg(a){var s,r=t.f
if(!r.b(a)||!J.ad(a.h(0,"version"),1))throw A.b(B.fZ)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.fq)
return A.dx(A.aM(s,t.N,t.K),A.e(a.h(0,"version")))},
by:function by(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
b_:function b_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
r3:function r3(a){this.a=a},
r4:function r4(a){this.a=a},
r1:function r1(a,b){this.a=a
this.b=b},
wb(a,b){var s=b==null?A.dx(null,1):b
return new A.r5(s,a==null?A.dx(null,1):a)},
Cv(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.D[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.eI(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cR(r)
J.bs(l,s.a,r)}catch(n){if(!(A.ao(n) instanceof A.H))throw n}}m=A.dx(l,1)
return A.wb(m,m)},
r5:function r5(a,b){this.a=a
this.b=b},
Cw(a){var s=new A.rd(a,A.a(a.createElement("div")))
s.aS(a)
s.ic(a)
return s},
rd:function rd(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
AU(a){var s,r,q,p,o,n,m,l,k,j,i=A.c([],t.Fg)
for(s=a.d,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cs(p+m+":"+k,m,l.a,l.b,j))}}B.a.P(i,new A.mx())
return new A.mw(A.ai(i,t.bC),A.a_(t.N))},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mw:function mw(a,b){this.a=a
this.b=b},
my:function my(){},
mx:function mx(){},
CM(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.mX
s=t.L
r=A.m(s,t.q1)
q=A.o(a).i("aa<1>")
p=A.K(new A.aa(a,q),q.i("n.E"))
B.a.Y(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.ba(new A.bm(B.mF,k+" has an out-of-range authored day "+h+"."))
g=A.CL(k,h,i.b,m)
if(g instanceof A.ba)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bQ(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.af(o,o.r,o.e,A.o(o).i("af<2>"));o.m();){n=o.d
J.hi(e.ce(n.b,new A.rH()),n)}o=A.aY(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.F(e,e.$ti.i("F<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.ap(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.l4(new A.l3(r,A.a_(a),A.a_(s),o,q,A.c([],t.Dc),B.a3,A.pD(b,b,b)))},
CL(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cO[p]
n=o.b
m=n+"."
l=A.c([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.du(B.b.b0(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.ba(new A.bm(B.mG,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cV
B.a.l(l,new A.c4(g,i.b,f))}if(l.length===0)continue
B.a.P(l,new A.rE())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.ba(new A.bm(B.dU,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.ba(new A.bm(B.dU,a+" day "+s+" has no authored tiers."))
return new A.lz(c)},
l3:function l3(a,b,c,d,e,f,g,h){var _=this
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
rK:function rK(a){this.a=a},
rJ:function rJ(a){this.a=a},
rL:function rL(a){this.a=a},
rF:function rF(a){this.a=a},
rG:function rG(){},
rI:function rI(a){this.a=a},
rH:function rH(){},
rD:function rD(a){this.a=a},
rC:function rC(a){this.a=a},
rE:function rE(){},
l4:function l4(a){this.a=a},
lz:function lz(a){this.a=a},
FS(a){var s,r,q,p=A.a_(t.N)
for(s=new A.F(a,A.o(a).i("F<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaE(),q=q.gu(q);q.m();)if(q.gn().ga1().N(0,new A.v5())){p.l(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.Y(s)
return s},
FR(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.ap(b,!0,s)
B.a.Y(r)
q=new A.ef()
q.bO((a^913741)>>>0)
p=q.aP(4)
if(!(p>=0&&p<4))return A.d(B.cN,p)
o=B.cN[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.ap(r,!0,s)
B.a.cY(m,q)
s=A.kO(m,0,A.fb(n,"count",t.S),A.C(m).c).bK(0)
B.a.Y(s)
return s},
v5:function v5(){},
ys(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aJ(r)||!A.aJ(q)||!A.aJ(p)||r<1||q<0||q>23||p<0)return null
return new A.bQ(s,r,q,p)},
CK(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.R(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a_(t.L)
for(s=J.R(s.a(a.h(0,j)));s.m();){n=A.ys(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.AT(m)
if(!s&&l==null)return i
return new A.l5(r,o,l)},
AT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.ys(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aJ(p))if(!(p<0))if(A.br(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bL(new A.G(B.cO,t.qR.a(new A.mt(r)),t.cE),t.hF)
j=A.bL(new A.G(B.jn,t.da.a(new A.mu(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bL(new A.G(B.im,t.kr.a(new A.mv(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.jf(s,k,j,p,i,n,A.at(m))},
bK:function bK(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d5:function d5(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
rB:function rB(){},
jf:function jf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mt:function mt(a){this.a=a},
mu:function mu(a){this.a=a},
mv:function mv(a){this.a=a},
l2:function l2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
rM:function rM(){},
ba:function ba(a){this.a=a},
l1:function l1(a){this.a=a},
l_:function l_(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
l0:function l0(a,b,c){this.a=a
this.b=b
this.c=c},
F_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.ja())return f
n=A.ea().gb_()
m=n.h(0,"captureSeed")
l=A.du(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.du(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.eI(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.l.aO(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.ls.q(0,o.b))return f
J.bs(p,A.r(o.a),A.r(o.b))}r=p}else return f}catch(g){if(A.ao(g) instanceof A.H)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.lx.q(0,i))return f
if(h!=null&&!B.lv.q(0,h))return f
return new A.rY(l,k,j,h,r)},
F0(){var s,r,q,p=A.ea().gb_().h(0,"cameraProfile")
A:{if("wide"===p){s=B.eC
break A}if("intimate"===p){s=B.eE
break A}s=B.eD
break A}r=A.ea().gb_().h(0,"cameraFov")
q=A.eI(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fi(B.c.D(q,35,100)*3.141592653589793/180,s.b,s.c)},
j7(a){var s=$.bf
if(s===a&&B.b.q(A.r(a.b.className),"open"))return
if(s!=null)s.a6()
$.bf=a
if(a===$.cn.j())$.hg().fY("gameplay.viewport")
else $.hg().mf(A.zv(a))
s=$.ac.j()
s.ay=!1
s.b9()
$.em=0
a.bH()},
wI(a,b,c){var s,r,q
$.j8=!0
s=$.bf
if(s!=null)s.a6()
$.bf=a
s=$.hg()
if(s.a.a.length===0)s.fY(c)
r=A.K(s.a.a,t.oP)
r.push(new A.ds(b,B.Y,c))
q=s.a
s.a=new A.e3(r,q.b,q.c)
s.iO(b)
s=$.ac.j()
s.ay=!1
s.b9()
$.em=0
a.bH()
$.j8=!1},
dJ(a){var s,r,q,p,o,n,m,l=null
if($.j8)return
$.j8=!0
a.a6()
$.bf=null
s=$.hg().kf()
$.j8=!1
r=s.a
if(r===B.dm){$.em=0
r=$.ac.j()
r.b9()
r.ay=!0
q=A.E(A.a(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dl)return
r=s.c.a
r=r.length===0?l:B.a.gX(r)
p=r==null?l:r.a
A:{if(B.bo===p){r=$.cn.j()
break A}if(B.db===p){r=$.h3.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bf=r
n=$.ac.j()
n.ay=!1
n.b9()
$.em=0
r.bH()
m=o==null?l:A.E(A.a(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
j9(a){if($.bf===a&&B.b.q(A.r(a.b.className),"open"))a.a6()
else A.j7(a)},
h7(a){var s
if($.j8)return
if($.bf===a)$.bf=null
if(a===$.cn.j())$.hg().cf()
else $.hg().lc(A.zv(a))
$.em=0
s=$.ac.j()
s.b9()
s.ay=!0},
zv(a){if(a===$.cn.j())return B.dc
if(a===$.h3.j())return B.Y
if(a instanceof A.fN)return B.Y
if(a instanceof A.hC)return B.Y
if(a instanceof A.hr)return B.Y
if(a===$.iZ.j())return B.kl
if(a===$.m0.j())return B.km
if(a===$.iY.j())return B.kn
if(a===$.lZ.j())return B.Y
if(a===$.iW.j())return B.kp
return B.ko},
m5(a,b){var s
a.sm4(new A.tY())
a.sm6(new A.tZ())
a.sm5(new A.u_())
a.sm0(new A.u5())
a.sm3(new A.u6())
a.sme(new A.u7())
a.sm9(new A.u8())
a.sm8(new A.u9())
a.sb4(b?new A.ua(a):new A.ub(a))
a.saZ(b?new A.uc(a):new A.u0(a))
s=a.f
if(s===B.H)a.slS(new A.u1())
if(s===B.a_)a.sm1(new A.u2())
if(s===B.I){a.slR(new A.u3())
a.sm7(new A.u4())}},
E2(){var s=$.ek.j()
s.sdL(new A.tV())
s.sb4(new A.tW())
s.saZ(new A.tX())},
m4(a,b,c){return A.E_(a,b,c)},
E_(a,b,c){var s=0,r=A.bG(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$m4=A.bI(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.tR()
k=c.$ti
j=$.am
i=new A.ar(j,k)
if(j!==B.x)l=A.zB(l,j)
c.co(new A.dF(i,2,null,l,k.i("dF<1,1>")))
s=4
return A.aB(i,$async$m4)
case 4:case 3:o=$.jb().b
n=$.aS
q=6
s=n!=null?9:10
break
case 9:s=11
return A.aB(n.cE(b.a),$async$m4)
case 11:case 10:k=b.a
$.j3=A.fy(k,a)
$.ek.j().cm(a,k,b.b)
A.wK()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.ao(g)
$.j3=A.fy(o,o)
k=$.ek.j()
k.cm(o,o,A.c(["renderer transaction rejected: "+A.y(m)],t.s))
A.wK()
s=8
break
case 5:s=1
break
case 8:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$m4,r)},
EQ(){var s,r,q,p,o,n=null
try{n=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.l.aO(n,null)
if(!t.f.b(r)||!J.ad(r.h(0,"version"),1))A.i(B.fS)
q=A.xJ(r.h(0,"requested"))
$.j3=A.fy(A.xJ(r.h(0,"effective")),q)}catch(s){$.j3=A.fy(null,null)}p=$.jb().a
o=A.A6(p,A.zj())
r=o.a
$.j3=A.fy(r,p)
$.ek.j().cm(p,r,o.b)
A.wK()},
zj(){var s,r,q,p,o=$.f6.j().gbA().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.du(B.b.b0(p,12),null)
if(r==null)r=1}return new A.og(r,B.a.q(o,"disjoint-timer-query"))},
wK(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.l.ab($.jb().B(),null))}catch(s){}},
E1(){var s=$.iV.j()
s.sdL(new A.tS())
s.sb4(new A.tT())
s.saZ(new A.tU())},
EO(){var s,r,q,p,o,n=null
try{n=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wz=A.Ba(B.l.aO(n,null))}catch(s){$.wz=A.fp(null,null,!1,1,!1,!1,2,1)}r=$.iV.j()
q=r.w=$.fd()
r.x=new A.jv(q)
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
$.ac.j().e8($.fd().r)
r=$.ac.j()
q=$.fd()
p=r.ch
p.a=q.f
p.dT()
r.b9()
A.zx()},
zx(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.controls.profile",B.l.ab($.fd().B(),null))}catch(s){}},
EN(){var s,r=null
try{r=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j2=A.AX(B.l.aO(r,null))}catch(s){$.j2=B.aN}$.h1.j().ho($.j2)
A.zw()
A.wr()},
zw(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio.options",B.l.ab($.j2.B(),null))}catch(s){}},
wr(){var s=$.bq
if(s==null)return
s.hy($.j2)},
EP(){var s,r=null
try{r=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wC=A.BE(B.l.aO(r,null))}catch(s){$.wC=$.vQ()}$.iX.j().hp($.cK())
A.zy()
A.z2()},
zy(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.l.ab($.cK().B(),null))}catch(s){}},
z2(){var s,r="detailed",q=A.BD($.cK()),p=A.E(A.a(v.G.document).documentElement)
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
p.setAttribute("data-gameplay-reminders",s)
s=$.cK().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cK().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
EM(){var s,r=null
try{r=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.el=A.AR(B.l.aO(r,null))}catch(s){$.el=B.ap}$.f5.j().e7($.el)
A.wJ()
A.m1()},
wJ(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.l.ab($.el.B(),null))}catch(s){}},
m1(){var s,r,q,p,o,n,m=$.el,l=$.uU,k=$.wY,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.i(B.fo)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a9
$.wO=l
$.cI.j()
r=A.E(A.a(v.G.document).documentElement)
q=r==null
p=q?null:A.P(A.a(r.classList).contains("high-contrast"))
o=q?null:A.P(A.a(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.P(A.a(r.classList).toggle("reduced-motion",l))
if(!q)A.P(A.a(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.P(A.a(r.classList).toggle("captions-enabled",s))
if(!q)A.P(A.a(r.classList).toggle("reduced-effects",o))
if(!q)A.P(A.a(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.a(r.style).setProperty("font-size",A.y(j*100)+"%")
q=$.A.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.y(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.z0){m=$.bd.j()
l=$.el.f
m.e=new A.jd(l==null?B.a9:l)
m=$.bd.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
Eq(){var s=v.G,r=A.a(A.a(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.a(A.a(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uE(r,q)
r.addEventListener("change",A.U(new A.uC(s)))
q.addEventListener("change",A.U(new A.uD(s)))},
vc(){var s=0,r=A.bG(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9
var $async$vc=A.bI(function(e1,e2){if(e1===1){o.push(e2)
s=p}for(;;)switch(s){case 0:d7=v.G
d8=A.E(A.a(d7.document).getElementById("game"))
if(d8==null){s=1
break}$.A.b=d8
$.wB=A.E(A.a(d7.document).getElementById("fps"))
$.yW.b=$.Ax().ck(A.ea().gb_().h(0,"renderer"))
A.Er()
b8=$.A.j()
b9=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
b8.width=b9
b9=$.A.j()
b8=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b9.height=b8
c0=A.E(A.a(d7.document).getElementById("ui-canvas"))
if(c0!=null){c0.width=A.e($.A.j().width)
c0.height=A.e($.A.j().height)
b8=new A.n7(c0,A.c([],t.km))
c1=A.E(c0.getContext("2d"))
if(!t.m.b(c1))A.i(A.k("Failed to get 2D context for CanvasP5GuiEngine"))
b8.b=c1
b8=new A.ql(b8)
$.en=b8
b8.bg(A.e($.A.j().width),A.e($.A.j().height))}n=A.E(d8.getContext("webgl2"))
if(n==null)throw A.b(A.k("Pixeldart requires WebGL2"))
try{b8=t.s6
b9=t.N
c2=t.iO
c3=t.m3
c4=t.pw
m=new A.lC(n,A.e($.A.j().width),A.e($.A.j().height),A.c([],b8),A.m(b9,t.qr),A.c([],t.s3),A.m(b9,c2),A.m(b9,c3),A.m(b9,t.xp),A.m(b9,t.bE),A.m(b9,c2),A.m(b9,c3),A.c([],b8),A.m(b9,c2),A.m(b9,c3),A.m(b9,b9),A.m(t.S,c4),A.m(b9,t.qS),A.c([],t.j5),B.iP,A.m(b9,t.Aj),A.m(b9,b9),A.m(b9,c4),A.m(b9,t.vD),A.m(b9,c4),A.m(b9,t.w1),B.h9,B.kD)
$.aS=m
b9=B.en.l6($.yW.j(),m)
b9.c5()
$.f6.b=b9}catch(e0){l=A.ao(e0)
k=A.cJ(e0)
g=$.A.j()
g.setAttribute("data-renderer-error",A.y(l))
if($.ja())$.A.j().setAttribute("data-renderer-error-stack",A.y(k))
throw e0}A.uM()
p=4
A.f8("initializing")
$.cI.b=new A.n6(new A.j(0,0,0),new A.j(0,0,1),new A.j(0,1,0),new A.j(1,0,0),$.xl())
$.uU=A.P(A.a(A.a(d7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.wY=A.P(A.a(A.a(d7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.wO=$.uU
$.cI.j()
b8=A.a(d7.window)
b9=t.N
c2=t.s
c3=t.a
c2=A.BL(A.J(["moveForward",A.c(["KeyW"],c2),"moveBack",A.c(["KeyS"],c2),"moveLeft",A.c(["KeyA"],c2),"moveRight",A.c(["KeyD"],c2),"interact",A.c(["KeyE"],c2),"secondary",A.c(["KeyQ"],c2),"run",A.c(["ShiftLeft"],c2),"crouch",A.c(["ControlLeft"],c2),"rotate",A.c(["KeyR"],c2),"reach",A.c(["KeyF"],c2),"journal",A.c(["KeyJ"],c2),"sleep",A.c(["KeyL"],c2),"pause",A.c(["Escape"],c2)],b9,c3))
c4=A.a(b8.document)
c2=new A.k_(b8,c4,A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),A.a_(b9),new A.j(0,0,0),new A.oV(),c2)
b8.addEventListener("keydown",A.U(c2.gjd()))
b8.addEventListener("keyup",A.U(c2.gjf()))
b8.addEventListener("mousemove",A.U(c2.gjl()))
b8.addEventListener("mousedown",A.U(c2.gjj()))
b8.addEventListener("mouseup",A.U(c2.gjn()))
b8.addEventListener("wheel",A.U(c2.gjp()))
c4.addEventListener("pointerlockchange",A.U(c2.gjh()))
$.ac.b=c2
c2=$.A.j()
b8=A.e(A.a(d7.window).innerWidth)>0?A.e(A.a(d7.window).innerWidth):800
c2.width=b8
b8=$.A.j()
c2=A.e(A.a(d7.window).innerHeight)>0?A.e(A.a(d7.window).innerHeight):600
b8.height=c2
A.f8("renderer")
A.f8("text")
c2=$.fe()
s=7
return A.aB(c2.cb(),$async$vc)
case 7:j=c2.mY()
i=A.CM(j)
if(!(i instanceof A.l4)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aE.b=i.a
$.lY.b=A.AU(j)
g=A.m(b9,c3)
for(b8=t.j,c6=0;c6<5;++c6){f=B.B[c6]
c3=A.r(f)
c4=c2.c
c4===$&&A.p()
c7=c4.h(0,c3)
c3=b8.b(c7)?A.ap(c7,!0,b9):B.o
J.bs(g,f,c3)}e=A.CN(g)
$.wq.b=new A.n_(B.eB)
d=$.wq.j().mm(new A.vd(e))
c8=$.vR()
c=c8
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.aQ.aP(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c2=c
c2=c2==null?null:B.c.aW(c2.c)
if(c2==null)c2=7
if(b9<1)A.i(A.ah(b9,"startDay","must be at least 1"))
if(c2<0||c2>=24)A.i(A.ah(c2,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.i(A.ah(5760,"daySeconds","must be finite and > 0"))
c9=new A.jQ(b9,7,5760)
c9.b=c2
d0=A.xV(e)
g=A.xH(42,g,A.xK(42),c9,d0,A.xB(6,16,d0,null,6,B.iQ,c9),new A.jC(0,0,0,!1),A.pD(null,null,null))}else{g=d.a
g.toString
g=A.xI(g,e)}$.T.b=g
$.aE.j().y=$.T.j().z
g=A.ai(A.Em($.T.j().b),t.fu)
$.tI.b=new A.rO(g)
g=$.vS()
b9=d.a
g.dV(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.f6.j().br(A.yc($.T.j().gh3()))
if(d.b!=null){g=d.b
g.toString
A.h8(g)}g=$.aE.j()
b9=A.FR($.T.j().b,A.FS(j.b))
g.shS(A.hM(b9,A.C(b9).c))
A.f8("house")
$.X.b=$.T.j().c
g=c8==null
b=g?null:c8.e
a=g?null:c8.f
if(a!=null)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.u)(g),++c6){a0=g[c6]
for(c2=a0.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.u)(c2),++d1){a1=c2[d1]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.ad(b,"open")||J.ad(b,"closed")){a3=J.ad(b,"open")
for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.u)(g),++c6){a4=g[c6]
for(c2=a4.e,c3=c2.length,d1=0;d1<c2.length;c2.length===c3||(0,A.u)(c2),++d1){a5=c2[d1]
a5.shI(a3)}}}a6=$.xj()
if(a6!=null&&a6.length!==0)for(g=$.X.j().b,b9=g.length,c6=0;c6<g.length;g.length===b9||(0,A.u)(g),++c6){a7=g[c6]
for(c2=a7.r,c3=c2.length,d1=0;d1<c3;++d1){a8=c2[d1]
if(a8.a===a6)a8.d=$.xk()}}g=$.aS
if(g!=null)g.ke($.X.j())
$.be.b=$.T.j().d
$.X.j()
g=new A.j(12.9375,1.65,0.825)
$.wZ=$.wM=$.wS=g
a9=g.ao(0,new A.j(0,1.3499999999999999,0))
$.j_.b=new A.jq(a9,J.xm(a9,new A.j(0,1.2000000000000002,0)))
$.h2.b=new A.nJ()
g=A.wD(B.o)
b9=A.wD(B.o)
c2=new A.qp(B.E,g,b9)
if(!isFinite(0))A.i(B.fc)
if(!B.a.a7(b9,B.a.gap(g)))A.i(B.fM)
if(c2.a===B.E&&c2.b!==0&&!c2.e)A.i(B.fg)
$.c7.b=c2
$.au="hall"
g=d.a
b0=A.C7(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.lG($.X.j())){g=b0.b
$.wZ=$.wM=$.wS=g
$.co=b0.c
$.f9=b0.d
$.au=b0.a
b1=g.ao(0,new A.j(0,1.3499999999999999,0))
g=$.j_.j()
g.skg(b1)
g.b=J.xm(b1,new A.j(0,1.2000000000000002,0))
g=$.j_.j()
b9=$.X.j()
c2=b0.e
c3=b0.f
g.mH($.au,$.eq(),b9,c3,c2)
A.h8("restored position")}g=A.Ct(A.a(d7.document))
g.slT(new A.ve())
g.sb4(new A.vf())
g.saZ(new A.vq())
$.h3.b=g
g=A.a(d7.document)
b9=A.a(g.createElement("div"))
c2=new A.pU(g,b9)
c2.aS(g)
b9.className=A.r(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.a(b9.appendChild(A.n2(g,B.ei,1)))
A.a(b9.appendChild(A.z(g,"p","settings-copy","The house waits. Choose what to do next.")))
d2=A.z(g,"nav","pause-actions",null)
d2.setAttribute("aria-label","Pause actions")
c2.bj(g,d2,B.dd,"resume")
c2.bj(g,d2,B.de,"settings")
c2.bj(g,d2,B.df,"controls")
c2.bj(g,d2,B.dg,"save now")
c2.bj(g,d2,B.dh,"help")
c2.bj(g,d2,B.di,"credits")
c2.bj(g,d2,B.dj,"back")
A.a(b9.appendChild(d2))
c2.sma(new A.vz())
c2.sb4(new A.vA())
c2.smc(new A.vB())
c2.slX(new A.vC())
c2.smb(new A.vD())
c2.sm2(new A.vE())
c2.slY(new A.vF())
c2.saZ(new A.vg())
$.cn.b=c2
c2=$.T.j().e
b9=$.be.j()
$.T.j()
$.m_.b=new A.oT(c2,b9)
b9=A.a(d7.document)
c2=$.T.j().e
g=$.be.j()
c3=$.m_.j()
c4=A.a(b9.createElement("div"))
c3=new A.p1(c2,g,c3,b9,c4)
c3.aS(b9)
c4.setAttribute("aria-label","The Journal")
A.a(c4.appendChild(A.z(b9,"div","journal-title","The Journal")))
d3=A.z(b9,"div","journal-pages",null)
g=A.z(b9,"div","page page-left",null)
c3.y!==$&&A.aX()
c3.y=g
c2=A.z(b9,"div","page page-right",null)
c3.z!==$&&A.aX()
c3.z=c2
A.a(d3.appendChild(g))
A.a(d3.appendChild(c2))
A.a(c4.appendChild(d3))
A.a(c4.appendChild(c3.iu()))
d4=A.z(b9,"div","tape-roll",null)
A.a(d4.style).setProperty("width","8rem")
c2=A.z(b9,"div","tape-fill",null)
c3.as!==$&&A.aX()
c3.as=c2
A.a(d4.appendChild(c2))
A.a(c4.appendChild(d4))
d5=A.z(b9,"div","consult",null)
A.a(d5.appendChild(A.z(b9,"div","consult-label","Cite an entry")))
c2=A.z(b9,"div","entry-picker",null)
c3.at!==$&&A.aX()
c3.at=c2
g=A.z(b9,"div","consult-result",null)
c3.ax!==$&&A.aX()
c3.ax=g
A.a(d5.appendChild(c2))
A.a(d5.appendChild(g))
A.a(c4.appendChild(d5))
d6=A.E(b9.documentElement)
if(t.m.b(d6)){A.a(d6.style).setProperty("--shake-max-deg","3deg")
A.a(d6.style).setProperty("--shake-max-px","2px")}$.iZ.b=c3
$.iZ.j().saZ(new A.vh())
g=A.a(d7.document)
b9=A.z(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.a(b9.style).setProperty("transition-duration","0.3s")
A.a(A.E(g.body).appendChild(b9))
$.yY.b=new A.q6(b9)
b9=A.a(d7.document)
g=A.z(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.a(A.E(b9.body).appendChild(g))
$.yX.b=new A.mZ(g)
g=A.a(d7.document)
b9=A.z(g,"div","ambient-notice",null)
c2=A.z(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c2.setAttribute("aria-hidden","true")
c2.setAttribute("data-caption-kind","non-speech")
A.a(A.E(g.body).appendChild(b9))
A.a(A.E(g.body).appendChild(c2))
$.bd.b=new A.mz(b9,c2,B.K)
$.z0=!0
c2=A.Bh(A.a(d7.document))
c2.slW(A.A4())
c2.slV(A.G4())
$.as.b=c2
c2=$.cr()
c2.slU(new A.vi())
c2.slZ(A.A4())
c2=d.a
b2=A.CK(c2==null?null:c2.c.h(0,"visitors"))
if($.cK().Q&&b2!=null&&$.aE.j().dV(b2))A.F4()
g=$.lY.j()
b9=d.a
g.mI(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(b8.b(b3))for(g=J.R(b3);g.m();){b4=g.gn()
if(A.aJ(b4))$.uV.l(0,b4)}g=A.Cw(A.a(d7.document))
g.smd(new A.vj())
g.saZ(new A.vk())
$.m0.b=g
g=A.BH(A.a(d7.document))
g.saZ(new A.vl())
$.iY.b=g
g=A.Bb(A.a(d7.document))
g.saZ(new A.vm())
$.lZ.b=g
$.j0.b=A.kF(A.a(d7.document),null)
$.j1.b=A.kF(A.a(d7.document),B.Z)
$.f5.b=A.kF(A.a(d7.document),B.I)
A.m5($.j0.j(),!1)
A.m5($.j1.j(),!0)
A.m5($.f5.j(),!0)
A.EM()
A.Eq()
$.ek.b=A.BG(A.a(d7.document))
A.E2()
A.EQ()
$.h1.b=A.kF(A.a(d7.document),B.H)
A.m5($.h1.j(),!0)
A.EN()
$.iX.b=A.kF(A.a(d7.document),B.a_)
A.m5($.iX.j(),!0)
A.EP()
$.iV.b=A.B9(A.a(d7.document))
A.E1()
A.EO()
g=A.Br(A.a(d7.document))
g.saZ(new A.vn())
g.sm_(new A.vo())
$.iW.b=g
g=d.a
b5=A.Bt(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zz(b5)
A.f8("world")
A.zC()
A.a(d7.window).addEventListener("resize",A.U(new A.vp()))
A.a(d7.document).addEventListener("visibilitychange",A.U(new A.vr()))
A.a(d7.window).addEventListener("keydown",A.U(new A.vs()))
A.a(d7.window).addEventListener("keyup",A.U(new A.vt()))
A.a(d7.window).addEventListener("keydown",A.U(new A.vu()))
A.a(d7.window).addEventListener("click",A.U(new A.vv()))
$.A.j().addEventListener("mousemove",A.U(new A.vw()))
$.A.j().addEventListener("click",A.U(new A.vx()))
$.A.j().addEventListener("wheel",A.U(new A.vy()))
A.h5()
A.f8("raf")
A.e(A.a(d7.window).requestAnimationFrame(A.U(A.A5())))
p=2
s=6
break
case 4:p=3
d9=o.pop()
b6=A.ao(d9)
b7=A.cJ(d9)
A.uO(b6,b7)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$vc,r)},
Ep(a){var s,r,q,p=$.en
if(!$.as.j().y||p==null)return
s=A.zb(a)
if(s==null)return
r=$.cr()
q=p.fQ(s.a,s.b)
r.r=q==null?null:q.b},
Eo(a){var s,r=$.en
if(!$.as.j().y||r==null)return!1
s=A.zb(a)
if(s==null)return!1
return $.cr().lA(r.fQ(s.a,s.b))},
zb(a){var s=A.a($.A.j().getBoundingClientRect()),r=A.a6(s.width),q=A.a6(s.height)
if(r<=0||q<=0)return null
return new A.aQ(A.e(a.clientX)-A.a6(s.left),A.e(a.clientY)-A.a6(s.top))},
Er(){var s=v.G
A.a(s.window).addEventListener("error",A.U(new A.uF()))
A.a(s.window).addEventListener("unhandledrejection",A.U(new A.uG()))},
f8(a){if($.wv===a)return
$.wv=a
$.A.j().setAttribute("data-boot-phase",a)},
uM(){var s,r,q,p,o,n=$.f6.j().gbA(),m=$.A.j(),l=A.ea().gb_().h(0,"renderer")
if(l==null)l="auto"
m.setAttribute("data-renderer-request",l)
m.setAttribute("data-renderer-backend",n.a)
m.setAttribute("data-renderer-profile",n.b)
m.setAttribute("data-renderer-diagnostics",B.l.ab(n.B(),null))
l=$.aS
if(l==null)l="{}"
else{l=l.e
l===$&&A.p()
l=l.as
if(l==null)l=A.i(A.k("renderer is not initialized"))
s=l.a
s.C()
r=s.b
q=A.K(r,A.o(r).c)
B.a.Y(q)
r=t.N
p=t.K
p=B.l.ab(A.J(["profile",A.J(["kind",s.a.b,"features",q],r,p),"internalWidth",l.b,"internalHeight",l.c,"sampleCount",l.d,"outputEncoding",l.e.b,"shadowMapCount",l.f,"shadowMapSize",l.r,"materialTableCapacity",l.w,"lightTableCapacity",l.x,"textureArrayLayerCapacity",l.y,"diagnosticLevel",l.z.b],r,p),null)
l=p}m.setAttribute("data-renderer-configuration",l)
m.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
m.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
m.setAttribute("data-renderer-lighting-falloff","smoothstep")
m.setAttribute("data-renderer-dof-focal-distance","2.5m")
m.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
m=$.aS
o=m==null?null:m.x
if(o!=null)$.A.j().setAttribute("data-renderer-profile-fallback",o)},
EX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(!$.ja())return
s=$.xj()
if(s!=null&&s.length!==0){r=$.A.j()
q=$.xk()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tI.j().dD($.T.j().gaa().a)
r=$.A.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.vR()
o=q==null?d:q.e
if(o!=null)$.A.j().setAttribute("data-automation-capture-shutters",o)
$.A.j().setAttribute("data-automation-rain-window-visibility",B.c.aK(A.zA($.au),3))
r=$.A.j()
q=$.wv
n=$.au
m=$.eq()
l=t.N
k=t.K
r.setAttribute("data-automation-player",B.l.ab(A.J(["schemaVersion",1,"phase",q,"roomId",n,"eye",A.J(["x",m.a,"y",m.b,"z",m.c],l,t.i),"yaw",$.co,"pitch",$.f9,"modal",$.bf!=null,"dialogueOverlay",$.as.j().y,"inputEnabled",$.ac.j().ay,"day",$.T.j().gaa().a,"hour",$.T.j().gaa().b],l,k),d))
j=A.m(l,t.X)
for(r=$.X.j().c,q=r.length,i=0;i<r.length;r.length===q||(0,A.u)(r),++i){h=r[i]
n=h.ax
m=h.ay
if(n)g=!m
else g=!1
j.k(0,h.a,A.J(["a",h.b,"b",h.c,"open",n,"locked",m,"sticks",!1,"passable",g],l,k))}$.A.j().setAttribute("data-automation-portals",B.l.ab(j,d))
f=$.m2
r=!1
if(f!=null)if($.X.j().e.h(0,"cellar")!=null){r=$.X.j()
q=$.au
q=r.e.h(0,q)!=null
r=q}if(r){e=f.cg("cellar",$.au)
$.A.j().setAttribute("data-audio-transmission-cellar",B.l.ab(A.J(["sourceRoom","cellar","listenerRoom",$.au,"portalPath",e.a,"gainDb",e.c,"lowPassHz",e.d,"muffle01",e.e,"barrierIds",e.b,"reasonTrace",e.r,"reachable",e.f],l,k),d))}else $.A.j().setAttribute("data-audio-transmission-cellar","unavailable")},
me(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.c7.j().a!==B.E){A.h8("save unavailable during rupture")
return}try{r=$.wq.j()
q=$.T.j()
p=t.N
o=t.z
s=A.m(p,o)
n=$.au
m=$.eq()
l=$.co
k=$.f9
j=$.j_.j().d
j=j==null?null:j.a.a
i=$.j_.j().d
J.bs(s,"player",new A.kq(n,m,l,k,j,i==null?null:i.b).B())
n=$.aE.j()
m=A.eP(n.b,p)
l=A.eP(n.c,t.L)
n=n.r
J.bs(s,"visitors",new A.l5(m,l,n==null?null:new A.jf(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.lY.j().b
n=A.K(n,A.o(n).c)
B.a.Y(n)
J.bs(s,"ambient",n)
n=A.K($.uV,A.o($.uV).c)
B.a.Y(n)
J.bs(s,"unverifiables",n)
J.bs(s,"inventoryInspections",$.vS().B())
n=$.wA
if(n!=null)J.bs(s,"ending",A.J(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.xM(q.c).B()
k=q.d
r.n_(A.ye(s,A.J(["houseSeed",n,"runSeed",m,"house",l,"time",A.J(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.h8(a)}catch(h){A.h8("save failed")}},
EV(){var s=A.E(A.a(v.G.document).documentElement),r=s==null?null:A.at(s.getAttribute("data-gameplay-focus-loss")),q=A.bL(new A.G(B.aA,t.rg.a(new A.uJ(r)),t.vK),t.x)
switch((q==null?B.aW:q).a){case 0:$.mb=!0
s=$.bq
if(s!=null)s.ea(!0)
break
case 1:$.mb=!0
break
case 2:break}},
h8(a){var s=v.G,r=A.E(A.a(s.document).getElementById("save-status"))
if(r==null)return
s=A.E(A.a(s.document).documentElement)
s=s==null?null:A.at(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.BC(B.eX,new A.uS(r),t.H)},
uO(a,b){var s,r,q,p
A.f8("error")
s=A.y(a)
r=A.x9(s,"\n"," ")
s=$.wB
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.E(A.a(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.y(a):A.y(a)+"\n"+b.p(0)
$.A.j().setAttribute("data-boot-error",p)
if($.ja()&&!q)$.A.j().setAttribute("data-boot-stack",b.p(0))
A.a(s.console).error(p)},
z5(){var s,r
if($.wt)return
$.wt=!0
s=$.bq
r=s==null
if(!r)s.cf()
if(!r)s.eh("music")
B.a.l($.db,"arm")},
h5(){var s=0,r=A.bG(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$h5=A.bI(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.aB(A.m9(),$async$h5)
case 2:o=null
q=4
s=7
return A.aB(A.cp(A.a(A.a(v.G.window).fetch("res/manifest.json")),t.m),$async$h5)
case 7:n=b
i=A
s=8
return A.aB(A.cp(A.a(n.json()),t.X),$async$h5)
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
l=$.lZ.j().f
l===$&&A.p()
l.textContent=k}s=9
return A.aB(A.nY(A.c([A.uH(o),A.uB(o)],t.iJ),t.H),$async$h5)
case 9:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$h5,r)},
m9(){var s=0,r=A.bG(t.H),q,p
var $async$m9=A.bI(function(a,b){if(a===1)return A.bD(b,r)
for(;;)switch(s){case 0:$.X.j()
p=$.A.j()
p.setAttribute("data-house-manifest","renderer-showcase")
$.A.j().setAttribute("data-house-manifest-source","runtime-showcase")
s=3
return A.aB(A.m8(),$async$m9)
case 3:s=4
return A.aB(A.ma(),$async$m9)
case 4:s=1
break
case 1:return A.bE(q,r)}})
return A.bF($async$m9,r)},
m8(){var s=0,r=A.bG(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$m8=A.bI(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.ir[c]
p=7
s=10
return A.aB(A.cp(A.a(A.a(g.window).fetch(n)),f),$async$m8)
case 10:m=b1
s=11
return A.aB(A.cp(A.a(m.text()),e),$async$m8)
case 11:l=b1
b=B.l.aO(l,null)
b=h.b(b)?b:A.dH("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dH("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aJ(a)?a:A.dH("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dH("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.ap(a,!0,d):A.dH("assets is not a list")
a4=A.C(a3)
a5=a4.i("M<1,cV>")
a3=A.K(new A.M(a3,a4.i("cV(1)").a(A.G0()),a5),a5.i("a4.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.ap(a,!0,d):A.dH("placements is not a list")
a5=A.C(a4)
a6=a5.i("M<1,cx>")
a4=A.K(new A.M(a4,a5.i("cx(1)").a(A.G1()),a6),a6.i("a4.E"))
a4.$flags=1
k=new A.ox(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.i(A.a9(""))
k.mU(a1)
$.m7=k
a1=$.aS
if(a1!=null)a1.hq(k)
a1=$.A.b
if(a1===$.A)A.i(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.A.b
if(a1===$.A)A.i(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.A.b
if(a1===$.A)A.i(A.a9(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.ao(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.A.j().setAttribute("data-house-inventory","unavailable")
$.A.j().setAttribute("data-house-inventory-error",A.y(a8))
A.a(g.console).warn("authored house inventory unavailable: "+A.y(a8))
case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$m8,r)},
ma(){var s=0,r=A.bG(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$ma=A.bI(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.m7
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.j2[a4]
p=7
s=10
return A.aB(A.cp(A.a(A.a(a1.window).fetch(m)),a2),$async$ma)
case 10:l=b5
s=11
return A.aB(A.cp(A.a(l.text()),e),$async$ma)
case 11:k=b5
a5=B.l.aO(k,null)
a5=a0.b(a5)?a5:A.h4("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.ap(a6,!0,a3):A.h4("emitters is not a list")
a8=A.C(a7)
a9=a8.i("M<1,cU>")
a7=A.K(new A.M(a7,a8.i("cU(1)").a(A.Gf()),a9),a9.i("a4.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aJ(a6)?a6:A.h4("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h4("sourceRef is not a string")
j=new A.oE(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.i(A.a9(""))
j.mV(a7,b2)
$.zm=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bs(i,h.a+":"+g.a,A.c([g.b],c))}}a7=$.X.b
if(a7===$.X)A.i(A.a9(""))
a8=A.AV(i)
a9=new A.mJ(a7,A.aY(B.d5,e,d),a8)
a9.i0(a8,a7,B.d5)
$.m2=a9
a7=$.bq
if(a7!=null){a7.ch=a9
a7.bw()}a7=$.A.b
if(a7===$.A)A.i(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.A.b
if(a7===$.A)A.i(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.A.b
if(a7===$.A)A.i(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.A.b
if(a7===$.A)A.i(A.a9(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.ao(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.m2=null
$.A.j().setAttribute("data-audio-planner","unavailable")
$.A.j().setAttribute("data-house-soundscape","unavailable")
$.A.j().setAttribute("data-house-soundscape-error",A.y(n))
A.a(a1.console).warn("authored house soundscape unavailable: "+A.y(n))
case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$ma,r)},
wy(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.R(t.a.b(s)?s:new A.aW(s,A.C(s).i("aW<1,f>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.r(q))}},
uB(a){var s=0,r=A.bG(t.H),q,p,o,n,m,l
var $async$uB=A.bI(function(b,c){if(b===1)return A.bD(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.wy(A.E(n?null:a.sfx),m,"")
A.wy(A.E(n?null:a.ir),m,"ir-")
q=A.E(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.r(p))
l=$
s=2
return A.aB(A.mQ(m,$.X.j()),$async$uB)
case 2:o=l.bq=c
o.ch=$.m2
o.bw()
A.ER()
A.zE(o)
A.wr()
A.zF()
if($.wt){o.cf()
o.eh("music")}return A.bE(null,r)}})
return A.bF($async$uB,r)},
wV(a,b){var s
A.zQ(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
F1(a){var s,r
try{s=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
z1(a,b){var s
if(a!=="brightness")return
s=A.E(A.a(v.G.document).documentElement)
if(t.m.b(s))A.a(s.style).setProperty("filter","brightness("+A.y(B.c.D(b,0.6,1.4))+")")},
tM(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.E(A.a(v.G.document).documentElement)
if(r!=null)A.P(A.a(r.classList).toggle(s,b))
A.m1()},
zF(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a6($.dd().a.ci(o)),k=A.P($.dd().a.ci(n)),j=A.P($.dd().a.ci(m))
for(s=[$.j0.j(),$.j1.j(),$.f5.j(),$.h1.j(),$.iX.j()],r=0;r<5;++r)s[r].e9(o,l)
A.z1(o,l)
for(s=[$.j0.j(),$.j1.j(),$.f5.j(),$.h1.j(),$.iX.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tM(n,k)
A.tM(m,j)},
wU(a,b){var s
A.zQ(a,b)
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
EZ(a){var s,r
try{s=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zE(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.iI[s]
q=$.dd().a.b.h(0,r)
j.k(0,r,A.a6(q==null?A.i(A.k("setting missing from profile: "+r)):q))}p=A.P($.dd().a.ci("muted"))
o=A.P($.dd().a.ci("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bi(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.cW(o)
for(q=[$.j0.j(),$.j1.j(),$.f5.j(),$.h1.j()],n=j.$ti.i("cz<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cz(j,j.r,j.e,n);m.m();){k=m.d
l.e9(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
z3(){var s=$.bq
if(s!=null)A.zE(s)
A.zF()},
ER(){var s,r,q,p,o,n,m,l,k=null
try{k=A.at(A.a(A.a(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.l.aO(k,null)
if(!t.f.b(r)||!J.ad(r.h(0,"version"),1))A.i(B.fp)
q=A.yg(r.h(0,"requested"))
$.zL=A.wb(A.yg(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.EZ(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.D[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.F1(p))}}$.zL=A.Cv(o,r)
A.uK()},
uK(){var s
try{A.a(A.a(v.G.window).localStorage).setItem("quarantine.settings.profile",B.l.ab($.dd().B(),null))}catch(s){}},
zQ(a,b){var s,r,q,p,o,n,m
switch(A.r2(a).d.a){case 0:r=A.eI(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dd()
q=s
A.r2(a).cR(q)
p=t.N
o=t.K
n=A.fB(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dx(n,1)
n=s
A.r2(a).cR(n)
o=A.fB(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dx(o,1)
A.uK()}catch(m){if(!(A.ao(m) instanceof A.H))throw m}},
uH(a){var s=0,r=A.bG(t.H),q,p
var $async$uH=A.bI(function(b,c){if(b===1)return A.bD(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.m(q,q)
A.wy(A.E(a==null?null:a.tex),p,"")
q=$.aS
q=q==null?null:q.cL(p)
s=2
return A.aB(A.nY(A.c([q==null?A.xG(t.H):q],t.iJ),t.H),$async$uH)
case 2:return A.bE(null,r)}})
return A.bF($async$uH,r)},
zC(){var s,r,q=v.G,p=A.e(A.a(q.window).innerWidth),o=A.e(A.a(q.window).innerHeight)
q=$.A.j()
s=p>0?p:800
q.width=s
s=$.A.j()
q=o>0?o:600
s.height=q
q=$.en
if(q!=null)q.bg(A.e($.A.j().width),A.e($.A.j().height))
$.f6.j().bg(A.e($.A.j().width),A.e($.A.j().height))
q=$.aS
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.A.j().setAttribute("data-renderer-surface",r)},
En(){var s,r,q=$.bf
if(q!=null){s=$.ac.j()
if(!s.CW.bd("pause",s.f)){s=$.ac.j()
s=s.CW.bd("secondary",s.f)}else s=!0
if(s){A.E4(q)
return}if($.ac.j().f.a5(0,"GamepadDpadUp")){A.zs(q,-1)
return}if($.ac.j().f.a5(0,"GamepadDpadDown")){A.zs(q,1)
return}s=$.ac.j()
if(s.CW.bd("interact",s.f)){r=A.E(A.a(v.G.document).activeElement)
if(t.m.b(r)&&A.P(q.b.contains(r)))A.oZ(r,"click",t.X)}return}s=$.ac.j()
if(s.CW.bd("pause",s.f)){A.j7($.cn.j())
return}if($.as.j().y)return
s=$.ac.j()
if(s.CW.bd("journal",s.f))A.j9($.iZ.j())
else{s=$.ac.j()
if(s.CW.bd("sleep",s.f))A.j9($.m0.j())}},
E4(a){if(a===$.cn.j()){a.a6()
return}if(a===$.h3.j()||a instanceof A.fN||a instanceof A.hC||a instanceof A.hr){A.dJ(a)
return}a.a6()},
zs(a,b){var s,r,q,p,o,n,m=a.b,l=A.a(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.c([],t.sL)
for(s=t.m,r=0;r<A.e(l.length);++r){q=A.E(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.E(A.a(v.G.document).activeElement)
o=B.a.bE(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.S(o+b+m,m)}if(!(n>=0&&n<k.length))return A.d(k,n)
k[n].focus()},
EY(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8
A.a6(d9)
try{s=d9
if(!$.zl){$.wH=s
$.zl=!0}e=s
d=$.wH
if(typeof e!=="number")return e.ao()
r=(e-d)/1000
$.wH=s
e=r
if(typeof e!=="number")return e.e5()
if(e<0)r=0
e=r
if(typeof e!=="number")return e.aL()
if(e>0.25)r=0.25
A.Fr(r)
$.ac.j().mi()
e=$.A.j()
d=$.ac.j().z!=null?"standard":"none"
e.setAttribute("data-controller",d)
q=$.ac.j().z
if(q!=null)$.A.j().setAttribute("data-controller-id",q)
else $.A.j().removeAttribute("data-controller-id")
A.En()
if(!$.mb&&$.bf==null){e=$.em
d=r
if(typeof d!=="number")return A.v7(d)
d=$.em=e+d
p=0
e=t.aA
for(;;){if(d>=0.008333333333333333){c=p
if(typeof c!=="number")return c.e5()
c=c<10}else c=!1
if(!c)break
$.wM=$.eq()
if(!$.xi()){d=$.T.b
if(d===$.T)A.i(A.a9(""))
d.k8(0.008333333333333333*($.cK().Q?1:20))
d=$.AA()
c=$.T.b
if(c===$.T)A.i(A.a9(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.i(A.a9(""))
d=d.dr(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){o=d[a]
B.a.l($.db,"clock:"+o.a)}d=$.AB()
c=$.T.b
if(c===$.T)A.i(A.a9(""))
c=c.gaa()
b=$.T.b
if(b===$.T)A.i(A.a9(""))
d=d.dr(c.a,b.gaa().b)
c=d.length
a=0
for(;a<d.length;d.length===c||(0,A.u)(d),++a){n=d[a]
B.a.l($.db,"service:"+n.a+":"+n.b)}}A.Fu()
d=$.aE.b
if(d===$.aE)A.i(A.a9(""))
c=$.T.b
if(c===$.T)A.i(A.a9(""))
d.w=c.r.c>=0.5
d=d.f
a0=A.ap(d,!1,e)
a0.$flags=3
a1=a0
B.a.L(d)
if(a1.length!==0){d=$.T.b
if(d===$.T)A.i(A.a9(""))
d.mn(a1)}A.Fq()
A.Ft()
A.Fs()
A.Fp(0.008333333333333333)
d=$.h2.b
if(d===$.h2)A.i(A.a9(""))
if(d.a!=null)if((d.b-=0.008333333333333333)<=0)d.a=null
d=$.c7.b
if(d===$.c7)A.i(A.a9(""))
m=d.a!==B.E
c=$.X.b
if(c===$.X)A.i(A.a9(""))
d.dq(0.008333333333333333,c)
if(m){d=$.c7.b
if(d===$.c7)A.i(A.a9(""))
d=d.e}else d=!1
if(d)A.zD(!0)
d=$.em-0.008333333333333333
$.em=d
c=p
if(typeof c!=="number")return c.ai()
p=c+1}l=B.c.D(d/0.008333333333333333,0,1)
e=$.wZ=A.yr($.AD(),$.eq(),l)
k=$.bq
if(k!=null){d=k
c=Math.sin($.co)
b=Math.cos($.co)
a2=A.a(d.a.listener)
a2.setPosition(e.a,e.b,e.c)
A.aK(a2,"setOrientation",[c,0,b,0,1,0],t.H)
d.hs($.au)
for(e=$.db.length,a=0;a<$.db.length;$.db.length===e||(0,A.u)($.db),++a){j=$.db[a]
A.E8(k,j)}B.a.L($.db)
$.A.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.A.j().setAttribute("data-audio-muffle01",B.c.aK(k.glO(),3))
e=$.A.j()
d=k.cx?"true":"false"
e.setAttribute("data-audio-music-started",d)
d=$.A.j()
e=k.dx
if(e==null)e="ir-fallback"
d.setAttribute("data-audio-room-ir",e)}}$.cI.j().fU($.vT(),$.co,$.f9)
e=$.aS
if(e!=null){d=$.cI.j()
c=d.a
a3=new A.I(c.a,c.b,c.c)
c=d.b
a4=new A.I(c.a,c.b,c.c)
c=d.c
a5=e.b/e.c
a6=A.y1(a3,a4,new A.I(c.a,c.b,c.c))
d=d.f
c=d.b
b=d.c
a7=A.w4(a5,b,d.a,c)
e.p3=new A.fj(a6,a7,a7.aj(0,a6),a3,a4,c,b,a5)}e=$.aS
if(e!=null)e.hB($.X.j(),$.au)
e=$.aS
if(e!=null)e.hr($.X.j(),$.au,$.vT(),$.be.j().gei(),$.be.j().gl8(),$.tI.j().dD($.T.j().gaa().a),A.Ga($.au),$.be.j().b)
if($.zr!==$.c7.j().a){$.zr=$.c7.j().a
$.wP=$.wP+1}e=$.aS
if(e!=null){if($.xi())d=0
else{d=s
if(typeof d!=="number")return d.n3()
d/=1000}c=$.wP
b=A.e(Math.max(0,$.T.j().b))
if(!isFinite(d)||d<0)A.i(A.ah(d,"timeSeconds",null))
if(b<0)A.i(A.w("frame clock seeds must be non-negative",null))
e.ry=d
e.to=c
e.x1=b}e=$.aS
if(e!=null){d=$.c7.j()
c=$.wO
b=$.tI.j().dD($.T.j().gaa().a)
a8=A.zA($.au)
a9=d.a
b0=d.gef()
b1=b0>0?B.c.D(d.b/b0,0,1):0
d=a9.a
b2=d>=3
b3=a9===B.bB
b4=$.hh()
b5=b4.F("post_exposure")
b6=b4.F("post_bloom")
b7=b4.F("post_vignette")
b8=b4.F("post_film_grain")
b9=b4.F("post_dither")
c0=b4.F("post_depth_of_field")
c1=b4.F("post_color_grade")
c2=b4.F("post_affine_warp")
c3=b4.F("post_vertex_snap")
c4=B.c.aJ(b4.F("post_quantization_bits"))
c5=b4.F("post_vhs_chroma")
c6=b4.F("post_vhs_noise")
c7=b4.F("shadow_ao_intensity")
c8=a9===B.a2?0.45:b5
b4=b4.aQ("shadow_ssdo_enable")?c7:0
if(d>=1)c9=a9===B.aF?b1:1
else c9=0
c9=Math.max(c1,c9)
if(d>=2)d=a9===B.bA?b1:1
else d=0
d=Math.max(c2,d)
d0=b2?320:0
d0=Math.max(c3,d0)
d1=b2?5:c4
d2=b3?1:0
d2=Math.max(c5,d2)
d3=b3?b1:0
d4=b3?b1:0
d4=Math.max(c6,d4)
d5=b3?b1:0
d6=b3?b1:0
d7=b3?b1:0
e.R8=new A.ks(c8,b6,b4,c0,b7,b8,b.c,a8,b9,c9,d,d0,d1,d2,d3,d4,d5,d6,d7,c)}$.f6.j().br(A.yc($.T.j().gh3()))
i=$.aS
if(i!=null){h=i.glw()
if(h!=null){$.A.j().setAttribute("data-renderer-frame-stats",h)
e=$.A.j()
d=i.glv()?"ok":"exceeded"
e.setAttribute("data-renderer-budget",d)}}A.f8("running")
A.EX()
e=$.ac.j()
e.as=e.Q=0
d=e.c
d.a5(0,"WheelUp")
d.a5(0,"WheelDown")
e.d.L(0)
e.f.L(0)
A.e(A.a(v.G.window).requestAnimationFrame(A.U(A.A5())))}catch(d8){g=A.ao(d8)
f=A.cJ(d8)
A.uO(g,f)}},
E8(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.h1("confirm")
$.bd.j().aM("interface confirmation")
break
case"ambient-winnow":a.dN("winnow",0.28)
$.bd.j().aM("wind moving through the house")
break
case"ambient-gate":a.dN("gate",0.22)
$.bd.j().aM("distant gate")
break
case"collapse":a.h1("collapse")
$.bd.j().aM("front door shudders and collapses")
break
case"clock:tick":A.mc(a,p,"tick")
break
case"clock:chime":A.mc(a,p,"chime")
break
case"clock:cuckoo":A.mc(a,p,"cuckoo")
break
case"clock:bell":A.mc(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.d(s,1)
q=s[1]
if(2>=r)return A.d(s,2)
A.mc(a,q,s[2])}}}},
mc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zm,g=$.m7
if(h==null||g==null)return
s=h.lm(b)
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
q=$.X.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.i(A.k("sound room missing: "+o))
m=n.d.ai(0,s.d.aj(0,p))
l=$.m2
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.i(A.k("sound emitter "+s.a+" has no cue for "+c))
a.mh(q,m,s.e,o)
return}q=$.z8
$.z8=q+1
o=A.AW(B.dZ,r,r+":"+q,m,A.DQ(b,c),q,o)
q=$.au
q=A.AS($.vT(),q)
t.gG.a(B.bk)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.i(A.k("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.i(A.k("audio listener room missing: "+q))
j=l.h9(p,q,B.bk)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.i(A.k("audio cue family missing: "+q))
k=J.aF(i)
k=k.h(i,B.d.S(A.Fg(q,o.f),k.gt(i)))
o=o.e
A.ai(j.a,t.N)
a.h2(k,new A.j(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
DQ(a,b){var s,r,q,p=$.T.j().b
for(s=new A.dS(a+":"+b),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){q=s.d
p=A.A1(p,q==null?r.a(q):q)}return p},
Fr(a){var s=$.wB
if(s==null)return
s.textContent=""+B.c.aJ(a>0?1/a:0)+" fps"},
Fp(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.zI||$.bf!=null){$.mj().a=new A.j(0,0,0)
return}s=$.ac.j()
r=s.cu("moveLeft")?-1:0
if(s.cu("moveRight"))++r
q=s.cu("moveForward")?1:0
if(s.cu("moveBack"))--q
s=s.ay?s.w:new A.j(0,0,0)
p=new A.j(r,0,q).ai(0,s)
o=p.gt(0)>1?p.gau():p
$.ac.j().d_(b3)
n=$.ac.j().Q
m=$.ac.j().as
s=$.fd()
l=s.d?-1:1
k=s.e?-1:1
j=$.co
i=$.ac.j()
i=i.ay?i.x:0
h=$.fd()
g=h.d?-1:1
$.co=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.f9
h=$.ac.j()
l=h.ay?h.y:0
j=$.fd()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.f9=i
$.f9=B.c.D(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.j(i*Math.cos($.co)+j*Math.sin($.co),0,-i*Math.sin($.co)+j*Math.cos($.co)).gau().aj(0,2)
j=$.mj()
if(!isFinite(b3)||b3<0)A.i(A.ah(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.i(A.ah(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.ai(0,f.ao(0,l).aj(0,1-s))
j.a=s
d=$.j_.j().lP($.X.j(),$.au,$.eq(),s.aj(0,b3))
$.wS=d.a
if($.c7.j().a!==B.bC&&$.c7.j().a!==B.a2)$.au=d.b
c=B.c.D(j.a.gt(0)/2,0,1)
s=$.AC()
$.wT=s.hN($.wT,$.eq().b,b3)
b=s.k9(b3,c)
s=$.eq()
l=$.wT
$.cI.j().fU(new A.j(s.a+b.a,l+b.b,s.c+b.c),$.co,$.f9)
s=$.T.j().z
a=new A.pW(s)
s=$.cI.j()
l=$.X.j()
a0=A.G9(a,s,$.au,l,$.m7)
l=a0.c
$.yY.j().hD(l)
a1=A.E(A.a(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.x8($.cI.j(),$.X.j(),$.au)
break
case 1:a3=A.Ac($.cI.j(),$.X.j(),$.au)
break
case 2:a4=A.Ad($.cI.j(),$.X.j(),$.au)
break
case 3:l=$.cI.j()
k=$.X.j()
j=$.m7
a5=A.Ab(l,$.au,k,j)
break
case 4:case 5:break}$.yX.j().mR($.fe().e3($.T.j().gaa().a,"status"),$.au==="living-room")
l=$.ac.j()
k=l.CW
if(k.bd(b2,l.d)||k.bd(b2,l.f)){l=$.T.j().gaa()
k=a3==null
j=k?b1:a3.a
i=B.a.a7($.aE.j().ft(21),$.aE.j().glH())
if(l.a===21&&j==="front-door"&&i){s=$.c7.j()
$.X.j()
s.hT(B.eA,A.ai(s.c,t.N))
B.a.l($.db,"collapse")
A.h8("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bd.j().aM("mantle flame extinguished")}else if($.T.j().hQ(1,1)){a2.d=!0
s=$.h2.j()
s.a=a2
s.b=2
$.bd.j().aM("mantle flame catches")}}else{if(!k)l=!a3.ay
else l=!1
if(l){a3.ax=!a3.ax
s=$.bd.j()
s.aM(a3.ax?"door opens":"door closes")
s=$.aS
if(s!=null)s.cP($.X.j(),a3.b)
s=$.aS
if(s!=null)s.dQ($.X.j(),a3.a)
s=$.bq
if(s!=null)s.bw()}else if(a4!=null)if(a4.w){s=$.T.j()
if(s.f.cZ(1)){a4.w=!1
$.bd.j().aM("shutter closes")}}else{a4.w=!0
$.bd.j().aM("shutter opens")}else if(s===B.cj){a6=a.e2()
s=A.C(a6)
l=t.E4
a7=A.bL(new A.G(a6,s.i("l(1)").a(new A.uW(a0)),s.i("G<1>")),l)
if(a7==null)a7=A.bL(a6,l)
if(a7!=null)$.bd.j().bM("noticed",a7.d)}else if(a5!=null){s=$.vS()
if(!a5.x)A.i(A.k("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.A.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.aY(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.ET(a8)
s=$.bd.j()
s.bM("noticed",a9==null?"you inspect "+a8:a9)}}}s=$.h2.j()
if(s.a!=null&&s.b>0){b0=$.h2.j().a
if(b0!=null&&A.x8($.cI.j(),$.X.j(),$.au)!==b0){s=$.h2.j()
s.a=null
s.b=0}}A.F3(b3,a0)},
F3(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="rgba(12, 10, 14, 0.92)",b9=$.en
if(b9==null)return
s=A.a($.A.j().getBoundingClientRect())
r=A.a6(s.width)
q=A.a6(s.height)
if(r<=0||q<=0)return
p=$.cr()
p.mQ(c0)
o=$.Az()
n=o.c
if(n<1)o.c=Math.min(1,n+c0*6)
n=c1.c
m=n!=null
l=o.hh(n,m,$.as.j().y)
o=$.hh()
k=o.a
j=o.d
i=c0*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.X.j()
j=$.au
h=k.e.h(0,j)
k=!$.as.j().y&&$.bf==null
j=p.a
i=p.b
g=p.c
f=p.e
e=p.f
d=p.r
p=p.w
c=$.T.j().gaa()
b=$.be.j().b
a=$.cK()
a0=a.y===B.cp
a1=h==null?null:h.a
if(a1==null)a1=$.au
a=a.z?$.fe().e3($.T.j().gaa().a,"status"):null
a2=b9.a
a2.c+=c0
a3=a2.d
B.a.L(a3)
a4=A.a6(A.a(v.G.window).devicePixelRatio)
a5=B.c.aw(r*a4)
a6=B.c.aw(q*a4)
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
a2.lh(n,q,r)}a2.lg(q,r,new A.pL(j,i,g,f,e,d,p))
b0=r-80-24
a2.aU("#d32f2f",2,8,b8,44,-0.08,160,b0,42)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='bold 14px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
b1=B.d.D(B.c.aW(b*60),0,1439)
b2=B.d.a2(b1,60)
b3=B.d.S(b1,60)
b4=a0?B.d.S(b2+11,12)+1:b2
if(a0)b5=b2<12?" AM":" PM"
else b5=""
a7.fillText("DAY "+c.a+"  \u2022  "+B.b.dM(B.d.p(b4),2,"0")+":"+B.b.dM(B.d.p(b3),2,"0")+b5,b0,42)
a7.restore()
a2.aU("#c49a45",1.8,6,b8,34,0.08,170,109,37)
a7.save()
a7.fillStyle="#c49a45"
a7.font='bold 13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bR(a1.toUpperCase(),142),109,37)
a7.restore()
if(a!=null&&a.length!==0){b6=Math.min(r*0.6,420)
b7=r*0.5
a2.aU("#f5f0e6",1.5,6,b8,32,-0.04,b6,b7,68)
a7.save()
a7.fillStyle="#f5f0e6"
a7.font='13px "Cinzel", serif'
a7.textAlign="center"
a7.textBaseline="middle"
a7.fillText(a2.bR(a,b6-28),b7,68)
a7.restore()}a2.lf(l,q,r)
a2.li(q,r,o)
a7.restore();++b9.b
p=$.A.j()
p.setAttribute("data-renderer-gui-frame",""+b9.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ai(a3,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-surface",""+b9.c+"x"+b9.d)},
ET(a){var s,r,q,p,o=$.T.j().z.b,n=A.o(o).i("F<1,2>"),m=A.K(new A.F(o,n),n.i("n.E"))
B.a.P(m,new A.uI())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.fe().at
n===$&&A.p()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Fu(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cK().Q)return
if($.as.j().y||$.bf!=null||$.aE.j().r!=null)return
s=$.T.j().gaa()
for(r=$.aE.j().ft(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aE.b
if(m===$.aE)A.i(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aE.b
if(r===$.aE)A.i(A.a9(""))
l=r.bV(n)
if(!(l instanceof A.l1))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.xS(A.a(v.G.document),"exitPointerLock",j,j,j,j)
$.mj().a=new A.j(0,0,0)
r=$.as.b
if(r===$.as)A.i(A.a9(""))
q=n.a
r.eb(q,k)
$.cr().bp(!0,B.b5,q,k)
A.zO(n)
return}},
F4(){var s,r,q=$.aE.j().r,p=q==null,o=p?null:q.gbm()
if(p||o==null)return
p=$.as.j()
s=q.a
r=s.a
p.eb(r,o)
$.cr().bp(!0,B.b5,r,o)
A.zO(s)
if(q.d!==B.a7)A.wL()
A.h8("restored visitor")},
zO(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.T.j().lx("stranger-17-eileen-case")
r=$.fe().x
r===$&&A.p()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
p=A.bL(r,t.N)
if(s==null||p==null)return
$.bd.j().bM("inside the case",p+" \u201c"+s.d+"\u201d")},
Fq(){var s,r,q,p,o,n
if(!$.cK().Q)return
s=$.T.j().gaa()
r=$.lY.j().lk(s.a,s.b)
if(r.length===0)return
q=B.a.gU(r)
$.lY.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bd.j().bM(o,q.e)
n=A.Fz(p)
if(n!=null)B.a.l($.db,"ambient-"+n)},
Ft(){var s,r,q,p,o=$.T.j().gaa()
if(o.b<20)return
s=o.a
if(!$.uV.l(0,s))return
r=$.fe().f
r===$&&A.p()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
p=A.G6(r,$.T.j().b,s)
if(p!=null)$.bd.j().bM("noticed",p)},
zD(a){var s,r,q,p,o
if($.wA!=null)return
s=$.T.j().gaa()
r=$.T.j().r.c
q=$.T.j().e.b
p=A.o(q).i("aj<2>")
o=A.Bs(new A.nF(s.a,1-r,new A.G(new A.aj(q,p),p.i("l(n.E)").a(new A.uP()),p.i("G<n.E>")).gt(0),$.T.j().r.d,a))
if(o==null)return
A.zz(o)
A.me("ending recorded")},
zz(a){var s,r,q
$.wA=a
$.zI=!0
$.mj().a=new A.j(0,0,0)
A.j7($.iW.j())
s=a.a
r=$.fe().w
r===$&&A.p()
q=r.h(0,s.b)
r=t.j.b(q)?A.ap(q,!0,t.N):B.o
r=A.K(r,t.N)
B.a.I(r,A.C1($.T.j().z,s))
$.iW.j().hG(a,r)},
DX(a){var s,r,q,p
A:{if("open"===a){s=B.aw
break A}if("chain"===a){s=B.cc
break A}if("through-door"===a){s=B.cd
break A}if("letterbox"===a){s=B.ce
break A}s=B.ad
break A}r=$.aE.j().ku(s)
if(s===B.aw){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aS
if(p!=null)p.cP($.X.j(),q.b)
p=$.aS
if(p!=null)p.dQ($.X.j(),q.a)
p=$.bq
if(p!=null)p.bw()}}if(!(r instanceof A.l_)||s===B.ad){A.ue()
return}if(r.a.gbm()==null){A.wx()
A.ue()
return}A.wL()},
E3(){var s=$.aE.j().ka()
if(!(s instanceof A.ij)||s.b){A.wx()
A.ue()
return}if(s.a.gbm()==null){A.wx()
A.ue()
return}A.wL()},
wL(){var s,r,q,p,o,n,m,l,k,j=$.aE.j().r,i=j==null,h=i?null:j.gbm()
if(i||h==null)return
s=$.aE.j().gbZ()
if(s==null){$.as.j().hF(h)
$.cr().bp(!0,B.o,j.a.a,h)}else{r=j.w
i=r==null
$.as.j().ec(h,i)
q=A.c([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.as.j()
l=A.c([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aQ(k.a,k.b))}m.hH(l,r)
o=$.cr()
m=j.a.a
o.bp(!0,i?q:B.o,m,h)
if(!i){i=A.C(p)
k=A.bL(new A.G(p,i.i("l(1)").a(new A.uL(r)),i.i("G<1>")),t.Y)
if(k!=null){i=$.as.j()
q=k.c
i.ed(h,q)
o.bp(!0,B.o,m,h+"\n\n"+q)}}}A.zN()},
DY(a){var s,r,q,p,o,n=$.aE.j().kv(a)
if(!(n instanceof A.l0))return
s=n.c
if(!$.T.j().kc(n.b,s))return
r=s.c
s=$.as.j()
q=n.a
p=q.gbm()
s.ed(p==null?"":p,r)
o=q.gbm()
if(o==null)o=""
$.cr().bp(!0,B.o,q.a.a,o+"\n\n"+r)
A.zN()
A.me("saved after visitor answer")},
ue(){$.as.j().fP()
$.cr().L(0)
$.ac.j().cQ($.A.j())},
zN(){var s,r,q,p,o=$.as.j(),n=A.a(v.G.document),m=A.c([],t.wt)
for(s=$.m_.j().e4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.aQ(p.a,B.a.gX(p.c).p(0)))}o.hE(n,m)},
DZ(a){var s,r,q,p=$.aE.j().kw(a,!0,$.m_.j())
if(p==null)return
s=$.m_.j().l7(p,B.i3)
r=$.as.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.p()
r.textContent=B.K.bD("",!0,q)},
wx(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aS
if(s!=null)s.cP($.X.j(),r.b)
s=$.aS
if(s!=null)s.dQ($.X.j(),r.a)
s=$.bq
if(s!=null)s.bw()}},
Fs(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.c7.b
if(k===$.c7)A.i(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Ga(a){var s,r,q,p,o,n,m,l=$.X.j().e.h(0,a)
if(l==null||$.be.j().gei()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.n){n=$.be.b
if(n===$.be)A.i(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.m){n=$.be.b
if(n===$.be)A.i(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.A){n=$.be.b
if(n===$.be)A.i(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.C){o=$.be.b
if(o===$.be)A.i(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zA(a){var s,r=$.X.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.iY
if(q.length===0)return 0.12
s=A.C(q)
return B.c.D(new A.G(q,s.i("l(1)").a(new A.uN()),s.i("G<1>")).gt(0)/q.length,0.12,1)},
fV:function fV(a,b){this.a=a
this.b=b},
lC:function lC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
_.lr=$
_.fG=null
_.fH=0},
tu:function tu(a){this.a=a},
tv:function tv(a){this.a=a},
tw:function tw(a){this.a=a},
tq:function tq(){},
tr:function tr(){},
ts:function ts(){},
tt:function tt(){},
to:function to(){},
tp:function tp(){},
tk:function tk(){},
tl:function tl(){},
tm:function tm(){},
tn:function tn(){},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rY:function rY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
tY:function tY(){},
tZ:function tZ(){},
u_:function u_(){},
u5:function u5(){},
u6:function u6(){},
u7:function u7(){},
u8:function u8(){},
u9:function u9(){},
ua:function ua(a){this.a=a},
ub:function ub(a){this.a=a},
uc:function uc(a){this.a=a},
u0:function u0(a){this.a=a},
u1:function u1(){},
u2:function u2(){},
u3:function u3(){},
u4:function u4(){},
tV:function tV(){},
tW:function tW(){},
tX:function tX(){},
tR:function tR(){},
tS:function tS(){},
tT:function tT(){},
tU:function tU(){},
uE:function uE(a,b){this.a=a
this.b=b},
uC:function uC(a){this.a=a},
uD:function uD(a){this.a=a},
vd:function vd(a){this.a=a},
ve:function ve(){},
vf:function vf(){},
vq:function vq(){},
vz:function vz(){},
vA:function vA(){},
vB:function vB(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
vg:function vg(){},
vh:function vh(){},
vi:function vi(){},
vj:function vj(){},
vk:function vk(){},
vl:function vl(){},
vm:function vm(){},
vn:function vn(){},
vo:function vo(){},
vp:function vp(){},
vr:function vr(){},
vs:function vs(){},
vt:function vt(){},
vu:function vu(){},
vv:function vv(){},
vw:function vw(){},
vx:function vx(){},
vy:function vy(){},
uF:function uF(){},
uG:function uG(){},
uJ:function uJ(a){this.a=a},
uS:function uS(a){this.a=a},
uW:function uW(a){this.a=a},
uI:function uI(){},
uP:function uP(){},
uL:function uL(a){this.a=a},
uN:function uN(){},
xS(a,b,c,d,e,f){var s=a[b]()
return s},
oZ(a,b,c){var s=null
return c.a(A.xS(a,b,s,s,s,s))},
vK(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.ah(b.glB(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gE().c.a9()
o=q*16
n=o+16
B.t.cX(s,o,n,p.a)
if(l)B.t.cX(r,o,n,p.dK().a)}m=a.a
A.v(m,"uInstanceModels",new A.x(B.dO,s))
if(l)A.v(m,"uInstanceNormalMatrices",new A.x(B.dO,r))
A.v(m,"uUseInstances",B.dP)},
Bf(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Be(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
A1(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
Fz(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
cb(a,b,c){var s=B.c.D(c,0,1),r=a.c,q=a.b,p=a.a
return new A.b0(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
FP(a){var s,r,q,p,o,n,m,l=B.l.aO(a,null),k=t.f
if(!k.b(l))throw A.b(B.fU)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.j4[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.b(A.a2('text.json section "'+n+'" must be an object',null,null))}return p},
G6(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbq(a)
s=new A.ef()
s.bO((b^274953^c)>>>0)
r=s.aP(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.vZ.prototype={}
J.k1.prototype={
a4(a,b){return a===b},
gM(a){return A.i0(a)},
p(a){return"Instance of '"+A.kv(a)+"'"},
ga3(a){return A.dc(A.wE(this))}}
J.k3.prototype={
p(a){return String(a)},
gM(a){return a?519018:218159},
ga3(a){return A.dc(t.y)},
$iag:1,
$il:1}
J.hF.prototype={
a4(a,b){return null==b},
p(a){return"null"},
gM(a){return 0},
$iag:1,
$iaq:1}
J.hI.prototype={$iae:1}
J.e0.prototype={
gM(a){return 0},
ga3(a){return B.m9},
p(a){return String(a)}}
J.kp.prototype={}
J.eS.prototype={}
J.e_.prototype={
p(a){var s=a[$.Ah()]
if(s==null)s=a[$.he()]
if(s==null)return this.hV(a)
return"JavaScript function for "+J.de(s)},
$iez:1}
J.hH.prototype={
gM(a){return 0},
p(a){return String(a)}}
J.hJ.prototype={
gM(a){return 0},
p(a){return String(a)}}
J.q.prototype={
cG(a,b){return new A.aW(a,A.C(a).i("@<1>").K(b).i("aW<1,2>"))},
l(a,b){A.C(a).c.a(b)
a.$flags&1&&A.bU(a,29)
a.push(b)},
mq(a,b){var s
a.$flags&1&&A.bU(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.y9(b,null))
return a.splice(b,1)[0]},
a5(a,b){var s
a.$flags&1&&A.bU(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ad(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.C(a).i("n<1>").a(b)
a.$flags&1&&A.bU(a,"addAll",2)
if(Array.isArray(b)){this.ij(a,b)
return}for(s=J.R(b);s.m();)a.push(s.gn())},
ij(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.av(a))
for(r=0;r<s;++r)a.push(b[r])},
L(a){a.$flags&1&&A.bU(a,"clear","clear")
a.length=0},
cc(a,b,c){var s=A.C(a)
return new A.M(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("M<1,2>"))},
W(a,b){var s,r=A.e1(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.y(a[s]))
return r.join(b)},
be(a,b,c,d){var s,r,q
d.a(b)
A.C(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.av(a))}return r},
aV(a,b,c){var s,r,q,p=A.C(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.av(a))}if(c!=null)return c.$0()
throw A.b(A.cy())},
af(a,b){return this.aV(a,b,null)},
a0(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
aR(a,b,c){var s=a.length
if(b>s)throw A.b(A.aZ(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.aZ(c,b,s,"end",null))
if(b===c)return A.c([],A.C(a))
return A.c(a.slice(b,c),A.C(a))},
gU(a){if(a.length>0)return a[0]
throw A.b(A.cy())},
gX(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cy())},
gbq(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.b(A.cy())
throw A.b(A.xN())},
N(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.av(a))}return!1},
a7(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.av(a))}return!0},
P(a,b){var s,r,q,p,o,n=A.C(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.bU(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Ew()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.aL()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hb(b,2))
if(p>0)this.jC(a,p)},
Y(a){return this.P(a,null)},
jC(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cY(a,b){var s,r,q,p
a.$flags&2&&A.bU(a,"shuffle")
s=a.length
while(s>1){r=b.aP(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
bE(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.ad(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.ad(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gV(a){return a.length!==0},
p(a){return A.vY(a,"[","]")},
gu(a){return new J.er(a,a.length,A.C(a).i("er<1>"))},
gM(a){return A.i0(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bU(a,"set length","change the length of")
if(b<0)throw A.b(A.aZ(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.v3(a,b))
return a[b]},
k(a,b,c){A.C(a).c.a(c)
a.$flags&2&&A.bU(a)
if(!(b>=0&&b<a.length))throw A.b(A.v3(a,b))
a[b]=c},
e_(a,b){return new A.dD(a,b.i("dD<0>"))},
dG(a,b){var s
A.C(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.dc(A.C(a))},
$iQ:1,
$in:1,
$iD:1}
J.k2.prototype={
mP(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kv(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.p_.prototype={}
J.er.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.u(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia7:1}
J.fz.prototype={
G(a,b){var s
A.a6(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc8(b)
if(this.gc8(a)===s)return 0
if(this.gc8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc8(a){return a===0?1/a<0:a<0},
aw(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.b9(""+a+".toInt()"))},
kr(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.b9(""+a+".ceil()"))},
aW(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.b9(""+a+".floor()"))},
aJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.b9(""+a+".round()"))},
D(a,b,c){if(this.G(b,c)>0)throw A.b(A.x0(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
aK(a,b){var s
if(b>20)throw A.b(A.aZ(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc8(a))return"-"+s
return s},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM(a){var s,r,q,p,o=a|0
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
a2(a,b){return(a|0)===a?a/b|0:this.jN(a,b)},
jN(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.b9("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
dn(a,b){var s
if(a>0)s=this.fb(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jL(a,b){if(0>b)throw A.b(A.x0(b))
return this.fb(a,b)},
fb(a,b){return b>31?0:a>>>b},
ga3(a){return A.dc(t.o)},
$ib4:1,
$it:1,
$ibg:1}
J.hE.prototype={
ga3(a){return A.dc(t.S)},
$iag:1,
$ih:1}
J.k4.prototype={
ga3(a){return A.dc(t.i)},
$iag:1}
J.dZ.prototype={
fs(a,b){return new A.lO(b,a,0)},
hR(a,b){var s
if(typeof b=="string")return A.c(a.split(b),t.s)
else{if(b instanceof A.hG){s=b.e
s=!(s==null?b.e=b.iH():s)}else s=!1
if(s)return A.c(a.split(b.b),t.s)
else return this.iP(a,b)}},
bJ(a,b,c,d){var s=A.kA(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
iP(a,b){var s,r,q,p,o,n,m=A.c([],t.s)
for(s=J.AJ(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.geg()
n=p.gdC()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.H(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.b0(a,r))
return m},
ad(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aZ(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ad(a,b,0)},
H(a,b,c){return a.substring(b,A.kA(b,c,a.length))},
b0(a,b){return this.H(a,b,null)},
bh(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.BT(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.BU(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aj(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.ew)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
dM(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aj(c,s)+a},
cJ(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aZ(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bE(a,b){return this.cJ(a,b,0)},
q(a,b){return A.Gg(a,b,0)},
G(a,b){var s
A.r(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
p(a){return a},
gM(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga3(a){return A.dc(t.N)},
gt(a){return a.length},
$iag:1,
$ib4:1,
$ipP:1,
$if:1}
A.ec.prototype={
gu(a){return new A.hm(J.R(this.gb1()),A.o(this).i("hm<1,2>"))},
gt(a){return J.cL(this.gb1())},
gO(a){return J.ml(this.gb1())},
gV(a){return J.AM(this.gb1())},
a0(a,b){return A.o(this).y[1].a(J.mk(this.gb1(),b))},
gU(a){return A.o(this).y[1].a(J.xq(this.gb1()))},
q(a,b){return J.xp(this.gb1(),b)},
p(a){return J.de(this.gb1())}}
A.hm.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$ia7:1}
A.eu.prototype={
gb1(){return this.a}}
A.is.prototype={$iQ:1}
A.iq.prototype={
h(a,b){return this.$ti.y[1].a(J.aU(this.a,b))},
k(a,b,c){var s=this.$ti
J.bs(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.AN(this.a,b)},
l(a,b){var s=this.$ti
J.hi(this.a,s.c.a(s.y[1].a(b)))},
P(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.rZ(this,b)
J.AO(this.a,s)},
$iQ:1,
$iD:1}
A.rZ.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.aW.prototype={
cG(a,b){return new A.aW(this.a,this.$ti.i("@<1>").K(b).i("aW<1,2>"))},
gb1(){return this.a}}
A.fA.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dS.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.qv.prototype={}
A.Q.prototype={}
A.a4.prototype={
gu(a){var s=this
return new A.aH(s,s.gt(s),A.o(s).i("aH<a4.E>"))},
gO(a){return this.gt(this)===0},
gU(a){if(this.gt(this)===0)throw A.b(A.cy())
return this.a0(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.ad(r.a0(0,s),b))return!0
if(q!==r.gt(r))throw A.b(A.av(r))}return!1},
a7(a,b){var s,r,q=this
A.o(q).i("l(a4.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.a0(0,r)))return!1
if(s!==q.gt(q))throw A.b(A.av(q))}return!0},
N(a,b){var s,r,q=this
A.o(q).i("l(a4.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.a0(0,r)))return!0
if(s!==q.gt(q))throw A.b(A.av(q))}return!1},
W(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.y(p.a0(0,0))
if(o!==p.gt(p))throw A.b(A.av(p))
for(r=s,q=1;q<o;++q){r=r+b+A.y(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.av(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.y(p.a0(0,q))
if(o!==p.gt(p))throw A.b(A.av(p))}return r.charCodeAt(0)==0?r:r}},
cT(a,b){return this.hU(0,A.o(this).i("l(a4.E)").a(b))},
cc(a,b,c){var s=A.o(this)
return new A.M(this,s.K(c).i("1(a4.E)").a(b),s.i("@<a4.E>").K(c).i("M<1,2>"))},
bL(a,b){var s=A.o(this).i("a4.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bK(a){return this.bL(0,!0)},
bo(a){var s,r=this,q=A.w1(A.o(r).i("a4.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.a0(0,s))
return q}}
A.id.prototype={
giT(){var s=J.cL(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjM(){var s=J.cL(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cL(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a0(a,b){var s=this,r=s.gjM()+b
if(b<0||r>=s.giT())throw A.b(A.oQ(b,s.gt(0),s,"index"))
return J.mk(s.a,r)},
bL(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aF(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.xQ(0,n):J.xP(0,n)}r=A.e1(s,m.a0(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.a0(n,o+q))
if(m.gt(n)<l)throw A.b(A.av(p))}return r},
bK(a){return this.bL(0,!0)}}
A.aH.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aF(q),o=p.gt(q)
if(r.b!==o)throw A.b(A.av(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a0(q,s);++r.c
return!0},
$ia7:1}
A.cA.prototype={
gu(a){return new A.hO(J.R(this.a),this.b,A.o(this).i("hO<1,2>"))},
gt(a){return J.cL(this.a)},
gO(a){return J.ml(this.a)},
gU(a){return this.b.$1(J.xq(this.a))},
a0(a,b){return this.b.$1(J.mk(this.a,b))}}
A.di.prototype={$iQ:1}
A.hO.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia7:1}
A.M.prototype={
gt(a){return J.cL(this.a)},
a0(a,b){return this.b.$1(J.mk(this.a,b))}}
A.G.prototype={
gu(a){return new A.S(J.R(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$ia7:1}
A.hw.prototype={
gu(a){return new A.hx(J.R(this.a),this.b,B.ep,this.$ti.i("hx<1,2>"))}}
A.hx.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.R(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$ia7:1}
A.hu.prototype={
m(){return!1},
gn(){throw A.b(A.cy())},
$ia7:1}
A.dD.prototype={
gu(a){return new A.il(J.R(this.a),this.$ti.i("il<1>"))}}
A.il.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$ia7:1}
A.aw.prototype={
st(a,b){throw A.b(A.b9("Cannot change the length of a fixed-length list"))},
l(a,b){A.bT(a).i("aw.E").a(b)
throw A.b(A.b9("Cannot add to a fixed-length list"))}}
A.d3.prototype={
k(a,b,c){A.o(this).i("d3.E").a(c)
throw A.b(A.b9("Cannot modify an unmodifiable list"))},
st(a,b){throw A.b(A.b9("Cannot change the length of an unmodifiable list"))},
l(a,b){A.o(this).i("d3.E").a(b)
throw A.b(A.b9("Cannot add to an unmodifiable list"))},
P(a,b){A.o(this).i("h(d3.E,d3.E)?").a(b)
throw A.b(A.b9("Cannot modify an unmodifiable list"))}}
A.fR.prototype={}
A.eN.prototype={
gt(a){return J.cL(this.a)},
a0(a,b){var s=this.a,r=J.aF(s)
return r.a0(s,r.gt(s)-1-b)}}
A.iU.prototype={}
A.aQ.prototype={$r:"+(1,2)",$s:1}
A.f4.prototype={$r:"+height,width(1,2)",$s:2}
A.iE.prototype={$r:"+influence,light(1,2)",$s:3}
A.az.prototype={$r:"+(1,2,3)",$s:4}
A.b0.prototype={$r:"+b,g,r(1,2,3)",$s:5}
A.iF.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:6}
A.iG.prototype={$r:"+(1,2,3,4)",$s:8}
A.cl.prototype={$r:"+floor,id,wall,x,z(1,2,3,4,5)",$s:9}
A.hp.prototype={}
A.fn.prototype={
gO(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
p(a){return A.w2(this)},
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.B7()},
gJ(){return new A.bS(this.lq(),A.o(this).i("bS<L<1,2>>"))},
lq(){var s=this
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
bG(a,b,c,d){var s=A.m(c,d)
this.ar(0,new A.nf(this,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),s))
return s},
$iW:1}
A.nf.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a3.prototype={
gt(a){return this.b.length},
geS(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
R(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.R(b))return null
return this.b[this.a[b]]},
ar(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geS()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga1(){return new A.f_(this.geS(),this.$ti.i("f_<1>"))},
gaE(){return new A.f_(this.b,this.$ti.i("f_<2>"))}}
A.f_.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.f0(s,s.length,this.$ti.i("f0<1>"))}}
A.f0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia7:1}
A.cR.prototype={
bv(){var s=this,r=s.$map
if(r==null){r=new A.hK(s.$ti.i("hK<1,2>"))
A.zV(s.a,r)
s.$map=r}return r},
R(a){return this.bv().R(a)},
h(a,b){return this.bv().h(0,b)},
ar(a,b){this.$ti.i("~(1,2)").a(b)
this.bv().ar(0,b)},
ga1(){var s=this.bv()
return new A.aa(s,A.o(s).i("aa<1>"))},
gaE(){var s=this.bv()
return new A.aj(s,A.o(s).i("aj<2>"))},
gt(a){return this.bv().a}}
A.hq.prototype={
l(a,b){A.o(this).c.a(b)
A.B8()}}
A.aL.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gV(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f0(s,s.length,r.$ti.i("f0<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bo(a){return A.ka(this,this.$ti.c)}}
A.q3.prototype={
$0(){return B.c.aW(1000*this.a.now())},
$S:39}
A.i6.prototype={}
A.rt.prototype={
aY(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hV.prototype={
p(a){return"Null check operator used on a null value"}}
A.k5.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kU.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pI.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.hv.prototype={}
A.iI.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$id0:1}
A.dR.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Af(r==null?"unknown":r)+"'"},
ga3(a){var s=A.x2(this)
return A.dc(s==null?A.bT(this):s)},
$iez:1,
gn2(){return this},
$C:"$1",
$R:1,
$D:null}
A.jr.prototype={$C:"$0",$R:0}
A.js.prototype={$C:"$2",$R:2}
A.kQ.prototype={}
A.kN.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Af(s)+"'"}}
A.fg.prototype={
a4(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fg))return!1
return this.$_target===b.$_target&&this.a===b.a},
gM(a){return(A.mi(this.a)^A.i0(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kv(this.a)+"'")}}
A.kE.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gV(a){return this.a!==0},
ga1(){return new A.aa(this,A.o(this).i("aa<1>"))},
gaE(){return new A.aj(this,A.o(this).i("aj<2>"))},
gJ(){return new A.F(this,A.o(this).i("F<1,2>"))},
R(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lC(a)},
lC(a){var s=this.d
if(s==null)return!1
return this.c7(s[this.c6(a)],a)>=0},
I(a,b){A.o(this).i("W<1,2>").a(b).ar(0,new A.p8(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lD(b)},
lD(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c6(a)]
r=this.c7(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.el(s==null?q.b=q.dj():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.el(r==null?q.c=q.dj():r,b,c)}else q.lF(b,c)},
lF(a,b){var s,r,q,p,o=this,n=A.o(o)
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
a5(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.ih(this.c,b)
else return this.lE(b)},
lE(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.c6(a)
r=n[s]
q=o.c7(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.ej(p)
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
if(r!==q.r)throw A.b(A.av(q))
s=s.c}},
el(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dk(b,c)
else s.b=c},
ih(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.ej(s)
delete a[b]
return s.b},
d0(){this.r=this.r+1&1073741823},
dk(a,b){var s=this,r=A.o(s),q=new A.pk(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.d0()
return q},
ej(a){var s=this,r=a.d,q=a.c
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
p(a){return A.w2(this)},
dj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iw0:1}
A.p8.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.pk.prototype={}
A.aa.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.i("cg<1>"))},
q(a,b){return this.a.R(b)}}
A.cg.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia7:1}
A.aj.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.af(s,s.r,s.e,this.$ti.i("af<1>"))}}
A.af.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia7:1}
A.F.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cz(s,s.r,s.e,this.$ti.i("cz<1,2>"))}}
A.cz.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.av(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.L(s.a,s.b,r.$ti.i("L<1,2>"))
r.c=s.c
return!0}},
$ia7:1}
A.hK.prototype={
c6(a){return A.FK(a)&1073741823},
c7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1}}
A.v8.prototype={
$1(a){return this.a(a)},
$S:13}
A.v9.prototype={
$2(a,b){return this.a(a,b)},
$S:148}
A.va.prototype={
$1(a){return this.a(A.r(a))},
$S:37}
A.bc.prototype={
ga3(a){return A.dc(this.eP())},
eP(){return A.FU(this.$r,this.ct())},
p(a){return this.fi(!1)},
fi(a){var s,r,q,p,o,n=this.iX(),m=this.ct(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.y6(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iX(){var s,r=this.$s
while($.tx.length<=r)B.a.l($.tx,null)
s=$.tx[r]
if(s==null){s=this.iG()
B.a.k($.tx,r,s)}return s},
iG(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.xO(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ai(j,k)}}
A.eg.prototype={
ct(){return[this.a,this.b]},
a4(a,b){if(b==null)return!1
return b instanceof A.eg&&this.$s===b.$s&&J.ad(this.a,b.a)&&J.ad(this.b,b.b)},
gM(a){return A.cC(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.eh.prototype={
ct(){return[this.a,this.b,this.c]},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.eh&&s.$s===b.$s&&J.ad(s.a,b.a)&&J.ad(s.b,b.b)&&J.ad(s.c,b.c)},
gM(a){var s=this
return A.cC(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.f3.prototype={
ct(){return this.a},
a4(a,b){if(b==null)return!1
return b instanceof A.f3&&this.$s===b.$s&&A.Df(this.a,b.a)},
gM(a){return A.cC(this.$s,A.C5(this.a),B.f,B.f,B.f,B.f)}}
A.hG.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
gjc(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xU(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
iH(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
fs(a,b){return new A.lc(this,b,0)},
iW(a,b){var s,r=this.gjc()
if(r==null)r=A.f7(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lx(s)},
$ipP:1,
$iCl:1}
A.lx.prototype={
geg(){return this.b.index},
gdC(){var s=this.b
return s.index+s[0].length},
$ifE:1,
$ii1:1}
A.lc.prototype={
gu(a){return new A.ld(this.a,this.b,this.c)}}
A.ld.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.iW(l,s)
if(p!=null){m.d=p
o=p.gdC()
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
$ia7:1}
A.ic.prototype={
gdC(){return this.a+this.c.length},
$ifE:1,
geg(){return this.a}}
A.lO.prototype={
gu(a){return new A.lP(this.a,this.b,this.c)},
gU(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ic(r,s)
throw A.b(A.cy())}}
A.lP.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ic(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$ia7:1}
A.t_.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.a9(""))
return s}}
A.fG.prototype={
ga3(a){return B.m2},
$iag:1}
A.fF.prototype={$ifF:1}
A.hT.prototype={
j5(a,b,c,d){var s=A.aZ(b,0,c,d,null)
throw A.b(s)},
eu(a,b,c,d){if(b>>>0!==b||b>c)this.j5(a,b,c,d)}}
A.ke.prototype={
ga3(a){return B.m3},
$iag:1}
A.b5.prototype={
gt(a){return a.length},
f8(a,b,c,d,e){var s,r,q=a.length
this.eu(a,b,q,"start")
this.eu(a,c,q,"end")
if(b>c)throw A.b(A.aZ(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.w(e,null))
r=d.length
if(r-e<s)throw A.b(A.k("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibX:1}
A.hR.prototype={
h(a,b){A.dI(b,a,a.length)
return a[b]},
k(a,b,c){A.bp(c)
a.$flags&2&&A.bU(a)
A.dI(b,a,a.length)
a[b]=c},
cX(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bU(a,5)
this.f8(a,b,c,d,0)
return},
$iQ:1,
$in:1,
$iD:1}
A.hS.prototype={
k(a,b,c){A.e(c)
a.$flags&2&&A.bU(a)
A.dI(b,a,a.length)
a[b]=c},
hz(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bU(a,5)
this.f8(a,b,c,d,e)
return},
$iQ:1,
$in:1,
$iD:1}
A.hQ.prototype={
ga3(a){return B.m4},
aR(a,b,c){return new Float32Array(a.subarray(b,A.DV(b,c,a.length)))},
$iag:1,
$inP:1}
A.kf.prototype={
ga3(a){return B.m5},
$iag:1}
A.kg.prototype={
ga3(a){return B.m6},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.kh.prototype={
ga3(a){return B.m7},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.ki.prototype={
ga3(a){return B.m8},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.kj.prototype={
ga3(a){return B.mb},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1,
$iwe:1}
A.kk.prototype={
ga3(a){return B.mc},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.eG.prototype={
ga3(a){return B.md},
gt(a){return a.length},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1,
$ieG:1}
A.hU.prototype={
ga3(a){return B.me},
gt(a){return a.length},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1,
$iig:1}
A.iz.prototype={}
A.iA.prototype={}
A.iB.prototype={}
A.iC.prototype={}
A.cF.prototype={
i(a){return A.iM(v.typeUniverse,this,a)},
K(a){return A.yN(v.typeUniverse,this,a)}}
A.lq.prototype={}
A.lS.prototype={
p(a){return A.bH(this.a,null)}}
A.lo.prototype={
p(a){return this.a}}
A.fZ.prototype={$idA:1}
A.rV.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
A.rU.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:138}
A.rW.prototype={
$0(){this.a.$0()},
$S:12}
A.rX.prototype={
$0(){this.a.$0()},
$S:12}
A.tA.prototype={
ig(a,b){if(self.setTimeout!=null)self.setTimeout(A.hb(new A.tB(this,b),0),a)
else throw A.b(A.b9("`setTimeout()` not found."))}}
A.tB.prototype={
$0(){this.b.$0()},
$S:0}
A.le.prototype={
ds(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.d3(a)
else{s=r.a
if(q.i("bW<1>").b(a))s.er(a)
else s.cr(a)}},
dt(a,b){var s=this.a
if(this.b)s.bk(new A.b2(a,b))
else s.cp(new A.b2(a,b))}}
A.tN.prototype={
$1(a){return this.a.$2(0,a)},
$S:22}
A.tO.prototype={
$2(a,b){this.a.$2(1,new A.hv(a,t.l.a(b)))},
$S:67}
A.uZ.prototype={
$2(a,b){this.a(A.e(a),b)},
$S:72}
A.c6.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
jF(a,b){var s,r,q
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
o.d=null}q=o.jF(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yI
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
o.a=A.yI
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.k("sync*"))}return!1},
n5(a){var s,r,q=this
if(a instanceof A.bS){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.R(a)
return 2}},
$ia7:1}
A.bS.prototype={
gu(a){return new A.c6(this.a(),this.$ti.i("c6<1>"))}}
A.b2.prototype={
p(a){return A.y(this.a)},
$ial:1,
gbN(){return this.b}}
A.nX.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.ez(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ao(p)
q=A.cJ(p)
l=r
o=q
n=A.wF(l,o)
l=new A.b2(l,o)
m.b.bk(l)
return}m.b.ez(s)}},
$S:0}
A.o_.prototype={
$2(a,b){var s,r,q=this
A.f7(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bk(new A.b2(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bk(new A.b2(r,s))}},
$S:73}
A.nZ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bs(r,k.b,a)
if(J.ad(s,0)){q=A.c([],j.i("q<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.u)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hi(q,l)}k.c.cr(q)}}else if(J.ad(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bk(new A.b2(q,o))}},
$S(){return this.d.i("aq(0)")}}
A.li.prototype={
dt(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.cp(A.Ev(a,b))},
fw(a){return this.dt(a,null)}}
A.io.prototype={
ds(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.k("Future already completed"))
s.d3(r.i("1/").a(a))}}
A.dF.prototype={
lN(a){if((this.c&15)!==6)return!0
return this.b.b.dX(t.bl.a(this.d),a.a,t.y,t.K)},
ly(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.mL(q,m,a.b,o,n,t.l)
else p=l.dX(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.ao(s))){if((r.c&1)!==0)throw A.b(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ar.prototype={
dY(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.am
if(s===B.x){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.ah(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.zB(b,s)}r=new A.ar(s,c.i("ar<0>"))
this.co(new A.dF(r,3,a,b,q.i("@<1>").K(c).i("dF<1,2>")))
return r},
fg(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.ar($.am,c.i("ar<0>"))
this.co(new A.dF(s,19,a,b,r.i("@<1>").K(c).i("dF<1,2>")))
return s},
jI(a){this.a=this.a&1|16
this.c=a},
cq(a){this.a=a.a&30|this.a&1
this.c=a.c},
co(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.co(a)
return}r.cq(s)}A.md(null,null,r.b,t.O.a(new A.t2(r,a)))}},
f_(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.f_(a)
return}m.cq(n)}l.a=m.cB(a)
A.md(null,null,m.b,t.O.a(new A.t7(l,m)))}},
bT(){var s=t.F.a(this.c)
this.c=null
return this.cB(s)},
cB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ez(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bW<1>").b(a))A.t5(a,r,!0)
else{s=r.bT()
q.c.a(a)
r.a=8
r.c=a
A.eY(r,s)}},
cr(a){var s,r=this
r.$ti.c.a(a)
s=r.bT()
r.a=8
r.c=a
A.eY(r,s)},
iF(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bT()
q.cq(a)
A.eY(q,r)},
bk(a){var s=this.bT()
this.jI(a)
A.eY(this,s)},
d3(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bW<1>").b(a)){this.er(a)
return}this.io(a)},
io(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.md(null,null,s.b,t.O.a(new A.t4(s,a)))},
er(a){A.t5(this.$ti.i("bW<1>").a(a),this,!1)
return},
cp(a){this.a^=2
A.md(null,null,this.b,t.O.a(new A.t3(this,a)))},
$ibW:1}
A.t2.prototype={
$0(){A.eY(this.a,this.b)},
$S:0}
A.t7.prototype={
$0(){A.eY(this.b,this.a.a)},
$S:0}
A.t6.prototype={
$0(){A.t5(this.a.a,this.b,!0)},
$S:0}
A.t4.prototype={
$0(){this.a.cr(this.b)},
$S:0}
A.t3.prototype={
$0(){this.a.bk(this.b)},
$S:0}
A.ta.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.mK(t.pF.a(q.d),t.z)}catch(p){s=A.ao(p)
r=A.cJ(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mC(q)
n=k.a
n.c=new A.b2(q,o)
q=n}q.b=!0
return}if(j instanceof A.ar&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ar){m=k.b.a
l=new A.ar(m.b,m.$ti)
j.dY(new A.tb(l,m),new A.tc(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tb.prototype={
$1(a){this.a.iF(this.b)},
$S:15}
A.tc.prototype={
$2(a,b){A.f7(a)
t.l.a(b)
this.a.bk(new A.b2(a,b))},
$S:78}
A.t9.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dX(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ao(l)
r=A.cJ(l)
q=s
p=r
if(p==null)p=A.mC(q)
o=this.a
o.c=new A.b2(q,p)
o.b=!0}},
$S:0}
A.t8.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.lN(s)&&p.a.e!=null){p.c=p.a.ly(s)
p.b=!1}}catch(o){r=A.ao(o)
q=A.cJ(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mC(p)
m=l.b
m.c=new A.b2(p,n)
p=m}p.b=!0}},
$S:0}
A.lf.prototype={}
A.lN.prototype={}
A.iT.prototype={$iyA:1}
A.lG.prototype={
mM(a){var s,r,q
t.O.a(a)
try{if(B.x===$.am){a.$0()
return}A.zG(null,null,this,a,t.H)}catch(q){s=A.ao(q)
r=A.cJ(q)
A.wQ(A.f7(s),t.l.a(r))}},
fv(a){return new A.ty(this,t.O.a(a))},
mK(a,b){b.i("0()").a(a)
if($.am===B.x)return a.$0()
return A.zG(null,null,this,a,b)},
dX(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.am===B.x)return a.$1(b)
return A.F8(null,null,this,a,b,c,d)},
mL(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.am===B.x)return a.$2(b,c)
return A.F7(null,null,this,a,b,c,d,e,f)},
h5(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.ty.prototype={
$0(){return this.a.mM(this.b)},
$S:0}
A.uQ.prototype={
$0(){A.Bx(this.a,this.b)},
$S:0}
A.it.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gV(a){return this.a!==0},
ga1(){return new A.eZ(this,this.$ti.i("eZ<1>"))},
gaE(){var s=this.$ti
return A.kb(new A.eZ(this,s.i("eZ<1>")),new A.te(this),s.c,s.y[1])},
R(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iL(a)},
iL(a){var s=this.d
if(s==null)return!1
return this.bl(this.eO(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yC(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yC(q,b)
return r}else return this.j_(b)},
j_(a){var s,r,q=this.d
if(q==null)return null
s=this.eO(q,a)
r=this.bl(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ex(s==null?m.b=A.wi():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ex(r==null?m.c=A.wi():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wi()
p=A.mi(b)&1073741823
o=q[p]
if(o==null){A.wj(q,p,[b,c]);++m.a
m.e=null}else{n=m.bl(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ar(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ey()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.av(m))}},
ey(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.e1(i.a,null,!1,t.z)
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
ex(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wj(a,b,c)},
eO(a,b){return a[A.mi(b)&1073741823]}}
A.te.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iv.prototype={
bl(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eZ.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iu(s,s.ey(),this.$ti.i("iu<1>"))},
q(a,b){return this.a.R(b)}}
A.iu.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.av(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia7:1}
A.ck.prototype={
eX(){return new A.ck(A.o(this).i("ck<1>"))},
gu(a){var s=this,r=new A.f1(s,s.r,A.o(s).i("f1<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gV(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.iK(b)},
iK(a){var s=this.d
if(s==null)return!1
return this.bl(s[this.d7(a)],a)>=0},
gU(a){var s=this.e
if(s==null)throw A.b(A.k("No elements"))
return A.o(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ew(s==null?q.b=A.wk():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ew(r==null?q.c=A.wk():r,b)}else return q.ii(b)},
ii(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wk()
r=p.d7(a)
q=s[r]
if(q==null)s[r]=[p.d6(a)]
else{if(p.bl(q,a)>=0)return!1
q.push(p.d6(a))}return!0},
a5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.f0(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.f0(s.c,b)
else return s.jB(b)},
jB(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.d7(a)
r=n[s]
q=o.bl(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.fk(p)
return!0},
iY(a,b){var s,r,q,p,o,n=this,m=A.o(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.av(n))
if(!0===o)n.a5(0,r)}},
L(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.di()}},
ew(a,b){A.o(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.d6(b)
return!0},
f0(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.fk(s)
delete a[b]
return!0},
di(){this.r=this.r+1&1073741823},
d6(a){var s,r=this,q=new A.lw(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.di()
return q},
fk(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.di()},
d7(a){return J.aA(a)&1073741823},
bl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1},
$iy_:1}
A.lw.prototype={}
A.f1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.av(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia7:1}
A.pl.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:111}
A.V.prototype={
gu(a){return new A.aH(a,this.gt(a),A.bT(a).i("aH<V.E>"))},
a0(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gV(a){return!this.gO(a)},
gU(a){if(this.gt(a)===0)throw A.b(A.cy())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.ad(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.b(A.av(a))}return!1},
a7(a,b){var s,r
A.bT(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.b(A.av(a))}return!0},
N(a,b){var s,r
A.bT(a).i("l(V.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.b(A.av(a))}return!1},
W(a,b){var s
if(this.gt(a)===0)return""
s=A.wc("",a,b)
return s.charCodeAt(0)==0?s:s},
e_(a,b){return new A.dD(a,b.i("dD<0>"))},
cc(a,b,c){var s=A.bT(a)
return new A.M(a,s.K(c).i("1(V.E)").a(b),s.i("@<V.E>").K(c).i("M<1,2>"))},
l(a,b){var s
A.bT(a).i("V.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cG(a,b){return new A.aW(a,A.bT(a).i("@<V.E>").K(b).i("aW<1,2>"))},
P(a,b){var s,r=A.bT(a)
r.i("h(V.E,V.E)?").a(b)
s=b==null?A.FJ():b
A.kJ(a,0,this.gt(a)-1,s,r.i("V.E"))},
ls(a,b,c,d){var s
A.bT(a).i("V.E?").a(d)
A.kA(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.vY(a,"[","]")},
$iQ:1,
$in:1,
$iD:1}
A.a5.prototype={
ar(a,b){var s,r,q,p=A.o(this)
p.i("~(a5.K,a5.V)").a(b)
for(s=this.ga1(),s=s.gu(s),p=p.i("a5.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga1().cc(0,new A.pn(this),A.o(this).i("L<a5.K,a5.V>"))},
bG(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.K(c).K(d).i("L<1,2>(a5.K,a5.V)").a(b)
s=A.m(c,d)
for(r=this.ga1(),r=r.gu(r),n=n.i("a5.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
k6(a){var s,r
for(s=J.R(A.o(this).i("n<L<a5.K,a5.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
R(a){return this.ga1().q(0,a)},
gt(a){var s=this.ga1()
return s.gt(s)},
gO(a){var s=this.ga1()
return s.gO(s)},
gV(a){var s=this.ga1()
return s.gV(s)},
gaE(){return new A.iw(this,A.o(this).i("iw<a5.K,a5.V>"))},
p(a){return A.w2(this)},
$iW:1}
A.pn.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("a5.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("a5.V").a(s)
return new A.L(a,s,r.i("L<a5.K,a5.V>"))},
$S(){return A.o(this.a).i("L<a5.K,a5.V>(a5.K)")}}
A.po.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:34}
A.iw.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gV(a){var s=this.a
return s.gV(s)},
gU(a){var s=this.a,r=s.ga1()
r=s.h(0,r.gU(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga1()
return new A.ix(r.gu(r),s,this.$ti.i("ix<1,2>"))}}
A.ix.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia7:1}
A.iN.prototype={
k(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.b9("Cannot modify unmodifiable map"))}}
A.fD.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.o(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
R(a){return this.a.R(a)},
ar(a,b){this.a.ar(0,A.o(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gV(a){var s=this.a
return s.gV(s)},
gt(a){var s=this.a
return s.gt(s)},
ga1(){return this.a.ga1()},
p(a){return this.a.p(0)},
gaE(){return this.a.gaE()},
gJ(){return this.a.gJ()},
bG(a,b,c,d){return this.a.bG(0,A.o(this).K(c).K(d).i("L<1,2>(3,4)").a(b),c,d)},
$iW:1}
A.e9.prototype={}
A.dw.prototype={
gO(a){return this.gt(this)===0},
gV(a){return this.gt(this)!==0},
I(a,b){var s
for(s=J.R(A.o(this).i("n<1>").a(b));s.m();)this.l(0,s.gn())},
bn(a){var s,r,q=this.bo(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a5(0,r)}return q},
p(a){return A.vY(this,"{","}")},
a7(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
W(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.de(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.y(q.gn())
while(q.m())}else{r=s
do r=r+b+A.y(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.o(this).i("l(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cy())
return s.gn()},
a0(a,b){var s,r
A.kz(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.oQ(b,b-r,this,"index"))},
$iQ:1,
$in:1,
$ie6:1}
A.iH.prototype={
bn(a){var s,r,q,p=this,o=p.eX()
for(s=A.fT(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bo(a){var s=this.eX()
s.I(0,this)
return s}}
A.lT.prototype={
l(a,b){this.$ti.c.a(b)
return A.Dr()}}
A.fS.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.fT(s,s.r,A.o(s).c)},
bo(a){return this.a.bo(0)}}
A.h_.prototype={}
A.iO.prototype={}
A.lu.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jv(b):s}},
gt(a){return this.b==null?this.c.a:this.bs().length},
gO(a){return this.gt(0)===0},
gV(a){return this.gt(0)>0},
ga1(){if(this.b==null){var s=this.c
return new A.aa(s,A.o(s).i("aa<1>"))}return new A.lv(this)},
gaE(){var s,r=this
if(r.b==null){s=r.c
return new A.aj(s,A.o(s).i("aj<2>"))}return A.kb(r.bs(),new A.tg(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.r(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.R(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jU().k(0,b,c)},
R(a){if(this.b==null)return this.c.R(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ar(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.ar(0,b)
s=o.bs()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ud(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.av(o))}},
bs(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.c(Object.keys(this.a),t.s)
return s},
jU(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bs()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.L(r)
n.a=n.b=null
return n.c=s},
jv(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ud(this.a[a])
return this.b[a]=s}}
A.tg.prototype={
$1(a){return this.a.h(0,A.r(a))},
$S:37}
A.lv.prototype={
gt(a){return this.a.gt(0)},
a0(a,b){var s=this.a
if(s.b==null)s=s.ga1().a0(0,b)
else{s=s.bs()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga1()
s=s.gu(s)}else{s=s.bs()
s=new J.er(s,s.length,A.C(s).i("er<1>"))}return s},
q(a,b){return this.a.R(b)}}
A.tF.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:30}
A.tE.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:30}
A.jl.prototype={
lQ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.kA(a4,a5,a2)
s=$.At()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.v6(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.v6(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bl("")
g=o}else g=o
g.a+=B.b.H(a3,p,q)
c=A.ay(j)
g.a+=c
p=k
continue}}throw A.b(A.a2("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.H(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xt(a3,m,a5,n,l,r)
else{b=B.d.S(r-1,4)+1
if(b===1)throw A.b(A.a2(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bJ(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xt(a3,m,a5,n,l,a)
else{b=B.d.S(a,4)
if(b===1)throw A.b(A.a2(a1,a3,a5))
if(b>1)a3=B.b.bJ(a3,a5,a5,b===2?"==":"=")}return a3}}
A.mY.prototype={}
A.ev.prototype={}
A.jw.prototype={}
A.jG.prototype={}
A.hL.prototype={
p(a){var s=A.jH(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k7.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.k6.prototype={
aO(a,b){var s=A.EW(a,this.gla().a)
return s},
ab(a,b){var s=A.D7(a,this.gln().b,null)
return s},
gln(){return B.i8},
gla(){return B.i7}}
A.pa.prototype={}
A.p9.prototype={}
A.ti.prototype={
hf(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
o=A.ay(117)
s.a+=o
o=A.ay(100)
s.a+=o
o=p>>>8&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ay(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
switch(p){case 8:o=A.ay(98)
s.a+=o
break
case 9:o=A.ay(116)
s.a+=o
break
case 10:o=A.ay(110)
s.a+=o
break
case 12:o=A.ay(102)
s.a+=o
break
case 13:o=A.ay(114)
s.a+=o
break
default:o=A.ay(117)
s.a+=o
o=A.ay(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.H(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
o=A.ay(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.H(a,r,m)},
d4(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.k7(a,null))}B.a.l(s,a)},
cU(a){var s,r,q,p,o=this
if(o.he(a))return
o.d4(a)
try{s=o.b.$1(a)
if(!o.he(s)){q=A.xW(a,null,o.geZ())
throw A.b(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ao(p)
q=A.xW(a,r,o.geZ())
throw A.b(q)}},
he(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hf(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.d4(a)
q.n0(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.d4(a)
r=q.n1(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
n0(a){var s,r,q=this.c
q.a+="["
s=J.aF(a)
if(s.gV(a)){this.cU(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.cU(s.h(a,r))}}q.a+="]"},
n1(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.e1(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ar(0,new A.tj(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hf(A.r(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cU(r[n])}p.a+="}"
return!0}}
A.tj.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:34}
A.th.prototype={
geZ(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.kY.prototype={}
A.ry.prototype={
kA(a){return new A.tD(this.a).iM(t.U.a(a),0,null,!0)}}
A.tD.prototype={
iM(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.U.a(a)
s=A.kA(b,c,J.cL(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.DI(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.DH(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.d9(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.DJ(o)
l.b=0
throw A.b(A.a2(m,a,p+l.c))}return n},
d9(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.a2(b+c,2)
r=q.d9(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.d9(a,s,c,d)}return q.l9(a,b,c,d)},
l9(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bl(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ay(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ay(h)
e.a+=p
break
case 65:p=A.ay(h)
e.a+=p;--d
break
default:p=A.ay(h)
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
p=A.ay(a[l])
e.a+=p}else{p=A.yi(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ay(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.ew.prototype={
a4(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.ew)if(this.a===b.a)s=this.b===b.b
return s},
gM(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
p(a){var s=this,r=A.Bc(A.Ch(s)),q=A.jy(A.Cf(s)),p=A.jy(A.Cb(s)),o=A.jy(A.Cc(s)),n=A.jy(A.Ce(s)),m=A.jy(A.Cg(s)),l=A.xA(A.Cd(s)),k=s.b,j=k===0?"":A.xA(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib4:1}
A.dT.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.dT&&this.a===b.a},
gM(a){return B.d.gM(this.a)},
G(a,b){return B.d.G(this.a,t.ya.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.a2(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.a2(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.dM(B.d.p(o%1e6),6,"0")},
$ib4:1}
A.ln.prototype={
p(a){return this.v()},
$iB:1}
A.al.prototype={
gbN(){return A.Ca(this)}}
A.jh.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jH(s)
return"Assertion failed"}}
A.dA.prototype={}
A.ct.prototype={
gde(){return"Invalid argument"+(!this.a?"(s)":"")},
gdd(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.gde()+q+o
if(!s.a)return n
return n+s.gdd()+": "+A.jH(s.gdH())},
gdH(){return this.b}}
A.fJ.prototype={
gdH(){return A.ws(this.b)},
gde(){return"RangeError"},
gdd(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.jZ.prototype={
gdH(){return A.e(this.b)},
gde(){return"RangeError"},
gdd(){if(A.e(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.ih.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kT.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fP.prototype={
p(a){return"Bad state: "+this.a}}
A.jt.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jH(s)+"."}}
A.km.prototype={
p(a){return"Out of Memory"},
gbN(){return null},
$ial:1}
A.ia.prototype={
p(a){return"Stack Overflow"},
gbN(){return null},
$ial:1}
A.t0.prototype={
p(a){return"Exception: "+this.a}}
A.H.prototype={
p(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.H(e,0,75)+"..."
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
k=""}return g+l+B.b.H(e,i,j)+k+"\n"+B.b.aj(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.y(f)+")"):g}}
A.n.prototype={
cG(a,b){return A.B1(this,A.o(this).i("n.E"),b)},
cc(a,b,c){var s=A.o(this)
return A.kb(this,s.K(c).i("1(n.E)").a(b),s.i("n.E"),c)},
cT(a,b){var s=A.o(this)
return new A.G(this,s.i("l(n.E)").a(b),s.i("G<n.E>"))},
e_(a,b){return new A.dD(this,b.i("dD<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.ad(s.gn(),b))return!0
return!1},
be(a,b,c,d){var s,r
d.a(b)
A.o(this).K(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a7(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
W(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.de(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.de(q.gn())
while(q.m())}else{r=s
do r=r+A.y(b)+J.de(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.o(this).i("l(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bL(a,b){var s=A.K(this,A.o(this).i("n.E"))
return s},
bK(a){return this.bL(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gV(a){return!this.gO(this)},
gU(a){var s=this.gu(this)
if(!s.m())throw A.b(A.cy())
return s.gn()},
gbq(a){var s,r=this.gu(this)
if(!r.m())throw A.b(A.cy())
s=r.gn()
if(r.m())throw A.b(A.xN())
return s},
aV(a,b,c){var s,r=A.o(this)
r.i("l(n.E)").a(b)
r.i("n.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cy())},
af(a,b){return this.aV(0,b,null)},
a0(a,b){var s,r
A.kz(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.oQ(b,b-r,this,"index"))},
p(a){return A.BR(this,"(",")")}}
A.L.prototype={
p(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.aq.prototype={
gM(a){return A.N.prototype.gM.call(this,0)},
p(a){return"null"}}
A.N.prototype={$iN:1,
a4(a,b){return this===b},
gM(a){return A.i0(this)},
p(a){return"Instance of '"+A.kv(this)+"'"},
ga3(a){return A.x4(this)},
toString(){return this.p(this)}}
A.lQ.prototype={
p(a){return""},
$id0:1}
A.rf.prototype={
gll(){var s,r=this.b
if(r==null)r=$.q5.$0()
s=r-this.a
if($.xg()===1e6)return s
return s*1000}}
A.bl.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCA:1}
A.rx.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.r(b)
s=B.b.bE(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wp(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.H(b,0,s)
q=B.b.b0(b,s+1)
p=this.a
a.k(0,A.wp(r,0,r.length,p,!0),A.wp(q,0,q.length,p,!0))}return a},
$S:158}
A.rw.prototype={
$2(a,b){throw A.b(A.a2("Illegal IPv6 address, "+a,this.a,b))},
$S:59}
A.iP.prototype={
gfd(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.y(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gM(a){var s,r=this,q=r.y
if(q===$){s=B.b.gM(r.gfd())
r.y!==$&&A.xa()
r.y=s
q=s}return q},
gb_(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yq(s==null?"":s)
r.z!==$&&A.xa()
q=r.z=new A.e9(s,t.hL)}return q},
ghb(){return this.b},
gdF(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ad(s,"v",1))return B.b.H(s,1,s.length-1)
return s},
gdO(){var s=this.d
return s==null?A.yO(this.a):s},
gdP(){var s=this.f
return s==null?"":s},
gfL(){var s=this.r
return s==null?"":s},
gfM(){return this.c!=null},
gfO(){return this.f!=null},
gfN(){return this.r!=null},
p(a){return this.gfd()},
a4(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.ge6())if(p.c!=null===b.gfM())if(p.b===b.ghb())if(p.gdF()===b.gdF())if(p.gdO()===b.gdO())if(p.e===b.gh_()){r=p.f
q=r==null
if(!q===b.gfO()){if(q)r=""
if(r===b.gdP()){r=p.r
q=r==null
if(!q===b.gfN()){s=q?"":r
s=s===b.gfL()}}}}return s},
$ikW:1,
ge6(){return this.a},
gh_(){return this.e}}
A.rv.prototype={
gha(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.cJ(s,"?",m)
q=s.length
if(r>=0){p=A.iQ(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lj("data","",n,n,A.iQ(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lK.prototype={
gfM(){return this.c>0},
gfO(){return this.f<this.r},
gfN(){return this.r<this.a.length},
ge6(){var s=this.w
return s==null?this.w=this.iI():s},
iI(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.H(r.a,0,q)},
ghb(){var s=this.c,r=this.b+3
return s>r?B.b.H(this.a,r,s-1):""},
gdF(){var s=this.c
return s>0?B.b.H(this.a,s,this.d):""},
gdO(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.A2(B.b.H(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gh_(){return B.b.H(this.a,this.e,this.f)},
gdP(){var s=this.f,r=this.r
return s<r?B.b.H(this.a,s+1,r):""},
gfL(){var s=this.r,r=this.a
return s<r.length?B.b.b0(r,s+1):""},
gb_(){if(this.f>=this.r)return B.d4
return new A.e9(A.yq(this.gdP()),t.hL)},
gM(a){var s=this.x
return s==null?this.x=B.b.gM(this.a):s},
a4(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$ikW:1}
A.lj.prototype={}
A.pH.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vH.prototype={
$1(a){return this.a.ds(this.b.i("0/?").a(a))},
$S:22}
A.vI.prototype={
$1(a){if(a==null)return this.a.fw(new A.pH(a===undefined))
return this.a.fw(a)},
$S:22}
A.v2.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zt(a))return a
s=this.a
a.toString
if(s.R(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.i(A.aZ(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fb(!0,"isUtc",t.y)
return new A.ew(r,0,!0)}if(a instanceof RegExp)throw A.b(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.cp(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.c9(n),p=s.gu(n);p.m();)m.push(A.hc(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.e(a.length)
for(s=J.aF(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:61}
A.lt.prototype={
aP(a){if(a<=0||a>4294967296)throw A.b(A.y8(u.w+a))
return Math.random()*a>>>0},
aH(){return Math.random()},
$iw9:1}
A.ef.prototype={
bO(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.ba()
l.ba()
l.ba()
l.ba()},
ba(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.a2(o-n+(q-p)+(m-r),4294967296)>>>0},
aP(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.y8(u.w+a))
s=a-1
if((a&s)>>>0===0){p.ba()
return(p.a&s)>>>0}do{p.ba()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aH(){var s,r=this
r.ba()
s=r.a
r.ba()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iw9:1}
A.q8.prototype={
C(){var s,r=this
if(B.a.N(A.c([r.d,r.e,r.f,r.r,r.w],t.t),new A.q9()))throw A.b(B.h7)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.fs)}}
A.q9.prototype={
$1(a){return A.e(a)<=0},
$S:28}
A.eJ.prototype={
v(){return"QualityProfileKind."+this.b}}
A.e5.prototype={
C(){var s="installedFeatures",r=this.b,q=r.bn(B.lA)
if(q.a!==0)throw A.b(A.ah(q,s,"contains unknown pipeline features"))
if(this.a===B.br&&r.gV(r))throw A.b(A.ah(r,s,"safe profiles cannot install optional features"))}}
A.fq.prototype={
v(){return"CoordinatedTransitionState."+this.b}}
A.kt.prototype={}
A.nb.prototype={
bV(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.c!=null)throw A.b(A.k("coordinated transition is already open"))
p=a1.a
o=p.a
if(o==null)A.i(A.k("configuration state is not initialized"))
if(p.c!=null)A.i(A.k("a configuration transition is already open"))
a2.C()
n=A.hW(a2)
m=p.d
l=p.b
if(l==null)A.i(A.k("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bn(h)
f=h.bn(j)
j=n.a
h=l.a
e=j.bn(h)
d=h.bn(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.ne(m,a2,n,new A.nc(A.eP(g,k),A.eP(f,k),A.eP(e,k),A.eP(d,k),c,b,o.z!==a2.z),B.ca)
p.c=a
s=a
try{r=a1.b.cM(s.c)
q=new A.kt(s,r,B.aT)
a1.c=q
return q}catch(a0){p.fp(s)
throw a0}},
bW(a){var s,r,q,p=this
p.eC(a)
s=p.a
r=a.a
s.eD(r)
q=s.d
if(r.a!==q)A.i(A.k("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.eG
s.c=null
p.b.bW(a.b)
a.c=B.eO
p.c=null},
eC(a){if(this.c!==a||a.c!==B.aT)throw A.b(A.k("coordinated transition is not open"))}}
A.fm.prototype={
v(){return"ConfigurationTransactionState."+this.b}}
A.nc.prototype={}
A.ne.prototype={}
A.nd.prototype={
fp(a){this.eD(a)
a.e=B.eH
this.c=null},
eD(a){if(this.c!==a||a.e!==B.ca)throw A.b(A.k("configuration transition is not open"))}}
A.ks.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.J(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",m.d,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",m.x,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.F(q,A.o(q).i("F<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.b(A.w("PostProcessState."+o+" must be >= 0: "+A.y(n),l))}q=m.as
if(q<1||q>8)throw A.b(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.b(A.w("PostProcessState.rainIntensity must be in [0, 1]: "+A.y(s),l))
if(r>1)throw A.b(A.w("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.y(r),l))}}
A.fj.prototype={}
A.jO.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gan(0)||!k.b.gan(0)||!k.r.gan(0))throw A.b(A.w("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.b(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.y(s)+"/"+A.y(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.b(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.y(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gan(0)||r.gc9()<1e-12)A.i(A.w("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.i(A.w("DirectionalLight.intensity must be >= 0: "+A.y(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.w("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.i(A.w("PointLight.intensity must be >= 0: "+A.y(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.i(A.w("PointLight.radius must be > 0: "+A.y(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.i(A.w("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.i(A.w("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.i(A.w("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.nS.prototype={}
A.dv.prototype={
a4(a,b){if(b==null)return!1
return J.ff(b)===A.x4(this)&&b instanceof A.dv&&this.a===b.a&&this.b===b.b},
gM(a){return A.cC(A.x4(this),this.a,this.b,B.f,B.f,B.f)}}
A.bt.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.b8.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cB.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kn.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cw.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.eC.prototype={
v(){return"HandleRejection."+this.b}}
A.jW.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.bY.prototype={
gan(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a4(a,b){if(b==null)return!1
return b instanceof A.bY&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gM(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.nz.prototype={}
A.kr.prototype={}
A.bA.prototype={}
A.vJ.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:71}
A.jg.prototype={
v(){return"AlphaMode."+this.b}}
A.e2.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.w("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.b(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.b(A.w("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.w5("roughness",l.z)
A.w5("metallic",0)
A.w5("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aQ("uvScaleU",s),new A.aQ("uvScaleV",r),new A.aQ("uvOffsetU",0),new A.aQ("uvOffsetV",0),new A.aQ("tintR",l.c),new A.aQ("tintG",l.d),new A.aQ("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.w("MaterialDefinition."+n+" must be finite: "+A.y(m),k))}if(s===0||r===0)throw A.b(A.w("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.b(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d4.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bB.prototype={}
A.rz.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.W[s]
q=r.c
if(q<=0)throw A.b(A.w(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.b(A.w(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rA())
for(p=B.a.gu(B.W),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.b(A.w('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rA.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:24}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.S(s,14)!==0)throw A.b(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.jX()
r=n.c
if(r!=null){q=s/14|0
for(s=A.C_(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.b(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gan(0)&&s.b.gan(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.w("MeshData.localBounds must be a valid AABB",null))},
jX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.G(B.W,a2.a(new A.pw()),a3)
if(!a4.gu(0).m())return
s=new A.G(B.W,a2.a(new A.px()),a3)
if(s.gt(0)!==1)throw A.b(A.w("surface-v2 tangent data requires one normal slot",a1))
r=a4.gbq(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gbq(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a7(A.c([j,h,g,f,e,d,c],p),new A.py()))throw A.b(A.w("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.b(A.w("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.b(A.w("surface-v2 tangent must be orthogonal to its normal: "+A.y(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.b(A.w("surface-v2 tangent handedness must be -1 or +1: "+A.y(c),a1))}}}
A.pw.prototype={
$1(a){return t.qY.a(a).a===B.dS},
$S:24}
A.px.prototype={
$1(a){return t.qY.a(a).a===B.dR},
$S:24}
A.py.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.pJ.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.w("resource plan must contain sceneColor and present",null))
if(s.N(0,new A.pK()))throw A.b(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.w("resource history does not match vhsOutput ownership",null))}}
A.pK.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.fL.prototype={
v(){return"ResourceAssemblyState."+this.b}}
A.ku.prototype={}
A.kD.prototype={
fR(a){var s=this
if(s.d)A.i(A.k("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.k("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
cM(a){var s=this
if(s.d)A.i(A.k("resource assembler is disposed"))
if(s.a==null)throw A.b(A.k("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.k("resource assembly is already open"))
a.C()
return s.b=new A.ku(s.c,a,B.by)},
bW(a){var s,r=this
if(r.d)A.i(A.k("resource assembler is disposed"))
r.f4(a)
s=r.c
if(a.a!==s)throw A.b(A.k("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.l9
r.b=null},
dW(a){if(this.d)A.i(A.k("resource assembler is disposed"))
this.f4(a)
a.c=B.la
this.b=null},
a_(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.k("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
f4(a){if(this.b!==a||a.c!==B.by)throw A.b(A.k("resource assembly is not prepared"))}}
A.fs.prototype={
v(){return"DrawMode."+this.b}}
A.jn.prototype={
v(){return"BlendMode."+this.b}}
A.bx.prototype={}
A.kP.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.b(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hn.prototype={
v(){return"ColorEncoding."+this.b}}
A.fr.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.i3.prototype={
C(){var s,r=this,q=null
r.a.C()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.w("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.w("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.w("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.w("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.eM.prototype={
v(){return"RendererState."+this.b}}
A.aG.prototype={}
A.nU.prototype={
fZ(a){var s=this.z.h(0,a)
return s==null?B.cn:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.eF.prototype={
v(){return"MaterialResidencyStatus."+this.b}}
A.cW.prototype={}
A.bZ.prototype={}
A.pt.prototype={
cs(a){var s=this.a,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.pu(a)),r.i("G<1>")).gt(0)}}
A.pu.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:80}
A.pr.prototype={
cN(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.c([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.u)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.i(A.w("material residency key is empty",null))
k=m.b
k.C()
if(r.R(l))throw A.b(A.w("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.m(s,s)
for(k=A.zP(k),i=k.$ti,k=new A.c6(k.a(),i.i("c6<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.bP(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.cN(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("aj<2>")
a=A.K(new A.aj(r,o),o.i("n.E"))
B.a.P(a,new A.ps())
o=A.c([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.u)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.jE(m,k,s))}return new A.pt(A.ai(o,t.wl))},
jE(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.F(b,A.o(b).i("F<1,2>")).gu(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.BY(new A.aj(q,q.$ti.i("aj<2>")))
A.aY(q,s,r)
return new A.bZ(a,p)}}
A.ps.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:82}
A.kc.prototype={
mA(a){return this.a.bz(a)}}
A.pv.prototype={
$3(a,b,c){return new A.cB(A.e(a),A.e(b),A.at(c))},
$S:90}
A.kV.prototype={}
A.pz.prototype={
bc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yw(f,new A.jR(e.byteLength,B.cC,B.ho))
if(f.b!==B.h)A.i(A.k(g))
s=A.a(d.a)
r=f.a
q=v.G
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d8(f)
A.bn(f,p)
if(f.b!==B.h)A.i(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.W[m]
k=A.zM(l.a)
if(!o.l(0,k))continue
j=A.E0(n,k,l)
if(f.b!==B.h)A.i(A.k(g))
r.vertexAttribPointer.apply(r,[k,j,A.e(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.i(A.k(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yw(f,new A.jR(A.y3(i),B.cC,B.cB))
if(f.b!==B.h)A.i(A.k(g))
r.bindBuffer(A.e(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.a(h.a))
A.CV(f,h,t.U.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.kV(d,h,p,f,e.length/14|0,!1)},
dU(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.dY(B.az,a))
this.b.bz(a)
return s},
b5(a){var s,r,q=this.c.a5(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.a(q.c.a))
s.deleteBuffer(A.a(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.a(r.a))}this.b.b5(a)},
dS(){var s,r,q,p
for(s=this.b.bF(),r=s.$ti,s=new A.c6(s.a(),r.i("c6<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bc(p.b))}},
gca(){return this.b.bF().be(0,0,new A.pB(),t.S)}}
A.pA.prototype={
$3(a,b,c){return new A.bt(A.e(a),A.e(b),A.at(c))},
$S:95}
A.pB.prototype={
$2(a,b){var s,r
A.e(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.y3(s)
return a+r+s},
$S:99}
A.bP.prototype={}
A.dz.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c1.prototype={}
A.ro.prototype={
cC(a){var s=this.a,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.rp(a)),r.i("G<1>")).gt(0)}}
A.rp.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:101}
A.rm.prototype={
cN(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.i(A.w("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.i(A.ah(n,"handle","must be valid"))
if(s.R(o))throw A.b(A.w("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("aj<2>")
m=A.K(new A.aj(s,r),r.i("n.E"))
B.a.P(m,new A.rn())
r=t.Aj
l=A.a_(r)
k=A.m(r,t.bp)
j=A.c([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.ju(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c1(p,i))}r=l.a
return new A.ro(A.ai(j,t.e),r)},
ju(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.p()
if(s.ff(a,r)===s.d)return B.dL
this.b.k(0,a,!0)
return B.dK}catch(q){if(A.ao(q) instanceof A.jW){s=this.b.h(0,a)===!0?B.dN:B.dM
return s}else throw q}}}
A.rn.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:107}
A.da.prototype={}
A.kR.prototype={
aT(a){var s=this.a,r=A.wf(s,B.ht)
A.wg(s,r,0,a)
return r},
mT(a,b){var s,r,q,p=this,o=p.b,n=o.bz(a),m=A.K(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.dZ(a,new A.da(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wf(p.a,s)
o.k(0,r,q)}A.wg(p.a,q,0,b)},
lu(a){var s,r=this.b,q=r.bz(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.k("TextureStore.finalizeMips: no pixels uploaded yet for "+a.p(0)))
A.yx(this.a,s)
r.dZ(a,new A.da(p,q.b,!0))},
ff(a,b){var s
this.b.bz(a)
s=this.c.h(0,a.a)
return s==null?b:s},
mw(a){var s
if(a==null){s=this.d
s===$&&A.p()
return s}s=this.d
s===$&&A.p()
return this.ff(a,s)},
mE(a){var s=this.e
s===$&&A.p()
return s},
mG(a){var s=this.f
s===$&&A.p()
return s},
my(a){var s=this.r
s===$&&A.p()
return s},
mC(a){var s=this.w
s===$&&A.p()
return s},
a_(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),q=n.a,p=q.a,o=t.h;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.L(0)
s=n.d
s===$&&A.p()
A.l8(q,s)
s=n.e
s===$&&A.p()
A.l8(q,s)
s=n.f
s===$&&A.p()
A.l8(q,s)
s=n.r
s===$&&A.p()
A.l8(q,s)
s=n.w
s===$&&A.p()
A.l8(q,s)},
dS(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aT($.xf())
i.e=i.aT($.xc())
i.f=i.aT($.xd())
i.r=i.aT($.xb())
i.w=i.aT($.xe())
for(s=i.b.bF(),r=s.$ti,s=new A.c6(s.a(),r.i("c6<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.rs()))continue
l=A.wf(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wg(p,l,k,j)}if(m.c)A.yx(p,l)
q.k(0,n.a,l)}},
gca(){return this.b.bF().be(0,0,new A.rr(),t.S)}}
A.rq.prototype={
$3(a,b,c){return new A.b8(A.e(a),A.e(b),A.at(c))},
$S:114}
A.rs.prototype={
$1(a){return t.Fx.a(a)==null},
$S:115}
A.rr.prototype={
$2(a,b){var s
A.e(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:118}
A.eE.prototype={
glB(){return this.b.length}}
A.jL.prototype={
kn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.qc(A.c([],t.pq),A.a_(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].al(s,b)
o=s.km(a,!1)
if(o.b.length!==0)return new A.jM(o,B.j0)
q=o.a
n=A.C(q)
m=new A.M(q,n.i("f(1)").a(new A.nN()),n.i("M<1,f>")).bo(0)
l=A.c([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.ak(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gE().a))throw A.b(A.k('RenderFeature "'+k.ga8()+'" created a pass "'+i.gE().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.P(l,new A.nO(o))
return new A.jM(o,l)},
bB(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)s[q].a_()}}
A.nN.prototype={
$1(a){return t.A.a(a).a},
$S:123}
A.nO.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.dG(s,new A.nL(a)),B.a.dG(s,new A.nM(b)))},
$S:131}
A.nL.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:7}
A.nM.prototype={
$1(a){return t.A.a(a).a===this.a.gE().a},
$S:7}
A.jM.prototype={}
A.ey.prototype={
v(){return"FrameQueueState."+this.b}}
A.nT.prototype={}
A.nR.prototype={
kj(a){if(a.length===0)throw A.b(A.ah(a,"passId",null))
this.b=a
this.a.ce(a,A.zW())},
hO(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aG(p.a,p.b,p.d))}return A.aY(o,t.N,t.pH)},
bu(a,b){var s,r=this.b
if(r==null)throw A.b(A.k("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.w("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.a2(a,3)*b}}
A.fU.prototype={}
A.ax.prototype={
gbI(){var s=this.c,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.pN()),r.i("G<1>"))},
gcj(){var s=this.c,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.pO()),r.i("G<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pN.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.J},
$S:18}
A.pO.prototype={
$1(a){return t.j2.a(a).b===B.j},
$S:18}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bh.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.i5.prototype={
v(){return"ResourceFormat."+this.b}}
A.cS.prototype={
v(){return"GraphStage."+this.b}}
A.aI.prototype={
fV(){var s=this
return new A.aI(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.aI&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gM(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fK.prototype={
v(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.ho.prototype={}
A.kw.prototype={
av(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.CY(m.a,a.c,r.a(a.d.ga1().bK(0)),r.a(a.f),a.b)}catch(q){if(A.ao(q) instanceof A.i8){++m.e
throw q}else throw q}p=new A.ho(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.a(n.b.a))
return p},
bB(){var s=this.b
this.iQ(new A.aj(s,A.o(s).i("aj<2>")))
s.L(0)},
iQ(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.af(s,s.r,s.e,a.$ti.i("af<1>")),r=this.a.a;s.m();)r.deleteProgram(A.a(s.d.b.a))}}
A.bk.prototype={
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
A.qa.prototype={}
A.b6.prototype={
ac(){var s=this
return A.xD(B.eb,s.f,B.aq,B.aa,!0,!0,!0,!0,s.r,B.au,B.av,s.d,s.e,!0,!1,!1)}}
A.qc.prototype={
km(a,b){var s=this.jV(t.Q.a(a),!1),r=this.a,q=A.C(r)
return new A.qb(A.ai(new A.G(r,q.i("l(1)").a(new A.qh()),q.i("G<1>")),t.A),s)},
jV(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.c([],t.ka)
r=m.a
q=A.C(r)
p=q.i("G<1>")
o=A.K(new A.G(r,q.i("l(1)").a(new A.qg()),p),p.i("n.E"))
m.iw(o,a,s)
m.iA(o,s)
m.iC(o,s)
m.iz(o,!1,s)
n=m.iE(o,s)
m.iB(o,n,s)
m.iD(o,s)
m.iy(o,n,s)
m.ix(o,s)
return s},
iw(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=B.a3.bn(b)
if(p.a!==0)B.a.l(c,new A.bh(B.hE,q.a,"missing capabilities: "+p.W(0,", ")))}},
iA(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbI(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bh(B.hz,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
iC(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.C(a),r=s.i("l(1)").a(new A.qf()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbI()
o=A.K(p,p.$ti.i("n.E"))
p=r.gcj()
n=A.K(p,p.$ti.i("n.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bh(B.b_,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbq(o).a
l=B.a.gbq(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bh(B.b_,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bh(B.b_,r.a,"resolve source and destination must match format and extent"))}},
iz(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.J)B.a.l(c,new A.bh(B.hC,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iE(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcj(),n=J.R(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bh(B.hy,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
iB(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbI(),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.J)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bh(B.cH,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bE(a,m)>s)B.a.l(c,new A.bh(B.cH,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
iD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
for(l=q.gcj(),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bh(B.hB,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
iy(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbI(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.J)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcj().af(0,new A.qe(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bh(B.hA,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
ix(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcj(),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.xO(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbI(),p=J.R(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.J)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].l(0,q)}}p=t.y
j=A.e1(s,!1,!1,p)
s=a.length
i=A.e1(s,!1,!1,p)
h=new A.qd(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.l(b,new A.bh(B.hD,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qh.prototype={
$1(a){t.A.a(a)
return A.w7()},
$S:7}
A.qg.prototype={
$1(a){t.A.a(a)
return A.w7()},
$S:7}
A.qf.prototype={
$1(a){return t.A.a(a).f},
$S:7}
A.qe.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:18}
A.qd.prototype={
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
r=A.fT(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.qb.prototype={}
A.ls.prototype={$ic0:1,
ga8(){return this.a},
gE(){return this.b},
ge1(){return this.c}}
A.i2.prototype={
k_(a){var s,r,q=a.c,p=q.a
if(!p.gan(0))A.i(A.w("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.i(A.w("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.i(A.w(u.u,null))
s=this.a.bz(a.a)
q=q.a9()
p=s.d.gaq()
r=A.C(p)
return A.b1(new A.M(p,r.i("I(1)").a(q.gaz()),r.i("M<1,I>")))},
gfT(){return new A.bS(this.lK(),t.Br)},
lK(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gfT(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bF(),n=o.$ti,o=new A.c6(o.a(),n.i("c6<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
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
return a.b=new A.ls(h,g,A.b1(new A.M(f,d.i("I(1)").a(i.gaz()),d.i("M<1,I>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCo:1}
A.qi.prototype={
$3(a,b,c){return new A.cw(A.e(a),A.e(b),A.at(c))},
$S:149}
A.qm.prototype={
gfe(){var s=this.d
return s===$?this.d=new A.rm(this.c,A.m(t.Aj,t.y)):s},
mo(a,b){var s,r
if(this.x)A.i(A.k("resource library is disposed"))
s=this.a
a.C()
r=s.b.aA(a,b)
s.c.k(0,r.a,s.bc(a))
this.f.l(0,r)
return r},
mp(a){if(this.x)A.i(A.k("resource library is disposed"))
this.a.b5(a)
this.f.a5(0,a)},
dR(a,b,c,d,e,f){var s,r
if(this.x)A.i(A.k("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.i(A.w("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.i(A.w("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aA(new A.da(new A.jT(f,d,1,!0,e,B.aY,B.cE,a),A.e1(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
a_(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.K(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.h
l=0
for(;l<r.length;r.length===q||(0,A.u)(r),++l){k=r[l]
j=o.a5(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b5(k)}r=i.r
q=A.K(r,A.o(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.u)(q),++l)n.b5(q[l])
q=i.f
o=A.K(q,A.o(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.u)(o),++l)m.b5(o[l])
s.L(0)
r.L(0)
q.L(0)
p.a_()
i.x=!0}}
A.t1.prototype={}
A.lR.prototype={$ic0:1,
ga8(){return this.a},
gE(){return this.b},
ge1(){return this.c}}
A.uu.prototype={
$1(a){var s=this.a.w.a.dU(a),r=s.b!=null,q=r?s.d:s.e
return new A.i4(s.c,r,q,s.f)},
$S:152}
A.uv.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().fW(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().fW(b)
throw A.b(A.k("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:156}
A.ut.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.um.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gU(r)},
$S:169}
A.un.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bc
s=q.b.z
r=s.length===0?null:B.a.gU(s)
return A.Gc(s,3,q.a.d,r)},
$S:170}
A.us.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.uh.prototype={
$0(){return this.a.at.a},
$S:47}
A.uj.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.ui.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.ur.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:4}
A.uf.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.ug.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uo.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.up.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uq.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.p()
return s},
$S:4}
A.ul.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.uk.prototype={
$0(){return this.a.at.w},
$S:48}
A.ux.prototype={
$0(){return this.a},
$S:49}
A.tz.prototype={}
A.lD.prototype={$iCn:1}
A.lp.prototype={$iBz:1}
A.qr.prototype={
gb6(){var s=this.w
return s==null?A.i(A.k("renderer is not initialized")):s},
fS(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bw)throw A.b(A.k("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.U)throw A.b(A.k("renderer device is context lost"))
m.e=B.l8
try{m.r=s.h4()
r=m.b
q=A.hW(a)
p=r.a
if(p.a!=null)A.i(A.k("configuration state is already initialized"))
a.C()
p.a=a
p.b=A.hW(a)
p.d=1
r.b.fR(q)
r=A.BZ()
m.w=new A.qm(A.C0(s),r,A.CC(s),A.a_(t.kc),A.a_(t.pw),A.a_(t.Aj))
r=new A.kD()
p=new A.od(s,r)
q=A.hW(a)
o=p.d8(q,a)
r.fR(q)
p.c=new A.fH(new A.ku(0,q,B.by),o,B.ae)
m.x=p
m.y=new A.kw(s,A.m(t.N,t.CH))
m.as=a
A.ze(m)
m.e=B.bx}catch(n){s=m.y
if(s!=null)s.bB()
s=m.x
if(s!=null)s.a_()
s=m.w
if(s!=null)s.a_()
m.w=null
m.e=B.bw
throw n}return A.xG(t.H)},
kh(a,b){var s,r,q,p,o,n,m=this,l=null
m.jy()
m.bQ()
r=B.a.q(m.d,a)
if(!r)throw A.b(A.w("world was not created by this renderer",l))
if(m.at!=null)throw A.b(A.k("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gan(0))A.i(A.w("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gan(0)||q.gc9()<1e-12)A.i(A.w("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.i(A.w("CameraView requires 0 < near < far, got "+A.y(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.i(A.w("CameraView.aspect must be finite and > 0: "+A.y(q),l))
if(!r.a.gan(0)||!r.b.gan(0)||!r.c.gan(0))A.i(A.w("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.i(A.w("FrameInput.timeSeconds must be finite: "+A.y(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.ax)A.i(A.k("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.ax
o.c=0
B.a.L(o.a)
s=o
try{r=m.r
if((r==null?A.i(A.k("renderer is not initialized")):r).z)m.b$=m.a.ki()
return s}catch(n){if(o.b!==B.ax)A.i(A.k("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.hc
m.ek()
m.ax=m.at=null
throw n}},
lo(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.bQ()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.k("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.ax)A.i(A.k("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.kO(l,0,A.fb(m.c,"count",t.S),A.C(l).c).bL(0,!1)
m.b=B.hb
q=k
try{p=A.Ec(a1,r,s,q)
o=p.a.hO()
m=o.gJ().cT(0,new A.qs())
l=m.$ti
n=new A.cA(m,l.i("aG(1)").a(new A.qt()),l.i("cA<1,aG>")).be(0,B.cn,new A.qu(),t.pH)
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
return new A.nU(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.iZ(s.e)
a1.ax=a1.at=null}},
jy(){var s,r,q,p=this
if(p.e!==B.dx)return
if(p.a.b===B.U)throw A.b(A.k("renderer context remains lost"))
s=p.w
if(s.x)A.i(A.k("resource library is disposed"))
s.a.dS()
s.c.dS()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.i(A.k("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.i(A.k("GPU resource adapter is not initialized"))
s.c=new A.fH(q.a,s.d8(A.hW(r),r),B.ae)
s=p.y
s.c=null
s.b.L(0)
A.ze(p)
p.e=B.bx},
bQ(){var s=this,r=s.e
if(r!==B.bx)throw A.b(A.k("renderer is not ready: "+r.b))
if(s.a.b===B.U){s.iR()
s.e=B.dx
throw A.b(A.k("renderer context lost"))}}}
A.qs.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:50}
A.qt.prototype={
$1(a){return t.h6.a(a).b},
$S:51}
A.qu.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aG(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:52}
A.lA.prototype={}
A.td.prototype={
iZ(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.i(A.k(u.k))
r=s.fh(o)
if(r.b)A.i(A.k("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lA(o))}catch(q){p.da(o)}},
ek(){var s=this.b$
this.b$=null
if(s!=null)this.da(s)},
iR(){var s,r,q
this.ek()
s=this.a$
r=J.xR(s.slice(0),A.C(s).c)
B.a.L(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.da(r[q].b)},
da(a){var s,r
try{s=this.a
s.a.deleteQuery(s.fh(a).a)}catch(r){}}}
A.lH.prototype={}
A.i9.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bM.prototype={
G(a,b){var s,r=this
t.BB.a(b)
s=B.d.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.G(r.c.a,b.c.a)
if(s!==0)return s
return B.d.G(r.d,b.d)},
$ib4:1}
A.bJ.prototype={
G(a,b){var s
t.z3.a(b)
s=B.c.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ib4:1}
A.aO.prototype={}
A.vN.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:53}
A.vO.prototype={
$1(a){return t.E0.a(a).b},
$S:54}
A.vL.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:55}
A.vM.prototype={
$1(a){return t.EH.a(a).b},
$S:56}
A.nu.prototype={}
A.nt.prototype={}
A.jc.prototype={
gaq(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.c([new A.I(o,n,p),new A.I(r,n,p),new A.I(o,q,p),new A.I(r,q,p),new A.I(o,n,s),new A.I(r,n,s),new A.I(o,q,s),new A.I(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eH.prototype={}
A.fv.prototype={
v(){return"FrustumTest."+this.b}}
A.nV.prototype={
mN(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.co
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.hd:B.he}}
A.nW.prototype={
$4(a,b,c,d){var s=new A.I(a,b,c),r=new A.eH(s,d),q=Math.sqrt(s.gc9())
if(q<1e-9)s=r
else{s=1/q
s=new A.eH(new A.I(a*s,b*s,c*s),d/q)}return s},
$S:57}
A.dr.prototype={
aj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.dr(h)},
h8(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.I(k,j,i):new A.I(k/h,j/h,i/h)},
dK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.i(A.k("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.y(k)+")"))
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
gan(a){return B.t.a7(this.a,new A.pp())},
p(a){return"Mat4("+A.y(this.a)+")"}}
A.pp.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.ky.prototype={
p(a){var s=this
return"Quat("+A.y(s.a)+", "+A.y(s.b)+", "+A.y(s.c)+", "+A.y(s.d)+")"}}
A.kS.prototype={
C(){var s=this.a
if(!s.gan(0))throw A.b(A.w("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.w("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.b(A.w(u.u,null))},
a9(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.y0(A.c([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.y0(A.c([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.I.prototype={
c0(a){return this.a*a.a+this.b*a.b+this.c*a.c},
by(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.I(s*r-q*p,q*o-n*r,n*p-s*o)},
gc9(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gc9())},
gan(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gau(){var s=this,r=Math.sqrt(s.gc9())
return r<1e-9?B.al:new A.I(s.a/r,s.b/r,s.c/r)},
a4(a,b){if(b==null)return!1
return b instanceof A.I&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gM(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.ip.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hl.prototype={
ga8(){return this.f},
al(a,b){B.a.l(a.a,new A.ax(this.f,B.L,A.c([new A.O(this.x,B.i),new A.O(this.y,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.y,B.d1,B.cZ)),q=A.d8(s.d),p=t.n,o=s.r===B.dX?new Float32Array(A.a1(A.c([1/s.Q,0],p))):new Float32Array(A.a1(A.c([0,1/s.as],p)))
p=s.y
return A.c([new A.lg(new A.b6(s.f,A.c([new A.O(s.x,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
a_(){},
$iak:1}
A.lg.prototype={
am(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.bR(r,a.ah(o.r).b)
A.bb(r,o.a.ac())
A.d7(r,B.S,1,0,0,0)
A.c5(r,o.b.b)
q=t._
p=o.d
if(o.e)A.CT(r,0,q.a(p.$0()))
else A.aC(r,0,q.a(p.$0()))
A.v(r,"uSource",B.w)
A.v(r,"uTexelStep",new A.x(B.aj,o.f))
A.bn(r,o.c)
s.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jo.prototype={
ga8(){return"bloomComposite"},
al(a,b){B.a.l(a.a,new A.ax("bloomComposite",B.L,A.c([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r="bloomComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jA,B.jf)),p=A.d8(s.d),o=s.w,n=A.c([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.j)],t.C)
return A.c([new A.lh(new A.b6(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
a_(){},
$iak:1}
A.lh.prototype={
am(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.bR(r,a.cS(q.f).b)
A.CU(r,1)
A.bb(r,B.eT)
A.c5(r,q.b.b)
A.aC(r,0,t._.a(q.d.$0()))
A.v(r,"uBloom",B.w)
A.v(r,"uBloomStrength",new A.x(B.e,p))
A.bn(r,q.c)
s.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jA.prototype={
ga8(){return"depthPrepass"},
al(a,b){B.a.l(a.a,new A.ax("depthPrepass",B.hv,A.c([new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r="depthPrepass",q=s.a.av(new A.bk(r,s.b,s.c,B.d0,B.d_,B.iD))
return A.c([new A.lk(new A.b6(r,A.c([new A.O(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
a_(){},
$iak:1}
A.lk.prototype={
am(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.bR(a1,a2.ah("sceneDepth").b)
A.bb(a1,d.a.ac())
A.d7(a1,B.aR,1,0,0,0)
A.c5(a1,d.b.b)
A.v(a1,"uVertexSnapGrid",new A.x(B.e,a0.Q))
A.v(a1,"uAlbedo",B.w)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=k.a
i=j.gE()
A.v(a1,"uViewProjection",new A.x(B.v,new Float32Array(A.a1(a))))
A.v(a1,"uModel",new A.x(B.v,new Float32Array(A.a1(i.c.a9().a))))
A.vK(b,k,!1)
d.jJ(b,j.gE().b,p)
h=q.$1(j.gE().a)
i=h.a
if(a1.b!==B.h)A.i(A.k(c))
m.bindVertexArray(A.a(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.i(A.k(c))
e=A.e(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.e(o.WebGL2RenderingContext.UNSIGNED_INT):A.e(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bu(g,f)}else{if(a1.b!==B.h)A.i(A.k(c))
m.drawArraysInstanced(A.e(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bu(g,f)}}},
jJ(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.x(B.e,0))
A.v(q,"uAffineWarpStrength",new A.x(B.e,0))
s=this.a.ac()
A.bb(q,r.dx?s.e0(!1):s)},
$ia8:1,
gE(){return this.a}}
A.ir.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hs.prototype={
ga8(){return this.f},
al(a,b){B.a.l(a.a,new A.ax(this.f,B.L,A.c([new A.O(this.w,B.i),new A.O(this.x,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.y,B.d1,B.cZ)),q=A.d8(s.d),p=t.n,o=s.r===B.dY?new Float32Array(A.a1(A.c([1/s.z,0],p))):new Float32Array(A.a1(A.c([0,1/s.Q],p)))
p=s.x
return A.c([new A.ll(new A.b6(s.f,A.c([new A.O(s.w,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
a_(){},
$iak:1}
A.ll.prototype={
am(a){var s,r,q=this
if(a.c.e.d<=0)return
s=a.b
r=s.a
A.bR(r,a.ah(q.f).b)
A.bb(r,q.a.ac())
A.d7(r,B.S,1,0,0,0)
A.c5(r,q.b.b)
A.aC(r,0,t._.a(q.d.$0()))
A.v(r,"uSource",B.w)
A.v(r,"uTexelStep",new A.x(B.aj,q.e))
A.bn(r,q.c)
s.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jD.prototype={
ga8(){return"dofComposite"},
al(a,b){var s=this
B.a.l(a.a,new A.ax("dofComposite",B.L,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1))},
ak(a){var s=this,r="dofComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jx,B.is)),p=A.d8(s.d)
return A.c([new A.lm(new A.b6(r,A.c([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
a_(){},
$iak:1}
A.lm.prototype={
am(a){var s,r=this,q=a.ah("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bR(n,q.b)
A.bb(n,r.a.ac())
A.c5(n,r.b.b)
s=t._
A.aC(n,0,s.a(r.d.$0()))
A.v(n,"uSharp",B.w)
A.aC(n,1,s.a(r.e.$0()))
A.v(n,"uBlurred",B.ak)
A.aC(n,2,s.a(r.f.$0()))
A.v(n,"uSceneDepth",B.dQ)
A.v(n,"uNear",new A.x(B.e,o.f))
A.v(n,"uFar",new A.x(B.e,o.r))
A.v(n,"uFocusDistance",new A.x(B.e,r.w))
A.v(n,"uFocusRange",new A.x(B.e,r.x))
A.v(n,"uStrength",new A.x(B.e,a.c.e.d))
A.bn(n,r.c)
p.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.jV.prototype={
ga8(){return"grade"},
al(a,b){B.a.l(a.a,new A.ax("grade",B.L,A.c([new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.av(new A.bk("grade",s.b,s.c,B.y,B.jv,B.jg)),q=A.d8(s.d),p=s.r,o=s.w
return A.c([new A.lr(new A.b6("grade",A.c([new A.O(p,B.i),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
a_(){},
$iak:1}
A.lr.prototype={
am(a){var s=this,r=a.ah(s.f.a),q=a.b,p=q.a
A.bR(p,a.ah(s.r.a).b)
A.bb(p,s.a.ac())
A.c5(p,s.b.b)
A.aC(p,0,r.b)
A.v(p,"uScene",B.w)
A.aC(p,1,t._.a(s.d.$0()))
A.v(p,"uLut",B.ak)
A.v(p,"uLutSize",new A.x(B.e,s.e))
A.v(p,"uStrength",new A.x(B.e,a.c.e.y))
A.bn(p,s.c)
q.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.hP.prototype={
ga8(){return"msaaResolve"},
al(a,b){B.a.l(a.a,new A.ax("msaaResolve",B.hw,A.c([new A.O(this.b,B.i),new A.O(this.c,B.j)],t.C),!0))},
ak(a){var s=this.b,r=this.c
return A.c([new A.ly(new A.b6("msaaResolve",A.c([new A.O(s,B.i),new A.O(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
a_(){},
$iak:1}
A.ly.prototype={
am(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cS(this.c),j=a.cS(this.d),i=this.b
if(i.b!==B.h)A.i(A.k(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.i(A.w("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.i(A.w("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.i(A.w("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
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
$ia8:1,
gE(){return this.a}}
A.fh.prototype={}
A.jp.prototype={
ah(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.k('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cS(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ah(s)},
$iCm:1}
A.w8.prototype={}
A.i_.prototype={
ga8(){return"present"},
al(a,b){B.a.l(a.a,new A.ax("present",B.hx,A.c([new A.O(this.f,B.i)],t.C),!1))},
ak(a){var s,r=this,q=r.a.av(new A.bk("present",r.b,r.c,B.y,B.jH,B.iK)),p=A.d8(r.d)
r.w=p
s=r.f
return A.c([new A.lE(new A.b6("present",A.c([new A.O(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
a_(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.a(s.a))
this.w=null}},
$iak:1}
A.lE.prototype={
am(a){var s,r=this,q=a.cS(r.d),p=a.b,o=p.a
A.bR(o,null)
A.bb(o,r.a.ac())
A.c5(o,r.b.b)
A.bn(o,r.c)
A.aC(o,0,q.b)
s=a.c.e
A.v(o,"uExposure",new A.x(B.e,s.a))
A.v(o,"uVignette",new A.x(B.e,s.e))
A.v(o,"uGrain",new A.x(B.e,s.f))
A.v(o,"uRainIntensity",new A.x(B.e,s.r))
A.v(o,"uRainWindowVisibility",new A.x(B.e,s.w))
A.v(o,"uOutputEncoding",new A.x(B.e,r.e===B.aS?1:0))
A.v(o,"uToneMap",B.dP)
p.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.kx.prototype={
ga8(){return"ps1Quantize"},
al(a,b){B.a.l(a.a,new A.ax("ps1Quantize",B.L,A.c([new A.O(this.e,B.i),new A.O(this.f,B.j)],t.C),!1))},
ak(a){var s=this,r="ps1Quantize",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jC,B.ii)),p=A.d8(s.d),o=s.e,n=s.f
return A.c([new A.lF(new A.b6(r,A.c([new A.O(o,B.i),new A.O(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
a_(){},
$iak:1}
A.lF.prototype={
am(a){var s=this,r=a.ah(s.d.a),q=a.b,p=a.c.e,o=q.a
A.bR(o,a.ah(s.e.a).b)
A.bb(o,s.a.ac())
A.c5(o,s.b.b)
A.aC(o,0,r.b)
A.v(o,"uScene",B.w)
A.v(o,"uQuantizationBits",new A.x(B.e,p.as))
A.v(o,"uDitherStrength",new A.x(B.e,p.x))
A.bn(o,s.c)
q.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.eR.prototype={}
A.kH.prototype={
ga8(){return"shadow"},
al(a,b){B.a.l(a.a,new A.ax("shadowCaster",B.hu,A.c([new A.O(this.z,B.j)],t.C),!1))},
ak(a){var s=this,r="shadowCaster",q=s.a.av(new A.bk(r,s.b,s.c,B.d0,B.d_,B.je))
return A.c([new A.lI(new A.b6(r,A.c([new A.O(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
a_(){},
$iak:1}
A.lI.prototype={
am(a){var s,r,q,p,o=this,n=a.ah("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bR(s,n.b)
A.bb(s,o.a.ac())
A.d7(s,B.aR,1,0,0,0)
return}r=A.yh(l)
o.x.$1(r)
s=m.a
A.bR(s,n.b)
A.bb(s,o.a.ac())
A.d7(s,B.aR,1,0,0,0)
A.c5(s,o.b.b)
A.v(s,"uAlbedo",B.w)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.iS(m,s[p],l,r)},
f9(a,b){var s,r=this.d.$1(b),q=a.a
A.aC(q,0,t._.a(this.e.$1(r.b)))
A.v(q,"uAlphaCutoff",new A.x(B.e,0))
s=this.a.ac()
A.bb(q,r.dx?s.e0(!1):s)},
iS(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gE().r)return
s=a.a
A.v(s,"uUseInstances",B.bL)
n.f6(a,b.gE().c,d)
n.f9(a,b.gE().b)
r=b.gE()
q=n.c.$1(r.a)
A.bn(s,q.a)
s=q.b
r=q.c
if(s)a.dA(r,q.d,0)
else a.aB(r,0)}else if(b instanceof A.eE){p=b.a
if(!p.gE().r)return
if(n.jS(b,c)===B.lV)return
n.f6(a,p.gE().c,d)
A.vK(a,b,!1)
n.f9(a,p.gE().b)
s=p.gE()
q=n.c.$1(s.a)
A.bn(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dB(r,q.d,o,0)
else a.dz(r,0,o)}else throw A.b(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ff(b).p(0),null))},
jS(a,b){return B.lU},
f6(a,b,c){var s=a.a
A.v(s,"uModel",new A.x(B.v,new Float32Array(A.a1(b.a9().a))))
A.v(s,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a1(c.a.a))))},
$ia8:1,
gE(){return this.a}}
A.v_.prototype={
$1(a){return this.a.a=a},
$S:46}
A.v0.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:60}
A.kI.prototype={
ga8(){return"shadowedWorld"},
al(a,b){var s=this,r=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.j))
B.a.l(a.a,new A.ax("shadowedWorld",B.cG,r,!1))},
ak(a){var s=this,r="shadowedWorld",q=s.a.av(new A.bk(r,s.b,s.c,B.jE,B.jw,B.ic)),p=A.c([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.j))
return A.c([new A.lJ(new A.b6(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
a_(){},
$iak:1}
A.lJ.prototype={
am(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ah("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.bR(b1,a4.b)
A.bb(b1,a2.a.ac())
s=a8.a
A.d7(b1,B.c9,1,s.c,s.b,s.a)
A.c5(b1,a2.b.b)
A.v(b1,"uAlbedo",B.w)
A.v(b1,"uNormalMap",B.mg)
A.v(b1,"uOrmMap",B.mh)
A.v(b1,"uEmissiveMap",B.mi)
A.v(b1,"uLightmap",B.mj)
s=t._
A.aC(b1,1,s.a(a2.y.$0()))
A.v(b1,"uShadowMap",B.ak)
r=t.n
A.v(b1,"uShadowMapTexelSize",new A.x(B.aj,new Float32Array(A.a1(A.c([1/a2.ch,1/a2.CW],r)))))
A.aC(b1,2,s.a(a2.at.$0()))
A.v(b1,"uSsao",B.dQ)
A.v(b1,"uVertexSnapGrid",new A.x(B.e,a9.Q))
A.v(b1,"uSceneColorSize",new A.x(B.aj,new Float32Array(A.a1(A.c([a2.ax,a2.ay],r)))))
A.v(b1,"uViewProjection",new A.x(B.v,new Float32Array(A.a1(a7.c.a))))
A.v(b1,"uView",new A.x(B.v,new Float32Array(A.a1(a7.a.a))))
A.v(b1,"uLightViewProjection",new A.x(B.v,new Float32Array(A.a1(b0.a.a))))
s=a8.b
A.v(b1,"uFogColor",new A.x(B.q,new Float32Array(A.a1(A.c([s.a,s.b,s.c],r)))))
A.v(b1,"uFogStart",new A.x(B.e,a8.c))
A.v(b1,"uFogEnd",new A.x(B.e,a8.d))
s=a8.e
A.v(b1,"uFogHeightFalloff",new A.x(B.e,s==null?0:s))
s=a8.f
A.v(b1,"uFogDensity",new A.x(B.e,s==null?0:s))
q=a2.Q.$0()
s=A.c([],t.cv)
p=a2.as.$0()
p=J.R(p==null?B.bc:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a6
k=o?a3:q.c
if(k==null)k=B.bN
A.v(b1,"uLightPosition",new A.x(B.q,new Float32Array(A.a1(A.c([l.a,l.b,l.c],r)))))
A.v(b1,"uLightDirection",new A.x(B.q,new Float32Array(A.a1(A.c([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.V
A.v(b1,"uLightColor",new A.x(B.q,new Float32Array(A.a1(A.c([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.v(b1,"uLightIntensity",new A.x(B.e,p==null?0:p))
A.v(b1,"uSpotEnabled",new A.x(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a6
g=p?a3:i.b
if(g==null)g=B.V
A.v(b1,"uDirectionalDirection",new A.x(B.q,new Float32Array(A.a1(A.c([h.a,h.b,h.c],r)))))
A.v(b1,"uDirectionalColor",new A.x(B.q,new Float32Array(A.a1(A.c([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.v(b1,"uDirectionalIntensity",new A.x(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.d(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.al
c=n?a3:e.c
if(c==null)c=B.V
m=""+f
A.v(b1,"uPointPosition"+m,new A.x(B.q,new Float32Array(A.a1(A.c([d.a,d.b,d.c],r)))))
A.v(b1,"uPointColor"+m,new A.x(B.q,new Float32Array(A.a1(A.c([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.v(b1,"uPointIntensity"+m,new A.x(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.v(b1,"uPointRadius"+m,new A.x(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.d(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.al
a=p?a3:e.c
if(a==null)a=B.bN
c=p?a3:e.d
if(c==null)c=B.V
n=""+f
A.v(b1,"uDirectSpotPosition"+n,new A.x(B.q,new Float32Array(A.a1(A.c([d.a,d.b,d.c],r)))))
A.v(b1,"uDirectSpotDirection"+n,new A.x(B.q,new Float32Array(A.a1(A.c([a.a,a.b,a.c],r)))))
A.v(b1,"uDirectSpotColor"+n,new A.x(B.q,new Float32Array(A.a1(A.c([c.a,c.b,c.c],r)))))
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
A.v(b1,"uAmbientColor",new A.x(B.q,new Float32Array(A.a1(A.c([a0.a,a0.b,a0.c],r)))))
A.v(b1,"uAmbientIntensity",new A.x(B.e,a8.w))
A.v(b1,"uRainWetness",new A.x(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.u)(b1),++a1)a2.eI(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.u)(a6),++a1)a2.eI(a5,a6[a1],r)},
eI(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.v(s,"uUseInstances",B.bL)
m.f7(a,b.gE().c)
r=b.gE()
q=b.gE()
p=b.gE()
b.gE()
m.fa(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gE().a)
A.bn(s,o.a)
s=o.b
r=o.c
if(s)a.dA(r,o.d,0)
else a.aB(r,0)}else if(b instanceof A.eE){n=b.a
m.f7(a,n.gE().c)
A.vK(a,b,!0)
s=n.gE()
r=n.gE()
q=n.gE()
n.gE()
m.fa(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gE().a)
A.bn(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dB(r,o.d,q,0)
else a.dz(r,0,q)}else throw A.b(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ff(b).p(0),null))},
fa(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aC(o,0,p.a(s.e.$1(q.b)))
A.aC(o,3,p.a(s.f.$1(r)))
A.aC(o,4,p.a(s.r.$1(r)))
A.aC(o,5,p.a(s.w.$1(r)))
A.aC(o,6,p.a(s.x.$1(r)))
A.v(o,"uAlphaCutoff",new A.x(B.e,0))
A.v(o,"uOpaqueCoverage",new A.x(B.e,c===B.aU?0:1))
A.v(o,"uAffineWarpStrength",new A.x(B.e,0))
p=t.n
A.v(o,"uMaterialTint",new A.x(B.q,new Float32Array(A.a1(A.c([q.c,q.d,q.e],p)))))
A.v(o,"uEmissiveStrength",new A.x(B.e,0))
A.v(o,"uUvScaleOffset",new A.x(B.mf,new Float32Array(A.a1(A.c([q.ay,q.ch,0,0],p)))))
A.v(o,"uNormalStrength",new A.x(B.e,1))
A.v(o,"uRoughness",new A.x(B.e,q.z))
A.v(o,"uMetallic",new A.x(B.e,0))
A.v(o,"uOcclusionStrength",new A.x(B.e,1))
A.v(o,"uLightmapIntensity",new A.x(B.e,0))
A.v(o,"uReceivesShadow",new A.x(B.e,1))
A:{p=r
if(B.aU===c){switch(d.a){case 0:p=B.eV
break
case 1:p=B.eU
break}break A}if(B.T===c||B.eS===c){p=s.a.ac()
break A}}A.bb(o,q.dx?p.e0(!1):p)},
f7(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.x(B.v,new Float32Array(A.a1(s.a))))
A.v(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a1(s.dK().a))))},
$ia8:1,
gE(){return this.a}}
A.kL.prototype={
ga8(){return"ssaoOcclusion"},
al(a,b){B.a.l(a.a,new A.ax("ssaoOcclusion",B.cF,A.c([new A.O(this.w,B.j)],t.C),!1))},
ak(a){var s=this,r="ssaoOcclusion",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jB,B.ib)),p=A.d8(s.d)
return A.c([new A.lM(new A.b6(r,A.c([new A.O(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
a_(){},
$iak:1}
A.lM.prototype={
am(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.bR(m,a.ah("ssaoRaw").b)
A.bb(m,p.a.ac())
if(n<=0){A.d7(m,B.S,1,1,1,1)
return}A.d7(m,B.S,1,0,0,0)
s=p.e.$0()
A.c5(m,p.b.b)
A.aC(m,0,t._.a(p.d.$0()))
A.v(m,"uSceneDepth",B.w)
A.v(m,"uNear",new A.x(B.e,s.f))
A.v(m,"uFar",new A.x(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.d(r,0)
A.v(m,"uProjScaleX",new A.x(B.e,r[0]))
if(5>=q)return A.d(r,5)
A.v(m,"uProjScaleY",new A.x(B.e,r[5]))
A.v(m,"uRadius",new A.x(B.e,p.f))
A.v(m,"uStrength",new A.x(B.e,n))
A.bn(m,p.c)
o.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.kK.prototype={
ga8(){return"ssaoBlur"},
al(a,b){B.a.l(a.a,new A.ax("ssaoBlur",B.cF,A.c([new A.O(this.y,B.i),new A.O(this.z,B.j)],t.C),!1))},
ak(a){var s=this,r="ssaoBlur",q=s.a.av(new A.bk(r,s.b,s.c,B.y,B.jq,B.ji)),p=A.d8(s.d)
return A.c([new A.lL(new A.b6(r,A.c([new A.O(s.y,B.i),new A.O(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
a_(){},
$iak:1}
A.lL.prototype={
am(a){var s,r,q=this,p=a.b,o=p.a
A.bR(o,a.ah("ssaoBlurred").b)
A.bb(o,q.a.ac())
if(a.c.e.c<=0){A.d7(o,B.S,1,1,1,1)
return}A.d7(o,B.S,1,0,0,0)
s=q.f.$0()
A.c5(o,q.b.b)
r=t._
A.aC(o,0,r.a(q.d.$0()))
A.v(o,"uSsaoRaw",B.w)
A.aC(o,1,r.a(q.e.$0()))
A.v(o,"uSceneDepth",B.ak)
A.v(o,"uTexelSize",new A.x(B.aj,new Float32Array(A.a1(A.c([1/q.r,1/q.w],t.n)))))
A.v(o,"uNear",new A.x(B.e,s.f))
A.v(o,"uFar",new A.x(B.e,s.r))
A.bn(o,q.c)
p.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.kZ.prototype={
ga8(){return"vhs"},
al(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.ax("vhs",B.L,A.c([new A.O(this.r,B.i),new A.O(s,B.J),new A.O(s,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.av(new A.bk("vhs",s.b,s.c,B.y,B.jt,B.il)),q=A.d8(s.d),p=s.r,o=s.w
return A.c([new A.lU(new A.b6("vhs",A.c([new A.O(p,B.i),new A.O(o,B.J),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
a_(){},
$iak:1}
A.lU.prototype={
am(a){var s,r=this,q=a.ah(r.f.a),p=a.ah(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.bR(m,p.b)
A.bb(m,r.a.ac())
A.c5(m,r.b.b)
A.aC(m,0,q.b)
A.v(m,"uScene",B.w)
A.aC(m,1,t._.a(r.d.$0()))
A.v(m,"uHistory",B.ak)
A.v(m,"uTime",new A.x(B.e,r.e.$0()))
A.v(m,"uChromaWeight",new A.x(B.e,n.at))
A.v(m,"uTrackingWeight",new A.x(B.e,l))
A.v(m,"uNoiseWeight",new A.x(B.e,n.ay))
A.v(m,"uHeadSwitchWeight",new A.x(B.e,n.ch))
A.v(m,"uDropoutWeight",new A.x(B.e,n.CW))
A.v(m,"uGhostWeight",new A.x(B.e,s))
A.bn(m,r.c)
o.aB(3,0)},
$ia8:1,
gE(){return this.a}}
A.i4.prototype={}
A.l9.prototype={
ga8(){return"world"},
al(a,b){B.a.l(a.a,new A.ax("worldOpaqueTransparent",B.cG,A.c([new A.O(this.e,B.j)],t.C),!1))},
ak(a){var s=this,r=s.a.av(new A.bk("safeWorld",s.b,s.c,B.jG,B.y,B.ia)),q=s.e
return A.c([new A.lX(new A.b6("worldOpaqueTransparent",A.c([new A.O(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
a_(){},
$iak:1}
A.lX.prototype={
am(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bR(j,a.ah(n.d).b)
A.bb(j,n.a.ac())
s=k.a
A.d7(j,B.c9,1,s.c,s.b,s.a)
A.c5(j,n.b.b)
A.v(j,"uViewProjection",new A.x(B.v,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a6
s=t.n
A.v(j,"uLightDir",new A.x(B.q,new Float32Array(A.a1(A.c([q.a,q.b,q.c],s)))))
p=k.r
A.v(j,"uAmbientColor",new A.x(B.q,new Float32Array(A.a1(A.c([p.a,p.b,p.c],s)))))
A.v(j,"uAmbientIntensity",new A.x(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.fn(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.fn(m,l[o])},
fn(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eE){s=b.a
n.fo(a,s.gE().c)
A.vK(a,b,!0)
r=n.c.$1(s.gE().a)
A.bn(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dB(p,r.d,o,0)
else a.dz(p,0,o)}else if(t.yz.b(b)){q=a.a
A.v(q,"uUseInstances",B.bL)
n.fo(a,b.gE().c)
r=n.c.$1(b.gE().a)
A.bn(q,r.a)
q=r.b
p=r.c
if(q)a.dA(p,r.d,0)
else a.aB(p,0)}else throw A.b(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.ff(b).p(0),null))},
fo(a,b){var s=b.a9(),r=a.a
A.v(r,"uModel",new A.x(B.v,new Float32Array(A.a1(s.a))))
A.v(r,"uNormalMatrix",new A.x(B.v,new Float32Array(A.a1(s.dK().a))))},
$ia8:1,
gE(){return this.a}}
A.n9.prototype={
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
else q=r===0?B.br:B.O
return new A.e5(q,s)},
hn(a){var s,r=this.ck(a).a
A:{if(B.a1===r){s=B.dq
break A}if(B.O===r){s=B.dp
break A}s=B.af
break A}return s}}
A.jS.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hy.prototype={
v(){return"GpuBufferKind."+this.b}}
A.hB.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.jU.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jR.prototype={}
A.jT.prototype={}
A.eB.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hA.prototype={}
A.hz.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eQ.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.i8.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d2.prototype={
v(){return"UniformType."+this.b}}
A.x.prototype={}
A.fl.prototype={
v(){return"ClearMask."+this.b}}
A.jB.prototype={
aB(a,b){var s=this.a
if(s.b!==B.h)A.i(A.k(u.k))
s.a.drawArrays(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bu(a,1)},
dz(a,b,c){var s=this.a
if(s.b!==B.h)A.i(A.k(u.k))
s.a.drawArraysInstanced(A.e(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bu(a,c)},
dA(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.i(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bu(a,1)},
dB(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.i(A.k(u.k))
s=v.G
r=A.e(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.e(s.WebGL2RenderingContext.UNSIGNED_INT):A.e(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.aK(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bu(a,c)},
$iBi:1}
A.fx.prototype={
v(){return"GpuResourceCandidateState."+this.b}}
A.fH.prototype={
fW(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.k("resource is not in candidate: "+a))
return s}}
A.od.prototype={
gn(){var s=this.c
if(s==null)throw A.b(A.k("GPU resource adapter is not initialized"))
return s},
cM(a){var s,r,q,p,o,n=this
if(n.e)A.i(A.k("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.k("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.k("GPU resource candidate is already open"))
s=A.hW(a)
p=n.b
r=p.cM(s)
try{q=new A.fH(r,n.d8(s,a),B.ae)
n.d=q
return q}catch(o){p.dW(r)
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
j=j.i("G<1>")
s=new A.G(k,i.a(new A.oe()),j)
for(h=s,g=J.R(h.a),h=new A.S(g,h.b,h.$ti.i("S<1>")),f=a.a;h.m();){r=g.gn()
q=A.yz(f,a.eG(r,a5))
J.hi(a3,q)
J.bs(a2,r,q)}e=A.K(new A.G(k,i.a(new A.of()),j),j.i("n.E"))
B.a.Y(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.u)(k),++d){o=k[d]
n=A.A2(J.AP(o,11))
if(i){h=J.aU(a2,"sceneColor")
h.toString
J.bs(a2,o,h)}else{h=n
if(typeof h!=="number")return h.n4()
if(h>=2){h=J.aU(a2,"sceneColor#1")
h.toString
J.bs(a2,o,h)}else{m=A.yz(f,a.eG(o,a5))
J.hi(a3,m)
J.bs(a2,o,m)}}}a0=A.aY(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.C(a0).i("eN<1>"),a0=new A.eN(a0,k),a0=new A.aH(a0,a0.gt(0),k.i("aH<a4.E>")),j=a.a,i=t.V,k=k.i("a4.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.wh(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
eG(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.hA(s,s,1,B.aX,!0)}if(a==="sceneDepth")return new A.hA(n,m,1,B.aX,!0)
r=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
q=r?B.d.a2(n+1,2):n
p=r?B.d.a2(m+1,2):m
s=a==="sceneColor"
o=s||B.b.T(a,"sceneColor#")
s=s?b.d:1
return new A.hA(q,p,s,o?B.cD:B.hr,o)},
dc(a){var s,r,q,p,o,n=A.ka(t.mf.a(a).gaE(),t._)
for(n=A.fT(n,n.r,A.o(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wh(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
es(a){if(this.d!==a||a.c!==B.ae)throw A.b(A.k("GPU resource candidate is not open"))}}
A.oe.prototype={
$1(a){return!B.b.T(A.r(a),"sceneColor#")},
$S:3}
A.of.prototype={
$1(a){return B.b.T(A.r(a),"sceneColor#")},
$S:3}
A.fW.prototype={
v(){return"_SlotState."+this.b}}
A.ei.prototype={
sb3(a){this.c=this.$ti.i("1?").a(a)}}
A.cZ.prototype={
aA(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.ei(B.aK,n.i("ei<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.nh
p.sb3(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c_(a){return this.aA(a,null)},
Z(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.dY(B.cK,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dY(B.cL,a))
s=q.b
if(s===B.aL||s===B.aK)throw A.b(A.dY(B.az,a))},
bz(a){var s,r,q=this.$ti
q.c.a(a)
this.Z(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dZ(a,b){var s,r=this.$ti
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
if(s<0||s>=p.b.length)throw A.b(A.dY(B.cK,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.dY(B.cL,a))
r=q.b
if(r===B.aL||r===B.aK)throw A.b(A.dY(B.hH,a))
q.b=B.aL
q.sb3(null)
B.a.l(p.c,s);++p.e},
bF(){return new A.bS(this.lL(),this.$ti.i("bS<+(1,2)>"))},
lL(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bF(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aL||j===B.aK){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aQ(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jm.prototype={
v(){return"BlendEquation."+this.b}}
A.et.prototype={
v(){return"BlendFactor."+this.b}}
A.jx.prototype={
v(){return"CullFace."+this.b}}
A.jz.prototype={
v(){return"DepthFunc."+this.b}}
A.ft.prototype={
e0(a){var s=this
return A.xD(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b7.prototype={
v(){return"StateField."+this.b}}
A.rR.prototype={
lb(a){var s,r=this.a
if(r==null)return A.hM(B.j9,t.qL)
s=A.a_(t.qL)
if(r.a!==a.a)s.l(0,B.bD)
if(r.b!==a.b)s.l(0,B.bE)
if(r.c!==a.c)s.l(0,B.bF)
if(r.d!==a.d)s.l(0,B.bG)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bH)
if(r.r!==a.r)s.l(0,B.bI)
if(r.w!==a.w)s.l(0,B.bJ)
if(r.x!==a.x)s.l(0,B.bK)
return s}}
A.dG.prototype={$idq:1}
A.iS.prototype={}
A.iR.prototype={}
A.lW.prototype={}
A.l7.prototype={
ie(a){var s=this,r=A.a(s.a.canvas)
s.c=A.U(new A.rP(s))
s.d=A.U(new A.rQ(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
h4(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bS(A.e(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bS(A.e(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bS(A.e(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bS(A.e(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bS(A.e(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.eY(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.hc(e.getParameter(A.e(k.WebGL2RenderingContext.RENDERER)))
m=A.hc(e.getParameter(A.e(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.q8("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bS(a){var s=A.hc(this.a.getParameter(a))
return typeof s=="number"?B.c.aw(s):0},
eY(a){var s=A.hc(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBF:1}
A.rP.prototype={
$1(a){A.a(a).preventDefault()
this.a.b=B.U},
$S:1}
A.rQ.prototype={
$1(a){this.a.b=B.h},
$S:1}
A.tH.prototype={
ki(){var s,r=this
if(r.b!==B.h)A.i(A.k(u.k))
s=r.w?A.E(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dG(new A.lW(s))},
fh(a){var s=a.a
if(!(s instanceof A.lW))throw A.b(A.ah(a,"query","is not a GPU timer query"))
return s}}
A.lV.prototype={}
A.jC.prototype={
B(){var s=this
return A.J(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jj.prototype={
glO(){var s=this.CW
return new A.aj(s,A.o(s).i("aj<2>")).be(0,0,new A.mS(),t.i)},
hY(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
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
j.ep()},
ep(){var s,r=this,q=r.k4
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
fc(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.p()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.p()
return s}r=B.jz.h(0,a)
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
j1(){var s,r,q,p,o,n,m,l=this.a,k=A.a6(l.sampleRate),j=B.c.aJ(k*2),i=A.a(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aH()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dN(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.a(s.createBufferSource())
r.buffer=o
A.a(r.playbackRate).value=0.94+p.ax.aH()*0.12
q=A.a(s.createGain())
A.a(q.gain).value=b
A.E(r.connect(q))
A.E(q.connect(p.fc(a)))
r.onended=A.U(new A.mU(r,q))
r.start()},
h1(a){return this.dN(a,1)},
h2(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.a(s.createBufferSource())
r.buffer=i
A.a(r.playbackRate).value=d*(0.94+j.ax.aH()*0.12)
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
l=j.eA(j.b.h0(e,s))
k=l.c
A.a(o.frequency).value=l.b
A.a(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fY(r,q,n,o,p,e,B.c.D(m,0,1)))
r.onended=A.U(new A.mT(j,o))
A.E(r.connect(q))
A.E(q.connect(n))
A.E(n.connect(o))
A.E(o.connect(p))
A.E(p.connect(j.fc(a)))
r.start()},
mh(a,b,c,d){return this.h2(a,b,c,1,d,null,null,null)},
eA(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
if(n.ax)m=!n.ay
else m=!1
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.az(r,q,p)},
eh(a){var s,r,q,p,o=this
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
q.onended=A.U(new A.mV(o,q,p))
q.start()
o.cy=q},
cW(a){if(this.p2===a)return
this.p2=a
this.ep()},
hy(a){var s,r,q=this
q.cW(a.b===B.bW)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aM?1:0.55
r=q.c
r===$&&A.p()
r=A.a(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.p()
A.a(s.gain).value=0.35*q.p4},
bi(a,b,c,d,e,f){var s,r,q=this
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
ea(a){var s=null
return this.bi(s,s,s,s,a,s)},
hv(a){var s=null
return this.bi(s,s,a,s,s,s)},
hx(a){var s=null
return this.bi(s,s,s,s,s,a)},
hu(a){var s=null
return this.bi(s,a,s,s,s,s)},
ht(a){var s=null
return this.bi(a,s,s,s,s,s)},
hw(a){var s=null
return this.bi(s,s,s,a,s,s)},
hs(a){if(this.ay===a)return
this.ay=a
this.bw()},
bw(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cg(p,g)
m=n==null?i.eA(h.h0(p,g)):new A.az(n.c,n.d,n.e)
l=A.a6(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.a(A.a(o.frequency).cancelScheduledValues(l))
A.a(A.a(o.frequency).setValueAtTime(A.a6(A.a(o.frequency).value),l))
j=l+0.08
A.a(A.a(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.a(A.a(o.gain).cancelScheduledValues(l))
A.a(A.a(o.gain).setValueAtTime(A.a6(A.a(o.gain).value),l))
A.a(A.a(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.D(m.c,0,1)}}}
A.mS.prototype={
$2(a,b){return Math.max(A.bp(a),t.jS.a(b).r)},
$S:62}
A.mR.prototype={
$1(a){return this.hg(t.q.a(a))},
hg(a){var s=0,r=A.bG(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bI(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.aB(A.cp(A.a(A.a(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.aB(A.cp(A.a(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.aB(A.cp(A.a(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ao(h)
A.a(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.y(l))
s=5
break
case 2:s=1
break
case 5:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$$1,r)},
$S:63}
A.mU.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.mT.prototype={
$1(a){var s=this.a.CW.a5(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.mV.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.cy===r){s.cy=null
s.cx=!1}},
$S:1}
A.fY.prototype={}
A.jk.prototype={
v(){return"AudioCategory."+this.b}}
A.mH.prototype={
i_(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.h6)
if(!B.a.a7(A.c([d.a,d.b,d.c],t.n),new A.mI()))throw A.b(B.ft)}}
A.mI.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.mp.prototype={
hX(a,b){if(this.a.length===0)throw A.b(B.fj)
if(!B.a.a7(A.c([a.a,a.b,a.c],t.n),new A.mq()))throw A.b(B.fx)}}
A.mq.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.hj.prototype={
C(){var s=t.n
if(B.a.N(A.c([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mr()))throw A.b(B.fN)
s=B.a.N(A.c([0,0.55,1],s),new A.ms())
if(s)throw A.b(B.fY)},
cg(a,b){var s
this.C()
if(a.ax)s=!a.ay
else s=!1
if(s)return new A.az(-1.5,2e4,0)
if(a.ay)return new A.az(-28,320,1)
return new A.az(-12,1100,0.55)},
mO(a){return this.cg(a,null)}}
A.mr.prototype={
$1(a){return!isFinite(A.bp(a))},
$S:5}
A.ms.prototype={
$1(a){A.bp(a)
return a<0||a>1},
$S:5}
A.mD.prototype={
hZ(a){var s=A.o(a)
if(new A.aa(a,s.i("aa<1>")).N(0,new A.mF())||new A.aj(a,s.i("aj<2>")).N(0,new A.mG()))throw A.b(B.h4)}}
A.mF.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.mG.prototype={
$1(a){var s
t.a.a(a)
s=J.aF(a)
return s.gO(a)||s.N(a,new A.mE())},
$S:64}
A.mE.prototype={
$1(a){return A.r(a).length===0},
$S:3}
A.vV.prototype={}
A.mP.prototype={}
A.mJ.prototype={
i0(a,b,c){var s
for(s=this.b.gaE(),s=s.gu(s);s.m();)s.gn().C()},
h9(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.k("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.k("audio listener room missing: "+a0))
r=this.jH(a,a0)
s=t.s
q=A.c([],s)
p=A.c([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c3
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
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.u)(o),++i)s.push(o[i].a)
o=B.c.D(l,-60,0)
m=B.d.D(k,120,2e4)
g=B.c.D(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.W(p,"; ")
b=t.N
s=A.ai(s,b)
b=A.ai(q,b)
if(!isFinite(g)||g<0||g>1)A.i(B.fX)
return new A.mP(s,b,o,m,g,n,c)},
cg(a,b){return this.h9(a,b,B.bk)},
jH(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.n1
s=t.N
r=A.J([a0,0],s,t.i)
q=A.J([a0,B.X],s,t.Es)
p=A.aN([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.P(k,new A.mK(r))
j=B.a.gU(k)
p.a5(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.im(s,!0)}i=o.aI(j)
h=A.K(i,i.$ti.i("n.E"))
B.a.P(h,new A.mL())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.cd(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c3:d).mO(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.K(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.n0}}
A.mK.prototype={
$2(a,b){var s,r,q
A.r(a)
A.r(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.G(r,s)
return q===0?B.b.G(a,b):q},
$S:65}
A.mL.prototype={
$2(a,b){var s=t.T
return B.b.G(s.a(a).a,s.a(b).a)},
$S:66}
A.im.prototype={}
A.fi.prototype={}
A.n6.prototype={
fU(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.j(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.AI().by(q).gau()
p.d=q
p.c=p.b.by(q).gau()
p.a=a}}
A.nQ.prototype={}
A.k_.prototype={
cQ(a){if(this.at)return
A.oZ(a,"requestPointerLock",t.X)},
e8(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.o(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a_(q)
for(m=J.R(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.mr(p,n)}this.b9()},
d_(a){var s,r,q,p,o,n,m=this
if(m.ch.d_(a))for(s=m.CW.aF("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
mi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.a(f.a.navigator).getGamepads())
c=J.R(t.ik.b(c)?c:new A.aW(c,A.C(c).i("aW<1,ae?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.P(r.connected)||A.r(r.mapping)!=="standard")break A
c=A.r(r.id)
q=A.r(r.mapping)
p=t.n
o=A.c([],p)
n=d.a(r.axes)
n=J.R(t.dd.b(n)?n:new A.aW(n,A.C(n).i("aW<1,t>")))
while(n.m())o.push(n.gn())
p=A.c([],p)
d=d.a(r.buttons)
d=J.R(t.nx.b(d)?d:new A.aW(d,A.C(d).i("aW<1,ae>")))
while(d.m()){r=d.gn()
p.push(A.P(r.pressed)?1:A.a6(r.value))}s=new A.kM(!0,c,q,o,p)
break}}d=s==null
m=A.D1(d?B.m0:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.N(c.aF(e),q.gap(q))
q=f.r
q.iY(A.o(q).i("l(1)").a(new A.oS(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.dI())n.l(0,h)}else n.l(0,h)}}f.e=A.hM(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.N(c.aF(e),l.gap(l))){d=r.a(f.c)
d=!B.a.N(c.aF(e),d.gap(d))}}if(d)i.dJ()},
je(a){var s=this
A.a(a)
if(A.P(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.r(a.code)))if(B.a.q(s.CW.aF("interact"),A.r(a.code))){if(s.ch.dI())s.d.l(0,A.r(a.code))}else s.d.l(0,A.r(a.code))},
jg(a){var s,r,q="interact"
A.a(a)
s=this.c
s.a5(0,A.r(a.code))
r=this.CW
if(B.a.q(r.aF(q),A.r(a.code))){t.Q.a(s)
s=!B.a.N(r.aF(q),s.gap(s))}else s=!1
if(s)this.ch.dJ()},
jk(a){var s,r=this
A.a(a)
if(!r.ay)return
s="Mouse"+A.e(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aF("interact"),s)){if(r.ch.dI())r.d.l(0,s)}else r.d.l(0,s)},
jo(a){var s,r="interact",q="Mouse"+A.e(A.a(a).button),p=this.c
p.a5(0,q)
s=this.CW
if(B.a.q(s.aF(r),q)){t.Q.a(p)
p=!B.a.N(s.aF(r),p.gap(p))}else p=!1
if(p)this.ch.dJ()},
jq(a){var s
A.a(a)
if(!this.ay)return
s=A.a6(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
jm(a){var s=this
A.a(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.eW(a,"movementX")
s.as=s.as+s.eW(a,"movementY")},
ji(a){var s=this
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
eW(a,b){var s=A.z6(a[b])
if(s==null)s=null
return s==null?0:s},
cu(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.ka(n.c,t.N)
for(r=n.e,r=A.fT(r,r.r,A.o(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.N(n.CW.aF(a),s.gap(s))},
b9(){var s=this
s.c.L(0)
s.d.L(0)
s.f.L(0)
s.r.I(0,s.e)
s.as=s.Q=0
s.ch.dT()}}
A.oS.prototype={
$1(a){return!this.a.q(0,A.r(a))},
$S:3}
A.oR.prototype={
aF(a){var s=this.a.h(0,a)
return s==null?B.o:s},
mr(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.R(a))return
r=t.N
q=A.a_(r)
for(p=A.fT(b,b.r,A.o(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ai(q,r))},
bd(a,b){var s,r,q
t.Q.a(b)
for(s=this.aF(a),r=s.length,q=0;q<r;++q)if(b.a5(0,s[q]))return!0
return!1}}
A.oV.prototype={
dI(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
dJ(){this.c=this.b=!1
this.d=0},
d_(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.D(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
dT(){this.c=this.b=!1
this.d=0}}
A.aV.prototype={}
A.pg.prototype={}
A.pd.prototype={
ml(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a_(h)
r=A.K(b,t.p)
B.a.I(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.b(A.w("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.c([],r)
m=A.c([],r)
l=A.c([],r)
k=A.c([],r)
j=A.m(h,t.N)
i.eM(n,i.d,a,b,i.a,j,m)
i.eM(l,i.e,a,c,i.b,j,k)
return new A.pg(n,l,j)},
eM(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.C(d)
s=k.i("M<1,+effectiveScore,light,score(t,aV,t)>")
r=A.K(new A.M(d,k.i("+effectiveScore,light,score(t,aV,t)(1)").a(new A.pe(this,c,b)),s),s.i("a4.E"))
B.a.P(r,new A.pf())
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
A.pe.prototype={
$1(a){var s,r
t.p.a(a)
s=a.c.ao(0,this.b).gt(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.iF(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:68}
A.pf.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:69}
A.nv.prototype={
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
A.pm.prototype={
hN(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dq(b,c)},
k9(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.j(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.S(s,6.283185307179586)
r=Math.sin(s)
return new A.j(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.d1.prototype={
cO(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.cX(s,0,m,l)
n.a=s}r=b.ao(0,a).by(d.ao(0,a)).gau()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.ib(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.ib(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.ib(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.ib(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.ib(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.ib(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aD(a,b,c,d,e){return this.cO(a,b,c,d,e,1,1)}}
A.j.prototype={
ai(a,b){return new A.j(this.a+b.a,this.b+b.b,this.c+b.c)},
ao(a,b){return new A.j(this.a-b.a,this.b-b.b,this.c-b.c)},
aj(a,b){return new A.j(this.a*b,this.b*b,this.c*b)},
c0(a){return this.a*a.a+this.b*a.b+this.c*a.c},
by(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.j(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gau(){var s=this,r=s.gt(0)
return r<1e-9?new A.j(0,0,0):new A.j(s.a/r,s.b/r,s.c/r)}}
A.kM.prototype={}
A.la.prototype={}
A.n_.prototype={
n_(a){var s,r,q,p,o,n=B.l.ab(a.B(),null)
this.a.fE(n)
s=A.a(A.a(v.G.window).localStorage)
r=A.at(s.getItem("quarantine.save.active"))
q=A.at(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
mm(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.a(A.a(v.G.window).localStorage)
r=A.at(s.getItem("quarantine.save.active"))
q=A.at(s.getItem("quarantine.save.previous"))
p=this.eF(r,a)
if(p!=null)return new A.eO(p,null)
o=this.eF(q,a)
if(o!=null)return new A.eO(o,"recovered previous save")
if(r==null)return B.lq
return B.lp}catch(n){return B.lo}},
eF(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.fE(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ao(q) instanceof A.H)return null
else throw q}}}
A.jE.prototype={
i3(a,b,c,d,e){if(this.a.length===0)throw A.b(B.fV)
if(this.b<0)throw A.b(B.fu)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ai(q,t.i)
s=t.z
return A.aY(A.J(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.nF.prototype={}
A.fu.prototype={
B(){var s=t.N
return A.J(["kind",this.a.b],s,s)}}
A.nI.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:70}
A.bo.prototype={}
A.kq.prototype={
B(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.J(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
lG(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ao(0,new A.j(0,1.3499999999999999,0))
return!new A.jq(s,s.ai(0,new A.j(0,1.2000000000000002,0))).cK(a,r)}}
A.q2.prototype={
B(){return A.m3(this.a)}}
A.fM.prototype={
B(){return A.J(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qq.prototype={
fE(a){var s,r,q,p,o,n,m,l=B.l.aO(a,null),k=t.f
if(!k.b(l))throw A.b(B.h5)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aJ(p))o=p!==1&&p!==2
else o=!0
if(o)A.i(A.a2("unsupported save version "+A.y(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.i(B.fB)
k=A.aM(n,s,r)
return A.ye(A.aM(m,s,r),k,2)}}
A.eO.prototype={}
A.eA.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jP.prototype={}
A.o1.prototype={}
A.o0.prototype={
gaa(){var s=this.d
return new A.o1(s.a,s.b)},
gh3(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.J(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.J(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.J(["entryCount",m.e.b.a],k,t.S)
p=A.xM(m.c).B()
o=m.r
n=o.c
return new A.q2(A.m3(A.J(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.J(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
kc(a,b){if(!B.a.N(a.f,new A.o2(b)))return!1
this.z.kb(a,b)
return!0},
lx(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.o(s).i("aj<2>")
q=A.K(new A.aj(s,r),r.i("n.E"))
B.a.P(q,new A.o3())
if(q.length===0)return null
s=A.C(q)
r=s.i("G<1>")
p=A.K(new A.G(q,s.i("l(1)").a(new A.o4()),r),r.i("n.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dS(a),r=t.sU,s=new A.aH(s,s.gt(0),r.i("aH<V.E>")),r=r.i("V.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.S(n,o.length)]
s=l.c
k=new A.cO(a,l.a,s.length-1,B.a.gX(s).p(0))
j.k(0,a,k)
return k},
k8(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.ah(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cA(B.hf)}if(n<a)this.cA(B.hg)},
hQ(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cZ(a)&&s.hP(b)},
mn(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dT){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
hM(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Bf(j,A.ai(i.d,h).length)
if(a===B.dG)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.C(r)
A.Be(j,new A.G(r,q.i("l(1)").a(new A.o5(k)),q.i("G<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.ih,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aJ(j.a/1*3)
B.a.l(r.r,new A.fO(q.a,a,b))
m=r.a
A.Bq(m,q.a,n,k.b,A.ai(m.d,h));++q.a
q.b=7
r.c=16
r.d=6
r.f=!1
m.hA(B.iR)
s.r.ky(o,c)
l=B.c.aJ(j.b/1*6)
if(l>0)r.cZ(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aj(i,A.o(i).i("aj<2>")).N(0,new A.o6())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cA(B.hi)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cA(B.hh)},
cA(a){var s=this;++s.y
B.a.l(s.w,new A.jP())
B.a.l(s.x,A.Bg(A.Ea(a),s.b,s.y-1))}}
A.o2.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:14}
A.o3.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:11}
A.o4.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:23}
A.o5.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.rb().hJ(this.a.c,a.a)},
$S:74}
A.o6.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.jq.prototype={
mH(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.C(s)
q=new A.G(s,r.i("l(1)").a(new A.na(e)),r.i("G<1>"))
p=!q.gu(0).m()?null:q.gU(0)
if(p==null){n.d=null
return}if(!(n.cw(b,p.f)&&a==="hall"))o=n.cw(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lb(p,B.c.D(d,0,1))},
lP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.eV(g,c,d)
s=h.iU(a,b,c,d)
if(s!=null){h.d=s
return h.eV(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.kr(Math.sqrt(r*r+q*q)/0.08))
o=d.aj(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.jR(a,n,m,o)
l=l||j.b
m=j.a
i=h.mk(a,n)
n=i==null?n:i}h.bb(m)
return new A.kd(m,n)},
iU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d.a,g=d.c
for(s=a.d,r=b==="landing",q=b==="hall",p=Math.sqrt(h*h+g*g)<0.001,o=0;!1;++o){n=s[o]
m=n.r
l=n.f
k=h*(m.a-l.a)+g*(m.c-l.c)
j=!1
if(q)if(this.cw(c,l)){l=k>0||p
j=l}i=!1
if(r)if(this.cw(c,m)){m=k<0||p
i=m}if(j||i)return new A.lb(n,j?0:1)}return null},
eV(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ao(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.D(a.b+o/p,0,1)
n=A.yr(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bb(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kd(n,k)},
cw(a,b){var s=a.ao(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
jR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.cH(c,!1)
s=h.cD(a,b,c,new A.j(g,0,0))
r=s.a
q=d.c
p=h.cD(a,b,r,new A.j(0,0,q))
o=!s.b
if(o&&!p.b)return new A.cH(p.a,!1)
n=c.ai(0,new A.j(0,0.35,0))
h.bb(n)
if(!h.cK(a,b)){m=h.cD(a,b,n,new A.j(g,0,0))
l=h.cD(a,b,m.a,new A.j(0,0,q))
if(!m.b||!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.j(g,r-j,q)
h.bb(i)
if(h.cK(a,b))break}h.bb(k)
return new A.cH(k,!1)}}if(o)return new A.cH(r,!0)
if(!p.b)return new A.cH(p.a,!0)
h.bb(c)
return new A.cH(c,!0)},
cD(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.cH(c,!1)
s=c.ai(0,d)
this.bb(s)
if(this.cK(a,b)){this.bb(c)
return new A.cH(c,!0)}return new A.cH(s,!1)},
bb(a){var s=a.ao(0,new A.j(0,1.3499999999999999,0))
this.a=s
this.b=s.ai(0,new A.j(0,1.2000000000000002,0))},
cK(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aC(m)
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
return!this.jO(a,m,s)},
mk(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aC(k)
for(r=k.a,q=a.aI(r),p=J.R(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.cd(r)
m=!1
if(n!=null)if(l.h(0,n)!=null){if(o.ax)m=!o.ay
else m=!1
o=m&&this.fm(k,o,s)&&this.iN(k,o,s)}else o=m
else o=m
if(o)return n}return null},
jO(a,b,c){var s,r,q,p
for(s=a.aI(b.a),r=J.R(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax)p=!q.ay
else p=!1
if(p&&this.fm(b,q,c))return!0}return!1},
fm(a,b,c){var s,r,q,p=a.a,o=b.aG(p),n=b.ag(p)
p=o===B.n||o===B.m
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
iN(a,b,c){var s,r=this
switch(b.aG(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
skg(a){this.a=t.a7.a(a)}}
A.na.prototype={
$1(a){t.w8.a(a)
return!1},
$S:75}
A.kd.prototype={}
A.cH.prototype={}
A.lb.prototype={}
A.hD.prototype={}
A.ou.prototype={
ky(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.M,r)
s=B.M[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hK(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.c}return r},
hL(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.M,q)
p=B.M[q]
if(p.b===a)r+=p.d}return r},
B(){return A.J(["landedCount",this.b],t.N,t.z)}}
A.Z.prototype={}
A.jI.prototype={
glJ(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.c([r,q,p,o,n,m],t.n),new A.nK())&&o>=r&&n>=q&&m>=p}}
A.nK.prototype={
$1(a){return isFinite(A.bp(a))},
$S:5}
A.jX.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.S(s,3)!==0}else s=!0
if(s)throw A.b(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.glJ())throw A.b(A.w("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.N(A.c([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.ow()))throw A.b(A.w("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.ow.prototype={
$1(a){return!isFinite(A.bp(a))},
$S:5}
A.ov.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bt(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bt(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bt(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bt(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bt(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bt(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.Z(a,b,c,m,n,o,0,0,p),r=new A.Z(g,h,i,m,n,o,1,1,p)
this.ae(s,new A.Z(d,e,f,m,n,o,1,0,p),r)
this.ae(s,r,new A.Z(j,k,l,m,n,o,0,1,p))},
ae(a,b,c){var s=this,r=s.b
B.a.l(r,s.dg(a))
B.a.l(r,s.dg(b))
B.a.l(r,s.dg(c))},
dg(a){var s,r,q=B.a.W(A.c([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.k("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
kl(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.jX(A.ai(g,t.hl),new Uint16Array(A.a1(this.b)),new A.jI(s,r,q,p,o,n))
h.C()
return h}}
A.jJ.prototype={}
A.vP.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ag.q(0,s))A.i(A.k("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:76}
A.uT.prototype={
$2(a,b){var s=t.Ez
return B.b.G(s.a(a).a,s.a(b).a)},
$S:77}
A.d9.prototype={
mZ(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.c([],t.Dl)
k=t.t
s=A.c([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.d(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iy(A.Gk(new A.jX(i,new Uint16Array(A.a1(s)),A.DT(i))),l.a,l.b,l.c,A.c([],k))}}
A.iy.prototype={}
A.ex.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jK.prototype={
ks(a){var s
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
kt(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.ci
break A}if("kitchen"===a||"cellar"===a){s=B.f0
break A}if("bathroom"===a){s=B.f1
break A}if("spare-room"===a){s=B.f2
break A}s=B.ci
break A}return this.ks(s)},
fI(a,b,c,d){d.i("n<0>").a(b)
t.Q.a(c)
return new A.bS(this.lt(d.i("f(0)").a(a),b,c,d),d.i("bS<0>"))},
lt(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$fI(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a7(0,B.ag.gap(B.ag)))throw A.b(A.w("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ag.q(0,j))throw A.b(A.k("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ee.prototype={
fA(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uz.prototype={
$1(a){var s=this
return t.xT.a(a).fA(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:27}
A.uy.prototype={
$1(a){return t.xT.a(a).fA(0,(this.a+this.b)*0.5,this.c)},
$S:27}
A.dj.prototype={
v(){return"FocusKind."+this.b}}
A.dV.prototype={}
A.qn.prototype={}
A.tL.prototype={
$1(a){var s,r,q=this
t.wU.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:79}
A.tK.prototype={
$1(a){return t.fW.a(a).b===this.a},
$S:25}
A.uR.prototype={
$1(a){return B.d.D(B.c.aJ(a*this.a),0,255)},
$S:81}
A.ed.prototype={}
A.fX.prototype={}
A.os.prototype={
it(){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=t.s,r=t.yH,q=t.E,p=this.b,o=0;o<8;++o){n=B.id[o].a
m=n[1]
l=n[3]
k=n[4]
if(m==="hall"||m==="landing")j=A.c([],q)
else{j=m==="bathroom"
i=j?B.A:B.n
j=A.c([new A.dE(m+"-north-aperture",i,1.7,1,1.4,1.5,j,!0)],q)}i=A.c([],s)
h=n[1]
B.a.l(p,new A.cE(m,B.f3,new A.j(4.8,3.2,5),new A.j(l,0,k),j,i,A.c([new A.fC("showcase-"+h+"-light",h+" test light",new A.j(2.4,2.2,0.35),!1,!1,null)],r),B.iT,n[2],n[0],"ceiling-plaster",B.iU))}},
is(){var s,r,q,p,o,n=null,m="hall",l="outside",k="kit-internal-four-panel-door",j="kitchen",i="landing",h="bathroom"
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=B.jy.h(0,p.a)
if(o==null)o=B.o
B.a.I(p.f,o)}B.a.I(this.c,A.c([A.cY(m,l,"kit-front-door-recessed",!0,B.n,B.m,2.6,!1,"front-door",!1,1.9,0,!0,!1,!1,1),A.cY(m,"living-room",k,!1,B.C,B.A,2.6,!1,"hall-living",!1,2,2,!0,!1,!1,1.2),A.cY(m,j,k,!1,B.A,B.C,2.6,!1,"hall-kitchen",!1,2,2,!0,!1,!1,1.2),A.cY(j,"cellar","kit-cellar-door-grille",!1,B.A,B.C,2.6,!1,"kitchen-living",!1,2,2,!0,!1,!1,1.2),A.cY(m,i,n,!1,B.m,B.n,2.6,!1,"hall-landing",!1,2,2,!0,!1,!1,1.2),A.cY(i,"bedroom",k,!1,B.C,B.A,2.6,!1,"landing-bedroom",!1,2,2,!0,!1,!1,1.2),A.cY(i,h,k,!1,B.A,B.C,2.6,!1,"landing-bathroom",!1,2,2,!0,!1,!1,1.2),A.cY(j,h,k,!1,B.m,B.n,2.6,!1,"kitchen-bathroom",!1,2,2,!0,!1,!1,1.2),A.cY("cellar",l,n,!0,B.m,B.n,2.6,!1,"cellar-service",!1,2,0,!0,!1,!1,1),A.cY("bedroom",l,n,!0,B.m,B.n,2.6,!1,"bedroom-service",!1,2,0,!0,!1,!1,1),A.cY("spare-room",l,n,!0,B.m,B.n,2.6,!1,"spare-service",!1,2,0,!0,!1,!1,1)],t.J))},
il(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.oK(1.5),a4=this.b,a5=A.ap(a4,!0,t.W)
B.a.L(a4)
s=A.c([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.u)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.c([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.u)(i),++g){f=i[g]
j.push(new A.dE(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.c([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.u)(h),++g){d=h[g]
i.push(new A.fC(d.a,d.b,a3.$1(d.c),d.d,!1,d.f))}h=A.c([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.u)(e),++g){b=e[g]
h.push(new A.hY(b.a,b.b,a3.$1(b.c)))}s.push(new A.cE(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.ap(a4,!0,t.T)
B.a.L(a4)
s=A.c([],t.J)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bw(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,!1,a0.Q,!1,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;!1;++a1){if(!(a1<0))return A.d(a4,a1)
a2=a4[a1]
B.a.k(a4,a1,new A.e8(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
im(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.oL(),a7=this.b,a8=A.ap(a7,!0,t.W)
B.a.L(a7)
s=A.c([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.u)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.c([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.u)(h),++f){e=h[f]
i.push(new A.dE(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.c([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.u)(g),++f){c=g[f]
h.push(new A.fC(c.a,c.b,a6.$1(c.c),c.d,!1,c.f))}g=A.c([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.u)(d),++f){a=d[f]
g.push(new A.hY(a.a,a.b,a6.$1(a.c)))}d=A.c([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.u)(b),++f){a1=b[f]
d.push(new A.jF(a1.a,a1.b.aj(0,1.5)))}s.push(new A.cE(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.I(a7,s)
a7=this.c
a2=A.ap(a7,!0,t.T)
B.a.L(a7)
s=A.c([],t.J)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bw(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,!1,a3.Q,!1,a3.at,a3.ax,a3.ay))}B.a.I(a7,s)
for(a7=this.d,s=t.n,a4=0;!1;++a4){if(!(a4<0))return A.d(a7,a4)
a5=a7[a4]
r=A.c([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.u)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.e8(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
j0(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.R(n))throw A.b(A.k("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.R(n))throw A.b(A.k("duplicate portal "+n))
q.k(0,n,m)}},
jY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
jW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.m(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.u)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.fl(o,i,h,g,f,e)
a5.en(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.u)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.k(l+" references invalid portal "+d))
i=c.aG(l)
h=c.ag(l)
g=c.w
f=c.x
a5.fl(o,i,h,g,0,f)
a5.en(a6,l,c.aG(l),c.ag(l),c.ag(l)+g,0,f)}}for(s=new A.F(a6,a6.$ti.i("F<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.c9(a)
r.P(a,new A.oM())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.b(A.k("overlapping apertures on "+b.a))}}},
fl(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.n||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.k("aperture outside "+a.a+" "+b.b+" wall"))},
en(a,b,c,d,e,f,g){J.hi(t.aD.a(a).ce(b+":"+c.b,new A.oJ()),new A.iG([d,e,f,g]))},
aC(a){var s=a.c,r=this.r,q=a.a
return new A.j(s.a+r.hK(q),s.b+r.hL(q),s.c)},
aI(a){var s=this.c,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.oN(a)),r.i("G<1>"))},
mj(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.ah(a,"roomId","not a portal endpoint"))
r=this.aC(o)
q=b.ag(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aG(a).a){case 0:s=new A.j(s.a+q,p,s.c)
break
case 2:s=new A.j(s.a+q,p,s.c+r.c)
break
case 1:s=new A.j(s.a+r.a,p,s.c+q)
break
case 3:s=new A.j(s.a,p,s.c+q)
break
default:s=null}return s},
ghc(){return B.a.be(this.b,0,new A.oO(),t.S)},
h0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.X
s=A.c([new A.aQ(a,B.X)],t.nR)
r=A.aN([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.mq(s,0)
n=o.a
m=o.b
for(l=this.aI(n),k=J.R(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.cd(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.K(m,p)
h.push(j)
B.a.l(s,new A.aQ(i,h))}}}return B.X}}
A.oK.prototype={
$1(a){var s=this.a
return new A.j(a.a*s,a.b,a.c*s)},
$S:45}
A.oL.prototype={
$1(a){return a.aj(0,1.5)},
$S:45}
A.oM.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.G(a.a[0],b.a[0])},
$S:83}
A.oJ.prototype={
$0(){return A.c([],t.wx)},
$S:84}
A.oN.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:85}
A.oO.prototype={
$2(a,b){return A.e(a)+t.W.a(b).e.length},
$S:86}
A.nJ.prototype={}
A.rb.prototype={
hJ(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.rc())}else s=!1
return s}}
A.rc.prototype={
$1(a){return t.fW.a(a).w},
$S:25}
A.ox.prototype={
mg(a){var s=this.e,r=A.C(s)
return new A.G(s,r.i("l(1)").a(new A.oA(a)),r.i("G<1>"))},
cF(a){return B.a.aV(this.d,new A.oy(a),new A.oz(a))},
mU(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.k("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.k("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.k("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a_(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.b(A.k("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.k("invalid bounds for inventory asset "+m))}j=A.a_(s)
i=A.a_(s)
h=A.a_(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.u)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.b(A.k("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.b(A.k(a7+m+" references "+l))
n=a6.cF(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.AF()
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
a4=g.h7(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.b(A.k(a7+m+" escapes "+f.a))}}}
A.oA.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:87}
A.oy.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:88}
A.oz.prototype={
$0(){return A.i(A.k("inventory asset missing: "+this.a))},
$S:6}
A.cV.prototype={}
A.cx.prototype={
h7(a,b){var s=this.f.c.b*b,r=a.f
return new A.j(r.a.b*s,r.b.b*s,0)}}
A.oY.prototype={}
A.oW.prototype={}
A.uY.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:21}
A.oX.prototype={
B(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.o(o).i("aa<1>")
n=A.K(new A.aa(o,n),n.i("n.E"))
B.a.Y(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
dV(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.ff)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.L(0)
for(q=new A.F(r,A.o(r).i("F<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aJ(o)||o<0)throw A.b(B.fv)
s.k(0,n,o)}}}
A.dt.prototype={}
A.oB.prototype={
mX(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.c([],t.ea)
for(r=A.fT(a5,a5.r,A.o(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.u)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.aC(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.j(a,a0,a1).gt(0)
if(a2>0.0001){a3=1/a2
a4=new A.j(a*a3,a0*a3,a1*a3)}else a4=new A.j(0,-1,0)
B.a.l(s,new A.dt(new A.j(d,c,e),a4,16760952,3.8,2.1*this.jG(k)))}}B.a.P(s,new A.oC(a6))
return A.kO(s,0,A.fb(4,"count",t.S),t.A_).bK(0)},
jG(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.oC.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.G(a.a.ao(0,s).gt(0),b.a.ao(0,s).gt(0))},
$S:91}
A.jN.prototype={
v(){return"Floor."+this.b}}
A.dU.prototype={
v(){return"Facing."+this.b}}
A.dE.prototype={
shI(a){this.w=A.P(a)}}
A.bw.prototype={
cd(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aG(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.ah(a,"roomId","not an endpoint of "+s.a))},
ag(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.ah(a,"roomId","not an endpoint of "+s.a))}}
A.fC.prototype={}
A.hY.prototype={}
A.jF.prototype={}
A.e8.prototype={}
A.cE.prototype={}
A.oE.prototype={
lm(a){return B.a.aV(this.c,new A.oF(a),new A.oG(a))},
mV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.k("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.k("soundscape source changed: "+f))
f=t.N
s=A.a_(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){m=r[p]
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
if(k.gO(k)||k.gaE().N(0,new A.oH()))throw A.b(A.k("sound emitter "+l+" has no usable cues"))
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
A.oF.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:92}
A.oG.prototype={
$0(){return A.i(A.k("sound emitter missing: "+this.a))},
$S:6}
A.oH.prototype={
$1(a){return B.b.bh(A.r(a)).length===0},
$S:3}
A.cU.prototype={}
A.ot.prototype={
dr(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ah(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.j_}q=A.c([],t.Fm)
p=B.c.aW(r)+1
o=B.c.aW(b)
for(n=p;n<=o;++n){m=B.d.S(n,24)
B.a.l(q,new A.eD("tick"))
if(B.d.S(m,3)===0){B.a.l(q,new A.eD("cuckoo"))
B.a.l(q,new A.eD("bell"))}if(B.d.S(m,6)===0)B.a.l(q,new A.eD("chime"))}l.b=b
return q}}
A.eD.prototype={}
A.oD.prototype={
dr(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.ah(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.iZ}q=A.c([],t.op)
for(p=B.c.aW(r)+1;p<=B.c.aW(b);++p){o=B.d.S(p,24)
n=B.d.S(o,4)
if(n===2)B.a.l(q,B.hK)
if(B.d.S(o,3)===1)B.a.l(q,B.hM)
if(B.d.S(o,8)===5)B.a.l(q,B.hP)
if(B.d.S(o,5)===0)B.a.l(q,B.hL)
if(B.d.S(o,7)===3)B.a.l(q,B.hQ)
if(n===1)B.a.l(q,B.hN)
if(B.d.S(o,6)===4)B.a.l(q,B.hO)}m.b=b
return q}}
A.cT.prototype={}
A.uX.prototype={
$1(a){return typeof a!="number"},
$S:21}
A.oI.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.J(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.J(["lit",o.a,"examined",o.b],m,r))}return A.J(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
kd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.l(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.l(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.wR(new A.aa(o,A.o(o).i("aa<1>")),d)){d=f.b
if(A.wR(new A.aa(d,A.o(d).i("aa<1>")),r)){d=f.c
e=!A.wR(new A.aa(d,A.o(d).i("aa<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.fO)
e=f.d
if(e<0||e>2)A.i(B.fm)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.u)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.u)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.u)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.u)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.hZ.prototype={
B(){return A.J(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hN.prototype={
B(){return A.J(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bi.prototype={}
A.nE.prototype={
$1(a){return this.a.q(0,A.r(a))},
$S:3}
A.dX.prototype={
v(){return"Hand."+this.b}}
A.rN.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
ee(a,b){var s,r,q,p,o=A.c([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.k9.prototype={
B(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.B[r]
o.k(0,q,s.h(0,q))}return A.J(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.M(B.B,t.oI.a(new A.pj(this)),t.jT).W(0," \xb7 ")}}
A.pi.prototype={
$2(a,b){return new A.L(A.r(a),A.r(b),t.q)},
$S:93}
A.pj.prototype={
$1(a){return this.a.a.h(0,A.r(a))},
$S:94}
A.bV.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.J(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.p0.prototype={
bX(a){t.G.a(a)
return a.a===5&&B.a.a7(B.B,new A.p7(this,a))},
eo(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bX(b))return null
s=this.e++
r=new A.bV(s,a,A.c([A.ph(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dw(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bX(b))return!1
B.a.l(s.c,A.ph(b,c,B.ay))
return!0},
k7(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bX(b))return!1
s.r=A.ph(b,0,B.cJ)
return!0},
hA(a){var s,r,q,p
t.U.a(a)
s=this.d
B.a.L(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.R(p)&&!B.a.q(s,p))B.a.l(s,p)}},
mW(a){var s
if(!this.b.R(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.o(n).c)
B.a.Y(n)
s=A.c([],t.cs)
for(r=q.b,r=new A.af(r,r.r,r.e,A.o(r).i("af<2>"));r.m();)s.push(r.d.B())
return A.J(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.p7.prototype={
$1(a){var s
A.r(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.mW.prototype={
l6(a,b){if(a.a===B.aE)return new A.pY(b,a.B(),B.dv)
return new A.pb(b,!1,null,a.B(),B.dv)}}
A.hk.prototype={
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
A.mX.prototype={
ck(a){var s,r,q,p=null,o=a==null?p:B.b.bh(a).toLowerCase()
if(o==null||o.length===0)return B.e5
s=o!=="pixeldart"
if(!s||o==="next"||o==="auto"||o==="legacy"){s=!s||o==="next"
r=o==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':p
return new A.hk(B.aE,s,o==="auto",!1,p,r,q)}return new A.hk(B.aE,!1,!1,!0,'unsupported renderer query "'+o+'"; use pixeldart',!1,p)}}
A.pc.prototype={}
A.pb.prototype={
gbA(){var s=this.b.gbA(),r=s.hd(this.e)
return r},
c5(){if(this.f===B.dw)throw A.b(A.k("legacy backend is disposed"))
this.b.c5()
this.f=B.z},
bg(a,b){if(a<=0||b<=0)throw A.b(A.w("legacy surface size must be positive",null))
if(this.f!==B.z)A.i(A.k("legacy backend is not ready"))
this.b.bg(a,b)},
br(a){if(this.f!==B.z)A.i(A.k("legacy backend is not ready"))
B.l.ab(A.J(["backend","legacy","interpolation",0,"facts",A.m3(a.a.a)],t.N,t.X),null)
this.b.br(a)},
dE(a){if(this.f!==B.z)A.i(A.k("legacy backend is not ready"))
B.l.ab(A.J(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.pZ.prototype={}
A.pY.prototype={
gbA(){var s=this.b.gbA(),r=s.hd(this.c)
return r},
c5(){if(this.d===B.dw)throw A.b(A.k("pixeldart backend is disposed"))
this.b.c5()
this.d=B.z},
bg(a,b){if(this.d!==B.z)A.i(A.k("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.b(A.w("pixeldart surface size must be positive",null))
this.b.bg(a,b)},
br(a){var s,r=this,q="pixeldart backend is not ready",p=r.b,o=r.d
if(o===B.bv){if(p.y1){s=p.d
s===$&&A.p()
s=s.b===B.U}else s=!1
s=!s
if(s){r.d=B.z;++p.to
o=B.z}if(o===B.bv)return}if(o!==B.z)A.i(A.k(q))
B.l.ab(A.J(["backend","pixeldart","interpolation",0,"facts",A.m3(a.a.a)],t.N,t.X),null)
if(p.y1){o=p.d
o===$&&A.p()
o=o.b===B.U}else o=!1
if(o){if(r.d!==B.z)A.i(A.k(q))
r.d=B.bv
return}p.br(a)},
dE(a){if(this.d!==B.z)A.i(A.k("pixeldart backend is not ready"))
B.l.ab(A.J(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.q_.prototype={
kp(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c4.ck(a)
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
o=A.K(o,A.o(o).c)
B.a.Y(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.u)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.ko.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.q0.prototype={
B(){var s=this
return A.J(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.q1.prototype={
fz(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.w("surface dimensions must be positive",null))
s=a1.a
A:{if(B.a1===s){r=new A.f4(1080,1920)
break A}if(B.O===s){r=new A.f4(720,1280)
break A}r=new A.f4(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.c.aJ(r.b*q)
q=B.c.aJ(r.a*q)
o=B.c.D(a5/p,0,1)
n=B.c.D(a4/q,0,1)
m=o<n?o:n
r=this.eq(B.c.aJ(p*m),320,a5)
q=this.eq(B.c.aJ(q*m),180,a4)
l=s===B.a1
k=s===B.O
j=a1.b.q(0,"shadows")&&a3!=="off"
C:{p="high"===a3
i=0
if(p){i=j?3:0
break C}if("standard"===a3){i=j?2:0
break C}if("off"===a3)break C
if(j)if(l)i=3
else i=k?2:1
break C}D:{h=1024
if(p){p=h
break D}if("standard"===a3){p=768
break D}if(l)p=h
else p=k?768:512
break D}E:{if("msaa4"===a){h=4
break E}if("msaa2"===a||"auto"===a){h=2
break E}h=1
break E}g=a0==="linear"?B.eF:B.aS
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.eQ
break F}if("errors"===b){c=B.cb
break F}c=B.eR
break F}return new A.i3(a1,r,q,h,g,i,p,f,e,d,c)},
eq(a,b,c){if(c<b)return c
return B.d.D(a,b,c)}}
A.k8.prototype={}
A.q7.prototype={
mS(a,b){var s,r,q,p=this
if(b<0.35){p.f=B.b3
p.e=-1
return}s=p.c
if(s>0){s=p.c=s-a
if(s<=0)p.f=B.b3
else{r=1-s/p.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=p.a
p.f=new A.k8(!0,B.c.D(q*(0.6+b*0.6),0,1),0.82+s.aH()*0.1,0.9+s.aH()*0.08,1)}}s=p.e
if(s>0)p.e=s-a
if((p.b-=a)<=0){s=p.a
p.d=p.c=0.35+s.aH()*0.15
p.e=(0.6+s.aH()*2.8)/0.343
p.b=16-b*11+s.aH()*6}}}
A.kB.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eL.prototype={
v(){return"RendererBackendState."+this.b}}
A.qk.prototype={}
A.kC.prototype={}
A.qj.prototype={
i8(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.w("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.w("renderer provenance values must be non-empty",null))}},
hd(a){var s=this
return A.yb(s.a,s.c,s.d,!1,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
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
A.ql.prototype={
bg(a,b){if(a<=0||b<=0)throw A.b(A.w("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
fQ(a,b){var s,r,q,p,o
for(s=A.ai(this.a.d,t.rO),r=A.C(s).i("eN<1>"),s=new A.eN(s,r),s=new A.aH(s,s.gt(0),r.i("aH<a4.E>")),r=r.i("a4.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.r6.prototype={}
A.cG.prototype={
v(){return"ShaderDebugMode."+this.b},
gld(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.e7.prototype={
gfK(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.aK(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.aK(r,2)
else return B.c.aK(r,3)}}}
A.r7.prototype={
gbf(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.d(B.bh,p)
s=B.bh[p]
p=this.f
p===$&&A.p()
r=A.C(p)
q=r.i("G<1>")
p=A.K(new A.G(p,r.i("l(1)").a(new A.ra(s)),q),q.i("n.E"))
return p},
gcI(){var s,r=this.gbf(),q=r.length
if(q===0)return null
s=B.d.D(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.d(r,s)
return r[s]},
mu(){var s,r,q,p,o
if(this.b===4)this.e=B.aH
else for(s=this.gbf(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
ms(){var s,r,q,p
this.e=B.aH
s=this.f
s===$&&A.p()
r=0
for(;r<43;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
F(a){var s,r,q=this.f
q===$&&A.p()
s=A.C(q)
r=A.bL(new A.G(q,s.i("l(1)").a(new A.r9(a)),s.i("G<1>")),t.d)
q=r==null?null:r.y
return q==null?1:q},
aQ(a){var s,r,q=this.f
q===$&&A.p()
s=A.C(q)
r=A.bL(new A.G(q,s.i("l(1)").a(new A.r8(a)),s.i("G<1>")),t.d)
q=r==null?null:r.z
return q!==!1}}
A.ra.prototype={
$1(a){return t.d.a(a).d===this.a},
$S:26}
A.r9.prototype={
$1(a){return t.d.a(a).a===this.a},
$S:26}
A.r8.prototype={
$1(a){return t.d.a(a).a===this.a},
$S:26}
A.bO.prototype={
v(){return"SleepQuality."+this.b}}
A.bz.prototype={
v(){return"SleepLocation."+this.b}}
A.fO.prototype={}
A.nw.prototype={
cZ(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hP(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.c([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.J(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.J(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nx.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:96}
A.ny.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:97}
A.k0.prototype={
v(){return"InteractionType."+this.b}}
A.eX.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.rS.prototype={}
A.eW.prototype={}
A.ju.prototype={}
A.oP.prototype={}
A.oT.prototype={
e4(){var s,r,q,p=t.r,o=A.c([],p)
for(s=this.a.b,s=new A.af(s,s.r,s.e,A.o(s).i("af<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.c(o.slice(0),p)
B.a.P(p,new A.oU())
return p},
kx(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.n_
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.ga1(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gX(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eW(B.aJ,r)
s=r.a
o=B.a.gX(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gX(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eW(B.dW,r)
return new A.eW(B.bQ,r)},
jw(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.ju(e,!1,B.mZ,null)
s=p.d===c
r=this.kx(p,d)
q.mW(e)
return new A.ju(e,s,r,r.a===B.aJ&&s?'The world says "'+d.c+'". The entry says "'+B.a.gX(p.c).p(0)+'".':null)},
l7(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aJ)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.oP(B.a.gX(s.c).p(0)+" but "+A.y(a.f))}}
A.oU.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:11}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qo.prototype={}
A.d_.prototype={}
A.qp.prototype={
gef(){var s=B.bl.h(0,this.a)
return s==null?0:s},
hT(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.E)s=q.e
else s=!0
if(s)return B.cU
r=A.wD(b)
s=q.c
B.a.L(s)
B.a.I(s,r)
B.a.L(q.d)
q.a=B.aF
q.b=0
q.e=!1
return A.c([B.ez],t.xB)},
dq(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.E||a===0)return B.cU
s=A.c([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.E))break
A:{q=l.a
p=B.bl.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a2)l.jT(s)
p=l.b
o=B.bl.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.d_())
if(q===B.a2){l.a=B.E
l.b=0
l.e=!0
B.a.l(s,B.ey)}else{p=q.a+1
if(!(p<7))return A.d(B.cS,p)
l.a=B.cS[p]
l.b=0
B.a.l(s,new A.d_())}}}return A.ai(s,t.F3)},
B(){var s=this,r=t.N
return A.J(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ai(s.c,r),"extinguishedMantles",A.ai(s.d,r),"completed",s.e],r,t.z)},
jT(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.D(B.c.aW(l.b/l.gef()*A.ai(s,r).length),0,A.ai(s,r).length)
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
A.jQ.prototype={
gei(){var s=this.b
if(s<7||s>19)return 0
return B.c.D((s-7)/12,0,1)},
gl8(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.c.D((s-5.5)/15,0,1))},
h6(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.a2("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.eV.prototype={
B(){var s=this
return A.J(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.rO.prototype={
dD(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.aZ(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.d(s,r)
return s[r]}}
A.uA.prototype={
$0(){var s,r=this.a,q=r===2||r===5||r===8||r===11||r===14||r===16||r===18||r===19||r===20
if(q){s=B.c.D(0.25+0.65*Math.pow(Math.sin(r*3.141592653589793/7),2)*(0.6+0.4*(r/21)),0.2,1)
if(r===20)s=0.98}else s=0
return new A.eV(r,q,A.zU(B.c.aK(s,2)),A.zU(B.c.aK(12-(r-1)*0.11000000000000001,2)))},
$S:98}
A.pC.prototype={
aX(a,b){var s=this.b
if(s.R(a))s=s.h(0,a)===b
else s=!1
return s},
kb(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.o(k).i("F<1,2>")
k=A.K(new A.F(k,j),j.i("n.E"))
B.a.P(k,new A.pE())
j=t.N
k=A.w3(k,j,j)
s=this.b
r=A.o(s).i("F<1,2>")
s=A.K(new A.F(s,r),r.i("n.E"))
B.a.P(s,new A.pF())
s=A.w3(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.o(q).i("F<1,2>")
q=A.K(new A.F(q,p),p.i("n.E"))
B.a.P(q,new A.pG())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.J(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.J(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pE.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:20}
A.pF.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:20}
A.pG.prototype={
$2(a,b){var s=t.gI
return B.b.G(s.a(a).a,s.a(b).a)},
$S:100}
A.cO.prototype={
B(){var s=this
return A.J(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bu.prototype={
B(){var s=this
return A.J(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.pW.prototype={
e2(){var s="denise.pears",r=A.c([],t.xz),q=this.a
if(q.aX("ashworth.compact","accepted"))B.a.l(r,B.kv)
if(q.aX(s,"taken"))B.a.l(r,B.kz)
else if(q.aX(s,"left"))B.a.l(r,B.kw)
if(q.aX("sylvia.certificate","granted"))B.a.l(r,B.ky)
if(q.aX("residue.coal","cellar"))B.a.l(r,B.ku)
if(q.aX("telegram.08","read"))B.a.l(r,B.kt)
if(q.aX("truth.shawl","home"))B.a.l(r,B.ks)
if(q.aX("sowerby.paraffin","received"))B.a.l(r,B.kx)
if(q.aX("inspector.proclamation","acknowledged"))B.a.l(r,B.kr)
return r},
hj(a){var s=this.e2(),r=A.C(s),q=r.i("G<1>")
s=A.K(new A.G(s,r.i("l(1)").a(new A.pX(a)),q),q.i("n.E"))
return s}}
A.pX.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:31}
A.rg.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fQ(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.jZ(q,r.b))}s=A.fQ(e.r)
q=A.fQ(e.w)
p=A.fQ(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.F(n,A.o(n).i("F<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.c([],m)
for(i=J.R(l.b);i.m();){h=i.gn()
j.push(A.J(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.F(m,A.o(m).i("F<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.m(c,b)
for(m=e.ax,m=new A.F(m,A.o(m).i("F<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.J(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
jZ(a,b){var s,r=A.fQ(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fQ(q.bG(0,new A.rh(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gV(s))r.k(0,"_ambient",A.fQ(s.bG(0,new A.ri(),t.S,t.z)))
return r}}
A.rh.prototype={
$2(a,b){return new A.L(A.e(a),t.BX.a(b).B(),t.pr)},
$S:102}
A.ri.prototype={
$2(a,b){return new A.L(A.e(a),t.vw.a(b).B(),t.pr)},
$S:103}
A.eU.prototype={
B(){return A.J(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eT.prototype={
B(){return A.J(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.ik.prototype={
B(){var s=t.N
return A.J(["field",this.a,"value",this.b],s,s)}}
A.l6.prototype={
B(){var s,r,q,p=this,o=A.c([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.J(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eK.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gV(s))q.k(0,"effects",s)
return q}}
A.d6.prototype={
B(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gV(s))q.k(0,"when",s)
return q}}
A.rj.prototype={
cb(){var s=0,r=A.bG(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$cb=A.bI(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.aB(A.cp(A.a(A.a(v.G.window).fetch("res/text.json")),t.m),$async$cb)
case 6:n=b
j=t.N
s=7
return A.aB(A.cp(A.a(n.text()),j),$async$cb)
case 7:m=b
l=A.FP(m)
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
k=A.ao(e)
j=A.y(k)
throw A.b("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$cb,r)},
hi(a){var s,r,q,p=this.a
p===$&&A.p()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().cT(0,new A.rk())
r=p.$ti
q=t.N
return A.w3(new A.cA(p,r.i("L<f,f>(1)").a(new A.rl()),r.i("cA<1,L<f,f>>")),q,q)}return null},
e3(a,b){var s=this.hi(a)
return s==null?null:s.h(0,b)},
hm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
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
k.k(0,h,A.r(i.b))}B.a.l(p,new A.eK(A.r(m.h(0,"id")),A.r(m.h(0,"label")),A.r(m.h(0,"reply")),A.aY(k,n,n)))}if(p.length<2)return g
return new A.l6(r,a,b,c,d,A.ai(p,t.Y))},
hl(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.p()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.aw(p)||o!==B.c.aw(o))return n
return new A.eU(B.c.aw(p),B.c.aw(o))},
hk(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.p()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.aw(p)||typeof o!="string"||typeof n!="string")return m
return new A.eT(B.c.aw(p),o,n)},
mY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.p()
b4=new A.F(b4,A.o(b4).i("F<1,2>")).gu(0)
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
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.hl(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.hk(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.p()
b4=new A.af(b4,b4.r,b4.e,A.o(b4).i("af<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.hm(A.r(d.h(0,"visitor")),B.c.aw(A.a6(d.h(0,"day"))),A.r(d.h(0,"tier")),B.c.aw(A.a6(d.h(0,"ordinal"))))
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
b4=new A.F(b4,A.o(b4).i("F<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.p()
b4=new A.F(b4,A.o(b4).i("F<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.c([],s)
for(m=J.R(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.ik(A.r(a0.h(0,"field")),A.r(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rg(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.rk.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:104}
A.rl.prototype={
$1(a){t.AC.a(a)
return new A.L(A.r(a.a),A.r(a.b),t.q)},
$S:105}
A.jd.prototype={
bD(a,b,c){var s=B.b.bh(a),r=B.b.bh(c)
if(r.length===0)return""
if(b||this.a===B.bS)return s.length===0?r:s+": "+r
if(this.a===B.bR)return r
return s.length===0?r:s+": "+r},
fJ(a,b){return this.bD(a,!1,b)}}
A.vU.prototype={}
A.cM.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dL.prototype={
bY(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dL(q,p,o,n,m)},
kZ(a){var s=null
return this.bY(s,s,s,a,s)},
l4(a){var s=null
return this.bY(s,s,s,s,a)},
kV(a){var s=null
return this.bY(s,s,a,s,s)},
kT(a){var s=null
return this.bY(s,a,s,s,s)},
kB(a){var s=null
return this.bY(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.J(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mo.prototype={
$1(a){return a==null?null:A.P(a)},
$S:106}
A.mm.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:32}
A.mn.prototype={
$0(){return A.i(B.h2)},
$S:6}
A.mz.prototype={
bM(a,b){var s,r=this,q=r.e.fJ(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aM(q)
A.e(A.a(v.G.window).setTimeout(A.zh(new A.mB(r)),7000))},
aM(a){var s,r,q=this
if(!q.c||B.b.bh(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.e(A.a(v.G.window).setTimeout(A.zh(new A.mA(q,s)),4200))}}
A.mB.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:108}
A.mA.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.cu.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cN.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.dg.prototype={
v(){return"AudioReverbMode."+this.b}}
A.df.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dM.prototype={
cH(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dM(r,q,p,a==null?s.e:a)},
kR(a){return this.cH(null,null,a,null)},
kI(a){return this.cH(null,a,null,null)},
kX(a){return this.cH(null,null,null,a)},
kH(a){return this.cH(a,null,null,null)},
B(){var s=this
return A.J(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mM.prototype={
$1$2(a,b,c){return B.a.aV(c.i("n<0>").a(a),new A.mN(b,c),new A.mO(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:109}
A.mN.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.mO.prototype={
$0(){return A.i(A.a2("unsupported audio option: "+A.y(this.a),null,null))},
$S:6}
A.mZ.prototype={
mR(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.fJ(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.n1.prototype={
$1(a){return this.a.$0()},
$S:2}
A.n5.prototype={
$1(a){return this.a.$1(A.P(this.b.checked))},
$S:2}
A.n4.prototype={
$1(a){var s=A.eI(A.r(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.n3.prototype={
$1(a){A.r(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dO.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dP.prototype={
v(){return"BrushComponentState."+this.b}}
A.b3.prototype={
gk5(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bh(s.a).length===0||B.b.bh(s.c).length===0)throw A.b(B.fT)
if(s.e===B.c2&&s.b!==B.c1)throw A.b(B.fw)}}
A.n7.prototype={
lp(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.D(a>=r+c?q.e=a-c+1:r,0,s)},
cV(a,b){if(b<=0){this.f=0
return}this.f=B.d.D(this.f+a,0,Math.max(0,b-1))},
bC(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.p()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cX(o+c,n)
l=new A.cX(s+p,n)
k=s-p
j=new A.cX(k,r-c)
i=new A.cX(k-c,r)
h=new A.cX(q-p,r)
g=new A.cX(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.eK(A.c([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.eK(A.c([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aU(a,b,c,d,e,f,g,h,i){return this.bC(a,b,c,d,e,!0,f,g,h,i)},
le(a,b,c,d,e,f,g,h,i){return this.bC(a,b,14,c,d,e,f,g,h,i)},
lj(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.p()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.ef()
s.bO(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aH()-0.5)*8
l=s.aH()
k=s.aH()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
fF(a,b,c,d,e){var s,r,q=this.b
q===$&&A.p()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.eJ(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.eJ(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.y(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
lh(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.p()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a6(A.a(q.measureText(a.toUpperCase())).width)+70)
this.aU("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
lg(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aU(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.p()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a6(A.a(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bC(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gmJ()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.k0(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.be(i,0,new A.n8(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?104:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.c.aW((a5+a2-a1)/a2))
d1=d4.f
c7.lp(d1==null?0:d1,c,a6)
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
B.a.l(f,new A.fk("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aU(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
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
B.a.l(c7.d,new A.fk("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aU("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
lf(a,b,c){var s,r,q,p,o,n,m,l,k=a.length
if(k===0)return
s=c*0.5-(k*140+(k-1)*12)*0.5+70
r=b-32
for(q=0;q<k;++q){if(!(q<a.length))return A.d(a,q)
p=a[q]
o=s+q*152
n=p.c
m=n?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bC(n?"#f5f0e6":"#c49a45",1.5,6,m,28,n,-0.04,140,o,r)
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
li(c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="rgba(12, 10, 14, 0.92)",c2="#d32f2f",c3="#f5f0e6",c4="#c49a45",c5="#1a1820",c6="#8c887e",c7=d0.d
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
c7.fillStyle="rgba(10, 8, 12, "+A.y(0.75*s)+")"
c7.fillRect(0,0,c9,c8)
c0.aU(c2,3,18,c1,q,-0.025,r,o,n)
c0.lj(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c0.aU(c3,2,8,c2,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bh[g]
e=d0.b===g
d=l+i*(g+0.5)
c=e?c4:c5
b=e?c3:c6
c0.bC(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
c0.aU(c4,2.5,10,c5,140,-0.02,r-80,o,a1)
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
c7.fillText(d0.e.gld().toUpperCase(),o,a1+5)
c7.fillStyle="#ffd54f"
c7.font='13px "Georgia", serif'
c7.shadowBlur=0
c7.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
c7.restore()}else{a2=d0.gbf()
a3=n+m-52
a4=Math.max(1,a3-a0)
a5=Math.max(1,B.c.aW((a4+52-44)/52))
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
c0.bC(b,e?2.2:1,6,c,44,e,-0.02,a8,b1,b0)
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
c0.le(b4?c3:c6,1.5,b,24,!1,-0.04,74,c,b0)
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
eK(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.p()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
eJ(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.p()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
k0(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a6(A.a(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bR(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.p()
s=A.a6(A.a(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.p()
p=A.a6(A.a(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.b.H(r,0,s-1)}return q?"...":r+"..."}}
A.n8.prototype={
$2(a,b){var s
A.bp(a)
A.r(b)
s=this.a.b
s===$&&A.p()
return Math.max(a,A.a6(A.a(s.measureText(b)).width))},
$S:110}
A.fo.prototype={
gkk(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aF(r)
o.k(0,q,p.gO(r)?"":p.gU(r))}return o},
bx(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.J(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.bp(r)
q=n.h(0,i)
q.toString
A.bp(q)
p=n.h(0,"invertX")
p.toString
A.P(p)
o=n.h(0,"invertY")
o.toString
A.P(o)
m=n.h(0,h)
m.toString
return A.fp(null,a,A.P(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.e(s)
r=n.h(0,j)
r.toString
A.bp(r)
q=n.h(0,i)
q.toString
A.bp(q)
p=n.h(0,"invertX")
p.toString
A.P(p)
o=n.h(0,"invertY")
o.toString
A.P(o)
m=n.h(0,h)
m.toString
A.P(m)
l=k.gkk()
return A.fp(l,null,m,r,p,o,s,q)},
dv(a){var s=null
return this.bx(a,s,s,s,s,s)},
kO(a){var s=null
return this.bx(s,s,s,a,s,s)},
kP(a){var s=null
return this.bx(s,s,s,s,a,s)},
kL(a){var s=null
return this.bx(s,a,s,s,s,s)},
kM(a){var s=null
return this.bx(s,s,a,s,s,s)},
l5(a){var s=null
return this.bx(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.fh)
p=this.r
if(p.gJ().N(0,new A.nn()))throw A.b(B.fW)
if(p.gJ().N(0,new A.no()))throw A.b(B.fK)
p=p.gaE()
o=A.o(p)
s=o.i("hw<n.E,f>")
r=s.i("G<n.E>")
q=A.K(new A.G(new A.hw(p,o.i("n<f>(n.E)").a(new A.np()),s),s.i("l(n.E)").a(new A.nq()),r),r.i("n.E"))
if(A.hM(q,A.C(q).c).a!==q.length)throw A.b(B.fk)},
B(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.ap(r.b,!0,p))}return A.J(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nn.prototype={
$1(a){t.yx.a(a)
return J.xn(a.b,new A.nm(a))},
$S:33}
A.nm.prototype={
$1(a){var s
A.r(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xz(a)
else s=!1
return s},
$S:3}
A.no.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.xn(a.b,B.dA.gap(B.dA))},
$S:33}
A.np.prototype={
$1(a){return t.a.a(a)},
$S:112}
A.nq.prototype={
$1(a){return A.r(a).length!==0},
$S:3}
A.nl.prototype={
$1(a){return typeof a=="string"},
$S:21}
A.dN.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.es.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dh.prototype={}
A.jv.prototype={
bV(a){var s=this
if(!s.a.r.R(a))return new A.dh(B.bZ,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e6},
kq(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aO
if(!A.xz(a)){p.c=p.b=null
return new A.dh(B.c0,B.dB.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xp(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dh(B.aP,a+" is already bound to "+s)}return p.ik(a)},
dU(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aO
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e7
case 1:s=A.wu(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.wN(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.x_(r,k))
m.a=m.a.dv(s)
break
case 0:s=A.wu(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gU(r)}r=A.c([k],t.s)
p=s.h(0,l)
p.toString
p=A.kO(p,1,null,A.C(p).c)
o=p.$ti
p=new A.aH(p,p.gt(0),o.i("aH<a4.E>"))
o=o.i("a4.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.x_(r,k)}else{r=s.h(0,j)
r.toString
r=A.wN(A.x_(r,k),q)}s.k(0,j,r)
m.a=m.a.dv(s)
break}m.c=m.e=m.d=null
return B.bX},
ik(a){var s,r,q=this,p=q.b
if(p==null)return B.aO
s=A.wu(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.wN(r,a))
q.a=q.a.dv(s)
q.b=null
return B.bX}}
A.hr.prototype={
i1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jv(f.w)
s=f.b
s.className=A.r(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.a(s.appendChild(A.n2(a,B.eg,1)))
A.a(s.appendChild(A.z(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.z(a,"div",c,e)
f.em(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.em(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.d2(a,r,"invertX","Invert horizontal look")
f.d2(a,r,"invertY","Invert vertical look")
f.d2(a,r,"holdToInteract","Hold to interact")
A.a(s.appendChild(r))
q=A.z(a,"div",c,e)
for(p=B.js.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fp(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.ml(l)?"unbound":J.xr(l," / ")
j=A.a(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.a(a.createElement("span"))
i.textContent=n
A.a(j.appendChild(i))
h="change "+m+" binding"
g=A.dQ(a,new A.b3("settings.controls.bind."+m,B.c1,n,h,B.p),new A.nj(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.a(j.appendChild(g))
A.a(q.appendChild(j))
o.k(0,m,g)}A.a(s.appendChild(q))
p=A.z(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.a(s.appendChild(p))
p=A.z(a,"div","pause-actions",e)
f.at=p
A.a(s.appendChild(p))
f.dm()
A.a(s.appendChild(A.dQ(a,B.eh,new A.nk(f),e)))},
fX(a){var s=this.x
s===$&&A.p()
if(s.b==null)return
a.preventDefault()
this.eN(this.x.kq(A.r(a.code)))},
eN(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aP?B.el:B.p
p=o.Q.h(0,r)
if(p!=null)A.vW(p,q)}n=a.a
if(n===B.aP)o.jK()
else if(n===B.c_){n=o.x
n===$&&A.p()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dm()}else{o.d5()
o.ax=null}},
jK(){var s,r,q,p,o
this.d5()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.ie[r]
p=A.E(s.ownerDocument)
p.toString
o=q.b
A.a(s.appendChild(A.dQ(p,new A.b3("settings.controls.resolve."+o,B.G,o,"resolve key binding conflict",B.p),new A.ni(this,q),null)))}},
d5(){var s,r=this.at
if(r==null)return
while(A.E(r.firstChild)!=null){s=A.E(r.firstChild)
s.toString
A.a(r.removeChild(s))}},
dm(){var s,r,q,p
for(s=this.Q,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.p()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.ml(p)?"unbound":J.xr(p," / ")
r.textContent=q
A.vW(r,B.p)}},
em(a,b,c,d,e,f){var s,r=A.z(a,"label","setting-row",null)
A.a(r.appendChild(A.z(a,"span",null,d)))
s=A.B_(a,new A.b3("settings.controls."+c,B.ej,d,null,B.p),f,e,new A.ng(this,c),1)
A.a(r.appendChild(s))
A.a(b.appendChild(r))
this.y.k(0,c,s)},
d2(a,b,c,d){var s=A.z(a,"label","setting-toggle",null),r=A.B0(a,new A.b3("settings.controls."+c,B.ek,d,null,B.p),!1,new A.nh(this,c))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,"span",null,d)))
A.a(b.appendChild(s))
this.z.k(0,c,r)},
eL(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sdL(a){this.f=t.pf.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.nj.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.p()
s=n.bV(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bY){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.vW(q,B.c2)}p.d5()
return null},
$S:0}
A.nk.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.ni.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.p()
return s.eN(r.dU(this.b))},
$S:0}
A.ng.prototype={
$1(a){var s=this.a,r=s.w
s.eL(this.b==="horizontalSensitivity"?r.kM(a):r.l5(a))},
$S:113}
A.nh.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.kO(a)
break A}if("invertY"===q){s=r.w.kP(a)
break A}s=r.w.kL(a)
break A}r.eL(s)},
$S:8}
A.nr.prototype={
i2(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.a(o.appendChild(A.z(s,"h1","journal-title","credits")))
r=A.z(s,"p","credits-body",null)
p.f!==$&&A.aX()
p.f=r
r.textContent="\u2014"
A.a(o.appendChild(r))
A.a(o.appendChild(A.z(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.z(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.U(new A.ns(p)))
A.a(o.appendChild(q))}}
A.ns.prototype={
$1(a){return this.a.a6()},
$S:2}
A.nA.prototype={
i4(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.z(a,o,"door-speaker",p)
q.b!==$&&A.aX()
q.b=s
r=A.z(a,o,"door-line",p)
q.c!==$&&A.aX()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(s))
A.a(n.appendChild(r))
r=A.z(a,o,"door-choice-status",p)
q.d!==$&&A.aX()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.a(n.appendChild(r))
r=A.z(a,o,"door-cite-list",p)
q.f!==$&&A.aX()
q.f=r
s=A.z(a,o,"door-cite-result",p)
q.r!==$&&A.aX()
q.r=s
A.a(n.appendChild(r))
A.a(n.appendChild(s))
s=A.z(a,"button","door-continue","continue")
q.e!==$&&A.aX()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.nB(q)))
A.a(n.appendChild(s))
n.addEventListener("keydown",A.U(new A.nC(q,a)))
A.a(A.E(a.body).appendChild(n))},
eb(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.p()
s.textContent=a
s=r.c
s===$&&A.p()
s.textContent=B.K.bD("",!0,b)
s=r.d
s===$&&A.p()
s.textContent=A.xC(B.b5)
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
ec(a,b){var s,r=this,q=r.c
q===$&&A.p()
q.textContent=B.K.bD("",!0,a)
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
hF(a){return this.ec(a,!1)},
hH(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.p()
s=A.a(s.style)
r=b==null?"none":""
s.display=r
r=A.c([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.p()
s.textContent=A.xC(r)},
ed(a,b){var s=this.c
s===$&&A.p()
s.textContent=B.K.bD("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.p()
s.textContent=""
s=this.e
s===$&&A.p()
A.a(s.style).display=""},
hE(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.p()
s.textContent=""
for(r=b.length,q=A.tP,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.a(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nD(o,this)
if(typeof o=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.he()]=o
m.addEventListener("click",l)
A.a(s.appendChild(m))}},
fP(){var s,r=this
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
s=r.a
s.className="door"
s.setAttribute("hidden","")},
slW(a){this.w=t.Z.a(a)},
slV(a){this.x=t.vR.a(a)}}
A.nB.prototype={
$1(a){var s
A.a(a)
s=this.a.w
return s==null?null:s.$0()},
$S:35}
A.nC.prototype={
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
if(A.P(a.shiftKey)){if(m===B.a.gU(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gX(r).focus()}}else if(m===B.a.gX(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gU(r).focus()}},
$S:116}
A.nD.prototype={
$1(a){var s
A.a(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:35}
A.nG.prototype={
i5(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.z(s,"h1","journal-title",null)
o.f!==$&&A.aX()
o.f=r
q=A.z(s,"div","ending-copy",null)
o.r!==$&&A.aX()
o.r=q
A.a(n.appendChild(r))
A.a(n.appendChild(q))
p=A.z(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.U(new A.nH(o)))
A.a(n.appendChild(p))},
hG(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.p()
s.textContent=a.a.b
s=m.r
s===$&&A.p()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o=b[p]
n=A.a(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.a(s.appendChild(n))}m.bH()},
sm_(a){this.w=t.Z.a(a)}}
A.nH.prototype={
$1(a){var s=this.a
s.a6()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.o7.prototype={
bp(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.ap(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
L(a){var s=this
s.a=null
s.b=""
s.e=A.c([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
mQ(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
lz(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.fq()
return!0}return!1}if(a==="Space"){s=B.a.dG(l,new A.o8())
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
return!0}}if(B.b.T(a,"Digit")){p=A.du(B.b.b0(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.b.T(a,"Numpad")){p=A.du(B.b.b0(a,6),m)
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
fq(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
lA(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.fq()
return!0}this.cl(a.b)
return!0},
slU(a){this.y=t.dt.a(a)},
slZ(a){this.z=t.Z.a(a)}}
A.o8.prototype={
$1(a){A.r(a)
return B.b.q(a.toLowerCase(),"silent")||B.b.q(a,"...")},
$S:3}
A.o9.prototype={}
A.dm.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cP.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cQ.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dn.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dl.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dp.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cd.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.dk.prototype={
v(){return"GameplayClockFormat."+this.b}}
A.fw.prototype={
aN(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.vX(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
l1(a){var s=null
return this.aN(s,s,s,s,s,s,s,s,s,a,s)},
l0(a){var s=null
return this.aN(s,s,s,s,s,s,s,s,a,s,s)},
kE(a){var s=null
return this.aN(s,s,a,s,s,s,s,s,s,s,s)},
kN(a){var s=null
return this.aN(s,s,s,s,a,s,s,s,s,s,s)},
kU(a){var s=null
return this.aN(s,s,s,s,s,s,a,s,s,s,s)},
l2(a){var s=null
return this.aN(s,s,s,s,s,s,s,s,s,s,a)},
kQ(a){var s=null
return this.aN(s,s,s,s,s,a,s,s,s,s,s)},
kD(a){var s=null
return this.aN(s,a,s,s,s,s,s,s,s,s,s)},
kY(a){var s=null
return this.aN(s,s,s,s,s,s,s,a,s,s,s)},
kC(a){var s=null
return this.aN(a,s,s,s,s,s,s,s,s,s,s)},
kJ(a){var s=null
return this.aN(s,s,s,a,s,s,s,s,s,s,s)},
B(){var s=this
return A.J(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.oa.prototype={
$1$2(a,b,c){var s
A.zT(c,t.Ct,"T","call")
c.i("n<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.a2("invalid gameplay setting: "+a,null,null))
return B.a.aV(b,new A.ob(s,c),new A.oc(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:176}
A.ob.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.oc.prototype={
$0(){return A.i(A.a2("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cv.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dW.prototype={
b2(a,b,c,d,e,f,g,h,i){var s=this,r=f==null?s.b:f,q=g==null?s.c:g,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=i==null?s.r:i,l=e==null?s.w:e,k=b==null?s.x:b,j=h==null?s.y:h
return new A.dW(s.a,r,q,p,o,n,m,l,k,j)},
du(a){var s=null
return this.b2(a,s,s,s,s,s,s,s,s)},
fB(a){var s=null
return this.b2(s,s,a,s,s,s,s,s,s)},
fC(a){var s=null
return this.b2(s,s,s,s,s,a,s,s,s)},
kW(a){var s=null
return this.b2(s,s,s,s,s,s,a,s,s)},
kK(a){var s=null
return this.b2(s,s,s,a,s,s,s,s,s)},
l3(a){var s=null
return this.b2(s,s,s,s,s,s,s,s,a)},
kS(a){var s=null
return this.b2(s,s,s,s,a,s,s,s,s)},
kG(a){var s=null
return this.b2(s,a,s,s,s,s,s,s,s)},
l_(a){var s=null
return this.b2(s,s,s,s,s,s,s,a,s)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.j6,q))throw A.b(A.a2("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.iq,q))throw A.b(A.a2("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.jb,q))throw A.b(A.a2("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.j3,q))throw A.b(A.a2("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.q(B.jd,q))throw A.b(A.a2("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.q(B.ja,q))throw A.b(A.a2("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.q(B.jc,q))throw A.b(A.a2("unsupported graphics shadow quality: "+q,r,r))},
B(){var s=this
return A.J(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y],t.N,t.K)}}
A.om.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:36}
A.on.prototype={
$0(){return A.i(B.fA)},
$S:6}
A.oo.prototype={
B(){return A.J(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.og.prototype={}
A.oh.prototype={}
A.hC.prototype={
i6(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.a(l.appendChild(A.z(a,"h1","journal-title","Graphics")))
A.a(l.appendChild(A.z(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.z(a,"div","settings-grid",n)
r=t.N
o.b8(a,s,"preset","quality preset",A.J(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.b8(a,s,"renderScale","render scale",A.J(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.b8(a,s,"frameTarget","frame target",A.J(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.b8(a,s,"antialiasing","anti-aliasing",A.J(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.b8(a,s,"textureQuality","texture quality",A.J(["high","High","medium","Medium","low","Low"],r,r))
o.b8(a,s,"outputEncoding","output encoding",A.J(["srgb","sRGB display","linear","Linear light"],r,r))
o.b8(a,s,"diagnosticLevel","renderer diagnostics",A.J(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
o.b8(a,s,"shadowQuality","shadow allocation",A.J(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.z(a,"label","setting-toggle",n)
r=A.a(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.U(new A.ok(o)))
r=o.x
r.toString
A.a(q.appendChild(r))
A.a(q.appendChild(A.z(a,"span",n,"Dynamic resolution")))
A.a(s.appendChild(q))
A.a(l.appendChild(s))
r=A.z(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.a(l.appendChild(r))
p=A.z(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.U(new A.ol(o)))
A.a(l.appendChild(p))},
b8(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.F(e,A.o(e).i("F<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.oj(this,r,c)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.w.k(0,c,r)},
eQ(a){var s
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
r=s.h(0,"textureQuality")
if(r!=null)r.value=a.r
r=s.h(0,"outputEncoding")
if(r!=null)r.value=a.w
r=s.h(0,"diagnosticLevel")
if(r!=null)r.value=a.x
s=s.h(0,"shadowQuality")
if(s!=null)s.value=a.y
s=q.x
if(s!=null)s.checked=a.d
s=q.y
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.W(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
sdL(a){this.f=t.CA.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.ok.prototype={
$1(a){var s=this.a
s.eQ(s.z.fB(A.P(s.x.checked)))},
$S:1}
A.ol.prototype={
$1(a){var s=this.a,r=s.r
if(r!=null)r.$0()
else s.a6()},
$S:1}
A.oj.prototype={
$1(a){var s,r=A.r(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.z.fC(B.a.af(B.cR,new A.oi(r)))
break A}if("renderScale"===p){s=q.z.kW(r)
break A}if("frameTarget"===p){s=q.z.kK(r)
break A}if("antialiasing"===p){s=q.z.du(r)
break A}if("textureQuality"===p){s=q.z.l3(r)
break A}if("outputEncoding"===p){s=q.z.kS(r)
break A}if("diagnosticLevel"===p){s=q.z.kG(r)
break A}if("shadowQuality"===p){s=q.z.l_(r)
break A}s=q.z
break A}q.eQ(s)},
$S:1}
A.oi.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:36}
A.je.prototype={
v(){return"ActiveGuiPanel."+this.b}}
A.ca.prototype={}
A.op.prototype={
hh(a,b,c){if(c)return B.iG
if(b&&a!=null)return A.c([new A.ca("E","Examine "+a,!0),new A.ca("TAB","Journal",!1),new A.ca("CAPS","Shader Lab",!1)],t.sa)
return B.jo}}
A.oq.prototype={
i7(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.a(p.appendChild(A.z(s,"h1","journal-title","house notes")))
A.a(p.appendChild(A.z(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.a(p.appendChild(A.z(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.z(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.U(new A.or(this)))
A.a(p.appendChild(r))}}
A.or.prototype={
$1(a){return this.a.a6()},
$S:2}
A.p1.prototype={
bH(){var s,r=this
r.hW()
s=r.r.a-1
if(s<1)s=1
r.CW=r.ev(r.CW,s)
r.jz()
r.f2()},
iu(){var s,r=this,q=r.a,p=A.z(q,"div","page-turn",null),o=A.z(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.U(new A.p2(r)))
s=A.z(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.U(new A.p3(r)))
q=A.z(q,"span","right-day-label",null)
r.Q!==$&&A.aX()
r.Q=q
A.a(p.appendChild(o))
A.a(p.appendChild(q))
A.a(p.appendChild(s))
return p},
fj(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.ev(s.CW+a,r)
s.f2()},
ev(a,b){if(a<1)return 1
if(a>b)return b
return a},
jz(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.p()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.p()
s.textContent=""
for(s=j.w.e4(),r=s.length,q=A.tP,p=j.a,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
m=B.a.gX(n.c).p(0)
l=A.a(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.p4(j,n,l)
if(typeof m=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.he()]=m
l.addEventListener("click",k)
A.a(i.appendChild(l))}},
f2(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.p()
s=t.r
r=A.c([],s)
for(q=j.f,p=q.b,o=A.o(p).i("af<2>"),n=new A.af(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.P(r,new A.p5())
j.f1(i,r)
i=j.Q
i===$&&A.p()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.p()
s=A.c([],s)
for(r=new A.af(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.P(s,new A.p6())
j.f1(i,s)
k=B.c.D(q.f/4,0,1)
i=j.as
i===$&&A.p()
A.a(i.style).setProperty("width",B.c.aK(k*100,1)+"%")},
f1(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.a(a.appendChild(this.iV(b[r])))},
iV(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.z(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.a(k.createElement("div"))
n.className=q
n.textContent=o
A.a(n.style).setProperty("--shake",B.c.p(p.b))
A.a(j.appendChild(n))}m=a.r
if(m!=null){l=this.j9(m,!1)
l.className=A.r(l.className)+" margin"
A.a(j.appendChild(l))}return j},
j9(a,b){var s=b?"hand-line struck":"hand-line",r=A.z(this.a,"div",s,a.p(0))
A.a(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.p2.prototype={
$1(a){return this.a.fj(-1)},
$S:2}
A.p3.prototype={
$1(a){return this.a.fj(1)},
$S:2}
A.p4.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.p5.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:11}
A.p6.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:11}
A.cX.prototype={}
A.fk.prototype={}
A.pL.prototype={
gmJ(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.H(s,0,B.c.aw(B.c.D(r*q,0,r)))}}
A.hX.prototype={
aS(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.a(s.style).setProperty("--panel-fade","0.25s")
A.a(A.E(this.a.body).appendChild(s))},
bH(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.r(n.className),"open"))return
s=$.pM
if(s!=null&&s!==o)s.a6()
$.pM=o
r=o.a
o.d=A.E(r.activeElement)
A.oZ(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.U(o.gjr())
o.e=q
r.addEventListener("keydown",q)
p=A.zf(n)
if(p.length!==0)B.a.gU(p).focus()
else n.focus()},
a6(){var s,r,q=this,p=q.b
if(!B.b.q(A.r(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pM===q)$.pM=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
fX(a){},
js(a){A.a(a)
this.fX(a)
if(A.P(a.defaultPrevented))return
if(A.r(a.code)==="Escape"){a.preventDefault()
this.a6()
return}if(A.r(a.code)==="Tab")this.jQ(a)},
jQ(a){var s,r=A.zf(this.b)
if(r.length===0)return
s=A.E(this.a.activeElement)
if(A.P(a.shiftKey)){if(s===B.a.gU(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gX(r).focus()}}else if(s===B.a.gX(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gU(r).focus()}},
saZ(a){this.c=t.Z.a(a)}}
A.bj.prototype={
v(){return"PauseReason."+this.b}}
A.ci.prototype={
v(){return"PausePage."+this.b}}
A.e4.prototype={
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
gM(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e3.prototype={
gfu(){var s=this.a
return s.length===1&&B.a.gU(s).a===B.bo},
B(){var s=A.m(t.N,t.X),r=this.a,q=A.C(r),p=q.i("M<1,W<f,N?>>")
r=A.K(new A.M(r,q.i("W<f,N?>(1)").a(new A.pR()),p),p.i("a4.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.C(r)
p=q.i("M<1,f>")
r=A.K(new A.M(r,q.i("f(1)").a(new A.pS()),p),p.i("a4.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.pR.prototype={
$1(a){return t.oP.a(a).B()},
$S:119}
A.pS.prototype={
$1(a){return t.wJ.a(a).b},
$S:120}
A.c_.prototype={}
A.pQ.prototype={
fY(a){var s,r=this
if(r.a.gfu())return new A.c_(B.a0,r.a,null)
s=r.a
s=new A.e3(B.j5,s.b,a)
r.a=s
return new A.c_(B.dk,s,"pause.resume")},
kf(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gX(p)
q=r.a.a
q=B.a.aR(q,0,q.length-1)
p=r.a
p=new A.e3(q,p.b,p.c)
r.a=p
return new A.c_(B.dl,p,s.c)}if(q.gfu()&&r.a.b.length===0)return r.cf()
return new A.c_(B.a0,r.a,null)},
cf(){var s=this.a
if(s.a.length===0)return new A.c_(B.a0,s,null)
if(s.b.length!==0)return new A.c_(B.a0,s,null)
this.a=B.bn
return new A.c_(B.dm,B.bn,s.c)},
mf(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c_(B.a0,q.a,null)
s=q.a
r=A.K(s.b,t.wJ)
r.push(a)
s=new A.e3(s.a,r,q.a.c)
q.a=s
return new A.c_(B.dk,s,null)},
lc(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c_(B.a0,o.a,null)
s=o.a
r=s.b
q=A.C(r)
p=q.i("G<1>")
r=A.K(new A.G(r,q.i("l(1)").a(new A.pT(a)),p),p.i("n.E"))
q=o.a.c
r=new A.e3(s.a,r,q)
o.a=r
return new A.c_(B.kq,r,q)},
iO(a){var s
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
A.pT.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:121}
A.cD.prototype={
v(){return"PauseRootAction."+this.b}}
A.pU.prototype={
bj(a,b,c,d){var s=B.jF.h(0,c)
s.toString
A.a(b.appendChild(A.dQ(a,new A.b3(s,B.G,d,null,B.p),new A.pV(this,c),null)))},
sma(a){this.f=t.Z.a(a)},
smc(a){this.r=t.Z.a(a)},
slX(a){this.w=t.Z.a(a)},
smb(a){this.x=t.Z.a(a)},
sm2(a){this.y=t.Z.a(a)},
slY(a){this.z=t.Z.a(a)},
sb4(a){this.Q=t.Z.a(a)}}
A.pV.prototype={
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
A.bN.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.q6.prototype={
hD(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bD("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qw.prototype={
i9(a){var s,r,q,p,o,n=this.b
n.className=A.r(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.a(n.appendChild(A.n2(a,B.ef,1)))
A.a(n.appendChild(A.z(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.z(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.iH[r]
p=B.d3.h(0,q)
p.toString
o=B.d2.h(0,q)
o.toString
A.a(s.appendChild(A.dQ(a,new A.b3(o,B.G,p,p+" settings",B.p),new A.qx(this,q),null)))}A.a(s.appendChild(A.dQ(a,B.ee,new A.qy(this),null)))
A.a(n.appendChild(s))},
slT(a){this.f=t.hQ.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.qx.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qy.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fN.prototype={
ia(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.y(B.d3.h(0,d))+" settings",a=h.b
a.className=A.r(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.a(a.appendChild(A.n2(a0,new A.b3("settings."+(s==null?f:s)+".heading",B.ar,b,g,B.p),2)))
A.a(a.appendChild(A.z(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.z(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.qX(h)),p=B.a.gu(B.D),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.a(r.appendChild(h.j8(a0,m,l,n==null?1:n,k)))}A.a(a.appendChild(r))
j=A.z(a0,"div",e,g)
for(s=s.a(new A.qY(h)),q=B.a.gu(B.D),o=new A.S(q,s,o);o.m();)A.a(j.appendChild(h.jP(a0,q.gn())))
A.a(a.appendChild(j))
if(d===B.H)A.a(a.appendChild(h.iq(a0)))
if(d===B.I)A.a(a.appendChild(h.ip(a0)))
if(d===B.a_)A.a(a.appendChild(h.ir(a0)))
i=A.z(a0,"div",e,g)
for(s=t.pz.a(h.gj2()),q=B.a.gu(B.j7),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.a(i.appendChild(A.dQ(a0,new A.b3("settings."+o+".reset."+n,B.G,"reset "+n,"restore "+n+" settings to defaults",B.p),new A.qZ(h,p),g)))}s=c?g:d.b
A.a(i.appendChild(A.dQ(a0,new A.b3("settings."+(s==null?f:s)+".reset.all",B.G,"reset all settings","restore all settings to defaults",B.em),new A.r_(h),g)))
A.a(a.appendChild(i))
d=c?g:d.b
A.a(a.appendChild(A.dQ(a0,new A.b3("settings."+(d==null?f:d)+".back",B.G,"return","return to settings categories",B.p),new A.r0(h),g)))},
ip(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.z(a,"div","settings-grid",j),f=k.d1(a,g,"reducedMotion","reduced motion (system default)"),e=k.d1(a,g,i,"photosensitivity-safe effects (system default)"),d=k.d1(a,g,"captions","non-speech captions"),c=A.z(a,"label",h,j)
A.a(c.appendChild(A.z(a,"span",j,"UI scale")))
s=A.a(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.U(new A.qP(k,s)))
A.a(c.appendChild(s))
A.a(g.appendChild(c))
r=A.z(a,"label",h,j)
A.a(r.appendChild(A.z(a,"span",j,"screen-reader verbosity")))
q=A.a(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bf[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(q.appendChild(n))}q.addEventListener("change",A.U(new A.qQ(k,q)))
A.a(r.appendChild(q))
A.a(g.appendChild(r))
l=A.z(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.U(new A.qR(k)))
A.a(g.appendChild(l))
k.ok.I(0,A.J(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
d1(a,b,c,d){var s=A.z(a,"label","setting-toggle",null),r=A.a(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.U(new A.qz(this,r,c)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,"span",null,d)))
A.a(b.appendChild(s))
return r},
e7(a){var s,r
this.k4=a
s=this.ok
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.c.p(r==null?1:r)}s=this.p1.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a9:r).b}},
ir(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.z(a,"div","settings-grid",l)
m.b7(a,g,"interactionMode","interaction mode",B.be,t.bK)
m.b7(a,g,"promptDensity","prompt density",B.bi,t.dn)
m.b7(a,g,"textPacing","text pacing",B.bg,t.j_)
m.b7(a,g,"journalLayout","journal layout",B.ba,t.gm)
m.b7(a,g,k,k,B.b4,t.aJ)
m.b7(a,g,"saveFeedback","save feedback",B.bb,t.mx)
m.b7(a,g,"focusLossBehavior","when the window loses focus",B.aA,t.x)
m.b7(a,g,"clockFormat","clock format",B.b7,t.vS)
s=A.z(a,j,i,l)
r=A.a(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.U(new A.qS(m,r)))
A.a(s.appendChild(r))
A.a(s.appendChild(A.z(a,h,l,"contextual reminders")))
A.a(g.appendChild(s))
m.id=r
q=A.z(a,j,i,l)
p=A.a(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.U(new A.qT(m,p)))
A.a(q.appendChild(p))
A.a(q.appendChild(A.z(a,h,l,"show daily objective")))
A.a(g.appendChild(q))
m.k1=p
o=A.z(a,j,i,l)
n=A.a(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.U(new A.qU(m,n)))
A.a(o.appendChild(n))
A.a(o.appendChild(A.z(a,h,l,"story mode (visitors and narrative time)")))
A.a(g.appendChild(o))
m.k2=n
return g},
b7(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.zT(f,t.Ct,"T","_addGameplaySelect")
f.i("D<0>").a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.a(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.a(r.appendChild(n))}r.addEventListener("change",A.U(new A.qN(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.go.k(0,c,r)},
hp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
if(s!=null)s.checked=a.z
s=f.k2
if(s!=null)s.checked=a.Q},
iq(a){var s,r,q=this,p=A.z(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bd[s].b
n.k(0,r,r)}q.cn(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.b9[s].b
n.k(0,r,r)}q.cn(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.b8[s].b
n.k(0,r,r)}q.cn(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.b6[s].b
o.k(0,n,n)}q.cn(a,p,"ducking","voice intelligibility",o)
return p},
cn(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.z(a,"label","setting-row",null)
A.a(s.appendChild(A.z(a,"span",null,d)))
r=A.a(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.F(e,A.o(e).i("F<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.a(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.a(r.appendChild(o))}r.addEventListener("change",A.U(new A.qE(this,c,r)))
A.a(s.appendChild(r))
A.a(b.appendChild(s))
this.p3.k(0,c,r)},
ho(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.F(s,A.o(s).i("F<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
eR(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.Z===r){s=a.c===B.aG
break A}if(B.I===r){s=a.c===B.a4
break A}if(B.H===r){s=a.c===B.F
break A}s=!1
break A}return s},
j3(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.Z===s){r=a===B.aG
break A}if(B.I===s){r=a===B.a4
break A}if(B.H===s){r=a===B.F
break A}r=!1
break A}return r},
jP(a,b){var s=this,r=A.z(a,"label","setting-toggle",null),q=A.a(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.U(new A.qW(s,b,q)))
A.a(r.appendChild(q))
A.a(r.appendChild(A.z(a,"span",null,b.b)))
return r},
j8(a,b,c,d,e){var s,r,q=this,p=A.z(a,"label","setting-row",null),o=A.z(a,"span",null,c),n=A.a(a.createElement("input"))
n.type="range"
n.min=A.y(e)
n.max=A.y(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.z(a,"output",null,"100%")
n.addEventListener("input",A.U(new A.qV(q,n,r,b)))
A.a(p.appendChild(o))
A.a(p.appendChild(n))
A.a(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aQ(e,d))
return p},
e9(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kG
r=B.c.D(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aJ(r*100)+"%"},
sm4(a){this.r=t.DI.a(a)},
sm6(a){this.w=t.xl.a(a)},
sm5(a){this.x=t.xl.a(a)},
sm0(a){this.y=t.DI.a(a)},
sm3(a){this.z=t.xl.a(a)},
sme(a){this.Q=t.xl.a(a)},
sm9(a){this.as=t.Ci.a(a)},
sm8(a){this.at=t.Z.a(a)},
sb4(a){this.ax=t.Z.a(a)},
slS(a){this.ay=t.kC.a(a)},
sm1(a){this.ch=t.hq.a(a)},
slR(a){this.CW=t.Cv.a(a)},
sm7(a){this.cx=t.Z.a(a)}}
A.qX.prototype={
$1(a){t.gl.a(a)
return a.d===B.P&&this.a.eR(a)},
$S:19}
A.qY.prototype={
$1(a){t.gl.a(a)
return a.d===B.ah&&this.a.eR(a)},
$S:19}
A.qZ.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.r_.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.r0.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a6()},
$S:0}
A.qP.prototype={
$1(a){var s=this.a,r=s.k4,q=A.eI(A.r(this.b.value))
r=r.l4(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qQ.prototype={
$1(a){var s=this.a,r=s.k4.kZ(B.a.af(B.bf,new A.qO(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.qO.prototype={
$1(a){return t.mq.a(a).b===A.r(this.a.value)},
$S:32}
A.qR.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.qz.prototype={
$1(a){var s,r=A.P(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.kV(r)
break A}if("photosensitivitySafe"===p){s=q.k4.kT(r)
break A}if("captions"===p){s=q.k4.kB(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.qS.prototype={
$1(a){var s=this.a,r=s.k3.kE(A.P(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qT.prototype={
$1(a){var s=this.a,r=s.k3.l0(A.P(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qU.prototype={
$1(a){var s=this.a,r=s.k3.l1(A.P(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.qN.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.kN(B.a.af(B.be,new A.qF(r.c)))
break A}if("promptDensity"===p){s=q.k3.kU(B.a.af(B.bi,new A.qG(r.c)))
break A}if("textPacing"===p){s=q.k3.l2(B.a.af(B.bg,new A.qH(r.c)))
break A}if("journalLayout"===p){s=q.k3.kQ(B.a.af(B.ba,new A.qI(r.c)))
break A}if("confirmations"===p){s=q.k3.kD(B.a.af(B.b4,new A.qJ(r.c)))
break A}if("saveFeedback"===p){s=q.k3.kY(B.a.af(B.bb,new A.qK(r.c)))
break A}if("clockFormat"===p){s=q.k3.kC(B.a.af(B.b7,new A.qL(r.c)))
break A}s=q.k3.kJ(B.a.af(B.aA,new A.qM(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.qF.prototype={
$1(a){return t.bK.a(a).b===A.r(this.a.value)},
$S:124}
A.qG.prototype={
$1(a){return t.dn.a(a).b===A.r(this.a.value)},
$S:125}
A.qH.prototype={
$1(a){return t.j_.a(a).b===A.r(this.a.value)},
$S:126}
A.qI.prototype={
$1(a){return t.gm.a(a).b===A.r(this.a.value)},
$S:127}
A.qJ.prototype={
$1(a){return t.aJ.a(a).b===A.r(this.a.value)},
$S:128}
A.qK.prototype={
$1(a){return t.mx.a(a).b===A.r(this.a.value)},
$S:129}
A.qL.prototype={
$1(a){return t.vS.a(a).b===A.r(this.a.value)},
$S:130}
A.qM.prototype={
$1(a){return t.x.a(a).b===A.r(this.a.value)},
$S:38}
A.qE.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.kR(B.a.af(B.bd,new A.qA(r.c)))
break A}if("dynamicRange"===o){s=p.kI(B.a.af(B.b9,new A.qB(r.c)))
break A}if("reverb"===o){s=p.kX(B.a.af(B.b8,new A.qC(r.c)))
break A}s=p.kH(B.a.af(B.b6,new A.qD(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.qA.prototype={
$1(a){return t.xs.a(a).b===A.r(this.a.value)},
$S:132}
A.qB.prototype={
$1(a){return t.EL.a(a).b===A.r(this.a.value)},
$S:133}
A.qC.prototype={
$1(a){return t.gc.a(a).b===A.r(this.a.value)},
$S:134}
A.qD.prototype={
$1(a){return t.ul.a(a).b===A.r(this.a.value)},
$S:135}
A.qW.prototype={
$1(a){var s,r=this
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.P(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.P(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.P(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.P(r.c.checked))
break}},
$S:1}
A.qV.prototype={
$1(a){var s,r,q=this,p=A.eI(A.r(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.c.aJ(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.by.prototype={
v(){return"SettingCategory."+this.b}}
A.i7.prototype={
v(){return"SettingKind."+this.b}}
A.b_.prototype={
cR(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.a2(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.a2(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.br(a))throw A.b(A.a2(r.a+" must be boolean",q,q))
break}}}
A.r3.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:19}
A.r4.prototype={
$0(){return A.i(A.k("unknown setting: "+this.a))},
$S:6}
A.r1.prototype={
ib(a,b){var s,r=this.a
if(r!==1)throw A.b(A.w("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.r2(s.a).cR(s.b)}},
ci(a){var s=this.b.h(0,a)
return s==null?A.i(A.k("setting missing from profile: "+a)):s},
B(){return A.J(["version",this.a,"values",this.b],t.N,t.K)}}
A.r5.prototype={
mt(a){var s,r,q=A.fB(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dx(q,1)
this.jD(a)},
B(){return A.J(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
jD(a){var s,r,q=A.fB(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.D[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dx(q,1)}}
A.rd.prototype={
ic(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.a(i.appendChild(A.z(a,"h2","journal-title","Rest")))
A.a(i.appendChild(A.z(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.z(a,"div","entry-picker",null)
for(r=A.tP,q=0;q<2;++q){p=B.cQ[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cW[n]
l=A.a(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.re(this,p,m)
if(typeof k=="function")A.i(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.he()]=k
l.addEventListener("click",j)
A.a(s.appendChild(l))}}A.a(i.appendChild(s))},
smd(a){this.f=t.nf.a(a)}}
A.re.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a6()},
$S:1}
A.cs.prototype={}
A.mw.prototype={
mI(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.C(s)
q=new A.M(s,r.i("f(1)").a(new A.my()),r.i("M<1,f>")).bo(0)
r=this.b
r.L(0)
s=J.AQ(a,t.N)
p=s.$ti
r.I(0,new A.G(s,p.i("l(n.E)").a(q.gap(q)),p.i("G<n.E>")))},
lk(a,b){var s,r,q,p,o,n=A.c([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.my.prototype={
$1(a){return t.bC.a(a).a},
$S:136}
A.mx.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:137}
A.l3.prototype={
gbZ(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.d(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
lI(a){return this.c.q(0,t.L.a(a))},
dV(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a7(0,g.gkz())||!a.a.a7(0,new A.rK(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.eT(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aI){m=s.d
if(m<o.length){n=n===B.a7
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ad}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.d(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.N(l.f,new A.rL(s))
else k=!1
if(k)return!1
j=new A.l2(r,g,A.ai(o,t.AP),B.a7)
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
ft(a){var s=this.a,r=A.o(s).i("aa<1>"),q=r.i("G<n.E>")
s=A.K(new A.G(new A.aa(s,r),r.i("l(n.E)").a(new A.rF(a)),q),q.i("n.E"))
B.a.P(s,new A.rG())
return s},
bV(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mU
s=m.a.h(0,a)
if(s==null)return B.mV
r=B.d.a2(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bO:B.ao
o=p===B.ao&&m.x.q(0,q)&&s.R(B.bP)?B.bP:p
if(s.R(o))n=o
else n=s.R(B.ao)?B.ao:B.bO
r=s.h(0,n)
r.toString
m.r=new A.l2(a,n,A.ai(m.eT(a,n,r),t.AP),B.a7)
m.gbZ()
r=m.r
r.toString
return new A.l1(r)},
ku(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dV
if(n.d!==B.a7)return B.mS
n.e=a
s=a===B.ad
n.d=s?B.aI:B.am
r=this.f
q=s?B.dT:B.mA
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dC(q,o,p,a,null))
if(a===B.aw)B.a.l(r,new A.dC(B.mD,o,p,a,null))
if(s)this.f3(n)
return new A.l_(n)},
ka(){var s,r=this.r
if(r==null)return B.dV
s=r.d
if(s!==B.am&&s!==B.an)return B.mT
if(this.gbZ()!=null&&r.w==null)return new A.ba(new A.bm(B.a8,"The visitor is waiting for an answer."))
r.d=B.an
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aI
this.f3(r)
return new A.ij(r,!0)}return new A.ij(r,!1)},
kv(a){var s,r,q=this.r,p=this.gbZ(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.am&&o!==B.an}if(o)return B.mR
o=p.f
s=A.C(o)
r=A.bL(new A.G(o,s.i("l(1)").a(new A.rI(a)),s.i("G<1>")),t.Y)
if(r==null)return B.mW
q.w=r.a
return new A.l0(q,p,r)},
kw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.am&&s!==B.an}else s=!0
if(s)return i
r=h.gbm()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.cV
p=J.R(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aY(q,s,s)
m=c.jw(!0,!0,o,new A.rS(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aJ){B.a.l(this.f,new A.dC(B.mC,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fB(B.a.gX(j.c).a,s,s)
s.I(0,q)
p.k7(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dW)if(k===B.bQ){s=n.b
s=s.gV(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dC(B.mB,o,p.b,i,l))}}return m},
f3(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
eT(a,b,c){var s,r
t.cf.a(c)
s=A.c([],t.Fi)
for(r=J.R(c);r.m();)s.push(this.ja(a,b,r.gn()))
return s},
ja(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.C(p)
s=A.bL(new A.G(p,r.i("l(1)").a(new A.rD(this)),r.i("G<1>")),t.aS)}return s==null?c:new A.c4(q,s.c,c.c)},
shS(a){this.x=t.Q.a(a)}}
A.rK.prototype={
$1(a){var s=this.a.a
return new A.aa(s,A.o(s).i("aa<1>")).N(0,new A.rJ(A.r(a)))},
$S:3}
A.rJ.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:16}
A.rL.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:14}
A.rF.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:16}
A.rG.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:139}
A.rI.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.rH.prototype={
$0(){return A.c([],t.jV)},
$S:140}
A.rD.prototype={
$1(a){return t.aS.a(a).d.gJ().a7(0,new A.rC(this.a))},
$S:141}
A.rC.prototype={
$1(a){t.q.a(a)
return this.a.y.aX(a.a,a.b)},
$S:142}
A.rE.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:143}
A.l4.prototype={}
A.lz.prototype={}
A.v5.prototype={
$1(a){return B.b.T(A.r(a),"off.")},
$S:3}
A.bK.prototype={
v(){return"DoorChoice."+this.b}}
A.c2.prototype={
v(){return"VisitPhase."+this.b}}
A.c3.prototype={
v(){return"VisitTier."+this.b}}
A.eb.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dC.prototype={
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
A.bm.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.bm&&b.a===this.a&&b.b===this.b},
gM(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c4.prototype={
a4(a,b){if(b==null)return!1
return b instanceof A.c4&&b.a===this.a&&b.b===this.b},
gM(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bQ.prototype={
a4(a,b){var s=this
if(b==null)return!1
return b instanceof A.bQ&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gM(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.J(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.l5.prototype={
B(){var s,r,q,p=this.a
p=A.K(p,A.o(p).c)
B.a.Y(p)
s=this.b
r=A.o(s)
q=r.i("di<1,W<f,@>>")
s=A.K(new A.di(s,r.i("W<f,@>(1)").a(new A.rB()),q),q.i("n.E"))
r=this.c
return A.J(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rB.prototype={
$1(a){return t.L.a(a).B()},
$S:144}
A.jf.prototype={
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
A.mt.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:145}
A.mu.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:146}
A.mv.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:147}
A.l2.prototype={
gbm(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.rM.prototype={}
A.ba.prototype={}
A.l1.prototype={}
A.l_.prototype={}
A.ij.prototype={}
A.l0.prototype={}
A.fV.prototype={}
A.lC.prototype={
gbA(){var s,r=this.y1
if(r){s=this.w
s===$&&A.p()
s=s.a.b}else s="safe"
return A.Cq("pixeldart",r?this.gko():B.jj,!1,null,s)},
gko(){var s,r
if(!this.y1)return B.o
s=this.r
s===$&&A.p()
r=this.w
r===$&&A.p()
return B.ex.kp(s,r)},
glw(){var s="shadowCaster",r=this.RG
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.fZ(s).a+";shadowTriangles="+r.fZ(s).b+";frameMs="+B.c.aK(this.rx,3)},
glv(){var s=this.RG
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.rx<=100},
c5(){var s,r,q,p,o,n,m,l=this,k=A.CO(l.a)
l.d=k
k=k.h4()
l.r=k
k=B.c4.hn(k)
l.w=k
q=l.b
p=l.c
s=new A.kP(q,p,q,p)
o=A.yf(l.d)
l.e=o
try{o.fS(l.iJ(k,q,p),s)}catch(n){r=A.ao(n)
k=l.w
if(k===B.af)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.y(r)
l.w=B.af
k=A.yf(l.d)
k.fS(B.l7,s)
l.e=k}k=l.e
k.bQ()
m=A.Cp(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.c1=l.b
l.c2=l.c
l.eE()
l.lr=A.C6(!0,!0,!0)
l.y1=!0},
bg(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.w("Pixeldart surface size must be positive",null))
if(!r.y1){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.c3!==a||r.c4!==b)r.c4=r.c3=null
s=r.e
s===$&&A.p()
s.bQ()
new A.kP(a,b,a,b).C()
if(r.y2==null)r.y2=r.bP()},
bP(){var s=0,r=A.bG(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$bP=A.bI(function(a,b){if(a===1){p.push(b)
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
return A.aB(A.uw(i,B.c7.fz("auto","full","srgb",h,"auto","profile",A.e(l),g)),$async$bP)
case 8:n.c1=m
n.c2=l
n.c4=n.c3=null
A.uM()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.ao(e)
i=n.w
i===$&&A.p()
n.x=i.a.b+" surface reconfigure failed: "+A.y(k)
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
case 5:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$bP,r)},
eB(a,b,c,d,e,f,g,h){return B.c7.fz(d,e,f,a,g,h,c,b)},
iJ(a,b,c){return this.eB(a,b,c,"auto","full","srgb","auto","profile")},
eE(){var s,r,q,p=this.w
p===$&&A.p()
s=p.a
A:{p=B.a1===s
if(p){r=7
break A}if(B.O===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.O===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.i(A.w("hysteresisThreshold must be finite and >= 0",null))
this.fx=new A.pd(r,p,A.a_(q),A.a_(q),A.m(q,t.i))},
cE(a){var s=0,r=A.bG(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$cE=A.bI(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.y1){s=1
break}switch(a.b.a){case 0:i=B.dq
break
case 2:i=B.af
break
case 1:i=B.dp
break
case 3:i=n.w
i===$&&A.p()
break
default:i=null}m=i
i=n.w
i===$&&A.p()
l=i
k=n.eB(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.p()
s=7
return A.aB(A.uw(i,t.lg.a(k)),$async$cE)
case 7:n.w=t.xK.a(m)
n.eE()
n.c1=n.b
n.c2=n.c
n.x=null
A.uM()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.ao(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.y(j)
A.uM()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$cE,r)},
ke(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6="wall-plaster",b7="grime",b8="renderer is not initialized",b9="resource library is disposed"
if(!b4.y1||b4.Q.length!==0)return
b4.fG=c0
s=b4.k1
r=b4.e
r===$&&A.p()
s.k(0,b6,r.gb6().dR(8,"texture:wall-plaster",!0,256,B.aZ,256))
s.k(0,b7,b4.e.gb6().dR(8,"texture:grime",!0,512,B.aZ,512))
for(q=0;q<2;++q){p=B.jp[q]
r=b4.e.w
if(r==null)r=A.i(A.k(b8))
s.k(0,p,r.dR(8,"texture:"+p,!0,256,B.aZ,256))}b4.dl()
b4.cz()
b4.p2=b4.jA(A.pq(s.h(0,b6),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=c0.b,o=r.length,n=b4.k4,m=b4.k3,l=t.N,k=b4.p1,j=t.pw,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){i=r[q]
h=A.m(l,j)
for(g=A.J(["wall",i.x,"floor",i.y,"ceiling",i.z],l,l),g=new A.cz(g,g.r,g.e,A.o(g).i("cz<1,2>")),f=i.a,e="quarantine-house-"+f+"-";g.m();){d=g.d
c=d.b
b=B.bj.h(0,c)
if(b==null)A.i(A.k("Unknown house surface material: "+c))
c=b.c
a=d.a
a0=b.a
c=A.pq(s.h(0,b.b),!1,e+a+"-"+a0,!0,b.d,(c&255)/255,(c>>>8&255)/255,(c>>>16&255)/255,1,1)
a0=b4.e.w
if(a0==null)a0=A.i(A.k(b8))
if(a0.x)A.i(A.k(b9))
c.C()
a1=a0.b.a.aA(c,b5)
a0.r.l(0,a1)
k.k(0,c.a,c)
h.k(0,a,a1)}n.k(0,f,h)
g=h.h(0,"wall")
g.toString
m.k(0,f,g)}for(o=b4.ok,q=0;q<7;++q){a2=B.iM[q]
n=a2==="service"?s.h(0,b7):s.h(0,b6)
l=b4.dh(a2)
j=b4.dh(a2)
l=A.pq(n,!1,"quarantine-inventory-"+a2,!0,1,b4.dh(a2).c,j.b,l.a,1,1)
j=b4.e.w
n=j==null?A.i(A.k(b8)):j
if(n.x)A.i(A.k(b9))
l.C()
a1=n.b.a.aA(l,b5)
n.r.l(0,a1)
k.k(0,l.a,l)
o.k(0,a2,a1)}b4.cz()
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.u)(r),++q)b4.j4(c0,r[q])
b4.jx(c0)
$.A.j().setAttribute("data-renderer-house-model-scale",B.c.aK(2.25,2))
for(o=r.length,q=0;q<o;++q)for(n=r[q].e.length,a3=0;a3<n;++a3)continue
for(r=c0.c,o=r.length,n=b4.fr,l=b4.y,j=c0.e,q=0;g=r.length,q<g;r.length===o||(0,A.u)(r),++q){a4=r[q]
if(a4.at==null)continue
i=j.h(0,a4.b)
if(i==null)continue
a5=b4.eH(c0,i,a4)
g=b4.e.w
if(g==null)g=A.i(A.k(b8))
f=a4.a
if(g.x)A.i(A.k(b9))
e=g.a
a5.C()
a1=e.b.aA(a5,"door-leaf:"+f)
c=a1.a
e.c.k(0,c,e.bc(a5))
g.f.l(0,a1)
B.a.l(l,a1)
g=i.a
e=m.h(0,g)
if(e==null){e=b4.p2
e.toString}a6=new A.bx(a1,e,B.u,0,B.T,B.ab,!0,!0,0,b5)
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
A.b1(new A.M(c,a0.i("I(1)").a(a.gaz()),a0.i("M<1,I>")))
n.k(0,f,new A.iD(f,g,e.b.c_(a6),a1,a6))}for(o=b4.go,n=t.Bs,q=0;q<r.length;r.length===g||(0,A.u)(r),++q){a4=r[q]
if(a4.at!=null)continue
i=j.h(0,a4.b)
if(i==null)continue
f=i.a
e=b4.jt(i,a4.aG(f),a4.ag(f),a4.ag(f)+a4.w,0,a4.x,5915445)
c=n.a(new A.tu(a4))
a=b4.e.w
if(a==null)a=A.i(A.k(b8))
if(a.x)A.i(A.k(b9))
a0=a.a
e.C()
a1=a0.b.aA(e,"decoration:"+f)
a7=a1.a
a0.c.k(0,a7,a0.bc(e))
a.f.l(0,a1)
B.a.l(l,a1)
a=m.h(0,f)
if(a==null){e=b4.p2
e.toString}else e=a
a8=new A.bx(a1,e,B.u,0,B.T,B.ab,!0,!0,0,b5)
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
A.b1(new A.M(a,a7.i("I(1)").a(a0.gaz()),a7.i("M<1,I>")))
B.a.l(o,new A.lB(f,e.b.c_(a8),a8,c))}for(r=A.Gj(A.FG(c0)),o=r.length,n=b4.dx,m=b4.db,j=b4.cy,g=b4.k2,f=b4.dy,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){a9=r[q]
e=a9.b
b0=e===4?b7:b6
b=f.h(0,e)
if(b==null){c=s.h(0,b0)
a=b4.df(e)
a0=b4.df(e)
a=A.pq(c,!0,"quarantine-house-exterior-slot-"+e,!0,1,b4.df(e).c,a0.b,a.a,1,1)
a0=b4.e.w
c=a0==null?A.i(A.k(b8)):a0
if(c.x)A.i(A.k(b9))
a.C()
a1=c.b.a.aA(a,b5)
c.r.l(0,a1)
k.k(0,a.a,a)
f.k(0,e,a1)
b=a1}c=b4.e.w
if(c==null)c=A.i(A.k(b8))
a=a9.c
a0=a9.a
e=""+e
if(c.x)A.i(A.k(b9))
a7=c.a
a.C()
a1=a7.b.aA(a,"exterior:"+a0+":slot-"+e)
b1=a1.a
a7.c.k(0,b1,a7.bc(a))
c.f.l(0,a1)
B.a.l(l,a1)
b2=a0+":"+e
g.k(0,b2,b0)
if(!B.ag.q(0,a0))A.i(A.w("unknown exterior cell: "+a0,b5))
b3=new A.bx(a1,b,B.u,-1,B.T,B.ab,B.lw.q(0,a0),!0,0,b5)
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
A.b1(new A.M(c,a0.i("I(1)").a(a.gaz()),a0.i("M<1,I>")))
j.k(0,b2,e.b.c_(b3))}},
hq(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.id=A.ai(a8.e,t.fl)
if(!a5.y1)return
for(s=a5.ch,r=new A.F(s,A.o(s).i("F<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.p()
o.b.b5(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.p()
p=p.w
if(p==null)p=A.i(A.k(a6))
o=n.a
if(p.x)A.i(A.k(a7))
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
if(i==null)i=A.i(A.k(a6))
h=a5.j7(f,j,m)
e=j.a
if(i.x)A.i(A.k(a7))
d=i.a
h.C()
c=d.b.aA(h,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bc(h))
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
i=new A.kS(new A.I(a3.a+h.a*m,a3.b+h.b*m,a3.c+h.c*m),new A.ky(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bx(c,a2,i,-1,B.T,B.ab,d!=="micro",!0,0,null)
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
A.b1(new A.M(h,b.i("I(1)").a(i.gaz()),b.i("M<1,I>")))
s.k(0,e,d.b.c_(n))}$.A.j().setAttribute("data-renderer-inventory-items",""+s.a)},
hB(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aN([s],r)
for(p=c1.aI(s),o=J.R(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.cd(s)
if(n.ax)n=!n.ay
else n=!1
if(n&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.F(b9,A.o(b9).i("F<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.c([],p)
for(g=J.aF(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.d(i,f)
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
A.b1(new A.M(a,a0.i("I(1)").a(b.gaz()),a0.i("M<1,I>")))
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
if(h.length!==0)o.k(0,n,B.a.gU(h))}for(b9=b8.go,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.u)(b9),++a3){a4=b9[a3]
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
A.b1(new A.M(i,g.i("I(1)").a(n.gaz()),g.i("M<1,I>")))
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
s=A.K(new A.aa(b9,s),s.i("n.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.u)(s),++a3){a5=b9.h(0,s[a3])
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
A.b1(new A.M(g,d.i("I(1)").a(i.gaz()),d.i("M<1,I>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.Z(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.d(o,n)
o[n].sb3(e)
b9.k(0,a5.a,a5.kF(e))}for(b9=b8.id,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
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
A.b1(new A.M(d,c.i("I(1)").a(g.gaz()),c.i("M<1,I>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.Z(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.d(n,c)
n[c].sb3(i)}a9=new A.jK().kt(c2)
b9=$.A.j()
s=A.K(a9,A.o(a9).c)
B.a.Y(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.W(s,","))
b9=b8.dx
r=new A.jK().fI(new A.tv(b8),new A.aa(b9,A.o(b9).i("aa<1>")),a9,r)
b0=A.ka(r,r.$ti.i("n.E"))
b9=b8.db
s=A.o(b9).i("aa<1>")
s=A.K(new A.aa(b9,s),s.i("n.E"))
r=s.length
p=b8.cy
b1=0
b2=0
b3=0
a3=0
for(;a3<s.length;s.length===r||(0,A.u)(s),++a3){b4=s[a3]
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
A.b1(new A.M(i,g.i("I(1)").a(n.gaz()),g.i("M<1,I>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.Z(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.d(o,g)
o[g].sb3(e)
b9.k(0,b4,e)}$.A.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.A.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.o(b0)
s=b9.i("di<1,f>")
b7=A.K(new A.di(b0,b9.i("f(1)").a(new A.tw(b8)),s),s.i("n.E"))
B.a.Y(b7)
$.A.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.W(b7,","))},
cP(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.y1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.f5(b0,n)
l=J.aF(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.c([],t.s6)
j=A.c([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.p()
d=d.w
if(d==null)d=A.i(A.k(a8))
c=a7.eU(e.b)
b=g.b
if(d.x)A.i(A.k(a9))
a=d.a
c.C()
a0=a.b.aA(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bc(c))
d.f.l(0,a0)
if(!(f<q.length))return A.d(q,f)
a1=q[f]
d=a1.c
a2=new A.bx(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
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
A.b1(new A.M(b,a3.i("I(1)").a(d.gaz()),a3.i("M<1,I>")))
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
d=a==null?A.i(A.k(a8)):a
if(d.x)A.i(A.k(a9))
d.a.b5(a6)
d.f.a5(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gU(j))
$.A.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.fH+1));++a7.fH},
dQ(a,b){var s,r,q,p,o,n,m,l,k=this
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
m=p.gb6().mo(k.eH(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bx(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.p()
n=r.c
p.k_(l)
p.b.dZ(n,l)
s.k(0,b,r.fD(l,m))
s=k.y
n=r.d
B.a.a5(s,n)
B.a.l(s,m)
k.e.gb6().mp(n)},
hr(d2,d3,d4,d5,d6,d7,d8,d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="time_override",c5="wetness_override",c6="fog_density",c7="fog_height_falloff",c8="rain_override",c9=A.aN([d3],t.N),d0=d2.e,d1=d0.h(0,d3)
if(d1!=null)for(s=d1.a,r=d2.aI(s),q=J.R(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.cd(s)
if(p.ax)p=!p.ay
else p=!1
if(p&&o!=null&&d0.h(0,o)!=null)c9.l(0,o)}n=new A.oB(d2).mX(c9,d4)
d0=t.jC
m=A.c([],d0)
l=A.c([],d0)
for(k=0;k<n.length;++k){j=n[k]
d0=k===0
s=d0?"spot":"point"
r=j.c
q=j.e
p=j.d
if(s!=="point"&&s!=="spot")A.i(A.ah(s,"type","must be point or spot"))
if(!isFinite(q)||q<0)A.i(A.ah(q,"intensity","must be finite and >= 0"))
if(!isFinite(p)||p<=0)A.i(A.ah(p,"radius","must be finite and > 0"))
d0=d0?l:m
B.a.l(d0,new A.aV(k,s,j.a,new A.j((r>>>16&255)/255,(r>>>8&255)/255,(r&255)/255),q,p))}d0=c3.fx
d0===$&&A.p()
i=d0.ml(d4,m,l)
d0=A.m(t.S,t.A_)
for(k=0;k<n.length;++k)d0.k(0,k,n[k])
s=A.c([],t.Fk)
for(r=i.a,q=r.length,h=0;h<r.length;r.length===q||(0,A.u)(r),++h){g=r[h]
p=d0.h(0,g.a).a
f=g.d
s.push(new A.kr(new A.I(p.a,p.b,p.c),new A.bY(f.a,f.b,f.c),g.e,g.f))}r=A.c([],t.cv)
for(q=i.c,p=q.length,h=0;h<q.length;q.length===p||(0,A.u)(q),++h){g=q[h]
f=g.a
e=d0.h(0,f)
d=e.a
e=e.b
c=g.d
r.push(new A.bA(f,new A.I(d.a,d.b,d.c),new A.I(e.a,e.b,e.c),new A.bY(c.a,c.b,c.c),g.e,g.f,1.05,1.4))}c3.iv(i,++c3.fy)
d0=$.hh()
b=d0.F(c4)
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
b0=A.cb(B.kL,B.bt,a9)
b1=A.cb(B.kN,B.bs,a9)
b2=A.cb(B.kH,B.bu,a9)
b3=0.3+0.5*a9
b4=0.25+0.2*a9}else if(q&&a1<14){b0=B.bt
b1=B.bs
b2=B.bu
b3=0.85
b4=0.45}else if(a1>=14&&a1<a5){a9=(a1-14)/(a5-14)
b0=A.cb(B.bt,B.dr,a9)
b1=A.cb(B.bs,B.du,a9)
b2=A.cb(B.bu,B.dt,a9)
b3=0.85*(1-a9*0.35)
b4=0.45*(1-a9*0.25)}else if(a1>=a5&&a1<a5+1.5){a9=(a1-a5)/1.5
b0=A.cb(B.dr,B.aC,a9)
b1=A.cb(B.du,B.aB,a9)
b2=A.cb(B.dt,B.aD,a9)
b3=0.55*(1-a9*0.8)
b4=0.34*(1-a9*0.65)}else{q=a5+1.5
if(a1>=q&&a1<a5+3){a9=(a1-q)/1.5
b0=A.cb(B.aC,B.aC,a9)
b1=A.cb(B.aB,B.aB,a9)
b2=A.cb(B.aD,B.aD,a9)
b3=0.11*(1-a9*0.25)
b4=0.16*(1-a9*0.15)}else{b0=B.aC
b1=B.aB
b2=B.aD
b3=0.15
b4=0.18}}if(a2>0){b5=A.cb(b2,B.kV,a2*0.7)
b3*=1-a2*0.35
b4*=1-a2*0.15}else b5=b2
b6=d8?1:0.15
B.c.D(a2*0.75+B.c.D(0.3333333333333333,0,1)*0.25,0,1)
q=$.AH().a
q.k(0,"pbrRoughnessScale",d0.F("pbr_roughness"))
q.k(0,"pbrMetallicScale",d0.F("pbr_metallic"))
q.k(0,"pbrSpecularMult",d0.F("pbr_specular"))
q.k(0,"pbrWrapDiffuse",d0.F("pbr_wrap_diffuse"))
q.k(0,"pbrFresnelF0",d0.F("pbr_fresnel_f0"))
q.k(0,"ambientLightScale",d0.F("light_ambient_mult"))
q.k(0,"directLightScale",d0.F("light_direct_mult"))
q.k(0,"ssdoEnabled",d0.aQ("shadow_ssdo_enable"))
q.k(0,"aoIntensity",d0.F("shadow_ao_intensity"))
q.k(0,"csmEnabled",d0.aQ("shadow_csm_enable"))
q.k(0,"csmHardness",d0.F("shadow_csm_hardness"))
q.k(0,"shadowBias",d0.F("shadow_bias"))
q.k(0,"weatheringEnabled",d0.aQ("weathering_enable"))
q.k(0,"normalBumpStrength",d0.F("normal_bump_strength"))
q.k(0,"grimeAccumulation",d0.F("grime_accumulation"))
q.k(0,"wetnessOverride",d0.F(c5))
q.k(0,"fogEnabled",d0.aQ("fog_enable"))
q.k(0,"fogDensity",d0.F(c6))
q.k(0,"fogHeightFalloff",d0.F(c7))
q.k(0,"volumetricEnabled",d0.aQ("volumetric_light_enable"))
q.k(0,"volumetricShaftIntensity",d0.F("volumetric_shaft_intensity"))
q.k(0,"volumetricScattering",d0.F("volumetric_scattering"))
q.k(0,"ssrEnabled",d0.aQ("ssr_enable"))
q.k(0,"tonemapMode",B.c.aw(d0.F("tonemap_mode")))
q.k(0,"ssssEnabled",d0.aQ("ssss_enable"))
q.k(0,"taaEnabled",d0.aQ("taa_enable"))
q.k(0,"lensFlareEnabled",d0.aQ("lens_flare_enable"))
q.k(0,"timeOverride",d0.F(c4))
q.k(0,"rainOverride",d0.F(c8))
q.k(0,"postBloom",d0.F("post_bloom"))
q.k(0,"postVignette",d0.F("post_vignette"))
q.k(0,"postChromaticAberration",d0.F("post_chromatic_aberration"))
q.k(0,"postFilmGrain",d0.F("post_film_grain"))
q.k(0,"postExposure",d0.F("post_exposure"))
q.k(0,"postSaturation",d0.F("post_saturation"))
q.k(0,"postBloomThreshold",d0.F("post_bloom_threshold"))
q.k(0,"postDither",d0.F("post_dither"))
q.k(0,"postDepthOfField",d0.F("post_depth_of_field"))
q.k(0,"postColorGrade",d0.F("post_color_grade"))
q.k(0,"postAffineWarp",d0.F("post_affine_warp"))
q.k(0,"postVertexSnap",d0.F("post_vertex_snap"))
q.k(0,"postQuantizationBits",B.c.aw(d0.F("post_quantization_bits")))
q.k(0,"postVhsChroma",d0.F("post_vhs_chroma"))
q.k(0,"postVhsNoise",d0.F("post_vhs_noise"))
q.k(0,"contactLightBoost",d0.F("light_contact_boost"))
q.k(0,"debugViewMode",d0.e.b)
$.A.j().setAttribute("data-renderer-shader-overrides",B.l.ab(q,null))
if(d0.F(c8)>=0)a0=d0.F(c8)
if(d0.F(c5)>=0)d0.F(c5)
q=$.AG()
q.mS(0.0166,a0)
b7=q.f
b8=B.c.D(Math.sin(Math.max(0,a6)*3.141592653589793/180)/Math.sin(1.1344640137963142),0,1)
b9=b8>0.001
c0=b9?new A.I(p,f,e):new A.I(-p,d,-e)
c1=b9?new A.bY(b0.c,b0.b,b0.a):new A.bY(0.35,0.45,0.65)
q=b7.a
if(q){p=b7.b
c2=new A.bY(c1.a+b7.c*p*2,c1.b+b7.d*p*2,c1.c+b7.e*p*2.5)}else c2=c1
b3*=b6
if(q)b3+=b7.b*4.5
q=Math.max(0.045,b4*(b9?b8:1)*b6)
c3.p4=new A.jO(B.i9,new A.bY(b5.c*0.08,b5.b*0.08,b5.a*0.08),1.5/(1+a0*0.45),14/(1+a0*0.16),d0.F(c7),d0.F(c6),new A.bY(b1.c,b1.b,b1.a),q,new A.nz(c0,c2,b3),s,r)},
br(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1)throw A.b(A.k("Pixeldart runtime is not initialized"))
s=i.p3
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dr(s)
s=$.xl()
q=s.b
p=s.c
o=A.w4(i.b/i.c,p,s.a,q)
p=new A.fj(r,o,o.aj(0,r),B.al,B.ml,q,p,i.b/i.c)
s=p}q=i.p4
p=i.R8
n=i.x2++
m=i.ry
l=new A.rf()
$.xg()
k=$.q5.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.p()
j=i.f
j===$&&A.p()
k.kh(j,new A.nS(s,q,p,n,m))
i.RG=i.e.lo()
s=$.q5.$0()
l.b=s
i.rx=l.gll()/1000},
f5(a,b){var s=A.FH(a,b),r=A.FF(a,b),q=A.K(s.c,t.i)
B.a.I(q,r)
return A.c([new A.fV("wall",new Float32Array(A.a1(q))),new A.fV("floor",s.a),new A.fV("ceiling",s.b)],t.pv)},
eU(a){var s,r,q,p,o,n=A.c([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.d(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.d(a,o)
B.a.l(n,new A.I(q,p,a[o]))}if(n.length===0)throw A.b(A.k("house surface mesh cannot be empty"))
return new A.ch(B.ac,a,null,A.b1(n))},
j4(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.f5(a2,a3),a0=a3.a,a1=b.k4.h(0,a0)
if(a1==null)throw A.b(A.k("surface materials missing for room "+a0))
s=A.c([],t.s6)
r=A.c([],t.s3)
q=A.c([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.p()
k=k.w
if(k==null)k=A.i(A.k("renderer is not initialized"))
j=b.eU(l.b)
i=l.a
if(k.x)A.i(A.k("resource library is disposed"))
h=k.a
j.C()
g=h.b.aA(j,n+i)
f=g.a
h.c.k(0,f,h.bc(j))
k.f.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bx(g,i,B.u,-1,B.T,B.ab,!0,!0,0,null)
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
A.b1(new A.M(k,h.i("I(1)").a(j.gaz()),h.i("M<1,I>")))
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
jx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.c([],f),d=A.c([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k4,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.J(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cz(l,l.r,l.e,A.o(l).i("cz<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bj.h(0,i)
if(h==null)A.i(A.k("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Y(d)
f=$.A.j()
B.a.Y(e)
f.setAttribute("data-renderer-house-materials",B.a.W(e,","))
$.A.j().setAttribute("data-renderer-house-surface-bindings",B.a.W(d,","))},
j7(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d1(new Float32Array(5376))
g=this.j6(a0.b)
r=new A.j(d,b,f)
q=new A.j(e,b,f)
p=new A.j(e,c,f)
o=new A.j(d,c,f)
n=new A.j(d,b,a)
m=new A.j(e,b,a)
l=new A.j(e,c,a)
k=new A.j(d,c,a)
s.aD(q,r,o,p,g)
s.aD(n,m,l,k,g)
s.aD(r,n,k,o,g)
s.aD(m,q,p,l,g)
s.aD(r,q,m,n,g)
s.aD(o,k,l,p,g)
j=B.t.aR(s.a,0,s.b)
g=A.c([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.d(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.d(j,c)
g.push(new A.I(e,d,j[c]))}return new A.ch(B.ac,j,null,A.b1(g))},
j6(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
df(a){var s
A:{if(0===a){s=B.kI
break A}if(1===a){s=B.kK
break A}if(2===a){s=B.kQ
break A}if(3===a){s=B.kY
break A}if(4===a){s=B.kZ
break A}if(5===a){s=B.kO
break A}if(6===a){s=B.kX
break A}if(7===a){s=B.kT
break A}s=B.kW
break A}return s},
dh(a){var s
A:{if("architecture"===a){s=B.kJ
break A}if("furniture"===a){s=B.ds
break A}if("fixture"===a){s=B.kS
break A}if("service"===a){s=B.kU
break A}if("story"===a){s=B.kR
break A}if("decor"===a){s=B.kM
break A}if("micro"===a){s=B.kP
break A}s=B.ds
break A}return s},
cL(a){return this.lM(t.G.a(a))},
lM(a){var s=0,r=A.bG(t.H),q,p=this,o,n,m,l
var $async$cL=A.bI(function(b,c){if(b===1)return A.bD(c,r)
for(;;)switch(s){case 0:if(!p.y1){s=1
break}o=A.c([],t.iJ)
for(n=0;n<4;++n){m=B.io[n]
l=a.h(0,m)
if(l!=null)o.push(p.cv(m,l))}s=3
return A.aB(A.nY(o,t.H),$async$cL)
case 3:case 1:return A.bE(q,r)}})
return A.bF($async$cL,r)},
cv(a,b){return this.jb(a,b)},
jb(a,b){var s=0,r=A.bG(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cv=A.bI(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.k1.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.a(A.a(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.aB(A.cp(A.a(m.decode()),t.X),$async$cv)
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
f=new Uint8Array(A.a1(j))
if(h.x)A.i(A.k("resource library is disposed"))
h.c.mT(d,f)
h=n.e.gb6()
if(h.x)A.i(A.k("resource library is disposed"))
h.c.lu(d)
$.A.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dl()
n.cz()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ao(c)
h=$.A.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dl()
n.cz()
A.a(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.y(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$cv,r)},
dl(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.y1||i.k1.a===0)return
s=i.k1
r=A.o(s).i("F<1,2>")
r=A.kb(new A.F(s,r),r.i("bP(n.E)").a(new A.tq()),r.i("n.E"),t.jP)
q=A.K(r,A.o(r).i("n.E"))
s=i.e
s===$&&A.p()
p=s.gb6().gfe().cN(q)
s=p.a
o=A.c(s.slice(0),A.C(s))
B.a.P(o,new A.tr())
s=A.C(o)
r=s.i("f(1)")
s=s.i("M<1,f>")
n=new A.M(o,r.a(new A.ts()),s).W(0,",")
m=new A.M(o,r.a(new A.tt()),s).W(0,",")
s=p.cC(B.dK)
r=p.cC(B.dL)
l=p.cC(B.dM)
k=p.cC(B.dN);++i.xr
j=$.A.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.xr)
if(!A.P($.A.j().hasAttribute("data-renderer-texture-residency-initial")))$.A.j().setAttribute("data-renderer-texture-residency-initial",n)},
cz(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.y1||j.p1.a===0)return
s=A.c([],t.a6)
for(r=j.p1,r=new A.F(r,A.o(r).i("F<1,2>")).gu(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.cW(p,o,B.b.q(p,"wall")?2:1))}r=j.e
r===$&&A.p()
r=r.gb6()
n=r.e
if(n===$){p=r.gfe()
r.e!==$&&A.xa()
n=r.e=new A.pr(p)}m=n.cN(s)
s=m.a
l=A.c(s.slice(0),A.C(s))
B.a.P(l,new A.to())
s=A.C(l)
k=new A.M(l,s.i("f(1)").a(new A.tp()),s.i("M<1,f>")).W(0,",")
s=$.A.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.cs(B.bm)+";pending="+m.cs(B.d6)+";missing="+m.cs(B.d7)+";evicted="+m.cs(B.d8))},
bU(a,b){return new A.bx(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
eH(a,b,c){var s,r,q,p,o,n=A.FE(a,b,c),m=n.length
if(m===0)throw A.b(A.k("door "+c.a+" produced no leaf geometry"))
s=A.c([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.d(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.d(n,o)
s.push(new A.I(q,p,n[o]))}return new A.ch(B.ac,n,null,A.b1(s))},
jt(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aC(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.c([new A.j(k,s,r),new A.j(q,s,r),new A.j(q,p,r),new A.j(k,p,r)],t.fi)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.c([new A.j(k,s,r),new A.j(q,s,r),new A.j(q,p,r),new A.j(k,p,r)],t.fi)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.c([new A.j(k,s,r),new A.j(k,s,q),new A.j(k,p,q),new A.j(k,p,r)],t.fi)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.c([new A.j(k,s,r),new A.j(k,s,q),new A.j(k,p,q),new A.j(k,p,r)],t.fi)
k=r
break
default:k=null}o=new A.d1(new Float32Array(5376))
o.aD(k[0],k[1],k[2],k[3],g)
n=B.t.aR(o.a,0,o.b)
k=A.c([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.I(r,q,n[p]))}return new A.ch(B.ac,n,null,A.b1(k))},
iv(a,b){var s,r,q,p=a.e,o=A.o(p).i("F<1,2>"),n=A.K(new A.F(p,o),o.i("n.E"))
B.a.P(n,new A.tk())
p=$.A.j()
o=a.a
s=A.C(o)
r=a.c
q=A.C(r)
p.setAttribute("data-renderer-light-selection","points="+new A.M(o,s.i("h(1)").a(new A.tl()),s.i("M<1,h>")).W(0,":")+";spots="+new A.M(r,q.i("h(1)").a(new A.tm()),q.i("M<1,h>")).W(0,":"))
q=A.C(n)
p.setAttribute("data-renderer-light-rejections",new A.M(n,q.i("f(1)").a(new A.tn()),q.i("M<1,f>")).W(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
jA(a){var s,r=this.e
r===$&&A.p()
r=r.gb6()
if(r.x)A.i(A.k("resource library is disposed"))
a.C()
s=r.b.a.aA(a,null)
r.r.l(0,s)
this.p1.k(0,a.a,a)
return s},
$iCr:1}
A.tu.prototype={
$0(){var s=this.a
if(s.ax)s=!s.ay
else s=!1
return!s},
$S:40}
A.tv.prototype={
$1(a){var s=this.a.dx.h(0,A.r(a))
s.toString
return s},
$S:41}
A.tw.prototype={
$1(a){var s,r,q,p
A.r(a)
s=this.a
r=s.k2.h(0,a)
q=r==null
p=q?null:s.k1.h(0,r)
if(q||p==null)throw A.b(A.k("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:41}
A.tq.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.bP(s,a.b,r)},
$S:150}
A.tr.prototype={
$2(a,b){var s=t.e
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:151}
A.ts.prototype={
$1(a){t.e.a(a)
return a.a.a+"="+a.b.b},
$S:42}
A.tt.prototype={
$1(a){var s=t.e.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:42}
A.to.prototype={
$2(a,b){var s=t.wl
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:153}
A.tp.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:154}
A.tk.prototype={
$2(a,b){var s=t.ou
return B.d.G(s.a(a).a,s.a(b).a)},
$S:155}
A.tl.prototype={
$1(a){return t.p.a(a).a},
$S:43}
A.tm.prototype={
$1(a){return t.p.a(a).a},
$S:43}
A.tn.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:157}
A.lB.prototype={}
A.iD.prototype={
fD(a,b){var s=this,r=b==null?s.d:b
return new A.iD(s.a,s.b,s.c,r,a)},
kF(a){return this.fD(a,null)}}
A.rY.prototype={}
A.tY.prototype={
$2(a,b){var s
A.wU(a,A.y(b))
switch(a){case"master":s=$.bq
if(s!=null)s.hv(b)
break
case"voice":s=$.bq
if(s!=null)s.hx(b)
break
case"effects":s=$.bq
if(s!=null)s.hu(b)
break
case"ambience":s=$.bq
if(s!=null)s.ht(b)
break
case"music":s=$.bq
if(s!=null)s.hw(b)
break}},
$S:44}
A.tZ.prototype={
$1(a){var s
A.wU("muted",""+a)
s=$.bq
if(s!=null)s.ea(a)},
$S:8}
A.u_.prototype={
$1(a){var s
A.wU("mono",""+a)
s=$.bq
if(s!=null)s.cW(a)},
$S:8}
A.u5.prototype={
$2(a,b){A.wV(a,A.y(b))
A.z1(a,b)},
$S:44}
A.u6.prototype={
$1(a){var s="high-contrast"
A.wV(s,""+a)
A.tM(s,a)},
$S:8}
A.u7.prototype={
$1(a){var s="strong-highlights"
A.wV(s,""+a)
A.tM(s,a)},
$S:8}
A.u8.prototype={
$1(a){$.dd().mt(a)
A.uK()
A.z3()},
$S:159}
A.u9.prototype={
$0(){var s=$.dd()
s.a=A.dx(null,1)
s.b=A.dx(null,1)
A.uK()
A.z3()},
$S:0}
A.ua.prototype={
$0(){A.dJ(this.a)},
$S:0}
A.ub.prototype={
$0(){this.a.a6()},
$S:0}
A.uc.prototype={
$0(){A.dJ(this.a)},
$S:0}
A.u0.prototype={
$0(){A.h7(this.a)},
$S:0}
A.u1.prototype={
$1(a){$.j2=a
A.zw()
A.wr()},
$S:160}
A.u2.prototype={
$1(a){var s=$.cK()
$.wC=a
if(!s.Q&&a.Q){$.be.j().a=1
$.be.j().h6(7)
$.as.j().fP()
$.cr().L(0)}A.zy()
A.z2()},
$S:161}
A.u3.prototype={
$1(a){$.el=a
A.wJ()
A.m1()},
$S:162}
A.u4.prototype={
$0(){$.el=B.ap
$.f5.j().e7($.el)
A.wJ()
A.m1()},
$S:0}
A.tV.prototype={
$1(a){var s,r=A.A6(a,A.zj())
$.j3=A.fy($.jb().b,a)
s=r.b
$.ek.j().cm(a,$.jb().b,s)
$.A.j().setAttribute("data-graphics-fallback",B.a.W(s,"|"))
$.zk=A.m4(a,r,$.zk)},
$S:163}
A.tW.prototype={
$0(){A.dJ($.ek.j())},
$S:0}
A.tX.prototype={
$0(){A.dJ($.ek.j())},
$S:0}
A.tR.prototype={
$1(a){},
$S:15}
A.tS.prototype={
$1(a){var s,r
$.wz=a
$.ac.j().e8(a.r)
s=$.ac.j()
r=s.ch
r.a=a.f
r.dT()
s.b9()
A.zx()},
$S:164}
A.tT.prototype={
$0(){A.dJ($.iV.j())},
$S:0}
A.tU.prototype={
$0(){A.dJ($.iV.j())},
$S:0}
A.uE.prototype={
$0(){$.uU=A.P(this.a.matches)
$.wY=A.P(this.b.matches)
A.m1()},
$S:0}
A.uC.prototype={
$1(a){return this.a.$0()},
$S:2}
A.uD.prototype={
$1(a){return this.a.$0()},
$S:2}
A.vd.prototype={
$1(a){var s
try{A.xI(a,this.a)
return!0}catch(s){if(A.ao(s) instanceof A.H)return!1
else throw s}},
$S:165}
A.ve.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j1.j()
break
case 5:p=$.f5.j()
break
case 1:p=$.ek.j()
break
case 4:p=$.h1.j()
break
case 2:p=$.iX.j()
break
case 3:p=$.iV.j()
break}s=p
r=null
switch(o){case 0:r=B.ke
break
case 5:r=B.kj
break
case 1:r=B.kf
break
case 4:r=B.ki
break
case 2:r=B.kg
break
case 3:r=B.kh
break}q=r
p=B.d2.h(0,a)
p.toString
A.wI(s,q,p)},
$S:166}
A.vf.prototype={
$0(){A.dJ($.h3.j())},
$S:0}
A.vq.prototype={
$0(){return A.dJ($.h3.j())},
$S:0}
A.vz.prototype={
$0(){$.cn.j().a6()},
$S:0}
A.vA.prototype={
$0(){$.cn.j().a6()},
$S:0}
A.vB.prototype={
$0(){A.wI($.h3.j(),B.db,"pause.settings")},
$S:0}
A.vC.prototype={
$0(){$.cn.j().a6()
A.j7($.iY.j())},
$S:0}
A.vD.prototype={
$0(){A.me("saved")},
$S:0}
A.vE.prototype={
$0(){$.cn.j().a6()
A.j7($.iY.j())},
$S:0}
A.vF.prototype={
$0(){A.wI($.lZ.j(),B.kk,"pause.credits")},
$S:0}
A.vg.prototype={
$0(){return A.h7($.cn.j())},
$S:0}
A.vh.prototype={
$0(){return A.h7($.iZ.j())},
$S:0}
A.vi.prototype={
$2(a,b){var s,r
if($.as.j().y){s=$.aE.j().gbZ()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.d(r,a)
A.DY(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.d(B.cP,a)
A.DX(B.cP[a])}}},
$S:167}
A.vj.prototype={
$2(a,b){var s,r,q,p,o,n
if($.T.j().gaa().a===21){A.zD(!1)
return}s=$.X.j().r.b
$.T.j().hM(a,b,$.au)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.e5()
if(typeof n!=="number")return A.v7(n)
if(!(o<n))break
if($.X.b===$.X)A.i(A.a9(""))
p=B.a.h(B.M,q).b
o=$.aS
if(o!=null){n=$.X.b
if(n===$.X)A.i(A.a9(""))
o.cP(n,p)}o=q
if(typeof o!=="number")return o.ai()
q=o+1}A.me("saved after sleep")},
$S:168}
A.vk.prototype={
$0(){return A.h7($.m0.j())},
$S:0}
A.vl.prototype={
$0(){return A.h7($.iY.j())},
$S:0}
A.vm.prototype={
$0(){return A.dJ($.lZ.j())},
$S:0}
A.vn.prototype={
$0(){A.h7($.iW.j())},
$S:0}
A.vo.prototype={
$0(){A.h7($.iW.j())},
$S:0}
A.vp.prototype={
$1(a){return A.zC()},
$S:2}
A.vr.prototype={
$1(a){if(A.r(A.a(v.G.document).visibilityState)==="hidden")A.EV()},
$S:1}
A.vs.prototype={
$1(a){var s,r,q,p,o,n,m=A.a(a)
if(A.r(m.code)==="CapsLock"&&!A.P(m.repeat)){m.preventDefault()
p=$.hh()
o=!p.a
p.a=o
if(o)A.oZ(A.a(v.G.document),"exitPointerLock",t.X)
else $.ac.j().cQ($.A.j())
return}p=$.hh()
if(p.a&&!A.P(m.repeat)){if(A.r(m.code)==="Escape"){m.preventDefault()
p.a=!1
$.ac.j().cQ($.A.j())
return}if(A.r(m.code)==="ArrowUp"||A.r(m.code)==="KeyW"){m.preventDefault()
n=p.gbf().length
if(n>0)p.c=B.d.S(p.c-1+n,n)
o=$.en
if(o!=null){p=p.gbf().length
o.a.cV(-1,p)}return}if(A.r(m.code)==="ArrowDown"||A.r(m.code)==="KeyS"){m.preventDefault()
n=p.gbf().length
if(n>0)p.c=B.d.S(p.c+1,n)
o=$.en
if(o!=null){p=p.gbf().length
o.a.cV(1,p)}return}if(A.r(m.code)==="ArrowLeft"||A.r(m.code)==="KeyA"){m.preventDefault()
if(p.b===4)p.e=B.cY[B.d.S(p.e.a-1+7,7)]
else{p=p.gcI()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.D(p.y-p.w,p.f,p.r)}return}if(A.r(m.code)==="ArrowRight"||A.r(m.code)==="KeyD"){m.preventDefault()
if(p.b===4)p.e=B.cY[(p.e.a+1)%7]
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
if(A.P(m.shiftKey))p.ms()
else p.mu()
return}if(B.b.T(A.r(m.code),"Digit")||B.b.T(A.r(m.code),"Numpad")){o=A.r(m.code)
o=A.x9(o,"Digit","")
s=A.x9(o,"Numpad","")
r=A.du(s,null)
if(r!=null&&r>=1&&r<=5){m.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.as.j().y&&!A.P(m.repeat))if($.cr().lz(A.r(m.code))){m.preventDefault()
return}if(A.r(m.code)==="Escape"&&!A.P(m.repeat)){p=$.bf
if(p==null)A.j7($.cn.j())
else p.a6()
return}q=$.bf==null&&!p.a
if(!A.P(m.repeat)&&q)$.f6.j().dE(new A.kC(A.r(m.code),!0,1))
if(A.r(m.code)==="KeyP"&&!A.P(m.repeat)&&$.Ay())$.mb=!$.mb
if((A.r(m.code)==="KeyJ"||A.r(m.code)==="Tab")&&!A.P(m.repeat)&&!$.as.j().y){m.preventDefault()
A.j9($.iZ.j())}if(A.r(m.code)==="KeyL"&&!A.P(m.repeat)&&!$.as.j().y)A.j9($.m0.j())
if(A.r(m.code)==="KeyH"&&!A.P(m.repeat)&&!$.as.j().y)A.j9($.iY.j())
if(A.r(m.code)==="KeyO"&&!A.P(m.repeat)&&!$.as.j().y)A.j9($.j0.j())
if(A.r(m.code)==="KeyK"&&!A.P(m.repeat)&&q)A.me("saved")},
$S:1}
A.vt.prototype={
$1(a){var s=A.a(a)
if($.bf==null)$.f6.j().dE(new A.kC(A.r(s.code),!1,0))},
$S:1}
A.vu.prototype={
$1(a){return A.z5()},
$S:2}
A.vv.prototype={
$1(a){return A.z5()},
$S:2}
A.vw.prototype={
$1(a){return A.Ep(A.a(a))},
$S:2}
A.vx.prototype={
$1(a){var s=A.a(a)
if($.as.j().y){s.preventDefault()
A.Eo(s)
return}$.ac.j().cQ($.A.j())},
$S:1}
A.vy.prototype={
$1(a){var s,r,q,p=A.a(a),o=$.hh()
if(!o.a||$.en==null)return
p.preventDefault()
s=o.gbf()
r=A.a6(p.deltaY)>0?1:-1
o=$.en
o.toString
q=J.cL(s)
o.a.cV(A.e(r),q)},
$S:1}
A.uF.prototype={
$1(a){var s=A.r(A.a(a).message)
A.uO(s,null)},
$S:1}
A.uG.prototype={
$1(a){var s
A.a(a)
s=a.reason
A.uO("unhandled rejection: "+A.y(s==null?A.r(a.type):s),null)},
$S:1}
A.uJ.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:38}
A.uS.prototype={
$0(){this.a.className=""},
$S:12}
A.uW.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:31}
A.uI.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:20}
A.uP.prototype={
$1(a){return t.g.a(a).e},
$S:23}
A.uL.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.uN.prototype={
$1(a){return t.fW.a(a).w},
$S:25};(function aliases(){var s=J.e0.prototype
s.hV=s.p
s=A.n.prototype
s.hU=s.cT
s=A.hX.prototype
s.hW=s.bH})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"Ew","BS",29)
r(J.q.prototype,"gap","q",10)
q(A,"EK","C9",39)
r(A.aL.prototype,"gap","q",10)
p(A.cf.prototype,"gkz","R",10)
o(A,"FA","D3",17)
o(A,"FB","D4",17)
o(A,"FC","D5",17)
q(A,"zS","Fh",0)
s(A,"FJ","BX",29)
r(A.ck.prototype,"gap","q",10)
r(A.fS.prototype,"gap","q",10)
o(A,"FM","E6",13)
p(A.kc.prototype,"gmz","mA",89)
var n
p(n=A.kR.prototype,"gmv","mw",9)
p(n,"gmD","mE",9)
p(n,"gmF","mG",9)
p(n,"gmx","my",9)
p(n,"gmB","mC",9)
q(A,"zW","D8",171)
q(A,"He","w7",40)
p(A.dr.prototype,"gaz","h8",58)
p(n=A.k_.prototype,"gjd","je",2)
p(n,"gjf","jg",2)
p(n,"gjj","jk",2)
p(n,"gjn","jo",2)
p(n,"gjp","jq",2)
p(n,"gjl","jm",2)
p(n,"gjh","ji",2)
o(A,"G7","za",13)
o(A,"Gb","z9",13)
o(A,"G0","BP",172)
o(A,"G1","BQ",173)
o(A,"Gf","BJ",174)
p(A.hX.prototype,"gjr","js",2)
p(A.fN.prototype,"gj2","j3",122)
p(A.l3.prototype,"glH","lI",16)
o(A,"A5","EY",175)
q(A,"A4","E3",0)
o(A,"G4","DZ",117)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.N,null)
q(A.N,[A.vZ,J.k1,A.i6,J.er,A.n,A.hm,A.dR,A.al,A.V,A.qv,A.aH,A.hO,A.S,A.hx,A.hu,A.il,A.aw,A.d3,A.bc,A.fD,A.fn,A.f0,A.dw,A.rt,A.pI,A.hv,A.iI,A.a5,A.pk,A.cg,A.af,A.cz,A.hG,A.lx,A.ld,A.ic,A.lP,A.t_,A.cF,A.lq,A.lS,A.tA,A.le,A.c6,A.b2,A.li,A.dF,A.ar,A.lf,A.lN,A.iT,A.iu,A.lw,A.f1,A.ix,A.iN,A.lT,A.ev,A.jw,A.ti,A.tD,A.ew,A.dT,A.ln,A.km,A.ia,A.t0,A.H,A.L,A.aq,A.lQ,A.rf,A.bl,A.iP,A.rv,A.lK,A.pH,A.lt,A.ef,A.q8,A.e5,A.kt,A.nb,A.nc,A.ne,A.nd,A.ks,A.fj,A.jO,A.nS,A.dv,A.jW,A.bY,A.nz,A.kr,A.bA,A.e2,A.bB,A.rz,A.ch,A.pJ,A.ku,A.kD,A.bx,A.kP,A.i3,A.aG,A.nU,A.cW,A.bZ,A.pt,A.pr,A.kc,A.kV,A.pz,A.bP,A.c1,A.ro,A.rm,A.da,A.kR,A.eE,A.jL,A.jM,A.nT,A.nR,A.fU,A.ax,A.bh,A.aI,A.O,A.ho,A.kw,A.bk,A.qa,A.b6,A.qc,A.qb,A.ls,A.i2,A.qm,A.t1,A.lR,A.tz,A.lD,A.lp,A.lH,A.lA,A.td,A.bM,A.bJ,A.aO,A.nu,A.nt,A.jc,A.eH,A.nV,A.dr,A.ky,A.kS,A.I,A.hl,A.lg,A.jo,A.lh,A.jA,A.lk,A.hs,A.ll,A.jD,A.lm,A.jV,A.lr,A.hP,A.ly,A.fh,A.jp,A.w8,A.i_,A.lE,A.kx,A.lF,A.eR,A.kH,A.lI,A.kI,A.lJ,A.kL,A.lM,A.kK,A.lL,A.kZ,A.lU,A.i4,A.l9,A.lX,A.n9,A.jR,A.jT,A.hA,A.i8,A.x,A.jB,A.fH,A.od,A.ei,A.cZ,A.ft,A.rR,A.dG,A.iS,A.iR,A.lW,A.lV,A.tH,A.jC,A.jj,A.fY,A.mH,A.mp,A.hj,A.mD,A.vV,A.mP,A.mJ,A.im,A.fi,A.n6,A.nQ,A.k_,A.oR,A.oV,A.aV,A.pg,A.pd,A.nv,A.pm,A.d1,A.j,A.kM,A.la,A.n_,A.jE,A.nF,A.fu,A.bo,A.kq,A.q2,A.fM,A.qq,A.eO,A.jP,A.o1,A.o0,A.jq,A.kd,A.cH,A.lb,A.hD,A.ou,A.Z,A.jI,A.jX,A.ov,A.jJ,A.d9,A.jK,A.ee,A.dV,A.qn,A.ed,A.fX,A.os,A.nJ,A.rb,A.ox,A.cV,A.cx,A.oY,A.oW,A.oX,A.dt,A.oB,A.dE,A.bw,A.fC,A.hY,A.jF,A.e8,A.cE,A.oE,A.cU,A.ot,A.eD,A.oD,A.cT,A.oI,A.hZ,A.hN,A.bi,A.rN,A.k9,A.bV,A.p0,A.mW,A.hk,A.mX,A.pc,A.pb,A.pZ,A.pY,A.q_,A.q0,A.q1,A.k8,A.q7,A.qk,A.kC,A.qj,A.ql,A.r6,A.e7,A.r7,A.fO,A.nw,A.rS,A.eW,A.ju,A.oP,A.oT,A.qo,A.d_,A.qp,A.jQ,A.eV,A.rO,A.pC,A.cO,A.bu,A.pW,A.rg,A.eU,A.eT,A.ik,A.l6,A.eK,A.d6,A.rj,A.jd,A.vU,A.dL,A.mz,A.dM,A.mZ,A.b3,A.n7,A.fo,A.dh,A.jv,A.hX,A.nA,A.o7,A.o9,A.fw,A.dW,A.oo,A.og,A.oh,A.ca,A.op,A.cX,A.fk,A.pL,A.ds,A.e3,A.c_,A.pQ,A.q6,A.b_,A.r1,A.r5,A.cs,A.mw,A.l3,A.rM,A.dC,A.bm,A.c4,A.bQ,A.l5,A.jf,A.l2,A.fV,A.lC,A.lB,A.iD,A.rY])
q(J.k1,[J.k3,J.hF,J.hI,J.hH,J.hJ,J.fz,J.dZ])
q(J.hI,[J.e0,J.q,A.fG,A.hT])
q(J.e0,[J.kp,J.eS,J.e_])
r(J.k2,A.i6)
r(J.p_,J.q)
q(J.fz,[J.hE,J.k4])
q(A.n,[A.ec,A.Q,A.cA,A.G,A.hw,A.dD,A.f_,A.lc,A.lO,A.bS])
q(A.ec,[A.eu,A.iU])
r(A.is,A.eu)
r(A.iq,A.iU)
q(A.dR,[A.js,A.jr,A.kQ,A.v8,A.va,A.rV,A.rU,A.tN,A.nZ,A.tb,A.te,A.pn,A.tg,A.vH,A.vI,A.v2,A.q9,A.rA,A.pw,A.px,A.py,A.pK,A.pu,A.pv,A.pA,A.rp,A.rq,A.rs,A.nN,A.nL,A.nM,A.pN,A.pO,A.qh,A.qg,A.qf,A.qe,A.qd,A.qi,A.uu,A.uv,A.qs,A.qt,A.vO,A.vM,A.nW,A.pp,A.v_,A.oe,A.of,A.rP,A.rQ,A.mR,A.mU,A.mT,A.mV,A.mI,A.mq,A.mr,A.ms,A.mF,A.mG,A.mE,A.oS,A.pe,A.nI,A.o2,A.o4,A.o5,A.o6,A.na,A.nK,A.ow,A.vP,A.uz,A.uy,A.tL,A.tK,A.uR,A.oK,A.oL,A.oN,A.rc,A.oA,A.oy,A.uY,A.oF,A.oH,A.uX,A.nE,A.pj,A.p7,A.ra,A.r9,A.r8,A.nx,A.ny,A.pX,A.rk,A.rl,A.mo,A.mm,A.mM,A.mN,A.n1,A.n5,A.n4,A.n3,A.nn,A.nm,A.no,A.np,A.nq,A.nl,A.ng,A.nh,A.ns,A.nB,A.nC,A.nD,A.nH,A.o8,A.oa,A.ob,A.om,A.ok,A.ol,A.oj,A.oi,A.or,A.p2,A.p3,A.p4,A.pR,A.pS,A.pT,A.qX,A.qY,A.qP,A.qQ,A.qO,A.qR,A.qz,A.qS,A.qT,A.qU,A.qN,A.qF,A.qG,A.qH,A.qI,A.qJ,A.qK,A.qL,A.qM,A.qE,A.qA,A.qB,A.qC,A.qD,A.qW,A.qV,A.r3,A.re,A.my,A.rK,A.rJ,A.rL,A.rF,A.rI,A.rD,A.rC,A.v5,A.rB,A.mt,A.mu,A.mv,A.tv,A.tw,A.tq,A.ts,A.tt,A.tp,A.tl,A.tm,A.tn,A.tZ,A.u_,A.u6,A.u7,A.u8,A.u1,A.u2,A.u3,A.tV,A.tR,A.tS,A.uC,A.uD,A.vd,A.ve,A.vp,A.vr,A.vs,A.vt,A.vu,A.vv,A.vw,A.vx,A.vy,A.uF,A.uG,A.uJ,A.uW,A.uP,A.uL,A.uN])
q(A.js,[A.rZ,A.nf,A.p8,A.v9,A.tO,A.uZ,A.o_,A.tc,A.pl,A.po,A.tj,A.rx,A.rw,A.vJ,A.ps,A.pB,A.rn,A.rr,A.nO,A.qu,A.vN,A.vL,A.mS,A.mK,A.mL,A.pf,A.o3,A.uT,A.oM,A.oO,A.oC,A.pi,A.oU,A.pE,A.pF,A.pG,A.rh,A.ri,A.n8,A.p5,A.p6,A.mx,A.rG,A.rE,A.tr,A.to,A.tk,A.tY,A.u5,A.vi,A.vj,A.uI])
r(A.aW,A.iq)
q(A.al,[A.fA,A.dA,A.k5,A.kU,A.kE,A.lo,A.hL,A.jh,A.ct,A.ih,A.kT,A.fP,A.jt])
r(A.fR,A.V)
r(A.dS,A.fR)
q(A.Q,[A.a4,A.aa,A.aj,A.F,A.eZ,A.iw])
q(A.a4,[A.id,A.M,A.eN,A.lv])
r(A.di,A.cA)
q(A.bc,[A.eg,A.eh,A.f3])
q(A.eg,[A.aQ,A.f4,A.iE])
q(A.eh,[A.az,A.b0,A.iF])
q(A.f3,[A.iG,A.cl])
r(A.h_,A.fD)
r(A.e9,A.h_)
r(A.hp,A.e9)
q(A.fn,[A.a3,A.cR])
q(A.dw,[A.hq,A.iH,A.iO])
r(A.aL,A.hq)
q(A.jr,[A.q3,A.rW,A.rX,A.tB,A.nX,A.t2,A.t7,A.t6,A.t4,A.t3,A.ta,A.t9,A.t8,A.ty,A.uQ,A.tF,A.tE,A.ut,A.um,A.un,A.us,A.uh,A.uj,A.ui,A.ur,A.uf,A.ug,A.uo,A.up,A.uq,A.ul,A.uk,A.ux,A.v0,A.oJ,A.oz,A.oG,A.uA,A.mn,A.mB,A.mA,A.mO,A.nj,A.nk,A.ni,A.oc,A.on,A.pV,A.qx,A.qy,A.qZ,A.r_,A.r0,A.r4,A.rH,A.tu,A.u9,A.ua,A.ub,A.uc,A.u0,A.u4,A.tW,A.tX,A.tT,A.tU,A.uE,A.vf,A.vq,A.vz,A.vA,A.vB,A.vC,A.vD,A.vE,A.vF,A.vg,A.vh,A.vk,A.vl,A.vm,A.vn,A.vo,A.uS])
r(A.hV,A.dA)
q(A.kQ,[A.kN,A.fg])
q(A.a5,[A.cf,A.it,A.lu])
r(A.hK,A.cf)
r(A.fF,A.fG)
q(A.hT,[A.ke,A.b5])
q(A.b5,[A.iz,A.iB])
r(A.iA,A.iz)
r(A.hR,A.iA)
r(A.iC,A.iB)
r(A.hS,A.iC)
q(A.hR,[A.hQ,A.kf])
q(A.hS,[A.kg,A.kh,A.ki,A.kj,A.kk,A.eG,A.hU])
r(A.fZ,A.lo)
r(A.io,A.li)
r(A.lG,A.iT)
r(A.iv,A.it)
r(A.ck,A.iH)
r(A.fS,A.iO)
q(A.ev,[A.jl,A.jG,A.k6])
q(A.jw,[A.mY,A.pa,A.p9,A.ry])
r(A.k7,A.hL)
r(A.th,A.ti)
r(A.kY,A.jG)
q(A.ct,[A.fJ,A.jZ])
r(A.lj,A.iP)
q(A.ln,[A.eJ,A.fq,A.fm,A.eC,A.jg,A.d4,A.fL,A.fs,A.jn,A.hn,A.fr,A.eM,A.eF,A.dz,A.ey,A.ce,A.i5,A.cS,A.fK,A.i9,A.fv,A.ip,A.ir,A.jS,A.hy,A.hB,A.jU,A.eB,A.hz,A.eQ,A.d2,A.fl,A.fx,A.fW,A.jm,A.et,A.jx,A.jz,A.b7,A.jk,A.cc,A.eA,A.ex,A.dj,A.jN,A.dU,A.dX,A.ko,A.kB,A.eL,A.cG,A.dy,A.bO,A.bz,A.k0,A.eX,A.cj,A.cM,A.cu,A.cN,A.dg,A.df,A.dO,A.dP,A.dN,A.es,A.dm,A.cP,A.cQ,A.dn,A.dl,A.dp,A.cd,A.dk,A.cv,A.je,A.bj,A.ci,A.e4,A.cD,A.bN,A.by,A.i7,A.bK,A.c2,A.c3,A.eb,A.d5])
q(A.dv,[A.bt,A.b8,A.cB,A.kn,A.cw])
r(A.qr,A.lH)
r(A.l7,A.lV)
r(A.iy,A.d9)
q(A.hX,[A.hr,A.nr,A.nG,A.hC,A.oq,A.p1,A.pU,A.qw,A.fN,A.rd])
q(A.rM,[A.l4,A.lz,A.ba,A.l1,A.l_,A.ij,A.l0])
s(A.fR,A.d3)
s(A.iU,A.V)
s(A.iz,A.V)
s(A.iA,A.aw)
s(A.iB,A.V)
s(A.iC,A.aw)
s(A.h_,A.iN)
s(A.iO,A.lT)
s(A.lH,A.td)
s(A.lV,A.tH)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",t:"double",bg:"num",f:"String",l:"bool",aq:"Null",D:"List",N:"Object",W:"Map",ae:"JSObject"},mangledNames:{},types:["~()","aq(N?)","~(N?)","l(f)","dq()","l(t)","0&()","l(ax)","~(l)","dq(b8?)","l(N?)","h(bV,bV)","aq()","@(@)","l(eK)","aq(@)","l(bQ)","~(~())","l(O)","l(b_)","h(L<f,f>,L<f,f>)","l(@)","~(@)","l(bV)","l(bB)","l(dE)","l(e7)","l(ee)","l(h)","h(@,@)","@()","l(bu)","l(cM)","l(L<f,D<f>>)","~(N?,N?)","~(ae)","l(cv)","@(f)","l(cd)","h()","l()","f(f)","f(c1)","h(aV)","~(f,t)","j(j)","~(eR)","fj()","t()","fh()","l(L<f,aG>)","aG(L<f,aG>)","aG(aG,aG)","h(aO<bM>,aO<bM>)","c0(aO<bM>)","h(aO<bJ>,aO<bJ>)","c0(aO<bJ>)","eH(t,t,t,t)","I(I)","0&(f,h?)","eR()","N?(N?)","t(t,fY)","bW<aq>(L<f,f>)","l(D<f>)","h(f,f)","h(bw,bw)","aq(@,d0)","+effectiveScore,light,score(t,aV,t)(aV)","h(+effectiveScore,light,score(t,aV,t),+effectiveScore,light,score(t,aV,t))","l(cc)","h(+influence,light(t,bA),+influence,light(t,bA))","~(h,@)","~(N,d0)","l(cE)","l(e8)","f(h,Z,Z,Z)","h(d9,d9)","aq(N,d0)","l(ed)","l(bZ)","h(h)","h(cW,cW)","h(+(t,t,t,t),+(t,t,t,t))","D<+(t,t,t,t)>()","l(bw)","h(h,cE)","l(cx)","l(cV)","e2(cB)","cB(h,h,f?)","h(dt,dt)","l(cU)","L<f,f>(f,@)","f?(f)","bt(h,h,f?)","l(bO)","l(bz)","eV()","h(h,+(bt,ch))","h(L<f,cO>,L<f,cO>)","l(c1)","L<h,@>(h,eU)","L<h,@>(h,eT)","l(L<@,@>)","L<f,f>(L<@,@>)","l?(N?)","h(bP,bP)","f()","0^(n<0^>,N?)<N?>","t(t,f)","~(@,@)","D<f>(D<f>)","~(t)","b8(h,h,f?)","l(ig?)","aq(ae)","~(h)","h(h,+(b8,da))","W<f,N?>(ds)","f(bj)","l(bj)","l(by)","f(ax)","l(dm)","l(cP)","l(cQ)","l(dn)","l(dl)","l(dp)","l(dk)","h(a8,a8)","l(cu)","l(cN)","l(dg)","l(df)","f(cs)","h(cs,cs)","aq(~())","h(bQ,bQ)","D<d6>()","l(d6)","l(L<f,f>)","h(c4,c4)","W<f,@>(bQ)","l(c3)","l(c2)","l(bK)","@(@,f)","cw(h,h,f?)","bP(L<f,b8>)","h(c1,c1)","i4(bt)","h(bZ,bZ)","f(bZ)","h(L<h,f>,L<h,f>)","dq(f{fallback:f?})","f(L<h,f>)","W<f,f>(W<f,f>,f)","~(by)","~(dM)","~(fw)","~(dL)","~(dW)","~(fo)","l(fM)","~(bN)","~(h,f)","~(bO,bz)","bA?()","D<bA>()","fU()","cV(N?)","cx(N?)","cU(N?)","~(bg)","0^(f,n<0^>)<B>"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aQ&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.f4&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iE&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.az&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.b0&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.iF&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iG&&A.A7(a,b.a),"5;floor,id,wall,x,z":a=>b=>b instanceof A.cl&&A.A7(a,b.a)}}
A.Do(v.typeUniverse,JSON.parse('{"e_":"e0","kp":"e0","eS":"e0","Gx":"fG","q":{"D":["1"],"Q":["1"],"ae":[],"n":["1"]},"k3":{"l":[],"ag":[]},"hF":{"aq":[],"ag":[]},"hI":{"ae":[]},"e0":{"ae":[]},"k2":{"i6":[]},"p_":{"q":["1"],"D":["1"],"Q":["1"],"ae":[],"n":["1"]},"er":{"a7":["1"]},"fz":{"t":[],"bg":[],"b4":["bg"]},"hE":{"t":[],"h":[],"bg":[],"b4":["bg"],"ag":[]},"k4":{"t":[],"bg":[],"b4":["bg"],"ag":[]},"dZ":{"f":[],"b4":["f"],"pP":[],"ag":[]},"ec":{"n":["2"]},"hm":{"a7":["2"]},"eu":{"ec":["1","2"],"n":["2"],"n.E":"2"},"is":{"eu":["1","2"],"ec":["1","2"],"Q":["2"],"n":["2"],"n.E":"2"},"iq":{"V":["2"],"D":["2"],"ec":["1","2"],"Q":["2"],"n":["2"]},"aW":{"iq":["1","2"],"V":["2"],"D":["2"],"ec":["1","2"],"Q":["2"],"n":["2"],"n.E":"2","V.E":"2"},"fA":{"al":[]},"dS":{"V":["h"],"d3":["h"],"D":["h"],"Q":["h"],"n":["h"],"V.E":"h","d3.E":"h"},"Q":{"n":["1"]},"a4":{"Q":["1"],"n":["1"]},"id":{"a4":["1"],"Q":["1"],"n":["1"],"n.E":"1","a4.E":"1"},"aH":{"a7":["1"]},"cA":{"n":["2"],"n.E":"2"},"di":{"cA":["1","2"],"Q":["2"],"n":["2"],"n.E":"2"},"hO":{"a7":["2"]},"M":{"a4":["2"],"Q":["2"],"n":["2"],"n.E":"2","a4.E":"2"},"G":{"n":["1"],"n.E":"1"},"S":{"a7":["1"]},"hw":{"n":["2"],"n.E":"2"},"hx":{"a7":["2"]},"hu":{"a7":["1"]},"dD":{"n":["1"],"n.E":"1"},"il":{"a7":["1"]},"fR":{"V":["1"],"d3":["1"],"D":["1"],"Q":["1"],"n":["1"]},"eN":{"a4":["1"],"Q":["1"],"n":["1"],"n.E":"1","a4.E":"1"},"aQ":{"eg":[],"bc":[]},"f4":{"eg":[],"bc":[]},"iE":{"eg":[],"bc":[]},"az":{"eh":[],"bc":[]},"b0":{"eh":[],"bc":[]},"iF":{"eh":[],"bc":[]},"iG":{"f3":[],"bc":[]},"cl":{"f3":[],"bc":[]},"hp":{"e9":["1","2"],"h_":["1","2"],"fD":["1","2"],"iN":["1","2"],"W":["1","2"]},"fn":{"W":["1","2"]},"a3":{"fn":["1","2"],"W":["1","2"]},"f_":{"n":["1"],"n.E":"1"},"f0":{"a7":["1"]},"cR":{"fn":["1","2"],"W":["1","2"]},"hq":{"dw":["1"],"e6":["1"],"Q":["1"],"n":["1"]},"aL":{"hq":["1"],"dw":["1"],"e6":["1"],"Q":["1"],"n":["1"]},"hV":{"dA":[],"al":[]},"k5":{"al":[]},"kU":{"al":[]},"iI":{"d0":[]},"dR":{"ez":[]},"jr":{"ez":[]},"js":{"ez":[]},"kQ":{"ez":[]},"kN":{"ez":[]},"fg":{"ez":[]},"kE":{"al":[]},"cf":{"a5":["1","2"],"w0":["1","2"],"W":["1","2"],"a5.K":"1","a5.V":"2"},"aa":{"Q":["1"],"n":["1"],"n.E":"1"},"cg":{"a7":["1"]},"aj":{"Q":["1"],"n":["1"],"n.E":"1"},"af":{"a7":["1"]},"F":{"Q":["L<1,2>"],"n":["L<1,2>"],"n.E":"L<1,2>"},"cz":{"a7":["L<1,2>"]},"hK":{"cf":["1","2"],"a5":["1","2"],"w0":["1","2"],"W":["1","2"],"a5.K":"1","a5.V":"2"},"eg":{"bc":[]},"eh":{"bc":[]},"f3":{"bc":[]},"hG":{"Cl":[],"pP":[]},"lx":{"i1":[],"fE":[]},"lc":{"n":["i1"],"n.E":"i1"},"ld":{"a7":["i1"]},"ic":{"fE":[]},"lO":{"n":["fE"],"n.E":"fE"},"lP":{"a7":["fE"]},"fF":{"ae":[],"ag":[]},"eG":{"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"],"ag":[],"V.E":"h","aw.E":"h"},"fG":{"ae":[],"ag":[]},"hT":{"ae":[]},"ke":{"ae":[],"ag":[]},"b5":{"bX":["1"],"ae":[]},"hR":{"V":["t"],"b5":["t"],"D":["t"],"bX":["t"],"Q":["t"],"ae":[],"n":["t"],"aw":["t"]},"hS":{"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"]},"hQ":{"nP":[],"V":["t"],"b5":["t"],"D":["t"],"bX":["t"],"Q":["t"],"ae":[],"n":["t"],"aw":["t"],"ag":[],"V.E":"t","aw.E":"t"},"kf":{"V":["t"],"b5":["t"],"D":["t"],"bX":["t"],"Q":["t"],"ae":[],"n":["t"],"aw":["t"],"ag":[],"V.E":"t","aw.E":"t"},"kg":{"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"],"ag":[],"V.E":"h","aw.E":"h"},"kh":{"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"],"ag":[],"V.E":"h","aw.E":"h"},"ki":{"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"],"ag":[],"V.E":"h","aw.E":"h"},"kj":{"we":[],"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"],"ag":[],"V.E":"h","aw.E":"h"},"kk":{"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"],"ag":[],"V.E":"h","aw.E":"h"},"hU":{"ig":[],"V":["h"],"b5":["h"],"D":["h"],"bX":["h"],"Q":["h"],"ae":[],"n":["h"],"aw":["h"],"ag":[],"V.E":"h","aw.E":"h"},"lo":{"al":[]},"fZ":{"dA":[],"al":[]},"c6":{"a7":["1"]},"bS":{"n":["1"],"n.E":"1"},"b2":{"al":[]},"io":{"li":["1"]},"ar":{"bW":["1"]},"iT":{"yA":[]},"lG":{"iT":[],"yA":[]},"it":{"a5":["1","2"],"W":["1","2"]},"iv":{"it":["1","2"],"a5":["1","2"],"W":["1","2"],"a5.K":"1","a5.V":"2"},"eZ":{"Q":["1"],"n":["1"],"n.E":"1"},"iu":{"a7":["1"]},"ck":{"dw":["1"],"y_":["1"],"e6":["1"],"Q":["1"],"n":["1"]},"f1":{"a7":["1"]},"V":{"D":["1"],"Q":["1"],"n":["1"]},"a5":{"W":["1","2"]},"iw":{"Q":["2"],"n":["2"],"n.E":"2"},"ix":{"a7":["2"]},"fD":{"W":["1","2"]},"e9":{"h_":["1","2"],"fD":["1","2"],"iN":["1","2"],"W":["1","2"]},"dw":{"e6":["1"],"Q":["1"],"n":["1"]},"iH":{"dw":["1"],"e6":["1"],"Q":["1"],"n":["1"]},"fS":{"dw":["1"],"lT":["1"],"e6":["1"],"Q":["1"],"n":["1"]},"lu":{"a5":["f","@"],"W":["f","@"],"a5.K":"f","a5.V":"@"},"lv":{"a4":["f"],"Q":["f"],"n":["f"],"n.E":"f","a4.E":"f"},"jl":{"ev":["D<h>","f"]},"jG":{"ev":["f","D<h>"]},"hL":{"al":[]},"k7":{"al":[]},"k6":{"ev":["N?","f"]},"kY":{"ev":["f","D<h>"]},"ew":{"b4":["ew"]},"t":{"bg":[],"b4":["bg"]},"dT":{"b4":["dT"]},"h":{"bg":[],"b4":["bg"]},"D":{"Q":["1"],"n":["1"]},"bg":{"b4":["bg"]},"i1":{"fE":[]},"e6":{"Q":["1"],"n":["1"]},"f":{"b4":["f"],"pP":[]},"ln":{"B":[]},"jh":{"al":[]},"dA":{"al":[]},"ct":{"al":[]},"fJ":{"al":[]},"jZ":{"al":[]},"ih":{"al":[]},"kT":{"al":[]},"fP":{"al":[]},"jt":{"al":[]},"km":{"al":[]},"ia":{"al":[]},"lQ":{"d0":[]},"bl":{"CA":[]},"iP":{"kW":[]},"lK":{"kW":[]},"lj":{"kW":[]},"lt":{"w9":[]},"ef":{"w9":[]},"eJ":{"B":[]},"fq":{"B":[]},"fm":{"B":[]},"bt":{"dv":[]},"b8":{"dv":[]},"cB":{"dv":[]},"cw":{"dv":[]},"kn":{"dv":[]},"eC":{"B":[]},"jg":{"B":[]},"d4":{"B":[]},"fL":{"B":[]},"fs":{"B":[]},"jn":{"B":[]},"hn":{"B":[]},"fr":{"B":[]},"eM":{"B":[]},"eF":{"B":[]},"dz":{"B":[]},"ey":{"B":[]},"ce":{"B":[]},"i5":{"B":[]},"cS":{"B":[]},"fK":{"B":[]},"i2":{"Co":[]},"ls":{"c0":[]},"lR":{"c0":[]},"lD":{"Cn":[]},"lp":{"Bz":[]},"i9":{"B":[]},"bM":{"b4":["bM"]},"bJ":{"b4":["bJ"]},"fv":{"B":[]},"ip":{"B":[]},"hl":{"ak":[]},"lg":{"a8":[]},"jo":{"ak":[]},"lh":{"a8":[]},"jA":{"ak":[]},"lk":{"a8":[]},"ir":{"B":[]},"hs":{"ak":[]},"ll":{"a8":[]},"jD":{"ak":[]},"lm":{"a8":[]},"jV":{"ak":[]},"lr":{"a8":[]},"hP":{"ak":[]},"ly":{"a8":[]},"jp":{"Cm":[]},"i_":{"ak":[]},"lE":{"a8":[]},"kx":{"ak":[]},"lF":{"a8":[]},"kH":{"ak":[]},"lI":{"a8":[]},"kI":{"ak":[]},"lJ":{"a8":[]},"kL":{"ak":[]},"lM":{"a8":[]},"kK":{"ak":[]},"lL":{"a8":[]},"kZ":{"ak":[]},"lU":{"a8":[]},"l9":{"ak":[]},"lX":{"a8":[]},"jS":{"B":[]},"hy":{"B":[]},"hB":{"B":[]},"jU":{"B":[]},"eB":{"B":[]},"hz":{"B":[]},"eQ":{"B":[]},"d2":{"B":[]},"fl":{"B":[]},"jB":{"Bi":[]},"fx":{"B":[]},"fW":{"B":[]},"b7":{"B":[]},"jm":{"B":[]},"et":{"B":[]},"jx":{"B":[]},"jz":{"B":[]},"dG":{"dq":[]},"l7":{"BF":[]},"jk":{"B":[]},"cc":{"B":[]},"eA":{"B":[]},"iy":{"d9":[]},"ex":{"B":[]},"dj":{"B":[]},"dU":{"B":[]},"jN":{"B":[]},"dX":{"B":[]},"ko":{"B":[]},"kB":{"B":[]},"eL":{"B":[]},"cG":{"B":[]},"dy":{"B":[]},"bO":{"B":[]},"bz":{"B":[]},"k0":{"B":[]},"eX":{"B":[]},"cj":{"B":[]},"cM":{"B":[]},"cu":{"B":[]},"cN":{"B":[]},"dg":{"B":[]},"df":{"B":[]},"dO":{"B":[]},"dP":{"B":[]},"es":{"B":[]},"dN":{"B":[]},"dm":{"B":[]},"cP":{"B":[]},"cQ":{"B":[]},"dn":{"B":[]},"dl":{"B":[]},"dp":{"B":[]},"cd":{"B":[]},"dk":{"B":[]},"cv":{"B":[]},"je":{"B":[]},"bj":{"B":[]},"ci":{"B":[]},"e4":{"B":[]},"cD":{"B":[]},"bN":{"B":[]},"by":{"B":[]},"i7":{"B":[]},"bK":{"B":[]},"c2":{"B":[]},"c3":{"B":[]},"eb":{"B":[]},"d5":{"B":[]},"lC":{"Cr":[]},"BO":{"D":["h"],"Q":["h"],"n":["h"]},"ig":{"D":["h"],"Q":["h"],"n":["h"]},"CF":{"D":["h"],"Q":["h"],"n":["h"]},"BM":{"D":["h"],"Q":["h"],"n":["h"]},"we":{"D":["h"],"Q":["h"],"n":["h"]},"BN":{"D":["h"],"Q":["h"],"n":["h"]},"CE":{"D":["h"],"Q":["h"],"n":["h"]},"nP":{"D":["t"],"Q":["t"],"n":["t"]},"By":{"D":["t"],"Q":["t"],"n":["t"]}}'))
A.Dn(v.typeUniverse,JSON.parse('{"fR":1,"iU":2,"b5":1,"iH":1,"iO":1,"jw":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.Y
return{mq:s("cM"),dx:s("hj"),bC:s("cs"),v:s("b2"),iF:s("jj"),ul:s("df"),EL:s("cN"),xs:s("cu"),gc:s("dg"),z3:s("bJ"),Bu:s("fh"),p:s("aV"),rO:s("fk"),sU:s("dS"),hO:s("b4<@>"),CH:s("ho"),D:s("a3<f,f>"),I:s("a3<f,h>"),mJ:s("a3<f,D<f>>"),M:s("aL<f>"),f7:s("ew"),fP:s("bK"),ya:s("dT"),he:s("Q<@>"),yW:s("cc"),g:s("bV"),Ct:s("B"),yt:s("al"),hl:s("Z"),B:s("nP"),pH:s("aG"),Fr:s("cO"),BO:s("ez"),ls:s("bW<aq>"),vS:s("dk"),aJ:s("dl"),x:s("cd"),bK:s("dm"),gm:s("dn"),dn:s("cP"),mx:s("dp"),j_:s("cQ"),EJ:s("cR<bN,f>"),_:s("dq"),Eb:s("cv"),qX:s("dX"),mF:s("cU"),iO:s("cw"),oW:s("cV"),fl:s("cx"),FA:s("n<ho>"),CB:s("n<cW>"),yT:s("n<f>"),x6:s("n<bP>"),oJ:s("n<t>"),tY:s("n<@>"),uI:s("n<h>"),Fg:s("q<cs>"),jC:s("q<aV>"),km:s("q<fk>"),sa:s("q<ca>"),ns:s("q<jE>"),cO:s("q<jF>"),r:s("q<bV>"),uH:s("q<jJ>"),Dl:s("q<Z>"),iJ:s("q<bW<~>>"),pC:s("q<jP>"),C1:s("q<dq>"),ka:s("q<bh>"),Fm:s("q<eD>"),op:s("q<cT>"),hr:s("q<eE>"),s3:s("q<cw>"),sL:s("q<ae>"),Bv:s("q<k9>"),yH:s("q<fC>"),Bq:s("q<L<f,f>>"),rq:s("q<W<f,N>>"),A7:s("q<W<f,f>>"),cs:s("q<W<f,@>>"),a6:s("q<cW>"),p0:s("q<bZ>"),s6:s("q<bt>"),pq:s("q<ax>"),bA:s("q<ds>"),xz:s("q<bu>"),b4:s("q<hY>"),s0:s("q<eH>"),hc:s("q<cX>"),ea:s("q<dt>"),Fk:s("q<kr>"),J:s("q<bw>"),kv:s("q<eK>"),nR:s("q<+(f,D<bw>)>"),kd:s("q<+(f,f)>"),rh:s("q<+influence,light(t,bA)>"),wt:s("q<+(h,f)>"),wx:s("q<+(t,t,t,t)>"),e_:s("q<ak>"),u:s("q<a8>"),Ft:s("q<i2>"),C:s("q<O>"),h1:s("q<bx>"),s2:s("q<c0>"),eY:s("q<cE>"),xB:s("q<d_>"),El:s("q<fO>"),AM:s("q<aO<bJ>>"),fs:s("q<aO<bM>>"),cv:s("q<bA>"),DZ:s("q<e8>"),s:s("q<f>"),r8:s("q<bP>"),fa:s("q<c1>"),k:s("q<I>"),fi:s("q<j>"),ld:s("q<ik>"),Dc:s("q<dC>"),Fi:s("q<c4>"),jV:s("q<d6>"),yo:s("q<eV>"),E:s("q<dE>"),uk:s("q<bo>"),wf:s("q<iy>"),il:s("q<ee>"),l5:s("q<ed>"),ow:s("q<lA>"),j5:s("q<lB>"),pv:s("q<fV>"),Fy:s("q<ei<e2>>"),EM:s("q<ei<ch>>"),w_:s("q<ei<bx>>"),f2:s("q<ei<da>>"),Fa:s("q<fX>"),n:s("q<t>"),zz:s("q<@>"),t:s("q<h>"),Cf:s("q<N?>"),AN:s("q<bg>"),w:s("hF"),m:s("ae"),ud:s("e_"),Eh:s("bX<@>"),AQ:s("D<aV>"),hk:s("D<bV>"),b:s("D<bh>"),xp:s("D<cw>"),nx:s("D<ae>"),rW:s("D<W<f,f>>"),qr:s("D<bt>"),R:s("D<ax>"),fG:s("D<cX>"),Es:s("D<bw>"),DX:s("D<+(f,f)>"),pL:s("D<+(h,f)>"),xM:s("D<+(t,t,t,t)>"),bE:s("D<bx>"),fx:s("D<d_>"),a:s("D<f>"),uh:s("D<ik>"),D0:s("D<dC>"),cf:s("D<c4>"),p7:s("D<d6>"),dd:s("D<t>"),j:s("D<@>"),U:s("D<h>"),ik:s("D<ae?>"),m2:s("hN"),h6:s("L<f,aG>"),gI:s("L<f,cO>"),q:s("L<f,f>"),no:s("L<f,b8>"),AC:s("L<@,@>"),ou:s("L<h,f>"),pr:s("L<h,@>"),yx:s("L<f,D<f>>"),mf:s("W<f,dq>"),vD:s("W<f,cB>"),ap:s("W<f,ax>"),G:s("W<f,f>"),qH:s("W<f,dz>"),m0:s("W<f,l>"),gG:s("W<f,t>"),P:s("W<f,@>"),f:s("W<@,@>"),eU:s("W<h,f>"),pG:s("W<h,eT>"),tQ:s("W<h,eU>"),aD:s("W<f,D<+(t,t,t,t)>>"),Bx:s("W<f,D<f>>"),oZ:s("W<f,N?>"),q1:s("W<c3,D<c4>>"),ee:s("W<h,W<f,f>>"),jT:s("M<f,f?>"),w1:s("e2"),pw:s("cB"),jt:s("cW"),wl:s("bZ"),kc:s("bt"),rV:s("fF"),mV:s("eG"),c:s("aq"),K:s("N"),BB:s("bM"),A:s("ax"),oP:s("ds"),wJ:s("bj"),E4:s("bu"),A_:s("dt"),T:s("bw"),DL:s("hZ"),AB:s("kt"),yi:s("fH"),xK:s("e5"),Y:s("eK"),iM:s("Gy"),ep:s("+()"),k0:s("+(bt,ch)"),ut:s("+(b8,da)"),rf:s("+(t,t)"),mn:s("+influence,light(t,bA)"),tK:s("+effectiveScore,light,score(t,aV,t)"),nz:s("+(t,t,t,t)"),ez:s("i1"),wZ:s("a8"),lg:s("i3"),tc:s("cZ<cw,bx>"),ja:s("cZ<cB,e2>"),wm:s("cZ<bt,ch>"),qq:s("cZ<b8,da>"),j2:s("O"),m3:s("bx"),yz:s("c0"),W:s("cE"),F3:s("d_"),Q:s("e6<f>"),oG:s("e6<h>"),en:s("by"),gl:s("b_"),d:s("e7"),u5:s("bz"),bG:s("bO"),ho:s("fO"),EH:s("aO<bJ>"),E0:s("aO<bM>"),l:s("d0"),w8:s("e8"),qL:s("b7"),N:s("f"),Aj:s("b8"),jP:s("bP"),e:s("c1"),bp:s("dz"),sg:s("ag"),bs:s("dA"),qF:s("eS"),hL:s("e9<f,f>"),qt:s("kV"),eP:s("kW"),cV:s("I"),a7:s("j"),qY:s("bB"),L:s("bQ"),gM:s("c2"),hF:s("c3"),vw:s("eT"),BX:s("eU"),aA:s("dC"),AP:s("c4"),sy:s("l6"),bB:s("ba"),aS:s("d6"),fu:s("eV"),fw:s("G<bK>"),vL:s("G<cc>"),vK:s("G<cd>"),Fj:s("G<bz>"),rZ:s("G<bO>"),vY:s("G<f>"),r4:s("G<bB>"),g2:s("G<c2>"),cE:s("G<c3>"),rt:s("S<by>"),xG:s("S<b_>"),fh:s("S<bB>"),fW:s("dE"),hR:s("ar<@>"),BT:s("iv<N?,N?>"),Ez:s("d9"),rL:s("fU"),xT:s("ee"),wU:s("ed"),la:s("lz"),qS:s("iD"),jS:s("fY"),EF:s("bS<+(f,b8)>"),Br:s("bS<c0>"),V:s("iR"),h:s("iS"),y:s("l"),Bs:s("l()"),kr:s("l(bK)"),e2:s("l(cc)"),rg:s("l(cd)"),bl:s("l(N)"),pz:s("l(by)"),aV:s("l(b_)"),y2:s("l(bz)"),ty:s("l(bO)"),Ag:s("l(f)"),rd:s("l(bB)"),da:s("l(c2)"),qR:s("l(c3)"),i:s("t"),z:s("@"),pF:s("@()"),h_:s("@(N)"),nW:s("@(N,d0)"),S:s("h"),eZ:s("bW<aq>?"),r9:s("q<N?>?"),gt:s("ae?"),rK:s("D<@>?"),jd:s("W<f,D<f>>?"),X:s("N?"),dR:s("f?"),oI:s("f?(f)"),Fx:s("ig?"),F:s("dF<@,@>?"),Af:s("lw?"),k7:s("l?"),wK:s("l(fM)?"),u6:s("t?"),lo:s("h?"),s7:s("bg?"),Z:s("~()?"),Cv:s("~(dL)?"),kC:s("~(dM)?"),pf:s("~(fo)?"),hq:s("~(fw)?"),CA:s("~(dW)?"),hQ:s("~(bN)?"),Ci:s("~(by)?"),nf:s("~(bO,bz)?"),DI:s("~(f,t)?"),xl:s("~(l)?"),vR:s("~(h)?"),dt:s("~(h,f)?"),o:s("bg"),H:s("~"),O:s("~()"),m1:s("~(f,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.i4=J.k1.prototype
B.a=J.q.prototype
B.d=J.hE.prototype
B.c=J.fz.prototype
B.b=J.dZ.prototype
B.i5=J.e_.prototype
B.i6=J.hI.prototype
B.t=A.hQ.prototype
B.d9=A.hU.prototype
B.dn=J.kp.prototype
B.bM=J.eS.prototype
B.a9=new A.cM(1,"standard")
B.K=new A.jd(B.a9)
B.bR=new A.cM(0,"concise")
B.bS=new A.cM(2,"verbose")
B.ap=new A.dL(null,null,null,null,null)
B.ni=new A.je(0,"none")
B.nj=new A.jg(0,"opaque")
B.dZ=new A.jk(4,"ambience")
B.bW=new A.cu(3,"mono")
B.aM=new A.dg(0,"full")
B.bV=new A.cu(0,"auto")
B.bU=new A.cN(1,"standard")
B.bT=new A.df(0,"defaultMix")
B.aN=new A.dM(B.bV,B.bU,B.aM,B.bT)
B.aE=new A.kB(1,"pixeldart")
B.e5=new A.hk(B.aE,!1,!0,!1,null,!1,null)
B.bY=new A.dN(1,"capturing")
B.e6=new A.dh(B.bY,null)
B.bZ=new A.dN(3,"rejected")
B.aO=new A.dh(B.bZ,null)
B.c_=new A.dN(4,"applied")
B.bX=new A.dh(B.c_,null)
B.c0=new A.dN(5,"cancelled")
B.e7=new A.dh(B.c0,null)
B.aP=new A.dN(2,"conflict")
B.aq=new A.jm(0,"add")
B.eb=new A.et(0,"zero")
B.aa=new A.et(1,"one")
B.ab=new A.jn(0,"alpha")
B.G=new A.dO(1,"button")
B.p=new A.dP(0,"normal")
B.ee=new A.b3("settings.back",B.G,"back","back to pause menu",B.p)
B.ar=new A.dO(0,"heading")
B.ef=new A.b3("settings.heading",B.ar,"Settings",null,B.p)
B.eg=new A.b3("settings.controls.heading",B.ar,"Controls",null,B.p)
B.eh=new A.b3("settings.controls.back",B.G,"back","back to settings categories",B.p)
B.ei=new A.b3("pause.heading",B.ar,"Paused",null,B.p)
B.ej=new A.dO(3,"slider")
B.ek=new A.dO(4,"toggle")
B.c1=new A.dO(5,"keybind")
B.as=new A.dP(5,"disabled")
B.el=new A.dP(6,"error")
B.em=new A.dP(7,"destructive")
B.c2=new A.dP(8,"remapping")
B.c3=new A.hj()
B.en=new A.mW()
B.nk=new A.mY()
B.eo=new A.jl()
B.c4=new A.n9()
B.ep=new A.hu(A.Y("hu<0&>"))
B.c5=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.eq=function() {
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
B.ev=function(getTagFallback) {
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
B.er=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.eu=function(hooks) {
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
B.et=function(hooks) {
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
B.es=function(hooks) {
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
B.c6=function(hooks) { return hooks; }

B.l=new A.k6()
B.nl=new A.pc()
B.ew=new A.km()
B.nm=new A.pZ()
B.ex=new A.q_()
B.c7=new A.q1()
B.ey=new A.d_()
B.aF=new A.cj(1,"gradeLUT")
B.ez=new A.d_()
B.eA=new A.qo()
B.eB=new A.qq()
B.f=new A.qv()
B.c8=new A.kY()
B.mp=new A.d4(0,"position")
B.mu=new A.bB(B.mp,0,3)
B.dR=new A.d4(1,"normal")
B.mv=new A.bB(B.dR,3,3)
B.mq=new A.d4(2,"color")
B.mw=new A.bB(B.mq,6,4)
B.mr=new A.d4(4,"alpha")
B.mx=new A.bB(B.mr,10,1)
B.ms=new A.d4(5,"uv0")
B.my=new A.bB(B.ms,11,2)
B.mt=new A.d4(8,"legacyMaterialEffect")
B.mz=new A.bB(B.mt,13,1)
B.W=s([B.mu,B.mv,B.mw,B.mx,B.my,B.mz],A.Y("q<bB>"))
B.ac=new A.rz()
B.aQ=new A.lt()
B.x=new A.lG()
B.at=new A.lQ()
B.eC=new A.fi(1.3089969389957472,0.1,60)
B.eD=new A.fi(1.0471975511965976,0.1,60)
B.eE=new A.fi(0.8726646259971648,0.08,45)
B.S=new A.fl(0,"colorOnly")
B.c9=new A.fl(1,"colorAndDepth")
B.aR=new A.fl(2,"depthOnly")
B.eF=new A.hn(0,"linear")
B.aS=new A.hn(1,"srgb")
B.ca=new A.fm(0,"open")
B.eG=new A.fm(1,"committed")
B.eH=new A.fm(2,"aborted")
B.aT=new A.fq(0,"open")
B.eO=new A.fq(1,"committed")
B.eP=new A.fq(2,"rolledBack")
B.au=new A.jx(1,"back")
B.av=new A.jz(0,"less")
B.eQ=new A.fr(0,"off")
B.cb=new A.fr(1,"errorsOnly")
B.eR=new A.fr(2,"full")
B.aw=new A.bK(0,"open")
B.cc=new A.bK(1,"chain")
B.cd=new A.bK(2,"throughDoor")
B.ce=new A.bK(3,"letterbox")
B.ad=new A.bK(4,"ignore")
B.T=new A.fs(0,"opaque")
B.eS=new A.fs(1,"masked")
B.aU=new A.fs(2,"blended")
B.eT=new A.ft(!1,B.av,!1,!0,B.aa,B.aa,B.aq,!1,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eU=new A.ft(!0,B.av,!1,!0,B.aa,B.aa,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.ec=new A.et(2,"srcAlpha")
B.ed=new A.et(3,"oneMinusSrcAlpha")
B.eV=new A.ft(!0,B.av,!1,!0,B.ec,B.ed,B.aq,!0,B.au,!0,!1,!0,!0,!0,!0,!1)
B.eW=new A.dT(0)
B.eX=new A.dT(24e5)
B.cf=new A.cc(0,"compliance")
B.eY=new A.fu(B.cf)
B.cg=new A.cc(1,"rupture")
B.eZ=new A.fu(B.cg)
B.ch=new A.cc(2,"synchronisation")
B.f_=new A.fu(B.ch)
B.ci=new A.ex(0,"front")
B.f0=new A.ex(1,"rearService")
B.f1=new A.ex(2,"sideBoundary")
B.f2=new A.ex(3,"roofline")
B.n=new A.dU(0,"north")
B.A=new A.dU(1,"east")
B.m=new A.dU(2,"south")
B.C=new A.dU(3,"west")
B.f3=new A.jN(0,"ground")
B.f4=new A.dj(0,"mantle")
B.f5=new A.dj(1,"portal")
B.f7=new A.dj(3,"inventory")
B.cj=new A.dj(4,"aftermath")
B.f6=new A.dj(2,"window")
B.f9=new A.dV(B.f6,"shutter","the shutter")
B.f8=new A.dj(5,"none")
B.fa=new A.dV(B.f8,null,null)
B.fb=new A.H("saved mantle history is malformed",null,null)
B.fc=new A.H("rupture elapsed time is malformed",null,null)
B.fd=new A.H("presentation keys must be strings",null,null)
B.fe=new A.H("unsupported accessibility profile",null,null)
B.ff=new A.H("inventory inspections must be an object",null,null)
B.ck=new A.H("saved mantle state is malformed",null,null)
B.fg=new A.H("inactive rupture has elapsed time",null,null)
B.fh=new A.H("control sensitivity is outside 0.1\u20133.0",null,null)
B.fi=new A.H("invalid action bindings",null,null)
B.fj=new A.H("listener room is empty",null,null)
B.fk=new A.H("control bindings conflict",null,null)
B.fl=new A.H("saved difficulty state is malformed",null,null)
B.fm=new A.H("saved house drift state is malformed",null,null)
B.fn=new A.H("saved sleep record is malformed",null,null)
B.fo=new A.H("UI scale must be between 0.8 and 2.0",null,null)
B.fp=new A.H("unsupported settings store",null,null)
B.fq=new A.H("settings values must be an object",null,null)
B.fr=new A.H("saved day-loop sleepHistory must be a list",null,null)
B.fs=new A.H("invalid anisotropy limit",null,null)
B.ft=new A.H("audio event position is not finite",null,null)
B.fu=new A.H("event sequence must be non-negative",null,null)
B.fv=new A.H("inventory inspection counts are invalid",null,null)
B.fw=new A.H("only keybinds can be remapping",null,null)
B.fx=new A.H("listener position is not finite",null,null)
B.fy=new A.H("invalid action ID",null,null)
B.fz=new A.H("saved window state is malformed",null,null)
B.fA=new A.H("unsupported graphics preset",null,null)
B.fB=new A.H("save run and meta must be objects",null,null)
B.fC=new A.H("saved house state is malformed",null,null)
B.fD=new A.H("saved sleep record must be an object",null,null)
B.fE=new A.H("sound cue must be a non-empty string",null,null)
B.fF=new A.H("saved session run is malformed",null,null)
B.fG=new A.H("save map keys must be strings",null,null)
B.fH=new A.H("unsupported graphics profile",null,null)
B.fI=new A.H("unsupported audio options",null,null)
B.fJ=new A.H("transform.scale must be positive",null,null)
B.fK=new A.H("Escape is reserved for pause navigation",null,null)
B.fL=new A.H("saved day-loop state is malformed",null,null)
B.fM=new A.H("rupture extinguished mantle is unknown",null,null)
B.cl=new A.H("unsupported controls profile",null,null)
B.cm=new A.H("saved portal state is malformed",null,null)
B.fN=new A.H("acoustic portal profile is not finite",null,null)
B.fO=new A.H("saved house state does not match this house",null,null)
B.fP=new A.H("presentation snapshot contains a non-finite number",null,null)
B.fQ=new A.H("unsupported gameplay settings profile",null,null)
B.fR=new A.H("save contains a non-finite number",null,null)
B.fS=new A.H("unsupported graphics store",null,null)
B.fT=new A.H("brush component needs an id and label",null,null)
B.fU=new A.H("text.json root must be an object",null,null)
B.fV=new A.H("event kind is empty",null,null)
B.fW=new A.H("invalid control binding token",null,null)
B.fX=new A.H("audio transmission muffle is invalid",null,null)
B.fY=new A.H("acoustic portal muffle order is invalid",null,null)
B.fZ=new A.H("unsupported settings profile",null,null)
B.h_=new A.H("saved session clock is malformed",null,null)
B.h0=new A.H("rupture mantle IDs are malformed",null,null)
B.h1=new A.H("invalid gameplay setting: contextualReminders",null,null)
B.h2=new A.H("invalid screen-reader verbosity",null,null)
B.h3=new A.H("saved sleep record has an unknown enum",null,null)
B.h4=new A.H("audio cue variants are empty",null,null)
B.h5=new A.H("save root must be an object",null,null)
B.h6=new A.H("audio event identity is empty",null,null)
B.h7=new A.H("render capabilities contain invalid limits",null,null)
B.h8=new A.H("saved house overrides are malformed",null,null)
B.V=new A.bY(0,0,0)
B.cM=new A.bY(1,1,1)
B.iV=s([],t.Fk)
B.bc=s([],t.cv)
B.h9=new A.jO(B.V,B.V,0,1,null,null,B.cM,0,null,B.iV,B.bc)
B.cn=new A.aG(0,0,0)
B.ha=new A.ey(0,"idle")
B.ax=new A.ey(1,"active")
B.hb=new A.ey(2,"ended")
B.hc=new A.ey(3,"aborted")
B.co=new A.fv(0,"outside")
B.hd=new A.fv(1,"intersects")
B.he=new A.fv(2,"inside")
B.hf=new A.eA(0,"timeAdvanced")
B.hg=new A.eA(1,"dayEndReached")
B.hh=new A.eA(4,"slept")
B.hi=new A.eA(5,"complianceFloorTripped")
B.aV=new A.dk(0,"twentyFourHour")
B.cp=new A.dk(1,"twelveHour")
B.cq=new A.dl(0,"important")
B.cr=new A.dl(1,"always")
B.aW=new A.cd(0,"pauseAndMute")
B.cs=new A.dm(0,"press")
B.ct=new A.dm(1,"hold")
B.cu=new A.dn(0,"compact")
B.cv=new A.dn(1,"spacious")
B.cw=new A.cP(1,"standard")
B.cx=new A.cP(2,"detailed")
B.cy=new A.dp(0,"toast")
B.cz=new A.dp(1,"detailed")
B.cA=new A.cQ(1,"readable")
B.ho=new A.hy(0,"vertex")
B.cB=new A.hy(1,"indices")
B.cC=new A.jS(0,"staticDraw")
B.h=new A.hz(0,"ready")
B.U=new A.hz(1,"lost")
B.ae=new A.fx(0,"prepared")
B.hp=new A.fx(1,"committed")
B.hq=new A.fx(2,"rolledBack")
B.hr=new A.eB(0,"color")
B.cD=new A.eB(1,"colorAndGlow")
B.hs=new A.eB(2,"colorDepthGlow")
B.aX=new A.eB(3,"depthOnly")
B.aY=new A.hB(1,"linear")
B.cE=new A.jU(0,"clampToEdge")
B.ht=new A.jT(1,1,1,!1,B.aY,B.aY,B.cE,1)
B.aZ=new A.hB(2,"linearMipmapLinear")
B.hu=new A.cS(0,"beforeShadow")
B.hv=new A.cS(2,"beforeDepth")
B.cF=new A.cS(3,"afterDepth")
B.cG=new A.cS(4,"beforeWorld")
B.hw=new A.cS(5,"afterWorld")
B.L=new A.cS(6,"afterResolve")
B.hx=new A.cS(9,"beforePresent")
B.cH=new A.ce(0,"readBeforeWrite")
B.hy=new A.ce(1,"duplicateWriter")
B.hz=new A.ce(2,"sampledMultisampledAttachment")
B.b_=new A.ce(3,"invalidResolve")
B.hA=new A.ce(4,"formatOrSizeMismatch")
B.hB=new A.ce(5,"unversionedReadWrite")
B.hC=new A.ce(6,"invalidHistoryRead")
B.hD=new A.ce(7,"dependencyCycle")
B.hE=new A.ce(8,"missingCapability")
B.cI=new A.cv(0,"high")
B.b0=new A.cv(1,"standard")
B.b1=new A.dW(1,B.b0,"auto",!1,"display","off","high","srgb","full","profile")
B.ay=new A.dX(0,"player")
B.b2=new A.dX(1,"inserted")
B.cJ=new A.dX(2,"warden")
B.cK=new A.eC(0,"wrongKind")
B.cL=new A.eC(1,"staleGeneration")
B.hH=new A.eC(2,"doubleRelease")
B.az=new A.eC(3,"releasedResource")
B.hK=new A.cT("kitchen-range","settle")
B.hL=new A.cT("front-door-knocker","knock")
B.hM=new A.cT("cellar-drain","drip")
B.hN=new A.cT("bedroom-timber","creak")
B.hO=new A.cT("kitchen-pipe","tick")
B.hP=new A.cT("bathroom-cistern","settle")
B.hQ=new A.cT("landing-window","wind")
B.i3=new A.k0(1,"visitor")
B.i7=new A.p9(null)
B.i8=new A.pa(null)
B.b3=new A.k8(!1,0,0.85,0.92,1)
B.i9=new A.bY(0.008,0.012,0.024)
B.cN=s([0,2,2,3],t.t)
B.ia=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.b4=s([B.cq,B.cr],A.Y("q<dl>"))
B.ib=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.b5=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.F=new A.by(0,"audio")
B.P=new A.i7(0,"level")
B.lG=new A.b_("master","Master",B.F,B.P,1,0,1,"audio")
B.lL=new A.b_("voice","Visitor voice",B.F,B.P,1,0,1,"audio")
B.lC=new A.b_("effects","Effects",B.F,B.P,1,0,1,"audio")
B.lD=new A.b_("ambience","House ambience",B.F,B.P,1,0,1,"audio")
B.lH=new A.b_("music","Music",B.F,B.P,1,0,1,"audio")
B.aG=new A.by(1,"display")
B.lK=new A.b_("brightness","Display brightness",B.aG,B.P,1,0.6,1.4,"display")
B.ah=new A.i7(1,"toggle")
B.lF=new A.b_("muted","Mute house audio",B.F,B.ah,!1,null,null,"audio")
B.a4=new A.by(2,"accessibility")
B.lI=new A.b_("mono","Mono-compatible mix",B.a4,B.ah,!1,null,null,"audio")
B.lE=new A.b_("high-contrast","High-contrast interface",B.a4,B.ah,!1,null,null,"display")
B.lJ=new A.b_("strong-highlights","Strong focus highlights",B.a4,B.ah,!1,null,null,"display")
B.D=s([B.lG,B.lL,B.lC,B.lD,B.lH,B.lK,B.lF,B.lI,B.lE,B.lJ],A.Y("q<b_>"))
B.B=s(["who","verb","object","place","time"],t.s)
B.ic=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.l4=new A.cl(["floor-wood","living-room","wallpaper-stripes",0,0])
B.l_=new A.cl(["floor-linoleum","hall","wallpaper-damask",5,0])
B.l3=new A.cl(["floor-tiles","kitchen","wallpaper-tiles",10,0])
B.l1=new A.cl(["floor-concrete","cellar","wallpaper-damp",15,0])
B.l5=new A.cl(["floor-wood","bedroom","wallpaper-faded",0,6])
B.l0=new A.cl(["floor-concrete","landing","wallpaper-peeling",5,6])
B.l2=new A.cl(["floor-tiles","bathroom","wallpaper-tiles",10,6])
B.l6=new A.cl(["floor-linoleum","spare-room","wallpaper-stripes",15,6])
B.id=s([B.l4,B.l_,B.l3,B.l1,B.l5,B.l0,B.l2,B.l6],A.Y("q<+floor,id,wall,x,z(f,f,f,t,t)>"))
B.e_=new A.df(1,"strong")
B.b6=s([B.bT,B.e_],A.Y("q<df>"))
B.e8=new A.es(0,"swap")
B.e9=new A.es(1,"replace")
B.ea=new A.es(2,"cancel")
B.ie=s([B.e8,B.e9,B.ea],A.Y("q<es>"))
B.ih=s([2,5,9,12,16,19],t.t)
B.hj=new A.cd(1,"pauseOnly")
B.hk=new A.cd(2,"continuePlayback")
B.aA=s([B.aW,B.hj,B.hk],A.Y("q<cd>"))
B.ii=s(["uQuantizationBits","uDitherStrength"],t.s)
B.il=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.im=s([B.aw,B.cc,B.cd,B.ce,B.ad],A.Y("q<bK>"))
B.io=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.iq=s(["30","60","display"],t.s)
B.ao=new A.c3(0,"full")
B.bO=new A.c3(1,"compressed")
B.bP=new A.c3(2,"off")
B.cO=s([B.ao,B.bO,B.bP],A.Y("q<c3>"))
B.b7=s([B.aV,B.cp],A.Y("q<dk>"))
B.ir=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e4=new A.dg(1,"reduced")
B.b8=s([B.aM,B.e4],A.Y("q<dg>"))
B.e0=new A.cN(0,"wide")
B.e1=new A.cN(2,"night")
B.b9=s([B.e0,B.bU,B.e1],A.Y("q<cN>"))
B.is=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.iD=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cP=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.ba=s([B.cu,B.cv],A.Y("q<dn>"))
B.lZ=new A.bO(0,"long")
B.dG=new A.bO(1,"short")
B.cQ=s([B.lZ,B.dG],A.Y("q<bO>"))
B.eM=new A.ca("1 - 9","Select Response",!0)
B.eI=new A.ca("SPACE","Silence Ring",!1)
B.iG=s([B.eM,B.eI],t.sa)
B.Z=new A.bN(0,"visual")
B.bp=new A.bN(1,"graphics")
B.a_=new A.bN(2,"gameplay")
B.bq=new A.bN(3,"controls")
B.H=new A.bN(4,"audio")
B.I=new A.bN(5,"accessibility")
B.iH=s([B.Z,B.bp,B.a_,B.bq,B.H,B.I],A.Y("q<bN>"))
B.iI=s(["master","voice","effects","ambience","music"],t.s)
B.bb=s([B.cy,B.cz],A.Y("q<dp>"))
B.hF=new A.cv(2,"safe")
B.hG=new A.cv(3,"custom")
B.cR=s([B.cI,B.b0,B.hF,B.hG],A.Y("q<cv>"))
B.E=new A.cj(0,"inactive")
B.bA=new A.cj(2,"affineWarp")
B.dz=new A.cj(3,"vertexSnap")
B.bB=new A.cj(4,"tapeGiveup")
B.bC=new A.cj(5,"portalFail")
B.a2=new A.cj(6,"lightsOut")
B.cS=s([B.E,B.aF,B.bA,B.dz,B.bB,B.bC,B.a2],A.Y("q<cj>"))
B.iK=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iL=s([B.ay,B.b2,B.cJ],A.Y("q<dX>"))
B.iM=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.nd=new A.bo("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.nc=new A.bo("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.n8=new A.bo("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.ng=new A.bo("ronnie.response","named","A route card has Ronnie written on its back.")
B.nf=new A.bo("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.iN=s([B.nd,B.nc,B.n8,B.ng,B.nf],t.uk)
B.ne=new A.bo("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.nb=new A.bo("ronnie.response","named","The name Ronnie holds when the room does not.")
B.n9=new A.bo("denise.revision","accepted","One correction remains yours to protect.")
B.n6=new A.bo("attercliffe.plate","kept","A second place survives the room changing around it.")
B.iO=s([B.ne,B.nb,B.n9,B.n6],t.uk)
B.iU=s([],t.cO)
B.j_=s([],t.Fm)
B.iZ=s([],t.op)
B.iP=s([],A.Y("q<cx>"))
B.iT=s([],t.b4)
B.X=s([],t.J)
B.j0=s([],t.u)
B.cU=s([],t.xB)
B.iQ=s([],t.El)
B.o=s([],t.s)
B.cV=s([],t.ld)
B.iY=s([],t.E)
B.iR=s([],t.t)
B.iS=s([],t.zz)
B.hJ=new A.hD(15,"kitchen",-0.3,0)
B.hI=new A.hD(19,"spare-room",0,0.3)
B.M=s([B.hJ,B.hI],A.Y("q<hD>"))
B.j2=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lW=new A.bz(0,"bed")
B.lX=new A.bz(1,"chair")
B.lY=new A.bz(2,"floor")
B.cW=s([B.lW,B.lX,B.lY],A.Y("q<bz>"))
B.j3=s(["high","medium","low"],t.s)
B.e2=new A.cu(1,"headphones")
B.e3=new A.cu(2,"speakers")
B.bd=s([B.bV,B.e2,B.e3,B.bW],A.Y("q<cu>"))
B.j4=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.be=s([B.cs,B.ct],A.Y("q<dm>"))
B.bo=new A.ci(0,"root")
B.dc=new A.bj(0,"pauseMenu")
B.kd=new A.ds(B.bo,B.dc,null)
B.j5=s([B.kd],t.bA)
B.bf=s([B.bR,B.a9,B.bS],A.Y("q<cM>"))
B.hm=new A.cQ(0,"instant")
B.hn=new A.cQ(2,"slow")
B.bg=s([B.hm,B.cA,B.hn],A.Y("q<cQ>"))
B.j6=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.j7=s([B.F,B.aG,B.a4],A.Y("q<by>"))
B.cX=s([B.n,B.A,B.m,B.C],A.Y("q<dU>"))
B.Q=new A.dy(0,"pbrMaterial")
B.a5=new A.dy(1,"shadowsAndOcclusion")
B.ai=new A.dy(2,"surfaceWeathering")
B.k=new A.dy(3,"atmosphereAndPost")
B.lT=new A.dy(4,"debugView")
B.bh=s([B.Q,B.a5,B.ai,B.k,B.lT],A.Y("q<dy>"))
B.bD=new A.b7(0,"depthTest")
B.bE=new A.b7(1,"depthFunc")
B.bF=new A.b7(2,"depthWrite")
B.bG=new A.b7(3,"blendEnable")
B.bH=new A.b7(4,"blendFunc")
B.bI=new A.b7(5,"blendEquation")
B.bJ=new A.b7(6,"cullEnable")
B.bK=new A.b7(7,"cullFace")
B.dJ=new A.b7(8,"frontFace")
B.m1=new A.b7(9,"stencilEnable")
B.dH=new A.b7(10,"colorMask")
B.dI=new A.b7(11,"scissorEnable")
B.j9=s([B.bD,B.bE,B.bF,B.bG,B.bH,B.bI,B.bJ,B.bK,B.dJ,B.m1,B.dH,B.dI],A.Y("q<b7>"))
B.aH=new A.cG(0,"none")
B.lN=new A.cG(1,"albedoOnly")
B.lO=new A.cG(2,"normalsOnly")
B.lP=new A.cG(3,"roughnessOnly")
B.lQ=new A.cG(4,"metallicOnly")
B.lR=new A.cG(5,"aoOnly")
B.lS=new A.cG(6,"wireframeOnly")
B.cY=s([B.aH,B.lN,B.lO,B.lP,B.lQ,B.lR,B.lS],A.Y("q<cG>"))
B.ja=s(["off","errors","full"],t.s)
B.jb=s(["off","fxaa","msaa2","msaa4"],t.s)
B.jc=s(["off","profile","standard","high"],t.s)
B.jd=s(["srgb","linear"],t.s)
B.je=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.jf=s(["uBloomStrength"],t.s)
B.jg=s(["uLutSize","uStrength"],t.s)
B.jh=s([B.cf,B.cg,B.ch],A.Y("q<cc>"))
B.ji=s(["uTexelSize","uNear","uFar"],t.s)
B.cZ=s(["uTexelStep"],t.s)
B.jj=s(["uninitialized"],t.s)
B.hl=new A.cP(0,"minimal")
B.bi=s([B.hl,B.cw,B.cx],A.Y("q<cP>"))
B.na=new A.bo("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.n5=new A.bo("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.n4=new A.bo("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.n7=new A.bo("ronnie.response","named","The route card gives one name its own line.")
B.jl=s([B.na,B.n5,B.n4,B.n7],t.uk)
B.a7=new A.c2(0,"waiting")
B.am=new A.c2(1,"atDoor")
B.an=new A.c2(2,"consulting")
B.aI=new A.c2(3,"resolved")
B.jn=s([B.a7,B.am,B.an,B.aI],A.Y("q<c2>"))
B.eN=new A.ca("W A S D","Move",!1)
B.eL=new A.ca("TAB","Journal",!1)
B.eK=new A.ca("CAPS","Shader Lab",!1)
B.eJ=new A.ca("ESC","Pause",!1)
B.jo=s([B.eN,B.eL,B.eK,B.eJ],t.sa)
B.jp=s(["floor-linoleum","ceiling-stained"],t.s)
B.k3={uAlbedo:0}
B.d_=new A.a3(B.k3,[0],t.I)
B.ka={uSsaoRaw:0,uSceneDepth:1}
B.jq=new A.a3(B.ka,[0,1],t.I)
B.da={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.iC=s(["KeyW","GamepadDpadUp"],t.s)
B.iB=s(["KeyS","GamepadDpadDown"],t.s)
B.it=s(["KeyA","GamepadDpadLeft"],t.s)
B.iu=s(["KeyD","GamepadDpadRight"],t.s)
B.iv=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.iz=s(["KeyQ","GamepadB"],t.s)
B.iE=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.j1=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.iA=s(["KeyR","GamepadX"],t.s)
B.iw=s(["KeyF","GamepadRB"],t.s)
B.ix=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.iy=s(["KeyL"],t.s)
B.ij=s(["Escape","GamepadMenu"],t.s)
B.jr=new A.a3(B.da,[B.iC,B.iB,B.it,B.iu,B.iv,B.iz,B.iE,B.j1,B.iA,B.iw,B.ix,B.iy,B.ij],t.mJ)
B.js=new A.a3(B.da,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.D)
B.k7={uScene:0,uHistory:1}
B.jt=new A.a3(B.k7,[0,1],t.I)
B.jI={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.ju=new A.a3(B.jI,["2e2444bc283310eb7aa87bcca6252c1bf22583ae","f7b4628701e3961a6cb7b24037a5f5f57d4295b5","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.D)
B.jU={aPosition:0,aUvMat:1}
B.d0=new A.a3(B.jU,[0,4],t.I)
B.k8={uScene:0,uLut:1}
B.jv=new A.a3(B.k8,[0,1],t.I)
B.k9={uSource:0}
B.d1=new A.a3(B.k9,[0],t.I)
B.k1={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.jw=new A.a3(B.k1,[0,1,2,3,4,5,6],t.I)
B.d2=new A.cR([B.Z,"settings.visual",B.bp,"settings.graphics",B.a_,"settings.gameplay",B.bq,"settings.controls",B.H,"settings.audio",B.I,"settings.accessibility"],t.EJ)
B.d3=new A.cR([B.Z,"visual",B.bp,"graphics",B.a_,"gameplay",B.bq,"controls",B.H,"audio",B.I,"accessibility"],t.EJ)
B.jQ={uSharp:0,uBlurred:1,uSceneDepth:2}
B.jx=new A.a3(B.jQ,[0,1,2],t.I)
B.k0={"living-room":0,hall:1,kitchen:2,cellar:3,bedroom:4,landing:5,bathroom:6,"spare-room":7}
B.iF=s(["hall-living"],t.s)
B.ik=s(["front-door","hall-living","hall-kitchen","hall-landing"],t.s)
B.ip=s(["hall-kitchen","kitchen-living","kitchen-bathroom"],t.s)
B.jk=s(["cellar-service"],t.s)
B.iJ=s(["bedroom-service"],t.s)
B.j8=s(["hall-landing","landing-bedroom","landing-bathroom"],t.s)
B.jm=s(["landing-bathroom","kitchen-bathroom"],t.s)
B.ig=s(["spare-service"],t.s)
B.jy=new A.a3(B.k0,[B.iF,B.ik,B.ip,B.jk,B.iJ,B.j8,B.jm,B.ig],t.mJ)
B.kc={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.jz=new A.a3(B.kc,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.D)
B.jW={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.i_=new A.bi("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hV=new A.bi("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.hZ=new A.bi("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.i1=new A.bi("wallpaper-damp","grime",7106925,0.94,0.76)
B.hW=new A.bi("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.i0=new A.bi("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.i2=new A.bi("wallpaper-peeling","grime",9340536,0.91,0.68)
B.hX=new A.bi("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hT=new A.bi("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hU=new A.bi("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hR=new A.bi("floor-concrete","grime",7828331,0.96,0.92)
B.hS=new A.bi("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.hY=new A.bi("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.bj=new A.a3(B.jW,[B.i_,B.hV,B.hZ,B.i1,B.hW,B.i0,B.i2,B.hX,B.hT,B.hU,B.hR,B.hS,B.hY],A.Y("a3<f,bi>"))
B.k4={uBloom:0}
B.jA=new A.a3(B.k4,[0],t.I)
B.k5={uSceneDepth:0}
B.jB=new A.a3(B.k5,[0],t.I)
B.k6={uScene:0}
B.jC=new A.a3(B.k6,[0],t.I)
B.N={}
B.d5=new A.a3(B.N,[],A.Y("a3<f,hj>"))
B.d4=new A.a3(B.N,[],t.D)
B.bk=new A.a3(B.N,[],A.Y("a3<f,t>"))
B.y=new A.a3(B.N,[],t.I)
B.nn=new A.a3(B.N,[],A.Y("a3<f,f?>"))
B.jD=new A.a3(B.N,[],A.Y("a3<@,@>"))
B.jL={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jE=new A.a3(B.jL,[0,1,2,3,4,5,6],t.I)
B.dd=new A.cD(0,"resume")
B.de=new A.cD(1,"settings")
B.df=new A.cD(2,"controls")
B.dg=new A.cD(3,"save")
B.dh=new A.cD(4,"help")
B.di=new A.cD(5,"credits")
B.dj=new A.cD(6,"back")
B.jF=new A.cR([B.dd,"pause.resume",B.de,"pause.settings",B.df,"pause.controls",B.dg,"pause.save",B.dh,"pause.help",B.di,"pause.credits",B.dj,"pause.back"],A.Y("cR<cD,f>"))
B.jY={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jG=new A.a3(B.jY,[0,1,2,3],t.I)
B.kb={uTex:0}
B.jH=new A.a3(B.kb,[0],t.I)
B.bl=new A.cR([B.aF,1,B.bA,1.5,B.dz,1.5,B.bB,2,B.bC,2,B.a2,4],A.Y("cR<cj,t>"))
B.bm=new A.eF(0,"resident")
B.d6=new A.eF(1,"pending")
B.d7=new A.eF(2,"missing")
B.d8=new A.eF(3,"evicted")
B.iW=s([],t.bA)
B.iX=s([],A.Y("q<bj>"))
B.bn=new A.e3(B.iW,B.iX,null)
B.db=new A.ci(1,"settings")
B.ke=new A.ci(2,"visual")
B.kf=new A.ci(3,"graphics")
B.kg=new A.ci(4,"gameplay")
B.kh=new A.ci(5,"controls")
B.ki=new A.ci(6,"audio")
B.kj=new A.ci(7,"accessibility")
B.kk=new A.ci(8,"credits")
B.Y=new A.bj(1,"settings")
B.kl=new A.bj(2,"journal")
B.km=new A.bj(3,"sleep")
B.kn=new A.bj(4,"help")
B.ko=new A.bj(5,"visitor")
B.kp=new A.bj(6,"ending")
B.dk=new A.e4(0,"opened")
B.dl=new A.e4(2,"backed")
B.dm=new A.e4(3,"resumed")
B.kq=new A.e4(4,"dismissed")
B.a0=new A.e4(5,"unchanged")
B.kr=new A.bu("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.ks=new A.bu("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.kt=new A.bu("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.ku=new A.bu("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.kv=new A.bu("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.kw=new A.bu("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.kx=new A.bu("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.ky=new A.bu("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.kz=new A.bu("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.kA=new A.kn(0,1,null)
B.kC=new A.ko(1,"high")
B.kB=new A.q0(!1,!0,!0,!0,!1,B.kC,35,256)
B.kD=new A.ks(1,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.br=new A.eJ(0,"safe")
B.O=new A.eJ(1,"standard")
B.a1=new A.eJ(2,"high")
B.a3=new A.aL(B.N,0,t.M)
B.af=new A.e5(B.br,B.a3)
B.k2={shadows:0}
B.lB=new A.aL(B.k2,1,t.M)
B.dp=new A.e5(B.O,B.lB)
B.jN={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.lt=new A.aL(B.jN,5,t.M)
B.dq=new A.e5(B.a1,B.lt)
B.kE=new A.eJ(4,"shipping")
B.jP={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.lu=new A.aL(B.jP,7,t.M)
B.no=new A.e5(B.kE,B.lu)
B.kG=new A.aQ(0,1)
B.kH=new A.b0(0.35,0.52,0.88)
B.kI=new A.az(0.46,0.25,0.2)
B.dr=new A.b0(0.22,0.45,0.92)
B.kJ=new A.az(0.48,0.4,0.34)
B.kK=new A.az(0.31,0.25,0.23)
B.bs=new A.b0(0.75,0.52,0.42)
B.kL=new A.b0(0.4,0.65,0.95)
B.bt=new A.b0(0.88,0.96,1)
B.kM=new A.az(0.37,0.33,0.31)
B.kN=new A.b0(0.62,0.48,0.45)
B.kO=new A.az(0.34,0.32,0.29)
B.ds=new A.az(0.38,0.25,0.19)
B.bu=new A.b0(0.9,0.8,0.72)
B.aB=new A.b0(0.28,0.16,0.12)
B.kP=new A.az(0.31,0.28,0.24)
B.aC=new A.b0(0.65,0.45,0.35)
B.kQ=new A.az(0.58,0.56,0.5)
B.dt=new A.b0(0.2,0.38,0.9)
B.kR=new A.az(0.44,0.37,0.28)
B.kS=new A.az(0.52,0.5,0.44)
B.kT=new A.az(0.24,0.25,0.27)
B.kU=new A.az(0.28,0.27,0.25)
B.kV=new A.b0(0.35,0.28,0.25)
B.du=new A.b0(0.52,0.32,0.38)
B.kW=new A.az(0.42,0.4,0.38)
B.kX=new A.az(0.18,0.2,0.21)
B.kY=new A.az(0.2,0.12,0.1)
B.aD=new A.b0(0.35,0.2,0.15)
B.kZ=new A.az(0.12,0.15,0.2)
B.dv=new A.eL(0,"constructed")
B.z=new A.eL(1,"ready")
B.bv=new A.eL(2,"lost")
B.dw=new A.eL(3,"disposed")
B.l7=new A.i3(B.af,384,216,1,B.aS,0,512,32,4,1,B.cb)
B.bw=new A.eM(0,"constructed")
B.l8=new A.eM(1,"initializing")
B.bx=new A.eM(2,"ready")
B.dx=new A.eM(3,"contextLost")
B.i=new A.fK(0,"read")
B.j=new A.fK(1,"write")
B.J=new A.fK(2,"historyRead")
B.by=new A.fL(0,"prepared")
B.l9=new A.fL(1,"committed")
B.la=new A.fL(2,"rolledBack")
B.r=new A.i5(0,"rgba8")
B.lb=new A.aI("dofBlurH",B.r,192,108,1,0)
B.lc=new A.aI("dofBlurV",B.r,192,108,1,0)
B.ld=new A.aI("dofOutput",B.r,384,216,1,0)
B.dy=new A.i5(2,"depth24")
B.le=new A.aI("shadowMap",B.dy,512,512,1,0)
B.lf=new A.aI("ssaoRaw",B.r,192,108,1,0)
B.lg=new A.aI("ssaoBlurred",B.r,192,108,1,0)
B.lh=new A.aI("gradeOutput",B.r,384,216,1,0)
B.li=new A.aI("vhsOutput",B.r,384,216,1,0)
B.lj=new A.aI("sceneDepth",B.dy,384,216,1,0)
B.lk=new A.aI("bloomBlurH",B.r,192,108,1,0)
B.ll=new A.aI("bloomBlurV",B.r,192,108,1,0)
B.lm=new A.aI("present",B.r,384,216,1,0)
B.bz=new A.aI("sceneColor",B.r,384,216,1,0)
B.ln=new A.aI("ps1Output",B.r,384,216,1,0)
B.lo=new A.eO(null,"save storage unavailable")
B.lp=new A.eO(null,"save could not be recovered")
B.lq=new A.eO(null,null)
B.jS={WheelUp:0,WheelDown:1}
B.lr=new A.aL(B.jS,2,t.M)
B.jZ={open:0,closed:1}
B.ls=new A.aL(B.jZ,2,t.M)
B.jM={Escape:0}
B.dA=new A.aL(B.jM,1,t.M)
B.jK={open:0,closed:1,mixed:2}
B.lv=new A.aL(B.jK,3,t.M)
B.jX={front:0,"rear-service":1}
B.lw=new A.aL(B.jX,2,t.M)
B.k_={overcast:0,rain:1}
B.lx=new A.aL(B.k_,2,t.M)
B.jV={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.ly=new A.aL(B.jV,16,t.M)
B.jT={Escape:0,Tab:1,F11:2}
B.dB=new A.aL(B.jT,3,t.M)
B.jR={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.lz=new A.aL(B.jR,5,t.M)
B.jO={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ag=new A.aL(B.jO,7,t.M)
B.jJ={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.lA=new A.aL(B.jJ,9,t.M)
B.dE=new A.eQ(2,"link")
B.lM=new A.i8(B.dE,"gl.createProgram() returned null")
B.dC=new A.eQ(0,"vertex")
B.dD=new A.eQ(1,"fragment")
B.dF=new A.eQ(3,"validation")
B.lU=new A.i9(0,"full")
B.lV=new A.i9(2,"culled")
B.a6=new A.I(0,1,0)
B.bN=new A.I(0,-1,0)
B.m_=new A.bA(-1,B.a6,B.bN,B.cM,1,1,0.3,0.5)
B.cT=s([],t.n)
B.m0=new A.kM(!1,"","",B.cT,B.cT)
B.dK=new A.dz(0,"resident")
B.dL=new A.dz(1,"pending")
B.dM=new A.dz(2,"missing")
B.dN=new A.dz(3,"evicted")
B.al=new A.I(0,0,0)
B.kF=new A.ky(0,0,0,1)
B.u=new A.kS(B.al,B.kF)
B.m2=A.cq("Gn")
B.m3=A.cq("Go")
B.m4=A.cq("nP")
B.m5=A.cq("By")
B.m6=A.cq("BM")
B.m7=A.cq("BN")
B.m8=A.cq("BO")
B.m9=A.cq("ae")
B.ma=A.cq("N")
B.mb=A.cq("we")
B.mc=A.cq("CE")
B.md=A.cq("CF")
B.me=A.cq("ig")
B.e=new A.d2(0,"float1")
B.aj=new A.d2(1,"float2")
B.q=new A.d2(2,"float3")
B.mf=new A.d2(3,"float4")
B.v=new A.d2(4,"mat4")
B.dO=new A.d2(5,"mat4Array")
B.bL=new A.x(B.e,0)
B.dP=new A.x(B.e,1)
B.R=new A.d2(6,"sampler")
B.w=new A.x(B.R,0)
B.ak=new A.x(B.R,1)
B.dQ=new A.x(B.R,2)
B.mg=new A.x(B.R,3)
B.mh=new A.x(B.R,4)
B.mi=new A.x(B.R,5)
B.mj=new A.x(B.R,6)
B.mk=new A.ry(!1)
B.ml=new A.I(0,0,1)
B.mm=new A.I(1,0,0)
B.mn=new A.I(1/0,1/0,1/0)
B.mo=new A.I(-1/0,-1/0,-1/0)
B.dS=new A.d4(6,"tangent4")
B.mA=new A.eb(0,"visitorAnswered")
B.dT=new A.eb(1,"visitorIgnored")
B.mB=new A.eb(2,"entryVerified")
B.mC=new A.eb(3,"entryContradicted")
B.mD=new A.eb(4,"exposureAccepted")
B.mF=new A.d5(1,"malformedDay")
B.mG=new A.d5(2,"malformedTier")
B.dU=new A.d5(3,"missingTierLines")
B.a8=new A.d5(6,"invalidPhase")
B.mJ=new A.bm(B.a8,"No reaction is due.")
B.mR=new A.ba(B.mJ)
B.mO=new A.bm(B.a8,"The active visit cannot be chosen.")
B.mS=new A.ba(B.mO)
B.mK=new A.bm(B.a8,"The active visit has no line to advance.")
B.mT=new A.ba(B.mK)
B.mI=new A.d5(5,"noActiveVisit")
B.mL=new A.bm(B.mI,"There is no active visit.")
B.dV=new A.ba(B.mL)
B.mN=new A.bm(B.a8,"A visit is already active.")
B.mU=new A.ba(B.mN)
B.mH=new A.d5(4,"noArrival")
B.mQ=new A.bm(B.mH,"The authored arrival is missing.")
B.mV=new A.ba(B.mQ)
B.mM=new A.bm(B.a8,"That answer is not offered.")
B.mW=new A.ba(B.mM)
B.mE=new A.d5(0,"missingCorpus")
B.mP=new A.bm(B.mE,"The authored visitor corpus is empty.")
B.mX=new A.ba(B.mP)
B.dW=new A.eX(1,"exact")
B.bQ=new A.eX(2,"partial")
B.aJ=new A.eX(3,"contradiction")
B.mY=new A.eX(0,"skipped")
B.mZ=new A.eW(B.mY,B.a3)
B.n_=new A.eW(B.bQ,B.a3)
B.n0=new A.im(B.X,!1)
B.n1=new A.im(B.X,!0)
B.dX=new A.ip(0,"horizontal")
B.n2=new A.ip(1,"vertical")
B.dY=new A.ir(0,"horizontal")
B.n3=new A.ir(1,"vertical")
B.aK=new A.fW(0,"empty")
B.nh=new A.fW(1,"cpuReady")
B.aL=new A.fW(4,"released")})();(function staticFields(){$.tf=null
$.c8=A.c([],A.Y("q<N>"))
$.y5=null
$.q4=0
$.q5=A.EK()
$.xw=null
$.xv=null
$.A0=null
$.zR=null
$.A9=null
$.v4=null
$.vb=null
$.x5=null
$.tx=A.c([],A.Y("q<D<N>?>"))
$.h6=null
$.j4=null
$.j5=null
$.wG=!1
$.am=B.x
$.yn=""
$.yo=null
$.yj=null
$.pM=null
$.yW=A.ab()
$.f6=A.ab()
$.aS=null
$.tI=A.ab()
$.zk=null
$.A=A.ab()
$.cI=A.ab()
$.ac=A.ab()
$.X=A.ab()
$.be=A.ab()
$.T=A.ab()
$.wq=A.ab()
$.wB=null
$.bq=null
$.wt=!1
$.wO=!1
$.j2=B.aN
$.el=B.ap
$.uU=!1
$.wY=!1
$.zm=null
$.m7=null
$.m2=null
$.z8=0
$.mb=!1
$.zl=!1
$.wH=0
$.em=0
$.wv="booting"
$.co=0
$.f9=0
$.au="hall"
$.j_=A.ab()
$.h2=A.ab()
$.c7=A.ab()
$.zr=null
$.wP=0
$.wT=1.65
$.en=null
$.bf=null
$.j8=!1
$.cn=A.ab()
$.h3=A.ab()
$.iZ=A.ab()
$.m_=A.ab()
$.yY=A.ab()
$.yX=A.ab()
$.as=A.ab()
$.m0=A.ab()
$.iY=A.ab()
$.lZ=A.ab()
$.j0=A.ab()
$.j1=A.ab()
$.f5=A.ab()
$.ek=A.ab()
$.h1=A.ab()
$.iX=A.ab()
$.iV=A.ab()
$.iW=A.ab()
$.aE=A.ab()
$.lY=A.ab()
$.bd=A.ab()
$.uV=A.a_(t.S)
$.db=A.c([],t.s)
$.wA=null
$.zI=!1
$.z0=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Gq","Ah",()=>A.zZ("_$dart_dartClosure"))
s($,"Gp","he",()=>A.zZ("_$dart_dartClosure_dartJSInterop"))
s($,"H7","AE",()=>A.c([new J.k2()],A.Y("q<i6>")))
s($,"GB","Ai",()=>A.dB(A.ru({
toString:function(){return"$receiver$"}})))
s($,"GC","Aj",()=>A.dB(A.ru({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"GD","Ak",()=>A.dB(A.ru(null)))
s($,"GE","Al",()=>A.dB(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GH","Ao",()=>A.dB(A.ru(void 0)))
s($,"GI","Ap",()=>A.dB(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"GG","An",()=>A.dB(A.yk(null)))
s($,"GF","Am",()=>A.dB(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"GK","Ar",()=>A.dB(A.yk(void 0)))
s($,"GJ","Aq",()=>A.dB(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"GM","xh",()=>A.D2())
s($,"GQ","Aw",()=>A.C4(4096))
s($,"GO","Au",()=>new A.tF().$0())
s($,"GP","Av",()=>new A.tE().$0())
s($,"GN","At",()=>A.C3(A.a1(A.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"H0","hf",()=>A.mi(B.ma))
s($,"Gz","xg",()=>{A.Ci()
return $.q4})
s($,"Gm","Ag",()=>B.bz.fV())
s($,"Gv","xf",()=>A.kl(A.c([255,255,255,255],t.t)))
s($,"Gs","xc",()=>A.kl(A.c([128,128,255,255],t.t)))
s($,"Gr","xb",()=>A.kl(A.c([0,0,0,255],t.t)))
s($,"Gt","xd",()=>A.kl(A.c([255,255,0,255],t.t)))
s($,"Gu","xe",()=>A.kl(A.c([255,255,255,255],t.t)))
s($,"Hc","AI",()=>A.ii(0,1,0))
s($,"GL","As",()=>A.D_(A.a_(t.N),0,0,A.ii(0,0,0)))
s($,"H9","AF",()=>A.ya("^[a-z0-9][a-z0-9._-]*$"))
s($,"Hf","fe",()=>{var q=$.yj
if(q==null){A.v1()
A.v1()
A.v1()
A.v1()
q=$.yj=new A.rj()}return q})
s($,"Gw","vQ",()=>A.vX(B.aV,B.cq,!0,B.aW,B.cs,B.cv,B.cw,B.cy,!0,!1,B.cA))
s($,"GW","Ax",()=>new A.mX())
r($,"zL","dd",()=>A.wb(null,null))
r($,"j3","jb",()=>A.fy(null,null))
r($,"wz","fd",()=>A.fp(null,null,!1,1,!1,!1,2,1))
r($,"wC","cK",()=>$.vQ())
s($,"H1","AA",()=>new A.ot())
s($,"H2","AB",()=>new A.oD())
s($,"H3","vS",()=>new A.oX(A.m(t.N,t.S)))
s($,"GY","Ay",()=>A.ea().gb_().h(0,"debugPause")==="1")
s($,"GV","ja",()=>A.ea().gb_().h(0,"automation")==="1")
s($,"GS","vR",()=>A.F_())
s($,"GR","xi",()=>$.vR()!=null)
s($,"GT","xj",()=>$.ja()?A.ea().gb_().h(0,"captureMantleId"):null)
s($,"GU","xk",()=>A.ea().gb_().h(0,"captureMantleLit")==="1")
r($,"wS","eq",()=>A.ii(0,0,0))
r($,"wM","AD",()=>A.ii(0,0,0))
r($,"wZ","vT",()=>A.ii(0,0,0))
s($,"GX","xl",()=>A.F0())
s($,"H5","mj",()=>new A.nQ(A.ii(0,0,0)))
s($,"H4","AC",()=>new A.pm(new A.nv()))
s($,"GZ","cr",()=>new A.o7(A.c([],t.s)))
s($,"H8","hh",()=>{var q=new A.r7(B.aH)
q.f=A.Y("D<e7>").a(A.c([A.a0(B.Q,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.a0(B.Q,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.a0(B.Q,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.a0(B.Q,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.a0(B.Q,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.a0(B.a5,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.a0(B.a5,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.a0(B.a5,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.a0(B.a5,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.a0(B.a5,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.a0(B.ai,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.a0(B.ai,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.a0(B.ai,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.a0(B.ai,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.a0(B.k,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.a0(B.k,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.a0(B.k,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.a0(B.k,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.a0(B.k,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.a0(B.k,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.a0(B.k,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.a0(B.k,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.a0(B.k,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.a0(B.k,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.a0(B.k,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.a0(B.k,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.a0(B.k,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.a0(B.k,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.a0(B.k,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.a0(B.k,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.a0(B.k,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.a0(B.k,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.a0(B.k,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.a0(B.k,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.a0(B.k,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.a0(B.k,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.a0(B.k,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.a0(B.k,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.a0(B.k,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.a0(B.k,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.a0(B.k,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.a0(B.k,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.a0(B.Q,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05)],A.Y("q<e7>")))
return q})
s($,"Hb","AH",()=>new A.r6(A.m(t.N,t.z)))
s($,"Ha","AG",()=>new A.q7(A.Ck(520588),B.b3))
s($,"H_","Az",()=>new A.op())
s($,"H6","hg",()=>new A.pQ(B.bn))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fG,ArrayBuffer:A.fF,ArrayBufferView:A.hT,DataView:A.ke,Float32Array:A.hQ,Float64Array:A.kf,Int16Array:A.kg,Int32Array:A.kh,Int8Array:A.ki,Uint16Array:A.kj,Uint32Array:A.kk,Uint8ClampedArray:A.eG,CanvasPixelArray:A.eG,Uint8Array:A.hU})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b5.$nativeSuperclassTag="ArrayBufferView"
A.iz.$nativeSuperclassTag="ArrayBufferView"
A.iA.$nativeSuperclassTag="ArrayBufferView"
A.hR.$nativeSuperclassTag="ArrayBufferView"
A.iB.$nativeSuperclassTag="ArrayBufferView"
A.iC.$nativeSuperclassTag="ArrayBufferView"
A.hS.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.vc
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
