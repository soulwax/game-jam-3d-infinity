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
if(a[b]!==s){A.GH(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.xi(b)
return new s(c,this)}:function(){if(s===null)s=A.xi(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.xi(a).prototype
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
vh(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.xl==null){A.Gj()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.yw("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ts
if(o==null)o=$.ts=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.Gp(a)
if(p!=null)return p
if(typeof a=="function")return B.hQ
s=Object.getPrototypeOf(a)
if(s==null)return B.df
if(s===Object.prototype)return B.df
if(typeof q=="function"){o=$.ts
if(o==null)o=$.ts=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.bJ,enumerable:false,writable:true,configurable:true})
return B.bJ}return B.bJ},
y0(a,b){if(a<0||a>4294967295)throw A.d(A.aT(a,0,4294967295,"length",null))
return J.y2(new Array(a),b)},
y1(a,b){if(a<0)throw A.d(A.z("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("t<0>"))},
k9(a,b){if(a<0)throw A.d(A.z("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("t<0>"))},
y2(a,b){var s=A.e(a,b.i("t<0>"))
s.$flags=1
return s},
C6(a,b){var s=t.hO
return J.xD(s.a(a),s.a(b))},
y4(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
C7(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.y4(r))break;++b}return b},
C8(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.y4(q))break}return b},
el(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hD.prototype
return J.kb.prototype}if(typeof a=="string")return J.dZ.prototype
if(a==null)return J.hE.prototype
if(typeof a=="boolean")return J.ka.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ds.prototype
if(typeof a=="symbol")return J.fx.prototype
if(typeof a=="bigint")return J.fw.prototype
return a}if(a instanceof A.H)return a
return J.vh(a)},
aD(a){if(typeof a=="string")return J.dZ.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ds.prototype
if(typeof a=="symbol")return J.fx.prototype
if(typeof a=="bigint")return J.fw.prototype
return a}if(a instanceof A.H)return a
return J.vh(a)},
ca(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ds.prototype
if(typeof a=="symbol")return J.fx.prototype
if(typeof a=="bigint")return J.fw.prototype
return a}if(a instanceof A.H)return a
return J.vh(a)},
Gf(a){if(typeof a=="number")return J.eC.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.e7.prototype
return a},
Ac(a){if(typeof a=="number")return J.eC.prototype
if(typeof a=="string")return J.dZ.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.e7.prototype
return a},
Ad(a){if(typeof a=="string")return J.dZ.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.e7.prototype
return a},
Gg(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ds.prototype
if(typeof a=="symbol")return J.fx.prototype
if(typeof a=="bigint")return J.fw.prototype
return a}if(a instanceof A.H)return a
return J.vh(a)},
xC(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Ac(a).a9(a,b)},
a3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.el(a).a0(a,b)},
aH(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Go(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aD(a).h(a,b)},
bL(a,b,c){return J.ca(a).k(a,b,c)},
hh(a,b){return J.ca(a).l(a,b)},
AV(a,b){return J.Ad(a).hw(a,b)},
w5(a,b){return J.ca(a).N(a,b)},
AW(a,b,c){return J.Gg(a).hy(a,b,c)},
AX(a,b){return J.ca(a).cP(a,b)},
xD(a,b){return J.Ac(a).G(a,b)},
xE(a,b){return J.aD(a).q(a,b)},
mv(a,b){return J.ca(a).Z(a,b)},
AY(a,b){return J.ca(a).a7(a,b)},
xF(a){return J.ca(a).gP(a)},
aA(a){return J.el(a).gI(a)},
mw(a){return J.aD(a).gO(a)},
AZ(a){return J.aD(a).gX(a)},
Q(a){return J.ca(a).gu(a)},
cb(a){return J.aD(a).gt(a)},
fa(a){return J.el(a).ga3(a)},
xG(a,b){return J.ca(a).a4(a,b)},
fb(a,b,c){return J.ca(a).cn(a,b,c)},
B_(a,b){return J.aD(a).st(a,b)},
B0(a,b){return J.ca(a).U(a,b)},
B1(a,b){return J.Ad(a).aZ(a,b)},
w6(a,b){return J.Gf(a).pn(a,b)},
de(a){return J.el(a).p(a)},
B2(a,b){return J.ca(a).eZ(a,b)},
k7:function k7(){},
ka:function ka(){},
hE:function hE(){},
hG:function hG(){},
e_:function e_(){},
kx:function kx(){},
e7:function e7(){},
ds:function ds(){},
fw:function fw(){},
fx:function fx(){},
t:function t(a){this.$ti=a},
k8:function k8(){},
pe:function pe(a){this.$ti=a},
eo:function eo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eC:function eC(){},
hD:function hD(){},
kb:function kb(){},
dZ:function dZ(){}},A={wd:function wd(){},
vc(){return $},
Bg(a,b,c){if(t.he.b(a))return new A.ir(a,b.i("@<0>").K(c).i("ir<1,2>"))
return new A.er(a,b.i("@<0>").K(c).i("er<1,2>"))},
y8(a){return new A.eD("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.eD("Field '"+a+"' has not been initialized.")},
Ca(a){return new A.eD("Field '"+a+"' has already been initialized.")},
vi(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
aP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ic(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ek(a,b,c){return a},
xm(a){var s,r
for(s=$.c9.length,r=0;r<s;++r)if(a===$.c9[r])return!0
return!1},
ib(a,b,c,d){A.kF(b,"start")
if(c!=null){A.kF(c,"end")
if(b>c)A.k(A.aT(b,0,c,"start",null))}return new A.ia(a,b,c,d.i("ia<0>"))},
kh(a,b,c,d){if(t.he.b(a))return new A.dk(a,b,c.i("@<0>").K(d).i("dk<1,2>"))
return new A.cA(a,b,c.i("@<0>").K(d).i("cA<1,2>"))},
cx(){return new A.fJ("No element")},
y_(){return new A.fJ("Too many elements")},
kO(a,b,c,d,e){if(c-b<=32)A.CL(a,b,c,d,e)
else A.CK(a,b,c,d,e)},
CL(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aD(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ap()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
CK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.V(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.V(a4+a5,2),f=g-j,e=g+j,d=J.aD(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ap()
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
A.kO(a3,a4,r-2,a6,a7)
A.kO(a3,q+2,a5,a6,a7)
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
break}}A.kO(a3,r,q,a6,a7)}else A.kO(a3,r,q,a6,a7)},
ea:function ea(){},
hl:function hl(a,b){this.a=a
this.$ti=b},
er:function er(a,b){this.a=a
this.$ti=b},
ir:function ir(a,b){this.a=a
this.$ti=b},
ip:function ip(){},
tb:function tb(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.$ti=b},
eD:function eD(a){this.a=a},
dS:function dS(a){this.a=a},
qL:function qL(){},
R:function R(){},
a6:function a6(){},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
dk:function dk(a,b,c){this.a=a
this.b=b
this.$ti=c},
hL:function hL(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
U:function U(a,b,c){this.a=a
this.b=b
this.$ti=c},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
hu:function hu(a,b,c){this.a=a
this.b=b
this.$ti=c},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hs:function hs(a){this.$ti=a},
cG:function cG(a,b){this.a=a
this.$ti=b},
ij:function ij(a,b){this.a=a
this.$ti=b},
au:function au(){},
d1:function d1(){},
fL:function fL(){},
i2:function i2(a,b){this.a=a
this.$ti=b},
iV:function iV(){},
b5(a,b,c){var s,r,q,p,o,n,m,l=A.as(a.ga_(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.u)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.as(a.gaD(),!0,c)
m=new A.a4(q,n,b.i("@<0>").K(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.hn(A.aM(a,b,c),b.i("@<0>").K(c).i("hn<1,2>"))},
Bm(){throw A.d(A.aY("Cannot modify unmodifiable Map"))},
Bn(){throw A.d(A.aY("Cannot modify constant Set"))},
Au(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
Go(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.Eh.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.de(a)
return s},
hW(a){var s,r=$.yg
if(r==null)r=$.yg=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dv(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
fD(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bh(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kC(a){var s,r,q,p
if(a instanceof A.H)return A.bI(A.bW(a),null)
s=J.el(a)
if(s===B.hP||s===B.hR||t.qF.b(a)){r=B.c2(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bI(A.bW(a),null)},
yh(a){var s,r,q
if(a==null||typeof a=="number"||A.bV(a))return J.de(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dR)return a.p(0)
if(a instanceof A.bS)return a.hp(!0)
s=$.AS()
for(r=0;r<1;++r){q=s[r].pp(a)
if(q!=null)return q}return"Instance of '"+A.kC(a)+"'"},
Co(){return Date.now()},
Cx(){var s,r
if($.qd!==0)return
$.qd=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qd=1e6
$.qe=new A.qc(r)},
Cn(){if(!!self.location)return self.location.href
return null},
Cy(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ax(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.c_(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.aT(a,0,1114111,null,null))},
fC(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Cw(a){var s=A.fC(a).getUTCFullYear()+0
return s},
Cu(a){var s=A.fC(a).getUTCMonth()+1
return s},
Cq(a){var s=A.fC(a).getUTCDate()+0
return s},
Cr(a){var s=A.fC(a).getUTCHours()+0
return s},
Ct(a){var s=A.fC(a).getUTCMinutes()+0
return s},
Cv(a){var s=A.fC(a).getUTCSeconds()+0
return s},
Cs(a){var s=A.fC(a).getUTCMilliseconds()+0
return s},
Cp(a){var s=a.$thrownJsError
if(s==null)return null
return A.cI(s)},
yi(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aE(a,s)
a.$thrownJsError=s
s.stack=b.p(0)}},
jd(a){throw A.d(A.xh(a))},
f(a,b){if(a==null)J.cb(a)
throw A.d(A.ve(a,b))},
ve(a,b){var s,r="index"
if(!A.aL(b))return new A.cs(!0,b,r,null)
s=A.c(J.cb(a))
if(b<0||b>=s)return A.p4(b,s,a,r)
return A.yk(b,r)},
G9(a,b,c){if(a>c)return A.aT(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aT(b,a,c,"end",null)
return new A.cs(!0,b,"end",null)},
xh(a){return new A.cs(!0,a,null,null)},
d(a){return A.aE(a,new Error())},
aE(a,b){var s
if(a==null)a=new A.dB()
b.dartException=a
s=A.GK
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
GK(){return J.de(this.dartException)},
k(a,b){throw A.aE(a,b==null?new Error():b)},
bK(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.Eq(a,b,c),s)},
Eq(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ie("'"+s+"': Cannot "+o+" "+l+k+n)},
u(a){throw A.d(A.at(a))},
dC(a){var s,r,q,p,o,n
a=A.Ao(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rF(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rG(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
yv(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
we(a,b){var s=b==null,r=s?null:b.method
return new A.kc(a,r,s?null:b.receiver)},
aj(a){var s
if(a==null)return new A.pQ(a)
if(a instanceof A.ht){s=a.a
return A.em(a,s==null?A.f4(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.em(a,a.dartException)
return A.FI(a)},
em(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
FI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.c_(r,16)&8191)===10)switch(q){case 438:return A.em(a,A.we(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.em(a,new A.hS())}}if(a instanceof TypeError){p=$.Ax()
o=$.Ay()
n=$.Az()
m=$.AA()
l=$.AD()
k=$.AE()
j=$.AC()
$.AB()
i=$.AG()
h=$.AF()
g=p.aX(s)
if(g!=null)return A.em(a,A.we(A.v(s),g))
else{g=o.aX(s)
if(g!=null){g.method="call"
return A.em(a,A.we(A.v(s),g))}else if(n.aX(s)!=null||m.aX(s)!=null||l.aX(s)!=null||k.aX(s)!=null||j.aX(s)!=null||m.aX(s)!=null||i.aX(s)!=null||h.aX(s)!=null){A.v(s)
return A.em(a,new A.hS())}}return A.em(a,new A.kZ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.i7()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.em(a,new A.cs(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.i7()
return a},
cI(a){var s
if(a instanceof A.ht)return a.b
if(a==null)return new A.iJ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iJ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mt(a){if(a==null)return J.aA(a)
if(typeof a=="object")return A.hW(a)
return J.aA(a)},
G3(a){if(typeof a=="number")return B.c.gI(a)
if(a instanceof A.lZ)return A.hW(a)
if(a instanceof A.bS)return a.gI(a)
return A.mt(a)},
Aa(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
Ge(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
ER(a,b,c,d,e,f){t.BO.a(a)
switch(A.c(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.ft("Unsupported number of arguments for wrapped closure"))},
hc(a,b){var s=a.$identity
if(!!s)return s
s=A.G4(a,b)
a.$identity=s
return s},
G4(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ER)},
Bl(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kS().constructor.prototype):Object.create(new A.fh(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.xM(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Bh(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.xM(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Bh(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Bc)}throw A.d("Error in functionType of tearoff")},
Bi(a,b,c,d){var s=A.xL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
xM(a,b,c,d){if(c)return A.Bk(a,b,d)
return A.Bi(b.length,d,a,b)},
Bj(a,b,c,d){var s=A.xL,r=A.Bd
switch(b?-1:a){case 0:throw A.d(new A.kJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Bk(a,b,c){var s,r
if($.xJ==null)$.xJ=A.xI("interceptor")
if($.xK==null)$.xK=A.xI("receiver")
s=b.length
r=A.Bj(s,c,a,b)
return r},
xi(a){return A.Bl(a)},
Bc(a,b){return A.iN(v.typeUniverse,A.bW(a.a),b)},
xL(a){return a.a},
Bd(a){return a.b},
xI(a){var s,r,q,p=new A.fh("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.z("Field name "+a+" not found.",null))},
Ae(a){return v.getIsolateTag(a)},
As(){return v.G},
HA(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Gp(a){var s,r,q,p,o,n=A.v($.Af.$1(a)),m=$.vf[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vm[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aC($.A6.$2(a,n))
if(q!=null){m=$.vf[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.vm[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vQ(s)
$.vf[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.vm[n]=s
return s}if(p==="-"){o=A.vQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Am(a,s)
if(p==="*")throw A.d(A.yw(n))
if(v.leafTags[n]===true){o=A.vQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Am(a,s)},
Am(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.xn(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vQ(a){return J.xn(a,!1,null,!!a.$ic_)},
Gs(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vQ(s)
else return J.xn(s,c,null,null)},
Gj(){if(!0===$.xl)return
$.xl=!0
A.Gk()},
Gk(){var s,r,q,p,o,n,m,l
$.vf=Object.create(null)
$.vm=Object.create(null)
A.Gi()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.An.$1(o)
if(n!=null){m=A.Gs(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Gi(){var s,r,q,p,o,n,m=B.ej()
m=A.hb(B.ek,A.hb(B.el,A.hb(B.c3,A.hb(B.c3,A.hb(B.em,A.hb(B.en,A.hb(B.eo(B.c2),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Af=new A.vj(p)
$.A6=new A.vk(o)
$.An=new A.vl(n)},
hb(a,b){return a(b)||b},
Ds(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a3(r,b[s]))return!1}return!0},
G6(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
y5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.a7("Illegal RegExp pattern ("+String(o)+")",a,null))},
GE(a,b,c){var s=a.indexOf(b,c)
return s>=0},
Gc(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ao(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
xp(a,b,c){var s=A.GF(a,b,c)
return s},
GF(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ao(b),"g"),A.Gc(c))},
aU:function aU(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
hn:function hn(a,b){this.a=a
this.$ti=b},
fn:function fn(){},
nv:function nv(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eX:function eX(a,b){this.a=a
this.$ti=b},
eY:function eY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cP:function cP(a,b){this.a=a
this.$ti=b},
ho:function ho(){},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
qc:function qc(a){this.a=a},
i3:function i3(){},
rF:function rF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hS:function hS(){},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
kZ:function kZ(a){this.a=a},
pQ:function pQ(a){this.a=a},
ht:function ht(a,b){this.a=a
this.b=b},
iJ:function iJ(a){this.a=a
this.b=null},
dR:function dR(){},
ju:function ju(){},
jv:function jv(){},
kV:function kV(){},
kS:function kS(){},
fh:function fh(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
cf:function cf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pn:function pn(a){this.a=a},
pv:function pv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ad:function ad(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
av:function av(a,b){this.a=a
this.$ti=b},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
I:function I(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hH:function hH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vj:function vj(a){this.a=a},
vk:function vk(a){this.a=a},
vl:function vl(a){this.a=a},
bS:function bS(){},
f1:function f1(){},
f2:function f2(){},
fP:function fP(){},
hF:function hF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
lC:function lC(a){this.b=a},
lh:function lh(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
i9:function i9(a,b){this.a=a
this.c=b},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
GH(a){throw A.aE(A.y8(a),new Error())},
h(){throw A.aE(A.a9(""),new Error())},
L(){throw A.aE(A.Ca(""),new Error())},
At(){throw A.aE(A.y8(""),new Error())},
a8(){var s=new A.tc()
return s.b=s},
tc:function tc(){this.b=null},
zm(a,b,c){},
a1(a){return a},
Ch(a,b,c){A.zm(a,b,c)
return new Float32Array(a,b,c)},
Ci(a){return new Int8Array(a)},
Cj(a){return new Uint8Array(a)},
kt(a){return new Uint8Array(A.a1(a))},
dI(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ve(b,a))},
Ee(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.G9(a,b,c))
return b},
e0:function e0(){},
fB:function fB(){},
hQ:function hQ(){},
tL:function tL(a){this.a=a},
km:function km(){},
b6:function b6(){},
hO:function hO(){},
hP:function hP(){},
hN:function hN(){},
kn:function kn(){},
ko:function ko(){},
kp:function kp(){},
kq:function kq(){},
kr:function kr(){},
ks:function ks(){},
eF:function eF(){},
hR:function hR(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
ws(a,b){var s=b.c
return s==null?b.c=A.iL(a,"bY",[b.x]):s},
yn(a){var s=a.w
if(s===6||s===7)return A.yn(a.x)
return s===11||s===12},
CF(a){return a.as},
Gt(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a_(a){return A.tK(v.typeUniverse,a,!1)},
f6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.f6(a1,s,a3,a4)
if(r===s)return a2
return A.yU(a1,r,!0)
case 7:s=a2.x
r=A.f6(a1,s,a3,a4)
if(r===s)return a2
return A.yT(a1,r,!0)
case 8:q=a2.y
p=A.ha(a1,q,a3,a4)
if(p===q)return a2
return A.iL(a1,a2.x,p)
case 9:o=a2.x
n=A.f6(a1,o,a3,a4)
m=a2.y
l=A.ha(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.wD(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ha(a1,j,a3,a4)
if(i===j)return a2
return A.yV(a1,k,i)
case 11:h=a2.x
g=A.f6(a1,h,a3,a4)
f=a2.y
e=A.FE(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yS(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ha(a1,d,a3,a4)
o=a2.x
n=A.f6(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wE(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.jl("Attempted to substitute unexpected RTI kind "+a0))}},
ha(a,b,c,d){var s,r,q,p,o=b.length,n=A.tP(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.f6(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
FF(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tP(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.f6(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
FE(a,b,c,d){var s,r=b.a,q=A.ha(a,r,c,d),p=b.b,o=A.ha(a,p,c,d),n=b.c,m=A.FF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lv()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
xj(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Gh(s)
return a.$S()}return null},
Gl(a,b){var s
if(A.yn(b))if(a instanceof A.dR){s=A.xj(a)
if(s!=null)return s}return A.bW(a)},
bW(a){if(a instanceof A.H)return A.r(a)
if(Array.isArray(a))return A.G(a)
return A.wW(J.el(a))},
G(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
r(a){var s=a.$ti
return s!=null?s:A.wW(a)},
wW(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.EO(a,s)},
EO(a,b){var s=a instanceof A.dR?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.DC(v.typeUniverse,s.name)
b.$ccache=r
return r},
Gh(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mr(a){return A.db(A.r(a))},
xd(a){var s
if(a instanceof A.bS)return a.fO()
s=a instanceof A.dR?A.xj(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fa(a).a
if(Array.isArray(a))return A.G(a)
return A.bW(a)},
db(a){var s=a.r
return s==null?a.r=new A.lZ(a):s},
Gd(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.f(q,0)
s=A.iN(v.typeUniverse,A.xd(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.yW(v.typeUniverse,s,A.xd(q[r]))}return A.iN(v.typeUniverse,s,a)},
cq(a){return A.db(A.tK(v.typeUniverse,a,!1))},
EN(a){var s=this
s.b=A.Fy(s)
return s.b(a)},
Fy(a){var s,r,q,p,o
if(a===t.K)return A.EX
if(A.f7(a))return A.F1
s=a.w
if(s===6)return A.EE
if(s===1)return A.zz
if(s===7)return A.ES
r=A.Fx(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f7)){a.f="$i"+q
if(q==="C")return A.EV
if(a===t.m)return A.EU
return A.F0}}else if(s===10){p=A.G6(a.x,a.y)
o=p==null?A.zz:p
return o==null?A.f4(o):o}return A.EC},
Fx(a){if(a.w===8){if(a===t.S)return A.aL
if(a===t.i||a===t.o)return A.EW
if(a===t.N)return A.F_
if(a===t.y)return A.bV}return null},
EM(a){var s=this,r=A.EB
if(A.f7(s))r=A.E8
else if(s===t.K)r=A.f4
else if(A.hd(s)){r=A.ED
if(s===t.lo)r=A.zg
else if(s===t.D)r=A.aC
else if(s===t.k7)r=A.E7
else if(s===t.s7)r=A.wK
else if(s===t.u6)r=A.zf
else if(s===t.uh)r=A.j}else if(s===t.S)r=A.c
else if(s===t.N)r=A.v
else if(s===t.y)r=A.T
else if(s===t.o)r=A.al
else if(s===t.i)r=A.bC
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
EC(a){var s=this
if(a==null)return A.hd(s)
return A.Aj(v.typeUniverse,A.Gl(a,s),s)},
EE(a){if(a==null)return!0
return this.x.b(a)},
F0(a){var s,r=this
if(a==null)return A.hd(r)
s=r.f
if(a instanceof A.H)return!!a[s]
return!!J.el(a)[s]},
EV(a){var s,r=this
if(a==null)return A.hd(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.H)return!!a[s]
return!!J.el(a)[s]},
EU(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.H)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
zy(a){if(typeof a=="object"){if(a instanceof A.H)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
EB(a){var s=this
if(a==null){if(A.hd(s))return a}else if(s.b(a))return a
throw A.aE(A.zn(a,s),new Error())},
ED(a){var s=this
if(a==null||s.b(a))return a
throw A.aE(A.zn(a,s),new Error())},
zn(a,b){return new A.fU("TypeError: "+A.yK(a,A.bI(b,null)))},
A9(a,b,c,d){if(A.Aj(v.typeUniverse,a,b))return a
throw A.aE(A.Du("The type argument '"+A.bI(a,null)+"' is not a subtype of the type variable bound '"+A.bI(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
yK(a,b){return A.jL(a)+": type '"+A.bI(A.xd(a),null)+"' is not a subtype of type '"+b+"'"},
Du(a){return new A.fU("TypeError: "+a)},
co(a,b){return new A.fU("TypeError: "+A.yK(a,b))},
ES(a){var s=this
return s.x.b(a)||A.ws(v.typeUniverse,s).b(a)},
EX(a){return a!=null},
f4(a){if(a!=null)return a
throw A.aE(A.co(a,"Object"),new Error())},
F1(a){return!0},
E8(a){return a},
zz(a){return!1},
bV(a){return!0===a||!1===a},
T(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aE(A.co(a,"bool"),new Error())},
E7(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aE(A.co(a,"bool?"),new Error())},
bC(a){if(typeof a=="number")return a
throw A.aE(A.co(a,"double"),new Error())},
zf(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aE(A.co(a,"double?"),new Error())},
aL(a){return typeof a=="number"&&Math.floor(a)===a},
c(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aE(A.co(a,"int"),new Error())},
zg(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aE(A.co(a,"int?"),new Error())},
EW(a){return typeof a=="number"},
al(a){if(typeof a=="number")return a
throw A.aE(A.co(a,"num"),new Error())},
wK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aE(A.co(a,"num?"),new Error())},
F_(a){return typeof a=="string"},
v(a){if(typeof a=="string")return a
throw A.aE(A.co(a,"String"),new Error())},
aC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aE(A.co(a,"String?"),new Error())},
b(a){if(A.zy(a))return a
throw A.aE(A.co(a,"JSObject"),new Error())},
j(a){if(a==null)return a
if(A.zy(a))return a
throw A.aE(A.co(a,"JSObject?"),new Error())},
zV(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bI(a[q],b)
return s},
Fm(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.zV(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bI(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
zq(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bI(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bI(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bI(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bI(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bI(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bI(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bI(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bI(a.x,b)+">"
if(l===8){p=A.FH(a.x)
o=a.y
return o.length>0?p+("<"+A.zV(o,b)+">"):p}if(l===10)return A.Fm(a,b)
if(l===11)return A.zq(a,b,null)
if(l===12)return A.zq(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
FH(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
DD(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
DC(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tK(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iM(a,5,"#")
q=A.tP(s)
for(p=0;p<s;++p)q[p]=r
o=A.iL(a,b,q)
n[b]=o
return o}else return m},
DB(a,b){return A.z3(a.tR,b)},
DA(a,b){return A.z3(a.eT,b)},
tK(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.yP(A.yN(a,null,b,!1))
r.set(b,s)
return s},
iN(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.yP(A.yN(a,b,c,!0))
q.set(c,r)
return r},
yW(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.wD(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ee(a,b){b.a=A.EM
b.b=A.EN
return b},
iM(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cE(null,null)
s.w=b
s.as=c
r=A.ee(a,s)
a.eC.set(c,r)
return r},
yU(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Dy(a,b,r,c)
a.eC.set(r,s)
return s},
Dy(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f7(b))if(!(b===t.c||b===t.w))if(s!==6)r=s===7&&A.hd(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.cE(null,null)
q.w=6
q.x=b
q.as=c
return A.ee(a,q)},
yT(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Dw(a,b,r,c)
a.eC.set(r,s)
return s},
Dw(a,b,c,d){var s,r
if(d){s=b.w
if(A.f7(b)||b===t.K)return b
else if(s===1)return A.iL(a,"bY",[b])
else if(b===t.c||b===t.w)return t.eZ}r=new A.cE(null,null)
r.w=7
r.x=b
r.as=c
return A.ee(a,r)},
Dz(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=13
s.x=b
s.as=q
r=A.ee(a,s)
a.eC.set(q,r)
return r},
iK(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Dv(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iL(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iK(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cE(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ee(a,r)
a.eC.set(p,q)
return q},
wD(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iK(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cE(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ee(a,o)
a.eC.set(q,n)
return n},
yV(a,b,c){var s,r,q="+"+(b+"("+A.iK(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cE(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ee(a,s)
a.eC.set(q,r)
return r},
yS(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iK(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iK(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Dv(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cE(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ee(a,p)
a.eC.set(r,o)
return o},
wE(a,b,c,d){var s,r=b.as+("<"+A.iK(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Dx(a,b,c,r,d)
a.eC.set(r,s)
return s},
Dx(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tP(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.f6(a,b,r,0)
m=A.ha(a,c,r,0)
return A.wE(a,n,m,c!==m)}}l=new A.cE(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ee(a,l)},
yN(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
yP(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Dn(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.yO(a,r,l,k,!1)
else if(q===46)r=A.yO(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f_(a.u,a.e,k.pop()))
break
case 94:k.push(A.Dz(a.u,k.pop()))
break
case 35:k.push(A.iM(a.u,5,"#"))
break
case 64:k.push(A.iM(a.u,2,"@"))
break
case 126:k.push(A.iM(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Dp(a,k)
break
case 38:A.Do(a,k)
break
case 63:p=a.u
k.push(A.yU(p,A.f_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yT(p,A.f_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Dm(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.yQ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Dr(a.u,a.e,o)
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
return A.f_(a.u,a.e,m)},
Dn(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
yO(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.DD(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.CF(o)+'"')
d.push(A.iN(s,o,n))}else d.push(p)
return m},
Dp(a,b){var s,r=a.u,q=A.yM(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iL(r,p,q))
else{s=A.f_(r,a.e,p)
switch(s.w){case 11:b.push(A.wE(r,s,q,a.n))
break
default:b.push(A.wD(r,s,q))
break}}},
Dm(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.yM(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f_(p,a.e,o)
q=new A.lv()
q.a=s
q.b=n
q.c=m
b.push(A.yS(p,r,q))
return
case-4:b.push(A.yV(p,b.pop(),s))
return
default:throw A.d(A.jl("Unexpected state under `()`: "+A.w(o)))}},
Do(a,b){var s=b.pop()
if(0===s){b.push(A.iM(a.u,1,"0&"))
return}if(1===s){b.push(A.iM(a.u,4,"1&"))
return}throw A.d(A.jl("Unexpected extended operation "+A.w(s)))},
yM(a,b){var s=b.splice(a.p)
A.yQ(a.u,a.e,s)
a.p=b.pop()
return s},
f_(a,b,c){if(typeof c=="string")return A.iL(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Dq(a,b,c)}else return c},
yQ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f_(a,b,c[s])},
Dr(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f_(a,b,c[s])},
Dq(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.jl("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.jl("Bad index "+c+" for "+b.p(0)))},
Aj(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aQ(a,b,null,c,null)
r.set(c,s)}return s},
aQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f7(d))return!0
s=b.w
if(s===4)return!0
if(A.f7(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aQ(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.w){if(q===7)return A.aQ(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aQ(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aQ(a,b.x,c,d,e))return!1
return A.aQ(a,A.ws(a,b),c,d,e)}if(s===6)return A.aQ(a,p,c,d,e)&&A.aQ(a,b.x,c,d,e)
if(q===7){if(A.aQ(a,b,c,d.x,e))return!0
return A.aQ(a,b,c,A.ws(a,d),e)}if(q===6)return A.aQ(a,b,c,p,e)||A.aQ(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.BO)return!0
o=s===10
if(o&&d===t.op)return!0
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
if(!A.aQ(a,j,c,i,e)||!A.aQ(a,i,e,j,c))return!1}return A.zx(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.zx(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ET(a,b,c,d,e)}if(o&&q===10)return A.EY(a,b,c,d,e)
return!1},
zx(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aQ(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aQ(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aQ(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aQ(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aQ(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
ET(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iN(a,b,r[o])
return A.zd(a,p,null,c,d.y,e)}return A.zd(a,b.y,null,c,d.y,e)},
zd(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aQ(a,b[s],d,e[s],f))return!1
return!0},
EY(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aQ(a,r[s],c,q[s],e))return!1
return!0},
hd(a){var s=a.w,r=!0
if(!(a===t.c||a===t.w))if(!A.f7(a))if(s!==6)r=s===7&&A.hd(a.x)
return r},
f7(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
z3(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tP(a){return a>0?new Array(a):v.typeUniverse.sEA},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lv:function lv(){this.c=this.b=this.a=null},
lZ:function lZ(a){this.a=a},
lt:function lt(){},
fU:function fU(a){this.a=a},
Df(){var s,r,q
if(self.scheduleImmediate!=null)return A.FV()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.hc(new A.t7(s),1)).observe(r,{childList:true})
return new A.t6(s,r,q)}else if(self.setImmediate!=null)return A.FW()
return A.FX()},
Dg(a){self.scheduleImmediate(A.hc(new A.t8(t.O.a(a)),0))},
Dh(a){self.setImmediate(A.hc(new A.t9(t.O.a(a)),0))},
Di(a){A.wv(B.eI,t.O.a(a))},
wv(a,b){return A.Dt(a.a/1000|0,b)},
Dt(a,b){var s=new A.tI()
s.kH(a,b)
return s},
bG(a){return new A.lj(new A.ay($.aq,a.i("ay<0>")),a.i("lj<0>"))},
bF(a,b){a.$2(0,null)
b.b=!0
return b.a},
ao(a,b){A.Ea(a,b)},
bE(a,b){b.dP(a)},
bD(a,b){b.dQ(A.aj(a),A.cI(a))},
Ea(a,b){var s,r,q=new A.tW(b),p=new A.tX(b)
if(a instanceof A.ay)a.hn(q,p,t.z)
else{s=t.z
if(a instanceof A.ay)a.eV(q,p,s)
else{r=new A.ay($.aq,t.hR)
r.a=8
r.c=a
r.hn(q,p,s)}}},
bJ(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.aq.jp(new A.v9(s),t.H,t.S,t.z)},
yR(a,b,c){return 0},
mN(a){var s
if(t.yt.b(a)){s=a.gbV()
if(s!=null)return s}return B.aq},
wa(a){var s
a.a(null)
s=new A.ay($.aq,a.i("ay<0>"))
s.dl(null)
return s},
BR(a,b,c){var s=new A.ay($.aq,c.i("ay<0>"))
A.CQ(a,new A.oc(b,s,c))
return s},
od(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ay($.aq,b.i("ay<C<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.of(i,h,g,f)
try{for(n=J.Q(a),m=t.c;n.m();){r=n.gn()
q=i.b
r.eV(new A.oe(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cC(A.e([],b.i("t<0>")))
return n}i.a=A.cU(n,null,!1,b.i("0?"))}catch(l){p=A.aj(l)
o=A.cI(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.wX(m,k)
m=new A.b2(m,k==null?A.mN(m):k)
n.cw(m)
return n}else{i.d=p
i.c=o}}return f},
wX(a,b){if($.aq===B.x)return null
return null},
EP(a,b){if($.aq!==B.x)A.wX(a,b)
if(b==null)if(t.yt.b(a)){b=a.gbV()
if(b==null){A.yi(a,B.aq)
b=B.aq}}else b=B.aq
else if(t.yt.b(a))A.yi(a,b)
return new A.b2(a,b)},
ti(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.CM()
b.cw(new A.b2(new A.cs(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.h1(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bY()
b.cB(o.a)
A.eV(b,p)
return}b.a^=2
A.mn(null,null,b.b,t.O.a(new A.tj(o,b)))},
eV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.x6(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.eV(d.a,c)
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
A.x6(j.a,j.b)
return}g=$.aq
if(g!==h)$.aq=h
else g=null
c=c.c
if((c&15)===8)new A.tn(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tm(q,j).$0()}else if((c&2)!==0)new A.tl(d,q).$0()
if(g!=null)$.aq=g
c=q.c
if(c instanceof A.ay){p=q.a.$ti
p=p.i("bY<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.cK(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.ti(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.cK(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Fn(a,b){var s
if(t.nW.b(a))return b.jp(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.d(A.ap(a,"onError",u.c))},
Fb(){var s,r
for(s=$.h5;s!=null;s=$.h5){$.j6=null
r=s.b
$.h5=r
if(r==null)$.j5=null
s.a.$0()}},
FB(){$.wY=!0
try{A.Fb()}finally{$.j6=null
$.wY=!1
if($.h5!=null)$.xw().$1(A.A7())}},
zZ(a){var s=new A.lk(a),r=$.j5
if(r==null){$.h5=$.j5=s
if(!$.wY)$.xw().$1(A.A7())}else $.j5=r.b=s},
Fv(a){var s,r,q,p=$.h5
if(p==null){A.zZ(a)
$.j6=$.j5
return}s=new A.lk(a)
r=$.j6
if(r==null){s.b=p
$.h5=$.j6=s}else{q=r.b
s.b=q
$.j6=r.b=s
if(q==null)$.j5=s}},
H_(a,b){A.ek(a,"stream",t.K)
return new A.lU(b.i("lU<0>"))},
CQ(a,b){var s=$.aq
if(s===B.x)return A.wv(a,t.O.a(b))
return A.wv(a,t.O.a(s.hA(b)))},
x6(a,b){A.Fv(new A.uZ(a,b))},
zU(a,b,c,d,e){var s,r=$.aq
if(r===c)return d.$0()
$.aq=c
s=r
try{r=d.$0()
return r}finally{$.aq=s}},
Ft(a,b,c,d,e,f,g){var s,r=$.aq
if(r===c)return d.$1(e)
$.aq=c
s=r
try{r=d.$1(e)
return r}finally{$.aq=s}},
Fs(a,b,c,d,e,f,g,h,i){var s,r=$.aq
if(r===c)return d.$2(e,f)
$.aq=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aq=s}},
mn(a,b,c,d){t.O.a(d)
if(B.x!==c){d=c.hA(d)
d=d}A.zZ(d)},
t7:function t7(a){this.a=a},
t6:function t6(a,b,c){this.a=a
this.b=b
this.c=c},
t8:function t8(a){this.a=a},
t9:function t9(a){this.a=a},
tI:function tI(){},
tJ:function tJ(a,b){this.a=a
this.b=b},
lj:function lj(a,b){this.a=a
this.b=!1
this.$ti=b},
tW:function tW(a){this.a=a},
tX:function tX(a){this.a=a},
v9:function v9(a){this.a=a},
cH:function cH(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cn:function cn(a,b){this.a=a
this.$ti=b},
b2:function b2(a,b){this.a=a
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
ln:function ln(){},
il:function il(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ay:function ay(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tf:function tf(a,b){this.a=a
this.b=b},
tk:function tk(a,b){this.a=a
this.b=b},
tj:function tj(a,b){this.a=a
this.b=b},
th:function th(a,b){this.a=a
this.b=b},
tg:function tg(a,b){this.a=a
this.b=b},
tn:function tn(a,b,c){this.a=a
this.b=b
this.c=c},
to:function to(a,b){this.a=a
this.b=b},
tp:function tp(a){this.a=a},
tm:function tm(a,b){this.a=a
this.b=b},
tl:function tl(a,b){this.a=a
this.b=b},
lk:function lk(a){this.a=a
this.b=null},
lU:function lU(a){this.$ti=a},
iU:function iU(){},
lM:function lM(){},
tG:function tG(a,b){this.a=a
this.b=b},
uZ:function uZ(a,b){this.a=a
this.b=b},
yL(a,b){var s=a[b]
return s===a?null:s},
wB(a,b,c){if(c==null)a[b]=a
else a[b]=c},
wA(){var s=Object.create(null)
A.wB(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
ya(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
N(a,b,c){return b.i("@<0>").K(c).i("wf<1,2>").a(A.Aa(a,new A.cf(b.i("@<0>").K(c).i("cf<1,2>"))))},
q(a,b){return new A.cf(a.i("@<0>").K(b).i("cf<1,2>"))},
wg(a){return new A.cm(a.i("cm<0>"))},
a2(a){return new A.cm(a.i("cm<0>"))},
aK(a,b){return b.i("yb<0>").a(A.Ge(a,new A.cm(b.i("cm<0>"))))},
wC(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iw(a,b,c){var s=new A.eZ(a,b,c.i("eZ<0>"))
s.c=a.e
return s},
bZ(a,b){var s=J.Q(a)
if(s.m())return s.gn()
return null},
aM(a,b,c){var s=A.ya(b,c)
a.au(0,new A.pw(s,b,c))
return s},
fy(a,b,c){var s=A.ya(b,c)
s.L(0,a)
return s},
hJ(a,b){var s,r=A.wg(b)
for(s=J.Q(a);s.m();)r.l(0,b.a(s.gn()))
return r},
kg(a,b){var s=A.wg(b)
s.L(0,a)
return s},
Cb(a,b){var s=t.hO
return J.xD(s.a(a),s.a(b))},
wh(a){var s,r
if(A.xm(a))return"{...}"
s=new A.bl("")
try{r={}
B.a.l($.c9,a)
s.a+="{"
r.a=!0
a.au(0,new A.pz(r,s))
s.a+="}"}finally{if(0>=$.c9.length)return A.f($.c9,-1)
$.c9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
DE(){throw A.d(A.aY("Cannot change an unmodifiable set"))},
it:function it(){},
tr:function tr(a){this.a=a},
iv:function iv(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
eW:function eW(a,b){this.a=a
this.$ti=b},
iu:function iu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cm:function cm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lB:function lB(a){this.a=a
this.c=this.b=null},
eZ:function eZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(){},
aa:function aa(){},
py:function py(a){this.a=a},
pz:function pz(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.$ti=b},
iy:function iy(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iO:function iO(){},
fz:function fz(){},
e8:function e8(a,b){this.a=a
this.$ti=b},
dx:function dx(){},
iI:function iI(){},
m_:function m_(){},
fM:function fM(a,b){this.a=a
this.$ti=b},
fV:function fV(){},
iP:function iP(){},
Ff(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aj(r)
q=A.a7(String(s),null,null)
throw A.d(q)}q=A.ul(p)
return q},
ul(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lz(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ul(a[s])
return a},
DV(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.AL()
else s=new Uint8Array(o)
for(r=J.aD(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
DU(a,b,c,d){var s=a?$.AK():$.AJ()
if(s==null)return null
if(0===c&&d===b.length)return A.z2(s,b)
return A.z2(s,b.subarray(c,d))},
z2(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
xH(a,b,c,d,e,f){if(B.d.M(f,4)!==0)throw A.d(A.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.a7("Invalid base64 padding, more than two '=' characters",a,b))},
y7(a,b,c){return new A.hI(a,b)},
Ep(a){return a.B()},
Dj(a,b){return new A.tu(a,[],A.G5())},
Dk(a,b,c){var s,r=new A.bl(""),q=A.Dj(r,b)
q.d6(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
DW(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lz:function lz(a,b){this.a=a
this.b=b
this.c=null},
tt:function tt(a){this.a=a},
lA:function lA(a){this.a=a},
tO:function tO(){},
tN:function tN(){},
jo:function jo(){},
ng:function ng(){},
es:function es(){},
jA:function jA(){},
jK:function jK(){},
hI:function hI(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(){},
pp:function pp(a){this.b=a},
po:function po(a){this.a=a},
tv:function tv(){},
tw:function tw(a,b){this.a=a
this.b=b},
tu:function tu(a,b,c){this.c=a
this.a=b
this.b=c},
l2:function l2(){},
rK:function rK(a){this.a=a},
tM:function tM(a){this.a=a
this.b=16
this.c=0},
Ai(a){var s=A.dv(a,null)
if(s!=null)return s
throw A.d(A.a7(a,null,null))},
BL(a,b){a=A.aE(a,new Error())
if(a==null)a=A.f4(a)
a.stack=b.p(0)
throw a},
cU(a,b,c,d){var s,r=c?J.y1(a,d):J.y0(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
as(a,b,c){var s,r=A.e([],c.i("t<0>"))
for(s=J.Q(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
r.$flags=1
return r},
K(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("t<0>"))
s=A.e([],b.i("t<0>"))
for(r=J.Q(a);r.m();)B.a.l(s,r.gn())
return s},
ah(a,b){var s=A.as(a,!1,b)
s.$flags=3
return s},
yt(a,b,c){var s,r
A.kF(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.d(A.aT(c,b,null,"end",null))
if(s===0)return""}r=A.CO(a,b,c)
return r},
CO(a,b,c){var s=a.length
if(b>=s)return""
return A.Cy(a,b,c==null||c>s?s:c)},
yl(a){return new A.hF(a,A.y5(a,!1,!0,!1,!1,""))},
wu(a,b,c){var s=J.Q(b)
if(!s.m())return a
if(c.length===0){do a+=A.w(s.gn())
while(s.m())}else{a+=A.w(s.gn())
while(s.m())a=a+c+A.w(s.gn())}return a},
d2(){var s,r,q=A.Cn()
if(q==null)throw A.d(A.aY("'Uri.base' is not supported"))
s=$.yz
if(s!=null&&q===$.yy)return s
r=A.CW(q)
$.yz=r
$.yy=q
return r},
CM(){return A.cI(new Error())},
Br(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
xO(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jC(a){if(a>=10)return""+a
return"0"+a},
BK(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.d(A.ap(b,"name","No enum value with that name"))},
jL(a){if(typeof a=="number"||A.bV(a)||a==null)return J.de(a)
if(typeof a=="string")return JSON.stringify(a)
return A.yh(a)},
BM(a,b){A.ek(a,"error",t.K)
A.ek(b,"stackTrace",t.l)
A.BL(a,b)},
jl(a){return new A.jk(a)},
z(a,b){return new A.cs(!1,null,b,a)},
ap(a,b,c){return new A.cs(!0,a,b,c)},
yj(a){var s=null
return new A.fE(s,s,!1,s,s,a)},
yk(a,b){return new A.fE(null,null,!0,a,b,"Value not in range")},
aT(a,b,c,d,e){return new A.fE(b,c,!0,a,d,"Invalid value")},
hX(a,b,c){if(0>a||a>c)throw A.d(A.aT(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.aT(b,a,c,"end",null))
return b}return c},
kF(a,b){if(a<0)throw A.d(A.aT(a,0,null,b,null))
return a},
p4(a,b,c,d){return new A.k4(b,!0,a,d,"Index out of range")},
aY(a){return new A.ie(a)},
yw(a){return new A.kY(a)},
m(a){return new A.fJ(a)},
at(a){return new A.jx(a)},
ft(a){return new A.td(a)},
a7(a,b,c){return new A.F(a,b,c)},
C5(a,b,c){var s,r
if(A.xm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.l($.c9,a)
try{A.F2(a,s)}finally{if(0>=$.c9.length)return A.f($.c9,-1)
$.c9.pop()}r=A.wu(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
wc(a,b,c){var s,r
if(A.xm(a))return b+"..."+c
s=new A.bl(b)
B.a.l($.c9,a)
try{r=s
r.a=A.wu(r.a,a,", ")}finally{if(0>=$.c9.length)return A.f($.c9,-1)
$.c9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
F2(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.w(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.w(p))
return}r=A.w(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.w(p)
r=A.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
wi(a,b,c){var s=A.q(b,c)
s.mt(a)
return s},
cC(a,b,c,d,e,f){var s
if(B.f===c){s=J.aA(a)
b=J.aA(b)
return A.ic(A.aP(A.aP($.hf(),s),b))}if(B.f===d){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
return A.ic(A.aP(A.aP(A.aP($.hf(),s),b),c))}if(B.f===e){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
return A.ic(A.aP(A.aP(A.aP(A.aP($.hf(),s),b),c),d))}if(B.f===f){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
return A.ic(A.aP(A.aP(A.aP(A.aP(A.aP($.hf(),s),b),c),d),e))}s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
e=J.aA(e)
f=J.aA(f)
f=A.ic(A.aP(A.aP(A.aP(A.aP(A.aP(A.aP($.hf(),s),b),c),d),e),f))
return f},
Ck(a){var s,r,q=$.hf()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r)q=A.aP(q,J.aA(a[r]))
return A.ic(q)},
qM(a,b){return new A.fM(A.kg(a,b),b.i("fM<0>"))},
CW(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.f(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.yx(a4<a4?B.b.E(a5,0,a4):a5,5,a3).gjw()
else if(s===32)return A.yx(B.b.E(a5,5,a4),0,a3).gjw()}r=A.cU(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.zY(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.zY(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+B.b.E(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.bR(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ad(a5,"http",0)){if(i&&o+3===n&&B.b.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.bR(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.ad(a5,"https",0)){if(i&&o+4===n&&B.b.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.bR(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.lQ(a4<a5.length?B.b.E(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.DO(a5,0,q)
else{if(q===0)A.fW(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.DP(a5,c,p-1):""
a=A.DK(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dv(B.b.E(a5,i,n),a3)
d=A.DM(a0==null?A.k(A.a7("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.DL(a5,n,m,a3,j,a!=null)
a2=m<l?A.DN(a5,m+1,l,a3):a3
return A.DF(j,b,a,d,a1,a2,l<a4?A.DJ(a5,l+1,a4):a3)},
yB(a){var s=t.N
return B.a.bv(A.e(a.split("&"),t.s),A.q(s,s),new A.rJ(B.c4),t.G)},
l1(a,b,c){throw A.d(A.a7("Illegal IPv4 address, "+a,b,c))},
CT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.f(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.l1("each part must be in the range 0..255",a,r)}A.l1("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.l1(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bK(d)
if(!(k<16))return A.f(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.l1(j,a,q)
p=l}A.l1("IPv4 address should contain exactly 4 parts",a,q)},
CU(a,b,c){var s
if(b===c)throw A.d(A.a7("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.f(a,b)
if(a.charCodeAt(b)===118){s=A.CV(a,b,c)
if(s!=null)throw A.d(s)
return!1}A.yA(a,b,c)
return!0},
CV(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
yA(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.rI(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.CT(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.c_(l,8)
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
B.d1.jV(s,a0,16,s,a)
B.d1.nQ(s,a,a0,0)}}return s},
DF(a,b,c,d,e,f,g){return new A.iQ(a,b,c,d,e,f,g)},
yX(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fW(a,b,c){throw A.d(A.a7(c,a,b))},
DM(a,b){var s=A.yX(b)
if(a===s)return null
return a},
DK(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.f(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.f(a,r)
if(a.charCodeAt(r)!==93)A.fW(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.f(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.DH(a,q,r)
if(o<r){n=o+1
p=A.z1(a,B.b.ad(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.CU(a,q,o)
l=B.b.E(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.f(a,k)
if(a.charCodeAt(k)===58){o=B.b.cZ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.z1(a,B.b.ad(a,"25",n)?o+3:n,c,"%25")}else p=""
A.yA(a,b,o)
return"["+B.b.E(a,b,o)+p+"]"}}return A.DR(a,b,c)},
DH(a,b,c){var s=B.b.cZ(a,"%",b)
return s>=b&&s<c?s:c},
z1(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bl(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.wG(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bl("")
l=h.a+=B.b.E(a,q,r)
if(m)n=B.b.E(a,r,r+3)
else if(n==="%")A.fW(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bl("")
if(q<r){h.a+=B.b.E(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.f(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.E(a,q,r)
if(h==null){h=new A.bl("")
m=h}else m=h
m.a+=i
l=A.wF(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.E(a,b,c)
if(q<c){i=B.b.E(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
DR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.f(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.wG(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bl("")
k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.E(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bl("")
if(q<r){p.a+=B.b.E(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.fW(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.f(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.E(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bl("")
l=p}else l=p
l.a+=k
j=A.wF(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.E(a,b,c)
if(q<c){k=B.b.E(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
DO(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.f(a,b)
if(!A.yZ(a.charCodeAt(b)))A.fW(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.f(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.fW(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.E(a,b,c)
return A.DG(q?a.toLowerCase():a)},
DG(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
DP(a,b,c){return A.iR(a,b,c,16,!1,!1)},
DL(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.iR(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.T(q,"/"))q="/"+q
return A.DQ(q,e,f)},
DQ(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.T(a,"/")&&!B.b.T(a,"\\"))return A.DS(a,!s||c)
return A.DT(a)},
DN(a,b,c,d){return A.iR(a,b,c,256,!0,!1)},
DJ(a,b,c){return A.iR(a,b,c,256,!0,!1)},
wG(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.f(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.f(a,l)
q=a.charCodeAt(l)
p=A.vi(r)
o=A.vi(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.f(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ax(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.E(a,b,b+3).toUpperCase()
return null},
wF(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.ma(a,6*p)&63|q
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
o+=3}}return A.yt(s,0,null)},
iR(a,b,c,d,e,f){var s=A.z0(a,b,c,d,e,f)
return s==null?B.b.E(a,b,c):s},
z0(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.f(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.wG(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.fW(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.f(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.wF(n)}if(o==null){o=new A.bl("")
k=o}else k=o
k.a=(k.a+=B.b.E(a,p,q))+l
if(typeof m!=="number")return A.jd(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.E(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
z_(a){if(B.b.T(a,"."))return!0
return B.b.bK(a,"/.")!==-1},
DT(a){var s,r,q,p,o,n,m
if(!A.z_(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.f(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a4(s,"/")},
DS(a,b){var s,r,q,p,o,n
if(!A.z_(a))return!b?A.yY(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gW(s)!==".."){if(0>=s.length)return A.f(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.f(s,0)
B.a.k(s,0,A.yY(s[0]))}return B.a.a4(s,"/")},
yY(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.yZ(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.E(a,0,s)+"%3A"+B.b.aZ(a,s+1)
if(r<=127){if(!(r<128))return A.f(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
DI(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.f(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.d(A.z("Invalid URL encoding",null))}}return r},
wH(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.c4===d)return B.b.E(a,b,c)
else p=new A.dS(B.b.E(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.f(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.d(A.z("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.d(A.z("Truncated URI",null))
B.a.l(p,A.DI(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.lQ.mZ(p)},
yZ(a){var s=a|32
return 97<=s&&s<=122},
yx(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.a7(k,a,r))}}if(q<0&&r>b)throw A.d(A.a7(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.f(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gW(j)
if(p!==44||r!==n+7||!B.b.ad(a,"base64",n+1))throw A.d(A.a7("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.eh.oj(a,m,s)
else{l=A.z0(a,m,s,256,!0,!1)
if(l!=null)a=B.b.bR(a,m,s,l)}return new A.rH(a,j,c)},
zY(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.f(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a){this.a=a},
ls:function ls(){},
an:function an(){},
jk:function jk(a){this.a=a},
dB:function dB(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fE:function fE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
k4:function k4(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ie:function ie(a){this.a=a},
kY:function kY(a){this.a=a},
fJ:function fJ(a){this.a=a},
jx:function jx(a){this.a=a},
ku:function ku(){},
i7:function i7(){},
td:function td(a){this.a=a},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(){},
H:function H(){},
lX:function lX(){},
rr:function rr(){this.b=this.a=0},
bl:function bl(a){this.a=a},
rJ:function rJ(a){this.a=a},
rI:function rI(a){this.a=a},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
rH:function rH(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lo:function lo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
pP:function pP(a){this.a=a},
zr(a){var s
if(typeof a=="function")throw A.d(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Ed,a)
s[$.he()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.d(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.tY,a)
s[$.he()]=a
return s},
Ed(a){return t.BO.a(a).$0()},
tY(a,b,c){t.BO.a(a)
if(A.c(c)>=1)return a.$1(b)
return a.$0()},
xk(a,b,c){return c.a(a[b])},
zs(a,b){return a[b]},
af(a,b,c,d){return d.a(a[b].apply(a,c))},
zi(a,b,c,d){return d.a(a[b](c))},
b1(a,b){var s=new A.ay($.aq,b.i("ay<0>")),r=new A.il(s,b.i("il<0>"))
a.then(A.hc(new A.vR(r,b),1),A.hc(new A.vS(r),1))
return s},
zE(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
dc(a){if(A.zE(a))return a
return new A.vd(new A.iv(t.BT)).$1(a)},
vR:function vR(a,b){this.a=a
this.b=b},
vS:function vS(a){this.a=a},
vd:function vd(a){this.a=a},
ly:function ly(){},
f0:function f0(){this.b=this.a=0},
qh:function qh(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
qi:function qi(){},
eI:function eI(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
nt:function nt(a,b){this.a=a
this.b=b},
nu:function nu(){this.a=null
this.d=0},
kA:function kA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.w=g
_.y=h
_.z=i
_.Q=j
_.as=k
_.at=l
_.ax=m
_.ay=n
_.ch=o
_.CW=p
_.cx=q
_.cy=r},
fk:function fk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jR:function jR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
o7:function o7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
dY(a,b){return new A.k0(a,b)},
dw:function dw(){},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
GA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.e([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.u)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.iG(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.U(f,new A.vT())
s=A.e([],t.cv)
for(r=A.ib(f,0,A.ek(b,"count",t.S),t.mn),q=r.$ti,r=new A.aS(r,r.gt(0),q.i("aS<a6.E>")),q=q.i("a6.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
nP:function nP(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
by:function by(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
vT:function vT(){},
pB(a,b,c,d,e,f,g,h,i,j){return new A.eE(c,a,h,g,f,e,i,j,b,!0)},
wl(a,b){if(!isFinite(b)||b<0||b>1)throw A.d(A.z("MaterialDefinition."+a+" must be in [0, 1]: "+A.w(b),null))},
jj:function jj(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c,d,e,f,g,h,i,j){var _=this
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
Cd(a){A:{break A}return a},
d3:function d3(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
rL:function rL(){},
rM:function rM(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pE:function pE(){},
pF:function pF(){},
pG:function pG(){},
pS(a){var s,r=t.N,q=A.aK(["sceneColor","present"],r),p=a.a.b
if(p.q(0,"shadows"))q.L(0,A.aK(["shadowMap","sceneDepth"],r))
if(p.q(0,"ssao"))q.L(0,A.aK(["ssaoRaw","ssaoBlurred"],r))
if(p.q(0,"bloom"))q.L(0,A.aK(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.q(0,"dof"))q.L(0,A.aK(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.q(0,"grade"))q.l(0,"gradeOutput")
if(p.q(0,"ps1"))q.l(0,"ps1Output")
s=p.q(0,"vhs")
if(s)q.l(0,"vhsOutput")
return new A.pR(A.qM(q,r),s)},
pR:function pR(a,b){this.a=a
this.b=b},
pT:function pT(){},
qa:function qa(a){this.b=a},
kI:function kI(){this.a=null
this.c=0
this.d=!1},
fq:function fq(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c,d,e,f,g,h,i,j){var _=this
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
kT:function kT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jw:function jw(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
eL:function eL(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c){this.a=a
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
Cc(){return new A.kj(new A.cX(new A.pC(),A.e([],t.Fy),A.e([],t.t),t.ou))},
kj:function kj(a){this.a=a},
pC:function pC(){},
A0(a){var s=4
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
case 3:s=A.k(A.aY("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
Ej(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.U[r]
if(A.A0(q.a)===b)s+=q.c}return s},
Ce(a){return new A.pH(a,new A.cX(new A.pI(),A.e([],t.EM),A.e([],t.t),t.wm),A.q(t.S,t.jC))},
ye(a){var s
A:{s=a.byteLength
break A}return s},
l_:function l_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(){},
pJ:function pJ(){},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(){},
CP(a){var s=new A.kW(a,new A.cX(new A.rC(),A.e([],t.f2),A.e([],t.t),t.qq),A.q(t.S,t._))
s.d=s.aR($.xu())
s.e=s.aR($.xr())
s.f=s.aR($.xs())
s.r=s.aR($.xq())
s.w=s.aR($.xt())
return s},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
kW:function kW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
rC:function rC(){},
rE:function rE(){},
rD:function rD(){},
FY(a){var s,r,q,p,o=A.e([],t.hr)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.u)(a),++q){p=a[q]
p.gD()
B.a.l(o,new A.eB(p,A.e([p],r)))
continue}return o},
eB:function eB(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
o2:function o2(){},
o3:function o3(a){this.a=a},
o0:function o0(a){this.a=a},
o1:function o1(a){this.a=a},
jQ:function jQ(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
o8:function o8(a,b){this.a=a
this.b=b
this.c=0},
Dl(){return new A.fO()},
o6:function o6(a){this.a=a
this.b=null},
fO:function fO(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
wn(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
pW:function pW(){},
pX:function pX(){},
ce:function ce(a,b){this.a=a
this.b=b},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fF:function fF(a,b){this.a=a
this.b=b},
O:function O(a,b){this.a=a
this.b=b},
hm:function hm(a){this.b=a},
qf:function qf(a,b){var _=this
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
qj:function qj(){},
b7:function b7(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ql:function ql(a,b){this.a=a
this.b=b},
qq:function qq(){},
qp:function qp(){},
qo:function qo(){},
qn:function qn(a){this.a=a},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b){this.a=a
this.b=b},
CD(a){return new A.hZ(a,new A.cX(new A.qs(),A.e([],t.w_),A.e([],t.t),t.tc))},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b){this.a=a
this.b=b},
qs:function qs(){},
zo(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.Eu(a,r,s,a.x.gn().a.b.a).b},
Eu(a,b,c,d){var s,r,q,p,o,n=new A.uC(a),m=new A.uD(d,a),l=c.a,k=a.a,j=c.b,i=c.c
if(l.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.G1(b,k,B.aR,l,s.gp_(),new A.un(m),new A.uo(m),new A.up(a),new A.uu(a),new A.uv(a),new A.uw(m),new A.ux(m),s.gp5(),new A.uy(a),s.gp9(),r.gp7(),n,s.gpb(),s.gpd(),new A.uz(m,c),new A.uA(m),new A.uB(m),new A.uq(m),new A.ur(m),new A.us(a),new A.ut(m),1,i,j,512)}else{p=new A.aN("sceneColor",B.r,j,i,1,0)
n=A.e([new A.le(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",n,p)],t.e_)
n.push(new A.hV(b,u.l,u.B,k,p,B.aR))
q=new A.jP(n)}a.r.toString
o=q.mL(B.P,new A.qj(),!1,new A.lJ())
n=o.a.b
if(n.length!==0)throw A.d(A.m("safe renderer graph is invalid: "+A.w(n)))
return new A.tH(q,o)},
Ev(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.d(A.m("renderer graph is not initialized"))
s=A.K(b7.gj7(),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a1(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ac()
p=p.gaA()
n=A.G(p)
B.a.l(s,new A.lY(new A.cv((r|1073741824)>>>0,0,"transient"),q,A.be(new A.U(p,n.i("M(1)").a(o.gaC()),n.i("U<1,M>")))))}p=b8.a
m=A.G7(A.BQ(p.c),s,-1)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.k(A.dY(B.az,n))
j=j.b
g=j.$ti
j.a1(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.V(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.u)(s),++k){n=s[k].gD().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.k(A.dY(B.az,n))
j=j.b
g=j.$ti
j.a1(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.f(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.V(n>0?n:h.e,3)}o=t.N
n=A.q(o,t.rL)
e=new A.o6(n)
e.mG("cull")
j=l-f
d=e.b
if(d==null)A.k(A.m("cull recorded outside an active frame"))
if(j<0)A.k(A.z("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.e([],t.fs)
a=A.e([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.u)(s),++k){a2=s[k]
if(a2.gD().e===B.aS)B.a.l(a,new A.aO(new A.bM(a0.js(a2.gD().c.a).c,a2.ga8().a),a2,a1))
else B.a.l(b,new A.aO(new A.bO(B.k8,a2.gD().b,a2.gD().a,a2.ga8().a),a2,g))}a3=new A.lu(A.FY(A.GC(b)),A.GB(a),p,b8.b,b8.c)
a4=new A.jF(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.u)(s),++k){a5=s[k]
g=a5.gD().a
if(g.length===0)A.k(A.ap(g,"passId",null))
e.b=g
n.co(g,A.Ab())
a6=A.q(o,i)
for(g=a5.gD().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.u)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.k(A.m("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.k(A.m("resource is not in candidate: "+b1))
b3=new A.fi(b2)
a6.k(0,b0+"#"+a1,b3)
a6.co(b0,new A.uE(b3))}a5.al(new A.js(a6,a4,a3))}return new A.te(e,m,j)},
yq(a){return new A.qH(a,new A.nt(new A.nu(),new A.kI()),new A.o8(A.e([],t.h1),B.fX),A.e([],t.Ft),B.bs,A.e([],t.ow),null)},
qB:function qB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=!1},
te:function te(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
uC:function uC(a){this.a=a},
uD:function uD(a,b){this.a=a
this.b=b},
uB:function uB(a){this.a=a},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
uA:function uA(a){this.a=a},
up:function up(a){this.a=a},
ur:function ur(a){this.a=a},
uq:function uq(a){this.a=a},
uz:function uz(a,b){this.a=a
this.b=b},
un:function un(a){this.a=a},
uo:function uo(a){this.a=a},
uw:function uw(a){this.a=a},
ux:function ux(a){this.a=a},
uy:function uy(a){this.a=a},
ut:function ut(a){this.a=a},
us:function us(a){this.a=a},
uE:function uE(a){this.a=a},
tH:function tH(a,b){this.a=a
this.b=b},
lJ:function lJ(){},
lu:function lu(a,b,c,d,e){var _=this
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
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
qI:function qI(){},
qJ:function qJ(){},
qK:function qK(){},
lH:function lH(a){this.b=a},
tq:function tq(){},
lN:function lN(){},
i6:function i6(a,b){this.a=a
this.b=b},
GC(a){var s,r,q=A.K(a,t.E0)
B.a.U(q,new A.vY())
s=A.G(q)
r=s.i("U<1,c1>")
s=A.K(new A.U(q,s.i("c1(1)").a(new A.vZ()),r),r.i("a6.E"))
s.$flags=1
return s},
GB(a){var s,r,q=A.K(a,t.EH)
B.a.U(q,new A.vW())
s=A.G(q)
r=s.i("U<1,c1>")
s=A.K(new A.U(q,s.i("c1(1)").a(new A.vX()),r),r.i("a6.E"))
s.$flags=1
return s},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
vY:function vY(){},
vZ:function vZ(){},
vW:function vW(){},
vX:function vX(){},
G7(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.u)(b),++p){o=b[p];++r
if((o.gD().d&c)>>>0===0){++q
continue}n=o.gf0()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.d(A.z("cullItems: non-finite world bounds for instance "+o.ga8().p(0),null))
if(a.pm(o.gf0())===B.cj){++q
continue}B.a.l(l,o)}return new A.nJ(l,new A.nK(q))},
nK:function nK(a){this.b=a},
nJ:function nJ(a,b){this.a=a
this.b=b},
be(a){var s,r,q,p,o,n,m,l,k
for(s=J.Q(a),r=B.lT,q=B.lU,p=!1;s.m();p=!0){o=s.gn()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.M(m,k,Math.min(r.c,o))
q=new A.M(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.d(A.z("Aabb.fromPoints requires at least one point",null))
return new A.jg(r,q)},
jg:function jg(a,b){this.a=a
this.b=b},
BQ(a){var s,r,q,p,o,n,m=a.a,l=new A.ob(),k=m.length
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
return new A.oa(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
eG:function eG(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
oa:function oa(a){this.a=a},
ob:function ob(){},
yc(a){if(a.length!==16)throw A.d(A.z("Mat4.fromColumnMajor requires 16 values",null))
return new A.dt(new Float32Array(A.a1(a)))},
wj(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dt(q)},
yd(a,b,c){var s=b.gab(),r=c.bo(s).gab(),q=s.bo(r),p=new Float32Array(16)
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
p[12]=-r.c8(a)
p[13]=-q.c8(a)
p[14]=s.c8(a)
p[15]=1
return new A.dt(p)},
dt:function dt(a){this.a=a},
pA:function pA(){},
kE:function kE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kX:function kX(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ll:function ll(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jr:function jr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lm:function lm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jE:function jE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lp:function lp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iq:function iq(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lq:function lq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jI:function jI(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lr:function lr(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jZ:function jZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
lw:function lw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
lD:function lD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a){this.b=a},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
bt(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aN(a.a,a.b,b,c,s,r)},
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
hV:function hV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
lK:function lK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kD:function kD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ys(a){var s=a.c,r=Math.abs(s.a)<0.99?B.lS:B.a3,q=A.yd(a.b,s,r)
return new A.eO(A.wj(1,a.f,B.c.F(a.w*2,0.1,3),0.05).a5(0,q))},
eO:function eO(a){this.a=a},
kM:function kM(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lO:function lO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
G1(b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=u.l,b0="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b1="bloomBlurH",b2="bloomBlurV",b3="dofBlurH",b4="dofBlurV",b5={},b6=c0.b
if(!b6.q(0,"shadows"))throw A.d(A.ap(c0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=b6.q(0,"ssao")
r=b6.q(0,"bloom")
q=b6.q(0,"dof")
p=b6.q(0,"grade")
o=b6.q(0,"ps1")
n=b6.q(0,"vhs")
b6=(e5+1)/2|0
m=(e4+1)/2|0
l=A.bt(B.bu,e5,e4,e3,a8)
k=A.bt(B.bu.jc(),e5,e4,a8,a8)
A.bt(B.kR,e5,e4,a8,a8)
j=A.bt(B.kO,e5,e4,a8,a8)
i=A.bt(B.kJ,e6,e6,a8,a8)
h=A.bt(B.kK,b6,m,a8,a8)
g=A.bt(B.kL,b6,m,a8,a8)
f=A.bt(B.kP,b6,m,a8,a8)
e=A.bt(B.kQ,b6,m,a8,a8)
d=$.Av()
c=e3>1
b=A.bt(d,e5,e4,a8,c?2:1)
d=A.bt(B.kG,b6,m,a8,a8)
a=A.bt(B.kH,b6,m,a8,a8)
a0=A.bt(B.kI,e5,e4,a8,a8)
a1=A.bt(B.kM,e5,e4,a8,a8)
a2=A.bt(B.kS,e5,e4,a8,a8)
a3=A.bt(B.kN,e5,e4,a8,a8)
a4=c?new A.kl(b8,l,k):a8
b5.a=null
a5=A.ys(B.lv)
a6=t.e_
a7=A.e([],a6)
k=c?k:l
if(r){B.a.L(a7,A.e([new A.hk(b7,a9,b0,b8,b1,b1,B.dP,!0,k,f,d6,b6,m),new A.hk(b7,a9,b0,b8,b2,b2,B.my,!1,f,e,c2,b6,m),new A.jr(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b8,c3,e,k,b)],a6))
k=b}if(q){B.a.L(a7,A.e([new A.hq(b7,a9,b0,b8,b3,b3,B.dQ,k,d,d6,b6,m),new A.hq(b7,a9,b0,b8,b4,b4,B.mz,d,a,c7,b6,m),new A.jI(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b8,d6,c8,d7,c4,k,j,a,a0)],a6))
k=a0}if(p){B.a.l(a7,new A.jZ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b8,d0,k,a1))
k=a1}if(o){B.a.l(a7,new A.kD(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b8,k,a2))
k=a2}if(n){B.a.l(a7,new A.l3(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b8,e2,e1,k,a3))
k=a3}j=A.e([new A.jE(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d3,d2,c1,j)],a6)
if(s)j.push(new A.kQ(b7,a9,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b8,d7,c4,h))
if(s)j.push(new A.kP(b7,a9,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b8,e0,d7,c4,b6,m,h,g))
j.push(new A.kM(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d3,d2,c1,c5,a8,a8,new A.va(b5),i))
j.push(new A.kN(b7,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uOcclusionStrength;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  float falloff=clamp(1.-dist/max(lightRadius,.001),0.,1.);\n  return falloff*falloff;\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=clamp(1.-length(toFrag)/max(lightRange,.001),0.,1.);\n  return lightColor*lightIntensity*ndotl*coneFalloff*\n    distanceFalloff*distanceFalloff*enabled;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Rain response stays in the world pass so it follows geometry depth rather\n  // than painting streaks over the whole screen. Near surfaces receive a\n  // restrained cool darkening and a broad wet highlight; distant surfaces\n  // fade back to their authored material before the fog composite.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  vec3 lit=baseColor*clamp(ambient+direct*(1.0-metal*(0.35+0.25*rough)),0.,1.);\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d3,d2,c1,d4,d5,c9,d1,d8,new A.vb(b5,a5),c5,c6,d9,s,e5,e4,e6,e6,i,g,l))
if(a4!=null)j.push(a4)
B.a.L(j,a7)
j.push(new A.hV(b7,a9,u.B,b8,k,b9))
return new A.jP(j)},
va:function va(a){this.a=a},
vb:function vb(a,b){this.a=a
this.b=b},
kN:function kN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
lP:function lP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kQ:function kQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
lS:function lS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kP:function kP(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
lR:function lR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
l3:function l3(a,b,c,d,e,f,g,h){var _=this
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
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
le:function le(a,b,c,d,e){var _=this
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
nr:function nr(){},
kL(a,b){return new A.i5(a,b)},
jV:function jV(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
jY:function jY(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ey:function ey(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hy:function hy(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
A:function A(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
jF:function jF(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
ou:function ou(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
ov:function ov(){},
ow:function ow(){},
fR:function fR(a,b){this.a=a
this.b=b},
ed:function ed(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
xR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.fr(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
jp:function jp(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
t2:function t2(){this.a=null},
D0(a){var s=new A.lc(a,B.h,new A.t2(),A.Db(a))
s.kG(a)
return s},
Db(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a2(t.N)
s=A.a2(t.N)
r=J.Q(t.a.b(q)?q:new A.aR(q,A.G(q).i("aR<1,i>")))
while(r.m())s.l(0,r.gn())
return s},
c6(a,b){var s,r
if(a.b!==B.h)A.k(A.m(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.c(s.drawingBufferWidth),A.c(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
D6(a,b){var s
if(a.b!==B.h)A.k(A.m(u.k))
switch(b){case 1:a.a.drawBuffers(A.e([A.c(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.d(A.z("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
D5(a,b,c){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.d(A.m("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
D4(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.c(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
D3(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
yE(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.c(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.c(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.c(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
D1(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bo(a,b){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=a.f
r=s.nt(b)
if(r.a===0)return
if(r.q(0,B.bA)){q=v.G
p=a.a
if(b.a)p.enable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.c(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.bB))a.a.depthFunc(A.D4(a,b.b))
if(r.q(0,B.bC))a.a.depthMask(b.c)
if(r.q(0,B.bG)){q=v.G
p=a.a
if(b.w)p.enable(A.c(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.c(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.bH))a.a.cullFace(A.D3(a,b.x))
if(r.q(0,B.dB)){q=v.G.WebGL2RenderingContext
q=A.c(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.bD)){q=v.G
p=a.a
if(b.d)p.enable(A.c(q.WebGL2RenderingContext.BLEND))
else p.disable(A.c(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.bE))a.a.blendFunc(A.yE(a,b.e),A.yE(a,b.f))
if(r.q(0,B.bF))a.a.blendEquation(A.D1(a,b.r))
if(r.q(0,B.dz))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.dA)){q=v.G.WebGL2RenderingContext
a.a.disable(A.c(q.SCISSOR_TEST))}s.a=b},
D2(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.c(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.c(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
dE(a,b,c,d,e,f){var s
if(a.b!==B.h)A.k(A.m(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.D2(a,b))},
cl(a,b){var s
if(a.b!==B.h)A.k(A.m(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
x(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.h)A.k(A.m(u.k))
s=a.e
if(s==null)throw A.d(A.m("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.j(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.bC(c.b))
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
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.c(c.b))
break}},
bA(a,b){if(a.b!==B.h)A.k(A.m(u.k))
a.a.bindVertexArray(A.b(b.a))},
aF(a,b,c){var s,r,q,p,o,n
if(a.b!==B.h)A.k(A.m(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.c(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.iT){p=s.d>1?A.c(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.iS){o=s.b
if(o!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.c(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.d(A.m("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.d(A.m("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
D7(a,b,c){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=q.WebGL2RenderingContext
r.bufferData(A.c(p.ELEMENT_ARRAY_BUFFER),c,A.c(q.WebGL2RenderingContext.STATIC_DRAW))
break A}},
D8(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
yH(a,b){var s,r,q,p
if(a.b!==B.h)A.k(A.m(u.k))
s=a.a
r=A.j(s.createBuffer())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.cv?A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.c(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.D8(a,b.b))
return new A.dG(r)},
yF(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.c(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
yG(a,b){var s
switch(b.a){case 0:s=A.c(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.c(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
wx(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.b!==B.h)A.k(A.m(u.k))
s=a.a
r=A.j(s.createTexture())
if(r==null)throw A.d(A.m("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.c(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=t.H
l=b.a
k=b.b
if(p)A.af(s,"texStorage3D",[n,1,A.c(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.af(s,"texStorage2D",[n,1,A.c(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.yF(a,b.e))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.yF(a,b.f))
p=b.r
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.yG(a,p))
s.texParameteri(n,A.c(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.yG(a,p))
j=a.r.q(0,"EXT_texture_filter_anisotropic")
i=j?a.h_(34047):1
h=b.w
if(!isFinite(h)||h<1||h>16)A.k(A.ap(h,"requested","anisotropy must be finite and in [1, 16]"))
if(j&&isFinite(i)&&i>=1)g=i>16?16:i
else g=1
h=h<g?h:g
if(h>1)s.texParameterf(n,34046,h)
return new A.dG(new A.iT(r,l,k,q,!1))},
wy(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.h)A.k(A.m(u.k))
s=t.jm.a(b.a)
r=s.d
if(c>=r)throw A.d(A.z("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.d(A.z("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.c(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.c(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.af(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.c(n.WebGL2RenderingContext.RGBA),A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.af(l,"texSubImage2D",[m,0,0,0,q,p,A.c(n.WebGL2RenderingContext.RGBA),A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
ld(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
Da(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.h)A.k(A.m(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.d(A.z("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.j(r.createFramebuffer())
if(q==null)throw A.d(A.m("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.aU
if(n&&!a1.e)throw A.d(A.z("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.cx||o===B.hc
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.e([A.c(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.c(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.j(r.createRenderbuffer())
r.bindRenderbuffer(A.c(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.af(r,c,[A.c(p.WebGL2RenderingContext.RENDERBUFFER),o,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.j(r.createRenderbuffer())
r.bindRenderbuffer(A.c(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.af(r,c,[A.c(p.WebGL2RenderingContext.RENDERBUFFER),o,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.c(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.e([A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.j(r.createTexture())
r.bindTexture(A.c(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.af(r,b,[A.c(p.WebGL2RenderingContext.TEXTURE_2D),1,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
A.af(r,a,[A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.j(r.createTexture())
r.bindTexture(A.c(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.af(r,b,[A.c(p.WebGL2RenderingContext.TEXTURE_2D),1,A.c(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(p.WebGL2RenderingContext.LINEAR))
A.af(r,a,[A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.c(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.e([A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.j(r.createRenderbuffer())
r.bindRenderbuffer(A.c(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.af(r,c,[A.c(p.WebGL2RenderingContext.RENDERBUFFER),o,A.c(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.c(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.j(r.createTexture())
r.bindTexture(A.c(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.af(r,b,[A.c(p.WebGL2RenderingContext.TEXTURE_2D),1,A.c(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.c(p.WebGL2RenderingContext.TEXTURE_2D),A.c(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(p.WebGL2RenderingContext.NEAREST))
A.af(r,a,[A.c(p.WebGL2RenderingContext.FRAMEBUFFER),A.c(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.c(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.c(r.checkFramebufferStatus(A.c(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.c(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.c(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.wz(a0,q,l,k,f,e,j,i)
throw A.d(A.m("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.dG(new A.iS(q,l,k,f,e,j,i,s,a1.b,a1.c))},
wz(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
d6(a){var s
if(a.b!==B.h)A.k(A.m(u.k))
s=A.j(a.a.createVertexArray())
if(s==null)throw A.d(A.m("WebGl2Device: gl.createVertexArray() returned null"))
return new A.dG(s)},
yI(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.j(p.createShader(b))
if(o==null)throw A.d(A.kL(b===A.xk(A.zs(A.As(),r),q,t.S)?B.du:B.dv,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a3(A.dc(p.getShaderParameter(o,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.aC(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.d(A.kL(b===A.xk(A.zs(A.As(),r),q,t.S)?B.du:B.dv,s))}return o},
D9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.h)A.k(A.m(u.k))
q=v.G
s=A.yI(a,A.c(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.yI(a,A.c(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.j(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.d(B.lh)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a3(A.dc(o.getProgramParameter(n,A.c(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.aC(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kL(B.dw,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.u)(c),++l){k=c[l]
if(A.c(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kL(B.dx,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.j(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.d(A.kL(B.dx,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.dG(n)},
dG:function dG(a){this.a=a},
iT:function iT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iS:function iS(a,b,c,d,e,f,g,h,i,j){var _=this
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
lc:function lc(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
t0:function t0(a){this.a=a},
t1:function t1(a){this.a=a},
tQ:function tQ(){},
m1:function m1(){},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n0(a,a0){var s=0,r=A.bG(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$n0=A.bJ(function(a1,a2){if(a1===1)return A.bD(a2,r)
for(;;)switch(s){case 0:p=A.b(new v.G.AudioContext())
o=t.m
n=A.q(t.N,o)
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
b=new A.jm(p,a0,m,l,k,j,i,h,g,f,e,d,c,n,B.c5,A.q(o,t.jS))
b.kn(p,a0)
p=A.r(a).i("I<1,2>")
s=3
return A.ao(A.od(A.kh(new A.I(a,p),p.i("bY<aB>(p.E)").a(new A.n1(b)),p.i("p.E"),t.ls),t.c),$async$n0)
case 3:b.dx="ir-stone"
n=n.h(0,"ir-stone")
p=n==null?b.lr():n
c.buffer=p
q=b
s=1
break
case 1:return A.bE(q,r)}})
return A.bF($async$n0,r)},
jm:function jm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
n2:function n2(){},
n1:function n1(a){this.a=a},
n4:function n4(a,b){this.a=a
this.b=b},
n3:function n3(a,b){this.a=a
this.b=b},
n5:function n5(a,b,c){this.a=a
this.b=b
this.c=c},
fT:function fT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
B8(a,b,c,d,e,f,g){var s=new A.mS(c,f,b,g,new A.a(d.a,d.b,d.c),e,a)
s.kp(a,b,c,d,0,e,f,g)
return s},
B4(a,b){var s=new A.mA(b)
s.km(a,b)
return s},
B7(a){var s,r,q,p,o,n=t.z
n=A.q(n,n)
for(s=new A.I(a,A.r(a).i("I<1,2>")).gu(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.as(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.mO(A.b5(n,r,t.a))
n.ko(a)
return n},
FA(a,b){var s,r,q,p=b>>>0
for(s=new A.dS(a),r=t.sU,s=new A.aS(s,s.gt(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.Ag(p,q==null?r.a(q):q)}return p&2147483647},
jn:function jn(a,b){this.a=a
this.b=b},
mS:function mS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mT:function mT(){},
mA:function mA(a){this.a=a},
mB:function mB(){},
hi:function hi(){},
mC:function mC(){},
mD:function mD(){},
mO:function mO(a){this.a=a},
mQ:function mQ(){},
mR:function mR(){},
mP:function mP(){},
w8:function w8(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
n_:function n_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mU:function mU(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function mV(a){this.a=a},
mW:function mW(){},
ik:function ik(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
np:function np(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=1
_.w=0},
o5:function o5(a){this.a=a},
kU:function kU(a,b,c,d,e,f,g,h,i,j){var _=this
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
os:function os(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
ot:function ot(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=0
this.$ti=b},
k5:function k5(a,b,c,d,e,f,g,h,i,j){var _=this
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
p6:function p6(a){this.a=a},
C_(a){var s,r,q,p,o=t.N,n=A.q(o,t.a)
for(s=new A.I(a,A.r(a).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.as(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.p5(n)},
p5:function p5(a){this.a=a},
p9:function p9(){var _=this
_.c=_.b=_.a=!1
_.d=0},
nL:function nL(){this.b=this.a=0},
px:function px(a){this.a=a
this.b=0
this.e=!1},
ki:function ki(a){this.a=a},
wk(a,b,c,d){return new A.hM(a,b,c,d)},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pD:function pD(a,b){this.a=a
this.b=b},
i8(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bK(a)
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
d_:function d_(a){this.a=a
this.b=0},
qr:function qr(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
qA:function qA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
CE(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.yo(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.k9(800,t.cX)
for(s=0;s<800;++s)g[s]=new A.lG(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0))
r=t.S
q=A.cU(800,0,!1,r)
p=new Float32Array(8064)
o=J.k9(4000,t.fo)
for(s=0;s<4000;++s)o[s]=new A.lE(new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),new A.a(0,0,0),0,1,0,0,0)
n=A.cU(4000,0,!1,r)
m=new A.a(0.3,0.7,-0.5).gab()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.vj
k=new A.qt(a,new A.os(a,A.q(t.m,r)),b,c,A.a2(t.N),j,i,h,g,q,p,A.q(r,t.kA),o,n,m,B.iy,new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),new A.ki(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.kz(a,b,c)
return k},
qt:function qt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.aS=a
_.b3=b
_.bt=c
_.bu=d
_.en=_.iE=1
_.ey=_.ex=_.iW=_.iV=_.iU=_.iT=_.iS=_.iR=_.ew=_.ev=_.eu=_.es=_.er=_.eq=_.ep=_.iQ=_.iP=_.iO=_.eo=_.iN=_.iM=_.iL=_.iK=_.iJ=_.iI=_.iH=_.iG=_.iF=_.ar=$
_.cR=null
_.hJ=e
_.i9=_.i8=_.i7=_.i6=_.i5=_.i4=_.i3=_.i2=_.i1=_.i0=_.i_=_.hZ=_.hY=_.hX=_.hW=_.hV=_.hU=_.hT=_.hS=_.hR=_.hQ=_.hP=_.hO=_.hN=_.hM=_.hL=_.hK=_.cS=$
_.cT=0
_.e6=_.e5=_.e4=_.e3=_.e2=_.e1=_.e0=$
_.cX=_.cW=_.cV=_.cU=_.ca=_.bs=null
_.cb=$
_.ic=_.ib=_.ia=!1
_.nJ=1
_.e7=f
_.e8=g
_.nK=h
_.ie=i
_.cY=0
_.ig=j
_.nL=k
_.e9=0
_.ea=l
_.nM=1
_.eb=!1
_.cc=0
_.ec=m
_.cd=0
_.ih=n
_.ii=o
_.il=_.ik=_.ij=1
_.im=0.4
_.ed=p
_.io=q
_.ee=r
_.ef=s
_.eg=a0
_.ip=_.ek=_.ej=_.ei=_.eh=0
_.iq=null
_.ir=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.iz=_.em=_.el=_.iy=_.ix=_.nP=_.nO=_.nN=_.iw=_.iv=_.iu=_.it=_.is=_.ce=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.iA=a7
_.iB=a8
_.iC=a9
_.iD=b0},
zG(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.ah(0,c).bo(f.ah(0,c)).gab(),r=A.v3(g)
return A.zO(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
jb(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bK(a)
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
zO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.jb(a,A.jb(a,A.jb(a,A.jb(a,A.jb(a,A.jb(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
v3(a){return new A.ai((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
EJ(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.c.aU(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.a8(),i=A.a8(),h=A.a8()
switch(B.d.M(o,6)){case 0:j.b=c
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
h.b=l}s=j.dI()
if(typeof s!=="number")return s.a5()
s=B.c.aL(s*255)
r=i.dI()
if(typeof r!=="number")return r.a5()
r=B.c.aL(r*255)
q=h.dI()
if(typeof q!=="number")return q.a5()
return new A.ai(s,r,B.c.aL(q*255))},
is:function is(){},
lT:function lT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
lG:function lG(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lE:function lE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qu:function qu(){},
qv:function qv(a){this.a=a},
qw:function qw(a){this.a=a},
t4:function t4(){},
rm:function rm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
ig(a,b,c){return new A.a(a,b,c)},
yC(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.a(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
a:function a(a,b,c){this.a=a
this.b=b
this.c=c},
Dc(a,b,c,d){return new A.lf(d,b,c,a)},
De(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.AH()
s=a.d
r=A.t5(s,0)
q=A.t5(s,1)
p=A.t5(s,2)
o=A.t5(s,3)
s=t.N
n=A.a2(s)
m=a.e
if(A.bB(m,0))n.l(0,"GamepadA")
if(A.bB(m,1))n.l(0,"GamepadB")
if(A.bB(m,2))n.l(0,"GamepadX")
if(A.bB(m,3))n.l(0,"GamepadY")
if(A.bB(m,4))n.l(0,"GamepadLB")
if(A.bB(m,5))n.l(0,"GamepadRB")
if(A.bB(m,6))n.l(0,"GamepadLT")
if(A.bB(m,7))n.l(0,"GamepadRT")
if(A.bB(m,8))n.l(0,"GamepadView")
if(A.bB(m,9))n.l(0,"GamepadMenu")
if(A.bB(m,10))n.l(0,"GamepadLStick")
if(A.bB(m,11))n.l(0,"GamepadRStick")
if(A.bB(m,12))n.l(0,h)
if(A.bB(m,13))n.l(0,g)
if(A.bB(m,14))n.l(0,f)
if(A.bB(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.a(r+(m-l),0,-q+(k-j))
m=i.gt(0)>1?i.gab():i
return new A.lf(m,p,o,A.qM(n,s))},
t5(a,b){return A.Dd(b<a.length?a[b]:0)},
bB(a,b){return b<a.length&&a[b]>=0.5},
Dd(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.c.F((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.c.gci(a)?-s:s},
kR:function kR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lf:function lf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ni:function ni(a){this.a=a},
Bv(a,b,c){var s=new A.jJ(a,c,null,b)
s.kt(a,null,null,b,c)
return s},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
BI(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bZ(new A.J(B.iT,t.e2.a(new A.nY(a)),t.vL),t.yW)
return s==null?null:new A.fs(s)},
Cf(a,b){var s=A.e([],t.s)
switch(b.a){case 0:A.wm(s,a,B.is)
break
case 1:A.wm(s,a,B.it)
break
case 2:A.wm(s,a,B.iW)
break}return s},
wm(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.S(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
BH(a){if(a.a!==21)return null
if(a.e)return B.eL
if(!a.d&&a.b>=0.6&&a.c>=3)return B.eM
return B.eK},
cc:function cc(a,b){this.a=a
this.b=b},
nV:function nV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fs:function fs(a){this.a=a},
nY:function nY(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
Cm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.v(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.ky(s,new A.a(o,n,m),q,p,l,j)
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
ky:function ky(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
FD(a){var s,r,q,p=A.q(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
if(typeof q!="string")throw A.d(B.eZ)
p.k(0,q,r.b)}return p},
mb(a){var s,r,q,p,o,n=a.ga_().bS(0)
B.a.Y(n)
s=t.z
r=A.q(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.u)(n),++p){o=n[p]
r.k(0,o,A.zk(a.h(0,o)))}return A.b5(r,t.N,s)},
zk(a){var s
if(t.f.b(a))return A.mb(A.FD(a))
if(t.j.b(a)){s=t.z
return A.ah(J.fb(a,A.Gv(),s),s)}if(a==null||A.bV(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fB)
return a}throw A.d(A.a7("presentation snapshot contains unsupported value "+J.fa(a).p(0),null,null))},
qb:function qb(a){this.a=a},
yp(a,b,c){var s=A.wO(b),r=A.wO(a)
if(c!==2)A.k(A.ap(c,"version","unsupported save version"))
return new A.fG(c,s,r)},
wO(a){var s,r,q,p,o=A.r(a).i("ad<1>"),n=A.K(new A.ad(a,o),o.i("p.E"))
B.a.Y(n)
o=t.z
s=A.q(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.u)(n),++q){p=n[q]
s.k(0,p,A.zj(a.h(0,p)))}return A.b5(s,t.N,o)},
zj(a){var s,r,q,p
if(t.f.b(a)){s=A.q(t.N,t.z)
for(r=a.gJ(),r=r.gu(r);r.m();){q=r.gn()
p=q.a
if(typeof p!="string")throw A.d(B.fs)
s.k(0,p,q.b)}return A.wO(s)}if(t.j.b(a)){r=t.z
return A.ah(J.fb(a,A.Gz(),r),r)}if(a==null||A.bV(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.d(B.fD)
return a}throw A.d(A.a7("save contains unsupported value "+J.fa(a).p(0),null,null))},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
qG:function qG(){},
eM:function eM(a,b){this.a=a
this.b=b},
xU(a,b,c,d,e,f,g,h){var s=A.e([],t.pC),r=A.e([],t.ns)
return new A.og(a,b,c,d,e,f,g,s,r,h)},
xV(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a4.b,b=c.h(0,"houseSeed"),a=c.h(0,"time"),a0=c.h(0,"dayLoop"),a1=c.h(0,"journal"),a2=c.h(0,"house"),a3=c.h(0,"difficulty")
if(A.aL(b)){s=t.f
s=!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)||!s.b(a3)}else s=!0
if(s)throw A.d(B.fr)
r=c.h(0,"runSeed")
q=A.aL(r)?r:0
p=a.h(0,"day")
o=a.h(0,"hour")
if(!A.aL(p)||p<1||typeof o!="number")throw A.d(B.fM)
if(!isFinite(480))throw A.d(A.ap(480,"daySeconds","must be finite and > 0"))
n=new A.jT(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.a7("saved hour must be finite and in [0, 24)",d,d))
n.b=o
s=t.N
m=t.z
l=A.C9(a5,A.aM(a1,s,m))
k=A.Bs(l,A.aM(a0,s,m),n)
j=A.xX(b)
A.BZ(A.aM(a2,s,m)).mA(j)
m=A.aM(a3,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bV(f))A.k(B.f6)
e=A.Cg(c.h(0,"narrative"))
if(e==null)e=A.pL(d,d,d)
return A.xU(b,q,j,n,l,k,new A.jH(i,h,g,f),e)},
Et(a){var s
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
ex:function ex(a,b){this.a=a
this.b=b},
jS:function jS(){},
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
Ba(a){var s,r,q,p,o,n,m="modelScale",l=A.mj(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.al(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.d(B.fi)
s=A.ej(l,"houseId")
r=A.ej(l,"sourceRef")
q=J.fb(A.mg(l,"rooms"),new A.n7(k),t.bJ)
q=A.K(q,q.$ti.i("a6.E"))
q.$flags=1
p=J.fb(A.mg(l,"portals"),new A.n8(k),t.lT)
p=A.K(p,p.$ti.i("a6.E"))
p.$flags=1
o=J.fb(A.mg(l,"stairs"),new A.n9(),t.gI)
o=A.K(o,o.$ti.i("a6.E"))
o.$flags=1
n=J.fb(A.mg(l,"exteriorCells"),new A.na(),t.N)
n=A.K(n,n.$ti.i("a6.E"))
n.$flags=1
return new A.n6(s,r,q,p,o)},
Bb(a,b){var s=A.mj(a,"room"),r=A.ej(s,"id"),q=A.zX(s.h(0,"origin"),"origin",b),p=A.zX(s.h(0,"size"),"size",b),o=J.fb(A.mg(s,"windows"),new A.nc(b),t.ya)
o=A.K(o,o.$ti.i("a6.E"))
o.$flags=1
return new A.fd(r,q,p,o)},
mj(a,b){return t.P.b(a)?a:A.j4(b+" is not an object")},
mg(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.j4(b+" is not a list")},
ej(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.j4(b+" is not a string")},
j7(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.j4(b+" is not finite")},
FQ(a,b){var s,r
if(t.j.b(a)){s=J.aD(a)
s=s.gt(a)!==3||s.N(a,new A.v8())}else s=!0
if(s)return A.j4(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.Q(a);r.m();)s.push(A.al(r.gn()))
return s},
zX(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.FQ(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)p.push(s[q]*c)
return p},
j4(a){return A.k(A.a7(a,null,null))},
n6:function n6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
n7:function n7(a){this.a=a},
n8:function n8(a){this.a=a},
n9:function n9(){},
na:function na(){},
nb:function nb(a){this.a=a},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nc:function nc(a){this.a=a},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
fc:function fc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fe:function fe(a){this.b=a},
v8:function v8(){},
jt:function jt(a,b){this.a=a
this.b=b
this.d=null},
ns:function ns(a){this.a=a},
kk:function kk(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
lg:function lg(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oK:function oK(){this.b=0},
qC:function qC(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
a0:function a0(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
jM:function jM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o_:function o_(){},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
oM:function oM(){},
oL:function oL(a,b,c){this.a=a
this.b=b
this.c=c},
GJ(a){var s,r,q,p,o,n,m,l
a.C()
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
return new A.ch(B.a9,p,new Uint16Array(A.a1(a.b)),new A.jg(new A.M(s.a,s.b,s.c),new A.M(s.d,s.e,s.f)))},
GI(a){var s,r,q,p,o,n=A.e([],t.uH)
for(s=A.Fz(a,new A.w_(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.jN(o,p.c,p.e))}return n},
Fz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.C()
s=A.q(t.N,t.Ez)
for(r=a.b,q=r.length,p=t.t,o=a.a,n=0;n<q;n+=3){m=r[n]
l=n+1
if(!(l<q))return A.f(r,l)
k=r[l]
l=n+2
if(!(l<q))return A.f(r,l)
j=r[l]
l=o.length
if(!(m<l))return A.f(o,m)
i=o[m]
h=i.x
if(!(k<l))return A.f(o,k)
g=o[k]
f=g.x
if(f===h){if(!(j<l))return A.f(o,j)
e=o[j].x!==h}else e=!0
if(e){if(!(j<l))return A.f(o,j)
throw A.d(A.z("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.f(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.b.q(d,":")?B.b.E(d,0,B.b.bK(d,":")):null
l=new A.d7(d,l,h,A.e([],p))
s.k(0,d,l)}B.a.L(l.d,A.e([m,k,j],p))}r=A.e([],t.wf)
q=s.$ti.i("av<2>")
q=A.K(new A.av(s,q),q.i("p.E"))
B.a.U(q,new A.v1())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.u)(q),++c)r.push(q[c].pv(a))
return r},
Ec(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.jM(r,q,p,o,n,m)},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
w_:function w_(a){this.a=a},
v1:function v1(){},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
eu:function eu(a,b){this.a=a
this.b=b},
jO:function jO(){},
G0(a){var s,r,q,p=new A.oL(A.e([],t.Dl),A.e([],t.t),A.q(t.N,t.S))
for(s=0;s<4;++s)A.Ew(p,a,B.cR[s],15.75,15.75,12.044999999999998,0.63)
p.A(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.A(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.A(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.A(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.A(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.A(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.A(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.A(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a0(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a0(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.ae(r,new A.a0(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.ae(r,q,new A.a0(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a0(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a0(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.ae(q,new A.a0(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.ae(q,r,new A.a0(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.A(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.ae(new A.a0(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a0(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a0(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.ae(new A.a0(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a0(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a0(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a0(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a0(7.875,16.32,16.383,-1,0,0,1,1,0)
p.ae(r,new A.a0(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.ae(r,q,new A.a0(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a0(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a0(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.ae(q,new A.a0(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.ae(q,r,new A.a0(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.Fq(p,15.75,15.75,12.044999999999998,16.32)
A.Ef(p,15.75,15.75,16.32)
A.Es(p,15.75,15.75,12.044999999999998)
A.EA(p,a,15.75)
A.Fw(p,15.75,15.75)
A.Eb(p,15.75)
return p.mJ()},
Ew(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.il)
for(s=b6.b,r=s.length,q=B.u!==b7,p=B.l!==b7,o=B.m===b7,n=B.F===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=b6.aI(k)
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
B.a.l(b4,new A.ec(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aB(i),b=J.Q(h.a),h=new A.S(b,h.b,h.$ti.i("S<1>"));h.m();){a=b.gn()
if(!a.Q||a.aJ(i)!==b7)continue
B:{if(!p||o){a0=g+a.af(i)
break B}if(!q||n){a0=e+a.af(i)
break B}a0=null}B.a.l(b4,new A.ec(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.l||b7===B.m?b8:b9
r=t.i
a1=A.aK([0,s],r)
a2=A.aK([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.u)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.K(a1,a1.$ti.c)
B.a.Y(a4)
a5=A.K(a2,a2.$ti.c)
B.a.Y(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.f(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.f(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.f(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.N(b4,new A.uG(b0,b1,b2,b3)))continue
switch(m){case 0:b5.A(0,b1,b3,0,b0,b2,r)
break
case 2:b5.A(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.A(0,0,b3,b1,r,b2,b0)
break
case 1:b5.A(0,s,b3,b1,b8,b2,b0)
break}}A.Ez(b5,b4,b7,b8,b9,c1)
A.Ex(b5,b4,b7,b8,b9,c1)
A.Ey(b5,b4,b7,b8,b9,c0,c1)},
Ey(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aK([0,a4===B.l||a4===B.m?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.u)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.K(a1,a1.$ti.c)
B.a.Y(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.f(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.N(a3,new A.uF(a,a0,g)))continue
switch(s){case 0:a2.A(1,a0,e,m,a,f,l)
break
case 2:a2.A(1,a0,e,k,a,f,j)
break
case 3:a2.A(1,m,e,a0,l,f,a)
break
case 1:a2.A(1,o,e,a0,n,f,a)
break}}}},
Ex(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
break}}if(a5!==B.l)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.A(2,a+0.18,n,r,a,a1,p)}}},
Ez(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.Fu(a2,g,a4,a5,a6,a7,q)}},
Fu(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
Fq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.A(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.A(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.A(4,i,p,-0.38,j,q,-0.44)
a.A(4,i,p,s,j,q,o)}A.Fr(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.A(5,h+0.5,p,o,h-0.5,r,q)}},
Fr(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a0(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a0(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.ae(n,new A.a0(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.ae(n,m,new A.a0(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a0(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a0(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.ae(m,new A.a0(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.ae(m,n,new A.a0(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
Ef(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.A(0,g+0.35,k,n,g-0.35,l,q)
a.A(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.A(5,d+0.1,o,m,d-0.1,r,p)}}},
Es(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.A(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.A(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.A(6,j,b+0.06,d,k,b,e)}a.A(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
EA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
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
Fw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
Eb(a,b){var s,r
a.A(0,6.7,1,-4.05,-2.5,0,-4.4)
a.A(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.A(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.A(7,b+3,0,-4.55,-3,-0.08,-5.2)},
ec:function ec(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uG:function uG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uF:function uF(a,b,c){this.a=a
this.b=b
this.c=c},
Gx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.xo(b,d,c)
if(k!=null&&!k.e){s=k.b
return new A.dV(B.eQ,k.a,s)}r=A.Aq(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.dV(B.eR,r.a,s)}if(A.Ar(b,d,c)!=null)return B.eV
q=A.Gw(a,b,c,d)
if(q!=null)return new A.dV(B.ce,q.a,"inspect the "+q.b)
p=A.Ap(b,c,d,e)
if(p!=null){o=e.cO(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.dV(B.eT,l,m?"inspect the "+o.b:"inspect "+n)}return B.eW},
Ap(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.mq(a5,s,4.5)
for(q=a6.oK(a4),p=J.Q(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gn()
if(!i.x)continue
h=a6.cO(i.c)
g=i.f.a
f=i.jr(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.a(e-c.a,d-c.b,g-c.c)
a=b.gt(0)
if(a<0.01||a>r)continue
c=b.gab()
a0=a3.b
a1=Math.acos(B.c.F(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.ms(a5,a4,a3.a,new A.a(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Gw(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.jE(c)
if(s.length===0)return f
r=d.aI(e)
q=A.mq(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.u)(s),++l){k=s[l]
j=b.a
i=new A.a(n-j.a,m-j.b,o-j.c)
h=i.gt(0)
if(h<0.01||h>q)continue
g=i.gab()
j=b.b
if(Math.acos(B.c.F(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.ms(d,c,b.a,new A.a(n,m,o)))return k}return f},
dl:function dl(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
A8(a,b){var s,r=new A.d_(new Float32Array(5376)),q=new A.d_(new Float32Array(5376)),p=new A.d_(new Float32Array(5376)),o=new A.d_(new Float32Array(5376)),n=b.d,m=a.aI(b),l=A.hC(b.y),k=A.hC(b.z),j=n.a,i=n.b,h=n.c,g=m.c,f=h+g,e=m.a,d=j+e,c=l.e
r.eL(new A.a(j,i,h),new A.a(j,i,f),new A.a(d,i,f),new A.a(d,i,h),l.c,e/c,g/c)
A.E_(r,b,m)
i+=m.b
c=k.e
q.eL(new A.a(j,i,h),new A.a(d,i,h),new A.a(d,i,f),new A.a(j,i,f),k.c,e/c,g/c)
A.DX(q,b,m)
for(s=0;s<4;++s)A.E4(p,a,b,m,B.cR[s])
for(j=a.aB(b.a),i=J.Q(j.a),j=new A.S(i,j.b,j.$ti.i("S<1>"));j.m();){h=i.gn()
if(h.at==null||h.as)continue
A.z7(o,b,m,h,!0)}A.DY(p,b,m)
A.E0(p,a,b,m)
return new A.qD(B.q.aP(r.a,0,r.b),B.q.aP(q.a,0,q.b),B.q.aP(p.a,0,p.b),B.q.aP(o.a,0,o.b))},
DX(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=5849907,g=b.d,f=g.a,e=g.c,d=g.b+c.b
g=b.a
if(g==="hall")for(g=[f+0.28,f+c.a-0.42],s=d-0.1,r=e+0.2,q=d-0.025,p=e+c.c-0.2,o=0;o<2;++o){n=g[o]
A.o(a,new A.a(n,s,r),new A.a(n+0.14,q,p),h)}else if(g==="living-room"){m=f+c.a*0.48
l=e+c.c*0.52
g=d-0.06
A.o(a,new A.a(m-0.34,g,l-0.34),new A.a(m+0.34,d-0.018,l+0.34),12037536)
A.o(a,new A.a(m-0.22,d-0.075,l-0.22),new A.a(m+0.22,g,l+0.22),h)}else if(g==="kitchen")for(g=e+0.65,s=f+0.16,r=d-0.075,q=f+c.a-0.16,p=d-0.025,k=0;k<3;++k){j=g+k
A.o(a,new A.a(s,r,j),new A.a(q,p,j+0.1),h)}else if(g==="cellar")for(g=[f+0.62,f+c.a-0.78],s=d-0.16,r=e+0.25,q=d-0.08,p=e+c.c-0.25,o=0;o<2;++o){i=g[o]
A.o(a,new A.a(i,s,r),new A.a(i+0.1,q,p),4078648)}},
FZ(a,b,c){var s,r,q=c.at
if(q==null||c.as)return new Float32Array(0)
s=new A.d_(new Float32Array(5376))
r=a.aI(b)
if(q==="kit-front-door-recessed")q=5058596
else q=q==="kit-cellar-door-grille"?5722954:6967617
A.z8(s,b,r,c,q)
return B.q.aP(s.a,0,s.b)},
G_(a,b){var s,r,q,p=new A.d_(new Float32Array(5376)),o=a.aI(b)
for(s=a.aB(b.a),r=J.Q(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.at==null||q.as)continue
A.z7(p,b,o,q,!1)}return B.q.aP(p.a,0,p.b)},
E_(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a2.d,b=c.a,a=c.b,a0=c.c
c=a2.y
s=A.hC(c)
if(c==="floor-wood"){c=a3.c
r=B.c.aU(c/0.22)
for(q=a+0.004,p=a3.a,o=b+p,n=a+0.014,m=s.c,l=0;l<r;++l){k=a0+l*0.22+0.018
j=(l&1)===0?A.f5(m,1.04):A.f5(m,0.84)
A.o(a1,new A.a(b,q,k),new A.a(o,n,k+0.15),j)}q=a2.a
o=q==="hall"
if(o||q==="landing"){i=o?1:0.82
h=b+(p-i)*0.5
p=h+i
c=a0+c
A.o(a1,new A.a(h,a+0.016,a0+0.18),new A.a(p,a+0.026,c-0.18),6443866)
A.o(a1,new A.a(h+0.08,a+0.027,a0+0.22),new A.a(p-0.08,a+0.033,c-0.22),8548460)}if(q==="living-room"){A.o(a1,new A.a(b+1.15,a+0.018,a0+2.15),new A.a(b+4.7,a+0.03,a0+4.35),5589578)
A.o(a1,new A.a(b+1.28,a+0.031,a0+2.28),new A.a(b+4.57,a+0.037,a0+4.22),7824746)}return}if(c==="floor-linoleum"){for(c=s.c,q=a0+0.18,p=b+0.08,o=a+0.004,n=b+a3.a-0.08,m=a+0.012,l=0;l<5;++l){k=q+l*0.62
g=(l&1)===0?A.f5(c,1.04):A.f5(c,0.88)
A.o(a1,new A.a(p,o,k),new A.a(n,m,k+0.5),g)}return}if(c==="floor-tiles"){for(c=s.c,q=b+0.08,p=a0+0.08,o=a+0.004,n=a+0.012,f=0;f<4;++f)for(e=q+f*0.86,m=e+0.78,d=0;d<3;++d){k=p+d*0.86
g=(f+d&1)===0?A.f5(c,1.06):A.f5(c,0.88)
A.o(a1,new A.a(e,o,k),new A.a(m,n,k+0.78),g)}return}if(c==="floor-concrete"){c=s.c
A.o(a1,new A.a(b+0.08,a+0.004,a0+0.08),new A.a(b+a3.a-0.08,a+0.014,a0+a3.c-0.08),c)
A.o(a1,new A.a(b+2.2,a+0.015,a0+2.45),new A.a(b+2.68,a+0.021,a0+2.93),A.f5(c,0.58))}},
E0(b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7="bathroom",a8=b4.d,a9=a8.a,b0=a8.b,b1=a8.c
switch(b4.a){case"living-room":A.m8(b2,b4,b5,"living")
A.j2(b2,b4,"living")
a8=a9+b5.a
s=a8-0.48
r=b1+b5.c*0.4
A.o(b2,new A.a(s,b0,r-0.85),new A.a(a8,b0+2.55,r+0.85),7824724)
A.o(b2,new A.a(s-0.38,b0+0.02,r-0.72),new A.a(a8+0.05,b0+0.16,r+0.72),a2)
q=b0+2.34
A.o(b2,new A.a(s-0.52,b0+2.18,r-0.94),new A.a(a8+0.08,q,r+0.94),a3)
p=s-0.02
A.o(b2,new A.a(p,b0+0.45,r-0.48),new A.a(a8+0.03,b0+1.48,r+0.48),2170396)
for(a8=s-0.08,o=b0+0.28,n=r-0.42,m=b0+1.35,l=r-0.34,k=0;k<3;++k){j=k*0.18
A.o(b2,new A.a(a8+j,o,n),new A.a(p+j,m,l),a4)}for(a8=s-0.01,p=b0+1.55,o=s+0.04,n=b0+1.7,m=r-0.18,k=0;k<4;++k){j=k*0.2
A.o(b2,new A.a(a8,p,l+j),new A.a(o,n,m+j),a2)}for(a8=[r-0.68,r+0.56],p=s-0.42,o=b0+2,n=s-0.26,m=b0+2.2,i=0;i<2;++i){h=a8[i]
A.o(b2,new A.a(p,o,h),new A.a(n,m,h+0.16),a5)}A.o(b2,new A.a(s-0.27,q,r-0.58),new A.a(s-0.07,b0+2.52,r-0.38),a6)
A.o(b2,new A.a(s-0.25,q,r+0.34),new A.a(s-0.06,b0+2.49,r+0.52),a3)
break
case"hall":A.E1(b2,b3,b4,b5,a5,a4)
A.E3(b2,b3,b4,b5,a5,a4)
A.j2(b2,b4,"hall")
A.o(b2,new A.a(a9+0.28,b0+0.78,b1+0.52),new A.a(a9+0.68,b0+0.88,b1+2.15),a5)
for(a8=[b1+0.66,b1+2.01],q=a9+0.34,p=a9+0.42,o=b0+0.8,i=0;i<2;++i){g=a8[i]
A.o(b2,new A.a(q,b0,g),new A.a(p,o,g+0.08),a3)}f=a9+1.22
a8=b1+0.1
A.o(b2,new A.a(f-0.28,b0+2.35,b1+0.02),new A.a(f+0.28,b0+3.02,a8),a5)
A.o(b2,new A.a(f-0.13,b0+2.48,a8),new A.a(f+0.13,b0+2.72,b1+0.15),a2)
a8=b1+0.08
A.o(b2,new A.a(f-0.025,b0+1.82,a8),new A.a(f+0.025,b0+2.36,b1+0.13),a4)
for(q=a9+1.7,p=b0+1.74,o=a9+1.78,n=b0+1.84,m=b1+0.16,k=0;k<3;++k){l=k*0.36
A.o(b2,new A.a(q+l,p,a8),new A.a(o+l,n,m),a4)}a8=b0+0.72
A.o(b2,new A.a(a9+0.86,b0,b1+0.62),new A.a(a9+1.1,a8,b1+0.9),a6)
A.o(b2,new A.a(a9+0.91,a8,b1+0.68),new A.a(a9+1.05,b0+0.82,b1+0.84),a5)
break
case"kitchen":A.j2(b2,b4,"kitchen")
a8=a9+b5.a
e=a8-0.62
q=b0+1.28
A.o(b2,new A.a(e,b0,b1+0.72),new A.a(a8,q,b1+2.18),a4)
A.o(b2,new A.a(e-0.08,q,b1+0.62),new A.a(a8+0.04,b0+1.38,b1+2.28),a2)
for(a8=e+0.12,q=b0+1.39,p=b1+0.88,o=e+0.4,n=b0+1.45,m=b1+1.16,k=0;k<3;++k){l=k*0.4
A.o(b2,new A.a(a8,q,p+l),new A.a(o,n,m+l),2170396)}a8=b0+0.82
q=b0+0.94
A.o(b2,new A.a(a9+1.05,a8,b1+1.15),new A.a(a9+3.1,q,b1+2.35),a3)
for(p=[a9+1.18,a9+2.94],o=b1+1.28,n=b1+1.38,i=0;i<2;++i){d=p[i]
A.o(b2,new A.a(d,b0,o),new A.a(d+0.1,a8,n),a5)}A.o(b2,new A.a(a9+0.48,b0+1.72,b1+2.74),new A.a(a9+2.55,b0+1.84,b1+2.88),a5)
a8=b0+1.02
A.o(b2,new A.a(a9+3.38,q,b1+1.26),new A.a(a9+4.48,a8,b1+2.22),a6)
q=b1+1.66
p=b1+1.74
A.o(b2,new A.a(a9+3.82,a8,q),new A.a(a9+3.9,b0+1.34,p),a4)
A.o(b2,new A.a(a9+3.72,b0+1.3,q),new A.a(a9+4,b0+1.36,p),a4)
for(a8=a9+1.38,q=b0+0.95,p=b1+1.48,o=a9+1.78,n=b0+1.05,m=b1+1.88,k=0;k<2;++k){l=k*0.55
A.o(b2,new A.a(a8+l,q,p),new A.a(o+l,n,m),a6)}break
case"cellar":A.j2(b2,b4,"cellar")
for(a8=a9+0.35,q=b1+1.05,p=a9+0.58,o=b0+0.55,n=b1+2,k=0;k<4;++k){m=k*0.28
A.o(b2,new A.a(a8+m,b0,q),new A.a(p+m,o+B.d.M(k,2)*0.18,n),a5)}A.o(b2,new A.a(a9+2.55,b0+0.15,b1+0.38),new A.a(a9+2.72,b0+1.55,b1+0.56),a4)
A.o(b2,new A.a(a9+2.42,b0+1.28,b1+0.32),new A.a(a9+2.86,b0+1.38,b1+0.65),a6)
A.o(b2,new A.a(a9+0.4,b0+1.72,b1+0.45),new A.a(a9+3.4,b0+1.82,b1+0.58),a4)
A.o(b2,new A.a(a9+1.9,b0+1.58,b1+0.42),new A.a(a9+2.06,b0+1.76,b1+0.61),a4)
A.o(b2,new A.a(a9+1.84,b0+1.62,b1+0.55),new A.a(a9+2.12,b0+1.7,b1+0.64),a4)
break
case"bedroom":A.m8(b2,b4,b5,"bedroom")
A.j2(b2,b4,"bedroom")
c=a9+0.85
b=b1+2.08
a8=b0+0.72
A.o(b2,new A.a(c,b0+0.42,b),new A.a(c+3.65,a8,b+2.05),6972528)
A.o(b2,new A.a(c-0.1,a8,b-0.12),new A.a(c+3.75,b0+1.28,b+0.1),a3)
A.o(b2,new A.a(c+0.22,b0+0.74,b+1.35),new A.a(c+1.05,b0+0.9,b+1.82),a6)
a8=a9+b5.a
q=b0+1.48
A.o(b2,new A.a(a8-0.95,b0+0.78,b1+0.58),new A.a(a8-0.18,q,b1+1.42),a3)
A.o(b2,new A.a(a8-1.04,q,b1+0.48),new A.a(a8-0.1,b0+1.57,b1+1.52),a5)
for(a8=[b+0.22,b+0.78],q=c+0.36,p=b0+0.75,o=c+1.12,n=b0+0.92,i=0;i<2;++i){a=a8[i]
A.o(b2,new A.a(q,p,a),new A.a(o,n,a+0.42),a6)}for(a8=[c+0.12,c+3.45],q=b+0.12,p=b+1.72,o=b0+0.08,n=b0+0.44,i=0;i<2;++i){a0=a8[i]
for(m=[q,p],l=a0+0.1,a1=0;a1<2;++a1){g=m[a1]
A.o(b2,new A.a(a0,o,g),new A.a(l,n,g+0.1),a5)}}break
case"landing":A.m8(b2,b4,b5,"landing")
a8=a9+0.48
A.o(b2,new A.a(a9+0.34,b0+0.02,b1+1.62),new A.a(a8,b0+1.06,b1+2.7),a5)
for(q=b0+0.82,p=b1+1.68,o=a9+2.14,n=b0+0.9,m=b1+1.76,k=0;k<4;++k){l=k*0.2
j=k*0.22
A.o(b2,new A.a(a8,q+l,p+j),new A.a(o,n+l,m+j),a3)}for(a8=a9+0.62,q=b0+1.02,p=b1+1.74,o=a9+0.7,n=b0+1.78,m=b1+1.82,k=0;k<3;++k){l=k*0.46
j=k*0.22
A.o(b2,new A.a(a8+l,q,p+j),new A.a(o+l,n,m+j),a5)}break
case"bathroom":A.m8(b2,b4,b5,a7)
A.j2(b2,b4,a7)
a8=b0+0.62
A.o(b2,new A.a(a9+0.3,b0+0.04,b1+0.38),new A.a(a9+2.15,a8,b1+1.22),a6)
q=b0+0.72
A.o(b2,new A.a(a9+0.42,a8,b1+0.48),new A.a(a9+2.03,q,b1+1.12),a2)
a8=a9+b5.a
p=b1+b5.c
A.o(b2,new A.a(a8-0.78,b0+0.12,p-0.88),new A.a(a8-0.18,b0+1.75,p-0.28),a6)
A.o(b2,new A.a(a8-0.86,b0+1.68,p-0.98),new A.a(a8-0.1,b0+1.82,p-0.18),a4)
p=b1+0.68
a8=b0+1.18
o=b1+0.78
A.o(b2,new A.a(a9+0.86,q,p),new A.a(a9+0.96,a8,o),a4)
A.o(b2,new A.a(a9+0.7,b0+1.12,p),new A.a(a9+1.12,a8,o),a4)
break
case"spare-room":A.m8(b2,b4,b5,"spare")
A.o(b2,new A.a(a9+1,b0,b1+0.7),new A.a(a9+3.25,b0+1.65,b1+2),6972528)
A.o(b2,new A.a(a9+0.8,b0+1.6,b1+0.52),new A.a(a9+3.45,b0+1.74,b1+2.18),a3)
a8=a9+b5.a
q=b1+b5.c
A.o(b2,new A.a(a8-1.05,b0,q-1.02),new A.a(a8-0.25,b0+0.72,q-0.24),a5)
for(p=a8-0.98,o=b0+0.18,n=q-1.12,a8-=0.28,m=b0+0.24,q-=1.04,k=0;k<3;++k){l=k*0.16
A.o(b2,new A.a(p,o+l,n),new A.a(a8,m+l,q),a4)}break}A.E2(b2,b3,b4,b5)},
E2(c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=2503224,b9=4545124,c0=7901340,c1=3706428,c2=c8.d,c3=c2.a,c4=c2.b,c5=c2.c
c2=c9.a
switch(c8.a){case"living-room":s=c3+c2*0.45
r=c9.c
q=c5+r*0.5
A.d9(c6,new A.a(s,c4,q),0.85,0.35,b8,16)
p=[B.kl,B.kn,B.kC,B.kz]
for(o=c4+0.35,n=c4+0.8,m=0;m<4;++m){l=p[m]
k=s+l.a
j=q+l.b
A.d9(c6,new A.a(k,o,j),0.12,0.3,b9,8)
A.h9(c6,new A.a(k,n,j),0.16,l.c,!1,8,12)}o=c4+0.55
A.x4(c6,new A.a(s,o,q),0.3,0.45,16752640,!0)
i=c3+0.8
h=c5+r*0.25
g=c5+r*0.35
for(n=c4+0.6,f=0;f<5;++f){e=i+f*0.45
A.d9(c6,new A.a(e,c4,h),0.08,0.45,b8,8)
d=80+f*45
A.h9(c6,new A.a(e,n,h),0.12,(d<<16|d<<8|d)>>>0,!1,6,10)}c=[16766720,15114588,12632256,9489145,14737646]
for(f=0;f<5;++f){e=i+f*0.45
A.d9(c6,new A.a(e,c4,g),0.08,0.45,b9,8)
A.h9(c6,new A.a(e,n,g),0.12,c[f],!1,6,10)}b=c3+c2*0.72
a=c5+r*0.22
a0=c4+0.02
A.o(c6,new A.a(b-0.6,c4,a-0.6),new A.a(b+0.6,a0,a+0.6),3622735)
A.o(c6,new A.a(b-0.4,a0,a-0.4),new A.a(b+0.4,c4+0.03,a+0.4),11583173)
A.d9(c6,new A.a(b-0.3,c4,a),0.02,1.2,b8,6)
A.d9(c6,new A.a(b,c4,a),0.05,1.2,b9,8)
A.d9(c6,new A.a(b+0.3,c4,a),0.1,1.2,b8,10)
a0=c3+c2
a1=a0-1.8
a2=c5+0.6
a3=[0.05,0.1,0.15,0.2,0.3]
for(a4=a1+0.9,f=0;f<5;++f){a5=a2+f*0.4
a6=a3[f]
a7=B.d.M(f,2)===0?b9:c0
A.o(c6,new A.a(a1,c4,a5),new A.a(a4,c4+a6,a5+0.35),a7)}a8=c3+c2*0.5
a4=c5+r
a9=a4-1.2
a7=a9-0.1
b0=c4+2.5
b1=a9+0.1
A.o(c6,new A.a(a8-0.8,c4,a7),new A.a(a8-0.65,b0,b1),b8)
A.o(c6,new A.a(a8+0.65,c4,a7),new A.a(a8+0.8,b0,b1),b8)
A.o(c6,new A.a(a8-0.85,c4+2.4,a9-0.12),new A.a(a8+0.85,c4+2.55,a9+0.12),13840175)
b1=a8-0.82
b0=c4+1
a7=a9-0.11
b2=a8-0.63
b3=a9+0.11
A.o(c6,new A.a(b1,b0,a7),new A.a(b2,c4+1.04,b3),16766720)
A.o(c6,new A.a(b1,c4+1.68,a7),new A.a(b2,c4+1.72,b3),c1)
A.o(c6,new A.a(b1,c4+2,a7),new A.a(b2,c4+2.04,b3),16766720)
b4=c3+1.2
b5=c5+1.2
A.o(c6,new A.a(b4,c4,b5),new A.a(b4+0.8,n,b5+0.8),b9)
A.o(c6,new A.a(b4+0.15,n,b5+0.15),new A.a(b4+0.65,b0,b5+0.65),c0)
A.x4(c6,new A.a(b4+0.4,b0,b5+0.4),0.35,0.35,16117990,!1)
A.A5(c6,new A.a(i,c4,a4-2.2),new A.a(c3+2.2,o,a4-1),b8,B.l)
A.FC(c6,new A.a(a0-2.8,c4,c5+r*0.55),1,0.28,0.14,4,b9)
A.x4(c6,new A.a(c3+c2*0.25,c4,c5+r*0.78),0.75,1.05,1668818,!1)
break
case"hall":r=c5+0.55
A.d9(c6,new A.a(c3+0.55,c4,r),0.22,2.4,b9,12)
A.d9(c6,new A.a(c3+c2-0.55,c4,r),0.22,2.4,b9,12)
A.h9(c6,new A.a(c3+c2*0.5,c4+1.6,c5+1.2),0.18,c1,!0,8,12)
c2=c3+0.8
r=c5+2.4
A.d9(c6,new A.a(c2,c4,r),0.15,0.9,b8,8)
A.h9(c6,new A.a(c2,c4+1.05,r),0.15,16752640,!0,8,12)
break
case"kitchen":b6=c3+c2*0.45
b7=c5+c9.c*0.5
A.o(c6,new A.a(b6-0.7,c4,b7-0.4),new A.a(b6+0.7,c4+0.85,b7+0.4),b8)
c2=c4+1.1
A.h9(c6,new A.a(b6-0.35,c2,b7),0.22,1668818,!1,8,12)
A.h9(c6,new A.a(b6+0.35,c2,b7),0.22,c1,!1,8,12)
c2=c3+0.9
r=c3+1.4
A.o(c6,new A.a(c2,c4,c5+0.9),new A.a(r,c4+0.5,c5+1.4),c0)
A.A5(c6,new A.a(c2,c4,c5+1.5),new A.a(r,c4+0.4,c5+2.2),b9,B.m)
break
default:c2=c3+c2*0.5
r=c5+c9.c*0.5
A.d9(c6,new A.a(c2,c4,r),0.45,0.6,b9,10)
A.o(c6,new A.a(c2-0.15,c4+0.6,r-0.15),new A.a(c2+0.15,c4+0.9,r+0.15),16117990)}},
m8(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j=5913386,i=3680031,h=13155750,g=b.d,f=g.a,e=g.b,d=g.c
switch(a0){case"living":g=e+0.58
A.o(a,new A.a(f+0.45,e,d+1.86),new A.a(f+1.18,g,d+2.66),7694457)
s=e+0.12
r=d+1.92
q=e+0.78
p=d+2.6
A.o(a,new A.a(f+0.34,s,r),new A.a(f+0.48,q,p),j)
A.o(a,new A.a(f+1.15,s,r),new A.a(f+1.29,q,p),j)
p=e+0.72
A.o(a,new A.a(f+0.52,g,d+1.8),new A.a(f+1.12,p,d+1.94),i)
A.o(a,new A.a(f+0.35,e,d+0.42),new A.a(f+1.95,p,d+0.7),i)
A.o(a,new A.a(f+0.28,p,d+0.34),new A.a(f+2.02,e+0.84,d+0.78),j)
for(g=[f+0.62,f+1.32],s=e+0.25,r=d+0.68,q=e+0.29,p=d+0.72,o=0;o<2;++o){n=g[o]
A.o(a,new A.a(n,s,r),new A.a(n+0.34,q,p),h)}break
case"bedroom":g=e+0.72
s=d+0.38
r=e+0.84
A.o(a,new A.a(f+0.35,g,s),new A.a(f+1.24,r,d+0.86),i)
for(q=f+0.42,p=[q,f+1.08],m=d+0.46,l=d+0.54,o=0;o<2;++o){k=p[o]
A.o(a,new A.a(k,e,m),new A.a(k+0.08,g,l),j)}A.o(a,new A.a(f+0.55,r,d+0.47),new A.a(f+1.05,e+0.96,d+0.78),h)
A.o(a,new A.a(q,e+0.82,d+0.32),new A.a(f+1.18,e+1.58,s),j)
break
case"landing":g=e+0.48
s=e+0.72
A.o(a,new A.a(f+0.64,g,d+0.32),new A.a(f+1.75,s,d+0.82),7694457)
A.o(a,new A.a(f+0.58,s,d+0.26),new A.a(f+1.81,e+0.82,d+0.88),j)
for(s=[f+0.72,f+1.62],r=d+0.4,q=d+0.48,o=0;o<2;++o){k=s[o]
A.o(a,new A.a(k,e,r),new A.a(k+0.08,g,q),i)}break
case"bathroom":g=e+0.48
A.o(a,new A.a(f+1.55,g,d+1.72),new A.a(f+2.12,e+0.6,d+2.16),h)
for(s=[f+1.62,f+2],r=d+1.78,q=d+1.85,o=0;o<2;++o){k=s[o]
A.o(a,new A.a(k,e,r),new A.a(k+0.07,g,q),j)}break
case"spare":g=e+0.74
s=e+0.86
A.o(a,new A.a(f+1.3,g,d+2.3),new A.a(f+2.42,s,d+2.72),j)
for(r=[f+1.4,f+2.3],q=d+2.36,p=d+2.44,o=0;o<2;++o){k=r[o]
A.o(a,new A.a(k,e,q),new A.a(k+0.08,g,p),i)}A.o(a,new A.a(f+1.62,s,d+2.39),new A.a(f+2.1,e+0.98,d+2.63),h)
break}},
j2(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=7694457,c=3420976,b=a3.d,a=b.a,a0=b.b,a1=b.c
switch(a4){case"living":A.o(a2,new A.a(a+0.42,a0,a1+3.24),new A.a(a+0.82,a0+0.26,a1+3.62),13155750)
for(b=a+0.57,s=a0+0.25,r=a1+3.34,q=a+0.62,p=a0+0.92,o=a1+3.39,n=0;n<4;++n){m=n*0.05
l=n*0.04
A.o(a2,new A.a(b+m,s,r-l),new A.a(q+m,p-n*0.07,o-l),d)}break
case"hall":for(b=a+1.62,s=a0+1.88,r=a1+0.04,q=a0+2.24,p=a1+0.1,o=a0+1.94,m=a0+2.16,l=a1+0.12,n=0;n<3;++n){k=b+n*0.38
j=B.d.M(n,2)*0.1
A.o(a2,new A.a(k,s+j,r),new A.a(k+0.25,q+j,p),5913386)
A.o(a2,new A.a(k+0.045,o+j,p),new A.a(k+0.205,m+j,l),13155750)}break
case"kitchen":b=a1+2.88
A.o(a2,new A.a(a+2.98,a0+1.1,a1+2.82),new A.a(a+3.05,a0+1.72,b),c)
s=a+2.72
A.o(a2,new A.a(s,a0+0.82,a1+2.84),new A.a(a+3.2,a0+1.15,a1+2.9),d)
for(s=[a+2.42,s],r=a0+1.38,q=a1+2.8,p=a0+1.48,i=0;i<2;++i){h=s[i]
A.o(a2,new A.a(h,r,q),new A.a(h+0.06,p,b),c)}break
case"cellar":A.o(a2,new A.a(a+2.82,a0,a1+2.72),new A.a(a+3.62,a0+0.58,a1+3.48),5913386)
for(b=a+2.96,s=a1+2.9,r=a0+0.52,q=a0+0.88,n=0;n<4;++n){g=b+B.d.M(n,2)*0.32
f=s+B.d.V(n,2)*0.32
A.o(a2,new A.a(g,r,f),new A.a(g+0.12,q,f+0.12),3680031)}break
case"bedroom":for(b=[a+0.62,a+0.86],s=a0+0.02,r=a1+1.28,q=a0+0.1,p=a1+1.62,i=0;i<2;++i){e=b[i]
A.o(a2,new A.a(e,s,r),new A.a(e+0.18,q,p),d)}break
case"bathroom":b=a0+1.26
A.o(a2,new A.a(a+0.34,b,a1+2.22),new A.a(a+1.24,a0+1.32,a1+2.28),c)
A.o(a2,new A.a(a+0.48,a0+0.82,a1+2.24),new A.a(a+1.1,b,a1+2.3),d)
break}},
E3(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.d
if(d.length===0)return
s=B.a.gP(d)
d=s.d
r=d.a+0.24
q=s.e
p=q.a-0.24
o=q.c
n=c.d.b
q=(n+a0.b-0.18-n-0.1)/(q.b-d.b)
if(1<q)q=1
m=o-q*(o-d.c)+0.28
l=o-0.72
k=m+1.02
l=l<k?l:k
if(l<=m)return
d=n+1.72
A.o(a,new A.a(r+0.03,n+0.1,m+0.03),new A.a(p-0.03,d,l-0.03),2367259)
q=m+0.08
o=l-0.08
A.o(a,new A.a(r+0.18,n+0.92,q),new A.a(p-0.18,n+0.98,o),a1)
j=r-0.055
A.o(a,new A.a(j-0.06,n+0.08,m-0.08),new A.a(j,n+1.86,l+0.08),6965557)
A.o(a,new A.a(j-0.075,n+0.18,q),new A.a(j-0.005,d,o),4861989)
for(q=[m+0.2,m+0.63],o=j-0.088,i=n+0.28,h=j-0.006,g=n+0.57,f=0;f<2;++f){e=q[f]
A.o(a,new A.a(o,i,e),new A.a(h,g,e+0.27),5847339)}A.o(a,new A.a(j-0.11,d,m-0.1),new A.a(j+0.01,n+1.84,l+0.1),6965557)
A.o(a,new A.a(j-0.12,n+0.9,m+0.52),new A.a(j-0.08,n+0.99,m+0.61),a2)},
E1(b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=3680031,b1=b3.d
if(b1.length===0)return
s=B.a.gP(b1)
r=s.d
q=s.e
p=r.a+0.12
o=q.a-0.12
n=q.b
b1=b4.d.b
m=b1+b5.b
l=m-0.18
if(n<l)l=n
k=l-b1-0.1
if(0.1>k)k=0.1
j=k/(n-r.b)
if(1<j)j=1
i=q.c
h=i-j*(i-r.c)
g=B.c.pi(k/0.18)
f=B.c.aL(1>g?1:g)
e=k/f
g=i-h
d=g/f
c=b1+0.1
for(b=0;b<f;){++b
a=i-b*d
A.o(b2,new A.a(p,c,a),new A.a(o,c+b*e,a+d),b6)}a0=b1+0.08
a1=b1+0.34
A.o(b2,new A.a(p-0.1,a0,h),new A.a(p,a1,i),b0)
A.o(b2,new A.a(o,a0,h),new A.a(o+0.1,a1,i),b0)
a2=o+0.16
a3=o+0.25
a4=b1+0.82
a5=l+0.78
a6=m-0.12
a5=a5<a6?a5:a6
A.o(b2,new A.a(a2,a0,i-0.12),new A.a(a3,a4+0.12,i+0.02),b0)
b1=a5-0.86
if(a0>b1)b1=a0
A.o(b2,new A.a(a2,b1,h-0.02),new A.a(a3,a5,h+0.12),b0)
for(b1=a5-a4,m=a2+0.01,a0=a3-0.01,b=0;b<=5;++b){a7=b/5
a8=i-a7*g
a9=a4+a7*b1
A.o(b2,new A.a(m,a9-0.7,a8-0.025),new A.a(a0,a9,a8+0.025),b7)}A.o(b2,new A.a(a2-0.05,a5-0.08,h-0.08),new A.a(a3+0.05,a5+0.08,h+0.08),b0)},
E4(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.l||a4===B.m?a3.a:a3.c,a=A.e([],t.l5)
for(s=a2.a,r=a1.aB(s),q=J.Q(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
if(!p.as&&p.aJ(s)===a4)a.push(new A.eb(p.af(s),p.af(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.eb(q,q+n.e,p,p+n.f))}}s=t.i
r=A.aK([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.u)(a),++o){m=a[o]
r.L(0,A.e([m.a,m.b],p))}l=A.K(r,r.$ti.c)
B.a.Y(l)
s=A.aK([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.u)(a),++o){m=a[o]
s.L(0,A.e([m.c,m.d],p))}k=A.K(s,s.$ti.c)
B.a.Y(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.f(l,j)
f=l[j]
if(!(i<r))return A.f(l,i)
e=l[i]
if(!(h<s))return A.f(k,h)
d=k[h]
c=k[g]
if(B.a.N(a,new A.tU(f,e,d,c)))continue
A.FR(a0,a2,a3,a4,f,e,d,c)}A.E5(a0,a2,a3,a4,b,a)},
E5(b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=b1.a
if(a9==="cellar")return
s=a9==="living-room"||a9==="hall"
r=a9==="bedroom"
q=r||a9==="landing"||a9==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.tS(b0,b1,b2,b3,b4,b5,0.02,0.17,0.032,p)
o=!s
if(!o||a9==="landing")A.tS(b0,b1,b2,b3,b4,b5,0.88,0.94,0.022,p)
if(!o||r){n=b2.b-0.58
A.tS(b0,b1,b2,b3,b4,b5,n,n+0.055,0.022,p)}a9=b2.b
r=s?0.13:0.09
m=a9-0.012
o=s?0.055:0.038
A.tS(b0,b1,b2,b3,b4,b5,a9-r,m,o,p)
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
if(o>0)A.bc(b0,b1,b2,b3,j,o,f,d,0.04,p)
if(i<b4)A.bc(b0,b1,b2,b3,i,h,f,d,0.04,p)
if(e<a9)A.bc(b0,b1,b2,b3,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.bc(b0,b1,b2,b3,j,h,0>o?0:o,g,0.065,p)}}for(a9=b1.e,r=A.G(a9),o=r.i("n(1)").a(new A.tT(b3)),a9=B.a.gu(a9),r=new A.S(a9,o,r.i("S<1>")),o=b2.c,i=b3!==B.l,e=b3===B.m,c=b2.a;r.m();){b=a9.gn()
a=b.c
a0=a+b.e
a1=b.d
a2=a1+b.f
a3=b.r
a4=a3?10788240:p
a5=(a+a0)*0.5
A.bc(b0,b1,b2,b3,a5-0.0175,a5+0.0175,a1,a2,0.032,a4)
a5=(a1+a2)*0.5
A.bc(b0,b1,b2,b3,a,a0,a5-0.0175,a5+0.0175,0.032,a4)
a6=!i||e?0.11:0.14
a5=a-0.07
if(0>a5)a5=0
a7=!i||e?c:o
a8=a0+0.07
a7=a7<a8?a7:a8
a8=a1-0.055
A.bc(b0,b1,b2,b3,a5,a7,0.018>a8?0.018:a8,a1,a6,p)
if(a3)A.bc(b0,b1,b2,b3,a+0.05,a0-0.05,a1+0.06,a1+0.09,0.025,13683904)
A.E6(b0,b1,b2,b3,b,p)}},
E6(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.a
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
A.bc(a3,a4,a5,a6,a2,s<g?s:g,o,k,0.055,i)
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
if(e>f){A.bc(a3,a4,a5,a6,c,b,f,e,0.045,h)
A.bc(a3,a4,a5,a6,a,a0,f,e,0.045,h)
a1=f+(e-f)*0.55
a2=b-0.035
if(c>a2)a2=c
p=a1-0.035
n=a1+0.035
A.bc(a3,a4,a5,a6,a2,b,p,n,0.065,a8)
b=a+0.035
A.bc(a3,a4,a5,a6,a,a0<b?a0:b,p,n,0.065,a8)}},
tS(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.FG(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.bc(a,b,c,d,n,o,g,h,i,j)}},
FG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.Fa,h=A.e([new A.fS(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.u)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.l(p,k)
continue}if(m>j)B.a.l(p,new A.fS(j,m))
j=k.b
if(n<j)B.a.l(p,new A.fS(n,j))}h=p}return h},
DY(a,b,c){var s,r,q,p,o,n,m,l,k=b.d,j=k.a,i=c.a,h=j+i*0.5,g=k.c,f=c.c,e=g+f*0.5
k=k.b
s=k+c.b
r=b.a
q=r==="living-room"
if(!q&&r!=="hall"&&r!=="bedroom"){if(!B.kX.q(0,r))return
p=r==="kitchen"?j+i*0.58:h
j=r==="bathroom"
o=j?g+f*0.42:e
n=k+1.55
m=s-0.58
n=n>m?n:m
A.o(a,new A.a(p-0.025,n,o-0.025),new A.a(p+0.025,s-0.08,o+0.025),4209460)
k=n-0.1
j=j?12894131:7626833
A.o(a,new A.a(p-0.14,k,o-0.14),new A.a(p+0.14,n,o+0.14),j)
A.o(a,new A.a(p-0.09,n-0.16,o-0.09),new A.a(p+0.09,k,o+0.09),12102291)
return}l=q?13748148:13024682
k=s-0.018
A.o(a,new A.a(h-0.24,k,e-0.24),new A.a(h+0.24,s,e+0.24),l)
j=s-0.034
A.o(a,new A.a(h-0.15,j,e-0.15),new A.a(h+0.15,k,e+0.15),l)
A.o(a,new A.a(h-0.055,s-0.048,e-0.055),new A.a(h+0.055,j,e+0.055),l)},
bc(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
switch(d.a){case 0:A.o(a,new A.a(r+e,q+g,p),new A.a(r+f,q+h,p+i),j)
return
case 2:s=p+c.c
A.o(a,new A.a(r+e,q+g,s-i),new A.a(r+f,q+h,s),j)
return
case 1:s=r+c.a
A.o(a,new A.a(s-i,q+g,p+e),new A.a(s,q+h,p+f),j)
return
case 3:A.o(a,new A.a(r,q+g,p+e),new A.a(r+i,q+h,p+f),j)
return}},
o(a,b,c,d){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
m=c.c
s=new A.a(o,n,m)
r=new A.a(k,n,m)
q=new A.a(k,i,m)
p=new A.a(o,i,m)
a.R(j,l,g,h,d)
a.R(s,r,q,p,d)
a.R(l,s,p,g,d)
a.R(r,j,h,q,d)
a.R(l,j,r,s,d)
a.R(g,p,q,h,d)},
d9(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h=6.283185307179586/a3,g=b.a,f=b.b,e=f+a1,d=b.c,c=new A.a(g,e,d)
for(s=0;s<a3;){r=s*h;++s
q=s*h
p=g+Math.cos(r)*a0
o=d+Math.sin(r)*a0
n=new A.a(p,f,o)
m=g+Math.cos(q)*a0
l=d+Math.sin(q)*a0
k=new A.a(m,f,l)
j=new A.a(p,e,o)
i=new A.a(m,e,l)
a.b5(n,k,i,j,a2,!1)
a.b5(c,c,i,j,a2,!1)
a.b5(b,n,k,b,a2,!1)}},
h9(a,b,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
for(s=b.a,r=b.b,q=b.c,p=0;p<a3;){o=p/a3*3.141592653589793;++p
n=p/a3*3.141592653589793
for(m=a0*Math.sin(o),l=r+a0*Math.cos(o),k=a0*Math.sin(n),j=r+a0*Math.cos(n),i=0;i<a4;){h=i/a4*3.141592653589793*2;++i
g=i/a4*3.141592653589793*2
f=Math.cos(h)
e=Math.sin(h)
d=Math.cos(g)
c=Math.sin(g)
a.b5(new A.a(s+m*f,l,q+m*e),new A.a(s+m*d,l,q+m*c),new A.a(s+k*d,j,q+k*c),new A.a(s+k*f,j,q+k*e),a1,a2)}}},
A5(a,b,c,d,e){var s,r,q,p,o=b.a,n=b.b,m=b.c,l=new A.a(o,n,m),k=c.a,j=new A.a(k,n,m),i=c.b,h=new A.a(k,i,m),g=new A.a(o,i,m)
m=c.c
s=new A.a(o,n,m)
r=new A.a(k,n,m)
q=new A.a(k,i,m)
p=new A.a(o,i,m)
a.R(l,j,r,s,d)
switch(e.a){case 0:a.R(s,r,h,g,d)
a.R(j,l,g,h,d)
a.R(l,s,g,g,d)
a.R(r,j,h,h,d)
break
case 2:a.R(j,l,p,q,d)
a.R(s,r,q,p,d)
a.R(l,s,p,l,d)
a.R(r,j,j,q,d)
break
case 1:a.R(l,s,q,h,d)
a.R(r,j,h,q,d)
a.R(j,l,l,h,d)
a.R(s,r,q,s,d)
break
case 3:a.R(r,j,g,p,d)
a.R(l,s,p,g,d)
a.R(j,l,g,j,d)
a.R(s,r,r,p,d)
break}},
x4(a,b,c,d,e,f){var s,r,q,p=c*0.5,o=b.a,n=b.b,m=b.c,l=new A.a(o,n+d,m),k=o-p,j=m-p,i=new A.a(k,n,j)
o+=p
s=new A.a(o,n,j)
m+=p
r=new A.a(o,n,m)
q=new A.a(k,n,m)
a.b5(i,s,r,q,e,f)
a.b5(i,s,l,l,e,f)
a.b5(s,r,l,l,e,f)
a.b5(r,q,l,l,e,f)
a.b5(q,i,l,l,e,f)},
FC(a,b,c,d,e,f,g){var s,r,q,p,o,n
for(s=b.c,r=b.a,q=b.b,p=r+c,o=0;o<f;){n=s+o*d;++o
A.o(a,new A.a(r,q,n),new A.a(p,q+o*e,n+d),g)}},
FR(a,b,c,d,e,f,a0,a1){var s,r,q,p,o,n,m,l,k=null,j=b.d,i=j.a,h=j.b,g=j.c
j=d.a
switch(j){case 0:s=new A.a(i+e,h+a0,g)
break
case 2:s=new A.a(i+f,h+a0,g+c.c)
break
case 1:s=new A.a(i+c.a,h+a1,g+f)
break
case 3:s=new A.a(i,h+a1,g+e)
break
default:s=k}switch(j){case 0:r=new A.a(i+f,h+a0,g)
break
case 2:r=new A.a(i+e,h+a0,g+c.c)
break
case 1:r=new A.a(i+c.a,h+a1,g+e)
break
case 3:r=new A.a(i,h+a1,g+f)
break
default:r=k}switch(j){case 0:q=new A.a(i+f,h+a1,g)
break
case 2:q=new A.a(i+e,h+a1,g+c.c)
break
case 1:q=new A.a(i+c.a,h+a0,g+e)
break
case 3:q=new A.a(i,h+a0,g+f)
break
default:q=k}switch(j){case 0:p=new A.a(i+e,h+a1,g)
break
case 2:p=new A.a(i+f,h+a1,g+c.c)
break
case 1:p=new A.a(i+c.a,h+a0,g+f)
break
case 3:p=new A.a(i,h+a0,g+e)
break
default:p=k}switch(j){case 0:o=new A.a(0,0,0.003)
break
case 2:o=new A.a(0,0,-0.003)
break
case 1:o=new A.a(-0.003,0,0)
break
case 3:o=new A.a(0.003,0,0)
break
default:o=k}n=b.x
m=A.hC(n).e
a.eL(s.a9(0,o),r.a9(0,o),q.a9(0,o),p.a9(0,o),A.hC(n).c,(f-e)/m,(a1-a0)/m)
l=A.FS(b,d)
switch(j){case 0:o=new A.a(s.a,s.b,s.c-l)
break
case 2:o=new A.a(r.a,s.b,s.c)
break
case 1:o=new A.a(s.a,s.b,p.c)
break
case 3:o=new A.a(s.a-l,s.b,s.c)
break
default:o=k}switch(j){case 0:j=new A.a(r.a,q.b,s.c)
break
case 2:j=new A.a(s.a,q.b,s.c+l)
break
case 1:j=new A.a(s.a+l,q.b,r.c)
break
case 3:j=new A.a(p.a,q.b,r.c)
break
default:j=k}A.o(a,o,j,A.f5(A.hC(n).c,0.68))},
f5(a,b){var s,r=new A.v_(b),q=r.$1(a>>>16&255)
if(typeof q!=="number")return q.dd()
s=r.$1(a>>>8&255)
if(typeof s!=="number")return s.dd()
r=r.$1(a&255)
if(typeof r!=="number")return A.jd(r)
return(q<<16|s<<8|r)>>>0},
FS(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-23.625)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-23.625)<0.001
break
default:s=null}return s?0.6300000000000001:0.27},
z7(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.aJ(d),b=a3.af(d),a=b+a3.w
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
A.o(a0,new A.a(r+l,s,d),new A.a(k,j,i),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(l,s,d),new A.a(r+e,j,i),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.o(a0,new A.a(r+n,s+m,d),new A.a(r+h,j,i),q)
A.o(a0,new A.a(k,s,d),new A.a(l,s+0.05,i),q)
break
case 2:r=d.a
n=b-0.075
m=0>n
l=m?0:n
d=d.c+a2.c
k=d-0.12
j=r+b
i=s+p
A.o(a0,new A.a(r+l,s,k),new A.a(j,i,d),q)
l=r+a
h=a2.a
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(l,s,k),new A.a(r+e,i,d),q)
if(m)n=0
m=p-0.075
if(0>m)m=0
h=f?h:g
A.o(a0,new A.a(r+n,s+m,k),new A.a(r+h,i,d),q)
A.o(a0,new A.a(j,s,k),new A.a(l,s+0.05,d),q)
break
case 1:r=d.a+a2.a
n=r-0.12
d=d.c
m=b-0.075
l=0>m
k=l?0:m
j=s+p
i=d+b
A.o(a0,new A.a(n,s,d+k),new A.a(r,j,i),q)
k=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(n,s,k),new A.a(r,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(l)m=0
l=f?h:g
A.o(a0,new A.a(n,s+e,d+m),new A.a(r,j,d+l),q)
A.o(a0,new A.a(n,s,i),new A.a(r,s+0.05,k),q)
break
case 3:r=d.a
d=d.c
n=b-0.075
m=0>n
l=m?0:n
k=r+0.12
j=s+p
i=d+b
A.o(a0,new A.a(r,s,d+l),new A.a(k,j,i),q)
l=d+a
h=a2.c
g=a+0.075
f=h<g
e=f?h:g
A.o(a0,new A.a(r,s,l),new A.a(k,j,d+e),q)
e=p-0.075
if(0>e)e=0
if(m)n=0
m=f?h:g
A.o(a0,new A.a(r,s+e,d+n),new A.a(k,j,d+m),q)
A.o(a0,new A.a(r,s,i),new A.a(k,s+0.05,l),q)
break}if(a4)A.z8(a0,a1,a2,a3,q)
A.DZ(a0,a1,a2,a3)},
DZ(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=4209719,d=a6.a,c=a8.af(d),b=a8.w,a=c+b,a0=c+b*0.72,a1=a7.b,a2=a1-0.34,a3=a8.x,a4=a3<1.02?a3:1.02
a2=a2<a4?a2:a4
s=a8.aJ(d)
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
A.bc(a5,a6,a7,s,d,q,p,o<n?o:n,0.16,e)
m=a-0.11
l=a1-0.2
k=a3<a1?a3:a1
l=l<k?l:k
for(d=[0.46,l*0.5,l-0.46],a3=m+0.026,q=a7.c,p=m-0.026,o=a1-0.08,n=s===B.m,j=a7.a,i=0;i<3;++i){h=d[i]
if(h<=0.12||h>=o)continue
g=0>p?0:p
f=!r||n?j:q
f=f<a3?f:a3
A.bc(a5,a6,a7,s,g,f,h-0.075,h+0.075,0.11,e)}if(a8.at==="kit-front-door-recessed"){d=c+0.1
a3=a-0.08
d=d>a3?d:a3
A.bc(a5,a6,a7,s,c+0.08,d,0.16,0.25,0.13,e)
d=a1-0.36
d=d<1.46?d:1.46
a1-=0.3
a1=a1<1.52?a1:1.52
A.bc(a5,a6,a7,s,c+b*0.34,c+b*0.66,d,a1,0.15,9139797)}},
z8(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.aJ(o),m=d.af(o)
o=b.d
s=o.b
r=c.b
q=d.x
r=r<q?r:q
if(d.ax)switch(n.a){case 0:p=o.a+m
o=o.c
A.o(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.o(a,new A.a(p,s,o-d.w),new A.a(p+0.055,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.o(a,new A.a(p-d.w,s,o),new A.a(p,s+r,o+0.055),e)
break
case 3:p=o.a
o=o.c+m
A.o(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break}else switch(n.a){case 0:p=o.a+m
o=o.c
A.o(a,new A.a(p,s,o),new A.a(p+d.w,s+r,o+0.055),e)
break
case 2:p=o.a+m
o=o.c+c.c
A.o(a,new A.a(p,s,o-0.055),new A.a(p+d.w,s+r,o),e)
break
case 1:p=o.a+c.a
o=o.c+m
A.o(a,new A.a(p-0.055,s,o),new A.a(p,s+r,o+d.w),e)
break
case 3:p=o.a
o=o.c+m
A.o(a,new A.a(p,s,o),new A.a(p+0.055,s+r,o+d.w),e)
break}},
qD:function qD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tU:function tU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tT:function tT(a){this.a=a},
v_:function v_(a){this.a=a},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(a,b){this.a=a
this.b=b},
xX(c1){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="under-stair-cupboard",a="wallpaper-damask",a0="kitchen",a1="mantle-kitchen",a2="shopping-list",a3="mantle-bedroom",a4="journal-desk",a5="half-written-letter",a6="landing",a7="landing-bathroom",a8="bathroom",a9="bathroom-mirror",b0="spare-room",b1="previous-tenant-post",b2="calendar",b3="undone-task",b4="kit-internal-four-panel-door",b5=t.eY,b6=A.e([],b5),b7=t.qP,b8=A.e([],b7),b9=A.e([],t.DZ),c0=t.N
c0=new A.oI(b6,b8,b9,A.q(c0,t.U),A.q(c0,t.T),new A.oK())
s=t.E
r=t.s
q=t.yH
p=t.b4
B.a.L(b6,A.e([new A.aV(n,B.au,new A.a(4.5,3.9,4),new A.a(0,0,0),A.e([new A.ba("living-north-west",B.l,0.5,0.9,1.2,1.8,!1,!0),new A.ba("living-north-east",B.l,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.bh(m,l,new A.a(1,1.95,1),!1,!1,m),new A.bh(k,j,new A.a(3,1.95,3),!1,!1,k)],q),B.b5,"wallpaper-stripes",i,h,B.M),new A.aV(g,B.au,new A.a(2.5,3.9,7),new A.a(4.5,0,0),A.e([new A.ba("hall-fanlight",B.l,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.bh("mantle-hall","the hall mantle",new A.a(1,1.95,3.5),!1,!1,o)],q),A.e([new A.bj(e,e,new A.a(0.2,2.175,0.35)),new A.bj(d,d,new A.a(2.2,2.55,3)),new A.bj(c,c,new A.a(0.4,1.35,4.1)),new A.bj(b,b,new A.a(0.92,0.82,5.55))],p),a,i,h,B.M),new A.aV(a0,B.au,new A.a(4.5,3.75,3),new A.a(0,0,4),A.e([new A.ba("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.ba("kitchen-west",B.F,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.bh(a1,"the mantle by the stove",new A.a(0.8,1.8,0.5),!1,!1,a1),new A.bh("mantle-kitchen-second",l,new A.a(2.2,1.8,2),!1,!1,o),new A.bh("mantle-kitchen-third",j,new A.a(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.bj(a2,a2,new A.a(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.iP),new A.aV("cellar",B.au,new A.a(4,3,4),new A.a(1,-3,2),B.b7,A.e(["hall-cellar"],r),B.iw,B.b5,"wallpaper-damp","floor-concrete","ceiling-pipes",B.M),new A.aV("bedroom",B.av,new A.a(4.5,3.6,4),new A.a(0,4.2,0),A.e([new A.ba("bedroom-north-west",B.l,0.7,1.05,1.1,1.65,!1,!0),new A.ba("bedroom-north-east",B.l,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.bh(a3,"the bedroom mantle",new A.a(1,1.95,1),!1,!1,a3),new A.bh("mantle-bedroom-bedside","the bedside mantle",new A.a(3.5,1.5,3),!1,!1,o)],q),A.e([new A.bj(a4,a4,new A.a(2.2,1.125,2.5)),new A.bj(a5,a5,new A.a(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.M),new A.aV(a6,B.av,new A.a(2.5,3.6,3),new A.a(4.5,4.2,0),B.b7,A.e(["hall-landing","landing-bedroom",a7,"landing-spare"],r),A.e([new A.bh("mantle-landing","the landing mantle",new A.a(1,1.8,1.5),!1,!1,o)],q),B.b5,a,i,h,B.M),new A.aV(a8,B.av,new A.a(2.5,3.6,2.5),new A.a(4.5,4.2,3),A.e([new A.ba("bathroom-east",B.u,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a7],r),A.e([new A.bh("mantle-bathroom","the bathroom mantle",new A.a(1.5,1.8,1),!1,!1,o)],q),A.e([new A.bj(a9,a9,new A.a(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.M),new A.aV(b0,B.av,new A.a(4.5,3.15,3),new A.a(0,4.2,4),A.e([new A.ba("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.bh("mantle-spare","the broken mantle",new A.a(2,1.95,1),!1,!0,o)],q),A.e([new A.bj(b1,b1,new A.a(0.5,1.8,0.3)),new A.bj(b2,b2,new A.a(3.7,2.1,2.7)),new A.bj(b3,b3,new A.a(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.M)],b5))
B.a.L(b8,A.e([A.e3(g,"outside","kit-front-door-recessed",!0,B.l,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.e3(g,n,b4,!1,B.F,B.u,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.e3(g,a0,b4,!1,B.F,B.u,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.e3(a0,n,b4,!1,B.l,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.e3(g,"cellar","kit-cellar-door-grille",!1,B.m,B.u,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.e3(g,a6,o,!1,B.u,B.u,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.e3(a6,"bedroom",b4,!1,B.F,B.u,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.e3(a6,a8,b4,!1,B.m,B.l,3.15,!1,a7,!1,1,0.8,!0,!1,!1,0.9),A.e3(a6,b0,b4,!1,B.m,B.l,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b7))
B.a.l(b9,new A.dA("hall-stairs",f,B.il,new A.a(5,0,2.8),new A.a(6.5,6.3,6),new A.a(5.75,2.475,5.8),new A.a(5.75,6.675,2.2)))
c0.kM()
c0.kN()
c0.lq()
b5=b6.length
if(b5!==8)A.k(A.m("expected eight rooms, got "+b5))
b5=c0.gpu()
if(b5!==9)A.k(A.m("window discrepancy must be 9 inside / 11 outside"))
if(B.a.gaO(b9).c.length!==3||B.a.gW(B.a.gaO(b9).c)!==9.45)A.k(A.m("stairs must expose landings at 3.15, 6.3 and 9.45"))
if(b8.length!==9)A.k(A.m("expected nine physical portals"))
c0.mn()
c0.ml()
return c0},
oI:function oI(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
oZ:function oZ(a){this.a=a},
p_:function p_(){},
p0:function p0(){},
oY:function oY(){},
p1:function p1(a){this.a=a},
p2:function p2(){},
mq(a,b,c){var s=a.aI(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
ms(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.EZ(a,s,c,d)},
EZ(a,b,c,d){var s,r,q,p,o=a.aI(b),n=d.ah(0,c),m=n.gt(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.tZ(a,b,o,B.l,r,q,p,c,n,m))return!0
if(A.tZ(a,b,o,B.m,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.tZ(a,b,o,B.F,s,r,q,c,n,m))return!0
if(A.tZ(a,b,o,B.u,s+o.a,r,q,c,n,m))return!0
return!1},
tZ(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.a9(0,a6.a5(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.l||a1===B.m
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aB(m),k=J.Q(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gn()
if(q.aJ(m)===a1){g=q.af(m)
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
s=A.mq(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.u)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.a(h-f.a,g-f.b,i-f.c)
d=e.gt(0)
if(d<0.01||d>s)continue
c=e.gab()
f=a.b
if(Math.acos(B.c.F(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.ms(a0,a1,a.a,new A.a(h,g,i)))continue
m=d
l=j}}return l},
Aq(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.mq(b,j,4.5):4.5
for(s=b.aB(c),r=J.Q(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>")),q=i,p=null;s.m();){o=r.gn()
n=b.oN(c,o)
m=a.a
l=new A.a(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gt(0)
if(!A.zw(l,k,a,i,0.5236)||k>=q)continue
if(!A.ms(b,c,a.a,n))continue
q=k
p=o}return p},
Ar(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.mq(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.u)(r),++n){m=r[n]
l=A.FT(b,h,m)
k=a.a
j=new A.a(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gt(0)
if(!A.zw(j,i,a,s,0.5236)||i>=p)continue
if(!A.ms(b,c,a.a,l))continue
p=i
o=m}return o},
zw(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.c.F(a.gab().c8(c.b),-1,1))<=e},
FT(a,b,c){var s=a.aI(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.a(q.a+r,p,q.c)
break
case 2:q=new A.a(q.a+r,p,q.c+s.c)
break
case 1:q=new A.a(q.a+s.a,p,q.c+r)
break
case 3:q=new A.a(q.a,p,q.c+r)
break
default:q=null}return q},
nZ:function nZ(){this.a=null
this.b=0},
rn:function rn(){},
ro:function ro(){},
C3(a){var s=A.j8(a,"inventory asset"),r=A.dK(s,"id"),q=A.dK(s,"kind")
A.dK(s,"source")
A.dK(s,"proxy")
A.dK(s,"pivot")
s=A.j8(s.h(0,"bounds"),"inventory bounds")
return new A.cT(r,q,new A.pa(A.mp(s.h(0,"min"),"bounds.min"),A.mp(s.h(0,"max"),"bounds.max")))},
C4(a){var s,r,q,p,o,n,m,l="stateKey",k=A.j8(a,"inventory placement"),j=A.j8(k.h(0,"visibility"),"placement visibility"),i=A.j8(k.h(0,"interaction"),"placement interaction"),h=k.h(0,"clearance"),g=A.dK(k,"id"),f=A.dK(k,"roomId"),e=A.dK(k,"assetId")
A.dK(k,"role")
s=typeof k.h(0,"socket")=="string"?A.v(k.h(0,"socket")):null
k=A.j8(k.h(0,"transform"),"inventory transform")
r=A.mp(k.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.fv)
q=A.mp(k.h(0,"position"),"transform.position")
p=A.mp(k.h(0,"rotation"),"transform.rotation")
A.dK(j,"layer")
if(typeof j.h(0,l)=="string")A.v(j.h(0,l))
o=J.a3(i.h(0,"pickable"),!0)
n=typeof i.h(0,"focusId")=="string"?A.v(i.h(0,"focusId")):null
m=t.P.b(h)?A.Fd(h,"radius"):0
return new A.cw(g,f,e,s,new A.pc(q,p,r),o,n,m)},
j8(a,b){return t.P.b(a)?a:A.dH(b+" is not an object")},
dK(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.dH(b+" is not a string")},
Fd(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.dH(b+" is not finite")},
mp(a,b){var s
if(t.j.b(a)){s=J.aD(a)
s=s.gt(a)!==3||s.N(a,new A.v7())}else s=!0
if(s)return A.dH(b+" is not a finite vec3")
s=J.aD(a)
return new A.a(A.al(s.h(a,0)),A.al(s.h(a,1)),A.al(s.h(a,2)))},
dH(a){return A.k(A.a7(a,null,null))},
oN:function oN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oQ:function oQ(a){this.a=a},
oO:function oO(a){this.a=a},
oP:function oP(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.f=c},
cw:function cw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.x=f
_.y=g
_.z=h},
pc:function pc(a,b,c){this.a=a
this.b=b
this.c=c},
pa:function pa(a,b){this.a=a
this.b=b},
v7:function v7(){},
pb:function pb(a){this.a=a},
cW:function cW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k2:function k2(a){this.a=a},
oR:function oR(a){this.a=a},
e3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.bu(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
hw:function hw(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bu:function bu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bh:function bh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aV:function aV(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
BY(a){return A.BX(a)},
BX(a){var s,r,q,p,o,n,m=A.zF(a,"sound emitter"),l=t.N,k=A.q(l,l)
for(s=A.zF(m.h(0,"cues"),"sound emitter cues").gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.b
if(typeof q!="string"||q.length===0)throw A.d(B.fq)
k.k(0,r.a,q)}s=A.xc(m,"id")
r=A.xc(m,"roomId")
p=A.xc(m,"placementId")
o=A.FP(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.h1("gain is not a number")
return new A.cS(s,r,p,o,n,A.b5(k,l,l))},
zF(a,b){return t.P.b(a)?a:A.h1(b+" is not an object")},
xc(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h1(b+" is not a string")},
FP(a,b){var s
if(t.j.b(a)){s=J.aD(a)
s=s.gt(a)!==3||s.N(a,new A.v6())}else s=!0
if(s)throw A.d(A.a7(b+" must be a numeric vec3",null,null))
s=J.aD(a)
return new A.a(A.al(s.h(a,0)),A.al(s.h(a,1)),A.al(s.h(a,2)))},
h1(a){return A.k(A.a7(a,null,null))},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
oU:function oU(a){this.a=a},
oV:function oV(a){this.a=a},
oW:function oW(){},
cS:function cS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oJ:function oJ(){this.b=this.a=null},
eA:function eA(a){this.a=a},
oS:function oS(){this.b=this.a=null},
cR:function cR(a,b){this.a=a
this.b=b},
v6:function v6(){},
xY(a,b,c,d,e,f){var s=t.N
return new A.oX(e,f,c,a,A.b5(A.aM(d,s,s),s,s),A.ah(b,s))},
xZ(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.q(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
h.k(0,p.a,new A.hU(p.ax,p.ay))}s=A.q(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.u)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.q(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.u)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l){j=o[l]
i.k(0,j.a,new A.hK(j.d,j.r))}return A.xY(a.r.b,B.n,i,B.d_,h,s)},
BZ(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.ja
r=a3.h(0,"mantleHistory")
if(r==null)r=B.iF
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aL(a2)||!q.b(s)||!t.j.b(r))throw A.d(B.fo)
p=t.N
o=A.q(p,t.DL)
for(n=a.gJ(),n=n.gu(n),m=t.z;n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.ch)
l=A.aM(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bV(j)||!A.bV(i))A.k(B.ch)
o.k(0,k,new A.hU(j,i))}h=A.q(p,t.y)
for(n=a0.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!A.bV(l.b))throw A.d(B.fl)
h.k(0,k,A.T(l.b))}g=A.q(p,t.m2)
for(n=a1.gJ(),n=n.gu(n);n.m();){l=n.gn()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.d(B.cf)
l=A.aM(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bV(f)||!A.bV(e))A.k(B.cf)
g.k(0,k,new A.hK(f,e))}d=A.q(p,p)
for(q=s.gJ(),q=q.gu(q);q.m();){p=q.gn()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.d(B.fV)
d.k(0,n,A.v(p.b))}c=A.e([],t.s)
for(q=J.Q(r);q.m();){b=q.gn()
if(typeof b!="string"||b.length===0)throw A.d(B.eX)
B.a.l(c,b)}return A.xY(a2,c,g,d,o,h)},
x7(a,b){return a.a.a===b.a&&a.a7(0,b.gaq(b))},
oX:function oX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hC(a){var s=B.be.h(0,a)
if(s==null)throw A.d(A.m("Unknown house surface material: "+a))
return s},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
BF(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hJ(e,A.G(e).c)
q=new A.f0()
q.cu((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.hr(a,q,2,r,1+s,A.aK(["time"],t.N))
break
case 3:A.hr(a,q,3,r,1+s,A.aK(["place"],t.N))
break
case 4:A.hr(a,q,4,r,2+s,p)
A.BB(a,q,4)
break
case 5:A.hr(a,q,5,r,s,p)
A.Bz(a,q,5)
break
case 6:A.hr(a,q,6,r,s,p)
A.BA(a,q)
A.BE(a,q,6)
break
case 7:A.BC(a,q,7)
break
default:if(s>0)A.hr(a,q,b,r,s,p)}},
By(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.BD(a,b,c))return!1
return!0},
hr(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.ak(s,s.r,s.e,A.r(s).i("ak<2>"));s.m();){r=s.d
if(A.By(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.de(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.f(o,p)
A.xS(a,b,o[p],f)}},
xS(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aM(B.a.gW(o).a,n,n)
if(d==null)s=A.e(B.y.slice(0),t.s)
else{n=t.vY
s=A.K(new A.J(B.y,t.Ag.a(new A.nU(d)),n),n.i("p.E"))}n=s.length
if(n===0)return
n=b.aN(n)
if(!(n>=0&&n<s.length))return A.f(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.fe(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aN(n)
if(!(n>=0&&n<p.length))return A.f(p,n)
m.k(0,r,p[n])}a.dU(c.a,m,B.a.gW(o).b)},
BB(a,b,c){var s=A.xT(a,b,c)
if(!a.c2(s))return
a.fo(c,t.G.a(s),0,B.aY,null)},
xT(a,b,c){var s,r,q,p,o,n=t.N,m=A.q(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.y[s]
q=n.h(0,r)
if(q==null)q=B.n
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aN(p)
if(!(o>=0&&o<p))return A.f(q,o)
m.k(0,r,q[o])}}return m},
Bz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.ak(s,s.r,s.e,A.r(s).i("ak<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.de(i,b)
s=i.length
if(0>=s)return A.f(i,0)
q=i[0]
if(1>=s)return A.f(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aM(B.a.gW(i).a,s,s)
r=p.c
n=A.aM(B.a.gW(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.y[m]
k=o.h(0,l)
j=s.fe(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aN(k)
if(!(k>=0&&k<j.length))return A.f(j,k)
o.k(0,l,j[k])}}a.dU(q.a,o,B.a.gW(i).b)
a.dU(p.a,n,B.a.gW(r).b)},
BA(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.ak(s,s.r,s.e,A.r(s).i("ak<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aN(r)
if(!(r>=0&&r<q.length))return A.f(q,r)
s.a2(0,q[r].a)},
BE(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.ak(s,s.r,s.e,A.r(s).i("ak<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aN(s)
if(!(s>=0&&s<q.length))return A.f(q,s)
A.xS(a,b,q[s],null)},
BC(a,b,c){var s=c+1,r=A.xT(a,b,s)
if(!a.c2(r))return
a.fo(s,t.G.a(r),0,B.aY,null)},
BD(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gW(b.c).c===B.ay}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gW(b.c).c===B.ay}if(c===21)return b.e
return!1},
nU:function nU(a){this.a=a},
D_(a){var s,r,q,p,o=t.N,n=A.q(o,t.a)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p=A.as(q==null?B.n:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.rZ(n)},
ps(a,b,c){var s,r,q,p=t.z
p=A.q(p,p)
for(s=0;s<5;++s){r=B.y[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.kf(A.b5(p,q,q),b,c)},
y9(a){var s=t.N
return A.ps(t.P.a(a.h(0,"fields")).bM(0,new A.pt(),s,s),A.al(a.h(0,"shakiness")),A.BK(B.iq,A.v(a.h(0,"hand")),t.qX))},
BJ(a){var s,r,q,p,o=a.h(0,"margin"),n=A.c(a.h(0,"ordinal")),m=A.c(a.h(0,"day")),l=A.e([],t.Bv)
for(s=J.Q(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.y9(r.a(s.gn())))
s=A.aC(a.h(0,"corroborator"))
q=A.T(a.h(0,"locked"))
p=A.zg(a.h(0,"lastReadDay"))
return new A.bX(n,m,l,s,q,p,o==null?null:A.y9(r.a(o)))},
dX:function dX(a,b){this.a=a
this.b=b},
rZ:function rZ(a){this.a=a},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(){},
pu:function pu(a){this.a=a},
bX:function bX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
y6(a){return new A.pf(a,A.q(t.S,t.g),A.a2(t.N),A.e([],t.t))},
C9(a,b){var s,r,q,p,o=A.y6(a)
o.e=A.c(b.h(0,"nextOrdinal"))
o.f=A.c(b.h(0,"locksRemaining"))
s=t.j
o.c.L(0,J.AX(s.a(b.h(0,"tags")),t.N))
for(s=J.Q(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.BJ(r.a(s.gn()))
q.k(0,p.a,p)}return o},
pf:function pf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
pm:function pm(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c){this.c=a
this.a=b
this.b=c},
nd:function nd(){},
ne:function ne(){},
fg:function fg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
nf:function nf(){},
pr:function pr(){},
pq:function pq(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
q7:function q7(){},
q6:function q6(a,b,c){this.b=a
this.c=b
this.d=c},
q8:function q8(){},
Cl(a,b,c){return B.k9},
kw:function kw(a,b){this.a=a
this.b=b},
q9:function q9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wq(a){if(!isFinite(0))A.k(A.ap(0,"interpolation",null))
return new A.qz(a)},
i_:function i_(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
qz:function qz(a){this.a=a},
kH:function kH(a,b,c){this.a=a
this.b=b
this.c=c},
ym(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hJ(c,A.G(c).c)
r=A.K(r,A.r(r).c)
B.a.Y(r)
s=t.N
r=A.ah(r,s)
r=new A.qx(a,h,b,r,j,f,k,g,i,d,e,l==null?null:A.b5(l,s,t.X))
r.kA(a,b,c,d,e,f,g,h,i,j,k,l)
return r},
qy(a,b,c,d,e){var s=A.md("RENDERER_SHA"),r=A.md("GAME_SHA"),q=A.md("DART_SDK_VERSION")
return A.ym(a,"b1508db175d0-df3220cfbf41-dirty",b,c,d,r,A.md("LOCKFILE_SHA256"),e,A.md("PROJECT_VERSION"),s,q,null)},
md(a){var s=B.j2.h(0,a)
return s.length===0?null:s},
qx:function qx(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
aX(a,b,c,d,e,f,g,h,i,j){return new A.e5(g,a,f,i,h,j,c,c,!0)},
cF:function cF(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i},
rk:function rk(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=$},
rl:function rl(a){this.a=a},
xP(a,b,c,d,e,f,g){var s=A.K(f,t.ho)
if(b<0||a<0||e<0)A.k(A.a7("saved day-loop resources must not be negative",null,null))
return new A.nM(c,g,b,a,e,d===!0,s)},
Bs(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.d(B.fc)
s=A.e([],t.El)
for(r=J.Q(a0),q=t.ty,p=t.rZ,o=t.bG,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gn()
if(!k.b(j))throw A.d(B.fp)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aL(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.d(B.f8)
f=A.bZ(new A.J(B.cK,q.a(new A.nN(h)),p),o)
e=A.bZ(new A.J(B.cQ,n.a(new A.nO(g)),m),l)
if(f==null||e==null)throw A.d(B.fQ)
B.a.l(s,new A.fI(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aL(d)||!A.aL(c)||!A.aL(b)||!A.bV(a))throw A.d(B.fx)
return A.xP(c,d,a1,a,b,s,a3)},
bQ:function bQ(a,b){this.a=a
this.b=b},
bx:function bx(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c){this.a=a
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
k6:function k6(a,b){this.a=a
this.b=b},
eT:function eT(a,b){this.a=a
this.b=b},
t3:function t3(a,b){this.b=a
this.c=b},
eS:function eS(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
p3:function p3(a){this.c=a},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(){},
yo(){var s=A.wV(B.n),r=A.wV(B.n),q=new A.qF(B.C,s,r)
if(!isFinite(0))A.k(B.eY)
if(!B.a.a7(r,B.a.gaq(s)))A.k(B.fy)
if(q.a===B.C&&q.b!==0&&!q.e)A.k(B.f1)
return q},
wV(a){var s,r,q,p=A.e([],t.s),o=A.a2(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.d(B.fN)
B.a.l(p,q)}return p},
cj:function cj(a,b){this.a=a
this.b=b},
qE:function qE(){},
cY:function cY(){},
qF:function qF(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
jT:function jT(a,b){this.a=a
this.b=6
this.c=b},
EF(a){var s,r=A.e([],t.yo)
for(s=1;s<=21;++s)r.push(new A.uH(a,s).$0())
return r},
GG(a){var s=B.c.F(a,0,1)
if(s<=0.5)return A.zC(4491468,16777215,s*2)
return A.zC(16777215,16759637,(s-0.5)*2)},
zC(a,b,c){var s,r=new A.uP(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.dd()
s=r.$1(8)
if(typeof s!=="number")return s.dd()
r=r.$1(0)
if(typeof r!=="number")return A.jd(r)
return(q<<16|s<<8|r)>>>0},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t_:function t_(a){this.b=a},
uH:function uH(a,b){this.a=a
this.b=b},
uP:function uP(a,b,c){this.a=a
this.b=b
this.c=c},
pL(a,b,c){var s,r=t.N,q=A.q(r,r)
if(a!=null)q.L(0,a)
s=A.q(r,r)
if(b!=null)s.L(0,b)
r=A.q(r,t.Fr)
if(c!=null)r.L(0,c)
return new A.pK(q,s,r)},
Cg(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.aL(s)||s!==1)return l
r=A.yf(a.h(0,"choices"))
q=A.yf(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.q(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gJ(),k=k.gu(k);k.m();){n=k.gn()
m=A.BP(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.pL(r,q,p)},
yf(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.q(s,s)
for(s=a.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.v(q.b))}return r},
BP(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.aL(r)||r<1||!A.aL(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.cM(s,r,q,p)},
pK:function pK(a,b,c){this.a=a
this.b=b
this.c=c},
pM:function pM(){},
pN:function pN(){},
pO:function pO(){},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q4:function q4(a){this.a=a},
q5:function q5(a){this.a=a},
fK(a){var s,r,q=A.q(t.N,t.z)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q.k(0,B.d.p(r.a),r.b)}return q},
rs:function rs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
rt:function rt(){},
ru:function ru(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b){this.a=a
this.b=b},
lb:function lb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d5:function d5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rv:function rv(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$},
rw:function rw(){},
rx:function rx(){},
jh:function jh(a){this.a=a},
w7:function w7(a,b,c){this.b=a
this.e=b
this.f=c},
B3(a){var s,r,q,p
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.f_)
s=new A.mz()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.wK(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.dL(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.aT(B.ba,new A.mx(a),new A.my()))},
cK:function cK(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
mz:function mz(){},
mx:function mx(a){this.a=a},
my:function my(){},
mK:function mK(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
mM:function mM(a){this.a=a},
mL:function mL(a,b){this.a=a
this.b=b},
B9(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fu)
s=new A.mX()
return new A.dM(s.$1$2(B.b8,a.h(0,"output"),t.xs),s.$1$2(B.b1,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.b0,a.h(0,"reverb"),t.gc),s.$1$2(B.b_,a.h(0,"ducking"),t.ul))},
ct:function ct(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
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
mX:function mX(){},
mY:function mY(a,b){this.a=a
this.b=b},
mZ:function mZ(a){this.a=a},
nh:function nh(a){this.a=a
this.b=null},
nl(a,b,c){var s
b.C()
if(c<1||c>6)throw A.d(A.ap(c,"level","must be between 1 and 6"))
s=A.D(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.nj(s,b)
return s},
dQ(a,b,c,d){var s,r,q
b.C()
s=b.e
r=d==null?b.c:d
q=A.D(a,"button","brush-button brush-state-"+s.b,r)
A.nj(q,b)
q.type="button"
q.disabled=s===B.ap
q.addEventListener("click",A.Z(new A.nk(c)))
return q},
Bf(a,b,c,d){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.ap
A.nj(s,b)
s.addEventListener("change",A.Z(new A.no(d,s)))
return s},
Be(a,b,c,d,e,f){var s,r
b.C()
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.w(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.ap
A.nj(s,b)
s.addEventListener("input",A.Z(new A.nn(s,e)))
return s},
w9(a,b){var s=B.b.kf(A.v(a.className),A.yl("\\s+")),r=A.G(s),q=r.i("J<1>"),p=A.K(new A.J(s,r.i("n(1)").a(new A.nm()),q),q.i("p.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a4(p," ")
a.setAttribute("data-brush-state",s)},
nj(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gms())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.ap)a.setAttribute("aria-disabled","true")},
nk:function nk(a){this.a=a},
no:function no(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.a=a
this.b=b},
nm:function nm(){},
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
nq:function nq(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b},
xN(a){var s=!1
if(a.length!==0)if(!B.dt.q(0,a))s=B.l4.q(0,a)||B.kW.q(0,a)||B.l3.q(0,a)||!B.b.T(a,"Mouse")
return s},
Eo(a){var s,r,q,p,o=t.N,n=A.q(o,t.a)
for(s=new A.I(a,A.r(a).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=A.as(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
F4(a){var s,r,q=A.q(t.N,t.a),p=a==null?null:new A.I(a,A.r(a).i("I<1,2>"))
p=J.Q(p==null?A.e([],t.Bq):p)
s=t.s
while(p.m()){r=p.gn()
q.k(0,r.a,A.e([r.b],s))}return q},
fp(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.fy(B.j_,s,r)
if(b!=null)q.L(0,b)
q.L(0,A.F4(a))
s=new A.fo(g,d,h,e,f,c,A.b5(A.Eo(q),s,r))
s.C()
return s},
Bp(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.d(B.cg)
s=a.h(0,"version")
r=J.el(s)
if(!r.a0(s,1)&&!r.a0(s,2))throw A.d(B.cg)
q=A.q(t.N,t.a)
for(j=j.a(a.h(0,k)).gJ(),j=j.gu(j),r=t.s,p=t.j;j.m();){o=j.gn()
n=o.a
m=o.b
if(typeof n!="string")throw A.d(B.fk)
if(typeof m=="string")q.k(0,n,A.e([m],r))
else if(p.b(m)&&J.AY(m,new A.nB())){o=A.e([],r)
for(l=J.Q(m);l.m();)o.push(A.v(l.gn()))
q.k(0,n,o)}else throw A.d(B.f3)}j=A.al(a.h(0,"horizontalSensitivity"))
r=A.al(a.h(0,"verticalSensitivity"))
p=A.T(a.h(0,"invertX"))
o=A.T(a.h(0,"invertY"))
return A.fp(null,q,A.T(a.h(0,"holdToInteract")),j,p,o,2,r)},
wM(a){var s,r,q,p=t.N,o=A.q(p,t.a)
for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=A.K(r.b,p)
o.k(0,q,r)}return o},
x3(a,b){var s,r,q,p=A.e([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
xg(a,b){var s,r,q,p=A.e([],t.s)
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
nD:function nD(){},
nC:function nC(a){this.a=a},
nE:function nE(){},
nF:function nF(){},
nG:function nG(){},
nB:function nB(){},
dN:function dN(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.c=b},
jz:function jz(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
Bo(a){var s=t.N,r=t.m
r=new A.hp(A.fp(null,null,!1,1,!1,!1,2,1),A.q(s,r),A.q(s,r),A.q(s,r),a,A.b(a.createElement("div")))
r.aQ(a)
r.kr(a)
return r},
hp:function hp(a,b,c,d,e,f){var _=this
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
Bq(a){var s=new A.nH(a,A.b(a.createElement("div")))
s.aQ(a)
s.ks(a)
return s},
nH:function nH(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
nI:function nI(a){this.a=a},
Bw(a){var s=new A.nQ(A.D(a,"div","door",null))
s.ku(a)
return s},
xQ(a){var s,r,q
if(a.length===0)return""
s=A.e([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.a4(s,"; ")+"."},
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
BG(a){var s=new A.nW(a,A.b(a.createElement("div")))
s.aQ(a)
s.kv(a)
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
_.y=null},
BS(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.oo(a.b===B.cn,a.c===B.cr,s,a.e===B.co,a.f===B.cl,a.r===B.ct,a.w,a.x)},
oo:function oo(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wb(a,b,c,d,e,f,g,h){return new A.fv(d,f,h,e,a,g,c,b)},
BT(a){var s,r,q,p,o,n,m,l
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fC)
s=new A.op(a)
r=a.h(0,"contextualReminders")
if(!A.bV(r))throw A.d(B.fO)
q=s.$1$2("interactionMode",B.b9,t.bK)
p=s.$1$2("promptDensity",B.bd,t.dn)
o=s.$1$2("textPacing",B.bb,t.j_)
n=s.$1$2("journalLayout",B.b2,t.gm)
m=s.$1$2("confirmations",B.aZ,t.aJ)
l=s.$1$2("saveFeedback",B.b4,t.mx)
return A.wb(m,r,s.$1$2("focusLossBehavior",B.aA,t.x),q,n,p,l,o)},
dn:function dn(a,b){this.a=a
this.b=b},
cN:function cN(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d,e,f,g,h){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
op:function op(a){this.a=a},
oq:function oq(a,b){this.a=a
this.b=b},
or:function or(a){this.a=a},
xW(a){var s
if(!t.f.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.ft)
s=new A.dW(1,B.a.aT(B.cL,new A.oD(a),new A.oE()),A.v(a.h(0,"renderScale")),A.T(a.h(0,"dynamicResolution")),A.v(a.h(0,"frameTarget")),A.v(a.h(0,"antialiasing")),A.v(a.h(0,"textureQuality")))
s.C()
return s},
k_(a,b){var s=b==null?B.aX:b
return new A.oF(s,a==null?B.aX:a)},
Al(a,b){var s,r,q
a.C()
s=A.e([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.dS(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.dS("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.hC(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.cC&&b.a<2){q=q.hD(B.aW)
B.a.l(s,"High preset was reduced to Standard")}return new A.oy(q,A.ah(s,t.N))},
cu:function cu(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oD:function oD(a){this.a=a},
oE:function oE(){},
oF:function oF(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
BV(a){var s=new A.hA(A.q(t.N,t.m),B.aX,a,A.b(a.createElement("div")))
s.aQ(a)
s.kw(a)
return s},
hA:function hA(a,b,c,d){var _=this
_.r=_.f=null
_.w=a
_.y=_.x=null
_.z=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
oB:function oB(a){this.a=a},
oC:function oC(a){this.a=a},
oA:function oA(a,b,c){this.a=a
this.b=b
this.c=c},
oz:function oz(a){this.a=a},
BW(a){var s=new A.oG(a,A.b(a.createElement("div")))
s.aQ(a)
s.kx(a)
return s},
oG:function oG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
oH:function oH(a){this.a=a},
pg:function pg(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
ph:function ph(a){this.a=a},
pi:function pi(a){this.a=a},
pj:function pj(a,b,c){this.a=a
this.b=b
this.c=c},
pk:function pk(){},
pl:function pl(){},
cV:function cV(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
pU:function pU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
D(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
zp(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.sL)
for(s=t.m,r=0;r<A.c(p.length);++r){q=A.j(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
hT:function hT(){},
bi:function bi(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
q_:function q_(){},
q0:function q0(){},
c0:function c0(a,b,c){this.a=a
this.c=b
this.d=c},
pZ:function pZ(a){this.a=a},
q1:function q1(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
q2:function q2(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
q3:function q3(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
qg:function qg(a){this.a=a
this.b=null},
CG(a){var s=new A.qN(a,A.b(a.createElement("div")))
s.aQ(a)
s.kC(a)
return s},
qN:function qN(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
qO:function qO(a,b){this.a=a
this.b=b},
qP:function qP(a){this.a=a},
kK(a,b){var s=t.N,r=t.m
r=new A.fH(b,A.q(s,r),A.q(s,r),A.q(s,t.rf),A.q(s,r),$.w0(),B.am,A.q(s,r),A.q(s,r),B.aM,A.q(s,r),a,A.b(a.createElement("div")))
r.aQ(a)
r.kD(a,b)
return r},
fH:function fH(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.id=null
_.k1=f
_.k2=g
_.k3=h
_.k4=i
_.ok=j
_.p1=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
ra:function ra(a){this.a=a},
rb:function rb(a){this.a=a},
rc:function rc(a,b){this.a=a
this.b=b},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
r4:function r4(a,b){this.a=a
this.b=b},
r5:function r5(a,b){this.a=a
this.b=b},
r3:function r3(a){this.a=a},
r6:function r6(a){this.a=a},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(a,b){this.a=a
this.b=b},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(a){this.a=a},
qX:function qX(a){this.a=a},
qY:function qY(a){this.a=a},
qZ:function qZ(a){this.a=a},
r_:function r_(a){this.a=a},
r0:function r0(a){this.a=a},
r1:function r1(a){this.a=a},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
r9:function r9(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rg(a){return B.a.aT(B.B,new A.rh(a),new A.ri(a))},
CH(){var s,r,q=A.q(t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
q.k(0,r.a,r.e)}return q},
dy(a,b){var s=t.z
s=A.fy(A.CH(),s,s)
if(a!=null)s.L(0,a)
s=new A.rf(b,A.b5(s,t.N,t.K))
s.kE(a,b)
return s},
yr(a){var s,r=t.f
if(!r.b(a)||!J.a3(a.h(0,"version"),1))throw A.d(B.fL)
s=a.h(0,"values")
if(!r.b(s))throw A.d(B.fb)
return A.dy(A.aM(s,t.N,t.K),A.c(a.h(0,"version")))},
bw:function bw(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
rf:function rf(a,b){this.a=a
this.b=b},
wt(a,b){var s=b==null?A.dy(null,1):b
return new A.rj(s,a==null?A.dy(null,1):a)},
CI(a,b){var s,r,q,p,o,n,m,l=A.q(t.N,t.K)
for(q=0;q<10;++q){s=B.B[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fD(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.d3(r)
J.bL(l,s.a,r)}catch(n){if(!(A.aj(n) instanceof A.F))throw n}}m=A.dy(l,1)
return A.wt(m,m)},
rj:function rj(a,b){this.a=a
this.b=b},
CJ(a){var s=new A.rp(a,A.b(a.createElement("div")))
s.aQ(a)
s.kF(a)
return s},
rp:function rp(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
B6(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.Fg)
for(s=a.d,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gJ(),n=n.gu(n),p+=":";n.m();){m=n.gn()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cr(p+m+":"+k,m,l.a,l.b,j))}}B.a.U(i,new A.mI())
return new A.mH(A.ah(i,t.bC),A.a2(t.N))},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mH:function mH(a,b){this.a=a
this.b=b},
mJ:function mJ(){},
mI:function mI(){},
CZ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.ms
s=t.L
r=A.q(s,t.q1)
q=A.r(a).i("ad<1>")
p=A.K(new A.ad(a,q),q.i("p.E"))
B.a.Y(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.u)(p),++l){k=p[l]
for(j=a.h(0,k).gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(h<1||h>21)return new A.b9(new A.bn(B.ma,k+" has an out-of-range authored day "+h+"."))
g=A.CY(k,h,i.b,m)
if(g instanceof A.b9)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.bR(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.q(a,q)
for(o=a0.ax,o=new A.ak(o,o.r,o.e,A.r(o).i("ak<2>"));o.m();){n=o.d
J.hh(e.co(n.b,new A.rT()),n)}o=A.b5(a0.at,a,t.sy)
q=A.q(a,q)
for(n=new A.I(e,e.$ti.i("I<1,2>")).gu(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.as(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.l9(new A.l8(r,A.a2(a),A.a2(s),o,q,A.e([],t.Dc),B.P,A.pL(b,b,b)))},
CY(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.q(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.cI[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gJ(),k=k.gu(k),j=m.length;k.m();){i=k.gn()
h=i.a
if(!B.b.T(h,m))continue
g=A.dv(B.b.aZ(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b9(new A.bn(B.mb,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.cP
B.a.l(l,new A.c5(g,i.b,f))}if(l.length===0)continue
B.a.U(l,new A.rQ())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b9(new A.bn(B.dM,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.b9(new A.bn(B.dM,a+" day "+s+" has no authored tiers."))
return new A.lF(c)},
l8:function l8(a,b,c,d,e,f,g,h){var _=this
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
rW:function rW(a){this.a=a},
rV:function rV(a){this.a=a},
rX:function rX(a){this.a=a},
rR:function rR(a){this.a=a},
rS:function rS(){},
rU:function rU(a){this.a=a},
rT:function rT(){},
rP:function rP(a){this.a=a},
rO:function rO(a){this.a=a},
rQ:function rQ(){},
l9:function l9(a){this.a=a},
lF:function lF(a){this.a=a},
Gb(a){var s,r,q,p=A.a2(t.N)
for(s=new A.I(a,A.r(a).i("I<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gaD(),q=q.gu(q);q.m();)if(q.gn().ga_().N(0,new A.vg())){p.l(0,r.a)
break}}s=A.K(p,p.$ti.c)
B.a.Y(s)
return s},
Ga(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.n
s=t.N
r=A.as(b,!0,s)
B.a.Y(r)
q=new A.f0()
q.cu((a^913741)>>>0)
p=q.aN(4)
if(!(p>=0&&p<4))return A.f(B.cH,p)
o=B.cH[p]
n=r.length
n=o>n?n:o
if(n===0)return B.n
m=A.as(r,!0,s)
B.a.de(m,q)
s=A.ib(m,0,A.ek(n,"count",t.S),A.G(m).c).bS(0)
B.a.Y(s)
return s},
vg:function vg(){},
yD(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aL(r)||!A.aL(q)||!A.aL(p)||r<1||q<0||q>23||p<0)return null
return new A.bR(s,r,q,p)},
CX(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a2(t.N)
for(s=t.j,q=J.Q(s.a(a.h(0,k)));q.m();){p=q.gn()
if(typeof p!="string")return i
r.l(0,p)}o=A.a2(t.L)
for(s=J.Q(s.a(a.h(0,j)));s.m();){n=A.yD(s.gn())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.B5(m)
if(!s&&l==null)return i
return new A.la(r,o,l)},
B5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.yD(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aL(p))if(!(p<0))if(A.bV(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bZ(new A.J(B.cI,t.qR.a(new A.mE(r)),t.cE),t.hF)
j=A.bZ(new A.J(B.iX,t.da.a(new A.mF(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bZ(new A.J(B.i2,t.kr.a(new A.mG(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.ji(s,k,j,p,i,n,A.aC(m))},
bN:function bN(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d4:function d4(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
la:function la(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(){},
ji:function ji(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mE:function mE(a){this.a=a},
mF:function mF(a){this.a=a},
mG:function mG(a){this.a=a},
l7:function l7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
rY:function rY(){},
b9:function b9(a){this.a=a},
l6:function l6(a){this.a=a},
l4:function l4(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
Fj(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.je())return f
n=A.d2().gaK()
m=n.h(0,"captureSeed")
l=A.dv(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dv(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.fD(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.k.aG(s,f)
if(t.f.b(q)){m=t.N
p=A.q(m,m)
for(m=q.gJ(),m=m.gu(m);m.m();){o=m.gn()
if(typeof o.a!="string"||typeof o.b!="string"||!B.kY.q(0,o.b))return f
J.bL(p,A.v(o.a),A.v(o.b))}r=p}else return f}catch(g){if(A.aj(g) instanceof A.F)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.l2.q(0,i))return f
if(h!=null&&!B.l0.q(0,h))return f
return new A.ta(l,k,j,h,r)},
Fk(){var s,r,q,p=A.d2().gaK().h(0,"cameraProfile")
A:{if("wide"===p){s=B.ew
break A}if("intimate"===p){s=B.ey
break A}s=B.ex
break A}r=A.d2().gaK().h(0,"cameraFov")
q=A.fD(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.fj(B.c.F(q,35,100)*3.141592653589793/180,s.b,s.c)},
j9(a){var s=$.b0
if(s===a&&B.b.q(A.v(a.b.className),"open"))return
if(s!=null)s.a6()
$.b0=a
if(a===$.cp.j())$.hg().jf("gameplay.viewport")
else $.hg().oJ(A.zH(a))
s=$.ae.j()
s.ay=!1
s.ba()
$.eg=0
a.bN()},
x_(a,b,c){var s,r,q
$.ja=!0
s=$.b0
if(s!=null)s.a6()
$.b0=a
s=$.hg()
if(s.a.a.length===0)s.jf(c)
r=A.K(s.a.a,t.oP)
r.push(new A.du(b,B.W,c))
q=s.a
s.a=new A.e1(r,q.b,q.c)
s.l9(b)
s=$.ae.j()
s.ay=!1
s.ba()
$.eg=0
a.bN()
$.ja=!1},
dJ(a){var s,r,q,p,o,n,m,l=null
if($.ja)return
$.ja=!0
a.a6()
$.b0=null
s=$.hg().mC()
$.ja=!1
r=s.a
if(r===B.de){$.eg=0
r=$.ae.j()
r.ba()
r.ay=!0
q=A.j(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.dd)return
r=s.c.a
r=r.length===0?l:B.a.gW(r)
p=r==null?l:r.a
A:{if(B.bi===p){r=$.cp.j()
break A}if(B.d3===p){r=$.h0.j()
break A}r=l
break A}if(r!=null){o=s.d
$.b0=r
n=$.ae.j()
n.ay=!1
n.ba()
$.eg=0
r.bN()
m=o==null?l:A.j(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
jc(a){if($.b0===a&&B.b.q(A.v(a.b.className),"open"))a.a6()
else A.j9(a)},
h6(a){var s
if($.ja)return
if($.b0===a)$.b0=null
if(a===$.cp.j())$.hg().cp()
else $.hg().nu(A.zH(a))
$.eg=0
s=$.ae.j()
s.ba()
s.ay=!0},
zH(a){if(a===$.cp.j())return B.d4
if(a===$.h0.j())return B.W
if(a instanceof A.fH)return B.W
if(a instanceof A.hA)return B.W
if(a instanceof A.hp)return B.W
if(a===$.h_.j())return B.jU
if(a===$.m7.j())return B.jV
if(a===$.iZ.j())return B.jW
if(a===$.m5.j())return B.W
if(a===$.iX.j())return B.jY
return B.jX},
mc(a,b){var s
a.soy(new A.u5())
a.soA(new A.u6())
a.soz(new A.u7())
a.sou(new A.ud())
a.sox(new A.ue())
a.soI(new A.uf())
a.soD(new A.ug())
a.soC(new A.uh())
a.sb4(b?new A.ui(a):new A.uj(a))
a.saY(b?new A.uk(a):new A.u8(a))
s=a.f
if(s===B.G)a.som(new A.u9())
if(s===B.Y)a.sov(new A.ua())
if(s===B.H){a.sol(new A.ub())
a.soB(new A.uc())}},
El(){var s=$.fZ.j()
s.seH(new A.u2())
s.sb4(new A.u3())
s.saY(new A.u4())},
F9(){var s,r,q,p,o,n=null
try{n=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.k.aG(n,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.k(B.fE)
q=A.xW(r.h(0,"requested"))
$.uI=A.k_(A.xW(r.h(0,"effective")),q)}catch(s){$.uI=A.k_(null,null)}p=$.xB().a
o=A.Al(p,A.zt())
r=o.a
$.uI=A.k_(r,p)
$.fZ.j().fa(p,r,o.b)
A.zL()},
zt(){var s,r,q,p,o=$.d8.j().gbq().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.b.T(p,"max-samples-"))continue
r=A.dv(B.b.aZ(p,12),null)
if(r==null)r=1}return new A.ox(r,B.a.q(o,"disjoint-timer-query"))},
zL(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.k.ak($.xB().B(),null))}catch(s){}},
Ek(){var s=$.iW.j()
s.seH(new A.u_())
s.sb4(new A.u0())
s.saY(new A.u1())},
F7(){var s,r,q,p,o,n=null
try{n=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.wR=A.Bp(B.k.aG(n,null))}catch(s){$.wR=A.fp(null,null,!1,1,!1,!1,2,1)}r=$.iW.j()
q=r.w=$.f8()
r.x=new A.jz(q)
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
r.dJ()
$.ae.j().f7($.f8().r)
r=$.ae.j()
q=$.f8()
p=r.ch
p.a=q.f
p.eR()
r.ba()
A.zJ()},
zJ(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.k.ak($.f8().B(),null))}catch(s){}},
F6(){var s,r=null
try{r=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.j3=A.B9(B.k.aG(r,null))}catch(s){$.j3=B.aM}$.fX.j().jK($.j3)
A.zI()
A.wJ()},
zI(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.k.ak($.j3.B(),null))}catch(s){}},
wJ(){var s=$.bq
if(s==null)return
s.jU($.j3)},
F8(){var s,r=null
try{r=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.wU=A.BT(B.k.aG(r,null))}catch(s){$.wU=$.w0()}$.iY.j().jL($.w2())
A.zK()
A.zb()},
zK(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.k.ak($.w2().B(),null))}catch(s){}},
zb(){var s,r="detailed",q=A.BS($.w2()),p=A.j(A.b(v.G.document).documentElement)
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
F5(){var s,r=null
try{r=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.ef=A.B3(B.k.aG(r,null))}catch(s){$.ef=B.am}$.f3.j().f6($.ef)
A.x0()
A.m9()},
x0(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.k.ak($.ef.B(),null))}catch(s){}},
m9(){var s,r,q,p,o,n,m=$.ef,l=$.v2,k=$.xe,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.k(B.f9)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.a6
$.mm=l
r=$.bT.j()
r.r=$.mm?0.5:1
q=A.j(A.b(v.G.document).documentElement)
r=q==null
p=r?null:A.T(A.b(q.classList).contains("high-contrast"))
o=r?null:A.T(A.b(q.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!r)A.T(A.b(q.classList).toggle("reduced-motion",l))
if(!r)A.T(A.b(q.classList).toggle("photosensitivity-safe",k))
if(!r)A.T(A.b(q.classList).toggle("captions-enabled",s))
if(!r)A.T(A.b(q.classList).toggle("reduced-effects",o))
if(!r)A.T(A.b(q.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(q))A.b(q.style).setProperty("font-size",A.w(j*100)+"%")
r=$.B.j()
r.setAttribute("data-accessibility-reduced-motion",""+l)
r.setAttribute("data-accessibility-photosensitivity-safe",""+k)
r.setAttribute("data-accessibility-ui-scale",A.w(j))
r.setAttribute("data-accessibility-captions",""+s)
r.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
r.setAttribute("data-accessibility-reduced-effects",""+o)
r.setAttribute("data-accessibility-focus-visible",""+p)
r.setAttribute("data-accessibility-essential-cues","true")
if($.z9){m=$.bb.j()
l=$.ef.f
m.e=new A.jh(l==null?B.a6:l)
m=$.bb.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
EK(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.uM(r,q)
r.addEventListener("change",A.Z(new A.uK(s)))
q.addEventListener("change",A.Z(new A.uL(s)))},
vn(){var s=0,r=A.bG(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
var $async$vn=A.bJ(function(e4,e5){if(e4===1){o.push(e5)
s=p}for(;;)switch(s){case 0:e0=v.G
e1=A.j(A.b(e0.document).getElementById("game"))
if(e1==null){s=1
break}$.B.b=e1
$.wT=A.j(A.b(e0.document).getElementById("fps"))
$.c7.b=$.AM().ct(A.d2().gaK().h(0,"renderer"))
A.EL()
b9=$.B.j()
c0=A.c(A.b(e0.window).innerWidth)>0?A.c(A.b(e0.window).innerWidth):800
b9.width=c0
c0=$.B.j()
b9=A.c(A.b(e0.window).innerHeight)>0?A.c(A.b(e0.window).innerHeight):600
c0.height=b9
c1=A.j(A.b(e0.document).getElementById("ui-canvas"))
if(c1!=null){c1.width=A.c($.B.j().width)
c1.height=A.c($.B.j().height)
b9=new A.nq(c1,A.e([],t.km))
c2=A.j(c1.getContext("2d"))
if(!t.m.b(c2))A.k(A.m("Failed to get 2D context for CanvasP5GuiEngine"))
b9.b=c2
$.uT=b9}n=A.j(e1.getContext("webgl2"))
if(n==null){$.c7.b=B.c0.hI($.c7.j(),B.dZ)
g=B.aP.np($.c7.j())
g.bf()
$.d8.b=g
A.zN()
A.eh("no-webgl2")
e0=A.j(A.b(e0.document).getElementById("credits"))
if(e0!=null)e0.textContent="this browser has no webgl2."
s=1
break}try{if($.c7.j().a===B.a_){b9=t.s6
c0=t.N
c3=t.iO
c4=t.m3
c5=t.pw
c6=new A.iF(n,A.c($.B.j().width),A.c($.B.j().height),A.e([],b9),A.q(c0,t.qr),A.e([],t.s3),A.q(c0,c3),A.q(c0,c4),A.q(c0,t.xp),A.q(c0,t.bE),A.q(c0,c3),A.q(c0,c4),A.e([],b9),A.q(c0,c3),A.q(c0,c4),A.q(c0,c0),A.q(t.S,c5),A.q(c0,t.qS),A.e([],t.j5),B.iu,A.q(c0,t.Aj),A.q(c0,c0),A.q(c0,c5),A.q(c0,t.vD),A.q(c0,c5),B.fW,B.kb)}else c6=new A.fN(n,A.c($.B.j().width),A.c($.B.j().height),A.d2().gaK().h(0,"render")==="legacy",$.c7.j().d,$.c7.j().e)
m=c6
$.bH=m instanceof A.iF?m:null
$.mf=m instanceof A.fN?m:null
b9=B.aP.dV($.c7.j(),m)
b9.bf()
$.d8.b=b9}catch(e3){l=A.aj(e3)
k=A.cI(e3)
b9=$.c7.j()
$.c7.b=B.c0.hI(b9,B.dY)
$.mf=new A.fN(n,A.c($.B.j().width),A.c($.B.j().height),A.d2().gaK().h(0,"render")==="legacy",!0,$.c7.j().e)
b9=B.aP.dV($.c7.j(),$.mf)
b9.bf()
$.d8.b=b9
$.B.j().setAttribute("data-renderer-error",A.w(l))
if($.je())$.B.j().setAttribute("data-renderer-error-stack",A.w(k))}A.zN()
p=4
A.eh("initializing")
$.bT.b=new A.np(new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),$.xA())
$.v2=A.T(A.b(A.b(e0.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.xe=A.T(A.b(A.b(e0.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.mm=$.v2
b9=$.bT.j()
b9.r=$.mm?0.5:1
b9=A.b(e0.window)
c0=t.N
c3=t.s
c4=t.a
c3=A.C_(A.N(["moveForward",A.e(["KeyW"],c3),"moveBack",A.e(["KeyS"],c3),"moveLeft",A.e(["KeyA"],c3),"moveRight",A.e(["KeyD"],c3),"interact",A.e(["KeyE"],c3),"secondary",A.e(["KeyQ"],c3),"run",A.e(["ShiftLeft"],c3),"crouch",A.e(["ControlLeft"],c3),"rotate",A.e(["KeyR"],c3),"reach",A.e(["KeyF"],c3),"journal",A.e(["KeyJ"],c3),"sleep",A.e(["KeyL"],c3),"pause",A.e(["Escape"],c3)],c0,c4))
c5=A.b(b9.document)
c3=new A.k5(b9,c5,A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),A.a2(c0),new A.a(0,0,0),new A.p9(),c3)
b9.addEventListener("keydown",A.Z(c3.glG()))
b9.addEventListener("keyup",A.Z(c3.glI()))
b9.addEventListener("mousemove",A.Z(c3.glO()))
b9.addEventListener("mousedown",A.Z(c3.glM()))
b9.addEventListener("mouseup",A.Z(c3.glQ()))
b9.addEventListener("wheel",A.Z(c3.glS()))
c5.addEventListener("pointerlockchange",A.Z(c3.glK()))
$.ae.b=c3
$.z5.b=new A.k3(A.e([],t.pW),t.eO)
c3=$.B.j()
b9=A.c(A.b(e0.window).innerWidth)>0?A.c(A.b(e0.window).innerWidth):800
c3.width=b9
b9=$.B.j()
c3=A.c(A.b(e0.window).innerHeight)>0?A.c(A.b(e0.window).innerHeight):600
b9.height=c3
A.eh("renderer")
if($.c7.j().a===B.br){b9=$.mf
if(b9==null)b9=null
else{b9=b9.r
b9===$&&A.h()}$.h7=b9
if(b9==null){g=A.m("legacy runtime did not initialize its renderer")
throw A.d(g)}}A.eh("text")
b9=$.f9()
s=7
return A.ao(b9.cm(),$async$vn)
case 7:j=b9.pt()
i=A.CZ(j)
if(!(i instanceof A.l9)){h=t.bB.a(i).a
g=h.b
throw A.d("Failed to build visitors: "+g)}$.aG.b=i.a
$.m4.b=A.B6(j)
g=A.q(c0,c4)
for(c3=t.j,c8=0;c8<5;++c8){f=B.y[c8]
c4=A.v(f)
c5=b9.c
c5===$&&A.h()
c9=c5.h(0,c4)
c4=c3.b(c9)?A.as(c9,!0,c0):B.n
J.bL(g,f,c4)}e=A.D_(g)
$.wI.b=new A.ni(B.ev)
d=$.wI.j().oP(new A.vo(e))
d0=$.w1()
c=d0
if(d.a==null){g=c
g=g==null?null:g.a
if(g==null)g=1+B.c5.aN(2147483647)
b9=c
b9=b9==null?null:b9.b
if(b9==null)b9=1
c4=c
c4=c4==null?null:B.c.aU(c4.c)
if(c4==null)c4=10
if(b9<1)A.k(A.ap(b9,"startDay","must be at least 1"))
if(c4<0||c4>=24)A.k(A.ap(c4,"startHour","must be 0 through 23"))
if(!isFinite(480))A.k(A.ap(480,"daySeconds","must be finite and > 0"))
d1=new A.jT(b9,480)
d1.b=c4
d2=A.y6(e)
g=A.xU(42,g,A.xX(42),d1,d2,A.xP(6,16,d2,null,6,B.iv,d1),new A.jH(0,0,0,!1),A.pL(null,null,null))}else{g=d.a
g.toString
g=A.xV(g,e)}$.V.b=g
$.aG.j().y=$.V.j().z
g=A.ah(A.EF($.V.j().b),t.fu)
$.tR.b=new A.t_(g)
g=$.w3()
b9=d.a
g.eT(b9==null?null:b9.c.h(0,"inventoryInspections"))
$.d8.j().b9(A.wq($.V.j().geK()))
if(d.b!=null){g=d.b
g.toString
A.h8(g)}g=$.aG.j()
b9=A.Ga($.V.j().b,A.Gb(j.b))
g.skg(A.hJ(b9,A.G(b9).c))
A.eh("house")
$.X.b=$.V.j().c
g=d0==null
b=g?null:d0.e
a=g?null:d0.f
if(a!=null)for(g=$.X.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.u)(g),++c8){a0=g[c8]
for(c4=a0.e,c5=c4.length,d3=0;d3<c4.length;c4.length===c5||(0,A.u)(c4),++d3){a1=c4[d3]
a2=a.h(0,a1.a)
if(a2!=null)a1.w=a2==="open"}}else if(J.a3(b,"open")||J.a3(b,"closed")){a3=J.a3(b,"open")
for(g=$.X.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.u)(g),++c8){a4=g[c8]
for(c4=a4.e,c5=c4.length,d3=0;d3<c4.length;c4.length===c5||(0,A.u)(c4),++d3){a5=c4[d3]
a5.sk6(a3)}}}a6=$.xy()
if(a6!=null&&a6.length!==0)for(g=$.X.j().b,b9=g.length,c8=0;c8<g.length;g.length===b9||(0,A.u)(g),++c8){a7=g[c8]
for(c4=a7.r,c5=c4.length,d3=0;d3<c5;++d3){a8=c4[d3]
if(a8.a===a6)a8.d=$.xz()}}g=$.bH
if(g!=null)g.mB($.X.j())
$.b_.b=$.V.j().d
$.X.j()
g=new A.a(12.9375,1.65,0.825)
$.xf=$.x2=$.x8=g
a9=g.ah(0,new A.a(0,1.3499999999999999,0))
$.j_.b=new A.jt(a9,J.xC(a9,new A.a(0,1.2000000000000002,0)))
$.fY.b=new A.nZ()
$.bU.b=A.yo()
$.ar="hall"
g=d.a
b0=A.Cm(g==null?null:g.c.h(0,"player"))
if(b0!=null&&b0.o5($.X.j())){g=b0.b
$.xf=$.x2=$.x8=g
$.c8=b0.c
$.ei=b0.d
$.ar=b0.a
b1=g.ah(0,new A.a(0,1.3499999999999999,0))
g=$.j_.j()
g.smD(b1)
g.b=J.xC(b1,new A.a(0,1.2000000000000002,0))
g=$.j_.j()
b9=$.X.j()
c4=b0.e
c5=b0.f
g.pf($.ar,$.en(),b9,c5,c4)
A.h8("restored position")}g=A.CG(A.b(e0.document))
g.son(new A.vp())
g.sb4(new A.vq())
g.saY(new A.vB())
$.h0.b=g
g=A.b(e0.document)
b9=A.b(g.createElement("div"))
c4=new A.q2(g,b9)
c4.aQ(g)
b9.className=A.v(b9.className)+" brush-page-frame"
b9.setAttribute("aria-label","Pause menu")
b9.setAttribute("data-brush-kind","frame")
b9.setAttribute("data-brush-state","normal")
A.b(b9.appendChild(A.nl(g,B.ec,1)))
A.b(b9.appendChild(A.D(g,"p","settings-copy","The house waits. Choose what to do next.")))
d4=A.D(g,"nav","pause-actions",null)
d4.setAttribute("aria-label","Pause actions")
c4.bj(g,d4,B.d5,"resume")
c4.bj(g,d4,B.d6,"settings")
c4.bj(g,d4,B.d7,"controls")
c4.bj(g,d4,B.d8,"save now")
c4.bj(g,d4,B.d9,"help")
c4.bj(g,d4,B.da,"credits")
c4.bj(g,d4,B.db,"back")
A.b(b9.appendChild(d4))
c4.soE(new A.vJ())
c4.sb4(new A.vK())
c4.soG(new A.vL())
c4.sor(new A.vM())
c4.soF(new A.vN())
c4.sow(new A.vO())
c4.sos(new A.vP())
c4.saY(new A.vr())
$.cp.b=c4
c4=$.V.j().e
b9=$.b_.j()
$.V.j()
$.m6.b=new A.p7(c4,b9)
b9=A.b(e0.document)
c4=$.V.j().e
g=$.b_.j()
c5=$.m6.j()
d5=A.b(b9.createElement("div"))
c5=new A.pg(c4,g,c5,b9,d5)
c5.aQ(b9)
d5.setAttribute("aria-label","The Journal")
A.b(d5.appendChild(A.D(b9,"div","journal-title","The Journal")))
d6=A.D(b9,"div","journal-pages",null)
g=A.D(b9,"div","page page-left",null)
c5.y!==$&&A.L()
c5.y=g
c4=A.D(b9,"div","page page-right",null)
c5.z!==$&&A.L()
c5.z=c4
A.b(d6.appendChild(g))
A.b(d6.appendChild(c4))
A.b(d5.appendChild(d6))
A.b(d5.appendChild(c5.kS()))
d7=A.D(b9,"div","tape-roll",null)
A.b(d7.style).setProperty("width","8rem")
c4=A.D(b9,"div","tape-fill",null)
c5.as!==$&&A.L()
c5.as=c4
A.b(d7.appendChild(c4))
A.b(d5.appendChild(d7))
d8=A.D(b9,"div","consult",null)
A.b(d8.appendChild(A.D(b9,"div","consult-label","Cite an entry")))
c4=A.D(b9,"div","entry-picker",null)
c5.at!==$&&A.L()
c5.at=c4
g=A.D(b9,"div","consult-result",null)
c5.ax!==$&&A.L()
c5.ax=g
A.b(d8.appendChild(c4))
A.b(d8.appendChild(g))
A.b(d5.appendChild(d8))
d9=A.j(b9.documentElement)
if(t.m.b(d9)){A.b(d9.style).setProperty("--shake-max-deg","3deg")
A.b(d9.style).setProperty("--shake-max-px","2px")}$.h_.b=c5
$.h_.j().saY(new A.vs())
g=A.b(e0.document)
b9=A.D(g,"div","prompt",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
A.b(b9.style).setProperty("transition-duration","0.3s")
A.b(A.j(g.body).appendChild(b9))
$.z6.b=new A.qg(b9)
b9=A.b(e0.document)
g=A.D(b9,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.j(b9.body).appendChild(g))
$.z4.b=new A.nh(g)
g=A.b(e0.document)
b9=A.D(g,"div","ambient-notice",null)
c4=A.D(g,"div","caption-cue",null)
b9.setAttribute("role","status")
b9.setAttribute("aria-live","polite")
b9.setAttribute("aria-atomic","true")
c4.setAttribute("aria-hidden","true")
c4.setAttribute("data-caption-kind","non-speech")
A.b(A.j(g.body).appendChild(b9))
A.b(A.j(g.body).appendChild(c4))
$.bb.b=new A.mK(b9,c4,B.K)
$.z9=!0
c4=A.Bw(A.b(e0.document))
c4.soq(A.Gr())
c4.sop(A.Gq())
$.az.b=c4
$.cJ().soo(new A.vt())
c4=d.a
b2=A.CX(c4==null?null:c4.c.h(0,"visitors"))
if(b2!=null&&$.aG.j().eT(b2))A.Fp()
g=$.m4.j()
b9=d.a
g.pg(b9==null?null:b9.c.h(0,"ambient"))
g=d.a
b3=g==null?null:g.c.h(0,"unverifiables")
if(c3.b(b3))for(g=J.Q(b3);g.m();){b4=g.gn()
if(A.aL(b4))$.v4.l(0,b4)}g=A.CJ(A.b(e0.document))
g.soH(new A.vu())
g.saY(new A.vv())
$.m7.b=g
g=A.BW(A.b(e0.document))
g.saY(new A.vw())
$.iZ.b=g
g=A.Bq(A.b(e0.document))
g.saY(new A.vx())
$.m5.b=g
$.j0.b=A.kK(A.b(e0.document),null)
$.j1.b=A.kK(A.b(e0.document),B.X)
$.f3.b=A.kK(A.b(e0.document),B.H)
A.mc($.j0.j(),!1)
A.mc($.j1.j(),!0)
A.mc($.f3.j(),!0)
A.F5()
A.EK()
$.fZ.b=A.BV(A.b(e0.document))
A.El()
A.F9()
$.fX.b=A.kK(A.b(e0.document),B.G)
A.mc($.fX.j(),!0)
A.F6()
$.iY.b=A.kK(A.b(e0.document),B.Y)
A.mc($.iY.j(),!0)
A.F8()
$.iW.b=A.Bo(A.b(e0.document))
A.Ek()
A.F7()
g=A.BG(A.b(e0.document))
g.saY(new A.vy())
g.sot(new A.vz())
$.iX.b=g
g=d.a
b5=A.BI(g==null?null:g.c.h(0,"ending"))
if(b5!=null)A.zM(b5)
b6=$.h7
if(b6!=null){A.eh("world")
g=$.X.j()
b9=b6
c0=new A.qC(g,b9,A.q(c0,t.J))
c0.kB(g,b9)
$.h2=c0}g=B.b.q(A.v(A.b(A.b(e0.window).location).search),"shaders=live")
$.A1=g
if(g){g=$.h7
if(g!=null)g.bQ()}A.zQ()
A.b(e0.window).addEventListener("resize",A.Z(new A.vA()))
A.b(e0.document).addEventListener("visibilitychange",A.Z(new A.vC()))
A.b(e0.window).addEventListener("keydown",A.Z(new A.vD()))
A.b(e0.window).addEventListener("keyup",A.Z(new A.vE()))
A.b(e0.window).addEventListener("keydown",A.Z(new A.vF()))
A.b(e0.window).addEventListener("click",A.Z(new A.vG()))
$.B.j().addEventListener("mousemove",A.Z(new A.vH()))
$.B.j().addEventListener("click",A.Z(new A.vI()))
A.h4()
A.eh("raf")
A.c(A.b(e0.window).requestAnimationFrame(A.Z(A.Ak())))
p=2
s=6
break
case 4:p=3
e2=o.pop()
b7=A.aj(e2)
b8=A.cI(e2)
A.uX(b7,b8)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$vn,r)},
EI(a){var s,r=$.uT
if(!$.az.j().y||r==null)return
s=A.zl(a)
if(s==null)return
$.cJ().nZ(s.a,s.b,A.ah(r.d,t.rO))},
EH(a){var s,r=$.uT
if(!$.az.j().y||r==null)return!1
s=A.zl(a)
if(s==null)return!1
return $.cJ().nY(s.a,s.b,A.ah(r.d,t.rO))},
zl(a){var s=A.b($.B.j().getBoundingClientRect()),r=A.al(s.width),q=A.al(s.height)
if(r<=0||q<=0)return null
return new A.aU((A.c(a.clientX)-A.al(s.left))*(A.c($.B.j().width)/r),(A.c(a.clientY)-A.al(s.top))*(A.c($.B.j().height)/q))},
EL(){var s=v.G
A.b(s.window).addEventListener("error",A.Z(new A.uN()))
A.b(s.window).addEventListener("unhandledrejection",A.Z(new A.uO()))},
eh(a){if($.wN===a)return
$.wN=a
$.B.j().setAttribute("data-boot-phase",a)},
zN(){var s,r,q=$.d8.j().gbq(),p=$.B.j(),o=A.d2().gaK().h(0,"renderer")
if(o==null)o="auto"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-diagnostics",B.k.ak(q.B(),null))
p.setAttribute("data-renderer-shadow-pcf-kernel","3x3")
p.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
p.setAttribute("data-renderer-lighting-falloff","smoothstep")
p.setAttribute("data-renderer-dof-focal-distance","2.5m")
p.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
p=$.bH
s=p==null?null:p.x
if(s!=null)$.B.j().setAttribute("data-renderer-profile-fallback",s)
p=$.mf
r=p==null?null:p.y
if(r!=null)$.B.j().setAttribute("data-renderer-frame-submits",A.w(r))},
Fg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(!$.je())return
s=$.xy()
if(s!=null&&s.length!==0){r=$.B.j()
q=$.xz()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.tR.j().ez($.V.j().gaa().a)
r=$.B.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.w1()
o=q==null?b:q.e
if(o!=null)$.B.j().setAttribute("data-automation-capture-shutters",o)
$.B.j().setAttribute("data-automation-rain-window-visibility",B.c.az(A.zP($.ar),3))
r=$.B.j()
q=$.wN
n=$.ar
m=$.en()
l=t.N
m=A.N(["x",m.a,"y",m.b,"z",m.c],l,t.i)
k=$.c8
j=$.ei
i=$.b0!=null||$.az.j().y
h=t.K
r.setAttribute("data-automation-player",B.k.ak(A.N(["schemaVersion",1,"phase",q,"roomId",n,"eye",m,"yaw",k,"pitch",j,"modal",i,"inputEnabled",$.ae.j().ay,"day",$.V.j().gaa().a,"hour",$.V.j().gaa().b],l,h),b))
g=A.q(l,t.X)
for(r=$.X.j().c,q=r.length,f=0;f<r.length;r.length===q||(0,A.u)(r),++f){e=r[f]
n=e.ax
m=e.ay
k=e.z
j=n&&!m&&!k
g.k(0,e.a,A.N(["a",e.b,"b",e.c,"open",n,"locked",m,"sticks",k,"passable",j],l,h))}$.B.j().setAttribute("data-automation-portals",B.k.ak(g,b))
d=$.ma
r=!1
if(d!=null)if($.X.j().e.h(0,"cellar")!=null){r=$.X.j()
q=$.ar
q=r.e.h(0,q)!=null
r=q}if(r){c=d.cq("cellar",$.ar)
$.B.j().setAttribute("data-audio-transmission-cellar",B.k.ak(A.N(["sourceRoom","cellar","listenerRoom",$.ar,"portalPath",c.a,"gainDb",c.c,"lowPassHz",c.d,"muffle01",c.e,"barrierIds",c.b,"reasonTrace",c.r,"reachable",c.f],l,h),b))}else $.B.j().setAttribute("data-audio-transmission-cellar","unavailable")},
mo(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bU.j().a!==B.C){A.h8("save unavailable during rupture")
return}try{r=$.wI.j()
q=$.V.j()
p=t.N
o=t.z
s=A.q(p,o)
n=$.ar
m=$.en()
l=$.c8
k=$.ei
j=$.j_.j().d
j=j==null?null:j.a.a
i=$.j_.j().d
J.bL(s,"player",new A.ky(n,m,l,k,j,i==null?null:i.b).B())
n=$.aG.j()
m=A.qM(n.b,p)
l=A.qM(n.c,t.L)
n=n.r
J.bL(s,"visitors",new A.la(m,l,n==null?null:new A.ji(n.a,n.b,n.d,n.f,n.e,n.r,n.w)).B())
n=$.m4.j().b
n=A.K(n,A.r(n).c)
B.a.Y(n)
J.bL(s,"ambient",n)
n=A.K($.v4,A.r($.v4).c)
B.a.Y(n)
J.bL(s,"unverifiables",n)
J.bL(s,"inventoryInspections",$.w3().B())
n=$.wS
if(n!=null)J.bL(s,"ending",A.N(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.xZ(q.c).B()
k=q.d
r.pw(A.yp(s,A.N(["houseSeed",n,"runSeed",m,"house",l,"time",A.N(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B(),"narrative",q.z.B()],p,o),2))
A.h8(a)}catch(h){A.h8("save failed")}},
Fe(){var s=A.j(A.b(v.G.document).documentElement),r=s==null?null:A.aC(s.getAttribute("data-gameplay-focus-loss")),q=A.bZ(new A.J(B.aA,t.rg.a(new A.uS(r)),t.vK),t.x)
switch((q==null?B.aT:q).a){case 0:$.mk=!0
s=$.bq
if(s!=null)s.f9(!0)
break
case 1:$.mk=!0
break
case 2:break}},
h8(a){var s=v.G,r=A.j(A.b(s.document).getElementById("save-status"))
if(r==null)return
s=A.j(A.b(s.document).documentElement)
s=s==null?null:A.aC(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.BR(B.eJ,new A.v0(r),t.H)},
uX(a,b){var s,r,q,p
A.eh("error")
s=A.w(a)
r=A.xp(s,"\n"," ")
s=$.wT
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.j(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.w(a):A.w(a)+"\n"+b.p(0)
$.B.j().setAttribute("data-boot-error",p)
if($.je()&&!q)$.B.j().setAttribute("data-boot-stack",b.p(0))
A.b(s.console).error(p)},
ze(){var s,r
if($.wL)return
$.wL=!0
s=$.bq
r=s==null
if(!r)s.cp()
if(!r)s.fh("music")
B.a.l($.da,"arm")},
h4(){var s=0,r=A.bG(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$h4=A.bJ(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.ao(A.h3(),$async$h4)
case 2:o=null
q=4
s=7
return A.ao(A.b1(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$h4)
case 7:n=b
i=A
s=8
return A.ao(A.b1(A.b(n.json()),t.X),$async$h4)
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
if(k!=null&&typeof k==="string"){A.v(k)
l=A.j(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.m5.j().f
l===$&&A.h()
l.textContent=k}s=9
return A.ao(A.od(A.e([A.uQ(o),A.uJ(o)],t.iJ),t.H),$async$h4)
case 9:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$h4,r)},
h3(){var s=0,r=A.bG(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$h3=A.bJ(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.io[g]
q=6
s=9
return A.ao(A.b1(A.b(A.b(j.window).fetch(o)),i),$async$h3)
case 9:n=a0
s=10
return A.ao(A.b1(A.b(n.text()),h),$async$h3)
case 10:m=a0
l=A.Ba(B.k.aG(m,null))
f=$.X.b
if(f===$.X)A.k(A.a9(""))
l.eY(f)
f=$.B.b
if(f===$.B)A.k(A.a9(""))
f.setAttribute("data-house-manifest","validated")
f=$.B.b
if(f===$.B)A.k(A.a9(""))
f.setAttribute("data-house-manifest-source",o)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.aj(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.B.j().setAttribute("data-house-manifest","unavailable")
A.b(j.console).warn("authored house manifest unavailable: "+A.w(d))}s=11
return A.ao(A.mh(),$async$h3)
case 11:s=12
return A.ao(A.mi(),$async$h3)
case 12:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$h3,r)},
mh(){var s=0,r=A.bG(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$mh=A.bJ(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.i5[c]
p=7
s=10
return A.ao(A.b1(A.b(A.b(g.window).fetch(n)),f),$async$mh)
case 10:m=b1
s=11
return A.ao(A.b1(A.b(m.text()),e),$async$mh)
case 11:l=b1
b=B.k.aG(l,null)
b=h.b(b)?b:A.dH("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.dH("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.aL(a)?a:A.dH("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.dH("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.as(a,!0,d):A.dH("assets is not a list")
a4=A.G(a3)
a5=a4.i("U<1,cT>")
a3=A.K(new A.U(a3,a4.i("cT(1)").a(A.Gm()),a5),a5.i("a6.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.as(a,!0,d):A.dH("placements is not a list")
a5=A.G(a4)
a6=a5.i("U<1,cw>")
a4=A.K(new A.U(a4,a5.i("cw(1)").a(A.Gn()),a6),a6.i("a6.E"))
a4.$flags=1
k=new A.oN(a1,a2,a0,a3,a4)
a1=$.X.b
if(a1===$.X)A.k(A.a9(""))
k.eY(a1)
$.me=k
a1=$.bH
if(a1!=null)a1.jM(k)
a1=$.B.b
if(a1===$.B)A.k(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.B.b
if(a1===$.B)A.k(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.B.b
if(a1===$.B)A.k(A.a9(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.aj(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.B.j().setAttribute("data-house-inventory","unavailable")
$.B.j().setAttribute("data-house-inventory-error",A.w(a8))
A.b(g.console).warn("authored house inventory unavailable: "+A.w(a8))
case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$mh,r)},
mi(){var s=0,r=A.bG(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$mi=A.bJ(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.me
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.iH[a4]
p=7
s=10
return A.ao(A.b1(A.b(A.b(a1.window).fetch(m)),a2),$async$mi)
case 10:l=b5
s=11
return A.ao(A.b1(A.b(l.text()),e),$async$mi)
case 11:k=b5
a5=B.k.aG(k,null)
a5=a0.b(a5)?a5:A.h1("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.as(a6,!0,a3):A.h1("emitters is not a list")
a8=A.G(a7)
a9=a8.i("U<1,cS>")
a7=A.K(new A.U(a7,a8.i("cS(1)").a(A.GD()),a9),a9.i("a6.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.aL(a6)?a6:A.h1("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.h1("sourceRef is not a string")
j=new A.oT(a8,a9,a7)
a7=$.X.b
if(a7===$.X)A.k(A.a9(""))
j.pr(a7,b2)
$.zv=j
i=A.q(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.u)(a7),++b0){h=a7[b0]
for(a9=h.f.gJ(),a9=a9.gu(a9);a9.m();){g=a9.gn()
J.bL(i,h.a+":"+g.a,A.e([g.b],c))}}a7=$.X.b
if(a7===$.X)A.k(A.a9(""))
a8=A.B7(i)
a9=new A.mU(a7,A.b5(B.d0,e,d),a8)
a9.kq(a8,a7,B.d0)
$.ma=a9
a7=$.bq
if(a7!=null){a7.ch=a9
a7.bG()}a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.B.b
if(a7===$.B)A.k(A.a9(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.aj(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.ma=null
$.B.j().setAttribute("data-audio-planner","unavailable")
$.B.j().setAttribute("data-house-soundscape","unavailable")
$.B.j().setAttribute("data-house-soundscape-error",A.w(n))
A.b(a1.console).warn("authored house soundscape unavailable: "+A.w(n))
case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$mi,r)},
wQ(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.Q(t.a.b(s)?s:new A.aR(s,A.G(s).i("aR<1,i>")))
while(s.m()){r=s.gn()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.v(q))}},
uJ(a){var s=0,r=A.bG(t.H),q,p,o,n,m,l
var $async$uJ=A.bJ(function(b,c){if(b===1)return A.bD(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.q(n,n)
n=a==null
A.wQ(A.j(n?null:a.sfx),m,"")
A.wQ(A.j(n?null:a.ir),m,"ir-")
q=A.j(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.v(p))
l=$
s=2
return A.ao(A.n0(m,$.X.j()),$async$uJ)
case 2:o=l.bq=c
o.ch=$.ma
o.bG()
A.Fa()
A.zS(o)
A.wJ()
A.zT()
if($.wL){o.cp()
o.fh("music")}return A.bE(null,r)}})
return A.bF($async$uJ,r)},
xb(a,b){var s
A.A4(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
Fl(a){var s,r
try{s=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
za(a,b){var s
if(a!=="brightness")return
s=A.j(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.w(B.c.F(b,0.6,1.4))+")")},
tV(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.j(A.b(v.G.document).documentElement)
if(r!=null)A.T(A.b(r.classList).toggle(s,b))
A.m9()},
zT(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.al($.dd().a.cr(o)),k=A.T($.dd().a.cr(n)),j=A.T($.dd().a.cr(m))
for(s=[$.j0.j(),$.j1.j(),$.f3.j(),$.fX.j(),$.iY.j()],r=0;r<5;++r)s[r].f8(o,l)
A.za(o,l)
for(s=[$.j0.j(),$.j1.j(),$.f3.j(),$.fX.j(),$.iY.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.tV(n,k)
A.tV(m,j)},
xa(a,b){var s
A.A4(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
Fi(a){var s,r
try{s=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
zS(a){var s,r,q,p,o,n,m,l,k,j=A.q(t.N,t.i)
for(s=0;s<5;++s){r=B.im[s]
q=$.dd().a.b.h(0,r)
j.k(0,r,A.al(q==null?A.k(A.m("setting missing from profile: "+r)):q))}p=A.T($.dd().a.cr("muted"))
o=A.T($.dd().a.cr("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bi(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.da(o)
for(q=[$.j0.j(),$.j1.j(),$.f3.j(),$.fX.j()],n=j.$ti.i("cz<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cz(j,j.r,j.e,n);m.m();){k=m.d
l.f8(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
zc(){var s=$.bq
if(s!=null)A.zS(s)
A.zT()},
Fa(){var s,r,q,p,o,n,m,l,k=null
try{k=A.aC(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.k.aG(k,null)
if(!t.f.b(r)||!J.a3(r.h(0,"version"),1))A.k(B.fa)
q=A.yr(r.h(0,"requested"))
$.A_=A.wt(A.yr(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.D
o=A.q(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.Fi(l))}}r=A.q(r,p)
for(n=0;n<10;++n){m=B.B[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.Fl(p))}}$.A_=A.CI(o,r)
A.uU()},
uU(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.k.ak($.dd().B(),null))}catch(s){}},
A4(a,b){var s,r,q,p,o,n,m
switch(A.rg(a).d.a){case 0:r=A.fD(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dd()
q=s
A.rg(a).d3(q)
p=t.N
o=t.K
n=A.fy(r.a.b,p,o)
n.k(0,a,q)
r.a=A.dy(n,1)
n=s
A.rg(a).d3(n)
o=A.fy(r.b.b,p,o)
o.k(0,a,n)
r.b=A.dy(o,1)
A.uU()}catch(m){if(!(A.aj(m) instanceof A.F))throw m}},
uQ(a){var s=0,r=A.bG(t.H),q,p,o
var $async$uQ=A.bJ(function(b,c){if(b===1)return A.bD(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.q(p,p)
A.wQ(A.j(a==null?null:a.tex),o,"")
p=$.h7
p=p==null?null:p.aW(o)
if(p==null)p=A.wa(t.H)
q=$.bH
q=q==null?null:q.aW(o)
s=2
return A.ao(A.od(A.e([p,q==null?A.wa(t.H):q],t.iJ),t.H),$async$uQ)
case 2:return A.bE(null,r)}})
return A.bF($async$uQ,r)},
zQ(){var s,r,q=v.G,p=A.c(A.b(q.window).innerWidth),o=A.c(A.b(q.window).innerHeight)
q=$.B.j()
s=p>0?p:800
q.width=s
s=$.B.j()
q=o>0?o:600
s.height=q
q=$.h7
if(q!=null)q.b7(A.c($.B.j().width),A.c($.B.j().height))
$.d8.j().b7(A.c($.B.j().width),A.c($.B.j().height))
q=$.bH
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.B.j().setAttribute("data-renderer-surface",r)},
EG(){var s,r,q=$.b0
if(q!=null){s=$.ae.j()
if(!s.CW.bd("pause",s.f)){s=$.ae.j()
s=s.CW.bd("secondary",s.f)}else s=!0
if(s){A.En(q)
return}if($.ae.j().f.a2(0,"GamepadDpadUp")){A.zD(q,-1)
return}if($.ae.j().f.a2(0,"GamepadDpadDown")){A.zD(q,1)
return}s=$.ae.j()
if(s.CW.bd("interact",s.f)){r=A.j(A.b(v.G.document).activeElement)
if(t.m.b(r)&&A.T(q.b.contains(r)))A.pd(r,"click",t.X)}return}s=$.ae.j()
if(s.CW.bd("pause",s.f)){A.j9($.cp.j())
return}if($.az.j().y)return
s=$.ae.j()
if(s.CW.bd("journal",s.f))A.jc($.h_.j())
else{s=$.ae.j()
if(s.CW.bd("sleep",s.f))A.jc($.m7.j())}},
En(a){if(a===$.cp.j()){a.a6()
return}if(a===$.h0.j()||a instanceof A.fH||a instanceof A.hA||a instanceof A.hp){A.dJ(a)
return}a.a6()},
zD(a,b){var s,r,q,p,o,n,m=a.b,l=A.b(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.e([],t.sL)
for(s=t.m,r=0;r<A.c(l.length);++r){q=A.j(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.j(A.b(v.G.document).activeElement)
o=B.a.bK(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.M(o+b+m,m)}if(!(n>=0&&n<k.length))return A.f(k,n)
k[n].focus()},
Fh(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
A.al(c6)
try{s=c6
if(!$.zu){$.wZ=s
$.zu=!0}d=s
c=$.wZ
if(typeof d!=="number")return d.ah()
r=(d-c)/1000
$.wZ=s
d=r
if(typeof d!=="number")return d.d9()
if(d<0)r=0
d=r
if(typeof d!=="number")return d.ap()
if(d>0.25)r=0.25
A.FL(r)
$.ae.j().oM()
d=$.B.j()
c=$.ae.j().z!=null?"standard":"none"
d.setAttribute("data-controller",c)
q=$.ae.j().z
if(q!=null)$.B.j().setAttribute("data-controller-id",q)
else $.B.j().removeAttribute("data-controller-id")
A.EG()
if(!$.mk&&$.b0==null){d=$.eg
c=r
if(typeof c!=="number")return A.jd(c)
c=$.eg=d+c
p=0
d=t.aA
for(;;){if(c>=0.008333333333333333){b=p
if(typeof b!=="number")return b.d9()
b=b<10}else b=!1
if(!b)break
$.x2=$.en()
if(!$.xx()){c=$.V.b
if(c===$.V)A.k(A.a9(""))
c.mv(0.008333333333333333)
c=$.AO()
b=$.V.b
if(b===$.V)A.k(A.a9(""))
b=b.gaa()
a=$.V.b
if(a===$.V)A.k(A.a9(""))
c=c.dN(b.a,a.gaa().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.u)(c),++a0){o=c[a0]
B.a.l($.da,"clock:"+o.a)}c=$.AP()
b=$.V.b
if(b===$.V)A.k(A.a9(""))
b=b.gaa()
a=$.V.b
if(a===$.V)A.k(A.a9(""))
c=c.dN(b.a,a.gaa().b)
b=c.length
a0=0
for(;a0<c.length;c.length===b||(0,A.u)(c),++a0){n=c[a0]
B.a.l($.da,"service:"+n.a+":"+n.b)}}A.FO()
c=$.aG.b
if(c===$.aG)A.k(A.a9(""))
b=$.V.b
if(b===$.V)A.k(A.a9(""))
c.w=b.r.c>=0.5
c=c.f
a1=A.as(c,!1,d)
a1.$flags=3
a2=a1
B.a.H(c)
if(a2.length!==0){c=$.V.b
if(c===$.V)A.k(A.a9(""))
c.oQ(a2)}A.FK()
A.FN()
A.FM()
A.FJ(0.008333333333333333)
c=$.fY.b
if(c===$.fY)A.k(A.a9(""))
if(c.a!=null)if((c.b-=0.008333333333333333)<=0)c.a=null
c=$.bU.b
if(c===$.bU)A.k(A.a9(""))
m=c.a!==B.C
b=$.X.b
if(b===$.X)A.k(A.a9(""))
c.dM(0.008333333333333333,b)
if(m){c=$.bU.b
if(c===$.bU)A.k(A.a9(""))
c=c.e}else c=!1
if(c)A.zR(!0)
c=$.eg-0.008333333333333333
$.eg=c
b=p
if(typeof b!=="number")return b.a9()
p=b+1}l=B.c.F(c/0.008333333333333333,0,1)
d=$.xf=A.yC($.AR(),$.en(),l)
k=$.bq
if(k!=null){c=k
b=Math.sin($.c8)
a=Math.cos($.c8)
a3=A.b(c.a.listener)
a3.setPosition(d.a,d.b,d.c)
A.af(a3,"setOrientation",[b,0,a,0,1,0],t.H)
c.jO($.ar)
for(d=$.da.length,a0=0;a0<$.da.length;$.da.length===d||(0,A.u)($.da),++a0){j=$.da[a0]
A.Er(k,j)}B.a.H($.da)
$.B.j().setAttribute("data-audio-spatial-active",""+k.CW.a)
$.B.j().setAttribute("data-audio-muffle01",B.c.az(k.goh(),3))
d=$.B.j()
c=k.cx?"true":"false"
d.setAttribute("data-audio-music-started",c)
c=$.B.j()
d=k.dx
if(d==null)d="ir-fallback"
c.setAttribute("data-audio-room-ir",d)}}i=$.h7
if(i!=null){$.bT.j().eE($.jf(),$.c8,$.ei)
d=$.b0===$.h_.j()?1:0
i.cT=d
$.zB=r
$.d8.j().b9(A.wq($.V.j().geK()))}else if($.c7.j().a===B.a_){$.bT.j().eE($.jf(),$.c8,$.ei)
d=$.bH
if(d!=null){c=$.bT.j()
b=c.a
a4=new A.M(b.a,b.b,b.c)
b=c.b
a5=new A.M(b.a,b.b,b.c)
b=c.c
a6=d.b/d.c
a7=A.yd(a4,a5,new A.M(b.a,b.b,b.c))
c=c.f
b=c.b
a=c.c
a8=A.wj(a6,a,c.a,b)
d.ok=new A.fk(a7,a8,a8.a5(0,a7),a4,a5,b,a,a6)}d=$.bH
if(d!=null)d.jX($.X.j(),$.ar)
d=$.bH
if(d!=null)d.jN($.X.j(),$.ar,$.jf(),$.b_.j().gbB(),Math.sin(3.141592653589793*$.b_.j().gbB()),$.tR.j().ez($.V.j().gaa().a),A.Gy($.ar),$.b_.j().b)
if($.zA!==$.bU.j().a){$.zA=$.bU.j().a
$.x5=$.x5+1}d=$.bH
if(d!=null){if($.xx())c=0
else{c=s
if(typeof c!=="number")return c.pA()
c/=1000}b=$.x5
a=A.c(Math.max(0,$.V.j().b))
if(!isFinite(c)||c<0)A.k(A.ap(c,"timeSeconds",null))
if(a<0)A.k(A.z("frame clock seeds must be non-negative",null))
d.R8=c
d.RG=b
d.rx=a}d=$.bH
if(d!=null){c=$.bU.j()
b=$.mm
a=$.tR.j().ez($.V.j().gaa().a)
a9=A.zP($.ar)
b0=c.a
b1=c.gff()
b2=b1>0?B.c.F(c.b/b1,0,1):0
c=b0.a
b3=c>=3
b4=b0===B.bx
b5=b0===B.a0?0.45:1
if(c>=1)b6=b0===B.ad?b2:1
else b6=0
if(c>=2)c=b0===B.bv?b2:1
else c=0
b7=b3?320:0
b8=b3?5:8
b9=b4?1:0
c0=b4?b2:0
c1=b4?b2:0
c2=b4?b2:0
c3=b4?b2:0
c4=b4?b2:0
d.p2=new A.kA(b5,0.38,0.28,0.18,0.015,a.c,a9,b6,c,b7,b8,b9,c0,c1,c2,c3,c4,b)}$.d8.j().b9(A.wq($.V.j().geK()))
h=$.bH
if(h!=null){g=h.gnU()
if(g!=null){$.B.j().setAttribute("data-renderer-frame-stats",g)
d=$.B.j()
c=h.gnT()?"ok":"exceeded"
d.setAttribute("data-renderer-budget",c)}}}A.eh("running")
A.Fg()
d=$.ae.j()
d.as=d.Q=0
c=d.c
c.a2(0,"WheelUp")
c.a2(0,"WheelDown")
d.d.H(0)
d.f.H(0)
A.c(A.b(v.G.window).requestAnimationFrame(A.Z(A.Ak())))}catch(c5){f=A.aj(c5)
e=A.cI(c5)
A.uX(f,e)}},
Er(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.jk("confirm")
$.bb.j().aM("interface confirmation")
break
case"ambient-winnow":a.eI("winnow",0.28)
$.bb.j().aM("wind moving through the house")
break
case"ambient-gate":a.eI("gate",0.22)
$.bb.j().aM("distant gate")
break
case"collapse":a.jk("collapse")
$.bb.j().aM("front door shudders and collapses")
break
case"clock:tick":A.ml(a,p,"tick")
break
case"clock:chime":A.ml(a,p,"chime")
break
case"clock:cuckoo":A.ml(a,p,"cuckoo")
break
case"clock:bell":A.ml(a,p,"bell")
break
default:if(B.b.T(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.f(s,1)
q=s[1]
if(2>=r)return A.f(s,2)
A.ml(a,q,s[2])}}}},
ml(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.zv,g=$.me
if(h==null||g==null)return
s=h.nF(b)
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
break A}if(q!=null)$.bb.j().aM(q)
q=$.X.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.k(A.m("sound room missing: "+o))
m=n.d.a9(0,s.d.a5(0,p))
l=$.ma
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.k(A.m("sound emitter "+s.a+" has no cue for "+c))
a.oL(q,m,s.e,o)
return}q=$.zh
$.zh=q+1
o=A.B8(B.dR,r,r+":"+q,m,A.E9(b,c),q,o)
q=$.ar
q=A.B4($.jf(),q)
t.gG.a(B.bf)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.k(A.m("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.k(A.m("audio listener room missing: "+q))
j=l.jt(p,q,B.bf)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.k(A.m("audio cue family missing: "+q))
k=J.aD(i)
k=k.h(i,B.d.M(A.FA(q,o.f),k.gt(i)))
o=o.e
A.ah(j.a,t.N)
a.jl(k,new A.a(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
E9(a,b){var s,r,q,p=$.V.j().b
for(s=new A.dS(a+":"+b),r=t.sU,s=new A.aS(s,s.gt(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){q=s.d
p=A.Ag(p,q==null?r.a(q):q)}return p},
FL(a){var s=$.wT
if(s==null)return
s.textContent=""+B.c.aL(a>0?1/a:0)+" fps"},
FJ(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2="interact"
if($.zW||$.b0!=null||$.az.j().y){$.mu().a=new A.a(0,0,0)
return}s=$.ae.j()
r=s.cG("moveLeft")?-1:0
if(s.cG("moveRight"))++r
q=s.cG("moveForward")?1:0
if(s.cG("moveBack"))--q
s=s.ay?s.w:new A.a(0,0,0)
p=new A.a(r,0,q).a9(0,s)
o=p.gt(0)>1?p.gab():p
$.ae.j().dg(b3)
n=$.ae.j().Q
m=$.ae.j().as
s=$.f8()
l=s.d?-1:1
k=s.e?-1:1
j=$.c8
i=$.ae.j()
i=i.ay?i.x:0
h=$.f8()
g=h.d?-1:1
$.c8=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b3)
g=$.ei
h=$.ae.j()
l=h.ay?h.y:0
j=$.f8()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b3)
$.ei=i
$.ei=B.c.F(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.a(i*Math.cos($.c8)+j*Math.sin($.c8),0,-i*Math.sin($.c8)+j*Math.cos($.c8)).gab().a5(0,2)
j=$.mu()
if(!isFinite(b3)||b3<0)A.k(A.ap(b3,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.k(A.ap(e,"rate","must be finite and positive"))
s=Math.exp(-e*b3)
l=j.a
s=l.a9(0,f.ah(0,l).a5(0,1-s))
j.a=s
d=$.j_.j().oi($.X.j(),$.ar,$.en(),s.a5(0,b3))
$.x8=d.a
if($.bU.j().a!==B.by&&$.bU.j().a!==B.a0)$.ar=d.b
c=B.c.F(j.a.gt(0)/2,0,1)
s=$.AQ()
$.x9=s.kb($.x9,$.en().b,b3)
b=s.mw(b3,c)
s=$.en()
l=$.x9
$.bT.j().eE(new A.a(s.a+b.a,l+b.b,s.c+b.c),$.c8,$.ei)
s=$.V.j().z
a=new A.q4(s)
s=$.bT.j()
l=$.X.j()
a0=A.Gx(a,s,$.ar,l,$.me)
l=a0.c
$.z6.j().jY(l)
a1=A.j(A.b(v.G.document).getElementById("crosshair"))
if(a1!=null){s=l!=null?"crosshair-active":"crosshair-dot"
a1.className=s}s=a0.a
a2=b1
a3=b1
a4=b1
a5=b1
switch(s.a){case 0:a2=A.xo($.bT.j(),$.X.j(),$.ar)
break
case 1:a3=A.Aq($.bT.j(),$.X.j(),$.ar)
break
case 2:a4=A.Ar($.bT.j(),$.X.j(),$.ar)
break
case 3:l=$.bT.j()
k=$.X.j()
j=$.me
a5=A.Ap(l,$.ar,k,j)
break
case 4:case 5:break}$.z4.j().eW($.f9().f2($.V.j().gaa().a,"status"),$.ar==="living-room")
l=$.ae.j()
k=l.CW
if(k.bd(b2,l.d)||k.bd(b2,l.f)){l=$.V.j().gaa()
k=a3==null
j=k?b1:a3.a
i=B.a.a7($.aG.j().hx(21),$.aG.j().go6())
if(l.a===21&&j==="front-door"&&i){s=$.bU.j()
$.X.j()
s.kh(B.eu,A.ah(s.c,t.N))
B.a.l($.da,"collapse")
A.h8("the front door opens on itself")}else if(a2!=null&&!a2.e){if(a2.d){a2.d=!1
$.bb.j().aM("mantle flame extinguished")}else if($.V.j().ke(1,1)){a2.d=!0
s=$.fY.j()
s.a=a2
s.b=2
if(a2.f!=null)a2.r=!0
$.bb.j().aM("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bb.j()
s.aM(a3.ax?"door opens":"door closes")
s=$.h2
if(s!=null)s.d1(a3.b)
s=$.bH
if(s!=null)s.eO($.X.j(),a3.a)
s=$.bq
if(s!=null)s.bG()}else if(a4!=null)if(a4.w){s=$.V.j()
if(s.f.df(1)){a4.w=!1
$.bb.j().aM("shutter closes")}}else{a4.w=!0
$.bb.j().aM("shutter opens")}else if(s===B.ce){a6=a.f1()
s=A.G(a6)
l=t.E4
a7=A.bZ(new A.J(a6,s.i("n(1)").a(new A.v5(a0)),s.i("J<1>")),l)
if(a7==null)a7=A.bZ(a6,l)
if(a7!=null)$.bb.j().bU("noticed",a7.d)}else if(a5!=null){s=$.w3()
if(!a5.x)A.k(A.m("inventory placement is not pickable: "+a5.a))
a8=a5.y
if(a8==null)a8=a5.a
s=s.a
l=a5.a
k=s.h(0,l)
s.k(0,l,(k==null?0:k)+1)
l=$.B.j()
l.setAttribute("data-inventory-last-focus",a8)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a8)
s=A.b5(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gt(s))
a9=A.Fc(a8)
s=$.bb.j()
s.bU("noticed",a9==null?"you inspect "+a8:a9)}}s=$.fY.j()
if(s.a!=null&&s.b>0){b0=$.fY.j().a
if(b0!=null&&A.xo($.bT.j(),$.X.j(),$.ar)!==b0){s=$.fY.j()
s.a=null
s.b=0}}A.Fo(b3,a0)},
Fo(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="rgba(12, 10, 14, 0.92)",d=$.uT
if(d==null)return
s=A.c($.B.j().width)
r=A.c($.B.j().height)
d.c+=a
B.a.H(d.d)
q=A.al(A.b(v.G.window).devicePixelRatio)
p=B.c.aw(s*q)
o=B.c.aw(r*q)
n=d.a
if(A.c(n.width)!==p||A.c(n.height)!==o){n.width=p
n.height=o}n=d.b
n===$&&A.h()
n.save()
n.scale(q,q)
n.clearRect(0,0,s,r)
if(!$.az.j().y&&$.b0==null){m=b.c
n.save()
n.translate(s*0.5,r*0.5)
l=t.H
if(m!=null){k=Math.sin(d.c*8)
j=d.c
i=22*(1+k*0.08)
n.strokeStyle="rgba(0, 0, 0, 0.85)"
n.lineWidth=3.5
n.save()
j=j*1.5+0.7853981633974483
n.rotate(j)
k=-i*0.5
n.strokeRect(k,k,i,i)
n.restore()
n.strokeStyle="#c49a45"
n.lineWidth=2
n.save()
n.rotate(j)
n.strokeRect(k,k,i,i)
n.restore()
n.fillStyle="#f5f0e6"
n.beginPath()
A.af(n,"arc",[0,0,2.5,0,6.283185307179586],l)
n.fill()}else{n.fillStyle="rgba(0, 0, 0, 0.85)"
n.beginPath()
A.af(n,"arc",[1,1,3,0,6.283185307179586],l)
n.fill()
n.fillStyle="#f5f0e6"
n.beginPath()
A.af(n,"arc",[0,0,2.5,0,6.283185307179586],l)
n.fill()}n.restore()
d.nz(m,r,s)}m=$.cJ()
m.ju(a)
d.ny(r,s,new A.pU(m.a,m.b,m.c,m.e,m.f,m.r,m.w))
m=$.X.j()
l=$.ar
h=m.e.h(0,l)
l=$.V.j().gaa()
m=B.c.aw($.b_.j().b)
k=h==null?null:h.a
if(k==null)k=$.ar
j=$.f9().f2($.V.j().gaa().a,"status")
g=s-80-24
d.b2("#d32f2f",2,8,e,44,-0.08,160,g,42)
n.save()
n.fillStyle="#f5f0e6"
n.font='bold 14px "Cinzel", serif'
n.textAlign="center"
n.textBaseline="middle"
n.fillText("DAY "+l.a+"  \u2022  "+B.b.jg(B.d.p(m),2,"0")+":00",g,42)
n.restore()
d.b2("#c49a45",1.8,6,e,34,0.08,170,109,37)
n.save()
n.fillStyle="#c49a45"
n.font='bold 13px "Cinzel", serif'
n.textAlign="center"
n.textBaseline="middle"
n.fillText(k.toUpperCase(),109,37)
n.restore()
if(j!=null&&j.length!==0){f=s*0.5
d.b2("#f5f0e6",1.5,6,e,32,-0.04,Math.min(s*0.6,420),f,36)
n.save()
n.fillStyle="#f5f0e6"
n.font='13px "Cinzel", serif'
n.textAlign="center"
n.textBaseline="middle"
n.fillText(j,f,36)
n.restore()}m=$.w4()
l=m.a
k=m.d
j=a*8
if(l)m.d=Math.min(1,k+j)
else m.d=Math.max(0,k-j)
d.nA(r,s,m)
n.restore()},
Fc(a){var s,r,q,p,o=$.V.j().z.b,n=A.r(o).i("I<1,2>"),m=A.K(new A.I(o,n),n.i("p.E"))
B.a.U(m,new A.uR())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.u)(m),++s){r=m[s]
n=$.f9().at
n===$&&A.h()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
FO(){var s,r,q,p,o,n,m,l,k,j=null
if($.az.j().y||$.b0!=null||$.aG.j().r!=null)return
s=$.V.j().gaa()
for(r=$.aG.j().hx(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=$.aG.b
if(m===$.aG)A.k(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aG.b
if(r===$.aG)A.k(A.a9(""))
l=r.dO(n)
if(!(l instanceof A.l6))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.f(r,q)
k=r[q].b}else k=j
if(k==null)return
A.y3(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.mu().a=new A.a(0,0,0)
r=$.az.b
if(r===$.az)A.k(A.a9(""))
q=n.a
r.fb(q,k)
$.cJ().bA(!0,B.b3,q,k)
A.A3(n)
return}},
Fp(){var s,r,q=$.aG.j().r,p=q==null,o=p?null:q.gbp()
if(p||o==null)return
p=$.az.j()
s=q.a
r=s.a
p.fb(r,o)
$.cJ().bA(!0,B.b3,r,o)
A.A3(s)
if(q.d!==B.a4)A.x1()
A.h8("restored visitor")},
A3(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.V.j().nW("stranger-17-eileen-case")
r=$.f9().x
r===$&&A.h()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.as(q,!0,t.N):B.n
p=A.bZ(r,t.N)
if(s==null||p==null)return
$.bb.j().bU("inside the case",p+" \u201c"+s.d+"\u201d")},
FK(){var s,r,q,p,o=$.V.j().gaa(),n=$.m4.j().nD(o.a,o.b)
if(n.length===0)return
s=B.a.gP(n)
$.m4.j().b.l(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.bb.j().bU(q,s.e)
p=A.FU(r)
if(p!=null)B.a.l($.da,"ambient-"+p)},
FN(){var s,r,q,p,o=$.V.j().gaa()
if(o.b<20)return
s=o.a
if(!$.v4.l(0,s))return
r=$.f9().f
r===$&&A.h()
q=r.h(0,B.d.p(s))
r=t.j.b(q)?A.as(q,!0,t.N):B.n
p=A.Gu(r,$.V.j().b,s)
if(p!=null)$.bb.j().bU("noticed",p)},
zR(a){var s,r,q,p,o
if($.wS!=null)return
s=$.V.j().gaa()
r=$.V.j().r.c
q=$.V.j().e.b
p=A.r(q).i("av<2>")
o=A.BH(new A.nV(s.a,1-r,new A.J(new A.av(q,p),p.i("n(p.E)").a(new A.uY()),p.i("J<p.E>")).gt(0),$.V.j().r.d,a))
if(o==null)return
A.zM(o)
A.mo("ending recorded")},
zM(a){var s,r,q
$.wS=a
$.zW=!0
$.mu().a=new A.a(0,0,0)
A.j9($.iX.j())
s=a.a
r=$.f9().w
r===$&&A.h()
q=r.h(0,s.b)
r=t.j.b(q)?A.as(q,!0,t.N):B.n
r=A.K(r,t.N)
B.a.L(r,A.Cf($.V.j().z,s))
$.iX.j().k0(a,r)},
Eg(a){var s,r,q,p
A:{if("open"===a){s=B.at
break A}if("chain"===a){s=B.c7
break A}if("through-door"===a){s=B.c8
break A}if("letterbox"===a){s=B.c9
break A}s=B.ab
break A}r=$.aG.j().mS(s)
if(s===B.at){q=$.X.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.h2
if(p!=null)p.d1(q.b)
p=$.bH
if(p!=null)p.eO($.X.j(),q.a)
p=$.bq
if(p!=null)p.bG()}}if(!(r instanceof A.l4)||s===B.ab){A.um()
return}if(r.a.gbp()==null){A.wP()
A.um()
return}A.x1()},
Em(){var s=$.aG.j().mx()
if(!(s instanceof A.ih)||s.b){A.wP()
A.um()
return}if(s.a.gbp()==null){A.wP()
A.um()
return}A.x1()},
x1(){var s,r,q,p,o,n,m,l,k,j=$.aG.j().r,i=j==null,h=i?null:j.gbp()
if(i||h==null)return
s=$.aG.j().gc5()
if(s==null){$.az.j().k_(h)
$.cJ().bA(!0,B.n,j.a.a,h)}else{r=j.w
i=r==null
$.az.j().fc(h,i)
q=A.e([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.az.j()
l=A.e([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.aU(k.a,k.b))}m.k5(l,r)
o=$.cJ()
m=j.a.a
o.bA(!0,i?q:B.n,m,h)
if(!i){i=A.G(p)
k=A.bZ(new A.J(p,i.i("n(1)").a(new A.uV(r)),i.i("J<1>")),t.Y)
if(k!=null){i=$.az.j()
q=k.c
i.fd(h,q)
o.bA(!0,B.n,m,h+"\n\n"+q)}}}A.A2()},
Eh(a){var s,r,q,p,o,n=$.aG.j().mT(a)
if(!(n instanceof A.l5))return
s=n.c
if(!$.V.j().mz(n.b,s))return
r=s.c
s=$.az.j()
q=n.a
p=q.gbp()
s.fd(p==null?"":p,r)
o=q.gbp()
if(o==null)o=""
$.cJ().bA(!0,B.n,q.a.a,o+"\n\n"+r)
A.A2()
A.mo("saved after visitor answer")},
um(){var s,r=$.az.j()
r.y=!1
s=r.d
s===$&&A.h()
s.textContent=""
s=r.f
s===$&&A.h()
s.textContent=""
s=r.r
s===$&&A.h()
s.textContent=""
r=r.a
r.className="door"
r.setAttribute("hidden","")
r=$.cJ()
r.a=null
r.b=""
r.e=A.e([],t.s)
r.c=1
r.r=r.f=null
r.w=!1
r.x=0
$.ae.j().d2($.B.j())},
A2(){var s,r,q,p,o=$.az.j(),n=A.b(v.G.document),m=A.e([],t.wt)
for(s=$.m6.j().f3(),r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
m.push(new A.aU(p.a,B.a.gW(p.c).p(0)))}o.jZ(n,m)},
Ei(a){var s,r,q,p=$.aG.j().mU(a,!0,$.m6.j())
if(p==null)return
s=$.m6.j().nq(p,B.hO)
r=$.az.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.h()
r.textContent=B.K.bJ("",!0,q)},
wP(){var s,r=$.X.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.h2
if(s!=null)s.d1(r.b)
s=$.bH
if(s!=null)s.eO($.X.j(),r.a)
s=$.bq
if(s!=null)s.bG()}},
FM(){var s,r,q,p,o,n,m,l,k
for(s=$.X.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bU.b
if(k===$.bU)A.k(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Gy(a){var s,r,q,p,o,n,m,l=$.X.j().e.h(0,a)
if(l==null||$.b_.j().gbB()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.l){n=$.b_.b
if(n===$.b_)A.k(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.m){n=$.b_.b
if(n===$.b_)A.k(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.u){n=$.b_.b
if(n===$.b_)A.k(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.F){o=$.b_.b
if(o===$.b_)A.k(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
zP(a){var s,r=$.X.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.b7
if(q.length===0)return 0.12
s=A.G(q)
return B.c.F(new A.J(q,s.i("n(1)").a(new A.uW()),s.i("J<1>")).gt(0)/q.length,0.12,1)},
fQ:function fQ(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.fy=a0
_.go=a1
_.id=a2
_.k1=a3
_.k2=a4
_.k3=a5
_.ok=_.k4=null
_.p1=a6
_.p2=a7
_.p3=null
_.to=_.ry=_.rx=_.RG=_.R8=_.p4=0
_.x1=!1
_.x2=$
_.y2=null
_.ce=0},
tB:function tB(a){this.a=a},
tC:function tC(a){this.a=a},
tD:function tD(a){this.a=a},
tE:function tE(a){this.a=a},
tx:function tx(){},
ty:function ty(){},
tz:function tz(){},
tA:function tA(){},
fN:function fN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
lI:function lI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ta:function ta(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
u5:function u5(){},
u6:function u6(){},
u7:function u7(){},
ud:function ud(){},
ue:function ue(){},
uf:function uf(){},
ug:function ug(){},
uh:function uh(){},
ui:function ui(a){this.a=a},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
u8:function u8(a){this.a=a},
u9:function u9(){},
ua:function ua(){},
ub:function ub(){},
uc:function uc(){},
u2:function u2(){},
u3:function u3(){},
u4:function u4(){},
u_:function u_(){},
u0:function u0(){},
u1:function u1(){},
uM:function uM(a,b){this.a=a
this.b=b},
uK:function uK(a){this.a=a},
uL:function uL(a){this.a=a},
vo:function vo(a){this.a=a},
vp:function vp(){},
vq:function vq(){},
vB:function vB(){},
vJ:function vJ(){},
vK:function vK(){},
vL:function vL(){},
vM:function vM(){},
vN:function vN(){},
vO:function vO(){},
vP:function vP(){},
vr:function vr(){},
vs:function vs(){},
vt:function vt(){},
vu:function vu(){},
vv:function vv(){},
vw:function vw(){},
vx:function vx(){},
vy:function vy(){},
vz:function vz(){},
vA:function vA(){},
vC:function vC(){},
vD:function vD(){},
vE:function vE(){},
vF:function vF(){},
vG:function vG(){},
vH:function vH(){},
vI:function vI(){},
uN:function uN(){},
uO:function uO(){},
uS:function uS(a){this.a=a},
v0:function v0(a){this.a=a},
v5:function v5(a){this.a=a},
uR:function uR(){},
uY:function uY(){},
uV:function uV(a){this.a=a},
uW:function uW(){},
y3(a,b,c,d,e,f){var s=a[b]()
return s},
pd(a,b,c){var s=null
return c.a(A.y3(a,b,s,s,s,s))},
vU(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.d(A.ap(b.go0(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gD().c.ac()
o=q*16
n=o+16
B.q.dc(s,o,n,p.a)
if(l)B.q.dc(r,o,n,p.eG().a)}m=a.a
A.x(m,"uInstanceModels",new A.A(B.dG,s))
if(l)A.x(m,"uInstanceNormalMatrices",new A.A(B.dG,r))
A.x(m,"uUseInstances",B.dH)},
Bu(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
Bt(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Ah(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
vV(a,b){var s=B.c.aU(a),r=A.Ah(s,b),q=A.Ah(s+1,b),p=B.c.F(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
Ag(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
FU(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
di(a,b,c){var s=B.c.F(c,0,1),r=a.c,q=a.b,p=a.a
return new A.aZ(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
G8(a){var s,r,q,p,o,n,m,l=B.k.aG(a,null),k=t.f
if(!k.b(l))throw A.d(B.fG)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=A.q(s,t.P)
for(o=0;o<14;++o){n=B.iJ[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.q(s,r))
else if(k.b(m))p.k(0,n,A.aM(m,s,r))
else throw A.d(A.a7('text.json section "'+n+'" must be an object',null,null))}return p},
Gu(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gaO(a)
s=new A.f0()
s.cu((b^274953^c)>>>0)
r=s.aN(a.length)
if(!(r>=0&&r<a.length))return A.f(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.wd.prototype={}
J.k7.prototype={
a0(a,b){return a===b},
gI(a){return A.hW(a)},
p(a){return"Instance of '"+A.kC(a)+"'"},
ga3(a){return A.db(A.wW(this))}}
J.ka.prototype={
p(a){return String(a)},
gI(a){return a?519018:218159},
ga3(a){return A.db(t.y)},
$iag:1,
$in:1}
J.hE.prototype={
a0(a,b){return null==b},
p(a){return"null"},
gI(a){return 0},
$iag:1,
$iaB:1}
J.hG.prototype={$ia5:1}
J.e_.prototype={
gI(a){return 0},
ga3(a){return B.lF},
p(a){return String(a)}}
J.kx.prototype={}
J.e7.prototype={}
J.ds.prototype={
p(a){var s=a[$.Aw()]
if(s==null)s=a[$.he()]
if(s==null)return this.kj(a)
return"JavaScript function for "+J.de(s)},
$iew:1}
J.fw.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.fx.prototype={
gI(a){return 0},
p(a){return String(a)}}
J.t.prototype={
cP(a,b){return new A.aR(a,A.G(a).i("@<1>").K(b).i("aR<1,2>"))},
l(a,b){A.G(a).c.a(b)
a.$flags&1&&A.bK(a,29)
a.push(b)},
oU(a,b){var s
a.$flags&1&&A.bK(a,"removeAt",1)
s=a.length
if(b>=s)throw A.d(A.yk(b,null))
return a.splice(b,1)[0]},
a2(a,b){var s
a.$flags&1&&A.bK(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a3(a[s],b)){a.splice(s,1)
return!0}return!1},
L(a,b){var s
A.G(a).i("p<1>").a(b)
a.$flags&1&&A.bK(a,"addAll",2)
if(Array.isArray(b)){this.kK(a,b)
return}for(s=J.Q(b);s.m();)a.push(s.gn())},
kK(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.at(a))
for(r=0;r<s;++r)a.push(b[r])},
H(a){a.$flags&1&&A.bK(a,"clear","clear")
a.length=0},
cn(a,b,c){var s=A.G(a)
return new A.U(a,s.K(c).i("1(2)").a(b),s.i("@<1>").K(c).i("U<1,2>"))},
a4(a,b){var s,r=A.cU(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
bv(a,b,c,d){var s,r,q
d.a(b)
A.G(a).K(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.at(a))}return r},
aT(a,b,c){var s,r,q,p=A.G(a)
p.i("n(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.at(a))}if(c!=null)return c.$0()
throw A.d(A.cx())},
am(a,b){return this.aT(a,b,null)},
Z(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
aP(a,b,c){var s=a.length
if(b>s)throw A.d(A.aT(b,0,s,"start",null))
if(c<b||c>s)throw A.d(A.aT(c,b,s,"end",null))
if(b===c)return A.e([],A.G(a))
return A.e(a.slice(b,c),A.G(a))},
gP(a){if(a.length>0)return a[0]
throw A.d(A.cx())},
gW(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.cx())},
gaO(a){var s=a.length
if(s===1){if(0>=s)return A.f(a,0)
return a[0]}if(s===0)throw A.d(A.cx())
throw A.d(A.y_())},
N(a,b){var s,r
A.G(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.at(a))}return!1},
a7(a,b){var s,r
A.G(a).i("n(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.at(a))}return!0},
U(a,b){var s,r,q,p,o,n=A.G(a)
n.i("l(1,1)?").a(b)
a.$flags&2&&A.bK(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.EQ()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.ap()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.hc(b,2))
if(p>0)this.m3(a,p)},
Y(a){return this.U(a,null)},
m3(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
de(a,b){var s,r,q,p
a.$flags&2&&A.bK(a,"shuffle")
s=a.length
while(s>1){r=b.aN(s);--s
q=a.length
if(!(s<q))return A.f(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.f(a,r)
a[s]=a[r]
a[r]=p}},
bK(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.f(a,s)
if(J.a3(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.a3(a[s],b))return!0
return!1},
gO(a){return a.length===0},
gX(a){return a.length!==0},
p(a){return A.wc(a,"[","]")},
gu(a){return new J.eo(a,a.length,A.G(a).i("eo<1>"))},
gI(a){return A.hW(a)},
gt(a){return a.length},
st(a,b){a.$flags&1&&A.bK(a,"set length","change the length of")
if(b<0)throw A.d(A.aT(b,0,null,"newLength",null))
if(b>a.length)A.G(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ve(a,b))
return a[b]},
k(a,b,c){A.G(a).c.a(c)
a.$flags&2&&A.bK(a)
if(!(b>=0&&b<a.length))throw A.d(A.ve(a,b))
a[b]=c},
eZ(a,b){return new A.cG(a,b.i("cG<0>"))},
j3(a,b){var s
A.G(a).i("n(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga3(a){return A.db(A.G(a))},
$iR:1,
$ip:1,
$iC:1}
J.k8.prototype={
pp(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kC(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pe.prototype={}
J.eo.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.u(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iab:1}
J.eC.prototype={
G(a,b){var s
A.al(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gci(b)
if(this.gci(a)===s)return 0
if(this.gci(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gci(a){return a===0?1/a<0:a<0},
aw(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.aY(""+a+".toInt()"))},
mP(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.aY(""+a+".ceil()"))},
aU(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.aY(""+a+".floor()"))},
aL(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.aY(""+a+".round()"))},
pi(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
F(a,b,c){if(this.G(b,c)>0)throw A.d(A.xh(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
az(a,b){var s
if(b>20)throw A.d(A.aT(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gci(a))return"-"+s
return s},
pn(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.d(A.aT(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.f(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.aY("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.f(p,1)
s=p[1]
if(3>=r)return A.f(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.a5("0",o)},
p(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
M(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
kl(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hj(a,b)},
V(a,b){return(a|0)===a?a/b|0:this.hj(a,b)},
hj(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.aY("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
c_(a,b){var s
if(a>0)s=this.cM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ma(a,b){if(0>b)throw A.d(A.xh(b))
return this.cM(a,b)},
cM(a,b){return b>31?0:a>>>b},
ga3(a){return A.db(t.o)},
$ib4:1,
$iy:1,
$ibd:1}
J.hD.prototype={
ga3(a){return A.db(t.S)},
$iag:1,
$il:1}
J.kb.prototype={
ga3(a){return A.db(t.i)},
$iag:1}
J.dZ.prototype={
hw(a,b){return new A.lV(b,a,0)},
kf(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.hF){s=b.e
s=!(s==null?b.e=b.l3():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.la(a,b)}},
bR(a,b,c,d){var s=A.hX(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
la(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.AV(b,a),s=s.gu(s),r=0,q=1;s.m();){p=s.gn()
o=p.gfg()
n=p.ge_()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.E(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aZ(a,r))
return m},
ad(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
T(a,b){return this.ad(a,b,0)},
E(a,b,c){return a.substring(b,A.hX(b,c,a.length))},
aZ(a,b){return this.E(a,b,null)},
bh(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.C7(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.C8(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a5(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.eq)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
jg(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a5(c,s)+a},
cZ(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.aT(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bK(a,b){return this.cZ(a,b,0)},
q(a,b){return A.GE(a,b,0)},
G(a,b){var s
A.v(b)
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
ga3(a){return A.db(t.N)},
gt(a){return a.length},
$iag:1,
$ib4:1,
$ipY:1,
$ii:1}
A.ea.prototype={
gu(a){return new A.hl(J.Q(this.gb_()),A.r(this).i("hl<1,2>"))},
gt(a){return J.cb(this.gb_())},
gO(a){return J.mw(this.gb_())},
gX(a){return J.AZ(this.gb_())},
Z(a,b){return A.r(this).y[1].a(J.mv(this.gb_(),b))},
gP(a){return A.r(this).y[1].a(J.xF(this.gb_()))},
q(a,b){return J.xE(this.gb_(),b)},
p(a){return J.de(this.gb_())}}
A.hl.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())},
$iab:1}
A.er.prototype={
gb_(){return this.a}}
A.ir.prototype={$iR:1}
A.ip.prototype={
h(a,b){return this.$ti.y[1].a(J.aH(this.a,b))},
k(a,b,c){var s=this.$ti
J.bL(this.a,b,s.c.a(s.y[1].a(c)))},
st(a,b){J.B_(this.a,b)},
l(a,b){var s=this.$ti
J.hh(this.a,s.c.a(s.y[1].a(b)))},
U(a,b){var s
this.$ti.i("l(2,2)?").a(b)
s=b==null?null:new A.tb(this,b)
J.B0(this.a,s)},
$iR:1,
$iC:1}
A.tb.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("l(1,1)")}}
A.aR.prototype={
cP(a,b){return new A.aR(this.a,this.$ti.i("@<1>").K(b).i("aR<1,2>"))},
gb_(){return this.a}}
A.eD.prototype={
p(a){return"LateInitializationError: "+this.a}}
A.dS.prototype={
gt(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.f(s,b)
return s.charCodeAt(b)}}
A.qL.prototype={}
A.R.prototype={}
A.a6.prototype={
gu(a){var s=this
return new A.aS(s,s.gt(s),A.r(s).i("aS<a6.E>"))},
gO(a){return this.gt(this)===0},
gP(a){if(this.gt(this)===0)throw A.d(A.cx())
return this.Z(0,0)},
q(a,b){var s,r=this,q=r.gt(r)
for(s=0;s<q;++s){if(J.a3(r.Z(0,s),b))return!0
if(q!==r.gt(r))throw A.d(A.at(r))}return!1},
a7(a,b){var s,r,q=this
A.r(q).i("n(a6.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(!b.$1(q.Z(0,r)))return!1
if(s!==q.gt(q))throw A.d(A.at(q))}return!0},
N(a,b){var s,r,q=this
A.r(q).i("n(a6.E)").a(b)
s=q.gt(q)
for(r=0;r<s;++r){if(b.$1(q.Z(0,r)))return!0
if(s!==q.gt(q))throw A.d(A.at(q))}return!1},
a4(a,b){var s,r,q,p=this,o=p.gt(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.Z(0,0))
if(o!==p.gt(p))throw A.d(A.at(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.Z(0,q))
if(o!==p.gt(p))throw A.d(A.at(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.Z(0,q))
if(o!==p.gt(p))throw A.d(A.at(p))}return r.charCodeAt(0)==0?r:r}},
d5(a,b){return this.ki(0,A.r(this).i("n(a6.E)").a(b))},
cn(a,b,c){var s=A.r(this)
return new A.U(this,s.K(c).i("1(a6.E)").a(b),s.i("@<a6.E>").K(c).i("U<1,2>"))},
bT(a,b){var s=A.r(this).i("a6.E")
if(b)s=A.K(this,s)
else{s=A.K(this,s)
s.$flags=1
s=s}return s},
bS(a){return this.bT(0,!0)},
bz(a){var s,r=this,q=A.wg(A.r(r).i("a6.E"))
for(s=0;s<r.gt(r);++s)q.l(0,r.Z(0,s))
return q}}
A.ia.prototype={
glh(){var s=J.cb(this.a),r=this.c
if(r==null||r>s)return s
return r},
gmd(){var s=J.cb(this.a),r=this.b
if(r>s)return s
return r},
gt(a){var s,r=J.cb(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
Z(a,b){var s=this,r=s.gmd()+b
if(b<0||r>=s.glh())throw A.d(A.p4(b,s.gt(0),s,"index"))
return J.mv(s.a,r)},
bT(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aD(n),l=m.gt(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.y1(0,n):J.y0(0,n)}r=A.cU(s,m.Z(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.Z(n,o+q))
if(m.gt(n)<l)throw A.d(A.at(p))}return r},
bS(a){return this.bT(0,!0)}}
A.aS.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aD(q),o=p.gt(q)
if(r.b!==o)throw A.d(A.at(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.Z(q,s);++r.c
return!0},
$iab:1}
A.cA.prototype={
gu(a){return new A.hL(J.Q(this.a),this.b,A.r(this).i("hL<1,2>"))},
gt(a){return J.cb(this.a)},
gO(a){return J.mw(this.a)},
gP(a){return this.b.$1(J.xF(this.a))},
Z(a,b){return this.b.$1(J.mv(this.a,b))}}
A.dk.prototype={$iR:1}
A.hL.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.U.prototype={
gt(a){return J.cb(this.a)},
Z(a,b){return this.b.$1(J.mv(this.a,b))}}
A.J.prototype={
gu(a){return new A.S(J.Q(this.a),this.b,this.$ti.i("S<1>"))}}
A.S.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()},
$iab:1}
A.hu.prototype={
gu(a){return new A.hv(J.Q(this.a),this.b,B.ei,this.$ti.i("hv<1,2>"))}}
A.hv.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.Q(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0},
$iab:1}
A.hs.prototype={
m(){return!1},
gn(){throw A.d(A.cx())},
$iab:1}
A.cG.prototype={
gu(a){return new A.ij(J.Q(this.a),this.$ti.i("ij<1>"))}}
A.ij.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())},
$iab:1}
A.au.prototype={
st(a,b){throw A.d(A.aY("Cannot change the length of a fixed-length list"))},
l(a,b){A.bW(a).i("au.E").a(b)
throw A.d(A.aY("Cannot add to a fixed-length list"))}}
A.d1.prototype={
k(a,b,c){A.r(this).i("d1.E").a(c)
throw A.d(A.aY("Cannot modify an unmodifiable list"))},
st(a,b){throw A.d(A.aY("Cannot change the length of an unmodifiable list"))},
l(a,b){A.r(this).i("d1.E").a(b)
throw A.d(A.aY("Cannot add to an unmodifiable list"))},
U(a,b){A.r(this).i("l(d1.E,d1.E)?").a(b)
throw A.d(A.aY("Cannot modify an unmodifiable list"))}}
A.fL.prototype={}
A.i2.prototype={
gt(a){return J.cb(this.a)},
Z(a,b){var s=this.a,r=J.aD(s)
return r.Z(s,r.gt(s)-1-b)}}
A.iV.prototype={}
A.aU.prototype={$r:"+(1,2)",$s:1}
A.iG.prototype={$r:"+influence,light(1,2)",$s:2}
A.ai.prototype={$r:"+(1,2,3)",$s:3}
A.aZ.prototype={$r:"+b,g,r(1,2,3)",$s:4}
A.iH.prototype={$r:"+(1,2,3,4)",$s:6}
A.hn.prototype={}
A.fn.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
p(a){return A.wh(this)},
k(a,b,c){var s=A.r(this)
s.c.a(b)
s.y[1].a(c)
A.Bm()},
gJ(){return new A.cn(this.nI(),A.r(this).i("cn<P<1,2>>"))},
nI(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga_(),o=o.gu(o),n=A.r(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gn()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bM(a,b,c,d){var s=A.q(c,d)
this.au(0,new A.nv(this,A.r(this).K(c).K(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iY:1}
A.nv.prototype={
$2(a,b){var s=A.r(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.r(this.a).i("~(1,2)")}}
A.a4.prototype={
gt(a){return this.b.length},
gfS(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
S(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.S(b))return null
return this.b[this.a[b]]},
au(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gfS()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga_(){return new A.eX(this.gfS(),this.$ti.i("eX<1>"))},
gaD(){return new A.eX(this.b,this.$ti.i("eX<2>"))}}
A.eX.prototype={
gt(a){return this.a.length},
gO(a){return 0===this.a.length},
gX(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.eY(s,s.length,this.$ti.i("eY<1>"))}}
A.eY.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iab:1}
A.cP.prototype={
bF(){var s=this,r=s.$map
if(r==null){r=new A.hH(s.$ti.i("hH<1,2>"))
A.Aa(s.a,r)
s.$map=r}return r},
S(a){return this.bF().S(a)},
h(a,b){return this.bF().h(0,b)},
au(a,b){this.$ti.i("~(1,2)").a(b)
this.bF().au(0,b)},
ga_(){var s=this.bF()
return new A.ad(s,A.r(s).i("ad<1>"))},
gaD(){var s=this.bF()
return new A.av(s,A.r(s).i("av<2>"))},
gt(a){return this.bF().a}}
A.ho.prototype={
l(a,b){A.r(this).c.a(b)
A.Bn()}}
A.aI.prototype={
gt(a){return this.b},
gO(a){return this.b===0},
gX(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eY(s,s.length,r.$ti.i("eY<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bz(a){return A.kg(this,this.$ti.c)}}
A.qc.prototype={
$0(){return B.c.aU(1000*this.a.now())},
$S:29}
A.i3.prototype={}
A.rF.prototype={
aX(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hS.prototype={
p(a){return"Null check operator used on a null value"}}
A.kc.prototype={
p(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kZ.prototype={
p(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pQ.prototype={
p(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ht.prototype={}
A.iJ.prototype={
p(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icZ:1}
A.dR.prototype={
p(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Au(r==null?"unknown":r)+"'"},
ga3(a){var s=A.xj(this)
return A.db(s==null?A.bW(this):s)},
$iew:1,
gpz(){return this},
$C:"$1",
$R:1,
$D:null}
A.ju.prototype={$C:"$0",$R:0}
A.jv.prototype={$C:"$2",$R:2}
A.kV.prototype={}
A.kS.prototype={
p(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Au(s)+"'"}}
A.fh.prototype={
a0(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fh))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.mt(this.a)^A.hW(this.$_target))>>>0},
p(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kC(this.a)+"'")}}
A.kJ.prototype={
p(a){return"RuntimeError: "+this.a}}
A.cf.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga_(){return new A.ad(this,A.r(this).i("ad<1>"))},
gaD(){return new A.av(this,A.r(this).i("av<2>"))},
gJ(){return new A.I(this,A.r(this).i("I<1,2>"))},
S(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.o1(a)},
o1(a){var s=this.d
if(s==null)return!1
return this.cg(s[this.cf(a)],a)>=0},
L(a,b){A.r(this).i("Y<1,2>").a(b).au(0,new A.pn(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.o2(b)},
o2(a){var s,r,q=this.d
if(q==null)return null
s=q[this.cf(a)]
r=this.cg(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.r(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fl(s==null?q.b=q.dE():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fl(r==null?q.c=q.dE():r,b,c)}else q.o4(b,c)},
o4(a,b){var s,r,q,p,o=this,n=A.r(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.dE()
r=o.cf(a)
q=s[r]
if(q==null)s[r]=[o.dF(a,b)]
else{p=o.cg(q,a)
if(p>=0)q[p].b=b
else q.push(o.dF(a,b))}},
co(a,b){var s,r,q=this,p=A.r(q)
p.c.a(a)
p.i("2()").a(b)
if(q.S(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a2(a,b){if(typeof b=="number"&&(b&0x3fffffff)===b)return this.kI(this.c,b)
else return this.o3(b)},
o3(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cf(a)
r=n[s]
q=o.cg(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fi(p)
if(r.length===0)delete n[s]
return p.b},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dh()}},
au(a,b){var s,r,q=this
A.r(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.at(q))
s=s.c}},
fl(a,b,c){var s,r=A.r(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.dF(b,c)
else s.b=c},
kI(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fi(s)
delete a[b]
return s.b},
dh(){this.r=this.r+1&1073741823},
dF(a,b){var s=this,r=A.r(s),q=new A.pv(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.dh()
return q},
fi(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.dh()},
cf(a){return J.aA(a)&1073741823},
cg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
p(a){return A.wh(this)},
dE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iwf:1}
A.pn.prototype={
$2(a,b){var s=this.a,r=A.r(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.r(this.a).i("~(1,2)")}}
A.pv.prototype={}
A.ad.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cg(s,s.r,s.e,this.$ti.i("cg<1>"))},
q(a,b){return this.a.S(b)}}
A.cg.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iab:1}
A.av.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ak(s,s.r,s.e,this.$ti.i("ak<1>"))}}
A.ak.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iab:1}
A.I.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cz(s,s.r,s.e,this.$ti.i("cz<1,2>"))}}
A.cz.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iab:1}
A.hH.prototype={
cf(a){return A.G3(a)&1073741823},
cg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1}}
A.vj.prototype={
$1(a){return this.a(a)},
$S:11}
A.vk.prototype={
$2(a,b){return this.a(a,b)},
$S:123}
A.vl.prototype={
$1(a){return this.a(A.v(a))},
$S:30}
A.bS.prototype={
ga3(a){return A.db(this.fO())},
fO(){return A.Gd(this.$r,this.cF())},
p(a){return this.hp(!1)},
hp(a){var s,r,q,p,o,n=this.lm(),m=this.cF(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.yh(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
lm(){var s,r=this.$s
while($.tF.length<=r)B.a.l($.tF,null)
s=$.tF[r]
if(s==null){s=this.l2()
B.a.k($.tF,r,s)}return s},
l2(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.k9(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ah(j,k)}}
A.f1.prototype={
cF(){return[this.a,this.b]},
a0(a,b){if(b==null)return!1
return b instanceof A.f1&&this.$s===b.$s&&J.a3(this.a,b.a)&&J.a3(this.b,b.b)},
gI(a){return A.cC(this.$s,this.a,this.b,B.f,B.f,B.f)}}
A.f2.prototype={
cF(){return[this.a,this.b,this.c]},
a0(a,b){var s=this
if(b==null)return!1
return b instanceof A.f2&&s.$s===b.$s&&J.a3(s.a,b.a)&&J.a3(s.b,b.b)&&J.a3(s.c,b.c)},
gI(a){var s=this
return A.cC(s.$s,s.a,s.b,s.c,B.f,B.f)}}
A.fP.prototype={
cF(){return this.a},
a0(a,b){if(b==null)return!1
return b instanceof A.fP&&this.$s===b.$s&&A.Ds(this.a,b.a)},
gI(a){return A.cC(this.$s,A.Ck(this.a),B.f,B.f,B.f,B.f)}}
A.hF.prototype={
p(a){return"RegExp/"+this.a+"/"+this.b.flags},
glF(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.y5(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
l3(){var s,r=this.a
if(!B.b.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hw(a,b){return new A.lh(this,b,0)},
ll(a,b){var s,r=this.glF()
if(r==null)r=A.f4(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.lC(s)},
$ipY:1,
$iCz:1}
A.lC.prototype={
gfg(){return this.b.index},
ge_(){var s=this.b
return s.index+s[0].length},
$ifA:1,
$ihY:1}
A.lh.prototype={
gu(a){return new A.li(this.a,this.b,this.c)}}
A.li.prototype={
gn(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.ll(l,s)
if(p!=null){m.d=p
o=p.ge_()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.f(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.f(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iab:1}
A.i9.prototype={
ge_(){return this.a+this.c.length},
$ifA:1,
gfg(){return this.a}}
A.lV.prototype={
gu(a){return new A.lW(this.a,this.b,this.c)},
gP(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.i9(r,s)
throw A.d(A.cx())}}
A.lW.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.i9(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iab:1}
A.tc.prototype={
dI(){var s=this.b
if(s===this)throw A.d(new A.eD("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.d(A.a9(""))
return s}}
A.e0.prototype={
ga3(a){return B.ly},
hy(a,b,c){A.zm(a,b,c)
return new Float32Array(a,b,c)},
$iag:1,
$ie0:1}
A.fB.prototype={$ifB:1}
A.hQ.prototype={
gmI(a){if(((a.$flags|0)&2)!==0)return new A.tL(a.buffer)
else return a.buffer},
lx(a,b,c,d){var s=A.aT(b,0,c,d,null)
throw A.d(s)},
fu(a,b,c,d){if(b>>>0!==b||b>c)this.lx(a,b,c,d)}}
A.tL.prototype={
hy(a,b,c){var s=A.Ch(this.a,b,c)
s.$flags=3
return s}}
A.km.prototype={
ga3(a){return B.lz},
$iag:1}
A.b6.prototype={
gt(a){return a.length},
hd(a,b,c,d,e){var s,r,q=a.length
this.fu(a,b,q,"start")
this.fu(a,c,q,"end")
if(b>c)throw A.d(A.aT(b,0,c,null,null))
s=c-b
if(e<0)throw A.d(A.z(e,null))
r=d.length
if(r-e<s)throw A.d(A.m("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ic_:1}
A.hO.prototype={
h(a,b){A.dI(b,a,a.length)
return a[b]},
k(a,b,c){A.bC(c)
a.$flags&2&&A.bK(a)
A.dI(b,a,a.length)
a[b]=c},
dc(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.bK(a,5)
this.hd(a,b,c,d,0)
return},
$iR:1,
$ip:1,
$iC:1}
A.hP.prototype={
k(a,b,c){A.c(c)
a.$flags&2&&A.bK(a)
A.dI(b,a,a.length)
a[b]=c},
jV(a,b,c,d,e){t.uI.a(d)
a.$flags&2&&A.bK(a,5)
this.hd(a,b,c,d,e)
return},
$iR:1,
$ip:1,
$iC:1}
A.hN.prototype={
ga3(a){return B.lA},
aP(a,b,c){return new Float32Array(a.subarray(b,A.Ee(b,c,a.length)))},
$iag:1,
$io4:1}
A.kn.prototype={
ga3(a){return B.lB},
$iag:1}
A.ko.prototype={
ga3(a){return B.lC},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.kp.prototype={
ga3(a){return B.lD},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.kq.prototype={
ga3(a){return B.lE},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.kr.prototype={
ga3(a){return B.lH},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1,
$iww:1}
A.ks.prototype={
ga3(a){return B.lI},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1}
A.eF.prototype={
ga3(a){return B.lJ},
gt(a){return a.length},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1,
$ieF:1}
A.hR.prototype={
ga3(a){return B.lK},
gt(a){return a.length},
h(a,b){A.dI(b,a,a.length)
return a[b]},
$iag:1,
$iid:1}
A.iA.prototype={}
A.iB.prototype={}
A.iC.prototype={}
A.iD.prototype={}
A.cE.prototype={
i(a){return A.iN(v.typeUniverse,this,a)},
K(a){return A.yW(v.typeUniverse,this,a)}}
A.lv.prototype={}
A.lZ.prototype={
p(a){return A.bI(this.a,null)}}
A.lt.prototype={
p(a){return this.a}}
A.fU.prototype={$idB:1}
A.t7.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:35}
A.t6.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:94}
A.t8.prototype={
$0(){this.a.$0()},
$S:12}
A.t9.prototype={
$0(){this.a.$0()},
$S:12}
A.tI.prototype={
kH(a,b){if(self.setTimeout!=null)self.setTimeout(A.hc(new A.tJ(this,b),0),a)
else throw A.d(A.aY("`setTimeout()` not found."))}}
A.tJ.prototype={
$0(){this.b.$0()},
$S:0}
A.lj.prototype={
dP(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.dl(a)
else{s=r.a
if(q.i("bY<1>").b(a))s.ft(a)
else s.cC(a)}},
dQ(a,b){var s=this.a
if(this.b)s.bl(new A.b2(a,b))
else s.cw(new A.b2(a,b))}}
A.tW.prototype={
$1(a){return this.a.$2(0,a)},
$S:17}
A.tX.prototype={
$2(a,b){this.a.$2(1,new A.ht(a,t.l.a(b)))},
$S:59}
A.v9.prototype={
$2(a,b){this.a(A.c(a),b)},
$S:68}
A.cH.prototype={
gn(){var s=this.b
return s==null?this.$ti.c.a(s):s},
m5(a,b){var s,r,q
a=A.c(a)
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
o.d=null}q=o.m5(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yR
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
o.a=A.yR
throw n
return!1}if(0>=p.length)return A.f(p,-1)
o.a=p.pop()
m=1
continue}throw A.d(A.m("sync*"))}return!1},
pB(a){var s,r,q=this
if(a instanceof A.cn){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.Q(a)
return 2}},
$iab:1}
A.cn.prototype={
gu(a){return new A.cH(this.a(),this.$ti.i("cH<1>"))}}
A.b2.prototype={
p(a){return A.w(this.a)},
$ian:1,
gbV(){return this.b}}
A.oc.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.fB(null)}else{s=null
try{s=l.$0()}catch(p){r=A.aj(p)
q=A.cI(p)
l=r
o=q
n=A.wX(l,o)
l=new A.b2(l,o)
m.b.bl(l)
return}m.b.fB(s)}},
$S:0}
A.of.prototype={
$2(a,b){var s,r,q=this
A.f4(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bl(new A.b2(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bl(new A.b2(r,s))}},
$S:70}
A.oe.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bL(r,k.b,a)
if(J.a3(s,0)){q=A.e([],j.i("t<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.u)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.hh(q,l)}k.c.cC(q)}}else if(J.a3(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bl(new A.b2(q,o))}},
$S(){return this.d.i("aB(0)")}}
A.ln.prototype={
dQ(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.cw(A.EP(a,b))},
hB(a){return this.dQ(a,null)}}
A.il.prototype={
dP(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.m("Future already completed"))
s.dl(r.i("1/").a(a))}}
A.eU.prototype={
og(a){if((this.c&15)!==6)return!0
return this.b.b.eU(t.bl.a(this.d),a.a,t.y,t.K)},
nX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.pk(q,m,a.b,o,n,t.l)
else p=l.eU(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.aj(s))){if((r.c&1)!==0)throw A.d(A.z("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.z("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ay.prototype={
eV(a,b,c){var s,r,q=this.$ti
q.K(c).i("1/(2)").a(a)
s=$.aq
if(s===B.x){if(!t.nW.b(b)&&!t.h_.b(b))throw A.d(A.ap(b,"onError",u.c))}else{c.i("@<0/>").K(q.c).i("1(2)").a(a)
b=A.Fn(b,s)}r=new A.ay(s,c.i("ay<0>"))
this.dj(new A.eU(r,3,a,b,q.i("@<1>").K(c).i("eU<1,2>")))
return r},
hn(a,b,c){var s,r=this.$ti
r.K(c).i("1/(2)").a(a)
s=new A.ay($.aq,c.i("ay<0>"))
this.dj(new A.eU(s,19,a,b,r.i("@<1>").K(c).i("eU<1,2>")))
return s},
m8(a){this.a=this.a&1|16
this.c=a},
cB(a){this.a=a.a&30|this.a&1
this.c=a.c},
dj(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.dj(a)
return}r.cB(s)}A.mn(null,null,r.b,t.O.a(new A.tf(r,a)))}},
h1(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.h1(a)
return}m.cB(n)}l.a=m.cK(a)
A.mn(null,null,m.b,t.O.a(new A.tk(l,m)))}},
bY(){var s=t.F.a(this.c)
this.c=null
return this.cK(s)},
cK(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fB(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bY<1>").b(a))A.ti(a,r,!0)
else{s=r.bY()
q.c.a(a)
r.a=8
r.c=a
A.eV(r,s)}},
cC(a){var s,r=this
r.$ti.c.a(a)
s=r.bY()
r.a=8
r.c=a
A.eV(r,s)},
l1(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bY()
q.cB(a)
A.eV(q,r)},
bl(a){var s=this.bY()
this.m8(a)
A.eV(this,s)},
dl(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bY<1>").b(a)){this.ft(a)
return}this.kO(a)},
kO(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.mn(null,null,s.b,t.O.a(new A.th(s,a)))},
ft(a){A.ti(this.$ti.i("bY<1>").a(a),this,!1)
return},
cw(a){this.a^=2
A.mn(null,null,this.b,t.O.a(new A.tg(this,a)))},
$ibY:1}
A.tf.prototype={
$0(){A.eV(this.a,this.b)},
$S:0}
A.tk.prototype={
$0(){A.eV(this.b,this.a.a)},
$S:0}
A.tj.prototype={
$0(){A.ti(this.a.a,this.b,!0)},
$S:0}
A.th.prototype={
$0(){this.a.cC(this.b)},
$S:0}
A.tg.prototype={
$0(){this.a.bl(this.b)},
$S:0}
A.tn.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pj(t.pF.a(q.d),t.z)}catch(p){s=A.aj(p)
r=A.cI(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.mN(q)
n=k.a
n.c=new A.b2(q,o)
q=n}q.b=!0
return}if(j instanceof A.ay&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ay){m=k.b.a
l=new A.ay(m.b,m.$ti)
j.eV(new A.to(l,m),new A.tp(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.to.prototype={
$1(a){this.a.l1(this.b)},
$S:35}
A.tp.prototype={
$2(a,b){A.f4(a)
t.l.a(b)
this.a.bl(new A.b2(a,b))},
$S:71}
A.tm.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.eU(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.aj(l)
r=A.cI(l)
q=s
p=r
if(p==null)p=A.mN(q)
o=this.a
o.c=new A.b2(q,p)
o.b=!0}},
$S:0}
A.tl.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.og(s)&&p.a.e!=null){p.c=p.a.nX(s)
p.b=!1}}catch(o){r=A.aj(o)
q=A.cI(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.mN(p)
m=l.b
m.c=new A.b2(p,n)
p=m}p.b=!0}},
$S:0}
A.lk.prototype={}
A.lU.prototype={}
A.iU.prototype={$iyJ:1}
A.lM.prototype={
pl(a){var s,r,q
t.O.a(a)
try{if(B.x===$.aq){a.$0()
return}A.zU(null,null,this,a,t.H)}catch(q){s=A.aj(q)
r=A.cI(q)
A.x6(A.f4(s),t.l.a(r))}},
hA(a){return new A.tG(this,t.O.a(a))},
pj(a,b){b.i("0()").a(a)
if($.aq===B.x)return a.$0()
return A.zU(null,null,this,a,b)},
eU(a,b,c,d){c.i("@<0>").K(d).i("1(2)").a(a)
d.a(b)
if($.aq===B.x)return a.$1(b)
return A.Ft(null,null,this,a,b,c,d)},
pk(a,b,c,d,e,f){d.i("@<0>").K(e).K(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aq===B.x)return a.$2(b,c)
return A.Fs(null,null,this,a,b,c,d,e,f)},
jp(a,b,c,d){return b.i("@<0>").K(c).K(d).i("1(2,3)").a(a)}}
A.tG.prototype={
$0(){return this.a.pl(this.b)},
$S:0}
A.uZ.prototype={
$0(){A.BM(this.a,this.b)},
$S:0}
A.it.prototype={
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
ga_(){return new A.eW(this,this.$ti.i("eW<1>"))},
gaD(){var s=this.$ti
return A.kh(new A.eW(this,s.i("eW<1>")),new A.tr(this),s.c,s.y[1])},
S(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.l6(a)},
l6(a){var s=this.d
if(s==null)return!1
return this.bm(this.fN(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.yL(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.yL(q,b)
return r}else return this.lp(b)},
lp(a){var s,r,q=this.d
if(q==null)return null
s=this.fN(q,a)
r=this.bm(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fz(s==null?m.b=A.wA():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fz(r==null?m.c=A.wA():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.wA()
p=A.mt(b)&1073741823
o=q[p]
if(o==null){A.wB(q,p,[b,c]);++m.a
m.e=null}else{n=m.bm(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
au(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.fA()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.at(m))}},
fA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.cU(i.a,null,!1,t.z)
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
fz(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.wB(a,b,c)},
fN(a,b){return a[A.mt(b)&1073741823]}}
A.tr.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.iv.prototype={
bm(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.eW.prototype={
gt(a){return this.a.a},
gO(a){return this.a.a===0},
gX(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.iu(s,s.fA(),this.$ti.i("iu<1>"))},
q(a,b){return this.a.S(b)}}
A.iu.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.at(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iab:1}
A.cm.prototype={
fX(){return new A.cm(A.r(this).i("cm<1>"))},
gu(a){var s=this,r=new A.eZ(s,s.r,A.r(s).i("eZ<1>"))
r.c=s.e
return r},
gt(a){return this.a},
gO(a){return this.a===0},
gX(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.l5(b)},
l5(a){var s=this.d
if(s==null)return!1
return this.bm(s[this.dt(a)],a)>=0},
gP(a){var s=this.e
if(s==null)throw A.d(A.m("No elements"))
return A.r(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.r(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fw(s==null?q.b=A.wC():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fw(r==null?q.c=A.wC():r,b)}else return q.kJ(b)},
kJ(a){var s,r,q,p=this
A.r(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.wC()
r=p.dt(a)
q=s[r]
if(q==null)s[r]=[p.dr(a)]
else{if(p.bm(q,a)>=0)return!1
q.push(p.dr(a))}return!0},
a2(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.h2(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.h2(s.c,b)
else return s.m2(b)},
m2(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.dt(a)
r=n[s]
q=o.bm(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hs(p)
return!0},
ln(a,b){var s,r,q,p,o,n=this,m=A.r(n)
m.i("n(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.d(A.at(n))
if(!0===o)n.a2(0,r)}},
H(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.dD()}},
fw(a,b){A.r(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.dr(b)
return!0},
h2(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hs(s)
delete a[b]
return!0},
dD(){this.r=this.r+1&1073741823},
dr(a){var s,r=this,q=new A.lB(A.r(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dD()
return q},
hs(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dD()},
dt(a){return J.aA(a)&1073741823},
bm(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a3(a[r].a,b))return r
return-1},
$iyb:1}
A.lB.prototype={}
A.eZ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.at(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iab:1}
A.pw.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:84}
A.W.prototype={
gu(a){return new A.aS(a,this.gt(a),A.bW(a).i("aS<W.E>"))},
Z(a,b){return this.h(a,b)},
gO(a){return this.gt(a)===0},
gX(a){return!this.gO(a)},
gP(a){if(this.gt(a)===0)throw A.d(A.cx())
return this.h(a,0)},
q(a,b){var s,r=this.gt(a)
for(s=0;s<r;++s){if(J.a3(this.h(a,s),b))return!0
if(r!==this.gt(a))throw A.d(A.at(a))}return!1},
a7(a,b){var s,r
A.bW(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gt(a))throw A.d(A.at(a))}return!0},
N(a,b){var s,r
A.bW(a).i("n(W.E)").a(b)
s=this.gt(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gt(a))throw A.d(A.at(a))}return!1},
a4(a,b){var s
if(this.gt(a)===0)return""
s=A.wu("",a,b)
return s.charCodeAt(0)==0?s:s},
eZ(a,b){return new A.cG(a,b.i("cG<0>"))},
cn(a,b,c){var s=A.bW(a)
return new A.U(a,s.K(c).i("1(W.E)").a(b),s.i("@<W.E>").K(c).i("U<1,2>"))},
l(a,b){var s
A.bW(a).i("W.E").a(b)
s=this.gt(a)
this.st(a,s+1)
this.k(a,s,b)},
cP(a,b){return new A.aR(a,A.bW(a).i("@<W.E>").K(b).i("aR<1,2>"))},
U(a,b){var s,r=A.bW(a)
r.i("l(W.E,W.E)?").a(b)
s=b==null?A.G2():b
A.kO(a,0,this.gt(a)-1,s,r.i("W.E"))},
nQ(a,b,c,d){var s
A.bW(a).i("W.E?").a(d)
A.hX(b,c,this.gt(a))
for(s=b;s<c;++s)this.k(a,s,d)},
p(a){return A.wc(a,"[","]")},
$iR:1,
$ip:1,
$iC:1}
A.aa.prototype={
au(a,b){var s,r,q,p=A.r(this)
p.i("~(aa.K,aa.V)").a(b)
for(s=this.ga_(),s=s.gu(s),p=p.i("aa.V");s.m();){r=s.gn()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gJ(){return this.ga_().cn(0,new A.py(this),A.r(this).i("P<aa.K,aa.V>"))},
bM(a,b,c,d){var s,r,q,p,o,n=A.r(this)
n.K(c).K(d).i("P<1,2>(aa.K,aa.V)").a(b)
s=A.q(c,d)
for(r=this.ga_(),r=r.gu(r),n=n.i("aa.V");r.m();){q=r.gn()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
mt(a){var s,r
for(s=J.Q(A.r(this).i("p<P<aa.K,aa.V>>").a(a));s.m();){r=s.gn()
this.k(0,r.a,r.b)}},
S(a){return this.ga_().q(0,a)},
gt(a){var s=this.ga_()
return s.gt(s)},
gO(a){var s=this.ga_()
return s.gO(s)},
gX(a){var s=this.ga_()
return s.gX(s)},
gaD(){return new A.ix(this,A.r(this).i("ix<aa.K,aa.V>"))},
p(a){return A.wh(this)},
$iY:1}
A.py.prototype={
$1(a){var s=this.a,r=A.r(s)
r.i("aa.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("aa.V").a(s)
return new A.P(a,s,r.i("P<aa.K,aa.V>"))},
$S(){return A.r(this.a).i("P<aa.K,aa.V>(aa.K)")}}
A.pz.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:26}
A.ix.prototype={
gt(a){var s=this.a
return s.gt(s)},
gO(a){var s=this.a
return s.gO(s)},
gX(a){var s=this.a
return s.gX(s)},
gP(a){var s=this.a,r=s.ga_()
r=s.h(0,r.gP(r))
return r==null?this.$ti.y[1].a(r):r},
gu(a){var s=this.a,r=s.ga_()
return new A.iy(r.gu(r),s,this.$ti.i("iy<1,2>"))}}
A.iy.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iab:1}
A.iO.prototype={
k(a,b,c){var s=A.r(this)
s.c.a(b)
s.y[1].a(c)
throw A.d(A.aY("Cannot modify unmodifiable map"))}}
A.fz.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.r(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
S(a){return this.a.S(a)},
au(a,b){this.a.au(0,A.r(this).i("~(1,2)").a(b))},
gO(a){var s=this.a
return s.gO(s)},
gX(a){var s=this.a
return s.gX(s)},
gt(a){var s=this.a
return s.gt(s)},
ga_(){return this.a.ga_()},
p(a){return this.a.p(0)},
gaD(){return this.a.gaD()},
gJ(){return this.a.gJ()},
bM(a,b,c,d){return this.a.bM(0,A.r(this).K(c).K(d).i("P<1,2>(3,4)").a(b),c,d)},
$iY:1}
A.e8.prototype={}
A.dx.prototype={
gO(a){return this.gt(this)===0},
gX(a){return this.gt(this)!==0},
L(a,b){var s
for(s=J.Q(A.r(this).i("p<1>").a(b));s.m();)this.l(0,s.gn())},
dW(a){var s,r,q=this.bz(0)
for(s=this.gu(this);s.m();){r=s.gn()
if(a.q(0,r))q.a2(0,r)}return q},
p(a){return A.wc(this,"{","}")},
a7(a,b){var s
A.r(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a4(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.de(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.w(q.gn())
while(q.m())}else{r=s
do r=r+b+A.w(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.r(this).i("n(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
gP(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cx())
return s.gn()},
Z(a,b){var s,r
A.kF(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.p4(b,b-r,this,"index"))},
$iR:1,
$ip:1,
$ie4:1}
A.iI.prototype={
dW(a){var s,r,q,p=this,o=p.fX()
for(s=A.iw(p,p.r,A.r(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bz(a){var s=this.fX()
s.L(0,this)
return s}}
A.m_.prototype={
l(a,b){this.$ti.c.a(b)
return A.DE()}}
A.fM.prototype={
q(a,b){return this.a.q(0,b)},
gt(a){return this.a.a},
gu(a){var s=this.a
return A.iw(s,s.r,A.r(s).c)},
bz(a){return this.a.bz(0)}}
A.fV.prototype={}
A.iP.prototype={}
A.lz.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lX(b):s}},
gt(a){return this.b==null?this.c.a:this.bC().length},
gO(a){return this.gt(0)===0},
gX(a){return this.gt(0)>0},
ga_(){if(this.b==null){var s=this.c
return new A.ad(s,A.r(s).i("ad<1>"))}return new A.lA(this)},
gaD(){var s,r=this
if(r.b==null){s=r.c
return new A.av(s,A.r(s).i("av<2>"))}return A.kh(r.bC(),new A.tt(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.v(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.S(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.mj().k(0,b,c)},
S(a){if(this.b==null)return this.c.S(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
au(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.au(0,b)
s=o.bC()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ul(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.at(o))}},
bC(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
mj(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.q(t.N,t.z)
r=n.bC()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.H(r)
n.a=n.b=null
return n.c=s},
lX(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ul(this.a[a])
return this.b[a]=s}}
A.tt.prototype={
$1(a){return this.a.h(0,A.v(a))},
$S:30}
A.lA.prototype={
gt(a){return this.a.gt(0)},
Z(a,b){var s=this.a
if(s.b==null)s=s.ga_().Z(0,b)
else{s=s.bC()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.ga_()
s=s.gu(s)}else{s=s.bC()
s=new J.eo(s,s.length,A.G(s).i("eo<1>"))}return s},
q(a,b){return this.a.S(b)}}
A.tO.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:27}
A.tN.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:27}
A.jo.prototype={
oj(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.hX(a4,a5,a2)
s=$.AI()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.f(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.f(a3,k)
h=A.vi(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.f(a3,g)
f=A.vi(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bl("")
g=o}else g=o
g.a+=B.b.E(a3,p,q)
c=A.ax(j)
g.a+=c
p=k
continue}}throw A.d(A.a7("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.E(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.xH(a3,m,a5,n,l,r)
else{b=B.d.M(r-1,4)+1
if(b===1)throw A.d(A.a7(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.bR(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.xH(a3,m,a5,n,l,a)
else{b=B.d.M(a,4)
if(b===1)throw A.d(A.a7(a1,a3,a5))
if(b>1)a3=B.b.bR(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ng.prototype={}
A.es.prototype={}
A.jA.prototype={}
A.jK.prototype={}
A.hI.prototype={
p(a){var s=A.jL(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ke.prototype={
p(a){return"Cyclic error in JSON stringify"}}
A.kd.prototype={
aG(a,b){var s=A.Ff(a,this.gns().a)
return s},
ak(a,b){var s=A.Dk(a,this.gnG().b,null)
return s},
gnG(){return B.hT},
gns(){return B.hS}}
A.pp.prototype={}
A.po.prototype={}
A.tv.prototype={
jB(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.E(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.E(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.E(a,r,q)
r=q+1
o=A.ax(92)
s.a+=o
o=A.ax(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.E(a,r,m)},
dn(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.ke(a,null))}B.a.l(s,a)},
d6(a){var s,r,q,p,o=this
if(o.jA(a))return
o.dn(a)
try{s=o.b.$1(a)
if(!o.jA(s)){q=A.y7(a,null,o.gh0())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.aj(p)
q=A.y7(a,r,o.gh0())
throw A.d(q)}},
jA(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.p(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.jB(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dn(a)
q.px(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dn(a)
r=q.py(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
px(a){var s,r,q=this.c
q.a+="["
s=J.aD(a)
if(s.gX(a)){this.d6(s.h(a,0))
for(r=1;r<s.gt(a);++r){q.a+=","
this.d6(s.h(a,r))}}q.a+="]"},
py(a){var s,r,q,p,o,n,m=this,l={}
if(a.gO(a)){m.c.a+="{}"
return!0}s=a.gt(a)*2
r=A.cU(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.au(0,new A.tw(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.jB(A.v(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.d6(r[n])}p.a+="}"
return!0}}
A.tw.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:26}
A.tu.prototype={
gh0(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.l2.prototype={}
A.rK.prototype={
mZ(a){return new A.tM(this.a).l7(t.J.a(a),0,null,!0)}}
A.tM.prototype={
l7(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.hX(b,c,J.cb(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.DV(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.DU(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.du(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.DW(o)
l.b=0
throw A.d(A.a7(m,a,p+l.c))}return n},
du(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.V(b+c,2)
r=q.du(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.du(a,s,c,d)}return q.nr(a,b,c,d)},
nr(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bl(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.f(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.f(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.f(i,p)
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
p=A.ax(a[l])
e.a+=p}else{p=A.yt(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ax(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.et.prototype={
a0(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.et)if(this.a===b.a)s=this.b===b.b
return s},
gI(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)},
G(a,b){var s
t.f7.a(b)
s=B.d.G(this.a,b.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
p(a){var s=this,r=A.Br(A.Cw(s)),q=A.jC(A.Cu(s)),p=A.jC(A.Cq(s)),o=A.jC(A.Cr(s)),n=A.jC(A.Ct(s)),m=A.jC(A.Cv(s)),l=A.xO(A.Cs(s)),k=s.b,j=k===0?"":A.xO(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ib4:1}
A.dT.prototype={
a0(a,b){if(b==null)return!1
return b instanceof A.dT&&this.a===b.a},
gI(a){return B.d.gI(this.a)},
G(a,b){return B.d.G(this.a,t.yb.a(b).a)},
p(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.V(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.V(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.jg(B.d.p(o%1e6),6,"0")},
$ib4:1}
A.ls.prototype={
p(a){return this.v()},
$iE:1}
A.an.prototype={
gbV(){return A.Cp(this)}}
A.jk.prototype={
p(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jL(s)
return"Assertion failed"}}
A.dB.prototype={}
A.cs.prototype={
gdz(){return"Invalid argument"+(!this.a?"(s)":"")},
gdw(){return""},
p(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gdz()+q+o
if(!s.a)return n
return n+s.gdw()+": "+A.jL(s.geB())},
geB(){return this.b}}
A.fE.prototype={
geB(){return A.wK(this.b)},
gdz(){return"RangeError"},
gdw(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.k4.prototype={
geB(){return A.c(this.b)},
gdz(){return"RangeError"},
gdw(){if(A.c(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gt(a){return this.f}}
A.ie.prototype={
p(a){return"Unsupported operation: "+this.a}}
A.kY.prototype={
p(a){return"UnimplementedError: "+this.a}}
A.fJ.prototype={
p(a){return"Bad state: "+this.a}}
A.jx.prototype={
p(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jL(s)+"."}}
A.ku.prototype={
p(a){return"Out of Memory"},
gbV(){return null},
$ian:1}
A.i7.prototype={
p(a){return"Stack Overflow"},
gbV(){return null},
$ian:1}
A.td.prototype={
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
k=""}return g+l+B.b.E(e,i,j)+k+"\n"+B.b.a5(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.p.prototype={
cP(a,b){return A.Bg(this,A.r(this).i("p.E"),b)},
cn(a,b,c){var s=A.r(this)
return A.kh(this,s.K(c).i("1(p.E)").a(b),s.i("p.E"),c)},
d5(a,b){var s=A.r(this)
return new A.J(this,s.i("n(p.E)").a(b),s.i("J<p.E>"))},
eZ(a,b){return new A.cG(this,b.i("cG<0>"))},
q(a,b){var s
for(s=this.gu(this);s.m();)if(J.a3(s.gn(),b))return!0
return!1},
bv(a,b,c,d){var s,r
d.a(b)
A.r(this).K(d).i("1(1,p.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gn())
return r},
a7(a,b){var s
A.r(this).i("n(p.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gn()))return!1
return!0},
a4(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.de(q.gn())
if(!q.m())return s
r=b.gO(b)
if(r){r=s
do r+=J.de(q.gn())
while(q.m())}else{r=s
do r=r+A.w(b)+J.de(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
N(a,b){var s
A.r(this).i("n(p.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gn()))return!0
return!1},
bT(a,b){var s=A.K(this,A.r(this).i("p.E"))
return s},
bS(a){return this.bT(0,!0)},
gt(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gO(a){return!this.gu(this).m()},
gX(a){return!this.gO(this)},
gP(a){var s=this.gu(this)
if(!s.m())throw A.d(A.cx())
return s.gn()},
gaO(a){var s,r=this.gu(this)
if(!r.m())throw A.d(A.cx())
s=r.gn()
if(r.m())throw A.d(A.y_())
return s},
aT(a,b,c){var s,r=A.r(this)
r.i("n(p.E)").a(b)
r.i("p.E()?").a(c)
for(r=this.gu(this);r.m();){s=r.gn()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.d(A.cx())},
am(a,b){return this.aT(0,b,null)},
Z(a,b){var s,r
A.kF(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.d(A.p4(b,b-r,this,"index"))},
p(a){return A.C5(this,"(",")")}}
A.P.prototype={
p(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.aB.prototype={
gI(a){return A.H.prototype.gI.call(this,0)},
p(a){return"null"}}
A.H.prototype={$iH:1,
a0(a,b){return this===b},
gI(a){return A.hW(this)},
p(a){return"Instance of '"+A.kC(this)+"'"},
ga3(a){return A.mr(this)},
toString(){return this.p(this)}}
A.lX.prototype={
p(a){return""},
$icZ:1}
A.rr.prototype={
gnE(){var s,r=this.b
if(r==null)r=$.qe.$0()
s=r-this.a
if($.xv()===1e6)return s
return s*1000}}
A.bl.prototype={
gt(a){return this.a.length},
p(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iCN:1}
A.rJ.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.v(b)
s=B.b.bK(b,"=")
if(s===-1){if(b!=="")a.k(0,A.wH(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.E(b,0,s)
q=B.b.aZ(b,s+1)
p=this.a
a.k(0,A.wH(r,0,r.length,p,!0),A.wH(q,0,q.length,p,!0))}return a},
$S:130}
A.rI.prototype={
$2(a,b){throw A.d(A.a7("Illegal IPv6 address, "+a,this.a,b))},
$S:151}
A.iQ.prototype={
ghl(){var s,r,q,p,o=this,n=o.w
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
gI(a){var s,r=this,q=r.y
if(q===$){s=B.b.gI(r.ghl())
r.y!==$&&A.At()
r.y=s
q=s}return q},
gaK(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.yB(s==null?"":s)
r.z!==$&&A.At()
q=r.z=new A.e8(s,t.hL)}return q},
gjx(){return this.b},
geA(){var s=this.c
if(s==null)return""
if(B.b.T(s,"[")&&!B.b.ad(s,"v",1))return B.b.E(s,1,s.length-1)
return s},
geJ(){var s=this.d
return s==null?A.yX(this.a):s},
geN(){var s=this.f
return s==null?"":s},
gj_(){var s=this.r
return s==null?"":s},
gj0(){return this.c!=null},
gj2(){return this.f!=null},
gj1(){return this.r!=null},
p(a){return this.ghl()},
a0(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gf4())if(p.c!=null===b.gj0())if(p.b===b.gjx())if(p.geA()===b.geA())if(p.geJ()===b.geJ())if(p.e===b.gji()){r=p.f
q=r==null
if(!q===b.gj2()){if(q)r=""
if(r===b.geN()){r=p.r
q=r==null
if(!q===b.gj1()){s=q?"":r
s=s===b.gj_()}}}}return s},
$il0:1,
gf4(){return this.a},
gji(){return this.e}}
A.rH.prototype={
gjw(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.f(m,0)
s=o.a
m=m[0]+1
r=B.b.cZ(s,"?",m)
q=s.length
if(r>=0){p=A.iR(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lo("data","",n,n,A.iR(s,m,q,128,!1,!1),p,n)}return m},
p(a){var s,r=this.b
if(0>=r.length)return A.f(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lQ.prototype={
gj0(){return this.c>0},
gj2(){return this.f<this.r},
gj1(){return this.r<this.a.length},
gf4(){var s=this.w
return s==null?this.w=this.l4():s},
l4(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.T(r.a,"http"))return"http"
if(q===5&&B.b.T(r.a,"https"))return"https"
if(s&&B.b.T(r.a,"file"))return"file"
if(q===7&&B.b.T(r.a,"package"))return"package"
return B.b.E(r.a,0,q)},
gjx(){var s=this.c,r=this.b+3
return s>r?B.b.E(this.a,r,s-1):""},
geA(){var s=this.c
return s>0?B.b.E(this.a,s,this.d):""},
geJ(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Ai(B.b.E(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.T(r.a,"http"))return 80
if(s===5&&B.b.T(r.a,"https"))return 443
return 0},
gji(){return B.b.E(this.a,this.e,this.f)},
geN(){var s=this.f,r=this.r
return s<r?B.b.E(this.a,s+1,r):""},
gj_(){var s=this.r,r=this.a
return s<r.length?B.b.aZ(r,s+1):""},
gaK(){if(this.f>=this.r)return B.d_
return new A.e8(A.yB(this.geN()),t.hL)},
gI(a){var s=this.x
return s==null?this.x=B.b.gI(this.a):s},
a0(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.p(0)},
p(a){return this.a},
$il0:1}
A.lo.prototype={}
A.pP.prototype={
p(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.vR.prototype={
$1(a){return this.a.dP(this.b.i("0/?").a(a))},
$S:17}
A.vS.prototype={
$1(a){if(a==null)return this.a.hB(new A.pP(a===undefined))
return this.a.hB(a)},
$S:17}
A.vd.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.zE(a))return a
s=this.a
a.toString
if(s.S(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aT(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.ek(!0,"isUtc",t.y)
return new A.et(r,0,!0)}if(a instanceof RegExp)throw A.d(A.z("structured clone of RegExp",null))
if(a instanceof Promise)return A.b1(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.q(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.ca(n),p=s.gu(n);p.m();)m.push(A.dc(p.gn()))
for(l=0;l<s.gt(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.f(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.c(a.length)
for(s=J.aD(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:57}
A.ly.prototype={
aN(a){if(a<=0||a>4294967296)throw A.d(A.yj(u.w+a))
return Math.random()*a>>>0},
by(){return Math.random()},
$iwp:1}
A.f0.prototype={
cu(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.V(a-s,k)
r=a>>>0
a=B.d.V(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.V(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.V(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.V(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.V(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.V(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bb()
l.bb()
l.bb()
l.bb()},
bb(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.V(o-n+(q-p)+(m-r),4294967296)>>>0},
aN(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.yj(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bb()
return(p.a&s)>>>0}do{p.bb()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
by(){var s,r=this
r.bb()
s=r.a
r.bb()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iwp:1}
A.qh.prototype={
C(){var s,r=this
if(B.a.N(A.e([r.d,r.e,r.f,r.r,r.w],t.t),new A.qi()))throw A.d(B.fU)
s=r.y
if(!isFinite(s)||s<1)throw A.d(B.fd)}}
A.qi.prototype={
$1(a){return A.c(a)<=0},
$S:28}
A.eI.prototype={
v(){return"QualityProfileKind."+this.b}}
A.eH.prototype={}
A.nt.prototype={}
A.nu.prototype={}
A.kA.prototype={
C(){var s,r,q,p,o,n,m=this,l=null
for(s=m.r,r=m.w,q=A.N(["exposure",m.a,"bloomStrength",m.b,"ssaoStrength",m.c,"depthOfFieldStrength",0,"vignette",m.e,"grain",m.f,"rainIntensity",s,"rainWindowVisibility",r,"ditherStrength",0,"colorGradeStrength",m.y,"affineWarpStrength",m.z,"vertexSnapGrid",m.Q,"vhsChromaWeight",m.at,"vhsTrackingWeight",m.ax,"vhsNoiseWeight",m.ay,"vhsHeadSwitchWeight",m.ch,"vhsDropoutWeight",m.CW,"vhsGhostWeight",m.cx],t.N,t.i),q=new A.I(q,A.r(q).i("I<1,2>")).gu(0);q.m();){p=q.d
o=p.a
n=p.b
if(!isFinite(n)||n<0)throw A.d(A.z("PostProcessState."+o+" must be >= 0: "+A.w(n),l))}q=m.as
if(q<1||q>8)throw A.d(A.z("PostProcessState.quantizationBits must be in [1, 8]: "+q,l))
if(s>1)throw A.d(A.z("PostProcessState.rainIntensity must be in [0, 1]: "+A.w(s),l))
if(r>1)throw A.d(A.z("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.w(r),l))}}
A.fk.prototype={}
A.jR.prototype={
C(){var s,r,q,p,o,n,m,l,k=this,j=null
if(!k.a.gan(0)||!k.b.gan(0)||!k.r.gan(0))throw A.d(A.z("FrameEnvironment colors must be finite",j))
s=k.c
if(isFinite(s)){r=k.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.d(A.z("FrameEnvironment requires fogEnd >= fogStart, got "+A.w(s)+"/"+A.w(k.d),j))
s=k.w
if(!isFinite(s)||s<0)throw A.d(A.z("FrameEnvironment.ambientIntensity must be >= 0: "+A.w(s),j))
s=k.x
if(s!=null){r=s.a
if(!r.gan(0)||r.gck()<1e-12)A.k(A.z("DirectionalLight.direction must be finite and nonzero: "+r.p(0),j))
s=s.c
if(!isFinite(s)||s<0)A.k(A.z("DirectionalLight.intensity must be >= 0: "+A.w(s),j))}for(s=k.y,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.z("PointLight.position must be finite: "+o.p(0),j))
o=p.d
if(!isFinite(o)||o<0)A.k(A.z("PointLight.intensity must be >= 0: "+A.w(o),j))
o=p.e
if(!isFinite(o)||o<=0)A.k(A.z("PointLight.radius must be > 0: "+A.w(o),j))}for(s=k.z,r=s.length,q=0;q<r;++q){p=s[q]
o=p.b
if(!(isFinite(o.a)&&isFinite(o.b)&&isFinite(o.c)))A.k(A.z("SpotLight.position must be finite: "+o.p(0),j))
o=p.c
n=o.a
if(isFinite(n)&&isFinite(o.b)&&isFinite(o.c)){m=o.b
l=o.c
l=n*n+m*m+l*l<1e-12
n=l}else n=!0
if(n)A.k(A.z("SpotLight.direction must be finite and nonzero: "+o.p(0),j))
if(p.w<=p.r)A.k(A.z("SpotLight.outerConeRadians must exceed innerConeRadians",j))}}}
A.o7.prototype={}
A.dw.prototype={
a0(a,b){if(b==null)return!1
return J.fa(b)===A.mr(this)&&b instanceof A.dw&&this.a===b.a&&this.b===b.b},
gI(a){return A.cC(A.mr(this),this.a,this.b,B.f,B.f,B.f)}}
A.br.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bm.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cB.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.kv.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cv.prototype={
p(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.ez.prototype={
v(){return"HandleRejection."+this.b}}
A.k0.prototype={
p(a){return"HandleException("+this.a.b+", "+this.b.p(0)+")"}}
A.cy.prototype={
gan(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
a0(a,b){if(b==null)return!1
return b instanceof A.cy&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"LinearColor("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.nP.prototype={}
A.kz.prototype={}
A.by.prototype={}
A.vT.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.c.G(b.a,a.a)
return s===0?B.d.G(a.b.a,b.b.a):s},
$S:62}
A.jj.prototype={
v(){return"AlphaMode."+this.b}}
A.eE.prototype={
C(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.d(A.z("MaterialDefinition.key must not be empty",k))
if(!isFinite(0))throw A.d(A.z("MaterialDefinition.emissiveStrength must be >= 0: 0",k))
if(!isFinite(1))throw A.d(A.z("MaterialDefinition.normalStrength must be >= 0: 1",k))
A.wl("roughness",l.z)
A.wl("metallic",0)
A.wl("occlusionStrength",1)
for(s=l.ay,r=l.ch,q=[new A.aU("uvScaleU",s),new A.aU("uvScaleV",r),new A.aU("uvOffsetU",0),new A.aU("uvOffsetV",0),new A.aU("tintR",l.c),new A.aU("tintG",l.d),new A.aU("tintB",l.e)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.d(A.z("MaterialDefinition."+n+" must be finite: "+A.w(m),k))}if(s===0||r===0)throw A.d(A.z("MaterialDefinition uv scale must not be zero",k))
if(!isFinite(0.5))throw A.d(A.z("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",k))}}
A.d3.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bz.prototype={}
A.rL.prototype={
C(){var s,r,q,p,o='VertexLayoutDescriptor "compatibility14": attribute '
for(s=0;s<6;++s){r=B.U[s]
q=r.c
if(q<=0)throw A.d(A.z(o+r.a.p(0)+" must have a positive floatCount",null))
p=r.b
q=p+q
if(q>14)throw A.d(A.z(o+r.a.p(0)+" range ["+p+", "+q+") exceeds stride 14",null))}q=t.rd.a(new A.rM())
for(p=B.a.gu(B.U),q=new A.S(p,q,t.fh);q.m();)if(p.gn().c!==4)throw A.d(A.z('VertexLayoutDescriptor "compatibility14": tangent4 must contain 4 floats',null))}}
A.rM.prototype={
$1(a){return t.qY.a(a).a===B.dK},
$S:18}
A.ch.prototype={
C(){var s,r,q,p,o,n=this
n.a.C()
s=n.b.length
if(B.d.M(s,14)!==0)throw A.d(A.z("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
n.mm()
r=n.c
if(r!=null){q=s/14|0
for(s=A.Cd(r),r=s.length,p=0;p<r;++p){o=s[p]
if(o>=q)throw A.d(A.z("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.gan(0)&&s.b.gan(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.d(A.z("MeshData.localBounds must be a valid AABB",null))},
mm(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=t.rd,a3=t.r4,a4=new A.J(B.U,a2.a(new A.pE()),a3)
if(!a4.gu(0).m())return
s=new A.J(B.U,a2.a(new A.pF()),a3)
if(s.gt(0)!==1)throw A.d(A.z("surface-v2 tangent data requires one normal slot",a1))
r=a4.gaO(0)
for(a2=this.b,a3=a2.length,q=a3/14|0,p=t.n,o=s.gaO(0).b,n=r.b,m=0;m<q;++m){l=m*14
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
if(!B.a.a7(A.e([j,h,g,f,e,d,c],p),new A.pG()))throw A.d(A.z("surface-v2 tangent basis must be finite",a1))
if(b<1e-8||a<1e-8)throw A.d(A.z("surface-v2 tangent basis must be non-zero",a1))
a0=(j*f+h*e+g*d)/Math.sqrt(b*a)
if(Math.abs(a0)>0.05)throw A.d(A.z("surface-v2 tangent must be orthogonal to its normal: "+A.w(a0),a1))
if(Math.abs(Math.abs(c)-1)>0.05)throw A.d(A.z("surface-v2 tangent handedness must be -1 or +1: "+A.w(c),a1))}}}
A.pE.prototype={
$1(a){return t.qY.a(a).a===B.dK},
$S:18}
A.pF.prototype={
$1(a){return t.qY.a(a).a===B.dJ},
$S:18}
A.pG.prototype={
$1(a){return isFinite(A.bC(a))},
$S:5}
A.pR.prototype={
C(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.d(A.z("resource plan must contain sceneColor and present",null))
if(s.N(0,new A.pT()))throw A.d(A.z("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.d(A.z("resource history does not match vhsOutput ownership",null))}}
A.pT.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.qa.prototype={}
A.kI.prototype={
j4(a){var s=this
if(s.d)A.k(A.m("resource assembler is disposed"))
if(s.a!=null)throw A.d(A.m("resource assembler is initialized"))
a.C()
s.a=a
s.c=1},
br(){if(this.d)return
this.d=!0
this.a=null}}
A.fq.prototype={
v(){return"DrawMode."+this.b}}
A.jq.prototype={
v(){return"BlendMode."+this.b}}
A.bv.prototype={}
A.kT.prototype={
C(){var s=this
if(s.a<0||s.b<0)throw A.d(A.z("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.d(A.z("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.d(A.z("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.jw.prototype={
v(){return"ColorEncoding."+this.b}}
A.jG.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.kG.prototype={
C(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.dW(B.l5)
if(o.a!==0)A.k(A.ap(o,r,"contains unknown pipeline features"))
if(q.a===B.bl&&p.gX(p))A.k(A.ap(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.d(A.z("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.eL.prototype={
v(){return"RendererState."+this.b}}
A.aJ.prototype={}
A.o9.prototype={
jh(a){var s=this.z.h(0,a)
return s==null?B.ci:s},
p(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.kj.prototype={
p8(a){return this.a.c7(a)}}
A.pC.prototype={
$3(a,b,c){return new A.cB(A.c(a),A.c(b),A.aC(c))},
$S:78}
A.l_.prototype={}
A.pH.prototype={
bn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.k,f=this.a,e=a.b,d=A.yH(f,new A.jU(e.byteLength,B.cw,B.ha))
if(f.b!==B.h)A.k(A.m(g))
s=A.b(d.a)
r=f.a
q=v.G
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),0,e)
p=A.d6(f)
A.bA(f,p)
if(f.b!==B.h)A.k(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a2(t.S)
for(n=a.a,m=0;m<6;++m){l=B.U[m]
k=A.A0(l.a)
if(!o.l(0,k))continue
j=A.Ej(n,k,l)
if(f.b!==B.h)A.k(A.m(g))
r.vertexAttribPointer.apply(r,[k,j,A.c(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(f.b!==B.h)A.k(A.m(g))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.yH(f,new A.jU(A.ye(i),B.cw,B.cv))
if(f.b!==B.h)A.k(A.m(g))
r.bindBuffer(A.c(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(h.a))
A.D7(f,h,t.J.a(i))}else h=null
f=n?null:i.length
if(f==null)f=0
return new A.l_(d,h,p,f,e.length/14|0,!1)},
eS(a){var s=this.c.h(0,a.a)
if(s==null)throw A.d(A.dY(B.az,a))
this.b.c7(a)
return s},
b6(a){var s,r,q=this.c.a2(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.b6(a)},
eQ(){var s,r,q,p
for(s=this.b.bL(),r=s.$ti,s=new A.cH(s.a(),r.i("cH<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.bn(p.b))}},
gcl(){return this.b.bL().bv(0,0,new A.pJ(),t.S)}}
A.pI.prototype={
$3(a,b,c){return new A.br(A.c(a),A.c(b),A.aC(c))},
$S:80}
A.pJ.prototype={
$2(a,b){var s,r
A.c(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.ye(s)
return a+r+s},
$S:170}
A.ck.prototype={}
A.e6.prototype={
v(){return"TextureResidencyStatus."+this.b}}
A.c2.prototype={}
A.rA.prototype={
cD(a){var s=this.a,r=A.G(s)
return new A.J(s,r.i("n(1)").a(new A.rB(a)),r.i("J<1>")).gt(0)}}
A.rB.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:86}
A.ry.prototype={
oO(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.q(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.k(A.z("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.k(A.ap(n,"handle","must be valid"))
if(s.S(o))throw A.d(A.z("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("av<2>")
m=A.K(new A.av(s,r),r.i("p.E"))
B.a.U(m,new A.rz())
r=t.Aj
l=A.a2(r)
k=A.q(r,t.bp)
j=A.e([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.u)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.lW(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.c2(p,i))}r=l.a
return new A.rA(A.ah(j,t.d),r)},
lW(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.h()
if(s.hm(a,r)===s.d)return B.dD
this.b.k(0,a,!0)
return B.dC}catch(q){if(A.aj(q) instanceof A.k0){s=this.b.h(0,a)===!0?B.dF:B.dE
return s}else throw q}}}
A.rz.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.G(b.c,a.c)
return s===0?B.b.G(a.a,b.a):s},
$S:87}
A.dF.prototype={}
A.kW.prototype={
aR(a){var s=this.a,r=A.wx(s,B.hd)
A.wy(s,r,0,a)
return r},
pq(a,b){var s,r,q,p=this,o=p.b,n=o.c7(a),m=A.K(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.jv(a,new A.dF(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.wx(p.a,s)
o.k(0,r,q)}A.wy(p.a,q,0,b)},
hm(a,b){var s
this.b.c7(a)
s=this.c.h(0,a.a)
return s==null?b:s},
p0(a){var s
if(a==null){s=this.d
s===$&&A.h()
return s}s=this.d
s===$&&A.h()
return this.hm(a,s)},
pc(a){var s=this.e
s===$&&A.h()
return s},
pe(a){var s=this.f
s===$&&A.h()
return s},
p6(a){var s=this.r
s===$&&A.h()
return s},
pa(a){var s=this.w
s===$&&A.h()
return s},
br(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ak(s,s.r,s.e,A.r(s).i("ak<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.H(0)
s=n.d
s===$&&A.h()
A.ld(q,s)
s=n.e
s===$&&A.h()
A.ld(q,s)
s=n.f
s===$&&A.h()
A.ld(q,s)
s=n.r
s===$&&A.h()
A.ld(q,s)
s=n.w
s===$&&A.h()
A.ld(q,s)},
eQ(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.aR($.xu())
i.e=i.aR($.xr())
i.f=i.aR($.xs())
i.r=i.aR($.xq())
i.w=i.aR($.xt())
for(s=i.b.bL(),r=s.$ti,s=new A.cH(s.a(),r.i("cH<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a7(o,new A.rE()))continue
l=A.wx(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.wy(p,l,k,j)}q.k(0,n.a,l)}},
gcl(){return this.b.bL().bv(0,0,new A.rD(),t.S)}}
A.rC.prototype={
$3(a,b,c){return new A.bm(A.c(a),A.c(b),A.aC(c))},
$S:102}
A.rE.prototype={
$1(a){return t.Fx.a(a)==null},
$S:104}
A.rD.prototype={
$2(a,b){var s
A.c(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:110}
A.eB.prototype={
go0(){return this.b.length}}
A.jP.prototype={
mL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.ql(A.e([],t.pq),A.a2(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)r[p].aj(s,b)
o=s.mK(a,!1)
if(o.b.length!==0)return new A.jQ(o,B.ix)
q=o.a
n=A.G(q)
m=new A.U(q,n.i("i(1)").a(new A.o2()),n.i("U<1,i>")).bz(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){k=r[p]
for(n=k.ai(d),j=0;j<1;++j){i=n[j]
if(!m.q(0,i.gD().a))throw A.d(A.m('RenderFeature "'+k.ga8()+'" created a pass "'+i.gD().a+'" that it never declared into the graph'))
B.a.l(l,i)}}B.a.U(l,new A.o3(o))
return new A.jQ(o,l)}}
A.o2.prototype={
$1(a){return t.A.a(a).a},
$S:116}
A.o3.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.G(B.a.j3(s,new A.o0(a)),B.a.j3(s,new A.o1(b)))},
$S:118}
A.o0.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.o1.prototype={
$1(a){return t.A.a(a).a===this.a.gD().a},
$S:9}
A.jQ.prototype={}
A.ev.prototype={
v(){return"FrameQueueState."+this.b}}
A.o8.prototype={}
A.o6.prototype={
mG(a){if(a.length===0)throw A.d(A.ap(a,"passId",null))
this.b=a
this.a.co(a,A.Ab())},
kc(){var s,r,q,p,o=t.z
o=A.q(o,o)
for(s=this.a,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.aJ(p.a,p.b,p.d))}return A.b5(o,t.N,t.pH)},
bE(a,b){var s,r=this.b
if(r==null)throw A.d(A.m("draw recorded outside an active render pass"))
if(b<1)throw A.d(A.z("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.V(a,3)*b}}
A.fO.prototype={}
A.aw.prototype={
gbP(){var s=this.c,r=A.G(s)
return new A.J(s,r.i("n(1)").a(new A.pW()),r.i("J<1>"))},
gcs(){var s=this.c,r=A.G(s)
return new A.J(s,r.i("n(1)").a(new A.pX()),r.i("J<1>"))},
p(a){return"PassDeclaration("+this.a+" @ "+this.b.p(0)+")"}}
A.pW.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.I},
$S:23}
A.pX.prototype={
$1(a){return t.j2.a(a).b===B.j},
$S:23}
A.ce.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bf.prototype={
p(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.i1.prototype={
v(){return"ResourceFormat."+this.b}}
A.cQ.prototype={
v(){return"GraphStage."+this.b}}
A.aN.prototype={
jc(){var s=this
return new A.aN(s.a,s.b,s.c,s.d,s.e,s.f+1)},
a0(a,b){var s=this
if(b==null)return!1
return b instanceof A.aN&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gI(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,s.e,s.f)},
p(a){var s=this,r=s.b.p(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.fF.prototype={
v(){return"ResourceAccess."+this.b}}
A.O.prototype={}
A.hm.prototype={}
A.qf.prototype={
av(a){var s,r,q,p,o,n,m=this
a.C()
s=null
try{r=t.a
s=A.D9(m.a,a.c,r.a(a.d.ga_().bS(0)),r.a(a.f),a.b)}catch(q){if(A.aj(q) instanceof A.i5){++m.e
throw q}else throw q}p=new A.hm(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
lc(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ak(s,s.r,s.e,a.$ti.i("ak<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.bk.prototype={
C(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.d(A.z("ProgramSource.id must not be empty",m))
s=t.S
r=A.a2(s)
for(q=this.d.gJ(),q=q.gu(q);q.m();){p=q.gn()
o=p.b
if(o<0)throw A.d(A.z('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.d(A.z('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a2(s)
for(s=this.e.gJ(),s=s.gu(s);s.m();){q=s.gn()
p=q.b
if(p<0)throw A.d(A.z('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.d(A.z('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.qj.prototype={}
A.b7.prototype={
ag(){var s=this
return A.xR(B.e5,s.f,B.an,B.a7,!0,!0,!0,!0,s.r,B.ar,B.as,s.d,s.e,!0,!1,!1)}}
A.ql.prototype={
mK(a,b){var s=this.mk(t.Q.a(a),!1),r=this.a,q=A.G(r)
return new A.qk(A.ah(new A.J(r,q.i("n(1)").a(new A.qq()),q.i("J<1>")),t.A),s)},
mk(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.ka)
r=m.a
q=A.G(r)
p=q.i("J<1>")
o=A.K(new A.J(r,q.i("n(1)").a(new A.qp()),p),p.i("p.E"))
m.kT(o,a,s)
m.kX(o,s)
m.kZ(o,s)
m.kW(o,!1,s)
n=m.l0(o,s)
m.kY(o,n,s)
m.l_(o,s)
m.kV(o,n,s)
m.kU(o,s)
return s},
kT(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
p=B.P.dW(b)
if(p.a!==0)B.a.l(c,new A.bf(B.ho,q.a,"missing capabilities: "+p.a4(0,", ")))}},
kX(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gbP(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn().a
if(m.e>1)B.a.l(b,new A.bf(B.hj,n,"reads multisampled resource "+m.p(0)+" directly; resolve before sampling"))}}},
kZ(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.G(a),r=s.i("n(1)").a(new A.qo()),q=B.a.gu(a),s=new A.S(q,r,s.i("S<1>"));s.m();){r=q.gn()
p=r.gbP()
o=A.K(p,p.$ti.i("p.E"))
p=r.gcs()
n=A.K(p,p.$ti.i("p.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bf(B.aV,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gaO(o).a
l=B.a.gaO(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bf(B.aV,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bf(B.aV,r.a,"resolve source and destination must match format and extent"))}},
kW(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.u)(p),++m){l=p[m]
if(l.b===B.I)B.a.l(c,new A.bf(B.hm,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
l0(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.q(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.u)(a),++q){p=a[q]
for(o=p.gcs(),n=J.Q(o.a),o=new A.S(n,o.b,o.$ti.i("S<1>")),m=p.a;o.m();){l=n.gn().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bf(B.hi,m,l.p(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kY(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbP(),p=J.Q(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>")),o=r.a;q.m();){n=p.gn()
if(n.b===B.I)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bf(B.cB,o,"reads "+n.p(0)+" but no pass writes that version"))
continue}if(B.a.bK(a,m)>s)B.a.l(c,new A.bf(B.cB,o,"reads "+n.p(0)+" before writer "+m.a+" runs"))}}},
l_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbP(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.I)continue
for(l=q.gcs(),k=J.Q(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gn().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bf(B.hl,n,"reads and writes "+m.p(0)+" at the same version; declare a ping-pong version bump"))}}}},
kV(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.u)(a),++r){q=a[r]
for(p=q.gbP(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>")),n=q.a;p.m();){m=o.gn()
if(m.b===B.I)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcs().am(0,new A.qn(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bf(B.hk,n,"reads "+l.p(0)+" but writer "+k.a+" produced "+j.p(0)))}}},
kU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.q(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcs(),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn().a
r.k(0,n.a+"#"+n.f,q)}m=J.k9(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a2(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbP(),p=J.Q(s.a),s=new A.S(p,s.b,s.$ti.i("S<1>"));s.m();){o=p.gn()
if(o.b===B.I)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.f(m,k)
m[k].l(0,q)}}p=t.y
j=A.cU(s,!1,!1,p)
s=a.length
i=A.cU(s,!1,!1,p)
h=new A.qm(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.f(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.f(a,q)
B.a.l(b,new A.bf(B.hn,a[q].a,"participates in a resource dependency cycle"))}}}}
A.qq.prototype={
$1(a){t.A.a(a)
return A.wn()},
$S:9}
A.qp.prototype={
$1(a){t.A.a(a)
return A.wn()},
$S:9}
A.qo.prototype={
$1(a){return t.A.a(a).f},
$S:9}
A.qn.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:23}
A.qm.prototype={
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
r=A.iw(r,r.r,A.r(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.qk.prototype={}
A.lx.prototype={$ic1:1,
ga8(){return this.a},
gD(){return this.b},
gf0(){return this.c}}
A.hZ.prototype={
hv(a){var s,r,q=a.c,p=q.a
if(!p.gan(0))A.k(A.z("Transform.translation must be finite: "+p.p(0),null))
p=q.b
if(!(isFinite(p.a)&&isFinite(p.b)&&isFinite(p.c)&&isFinite(p.d)))A.k(A.z("Transform.rotation must be finite: "+p.p(0),null))
if(!isFinite(1))A.k(A.z(u.u,null))
s=this.a.c7(a.a)
q=q.ac()
p=s.d.gaA()
r=A.G(p)
return A.be(new A.U(p,r.i("M(1)").a(q.gaC()),r.i("U<1,M>")))},
gj7(){return new A.cn(this.o9(),t.Br)},
o9(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gj7(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bL(),n=o.$ti,o=new A.cH(o.a(),n.i("cH<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.C()
f=k.a(g.a)
m.a1(f)
f=f.a
if(!(f>=0&&f<j.length)){A.f(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.ac()
f=f.gaA()
d=A.G(f)
r=5
return a.b=new A.lx(h,g,A.be(new A.U(f,d.i("M(1)").a(i.gaC()),d.i("U<1,M>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iCC:1}
A.qs.prototype={
$3(a,b,c){return new A.cv(A.c(a),A.c(b),A.aC(c))},
$S:137}
A.qB.prototype={
jq(a,b){var s,r
if(this.w)A.k(A.m("resource library is disposed"))
s=this.a
a.C()
r=s.b.aF(a,b)
s.c.k(0,r.a,s.bn(a))
this.e.l(0,r)
return r},
oT(a){if(this.w)A.k(A.m("resource library is disposed"))
this.a.b6(a)
this.e.a2(0,a)},
oS(a){var s
if(this.w)A.k(A.m("resource library is disposed"))
a.C()
s=this.b.a.aF(a,null)
this.f.l(0,s)
return s},
eP(a,b,c){var s,r
if(this.w)A.k(A.m("resource library is disposed"))
if(c>0)s=b<=0
else s=!0
if(s)A.k(A.z("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(1))A.k(A.z("TextureStore.declare anisotropy must be in [1, 16]: 1",null))
r=this.c.b.aF(new A.dF(new A.jW(c,b,1,!1,B.ax,B.ax,B.cy,1),A.cU(1,null,!1,t.Fx),!1),a)
this.r.l(0,r)
return r},
br(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)return
s=i.r
r=A.K(s,A.r(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.u)(r),++l){k=r[l]
j=o.a2(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b6(k)}r=i.f
q=A.K(r,A.r(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.u)(q),++l)n.b6(q[l])
q=i.e
o=A.K(q,A.r(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.u)(o),++l)m.b6(o[l])
s.H(0)
r.H(0)
q.H(0)
p.br()
i.w=!0}}
A.te.prototype={}
A.lY.prototype={$ic1:1,
ga8(){return this.a},
gD(){return this.b},
gf0(){return this.c}}
A.uC.prototype={
$1(a){var s=this.a.w.a.eS(a),r=s.b!=null,q=r?s.d:s.e
return new A.i0(s.c,r,q,s.f)},
$S:147}
A.uD.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gn().jd(a)
if(b!=null&&s.q(0,b))return this.b.x.gn().jd(b)
throw A.d(A.m("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:148}
A.uB.prototype={
$0(){return this.a.$1("shadowMap")},
$S:4}
A.uu.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.z
return r==null||r.length===0?null:B.a.gP(r)},
$S:152}
A.uv.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.b6
s=q.b.z
r=s.length===0?null:B.a.gP(s)
return A.GA(s,3,q.a.d,r)},
$S:163}
A.uA.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:4}
A.up.prototype={
$0(){return this.a.at.a},
$S:164}
A.ur.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:4}
A.uq.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:4}
A.uz.prototype={
$0(){return this.a.$1("sceneColor")},
$S:4}
A.un.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:4}
A.uo.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:4}
A.uw.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:4}
A.ux.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:4}
A.uy.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.h()
return s},
$S:4}
A.ut.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:4}
A.us.prototype={
$0(){return this.a.at.w},
$S:46}
A.uE.prototype={
$0(){return this.a},
$S:47}
A.tH.prototype={}
A.lJ.prototype={$iCB:1}
A.lu.prototype={$iBO:1}
A.qH.prototype={
gbg(){var s=this.w
return s==null?A.k(A.m("renderer is not initialized")):s},
j5(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.bs)throw A.d(A.m("renderer can only be initialized once"))
a.C()
b.C()
s=m.a
if(s.b===B.ac)throw A.d(A.m("renderer device is context lost"))
m.e=B.kF
try{m.r=s.jn()
r=m.b
q=A.pS(a)
p=r.a
if(p.a!=null)A.k(A.m("configuration state is already initialized"))
a.C()
p.a=a
A.pS(a)
p.d=1
r.b.j4(q)
r=A.Cc()
m.w=new A.qB(A.Ce(s),r,A.CP(s),A.a2(t.kc),A.a2(t.pw),A.a2(t.Aj))
r=new A.kI()
p=new A.ou(s,r)
q=A.pS(a)
o=p.fD(q,a)
r.j4(q)
p.c=new A.kB(new A.qa(q),o)
m.x=p
m.y=new A.qf(s,A.q(t.N,t.CH))
m.as=a
A.zo(m)
m.e=B.bt}catch(n){s=m.y
if(s!=null){r=s.b
s.lc(new A.av(r,A.r(r).i("av<2>")))
r.H(0)}s=m.x
if(s!=null)s.br()
s=m.w
if(s!=null)s.br()
m.w=null
m.e=B.bs
throw n}return A.wa(t.H)},
mE(a,b){var s,r,q,p,o,n,m=this,l=null
m.m0()
m.cE()
r=B.a.q(m.d,a)
if(!r)throw A.d(A.z("world was not created by this renderer",l))
if(m.at!=null)throw A.d(A.m("renderer.beginFrame called twice without end/abort"))
r=b.a
q=r.d
if(!q.gan(0))A.k(A.z("CameraView.eye must be finite: "+q.p(0),l))
q=r.e
if(!q.gan(0)||q.gck()<1e-12)A.k(A.z("CameraView.forward must be finite and nonzero: "+q.p(0),l))
q=r.f
if(isFinite(q)){p=r.r
p=!isFinite(p)||q<=0||p<=q}else p=!0
if(p)A.k(A.z("CameraView requires 0 < near < far, got "+A.w(q)+"/"+r.r,l))
q=r.w
if(!isFinite(q)||q<=0)A.k(A.z("CameraView.aspect must be finite and > 0: "+A.w(q),l))
if(!r.a.gan(0)||!r.b.gan(0)||!r.c.gan(0))A.k(A.z("CameraView matrices must be finite",l))
b.b.C()
b.c.C()
r=b.w
if(!isFinite(r))A.k(A.z("FrameInput.timeSeconds must be finite: "+A.w(r),l))
m.at=b
m.ax=a
o=m.c
if(o.b===B.aw)A.k(A.m("FrameQueue.beginFrame called twice without end/abort"))
o.b=B.aw
o.c=0
B.a.H(o.a)
s=o
try{r=m.r
if((r==null?A.k(A.m("renderer is not initialized")):r).z)m.b$=m.a.mF()
return s}catch(n){if(o.b!==B.aw)A.k(A.m("FrameQueue.abortFrame called without an active frame"))
o.c=0
o.b=B.fZ
m.fj()
m.ax=m.at=null
throw n}},
nH(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cE()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.d(A.m("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.aw)A.k(A.m("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.ib(l,0,A.ek(m.c,"count",t.S),A.G(l).c).bT(0,!1)
m.b=B.fY
q=k
try{p=A.Ev(a1,r,s,q)
o=p.a.kc()
m=o.gJ().d5(0,new A.qI())
l=m.$ti
n=new A.cA(m,l.i("aJ(1)").a(new A.qJ()),l.i("cA<1,aJ>")).bv(0,B.ci,new A.qK(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcl()
g=g.c.gcl()
e=a1.w
e.a.gcl()
e.c.gcl()
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
return new A.o9(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.lo(s.e)
a1.ax=a1.at=null}},
m0(){var s,r,q,p=this
if(p.e!==B.dq)return
if(p.a.b===B.ac)throw A.d(A.m("renderer context remains lost"))
s=p.w
if(s.w)A.k(A.m("resource library is disposed"))
s.a.eQ()
s.c.eQ()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.m("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.m("GPU resource adapter is not initialized"))
s.c=new A.kB(q.a,s.fD(A.pS(r),r))
s=p.y
s.c=null
s.b.H(0)
A.zo(p)
p.e=B.bt},
cE(){var s=this,r=s.e
if(r!==B.bt)throw A.d(A.m("renderer is not ready: "+r.b))
if(s.a.b===B.ac){s.lf()
s.e=B.dq
throw A.d(A.m("renderer context lost"))}}}
A.qI.prototype={
$1(a){return B.b.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:48}
A.qJ.prototype={
$1(a){return t.h6.a(a).b},
$S:49}
A.qK.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.aJ(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:50}
A.lH.prototype={}
A.tq.prototype={
lo(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.h)A.k(A.m(u.k))
r=s.ho(o)
if(r.b)A.k(A.m("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.lH(o))}catch(q){p.dv(o)}},
fj(){var s=this.b$
this.b$=null
if(s!=null)this.dv(s)},
lf(){var s,r,q
this.fj()
s=this.a$
r=J.y2(s.slice(0),A.G(s).c)
B.a.H(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.u)(r),++q)this.dv(r[q].b)},
dv(a){var s,r
try{s=this.a
s.a.deleteQuery(s.ho(a).a)}catch(r){}}}
A.lN.prototype={}
A.i6.prototype={
v(){return"ShadowCasterLod."+this.b}}
A.bO.prototype={
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
A.bM.prototype={
G(a,b){var s
t.z3.a(b)
s=B.c.G(b.a,this.a)
if(s!==0)return s
return B.d.G(this.b,b.b)},
$ib4:1}
A.aO.prototype={}
A.vY.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.G(0,s.a(b).a)},
$S:51}
A.vZ.prototype={
$1(a){return t.E0.a(a).b},
$S:52}
A.vW.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.G(0,s.a(b).a)},
$S:53}
A.vX.prototype={
$1(a){return t.EH.a(a).b},
$S:54}
A.nK.prototype={}
A.nJ.prototype={}
A.jg.prototype={
gaA(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.M(o,n,p),new A.M(r,n,p),new A.M(o,q,p),new A.M(r,q,p),new A.M(o,n,s),new A.M(r,n,s),new A.M(o,q,s),new A.M(r,q,s)],t.k)},
p(a){return"Aabb("+this.a.p(0)+", "+this.b.p(0)+")"}}
A.eG.prototype={}
A.fu.prototype={
v(){return"FrustumTest."+this.b}}
A.oa.prototype={
pm(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.cj
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.h_:B.h0}}
A.ob.prototype={
$4(a,b,c,d){var s=new A.M(a,b,c),r=new A.eG(s,d),q=Math.sqrt(s.gck())
if(q<1e-9)s=r
else{s=1/q
s=new A.eG(new A.M(a*s,b*s,c*s),d/q)}return s},
$S:55}
A.dt.prototype={
a5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.f(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.f(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.f(h,j)
h[j]=l}return new A.dt(h)},
js(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.cV.a(a)
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
return h===0||h===1?new A.M(k,j,i):new A.M(k/h,j/h,i/h)},
eG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.k(A.m("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.w(k)+")"))
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
return new A.dt(h)},
gan(a){return B.q.a7(this.a,new A.pA())},
p(a){return"Mat4("+A.w(this.a)+")"}}
A.pA.prototype={
$1(a){return isFinite(A.bC(a))},
$S:5}
A.kE.prototype={
p(a){var s=this
return"Quat("+A.w(s.a)+", "+A.w(s.b)+", "+A.w(s.c)+", "+A.w(s.d)+")"}}
A.kX.prototype={
C(){var s=this.a
if(!s.gan(0))throw A.d(A.z("Transform.translation must be finite: "+s.p(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.d(A.z("Transform.rotation must be finite: "+s.p(0),null))
if(!isFinite(1))throw A.d(A.z(u.u,null))},
ac(){var s,r,q,p,o,n,m,l,k,j,i=this.b,h=i.a,g=h*h,f=i.b,e=f*f,d=i.c,c=d*d,b=h*f,a=h*d,a0=f*d
i=i.d
s=i*h
r=i*f
q=i*d
d=t.n
i=A.yc(A.e([1-2*(e+c),2*(b+q),2*(a-r),0,2*(b-q),1-2*(g+c),2*(a0+s),0,2*(a+r),2*(a0-s),1-2*(g+e),0,0,0,0,1],d)).a
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
return A.yc(A.e([h,p,o,0,n,m,l,0,k,j,i[10],0,f.a,f.b,f.c,1],d))},
p(a){return"Transform("+this.a.p(0)+", "+this.b.p(0)+", scale=1)"}}
A.M.prototype={
c8(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bo(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.M(s*r-q*p,q*o-n*r,n*p-s*o)},
gck(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gt(a){return Math.sqrt(this.gck())},
gan(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gab(){var s=this,r=Math.sqrt(s.gck())
return r<1e-9?B.ai:new A.M(s.a/r,s.b/r,s.c/r)},
a0(a,b){if(b==null)return!1
return b instanceof A.M&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)},
p(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.io.prototype={
v(){return"_BloomBlurAxis."+this.b}}
A.hk.prototype={
ga8(){return this.f},
aj(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.e([new A.O(this.x,B.i),new A.O(this.y,B.j)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.v,B.cX,B.cT)),q=A.d6(s.d),p=t.n,o=s.r===B.dP?new Float32Array(A.a1(A.e([1/s.Q,0],p))):new Float32Array(A.a1(A.e([0,1/s.as],p)))
p=s.y
return A.e([new A.ll(new A.b7(s.f,A.e([new A.O(s.x,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
$iam:1}
A.ll.prototype={
al(a){var s,r,q,p,o=this
if(a.c.e.b<=0)return
s=a.b
r=s.a
A.c6(r,a.ao(o.r).b)
A.bo(r,o.a.ag())
A.dE(r,B.aa,1,0,0,0)
A.cl(r,o.b.b)
q=t._
p=o.d
if(o.e)A.D5(r,0,q.a(p.$0()))
else A.aF(r,0,q.a(p.$0()))
A.x(r,"uSource",B.w)
A.x(r,"uTexelStep",new A.A(B.aF,o.f))
A.bA(r,o.c)
s.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.jr.prototype={
ga8(){return"bloomComposite"},
aj(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.L,A.e([new A.O(this.f,B.i),new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ai(a){var s=this,r="bloomComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.v,B.j7,B.iR)),p=A.d6(s.d),o=s.w,n=A.e([new A.O(s.f,B.i),new A.O(s.r,B.i),new A.O(o,B.j)],t.C)
return A.e([new A.lm(new A.b7(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
$iam:1}
A.lm.prototype={
al(a){var s,r,q=this,p=a.c.e.b
if(p<=0)return
s=a.b
r=s.a
A.c6(r,a.d4(q.f).b)
A.D6(r,1)
A.bo(r,B.eF)
A.cl(r,q.b.b)
A.aF(r,0,t._.a(q.d.$0()))
A.x(r,"uBloom",B.w)
A.x(r,"uBloomStrength",new A.A(B.e,p))
A.bA(r,q.c)
s.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.jE.prototype={
ga8(){return"depthPrepass"},
aj(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.hf,A.e([new A.O(this.w,B.j)],t.C),!1))},
ai(a){var s=this,r="depthPrepass",q=s.a.av(new A.bk(r,s.b,s.c,B.cW,B.cU,B.ii))
return A.e([new A.lp(new A.b7(r,A.e([new A.O(s.w,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$iam:1}
A.lp.prototype={
al(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.c,a0=a.e,a1=b.a
A.c6(a1,a2.ao("sceneDepth").b)
A.bo(a1,d.a.ag())
A.dE(a1,B.aQ,1,0,0,0)
A.cl(a1,d.b.b)
A.x(a1,"uVertexSnapGrid",new A.A(B.e,a0.Q))
A.x(a1,"uAlbedo",B.w)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.z,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.u)(s),++l){k=s[l]
j=k.a
i=j.gD()
A.x(a1,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(a))))
A.x(a1,"uModel",new A.A(B.t,new Float32Array(A.a1(i.c.ac().a))))
A.vU(b,k,!1)
d.ld(b,j.gD().b,p)
h=q.$1(j.gD().a)
i=h.a
if(a1.b!==B.h)A.k(A.m(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.h)A.k(A.m(c))
e=A.c(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.c(o.WebGL2RenderingContext.UNSIGNED_INT):A.c(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bE(g,f)}else{if(a1.b!==B.h)A.k(A.m(c))
m.drawArraysInstanced(A.c(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bE(g,f)}}},
ld(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aF(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.A(B.e,0))
A.x(q,"uAffineWarpStrength",new A.A(B.e,0))
s=this.a.ag()
A.bo(q,r.dx?s.f_(!1):s)},
$iac:1,
gD(){return this.a}}
A.iq.prototype={
v(){return"_DofBlurAxis."+this.b}}
A.hq.prototype={
ga8(){return this.f},
aj(a,b){B.a.l(a.a,new A.aw(this.f,B.L,A.e([new A.O(this.w,B.i),new A.O(this.x,B.j)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk(s.e,s.b,s.c,B.v,B.cX,B.cT)),q=A.d6(s.d),p=t.n,o=s.r===B.dQ?new Float32Array(A.a1(A.e([1/s.z,0],p))):new Float32Array(A.a1(A.e([0,1/s.Q],p)))
p=s.x
return A.e([new A.lq(new A.b7(s.f,A.e([new A.O(s.w,B.i),new A.O(p,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
$iam:1}
A.lq.prototype={
al(a){return},
$iac:1,
gD(){return this.a}}
A.jI.prototype={
ga8(){return"dofComposite"},
aj(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.L,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1))},
ai(a){var s=this,r="dofComposite",q=s.a.av(new A.bk(r,s.b,s.c,B.v,B.j5,B.i6)),p=A.d6(s.d)
return A.e([new A.lr(new A.b7(r,A.e([new A.O(s.z,B.i),new A.O(s.Q,B.i),new A.O(s.as,B.i),new A.O(s.at,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$iam:1}
A.lr.prototype={
al(a){var s,r=this,q=a.ao("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.c6(n,q.b)
A.bo(n,r.a.ag())
A.cl(n,r.b.b)
s=t._
A.aF(n,0,s.a(r.d.$0()))
A.x(n,"uSharp",B.w)
A.aF(n,1,s.a(r.e.$0()))
A.x(n,"uBlurred",B.ah)
A.aF(n,2,s.a(r.f.$0()))
A.x(n,"uSceneDepth",B.dI)
A.x(n,"uNear",new A.A(B.e,o.f))
A.x(n,"uFar",new A.A(B.e,o.r))
A.x(n,"uFocusDistance",new A.A(B.e,r.w))
A.x(n,"uFocusRange",new A.A(B.e,r.x))
A.x(n,"uStrength",new A.A(B.e,0))
A.bA(n,r.c)
p.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.jZ.prototype={
ga8(){return"grade"},
aj(a,b){B.a.l(a.a,new A.aw("grade",B.L,A.e([new A.O(this.r,B.i),new A.O(this.w,B.j)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk("grade",s.b,s.c,B.v,B.j3,B.iS)),q=A.d6(s.d),p=s.r,o=s.w
return A.e([new A.lw(new A.b7("grade",A.e([new A.O(p,B.i),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
$iam:1}
A.lw.prototype={
al(a){var s=this,r=a.ao(s.f.a),q=a.b,p=q.a
A.c6(p,a.ao(s.r.a).b)
A.bo(p,s.a.ag())
A.cl(p,s.b.b)
A.aF(p,0,r.b)
A.x(p,"uScene",B.w)
A.aF(p,1,t._.a(s.d.$0()))
A.x(p,"uLut",B.ah)
A.x(p,"uLutSize",new A.A(B.e,s.e))
A.x(p,"uStrength",new A.A(B.e,a.c.e.y))
A.bA(p,s.c)
q.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.kl.prototype={
ga8(){return"msaaResolve"},
aj(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.hg,A.e([new A.O(this.b,B.i),new A.O(this.c,B.j)],t.C),!0))},
ai(a){var s=this.b,r=this.c
return A.e([new A.lD(new A.b7("msaaResolve",A.e([new A.O(s,B.i),new A.O(r,B.j)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
$iam:1}
A.lD.prototype={
al(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.d4(this.c),j=a.d4(this.d),i=this.b
if(i.b!==B.h)A.k(A.m(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.k(A.z("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.k(A.z("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.k(A.z("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.e([A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(m.WebGL2RenderingContext.NONE)],t.n))}A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.c(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.e([A.c(m.WebGL2RenderingContext.NONE),A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.c(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.af(i,l,[0,0,s,r.x,0,0,p,q.x,A.c(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.c(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.e([A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.c(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iac:1,
gD(){return this.a}}
A.fi.prototype={}
A.js.prototype={
ao(a){var s=this.a.h(0,a)
if(s==null)throw A.d(A.m('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
d4(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.ao(s)},
$iCA:1}
A.wo.prototype={}
A.hV.prototype={
ga8(){return"present"},
aj(a,b){B.a.l(a.a,new A.aw("present",B.hh,A.e([new A.O(this.f,B.i)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk("present",s.b,s.c,B.v,B.je,B.ip)),q=A.d6(s.d),p=s.f
return A.e([new A.lK(new A.b7("present",A.e([new A.O(p,B.i)],t.C),!1,!1,!1,!1),r,q,p,s.r)],t.u)},
$iam:1}
A.lK.prototype={
al(a){var s,r=this,q=a.d4(r.d),p=a.b,o=p.a
A.c6(o,null)
A.bo(o,r.a.ag())
A.cl(o,r.b.b)
A.bA(o,r.c)
A.aF(o,0,q.b)
s=a.c.e
A.x(o,"uExposure",new A.A(B.e,s.a))
A.x(o,"uVignette",new A.A(B.e,s.e))
A.x(o,"uGrain",new A.A(B.e,s.f))
A.x(o,"uRainIntensity",new A.A(B.e,s.r))
A.x(o,"uRainWindowVisibility",new A.A(B.e,s.w))
A.x(o,"uOutputEncoding",new A.A(B.e,r.e===B.aR?1:0))
A.x(o,"uToneMap",B.dH)
p.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.kD.prototype={
ga8(){return"ps1Quantize"},
aj(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.L,A.e([new A.O(this.e,B.i),new A.O(this.f,B.j)],t.C),!1))},
ai(a){var s=this,r="ps1Quantize",q=s.a.av(new A.bk(r,s.b,s.c,B.v,B.j9,B.i_)),p=A.d6(s.d),o=s.e,n=s.f
return A.e([new A.lL(new A.b7(r,A.e([new A.O(o,B.i),new A.O(n,B.j)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
$iam:1}
A.lL.prototype={
al(a){var s=this,r=a.ao(s.d.a),q=a.b,p=q.a
A.c6(p,a.ao(s.e.a).b)
A.bo(p,s.a.ag())
A.cl(p,s.b.b)
A.aF(p,0,r.b)
A.x(p,"uScene",B.w)
A.x(p,"uQuantizationBits",new A.A(B.e,a.c.e.as))
A.x(p,"uDitherStrength",new A.A(B.e,0))
A.bA(p,s.c)
q.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.eO.prototype={}
A.kM.prototype={
ga8(){return"shadow"},
aj(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.he,A.e([new A.O(this.z,B.j)],t.C),!1))},
ai(a){var s=this,r="shadowCaster",q=s.a.av(new A.bk(r,s.b,s.c,B.cW,B.cU,B.iQ))
return A.e([new A.lO(new A.b7(r,A.e([new A.O(s.z,B.j)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
$iam:1}
A.lO.prototype={
al(a){var s,r,q,p,o=this,n=a.ao("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.c6(s,n.b)
A.bo(s,o.a.ag())
A.dE(s,B.aQ,1,0,0,0)
return}r=A.ys(l)
o.x.$1(r)
s=m.a
A.c6(s,n.b)
A.bo(s,o.a.ag())
A.dE(s,B.aQ,1,0,0,0)
A.cl(s,o.b.b)
A.x(s,"uAlbedo",B.w)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.u)(s),++p)o.lg(m,s[p],l,r)},
he(a,b){var s,r=this.d.$1(b),q=a.a
A.aF(q,0,t._.a(this.e.$1(r.b)))
A.x(q,"uAlphaCutoff",new A.A(B.e,0))
s=this.a.ag()
A.bo(q,r.dx?s.f_(!1):s)},
lg(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gD().r)return
s=a.a
A.x(s,"uUseInstances",B.bI)
n.h9(a,b.gD().c,d)
n.he(a,b.gD().b)
r=b.gD()
q=n.c.$1(r.a)
A.bA(s,q.a)
s=q.b
r=q.c
if(s)a.dY(r,q.d,0)
else a.aH(r,0)}else if(b instanceof A.eB){p=b.a
if(!p.gD().r)return
if(n.mh(b,c)===B.lq)return
n.h9(a,p.gD().c,d)
A.vU(a,b,!1)
n.he(a,p.gD().b)
s=p.gD()
q=n.c.$1(s.a)
A.bA(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.dZ(r,q.d,o,0)
else a.dX(r,0,o)}else throw A.d(A.z("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).p(0),null))},
mh(a,b){return B.lp},
h9(a,b,c){var s=a.a
A.x(s,"uModel",new A.A(B.t,new Float32Array(A.a1(b.ac().a))))
A.x(s,"uLightViewProjection",new A.A(B.t,new Float32Array(A.a1(c.a.a))))},
$iac:1,
gD(){return this.a}}
A.va.prototype={
$1(a){return this.a.a=a},
$S:45}
A.vb.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:58}
A.kN.prototype={
ga8(){return"shadowedWorld"},
aj(a,b){var s=this,r=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)r.push(new A.O(s.dx,B.i))
r.push(new A.O(s.dy,B.j))
B.a.l(a.a,new A.aw("shadowedWorld",B.cA,r,!1))},
ai(a){var s=this,r="shadowedWorld",q=s.a.av(new A.bk(r,s.b,s.c,B.jb,B.j4,B.hX)),p=A.e([new A.O(s.db,B.i)],t.C)
if(s.ay)p.push(new A.O(s.dx,B.i))
p.push(new A.O(s.dy,B.j))
return A.e([new A.lP(new A.b7(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
$iam:1}
A.lP.prototype={
al(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=b2.ao("sceneColor"),a5=b2.b,a6=b2.c,a7=a6.c,a8=a6.d,a9=a6.e,b0=a2.z.$0(),b1=a5.a
A.c6(b1,a4.b)
A.bo(b1,a2.a.ag())
s=a8.a
A.dE(b1,B.c6,1,s.c,s.b,s.a)
A.cl(b1,a2.b.b)
A.x(b1,"uAlbedo",B.w)
A.x(b1,"uNormalMap",B.lM)
A.x(b1,"uOrmMap",B.lN)
A.x(b1,"uEmissiveMap",B.lO)
A.x(b1,"uLightmap",B.lP)
s=t._
A.aF(b1,1,s.a(a2.y.$0()))
A.x(b1,"uShadowMap",B.ah)
r=t.n
A.x(b1,"uShadowMapTexelSize",new A.A(B.aF,new Float32Array(A.a1(A.e([1/a2.ch,1/a2.CW],r)))))
A.aF(b1,2,s.a(a2.at.$0()))
A.x(b1,"uSsao",B.dI)
A.x(b1,"uVertexSnapGrid",new A.A(B.e,a9.Q))
A.x(b1,"uSceneColorSize",new A.A(B.aF,new Float32Array(A.a1(A.e([a2.ax,a2.ay],r)))))
A.x(b1,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(a7.c.a))))
A.x(b1,"uView",new A.A(B.t,new Float32Array(A.a1(a7.a.a))))
A.x(b1,"uLightViewProjection",new A.A(B.t,new Float32Array(A.a1(b0.a.a))))
s=a8.b
A.x(b1,"uFogColor",new A.A(B.p,new Float32Array(A.a1(A.e([s.a,s.b,s.c],r)))))
A.x(b1,"uFogStart",new A.A(B.e,a8.c))
A.x(b1,"uFogEnd",new A.A(B.e,a8.d))
A.x(b1,"uFogHeightFalloff",new A.A(B.e,0))
A.x(b1,"uFogDensity",new A.A(B.e,0))
q=a2.Q.$0()
s=A.e([],t.cv)
p=a2.as.$0()
p=J.Q(p==null?B.b6:p)
o=q==null
while(p.m()){n=p.gn()
m=n.a
if(m!==(o?a3:q.a))s.push(n)}l=o?a3:q.b
if(l==null)l=B.a3
k=o?a3:q.c
if(k==null)k=B.aG
A.x(b1,"uLightPosition",new A.A(B.p,new Float32Array(A.a1(A.e([l.a,l.b,l.c],r)))))
A.x(b1,"uLightDirection",new A.A(B.p,new Float32Array(A.a1(A.e([k.a,k.b,k.c],r)))))
j=o?a3:q.d
if(j==null)j=B.T
A.x(b1,"uLightColor",new A.A(B.p,new Float32Array(A.a1(A.e([j.a,j.b,j.c],r)))))
p=o?a3:q.e
A.x(b1,"uLightIntensity",new A.A(B.e,p==null?0:p))
A.x(b1,"uSpotEnabled",new A.A(B.e,!o?1:0))
i=a8.x
p=i==null
h=p?a3:i.a
if(h==null)h=B.a3
g=p?a3:i.b
if(g==null)g=B.T
A.x(b1,"uDirectionalDirection",new A.A(B.p,new Float32Array(A.a1(A.e([h.a,h.b,h.c],r)))))
A.x(b1,"uDirectionalColor",new A.A(B.p,new Float32Array(A.a1(A.e([g.a,g.b,g.c],r)))))
p=p?a3:i.c
A.x(b1,"uDirectionalIntensity",new A.A(B.e,p==null?0:p))
for(p=a8.y,f=0;f<4;++f){n=p.length
if(f<n){if(!(f<n))return A.f(p,f)
e=p[f]}else e=a3
n=e==null
d=n?a3:e.b
if(d==null)d=B.ai
c=n?a3:e.c
if(c==null)c=B.T
m=""+f
A.x(b1,"uPointPosition"+m,new A.A(B.p,new Float32Array(A.a1(A.e([d.a,d.b,d.c],r)))))
A.x(b1,"uPointColor"+m,new A.A(B.p,new Float32Array(A.a1(A.e([c.a,c.b,c.c],r)))))
b=n?a3:e.d
if(b==null)b=0
A.x(b1,"uPointIntensity"+m,new A.A(B.e,b))
n=n?a3:e.e
if(n==null)n=1
A.x(b1,"uPointRadius"+m,new A.A(B.e,n))}for(f=0;f<3;++f){p=s.length
if(f<p){if(!(f<p))return A.f(s,f)
e=s[f]}else e=a3
p=e==null
d=p?a3:e.b
if(d==null)d=B.ai
a=p?a3:e.c
if(a==null)a=B.aG
c=p?a3:e.d
if(c==null)c=B.T
n=""+f
A.x(b1,"uDirectSpotPosition"+n,new A.A(B.p,new Float32Array(A.a1(A.e([d.a,d.b,d.c],r)))))
A.x(b1,"uDirectSpotDirection"+n,new A.A(B.p,new Float32Array(A.a1(A.e([a.a,a.b,a.c],r)))))
A.x(b1,"uDirectSpotColor"+n,new A.A(B.p,new Float32Array(A.a1(A.e([c.a,c.b,c.c],r)))))
m=p?a3:e.e
if(m==null)m=0
A.x(b1,"uDirectSpotIntensity"+n,new A.A(B.e,m))
m=p?a3:e.f
if(m==null)m=1
A.x(b1,"uDirectSpotRange"+n,new A.A(B.e,m))
m=p?a3:e.r
if(m==null)m=0.3
A.x(b1,"uDirectSpotInnerCos"+n,new A.A(B.e,Math.cos(m)))
m=p?a3:e.w
if(m==null)m=0.5
A.x(b1,"uDirectSpotOuterCos"+n,new A.A(B.e,Math.cos(m)))
p=p?0:1
A.x(b1,"uDirectSpotEnabled"+n,new A.A(B.e,p))}s=o?a3:q.f
A.x(b1,"uLightRange",new A.A(B.e,s==null?1:s))
s=o?a3:q.r
if(s==null)s=0.3
A.x(b1,"uLightInnerCos",new A.A(B.e,Math.cos(s)))
s=o?a3:q.w
if(s==null)s=0.5
A.x(b1,"uLightOuterCos",new A.A(B.e,Math.cos(s)))
a0=a8.r
A.x(b1,"uAmbientColor",new A.A(B.p,new Float32Array(A.a1(A.e([a0.a,a0.b,a0.c],r)))))
A.x(b1,"uAmbientIntensity",new A.A(B.e,a8.w))
A.x(b1,"uRainWetness",new A.A(B.e,a9.r))
for(b1=a6.a,s=b1.length,r=a9.z,a1=0;a1<b1.length;b1.length===s||(0,A.u)(b1),++a1)a2.hf(a5,b1[a1],r)
for(a6=a6.b,b1=a6.length,a1=0;a1<a6.length;a6.length===b1||(0,A.u)(a6),++a1)a2.hf(a5,a6[a1],r)},
hf(a,b,c){var s,r,q,p,o,n,m=this
if(t.yz.b(b)){s=a.a
A.x(s,"uUseInstances",B.bI)
m.hg(a,b.gD().c)
r=b.gD()
q=b.gD()
p=b.gD()
b.gD()
m.ha(a,r.b,q.e,p.f,c,!0)
o=m.c.$1(b.gD().a)
A.bA(s,o.a)
s=o.b
r=o.c
if(s)a.dY(r,o.d,0)
else a.aH(r,0)}else if(b instanceof A.eB){n=b.a
m.hg(a,n.gD().c)
A.vU(a,b,!0)
s=n.gD()
r=n.gD()
q=n.gD()
n.gD()
m.ha(a,s.b,r.e,q.f,c,!0)
o=m.c.$1(n.gD().a)
A.bA(a.a,o.a)
s=o.b
r=o.c
q=b.b.length
if(s)a.dZ(r,o.d,q,0)
else a.dX(r,0,q)}else throw A.d(A.z("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).p(0),null))},
ha(a,b,c,d,e,f){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aF(o,0,p.a(s.e.$1(q.b)))
A.aF(o,3,p.a(s.f.$1(r)))
A.aF(o,4,p.a(s.r.$1(r)))
A.aF(o,5,p.a(s.w.$1(r)))
A.aF(o,6,p.a(s.x.$1(r)))
A.x(o,"uAlphaCutoff",new A.A(B.e,0))
A.x(o,"uOpaqueCoverage",new A.A(B.e,c===B.aS?0:1))
A.x(o,"uAffineWarpStrength",new A.A(B.e,0))
p=t.n
A.x(o,"uMaterialTint",new A.A(B.p,new Float32Array(A.a1(A.e([q.c,q.d,q.e],p)))))
A.x(o,"uEmissiveStrength",new A.A(B.e,0))
A.x(o,"uUvScaleOffset",new A.A(B.lL,new Float32Array(A.a1(A.e([q.ay,q.ch,0,0],p)))))
A.x(o,"uNormalStrength",new A.A(B.e,1))
A.x(o,"uRoughness",new A.A(B.e,q.z))
A.x(o,"uMetallic",new A.A(B.e,0))
A.x(o,"uOcclusionStrength",new A.A(B.e,1))
A.x(o,"uLightmapIntensity",new A.A(B.e,0))
A.x(o,"uReceivesShadow",new A.A(B.e,1))
A:{p=r
if(B.aS===c){switch(d.a){case 0:p=B.eH
break
case 1:p=B.eG
break}break A}if(B.S===c||B.eE===c){p=s.a.ag()
break A}}A.bo(o,q.dx?p.f_(!1):p)},
hg(a,b){var s=b.ac(),r=a.a
A.x(r,"uModel",new A.A(B.t,new Float32Array(A.a1(s.a))))
A.x(r,"uNormalMatrix",new A.A(B.t,new Float32Array(A.a1(s.eG().a))))},
$iac:1,
gD(){return this.a}}
A.kQ.prototype={
ga8(){return"ssaoOcclusion"},
aj(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.cz,A.e([new A.O(this.w,B.j)],t.C),!1))},
ai(a){var s=this,r="ssaoOcclusion",q=s.a.av(new A.bk(r,s.b,s.c,B.v,B.j8,B.hW)),p=A.d6(s.d)
return A.e([new A.lS(new A.b7(r,A.e([new A.O(s.w,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$iam:1}
A.lS.prototype={
al(a){var s,r,q,p=this,o=a.b,n=a.c.e.c,m=o.a
A.c6(m,a.ao("ssaoRaw").b)
A.bo(m,p.a.ag())
if(n<=0){A.dE(m,B.aa,1,1,1,1)
return}A.dE(m,B.aa,1,0,0,0)
s=p.e.$0()
A.cl(m,p.b.b)
A.aF(m,0,t._.a(p.d.$0()))
A.x(m,"uSceneDepth",B.w)
A.x(m,"uNear",new A.A(B.e,s.f))
A.x(m,"uFar",new A.A(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.f(r,0)
A.x(m,"uProjScaleX",new A.A(B.e,r[0]))
if(5>=q)return A.f(r,5)
A.x(m,"uProjScaleY",new A.A(B.e,r[5]))
A.x(m,"uRadius",new A.A(B.e,p.f))
A.x(m,"uStrength",new A.A(B.e,n))
A.bA(m,p.c)
o.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.kP.prototype={
ga8(){return"ssaoBlur"},
aj(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.cz,A.e([new A.O(this.y,B.i),new A.O(this.z,B.j)],t.C),!1))},
ai(a){var s=this,r="ssaoBlur",q=s.a.av(new A.bk(r,s.b,s.c,B.v,B.iZ,B.iU)),p=A.d6(s.d)
return A.e([new A.lR(new A.b7(r,A.e([new A.O(s.y,B.i),new A.O(s.z,B.j)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
$iam:1}
A.lR.prototype={
al(a){var s,r,q=this,p=a.b,o=p.a
A.c6(o,a.ao("ssaoBlurred").b)
A.bo(o,q.a.ag())
if(a.c.e.c<=0){A.dE(o,B.aa,1,1,1,1)
return}A.dE(o,B.aa,1,0,0,0)
s=q.f.$0()
A.cl(o,q.b.b)
r=t._
A.aF(o,0,r.a(q.d.$0()))
A.x(o,"uSsaoRaw",B.w)
A.aF(o,1,r.a(q.e.$0()))
A.x(o,"uSceneDepth",B.ah)
A.x(o,"uTexelSize",new A.A(B.aF,new Float32Array(A.a1(A.e([1/q.r,1/q.w],t.n)))))
A.x(o,"uNear",new A.A(B.e,s.f))
A.x(o,"uFar",new A.A(B.e,s.r))
A.bA(o,q.c)
p.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.l3.prototype={
ga8(){return"vhs"},
aj(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.L,A.e([new A.O(this.r,B.i),new A.O(s,B.I),new A.O(s,B.j)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk("vhs",s.b,s.c,B.v,B.j1,B.i1)),q=A.d6(s.d),p=s.r,o=s.w
return A.e([new A.m0(new A.b7("vhs",A.e([new A.O(p,B.i),new A.O(o,B.I),new A.O(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
$iam:1}
A.m0.prototype={
al(a){var s,r=this,q=a.ao(r.f.a),p=a.ao(r.r.a),o=a.b,n=a.c.e,m=n.cy,l=n.ax
if(m)l*=0.5
s=m?0:n.cx
m=o.a
A.c6(m,p.b)
A.bo(m,r.a.ag())
A.cl(m,r.b.b)
A.aF(m,0,q.b)
A.x(m,"uScene",B.w)
A.aF(m,1,t._.a(r.d.$0()))
A.x(m,"uHistory",B.ah)
A.x(m,"uTime",new A.A(B.e,r.e.$0()))
A.x(m,"uChromaWeight",new A.A(B.e,n.at))
A.x(m,"uTrackingWeight",new A.A(B.e,l))
A.x(m,"uNoiseWeight",new A.A(B.e,n.ay))
A.x(m,"uHeadSwitchWeight",new A.A(B.e,n.ch))
A.x(m,"uDropoutWeight",new A.A(B.e,n.CW))
A.x(m,"uGhostWeight",new A.A(B.e,s))
A.bA(m,r.c)
o.aH(3,0)},
$iac:1,
gD(){return this.a}}
A.i0.prototype={}
A.le.prototype={
ga8(){return"world"},
aj(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.cA,A.e([new A.O(this.e,B.j)],t.C),!1))},
ai(a){var s=this,r=s.a.av(new A.bk("safeWorld",s.b,s.c,B.jd,B.v,B.hV)),q=s.e
return A.e([new A.m3(new A.b7("worldOpaqueTransparent",A.e([new A.O(q,B.j)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
$iam:1}
A.m3.prototype={
al(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.c6(j,a.ao(n.d).b)
A.bo(j,n.a.ag())
s=k.a
A.dE(j,B.c6,1,s.c,s.b,s.a)
A.cl(j,n.b.b)
A.x(j,"uViewProjection",new A.A(B.t,new Float32Array(A.a1(l.c.c.a))))
r=k.x
q=r==null?null:r.a
if(q==null)q=B.a3
s=t.n
A.x(j,"uLightDir",new A.A(B.p,new Float32Array(A.a1(A.e([q.a,q.b,q.c],s)))))
p=k.r
A.x(j,"uAmbientColor",new A.A(B.p,new Float32Array(A.a1(A.e([p.a,p.b,p.c],s)))))
A.x(j,"uAmbientIntensity",new A.A(B.e,k.w))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.u)(j),++o)n.fH(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.u)(l),++o)n.fH(m,l[o])},
fH(a,b){var s,r,q,p,o,n=this
if(b instanceof A.eB){s=b.a
n.hc(a,s.gD().c)
A.vU(a,b,!0)
r=n.c.$1(s.gD().a)
A.bA(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.dZ(p,r.d,o,0)
else a.dX(p,0,o)}else if(t.yz.b(b)){q=a.a
A.x(q,"uUseInstances",B.bI)
n.hc(a,b.gD().c)
r=n.c.$1(b.gD().a)
A.bA(q,r.a)
q=r.b
p=r.c
if(q)a.dY(p,r.d,0)
else a.aH(p,0)}else throw A.d(A.z("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).p(0),null))},
hc(a,b){var s=b.ac(),r=a.a
A.x(r,"uModel",new A.A(B.t,new Float32Array(A.a1(s.a))))
A.x(r,"uNormalMatrix",new A.A(B.t,new Float32Array(A.a1(s.eG().a))))},
$iac:1,
gD(){return this.a}}
A.nr.prototype={
ct(a){var s,r,q
a.C()
s=A.a2(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.bn
else q=r===0?B.bl:B.bm
return new A.eH(q,s)},
jJ(a){var s,r=this.ct(a).a
A:{if(B.bn===r){s=B.ke
break A}if(B.bm===r){s=B.kd
break A}s=B.aB
break A}return s}}
A.jV.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.hx.prototype={
v(){return"GpuBufferKind."+this.b}}
A.jX.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.jY.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jU.prototype={}
A.jW.prototype={}
A.ey.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.hz.prototype={}
A.hy.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.eN.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.i5.prototype={
p(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.d0.prototype={
v(){return"UniformType."+this.b}}
A.A.prototype={}
A.fm.prototype={
v(){return"ClearMask."+this.b}}
A.jF.prototype={
aH(a,b){var s=this.a
if(s.b!==B.h)A.k(A.m(u.k))
s.a.drawArrays(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bE(a,1)},
dX(a,b,c){var s=this.a
if(s.b!==B.h)A.k(A.m(u.k))
s.a.drawArraysInstanced(A.c(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bE(a,c)},
dY(a,b,c){var s,r,q=this.a
if(q.b!==B.h)A.k(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bE(a,1)},
dZ(a,b,c,d){var s,r,q=this.a
if(q.b!==B.h)A.k(A.m(u.k))
s=v.G
r=A.c(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.c(s.WebGL2RenderingContext.UNSIGNED_INT):A.c(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.af(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bE(a,c)},
$iBx:1}
A.kB.prototype={
jd(a){var s=this.b.h(0,a)
if(s==null)throw A.d(A.m("resource is not in candidate: "+a))
return s}}
A.ou.prototype={
gn(){var s=this.c
if(s==null)throw A.d(A.m("GPU resource adapter is not initialized"))
return s},
br(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.lb(s.b)
r.b.br()
r.c=null
r.e=!0},
fD(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=t.N,a=t._,a0=A.q(b,a),a1=A.e([],t.C1)
try{l=a2.a
k=l.$ti
j=k.i("n(1)")
k=k.i("J<1>")
s=new A.J(l,j.a(new A.ov()),k)
for(i=s,h=J.Q(i.a),i=new A.S(h,i.b,i.$ti.i("S<1>")),g=this.a;i.m();){r=h.gn()
q=A.Da(g,this.le(r,a3))
J.hh(a1,q)
J.bL(a0,r,q)}f=A.K(new A.J(l,j.a(new A.ow()),k),k.i("p.E"))
B.a.Y(f)
p=f
for(l=p,k=l.length,e=0;e<l.length;l.length===k||(0,A.u)(l),++e){o=l[e]
n=A.Ai(J.B1(o,11))
j=J.aH(a0,"sceneColor")
j.toString
J.bL(a0,o,j)}b=A.b5(a0,b,a)
return b}catch(d){for(b=a1,l=A.G(b).i("i2<1>"),b=new A.i2(b,l),b=new A.aS(b,b.gt(0),l.i("aS<a6.E>")),k=this.a,j=t.V,l=l.i("a6.E");b.m();){i=b.d
m=i==null?l.a(i):i
c=j.a(a.a(m).a)
A.wz(k,c.a,c.b,c.c,c.d,c.e,c.f,c.r)}throw d}},
le(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.hz(512,512,1,B.aU,!0)
if(a==="sceneDepth")return new A.hz(o,n,1,B.aU,!0)
s=B.b.T(a,"ssao")||B.b.T(a,"bloomBlur")||B.b.T(a,"dofBlur")
r=s?(o+1)/2|0:o
q=s?(n+1)/2|0:n
p=a==="sceneColor"||B.b.T(a,"sceneColor#")
return new A.hz(r,q,1,p?B.cx:B.hb,p)},
lb(a){var s,r,q,p,o,n=A.kg(t.mf.a(a).gaD(),t._)
for(n=A.iw(n,n.r,A.r(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.wz(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.ov.prototype={
$1(a){return!B.b.T(A.v(a),"sceneColor#")},
$S:3}
A.ow.prototype={
$1(a){return B.b.T(A.v(a),"sceneColor#")},
$S:3}
A.fR.prototype={
v(){return"_SlotState."+this.b}}
A.ed.prototype={
sb1(a){this.c=this.$ti.i("1?").a(a)}}
A.cX.prototype={
aF(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.f(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.ed(B.aJ,n.i("ed<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.f(n,q)
p=n[q];++p.a
p.b=B.mN
p.sb1(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
c6(a){return this.aF(a,null)},
a1(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.d(A.dY(B.cE,a))
r=this.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dY(B.cF,a))
s=q.b
if(s===B.aK||s===B.aJ)throw A.d(A.dY(B.az,a))},
c7(a){var s,r,q=this.$ti
q.c.a(a)
this.a1(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.f(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
jv(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a1(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.f(r,s)
r[s].sb1(b)},
b6(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.d(A.dY(B.cE,a))
r=p.b
if(!(s>=0&&s<r.length))return A.f(r,s)
q=r[s]
if(q.a!==a.b)throw A.d(A.dY(B.cF,a))
r=q.b
if(r===B.aK||r===B.aJ)throw A.d(A.dY(B.hr,a))
q.b=B.aK
q.sb1(null)
B.a.l(p.c,s);++p.e},
bL(){return new A.cn(this.oa(),this.$ti.i("cn<+(1,2)>"))},
oa(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bL(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.aK||j===B.aJ){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.aU(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.jp.prototype={
v(){return"BlendEquation."+this.b}}
A.eq.prototype={
v(){return"BlendFactor."+this.b}}
A.jB.prototype={
v(){return"CullFace."+this.b}}
A.jD.prototype={
v(){return"DepthFunc."+this.b}}
A.fr.prototype={
f_(a){var s=this
return A.xR(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.b8.prototype={
v(){return"StateField."+this.b}}
A.t2.prototype={
nt(a){var s,r=this.a
if(r==null)return A.hJ(B.iN,t.qL)
s=A.a2(t.qL)
if(r.a!==a.a)s.l(0,B.bA)
if(r.b!==a.b)s.l(0,B.bB)
if(r.c!==a.c)s.l(0,B.bC)
if(r.d!==a.d)s.l(0,B.bD)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.bE)
if(r.r!==a.r)s.l(0,B.bF)
if(r.w!==a.w)s.l(0,B.bG)
if(r.x!==a.x)s.l(0,B.bH)
return s}}
A.dG.prototype={$idr:1}
A.iT.prototype={}
A.iS.prototype={}
A.m2.prototype={}
A.lc.prototype={
kG(a){var s=this,r=A.b(s.a.canvas)
s.c=A.Z(new A.t0(s))
s.d=A.Z(new A.t1(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
jn(){var s,r,q,p,o,n,m,l=this,k=v.G,j=l.bX(A.c(k.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),i=l.bX(A.c(k.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),h=l.bX(A.c(k.WebGL2RenderingContext.MAX_SAMPLES)),g=l.bX(A.c(k.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),f=l.bX(A.c(k.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),e=l.r,d=e.q(0,"EXT_texture_filter_anisotropic")
if(d){s=l.h_(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=e.q(0,"EXT_disjoint_timer_query_webgl2")
l.w=s
q=e.q(0,"EXT_color_buffer_float")
p=e.q(0,"EXT_color_buffer_half_float")
o=e.q(0,"WEBGL_lose_context")
e=l.a
n=A.dc(e.getParameter(A.c(k.WebGL2RenderingContext.RENDERER)))
m=A.dc(e.getParameter(A.c(k.WebGL2RenderingContext.VENDOR)))
k=typeof n=="string"?n:null
return new A.qh("WebGL2",k,typeof m=="string"?m:null,j,i,h,g,f,d,r,s,q,p,o)},
bX(a){var s=A.dc(this.a.getParameter(a))
return typeof s=="number"?B.c.aw(s):0},
h_(a){var s=A.dc(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iBU:1}
A.t0.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.ac},
$S:2}
A.t1.prototype={
$1(a){A.b(a)
this.a.b=B.h},
$S:2}
A.tQ.prototype={
mF(){var s,r=this
if(r.b!==B.h)A.k(A.m(u.k))
s=r.w?A.j(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.dG(new A.m2(s))},
ho(a){var s=a.a
if(!(s instanceof A.m2))throw A.d(A.ap(a,"query","is not a GPU timer query"))
return s}}
A.m1.prototype={}
A.jH.prototype={
B(){var s=this
return A.N(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.jm.prototype={
goh(){var s=this.CW
return new A.av(s,A.r(s).i("av<2>")).bv(0,0,new A.n2(),t.i)},
kn(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.h()
s=j.a
A.j(i.connect(A.b(s.destination)))
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
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.j(r[k].connect(i))
r=j.z
r===$&&A.h()
A.b(r.gain).value=1
q=j.Q
q===$&&A.h()
A.b(q.gain).value=0.35
A.j(o.connect(r))
A.j(n.connect(r))
A.j(p.connect(r))
p=j.as
p===$&&A.h()
A.j(r.connect(p))
A.j(p.connect(q))
A.j(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k2!==$&&A.L()
j.k2=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k3!==$&&A.L()
j.k3=p
A.j(q.connect(p))
A.j(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.j(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.k4!==$&&A.L()
j.k4=q
i=A.b(s.createChannelMerger(2))
j.ok!==$&&A.L()
j.ok=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p1!==$&&A.L()
j.p1=r
A.j(p.connect(q))
A.j(i.connect(A.b(s.destination)))
j.fp()},
fp(){var s,r=this,q=r.k4
q===$&&A.h()
q.disconnect()
s=r.p1
s===$&&A.h()
s.disconnect()
if(r.p2){A.j(q.connect(s,0))
A.j(q.connect(s,1))
q=r.ok
q===$&&A.h()
A.j(s.connect(q,0,0))
A.j(s.connect(q,0,1))}else{s=r.ok
s===$&&A.h()
A.j(q.connect(s,0,0))
A.j(q.connect(s,1,1))}},
cp(){var s=this.a
if(A.v(s.state)==="suspended")A.b(s.resume())},
hh(a){var s,r,q=this
if(B.b.T(a,"vo-")){s=q.y
s===$&&A.h()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"){s=q.f
s===$&&A.h()
return s}r=B.j6.h(0,a)
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
lr(){var s,r,q,p,o,n,m,l=this.a,k=A.al(l.sampleRate),j=B.c.aL(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ax,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.by()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.f(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
eI(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ax.by()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.j(r.connect(q))
A.j(q.connect(p.hh(a)))
r.onended=A.Z(new A.n4(r,q))
r.start()},
jk(a){return this.eI(a,1)},
jl(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.b(s.createBufferSource())
r.buffer=i
A.b(r.playbackRate).value=d*(0.94+j.ax.by()*0.12)
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
m=h==null?0:h
if(g!=null&&f!=null){A.b(o.frequency).value=f
A.b(n.gain).value=Math.pow(10,g/20)}else{s=j.ay!=null
if(s){s=j.ay
s.toString
l=j.fC(j.b.jj(e,s))
k=l.c
A.b(o.frequency).value=l.b
A.b(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.CW.k(0,o,new A.fT(r,q,n,o,p,e,B.c.F(m,0,1)))
r.onended=A.Z(new A.n3(j,o))
A.j(r.connect(q))
A.j(q.connect(n))
A.j(n.connect(o))
A.j(o.connect(p))
A.j(p.connect(j.hh(a)))
r.start()},
oL(a,b,c,d){return this.jl(a,b,c,1,d,null,null,null)},
fC(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.ai(r,q,p)},
fh(a){var s,r,q,p,o=this
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
A.j(q.connect(p))
r=o.e
r===$&&A.h()
A.j(p.connect(r))
q.onended=A.Z(new A.n5(o,q,p))
q.start()
o.cy=q},
da(a){if(this.p2===a)return
this.p2=a
this.fp()},
jU(a){var s,r,q=this
q.da(a.b===B.bS)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p3=s
q.p4=a.d===B.aL?1:0.55
r=q.c
r===$&&A.h()
r=A.b(r.gain)
s=q.k1?0:q.fr*s
r.value=s
s=q.Q
s===$&&A.h()
A.b(s.gain).value=0.35*q.p4},
bi(a,b,c,d,e,f){var s,r,q=this
q.fr=B.c.F(c==null?q.fr:c,0,1)
q.fx=B.c.F(f==null?q.fx:f,0,1)
q.fy=B.c.F(b==null?q.fy:b,0,1)
q.go=B.c.F(a==null?q.go:a,0,1)
q.id=B.c.F(d==null?q.id:d,0,1)
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
f9(a){var s=null
return this.bi(s,s,s,s,a,s)},
jR(a){var s=null
return this.bi(s,s,a,s,s,s)},
jT(a){var s=null
return this.bi(s,s,s,s,s,a)},
jQ(a){var s=null
return this.bi(s,a,s,s,s,s)},
jP(a){var s=null
return this.bi(a,s,s,s,s,s)},
jS(a){var s=null
return this.bi(s,s,s,a,s,s)},
jO(a){if(this.ay===a)return
this.ay=a
this.bG()},
bG(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ay
if(g==null)return
for(s=i.CW,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.ch
n=o==null?null:o.cq(p,g)
m=n==null?i.fC(h.jj(p,g)):new A.ai(n.c,n.d,n.e)
l=A.al(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.al(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.al(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))
q.r=B.c.F(m.c,0,1)}}}
A.n2.prototype={
$2(a,b){return Math.max(A.bC(a),t.jS.a(b).r)},
$S:60}
A.n1.prototype={
$1(a){return this.jC(t.q.a(a))},
jC(a){var s=0,r=A.bG(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bJ(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.ao(A.b1(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.ao(A.b1(A.b(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.ao(A.b1(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.aj(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$$1,r)},
$S:61}
A.n4.prototype={
$1(a){A.b(a)
this.a.disconnect()
this.b.disconnect()},
$S:2}
A.n3.prototype={
$1(a){var s
A.b(a)
s=this.a.CW.a2(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}return null},
$S:1}
A.n5.prototype={
$1(a){var s,r
A.b(a)
s=this.b
s.disconnect()
this.c.disconnect()
r=this.a
if(r.cy===s){r.cy=null
r.cx=!1}},
$S:2}
A.fT.prototype={}
A.jn.prototype={
v(){return"AudioCategory."+this.b}}
A.mS.prototype={
kp(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.d(B.fT)
if(!B.a.a7(A.e([d.a,d.b,d.c],t.n),new A.mT()))throw A.d(B.fe)}}
A.mT.prototype={
$1(a){return isFinite(A.bC(a))},
$S:5}
A.mA.prototype={
km(a,b){if(this.a.length===0)throw A.d(B.f4)
if(!B.a.a7(A.e([a.a,a.b,a.c],t.n),new A.mB()))throw A.d(B.fj)}}
A.mB.prototype={
$1(a){return isFinite(A.bC(a))},
$S:5}
A.hi.prototype={
C(){var s=t.n
if(B.a.N(A.e([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.mC()))throw A.d(B.fz)
s=B.a.N(A.e([0,0.55,1],s),new A.mD())
if(s)throw A.d(B.fK)},
cq(a,b){this.C()
if(a.ax&&!a.ay&&!a.z)return new A.ai(-1.5,2e4,0)
if(a.ay)return new A.ai(-28,320,1)
return new A.ai(-12,1100,0.55)},
po(a){return this.cq(a,null)}}
A.mC.prototype={
$1(a){return!isFinite(A.bC(a))},
$S:5}
A.mD.prototype={
$1(a){A.bC(a)
return a<0||a>1},
$S:5}
A.mO.prototype={
ko(a){var s=A.r(a)
if(new A.ad(a,s.i("ad<1>")).N(0,new A.mQ())||new A.av(a,s.i("av<2>")).N(0,new A.mR()))throw A.d(B.fR)}}
A.mQ.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.mR.prototype={
$1(a){var s
t.a.a(a)
s=J.aD(a)
return s.gO(a)||s.N(a,new A.mP())},
$S:63}
A.mP.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.w8.prototype={}
A.n_.prototype={}
A.mU.prototype={
kq(a,b,c){var s
for(s=this.b.gaD(),s=s.gu(s);s.m();)s.gn().C()},
jt(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.d(A.m("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.d(A.m("audio listener room missing: "+a0))
r=this.m7(a,a0)
s=t.s
q=A.e([],s)
p=A.e([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.c_
e=f.cq(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.l(q,g)
B.a.l(p,"portal:"+g)}n=!r.b
if(n&&a!==a0){B.a.l(p,"unreachable")
l=-48
k=240
j=1}s=A.e([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.u)(o),++i)s.push(o[i].a)
o=B.c.F(l,-60,0)
m=B.d.F(k,120,2e4)
g=B.c.F(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.a4(p,"; ")
b=t.N
s=A.ah(s,b)
b=A.ah(q,b)
if(!isFinite(g)||g<0||g>1)A.k(B.fJ)
return new A.n_(s,b,o,m,g,n,c)},
cq(a,b){return this.jt(a,b,B.bf)},
m7(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.mx
s=t.N
r=A.N([a0,0],s,t.i)
q=A.N([a0,B.V],s,t.Es)
p=A.aK([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.T,l=p.$ti.c;p.a!==0;){k=A.K(p,l)
B.a.U(k,new A.mV(r))
j=B.a.gP(k)
p.a2(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.ik(s,!0)}i=o.aB(j)
h=A.K(i,i.$ti.i("p.E"))
B.a.U(h,new A.mW())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.u)(h),++g){f=h[g]
e=f.bO(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.c_:d).po(f)
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
p.l(0,e)}}}return B.mw}}
A.mV.prototype={
$2(a,b){var s,r,q
A.v(a)
A.v(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.c.G(r,s)
return q===0?B.b.G(a,b):q},
$S:64}
A.mW.prototype={
$2(a,b){var s=t.T
return B.b.G(s.a(a).a,s.a(b).a)},
$S:65}
A.ik.prototype={}
A.fj.prototype={}
A.np.prototype={
eE(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.a(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.AU().bo(q).gab()
p.d=q
p.c=p.b.bo(q).gab()
p.a=a}}
A.o5.prototype={}
A.kU.prototype={}
A.os.prototype={
li(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.j(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.j(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.j(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.dc(s.getParameter(34047))
if(typeof p=="number")o.c=p},
d_(a,b,c,d,e,f){return this.ob(a,b,c,d,e,f)},
ob(a,b,c,a0,a1,a2){var s=0,r=A.bG(t.uh),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$d_=A.bJ(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.b(A.b(j.document).createElement("img"))
m.src=a
s=7
return A.ao(A.b1(A.b(m.decode()),t.X),$async$d_)
case 7:i=n.a
h=A.j(i.createTexture())
h.toString
l=h
i.activeTexture(A.c(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.c(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.c(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.af(i,"texImage2D",[A.c(j.WebGL2RenderingContext.TEXTURE_2D),0,A.c(j.WebGL2RenderingContext.RGBA8),A.c(j.WebGL2RenderingContext.RGBA),A.c(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
k=a2?A.c(j.WebGL2RenderingContext.REPEAT):A.c(j.WebGL2RenderingContext.CLAMP_TO_EDGE)
i.texParameteri(A.c(j.WebGL2RenderingContext.TEXTURE_2D),A.c(j.WebGL2RenderingContext.TEXTURE_WRAP_S),k)
i.texParameteri(A.c(j.WebGL2RenderingContext.TEXTURE_2D),A.c(j.WebGL2RenderingContext.TEXTURE_WRAP_T),k)
h=A.c(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.c(j.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
f=a0?A.c(j.WebGL2RenderingContext.LINEAR):A.c(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(a1)i.generateMipmap(A.c(j.WebGL2RenderingContext.TEXTURE_2D))
h=A.c(j.WebGL2RenderingContext.TEXTURE_2D)
g=A.c(j.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
if(a1)f=A.c(j.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
else f=a0?A.c(j.WebGL2RenderingContext.LINEAR):A.c(j.WebGL2RenderingContext.NEAREST)
i.texParameteri(h,g,f)
if(c){n.li()
h=n.c
if(h>1)i.texParameterf(A.c(j.WebGL2RenderingContext.TEXTURE_2D),34046,h)}q=l
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
case 6:case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$d_,r)},
d0(a,b,c){var s=!1
return this.oc(t.a.a(a),b,!1)},
oc(b0,b1,b2){var s=0,r=A.bG(t.uh),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d0=A.bJ(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)A:switch(s){case 0:a6=!1
a7=null
a8=!1
p=4
l=A.e([],t.sL)
a=b0.length,a0=v.G,a1=t.X,a2=0
case 7:if(!(a2<b0.length)){s=9
break}k=b0[a2]
j=A.b(A.b(a0.document).createElement("img"))
j.src=k
s=10
return A.ao(A.b1(A.b(j.decode()),a1),$async$d0)
case 10:J.hh(l,j)
case 8:b0.length===a||(0,A.u)(b0),++a2
s=7
break
case 9:if(J.cb(l)===0){a=A.m("texture array needs at least one layer")
throw A.d(a)}i=A.c(J.aH(l,0).width)
h=A.c(J.aH(l,0).height)
if(J.a3(i,0)||J.a3(h,0)||J.w5(l,new A.ot(i,h))){a=A.m("texture-array layers must have matching nonzero dimensions")
throw A.d(a)}g=J.cb(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.ap()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jd(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.ap()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a9()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a9()
n=[1]
s=5
break A}e=B.c.V(a+1,2)}}a=m.a
a7=A.j(a.createTexture())
if(a7==null){a=A.m("could not create texture array")
throw A.d(a)}a.activeTexture(A.c(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.c(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.af(a,"texStorage3D",[A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.c(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array storage failed (WebGL error 0x"+J.w6(d,16)+")")
throw A.d(a)}c=0
for(;;){a1=c
a3=J.cb(l)
if(typeof a1!=="number"){q=a1.d9()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.c(a0.WebGL2RenderingContext.RGBA),A.c(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aH(l,c)])
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.w6(d,16)+")")
throw A.d(a)}a1=c
if(typeof a1!=="number"){q=a1.a9()
n=[1]
s=5
break A}c=a1+1}a.texParameteri(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.c(a0.WebGL2RenderingContext.TEXTURE_WRAP_S),A.c(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a.texParameteri(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.c(a0.WebGL2RenderingContext.TEXTURE_WRAP_T),A.c(a0.WebGL2RenderingContext.CLAMP_TO_EDGE))
a1=A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.c(a0.WebGL2RenderingContext.TEXTURE_MAG_FILTER)
a4=a0.WebGL2RenderingContext
a4=A.c(a4.NEAREST)
a.texParameteri(a1,a3,a4)
if(a6){a.generateMipmap(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY))
d=A.c(a.getError())
if(!J.a3(d,A.c(a0.WebGL2RenderingContext.NO_ERROR))){a=A.m("texture-array mip generation failed (WebGL error 0x"+J.w6(d,16)+")")
throw A.d(a)}a.texParameteri(A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),A.c(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(a0.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR))}else{a1=A.c(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY)
a3=A.c(a0.WebGL2RenderingContext.TEXTURE_MIN_FILTER)
a0=a0.WebGL2RenderingContext
a0=A.c(a0.NEAREST)
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
b=A.aj(a9)
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
a.bindTexture(A.c(v.G.WebGL2RenderingContext.TEXTURE_2D_ARRAY),null)
a.deleteTexture(a7)}s=n.pop()
break
case 6:case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$d0,r)},
hi(a,b){var s=this.a,r=A.j(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a3(A.dc(s.getShaderParameter(r,A.c(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.d(A.ft("shader compile failed: "+A.w(A.zi(s,"getShaderInfoLog",r,t.D))+"\n"+b))
return r},
b0(a,b){var s=v.G,r=this.hi(A.c(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.hi(A.c(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.j(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a3(A.dc(p.getProgramParameter(o,A.c(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.d(A.ft("program link failed: "+A.w(A.zi(p,"getProgramInfoLog",o,t.D))))
return o},
gjb(){var s=A.dc(this.a.getParameter(A.c(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.c.aw(s):0},
eX(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.c(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.c(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.c(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.hX(0,c,B.d.kl(b.byteLength,p))*p
if(B.d.M(o,4)!==0)A.k(A.z("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.AW(B.q.gmI(b),b.byteOffset+0*p,B.d.V(o,4)))}},
dL(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.c(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.c(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.c(n.WebGL2RenderingContext.RGBA8)
q=A.c(n.WebGL2RenderingContext.RGBA)
p=A.c(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.af(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.c(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.c(n.WebGL2RenderingContext.TEXTURE_2D),A.c(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.c(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
dH(a,b,c,d,e){var s,r=this.a,q=A.j(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.af(r,"renderbufferStorageMultisample",[A.c(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.c(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.c(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
hk(a,b,c){var s,r=this.a,q=A.j(r.createTexture())
q.toString
this.dL(q,a,b)
s=v.G
A.af(r,"framebufferTexture2D",[A.c(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.c(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
fF(a,b){var s,r,q=this.a,p=A.j(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.c(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.af(q,"texStorage2D",[A.c(s.WebGL2RenderingContext.TEXTURE_2D),1,A.c(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.c(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.c(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.c(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.c(s.WebGL2RenderingContext.TEXTURE_2D),A.c(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.c(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.af(q,"framebufferTexture2D",[A.c(s.WebGL2RenderingContext.FRAMEBUFFER),A.c(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.c(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
eF(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.j(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.dH(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.dH(a,b,e,A.c(s.WebGL2RenderingContext.RGBA8),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.hk(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.hk(a,b,A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.dH(a,b,e,A.c(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.c(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.fF(a,b)
if(d)h.drawBuffers(A.e([A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.c(h.checkFramebufferStatus(A.c(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.c(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.c(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.d(A.ft("framebuffer incomplete"))
return new A.kU(g,n,o,m,q,p,l,e,a,b)},
ja(a,b,c,d){return this.eF(a,b,c,d,0)},
of(a,b,c,d){return this.eF(a,b,!0,c,d)},
bx(a,b,c){return this.eF(a,b,c,!1,0)},
dK(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.c(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.af(s,"renderbufferStorageMultisample",[A.c(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.c(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
b8(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.dL(q,b,c)
if(p!=null)n.dL(p,b,c)
n.dK(a,a.e,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dK(a,a.f,A.c(r.WebGL2RenderingContext.RGBA8),b,c)
n.dK(a,a.r,A.c(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.fF(b,c)}s.bindFramebuffer(A.c(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
oZ(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.e([A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.c(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.e([A.c(o.WebGL2RenderingContext.NONE),A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.c(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.c(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.af(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.c(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.c(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.e([A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.c(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
mV(a,b,c,d){var s,r,q=v.G,p=(A.c(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.c(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
if(a!=null)s=a.c==null&&a.f==null
else s=!0
if(s){q=this.a
q.clearColor(b,c,d,1)
q.clear(p)
return}s=this.a
r=t.n
s.drawBuffers(A.e([A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(q.WebGL2RenderingContext.NONE)],r))
s.clearColor(b,c,d,1)
s.clear(p)
s.drawBuffers(A.e([A.c(q.WebGL2RenderingContext.NONE),A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))
s.clearColor(0,0,0,1)
s.clear(A.c(q.WebGL2RenderingContext.COLOR_BUFFER_BIT))
s.drawBuffers(A.e([A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.c(q.WebGL2RenderingContext.COLOR_ATTACHMENT1)],r))},
bc(a){var s=this.a,r=A.c(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.c(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.c(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.ot.prototype={
$1(a){A.b(a)
return A.c(a.width)!==this.a||A.c(a.height)!==this.b},
$S:66}
A.k3.prototype={
eW(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].ju(a)}}
A.k5.prototype={
d2(a){if(this.at)return
A.pd(a,"requestPointerLock",t.X)},
f7(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.cg(r,r.r,r.e,A.r(r).i("cg<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a2(q)
for(m=J.Q(o);m.m();){l=m.gn()
if(l.length!==0)n.l(0,l)}s.oW(p,n)}this.ba()},
dg(a){var s,r,q,p,o,n,m=this
if(m.ch.dg(a))for(s=m.CW.aE("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
oM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.b(f.a.navigator).getGamepads())
c=J.Q(t.ik.b(c)?c:new A.aR(c,A.G(c).i("aR<1,a5?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gn()
if(r==null||!A.T(r.connected)||A.v(r.mapping)!=="standard")break A
c=A.v(r.id)
q=A.v(r.mapping)
p=t.n
o=A.e([],p)
n=d.a(r.axes)
n=J.Q(t.dd.b(n)?n:new A.aR(n,A.G(n).i("aR<1,y>")))
while(n.m())o.push(n.gn())
p=A.e([],p)
d=d.a(r.buttons)
d=J.Q(t.nx.b(d)?d:new A.aR(d,A.G(d).i("aR<1,a5>")))
while(d.m()){r=d.gn()
p.push(A.T(r.pressed)?1:A.al(r.value))}s=new A.kR(!0,c,q,o,p)
break}}d=s==null
m=A.De(d?B.lw:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.N(c.aE(e),q.gaq(q))
q=f.r
q.ln(A.r(q).i("n(1)").a(new A.p6(l)),!0)
for(p=l.gu(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.n:g,h)){if(i.eC())n.l(0,h)}else n.l(0,h)}}f.e=A.hJ(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.N(c.aE(e),l.gaq(l))){d=r.a(f.c)
d=!B.a.N(c.aE(e),d.gaq(d))}}if(d)i.eD()},
lH(a){var s=this
A.b(a)
if(A.T(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.v(a.code)))if(B.a.q(s.CW.aE("interact"),A.v(a.code))){if(s.ch.eC())s.d.l(0,A.v(a.code))}else s.d.l(0,A.v(a.code))},
lJ(a){var s,r,q="interact"
A.b(a)
s=this.c
s.a2(0,A.v(a.code))
r=this.CW
if(B.a.q(r.aE(q),A.v(a.code))){t.Q.a(s)
s=!B.a.N(r.aE(q),s.gaq(s))}else s=!1
if(s)this.ch.eD()},
lN(a){var s,r=this
A.b(a)
if(!r.ay)return
s="Mouse"+A.c(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aE("interact"),s)){if(r.ch.eC())r.d.l(0,s)}else r.d.l(0,s)},
lR(a){var s,r="interact",q="Mouse"+A.c(A.b(a).button),p=this.c
p.a2(0,q)
s=this.CW
if(B.a.q(s.aE(r),q)){t.Q.a(p)
p=!B.a.N(s.aE(r),p.gaq(p))}else p=!1
if(p)this.ch.eD()},
lT(a){var s
A.b(a)
if(!this.ay)return
s=A.al(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
lP(a){var s=this
A.b(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.fW(a,"movementX")
s.as=s.as+s.fW(a,"movementY")},
lL(a){var s=this
A.b(a)
s.at=s.b.pointerLockElement!=null
s.as=s.Q=0},
fW(a,b){var s=A.zf(a[b])
if(s==null)s=null
return s==null?0:s},
cG(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.kg(n.c,t.N)
for(r=n.e,r=A.iw(r,r.r,A.r(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.N(n.CW.aE(a),s.gaq(s))},
ba(){var s=this
s.c.H(0)
s.d.H(0)
s.f.H(0)
s.r.L(0,s.e)
s.as=s.Q=0
s.ch.eR()}}
A.p6.prototype={
$1(a){return!this.a.q(0,A.v(a))},
$S:3}
A.p5.prototype={
aE(a){var s=this.a.h(0,a)
return s==null?B.n:s},
oW(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.S(a))return
r=t.N
q=A.a2(r)
for(p=A.iw(b,b.r,A.r(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ah(q,r))},
bd(a,b){var s,r,q
t.Q.a(b)
for(s=this.aE(a),r=s.length,q=0;q<r;++q)if(b.a2(0,s[q]))return!0
return!1}}
A.p9.prototype={
eC(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
eD(){this.c=this.b=!1
this.d=0},
dg(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.c.F(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
eR(){this.c=this.b=!1
this.d=0}}
A.nL.prototype={
dM(a,b){var s,r,q,p,o,n,m,l=this
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
A.px.prototype={
kb(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.dM(b,c)},
mw(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.a(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.c.M(s,6.283185307179586)
r=Math.sin(s)
return new A.a(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.ki.prototype={}
A.hM.prototype={
gfQ(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gI(B.d.az(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.az(s.c,4)))>>>0
r=((r<<5>>>0)+r^s.d)>>>0
r=((r<<5>>>0)+r^B.b.gI(B.c.az(0.5,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.az(0,4)))>>>0
r=((r<<5>>>0)+r^B.b.gI(B.d.az(1,4)))>>>0
return((r<<5>>>0)+r^B.b.gI(B.d.az(1,4)))&2147483647},
a0(a,b){var s,r=this
if(b==null)return!1
if(r!==b){s=!1
if(b instanceof A.hM)if(A.mr(r)===A.mr(b))if(r.a===b.a)if(r.b===b.b)if(r.c===b.c)s=r.d===b.d}else s=!0
return s},
gI(a){return this.gfQ()},
B(){var s=this
return A.N(["atlasLayer",s.a,"emissiveStrength",s.b,"uvScale",s.c,"flags",s.d,"roughness",0.5,"metallic",0,"aoStrength",1,"normalScale",1],t.N,t.K)}}
A.pD.prototype={
ky(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gfQ(),q)}}
A.d_.prototype={
eM(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.q.dc(s,0,l,k)
m.a=s}r=b.ah(0,a).bo(d.ah(0,a)).gab()
q=(B.d.c_(e,16)&255)/255
p=(B.d.c_(e,8)&255)/255
o=(e&255)/255
n=f?0.6000000000000001:0
l=A.i8(m.a,m.b,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=0+g
l=A.i8(m.a,l,b,r,q,p,o,n,1,k,0,0)
m.b=l
j=0+h
l=A.i8(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=l
l=A.i8(m.a,l,a,r,q,p,o,n,1,0,0,0)
m.b=l
k=A.i8(m.a,l,c,r,q,p,o,n,1,k,j,0)
m.b=k
m.b=A.i8(m.a,k,d,r,q,p,o,n,1,0,j,0)},
R(a,b,c,d,e){return this.eM(a,b,c,d,e,!1,1,1)},
eL(a,b,c,d,e,f,g){return this.eM(a,b,c,d,e,!1,f,g)},
b5(a,b,c,d,e,f){return this.eM(a,b,c,d,e,f,1,1)}}
A.qr.prototype={
lu(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.b0(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.L()
m.w=r
q=s.b0(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.L()
m.x=q
p=m.c
o=A.j(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.L()
m.y=o
o=A.j(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.L()
m.z=o
o=A.j(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.L()
m.Q=o
r=A.j(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.L()
m.as=r
r=A.j(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.L()
m.at=r
q=A.j(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.L()
m.ax=q
m.d=s.bx(m.ay,m.ch,!1)
m.e=s.bx(m.ay,m.ch,!1)
m.f=s.bx(m.ay,m.ch,!1)
p=A.j(p.createVertexArray())
p.toString
m.CW!==$&&A.L()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
lv(){var s
try{this.r=this.b.bx(384,216,!1)}catch(s){this.r=null}},
oV(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
if(n==null||m==null||l==null||a.d==null)return null
s=o.c
r=o.w
r===$&&A.h()
s.useProgram(r)
r=v.G
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0))
q=A.c(r.WebGL2RenderingContext.TEXTURE_2D)
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
p.bc(n)
q=o.CW
q===$&&A.h()
s.bindVertexArray(q)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
q=o.x
q===$&&A.h()
s.useProgram(q)
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0))
q=o.at
q===$&&A.h()
s.uniform1i(q,0)
p.bc(l)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.h()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.bc(m)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.c(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.qA.prototype={
ds(a,b,c){var s,r,q
try{r=this.a.b0(b,c)
return r}catch(q){s=A.aj(q)
r=A.ft(a+": "+A.w(s))
throw A.d(r)}}}
A.qt.prototype={}
A.is.prototype={}
A.lT.prototype={}
A.lG.prototype={}
A.lE.prototype={}
A.qu.prototype={
kz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([A.wk(0,0,1,0),A.wk(1,0,1,0),A.wk(2,0,1,0)],t.td),e=t.S
e=new A.pD(f,A.q(e,e))
e.ky(f)
h.ey=e
h.iE=1.9
h.en=h.bu/h.bt
r=J.k9(6,t.dr)
for(q=0;q<6;++q)r[q]=new A.is()
t.lm.a(r)
f=h.b3
e=f.b0("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=smoothstep(uPointLightRadius[i],0.0,distanceToLight);\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float currentDepth=projCoords.z;\n  float bias=max(uShadowBias.x, uShadowBias.y*abs(dFdy(currentDepth)));\n  vec2 texelSize=vec2(1.0/512.0);\n  float shadowSum=0.0;\n  for(int x=-1;x<=1;x++){\n    for(int y=-1;y<=1;y++){\n      float pcfDepth=texture(shadowTex,projCoords.xy+vec2(x,y)*texelSize).r;\n      shadowSum+=(currentDepth-bias>pcfDepth)?0.15:1.0;\n    }\n  }\n  return shadowSum/9.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.b0(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.b0(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.b0(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.b0(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.ar!==$&&A.L()
h.ar=new A.qA(f,e,p,o,n,m)
h.b=t.w7.a(new A.qv(h))
h.h7()
h.h6()
o=h.aS
p=A.j(o.getUniformLocation(m,"uTex"))
h.i6!==$&&A.L()
h.i6=p
p=A.j(o.getUniformLocation(m,"uNoise"))
h.i7!==$&&A.L()
h.i7=p
p=A.j(o.getUniformLocation(m,"uTime"))
h.hN!==$&&A.L()
h.hN=p
p=A.j(o.getUniformLocation(m,"uTexelSize"))
h.hM!==$&&A.L()
h.hM=p
p=A.j(o.getUniformLocation(m,"uNoiseOff"))
h.hO!==$&&A.L()
h.hO=p
p=A.j(o.getUniformLocation(m,"uChromaLuma"))
h.hP!==$&&A.L()
h.hP=p
p=A.j(o.getUniformLocation(m,"uChromaLag"))
h.hQ!==$&&A.L()
h.hQ=p
p=A.j(o.getUniformLocation(m,"uTapeNoise"))
h.hR!==$&&A.L()
h.hR=p
p=A.j(o.getUniformLocation(m,"uHeadSwitch"))
h.hS!==$&&A.L()
h.hS=p
p=A.j(o.getUniformLocation(m,"uTracking"))
h.hT!==$&&A.L()
h.hT=p
p=A.j(o.getUniformLocation(m,"uDropouts"))
h.hU!==$&&A.L()
h.hU=p
p=A.j(o.getUniformLocation(m,"uGhosting"))
h.hV!==$&&A.L()
h.hV=p
p=A.j(o.getUniformLocation(m,"uChromaBlurI"))
h.hW!==$&&A.L()
h.hW=p
p=A.j(o.getUniformLocation(m,"uChromaBlurQ"))
h.hX!==$&&A.L()
h.hX=p
p=A.j(o.getUniformLocation(m,"uChromaLagAmount"))
h.hY!==$&&A.L()
h.hY=p
p=A.j(o.getUniformLocation(m,"uNoiseScale"))
h.hZ!==$&&A.L()
h.hZ=p
p=A.j(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.i_!==$&&A.L()
h.i_=p
p=A.j(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.i0!==$&&A.L()
h.i0=p
p=A.j(o.getUniformLocation(m,"uJitterAmount"))
h.i1!==$&&A.L()
h.i1=p
p=A.j(o.getUniformLocation(m,"uJitterFreq"))
h.i2!==$&&A.L()
h.i2=p
p=A.j(o.getUniformLocation(m,"uDropoutRate"))
h.i3!==$&&A.L()
h.i3=p
p=A.j(o.getUniformLocation(m,"uGhostAmount"))
h.i4!==$&&A.L()
h.i4=p
p=A.j(o.getUniformLocation(m,"uGhostOffset"))
h.i5!==$&&A.L()
h.i5=p
p=A.j(o.getUniformLocation(m,"uGhostTarget"))
h.i8!==$&&A.L()
h.i8=p
m=A.j(o.getUniformLocation(m,"uHasGhost"))
h.i9!==$&&A.L()
h.i9=m
m=A.j(o.getUniformLocation(n,"uTex"))
h.ep!==$&&A.L()
h.ep=m
m=A.j(o.getUniformLocation(n,"uDepth"))
h.eq!==$&&A.L()
h.eq=m
m=A.j(o.getUniformLocation(n,"uFocusDistance"))
h.er!==$&&A.L()
h.er=m
m=A.j(o.getUniformLocation(n,"uDofBlurScale"))
h.es!==$&&A.L()
h.es=m
m=A.j(o.getUniformLocation(n,"uBlurRadius"))
h.eu!==$&&A.L()
h.eu=m
m=A.j(o.getUniformLocation(n,"uDofStrength"))
h.ev!==$&&A.L()
h.ev=m
n=A.j(o.getUniformLocation(n,"uTexel"))
h.ew!==$&&A.L()
h.ew=n
n=A.T(A.b(A.b(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.cb!==$&&A.L()
h.cb=n
h.sj8(16777215)
n=new A.rm(o,f,A.e([],t.qy),A.e([],t.sj),A.e([],t.h),A.e([],t.fv))
m=n.c=f.b0("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.j(o.getUniformLocation(m,"uLightProj"))
n.e=A.j(o.getUniformLocation(m,"uModel"))
h.ex!==$&&A.L()
h.ex=n
n=new A.qr(f,o)
n.lu()
n.lv()
h.cS!==$&&A.L()
h.cS=n
n=f.a
m=A.j(n.createBuffer())
m.toString
h.e0!==$&&A.L()
h.e0=m
p=A.j(n.createBuffer())
p.toString
h.e1!==$&&A.L()
h.e1=p
n=A.j(n.createBuffer())
n.toString
h.e2!==$&&A.L()
h.e2=n
e=A.j(o.createVertexArray())
e.toString
h.e3!==$&&A.L()
h.e3=e
l=A.j(o.createVertexArray())
l.toString
h.e4!==$&&A.L()
h.e4=l
k=A.j(o.createVertexArray())
k.toString
h.e5!==$&&A.L()
h.e5=k
j=A.j(o.createVertexArray())
j.toString
h.e6!==$&&A.L()
h.e6=j
o.bindVertexArray(e)
h.dm(m)
o.bindVertexArray(l)
h.dm(p)
o.bindVertexArray(k)
h.dm(n)
o.bindVertexArray(null)
try{h.cX=f.ja(384,216,!0,!0)}catch(i){h.cX=null}s=4<f.gjb()?4:f.gjb()
e=s
if(typeof e!=="number")return e.ap()
if(e>1)try{h.ca=f.of(h.bt,h.bu,!0,s)}catch(i){h.ca=null}try{h.bs=f.ja(h.bt,h.bu,!0,!0)}catch(i){h.ca=h.bs=null}if(h.bs!=null)try{h.cU=f.bx(h.gcA(),h.gcz(),!1)
h.cV=f.bx(h.gcA(),h.gcz(),!1)
h.cW=f.bx(h.bt,h.bu,!1)}catch(i){h.cW=h.cV=h.cU=null}},
gcA(){var s=B.d.V(this.bt,4)
return s<1?1:s},
gcz(){var s=B.d.V(this.bu,4)
return s<1?1:s},
aW(a){return this.od(t.G.a(a))},
od(a){var s=0,r=A.bG(t.H),q=this,p,o,n,m,l,k,j
var $async$aW=A.bJ(function(b,c){if(b===1)return A.bD(c,r)
for(;;)switch(s){case 0:p=new A.I(a,A.r(a).i("I<1,2>")).gu(0),o=q.b3
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.cV.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.ao(o.d_(k,l,!1,!1,!1,m==="grime"),$async$aW)
case 4:if(c!=null)q.fL(m,l)
s=2
break
case 3:p=t.Ai
j=A.K(new A.cG(new A.U(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.oI.a(new A.qw(a)),t.jT),p),p.i("p.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.ao(o.d0(j,12,!1),$async$aW)
case 7:q.cR=c
case 6:return A.bE(null,r)}})
return A.bF($async$aW,r)},
bQ(){var s=0,r=A.bG(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bQ=A.bJ(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.q(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.ao(A.b1(A.b(A.b(g.window).fetch("shaders/"+A.w(m))),f),$async$bQ)
case 13:l=a3
if(!A.T(l.ok)){i=A.ft("HTTP "+A.w(A.xk(l,"status",t.S)))
throw A.d(i)}a=J
a0=n
a1=m
s=14
return A.ao(A.b1(A.b(l.text()),i),$async$bQ)
case 14:a.bL(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.aj(c)
i=A.ft("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.d(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.m_(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.aj(b)
A.b(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$bQ,r)},
m_(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.ar
q===$&&A.h()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.ds("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.ds("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.ds("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.h7()
i.h6()
q=i.hJ
q=A.K(q,A.r(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.u)(q),++k){s=q[k]
o=B.cV.h(0,s)
o.toString
i.fL(s,o)}A.b(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.aj(j)
A.b(v.G.console).error("shader recompile failed: "+A.w(r))}},
h6(){var s=this,r=s.aS,q=s.ar
q===$&&A.h()
s.iF=A.j(r.getUniformLocation(q.c,"uTex"))
s.iG=A.j(r.getUniformLocation(q.c,"uTime"))
s.iH=A.j(r.getUniformLocation(q.c,"uFlash"))
s.iI=A.j(r.getUniformLocation(q.c,"uVignette"))
s.iJ=A.j(r.getUniformLocation(q.c,"uGrain"))
s.iK=A.j(r.getUniformLocation(q.c,"uDesat"))
s.iL=A.j(r.getUniformLocation(q.c,"uBloom"))
s.iM=A.j(r.getUniformLocation(q.c,"uBloomStrength"))
s.iT=A.j(r.getUniformLocation(q.c,"uNoiseOff"))
s.iW=A.j(r.getUniformLocation(q.c,"uLutMix"))
s.iP=A.j(r.getUniformLocation(q.c,"uDepth"))
s.iQ=A.j(r.getUniformLocation(q.c,"uDepthViz"))
s.hK=A.j(r.getUniformLocation(q.c,"uSSAO"))
s.hL=A.j(r.getUniformLocation(q.c,"uSSAOStrength"))
s.iR=A.j(r.getUniformLocation(q.c,"uNoise"))
s.iS=A.j(r.getUniformLocation(q.c,"uNoiseOn"))
s.iU=A.j(r.getUniformLocation(q.c,"uLut"))
s.iV=A.j(r.getUniformLocation(q.c,"uLutOn"))
s.iN=A.j(r.getUniformLocation(q.d,"uTex"))
s.eo=A.j(r.getUniformLocation(q.d,"uDir"))
s.iO=A.j(r.getUniformLocation(q.c,"uBlur"))},
fL(a,b){var s,r,q,p=this
p.hJ.l(0,a)
switch(a){case"bluenoise":s=p.ar
s===$&&A.h()
s=s.c
r=p.iR
r===$&&A.h()
q=p.iS
q===$&&A.h()
p.bZ(s,r,q,b)
break
case"lut-gothic":s=p.ar
s===$&&A.h()
s=s.c
r=p.iU
r===$&&A.h()
q=p.iV
q===$&&A.h()
p.bZ(s,r,q,b)
break
case"grime":s=p.ar
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.bZ(s,r,q,b)
break
case"glass":s=p.ar
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.bZ(s,r,q,b)
break
case"soft":s=p.ar
s===$&&A.h()
s=s.b
r=p.ce
r===$&&A.h()
q=p.is
q===$&&A.h()
p.bZ(s,r,q,b)
break}},
bZ(a,b,c,d){var s=this.aS
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sj8(a){var s=A.v3(a)
this.ij=s.a
this.ik=s.b
this.il=s.c},
cN(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.d.M(a1,14)!==0)throw A.d(A.z("static mesh needs a multiple of 14 floats, got "+a1,null))
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
f[l]=l}a1=b.aS
i=A.j(a1.createVertexArray())
i.toString
e=A.j(a1.createBuffer())
e.toString
d=A.j(a1.createBuffer())
d.toString
a1.bindVertexArray(i)
c=v.G
a1.bindBuffer(A.c(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
a1.bufferData(A.c(c.WebGL2RenderingContext.ARRAY_BUFFER),a2,A.c(c.WebGL2RenderingContext.STATIC_DRAW))
b.a.bindBuffer(A.c(c.WebGL2RenderingContext.ARRAY_BUFFER),e)
b.fq(56)
a1.bindBuffer(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.c(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.c(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.nM++
b.ea.k(0,a1,new A.lT(e,d,i,s,s,a3))
return a1},
nC(a){var s,r,q,p=this,o=p.ea.h(0,a)
if(o==null)return
p.fY()
s=p.iq
r=p.ir
if(s!==r)p.hb(r)
s=p.aS
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.em
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.c(q.WebGL2RenderingContext.TRIANGLES),r,A.c(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.c(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.cc},
nV(a){var s,r=this.ea.a2(0,a)
if(r==null)return
s=this.aS
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
fY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.eb)return
c.eb=!0
s=c.aS
r=c.ar
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.io
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.ee
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.ef
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.eg
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.iE)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.en)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.ia?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.eh/255*0.34,c.ei/255*0.34,c.ej/255*0.34)
q=c.fx
q===$&&A.h()
r=c.ii
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.ij,c.ik,c.il)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.im)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.6)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.ed.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.ed
l=m.length
if(n<l){if(!(n<l))return A.f(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],0)
continue}j=A.v3(k.b)
m=c.cb
m===$&&A.h()
i=m?1:1+(A.vV(c.ek*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.f(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.f(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.f(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.f(o,n)
s.uniform1f(o[n],k.d*i)}r=c.cb
r===$&&A.h()
q=r?1:1+(A.vV(c.ek*2.5,40503)*2-1)*0
c.nJ=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.ic?1:0
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
q=c.ib
h=q?384:0
g=q?216:0
q=c.e7
p=q.a
if(p===B.bw){f=B.c.F(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.it
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.ex
r===$&&A.h()
q=c.ix
q===$&&A.h()
s.uniform1f(q,0)
q=c.iy
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.iu
q===$&&A.h()
if(q!=null)r.d7(0)
q=c.iv
q===$&&A.h()
if(q!=null)r.d7(1)
q=c.iw
q===$&&A.h()
if(q!=null)r.d7(2)
r.d8(0)
r.d8(1)
r.d8(2)
r=c.iz
r===$&&A.h()
if(c.cR==null)q=0
else{c.ey===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.cR!=null){r=v.G
s.activeTexture(A.c(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.c(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.cR)
r=c.el
r===$&&A.h()
s.uniform1i(r,12)}r=c.iD
q=c.iC
p=c.iB
o=c.iA
n=0
for(;;){m=c.ey
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
if(m!=null)s.uniform1i(m,d.d);++n}c.hb(c.ir)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.em
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.c(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.c(r.WebGL2RenderingContext.BLEND))},
hb(a){var s
this.iq=a
s=this.dx
s===$&&A.h()
this.aS.uniformMatrix4fv(s,!1,a.a)},
b7(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.bt=a
j.bu=b
j.en=b/a
s=j.cS
s===$&&A.h()
r=B.d.V(a,2)
s.ay=r
q=B.d.V(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.b8(p,r,q)
r=s.e
if(r!=null)s.b.b8(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.b8(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.b8(r,384,216)
o=j.bs
n=j.ca
m=j.cU
l=j.cV
k=j.cW
if(o!=null)j.b3.b8(o,a,b)
if(n!=null)j.b3.b8(n,a,b)
if(m!=null)j.b3.b8(m,j.gcA(),j.gcz())
if(l!=null)j.b3.b8(l,j.gcA(),j.gcz())
if(k!=null)j.b3.b8(k,a,b)},
mc(a){var s,r,q,p,o,n,m
for(s=this.ig,r=this.ie,q=1;q<a;++q){if(!(q<800))return A.f(s,q)
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
mb(a){var s,r,q,p,o,n,m,l
for(s=this.ih,r=this.ec,q=1;q<a;++q){if(!(q<4000))return A.f(s,q)
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
nS(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.e7=b4
s=b2.cd
r=0
if(s>0){for(s=b2.ih,q=0;p=b2.cd,q<p;++q)B.a.k(s,q,q)
b2.mb(p)
for(p=b2.ec,o=b2.e8,n=0;n<b2.cd;++n){if(!(n<4000))return A.f(s,n)
m=s[n]
if(!(m<p.length))return A.f(p,m)
l=p[m]
r=A.zG(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.ec,p=b2.e8,q=0;q<b2.cd;++q){if(!(q<s.length))return A.f(s,q)
l=s[q]
r=A.zG(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.cd=0
for(s=b2.ig,q=0;p=b2.cY,q<p;++q)B.a.k(s,q,q)
b2.mc(p)
for(p=b2.nK,o=b2.ie,k=0,n=0;n<b2.cY;++n){if(!(n<800))return A.f(s,n)
m=s[n]
if(!(m<o.length))return A.f(o,m)
j=o[m]
i=A.v3(0)
m=j.b
h=b2.eg
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.ef
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
e=[new A.a(a-d,a1-c,a2-e),new A.a(g-d,f-c,h-e),new A.a(g+d,f+c,h+e),new A.a(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.ee
k=A.zO(p,k,a3,a4,a5,a6,new A.a(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.cY=0
s=b2.b3
o=b2.e0
o===$&&A.h()
s.eX(o,b2.e8,r)
o=b2.e1
o===$&&A.h()
s.eX(o,p,k)
b2.fY()
p=b2.aS
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.e3
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.d.V(r,14));++b2.cc
p.depthMask(!1)
p.enable(A.c(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.c(o.WebGL2RenderingContext.SRC_ALPHA),A.c(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.e4
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,B.d.V(k,14));++b2.cc
m=b2.e9
if(m>0){h=b2.e2
h===$&&A.h()
s.eX(h,b2.nL,m)
p.blendFunc(A.c(o.WebGL2RenderingContext.ONE),A.c(o.WebGL2RenderingContext.ONE))
m=b2.e5
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,b2.e9/14|0);++b2.cc}m=b2.cX
if(m!=null){a7=b2.bs
if(a7!=null)s.oZ(m,a7)}a8=b2.bs
if(a8==null)return
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
m=b2.e6
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.cU
a4=b2.cV
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.ar
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
g=b2.iN
g===$&&A.h()
p.uniform1i(g,0)
s.bc(a4)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.eo
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.bc(a3)
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.eo,0,1/a4.y)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.cW
if(b2.cT>0&&a6!=null){s.bc(a6)
g=b2.ar
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.ep
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.eq
g===$&&A.h()
p.uniform1i(g,7)
g=b2.er
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.es
g===$&&A.h()
p.uniform1f(g,1)
g=b2.eu
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.ev
g===$&&A.h()
p.uniform1f(g,b2.cT)
g=b2.ew
g===$&&A.h()
p.uniform2f(g,1/b2.bt,1/b2.bu)
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.cS
g===$&&A.h()
b0=g.oV(a8,0.5)
s.bc(null)
s=b2.ar
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE1))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.iL
g===$&&A.h()
p.uniform1i(g,1)
g=b2.iM
g===$&&A.h()
s=h?0:0.38
p.uniform1f(g,s)
s=b2.iO
s===$&&A.h()
b2.cb===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.iP
s===$&&A.h()
p.uniform1i(s,7)
s=b2.iQ
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.c(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.hK
s===$&&A.h()
p.uniform1i(s,11)
s=b2.hL
s===$&&A.h()
p.uniform1f(s,0.28)
p.activeTexture(A.c(o.WebGL2RenderingContext.TEXTURE0))
s=A.c(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.cT>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.iF
h===$&&A.h()
p.uniform1i(h,0)
h=b2.ek+=b3;++b2.ip
s=b2.iG
s===$&&A.h()
p.uniform1f(s,h)
h=b2.iT
h===$&&A.h()
s=b2.ip
p.uniform2f(h,B.d.M(s*13,64),B.d.M(s*29,64))
s=b2.iH
s===$&&A.h()
p.uniform1f(s,0)
s=b2.iI
s===$&&A.h()
p.uniform1f(s,0.18)
s=b2.iJ
s===$&&A.h()
p.uniform1f(s,0.015)
s=b2.iK
s===$&&A.h()
p.uniform1f(s,0.06)
s=b2.e7
if(s.a===B.ad)b1=0*(1-s.b/1)
else b1=0
s=b2.iW
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.c(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.c(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.c(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.qv.prototype={
$0(){var s=this.a.ar
s===$&&A.h()
return s.b},
$S:67}
A.qw.prototype={
$1(a){return this.a.h(0,A.v(a))},
$S:44}
A.t4.prototype={
gmp(){var s=this.b
s===$&&A.h()
return s},
h7(){var s,r,q,p,o,n,m=this,l=m.mq(),k=m.a
m.c=A.c(k.getAttribLocation(l,"aPos"))
m.d=A.c(k.getAttribLocation(l,"aColor"))
m.e=A.c(k.getAttribLocation(l,"aAlpha"))
m.f=A.c(k.getAttribLocation(l,"aNormal"))
m.r=A.c(k.getAttribLocation(l,"aUv"))
A.c(k.getAttribLocation(l,"aModelRow0"))
A.c(k.getAttribLocation(l,"aModelRow1"))
A.c(k.getAttribLocation(l,"aModelRow2"))
A.c(k.getAttribLocation(l,"aModelRow3"))
A.c(k.getAttribLocation(l,"aMaterialTint"))
m.as=A.j(k.getUniformLocation(l,"uEye"))
m.at=A.j(k.getUniformLocation(l,"uFwd"))
m.ax=A.j(k.getUniformLocation(l,"uUp"))
m.ay=A.j(k.getUniformLocation(l,"uRight"))
m.ch=A.j(k.getUniformLocation(l,"uScale"))
m.CW=A.j(k.getUniformLocation(l,"uAspect"))
m.cx=A.j(k.getUniformLocation(l,"uDepthNear"))
m.cy=A.j(k.getUniformLocation(l,"uDepthFar"))
m.db=A.j(k.getUniformLocation(l,"uAffineTexture"))
m.dx=A.j(k.getUniformLocation(l,"uModel"))
m.dy=A.j(k.getUniformLocation(l,"uInstanced"))
m.fr=A.j(k.getUniformLocation(l,"uFog"))
m.fx=A.j(k.getUniformLocation(l,"uLight"))
m.fy=A.j(k.getUniformLocation(l,"uLightColor"))
m.go=A.j(k.getUniformLocation(l,"uFogStart"))
m.id=A.j(k.getUniformLocation(l,"uFogEnd"))
m.k1=A.j(k.getUniformLocation(l,"uAmbient"))
m.k2=A.j(k.getUniformLocation(l,"uDiffuse"))
m.k3=A.j(k.getUniformLocation(l,"uPointLightCount"))
s=m.k4
B.a.H(s)
r=m.ok
B.a.H(r)
q=m.p1
B.a.H(q)
p=m.p2
B.a.H(p)
for(o=0;o<4;++o){n=""+o
B.a.l(s,A.j(k.getUniformLocation(l,"uPointLightPos["+n+"]")))
B.a.l(r,A.j(k.getUniformLocation(l,"uPointLightColor["+n+"]")))
B.a.l(q,A.j(k.getUniformLocation(l,"uPointLightRadius["+n+"]")))
B.a.l(p,A.j(k.getUniformLocation(l,"uPointLightIntensity["+n+"]")))}m.p3=A.j(k.getUniformLocation(l,"uFlicker"))
m.p4=A.j(k.getUniformLocation(l,"uBloomThreshold"))
m.R8=A.j(k.getUniformLocation(l,"uColorQuantize"))
m.RG=A.j(k.getUniformLocation(l,"uWall"))
m.rx=A.j(k.getUniformLocation(l,"uWallOn"))
m.ry=A.j(k.getUniformLocation(l,"uWallMid"))
m.to=A.j(k.getUniformLocation(l,"uWallAmt"))
m.x1=A.j(k.getUniformLocation(l,"uWallScale"))
m.x2=A.j(k.getUniformLocation(l,"uGlass"))
m.xr=A.j(k.getUniformLocation(l,"uGlassOn"))
m.y1=A.j(k.getUniformLocation(l,"uGlassGain"))
m.y2=A.j(k.getUniformLocation(l,"uGlassFog"))
m.ce=A.j(k.getUniformLocation(l,"uSoft"))
m.is=A.j(k.getUniformLocation(l,"uSoftOn"))
m.it=A.j(k.getUniformLocation(l,"uInternal"))
m.iu=A.j(k.getUniformLocation(l,"uLightProj0"))
m.iv=A.j(k.getUniformLocation(l,"uLightProj1"))
m.iw=A.j(k.getUniformLocation(l,"uLightProj2"))
m.nN=A.j(k.getUniformLocation(l,"uShadow0"))
m.nO=A.j(k.getUniformLocation(l,"uShadow1"))
m.nP=A.j(k.getUniformLocation(l,"uShadow2"))
m.ix=A.j(k.getUniformLocation(l,"uShadowCasters"))
m.el=A.j(k.getUniformLocation(l,"uMaterialAlbedo"))
m.em=A.j(k.getUniformLocation(l,"uStaticMaterial"))
m.iy=A.j(k.getUniformLocation(l,"uShadowBias"))
m.iz=A.j(k.getUniformLocation(l,"uMaterialCount"))
s=m.iA
B.a.H(s)
r=m.iB
B.a.H(r)
q=m.iC
B.a.H(q)
p=m.iD
B.a.H(p)
for(o=0;o<32;++o){n=""+o
B.a.l(s,A.j(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.l(r,A.j(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.l(q,A.j(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.l(p,A.j(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.el,12)},
dm(a){this.a.bindBuffer(A.c(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.fq(56)},
fq(a){var s=this,r=s.c
r===$&&A.h()
s.c0(r,3,a,0)
r=s.f
r===$&&A.h()
s.c0(r,3,a,12)
r=s.d
r===$&&A.h()
s.c0(r,4,a,24)
r=s.e
r===$&&A.h()
s.c0(r,1,a,40)
r=s.r
r===$&&A.h()
s.c0(r,3,a,44)},
c0(a,b,c,d){var s=this.a
A.af(s,"vertexAttribPointer",[a,b,A.c(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
mq(){return this.gmp().$0()}}
A.rm.prototype={
d7(a){return null},
d8(a){return null}}
A.a.prototype={
a9(a,b){return new A.a(this.a+b.a,this.b+b.b,this.c+b.c)},
ah(a,b){return new A.a(this.a-b.a,this.b-b.b,this.c-b.c)},
a5(a,b){return new A.a(this.a*b,this.b*b,this.c*b)},
c8(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bo(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.a(s*r-q*p,q*o-n*r,n*p-s*o)},
gt(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gab(){var s=this,r=s.gt(0)
return r<1e-9?new A.a(0,0,0):new A.a(s.a/r,s.b/r,s.c/r)}}
A.kR.prototype={}
A.lf.prototype={}
A.ni.prototype={
pw(a){var s,r,q,p,o,n=B.k.ak(a.B(),null)
this.a.hG(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.aC(s.getItem("quarantine.save.active"))
q=A.aC(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
oP(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.aC(s.getItem("quarantine.save.active"))
q=A.aC(s.getItem("quarantine.save.previous"))
p=this.fE(r,a)
if(p!=null)return new A.eM(p,null)
o=this.fE(q,a)
if(o!=null)return new A.eM(o,"recovered previous save")
if(r==null)return B.kV
return B.kU}catch(n){return B.kT}},
fE(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.hG(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.aj(q) instanceof A.F)return null
else throw q}}}
A.jJ.prototype={
kt(a,b,c,d,e){if(this.a.length===0)throw A.d(B.fH)
if(this.b<0)throw A.d(B.ff)},
B(){var s,r=this,q=r.d
q=q==null?null:A.ah(q,t.i)
s=t.z
return A.b5(A.N(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cc.prototype={
v(){return"EndingKind."+this.b}}
A.nV.prototype={}
A.fs.prototype={
B(){var s=t.N
return A.N(["kind",this.a.b],s,s)}}
A.nY.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:69}
A.bp.prototype={}
A.ky.prototype={
B(){var s,r=this,q=t.N,p=A.q(q,t.z)
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
o5(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.ah(0,new A.a(0,1.3499999999999999,0))
return!new A.jt(s,s.a9(0,new A.a(0,1.2000000000000002,0))).j6(a,r)}}
A.qb.prototype={
B(){return A.mb(this.a)}}
A.fG.prototype={
B(){return A.N(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.qG.prototype={
hG(a){var s,r,q,p,o,n,m,l=B.k.aG(a,null),k=t.f
if(!k.b(l))throw A.d(B.fS)
s=t.N
r=t.z
q=A.aM(l,s,r)
p=q.h(0,"version")
if(A.aL(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.a7("unsupported save version "+A.w(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.fn)
k=A.aM(n,s,r)
return A.yp(A.aM(m,s,r),k,2)}}
A.eM.prototype={}
A.ex.prototype={
v(){return"GameSessionEventType."+this.b}}
A.jS.prototype={}
A.oh.prototype={}
A.og.prototype={
gaa(){var s=this.d
return new A.oh(s.a,s.b)},
geK(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.N(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.N(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.N(["entryCount",m.e.b.a],k,t.S)
p=A.xZ(m.c).B()
o=m.r
n=o.c
return new A.qb(A.mb(A.N(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.N(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.B()],k,t.z)))},
mz(a,b){if(!B.a.N(a.f,new A.oi(b)))return!1
this.z.my(a,b)
return!0},
nW(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.r(s).i("av<2>")
q=A.K(new A.av(s,r),r.i("p.E"))
B.a.U(q,new A.oj())
if(q.length===0)return null
s=A.G(q)
r=s.i("J<1>")
p=A.K(new A.J(q,s.i("n(1)").a(new A.ok()),r),r.i("p.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dS(a),r=t.sU,s=new A.aS(s,s.gt(0),r.i("aS<W.E>")),r=r.i("W.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.M(n,o.length)]
s=l.c
k=new A.cM(a,l.a,s.length-1,B.a.gW(s).p(0))
j.k(0,a,k)
return k},
mv(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.d(A.ap(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.cJ(B.h1)}if(n<a)this.cJ(B.h2)},
ke(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.df(a)&&s.kd(b)},
oQ(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.dL){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
ka(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.Bu(j,A.ah(i.d,h).length)
if(a===B.dy)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.G(r)
A.Bt(j,new A.J(r,q.i("n(1)").a(new A.ol(k)),q.i("J<1>")).gt(0))
r=k.f
q=r.b
if(B.a.q(B.hZ,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.c.aL(j.a/1*3)
B.a.l(r.r,new A.fI(q.a,a,b))
m=r.a
A.BF(m,q.a,n,k.b,A.ah(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.jW(B.iE)
s.r.mX(o,c)
l=B.c.aL(j.b/1*6)
if(l>0)r.df(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.av(i,A.r(i).i("av<2>")).N(0,new A.om())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.cJ(B.h4)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.cJ(B.h3)},
cJ(a){var s=this;++s.y
B.a.l(s.w,new A.jS())
B.a.l(s.x,A.Bv(A.Et(a),s.b,s.y-1))}}
A.oi.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:13}
A.oj.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:14}
A.ok.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:20}
A.ol.prototype={
$1(a){t.U.a(a)
return a.e.length!==0&&!new A.rn().k7(this.a.c,a.a)},
$S:73}
A.om.prototype={
$1(a){return t.g.a(a).e},
$S:20}
A.n6.prototype={
eY(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.d(A.m("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.d(A.m("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.d(A.m("authored/runtime room or portal count mismatch"))
for(r=t.e,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.d(A.m("authored room missing at runtime: "+n))
l=o.b
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" origin.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" origin.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" origin.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.c
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.f(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.k(A.m(n+" size.x mismatch: "+A.w(g)+" != "+A.w(j)))
if(1>=h)return A.f(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.k(A.m(n+" size.y mismatch: "+A.w(j)+" != "+A.w(i)))
if(2>=h)return A.f(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.k(A.m(n+" size.z mismatch: "+A.w(l)+" != "+A.w(k)))
l=o.d
k=l.length
j=m.e
if(k!==j.length)throw A.d(A.m("window count mismatch for "+n))
for(n=A.G(j),i=n.i("n(1)"),n=n.i("J<1>"),f=0;f<l.length;l.length===k||(0,A.u)(l),++f){e=l[f]
d=A.bZ(new A.J(j,i.a(new A.nb(e)),n),r)
if(d==null)throw A.d(A.m("authored window missing: "+e.a))
h=e.b
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.k(A.m(c+" offset mismatch: "+A.w(h)+" != "+A.w(g)))
h=e.d
g=d.e
if(Math.abs(h-g)>0.0001)A.k(A.m(c+a+A.w(h)+" != "+A.w(g)))
h=e.e
g=d.f
if(Math.abs(h-g)>0.0001)A.k(A.m(c+a0+A.w(h)+" != "+A.w(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.u)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.d(A.m("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.d(A.m("portal endpoints mismatch for "+q))
n=o.d
l=m.w
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a+A.w(n)+" != "+A.w(l)))
n=o.e
l=m.x
if(Math.abs(n-l)>0.0001)A.k(A.m(q+a0+A.w(n)+" != "+A.w(l)))
if(o.f!=m.at)throw A.d(A.m("door model mismatch for "+q))}a1=b.f
s=a2.d
if(a1.length!==s.length||B.a.gaO(a1).b!==B.a.gaO(s).b)throw A.d(A.m("stair manifest mismatch"))}}
A.n7.prototype={
$1(a){return A.Bb(a,this.a)},
$S:74}
A.n8.prototype={
$1(a){var s=this.a,r=A.mj(a,"portal"),q=A.ej(r,"id"),p=A.ej(r,"a"),o=A.ej(r,"b"),n=A.j7(r,"width"),m=A.j7(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.v(r.h(0,"doorKit")):null
return new A.fc(q,p,o,n*s,m*s,l)},
$S:75}
A.n9.prototype={
$1(a){var s=A.mj(a,"stair")
A.ej(s,"id")
return new A.fe(A.ej(s,"portalId"))},
$S:76}
A.na.prototype={
$1(a){return typeof a=="string"?a:A.j4("exterior cell")},
$S:77}
A.nb.prototype={
$1(a){return t.e.a(a).a===this.a.a},
$S:15}
A.fd.prototype={}
A.nc.prototype={
$1(a){var s=this.a,r=A.mj(a,"window"),q=A.ej(r,"id"),p=A.j7(r,"offset")
A.j7(r,"sill")
return new A.ff(q,p*s,A.j7(r,"width")*s,A.j7(r,"height")*s)},
$S:79}
A.ff.prototype={}
A.fc.prototype={}
A.fe.prototype={}
A.v8.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.jt.prototype={
pf(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.G(s)
q=new A.J(s,r.i("n(1)").a(new A.ns(e)),r.i("J<1>"))
p=!q.gu(0).m()?null:q.gP(0)
if(p==null){n.d=null
return}if(!(n.cI(b,p.f)&&a==="hall"))o=n.cI(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.lg(p,B.c.F(d,0,1))},
oi(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.fV(f,c,d)
s=g.lj(a,b,c,d)
if(s!=null){g.d=s
return g.fV(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.c.mP(Math.sqrt(r*r+q*q)/0.08))
o=d.a5(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.hq(a,n,m,new A.a(q,0,0))
l=l||j.b
i=g.jm(a,n)
n=i==null?n:i
h=g.hq(a,n,j.a,new A.a(0,0,r))
l=l||h.b
m=h.a
i=g.jm(a,n)
n=i==null?n:i}g.cL(m)
return new A.kk(m,n)},
lj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.cI(c,l.f)&&n
j=q&&this.cI(c,l.r)&&o
if(k||j)return new A.lg(l,k?0:1)}return null},
fV(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.ah(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.c.F(a.b+o/p,0,1)
n=A.yC(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.cL(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.kk(n,k)},
cI(a,b){var s=a.ah(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
hq(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.im(c,!1)
s=c.a9(0,d)
this.cL(s)
if(this.j6(a,b)){this.cL(c)
return new A.im(c,!0)}return new A.im(s,!1)},
cL(a){var s=a.ah(0,new A.a(0,1.3499999999999999,0))
this.a=s
this.b=s.a9(0,new A.a(0,1.2000000000000002,0))},
j6(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.aI(m)
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
return!this.me(a,m,s)},
jm(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aI(k)
for(r=k.a,q=a.aB(r),p=J.Q(q.a),q=new A.S(p,q.b,q.$ti.i("S<1>"));q.m();){o=p.gn()
n=o.bO(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hu(k,o,s)&&this.l8(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
me(a,b,c){var s,r,q
for(s=a.aB(b.a),r=J.Q(s.a),s=new A.S(r,s.b,s.$ti.i("S<1>"));s.m();){q=r.gn()
if(q.ax&&!q.ay&&!q.z&&this.hu(b,q,c))return!0}return!1},
hu(a,b,c){var s,r,q,p=a.a,o=b.aJ(p),n=b.af(p)
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
l8(a,b,c){var s,r=this
switch(b.aJ(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
smD(a){this.a=t.a7.a(a)}}
A.ns.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:81}
A.kk.prototype={}
A.im.prototype={}
A.lg.prototype={}
A.hB.prototype={}
A.oK.prototype={
mX(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.f(B.N,r)
s=B.N[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
k8(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.c}return r},
k9(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.f(B.N,q)
p=B.N[q]
if(p.b===a)r+=p.d}return r},
B(){return A.N(["landedCount",this.b],t.N,t.z)}}
A.qC.prototype={
kB(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.L()
o.c=new A.k2(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.u)(n),++q){p=n[q]
r.k(0,p.a,o.fs(p))}},
d1(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.u)(r),++o)p.nV(r[o])
s.k(0,a,n.fs(m))},
fs(a){var s=A.A8(this.a,a),r=this.b,q=A.e([r.cN(s.a,1),r.cN(s.b,2),r.cN(s.c,0)],t.t),p=s.d
if(!B.q.gO(p))q.push(r.cN(p,0))
return q},
jF(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.P
s=l.a
r=A.aK([s],t.N)
for(n=n.aB(s),q=J.Q(n.a),n=new A.S(q,n.b,n.$ti.i("S<1>"));n.m();){p=q.gn()
o=p.bO(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.l(0,o)}return r},
nw(a,b){var s,r,q,p,o=this,n=o.jF(a),m=o.b,l=o.c
l===$&&A.h()
l=t.ba.a(l.jy(n,b))
s=t.A_
m.ed=l.length<=4?A.ah(l,s):A.ah(A.ib(l,0,A.ek(4,"count",t.S),A.G(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gn())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p)m.nC(r[p])}}}
A.a0.prototype={}
A.jM.prototype={
go8(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a7(A.e([r,q,p,o,n,m],t.n),new A.o_())&&o>=r&&n>=q&&m>=p}}
A.o_.prototype={
$1(a){return isFinite(A.bC(a))},
$S:5}
A.k1.prototype={
C(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.M(s,3)!==0}else s=!0
if(s)throw A.d(A.z("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.d(A.z("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.go8())throw A.d(A.z("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.u)(l),++r){p=l[r]
if(B.a.N(A.e([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.oM()))throw A.d(A.z("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.d(A.z("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.d(A.z("QHMX index "+o+" exceeds vertex count",m))}}}
A.oM.prototype={
$1(a){return!isFinite(A.bC(a))},
$S:5}
A.oL.prototype={
A(a,b,c,d,e,f,g){var s=this
s.bD(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bD(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bD(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bD(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bD(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bD(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a0(a,b,c,m,n,o,0,0,p),r=new A.a0(g,h,i,m,n,o,1,1,p)
this.ae(s,new A.a0(d,e,f,m,n,o,1,0,p),r)
this.ae(s,r,new A.a0(j,k,l,m,n,o,0,1,p))},
ae(a,b,c){var s=this,r=s.b
B.a.l(r,s.dB(a))
B.a.l(r,s.dB(b))
B.a.l(r,s.dB(c))},
dB(a){var s,r,q=B.a.a4(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.d(A.m("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
mJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.d(A.m("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.k1(A.ah(g,t.hl),new Uint16Array(A.a1(this.b)),new A.jM(s,r,q,p,o,n))
h.C()
return h}}
A.jN.prototype={}
A.w_.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.ae.q(0,s))A.k(A.m("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:82}
A.v1.prototype={
$2(a,b){var s=t.Ez
return B.b.G(s.a(a).a,s.a(b).a)},
$S:83}
A.d7.prototype={
pv(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.q(k,k),i=A.e([],t.Dl)
k=t.t
s=A.e([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.u)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.f(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.iz(A.GJ(new A.k1(i,new Uint16Array(A.a1(s)),A.Ec(i))),l.a,l.b,l.c,A.e([],k))}}
A.iz.prototype={}
A.eu.prototype={
v(){return"ExteriorCameraBand."+this.b}}
A.jO.prototype={
mQ(a){var s
switch(a.a){case 0:s=A.aK(["front","street","opposite-house"],t.N)
break
case 1:s=A.aK(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aK(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aK(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aK(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
mR(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cd
break A}if("kitchen"===a||"cellar"===a){s=B.eN
break A}if("bathroom"===a){s=B.eO
break A}if("spare-room"===a){s=B.eP
break A}s=B.cd
break A}return this.mQ(s)},
iX(a,b,c,d){d.i("p<0>").a(b)
t.Q.a(c)
return new A.cn(this.nR(d.i("i(0)").a(a),b,c,d),d.i("cn<0>"))},
nR(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$iX(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a7(0,B.ae.gaq(B.ae)))throw A.d(A.z("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.cg(l,l.r,l.e,r.$ti.i("cg<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.ae.q(0,j))throw A.d(A.m("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.ec.prototype={
c3(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.uG.prototype={
$1(a){var s=this
return t.xT.a(a).c3(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:32}
A.uF.prototype={
$1(a){return t.xT.a(a).c3(0,(this.a+this.b)*0.5,this.c)},
$S:32}
A.dl.prototype={
v(){return"FocusKind."+this.b}}
A.dV.prototype={}
A.qD.prototype={}
A.tU.prototype={
$1(a){var s,r,q=this
t.wV.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:85}
A.tT.prototype={
$1(a){return t.e.a(a).b===this.a},
$S:15}
A.v_.prototype={
$1(a){return B.d.F(B.c.aL(a*this.a),0,255)},
$S:39}
A.eb.prototype={}
A.fS.prototype={}
A.oI.prototype={
kM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.oZ(1.5),a4=this.b,a5=A.as(a4,!0,t.U)
B.a.H(a4)
s=A.e([],t.eY)
for(r=a5.length,q=t.b4,p=t.yH,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.u)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.u)(i),++g){f=i[g]
j.push(new A.ba(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.u)(h),++g){d=h[g]
i.push(new A.bh(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.u)(e),++g){b=e[g]
h.push(new A.bj(b.a,b.b,a3.$1(b.c)))}s.push(new A.aV(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.L(a4,s)
a4=this.c
a=A.as(a4,!0,t.T)
B.a.H(a4)
s=A.e([],t.qP)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.bu(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.L(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.k(a4,a1,new A.dA(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
kN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=new A.p_(),a7=this.b,a8=A.as(a7,!0,t.U)
B.a.H(a7)
s=A.e([],t.eY)
for(r=a8.length,q=t.cO,p=t.b4,o=t.yH,n=t.E,m=0;m<a8.length;a8.length===r||(0,A.u)(a8),++m){l=a8[m]
k=a6.$1(l.c)
j=a6.$1(l.d)
i=A.e([],n)
for(h=l.e,g=h.length,f=0;f<h.length;h.length===g||(0,A.u)(h),++f){e=h[f]
i.push(new A.ba(e.a,e.b,e.c*1.5,e.d*1.5,e.e*1.5,e.f*1.5,e.r,e.w))}h=A.e([],o)
for(g=l.r,d=g.length,f=0;f<g.length;g.length===d||(0,A.u)(g),++f){c=g[f]
h.push(new A.bh(c.a,c.b,a6.$1(c.c),c.d,c.e,c.f))}g=A.e([],p)
for(d=l.w,b=d.length,f=0;f<d.length;d.length===b||(0,A.u)(d),++f){a=d[f]
g.push(new A.bj(a.a,a.b,a6.$1(a.c)))}d=A.e([],q)
for(b=l.Q,a0=b.length,f=0;f<b.length;b.length===a0||(0,A.u)(b),++f){a1=b[f]
d.push(new A.dj(a1.a,a1.b*1.5))}s.push(new A.aV(l.a,l.b,k,j,i,l.f,h,g,l.x,l.y,l.z,d))}B.a.L(a7,s)
a7=this.c
a2=A.as(a7,!0,t.T)
B.a.H(a7)
s=A.e([],t.qP)
for(r=a2.length,m=0;m<r;++m){a3=a2[m]
s.push(new A.bu(a3.a,a3.b,a3.c,a3.d,a3.e,a3.f*1.5,a3.r*1.5,a3.w*1.5,a3.x*1.5,!1,a3.z,a3.Q,a3.as,a3.at,a3.ax,a3.ay))}B.a.L(a7,s)
for(a7=this.d,s=t.n,a4=0;a4<a7.length;++a4){a5=a7[a4]
r=A.e([],s)
for(q=a5.c,p=q.length,m=0;m<q.length;q.length===p||(0,A.u)(q),++m)r.push(q[m]*1.5)
B.a.k(a7,a4,new A.dA(a5.a,a5.b,r,a6.$1(a5.d),a6.$1(a5.e),a6.$1(a5.f),a6.$1(a5.r)))}},
lq(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
n=o.a
if(q.S(n))throw A.d(A.m("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){m=s[p]
n=m.a
if(q.S(n))throw A.d(A.m("duplicate portal "+n))
q.k(0,n,m)}},
mn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g&&f&&e)throw A.d(A.m("3D room overlap: "+n.a+" and "+m.a))}},
ml(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.q(t.N,t.xM)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.u)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.u)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.ht(o,i,h,g,f,e)
a5.fn(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.u)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.d(A.m(l+" references invalid portal "+d))
i=c.aJ(l)
h=c.af(l)
g=c.w
f=c.x
a5.ht(o,i,h,g,0,f)
a5.fn(a6,l,c.aJ(l),c.af(l),c.af(l)+g,0,f)}}for(s=new A.I(a6,a6.$ti.i("I<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.ca(a)
r.U(a,new A.p0())
for(a0=0;a0<r.gt(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gt(a);++a2){a3=r.h(a,a0).a[0]+0.000001<r.h(a,a2).a[1]&&r.h(a,a2).a[0]+0.000001<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]+0.000001<r.h(a,a2).a[3]&&r.h(a,a2).a[2]+0.000001<r.h(a,a0).a[3]
if(a3&&a4)throw A.d(A.m("overlapping apertures on "+b.a))}}},
ht(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.l||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.d(A.m("aperture outside "+a.a+" "+b.b+" wall"))},
fn(a,b,c,d,e,f,g){J.hh(t.aD.a(a).co(b+":"+c.b,new A.oY()),new A.iH([d,e,f,g]))},
aI(a){var s=a.c,r=this.r,q=a.a
return new A.a(s.a+r.k8(q),s.b+r.k9(q),s.c)},
aB(a){var s=this.c,r=A.G(s)
return new A.J(s,r.i("n(1)").a(new A.p1(a)),r.i("J<1>"))},
oN(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.d(A.ap(a,"roomId","not a portal endpoint"))
r=this.aI(o)
q=b.af(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aJ(a).a){case 0:s=new A.a(s.a+q,p,s.c)
break
case 2:s=new A.a(s.a+q,p,s.c+r.c)
break
case 1:s=new A.a(s.a+r.a,p,s.c+q)
break
case 3:s=new A.a(s.a,p,s.c+q)
break
default:s=null}return s},
gpu(){return B.a.bv(this.b,0,new A.p2(),t.S)},
jj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.V
s=A.e([new A.aU(a,B.V)],t.nR)
r=A.aK([a],t.N)
for(q=this.e,p=t.T;s.length!==0;){o=B.a.oU(s,0)
n=o.a
m=o.b
for(l=this.aB(n),k=J.Q(l.a),l=new A.S(k,l.b,l.$ti.i("S<1>"));l.m();){j=k.gn()
i=j.bO(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.K(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.K(m,p)
h.push(j)
B.a.l(s,new A.aU(i,h))}}}return B.V}}
A.oZ.prototype={
$1(a){var s=this.a
return new A.a(a.a*s,a.b,a.c*s)},
$S:34}
A.p_.prototype={
$1(a){return a.a5(0,1.5)},
$S:34}
A.p0.prototype={
$2(a,b){var s=t.nz
s.a(a)
s.a(b)
return B.c.G(a.a[0],b.a[0])},
$S:88}
A.oY.prototype={
$0(){return A.e([],t.wx)},
$S:89}
A.p1.prototype={
$1(a){var s
t.T.a(a)
s=this.a
return a.b===s||a.c===s},
$S:90}
A.p2.prototype={
$2(a,b){return A.c(a)+t.U.a(b).e.length},
$S:91}
A.nZ.prototype={}
A.rn.prototype={
k7(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a7(s,new A.ro())}else s=!1
return s}}
A.ro.prototype={
$1(a){return t.e.a(a).w},
$S:15}
A.oN.prototype={
oK(a){var s=this.e,r=A.G(s)
return new A.J(s,r.i("n(1)").a(new A.oQ(a)),r.i("J<1>"))},
cO(a){return B.a.aT(this.d,new A.oO(a),new A.oP(a))},
eY(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.d(A.m("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.d(A.m("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.d(A.m("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a2(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.u)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.d(A.m("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.d(A.m("invalid bounds for inventory asset "+m))}j=A.a2(s)
i=A.a2(s)
h=A.a2(s)
for(s=a6.e,q=s.length,p=a9.e,o=0;o<s.length;s.length===q||(0,A.u)(s),++o){g=s[o]
m=g.a
if(!j.l(0,m))throw A.d(A.m("duplicate inventory placement "+m))
l=g.b
f=p.h(0,l)
if(f==null)throw A.d(A.m(a7+m+" references "+l))
n=a6.cO(g.c)
if(g.x&&g.y!=null){k=g.y
k.toString
e=$.AT()
if(!e.b.test(k))throw A.d(A.m("invalid inventory focusId "+m+": "+k))
if(!h.l(0,k))throw A.d(A.m("duplicate inventory focusId "+k))}k=g.z
if(k<0||!isFinite(k))throw A.d(A.m("invalid clearance for "+m))
e=g.e
if(e!=null&&!i.l(0,l+":"+e))throw A.d(A.m("duplicate inventory socket "+l+":"+e))
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
a4=g.jr(n,a8)
a5=0.43+k
l=-a5
if(!(d-b<l)){k=f.c
l=d+b>k.a+a5||e-a0<l||e+a0>k.c+a5||c+a4.b>k.b+a5||c+a4.a<l}else l=!0
if(l)throw A.d(A.m(a7+m+" escapes "+f.a))}}}
A.oQ.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:92}
A.oO.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:93}
A.oP.prototype={
$0(){return A.k(A.m("inventory asset missing: "+this.a))},
$S:6}
A.cT.prototype={}
A.cw.prototype={
jr(a,b){var s=this.f.c.b*b,r=a.f
return new A.a(r.a.b*s,r.b.b*s,0)}}
A.pc.prototype={}
A.pa.prototype={}
A.v7.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:16}
A.pb.prototype={
B(){var s,r,q,p=A.q(t.N,t.z),o=this.a,n=A.r(o).i("ad<1>")
n=A.K(new A.ad(o,n),n.i("p.E"))
B.a.Y(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.u)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
eT(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.d(B.f0)
s=t.X
r=A.aM(a,s,s)
s=this.a
s.H(0)
for(q=new A.I(r,A.r(r).i("I<1,2>")).gu(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.aL(o)||o<0)throw A.d(B.fg)
s.k(0,n,o)}}}
A.cW.prototype={}
A.k2.prototype={
jy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.ea)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gn())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.u)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.l(s,new A.cW(new A.a(l+g.a,k+g.b,m+g.c),16760952,3.8,2.1*this.m6(j),0.06))}}B.a.U(s,new A.oR(b))
return A.ib(s,0,A.ek(4,"count",t.S),t.A_).bS(0)},
m6(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.oR.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.c.G(a.a.ah(0,s).gt(0),b.a.ah(0,s).gt(0))},
$S:95}
A.hw.prototype={
v(){return"Floor."+this.b}}
A.dU.prototype={
v(){return"Facing."+this.b}}
A.ba.prototype={
sk6(a){this.w=A.T(a)}}
A.bu.prototype={
bO(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aJ(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.d(A.ap(a,"roomId","not an endpoint of "+s.a))},
af(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.d(A.ap(a,"roomId","not an endpoint of "+s.a))}}
A.bh.prototype={}
A.bj.prototype={}
A.dj.prototype={}
A.dA.prototype={}
A.aV.prototype={}
A.oT.prototype={
nF(a){return B.a.aT(this.c,new A.oU(a),new A.oV(a))},
pr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.d(A.m("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.d(A.m("soundscape source changed: "+f))
f=t.N
s=A.a2(f)
f=A.q(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.u)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.d(A.m("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.d(A.m("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.d(A.m("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.d(A.m("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gO(k)||k.gaD().N(0,new A.oW()))throw A.d(A.m("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.d(A.m("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.d(A.m("sound emitter "+l+" escapes "+j.a))}}}
A.oU.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:96}
A.oV.prototype={
$0(){return A.k(A.m("sound emitter missing: "+this.a))},
$S:6}
A.oW.prototype={
$1(a){return B.b.bh(A.v(a)).length===0},
$S:3}
A.cS.prototype={}
A.oJ.prototype={
dN(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.ap(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.iD}q=A.e([],t.Fm)
p=B.c.aU(r)+1
o=B.c.aU(b)
for(n=p;n<=o;++n){m=B.d.M(n,24)
B.a.l(q,new A.eA("tick"))
if(B.d.M(m,3)===0){B.a.l(q,new A.eA("cuckoo"))
B.a.l(q,new A.eA("bell"))}if(B.d.M(m,6)===0)B.a.l(q,new A.eA("chime"))}l.b=b
return q}}
A.eA.prototype={}
A.oS.prototype={
dN(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.d(A.ap(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.iC}q=A.e([],t.vS)
for(p=B.c.aU(r)+1;p<=B.c.aU(b);++p){o=B.d.M(p,24)
n=B.d.M(o,4)
if(n===2)B.a.l(q,B.hu)
if(B.d.M(o,3)===1)B.a.l(q,B.hw)
if(B.d.M(o,8)===5)B.a.l(q,B.hz)
if(B.d.M(o,5)===0)B.a.l(q,B.hv)
if(B.d.M(o,7)===3)B.a.l(q,B.hA)
if(n===1)B.a.l(q,B.hx)
if(B.d.M(o,6)===4)B.a.l(q,B.hy)}m.b=b
return q}}
A.cR.prototype={}
A.v6.prototype={
$1(a){return typeof a!="number"},
$S:16}
A.oX.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.q(m,l)
for(s=n.a,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.N(["open",o.a,"locked",o.b],m,r))}l=A.q(m,l)
for(s=n.c,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.N(["lit",o.a,"examined",o.b],m,r))}return A.N(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a2(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)d.l(0,s[q].a)
r=A.a2(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.u)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.u)(n),++l)r.l(0,n[l].a)
e=A.a2(e)
for(q=0;q<p.length;p.length===n||(0,A.u)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.u)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.x7(new A.ad(o,A.r(o).i("ad<1>")),d)){d=f.b
if(A.x7(new A.ad(d,A.r(d).i("ad<1>")),r)){d=f.c
e=!A.x7(new A.ad(d,A.r(d).i("ad<1>")),e)}else e=n}else e=n
if(e)throw A.d(B.fA)
e=f.d
if(e<0||e>2)A.k(B.f7)
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
A.hU.prototype={
B(){return A.N(["open",this.a,"locked",this.b],t.N,t.y)}}
A.hK.prototype={
B(){return A.N(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.bg.prototype={}
A.nU.prototype={
$1(a){return this.a.q(0,A.v(a))},
$S:3}
A.dX.prototype={
v(){return"Hand."+this.b}}
A.rZ.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.n:s},
fe(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.kf.prototype={
B(){var s,r,q,p=t.N,o=A.q(p,t.D)
for(s=this.a,r=0;r<5;++r){q=B.y[r]
o.k(0,q,s.h(0,q))}return A.N(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
p(a){return new A.U(B.y,t.oI.a(new A.pu(this)),t.jT).a4(0," \xb7 ")}}
A.pt.prototype={
$2(a,b){return new A.P(A.v(a),A.v(b),t.q)},
$S:97}
A.pu.prototype={
$1(a){return this.a.a.h(0,A.v(a))},
$S:44}
A.bX.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.u)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.N(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.pf.prototype={
c2(a){t.G.a(a)
return a.a===5&&B.a.a7(B.y,new A.pm(this,a))},
fo(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.c2(b))return null
s=this.e++
r=new A.bX(s,a,A.e([A.ps(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
dU(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.c2(b))return!1
B.a.l(s.c,A.ps(b,c,B.ay))
return!0},
mu(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.c2(b))return!1
s.r=A.ps(b,0,B.cD)
return!0},
jW(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.H(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.S(p)&&!B.a.q(s,p))B.a.l(s,p)}},
ps(a){var s
if(!this.b.S(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.K(n,A.r(n).c)
B.a.Y(n)
s=A.e([],t.cs)
for(r=q.b,r=new A.ak(r,r.r,r.e,A.r(r).i("ak<2>"));r.m();)s.push(r.d.B())
return A.N(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.pm.prototype={
$1(a){var s
A.v(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.hj.prototype={
v(){return"BackendFallbackReason."+this.b}}
A.nd.prototype={
hI(a,b){if(a.a!==B.a_)return a
return new A.fg(B.br,a.b,a.c,!0,b.c,a.f,a.r,a.w,a.x)}}
A.ne.prototype={
dV(a,b){if(a.a===B.a_&&!a.d)return new A.q6(b,a.B(),B.dn)
return new A.pq(b,a.d,a.e,a.B(),B.dn)},
np(a){return this.dV(a,null)}}
A.fg.prototype={
B(){var s,r=this,q=A.q(t.N,t.X)
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
A.nf.prototype={
ct(a){var s,r,q,p,o=null,n=a==null?o:B.b.bh(a).toLowerCase()
if(n==null||n.length===0)return B.e_
s=n!=="pixeldart"
if(!s||n==="next"||n==="auto"){s=!s||n==="next"
r=n==="next"
q=r?'renderer query "next" is a compatibility alias; use "pixeldart"':o
return new A.fg(B.a_,s,n==="auto",!1,o,!1,o,r,q)}p=n!=="legacy"
s=p?"unknown renderer query":o
return new A.fg(B.br,!1,!1,p,s,p,p?'unsupported renderer query "'+n+'"':o,!1,o)}}
A.pr.prototype={}
A.pq.prototype={
gbq(){var s=this,r=s.b,q=r==null?null:r.gbq()
if(q==null)q=A.qy("legacy",A.e([],t.s),s.c,s.d,"legacy")
r=q.jz(s.e)
return r},
bf(){if(this.f===B.dp)throw A.d(A.m("legacy backend is disposed"))
var s=this.b
if(s!=null)s.bf()
this.f=B.z},
b7(a,b){var s
if(a<=0||b<=0)throw A.d(A.z("legacy surface size must be positive",null))
if(this.f!==B.z)A.k(A.m("legacy backend is not ready"))
s=this.b
if(s!=null)s.b7(a,b)},
b9(a){var s
if(this.f!==B.z)A.k(A.m("legacy backend is not ready"))
B.k.ak(A.N(["backend","legacy","interpolation",0,"facts",A.mb(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.b9(a)},
bw(a){var s
if(this.f!==B.z)A.k(A.m("legacy backend is not ready"))
B.k.ak(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bw(a)}}
A.q7.prototype={}
A.q6.prototype={
gbq(){var s=this.b,r=s==null?null:s.gbq()
if(r==null)r=A.qy("pixeldart",A.e([],t.s),!1,null,"safe")
s=r.jz(this.c)
return s},
bf(){if(this.d===B.dp)throw A.d(A.m("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.bf()
this.d=B.z},
b7(a,b){var s
if(this.d!==B.z)A.k(A.m("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.d(A.z("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.b7(a,b)},
b9(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.d
if(p===B.aC){p=q==null
if(p||!q.gdR()){if(s.d!==B.aC)A.k(A.m("pixeldart backend is not context-lost"))
s.d=B.z
if(!p)q.jo()}p=s.d
if(p===B.aC)return}if(p!==B.z)A.k(A.m(r))
B.k.ak(A.N(["backend","pixeldart","interpolation",0,"facts",A.mb(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gdR()){if(s.d!==B.z)A.k(A.m(r))
s.d=B.aC
q.j9()
return}q.b9(a)}},
bw(a){var s
if(this.d!==B.z)A.k(A.m("pixeldart backend is not ready"))
B.k.ak(A.N(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.bw(a)}}
A.q8.prototype={
mN(a,b){var s,r,q,p,o,n,m
a.C()
s=B.c1.ct(a)
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
o=A.K(o,A.r(o).c)
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
A.kw.prototype={
v(){return"PixeldartQualityTier."+this.b}}
A.q9.prototype={
B(){var s=this
return A.N(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.i_.prototype={
v(){return"RendererBackendKind."+this.b}}
A.eK.prototype={
v(){return"RendererBackendState."+this.b}}
A.qz.prototype={}
A.kH.prototype={}
A.qx.prototype={
kA(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.d(A.z("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.d(A.z("renderer provenance values must be non-empty",null))}},
jz(a){var s=this
return A.ym(s.a,s.c,s.d,s.y,s.z,s.f,s.w,s.b,s.x,s.e,s.r,t.oZ.a(a))},
B(){var s,r,q,p=this,o=A.q(t.N,t.z)
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
A.cF.prototype={
v(){return"ShaderDebugMode."+this.b},
gnv(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.dz.prototype={
v(){return"ShaderTuningCategory."+this.b}}
A.e5.prototype={
giZ(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.c.az(q.y,1)
else{r=q.y
if(s>=0.01)return B.c.az(r,2)
else return B.c.az(r,3)}}}
A.rk.prototype={
gcj(){var s,r,q,p=this.b
if(!(p>=0&&p<5))return A.f(B.bc,p)
s=B.bc[p]
p=this.f
p===$&&A.h()
r=A.G(p)
q=r.i("J<1>")
p=A.K(new A.J(p,r.i("n(1)").a(new A.rl(s)),q),q.i("p.E"))
return p},
ghF(){var s,r=this.gcj(),q=r.length
if(q===0)return null
s=B.d.F(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.f(r,s)
return r[s]},
oY(){var s,r,q,p,o
if(this.b===4)this.e=B.bz
else for(s=this.gcj(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}}}
A.rl.prototype={
$1(a){return t.wU.a(a).d===this.a},
$S:98}
A.bQ.prototype={
v(){return"SleepQuality."+this.b}}
A.bx.prototype={
v(){return"SleepLocation."+this.b}}
A.fI.prototype={}
A.nM.prototype={
df(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
kd(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
i.push(A.N(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.N(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.nN.prototype={
$1(a){return t.bG.a(a).b===this.a},
$S:99}
A.nO.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:100}
A.k6.prototype={
v(){return"InteractionType."+this.b}}
A.eT.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.t3.prototype={}
A.eS.prototype={}
A.jy.prototype={}
A.p3.prototype={}
A.p7.prototype={
f3(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.ak(s,s.r,s.e,A.r(s).i("ak<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.U(p,new A.p8())
return p},
mW(a,b){var s,r,q,p,o,n=b.b
if(n.gO(n))return B.mv
s=t.N
r=A.a2(s)
q=A.a2(s)
for(s=n.ga_(),s=s.gu(s),p=a.c;s.m();){o=s.gn()
if(B.a.gW(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.eS(B.aI,r)
s=r.a
o=B.a.gW(p).a
if(s===o.gt(o)){n=n.gt(n)
p=B.a.gW(p).a
p=n===p.gt(p)
n=p}else n=!1
if(n)return new A.eS(B.dO,r)
return new A.eS(B.bM,r)},
lY(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.jy(e,!1,B.mu,null)
s=p.d===c
r=this.mW(p,d)
q.ps(e)
return new A.jy(e,s,r,r.a===B.aI&&s?'The world says "'+d.c+'". The entry says "'+B.a.gW(p.c).p(0)+'".':null)},
nq(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.aI)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.p3(B.a.gW(s.c).p(0)+" but "+A.w(a.f))}}
A.p8.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.G(s.a(b).a,a.a)},
$S:14}
A.cj.prototype={
v(){return"RuptureStep."+this.b}}
A.qE.prototype={}
A.cY.prototype={}
A.qF.prototype={
gff(){var s=B.bg.h(0,this.a)
return s==null?0:s},
kh(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.C)s=q.e
else s=!0
if(s)return B.cO
r=A.wV(b)
s=q.c
B.a.H(s)
B.a.L(s,r)
B.a.H(q.d)
q.a=B.ad
q.b=0
q.e=!1
return A.e([B.et],t.xB)},
dM(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.d(A.z("rupture advance must be a finite non-negative duration",null))
if(l.a===B.C||a===0)return B.cO
s=A.e([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.C))break
A:{q=l.a
p=B.bg.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.a0)l.mi(s)
p=l.b
o=B.bg.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.cY())
if(q===B.a0){l.a=B.C
l.b=0
l.e=!0
B.a.l(s,B.es)}else{p=q.a+1
if(!(p<7))return A.f(B.cM,p)
l.a=B.cM[p]
l.b=0
B.a.l(s,new A.cY())}}}return A.ah(s,t.F3)},
B(){var s=this,r=t.N
return A.N(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ah(s.c,r),"extinguishedMantles",A.ah(s.d,r),"completed",s.e],r,t.z)},
mi(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.F(B.c.aU(l.b/l.gff()*A.ah(s,r).length),0,A.ah(s,r).length)
p=l.d
for(;;){o=A.as(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.as(s,!1,r)
o.$flags=3
n=o
o=A.as(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.f(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.cY())}}}
A.jT.prototype={
gbB(){var s=this.b
if(s<6||s>18)return 0
return B.c.F((s-6)/12,0,1)}}
A.eR.prototype={
B(){var s=this
return A.N(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d],t.N,t.z)}}
A.t_.prototype={
ez(a){var s,r
if(a<1||a>this.b.length)throw A.d(A.aT(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.f(s,r)
return s[r]}}
A.uH.prototype={
$0(){var s,r,q=this.b,p=(this.a^q*73244475)&2147483647
p=(p^p>>>16)*73244475&2147483647
p=(p^p>>>16)&2147483647
s=B.d.M(p,5)===0||B.d.M(p,7)===0
r=s?0.35+B.d.M(p,66)/100:0
return new A.eR(q,s,r,12-(q-1)*0.1)},
$S:101}
A.uP.prototype={
$1(a){var s=B.d.cM(this.a,a)&255
return B.d.F(B.c.aL(s+((B.d.cM(this.b,a)&255)-s)*this.c),0,255)},
$S:39}
A.pK.prototype={
aV(a,b){var s=this.b
if(s.S(a))s=s.h(0,a)===b
else s=!1
return s},
my(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gJ(),q=q.gu(q);q.m();){r=q.gn()
s.k(0,r.a,r.b)}},
B(){var s,r,q,p,o,n,m,l,k=this.a,j=A.r(k).i("I<1,2>")
k=A.K(new A.I(k,j),j.i("p.E"))
B.a.U(k,new A.pM())
j=t.N
k=A.wi(k,j,j)
s=this.b
r=A.r(s).i("I<1,2>")
s=A.K(new A.I(s,r),r.i("p.E"))
B.a.U(s,new A.pN())
s=A.wi(s,j,j)
r=A.q(j,t.P)
q=this.c
p=A.r(q).i("I<1,2>")
q=A.K(new A.I(q,p),p.i("p.E"))
B.a.U(q,new A.pO())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.u)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.N(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.N(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.pM.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:22}
A.pN.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:22}
A.pO.prototype={
$2(a,b){var s=t.gJ
return B.b.G(s.a(a).a,s.a(b).a)},
$S:103}
A.cM.prototype={
B(){var s=this
return A.N(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bs.prototype={
B(){var s=this
return A.N(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.q4.prototype={
f1(){var s="denise.pears",r=A.e([],t.xz),q=this.a
if(q.aV("ashworth.compact","accepted"))B.a.l(r,B.k3)
if(q.aV(s,"taken"))B.a.l(r,B.k7)
else if(q.aV(s,"left"))B.a.l(r,B.k4)
if(q.aV("sylvia.certificate","granted"))B.a.l(r,B.k6)
if(q.aV("residue.coal","cellar"))B.a.l(r,B.k2)
if(q.aV("telegram.08","read"))B.a.l(r,B.k1)
if(q.aV("truth.shawl","home"))B.a.l(r,B.k0)
if(q.aV("sowerby.paraffin","received"))B.a.l(r,B.k5)
if(q.aV("inspector.proclamation","acknowledged"))B.a.l(r,B.k_)
return r},
jE(a){var s=this.f1(),r=A.G(s),q=r.i("J<1>")
s=A.K(new A.J(s,r.i("n(1)").a(new A.q5(a)),q),q.i("p.E"))
return s}}
A.q5.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:36}
A.rs.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.fK(e.a),c=t.N,b=t.P,a=A.q(c,b)
for(s=e.b,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.mo(q,r.b))}s=A.fK(e.r)
q=A.fK(e.w)
p=A.fK(e.x)
o=A.q(c,t.rW)
for(n=e.as,n=new A.I(n,A.r(n).i("I<1,2>")).gu(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.Q(l.b);i.m();){h=i.gn()
j.push(A.N(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.q(c,b)
for(m=e.at,m=new A.I(m,A.r(m).i("I<1,2>")).gu(0);m.m();){g=m.d
n.k(0,g.a,g.b.B())}b=A.q(c,b)
for(m=e.ax,m=new A.I(m,A.r(m).i("I<1,2>")).gu(0);m.m();){f=m.d
b.k(0,f.a,f.b.B())}return A.N(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
mo(a,b){var s,r=A.fK(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.fK(q.bM(0,new A.rt(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gX(s))r.k(0,"_ambient",A.fK(s.bM(0,new A.ru(),t.S,t.z)))
return r}}
A.rt.prototype={
$2(a,b){return new A.P(A.c(a),t.BX.a(b).B(),t.pr)},
$S:105}
A.ru.prototype={
$2(a,b){return new A.P(A.c(a),t.vw.a(b).B(),t.pr)},
$S:106}
A.eQ.prototype={
B(){return A.N(["hour",this.a,"order",this.b],t.N,t.S)}}
A.eP.prototype={
B(){return A.N(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.ii.prototype={
B(){var s=t.N
return A.N(["field",this.a,"value",this.b],s,s)}}
A.lb.prototype={
B(){var s,r,q,p=this,o=A.e([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].B())
return A.N(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.eJ.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gX(s))q.k(0,"effects",s)
return q}}
A.d5.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gX(s))q.k(0,"when",s)
return q}}
A.rv.prototype={
cm(){var s=0,r=A.bG(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$cm=A.bJ(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.ao(A.b1(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$cm)
case 6:n=b
j=t.N
s=7
return A.ao(A.b1(A.b(n.text()),j),$async$cm)
case 7:m=b
l=A.G8(m)
i=J.aH(l,"broadcasts")
i.toString
h=t.P
o.a=h.a(i)
i=J.aH(l,"visitors")
i.toString
o.b=h.a(i)
i=J.aH(l,"vocabulary")
i.toString
o.c=h.a(i)
i=J.aH(l,"documents")
i.toString
h.a(i)
i=J.aH(l,"street")
i.toString
h.a(i)
i=J.aH(l,"unverifiables")
i.toString
o.f=h.a(i)
i=J.aH(l,"nights")
i.toString
h.a(i)
i=J.aH(l,"endings")
i.toString
o.w=h.a(i)
i=J.aH(l,"records")
i.toString
o.x=h.a(i)
i=J.aH(l,"cues")
i.toString
h.a(i)
i=J.aH(l,"claims")
i.toString
o.z=h.a(i)
i=t.f
if(i.b(J.aH(l,"reactions"))){g=J.aH(l,"reactions")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.q(j,t.z)
o.Q=h.a(g)
if(i.b(J.aH(l,"variants"))){g=J.aH(l,"variants")
if(g==null)g=i.a(g)
g=A.aM(g,j,t.z)}else g=A.q(j,t.z)
o.as=h.a(g)
if(i.b(J.aH(l,"residues"))){g=J.aH(l,"residues")
i=g==null?i.a(g):g
j=A.aM(i,j,t.z)}else j=A.q(j,t.z)
o.at=h.a(j)
q=1
s=5
break
case 3:q=2
e=p.pop()
k=A.aj(e)
j=A.w(k)
throw A.d("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bE(null,r)
case 1:return A.bD(p.at(-1),r)}})
return A.bF($async$cm,r)},
jD(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.h(0,B.d.p(a))
if(t.f.b(s)){p=s.gJ().d5(0,new A.rw())
r=p.$ti
q=t.N
return A.wi(new A.cA(p,r.i("P<i,i>(1)").a(new A.rx()),r.i("cA<1,P<i,i>>")),q,q)}return null},
f2(a,b){var s=this.jD(a)
return s==null?null:s.h(0,b)},
jI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.h()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.e([],t.kv)
for(o=J.Q(q),n=t.N;o.m();){m=o.gn()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.q(n,n)
if(f.b(l))for(j=l.gJ(),j=j.gu(j);j.m();){i=j.gn()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.v(i.b))}B.a.l(p,new A.eJ(A.v(m.h(0,"id")),A.v(m.h(0,"label")),A.v(m.h(0,"reply")),A.b5(k,n,n)))}if(p.length<2)return g
return new A.lb(r,a,b,c,d,A.ah(p,t.Y))},
jH(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.p(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.c.aw(p)||o!==B.c.aw(o))return n
return new A.eQ(B.c.aw(p),B.c.aw(o))},
jG(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.h()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.p(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.c.aw(p)||typeof o!="string"||typeof n!="string")return m
return new A.eP(B.c.aw(p),o,n)},
pt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.q(a5,t.ee),a7=A.q(a5,t.tQ),a8=A.q(a5,t.pG),a9=t.a,b0=A.q(a5,t.gt),b1=A.q(a5,t.sy),b2=A.q(a5,t.aS),b3=A.q(a5,a5),b4=a1.b
b4===$&&A.h()
b4=new A.I(b4,A.r(b4).i("I<1,2>")).gu(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.q(a3,a4)
for(o=o.gJ(),o=o.gu(o);o.m();){m=o.gn()
l=m.a
k=typeof l=="string"?A.dv(l,null):null
if(k==null||!q.b(m.b))continue
j=A.q(a5,a5)
for(m=q.a(m.b).gJ(),m=m.gu(m);m.m();){l=m.gn()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.v(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.q(a3,r)
for(m=n.$ti.i("cg<1>"),l=new A.cg(n,n.r,n.e,m);l.m();){i=l.d
g=a1.jH(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.q(a3,s)
for(m=new A.cg(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jG(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.h()
b4=new A.ak(b4,b4.r,b4.e,A.r(b4).i("ak<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jI(A.v(d.h(0,"visitor")),B.c.aw(A.al(d.h(0,"day"))),A.v(d.h(0,"tier")),B.c.aw(A.al(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.h()
b4=new A.ak(b4,b4.r,b4.e,A.r(b4).i("ak<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.q(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gJ(),s=s.gu(s);s.m();){r=s.gn()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.v(r.b))}s=A.v(d.h(0,"id"))
b2.k(0,s,new A.d5(s,A.v(d.h(0,"target")),A.v(d.h(0,a2)),A.b5(b,a5,a5)))}b4=a1.at
b4===$&&A.h()
b4=new A.I(b4,A.r(b4).i("I<1,2>")).gu(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.h()
b4=new A.I(b4,A.r(b4).i("I<1,2>")).gu(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.Q(d);m.m();){a0=m.gn()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.ii(A.v(a0.h(0,"field")),A.v(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.rs(A.q(a3,a4),a6,a7,a8,A.q(a5,a9),A.q(a5,a9),A.q(a3,a9),A.q(a3,a9),A.q(a3,a9),A.q(a5,a9),A.q(a5,a9),A.q(a5,a9),b0,b1,b2,b3)}}
A.rw.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:107}
A.rx.prototype={
$1(a){t.AC.a(a)
return new A.P(A.v(a.a),A.v(a.b),t.q)},
$S:108}
A.jh.prototype={
bJ(a,b,c){var s=B.b.bh(a),r=B.b.bh(c)
if(r.length===0)return""
if(b||this.a===B.bO)return s.length===0?r:s+": "+r
if(this.a===B.bN)return r
return s.length===0?r:s+": "+r},
iY(a,b){return this.bJ(a,!1,b)}}
A.w7.prototype={}
A.cK.prototype={
v(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.dL.prototype={
c4(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.dL(q,p,o,n,m)},
nk(a){var s=null
return this.c4(s,s,s,a,s)},
nn(a){var s=null
return this.c4(s,s,s,s,a)},
ng(a){var s=null
return this.c4(s,s,a,s,s)},
ne(a){var s=null
return this.c4(s,a,s,s,s)},
n_(a){var s=null
return this.c4(a,s,s,s,s)},
B(){var s=this,r=s.f
r=r==null?null:r.b
return A.N(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.mz.prototype={
$1(a){return a==null?null:A.T(a)},
$S:109}
A.mx.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:37}
A.my.prototype={
$0(){return A.k(B.fP)},
$S:6}
A.mK.prototype={
bU(a,b){var s,r=this,q=r.e.iY(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aM(q)
A.c(A.b(v.G.window).setTimeout(A.zr(new A.mM(r)),7000))},
aM(a){var s,r,q=this
if(!q.c||B.b.bh(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.c(A.b(v.G.window).setTimeout(A.zr(new A.mL(q,s)),4200))}}
A.mM.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:111}
A.mL.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:12}
A.ct.prototype={
v(){return"AudioOutputMode."+this.b}}
A.cL.prototype={
v(){return"AudioDynamicRange."+this.b}}
A.dg.prototype={
v(){return"AudioReverbMode."+this.b}}
A.df.prototype={
v(){return"AudioDuckingMode."+this.b}}
A.dM.prototype={
cQ(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.dM(r,q,p,a==null?s.e:a)},
nd(a){return this.cQ(null,null,a,null)},
n4(a){return this.cQ(null,a,null,null)},
ni(a){return this.cQ(null,null,null,a)},
n3(a){return this.cQ(a,null,null,null)},
B(){var s=this
return A.N(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.mX.prototype={
$1$2(a,b,c){return B.a.aT(c.i("p<0>").a(a),new A.mY(b,c),new A.mZ(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:112}
A.mY.prototype={
$1(a){return t.W.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("n(0)")}}
A.mZ.prototype={
$0(){return A.k(A.a7("unsupported audio option: "+A.w(this.a),null,null))},
$S:6}
A.nh.prototype={
eW(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.K.iY(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.nk.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.no.prototype={
$1(a){A.b(a)
return this.a.$1(A.T(this.b.checked))},
$S:1}
A.nn.prototype={
$1(a){var s
A.b(a)
s=A.fD(A.v(this.a.value))
if(s!=null)this.b.$1(s)},
$S:2}
A.nm.prototype={
$1(a){A.v(a)
return a.length!==0&&!B.b.T(a,"brush-state-")},
$S:3}
A.dO.prototype={
v(){return"BrushComponentKind."+this.b}}
A.dP.prototype={
v(){return"BrushComponentState."+this.b}}
A.b3.prototype={
gms(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
C(){var s=this
if(B.b.bh(s.a).length===0||B.b.bh(s.c).length===0)throw A.d(B.fF)
if(s.e===B.bZ&&s.b!==B.bY)throw A.d(B.fh)}}
A.nq.prototype={
c9(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.h()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.cV(o+c,n)
l=new A.cV(s+p,n)
k=s-p
j=new A.cV(k,r-c)
i=new A.cV(k-c,r)
h=new A.cV(q-p,r)
g=new A.cV(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.fJ(A.e([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.fJ(A.e([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
b2(a,b,c,d,e,f,g,h,i){return this.c9(a,b,c,d,e,!0,f,g,h,i)},
nx(a,b,c,d,e,f,g,h,i){return this.c9(a,b,14,c,d,e,f,g,h,i)},
nB(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.h()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.f0()
s.cu(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.by()-0.5)*8
l=s.by()
k=s.by()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
hH(a,b,c,d,e){var s,r,q=this.b
q===$&&A.h()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.fI(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.fI(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.w(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
nz(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.h()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.al(A.b(q.measureText(a.toUpperCase())).width)+70)
this.b2("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
ny(b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="rgba(12, 10, 14, 0.92)",b2="#f5f0e6"
if(!b5.r&&b5.b.length===0&&b5.d.length===0)return
s=Math.min(b4*0.85,780)
r=b4*0.5
q=b3*0.72
b0.b2(b2,2.5,16,b1,140,-0.05,s,r,q)
p=b5.a
if(p==null)p="VISITOR"
o=r-s*0.5
n=o+81
m=q-70
l=m-6
b0.c9(b2,2,6,"#d32f2f",34,!0,-0.12,180,n,l)
k=b0.b
k===$&&A.h()
k.save()
k.fillStyle="#f5f0e6"
k.font='bold 15px "Cinzel", serif'
k.textAlign="center"
k.textBaseline="middle"
k.shadowColor="rgba(0, 0, 0, 0.85)"
k.shadowBlur=4
k.fillText(p.toUpperCase(),n,l)
k.restore()
j=b5.gph()
k.save()
k.fillStyle="#f5f0e6"
k.font='16px "Georgia", serif'
k.textAlign="left"
k.textBaseline="top"
b0.mr(k,j,o+32,m+32,s-64,24)
k.restore()
o=b5.d
i=o.length
if(i!==0){h=Math.min(b4*0.75,480)
g=m-i*46-12
for(m=h*0.5,f=b0.d,e=b5.f,d=b5.e,c=0;c<i;c=a){if(!(c<o.length))return A.f(o,c)
b=o[c]
a=c+1
a0=g+c*46+19
a1=e===c
a2=d===c
a3=!a1
a4=r+(!a3||a2?18:0)
a5=a4-m
B.a.l(f,new A.fl(c,a5,a0-19,h,38))
if(a2)a6="#d32f2f"
else a6=a1?"#1a1820":b1
a7=!a3||a2?"#c49a45":b2
b0.b2(a7,!a3||a2?2.5:1.5,8,a6,38,-0.06,h,a4,a0)
a8=a5+24
a3=!a2
b0.hH(!a3||a1,a,24,a8,a0)
k.save()
a9=!a3||a1?"#ffd54f":b2
k.fillStyle=a9
k.font='bold 15px "Cinzel", serif'
k.textAlign="left"
k.textBaseline="middle"
k.fillText(b,a8+22,a0)
k.restore()}}},
nA(b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2="rgba(12, 10, 14, 0.92)",b3="#d32f2f",b4="#f5f0e6",b5="#c49a45",b6="#1a1820",b7="#8c887e",b8=c1.d
if(b8<=0.001)return
s=Math.sin(b8*3.141592653589793*0.5)
r=Math.min(c0*0.92,860)
q=Math.min(b9*0.88,620)
p=c0+r*0.6
o=p+(c0*0.5-p)*s
n=b9*0.5
b8=b1.b
b8===$&&A.h()
b8.save()
b8.fillStyle="rgba(10, 8, 12, "+A.w(0.75*s)+")"
b8.fillRect(0,0,c0,b9)
b1.b2(b3,3,18,b2,q,-0.025,r,o,n)
b1.nB(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
b1.b2(b4,2,8,b3,42,-0.06,Math.min(r*0.85,560),o,k)
b8.save()
b8.fillStyle="#f5f0e6"
b8.font='bold 16px "Cinzel", serif'
b8.textAlign="center"
b8.textBaseline="middle"
b8.shadowColor="rgba(0, 0, 0, 0.85)"
b8.shadowBlur=4
b8.fillText("\u25c6 SHADER LAB & POST-PROCESSING SUITE \u25c6",o,k)
b8.restore()
j=r-60
i=j/5
h=l+75
for(l=o-j*0.5,j=i-8,g=0;g<5;++g){f=B.bc[g]
e=c1.b===g
d=l+i*(g+0.5)
c=e?b5:b6
b=e?b4:b7
b1.c9(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
default:c=null}b8.save()
a=e?"#0c0a0e":b4
b8.fillStyle=a
b8.font='bold 12px "Cinzel", sans-serif'
b8.textAlign="center"
b8.textBaseline="middle"
b8.fillText(c,d,h)
b8.restore()}a0=h+36
if(c1.b===4){a1=a0+70+20
b1.b2(b5,2.5,10,b6,140,-0.02,r-80,o,a1)
b8.save()
b8.fillStyle="#c49a45"
b8.font='bold 14px "Cinzel", serif'
b8.textAlign="center"
b8.textBaseline="middle"
b8.fillText("ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [\u2190 / \u2192] TO CYCLE):",o,a1-35)
b8.fillStyle="#f5f0e6"
b8.font='bold 22px "Cinzel", serif'
b8.shadowColor="rgba(0, 0, 0, 0.85)"
b8.shadowBlur=6
b8.fillText(c1.e.gnv().toUpperCase(),o,a1+5)
b8.fillStyle="#ffd54f"
b8.font='13px "Georgia", serif'
b8.shadowBlur=0
b8.fillText("Press [A / \u2190] Prev Pass  \u2022  [D / \u2192] Next Pass  \u2022  [R] Disable Diagnostics",o,a1+42)
b8.restore()}else{a2=c1.gcj()
for(a3=r-80,l=a3*0.5,g=0;g<a2.length;++g){a4=a2[g]
e=c1.c===g
a5=a0+g*52+22
a6=o+(e?12:0)
j=e?b6:b2
c=e?b5:b7
b1.c9(c,e?2.2:1,6,j,44,e,-0.02,a3,a6,a5)
if(e)b1.hH(!0,g+1,20,a6-l+20,a5)
b8.save()
a=e?"#ffd54f":b4
b8.fillStyle=a
b8.font='bold 14px "Cinzel", serif'
b8.textAlign="left"
b8.textBaseline="middle"
a7=e?38:18
b8.fillText(a4.b.toUpperCase(),a6-l+a7,a5)
a8=a6+l-20
if(a4.e){a9=a4.z
j=a8-37
c=a9?b3:"#0c0a0e"
b1.nx(a9?b4:b7,1.5,c,24,!1,-0.04,74,j,a5)
b8.fillStyle="#f5f0e6"
b8.font='bold 12px "Cinzel", sans-serif'
b8.textAlign="center"
b8.textBaseline="middle"
b8.fillText(a4.giZ(),j,a5)}else{b8.fillStyle="#0c0a0e"
j=a8-80-80-80
c=a5-4
b8.fillRect(j,c,160,8)
b=a4.f
b0=B.c.F((a4.y-b)/(a4.r-b),0,1)
a=e?b5:b3
b8.fillStyle=a
b=160*b0
b8.fillRect(j,c,b,8)
b8.fillStyle="#f5f0e6"
b8.fillRect(j+b-3,a5-7,6,14)
a=e?"#ffd54f":b4
b8.fillStyle=a
b8.font='bold 13px "Courier New", monospace'
b8.textAlign="right"
b8.textBaseline="middle"
b8.fillText(a4.giZ(),a8,a5)}b8.restore()}}b8.save()
b8.fillStyle="#8c887e"
b8.font='12px "Cinzel", sans-serif'
b8.textAlign="center"
b8.textBaseline="middle"
b8.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust / Toggle  \u2022  [1 - 5] Tabs  \u2022  [R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,n+m-24)
b8.restore()
b8.restore()},
fJ(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.h()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
fI(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.h()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
mr(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.al(A.b(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)}}
A.fo.prototype={
gmH(){var s,r,q,p,o=t.N
o=A.q(o,o)
for(s=this.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
q=r.a
r=r.b
p=J.aD(r)
o.k(0,q,p.gO(r)?"":p.gP(r))}return o},
bI(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.N(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.bC(r)
q=n.h(0,i)
q.toString
A.bC(q)
p=n.h(0,"invertX")
p.toString
A.T(p)
o=n.h(0,"invertY")
o.toString
A.T(o)
m=n.h(0,h)
m.toString
return A.fp(null,a,A.T(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.c(s)
r=n.h(0,j)
r.toString
A.bC(r)
q=n.h(0,i)
q.toString
A.bC(q)
p=n.h(0,"invertX")
p.toString
A.T(p)
o=n.h(0,"invertY")
o.toString
A.T(o)
m=n.h(0,h)
m.toString
A.T(m)
l=k.gmH()
return A.fp(l,null,m,r,p,o,s,q)},
dT(a){var s=null
return this.bI(a,s,s,s,s,s)},
na(a){var s=null
return this.bI(s,s,s,a,s,s)},
nb(a){var s=null
return this.bI(s,s,s,s,a,s)},
n7(a){var s=null
return this.bI(s,a,s,s,s,s)},
n8(a){var s=null
return this.bI(s,s,a,s,s,s)},
no(a){var s=null
return this.bI(s,s,s,s,s,a)},
C(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.d(B.f2)
p=this.r
if(p.gJ().N(0,new A.nD()))throw A.d(B.fI)
if(p.gJ().N(0,new A.nE()))throw A.d(B.fw)
p=p.gaD()
o=A.r(p)
s=o.i("hu<p.E,i>")
r=s.i("J<p.E>")
q=A.K(new A.J(new A.hu(p,o.i("p<i>(p.E)").a(new A.nF()),s),s.i("n(p.E)").a(new A.nG()),r),r.i("p.E"))
if(A.hJ(q,A.G(q).c).a!==q.length)throw A.d(B.f5)},
B(){var s,r,q=this,p=t.N,o=A.q(p,t.a)
for(s=q.r.gJ(),s=s.gu(s);s.m();){r=s.gn()
o.k(0,r.a,A.as(r.b,!0,p))}return A.N(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.nD.prototype={
$1(a){t.yx.a(a)
return J.w5(a.b,new A.nC(a))},
$S:31}
A.nC.prototype={
$1(a){var s
A.v(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.xN(a)
else s=!1
return s},
$S:3}
A.nE.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.w5(a.b,B.ds.gaq(B.ds))},
$S:31}
A.nF.prototype={
$1(a){return t.a.a(a)},
$S:114}
A.nG.prototype={
$1(a){return A.v(a).length!==0},
$S:3}
A.nB.prototype={
$1(a){return typeof a=="string"},
$S:16}
A.dN.prototype={
v(){return"BindingCaptureStatus."+this.b}}
A.ep.prototype={
v(){return"BindingConflictResolution."+this.b}}
A.dh.prototype={}
A.jz.prototype={
dO(a){var s=this
if(!s.a.r.S(a))return new A.dh(B.bV,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.e0},
mO(a){var s,r,q,p=this,o=p.b
if(o==null)return B.aN
if(!A.xN(a)){p.c=p.b=null
return new A.dh(B.bX,B.dt.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gJ()
r=r.gu(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gn()
s=q.a
if(s===o)break A
if(J.xE(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dh(B.aO,a+" is already bound to "+s)}return p.kL(a)},
eS(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.aN
switch(a.a){case 2:m.c=m.e=m.d=null
return B.e1
case 1:s=A.wM(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.x3(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.xg(r,k))
m.a=m.a.dT(s)
break
case 0:s=A.wM(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.gP(r)}r=A.e([k],t.s)
p=s.h(0,l)
p.toString
p=A.ib(p,1,null,A.G(p).c)
o=p.$ti
p=new A.aS(p,p.gt(0),o.i("aS<a6.E>"))
o=o.i("a6.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.xg(r,k)}else{r=s.h(0,j)
r.toString
r=A.x3(A.xg(r,k),q)}s.k(0,j,r)
m.a=m.a.dT(s)
break}m.c=m.e=m.d=null
return B.bT},
kL(a){var s,r,q=this,p=q.b
if(p==null)return B.aN
s=A.wM(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.x3(r,a))
q.a=q.a.dT(s)
q.b=null
return B.bT}}
A.hp.prototype={
kr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.jz(f.w)
s=f.b
s.className=A.v(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.b(s.appendChild(A.nl(a,B.ea,1)))
A.b(s.appendChild(A.D(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.D(a,"div",c,e)
f.fm(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fm(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.dk(a,r,"invertX","Invert horizontal look")
f.dk(a,r,"invertY","Invert vertical look")
f.dk(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.D(a,"div",c,e)
for(p=B.j0.gJ(),p=p.gu(p),o=f.Q;p.m();){n=p.gn()
m=n.a
l=A.fp(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.mw(l)?"unbound":J.xG(l," / ")
j=A.b(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.b(a.createElement("span"))
i.textContent=n
A.b(j.appendChild(i))
h="change "+m+" binding"
g=A.dQ(a,new A.b3("settings.controls.bind."+m,B.bY,n,h,B.o),new A.nz(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.b(j.appendChild(g))
A.b(q.appendChild(j))
o.k(0,m,g)}A.b(s.appendChild(q))
p=A.D(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.b(s.appendChild(p))
p=A.D(a,"div","pause-actions",e)
f.at=p
A.b(s.appendChild(p))
f.dJ()
A.b(s.appendChild(A.dQ(a,B.eb,new A.nA(f),e)))},
je(a){var s=this.x
s===$&&A.h()
if(s.b==null)return
a.preventDefault()
this.fM(this.x.mO(A.v(a.code)))},
fM(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.aO?B.ef:B.o
p=o.Q.h(0,r)
if(p!=null)A.w9(p,q)}n=a.a
if(n===B.aO)o.m9()
else if(n===B.bW){n=o.x
n===$&&A.h()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.dJ()}else{o.dq()
o.ax=null}},
m9(){var s,r,q,p,o
this.dq()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.hY[r]
p=A.j(s.ownerDocument)
p.toString
o=q.b
A.b(s.appendChild(A.dQ(p,new A.b3("settings.controls.resolve."+o,B.E,o,"resolve key binding conflict",B.o),new A.ny(this,q),null)))}},
dq(){var s,r=this.at
if(r==null)return
while(A.j(r.firstChild)!=null){s=A.j(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
dJ(){var s,r,q,p
for(s=this.Q,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.h()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.mw(p)?"unbound":J.xG(p," / ")
r.textContent=q
A.w9(r,B.o)}},
fm(a,b,c,d,e,f){var s,r=A.D(a,"label","setting-row",null)
A.b(r.appendChild(A.D(a,"span",null,d)))
s=A.Be(a,new A.b3("settings.controls."+c,B.ed,d,null,B.o),f,e,new A.nw(this,c),1)
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
dk(a,b,c,d){var s=A.D(a,"label","setting-toggle",null),r=A.Bf(a,new A.b3("settings.controls."+c,B.ee,d,null,B.o),!1,new A.nx(this,c))
A.b(s.appendChild(r))
A.b(s.appendChild(A.D(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
fK(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
seH(a){this.f=t.pf.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.nz.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.h()
s=n.dO(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.bU){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.w9(q,B.bZ)}p.dq()
return null},
$S:0}
A.nA.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.ny.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.h()
return s.fM(r.eS(this.b))},
$S:0}
A.nw.prototype={
$1(a){var s=this.a,r=s.w
s.fK(this.b==="horizontalSensitivity"?r.n8(a):r.no(a))},
$S:115}
A.nx.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.na(a)
break A}if("invertY"===q){s=r.w.nb(a)
break A}s=r.w.n7(a)
break A}r.fK(s)},
$S:7}
A.nH.prototype={
ks(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.b(o.appendChild(A.D(s,"h1","journal-title","credits")))
r=A.D(s,"p","credits-body",null)
p.f!==$&&A.L()
p.f=r
r.textContent="\u2014"
A.b(o.appendChild(r))
A.b(o.appendChild(A.D(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.D(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.nI(p)))
A.b(o.appendChild(q))}}
A.nI.prototype={
$1(a){A.b(a)
return this.a.a6()},
$S:1}
A.nQ.prototype={
ku(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","dialog")
n.setAttribute("aria-modal","true")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.D(a,o,"door-speaker",p)
q.b!==$&&A.L()
q.b=s
r=A.D(a,o,"door-line",p)
q.c!==$&&A.L()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(s))
A.b(n.appendChild(r))
r=A.D(a,o,"door-choice-status",p)
q.d!==$&&A.L()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(r))
r=A.D(a,o,"door-cite-list",p)
q.f!==$&&A.L()
q.f=r
s=A.D(a,o,"door-cite-result",p)
q.r!==$&&A.L()
q.r=s
A.b(n.appendChild(r))
A.b(n.appendChild(s))
s=A.D(a,"button","door-continue","continue")
q.e!==$&&A.L()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.nR(q)))
A.b(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.nS(q,a)))
A.b(A.j(a.body).appendChild(n))},
fb(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.h()
s.textContent=a
s=r.c
s===$&&A.h()
s.textContent=B.K.bJ("",!0,b)
s=r.d
s===$&&A.h()
s.textContent=A.xQ(B.b3)
s=r.e
s===$&&A.h()
A.b(s.style).display="none"
s=r.f
s===$&&A.h()
s.textContent=""
s=r.r
s===$&&A.h()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")
s.focus()},
fc(a,b){var s,r,q=this,p=q.c
p===$&&A.h()
p.textContent=B.K.bJ("",!0,a)
p=q.d
p===$&&A.h()
p.textContent=""
p=q.e
p===$&&A.h()
s=A.b(p.style)
r=b?"none":""
s.display=r
r=q.r
r===$&&A.h()
r.textContent=""
if(!b)p.focus()},
k_(a){return this.fc(a,!1)},
k5(a,b){var s,r,q,p,o,n
t.DX.a(a)
s=this.e
s===$&&A.h()
s=A.b(s.style)
r=b==null
q=r?"none":""
s.display=q
q=A.e([],t.s)
for(s=a.length,p=0;p<a.length;a.length===s||(0,A.u)(a),++p){o=a[p]
n=o.b
q.push(b===o.a?n+", selected":n)}s=this.d
s===$&&A.h()
s.textContent=A.xQ(q)
if(r)this.a.focus()},
fd(a,b){var s=this.c
s===$&&A.h()
s.textContent=B.K.bJ("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.h()
s.textContent=""
s=this.e
s===$&&A.h()
A.b(s.style).display=""
s.focus()},
jZ(a,b){var s,r,q,p,o,n,m,l
t.pL.a(b)
s=this.f
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.tY,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.b(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.nT(o,this)
if(typeof o=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.he()]=o
m.addEventListener("click",l)
A.b(s.appendChild(m))}},
soq(a){this.w=t.Z.a(a)},
sop(a){this.x=t.vR.a(a)}}
A.nR.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$0()},
$S:1}
A.nS.prototype={
$1(a){var s,r,q,p,o,n,m
A.b(a)
s=this.a
if(!s.y||A.v(a.code)!=="Tab")return
r=A.e([],t.sL)
q=s.e
q===$&&A.h()
if(A.v(A.b(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.h()
p=A.b(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.c(p.length);++o){n=A.j(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.j(this.b.activeElement)
if(A.T(a.shiftKey)){if(m===B.a.gP(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gW(r).focus()}}else if(m===B.a.gW(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gP(r).focus()}},
$S:2}
A.nT.prototype={
$1(a){var s
A.b(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:1}
A.nW.prototype={
kv(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.D(s,"h1","journal-title",null)
o.f!==$&&A.L()
o.f=r
q=A.D(s,"div","ending-copy",null)
o.r!==$&&A.L()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.D(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.nX(o)))
A.b(n.appendChild(p))},
k0(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.u)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.bN()},
sot(a){this.w=t.Z.a(a)}}
A.nX.prototype={
$1(a){var s
A.b(a)
s=this.a
s.a6()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.on.prototype={
bA(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.as(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
ju(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
o_(a){var s,r,q=this,p=null
if(q.e.length===0)return!1
if(B.b.T(a,"Digit")){s=A.dv(B.b.aZ(a,5),p)
r=s!=null&&s>=1&&s<=q.e.length?s-1:p}else if(B.b.T(a,"Numpad")){s=A.dv(B.b.aZ(a,6),p)
r=s!=null&&s>=1&&s<=q.e.length?s-1:p}else r=p
if(r!=null){q.f5(r)
return!0}return!1},
f5(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.f(r,a)
s.$2(a,r[a])}},
nZ(a,b,c){var s,r,q
t.vp.a(c)
this.r=null
for(s=c.length,r=0;r<s;++r){q=c[r]
if(q.c3(0,a,b)){this.r=q.b
break}}},
nY(a,b,c){var s,r,q
t.vp.a(c)
for(s=c.length,r=0;r<s;++r){q=c[r]
if(q.c3(0,a,b)){this.f5(q.b)
return!0}}return!1},
soo(a){this.y=t.dt.a(a)}}
A.oo.prototype={}
A.dn.prototype={
v(){return"GameplayInteractionMode."+this.b}}
A.cN.prototype={
v(){return"GameplayPromptDensity."+this.b}}
A.cO.prototype={
v(){return"GameplayTextPacing."+this.b}}
A.dp.prototype={
v(){return"GameplayJournalLayout."+this.b}}
A.dm.prototype={
v(){return"GameplayConfirmationLevel."+this.b}}
A.dq.prototype={
v(){return"GameplaySaveFeedback."+this.b}}
A.cd.prototype={
v(){return"GameplayFocusLossBehavior."+this.b}}
A.fv.prototype={
be(a,b,c,d,e,f,g,h){var s=this,r=d==null?s.b:d,q=f==null?s.c:f,p=h==null?s.d:h,o=e==null?s.e:e,n=a==null?s.f:a,m=g==null?s.r:g,l=c==null?s.w:c
return A.wb(n,b==null?s.x:b,l,r,o,q,m,p)},
n1(a){var s=null
return this.be(s,a,s,s,s,s,s,s)},
n9(a){var s=null
return this.be(s,s,s,a,s,s,s,s)},
nf(a){var s=null
return this.be(s,s,s,s,s,a,s,s)},
nl(a){var s=null
return this.be(s,s,s,s,s,s,s,a)},
nc(a){var s=null
return this.be(s,s,s,s,a,s,s,s)},
n0(a){var s=null
return this.be(a,s,s,s,s,s,s,s)},
nj(a){var s=null
return this.be(s,s,s,s,s,s,a,s)},
n5(a){var s=null
return this.be(s,s,a,s,s,s,s,s)},
B(){var s=this
return A.N(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x],t.N,t.K)}}
A.op.prototype={
$1$2(a,b,c){var s
A.A9(c,t.W,"T","call")
c.i("p<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.d(A.a7("invalid gameplay setting: "+a,null,null))
return B.a.aT(b,new A.oq(s,c),new A.or(a))},
$2(a,b){return this.$1$2(a,b,t.W)},
$S:117}
A.oq.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("n(0)")}}
A.or.prototype={
$0(){return A.k(A.a7("invalid gameplay setting: "+this.a,null,null))},
$S:6}
A.cu.prototype={
v(){return"GraphicsPreset."+this.b}}
A.dW.prototype={
bH(a,b,c,d,e,f){var s=this,r=d==null?s.b:d,q=e==null?s.c:e,p=b==null?s.d:b,o=c==null?s.e:c,n=a==null?s.f:a,m=f==null?s.r:f
return new A.dW(s.a,r,q,p,o,n,m)},
dS(a){var s=null
return this.bH(a,s,s,s,s,s)},
hC(a){var s=null
return this.bH(s,a,s,s,s,s)},
hD(a){var s=null
return this.bH(s,s,s,a,s,s)},
nh(a){var s=null
return this.bH(s,s,s,s,a,s)},
n6(a){var s=null
return this.bH(s,s,a,s,s,s)},
nm(a){var s=null
return this.bH(s,s,s,s,s,a)},
C(){var s=this,r=null,q=s.c
if(!B.a.q(B.iL,q))throw A.d(A.a7("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.i4,q))throw A.d(A.a7("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.iO,q))throw A.d(A.a7("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.iI,q))throw A.d(A.a7("unsupported graphics texture quality: "+q,r,r))},
B(){var s=this
return A.N(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r],t.N,t.K)}}
A.oD.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:38}
A.oE.prototype={
$0(){return A.k(B.fm)},
$S:6}
A.oF.prototype={
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)}}
A.ox.prototype={}
A.oy.prototype={}
A.hA.prototype={
kw(a){var s,r,q,p,o=this,n=null,m="settings-copy",l=o.b
l.setAttribute("aria-label","Graphics settings")
A.b(l.appendChild(A.D(a,"h1","journal-title","Graphics")))
A.b(l.appendChild(A.D(a,"p",m,"Choose a visual budget without changing simulation truth.")))
s=A.D(a,"div","settings-grid",n)
r=t.N
o.bW(a,s,"preset","quality preset",A.N(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
o.bW(a,s,"renderScale","render scale",A.N(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
o.bW(a,s,"frameTarget","frame target",A.N(["30","30 fps","60","60 fps","display","Display rate"],r,r))
o.bW(a,s,"antialiasing","anti-aliasing",A.N(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
o.bW(a,s,"textureQuality","texture quality",A.N(["high","High","medium","Medium","low","Low"],r,r))
q=A.D(a,"label","setting-toggle",n)
r=A.b(a.createElement("input"))
o.x=r
r.type="checkbox"
r=o.x
r.toString
r.addEventListener("change",A.Z(new A.oB(o)))
r=o.x
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.D(a,"span",n,"Dynamic resolution")))
A.b(s.appendChild(q))
A.b(l.appendChild(s))
r=A.D(a,"p",m,n)
o.y=r
r.setAttribute("aria-live","polite")
r=o.y
r.toString
A.b(l.appendChild(r))
p=A.D(a,"button","door-continue","back")
p.setAttribute("type","button")
p.id="settings.graphics.back"
p.setAttribute("aria-label","back to settings categories")
p.addEventListener("click",A.Z(new A.oC(o)))
A.b(l.appendChild(p))},
bW(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.D(a,"label","setting-row",null)
A.b(s.appendChild(A.D(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.I(e,A.r(e).i("I<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.Z(new A.oA(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.w.k(0,c,r)},
fP(a){var s
a.C()
this.z=a
s=this.f
if(s!=null)s.$1(a)},
fa(a,b,c){var s,r,q=this
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.a4(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.y
if(s!=null)s.textContent="effective graphics profile differs"}},
seH(a){this.f=t.CA.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.oB.prototype={
$1(a){var s
A.b(a)
s=this.a
s.fP(s.z.hC(A.T(s.x.checked)))},
$S:2}
A.oC.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.r
if(r!=null)r.$0()
else s.a6()},
$S:2}
A.oA.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.v(this.b.value)
r=this.a
q=this.c
A:{if("preset"===q){p=r.z.hD(B.a.am(B.cL,new A.oz(s)))
break A}if("renderScale"===q){p=r.z.nh(s)
break A}if("frameTarget"===q){p=r.z.n6(s)
break A}if("antialiasing"===q){p=r.z.dS(s)
break A}if("textureQuality"===q){p=r.z.nm(s)
break A}p=r.z
break A}r.fP(p)},
$S:2}
A.oz.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:38}
A.oG.prototype={
kx(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.D(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.D(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.D(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.D(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.oH(this)))
A.b(p.appendChild(r))}}
A.oH.prototype={
$1(a){A.b(a)
return this.a.a6()},
$S:1}
A.pg.prototype={
bN(){var s,r=this
r.kk()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fv(r.CW,s)
r.m1()
r.h4()},
kS(){var s,r=this,q=r.a,p=A.D(q,"div","page-turn",null),o=A.D(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.ph(r)))
s=A.D(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.pi(r)))
q=A.D(q,"span","right-day-label",null)
r.Q!==$&&A.L()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
hr(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fv(s.CW+a,r)
s.h4()},
fv(a,b){if(a<1)return 1
if(a>b)return b
return a},
m1(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.f3(),r=s.length,q=A.tY,p=j.a,o=0;o<s.length;s.length===r||(0,A.u)(s),++o){n=s[o]
m=B.a.gW(n.c).p(0)
l=A.b(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.pj(j,n,l)
if(typeof m=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.he()]=m
l.addEventListener("click",k)
A.b(i.appendChild(l))}},
h4(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.r(p).i("ak<2>"),n=new A.ak(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.U(r,new A.pk())
j.h3(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.e([],s)
for(r=new A.ak(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.U(s,new A.pl())
j.h3(i,s)
k=B.c.F(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.b(i.style).setProperty("width",B.c.az(k*100,1)+"%")},
h3(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.u)(b),++r)A.b(a.appendChild(this.lk(b[r])))},
lk(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.D(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.p(0)
n=A.b(k.createElement("div"))
n.className=q
n.textContent=o
A.b(n.style).setProperty("--shake",B.c.p(p.b))
A.b(j.appendChild(n))}m=a.r
if(m!=null){l=this.lB(m,!1)
l.className=A.v(l.className)+" margin"
A.b(j.appendChild(l))}return j},
lB(a,b){var s=b?"hand-line struck":"hand-line",r=A.D(this.a,"div",s,a.p(0))
A.b(r.style).setProperty("--shake",B.c.p(a.b))
return r}}
A.ph.prototype={
$1(a){A.b(a)
return this.a.hr(-1)},
$S:1}
A.pi.prototype={
$1(a){A.b(a)
return this.a.hr(1)},
$S:1}
A.pj.prototype={
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
A.pk.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:14}
A.pl.prototype={
$2(a,b){var s=t.g
return B.d.G(s.a(a).a,s.a(b).a)},
$S:14}
A.cV.prototype={}
A.fl.prototype={
c3(a,b,c){var s=this,r=s.c,q=!1
if(b>=r)if(b<=r+s.e){r=s.d
r=c>=r&&c<=r+s.f}else r=q
else r=q
return r}}
A.pU.prototype={
gph(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.b.E(s,0,B.c.aw(B.c.F(r*q,0,r)))}}
A.hT.prototype={
aQ(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.j(this.a.body).appendChild(s))},
bN(){var s,r,q,p,o=this,n=o.b
if(B.b.q(A.v(n.className),"open"))return
s=$.pV
if(s!=null&&s!==o)s.a6()
$.pV=o
r=o.a
o.d=A.j(r.activeElement)
A.pd(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.glU())
o.e=q
r.addEventListener("keydown",q)
p=A.zp(n)
if(p.length!==0)B.a.gP(p).focus()
else n.focus()},
a6(){var s,r,q=this,p=q.b
if(!B.b.q(A.v(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.pV===q)$.pV=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
je(a){},
lV(a){A.b(a)
this.je(a)
if(A.T(a.defaultPrevented))return
if(A.v(a.code)==="Escape"){a.preventDefault()
this.a6()
return}if(A.v(a.code)==="Tab")this.mg(a)},
mg(a){var s,r=A.zp(this.b)
if(r.length===0)return
s=A.j(this.a.activeElement)
if(A.T(a.shiftKey)){if(s===B.a.gP(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gW(r).focus()}}else if(s===B.a.gW(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gP(r).focus()}},
saY(a){this.c=t.Z.a(a)}}
A.bi.prototype={
v(){return"PauseReason."+this.b}}
A.ci.prototype={
v(){return"PausePage."+this.b}}
A.e2.prototype={
v(){return"PauseTransitionKind."+this.b}}
A.du.prototype={
B(){var s,r=A.q(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
a0(a,b){if(b==null)return!1
return b instanceof A.du&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gI(a){return A.cC(this.a,this.b,this.c,B.f,B.f,B.f)}}
A.e1.prototype={
ghz(){var s=this.a
return s.length===1&&B.a.gP(s).a===B.bi},
B(){var s=A.q(t.N,t.X),r=this.a,q=A.G(r),p=q.i("U<1,Y<i,H?>>")
r=A.K(new A.U(r,q.i("Y<i,H?>(1)").a(new A.q_()),p),p.i("a6.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.G(r)
p=q.i("U<1,i>")
r=A.K(new A.U(r,q.i("i(1)").a(new A.q0()),p),p.i("a6.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.q_.prototype={
$1(a){return t.oP.a(a).B()},
$S:119}
A.q0.prototype={
$1(a){return t.wJ.a(a).b},
$S:120}
A.c0.prototype={}
A.pZ.prototype={
jf(a){var s,r=this
if(r.a.ghz())return new A.c0(B.Z,r.a,null)
s=r.a
s=new A.e1(B.iK,s.b,a)
r.a=s
return new A.c0(B.dc,s,"pause.resume")},
mC(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gW(p)
q=r.a.a
q=B.a.aP(q,0,q.length-1)
p=r.a
p=new A.e1(q,p.b,p.c)
r.a=p
return new A.c0(B.dd,p,s.c)}if(q.ghz()&&r.a.b.length===0)return r.cp()
return new A.c0(B.Z,r.a,null)},
cp(){var s=this.a
if(s.a.length===0)return new A.c0(B.Z,s,null)
if(s.b.length!==0)return new A.c0(B.Z,s,null)
this.a=B.bh
return new A.c0(B.de,B.bh,s.c)},
oJ(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.c0(B.Z,q.a,null)
s=q.a
r=A.K(s.b,t.wJ)
r.push(a)
s=new A.e1(s.a,r,q.a.c)
q.a=s
return new A.c0(B.dc,s,null)},
nu(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.c0(B.Z,o.a,null)
s=o.a
r=s.b
q=A.G(r)
p=q.i("J<1>")
r=A.K(new A.J(r,q.i("n(1)").a(new A.q1(a)),p),p.i("p.E"))
q=o.a.c
r=new A.e1(s.a,r,q)
o.a=r
return new A.c0(B.jZ,r,q)},
l9(a){var s
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
A.q1.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:121}
A.cD.prototype={
v(){return"PauseRootAction."+this.b}}
A.q2.prototype={
bj(a,b,c,d){var s=B.jc.h(0,c)
s.toString
A.b(b.appendChild(A.dQ(a,new A.b3(s,B.E,d,null,B.o),new A.q3(this,c),null)))},
soE(a){this.f=t.Z.a(a)},
soG(a){this.r=t.Z.a(a)},
sor(a){this.w=t.Z.a(a)},
soF(a){this.x=t.Z.a(a)},
sow(a){this.y=t.Z.a(a)},
sos(a){this.z=t.Z.a(a)},
sb4(a){this.Q=t.Z.a(a)}}
A.q3.prototype={
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
A.bP.prototype={
v(){return"PauseSettingsCategory."+this.b}}
A.qg.prototype={
jY(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.K.bJ("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.qN.prototype={
kC(a){var s,r,q,p,o,n=this.b
n.className=A.v(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.b(n.appendChild(A.nl(a,B.e9,1)))
A.b(n.appendChild(A.D(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.D(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.ik[r]
p=B.cZ.h(0,q)
p.toString
o=B.cY.h(0,q)
o.toString
A.b(s.appendChild(A.dQ(a,new A.b3(o,B.E,p,p+" settings",B.o),new A.qO(this,q),null)))}A.b(s.appendChild(A.dQ(a,B.e8,new A.qP(this),null)))
A.b(n.appendChild(s))},
son(a){this.f=t.hQ.a(a)},
sb4(a){this.r=t.Z.a(a)}}
A.qO.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.qP.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.fH.prototype={
kD(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.w(B.cZ.h(0,d))+" settings",a=h.b
a.className=A.v(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.b(a.appendChild(A.nl(a0,new A.b3("settings."+(s==null?f:s)+".heading",B.ao,b,g,B.o),2)))
A.b(a.appendChild(A.D(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.D(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.ra(h)),p=B.a.gu(B.B),o=t.xG,q=new A.S(p,q,o);q.m();){n=p.gn()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(r.appendChild(h.lA(a0,m,l,n==null?1:n,k)))}A.b(a.appendChild(r))
j=A.D(a0,"div",e,g)
for(s=s.a(new A.rb(h)),q=B.a.gu(B.B),o=new A.S(q,s,o);o.m();)A.b(j.appendChild(h.mf(a0,q.gn())))
A.b(a.appendChild(j))
if(d===B.G)A.b(a.appendChild(h.kQ(a0)))
if(d===B.H)A.b(a.appendChild(h.kP(a0)))
if(d===B.Y)A.b(a.appendChild(h.kR(a0)))
i=A.D(a0,"div",e,g)
for(s=t.pz.a(h.gls()),q=B.a.gu(B.iM),s=new A.S(q,s,t.rt);s.m();){p=q.gn()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.b(i.appendChild(A.dQ(a0,new A.b3("settings."+o+".reset."+n,B.E,"reset "+n,"restore "+n+" settings to defaults",B.o),new A.rc(h,p),g)))}s=c?g:d.b
A.b(i.appendChild(A.dQ(a0,new A.b3("settings."+(s==null?f:s)+".reset.all",B.E,"reset all settings","restore all settings to defaults",B.eg),new A.rd(h),g)))
A.b(a.appendChild(i))
d=c?g:d.b
A.b(a.appendChild(A.dQ(a0,new A.b3("settings."+(d==null?f:d)+".back",B.E,"return","return to settings categories",B.o),new A.re(h),g)))},
kP(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.D(a,"div","settings-grid",j),f=k.di(a,g,"reducedMotion","reduced motion (system default)"),e=k.di(a,g,i,"photosensitivity-safe effects (system default)"),d=k.di(a,g,"captions","non-speech captions"),c=A.D(a,"label",h,j)
A.b(c.appendChild(A.D(a,"span",j,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.r4(k,s)))
A.b(c.appendChild(s))
A.b(g.appendChild(c))
r=A.D(a,"label",h,j)
A.b(r.appendChild(A.D(a,"span",j,"screen-reader verbosity")))
q=A.b(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.ba[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(q.appendChild(n))}q.addEventListener("change",A.Z(new A.r5(k,q)))
A.b(r.appendChild(q))
A.b(g.appendChild(r))
l=A.D(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.r6(k)))
A.b(g.appendChild(l))
k.k3.L(0,A.N(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.k4.k(0,"screenReaderVerbosity",q)
return g},
di(a,b,c,d){var s=A.D(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.qQ(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.D(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
f6(a){var s,r
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
s.value=B.c.p(r==null?1:r)}s=this.k4.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.a6:r).b}},
kR(a){var s,r,q=this,p="confirmations",o=A.D(a,"div","settings-grid",null)
q.bk(a,o,"interactionMode","interaction mode",B.b9,t.bK)
q.bk(a,o,"promptDensity","prompt density",B.bd,t.dn)
q.bk(a,o,"textPacing","dialogue text pacing",B.bb,t.j_)
q.bk(a,o,"journalLayout","journal layout",B.b2,t.gm)
q.bk(a,o,p,p,B.aZ,t.aJ)
q.bk(a,o,"saveFeedback","save feedback",B.b4,t.mx)
q.bk(a,o,"focusLossBehavior","when the window loses focus",B.aA,t.x)
s=A.D(a,"label","setting-toggle",null)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=q.k1.x
r.addEventListener("change",A.Z(new A.r7(q,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.D(a,"span",null,"contextual reminders")))
A.b(o.appendChild(s))
q.id=r
return o},
bk(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.A9(f,t.W,"T","_addGameplaySelect")
f.i("C<0>").a(e)
s=A.D(a,"label","setting-row",null)
A.b(s.appendChild(A.D(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(r.appendChild(n))}r.addEventListener("change",A.Z(new A.r2(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.k(0,c,r)},
jL(a){var s,r,q,p,o,n,m,l,k,j,i,h
this.k1=a
for(s=this.go,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0),r=a.w.b,q=a.r.b,p=a.f.b,o=a.e.b,n=a.d.b,m=a.c.b,l=a.b.b;s.m();){k=s.d
j=k.b
i=k.a
A:{if("interactionMode"===i){h=l
break A}if("promptDensity"===i){h=m
break A}if("textPacing"===i){h=n
break A}if("journalLayout"===i){h=o
break A}if("confirmations"===i){h=p
break A}if("saveFeedback"===i){h=q
break A}h=r
break A}j.value=h}s=this.id
if(s!=null)s.checked=a.x},
kQ(a){var s,r,q=this,p=A.D(a,"div","settings-grid",null),o=t.N,n=A.q(o,o)
for(s=0;s<4;++s){r=B.b8[s].b
n.k(0,r,r)}q.cv(a,p,"output","output",n)
n=A.q(o,o)
for(s=0;s<3;++s){r=B.b1[s].b
n.k(0,r,r)}q.cv(a,p,"dynamicRange","dynamic range",n)
n=A.q(o,o)
for(s=0;s<2;++s){r=B.b0[s].b
n.k(0,r,r)}q.cv(a,p,"reverb","room effect",n)
o=A.q(o,o)
for(s=0;s<2;++s){n=B.b_[s].b
o.k(0,n,n)}q.cv(a,p,"ducking","voice intelligibility",o)
return p},
cv(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.D(a,"label","setting-row",null)
A.b(s.appendChild(A.D(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.I(e,A.r(e).i("I<1,2>")).gu(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.Z(new A.qV(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.p1.k(0,c,r)},
jK(a){var s,r,q,p,o,n,m,l,k
this.ok=a
for(s=this.p1,s=new A.I(s,A.r(s).i("I<1,2>")).gu(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
fR(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.X===r){s=a.c===B.aD
break A}if(B.H===r){s=a.c===B.a1
break A}if(B.G===r){s=a.c===B.D
break A}s=!1
break A}return s},
lt(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.X===s){r=a===B.aD
break A}if(B.H===s){r=a===B.a1
break A}if(B.G===s){r=a===B.D
break A}r=!1
break A}return r},
mf(a,b){var s=this,r=A.D(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.r9(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.D(a,"span",null,b.b)))
return r},
lA(a,b,c,d,e){var s,r,q=this,p=A.D(a,"label","setting-row",null),o=A.D(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.w(e)
n.max=A.w(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.D(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.r8(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.aU(e,d))
return p},
f8(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.kg
r=B.c.F(b,s.a,s.b)
q.value=B.c.p(r)
p.textContent=""+B.c.aL(r*100)+"%"},
soy(a){this.r=t.DI.a(a)},
soA(a){this.w=t.xl.a(a)},
soz(a){this.x=t.xl.a(a)},
sou(a){this.y=t.DI.a(a)},
sox(a){this.z=t.xl.a(a)},
soI(a){this.Q=t.xl.a(a)},
soD(a){this.as=t.Ci.a(a)},
soC(a){this.at=t.Z.a(a)},
sb4(a){this.ax=t.Z.a(a)},
som(a){this.ay=t.kC.a(a)},
sov(a){this.ch=t.hq.a(a)},
sol(a){this.CW=t.Cv.a(a)},
soB(a){this.cx=t.Z.a(a)}}
A.ra.prototype={
$1(a){t.gl.a(a)
return a.d===B.Q&&this.a.fR(a)},
$S:19}
A.rb.prototype={
$1(a){t.gl.a(a)
return a.d===B.af&&this.a.fR(a)},
$S:19}
A.rc.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.rd.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.re.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.a6()},
$S:0}
A.r4.prototype={
$1(a){var s,r,q
A.b(a)
s=this.a
r=s.k2
q=A.fD(A.v(this.b.value))
r=r.nn(q==null?1:q)
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.r5.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.k2.nk(B.a.am(B.ba,new A.r3(this.b)))
s.k2=r
s=s.CW
if(s!=null)s.$1(r)},
$S:2}
A.r3.prototype={
$1(a){return t.mq.a(a).b===A.v(this.a.value)},
$S:37}
A.r6.prototype={
$1(a){var s
A.b(a)
s=this.a.cx
return s==null?null:s.$0()},
$S:1}
A.qQ.prototype={
$1(a){var s,r,q,p
A.b(a)
s=A.T(this.b.checked)
r=this.a
q=this.c
A:{if("reducedMotion"===q){p=r.k2.ng(s)
break A}if("photosensitivitySafe"===q){p=r.k2.ne(s)
break A}p=r.k2.n_(s)
break A}r.k2=p
r=r.CW
if(r!=null)r.$1(p)},
$S:2}
A.r7.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.k1.n1(A.T(this.b.checked))
s.k1=r
s=s.ch
if(s!=null)s.$1(r)},
$S:2}
A.r2.prototype={
$1(a){var s,r,q,p=this
A.b(a)
s=p.a
r=p.b
A:{if("interactionMode"===r){q=s.k1.n9(B.a.am(B.b9,new A.qW(p.c)))
break A}if("promptDensity"===r){q=s.k1.nf(B.a.am(B.bd,new A.qX(p.c)))
break A}if("textPacing"===r){q=s.k1.nl(B.a.am(B.bb,new A.qY(p.c)))
break A}if("journalLayout"===r){q=s.k1.nc(B.a.am(B.b2,new A.qZ(p.c)))
break A}if("confirmations"===r){q=s.k1.n0(B.a.am(B.aZ,new A.r_(p.c)))
break A}if("saveFeedback"===r){q=s.k1.nj(B.a.am(B.b4,new A.r0(p.c)))
break A}q=s.k1.n5(B.a.am(B.aA,new A.r1(p.c)))
break A}s.k1=q
s=s.ch
if(s!=null)s.$1(q)},
$S:2}
A.qW.prototype={
$1(a){return t.bK.a(a).b===A.v(this.a.value)},
$S:124}
A.qX.prototype={
$1(a){return t.dn.a(a).b===A.v(this.a.value)},
$S:125}
A.qY.prototype={
$1(a){return t.j_.a(a).b===A.v(this.a.value)},
$S:126}
A.qZ.prototype={
$1(a){return t.gm.a(a).b===A.v(this.a.value)},
$S:127}
A.r_.prototype={
$1(a){return t.aJ.a(a).b===A.v(this.a.value)},
$S:128}
A.r0.prototype={
$1(a){return t.mx.a(a).b===A.v(this.a.value)},
$S:129}
A.r1.prototype={
$1(a){return t.x.a(a).b===A.v(this.a.value)},
$S:40}
A.qV.prototype={
$1(a){var s,r,q,p,o=this
A.b(a)
s=o.a
r=s.ok
q=o.b
A:{if("output"===q){p=r.nd(B.a.am(B.b8,new A.qR(o.c)))
break A}if("dynamicRange"===q){p=r.n4(B.a.am(B.b1,new A.qS(o.c)))
break A}if("reverb"===q){p=r.ni(B.a.am(B.b0,new A.qT(o.c)))
break A}p=r.n3(B.a.am(B.b_,new A.qU(o.c)))
break A}s.ok=p
s=s.ay
if(s!=null)s.$1(p)},
$S:2}
A.qR.prototype={
$1(a){return t.xs.a(a).b===A.v(this.a.value)},
$S:131}
A.qS.prototype={
$1(a){return t.EL.a(a).b===A.v(this.a.value)},
$S:132}
A.qT.prototype={
$1(a){return t.gc.a(a).b===A.v(this.a.value)},
$S:133}
A.qU.prototype={
$1(a){return t.ul.a(a).b===A.v(this.a.value)},
$S:134}
A.r9.prototype={
$1(a){var s,r=this
A.b(a)
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.T(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.T(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.T(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.T(r.c.checked))
break}},
$S:2}
A.r8.prototype={
$1(a){var s,r,q,p=this
A.b(a)
s=A.fD(A.v(p.b.value))
if(s==null)s=1
p.c.textContent=""+B.c.aL(s*100)+"%"
r=p.d
q=p.a
if(r==="brightness"){q=q.y
if(q!=null)q.$2(r,s)}else{q=q.r
if(q!=null)q.$2(r,s)}},
$S:2}
A.bw.prototype={
v(){return"SettingCategory."+this.b}}
A.i4.prototype={
v(){return"SettingKind."+this.b}}
A.aW.prototype={
d3(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.d(A.a7(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.d(A.a7(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bV(a))throw A.d(A.a7(r.a+" must be boolean",q,q))
break}}}
A.rh.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:19}
A.ri.prototype={
$0(){return A.k(A.m("unknown setting: "+this.a))},
$S:6}
A.rf.prototype={
kE(a,b){var s,r=this.a
if(r!==1)throw A.d(A.z("unsupported settings version "+r,null))
for(r=this.b.gJ(),r=r.gu(r);r.m();){s=r.gn()
A.rg(s.a).d3(s.b)}},
cr(a){var s=this.b.h(0,a)
return s==null?A.k(A.m("setting missing from profile: "+a)):s},
B(){return A.N(["version",this.a,"values",this.b],t.N,t.K)}}
A.rj.prototype={
oX(a){var s,r,q=A.fy(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.dy(q,1)
this.m4(a)},
B(){return A.N(["version",1,"requested",this.a.B(),"effective",this.b.B()],t.N,t.K)},
m4(a){var s,r,q=A.fy(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.B[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.dy(q,1)}}
A.rp.prototype={
kF(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
i.setAttribute("aria-label","Rest")
A.b(i.appendChild(A.D(a,"h2","journal-title","Rest")))
A.b(i.appendChild(A.D(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.D(a,"div","entry-picker",null)
for(r=A.tY,q=0;q<2;++q){p=B.cK[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.cQ[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.rq(this,p,m)
if(typeof k=="function")A.k(A.z("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.he()]=k
l.addEventListener("click",j)
A.b(s.appendChild(l))}}A.b(i.appendChild(s))},
soH(a){this.f=t.nf.a(a)}}
A.rq.prototype={
$1(a){var s,r
A.b(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.a6()},
$S:2}
A.cr.prototype={}
A.mH.prototype={
pg(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.G(s)
q=new A.U(s,r.i("i(1)").a(new A.mJ()),r.i("U<1,i>")).bz(0)
r=this.b
r.H(0)
s=J.B2(a,t.N)
p=s.$ti
r.L(0,new A.J(s,p.i("n(p.E)").a(q.gaq(q)),p.i("J<p.E>")))},
nD(a,b){var s,r,q,p,o,n=A.e([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.mJ.prototype={
$1(a){return t.bC.a(a).a},
$S:135}
A.mI.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.G(r,s):B.d.G(a.c,b.c)},
$S:136}
A.l8.prototype={
gc5(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.f(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
o7(a){return this.c.q(0,t.L.a(a))},
eT(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a7(0,g.gmY())||!a.a.a7(0,new A.rW(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.fT(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.aH){m=s.d
if(m<o.length){n=n===B.a4
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ab}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.f(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.N(l.f,new A.rX(s))
else k=!1
if(k)return!1
j=new A.l7(r,g,A.ah(o,t.AP),B.a4)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.H(0)
g.L(0,a.a)
g=i.c
g.H(0)
g.L(0,h)
i.r=j
return!0},
hx(a){var s=this.a,r=A.r(s).i("ad<1>"),q=r.i("J<p.E>")
s=A.K(new A.J(new A.ad(s,r),r.i("n(p.E)").a(new A.rR(a)),q),q.i("p.E"))
B.a.U(s,new A.rS())
return s},
dO(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.mp
s=m.a.h(0,a)
if(s==null)return B.mq
r=B.d.V(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.bK:B.al
o=p===B.al&&m.x.q(0,q)&&s.S(B.bL)?B.bL:p
if(s.S(o))n=o
else n=s.S(B.al)?B.al:B.bK
r=s.h(0,n)
r.toString
m.r=new A.l7(a,n,A.ah(m.fT(a,n,r),t.AP),B.a4)
m.gc5()
r=m.r
r.toString
return new A.l6(r)},
mS(a){var s,r,q,p,o,n=this.r
if(n==null)return B.dN
if(n.d!==B.a4)return B.mn
n.e=a
s=a===B.ab
n.d=s?B.aH:B.aj
r=this.f
q=s?B.dL:B.m5
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.dD(q,o,p,a,null))
if(a===B.at)B.a.l(r,new A.dD(B.m8,o,p,a,null))
if(s)this.h5(n)
return new A.l4(n)},
mx(){var s,r=this.r
if(r==null)return B.dN
s=r.d
if(s!==B.aj&&s!==B.ak)return B.mo
if(this.gc5()!=null&&r.w==null)return new A.b9(new A.bn(B.a5,"The visitor is waiting for an answer."))
r.d=B.ak
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.aH
this.h5(r)
return new A.ih(r,!0)}return new A.ih(r,!1)},
mT(a){var s,r,q=this.r,p=this.gc5(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.aj&&o!==B.ak}if(o)return B.mm
o=p.f
s=A.G(o)
r=A.bZ(new A.J(o,s.i("n(1)").a(new A.rU(a)),s.i("J<1>")),t.Y)
if(r==null)return B.mr
q.w=r.a
return new A.l5(q,p,r)},
mU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.aj&&s!==B.ak}else s=!0
if(s)return i
r=h.gbp()
if(r==null)return i
s=t.N
q=A.q(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.f(o,p)
p=o[p].c}else p=B.cP
p=J.Q(p)
while(p.m()){o=p.gn()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.b5(q,s,s)
m=c.lY(!0,!0,o,new A.t3(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.aI){B.a.l(this.f,new A.dD(B.m7,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.fy(B.a.gW(j.c).a,s,s)
s.L(0,q)
p.mu(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.dO)if(k===B.bM){s=n.b
s=s.gX(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.dD(B.m6,o,p.b,i,l))}}return m},
h5(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
fT(a,b,c){var s,r
t.cf.a(c)
s=A.e([],t.Fi)
for(r=J.Q(c);r.m();)s.push(this.lC(a,b,r.gn()))
return s},
lC(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.G(p)
s=A.bZ(new A.J(p,r.i("n(1)").a(new A.rP(this)),r.i("J<1>")),t.aS)}return s==null?c:new A.c5(q,s.c,c.c)},
skg(a){this.x=t.Q.a(a)}}
A.rW.prototype={
$1(a){var s=this.a.a
return new A.ad(s,A.r(s).i("ad<1>")).N(0,new A.rV(A.v(a)))},
$S:3}
A.rV.prototype={
$1(a){return t.L.a(a).a===this.a},
$S:24}
A.rX.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:13}
A.rR.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:24}
A.rS.prototype={
$2(a,b){var s,r=t.L
r.a(a)
r.a(b)
s=B.d.G(a.c,b.c)
return s!==0?s:B.d.G(a.d,b.d)},
$S:138}
A.rU.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.rT.prototype={
$0(){return A.e([],t.jV)},
$S:139}
A.rP.prototype={
$1(a){return t.aS.a(a).d.gJ().a7(0,new A.rO(this.a))},
$S:140}
A.rO.prototype={
$1(a){t.q.a(a)
return this.a.y.aV(a.a,a.b)},
$S:141}
A.rQ.prototype={
$2(a,b){var s=t.AP
return B.d.G(s.a(a).a,s.a(b).a)},
$S:142}
A.l9.prototype={}
A.lF.prototype={}
A.vg.prototype={
$1(a){return B.b.T(A.v(a),"off.")},
$S:3}
A.bN.prototype={
v(){return"DoorChoice."+this.b}}
A.c3.prototype={
v(){return"VisitPhase."+this.b}}
A.c4.prototype={
v(){return"VisitTier."+this.b}}
A.e9.prototype={
v(){return"VisitorFactKind."+this.b}}
A.dD.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.d4.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.bn.prototype={
a0(a,b){if(b==null)return!1
return b instanceof A.bn&&b.a===this.a&&b.b===this.b},
gI(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.c5.prototype={
a0(a,b){if(b==null)return!1
return b instanceof A.c5&&b.a===this.a&&b.b===this.b},
gI(a){return A.cC(this.a,this.b,B.f,B.f,B.f,B.f)}}
A.bR.prototype={
a0(a,b){var s=this
if(b==null)return!1
return b instanceof A.bR&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gI(a){var s=this
return A.cC(s.a,s.b,s.c,s.d,B.f,B.f)},
B(){var s=this
return A.N(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.la.prototype={
B(){var s,r,q,p=this.a
p=A.K(p,A.r(p).c)
B.a.Y(p)
s=this.b
r=A.r(s)
q=r.i("dk<1,Y<i,@>>")
s=A.K(new A.dk(s,r.i("Y<i,@>(1)").a(new A.rN()),q),q.i("p.E"))
r=this.c
return A.N(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.rN.prototype={
$1(a){return t.L.a(a).B()},
$S:143}
A.ji.prototype={
B(){var s,r=this,q=A.q(t.N,t.z)
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
A.mE.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:144}
A.mF.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:145}
A.mG.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:146}
A.l7.prototype={
gbp(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.f(r,s)
s=r[s].b}else s=null
return s}}
A.rY.prototype={}
A.b9.prototype={}
A.l6.prototype={}
A.l4.prototype={}
A.ih.prototype={}
A.l5.prototype={}
A.fQ.prototype={}
A.iF.prototype={
gbq(){var s,r=this.x1
if(r){s=this.w
s===$&&A.h()
s=s.a.b}else s="safe"
return A.qy("pixeldart",r?this.gmM():B.iV,!1,null,s)},
gdR(){if(this.x1){var s=this.d
s===$&&A.h()
s=s.b===B.ac}else s=!1
return s},
gmM(){var s,r
if(!this.x1)return B.n
s=this.r
s===$&&A.h()
r=this.w
r===$&&A.h()
return B.er.mN(s,r)},
gnU(){var s="shadowCaster",r=this.p3
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.jh(s).a+";shadowTriangles="+r.jh(s).b+";frameMs="+B.c.az(this.p4,3)},
gnT(){var s=this.p3
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.p4<=100},
bf(){var s,r,q,p,o,n,m=this,l=A.D0(m.a)
m.d=l
l=l.jn()
m.r=l
l=m.w=B.c1.jJ(l)
q=m.b
p=m.c
s=new A.kT(q,p,q,p)
p=A.yq(m.d)
m.e=p
try{p.j5(new A.kG(l,384,216,l.b.q(0,"shadows")?1:0),s)}catch(o){r=A.aj(o)
l=m.w
if(l===B.aB)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.w(r)
m.w=B.aB
l=A.yq(m.d)
l.j5(B.kE,s)
m.e=l}l=m.e
l.cE()
n=A.CD(l.w.a.b)
B.a.l(l.d,n)
m.f=n
m.x2=A.Cl(!0,!0,!0)
m.x1=!0},
b7(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.z("Pixeldart surface size must be positive",null))
if(!r.x1){r.b=a
r.c=b
return}s=r.e
s===$&&A.h()
s.cE()
new A.kT(a,b,a,b).C()
r.b=a
r.c=b},
mB(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5="wall-plaster",b6="grime",b7="renderer is not initialized",b8="resource library is disposed"
if(!b3.x1||b3.Q.length!==0)return
b3.y2=b9
s=b3.go
r=b3.e
r===$&&A.h()
s.k(0,b5,r.gbg().eP("texture:wall-plaster",256,256))
s.k(0,b6,b3.e.gbg().eP("texture:grime",512,512))
for(q=0;q<2;++q){p=B.iY[q]
r=b3.e.w
if(r==null)r=A.k(A.m(b7))
s.k(0,p,r.eP("texture:"+p,256,256))}b3.dG()
b3.k4=b3.e.gbg().oS(A.pB(s.h(0,b5),!1,"quarantine-house-safe",!0,1,0.48,0.44,0.46,1,1))
for(r=b9.b,o=r.length,n=b3.k2,m=b3.k1,l=t.N,k=t.pw,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){j=r[q]
i=A.q(l,k)
for(h=A.N(["wall",j.x,"floor",j.y,"ceiling",j.z],l,l),h=new A.cz(h,h.r,h.e,A.r(h).i("cz<1,2>")),g=j.a,f="quarantine-house-"+g+"-";h.m();){e=h.d
d=e.b
c=B.be.h(0,d)
if(c==null)A.k(A.m("Unknown house surface material: "+d))
d=c.c
b=b3.e.w
if(b==null)b=A.k(A.m(b7))
a=e.a
a0=c.a
d=A.pB(s.h(0,c.b),!1,f+a+"-"+a0,!0,c.d,(d&255)/255,(d>>>8&255)/255,(d>>>16&255)/255,1,1)
if(b.w)A.k(A.m(b8))
d.C()
a1=b.b.a.aF(d,b4)
b.f.l(0,a1)
i.k(0,a,a1)}n.k(0,g,i)
h=i.h(0,"wall")
h.toString
m.k(0,g,h)}for(o=b3.k3,q=0;q<7;++q){a2=B.ir[q]
n=b3.e.w
if(n==null)n=A.k(A.m(b7))
l=a2==="service"?s.h(0,b6):s.h(0,b5)
k=b3.dC(a2)
h=b3.dC(a2)
k=A.pB(l,!1,"quarantine-inventory-"+a2,!0,1,b3.dC(a2).c,h.b,k.a,1,1)
if(n.w)A.k(A.m(b8))
k.C()
a1=n.b.a.aF(k,b4)
n.f.l(0,a1)
o.k(0,a2,a1)}for(o=r.length,q=0;q<r.length;r.length===o||(0,A.u)(r),++q)b3.lw(b9,r[q])
b3.lZ(b9)
$.B.j().setAttribute("data-renderer-house-model-scale",B.c.az(2.25,2))
for(o=r.length,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){j=r[q]
for(n=j.e,l=n.length,k=j.a,a3=0;a3<n.length;n.length===l||(0,A.u)(n),++a3){a4=n[a3]
h=a4.c
g=a4.d
b3.fk(k,b3.fZ(j,a4.b,h,h+a4.e,g,g+a4.f,7902632),new A.tB(a4))}}for(r=b9.c,o=r.length,n=b3.fr,l=b3.y,k=b9.e,q=0;h=r.length,q<h;r.length===o||(0,A.u)(r),++q){a5=r[q]
if(a5.at==null||a5.as)continue
j=k.h(0,a5.b)
if(j==null)continue
a6=b3.fG(b9,j,a5)
h=b3.e.w
if(h==null)h=A.k(A.m(b7))
g=a5.a
if(h.w)A.k(A.m(b8))
f=h.a
a6.C()
a1=f.b.aF(a6,"door-leaf:"+g)
d=a1.a
f.c.k(0,d,f.bn(a6))
h.e.l(0,a1)
B.a.l(l,a1)
h=j.a
f=m.h(0,h)
if(f==null){f=b3.k4
f.toString}a7=new A.bv(a1,f,B.A,0,B.S,B.a8,!0,!0,0,b4)
f=b3.f
f===$&&A.h()
B.A.C()
b=f.a
a=b.$ti
b.a1(a.c.a(a1))
b=b.b
if(!(d>=0&&d<b.length))return A.f(b,d)
a6=b[d].c
d=(a6==null?a.y[1].a(a6):a6).d
b=B.A.ac()
d=d.gaA()
a=A.G(d)
A.be(new A.U(d,a.i("M(1)").a(b.gaC()),a.i("U<1,M>")))
n.k(0,g,new A.iE(g,h,f.b.c6(a7),a1,a7))}for(q=0;q<r.length;r.length===h||(0,A.u)(r),++q){a5=r[q]
if(a5.as||a5.at!=null)continue
j=k.h(0,a5.b)
if(j==null)continue
o=j.a
b3.fk(o,b3.fZ(j,a5.aJ(o),a5.af(o),a5.af(o)+a5.w,0,a5.x,5915445),new A.tC(a5))}for(r=A.GI(A.G0(b9)),o=r.length,n=b3.dx,m=b3.db,k=b3.cy,h=b3.id,g=b3.dy,q=0;q<r.length;r.length===o||(0,A.u)(r),++q){a8=r[q]
f=a8.b
a9=f===4?b6:b5
c=g.h(0,f)
if(c==null){d=b3.e.w
if(d==null)d=A.k(A.m(b7))
b=s.h(0,a9)
a=b3.dA(f)
a0=b3.dA(f)
a=A.pB(b,!0,"quarantine-house-exterior-slot-"+f,!0,1,b3.dA(f).c,a0.b,a.a,1,1)
if(d.w)A.k(A.m(b8))
a.C()
a1=d.b.a.aF(a,b4)
d.f.l(0,a1)
g.k(0,f,a1)
c=a1}d=b3.e.w
if(d==null)d=A.k(A.m(b7))
b=a8.c
a=a8.a
f=""+f
if(d.w)A.k(A.m(b8))
a0=d.a
b.C()
a1=a0.b.aF(b,"exterior:"+a+":slot-"+f)
b0=a1.a
a0.c.k(0,b0,a0.bn(b))
d.e.l(0,a1)
B.a.l(l,a1)
b1=a+":"+f
h.k(0,b1,a9)
if(!B.ae.q(0,a))A.k(A.z("unknown exterior cell: "+a,b4))
b2=new A.bv(a1,c,B.A,-1,B.S,B.a8,B.l1.q(0,a),!0,0,b4)
n.k(0,b1,a)
m.k(0,b1,b2)
f=b3.f
f===$&&A.h()
B.A.C()
d=f.a
b=d.$ti
d.a1(b.c.a(a1))
d=d.b
if(!(b0>=0&&b0<d.length))return A.f(d,b0)
a6=d[b0].c
d=(a6==null?b.y[1].a(a6):a6).d
b=B.A.ac()
d=d.gaA()
a=A.G(d)
A.be(new A.U(d,a.i("M(1)").a(b.gaC()),a.i("U<1,M>")))
k.k(0,b1,f.b.c6(b2))}},
jM(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="renderer is not initialized",a7="resource library is disposed"
a5.fy=A.ah(a8.e,t.fl)
if(!a5.x1)return
for(s=a5.ch,r=new A.I(s,A.r(s).i("I<1,2>")).gu(0),q=a5.CW;r.m();){p=r.d
p.toString
o=a5.f
o===$&&A.h()
o.b.b6(p.b)
n=q.h(0,p.a)
if(n!=null){p=a5.e
p===$&&A.h()
p=p.w
if(p==null)p=A.k(A.m(a6))
o=n.a
if(p.w)A.k(A.m(a7))
p.a.b6(o)
p.e.a2(0,o)}}s.H(0)
q.H(0)
r=a5.cx
B.a.H(r)
for(p=a5.fy,o=p.length,m=a8.c,l=a5.k3,k=0;k<o;++k){j=p[k]
i=a5.y2
h=i==null?null:i.e.h(0,j.b)
if(h==null)continue
g=a8.cO(j.c)
i=a5.e
i===$&&A.h()
i=i.w
if(i==null)i=A.k(A.m(a6))
f=a5.lz(g,j,m)
e=j.a
if(i.w)A.k(A.m(a7))
d=i.a
f.C()
c=d.b.aF(f,"inventory:"+e)
b=c.a
d.c.k(0,b,d.bn(f))
i.e.l(0,c)
i=j.f
f=i.a
a=B.a3.gab()
a0=i.b.b*3.141592653589793/180/2
a1=Math.sin(a0)
i=Math.cos(a0)
d=g.b
a2=l.h(0,d)
if(a2==null){a2=l.h(0,"furniture")
a2.toString}a3=h.d
i=new A.kX(new A.M(a3.a+f.a*m,a3.b+f.b*m,a3.c+f.c*m),new A.kE(a.a*a1,a.b*a1,a.c*a1,i))
n=new A.bv(c,a2,i,-1,B.S,B.a8,d!=="micro",!0,0,null)
B.a.l(r,c)
q.k(0,e,n)
d=a5.f
d===$&&A.h()
i.C()
a2=d.a
f=a2.$ti
a2.a1(f.c.a(c))
a2=a2.b
if(!(b>=0&&b<a2.length))return A.f(a2,b)
a4=a2[b].c
f=(a4==null?f.y[1].a(a4):a4).d
i=i.ac()
f=f.gaA()
b=A.G(f)
A.be(new A.U(f,b.i("M(1)").a(i.gaC()),b.i("U<1,M>")))
s.k(0,e,d.b.c6(n))}$.B.j().setAttribute("data-renderer-inventory-items",""+s.a)},
jX(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=c1.e,c0=b9.h(0,c2)
if(c0==null)return
s=c0.a
r=t.N
q=A.aK([s],r)
for(p=c1.aB(s),o=J.Q(p.a),p=new A.S(o,p.b,p.$ti.i("S<1>"));p.m();){n=o.gn()
m=n.bO(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&b9.h(0,m)!=null)q.l(0,m)}for(b9=b8.ax,b9=new A.I(b9,A.r(b9).i("I<1,2>")).gu(0),s=b8.ay,p=t.h1,o=b8.at;b9.m();){l=b9.d
n=l.a
k=q.q(0,n)?-1:0
j=l.b
i=s.h(0,n)
i.toString
h=A.e([],p)
for(g=J.aD(j),f=0;f<g.gt(j);++f){if(!(f<i.length))return A.f(i,f)
e=b8.c1(i[f],k)
d=b8.f
d===$&&A.h()
c=g.h(j,f)
b=e.c
b.C()
a=d.a
a0=a.$ti
a1=a0.c.a(e.a)
a.a1(a1)
a=a.b
a1=a1.a
if(!(a1>=0&&a1<a.length))return A.f(a,a1)
a2=a[a1].c
a=(a2==null?a0.y[1].a(a2):a2).d
b=b.ac()
a=a.gaA()
a0=A.G(a)
A.be(new A.U(a,a0.i("M(1)").a(b.gaC()),a0.i("U<1,M>")))
d=d.b
a0=d.$ti
a0.c.a(c)
a0.y[1].a(e)
d.a1(c)
d=d.b
c=c.a
if(!(c>=0&&c<d.length))return A.f(d,c)
d[c].sb1(e)
B.a.l(h,e)}s.k(0,n,h)
if(h.length!==0)o.k(0,n,B.a.gP(h))}for(b9=b8.fx,s=b9.length,a3=0;a3<b9.length;b9.length===s||(0,A.u)(b9),++a3){a4=b9[a3]
k=q.q(0,a4.a)&&a4.d.$0()?-1:0
p=b8.f
p===$&&A.h()
o=b8.c1(a4.c,k)
n=o.c
n.C()
i=p.a
g=i.$ti
d=g.c.a(o.a)
i.a1(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ac()
i=i.gaA()
g=A.G(i)
A.be(new A.U(i,g.i("M(1)").a(n.gaC()),g.i("U<1,M>")))
p=p.b
g=p.$ti
n=g.c.a(a4.b)
g.y[1].a(o)
p.a1(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.f(p,n)
p[n].sb1(o)}b9=b8.fr
s=A.r(b9).i("ad<1>")
s=A.K(new A.ad(b9,s),s.i("p.E"))
p=s.length
a3=0
for(;a3<s.length;s.length===p||(0,A.u)(s),++a3){a5=b9.h(0,s[a3])
o=a5.e
e=b8.c1(o,q.q(0,a5.b)?-1:0)
o=b8.f
o===$&&A.h()
n=a5.c
i=e.c
i.C()
g=o.a
d=g.$ti
c=d.c.a(e.a)
g.a1(c)
g=g.b
c=c.a
if(!(c>=0&&c<g.length))return A.f(g,c)
a2=g[c].c
g=(a2==null?d.y[1].a(a2):a2).d
i=i.ac()
g=g.gaA()
d=A.G(g)
A.be(new A.U(g,d.i("M(1)").a(i.gaC()),d.i("U<1,M>")))
o=o.b
d=o.$ti
d.c.a(n)
d.y[1].a(e)
o.a1(n)
o=o.b
n=n.a
if(!(n>=0&&n<o.length))return A.f(o,n)
o[n].sb1(e)
b9.k(0,a5.a,a5.n2(e))}for(b9=b8.fy,s=b9.length,p=b8.ch,o=b8.CW,a3=0;a3<s;++a3){a6=b9[a3]
n=a6.a
a7=p.h(0,n)
a8=o.h(0,n)
if(a7==null||a8==null)continue
n=b8.f
n===$&&A.h()
i=b8.c1(a8,q.q(0,a6.b)?-1:0)
g=i.c
g.C()
d=n.a
c=d.$ti
b=c.c.a(i.a)
d.a1(b)
d=d.b
b=b.a
if(!(b>=0&&b<d.length))return A.f(d,b)
a2=d[b].c
d=(a2==null?c.y[1].a(a2):a2).d
g=g.ac()
d=d.gaA()
c=A.G(d)
A.be(new A.U(d,c.i("M(1)").a(g.gaC()),c.i("U<1,M>")))
n=n.b
c=n.$ti
c.c.a(a7)
c.y[1].a(i)
n.a1(a7)
n=n.b
c=a7.a
if(!(c>=0&&c<n.length))return A.f(n,c)
n[c].sb1(i)}a9=new A.jO().mR(c2)
b9=$.B.j()
s=A.K(a9,A.r(a9).c)
B.a.Y(s)
b9.setAttribute("data-renderer-exterior-cells",B.a.a4(s,","))
b9=b8.dx
r=new A.jO().iX(new A.tD(b8),new A.ad(b9,A.r(b9).i("ad<1>")),a9,r)
b0=A.kg(r,r.$ti.i("p.E"))
b9=b8.db
s=A.r(b9).i("ad<1>")
s=A.K(new A.ad(b9,s),s.i("p.E"))
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
e=b8.c1(a8,b6?-1:0)
o=b8.f
o===$&&A.h()
n=e.c
n.C()
i=o.a
g=i.$ti
d=g.c.a(e.a)
i.a1(d)
i=i.b
d=d.a
if(!(d>=0&&d<i.length))return A.f(i,d)
a2=i[d].c
i=(a2==null?g.y[1].a(a2):a2).d
n=n.ac()
i=i.gaA()
g=A.G(i)
A.be(new A.U(i,g.i("M(1)").a(n.gaC()),g.i("U<1,M>")))
o=o.b
g=o.$ti
g.c.a(b5)
g.y[1].a(e)
o.a1(b5)
o=o.b
g=b5.a
if(!(g>=0&&g<o.length))return A.f(o,g)
o[g].sb1(e)
b9.k(0,b4,e)}$.B.j().setAttribute("data-renderer-exterior-items",""+b1+"/"+b9.a)
$.B.j().setAttribute("data-renderer-shadow-casters",""+b2+"/"+b3)
b9=A.r(b0)
s=b9.i("dk<1,i>")
b7=A.K(new A.dk(b0,b9.i("i(1)").a(new A.tE(b8)),s),s.i("p.E"))
B.a.Y(b7)
$.B.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a4(b7,","))},
oR(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="renderer is not initialized",a9="resource library is disposed"
if(!a7.x1)return
s=a7.ax.h(0,b1)
r=a7.ay
q=r.h(0,b1)
p=a7.z
o=p.h(0,b1)
n=b0.e.h(0,b1)
if(s==null||q==null||o==null||n==null)return
m=a7.h8(b0,n)
l=J.aD(s)
if(3!==l.gt(s)||3!==o.length)return
k=A.e([],t.s6)
j=A.e([],t.h1)
for(i=a7.y,h="room:"+b1+":",g=b0.r,f=0;f<3;++f){e=m[f]
d=a7.e
d===$&&A.h()
d=d.w
if(d==null)d=A.k(A.m(a8))
c=a7.fU(e.b)
b=g.b
if(d.w)A.k(A.m(a9))
a=d.a
c.C()
a0=a.b.aF(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.bn(c))
d.e.l(0,a0)
if(!(f<q.length))return A.f(q,f)
a1=q[f]
d=a1.c
a2=new A.bv(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,!0,a1.x,a1.y)
c=a7.f
c===$&&A.h()
a=l.h(s,f)
d.C()
a3=c.a
a4=a3.$ti
a3.a1(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.f(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ac()
b=b.gaA()
a3=A.G(b)
A.be(new A.U(b,a3.i("M(1)").a(d.gaC()),a3.i("U<1,M>")))
c=c.b
a3=c.$ti
a3.c.a(a)
a3.y[1].a(a2)
c.a1(a)
c=c.b
a=a.a
if(!(a>=0&&a<c.length))return A.f(c,a)
c[a].sb1(a2)
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.f(o,f)
a6=o[f]
B.a.a2(i,a6)
B.a.l(i,a0)
a=a7.e.w
d=a==null?A.k(A.m(a8)):a
if(d.w)A.k(A.m(a9))
d.a.b6(a6)
d.e.a2(0,a6)}p.k(0,b1,k)
r.k(0,b1,j)
if(j.length!==0)a7.at.k(0,b1,B.a.gP(j))
$.B.j().setAttribute("data-renderer-geometry-refreshes",""+(a7.ce+1));++a7.ce},
eO(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.x1)return
s=k.fr
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.h()
m=p.gbg().jq(k.fG(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.bv(m,p.b,p.c,p.d,p.e,p.f,p.r,!0,p.x,p.y)
p=k.f
p===$&&A.h()
n=r.c
p.hv(l)
p.b.jv(n,l)
s.k(0,b,r.hE(l,m))
s=k.y
n=r.d
B.a.a2(s,n)
B.a.l(s,m)
k.e.gbg().oT(n)},
jN(b1,b2,b3,b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=A.aK([b2],t.N),a9=b1.e,b0=a9.h(0,b2)
if(b0!=null)for(s=b0.a,r=b1.aB(s),q=J.Q(r.a),r=new A.S(q,r.b,r.$ti.i("S<1>"));r.m();){p=q.gn()
o=p.bO(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&a9.h(0,o)!=null)a8.l(0,o)}n=new A.k2(b1).jy(a8,b3)
m=A.e([],t.Fk)
l=A.e([],t.cv)
for(k=0;k<n.length;++k){j=n[k]
a9=j.b
i=new A.cy((a9>>>16&255)/255,(a9>>>8&255)/255,(a9&255)/255)
a9=j.a
h=new A.M(a9.a,a9.b,a9.c)
a9=j.d
s=j.c
if(k===0)B.a.l(l,new A.by(k,h,B.aG,i,a9,s,1.05,1.4))
else B.a.l(m,new A.kz(h,i,a9,s))}a9=b6.c
g=B.c.M(B.c.M(b8,24)+24,24)
f=B.c.F(a9,0,1)
e=(g>=6&&g<=18?Math.sin(3.141592653589793*((g-6)/12))*60:-15)*3.141592653589793/180
d=(90+g/24*360)*3.141592653589793/180
s=Math.cos(d)*Math.cos(e)
r=B.c.F(Math.sin(e),0,1)
q=Math.sin(d)*Math.cos(e)
p=B.c.F(1-r,0.1,0.9)
if(g>=5&&g<7){c=(g-5)/2
b=A.di(B.km,B.bp,c)
a=A.di(B.kp,B.bo,c)
a0=A.di(B.kh,B.bq,c)
a1=0.3+0.5*c
a2=0.25+0.2*c}else if(g>=7&&g<17){b=B.bp
a=B.bo
a0=B.bq
a1=0.85
a2=0.45}else if(g>=17&&g<19){c=(g-17)/2
b=A.di(B.bp,B.dg,c)
a=A.di(B.bo,B.dl,c)
a0=A.di(B.bq,B.dk,c)
a1=0.85*(1-c*0.6)
a2=0.45*(1-c*0.5)}else if(g>=19&&g<21){c=(g-19)/2
b=A.di(B.dg,B.dj,c)
a=A.di(B.dl,B.di,c)
a0=A.di(B.dk,B.dm,c)
a1=0.34*(1-c*0.6)
a2=0.22*(1-c*0.4)}else{b=B.dj
a=B.di
a0=B.dm
a1=0.15
a2=0.18}if(f>0){a3=A.di(a0,B.kx,f*0.7)
a1*=1-f*0.35
a2*=1-f*0.15}else a3=a0
a4=b7?1:0.15
B.c.F(f*0.75+B.c.F(0.3333333333333333,0,1)*0.25,0,1)
a5=b4>0
a6=a5?new A.M(s,r,q):new A.M(-s,p,-q)
a7=a5?new A.cy(b.c,b.b,b.a):new A.cy(0.35,0.45,0.65)
this.p1=new A.jR(B.hU,new A.cy(a3.c*0.08,a3.b*0.08,a3.a*0.08),1.5/(1+a9*0.45),14/(1+a9*0.16),new A.cy(a.c,a.b,a.a),Math.max(0.045,a2*(a5?b5:1)*a4),new A.nP(a6,a7,a1*a4),m,l)},
b9(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.x1)throw A.d(A.m("Pixeldart runtime is not initialized"))
s=i.ok
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.dt(s)
s=$.xA()
q=s.b
p=s.c
o=A.wj(i.b/i.c,p,s.a,q)
p=new A.fk(r,o,o.a5(0,r),B.ai,B.lR,q,p,i.b/i.c)
s=p}q=i.p1
p=i.p2
n=i.ry++
m=i.R8
l=new A.rr()
$.xv()
k=$.qe.$0()
l.a=k
l.b=null
k=i.e
k===$&&A.h()
j=i.f
j===$&&A.h()
k.mE(j,new A.o7(s,q,p,n,m))
i.p3=i.e.nH()
s=$.qe.$0()
l.b=s
i.p4=l.gnE()/1000},
bw(a){},
j9(){},
jo(){++this.RG},
h8(a,b){var s=A.A8(a,b),r=A.G_(a,b),q=A.K(s.c,t.i)
B.a.L(q,r)
return A.e([new A.fQ("wall",new Float32Array(A.a1(q))),new A.fQ("floor",s.a),new A.fQ("ceiling",s.b)],t.pv)},
fU(a){var s,r,q,p,o,n=A.e([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.f(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.f(a,o)
B.a.l(n,new A.M(q,p,a[o]))}if(n.length===0)throw A.d(A.m("house surface mesh cannot be empty"))
return new A.ch(B.a9,a,null,A.be(n))},
lw(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.h8(a2,a3),a0=a3.a,a1=b.k2.h(0,a0)
if(a1==null)throw A.d(A.m("surface materials missing for room "+a0))
s=A.e([],t.s6)
r=A.e([],t.s3)
q=A.e([],t.h1)
for(p=b.y,o=b.Q,n="room:"+a0+":",m=0;m<3;++m){l=a[m]
k=b.e
k===$&&A.h()
k=k.w
if(k==null)k=A.k(A.m("renderer is not initialized"))
j=b.fU(l.b)
i=l.a
if(k.w)A.k(A.m("resource library is disposed"))
h=k.a
j.C()
g=h.b.aF(j,n+i)
f=g.a
h.c.k(0,f,h.bn(j))
k.e.l(0,g)
i=a1.h(0,i)
i.toString
e=new A.bv(g,i,B.A,-1,B.S,B.a8,!0,!0,0,null)
i=b.f
i===$&&A.h()
B.A.C()
k=i.a
j=k.$ti
k.a1(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.f(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.A.ac()
k=k.gaA()
h=A.G(k)
A.be(new A.U(k,h.i("M(1)").a(j.gaC()),h.i("U<1,M>")))
c=i.b.c6(e)
B.a.l(p,g)
B.a.l(o,c)
B.a.l(s,g)
B.a.l(r,c)
B.a.l(q,e)}b.z.k(0,a0,s)
b.ax.k(0,a0,r)
b.ay.k(0,a0,q)
if(r.length!==0)b.as.k(0,a0,B.a.gP(r))
if(q.length!==0)b.at.k(0,a0,B.a.gP(q))},
lZ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.e([],f),d=A.e([],f)
for(f=a.b,s=f.length,r=t.N,q=this.k2,p=0;p<f.length;f.length===s||(0,A.u)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.N(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cz(l,l.r,l.e,A.r(l).i("cz<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.be.h(0,i)
if(h==null)A.k(A.m("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.Y(d)
f=$.B.j()
B.a.Y(e)
f.setAttribute("data-renderer-house-materials",B.a.a4(e,","))
$.B.j().setAttribute("data-renderer-house-surface-bindings",B.a.a4(d,","))},
fk(a,b,c){var s,r,q,p=this
t.Bs.a(c)
s=p.e
s===$&&A.h()
r=s.gbg().jq(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.bv(r,p.lE(a),B.A,0,B.S,B.a8,!0,!0,0,null)
s=p.f
s===$&&A.h()
s.hv(q)
B.a.l(p.fx,new A.lI(a,s.b.c6(q),q,c))},
lE(a){var s=this.k1.h(0,a)
if(s==null){s=this.k4
s.toString}return s},
lz(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.f,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.d_(new Float32Array(5376))
g=this.ly(a0.b)
r=new A.a(d,b,f)
q=new A.a(e,b,f)
p=new A.a(e,c,f)
o=new A.a(d,c,f)
n=new A.a(d,b,a)
m=new A.a(e,b,a)
l=new A.a(e,c,a)
k=new A.a(d,c,a)
s.R(q,r,o,p,g)
s.R(n,m,l,k,g)
s.R(r,n,k,o,g)
s.R(m,q,p,l,g)
s.R(r,q,m,n,g)
s.R(o,k,l,p,g)
j=B.q.aP(s.a,0,s.b)
g=A.e([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.f(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.f(j,c)
g.push(new A.M(e,d,j[c]))}return new A.ch(B.a9,j,null,A.be(g))},
ly(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
dA(a){var s
A:{if(0===a){s=B.ki
break A}if(1===a){s=B.kk
break A}if(2===a){s=B.ks
break A}if(3===a){s=B.kB
break A}if(4===a){s=B.kD
break A}if(5===a){s=B.kq
break A}if(6===a){s=B.kA
break A}if(7===a){s=B.kv
break A}s=B.ky
break A}return s},
dC(a){var s
A:{if("architecture"===a){s=B.kj
break A}if("furniture"===a){s=B.dh
break A}if("fixture"===a){s=B.ku
break A}if("service"===a){s=B.kw
break A}if("story"===a){s=B.kt
break A}if("decor"===a){s=B.ko
break A}if("micro"===a){s=B.kr
break A}s=B.dh
break A}return s},
aW(a){return this.oe(t.G.a(a))},
oe(a){var s=0,r=A.bG(t.H),q,p=this,o,n,m,l
var $async$aW=A.bJ(function(b,c){if(b===1)return A.bD(c,r)
for(;;)switch(s){case 0:if(!p.x1){s=1
break}o=A.e([],t.iJ)
for(n=0;n<4;++n){m=B.i3[n]
l=a.h(0,m)
if(l!=null)o.push(p.cH(m,l))}s=3
return A.ao(A.od(o,t.H),$async$aW)
case 3:case 1:return A.bE(q,r)}})
return A.bF($async$aW,r)},
cH(a,b){return this.lD(a,b)},
lD(a,b){var s=0,r=A.bG(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$cH=A.bJ(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.go.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.b(A.b(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.ao(A.b1(A.b(m.decode()),t.X),$async$cH)
case 7:g=A.b(A.b(h.document).createElement("canvas"))
g.width=A.c(m.naturalWidth)
g.height=A.c(m.naturalHeight)
l=g
k=A.j(l.getContext("2d"))
if(!t.m.b(k)){h=A.m("2D canvas context unavailable for "+a)
throw A.d(h)}k.drawImage(m,0,0)
j=t.mV.a(A.b(k.getImageData(0,0,A.c(m.naturalWidth),A.c(m.naturalHeight))).data)
h=n.e
h===$&&A.h()
h=h.gbg()
f=new Uint8Array(A.a1(j))
if(h.w)A.k(A.m("resource library is disposed"))
h.c.pq(d,f)
$.B.j().setAttribute("data-renderer-texture-"+a,"loaded")
n.dG()
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.aj(c)
h=$.B.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
n.dG()
A.b(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.w(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bE(q,r)
case 2:return A.bD(o.at(-1),r)}})
return A.bF($async$cH,r)},
dG(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.x1||h.go.a===0)return
s=h.go
r=A.r(s).i("I<1,2>")
r=A.kh(new A.I(s,r),r.i("ck(p.E)").a(new A.tx()),r.i("p.E"),t.jP)
q=A.K(r,A.r(r).i("p.E"))
s=h.e
s===$&&A.h()
s=s.gbg()
p=s.d
o=(p===$?s.d=new A.ry(s.c,A.q(t.Aj,t.y)):p).oO(q)
s=o.a
n=A.e(s.slice(0),A.G(s))
B.a.U(n,new A.ty())
s=A.G(n)
r=s.i("i(1)")
s=s.i("U<1,i>")
m=new A.U(n,r.a(new A.tz()),s).a4(0,",")
l=new A.U(n,r.a(new A.tA()),s).a4(0,",")
s=o.cD(B.dC)
r=o.cD(B.dD)
k=o.cD(B.dE)
j=o.cD(B.dF);++h.to
i=$.B.j()
i.setAttribute("data-renderer-texture-residency",m)
i.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+k+";evicted="+j+";unique="+o.b)
i.setAttribute("data-renderer-texture-residency-handles",l)
i.setAttribute("data-renderer-texture-residency-revision",""+h.to)
if(!A.T($.B.j().hasAttribute("data-renderer-texture-residency-initial")))$.B.j().setAttribute("data-renderer-texture-residency-initial",m)},
c1(a,b){return new A.bv(a.a,a.b,a.c,b,a.e,a.f,a.r,!0,a.x,a.y)},
fG(a,b,c){var s,r,q,p,o,n=A.FZ(a,b,c),m=n.length
if(m===0)throw A.d(A.m("door "+c.a+" produced no leaf geometry"))
s=A.e([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.f(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.f(n,o)
s.push(new A.M(q,p,n[o]))}return new A.ch(B.a9,n,null,A.be(s))},
fZ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.X.j().aI(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.e([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.h)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.e([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.h)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.e([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.h)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.e([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.h)
k=r
break
default:k=null}o=new A.d_(new Float32Array(5376))
o.R(k[0],k[1],k[2],k[3],g)
n=B.q.aP(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.f(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.f(n,p)
k.push(new A.M(r,q,n[p]))}return new A.ch(B.a9,n,null,A.be(k))},
$iwr:1}
A.tB.prototype={
$0(){return!this.a.w},
$S:25}
A.tC.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:25}
A.tD.prototype={
$1(a){var s=this.a.dx.h(0,A.v(a))
s.toString
return s},
$S:41}
A.tE.prototype={
$1(a){var s,r,q,p
A.v(a)
s=this.a
r=s.id.h(0,a)
q=r==null
p=q?null:s.go.h(0,r)
if(q||p==null)throw A.d(A.m("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:41}
A.tx.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.ck(s,a.b,r)},
$S:149}
A.ty.prototype={
$2(a,b){var s=t.d
return B.b.G(s.a(a).a.a,s.a(b).a.a)},
$S:150}
A.tz.prototype={
$1(a){t.d.a(a)
return a.a.a+"="+a.b.b},
$S:42}
A.tA.prototype={
$1(a){var s=t.d.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:42}
A.fN.prototype={
gbq(){return A.qy("legacy",B.n,this.e,this.f,"legacy")},
gdR(){return this.x},
bf(){var s,r=this
if(r.w)return
s=A.CE(r.a,r.b,r.c)
r.r!==$&&A.L()
r.r=s
s.ic=s.ib=s.ia=r.d
r.w=!0},
b7(a,b){var s,r=this
if(a<=0||b<=0)throw A.d(A.z("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.h()
s.b7(a,b)}},
b9(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.w)throw A.d(A.m("legacy runtime is not initialized"))
if(i.x||$.h2==null)return;++i.y
$.B.j().setAttribute("data-renderer-frame-submits",""+i.y)
s=i.r
s===$&&A.h()
r=$.zB
q=$.bU.j()
p=B.c.F($.b_.j().gbB(),0,1)
s.ii=new A.a(Math.cos((p-0.5)*3.141592653589793),Math.sin(3.141592653589793*p),-0.5).gab().gab()
s.sj8(A.GG($.b_.j().gbB()))
o=Math.max(0.045,0.52*Math.sin(3.141592653589793*$.b_.j().gbB()))
s.im=o<0?0:o
o=$.bT.j()
n=o.w+=r
m=0.025*o.r
o.a=o.a.a9(0,o.d.a5(0,(A.vV(n*0.28,1309)*2-1)*m)).a9(0,o.c.a5(0,(A.vV(o.w*0.28,2839)*2-1)*m))
o=$.bT.j()
s.io=o.a
s.ee=o.b
s.ef=o.c
s.eg=o.d
l=A.EJ(0,0.25,0.11)
s.eh=l.a
s.ei=l.b
s.ej=l.c
o=s.cX
k=o==null?s.ca:o
if(k==null)k=s.bs
o=s.b3
o.bc(k)
s.aS.depthMask(!0)
o.mV(k,s.eh/255,s.ei/255,s.ej/255)
s.e9=s.cY=0
s.eb=!1
s.cc=0
j=$.h2
if(j!=null)j.nw($.ar,$.jf())
s.nS(r,q)
$.z5.j().eW(B.ep,r)},
bw(a){},
j9(){this.x=!0},
jo(){this.x=!1},
$iwr:1}
A.lI.prototype={}
A.iE.prototype={
hE(a,b){var s=this,r=b==null?s.d:b
return new A.iE(s.a,s.b,s.c,r,a)},
n2(a){return this.hE(a,null)}}
A.ta.prototype={}
A.u5.prototype={
$2(a,b){var s
A.xa(a,A.w(b))
switch(a){case"master":s=$.bq
if(s!=null)s.jR(b)
break
case"voice":s=$.bq
if(s!=null)s.jT(b)
break
case"effects":s=$.bq
if(s!=null)s.jQ(b)
break
case"ambience":s=$.bq
if(s!=null)s.jP(b)
break
case"music":s=$.bq
if(s!=null)s.jS(b)
break}},
$S:43}
A.u6.prototype={
$1(a){var s
A.xa("muted",""+a)
s=$.bq
if(s!=null)s.f9(a)},
$S:7}
A.u7.prototype={
$1(a){var s
A.xa("mono",""+a)
s=$.bq
if(s!=null)s.da(a)},
$S:7}
A.ud.prototype={
$2(a,b){A.xb(a,A.w(b))
A.za(a,b)},
$S:43}
A.ue.prototype={
$1(a){var s="high-contrast"
A.xb(s,""+a)
A.tV(s,a)},
$S:7}
A.uf.prototype={
$1(a){var s="strong-highlights"
A.xb(s,""+a)
A.tV(s,a)},
$S:7}
A.ug.prototype={
$1(a){$.dd().oX(a)
A.uU()
A.zc()},
$S:153}
A.uh.prototype={
$0(){var s=$.dd()
s.a=A.dy(null,1)
s.b=A.dy(null,1)
A.uU()
A.zc()},
$S:0}
A.ui.prototype={
$0(){A.dJ(this.a)},
$S:0}
A.uj.prototype={
$0(){this.a.a6()},
$S:0}
A.uk.prototype={
$0(){A.dJ(this.a)},
$S:0}
A.u8.prototype={
$0(){A.h6(this.a)},
$S:0}
A.u9.prototype={
$1(a){$.j3=a
A.zI()
A.wJ()},
$S:154}
A.ua.prototype={
$1(a){$.wU=a
A.zK()
A.zb()},
$S:155}
A.ub.prototype={
$1(a){$.ef=a
A.x0()
A.m9()},
$S:156}
A.uc.prototype={
$0(){$.ef=B.am
$.f3.j().f6($.ef)
A.x0()
A.m9()},
$S:0}
A.u2.prototype={
$1(a){var s,r=A.Al(a,A.zt()),q=r.a
$.uI=A.k_(q,a)
A.zL()
s=r.b
$.fZ.j().fa(a,q,s)
$.B.j().setAttribute("data-graphics-fallback",B.a.a4(s,"|"))},
$S:157}
A.u3.prototype={
$0(){A.dJ($.fZ.j())},
$S:0}
A.u4.prototype={
$0(){A.dJ($.fZ.j())},
$S:0}
A.u_.prototype={
$1(a){var s,r
$.wR=a
$.ae.j().f7(a.r)
s=$.ae.j()
r=s.ch
r.a=a.f
r.eR()
s.ba()
A.zJ()},
$S:158}
A.u0.prototype={
$0(){A.dJ($.iW.j())},
$S:0}
A.u1.prototype={
$0(){A.dJ($.iW.j())},
$S:0}
A.uM.prototype={
$0(){$.v2=A.T(this.a.matches)
$.xe=A.T(this.b.matches)
A.m9()},
$S:0}
A.uK.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.uL.prototype={
$1(a){A.b(a)
return this.a.$0()},
$S:1}
A.vo.prototype={
$1(a){var s
try{A.xV(a,this.a)
return!0}catch(s){if(A.aj(s) instanceof A.F)return!1
else throw s}},
$S:159}
A.vp.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.j1.j()
break
case 5:p=$.f3.j()
break
case 1:p=$.fZ.j()
break
case 4:p=$.fX.j()
break
case 2:p=$.iY.j()
break
case 3:p=$.iW.j()
break}s=p
r=null
switch(o){case 0:r=B.jN
break
case 5:r=B.jS
break
case 1:r=B.jO
break
case 4:r=B.jR
break
case 2:r=B.jP
break
case 3:r=B.jQ
break}q=r
p=B.cY.h(0,a)
p.toString
A.x_(s,q,p)},
$S:160}
A.vq.prototype={
$0(){A.dJ($.h0.j())},
$S:0}
A.vB.prototype={
$0(){return A.dJ($.h0.j())},
$S:0}
A.vJ.prototype={
$0(){$.cp.j().a6()},
$S:0}
A.vK.prototype={
$0(){$.cp.j().a6()},
$S:0}
A.vL.prototype={
$0(){A.x_($.h0.j(),B.d3,"pause.settings")},
$S:0}
A.vM.prototype={
$0(){$.cp.j().a6()
A.j9($.iZ.j())},
$S:0}
A.vN.prototype={
$0(){A.mo("saved")},
$S:0}
A.vO.prototype={
$0(){$.cp.j().a6()
A.j9($.iZ.j())},
$S:0}
A.vP.prototype={
$0(){A.x_($.m5.j(),B.jT,"pause.credits")},
$S:0}
A.vr.prototype={
$0(){return A.h6($.cp.j())},
$S:0}
A.vs.prototype={
$0(){return A.h6($.h_.j())},
$S:0}
A.vt.prototype={
$2(a,b){var s,r
if($.az.j().y){s=$.aG.j().gc5()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.f(r,a)
A.Eh(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.f(B.cJ,a)
A.Eg(B.cJ[a])}}},
$S:161}
A.vu.prototype={
$2(a,b){var s,r,q,p,o,n
if($.V.j().gaa().a===21){A.zR(!1)
return}s=$.X.j().r.b
$.V.j().ka(a,b,$.ar)
r=$.X.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.d9()
if(typeof n!=="number")return A.jd(n)
if(!(o<n))break
if($.X.b===$.X)A.k(A.a9(""))
p=B.a.h(B.N,q).b
o=$.h2
if(o!=null)o.d1(p)
o=$.bH
if(o!=null){n=$.X.b
if(n===$.X)A.k(A.a9(""))
o.oR(n,p)}o=q
if(typeof o!=="number")return o.a9()
q=o+1}A.mo("saved after sleep")},
$S:162}
A.vv.prototype={
$0(){return A.h6($.m7.j())},
$S:0}
A.vw.prototype={
$0(){return A.h6($.iZ.j())},
$S:0}
A.vx.prototype={
$0(){return A.dJ($.m5.j())},
$S:0}
A.vy.prototype={
$0(){A.h6($.iX.j())},
$S:0}
A.vz.prototype={
$0(){A.h6($.iX.j())},
$S:0}
A.vA.prototype={
$1(a){A.b(a)
return A.zQ()},
$S:1}
A.vC.prototype={
$1(a){A.b(a)
if(A.v(A.b(v.G.document).visibilityState)==="hidden")A.Fe()},
$S:2}
A.vD.prototype={
$1(a){var s,r,q,p,o,n
A.b(a)
if(A.v(a.code)==="CapsLock"&&!A.T(a.repeat)){a.preventDefault()
p=$.w4()
o=!p.a
p.a=o
if(o)A.pd(A.b(v.G.document),"exitPointerLock",t.X)
else $.ae.j().d2($.B.j())
return}p=$.w4()
if(p.a&&!A.T(a.repeat)){if(A.v(a.code)==="Escape"){a.preventDefault()
p.a=!1
$.ae.j().d2($.B.j())
return}if(A.v(a.code)==="ArrowUp"||A.v(a.code)==="KeyW"){a.preventDefault()
n=p.gcj().length
if(n>0)p.c=B.d.M(p.c-1+n,n)
return}if(A.v(a.code)==="ArrowDown"||A.v(a.code)==="KeyS"){a.preventDefault()
n=p.gcj().length
if(n>0)p.c=B.d.M(p.c+1,n)
return}if(A.v(a.code)==="ArrowLeft"||A.v(a.code)==="KeyA"){a.preventDefault()
if(p.b===4)p.e=B.cS[B.d.M(p.e.a-1+7,7)]
else{p=p.ghF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.F(p.y-p.w,p.f,p.r)}return}if(A.v(a.code)==="ArrowRight"||A.v(a.code)==="KeyD"){a.preventDefault()
if(p.b===4)p.e=B.cS[(p.e.a+1)%7]
else{p=p.ghF()
if(p!=null)if(p.e)p.z=!p.z
else p.y=B.c.F(p.y+p.w,p.f,p.r)}return}if(A.v(a.code)==="KeyR"){a.preventDefault()
p.oY()
return}if(B.b.T(A.v(a.code),"Digit")||B.b.T(A.v(a.code),"Numpad")){o=A.v(a.code)
o=A.xp(o,"Digit","")
s=A.xp(o,"Numpad","")
r=A.dv(s,null)
if(r!=null&&r>=1&&r<=5){a.preventDefault()
o=r-1
if(o>=0&&o<5){p.b=o
p.c=0}return}}return}if($.az.j().y&&!A.T(a.repeat))if($.cJ().o_(A.v(a.code))){a.preventDefault()
return}if(A.v(a.code)==="Escape"&&!A.T(a.repeat)){p=$.b0
if(p==null)A.j9($.cp.j())
else p.a6()
return}q=$.b0==null&&!p.a
if(!A.T(a.repeat)&&q)$.d8.j().bw(new A.kH(A.v(a.code),!0,1))
if(A.v(a.code)==="KeyP"&&!A.T(a.repeat)&&$.AN())$.mk=!$.mk
if(A.v(a.code)==="KeyR"&&!A.T(a.repeat)&&q&&$.A1){p=$.h7
if(p!=null)p.bQ()}if((A.v(a.code)==="KeyJ"||A.v(a.code)==="Tab")&&!A.T(a.repeat)&&!$.az.j().y){a.preventDefault()
A.jc($.h_.j())}if(A.v(a.code)==="KeyL"&&!A.T(a.repeat)&&!$.az.j().y)A.jc($.m7.j())
if(A.v(a.code)==="KeyH"&&!A.T(a.repeat)&&!$.az.j().y)A.jc($.iZ.j())
if(A.v(a.code)==="KeyO"&&!A.T(a.repeat)&&!$.az.j().y)A.jc($.j0.j())
if(A.v(a.code)==="KeyK"&&!A.T(a.repeat)&&q)A.mo("saved")},
$S:2}
A.vE.prototype={
$1(a){A.b(a)
if($.b0==null)$.d8.j().bw(new A.kH(A.v(a.code),!1,0))},
$S:2}
A.vF.prototype={
$1(a){A.b(a)
return A.ze()},
$S:1}
A.vG.prototype={
$1(a){A.b(a)
return A.ze()},
$S:1}
A.vH.prototype={
$1(a){return A.EI(A.b(a))},
$S:1}
A.vI.prototype={
$1(a){A.b(a)
if($.az.j().y){a.preventDefault()
A.EH(a)
return}$.ae.j().d2($.B.j())},
$S:2}
A.uN.prototype={
$1(a){var s=A.v(A.b(a).message)
A.uX(s,null)},
$S:2}
A.uO.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.uX("unhandled rejection: "+A.w(s==null?A.v(a.type):s),null)},
$S:2}
A.uS.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:40}
A.v0.prototype={
$0(){this.a.className=""},
$S:12}
A.v5.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:36}
A.uR.prototype={
$2(a,b){var s=t.q
return B.b.G(s.a(a).a,s.a(b).a)},
$S:22}
A.uY.prototype={
$1(a){return t.g.a(a).e},
$S:20}
A.uV.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:13}
A.uW.prototype={
$1(a){return t.e.a(a).w},
$S:15};(function aliases(){var s=J.e_.prototype
s.kj=s.p
s=A.p.prototype
s.ki=s.d5
s=A.hT.prototype
s.kk=s.bN})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"EQ","C6",33)
r(J.t.prototype,"gaq","q",10)
q(A,"F3","Co",29)
r(A.aI.prototype,"gaq","q",10)
p(A.cf.prototype,"gmY","S",10)
o(A,"FV","Dg",21)
o(A,"FW","Dh",21)
o(A,"FX","Di",21)
q(A,"A7","FB",0)
s(A,"G2","Cb",33)
r(A.cm.prototype,"gaq","q",10)
r(A.fM.prototype,"gaq","q",10)
o(A,"G5","Ep",11)
p(A.kj.prototype,"gp7","p8",72)
var n
p(n=A.kW.prototype,"gp_","p0",8)
p(n,"gpb","pc",8)
p(n,"gpd","pe",8)
p(n,"gp5","p6",8)
p(n,"gp9","pa",8)
q(A,"Ab","Dl",165)
q(A,"HB","wn",25)
p(A.dt.prototype,"gaC","js",56)
p(n=A.k5.prototype,"glG","lH",1)
p(n,"glI","lJ",1)
p(n,"glM","lN",1)
p(n,"glQ","lR",1)
p(n,"glS","lT",1)
p(n,"glO","lP",1)
p(n,"glK","lL",1)
o(A,"Gv","zk",11)
o(A,"Gz","zj",11)
o(A,"Gm","C3",166)
o(A,"Gn","C4",167)
o(A,"GD","BY",168)
p(A.hT.prototype,"glU","lV",1)
p(A.fH.prototype,"gls","lt",122)
p(A.l8.prototype,"go6","o7",24)
o(A,"Ak","Fh",169)
q(A,"Gr","Em",0)
o(A,"Gq","Ei",113)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.H,null)
q(A.H,[A.wd,J.k7,A.i3,J.eo,A.p,A.hl,A.dR,A.an,A.W,A.qL,A.aS,A.hL,A.S,A.hv,A.hs,A.ij,A.au,A.d1,A.bS,A.fz,A.fn,A.eY,A.dx,A.rF,A.pQ,A.ht,A.iJ,A.aa,A.pv,A.cg,A.ak,A.cz,A.hF,A.lC,A.li,A.i9,A.lW,A.tc,A.tL,A.cE,A.lv,A.lZ,A.tI,A.lj,A.cH,A.b2,A.ln,A.eU,A.ay,A.lk,A.lU,A.iU,A.iu,A.lB,A.eZ,A.iy,A.iO,A.m_,A.es,A.jA,A.tv,A.tM,A.et,A.dT,A.ls,A.ku,A.i7,A.td,A.F,A.P,A.aB,A.lX,A.rr,A.bl,A.iQ,A.rH,A.lQ,A.pP,A.ly,A.f0,A.qh,A.eH,A.nt,A.nu,A.kA,A.fk,A.jR,A.o7,A.dw,A.k0,A.cy,A.nP,A.kz,A.by,A.eE,A.bz,A.rL,A.ch,A.pR,A.qa,A.kI,A.bv,A.kT,A.kG,A.aJ,A.o9,A.kj,A.l_,A.pH,A.ck,A.c2,A.rA,A.ry,A.dF,A.kW,A.eB,A.jP,A.jQ,A.o8,A.o6,A.fO,A.aw,A.bf,A.aN,A.O,A.hm,A.qf,A.bk,A.qj,A.b7,A.ql,A.qk,A.lx,A.hZ,A.qB,A.te,A.lY,A.tH,A.lJ,A.lu,A.lN,A.lH,A.tq,A.bO,A.bM,A.aO,A.nK,A.nJ,A.jg,A.eG,A.oa,A.dt,A.kE,A.kX,A.M,A.hk,A.ll,A.jr,A.lm,A.jE,A.lp,A.hq,A.lq,A.jI,A.lr,A.jZ,A.lw,A.kl,A.lD,A.fi,A.js,A.wo,A.hV,A.lK,A.kD,A.lL,A.eO,A.kM,A.lO,A.kN,A.lP,A.kQ,A.lS,A.kP,A.lR,A.l3,A.m0,A.i0,A.le,A.m3,A.nr,A.jU,A.jW,A.hz,A.i5,A.A,A.jF,A.kB,A.ou,A.ed,A.cX,A.fr,A.t2,A.dG,A.iT,A.iS,A.m2,A.m1,A.tQ,A.jH,A.jm,A.fT,A.mS,A.mA,A.hi,A.mO,A.w8,A.n_,A.mU,A.ik,A.fj,A.np,A.o5,A.kU,A.os,A.k3,A.k5,A.p5,A.p9,A.nL,A.px,A.ki,A.hM,A.pD,A.d_,A.qr,A.qA,A.t4,A.is,A.lT,A.lG,A.lE,A.rm,A.a,A.kR,A.lf,A.ni,A.jJ,A.nV,A.fs,A.bp,A.ky,A.qb,A.fG,A.qG,A.eM,A.jS,A.oh,A.og,A.n6,A.fd,A.ff,A.fc,A.fe,A.jt,A.kk,A.im,A.lg,A.hB,A.oK,A.qC,A.a0,A.jM,A.k1,A.oL,A.jN,A.d7,A.jO,A.ec,A.dV,A.qD,A.eb,A.fS,A.oI,A.nZ,A.rn,A.oN,A.cT,A.cw,A.pc,A.pa,A.pb,A.cW,A.k2,A.ba,A.bu,A.bh,A.bj,A.dj,A.dA,A.aV,A.oT,A.cS,A.oJ,A.eA,A.oS,A.cR,A.oX,A.hU,A.hK,A.bg,A.rZ,A.kf,A.bX,A.pf,A.nd,A.ne,A.fg,A.nf,A.pr,A.pq,A.q7,A.q6,A.q8,A.q9,A.qz,A.kH,A.qx,A.e5,A.rk,A.fI,A.nM,A.t3,A.eS,A.jy,A.p3,A.p7,A.qE,A.cY,A.qF,A.jT,A.eR,A.t_,A.pK,A.cM,A.bs,A.q4,A.rs,A.eQ,A.eP,A.ii,A.lb,A.eJ,A.d5,A.rv,A.jh,A.w7,A.dL,A.mK,A.dM,A.nh,A.b3,A.nq,A.fo,A.dh,A.jz,A.hT,A.nQ,A.on,A.oo,A.fv,A.dW,A.oF,A.ox,A.oy,A.cV,A.fl,A.pU,A.du,A.e1,A.c0,A.pZ,A.qg,A.aW,A.rf,A.rj,A.cr,A.mH,A.l8,A.rY,A.dD,A.bn,A.c5,A.bR,A.la,A.ji,A.l7,A.fQ,A.iF,A.fN,A.lI,A.iE,A.ta])
q(J.k7,[J.ka,J.hE,J.hG,J.fw,J.fx,J.eC,J.dZ])
q(J.hG,[J.e_,J.t,A.e0,A.hQ])
q(J.e_,[J.kx,J.e7,J.ds])
r(J.k8,A.i3)
r(J.pe,J.t)
q(J.eC,[J.hD,J.kb])
q(A.p,[A.ea,A.R,A.cA,A.J,A.hu,A.cG,A.eX,A.lh,A.lV,A.cn])
q(A.ea,[A.er,A.iV])
r(A.ir,A.er)
r(A.ip,A.iV)
q(A.dR,[A.jv,A.ju,A.kV,A.vj,A.vl,A.t7,A.t6,A.tW,A.oe,A.to,A.tr,A.py,A.tt,A.vR,A.vS,A.vd,A.qi,A.rM,A.pE,A.pF,A.pG,A.pT,A.pC,A.pI,A.rB,A.rC,A.rE,A.o2,A.o0,A.o1,A.pW,A.pX,A.qq,A.qp,A.qo,A.qn,A.qm,A.qs,A.uC,A.uD,A.qI,A.qJ,A.vZ,A.vX,A.ob,A.pA,A.va,A.ov,A.ow,A.t0,A.t1,A.n1,A.n4,A.n3,A.n5,A.mT,A.mB,A.mC,A.mD,A.mQ,A.mR,A.mP,A.ot,A.p6,A.qw,A.nY,A.oi,A.ok,A.ol,A.om,A.n7,A.n8,A.n9,A.na,A.nb,A.nc,A.v8,A.ns,A.o_,A.oM,A.w_,A.uG,A.uF,A.tU,A.tT,A.v_,A.oZ,A.p_,A.p1,A.ro,A.oQ,A.oO,A.v7,A.oU,A.oW,A.v6,A.nU,A.pu,A.pm,A.rl,A.nN,A.nO,A.uP,A.q5,A.rw,A.rx,A.mz,A.mx,A.mX,A.mY,A.nk,A.no,A.nn,A.nm,A.nD,A.nC,A.nE,A.nF,A.nG,A.nB,A.nw,A.nx,A.nI,A.nR,A.nS,A.nT,A.nX,A.op,A.oq,A.oD,A.oB,A.oC,A.oA,A.oz,A.oH,A.ph,A.pi,A.pj,A.q_,A.q0,A.q1,A.ra,A.rb,A.r4,A.r5,A.r3,A.r6,A.qQ,A.r7,A.r2,A.qW,A.qX,A.qY,A.qZ,A.r_,A.r0,A.r1,A.qV,A.qR,A.qS,A.qT,A.qU,A.r9,A.r8,A.rh,A.rq,A.mJ,A.rW,A.rV,A.rX,A.rR,A.rU,A.rP,A.rO,A.vg,A.rN,A.mE,A.mF,A.mG,A.tD,A.tE,A.tx,A.tz,A.tA,A.u6,A.u7,A.ue,A.uf,A.ug,A.u9,A.ua,A.ub,A.u2,A.u_,A.uK,A.uL,A.vo,A.vp,A.vA,A.vC,A.vD,A.vE,A.vF,A.vG,A.vH,A.vI,A.uN,A.uO,A.uS,A.v5,A.uY,A.uV,A.uW])
q(A.jv,[A.tb,A.nv,A.pn,A.vk,A.tX,A.v9,A.of,A.tp,A.pw,A.pz,A.tw,A.rJ,A.rI,A.vT,A.pJ,A.rz,A.rD,A.o3,A.qK,A.vY,A.vW,A.n2,A.mV,A.mW,A.oj,A.v1,A.p0,A.p2,A.oR,A.pt,A.p8,A.pM,A.pN,A.pO,A.rt,A.ru,A.pk,A.pl,A.mI,A.rS,A.rQ,A.ty,A.u5,A.ud,A.vt,A.vu,A.uR])
r(A.aR,A.ip)
q(A.an,[A.eD,A.dB,A.kc,A.kZ,A.kJ,A.lt,A.hI,A.jk,A.cs,A.ie,A.kY,A.fJ,A.jx])
r(A.fL,A.W)
r(A.dS,A.fL)
q(A.R,[A.a6,A.ad,A.av,A.I,A.eW,A.ix])
q(A.a6,[A.ia,A.U,A.i2,A.lA])
r(A.dk,A.cA)
q(A.bS,[A.f1,A.f2,A.fP])
q(A.f1,[A.aU,A.iG])
q(A.f2,[A.ai,A.aZ])
r(A.iH,A.fP)
r(A.fV,A.fz)
r(A.e8,A.fV)
r(A.hn,A.e8)
q(A.fn,[A.a4,A.cP])
q(A.dx,[A.ho,A.iI,A.iP])
r(A.aI,A.ho)
q(A.ju,[A.qc,A.t8,A.t9,A.tJ,A.oc,A.tf,A.tk,A.tj,A.th,A.tg,A.tn,A.tm,A.tl,A.tG,A.uZ,A.tO,A.tN,A.uB,A.uu,A.uv,A.uA,A.up,A.ur,A.uq,A.uz,A.un,A.uo,A.uw,A.ux,A.uy,A.ut,A.us,A.uE,A.vb,A.qv,A.oY,A.oP,A.oV,A.uH,A.my,A.mM,A.mL,A.mZ,A.nz,A.nA,A.ny,A.or,A.oE,A.q3,A.qO,A.qP,A.rc,A.rd,A.re,A.ri,A.rT,A.tB,A.tC,A.uh,A.ui,A.uj,A.uk,A.u8,A.uc,A.u3,A.u4,A.u0,A.u1,A.uM,A.vq,A.vB,A.vJ,A.vK,A.vL,A.vM,A.vN,A.vO,A.vP,A.vr,A.vs,A.vv,A.vw,A.vx,A.vy,A.vz,A.v0])
r(A.hS,A.dB)
q(A.kV,[A.kS,A.fh])
q(A.aa,[A.cf,A.it,A.lz])
r(A.hH,A.cf)
r(A.fB,A.e0)
q(A.hQ,[A.km,A.b6])
q(A.b6,[A.iA,A.iC])
r(A.iB,A.iA)
r(A.hO,A.iB)
r(A.iD,A.iC)
r(A.hP,A.iD)
q(A.hO,[A.hN,A.kn])
q(A.hP,[A.ko,A.kp,A.kq,A.kr,A.ks,A.eF,A.hR])
r(A.fU,A.lt)
r(A.il,A.ln)
r(A.lM,A.iU)
r(A.iv,A.it)
r(A.cm,A.iI)
r(A.fM,A.iP)
q(A.es,[A.jo,A.jK,A.kd])
q(A.jA,[A.ng,A.pp,A.po,A.rK])
r(A.ke,A.hI)
r(A.tu,A.tv)
r(A.l2,A.jK)
q(A.cs,[A.fE,A.k4])
r(A.lo,A.iQ)
q(A.ls,[A.eI,A.ez,A.jj,A.d3,A.fq,A.jq,A.jw,A.jG,A.eL,A.e6,A.ev,A.ce,A.i1,A.cQ,A.fF,A.i6,A.fu,A.io,A.iq,A.jV,A.hx,A.jX,A.jY,A.ey,A.hy,A.eN,A.d0,A.fm,A.fR,A.jp,A.eq,A.jB,A.jD,A.b8,A.jn,A.cc,A.ex,A.eu,A.dl,A.hw,A.dU,A.dX,A.hj,A.kw,A.i_,A.eK,A.cF,A.dz,A.bQ,A.bx,A.k6,A.eT,A.cj,A.cK,A.ct,A.cL,A.dg,A.df,A.dO,A.dP,A.dN,A.ep,A.dn,A.cN,A.cO,A.dp,A.dm,A.dq,A.cd,A.cu,A.bi,A.ci,A.e2,A.cD,A.bP,A.bw,A.i4,A.bN,A.c3,A.c4,A.e9,A.d4])
q(A.dw,[A.br,A.bm,A.cB,A.kv,A.cv])
r(A.qH,A.lN)
r(A.lc,A.m1)
r(A.qu,A.t4)
r(A.qt,A.qu)
r(A.iz,A.d7)
q(A.hT,[A.hp,A.nH,A.nW,A.hA,A.oG,A.pg,A.q2,A.qN,A.fH,A.rp])
q(A.rY,[A.l9,A.lF,A.b9,A.l6,A.l4,A.ih,A.l5])
s(A.fL,A.d1)
s(A.iV,A.W)
s(A.iA,A.W)
s(A.iB,A.au)
s(A.iC,A.W)
s(A.iD,A.au)
s(A.fV,A.iO)
s(A.iP,A.m_)
s(A.lN,A.tq)
s(A.m1,A.tQ)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",y:"double",bd:"num",i:"String",n:"bool",aB:"Null",C:"List",H:"Object",Y:"Map",a5:"JSObject"},mangledNames:{},types:["~()","~(a5)","aB(a5)","n(i)","dr()","n(y)","0&()","~(n)","dr(bm?)","n(aw)","n(H?)","@(@)","aB()","n(eJ)","l(bX,bX)","n(ba)","n(@)","~(@)","n(bz)","n(aW)","n(bX)","~(~())","l(P<i,i>,P<i,i>)","n(O)","n(bR)","n()","~(H?,H?)","@()","n(l)","l()","@(i)","n(P<i,C<i>>)","n(ec)","l(@,@)","a(a)","aB(@)","n(bs)","n(cK)","n(cu)","l(l)","n(cd)","i(i)","i(c2)","~(i,y)","i?(i)","~(eO)","y()","fi()","n(P<i,aJ>)","aJ(P<i,aJ>)","aJ(aJ,aJ)","l(aO<bO>,aO<bO>)","c1(aO<bO>)","l(aO<bM>,aO<bM>)","c1(aO<bM>)","eG(y,y,y,y)","M(M)","H?(H?)","eO()","aB(@,cZ)","y(y,fT)","bY<aB>(P<i,i>)","l(+influence,light(y,by),+influence,light(y,by))","n(C<i>)","l(i,i)","l(bu,bu)","n(a5)","a5()","~(l,@)","n(cc)","~(H,cZ)","aB(H,cZ)","eE(cB)","n(aV)","fd(H?)","fc(H?)","fe(H?)","i(H?)","cB(l,l,i?)","ff(H?)","br(l,l,i?)","n(dA)","i(l,a0,a0,a0)","l(d7,d7)","~(@,@)","n(eb)","n(c2)","l(ck,ck)","l(+(y,y,y,y),+(y,y,y,y))","C<+(y,y,y,y)>()","n(bu)","l(l,aV)","n(cw)","n(cT)","aB(~())","l(cW,cW)","n(cS)","P<i,i>(i,@)","n(e5)","n(bQ)","n(bx)","eR()","bm(l,l,i?)","l(P<i,cM>,P<i,cM>)","n(id?)","P<l,@>(l,eQ)","P<l,@>(l,eP)","n(P<@,@>)","P<i,i>(P<@,@>)","n?(H?)","l(l,+(bm,dF))","i()","0^(p<0^>,H?)<H?>","~(l)","C<i>(C<i>)","~(y)","i(aw)","0^(i,p<0^>)<E>","l(ac,ac)","Y<i,H?>(du)","i(bi)","n(bi)","n(bw)","@(@,i)","n(dn)","n(cN)","n(cO)","n(dp)","n(dm)","n(dq)","Y<i,i>(Y<i,i>,i)","n(ct)","n(cL)","n(dg)","n(df)","i(cr)","l(cr,cr)","cv(l,l,i?)","l(bR,bR)","C<d5>()","n(d5)","n(P<i,i>)","l(c5,c5)","Y<i,@>(bR)","n(c4)","n(c3)","n(bN)","i0(br)","dr(i{fallback:i?})","ck(P<i,bm>)","l(c2,c2)","0&(i,l?)","by?()","~(bw)","~(dM)","~(fv)","~(dL)","~(dW)","~(fo)","n(fG)","~(bP)","~(l,i)","~(bQ,bx)","C<by>()","fk()","fO()","cT(H?)","cw(H?)","cS(H?)","~(bd)","l(l,+(br,ch))"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aU&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.iG&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.ai&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.aZ&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.iH&&A.Gt(a,b.a)}}
A.DB(v.typeUniverse,JSON.parse('{"ds":"e_","kx":"e_","e7":"e_","GX":"e0","t":{"C":["1"],"R":["1"],"a5":[],"p":["1"]},"ka":{"n":[],"ag":[]},"hE":{"aB":[],"ag":[]},"hG":{"a5":[]},"e_":{"a5":[]},"k8":{"i3":[]},"pe":{"t":["1"],"C":["1"],"R":["1"],"a5":[],"p":["1"]},"eo":{"ab":["1"]},"eC":{"y":[],"bd":[],"b4":["bd"]},"hD":{"y":[],"l":[],"bd":[],"b4":["bd"],"ag":[]},"kb":{"y":[],"bd":[],"b4":["bd"],"ag":[]},"dZ":{"i":[],"b4":["i"],"pY":[],"ag":[]},"ea":{"p":["2"]},"hl":{"ab":["2"]},"er":{"ea":["1","2"],"p":["2"],"p.E":"2"},"ir":{"er":["1","2"],"ea":["1","2"],"R":["2"],"p":["2"],"p.E":"2"},"ip":{"W":["2"],"C":["2"],"ea":["1","2"],"R":["2"],"p":["2"]},"aR":{"ip":["1","2"],"W":["2"],"C":["2"],"ea":["1","2"],"R":["2"],"p":["2"],"p.E":"2","W.E":"2"},"eD":{"an":[]},"dS":{"W":["l"],"d1":["l"],"C":["l"],"R":["l"],"p":["l"],"W.E":"l","d1.E":"l"},"R":{"p":["1"]},"a6":{"R":["1"],"p":["1"]},"ia":{"a6":["1"],"R":["1"],"p":["1"],"p.E":"1","a6.E":"1"},"aS":{"ab":["1"]},"cA":{"p":["2"],"p.E":"2"},"dk":{"cA":["1","2"],"R":["2"],"p":["2"],"p.E":"2"},"hL":{"ab":["2"]},"U":{"a6":["2"],"R":["2"],"p":["2"],"p.E":"2","a6.E":"2"},"J":{"p":["1"],"p.E":"1"},"S":{"ab":["1"]},"hu":{"p":["2"],"p.E":"2"},"hv":{"ab":["2"]},"hs":{"ab":["1"]},"cG":{"p":["1"],"p.E":"1"},"ij":{"ab":["1"]},"fL":{"W":["1"],"d1":["1"],"C":["1"],"R":["1"],"p":["1"]},"i2":{"a6":["1"],"R":["1"],"p":["1"],"p.E":"1","a6.E":"1"},"aU":{"f1":[],"bS":[]},"iG":{"f1":[],"bS":[]},"ai":{"f2":[],"bS":[]},"aZ":{"f2":[],"bS":[]},"iH":{"fP":[],"bS":[]},"hn":{"e8":["1","2"],"fV":["1","2"],"fz":["1","2"],"iO":["1","2"],"Y":["1","2"]},"fn":{"Y":["1","2"]},"a4":{"fn":["1","2"],"Y":["1","2"]},"eX":{"p":["1"],"p.E":"1"},"eY":{"ab":["1"]},"cP":{"fn":["1","2"],"Y":["1","2"]},"ho":{"dx":["1"],"e4":["1"],"R":["1"],"p":["1"]},"aI":{"ho":["1"],"dx":["1"],"e4":["1"],"R":["1"],"p":["1"]},"hS":{"dB":[],"an":[]},"kc":{"an":[]},"kZ":{"an":[]},"iJ":{"cZ":[]},"dR":{"ew":[]},"ju":{"ew":[]},"jv":{"ew":[]},"kV":{"ew":[]},"kS":{"ew":[]},"fh":{"ew":[]},"kJ":{"an":[]},"cf":{"aa":["1","2"],"wf":["1","2"],"Y":["1","2"],"aa.K":"1","aa.V":"2"},"ad":{"R":["1"],"p":["1"],"p.E":"1"},"cg":{"ab":["1"]},"av":{"R":["1"],"p":["1"],"p.E":"1"},"ak":{"ab":["1"]},"I":{"R":["P<1,2>"],"p":["P<1,2>"],"p.E":"P<1,2>"},"cz":{"ab":["P<1,2>"]},"hH":{"cf":["1","2"],"aa":["1","2"],"wf":["1","2"],"Y":["1","2"],"aa.K":"1","aa.V":"2"},"f1":{"bS":[]},"f2":{"bS":[]},"fP":{"bS":[]},"hF":{"Cz":[],"pY":[]},"lC":{"hY":[],"fA":[]},"lh":{"p":["hY"],"p.E":"hY"},"li":{"ab":["hY"]},"i9":{"fA":[]},"lV":{"p":["fA"],"p.E":"fA"},"lW":{"ab":["fA"]},"fB":{"e0":[],"a5":[],"ag":[]},"eF":{"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"],"ag":[],"W.E":"l","au.E":"l"},"e0":{"a5":[],"ag":[]},"hQ":{"a5":[]},"km":{"a5":[],"ag":[]},"b6":{"c_":["1"],"a5":[]},"hO":{"W":["y"],"b6":["y"],"C":["y"],"c_":["y"],"R":["y"],"a5":[],"p":["y"],"au":["y"]},"hP":{"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"]},"hN":{"o4":[],"W":["y"],"b6":["y"],"C":["y"],"c_":["y"],"R":["y"],"a5":[],"p":["y"],"au":["y"],"ag":[],"W.E":"y","au.E":"y"},"kn":{"W":["y"],"b6":["y"],"C":["y"],"c_":["y"],"R":["y"],"a5":[],"p":["y"],"au":["y"],"ag":[],"W.E":"y","au.E":"y"},"ko":{"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"],"ag":[],"W.E":"l","au.E":"l"},"kp":{"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"],"ag":[],"W.E":"l","au.E":"l"},"kq":{"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"],"ag":[],"W.E":"l","au.E":"l"},"kr":{"ww":[],"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"],"ag":[],"W.E":"l","au.E":"l"},"ks":{"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"],"ag":[],"W.E":"l","au.E":"l"},"hR":{"id":[],"W":["l"],"b6":["l"],"C":["l"],"c_":["l"],"R":["l"],"a5":[],"p":["l"],"au":["l"],"ag":[],"W.E":"l","au.E":"l"},"lt":{"an":[]},"fU":{"dB":[],"an":[]},"cH":{"ab":["1"]},"cn":{"p":["1"],"p.E":"1"},"b2":{"an":[]},"il":{"ln":["1"]},"ay":{"bY":["1"]},"iU":{"yJ":[]},"lM":{"iU":[],"yJ":[]},"it":{"aa":["1","2"],"Y":["1","2"]},"iv":{"it":["1","2"],"aa":["1","2"],"Y":["1","2"],"aa.K":"1","aa.V":"2"},"eW":{"R":["1"],"p":["1"],"p.E":"1"},"iu":{"ab":["1"]},"cm":{"dx":["1"],"yb":["1"],"e4":["1"],"R":["1"],"p":["1"]},"eZ":{"ab":["1"]},"W":{"C":["1"],"R":["1"],"p":["1"]},"aa":{"Y":["1","2"]},"ix":{"R":["2"],"p":["2"],"p.E":"2"},"iy":{"ab":["2"]},"fz":{"Y":["1","2"]},"e8":{"fV":["1","2"],"fz":["1","2"],"iO":["1","2"],"Y":["1","2"]},"dx":{"e4":["1"],"R":["1"],"p":["1"]},"iI":{"dx":["1"],"e4":["1"],"R":["1"],"p":["1"]},"fM":{"dx":["1"],"m_":["1"],"e4":["1"],"R":["1"],"p":["1"]},"lz":{"aa":["i","@"],"Y":["i","@"],"aa.K":"i","aa.V":"@"},"lA":{"a6":["i"],"R":["i"],"p":["i"],"p.E":"i","a6.E":"i"},"jo":{"es":["C<l>","i"]},"jK":{"es":["i","C<l>"]},"hI":{"an":[]},"ke":{"an":[]},"kd":{"es":["H?","i"]},"l2":{"es":["i","C<l>"]},"et":{"b4":["et"]},"y":{"bd":[],"b4":["bd"]},"dT":{"b4":["dT"]},"l":{"bd":[],"b4":["bd"]},"C":{"R":["1"],"p":["1"]},"bd":{"b4":["bd"]},"hY":{"fA":[]},"e4":{"R":["1"],"p":["1"]},"i":{"b4":["i"],"pY":[]},"ls":{"E":[]},"jk":{"an":[]},"dB":{"an":[]},"cs":{"an":[]},"fE":{"an":[]},"k4":{"an":[]},"ie":{"an":[]},"kY":{"an":[]},"fJ":{"an":[]},"jx":{"an":[]},"ku":{"an":[]},"i7":{"an":[]},"lX":{"cZ":[]},"bl":{"CN":[]},"iQ":{"l0":[]},"lQ":{"l0":[]},"lo":{"l0":[]},"ly":{"wp":[]},"f0":{"wp":[]},"eI":{"E":[]},"br":{"dw":[]},"bm":{"dw":[]},"cB":{"dw":[]},"cv":{"dw":[]},"kv":{"dw":[]},"ez":{"E":[]},"jj":{"E":[]},"d3":{"E":[]},"fq":{"E":[]},"jq":{"E":[]},"jw":{"E":[]},"jG":{"E":[]},"eL":{"E":[]},"e6":{"E":[]},"ev":{"E":[]},"ce":{"E":[]},"i1":{"E":[]},"cQ":{"E":[]},"fF":{"E":[]},"hZ":{"CC":[]},"lx":{"c1":[]},"lY":{"c1":[]},"lJ":{"CB":[]},"lu":{"BO":[]},"i6":{"E":[]},"bO":{"b4":["bO"]},"bM":{"b4":["bM"]},"fu":{"E":[]},"io":{"E":[]},"hk":{"am":[]},"ll":{"ac":[]},"jr":{"am":[]},"lm":{"ac":[]},"jE":{"am":[]},"lp":{"ac":[]},"iq":{"E":[]},"hq":{"am":[]},"lq":{"ac":[]},"jI":{"am":[]},"lr":{"ac":[]},"jZ":{"am":[]},"lw":{"ac":[]},"kl":{"am":[]},"lD":{"ac":[]},"js":{"CA":[]},"hV":{"am":[]},"lK":{"ac":[]},"kD":{"am":[]},"lL":{"ac":[]},"kM":{"am":[]},"lO":{"ac":[]},"kN":{"am":[]},"lP":{"ac":[]},"kQ":{"am":[]},"lS":{"ac":[]},"kP":{"am":[]},"lR":{"ac":[]},"l3":{"am":[]},"m0":{"ac":[]},"le":{"am":[]},"m3":{"ac":[]},"jV":{"E":[]},"hx":{"E":[]},"jX":{"E":[]},"jY":{"E":[]},"ey":{"E":[]},"hy":{"E":[]},"eN":{"E":[]},"d0":{"E":[]},"fm":{"E":[]},"jF":{"Bx":[]},"fR":{"E":[]},"b8":{"E":[]},"jp":{"E":[]},"eq":{"E":[]},"jB":{"E":[]},"jD":{"E":[]},"dG":{"dr":[]},"lc":{"BU":[]},"jn":{"E":[]},"cc":{"E":[]},"ex":{"E":[]},"iz":{"d7":[]},"eu":{"E":[]},"dl":{"E":[]},"dU":{"E":[]},"hw":{"E":[]},"dX":{"E":[]},"hj":{"E":[]},"kw":{"E":[]},"i_":{"E":[]},"eK":{"E":[]},"cF":{"E":[]},"dz":{"E":[]},"bQ":{"E":[]},"bx":{"E":[]},"k6":{"E":[]},"eT":{"E":[]},"cj":{"E":[]},"cK":{"E":[]},"ct":{"E":[]},"cL":{"E":[]},"dg":{"E":[]},"df":{"E":[]},"dO":{"E":[]},"dP":{"E":[]},"ep":{"E":[]},"dN":{"E":[]},"dn":{"E":[]},"cN":{"E":[]},"cO":{"E":[]},"dp":{"E":[]},"dm":{"E":[]},"dq":{"E":[]},"cd":{"E":[]},"cu":{"E":[]},"bi":{"E":[]},"ci":{"E":[]},"e2":{"E":[]},"cD":{"E":[]},"bP":{"E":[]},"bw":{"E":[]},"i4":{"E":[]},"bN":{"E":[]},"c3":{"E":[]},"c4":{"E":[]},"e9":{"E":[]},"d4":{"E":[]},"iF":{"wr":[]},"fN":{"wr":[]},"C2":{"C":["l"],"R":["l"],"p":["l"]},"id":{"C":["l"],"R":["l"],"p":["l"]},"CS":{"C":["l"],"R":["l"],"p":["l"]},"C0":{"C":["l"],"R":["l"],"p":["l"]},"ww":{"C":["l"],"R":["l"],"p":["l"]},"C1":{"C":["l"],"R":["l"],"p":["l"]},"CR":{"C":["l"],"R":["l"],"p":["l"]},"o4":{"C":["y"],"R":["y"],"p":["y"]},"BN":{"C":["y"],"R":["y"],"p":["y"]}}'))
A.DA(v.typeUniverse,JSON.parse('{"fL":1,"iV":2,"b6":1,"iI":1,"iP":1,"jA":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",B:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uRainIntensity;\nuniform float uRainWindowVisibility;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nfloat rainStreak(vec2 uv){\n  // Stable diagonal streaks: no time or allocation dependency, and no work\n  // when uRainIntensity is zero. The small hash offset avoids a tiled comb.\n  vec2 cell=vec2(floor(uv.x*96.0),floor(uv.y*18.0));\n  float phase=fract(uv.x*96.0+uv.y*18.0+hash(cell));\n  float width=smoothstep(.08,.0,abs(phase-.5));\n  float sparse=step(.72,hash(cell+vec2(19.0,7.0)));\n  return width*sparse;\n}\n\nvoid main(){\n  vec4 source=texture(uTex,vUv);\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  color=mix(color,reinhardToneMap(color),clamp(uToneMap,0.,1.));\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  float rain=clamp(uRainIntensity,0.,1.)*\n    clamp(uRainWindowVisibility,0.,1.);\n  color=mix(color,vec3(.56,.67,.76),rain*rainStreak(vUv)*.16);\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.a_
return{mq:s("cK"),dx:s("hi"),bC:s("cr"),v:s("b2"),iF:s("jm"),ul:s("df"),EL:s("cL"),xs:s("ct"),gc:s("dg"),lT:s("fc"),bJ:s("fd"),gI:s("fe"),ya:s("ff"),z3:s("bM"),Bu:s("fi"),rO:s("fl"),sU:s("dS"),hO:s("b4<@>"),CH:s("hm"),p:s("a4<i,i>"),I:s("a4<i,l>"),M:s("aI<i>"),f7:s("et"),fP:s("bN"),yb:s("dT"),he:s("R<@>"),yW:s("cc"),g:s("bX"),W:s("E"),yt:s("an"),hl:s("a0"),B:s("o4"),pH:s("aJ"),Fr:s("cM"),BO:s("ew"),ls:s("bY<aB>"),aJ:s("dm"),x:s("cd"),bK:s("dn"),gm:s("dp"),dn:s("cN"),mx:s("dq"),j_:s("cO"),EJ:s("cP<bP,i>"),_:s("dr"),Eb:s("cu"),qX:s("dX"),mF:s("cS"),eO:s("k3<H>"),iO:s("cv"),oW:s("cT"),fl:s("cw"),FA:s("p<hm>"),yT:s("p<i>"),x6:s("p<ck>"),oJ:s("p<y>"),tY:s("p<@>"),uI:s("p<l>"),Fg:s("t<cr>"),km:s("t<fl>"),ns:s("t<jJ>"),cO:s("t<dj>"),r:s("t<bX>"),uH:s("t<jN>"),Dl:s("t<a0>"),iJ:s("t<bY<~>>"),pC:s("t<jS>"),C1:s("t<dr>"),ka:s("t<bf>"),Fm:s("t<eA>"),vS:s("t<cR>"),pW:s("t<GW<H>>"),hr:s("t<eB>"),s3:s("t<cv>"),sL:s("t<a5>"),Bv:s("t<kf>"),yH:s("t<bh>"),Bq:s("t<P<i,i>>"),rq:s("t<Y<i,H>>"),A7:s("t<Y<i,i>>"),cs:s("t<Y<i,@>>"),fv:s("t<ki>"),td:s("t<hM>"),s6:s("t<br>"),pq:s("t<aw>"),bA:s("t<du>"),xz:s("t<bs>"),b4:s("t<bj>"),s0:s("t<eG>"),hc:s("t<cV>"),ea:s("t<cW>"),Fk:s("t<kz>"),qP:s("t<bu>"),kv:s("t<eJ>"),nR:s("t<+(i,C<bu>)>"),kd:s("t<+(i,i)>"),rh:s("t<+influence,light(y,by)>"),wt:s("t<+(l,i)>"),wx:s("t<+(y,y,y,y)>"),e_:s("t<am>"),u:s("t<ac>"),Ft:s("t<hZ>"),C:s("t<O>"),h1:s("t<bv>"),s2:s("t<c1>"),eY:s("t<aV>"),xB:s("t<cY>"),El:s("t<fI>"),AM:s("t<aO<bM>>"),fs:s("t<aO<bO>>"),cv:s("t<by>"),DZ:s("t<dA>"),s:s("t<i>"),qy:s("t<kU>"),fa:s("t<c2>"),k:s("t<M>"),h:s("t<a>"),ld:s("t<ii>"),Dc:s("t<dD>"),Fi:s("t<c5>"),jV:s("t<d5>"),yo:s("t<eR>"),E:s("t<ba>"),uk:s("t<bp>"),wf:s("t<iz>"),il:s("t<ec>"),l5:s("t<eb>"),ow:s("t<lH>"),j5:s("t<lI>"),pv:s("t<fQ>"),Fy:s("t<ed<eE>>"),EM:s("t<ed<ch>>"),w_:s("t<ed<bv>>"),f2:s("t<ed<dF>>"),Fa:s("t<fS>"),sj:s("t<n>"),n:s("t<y>"),zz:s("t<@>"),t:s("t<l>"),vj:s("t<a5?>"),Cf:s("t<H?>"),AN:s("t<bd>"),w:s("hE"),m:s("a5"),w7:s("a5()"),ud:s("ds"),Eh:s("c_<@>"),vp:s("C<fl>"),hk:s("C<bX>"),b:s("C<bf>"),xp:s("C<cv>"),nx:s("C<a5>"),rW:s("C<Y<i,i>>"),qr:s("C<br>"),R:s("C<aw>"),fG:s("C<cV>"),ba:s("C<cW>"),Es:s("C<bu>"),DX:s("C<+(i,i)>"),pL:s("C<+(l,i)>"),xM:s("C<+(y,y,y,y)>"),bE:s("C<bv>"),fx:s("C<cY>"),a:s("C<i>"),gt:s("C<ii>"),D0:s("C<dD>"),cf:s("C<c5>"),p7:s("C<d5>"),lm:s("C<is>"),dd:s("C<y>"),j:s("C<@>"),J:s("C<l>"),ik:s("C<a5?>"),vX:s("C<H?>"),m2:s("hK"),h6:s("P<i,aJ>"),gJ:s("P<i,cM>"),q:s("P<i,i>"),no:s("P<i,bm>"),AC:s("P<@,@>"),pr:s("P<l,@>"),yx:s("P<i,C<i>>"),mf:s("Y<i,dr>"),vD:s("Y<i,cB>"),ap:s("Y<i,aw>"),G:s("Y<i,i>"),m0:s("Y<i,n>"),gG:s("Y<i,y>"),P:s("Y<i,@>"),f:s("Y<@,@>"),pG:s("Y<l,eP>"),tQ:s("Y<l,eQ>"),aD:s("Y<i,C<+(y,y,y,y)>>"),Bx:s("Y<i,C<i>>"),oZ:s("Y<i,H?>"),q1:s("Y<c4,C<c5>>"),ee:s("Y<l,Y<i,i>>"),jT:s("U<i,i?>"),pw:s("cB"),kc:s("br"),rV:s("fB"),mV:s("eF"),c:s("aB"),K:s("H"),BB:s("bO"),A:s("aw"),oP:s("du"),wJ:s("bi"),E4:s("bs"),A_:s("cW"),T:s("bu"),DL:s("hU"),Y:s("eJ"),op:s("GY"),ep:s("+()"),k0:s("+(br,ch)"),ut:s("+(bm,dF)"),rf:s("+(y,y)"),mn:s("+influence,light(y,by)"),nz:s("+(y,y,y,y)"),ez:s("hY"),wZ:s("ac"),tc:s("cX<cv,bv>"),ou:s("cX<cB,eE>"),wm:s("cX<br,ch>"),qq:s("cX<bm,dF>"),j2:s("O"),m3:s("bv"),yz:s("c1"),U:s("aV"),F3:s("cY"),Q:s("e4<i>"),oG:s("e4<l>"),en:s("bw"),gl:s("aW"),wU:s("e5"),u5:s("bx"),bG:s("bQ"),ho:s("fI"),EH:s("aO<bM>"),E0:s("aO<bO>"),l:s("cZ"),w8:s("dA"),qL:s("b8"),N:s("i"),Aj:s("bm"),jP:s("ck"),d:s("c2"),bp:s("e6"),sg:s("ag"),bs:s("dB"),qF:s("e7"),hL:s("e8<i,i>"),jC:s("l_"),eP:s("l0"),cV:s("M"),a7:s("a"),qY:s("bz"),L:s("bR"),gM:s("c3"),hF:s("c4"),vw:s("eP"),BX:s("eQ"),aA:s("dD"),AP:s("c5"),sy:s("lb"),bB:s("b9"),aS:s("d5"),fu:s("eR"),fw:s("J<bN>"),vL:s("J<cc>"),vK:s("J<cd>"),Fj:s("J<bx>"),rZ:s("J<bQ>"),vY:s("J<i>"),r4:s("J<bz>"),g2:s("J<c3>"),cE:s("J<c4>"),rt:s("S<bw>"),xG:s("S<aW>"),fh:s("S<bz>"),Ai:s("cG<i>"),e:s("ba"),dr:s("is"),hR:s("ay<@>"),BT:s("iv<H?,H?>"),Ez:s("d7"),rL:s("fO"),fo:s("lE"),xT:s("ec"),wV:s("eb"),la:s("lF"),cX:s("lG"),qS:s("iE"),jS:s("fT"),kA:s("lT"),Br:s("cn<c1>"),V:s("iS"),jm:s("iT"),y:s("n"),Bs:s("n()"),kr:s("n(bN)"),e2:s("n(cc)"),rg:s("n(cd)"),bl:s("n(H)"),pz:s("n(bw)"),aV:s("n(aW)"),y2:s("n(bx)"),ty:s("n(bQ)"),Ag:s("n(i)"),rd:s("n(bz)"),da:s("n(c3)"),qR:s("n(c4)"),i:s("y"),z:s("@"),pF:s("@()"),h_:s("@(H)"),nW:s("@(H,cZ)"),S:s("l"),eZ:s("bY<aB>?"),r9:s("t<H?>?"),uh:s("a5?"),rK:s("C<@>?"),jd:s("Y<i,C<i>>?"),X:s("H?"),D:s("i?"),oI:s("i?(i)"),Fx:s("id?"),F:s("eU<@,@>?"),Af:s("lB?"),k7:s("n?"),wK:s("n(fG)?"),u6:s("y?"),lo:s("l?"),s7:s("bd?"),Z:s("~()?"),Cv:s("~(dL)?"),kC:s("~(dM)?"),pf:s("~(fo)?"),hq:s("~(fv)?"),CA:s("~(dW)?"),hQ:s("~(bP)?"),Ci:s("~(bw)?"),nf:s("~(bQ,bx)?"),DI:s("~(i,y)?"),xl:s("~(n)?"),vR:s("~(l)?"),dt:s("~(l,i)?"),o:s("bd"),H:s("~"),O:s("~()"),m1:s("~(i,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hP=J.k7.prototype
B.a=J.t.prototype
B.d=J.hD.prototype
B.c=J.eC.prototype
B.b=J.dZ.prototype
B.hQ=J.ds.prototype
B.hR=J.hG.prototype
B.q=A.hN.prototype
B.d1=A.hR.prototype
B.df=J.kx.prototype
B.bJ=J.e7.prototype
B.a6=new A.cK(1,"standard")
B.K=new A.jh(B.a6)
B.bN=new A.cK(0,"concise")
B.bO=new A.cK(2,"verbose")
B.am=new A.dL(null,null,null,null,null)
B.mO=new A.jj(0,"opaque")
B.dR=new A.jn(4,"ambience")
B.bS=new A.ct(3,"mono")
B.aL=new A.dg(0,"full")
B.bR=new A.ct(0,"auto")
B.bQ=new A.cL(1,"standard")
B.bP=new A.df(0,"defaultMix")
B.aM=new A.dM(B.bR,B.bQ,B.aL,B.bP)
B.dY=new A.hj("pixeldart initialization failed",1,"pixeldartInitializationFailed")
B.dZ=new A.hj("webgl2 unavailable",0,"webglUnavailable")
B.a_=new A.i_(1,"pixeldart")
B.e_=new A.fg(B.a_,!1,!0,!1,null,!1,null,!1,null)
B.bU=new A.dN(1,"capturing")
B.e0=new A.dh(B.bU,null)
B.bV=new A.dN(3,"rejected")
B.aN=new A.dh(B.bV,null)
B.bW=new A.dN(4,"applied")
B.bT=new A.dh(B.bW,null)
B.bX=new A.dN(5,"cancelled")
B.e1=new A.dh(B.bX,null)
B.aO=new A.dN(2,"conflict")
B.an=new A.jp(0,"add")
B.e5=new A.eq(0,"zero")
B.a7=new A.eq(1,"one")
B.a8=new A.jq(0,"alpha")
B.E=new A.dO(1,"button")
B.o=new A.dP(0,"normal")
B.e8=new A.b3("settings.back",B.E,"back","back to pause menu",B.o)
B.ao=new A.dO(0,"heading")
B.e9=new A.b3("settings.heading",B.ao,"Settings",null,B.o)
B.ea=new A.b3("settings.controls.heading",B.ao,"Controls",null,B.o)
B.eb=new A.b3("settings.controls.back",B.E,"back","back to settings categories",B.o)
B.ec=new A.b3("pause.heading",B.ao,"Paused",null,B.o)
B.ed=new A.dO(3,"slider")
B.ee=new A.dO(4,"toggle")
B.bY=new A.dO(5,"keybind")
B.ap=new A.dP(5,"disabled")
B.ef=new A.dP(6,"error")
B.eg=new A.dP(7,"destructive")
B.bZ=new A.dP(8,"remapping")
B.c_=new A.hi()
B.c0=new A.nd()
B.aP=new A.ne()
B.mP=new A.ng()
B.eh=new A.jo()
B.c1=new A.nr()
B.ei=new A.hs(A.a_("hs<0&>"))
B.c2=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.ej=function() {
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
B.eo=function(getTagFallback) {
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
B.ek=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.en=function(hooks) {
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
B.em=function(hooks) {
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
B.el=function(hooks) {
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
B.c3=function(hooks) { return hooks; }

B.k=new A.kd()
B.mQ=new A.pr()
B.ep=new A.H()
B.eq=new A.ku()
B.mR=new A.q7()
B.er=new A.q8()
B.es=new A.cY()
B.ad=new A.cj(1,"gradeLUT")
B.et=new A.cY()
B.eu=new A.qE()
B.ev=new A.qG()
B.f=new A.qL()
B.c4=new A.l2()
B.lV=new A.d3(0,"position")
B.m_=new A.bz(B.lV,0,3)
B.dJ=new A.d3(1,"normal")
B.m0=new A.bz(B.dJ,3,3)
B.lW=new A.d3(2,"color")
B.m1=new A.bz(B.lW,6,4)
B.lX=new A.d3(4,"alpha")
B.m2=new A.bz(B.lX,10,1)
B.lY=new A.d3(5,"uv0")
B.m3=new A.bz(B.lY,11,2)
B.lZ=new A.d3(8,"legacyMaterialEffect")
B.m4=new A.bz(B.lZ,13,1)
B.U=s([B.m_,B.m0,B.m1,B.m2,B.m3,B.m4],A.a_("t<bz>"))
B.a9=new A.rL()
B.c5=new A.ly()
B.x=new A.lM()
B.aq=new A.lX()
B.ew=new A.fj(1.3089969389957472,0.1,60)
B.ex=new A.fj(1.0471975511965976,0.1,60)
B.ey=new A.fj(0.8726646259971648,0.08,45)
B.aa=new A.fm(0,"colorOnly")
B.c6=new A.fm(1,"colorAndDepth")
B.aQ=new A.fm(2,"depthOnly")
B.aR=new A.jw(1,"srgb")
B.ar=new A.jB(1,"back")
B.as=new A.jD(0,"less")
B.at=new A.bN(0,"open")
B.c7=new A.bN(1,"chain")
B.c8=new A.bN(2,"throughDoor")
B.c9=new A.bN(3,"letterbox")
B.ab=new A.bN(4,"ignore")
B.S=new A.fq(0,"opaque")
B.eE=new A.fq(1,"masked")
B.aS=new A.fq(2,"blended")
B.eF=new A.fr(!1,B.as,!1,!0,B.a7,B.a7,B.an,!1,B.ar,!0,!1,!0,!0,!0,!0,!1)
B.eG=new A.fr(!0,B.as,!1,!0,B.a7,B.a7,B.an,!0,B.ar,!0,!1,!0,!0,!0,!0,!1)
B.e6=new A.eq(2,"srcAlpha")
B.e7=new A.eq(3,"oneMinusSrcAlpha")
B.eH=new A.fr(!0,B.as,!1,!0,B.e6,B.e7,B.an,!0,B.ar,!0,!1,!0,!0,!0,!0,!1)
B.eI=new A.dT(0)
B.eJ=new A.dT(24e5)
B.ca=new A.cc(0,"compliance")
B.eK=new A.fs(B.ca)
B.cb=new A.cc(1,"rupture")
B.eL=new A.fs(B.cb)
B.cc=new A.cc(2,"synchronisation")
B.eM=new A.fs(B.cc)
B.cd=new A.eu(0,"front")
B.eN=new A.eu(1,"rearService")
B.eO=new A.eu(2,"sideBoundary")
B.eP=new A.eu(3,"roofline")
B.l=new A.dU(0,"north")
B.u=new A.dU(1,"east")
B.m=new A.dU(2,"south")
B.F=new A.dU(3,"west")
B.au=new A.hw(0,"ground")
B.av=new A.hw(1,"first")
B.eQ=new A.dl(0,"mantle")
B.eR=new A.dl(1,"portal")
B.eT=new A.dl(3,"inventory")
B.ce=new A.dl(4,"aftermath")
B.eS=new A.dl(2,"window")
B.eV=new A.dV(B.eS,"shutter","the shutter")
B.eU=new A.dl(5,"none")
B.eW=new A.dV(B.eU,null,null)
B.eX=new A.F("saved mantle history is malformed",null,null)
B.eY=new A.F("rupture elapsed time is malformed",null,null)
B.eZ=new A.F("presentation keys must be strings",null,null)
B.f_=new A.F("unsupported accessibility profile",null,null)
B.f0=new A.F("inventory inspections must be an object",null,null)
B.cf=new A.F("saved mantle state is malformed",null,null)
B.f1=new A.F("inactive rupture has elapsed time",null,null)
B.f2=new A.F("control sensitivity is outside 0.1\u20133.0",null,null)
B.f3=new A.F("invalid action bindings",null,null)
B.f4=new A.F("listener room is empty",null,null)
B.f5=new A.F("control bindings conflict",null,null)
B.f6=new A.F("saved difficulty state is malformed",null,null)
B.f7=new A.F("saved house drift state is malformed",null,null)
B.f8=new A.F("saved sleep record is malformed",null,null)
B.f9=new A.F("UI scale must be between 0.8 and 2.0",null,null)
B.fa=new A.F("unsupported settings store",null,null)
B.fb=new A.F("settings values must be an object",null,null)
B.fc=new A.F("saved day-loop sleepHistory must be a list",null,null)
B.fd=new A.F("invalid anisotropy limit",null,null)
B.fe=new A.F("audio event position is not finite",null,null)
B.ff=new A.F("event sequence must be non-negative",null,null)
B.fg=new A.F("inventory inspection counts are invalid",null,null)
B.fh=new A.F("only keybinds can be remapping",null,null)
B.fi=new A.F("modelScale must be positive and finite",null,null)
B.fj=new A.F("listener position is not finite",null,null)
B.fk=new A.F("invalid action ID",null,null)
B.fl=new A.F("saved window state is malformed",null,null)
B.fm=new A.F("unsupported graphics preset",null,null)
B.fn=new A.F("save run and meta must be objects",null,null)
B.fo=new A.F("saved house state is malformed",null,null)
B.fp=new A.F("saved sleep record must be an object",null,null)
B.fq=new A.F("sound cue must be a non-empty string",null,null)
B.fr=new A.F("saved session run is malformed",null,null)
B.fs=new A.F("save map keys must be strings",null,null)
B.ft=new A.F("unsupported graphics profile",null,null)
B.fu=new A.F("unsupported audio options",null,null)
B.fv=new A.F("transform.scale must be positive",null,null)
B.fw=new A.F("Escape is reserved for pause navigation",null,null)
B.fx=new A.F("saved day-loop state is malformed",null,null)
B.fy=new A.F("rupture extinguished mantle is unknown",null,null)
B.cg=new A.F("unsupported controls profile",null,null)
B.ch=new A.F("saved portal state is malformed",null,null)
B.fz=new A.F("acoustic portal profile is not finite",null,null)
B.fA=new A.F("saved house state does not match this house",null,null)
B.fB=new A.F("presentation snapshot contains a non-finite number",null,null)
B.fC=new A.F("unsupported gameplay settings profile",null,null)
B.fD=new A.F("save contains a non-finite number",null,null)
B.fE=new A.F("unsupported graphics store",null,null)
B.fF=new A.F("brush component needs an id and label",null,null)
B.fG=new A.F("text.json root must be an object",null,null)
B.fH=new A.F("event kind is empty",null,null)
B.fI=new A.F("invalid control binding token",null,null)
B.fJ=new A.F("audio transmission muffle is invalid",null,null)
B.fK=new A.F("acoustic portal muffle order is invalid",null,null)
B.fL=new A.F("unsupported settings profile",null,null)
B.fM=new A.F("saved session clock is malformed",null,null)
B.fN=new A.F("rupture mantle IDs are malformed",null,null)
B.fO=new A.F("invalid gameplay setting: contextualReminders",null,null)
B.fP=new A.F("invalid screen-reader verbosity",null,null)
B.fQ=new A.F("saved sleep record has an unknown enum",null,null)
B.fR=new A.F("audio cue variants are empty",null,null)
B.fS=new A.F("save root must be an object",null,null)
B.fT=new A.F("audio event identity is empty",null,null)
B.fU=new A.F("render capabilities contain invalid limits",null,null)
B.fV=new A.F("saved house overrides are malformed",null,null)
B.T=new A.cy(0,0,0)
B.cG=new A.cy(1,1,1)
B.iz=s([],t.Fk)
B.b6=s([],t.cv)
B.fW=new A.jR(B.T,B.T,0,1,B.cG,0,null,B.iz,B.b6)
B.ci=new A.aJ(0,0,0)
B.fX=new A.ev(0,"idle")
B.aw=new A.ev(1,"active")
B.fY=new A.ev(2,"ended")
B.fZ=new A.ev(3,"aborted")
B.cj=new A.fu(0,"outside")
B.h_=new A.fu(1,"intersects")
B.h0=new A.fu(2,"inside")
B.h1=new A.ex(0,"timeAdvanced")
B.h2=new A.ex(1,"dayEndReached")
B.h3=new A.ex(4,"slept")
B.h4=new A.ex(5,"complianceFloorTripped")
B.ck=new A.dm(0,"important")
B.cl=new A.dm(1,"always")
B.aT=new A.cd(0,"pauseAndMute")
B.cm=new A.dn(0,"press")
B.cn=new A.dn(1,"hold")
B.co=new A.dp(0,"compact")
B.cp=new A.dp(1,"spacious")
B.cq=new A.cN(1,"standard")
B.cr=new A.cN(2,"detailed")
B.cs=new A.dq(0,"toast")
B.ct=new A.dq(1,"detailed")
B.cu=new A.cO(1,"readable")
B.ha=new A.hx(0,"vertex")
B.cv=new A.hx(1,"indices")
B.cw=new A.jV(0,"staticDraw")
B.h=new A.hy(0,"ready")
B.ac=new A.hy(1,"lost")
B.hb=new A.ey(0,"color")
B.cx=new A.ey(1,"colorAndGlow")
B.hc=new A.ey(2,"colorDepthGlow")
B.aU=new A.ey(3,"depthOnly")
B.ax=new A.jX(1,"linear")
B.cy=new A.jY(0,"clampToEdge")
B.hd=new A.jW(1,1,1,!1,B.ax,B.ax,B.cy,1)
B.he=new A.cQ(0,"beforeShadow")
B.hf=new A.cQ(2,"beforeDepth")
B.cz=new A.cQ(3,"afterDepth")
B.cA=new A.cQ(4,"beforeWorld")
B.hg=new A.cQ(5,"afterWorld")
B.L=new A.cQ(6,"afterResolve")
B.hh=new A.cQ(9,"beforePresent")
B.cB=new A.ce(0,"readBeforeWrite")
B.hi=new A.ce(1,"duplicateWriter")
B.hj=new A.ce(2,"sampledMultisampledAttachment")
B.aV=new A.ce(3,"invalidResolve")
B.hk=new A.ce(4,"formatOrSizeMismatch")
B.hl=new A.ce(5,"unversionedReadWrite")
B.hm=new A.ce(6,"invalidHistoryRead")
B.hn=new A.ce(7,"dependencyCycle")
B.ho=new A.ce(8,"missingCapability")
B.cC=new A.cu(0,"high")
B.aW=new A.cu(1,"standard")
B.aX=new A.dW(1,B.aW,"auto",!1,"display","off","high")
B.ay=new A.dX(0,"player")
B.aY=new A.dX(1,"inserted")
B.cD=new A.dX(2,"warden")
B.cE=new A.ez(0,"wrongKind")
B.cF=new A.ez(1,"staleGeneration")
B.hr=new A.ez(2,"doubleRelease")
B.az=new A.ez(3,"releasedResource")
B.hu=new A.cR("kitchen-range","settle")
B.hv=new A.cR("front-door-knocker","knock")
B.hw=new A.cR("cellar-drain","drip")
B.hx=new A.cR("bedroom-timber","creak")
B.hy=new A.cR("kitchen-pipe","tick")
B.hz=new A.cR("bathroom-cistern","settle")
B.hA=new A.cR("landing-window","wind")
B.hO=new A.k6(1,"visitor")
B.hS=new A.po(null)
B.hT=new A.pp(null)
B.hU=new A.cy(0.008,0.012,0.024)
B.cH=s([0,2,2,3],t.t)
B.hV=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.aZ=s([B.ck,B.cl],A.a_("t<dm>"))
B.hW=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.D=new A.bw(0,"audio")
B.Q=new A.i4(0,"level")
B.lb=new A.aW("master","Master",B.D,B.Q,1,0,1,"audio")
B.lg=new A.aW("voice","Visitor voice",B.D,B.Q,1,0,1,"audio")
B.l7=new A.aW("effects","Effects",B.D,B.Q,1,0,1,"audio")
B.l8=new A.aW("ambience","House ambience",B.D,B.Q,1,0,1,"audio")
B.lc=new A.aW("music","Music",B.D,B.Q,1,0,1,"audio")
B.aD=new A.bw(1,"display")
B.lf=new A.aW("brightness","Display brightness",B.aD,B.Q,1,0.6,1.4,"display")
B.af=new A.i4(1,"toggle")
B.la=new A.aW("muted","Mute house audio",B.D,B.af,!1,null,null,"audio")
B.a1=new A.bw(2,"accessibility")
B.ld=new A.aW("mono","Mono-compatible mix",B.a1,B.af,!1,null,null,"audio")
B.l9=new A.aW("high-contrast","High-contrast interface",B.a1,B.af,!1,null,null,"display")
B.le=new A.aW("strong-highlights","Strong focus highlights",B.a1,B.af,!1,null,null,"display")
B.B=s([B.lb,B.lg,B.l7,B.l8,B.lc,B.lf,B.la,B.ld,B.l9,B.le],A.a_("t<aW>"))
B.y=s(["who","verb","object","place","time"],t.s)
B.hX=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uOcclusionStrength","uLightmapIntensity","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness"],t.s)
B.dS=new A.df(1,"strong")
B.b_=s([B.bP,B.dS],A.a_("t<df>"))
B.e2=new A.ep(0,"swap")
B.e3=new A.ep(1,"replace")
B.e4=new A.ep(2,"cancel")
B.hY=s([B.e2,B.e3,B.e4],A.a_("t<ep>"))
B.hZ=s([2,5,9,12,16,19],t.t)
B.h5=new A.cd(1,"pauseOnly")
B.h6=new A.cd(2,"continuePlayback")
B.aA=s([B.aT,B.h5,B.h6],A.a_("t<cd>"))
B.i_=s(["uQuantizationBits","uDitherStrength"],t.s)
B.i1=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.i2=s([B.at,B.c7,B.c8,B.c9,B.ab],A.a_("t<bN>"))
B.i3=s(["wall-plaster","grime","floor-linoleum","ceiling-stained"],t.s)
B.i4=s(["30","60","display"],t.s)
B.al=new A.c4(0,"full")
B.bK=new A.c4(1,"compressed")
B.bL=new A.c4(2,"off")
B.cI=s([B.al,B.bK,B.bL],A.a_("t<c4>"))
B.i5=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.dX=new A.dg(1,"reduced")
B.b0=s([B.aL,B.dX],A.a_("t<dg>"))
B.dT=new A.cL(0,"wide")
B.dU=new A.cL(2,"night")
B.b1=s([B.dT,B.bQ,B.dU],A.a_("t<cL>"))
B.i6=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.ii=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.cJ=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.b2=s([B.co,B.cp],A.a_("t<dp>"))
B.lu=new A.bQ(0,"long")
B.dy=new A.bQ(1,"short")
B.cK=s([B.lu,B.dy],A.a_("t<bQ>"))
B.b3=s(["Open the door","Keep the chain on","Answer through the door","Use the letterbox","Ignore the knock"],t.s)
B.X=new A.bP(0,"visual")
B.bj=new A.bP(1,"graphics")
B.Y=new A.bP(2,"gameplay")
B.bk=new A.bP(3,"controls")
B.G=new A.bP(4,"audio")
B.H=new A.bP(5,"accessibility")
B.ik=s([B.X,B.bj,B.Y,B.bk,B.G,B.H],A.a_("t<bP>"))
B.il=s([2.1,4.2,6.3],t.n)
B.im=s(["master","voice","effects","ambience","music"],t.s)
B.b4=s([B.cs,B.ct],A.a_("t<dq>"))
B.io=s(["res/house/house.json","assets/house/house.json"],t.s)
B.hp=new A.cu(2,"safe")
B.hq=new A.cu(3,"custom")
B.cL=s([B.cC,B.aW,B.hp,B.hq],A.a_("t<cu>"))
B.C=new A.cj(0,"inactive")
B.bv=new A.cj(2,"affineWarp")
B.bw=new A.cj(3,"vertexSnap")
B.bx=new A.cj(4,"tapeGiveup")
B.by=new A.cj(5,"portalFail")
B.a0=new A.cj(6,"lightsOut")
B.cM=s([B.C,B.ad,B.bv,B.bw,B.bx,B.by,B.a0],A.a_("t<cj>"))
B.ip=s(["uExposure","uVignette","uGrain","uRainIntensity","uRainWindowVisibility","uOutputEncoding","uToneMap"],t.s)
B.iq=s([B.ay,B.aY,B.cD],A.a_("t<dX>"))
B.ir=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.mJ=new A.bp("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.mI=new A.bp("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.mE=new A.bp("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.mM=new A.bp("ronnie.response","named","A route card has Ronnie written on its back.")
B.mL=new A.bp("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.is=s([B.mJ,B.mI,B.mE,B.mM,B.mL],t.uk)
B.mK=new A.bp("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.mH=new A.bp("ronnie.response","named","The name Ronnie holds when the room does not.")
B.mF=new A.bp("denise.revision","accepted","One correction remains yours to protect.")
B.mC=new A.bp("attercliffe.plate","kept","A second place survives the room changing around it.")
B.it=s([B.mK,B.mH,B.mF,B.mC],t.uk)
B.M=s([],t.cO)
B.iD=s([],t.Fm)
B.iC=s([],t.vS)
B.iu=s([],A.a_("t<cw>"))
B.iw=s([],t.yH)
B.b5=s([],t.b4)
B.iy=s([],t.ea)
B.V=s([],t.qP)
B.ix=s([],t.u)
B.cO=s([],t.xB)
B.iv=s([],t.El)
B.n=s([],t.s)
B.cP=s([],t.ld)
B.b7=s([],t.E)
B.iE=s([],t.t)
B.iF=s([],t.zz)
B.ht=new A.hB(15,"kitchen",-0.3,0)
B.hs=new A.hB(19,"spare-room",0,0.3)
B.N=s([B.ht,B.hs],A.a_("t<hB>"))
B.iH=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lr=new A.bx(0,"bed")
B.ls=new A.bx(1,"chair")
B.lt=new A.bx(2,"floor")
B.cQ=s([B.lr,B.ls,B.lt],A.a_("t<bx>"))
B.iI=s(["high","medium","low"],t.s)
B.dV=new A.ct(1,"headphones")
B.dW=new A.ct(2,"speakers")
B.b8=s([B.bR,B.dV,B.dW,B.bS],A.a_("t<ct>"))
B.iJ=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.b9=s([B.cm,B.cn],A.a_("t<dn>"))
B.bi=new A.ci(0,"root")
B.d4=new A.bi(0,"pauseMenu")
B.jM=new A.du(B.bi,B.d4,null)
B.iK=s([B.jM],t.bA)
B.ba=s([B.bN,B.a6,B.bO],A.a_("t<cK>"))
B.h8=new A.cO(0,"instant")
B.h9=new A.cO(2,"slow")
B.bb=s([B.h8,B.cu,B.h9],A.a_("t<cO>"))
B.iL=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.iM=s([B.D,B.aD,B.a1],A.a_("t<bw>"))
B.cR=s([B.l,B.u,B.m,B.F],A.a_("t<dU>"))
B.a2=new A.dz(0,"pbrMaterial")
B.ag=new A.dz(1,"shadowsAndOcclusion")
B.aE=new A.dz(2,"surfaceWeathering")
B.J=new A.dz(3,"atmosphereAndPost")
B.lo=new A.dz(4,"debugView")
B.bc=s([B.a2,B.ag,B.aE,B.J,B.lo],A.a_("t<dz>"))
B.bA=new A.b8(0,"depthTest")
B.bB=new A.b8(1,"depthFunc")
B.bC=new A.b8(2,"depthWrite")
B.bD=new A.b8(3,"blendEnable")
B.bE=new A.b8(4,"blendFunc")
B.bF=new A.b8(5,"blendEquation")
B.bG=new A.b8(6,"cullEnable")
B.bH=new A.b8(7,"cullFace")
B.dB=new A.b8(8,"frontFace")
B.lx=new A.b8(9,"stencilEnable")
B.dz=new A.b8(10,"colorMask")
B.dA=new A.b8(11,"scissorEnable")
B.iN=s([B.bA,B.bB,B.bC,B.bD,B.bE,B.bF,B.bG,B.bH,B.dB,B.lx,B.dz,B.dA],A.a_("t<b8>"))
B.bz=new A.cF(0,"none")
B.li=new A.cF(1,"albedoOnly")
B.lj=new A.cF(2,"normalsOnly")
B.lk=new A.cF(3,"roughnessOnly")
B.ll=new A.cF(4,"metallicOnly")
B.lm=new A.cF(5,"aoOnly")
B.ln=new A.cF(6,"wireframeOnly")
B.cS=s([B.bz,B.li,B.lj,B.lk,B.ll,B.lm,B.ln],A.a_("t<cF>"))
B.iO=s(["off","fxaa","msaa2","msaa4"],t.s)
B.eB=new A.dj("A.J.",1.275)
B.ez=new A.dj("A.J.",1.53)
B.eC=new A.dj("A.J.",1.77)
B.eD=new A.dj("A.J.",2.025)
B.eA=new A.dj("A.J.",4.8)
B.iP=s([B.eB,B.ez,B.eC,B.eD,B.eA],t.cO)
B.iQ=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.iR=s(["uBloomStrength"],t.s)
B.iS=s(["uLutSize","uStrength"],t.s)
B.iT=s([B.ca,B.cb,B.cc],A.a_("t<cc>"))
B.iU=s(["uTexelSize","uNear","uFar"],t.s)
B.cT=s(["uTexelStep"],t.s)
B.iV=s(["uninitialized"],t.s)
B.h7=new A.cN(0,"minimal")
B.bd=s([B.h7,B.cq,B.cr],A.a_("t<cN>"))
B.mG=new A.bp("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.mB=new A.bp("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.mA=new A.bp("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.mD=new A.bp("ronnie.response","named","The route card gives one name its own line.")
B.iW=s([B.mG,B.mB,B.mA,B.mD],t.uk)
B.a4=new A.c3(0,"waiting")
B.aj=new A.c3(1,"atDoor")
B.ak=new A.c3(2,"consulting")
B.aH=new A.c3(3,"resolved")
B.iX=s([B.a4,B.aj,B.ak,B.aH],A.a_("t<c3>"))
B.iY=s(["floor-linoleum","ceiling-stained"],t.s)
B.jC={uAlbedo:0}
B.cU=new A.a4(B.jC,[0],t.I)
B.jh={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.cV=new A.a4(B.jh,[2,3,4,5,6],t.I)
B.jJ={uSsaoRaw:0,uSceneDepth:1}
B.iZ=new A.a4(B.jJ,[0,1],t.I)
B.d2={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.ih=s(["KeyW","GamepadDpadUp"],t.s)
B.ig=s(["KeyS","GamepadDpadDown"],t.s)
B.i7=s(["KeyA","GamepadDpadLeft"],t.s)
B.i8=s(["KeyD","GamepadDpadRight"],t.s)
B.i9=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.id=s(["KeyQ","GamepadB"],t.s)
B.ij=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.iG=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.ie=s(["KeyR","GamepadX"],t.s)
B.ia=s(["KeyF","GamepadRB"],t.s)
B.ib=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.ic=s(["KeyL"],t.s)
B.i0=s(["Escape","GamepadMenu"],t.s)
B.j_=new A.a4(B.d2,[B.ih,B.ig,B.i7,B.i8,B.i9,B.id,B.ij,B.iG,B.ie,B.ia,B.ib,B.ic,B.i0],A.a_("a4<i,C<i>>"))
B.j0=new A.a4(B.d2,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.p)
B.jG={uScene:0,uHistory:1}
B.j1=new A.a4(B.jG,[0,1],t.I)
B.jf={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.j2=new A.a4(B.jf,["df3220cfbf417344253b9559f89f28db1a75695a","b1508db175d0b8a5f0104c75a3da2a33ba9ce9a3","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29","0.1.2.0"],t.p)
B.jt={aPosition:0,aUvMat:1}
B.cW=new A.a4(B.jt,[0,4],t.I)
B.jH={uScene:0,uLut:1}
B.j3=new A.a4(B.jH,[0,1],t.I)
B.jI={uSource:0}
B.cX=new A.a4(B.jI,[0],t.I)
B.jA={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.j4=new A.a4(B.jA,[0,1,2,3,4,5,6],t.I)
B.cY=new A.cP([B.X,"settings.visual",B.bj,"settings.graphics",B.Y,"settings.gameplay",B.bk,"settings.controls",B.G,"settings.audio",B.H,"settings.accessibility"],t.EJ)
B.cZ=new A.cP([B.X,"visual",B.bj,"graphics",B.Y,"gameplay",B.bk,"controls",B.G,"audio",B.H,"accessibility"],t.EJ)
B.jp={uSharp:0,uBlurred:1,uSceneDepth:2}
B.j5=new A.a4(B.jp,[0,1,2],t.I)
B.jL={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"step-above-0":27,"step-above-1":28,"step-above-2":29,"step-above-3":30}
B.j6=new A.a4(B.jL,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","sub","sub","sub","sub"],t.p)
B.jv={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12}
B.hK=new A.bg("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.hF=new A.bg("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.hJ=new A.bg("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.hM=new A.bg("wallpaper-damp","grime",7106925,0.94,0.76)
B.hG=new A.bg("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.hL=new A.bg("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.hN=new A.bg("wallpaper-peeling","grime",9340536,0.91,0.68)
B.hH=new A.bg("floor-wood","wall-plaster",7755327,0.88,0.22)
B.hD=new A.bg("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.hE=new A.bg("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.hB=new A.bg("floor-concrete","grime",7828331,0.96,0.92)
B.hC=new A.bg("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.hI=new A.bg("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.be=new A.a4(B.jv,[B.hK,B.hF,B.hJ,B.hM,B.hG,B.hL,B.hN,B.hH,B.hD,B.hE,B.hB,B.hC,B.hI],A.a_("a4<i,bg>"))
B.jD={uBloom:0}
B.j7=new A.a4(B.jD,[0],t.I)
B.jE={uSceneDepth:0}
B.j8=new A.a4(B.jE,[0],t.I)
B.jF={uScene:0}
B.j9=new A.a4(B.jF,[0],t.I)
B.O={}
B.d0=new A.a4(B.O,[],A.a_("a4<i,hi>"))
B.d_=new A.a4(B.O,[],t.p)
B.bf=new A.a4(B.O,[],A.a_("a4<i,y>"))
B.v=new A.a4(B.O,[],t.I)
B.mT=new A.a4(B.O,[],A.a_("a4<i,i?>"))
B.ja=new A.a4(B.O,[],A.a_("a4<@,@>"))
B.jj={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.jb=new A.a4(B.jj,[0,1,2,3,4,5,6],t.I)
B.d5=new A.cD(0,"resume")
B.d6=new A.cD(1,"settings")
B.d7=new A.cD(2,"controls")
B.d8=new A.cD(3,"save")
B.d9=new A.cD(4,"help")
B.da=new A.cD(5,"credits")
B.db=new A.cD(6,"back")
B.jc=new A.cP([B.d5,"pause.resume",B.d6,"pause.settings",B.d7,"pause.controls",B.d8,"pause.save",B.d9,"pause.help",B.da,"pause.credits",B.db,"pause.back"],A.a_("cP<cD,i>"))
B.jx={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.jd=new A.a4(B.jx,[0,1,2,3],t.I)
B.jK={uTex:0}
B.je=new A.a4(B.jK,[0],t.I)
B.bg=new A.cP([B.ad,1,B.bv,1.5,B.bw,1.5,B.bx,2,B.by,2,B.a0,4],A.a_("cP<cj,y>"))
B.iA=s([],t.bA)
B.iB=s([],A.a_("t<bi>"))
B.bh=new A.e1(B.iA,B.iB,null)
B.d3=new A.ci(1,"settings")
B.jN=new A.ci(2,"visual")
B.jO=new A.ci(3,"graphics")
B.jP=new A.ci(4,"gameplay")
B.jQ=new A.ci(5,"controls")
B.jR=new A.ci(6,"audio")
B.jS=new A.ci(7,"accessibility")
B.jT=new A.ci(8,"credits")
B.W=new A.bi(1,"settings")
B.jU=new A.bi(2,"journal")
B.jV=new A.bi(3,"sleep")
B.jW=new A.bi(4,"help")
B.jX=new A.bi(5,"visitor")
B.jY=new A.bi(6,"ending")
B.dc=new A.e2(0,"opened")
B.dd=new A.e2(2,"backed")
B.de=new A.e2(3,"resumed")
B.jZ=new A.e2(4,"dismissed")
B.Z=new A.e2(5,"unchanged")
B.k_=new A.bs("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.k0=new A.bs("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.k1=new A.bs("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.k2=new A.bs("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.k3=new A.bs("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.k4=new A.bs("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.k5=new A.bs("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.k6=new A.bs("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.k7=new A.bs("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.k8=new A.kv(0,1,null)
B.ka=new A.kw(1,"high")
B.k9=new A.q9(!1,!0,!0,!0,!1,B.ka,35,256)
B.kb=new A.kA(1,0,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,!1)
B.bl=new A.eI(0,"safe")
B.bm=new A.eI(1,"standard")
B.bn=new A.eI(2,"high")
B.P=new A.aI(B.O,0,t.M)
B.aB=new A.eH(B.bl,B.P)
B.jB={shadows:0}
B.l6=new A.aI(B.jB,1,t.M)
B.kd=new A.eH(B.bm,B.l6)
B.jm={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.kZ=new A.aI(B.jm,5,t.M)
B.ke=new A.eH(B.bn,B.kZ)
B.kc=new A.eI(4,"shipping")
B.jo={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.l_=new A.aI(B.jo,7,t.M)
B.mU=new A.eH(B.kc,B.l_)
B.kg=new A.aU(0,1)
B.kh=new A.aZ(0.35,0.52,0.88)
B.ki=new A.ai(0.46,0.25,0.2)
B.dg=new A.aZ(0.22,0.45,0.92)
B.kj=new A.ai(0.48,0.4,0.34)
B.kk=new A.ai(0.31,0.25,0.23)
B.bo=new A.aZ(0.75,0.52,0.42)
B.kl=new A.ai(-0.45,-0.45,14737646)
B.km=new A.aZ(0.4,0.65,0.95)
B.bp=new A.aZ(0.88,0.96,1)
B.kn=new A.ai(0.45,-0.45,16766720)
B.ko=new A.ai(0.37,0.33,0.31)
B.kp=new A.aZ(0.62,0.48,0.45)
B.kq=new A.ai(0.34,0.32,0.29)
B.dh=new A.ai(0.38,0.25,0.19)
B.bq=new A.aZ(0.9,0.8,0.72)
B.di=new A.aZ(0.28,0.16,0.12)
B.kr=new A.ai(0.31,0.28,0.24)
B.dj=new A.aZ(0.65,0.45,0.35)
B.ks=new A.ai(0.58,0.56,0.5)
B.dk=new A.aZ(0.2,0.38,0.9)
B.kt=new A.ai(0.44,0.37,0.28)
B.ku=new A.ai(0.52,0.5,0.44)
B.kv=new A.ai(0.24,0.25,0.27)
B.kw=new A.ai(0.28,0.27,0.25)
B.kx=new A.aZ(0.35,0.28,0.25)
B.dl=new A.aZ(0.52,0.32,0.38)
B.ky=new A.ai(0.42,0.4,0.38)
B.kz=new A.ai(0.45,0.45,16117990)
B.kA=new A.ai(0.18,0.2,0.21)
B.kB=new A.ai(0.2,0.12,0.1)
B.kC=new A.ai(-0.45,0.45,13840175)
B.dm=new A.aZ(0.35,0.2,0.15)
B.kD=new A.ai(0.12,0.15,0.2)
B.br=new A.i_(0,"legacy")
B.dn=new A.eK(0,"constructed")
B.z=new A.eK(1,"ready")
B.aC=new A.eK(2,"lost")
B.dp=new A.eK(3,"disposed")
B.mS=new A.jG(1,"errorsOnly")
B.kE=new A.kG(B.aB,384,216,0)
B.bs=new A.eL(0,"constructed")
B.kF=new A.eL(1,"initializing")
B.bt=new A.eL(2,"ready")
B.dq=new A.eL(3,"contextLost")
B.i=new A.fF(0,"read")
B.j=new A.fF(1,"write")
B.I=new A.fF(2,"historyRead")
B.r=new A.i1(0,"rgba8")
B.kG=new A.aN("dofBlurH",B.r,192,108,1,0)
B.kH=new A.aN("dofBlurV",B.r,192,108,1,0)
B.kI=new A.aN("dofOutput",B.r,384,216,1,0)
B.dr=new A.i1(2,"depth24")
B.kJ=new A.aN("shadowMap",B.dr,512,512,1,0)
B.kK=new A.aN("ssaoRaw",B.r,192,108,1,0)
B.kL=new A.aN("ssaoBlurred",B.r,192,108,1,0)
B.kM=new A.aN("gradeOutput",B.r,384,216,1,0)
B.kN=new A.aN("vhsOutput",B.r,384,216,1,0)
B.kO=new A.aN("sceneDepth",B.dr,384,216,1,0)
B.kP=new A.aN("bloomBlurH",B.r,192,108,1,0)
B.kQ=new A.aN("bloomBlurV",B.r,192,108,1,0)
B.kR=new A.aN("present",B.r,384,216,1,0)
B.bu=new A.aN("sceneColor",B.r,384,216,1,0)
B.kS=new A.aN("ps1Output",B.r,384,216,1,0)
B.kT=new A.eM(null,"save storage unavailable")
B.kU=new A.eM(null,"save could not be recovered")
B.kV=new A.eM(null,null)
B.jr={WheelUp:0,WheelDown:1}
B.kW=new A.aI(B.jr,2,t.M)
B.jl={kitchen:0,landing:1,bathroom:2,"spare-room":3}
B.kX=new A.aI(B.jl,4,t.M)
B.jy={open:0,closed:1}
B.kY=new A.aI(B.jy,2,t.M)
B.jk={Escape:0}
B.ds=new A.aI(B.jk,1,t.M)
B.ji={open:0,closed:1,mixed:2}
B.l0=new A.aI(B.ji,3,t.M)
B.jw={front:0,"rear-service":1}
B.l1=new A.aI(B.jw,2,t.M)
B.jz={overcast:0,rain:1}
B.l2=new A.aI(B.jz,2,t.M)
B.ju={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.l3=new A.aI(B.ju,16,t.M)
B.js={Escape:0,Tab:1,F11:2}
B.dt=new A.aI(B.js,3,t.M)
B.jq={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.l4=new A.aI(B.jq,5,t.M)
B.jn={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.ae=new A.aI(B.jn,7,t.M)
B.jg={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.l5=new A.aI(B.jg,9,t.M)
B.dw=new A.eN(2,"link")
B.lh=new A.i5(B.dw,"gl.createProgram() returned null")
B.du=new A.eN(0,"vertex")
B.dv=new A.eN(1,"fragment")
B.dx=new A.eN(3,"validation")
B.lp=new A.i6(0,"full")
B.lq=new A.i6(2,"culled")
B.a3=new A.M(0,1,0)
B.aG=new A.M(0,-1,0)
B.lv=new A.by(-1,B.a3,B.aG,B.cG,1,1,0.3,0.5)
B.cN=s([],t.n)
B.lw=new A.kR(!1,"","",B.cN,B.cN)
B.dC=new A.e6(0,"resident")
B.dD=new A.e6(1,"pending")
B.dE=new A.e6(2,"missing")
B.dF=new A.e6(3,"evicted")
B.ai=new A.M(0,0,0)
B.kf=new A.kE(0,0,0,1)
B.A=new A.kX(B.ai,B.kf)
B.ly=A.cq("GM")
B.lz=A.cq("GN")
B.lA=A.cq("o4")
B.lB=A.cq("BN")
B.lC=A.cq("C0")
B.lD=A.cq("C1")
B.lE=A.cq("C2")
B.lF=A.cq("a5")
B.lG=A.cq("H")
B.lH=A.cq("ww")
B.lI=A.cq("CR")
B.lJ=A.cq("CS")
B.lK=A.cq("id")
B.e=new A.d0(0,"float1")
B.aF=new A.d0(1,"float2")
B.p=new A.d0(2,"float3")
B.lL=new A.d0(3,"float4")
B.t=new A.d0(4,"mat4")
B.dG=new A.d0(5,"mat4Array")
B.bI=new A.A(B.e,0)
B.dH=new A.A(B.e,1)
B.R=new A.d0(6,"sampler")
B.w=new A.A(B.R,0)
B.ah=new A.A(B.R,1)
B.dI=new A.A(B.R,2)
B.lM=new A.A(B.R,3)
B.lN=new A.A(B.R,4)
B.lO=new A.A(B.R,5)
B.lP=new A.A(B.R,6)
B.lQ=new A.rK(!1)
B.lR=new A.M(0,0,1)
B.lS=new A.M(1,0,0)
B.lT=new A.M(1/0,1/0,1/0)
B.lU=new A.M(-1/0,-1/0,-1/0)
B.dK=new A.d3(6,"tangent4")
B.m5=new A.e9(0,"visitorAnswered")
B.dL=new A.e9(1,"visitorIgnored")
B.m6=new A.e9(2,"entryVerified")
B.m7=new A.e9(3,"entryContradicted")
B.m8=new A.e9(4,"exposureAccepted")
B.ma=new A.d4(1,"malformedDay")
B.mb=new A.d4(2,"malformedTier")
B.dM=new A.d4(3,"missingTierLines")
B.a5=new A.d4(6,"invalidPhase")
B.me=new A.bn(B.a5,"No reaction is due.")
B.mm=new A.b9(B.me)
B.mj=new A.bn(B.a5,"The active visit cannot be chosen.")
B.mn=new A.b9(B.mj)
B.mf=new A.bn(B.a5,"The active visit has no line to advance.")
B.mo=new A.b9(B.mf)
B.md=new A.d4(5,"noActiveVisit")
B.mg=new A.bn(B.md,"There is no active visit.")
B.dN=new A.b9(B.mg)
B.mi=new A.bn(B.a5,"A visit is already active.")
B.mp=new A.b9(B.mi)
B.mc=new A.d4(4,"noArrival")
B.ml=new A.bn(B.mc,"The authored arrival is missing.")
B.mq=new A.b9(B.ml)
B.mh=new A.bn(B.a5,"That answer is not offered.")
B.mr=new A.b9(B.mh)
B.m9=new A.d4(0,"missingCorpus")
B.mk=new A.bn(B.m9,"The authored visitor corpus is empty.")
B.ms=new A.b9(B.mk)
B.dO=new A.eT(1,"exact")
B.bM=new A.eT(2,"partial")
B.aI=new A.eT(3,"contradiction")
B.mt=new A.eT(0,"skipped")
B.mu=new A.eS(B.mt,B.P)
B.mv=new A.eS(B.bM,B.P)
B.mw=new A.ik(B.V,!1)
B.mx=new A.ik(B.V,!0)
B.dP=new A.io(0,"horizontal")
B.my=new A.io(1,"vertical")
B.dQ=new A.iq(0,"horizontal")
B.mz=new A.iq(1,"vertical")
B.aJ=new A.fR(0,"empty")
B.mN=new A.fR(1,"cpuReady")
B.aK=new A.fR(4,"released")})();(function staticFields(){$.ts=null
$.c9=A.e([],A.a_("t<H>"))
$.yg=null
$.qd=0
$.qe=A.F3()
$.xK=null
$.xJ=null
$.Af=null
$.A6=null
$.An=null
$.vf=null
$.vm=null
$.xl=null
$.tF=A.e([],A.a_("t<C<H>?>"))
$.h5=null
$.j5=null
$.j6=null
$.wY=!1
$.aq=B.x
$.yy=""
$.yz=null
$.yu=null
$.pV=null
$.c7=A.a8()
$.d8=A.a8()
$.bH=null
$.mf=null
$.tR=A.a8()
$.B=A.a8()
$.bT=A.a8()
$.ae=A.a8()
$.z5=A.a8()
$.h7=null
$.X=A.a8()
$.h2=null
$.b_=A.a8()
$.V=A.a8()
$.wI=A.a8()
$.wT=null
$.bq=null
$.wL=!1
$.mm=!1
$.j3=B.aM
$.ef=B.am
$.v2=!1
$.xe=!1
$.zv=null
$.me=null
$.ma=null
$.zh=0
$.mk=!1
$.zu=!1
$.wZ=0
$.zB=0
$.eg=0
$.A1=!1
$.wN="booting"
$.c8=0
$.ei=0
$.ar="hall"
$.j_=A.a8()
$.fY=A.a8()
$.bU=A.a8()
$.zA=null
$.x5=0
$.x9=1.65
$.uT=null
$.b0=null
$.ja=!1
$.cp=A.a8()
$.h0=A.a8()
$.h_=A.a8()
$.m6=A.a8()
$.z6=A.a8()
$.z4=A.a8()
$.az=A.a8()
$.m7=A.a8()
$.iZ=A.a8()
$.m5=A.a8()
$.j0=A.a8()
$.j1=A.a8()
$.f3=A.a8()
$.fZ=A.a8()
$.fX=A.a8()
$.iY=A.a8()
$.iW=A.a8()
$.iX=A.a8()
$.aG=A.a8()
$.m4=A.a8()
$.bb=A.a8()
$.v4=A.a2(t.S)
$.da=A.e([],t.s)
$.wS=null
$.zW=!1
$.z9=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"GP","Aw",()=>A.Ae("_$dart_dartClosure"))
s($,"GO","he",()=>A.Ae("_$dart_dartClosure_dartJSInterop"))
s($,"Hw","AS",()=>A.e([new J.k8()],A.a_("t<i3>")))
s($,"H0","Ax",()=>A.dC(A.rG({
toString:function(){return"$receiver$"}})))
s($,"H1","Ay",()=>A.dC(A.rG({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"H2","Az",()=>A.dC(A.rG(null)))
s($,"H3","AA",()=>A.dC(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"H6","AD",()=>A.dC(A.rG(void 0)))
s($,"H7","AE",()=>A.dC(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"H5","AC",()=>A.dC(A.yv(null)))
s($,"H4","AB",()=>A.dC(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"H9","AG",()=>A.dC(A.yv(void 0)))
s($,"H8","AF",()=>A.dC(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Hb","xw",()=>A.Df())
s($,"Hf","AL",()=>A.Cj(4096))
s($,"Hd","AJ",()=>new A.tO().$0())
s($,"He","AK",()=>new A.tN().$0())
s($,"Hc","AI",()=>A.Ci(A.a1(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Hp","hf",()=>A.mt(B.lG))
s($,"GZ","xv",()=>{A.Cx()
return $.qd})
s($,"GL","Av",()=>B.bu.jc())
s($,"GU","xu",()=>A.kt(A.e([255,255,255,255],t.t)))
s($,"GR","xr",()=>A.kt(A.e([128,128,255,255],t.t)))
s($,"GQ","xq",()=>A.kt(A.e([0,0,0,255],t.t)))
s($,"GS","xs",()=>A.kt(A.e([255,255,0,255],t.t)))
s($,"GT","xt",()=>A.kt(A.e([255,255,255,255],t.t)))
s($,"Hz","AU",()=>A.ig(0,1,0))
s($,"Ha","AH",()=>A.Dc(A.a2(t.N),0,0,A.ig(0,0,0)))
s($,"Hy","AT",()=>A.yl("^[a-z0-9][a-z0-9._-]*$"))
s($,"HC","f9",()=>{var q=$.yu
if(q==null){A.vc()
A.vc()
A.vc()
A.vc()
q=$.yu=new A.rv()}return q})
s($,"GV","w0",()=>A.wb(B.ck,!0,B.aT,B.cm,B.cp,B.cq,B.cs,B.cu))
s($,"Hl","AM",()=>new A.nf())
r($,"A_","dd",()=>A.wt(null,null))
r($,"uI","xB",()=>A.k_(null,null))
r($,"wR","f8",()=>A.fp(null,null,!1,1,!1,!1,2,1))
r($,"wU","w2",()=>$.w0())
s($,"Hq","AO",()=>new A.oJ())
s($,"Hr","AP",()=>new A.oS())
s($,"Hs","w3",()=>new A.pb(A.q(t.N,t.S)))
s($,"Hn","AN",()=>A.d2().gaK().h(0,"debugPause")==="1")
s($,"Hk","je",()=>A.d2().gaK().h(0,"automation")==="1")
s($,"Hh","w1",()=>A.Fj())
s($,"Hg","xx",()=>$.w1()!=null)
s($,"Hi","xy",()=>$.je()?A.d2().gaK().h(0,"captureMantleId"):null)
s($,"Hj","xz",()=>A.d2().gaK().h(0,"captureMantleLit")==="1")
r($,"x8","en",()=>A.ig(0,0,0))
r($,"x2","AR",()=>A.ig(0,0,0))
r($,"xf","jf",()=>A.ig(0,0,0))
s($,"Hm","xA",()=>A.Fk())
s($,"Hu","mu",()=>new A.o5(A.ig(0,0,0)))
s($,"Ht","AQ",()=>new A.px(new A.nL()))
s($,"Ho","cJ",()=>new A.on(A.e([],t.s)))
s($,"Hx","w4",()=>{var q=new A.rk(B.bz)
q.f=A.a_("C<e5>").a(A.e([A.aX(B.a2,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.aX(B.a2,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.aX(B.a2,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.aX(B.a2,!0,0.25,"Wrap lighting factor for soft skin/wax/candle bleed","pbr_wrap_diffuse",!1,"Wrap Lighting Subsurface",1,0,0.05),A.aX(B.a2,!0,0.04,"Base specular reflectance at normal incidence","pbr_fresnel_f0",!1,"Dielectric Fresnel F0",0.3,0.01,0.01),A.aX(B.ag,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.aX(B.ag,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.aX(B.ag,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.aX(B.ag,!0,1,"Shadow filter kernel radius and edge falloff","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.aX(B.aE,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.aX(B.aE,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.aX(B.aE,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.aX(B.J,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.aX(B.J,!0,0.035,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.aX(B.J,!0,0.8,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.aX(B.J,!0,0.6,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.aX(B.J,!0,0.003,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.aX(B.J,!0,0.06,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.aX(B.J,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05)],A.a_("t<e5>")))
return q})
s($,"Hv","hg",()=>new A.pZ(B.bh))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.e0,ArrayBuffer:A.fB,ArrayBufferView:A.hQ,DataView:A.km,Float32Array:A.hN,Float64Array:A.kn,Int16Array:A.ko,Int32Array:A.kp,Int8Array:A.kq,Uint16Array:A.kr,Uint32Array:A.ks,Uint8ClampedArray:A.eF,CanvasPixelArray:A.eF,Uint8Array:A.hR})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b6.$nativeSuperclassTag="ArrayBufferView"
A.iA.$nativeSuperclassTag="ArrayBufferView"
A.iB.$nativeSuperclassTag="ArrayBufferView"
A.hO.$nativeSuperclassTag="ArrayBufferView"
A.iC.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"
A.hP.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.vn
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
