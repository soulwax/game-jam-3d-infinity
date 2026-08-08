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
if(a[b]!==s){A.ya(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.pV(b)
return new s(c,this)}:function(){if(s===null)s=A.pV(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.pV(a).prototype
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
q_(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ow(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.pY==null){A.xO()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.qN("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.nv
if(o==null)o=$.nv=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.xW(a)
if(p!=null)return p
if(typeof a=="function")return B.dS
s=Object.getPrototypeOf(a)
if(s==null)return B.by
if(s===Object.prototype)return B.by
if(typeof q=="function"){o=$.nv
if(o==null)o=$.nv=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
qm(a,b){if(a<0||a>4294967295)throw A.c(A.aI(a,0,4294967295,"length",null))
return J.uw(new Array(a),b)},
qn(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("p<0>"))},
hY(a,b){if(a<0)throw A.c(A.w("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.i("p<0>"))},
uw(a,b){var s=A.e(a,b.i("p<0>"))
s.$flags=1
return s},
ux(a,b){var s=t.bP
return J.q4(s.a(a),s.a(b))},
qq(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
uy(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.qq(r))break;++b}return b},
uz(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.qq(q))break}return b},
dI(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eV.prototype
return J.i_.prototype}if(typeof a=="string")return J.d9.prototype
if(a==null)return J.eW.prototype
if(typeof a=="boolean")return J.hZ.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
if(typeof a=="symbol")return J.e5.prototype
if(typeof a=="bigint")return J.e4.prototype
return a}if(a instanceof A.A)return a
return J.ow(a)},
aX(a){if(typeof a=="string")return J.d9.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
if(typeof a=="symbol")return J.e5.prototype
if(typeof a=="bigint")return J.e4.prototype
return a}if(a instanceof A.A)return a
return J.ow(a)},
bQ(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
if(typeof a=="symbol")return J.e5.prototype
if(typeof a=="bigint")return J.e4.prototype
return a}if(a instanceof A.A)return a
return J.ow(a)},
xK(a){if(typeof a=="number")return J.d8.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.dq.prototype
return a},
t2(a){if(typeof a=="number")return J.d8.prototype
if(typeof a=="string")return J.d9.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.dq.prototype
return a},
xL(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ca.prototype
if(typeof a=="symbol")return J.e5.prototype
if(typeof a=="bigint")return J.e4.prototype
return a}if(a instanceof A.A)return a
return J.ow(a)},
q3(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.t2(a).U(a,b)},
a6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dI(a).S(a,b)},
aP(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.xU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aX(a).h(a,b)},
bR(a,b,c){return J.bQ(a).l(a,b,c)},
h8(a,b){return J.bQ(a).k(a,b)},
tB(a,b){return J.bQ(a).I(a,b)},
tC(a,b){return J.bQ(a).a1(a,b)},
tD(a,b,c){return J.xL(a).f_(a,b,c)},
tE(a,b){return J.bQ(a).bU(a,b)},
q4(a,b){return J.t2(a).F(a,b)},
jU(a,b){return J.bQ(a).P(a,b)},
bg(a){return J.dI(a).gE(a)},
q5(a){return J.aX(a).gG(a)},
tF(a){return J.aX(a).gL(a)},
K(a){return J.bQ(a).gu(a)},
aQ(a){return J.aX(a).gq(a)},
dK(a){return J.dI(a).gM(a)},
dL(a,b,c){return J.bQ(a).by(a,b,c)},
tG(a,b){return J.aX(a).sq(a,b)},
tH(a,b){return J.bQ(a).Y(a,b)},
oZ(a,b){return J.xK(a).lb(a,b)},
dM(a){return J.dI(a).n(a)},
tI(a,b){return J.bQ(a).dV(a,b)},
hV:function hV(){},
hZ:function hZ(){},
eW:function eW(){},
eX:function eX(){},
cA:function cA(){},
ii:function ii(){},
dq:function dq(){},
ca:function ca(){},
e4:function e4(){},
e5:function e5(){},
p:function p(a){this.$ti=a},
hX:function hX(){},
ln:function ln(a){this.$ti=a},
cV:function cV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d8:function d8(){},
eV:function eV(){},
i_:function i_(){},
d9:function d9(){}},A={p1:function p1(){},
jM(){return $},
tP(a,b,c){if(t.gt.b(a))return new A.fx(a,b.i("@<0>").D(c).i("fx<1,2>"))
return new A.cX(a,b.i("@<0>").D(c).i("cX<1,2>"))},
qt(a){return new A.da("Field '"+a+"' has been assigned during initialization.")},
ak(a){return new A.da("Field '"+a+"' has not been initialized.")},
uB(a){return new A.da("Field '"+a+"' has already been initialized.")},
ox(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ch(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mK(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dH(a,b,c){return a},
pZ(a){var s,r
for(s=$.bu.length,r=0;r<s;++r)if(a===$.bu[r])return!0
return!1},
mJ(a,b,c,d){A.iq(b,"start")
if(c!=null){A.iq(c,"end")
if(b>c)A.k(A.aI(b,0,c,"start",null))}return new A.fl(a,b,c,d.i("fl<0>"))},
i4(a,b,c,d){if(t.gt.b(a))return new A.d_(a,b,c.i("@<0>").D(d).i("d_<1,2>"))
return new A.cc(a,b,c.i("@<0>").D(d).i("cc<1,2>"))},
hW(){return new A.ee("No element")},
uu(){return new A.ee("Too many elements")},
iy(a,b,c,d,e){if(c-b<=32)A.v4(a,b,c,d,e)
else A.v3(a,b,c,d,e)},
v4(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aX(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a4()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
v3(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.K(a4+a5,2),f=g-j,e=g+j,d=J.aX(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a4()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
p=J.a6(a6.$2(b,a0),0)
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
A.iy(a3,a4,r-2,a6,a7)
A.iy(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a6(a6.$2(d.h(a3,r),b),0))++r
while(J.a6(a6.$2(d.h(a3,q),a0),0))--q
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
break}}A.iy(a3,r,q,a6,a7)}else A.iy(a3,r,q,a6,a7)},
cL:function cL(){},
eH:function eH(a,b){this.a=a
this.$ti=b},
cX:function cX(a,b){this.a=a
this.$ti=b},
fx:function fx(a,b){this.a=a
this.$ti=b},
fv:function fv(){},
ng:function ng(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.$ti=b},
da:function da(a){this.a=a},
ho:function ho(a){this.a=a},
mz:function mz(){},
C:function C(){},
a1:function a1(){},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cb:function cb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
d_:function d_(a,b,c){this.a=a
this.b=b
this.$ti=c},
dc:function dc(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
V:function V(a,b,c){this.a=a
this.b=b
this.$ti=c},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
bP:function bP(a,b){this.a=a
this.$ti=b},
fr:function fr(a,b){this.a=a
this.$ti=b},
ac:function ac(){},
c_:function c_(){},
eg:function eg(){},
fg:function fg(a,b){this.a=a
this.$ti=b},
fY:function fY(){},
dX(a,b,c){var s,r,q,p,o,n,m,l=A.ax(a.gN(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.ax(a.gap(),!0,c)
m=new A.a4(q,n,b.i("@<0>").D(c).i("a4<1,2>"))
m.$keys=l
return m}return new A.eJ(A.aS(a,b,c),b.i("@<0>").D(c).i("eJ<1,2>"))},
tV(){throw A.c(A.at("Cannot modify unmodifiable Map"))},
tW(){throw A.c(A.at("Cannot modify constant Set"))},
tg(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xU(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dM(a)
return s},
fa(a){var s,r=$.qA
if(r==null)r=$.qA=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
m2(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
io(a){var s,r,q,p
if(a instanceof A.A)return A.bt(A.be(a),null)
s=J.dI(a)
if(s===B.dR||s===B.dT||t.cx.b(a)){r=B.aQ(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bt(A.be(a),null)},
qB(a){var s,r,q
if(a==null||typeof a=="number"||A.bF(a))return J.dM(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cu)return a.n(0)
if(a instanceof A.bA)return a.eT(!0)
s=$.tz()
for(r=0;r<1;++r){q=s[r].ld(a)
if(q!=null)return q}return"Instance of '"+A.io(a)+"'"},
uL(){return Date.now()},
uU(){var s,r
if($.m3!==0)return
$.m3=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.m3=1e6
$.m4=new A.m1(r)},
uK(){if(!!self.location)return self.location.href
return null},
uV(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ad(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cM(s,10)|55296)>>>0,s&1023|56320)}}throw A.c(A.aI(a,0,1114111,null,null))},
e8(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
uT(a){var s=A.e8(a).getUTCFullYear()+0
return s},
uR(a){var s=A.e8(a).getUTCMonth()+1
return s},
uN(a){var s=A.e8(a).getUTCDate()+0
return s},
uO(a){var s=A.e8(a).getUTCHours()+0
return s},
uQ(a){var s=A.e8(a).getUTCMinutes()+0
return s},
uS(a){var s=A.e8(a).getUTCSeconds()+0
return s},
uP(a){var s=A.e8(a).getUTCMilliseconds()+0
return s},
uM(a){var s=a.$thrownJsError
if(s==null)return null
return A.c5(s)},
qC(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.an(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
jO(a){throw A.c(A.pU(a))},
d(a,b){if(a==null)J.aQ(a)
throw A.c(A.ot(a,b))},
ot(a,b){var s,r="index"
if(!A.aM(b))return new A.bJ(!0,b,r,null)
s=A.a(J.aQ(a))
if(b<0||b>=s)return A.li(b,s,a,r)
return A.uW(b,r)},
xE(a,b,c){if(a>c)return A.aI(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aI(b,a,c,"end",null)
return new A.bJ(!0,b,"end",null)},
pU(a){return new A.bJ(!0,a,null,null)},
c(a){return A.an(a,new Error())},
an(a,b){var s
if(a==null)a=new A.ci()
b.dartException=a
s=A.yc
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
yc(){return J.dM(this.dartException)},
k(a,b){throw A.an(a,b==null?new Error():b)},
bf(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.k(A.wn(a,b,c),s)},
wn(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fo("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.c(A.ao(a))},
cj(a){var s,r,q,p,o,n
a=A.t9(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.mS(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
mT(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
qM(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
p2(a,b){var s=b==null,r=s?null:b.method
return new A.i0(a,r,s?null:b.receiver)},
ab(a){var s
if(a==null)return new A.lQ(a)
if(a instanceof A.eO){s=a.a
return A.cU(a,s==null?A.ev(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cU(a,a.dartException)
return A.xf(a)},
cU(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
xf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cM(r,16)&8191)===10)switch(q){case 438:return A.cU(a,A.p2(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.cU(a,new A.f6())}}if(a instanceof TypeError){p=$.tj()
o=$.tk()
n=$.tl()
m=$.tm()
l=$.tp()
k=$.tq()
j=$.to()
$.tn()
i=$.ts()
h=$.tr()
g=p.an(s)
if(g!=null)return A.cU(a,A.p2(A.F(s),g))
else{g=o.an(s)
if(g!=null){g.method="call"
return A.cU(a,A.p2(A.F(s),g))}else if(n.an(s)!=null||m.an(s)!=null||l.an(s)!=null||k.an(s)!=null||j.an(s)!=null||m.an(s)!=null||i.an(s)!=null||h.an(s)!=null){A.F(s)
return A.cU(a,new A.f6())}}return A.cU(a,new A.iH(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fj()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cU(a,new A.bJ(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fj()
return a},
c5(a){var s
if(a instanceof A.eO)return a.b
if(a==null)return new A.fL(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fL(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jP(a){if(a==null)return J.bg(a)
if(typeof a=="object")return A.fa(a)
return J.bg(a)},
xy(a){if(typeof a=="number")return B.d.gE(a)
if(a instanceof A.jv)return A.fa(a)
if(a instanceof A.bA)return a.gE(a)
return A.jP(a)},
t1(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
xJ(a,b){var s,r=a.length
for(s=0;s<r;++s)b.k(0,a[s])
return b},
wI(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.e_("Unsupported number of arguments for wrapped closure"))},
eC(a,b){var s=a.$identity
if(!!s)return s
s=A.xz(a,b)
a.$identity=s
return s},
xz(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.wI)},
tU(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iB().constructor.prototype):Object.create(new A.dT(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.qb(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.tQ(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.qb(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
tQ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.tN)}throw A.c("Error in functionType of tearoff")},
tR(a,b,c,d){var s=A.qa
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
qb(a,b,c,d){if(c)return A.tT(a,b,d)
return A.tR(b.length,d,a,b)},
tS(a,b,c,d){var s=A.qa,r=A.tO
switch(b?-1:a){case 0:throw A.c(new A.iu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
tT(a,b,c){var s,r
if($.q8==null)$.q8=A.q7("interceptor")
if($.q9==null)$.q9=A.q7("receiver")
s=b.length
r=A.tS(s,c,a,b)
return r},
pV(a){return A.tU(a)},
tN(a,b){return A.fQ(v.typeUniverse,A.be(a.a),b)},
qa(a){return a.a},
tO(a){return a.b},
q7(a){var s,r,q,p=new A.dT("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.w("Field name "+a+" not found.",null))},
t3(a){return v.getIsolateTag(a)},
tc(){return v.G},
yI(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
xW(a){var s,r,q,p,o,n=A.F($.t4.$1(a)),m=$.ou[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bE($.rZ.$2(a,n))
if(q!=null){m=$.ou[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.oB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.oQ(s)
$.ou[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.oB[n]=s
return s}if(p==="-"){o=A.oQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.t7(a,s)
if(p==="*")throw A.c(A.qN(n))
if(v.leafTags[n]===true){o=A.oQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.t7(a,s)},
t7(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.q_(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
oQ(a){return J.q_(a,!1,null,!!a.$ibk)},
y_(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.oQ(s)
else return J.q_(s,c,null,null)},
xO(){if(!0===$.pY)return
$.pY=!0
A.xP()},
xP(){var s,r,q,p,o,n,m,l
$.ou=Object.create(null)
$.oB=Object.create(null)
A.xN()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.t8.$1(o)
if(n!=null){m=A.y_(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
xN(){var s,r,q,p,o,n,m=B.cr()
m=A.eB(B.cs,A.eB(B.ct,A.eB(B.aR,A.eB(B.aR,A.eB(B.cu,A.eB(B.cv,A.eB(B.cw(B.aQ),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.t4=new A.oy(p)
$.rZ=new A.oz(o)
$.t8=new A.oA(n)},
eB(a,b){return a(b)||b},
vD(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.d(b,s)
if(!J.a6(r,b[s]))return!1}return!0},
xB(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
y7(a,b,c){var s=a.indexOf(b,c)
return s>=0},
xH(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
t9(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
y8(a,b,c){var s=A.y9(a,b,c)
return s},
y9(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.t9(b),"g"),A.xH(c))},
en:function en(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
fJ:function fJ(a){this.a=a},
eJ:function eJ(a,b){this.a=a
this.$ti=b},
dW:function dW(){},
km:function km(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
dA:function dA(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
eK:function eK(){},
c6:function c6(a,b,c){this.a=a
this.b=b
this.$ti=c},
m1:function m1(a){this.a=a},
fh:function fh(){},
mS:function mS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f6:function f6(){},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
lQ:function lQ(a){this.a=a},
eO:function eO(a,b){this.a=a
this.b=b},
fL:function fL(a){this.a=a
this.b=null},
cu:function cu(){},
hm:function hm(){},
hn:function hn(){},
iE:function iE(){},
iB:function iB(){},
dT:function dT(a,b){this.a=a
this.b=b},
iu:function iu(a){this.a=a},
bw:function bw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
lw:function lw(a){this.a=a},
lE:function lE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aj:function aj(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aR:function aR(a,b){this.a=a
this.$ti=b},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
Z:function Z(a,b){this.a=a
this.$ti=b},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eY:function eY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
oy:function oy(a){this.a=a},
oz:function oz(a){this.a=a},
oA:function oA(a){this.a=a},
bA:function bA(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
ya(a){throw A.an(A.qt(a),new Error())},
j(){throw A.an(A.ak(""),new Error())},
y(){throw A.an(A.uB(""),new Error())},
tf(){throw A.an(A.qt(""),new Error())},
aa(){var s=new A.nh()
return s.b=s},
nh:function nh(){this.b=null},
a0(a){return a},
uF(a,b,c){return new Float32Array(a,b,c)},
uG(a){return new Uint8Array(a)},
uH(a){return new Uint8Array(A.a0(a))},
cr(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.ot(b,a))},
wg(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.xE(a,b,c))
return b},
cC:function cC(){},
e7:function e7(){},
f4:function f4(){},
nI:function nI(a){this.a=a},
i8:function i8(){},
ay:function ay(){},
f2:function f2(){},
f3:function f3(){},
f1:function f1(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
df:function df(){},
f5:function f5(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
pd(a,b){var s=b.c
return s==null?b.c=A.fO(a,"bi",[b.x]):s},
qE(a){var s=a.w
if(s===6||s===7)return A.qE(a.x)
return s===11||s===12},
v1(a){return a.as},
y0(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
au(a){return A.nH(v.typeUniverse,a,!1)},
dG(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dG(a1,s,a3,a4)
if(r===s)return a2
return A.ra(a1,r,!0)
case 7:s=a2.x
r=A.dG(a1,s,a3,a4)
if(r===s)return a2
return A.r9(a1,r,!0)
case 8:q=a2.y
p=A.eA(a1,q,a3,a4)
if(p===q)return a2
return A.fO(a1,a2.x,p)
case 9:o=a2.x
n=A.dG(a1,o,a3,a4)
m=a2.y
l=A.eA(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.pq(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eA(a1,j,a3,a4)
if(i===j)return a2
return A.rb(a1,k,i)
case 11:h=a2.x
g=A.dG(a1,h,a3,a4)
f=a2.y
e=A.xb(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.r8(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eA(a1,d,a3,a4)
o=a2.x
n=A.dG(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.pr(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.hd("Attempted to substitute unexpected RTI kind "+a0))}},
eA(a,b,c,d){var s,r,q,p,o=b.length,n=A.nM(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dG(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
xc(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.nM(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dG(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
xb(a,b,c,d){var s,r=b.a,q=A.eA(a,r,c,d),p=b.b,o=A.eA(a,p,c,d),n=b.c,m=A.xc(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.j8()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
pW(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.xM(s)
return a.$S()}return null},
xQ(a,b){var s
if(A.qE(b))if(a instanceof A.cu){s=A.pW(a)
if(s!=null)return s}return A.be(a)},
be(a){if(a instanceof A.A)return A.o(a)
if(Array.isArray(a))return A.N(a)
return A.pF(J.dI(a))},
N(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.pF(a)},
pF(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.wF(a,s)},
wF(a,b){var s=a instanceof A.cu?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.vM(v.typeUniverse,s.name)
b.$ccache=r
return r},
xM(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.nH(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jN(a){return A.c4(A.o(a))},
pS(a){var s
if(a instanceof A.bA)return a.eo()
s=a instanceof A.cu?A.pW(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.dK(a).a
if(Array.isArray(a))return A.N(a)
return A.be(a)},
c4(a){var s=a.r
return s==null?a.r=new A.jv(a):s},
xI(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.d(q,0)
s=A.fQ(v.typeUniverse,A.pS(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.rc(v.typeUniverse,s,A.pS(q[r]))}return A.fQ(v.typeUniverse,s,a)},
bH(a){return A.c4(A.nH(v.typeUniverse,a,!1))},
wE(a){var s=this
s.b=A.x8(s)
return s.b(a)},
x8(a){var s,r,q,p,o
if(a===t.K)return A.wO
if(A.dJ(a))return A.wS
s=a.w
if(s===6)return A.wA
if(s===1)return A.rG
if(s===7)return A.wJ
r=A.x7(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dJ)){a.f="$i"+q
if(q==="E")return A.wM
if(a===t.m)return A.wL
return A.wR}}else if(s===10){p=A.xB(a.x,a.y)
o=p==null?A.rG:p
return o==null?A.ev(o):o}return A.wy},
x7(a){if(a.w===8){if(a===t.S)return A.aM
if(a===t.i||a===t.o)return A.wN
if(a===t.N)return A.wQ
if(a===t.y)return A.bF}return null},
wD(a){var s=this,r=A.wx
if(A.dJ(s))r=A.wd
else if(s===t.K)r=A.ev
else if(A.eD(s)){r=A.wz
if(s===t.aV)r=A.rr
else if(s===t.w)r=A.bE
else if(s===t.fU)r=A.wc
else if(s===t.jh)r=A.rs
else if(s===t.dA)r=A.rq
else if(s===t.mU)r=A.i}else if(s===t.S)r=A.a
else if(s===t.N)r=A.F
else if(s===t.y)r=A.aV
else if(s===t.o)r=A.cp
else if(s===t.i)r=A.h_
else if(s===t.m)r=A.f
s.a=r
return s.a(a)},
wy(a){var s=this
if(a==null)return A.eD(s)
return A.xV(v.typeUniverse,A.xQ(a,s),s)},
wA(a){if(a==null)return!0
return this.x.b(a)},
wR(a){var s,r=this
if(a==null)return A.eD(r)
s=r.f
if(a instanceof A.A)return!!a[s]
return!!J.dI(a)[s]},
wM(a){var s,r=this
if(a==null)return A.eD(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.A)return!!a[s]
return!!J.dI(a)[s]},
wL(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.A)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
rF(a){if(typeof a=="object"){if(a instanceof A.A)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
wx(a){var s=this
if(a==null){if(A.eD(s))return a}else if(s.b(a))return a
throw A.an(A.rx(a,s),new Error())},
wz(a){var s=this
if(a==null||s.b(a))return a
throw A.an(A.rx(a,s),new Error())},
rx(a,b){return new A.fM("TypeError: "+A.r0(a,A.bt(b,null)))},
r0(a,b){return A.hD(a)+": type '"+A.bt(A.pS(a),null)+"' is not a subtype of type '"+b+"'"},
bB(a,b){return new A.fM("TypeError: "+A.r0(a,b))},
wJ(a){var s=this
return s.x.b(a)||A.pd(v.typeUniverse,s).b(a)},
wO(a){return a!=null},
ev(a){if(a!=null)return a
throw A.an(A.bB(a,"Object"),new Error())},
wS(a){return!0},
wd(a){return a},
rG(a){return!1},
bF(a){return!0===a||!1===a},
aV(a){if(!0===a)return!0
if(!1===a)return!1
throw A.an(A.bB(a,"bool"),new Error())},
wc(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.an(A.bB(a,"bool?"),new Error())},
h_(a){if(typeof a=="number")return a
throw A.an(A.bB(a,"double"),new Error())},
rq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bB(a,"double?"),new Error())},
aM(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.an(A.bB(a,"int"),new Error())},
rr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.an(A.bB(a,"int?"),new Error())},
wN(a){return typeof a=="number"},
cp(a){if(typeof a=="number")return a
throw A.an(A.bB(a,"num"),new Error())},
rs(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bB(a,"num?"),new Error())},
wQ(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.an(A.bB(a,"String"),new Error())},
bE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.an(A.bB(a,"String?"),new Error())},
f(a){if(A.rF(a))return a
throw A.an(A.bB(a,"JSObject"),new Error())},
i(a){if(a==null)return a
if(A.rF(a))return a
throw A.an(A.bB(a,"JSObject?"),new Error())},
rS(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bt(a[q],b)
return s},
wZ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.rS(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bt(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
rA(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bt(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bt(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bt(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bt(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bt(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bt(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bt(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bt(a.x,b)+">"
if(l===8){p=A.xe(a.x)
o=a.y
return o.length>0?p+("<"+A.rS(o,b)+">"):p}if(l===10)return A.wZ(a,b)
if(l===11)return A.rA(a,b,null)
if(l===12)return A.rA(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
xe(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
vN(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
vM(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.nH(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fP(a,5,"#")
q=A.nM(s)
for(p=0;p<s;++p)q[p]=r
o=A.fO(a,b,q)
n[b]=o
return o}else return m},
vL(a,b){return A.rk(a.tR,b)},
vK(a,b){return A.rk(a.eT,b)},
nH(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.r5(A.r3(a,null,b,!1))
r.set(b,s)
return s},
fQ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.r5(A.r3(a,b,c,!0))
q.set(c,r)
return r},
rc(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.pq(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cP(a,b){b.a=A.wD
b.b=A.wE
return b},
fP(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bM(null,null)
s.w=b
s.as=c
r=A.cP(a,s)
a.eC.set(c,r)
return r},
ra(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.vI(a,b,r,c)
a.eC.set(r,s)
return s},
vI(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dJ(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.eD(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.bM(null,null)
q.w=6
q.x=b
q.as=c
return A.cP(a,q)},
r9(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.vG(a,b,r,c)
a.eC.set(r,s)
return s},
vG(a,b,c,d){var s,r
if(d){s=b.w
if(A.dJ(b)||b===t.K)return b
else if(s===1)return A.fO(a,"bi",[b])
else if(b===t.b||b===t.T)return t.gK}r=new A.bM(null,null)
r.w=7
r.x=b
r.as=c
return A.cP(a,r)},
vJ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bM(null,null)
s.w=13
s.x=b
s.as=q
r=A.cP(a,s)
a.eC.set(q,r)
return r},
fN(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
vF(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fO(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fN(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bM(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cP(a,r)
a.eC.set(p,q)
return q},
pq(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fN(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bM(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cP(a,o)
a.eC.set(q,n)
return n},
rb(a,b,c){var s,r,q="+"+(b+"("+A.fN(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bM(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cP(a,s)
a.eC.set(q,r)
return r},
r8(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fN(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fN(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.vF(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bM(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cP(a,p)
a.eC.set(r,o)
return o},
pr(a,b,c,d){var s,r=b.as+("<"+A.fN(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.vH(a,b,c,r,d)
a.eC.set(r,s)
return s},
vH(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.nM(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dG(a,b,r,0)
m=A.eA(a,c,r,0)
return A.pr(a,n,m,c!==m)}}l=new A.bM(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cP(a,l)},
r3(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
r5(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.vy(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.r4(a,r,l,k,!1)
else if(q===46)r=A.r4(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dD(a.u,a.e,k.pop()))
break
case 94:k.push(A.vJ(a.u,k.pop()))
break
case 35:k.push(A.fP(a.u,5,"#"))
break
case 64:k.push(A.fP(a.u,2,"@"))
break
case 126:k.push(A.fP(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.vA(a,k)
break
case 38:A.vz(a,k)
break
case 63:p=a.u
k.push(A.ra(p,A.dD(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.r9(p,A.dD(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.vx(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.r6(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.vC(a.u,a.e,o)
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
return A.dD(a.u,a.e,m)},
vy(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
r4(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.vN(s,o.x)[p]
if(n==null)A.k('No "'+p+'" in "'+A.v1(o)+'"')
d.push(A.fQ(s,o,n))}else d.push(p)
return m},
vA(a,b){var s,r=a.u,q=A.r2(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fO(r,p,q))
else{s=A.dD(r,a.e,p)
switch(s.w){case 11:b.push(A.pr(r,s,q,a.n))
break
default:b.push(A.pq(r,s,q))
break}}},
vx(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.r2(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dD(p,a.e,o)
q=new A.j8()
q.a=s
q.b=n
q.c=m
b.push(A.r8(p,r,q))
return
case-4:b.push(A.rb(p,b.pop(),s))
return
default:throw A.c(A.hd("Unexpected state under `()`: "+A.q(o)))}},
vz(a,b){var s=b.pop()
if(0===s){b.push(A.fP(a.u,1,"0&"))
return}if(1===s){b.push(A.fP(a.u,4,"1&"))
return}throw A.c(A.hd("Unexpected extended operation "+A.q(s)))},
r2(a,b){var s=b.splice(a.p)
A.r6(a.u,a.e,s)
a.p=b.pop()
return s},
dD(a,b,c){if(typeof c=="string")return A.fO(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vB(a,b,c)}else return c},
r6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dD(a,b,c[s])},
vC(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dD(a,b,c[s])},
vB(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.hd("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.hd("Bad index "+c+" for "+b.n(0)))},
xV(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ar(a,b,null,c,null)
r.set(c,s)}return s},
ar(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dJ(d))return!0
s=b.w
if(s===4)return!0
if(A.dJ(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ar(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.T){if(q===7)return A.ar(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.ar(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ar(a,b.x,c,d,e))return!1
return A.ar(a,A.pd(a,b),c,d,e)}if(s===6)return A.ar(a,p,c,d,e)&&A.ar(a,b.x,c,d,e)
if(q===7){if(A.ar(a,b,c,d.x,e))return!0
return A.ar(a,b,c,A.pd(a,d),e)}if(q===6)return A.ar(a,b,c,p,e)||A.ar(a,b,c,d.x,e)
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
if(!A.ar(a,j,c,i,e)||!A.ar(a,i,e,j,c))return!1}return A.rE(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.rE(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.wK(a,b,c,d,e)}if(o&&q===10)return A.wP(a,b,c,d,e)
return!1},
rE(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ar(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.ar(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ar(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ar(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.ar(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
wK(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fQ(a,b,r[o])
return A.ro(a,p,null,c,d.y,e)}return A.ro(a,b.y,null,c,d.y,e)},
ro(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ar(a,b[s],d,e[s],f))return!1
return!0},
wP(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ar(a,r[s],c,q[s],e))return!1
return!0},
eD(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.dJ(a))if(s!==6)r=s===7&&A.eD(a.x)
return r},
dJ(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
rk(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
nM(a){return a>0?new Array(a):v.typeUniverse.sEA},
bM:function bM(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
j8:function j8(){this.c=this.b=this.a=null},
jv:function jv(a){this.a=a},
j6:function j6(){},
fM:function fM(a){this.a=a},
vr(){var s,r,q
if(self.scheduleImmediate!=null)return A.xr()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eC(new A.nd(s),1)).observe(r,{childList:true})
return new A.nc(s,r,q)}else if(self.setImmediate!=null)return A.xs()
return A.xt()},
vs(a){self.scheduleImmediate(A.eC(new A.ne(t.M.a(a)),0))},
vt(a){self.setImmediate(A.eC(new A.nf(t.M.a(a)),0))},
vu(a){A.pf(B.cI,t.M.a(a))},
pf(a,b){return A.vE(a.a/1000|0,b)},
vE(a,b){var s=new A.nF()
s.im(a,b)
return s},
bc(a){return new A.iX(new A.ae($.a8,a.i("ae<0>")),a.i("iX<0>"))},
bb(a,b){a.$2(0,null)
b.b=!0
return b.a},
af(a,b){A.we(a,b)},
ba(a,b){b.cR(a)},
b9(a,b){b.cS(A.ab(a),A.c5(a))},
we(a,b){var s,r,q=new A.nR(b),p=new A.nS(b)
if(a instanceof A.ae)a.eS(q,p,t.z)
else{s=t.z
if(a instanceof A.ae)a.dP(q,p,s)
else{r=new A.ae($.a8,t.d)
r.a=8
r.c=a
r.eS(q,p,s)}}},
bd(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.a8.hA(new A.op(s),t.H,t.S,t.z)},
r7(a,b,c){return 0},
k2(a){var s
if(t.V.b(a)){s=a.gba()
if(s!=null)return s}return B.Q},
p_(a){var s
a.a(null)
s=new A.ae($.a8,a.i("ae<0>"))
s.cu(null)
return s},
ul(a,b,c){var s=new A.ae($.a8,c.i("ae<0>"))
A.v9(a,new A.kQ(b,s,c))
return s},
kR(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.ae($.a8,b.i("ae<E<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.kT(i,h,g,f)
try{for(n=J.K(a),m=t.b;n.m();){r=n.gp()
q=i.b
r.dP(new A.kS(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bJ(A.e([],b.i("p<0>")))
return n}i.a=A.bT(n,null,!1,b.i("0?"))}catch(l){p=A.ab(l)
o=A.c5(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.pG(m,k)
m=new A.av(m,k==null?A.k2(m):k)
n.bF(m)
return n}else{i.d=p
i.c=o}}return f},
pG(a,b){if($.a8===B.r)return null
return null},
wG(a,b){if($.a8!==B.r)A.pG(a,b)
if(b==null)if(t.V.b(a)){b=a.gba()
if(b==null){A.qC(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.V.b(a))A.qC(a,b)
return new A.av(a,b)},
nm(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.d;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.v5()
b.bF(new A.av(new A.bJ(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.ey(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bf()
b.bI(o.a)
A.dx(b,p)
return}b.a^=2
A.jJ(null,null,b.b,t.M.a(new A.nn(o,b)))},
dx(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.pN(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.dx(d.a,c)
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
A.pN(j.a,j.b)
return}g=$.a8
if(g!==h)$.a8=h
else g=null
c=c.c
if((c&15)===8)new A.nr(q,d,n).$0()
else if(o){if((c&1)!==0)new A.nq(q,j).$0()}else if((c&2)!==0)new A.np(d,q).$0()
if(g!=null)$.a8=g
c=q.c
if(c instanceof A.ae){p=q.a.$ti
p=p.i("bi<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bP(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.nm(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bP(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
x_(a,b){var s
if(t.ng.b(a))return b.hA(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.c(A.aE(a,"onError",u.c))},
wV(){var s,r
for(s=$.ex;s!=null;s=$.ex){$.h3=null
r=s.b
$.ex=r
if(r==null)$.h2=null
s.a.$0()}},
x9(){$.pH=!0
try{A.wV()}finally{$.h3=null
$.pH=!1
if($.ex!=null)$.q2().$1(A.t_())}},
rW(a){var s=new A.iY(a),r=$.h2
if(r==null){$.ex=$.h2=s
if(!$.pH)$.q2().$1(A.t_())}else $.h2=r.b=s},
x5(a){var s,r,q,p=$.ex
if(p==null){A.rW(a)
$.h3=$.h2
return}s=new A.iY(a)
r=$.h3
if(r==null){s.b=p
$.ex=$.h3=s}else{q=r.b
s.b=q
$.h3=r.b=s
if(q==null)$.h2=s}},
yn(a,b){A.dH(a,"stream",t.K)
return new A.jt(b.i("jt<0>"))},
v9(a,b){var s=$.a8
if(s===B.r)return A.pf(a,t.M.a(b))
return A.pf(a,t.M.a(s.f0(b)))},
pN(a,b){A.x5(new A.oj(a,b))},
rR(a,b,c,d,e){var s,r=$.a8
if(r===c)return d.$0()
$.a8=c
s=r
try{r=d.$0()
return r}finally{$.a8=s}},
x3(a,b,c,d,e,f,g){var s,r=$.a8
if(r===c)return d.$1(e)
$.a8=c
s=r
try{r=d.$1(e)
return r}finally{$.a8=s}},
x2(a,b,c,d,e,f,g,h,i){var s,r=$.a8
if(r===c)return d.$2(e,f)
$.a8=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a8=s}},
jJ(a,b,c,d){t.M.a(d)
if(B.r!==c){d=c.f0(d)
d=d}A.rW(d)},
nd:function nd(a){this.a=a},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function ne(a){this.a=a},
nf:function nf(a){this.a=a},
nF:function nF(){},
nG:function nG(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=!1
this.$ti=b},
nR:function nR(a){this.a=a},
nS:function nS(a){this.a=a},
op:function op(a){this.a=a},
br:function br(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
c2:function c2(a,b){this.a=a
this.$ti=b},
av:function av(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b,c){this.a=a
this.b=b
this.c=c},
kT:function kT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kS:function kS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j0:function j0(){},
fs:function fs(a,b){this.a=a
this.$ti=b},
dw:function dw(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ae:function ae(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
nj:function nj(a,b){this.a=a
this.b=b},
no:function no(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.a=a
this.b=b},
nl:function nl(a,b){this.a=a
this.b=b},
nk:function nk(a,b){this.a=a
this.b=b},
nr:function nr(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function ns(a,b){this.a=a
this.b=b},
nt:function nt(a){this.a=a},
nq:function nq(a,b){this.a=a
this.b=b},
np:function np(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a
this.b=null},
jt:function jt(a){this.$ti=a},
fX:function fX(){},
jm:function jm(){},
nD:function nD(a,b){this.a=a
this.b=b},
oj:function oj(a,b){this.a=a
this.b=b},
r1(a,b){var s=a[b]
return s===a?null:s},
po(a,b,c){if(c==null)a[b]=a
else a[b]=c},
pn(){var s=Object.create(null)
A.po(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
qv(a,b){return new A.bw(a.i("@<0>").D(b).i("bw<1,2>"))},
S(a,b,c){return b.i("@<0>").D(c).i("p3<1,2>").a(A.t1(a,new A.bw(b.i("@<0>").D(c).i("bw<1,2>"))))},
x(a,b){return new A.bw(a.i("@<0>").D(b).i("bw<1,2>"))},
p4(a){return new A.bz(a.i("bz<0>"))},
a3(a){return new A.bz(a.i("bz<0>"))},
as(a,b){return b.i("qw<0>").a(A.xJ(a,new A.bz(b.i("bz<0>"))))},
pp(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
je(a,b,c){var s=new A.dC(a,b,c.i("dC<0>"))
s.c=a.e
return s},
e3(a,b){var s=J.K(a.a)
if(new A.P(s,a.b,a.$ti.i("P<1>")).m())return s.gp()
return null},
aS(a,b,c){var s=A.qv(b,c)
a.aa(0,new A.lF(s,b,c))
return s},
lG(a,b){var s,r,q=A.p4(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.k(0,b.a(a[r]))
return q},
p5(a,b){var s=A.p4(b)
s.I(0,a)
return s},
uC(a,b){var s=t.bP
return J.q4(s.a(a),s.a(b))},
p6(a){var s,r
if(A.pZ(a))return"{...}"
s=new A.aK("")
try{r={}
B.a.k($.bu,a)
s.a+="{"
r.a=!0
a.aa(0,new A.lI(r,s))
s.a+="}"}finally{if(0>=$.bu.length)return A.d($.bu,-1)
$.bu.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
vO(){throw A.c(A.at("Cannot change an unmodifiable set"))},
fz:function fz(){},
nu:function nu(a){this.a=a},
fB:function fB(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dy:function dy(a,b){this.a=a
this.$ti=b},
fA:function fA(a,b,c){var _=this
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
jd:function jd(a){this.a=a
this.c=this.b=null},
dC:function dC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
I:function I(){},
T:function T(){},
lH:function lH(a){this.a=a},
lI:function lI(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.$ti=b},
fD:function fD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fR:function fR(){},
e6:function e6(){},
cI:function cI(a,b){this.a=a
this.$ti=b},
cg:function cg(){},
fK:function fK(){},
jw:function jw(){},
fn:function fn(a,b){this.a=a
this.$ti=b},
er:function er(){},
fS:function fS(){},
wX(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ab(r)
q=A.ag(String(s),null,null)
throw A.c(q)}q=A.nT(p)
return q},
nT(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jb(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.nT(a[s])
return a},
w4(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.tw()
else s=new Uint8Array(o)
for(r=J.aX(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
w3(a,b,c,d){var s=a?$.tv():$.tu()
if(s==null)return null
if(0===c&&d===b.length)return A.rj(s,b)
return A.rj(s,b.subarray(c,d))},
rj(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
q6(a,b,c,d,e,f){if(B.c.ah(f,4)!==0)throw A.c(A.ag("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.c(A.ag("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.c(A.ag("Invalid base64 padding, more than two '=' characters",a,b))},
qs(a,b,c){return new A.eZ(a,b)},
wm(a){return a.C()},
vv(a,b){return new A.nx(a,[],A.xA())},
vw(a,b,c){var s,r=new A.aK(""),q=A.vv(r,b)
q.cj(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
w5(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jb:function jb(a,b){this.a=a
this.b=b
this.c=null},
nw:function nw(a){this.a=a},
jc:function jc(a){this.a=a},
nL:function nL(){},
nK:function nK(){},
hf:function hf(){},
ke:function ke(){},
cY:function cY(){},
hs:function hs(){},
hC:function hC(){},
eZ:function eZ(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i1:function i1(){},
ly:function ly(a){this.b=a},
lx:function lx(a){this.a=a},
ny:function ny(){},
nz:function nz(a,b){this.a=a
this.b=b},
nx:function nx(a,b,c){this.c=a
this.a=b
this.b=c},
iL:function iL(){},
mY:function mY(a){this.a=a},
nJ:function nJ(a){this.a=a
this.b=16
this.c=0},
xR(a){var s=A.m2(a,null)
if(s!=null)return s
throw A.c(A.ag(a,null,null))},
ug(a,b){a=A.an(a,new Error())
if(a==null)a=A.ev(a)
a.stack=b.n(0)
throw a},
bT(a,b,c,d){var s,r=c?J.qn(a,d):J.qm(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ax(a,b,c){var s,r=A.e([],c.i("p<0>"))
for(s=J.K(a);s.m();)B.a.k(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
Q(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.i("p<0>"))
s=A.e([],b.i("p<0>"))
for(r=J.K(a);r.m();)B.a.k(s,r.gp())
return s},
ap(a,b){var s=A.ax(a,!1,b)
s.$flags=3
return s},
qK(a,b,c){var s,r
A.iq(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.c(A.aI(c,b,null,"end",null))
if(s===0)return""}r=A.v7(a,b,c)
return r},
v7(a,b,c){var s=a.length
if(b>=s)return""
return A.uV(a,b,c==null||c>s?s:c)},
qJ(a,b,c){var s=J.K(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
mV(){var s,r,q=A.uK()
if(q==null)throw A.c(A.at("'Uri.base' is not supported"))
s=$.qQ
if(s!=null&&q===$.qP)return s
r=A.vf(q)
$.qQ=r
$.qP=q
return r},
v5(){return A.c5(new Error())},
tX(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qc(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hu(a){if(a>=10)return""+a
return"0"+a},
uf(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.c(A.aE(b,"name","No enum value with that name"))},
hD(a){if(typeof a=="number"||A.bF(a)||a==null)return J.dM(a)
if(typeof a=="string")return JSON.stringify(a)
return A.qB(a)},
uh(a,b){A.dH(a,"error",t.K)
A.dH(b,"stackTrace",t.l)
A.ug(a,b)},
hd(a){return new A.hc(a)},
w(a,b){return new A.bJ(!1,null,b,a)},
aE(a,b,c){return new A.bJ(!0,a,b,c)},
qD(a){var s=null
return new A.e9(s,s,!1,s,s,a)},
uW(a,b){return new A.e9(null,null,!0,a,b,"Value not in range")},
aI(a,b,c,d,e){return new A.e9(b,c,!0,a,d,"Invalid value")},
fb(a,b,c){if(0>a||a>c)throw A.c(A.aI(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aI(b,a,c,"end",null))
return b}return c},
iq(a,b){if(a<0)throw A.c(A.aI(a,0,null,b,null))
return a},
li(a,b,c,d){return new A.hS(b,!0,a,d,"Index out of range")},
at(a){return new A.fo(a)},
qN(a){return new A.iG(a)},
l(a){return new A.ee(a)},
ao(a){return new A.hq(a)},
e_(a){return new A.ni(a)},
ag(a,b,c){return new A.J(a,b,c)},
uv(a,b,c){var s,r
if(A.pZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.k($.bu,a)
try{A.wT(a,s)}finally{if(0>=$.bu.length)return A.d($.bu,-1)
$.bu.pop()}r=A.qJ(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
p0(a,b,c){var s,r
if(A.pZ(a))return b+"..."+c
s=new A.aK(b)
B.a.k($.bu,a)
try{r=s
r.a=A.qJ(r.a,a,", ")}finally{if(0>=$.bu.length)return A.d($.bu,-1)
$.bu.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
wT(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
ce(a,b,c,d){var s
if(B.k===c){s=J.bg(a)
b=J.bg(b)
return A.mK(A.ch(A.ch($.jQ(),s),b))}if(B.k===d){s=J.bg(a)
b=J.bg(b)
c=J.bg(c)
return A.mK(A.ch(A.ch(A.ch($.jQ(),s),b),c))}s=J.bg(a)
b=J.bg(b)
c=J.bg(c)
d=J.bg(d)
d=A.mK(A.ch(A.ch(A.ch(A.ch($.jQ(),s),b),c),d))
return d},
uI(a){var s,r,q=$.jQ()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.ch(q,J.bg(a[r]))
return A.mK(q)},
pe(a,b){return new A.fn(A.p5(a,b),b.i("fn<0>"))},
vf(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.d(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.qO(a4<a4?B.b.B(a5,0,a4):a5,5,a3).ghE()
else if(s===32)return A.qO(B.b.B(a5,5,a4),0,a3).ghE()}r=A.bT(8,0,!1,t.S)
B.a.l(r,0,0)
B.a.l(r,1,-1)
B.a.l(r,2,-1)
B.a.l(r,7,-1)
B.a.l(r,3,0)
B.a.l(r,4,0)
B.a.l(r,5,a4)
B.a.l(r,6,a4)
if(A.rV(a5,0,a4,0,r)>=14)B.a.l(r,7,a4)
q=r[1]
if(q>=0)if(A.rV(a5,0,q,20,r)===20)r[7]=q
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
a5=B.b.b6(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.Z(a5,"http",0)){if(i&&o+3===n&&B.b.Z(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.b6(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.b.Z(a5,"https",0)){if(i&&o+4===n&&B.b.Z(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.b6(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.jp(a4<a5.length?B.b.B(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.vY(a5,0,q)
else{if(q===0)A.es(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.vZ(a5,c,p-1):""
a=A.vU(a5,p,o,!1)
i=o+1
if(i<n){a0=A.m2(B.b.B(a5,i,n),a3)
d=A.vW(a0==null?A.k(A.ag("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.vV(a5,n,m,a3,j,a!=null)
a2=m<l?A.vX(a5,m+1,l,a3):a3
return A.vP(j,b,a,d,a1,a2,l<a4?A.vT(a5,l+1,a4):a3)},
qS(a){var s=t.N
return B.a.bs(A.e(a.split("&"),t.s),A.x(s,s),new A.mX(B.aS),t.G)},
iK(a,b,c){throw A.c(A.ag("Illegal IPv4 address, "+a,b,c))},
vc(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.d(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iK("each part must be in the range 0..255",a,r)}A.iK("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iK(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bf(d)
if(!(k<16))return A.d(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iK(j,a,q)
p=l}A.iK("IPv4 address should contain exactly 4 parts",a,q)},
vd(a,b,c){var s
if(b===c)throw A.c(A.ag("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.d(a,b)
if(a.charCodeAt(b)===118){s=A.ve(a,b,c)
if(s!=null)throw A.c(s)
return!1}A.qR(a,b,c)
return!0},
ve(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
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
qR(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.mW(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.vc(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cM(l,8)
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
B.bx.hR(s,a0,16,s,a)
B.bx.km(s,a,a0,0)}}return s},
vP(a,b,c,d,e,f,g){return new A.fT(a,b,c,d,e,f,g)},
rd(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
es(a,b,c){throw A.c(A.ag(c,a,b))},
vW(a,b){var s=A.rd(b)
if(a===s)return null
return a},
vU(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.d(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.d(a,r)
if(a.charCodeAt(r)!==93)A.es(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.d(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.vR(a,q,r)
if(o<r){n=o+1
p=A.ri(a,B.b.Z(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.vd(a,q,o)
l=B.b.B(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.d(a,k)
if(a.charCodeAt(k)===58){o=B.b.c9(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.ri(a,B.b.Z(a,"25",n)?o+3:n,c,"%25")}else p=""
A.qR(a,b,o)
return"["+B.b.B(a,b,o)+p+"]"}}return A.w0(a,b,c)},
vR(a,b,c){var s=B.b.c9(a,"%",b)
return s>=b&&s<c?s:c},
ri(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aK(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.pt(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aK("")
l=h.a+=B.b.B(a,q,r)
if(m)n=B.b.B(a,r,r+3)
else if(n==="%")A.es(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aK("")
if(q<r){h.a+=B.b.B(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.d(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.B(a,q,r)
if(h==null){h=new A.aK("")
m=h}else m=h
m.a+=i
l=A.ps(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.B(a,b,c)
if(q<c){i=B.b.B(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
w0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.d(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.pt(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aK("")
k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.B(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aK("")
if(q<r){p.a+=B.b.B(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.es(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.d(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.B(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aK("")
l=p}else l=p
l.a+=k
j=A.ps(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.B(a,b,c)
if(q<c){k=B.b.B(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
vY(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.d(a,b)
if(!A.rf(a.charCodeAt(b)))A.es(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.d(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.es(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.B(a,b,c)
return A.vQ(q?a.toLowerCase():a)},
vQ(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
vZ(a,b,c){return A.fU(a,b,c,16,!1,!1)},
vV(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.fU(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.W(q,"/"))q="/"+q
return A.w_(q,e,f)},
w_(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.W(a,"/")&&!B.b.W(a,"\\"))return A.w1(a,!s||c)
return A.w2(a)},
vX(a,b,c,d){return A.fU(a,b,c,256,!0,!1)},
vT(a,b,c){return A.fU(a,b,c,256,!0,!1)},
pt(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.d(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.d(a,l)
q=a.charCodeAt(l)
p=A.ox(r)
o=A.ox(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.d(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ad(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
ps(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.jl(a,6*p)&63|q
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
o+=3}}return A.qK(s,0,null)},
fU(a,b,c,d,e,f){var s=A.rh(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
rh(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.d(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.pt(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.es(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.d(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.ps(n)}if(o==null){o=new A.aK("")
k=o}else k=o
k.a=(k.a+=B.b.B(a,p,q))+l
if(typeof m!=="number")return A.jO(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.B(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
rg(a){if(B.b.W(a,"."))return!0
return B.b.c8(a,"/.")!==-1},
w2(a){var s,r,q,p,o,n,m
if(!A.rg(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.d(s,-1)
s.pop()
if(s.length===0)B.a.k(s,"")}p=!0}else{p="."===n
if(!p)B.a.k(s,n)}}if(p)B.a.k(s,"")
return B.a.aU(s,"/")},
w1(a,b){var s,r,q,p,o,n
if(!A.rg(a))return!b?A.re(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gO(s)!==".."){if(0>=s.length)return A.d(s,-1)
s.pop()}else B.a.k(s,"..")
p=!0}else{p="."===n
if(!p)B.a.k(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.k(s,"")
if(!b){if(0>=s.length)return A.d(s,0)
B.a.l(s,0,A.re(s[0]))}return B.a.aU(s,"/")},
re(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.rf(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.bD(a,s+1)
if(r<=127){if(!(r<128))return A.d(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
vS(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.d(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.c(A.w("Invalid URL encoding",null))}}return r},
pu(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aS===d)return B.b.B(a,b,c)
else p=new A.ho(B.b.B(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.d(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.c(A.w("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.c(A.w("Truncated URI",null))
B.a.k(p,A.vS(a,n+1))
n+=2}else if(r===43)B.a.k(p,32)
else B.a.k(p,r)}}t.J.a(p)
return B.fx.jZ(p)},
rf(a){var s=a|32
return 97<=s&&s<=122},
qO(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.c(A.ag(k,a,r))}}if(q<0&&r>b)throw A.c(A.ag(k,a,r))
while(p!==44){B.a.k(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.d(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.k(j,o)
else{n=B.a.gO(j)
if(p!==44||r!==n+7||!B.b.Z(a,"base64",n+1))throw A.c(A.ag("Expecting '='",a,r))
break}}B.a.k(j,r)
m=r+1
if((j.length&1)===1)a=B.cl.kK(a,m,s)
else{l=A.rh(a,m,s,256,!0,!1)
if(l!=null)a=B.b.b6(a,m,s,l)}return new A.mU(a,j,c)},
rV(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.d(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.l(e,o>>>5,r)}return d},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a){this.a=a},
j5:function j5(){},
a5:function a5(){},
hc:function hc(a){this.a=a},
ci:function ci(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hS:function hS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fo:function fo(a){this.a=a},
iG:function iG(a){this.a=a},
ee:function ee(a){this.a=a},
hq:function hq(a){this.a=a},
ig:function ig(){},
fj:function fj(){},
ni:function ni(a){this.a=a},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
ah:function ah(){},
A:function A(){},
ju:function ju(){},
mF:function mF(){this.b=this.a=0},
aK:function aK(a){this.a=a},
mX:function mX(a){this.a=a},
mW:function mW(a){this.a=a},
fT:function fT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
mU:function mU(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
j1:function j1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
lP:function lP(a){this.a=a},
am(a){var s
if(typeof a=="function")throw A.c(A.w("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jD,a)
s[$.eE()]=a
return s},
jD(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
pX(a,b,c){return c.a(a[b])},
rB(a,b){return a[b]},
aN(a,b,c,d){return d.a(a[b].apply(a,c))},
ru(a,b,c,d){return d.a(a[b](c))},
aO(a,b){var s=new A.ae($.a8,b.i("ae<0>")),r=new A.fs(s,b.i("fs<0>"))
a.then(A.eC(new A.oR(r,b),1),A.eC(new A.oS(r),1))
return s},
rK(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
ct(a){if(A.rK(a))return a
return new A.os(new A.fB(t.mp)).$1(a)},
oR:function oR(a,b){this.a=a
this.b=b},
oS:function oS(a){this.a=a},
os:function os(a){this.a=a},
ja:function ja(){},
ej:function ej(){this.b=this.a=0},
m8:function m8(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
m9:function m9(){},
di:function di(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(){this.a=null
this.d=0},
il:function il(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
dU:function dU(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hG:function hG(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.w=e
_.x=f
_.y=g},
kL:function kL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
d5(a,b){return new A.l0(a,b)},
cf:function cf(){},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b){this.a=a
this.b=b},
l0:function l0(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a,b){this.a=a
this.c=b},
ik:function ik(a,b,c){this.b=a
this.d=b
this.e=c},
ed:function ed(){},
p8(a,b,c,d,e,f,g,h){return new A.de(c,a,f,e,d,g,h,b)},
hb:function hb(a,b){this.a=a
this.b=b},
de:function de(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=f
_.x=g
_.at=h},
ck:function ck(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lS(a){var s,r=t.N,q=A.as(["sceneColor","present"],r),p=a.a.b
if(p.v(0,"shadows"))q.I(0,A.as(["shadowMap","sceneDepth"],r))
if(p.v(0,"ssao"))q.I(0,A.as(["ssaoRaw","ssaoBlurred"],r))
if(p.v(0,"bloom"))q.I(0,A.as(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(p.v(0,"dof"))q.I(0,A.as(["dofBlurH","dofBlurV","dofOutput"],r))
if(p.v(0,"grade"))q.k(0,"gradeOutput")
if(p.v(0,"ps1"))q.k(0,"ps1Output")
s=p.v(0,"vhs")
if(s)q.k(0,"vhsOutput")
return new A.lR(A.pe(q,r),s)},
lR:function lR(a,b){this.a=a
this.b=b},
lT:function lT(){},
m_:function m_(a){this.b=a},
it:function it(){this.a=null
this.c=0
this.d=!1},
dY:function dY(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c,d,e,f,g,h,i,j){var _=this
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
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
dk:function dk(a,b){this.a=a
this.b=b},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.r=e
_.x=f
_.y=g},
uD(){return new A.i6(new A.bX(new A.lK(),A.e([],t.dz),A.e([],t.t),t.kk))},
i6:function i6(a){this.a=a},
lK:function lK(){},
rX(a){var s=4
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
case 3:s=A.k(A.at("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
wk(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.ap[r]
if(A.rX(q.a)===b)s+=q.c}return s},
uE(a){return new A.lM(a,new A.bX(new A.lN(),A.e([],t.jk),A.e([],t.t),t.ll),A.x(t.S,t.mL))},
iI:function iI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(){},
lO:function lO(){},
v8(a){var s=new A.iF(a,new A.bX(new A.mO(),A.e([],t.mQ),A.e([],t.t),t.ox),A.x(t.S,t._))
s.d=s.eh()
return s},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$},
mO:function mO(){},
mQ:function mQ(){},
mP:function mP(){},
xu(a){var s,r,q,p,o=A.e([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
B.a.k(o,new A.d7(p,A.e([p],r)))
continue}return o},
d7:function d7(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
kH:function kH(){},
kI:function kI(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
kM:function kM(a,b){this.a=a
this.b=b
this.c=0},
p9(){return!0},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(){},
lW:function lW(){},
bL:function bL(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ea:function ea(a,b){this.a=a
this.b=b},
M:function M(a,b){this.a=a
this.b=b},
eI:function eI(a){this.b=a},
m5:function m5(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
aH:function aH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ma:function ma(){},
aG:function aG(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
mc:function mc(a,b){this.a=a
this.b=b},
mg:function mg(){},
mf:function mf(){},
me:function me(a){this.a=a},
md:function md(a,b,c){this.a=a
this.b=b
this.c=c},
mb:function mb(a,b){this.a=a
this.b=b},
v_(a){return new A.fc(a,new A.bX(new A.mi(),A.e([],t.n_),A.e([],t.t),t.mn))},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b){this.a=a
this.b=b},
mi:function mi(){},
ry(a){var s,r=a.y
r.toString
s=a.as
s.toString
a.Q=A.wr(a,r,s,a.x.gp().a.b.a).b},
wr(a,b,c,d){var s,r,q,p,o=new A.o9(a),n=new A.oa(d,a),m=c.a,l=a.a
if(m.b.v(0,"shadows")){s=a.w
r=s.b
q=A.xw(b,l,m,s.c.gl0(),new A.nW(n),new A.nX(n),new A.nY(a),new A.o1(a),new A.o2(n),new A.o3(n),new A.o4(a),r.gl2(),o,new A.o5(n),new A.o6(n),new A.o7(n),new A.o8(n),new A.nZ(n),new A.o_(a),new A.o0(n),c.c,c.b)}else q=new A.hE(A.e([new A.iV(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",o),new A.f9(b,u.l,u.q,l,B.N)],t.o5))
a.r.toString
p=q.jN(B.D,new A.ma(),!1,new A.jj())
o=p.a.b
if(o.length!==0)throw A.c(A.l("safe renderer graph is invalid: "+A.q(o)))
return new A.nE(q,p)},
ws(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a3.Q,a2=a3.x
if(a1==null||a2==null)throw A.c(A.l("renderer graph is not initialized"))
s=a4.gdD()
r=a5.a
q=A.xC(A.uk(r.c),s,-1).a
p=A.e([],t.mX)
o=A.e([],t.ao)
for(s=q.length,n=t.p,m=r.a,l=t.c,k=0;k<q.length;q.length===s||(0,A.r)(q),++k){j=q[k]
i=j.b
h=j.a.a
if(i.e===B.aj)B.a.k(o,new A.aq(new A.aY(m.hD(B.y).c,h),j,l))
else B.a.k(p,new A.aq(new A.b0(B.f_,i.b,i.a,h),j,n))}g=new A.j7(A.xu(A.y6(p)),A.y5(o),r,a5.b,a5.c)
f=new A.hx(a3.a)
for(s=a1.b,r=s.length,n=t.N,m=t.kp,k=0;k<s.length;s.length===r||(0,A.r)(s),++k){e=s[k]
d=A.x(n,m)
for(l=e.gT().c,i=l.length,c=0;c<l.length;l.length===i||(0,A.r)(l),++c){b=l[c].a.a
a=a2.c
if(a==null)A.k(A.l("GPU resource adapter is not initialized"))
a0=a.b.h(0,b)
if(a0==null)A.k(A.l("resource is not in candidate: "+b))
d.l(0,b,new A.hk(a0))}e.a8(new A.hj(d,f,g))}},
qH(a){return new A.mx(a,new A.kk(new A.kl(),new A.it()),new A.kM(A.e([],t.c8),B.dr),A.e([],t.oZ),B.au)},
o9:function o9(a){this.a=a},
oa:function oa(a,b){this.a=a
this.b=b},
o7:function o7(a){this.a=a},
o1:function o1(a){this.a=a},
o6:function o6(a){this.a=a},
nY:function nY(a){this.a=a},
nZ:function nZ(a){this.a=a},
o8:function o8(a){this.a=a},
o5:function o5(a){this.a=a},
nW:function nW(a){this.a=a},
nX:function nX(a){this.a=a},
o2:function o2(a){this.a=a},
o3:function o3(a){this.a=a},
o4:function o4(a){this.a=a},
o0:function o0(a){this.a=a},
o_:function o_(a){this.a=a},
nE:function nE(a,b){this.a=a
this.b=b},
jj:function jj(){},
j7:function j7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mr:function mr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
mx:function mx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
my:function my(){},
y6(a){var s,r,q=A.Q(a,t.p)
B.a.Y(q,new A.oW())
s=A.N(q)
r=s.i("V<1,bl>")
s=A.Q(new A.V(q,s.i("bl(1)").a(new A.oX()),r),r.i("a1.E"))
s.$flags=1
return s},
y5(a){var s,r,q=A.Q(a,t.c)
B.a.Y(q,new A.oU())
s=A.N(q)
r=s.i("V<1,bl>")
s=A.Q(new A.V(q,s.i("bl(1)").a(new A.oV()),r),r.i("a1.E"))
s.$flags=1
return s},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
oW:function oW(){},
oX:function oX(){},
oU:function oU(){},
oV:function oV(){},
xC(a,b,c){var s,r,q,p,o,n,m,l=A.e([],t.bH)
for(s=b.$ti,r=new A.br(b.a(),s.i("br<1>")),s=s.c,q=0,p=0;r.m();){o=r.b
if(o==null)o=s.a(o);++q
if((o.b.d&c)>>>0===0){++p
continue}n=o.c
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=n.b
m=isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)}else m=!1
if(!m)throw A.c(A.w("cullItems: non-finite world bounds for instance "+o.a.n(0),null))
if(a.la(n)===B.b4){++p
continue}B.a.k(l,o)}return new A.kn(l)},
kn:function kn(a){this.a=a},
dN(a){var s,r,q,p,o,n,m,l,k
for(s=J.K(a),r=B.fA,q=B.fB,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.B(m,k,Math.min(r.c,o))
q=new A.B(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.c(A.w("Aabb.fromPoints requires at least one point",null))
return new A.h9(r,q)},
h9:function h9(a,b){this.a=a
this.b=b},
uk(a){var s,r,q,p,o,n,m=a.a,l=new A.kP(),k=m.length
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
return new A.kO(A.e([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
dg:function dg(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
kO:function kO(a){this.a=a},
kP:function kP(){},
qx(a){if(a.length!==16)throw A.c(A.w("Mat4.fromColumnMajor requires 16 values",null))
return new A.cd(new Float32Array(A.a0(a)))},
p7(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.cd(q)},
qy(a,b,c){var s=b.gac(),r=s.aN(c).gac(),q=r.aN(s),p=new Float32Array(16)
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
p[12]=-r.bn(a)
p[13]=-q.bn(a)
p[14]=s.bn(a)
p[15]=1
return new A.cd(p)},
cd:function cd(a){this.a=a},
lJ:function lJ(){},
m7:function m7(){},
mR:function mR(){},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j2:function j2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fw:function fw(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c,d,e,f,g,h,i,j){var _=this
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
j3:function j3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hA:function hA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i},
j4:function j4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
j9:function j9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk:function hk(a){this.b=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qI(a){var s=A.qy(B.I,B.a3,Math.abs(0)<0.99?B.fz:B.I)
return new A.dn(A.p7(1,1,B.c.a_(1,0.1,3),0.05).V(0,s))},
dn:function dn(a){this.a=a},
iw:function iw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
jn:function jn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
xw(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j=u.l,i="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[5]=float[5](0.227027,0.1945946,0.1216216,0.054054,0.016216);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<5;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",h="bloomBlurH",g="bloomBlurV",f="dofBlurH",e="dofBlurV",d={},c=a0.b
if(!c.v(0,"shadows"))throw A.c(A.aE(a0,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c.v(0,"ssao")
r=c.v(0,"bloom")
q=c.v(0,"dof")
p=c.v(0,"grade")
o=c.v(0,"ps1")
n=c.v(0,"vhs")
d.a=null
m=A.qI(B.cE)
c=t.o5
l=A.e([],c)
if(r){B.a.I(l,A.e([new A.eG(a,j,i,b,h,h,B.cf,!0,B.N,B.bK,b1),new A.eG(a,j,i,b,g,g,B.ha,!1,B.bK,B.bL,a2),new A.hi(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",b,a3)],c))
k=$.oY()}else k=B.N
if(q){B.a.I(l,A.e([new A.eL(a,j,i,b,f,f,B.cg,k,B.bD,b1),new A.eL(a,j,i,b,e,e,B.hb,B.bD,B.bE,a6),new A.hA(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// Circle-of-confusion is a simple linear ramp from the focus distance\n// outward (front and back treated the same \u2014 no separate near/far falloff\n// curve), clamped to [0,1] and scaled by uStrength so\n// PostProcessState.depthOfFieldStrength == 0 is a true no-op (coc == 0\n// everywhere, oColor == the sharp source exactly).\nvoid main(){\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n  float coc=clamp(abs(depth-uFocusDistance)/max(uFocusRange,0.0001),0.0,1.0)*uStrength;\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  vec3 blurred=texture(uBlurred,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,coc),1.0);\n}\n",b,b1,a7,b2,a4,k)],c))
k=B.bF}if(p){B.a.k(l,new A.hO(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",b,a8,k))
k=B.bJ}if(o){B.a.k(l,new A.ip(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",b,k))
k=B.bM}if(n){B.a.k(l,new A.iN(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',b,b7,b6,k))
k=B.aw}c=A.e([new A.hw(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  vec4 clip=uViewProjection*uModel*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",b0,a9,a1)],c)
if(s)c.push(new A.iA(a,j,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=8;\nconst vec3 KERNEL[8]=vec3[8](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    // NDC [-1,1] -> UV [0,1] requires the constant 0.5, not vUv (the\n    // *current* fragment's own UV) \u2014 adding vUv here was a real bug: it\n    // conflated \"this sample's own absolute reprojected screen position\"\n    // with \"an offset relative to the current fragment,\" producing an\n    // error of (vUv-0.5) per axis that grows with distance from screen\n    // center. That's exactly what produced a huge, blobby, non-local dark\n    // region instead of contact occlusion \u2014 every sample tested a wildly\n    // wrong depth location except right at screen center, where the error\n    // happened to be near zero.\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    occlusion+=(occluderView.z>=samplePos.z+0.02?1.0:0.0)*rangeCheck;\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",b,b2,a4))
if(s)c.push(new A.iz(a,j,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float centerDepth=linearDepth(texture(uSceneDepth,vUv).r);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleDepth=linearDepth(texture(uSceneDepth,sampleUv).r);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*4.0);\n      sum+=texture(uSsaoRaw,sampleUv).r*depthWeight;\n      weightSum+=depthWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',b,b5,b2,a4))
c.push(new A.iw(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*uModel*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',b0,a9,a1,a5,new A.oq(d)))
c.push(new A.ix(a,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout float vViewDepth;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  vec4 worldPos=uModel*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uShadowMap;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform vec2 uShadowMapTexelSize;\nuniform vec3 uMaterialTint;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float distFalloff=clamp(1.-dist/uLightRange,0.,1.);\n  distFalloff*=distFalloff;\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return distFalloff*coneFalloff;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog: \"distance plus restrained height/damp modulation\" \u2014 the base\n// term is a smoothstepped distance ramp (uFogStart..uFogEnd), not a plain\n// linear one: a linear ramp's density right at uFogStart is already\n// visibly nonzero, which reads as a hard onset band across a large\n// continuous surface like the ground plane. smoothstep's derivative is\n// zero at both ends, so density stays low just past uFogStart and eases\n// in gradually instead. Height falloff and density are each optional in\n// FrameEnvironment (nullable there, 0.0 here) and each written so 0.0 is\n// an exact no-op, rather than needing a separate enabled flag per term:\n//   - height: exp(-0*y) == 1, an identity multiply, when no falloff is set;\n//   - density: 1-exp(-0*depth) == 0, so max(distance, 0) leaves the plain\n//     distance term untouched when no density is set. Density can only\n//     ever push fog stronger than the base distance ramp, never weaker \u2014\n//     \"restrained\" in the sense that it augments, never overrides.\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=smoothstep(uFogStart,uFogEnd,viewDepth);\n  float densityFactor=1.-exp(-uFogDensity*viewDepth);\n  float factor=max(distFactor,densityFactor);\n  float heightFactor=exp(-uFogHeightFalloff*max(worldY,0.));\n  return clamp(factor*heightFactor,0.,1.);\n}\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  float bias=max(.004*(1.-ndotl),.0015);\n  float sum=0.;\n  sum+=sampleShadow(projCoord+vec3(-.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,-.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(-.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  sum+=sampleShadow(projCoord+vec3(.5,.5,0.)*vec3(uShadowMapTexelSize,0.),bias);\n  return sum*.25;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  vec4 tex=texture(uAlbedo,uv);\n  // \xa76.2's alpha-masked route. Deliberately the first thing after the\n  // fetch it depends on, and ahead of all the lighting below: a discarded\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  vec3 toLight=normalize(uLightPosition-vWorldPos);\n  float ndotl=max(dot(n,toLight),0.);\n  float shadow=shadowFactor(ndotl);\n  float attenuation=lightAttenuation(vWorldPos);\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  vec2 screenUv=gl_FragCoord.xy/uSceneColorSize;\n  float ao=texture(uSsao,screenUv).r;\n  vec3 ambient=uAmbientColor*uAmbientIntensity*ao;\n  vec3 lit=vColor.rgb*tex.rgb*uMaterialTint*clamp(ambient+vec3(ndotl*shadow*attenuation),0.,1.);\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(uMaterialTint*uEmissiveStrength,1.);\n}\n",b0,a9,a1,b3,new A.or(d,m),a5,b4,s,b9,b8))
B.a.I(c,l)
c.push(new A.f9(a,j,u.q,b,k))
return new A.hE(c)},
oq:function oq(a){this.a=a},
or:function or(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
jo:function jo(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iA:function iA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jr:function jr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iz:function iz(a,b,c,d,e,f,g){var _=this
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
iN:function iN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jx:function jx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(){},
iv(a,b){return new A.fi(a,b)},
hK:function hK(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d4:function d4(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eS:function eS(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=b},
D:function D(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b},
l_:function l_(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
ep:function ep(a,b){this.a=a
this.b=b},
cO:function cO(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
qe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.eM(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
hg:function hg(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aA:function aA(a,b){this.a=a
this.b=b},
n9:function n9(){this.a=null},
vk(a){var s=new A.iU(a,B.f,new A.n9())
s.il(a)
return s},
bN(a,b){var s,r
if(a.b!==B.f)A.k(A.l(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
vo(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
vn(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
qV(a,b){var s
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
vl(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
b6(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.f
r=s.k7(b)
if(r.a===0)return
if(r.v(0,B.aB)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.v(0,B.aC))a.a.depthFunc(A.vo(a,b.b))
if(r.v(0,B.aD))a.a.depthMask(b.c)
if(r.v(0,B.aH)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.v(0,B.aI))a.a.cullFace(A.vn(a,b.x))
if(r.v(0,B.c8)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.v(0,B.aE)){q=v.G
p=a.a
if(b.d)p.enable(A.a(q.WebGL2RenderingContext.BLEND))
else p.disable(A.a(q.WebGL2RenderingContext.BLEND))}if(r.v(0,B.aF))a.a.blendFunc(A.qV(a,b.e),A.qV(a,b.f))
if(r.v(0,B.aG))a.a.blendEquation(A.vl(a,b.r))
if(r.v(0,B.c6))a.a.colorMask(!0,!0,!0,!0)
if(r.v(0,B.c7)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
vm(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
eh(a,b,c,d,e,f){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.vm(a,b))},
cK(a,b){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.f(b.a)
a.a.useProgram(s)
a.e=s},
z(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.f)A.k(A.l(u.k))
s=a.e
if(s==null)throw A.c(A.l("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.i(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.h_(c.b))
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
bO(a,b){if(a.b!==B.f)A.k(A.l(u.k))
a.a.bindVertexArray(A.f(b.a))},
bq(a,b,c){var s,r,q,p,o,n
if(a.b!==B.f)A.k(A.l(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.fW){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.fV){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.c(A.l("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.c(A.l("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
dt(a,b,c){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
ph(a,b,c,d){if(a.b!==B.f)A.k(A.l(u.k))
a.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b,d)},
pi(a,b,c){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
a.a.drawElements(A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),c)},
pj(a,b,c,d){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=v.G
A.aN(a.a,"drawElementsInstanced",[A.a(s.WebGL2RenderingContext.TRIANGLES),b,A.a(s.WebGL2RenderingContext.UNSIGNED_SHORT),d,c],t.H)},
vp(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
qY(a,b){var s,r,q,p
if(a.b!==B.f)A.k(A.l(u.k))
s=a.a
r=A.i(s.createBuffer())
if(r==null)throw A.c(A.l("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.b5?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.vp(a,b.b))
return new A.cQ(r)},
qW(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
qX(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
pk(a,b){var s,r,q,p,o,n,m,l,k
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
if(p)A.aN(s,"texStorage3D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k,q],m)
else A.aN(s,"texStorage2D",[n,1,A.a(o.WebGL2RenderingContext.RGBA8),l,k],m)
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.qW(a,b.e))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.qW(a,b.f))
p=b.r
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.qX(a,p))
s.texParameteri(n,A.a(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.qX(a,p))
return new A.cQ(new A.fW(r,l,k,q,!1))},
pl(a,b,c,d){var s,r,q,p,o,n,m,l,k
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
if(r)A.aN(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aN(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
pm(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
c1(a){var s
if(a.b!==B.f)A.k(A.l(u.k))
s=A.i(a.a.createVertexArray())
if(s==null)throw A.c(A.l("WebGl2Device: gl.createVertexArray() returned null"))
return new A.cQ(s)},
qZ(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.i(p.createShader(b))
if(o==null)throw A.c(A.iv(b===A.pX(A.rB(A.tc(),r),q,t.S)?B.c1:B.c2,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.a6(A.ct(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bE(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.c(A.iv(b===A.pX(A.rB(A.tc(),r),q,t.S)?B.c1:B.c2,s))}return o},
vq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.f)A.k(A.l(u.k))
q=v.G
s=A.qZ(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.qZ(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.i(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.c(B.fe)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.a6(A.ct(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bE(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iv(B.c3,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iv(B.c4,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.i(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.c(A.iv(B.c4,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.cQ(n)},
cQ:function cQ(a){this.a=a},
fW:function fW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fV:function fV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
iU:function iU(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
n7:function n7(a){this.a=a},
n8:function n8(a){this.a=a},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3(a,b){var s=0,r=A.bc(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$k3=A.bd(function(a0,a1){if(a0===1)return A.b9(a1,r)
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
c=new A.he(p,b,m,l,k,j,i,h,g,f,e,d,n,B.aT,A.x(o,t.iL))
c.i9(p,b)
p=A.o(a).i("Z<1,2>")
s=3
return A.af(A.kR(A.i4(new A.Z(a,p),p.i("bi<ah>(n.E)").a(new A.k4(c)),p.i("n.E"),t.mj),t.b),$async$k3)
case 3:n=n.h(0,"ir-stone")
p=n==null?c.iV():n
d.buffer=p
q=c
s=1
break
case 1:return A.ba(q,r)}})
return A.bb($async$k3,r)},
he:function he(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
k4:function k4(a){this.a=a},
kh:function kh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
kK:function kK(a){this.a=a},
iD:function iD(a,b,c,d,e,f,g,h,i,j){var _=this
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
kY:function kY(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
kZ:function kZ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=0
this.$ti=b},
hT:function hT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
i5:function i5(a){this.a=a},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lL:function lL(a,b){this.a=a
this.b=b},
fk(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bf(a)
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
dp:function dp(a){this.a=a
this.b=0},
mh:function mh(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
mq:function mq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v0(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.qF(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.hY(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.jh(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0))
r=t.S
q=A.bT(800,0,!1,r)
p=new Float32Array(8064)
o=J.hY(4000,t.j8)
for(s=0;s<4000;++s)o[s]=new A.jf(new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),new A.b(0,0,0),0,1,0,0,0)
n=A.bT(4000,0,!1,r)
m=new A.b(0.3,0.7,-0.5).gac()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.mj(a,new A.kY(a,A.x(t.m,r)),b,c,A.a3(t.N),j,i,h,g,q,p,A.x(r,t.hX),o,n,m,B.ed,new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0),new A.i5(l),a,A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k),A.e([],k))
k.ih(a,b,c)
return k},
mj:function mj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.al=a
_.au=b
_.aQ=c
_.aR=d
_.dl=_.h_=1
_.dz=_.dw=_.hh=_.hg=_.hf=_.he=_.hd=_.hc=_.dv=_.du=_.dt=_.ds=_.dr=_.dq=_.dn=_.hb=_.ha=_.h9=_.dm=_.h8=_.h7=_.h6=_.h5=_.h4=_.h3=_.h2=_.h1=_.h0=_.a9=$
_.bZ=null
_.f3=e
_.fv=_.fu=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.fj=_.fi=_.fh=_.fg=_.ff=_.fe=_.fd=_.fc=_.fb=_.fa=_.f9=_.f8=_.f7=_.f6=_.f5=_.f4=_.c_=$
_.c0=0
_.d3=_.d2=_.d1=_.d0=_.d_=_.cZ=_.cY=$
_.c4=_.c3=_.c2=_.c1=_.bo=_.aP=null
_.bp=$
_.fA=_.fz=_.fw=!1
_.kf=1
_.d4=f
_.d5=g
_.kg=h
_.fB=i
_.c5=0
_.fC=j
_.kh=k
_.d6=0
_.d7=l
_.ki=1
_.d8=!1
_.bq=0
_.d9=m
_.br=0
_.fD=n
_.fE=o
_.fH=_.fG=_.fF=1
_.fI=0.55
_.da=p
_.fJ=q
_.dc=r
_.dd=s
_.de=a0
_.fK=_.di=_.dh=_.dg=_.df=0
_.fL=null
_.fM=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.fV=_.dk=_.dj=_.fU=_.fT=_.kl=_.kk=_.kj=_.fS=_.fR=_.fQ=_.fP=_.fO=_.fN=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.fW=a7
_.fX=a8
_.fY=a9
_.fZ=b0},
rL(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.a5(0,c).aN(f.a5(0,c)).gac(),r=A.ol(g)
return A.rO(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
h7(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.bf(a)
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
rO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.h7(a,A.h7(a,A.h7(a,A.h7(a,A.h7(a,A.h7(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
ol(a){return new A.eo((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
wB(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.c6(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.aa(),i=A.aa(),h=A.aa()
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
h.b=l}s=j.cK()
if(typeof s!=="number")return s.V()
s=B.d.aH(s*255)
r=i.cK()
if(typeof r!=="number")return r.V()
r=B.d.aH(r*255)
q=h.cK()
if(typeof q!=="number")return q.V()
return new A.eo(s,r,B.d.aH(q*255))},
fy:function fy(){},
js:function js(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
jh:function jh(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jf:function jf(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mk:function mk(){},
ml:function ml(a){this.a=a},
mm:function mm(a){this.a=a},
nb:function nb(){},
mA:function mA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
iM(a,b,c){return new A.b(a,b,c)},
qT(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.b(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
b:function b(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a){this.a=a},
u0(a,b,c){var s=new A.hB(a,c,null,b)
s.ia(a,null,null,b,c)
return s},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
ud(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.e3(new A.O(B.en,t.gl.a(new A.kA(a)),t.ns),t.no)
return s==null?null:new A.dZ(s)},
uc(a){if(a.a!==21)return null
if(a.e)return B.cL
if(!a.d&&a.b>=0.6&&a.c>=3)return B.cM
return B.cK},
bv:function bv(a,b){this.a=a
this.b=b},
kx:function kx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dZ:function dZ(a){this.a=a},
kA:function kA(a){this.a=a},
uJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.F(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.ij(s,new A.b(o,n,m),q,p,l,j)
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
ij:function ij(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xa(a){var s,r,q,p=A.x(t.N,t.z)
for(s=a.gR(),s=s.gu(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.c(B.cY)
p.l(0,q,r.b)}return p},
jE(a){var s,r,q,p,o,n=a.gN().b7(0)
B.a.X(n)
s=t.z
r=A.x(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.l(0,o,A.rw(a.h(0,o)))}return A.dX(r,t.N,s)},
rw(a){var s
if(t.f.b(a))return A.jE(A.xa(a))
if(t.j.b(a)){s=t.z
return A.ap(J.dL(a,A.y2(),s),s)}if(a==null||A.bF(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.df)
return a}throw A.c(A.ag("presentation snapshot contains unsupported value "+J.dK(a).n(0),null,null))},
m0:function m0(a){this.a=a},
qG(a,b,c){var s=A.pz(b),r=A.pz(a)
if(c!==2)A.k(A.aE(c,"version","unsupported save version"))
return new A.eb(c,s,r)},
pz(a){var s,r,q,p,o=A.o(a).i("aj<1>"),n=A.Q(new A.aj(a,o),o.i("n.E"))
B.a.X(n)
o=t.z
s=A.x(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.l(0,p,A.rv(a.h(0,p)))}return A.dX(s,t.N,o)},
rv(a){var s,r,q,p
if(t.f.b(a)){s=A.x(t.N,t.z)
for(r=a.gR(),r=r.gu(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.c(B.da)
s.l(0,p,q.b)}return A.pz(s)}if(t.j.b(a)){r=t.z
return A.ap(J.dL(a,A.y4(),r),r)}if(a==null||A.bF(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.c(B.dg)
return a}throw A.c(A.ag("save contains unsupported value "+J.dK(a).n(0),null,null))},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
mw:function mw(){},
dl:function dl(a,b){this.a=a
this.b=b},
qh(a,b,c,d,e,f,g){return new A.kU(a,b,c,d,e,f,g,A.e([],t.mc),A.e([],t.ag))},
qi(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.h(0,"houseSeed"),c=e.h(0,"time"),b=e.h(0,"dayLoop"),a=e.h(0,"journal"),a0=e.h(0,"house"),a1=e.h(0,"difficulty")
if(A.aM(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.c(B.d9)
r=e.h(0,"runSeed")
q=A.aM(r)?r:0
p=c.h(0,"day")
o=c.h(0,"hour")
if(!A.aM(p)||p<1||typeof o!="number")throw A.c(B.dj)
if(!isFinite(480))throw A.c(A.aE(480,"daySeconds","must be finite and > 0"))
n=new A.hI(p,480)
if(!isFinite(o)||o<0||o>=24)A.k(A.ag("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.uA(a3,A.aS(a,s,m))
k=A.tY(l,A.aS(b,s,m),n)
j=A.qj(d)
A.uo(A.aS(a0,s,m)).jF(j)
m=A.aS(a1,s,m)
i=m.h(0,"scrutiny")
h=m.h(0,"exhaustion")
g=m.h(0,"isolation")
f=m.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bF(f))A.k(B.d_)
return A.qh(d,q,j,n,l,k,new A.hz(i,h,g,f))},
wq(a){var s
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
d3:function d3(a,b){this.a=a
this.b=b},
hH:function hH(){},
kV:function kV(a,b){this.a=a
this.b=b},
kU:function kU(a,b,c,d,e,f,g,h,i){var _=this
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
kW:function kW(a){this.a=a},
kX:function kX(){},
tL(a){var s,r,q,p,o,n,m="modelScale",l=A.jI(a,"house manifest"),k=typeof l.h(0,m)=="number"?A.cp(l.h(0,m)):1
if(!isFinite(k)||k<=0)throw A.c(B.d4)
s=A.cT(l,"houseId")
r=A.cT(l,"sourceRef")
q=J.dL(A.jG(l,"rooms"),new A.k6(k),t.fS)
q=A.Q(q,q.$ti.i("a1.E"))
q.$flags=1
p=J.dL(A.jG(l,"portals"),new A.k7(k),t.gE)
p=A.Q(p,p.$ti.i("a1.E"))
p.$flags=1
o=J.dL(A.jG(l,"stairs"),new A.k8(),t.d2)
o=A.Q(o,o.$ti.i("a1.E"))
o.$flags=1
n=J.dL(A.jG(l,"exteriorCells"),new A.k9(),t.N)
n=A.Q(n,n.$ti.i("a1.E"))
n.$flags=1
return new A.k5(s,r,q,p,o)},
tM(a,b){var s=A.jI(a,"room"),r=A.cT(s,"id"),q=A.rU(s.h(0,"origin"),"origin",b),p=A.rU(s.h(0,"size"),"size",b),o=J.dL(A.jG(s,"windows"),new A.kb(b),t.lJ)
o=A.Q(o,o.$ti.i("a1.E"))
o.$flags=1
return new A.dP(r,q,p,o)},
jI(a,b){return t.P.b(a)?a:A.h1(b+" is not an object")},
jG(a,b){return t.j.b(a.h(0,b))?t.ia.a(a.h(0,b)):A.h1(b+" is not a list")},
cT(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.h1(b+" is not a string")},
h5(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.h1(b+" is not finite")},
xm(a,b){var s,r
if(t.j.b(a)){s=J.aX(a)
s=s.gq(a)!==3||s.a1(a,new A.oo())}else s=!0
if(s)return A.h1(b+" is not a finite vec3")
s=A.e([],t.n)
for(r=J.K(a);r.m();)s.push(A.cp(r.gp()))
return s},
rU(a,b,c){var s,r,q,p=A.e([],t.n)
for(s=A.xm(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
h1(a){return A.k(A.ag(a,null,null))},
k5:function k5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(){},
k9:function k9(){},
ka:function ka(a){this.a=a},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kb:function kb(a){this.a=a},
dR:function dR(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dO:function dO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dQ:function dQ(a){this.b=a},
oo:function oo(){},
hl:function hl(a,b){this.a=a
this.b=b
this.d=null},
kj:function kj(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l4:function l4(){this.b=0},
ms:function ms(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
aF:function aF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kC:function kC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kD:function kD(){},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
l7:function l7(){},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b){this.a=a
this.b=b},
kE:function kE(){},
xv(a){var s,r,q,p=new A.l6(A.e([],t.oP),A.e([],t.t),A.x(t.N,t.S))
for(s=0;s<4;++s)A.wt(p,a,B.bp[s],10.5,10.5,8.03,0.42)
p.t(2,10.56,4.08,0.04,-0.06,3.96,-0.05)
p.t(2,10.56,4.08,10.55,-0.06,3.96,10.46)
p.t(2,0.04,4.08,10.54,-0.05,3.96,-0.04)
p.t(2,10.55,4.08,10.54,10.46,3.96,-0.04)
p.t(1,11,0,-0.08,-0.5,-0.35,-0.5)
p.t(1,11,0,11,-0.5,-0.35,10.58)
p.t(1,-0.08,0,10.58,-0.5,-0.35,-0.08)
p.t(1,11,0,10.58,10.58,-0.35,-0.08)
r=new A.aF(-0.42,8.03,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.aF(5.25,10.88,10.92,0.86,0.51,-0.04,0.5,1,4)
p.b_(r,new A.aF(5.25,10.88,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.b_(r,q,new A.aF(-0.42,8.03,10.92,0.86,0.51,-0.04,0,0,4))
q=new A.aF(5.25,10.88,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.aF(10.92,8.03,10.92,-0.86,0.51,-0.04,1,0,4)
p.b_(q,new A.aF(10.92,8.03,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.b_(q,r,new A.aF(5.25,10.88,10.92,-0.86,0.51,-0.04,0.5,1,4))
p.t(5,5.37,11,10.92,5.13,10.760000000000002,-0.42)
A.x1(p,10.5,10.5,8.03,10.88)
A.wh(p,10.5,10.5,10.88)
A.wp(p,10.5,10.5,8.03)
A.ww(p,a,10.5)
A.x6(p,10.5,10.5)
A.wf(p,10.5)
return p.jL()},
wt(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.e([],t.jX)
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
B.a.k(b4,new A.cN(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.av(i),b=J.K(h.a),h=new A.P(b,h.b,h.$ti.i("P<1>"));h.m();){a=b.gp()
if(!a.Q||a.ak(i)!==b7)continue
B:{if(!p||o){a0=g+a.ad(i)
break B}if(!q||n){a0=e+a.ad(i)
break B}a0=null}B.a.k(b4,new A.cN(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.i||b7===B.m?b8:b9
r=t.i
a1=A.as([0,s],r)
a2=A.as([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.k(0,a3.a)
a1.k(0,a3.b)
a2.k(0,a3.c)
a2.k(0,a3.d)}a4=A.Q(a1,a1.$ti.c)
B.a.X(a4)
a5=A.Q(a2,a2.$ti.c)
B.a.X(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.d(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.d(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.d(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.a1(b4,new A.ob(b0,b1,b2,b3)))continue
switch(m){case 0:b5.t(0,b1,b3,0,b0,b2,r)
break
case 2:b5.t(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.t(0,0,b3,b1,r,b2,b0)
break
case 1:b5.t(0,s,b3,b1,b8,b2,b0)
break}}A.wv(b5,b4,b7,b8,b9,c1)
A.wu(b5,b4,b7,b8,b9,c1)},
wu(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
wv(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.x4(a2,g,a4,a5,a6,a7,q)}},
x4(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
x1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.t(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.t(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.t(4,i,p,-0.38,j,q,-0.44)
a.t(4,i,p,s,j,q,o)}for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.t(5,h+0.5,p,o,h-0.5,r,q)}},
wh(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.t(0,g+0.35,k,n,g-0.35,l,q)
a.t(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.t(5,d+0.1,o,m,d-0.1,r,p)}}},
wp(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[-0.48,c+0.48],r=a0-0.16,q=b+0.1,p=0;p<2;++p){o=s[p]
a.t(6,q,a0,o+0.08,-0.1,r,o-0.08)}for(s=[0,b],r=c+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.11,l=n+0.11,k=n-0.07,j=n+0.07,i=0;i<2;++i){o=q[i]
a.t(6,j,a0,o+0.07,k,0,o-0.07)
for(h=[2,4,6],g=o-0.11,f=o+0.11,e=0;e<3;++e){d=h[e]
a.t(6,l,d+0.06,f,m,d,g)}}}},
ww(a,b,c){var s,r,q,p,o,n,m,l,k=b.e.h(0,"hall")
k.toString
s=b.f.h(0,"front-door")
r=k.d.a+s.ad("hall")
q=r+s.w
for(k=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.t(2,p+n,0.02-m,-0.42-l,k-n,-0.08-m,-0.7-l)}a.t(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.t(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.t(6,p,1.95,-0.37,q+0.16,1.55,-0.42)
a.t(3,q+0.32,1.5,-0.33999999999999997,q+0.12,1.42,-0.48)},
x6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
wf(a,b){var s,r
a.t(0,6.7,1,-4.05,-2.5,0,-4.4)
a.t(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.t(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.t(7,b+3,0,-4.55,-3,-0.08,-5.2)},
cN:function cN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ob:function ob(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y3(a,b,c){var s,r,q=A.q0(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.e0(B.cQ,s)}r=A.ta(a,c,b)
if(r!=null)return new A.e0(B.cR,r.ax&&!r.ay&&!r.z?"close door":"open door")
if(A.tb(a,c,b)!=null)return B.cV
return B.cU},
d1:function d1(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.c=b},
t0(a,b){var s,r=new A.dp(new Float32Array(5376)),q=new A.dp(new Float32Array(5376)),p=new A.dp(new Float32Array(5376)),o=new A.dp(new Float32Array(5376)),n=b.d,m=a.aO(b),l=n.a,k=n.b,j=n.c,i=m.c,h=j+i,g=m.a,f=l+g
g/=2
i/=2
r.cg(new A.b(l,k,j),new A.b(l,k,h),new A.b(f,k,h),new A.b(f,k,j),11053224,g,i)
k+=m.b
q.cg(new A.b(l,k,j),new A.b(f,k,j),new A.b(f,k,h),new A.b(l,k,h),12632256,g,i)
for(s=0;s<4;++s)A.wa(p,a,b,m,B.bp[s])
for(l=a.av(b.a),k=J.K(l.a),l=new A.P(k,l.b,l.$ti.i("P<1>"));l.m();){j=k.gp()
if(j.at==null||j.as)continue
A.w7(o,b,m,j)}A.w6(p,b,m)
A.w8(p,a,b,m)
return new A.mt(B.w.bb(r.a,0,r.b),B.w.bb(q.a,0,q.b),B.w.bb(p.a,0,p.b),B.w.bb(o.a,0,o.b))},
w8(b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=11905688,a3=5913386,a4=3420976,a5=3680031,a6=13749441,a7=b3.d,a8=a7.a,a9=a7.b,b0=a7.c
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
case"hall":A.w9(b1,b2,b3,b4,a5,a4)
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
w9(a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.d
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
wa(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a4===B.i||a4===B.m?a3.a:a3.c,a=A.e([],t.a9)
for(s=a2.a,r=a1.av(s),q=J.K(r.a),r=new A.P(q,r.b,r.$ti.i("P<1>"));r.m();){p=q.gp()
if(!p.as&&p.ak(s)===a4)a.push(new A.cM(p.ad(s),p.ad(s)+p.w,0,p.x))}for(s=a2.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===a4){q=n.c
p=n.d
a.push(new A.cM(q,q+n.e,p,p+n.f))}}s=t.i
r=A.as([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.r)(a),++o){m=a[o]
r.I(0,A.e([m.a,m.b],p))}l=A.Q(r,r.$ti.c)
B.a.X(l)
s=A.as([0,a3.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.r)(a),++o){m=a[o]
s.I(0,A.e([m.c,m.d],p))}k=A.Q(s,s.$ti.c)
B.a.X(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.d(l,j)
f=l[j]
if(!(i<r))return A.d(l,i)
e=l[i]
if(!(h<s))return A.d(k,h)
d=k[h]
c=k[g]
if(B.a.a1(a,new A.nQ(f,e,d,c)))continue
A.xn(a0,a2,a3,a4,f,e,d,c)}A.wb(a0,a2,a3,a4,b,a)},
wb(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.a
if(c==="cellar")return
s=c==="living-room"||c==="hall"
r=c==="bedroom"
q=r||c==="landing"||c==="spare-room"
if(s)p=13155750
else p=q?12498339:11709599
A.nO(a,b,a0,a1,a2,a3,0.02,0.17,0.032,p)
o=!s
if(!o||c==="landing")A.nO(a,b,a0,a1,a2,a3,0.88,0.94,0.022,p)
if(!o||r){n=a0.b-0.58
A.nO(a,b,a0,a1,a2,a3,n,n+0.055,0.022,p)}c=a0.b
r=s?0.13:0.09
m=c-0.012
o=s?0.055:0.038
A.nO(a,b,a0,a1,a2,a3,c-r,m,o,p)
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
if(o>0)A.jL(a,b,a0,a1,j,o,f,d,0.04,p)
if(i<a2)A.jL(a,b,a0,a1,i,h,f,d,0.04,p)
if(e<c)A.jL(a,b,a0,a1,j,h,e,d,0.04,p)
if(g>0){o=g-0.075
A.jL(a,b,a0,a1,j,h,0>o?0:o,g,0.065,p)}}},
nO(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n
if(g<0||h>c.b||h<=g)return
for(s=A.xd(e,f,g,h),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
n=p.a
if(o-n<0.025)continue
A.jL(a,b,c,d,n,o,g,h,i,j)}},
xd(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=t.eP,h=A.e([new A.eq(0,a)],i)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(q.d<=c||q.c>=d)continue
p=A.e([],i)
for(o=h.length,n=q.b,m=q.a,l=0;l<h.length;h.length===o||(0,A.r)(h),++l){k=h[l]
j=k.a
if(n<=j||m>=k.b){B.a.k(p,k)
continue}if(m>j)B.a.k(p,new A.eq(j,m))
j=k.b
if(n<j)B.a.k(p,new A.eq(n,j))}h=p}return h},
w6(a,b,c){var s,r,q,p,o=b.a,n=o==="living-room"
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
jL(a,b,c,d,e,f,g,h,i,j){var s=b.d,r=s.a,q=s.b,p=s.c
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
xn(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=null,l=b.d,k=l.a,j=l.b,i=l.c
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
default:o=m}a.cg(s.U(0,o),r.U(0,o),q.U(0,o),p.U(0,o),9145227,(f-e)/2,(h-g)/2)
n=A.xo(b,d)
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
xo(a,b){var s
switch(b.a){case 3:s=a.d.a===0
break
case 0:s=a.d.c===0
break
case 1:s=Math.abs(a.d.a+a.c.a-10.5)<0.001
break
case 2:s=Math.abs(a.d.c+a.c.c-10.5)<0.001
break
default:s=null}return s?0.42:0.18},
w7(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a1.a,c=a3.ak(d),b=a3.ad(d),a=b+a3.w
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
A.nP(a0,a1,a2,a3,q)
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
A.nP(a0,a1,a2,a3,q)
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
A.nP(a0,a1,a2,a3,q)
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
A.nP(a0,a1,a2,a3,q)
break}},
nP(a,b,c,d,e){var s,r,q,p,o=b.a,n=d.ak(o),m=d.ad(o)
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
mt:function mt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nQ:function nQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function eq(a,b){this.a=a
this.b=b},
qj(c0){var s,r,q,p,o=null,n="living-room",m="mantle-living",l="the mantle by the door",k="mantle-living-second",j="the mantle by the window",i="floor-wood",h="ceiling-plaster",g="hall",f="hall-landing",e="compliance-card",d="hall-clock",c="ration-book",b="wallpaper-damask",a="kitchen",a0="mantle-kitchen",a1="shopping-list",a2="mantle-bedroom",a3="journal-desk",a4="half-written-letter",a5="landing",a6="landing-bathroom",a7="bathroom",a8="bathroom-mirror",a9="spare-room",b0="previous-tenant-post",b1="calendar",b2="undone-task",b3="kit-internal-four-panel-door",b4=t.kl,b5=A.e([],b4),b6=t.aN,b7=A.e([],b6),b8=A.e([],t.jn),b9=t.N
b9=new A.l3(b5,b7,b8,A.x(b9,t.W),A.x(b9,t.gm),new A.l4())
s=t.E
r=t.s
q=t.cs
p=t.x
B.a.I(b5,A.e([new A.az(n,B.T,new A.b(4.5,3.9,4),new A.b(0,0,0),A.e([new A.aL("living-north-west",B.i,0.5,0.9,1.2,1.8,!1,!0),new A.aL("living-north-east",B.i,2.7,0.9,1.2,1.8,!1,!0)],s),A.e(["hall-living","kitchen-living"],r),A.e([new A.aT(m,l,new A.b(1,1.95,1),!1,!1,m),new A.aT(k,j,new A.b(3,1.95,3),!1,!1,k)],q),B.ao,"wallpaper-stripes",i,h,B.A),new A.az(g,B.T,new A.b(2.5,3.9,7),new A.b(4.5,0,0),A.e([new A.aL("hall-fanlight",B.i,0.85,3.225,0.8,0.525,!1,!0)],s),A.e(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.e([new A.aT("mantle-hall","the hall mantle",new A.b(1,1.95,3.5),!1,!1,o)],q),A.e([new A.b1(e,e,new A.b(0.2,2.175,0.35)),new A.b1(d,d,new A.b(2.2,2.55,3)),new A.b1(c,c,new A.b(0.4,1.35,4.1))],p),b,i,h,B.A),new A.az(a,B.T,new A.b(4.5,3.75,3),new A.b(0,0,4),A.e([new A.aL("kitchen-south",B.m,1.5,1.05,1.2,1.65,!1,!0),new A.aL("kitchen-west",B.G,1,1.2,0.9,1.5,!1,!0)],s),A.e(["hall-kitchen","kitchen-living"],r),A.e([new A.aT(a0,"the mantle by the stove",new A.b(0.8,1.8,0.5),!1,!1,a0),new A.aT("mantle-kitchen-second",l,new A.b(2.2,1.8,2),!1,!1,o),new A.aT("mantle-kitchen-third",j,new A.b(3.8,1.8,1.2),!1,!1,o)],q),A.e([new A.b1(a1,a1,new A.b(1.2,1.65,2.65))],p),"wallpaper-floral","floor-linoleum",h,B.dY),new A.az("cellar",B.T,new A.b(4,3,4),new A.b(1,-3,2),B.bn,A.e(["hall-cellar"],r),B.eh,B.ao,"wallpaper-damp","floor-concrete","ceiling-pipes",B.A),new A.az("bedroom",B.U,new A.b(4.5,3.6,4),new A.b(0,4.2,0),A.e([new A.aL("bedroom-north-west",B.i,0.7,1.05,1.1,1.65,!1,!0),new A.aL("bedroom-north-east",B.i,2.7,1.05,1,1.65,!1,!0)],s),A.e(["landing-bedroom"],r),A.e([new A.aT(a2,"the bedroom mantle",new A.b(1,1.95,1),!1,!1,a2),new A.aT("mantle-bedroom-bedside","the bedside mantle",new A.b(3.5,1.5,3),!1,!1,o)],q),A.e([new A.b1(a3,a3,new A.b(2.2,1.125,2.5)),new A.b1(a4,a4,new A.b(2.4,1.14,2.45))],p),"wallpaper-faded",i,h,B.A),new A.az(a5,B.U,new A.b(2.5,3.6,3),new A.b(4.5,4.2,0),B.bn,A.e(["hall-landing","landing-bedroom",a6,"landing-spare"],r),A.e([new A.aT("mantle-landing","the landing mantle",new A.b(1,1.8,1.5),!1,!1,o)],q),B.ao,b,i,h,B.A),new A.az(a7,B.U,new A.b(2.5,3.6,2.5),new A.b(4.5,4.2,3),A.e([new A.aL("bathroom-east",B.v,0.9,1.5,0.7,1.5,!0,!0)],s),A.e([a6],r),A.e([new A.aT("mantle-bathroom","the bathroom mantle",new A.b(1.5,1.8,1),!1,!1,o)],q),A.e([new A.b1(a8,a8,new A.b(2.35,2.175,1.2))],p),"wallpaper-tiles","floor-tiles",h,B.A),new A.az(a9,B.U,new A.b(4.5,3.15,3),new A.b(0,4.2,4),A.e([new A.aL("spare-south",B.m,1.8,1.05,0.9,1.35,!1,!0)],s),A.e(["landing-spare"],r),A.e([new A.aT("mantle-spare","the broken mantle",new A.b(2,1.95,1),!1,!0,o)],q),A.e([new A.b1(b0,b0,new A.b(0.5,1.8,0.3)),new A.b1(b1,b1,new A.b(3.7,2.1,2.7)),new A.b1(b2,b2,new A.b(3.5,1.125,1.8))],p),"wallpaper-peeling",i,h,B.A)],b4))
B.a.I(b7,A.e([A.cE(g,"outside","kit-front-door-recessed",!0,B.i,B.m,3.15,!1,"front-door",!1,0.8,0,!0,!1,!1,0.9),A.cE(g,n,b3,!1,B.G,B.v,3.15,!1,"hall-living",!1,1.8,1.8,!0,!1,!1,0.9),A.cE(g,a,b3,!1,B.G,B.v,3.15,!1,"hall-kitchen",!1,4.9,1,!0,!1,!1,0.9),A.cE(a,n,b3,!1,B.i,B.m,3.15,!1,"kitchen-living",!1,2,2,!0,!1,!1,0.9),A.cE(g,"cellar","kit-cellar-door-grille",!1,B.m,B.v,3,!1,"hall-cellar",!1,0.5,1.5,!1,!1,!0,0.9),A.cE(g,a5,o,!1,B.v,B.v,3.15,!1,f,!1,4,0.7,!0,!0,!1,1.2),A.cE(a5,"bedroom",b3,!1,B.G,B.v,3.15,!1,"landing-bedroom",!1,1,1,!0,!1,!1,0.9),A.cE(a5,a7,b3,!1,B.m,B.i,3.15,!1,a6,!1,1,0.8,!0,!1,!1,0.9),A.cE(a5,a9,b3,!1,B.m,B.i,3.15,!1,"landing-spare",!1,0.1,2,!0,!1,!1,0.9)],b6))
B.a.k(b8,new A.cG("hall-stairs",f,B.e9,new A.b(5,0,2.8),new A.b(6.5,6.3,6),new A.b(5.75,2.475,5.8),new A.b(5.75,6.675,2.2)))
b9.ir()
b9.iU()
b4=b5.length
if(b4!==8)A.k(A.l("expected eight rooms, got "+b4))
b4=b9.glh()
if(b4!==9)A.k(A.l("window discrepancy must be 9 inside / 11 outside"))
B.a.gb9(b8)
b4=B.a.gO(B.a.gb9(b8).c)
if(b4!==6.3)A.k(A.l("stairs must expose landings at 2.1, 4.2 and 6.3"))
if(b7.length!==9)A.k(A.l("expected nine physical portals"))
b9.jw()
b9.jv()
return b9},
l3:function l3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ld:function ld(){},
le:function le(){},
lc:function lc(){},
lf:function lf(a){this.a=a},
lg:function lg(){},
q0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.h(0,c)
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
ta(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.av(c),r=J.K(s.a),s=new A.P(r,s.b,s.$ti.i("P<1>")),q=null,p=3;s.m();){o=r.gp()
n=b.kS(c,o)
m=a.a
l=new A.b(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.rD(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
tb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=A.xp(b,i,n)
l=a.a
k=new A.b(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.rD(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
rD(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.a_(a.gac().bn(c.b),-1,1))<=e},
xp(a,b,c){var s=a.aO(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.b(q.a+r,p,q.c)
break
case 2:q=new A.b(q.a+r,p,q.c+s.c)
break
case 1:q=new A.b(q.a+s.a,p,q.c+r)
break
case 3:q=new A.b(q.a,p,q.c+r)
break
default:q=null}return q},
kB:function kB(){this.a=null
this.b=0},
mB:function mB(){},
mC:function mC(){},
us(a){var s=A.h6(a,"inventory asset"),r=A.cs(s,"id")
A.cs(s,"kind")
A.cs(s,"source")
A.cs(s,"proxy")
A.cs(s,"pivot")
s=A.h6(s.h(0,"bounds"),"inventory bounds")
return new A.bS(r,new A.ll(A.jK(s.h(0,"min"),"bounds.min"),A.jK(s.h(0,"max"),"bounds.max")))},
ut(a){var s,r,q,p,o,n="stateKey",m=A.h6(a,"inventory placement"),l=A.h6(m.h(0,"visibility"),"placement visibility"),k=A.h6(m.h(0,"interaction"),"placement interaction"),j=m.h(0,"clearance"),i=A.cs(m,"id"),h=A.cs(m,"roomId"),g=A.cs(m,"assetId")
A.cs(m,"role")
s=typeof m.h(0,"socket")=="string"?A.F(m.h(0,"socket")):null
m=A.h6(m.h(0,"transform"),"inventory transform")
r=A.jK(m.h(0,"scale"),"transform.scale")
if(r.a<=0||r.b<=0||r.c<=0)A.k(B.db)
q=A.jK(m.h(0,"position"),"transform.position")
p=A.jK(m.h(0,"rotation"),"transform.rotation")
A.cs(l,"layer")
if(typeof l.h(0,n)=="string")A.F(l.h(0,n))
J.a6(k.h(0,"pickable"),!0)
o=t.P.b(j)?A.wW(j,"radius"):0
return new A.cz(i,h,g,s,new A.lm(q,p,r),o)},
h6(a,b){return t.P.b(a)?a:A.cq(b+" is not an object")},
cs(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.cq(b+" is not a string")},
wW(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.cq(b+" is not finite")},
jK(a,b){var s
if(t.j.b(a)){s=J.aX(a)
s=s.gq(a)!==3||s.a1(a,new A.on())}else s=!0
if(s)return A.cq(b+" is not a finite vec3")
s=J.aX(a)
return new A.b(A.cp(s.h(a,0)),A.cp(s.h(a,1)),A.cp(s.h(a,2)))},
cq(a){return A.k(A.ag(a,null,null))},
hP:function hP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
bS:function bS(a,b){this.a=a
this.f=b},
cz:function cz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.y=f},
lm:function lm(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b){this.a=a
this.b=b},
on:function on(){},
bW:function bW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hQ:function hQ(a){this.a=a},
la:function la(a){this.a=a},
cE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.cD(i,a,b,e,f,k,l,p,g,!1,o,d,n,c,m,j)},
eP:function eP(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aT:function aT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(){},
cG:function cG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
az:function az(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
qk(a,b,c,d,e,f){var s=t.N
return new A.lb(e,f,c,a,A.dX(A.aS(d,s,s),s,s),A.ap(b,s))},
ql(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.x(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.l(0,p.a,new A.f8(p.ax,p.ay))}s=A.x(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.l(0,k.a,k.w)}i=A.x(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.l(0,j.a,new A.f0(j.d,j.r))}return A.qk(a.r.b,B.l,i,B.bv,h,s)},
uo(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.eB
r=a3.h(0,"mantleHistory")
if(r==null)r=B.eg
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aM(a2)||!q.b(s)||!t.j.b(r))throw A.c(B.d7)
p=t.N
o=A.x(p,t.ku)
for(n=a.gR(),n=n.gu(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b3)
l=A.aS(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bF(j)||!A.bF(i))A.k(B.b3)
o.l(0,k,new A.f8(j,i))}h=A.x(p,t.y)
for(n=a0.gR(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bF(l.b))throw A.c(B.d5)
h.l(0,k,A.aV(l.b))}g=A.x(p,t.mK)
for(n=a1.gR(),n=n.gu(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.c(B.b2)
l=A.aS(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bF(f)||!A.bF(e))A.k(B.b2)
g.l(0,k,new A.f0(f,e))}d=A.x(p,p)
for(q=s.gR(),q=q.gu(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.c(B.dp)
d.l(0,n,A.F(p.b))}c=A.e([],t.s)
for(q=J.K(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.c(B.cW)
B.a.k(c,b)}return A.qk(a2,c,g,d,o,h)},
pO(a,b){return a.a.a===b.a&&a.ag(0,b.gbV(b))},
lb:function lb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f8:function f8(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
ua(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.lG(e,A.N(e).c)
q=new A.ej()
q.cr((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.eN(a,q,2,r,1+s,A.as(["time"],t.N))
break
case 3:A.eN(a,q,3,r,1+s,A.as(["place"],t.N))
break
case 4:A.eN(a,q,4,r,2+s,p)
A.u6(a,q,4)
break
case 5:A.eN(a,q,5,r,s,p)
A.u4(a,q,5)
break
case 6:A.eN(a,q,6,r,s,p)
A.u5(a,q)
A.u9(a,q,6)
break
case 7:A.u7(a,q,7)
break
default:if(s>0)A.eN(a,q,b,r,s,p)}},
u3(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.v(0,b.a))return!1
if(A.u8(a,b,c))return!1
return!0},
eN(a,b,c,d,e,f){var s,r,q,p,o=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(A.u3(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.cp(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.d(o,p)
A.qf(a,b,o[p],f)}},
qf(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.aS(B.a.gO(o).a,n,n)
if(d==null)s=A.e(B.t.slice(0),t.s)
else{n=t.nn
s=A.Q(new A.O(B.t,t.gS.a(new A.kw(d)),n),n.i("n.E"))}n=s.length
if(n===0)return
n=b.ai(n)
if(!(n>=0&&n<s.length))return A.d(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.e0(r,q)
n=p.length
if(n===0)m.l(0,r,q)
else{n=b.ai(n)
if(!(n>=0&&n<p.length))return A.d(p,n)
m.l(0,r,p[n])}a.cU(c.a,m,B.a.gO(o).b)},
u6(a,b,c){var s=A.qg(a,b,c)
if(!a.bi(s))return
a.e6(c,t.G.a(s),0,B.am,null)},
qg(a,b,c){var s,r,q,p,o,n=t.N,m=A.x(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.t[s]
q=n.h(0,r)
if(q==null)q=B.l
p=q.length
if(p===0)m.l(0,r,"")
else{o=b.ai(p)
if(!(o>=0&&o<p))return A.d(q,o)
m.l(0,r,q[o])}}return m},
u4(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.cp(i,b)
s=i.length
if(0>=s)return A.d(i,0)
q=i[0]
if(1>=s)return A.d(i,1)
p=i[1]
i=q.c
s=t.N
o=A.aS(B.a.gO(i).a,s,s)
r=p.c
n=A.aS(B.a.gO(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.t[m]
k=o.h(0,l)
j=s.e0(l,k==null?"":k)
k=j.length
if(k!==0){k=b.ai(k)
if(!(k>=0&&k<j.length))return A.d(j,k)
o.l(0,l,j[k])}}a.cU(q.a,o,B.a.gO(i).b)
a.cU(p.a,n,B.a.gO(r).b)},
u5(a,b){var s,r,q=A.e([],t.r)
for(s=a.b,r=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.ai(r)
if(!(r>=0&&r<q.length))return A.d(q,r)
s.aj(0,q[r].a)},
u9(a,b,c){var s,r,q=A.e([],t.r)
for(s=a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.ai(s)
if(!(s>=0&&s<q.length))return A.d(q,s)
A.qf(a,b,q[s],null)},
u7(a,b,c){var s=c+1,r=A.qg(a,b,s)
if(!a.bi(r))return
a.e6(s,t.G.a(r),0,B.am,null)},
u8(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gO(b.c).c===B.W}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gO(b.c).c===B.W}if(c===21)return b.e
return!1},
kw:function kw(a){this.a=a},
vj(a){var s,r,q,p,o=t.N,n=A.x(o,t.h)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p=A.ax(q==null?B.l:q,!1,o)
p.$flags=3
n.l(0,r,p)}return new A.n6(n)},
lB(a,b,c){var s,r,q,p=t.z
p=A.x(p,p)
for(s=0;s<5;++s){r=B.t[s]
q=a.h(0,r)
p.l(0,r,q==null?"":q)}q=t.N
return new A.i3(A.dX(p,q,q),b,c)},
qu(a){var s=t.N
return A.lB(t.P.a(a.h(0,"fields")).b3(0,new A.lC(),s,s),A.cp(a.h(0,"shakiness")),A.uf(B.eb,A.F(a.h(0,"hand")),t.bU))},
ue(a){var s,r,q,p,o=a.h(0,"margin"),n=A.a(a.h(0,"ordinal")),m=A.a(a.h(0,"day")),l=A.e([],t.b1)
for(s=J.K(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.qu(r.a(s.gp())))
s=A.bE(a.h(0,"corroborator"))
q=A.aV(a.h(0,"locked"))
p=A.rr(a.h(0,"lastReadDay"))
return new A.bh(n,m,l,s,q,p,o==null?null:A.qu(r.a(o)))},
cy:function cy(a,b){this.a=a
this.b=b},
n6:function n6(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function lC(){},
lD:function lD(a){this.a=a},
bh:function bh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qr(a){return new A.lo(a,A.x(t.S,t.L),A.a3(t.N),A.e([],t.t))},
uA(a,b){var s,r,q,p,o=A.qr(a)
o.e=A.a(b.h(0,"nextOrdinal"))
o.f=A.a(b.h(0,"locksRemaining"))
s=t.j
o.c.I(0,J.tE(s.a(b.h(0,"tags")),t.N))
for(s=J.K(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.ue(r.a(s.gp()))
q.l(0,p.a,p)}return o},
lo:function lo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
lv:function lv(a,b){this.a=a
this.b=b},
kc:function kc(){},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kd:function kd(){},
lA:function lA(){},
lz:function lz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lY:function lY(){},
lX:function lX(a,b){this.b=a
this.c=b},
lZ:function lZ(){},
pb(a){if(!isFinite(0))A.k(A.aE(0,"interpolation",null))
return new A.mp(a)},
fd:function fd(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
mp:function mp(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
mo(a,b,c,d,e){var s="84742f6f9aa2-e81ac167594e-dirty",r=A.nV("RENDERER_SHA"),q=A.nV("GAME_SHA"),p=A.nV("DART_SDK_VERSION"),o=A.nV("LOCKFILE_SHA256"),n=A.lG(b,A.N(b).c)
n=A.Q(n,A.o(n).c)
B.a.X(n)
n=new A.mn(a,e,s,A.ap(n,t.N),r,q,p,o,c,d)
n.ii(a,s,b,c,d,q,o,e,r,p)
return n},
nV(a){var s=B.ev.h(0,a)
return s.length===0?null:s},
mn:function mn(a,b,c,d,e,f,g,h,i,j){var _=this
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
qd(a,b,c,d,e,f,g){var s=A.Q(f,t.ad)
if(b<0||a<0||e<0)A.k(A.ag("saved day-loop resources must not be negative",null,null))
return new A.ko(c,g,b,a,e,d===!0,s)},
tY(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.c(B.d2)
s=A.e([],t.b2)
for(r=J.K(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.c(B.d8)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.aM(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.c(B.d1)
f=A.e3(new A.O(B.bj,q.a(new A.kp(h)),p),o)
e=A.e3(new A.O(B.bo,n.a(new A.kq(g)),m),l)
if(f==null||e==null)throw A.c(B.dl)
B.a.k(s,new A.ec(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.aM(d)||!A.aM(c)||!A.aM(b)||!A.bF(a))throw A.c(B.dc)
return A.qd(c,d,a1,a,b,s,a3)},
b3:function b3(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
hU:function hU(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
na:function na(a,b){this.b=a
this.c=b},
du:function du(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
lh:function lh(a){this.c=a},
lj:function lj(a,b){this.a=a
this.b=b},
lk:function lk(){},
qF(){var s=A.pE(B.l),r=A.pE(B.l),q=new A.mv(B.x,s,r)
if(!isFinite(0))A.k(B.cX)
if(!B.a.ag(r,B.a.gbV(s)))A.k(B.dd)
if(q.a===B.x&&q.b!==0&&!q.e)A.k(B.cZ)
return q},
pE(a){var s,r,q,p=A.e([],t.s),o=A.a3(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.k(0,q))throw A.c(B.dk)
B.a.k(p,q)}return p},
bx:function bx(a,b){this.a=a
this.b=b},
mu:function mu(){},
bY:function bY(){},
mv:function mv(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
hI:function hI(a,b){this.a=a
this.b=6
this.c=b},
td(a){var s=B.d.a_(a,0,1)
if(s<=0.5)return A.rJ(4491468,16777215,s*2)
return A.rJ(16777215,16759637,(s-0.5)*2)},
te(a){var s=B.d.a_(a,0,1)
return new A.b(Math.cos((s-0.5)*3.141592653589793),Math.sin(3.141592653589793*s),-0.5).gac()},
rJ(a,b,c){var s,r=new A.of(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.hU()
s=r.$1(8)
if(typeof s!=="number")return s.hU()
r=r.$1(0)
if(typeof r!=="number")return A.jO(r)
return(q<<16|s<<8|r)>>>0},
of:function of(a,b,c){this.a=a
this.b=b
this.c=c},
ef(a){var s,r,q=A.x(t.N,t.z)
for(s=a.gR(),s=s.gu(s);s.m();){r=s.gp()
q.l(0,B.c.n(r.a),r.b)}return q},
mG:function mG(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
mH:function mH(){},
mI:function mI(){},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a,b){this.a=a
this.b=b},
mL:function mL(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
mM:function mM(){},
mN:function mN(){},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
kf:function kf(a){this.a=a
this.b=null},
u1(a){var s=A.e([],t.kG)
s=new A.ks(A.W(a,"div","door",null),s)
s.ib(a)
return s},
ks:function ks(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
kt:function kt(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
kv:function kv(a,b){this.a=a
this.b=b},
ub(a){var s=new A.ky(a,A.f(a.createElement("div")))
s.bE(a)
s.ic(a)
return s},
ky:function ky(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
kz:function kz(a){this.a=a},
un(a){var s=new A.l1(a,A.f(a.createElement("div")))
s.bE(a)
s.ie(a)
return s},
l1:function l1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
l2:function l2(a){this.a=a},
lp:function lp(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
lq:function lq(a){this.a=a},
lr:function lr(a){this.a=a},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
lt:function lt(){},
lu:function lu(){},
W(a,b,c,d){var s=A.f(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
rz(a){var s,r,q,p=A.f(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.e([],t.kG)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.i(p.item(r))
if(s.b(q))B.a.k(o,q)}return o},
f7:function f7(){},
m6:function m6(a){this.a=a
this.b=null},
v2(a){var s=new A.mD(a,A.f(a.createElement("div")))
s.bE(a)
s.ik(a)
return s},
mD:function mD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
mE:function mE(a,b,c){this.a=a
this.b=b
this.c=c},
tK(a){var s,r,q,p,o,n,m,l,k,j,i=A.e([],t.od)
for(s=a.d,s=new A.Z(s,A.o(s).i("Z<1,2>")).gu(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gR(),n=n.gu(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.k(i,new A.bI(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.jZ())
return new A.jY(A.ap(i,t.e),A.a3(t.N))},
bI:function bI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jY:function jY(a,b){this.a=a
this.b=b},
k_:function k_(){},
jZ:function jZ(){},
vi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.h6
s=t.g
r=A.x(s,t.kz)
q=A.o(e).i("aj<1>")
p=A.Q(new A.aj(e,q),q.i("n.E"))
B.a.X(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=e.h(0,k).gR(),j=j.gu(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.b5(new A.bp(B.fT,k+" has an out-of-range authored day "+h+"."))
g=A.vh(k,h,i.b,m)
if(g instanceof A.b5)return g
i=n.h(0,k)
f=i==null?null:i.h(0,h)
if(f==null)continue
r.l(0,new A.b4(k,h,f.a,f.b),o.a(g).a)}}return new A.iS(new A.iR(r,A.a3(t.N),A.a3(s),A.e([],t.bl),B.D))},
vh(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.x(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.bi[p]
n=o.b
m=n+"."
l=A.e([],q)
for(k=a0.gR(),k=k.gu(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.b.W(h,m))continue
g=A.m2(B.b.bD(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.b5(new A.bp(B.fU,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.bm
B.a.k(l,new A.by(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.n0())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.b5(new A.bp(B.cc,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.l(0,o,l)}if(c.a===0)return new A.b5(new A.bp(B.cc,a+" day "+s+" has no authored tiers."))
return new A.jg(c)},
iR:function iR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
n4:function n4(a){this.a=a},
n3:function n3(a){this.a=a},
n1:function n1(a){this.a=a},
n2:function n2(){},
n0:function n0(){},
iS:function iS(a){this.a=a},
jg:function jg(a){this.a=a},
xG(a){var s,r,q,p=A.a3(t.N)
for(s=new A.Z(a,A.o(a).i("Z<1,2>")).gu(0);s.m();){r=s.d
for(q=r.b.gap(),q=q.gu(q);q.m();)if(q.gp().gN().a1(0,new A.ov())){p.k(0,r.a)
break}}s=A.Q(p,p.$ti.c)
B.a.X(s)
return s},
xF(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.l
s=t.N
r=A.ax(b,!0,s)
B.a.X(r)
q=new A.ej()
q.cr((a^913741)>>>0)
p=q.ai(4)
if(!(p>=0&&p<4))return A.d(B.bh,p)
o=B.bh[p]
n=r.length
n=o>n?n:o
if(n===0)return B.l
m=A.ax(r,!0,s)
B.a.cp(m,q)
s=A.mJ(m,0,A.dH(n,"count",t.S),A.N(m).c).b7(0)
B.a.X(s)
return s},
ov:function ov(){},
qU(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.aM(r)||!A.aM(q)||!A.aM(p)||r<1||q<0||q>23||p<0)return null
return new A.b4(s,r,q,p)},
vg(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a3(t.N)
for(s=t.j,q=J.K(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.k(0,p)}o=A.a3(t.g)
for(s=J.K(s.a(a.h(0,j)));s.m();){n=A.qU(s.gp())
if(n==null)return i
o.k(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.tJ(m)
if(!s&&l==null)return i
return new A.iT(r,o,l)},
tJ(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.qU(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aM(p))if(!(p<0))if(A.bF(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.e3(new A.O(B.bi,t.nw.a(new A.jV(r)),t.na),t.kM)
k=A.e3(new A.O(B.er,t.bQ.a(new A.jW(q)),t.cB),t.nq)
m=o==null
j=m?h:A.e3(new A.O(B.e3,t.hg.a(new A.jX(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.ha(s,l,k,p,j,n)},
aZ:function aZ(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c0:function c0(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function n_(){},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
n5:function n5(){},
b5:function b5(a){this.a=a},
iP:function iP(a){this.a=a},
iO:function iO(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
oC(){var s=0,r=A.bc(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$oC=A.bd(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:c2=v.G
c3=A.i(A.f(c2.document).getElementById("game"))
if(c3==null){s=1
break}$.H.b=c3
$.pD=A.i(A.f(c2.document).getElementById("fps"))
$.bC.b=$.tx().bC(A.mV().gbz().h(0,"renderer"))
A.wC()
a6=$.H.j()
a7=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
a6.width=a7
a7=$.H.j()
a6=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a7.height=a6
n=A.i(c3.getContext("webgl2"))
if(n==null){$.bC.b=new A.dS(B.Z,$.bC.j().b,!0,"webgl2 unavailable")
h=B.ad.k_($.bC.j())
h.aF()
$.co.b=h
A.rN()
A.cS("no-webgl2")
c2=A.i(A.f(c2.document).getElementById("credits"))
if(c2!=null)c2.textContent="this browser has no webgl2."
s=1
break}try{if($.bC.j().a===B.a_){a6=t.N
a8=new A.fI(n,A.a($.H.j().width),A.a($.H.j().height),A.e([],t.dg),A.x(a6,t.l0),A.e([],t.jj),A.x(a6,t.hL),A.x(a6,t.p9),A.e([],t.jU),A.x(a6,t.lu),A.x(a6,t.fP),B.dq,B.f0)}else a8=new A.ei(n,A.a($.H.j().width),A.a($.H.j().height),A.mV().gbz().h(0,"render")==="legacy",$.bC.j().c,$.bC.j().d)
m=a8
$.bG=m instanceof A.fI?m:null
$.jF=m instanceof A.ei?m:null
a6=B.ad.cV($.bC.j(),m)
a6.aF()
$.co.b=a6}catch(c5){l=A.ab(c5)
$.bC.b=new A.dS(B.Z,!0,!0,"pixeldart initialization failed")
$.jF=new A.ei(n,A.a($.H.j().width),A.a($.H.j().height),A.mV().gbz().h(0,"render")==="legacy",!0,$.bC.j().d)
a6=B.ad.cV($.bC.j(),$.jF)
a6.aF()
$.co.b=a6
$.H.j().setAttribute("data-renderer-error",A.q(l))}A.rN()
p=4
A.cS("initializing")
$.bD.b=new A.kh(new A.b(0,0,0),new A.b(0,0,1),new A.b(0,1,0),new A.b(1,0,0))
$.pL=A.aV(A.f(A.f(c2.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
a6=$.bD.j()
a6.f=$.pL?0.5:1
a6=A.f(c2.window)
a7=t.N
b0=A.f(a6.document)
b1=new A.hT(b0,A.a3(a7),A.a3(a7))
a6.addEventListener("keydown",A.am(b1.gj1()))
a6.addEventListener("keyup",A.am(b1.gj3()))
a6.addEventListener("mousemove",A.am(b1.gj7()))
b0.addEventListener("pointerlockchange",A.am(b1.gj5()))
$.bs.b=b1
$.rm.b=new A.hR(A.e([],t.oX),t.lv)
b1=$.H.j()
a6=A.a(A.f(c2.window).innerWidth)>0?A.a(A.f(c2.window).innerWidth):800
b1.width=a6
a6=$.H.j()
b0=A.a(A.f(c2.window).innerHeight)>0?A.a(A.f(c2.window).innerHeight):600
a6.height=b0
A.cS("renderer")
if($.bC.j().a===B.Z){a6=$.jF
if(a6==null)a6=null
else{a6=a6.r
a6===$&&A.j()}$.ey=a6
if(a6==null){h=A.l("legacy runtime did not initialize its renderer")
throw A.c(h)}}A.cS("text")
a6=$.jT()
s=7
return A.af(a6.bx(),$async$oC)
case 7:k=a6.lg()
j=A.vi(k)
if(!(j instanceof A.iS)){i=t.cq.a(j).a
h=i.b
throw A.c("Failed to build visitors: "+h)}$.aC.b=j.a
$.jz.b=A.tK(k)
h=A.x(a7,t.h)
for(b0=t.j,b2=0;b2<5;++b2){g=B.t[b2]
b1=A.F(g)
b3=a6.c
b3===$&&A.j()
b4=b3.h(0,b1)
b1=b0.b(b4)?A.ax(b4,!0,a7):B.l
J.bR(h,g,b1)}f=A.vj(h)
$.px.b=new A.kg(B.cD)
e=$.px.j().kU(new A.oD(f))
if(e.a==null){h=B.aT.ai(2147483647)
if(!isFinite(480))A.k(A.aE(480,"daySeconds","must be finite and > 0"))
b5=new A.hI(1,480)
b5.b=10
b6=A.qr(f)
h=A.qh(42,1+h,A.qj(42),b5,b6,A.qd(6,16,b6,null,6,B.ec,b5),new A.hz(0,0,0,!1))}else{h=e.a
h.toString
h=A.qi(h,f)}$.a_.b=h
$.co.j().aB(A.pb($.a_.j().gdJ()))
if(e.b!=null){h=e.b
h.toString
A.ez(h)}h=$.aC.j()
a6=A.xF($.a_.j().b,A.xG(k.b))
h.si3(A.lG(a6,A.N(a6).c))
A.cS("house")
$.a2.b=$.a_.j().c
a6=$.bG
if(a6!=null)a6.jH($.a2.j())
$.dE.b=$.a_.j().d
h=new A.b(5.5,1.65,3.5)
$.pT=$.pK=$.pR=h
d=h.a5(0,new A.b(0,1.3499999999999999,0))
$.fZ.b=new A.hl(d,J.q3(d,new A.b(0,1.2000000000000002,0)))
$.et.b=new A.kB()
$.b7.b=A.qF()
$.aW="hall"
h=e.a
c=A.uJ(h==null?null:h.c.h(0,"player"))
if(c!=null&&c.kx($.a2.j())){h=c.b
$.pT=$.pK=$.pR=h
$.c3=c.c
$.dF=c.d
$.aW=c.a
b=h.a5(0,new A.b(0,1.3499999999999999,0))
h=$.fZ.j()
h.sjI(b)
h.b=J.q3(b,new A.b(0,1.2000000000000002,0))
h=$.fZ.j()
a6=$.a2.j()
b1=c.e
b3=c.f
h.l5($.aW,$.eF(),a6,b3,b1)
A.ez("restored position")}h=$.a_.j().e
a6=$.dE.j()
$.a_.j()
$.jB.b=new A.lj(h,a6)
a6=A.f(c2.document)
h=$.a_.j().e
b1=$.dE.j()
b3=$.jB.j()
b7=A.f(a6.createElement("div"))
b3=new A.lp(h,b1,b3,a6,b7)
b3.bE(a6)
A.f(b7.appendChild(A.W(a6,"div","journal-title","The Journal")))
b8=A.W(a6,"div","journal-pages",null)
b1=A.W(a6,"div","page page-left",null)
b3.y!==$&&A.y()
b3.y=b1
h=A.W(a6,"div","page page-right",null)
b3.z!==$&&A.y()
b3.z=h
A.f(b8.appendChild(b1))
A.f(b8.appendChild(h))
A.f(b7.appendChild(b8))
A.f(b7.appendChild(b3.it()))
b9=A.W(a6,"div","tape-roll",null)
A.f(b9.style).setProperty("width","8rem")
h=A.W(a6,"div","tape-fill",null)
b3.as!==$&&A.y()
b3.as=h
A.f(b9.appendChild(h))
A.f(b7.appendChild(b9))
c0=A.W(a6,"div","consult",null)
A.f(c0.appendChild(A.W(a6,"div","consult-label","Cite an entry")))
h=A.W(a6,"div","entry-picker",null)
b3.at!==$&&A.y()
b3.at=h
b1=A.W(a6,"div","consult-result",null)
b3.ax!==$&&A.y()
b3.ax=b1
A.f(c0.appendChild(h))
A.f(c0.appendChild(b1))
A.f(b7.appendChild(c0))
c1=A.i(a6.documentElement)
if(t.m.b(c1)){A.f(c1.style).setProperty("--shake-max-deg","3deg")
A.f(c1.style).setProperty("--shake-max-px","2px")}$.eu.b=b3
$.eu.j().scd(new A.oE())
h=A.f(c2.document)
a6=A.W(h,"div","prompt",null)
A.f(a6.style).setProperty("transition-duration","0.3s")
A.f(A.i(h.body).appendChild(a6))
$.rn.b=new A.m6(a6)
a6=A.f(c2.document)
h=A.W(a6,"div","broadcast",null)
A.f(A.i(a6.body).appendChild(h))
$.rl.b=new A.kf(h)
h=A.f(c2.document)
a6=A.W(h,"div","ambient-notice",null)
A.f(A.i(h.body).appendChild(a6))
$.pv.b=new A.k0(a6)
a6=A.u1(A.f(c2.document))
a6.skL(A.xX())
a6.skN(A.xZ())
a6.skM(A.xY())
$.aB.b=a6
a6=e.a
a=A.vg(a6==null?null:a6.c.h(0,"visitors"))
if(a!=null&&$.aC.j().l4(a))A.x0()
h=$.jz.j()
a6=e.a
h.l6(a6==null?null:a6.c.h(0,"ambient"))
h=e.a
a0=h==null?null:h.c.h(0,"unverifiables")
if(b0.b(a0))for(h=J.K(a0);h.m();){a1=h.gp()
if(A.aM(a1))$.om.k(0,a1)}h=A.v2(A.f(c2.document))
h.skP(new A.oF())
h.scd(new A.oI())
$.jC.b=h
h=A.un(A.f(c2.document))
h.scd(new A.oJ())
$.jA.b=h
h=A.ub(A.f(c2.document))
h.scd(new A.oK())
h.skO(new A.oL())
$.pw.b=h
h=e.a
a2=A.ud(h==null?null:h.c.h(0,"ending"))
if(a2!=null)A.rM(a2)
a3=$.ey
if(a3!=null){A.cS("world")
h=$.a2.j()
a6=a3
a7=new A.ms(h,a6,A.x(a7,t.J))
a7.ij(h,a6)
$.nU=a7}h=B.b.v(A.F(A.f(A.f(c2.window).location).search),"shaders=live")
$.rY=h
if(h){h=$.ey
if(h!=null)h.b5()}A.rP()
A.f(c2.window).addEventListener("resize",A.am(new A.oM()))
A.f(c2.window).addEventListener("keydown",A.am(new A.oN()))
A.f(c2.window).addEventListener("keyup",A.am(new A.oO()))
A.f(c2.window).addEventListener("keydown",A.am(new A.oP()))
A.f(c2.window).addEventListener("click",A.am(new A.oG()))
$.H.j().addEventListener("click",A.am(new A.oH()))
A.ew()
A.cS("raf")
A.a(A.f(c2.window).requestAnimationFrame(A.am(A.t6())))
p=2
s=6
break
case 4:p=3
c4=o.pop()
a4=A.ab(c4)
a5=A.c5(c4)
A.oh(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$oC,r)},
wC(){var s=v.G
A.f(s.window).addEventListener("error",A.am(new A.od()))
A.f(s.window).addEventListener("unhandledrejection",A.am(new A.oe()))},
cS(a){if($.rt===a)return
$.rt=a
$.H.j().setAttribute("data-boot-phase",a)},
rN(){var s,r,q=$.co.j().gb0(),p=$.H.j(),o=A.mV().gbz().h(0,"renderer")
if(o==null)o="legacy"
p.setAttribute("data-renderer-request",o)
p.setAttribute("data-renderer-backend",q.a)
p.setAttribute("data-renderer-profile",q.b)
p.setAttribute("data-renderer-fallback",String(q.x))
p.setAttribute("data-renderer-diagnostics",B.q.b1(q.C(),null))
p=$.bG
s=p==null?null:p.x
if(s!=null)$.H.j().setAttribute("data-renderer-profile-fallback",s)
p=$.jF
r=p==null?null:p.y
if(r!=null)$.H.j().setAttribute("data-renderer-frame-submits",A.q(r))},
pP(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.b7.j().a!==B.x){A.ez("save unavailable during rupture")
return}try{r=$.px.j()
q=$.a_.j()
p=t.N
o=t.z
s=A.x(p,o)
n=$.aW
m=$.eF()
l=$.c3
k=$.dF
j=$.fZ.j().d
j=j==null?null:j.a.a
i=$.fZ.j().d
J.bR(s,"player",new A.ij(n,m,l,k,j,i==null?null:i.b).C())
n=$.aC.j()
m=A.pe(n.b,p)
l=A.pe(n.c,t.g)
n=n.e
J.bR(s,"visitors",new A.iT(m,l,n==null?null:new A.ha(n.a,n.b,n.d,n.f,n.e,n.r)).C())
n=$.jz.j().b
n=A.Q(n,A.o(n).c)
B.a.X(n)
J.bR(s,"ambient",n)
n=A.Q($.om,A.o($.om).c)
B.a.X(n)
J.bR(s,"unverifiables",n)
n=$.pC
if(n!=null)J.bR(s,"ending",A.S(["kind",n.a.b],p,p))
s=t.P.a(s)
n=q.a
m=q.b
l=A.ql(q.c).C()
k=q.d
r.li(A.qG(s,A.S(["houseSeed",n,"runSeed",m,"house",l,"time",A.S(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.C(),"journal",q.e.C(),"difficulty",q.r.C()],p,o),2))
A.ez(a)}catch(h){A.ez("save failed")}},
ez(a){var s=A.i(A.f(v.G.document).getElementById("save-status"))
if(s==null)return
s.textContent=a
s.className="visible"
A.ul(B.cJ,new A.ok(s),t.H)},
oh(a,b){var s,r,q,p
A.cS("error")
s=A.q(a)
r=A.y8(s,"\n"," ")
s=$.pD
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.i(A.f(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.q(a):A.q(a)+"\n"+b.n(0)
$.H.j().setAttribute("data-boot-error",p)
A.f(s.console).error(p)},
rp(){if($.py)return
$.py=!0
var s=$.h0
if(s!=null)s.hC()
B.a.k($.cR,"arm")},
ew(){var s=0,r=A.bc(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$ew=A.bd(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.af(A.h4(),$async$ew)
case 2:o=null
q=4
s=7
return A.af(A.aO(A.f(A.f(v.G.window).fetch("res/manifest.json")),t.m),$async$ew)
case 7:n=b
i=A
s=8
return A.af(A.aO(A.f(n.json()),t.X),$async$ew)
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
return A.af(A.kR(A.e([A.og(o),A.oc(o)],t.iw),t.H),$async$ew)
case 9:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$ew,r)},
h4(){var s=0,r=A.bc(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$h4=A.bd(function(a,a0){if(a===1){o.push(a0)
s=p}for(;;)switch(s){case 0:c=null
i=v.G,h=t.m,g=t.N,f=0
case 3:if(!(f<2)){s=5
break}n=B.ea[f]
p=7
s=10
return A.af(A.aO(A.f(A.f(i.window).fetch(n)),h),$async$h4)
case 10:m=a0
s=11
return A.af(A.aO(A.f(m.text()),g),$async$h4)
case 11:l=a0
k=A.tL(B.q.bY(l,null))
e=$.a2.b
if(e===$.a2)A.k(A.ak(""))
k.dT(e)
e=$.H.b
if(e===$.H)A.k(A.ak(""))
e.setAttribute("data-house-manifest","validated")
e=$.H.b
if(e===$.H)A.k(A.ak(""))
e.setAttribute("data-house-manifest-source",n)
s=12
return A.af(A.jH(),$async$h4)
case 12:s=1
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
case 5:$.H.j().setAttribute("data-house-manifest","unavailable")
A.f(i.console).warn("authored house manifest unavailable: "+A.q(c))
case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$h4,r)},
jH(){var s=0,r=A.bc(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$jH=A.bd(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:b1=null
i=t.n8,h=t.gB,g=t.j,f=t.P,e=v.G,d=t.m,c=t.N,b=t.X,a=0
case 3:if(!(a<2)){s=5
break}n=B.e5[a]
p=7
s=10
return A.af(A.aO(A.f(A.f(e.window).fetch(n)),d),$async$jH)
case 10:m=b4
s=11
return A.af(A.aO(A.f(m.text()),c),$async$jH)
case 11:l=b4
a0=B.q.bY(l,null)
a0=f.b(a0)?a0:A.cq("house inventory is not an object")
a1=a0.h(0,"modelScale")
a2=typeof a1=="number"&&isFinite(a1)?a1:A.cq("modelScale is not finite")
a1=a0.h(0,"schemaVersion")
a3=A.aM(a1)?a1:A.cq("schemaVersion is not an integer")
a1=a0.h(0,"sourceRef")
a4=typeof a1=="string"&&a1.length!==0?a1:A.cq("sourceRef is not a string")
a1=a0.h(0,"assets")
a5=g.b(a1)?A.ax(a1,!0,b):A.cq("assets is not a list")
a6=A.N(a5)
a7=a6.i("V<1,bS>")
a5=A.Q(new A.V(a5,a6.i("bS(1)").a(A.xS()),a7),a7.i("a1.E"))
a5.$flags=1
a1=a0.h(0,"placements")
a6=g.b(a1)?A.ax(a1,!0,b):A.cq("placements is not a list")
a7=A.N(a6)
a8=a7.i("V<1,cz>")
a6=A.Q(new A.V(a6,a7.i("cz(1)").a(A.xT()),a8),a8.i("a1.E"))
a6.$flags=1
k=new A.hP(a3,a4,a2,a5,a6)
a3=$.a2.b
if(a3===$.a2)A.k(A.ak(""))
k.dT(a3)
if($.bG!=null){a9=A.ax(i.a(k).e,!1,h)
a9.$flags=3}a3=$.H.b
if(a3===$.H)A.k(A.ak(""))
a3.setAttribute("data-house-inventory","validated")
a3=$.H.b
if(a3===$.H)A.k(A.ak(""))
a3.setAttribute("data-house-inventory-source",n)
a3=$.H.b
if(a3===$.H)A.k(A.ak(""))
a3.setAttribute("data-house-inventory-count",""+k.e.length)
s=1
break
p=2
s=9
break
case 7:p=6
b2=o.pop()
j=A.ab(b2)
b1=j
s=9
break
case 6:s=2
break
case 9:case 4:++a
s=3
break
case 5:$.H.j().setAttribute("data-house-inventory","unavailable")
A.f(e.console).warn("authored house inventory unavailable: "+A.q(b1))
case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$jH,r)},
pB(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.K(t.h.b(s)?s:new A.bK(s,A.N(s).i("bK<1,m>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.l(0,c+r,"res/"+A.F(q))}},
oc(a){var s=0,r=A.bc(t.H),q,p,o,n,m
var $async$oc=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.x(n,n)
n=a==null
A.pB(A.i(n?null:a.sfx),m,"")
A.pB(A.i(n?null:a.ir),m,"ir-")
q=A.i(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.l(0,"music","res/"+A.F(p))
s=2
return A.af(A.k3(m,$.a2.j()),$async$oc)
case 2:o=c
$.h0=o
if($.py)o.hC()
return A.ba(null,r)}})
return A.bb($async$oc,r)},
og(a){var s=0,r=A.bc(t.H),q,p,o
var $async$og=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.x(p,p)
A.pB(A.i(a==null?null:a.tex),o,"")
p=$.ey
p=p==null?null:p.am(o)
if(p==null)p=A.p_(t.H)
q=$.bG
q=q==null?null:q.am(o)
s=2
return A.af(A.kR(A.e([p,q==null?A.p_(t.H):q],t.iw),t.H),$async$og)
case 2:return A.ba(null,r)}})
return A.bb($async$og,r)},
rP(){var s,r,q=v.G,p=A.a(A.f(q.window).innerWidth),o=A.a(A.f(q.window).innerHeight)
q=$.H.j()
s=p>0?p:800
q.width=s
s=$.H.j()
q=o>0?o:600
s.height=q
q=$.ey
if(q!=null)q.aw(A.a($.H.j().width),A.a($.H.j().height))
$.co.j().aw(A.a($.H.j().width),A.a($.H.j().height))
q=$.bG
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.H.j().setAttribute("data-renderer-surface",r)},
wY(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
A.cp(b9)
try{s=b9
if(!$.rC){$.pI=s
$.rC=!0}g=s
f=$.pI
if(typeof g!=="number")return g.a5()
r=(g-f)/1000
$.pI=s
g=r
if(typeof g!=="number")return g.cn()
if(g<0)r=0
g=r
if(typeof g!=="number")return g.a4()
if(g>0.25)r=0.25
A.xi(r)
if(!$.pJ){g=$.nN
f=r
if(typeof f!=="number")return A.jO(f)
f=$.nN=g+f
q=0
g=t.mv
for(;;){if(f>=0.008333333333333333){e=q
if(typeof e!=="number")return e.cn()
e=e<10}else e=!1
if(!e)break
$.pK=$.eF()
f=$.a_.b
if(f===$.a_)A.k(A.ak(""))
f.jC(0.008333333333333333)
A.xl()
f=$.aC.b
if(f===$.aC)A.k(A.ak(""))
e=$.a_.b
if(e===$.a_)A.k(A.ak(""))
f.f=e.r.c>=0.5
f=f.d
d=A.ax(f,!1,g)
d.$flags=3
c=d
B.a.J(f)
if(c.length!==0){f=$.a_.b
if(f===$.a_)A.k(A.ak(""))
f.kW(c)}A.xh()
A.xk()
A.xj()
A.xg(0.008333333333333333)
f=$.et.b
if(f===$.et)A.k(A.ak(""))
if(f.a!=null)if((f.b-=0.008333333333333333)<=0)f.a=null
f=$.b7.b
if(f===$.b7)A.k(A.ak(""))
p=f.a!==B.x
e=$.a2.b
if(e===$.a2)A.k(A.ak(""))
f.jD(0.008333333333333333,e)
if(p){f=$.b7.b
if(f===$.b7)A.k(A.ak(""))
f=f.e}else f=!1
if(f)A.rQ(!0)
f=$.nN-0.008333333333333333
$.nN=f
e=q
if(typeof e!=="number")return e.U()
q=e+1}o=B.d.a_(f/0.008333333333333333,0,1)
$.pT=A.qT($.ty(),$.eF(),o)
n=$.h0
if(n!=null){for(g=$.cR.length,b=0;b<$.cR.length;$.cR.length===g||(0,A.r)($.cR),++b){m=$.cR[b]
A.wo(n,m)}B.a.J($.cR)}}l=$.ey
if(l!=null){$.bD.j().dE($.jS(),$.c3,$.dF)
g=$.b8===$.eu.j()?1:0
l.c0=g
$.rI=r
$.co.j().aB(A.pb($.a_.j().gdJ()))}else if($.bC.j().a===B.a_){$.bD.j().dE($.jS(),$.c3,$.dF)
g=$.bG
if(g!=null){f=$.bD.j()
e=f.a
a=new A.B(e.a,e.b,e.c)
e=f.b
a0=new A.B(e.a,e.b,e.c)
f=f.c
a1=g.b/g.c
a2=A.qy(a,a0,new A.B(f.a,f.b,f.c))
a3=A.p7(a1,60,1.0471975511965976,0.1)
g.dy=new A.dU(a2,a3,a3.V(0,a2),a,a0,0.1,60,a1)}g=$.bG
if(g!=null)g.hT($.a2.j(),$.aW)
g=$.bG
if(g!=null)g.hP($.a2.j(),$.aW,$.jS(),$.dE.j().gbc(),Math.sin(3.141592653589793*$.dE.j().gbc()))
if($.rH!==$.b7.j().a){$.rH=$.b7.j().a
$.pM=$.pM+1}g=$.bG
if(g!=null){f=s
if(typeof f!=="number")return f.lm()
f/=1000
e=$.pM
a4=A.a(Math.max(0,$.a_.j().b))
if(!isFinite(f)||f<0)A.k(A.aE(f,"timeSeconds",null))
if(a4<0)A.k(A.w("frame clock seeds must be non-negative",null))
g.id=f
g.k1=e
g.k2=a4}g=$.bG
if(g!=null){f=$.b7.j()
e=$.pL
a5=f.a
a6=f.ge1()
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
g.fx=new A.il(a4,b0,f,b1,b2,b3,b4,b5,b6,b7,a9?a7:0,e)}$.co.j().aB(A.pb($.a_.j().gdJ()))
k=$.bG
if(k!=null){j=k.gkq()
if(j!=null){$.H.j().setAttribute("data-renderer-frame-stats",j)
g=$.H.j()
f=k.gkp()?"ok":"exceeded"
g.setAttribute("data-renderer-budget",f)}}}A.cS("running")
g=$.bs.j()
g.e=g.d=0
g.c.J(0)
A.a(A.f(v.G.window).requestAnimationFrame(A.am(A.t6())))}catch(b8){i=A.ab(b8)
h=A.c5(b8)
A.oh(i,h)}},
wo(a,b){switch(b){case"arm":a.kR("confirm")
break
case"ambient-winnow":a.dH("winnow",0.28)
break
case"ambient-gate":a.dH("gate",0.22)
break}},
xi(a){var s=$.pD
if(s==null)return
s.textContent=""+B.d.aH(a>0?1/a:0)+" fps"},
xg(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.rT||$.b8!=null||$.aB.j().z){$.jR().a=new A.b(0,0,0)
return}s=$.bs.j().b
r=s.v(0,"KeyA")?-1:0
if(s.v(0,"KeyD"))++r
q=s.v(0,"KeyW")?1:0
p=new A.b(r,0,s.v(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.gac():p
n=$.bs.j().d
m=$.bs.j().e
$.c3=$.c3+n*0.0028
s=$.dF-m*0.0028
$.dF=s
$.dF=B.d.a_(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.b(s*Math.cos($.c3)+l*Math.sin($.c3),0,l*Math.cos($.c3)-s*Math.sin($.c3)).gac().V(0,2)
s=$.jR()
if(!isFinite(a1)||a1<0)A.k(A.aE(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.k(A.aE(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.U(0,k.a5(0,i).V(0,1-l))
s.a=l
h=$.fZ.j().kJ($.a2.j(),$.aW,$.eF(),l.V(0,a1))
$.pR=h.a
if($.b7.j().a!==B.aA&&$.b7.j().a!==B.H)$.aW=h.b
$.bD.j().dE($.eF(),$.c3,$.dF)
s=$.bD.j()
l=$.a2.j()
g=A.y3(s,$.aW,l)
$.rn.j().hV(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.q0($.bD.j(),$.a2.j(),$.aW)
break
case 1:e=A.ta($.bD.j(),$.a2.j(),$.aW)
break
case 2:d=A.tb($.bD.j(),$.a2.j(),$.aW)
break
case 3:break}s=$.rl.j()
c=$.jT().hK($.a_.j().gaJ().a)
l=c==null?a0:c.h(0,"status")
s.dQ(l,$.aW==="living-room")
if($.bs.j().c.aj(0,"KeyE")){s=$.a_.j().gaJ()
l=e==null
i=l?a0:e.a
b=B.a.ag($.aC.j().eZ(21),$.aC.j().gky())
if(s.a===21&&i==="front-door"&&b){s=$.b7.j()
$.a2.j()
s.i4(B.cC,A.ap(s.c,t.N))
B.a.k($.cR,"collapse")
A.ez("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.a_.j().i2(1,1)){f.d=!0
s=$.et.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ay){e.ax=!e.ax
s=$.h0
if(s!=null)s.cO()}else if(d!=null)if(d.w){s=$.a_.j()
if(s.f.cq(1))d.w=!1}else d.w=!0}s=$.et.j()
if(s.a!=null&&s.b>0){a=$.et.j().a
if(a!=null&&A.q0($.bD.j(),$.a2.j(),$.aW)!==a){s=$.et.j()
s.a=null
s.b=0}}},
xl(){var s,r,q,p,o,n,m,l,k,j=null
if($.aB.j().z||$.b8!=null||$.aC.j().e!=null)return
s=$.a_.j().gaJ()
for(r=$.aC.j().eZ(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aC.b
if(m===$.aC)A.k(A.ak(""))
if(m.c.v(0,n)||p<n.c)continue
r=$.aC.b
if(r===$.aC)A.k(A.ak(""))
l=r.jJ(n)
if(!(l instanceof A.iP))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.d(r,q)
k=r[q].b}else k=j
if(k==null)return
A.qo(A.f(v.G.document),"exitPointerLock",j,j,j,j)
$.jR().a=new A.b(0,0,0)
r=$.aB.b
if(r===$.aB)A.k(A.ak(""))
r.e_(n.a,k)
return}},
x0(){var s=$.aC.j().e,r=s==null,q=r?null:s.gbX()
if(r||q==null)return
$.aB.j().e_(s.a.a,q)
if(s.d!==B.J){$.aB.j().co(q)
A.pQ()}A.ez("restored visitor")},
xh(){var s,r,q,p,o=$.a_.j().gaJ(),n=$.jz.j().ka(o.a,o.b)
if(n.length===0)return
s=B.a.gaS(n)
$.jz.j().b.k(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.pv.j().dZ(q,s.e)
p=A.xq(r)
if(p!=null)B.a.k($.cR,"ambient-"+p)},
xk(){var s,r,q,p,o=$.a_.j().gaJ()
if(o.b<20)return
s=o.a
if(!$.om.k(0,s))return
r=$.jT().f
r===$&&A.j()
q=r.h(0,B.c.n(s))
r=t.j.b(q)?A.ax(q,!0,t.N):B.l
p=A.y1(r,$.a_.j().b,s)
if(p!=null)$.pv.j().dZ("noticed",p)},
rQ(a){var s,r,q,p,o
if($.pC!=null)return
s=$.a_.j().gaJ()
r=$.a_.j().r.c
q=$.a_.j().e.b
p=A.o(q).i("aR<2>")
o=A.uc(new A.kx(s.a,1-r,new A.O(new A.aR(q,p),p.i("t(n.E)").a(new A.oi()),p.i("O<n.E>")).gq(0),$.a_.j().r.d,a))
if(o==null)return
A.rM(o)
A.pP("ending recorded")},
rM(a){var s,r,q
$.pC=a
$.rT=!0
$.jR().a=new A.b(0,0,0)
$.b8=$.pw.j()
s=$.pw.j()
r=$.jT().w
r===$&&A.j()
q=r.h(0,a.a.b)
s.hX(a,t.j.b(q)?A.ax(q,!0,t.N):B.l)},
wi(a){var s,r,q,p,o
A:{if("open"===a){s=B.R
break A}if("chain"===a){s=B.aW
break A}if("through-door"===a){s=B.aX
break A}if("letterbox"===a){s=B.aY
break A}s=B.L
break A}r=$.aC.j().jT(s)
if(s===B.R){q=$.a2.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.h0
if(p!=null)p.cO()}}if(!(r instanceof A.iO)||s===B.L){$.aB.j().c7()
$.bs.j().aG($.H.j())
return}o=r.a.gbX()
if(o==null){A.pA()
$.aB.j().c7()
$.bs.j().aG($.H.j())
return}$.aB.j().co(o)
A.pQ()},
wl(){var s,r=$.aC.j().jE()
if(!(r instanceof A.fp)||r.b){A.pA()
$.aB.j().c7()
$.bs.j().aG($.H.j())
return}s=r.a.gbX()
if(s==null){A.pA()
$.aB.j().c7()
$.bs.j().aG($.H.j())
return}$.aB.j().co(s)
A.pQ()},
pQ(){var s,r,q,p,o=$.aB.j(),n=A.f(v.G.document),m=A.e([],t.fR)
for(s=$.jB.j().dX(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.en(p.a,B.a.gO(p.c).n(0)))}o.hW(n,m)},
wj(a){var s,r,q,p=$.aC.j().jU(a,!0,$.jB.j())
if(p==null)return
s=$.jB.j().k0(p,B.dQ)
r=$.aB.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.j()
r.textContent=q},
pA(){var s,r=$.a2.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.h0
if(s!=null)s.cO()}},
xj(){var s,r,q,p,o,n,m,l,k
for(s=$.a2.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.b7.b
if(k===$.b7)A.k(A.ak(""))
if(B.a.v(k.d,n+m)){l.d=!1
continue}}}},
fI:function fI(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ay=_.ax=null
_.ch=i
_.cx=j
_.cy=k
_.dy=_.dx=_.db=null
_.fr=l
_.fx=m
_.fy=null
_.k3=_.k2=_.k1=_.id=_.go=0
_.k4=!1
_.ok=0},
nA:function nA(a){this.a=a},
nB:function nB(a){this.a=a},
ei:function ei(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.x=_.w=!1
_.y=0},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oD:function oD(a){this.a=a},
oE:function oE(){},
oF:function oF(){},
oI:function oI(){},
oJ:function oJ(){},
oK:function oK(){},
oL:function oL(){},
oM:function oM(){},
oN:function oN(){},
oO:function oO(){},
oP:function oP(){},
oG:function oG(){},
oH:function oH(){},
od:function od(){},
oe:function oe(){},
ok:function ok(a){this.a=a},
oi:function oi(){},
qo(a,b,c,d,e,f){var s=a[b]()
return s},
qp(a,b,c){var s=null
return c.a(A.qo(a,b,s,s,s,s))},
u_(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
tZ(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
t5(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
oT(a,b){var s=B.d.c6(a),r=A.t5(s,b),q=A.t5(s+1,b),p=B.d.a_(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
xq(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
yb(a){var s,r,q,p,o,n,m,l
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
return new A.bV(B.af,p,new Uint16Array(A.a0(a.b)),new A.h9(new A.B(s.a,s.b,s.c),new A.B(s.d,s.e,s.f)))},
xD(a){var s,r,q,p,o,n,m,l=B.q.bY(a,null),k=t.f
if(!k.b(l))throw A.c(B.dh)
s=t.N
r=t.z
q=A.aS(l,s,r)
p=A.x(s,t.P)
for(o=0;o<11;++o){n=B.e4[o]
m=q.h(0,n)
if(m==null)p.l(0,n,A.x(s,r))
else if(k.b(m))p.l(0,n,A.aS(m,s,r))
else throw A.c(A.ag('text.json section "'+n+'" must be an object',null,null))}return p},
y1(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gb9(a)
s=new A.ej()
s.cr((b^274953^c)>>>0)
r=s.ai(a.length)
if(!(r>=0&&r<a.length))return A.d(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.p1.prototype={}
J.hV.prototype={
S(a,b){return a===b},
gE(a){return A.fa(a)},
n(a){return"Instance of '"+A.io(a)+"'"},
gM(a){return A.c4(A.pF(this))}}
J.hZ.prototype={
n(a){return String(a)},
gE(a){return a?519018:218159},
gM(a){return A.c4(t.y)},
$iY:1,
$it:1}
J.eW.prototype={
S(a,b){return null==b},
n(a){return"null"},
gE(a){return 0},
$iY:1,
$iah:1}
J.eX.prototype={$iU:1}
J.cA.prototype={
gE(a){return 0},
gM(a){return B.fr},
n(a){return String(a)}}
J.ii.prototype={}
J.dq.prototype={}
J.ca.prototype={
n(a){var s=a[$.th()]
if(s==null)s=a[$.eE()]
if(s==null)return this.i6(a)
return"JavaScript function for "+J.dM(s)},
$id2:1}
J.e4.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.e5.prototype={
gE(a){return 0},
n(a){return String(a)}}
J.p.prototype={
bU(a,b){return new A.bK(a,A.N(a).i("@<1>").D(b).i("bK<1,2>"))},
k(a,b){A.N(a).c.a(b)
a.$flags&1&&A.bf(a,29)
a.push(b)},
aj(a,b){var s
a.$flags&1&&A.bf(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a6(a[s],b)){a.splice(s,1)
return!0}return!1},
I(a,b){var s
A.N(a).i("n<1>").a(b)
a.$flags&1&&A.bf(a,"addAll",2)
if(Array.isArray(b)){this.iq(a,b)
return}for(s=J.K(b);s.m();)a.push(s.gp())},
iq(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.ao(a))
for(r=0;r<s;++r)a.push(b[r])},
J(a){a.$flags&1&&A.bf(a,"clear","clear")
a.length=0},
by(a,b,c){var s=A.N(a)
return new A.V(a,s.D(c).i("1(2)").a(b),s.i("@<1>").D(c).i("V<1,2>"))},
aU(a,b){var s,r=A.bT(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.l(r,s,A.q(a[s]))
return r.join(b)},
bs(a,b,c,d){var s,r,q
d.a(b)
A.N(a).D(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.ao(a))}return r},
dA(a,b,c){var s,r,q,p=A.N(a)
p.i("t(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.ao(a))}p=c.$0()
return p},
P(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
gaS(a){if(a.length>0)return a[0]
throw A.c(A.hW())},
gO(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.hW())},
gb9(a){var s=a.length
if(s===1){if(0>=s)return A.d(a,0)
return a[0]}if(s===0)throw A.c(A.hW())
throw A.c(A.uu())},
a1(a,b){var s,r
A.N(a).i("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.ao(a))}return!1},
ag(a,b){var s,r
A.N(a).i("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.ao(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.N(a)
n.i("h(1,1)?").a(b)
a.$flags&2&&A.bf(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.wH()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.a4()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eC(b,2))
if(p>0)this.jh(a,p)},
X(a){return this.Y(a,null)},
jh(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cp(a,b){var s,r,q,p
a.$flags&2&&A.bf(a,"shuffle")
s=a.length
while(s>1){r=b.ai(s);--s
q=a.length
if(!(s<q))return A.d(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.d(a,r)
a[s]=a[r]
a[r]=p}},
c8(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a6(a[s],b))return s}return-1},
v(a,b){var s
for(s=0;s<a.length;++s)if(J.a6(a[s],b))return!0
return!1},
gG(a){return a.length===0},
gL(a){return a.length!==0},
n(a){return A.p0(a,"[","]")},
gu(a){return new J.cV(a,a.length,A.N(a).i("cV<1>"))},
gE(a){return A.fa(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.bf(a,"set length","change the length of")
if(b<0)throw A.c(A.aI(b,0,null,"newLength",null))
if(b>a.length)A.N(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.c(A.ot(a,b))
return a[b]},
l(a,b,c){A.N(a).c.a(c)
a.$flags&2&&A.bf(a)
if(!(b>=0&&b<a.length))throw A.c(A.ot(a,b))
a[b]=c},
dV(a,b){return new A.bP(a,b.i("bP<0>"))},
hm(a,b){var s
A.N(a).i("t(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gM(a){return A.c4(A.N(a))},
$iC:1,
$in:1,
$iE:1}
J.hX.prototype={
ld(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.io(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ln.prototype={}
J.cV.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia9:1}
J.d8.prototype={
F(a,b){var s
A.cp(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gca(b)
if(this.gca(a)===s)return 0
if(this.gca(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gca(a){return a===0?1/a<0:a<0},
aI(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.at(""+a+".toInt()"))},
jQ(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.at(""+a+".ceil()"))},
c6(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.at(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.at(""+a+".round()"))},
a_(a,b,c){if(this.F(b,c)>0)throw A.c(A.pU(b))
if(this.F(a,b)<0)return b
if(this.F(a,c)>0)return c
return a},
ci(a,b){var s
if(b>20)throw A.c(A.aI(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gca(a))return"-"+s
return s},
lb(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.c(A.aI(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.d(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.k(A.at("Unexpected toString result: "+s))
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
i8(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eP(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.eP(a,b)},
eP(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.at("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cM(a,b){var s
if(a>0)s=this.bR(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
jl(a,b){if(0>b)throw A.c(A.pU(b))
return this.bR(a,b)},
bR(a,b){return b>31?0:a>>>b},
gM(a){return A.c4(t.o)},
$iaw:1,
$iu:1,
$iaD:1}
J.eV.prototype={
gM(a){return A.c4(t.S)},
$iY:1,
$ih:1}
J.i_.prototype={
gM(a){return A.c4(t.i)},
$iY:1}
J.d9.prototype={
b6(a,b,c,d){var s=A.fb(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
Z(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aI(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
W(a,b){return this.Z(a,b,0)},
B(a,b,c){return a.substring(b,A.fb(b,c,a.length))},
bD(a,b){return this.B(a,b,null)},
lc(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.uy(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.uz(p,r):o
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
kQ(a,b,c){var s=b-a.length
if(s<=0)return a
return this.V(c,s)+a},
c9(a,b,c){var s
if(c<0||c>a.length)throw A.c(A.aI(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
c8(a,b){return this.c9(a,b,0)},
v(a,b){return A.y7(a,b,0)},
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
gM(a){return A.c4(t.N)},
gq(a){return a.length},
$iY:1,
$iaw:1,
$iqz:1,
$im:1}
A.cL.prototype={
gu(a){return new A.eH(J.K(this.gaM()),A.o(this).i("eH<1,2>"))},
gq(a){return J.aQ(this.gaM())},
gG(a){return J.q5(this.gaM())},
gL(a){return J.tF(this.gaM())},
P(a,b){return A.o(this).y[1].a(J.jU(this.gaM(),b))},
n(a){return J.dM(this.gaM())}}
A.eH.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$ia9:1}
A.cX.prototype={
gaM(){return this.a}}
A.fx.prototype={$iC:1}
A.fv.prototype={
h(a,b){return this.$ti.y[1].a(J.aP(this.a,b))},
l(a,b,c){var s=this.$ti
J.bR(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.tG(this.a,b)},
k(a,b){var s=this.$ti
J.h8(this.a,s.c.a(s.y[1].a(b)))},
Y(a,b){var s
this.$ti.i("h(2,2)?").a(b)
s=b==null?null:new A.ng(this,b)
J.tH(this.a,s)},
$iC:1,
$iE:1}
A.ng.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("h(1,1)")}}
A.bK.prototype={
bU(a,b){return new A.bK(this.a,this.$ti.i("@<1>").D(b).i("bK<1,2>"))},
gaM(){return this.a}}
A.da.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.ho.prototype={
gq(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s.charCodeAt(b)}}
A.mz.prototype={}
A.C.prototype={}
A.a1.prototype={
gu(a){var s=this
return new A.cb(s,s.gq(s),A.o(s).i("cb<a1.E>"))},
gG(a){return this.gq(this)===0},
a1(a,b){var s,r,q=this
A.o(q).i("t(a1.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.P(0,r)))return!0
if(s!==q.gq(q))throw A.c(A.ao(q))}return!1},
aU(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.P(0,0))
if(o!==p.gq(p))throw A.c(A.ao(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.P(0,q))
if(o!==p.gq(p))throw A.c(A.ao(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.P(0,q))
if(o!==p.gq(p))throw A.c(A.ao(p))}return r.charCodeAt(0)==0?r:r}},
dU(a,b){return this.i5(0,A.o(this).i("t(a1.E)").a(b))},
by(a,b,c){var s=A.o(this)
return new A.V(this,s.D(c).i("1(a1.E)").a(b),s.i("@<a1.E>").D(c).i("V<1,2>"))},
b8(a,b){var s=A.o(this).i("a1.E")
if(b)s=A.Q(this,s)
else{s=A.Q(this,s)
s.$flags=1
s=s}return s},
b7(a){return this.b8(0,!0)},
aX(a){var s,r=this,q=A.p4(A.o(r).i("a1.E"))
for(s=0;s<r.gq(r);++s)q.k(0,r.P(0,s))
return q}}
A.fl.prototype={
giO(){var s=J.aQ(this.a),r=this.c
if(r==null||r>s)return s
return r},
gjp(){var s=J.aQ(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.aQ(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
P(a,b){var s=this,r=s.gjp()+b
if(b<0||r>=s.giO())throw A.c(A.li(b,s.gq(0),s,"index"))
return J.jU(s.a,r)},
b8(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aX(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.qn(0,n):J.qm(0,n)}r=A.bT(s,m.P(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.l(r,q,m.P(n,o+q))
if(m.gq(n)<l)throw A.c(A.ao(p))}return r},
b7(a){return this.b8(0,!0)}}
A.cb.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aX(q),o=p.gq(q)
if(r.b!==o)throw A.c(A.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.P(q,s);++r.c
return!0},
$ia9:1}
A.cc.prototype={
gu(a){return new A.dc(J.K(this.a),this.b,A.o(this).i("dc<1,2>"))},
gq(a){return J.aQ(this.a)},
gG(a){return J.q5(this.a)},
P(a,b){return this.b.$1(J.jU(this.a,b))}}
A.d_.prototype={$iC:1}
A.dc.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.V.prototype={
gq(a){return J.aQ(this.a)},
P(a,b){return this.b.$1(J.jU(this.a,b))}}
A.O.prototype={
gu(a){return new A.P(J.K(this.a),this.b,this.$ti.i("P<1>"))}}
A.P.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$ia9:1}
A.bP.prototype={
gu(a){return new A.fr(J.K(this.a),this.$ti.i("fr<1>"))}}
A.fr.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$ia9:1}
A.ac.prototype={
sq(a,b){throw A.c(A.at("Cannot change the length of a fixed-length list"))},
k(a,b){A.be(a).i("ac.E").a(b)
throw A.c(A.at("Cannot add to a fixed-length list"))}}
A.c_.prototype={
l(a,b,c){A.o(this).i("c_.E").a(c)
throw A.c(A.at("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.c(A.at("Cannot change the length of an unmodifiable list"))},
k(a,b){A.o(this).i("c_.E").a(b)
throw A.c(A.at("Cannot add to an unmodifiable list"))},
Y(a,b){A.o(this).i("h(c_.E,c_.E)?").a(b)
throw A.c(A.at("Cannot modify an unmodifiable list"))}}
A.eg.prototype={}
A.fg.prototype={
gq(a){return J.aQ(this.a)},
P(a,b){var s=this.a,r=J.aX(s)
return r.P(s,r.gq(s)-1-b)}}
A.fY.prototype={}
A.en.prototype={$r:"+(1,2)",$s:1}
A.eo.prototype={$r:"+(1,2,3)",$s:2}
A.fJ.prototype={$r:"+(1,2,3,4)",$s:3}
A.eJ.prototype={}
A.dW.prototype={
gG(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
n(a){return A.p6(this)},
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
A.tV()},
gR(){return new A.c2(this.ke(),A.o(this).i("c2<L<1,2>>"))},
ke(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gR(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gN(),o=o.gu(o),n=A.o(s),m=n.y[1],n=n.i("L<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.L(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
b3(a,b,c,d){var s=A.x(c,d)
this.aa(0,new A.km(this,A.o(this).D(c).D(d).i("L<1,2>(3,4)").a(b),s))
return s},
$iR:1}
A.km.prototype={
$2(a,b){var s=A.o(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.l(0,r.a,r.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.a4.prototype={
gq(a){return this.b.length},
geq(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a0(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.a0(b))return null
return this.b[this.a[b]]},
aa(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.geq()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gN(){return new A.dA(this.geq(),this.$ti.i("dA<1>"))},
gap(){return new A.dA(this.b,this.$ti.i("dA<2>"))}}
A.dA.prototype={
gq(a){return this.a.length},
gG(a){return 0===this.a.length},
gL(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.dB(s,s.length,this.$ti.i("dB<1>"))}}
A.dB.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia9:1}
A.eQ.prototype={
bd(){var s=this,r=s.$map
if(r==null){r=new A.eY(s.$ti.i("eY<1,2>"))
A.t1(s.a,r)
s.$map=r}return r},
h(a,b){return this.bd().h(0,b)},
aa(a,b){this.$ti.i("~(1,2)").a(b)
this.bd().aa(0,b)},
gN(){var s=this.bd()
return new A.aj(s,A.o(s).i("aj<1>"))},
gap(){var s=this.bd()
return new A.aR(s,A.o(s).i("aR<2>"))},
gq(a){return this.bd().a}}
A.eK.prototype={
k(a,b){A.o(this).c.a(b)
A.tW()}}
A.c6.prototype={
gq(a){return this.b},
gG(a){return this.b===0},
gL(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.dB(s,s.length,r.$ti.i("dB<1>"))},
v(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
aX(a){return A.p5(this,this.$ti.c)}}
A.m1.prototype={
$0(){return B.d.c6(1000*this.a.now())},
$S:16}
A.fh.prototype={}
A.mS.prototype={
an(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.f6.prototype={
n(a){return"Null check operator used on a null value"}}
A.i0.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iH.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.lQ.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eO.prototype={}
A.fL.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibZ:1}
A.cu.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.tg(r==null?"unknown":r)+"'"},
gM(a){var s=A.pW(this)
return A.c4(s==null?A.be(this):s)},
$id2:1,
gll(){return this},
$C:"$1",
$R:1,
$D:null}
A.hm.prototype={$C:"$0",$R:0}
A.hn.prototype={$C:"$2",$R:2}
A.iE.prototype={}
A.iB.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.tg(s)+"'"}}
A.dT.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dT))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.jP(this.a)^A.fa(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.io(this.a)+"'")}}
A.iu.prototype={
n(a){return"RuntimeError: "+this.a}}
A.bw.prototype={
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.aj(this,A.o(this).i("aj<1>"))},
gap(){return new A.aR(this,A.o(this).i("aR<2>"))},
gR(){return new A.Z(this,A.o(this).i("Z<1,2>"))},
a0(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.kt(a)},
kt(a){var s=this.d
if(s==null)return!1
return this.bu(s[this.bt(a)],a)>=0},
I(a,b){A.o(this).i("R<1,2>").a(b).aa(0,new A.lw(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ku(b)},
ku(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bt(a)]
r=this.bu(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.e4(s==null?q.b=q.cH():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.e4(r==null?q.c=q.cH():r,b,c)}else q.kw(b,c)},
kw(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cH()
r=o.bt(a)
q=s[r]
if(q==null)s[r]=[o.cI(a,b)]
else{p=o.bu(q,a)
if(p>=0)q[p].b=b
else q.push(o.cI(a,b))}},
kT(a,b){var s,r,q=this,p=A.o(q)
p.c.a(a)
p.i("2()").a(b)
if(q.a0(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
aj(a,b){if((b&0x3fffffff)===b)return this.io(this.c,b)
else return this.kv(b)},
kv(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.bt(a)
r=n[s]
q=o.bu(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.e2(p)
if(r.length===0)delete n[s]
return p.b},
J(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cs()}},
aa(a,b){var s,r,q=this
A.o(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.ao(q))
s=s.c}},
e4(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cI(b,c)
else s.b=c},
io(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.e2(s)
delete a[b]
return s.b},
cs(){this.r=this.r+1&1073741823},
cI(a,b){var s=this,r=A.o(s),q=new A.lE(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cs()
return q},
e2(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cs()},
bt(a){return J.bg(a)&1073741823},
bu(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
n(a){return A.p6(this)},
cH(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ip3:1}
A.lw.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.l(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.o(this.a).i("~(1,2)")}}
A.lE.prototype={}
A.aj.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gu(a){var s=this.a
return new A.cB(s,s.r,s.e,this.$ti.i("cB<1>"))}}
A.cB.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia9:1}
A.aR.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gu(a){var s=this.a
return new A.al(s,s.r,s.e,this.$ti.i("al<1>"))}}
A.al.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia9:1}
A.Z.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gu(a){var s=this.a
return new A.f_(s,s.r,s.e,this.$ti.i("f_<1,2>"))}}
A.f_.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.L(s.a,s.b,r.$ti.i("L<1,2>"))
r.c=s.c
return!0}},
$ia9:1}
A.eY.prototype={
bt(a){return A.xy(a)&1073741823},
bu(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
A.oy.prototype={
$1(a){return this.a(a)},
$S:5}
A.oz.prototype={
$2(a,b){return this.a(a,b)},
$S:48}
A.oA.prototype={
$1(a){return this.a(A.F(a))},
$S:17}
A.bA.prototype={
gM(a){return A.c4(this.eo())},
eo(){return A.xI(this.$r,this.bL())},
n(a){return this.eT(!1)},
eT(a){var s,r,q,p,o,n=this.iS(),m=this.bL(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.qB(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
iS(){var s,r=this.$s
while($.nC.length<=r)B.a.k($.nC,null)
s=$.nC[r]
if(s==null){s=this.iD()
B.a.l($.nC,r,s)}return s},
iD(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.hY(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.l(j,q,r[s])}}return A.ap(j,k)}}
A.ek.prototype={
bL(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.ek&&this.$s===b.$s&&J.a6(this.a,b.a)&&J.a6(this.b,b.b)},
gE(a){return A.ce(this.$s,this.a,this.b,B.k)}}
A.el.prototype={
bL(){return[this.a,this.b,this.c]},
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.el&&s.$s===b.$s&&J.a6(s.a,b.a)&&J.a6(s.b,b.b)&&J.a6(s.c,b.c)},
gE(a){var s=this
return A.ce(s.$s,s.a,s.b,s.c)}}
A.em.prototype={
bL(){return this.a},
S(a,b){if(b==null)return!1
return b instanceof A.em&&this.$s===b.$s&&A.vD(this.a,b.a)},
gE(a){return A.ce(this.$s,A.uI(this.a),B.k,B.k)}}
A.nh.prototype={
cK(){var s=this.b
if(s===this)throw A.c(new A.da("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.c(A.ak(""))
return s}}
A.cC.prototype={
gM(a){return B.fk},
f_(a,b,c){return new Float32Array(a,b,c)},
$iY:1,
$icC:1}
A.e7.prototype={$ie7:1}
A.f4.prototype={
gjK(a){if(((a.$flags|0)&2)!==0)return new A.nI(a.buffer)
else return a.buffer},
iY(a,b,c,d){var s=A.aI(b,0,c,d,null)
throw A.c(s)},
ea(a,b,c,d){if(b>>>0!==b||b>c)this.iY(a,b,c,d)}}
A.nI.prototype={
f_(a,b,c){var s=A.uF(this.a,b,c)
s.$flags=3
return s}}
A.i8.prototype={
gM(a){return B.fl},
$iY:1}
A.ay.prototype={
gq(a){return a.length},
eK(a,b,c,d,e){var s,r,q=a.length
this.ea(a,b,q,"start")
this.ea(a,c,q,"end")
if(b>c)throw A.c(A.aI(b,0,c,null,null))
s=c-b
if(e<0)throw A.c(A.w(e,null))
r=d.length
if(r-e<s)throw A.c(A.l("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibk:1}
A.f2.prototype={
h(a,b){A.cr(b,a,a.length)
return a[b]},
l(a,b,c){A.h_(c)
a.$flags&2&&A.bf(a)
A.cr(b,a,a.length)
a[b]=c},
hQ(a,b,c,d){t.id.a(d)
a.$flags&2&&A.bf(a,5)
this.eK(a,b,c,d,0)
return},
$iC:1,
$in:1,
$iE:1}
A.f3.prototype={
l(a,b,c){A.a(c)
a.$flags&2&&A.bf(a)
A.cr(b,a,a.length)
a[b]=c},
hR(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.bf(a,5)
this.eK(a,b,c,d,e)
return},
$iC:1,
$in:1,
$iE:1}
A.f1.prototype={
gM(a){return B.fm},
bb(a,b,c){return new Float32Array(a.subarray(b,A.wg(b,c,a.length)))},
$iY:1,
$ikJ:1}
A.i9.prototype={
gM(a){return B.fn},
$iY:1}
A.ia.prototype={
gM(a){return B.fo},
h(a,b){A.cr(b,a,a.length)
return a[b]},
$iY:1}
A.ib.prototype={
gM(a){return B.fp},
h(a,b){A.cr(b,a,a.length)
return a[b]},
$iY:1}
A.ic.prototype={
gM(a){return B.fq},
h(a,b){A.cr(b,a,a.length)
return a[b]},
$iY:1}
A.id.prototype={
gM(a){return B.ft},
h(a,b){A.cr(b,a,a.length)
return a[b]},
$iY:1,
$ipg:1}
A.ie.prototype={
gM(a){return B.fu},
h(a,b){A.cr(b,a,a.length)
return a[b]},
$iY:1}
A.df.prototype={
gM(a){return B.fv},
gq(a){return a.length},
h(a,b){A.cr(b,a,a.length)
return a[b]},
$iY:1,
$idf:1}
A.f5.prototype={
gM(a){return B.fw},
gq(a){return a.length},
h(a,b){A.cr(b,a,a.length)
return a[b]},
$iY:1,
$ifm:1}
A.fE.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.bM.prototype={
i(a){return A.fQ(v.typeUniverse,this,a)},
D(a){return A.rc(v.typeUniverse,this,a)}}
A.j8.prototype={}
A.jv.prototype={
n(a){return A.bt(this.a,null)}}
A.j6.prototype={
n(a){return this.a}}
A.fM.prototype={$ici:1}
A.nd.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:18}
A.nc.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
A.ne.prototype={
$0(){this.a.$0()},
$S:8}
A.nf.prototype={
$0(){this.a.$0()},
$S:8}
A.nF.prototype={
im(a,b){if(self.setTimeout!=null)self.setTimeout(A.eC(new A.nG(this,b),0),a)
else throw A.c(A.at("`setTimeout()` not found."))}}
A.nG.prototype={
$0(){this.b.$0()},
$S:0}
A.iX.prototype={
cR(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.cu(a)
else{s=r.a
if(q.i("bi<1>").b(a))s.e9(a)
else s.bJ(a)}},
cS(a,b){var s=this.a
if(this.b)s.aK(new A.av(a,b))
else s.bF(new A.av(a,b))}}
A.nR.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.nS.prototype={
$2(a,b){this.a.$2(1,new A.eO(a,t.l.a(b)))},
$S:59}
A.op.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:63}
A.br.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
ji(a,b){var s,r,q
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
o.d=null}q=o.ji(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.r7
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
o.a=A.r7
throw n
return!1}if(0>=p.length)return A.d(p,-1)
o.a=p.pop()
m=1
continue}throw A.c(A.l("sync*"))}return!1},
ln(a){var s,r,q=this
if(a instanceof A.c2){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.k(r,q.a)
q.a=s
return 2}else{q.d=J.K(a)
return 2}},
$ia9:1}
A.c2.prototype={
gu(a){return new A.br(this.a(),this.$ti.i("br<1>"))}}
A.av.prototype={
n(a){return A.q(this.a)},
$ia5:1,
gba(){return this.b}}
A.kQ.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.eg(null)}else{s=null
try{s=l.$0()}catch(p){r=A.ab(p)
q=A.c5(p)
l=r
o=q
n=A.pG(l,o)
l=new A.av(l,o)
m.b.aK(l)
return}m.b.eg(s)}},
$S:0}
A.kT.prototype={
$2(a,b){var s,r,q=this
A.ev(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aK(new A.av(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aK(new A.av(r,s))}},
$S:32}
A.kS.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bR(r,k.b,a)
if(J.a6(s,0)){q=A.e([],j.i("p<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.h8(q,l)}k.c.bJ(q)}}else if(J.a6(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aK(new A.av(q,o))}},
$S(){return this.d.i("ah(0)")}}
A.j0.prototype={
cS(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.bF(A.wG(a,b))},
f1(a){return this.cS(a,null)}}
A.fs.prototype={
cR(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.l("Future already completed"))
s.cu(r.i("1/").a(a))}}
A.dw.prototype={
kI(a){if((this.c&15)!==6)return!0
return this.b.b.dO(t.iW.a(this.d),a.a,t.y,t.K)},
ks(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.l8(q,m,a.b,o,n,t.l)
else p=l.dO(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.ab(s))){if((r.c&1)!==0)throw A.c(A.w("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.w("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ae.prototype={
dP(a,b,c){var s,r,q=this.$ti
q.D(c).i("1/(2)").a(a)
s=$.a8
if(s===B.r){if(!t.ng.b(b)&&!t.mq.b(b))throw A.c(A.aE(b,"onError",u.c))}else{c.i("@<0/>").D(q.c).i("1(2)").a(a)
b=A.x_(b,s)}r=new A.ae(s,c.i("ae<0>"))
this.ct(new A.dw(r,3,a,b,q.i("@<1>").D(c).i("dw<1,2>")))
return r},
eS(a,b,c){var s,r=this.$ti
r.D(c).i("1/(2)").a(a)
s=new A.ae($.a8,c.i("ae<0>"))
this.ct(new A.dw(s,19,a,b,r.i("@<1>").D(c).i("dw<1,2>")))
return s},
jk(a){this.a=this.a&1|16
this.c=a},
bI(a){this.a=a.a&30|this.a&1
this.c=a.c},
ct(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.ct(a)
return}r.bI(s)}A.jJ(null,null,r.b,t.M.a(new A.nj(r,a)))}},
ey(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.ey(a)
return}m.bI(n)}l.a=m.bP(a)
A.jJ(null,null,m.b,t.M.a(new A.no(l,m)))}},
bf(){var s=t.F.a(this.c)
this.c=null
return this.bP(s)},
bP(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eg(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("bi<1>").b(a))A.nm(a,r,!0)
else{s=r.bf()
q.c.a(a)
r.a=8
r.c=a
A.dx(r,s)}},
bJ(a){var s,r=this
r.$ti.c.a(a)
s=r.bf()
r.a=8
r.c=a
A.dx(r,s)},
iC(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bf()
q.bI(a)
A.dx(q,r)},
aK(a){var s=this.bf()
this.jk(a)
A.dx(this,s)},
cu(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("bi<1>").b(a)){this.e9(a)
return}this.is(a)},
is(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.jJ(null,null,s.b,t.M.a(new A.nl(s,a)))},
e9(a){A.nm(this.$ti.i("bi<1>").a(a),this,!1)
return},
bF(a){this.a^=2
A.jJ(null,null,this.b,t.M.a(new A.nk(this,a)))},
$ibi:1}
A.nj.prototype={
$0(){A.dx(this.a,this.b)},
$S:0}
A.no.prototype={
$0(){A.dx(this.b,this.a.a)},
$S:0}
A.nn.prototype={
$0(){A.nm(this.a.a,this.b,!0)},
$S:0}
A.nl.prototype={
$0(){this.a.bJ(this.b)},
$S:0}
A.nk.prototype={
$0(){this.a.aK(this.b)},
$S:0}
A.nr.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.l7(t.mY.a(q.d),t.z)}catch(p){s=A.ab(p)
r=A.c5(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.k2(q)
n=k.a
n.c=new A.av(q,o)
q=n}q.b=!0
return}if(j instanceof A.ae&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.ae){m=k.b.a
l=new A.ae(m.b,m.$ti)
j.dP(new A.ns(l,m),new A.nt(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ns.prototype={
$1(a){this.a.iC(this.b)},
$S:18}
A.nt.prototype={
$2(a,b){A.ev(a)
t.l.a(b)
this.a.aK(new A.av(a,b))},
$S:33}
A.nq.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.dO(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ab(l)
r=A.c5(l)
q=s
p=r
if(p==null)p=A.k2(q)
o=this.a
o.c=new A.av(q,p)
o.b=!0}},
$S:0}
A.np.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.kI(s)&&p.a.e!=null){p.c=p.a.ks(s)
p.b=!1}}catch(o){r=A.ab(o)
q=A.c5(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.k2(p)
m=l.b
m.c=new A.av(p,n)
p=m}p.b=!0}},
$S:0}
A.iY.prototype={}
A.jt.prototype={}
A.fX.prototype={$ir_:1}
A.jm.prototype={
l9(a){var s,r,q
t.M.a(a)
try{if(B.r===$.a8){a.$0()
return}A.rR(null,null,this,a,t.H)}catch(q){s=A.ab(q)
r=A.c5(q)
A.pN(A.ev(s),t.l.a(r))}},
f0(a){return new A.nD(this,t.M.a(a))},
l7(a,b){b.i("0()").a(a)
if($.a8===B.r)return a.$0()
return A.rR(null,null,this,a,b)},
dO(a,b,c,d){c.i("@<0>").D(d).i("1(2)").a(a)
d.a(b)
if($.a8===B.r)return a.$1(b)
return A.x3(null,null,this,a,b,c,d)},
l8(a,b,c,d,e,f){d.i("@<0>").D(e).D(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a8===B.r)return a.$2(b,c)
return A.x2(null,null,this,a,b,c,d,e,f)},
hA(a,b,c,d){return b.i("@<0>").D(c).D(d).i("1(2,3)").a(a)}}
A.nD.prototype={
$0(){return this.a.l9(this.b)},
$S:0}
A.oj.prototype={
$0(){A.uh(this.a,this.b)},
$S:0}
A.fz.prototype={
gq(a){return this.a},
gG(a){return this.a===0},
gL(a){return this.a!==0},
gN(){return new A.dy(this,this.$ti.i("dy<1>"))},
gap(){var s=this.$ti
return A.i4(new A.dy(this,s.i("dy<1>")),new A.nu(this),s.c,s.y[1])},
a0(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.iG(a)},
iG(a){var s=this.d
if(s==null)return!1
return this.aL(this.en(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.r1(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.r1(q,b)
return r}else return this.iT(b)},
iT(a){var s,r,q=this.d
if(q==null)return null
s=this.en(q,a)
r=this.aL(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.ed(s==null?m.b=A.pn():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.ed(r==null?m.c=A.pn():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.pn()
p=A.jP(b)&1073741823
o=q[p]
if(o==null){A.po(q,p,[b,c]);++m.a
m.e=null}else{n=m.aL(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aa(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.ee()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.ao(m))}},
ee(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.bT(i.a,null,!1,t.z)
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
ed(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.po(a,b,c)},
en(a,b){return a[A.jP(b)&1073741823]}}
A.nu.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.fB.prototype={
aL(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dy.prototype={
gq(a){return this.a.a},
gG(a){return this.a.a===0},
gL(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.fA(s,s.ee(),this.$ti.i("fA<1>"))}}
A.fA.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.ao(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia9:1}
A.bz.prototype={
eu(){return new A.bz(A.o(this).i("bz<1>"))},
gu(a){var s=this,r=new A.dC(s,s.r,A.o(s).i("dC<1>"))
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
return t.Y.a(r[b])!=null}else return this.iF(b)},
iF(a){var s=this.d
if(s==null)return!1
return this.aL(s[this.cB(a)],a)>=0},
k(a,b){var s,r,q=this
A.o(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ec(s==null?q.b=A.pp():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ec(r==null?q.c=A.pp():r,b)}else return q.ip(b)},
ip(a){var s,r,q,p=this
A.o(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.pp()
r=p.cB(a)
q=s[r]
if(q==null)s[r]=[p.cz(a)]
else{if(p.aL(q,a)>=0)return!1
q.push(p.cz(a))}return!0},
aj(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.ez(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.ez(s.c,b)
else return s.jg(b)},
jg(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cB(a)
r=n[s]
q=o.aL(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.eW(p)
return!0},
J(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cG()}},
ec(a,b){A.o(this).c.a(b)
if(t.Y.a(a[b])!=null)return!1
a[b]=this.cz(b)
return!0},
ez(a,b){var s
if(a==null)return!1
s=t.Y.a(a[b])
if(s==null)return!1
this.eW(s)
delete a[b]
return!0},
cG(){this.r=this.r+1&1073741823},
cz(a){var s,r=this,q=new A.jd(A.o(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cG()
return q},
eW(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cG()},
cB(a){return J.bg(a)&1073741823},
aL(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
$iqw:1}
A.jd.prototype={}
A.dC.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.ao(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia9:1}
A.lF.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:35}
A.I.prototype={
gu(a){return new A.cb(a,this.gq(a),A.be(a).i("cb<I.E>"))},
P(a,b){return this.h(a,b)},
gG(a){return this.gq(a)===0},
gL(a){return!this.gG(a)},
ag(a,b){var s,r
A.be(a).i("t(I.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gq(a))throw A.c(A.ao(a))}return!0},
a1(a,b){var s,r
A.be(a).i("t(I.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gq(a))throw A.c(A.ao(a))}return!1},
dV(a,b){return new A.bP(a,b.i("bP<0>"))},
by(a,b,c){var s=A.be(a)
return new A.V(a,s.D(c).i("1(I.E)").a(b),s.i("@<I.E>").D(c).i("V<1,2>"))},
k(a,b){var s
A.be(a).i("I.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.l(a,s,b)},
bU(a,b){return new A.bK(a,A.be(a).i("@<I.E>").D(b).i("bK<1,2>"))},
Y(a,b){var s,r=A.be(a)
r.i("h(I.E,I.E)?").a(b)
s=b==null?A.xx():b
A.iy(a,0,this.gq(a)-1,s,r.i("I.E"))},
km(a,b,c,d){var s
A.be(a).i("I.E?").a(d)
A.fb(b,c,this.gq(a))
for(s=b;s<c;++s)this.l(a,s,d)},
n(a){return A.p0(a,"[","]")},
$iC:1,
$in:1,
$iE:1}
A.T.prototype={
aa(a,b){var s,r,q,p=A.o(this)
p.i("~(T.K,T.V)").a(b)
for(s=this.gN(),s=s.gu(s),p=p.i("T.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gR(){return this.gN().by(0,new A.lH(this),A.o(this).i("L<T.K,T.V>"))},
b3(a,b,c,d){var s,r,q,p,o,n=A.o(this)
n.D(c).D(d).i("L<1,2>(T.K,T.V)").a(b)
s=A.x(c,d)
for(r=this.gN(),r=r.gu(r),n=n.i("T.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.l(0,o.a,o.b)}return s},
jA(a){var s,r,q
A.o(this).i("n<L<T.K,T.V>>").a(a)
for(s=a.$ti,r=new A.dc(J.K(a.a),a.b,s.i("dc<1,2>")),s=s.y[1];r.m();){q=r.a
if(q==null)q=s.a(q)
this.l(0,q.a,q.b)}},
gq(a){var s=this.gN()
return s.gq(s)},
gG(a){var s=this.gN()
return s.gG(s)},
gL(a){var s=this.gN()
return s.gL(s)},
gap(){return new A.fC(this,A.o(this).i("fC<T.K,T.V>"))},
n(a){return A.p6(this)},
$iR:1}
A.lH.prototype={
$1(a){var s=this.a,r=A.o(s)
r.i("T.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("T.V").a(s)
return new A.L(a,s,r.i("L<T.K,T.V>"))},
$S(){return A.o(this.a).i("L<T.K,T.V>(T.K)")}}
A.lI.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:19}
A.fC.prototype={
gq(a){var s=this.a
return s.gq(s)},
gG(a){var s=this.a
return s.gG(s)},
gL(a){var s=this.a
return s.gL(s)},
gu(a){var s=this.a,r=s.gN()
return new A.fD(r.gu(r),s,this.$ti.i("fD<1,2>"))}}
A.fD.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$ia9:1}
A.fR.prototype={
l(a,b,c){var s=A.o(this)
s.c.a(b)
s.y[1].a(c)
throw A.c(A.at("Cannot modify unmodifiable map"))}}
A.e6.prototype={
h(a,b){return this.a.h(0,b)},
l(a,b,c){var s=A.o(this)
this.a.l(0,s.c.a(b),s.y[1].a(c))},
aa(a,b){this.a.aa(0,A.o(this).i("~(1,2)").a(b))},
gG(a){var s=this.a
return s.gG(s)},
gL(a){var s=this.a
return s.gL(s)},
gq(a){var s=this.a
return s.gq(s)},
gN(){return this.a.gN()},
n(a){return this.a.n(0)},
gap(){return this.a.gap()},
gR(){return this.a.gR()},
b3(a,b,c,d){return this.a.b3(0,A.o(this).D(c).D(d).i("L<1,2>(3,4)").a(b),c,d)},
$iR:1}
A.cI.prototype={}
A.cg.prototype={
gG(a){return this.gq(this)===0},
gL(a){return this.gq(this)!==0},
I(a,b){var s
for(s=J.K(A.o(this).i("n<1>").a(b));s.m();)this.k(0,s.gp())},
cX(a){var s,r,q=this.aX(0)
for(s=this.gu(this);s.m();){r=s.gp()
if(a.v(0,r))q.aj(0,r)}return q},
n(a){return A.p0(this,"{","}")},
ag(a,b){var s
A.o(this).i("t(1)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
aU(a,b){var s,r,q=this.gu(this)
if(!q.m())return""
s=J.dM(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.q(q.gp())
while(q.m())}else{r=s
do r=r+b+A.q(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
a1(a,b){var s
A.o(this).i("t(1)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
P(a,b){var s,r
A.iq(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.li(b,b-r,this,"index"))},
$iC:1,
$in:1,
$icF:1}
A.fK.prototype={
cX(a){var s,r,q,p=this,o=p.eu()
for(s=A.je(p,p.r,A.o(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.v(0,q))o.k(0,q)}return o},
aX(a){var s=this.eu()
s.I(0,this)
return s}}
A.jw.prototype={
k(a,b){this.$ti.c.a(b)
return A.vO()}}
A.fn.prototype={
v(a,b){return this.a.v(0,b)},
gq(a){return this.a.a},
gu(a){var s=this.a
return A.je(s,s.r,A.o(s).c)},
aX(a){return this.a.aX(0)}}
A.er.prototype={}
A.fS.prototype={}
A.jb.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.jb(b):s}},
gq(a){return this.b==null?this.c.a:this.aY().length},
gG(a){return this.gq(0)===0},
gL(a){return this.gq(0)>0},
gN(){if(this.b==null){var s=this.c
return new A.aj(s,A.o(s).i("aj<1>"))}return new A.jc(this)},
gap(){var s,r=this
if(r.b==null){s=r.c
return new A.aR(s,A.o(s).i("aR<2>"))}return A.i4(r.aY(),new A.nw(r),t.N,t.z)},
l(a,b,c){var s,r,q=this
A.F(b)
if(q.b==null)q.c.l(0,b,c)
else if(q.a0(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.jt().l(0,b,c)},
a0(a){if(this.b==null)return this.c.a0(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aa(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.aa(0,b)
s=o.aY()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.nT(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.ao(o))}},
aY(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
jt(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.x(t.N,t.z)
r=n.aY()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.h(0,o))}if(p===0)B.a.k(r,"")
else B.a.J(r)
n.a=n.b=null
return n.c=s},
jb(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.nT(this.a[a])
return this.b[a]=s}}
A.nw.prototype={
$1(a){return this.a.h(0,A.F(a))},
$S:17}
A.jc.prototype={
gq(a){return this.a.gq(0)},
P(a,b){var s=this.a
if(s.b==null)s=s.gN().P(0,b)
else{s=s.aY()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gu(a){var s=this.a
if(s.b==null){s=s.gN()
s=s.gu(s)}else{s=s.aY()
s=new J.cV(s,s.length,A.N(s).i("cV<1>"))}return s}}
A.nL.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:20}
A.nK.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:20}
A.hf.prototype={
kK(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fb(a4,a5,a2)
s=$.tt()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.d(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.d(a3,k)
h=A.ox(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.d(a3,g)
f=A.ox(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aK("")
g=o}else g=o
g.a+=B.b.B(a3,p,q)
c=A.ad(j)
g.a+=c
p=k
continue}}throw A.c(A.ag("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.B(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.q6(a3,m,a5,n,l,r)
else{b=B.c.ah(r-1,4)+1
if(b===1)throw A.c(A.ag(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.b6(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.q6(a3,m,a5,n,l,a)
else{b=B.c.ah(a,4)
if(b===1)throw A.c(A.ag(a1,a3,a5))
if(b>1)a3=B.b.b6(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ke.prototype={}
A.cY.prototype={}
A.hs.prototype={}
A.hC.prototype={}
A.eZ.prototype={
n(a){var s=A.hD(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.i2.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.i1.prototype={
bY(a,b){var s=A.wX(a,this.gk6().a)
return s},
b1(a,b){var s=A.vw(a,this.gkc().b,null)
return s},
gkc(){return B.dV},
gk6(){return B.dU}}
A.ly.prototype={}
A.lx.prototype={}
A.ny.prototype={
hI(a){var s,r,q,p,o,n,m=a.length
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
cw(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.i2(a,null))}B.a.k(s,a)},
cj(a){var s,r,q,p,o=this
if(o.hH(a))return
o.cw(a)
try{s=o.b.$1(a)
if(!o.hH(s)){q=A.qs(a,null,o.gex())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ab(p)
q=A.qs(a,r,o.gex())
throw A.c(q)}},
hH(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.hI(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.cw(a)
q.lj(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.cw(a)
r=q.lk(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
lj(a){var s,r,q=this.c
q.a+="["
s=J.aX(a)
if(s.gL(a)){this.cj(s.h(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.cj(s.h(a,r))}}q.a+="]"},
lk(a){var s,r,q,p,o,n,m=this,l={}
if(a.gG(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.bT(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aa(0,new A.nz(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.hI(A.F(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.cj(r[n])}p.a+="}"
return!0}}
A.nz.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.l(s,r.a++,a)
B.a.l(s,r.a++,b)},
$S:19}
A.nx.prototype={
gex(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iL.prototype={}
A.mY.prototype={
jZ(a){return new A.nJ(this.a).iH(t.J.a(a),0,null,!0)}}
A.nJ.prototype={
iH(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.fb(b,c,J.aQ(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.w4(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.w3(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cC(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.w5(o)
l.b=0
throw A.c(A.ag(m,a,p+l.c))}return n},
cC(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.K(b+c,2)
r=q.cC(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cC(a,s,c,d)}return q.k5(a,b,c,d)},
k5(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aK(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.d(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.d(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.d(i,p)
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
p=A.ad(a[l])
e.a+=p}else{p=A.qK(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ad(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.cZ.prototype={
S(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.cZ)if(this.a===b.a)s=this.b===b.b
return s},
gE(a){return A.ce(this.a,this.b,B.k,B.k)},
F(a,b){var s
t.ml.a(b)
s=B.c.F(this.a,b.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
n(a){var s=this,r=A.tX(A.uT(s)),q=A.hu(A.uR(s)),p=A.hu(A.uN(s)),o=A.hu(A.uO(s)),n=A.hu(A.uQ(s)),m=A.hu(A.uS(s)),l=A.qc(A.uP(s)),k=s.b,j=k===0?"":A.qc(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaw:1}
A.cw.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.cw&&this.a===b.a},
gE(a){return B.c.gE(this.a)},
F(a,b){return B.c.F(this.a,t.jS.a(b).a)},
n(a){var s,r,q,p=this.a,o=p%36e8,n=B.c.K(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.c.K(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.b.kQ(B.c.n(o%1e6),6,"0")},
$iaw:1}
A.j5.prototype={
n(a){return this.A()},
$iG:1}
A.a5.prototype={
gba(){return A.uM(this)}}
A.hc.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hD(s)
return"Assertion failed"}}
A.ci.prototype={}
A.bJ.prototype={
gcE(){return"Invalid argument"+(!this.a?"(s)":"")},
gcD(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gcE()+q+o
if(!s.a)return n
return n+s.gcD()+": "+A.hD(s.gdC())},
gdC(){return this.b}}
A.e9.prototype={
gdC(){return A.rs(this.b)},
gcE(){return"RangeError"},
gcD(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.hS.prototype={
gdC(){return A.a(this.b)},
gcE(){return"RangeError"},
gcD(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.fo.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.iG.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.ee.prototype={
n(a){return"Bad state: "+this.a}}
A.hq.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hD(s)+"."}}
A.ig.prototype={
n(a){return"Out of Memory"},
gba(){return null},
$ia5:1}
A.fj.prototype={
n(a){return"Stack Overflow"},
gba(){return null},
$ia5:1}
A.ni.prototype={
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
bU(a,b){return A.tP(this,A.o(this).i("n.E"),b)},
by(a,b,c){var s=A.o(this)
return A.i4(this,s.D(c).i("1(n.E)").a(b),s.i("n.E"),c)},
dU(a,b){var s=A.o(this)
return new A.O(this,s.i("t(n.E)").a(b),s.i("O<n.E>"))},
dV(a,b){return new A.bP(this,b.i("bP<0>"))},
bs(a,b,c,d){var s,r
d.a(b)
A.o(this).D(d).i("1(1,n.E)").a(c)
for(s=this.gu(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
ag(a,b){var s
A.o(this).i("t(n.E)").a(b)
for(s=this.gu(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a1(a,b){var s
A.o(this).i("t(n.E)").a(b)
for(s=this.gu(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
b8(a,b){var s=A.Q(this,A.o(this).i("n.E"))
return s},
b7(a){return this.b8(0,!0)},
gq(a){var s,r=this.gu(this)
for(s=0;r.m();)++s
return s},
gG(a){return!this.gu(this).m()},
gL(a){return!this.gG(this)},
gaS(a){var s=this.gu(this)
if(!s.m())throw A.c(A.hW())
return s.gp()},
dA(a,b,c){var s,r
A.o(this).i("t(n.E)").a(b)
for(s=this.gu(this);s.m();){r=s.gp()
if(b.$1(r))return r}throw A.c(A.hW())},
kn(a,b){return this.dA(0,b,null)},
P(a,b){var s,r
A.iq(b,"index")
s=this.gu(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.c(A.li(b,b-r,this,"index"))},
n(a){return A.uv(this,"(",")")}}
A.L.prototype={
n(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.ah.prototype={
gE(a){return A.A.prototype.gE.call(this,0)},
n(a){return"null"}}
A.A.prototype={$iA:1,
S(a,b){return this===b},
gE(a){return A.fa(this)},
n(a){return"Instance of '"+A.io(this)+"'"},
gM(a){return A.jN(this)},
toString(){return this.n(this)}}
A.ju.prototype={
n(a){return""},
$ibZ:1}
A.mF.prototype={
gkb(){var s,r=this.b
if(r==null)r=$.m4.$0()
s=r-this.a
if($.q1()===1e6)return s
return s*1000}}
A.aK.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iv6:1}
A.mX.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.F(b)
s=B.b.c8(b,"=")
if(s===-1){if(b!=="")a.l(0,A.pu(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.B(b,0,s)
q=B.b.bD(b,s+1)
p=this.a
a.l(0,A.pu(r,0,r.length,p,!0),A.pu(q,0,q.length,p,!0))}return a},
$S:51}
A.mW.prototype={
$2(a,b){throw A.c(A.ag("Illegal IPv6 address, "+a,this.a,b))},
$S:54}
A.fT.prototype={
geR(){var s,r,q,p,o=this,n=o.w
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
if(q===$){s=B.b.gE(r.geR())
r.y!==$&&A.tf()
r.y=s
q=s}return q},
gbz(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.qS(s==null?"":s)
r.z!==$&&A.tf()
q=r.z=new A.cI(s,t.ph)}return q},
ghF(){return this.b},
gdB(){var s=this.c
if(s==null)return""
if(B.b.W(s,"[")&&!B.b.Z(s,"v",1))return B.b.B(s,1,s.length-1)
return s},
gdI(){var s=this.d
return s==null?A.rd(this.a):s},
gdK(){var s=this.f
return s==null?"":s},
ghi(){var s=this.r
return s==null?"":s},
ghj(){return this.c!=null},
ghl(){return this.f!=null},
ghk(){return this.r!=null},
n(a){return this.geR()},
S(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gdY())if(p.c!=null===b.ghj())if(p.b===b.ghF())if(p.gdB()===b.gdB())if(p.gdI()===b.gdI())if(p.e===b.ghw()){r=p.f
q=r==null
if(!q===b.ghl()){if(q)r=""
if(r===b.gdK()){r=p.r
q=r==null
if(!q===b.ghk()){s=q?"":r
s=s===b.ghi()}}}}return s},
$iiJ:1,
gdY(){return this.a},
ghw(){return this.e}}
A.mU.prototype={
ghE(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.d(m,0)
s=o.a
m=m[0]+1
r=B.b.c9(s,"?",m)
q=s.length
if(r>=0){p=A.fU(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.j1("data","",n,n,A.fU(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jp.prototype={
ghj(){return this.c>0},
ghl(){return this.f<this.r},
ghk(){return this.r<this.a.length},
gdY(){var s=this.w
return s==null?this.w=this.iE():s},
iE(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.W(r.a,"http"))return"http"
if(q===5&&B.b.W(r.a,"https"))return"https"
if(s&&B.b.W(r.a,"file"))return"file"
if(q===7&&B.b.W(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
ghF(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gdB(){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gdI(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.xR(B.b.B(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.W(r.a,"http"))return 80
if(s===5&&B.b.W(r.a,"https"))return 443
return 0},
ghw(){return B.b.B(this.a,this.e,this.f)},
gdK(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
ghi(){var s=this.r,r=this.a
return s<r.length?B.b.bD(r,s+1):""},
gbz(){if(this.f>=this.r)return B.bv
return new A.cI(A.qS(this.gdK()),t.ph)},
gE(a){var s=this.x
return s==null?this.x=B.b.gE(this.a):s},
S(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$iiJ:1}
A.j1.prototype={}
A.lP.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.oR.prototype={
$1(a){return this.a.cR(this.b.i("0/?").a(a))},
$S:9}
A.oS.prototype={
$1(a){if(a==null)return this.a.f1(new A.lP(a===undefined))
return this.a.f1(a)},
$S:9}
A.os.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.rK(a))return a
s=this.a
a.toString
if(s.a0(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.k(A.aI(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dH(!0,"isUtc",t.y)
return new A.cZ(r,0,!0)}if(a instanceof RegExp)throw A.c(A.w("structured clone of RegExp",null))
if(a instanceof Promise)return A.aO(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.x(p,p)
s.l(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bQ(n),p=s.gu(n);p.m();)m.push(A.ct(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.l(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.l(0,a,o)
h=A.a(a.length)
for(s=J.aX(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:56}
A.ja.prototype={
ai(a){if(a<=0||a>4294967296)throw A.c(A.qD(u.w+a))
return Math.random()*a>>>0},
dG(){return Math.random()},
$ipa:1}
A.ej.prototype={
cr(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.aC()
l.aC()
l.aC()
l.aC()},
aC(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.K(o-n+(q-p)+(m-r),4294967296)>>>0},
ai(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.c(A.qD(u.w+a))
s=a-1
if((a&s)>>>0===0){p.aC()
return(p.a&s)>>>0}do{p.aC()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
dG(){var s,r=this
r.aC()
s=r.a
r.aC()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$ipa:1}
A.m8.prototype={
H(){var s=this
if(B.a.a1(A.e([s.d,s.e,s.f,s.r,s.w],t.t),new A.m9()))throw A.c(B.dn)}}
A.m9.prototype={
$1(a){return A.a(a)<=0},
$S:21}
A.di.prototype={
A(){return"QualityProfileKind."+this.b}}
A.dh.prototype={}
A.kk.prototype={}
A.kl.prototype={}
A.il.prototype={
H(){var s,r,q,p,o=this
for(s=A.S(["exposure",o.a,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",o.w,"affineWarpStrength",o.x,"vertexSnapGrid",o.y,"vhsChromaWeight",o.Q,"vhsTrackingWeight",o.as,"vhsNoiseWeight",o.at,"vhsHeadSwitchWeight",o.ax,"vhsDropoutWeight",o.ay,"vhsGhostWeight",o.ch],t.N,t.i),s=new A.Z(s,A.o(s).i("Z<1,2>")).gu(0);s.m();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.c(A.w("PostProcessState."+q+" must be >= 0: "+A.q(p),null))}s=o.z
if(s<1||s>8)throw A.c(A.w("PostProcessState.quantizationBits must be in [1, 8]: "+s,null))}}
A.dU.prototype={}
A.hG.prototype={
H(){var s,r,q,p,o,n,m=this,l=null
if(!B.bf.ga2(0)||!m.b.ga2(0)||!m.r.ga2(0))throw A.c(A.w("FrameEnvironment colors must be finite",l))
s=m.c
if(isFinite(s)){r=m.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.c(A.w("FrameEnvironment requires fogEnd >= fogStart, got "+A.q(s)+"/"+m.d,l))
s=m.w
if(!isFinite(s)||s<0)throw A.c(A.w("FrameEnvironment.ambientIntensity must be >= 0: "+A.q(s),l))
s=m.x
if(s!=null){r=s.a
if(!r.ga2(0)||r.gbv()<1e-12)A.k(A.w("DirectionalLight.direction must be finite and nonzero: "+r.n(0),l))
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
A.kL.prototype={}
A.cf.prototype={
S(a,b){if(b==null)return!1
return J.dK(b)===A.jN(this)&&b instanceof A.cf&&this.a===b.a&&this.b===b.b},
gE(a){return A.ce(A.jN(this),this.a,this.b,B.k)}}
A.b_.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bm.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.bU.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.ih.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.c9.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.d6.prototype={
A(){return"HandleRejection."+this.b}}
A.l0.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.db.prototype={
ga2(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
S(a,b){if(b==null)return!1
return b instanceof A.db&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.ce(this.a,this.b,this.c,B.k)},
n(a){return"LinearColor("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.kr.prototype={}
A.ik.prototype={}
A.ed.prototype={}
A.hb.prototype={
A(){return"AlphaMode."+this.b}}
A.de.prototype={}
A.ck.prototype={
A(){return"VertexAttributeKind."+this.b}}
A.cl.prototype={}
A.mZ.prototype={
H(){var s,r,q,p
for(s=0;s<6;++s){r=B.ap[s]
q=r.b
p=q+r.c
if(p>14)throw A.c(A.w('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.bV.prototype={
H(){var s,r,q,p,o,n=this
n.a.H()
s=n.b.length
if(B.c.ah(s,14)!==0)throw A.c(A.w("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
r=n.c
if(r!=null){q=s/14|0
for(s=r.length,p=0;p<s;++p){o=r[p]
if(o>=q)throw A.c(A.w("MeshData index "+o+" out of range for "+q+" vertices",null))}}s=n.d
r=s.a
if(r.ga2(0)&&s.b.ga2(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.c(A.w("MeshData.localBounds must be a valid AABB",null))}}
A.lR.prototype={
H(){var s=this.a,r=s.a
if(!r.v(0,"sceneColor")||!r.v(0,"present"))throw A.c(A.w("resource plan must contain sceneColor and present",null))
if(s.a1(0,new A.lT()))throw A.c(A.w("resource plan contains an empty resource ID",null))
if(this.b!==r.v(0,"vhsOutput"))throw A.c(A.w("resource history does not match vhsOutput ownership",null))}}
A.lT.prototype={
$1(a){return A.F(a).length===0},
$S:4}
A.m_.prototype={}
A.it.prototype={
hn(a){var s=this
if(s.d)A.k(A.l("resource assembler is disposed"))
if(s.a!=null)throw A.c(A.l("resource assembler is initialized"))
a.H()
s.a=a
s.c=1},
bm(){if(this.d)return
this.d=!0
this.a=null}}
A.dY.prototype={
A(){return"DrawMode."+this.b}}
A.hh.prototype={
A(){return"BlendMode."+this.b}}
A.b2.prototype={}
A.iC.prototype={
H(){var s=this
if(s.a<0||s.b<0)throw A.c(A.w("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.c(A.w("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.c(A.w("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.hp.prototype={
A(){return"ColorEncoding."+this.b}}
A.hy.prototype={
A(){return"DiagnosticLevel."+this.b}}
A.ir.prototype={
H(){var s=this,r="installedFeatures",q=s.a,p=q.b,o=p.cX(B.fc)
if(o.a!==0)A.k(A.aE(o,r,"contains unknown pipeline features"))
if(q.a===B.ar&&p.gL(p))A.k(A.aE(p,r,"safe profiles cannot install optional features"))
q=s.b
if(q<=0||s.c<=0)throw A.c(A.w("RendererConfiguration internal resolution must be > 0: "+q+"x"+s.c,null))}}
A.dk.prototype={
A(){return"RendererState."+this.b}}
A.kN.prototype={
n(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled=0 gpu="+s.r+"B)"}}
A.i6.prototype={
l3(a){return this.a.bl(a)}}
A.lK.prototype={
$3(a,b,c){return new A.bU(A.a(a),A.a(b),A.bE(c))},
$S:66}
A.iI.prototype={}
A.lM.prototype={
cP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=u.k,d=this.a,c=a.b,b=A.qY(d,new A.hJ(c.byteLength,B.b6,B.dz))
if(d.b!==B.f)A.k(A.l(e))
s=A.f(b.a)
r=d.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,c)
p=A.c1(d)
A.bO(d,p)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a3(t.S)
for(n=a.a,m=0;m<6;++m){l=B.ap[m]
k=A.rX(l.a)
if(!o.k(0,k))continue
j=A.wk(n,k,l)
if(d.b!==B.f)A.k(A.l(e))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(d.b!==B.f)A.k(A.l(e))
r.enableVertexAttribArray(k)}i=a.c
n=i==null
if(!n){h=A.qY(d,new A.hJ(i.byteLength,B.b6,B.b5))
if(d.b!==B.f)A.k(A.l(e))
g=A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER)
f=A.f(h.a)
r.bindBuffer(g,f)
if(d.b!==B.f)A.k(A.l(e))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f)
r.bufferData(A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),i,A.a(q.WebGL2RenderingContext.STATIC_DRAW))}else h=null
d=n?null:i.length
if(d==null)d=0
return new A.iI(b,h,p,d,c.length/14|0)},
kZ(a){var s=this.c.h(0,a.a)
if(s==null)throw A.c(A.d5(B.an,a))
this.b.bl(a)
return s},
b4(a){var s,r,q=this.c.aj(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.f(q.c.a))
s.deleteBuffer(A.f(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.f(r.a))}this.b.b4(a)},
dN(){var s,r,q,p
for(s=this.b.b2(),r=s.$ti,s=new A.br(s.a(),r.i("br<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.l(0,p.a.a,this.cP(p.b))}},
gbw(){return this.b.b2().bs(0,0,new A.lO(),t.S)}}
A.lN.prototype={
$3(a,b,c){return new A.b_(A.a(a),A.a(b),A.bE(c))},
$S:81}
A.lO.prototype={
$2(a,b){var s,r
A.a(a)
s=t.o7.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?null:s.byteLength
if(s==null)s=0
return a+r+s},
$S:89}
A.cn.prototype={}
A.iF.prototype={
eh(){var s=this.a,r=A.pk(s,B.dC)
A.pl(s,r,0,$.ti())
return r},
le(a,b){var s,r,q,p=this,o=p.b,n=o.bl(a),m=A.Q(n.b,t.nh)
B.a.l(m,0,b)
s=n.a
o.dR(a,new A.cn(s,m,!1))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.pk(p.a,s)
o.l(0,r,q)}A.pl(p.a,q,0,b)},
l1(a){var s,r=this
if(a==null){s=r.d
s===$&&A.j()
return s}r.b.bl(a)
s=r.c.h(0,a.a)
if(s==null){s=r.d
s===$&&A.j()}return s},
dN(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.eh()
for(s=i.b.b2(),r=s.$ti,s=new A.br(s.a(),r.i("br<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.ag(o,new A.mQ()))continue
l=A.pk(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.pl(p,l,k,j)}q.l(0,n.a,l)}},
gbw(){return this.b.b2().bs(0,0,new A.mP(),t.S)}}
A.mO.prototype={
$3(a,b,c){return new A.bm(A.a(a),A.a(b),A.bE(c))},
$S:99}
A.mQ.prototype={
$1(a){return t.nh.a(a)==null},
$S:100}
A.mP.prototype={
$2(a,b){var s
A.a(a)
s=t.p3.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:29}
A.d7.prototype={}
A.hE.prototype={
jN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.Q.a(a)
s=new A.mc(A.e([],t.hJ),A.a3(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].a7(s,b)
o=s.jM(a,!1)
if(o.b.length!==0)return new A.hF(o,B.ei)
q=o.a
n=A.N(q)
m=new A.V(q,n.i("m(1)").a(new A.kH()),n.i("V<1,m>")).aX(0)
l=A.e([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.a6(d),j=0;j<1;++j){i=n[j]
if(!m.v(0,i.gT().a))throw A.c(A.l('RenderFeature "'+k.gab()+'" created a pass "'+i.gT().a+'" that it never declared into the graph'))
B.a.k(l,i)}}B.a.Y(l,new A.kI(o))
return new A.hF(o,l)}}
A.kH.prototype={
$1(a){return t.A.a(a).a},
$S:30}
A.kI.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.F(B.a.hm(s,new A.kF(a)),B.a.hm(s,new A.kG(b)))},
$S:31}
A.kF.prototype={
$1(a){return t.A.a(a).a===this.a.gT().a},
$S:6}
A.kG.prototype={
$1(a){return t.A.a(a).a===this.a.gT().a},
$S:6}
A.hF.prototype={}
A.e1.prototype={
A(){return"FrameQueueState."+this.b}}
A.kM.prototype={}
A.ai.prototype={
gbA(){var s=this.c,r=A.N(s)
return new A.O(s,r.i("t(1)").a(new A.lV()),r.i("O<1>"))},
gck(){var s=this.c,r=A.N(s)
return new A.O(s,r.i("t(1)").a(new A.lW()),r.i("O<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.lV.prototype={
$1(a){var s=t.n4.a(a).b
return s===B.h||s===B.C},
$S:10}
A.lW.prototype={
$1(a){return t.n4.a(a).b===B.j},
$S:10}
A.bL.prototype={
A(){return"GraphValidationFailureKind."+this.b}}
A.bj.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ff.prototype={
A(){return"ResourceFormat."+this.b}}
A.c8.prototype={
A(){return"GraphStage."+this.b}}
A.aJ.prototype={
n(a){var s=this,r=s.b.n(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.ea.prototype={
A(){return"ResourceAccess."+this.b}}
A.M.prototype={}
A.eI.prototype={}
A.m5.prototype={
ae(a){var s,r,q,p,o,n,m=this
a.H()
s=null
try{r=t.h
s=A.vq(m.a,a.c,r.a(a.d.gN().b7(0)),r.a(a.f),a.b)}catch(q){if(A.ab(q) instanceof A.fi){++m.e
throw q}else throw q}p=new A.eI(s)
r=m.b
o=a.a
n=r.h(0,o)
r.l(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.f(n.b.a))
return p},
iK(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.al(s,s.r,s.e,a.$ti.i("al<1>")),r=this.a.a;s.m();)r.deleteProgram(A.f(s.d.b.a))}}
A.aH.prototype={
H(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.c(A.w("ProgramSource.id must not be empty",m))
s=t.S
r=A.a3(s)
for(q=this.d.gR(),q=q.gu(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.c(A.w('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.k(0,o))throw A.c(A.w('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a3(s)
for(s=this.e.gR(),s=s.gu(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.c(A.w('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.k(0,p))throw A.c(A.w('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.ma.prototype={}
A.aG.prototype={
a3(){var s=this
return A.qe(B.ci,s.f,B.aa,B.ab,!0,!0,!0,!0,s.r,B.ah,B.ai,s.d,s.e,!0,!1,!1)}}
A.mc.prototype={
jM(a,b){var s=this.ju(t.Q.a(a),!1),r=this.a,q=A.N(r)
return new A.mb(A.ap(new A.O(r,q.i("t(1)").a(new A.mg()),q.i("O<1>")),t.A),s)},
ju(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.e([],t.aW)
r=m.a
q=A.N(r)
p=q.i("O<1>")
o=A.Q(new A.O(r,q.i("t(1)").a(new A.mf()),p),p.i("n.E"))
m.iu(o,a,s)
m.iy(o,s)
m.ix(o,!1,s)
n=m.iB(o,s)
m.iz(o,n,s)
m.iA(o,s)
m.iw(o,n,s)
m.iv(o,s)
return s},
iu(a,b,c){var s,r,q,p
t.O.a(a)
t.Q.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.D.cX(b)
if(p.a!==0)B.a.k(c,new A.bj(B.dM,q.a,"missing capabilities: "+p.aU(0,", ")))}},
iy(a,b){var s,r,q,p,o,n,m
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbA(),o=J.K(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.k(b,new A.bj(B.dH,n,"reads multisampled resource "+m.n(0)+" directly; resolve before sampling"))}}},
ix(a,b,c){var s,r,q,p,o,n,m,l
t.O.a(a)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.C)B.a.k(c,new A.bj(B.dK,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
iB(a,b){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.a.a(b)
s=A.x(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gck(),n=J.K(o.a),o=new A.P(n,o.b,o.$ti.i("P<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.k(b,new A.bj(B.dG,m,l.n(0)+" already written by "+j.a))
continue}s.l(0,k,p)}}return s},
iz(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gbA(),p=J.K(q.a),q=new A.P(p,q.b,q.$ti.i("P<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.C)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.k(c,new A.bj(B.bb,o,"reads "+n.n(0)+" but no pass writes that version"))
continue}if(B.a.c8(a,m)>s)B.a.k(c,new A.bj(B.bb,o,"reads "+n.n(0)+" before writer "+m.a+" runs"))}}},
iA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbA(),o=J.K(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.C)continue
for(l=q.gck(),k=J.K(l.a),l=new A.P(k,l.b,l.$ti.i("P<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.k(b,new A.bj(B.dJ,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
iw(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.O.a(a)
t.iE.a(b)
t.a.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gbA(),o=J.K(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.C)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gck().kn(0,new A.me(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.k(c,new A.bj(B.dI,n,"reads "+l.n(0)+" but writer "+k.a+" produced "+j.n(0)))}}},
iv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.O.a(a)
t.a.a(b)
s=t.S
r=A.x(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gck(),o=J.K(p.a),p=new A.P(o,p.b,p.$ti.i("P<1>"));p.m();){n=o.gp().a
r.l(0,n.a+"#"+n.f,q)}m=J.hY(p,t.nO)
for(l=0;l<p;++l)m[l]=A.a3(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gbA(),p=J.K(s.a),s=new A.P(p,s.b,s.$ti.i("P<1>"));s.m();){o=p.gp()
if(o.b===B.C)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.d(m,k)
m[k].k(0,q)}}p=t.y
j=A.bT(s,!1,!1,p)
s=a.length
i=A.bT(s,!1,!1,p)
h=new A.md(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.d(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.d(a,q)
B.a.k(b,new A.bj(B.dL,a[q].a,"participates in a resource dependency cycle"))}}}}
A.mg.prototype={
$1(a){t.A.a(a)
return A.p9()},
$S:6}
A.mf.prototype={
$1(a){t.A.a(a)
return A.p9()},
$S:6}
A.me.prototype={
$1(a){var s=t.n4.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:10}
A.md.prototype={
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
r=A.je(r,r.r,A.o(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.l(n,a,!1)
B.a.l(s,a,!0)
return!1},
$S:21}
A.mb.prototype={}
A.dz.prototype={$ibl:1}
A.fc.prototype={
bS(a){var s,r,q,p,o,n,m
if(!B.y.ga2(0))A.k(A.w("Transform.translation must be finite: "+B.y.n(0),null))
s=!1
if(isFinite(0))s=isFinite(1)
if(!s)A.k(A.w("Transform.rotation must be finite: "+B.ae.n(0),null))
if(!isFinite(1))A.k(A.w(u.u,null))
s=this.a.bl(a.a).d
r=a.c.aA()
q=s.a
p=q.a
o=q.b
q=q.c
s=s.b
n=s.a
m=s.b
s=s.c
return A.dN(new A.V(A.e([new A.B(p,o,q),new A.B(n,o,q),new A.B(p,m,q),new A.B(n,m,q),new A.B(p,o,s),new A.B(n,o,s),new A.B(p,m,s),new A.B(n,m,s)],t.k),t.pc.a(r.gbB()),t.mz))},
gdD(){return new A.c2(this.kB(),t.fJ)},
kB(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gdD(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.b2(),n=o.$ti,o=new A.br(o.a(),n.i("br<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.m()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
i=g.c
i.H()
f=k.a(g.a)
m.aq(f)
f=f.a
if(!(f>=0&&f<j.length)){A.d(j,f)
r=1
break}e=j[f].c
f=(e==null?l.a(e):e).d
i=i.aA()
f=f.gbW()
d=A.N(f)
r=5
return a.b=new A.dz(h,g,A.dN(new A.V(f,d.i("B(1)").a(i.gbB()),d.i("V<1,B>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$iuZ:1}
A.mi.prototype={
$3(a,b,c){return new A.c9(A.a(a),A.a(b),A.bE(c))},
$S:34}
A.o9.prototype={
$1(a){var s=this.a.w.a.kZ(a),r=s.b!=null,q=r?s.d:s.e
return new A.fe(s.c,r,q)},
$S:28}
A.oa.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.v(0,a))return this.b.x.gp().hv(a)
if(b!=null&&s.v(0,b))return this.b.x.gp().hv(b)
throw A.c(A.l("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:36}
A.o7.prototype={
$0(){return this.a.$1("shadowMap")},
$S:2}
A.o1.prototype={
$0(){return null},
$S:38}
A.o6.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:2}
A.nY.prototype={
$0(){return this.a.at.a},
$S:39}
A.nZ.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:2}
A.o8.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:2}
A.o5.prototype={
$0(){return this.a.$1("sceneColor")},
$S:2}
A.nW.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:2}
A.nX.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:2}
A.o2.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:2}
A.o3.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:2}
A.o4.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.j()
return s},
$S:2}
A.o0.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:2}
A.o_.prototype={
$0(){return this.a.at.w},
$S:40}
A.nE.prototype={}
A.jj.prototype={$iuY:1}
A.j7.prototype={$iuj:1}
A.mr.prototype={
dM(a,b){var s,r
if(this.r)A.k(A.l("resource library is disposed"))
s=this.a
a.H()
r=s.b.bk(a,b)
s.c.l(0,r.a,s.cP(a))
this.d.k(0,r)
return r},
dL(a){var s,r=null
if(this.r)A.k(A.l("resource library is disposed"))
if(a.a.length===0)A.k(A.w("MaterialDefinition.key must not be empty",r))
if(!isFinite(0))A.k(A.w("MaterialDefinition.emissiveStrength must be >= 0: 0",r))
if(a.w===0||a.x===0)A.k(A.w("MaterialDefinition uv scale must not be zero",r))
if(!isFinite(0.5))A.k(A.w("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",r))
s=this.b.a.bk(a,r)
this.e.k(0,s)
return s},
hB(a,b,c){var s
if(this.r)A.k(A.l("resource library is disposed"))
s=this.c.b.bk(new A.cn(new A.hL(c,b,1,!1,B.V,B.V,B.b8),A.bT(1,null,!1,t.nh),!1),a)
this.f.k(0,s)
return s},
bm(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.r)return
s=i.f
r=A.Q(s,A.o(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.aj(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.b4(k)}r=i.e
q=A.Q(r,A.o(r).c)
p=q.length
o=i.b.a
l=0
for(;l<q.length;q.length===p||(0,A.r)(q),++l)o.b4(q[l])
q=i.d
p=A.Q(q,A.o(q).c)
o=p.length
n=i.a
l=0
for(;l<p.length;p.length===o||(0,A.r)(p),++l)n.b4(p[l])
s.J(0)
r.J(0)
q.J(0)
i.r=!0}}
A.mx.prototype={
gao(){var s=this.w
return s==null?A.k(A.l("renderer is not initialized")):s},
ho(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.au)throw A.c(A.l("renderer can only be initialized once"))
a.H()
b.H()
s=m.a
if(s.b===B.M)throw A.c(A.l("renderer device is context lost"))
m.e=B.f5
try{m.r=s.hy()
r=m.b
q=A.lS(a)
p=r.a
if(p.a!=null)A.k(A.l("configuration state is already initialized"))
a.H()
p.a=a
A.lS(a)
p.d=1
r.b.hn(q)
r=A.uD()
m.w=new A.mr(A.uE(s),r,A.v8(s),A.a3(t.l0),A.a3(t.fP),A.a3(t.lu))
r=new A.it()
p=new A.l_(s,r)
q=A.lS(a)
o=p.ei(q,a)
r.hn(q)
p.c=new A.im(new A.m_(q),o)
m.x=p
m.y=new A.m5(s,A.x(t.N,t.gY))
m.as=a
A.ry(m)
m.e=B.av}catch(n){s=m.y
if(s!=null){r=s.b
s.iK(new A.aR(r,A.o(r).i("aR<2>")))
r.J(0)}s=m.x
if(s!=null)s.bm()
s=m.w
if(s!=null)s.bm()
m.w=null
m.e=B.au
throw n}return A.p_(t.H)},
kd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.bK()
s=a3.at
r=a3.ax
if(s==null||r==null)throw A.c(A.l("renderer.endFrame called without an active frame"))
k=a3.c
if(k.b!==B.ak)A.k(A.l("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.mJ(j,0,A.dH(k.c,"count",t.S),A.N(j).c).b8(0,!1)
k.b=B.ds
q=i
try{A.ws(a3,r,s)
k=r.gdD()
j=t.p9
h=k.$ti
k=A.Q(A.i4(k,h.i("b2(n.E)").a(new A.my()),h.i("n.E"),j),j)
p=k
J.tB(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.r)(p),++g){m=p[g]
j=a3.w.a
h=m.a
f=h.a
e=j.c.h(0,f)
if(e==null)A.k(A.d5(B.an,h))
j=j.b
d=j.$ti
j.aq(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.d(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.K(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.U()
n=j+h}p=s.e
k=J.aQ(o)
j=n
h=J.aQ(o)
f=a3.w
d=f.a.gbw()
f=f.c.gbw()
c=a3.w
c.a.gbw()
c.c.gbw()
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
return new A.kN(p,k,j,h,d+f,a+a1+a2,b+a0+c)}finally{a3.ax=a3.at=null}},
je(){var s,r,q,p=this
if(p.e!==B.bB)return
if(p.a.b===B.M)throw A.c(A.l("renderer context remains lost"))
s=p.w
if(s.r)A.k(A.l("resource library is disposed"))
s.a.dN()
s.c.dN()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.k(A.l("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.k(A.l("GPU resource adapter is not initialized"))
s.c=new A.im(q.a,s.ei(A.lS(r),r))
s=p.y
s.c=null
s.b.J(0)
A.ry(p)
p.e=B.av},
bK(){var s=this.e
if(s!==B.av)throw A.c(A.l("renderer is not ready: "+s.b))
if(this.a.b===B.M){this.e=B.bB
throw A.c(A.l("renderer context lost"))}}}
A.my.prototype={
$1(a){return t.os.a(a).b},
$S:41}
A.b0.prototype={
F(a,b){var s,r=this
t.nL.a(b)
s=B.c.F(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.F(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.F(r.c.a,b.c.a)
if(s!==0)return s
return B.c.F(r.d,b.d)},
$iaw:1}
A.aY.prototype={
F(a,b){var s
t.dP.a(b)
s=B.d.F(b.a,this.a)
if(s!==0)return s
return B.c.F(this.b,b.b)},
$iaw:1}
A.aq.prototype={}
A.oW.prototype={
$2(a,b){var s=t.p
return s.a(a).a.F(0,s.a(b).a)},
$S:42}
A.oX.prototype={
$1(a){return t.p.a(a).b},
$S:43}
A.oU.prototype={
$2(a,b){var s=t.c
return s.a(a).a.F(0,s.a(b).a)},
$S:44}
A.oV.prototype={
$1(a){return t.c.a(a).b},
$S:45}
A.kn.prototype={}
A.h9.prototype={
gbW(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.e([new A.B(o,n,p),new A.B(r,n,p),new A.B(o,q,p),new A.B(r,q,p),new A.B(o,n,s),new A.B(r,n,s),new A.B(o,q,s),new A.B(r,q,s)],t.k)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.dg.prototype={}
A.e2.prototype={
A(){return"FrustumTest."+this.b}}
A.kO.prototype={
la(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.dt:B.du}}
A.kP.prototype={
$4(a,b,c,d){var s=new A.B(a,b,c),r=new A.dg(s,d),q=Math.sqrt(s.gbv())
if(q<1e-9)s=r
else{s=1/q
s=new A.dg(new A.B(a*s,b*s,c*s),d/q)}return s},
$S:46}
A.cd.prototype={
V(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.d(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.d(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.d(h,j)
h[j]=l}return new A.cd(h)},
hD(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.B(k,j,i):new A.B(k/h,j/h,i/h)},
hu(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
return new A.cd(h)},
ga2(a){return B.w.ag(this.a,new A.lJ())},
n(a){return"Mat4("+A.q(this.a)+")"}}
A.lJ.prototype={
$1(a){return isFinite(A.h_(a))},
$S:12}
A.m7.prototype={
n(a){return"Quat(0, 0, 0, 1)"}}
A.mR.prototype={
H(){if(!B.y.ga2(0))throw A.c(A.w("Transform.translation must be finite: "+B.y.n(0),null))
var s=!1
if(isFinite(0))s=isFinite(1)
if(!s)throw A.c(A.w("Transform.rotation must be finite: "+B.ae.n(0),null))
if(!isFinite(1))throw A.c(A.w(u.u,null))},
aA(){var s,r,q,p,o,n,m,l,k=t.n,j=A.qx(A.e([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],k)).a,i=j.length
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
return A.qx(A.e([s,r,q,0,p,o,n,0,m,l,j[10],0,0,0,0,1],k))},
n(a){return"Transform("+B.y.n(0)+", "+B.ae.n(0)+", scale=1)"}}
A.B.prototype={
bn(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aN(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.B(s*r-q*p,q*o-n*r,n*p-s*o)},
gbv(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbv())},
ga2(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
gac(){var s=this,r=Math.sqrt(s.gbv())
return r<1e-9?B.y:new A.B(s.a/r,s.b/r,s.c/r)},
S(a,b){if(b==null)return!1
return b instanceof A.B&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gE(a){return A.ce(this.a,this.b,this.c,B.k)},
n(a){return"Vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.fu.prototype={
A(){return"_BloomBlurAxis."+this.b}}
A.eG.prototype={
gab(){return this.f},
a7(a,b){B.a.k(a.a,new A.ai(this.f,B.z,A.e([new A.M(this.x,B.h),new A.M(this.y,B.j)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aH(s.e,s.b,s.c,B.p,B.bu,B.bq)),q=A.c1(s.d),p=t.n,o=s.y,n=s.r===B.cf?new Float32Array(A.a0(A.e([1/o.c,0],p))):new Float32Array(A.a0(A.e([0,1/o.d],p)))
return A.e([new A.iZ(new A.aG(s.f,A.e([new A.M(s.x,B.h),new A.M(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,n,o.a)],t.u)},
$ia7:1}
A.iZ.prototype={
a8(a){return},
$iX:1,
gT(){return this.a}}
A.hi.prototype={
gab(){return"bloomComposite"},
a7(a,b){B.a.k(a.a,new A.ai("bloomComposite",B.z,A.e([B.c0,B.bV,new A.M($.oY(),B.j)],t.C)))},
a6(a){var s=this,r="bloomComposite",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.ey,B.el)),p=A.c1(s.d)
return A.e([new A.j_(new A.aG(r,A.e([B.c0,B.bV,new A.M($.oY(),B.j)],t.C),!1,!1,!0,!1),q,p,s.e)],t.u)},
$ia7:1}
A.j_.prototype={
a8(a){return},
$iX:1,
gT(){return this.a}}
A.hw.prototype={
gab(){return"depthPrepass"},
a7(a,b){B.a.k(a.a,new A.ai("depthPrepass",B.dE,A.e([B.bW],t.C)))},
a6(a){var s=this,r="depthPrepass",q=s.a.ae(new A.aH(r,s.b,s.c,B.bt,B.br,B.e7))
return A.e([new A.j2(new A.aG(r,A.e([B.bW],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
$ia7:1}
A.j2.prototype={
a8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=u.k,e=a.b,d=a.c,c=d.e,b=e.a
A.bN(b,a.af("sceneDepth").b)
A.b6(b,g.a.a3())
A.eh(b,B.ag,1,0,0,0)
A.cK(b,g.b.b)
A.z(b,"uVertexSnapGrid",new A.D(B.e,c.y))
A.z(b,"uAlbedo",B.F)
for(s=d.a,r=s.length,d=d.c.c.a,q=g.c,p=c.x,o=v.G,n=b.a,m=0;m<s.length;s.length===r||(0,A.r)(s),++m){l=s[m]
k=l.a.b
A.z(b,"uViewProjection",new A.D(B.o,new Float32Array(A.a0(d))))
A.z(b,"uModel",new A.D(B.o,new Float32Array(A.a0(k.c.aA().a))))
g.iL(e,k.b,p)
j=q.$1(k.a)
k=j.a
if(b.b!==B.f)A.k(A.l(f))
n.bindVertexArray(A.f(k.a))
k=j.b
i=j.c
h=l.b.length
if(k){if(b.b!==B.f)A.k(A.l(f))
n.drawElementsInstanced.apply(n,[A.a(o.WebGL2RenderingContext.TRIANGLES),i,A.a(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,h])}else{if(b.b!==B.f)A.k(A.l(f))
n.drawArraysInstanced(A.a(o.WebGL2RenderingContext.TRIANGLES),0,i,h)}}},
iL(a,b,c){var s,r=this.d.$1(b),q=a.a
A.bq(q,0,t._.a(this.e.$1(r.b)))
A.z(q,"uAlphaCutoff",new A.D(B.e,0))
A.z(q,"uAffineWarpStrength",new A.D(B.e,0))
s=this.a.a3()
A.b6(q,r.at?s.dW(!1):s)},
$iX:1,
gT(){return this.a}}
A.fw.prototype={
A(){return"_DofBlurAxis."+this.b}}
A.eL.prototype={
gab(){return this.f},
a7(a,b){B.a.k(a.a,new A.ai(this.f,B.z,A.e([new A.M(this.w,B.h),new A.M(this.x,B.j)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aH(s.e,s.b,s.c,B.p,B.bu,B.bq)),q=A.c1(s.d),p=t.n,o=s.x,n=s.r===B.cg?new Float32Array(A.a0(A.e([1/o.c,0],p))):new Float32Array(A.a0(A.e([0,1/o.d],p)))
return A.e([new A.j3(new A.aG(s.f,A.e([new A.M(s.w,B.h),new A.M(o,B.j)],t.C),!1,!1,!1,!1),r,q,s.y,n,o.a)],t.u)},
$ia7:1}
A.j3.prototype={
a8(a){return},
$iX:1,
gT(){return this.a}}
A.hA.prototype={
gab(){return"dofComposite"},
a7(a,b){B.a.k(a.a,new A.ai("dofComposite",B.z,A.e([new A.M(this.z,B.h),B.bZ,B.bT],t.C)))},
a6(a){var s=this,r="dofComposite",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.ex,B.e6)),p=A.c1(s.d)
return A.e([new A.j4(new A.aG(r,A.e([new A.M(s.z,B.h),B.bZ,B.bT],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
$ia7:1}
A.j4.prototype={
a8(a){var s,r=this,q=a.af("dofOutput"),p=r.r.$0(),o=a.b.a
A.bN(o,q.b)
A.b6(o,r.a.a3())
A.cK(o,r.b.b)
s=t._
A.bq(o,0,s.a(r.d.$0()))
A.z(o,"uSharp",B.F)
A.bq(o,1,s.a(r.e.$0()))
A.z(o,"uBlurred",B.a2)
A.bq(o,2,s.a(r.f.$0()))
A.z(o,"uSceneDepth",B.ca)
A.z(o,"uNear",new A.D(B.e,p.f))
A.z(o,"uFar",new A.D(B.e,p.r))
A.z(o,"uFocusDistance",new A.D(B.e,r.w))
A.z(o,"uFocusRange",new A.D(B.e,r.x))
A.z(o,"uStrength",new A.D(B.e,0))
A.bO(o,r.c)
A.dt(o,3,0)},
$iX:1,
gT(){return this.a}}
A.hO.prototype={
gab(){return"grade"},
a7(a,b){B.a.k(a.a,new A.ai("grade",B.z,A.e([new A.M(this.r,B.h),B.bR],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aH("grade",s.b,s.c,B.p,B.ew,B.em)),q=A.c1(s.d),p=s.r
return A.e([new A.j9(new A.aG("grade",A.e([new A.M(p,B.h),B.bR],t.C),!1,!1,!1,!1),r,q,s.e,16,p)],t.u)},
$ia7:1}
A.j9.prototype={
a8(a){var s=this,r=a.af(s.f.a),q=a.b.a
A.bN(q,a.af("gradeOutput").b)
A.b6(q,s.a.a3())
A.cK(q,s.b.b)
A.bq(q,0,r.b)
A.z(q,"uScene",B.F)
A.bq(q,1,t._.a(s.d.$0()))
A.z(q,"uLut",B.a2)
A.z(q,"uLutSize",new A.D(B.e,s.e))
A.z(q,"uStrength",new A.D(B.e,a.c.e.w))
A.bO(q,s.c)
A.dt(q,3,0)},
$iX:1,
gT(){return this.a}}
A.hk.prototype={}
A.hj.prototype={
af(a){var s=this.a.h(0,a)
if(s==null)throw A.c(A.l('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$iuX:1}
A.f9.prototype={
gab(){return"present"},
a7(a,b){B.a.k(a.a,new A.ai("present",B.dF,A.e([new A.M(this.f,B.h)],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aH("present",s.b,s.c,B.p,B.eE,B.l)),q=A.c1(s.d),p=s.f
return A.e([new A.jk(new A.aG("present",A.e([new A.M(p,B.h)],t.C),!1,!1,!1,!1),r,q,p)],t.u)},
$ia7:1}
A.jk.prototype={
a8(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bN(q,null)
A.b6(q,s.a.a3())
A.cK(q,s.b.b)
A.bO(q,s.c)
A.bq(q,0,r.b)
A.dt(q,3,0)},
$iX:1,
gT(){return this.a}}
A.ip.prototype={
gab(){return"ps1Quantize"},
a7(a,b){B.a.k(a.a,new A.ai("ps1Quantize",B.z,A.e([new A.M(this.e,B.h),B.bY],t.C)))},
a6(a){var s=this,r="ps1Quantize",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.eA,B.e1)),p=A.c1(s.d),o=s.e
return A.e([new A.jl(new A.aG(r,A.e([new A.M(o,B.h),B.bY],t.C),!1,!1,!1,!1),q,p,o)],t.u)},
$ia7:1}
A.jl.prototype={
a8(a){var s=this,r=a.af(s.d.a),q=a.b.a
A.bN(q,a.af("ps1Output").b)
A.b6(q,s.a.a3())
A.cK(q,s.b.b)
A.bq(q,0,r.b)
A.z(q,"uScene",B.F)
A.z(q,"uQuantizationBits",new A.D(B.e,a.c.e.z))
A.z(q,"uDitherStrength",new A.D(B.e,0))
A.bO(q,s.c)
A.dt(q,3,0)},
$iX:1,
gT(){return this.a}}
A.dn.prototype={}
A.iw.prototype={
gab(){return"shadow"},
a7(a,b){B.a.k(a.a,new A.ai("shadowCaster",B.dD,A.e([B.bS],t.C)))},
a6(a){var s=this,r="shadowCaster",q=s.a.ae(new A.aH(r,s.b,s.c,B.bt,B.br,B.ek))
return A.e([new A.jn(new A.aG(r,A.e([B.bS],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w)],t.u)},
$ia7:1}
A.jn.prototype={
a8(a){var s,r,q,p,o=this,n=a.af("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bN(s,n.b)
A.b6(s,o.a.a3())
A.eh(s,B.ag,1,0,0,0)
return}r=A.qI(l)
o.r.$1(r)
s=m.a
A.bN(s,n.b)
A.b6(s,o.a.a3())
A.eh(s,B.ag,1,0,0,0)
A.cK(s,o.b.b)
A.z(s,"uAlbedo",B.F)
for(s=a.c.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.iN(m,s[p],r)},
eL(a,b){var s,r=this.d.$1(b),q=a.a
A.bq(q,0,t._.a(this.e.$1(r.b)))
A.z(q,"uAlphaCutoff",new A.D(B.e,0))
s=this.a.a3()
A.b6(q,r.at?s.dW(!1):s)},
iN(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dz){s=b.b
n.eG(a,s.c,c)
n.eL(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bO(s,r.a)
q=r.b
p=r.c
if(q)A.pi(s,p,0)
else A.dt(s,p,0)}else if(b instanceof A.d7){s=b.a.b
n.eG(a,s.c,c)
n.eL(a,s.b)
r=n.c.$1(s.a)
s=a.a
A.bO(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pj(s,p,o,0)
else A.ph(s,p,0,o)}else throw A.c(A.w("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dK(b).n(0),null))},
eG(a,b,c){var s=a.a
A.z(s,"uModel",new A.D(B.o,new Float32Array(A.a0(b.aA().a))))
A.z(s,"uLightViewProjection",new A.D(B.o,new Float32Array(A.a0(c.a.a))))},
$iX:1,
gT(){return this.a}}
A.oq.prototype={
$1(a){return this.a.a=a},
$S:49}
A.or.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:50}
A.ix.prototype={
gab(){return"shadowedWorld"},
a7(a,b){var s=A.e([B.bX],t.C)
if(this.z)s.push(B.c_)
s.push(B.a1)
B.a.k(a.a,new A.ai("shadowedWorld",B.ba,s))},
a6(a){var s=this,r="shadowedWorld",q=s.a.ae(new A.aH(r,s.b,s.c,B.eD,B.es,B.e_)),p=A.e([B.bX],t.C)
if(s.z)p.push(B.c_)
p.push(B.a1)
return A.e([new A.jo(new A.aG(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.Q,s.as)],t.u)},
$ia7:1}
A.jo.prototype={
a8(a){var s,r,q,p,o,n,m,l=this,k=null,j=a.af("sceneColor"),i=a.b,h=a.c,g=h.c,f=h.d,e=h.e,d=l.r.$0(),c=i.a
A.bN(c,j.b)
A.b6(c,l.a.a3())
A.eh(c,B.aV,1,0,0,0)
A.cK(c,l.b.b)
A.z(c,"uAlbedo",B.F)
s=t._
A.bq(c,1,s.a(l.f.$0()))
A.z(c,"uShadowMap",B.a2)
r=t.n
A.z(c,"uShadowMapTexelSize",new A.D(B.c9,new Float32Array(A.a0(A.e([0.001953125,0.001953125],r)))))
A.bq(c,2,s.a(l.x.$0()))
A.z(c,"uSsao",B.ca)
A.z(c,"uVertexSnapGrid",new A.D(B.e,e.y))
A.z(c,"uSceneColorSize",new A.D(B.c9,new Float32Array(A.a0(A.e([l.y,l.z],r)))))
A.z(c,"uViewProjection",new A.D(B.o,new Float32Array(A.a0(g.c.a))))
A.z(c,"uView",new A.D(B.o,new Float32Array(A.a0(g.a.a))))
A.z(c,"uLightViewProjection",new A.D(B.o,new Float32Array(A.a0(d.a.a))))
s=f.b
A.z(c,"uFogColor",new A.D(B.E,new Float32Array(A.a0(A.e([s.a,s.b,s.c],r)))))
A.z(c,"uFogStart",new A.D(B.e,f.c))
A.z(c,"uFogEnd",new A.D(B.e,f.d))
A.z(c,"uFogHeightFalloff",new A.D(B.e,0))
A.z(c,"uFogDensity",new A.D(B.e,0))
s=l.w.$0()==null
q=s?k:B.I
if(q==null)q=B.I
p=s?k:B.a3
if(p==null)p=B.a3
A.z(c,"uLightPosition",new A.D(B.E,new Float32Array(A.a0(A.e([q.a,q.b,q.c],r)))))
A.z(c,"uLightDirection",new A.D(B.E,new Float32Array(A.a0(A.e([p.a,p.b,p.c],r)))))
o=s?k:1
A.z(c,"uLightRange",new A.D(B.e,o==null?1:o))
o=s?k:0.3
if(o==null)o=0.3
A.z(c,"uLightInnerCos",new A.D(B.e,Math.cos(o)))
s=s?k:0.5
if(s==null)s=0.5
A.z(c,"uLightOuterCos",new A.D(B.e,Math.cos(s)))
n=f.r
A.z(c,"uAmbientColor",new A.D(B.E,new Float32Array(A.a0(A.e([n.a,n.b,n.c],r)))))
A.z(c,"uAmbientIntensity",new A.D(B.e,f.w))
for(c=h.a,s=c.length,r=e.x,m=0;m<c.length;c.length===s||(0,A.r)(c),++m)l.eM(i,c[m],r)
for(h=h.b,c=h.length,m=0;m<h.length;h.length===c||(0,A.r)(h),++m)l.eM(i,h[m],r)},
eM(a,b,c){var s,r,q,p,o,n=this
if(b instanceof A.dz){s=b.b
n.eN(a,s.c)
n.eH(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bO(s,r.a)
q=r.b
p=r.c
if(q)A.pi(s,p,0)
else A.dt(s,p,0)}else if(b instanceof A.d7){s=b.a.b
n.eN(a,s.c)
n.eH(a,s.b,s.e,s.f,c)
r=n.c.$1(s.a)
s=a.a
A.bO(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pj(s,p,o,0)
else A.ph(s,p,0,o)}else throw A.c(A.w("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dK(b).n(0),null))},
eH(a,b,c,d,e){var s,r=this.d.$1(b),q=a.a
A.bq(q,0,t._.a(this.e.$1(r.b)))
A.z(q,"uAlphaCutoff",new A.D(B.e,0))
A.z(q,"uOpaqueCoverage",new A.D(B.e,c===B.aj?0:1))
A.z(q,"uAffineWarpStrength",new A.D(B.e,0))
A.z(q,"uMaterialTint",new A.D(B.E,new Float32Array(A.a0(A.e([r.c,r.d,r.e],t.n)))))
A.z(q,"uEmissiveStrength",new A.D(B.e,0))
A:{s=null
if(B.aj===c){switch(d.a){case 0:s=B.cH
break
case 1:s=B.cG
break}break A}if(B.S===c||B.cF===c){s=this.a.a3()
break A}}A.b6(q,r.at?s.dW(!1):s)},
eN(a,b){var s=b.aA(),r=a.a
A.z(r,"uModel",new A.D(B.o,new Float32Array(A.a0(s.a))))
A.z(r,"uNormalMatrix",new A.D(B.o,new Float32Array(A.a0(s.hu().a))))},
$iX:1,
gT(){return this.a}}
A.iA.prototype={
gab(){return"ssaoOcclusion"},
a7(a,b){B.a.k(a.a,new A.ai("ssaoOcclusion",B.b9,A.e([B.bO],t.C)))},
a6(a){var s=this,r="ssaoOcclusion",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.ez,B.dZ)),p=A.c1(s.d)
return A.e([new A.jr(new A.aG(r,A.e([B.bO],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
$ia7:1}
A.jr.prototype={
a8(a){var s=a.b.a
A.bN(s,a.af("ssaoRaw").b)
A.b6(s,this.a.a3())
A.eh(s,B.aU,1,1,1,1)
return},
$iX:1,
gT(){return this.a}}
A.iz.prototype={
gab(){return"ssaoBlur"},
a7(a,b){B.a.k(a.a,new A.ai("ssaoBlur",B.b9,A.e([B.bU,B.bN],t.C)))},
a6(a){var s=this,r="ssaoBlur",q=s.a.ae(new A.aH(r,s.b,s.c,B.p,B.et,B.ep)),p=A.c1(s.d)
return A.e([new A.jq(new A.aG(r,A.e([B.bU,B.bN],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r)],t.u)},
$ia7:1}
A.jq.prototype={
a8(a){var s=a.b.a
A.bN(s,a.af("ssaoBlurred").b)
A.b6(s,this.a.a3())
A.eh(s,B.aU,1,1,1,1)
return},
$iX:1,
gT(){return this.a}}
A.iN.prototype={
gab(){return"vhs"},
a7(a,b){a.b.k(0,"vhsOutput")
B.a.k(a.a,new A.ai("vhs",B.z,A.e([new A.M(this.r,B.h),B.bQ,B.bP],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aH("vhs",s.b,s.c,B.p,B.eu,B.e2)),q=A.c1(s.d),p=s.r
return A.e([new A.jx(new A.aG("vhs",A.e([new A.M(p,B.h),B.bQ,B.bP],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p)],t.u)},
$ia7:1}
A.jx.prototype={
a8(a){var s,r=this,q=a.af(r.f.a),p=a.af("vhsOutput"),o=a.c.e,n=o.CW,m=o.as
if(n)m*=0.5
s=n?0:o.ch
n=a.b.a
A.bN(n,p.b)
A.b6(n,r.a.a3())
A.cK(n,r.b.b)
A.bq(n,0,q.b)
A.z(n,"uScene",B.F)
A.bq(n,1,t._.a(r.d.$0()))
A.z(n,"uHistory",B.a2)
A.z(n,"uTime",new A.D(B.e,r.e.$0()))
A.z(n,"uChromaWeight",new A.D(B.e,o.Q))
A.z(n,"uTrackingWeight",new A.D(B.e,m))
A.z(n,"uNoiseWeight",new A.D(B.e,o.at))
A.z(n,"uHeadSwitchWeight",new A.D(B.e,o.ax))
A.z(n,"uDropoutWeight",new A.D(B.e,o.ay))
A.z(n,"uGhostWeight",new A.D(B.e,s))
A.bO(n,r.c)
A.dt(n,3,0)},
$iX:1,
gT(){return this.a}}
A.fe.prototype={}
A.iV.prototype={
gab(){return"world"},
a7(a,b){B.a.k(a.a,new A.ai("worldOpaqueTransparent",B.ba,A.e([B.a1],t.C)))},
a6(a){var s=this,r=s.a.ae(new A.aH("safeWorld",s.b,s.c,B.eC,B.p,B.dX))
return A.e([new A.jy(new A.aG("worldOpaqueTransparent",A.e([B.a1],t.C),!0,!0,!1,!0),r,s.d)],t.u)},
$ia7:1}
A.jy.prototype={
a8(a){var s,r,q,p,o,n=this,m=a.b,l=a.c,k=l.d,j=m.a
A.bN(j,a.af("sceneColor").b)
A.b6(j,n.a.a3())
A.eh(j,B.aV,1,0,0,0)
A.cK(j,n.b.b)
A.z(j,"uViewProjection",new A.D(B.o,new Float32Array(A.a0(l.c.c.a))))
s=k.x
r=s==null?null:s.a
if(r==null)r=B.I
q=t.n
A.z(j,"uLightDir",new A.D(B.E,new Float32Array(A.a0(A.e([r.a,r.b,r.c],q)))))
p=k.r
A.z(j,"uAmbientColor",new A.D(B.E,new Float32Array(A.a0(A.e([p.a,p.b,p.c],q)))))
A.z(j,"uAmbientIntensity",new A.D(B.e,k.w))
for(j=l.a,q=j.length,o=0;o<j.length;j.length===q||(0,A.r)(j),++o)n.el(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.el(m,l[o])},
el(a,b){var s,r,q,p,o,n=this
if(b instanceof A.d7){s=b.a.b
n.eJ(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bO(s,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)A.pj(s,p,o,0)
else A.ph(s,p,0,o)}else if(b instanceof A.dz){s=b.b
n.eJ(a,s.c)
r=n.c.$1(s.a)
s=a.a
A.bO(s,r.a)
q=r.b
p=r.c
if(q)A.pi(s,p,0)
else A.dt(s,p,0)}else throw A.c(A.w("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.dK(b).n(0),null))},
eJ(a,b){var s=b.aA(),r=a.a
A.z(r,"uModel",new A.D(B.o,new Float32Array(A.a0(s.a))))
A.z(r,"uNormalMatrix",new A.D(B.o,new Float32Array(A.a0(s.hu().a))))},
$iX:1,
gT(){return this.a}}
A.ki.prototype={
bC(a){var s,r,q
a.H()
s=A.a3(t.N)
r=a.w>=2
if(r)s.k(0,"bloom")
if(a.d>=1024&&r)s.k(0,"shadows")
if(a.f>=2)s.k(0,"msaa")
if(a.z||a.Q){s.k(0,"ssao")
s.k(0,"dof")}if(a.e>=3)s.k(0,"material-array")
r=s.a
if(r>=5)q=B.at
else q=r===0?B.ar:B.as
return new A.dh(q,s)},
hO(a){var s,r=this.bC(a).a
A:{if(B.at===r){s=B.f3
break A}if(B.as===r){s=B.f2
break A}s=B.Y
break A}return s}}
A.hK.prototype={
A(){return"GpuBufferUsage."+this.b}}
A.eR.prototype={
A(){return"GpuBufferKind."+this.b}}
A.hM.prototype={
A(){return"GpuTextureFilter."+this.b}}
A.hN.prototype={
A(){return"GpuTextureWrap."+this.b}}
A.hJ.prototype={}
A.hL.prototype={}
A.d4.prototype={
A(){return"GpuTargetAttachment."+this.b}}
A.eT.prototype={}
A.eS.prototype={
A(){return"GpuDeviceStatus."+this.b}}
A.dm.prototype={
A(){return"ShaderCompileStage."+this.b}}
A.fi.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.cH.prototype={
A(){return"UniformType."+this.b}}
A.D.prototype={}
A.dV.prototype={
A(){return"ClearMask."+this.b}}
A.hx.prototype={$iu2:1}
A.im.prototype={
hv(a){var s=this.b.h(0,a)
if(s==null)throw A.c(A.l("resource is not in candidate: "+a))
return s}}
A.l_.prototype={
gp(){var s=this.c
if(s==null)throw A.c(A.l("GPU resource adapter is not initialized"))
return s},
bm(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.iJ(s.b)
r.b.bm()
r.c=null
r.e=!0},
ei(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t._,a8=A.x(a6,a7),a9=A.e([],t.l2)
try{for(p=b0.a.a,p=A.je(p,p.r,A.o(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.m();){j=p.d
s=j==null?m.a(j):j
if(J.a6(s,"sceneColor#1")){j=J.aP(a8,"sceneColor")
j.toString
J.bR(a8,s,j)
continue}j=this.iM(s,b1)
if(n.b!==B.f)A.k(A.l(u.k))
i=j.a
if(i<=0||j.b<=0)A.k(A.w("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.i(l.createFramebuffer())
if(h==null)A.k(A.l("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.al
if(f&&!j.e)A.k(A.w("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.b7||g===B.dB
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
if(g!==a0){A.pm(n,h,d,c,a1,a2,b,a)
A.k(A.l("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.cQ(new A.fV(h,d,c,a1,a2,b,a,i,j.b))
J.h8(a9,r)
J.bR(a8,s,r)}a6=A.dX(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.N(a6).i("fg<1>"),a6=new A.fg(a6,p),a6=new A.cb(a6,a6.gq(0),p.i("cb<a1.E>")),o=this.a,n=t.jg,p=p.i("a1.E");a6.m();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.pm(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
iM(a,b){var s,r,q,p,o=b.b,n=b.c
if(a==="shadowMap")return new A.eT(512,512,1,B.al,!0)
if(a==="sceneDepth")return new A.eT(o,n,1,B.al,!0)
s=B.b.W(a,"ssao")||B.b.W(a,"bloomBlur")||B.b.W(a,"dofBlur")
r=s?o/2|0:o
q=s?n/2|0:n
p=a==="sceneColor"
return new A.eT(r,q,1,p?B.b7:B.dA,p)},
iJ(a){var s,r,q,p,o,n=A.p5(t.f7.a(a).gap(),t._)
for(n=A.je(n,n.r,A.o(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.pm(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.ep.prototype={
A(){return"_SlotState."+this.b}}
A.cO.prototype={
sbj(a){this.c=this.$ti.i("1?").a(a)}}
A.bX.prototype={
bk(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.d(s,-1)
q=s.pop()}else{s=o.b
B.a.k(s,new A.cO(B.a8,n.i("cO<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.d(n,q)
p=n[q];++p.a
p.b=B.hc
p.sbj(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
cW(a){return this.bk(a,null)},
aq(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.c(A.d5(B.bd,a))
r=this.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.d5(B.be,a))
s=q.b
if(s===B.a9||s===B.a8)throw A.c(A.d5(B.an,a))},
bl(a){var s,r,q=this.$ti
q.c.a(a)
this.aq(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.d(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
dR(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.aq(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.d(r,s)
r[s].sbj(b)},
b4(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.c(A.d5(B.bd,a))
r=p.b
if(!(s>=0&&s<r.length))return A.d(r,s)
q=r[s]
if(q.a!==a.b)throw A.c(A.d5(B.be,a))
r=q.b
if(r===B.a9||r===B.a8)throw A.c(A.d5(B.dN,a))
q.b=B.a9
q.sbj(null)
B.a.k(p.c,s);++p.e},
b2(){return new A.c2(this.kC(),this.$ti.i("c2<+(1,2)>"))},
kC(){var s=this
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
return a.b=new A.en(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.hg.prototype={
A(){return"BlendEquation."+this.b}}
A.cW.prototype={
A(){return"BlendFactor."+this.b}}
A.ht.prototype={
A(){return"CullFace."+this.b}}
A.hv.prototype={
A(){return"DepthFunc."+this.b}}
A.eM.prototype={
dW(a){var s=this
return A.qe(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.aA.prototype={
A(){return"StateField."+this.b}}
A.n9.prototype={
k7(a){var s,r=this.a
if(r==null)return A.lG(B.ej,t.dB)
s=A.a3(t.dB)
if(r.a!==a.a)s.k(0,B.aB)
if(r.b!==a.b)s.k(0,B.aC)
if(r.c!==a.c)s.k(0,B.aD)
if(r.d!==a.d)s.k(0,B.aE)
if(r.e!==a.e||r.f!==a.f)s.k(0,B.aF)
if(r.r!==a.r)s.k(0,B.aG)
if(r.w!==a.w)s.k(0,B.aH)
if(r.x!==a.x)s.k(0,B.aI)
return s}}
A.cQ.prototype={$ic7:1}
A.fW.prototype={}
A.fV.prototype={}
A.iU.prototype={
il(a){var s=this,r=A.f(s.a.canvas)
s.c=A.am(new A.n7(s))
s.d=A.am(new A.n8(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
hy(){var s=this,r=v.G,q=s.be(A.a(r.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),p=s.be(A.a(r.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),o=s.be(A.a(r.WebGL2RenderingContext.MAX_SAMPLES)),n=s.be(A.a(r.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),m=s.be(A.a(r.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),l=s.a,k=A.i(l.getExtension("EXT_texture_filter_anisotropic")),j=A.i(l.getExtension("EXT_disjoint_timer_query_webgl2")),i=A.i(l.getExtension("EXT_color_buffer_float")),h=A.i(l.getExtension("EXT_color_buffer_half_float")),g=A.i(l.getExtension("WEBGL_lose_context")),f=A.ct(l.getParameter(A.a(r.WebGL2RenderingContext.RENDERER))),e=A.ct(l.getParameter(A.a(r.WebGL2RenderingContext.VENDOR)))
r=typeof f=="string"?f:null
l=typeof e=="string"?e:null
return new A.m8("WebGL2",r,l,q,p,o,n,m,k!=null,j!=null,i!=null,h!=null,g!=null)},
be(a){var s=A.ct(this.a.getParameter(a))
return typeof s=="number"?B.d.aI(s):0},
$ium:1}
A.n7.prototype={
$1(a){A.f(a).preventDefault()
this.a.b=B.M},
$S:3}
A.n8.prototype={
$1(a){A.f(a)
this.a.b=B.f},
$S:3}
A.hz.prototype={
C(){var s=this
return A.S(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.he.prototype={
i9(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
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
hC(){var s=this.a
if(A.F(s.state)==="suspended")A.f(s.resume())},
jm(a){var s,r,q=this
if(B.b.W(a,"vo-")){s=q.x
s===$&&A.j()
return s}r=B.bw.h(0,a)
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
iV(){var s,r,q,p,o,n,m,l=this.a,k=A.cp(l.sampleRate),j=B.d.aH(k*2),i=A.f(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.dG()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.d(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dH(a,b){var s,r,q,p=this,o=p.as.h(0,a)
if(o==null)return
s=p.a
r=A.f(s.createBufferSource())
r.buffer=o
A.f(r.playbackRate).value=0.94+p.at.dG()*0.12
q=A.f(s.createGain())
A.f(q.gain).value=b
A.i(r.connect(q))
s=B.bw.h(0,a)
A.i(q.connect(p.jm(s==null?"transient":s)))
r.start()},
kR(a){return this.dH(a,1)},
cO(){return}}
A.k4.prototype={
$1(a){return this.hJ(t.q.a(a))},
hJ(a){var s=0,r=A.bc(t.b),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bd(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.af(A.aO(A.f(A.f(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.af(A.aO(A.f(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.af(A.aO(A.f(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.l(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ab(h)
A.f(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.q(l))
s=5
break
case 2:s=1
break
case 5:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$$1,r)},
$S:52}
A.kh.prototype={
dE(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.b(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.tA().aN(q).gac()
p.d=q
p.c=p.b.aN(q).gac()
p.a=a}}
A.kK.prototype={}
A.iD.prototype={}
A.kY.prototype={
iP(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.i(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.i(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.i(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.ct(s.getParameter(34047))
if(typeof p=="number")o.c=p},
cb(a,b,c,d,e,f){return this.kD(a,b,c,d,e,f)},
kD(a,b,c,a0,a1,a2){var s=0,r=A.bc(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cb=A.bd(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.f(A.f(j.document).createElement("img"))
m.src=a
s=7
return A.af(A.aO(A.f(m.decode()),t.X),$async$cb)
case 7:i=n.a
h=A.i(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aN(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.iP()
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
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$cb,r)},
cc(a,b,c){var s=!1
return this.kE(t.h.a(a),b,!1)},
kE(b0,b1,b2){var s=0,r=A.bc(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$cc=A.bd(function(b3,b4){if(b3===1){o.push(b4)
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
return A.af(A.aO(A.f(j.decode()),a1),$async$cc)
case 10:J.h8(l,j)
case 8:b0.length===a||(0,A.r)(b0),++a2
s=7
break
case 9:if(J.aQ(l)===0){a=A.l("texture array needs at least one layer")
throw A.c(a)}i=A.a(J.aP(l,0).width)
h=A.a(J.aP(l,0).height)
if(J.a6(i,0)||J.a6(h,0)||J.tC(l,new A.kZ(i,h))){a=A.l("texture-array layers must have matching nonzero dimensions")
throw A.c(a)}g=J.aQ(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.a4()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.jO(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.a4()
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
if(a7==null){a=A.l("could not create texture array")
throw A.c(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aN(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array storage failed (WebGL error 0x"+J.oZ(d,16)+")")
throw A.c(a)}c=0
for(;;){a1=c
a3=J.aQ(l)
if(typeof a1!=="number"){q=a1.cn()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.aP(l,c)])
d=A.a(a.getError())
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array layer "+A.q(c)+" failed (WebGL error 0x"+J.oZ(d,16)+")")
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
if(!J.a6(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.l("texture-array mip generation failed (WebGL error 0x"+J.oZ(d,16)+")")
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
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$cc,r)},
eO(a,b){var s=this.a,r=A.i(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.a6(A.ct(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.c(A.e_("shader compile failed: "+A.q(A.ru(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
ar(a,b){var s=v.G,r=this.eO(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.eO(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.i(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.a6(A.ct(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.c(A.e_("program link failed: "+A.q(A.ru(p,"getProgramInfoLog",o,t.w))))
return o},
ght(){var s=A.ct(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.aI(s):0},
dS(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.h(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.l(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.fb(0,c,B.c.i8(b.byteLength,p))*p
if(B.c.ah(o,4)!==0)A.k(A.w("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.tD(B.w.gjK(b),b.byteOffset+0*p,B.c.K(o,4)))}},
cN(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aN(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
cJ(a,b,c,d,e){var s,r=this.a,q=A.i(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aN(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
eQ(a,b,c){var s,r=this.a,q=A.i(r.createTexture())
q.toString
this.cN(q,a,b)
s=v.G
A.aN(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
ek(a,b){var s,r,q=this.a,p=A.i(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aN(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aN(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
dF(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.i(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.cJ(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.cJ(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.eQ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.eQ(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.cJ(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.ek(a,b)
if(d)h.drawBuffers(A.e([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.c(A.e_("framebuffer incomplete"))
return new A.iD(g,n,o,m,q,p,l,e,a,b)},
hs(a,b,c,d){return this.dF(a,b,c,d,0)},
kH(a,b,c,d){return this.dF(a,b,!0,c,d)},
aV(a,b,c){return this.dF(a,b,c,!1,0)},
cL(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aN(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
else s.renderbufferStorage(A.a(r.WebGL2RenderingContext.RENDERBUFFER),c,d,e)},
az(a,b,c){var s,r,q,p,o,n=this
if(a.x===b&&a.y===c)return
a.x=b
a.y=c
s=n.a
r=v.G
s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),a.a)
q=a.b
p=a.c
if(q!=null)n.cN(q,b,c)
if(p!=null)n.cN(p,b,c)
n.cL(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cL(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.cL(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.ek(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
l_(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aN(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aN(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aN(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.e([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
jV(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
aD(a){var s=this.a,r=A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),q=a==null,p=q?null:a.a
s.bindFramebuffer(r,p)
r=q?null:a.x
if(r==null)r=A.a(s.drawingBufferWidth)
q=q?null:a.y
if(q==null)q=A.a(s.drawingBufferHeight)
s.viewport(0,0,r,q)}}
A.kZ.prototype={
$1(a){A.f(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:53}
A.hR.prototype={
dQ(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].lo(a)}}
A.hT.prototype={
aG(a){if(this.f)return
A.qp(a,"requestPointerLock",t.X)},
j2(a){A.f(a)
if(A.aV(a.repeat))return
if(this.b.k(0,A.F(a.code)))this.c.k(0,A.F(a.code))},
j4(a){this.b.aj(0,A.F(A.f(a).code))},
j8(a){var s=this
A.f(a)
if(!s.f)return
s.d=s.d+s.es(a,"movementX")
s.e=s.e+s.es(a,"movementY")},
j6(a){var s=this
A.f(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
es(a,b){var s=A.rq(a[b])
if(s==null)s=null
return s==null?0:s}}
A.i5.prototype={}
A.dd.prototype={
gep(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gE(B.c.ci(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gE(B.c.ci(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
S(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.dd&&A.jN(r)===A.jN(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gE(a){return this.gep()}}
A.lL.prototype={
ig(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.l(0,r[q].gep(),q)}}
A.dp.prototype={
cg(a,b,c,d,e,f,g){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.w.hQ(s,0,m,l)
n.a=s}r=b.a5(0,a).aN(d.a5(0,a)).gac()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.fk(n.a,n.b,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=0+f
m=A.fk(n.a,m,b,r,q,p,o,0,1,l,0,0)
n.b=m
k=0+g
m=A.fk(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.fk(n.a,m,a,r,q,p,o,0,1,0,0,0)
n.b=m
l=A.fk(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.fk(n.a,l,d,r,q,p,o,0,1,0,k,0)},
aW(a,b,c,d,e){return this.cg(a,b,c,d,e,1,1)}}
A.mh.prototype={
iW(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.ar(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.y()
m.w=r
q=s.ar(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
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
iX(){var s
try{this.r=this.b.aV(384,216,!1)}catch(s){this.r=null}},
kY(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
p.aD(n)
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
p.aD(l)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),n.b)
q=o.ax
q===$&&A.j()
s.uniform2f(q,1/n.x,0)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
p.aD(m)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D),l.b)
s.uniform2f(q,0,1/n.y)
s.drawArrays(A.a(r.WebGL2RenderingContext.TRIANGLES),0,3)
return m.b}}
A.mq.prototype={
cA(a,b,c){var s,r,q
try{r=this.a.ar(b,c)
return r}catch(q){s=A.ab(q)
r=A.e_(a+": "+A.q(s))
throw A.c(r)}}}
A.mj.prototype={}
A.fy.prototype={}
A.js.prototype={}
A.jh.prototype={}
A.jf.prototype={}
A.mk.prototype={
ih(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.e([new A.dd(0,0,1,0),new A.dd(1,0,1,0),new A.dd(2,0,1,0)],t.mm),e=t.S
e=new A.lL(f,A.x(e,e))
e.ig(f)
h.dz=e
h.h_=1.9
h.dl=h.aR/h.aQ
r=J.hY(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.fy()
t.cu.a(r)
f=h.au
e=f.ar("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.ar(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.ar(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.ar(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.ar(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.a9!==$&&A.y()
h.a9=new A.mq(f,e,p,o,n,m)
h.b=t.d4.a(new A.ml(h))
h.eE()
h.eD()
o=h.al
p=A.i(o.getUniformLocation(m,"uTex"))
h.fs!==$&&A.y()
h.fs=p
p=A.i(o.getUniformLocation(m,"uNoise"))
h.ft!==$&&A.y()
h.ft=p
p=A.i(o.getUniformLocation(m,"uTime"))
h.f7!==$&&A.y()
h.f7=p
p=A.i(o.getUniformLocation(m,"uTexelSize"))
h.f6!==$&&A.y()
h.f6=p
p=A.i(o.getUniformLocation(m,"uNoiseOff"))
h.f8!==$&&A.y()
h.f8=p
p=A.i(o.getUniformLocation(m,"uChromaLuma"))
h.f9!==$&&A.y()
h.f9=p
p=A.i(o.getUniformLocation(m,"uChromaLag"))
h.fa!==$&&A.y()
h.fa=p
p=A.i(o.getUniformLocation(m,"uTapeNoise"))
h.fb!==$&&A.y()
h.fb=p
p=A.i(o.getUniformLocation(m,"uHeadSwitch"))
h.fc!==$&&A.y()
h.fc=p
p=A.i(o.getUniformLocation(m,"uTracking"))
h.fd!==$&&A.y()
h.fd=p
p=A.i(o.getUniformLocation(m,"uDropouts"))
h.fe!==$&&A.y()
h.fe=p
p=A.i(o.getUniformLocation(m,"uGhosting"))
h.ff!==$&&A.y()
h.ff=p
p=A.i(o.getUniformLocation(m,"uChromaBlurI"))
h.fg!==$&&A.y()
h.fg=p
p=A.i(o.getUniformLocation(m,"uChromaBlurQ"))
h.fh!==$&&A.y()
h.fh=p
p=A.i(o.getUniformLocation(m,"uChromaLagAmount"))
h.fi!==$&&A.y()
h.fi=p
p=A.i(o.getUniformLocation(m,"uNoiseScale"))
h.fj!==$&&A.y()
h.fj=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.fk!==$&&A.y()
h.fk=p
p=A.i(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.fl!==$&&A.y()
h.fl=p
p=A.i(o.getUniformLocation(m,"uJitterAmount"))
h.fm!==$&&A.y()
h.fm=p
p=A.i(o.getUniformLocation(m,"uJitterFreq"))
h.fn!==$&&A.y()
h.fn=p
p=A.i(o.getUniformLocation(m,"uDropoutRate"))
h.fo!==$&&A.y()
h.fo=p
p=A.i(o.getUniformLocation(m,"uGhostAmount"))
h.fp!==$&&A.y()
h.fp=p
p=A.i(o.getUniformLocation(m,"uGhostOffset"))
h.fq!==$&&A.y()
h.fq=p
p=A.i(o.getUniformLocation(m,"uGhostTarget"))
h.fu!==$&&A.y()
h.fu=p
m=A.i(o.getUniformLocation(m,"uHasGhost"))
h.fv!==$&&A.y()
h.fv=m
m=A.i(o.getUniformLocation(n,"uTex"))
h.dn!==$&&A.y()
h.dn=m
m=A.i(o.getUniformLocation(n,"uDepth"))
h.dq!==$&&A.y()
h.dq=m
m=A.i(o.getUniformLocation(n,"uFocusDistance"))
h.dr!==$&&A.y()
h.dr=m
m=A.i(o.getUniformLocation(n,"uDofBlurScale"))
h.ds!==$&&A.y()
h.ds=m
m=A.i(o.getUniformLocation(n,"uBlurRadius"))
h.dt!==$&&A.y()
h.dt=m
m=A.i(o.getUniformLocation(n,"uDofStrength"))
h.du!==$&&A.y()
h.du=m
n=A.i(o.getUniformLocation(n,"uTexel"))
h.dv!==$&&A.y()
h.dv=n
n=A.aV(A.f(A.f(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.bp!==$&&A.y()
h.bp=n
h.shq(16777215)
n=new A.mA(o,f,A.e([],t.aA),A.e([],t.df),A.e([],t.U),A.e([],t.kS))
m=n.c=f.ar("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.i(o.getUniformLocation(m,"uLightProj"))
n.e=A.i(o.getUniformLocation(m,"uModel"))
h.dw!==$&&A.y()
h.dw=n
n=new A.mh(f,o)
n.iW()
n.iX()
h.c_!==$&&A.y()
h.c_=n
n=f.a
m=A.i(n.createBuffer())
m.toString
h.cY!==$&&A.y()
h.cY=m
p=A.i(n.createBuffer())
p.toString
h.cZ!==$&&A.y()
h.cZ=p
n=A.i(n.createBuffer())
n.toString
h.d_!==$&&A.y()
h.d_=n
e=A.i(o.createVertexArray())
e.toString
h.d0!==$&&A.y()
h.d0=e
l=A.i(o.createVertexArray())
l.toString
h.d1!==$&&A.y()
h.d1=l
k=A.i(o.createVertexArray())
k.toString
h.d2!==$&&A.y()
h.d2=k
j=A.i(o.createVertexArray())
j.toString
h.d3!==$&&A.y()
h.d3=j
o.bindVertexArray(e)
h.cv(m)
o.bindVertexArray(l)
h.cv(p)
o.bindVertexArray(k)
h.cv(n)
o.bindVertexArray(null)
try{h.c4=f.hs(384,216,!0,!0)}catch(i){h.c4=null}s=4<f.ght()?4:f.ght()
e=s
if(typeof e!=="number")return e.a4()
if(e>1)try{h.bo=f.kH(h.aQ,h.aR,!0,s)}catch(i){h.bo=null}try{h.aP=f.hs(h.aQ,h.aR,!0,!0)}catch(i){h.bo=h.aP=null}if(h.aP!=null)try{h.c1=f.aV(h.gbH(),h.gbG(),!1)
h.c2=f.aV(h.gbH(),h.gbG(),!1)
h.c3=f.aV(h.aQ,h.aR,!1)}catch(i){h.c3=h.c2=h.c1=null}},
gbH(){var s=B.c.K(this.aQ,4)
return s<1?1:s},
gbG(){var s=B.c.K(this.aR,4)
return s<1?1:s},
am(a){return this.kF(t.G.a(a))},
kF(a){var s=0,r=A.bc(t.H),q=this,p,o,n,m,l,k,j
var $async$am=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:p=new A.Z(a,A.o(a).i("Z<1,2>")).gu(0),o=q.au
case 2:if(!p.m()){s=3
break}n=p.d
m=n.a
l=B.bs.h(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.af(o.cb(k,l,!1,!1,!1,m==="grime"),$async$am)
case 4:if(c!=null)q.em(m,l)
s=2
break
case 3:p=t.lS
j=A.Q(new A.bP(new A.V(A.e(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.mm(a)),t.dD),p),p.i("n.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.af(o.cc(j,12,!1),$async$am)
case 7:q.bZ=c
case 6:return A.ba(null,r)}})
return A.bb($async$am,r)},
b5(){var s=0,r=A.bc(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b5=A.bd(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.x(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.af(A.aO(A.f(A.f(g.window).fetch("shaders/"+A.q(m))),f),$async$b5)
case 13:l=a3
if(!A.aV(l.ok)){i=A.e_("HTTP "+A.q(A.pX(l,"status",t.S)))
throw A.c(i)}a=J
a0=n
a1=m
s=14
return A.af(A.aO(A.f(l.text()),i),$async$b5)
case 14:a.bR(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ab(c)
i=A.e_("shaders/"+A.q(m)+": fetch failed - "+A.q(k))
throw A.c(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.jd(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ab(b)
A.f(v.G.console).error("shader reload failed: "+A.q(j))
s=5
break
case 2:s=1
break
case 5:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$b5,r)},
jd(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.a9
q===$&&A.j()
p=a.h(0,"world.vert")
p.toString
o=a.h(0,"world.frag")
o.toString
n=q.cA("world.vert/world.frag",p,o)
o=a.h(0,h)
o.toString
p=a.h(0,"post.frag")
p.toString
m=q.cA("post.vert/post.frag",o,p)
p=a.h(0,h)
p.toString
o=a.h(0,"blur.frag")
o.toString
l=q.cA("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.eE()
i.eD()
q=i.f3
q=A.Q(q,A.o(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.r)(q),++k){s=q[k]
o=B.bs.h(0,s)
o.toString
i.em(s,o)}A.f(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ab(j)
A.f(v.G.console).error("shader recompile failed: "+A.q(r))}},
eD(){var s=this,r=s.al,q=s.a9
q===$&&A.j()
s.h0=A.i(r.getUniformLocation(q.c,"uTex"))
s.h1=A.i(r.getUniformLocation(q.c,"uTime"))
s.h2=A.i(r.getUniformLocation(q.c,"uFlash"))
s.h3=A.i(r.getUniformLocation(q.c,"uVignette"))
s.h4=A.i(r.getUniformLocation(q.c,"uGrain"))
s.h5=A.i(r.getUniformLocation(q.c,"uDesat"))
s.h6=A.i(r.getUniformLocation(q.c,"uBloom"))
s.h7=A.i(r.getUniformLocation(q.c,"uBloomStrength"))
s.he=A.i(r.getUniformLocation(q.c,"uNoiseOff"))
s.hh=A.i(r.getUniformLocation(q.c,"uLutMix"))
s.ha=A.i(r.getUniformLocation(q.c,"uDepth"))
s.hb=A.i(r.getUniformLocation(q.c,"uDepthViz"))
s.f4=A.i(r.getUniformLocation(q.c,"uSSAO"))
s.f5=A.i(r.getUniformLocation(q.c,"uSSAOStrength"))
s.hc=A.i(r.getUniformLocation(q.c,"uNoise"))
s.hd=A.i(r.getUniformLocation(q.c,"uNoiseOn"))
s.hf=A.i(r.getUniformLocation(q.c,"uLut"))
s.hg=A.i(r.getUniformLocation(q.c,"uLutOn"))
s.h8=A.i(r.getUniformLocation(q.d,"uTex"))
s.dm=A.i(r.getUniformLocation(q.d,"uDir"))
s.h9=A.i(r.getUniformLocation(q.c,"uBlur"))},
em(a,b){var s,r,q,p=this
p.f3.k(0,a)
switch(a){case"bluenoise":s=p.a9
s===$&&A.j()
s=s.c
r=p.hc
r===$&&A.j()
q=p.hd
q===$&&A.j()
p.bg(s,r,q,b)
break
case"lut-gothic":s=p.a9
s===$&&A.j()
s=s.c
r=p.hf
r===$&&A.j()
q=p.hg
q===$&&A.j()
p.bg(s,r,q,b)
break
case"grime":s=p.a9
s===$&&A.j()
s=s.b
r=p.RG
r===$&&A.j()
q=p.rx
q===$&&A.j()
p.bg(s,r,q,b)
break
case"glass":s=p.a9
s===$&&A.j()
s=s.b
r=p.x2
r===$&&A.j()
q=p.xr
q===$&&A.j()
p.bg(s,r,q,b)
break
case"soft":s=p.a9
s===$&&A.j()
s=s.b
r=p.fN
r===$&&A.j()
q=p.fO
q===$&&A.j()
p.bg(s,r,q,b)
break}},
bg(a,b,c,d){var s=this.al
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
shq(a){var s=A.ol(a)
this.fF=s.a
this.fG=s.b
this.fH=s.c},
bT(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
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
f[l]=l}a1=b.al
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
b.e7(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.ki++
b.d7.l(0,a1,new A.js(e,d,i,s,s,a3))
return a1},
k9(a){var s,r,q,p=this,o=p.d7.h(0,a)
if(o==null)return
p.ev()
s=p.fL
r=p.fM
if(s!==r)p.eI(r)
s=p.al
r=p.dy
r===$&&A.j()
s.uniform1i(r,0)
r=p.dk
r===$&&A.j()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.bq},
kr(a){var s,r=this.d7.aj(0,a)
if(r==null)return
s=this.al
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
ev(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.d8)return
c.d8=!0
s=c.al
r=c.a9
r===$&&A.j()
s.useProgram(r.b)
r=c.as
r===$&&A.j()
q=c.fJ
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.j()
r=c.dc
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.j()
q=c.dd
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.j()
r=c.de
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.j()
s.uniform1f(r,c.h_)
r=c.CW
r===$&&A.j()
s.uniform1f(r,c.dl)
r=c.cx
r===$&&A.j()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.j()
s.uniform1f(r,60)
r=c.db
r===$&&A.j()
q=c.fw?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.j()
s.uniform3f(q,c.df/255*0.25,c.dg/255*0.25,c.dh/255*0.25)
q=c.fx
q===$&&A.j()
r=c.fE
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.j()
s.uniform3f(r,c.fF,c.fG,c.fH)
r=c.go
r===$&&A.j()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.j()
s.uniform1f(r,14)
r=c.k1
r===$&&A.j()
s.uniform1f(r,c.fI)
r=c.k2
r===$&&A.j()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.j()
s.uniform1i(r,c.da.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.da
l=m.length
if(n<l){if(!(n<l))return A.d(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],0)
continue}j=A.ol(k.b)
m=c.bp
m===$&&A.j()
i=m?1:1+(A.oT(c.di*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.d(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.d(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.d(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.d(o,n)
s.uniform1f(o[n],k.d*i)}r=c.bp
r===$&&A.j()
q=r?1:1+(A.oT(c.di*2.5,40503)*2-1)*0
c.kf=q
p=c.p3
p===$&&A.j()
s.uniform1f(p,q)
q=c.p4
q===$&&A.j()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.j()
p=c.fA?1:0
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
q=c.fz
h=q?384:0
g=q?216:0
q=c.d4
p=q.a
if(p===B.ay){f=B.d.a_(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.fP
r===$&&A.j()
s.uniform2f(r,h,g)
r=c.dw
r===$&&A.j()
q=c.fT
q===$&&A.j()
s.uniform1f(q,0)
q=c.fU
q===$&&A.j()
s.uniform3f(q,0.0015,0.005,0)
q=c.fQ
q===$&&A.j()
if(q!=null)r.cl(0)
q=c.fR
q===$&&A.j()
if(q!=null)r.cl(1)
q=c.fS
q===$&&A.j()
if(q!=null)r.cl(2)
r.cm(0)
r.cm(1)
r.cm(2)
r=c.fV
r===$&&A.j()
if(c.bZ==null)q=0
else{c.dz===$&&A.j()
q=3}s.uniform1i(r,q)
if(c.bZ!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.bZ)
r=c.dj
r===$&&A.j()
s.uniform1i(r,12)}r=c.fZ
q=c.fY
p=c.fX
o=c.fW
n=0
for(;;){m=c.dz
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
if(m!=null)s.uniform1i(m,d.d);++n}c.eI(c.fM)
r=c.dy
r===$&&A.j()
s.uniform1i(r,0)
r=c.dk
r===$&&A.j()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
eI(a){var s
this.fL=a
s=this.dx
s===$&&A.j()
this.al.uniformMatrix4fv(s,!1,a.a)},
aw(a,b){var s,r,q,p,o,n,m,l,k,j=this
j.aQ=a
j.aR=b
j.dl=b/a
s=j.c_
s===$&&A.j()
r=B.c.K(a,2)
s.ay=r
q=B.c.K(b,2)
s.ch=q
p=s.d
if(p!=null)s.b.az(p,r,q)
r=s.e
if(r!=null)s.b.az(r,s.ay,s.ch)
r=s.f
if(r!=null)s.b.az(r,s.ay,s.ch)
r=s.r
if(r!=null)s.b.az(r,384,216)
o=j.aP
n=j.bo
m=j.c1
l=j.c2
k=j.c3
if(o!=null)j.au.az(o,a,b)
if(n!=null)j.au.az(n,a,b)
if(m!=null)j.au.az(m,j.gbH(),j.gbG())
if(l!=null)j.au.az(l,j.gbH(),j.gbG())
if(k!=null)j.au.az(k,a,b)},
jo(a){var s,r,q,p,o,n,m
for(s=this.fC,r=this.fB,q=1;q<a;++q){if(!(q<800))return A.d(s,q)
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
jn(a){var s,r,q,p,o,n,m,l
for(s=this.fD,r=this.d9,q=1;q<a;++q){if(!(q<4000))return A.d(s,q)
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
ko(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.d4=b4
s=b2.br
r=0
if(s>0){for(s=b2.fD,q=0;p=b2.br,q<p;++q)B.a.l(s,q,q)
b2.jn(p)
for(p=b2.d9,o=b2.d5,n=0;n<b2.br;++n){if(!(n<4000))return A.d(s,n)
m=s[n]
if(!(m<p.length))return A.d(p,m)
l=p[m]
r=A.rL(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.d9,p=b2.d5,q=0;q<b2.br;++q){if(!(q<s.length))return A.d(s,q)
l=s[q]
r=A.rL(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.br=0
for(s=b2.fC,q=0;p=b2.c5,q<p;++q)B.a.l(s,q,q)
b2.jo(p)
for(p=b2.kg,o=b2.fB,k=0,n=0;n<b2.c5;++n){if(!(n<800))return A.d(s,n)
m=s[n]
if(!(m<o.length))return A.d(o,m)
j=o[m]
i=A.ol(0)
m=j.b
h=b2.de
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.dd
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
e=b2.dc
k=A.rO(p,k,a3,a4,a5,a6,new A.b(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.c5=0
s=b2.au
o=b2.cY
o===$&&A.j()
s.dS(o,b2.d5,r)
o=b2.cZ
o===$&&A.j()
s.dS(o,p,k)
b2.ev()
p=b2.al
o=b2.dy
o===$&&A.j()
p.uniform1i(o,0)
o=b2.d0
o===$&&A.j()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(r,14));++b2.bq
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.d1
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.K(k,14));++b2.bq
m=b2.d6
if(m>0){h=b2.d_
h===$&&A.j()
s.dS(h,b2.kh,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.d2
m===$&&A.j()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.d6/14|0);++b2.bq}m=b2.c4
if(m!=null){a7=b2.aP
if(a7!=null)s.l_(m,a7)}a8=b2.aP
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.d3
m===$&&A.j()
p.bindVertexArray(m)
a3=b2.c1
a4=b2.c2
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.a9
g===$&&A.j()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.h8
g===$&&A.j()
p.uniform1i(g,0)
s.aD(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.dm
g===$&&A.j()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.aD(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.dm,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.c3
if(b2.c0>0&&a6!=null){s.aD(a6)
g=b2.a9
g===$&&A.j()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.dn
g===$&&A.j()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.dq
g===$&&A.j()
p.uniform1i(g,7)
g=b2.dr
g===$&&A.j()
p.uniform1f(g,0.03171953255425709)
g=b2.ds
g===$&&A.j()
p.uniform1f(g,1)
g=b2.dt
g===$&&A.j()
p.uniform1f(g,0.5)
g=b2.du
g===$&&A.j()
p.uniform1f(g,b2.c0)
g=b2.dv
g===$&&A.j()
p.uniform2f(g,1/b2.aQ,1/b2.aR)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.c_
g===$&&A.j()
b0=g.kY(a8,0.5)
s.aD(null)
s=b2.a9
s===$&&A.j()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.h6
g===$&&A.j()
p.uniform1i(g,1)
g=b2.h7
g===$&&A.j()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.h9
s===$&&A.j()
b2.bp===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.ha
s===$&&A.j()
p.uniform1i(s,7)
s=b2.hb
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.f4
s===$&&A.j()
p.uniform1i(s,11)
s=b2.f5
s===$&&A.j()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.c0>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.h0
h===$&&A.j()
p.uniform1i(h,0)
h=b2.di+=b3;++b2.fK
s=b2.h1
s===$&&A.j()
p.uniform1f(s,h)
h=b2.he
h===$&&A.j()
s=b2.fK
p.uniform2f(h,B.c.ah(s*13,64),B.c.ah(s*29,64))
s=b2.h2
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h3
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h4
s===$&&A.j()
p.uniform1f(s,0)
s=b2.h5
s===$&&A.j()
p.uniform1f(s,0)
s=b2.d4
if(s.a===B.O)b1=0*(1-s.b/1)
else b1=0
s=b2.hh
s===$&&A.j()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.ml.prototype={
$0(){var s=this.a.a9
s===$&&A.j()
return s.b},
$S:55}
A.mm.prototype={
$1(a){return this.a.h(0,A.F(a))},
$S:22}
A.nb.prototype={
gjy(){var s=this.b
s===$&&A.j()
return s},
eE(){var s,r,q,p,o,n,m=this,l=m.jz(),k=m.a
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
m.fN=A.i(k.getUniformLocation(l,"uSoft"))
m.fO=A.i(k.getUniformLocation(l,"uSoftOn"))
m.fP=A.i(k.getUniformLocation(l,"uInternal"))
m.fQ=A.i(k.getUniformLocation(l,"uLightProj0"))
m.fR=A.i(k.getUniformLocation(l,"uLightProj1"))
m.fS=A.i(k.getUniformLocation(l,"uLightProj2"))
m.kj=A.i(k.getUniformLocation(l,"uShadow0"))
m.kk=A.i(k.getUniformLocation(l,"uShadow1"))
m.kl=A.i(k.getUniformLocation(l,"uShadow2"))
m.fT=A.i(k.getUniformLocation(l,"uShadowCasters"))
m.dj=A.i(k.getUniformLocation(l,"uMaterialAlbedo"))
m.dk=A.i(k.getUniformLocation(l,"uStaticMaterial"))
m.fU=A.i(k.getUniformLocation(l,"uShadowBias"))
m.fV=A.i(k.getUniformLocation(l,"uMaterialCount"))
s=m.fW
B.a.J(s)
r=m.fX
B.a.J(r)
q=m.fY
B.a.J(q)
p=m.fZ
B.a.J(p)
for(o=0;o<32;++o){n=""+o
B.a.k(s,A.i(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.k(r,A.i(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.k(q,A.i(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.k(p,A.i(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.dj,12)},
cv(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.e7(56)},
e7(a){var s=this,r=s.c
r===$&&A.j()
s.bh(r,3,a,0)
r=s.f
r===$&&A.j()
s.bh(r,3,a,12)
r=s.d
r===$&&A.j()
s.bh(r,4,a,24)
r=s.e
r===$&&A.j()
s.bh(r,1,a,40)
r=s.r
r===$&&A.j()
s.bh(r,3,a,44)},
bh(a,b,c,d){var s=this.a
A.aN(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
jz(){return this.gjy().$0()}}
A.mA.prototype={
cl(a){return null},
cm(a){return null}}
A.b.prototype={
U(a,b){return new A.b(this.a+b.a,this.b+b.b,this.c+b.c)},
a5(a,b){return new A.b(this.a-b.a,this.b-b.b,this.c-b.c)},
V(a,b){return new A.b(this.a*b,this.b*b,this.c*b)},
bn(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aN(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.b(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
gac(){var s=this,r=s.gq(0)
return r<1e-9?new A.b(0,0,0):new A.b(s.a/r,s.b/r,s.c/r)}}
A.kg.prototype={
li(a){var s,r,q,p,o,n=B.q.b1(a.C(),null)
this.a.f2(n)
s=A.f(A.f(v.G.window).localStorage)
r=A.bE(s.getItem("quarantine.save.active"))
q=A.bE(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
kU(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.f(A.f(v.G.window).localStorage)
r=A.bE(s.getItem("quarantine.save.active"))
q=A.bE(s.getItem("quarantine.save.previous"))
p=this.ej(r,a)
if(p!=null)return new A.dl(p,null)
o=this.ej(q,a)
if(o!=null)return new A.dl(o,"recovered previous save")
if(r==null)return B.f9
return B.f8}catch(n){return B.f7}},
ej(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.f2(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ab(q) instanceof A.J)return null
else throw q}}}
A.hB.prototype={
ia(a,b,c,d,e){if(this.a.length===0)throw A.c(B.di)
if(this.b<0)throw A.c(B.d3)},
C(){var s,r=this,q=r.d
q=q==null?null:A.ap(q,t.i)
s=t.z
return A.dX(A.S(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.bv.prototype={
A(){return"EndingKind."+this.b}}
A.kx.prototype={}
A.dZ.prototype={
C(){var s=t.N
return A.S(["kind",this.a.b],s,s)}}
A.kA.prototype={
$1(a){return t.no.a(a).b===this.a.h(0,"kind")},
$S:57}
A.ij.prototype={
C(){var s,r=this,q=t.N,p=A.x(q,t.z)
p.l(0,"roomId",r.a)
s=r.b
p.l(0,"eye",A.S(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.l(0,"yaw",r.c)
p.l(0,"pitch",r.d)
q=r.e
if(q!=null)p.l(0,"activeStairId",q)
q=r.f
if(q!=null)p.l(0,"activeStairProgress",q)
return p},
kx(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.a5(0,new A.b(0,1.3499999999999999,0))
return!new A.hl(s,s.U(0,new A.b(0,1.2000000000000002,0))).hp(a,r)}}
A.m0.prototype={
C(){return A.jE(this.a)}}
A.eb.prototype={
C(){return A.S(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.mw.prototype={
f2(a){var s,r,q,p,o,n,m,l=B.q.bY(a,null),k=t.f
if(!k.b(l))throw A.c(B.dm)
s=t.N
r=t.z
q=A.aS(l,s,r)
p=q.h(0,"version")
if(A.aM(p))o=p!==1&&p!==2
else o=!0
if(o)A.k(A.ag("unsupported save version "+A.q(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.k(B.d6)
k=A.aS(n,s,r)
return A.qG(A.aS(m,s,r),k,2)}}
A.dl.prototype={}
A.d3.prototype={
A(){return"GameSessionEventType."+this.b}}
A.hH.prototype={}
A.kV.prototype={}
A.kU.prototype={
gaJ(){var s=this.d
return new A.kV(s.a,s.b)},
gdJ(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.S(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.S(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.S(["entryCount",m.e.b.a],k,t.S)
p=A.ql(m.c).C()
o=m.r
n=o.c
return new A.m0(A.jE(A.S(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.S(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
jC(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.c(A.aE(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bO(B.dv)}if(n<a)this.bO(B.dw)},
i2(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.cq(a)&&s.i1(b)},
kW(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.cb)r.c=Math.min(1,r.c+0.1)},
i0(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.u_(j,A.ap(i.d,h).length)
if(a===B.c5)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.N(r)
A.tZ(j,new A.O(r,q.i("t(1)").a(new A.kW(k)),q.i("O<1>")).gq(0))
r=k.f
q=r.b
if(B.a.v(B.e0,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.aH(j.a/1*3)
B.a.k(r.r,new A.ec(q.a,a,b))
m=r.a
A.ua(m,q.a,n,k.b,A.ap(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.hS(B.ef)
s.r.jX(o,c)
l=B.d.aH(j.b/1*6)
if(l>0)r.cq(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aR(i,A.o(i).i("aR<2>")).a1(0,new A.kX())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bO(B.dy)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bO(B.dx)},
bO(a){var s=this;++s.y
B.a.k(s.w,new A.hH())
B.a.k(s.x,A.u0(A.wq(a),s.b,s.y-1))}}
A.kW.prototype={
$1(a){t.W.a(a)
return a.e.length!==0&&!new A.mB().hY(this.a.c,a.a)},
$S:58}
A.kX.prototype={
$1(a){return t.L.a(a).e},
$S:23}
A.k5.prototype={
dT(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.c(A.l("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.c(A.l("authored house source changed: "+a1))
a1=b.d
s=a1.length
if(s!==a2.b.length||b.e.length!==a2.c.length)throw A.c(A.l("authored/runtime room or portal count mismatch"))
for(r=t.hE,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
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
for(n=A.N(j),i=n.i("t(1)"),n=n.i("O<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.e3(new A.O(j,i.a(new A.ka(e)),n),r)
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
if(Math.abs(h-g)>0.0001)A.k(A.l(c+a0+A.q(h)+" != "+A.q(g)))}}for(a1=b.e,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
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
if(a1.length!==s.length||B.a.gb9(a1).b!==B.a.gb9(s).b)throw A.c(A.l("stair manifest mismatch"))}}
A.k6.prototype={
$1(a){return A.tM(a,this.a)},
$S:60}
A.k7.prototype={
$1(a){var s=this.a,r=A.jI(a,"portal"),q=A.cT(r,"id"),p=A.cT(r,"a"),o=A.cT(r,"b"),n=A.h5(r,"width"),m=A.h5(r,"height"),l=typeof r.h(0,"doorKit")=="string"?A.F(r.h(0,"doorKit")):null
return new A.dO(q,p,o,n*s,m*s,l)},
$S:61}
A.k8.prototype={
$1(a){var s=A.jI(a,"stair")
A.cT(s,"id")
return new A.dQ(A.cT(s,"portalId"))},
$S:62}
A.k9.prototype={
$1(a){return typeof a=="string"?a:A.h1("exterior cell")},
$S:24}
A.ka.prototype={
$1(a){return t.hE.a(a).a===this.a.a},
$S:25}
A.dP.prototype={}
A.kb.prototype={
$1(a){var s=this.a,r=A.jI(a,"window"),q=A.cT(r,"id"),p=A.h5(r,"offset")
A.h5(r,"sill")
return new A.dR(q,p*s,A.h5(r,"width")*s,A.h5(r,"height")*s)},
$S:65}
A.dR.prototype={}
A.dO.prototype={}
A.dQ.prototype={}
A.oo.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:26}
A.hl.prototype={
l5(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.N(s)
q=new A.O(s,r.i("t(1)").a(new A.kj(e)),r.i("O<1>"))
p=!q.gu(0).m()?null:q.gaS(0)
if(p==null){n.d=null
return}if(!(n.bN(b,p.f)&&a==="hall"))o=n.bN(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.iW(p,B.d.a_(d,0,1))},
kJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.er(f,c,d)
s=g.iQ(a,b,c,d)
if(s!=null){g.d=s
return g.er(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.jQ(Math.sqrt(r*r+q*q)/0.08))
o=d.V(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.eU(a,n,m,new A.b(q,0,0))
l=l||j.b
i=g.hx(a,n)
n=i==null?n:i
h=g.eU(a,n,j.a,new A.b(0,0,r))
l=l||h.b
m=h.a
i=g.hx(a,n)
n=i==null?n:i}g.bQ(m)
return new A.i7(m,n)},
iQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bN(c,l.f)&&n
j=q&&this.bN(c,l.r)&&o
if(k||j)return new A.iW(l,k?0:1)}return null},
er(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a5(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.a_(a.b+o/p,0,1)
n=A.qT(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bQ(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.i7(n,k)},
bN(a,b){var s=a.a5(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
eU(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.ft(c,!1)
s=c.U(0,d)
this.bQ(s)
if(this.hp(a,b)){this.bQ(c)
return new A.ft(c,!0)}return new A.ft(s,!1)},
bQ(a){var s=a.a5(0,new A.b(0,1.3499999999999999,0))
this.a=s
this.b=s.U(0,new A.b(0,1.2000000000000002,0))},
hp(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
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
return!this.jq(a,m,s)},
hx(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.aO(k)
for(r=k.a,q=a.av(r),p=J.K(q.a),q=new A.P(p,q.b,q.$ti.i("P<1>"));q.m();){o=p.gp()
n=o.cf(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.eY(k,o,s)&&this.iI(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
jq(a,b,c){var s,r,q
for(s=a.av(b.a),r=J.K(s.a),s=new A.P(r,s.b,s.$ti.i("P<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.eY(b,q,c))return!0}return!1},
eY(a,b,c){var s,r,q,p=a.a,o=b.ak(p),n=b.ad(p)
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
iI(a,b,c){var s,r=this
switch(b.ak(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sjI(a){this.a=t.bf.a(a)}}
A.kj.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:67}
A.i7.prototype={}
A.ft.prototype={}
A.iW.prototype={}
A.eU.prototype={}
A.l4.prototype={
jX(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.d(B.B,r)
s=B.B[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hZ(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.B,q)
p=B.B[q]
if(p.b===a)r+=p.c}return r},
i_(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.d(B.B,q)
p=B.B[q]
if(p.b===a)r+=p.d}return r},
C(){return A.S(["landedCount",this.b],t.N,t.z)}}
A.ms.prototype={
ij(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.y()
o.c=new A.hQ(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.r)(n),++q){p=n[q]
r.l(0,p.a,o.e8(p))}},
kV(a){var s,r,q,p,o,n=this,m=n.a.e.h(0,a)
if(m==null)return
s=n.d
r=s.h(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o)p.kr(r[o])
s.l(0,a,n.e8(m))},
e8(a){var s=A.t0(this.a,a),r=this.b,q=A.e([r.bT(s.a,1),r.bT(s.b,2),r.bT(s.c,0)],t.t),p=s.d
if(!B.w.gG(p))q.push(r.bT(p,0))
return q},
hL(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.h(0,a)
if(l==null)return B.D
s=l.a
r=A.as([s],t.N)
for(n=n.av(s),q=J.K(n.a),n=new A.P(q,n.b,n.$ti.i("P<1>"));n.m();){p=q.gp()
o=p.cf(s)
if(!(p.ax&&!p.ay&&!p.z)||o==null||m.h(0,o)==null)continue
r.k(0,o)}return r},
k8(a,b){var s,r,q,p,o=this,n=o.hL(a),m=o.b,l=o.c
l===$&&A.j()
l=t.b3.a(l.hG(n,b))
s=t.f0
m.da=l.length<=4?A.ap(l,s):A.ap(A.mJ(l,0,A.dH(4,"count",t.S),A.N(l).c),s)
for(l=n.gu(n),s=o.d;l.m();){r=s.h(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)m.k9(r[p])}}}
A.aF.prototype={}
A.kC.prototype={
gkA(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.ag(A.e([r,q,p,o,n,m],t.n),new A.kD())&&o>=r&&n>=q&&m>=p}}
A.kD.prototype={
$1(a){return isFinite(A.h_(a))},
$S:12}
A.l5.prototype={
H(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.c.ah(s,3)!==0}else s=!0
if(s)throw A.c(A.w("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.c(A.w("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.gkA())throw A.c(A.w("QHMX bounds are invalid",m))
for(s=t.n,r=0;r<k;++r){q=l[r]
if(B.a.a1(A.e([q.a,q.b,q.c,q.d,q.e,q.f,q.r,q.w],s),new A.l7()))throw A.c(A.w("QHMX contains a non-finite vertex",m))
p=q.x>255
if(p)throw A.c(A.w("QHMX material/flags must fit u8",m))}for(l=n.b,s=l.length,r=0;r<s;++r){o=l[r]
if(o>=k)throw A.c(A.w("QHMX index "+o+" exceeds vertex count",m))}}}
A.l7.prototype={
$1(a){return!isFinite(A.h_(a))},
$S:12}
A.l6.prototype={
t(a,b,c,d,e,f,g){var s=this
s.aZ(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.aZ(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.aZ(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.aZ(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.aZ(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.aZ(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.aF(a,b,c,m,n,o,0,0,p),r=new A.aF(g,h,i,m,n,o,1,1,p)
this.b_(s,new A.aF(d,e,f,m,n,o,1,0,p),r)
this.b_(s,r,new A.aF(j,k,l,m,n,o,0,1,p))},
b_(a,b,c){var s=this,r=s.b
B.a.k(r,s.cF(a))
B.a.k(r,s.cF(b))
B.a.k(r,s.cF(c))},
cF(a){var s,r,q=B.a.aU(A.e([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.g2),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.c(A.l("QHMX builder exceeded 16-bit vertex capacity"))
B.a.k(s,a)
p.l(0,q,r)
return r},
jL(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
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
n=Math.max(n,i)}h=new A.l5(A.ap(g,t.hZ),new Uint16Array(A.a0(this.b)),new A.kC(s,r,q,p,o,n))
h.H()
return h}}
A.d0.prototype={
A(){return"ExteriorCameraBand."+this.b}}
A.kE.prototype={
jR(a){var s
switch(a.a){case 0:s=A.as(["front","street","opposite-house"],t.N)
break
case 1:s=A.as(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.as(["side-boundary","rear-service"],t.N)
break
case 3:s=A.as(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.as(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
jS(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.b1
break A}if("kitchen"===a||"cellar"===a){s=B.cN
break A}if("bathroom"===a){s=B.cO
break A}if("spare-room"===a){s=B.cP
break A}s=B.b1
break A}return this.jR(s)}}
A.cN.prototype={}
A.ob.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:68}
A.d1.prototype={
A(){return"FocusKind."+this.b}}
A.e0.prototype={}
A.mt.prototype={}
A.nQ.prototype={
$1(a){var s,r,q=this
t.at.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:105}
A.cM.prototype={}
A.eq.prototype={}
A.l3.prototype={
ir(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=new A.ld(),a4=this.b,a5=A.ax(a4,!0,t.W)
B.a.J(a4)
s=A.e([],t.kl)
for(r=a5.length,q=t.x,p=t.cs,o=t.E,n=0;n<a5.length;a5.length===r||(0,A.r)(a5),++n){m=a5[n]
l=a3.$1(m.c)
k=a3.$1(m.d)
j=A.e([],o)
for(i=m.e,h=i.length,g=0;g<i.length;i.length===h||(0,A.r)(i),++g){f=i[g]
j.push(new A.aL(f.a,f.b,f.c*1.5,f.d,f.e*1.5,f.f,f.r,f.w))}i=A.e([],p)
for(h=m.r,e=h.length,g=0;g<h.length;h.length===e||(0,A.r)(h),++g){d=h[g]
i.push(new A.aT(d.a,d.b,a3.$1(d.c),d.d,d.e,d.f))}h=A.e([],q)
for(e=m.w,c=e.length,g=0;g<e.length;e.length===c||(0,A.r)(e),++g){b=e[g]
h.push(new A.b1(b.a,b.b,a3.$1(b.c)))}s.push(new A.az(m.a,m.b,l,k,j,m.f,i,h,m.x,m.y,m.z,m.Q))}B.a.I(a4,s)
a4=this.c
a=A.ax(a4,!0,t.gm)
B.a.J(a4)
s=A.e([],t.aN)
for(r=a.length,n=0;n<r;++n){a0=a[n]
s.push(new A.cD(a0.a,a0.b,a0.c,a0.d,a0.e,a0.f*1.5,a0.r*1.5,a0.w*1.5,a0.x,!1,a0.z,a0.Q,a0.as,a0.at,a0.ax,a0.ay))}B.a.I(a4,s)
for(a4=this.d,a1=0;a1<a4.length;++a1){a2=a4[a1]
B.a.l(a4,a1,new A.cG(a2.a,a2.b,a2.c,a3.$1(a2.d),a3.$1(a2.e),a3.$1(a2.f),a3.$1(a2.r)))}},
iU(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.a0(n))throw A.c(A.l("duplicate room "+n))
q.l(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.a0(n))throw A.c(A.l("duplicate portal "+n))
q.l(0,n,m)}},
jw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
jv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.x(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.eX(o,i,h,g,f,e)
a5.e5(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.r)(n),++k){d=n[k]
c=q.h(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.c(A.l(l+" references invalid portal "+d))
i=c.ak(l)
h=c.ad(l)
g=c.w
f=c.x
a5.eX(o,i,h,g,0,f)
a5.e5(a6,l,c.ak(l),c.ad(l),c.ad(l)+g,0,f)}}for(s=new A.Z(a6,a6.$ti.i("Z<1,2>")).gu(0);s.m();){b=s.d
a=b.b
r=J.bQ(a)
r.Y(a,new A.le())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.h(a,a0).a[0]<r.h(a,a2).a[1]&&r.h(a,a2).a[0]<r.h(a,a0).a[1]
a4=r.h(a,a0).a[2]<r.h(a,a2).a[3]&&r.h(a,a2).a[2]<r.h(a,a0).a[3]
if(a3&&a4)throw A.c(A.l("overlapping apertures on "+b.a))}}},
eX(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.m
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.c(A.l("aperture outside "+a.a+" "+b.b+" wall"))},
e5(a,b,c,d,e,f,g){J.h8(t.gz.a(a).kT(b+":"+c.b,new A.lc()),new A.fJ([d,e,f,g]))},
aO(a){var s=a.c,r=this.r,q=a.a
return new A.b(s.a+r.hZ(q),s.b+r.i_(q),s.c)},
av(a){var s=this.c,r=A.N(s)
return new A.O(s,r.i("t(1)").a(new A.lf(a)),r.i("O<1>"))},
kS(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.c(A.aE(a,"roomId","not a portal endpoint"))
r=this.aO(o)
q=b.ad(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.ak(a).a){case 0:s=new A.b(s.a+q,p,s.c)
break
case 2:s=new A.b(s.a+q,p,s.c+r.c)
break
case 1:s=new A.b(s.a+r.a,p,s.c+q)
break
case 3:s=new A.b(s.a,p,s.c+q)
break
default:s=null}return s},
glh(){return B.a.bs(this.b,0,new A.lg(),t.S)}}
A.ld.prototype={
$1(a){return new A.b(a.a*1.5,a.b,a.c*1.5)},
$S:70}
A.le.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.F(a.a[0],b.a[0])},
$S:71}
A.lc.prototype={
$0(){return A.e([],t.a3)},
$S:72}
A.lf.prototype={
$1(a){var s
t.gm.a(a)
s=this.a
return a.b===s||a.c===s},
$S:73}
A.lg.prototype={
$2(a,b){return A.a(a)+t.W.a(b).e.length},
$S:74}
A.kB.prototype={}
A.mB.prototype={
hY(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.ag(s,new A.mC())}else s=!1
return s}}
A.mC.prototype={
$1(a){return t.hE.a(a).w},
$S:25}
A.hP.prototype={
jG(a){return B.a.dA(this.d,new A.l8(a),new A.l9(a))},
dT(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="inventory placement ",a9=a7.a
if(a9!==1)throw A.c(A.l("unsupported house inventory schema "+a9))
a9=a7.b
if(a9!=="assets/house/house.json")throw A.c(A.l("inventory source changed: "+a9))
a9=a7.c
if(Math.abs(a9-1.5)>0.0001)throw A.c(A.l("inventory modelScale must remain 1.5"))
s=t.N
r=A.a3(s)
for(q=a7.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.k(0,m))throw A.c(A.l("duplicate inventory asset "+m))
l=n.f
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.c(A.l("invalid bounds for inventory asset "+m))}j=A.a3(s)
i=A.a3(s)
for(s=a7.e,q=s.length,p=b0.e,o=0;o<s.length;s.length===q||(0,A.r)(s),++o){h=s[o]
m=h.a
if(!j.k(0,m))throw A.c(A.l("duplicate inventory placement "+m))
l=h.b
g=p.h(0,l)
if(g==null)throw A.c(A.l(a8+m+" references "+l))
n=a7.jG(h.c)
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
A.l8.prototype={
$1(a){return t.ob.a(a).a===this.a},
$S:75}
A.l9.prototype={
$0(){return A.k(A.l("inventory asset missing: "+this.a))},
$S:76}
A.bS.prototype={}
A.cz.prototype={}
A.lm.prototype={}
A.ll.prototype={}
A.on.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:26}
A.bW.prototype={}
A.hQ.prototype={
hG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.Q.a(a)
s=A.e([],t.bz)
for(r=a.gu(a),q=this.a.e;r.m();){p=q.h(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.k(s,new A.bW(new A.b(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.jj(j),0.06))}}B.a.Y(s,new A.la(b))
return A.mJ(s,0,A.dH(4,"count",t.S),t.f0).b7(0)},
jj(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.la.prototype={
$2(a,b){var s=t.f0
s.a(a)
s.a(b)
s=this.a
return B.d.F(a.a.a5(0,s).gq(0),b.a.a5(0,s).gq(0))},
$S:77}
A.eP.prototype={
A(){return"Floor."+this.b}}
A.cx.prototype={
A(){return"Facing."+this.b}}
A.aL.prototype={}
A.cD.prototype={
cf(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
ak(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.c(A.aE(a,"roomId","not an endpoint of "+s.a))},
ad(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.c(A.aE(a,"roomId","not an endpoint of "+s.a))}}
A.aT.prototype={}
A.b1.prototype={}
A.cv.prototype={}
A.cG.prototype={}
A.az.prototype={}
A.lb.prototype={
C(){var s,r,q,p,o,n=this,m=t.N,l=t.oQ,k=A.x(m,l)
for(s=n.a,s=new A.Z(s,A.o(s).i("Z<1,2>")).gu(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.l(0,p,A.S(["open",o.a,"locked",o.b],m,r))}l=A.x(m,l)
for(s=n.c,s=new A.Z(s,A.o(s).i("Z<1,2>")).gu(0);s.m();){q=s.d
p=q.a
o=q.b
l.l(0,p,A.S(["lit",o.a,"examined",o.b],m,r))}return A.S(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
jF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a3(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.k(0,s[q].a)
r=A.a3(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.k(0,n[l].a)
e=A.a3(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.k(0,o[l].a)
o=f.a
n=!0
if(A.pO(new A.aj(o,A.o(o).i("aj<1>")),d)){d=f.b
if(A.pO(new A.aj(d,A.o(d).i("aj<1>")),r)){d=f.c
e=!A.pO(new A.aj(d,A.o(d).i("aj<1>")),e)}else e=n}else e=n
if(e)throw A.c(B.de)
e=f.d
if(e<0||e>2)A.k(B.d0)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.r)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.r)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.f8.prototype={
C(){return A.S(["open",this.a,"locked",this.b],t.N,t.y)}}
A.f0.prototype={
C(){return A.S(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.kw.prototype={
$1(a){return this.a.v(0,A.F(a))},
$S:4}
A.cy.prototype={
A(){return"Hand."+this.b}}
A.n6.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.l:s},
e0(a,b){var s,r,q,p,o=A.e([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.i3.prototype={
C(){var s,r,q,p=t.N,o=A.x(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.t[r]
o.l(0,q,s.h(0,q))}return A.S(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.V(B.t,t.ej.a(new A.lD(this)),t.dD).aU(0," \xb7 ")}}
A.lC.prototype={
$2(a,b){return new A.L(A.F(a),A.F(b),t.q)},
$S:78}
A.lD.prototype={
$1(a){return this.a.a.h(0,A.F(a))},
$S:22}
A.bh.prototype={
C(){var s,r,q,p=this,o=A.e([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].C())
s=p.r
s=s==null?null:s.C()
return A.S(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.lo.prototype={
bi(a){t.G.a(a)
return a.a===5&&B.a.ag(B.t,new A.lv(this,a))},
e6(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.bi(b))return null
s=this.e++
r=new A.bh(s,a,A.e([A.lB(b,c,d)],t.b1),e,!1,null,null)
this.b.l(0,s,r)
return r},
cU(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.bi(b))return!1
B.a.k(s.c,A.lB(b,c,B.W))
return!0},
jB(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.bi(b))return!1
s.r=A.lB(b,0,B.bc)
return!0},
hS(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.J(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.a0(p)&&!B.a.v(s,p))B.a.k(s,p)}},
lf(a){var s
if(!this.b.a0(a))return!1
s=this.d
if(!B.a.v(s,a))B.a.k(s,a)
return!0},
C(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.Q(n,A.o(n).c)
B.a.X(n)
s=A.e([],t.bV)
for(r=q.b,r=new A.al(r,r.r,r.e,A.o(r).i("al<2>"));r.m();)s.push(r.d.C())
return A.S(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.lv.prototype={
$1(a){var s
A.F(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.v(this.a.a.h(0,a),s)},
$S:4}
A.kc.prototype={
cV(a,b){if(a.a===B.a_&&!a.c)return new A.lX(b,B.bz)
return new A.lz(b,a.c,a.d,B.bz)},
k_(a){return this.cV(a,null)}}
A.dS.prototype={}
A.kd.prototype={
bC(a){var s,r=a==null?null:B.b.lc(a).toLowerCase()
if(r==="next")return B.ch
s=r!=null&&r!=="legacy"
return new A.dS(B.Z,!1,s,s?"unknown renderer query":null)}}
A.lA.prototype={}
A.lz.prototype={
gb0(){var s=this.b
s=s==null?null:s.gb0()
return s==null?A.mo("legacy",A.e([],t.s),this.c,this.d,"legacy"):s},
aF(){if(this.e===B.bA)throw A.c(A.l("legacy backend is disposed"))
var s=this.b
if(s!=null)s.aF()
this.e=B.u},
aw(a,b){var s
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
if(this.e!==B.u)A.k(A.l("legacy backend is not ready"))
s=this.b
if(s!=null)s.aw(a,b)},
aB(a){var s
if(this.e!==B.u)A.k(A.l("legacy backend is not ready"))
B.q.b1(A.S(["backend","legacy","interpolation",0,"facts",A.jE(a.a.a)],t.N,t.X),null)
s=this.b
if(s!=null)s.aB(a)},
aT(a){var s
if(this.e!==B.u)A.k(A.l("legacy backend is not ready"))
B.q.b1(A.S(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aT(a)}}
A.lY.prototype={}
A.lX.prototype={
gb0(){var s=this.b
s=s==null?null:s.gb0()
return s==null?A.mo("next",A.e([],t.s),!1,null,"safe"):s},
aF(){if(this.c===B.bA)throw A.c(A.l("pixeldart backend is disposed"))
var s=this.b
if(s!=null)s.aF()
this.c=B.u},
aw(a,b){var s
if(this.c!==B.u)A.k(A.l("pixeldart backend is not ready"))
if(a<=0||b<=0)throw A.c(A.w("pixeldart surface size must be positive",null))
s=this.b
if(s!=null)s.aw(a,b)},
aB(a){var s=this,r="pixeldart backend is not ready",q=s.b,p=s.c
if(p===B.a0){p=q==null
if(p||!q.gcT()){if(s.c!==B.a0)A.k(A.l("pixeldart backend is not context-lost"))
s.c=B.u
if(!p)q.hz()}p=s.c
if(p===B.a0)return}if(p!==B.u)A.k(A.l(r))
B.q.b1(A.S(["backend","next","interpolation",0,"facts",A.jE(a.a.a)],t.N,t.X),null)
if(q!=null){if(q.gcT()){if(s.c!==B.u)A.k(A.l(r))
s.c=B.a0
q.hr()
return}q.aB(a)}},
aT(a){var s
if(this.c!==B.u)A.k(A.l("pixeldart backend is not ready"))
B.q.b1(A.S(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)
s=this.b
if(s!=null)s.aT(a)}}
A.lZ.prototype={
jP(a,b){var s,r,q,p,o,n,m
a.H()
s=B.aP.bC(a)
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
o=A.Q(o,A.o(o).c)
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
A.fd.prototype={
A(){return"RendererBackendKind."+this.b}}
A.dj.prototype={
A(){return"RendererBackendState."+this.b}}
A.mp.prototype={}
A.is.prototype={}
A.mn.prototype={
ii(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
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
A.b3.prototype={
A(){return"SleepQuality."+this.b}}
A.aU.prototype={
A(){return"SleepLocation."+this.b}}
A.ec.prototype={}
A.ko.prototype={
cq(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
i1(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
C(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.e([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.S(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.S(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.kp.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:79}
A.kq.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:80}
A.hU.prototype={
A(){return"InteractionType."+this.b}}
A.dv.prototype={
A(){return"WorldComparisonKind."+this.b}}
A.na.prototype={}
A.du.prototype={}
A.hr.prototype={}
A.lh.prototype={}
A.lj.prototype={
dX(){var s,r,q,p=t.r,o=A.e([],p)
for(s=this.a.b,s=new A.al(s,s.r,s.e,A.o(s).i("al<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.e(o.slice(0),p)
B.a.Y(p,new A.lk())
return p},
jW(a,b){var s,r,q,p,o,n=b.b
if(n.gG(n))return B.h9
s=t.N
r=A.a3(s)
q=A.a3(s)
for(s=n.gN(),s=s.gu(s),p=a.c;s.m();){o=s.gp()
if(B.a.gO(p).a.h(0,o)==n.h(0,o))r.k(0,o)
else q.k(0,o)}if(q.a!==0)return new A.du(B.a7,r)
s=r.a
o=B.a.gO(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gO(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.du(B.ce,r)
return new A.du(B.aO,r)},
jc(a,b,c,d,e){var s,r,q=this.a,p=q.b.h(0,e)
if(p==null)return new A.hr(e,!1,B.h8,null)
s=p.d===c
r=this.jW(p,d)
q.lf(e)
return new A.hr(e,s,r,r.a===B.a7&&s?'The world says "'+d.c+'". The entry says "'+B.a.gO(p.c).n(0)+'".':null)},
k0(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.a7)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.lh(B.a.gO(s.c).n(0)+" but "+A.q(a.f))}}
A.lk.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.F(s.a(b).a,a.a)},
$S:13}
A.bx.prototype={
A(){return"RuptureStep."+this.b}}
A.mu.prototype={}
A.bY.prototype={}
A.mv.prototype={
ge1(){var s=B.aq.h(0,this.a)
return s==null?0:s},
i4(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.x)s=q.e
else s=!0
if(s)return B.bl
r=A.pE(b)
s=q.c
B.a.J(s)
B.a.I(s,r)
B.a.J(q.d)
q.a=B.O
q.b=0
q.e=!1
return A.e([B.cB],t.e_)},
jD(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.c(A.w("rupture advance must be a finite non-negative duration",null))
if(l.a===B.x||a===0)return B.bl
s=A.e([],t.e_)
r=a
for(;;){if(!(r>0&&l.a!==B.x))break
A:{q=l.a
p=B.aq.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.H)l.js(s)
p=l.b
o=B.aq.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.k(s,new A.bY())
if(q===B.H){l.a=B.x
l.b=0
l.e=!0
B.a.k(s,B.cA)}else{p=q.a+1
if(!(p<7))return A.d(B.bk,p)
l.a=B.bk[p]
l.b=0
B.a.k(s,new A.bY())}}}return A.ap(s,t.k8)},
C(){var s=this,r=t.N
return A.S(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ap(s.c,r),"extinguishedMantles",A.ap(s.d,r),"completed",s.e],r,t.z)},
js(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.a_(B.d.c6(l.b/l.ge1()*A.ap(s,r).length),0,A.ap(s,r).length)
p=l.d
for(;;){o=A.ax(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.ax(s,!1,r)
o.$flags=3
n=o
o=A.ax(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.d(n,m)
B.a.k(p,n[m])
B.a.k(a,new A.bY())}}}
A.hI.prototype={
gbc(){var s=this.b
if(s<6||s>18)return 0
return B.d.a_((s-6)/12,0,1)}}
A.of.prototype={
$1(a){var s=B.c.bR(this.a,a)&255
return B.c.a_(B.d.aH(s+((B.c.bR(this.b,a)&255)-s)*this.c),0,255)},
$S:82}
A.mG.prototype={
C(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.ef(g.a),e=t.N,d=A.x(e,t.P)
for(s=g.b,s=new A.Z(s,A.o(s).i("Z<1,2>")).gu(0);s.m();){r=s.d
q=r.a
d.l(0,q,g.jx(q,r.b))}s=A.ef(g.r)
q=A.ef(g.w)
p=A.ef(g.x)
o=A.x(e,t.l_)
for(n=g.as,n=new A.Z(n,A.o(n).i("Z<1,2>")).gu(0),m=t.hq;n.m();){l=n.d
k=l.a
j=A.e([],m)
for(i=J.K(l.b);i.m();){h=i.gp()
j.push(A.S(["field",h.a,"value",h.b],e,e))}o.l(0,k,j)}return A.S(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
jx(a,b){var s,r=A.ef(t.iu.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.l(0,"_arrival",A.ef(q.b3(0,new A.mH(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gL(s))r.l(0,"_ambient",A.ef(s.b3(0,new A.mI(),t.S,t.z)))
return r}}
A.mH.prototype={
$2(a,b){return new A.L(A.a(a),t.ey.a(b).C(),t.iI)},
$S:83}
A.mI.prototype={
$2(a,b){return new A.L(A.a(a),t.bR.a(b).C(),t.iI)},
$S:84}
A.ds.prototype={
C(){return A.S(["hour",this.a,"order",this.b],t.N,t.S)}}
A.dr.prototype={
C(){return A.S(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.fq.prototype={
C(){var s=t.N
return A.S(["field",this.a,"value",this.b],s,s)}}
A.mL.prototype={
bx(){var s=0,r=A.bc(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$bx=A.bd(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.af(A.aO(A.f(A.f(v.G.window).fetch("res/text.json")),t.m),$async$bx)
case 6:n=b
s=7
return A.af(A.aO(A.f(n.text()),t.N),$async$bx)
case 7:m=b
l=A.xD(m)
j=J.aP(l,"broadcasts")
j.toString
i=t.P
o.a=i.a(j)
j=J.aP(l,"visitors")
j.toString
o.b=i.a(j)
j=J.aP(l,"vocabulary")
j.toString
o.c=i.a(j)
j=J.aP(l,"documents")
j.toString
i.a(j)
j=J.aP(l,"street")
j.toString
i.a(j)
j=J.aP(l,"unverifiables")
j.toString
o.f=i.a(j)
j=J.aP(l,"nights")
j.toString
i.a(j)
j=J.aP(l,"endings")
j.toString
o.w=i.a(j)
j=J.aP(l,"records")
j.toString
i.a(j)
j=J.aP(l,"cues")
j.toString
i.a(j)
j=J.aP(l,"claims")
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
case 5:return A.ba(null,r)
case 1:return A.b9(p.at(-1),r)}})
return A.bb($async$bx,r)},
hK(a){var s,r,q,p=this.a
p===$&&A.j()
s=p.h(0,B.c.n(a))
if(t.f.b(s)){p=s.gR().dU(0,new A.mM())
r=p.$ti
q=t.N
q=A.x(q,q)
q.jA(new A.cc(p,r.i("L<m,m>(1)").a(new A.mN()),r.i("cc<1,L<m,m>>")))
return q}return null},
hN(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.j()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.aI(p)||o!==B.d.aI(o))return n
return new A.ds(B.d.aI(p),B.d.aI(o))},
hM(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.j()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.c.n(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.d.aI(p)||typeof o!="string"||typeof n!="string")return m
return new A.dr(B.d.aI(p),o,n)},
lg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.x(a1,t.iu),a3=A.x(a1,t.c_),a4=A.x(a1,t.d8),a5=t.h,a6=A.x(a1,t.iD),a7=b.b
a7===$&&A.j()
a7=new A.Z(a7,A.o(a7).i("Z<1,2>")).gu(0)
s=t.bR
r=t.ey
q=t.f
while(a7.m()){p=a7.d
o=p.b
if(!q.b(o))continue
n=A.x(a,a0)
for(o=o.gR(),o=o.gu(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.m2(l,null):null
if(k==null||!q.b(m.b))continue
j=A.x(a1,a1)
for(m=q.a(m.b).gR(),m=m.gu(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.l(0,i,A.F(l.b))}if(j.a!==0)n.l(0,k,j)}if(n.a===0)continue
o=p.a
a2.l(0,o,n)
h=A.x(a,r)
for(m=n.$ti.i("cB<1>"),l=new A.cB(n,n.r,n.e,m);l.m();){i=l.d
g=b.hN(o,i)
if(g!=null)h.l(0,i,g)}if(h.a!==0)a3.l(0,o,h)
f=A.x(a,s)
for(m=new A.cB(n,n.r,n.e,m);m.m();){l=m.d
e=b.hM(o,l)
if(e!=null)f.l(0,l,e)}if(f.a!==0)a4.l(0,o,f)}a7=b.z
a7===$&&A.j()
a7=new A.Z(a7,A.o(a7).i("Z<1,2>")).gu(0)
s=t.cF
r=t.j
while(a7.m()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.e([],s)
for(m=J.K(d);m.m();){c=m.gp()
if(q.b(c)&&typeof c.h(0,"field")=="string"&&typeof c.h(0,"value")=="string")o.push(new A.fq(A.F(c.h(0,"field")),A.F(c.h(0,"value"))))}if(o.length!==0)a6.l(0,p.a,o)}return new A.mG(A.x(a,a0),a2,a3,a4,A.x(a1,a5),A.x(a1,a5),A.x(a,a5),A.x(a,a5),A.x(a,a5),A.x(a1,a5),A.x(a1,a5),A.x(a1,a5),a6)}}
A.mM.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:85}
A.mN.prototype={
$1(a){t.d7.a(a)
return new A.L(A.F(a.a),A.F(a.b),t.q)},
$S:86}
A.k0.prototype={
dZ(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.f(v.G.window).setTimeout(A.am(new A.k1(this)),7000))}}
A.k1.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:24}
A.kf.prototype={
dQ(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.ks.prototype={
ib(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.W(a,k,"door-speaker",j)
l.b!==$&&A.y()
l.b=i
s=A.W(a,k,"door-line",j)
l.c!==$&&A.y()
l.c=s
r=l.a
A.f(r.appendChild(i))
A.f(r.appendChild(s))
s=A.W(a,k,"door-cite-list",j)
l.e!==$&&A.y()
l.e=s
i=A.W(a,k,"door-cite-result",j)
l.f!==$&&A.y()
l.f=i
A.f(r.appendChild(s))
A.f(r.appendChild(i))
for(i=A.jD,s=l.r,q=0;q<5;++q){p=B.e8[q]
o=A.f(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.kt(l,p)
if(typeof n=="function")A.k(A.w("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.eE()]=n
o.addEventListener("click",m)
A.f(r.appendChild(o))
B.a.k(s,o)}i=A.W(a,"button","door-continue","continue")
l.d!==$&&A.y()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.am(new A.ku(l)))
A.f(r.appendChild(i))
A.f(A.i(a.body).appendChild(r))},
e_(a,b){var s,r,q,p=this
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
co(a){var s,r,q=this,p=q.c
p===$&&A.j()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.r)(p),++r)A.f(p[r].style).display="none"
p=q.d
p===$&&A.j()
A.f(p.style).display=""
p=q.f
p===$&&A.j()
p.textContent=""},
hW(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.j()
s.textContent=""
for(r=b.length,q=A.jD,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.f(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.kv(o,this)
if(typeof o=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.eE()]=o
m.addEventListener("click",l)
A.f(s.appendChild(m))}},
c7(){var s,r=this
r.z=!1
s=r.e
s===$&&A.j()
s.textContent=""
s=r.f
s===$&&A.j()
s.textContent=""
r.a.className="door"},
skL(a){this.w=t.ov.a(a)},
skN(a){this.x=t.jE.a(a)},
skM(a){this.y=t.bZ.a(a)}}
A.kt.prototype={
$1(a){var s
A.f(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.ku.prototype={
$1(a){var s
A.f(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.kv.prototype={
$1(a){var s
A.f(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.ky.prototype={
ic(a){var s,r,q,p=this,o=p.a,n=A.W(o,"h1","journal-title",null)
p.f!==$&&A.y()
p.f=n
s=A.W(o,"div","ending-copy",null)
p.r!==$&&A.y()
p.r=s
r=p.b
A.f(r.appendChild(n))
A.f(r.appendChild(s))
q=A.W(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.am(new A.kz(p)))
A.f(r.appendChild(q))},
hX(a,b){var s,r,q,p,o,n,m=this
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
A.f(s.appendChild(n))}m.ce()},
skO(a){this.w=t.jE.a(a)}}
A.kz.prototype={
$1(a){var s
A.f(a)
s=this.a
s.aE()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.l1.prototype={
ie(a){var s,r="help-copy",q=this.b,p=this.a
A.f(q.appendChild(A.W(p,"h1","journal-title","house notes")))
A.f(q.appendChild(A.W(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.f(q.appendChild(A.W(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.W(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.am(new A.l2(this)))
A.f(q.appendChild(s))}}
A.l2.prototype={
$1(a){A.f(a)
return this.a.aE()},
$S:1}
A.lp.prototype={
it(){var s,r=this,q=r.a,p=A.W(q,"div","page-turn",null),o=A.W(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.am(new A.lq(r)))
s=A.W(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.am(new A.lr(r)))
q=A.W(q,"span","right-day-label",null)
r.Q!==$&&A.y()
r.Q=q
A.f(p.appendChild(o))
A.f(p.appendChild(q))
A.f(p.appendChild(s))
return p},
eV(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.eb(s.CW+a,r)
s.eB()},
eb(a,b){if(a<1)return 1
if(a>b)return b
return a},
jf(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.j()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.j()
s.textContent=""
for(s=j.w.dX(),r=s.length,q=A.jD,p=j.a,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=B.a.gO(n.c).n(0)
l=A.f(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.ls(j,n,l)
if(typeof m=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.eE()]=m
l.addEventListener("click",k)
A.f(i.appendChild(l))}},
eB(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.j()
s=t.r
r=A.e([],s)
for(q=j.f,p=q.b,o=A.o(p).i("al<2>"),n=new A.al(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.lt())
j.eA(i,r)
i=j.Q
i===$&&A.j()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.j()
s=A.e([],s)
for(r=new A.al(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.lu())
j.eA(i,s)
k=B.d.a_(q.f/4,0,1)
i=j.as
i===$&&A.j()
A.f(i.style).setProperty("width",B.d.ci(k*100,1)+"%")},
eA(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.f(a.appendChild(this.iR(b[r])))},
iR(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.W(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.f(k.createElement("div"))
n.className=q
n.textContent=o
A.f(n.style).setProperty("--shake",B.d.n(p.b))
A.f(j.appendChild(n))}m=a.r
if(m!=null){l=this.iZ(m,!1)
l.className=A.F(l.className)+" margin"
A.f(j.appendChild(l))}return j},
iZ(a,b){var s=b?"hand-line struck":"hand-line",r=A.W(this.a,"div",s,a.n(0))
A.f(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.lq.prototype={
$1(a){A.f(a)
return this.a.eV(-1)},
$S:1}
A.lr.prototype={
$1(a){A.f(a)
return this.a.eV(1)},
$S:1}
A.ls.prototype={
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
A.lt.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.lu.prototype={
$2(a,b){var s=t.L
return B.c.F(s.a(a).a,s.a(b).a)},
$S:13}
A.f7.prototype={
bE(a){var s=this.b
s.className="panel"
A.f(s.style).setProperty("--panel-fade","0.25s")
A.f(A.i(this.a.body).appendChild(s))},
ce(){var s,r,q,p,o=this,n=o.b
if(B.b.v(A.F(n.className),"open"))return
s=$.lU
if(s!=null&&s!==o)s.aE()
$.lU=o
r=o.a
o.d=A.i(r.activeElement)
A.qp(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.am(o.gj9())
o.e=q
r.addEventListener("keydown",q)
p=A.rz(n)
if(p.length!==0)B.a.gaS(p).focus()},
aE(){var s,r,q=this,p=q.b
if(!B.b.v(A.F(p.className),"open"))return
p.className="panel"
if($.lU===q)$.lU=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
ja(a){A.f(a)
if(A.aV(a.defaultPrevented))return
if(A.F(a.code)==="Escape"){this.aE()
return}if(A.F(a.code)==="Tab")this.jr(a)},
jr(a){var s,r=A.rz(this.b)
if(r.length===0)return
s=A.i(this.a.activeElement)
if(A.aV(a.shiftKey)){if(s===B.a.gaS(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gO(r).focus()}}else if(s===B.a.gO(r)||!B.a.v(r,s)){a.preventDefault()
B.a.gaS(r).focus()}},
scd(a){this.c=t.jE.a(a)}}
A.m6.prototype={
hV(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.mD.prototype={
ik(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.f(i.appendChild(A.W(a,"h2","journal-title","Rest")))
A.f(i.appendChild(A.W(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.W(a,"div","entry-picker",null)
for(r=A.jD,q=0;q<2;++q){p=B.bj[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.bo[n]
l=A.f(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.mE(this,p,m)
if(typeof k=="function")A.k(A.w("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.eE()]=k
l.addEventListener("click",j)
A.f(s.appendChild(l))}}A.f(i.appendChild(s))},
skP(a){this.f=t.as.a(a)}}
A.mE.prototype={
$1(a){var s,r
A.f(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.aE()},
$S:3}
A.bI.prototype={}
A.jY.prototype={
l6(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.N(s)
q=new A.V(s,r.i("m(1)").a(new A.k_()),r.i("V<1,m>")).aX(0)
r=this.b
r.J(0)
s=J.tI(a,t.N)
p=s.$ti
r.I(0,new A.O(s,p.i("t(n.E)").a(q.gbV(q)),p.i("O<n.E>")))},
ka(a,b){var s,r,q,p,o,n=A.e([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.v(0,o.a))n.push(o)}return n}}
A.k_.prototype={
$1(a){return t.e.a(a).a},
$S:87}
A.jZ.prototype={
$2(a,b){var s,r=t.e
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.F(r,s):B.c.F(a.c,b.c)},
$S:88}
A.iR.prototype={
kz(a){return this.c.v(0,t.g.a(a))},
l4(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.ag(0,j.gjY())||!a.a.ag(0,new A.n4(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.h(0,r)
p=q==null?null:q.h(0,s.b)
j=!0
if(p!=null)if(!k.v(0,r)){o=s.c
if(o!==B.a6){n=s.d
if(n<J.aQ(p)){o=o===B.J
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.L}else j=!1}}}if(j)return!1
m=new A.iQ(r,s.b,A.ap(p,t.kX),B.J)
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
eZ(a){var s=this.a,r=A.o(s).i("aj<1>"),q=r.i("O<n.E>")
s=A.Q(new A.O(new A.aj(s,r),r.i("t(n.E)").a(new A.n1(a)),q),q.i("n.E"))
B.a.Y(s,new A.n2())
return s},
jJ(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.h4
s=m.a.h(0,a)
if(s==null)return B.h5
r=B.c.K(a.b-1,7)
q=a.a
p=m.b.v(0,q)||r+1>=3||m.f?B.aL:B.P
o=p===B.P&&m.r.v(0,q)&&s.a0(B.aM)?B.aM:p
if(s.a0(o))n=o
else n=s.a0(B.P)?B.P:B.aL
r=s.h(0,n)
r.toString
r=new A.iQ(a,n,A.ap(r,t.kX),B.J)
m.e=r
return new A.iP(r)},
jT(a){var s,r,q,p,o,n=this.e
if(n==null)return B.cd
if(n.d!==B.J)return B.h2
n.e=a
s=a===B.L
n.d=s?B.a6:B.a4
r=this.d
q=s?B.cb:B.fO
p=n.a
o=p.a
p=p.b
B.a.k(r,new A.cm(q,o,p,a,null))
if(a===B.R)B.a.k(r,new A.cm(B.fR,o,p,a,null))
if(s)this.eC(n)
return new A.iO(n)},
jE(){var s,r=this.e
if(r==null)return B.cd
s=r.d
if(s!==B.a4&&s!==B.a5)return B.h3
r.d=B.a5
if(++r.f>=r.c.length){r.d=B.a6
this.eC(r)
return new A.fp(r,!0)}return new A.fp(r,!1)},
jU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.a4&&s!==B.a5}else s=!0
if(s)return i
r=h.gbX()
if(r==null)return i
s=t.N
q=A.x(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.d(o,p)
p=o[p].c}else p=B.bm
p=J.K(p)
while(p.m()){o=p.gp()
q.l(0,o.a,o.b)}p=h.a
o=p.a
n=A.dX(q,s,s)
m=c.jc(!0,!0,o,new A.na(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.a7){B.a.k(this.d,new A.cm(B.fQ,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){o=B.a.gO(j.c)
s=A.qv(s,s)
s.I(0,o.a)
s.I(0,q)
p.jB(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.ce)if(k===B.aO){s=n.b
s=s.gL(s)}else s=!1
else s=!0
if(s)B.a.k(this.d,new A.cm(B.fP,o,p.b,i,l))}}return m},
eC(a){var s=a.a
this.b.k(0,s.a)
this.c.k(0,s)
this.e=null},
si3(a){this.r=t.Q.a(a)}}
A.n4.prototype={
$1(a){var s=this.a.a
return new A.aj(s,A.o(s).i("aj<1>")).a1(0,new A.n3(A.F(a)))},
$S:4}
A.n3.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:14}
A.n1.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:14}
A.n2.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.F(a.c,b.c)
return s!==0?s:B.c.F(a.d,b.d)},
$S:90}
A.n0.prototype={
$2(a,b){var s=t.kX
return B.c.F(s.a(a).a,s.a(b).a)},
$S:91}
A.iS.prototype={}
A.jg.prototype={}
A.ov.prototype={
$1(a){return B.b.W(A.F(a),"off.")},
$S:4}
A.aZ.prototype={
A(){return"DoorChoice."+this.b}}
A.bn.prototype={
A(){return"VisitPhase."+this.b}}
A.bo.prototype={
A(){return"VisitTier."+this.b}}
A.cJ.prototype={
A(){return"VisitorFactKind."+this.b}}
A.cm.prototype={
C(){var s,r=this,q=A.x(t.N,t.z)
q.l(0,"kind",r.a.b)
q.l(0,"visitor",r.b)
q.l(0,"day",r.c)
s=r.d
if(s!=null)q.l(0,"choice",s.b)
s=r.e
if(s!=null)q.l(0,"ordinal",s)
return q}}
A.c0.prototype={
A(){return"VisitorIssueCode."+this.b}}
A.bp.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.bp&&b.a===this.a&&b.b===this.b},
gE(a){return A.ce(this.a,this.b,B.k,B.k)}}
A.by.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.by&&b.a===this.a&&b.b===this.b},
gE(a){return A.ce(this.a,this.b,B.k,B.k)}}
A.b4.prototype={
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.b4&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gE(a){var s=this
return A.ce(s.a,s.b,s.c,s.d)},
C(){var s=this
return A.S(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.iT.prototype={
C(){var s,r,q,p=this.a
p=A.Q(p,A.o(p).c)
B.a.X(p)
s=this.b
r=A.o(s)
q=r.i("d_<1,R<m,@>>")
s=A.Q(new A.d_(s,r.i("R<m,@>(1)").a(new A.n_()),q),q.i("n.E"))
r=this.c
return A.S(["contacted",p,"resolved",s,"active",r==null?null:r.C()],t.N,t.z)}}
A.n_.prototype={
$1(a){return t.g.a(a).C()},
$S:92}
A.ha.prototype={
C(){var s=this,r=s.a.C(),q=s.e
q=q==null?null:q.b
return A.S(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.jV.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:93}
A.jW.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:94}
A.jX.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:95}
A.iQ.prototype={
gbX(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.d(r,s)
s=r[s].b}else s=null
return s}}
A.n5.prototype={}
A.b5.prototype={}
A.iP.prototype={}
A.iO.prototype={}
A.fp.prototype={}
A.fI.prototype={
gb0(){var s,r=this.k4
if(r){s=this.w
s===$&&A.j()
s=s.a.b}else s="safe"
return A.mo("next",r?this.gjO():B.eq,!1,null,s)},
gcT(){if(this.k4){var s=this.d
s===$&&A.j()
s=s.b===B.M}else s=!1
return s},
gjO(){var s,r
if(!this.k4)return B.l
s=this.r
s===$&&A.j()
r=this.w
r===$&&A.j()
return B.cz.jP(s,r)},
gkq(){var s=this.fy
if(s==null)return null
return"draws="+s.b+";triangles="+s.c+";instances="+s.e+";gpuBytes="+s.r+";creates="+s.x+";deletes="+s.y+";frameMs="+B.d.ci(this.go,3)},
gkp(){var s=this.fy
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.go<=100},
aF(){var s,r,q,p,o,n,m=this,l=A.vk(m.a)
m.d=l
l=l.hy()
m.r=l
l=m.w=B.aP.hO(l)
q=m.b
p=m.c
s=new A.iC(q,p,q,p)
p=A.qH(m.d)
m.e=p
try{p.ho(new A.ir(l,384,216,l.b.v(0,"shadows")?1:0),s)}catch(o){r=A.ab(o)
l=m.w
if(l===B.Y)throw o
m.x=l.a.b+" profile failed; using safe graph: "+A.q(r)
m.w=B.Y
l=A.qH(m.d)
l.ho(B.f4,s)
m.e=l}l=m.e
l.bK()
n=A.v_(l.w.a.b)
B.a.k(l.d,n)
m.f=n
m.k4=!0},
aw(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("Pixeldart surface size must be positive",null))
if(!r.k4){r.b=a
r.c=b
return}s=r.e
s===$&&A.j()
s.bK()
new A.iC(a,b,a,b).H()
r.b=a
r.c=b},
jH(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="wall-plaster",a9="grime"
if(!a7.k4||a7.Q.length!==0)return
s=a7.cx
r=a7.e
r===$&&A.j()
s.l(0,a8,r.gao().hB("texture:wall-plaster",256,256))
s.l(0,a9,a7.e.gao().hB("texture:grime",512,512))
a7.db=a7.e.gao().dL(A.p8(s.h(0,a8),!1,"quarantine-house-safe",0.58,0.58,0.58,1,1))
r=a7.cy
r.l(0,"cellar",a7.e.gao().dL(A.p8(s.h(0,a9),!1,"quarantine-house-cellar",0.44,0.46,0.48,1,1)))
for(q=b0.b,p=q.length,o=a7.Q,n=a7.as,m=a7.at,l=a7.y,k=a7.z,j=0;i=q.length,j<i;q.length===p||(0,A.r)(q),++j){h=q[j]
g=a7.eF(b0,h)
i=a7.e.w
if(i==null)i=A.k(A.l("renderer is not initialized"))
f=h.a
if(i.r)A.k(A.l("resource library is disposed"))
e=i.a
g.H()
d=e.b.bk(g,"room:"+f)
c=d.a
e.c.l(0,c,e.cP(g))
i.d.k(0,d)
B.a.k(l,d)
k.l(0,f,d)
i=r.h(0,f)
if(i==null){i=a7.db
i.toString}b=new A.b2(d,i,B.K,-1,B.S,B.ac,!0,!0,0,null)
i=a7.f
i===$&&A.j()
B.K.H()
e=i.a
a=e.$ti
e.aq(a.c.a(d))
e=e.b
if(!(c>=0&&c<e.length))return A.d(e,c)
g=e[c].c
e=(g==null?a.y[1].a(g):g).d
c=B.K.aA()
e=e.gbW()
a=A.N(e)
A.dN(new A.V(e,a.i("B(1)").a(c.gbB()),a.i("V<1,B>")))
a0=i.b.cW(b)
B.a.k(o,a0)
n.l(0,f,a0)
m.l(0,f,b)}for(j=0;j<q.length;q.length===i||(0,A.r)(q),++j){h=q[j]
for(r=h.e,p=r.length,o=h.a,a1=0;a1<r.length;r.length===p||(0,A.r)(r),++a1){a2=r[a1]
n=a2.c
m=a2.d
a7.e3(o,a7.ew(h,a2.b,n,n+a2.e,m,m+a2.f,7902632),new A.nA(a2))}}for(r=b0.c,q=r.length,p=b0.e,j=0;j<r.length;r.length===q||(0,A.r)(r),++j){a3=r[j]
if(a3.as)continue
h=p.h(0,a3.b)
if(h==null)continue
o=h.a
a7.e3(o,a7.ew(h,a3.ak(o),a3.ad(o),a3.ad(o)+a3.w,0,a3.x,5915445),new A.nB(a3))}a4=A.yb(A.xv(b0))
a7.dx=a7.e.gao().dL(A.p8(s.h(0,a9),!0,"quarantine-house-exterior-shell",0.5,0.5,0.5,1,1))
a5=a7.e.gao().dM(a4,"exterior:main-shell")
B.a.k(l,a5)
s=a7.dx
s.toString
a6=a7.ay=new A.b2(a5,s,B.K,-1,B.S,B.ac,!0,!0,0,null)
s=a7.f
s===$&&A.j()
s.bS(a6)
a7.ax=s.b.cW(a6)},
hT(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a2.e,a1=a0.h(0,a3)
if(a1==null)return
s=a1.a
r=A.as([s],t.N)
for(q=a2.av(s),p=J.K(q.a),q=new A.P(p,q.b,q.$ti.i("P<1>"));q.m();){o=p.gp()
n=o.cf(s)
if(o.ax&&!o.ay&&!o.z&&n!=null&&a0.h(0,n)!=null)r.k(0,n)}for(a0=a.as,a0=new A.Z(a0,A.o(a0).i("Z<1,2>")).gu(0),s=a.at;a0.m();){m=a0.d
q=m.a
p=s.h(0,q)
p.toString
l=a.cQ(p,r.v(0,q)?-1:0)
p=a.f
p===$&&A.j()
o=m.b
k=l.c
k.H()
j=p.a
i=j.$ti
h=i.c.a(l.a)
j.aq(h)
j=j.b
h=h.a
if(!(h>=0&&h<j.length))return A.d(j,h)
g=j[h].c
j=(g==null?i.y[1].a(g):g).d
k=k.aA()
j=j.gbW()
i=A.N(j)
A.dN(new A.V(j,i.i("B(1)").a(k.gbB()),i.i("V<1,B>")))
p=p.b
i=p.$ti
i.c.a(o)
i.y[1].a(l)
p.aq(o)
p=p.b
o=o.a
if(!(o>=0&&o<p.length))return A.d(p,o)
p[o].sbj(l)
s.l(0,q,l)}for(a0=a.ch,s=a0.length,f=0;f<a0.length;a0.length===s||(0,A.r)(a0),++f){e=a0[f]
d=r.v(0,e.a)&&e.d.$0()?-1:0
q=a.f
q===$&&A.j()
p=a.cQ(e.c,d)
o=p.c
o.H()
k=q.a
j=k.$ti
i=j.c.a(p.a)
k.aq(i)
k=k.b
i=i.a
if(!(i>=0&&i<k.length))return A.d(k,i)
g=k[i].c
k=(g==null?j.y[1].a(g):g).d
o=o.aA()
k=k.gbW()
j=A.N(k)
A.dN(new A.V(k,j.i("B(1)").a(o.gbB()),j.i("V<1,B>")))
q=q.b
j=q.$ti
o=j.c.a(e.b)
j.y[1].a(p)
q.aq(o)
q=q.b
o=o.a
if(!(o>=0&&o<q.length))return A.d(q,o)
q[o].sbj(p)}a0=new A.kE().jS(a3).a
c=a.ax
b=a.ay
if(c!=null&&b!=null){l=a.cQ(b,a0!==0?-1:0)
s=a.f
s===$&&A.j()
s.bS(l)
s.b.dR(c,l)
a.ay=l}},
kX(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(!j.k4)return
s=j.as.h(0,b)
r=j.at
q=r.h(0,b)
p=j.z
o=p.h(0,b)
n=a.e.h(0,b)
if(s==null||q==null||o==null||n==null)return
m=j.e
m===$&&A.j()
l=m.gao().dM(j.eF(a,n),"room:"+b+":drift-"+a.r.b)
k=new A.b2(l,q.b,q.c,q.d,q.e,q.f,!0,!0,q.x,q.y)
m=j.f
m===$&&A.j()
m.bS(k)
m.b.dR(s,k)
r.l(0,b,k)
p.l(0,b,l)
p=j.y
B.a.aj(p,o)
B.a.k(p,l)
p=j.e.gao()
if(p.r)A.k(A.l("resource library is disposed"))
p.a.b4(o)
p.d.aj(0,o)
$.H.j().setAttribute("data-renderer-geometry-refreshes",""+(j.ok+1));++j.ok},
hP(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=A.as([b],t.N),h=a.e,g=h.h(0,b)
if(g!=null)for(s=g.a,r=a.av(s),q=J.K(r.a),r=new A.P(q,r.b,r.$ti.i("P<1>"));r.m();){p=q.gp()
o=p.cf(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&h.h(0,o)!=null)i.k(0,o)}n=new A.hQ(a).hG(i,c)
m=A.e([],t.dQ)
for(l=0;l<n.length;++l){k=n[l]
this.ef(k.b)
h=k.a
B.a.k(m,new A.ik(new A.B(h.a,h.b,h.c),k.d,k.c))}j=A.te(d)
h=Math.max(0.1,0.8*e)
if(d===0)s=null
else{this.ef(A.td(d))
s=new A.kr(new A.B(j.a,j.b,j.c),1)}this.fr=new A.hG(B.dW,1.5,14,B.bg,h,s,m)},
aB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(!g.k4)throw A.c(A.l("Pixeldart runtime is not initialized"))
s=g.dy
if(s==null){s=new Float32Array(16)
s[0]=1
s[5]=1
s[10]=1
s[15]=1
r=new A.cd(s)
q=A.p7(g.b/g.c,60,1.0471975511965976,0.1)
s=new A.dU(r,q,q.V(0,r),B.y,B.fy,0.1,60,g.b/g.c)}p=g.fr
o=g.fx
n=g.k3++
m=g.id
l=new A.mF()
$.q1()
k=$.m4.$0()
l.a=k
l.b=null
k=g.e
k===$&&A.j()
j=g.f
j===$&&A.j()
k.je()
k.bK()
i=B.a.v(k.d,j)
if(!i)A.k(A.w("world was not created by this renderer",f))
if(k.at!=null)A.k(A.l("renderer.beginFrame called twice without end/abort"))
i=s.d
if(!i.ga2(0))A.k(A.w("CameraView.eye must be finite: "+i.n(0),f))
i=s.e
if(!i.ga2(0)||i.gbv()<1e-12)A.k(A.w("CameraView.forward must be finite and nonzero: "+i.n(0),f))
i=s.f
if(isFinite(i)){h=s.r
h=!isFinite(h)||i<=0||h<=i}else h=!0
if(h)A.k(A.w("CameraView requires 0 < near < far, got "+A.q(i)+"/"+s.r,f))
i=s.w
if(!isFinite(i)||i<=0)A.k(A.w("CameraView.aspect must be finite and > 0: "+A.q(i),f))
if(!s.a.ga2(0)||!s.b.ga2(0)||!s.c.ga2(0))A.k(A.w("CameraView matrices must be finite",f))
p.H()
o.H()
if(!isFinite(m))A.k(A.w("FrameInput.timeSeconds must be finite: "+A.q(m),f))
k.at=new A.kL(s,p,o,n,m)
k.ax=j
s=k.c
if(s.b===B.ak)A.k(A.l("FrameQueue.beginFrame called twice without end/abort"))
s.b=B.ak
s.c=0
B.a.J(s.a)
g.fy=g.e.kd()
s=$.m4.$0()
l.b=s
g.go=l.gkb()/1000},
aT(a){},
hr(){},
hz(){++this.k1},
eF(a,b){var s,r,q,p,o,n=A.t0(a,b),m=A.Q(n.a,t.i)
B.a.I(m,n.b)
B.a.I(m,n.c)
B.a.I(m,n.d)
s=new Float32Array(A.a0(m))
r=A.e([],t.k)
for(n=s.length,q=0;q<n;q+=14){m=s[q]
p=q+1
if(!(p<n))return A.d(s,p)
p=s[p]
o=q+2
if(!(o<n))return A.d(s,o)
B.a.k(r,new A.B(m,p,s[o]))}return new A.bV(B.af,s,null,A.dN(r))},
e3(a,b,c){var s,r,q,p=this
t.al.a(c)
s=p.e
s===$&&A.j()
r=s.gao().dM(b,"decoration:"+a)
B.a.k(p.y,r)
q=new A.b2(r,p.j0(a),B.K,0,B.S,B.ac,!0,!0,0,null)
s=p.f
s===$&&A.j()
s.bS(q)
B.a.k(p.ch,new A.ji(a,s.b.cW(q),q,c))},
j0(a){var s=this.cy.h(0,a)
if(s==null){s=this.db
s.toString}return s},
am(a){return this.kG(t.G.a(a))},
kG(a){var s=0,r=A.bc(t.H),q,p=this,o,n,m,l
var $async$am=A.bd(function(b,c){if(b===1)return A.b9(c,r)
for(;;)switch(s){case 0:if(!p.k4){s=1
break}o=A.e([],t.iw)
for(n=0;n<2;++n){m=B.eo[n]
l=a.h(0,m)
if(l!=null)o.push(p.bM(m,l))}s=3
return A.af(A.kR(o,t.H),$async$am)
case 3:case 1:return A.ba(q,r)}})
return A.bb($async$am,r)},
bM(a,b){return this.j_(a,b)},
j_(a,b){var s=0,r=A.bc(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c
var $async$bM=A.bd(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=n.cx.h(0,a)
if(d==null){s=1
break}p=4
h=v.G
g=A.f(A.f(h.document).createElement("img"))
g.src=b
m=g
s=7
return A.af(A.aO(A.f(m.decode()),t.X),$async$bM)
case 7:g=A.f(A.f(h.document).createElement("canvas"))
g.width=A.a(m.naturalWidth)
g.height=A.a(m.naturalHeight)
l=g
k=A.i(l.getContext("2d"))
if(!t.m.b(k)){h=A.l("2D canvas context unavailable for "+a)
throw A.c(h)}k.drawImage(m,0,0)
j=t.mR.a(A.f(k.getImageData(0,0,A.a(m.naturalWidth),A.a(m.naturalHeight))).data)
h=n.e
h===$&&A.j()
h=h.gao()
f=new Uint8Array(A.a0(j))
if(h.r)A.k(A.l("resource library is disposed"))
h.c.le(d,f)
$.H.j().setAttribute("data-renderer-texture-"+a,"loaded")
p=2
s=6
break
case 4:p=3
c=o.pop()
i=A.ab(c)
h=$.H.j()
h.setAttribute("data-renderer-texture-"+a,"fallback")
A.f(v.G.console).warn("Pixeldart texture "+a+" unavailable: "+A.q(i))
s=6
break
case 3:s=2
break
case 6:case 1:return A.ba(q,r)
case 2:return A.b9(o.at(-1),r)}})
return A.bb($async$bM,r)},
cQ(a,b){return new A.b2(a.a,a.b,a.c,b,a.e,a.f,!0,!0,a.x,a.y)},
ew(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.a2.j().aO(a),k=a.d,j=k.a,i=k.b,h=k.c
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
default:k=null}o=new A.dp(new Float32Array(5376))
o.aW(k[0],k[1],k[2],k[3],g)
n=B.w.bb(o.a,0,o.b)
k=A.e([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.d(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.d(n,p)
k.push(new A.B(r,q,n[p]))}return new A.bV(B.af,n,null,A.dN(k))},
ef(a){return new A.db((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
$ipc:1}
A.nA.prototype={
$0(){return!this.a.w},
$S:15}
A.nB.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:15}
A.ei.prototype={
gb0(){return A.mo("legacy",B.l,this.e,this.f,"legacy")},
gcT(){return this.x},
aF(){var s,r=this
if(r.w)return
s=A.v0(r.a,r.b,r.c)
r.r!==$&&A.y()
r.r=s
s.fA=s.fz=s.fw=r.d
r.w=!0},
aw(a,b){var s,r=this
if(a<=0||b<=0)throw A.c(A.w("legacy surface size must be positive",null))
r.b=a
r.c=b
if(r.w){s=r.r
s===$&&A.j()
s.aw(a,b)}},
aB(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.w)throw A.c(A.l("legacy runtime is not initialized"))
if(j.x||$.nU==null)return;++j.y
$.H.j().setAttribute("data-renderer-frame-submits",""+j.y)
s=j.r
s===$&&A.j()
r=$.rI
q=$.b7.j()
s.fE=A.te($.dE.j().gbc()).gac()
s.shq(A.td($.dE.j().gbc()))
p=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.dE.j().gbc()))
s.fI=p<0?0:p
p=$.bD.j()
o=p.r+=r
n=0.025*p.f
p.a=p.a.U(0,p.d.V(0,(A.oT(o*0.28,1309)*2-1)*n)).U(0,p.c.V(0,(A.oT(p.r*0.28,2839)*2-1)*n))
p=$.bD.j()
s.fJ=p.a
s.dc=p.b
s.dd=p.c
s.de=p.d
m=A.wB(0,0.25,0.11)
s.df=m.a
s.dg=m.b
s.dh=m.c
p=s.c4
l=p==null?s.bo:p
if(l==null)l=s.aP
p=s.au
p.aD(l)
s.al.depthMask(!0)
p.jV(l,s.df/255,s.dg/255,s.dh/255)
s.d6=s.c5=0
s.d8=!1
s.bq=0
k=$.nU
if(k!=null)k.k8($.aW,$.jS())
s.ko(r,q)
$.rm.j().dQ(B.cx,r)},
aT(a){},
hr(){this.x=!0},
hz(){this.x=!1},
$ipc:1}
A.ji.prototype={}
A.oD.prototype={
$1(a){var s
try{A.qi(a,this.a)
return!0}catch(s){if(A.ab(s) instanceof A.J)return!1
else throw s}},
$S:97}
A.oE.prototype={
$0(){$.b8=null
$.bs.j().aG($.H.j())},
$S:0}
A.oF.prototype={
$2(a,b){var s,r,q,p,o,n
if($.a_.j().gaJ().a===21){A.rQ(!1)
return}s=$.a2.j().r.b
$.a_.j().i0(a,b,$.aW)
r=$.a2.j().r.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cn()
if(typeof n!=="number")return A.jO(n)
if(!(o<n))break
if($.a2.b===$.a2)A.k(A.ak(""))
p=B.a.h(B.B,q).b
o=$.nU
if(o!=null)o.kV(p)
o=$.bG
if(o!=null){n=$.a2.b
if(n===$.a2)A.k(A.ak(""))
o.kX(n,p)}o=q
if(typeof o!=="number")return o.U()
q=o+1}A.pP("saved after sleep")},
$S:98}
A.oI.prototype={
$0(){$.b8=null
$.bs.j().aG($.H.j())},
$S:0}
A.oJ.prototype={
$0(){$.b8=null
$.bs.j().aG($.H.j())},
$S:0}
A.oK.prototype={
$0(){$.b8=null},
$S:0}
A.oL.prototype={
$0(){$.b8=null},
$S:0}
A.oM.prototype={
$1(a){A.f(a)
return A.rP()},
$S:1}
A.oN.prototype={
$1(a){var s,r
A.f(a)
if(!A.aV(a.repeat))$.co.j().aT(new A.is(A.F(a.code),!0,1))
if(A.F(a.code)==="KeyP"&&!A.aV(a.repeat))$.pJ=!$.pJ
if(A.F(a.code)==="KeyR"&&!A.aV(a.repeat)&&$.rY){s=$.ey
if(s!=null)s.b5()}if(A.F(a.code)==="KeyJ"&&!A.aV(a.repeat)&&!$.aB.j().z){s=$.b8
if(s==null){$.b8=$.eu.j()
s=$.eu.j()
s.i7()
r=s.r.a-1
if(r<1)r=1
s.CW=s.eb(s.CW,r)
s.jf()
s.eB()}else if(s===$.eu.j())$.eu.j().aE()}if(A.F(a.code)==="KeyL"&&!A.aV(a.repeat)&&!$.aB.j().z){s=$.b8
if(s==null){$.b8=$.jC.j()
$.jC.j().ce()}else if(s===$.jC.j())$.jC.j().aE()}if(A.F(a.code)==="KeyH"&&!A.aV(a.repeat)&&!$.aB.j().z){s=$.b8
if(s==null){$.b8=$.jA.j()
$.jA.j().ce()}else if(s===$.jA.j())$.jA.j().aE()}if(A.F(a.code)==="KeyK"&&!A.aV(a.repeat))A.pP("saved")},
$S:3}
A.oO.prototype={
$1(a){A.f(a)
$.co.j().aT(new A.is(A.F(a.code),!1,0))},
$S:3}
A.oP.prototype={
$1(a){A.f(a)
return A.rp()},
$S:1}
A.oG.prototype={
$1(a){A.f(a)
return A.rp()},
$S:1}
A.oH.prototype={
$1(a){A.f(a)
return $.bs.j().aG($.H.j())},
$S:1}
A.od.prototype={
$1(a){var s=A.F(A.f(a).message)
A.oh(s,null)},
$S:3}
A.oe.prototype={
$1(a){var s
A.f(a)
s=a.reason
A.oh("unhandled rejection: "+A.q(s==null?A.F(a.type):s),null)},
$S:3}
A.ok.prototype={
$0(){this.a.className=""},
$S:8}
A.oi.prototype={
$1(a){return t.L.a(a).e},
$S:23};(function aliases(){var s=J.cA.prototype
s.i6=s.n
s=A.n.prototype
s.i5=s.dU
s=A.f7.prototype
s.i7=s.ce})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1
s(J,"wH","ux",27)
r(J.p.prototype,"gbV","v",11)
q(A,"wU","uL",16)
p(A.bw.prototype,"gjY","a0",11)
o(A,"xr","vs",7)
o(A,"xs","vt",7)
o(A,"xt","vu",7)
q(A,"t_","x9",0)
s(A,"xx","uC",27)
r(A.bz.prototype,"gbV","v",11)
o(A,"xA","wm",5)
p(A.i6.prototype,"gl2","l3",64)
p(A.iF.prototype,"gl0","l1",96)
q(A,"yJ","p9",15)
p(A.cd.prototype,"gbB","hD",47)
var n
p(n=A.hT.prototype,"gj1","j2",1)
p(n,"gj3","j4",1)
p(n,"gj7","j8",1)
p(n,"gj5","j6",1)
o(A,"y2","rw",5)
o(A,"y4","rv",5)
o(A,"xS","us",101)
o(A,"xT","ut",102)
p(A.f7.prototype,"gj9","ja",1)
p(A.iR.prototype,"gky","kz",14)
o(A,"t6","wY",103)
o(A,"xX","wi",104)
q(A,"xZ","wl",0)
o(A,"xY","wj",69)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.A,null)
q(A.A,[A.p1,J.hV,A.fh,J.cV,A.n,A.eH,A.cu,A.a5,A.I,A.mz,A.cb,A.dc,A.P,A.fr,A.ac,A.c_,A.bA,A.e6,A.dW,A.dB,A.cg,A.mS,A.lQ,A.eO,A.fL,A.T,A.lE,A.cB,A.al,A.f_,A.nh,A.nI,A.bM,A.j8,A.jv,A.nF,A.iX,A.br,A.av,A.j0,A.dw,A.ae,A.iY,A.jt,A.fX,A.fA,A.jd,A.dC,A.fD,A.fR,A.jw,A.cY,A.hs,A.ny,A.nJ,A.cZ,A.cw,A.j5,A.ig,A.fj,A.ni,A.J,A.L,A.ah,A.ju,A.mF,A.aK,A.fT,A.mU,A.jp,A.lP,A.ja,A.ej,A.m8,A.dh,A.kk,A.kl,A.il,A.dU,A.hG,A.kL,A.cf,A.l0,A.db,A.kr,A.ik,A.ed,A.de,A.cl,A.mZ,A.bV,A.lR,A.m_,A.it,A.b2,A.iC,A.ir,A.kN,A.i6,A.iI,A.lM,A.cn,A.iF,A.d7,A.hE,A.hF,A.kM,A.ai,A.bj,A.aJ,A.M,A.eI,A.m5,A.aH,A.ma,A.aG,A.mc,A.mb,A.dz,A.fc,A.nE,A.jj,A.j7,A.mr,A.mx,A.b0,A.aY,A.aq,A.kn,A.h9,A.dg,A.kO,A.cd,A.m7,A.mR,A.B,A.eG,A.iZ,A.hi,A.j_,A.hw,A.j2,A.eL,A.j3,A.hA,A.j4,A.hO,A.j9,A.hk,A.hj,A.f9,A.jk,A.ip,A.jl,A.dn,A.iw,A.jn,A.ix,A.jo,A.iA,A.jr,A.iz,A.jq,A.iN,A.jx,A.fe,A.iV,A.jy,A.ki,A.hJ,A.hL,A.eT,A.fi,A.D,A.hx,A.im,A.l_,A.cO,A.bX,A.eM,A.n9,A.cQ,A.fW,A.fV,A.iU,A.hz,A.he,A.kh,A.kK,A.iD,A.kY,A.hR,A.hT,A.i5,A.dd,A.lL,A.dp,A.mh,A.mq,A.nb,A.fy,A.js,A.jh,A.jf,A.mA,A.b,A.kg,A.hB,A.kx,A.dZ,A.ij,A.m0,A.eb,A.mw,A.dl,A.hH,A.kV,A.kU,A.k5,A.dP,A.dR,A.dO,A.dQ,A.hl,A.i7,A.ft,A.iW,A.eU,A.l4,A.ms,A.aF,A.kC,A.l5,A.l6,A.kE,A.cN,A.e0,A.mt,A.cM,A.eq,A.l3,A.kB,A.mB,A.hP,A.bS,A.cz,A.lm,A.ll,A.bW,A.hQ,A.aL,A.cD,A.aT,A.b1,A.cv,A.cG,A.az,A.lb,A.f8,A.f0,A.n6,A.i3,A.bh,A.lo,A.kc,A.dS,A.kd,A.lA,A.lz,A.lY,A.lX,A.lZ,A.mp,A.is,A.mn,A.ec,A.ko,A.na,A.du,A.hr,A.lh,A.lj,A.mu,A.bY,A.mv,A.hI,A.mG,A.ds,A.dr,A.fq,A.mL,A.k0,A.kf,A.ks,A.f7,A.m6,A.bI,A.jY,A.iR,A.n5,A.cm,A.bp,A.by,A.b4,A.iT,A.ha,A.iQ,A.fI,A.ei,A.ji])
q(J.hV,[J.hZ,J.eW,J.eX,J.e4,J.e5,J.d8,J.d9])
q(J.eX,[J.cA,J.p,A.cC,A.f4])
q(J.cA,[J.ii,J.dq,J.ca])
r(J.hX,A.fh)
r(J.ln,J.p)
q(J.d8,[J.eV,J.i_])
q(A.n,[A.cL,A.C,A.cc,A.O,A.bP,A.dA,A.c2])
q(A.cL,[A.cX,A.fY])
r(A.fx,A.cX)
r(A.fv,A.fY)
q(A.cu,[A.hn,A.hm,A.iE,A.oy,A.oA,A.nd,A.nc,A.nR,A.kS,A.ns,A.nu,A.lH,A.nw,A.oR,A.oS,A.os,A.m9,A.lT,A.lK,A.lN,A.mO,A.mQ,A.kH,A.kF,A.kG,A.lV,A.lW,A.mg,A.mf,A.me,A.md,A.mi,A.o9,A.oa,A.my,A.oX,A.oV,A.kP,A.lJ,A.oq,A.n7,A.n8,A.k4,A.kZ,A.mm,A.kA,A.kW,A.kX,A.k6,A.k7,A.k8,A.k9,A.ka,A.kb,A.oo,A.kj,A.kD,A.l7,A.ob,A.nQ,A.ld,A.lf,A.mC,A.l8,A.on,A.kw,A.lD,A.lv,A.kp,A.kq,A.of,A.mM,A.mN,A.k1,A.kt,A.ku,A.kv,A.kz,A.l2,A.lq,A.lr,A.ls,A.mE,A.k_,A.n4,A.n3,A.n1,A.ov,A.n_,A.jV,A.jW,A.jX,A.oD,A.oM,A.oN,A.oO,A.oP,A.oG,A.oH,A.od,A.oe,A.oi])
q(A.hn,[A.ng,A.km,A.lw,A.oz,A.nS,A.op,A.kT,A.nt,A.lF,A.lI,A.nz,A.mX,A.mW,A.lO,A.mP,A.kI,A.oW,A.oU,A.le,A.lg,A.la,A.lC,A.lk,A.mH,A.mI,A.lt,A.lu,A.jZ,A.n2,A.n0,A.oF])
r(A.bK,A.fv)
q(A.a5,[A.da,A.ci,A.i0,A.iH,A.iu,A.j6,A.eZ,A.hc,A.bJ,A.fo,A.iG,A.ee,A.hq])
r(A.eg,A.I)
r(A.ho,A.eg)
q(A.C,[A.a1,A.aj,A.aR,A.Z,A.dy,A.fC])
q(A.a1,[A.fl,A.V,A.fg,A.jc])
r(A.d_,A.cc)
q(A.bA,[A.ek,A.el,A.em])
r(A.en,A.ek)
r(A.eo,A.el)
r(A.fJ,A.em)
r(A.er,A.e6)
r(A.cI,A.er)
r(A.eJ,A.cI)
q(A.dW,[A.a4,A.eQ])
q(A.cg,[A.eK,A.fK,A.fS])
r(A.c6,A.eK)
q(A.hm,[A.m1,A.ne,A.nf,A.nG,A.kQ,A.nj,A.no,A.nn,A.nl,A.nk,A.nr,A.nq,A.np,A.nD,A.oj,A.nL,A.nK,A.o7,A.o1,A.o6,A.nY,A.nZ,A.o8,A.o5,A.nW,A.nX,A.o2,A.o3,A.o4,A.o0,A.o_,A.or,A.ml,A.lc,A.l9,A.nA,A.nB,A.oE,A.oI,A.oJ,A.oK,A.oL,A.ok])
r(A.f6,A.ci)
q(A.iE,[A.iB,A.dT])
q(A.T,[A.bw,A.fz,A.jb])
r(A.eY,A.bw)
r(A.e7,A.cC)
q(A.f4,[A.i8,A.ay])
q(A.ay,[A.fE,A.fG])
r(A.fF,A.fE)
r(A.f2,A.fF)
r(A.fH,A.fG)
r(A.f3,A.fH)
q(A.f2,[A.f1,A.i9])
q(A.f3,[A.ia,A.ib,A.ic,A.id,A.ie,A.df,A.f5])
r(A.fM,A.j6)
r(A.fs,A.j0)
r(A.jm,A.fX)
r(A.fB,A.fz)
r(A.bz,A.fK)
r(A.fn,A.fS)
q(A.cY,[A.hf,A.hC,A.i1])
q(A.hs,[A.ke,A.ly,A.lx,A.mY])
r(A.i2,A.eZ)
r(A.nx,A.ny)
r(A.iL,A.hC)
q(A.bJ,[A.e9,A.hS])
r(A.j1,A.fT)
q(A.j5,[A.di,A.d6,A.hb,A.ck,A.dY,A.hh,A.hp,A.hy,A.dk,A.e1,A.bL,A.ff,A.c8,A.ea,A.e2,A.fu,A.fw,A.hK,A.eR,A.hM,A.hN,A.d4,A.eS,A.dm,A.cH,A.dV,A.ep,A.hg,A.cW,A.ht,A.hv,A.aA,A.bv,A.d3,A.d0,A.d1,A.eP,A.cx,A.cy,A.fd,A.dj,A.b3,A.aU,A.hU,A.dv,A.bx,A.aZ,A.bn,A.bo,A.cJ,A.c0])
q(A.cf,[A.b_,A.bm,A.bU,A.ih,A.c9])
r(A.mk,A.nb)
r(A.mj,A.mk)
q(A.f7,[A.ky,A.l1,A.lp,A.mD])
q(A.n5,[A.iS,A.jg,A.b5,A.iP,A.iO,A.fp])
s(A.eg,A.c_)
s(A.fY,A.I)
s(A.fE,A.I)
s(A.fF,A.ac)
s(A.fG,A.I)
s(A.fH,A.ac)
s(A.er,A.fR)
s(A.fS,A.jw)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",u:"double",aD:"num",m:"String",t:"bool",ah:"Null",E:"List",A:"Object",R:"Map",U:"JSObject"},mangledNames:{},types:["~()","~(U)","c7()","ah(U)","t(m)","@(@)","t(ai)","~(~())","ah()","~(@)","t(M)","t(A?)","t(u)","h(bh,bh)","t(b4)","t()","h()","@(m)","ah(@)","~(A?,A?)","@()","t(h)","m?(m)","t(bh)","m(A?)","t(aL)","t(@)","h(@,@)","fe(b_)","h(h,+(bm,cn))","m(ai)","h(X,X)","~(A,bZ)","ah(A,bZ)","c9(h,h,m?)","~(@,@)","c7(m{fallback:m?})","ah(~())","ed?()","dU()","u()","b2(bl)","h(aq<b0>,aq<b0>)","bl(aq<b0>)","h(aq<aY>,aq<aY>)","bl(aq<aY>)","dg(u,u,u,u)","B(B)","@(@,m)","~(dn)","dn()","R<m,m>(R<m,m>,m)","bi<ah>(L<m,m>)","t(U)","0&(m,h?)","U()","A?(A?)","t(bv)","t(az)","ah(@,bZ)","dP(A?)","dO(A?)","dQ(A?)","~(h,@)","de(bU)","dR(A?)","bU(h,h,m?)","t(cG)","t(cN)","~(h)","b(b)","h(+(u,u,u,u),+(u,u,u,u))","E<+(u,u,u,u)>()","t(cD)","h(h,az)","t(bS)","0&()","h(bW,bW)","L<m,m>(m,@)","t(b3)","t(aU)","b_(h,h,m?)","h(h)","L<h,@>(h,ds)","L<h,@>(h,dr)","t(L<@,@>)","L<m,m>(L<@,@>)","m(bI)","h(bI,bI)","h(h,+(b_,bV))","h(b4,b4)","h(by,by)","R<m,@>(b4)","t(bo)","t(bn)","t(aZ)","c7(bm?)","t(eb)","~(b3,aU)","bm(h,h,m?)","t(fm?)","bS(A?)","cz(A?)","~(aD)","~(m)","t(cM)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.en&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eo&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fJ&&A.y0(a,b.a)}}
A.vL(v.typeUniverse,JSON.parse('{"ii":"cA","dq":"cA","ca":"cA","yk":"cC","p":{"E":["1"],"C":["1"],"U":[],"n":["1"]},"hZ":{"t":[],"Y":[]},"eW":{"ah":[],"Y":[]},"eX":{"U":[]},"cA":{"U":[]},"hX":{"fh":[]},"ln":{"p":["1"],"E":["1"],"C":["1"],"U":[],"n":["1"]},"cV":{"a9":["1"]},"d8":{"u":[],"aD":[],"aw":["aD"]},"eV":{"u":[],"h":[],"aD":[],"aw":["aD"],"Y":[]},"i_":{"u":[],"aD":[],"aw":["aD"],"Y":[]},"d9":{"m":[],"aw":["m"],"qz":[],"Y":[]},"cL":{"n":["2"]},"eH":{"a9":["2"]},"cX":{"cL":["1","2"],"n":["2"],"n.E":"2"},"fx":{"cX":["1","2"],"cL":["1","2"],"C":["2"],"n":["2"],"n.E":"2"},"fv":{"I":["2"],"E":["2"],"cL":["1","2"],"C":["2"],"n":["2"]},"bK":{"fv":["1","2"],"I":["2"],"E":["2"],"cL":["1","2"],"C":["2"],"n":["2"],"n.E":"2","I.E":"2"},"da":{"a5":[]},"ho":{"I":["h"],"c_":["h"],"E":["h"],"C":["h"],"n":["h"],"I.E":"h","c_.E":"h"},"C":{"n":["1"]},"a1":{"C":["1"],"n":["1"]},"fl":{"a1":["1"],"C":["1"],"n":["1"],"a1.E":"1","n.E":"1"},"cb":{"a9":["1"]},"cc":{"n":["2"],"n.E":"2"},"d_":{"cc":["1","2"],"C":["2"],"n":["2"],"n.E":"2"},"dc":{"a9":["2"]},"V":{"a1":["2"],"C":["2"],"n":["2"],"a1.E":"2","n.E":"2"},"O":{"n":["1"],"n.E":"1"},"P":{"a9":["1"]},"bP":{"n":["1"],"n.E":"1"},"fr":{"a9":["1"]},"eg":{"I":["1"],"c_":["1"],"E":["1"],"C":["1"],"n":["1"]},"fg":{"a1":["1"],"C":["1"],"n":["1"],"a1.E":"1","n.E":"1"},"en":{"ek":[],"bA":[]},"eo":{"el":[],"bA":[]},"fJ":{"em":[],"bA":[]},"eJ":{"cI":["1","2"],"er":["1","2"],"e6":["1","2"],"fR":["1","2"],"R":["1","2"]},"dW":{"R":["1","2"]},"a4":{"dW":["1","2"],"R":["1","2"]},"dA":{"n":["1"],"n.E":"1"},"dB":{"a9":["1"]},"eQ":{"dW":["1","2"],"R":["1","2"]},"eK":{"cg":["1"],"cF":["1"],"C":["1"],"n":["1"]},"c6":{"eK":["1"],"cg":["1"],"cF":["1"],"C":["1"],"n":["1"]},"f6":{"ci":[],"a5":[]},"i0":{"a5":[]},"iH":{"a5":[]},"fL":{"bZ":[]},"cu":{"d2":[]},"hm":{"d2":[]},"hn":{"d2":[]},"iE":{"d2":[]},"iB":{"d2":[]},"dT":{"d2":[]},"iu":{"a5":[]},"bw":{"T":["1","2"],"p3":["1","2"],"R":["1","2"],"T.K":"1","T.V":"2"},"aj":{"C":["1"],"n":["1"],"n.E":"1"},"cB":{"a9":["1"]},"aR":{"C":["1"],"n":["1"],"n.E":"1"},"al":{"a9":["1"]},"Z":{"C":["L<1,2>"],"n":["L<1,2>"],"n.E":"L<1,2>"},"f_":{"a9":["L<1,2>"]},"eY":{"bw":["1","2"],"T":["1","2"],"p3":["1","2"],"R":["1","2"],"T.K":"1","T.V":"2"},"ek":{"bA":[]},"el":{"bA":[]},"em":{"bA":[]},"e7":{"cC":[],"U":[],"Y":[]},"df":{"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"],"Y":[],"I.E":"h","ac.E":"h"},"cC":{"U":[],"Y":[]},"f4":{"U":[]},"i8":{"U":[],"Y":[]},"ay":{"bk":["1"],"U":[]},"f2":{"I":["u"],"ay":["u"],"E":["u"],"bk":["u"],"C":["u"],"U":[],"n":["u"],"ac":["u"]},"f3":{"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"]},"f1":{"kJ":[],"I":["u"],"ay":["u"],"E":["u"],"bk":["u"],"C":["u"],"U":[],"n":["u"],"ac":["u"],"Y":[],"I.E":"u","ac.E":"u"},"i9":{"I":["u"],"ay":["u"],"E":["u"],"bk":["u"],"C":["u"],"U":[],"n":["u"],"ac":["u"],"Y":[],"I.E":"u","ac.E":"u"},"ia":{"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"],"Y":[],"I.E":"h","ac.E":"h"},"ib":{"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"],"Y":[],"I.E":"h","ac.E":"h"},"ic":{"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"],"Y":[],"I.E":"h","ac.E":"h"},"id":{"pg":[],"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"],"Y":[],"I.E":"h","ac.E":"h"},"ie":{"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"],"Y":[],"I.E":"h","ac.E":"h"},"f5":{"fm":[],"I":["h"],"ay":["h"],"E":["h"],"bk":["h"],"C":["h"],"U":[],"n":["h"],"ac":["h"],"Y":[],"I.E":"h","ac.E":"h"},"j6":{"a5":[]},"fM":{"ci":[],"a5":[]},"br":{"a9":["1"]},"c2":{"n":["1"],"n.E":"1"},"av":{"a5":[]},"fs":{"j0":["1"]},"ae":{"bi":["1"]},"fX":{"r_":[]},"jm":{"fX":[],"r_":[]},"fz":{"T":["1","2"],"R":["1","2"]},"fB":{"fz":["1","2"],"T":["1","2"],"R":["1","2"],"T.K":"1","T.V":"2"},"dy":{"C":["1"],"n":["1"],"n.E":"1"},"fA":{"a9":["1"]},"bz":{"cg":["1"],"qw":["1"],"cF":["1"],"C":["1"],"n":["1"]},"dC":{"a9":["1"]},"I":{"E":["1"],"C":["1"],"n":["1"]},"T":{"R":["1","2"]},"fC":{"C":["2"],"n":["2"],"n.E":"2"},"fD":{"a9":["2"]},"e6":{"R":["1","2"]},"cI":{"er":["1","2"],"e6":["1","2"],"fR":["1","2"],"R":["1","2"]},"cg":{"cF":["1"],"C":["1"],"n":["1"]},"fK":{"cg":["1"],"cF":["1"],"C":["1"],"n":["1"]},"fn":{"cg":["1"],"jw":["1"],"cF":["1"],"C":["1"],"n":["1"]},"jb":{"T":["m","@"],"R":["m","@"],"T.K":"m","T.V":"@"},"jc":{"a1":["m"],"C":["m"],"n":["m"],"a1.E":"m","n.E":"m"},"hf":{"cY":["E<h>","m"]},"hC":{"cY":["m","E<h>"]},"eZ":{"a5":[]},"i2":{"a5":[]},"i1":{"cY":["A?","m"]},"iL":{"cY":["m","E<h>"]},"cZ":{"aw":["cZ"]},"u":{"aD":[],"aw":["aD"]},"cw":{"aw":["cw"]},"h":{"aD":[],"aw":["aD"]},"E":{"C":["1"],"n":["1"]},"aD":{"aw":["aD"]},"cF":{"C":["1"],"n":["1"]},"m":{"aw":["m"],"qz":[]},"j5":{"G":[]},"hc":{"a5":[]},"ci":{"a5":[]},"bJ":{"a5":[]},"e9":{"a5":[]},"hS":{"a5":[]},"fo":{"a5":[]},"iG":{"a5":[]},"ee":{"a5":[]},"hq":{"a5":[]},"ig":{"a5":[]},"fj":{"a5":[]},"ju":{"bZ":[]},"aK":{"v6":[]},"fT":{"iJ":[]},"jp":{"iJ":[]},"j1":{"iJ":[]},"ja":{"pa":[]},"ej":{"pa":[]},"di":{"G":[]},"b_":{"cf":[]},"bm":{"cf":[]},"bU":{"cf":[]},"c9":{"cf":[]},"ih":{"cf":[]},"d6":{"G":[]},"hb":{"G":[]},"ck":{"G":[]},"dY":{"G":[]},"hh":{"G":[]},"hp":{"G":[]},"hy":{"G":[]},"dk":{"G":[]},"e1":{"G":[]},"bL":{"G":[]},"ff":{"G":[]},"c8":{"G":[]},"ea":{"G":[]},"fc":{"uZ":[]},"dz":{"bl":[]},"jj":{"uY":[]},"j7":{"uj":[]},"b0":{"aw":["b0"]},"aY":{"aw":["aY"]},"e2":{"G":[]},"fu":{"G":[]},"eG":{"a7":[]},"iZ":{"X":[]},"hi":{"a7":[]},"j_":{"X":[]},"hw":{"a7":[]},"j2":{"X":[]},"fw":{"G":[]},"eL":{"a7":[]},"j3":{"X":[]},"hA":{"a7":[]},"j4":{"X":[]},"hO":{"a7":[]},"j9":{"X":[]},"hj":{"uX":[]},"f9":{"a7":[]},"jk":{"X":[]},"ip":{"a7":[]},"jl":{"X":[]},"iw":{"a7":[]},"jn":{"X":[]},"ix":{"a7":[]},"jo":{"X":[]},"iA":{"a7":[]},"jr":{"X":[]},"iz":{"a7":[]},"jq":{"X":[]},"iN":{"a7":[]},"jx":{"X":[]},"iV":{"a7":[]},"jy":{"X":[]},"hK":{"G":[]},"eR":{"G":[]},"hM":{"G":[]},"hN":{"G":[]},"d4":{"G":[]},"eS":{"G":[]},"dm":{"G":[]},"cH":{"G":[]},"dV":{"G":[]},"hx":{"u2":[]},"ep":{"G":[]},"aA":{"G":[]},"hg":{"G":[]},"cW":{"G":[]},"ht":{"G":[]},"hv":{"G":[]},"cQ":{"c7":[]},"iU":{"um":[]},"bv":{"G":[]},"d3":{"G":[]},"d0":{"G":[]},"d1":{"G":[]},"cx":{"G":[]},"eP":{"G":[]},"cy":{"G":[]},"fd":{"G":[]},"dj":{"G":[]},"b3":{"G":[]},"aU":{"G":[]},"hU":{"G":[]},"dv":{"G":[]},"bx":{"G":[]},"aZ":{"G":[]},"bn":{"G":[]},"bo":{"G":[]},"cJ":{"G":[]},"c0":{"G":[]},"fI":{"pc":[]},"ei":{"pc":[]},"ur":{"E":["h"],"C":["h"],"n":["h"]},"fm":{"E":["h"],"C":["h"],"n":["h"]},"vb":{"E":["h"],"C":["h"],"n":["h"]},"up":{"E":["h"],"C":["h"],"n":["h"]},"pg":{"E":["h"],"C":["h"],"n":["h"]},"uq":{"E":["h"],"C":["h"],"n":["h"]},"va":{"E":["h"],"C":["h"],"n":["h"]},"kJ":{"E":["u"],"C":["u"],"n":["u"]},"ui":{"E":["u"],"C":["u"],"n":["u"]}}'))
A.vK(v.typeUniverse,JSON.parse('{"eg":1,"fY":2,"ay":1,"fK":1,"fS":1,"hs":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",q:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",u:"Transform.scale must be finite and positive: 1",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.au
return{e:s("bI"),v:s("av"),f5:s("he"),gE:s("dO"),fS:s("dP"),d2:s("dQ"),lJ:s("dR"),dP:s("aY"),kp:s("hk"),bP:s("aw<@>"),gY:s("eI"),B:s("a4<m,m>"),I:s("a4<m,h>"),R:s("c6<m>"),ml:s("cZ"),lD:s("aZ"),jS:s("cw"),gt:s("C<@>"),no:s("bv"),L:s("bh"),V:s("a5"),hZ:s("aF"),D:s("kJ"),Z:s("d2"),mj:s("bi<ah>"),_:s("c7"),bU:s("cy"),n8:s("hP"),lv:s("hR<A>"),hL:s("c9"),ob:s("bS"),gB:s("cz"),dp:s("n<eI>"),bq:s("n<m>"),id:s("n<u>"),e7:s("n<@>"),fm:s("n<h>"),od:s("p<bI>"),ag:s("p<hB>"),hS:s("p<cv>"),r:s("p<bh>"),oP:s("p<aF>"),iw:s("p<bi<~>>"),mc:s("p<hH>"),l2:s("p<c7>"),aW:s("p<bj>"),oX:s("p<yj<A>>"),og:s("p<d7>"),jj:s("p<c9>"),kG:s("p<U>"),b1:s("p<i3>"),cs:s("p<aT>"),ic:s("p<R<m,A>>"),hq:s("p<R<m,m>>"),bV:s("p<R<m,@>>"),kS:s("p<i5>"),mm:s("p<dd>"),dg:s("p<b_>"),hJ:s("p<ai>"),x:s("p<b1>"),de:s("p<dg>"),bz:s("p<bW>"),dQ:s("p<ik>"),aN:s("p<cD>"),fR:s("p<+(h,m)>"),a3:s("p<+(u,u,u,u)>"),o5:s("p<a7>"),u:s("p<X>"),oZ:s("p<fc>"),C:s("p<M>"),c8:s("p<b2>"),bH:s("p<bl>"),kl:s("p<az>"),e_:s("p<bY>"),b2:s("p<ec>"),ao:s("p<aq<aY>>"),mX:s("p<aq<b0>>"),jn:s("p<cG>"),s:s("p<m>"),aA:s("p<iD>"),k:s("p<B>"),U:s("p<b>"),cF:s("p<fq>"),bl:s("p<cm>"),ah:s("p<by>"),E:s("p<aL>"),jX:s("p<cN>"),a9:s("p<cM>"),jU:s("p<ji>"),dz:s("p<cO<de>>"),jk:s("p<cO<bV>>"),n_:s("p<cO<b2>>"),mQ:s("p<cO<cn>>"),eP:s("p<eq>"),df:s("p<t>"),n:s("p<u>"),dG:s("p<@>"),t:s("p<h>"),kC:s("p<U?>"),dM:s("p<A?>"),g2:s("p<aD>"),T:s("eW"),m:s("U"),d4:s("U()"),dY:s("ca"),dX:s("bk<@>"),bY:s("E<bh>"),a:s("E<bj>"),l_:s("E<R<m,m>>"),O:s("E<ai>"),b3:s("E<bW>"),jz:s("E<+(h,m)>"),ge:s("E<+(u,u,u,u)>"),io:s("E<bY>"),h:s("E<m>"),iD:s("E<fq>"),ee:s("E<cm>"),eU:s("E<by>"),cu:s("E<fy>"),j:s("E<@>"),J:s("E<h>"),ia:s("E<A?>"),mK:s("f0"),q:s("L<m,m>"),d7:s("L<@,@>"),iI:s("L<h,@>"),f7:s("R<m,c7>"),iE:s("R<m,ai>"),G:s("R<m,m>"),oQ:s("R<m,t>"),P:s("R<m,@>"),f:s("R<@,@>"),d8:s("R<h,dr>"),c_:s("R<h,ds>"),gz:s("R<m,E<+(u,u,u,u)>>"),kz:s("R<bo,E<by>>"),iu:s("R<h,R<m,m>>"),mz:s("V<B,B>"),dD:s("V<m,m?>"),fP:s("bU"),l0:s("b_"),eb:s("e7"),mR:s("df"),b:s("ah"),K:s("A"),nL:s("b0"),A:s("ai"),f0:s("bW"),gm:s("cD"),ku:s("f8"),lZ:s("yl"),aK:s("+()"),o7:s("+(b_,bV)"),iL:s("+(m,U)"),p3:s("+(bm,cn)"),cW:s("+(u,u,u,u)"),ks:s("X"),mn:s("bX<c9,b2>"),kk:s("bX<bU,de>"),ll:s("bX<b_,bV>"),ox:s("bX<bm,cn>"),n4:s("M"),p9:s("b2"),os:s("bl"),W:s("az"),k8:s("bY"),Q:s("cF<m>"),nO:s("cF<h>"),m9:s("aU"),gC:s("b3"),ad:s("ec"),c:s("aq<aY>"),p:s("aq<b0>"),l:s("bZ"),fO:s("cG"),dB:s("aA"),N:s("m"),lu:s("bm"),aJ:s("Y"),do:s("ci"),cx:s("dq"),ph:s("cI<m,m>"),mL:s("iI"),jJ:s("iJ"),b9:s("B"),bf:s("b"),pc:s("B(B)"),g:s("b4"),nq:s("bn"),kM:s("bo"),bR:s("dr"),ey:s("ds"),mv:s("cm"),kX:s("by"),cq:s("b5"),bn:s("O<aZ>"),ns:s("O<bv>"),hr:s("O<aU>"),am:s("O<b3>"),nn:s("O<m>"),cB:s("O<bn>"),na:s("O<bo>"),lS:s("bP<m>"),hE:s("aL"),fH:s("fy"),d:s("ae<@>"),mp:s("fB<A?,A?>"),j8:s("jf"),fg:s("cN"),at:s("cM"),ln:s("jg"),fw:s("jh"),hX:s("js"),fJ:s("c2<bl>"),jg:s("fV"),fL:s("fW"),y:s("t"),al:s("t()"),hg:s("t(aZ)"),gl:s("t(bv)"),iW:s("t(A)"),aZ:s("t(aU)"),gw:s("t(b3)"),gS:s("t(m)"),bQ:s("t(bn)"),nw:s("t(bo)"),i:s("u"),z:s("@"),mY:s("@()"),mq:s("@(A)"),ng:s("@(A,bZ)"),S:s("h"),gK:s("bi<ah>?"),mU:s("U?"),lH:s("E<@>?"),X:s("A?"),w:s("m?"),ej:s("m?(m)"),nh:s("fm?"),F:s("dw<@,@>?"),Y:s("jd?"),fU:s("t?"),hK:s("t(eb)?"),dA:s("u?"),aV:s("h?"),jh:s("aD?"),jE:s("~()?"),as:s("~(b3,aU)?"),ov:s("~(m)?"),bZ:s("~(h)?"),o:s("aD"),H:s("~"),M:s("~()"),lc:s("~(m,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.dR=J.hV.prototype
B.a=J.p.prototype
B.c=J.eV.prototype
B.d=J.d8.prototype
B.b=J.d9.prototype
B.dS=J.ca.prototype
B.dT=J.eX.prototype
B.w=A.f1.prototype
B.bx=A.f5.prototype
B.by=J.ii.prototype
B.aK=J.dq.prototype
B.hd=new A.hb(0,"opaque")
B.a_=new A.fd(1,"next")
B.ch=new A.dS(B.a_,!0,!1,null)
B.aa=new A.hg(0,"add")
B.ci=new A.cW(0,"zero")
B.ab=new A.cW(1,"one")
B.ac=new A.hh(0,"alpha")
B.ad=new A.kc()
B.he=new A.ke()
B.cl=new A.hf()
B.aP=new A.ki()
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

B.q=new A.i1()
B.hf=new A.lA()
B.cx=new A.A()
B.cy=new A.ig()
B.hg=new A.lY()
B.cz=new A.lZ()
B.ae=new A.m7()
B.cA=new A.bY()
B.O=new A.bx(1,"gradeLUT")
B.cB=new A.bY()
B.cC=new A.mu()
B.cD=new A.mw()
B.k=new A.mz()
B.I=new A.B(0,1,0)
B.a3=new A.B(0,-1,0)
B.bg=new A.db(1,1,1)
B.cE=new A.ed()
B.y=new A.B(0,0,0)
B.K=new A.mR()
B.aS=new A.iL()
B.fC=new A.ck(0,"position")
B.fI=new A.cl(B.fC,0,3)
B.fD=new A.ck(1,"normal")
B.fJ=new A.cl(B.fD,3,3)
B.fE=new A.ck(2,"color")
B.fK=new A.cl(B.fE,6,4)
B.fF=new A.ck(4,"alpha")
B.fL=new A.cl(B.fF,10,1)
B.fG=new A.ck(5,"uv0")
B.fM=new A.cl(B.fG,11,2)
B.fH=new A.ck(6,"legacyMaterialEffect")
B.fN=new A.cl(B.fH,13,1)
B.ap=s([B.fI,B.fJ,B.fK,B.fL,B.fM,B.fN],A.au("p<cl>"))
B.af=new A.mZ()
B.aT=new A.ja()
B.r=new A.jm()
B.Q=new A.ju()
B.aU=new A.dV(0,"colorOnly")
B.aV=new A.dV(1,"colorAndDepth")
B.ag=new A.dV(2,"depthOnly")
B.ah=new A.ht(1,"back")
B.ai=new A.hv(0,"less")
B.R=new A.aZ(0,"open")
B.aW=new A.aZ(1,"chain")
B.aX=new A.aZ(2,"throughDoor")
B.aY=new A.aZ(3,"letterbox")
B.L=new A.aZ(4,"ignore")
B.S=new A.dY(0,"opaque")
B.cF=new A.dY(1,"masked")
B.aj=new A.dY(2,"blended")
B.cG=new A.eM(!0,B.ai,!1,!0,B.ab,B.ab,B.aa,!0,B.ah,!0,!1,!0,!0,!0,!0,!1)
B.cj=new A.cW(2,"srcAlpha")
B.ck=new A.cW(3,"oneMinusSrcAlpha")
B.cH=new A.eM(!0,B.ai,!1,!0,B.cj,B.ck,B.aa,!0,B.ah,!0,!1,!0,!0,!0,!0,!1)
B.cI=new A.cw(0)
B.cJ=new A.cw(24e5)
B.aZ=new A.bv(0,"compliance")
B.cK=new A.dZ(B.aZ)
B.b_=new A.bv(1,"rupture")
B.cL=new A.dZ(B.b_)
B.b0=new A.bv(2,"synchronisation")
B.cM=new A.dZ(B.b0)
B.b1=new A.d0(0,"front")
B.cN=new A.d0(1,"rearService")
B.cO=new A.d0(2,"sideBoundary")
B.cP=new A.d0(3,"roofline")
B.i=new A.cx(0,"north")
B.v=new A.cx(1,"east")
B.m=new A.cx(2,"south")
B.G=new A.cx(3,"west")
B.T=new A.eP(0,"ground")
B.U=new A.eP(1,"first")
B.cQ=new A.d1(0,"mantle")
B.cR=new A.d1(1,"portal")
B.cT=new A.d1(3,"none")
B.cU=new A.e0(B.cT,null)
B.cS=new A.d1(2,"window")
B.cV=new A.e0(B.cS,"the shutter")
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
B.db=new A.J("transform.scale must be positive",null,null)
B.dc=new A.J("saved day-loop state is malformed",null,null)
B.dd=new A.J("rupture extinguished mantle is unknown",null,null)
B.b3=new A.J("saved portal state is malformed",null,null)
B.de=new A.J("saved house state does not match this house",null,null)
B.df=new A.J("presentation snapshot contains a non-finite number",null,null)
B.dg=new A.J("save contains a non-finite number",null,null)
B.dh=new A.J("text.json root must be an object",null,null)
B.di=new A.J("event kind is empty",null,null)
B.dj=new A.J("saved session clock is malformed",null,null)
B.dk=new A.J("rupture mantle IDs are malformed",null,null)
B.dl=new A.J("saved sleep record has an unknown enum",null,null)
B.dm=new A.J("save root must be an object",null,null)
B.dn=new A.J("render capabilities contain invalid limits",null,null)
B.dp=new A.J("saved house overrides are malformed",null,null)
B.bf=new A.db(0,0,0)
B.ee=s([],t.dQ)
B.hj=s([],A.au("p<ed>"))
B.dq=new A.hG(B.bf,0,1,B.bg,0,null,B.ee)
B.dr=new A.e1(0,"idle")
B.ak=new A.e1(1,"active")
B.ds=new A.e1(2,"ended")
B.b4=new A.e2(0,"outside")
B.dt=new A.e2(1,"intersects")
B.du=new A.e2(2,"inside")
B.dv=new A.d3(0,"timeAdvanced")
B.dw=new A.d3(1,"dayEndReached")
B.dx=new A.d3(4,"slept")
B.dy=new A.d3(5,"complianceFloorTripped")
B.dz=new A.eR(0,"vertex")
B.b5=new A.eR(1,"indices")
B.b6=new A.hK(0,"staticDraw")
B.f=new A.eS(0,"ready")
B.M=new A.eS(1,"lost")
B.dA=new A.d4(0,"color")
B.b7=new A.d4(1,"colorAndGlow")
B.dB=new A.d4(2,"colorDepthGlow")
B.al=new A.d4(3,"depthOnly")
B.V=new A.hM(1,"linear")
B.b8=new A.hN(0,"clampToEdge")
B.dC=new A.hL(1,1,1,!1,B.V,B.V,B.b8)
B.dD=new A.c8(0,"beforeShadow")
B.dE=new A.c8(2,"beforeDepth")
B.b9=new A.c8(3,"afterDepth")
B.ba=new A.c8(4,"beforeWorld")
B.z=new A.c8(6,"afterResolve")
B.dF=new A.c8(9,"beforePresent")
B.bb=new A.bL(0,"readBeforeWrite")
B.dG=new A.bL(1,"duplicateWriter")
B.dH=new A.bL(2,"sampledMultisampledAttachment")
B.dI=new A.bL(4,"formatOrSizeMismatch")
B.dJ=new A.bL(5,"unversionedReadWrite")
B.dK=new A.bL(6,"invalidHistoryRead")
B.dL=new A.bL(7,"dependencyCycle")
B.dM=new A.bL(8,"missingCapability")
B.W=new A.cy(0,"player")
B.am=new A.cy(1,"inserted")
B.bc=new A.cy(2,"warden")
B.bd=new A.d6(0,"wrongKind")
B.be=new A.d6(1,"staleGeneration")
B.dN=new A.d6(2,"doubleRelease")
B.an=new A.d6(3,"releasedResource")
B.dQ=new A.hU(1,"visitor")
B.dU=new A.lx(null)
B.dV=new A.ly(null)
B.dW=new A.db(0.03,0.03,0.04)
B.bh=s([0,2,2,3],t.t)
B.dX=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cm=new A.cv()
B.cn=new A.cv()
B.co=new A.cv()
B.cp=new A.cv()
B.cq=new A.cv()
B.dY=s([B.cm,B.cn,B.co,B.cp,B.cq],t.hS)
B.dZ=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.t=s(["who","verb","object","place","time"],t.s)
B.e_=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightRange","uLightInnerCos","uLightOuterCos","uAmbientColor","uAmbientIntensity","uShadowMapTexelSize","uSceneColorSize","uEmissiveStrength","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity"],t.s)
B.e0=s([2,5,9,12,16,19],t.t)
B.e1=s(["uQuantizationBits","uDitherStrength"],t.s)
B.e2=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.e3=s([B.R,B.aW,B.aX,B.aY,B.L],A.au("p<aZ>"))
B.e4=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.P=new A.bo(0,"full")
B.aL=new A.bo(1,"compressed")
B.aM=new A.bo(2,"off")
B.bi=s([B.P,B.aL,B.aM],A.au("p<bo>"))
B.e5=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.e6=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.e7=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.e8=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.fi=new A.b3(0,"long")
B.c5=new A.b3(1,"short")
B.bj=s([B.fi,B.c5],A.au("p<b3>"))
B.e9=s([2.1,4.2,6.3],t.n)
B.ea=s(["res/house/house.json","assets/house/house.json"],t.s)
B.x=new A.bx(0,"inactive")
B.ax=new A.bx(2,"affineWarp")
B.ay=new A.bx(3,"vertexSnap")
B.az=new A.bx(4,"tapeGiveup")
B.aA=new A.bx(5,"portalFail")
B.H=new A.bx(6,"lightsOut")
B.bk=s([B.x,B.O,B.ax,B.ay,B.az,B.aA,B.H],A.au("p<bx>"))
B.eb=s([B.W,B.am,B.bc],A.au("p<cy>"))
B.A=s([],t.hS)
B.eh=s([],t.cs)
B.ao=s([],t.x)
B.ed=s([],t.bz)
B.ei=s([],t.u)
B.bl=s([],t.e_)
B.ec=s([],t.b2)
B.l=s([],t.s)
B.bm=s([],t.cF)
B.bn=s([],t.E)
B.ef=s([],t.t)
B.eg=s([],t.dG)
B.dP=new A.eU(15,"kitchen",-0.3,0)
B.dO=new A.eU(19,"spare-room",0,0.3)
B.B=s([B.dP,B.dO],A.au("p<eU>"))
B.ff=new A.aU(0,"bed")
B.fg=new A.aU(1,"chair")
B.fh=new A.aU(2,"floor")
B.bo=s([B.ff,B.fg,B.fh],A.au("p<aU>"))
B.bp=s([B.i,B.v,B.m,B.G],A.au("p<cx>"))
B.aB=new A.aA(0,"depthTest")
B.aC=new A.aA(1,"depthFunc")
B.aD=new A.aA(2,"depthWrite")
B.aE=new A.aA(3,"blendEnable")
B.aF=new A.aA(4,"blendFunc")
B.aG=new A.aA(5,"blendEquation")
B.aH=new A.aA(6,"cullEnable")
B.aI=new A.aA(7,"cullFace")
B.c8=new A.aA(8,"frontFace")
B.fj=new A.aA(9,"stencilEnable")
B.c6=new A.aA(10,"colorMask")
B.c7=new A.aA(11,"scissorEnable")
B.ej=s([B.aB,B.aC,B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.c8,B.fj,B.c6,B.c7],A.au("p<aA>"))
B.ek=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.el=s(["uBloomStrength"],t.s)
B.em=s(["uLutSize","uStrength"],t.s)
B.en=s([B.aZ,B.b_,B.b0],A.au("p<bv>"))
B.eo=s(["wall-plaster","grime"],t.s)
B.ep=s(["uTexelSize","uNear","uFar"],t.s)
B.bq=s(["uTexelStep"],t.s)
B.eq=s(["uninitialized"],t.s)
B.J=new A.bn(0,"waiting")
B.a4=new A.bn(1,"atDoor")
B.a5=new A.bn(2,"consulting")
B.a6=new A.bn(3,"resolved")
B.er=s([B.J,B.a4,B.a5,B.a6],A.au("p<bn>"))
B.eQ={uAlbedo:0}
B.br=new A.a4(B.eQ,[0],t.I)
B.eG={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.bs=new A.a4(B.eG,[2,3,4,5,6],t.I)
B.eZ={uAlbedo:0,uShadowMap:1,uSsao:2}
B.es=new A.a4(B.eZ,[0,1,2],t.I)
B.eX={uSsaoRaw:0,uSceneDepth:1}
B.et=new A.a4(B.eX,[0,1],t.I)
B.eU={uScene:0,uHistory:1}
B.eu=new A.a4(B.eU,[0,1],t.I)
B.eH={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.ev=new A.a4(B.eH,["e81ac167594e3b48012c9911d2f429a8a4af04fd","84742f6f9aa2a9856e01c8e9430fdfb3540d7901","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.B)
B.eN={aPosition:0,aUvMat:1}
B.bt=new A.a4(B.eN,[0,4],t.I)
B.eV={uScene:0,uLut:1}
B.ew=new A.a4(B.eV,[0,1],t.I)
B.eW={uSource:0}
B.bu=new A.a4(B.eW,[0],t.I)
B.eL={uSharp:0,uBlurred:1,uSceneDepth:2}
B.ex=new A.a4(B.eL,[0,1,2],t.I)
B.eR={uBloom:0}
B.ey=new A.a4(B.eR,[0],t.I)
B.eS={uSceneDepth:0}
B.ez=new A.a4(B.eS,[0],t.I)
B.eT={uScene:0}
B.eA=new A.a4(B.eT,[0],t.I)
B.X={}
B.bv=new A.a4(B.X,[],t.B)
B.p=new A.a4(B.X,[],t.I)
B.eB=new A.a4(B.X,[],A.au("a4<@,@>"))
B.eM={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.bw=new A.a4(B.eM,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.B)
B.eO={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.eC=new A.a4(B.eO,[0,1,2,3],t.I)
B.eI={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4}
B.eD=new A.a4(B.eI,[0,1,2,3,4],t.I)
B.eY={uTex:0}
B.eE=new A.a4(B.eY,[0],t.I)
B.aq=new A.eQ([B.O,1,B.ax,1.5,B.ay,1.5,B.az,2,B.aA,2,B.H,4],A.au("eQ<bx,u>"))
B.f_=new A.ih(0,1,null)
B.f0=new A.il(1,0,0,0,8,0,0,0,0,0,0,!1)
B.ar=new A.di(0,"safe")
B.as=new A.di(1,"standard")
B.at=new A.di(2,"high")
B.D=new A.c6(B.X,0,t.R)
B.Y=new A.dh(B.ar,B.D)
B.eP={shadows:0}
B.fd=new A.c6(B.eP,1,t.R)
B.f2=new A.dh(B.as,B.fd)
B.eJ={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.fa=new A.c6(B.eJ,5,t.R)
B.f3=new A.dh(B.at,B.fa)
B.f1=new A.di(4,"shipping")
B.eK={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.fb=new A.c6(B.eK,7,t.R)
B.hk=new A.dh(B.f1,B.fb)
B.Z=new A.fd(0,"legacy")
B.bz=new A.dj(0,"constructed")
B.u=new A.dj(1,"ready")
B.a0=new A.dj(2,"lost")
B.bA=new A.dj(3,"disposed")
B.hh=new A.hp(1,"srgb")
B.hi=new A.hy(1,"errorsOnly")
B.f4=new A.ir(B.Y,384,216,0)
B.au=new A.dk(0,"constructed")
B.f5=new A.dk(1,"initializing")
B.av=new A.dk(2,"ready")
B.bB=new A.dk(3,"contextLost")
B.h=new A.ea(0,"read")
B.j=new A.ea(1,"write")
B.C=new A.ea(2,"historyRead")
B.n=new A.ff(0,"rgba8")
B.bD=new A.aJ("dofBlurH",B.n,192,108,1,0)
B.bE=new A.aJ("dofBlurV",B.n,192,108,1,0)
B.bF=new A.aJ("dofOutput",B.n,384,216,1,0)
B.bJ=new A.aJ("gradeOutput",B.n,384,216,1,0)
B.aw=new A.aJ("vhsOutput",B.n,384,216,1,0)
B.bK=new A.aJ("bloomBlurH",B.n,192,108,1,0)
B.bL=new A.aJ("bloomBlurV",B.n,192,108,1,0)
B.N=new A.aJ("sceneColor",B.n,384,216,1,0)
B.bM=new A.aJ("ps1Output",B.n,384,216,1,0)
B.bI=new A.aJ("ssaoBlurred",B.n,192,108,1,0)
B.bN=new A.M(B.bI,B.j)
B.bH=new A.aJ("ssaoRaw",B.n,192,108,1,0)
B.bO=new A.M(B.bH,B.j)
B.a1=new A.M(B.N,B.j)
B.bP=new A.M(B.aw,B.j)
B.bQ=new A.M(B.aw,B.C)
B.bR=new A.M(B.bJ,B.j)
B.bC=new A.ff(2,"depth24")
B.bG=new A.aJ("shadowMap",B.bC,512,512,1,0)
B.bS=new A.M(B.bG,B.j)
B.bT=new A.M(B.bF,B.j)
B.bU=new A.M(B.bH,B.h)
B.bV=new A.M(B.N,B.h)
B.f6=new A.aJ("sceneDepth",B.bC,384,216,1,0)
B.bW=new A.M(B.f6,B.j)
B.bX=new A.M(B.bG,B.h)
B.bY=new A.M(B.bM,B.j)
B.bZ=new A.M(B.bE,B.h)
B.c_=new A.M(B.bI,B.h)
B.c0=new A.M(B.bL,B.h)
B.f7=new A.dl(null,"save storage unavailable")
B.f8=new A.dl(null,"save could not be recovered")
B.f9=new A.dl(null,null)
B.eF={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.fc=new A.c6(B.eF,9,t.R)
B.c3=new A.dm(2,"link")
B.fe=new A.fi(B.c3,"gl.createProgram() returned null")
B.c1=new A.dm(0,"vertex")
B.c2=new A.dm(1,"fragment")
B.c4=new A.dm(3,"validation")
B.fk=A.bH("ye")
B.fl=A.bH("yf")
B.fm=A.bH("kJ")
B.fn=A.bH("ui")
B.fo=A.bH("up")
B.fp=A.bH("uq")
B.fq=A.bH("ur")
B.fr=A.bH("U")
B.fs=A.bH("A")
B.ft=A.bH("pg")
B.fu=A.bH("va")
B.fv=A.bH("vb")
B.fw=A.bH("fm")
B.e=new A.cH(0,"float1")
B.c9=new A.cH(1,"float2")
B.E=new A.cH(2,"float3")
B.o=new A.cH(3,"mat4")
B.aJ=new A.cH(4,"sampler")
B.F=new A.D(B.aJ,0)
B.a2=new A.D(B.aJ,1)
B.ca=new A.D(B.aJ,2)
B.fx=new A.mY(!1)
B.fy=new A.B(0,0,1)
B.fz=new A.B(1,0,0)
B.fA=new A.B(1/0,1/0,1/0)
B.fB=new A.B(-1/0,-1/0,-1/0)
B.fO=new A.cJ(0,"visitorAnswered")
B.cb=new A.cJ(1,"visitorIgnored")
B.fP=new A.cJ(2,"entryVerified")
B.fQ=new A.cJ(3,"entryContradicted")
B.fR=new A.cJ(4,"exposureAccepted")
B.fT=new A.c0(1,"malformedDay")
B.fU=new A.c0(2,"malformedTier")
B.cc=new A.c0(3,"missingTierLines")
B.aN=new A.c0(6,"invalidPhase")
B.h_=new A.bp(B.aN,"The active visit cannot be chosen.")
B.h2=new A.b5(B.h_)
B.fX=new A.bp(B.aN,"The active visit has no line to advance.")
B.h3=new A.b5(B.fX)
B.fW=new A.c0(5,"noActiveVisit")
B.fY=new A.bp(B.fW,"There is no active visit.")
B.cd=new A.b5(B.fY)
B.fZ=new A.bp(B.aN,"A visit is already active.")
B.h4=new A.b5(B.fZ)
B.fV=new A.c0(4,"noArrival")
B.h1=new A.bp(B.fV,"The authored arrival is missing.")
B.h5=new A.b5(B.h1)
B.fS=new A.c0(0,"missingCorpus")
B.h0=new A.bp(B.fS,"The authored visitor corpus is empty.")
B.h6=new A.b5(B.h0)
B.ce=new A.dv(1,"exact")
B.aO=new A.dv(2,"partial")
B.a7=new A.dv(3,"contradiction")
B.h7=new A.dv(0,"skipped")
B.h8=new A.du(B.h7,B.D)
B.h9=new A.du(B.aO,B.D)
B.cf=new A.fu(0,"horizontal")
B.ha=new A.fu(1,"vertical")
B.cg=new A.fw(0,"horizontal")
B.hb=new A.fw(1,"vertical")
B.a8=new A.ep(0,"empty")
B.hc=new A.ep(1,"cpuReady")
B.a9=new A.ep(4,"released")})();(function staticFields(){$.nv=null
$.bu=A.e([],A.au("p<A>"))
$.qA=null
$.m3=0
$.m4=A.wU()
$.q9=null
$.q8=null
$.t4=null
$.rZ=null
$.t8=null
$.ou=null
$.oB=null
$.pY=null
$.nC=A.e([],A.au("p<E<A>?>"))
$.ex=null
$.h2=null
$.h3=null
$.pH=!1
$.a8=B.r
$.qP=""
$.qQ=null
$.qL=null
$.lU=null
$.bC=A.aa()
$.co=A.aa()
$.bG=null
$.jF=null
$.H=A.aa()
$.bD=A.aa()
$.bs=A.aa()
$.rm=A.aa()
$.ey=null
$.a2=A.aa()
$.nU=null
$.dE=A.aa()
$.a_=A.aa()
$.px=A.aa()
$.pD=null
$.h0=null
$.py=!1
$.pL=!1
$.pJ=!1
$.rC=!1
$.pI=0
$.rI=0
$.nN=0
$.rY=!1
$.rt="booting"
$.c3=0
$.dF=0
$.aW="hall"
$.fZ=A.aa()
$.et=A.aa()
$.b7=A.aa()
$.rH=null
$.pM=0
$.b8=null
$.eu=A.aa()
$.jB=A.aa()
$.rn=A.aa()
$.rl=A.aa()
$.aB=A.aa()
$.jC=A.aa()
$.jA=A.aa()
$.pw=A.aa()
$.aC=A.aa()
$.jz=A.aa()
$.pv=A.aa()
$.om=A.a3(t.S)
$.cR=A.e([],t.s)
$.pC=null
$.rT=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"yh","th",()=>A.t3("_$dart_dartClosure"))
s($,"yg","eE",()=>A.t3("_$dart_dartClosure_dartJSInterop"))
s($,"yG","tz",()=>A.e([new J.hX()],A.au("p<fh>")))
s($,"yo","tj",()=>A.cj(A.mT({
toString:function(){return"$receiver$"}})))
s($,"yp","tk",()=>A.cj(A.mT({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"yq","tl",()=>A.cj(A.mT(null)))
s($,"yr","tm",()=>A.cj(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yu","tp",()=>A.cj(A.mT(void 0)))
s($,"yv","tq",()=>A.cj(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yt","to",()=>A.cj(A.qM(null)))
s($,"ys","tn",()=>A.cj(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"yx","ts",()=>A.cj(A.qM(void 0)))
s($,"yw","tr",()=>A.cj(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"yy","q2",()=>A.vr())
s($,"yC","tw",()=>A.uG(4096))
s($,"yA","tu",()=>new A.nL().$0())
s($,"yB","tv",()=>new A.nK().$0())
s($,"yz","tt",()=>new Int8Array(A.a0(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"yE","jQ",()=>A.jP(B.fs))
s($,"ym","q1",()=>{A.uU()
return $.m3})
s($,"yd","oY",()=>new A.aJ("sceneColor",B.n,384,216,1,1))
s($,"yi","ti",()=>A.uH(A.e([255,255,255,255],t.t)))
s($,"yH","tA",()=>A.iM(0,1,0))
s($,"yK","jT",()=>{var q=$.qL
if(q==null){A.jM()
A.jM()
A.jM()
A.jM()
A.jM()
q=$.qL=new A.mL()}return q})
s($,"yD","tx",()=>new A.kd())
r($,"pR","eF",()=>A.iM(0,0,0))
r($,"pK","ty",()=>A.iM(0,0,0))
r($,"pT","jS",()=>A.iM(0,0,0))
s($,"yF","jR",()=>new A.kK(A.iM(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.cC,ArrayBuffer:A.e7,ArrayBufferView:A.f4,DataView:A.i8,Float32Array:A.f1,Float64Array:A.i9,Int16Array:A.ia,Int32Array:A.ib,Int8Array:A.ic,Uint16Array:A.id,Uint32Array:A.ie,Uint8ClampedArray:A.df,CanvasPixelArray:A.df,Uint8Array:A.f5})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ay.$nativeSuperclassTag="ArrayBufferView"
A.fE.$nativeSuperclassTag="ArrayBufferView"
A.fF.$nativeSuperclassTag="ArrayBufferView"
A.f2.$nativeSuperclassTag="ArrayBufferView"
A.fG.$nativeSuperclassTag="ArrayBufferView"
A.fH.$nativeSuperclassTag="ArrayBufferView"
A.f3.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.oC
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.js.map
