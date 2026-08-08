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
if(a[b]!==s){A.vv(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.i(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.nG(b)
return new s(c,this)}:function(){if(s===null)s=A.nG(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.nG(a).prototype
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
nL(a,b,c,d){return{i:a,p:b,e:c,x:d}},
mr(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.nJ==null){A.v9()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.oy("Return interceptor for "+A.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.lP
if(o==null)o=$.lP=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.vf(a)
if(p!=null)return p
if(typeof a=="function")return B.cy
s=Object.getPrototypeOf(a)
if(s==null)return B.aP
if(s===Object.prototype)return B.aP
if(typeof q=="function"){o=$.lP
if(o==null)o=$.lP=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a9,enumerable:false,writable:true,configurable:true})
return B.a9}return B.a9},
o7(a,b){if(a<0||a>4294967295)throw A.b(A.aq(a,0,4294967295,"length",null))
return J.rd(new Array(a),b)},
o8(a,b){if(a<0)throw A.b(A.z("Length must be a non-negative integer: "+a,null))
return A.i(new Array(a),b.h("o<0>"))},
fU(a,b){if(a<0)throw A.b(A.z("Length must be a non-negative integer: "+a,null))
return A.i(new Array(a),b.h("o<0>"))},
rd(a,b){var s=A.i(a,b.h("o<0>"))
s.$flags=1
return s},
re(a,b){var s=t.bP
return J.nP(s.a(a),s.a(b))},
ob(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
rf(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.ob(r))break;++b}return b},
rg(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.ob(q))break}return b},
cZ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e1.prototype
return J.fW.prototype}if(typeof a=="string")return J.cz.prototype
if(a==null)return J.e2.prototype
if(typeof a=="boolean")return J.fV.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dc.prototype
if(typeof a=="bigint")return J.db.prototype
return a}if(a instanceof A.A)return a
return J.mr(a)},
be(a){if(typeof a=="string")return J.cz.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dc.prototype
if(typeof a=="bigint")return J.db.prototype
return a}if(a instanceof A.A)return a
return J.mr(a)},
bt(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dc.prototype
if(typeof a=="bigint")return J.db.prototype
return a}if(a instanceof A.A)return a
return J.mr(a)},
v5(a){if(typeof a=="number")return J.cy.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.cK.prototype
return a},
pR(a){if(typeof a=="number")return J.cy.prototype
if(typeof a=="string")return J.cz.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.cK.prototype
return a},
v6(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dc.prototype
if(typeof a=="bigint")return J.db.prototype
return a}if(a instanceof A.A)return a
return J.mr(a)},
nO(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pR(a).a2(a,b)},
Y(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cZ(a).R(a,b)},
au(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.vd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).i(a,b)},
bv(a,b,c){return J.bt(a).k(a,b,c)},
fc(a,b){return J.bt(a).m(a,b)},
qn(a,b){return J.bt(a).M(a,b)},
qo(a,b){return J.bt(a).ab(a,b)},
qp(a,b,c){return J.v6(a).ed(a,b,c)},
qq(a,b){return J.bt(a).bn(a,b)},
nP(a,b){return J.pR(a).G(a,b)},
is(a,b){return J.bt(a).N(a,b)},
aO(a){return J.cZ(a).gD(a)},
nQ(a){return J.be(a).gE(a)},
qr(a){return J.be(a).gH(a)},
I(a){return J.bt(a).gt(a)},
av(a){return J.be(a).gq(a)},
fd(a){return J.cZ(a).gI(a)},
nR(a,b,c){return J.bt(a).b5(a,b,c)},
qs(a,b){return J.be(a).sq(a,b)},
qt(a,b){return J.bt(a).T(a,b)},
mU(a,b){return J.v5(a).kl(a,b)},
d0(a){return J.cZ(a).n(a)},
qu(a,b){return J.bt(a).dg(a,b)},
fR:function fR(){},
fV:function fV(){},
e2:function e2(){},
e3:function e3(){},
c5:function c5(){},
hc:function hc(){},
cK:function cK(){},
bI:function bI(){},
db:function db(){},
dc:function dc(){},
o:function o(a){this.$ti=a},
fT:function fT(){},
jI:function jI(a){this.$ti=a},
co:function co(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cy:function cy(){},
e1:function e1(){},
fW:function fW(){},
cz:function cz(){}},A={mX:function mX(){},
ik(){return $},
qz(a,b,c){if(t.gt.b(a))return new A.eE(a,b.h("@<0>").C(c).h("eE<1,2>"))
return new A.cp(a,b.h("@<0>").C(c).h("cp<1,2>"))},
oe(a){return new A.cA("Field '"+a+"' has been assigned during initialization.")},
aG(a){return new A.cA("Field '"+a+"' has not been initialized.")},
ri(a){return new A.cA("Field '"+a+"' has already been initialized.")},
ms(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
bS(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l4(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cY(a,b,c){return a},
nK(a){var s,r
for(s=$.b_.length,r=0;r<s;++r)if(a===$.b_[r])return!0
return!1},
l2(a,b,c,d){A.hk(b,"start")
if(c!=null){A.hk(c,"end")
if(b>c)A.m(A.aq(b,0,c,"start",null))}return new A.eu(a,b,c,d.h("eu<0>"))},
h0(a,b,c,d){if(t.gt.b(a))return new A.cs(a,b,c.h("@<0>").C(d).h("cs<1,2>"))
return new A.bM(a,b,c.h("@<0>").C(d).h("bM<1,2>"))},
fS(){return new A.dk("No element")},
rb(){return new A.dk("Too many elements")},
hq(a,b,c,d,e){if(c-b<=32)A.rL(a,b,c,d,e)
else A.rK(a,b,c,d,e)},
rL(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.be(a);s<=c;++s){q=r.i(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.X()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.i(a,n))
p=n}r.k(a,p,q)}},
rK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.c.J(a5-a4+1,6),i=a4+j,h=a5-j,g=B.c.J(a4+a5,2),f=g-j,e=g+j,d=J.be(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
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
p=J.Y(a6.$2(b,a0),0)
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
A.hq(a3,a4,r-2,a6,a7)
A.hq(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.Y(a6.$2(d.i(a3,r),b),0))++r
while(J.Y(a6.$2(d.i(a3,q),a0),0))--q
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
break}}A.hq(a3,r,q,a6,a7)}else A.hq(a3,r,q,a6,a7)},
cg:function cg(){},
dO:function dO(a,b){this.a=a
this.$ti=b},
cp:function cp(a,b){this.a=a
this.$ti=b},
eE:function eE(a,b){this.a=a
this.$ti=b},
eD:function eD(){},
lB:function lB(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.$ti=b},
cA:function cA(a){this.a=a},
fs:function fs(a){this.a=a},
kU:function kU(){},
x:function x(){},
a6:function a6(){},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cB:function cB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a3:function a3(a,b,c){this.a=a
this.b=b
this.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
bm:function bm(a,b){this.a=a
this.$ti=b},
eA:function eA(a,b){this.a=a
this.$ti=b},
Z:function Z(){},
bC:function bC(){},
dp:function dp(){},
ep:function ep(a,b){this.a=a
this.$ti=b},
f4:function f4(){},
d4(a,b,c){var s,r,q,p,o,n,m,l=A.b4(a.gK(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.v)(l),++j,p=o){r=l[j]
c.a(a.i(0,r))
o=p+1
q[r]=p}n=A.b4(a.ga9(),!0,c)
m=new A.ap(q,n,b.h("@<0>").C(c).h("ap<1,2>"))
m.$keys=l
return m}return new A.dQ(A.ax(a,b,c),b.h("@<0>").C(c).h("dQ<1,2>"))},
qF(){throw A.b(A.ai("Cannot modify unmodifiable Map"))},
qG(){throw A.b(A.ai("Cannot modify constant Set"))},
q2(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
vd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
w(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d0(a)
return s},
ek(a){var s,r=$.om
if(r==null)r=$.om=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
kn(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hh(a){var s,r,q,p
if(a instanceof A.A)return A.aZ(A.b0(a),null)
s=J.cZ(a)
if(s===B.cx||s===B.cz||t.cx.b(a)){r=B.af(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aZ(A.b0(a),null)},
on(a){var s,r,q
if(a==null||typeof a=="number"||A.bd(a))return J.d0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.c1)return a.n(0)
if(a instanceof A.b9)return a.e5(!0)
s=$.ql()
for(r=0;r<1;++r){q=s[r].ko(a)
if(q!=null)return q}return"Instance of '"+A.hh(a)+"'"},
rr(){if(!!self.location)return self.location.href
return null},
rA(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
a0(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.cb(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aq(a,0,1114111,null,null))},
df(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
rz(a){var s=A.df(a).getUTCFullYear()+0
return s},
rx(a){var s=A.df(a).getUTCMonth()+1
return s},
rt(a){var s=A.df(a).getUTCDate()+0
return s},
ru(a){var s=A.df(a).getUTCHours()+0
return s},
rw(a){var s=A.df(a).getUTCMinutes()+0
return s},
ry(a){var s=A.df(a).getUTCSeconds()+0
return s},
rv(a){var s=A.df(a).getUTCMilliseconds()+0
return s},
rs(a){var s=a.$thrownJsError
if(s==null)return null
return A.c_(s)},
oo(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aa(a,s)
a.$thrownJsError=s
s.stack=b.n(0)}},
im(a){throw A.b(A.nF(a))},
c(a,b){if(a==null)J.av(a)
throw A.b(A.mo(a,b))},
mo(a,b){var s,r="index"
if(!A.aB(b))return new A.bh(!0,b,r,null)
s=A.a(J.av(a))
if(b<0||b>=s)return A.jF(b,s,a,r)
return A.rB(b,r)},
v_(a,b,c){if(a>c)return A.aq(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aq(b,a,c,"end",null)
return new A.bh(!0,b,"end",null)},
nF(a){return new A.bh(!0,a,null,null)},
b(a){return A.aa(a,new Error())},
aa(a,b){var s
if(a==null)a=new A.bT()
b.dartException=a
s=A.vw
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
vw(){return J.d0(this.dartException)},
m(a,b){throw A.aa(a,b==null?new Error():b)},
aN(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.m(A.u_(a,b,c),s)},
u_(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.ew("'"+s+"': Cannot "+o+" "+l+k+n)},
v(a){throw A.b(A.ae(a))},
bU(a){var s,r,q,p,o,n
a=A.pY(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.i([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.lc(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ld(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ox(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mY(a,b){var s=b==null,r=s?null:b.method
return new A.fX(a,r,s?null:b.receiver)},
ac(a){var s
if(a==null)return new A.ka(a)
if(a instanceof A.dT){s=a.a
return A.cn(a,s==null?A.dD(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cn(a,a.dartException)
return A.uG(a)},
cn(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
uG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.cb(r,16)&8191)===10)switch(q){case 438:return A.cn(a,A.mY(A.w(s)+" (Error "+q+")",null))
case 445:case 5007:A.w(s)
return A.cn(a,new A.eh())}}if(a instanceof TypeError){p=$.q5()
o=$.q6()
n=$.q7()
m=$.q8()
l=$.qb()
k=$.qc()
j=$.qa()
$.q9()
i=$.qe()
h=$.qd()
g=p.a8(s)
if(g!=null)return A.cn(a,A.mY(A.B(s),g))
else{g=o.a8(s)
if(g!=null){g.method="call"
return A.cn(a,A.mY(A.B(s),g))}else if(n.a8(s)!=null||m.a8(s)!=null||l.a8(s)!=null||k.a8(s)!=null||j.a8(s)!=null||m.a8(s)!=null||i.a8(s)!=null||h.a8(s)!=null){A.B(s)
return A.cn(a,new A.eh())}}return A.cn(a,new A.hw(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.es()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cn(a,new A.bh(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.es()
return a},
c_(a){var s
if(a instanceof A.dT)return a.b
if(a==null)return new A.eS(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.eS(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
io(a){if(a==null)return J.aO(a)
if(typeof a=="object")return A.ek(a)
return J.aO(a)},
uU(a){if(typeof a=="number")return B.d.gD(a)
if(a instanceof A.i8)return A.ek(a)
if(a instanceof A.b9)return a.gD(a)
return A.io(a)},
pQ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
v4(a,b){var s,r=a.length
for(s=0;s<r;++s)b.m(0,a[s])
return b},
ue(a,b,c,d,e,f){t.Z.a(a)
switch(A.a(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.d7("Unsupported number of arguments for wrapped closure"))},
dJ(a,b){var s=a.$identity
if(!!s)return s
s=A.uV(a,b)
a.$identity=s
return s},
uV(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ue)},
qE(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hr().constructor.prototype):Object.create(new A.d2(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.nX(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.qA(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.nX(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
qA(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.qx)}throw A.b("Error in functionType of tearoff")},
qB(a,b,c,d){var s=A.nW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nX(a,b,c,d){if(c)return A.qD(a,b,d)
return A.qB(b.length,d,a,b)},
qC(a,b,c,d){var s=A.nW,r=A.qy
switch(b?-1:a){case 0:throw A.b(new A.ho("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
qD(a,b,c){var s,r
if($.nU==null)$.nU=A.nT("interceptor")
if($.nV==null)$.nV=A.nT("receiver")
s=b.length
r=A.qC(s,c,a,b)
return r},
nG(a){return A.qE(a)},
qx(a,b){return A.eX(v.typeUniverse,A.b0(a.a),b)},
nW(a){return a.a},
qy(a){return a.b},
nT(a){var s,r,q,p=new A.d2("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.z("Field name "+a+" not found.",null))},
pS(a){return v.getIsolateTag(a)},
q0(){return v.G},
w1(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
vf(a){var s,r,q,p,o,n=A.B($.pT.$1(a)),m=$.mp[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bc($.pO.$2(a,n))
if(q!=null){m=$.mp[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.mL(s)
$.mp[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.mw[n]=s
return s}if(p==="-"){o=A.mL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.pW(a,s)
if(p==="*")throw A.b(A.oy(n))
if(v.leafTags[n]===true){o=A.mL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.pW(a,s)},
pW(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.nL(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
mL(a){return J.nL(a,!1,null,!!a.$iaQ)},
vj(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.mL(s)
else return J.nL(s,c,null,null)},
v9(){if(!0===$.nJ)return
$.nJ=!0
A.va()},
va(){var s,r,q,p,o,n,m,l
$.mp=Object.create(null)
$.mw=Object.create(null)
A.v8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pX.$1(o)
if(n!=null){m=A.vj(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
v8(){var s,r,q,p,o,n,m=B.bk()
m=A.dI(B.bl,A.dI(B.bm,A.dI(B.ag,A.dI(B.ag,A.dI(B.bn,A.dI(B.bo,A.dI(B.bp(B.af),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.pT=new A.mt(p)
$.pO=new A.mu(o)
$.pX=new A.mv(n)},
dI(a,b){return a(b)||b},
tm(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.Y(r,b[s]))return!1}return!0},
uX(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vr(a,b,c){var s=a.indexOf(b,c)
return s>=0},
v2(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
pY(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
vs(a,b,c){var s=A.vt(a,b,c)
return s},
vt(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.pY(b),"g"),A.v2(c))},
dv:function dv(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a){this.a=a},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
d3:function d3(){},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
cR:function cR(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dU:function dU(a,b){this.a=a
this.$ti=b},
dR:function dR(){},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
eq:function eq(){},
lc:function lc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eh:function eh(){},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
ka:function ka(a){this.a=a},
dT:function dT(a,b){this.a=a
this.b=b},
eS:function eS(a){this.a=a
this.b=null},
c1:function c1(){},
fq:function fq(){},
fr:function fr(){},
ht:function ht(){},
hr:function hr(){},
d2:function d2(a,b){this.a=a
this.b=b},
ho:function ho(a){this.a=a},
b3:function b3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jR:function jR(a){this.a=a},
jZ:function jZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
a5:function a5(a,b){this.a=a
this.$ti=b},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aw:function aw(a,b){this.a=a
this.$ti=b},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
R:function R(a,b){this.a=a
this.$ti=b},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e4:function e4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mt:function mt(a){this.a=a},
mu:function mu(a){this.a=a},
mv:function mv(a){this.a=a},
b9:function b9(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
vv(a){throw A.aa(A.oe(a),new Error())},
h(){throw A.aa(A.aG(""),new Error())},
u(){throw A.aa(A.ri(""),new Error())},
q1(){throw A.aa(A.oe(""),new Error())},
X(){var s=new A.lC()
return s.b=s},
lC:function lC(){this.b=null},
cV(a){return a},
rm(a,b,c){return new Float32Array(a,b,c)},
rn(a){return new Uint8Array(a)},
ro(a){return new Uint8Array(a)},
bY(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.mo(b,a))},
tU(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.v_(a,b,c))
return b},
c8:function c8(){},
de:function de(){},
ee:function ee(){},
m_:function m_(a){this.a=a},
h3:function h3(){},
aj:function aj(){},
ec:function ec(){},
ed:function ed(){},
eb:function eb(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ef:function ef(){},
eg:function eg(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
n4(a,b){var s=b.c
return s==null?b.c=A.eV(a,"b2",[b.x]):s},
or(a){var s=a.w
if(s===6||s===7)return A.or(a.x)
return s===11||s===12},
rI(a){return a.as},
vk(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ah(a){return A.lZ(v.typeUniverse,a,!1)},
cX(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.cX(a1,s,a3,a4)
if(r===s)return a2
return A.p1(a1,r,!0)
case 7:s=a2.x
r=A.cX(a1,s,a3,a4)
if(r===s)return a2
return A.p0(a1,r,!0)
case 8:q=a2.y
p=A.dH(a1,q,a3,a4)
if(p===q)return a2
return A.eV(a1,a2.x,p)
case 9:o=a2.x
n=A.cX(a1,o,a3,a4)
m=a2.y
l=A.dH(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.nc(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.dH(a1,j,a3,a4)
if(i===j)return a2
return A.p2(a1,k,i)
case 11:h=a2.x
g=A.cX(a1,h,a3,a4)
f=a2.y
e=A.uD(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.p_(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.dH(a1,d,a3,a4)
o=a2.x
n=A.cX(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.nd(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.fh("Attempted to substitute unexpected RTI kind "+a0))}},
dH(a,b,c,d){var s,r,q,p,o=b.length,n=A.m3(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cX(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
uE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.m3(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cX(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
uD(a,b,c,d){var s,r=b.a,q=A.dH(a,r,c,d),p=b.b,o=A.dH(a,p,c,d),n=b.c,m=A.uE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.hT()
s.a=q
s.b=o
s.c=m
return s},
i(a,b){a[v.arrayRti]=b
return a},
nH(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.v7(s)
return a.$S()}return null},
vb(a,b){var s
if(A.or(b))if(a instanceof A.c1){s=A.nH(a)
if(s!=null)return s}return A.b0(a)},
b0(a){if(a instanceof A.A)return A.n(a)
if(Array.isArray(a))return A.M(a)
return A.ns(J.cZ(a))},
M(a){var s=a[v.arrayRti],r=t.x
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.ns(a)},
ns(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ub(a,s)},
ub(a,b){var s=a instanceof A.c1?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.tw(v.typeUniverse,s.name)
b.$ccache=r
return r},
v7(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.lZ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
il(a){return A.bG(A.n(a))},
nD(a){var s
if(a instanceof A.b9)return a.dK()
s=a instanceof A.c1?A.nH(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.fd(a).a
if(Array.isArray(a))return A.M(a)
return A.b0(a)},
bG(a){var s=a.r
return s==null?a.r=new A.i8(a):s},
v3(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.c(q,0)
s=A.eX(v.typeUniverse,A.nD(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.p3(v.typeUniverse,s,A.nD(q[r]))}return A.eX(v.typeUniverse,s,a)},
bf(a){return A.bG(A.lZ(v.typeUniverse,a,!1))},
ua(a){var s=this
s.b=A.uA(s)
return s.b(a)},
uA(a){var s,r,q,p,o
if(a===t.K)return A.uk
if(A.d_(a))return A.uo
s=a.w
if(s===6)return A.u6
if(s===1)return A.py
if(s===7)return A.uf
r=A.uz(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.d_)){a.f="$i"+q
if(q==="y")return A.ui
if(a===t.m)return A.uh
return A.un}}else if(s===10){p=A.uX(a.x,a.y)
o=p==null?A.py:p
return o==null?A.dD(o):o}return A.u4},
uz(a){if(a.w===8){if(a===t.S)return A.aB
if(a===t.i||a===t.o)return A.uj
if(a===t.N)return A.um
if(a===t.y)return A.bd}return null},
u9(a){var s=this,r=A.u3
if(A.d_(s))r=A.tS
else if(s===t.K)r=A.dD
else if(A.dK(s)){r=A.u5
if(s===t.aV)r=A.pi
else if(s===t.w)r=A.bc
else if(s===t.fU)r=A.tR
else if(s===t.jh)r=A.pj
else if(s===t.dA)r=A.ph
else if(s===t.mU)r=A.e}else if(s===t.S)r=A.a
else if(s===t.N)r=A.B
else if(s===t.y)r=A.aA
else if(s===t.o)r=A.ig
else if(s===t.i)r=A.m5
else if(s===t.m)r=A.d
s.a=r
return s.a(a)},
u4(a){var s=this
if(a==null)return A.dK(s)
return A.ve(v.typeUniverse,A.vb(a,s),s)},
u6(a){if(a==null)return!0
return this.x.b(a)},
un(a){var s,r=this
if(a==null)return A.dK(r)
s=r.f
if(a instanceof A.A)return!!a[s]
return!!J.cZ(a)[s]},
ui(a){var s,r=this
if(a==null)return A.dK(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.A)return!!a[s]
return!!J.cZ(a)[s]},
uh(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.A)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
px(a){if(typeof a=="object"){if(a instanceof A.A)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
u3(a){var s=this
if(a==null){if(A.dK(s))return a}else if(s.b(a))return a
throw A.aa(A.po(a,s),new Error())},
u5(a){var s=this
if(a==null||s.b(a))return a
throw A.aa(A.po(a,s),new Error())},
po(a,b){return new A.eT("TypeError: "+A.oS(a,A.aZ(b,null)))},
oS(a,b){return A.fG(a)+": type '"+A.aZ(A.nD(a),null)+"' is not a subtype of type '"+b+"'"},
ba(a,b){return new A.eT("TypeError: "+A.oS(a,b))},
uf(a){var s=this
return s.x.b(a)||A.n4(v.typeUniverse,s).b(a)},
uk(a){return a!=null},
dD(a){if(a!=null)return a
throw A.aa(A.ba(a,"Object"),new Error())},
uo(a){return!0},
tS(a){return a},
py(a){return!1},
bd(a){return!0===a||!1===a},
aA(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aa(A.ba(a,"bool"),new Error())},
tR(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aa(A.ba(a,"bool?"),new Error())},
m5(a){if(typeof a=="number")return a
throw A.aa(A.ba(a,"double"),new Error())},
ph(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aa(A.ba(a,"double?"),new Error())},
aB(a){return typeof a=="number"&&Math.floor(a)===a},
a(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aa(A.ba(a,"int"),new Error())},
pi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aa(A.ba(a,"int?"),new Error())},
uj(a){return typeof a=="number"},
ig(a){if(typeof a=="number")return a
throw A.aa(A.ba(a,"num"),new Error())},
pj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aa(A.ba(a,"num?"),new Error())},
um(a){return typeof a=="string"},
B(a){if(typeof a=="string")return a
throw A.aa(A.ba(a,"String"),new Error())},
bc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aa(A.ba(a,"String?"),new Error())},
d(a){if(A.px(a))return a
throw A.aa(A.ba(a,"JSObject"),new Error())},
e(a){if(a==null)return a
if(A.px(a))return a
throw A.aa(A.ba(a,"JSObject?"),new Error())},
pI(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aZ(a[q],b)
return s},
ut(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.pI(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aZ(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
pr(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aZ(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aZ(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aZ(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aZ(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aZ(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aZ(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aZ(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aZ(a.x,b)+">"
if(l===8){p=A.uF(a.x)
o=a.y
return o.length>0?p+("<"+A.pI(o,b)+">"):p}if(l===10)return A.ut(a,b)
if(l===11)return A.pr(a,b,null)
if(l===12)return A.pr(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
uF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tx(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
tw(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.lZ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eW(a,5,"#")
q=A.m3(s)
for(p=0;p<s;++p)q[p]=r
o=A.eV(a,b,q)
n[b]=o
return o}else return m},
tv(a,b){return A.pb(a.tR,b)},
tu(a,b){return A.pb(a.eT,b)},
lZ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.oX(A.oV(a,null,b,!1))
r.set(b,s)
return s},
eX(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.oX(A.oV(a,b,c,!0))
q.set(c,r)
return r},
p3(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.nc(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cj(a,b){b.a=A.u9
b.b=A.ua
return b},
eW(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bl(null,null)
s.w=b
s.as=c
r=A.cj(a,s)
a.eC.set(c,r)
return r},
p1(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ts(a,b,r,c)
a.eC.set(r,s)
return s},
ts(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.d_(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.dK(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.bl(null,null)
q.w=6
q.x=b
q.as=c
return A.cj(a,q)},
p0(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.tq(a,b,r,c)
a.eC.set(r,s)
return s},
tq(a,b,c,d){var s,r
if(d){s=b.w
if(A.d_(b)||b===t.K)return b
else if(s===1)return A.eV(a,"b2",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.bl(null,null)
r.w=7
r.x=b
r.as=c
return A.cj(a,r)},
tt(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bl(null,null)
s.w=13
s.x=b
s.as=q
r=A.cj(a,s)
a.eC.set(q,r)
return r},
eU(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
tp(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
eV(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.eU(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bl(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cj(a,r)
a.eC.set(p,q)
return q},
nc(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.eU(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bl(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cj(a,o)
a.eC.set(q,n)
return n},
p2(a,b,c){var s,r,q="+"+(b+"("+A.eU(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bl(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cj(a,s)
a.eC.set(q,r)
return r},
p_(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.eU(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.eU(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.tp(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bl(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cj(a,p)
a.eC.set(r,o)
return o},
nd(a,b,c,d){var s,r=b.as+("<"+A.eU(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.tr(a,b,c,r,d)
a.eC.set(r,s)
return s},
tr(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.m3(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.cX(a,b,r,0)
m=A.dH(a,c,r,0)
return A.nd(a,n,m,c!==m)}}l=new A.bl(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cj(a,l)},
oV(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
oX(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.th(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.oW(a,r,l,k,!1)
else if(q===46)r=A.oW(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.cU(a.u,a.e,k.pop()))
break
case 94:k.push(A.tt(a.u,k.pop()))
break
case 35:k.push(A.eW(a.u,5,"#"))
break
case 64:k.push(A.eW(a.u,2,"@"))
break
case 126:k.push(A.eW(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.tj(a,k)
break
case 38:A.ti(a,k)
break
case 63:p=a.u
k.push(A.p1(p,A.cU(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.p0(p,A.cU(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.tg(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.oY(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.tl(a.u,a.e,o)
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
return A.cU(a.u,a.e,m)},
th(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
oW(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.tx(s,o.x)[p]
if(n==null)A.m('No "'+p+'" in "'+A.rI(o)+'"')
d.push(A.eX(s,o,n))}else d.push(p)
return m},
tj(a,b){var s,r=a.u,q=A.oU(a,b),p=b.pop()
if(typeof p=="string")b.push(A.eV(r,p,q))
else{s=A.cU(r,a.e,p)
switch(s.w){case 11:b.push(A.nd(r,s,q,a.n))
break
default:b.push(A.nc(r,s,q))
break}}},
tg(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.oU(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.cU(p,a.e,o)
q=new A.hT()
q.a=s
q.b=n
q.c=m
b.push(A.p_(p,r,q))
return
case-4:b.push(A.p2(p,b.pop(),s))
return
default:throw A.b(A.fh("Unexpected state under `()`: "+A.w(o)))}},
ti(a,b){var s=b.pop()
if(0===s){b.push(A.eW(a.u,1,"0&"))
return}if(1===s){b.push(A.eW(a.u,4,"1&"))
return}throw A.b(A.fh("Unexpected extended operation "+A.w(s)))},
oU(a,b){var s=b.splice(a.p)
A.oY(a.u,a.e,s)
a.p=b.pop()
return s},
cU(a,b,c){if(typeof c=="string")return A.eV(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.tk(a,b,c)}else return c},
oY(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cU(a,b,c[s])},
tl(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cU(a,b,c[s])},
tk(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.fh("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.fh("Bad index "+c+" for "+b.n(0)))},
ve(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ad(a,b,null,c,null)
r.set(c,s)}return s},
ad(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.d_(d))return!0
s=b.w
if(s===4)return!0
if(A.d_(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ad(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.ad(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.ad(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ad(a,b.x,c,d,e))return!1
return A.ad(a,A.n4(a,b),c,d,e)}if(s===6)return A.ad(a,p,c,d,e)&&A.ad(a,b.x,c,d,e)
if(q===7){if(A.ad(a,b,c,d.x,e))return!0
return A.ad(a,b,c,A.n4(a,d),e)}if(q===6)return A.ad(a,b,c,p,e)||A.ad(a,b,c,d.x,e)
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
if(!A.ad(a,j,c,i,e)||!A.ad(a,i,e,j,c))return!1}return A.pw(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.pw(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ug(a,b,c,d,e)}if(o&&q===10)return A.ul(a,b,c,d,e)
return!1},
pw(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ad(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.ad(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ad(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ad(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.ad(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
ug(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.eX(a,b,r[o])
return A.pf(a,p,null,c,d.y,e)}return A.pf(a,b.y,null,c,d.y,e)},
pf(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ad(a,b[s],d,e[s],f))return!1
return!0},
ul(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ad(a,r[s],c,q[s],e))return!1
return!0},
dK(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.d_(a))if(s!==6)r=s===7&&A.dK(a.x)
return r},
d_(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
pb(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
m3(a){return a>0?new Array(a):v.typeUniverse.sEA},
bl:function bl(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
hT:function hT(){this.c=this.b=this.a=null},
i8:function i8(a){this.a=a},
hR:function hR(){},
eT:function eT(a){this.a=a},
t9(){var s,r,q
if(self.scheduleImmediate!=null)return A.uP()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dJ(new A.ly(s),1)).observe(r,{childList:true})
return new A.lx(s,r,q)}else if(self.setImmediate!=null)return A.uQ()
return A.uR()},
ta(a){self.scheduleImmediate(A.dJ(new A.lz(t.M.a(a)),0))},
tb(a){self.setImmediate(A.dJ(new A.lA(t.M.a(a)),0))},
tc(a){t.M.a(a)
A.to(0,a)},
to(a,b){var s=new A.lX()
s.hH(a,b)
return s},
br(a){return new A.hM(new A.a4($.a1,a.h("a4<0>")),a.h("hM<0>"))},
bq(a,b){a.$2(0,null)
b.b=!0
return b.a},
an(a,b){A.tT(a,b)},
bp(a,b){b.cf(a)},
bo(a,b){b.cg(A.ac(a),A.c_(a))},
tT(a,b){var s,r,q=new A.m6(b),p=new A.m7(b)
if(a instanceof A.a4)a.e4(q,p,t.z)
else{s=t.z
if(a instanceof A.a4)a.d9(q,p,s)
else{r=new A.a4($.a1,t.d)
r.a=8
r.c=a
r.e4(q,p,s)}}},
bs(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.a1.fY(new A.mm(s),t.H,t.S,t.z)},
oZ(a,b,c){return 0},
iC(a){var s
if(t.Q.b(a)){s=a.gaQ()
if(s!=null)return s}return B.H},
o1(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.a4($.a1,b.h("a4<y<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.jh(i,h,g,f)
try{for(n=J.I(a),m=t.P;n.l();){r=n.gp()
q=i.b
r.d9(new A.jg(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bf(A.i([],b.h("o<0>")))
return n}i.a=A.bL(n,null,!1,b.h("0?"))}catch(l){p=A.ac(l)
o=A.c_(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.pv(m,k)
m=new A.ao(m,k==null?A.iC(m):k)
n.bb(m)
return n}else{i.d=p
i.c=o}}return f},
pv(a,b){if($.a1===B.m)return null
return null},
uc(a,b){if($.a1!==B.m)A.pv(a,b)
if(b==null)if(t.Q.b(a)){b=a.gaQ()
if(b==null){A.oo(a,B.H)
b=B.H}}else b=B.H
else if(t.Q.b(a))A.oo(a,b)
return new A.ao(a,b)},
td(a,b){var s=new A.a4($.a1,b.h("a4<0>"))
b.a(a)
s.a=8
s.c=a
return s},
n8(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.d;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.rM()
b.bb(new A.ao(new A.bh(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dR(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.bj()
b.be(o.a)
A.dq(b,p)
return}b.a^=2
A.ij(null,null,b.b,t.M.a(new A.lH(o,b)))},
dq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.u,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.ny(m.a,m.b)}return}q.a=b
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
A.ny(j.a,j.b)
return}g=$.a1
if(g!==h)$.a1=h
else g=null
c=c.c
if((c&15)===8)new A.lL(q,d,n).$0()
else if(o){if((c&1)!==0)new A.lK(q,j).$0()}else if((c&2)!==0)new A.lJ(d,q).$0()
if(g!=null)$.a1=g
c=q.c
if(c instanceof A.a4){p=q.a.$ti
p=p.h("b2<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bk(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.n8(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bk(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
uu(a,b){var s
if(t.ng.b(a))return b.fY(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw A.b(A.aD(a,"onError",u.c))},
uq(){var s,r
for(s=$.dE;s!=null;s=$.dE){$.f9=null
r=s.b
$.dE=r
if(r==null)$.f8=null
s.a.$0()}},
uB(){$.nt=!0
try{A.uq()}finally{$.f9=null
$.nt=!1
if($.dE!=null)$.nN().$1(A.pP())}},
pL(a){var s=new A.hN(a),r=$.f8
if(r==null){$.dE=$.f8=s
if(!$.nt)$.nN().$1(A.pP())}else $.f8=r.b=s},
uy(a){var s,r,q,p=$.dE
if(p==null){A.pL(a)
$.f9=$.f8
return}s=new A.hN(a)
r=$.f9
if(r==null){s.b=p
$.dE=$.f9=s}else{q=r.b
s.b=q
$.f9=r.b=s
if(q==null)$.f8=s}},
vH(a,b){A.cY(a,"stream",t.K)
return new A.i6(b.h("i6<0>"))},
ny(a,b){A.uy(new A.mi(a,b))},
pH(a,b,c,d,e){var s,r=$.a1
if(r===c)return d.$0()
$.a1=c
s=r
try{r=d.$0()
return r}finally{$.a1=s}},
ux(a,b,c,d,e,f,g){var s,r=$.a1
if(r===c)return d.$1(e)
$.a1=c
s=r
try{r=d.$1(e)
return r}finally{$.a1=s}},
uw(a,b,c,d,e,f,g,h,i){var s,r=$.a1
if(r===c)return d.$2(e,f)
$.a1=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a1=s}},
ij(a,b,c,d){t.M.a(d)
if(B.m!==c){d=c.j4(d)
d=d}A.pL(d)},
ly:function ly(a){this.a=a},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function lz(a){this.a=a},
lA:function lA(a){this.a=a},
lX:function lX(){},
lY:function lY(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=!1
this.$ti=b},
m6:function m6(a){this.a=a},
m7:function m7(a){this.a=a},
mm:function mm(a){this.a=a},
aV:function aV(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
bE:function bE(a,b){this.a=a
this.$ti=b},
ao:function ao(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hO:function hO(){},
eB:function eB(a,b){this.a=a
this.$ti=b},
cP:function cP(a,b,c,d,e){var _=this
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
lE:function lE(a,b){this.a=a
this.b=b},
lI:function lI(a,b){this.a=a
this.b=b},
lH:function lH(a,b){this.a=a
this.b=b},
lG:function lG(a,b){this.a=a
this.b=b},
lF:function lF(a,b){this.a=a
this.b=b},
lL:function lL(a,b,c){this.a=a
this.b=b
this.c=c},
lM:function lM(a,b){this.a=a
this.b=b},
lN:function lN(a){this.a=a},
lK:function lK(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a
this.b=null},
i6:function i6(a){this.$ti=a},
f3:function f3(){},
i3:function i3(){},
lW:function lW(a,b){this.a=a
this.b=b},
mi:function mi(a,b){this.a=a
this.b=b},
oT(a,b){var s=a[b]
return s===a?null:s},
na(a,b,c){if(c==null)a[b]=a
else a[b]=c},
n9(){var s=Object.create(null)
A.na(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
og(a,b){return new A.b3(a.h("@<0>").C(b).h("b3<1,2>"))},
J(a,b,c){return b.h("@<0>").C(c).h("mZ<1,2>").a(A.pQ(a,new A.b3(b.h("@<0>").C(c).h("b3<1,2>"))))},
t(a,b){return new A.b3(a.h("@<0>").C(b).h("b3<1,2>"))},
n_(a){return new A.b8(a.h("b8<0>"))},
a_(a){return new A.b8(a.h("b8<0>"))},
bJ(a,b){return b.h("oh<0>").a(A.v4(a,new A.b8(b.h("b8<0>"))))},
nb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lU(a,b,c){var s=new A.cT(a,b,c.h("cT<0>"))
s.c=a.e
return s},
e0(a,b){var s=J.I(a.a)
if(new A.P(s,a.b,a.$ti.h("P<1>")).l())return s.gp()
return null},
ax(a,b,c){var s=A.og(b,c)
a.a0(0,new A.k_(s,b,c))
return s},
k0(a,b){var s,r,q=A.n_(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r)q.m(0,b.a(a[r]))
return q},
n0(a,b){var s=A.n_(b)
s.M(0,a)
return s},
rj(a,b){var s=t.bP
return J.nP(s.a(a),s.a(b))},
n1(a){var s,r
if(A.nK(a))return"{...}"
s=new A.as("")
try{r={}
B.a.m($.b_,a)
s.a+="{"
r.a=!0
a.a0(0,new A.k2(r,s))
s.a+="}"}finally{if(0>=$.b_.length)return A.c($.b_,-1)
$.b_.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ty(){throw A.b(A.ai("Cannot change an unmodifiable set"))},
eG:function eG(){},
lO:function lO(a){this.a=a},
eI:function eI(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b8:function b8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hX:function hX(a){this.a=a
this.c=this.b=null},
cT:function cT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
D:function D(){},
L:function L(){},
k1:function k1(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.$ti=b},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
eY:function eY(){},
dd:function dd(){},
ce:function ce(a,b){this.a=a
this.$ti=b},
bR:function bR(){},
eR:function eR(){},
i9:function i9(){},
ev:function ev(a,b){this.a=a
this.$ti=b},
dy:function dy(){},
eZ:function eZ(){},
ur(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ac(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.m8(p)
return q},
m8(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.hV(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.m8(a[s])
return a},
tP(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.qi()
else s=new Uint8Array(o)
for(r=J.be(a),q=0;q<o;++q){p=r.i(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
tO(a,b,c,d){var s=a?$.qh():$.qg()
if(s==null)return null
if(0===c&&d===b.length)return A.pa(s,b)
return A.pa(s,b.subarray(c,d))},
pa(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
nS(a,b,c,d,e,f){if(B.c.aa(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
od(a,b,c){return new A.e5(a,b)},
tZ(a){return a.B()},
te(a,b){return new A.lR(a,[],A.uW())},
tf(a,b,c){var s,r=new A.as(""),q=A.te(r,b)
q.bJ(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
tQ(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
hV:function hV(a,b){this.a=a
this.b=b
this.c=null},
lQ:function lQ(a){this.a=a},
hW:function hW(a){this.a=a},
m2:function m2(){},
m1:function m1(){},
fj:function fj(){},
iH:function iH(){},
cq:function cq(){},
fw:function fw(){},
fF:function fF(){},
e5:function e5(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
fY:function fY(){},
jT:function jT(a){this.b=a},
jS:function jS(a){this.a=a},
lS:function lS(){},
lT:function lT(a,b){this.a=a
this.b=b},
lR:function lR(a,b,c){this.c=a
this.a=b
this.b=c},
hB:function hB(){},
lh:function lh(a){this.a=a},
m0:function m0(a){this.a=a
this.b=16
this.c=0},
vc(a){var s=A.kn(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
r0(a,b){a=A.aa(a,new Error())
if(a==null)a=A.dD(a)
a.stack=b.n(0)
throw a},
bL(a,b,c,d){var s,r=c?J.o8(a,d):J.o7(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
b4(a,b,c){var s,r=A.i([],c.h("o<0>"))
for(s=J.I(a);s.l();)B.a.m(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
U(a,b){var s,r
if(Array.isArray(a))return A.i(a.slice(0),b.h("o<0>"))
s=A.i([],b.h("o<0>"))
for(r=J.I(a);r.l();)B.a.m(s,r.gp())
return s},
af(a,b){var s=A.b4(a,!1,b)
s.$flags=3
return s},
ov(a,b,c){var s,r
A.hk(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.aq(c,b,null,"end",null))
if(s===0)return""}r=A.rO(a,b,c)
return r},
rO(a,b,c){var s=a.length
if(b>=s)return""
return A.rA(a,b,c==null||c>s?s:c)},
ou(a,b,c){var s=J.I(b)
if(!s.l())return a
if(c.length===0){do a+=A.w(s.gp())
while(s.l())}else{a+=A.w(s.gp())
while(s.l())a=a+c+A.w(s.gp())}return a},
hA(){var s,r,q=A.rr()
if(q==null)throw A.b(A.ai("'Uri.base' is not supported"))
s=$.oB
if(s!=null&&q===$.oA)return s
r=A.rV(q)
$.oB=r
$.oA=q
return r},
rM(){return A.c_(new Error())},
qH(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nY(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
fy(a){if(a>=10)return""+a
return"0"+a},
r_(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.aD(b,"name","No enum value with that name"))},
fG(a){if(typeof a=="number"||A.bd(a)||a==null)return J.d0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.on(a)},
r1(a,b){A.cY(a,"error",t.K)
A.cY(b,"stackTrace",t.l)
A.r0(a,b)},
fh(a){return new A.fg(a)},
z(a,b){return new A.bh(!1,null,b,a)},
aD(a,b,c){return new A.bh(!0,a,b,c)},
op(a){var s=null
return new A.dg(s,s,!1,s,s,a)},
rB(a,b){return new A.dg(null,null,!0,a,b,"Value not in range")},
aq(a,b,c,d,e){return new A.dg(b,c,!0,a,d,"Invalid value")},
el(a,b,c){if(0>a||a>c)throw A.b(A.aq(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aq(b,a,c,"end",null))
return b}return c},
hk(a,b){if(a<0)throw A.b(A.aq(a,0,null,b,null))
return a},
jF(a,b,c,d){return new A.fO(b,!0,a,d,"Index out of range")},
ai(a){return new A.ew(a)},
oy(a){return new A.hv(a)},
q(a){return new A.dk(a)},
ae(a){return new A.fu(a)},
d7(a){return new A.lD(a)},
a8(a,b,c){return new A.F(a,b,c)},
rc(a,b,c){var s,r
if(A.nK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.i([],t.s)
B.a.m($.b_,a)
try{A.up(a,s)}finally{if(0>=$.b_.length)return A.c($.b_,-1)
$.b_.pop()}r=A.ou(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
mW(a,b,c){var s,r
if(A.nK(a))return b+"..."+c
s=new A.as(b)
B.a.m($.b_,a)
try{r=s
r.a=A.ou(r.a,a,", ")}finally{if(0>=$.b_.length)return A.c($.b_,-1)
$.b_.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
up(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.w(l.gp())
B.a.m(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.l()){if(j<=4){B.a.m(b,A.w(p))
return}r=A.w(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.l();p=o,o=n){n=l.gp();++j
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
bO(a,b,c,d){var s
if(B.h===c){s=J.aO(a)
b=J.aO(b)
return A.l4(A.bS(A.bS($.ip(),s),b))}if(B.h===d){s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
return A.l4(A.bS(A.bS(A.bS($.ip(),s),b),c))}s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
d=J.aO(d)
d=A.l4(A.bS(A.bS(A.bS(A.bS($.ip(),s),b),c),d))
return d},
rp(a){var s,r,q=$.ip()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r)q=A.bS(q,J.aO(a[r]))
return A.l4(q)},
n5(a,b){return new A.ev(A.n0(a,b),b.h("ev<0>"))},
rV(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.c(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.oz(a4<a4?B.b.A(a5,0,a4):a5,5,a3).gh1()
else if(s===32)return A.oz(B.b.A(a5,5,a4),0,a3).gh1()}r=A.bL(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.pK(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.pK(a5,0,q,20,r)===20)r[7]=q
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
n=e}j="https"}k=!h}}}}if(k)return new A.i4(a4<a5.length?B.b.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.tI(a5,0,q)
else{if(q===0)A.dz(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.tJ(a5,c,p-1):""
a=A.tE(a5,p,o,!1)
i=o+1
if(i<n){a0=A.kn(B.b.A(a5,i,n),a3)
d=A.tG(a0==null?A.m(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.tF(a5,n,m,a3,j,a!=null)
a2=m<l?A.tH(a5,m+1,l,a3):a3
return A.tz(j,b,a,d,a1,a2,l<a4?A.tD(a5,l+1,a4):a3)},
oD(a){var s=t.N
return B.a.fF(A.i(a.split("&"),t.s),A.t(s,s),new A.lg(B.aj),t.G)},
hz(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
rS(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.c(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.hz("each part must be in the range 0..255",a,r)}A.hz("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.hz(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aN(d)
if(!(k<16))return A.c(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.hz(j,a,q)
p=l}A.hz("IPv4 address should contain exactly 4 parts",a,q)},
rT(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.c(a,b)
if(a.charCodeAt(b)===118){s=A.rU(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.oC(a,b,c)
return!0},
rU(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.F(n,a,q)
r=q
break}return new A.F("Unexpected character",a,q-1)}if(r-1===b)return new A.F(n,a,r)
return new A.F("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.F("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.c(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.F("Invalid IPvFuture address character",a,r)}},
oC(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.lf(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.rS(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.c.cb(l,8)
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
B.aO.hd(s,a0,16,s,a)
B.aO.jz(s,a,a0,0)}}return s},
tz(a,b,c,d,e,f,g){return new A.f_(a,b,c,d,e,f,g)},
p4(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dz(a,b,c){throw A.b(A.a8(c,a,b))},
tG(a,b){var s=A.p4(b)
if(a===s)return null
return a},
tE(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.c(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.c(a,r)
if(a.charCodeAt(r)!==93)A.dz(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.c(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.tB(a,q,r)
if(o<r){n=o+1
p=A.p9(a,B.b.U(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.rT(a,q,o)
l=B.b.A(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.c(a,k)
if(a.charCodeAt(k)===58){o=B.b.bA(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.p9(a,B.b.U(a,"25",n)?o+3:n,c,"%25")}else p=""
A.oC(a,b,o)
return"["+B.b.A(a,b,o)+p+"]"}}return A.tL(a,b,c)},
tB(a,b,c){var s=B.b.bA(a,"%",b)
return s>=b&&s<c?s:c},
p9(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.as(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.nf(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.as("")
l=h.a+=B.b.A(a,q,r)
if(m)n=B.b.A(a,r,r+3)
else if(n==="%")A.dz(a,r,"ZoneID should not contain % anymore")
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
l=A.ne(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.A(a,b,c)
if(q<c){i=B.b.A(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
tL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.c(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.nf(a,r,!0)
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
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.dz(a,r,"Invalid character")
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
j=A.ne(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.A(a,b,c)
if(q<c){k=B.b.A(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
tI(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.c(a,b)
if(!A.p6(a.charCodeAt(b)))A.dz(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.c(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.dz(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.A(a,b,c)
return A.tA(q?a.toLowerCase():a)},
tA(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
tJ(a,b,c){return A.f0(a,b,c,16,!1,!1)},
tF(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.f0(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.S(q,"/"))q="/"+q
return A.tK(q,e,f)},
tK(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.S(a,"/")&&!B.b.S(a,"\\"))return A.tM(a,!s||c)
return A.tN(a)},
tH(a,b,c,d){return A.f0(a,b,c,256,!0,!1)},
tD(a,b,c){return A.f0(a,b,c,256,!0,!1)},
nf(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.c(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.c(a,l)
q=a.charCodeAt(l)
p=A.ms(r)
o=A.ms(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.c(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.a0(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.A(a,b,b+3).toUpperCase()
return null},
ne(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.c.iG(a,6*p)&63|q
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
o+=3}}return A.ov(s,0,null)},
f0(a,b,c,d,e,f){var s=A.p8(a,b,c,d,e,f)
return s==null?B.b.A(a,b,c):s},
p8(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.c(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.nf(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.dz(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.c(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.ne(n)}if(o==null){o=new A.as("")
k=o}else k=o
k.a=(k.a+=B.b.A(a,p,q))+l
if(typeof m!=="number")return A.im(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.A(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
p7(a){if(B.b.S(a,"."))return!0
return B.b.bz(a,"/.")!==-1},
tN(a){var s,r,q,p,o,n,m
if(!A.p7(a))return a
s=A.i([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.m(s,"")}p=!0}else{p="."===n
if(!p)B.a.m(s,n)}}if(p)B.a.m(s,"")
return B.a.aH(s,"/")},
tM(a,b){var s,r,q,p,o,n
if(!A.p7(a))return!b?A.p5(a):a
s=A.i([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gL(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()}else B.a.m(s,"..")
p=!0}else{p="."===n
if(!p)B.a.m(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.m(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.k(s,0,A.p5(s[0]))}return B.a.aH(s,"/")},
p5(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.p6(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.A(a,0,s)+"%3A"+B.b.b9(a,s+1)
if(r<=127){if(!(r<128))return A.c(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
tC(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.c(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.z("Invalid URL encoding",null))}}return r},
ng(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.aj===d)return B.b.A(a,b,c)
else p=new A.fs(B.b.A(a,b,c))
else{p=A.i([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.c(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.z("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.z("Truncated URI",null))
B.a.m(p,A.tC(a,n+1))
n+=2}else if(r===43)B.a.m(p,32)
else B.a.m(p,r)}}t.I.a(p)
return B.dz.jf(p)},
p6(a){var s=a|32
return 97<=s&&s<=122},
oz(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.i([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a8(k,a,r))}}if(q<0&&r>b)throw A.b(A.a8(k,a,r))
while(p!==44){B.a.m(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.c(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.m(j,o)
else{n=B.a.gL(j)
if(p!==44||r!==n+7||!B.b.U(a,"base64",n+1))throw A.b(A.a8("Expecting '='",a,r))
break}}B.a.m(j,r)
m=r+1
if((j.length&1)===1)a=B.bi.jV(a,m,s)
else{l=A.p8(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aM(a,m,s,l)}return new A.le(a,j,c)},
pK(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
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
hQ:function hQ(){},
T:function T(){},
fg:function fg(a){this.a=a},
bT:function bT(){},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fO:function fO(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ew:function ew(a){this.a=a},
hv:function hv(a){this.a=a},
dk:function dk(a){this.a=a},
fu:function fu(a){this.a=a},
ha:function ha(){},
es:function es(){},
lD:function lD(a){this.a=a},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
E:function E(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
A:function A(){},
i7:function i7(){},
as:function as(a){this.a=a},
lg:function lg(a){this.a=a},
lf:function lf(a){this.a=a},
f_:function f_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
hP:function hP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
k9:function k9(a){this.a=a},
a7(a){var s
if(typeof a=="function")throw A.b(A.z("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ih,a)
s[$.dL()]=a
return s},
ih(a,b,c){t.Z.a(a)
if(A.a(c)>=1)return a.$1(b)
return a.$0()},
nI(a,b,c){return c.a(a[b])},
ps(a,b){return a[b]},
aC(a,b,c,d){return d.a(a[b].apply(a,c))},
pl(a,b,c,d){return d.a(a[b](c))},
bu(a,b){var s=new A.a4($.a1,b.h("a4<0>")),r=new A.eB(s,b.h("eB<0>"))
a.then(A.dJ(new A.mM(r,b),1),A.dJ(new A.mN(r),1))
return s},
pA(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
bZ(a){if(A.pA(a))return a
return new A.mn(new A.eI(t.mp)).$1(a)},
mM:function mM(a,b){this.a=a
this.b=b},
mN:function mN(a){this.a=a},
mn:function mn(a){this.a=a},
hU:function hU(){},
dr:function dr(){this.b=this.a=0},
ks:function ks(){},
hj:function hj(a,b){this.a=a
this.b=b},
kq:function kq(){},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(){this.a=null
this.d=0},
kk:function kk(){},
fn:function fn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ja:function ja(){},
jb:function jb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.w=e},
bw(a,b){return new A.js(a,b)},
bP:function bP(){},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b){this.a=a
this.b=b},
e9:function e9(){},
bV:function bV(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(){},
ea:function ea(a,b,c){this.a=a
this.b=b
this.d=c},
kc(a){var s,r=t.N,q=A.bJ(["sceneColor","present"],r)
if(B.f.u(0,"shadows"))q.M(0,A.bJ(["shadowMap","sceneDepth"],r))
if(B.f.u(0,"ssao"))q.M(0,A.bJ(["ssaoRaw","ssaoBlurred"],r))
if(B.f.u(0,"bloom"))q.M(0,A.bJ(["bloomBlurH","bloomBlurV","sceneColor#1"],r))
if(B.f.u(0,"dof"))q.M(0,A.bJ(["dofBlurH","dofBlurV","dofOutput"],r))
if(B.f.u(0,"grade"))q.m(0,"gradeOutput")
if(B.f.u(0,"ps1"))q.m(0,"ps1Output")
s=B.f.u(0,"vhs")
if(s)q.m(0,"vhsOutput")
return new A.kb(A.n5(q,r),s)},
kb:function kb(a,b){this.a=a
this.b=b},
kd:function kd(){},
kl:function kl(a){this.b=a},
hn:function hn(){this.a=null
this.c=0
this.d=!1},
fE:function fE(a,b){this.a=a
this.b=b},
bz:function bz(a,b){this.a=a
this.b=b},
l3:function l3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
kE:function kE(){},
cG:function cG(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
rk(){return new A.k4(new A.by(new A.k5(),A.i([],t.dz),A.i([],t.t),t.kk))},
k4:function k4(a){this.a=a},
k5:function k5(){},
pM(a){var s=4
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
case 3:s=A.m(A.ai("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
tX(a,b,c){var s,r,q
for(s=0,r=0;r<6;++r){q=B.Y[r]
if(A.pM(q.a)===b)s+=q.c}return s},
rl(a){return new A.k7(a,new A.by(new A.k8(),A.i([],t.jk),A.i([],t.t),t.ll),A.t(t.S,t.mL))},
hx:function hx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(){},
rP(a){var s=new A.l8(a,new A.by(new A.l9(),A.i([],t.mQ),A.i([],t.t),t.ox),A.t(t.S,t.h))
s.dD()
return s},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
l9:function l9(){},
la:function la(){},
uS(a){var s,r,q,p,o=A.i([],t.og)
for(s=a.length,r=t.bH,q=0;q<a.length;a.length===s||(0,A.v)(a),++q){p=a[q]
B.a.m(o,new A.e_(p,A.i([p],r)))
continue}return o},
e_:function e_(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
j6:function j6(){},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b
this.c=0},
n2(){return!0},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(){},
kg:function kg(){},
bH:function bH(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b){this.a=a
this.b=b},
dY:function dY(a,b){this.a=a
this.b=b},
kM:function kM(){},
dh:function dh(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
dP:function dP(a){this.b=a},
ko:function ko(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ok(a,b,c,d,e,f){return new A.kh(d,f,b,c,a)},
ku:function ku(){},
he:function he(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e},
kw:function kw(a,b){this.a=a
this.b=b},
kA:function kA(){},
kz:function kz(){},
ky:function ky(a){this.a=a},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a,b){this.a=a
this.b=b},
rF(a){return new A.em(a,new A.by(new A.kC(),A.i([],t.fS),A.i([],t.t),t.mn))},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){this.a=a
this.b=b},
kC:function kC(){},
pp(a){var s,r=a.y
r.toString
r=A.i([new A.hK(r,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(uNormalMatrix)*aNormal;\n  gl_Position=uViewProjection*uModel*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity+vec3(ndotl),0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",new A.ma(a)),new A.hg(r,u.l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nout vec4 oColor;\nvoid main(){\n  oColor=texture(uTex,vUv);\n}\n",a.a)],t.o5)
a.r.toString
a.as.toString
a.x.gp()
s=new A.j3(r).j7(B.f,new A.ku(),!1,new A.i1())
r=s.a.b
if(r.length!==0)throw A.b(A.q("safe renderer graph is invalid: "+A.w(r)))
a.Q=s},
u2(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="sceneColor",b=a0.Q,a=a0.x
if(b==null||a==null)throw A.b(A.q("renderer graph is not initialized"))
s=a1.gcZ()
r=a2.a
q=A.uY(A.r4(r.c),s,-1).a
p=A.i([],t.mX)
o=A.i([],t.ao)
for(s=q.length,n=t.R,m=0;m<q.length;q.length===s||(0,A.v)(q),++m){l=q[m]
k=l.b
B.a.m(p,new A.ag(new A.aI(B.d7,k.b,k.a,l.a.a),l,n))}j=new A.hS(A.uS(A.vq(p)),A.vp(o),r,a2.b)
i=new A.fA(a0.a)
for(s=b.b,r=s.length,n=t.N,k=t.kp,m=0;m<s.length;s.length===r||(0,A.v)(s),++m){h=s[m]
g=A.t(n,k)
for(h.gaq(),f=0;f<1;++f){e=a.c
if(e==null)A.m(A.q("GPU resource adapter is not initialized"))
d=e.b.i(0,c)
if(d==null)A.m(A.q("resource is not in candidate: sceneColor"))
g.k(0,c,new A.fm(d))}h.eo(new A.fl(g,i,j))}},
ma:function ma(a){this.a=a},
i1:function i1(){},
hS:function hS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kL:function kL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=!1},
kS:function kS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.y=_.x=_.w=_.r=null},
kT:function kT(){},
vq(a){var s,r,q=A.U(a,t.R)
B.a.T(q,new A.mR())
s=A.M(q)
r=s.h("a3<1,aR>")
s=A.U(new A.a3(q,s.h("aR(1)").a(new A.mS()),r),r.h("a6.E"))
s.$flags=1
return s},
vp(a){var s,r,q=A.U(a,t.E)
B.a.T(q,new A.mP())
s=A.M(q)
r=s.h("a3<1,aR>")
s=A.U(new A.a3(q,s.h("aR(1)").a(new A.mQ()),r),r.h("a6.E"))
s.$flags=1
return s},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c){this.a=a
this.b=b
this.$ti=c},
mR:function mR(){},
mS:function mS(){},
mP:function mP(){},
mQ:function mQ(){},
uY(a,b,c){var s,r,q,p,o,n,m,l,k=A.i([],t.bH)
for(s=b.$ti,r=new A.aV(b.a(),s.h("aV<1>")),q=(c&-1)>>>0===0,s=s.c,p=0,o=0;r.l();){n=r.b
if(n==null)n=s.a(n);++p
if(q){++o
continue}m=n.c
l=m.a
if(isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)){l=m.b
l=isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)}else l=!1
if(!l)throw A.b(A.z("cullItems: non-finite world bounds for instance "+n.a.n(0),null))
if(a.kk(m)===B.at){++o
continue}B.a.m(k,n)}return new A.iP(k)},
iP:function iP(a){this.a=a},
mV(a){var s,r,q,p,o,n,m,l,k
for(s=J.I(a),r=B.dB,q=B.dC,p=!1;s.l();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.K(m,k,Math.min(r.c,o))
q=new A.K(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.z("Aabb.fromPoints requires at least one point",null))
return new A.it(r,q)},
it:function it(a,b){this.a=a
this.b=b},
r4(a){var s,r,q,p,o,n,m=a.a,l=new A.jf(),k=m.length
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
return new A.je(A.i([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.de))},
cD:function cD(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
je:function je(a){this.a=a},
jf:function jf(){},
oi(a){if(a.length!==16)throw A.b(A.z("Mat4.fromColumnMajor requires 16 values",null))
return new A.bN(new Float32Array(A.cV(a)))},
oj(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.bN(q)},
bN:function bN(a){this.a=a},
k3:function k3(){},
kr:function kr(){},
lb:function lb(){},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.b=a},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
hp(a,b){return new A.er(a,b)},
fK:function fK(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(){},
cw:function cw(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dW:function dW(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b},
jq:function jq(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=!1},
dx:function dx(a,b){this.a=a
this.b=b},
ci:function ci(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
fk:function fk(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.w=d},
ak:function ak(a,b){this.a=a
this.b=b},
lu:function lu(){this.a=null},
t_(a){var s=new A.hJ(a,B.e,new A.lu())
s.hG(a)
return s},
oI(a,b){var s,r
if(a.b!==B.e)A.m(A.q(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.a(s.drawingBufferWidth),A.a(s.drawingBufferHeight))
return}r=t.jg.a(b.a)
s=a.a
s.bindFramebuffer(A.a(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
t3(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.a(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
t2(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
oG(a,b){var s
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
t0(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
oH(a,b){var s,r,q,p
if(a.b!==B.e)A.m(A.q(u.k))
s=a.f
r=s.jl(b)
if(r.a===0)return
if(r.u(0,B.a5)){q=v.G
p=a.a
if(b.a)p.enable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.a(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.u(0,B.b1))a.a.depthFunc(A.t3(a,B.bB))
if(r.u(0,B.a6))a.a.depthMask(b.c)
if(r.u(0,B.a7)){q=v.G
p=a.a
if(b.w)p.enable(A.a(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.a(q.WebGL2RenderingContext.CULL_FACE))}if(r.u(0,B.b7))a.a.cullFace(A.t2(a,B.bA))
if(r.u(0,B.b8)){q=v.G.WebGL2RenderingContext
q=A.a(q.CCW)
a.a.frontFace(q)}if(r.u(0,B.b4)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.BLEND))}if(r.u(0,B.b5))a.a.blendFunc(A.oG(a,B.bh),A.oG(a,B.bg))
if(r.u(0,B.b6))a.a.blendEquation(A.t0(a,B.bf))
if(r.u(0,B.b2))a.a.colorMask(!0,!0,!0,!0)
if(r.u(0,B.b3)){q=v.G.WebGL2RenderingContext
a.a.disable(A.a(q.SCISSOR_TEST))}s.a=b},
t1(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.a(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.a(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
oK(a,b){var s
if(a.b!==B.e)A.m(A.q(u.k))
s=A.d(b.a)
a.a.useProgram(s)
a.e=s},
ez(a,b,c){var s,r,q,p,o,n,m
if(a.b!==B.e)A.m(A.q(u.k))
s=a.e
if(s==null)throw A.b(A.q("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.e(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.m5(c.b))
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
lr(a,b){if(a.b!==B.e)A.m(A.q(u.k))
a.a.bindVertexArray(A.d(b.a))},
t4(a,b,c){var s,r,q,p,o,n
if(a.b!==B.e)A.m(A.q(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.a(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.f2){p=s.d>1?A.a(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.f1){o=s.b
if(o!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.a(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.q("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.q("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
oJ(a,b,c){if(a.b!==B.e)A.m(A.q(u.k))
a.a.drawArrays(A.a(v.G.WebGL2RenderingContext.TRIANGLES),c,b)},
t5(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
t6(a,b){var s,r,q,p
if(a.b!==B.e)A.m(A.q(u.k))
s=a.a
r=A.e(s.createBuffer())
if(r==null)throw A.b(A.q("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.ck?A.a(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.a(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.t5(a,b.b))
return new A.ck(r)},
oL(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.a(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
oM(a,b){var s
switch(b.a){case 0:s=A.a(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.a(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
oN(a,b){var s,r,q,p,o
if(a.b!==B.e)A.m(A.q(u.k))
s=a.a
r=A.e(s.createTexture())
if(r==null)throw A.b(A.q("WebGl2Device: gl.createTexture() returned null"))
q=v.G
p=q.WebGL2RenderingContext
o=A.a(p.TEXTURE_2D)
s.bindTexture(o,r)
p=q.WebGL2RenderingContext
A.aC(s,"texStorage2D",[o,1,A.a(p.RGBA8),1,1],t.H)
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.oL(a,B.av))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.oL(a,B.av))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_WRAP_S),A.oM(a,B.aw))
s.texParameteri(o,A.a(q.WebGL2RenderingContext.TEXTURE_WRAP_T),A.oM(a,B.aw))
return new A.ck(new A.f2(r,1,1,1,!1))},
oO(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.e)A.m(A.q(u.k))
s=t.fL.a(b.a)
r=s.d
if(c>=r)throw A.b(A.z("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.z("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.a(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.a(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.aC(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.aC(l,"texSubImage2D",[m,0,0,0,q,p,A.a(n.WebGL2RenderingContext.RGBA),A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
t7(a,b){if(a.b!==B.e)A.m(A.q(u.k))
t.fL.a(b.a)
return},
n7(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
oQ(a){var s
if(a.b!==B.e)A.m(A.q(u.k))
s=A.e(a.a.createVertexArray())
if(s==null)throw A.b(A.q("WebGl2Device: gl.createVertexArray() returned null"))
return new A.ck(s)},
oP(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.e(p.createShader(b))
if(o==null)throw A.b(A.hp(b===A.nI(A.ps(A.q0(),r),q,t.S)?B.aX:B.aY,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.Y(A.bZ(p.getShaderParameter(o,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.bc(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.hp(b===A.nI(A.ps(A.q0(),r),q,t.S)?B.aX:B.aY,s))}return o},
t8(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.e)A.m(A.q(u.k))
q=v.G
s=A.oP(a,A.a(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.oP(a,A.a(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.e(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.de)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.Y(A.bZ(o.getProgramParameter(n,A.a(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.bc(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.hp(B.aZ,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.v)(c),++l){k=c[l]
if(A.a(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.hp(B.b_,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.e(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.hp(B.b_,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.ck(n)},
ck:function ck(a){this.a=a},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
hJ:function hJ(a,b,c){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c},
ls:function ls(a){this.a=a},
lt:function lt(a){this.a=a},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD(a,b){var s=0,r=A.br(t.f5),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$iD=A.bs(function(a0,a1){if(a0===1)return A.bo(a1,r)
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
c=new A.fi(p,b,m,l,k,j,i,h,g,f,e,d,n,B.ak,A.t(o,t.iL))
c.hw(p,b)
p=A.n(a).h("R<1,2>")
s=3
return A.an(A.o1(A.h0(new A.R(a,p),p.h("b2<W>(l.E)").a(new A.iE(c)),p.h("l.E"),t.mj),t.P),$async$iD)
case 3:n=n.i(0,"ir-stone")
p=n==null?c.ib():n
d.buffer=p
q=c
s=1
break
case 1:return A.bp(q,r)}})
return A.bq($async$iD,r)},
fi:function fi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
iE:function iE(a){this.a=a},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=1
_.r=0},
j9:function j9(a){this.a=a},
hs:function hs(a,b,c,d,e,f,g,h,i,j){var _=this
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
jm:function jm(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
jn:function jn(a,b){this.a=a
this.b=b},
fN:function fN(a,b){this.a=a
this.b=0
this.$ti=b},
fP:function fP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.f=!1},
h1:function h1(a){this.a=a},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(a,b){this.a=a
this.b=b},
et(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aN(a)
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
dl:function dl(a){this.a=a
this.b=0},
kB:function kB(a,b){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ay=192
_.ch=108
_.CW=$},
kK:function kK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rG(a,b,c){var s,r,q,p,o,n,m,l,k,j=A.os(),i=new Float32Array(336e3),h=new Float32Array(67200),g=J.fU(800,t.fw)
for(s=0;s<800;++s)g[s]=new A.i_(new A.j(0,0,0),new A.j(0,0,0),new A.j(0,0,0),new A.j(0,0,0))
r=t.S
q=A.bL(800,0,!1,r)
p=new Float32Array(8064)
o=J.fU(4000,t.hZ)
for(s=0;s<4000;++s)o[s]=new A.hY(new A.j(0,0,0),new A.j(0,0,0),new A.j(0,0,0),new A.j(0,0,0),0,1,0,0,0)
n=A.bL(4000,0,!1,r)
m=new A.j(0.3,0.7,-0.5).ga1()
l=new Float32Array(16)
l[0]=1
l[5]=1
l[10]=1
l[15]=1
k=t.kC
k=new A.kD(a,new A.jm(a,A.t(t.m,r)),b,c,A.a_(t.N),j,i,h,g,q,p,A.t(r,t.hX),o,n,m,B.cP,new A.j(0,0,0),new A.j(0,0,1),new A.j(0,1,0),new A.j(1,0,0),new A.h1(l),a,A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k),A.i([],k))
k.hC(a,b,c)
return k},
kD:function kD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
_.a7=a
_.ad=b
_.au=c
_.av=d
_.cJ=_.fj=1
_.cT=_.cS=_.fE=_.fD=_.fC=_.fB=_.fA=_.fz=_.cR=_.cQ=_.cP=_.cO=_.cN=_.cM=_.cL=_.fw=_.fv=_.fu=_.cK=_.ft=_.fs=_.fq=_.fp=_.fo=_.fn=_.fm=_.fl=_.fk=_.a_=$
_.bq=null
_.ep=e
_.eR=_.eQ=_.eP=_.eO=_.eN=_.eM=_.eL=_.eK=_.eJ=_.eI=_.eH=_.eG=_.eF=_.eE=_.eD=_.eC=_.eB=_.eA=_.ez=_.ey=_.ex=_.ew=_.ev=_.eu=_.es=_.er=_.eq=_.br=$
_.bs=0
_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.ck=$
_.bw=_.bv=_.bu=_.bt=_.aY=_.ar=null
_.aZ=$
_.eU=_.eT=_.eS=!1
_.js=1
_.cr=f
_.cs=g
_.jt=h
_.eV=i
_.bx=0
_.eW=j
_.ju=k
_.ct=0
_.cu=l
_.jv=1
_.cv=!1
_.b_=0
_.cw=m
_.b0=0
_.eX=n
_.eY=o
_.f0=_.f_=_.eZ=1
_.f1=0.55
_.cz=p
_.f2=q
_.cA=r
_.cB=s
_.cC=a0
_.f3=_.cG=_.cF=_.cE=_.cD=0
_.f4=null
_.f5=a1
_.a=a2
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.r=_.f=_.e=_.d=_.c=_.b=$
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.fe=_.cI=_.cH=_.fd=_.fc=_.jy=_.jx=_.jw=_.fb=_.fa=_.f9=_.f8=_.f7=_.f6=_.y2=_.y1=_.xr=_.x2=_.x1=_.to=_.ry=_.rx=_.RG=_.R8=_.p4=_.p3=$
_.ff=a7
_.fg=a8
_.fh=a9
_.fi=b0},
pB(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=d.Y(0,c).ap(f.Y(0,c)).ga1(),r=A.mk(g)
return A.pE(a,b,c,d,e,f,s,r.a*j,r.b*j,r.c*j,0,i,k,l,m,1,1)},
fb(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aN(a)
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
pE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=m+p,r=n+q
return A.fb(a,A.fb(a,A.fb(a,A.fb(a,A.fb(a,A.fb(a,b,c,g,h,i,j,k,l,m,n,o),d,g,h,i,j,k,l,s,n,o),e,g,h,i,j,k,l,s,r,o),c,g,h,i,j,k,l,m,n,o),e,g,h,i,j,k,l,s,r,o),f,g,h,i,j,k,l,m,r,o)},
mk(a){return new A.dw((a>>>16&255)/255,(a>>>8&255)/255,(a&255)/255)},
u7(a,b,c){var s,r,q,p=(a-Math.floor(a))*6,o=B.d.cU(p),n=p-o,m=c*(1-b),l=c*(1-n*b),k=c*(1-(1-n)*b),j=A.X(),i=A.X(),h=A.X()
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
h.b=l}s=j.c9()
if(typeof s!=="number")return s.W()
s=B.d.ak(s*255)
r=i.c9()
if(typeof r!=="number")return r.W()
r=B.d.ak(r*255)
q=h.c9()
if(typeof q!=="number")return q.W()
return new A.dw(s,r,B.d.ak(q*255))},
eF:function eF(){},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
i_:function i_(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hY:function hY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kF:function kF(){},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
lw:function lw(){},
kV:function kV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=c
_.r=d
_.w=e
_.x=f},
hC(a,b,c){return new A.j(a,b,c)},
oE(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.j(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
j:function j(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
qL(a,b,c){var s=new A.fD(a,c,null,b)
s.hx(a,null,null,b,c)
return s},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
qY(a){var s
if(!t.f.b(a)||typeof a.i(0,"kind")!="string")return null
s=A.e0(new A.H(B.cV,t.gl.a(new A.j1(a)),t.ns),t.no)
return s==null?null:new A.d6(s)},
qX(a){if(a.a!==21)return null
if(a.e)return B.bD
if(!a.d&&a.b>=0.6&&a.c>=3)return B.bE
return B.bC},
b1:function b1(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d6:function d6(a){this.a=a},
j1:function j1(a){this.a=a},
rq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
h=new A.hd(s,new A.j(o,n,m),q,p,l,j)
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
hd:function hd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uC(a){var s,r,q,p=A.t(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.l();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.b(B.bN)
p.k(0,q,r.b)}return p},
ii(a){var s,r,q,p,o,n=a.gK().aN(0)
B.a.a3(n)
s=t.z
r=A.t(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.v)(n),++p){o=n[p]
r.k(0,o,A.pn(a.i(0,o)))}return A.d4(r,t.N,s)},
pn(a){var s
if(t.f.b(a))return A.ii(A.uC(a))
if(t.j.b(a)){s=t.z
return A.af(J.nR(a,A.vm(),s),s)}if(a==null||A.bd(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.c2)
return a}throw A.b(A.a8("presentation snapshot contains unsupported value "+J.fd(a).n(0),null,null))},
km:function km(a){this.a=a},
ot(a,b,c){var s=A.nl(b),r=A.nl(a)
if(c!==2)A.m(A.aD(c,"version","unsupported save version"))
return new A.di(c,s,r)},
nl(a){var s,r,q,p,o=A.n(a).h("a5<1>"),n=A.U(new A.a5(a,o),o.h("l.E"))
B.a.a3(n)
o=t.z
s=A.t(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.v)(n),++q){p=n[q]
s.k(0,p,A.pm(a.i(0,p)))}return A.d4(s,t.N,o)},
pm(a){var s,r,q,p
if(t.f.b(a)){s=A.t(t.N,t.z)
for(r=a.gO(),r=r.gt(r);r.l();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.b(B.bZ)
s.k(0,p,q.b)}return A.nl(s)}if(t.j.b(a)){r=t.z
return A.af(J.nR(a,A.vo(),r),r)}if(a==null||A.bd(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.c3)
return a}throw A.b(A.a8("save contains unsupported value "+J.fd(a).n(0),null,null))},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function kR(){},
cH:function cH(a,b){this.a=a
this.b=b},
o2(a,b,c,d,e,f,g){return new A.ji(a,b,c,d,e,f,g,A.i([],t.mc),A.i([],t.ag))},
o3(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2.b,d=e.i(0,"houseSeed"),c=e.i(0,"time"),b=e.i(0,"dayLoop"),a=e.i(0,"journal"),a0=e.i(0,"house"),a1=e.i(0,"difficulty")
if(A.aB(d)){s=t.f
s=!s.b(c)||!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)}else s=!0
if(s)throw A.b(B.bY)
r=e.i(0,"runSeed")
q=A.aB(r)?r:0
p=c.i(0,"day")
o=c.i(0,"hour")
if(!A.aB(p)||p<1||typeof o!="number")throw A.b(B.c6)
if(!isFinite(480))throw A.b(A.aD(480,"daySeconds","must be finite and > 0"))
n=new A.fJ(p,480)
if(!isFinite(o)||o<0||o>=24)A.m(A.a8("saved hour must be finite and in [0, 24)",null,null))
n.b=o
s=t.N
m=t.z
l=A.rh(a3,A.ax(a,s,m))
k=A.qI(l,A.ax(b,s,m),n)
j=A.o4(d)
A.r7(A.ax(a0,s,m)).j0(j)
m=A.ax(a1,s,m)
i=m.i(0,"scrutiny")
h=m.i(0,"exhaustion")
g=m.i(0,"isolation")
f=m.i(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bd(f))A.m(B.bP)
return A.o2(d,q,j,n,l,k,new A.fC(i,h,g,f))},
u1(a){var s
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
fI:function fI(){},
jj:function jj(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c,d,e,f,g,h,i){var _=this
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
jk:function jk(a){this.a=a},
jl:function jl(){},
fo:function fo(a,b){this.a=a
this.b=b
this.d=null},
iL:function iL(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jw:function jw(){this.b=0},
kN:function kN(a,b,c){var _=this
_.a=a
_.b=b
_.c=$
_.d=c},
kO:function kO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vn(a,b,c){var s,r,q=A.nM(a,c,b)
if(q!=null&&!q.e){s=q.b
return new A.d8(B.bF,s)}r=A.pZ(a,c,b)
if(r!=null)return new A.d8(B.bG,r.at&&!r.ax&&!r.z?"close door":"open door")
if(A.q_(a,c,b)!=null)return B.bK
return B.bJ},
ct:function ct(a,b){this.a=a
this.b=b},
d8:function d8(a,b){this.a=a
this.c=b},
o4(a4){var s,r,q,p=null,o="living-room",n="mantle-living",m="the mantle by the door",l="mantle-living-second",k="the mantle by the window",j="hall",i="kitchen",h="mantle-kitchen",g="mantle-bedroom",f="landing",e="landing-bathroom",d="bathroom",c="spare-room",b=t.kl,a=A.i([],b),a0=t.aN,a1=A.i([],a0),a2=A.i([],t.jn),a3=t.N
a3=new A.jv(a,a1,a2,A.t(a3,t.k),A.t(a3,t.gm),new A.jw())
s=t.cJ
r=t.s
q=t.cs
B.a.M(a,A.i([new A.ar(o,new A.j(4.5,2.6,4),new A.j(0,0,0),A.i([new A.az("living-north-west",B.i,0.5,0.6,1.2,1.2),new A.az("living-north-east",B.i,2.7,0.6,1.2,1.2)],s),A.i(["hall-living","kitchen-living"],r),A.i([new A.aH(n,m,new A.j(1,1.3,1),!1,n),new A.aH(l,k,new A.j(3,1.3,3),!1,l)],q)),new A.ar(j,new A.j(2.5,2.6,7),new A.j(4.5,0,0),A.i([new A.az("hall-fanlight",B.i,0.85,2.15,0.8,0.35)],s),A.i(["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],r),A.i([new A.aH("mantle-hall","the hall mantle",new A.j(1,1.3,3.5),!1,p)],q)),new A.ar(i,new A.j(4.5,2.5,3),new A.j(0,0,4),A.i([new A.az("kitchen-south",B.k,1.5,0.7,1.2,1.1),new A.az("kitchen-west",B.z,1,0.8,0.9,1)],s),A.i(["hall-kitchen","kitchen-living"],r),A.i([new A.aH(h,"the mantle by the stove",new A.j(0.8,1.2,0.5),!1,h),new A.aH("mantle-kitchen-second",m,new A.j(2.2,1.2,2),!1,p),new A.aH("mantle-kitchen-third",k,new A.j(3.8,1.2,1.2),!1,p)],q)),new A.ar("cellar",new A.j(4,2,4),new A.j(1,-2,2),B.aI,A.i(["hall-cellar"],r),B.cO),new A.ar("bedroom",new A.j(4.5,2.4,4),new A.j(0,2.8,0),A.i([new A.az("bedroom-north-west",B.i,0.7,0.7,1.1,1.1),new A.az("bedroom-north-east",B.i,2.7,0.7,1,1.1)],s),A.i(["landing-bedroom"],r),A.i([new A.aH(g,"the bedroom mantle",new A.j(1,1.3,1),!1,g),new A.aH("mantle-bedroom-bedside","the bedside mantle",new A.j(3.5,1,3),!1,p)],q)),new A.ar(f,new A.j(2.5,2.4,3),new A.j(4.5,2.8,0),B.aI,A.i(["hall-landing","landing-bedroom",e,"landing-spare"],r),A.i([new A.aH("mantle-landing","the landing mantle",new A.j(1,1.2,1.5),!1,p)],q)),new A.ar(d,new A.j(2.5,2.4,2.5),new A.j(4.5,2.8,3),A.i([new A.az("bathroom-east",B.q,0.9,1,0.7,1)],s),A.i([e],r),A.i([new A.aH("mantle-bathroom","the bathroom mantle",new A.j(1.5,1.2,1),!1,p)],q)),new A.ar(c,new A.j(4.5,2.1,3),new A.j(0,2.8,4),A.i([new A.az("spare-south",B.k,1.8,0.7,0.9,0.9)],s),A.i(["landing-spare"],r),A.i([new A.aH("mantle-spare","the broken mantle",new A.j(2,1.3,1),!0,p)],q))],b))
B.a.M(a1,A.i([A.c9(j,"outside",!0,B.i,B.k,2.1,"front-door",0.8,0,!0,!1,!1,0.9),A.c9(j,o,!1,B.z,B.q,2.1,"hall-living",1.8,1.8,!0,!1,!1,0.9),A.c9(j,i,!1,B.z,B.q,2.1,"hall-kitchen",4.9,1,!0,!1,!1,0.9),A.c9(i,o,!1,B.i,B.k,2.1,"kitchen-living",2,2,!0,!1,!1,0.9),A.c9(j,"cellar",!1,B.k,B.q,2,"hall-cellar",0.5,1.5,!1,!1,!0,0.9),A.c9(j,f,!1,B.q,B.q,2.1,"hall-landing",4,0.7,!0,!0,!1,1.2),A.c9(f,"bedroom",!1,B.z,B.q,2.1,"landing-bedroom",1,1,!0,!1,!1,0.9),A.c9(f,d,!1,B.k,B.i,2.1,e,1,0.8,!0,!1,!1,0.9),A.c9(f,c,!1,B.k,B.i,2.1,"landing-spare",0.1,2,!0,!1,!1,0.9)],a0))
B.a.m(a2,new A.cJ("hall-stairs",B.cU,new A.j(5.75,1.65,5.8),new A.j(5.75,4.45,2.2)))
a3.ic()
b=a.length
if(b!==8)A.m(A.q("expected eight rooms, got "+b))
b=a3.gks()
if(b!==9)A.m(A.q("window discrepancy must be 9 inside / 11 outside"))
B.a.gbP(a2)
b=B.a.gL(B.a.gbP(a2).c)
if(b!==4.2)A.m(A.q("stairs must expose landings at 1.4, 2.8 and 4.2"))
if(a1.length!==9)A.m(A.q("expected nine physical portals"))
a3.iR()
a3.iQ()
return a3},
jv:function jv(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
jB:function jB(){},
jA:function jA(){},
jC:function jC(a){this.a=a},
jD:function jD(){},
nM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.e.i(0,c)
if(e==null)return null
for(s=e.r,r=s.length,q=e.d,p=q.a,o=q.b,q=q.c,n=null,m=3,l=0;l<s.length;s.length===r||(0,A.v)(s),++l){k=s[l]
j=k.c
i=a.a
h=new A.j(p+j.a-i.a,o+j.b-i.b,q+j.c-i.c)
g=h.gq(0)
if(g<0.01||g>3)continue
f=h.ga1()
j=a.b
if(Math.acos(B.d.Z(f.a*j.a+f.b*j.b+f.c*j.c,-1,1))<=0.5236&&g<m){m=g
n=k}}return n},
pZ(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=b.b6(c),r=J.I(s.a),s=new A.P(r,s.b,s.$ti.h("P<1>")),q=null,p=3;s.l();){o=r.gp()
n=b.k5(c,o)
m=a.a
l=new A.j(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gq(0)
if(!A.pu(l,k,a,3,0.5236)||k>=p)continue
p=k
q=o}return q},
q_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.i(0,c)
if(i==null)return null
for(s=i.e,r=s.length,q=null,p=3,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
m=A.uN(b,i,n)
l=a.a
k=new A.j(m.a-l.a,m.b-l.b,m.c-l.c)
j=k.gq(0)
if(!A.pu(k,j,a,3,0.5236)||j>=p)continue
p=j
q=n}return q},
pu(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.d.Z(a.ga1().aX(c.b),-1,1))<=e},
uN(a,b,c){var s=a.aD(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.j(q.a+r,p,q.c)
break
case 2:q=new A.j(q.a+r,p,q.c+s.c)
break
case 1:q=new A.j(q.a+s.a,p,q.c+r)
break
case 3:q=new A.j(q.a,p,q.c+r)
break
default:q=null}return q},
j2:function j2(){this.a=null
this.b=0},
kW:function kW(){},
kX:function kX(){},
bx:function bx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
c9(a,b,c,d,e,f,g,h,i,j,k,l,m){return new A.cE(g,a,b,d,e,h,i,m,f,l,k,j)},
c2:function c2(a,b){this.a=a
this.b=b},
az:function az(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=!0},
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
_.z=j
_.as=k
_.at=l
_.ax=!1},
aH:function aH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=d
_.f=e
_.r=!1},
cJ:function cJ(a,b,c,d){var _=this
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
o5(a,b,c,d,e,f){var s=t.N
return new A.jz(e,f,c,a,A.d4(A.ax(d,s,s),s,s),A.af(b,s))},
o6(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.t(i,t.ku)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
h.k(0,p.a,new A.ej(p.at,p.ax))}s=A.t(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.v)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.t(i,t.mK)
for(q=0;q<r.length;r.length===n||(0,A.v)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l){j=o[l]
i.k(0,j.a,new A.e8(j.d,j.r))}return A.o5(a.r.b,B.j,i,B.aL,h,s)},
r7(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.i(0,"portals"),a0=a3.i(0,"windows"),a1=a3.i(0,"mantles"),a2=a3.i(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.i(0,"overrides")
if(s==null)s=B.cZ
r=a3.i(0,"mantleHistory")
if(r==null)r=B.cN
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.aB(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.bW)
p=t.N
o=A.t(p,t.ku)
for(n=a.gO(),n=n.gt(n),m=t.z;n.l();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.as)
l=A.ax(q.a(l.b),p,m)
j=l.i(0,"open")
i=l.i(0,"locked")
if(!A.bd(j)||!A.bd(i))A.m(B.as)
o.k(0,k,new A.ej(j,i))}h=A.t(p,t.y)
for(n=a0.gO(),n=n.gt(n);n.l();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bd(l.b))throw A.b(B.bU)
h.k(0,k,A.aA(l.b))}g=A.t(p,t.mK)
for(n=a1.gO(),n=n.gt(n);n.l();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.ar)
l=A.ax(q.a(l.b),p,m)
f=l.i(0,"lit")
e=l.i(0,"examined")
if(!A.bd(f)||!A.bd(e))A.m(B.ar)
g.k(0,k,new A.e8(f,e))}d=A.t(p,p)
for(q=s.gO(),q=q.gt(q);q.l();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.ca)
d.k(0,n,A.B(p.b))}c=A.i([],t.s)
for(q=J.I(r);q.l();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.b(B.bL)
B.a.m(c,b)}return A.o5(a2,c,g,d,o,h)},
nz(a,b){return a.a.a===b.a&&a.a5(0,b.gbo(b))},
jz:function jz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ej:function ej(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
qV(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.k0(e,A.M(e).c)
q=new A.dr()
q.bT((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.dS(a,q,2,r,1+s,A.bJ(["time"],t.N))
break
case 3:A.dS(a,q,3,r,1+s,A.bJ(["place"],t.N))
break
case 4:A.dS(a,q,4,r,2+s,p)
A.qR(a,q,4)
break
case 5:A.dS(a,q,5,r,s,p)
A.qP(a,q,5)
break
case 6:A.dS(a,q,6,r,s,p)
A.qQ(a,q)
A.qU(a,q,6)
break
case 7:A.qS(a,q,7)
break
default:if(s>0)A.dS(a,q,b,r,s,p)}},
qO(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.u(0,b.a))return!1
if(A.qT(a,b,c))return!1
return!0},
dS(a,b,c,d,e,f){var s,r,q,p,o=A.i([],t.r)
for(s=a.b,s=new A.a9(s,s.r,s.e,A.n(s).h("a9<2>"));s.l();){r=s.d
if(A.qO(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.bO(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.c(o,p)
A.o_(a,b,o[p],f)}},
o_(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.ax(B.a.gL(o).a,n,n)
if(d==null)s=A.i(B.l.slice(0),t.s)
else{n=t.nn
s=A.U(new A.H(B.l,t.gS.a(new A.iY(d)),n),n.h("l.E"))}n=s.length
if(n===0)return
n=b.a6(n)
if(!(n>=0&&n<s.length))return A.c(s,n)
r=s[n]
q=m.i(0,r)
if(q==null)q=""
p=a.a.dl(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.a6(n)
if(!(n>=0&&n<p.length))return A.c(p,n)
m.k(0,r,p[n])}a.ci(c.a,m,B.a.gL(o).b)},
qR(a,b,c){var s=A.o0(a,b,c)
if(!a.aV(s))return
a.dt(c,t.G.a(s),0,B.V,null)},
o0(a,b,c){var s,r,q,p,o,n=t.N,m=A.t(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.l[s]
q=n.i(0,r)
if(q==null)q=B.j
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.a6(p)
if(!(o>=0&&o<p))return A.c(q,o)
m.k(0,r,q[o])}}return m},
qP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.i([],t.r)
for(s=a.b,s=new A.a9(s,s.r,s.e,A.n(s).h("a9<2>"));s.l();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.bO(i,b)
s=i.length
if(0>=s)return A.c(i,0)
q=i[0]
if(1>=s)return A.c(i,1)
p=i[1]
i=q.c
s=t.N
o=A.ax(B.a.gL(i).a,s,s)
r=p.c
n=A.ax(B.a.gL(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.l[m]
k=o.i(0,l)
j=s.dl(l,k==null?"":k)
k=j.length
if(k!==0){k=b.a6(k)
if(!(k>=0&&k<j.length))return A.c(j,k)
o.k(0,l,j[k])}}a.ci(q.a,o,B.a.gL(i).b)
a.ci(p.a,n,B.a.gL(r).b)},
qQ(a,b){var s,r,q=A.i([],t.r)
for(s=a.b,r=new A.a9(s,s.r,s.e,A.n(s).h("a9<2>"));r.l();)q.push(r.d)
r=q.length
if(r===0)return
r=b.a6(r)
if(!(r>=0&&r<q.length))return A.c(q,r)
s.ai(0,q[r].a)},
qU(a,b,c){var s,r,q=A.i([],t.r)
for(s=a.b,s=new A.a9(s,s.r,s.e,A.n(s).h("a9<2>"));s.l();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.a6(s)
if(!(s>=0&&s<q.length))return A.c(q,s)
A.o_(a,b,q[s],null)},
qS(a,b,c){var s=c+1,r=A.o0(a,b,s)
if(!a.aV(r))return
a.dt(s,t.G.a(r),0,B.V,null)},
qT(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gL(b.c).c===B.J}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gL(b.c).c===B.J}if(c===21)return b.e
return!1},
iY:function iY(a){this.a=a},
rZ(a){var s,r,q,p,o=t.N,n=A.t(o,t.a)
for(s=0;s<5;++s){r=B.l[s]
q=a.i(0,r)
p=A.b4(q==null?B.j:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.lq(n)},
jW(a,b,c){var s,r,q,p=t.z
p=A.t(p,p)
for(s=0;s<5;++s){r=B.l[s]
q=a.i(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.h_(A.d4(p,q,q),b,c)},
of(a){var s=t.N
return A.jW(t.b.a(a.i(0,"fields")).aI(0,new A.jX(),s,s),A.ig(a.i(0,"shakiness")),A.r_(B.cJ,A.B(a.i(0,"hand")),t.bU))},
qZ(a){var s,r,q,p,o=a.i(0,"margin"),n=A.a(a.i(0,"ordinal")),m=A.a(a.i(0,"day")),l=A.i([],t.b1)
for(s=J.I(t.j.a(a.i(0,"revisions"))),r=t.b;s.l();)l.push(A.of(r.a(s.gp())))
s=A.bc(a.i(0,"corroborator"))
q=A.aA(a.i(0,"locked"))
p=A.pi(a.i(0,"lastReadDay"))
return new A.aP(n,m,l,s,q,p,o==null?null:A.of(r.a(o)))},
c3:function c3(a,b){this.a=a
this.b=b},
lq:function lq(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(){},
jY:function jY(a){this.a=a},
aP:function aP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oc(a){return new A.jJ(a,A.t(t.S,t.L),A.a_(t.N),A.i([],t.t))},
rh(a,b){var s,r,q,p,o=A.oc(a)
o.e=A.a(b.i(0,"nextOrdinal"))
o.f=A.a(b.i(0,"locksRemaining"))
s=t.j
o.c.M(0,J.qq(s.a(b.i(0,"tags")),t.N))
for(s=J.I(s.a(b.i(0,"entries"))),r=t.b,q=o.b;s.l();){p=A.qZ(r.a(s.gp()))
q.k(0,p.a,p)}return o},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
jQ:function jQ(a,b){this.a=a
this.b=b},
iF:function iF(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(){},
jV:function jV(){},
jU:function jU(a){this.d=a},
kj:function kj(){},
ki:function ki(a,b){this.b=a
this.c=b},
oq(a){if(!isFinite(0))A.m(A.aD(0,"interpolation",null))
return new A.kJ(a)},
en:function en(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
m9(a){var s=B.cY.i(0,a)
return s.length===0?null:s},
kI:function kI(a,b,c,d,e,f,g,h,i,j){var _=this
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
nZ(a,b,c,d,e,f,g){var s=A.U(f,t.ad)
if(b<0||a<0||e<0)A.m(A.a8("saved day-loop resources must not be negative",null,null))
return new A.iQ(c,g,b,a,e,d===!0,s)},
qI(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.i(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.bS)
s=A.i([],t.b2)
for(r=J.I(a0),q=t.gw,p=t.am,o=t.gC,n=t.aZ,m=t.hr,l=t.m9,k=t.f;r.l();){j=r.gp()
if(!k.b(j))throw A.b(B.bX)
i=j.i(0,"day")
h=j.i(0,"quality")
g=j.i(0,"location")
if(!A.aB(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.bR)
f=A.e0(new A.H(B.aE,q.a(new A.iR(h)),p),o)
e=A.e0(new A.H(B.aJ,n.a(new A.iS(g)),m),l)
if(f==null||e==null)throw A.b(B.c8)
B.a.m(s,new A.dj(i,f,e))}d=a2.i(0,"hoursRemaining")
c=a2.i(0,"gasRemaining")
b=a2.i(0,"rationCoupons")
a=a2.i(0,"rationCollectedToday")
if(!A.aB(d)||!A.aB(c)||!A.aB(b)||!A.bd(a))throw A.b(B.c_)
return A.nZ(c,d,a1,a,b,s,a3)},
aJ:function aJ(a,b){this.a=a
this.b=b},
ay:function ay(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=b},
lv:function lv(a,b){this.b=a
this.c=b},
cN:function cN(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
jE:function jE(a){this.c=a},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(){},
os(){var s=A.nr(B.j),r=A.nr(B.j),q=new A.kQ(B.o,s,r)
if(!isFinite(0))A.m(B.bM)
if(!B.a.a5(r,B.a.gbo(s)))A.m(B.c0)
if(q.a===B.o&&q.b!==0&&!q.e)A.m(B.bO)
return q},
nr(a){var s,r,q,p=A.i([],t.s),o=A.a_(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.m(0,q))throw A.b(B.c7)
B.a.m(p,q)}return p},
b6:function b6(a,b){this.a=a
this.b=b},
kP:function kP(){},
bA:function bA(){},
kQ:function kQ(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
fJ:function fJ(a,b){this.a=a
this.b=6
this.c=b},
vu(a){var s=B.d.Z(a,0,1)
if(s<=0.5)return A.pz(4491468,16777215,s*2)
return A.pz(16777215,16759637,(s-0.5)*2)},
pz(a,b,c){var s,r=new A.me(a,b,c),q=r.$1(16)
if(typeof q!=="number")return q.hf()
s=r.$1(8)
if(typeof s!=="number")return s.hf()
r=r.$1(0)
if(typeof r!=="number")return A.im(r)
return(q<<16|s<<8|r)>>>0},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
dm(a){var s,r,q=A.t(t.N,t.z)
for(s=a.gO(),s=s.gt(s);s.l();){r=s.gp()
q.k(0,B.c.n(r.a),r.b)}return q},
l_:function l_(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
l0:function l0(){},
l1:function l1(){},
cM:function cM(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b){this.a=a
this.b=b},
l5:function l5(){var _=this
_.z=_.w=_.f=_.c=_.b=_.a=$},
l6:function l6(){},
l7:function l7(){},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iI:function iI(a){this.a=a
this.b=null},
qM(a){var s=A.i([],t.W)
s=new A.iT(A.O(a,"div","door",null),s)
s.hy(a)
return s},
iT:function iT(a,b){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=$
_.r=b
_.y=_.x=_.w=null
_.z=!1},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
this.b=b},
qW(a){var s=new A.j_(a,A.d(a.createElement("div")))
s.ba(a)
s.hz(a)
return s},
j_:function j_(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
j0:function j0(a){this.a=a},
r6(a){var s=new A.jt(a,A.d(a.createElement("div")))
s.ba(a)
s.hA(a)
return s},
jt:function jt(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ju:function ju(a){this.a=a},
jK:function jK(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(){},
jP:function jP(){},
O(a,b,c,d){var s=A.d(a.createElement(b))
s.className=c
if(d!=null)s.textContent=d
return s},
pq(a){var s,r,q,p=A.d(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.i([],t.W)
for(s=t.m,r=0;r<A.a(p.length);++r){q=A.e(p.item(r))
if(s.b(q))B.a.m(o,q)}return o},
ei:function ei(){},
kp:function kp(a){this.a=a
this.b=null},
rJ(a){var s=new A.kY(a,A.d(a.createElement("div")))
s.ba(a)
s.hF(a)
return s},
kY:function kY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
qw(a){var s,r,q,p,o,n,m,l,k,j,i=A.i([],t.od)
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
B.a.m(i,new A.bg(p+m+":"+k,m,l.a,l.b,j))}}B.a.T(i,new A.iy())
return new A.ix(A.af(i,t.e),A.a_(t.N))},
bg:function bg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ix:function ix(a,b){this.a=a
this.b=b},
iz:function iz(){},
iy:function iy(){},
rY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.b
if(e.a===0)return B.e7
s=t.g
r=A.t(s,t.kz)
q=A.n(e).h("a5<1>")
p=A.U(new A.a5(e,q),q.h("l.E"))
B.a.a3(p)
for(q=p.length,o=t.ln,n=a.c,m=a.as,l=0;l<p.length;p.length===q||(0,A.v)(p),++l){k=p[l]
for(j=e.i(0,k).gO(),j=j.gt(j);j.l();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.aL(new A.aU(B.dU,k+" has an out-of-range authored day "+h+"."))
g=A.rX(k,h,i.b,m)
if(g instanceof A.aL)return g
i=n.i(0,k)
f=i==null?null:i.i(0,h)
if(f==null)continue
r.k(0,new A.aK(k,h,f.a,f.b),o.a(g).a)}}return new A.hH(new A.hG(r,A.a_(t.N),A.a_(s),A.i([],t.bl),B.f))},
rX(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.t(t.kM,t.eU)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.ah,p=0;p<3;++p){o=B.aD[p]
n=o.b
m=n+"."
l=A.i([],q)
for(k=a0.gO(),k=k.gt(k),j=m.length;k.l();){i=k.gp()
h=i.a
if(!B.b.S(h,m))continue
g=A.kn(B.b.b9(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.aL(new A.aU(B.dV,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.i(0,r+h)
if(f==null)f=B.aH
B.a.m(l,new A.b7(g,i.b,f))}if(l.length===0)continue
B.a.T(l,new A.lk())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.aL(new A.aU(B.bb,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.aL(new A.aU(B.bb,a+" day "+s+" has no authored tiers."))
return new A.hZ(c)},
hG:function hG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e},
lo:function lo(a){this.a=a},
ln:function ln(a){this.a=a},
ll:function ll(a){this.a=a},
lm:function lm(){},
lk:function lk(){},
hH:function hH(a){this.a=a},
hZ:function hZ(a){this.a=a},
v1(a){var s,r,q,p=A.a_(t.N)
for(s=new A.R(a,A.n(a).h("R<1,2>")).gt(0);s.l();){r=s.d
for(q=r.b.ga9(),q=q.gt(q);q.l();)if(q.gp().gK().ab(0,new A.mq())){p.m(0,r.a)
break}}s=A.U(p,p.$ti.c)
B.a.a3(s)
return s},
v0(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.j
s=t.N
r=A.b4(b,!0,s)
B.a.a3(r)
q=new A.dr()
q.bT((a^913741)>>>0)
p=q.a6(4)
if(!(p>=0&&p<4))return A.c(B.aC,p)
o=B.aC[p]
n=r.length
n=o>n?n:o
if(n===0)return B.j
m=A.b4(r,!0,s)
B.a.bO(m,q)
s=A.l2(m,0,A.cY(n,"count",t.S),A.M(m).c).aN(0)
B.a.a3(s)
return s},
mq:function mq(){},
oF(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.i(0,"visitor")
r=a.i(0,"day")
q=a.i(0,"hour")
p=a.i(0,"order")
if(typeof s!="string"||!A.aB(r)||!A.aB(q)||!A.aB(p)||r<1||q<0||q>23||p<0)return null
return new A.aK(s,r,q,p)},
rW(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.i(0,k))||!s.b(a.i(0,j))}else s=!0
if(s)return i
r=A.a_(t.N)
for(s=t.j,q=J.I(s.a(a.i(0,k)));q.l();){p=q.gp()
if(typeof p!="string")return i
r.m(0,p)}o=A.a_(t.g)
for(s=J.I(s.a(a.i(0,j)));s.l();){n=A.oF(s.gp())
if(n==null)return i
o.m(0,n)}m=a.i(0,"active")
s=m==null
l=s?i:A.qv(m)
if(!s&&l==null)return i
return new A.hI(r,o,l)},
qv(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(!t.f.b(a))return h
s=A.oF(a.i(0,"arrival"))
r=a.i(0,"tier")
q=a.i(0,"phase")
p=a.i(0,"lineIndex")
o=a.i(0,"choice")
n=a.i(0,"complianceMarked")
if(n==null)n=!1
m=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.aB(p))if(!(p<0))if(A.bd(n))m=o!=null&&typeof o!="string"
if(m)return h
l=A.e0(new A.H(B.aD,t.nw.a(new A.iu(r)),t.na),t.kM)
k=A.e0(new A.H(B.cX,t.bQ.a(new A.iv(q)),t.cB),t.nq)
m=o==null
j=m?h:A.e0(new A.H(B.cG,t.hg.a(new A.iw(o)),t.bn),t.lD)
i=!0
if(l!=null)if(k!=null)m=!m&&j==null
else m=i
else m=i
if(m)return h
return new A.fe(s,l,k,p,j,n)},
aF:function aF(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bD:function bD(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(){},
fe:function fe(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1},
lp:function lp(){},
aL:function aL(a){this.a=a},
hE:function hE(a){this.a=a},
hD:function hD(a){this.a=a},
ex:function ex(a,b){this.a=a
this.b=b},
mx(){var s=0,r=A.br(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$mx=A.bs(function(c5,c6){if(c5===1){o.push(c6)
s=p}for(;;)switch(s){case 0:c1=v.G
c2=A.e(A.d(c1.document).getElementById("game"))
if(c2==null){s=1
break}$.a2.b=c2
$.nq=A.e(A.d(c1.document).getElementById("fps"))
$.aW.b=$.qj().hb(A.hA().gaK().i(0,"renderer"))
A.u8()
a6=$.a2.j()
a7=A.a(A.d(c1.window).innerWidth)>0?A.a(A.d(c1.window).innerWidth):800
a6.width=a7
a7=$.a2.j()
a6=A.a(A.d(c1.window).innerHeight)>0?A.a(A.d(c1.window).innerHeight):600
a7.height=a6
n=A.e(c2.getContext("webgl2"))
if(n==null){$.aW.b=new A.d1(B.M,$.aW.j().b,!0,"webgl2 unavailable")
h=B.S.eh($.aW.j())
h.bB()
$.dC.b=h
A.pD(B.cE)
A.cm("no-webgl2")
c1=A.e(A.d(c1.document).getElementById("credits"))
if(c1!=null)c1.textContent="this browser has no webgl2."
s=1
break}try{m=$.aW.j().a===B.A?new A.i0(n,A.a($.a2.j().width),A.a($.a2.j().height),A.i([],t.dg),A.i([],t.jj)):null
$.nw=m
a6=B.S.ei($.aW.j(),m)
a6.bB()
$.dC.b=a6}catch(c4){l=A.ac(c4)
$.aW.b=new A.d1(B.M,!0,!0,"pixeldart initialization failed")
a6=$.aW.j()
a6=B.S.eh(a6)
a6.bB()
$.dC.b=a6
$.a2.j().setAttribute("data-renderer-error",A.w(l))}A.pD(B.cW)
p=4
A.cm("initializing")
$.bb.b=new A.iK(new A.j(0,0,0),new A.j(0,0,1),new A.j(0,1,0),new A.j(1,0,0))
a6=$.bb.j()
a6.f=A.aA(A.d(A.d(c1.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)?0.5:1
a6=A.d(c1.window)
a7=t.N
a9=A.d(a6.document)
b0=new A.fP(a9,A.a_(a7),A.a_(a7))
a6.addEventListener("keydown",A.a7(b0.gik()))
a6.addEventListener("keyup",A.a7(b0.gim()))
a6.addEventListener("mousemove",A.a7(b0.gir()))
a9.addEventListener("pointerlockchange",A.a7(b0.gip()))
$.aX.b=b0
$.pd.b=new A.fN(A.i([],t.oX),t.lv)
b0=$.a2.j()
a6=A.a(A.d(c1.window).innerWidth)>0?A.a(A.d(c1.window).innerWidth):800
b0.width=a6
a6=$.a2.j()
a9=A.a(A.d(c1.window).innerHeight)>0?A.a(A.d(c1.window).innerHeight):600
a6.height=a9
A.cm("renderer")
if($.aW.j().a===B.M){a6=$.dF=A.rG(n,A.a($.a2.j().width),A.a($.a2.j().height))
a9=A.hA().gaK().i(0,"render")
b0=A.hA().gaK().i(0,"render")
b1=A.hA().gaK().i(0,"render")
a6.eS=a9==="legacy"
a6.eT=b0==="legacy"
a6.eU=b1==="legacy"}A.cm("text")
a6=$.ir()
s=7
return A.an(a6.b3(),$async$mx)
case 7:k=a6.kr()
j=A.rY(k)
if(!(j instanceof A.hH)){i=t.cq.a(j).a
h=i.b
throw A.b("Failed to build visitors: "+h)}$.am.b=j.a
$.ib.b=A.qw(k)
h=A.t(a7,t.a)
for(a9=t.j,b2=0;b2<5;++b2){g=B.l[b2]
b0=A.B(g)
b1=a6.c
b1===$&&A.h()
b3=b1.i(0,b0)
b0=a9.b(b3)?A.b4(b3,!0,a7):B.j
J.bv(h,g,b0)}f=A.rZ(h)
$.nj.b=new A.iJ(B.bx)
e=$.nj.j().k7(new A.my(f))
if(e.a==null){h=B.ak.a6(2147483647)
if(!isFinite(480))A.m(A.aD(480,"daySeconds","must be finite and > 0"))
b4=new A.fJ(1,480)
b4.b=10
b5=A.oc(f)
h=A.o2(42,1+h,A.o4(42),b4,b5,A.nZ(6,16,b5,null,6,B.cK,b4),new A.fC(0,0,0,!1))}else{h=e.a
h.toString
h=A.o3(h,f)}$.S.b=h
$.dC.j().bR(A.oq($.S.j().gfV()))
if(e.b!=null){h=e.b
h.toString
A.dG(h)}h=$.am.j()
a6=A.v0($.S.j().b,A.v1(k.b))
h.shq(A.k0(a6,A.M(a6).c))
A.cm("house")
$.ab.b=$.S.j().c
a6=$.nw
if(a6!=null)a6.j1($.ab.j())
$.f6.b=$.S.j().d
h=new A.j(5.5,1.65,3.5)
$.nE=$.nx=$.nC=h
d=h.Y(0,new A.j(0,1.3499999999999999,0))
$.f5.b=new A.fo(d,J.nO(d,new A.j(0,1.2000000000000002,0)))
$.dA.b=new A.j2()
$.bn.b=A.os()
$.aY="hall"
h=e.a
c=A.rq(h==null?null:h.c.i(0,"player"))
if(c!=null&&c.jJ($.ab.j())){h=c.b
$.nE=$.nx=$.nC=h
$.bF=c.c
$.cW=c.d
$.aY=c.a
b=h.Y(0,new A.j(0,1.3499999999999999,0))
h=$.f5.j()
h.sj2(b)
h.b=J.nO(b,new A.j(0,1.2000000000000002,0))
h=$.f5.j()
a6=$.ab.j()
b0=c.e
b1=c.f
h.kf($.aY,$.dM(),a6,b1,b0)
A.dG("restored position")}h=$.S.j().e
a6=$.f6.j()
$.S.j()
$.id.b=new A.jG(h,a6)
a6=A.d(c1.document)
h=$.S.j().e
b0=$.f6.j()
b1=$.id.j()
b6=A.d(a6.createElement("div"))
b1=new A.jK(h,b0,b1,a6,b6)
b1.ba(a6)
A.d(b6.appendChild(A.O(a6,"div","journal-title","The Journal")))
b7=A.O(a6,"div","journal-pages",null)
b0=A.O(a6,"div","page page-left",null)
b1.y!==$&&A.u()
b1.y=b0
h=A.O(a6,"div","page page-right",null)
b1.z!==$&&A.u()
b1.z=h
A.d(b7.appendChild(b0))
A.d(b7.appendChild(h))
A.d(b6.appendChild(b7))
A.d(b6.appendChild(b1.hN()))
b8=A.O(a6,"div","tape-roll",null)
A.d(b8.style).setProperty("width","8rem")
h=A.O(a6,"div","tape-fill",null)
b1.as!==$&&A.u()
b1.as=h
A.d(b8.appendChild(h))
A.d(b6.appendChild(b8))
b9=A.O(a6,"div","consult",null)
A.d(b9.appendChild(A.O(a6,"div","consult-label","Cite an entry")))
h=A.O(a6,"div","entry-picker",null)
b1.at!==$&&A.u()
b1.at=h
b0=A.O(a6,"div","consult-result",null)
b1.ax!==$&&A.u()
b1.ax=b0
A.d(b9.appendChild(h))
A.d(b9.appendChild(b0))
A.d(b6.appendChild(b9))
c0=A.e(a6.documentElement)
if(t.m.b(c0)){A.d(c0.style).setProperty("--shake-max-deg","3deg")
A.d(c0.style).setProperty("--shake-max-px","2px")}$.dB.b=b1
$.dB.j().sbH(new A.mz())
h=A.d(c1.document)
a6=A.O(h,"div","prompt",null)
A.d(a6.style).setProperty("transition-duration","0.3s")
A.d(A.e(h.body).appendChild(a6))
$.pe.b=new A.kp(a6)
a6=A.d(c1.document)
h=A.O(a6,"div","broadcast",null)
A.d(A.e(a6.body).appendChild(h))
$.pc.b=new A.iI(h)
h=A.d(c1.document)
a6=A.O(h,"div","ambient-notice",null)
A.d(A.e(h.body).appendChild(a6))
$.nh.b=new A.iA(a6)
a6=A.qM(A.d(c1.document))
a6.sjW(A.vg())
a6.sjY(A.vi())
a6.sjX(A.vh())
$.al.b=a6
a6=e.a
a=A.rW(a6==null?null:a6.c.i(0,"visitors"))
if(a!=null&&$.am.j().ke(a))A.uv()
h=$.ib.j()
a6=e.a
h.kg(a6==null?null:a6.c.i(0,"ambient"))
h=e.a
a0=h==null?null:h.c.i(0,"unverifiables")
if(a9.b(a0))for(h=J.I(a0);h.l();){a1=h.gp()
if(A.aB(a1))$.ml.m(0,a1)}h=A.rJ(A.d(c1.document))
h.sk_(new A.mA())
h.sbH(new A.mD())
$.ie.b=h
h=A.r6(A.d(c1.document))
h.sbH(new A.mE())
$.ic.b=h
h=A.qW(A.d(c1.document))
h.sbH(new A.mF())
h.sjZ(new A.mG())
$.ni.b=h
h=e.a
a2=A.qY(h==null?null:h.c.i(0,"ending"))
if(a2!=null)A.pC(a2)
a3=$.dF
if(a3!=null){A.cm("world")
h=$.ab.j()
a6=a3
a7=new A.kN(h,a6,A.t(a7,t.I))
a7.hE(h,a6)
$.no=a7}h=B.b.u(A.B(A.d(A.d(c1.window).location).search),"shaders=live")
$.pN=h
if(h){h=$.dF
if(h!=null)h.aL()}A.pF()
A.d(c1.window).addEventListener("resize",A.a7(new A.mH()))
A.d(c1.window).addEventListener("keydown",A.a7(new A.mI()))
A.d(c1.window).addEventListener("keyup",A.a7(new A.mJ()))
A.d(c1.window).addEventListener("keydown",A.a7(new A.mK()))
A.d(c1.window).addEventListener("click",A.a7(new A.mB()))
$.a2.j().addEventListener("click",A.a7(new A.mC()))
A.fa()
A.cm("raf")
A.a(A.d(c1.window).requestAnimationFrame(A.a7(A.pV())))
p=2
s=6
break
case 4:p=3
c3=o.pop()
a4=A.ac(c3)
a5=A.c_(c3)
A.mg(a4,a5)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bp(q,r)
case 2:return A.bo(o.at(-1),r)}})
return A.bq($async$mx,r)},
u8(){var s=v.G
A.d(s.window).addEventListener("error",A.a7(new A.mc()))
A.d(s.window).addEventListener("unhandledrejection",A.a7(new A.md()))},
cm(a){if($.pk===a)return
$.pk=a
$.a2.j().setAttribute("data-boot-phase",a)},
pD(a){var s,r="65daf38ff1d5-b201e5b993d4-dirty",q=$.aW.j().a.b,p=$.aW.j().a===B.A?"safe":"legacy",o=$.aW.j().c,n=$.aW.j().d,m=A.m9("RENDERER_SHA"),l=A.m9("GAME_SHA"),k=A.m9("DART_SDK_VERSION"),j=A.m9("LOCKFILE_SHA256"),i=A.k0(a,A.M(a).c)
i=A.U(i,A.n(i).c)
B.a.a3(i)
s=new A.kI(q,p,r,A.af(i,t.N),m,l,k,j,o,n)
s.hD(q,r,a,o,n,l,j,p,m,k)
p=$.a2.j()
n=A.hA().gaK().i(0,"renderer")
if(n==null)n="legacy"
p.setAttribute("data-renderer-request",n)
p.setAttribute("data-renderer-backend",q)
p.setAttribute("data-renderer-fallback",String(o))
p.setAttribute("data-renderer-diagnostics",B.p.aE(s.B(),null))},
nA(a){var s,r,q,p,o,n,m,l,k,j,i,h
if($.bn.j().a!==B.o){A.dG("save unavailable during rupture")
return}try{r=$.nj.j()
q=$.S.j()
p=t.N
o=t.z
s=A.t(p,o)
n=$.aY
m=$.dM()
l=$.bF
k=$.cW
j=$.f5.j().d
j=j==null?null:j.a.a
i=$.f5.j().d
J.bv(s,"player",new A.hd(n,m,l,k,j,i==null?null:i.b).B())
n=$.am.j()
m=A.n5(n.b,p)
l=A.n5(n.c,t.g)
n=n.e
J.bv(s,"visitors",new A.hI(m,l,n==null?null:new A.fe(n.a,n.b,n.d,n.f,n.e,n.r)).B())
n=$.ib.j().b
n=A.U(n,A.n(n).c)
B.a.a3(n)
J.bv(s,"ambient",n)
n=A.U($.ml,A.n($.ml).c)
B.a.a3(n)
J.bv(s,"unverifiables",n)
n=$.np
if(n!=null)J.bv(s,"ending",A.J(["kind",n.a.b],p,p))
s=t.b.a(s)
n=q.a
m=q.b
l=A.o6(q.c).B()
k=q.d
r.kt(A.ot(s,A.J(["houseSeed",n,"runSeed",m,"house",l,"time",A.J(["day",k.a,"hour",k.b],p,t.o),"dayLoop",q.f.B(),"journal",q.e.B(),"difficulty",q.r.B()],p,o),2))
A.dG(a)}catch(h){A.dG("save failed")}},
dG(a){var s=v.G,r=A.e(A.d(s.document).getElementById("save-status"))
if(r==null)return
r.textContent=a
r.className="visible"
A.a(A.d(s.window).setTimeout(A.a7(new A.mj(r)),2400))},
mg(a,b){var s,r,q,p
A.cm("error")
s=A.w(a)
r=A.vs(s,"\n"," ")
s=$.nq
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.e(A.d(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
p=b==null?A.w(a):A.w(a)+"\n"+b.n(0)
$.a2.j().setAttribute("data-boot-error",p)
A.d(s.console).error(p)},
pg(){if($.nk)return
$.nk=!0
var s=$.f7
if(s!=null)s.fZ()
B.a.m($.cl,"arm")},
fa(){var s=0,r=A.br(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$fa=A.bs(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=null
q=3
s=6
return A.an(A.bu(A.d(A.d(v.G.window).fetch("res/manifest.json")),t.m),$async$fa)
case 6:o=b
i=A
s=7
return A.an(A.bu(A.d(o.json()),t.X),$async$fa)
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
return A.an(A.o1(A.i([A.mf(k),A.mb(k)],t.iw),t.H),$async$fa)
case 8:return A.bp(null,r)
case 1:return A.bo(p.at(-1),r)}})
return A.bq($async$fa,r)},
nn(a,b,c){var s,r,q
if(a==null)return
s=t.dM.a(v.G.Object.keys(a))
s=J.I(t.a.b(s)?s:new A.bi(s,A.M(s).h("bi<1,k>")))
while(s.l()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.B(q))}},
mb(a){var s=0,r=A.br(t.H),q,p,o,n,m
var $async$mb=A.bs(function(b,c){if(b===1)return A.bo(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.t(n,n)
n=a==null
A.nn(A.e(n?null:a.sfx),m,"")
A.nn(A.e(n?null:a.ir),m,"ir-")
q=A.e(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.B(p))
s=2
return A.an(A.iD(m,$.ab.j()),$async$mb)
case 2:o=c
$.f7=o
if($.nk)o.fZ()
return A.bp(null,r)}})
return A.bq($async$mb,r)},
mf(a){var s=0,r=A.br(t.H),q,p
var $async$mf=A.bs(function(b,c){if(b===1)return A.bo(c,r)
for(;;)switch(s){case 0:q=t.N
p=A.t(q,q)
A.nn(A.e(a==null?null:a.tex),p,"")
q=$.dF
q=q==null?null:q.b4(p)
s=2
return A.an(q instanceof A.a4?q:A.td(q,t.H),$async$mf)
case 2:return A.bp(null,r)}})
return A.bq($async$mf,r)},
pF(){var s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.a(A.d(h.window).innerWidth),f=A.a(A.d(h.window).innerHeight)
h=$.a2.j()
s=g>0?g:800
h.width=s
s=$.a2.j()
h=f>0?f:600
s.height=h
h=$.dF
if(h!=null){s=A.a($.a2.j().width)
r=A.a($.a2.j().height)
h.au=s
h.av=r
h.cJ=r/s
q=h.br
q===$&&A.h()
p=B.c.J(s,2)
q.ay=p
o=B.c.J(r,2)
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
l=h.aY
k=h.bt
j=h.bu
i=h.bv
if(m!=null)h.ad.ae(m,s,r)
if(l!=null)h.ad.ae(l,s,r)
if(k!=null)h.ad.ae(k,h.gbd(),h.gbc())
if(j!=null)h.ad.ae(j,h.gbd(),h.gbc())
if(i!=null)h.ad.ae(i,s,r)}},
us(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
A.ig(b3)
try{s=b3
if(!$.pt){$.nu=s
$.pt=!0}i=s
h=$.nu
if(typeof i!=="number")return i.Y()
r=(i-h)/1000
$.nu=s
i=r
if(typeof i!=="number")return i.aP()
if(i<0)r=0
i=r
if(typeof i!=="number")return i.X()
if(i>0.25)r=0.25
A.uJ(r)
if(!$.nv){i=$.m4
h=r
if(typeof h!=="number")return A.im(h)
h=$.m4=i+h
q=0
i=t.mv
for(;;){if(h>=0.008333333333333333){g=q
if(typeof g!=="number")return g.aP()
g=g<10}else g=!1
if(!g)break
$.nx=$.dM()
h=$.S.b
if(h===$.S)A.m(A.aG(""))
h.iY(0.008333333333333333)
A.uM()
h=$.am.b
if(h===$.am)A.m(A.aG(""))
g=$.S.b
if(g===$.S)A.m(A.aG(""))
h.f=g.r.c>=0.5
h=h.d
f=A.b4(h,!1,i)
f.$flags=3
e=f
B.a.F(h)
if(e.length!==0){h=$.S.b
if(h===$.S)A.m(A.aG(""))
h.k9(e)}A.uI()
A.uL()
A.uK()
A.uH(0.008333333333333333)
h=$.dA.b
if(h===$.dA)A.m(A.aG(""))
if(h.a!=null)if((h.b-=0.008333333333333333)<=0)h.a=null
h=$.bn.b
if(h===$.bn)A.m(A.aG(""))
p=h.a!==B.o
g=$.ab.b
if(g===$.ab)A.m(A.aG(""))
h.iZ(0.008333333333333333,g)
if(p){h=$.bn.b
if(h===$.bn)A.m(A.aG(""))
h=h.e}else h=!1
if(h)A.pG(!0)
h=$.m4-0.008333333333333333
$.m4=h
g=q
if(typeof g!=="number")return g.a2()
q=g+1}o=B.d.Z(h/0.008333333333333333,0,1)
$.nE=A.oE($.qk(),$.dM(),o)
n=$.f7
if(n!=null){for(i=$.cl.length,d=0;d<$.cl.length;$.cl.length===i||(0,A.v)($.cl),++d){m=$.cl[d]
A.u0(n,m)}B.a.F($.cl)}}l=$.dF
if(l!=null){$.bb.j().d_($.mT(),$.bF,$.cW)
i=$.aM===$.dB.j()?1:0
l.bs=i
i=l
h=r
g=$.bn.j()
c=B.d.Z($.f6.j().gbS(),0,1)
i.eY=new A.j(Math.cos((c-0.5)*3.141592653589793),Math.sin(3.141592653589793*c),-0.5).ga1().ga1()
i.sfP(A.vu($.f6.j().gbS()))
b=Math.max(0.1,0.8*Math.sin(3.141592653589793*$.f6.j().gbS()))
i.f1=b<0?0:b
b=$.bb.j()
a=b.r+=h
a0=0.025*b.f
b.a=b.a.a2(0,b.d.W(0,(A.mO(a*0.28,1309)*2-1)*a0)).a2(0,b.c.W(0,(A.mO(b.r*0.28,2839)*2-1)*a0))
b=$.bb.j()
i.f2=b.a
i.cA=b.b
i.cB=b.c
i.cC=b.d
a1=A.u7(0,0.25,0.11)
i.cD=a1.a
i.cE=a1.b
i.cF=a1.c
b=i.bw
a2=b==null?i.aY:b
if(a2==null)a2=i.ar
b=i.ad
b.ag(a2)
i.a7.depthMask(!0)
b.jb(a2,i.cD/255,i.cE/255,i.cF/255)
i.ct=i.bx=0
i.cv=!1
i.b_=0
a3=$.no
if(a3!=null)a3.jm($.aY,$.mT())
i.jB(h,g)
$.pd.j().dd(B.br,h)}else if($.aW.j().a===B.A){$.bb.j().d_($.mT(),$.bF,$.cW)
i=$.nw
if(i!=null){h=$.bb.j()
g=h.a
a4=new A.K(g.a,g.b,g.c)
g=h.b
a5=new A.K(g.a,g.b,g.c)
h=h.c
a6=i.b/i.c
a7=a5.ga1()
a8=a7.ap(new A.K(h.a,h.b,h.c)).ga1()
a9=a8.ap(a7)
h=new Float32Array(16)
h.$flags&2&&A.aN(h)
h[0]=a8.a
h[1]=a9.a
h[2]=-a7.a
h[3]=0
h[4]=a8.b
h[5]=a9.b
h[6]=-a7.b
h[7]=0
h[8]=a8.c
h[9]=a9.c
h[10]=-a7.c
h[11]=0
h[12]=-a8.aX(a4)
h[13]=-a9.aX(a4)
h[14]=a7.aX(a4)
h[15]=1
b0=new A.bN(h)
b1=A.oj(a6,60,1.0471975511965976,0.1)
i.y=new A.fn(b0,b1,b1.W(0,b0),a4,a5,0.1,60,a6)}$.dC.j().bR(A.oq($.S.j().gfV()))}A.cm("running")
i=$.aX.j()
i.e=i.d=0
i.c.F(0)
A.a(A.d(v.G.window).requestAnimationFrame(A.a7(A.pV())))}catch(b2){k=A.ac(b2)
j=A.c_(b2)
A.mg(k,j)}},
u0(a,b){switch(b){case"arm":a.k0("confirm")
break
case"ambient-winnow":a.d2("winnow",0.28)
break
case"ambient-gate":a.d2("gate",0.22)
break}},
uJ(a){var s=$.nq
if(s==null)return
s.textContent=""+B.d.ak(a>0?1/a:0)+" fps"},
uH(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
if($.pJ||$.aM!=null||$.al.j().z){$.iq().a=new A.j(0,0,0)
return}s=$.aX.j().b
r=s.u(0,"KeyA")?-1:0
if(s.u(0,"KeyD"))++r
q=s.u(0,"KeyW")?1:0
p=new A.j(r,0,s.u(0,"KeyS")?q-1:q)
o=p.gq(0)>1?p.ga1():p
n=$.aX.j().d
m=$.aX.j().e
$.bF=$.bF+n*0.0028
s=$.cW-m*0.0028
$.cW=s
$.cW=B.d.Z(s,-1.5607963267948965,1.5607963267948965)
s=o.a
l=o.c
k=new A.j(s*Math.cos($.bF)+l*Math.sin($.bF),0,l*Math.cos($.bF)-s*Math.sin($.bF)).ga1().W(0,2)
s=$.iq()
if(!isFinite(a1)||a1<0)A.m(A.aD(a1,"dt","must be finite and non-negative"))
j=k.a!==0||k.c!==0?14:10
if(!isFinite(j))A.m(A.aD(j,"rate","must be finite and positive"))
l=Math.exp(-j*a1)
i=s.a
l=i.a2(0,k.Y(0,i).W(0,1-l))
s.a=l
h=$.f5.j().jT($.ab.j(),$.aY,$.dM(),l.W(0,a1))
$.nC=h.a
if($.bn.j().a!==B.a4&&$.bn.j().a!==B.B)$.aY=h.b
$.bb.j().d_($.dM(),$.bF,$.cW)
s=$.bb.j()
l=$.ab.j()
g=A.vn(s,$.aY,l)
$.pe.j().hg(g.c)
f=a0
e=a0
d=a0
switch(g.a.a){case 0:f=A.nM($.bb.j(),$.ab.j(),$.aY)
break
case 1:e=A.pZ($.bb.j(),$.ab.j(),$.aY)
break
case 2:d=A.q_($.bb.j(),$.ab.j(),$.aY)
break
case 3:break}s=$.pc.j()
c=$.ir().h7($.S.j().gam().a)
l=c==null?a0:c.i(0,"status")
s.dd(l,$.aY==="living-room")
if($.aX.j().c.ai(0,"KeyE")){s=$.S.j().gam()
l=e==null
i=l?a0:e.a
b=B.a.a5($.am.j().ec(21),$.am.j().gjK())
if(s.a===21&&i==="front-door"&&b){s=$.bn.j()
$.ab.j()
s.hr(B.bw,A.af(s.c,t.N))
B.a.m($.cl,"collapse")
A.dG("the front door opens on itself")}else if(f!=null&&!f.e){if(f.d)f.d=!1
else if($.S.j().ho(1,1)){f.d=!0
s=$.dA.j()
s.a=f
s.b=2
if(f.f!=null)f.r=!0}}else if(!l&&!e.z&&!e.ax){e.at=!e.at
s=$.f7
if(s!=null)s.cd()}else if(d!=null)if(d.w){s=$.S.j()
if(s.f.bQ(1))d.w=!1}else d.w=!0}s=$.dA.j()
if(s.a!=null&&s.b>0){a=$.dA.j().a
if(a!=null&&A.nM($.bb.j(),$.ab.j(),$.aY)!==a){s=$.dA.j()
s.a=null
s.b=0}}},
uM(){var s,r,q,p,o,n,m,l,k,j=null
if($.al.j().z||$.aM!=null||$.am.j().e!=null)return
s=$.S.j().gam()
for(r=$.am.j().ec(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.v)(r),++o){n=r[o]
m=$.am.b
if(m===$.am)A.m(A.aG(""))
if(m.c.u(0,n)||p<n.c)continue
r=$.am.b
if(r===$.am)A.m(A.aG(""))
l=r.j3(n)
if(!(l instanceof A.hE))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.c(r,q)
k=r[q].b}else k=j
if(k==null)return
A.o9(A.d(v.G.document),"exitPointerLock",j,j,j,j)
$.iq().a=new A.j(0,0,0)
r=$.al.b
if(r===$.al)A.m(A.aG(""))
r.dk(n.a,k)
return}},
uv(){var s=$.am.j().e,r=s==null,q=r?null:s.gbp()
if(r||q==null)return
$.al.j().dk(s.a.a,q)
if(s.d!==B.x){$.al.j().bN(q)
A.nB()}A.dG("restored visitor")},
uI(){var s,r,q,p,o=$.S.j().gam(),n=$.ib.j().jo(o.a,o.b)
if(n.length===0)return
s=B.a.gaG(n)
$.ib.j().b.m(0,s.a)
r=s.d
q=r==="letterbox"?"through the letterbox":"from the street"
$.nh.j().dj(q,s.e)
p=A.uO(r)
if(p!=null)B.a.m($.cl,"ambient-"+p)},
uL(){var s,r,q,p,o=$.S.j().gam()
if(o.b<20)return
s=o.a
if(!$.ml.m(0,s))return
r=$.ir().f
r===$&&A.h()
q=r.i(0,B.c.n(s))
r=t.j.b(q)?A.b4(q,!0,t.N):B.j
p=A.vl(r,$.S.j().b,s)
if(p!=null)$.nh.j().dj("noticed",p)},
pG(a){var s,r,q,p,o
if($.np!=null)return
s=$.S.j().gam()
r=$.S.j().r.c
q=$.S.j().e.b
p=A.n(q).h("aw<2>")
o=A.qX(new A.iZ(s.a,1-r,new A.H(new A.aw(q,p),p.h("r(l.E)").a(new A.mh()),p.h("H<l.E>")).gq(0),$.S.j().r.d,a))
if(o==null)return
A.pC(o)
A.nA("ending recorded")},
pC(a){var s,r,q
$.np=a
$.pJ=!0
$.iq().a=new A.j(0,0,0)
$.aM=$.ni.j()
s=$.ni.j()
r=$.ir().w
r===$&&A.h()
q=r.i(0,a.a.b)
s.hi(a,t.j.b(q)?A.b4(q,!0,t.N):B.j)},
tV(a){var s,r,q,p,o
A:{if("open"===a){s=B.I
break A}if("chain"===a){s=B.al
break A}if("through-door"===a){s=B.am
break A}if("letterbox"===a){s=B.an
break A}s=B.y
break A}r=$.am.j().j9(s)
if(s===B.I){q=$.ab.j().f.i(0,"front-door")
if(q!=null){q.at=!0
p=$.f7
if(p!=null)p.cd()}}if(!(r instanceof A.hD)||s===B.y){$.al.j().by()
$.aX.j().aj($.a2.j())
return}o=r.a.gbp()
if(o==null){A.nm()
$.al.j().by()
$.aX.j().aj($.a2.j())
return}$.al.j().bN(o)
A.nB()},
tY(){var s,r=$.am.j().j_()
if(!(r instanceof A.ex)||r.b){A.nm()
$.al.j().by()
$.aX.j().aj($.a2.j())
return}s=r.a.gbp()
if(s==null){A.nm()
$.al.j().by()
$.aX.j().aj($.a2.j())
return}$.al.j().bN(s)
A.nB()},
nB(){var s,r,q,p,o=$.al.j(),n=A.d(v.G.document),m=A.i([],t.fR)
for(s=$.id.j().dh(),r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
m.push(new A.dv(p.a,B.a.gL(p.c).n(0)))}o.hh(n,m)},
tW(a){var s,r,q,p=$.am.j().ja(a,!0,$.id.j())
if(p==null)return
s=$.id.j().jg(p,B.cw)
r=$.al.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.f
r===$&&A.h()
r.textContent=q},
nm(){var s,r=$.ab.j().f.i(0,"front-door")
if(r!=null&&r.at){r.at=!1
s=$.f7
if(s!=null)s.cd()}},
uK(){var s,r,q,p,o,n,m,l,k
for(s=$.ab.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
if(l.e){l.d=!1
continue}k=$.bn.b
if(k===$.bn)A.m(A.aG(""))
if(B.a.u(k.d,n+m)){l.d=!1
continue}}}},
i0:function i0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=$
_.r=d
_.w=e
_.y=_.x=null
_.z=0
_.Q=!1},
my:function my(a){this.a=a},
mz:function mz(){},
mA:function mA(){},
mD:function mD(){},
mE:function mE(){},
mF:function mF(){},
mG:function mG(){},
mH:function mH(){},
mI:function mI(){},
mJ:function mJ(){},
mK:function mK(){},
mB:function mB(){},
mC:function mC(){},
mc:function mc(){},
md:function md(){},
mj:function mj(a){this.a=a},
mh:function mh(){},
o9(a,b,c,d,e,f){var s=a[b]()
return s},
oa(a,b,c){var s=null
return c.a(A.o9(a,b,s,s,s,s))},
qK(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
qJ(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
pU(a,b){var s=a*2654435769^b
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return((s^s>>>16)>>>0)/4294967296},
mO(a,b){var s=B.d.cU(a),r=A.pU(s,b),q=A.pU(s+1,b),p=B.d.Z(a-s,0,1)
return r+(q-r)*(p*p*(3-2*p))},
uO(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
uZ(a){var s,r,q,p,o,n,m,l=B.p.em(a,null),k=t.f
if(!k.b(l))throw A.b(B.c4)
s=t.N
r=t.z
q=A.ax(l,s,r)
p=A.t(s,t.b)
for(o=0;o<11;++o){n=B.cH[o]
m=q.i(0,n)
if(m==null)p.k(0,n,A.t(s,r))
else if(k.b(m))p.k(0,n,A.ax(m,s,r))
else throw A.b(A.a8('text.json section "'+n+'" must be an object',null,null))}return p},
vl(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbP(a)
s=new A.dr()
s.bT((b^274953^c)>>>0)
r=s.a6(a.length)
if(!(r>=0&&r<a.length))return A.c(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.mX.prototype={}
J.fR.prototype={
R(a,b){return a===b},
gD(a){return A.ek(a)},
n(a){return"Instance of '"+A.hh(a)+"'"},
gI(a){return A.bG(A.ns(this))}}
J.fV.prototype={
n(a){return String(a)},
gD(a){return a?519018:218159},
gI(a){return A.bG(t.y)},
$iQ:1,
$ir:1}
J.e2.prototype={
R(a,b){return null==b},
n(a){return"null"},
gD(a){return 0},
$iQ:1,
$iW:1}
J.e3.prototype={$iN:1}
J.c5.prototype={
gD(a){return 0},
gI(a){return B.ds},
n(a){return String(a)}}
J.hc.prototype={}
J.cK.prototype={}
J.bI.prototype={
n(a){var s=a[$.q3()]
if(s==null)s=a[$.dL()]
if(s==null)return this.ht(a)
return"JavaScript function for "+J.d0(s)},
$icu:1}
J.db.prototype={
gD(a){return 0},
n(a){return String(a)}}
J.dc.prototype={
gD(a){return 0},
n(a){return String(a)}}
J.o.prototype={
bn(a,b){return new A.bi(a,A.M(a).h("@<1>").C(b).h("bi<1,2>"))},
m(a,b){A.M(a).c.a(b)
a.$flags&1&&A.aN(a,29)
a.push(b)},
M(a,b){var s
A.M(a).h("l<1>").a(b)
a.$flags&1&&A.aN(a,"addAll",2)
if(Array.isArray(b)){this.hK(a,b)
return}for(s=J.I(b);s.l();)a.push(s.gp())},
hK(a,b){var s,r
t.x.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.ae(a))
for(r=0;r<s;++r)a.push(b[r])},
F(a){a.$flags&1&&A.aN(a,"clear","clear")
a.length=0},
b5(a,b,c){var s=A.M(a)
return new A.a3(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("a3<1,2>"))},
aH(a,b){var s,r=A.bL(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.w(a[s]))
return r.join(b)},
fF(a,b,c,d){var s,r,q
d.a(b)
A.M(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.ae(a))}return r},
N(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
gaG(a){if(a.length>0)return a[0]
throw A.b(A.fS())},
gL(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.fS())},
gbP(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.b(A.fS())
throw A.b(A.rb())},
ab(a,b){var s,r
A.M(a).h("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.ae(a))}return!1},
a5(a,b){var s,r
A.M(a).h("r(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.ae(a))}return!0},
T(a,b){var s,r,q,p,o,n=A.M(a)
n.h("f(1,1)?").a(b)
a.$flags&2&&A.aN(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.ud()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.X()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dJ(b,2))
if(p>0)this.iB(a,p)},
a3(a){return this.T(a,null)},
iB(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bO(a,b){var s,r,q,p
a.$flags&2&&A.aN(a,"shuffle")
s=a.length
while(s>1){r=b.a6(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
bz(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.Y(a[s],b))return s}return-1},
u(a,b){var s
for(s=0;s<a.length;++s)if(J.Y(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gH(a){return a.length!==0},
n(a){return A.mW(a,"[","]")},
gt(a){return new J.co(a,a.length,A.M(a).h("co<1>"))},
gD(a){return A.ek(a)},
gq(a){return a.length},
sq(a,b){a.$flags&1&&A.aN(a,"set length","change the length of")
if(b<0)throw A.b(A.aq(b,0,null,"newLength",null))
if(b>a.length)A.M(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.b(A.mo(a,b))
return a[b]},
k(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.aN(a)
if(!(b>=0&&b<a.length))throw A.b(A.mo(a,b))
a[b]=c},
dg(a,b){return new A.bm(a,b.h("bm<0>"))},
fL(a,b){var s
A.M(a).h("r(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gI(a){return A.bG(A.M(a))},
$ix:1,
$il:1,
$iy:1}
J.fT.prototype={
ko(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.hh(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.jI.prototype={}
J.co.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.v(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iV:1}
J.cy.prototype={
G(a,b){var s
A.ig(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbC(b)
if(this.gbC(a)===s)return 0
if(this.gbC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbC(a){return a===0?1/a<0:a<0},
al(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.ai(""+a+".toInt()"))},
j8(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.ai(""+a+".ceil()"))},
cU(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.ai(""+a+".floor()"))},
ak(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.ai(""+a+".round()"))},
Z(a,b,c){if(this.G(b,c)>0)throw A.b(A.nF(b))
if(this.G(a,b)<0)return b
if(this.G(a,c)>0)return c
return a},
dc(a,b){var s
if(b>20)throw A.b(A.aq(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbC(a))return"-"+s
return s},
kl(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.b(A.aq(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.c(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.m(A.ai("Unexpected toString result: "+s))
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
hv(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e1(a,b)},
J(a,b){return(a|0)===a?a/b|0:this.e1(a,b)},
e1(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.ai("Result of truncating division is "+A.w(s)+": "+A.w(a)+" ~/ "+b))},
cb(a,b){var s
if(a>0)s=this.bm(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
iG(a,b){if(0>b)throw A.b(A.nF(b))
return this.bm(a,b)},
bm(a,b){return b>31?0:a>>>b},
aP(a,b){return a<b},
gI(a){return A.bG(t.o)},
$iaE:1,
$ip:1,
$iat:1}
J.e1.prototype={
gI(a){return A.bG(t.S)},
$iQ:1,
$if:1}
J.fW.prototype={
gI(a){return A.bG(t.i)},
$iQ:1}
J.cz.prototype={
aM(a,b,c,d){var s=A.el(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
U(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aq(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.U(a,b,0)},
A(a,b,c){return a.substring(b,A.el(b,c,a.length))},
b9(a,b){return this.A(a,b,null)},
kn(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.rf(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.rg(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
W(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bs)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bA(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aq(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bz(a,b){return this.bA(a,b,0)},
u(a,b){return A.vr(a,b,0)},
G(a,b){var s
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
gI(a){return A.bG(t.N)},
gq(a){return a.length},
$iQ:1,
$iaE:1,
$iol:1,
$ik:1}
A.cg.prototype={
gt(a){return new A.dO(J.I(this.gao()),A.n(this).h("dO<1,2>"))},
gq(a){return J.av(this.gao())},
gE(a){return J.nQ(this.gao())},
gH(a){return J.qr(this.gao())},
N(a,b){return A.n(this).y[1].a(J.is(this.gao(),b))},
n(a){return J.d0(this.gao())}}
A.dO.prototype={
l(){return this.a.l()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iV:1}
A.cp.prototype={
gao(){return this.a}}
A.eE.prototype={$ix:1}
A.eD.prototype={
i(a,b){return this.$ti.y[1].a(J.au(this.a,b))},
k(a,b,c){var s=this.$ti
J.bv(this.a,b,s.c.a(s.y[1].a(c)))},
sq(a,b){J.qs(this.a,b)},
m(a,b){var s=this.$ti
J.fc(this.a,s.c.a(s.y[1].a(b)))},
T(a,b){var s
this.$ti.h("f(2,2)?").a(b)
s=b==null?null:new A.lB(this,b)
J.qt(this.a,s)},
$ix:1,
$iy:1}
A.lB.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("f(1,1)")}}
A.bi.prototype={
bn(a,b){return new A.bi(this.a,this.$ti.h("@<1>").C(b).h("bi<1,2>"))},
gao(){return this.a}}
A.cA.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.fs.prototype={
gq(a){return this.a.length},
i(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.kU.prototype={}
A.x.prototype={}
A.a6.prototype={
gt(a){var s=this
return new A.bK(s,s.gq(s),A.n(s).h("bK<a6.E>"))},
gE(a){return this.gq(this)===0},
ab(a,b){var s,r,q=this
A.n(q).h("r(a6.E)").a(b)
s=q.gq(q)
for(r=0;r<s;++r){if(b.$1(q.N(0,r)))return!0
if(s!==q.gq(q))throw A.b(A.ae(q))}return!1},
aH(a,b){var s,r,q,p=this,o=p.gq(p)
if(b.length!==0){if(o===0)return""
s=A.w(p.N(0,0))
if(o!==p.gq(p))throw A.b(A.ae(p))
for(r=s,q=1;q<o;++q){r=r+b+A.w(p.N(0,q))
if(o!==p.gq(p))throw A.b(A.ae(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.w(p.N(0,q))
if(o!==p.gq(p))throw A.b(A.ae(p))}return r.charCodeAt(0)==0?r:r}},
df(a,b){return this.hs(0,A.n(this).h("r(a6.E)").a(b))},
b5(a,b,c){var s=A.n(this)
return new A.a3(this,s.C(c).h("1(a6.E)").a(b),s.h("@<a6.E>").C(c).h("a3<1,2>"))},
aO(a,b){var s=A.n(this).h("a6.E")
if(b)s=A.U(this,s)
else{s=A.U(this,s)
s.$flags=1
s=s}return s},
aN(a){return this.aO(0,!0)},
aA(a){var s,r=this,q=A.n_(A.n(r).h("a6.E"))
for(s=0;s<r.gq(r);++s)q.m(0,r.N(0,s))
return q}}
A.eu.prototype={
gi5(){var s=J.av(this.a),r=this.c
if(r==null||r>s)return s
return r},
giK(){var s=J.av(this.a),r=this.b
if(r>s)return s
return r},
gq(a){var s,r=J.av(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
N(a,b){var s=this,r=s.giK()+b
if(b<0||r>=s.gi5())throw A.b(A.jF(b,s.gq(0),s,"index"))
return J.is(s.a,r)},
aO(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.be(n),l=m.gq(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.o8(0,n):J.o7(0,n)}r=A.bL(s,m.N(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.N(n,o+q))
if(m.gq(n)<l)throw A.b(A.ae(p))}return r},
aN(a){return this.aO(0,!0)}}
A.bK.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.be(q),o=p.gq(q)
if(r.b!==o)throw A.b(A.ae(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.N(q,s);++r.c
return!0},
$iV:1}
A.bM.prototype={
gt(a){return new A.cB(J.I(this.a),this.b,A.n(this).h("cB<1,2>"))},
gq(a){return J.av(this.a)},
gE(a){return J.nQ(this.a)},
N(a,b){return this.b.$1(J.is(this.a,b))}}
A.cs.prototype={$ix:1}
A.cB.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iV:1}
A.a3.prototype={
gq(a){return J.av(this.a)},
N(a,b){return this.b.$1(J.is(this.a,b))}}
A.H.prototype={
gt(a){return new A.P(J.I(this.a),this.b,this.$ti.h("P<1>"))}}
A.P.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iV:1}
A.bm.prototype={
gt(a){return new A.eA(J.I(this.a),this.$ti.h("eA<1>"))}}
A.eA.prototype={
l(){var s,r
for(s=this.a,r=this.$ti.c;s.l();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iV:1}
A.Z.prototype={
sq(a,b){throw A.b(A.ai("Cannot change the length of a fixed-length list"))},
m(a,b){A.b0(a).h("Z.E").a(b)
throw A.b(A.ai("Cannot add to a fixed-length list"))}}
A.bC.prototype={
k(a,b,c){A.n(this).h("bC.E").a(c)
throw A.b(A.ai("Cannot modify an unmodifiable list"))},
sq(a,b){throw A.b(A.ai("Cannot change the length of an unmodifiable list"))},
m(a,b){A.n(this).h("bC.E").a(b)
throw A.b(A.ai("Cannot add to an unmodifiable list"))},
T(a,b){A.n(this).h("f(bC.E,bC.E)?").a(b)
throw A.b(A.ai("Cannot modify an unmodifiable list"))}}
A.dp.prototype={}
A.ep.prototype={
gq(a){return J.av(this.a)},
N(a,b){var s=this.a,r=J.be(s)
return r.N(s,r.gq(s)-1-b)}}
A.f4.prototype={}
A.dv.prototype={$r:"+(1,2)",$s:1}
A.dw.prototype={$r:"+(1,2,3)",$s:2}
A.eQ.prototype={$r:"+(1,2,3,4)",$s:3}
A.dQ.prototype={}
A.d3.prototype={
gE(a){return this.gq(this)===0},
gH(a){return this.gq(this)!==0},
n(a){return A.n1(this)},
k(a,b,c){var s=A.n(this)
s.c.a(b)
s.y[1].a(c)
A.qF()},
gO(){return new A.bE(this.jr(),A.n(this).h("bE<E<1,2>>"))},
jr(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gK(),o=o.gt(o),n=A.n(s),m=n.y[1],n=n.h("E<1,2>")
case 2:if(!o.l()){r=3
break}l=o.gp()
k=s.i(0,l)
r=4
return a.b=new A.E(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aI(a,b,c,d){var s=A.t(c,d)
this.a0(0,new A.iO(this,A.n(this).C(c).C(d).h("E<1,2>(3,4)").a(b),s))
return s},
$iG:1}
A.iO.prototype={
$2(a,b){var s=A.n(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.n(this.a).h("~(1,2)")}}
A.ap.prototype={
gq(a){return this.b.length},
gdM(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
V(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.V(b))return null
return this.b[this.a[b]]},
a0(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gdM()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gK(){return new A.cR(this.gdM(),this.$ti.h("cR<1>"))},
ga9(){return new A.cR(this.b,this.$ti.h("cR<2>"))}}
A.cR.prototype={
gq(a){return this.a.length},
gE(a){return 0===this.a.length},
gH(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.cS(s,s.length,this.$ti.h("cS<1>"))}}
A.cS.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iV:1}
A.dU.prototype={
aR(){var s=this,r=s.$map
if(r==null){r=new A.e4(s.$ti.h("e4<1,2>"))
A.pQ(s.a,r)
s.$map=r}return r},
i(a,b){return this.aR().i(0,b)},
a0(a,b){this.$ti.h("~(1,2)").a(b)
this.aR().a0(0,b)},
gK(){var s=this.aR()
return new A.a5(s,A.n(s).h("a5<1>"))},
ga9(){var s=this.aR()
return new A.aw(s,A.n(s).h("aw<2>"))},
gq(a){return this.aR().a}}
A.dR.prototype={
m(a,b){A.n(this).c.a(b)
A.qG()}}
A.d5.prototype={
gq(a){return this.b},
gE(a){return this.b===0},
gH(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.cS(s,s.length,r.$ti.h("cS<1>"))},
u(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
aA(a){return A.n0(this,this.$ti.c)}}
A.eq.prototype={}
A.lc.prototype={
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
A.eh.prototype={
n(a){return"Null check operator used on a null value"}}
A.fX.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hw.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ka.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dT.prototype={}
A.eS.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibB:1}
A.c1.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.q2(r==null?"unknown":r)+"'"},
gI(a){var s=A.nH(this)
return A.bG(s==null?A.b0(this):s)},
$icu:1,
gkw(){return this},
$C:"$1",
$R:1,
$D:null}
A.fq.prototype={$C:"$0",$R:0}
A.fr.prototype={$C:"$2",$R:2}
A.ht.prototype={}
A.hr.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.q2(s)+"'"}}
A.d2.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.d2))return!1
return this.$_target===b.$_target&&this.a===b.a},
gD(a){return(A.io(this.a)^A.ek(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hh(this.a)+"'")}}
A.ho.prototype={
n(a){return"RuntimeError: "+this.a}}
A.b3.prototype={
gq(a){return this.a},
gE(a){return this.a===0},
gH(a){return this.a!==0},
gK(){return new A.a5(this,A.n(this).h("a5<1>"))},
ga9(){return new A.aw(this,A.n(this).h("aw<2>"))},
gO(){return new A.R(this,A.n(this).h("R<1,2>"))},
V(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jF(a)},
jF(a){var s=this.d
if(s==null)return!1
return this.b2(s[this.b1(a)],a)>=0},
M(a,b){A.n(this).h("G<1,2>").a(b).a0(0,new A.jR(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.jG(b)},
jG(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b1(a)]
r=this.b2(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.n(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.dm(s==null?q.b=q.c6():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.dm(r==null?q.c=q.c6():r,b,c)}else q.jI(b,c)},
jI(a,b){var s,r,q,p,o=this,n=A.n(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.c6()
r=o.b1(a)
q=s[r]
if(q==null)s[r]=[o.bV(a,b)]
else{p=o.b2(q,a)
if(p>=0)q[p].b=b
else q.push(o.bV(a,b))}},
k6(a,b){var s,r,q=this,p=A.n(q)
p.c.a(a)
p.h("2()").a(b)
if(q.V(a)){s=q.i(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
ai(a,b){if((b&0x3fffffff)===b)return this.hI(this.c,b)
else return this.jH(b)},
jH(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.b1(a)
r=n[s]
q=o.b2(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.dn(p)
if(r.length===0)delete n[s]
return p.b},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bU()}},
a0(a,b){var s,r,q=this
A.n(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.ae(q))
s=s.c}},
dm(a,b,c){var s,r=A.n(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.bV(b,c)
else s.b=c},
hI(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.dn(s)
delete a[b]
return s.b},
bU(){this.r=this.r+1&1073741823},
bV(a,b){var s=this,r=A.n(s),q=new A.jZ(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bU()
return q},
dn(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bU()},
b1(a){return J.aO(a)&1073741823},
b2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
n(a){return A.n1(this)},
c6(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$imZ:1}
A.jR.prototype={
$2(a,b){var s=this.a,r=A.n(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.n(this.a).h("~(1,2)")}}
A.jZ.prototype={}
A.a5.prototype={
gq(a){return this.a.a},
gE(a){return this.a.a===0},
gt(a){var s=this.a
return new A.c6(s,s.r,s.e,this.$ti.h("c6<1>"))}}
A.c6.prototype={
gp(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ae(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iV:1}
A.aw.prototype={
gq(a){return this.a.a},
gE(a){return this.a.a===0},
gt(a){var s=this.a
return new A.a9(s,s.r,s.e,this.$ti.h("a9<1>"))}}
A.a9.prototype={
gp(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ae(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iV:1}
A.R.prototype={
gq(a){return this.a.a},
gE(a){return this.a.a===0},
gt(a){var s=this.a
return new A.e7(s,s.r,s.e,this.$ti.h("e7<1,2>"))}}
A.e7.prototype={
gp(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ae(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.E(s.a,s.b,r.$ti.h("E<1,2>"))
r.c=s.c
return!0}},
$iV:1}
A.e4.prototype={
b1(a){return A.uU(a)&1073741823},
b2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1}}
A.mt.prototype={
$1(a){return this.a(a)},
$S:4}
A.mu.prototype={
$2(a,b){return this.a(a,b)},
$S:27}
A.mv.prototype={
$1(a){return this.a(A.B(a))},
$S:18}
A.b9.prototype={
gI(a){return A.bG(this.dK())},
dK(){return A.v3(this.$r,this.bg())},
n(a){return this.e5(!1)},
e5(a){var s,r,q,p,o,n=this.i9(),m=this.bg(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.on(o):l+A.w(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
i9(){var s,r=this.$s
while($.lV.length<=r)B.a.m($.lV,null)
s=$.lV[r]
if(s==null){s=this.hX()
B.a.k($.lV,r,s)}return s},
hX(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.fU(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.af(j,k)}}
A.ds.prototype={
bg(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.ds&&this.$s===b.$s&&J.Y(this.a,b.a)&&J.Y(this.b,b.b)},
gD(a){return A.bO(this.$s,this.a,this.b,B.h)}}
A.dt.prototype={
bg(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.dt&&s.$s===b.$s&&J.Y(s.a,b.a)&&J.Y(s.b,b.b)&&J.Y(s.c,b.c)},
gD(a){var s=this
return A.bO(s.$s,s.a,s.b,s.c)}}
A.du.prototype={
bg(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.du&&this.$s===b.$s&&A.tm(this.a,b.a)},
gD(a){return A.bO(this.$s,A.rp(this.a),B.h,B.h)}}
A.lC.prototype={
c9(){var s=this.b
if(s===this)throw A.b(new A.cA("Local '' has not been initialized."))
return s},
j(){var s=this.b
if(s===this)throw A.b(A.aG(""))
return s}}
A.c8.prototype={
gI(a){return B.dk},
ed(a,b,c){return new Float32Array(a,b,c)},
$iQ:1,
$ic8:1}
A.de.prototype={$ide:1}
A.ee.prototype={
gj5(a){if(((a.$flags|0)&2)!==0)return new A.m_(a.buffer)
else return a.buffer},
ih(a,b,c,d){var s=A.aq(b,0,c,d,null)
throw A.b(s)},
dA(a,b,c,d){if(b>>>0!==b||b>c)this.ih(a,b,c,d)}}
A.m_.prototype={
ed(a,b,c){var s=A.rm(this.a,b,c)
s.$flags=3
return s}}
A.h3.prototype={
gI(a){return B.dl},
$iQ:1}
A.aj.prototype={
gq(a){return a.length},
e_(a,b,c,d,e){var s,r,q=a.length
this.dA(a,b,q,"start")
this.dA(a,c,q,"end")
if(b>c)throw A.b(A.aq(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.z(e,null))
r=d.length
if(r-e<s)throw A.b(A.q("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaQ:1}
A.ec.prototype={
i(a,b){A.bY(b,a,a.length)
return a[b]},
k(a,b,c){A.m5(c)
a.$flags&2&&A.aN(a)
A.bY(b,a,a.length)
a[b]=c},
hc(a,b,c,d){t.id.a(d)
a.$flags&2&&A.aN(a,5)
this.e_(a,b,c,d,0)
return},
$ix:1,
$il:1,
$iy:1}
A.ed.prototype={
k(a,b,c){A.a(c)
a.$flags&2&&A.aN(a)
A.bY(b,a,a.length)
a[b]=c},
hd(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.aN(a,5)
this.e_(a,b,c,d,e)
return},
$ix:1,
$il:1,
$iy:1}
A.eb.prototype={
gI(a){return B.dm},
b8(a,b,c){return new Float32Array(a.subarray(b,A.tU(b,c,a.length)))},
$iQ:1,
$ij8:1}
A.h4.prototype={
gI(a){return B.dn},
$iQ:1}
A.h5.prototype={
gI(a){return B.dp},
i(a,b){A.bY(b,a,a.length)
return a[b]},
$iQ:1}
A.h6.prototype={
gI(a){return B.dq},
i(a,b){A.bY(b,a,a.length)
return a[b]},
$iQ:1}
A.h7.prototype={
gI(a){return B.dr},
i(a,b){A.bY(b,a,a.length)
return a[b]},
$iQ:1}
A.h8.prototype={
gI(a){return B.du},
i(a,b){A.bY(b,a,a.length)
return a[b]},
$iQ:1,
$in6:1}
A.h9.prototype={
gI(a){return B.dv},
i(a,b){A.bY(b,a,a.length)
return a[b]},
$iQ:1}
A.ef.prototype={
gI(a){return B.dw},
gq(a){return a.length},
i(a,b){A.bY(b,a,a.length)
return a[b]},
$iQ:1}
A.eg.prototype={
gI(a){return B.dx},
gq(a){return a.length},
i(a,b){A.bY(b,a,a.length)
return a[b]},
$iQ:1,
$ihu:1}
A.eM.prototype={}
A.eN.prototype={}
A.eO.prototype={}
A.eP.prototype={}
A.bl.prototype={
h(a){return A.eX(v.typeUniverse,this,a)},
C(a){return A.p3(v.typeUniverse,this,a)}}
A.hT.prototype={}
A.i8.prototype={
n(a){return A.aZ(this.a,null)}}
A.hR.prototype={
n(a){return this.a}}
A.eT.prototype={$ibT:1}
A.ly.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.lx.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
A.lz.prototype={
$0(){this.a.$0()},
$S:19}
A.lA.prototype={
$0(){this.a.$0()},
$S:19}
A.lX.prototype={
hH(a,b){if(self.setTimeout!=null)self.setTimeout(A.dJ(new A.lY(this,b),0),a)
else throw A.b(A.ai("`setTimeout()` not found."))}}
A.lY.prototype={
$0(){this.b.$0()},
$S:0}
A.hM.prototype={
cf(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.du(a)
else{s=r.a
if(q.h("b2<1>").b(a))s.dz(a)
else s.bf(a)}},
cg(a,b){var s=this.a
if(this.b)s.aB(new A.ao(a,b))
else s.bb(new A.ao(a,b))}}
A.m6.prototype={
$1(a){return this.a.$2(0,a)},
$S:7}
A.m7.prototype={
$2(a,b){this.a.$2(1,new A.dT(a,t.l.a(b)))},
$S:42}
A.mm.prototype={
$2(a,b){this.a(A.a(a),b)},
$S:59}
A.aV.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
iC(a,b){var s,r,q
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
o.d=null}q=o.iC(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.oZ
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
o.a=A.oZ
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.q("sync*"))}return!1},
kx(a){var s,r,q=this
if(a instanceof A.bE){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.m(r,q.a)
q.a=s
return 2}else{q.d=J.I(a)
return 2}},
$iV:1}
A.bE.prototype={
gt(a){return new A.aV(this.a(),this.$ti.h("aV<1>"))}}
A.ao.prototype={
n(a){return A.w(this.a)},
$iT:1,
gaQ(){return this.b}}
A.jh.prototype={
$2(a,b){var s,r,q=this
A.dD(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.aB(new A.ao(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.aB(new A.ao(r,s))}},
$S:68}
A.jg.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bv(r,k.b,a)
if(J.Y(s,0)){q=A.i([],j.h("o<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.v)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.fc(q,l)}k.c.bf(q)}}else if(J.Y(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.aB(new A.ao(q,o))}},
$S(){return this.d.h("W(0)")}}
A.hO.prototype={
cg(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.q("Future already completed"))
s.bb(A.uc(a,b))},
ee(a){return this.cg(a,null)}}
A.eB.prototype={
cf(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.q("Future already completed"))
s.du(r.h("1/").a(a))}}
A.cP.prototype={
jS(a){if((this.c&15)!==6)return!0
return this.b.b.d8(t.iW.a(this.d),a.a,t.y,t.K)},
jD(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.ki(q,m,a.b,o,n,t.l)
else p=l.d8(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.ac(s))){if((r.c&1)!==0)throw A.b(A.z("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.z("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.a4.prototype={
d9(a,b,c){var s,r,q=this.$ti
q.C(c).h("1/(2)").a(a)
s=$.a1
if(s===B.m){if(!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aD(b,"onError",u.c))}else{c.h("@<0/>").C(q.c).h("1(2)").a(a)
b=A.uu(b,s)}r=new A.a4(s,c.h("a4<0>"))
this.bW(new A.cP(r,3,a,b,q.h("@<1>").C(c).h("cP<1,2>")))
return r},
e4(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new A.a4($.a1,c.h("a4<0>"))
this.bW(new A.cP(s,19,a,b,r.h("@<1>").C(c).h("cP<1,2>")))
return s},
iF(a){this.a=this.a&1|16
this.c=a},
be(a){this.a=a.a&30|this.a&1
this.c=a.c},
bW(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.bW(a)
return}r.be(s)}A.ij(null,null,r.b,t.M.a(new A.lE(r,a)))}},
dR(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.dR(a)
return}m.be(n)}l.a=m.bk(a)
A.ij(null,null,m.b,t.M.a(new A.lI(l,m)))}},
bj(){var s=t.F.a(this.c)
this.c=null
return this.bk(s)},
bk(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bf(a){var s,r=this
r.$ti.c.a(a)
s=r.bj()
r.a=8
r.c=a
A.dq(r,s)},
hW(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.bj()
q.be(a)
A.dq(q,r)},
aB(a){var s=this.bj()
this.iF(a)
A.dq(this,s)},
du(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("b2<1>").b(a)){this.dz(a)
return}this.hM(a)},
hM(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ij(null,null,s.b,t.M.a(new A.lG(s,a)))},
dz(a){A.n8(this.$ti.h("b2<1>").a(a),this,!1)
return},
bb(a){this.a^=2
A.ij(null,null,this.b,t.M.a(new A.lF(this,a)))},
$ib2:1}
A.lE.prototype={
$0(){A.dq(this.a,this.b)},
$S:0}
A.lI.prototype={
$0(){A.dq(this.b,this.a.a)},
$S:0}
A.lH.prototype={
$0(){A.n8(this.a.a,this.b,!0)},
$S:0}
A.lG.prototype={
$0(){this.a.bf(this.b)},
$S:0}
A.lF.prototype={
$0(){this.a.aB(this.b)},
$S:0}
A.lL.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.kh(t.mY.a(q.d),t.z)}catch(p){s=A.ac(p)
r=A.c_(p)
if(k.c&&t.u.a(k.b.a.c).a===s){q=k.a
q.c=t.u.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.iC(q)
n=k.a
n.c=new A.ao(q,o)
q=n}q.b=!0
return}if(j instanceof A.a4&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.u.a(j.c)
q.b=!0}return}if(j instanceof A.a4){m=k.b.a
l=new A.a4(m.b,m.$ti)
j.d9(new A.lM(l,m),new A.lN(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.lM.prototype={
$1(a){this.a.hW(this.b)},
$S:13}
A.lN.prototype={
$2(a,b){A.dD(a)
t.l.a(b)
this.a.aB(new A.ao(a,b))},
$S:79}
A.lK.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.d8(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ac(l)
r=A.c_(l)
q=s
p=r
if(p==null)p=A.iC(q)
o=this.a
o.c=new A.ao(q,p)
o.b=!0}},
$S:0}
A.lJ.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.u.a(l.a.a.c)
p=l.b
if(p.a.jS(s)&&p.a.e!=null){p.c=p.a.jD(s)
p.b=!1}}catch(o){r=A.ac(o)
q=A.c_(o)
p=t.u.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.iC(p)
m=l.b
m.c=new A.ao(p,n)
p=m}p.b=!0}},
$S:0}
A.hN.prototype={}
A.i6.prototype={}
A.f3.prototype={$ioR:1}
A.i3.prototype={
kj(a){var s,r,q
t.M.a(a)
try{if(B.m===$.a1){a.$0()
return}A.pH(null,null,this,a,t.H)}catch(q){s=A.ac(q)
r=A.c_(q)
A.ny(A.dD(s),t.l.a(r))}},
j4(a){return new A.lW(this,t.M.a(a))},
kh(a,b){b.h("0()").a(a)
if($.a1===B.m)return a.$0()
return A.pH(null,null,this,a,b)},
d8(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.a1===B.m)return a.$1(b)
return A.ux(null,null,this,a,b,c,d)},
ki(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a1===B.m)return a.$2(b,c)
return A.uw(null,null,this,a,b,c,d,e,f)},
fY(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
A.lW.prototype={
$0(){return this.a.kj(this.b)},
$S:0}
A.mi.prototype={
$0(){A.r1(this.a,this.b)},
$S:0}
A.eG.prototype={
gq(a){return this.a},
gE(a){return this.a===0},
gH(a){return this.a!==0},
gK(){return new A.cQ(this,this.$ti.h("cQ<1>"))},
ga9(){var s=this.$ti
return A.h0(new A.cQ(this,s.h("cQ<1>")),new A.lO(this),s.c,s.y[1])},
V(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.i_(a)},
i_(a){var s=this.d
if(s==null)return!1
return this.an(this.dJ(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.oT(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.oT(q,b)
return r}else return this.ia(b)},
ia(a){var s,r,q=this.d
if(q==null)return null
s=this.dJ(q,a)
r=this.an(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.dr(s==null?m.b=A.n9():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.dr(r==null?m.c=A.n9():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.n9()
p=A.io(b)&1073741823
o=q[p]
if(o==null){A.na(q,p,[b,c]);++m.a
m.e=null}else{n=m.an(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
a0(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.dC()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.ae(m))}},
dC(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.bL(i.a,null,!1,t.z)
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
dr(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.na(a,b,c)},
dJ(a,b){return a[A.io(b)&1073741823]}}
A.lO.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.i(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.h("2(1)")}}
A.eI.prototype={
an(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cQ.prototype={
gq(a){return this.a.a},
gE(a){return this.a.a===0},
gH(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.eH(s,s.dC(),this.$ti.h("eH<1>"))}}
A.eH.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ae(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iV:1}
A.b8.prototype={
ij(){return new A.b8(A.n(this).h("b8<1>"))},
gt(a){var s=this,r=new A.cT(s,s.r,A.n(s).h("cT<1>"))
r.c=s.e
return r},
gq(a){return this.a},
gE(a){return this.a===0},
gH(a){return this.a!==0},
u(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.V.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.V.a(r[b])!=null}else return this.hZ(b)},
hZ(a){var s=this.d
if(s==null)return!1
return this.an(s[this.c0(a)],a)>=0},
m(a,b){var s,r,q=this
A.n(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dq(s==null?q.b=A.nb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dq(r==null?q.c=A.nb():r,b)}else return q.hJ(b)},
hJ(a){var s,r,q,p=this
A.n(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.nb()
r=p.c0(a)
q=s[r]
if(q==null)s[r]=[p.c7(a)]
else{if(p.an(q,a)>=0)return!1
q.push(p.c7(a))}return!0},
ai(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.dS(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.dS(s.c,b)
else return s.iA(b)},
iA(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c0(a)
r=n[s]
q=o.an(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.e8(p)
return!0},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.c5()}},
dq(a,b){A.n(this).c.a(b)
if(t.V.a(a[b])!=null)return!1
a[b]=this.c7(b)
return!0},
dS(a,b){var s
if(a==null)return!1
s=t.V.a(a[b])
if(s==null)return!1
this.e8(s)
delete a[b]
return!0},
c5(){this.r=this.r+1&1073741823},
c7(a){var s,r=this,q=new A.hX(A.n(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c5()
return q},
e8(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c5()},
c0(a){return J.aO(a)&1073741823},
an(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Y(a[r].a,b))return r
return-1},
$ioh:1}
A.hX.prototype={}
A.cT.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ae(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iV:1}
A.k_.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:78}
A.D.prototype={
gt(a){return new A.bK(a,this.gq(a),A.b0(a).h("bK<D.E>"))},
N(a,b){return this.i(a,b)},
gE(a){return this.gq(a)===0},
gH(a){return!this.gE(a)},
a5(a,b){var s,r
A.b0(a).h("r(D.E)").a(b)
s=this.gq(a)
for(r=0;r<s;++r){if(!b.$1(this.i(a,r)))return!1
if(s!==this.gq(a))throw A.b(A.ae(a))}return!0},
dg(a,b){return new A.bm(a,b.h("bm<0>"))},
b5(a,b,c){var s=A.b0(a)
return new A.a3(a,s.C(c).h("1(D.E)").a(b),s.h("@<D.E>").C(c).h("a3<1,2>"))},
m(a,b){var s
A.b0(a).h("D.E").a(b)
s=this.gq(a)
this.sq(a,s+1)
this.k(a,s,b)},
bn(a,b){return new A.bi(a,A.b0(a).h("@<D.E>").C(b).h("bi<1,2>"))},
T(a,b){var s,r=A.b0(a)
r.h("f(D.E,D.E)?").a(b)
s=b==null?A.uT():b
A.hq(a,0,this.gq(a)-1,s,r.h("D.E"))},
jz(a,b,c,d){var s
A.b0(a).h("D.E?").a(d)
A.el(b,c,this.gq(a))
for(s=b;s<c;++s)this.k(a,s,d)},
n(a){return A.mW(a,"[","]")},
$ix:1,
$il:1,
$iy:1}
A.L.prototype={
a0(a,b){var s,r,q,p=A.n(this)
p.h("~(L.K,L.V)").a(b)
for(s=this.gK(),s=s.gt(s),p=p.h("L.V");s.l();){r=s.gp()
q=this.i(0,r)
b.$2(r,q==null?p.a(q):q)}},
gO(){return this.gK().b5(0,new A.k1(this),A.n(this).h("E<L.K,L.V>"))},
aI(a,b,c,d){var s,r,q,p,o,n=A.n(this)
n.C(c).C(d).h("E<1,2>(L.K,L.V)").a(b)
s=A.t(c,d)
for(r=this.gK(),r=r.gt(r),n=n.h("L.V");r.l();){q=r.gp()
p=this.i(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
iW(a){var s,r,q
A.n(this).h("l<E<L.K,L.V>>").a(a)
for(s=a.$ti,r=new A.cB(J.I(a.a),a.b,s.h("cB<1,2>")),s=s.y[1];r.l();){q=r.a
if(q==null)q=s.a(q)
this.k(0,q.a,q.b)}},
gq(a){var s=this.gK()
return s.gq(s)},
gE(a){var s=this.gK()
return s.gE(s)},
gH(a){var s=this.gK()
return s.gH(s)},
ga9(){return new A.eK(this,A.n(this).h("eK<L.K,L.V>"))},
n(a){return A.n1(this)},
$iG:1}
A.k1.prototype={
$1(a){var s=this.a,r=A.n(s)
r.h("L.K").a(a)
s=s.i(0,a)
if(s==null)s=r.h("L.V").a(s)
return new A.E(a,s,r.h("E<L.K,L.V>"))},
$S(){return A.n(this.a).h("E<L.K,L.V>(L.K)")}}
A.k2.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.w(a)
r.a=(r.a+=s)+": "
s=A.w(b)
r.a+=s},
$S:12}
A.eK.prototype={
gq(a){var s=this.a
return s.gq(s)},
gE(a){var s=this.a
return s.gE(s)},
gH(a){var s=this.a
return s.gH(s)},
gt(a){var s=this.a,r=s.gK()
return new A.eL(r.gt(r),s,this.$ti.h("eL<1,2>"))}}
A.eL.prototype={
l(){var s=this,r=s.a
if(r.l()){s.c=s.b.i(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iV:1}
A.eY.prototype={
k(a,b,c){var s=A.n(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.ai("Cannot modify unmodifiable map"))}}
A.dd.prototype={
i(a,b){return this.a.i(0,b)},
k(a,b,c){var s=A.n(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
a0(a,b){this.a.a0(0,A.n(this).h("~(1,2)").a(b))},
gE(a){var s=this.a
return s.gE(s)},
gH(a){var s=this.a
return s.gH(s)},
gq(a){var s=this.a
return s.gq(s)},
gK(){return this.a.gK()},
n(a){return this.a.n(0)},
ga9(){return this.a.ga9()},
gO(){return this.a.gO()},
aI(a,b,c,d){return this.a.aI(0,A.n(this).C(c).C(d).h("E<1,2>(3,4)").a(b),c,d)},
$iG:1}
A.ce.prototype={}
A.bR.prototype={
gE(a){return this.gq(this)===0},
gH(a){return this.gq(this)!==0},
M(a,b){var s
for(s=J.I(A.n(this).h("l<1>").a(b));s.l();)this.m(0,s.gp())},
en(a){var s,r,q=this.aA(0)
for(s=this.gt(this);s.l();){r=s.gp()
if(a.u(0,r))q.ai(0,r)}return q},
n(a){return A.mW(this,"{","}")},
a5(a,b){var s
A.n(this).h("r(1)").a(b)
for(s=this.gt(this);s.l();)if(!b.$1(s.gp()))return!1
return!0},
aH(a,b){var s,r,q=this.gt(this)
if(!q.l())return""
s=J.d0(q.gp())
if(!q.l())return s
if(b.length===0){r=s
do r+=A.w(q.gp())
while(q.l())}else{r=s
do r=r+b+A.w(q.gp())
while(q.l())}return r.charCodeAt(0)==0?r:r},
ab(a,b){var s
A.n(this).h("r(1)").a(b)
for(s=this.gt(this);s.l();)if(b.$1(s.gp()))return!0
return!1},
N(a,b){var s,r
A.hk(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.b(A.jF(b,b-r,this,"index"))},
$ix:1,
$il:1,
$icb:1}
A.eR.prototype={
aA(a){var s=this.ij()
s.M(0,this)
return s}}
A.i9.prototype={
m(a,b){this.$ti.c.a(b)
return A.ty()}}
A.ev.prototype={
u(a,b){return this.a.u(0,b)},
gq(a){return this.a.a},
gt(a){var s=this.a
return A.lU(s,s.r,A.n(s).c)},
aA(a){return this.a.aA(0)}}
A.dy.prototype={}
A.eZ.prototype={}
A.hV.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.iv(b):s}},
gq(a){return this.b==null?this.c.a:this.aC().length},
gE(a){return this.gq(0)===0},
gH(a){return this.gq(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.a5(s,A.n(s).h("a5<1>"))}return new A.hW(this)},
ga9(){var s,r=this
if(r.b==null){s=r.c
return new A.aw(s,A.n(s).h("aw<2>"))}return A.h0(r.aC(),new A.lQ(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.B(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.V(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.iO().k(0,b,c)},
V(a){if(this.b==null)return this.c.V(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a0(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.a0(0,b)
s=o.aC()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.m8(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ae(o))}},
aC(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.i(Object.keys(this.a),t.s)
return s},
iO(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.t(t.N,t.z)
r=n.aC()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.i(0,o))}if(p===0)B.a.m(r,"")
else B.a.F(r)
n.a=n.b=null
return n.c=s},
iv(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.m8(this.a[a])
return this.b[a]=s}}
A.lQ.prototype={
$1(a){return this.a.i(0,A.B(a))},
$S:18}
A.hW.prototype={
gq(a){return this.a.gq(0)},
N(a,b){var s=this.a
if(s.b==null)s=s.gK().N(0,b)
else{s=s.aC()
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gt(s)}else{s=s.aC()
s=new J.co(s,s.length,A.M(s).h("co<1>"))}return s}}
A.m2.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:14}
A.m1.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:14}
A.fj.prototype={
jV(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.el(a4,a5,a2)
s=$.qf()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.c(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.c(a3,k)
h=A.ms(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.c(a3,g)
f=A.ms(a3.charCodeAt(g))
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
c=A.a0(j)
g.a+=c
p=k
continue}}throw A.b(A.a8("Invalid base64 data",a3,q))}if(o!=null){a2=B.b.A(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.nS(a3,m,a5,n,l,r)
else{b=B.c.aa(r-1,4)+1
if(b===1)throw A.b(A.a8(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aM(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.nS(a3,m,a5,n,l,a)
else{b=B.c.aa(a,4)
if(b===1)throw A.b(A.a8(a1,a3,a5))
if(b>1)a3=B.b.aM(a3,a5,a5,b===2?"==":"=")}return a3}}
A.iH.prototype={}
A.cq.prototype={}
A.fw.prototype={}
A.fF.prototype={}
A.e5.prototype={
n(a){var s=A.fG(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.fZ.prototype={
n(a){return"Cyclic error in JSON stringify"}}
A.fY.prototype={
em(a,b){var s=A.ur(a,this.gjj().a)
return s},
aE(a,b){var s=A.tf(a,this.gjp().b,null)
return s},
gjp(){return B.cB},
gjj(){return B.cA}}
A.jT.prototype={}
A.jS.prototype={}
A.lS.prototype={
h5(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.A(a,r,q)
r=q+1
o=A.a0(92)
s.a+=o
o=A.a0(117)
s.a+=o
o=A.a0(100)
s.a+=o
o=p>>>8&15
o=A.a0(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.a0(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.a0(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.A(a,r,q)
r=q+1
o=A.a0(92)
s.a+=o
switch(p){case 8:o=A.a0(98)
s.a+=o
break
case 9:o=A.a0(116)
s.a+=o
break
case 10:o=A.a0(110)
s.a+=o
break
case 12:o=A.a0(102)
s.a+=o
break
case 13:o=A.a0(114)
s.a+=o
break
default:o=A.a0(117)
s.a+=o
o=A.a0(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.a0(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.a0(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.A(a,r,q)
r=q+1
o=A.a0(92)
s.a+=o
o=A.a0(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.A(a,r,m)},
bY(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.fZ(a,null))}B.a.m(s,a)},
bJ(a){var s,r,q,p,o=this
if(o.h4(a))return
o.bY(a)
try{s=o.b.$1(a)
if(!o.h4(s)){q=A.od(a,null,o.gdQ())
throw A.b(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.ac(p)
q=A.od(a,r,o.gdQ())
throw A.b(q)}},
h4(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.h5(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.bY(a)
q.ku(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.bY(a)
r=q.kv(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
ku(a){var s,r,q=this.c
q.a+="["
s=J.be(a)
if(s.gH(a)){this.bJ(s.i(a,0))
for(r=1;r<s.gq(a);++r){q.a+=","
this.bJ(s.i(a,r))}}q.a+="]"},
kv(a){var s,r,q,p,o,n,m=this,l={}
if(a.gE(a)){m.c.a+="{}"
return!0}s=a.gq(a)*2
r=A.bL(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a0(0,new A.lT(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.h5(A.B(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.bJ(r[n])}p.a+="}"
return!0}}
A.lT.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:12}
A.lR.prototype={
gdQ(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.hB.prototype={}
A.lh.prototype={
jf(a){return new A.m0(this.a).i0(t.I.a(a),0,null,!0)}}
A.m0.prototype={
i0(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.I.a(a)
s=A.el(b,c,J.av(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.tP(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.tO(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.c1(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.tQ(o)
l.b=0
throw A.b(A.a8(m,a,p+l.c))}return n},
c1(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.J(b+c,2)
r=q.c1(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c1(a,s,c,d)}return q.ji(a,b,c,d)},
ji(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.as(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.c(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.c(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.c(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.a0(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.a0(h)
e.a+=p
break
case 65:p=A.a0(h)
e.a+=p;--d
break
default:p=A.a0(h)
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
p=A.a0(a[l])
e.a+=p}else{p=A.ov(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.a0(h)
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
gD(a){return A.bO(this.a,this.b,B.h,B.h)},
G(a,b){var s
t.ml.a(b)
s=B.c.G(this.a,b.a)
if(s!==0)return s
return B.c.G(this.b,b.b)},
n(a){var s=this,r=A.qH(A.rz(s)),q=A.fy(A.rx(s)),p=A.fy(A.rt(s)),o=A.fy(A.ru(s)),n=A.fy(A.rw(s)),m=A.fy(A.ry(s)),l=A.nY(A.rv(s)),k=s.b,j=k===0?"":A.nY(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$iaE:1}
A.hQ.prototype={
n(a){return this.v()},
$iC:1}
A.T.prototype={
gaQ(){return A.rs(this)}}
A.fg.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fG(s)
return"Assertion failed"}}
A.bT.prototype={}
A.bh.prototype={
gc4(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.w(p),n=s.gc4()+q+o
if(!s.a)return n
return n+s.gc3()+": "+A.fG(s.gcY())},
gcY(){return this.b}}
A.dg.prototype={
gcY(){return A.pj(this.b)},
gc4(){return"RangeError"},
gc3(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.w(q):""
else if(q==null)s=": Not greater than or equal to "+A.w(r)
else if(q>r)s=": Not in inclusive range "+A.w(r)+".."+A.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.w(r)
return s}}
A.fO.prototype={
gcY(){return A.a(this.b)},
gc4(){return"RangeError"},
gc3(){if(A.a(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gq(a){return this.f}}
A.ew.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.hv.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.dk.prototype={
n(a){return"Bad state: "+this.a}}
A.fu.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fG(s)+"."}}
A.ha.prototype={
n(a){return"Out of Memory"},
gaQ(){return null},
$iT:1}
A.es.prototype={
n(a){return"Stack Overflow"},
gaQ(){return null},
$iT:1}
A.lD.prototype={
n(a){return"Exception: "+this.a}}
A.F.prototype={
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
k=""}return g+l+B.b.A(e,i,j)+k+"\n"+B.b.W(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.w(f)+")"):g}}
A.l.prototype={
bn(a,b){return A.qz(this,A.n(this).h("l.E"),b)},
b5(a,b,c){var s=A.n(this)
return A.h0(this,s.C(c).h("1(l.E)").a(b),s.h("l.E"),c)},
df(a,b){var s=A.n(this)
return new A.H(this,s.h("r(l.E)").a(b),s.h("H<l.E>"))},
dg(a,b){return new A.bm(this,b.h("bm<0>"))},
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
gE(a){return!this.gt(this).l()},
gH(a){return!this.gE(this)},
gaG(a){var s=this.gt(this)
if(!s.l())throw A.b(A.fS())
return s.gp()},
jA(a,b){var s,r
A.n(this).h("r(l.E)").a(b)
for(s=this.gt(this);s.l();){r=s.gp()
if(b.$1(r))return r}throw A.b(A.fS())},
N(a,b){var s,r
A.hk(b,"index")
s=this.gt(this)
for(r=b;s.l();){if(r===0)return s.gp();--r}throw A.b(A.jF(b,b-r,this,"index"))},
n(a){return A.rc(this,"(",")")}}
A.E.prototype={
n(a){return"MapEntry("+A.w(this.a)+": "+A.w(this.b)+")"}}
A.W.prototype={
gD(a){return A.A.prototype.gD.call(this,0)},
n(a){return"null"}}
A.A.prototype={$iA:1,
R(a,b){return this===b},
gD(a){return A.ek(this)},
n(a){return"Instance of '"+A.hh(this)+"'"},
gI(a){return A.il(this)},
toString(){return this.n(this)}}
A.i7.prototype={
n(a){return""},
$ibB:1}
A.as.prototype={
gq(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$irN:1}
A.lg.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.B(b)
s=B.b.bz(b,"=")
if(s===-1){if(b!=="")a.k(0,A.ng(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.A(b,0,s)
q=B.b.b9(b,s+1)
p=this.a
a.k(0,A.ng(r,0,r.length,p,!0),A.ng(q,0,q.length,p,!0))}return a},
$S:47}
A.lf.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:44}
A.f_.prototype={
ge3(){var s,r,q,p,o=this,n=o.w
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
gD(a){var s,r=this,q=r.y
if(q===$){s=B.b.gD(r.ge3())
r.y!==$&&A.q1()
r.y=s
q=s}return q},
gaK(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.oD(s==null?"":s)
r.z!==$&&A.q1()
q=r.z=new A.ce(s,t.ph)}return q},
gh2(){return this.b},
gcW(){var s=this.c
if(s==null)return""
if(B.b.S(s,"[")&&!B.b.U(s,"v",1))return B.b.A(s,1,s.length-1)
return s},
gd3(){var s=this.d
return s==null?A.p4(this.a):s},
gd5(){var s=this.f
return s==null?"":s},
gfG(){var s=this.r
return s==null?"":s},
gfH(){return this.c!=null},
gfJ(){return this.f!=null},
gfI(){return this.r!=null},
n(a){return this.ge3()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gdi())if(p.c!=null===b.gfH())if(p.b===b.gh2())if(p.gcW()===b.gcW())if(p.gd3()===b.gd3())if(p.e===b.gfT()){r=p.f
q=r==null
if(!q===b.gfJ()){if(q)r=""
if(r===b.gd5()){r=p.r
q=r==null
if(!q===b.gfI()){s=q?"":r
s=s===b.gfG()}}}}return s},
$ihy:1,
gdi(){return this.a},
gfT(){return this.e}}
A.le.prototype={
gh1(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.bA(s,"?",m)
q=s.length
if(r>=0){p=A.f0(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.hP("data","",n,n,A.f0(s,m,q,128,!1,!1),p,n)}return m},
n(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.i4.prototype={
gfH(){return this.c>0},
gfJ(){return this.f<this.r},
gfI(){return this.r<this.a.length},
gdi(){var s=this.w
return s==null?this.w=this.hY():s},
hY(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.S(r.a,"http"))return"http"
if(q===5&&B.b.S(r.a,"https"))return"https"
if(s&&B.b.S(r.a,"file"))return"file"
if(q===7&&B.b.S(r.a,"package"))return"package"
return B.b.A(r.a,0,q)},
gh2(){var s=this.c,r=this.b+3
return s>r?B.b.A(this.a,r,s-1):""},
gcW(){var s=this.c
return s>0?B.b.A(this.a,s,this.d):""},
gd3(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.vc(B.b.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.S(r.a,"http"))return 80
if(s===5&&B.b.S(r.a,"https"))return 443
return 0},
gfT(){return B.b.A(this.a,this.e,this.f)},
gd5(){var s=this.f,r=this.r
return s<r?B.b.A(this.a,s+1,r):""},
gfG(){var s=this.r,r=this.a
return s<r.length?B.b.b9(r,s+1):""},
gaK(){if(this.f>=this.r)return B.aL
return new A.ce(A.oD(this.gd5()),t.ph)},
gD(a){var s=this.x
return s==null?this.x=B.b.gD(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.n(0)},
n(a){return this.a},
$ihy:1}
A.hP.prototype={}
A.k9.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.mM.prototype={
$1(a){return this.a.cf(this.b.h("0/?").a(a))},
$S:7}
A.mN.prototype={
$1(a){if(a==null)return this.a.ee(new A.k9(a===undefined))
return this.a.ee(a)},
$S:7}
A.mn.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.pA(a))return a
s=this.a
a.toString
if(s.V(a))return s.i(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.m(A.aq(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.cY(!0,"isUtc",t.y)
return new A.cr(r,0,!0)}if(a instanceof RegExp)throw A.b(A.z("structured clone of RegExp",null))
if(a instanceof Promise)return A.bu(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.t(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bt(n),p=s.gt(n);p.l();)m.push(A.bZ(p.gp()))
for(l=0;l<s.gq(n);++l){k=s.i(n,l)
if(!(l<m.length))return A.c(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.a(a.length)
for(s=J.be(i),l=0;l<h;++l)o.push(this.$1(s.i(i,l)))
return o}return a},
$S:39}
A.hU.prototype={
a6(a){if(a<=0||a>4294967296)throw A.b(A.op(u.g+a))
return Math.random()*a>>>0},
d1(){return Math.random()},
$in3:1}
A.dr.prototype={
bT(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.c.J(a-s,k)
r=a>>>0
a=B.c.J(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.J(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.J(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.J(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.J(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.J(q-n,k)>>>0
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
s.b=B.c.J(o-n+(q-p)+(m-r),4294967296)>>>0},
a6(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.op(u.g+a))
s=a-1
if((a&s)>>>0===0){p.af()
return(p.a&s)>>>0}do{p.af()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
d1(){var s,r=this
r.af()
s=r.a
r.af()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$in3:1}
A.ks.prototype={}
A.hj.prototype={
v(){return"QualityProfileKind."+this.b}}
A.kq.prototype={}
A.iM.prototype={}
A.iN.prototype={}
A.kk.prototype={
P(){var s,r,q,p
for(s=A.J(["exposure",1,"bloomStrength",0,"ssaoStrength",0,"depthOfFieldStrength",0,"vignette",0,"grain",0,"ditherStrength",0,"colorGradeStrength",0,"affineWarpStrength",0,"vertexSnapGrid",0,"vhsChromaWeight",0,"vhsTrackingWeight",0,"vhsNoiseWeight",0,"vhsHeadSwitchWeight",0,"vhsDropoutWeight",0,"vhsGhostWeight",0],t.N,t.i),s=new A.R(s,A.n(s).h("R<1,2>")).gt(0);s.l();){r=s.d
q=r.a
p=r.b
if(!isFinite(p)||p<0)throw A.b(A.z("PostProcessState."+q+" must be >= 0: "+A.w(p),null))}}}
A.fn.prototype={}
A.ja.prototype={
P(){var s,r,q
if(!B.aB.ga4(0)||!B.aB.ga4(0)||!B.cC.ga4(0))throw A.b(A.z("FrameEnvironment colors must be finite",null))
s=isFinite(0)
if(s)r=!isFinite(1)
else r=!0
if(r)throw A.b(A.z("FrameEnvironment requires fogEnd >= fogStart, got 0/1",null))
if(!s)throw A.b(A.z("FrameEnvironment.ambientIntensity must be >= 0: 0",null))
for(q=0;!1;++q)B.cQ[q].P()
for(q=0;!1;++q)B.cR[q].P()}}
A.jb.prototype={}
A.bP.prototype={
R(a,b){if(b==null)return!1
return J.fd(b)===A.il(this)&&b instanceof A.bP&&this.a===b.a&&this.b===b.b},
gD(a){return A.bO(A.il(this),this.a,this.b,B.h)}}
A.bk.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.cc.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.c7.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.hb.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.c4.prototype={
n(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.cx.prototype={
v(){return"HandleRejection."+this.b}}
A.js.prototype={
n(a){return"HandleException("+this.a.b+", "+this.b.n(0)+")"}}
A.e6.prototype={
ga4(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
R(a,b){if(b==null)return!1
return b instanceof A.e6&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gD(a){return A.bO(this.a,this.b,this.c,B.h)},
n(a){return"LinearColor("+this.a+", "+this.b+", "+this.c+")"}}
A.ff.prototype={
v(){return"AlphaMode."+this.b}}
A.e9.prototype={}
A.bV.prototype={
v(){return"VertexAttributeKind."+this.b}}
A.bW.prototype={}
A.li.prototype={
P(){var s,r,q,p
for(s=0;s<6;++s){r=B.Y[s]
q=r.b
p=q+r.c
if(p>14)throw A.b(A.z('VertexLayoutDescriptor "compatibility14": attribute '+r.a.n(0)+" range ["+q+", "+p+") exceeds stride 14",null))}}}
A.ea.prototype={
P(){var s,r
this.a.P()
s=this.b.length
if(B.c.aa(s,14)!==0)throw A.b(A.z("MeshData.vertices length "+s+" is not a multiple of stride 14",null))
s=this.d
r=s.a
if(r.ga4(0)&&s.b.ga4(0)){s=s.b
s=r.a<=s.a&&r.b<=s.b&&r.c<=s.c}else s=!1
if(!s)throw A.b(A.z("MeshData.localBounds must be a valid AABB",null))}}
A.kb.prototype={
P(){var s=this.a,r=s.a
if(!r.u(0,"sceneColor")||!r.u(0,"present"))throw A.b(A.z("resource plan must contain sceneColor and present",null))
if(s.ab(0,new A.kd()))throw A.b(A.z("resource plan contains an empty resource ID",null))
if(this.b!==r.u(0,"vhsOutput"))throw A.b(A.z("resource history does not match vhsOutput ownership",null))}}
A.kd.prototype={
$1(a){return A.B(a).length===0},
$S:3}
A.kl.prototype={}
A.hn.prototype={
fM(a){var s=this
if(s.d)A.m(A.q("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.q("resource assembler is initialized"))
a.P()
s.a=a
s.c=1},
aW(){if(this.d)return
this.d=!0
this.a=null}}
A.fE.prototype={
v(){return"DrawMode."+this.b}}
A.bz.prototype={}
A.l3.prototype={}
A.ft.prototype={
v(){return"ColorEncoding."+this.b}}
A.fB.prototype={
v(){return"DiagnosticLevel."+this.b}}
A.kE.prototype={
P(){var s,r="installedFeatures",q=B.f.en(B.dd)
if(q.a!==0)A.m(A.aD(q,r,"contains unknown pipeline features"))
s=B.f.gH(B.f)
if(s)A.m(A.aD(B.f,r,"safe profiles cannot install optional features"))}}
A.cG.prototype={
v(){return"RendererState."+this.b}}
A.jd.prototype={
n(a){return"FrameStats(#"+this.a+" draws="+this.b+" tris="+this.c+" culled=0 gpu=0B)"}}
A.k4.prototype={}
A.k5.prototype={
$3(a,b,c){return new A.c7(A.a(a),A.a(b),A.bc(c))},
$S:20}
A.hx.prototype={}
A.k7.prototype={
e9(a){var s,r,q,p,o,n,m,l,k,j,i=u.k,h=this.a,g=a.b,f=A.t6(h,new A.jo(g.byteLength,B.cl,B.cj))
if(h.b!==B.e)A.m(A.q(i))
s=A.d(f.a)
r=h.a
q=v.G
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),0,g)
p=A.oQ(h)
A.lr(h,p)
if(h.b!==B.e)A.m(A.q(i))
r.bindBuffer(A.a(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=A.a_(t.S)
for(n=a.a,m=0;m<6;++m){l=B.Y[m]
k=A.pM(l.a)
if(!o.m(0,k))continue
j=A.tX(n,k,l)
if(h.b!==B.e)A.m(A.q(i))
r.vertexAttribPointer.apply(r,[k,j,A.a(q.WebGL2RenderingContext.FLOAT),!1,56,l.b*4])
if(h.b!==B.e)A.m(A.q(i))
r.enableVertexAttribArray(k)}return new A.hx(f,null,p,0,g.length/14|0)},
kb(a){var s=this.c.i(0,a.a)
if(s==null)throw A.b(A.bw(B.K,a))
this.b.jk(a)
return s},
d6(){var s,r,q,p
for(s=this.b.bE(),r=s.$ti,s=new A.aV(s.a(),r.h("aV<1>")),q=this.c,r=r.c;s.l();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.e9(p.b))}}}
A.k8.prototype={
$3(a,b,c){return new A.bk(A.a(a),A.a(b),A.bc(c))},
$S:21}
A.l8.prototype={
dD(){var s=this.a,r=A.oN(s,B.bj)
A.oO(s,r,0,$.q4())
return r},
d6(){var s,r,q,p,o,n,m,l,k,j=this
j.dD()
for(s=j.b.bE(),r=s.$ti,s=new A.aV(s.a(),r.h("aV<1>")),q=j.c,p=j.a,r=r.c;s.l();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
if(m.gfO().a5(0,new A.la()))continue
l=A.oN(p,m.gaq())
for(k=0;B.c.aP(k,m.gfO().length);++k){o=m.gfO()
if(!(k<o.length))return A.c(o,k)
A.oO(p,l,k,o[k])}if(m.gky())A.t7(p,l)
q.k(0,n.a,l)}}}
A.l9.prototype={
$3(a,b,c){return new A.cc(A.a(a),A.a(b),A.bc(c))},
$S:22}
A.la.prototype={
$1(a){return!1},
$S:23}
A.e_.prototype={}
A.j3.prototype={
j7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.C.a(a)
s=new A.kw(A.i([],t.hJ),A.a_(t.N))
for(r=this.a,q=0;q<2;++q)r[q].ek(s,b)
p=s.j6(a,!1)
if(p.b.length!==0)return new A.fH(p,B.cL)
o=p.a
n=A.M(o)
m=new A.a3(o,n.h("k(1)").a(new A.j6()),n.h("a3<1,k>")).aA(0)
l=A.i([],t.c)
for(q=0;q<2;++q){k=r[q]
for(o=k.ej(d),j=0;j<1;++j){i=o[j]
if(!m.u(0,i.gaq().a))throw A.b(A.q('RenderFeature "'+k.gfK()+'" created a pass "'+i.gaq().a+'" that it never declared into the graph'))
B.a.m(l,i)}}B.a.T(l,new A.j7(p))
return new A.fH(p,l)}}
A.j6.prototype={
$1(a){return t.A.a(a).a},
$S:24}
A.j7.prototype={
$2(a,b){var s=t.ks
s.a(a)
s.a(b)
s=this.a.a
return B.c.G(B.a.fL(s,new A.j4(a)),B.a.fL(s,new A.j5(b)))},
$S:25}
A.j4.prototype={
$1(a){return t.A.a(a).a===this.a.gaq().a},
$S:5}
A.j5.prototype={
$1(a){return t.A.a(a).a===this.a.gaq().a},
$S:5}
A.fH.prototype={}
A.d9.prototype={
v(){return"FrameQueueState."+this.b}}
A.jc.prototype={}
A.b5.prototype={
gb7(){var s=this.c,r=A.M(s)
return new A.H(s,r.h("r(1)").a(new A.kf()),r.h("H<1>"))},
gbK(){var s=this.c,r=A.M(s)
return new A.H(s,r.h("r(1)").a(new A.kg()),r.h("H<1>"))},
n(a){return"PassDeclaration("+this.a+" @ "+this.b.n(0)+")"}}
A.kf.prototype={
$1(a){var s=t.J.a(a).b
return s===B.a2||s===B.w},
$S:8}
A.kg.prototype={
$1(a){return t.J.a(a).b===B.aT},
$S:8}
A.bH.prototype={
v(){return"GraphValidationFailureKind."+this.b}}
A.bj.prototype={
n(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.hm.prototype={
v(){return"ResourceFormat."+this.b}}
A.dY.prototype={
v(){return"GraphStage."+this.b}}
A.kM.prototype={
n(a){var s=B.d9.n(0)
return"ResourceRef(sceneColor#0, "+s+", 384x216)"}}
A.dh.prototype={
v(){return"ResourceAccess."+this.b}}
A.bQ.prototype={}
A.dP.prototype={}
A.ko.prototype={
fW(a){var s,r,q,p,o,n,m=this
a.P()
s=null
try{r=t.a
s=A.t8(m.a,a.c,r.a(a.d.gK().aN(0)),r.a(a.f),a.b)}catch(q){if(A.ac(q) instanceof A.er){++m.e
throw q}else throw q}p=new A.dP(s)
r=m.b
o=a.a
n=r.i(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.d(n.b.a))
return p},
i3(a){var s,r
t.dp.a(a)
for(s=a.a,s=new A.a9(s,s.r,s.e,a.$ti.h("a9<1>")),r=this.a.a;s.l();)r.deleteProgram(A.d(s.d.b.a))}}
A.hi.prototype={
P(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.z("ProgramSource.id must not be empty",m))
s=t.S
r=A.a_(s)
for(q=this.d.gO(),q=q.gt(q);q.l();){p=q.gp()
o=p.b
if(o<0)throw A.b(A.z('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.m(0,o))throw A.b(A.z('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a_(s)
for(s=this.e.gO(),s=s.gt(s);s.l();){q=s.gp()
p=q.b
if(p<0)throw A.b(A.z('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.m(0,p))throw A.b(A.z('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.ku.prototype={}
A.he.prototype={
v(){return"PolygonOffset."+this.b}}
A.kh.prototype={
h_(){return new A.iX(this.d,this.e,!1,this.r)}}
A.kw.prototype={
j6(a,b){var s=this.iP(t.C.a(a),!1),r=this.a,q=A.M(r)
return new A.kv(A.af(new A.H(r,q.h("r(1)").a(new A.kA()),q.h("H<1>")),t.A),s)},
iP(a,b){var s,r,q,p,o,n,m=this
t.C.a(a)
s=A.i([],t.aW)
r=m.a
q=A.M(r)
p=q.h("H<1>")
o=A.U(new A.H(r,q.h("r(1)").a(new A.kz()),p),p.h("l.E"))
m.hO(o,a,s)
m.hS(o,s)
m.hR(o,!1,s)
n=m.hV(o,s)
m.hT(o,n,s)
m.hU(o,s)
m.hQ(o,n,s)
m.hP(o,s)
return s},
hO(a,b,c){var s,r,q,p
t.O.a(a)
t.C.a(b)
t._.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
p=B.f.en(b)
if(p.a!==0)B.a.m(c,new A.bj(B.cs,q.a,"missing capabilities: "+p.aH(0,", ")))}},
hS(a,b){var s,r,q,p
t.O.a(a)
t._.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r)for(q=a[r].gb7(),p=J.I(q.a),q=new A.P(p,q.b,q.$ti.h("P<1>"));q.l();)p.gp()},
hR(a,b,c){var s,r,q,p,o,n
t.O.a(a)
t._.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.c,o=q.a,n=0;n<1;++n)if(p[n].b===B.w)B.a.m(c,new A.bj(B.cq,o,"history read of sceneColor with no valid previous frame"))}},
hV(a,b){var s,r,q,p,o,n,m,l,k,j="sceneColor#0"
t.O.a(a)
t._.a(b)
s=A.t(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.v)(a),++q){p=a[q]
for(o=p.gbK(),n=J.I(o.a),o=new A.P(n,o.b,o.$ti.h("P<1>")),m=p.a;o.l();){l=n.gp()
k=s.i(0,j)
if(k!=null){B.a.m(b,new A.bj(B.co,m,l.a.n(0)+" already written by "+k.a))
continue}s.k(0,j,p)}}return s},
hT(a,b,c){var s,r,q,p,o,n,m
t.O.a(a)
t.iE.a(b)
t._.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gb7(),p=J.I(q.a),q=new A.P(p,q.b,q.$ti.h("P<1>")),o=r.a;q.l();){n=p.gp()
if(n.b===B.w)continue
m=b.i(0,"sceneColor#0")
if(m==null){B.a.m(c,new A.bj(B.az,o,"reads "+n.a.n(0)+" but no pass writes that version"))
continue}if(B.a.bz(a,m)>s)B.a.m(c,new A.bj(B.az,o,"reads "+n.a.n(0)+" before writer "+m.a+" runs"))}}},
hU(a,b){var s,r,q,p,o,n,m,l,k
t.O.a(a)
t._.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r){q=a[r]
for(p=q.gb7(),o=J.I(p.a),p=new A.P(o,p.b,p.$ti.h("P<1>")),n=q.a;p.l();){m=o.gp()
if(m.b===B.w)continue
for(l=q.gbK(),k=J.I(l.a),l=new A.P(k,l.b,l.$ti.h("P<1>")),m=m.a;l.l();){k.gp()
B.a.m(b,new A.bj(B.cp,n,"reads and writes "+m.n(0)+" at the same version; declare a ping-pong version bump"))}}}},
hQ(a,b,c){var s,r,q,p,o,n
t.O.a(a)
t.iE.a(b)
t._.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.v)(a),++r)for(q=a[r].gb7(),p=J.I(q.a),q=new A.P(p,q.b,q.$ti.h("P<1>"));q.l();){o=p.gp()
if(o.b===B.w)continue
n=b.i(0,"sceneColor#0")
if(n==null)continue
n.gbK().jA(0,new A.ky(o))}},
hP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="sceneColor#0"
t.O.a(a)
t._.a(b)
s=t.S
r=A.t(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gbK(),o=J.I(p.a),p=new A.P(o,p.b,p.$ti.h("P<1>"));p.l();){o.gp()
r.k(0,h,q)}n=J.fU(p,t.nO)
for(m=0;m<p;++m)n[m]=A.a_(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gb7(),p=J.I(s.a),s=new A.P(p,s.b,s.$ti.h("P<1>"));s.l();){if(p.gp().b===B.w)continue
l=r.i(0,h)
if(l!=null&&l!==q){if(l>>>0!==l||l>=n.length)return A.c(n,l)
n[l].m(0,q)}}p=t.y
k=A.bL(s,!1,!1,p)
s=a.length
j=A.bL(s,!1,!1,p)
i=new A.kx(k,j,n)
for(q=0;q<a.length;++q){if(!(q<s))return A.c(j,q)
if(!j[q]&&i.$1(q)){if(!(q<a.length))return A.c(a,q)
B.a.m(b,new A.bj(B.cr,a[q].a,"participates in a resource dependency cycle"))}}}}
A.kA.prototype={
$1(a){t.A.a(a)
return A.n2()},
$S:5}
A.kz.prototype={
$1(a){t.A.a(a)
return A.n2()},
$S:5}
A.ky.prototype={
$1(a){t.J.a(a)
return!0},
$S:8}
A.kx.prototype={
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
r=A.lU(r,r.r,A.n(r).c)
q=r.$ti.c
while(r.l()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:28}
A.kv.prototype={}
A.eJ.prototype={$iaR:1}
A.em.prototype={
gcZ(){return new A.bE(this.jM(),t.fJ)},
jM(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$gcZ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b.bE(),n=o.$ti,o=new A.aV(o.a(),n.h("aV<1>")),m=s.a,l=m.$ti,k=l.c,j=m.b,n=n.c,l=l.y[1]
case 3:if(!o.l()){r=4
break}i=o.b
if(i==null)i=n.a(i)
h=i.a
g=i.b
B.u.P()
i=k.a(g.a)
m.bZ(i)
i=i.a
if(!(i>=0&&i<j.length)){A.c(j,i)
r=1
break}f=j[i].c
i=(f==null?l.a(f):f).d
e=B.u.da()
i=i.gef()
d=A.M(i)
r=5
return a.b=new A.eJ(h,g,A.mV(new A.a3(i,d.h("K(1)").a(e.gh0()),d.h("a3<1,K>")))),1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
$irE:1}
A.kC.prototype={
$3(a,b,c){return new A.c4(A.a(a),A.a(b),A.bc(c))},
$S:29}
A.ma.prototype={
$1(a){var s=this.a.w.a.kb(a),r=s.b!=null,q=r?s.d:s.e
return new A.eo(s.c,r,q)},
$S:30}
A.i1.prototype={$irD:1}
A.hS.prototype={$ir3:1}
A.kL.prototype={
aW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
if(f.r)return
s=f.f
r=A.U(s,A.n(s).c)
q=r.length
p=f.c
o=p.c
n=p.a.a
m=t.fL
l=0
for(;l<r.length;r.length===q||(0,A.v)(r),++l){k=r[l]
j=o.ai(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.d7(k)}r=f.e
q=A.U(r,A.n(r).c)
p=q.length
o=f.b.a
l=0
for(;l<q.length;q.length===p||(0,A.v)(q),++l)o.d7(q[l])
q=f.d
p=A.U(q,A.n(q).c)
o=p.length
n=f.a
m=n.c
i=n.a.a
l=0
for(;l<p.length;p.length===o||(0,A.v)(p),++l){k=p[l]
h=m.ai(0,k.a)
if(h!=null){i.deleteVertexArray(A.d(h.c.a))
i.deleteBuffer(A.d(h.a.a))
g=h.b
if(g!=null)i.deleteBuffer(A.d(g.a))}n.b.d7(k)}s.F(0)
r.F(0)
q.F(0)
f.r=!0}}
A.kS.prototype={
gkd(){var s=this.w
return s==null?A.m(A.q("renderer is not initialized")):s},
cX(a,b){return this.jE(a,b)},
jE(a,b){var s=0,r=A.br(t.H),q=this,p,o,n,m,l,k
var $async$cX=A.bs(function(c,d){if(c===1)return A.bo(d,r)
for(;;)switch(s){case 0:if(q.e!==B.a0)throw A.b(A.q("renderer can only be initialized once"))
a.P()
if(b.a<0||b.b<0)A.m(A.z("SurfaceMetrics css size must be >= 0",null))
if(b.c<0||b.d<0)A.m(A.z("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))A.m(A.z("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))
p=q.a
if(p.b===B.v)throw A.b(A.q("renderer device is context lost"))
q.e=B.d8
try{o=v.G
p.aS(A.a(o.WebGL2RenderingContext.MAX_TEXTURE_SIZE))
p.aS(A.a(o.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS))
p.aS(A.a(o.WebGL2RenderingContext.MAX_SAMPLES))
p.aS(A.a(o.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS))
p.aS(A.a(o.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS))
n=p.a
A.e(n.getExtension("EXT_texture_filter_anisotropic"))
A.e(n.getExtension("EXT_disjoint_timer_query_webgl2"))
A.e(n.getExtension("EXT_color_buffer_float"))
A.e(n.getExtension("EXT_color_buffer_half_float"))
A.e(n.getExtension("WEBGL_lose_context"))
A.bZ(n.getParameter(A.a(o.WebGL2RenderingContext.RENDERER)))
A.bZ(n.getParameter(A.a(o.WebGL2RenderingContext.VENDOR)))
q.r=new A.ks()
o=q.b
m=A.kc(a)
n=o.a
if(n.a!=null)A.m(A.q("configuration state is already initialized"))
a.P()
n.a=a
A.kc(a)
n.d=1
o.b.fM(m)
o=A.rk()
q.w=new A.kL(A.rl(p),o,A.rP(p),A.a_(t.l0),A.a_(t.fP),A.a_(t.lu))
o=new A.hn()
n=new A.jq(p,o)
m=A.kc(a)
l=n.dE(m,a)
o.fM(m)
n.c=new A.hf(new A.kl(m),l)
q.x=n
q.y=new A.ko(p,A.t(t.N,t.gY))
q.as=a
A.pp(q)
q.e=B.a1}catch(j){p=q.y
if(p!=null){o=p.b
p.i3(new A.aw(o,A.n(o).h("aw<2>")))
o.F(0)}p=q.x
if(p!=null)p.aW()
p=q.w
if(p!=null)p.aW()
q.w=null
q.e=B.a0
throw j}return A.bp(null,r)}})
return A.bq($async$cX,r)},
jq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.c2()
s=c.at
r=c.ax
if(s==null||r==null)throw A.b(A.q("renderer.endFrame called without an active frame"))
k=c.c
if(k.b!==B.T)A.m(A.q("FrameQueue.endFrame called without an active frame"))
j=k.a
i=A.l2(j,0,A.cY(k.c,"count",t.S),A.M(j).c).aO(0,!1)
k.b=B.cc
q=i
try{A.u2(c,r,s)
k=r.gcZ()
j=t.p9
h=k.$ti
k=A.U(A.h0(k,h.h("bz(l.E)").a(new A.kT()),h.h("l.E"),j),j)
p=k
J.qn(p,q)
o=p
n=0
for(p=o,k=p.length,g=0;g<p.length;p.length===k||(0,A.v)(p),++g){m=p[g]
j=c.w.a
h=m.a
f=h.a
e=j.c.i(0,f)
if(e==null)A.m(A.bw(B.K,h))
j=j.b
d=j.$ti
j.bZ(d.c.a(h))
j=j.b
if(!(f>=0&&f<j.length))return A.c(j,f)
f=j[f].c
if(f==null)d.y[1].a(f)
l=e
j=n
h=B.c.J(l.d>0?l.d:l.e,3)
if(typeof j!=="number")return j.a2()
n=j+h}p=s.e
k=J.av(o)
j=n
J.av(o)
return new A.jd(p,k,j)}finally{c.ax=c.at=null}},
iy(){var s,r,q,p=this
if(p.e!==B.aS)return
if(p.a.b===B.v)throw A.b(A.q("renderer context remains lost"))
s=p.w
if(s.r)A.m(A.q("resource library is disposed"))
s.a.d6()
s.c.d6()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.m(A.q("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.m(A.q("GPU resource adapter is not initialized"))
s.c=new A.hf(q.a,s.dE(A.kc(r),r))
s=p.y
s.c=null
s.b.F(0)
A.pp(p)
p.e=B.a1},
c2(){var s=this.e
if(s!==B.a1)throw A.b(A.q("renderer is not ready: "+s.b))
if(this.a.b===B.v){this.e=B.aS
throw A.b(A.q("renderer context lost"))}}}
A.kT.prototype={
$1(a){return t.os.a(a).b},
$S:31}
A.aI.prototype={
G(a,b){var s,r=this
t.nL.a(b)
s=B.c.G(r.a.a,b.a.a)
if(s!==0)return s
s=B.c.G(r.b.a,b.b.a)
if(s!==0)return s
s=B.c.G(r.c.a,b.c.a)
if(s!==0)return s
return B.c.G(r.d,b.d)},
$iaE:1}
A.ag.prototype={}
A.mR.prototype={
$2(a,b){var s=t.R
return s.a(a).a.G(0,s.a(b).a)},
$S:32}
A.mS.prototype={
$1(a){return t.R.a(a).b},
$S:33}
A.mP.prototype={
$2(a,b){var s=t.E
return s.a(a).a.G(0,s.a(b).a)},
$S:34}
A.mQ.prototype={
$1(a){return t.E.a(a).b},
$S:35}
A.iP.prototype={}
A.it.prototype={
gef(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.i([new A.K(o,n,p),new A.K(r,n,p),new A.K(o,q,p),new A.K(r,q,p),new A.K(o,n,s),new A.K(r,n,s),new A.K(o,q,s),new A.K(r,q,s)],t.hL)},
n(a){return"Aabb("+this.a.n(0)+", "+this.b.n(0)+")"}}
A.cD.prototype={}
A.da.prototype={
v(){return"FrustumTest."+this.b}}
A.je.prototype={
kk(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.at
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.cd:B.ce}}
A.jf.prototype={
$4(a,b,c,d){var s=new A.K(a,b,c),r=new A.cD(s,d),q=Math.sqrt(s.gbD())
if(q<1e-9)s=r
else{s=1/q
s=new A.cD(new A.K(a*s,b*s,c*s),d/q)}return s},
$S:36}
A.bN.prototype={
W(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.c(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.c(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.c(h,j)
h[j]=l}return new A.bN(h)},
km(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.K(k,j,i):new A.K(k/h,j/h,i/h)},
jU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
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
if(!isFinite(k)||Math.abs(k)<1e-12)A.m(A.q("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.w(k)+")"))
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
return new A.bN(h)},
ga4(a){return B.t.a5(this.a,new A.k3())},
n(a){return"Mat4("+A.w(this.a)+")"}}
A.k3.prototype={
$1(a){return isFinite(A.m5(a))},
$S:38}
A.kr.prototype={
n(a){return"Quat(0, 0, 0, 1)"}}
A.lb.prototype={
P(){if(!B.C.ga4(0))throw A.b(A.z("Transform.translation must be finite: "+B.C.n(0),null))
var s=!1
if(isFinite(0))s=isFinite(1)
if(!s)throw A.b(A.z("Transform.rotation must be finite: "+B.ai.n(0),null))
if(!isFinite(1))throw A.b(A.z("Transform.scale must be finite and positive: 1",null))},
da(){var s,r,q,p,o,n,m,l,k=t.n,j=A.oi(A.i([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],k)).a,i=j.length
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
return A.oi(A.i([s,r,q,0,p,o,n,0,m,l,j[10],0,0,0,0,1],k))},
n(a){return"Transform("+B.C.n(0)+", "+B.ai.n(0)+", scale=1)"}}
A.K.prototype={
aX(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.K(s*r-q*p,q*o-n*r,n*p-s*o)},
gbD(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gq(a){return Math.sqrt(this.gbD())},
ga4(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga1(){var s=this,r=Math.sqrt(s.gbD())
return r<1e-9?B.C:new A.K(s.a/r,s.b/r,s.c/r)},
R(a,b){if(b==null)return!1
return b instanceof A.K&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gD(a){return A.bO(this.a,this.b,this.c,B.h)},
n(a){return"Vec3("+A.w(this.a)+", "+A.w(this.b)+", "+A.w(this.c)+")"}}
A.fm.prototype={}
A.fl.prototype={
h3(a){var s=this.a.i(0,a)
if(s==null)throw A.b(A.q('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
$irC:1}
A.hg.prototype={
gfK(){return"present"},
ek(a,b){B.a.m(a.a,new A.b5("present",B.ay,A.i([new A.bQ(B.G,B.a2)],t.U)))},
ej(a){var s=this,r=s.a.fW(new A.hi("present",s.b,s.c,B.aM,B.d0,B.j)),q=A.oQ(s.d)
return A.i([new A.i2(A.ok(!1,!1,!1,"present",B.ay,A.i([new A.bQ(B.G,B.a2)],t.U)),r,q,B.G)],t.c)},
$ikt:1}
A.i2.prototype={
eo(a){var s=a.h3("sceneColor"),r=a.b.a
A.oI(r,null)
A.oH(r,this.a.h_())
A.oK(r,this.b.b)
A.lr(r,this.c)
A.t4(r,0,s.b)
A.oJ(r,3,0)},
$ica:1,
gaq(){return this.a}}
A.eo.prototype={}
A.hK.prototype={
gfK(){return"world"},
ek(a,b){B.a.m(a.a,new A.b5("worldOpaqueTransparent",B.ax,A.i([B.aU],t.U)))},
ej(a){var s=this,r=s.a.fW(new A.hi("safeWorld",s.b,s.c,B.d_,B.aM,B.cD))
return A.i([new A.ia(A.ok(!0,!0,!0,"worldOpaqueTransparent",B.ax,A.i([B.aU],t.U)),r,s.d)],t.c)},
$ikt:1}
A.ia.prototype={
eo(a){var s,r,q=this,p=a.b,o=a.c,n=p.a
A.oI(n,a.h3("sceneColor").b)
A.oH(n,q.a.h_())
if(n.b!==B.e)A.m(A.q(u.k))
s=n.a
s.clearColor(0,0,0,1)
s.clear(A.t1(n,B.bz))
A.oK(n,q.b.b)
A.ez(n,"uViewProjection",new A.cd(B.a8,new Float32Array(A.cV(o.c.c.a))))
s=t.n
A.ez(n,"uLightDir",new A.cd(B.b9,new Float32Array(A.cV(A.i([0,1,0],s)))))
A.ez(n,"uAmbientColor",new A.cd(B.b9,new Float32Array(A.cV(A.i([1,1,1],s)))))
A.ez(n,"uAmbientIntensity",new A.cd(B.dy,0))
for(n=o.a,s=n.length,r=0;r<n.length;n.length===s||(0,A.v)(n),++r)q.dH(p,n[r])
for(o=o.b,n=o.length,r=0;r<o.length;o.length===n||(0,A.v)(o),++r)q.dH(p,o[r])},
dH(a,b){var s,r,q,p,o,n=this,m=u.k
if(b instanceof A.e_){n.dZ(a,B.u)
s=n.c.$1(b.a.b.a)
r=a.a
A.lr(r,s.a)
q=s.b
p=s.c
o=b.b.length
if(q){if(r.b!==B.e)A.m(A.q(m))
q=v.G
A.aC(r.a,"drawElementsInstanced",[A.a(q.WebGL2RenderingContext.TRIANGLES),p,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0,o],t.H)}else{if(r.b!==B.e)A.m(A.q(m))
r.a.drawArraysInstanced(A.a(v.G.WebGL2RenderingContext.TRIANGLES),0,p,o)}}else if(b instanceof A.eJ){n.dZ(a,B.u)
s=n.c.$1(b.b.a)
r=a.a
A.lr(r,s.a)
q=s.b
p=s.c
if(q){if(r.b!==B.e)A.m(A.q(m))
q=v.G
r.a.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),p,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)}else A.oJ(r,p,0)}else throw A.b(A.z("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fd(b).n(0),null))},
dZ(a,b){var s=b.da(),r=a.a
A.ez(r,"uModel",new A.cd(B.a8,new Float32Array(A.cV(s.a))))
A.ez(r,"uNormalMatrix",new A.cd(B.a8,new Float32Array(A.cV(s.jU().a))))},
$ica:1,
gaq(){return this.a}}
A.fK.prototype={
v(){return"GpuBufferUsage."+this.b}}
A.dV.prototype={
v(){return"GpuBufferKind."+this.b}}
A.fL.prototype={
v(){return"GpuTextureFilter."+this.b}}
A.fM.prototype={
v(){return"GpuTextureWrap."+this.b}}
A.jo.prototype={}
A.jr.prototype={}
A.cw.prototype={
v(){return"GpuTargetAttachment."+this.b}}
A.dX.prototype={}
A.dW.prototype={
v(){return"GpuDeviceStatus."+this.b}}
A.cI.prototype={
v(){return"ShaderCompileStage."+this.b}}
A.er.prototype={
n(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.dn.prototype={
v(){return"UniformType."+this.b}}
A.cd.prototype={}
A.fp.prototype={
v(){return"ClearMask."+this.b}}
A.fA.prototype={$iqN:1}
A.hf.prototype={}
A.jq.prototype={
gp(){var s=this.c
if(s==null)throw A.b(A.q("GPU resource adapter is not initialized"))
return s},
aW(){var s,r=this
if(r.e)return
s=r.c
if(s!=null)r.i2(s.b)
r.b.aW()
r.c=null
r.e=!0},
dE(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=t.N,a7=t.h,a8=A.t(a6,a7),a9=A.i([],t.l2)
try{for(p=b0.a.a,p=A.lU(p,p.r,A.n(p).c),o=v.G,n=this.a,m=p.$ti.c,l=n.a,k=t.n;p.l();){j=p.d
s=j==null?m.a(j):j
if(J.Y(s,"sceneColor#1")){j=J.au(a8,"sceneColor")
j.toString
J.bv(a8,s,j)
continue}j=this.i4(s,b1)
if(n.b!==B.e)A.m(A.q(u.k))
i=j.a
if(i<=0||j.b<=0)A.m(A.z("WebGl2Device.createTarget requires positive dimensions, got "+i+"x"+j.b,a5))
h=A.e(l.createFramebuffer())
if(h==null)A.m(A.q("WebGl2Device: gl.createFramebuffer() returned null"))
l.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),h)
g=j.d
f=g===B.U
if(f&&!j.e)A.m(A.z("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",a5))
e=g===B.au||g===B.cn
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
if(g!==a0){A.n7(n,h,d,c,a1,a2,b,a)
A.m(A.q("WebGl2Device.createTarget: framebuffer incomplete"))}r=new A.ck(new A.f1(h,d,c,a1,a2,b,a,i,j.b))
J.fc(a9,r)
J.bv(a8,s,r)}a6=A.d4(a8,a6,a7)
return a6}catch(a3){for(a6=a9,p=A.M(a6).h("ep<1>"),a6=new A.ep(a6,p),a6=new A.bK(a6,a6.gq(0),p.h("bK<a6.E>")),o=this.a,n=t.jg,p=p.h("a6.E");a6.l();){m=a6.d
q=m==null?p.a(m):m
a4=n.a(a7.a(q).a)
A.n7(o,a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r)}throw a3}},
i4(a,b){var s,r,q,p
if(a==="shadowMap")return new A.dX(512,512,1,B.U,!0)
if(a==="sceneDepth")return new A.dX(384,216,1,B.U,!0)
s=B.b.S(a,"ssao")||B.b.S(a,"bloomBlur")||B.b.S(a,"dofBlur")
r=s?192:384
q=s?108:216
p=a==="sceneColor"
return new A.dX(r,q,1,p?B.au:B.cm,p)},
i2(a){var s,r,q,p,o,n=A.n0(t.f7.a(a).ga9(),t.h)
for(n=A.lU(n,n.r,A.n(n).c),s=this.a,r=t.jg,q=n.$ti.c;n.l();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.n7(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}}}
A.dx.prototype={
v(){return"_SlotState."+this.b}}
A.ci.prototype={
seg(a){this.c=this.$ti.h("1?").a(a)}}
A.by.prototype={
cj(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.c(s,-1)
q=s.pop()}else{s=o.b
B.a.m(s,new A.ci(B.E,n.h("ci<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.c(n,q)
p=n[q];++p.a
p.b=B.eb
p.seg(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
jh(a){return this.cj(a,null)},
bZ(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.bw(B.W,a))
r=this.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.bw(B.X,a))
s=q.b
if(s===B.F||s===B.E)throw A.b(A.bw(B.K,a))},
jk(a){var s,r,q,p=this.$ti
p.c.a(a)
s=a.a
if(s<0||s>=this.b.length)A.m(A.bw(B.W,a))
r=this.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q.a!==a.b)A.m(A.bw(B.X,a))
s=q.b
if(s===B.F||s===B.E)A.m(A.bw(B.K,a))
s=q.c
return s==null?p.y[1].a(s):s},
d7(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.bw(B.W,a))
r=p.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.bw(B.X,a))
r=q.b
if(r===B.F||r===B.E)throw A.b(A.bw(B.ct,a))
q.b=B.F
q.seg(null)
B.a.m(p.c,s);++p.e},
bE(){return new A.bE(this.jN(),this.$ti.h("bE<+(1,2)>"))},
jN(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$bE(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.F||j===B.E){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.dv(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.fk.prototype={
v(){return"BlendEquation."+this.b}}
A.dN.prototype={
v(){return"BlendFactor."+this.b}}
A.fx.prototype={
v(){return"CullFace."+this.b}}
A.fz.prototype={
v(){return"DepthFunc."+this.b}}
A.iX.prototype={}
A.ak.prototype={
v(){return"StateField."+this.b}}
A.lu.prototype={
jl(a){var s,r=this.a
if(r==null)return A.k0(B.cT,t.dB)
s=A.a_(t.dB)
if(r.a!==a.a)s.m(0,B.a5)
if(r.c!==a.c)s.m(0,B.a6)
if(r.w!==a.w)s.m(0,B.a7)
return s}}
A.ck.prototype={$ijp:1}
A.f2.prototype={}
A.f1.prototype={}
A.hJ.prototype={
hG(a){var s=this,r=A.d(s.a.canvas)
s.c=A.a7(new A.ls(s))
s.d=A.a7(new A.lt(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
aS(a){var s=A.bZ(this.a.getParameter(a))
return typeof s=="number"?B.d.al(s):0},
$ir5:1}
A.ls.prototype={
$1(a){A.d(a).preventDefault()
this.a.b=B.v},
$S:2}
A.lt.prototype={
$1(a){A.d(a)
this.a.b=B.e},
$S:2}
A.fC.prototype={
B(){var s=this
return A.J(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.fi.prototype={
hw(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.c
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
k.dx!==$&&A.u()
k.dx=q
o=A.d(s.createBiquadFilter())
o.type="lowpass"
A.d(o.frequency).value=11e3
k.dy!==$&&A.u()
k.dy=o
A.e(q.connect(o))
A.e(o.connect(A.d(s.destination)))
j.disconnect(A.d(s.destination))
A.e(j.connect(q))},
fZ(){var s=this.a
if(A.B(s.state)==="suspended")A.d(s.resume())},
iH(a){var s,r,q=this
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
ib(){var s,r,q,p,o,n,m,l=this.a,k=A.ig(l.sampleRate),j=B.d.ak(k*2),i=A.d(l.createBuffer(2,j,k))
for(l=this.at,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.d1()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.c(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
d2(a,b){var s,r,q,p=this,o=p.as.i(0,a)
if(o==null)return
s=p.a
r=A.d(s.createBufferSource())
r.buffer=o
A.d(r.playbackRate).value=0.94+p.at.d1()*0.12
q=A.d(s.createGain())
A.d(q.gain).value=b
A.e(r.connect(q))
s=B.aN.i(0,a)
A.e(q.connect(p.iH(s==null?"transient":s)))
r.start()},
k0(a){return this.d2(a,1)},
cd(){return}}
A.iE.prototype={
$1(a){return this.h6(t.q.a(a))},
h6(a){var s=0,r=A.br(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.bs(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.an(A.bu(A.d(A.d(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.an(A.bu(A.d(n.arrayBuffer()),t.eb),$async$$1)
case 7:m=c
j=o.a
g=j.as
f=a.a
s=8
return A.an(A.bu(A.d(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.ac(h)
A.d(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.w(l))
s=5
break
case 2:s=1
break
case 5:return A.bp(null,r)
case 1:return A.bo(p.at(-1),r)}})
return A.bq($async$$1,r)},
$S:40}
A.iK.prototype={
d_(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.j(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.qm().ap(q).ga1()
p.d=q
p.c=p.b.ap(q).ga1()
p.a=a}}
A.j9.prototype={}
A.hs.prototype={}
A.jm.prototype={
i6(){var s,r,q,p,o=this
if(o.d)return
o.d=!0
s=o.a
r=A.e(s.getExtension("EXT_texture_filter_anisotropic"))
q=r==null?A.e(s.getExtension("WEBKIT_EXT_texture_filter_anisotropic")):r
if((q==null?A.e(s.getExtension("MOZ_EXT_texture_filter_anisotropic")):q)==null)return
p=A.bZ(s.getParameter(34047))
if(typeof p=="number")o.c=p},
bF(a,b,c,d,e,f){return this.jO(a,b,c,d,e,f)},
jO(a,b,c,a0,a1,a2){var s=0,r=A.br(t.mU),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$bF=A.bs(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
m=A.d(A.d(j.document).createElement("img"))
m.src=a
s=7
return A.an(A.bu(A.d(m.decode()),t.X),$async$bF)
case 7:i=n.a
h=A.e(i.createTexture())
h.toString
l=h
i.activeTexture(A.a(j.WebGL2RenderingContext.TEXTURE0)+b)
i.bindTexture(A.a(j.WebGL2RenderingContext.TEXTURE_2D),l)
i.pixelStorei(A.a(j.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aC(i,"texImage2D",[A.a(j.WebGL2RenderingContext.TEXTURE_2D),0,A.a(j.WebGL2RenderingContext.RGBA8),A.a(j.WebGL2RenderingContext.RGBA),A.a(j.WebGL2RenderingContext.UNSIGNED_BYTE),m],t.H)
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
if(c){n.i6()
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
case 6:case 1:return A.bp(q,r)
case 2:return A.bo(o.at(-1),r)}})
return A.bq($async$bF,r)},
bG(a,b,c){var s=!1
return this.jP(t.a.a(a),b,!1)},
jP(b0,b1,b2){var s=0,r=A.br(t.mU),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$bG=A.bs(function(b3,b4){if(b3===1){o.push(b4)
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
return A.an(A.bu(A.d(j.decode()),a1),$async$bG)
case 10:J.fc(l,j)
case 8:b0.length===a||(0,A.v)(b0),++a2
s=7
break
case 9:if(J.av(l)===0){a=A.q("texture array needs at least one layer")
throw A.b(a)}i=A.a(J.au(l,0).width)
h=A.a(J.au(l,0).height)
if(J.Y(i,0)||J.Y(h,0)||J.qo(l,new A.jn(i,h))){a=A.q("texture-array layers must have matching nonzero dimensions")
throw A.b(a)}g=J.av(l)
f=1
if(a6){a=i
a1=h
if(typeof a!=="number"){q=a.X()
n=[1]
s=5
break}if(typeof a1!=="number"){q=A.im(a1)
n=[1]
s=5
break}e=a>a1?i:h
for(;;){a=e
if(typeof a!=="number"){q=a.X()
n=[1]
s=5
break A}if(!(a>1))break
a=f
if(typeof a!=="number"){q=a.a2()
n=[1]
s=5
break A}f=a+1
a=e
if(typeof a!=="number"){q=a.a2()
n=[1]
s=5
break A}e=B.d.J(a+1,2)}}a=m.a
a7=A.e(a.createTexture())
if(a7==null){a=A.q("could not create texture array")
throw A.b(a)}a.activeTexture(A.a(a0.WebGL2RenderingContext.TEXTURE0)+b1)
a.bindTexture(A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),a7)
a.pixelStorei(A.a(a0.WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL),0)
A.aC(a,"texStorage3D",[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),f,A.a(a0.WebGL2RenderingContext.RGBA8),i,h,g],t.H)
d=A.a(a.getError())
if(!J.Y(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.q("texture-array storage failed (WebGL error 0x"+J.mU(d,16)+")")
throw A.b(a)}c=0
for(;;){a1=c
a3=J.av(l)
if(typeof a1!=="number"){q=a1.aP()
n=[1]
s=5
break A}if(!(a1<a3))break
a.texSubImage3D.apply(a,[A.a(a0.WebGL2RenderingContext.TEXTURE_2D_ARRAY),0,0,0,c,i,h,1,A.a(a0.WebGL2RenderingContext.RGBA),A.a(a0.WebGL2RenderingContext.UNSIGNED_BYTE),J.au(l,c)])
d=A.a(a.getError())
if(!J.Y(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.q("texture-array layer "+A.w(c)+" failed (WebGL error 0x"+J.mU(d,16)+")")
throw A.b(a)}a1=c
if(typeof a1!=="number"){q=a1.a2()
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
if(!J.Y(d,A.a(a0.WebGL2RenderingContext.NO_ERROR))){a=A.q("texture-array mip generation failed (WebGL error 0x"+J.mU(d,16)+")")
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
A.d(v.G.console).error("texture array load failed: "+A.w(b))
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
case 6:case 1:return A.bp(q,r)
case 2:return A.bo(o.at(-1),r)}})
return A.bq($async$bG,r)},
e0(a,b){var s=this.a,r=A.e(s.createShader(a))
r.toString
s.shaderSource(r,b)
s.compileShader(r)
if(!J.Y(A.bZ(s.getShaderParameter(r,A.a(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0))throw A.b(A.d7("shader compile failed: "+A.w(A.pl(s,"getShaderInfoLog",r,t.w))+"\n"+b))
return r},
ac(a,b){var s=v.G,r=this.e0(A.a(s.WebGL2RenderingContext.VERTEX_SHADER),a),q=this.e0(A.a(s.WebGL2RenderingContext.FRAGMENT_SHADER),b),p=this.a,o=A.e(p.createProgram())
o.toString
p.attachShader(o,r)
p.attachShader(o,q)
p.linkProgram(o)
if(!J.Y(A.bZ(p.getProgramParameter(o,A.a(s.WebGL2RenderingContext.LINK_STATUS))),!0))throw A.b(A.d7("program link failed: "+A.w(A.pl(p,"getProgramInfoLog",o,t.w))))
return o},
gfR(){var s=A.bZ(this.a.getParameter(A.a(v.G.WebGL2RenderingContext.MAX_SAMPLES)))
return typeof s=="number"?B.d.al(s):0},
de(a,b,c){var s,r,q,p,o,n=this.a,m=v.G
n.bindBuffer(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),a)
s=b.length*4
r=this.b
q=r.i(0,a)
if((q==null?0:q)<s){n.bufferData(A.a(m.WebGL2RenderingContext.ARRAY_BUFFER),b,A.a(m.WebGL2RenderingContext.DYNAMIC_DRAW))
r.k(0,a,s)}else if(c>0){m=A.a(m.WebGL2RenderingContext.ARRAY_BUFFER)
p=b.BYTES_PER_ELEMENT
o=A.el(0,c,B.c.hv(b.byteLength,p))*p
if(B.c.aa(o,4)!==0)A.m(A.z("The number of bytes to view must be a multiple of 4",null))
n.bufferSubData(m,0,J.qp(B.t.gj5(b),b.byteOffset+0*p,B.c.J(o,4)))}},
cc(a,b,c){var s,r,q,p,o=this.a,n=v.G
o.bindTexture(A.a(n.WebGL2RenderingContext.TEXTURE_2D),a)
s=A.a(n.WebGL2RenderingContext.TEXTURE_2D)
r=A.a(n.WebGL2RenderingContext.RGBA8)
q=A.a(n.WebGL2RenderingContext.RGBA)
p=A.a(n.WebGL2RenderingContext.UNSIGNED_BYTE)
A.aC(o,"texImage2D",[s,0,r,b,c,0,q,p,new Uint8Array(b*c*4)],t.H)
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(n.WebGL2RenderingContext.LINEAR))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))
o.texParameteri(A.a(n.WebGL2RenderingContext.TEXTURE_2D),A.a(n.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(n.WebGL2RenderingContext.CLAMP_TO_EDGE))},
c8(a,b,c,d,e){var s,r=this.a,q=A.e(r.createRenderbuffer())
q.toString
s=v.G
r.bindRenderbuffer(A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
if(c>0)A.aC(r,"renderbufferStorageMultisample",[A.a(s.WebGL2RenderingContext.RENDERBUFFER),c,d,a,b],t.H)
else r.renderbufferStorage(A.a(s.WebGL2RenderingContext.RENDERBUFFER),d,a,b)
r.framebufferRenderbuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),e,A.a(s.WebGL2RenderingContext.RENDERBUFFER),q)
return q},
e2(a,b,c){var s,r=this.a,q=A.e(r.createTexture())
q.toString
this.cc(q,a,b)
s=v.G
A.aC(r,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),c,A.a(s.WebGL2RenderingContext.TEXTURE_2D),q,0],t.H)
return q},
dG(a,b){var s,r,q=this.a,p=A.e(q.createTexture())
p.toString
s=v.G
q.bindTexture(A.a(s.WebGL2RenderingContext.TEXTURE_2D),p)
r=t.H
A.aC(q,"texStorage2D",[A.a(s.WebGL2RenderingContext.TEXTURE_2D),1,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),a,b],r)
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.a(s.WebGL2RenderingContext.NEAREST))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_S),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
q.texParameteri(A.a(s.WebGL2RenderingContext.TEXTURE_2D),A.a(s.WebGL2RenderingContext.TEXTURE_WRAP_T),A.a(s.WebGL2RenderingContext.CLAMP_TO_EDGE))
A.aC(q,"framebufferTexture2D",[A.a(s.WebGL2RenderingContext.FRAMEBUFFER),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.a(s.WebGL2RenderingContext.TEXTURE_2D),p,0],r)
return p},
d0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.e(h.createFramebuffer())
g.toString
s=v.G
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),g)
r=e>0
if(r){q=j.c8(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
p=d?j.c8(a,b,e,A.a(s.WebGL2RenderingContext.RGBA8),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
o=i
n=o}else{n=j.e2(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0))
o=d?j.e2(a,b,A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)):i
p=i
q=p}m=i
l=i
if(c)if(r)l=j.c8(a,b,e,A.a(s.WebGL2RenderingContext.DEPTH_COMPONENT24),A.a(s.WebGL2RenderingContext.DEPTH_ATTACHMENT))
else m=j.dG(a,b)
if(d)h.drawBuffers(A.i([A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
r=A.a(h.checkFramebufferStatus(A.a(s.WebGL2RenderingContext.FRAMEBUFFER)))
k=A.a(s.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
h.bindFramebuffer(A.a(s.WebGL2RenderingContext.FRAMEBUFFER),null)
if(r!==k)throw A.b(A.d7("framebuffer incomplete"))
return new A.hs(g,n,o,m,q,p,l,e,a,b)},
fQ(a,b,c,d){return this.d0(a,b,c,d,0)},
jR(a,b,c,d){return this.d0(a,b,!0,c,d)},
aw(a,b,c){return this.d0(a,b,c,!1,0)},
ca(a,b,c,d,e){var s,r,q
if(b==null)return
s=this.a
r=v.G
s.bindRenderbuffer(A.a(r.WebGL2RenderingContext.RENDERBUFFER),b)
q=a.w
if(q>0)A.aC(s,"renderbufferStorageMultisample",[A.a(r.WebGL2RenderingContext.RENDERBUFFER),q,c,d,e],t.H)
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
if(q!=null)n.cc(q,b,c)
if(p!=null)n.cc(p,b,c)
n.ca(a,a.e,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.ca(a,a.f,A.a(r.WebGL2RenderingContext.RGBA8),b,c)
n.ca(a,a.r,A.a(r.WebGL2RenderingContext.DEPTH_COMPONENT24),b,c)
o=a.d
if(o!=null){s.deleteTexture(o)
a.d=n.dG(b,c)}s.bindFramebuffer(A.a(r.WebGL2RenderingContext.FRAMEBUFFER),null)},
kc(a,b){var s,r,q="blitFramebuffer",p=this.a,o=v.G
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),a.a)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.DRAW_FRAMEBUFFER),b.a)
p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0))
s=t.n
p.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.NONE)],s))
r=t.H
A.aC(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
if(a.f!=null&&b.c!=null){p.readBuffer(A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1))
p.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.NONE),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
A.aC(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)}if((a.r!=null||a.d!=null)&&b.d!=null)A.aC(p,q,[0,0,a.x,a.y,0,0,b.x,b.y,A.a(o.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.a(o.WebGL2RenderingContext.NEAREST)],r)
p.drawBuffers(A.i([A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.a(o.WebGL2RenderingContext.COLOR_ATTACHMENT1)],s))
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
p.bindFramebuffer(A.a(o.WebGL2RenderingContext.FRAMEBUFFER),null)},
jb(a,b,c,d){var s,r,q=v.G,p=(A.a(q.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.a(q.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
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
A.jn.prototype={
$1(a){A.d(a)
return A.a(a.width)!==this.a||A.a(a.height)!==this.b},
$S:41}
A.fN.prototype={
dd(a,b){var s,r,q=this
q.$ti.c.a(a)
if((q.b+=b)<0.1)return
s=q.b=0
for(r=q.a;!1;++s)r[s].kz(a)}}
A.fP.prototype={
aj(a){if(this.f)return
A.oa(a,"requestPointerLock",t.X)},
il(a){A.d(a)
if(A.aA(a.repeat))return
if(this.b.m(0,A.B(a.code)))this.c.m(0,A.B(a.code))},
io(a){this.b.ai(0,A.B(A.d(a).code))},
is(a){var s=this
A.d(a)
if(!s.f)return
s.d=s.d+s.dO(a,"movementX")
s.e=s.e+s.dO(a,"movementY")},
iq(a){var s=this
A.d(a)
s.f=s.a.pointerLockElement!=null
s.e=s.d=0},
dO(a,b){var s=A.ph(a[b])
if(s==null)s=null
return s==null?0:s}}
A.h1.prototype={}
A.cC.prototype={
gdL(){var s=this,r=177573^s.a
r=((r<<5>>>0)+r^B.b.gD(B.c.dc(s.b,4)))>>>0
r=((r<<5>>>0)+r^B.b.gD(B.c.dc(s.c,4)))>>>0
return((r<<5>>>0)+r^s.d)&2147483647},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.cC&&A.il(r)===A.il(b)&&r.a===b.a&&r.b===b.b&&r.c===b.c&&r.d===b.d
else s=!0
return s},
gD(a){return this.gdL()}}
A.k6.prototype={
hB(a){var s,r,q
for(s=this.b,r=this.a,q=0;q<3;++q)s.k(0,r[q].gdL(),q)}}
A.dl.prototype={
d4(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n=this,m=n.b,l=n.a,k=l.length
if(m+84>k){s=new Float32Array(k*2)
B.t.hc(s,0,m,l)
n.a=s}r=b.Y(0,a).ap(d.Y(0,a)).ga1()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
m=A.et(n.a,n.b,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=f+g
m=A.et(n.a,m,b,r,q,p,o,0,1,l,h,0)
n.b=m
k=h+i
m=A.et(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=m
m=A.et(n.a,m,a,r,q,p,o,0,1,f,h,0)
n.b=m
l=A.et(n.a,m,c,r,q,p,o,0,1,l,k,0)
n.b=l
n.b=A.et(n.a,l,d,r,q,p,o,0,1,f,k,0)},
fX(a,b,c,d,e,f,g){return this.d4(a,b,c,d,e,0,f,0,g)},
aJ(a,b,c,d,e){return this.d4(a,b,c,d,e,0,1,0,1)}}
A.kB.prototype={
ie(){var s,r,q,p,o,n,m=this,l="#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}"
try{s=m.b
r=s.ac(l,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uDepth;\nuniform vec2 uDepthSize;\nuniform float uRadius;\nuniform float uBias;\nout vec4 oColor;\n\nvec3 reconstructPos(vec2 uv, float depth) {\n  vec2 ndc = uv * 2.0 - 1.0;\n  return vec3(ndc, depth);\n}\n\nfloat linearDepth(float z) {\n  return z;\n}\n\nvec3 reconstructNormal(vec2 uv, float depth) {\n  vec2 texel = 1.0 / uDepthSize;\n\n  float c = depth;\n  float r = texture(uDepth, uv + vec2(texel.x, 0.0)).r;\n  float u = texture(uDepth, uv + vec2(0.0, texel.y)).r;\n\n  float ddx = r - c;\n  float ddy = u - c;\n\n  vec3 normal = normalize(vec3(-ddx * uDepthSize.x, -ddy * uDepthSize.y, 1.0));\n  return normal;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n\n  if (depth >= 1.0) {\n    oColor = vec4(1.0);\n    return;\n  }\n\n  vec3 normal = reconstructNormal(vUv, depth);\n  vec2 texel = 1.0 / uDepthSize;\n\n  float occlusion = 0.0;\n  float sampleRadius = uRadius * texel.x;\n\n  const float angles[8] = float[](\n    0.0,\n    0.785398,\n    1.570796,\n    2.356194,\n    3.141593,\n    3.926991,\n    4.712389,\n    5.497787\n  );\n\n  for (int i = 0; i < 8; i++) {\n    float angle = angles[i];\n    vec2 offset = vec2(cos(angle), sin(angle)) * sampleRadius;\n    vec2 sampleUv = vUv + offset;\n\n    float sampleDepth = texture(uDepth, sampleUv).r;\n    float depthDiff = depth - sampleDepth;\n\n    if (depthDiff > uBias && depthDiff < sampleRadius * 100.0) {\n      occlusion += 1.0;\n    }\n  }\n\n  float ao = 1.0 - (occlusion / 8.0);\n  oColor = vec4(vec3(ao), 1.0);\n}\n")
m.w!==$&&A.u()
m.w=r
q=s.ac(l,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\n\nvoid main() {\n  vec4 c = texture(uTex, vUv) * 0.5;\n  c += texture(uTex, vUv + uDir) * 0.25;\n  c += texture(uTex, vUv - uDir) * 0.25;\n  oColor = c;\n}")
m.x!==$&&A.u()
m.x=q
p=m.c
o=A.e(p.getUniformLocation(r,"uDepth"))
m.y!==$&&A.u()
m.y=o
o=A.e(p.getUniformLocation(r,"uDepthSize"))
m.z!==$&&A.u()
m.z=o
o=A.e(p.getUniformLocation(r,"uRadius"))
m.Q!==$&&A.u()
m.Q=o
r=A.e(p.getUniformLocation(r,"uBias"))
m.as!==$&&A.u()
m.as=r
r=A.e(p.getUniformLocation(q,"uTex"))
m.at!==$&&A.u()
m.at=r
q=A.e(p.getUniformLocation(q,"uDir"))
m.ax!==$&&A.u()
m.ax=q
m.d=s.aw(m.ay,m.ch,!1)
m.e=s.aw(m.ay,m.ch,!1)
m.f=s.aw(m.ay,m.ch,!1)
p=A.e(p.createVertexArray())
p.toString
m.CW!==$&&A.u()
m.CW=p}catch(n){m.f=m.e=m.d=null}},
ig(){var s
try{this.r=this.b.aw(384,216,!1)}catch(s){this.r=null}},
ka(a,b){var s,r,q,p,o=this,n=o.d,m=o.e,l=o.f
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
A.kK.prototype={
c_(a,b,c){var s,r,q
try{r=this.a.ac(b,c)
return r}catch(q){s=A.ac(q)
r=A.d7(a+": "+A.w(s))
throw A.b(r)}}}
A.kD.prototype={}
A.eF.prototype={}
A.i5.prototype={}
A.i_.prototype={}
A.hY.prototype={}
A.kF.prototype={
hC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=u.l,f=A.i([new A.cC(0,0,1,0),new A.cC(1,0,1,0),new A.cC(2,0,1,0)],t.mm),e=t.S
e=new A.k6(f,A.t(e,e))
e.hB(f)
h.cT=e
h.fj=1.9
h.cJ=h.av/h.au
r=J.fU(6,t.fH)
for(q=0;q<6;++q)r[q]=new A.eF()
t.cu.a(r)
f=h.ad
e=f.ac("#version 300 es\nlayout(location=0) in vec3 aPos;\nlayout(location=1) in vec4 aColor;\nlayout(location=2) in float aAlpha;\nlayout(location=3) in vec3 aNormal;\nlayout(location=4) in vec3 aUv;\n// Instance attributes for model matrix (instancing support)\nlayout(location=5) in vec4 aModelRow0;\nlayout(location=6) in vec4 aModelRow1;\nlayout(location=7) in vec4 aModelRow2;\nlayout(location=8) in vec4 aModelRow3;\nlayout(location=9) in vec4 aMaterialTint;\nuniform vec3 uEye,uFwd,uUp,uRight,uLight,uLightColor;\nuniform float uScale,uAspect,uDepthNear,uDepthFar,uAmbient,uDiffuse;\nuniform float uAffineTexture;\nuniform vec2 uInternal;\nuniform mat4 uModel;\nuniform bool uInstanced;\nuniform mat4 uLightProj0,uLightProj1,uLightProj2;\nuniform int uPointLightCount;\nuniform vec3 uPointLightPos[4],uPointLightColor[4];\nuniform float uPointLightRadius[4],uPointLightIntensity[4];\nout float vDepth;\nout vec4 vColor;\nout float vAlpha;\nout vec3 vNormal;\nout highp vec3 vUv;\nout float vW;\nout vec3 vLight;\nout vec3 vWorldPos;\nout vec4 vShadowCoord[3];\nout vec4 vMaterialTint;\nvoid main(){\n  mat4 model = uInstanced ? mat4(aModelRow0, aModelRow1, aModelRow2, aModelRow3) : uModel;\n\n  vec3 worldPos=vec3(model*vec4(aPos,1.0));\n  vec3 p=worldPos-uEye;\n  vec3 worldNormal=normalize(vec3(model*vec4(aNormal,0.0)));\n  float depth=dot(p,uFwd);\n  float z=(depth-uDepthNear)/(uDepthFar-uDepthNear)*2.0-1.0;\n  gl_Position=vec4(dot(p,uRight)*uScale*uAspect,dot(p,uUp)*uScale,z*depth,depth);\n  if(uInternal.x>0.0){\n    vec2 g=uInternal;\n    gl_Position.xy=floor(gl_Position.xy/gl_Position.w*g+0.5)/g*gl_Position.w;\n  }\n  vDepth=depth;\n  vColor=aColor;\n  vAlpha=aAlpha;\n  vNormal=worldNormal;\n  vUv=mix(aUv,aUv*gl_Position.w,uAffineTexture);\n  vW=mix(1.0,gl_Position.w,uAffineTexture);\n  vWorldPos=worldPos;\n  vMaterialTint=uInstanced?aMaterialTint:vec4(0.0,1.0,1.0,1.0);\n  vShadowCoord[0]=uLightProj0*vec4(worldPos,1.0);\n  vShadowCoord[1]=uLightProj1*vec4(worldPos,1.0);\n  vShadowCoord[2]=uLightProj2*vec4(worldPos,1.0);\n  float ndl=max(0.0,dot(worldNormal,uLight));\n  vLight=vec3(uAmbient)+uLightColor*(uDiffuse*ndl);\n  for(int i=0;i<4;i++){\n    if(i>=uPointLightCount)break;\n    vec3 toLight=uPointLightPos[i]-worldPos;\n    float distanceToLight=length(toLight);\n    if(distanceToLight>0.0001&&distanceToLight<uPointLightRadius[i]){\n      float pointNdl=max(0.0,dot(worldNormal,toLight/distanceToLight));\n      float falloff=1.0-distanceToLight/uPointLightRadius[i];\n      vLight+=uPointLightColor[i]*(uPointLightIntensity[i]*pointNdl*falloff*falloff);\n    }\n  }\n}\n","#version 300 es\nprecision mediump float;\nprecision mediump sampler2DArray;\nin float vDepth;\nin vec4 vColor;\nin float vAlpha;\nin vec3 vNormal;\nin highp vec3 vUv;\nin float vW;\nin vec3 vLight;\nin vec3 vWorldPos;\nin vec4 vShadowCoord[3];\nin vec4 vMaterialTint;\nuniform vec3 uFog;\nuniform sampler2D uWall,uGlass,uSoft,uNoise;\nuniform sampler2DArray uMaterialAlbedo;\nuniform sampler2D uShadow0,uShadow1,uShadow2;\nuniform float uFogStart,uFogEnd,uFlicker,uBloomThreshold;\nuniform float uColorQuantize;\nuniform float uWallOn,uWallMid,uWallAmt,uWallScale,uGlassOn,uGlassGain,uGlassFog,uSoftOn,uNoiseOn;\nuniform float uShadowCasters;\nuniform vec3 uShadowBias;\nuniform bool uInstanced;\nuniform int uMaterialCount;\nuniform int uStaticMaterial;\nuniform float uMaterialEmissive[32];\nuniform float uMaterialUvScale[32];\nuniform int uMaterialLayer[32];\nuniform int uMaterialFlags[32];\nlayout(location=0) out vec4 oColor;\nlayout(location=1) out vec4 oGlow;\nvec3 quantizeColor(vec3 c){\n  if(uColorQuantize<0.5)return clamp(c,0.0,1.0);\n  float n=0.0;\n  if(uNoiseOn>0.0){\n    n=(texture(uNoise,(gl_FragCoord.xy/64.0)).r-0.5)*0.04;\n  }\n  vec3 q=round((c*31.0+n*31.0))/31.0;\n  return clamp(q,0.0,1.0);\n}\nstruct MaterialProps{\n  float emissive;\n  float uvScale;\n  int layer;\n  int flags;\n};\nMaterialProps getMaterialProps(int idx){\n  MaterialProps p;\n  if(idx>=0&&idx<uMaterialCount){\n    p.emissive=uMaterialEmissive[idx];\n    p.uvScale=uMaterialUvScale[idx];\n    p.layer=uMaterialLayer[idx];\n    p.flags=uMaterialFlags[idx];\n  }else{\n    p.emissive=0.0;\n    p.uvScale=1.0;\n    p.layer=0;\n    p.flags=0;\n  }\n  return p;\n}\nfloat sampleShadow(sampler2D shadowTex,vec4 shadowCoord,vec3 normal){\n  vec3 projCoords=shadowCoord.xyz/shadowCoord.w;\n  projCoords=projCoords*0.5+0.5;\n  if(projCoords.z>1.0||projCoords.x<0.0||projCoords.x>1.0||projCoords.y<0.0||projCoords.y>1.0)return 1.0;\n  float closestDepth=texture(shadowTex,projCoords.xy).r;\n  float currentDepth=projCoords.z;\n  float bias=uShadowBias.x+uShadowBias.y*abs(dFdy(currentDepth));\n  return currentDepth-bias>closestDepth?0.0:1.0;\n}\nvoid main(){\n  vec3 uv=vUv/vW;\n  if(uv.z>1.5){\n    float m=uSoftOn>0.0?texture(uSoft,uv.xy).r\n                       :max(0.0,1.0-2.0*length(uv.xy-vec2(0.5)));\n    if(uv.z>3.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c,m*vAlpha);\n      oGlow=vec4(c*step(uBloomThreshold,vColor.a),m*vAlpha);\n      return;\n    }\n    if(uv.z>2.5){\n      vec3 c=quantizeColor(vColor.rgb);\n      oColor=vec4(c*m*vAlpha,0.0);\n      oGlow=vec4(0.0);\n      return;\n    }\n  }\n  float shadow=1.0;\n  if(uShadowCasters>0.5)shadow=min(shadow,sampleShadow(uShadow0,vShadowCoord[0],vNormal));\n  if(uShadowCasters>1.5)shadow=min(shadow,sampleShadow(uShadow1,vShadowCoord[1],vNormal));\n  if(uShadowCasters>2.5)shadow=min(shadow,sampleShadow(uShadow2,vShadowCoord[2],vNormal));\n  vec3 c=vColor.rgb*vLight*shadow;\n  int materialIndex=uInstanced?int(vMaterialTint.x+0.5):uStaticMaterial;\n  MaterialProps material=getMaterialProps(materialIndex);\n  if(uInstanced){\n    c*=vMaterialTint.yzw;\n  }\n  if(materialIndex>=0&&materialIndex<uMaterialCount){\n    c*=texture(uMaterialAlbedo,vec3(uv.xy*material.uvScale,float(material.layer))).rgb;\n  }\n  float a=vAlpha;\n  float fog=smoothstep(uFogStart,uFogEnd,vDepth);\n  if(uv.z>1.5){\n    if(uGlassOn>0.0){\n      vec4 g=texture(uGlass,uv.xy);\n      c=vColor.rgb*g.rgb*uGlassGain;\n      a*=g.a;\n      fog*=uGlassFog;\n    }\n  }else if(uv.z>0.5&&uWallOn>0.0){\n    c*=1.0+(texture(uWall,uv.xy*uWallScale*material.uvScale).r-uWallMid)*uWallAmt;\n  }\n  c+=vColor.rgb*material.emissive;\n  c=mix(c,uFog,fog);\n  if(vColor.a>0.0) c*=1.0+vColor.a*uFlicker;\n  c=quantizeColor(c);\n  oColor=vec4(c,a);\n  oGlow=vec4(c*step(uBloomThreshold,vColor.a),a);\n}\n")
p=f.ac(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex,uBloom,uNoise,uLut,uDepth,uSSAO;\nuniform vec2 uNoiseOff;\nuniform float uTime,uFlash,uVignette,uGrain,uDesat,uBloomStrength,uBlur,uNoiseOn,uLutOn,uLutMix,uDepthViz,uSSAOStrength;\nout vec4 oColor;\nvec3 slice(float s,vec2 rg){\n  return texture(uLut,vec2((s*16.0+rg.x*15.0+0.5)/256.0,(rg.y*15.0+0.5)/16.0)).rgb;\n}\nvoid main(){\n  vec4 c=texture(uTex,vUv);\n  if(uDepthViz>0.0){\n    float d=texture(uDepth,vUv).r;\n    c=vec4(vec3(d),1.0);\n  }else if(uBlur>0.0){\n    vec2 d=(vec2(0.5)-vUv)*uBlur;\n    for(int i=1;i<6;i++) c+=texture(uTex,vUv+d*(float(i)/6.0));\n    c/=6.0;\n  }\n  float v=1.0-uVignette*dot(vUv-0.5,vUv-0.5);\n  c.rgb*=v;\n  float lum=dot(c.rgb,vec3(0.299,0.587,0.114));\n  c.rgb=mix(c.rgb,vec3(lum),uDesat*(1.0-lum));\n  float g;\n  if(uNoiseOn>0.0){\n    g=texelFetch(uNoise,(ivec2(gl_FragCoord.xy)+ivec2(uNoiseOff))%64,0).r*2.0-1.0;\n  }else{\n    g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+uTime)*43758.5453)*2.0-1.0;\n  }\n  c.rgb+=g*uGrain;\n  c.rgb+=texture(uBloom,vUv).rgb*uBloomStrength;\n  if(uLutOn>0.0){\n    vec3 q=clamp(c.rgb,0.0,1.0);\n    float b=q.b*15.0;\n    float s0=floor(b);\n    c.rgb=mix(c.rgb,mix(slice(s0,q.rg),slice(min(s0+1.0,15.0),q.rg),b-s0),uLutMix);\n  }\n  float ssao=texture(uSSAO,vUv).r;\n  c.rgb*=mix(1.0,ssao,uSSAOStrength);\n  if(uFlash>0.0){\n    c.r=texture(uTex,vUv+vec2(0.004*uFlash,0.0)).r;\n    c.b=texture(uTex,vUv-vec2(0.004*uFlash,0.0)).b;\n    c.rgb*=1.0-0.5*uFlash;\n  }\n  oColor=c;\n}\n")
o=f.ac(g,"#version 300 es\nprecision mediump float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform vec2 uDir;\nout vec4 oColor;\nvoid main(){\n  float w[5]=float[](0.227,0.194,0.121,0.054,0.016);\n  vec4 c=texture(uTex,vUv)*w[0];\n  for(int i=1;i<5;i++){\n    vec2 o=uDir*float(i);\n    c+=texture(uTex,vUv+o)*w[i];\n    c+=texture(uTex,vUv-o)*w[i];\n  }\n  oColor=c;\n}\n")
n=f.ac(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex, uDepth;\nuniform float uFocusDistance, uDofBlurScale, uBlurRadius, uDofStrength;\nuniform vec2 uTexel;\nout vec4 oColor;\n\nvec4 sampleBlur(vec2 uv, float radius) {\n  if (radius < 0.01) return texture(uTex, uv);\n  float w[5] = float[](0.227, 0.194, 0.121, 0.054, 0.016);\n  vec4 c = texture(uTex, uv) * w[0];\n  for (int i = 1; i < 5; i++) {\n    vec2 o = uTexel * float(i) * radius;\n    c += texture(uTex, uv + o) * w[i];\n    c += texture(uTex, uv - o) * w[i];\n  }\n  return c;\n}\n\nvoid main() {\n  float depth = texture(uDepth, vUv).r;\n  float coc = abs(depth - uFocusDistance) * uDofBlurScale;\n  coc = clamp(coc, 0.0, uBlurRadius);\n  coc *= uDofStrength;\n  oColor = sampleBlur(vUv, coc);\n}\n")
m=f.ac(g,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform sampler2D uNoise;\nuniform float uTime;\nuniform vec2 uTexelSize;\nuniform vec2 uNoiseOff;\n\nuniform bool uChromaLuma;\nuniform bool uChromaLag;\nuniform bool uTapeNoise;\nuniform bool uHeadSwitch;\nuniform bool uTracking;\nuniform bool uDropouts;\nuniform bool uGhosting;\n\nuniform float uChromaBlurI;\nuniform float uChromaBlurQ;\nuniform float uChromaLagAmount;\nuniform float uNoiseScale;\nuniform float uHeadSwitchHeight;\nuniform float uHeadSwitchJitter;\nuniform float uJitterAmount;\nuniform float uJitterFreq;\nuniform float uDropoutRate;\nuniform float uGhostAmount;\nuniform float uGhostOffset;\n\nuniform sampler2D uGhostTarget;\nuniform bool uHasGhost;\n\nout vec4 oColor;\n\nvec3 rgbToYiq(vec3 rgb) {\n  return vec3(\n    0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b,\n    0.596 * rgb.r - 0.274 * rgb.g - 0.322 * rgb.b,\n    0.211 * rgb.r - 0.523 * rgb.g + 0.312 * rgb.b\n  );\n}\n\nvec3 yiqToRgb(vec3 yiq) {\n  return vec3(\n    yiq.r + 0.956 * yiq.g + 0.621 * yiq.b,\n    yiq.r - 0.272 * yiq.g - 0.647 * yiq.b,\n    yiq.r - 1.106 * yiq.g + 1.703 * yiq.b\n  );\n}\n\nfloat hash(vec2 p) {\n  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nfloat smoothHash(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  float a = hash(i);\n  float b = hash(i + vec2(1.0, 0.0));\n  float c = hash(i + vec2(0.0, 1.0));\n  float d = hash(i + vec2(1.0, 1.0));\n  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 base = texture(uTex, uv);\n  vec3 col = base.rgb;\n\n  float ny = float(uv.y * 216.0);\n\n  if (uChromaLuma || uChromaLag) {\n    vec3 yiq = rgbToYiq(col);\n    float y = yiq.r;\n    float i = yiq.g;\n    float q = yiq.b;\n\n    if (uChromaLuma) {\n      float yBlur = uChromaBlurI * 0.1;\n      float cBlur = uChromaBlurI;\n\n      float samples = 0.0;\n      float iSum = 0.0;\n      float qSum = 0.0;\n      for (float x = -cBlur; x <= cBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        iSum += sampleYiq.g;\n        qSum += sampleYiq.b;\n        samples += 1.0;\n      }\n      i = iSum / samples;\n      q = qSum / samples;\n\n      float ySamples = 0.0;\n      float ySum = 0.0;\n      for (float x = -yBlur; x <= yBlur; x += 1.0) {\n        vec3 sampleYiq = rgbToYiq(texture(uTex, uv + vec2(x * uTexelSize.x, 0.0)).rgb);\n        ySum += sampleYiq.r;\n        ySamples += 1.0;\n      }\n      y = ySum / ySamples;\n    }\n\n    if (uChromaLag) {\n      float lagPixels = uChromaLagAmount;\n      vec2 lagUv = uv + vec2(lagPixels * uTexelSize.x, 0.0);\n      vec3 lagYiq = rgbToYiq(texture(uTex, lagUv).rgb);\n      i = mix(i, lagYiq.g, 0.7);\n      q = mix(q, lagYiq.b, 0.3);\n    }\n\n    yiq = vec3(y, i, q);\n    col = yiqToRgb(yiq);\n  }\n\n  if (uTapeNoise) {\n    vec2 noiseCoord = gl_FragCoord.xy + uNoiseOff;\n    float noise = texture(uNoise, fract(noiseCoord / 64.0)).r;\n    noise = noise * 2.0 - 1.0;\n    float lum = dot(col, vec3(0.299, 0.587, 0.114));\n    float noiseBias = (1.0 - lum) * uNoiseScale * 0.3;\n    col += vec3(noise * noiseBias);\n  }\n\n  float scanline = floor(ny);\n\n  if (uHeadSwitch) {\n    float headSwitchStart = 214.0;\n    if (ny >= headSwitchStart) {\n      float headDist = ny - headSwitchStart;\n      if (headDist < uHeadSwitchHeight) {\n        float jitter = smoothHash(vec2(scanline + uTime * 3.0, 0.5)) - 0.5;\n        float offset = (jitter * 2.0 - 1.0) * uHeadSwitchJitter;\n        vec2 shiftedUv = uv + vec2(offset * uTexelSize.x, 0.0);\n        col = texture(uTex, shiftedUv).rgb;\n        col *= (1.0 - headDist / uHeadSwitchHeight) * 0.9 + 0.1;\n      }\n    }\n  }\n\n  if (uTracking) {\n    float jitterNoise = smoothHash(vec2(scanline, uTime * uJitterFreq)) - 0.5;\n    float jitterOffset = jitterNoise * uJitterAmount;\n\n    float bandNoise = smoothHash(vec2(uTime * 0.5, floor(ny / 16.0)));\n    if (bandNoise > 0.85) {\n      float bandPhase = fract(uTime * 0.3);\n      jitterOffset += (bandPhase * 2.0 - 1.0) * uJitterAmount * 2.0;\n    }\n\n    vec2 jitteredUv = uv + vec2(jitterOffset * uTexelSize.x, 0.0);\n    col = texture(uTex, jitteredUv).rgb;\n  }\n\n  if (uDropouts) {\n    float dropoutChance = hash(vec2(floor(ny / 4.0), floor(uTime * 10.0)));\n    if (dropoutChance < uDropoutRate) {\n      float dropoutPhase = fract(uTime * 200.0);\n      if (dropoutPhase < 0.05 + hash(vec2(ny, uTime)) * 0.1) {\n        col = vec3(1.0);\n      }\n    }\n  }\n\n  if (uGhosting && uHasGhost) {\n    vec2 ghostUv = uv + vec2(uGhostOffset * uTexelSize.x, 0.0);\n    vec3 ghost = texture(uGhostTarget, ghostUv).rgb;\n    col = mix(col, ghost, uGhostAmount);\n  }\n\n  oColor = vec4(col, base.a);\n}\n")
h.a_!==$&&A.u()
h.a_=new A.kK(f,e,p,o,n,m)
h.b=t.d4.a(new A.kG(h))
h.dX()
h.dW()
o=h.a7
p=A.e(o.getUniformLocation(m,"uTex"))
h.eO!==$&&A.u()
h.eO=p
p=A.e(o.getUniformLocation(m,"uNoise"))
h.eP!==$&&A.u()
h.eP=p
p=A.e(o.getUniformLocation(m,"uTime"))
h.eu!==$&&A.u()
h.eu=p
p=A.e(o.getUniformLocation(m,"uTexelSize"))
h.es!==$&&A.u()
h.es=p
p=A.e(o.getUniformLocation(m,"uNoiseOff"))
h.ev!==$&&A.u()
h.ev=p
p=A.e(o.getUniformLocation(m,"uChromaLuma"))
h.ew!==$&&A.u()
h.ew=p
p=A.e(o.getUniformLocation(m,"uChromaLag"))
h.ex!==$&&A.u()
h.ex=p
p=A.e(o.getUniformLocation(m,"uTapeNoise"))
h.ey!==$&&A.u()
h.ey=p
p=A.e(o.getUniformLocation(m,"uHeadSwitch"))
h.ez!==$&&A.u()
h.ez=p
p=A.e(o.getUniformLocation(m,"uTracking"))
h.eA!==$&&A.u()
h.eA=p
p=A.e(o.getUniformLocation(m,"uDropouts"))
h.eB!==$&&A.u()
h.eB=p
p=A.e(o.getUniformLocation(m,"uGhosting"))
h.eC!==$&&A.u()
h.eC=p
p=A.e(o.getUniformLocation(m,"uChromaBlurI"))
h.eD!==$&&A.u()
h.eD=p
p=A.e(o.getUniformLocation(m,"uChromaBlurQ"))
h.eE!==$&&A.u()
h.eE=p
p=A.e(o.getUniformLocation(m,"uChromaLagAmount"))
h.eF!==$&&A.u()
h.eF=p
p=A.e(o.getUniformLocation(m,"uNoiseScale"))
h.eG!==$&&A.u()
h.eG=p
p=A.e(o.getUniformLocation(m,"uHeadSwitchHeight"))
h.eH!==$&&A.u()
h.eH=p
p=A.e(o.getUniformLocation(m,"uHeadSwitchJitter"))
h.eI!==$&&A.u()
h.eI=p
p=A.e(o.getUniformLocation(m,"uJitterAmount"))
h.eJ!==$&&A.u()
h.eJ=p
p=A.e(o.getUniformLocation(m,"uJitterFreq"))
h.eK!==$&&A.u()
h.eK=p
p=A.e(o.getUniformLocation(m,"uDropoutRate"))
h.eL!==$&&A.u()
h.eL=p
p=A.e(o.getUniformLocation(m,"uGhostAmount"))
h.eM!==$&&A.u()
h.eM=p
p=A.e(o.getUniformLocation(m,"uGhostOffset"))
h.eN!==$&&A.u()
h.eN=p
p=A.e(o.getUniformLocation(m,"uGhostTarget"))
h.eQ!==$&&A.u()
h.eQ=p
m=A.e(o.getUniformLocation(m,"uHasGhost"))
h.eR!==$&&A.u()
h.eR=m
m=A.e(o.getUniformLocation(n,"uTex"))
h.cL!==$&&A.u()
h.cL=m
m=A.e(o.getUniformLocation(n,"uDepth"))
h.cM!==$&&A.u()
h.cM=m
m=A.e(o.getUniformLocation(n,"uFocusDistance"))
h.cN!==$&&A.u()
h.cN=m
m=A.e(o.getUniformLocation(n,"uDofBlurScale"))
h.cO!==$&&A.u()
h.cO=m
m=A.e(o.getUniformLocation(n,"uBlurRadius"))
h.cP!==$&&A.u()
h.cP=m
m=A.e(o.getUniformLocation(n,"uDofStrength"))
h.cQ!==$&&A.u()
h.cQ=m
n=A.e(o.getUniformLocation(n,"uTexel"))
h.cR!==$&&A.u()
h.cR=n
n=A.aA(A.d(A.d(v.G.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
h.aZ!==$&&A.u()
h.aZ=n
h.sfP(16777215)
n=new A.kV(o,f,A.i([],t.aA),A.i([],t.df),A.i([],t.cC),A.i([],t.kS))
m=n.c=f.ac("#version 300 es\nin vec3 aPos;\nin vec3 aNormal;\nuniform mat4 uLightProj;\nuniform mat4 uModel;\nout float vDepth;\n\nvoid main(){\n  vec3 worldPos=vec3(uModel*vec4(aPos,1.0));\n  vec4 lightPos=uLightProj*vec4(worldPos,1.0);\n  gl_Position=lightPos;\n  vDepth=lightPos.z/lightPos.w;\n}\n","#version 300 es\nprecision highp float;\nin float vDepth;\n\nvoid main(){\n  gl_FragDepth=vDepth*0.5+0.5;\n}\n")
n.d=A.e(o.getUniformLocation(m,"uLightProj"))
n.e=A.e(o.getUniformLocation(m,"uModel"))
h.cS!==$&&A.u()
h.cS=n
n=new A.kB(f,o)
n.ie()
n.ig()
h.br!==$&&A.u()
h.br=n
n=f.a
m=A.e(n.createBuffer())
m.toString
h.ck!==$&&A.u()
h.ck=m
p=A.e(n.createBuffer())
p.toString
h.cl!==$&&A.u()
h.cl=p
n=A.e(n.createBuffer())
n.toString
h.cm!==$&&A.u()
h.cm=n
e=A.e(o.createVertexArray())
e.toString
h.cn!==$&&A.u()
h.cn=e
l=A.e(o.createVertexArray())
l.toString
h.co!==$&&A.u()
h.co=l
k=A.e(o.createVertexArray())
k.toString
h.cp!==$&&A.u()
h.cp=k
j=A.e(o.createVertexArray())
j.toString
h.cq!==$&&A.u()
h.cq=j
o.bindVertexArray(e)
h.bX(m)
o.bindVertexArray(l)
h.bX(p)
o.bindVertexArray(k)
h.bX(n)
o.bindVertexArray(null)
try{h.bw=f.fQ(384,216,!0,!0)}catch(i){h.bw=null}s=4<f.gfR()?4:f.gfR()
e=s
if(typeof e!=="number")return e.X()
if(e>1)try{h.aY=f.jR(h.au,h.av,!0,s)}catch(i){h.aY=null}try{h.ar=f.fQ(h.au,h.av,!0,!0)}catch(i){h.aY=h.ar=null}if(h.ar!=null)try{h.bt=f.aw(h.gbd(),h.gbc(),!1)
h.bu=f.aw(h.gbd(),h.gbc(),!1)
h.bv=f.aw(h.au,h.av,!1)}catch(i){h.bv=h.bu=h.bt=null}},
gbd(){var s=B.c.J(this.au,4)
return s<1?1:s},
gbc(){var s=B.c.J(this.av,4)
return s<1?1:s},
b4(a){return this.jQ(t.G.a(a))},
jQ(a){var s=0,r=A.br(t.H),q=this,p,o,n,m,l,k,j
var $async$b4=A.bs(function(b,c){if(b===1)return A.bo(c,r)
for(;;)switch(s){case 0:p=new A.R(a,A.n(a).h("R<1,2>")).gt(0),o=q.ad
case 2:if(!p.l()){s=3
break}n=p.d
m=n.a
l=B.aK.i(0,m)
if(l==null){s=2
break}k=n.b
s=4
return A.an(o.bF(k,l,!1,!1,!1,m==="grime"),$async$b4)
case 4:if(c!=null)q.dI(m,l)
s=2
break
case 3:p=t.lS
j=A.U(new A.bm(new A.a3(A.i(["wall-plaster","floor-linoleum","ceiling-stained"],t.s),t.ej.a(new A.kH(a)),t.dD),p),p.h("l.E"))
s=j.length===3?5:6
break
case 5:s=7
return A.an(o.bG(j,12,!1),$async$b4)
case 7:q.bq=c
case 6:return A.bp(null,r)}})
return A.bq($async$b4,r)},
aL(){var s=0,r=A.br(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$aL=A.bs(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
i=t.N
n=A.t(i,i)
h=["world.vert","world.frag","post.vert","blur.frag","post.frag"],g=v.G,f=t.m,e=0
case 6:if(!(e<5)){s=8
break}m=h[e]
q=10
s=13
return A.an(A.bu(A.d(A.d(g.window).fetch("shaders/"+A.w(m))),f),$async$aL)
case 13:l=a3
if(!A.aA(l.ok)){i=A.d7("HTTP "+A.w(A.nI(l,"status",t.S)))
throw A.b(i)}a=J
a0=n
a1=m
s=14
return A.an(A.bu(A.d(l.text()),i),$async$aL)
case 14:a.bv(a0,a1,a3)
q=3
s=12
break
case 10:q=9
c=p.pop()
k=A.ac(c)
i=A.d7("shaders/"+A.w(m)+": fetch failed - "+A.w(k))
throw A.b(i)
s=12
break
case 9:s=3
break
case 12:case 7:++e
s=6
break
case 8:o.ix(n)
q=1
s=5
break
case 3:q=2
b=p.pop()
j=A.ac(b)
A.d(v.G.console).error("shader reload failed: "+A.w(j))
s=5
break
case 2:s=1
break
case 5:return A.bp(null,r)
case 1:return A.bo(p.at(-1),r)}})
return A.bq($async$aL,r)},
ix(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="post.vert"
t.G.a(a)
try{q=i.a_
q===$&&A.h()
p=a.i(0,"world.vert")
p.toString
o=a.i(0,"world.frag")
o.toString
n=q.c_("world.vert/world.frag",p,o)
o=a.i(0,h)
o.toString
p=a.i(0,"post.frag")
p.toString
m=q.c_("post.vert/post.frag",o,p)
p=a.i(0,h)
p.toString
o=a.i(0,"blur.frag")
o.toString
l=q.c_("post.vert/blur.frag",p,o)
q.b=n
q.c=m
q.d=l
i.dX()
i.dW()
q=i.ep
q=A.U(q,A.n(q).c)
p=q.length
k=0
for(;k<q.length;q.length===p||(0,A.v)(q),++k){s=q[k]
o=B.aK.i(0,s)
o.toString
i.dI(s,o)}A.d(v.G.console).log("shaders recompiled successfully")}catch(j){r=A.ac(j)
A.d(v.G.console).error("shader recompile failed: "+A.w(r))}},
dW(){var s=this,r=s.a7,q=s.a_
q===$&&A.h()
s.fk=A.e(r.getUniformLocation(q.c,"uTex"))
s.fl=A.e(r.getUniformLocation(q.c,"uTime"))
s.fm=A.e(r.getUniformLocation(q.c,"uFlash"))
s.fn=A.e(r.getUniformLocation(q.c,"uVignette"))
s.fo=A.e(r.getUniformLocation(q.c,"uGrain"))
s.fp=A.e(r.getUniformLocation(q.c,"uDesat"))
s.fq=A.e(r.getUniformLocation(q.c,"uBloom"))
s.fs=A.e(r.getUniformLocation(q.c,"uBloomStrength"))
s.fB=A.e(r.getUniformLocation(q.c,"uNoiseOff"))
s.fE=A.e(r.getUniformLocation(q.c,"uLutMix"))
s.fv=A.e(r.getUniformLocation(q.c,"uDepth"))
s.fw=A.e(r.getUniformLocation(q.c,"uDepthViz"))
s.eq=A.e(r.getUniformLocation(q.c,"uSSAO"))
s.er=A.e(r.getUniformLocation(q.c,"uSSAOStrength"))
s.fz=A.e(r.getUniformLocation(q.c,"uNoise"))
s.fA=A.e(r.getUniformLocation(q.c,"uNoiseOn"))
s.fC=A.e(r.getUniformLocation(q.c,"uLut"))
s.fD=A.e(r.getUniformLocation(q.c,"uLutOn"))
s.ft=A.e(r.getUniformLocation(q.d,"uTex"))
s.cK=A.e(r.getUniformLocation(q.d,"uDir"))
s.fu=A.e(r.getUniformLocation(q.c,"uBlur"))},
dI(a,b){var s,r,q,p=this
p.ep.m(0,a)
switch(a){case"bluenoise":s=p.a_
s===$&&A.h()
s=s.c
r=p.fz
r===$&&A.h()
q=p.fA
q===$&&A.h()
p.aT(s,r,q,b)
break
case"lut-gothic":s=p.a_
s===$&&A.h()
s=s.c
r=p.fC
r===$&&A.h()
q=p.fD
q===$&&A.h()
p.aT(s,r,q,b)
break
case"grime":s=p.a_
s===$&&A.h()
s=s.b
r=p.RG
r===$&&A.h()
q=p.rx
q===$&&A.h()
p.aT(s,r,q,b)
break
case"glass":s=p.a_
s===$&&A.h()
s=s.b
r=p.x2
r===$&&A.h()
q=p.xr
q===$&&A.h()
p.aT(s,r,q,b)
break
case"soft":s=p.a_
s===$&&A.h()
s=s.b
r=p.f6
r===$&&A.h()
q=p.f7
q===$&&A.h()
p.aT(s,r,q,b)
break}},
aT(a,b,c,d){var s=this.a7
s.useProgram(a)
s.uniform1i(b,d)
s.uniform1f(c,1)},
sfP(a){var s=A.mk(a)
this.eZ=s.a
this.f_=s.b
this.f0=s.c},
ce(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=17976931348623157e292,a0=-17976931348623157e292,a1=a2.length
if(B.c.aa(a1,14)!==0)throw A.b(A.z("static mesh needs a multiple of 14 floats, got "+a1,null))
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
b.dv(56)
a1.bindBuffer(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),d)
a1.bufferData(A.a(c.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),f,A.a(c.WebGL2RenderingContext.STATIC_DRAW))
a1.bindVertexArray(null)
a1=b.jv++
b.cu.k(0,a1,new A.i5(e,d,i,s,s,a3))
return a1},
jn(a){var s,r,q,p=this,o=p.cu.i(0,a)
if(o==null)return
p.dP()
s=p.f4
r=p.f5
if(s!==r)p.dY(r)
s=p.a7
r=p.dy
r===$&&A.h()
s.uniform1i(r,0)
r=p.cI
r===$&&A.h()
s.uniform1i(r,o.r)
s.bindVertexArray(o.c)
r=o.d
q=v.G
if(r>0)s.drawElements(A.a(q.WebGL2RenderingContext.TRIANGLES),r,A.a(q.WebGL2RenderingContext.UNSIGNED_SHORT),0)
else s.drawArrays(A.a(q.WebGL2RenderingContext.TRIANGLES),0,o.e);++p.b_},
jC(a){var s,r=this.cu.ai(0,a)
if(r==null)return
s=this.a7
s.deleteBuffer(r.a)
s.deleteBuffer(r.b)
s.deleteVertexArray(r.c)},
dP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.cv)return
c.cv=!0
s=c.a7
r=c.a_
r===$&&A.h()
s.useProgram(r.b)
r=c.as
r===$&&A.h()
q=c.f2
s.uniform3f(r,q.a,q.b,q.c)
q=c.at
q===$&&A.h()
r=c.cA
s.uniform3f(q,r.a,r.b,r.c)
r=c.ax
r===$&&A.h()
q=c.cB
s.uniform3f(r,q.a,q.b,q.c)
q=c.ay
q===$&&A.h()
r=c.cC
s.uniform3f(q,r.a,r.b,r.c)
r=c.ch
r===$&&A.h()
s.uniform1f(r,c.fj)
r=c.CW
r===$&&A.h()
s.uniform1f(r,c.cJ)
r=c.cx
r===$&&A.h()
s.uniform1f(r,0.1)
r=c.cy
r===$&&A.h()
s.uniform1f(r,60)
r=c.db
r===$&&A.h()
q=c.eS?1:0
s.uniform1f(r,q)
q=c.fr
q===$&&A.h()
s.uniform3f(q,c.cD/255*0.25,c.cE/255*0.25,c.cF/255*0.25)
q=c.fx
q===$&&A.h()
r=c.eY
s.uniform3f(q,r.a,r.b,r.c)
r=c.fy
r===$&&A.h()
s.uniform3f(r,c.eZ,c.f_,c.f0)
r=c.go
r===$&&A.h()
s.uniform1f(r,1.5)
r=c.id
r===$&&A.h()
s.uniform1f(r,14)
r=c.k1
r===$&&A.h()
s.uniform1f(r,c.f1)
r=c.k2
r===$&&A.h()
s.uniform1f(r,0.45)
r=c.k3
r===$&&A.h()
s.uniform1i(r,c.cz.length)
for(r=c.k4,q=c.ok,p=c.p1,o=c.p2,n=0;n<4;++n){m=c.cz
l=m.length
if(n<l){if(!(n<l))return A.c(m,n)
k=m[n]}else k=null
if(k==null){if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],0)
continue}j=A.mk(k.b)
m=c.aZ
m===$&&A.h()
i=m?1:1+(A.mO(c.cG*8,27229+n)*2-1)*k.e
if(!(n<r.length))return A.c(r,n)
m=r[n]
l=k.a
s.uniform3f(m,l.a,l.b,l.c)
if(!(n<q.length))return A.c(q,n)
s.uniform3f(q[n],j.a,j.b,j.c)
if(!(n<p.length))return A.c(p,n)
s.uniform1f(p[n],k.c)
if(!(n<o.length))return A.c(o,n)
s.uniform1f(o[n],k.d*i)}r=c.aZ
r===$&&A.h()
q=r?1:1+(A.mO(c.cG*2.5,40503)*2-1)*0
c.js=q
p=c.p3
p===$&&A.h()
s.uniform1f(p,q)
q=c.p4
q===$&&A.h()
s.uniform1f(q,0.15)
q=c.R8
q===$&&A.h()
p=c.eU?1:0
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
q=c.eT
h=q?384:0
g=q?216:0
q=c.cr
p=q.a
if(p===B.a3){f=B.d.Z(q.b/1.5,0,1)
e=1-f*(r?0.4:0.8)
h*=e
g*=e}else if(p.a>3){h=0
g=0}r=c.f8
r===$&&A.h()
s.uniform2f(r,h,g)
r=c.cS
r===$&&A.h()
q=c.fc
q===$&&A.h()
s.uniform1f(q,0)
q=c.fd
q===$&&A.h()
s.uniform3f(q,0.0015,0.005,0)
q=c.f9
q===$&&A.h()
if(q!=null)r.bL(0)
q=c.fa
q===$&&A.h()
if(q!=null)r.bL(1)
q=c.fb
q===$&&A.h()
if(q!=null)r.bL(2)
r.bM(0)
r.bM(1)
r.bM(2)
r=c.fe
r===$&&A.h()
if(c.bq==null)q=0
else{c.cT===$&&A.h()
q=3}s.uniform1i(r,q)
if(c.bq!=null){r=v.G
s.activeTexture(A.a(r.WebGL2RenderingContext.TEXTURE0)+12)
s.bindTexture(A.a(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY),c.bq)
r=c.cH
r===$&&A.h()
s.uniform1i(r,12)}r=c.fi
q=c.fh
p=c.fg
o=c.ff
n=0
for(;;){m=c.cT
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
if(m!=null)s.uniform1i(m,d.d);++n}c.dY(c.f5)
r=c.dy
r===$&&A.h()
s.uniform1i(r,0)
r=c.cI
r===$&&A.h()
s.uniform1i(r,0)
r=v.G
s.enable(A.a(r.WebGL2RenderingContext.DEPTH_TEST))
s.depthMask(!0)
s.disable(A.a(r.WebGL2RenderingContext.BLEND))},
dY(a){var s
this.f4=a
s=this.dx
s===$&&A.h()
this.a7.uniformMatrix4fv(s,!1,a.a)},
iJ(a){var s,r,q,p,o,n,m
for(s=this.eW,r=this.eV,q=1;q<a;++q){if(!(q<800))return A.c(s,q)
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
iI(a){var s,r,q,p,o,n,m,l
for(s=this.eX,r=this.cw,q=1;q<a;++q){if(!(q<4000))return A.c(s,q)
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
jB(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.cr=b4
s=b2.b0
r=0
if(s>0){for(s=b2.eX,q=0;p=b2.b0,q<p;++q)B.a.k(s,q,q)
b2.iI(p)
for(p=b2.cw,o=b2.cs,n=0;n<b2.b0;++n){if(!(n<4000))return A.c(s,n)
m=s[n]
if(!(m<p.length))return A.c(p,m)
l=p[m]
r=A.pB(o,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}}else for(s=b2.cw,p=b2.cs,q=0;q<b2.b0;++q){if(!(q<s.length))return A.c(s,q)
l=s[q]
r=A.pB(p,r,l.a,l.b,l.c,l.d,l.e,!1,1,l.f,l.r,l.w,l.x)}b2.b0=0
for(s=b2.eW,q=0;p=b2.bx,q<p;++q)B.a.k(s,q,q)
b2.iJ(p)
for(p=b2.jt,o=b2.eV,k=0,n=0;n<b2.bx;++n){if(!(n<800))return A.c(s,n)
m=s[n]
if(!(m<o.length))return A.c(o,m)
j=o[m]
i=A.mk(0)
m=j.b
h=b2.cC
g=h.a*0
f=h.b*0
h=h.c*0
e=b2.cB
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
e=[new A.j(a-d,a1-c,a2-e),new A.j(g-d,f-c,h-e),new A.j(g+d,f+c,h+e),new A.j(a+d,a1+c,a2+e)]
a3=e[0]
a4=e[1]
a5=e[2]
a6=e[3]
e=b2.cA
k=A.pE(p,k,a3,a4,a5,a6,new A.j(e.a*-1,e.b*-1,e.c*-1),i.a,i.b,i.c,0,1,0,0,0,1,1)}b2.bx=0
s=b2.ad
o=b2.ck
o===$&&A.h()
s.de(o,b2.cs,r)
o=b2.cl
o===$&&A.h()
s.de(o,p,k)
b2.dP()
p=b2.a7
o=b2.dy
o===$&&A.h()
p.uniform1i(o,0)
o=b2.cn
o===$&&A.h()
p.bindVertexArray(o)
o=v.G
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.J(r,14));++b2.b_
p.depthMask(!1)
p.enable(A.a(o.WebGL2RenderingContext.BLEND))
p.blendFunc(A.a(o.WebGL2RenderingContext.SRC_ALPHA),A.a(o.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA))
m=b2.co
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,B.c.J(k,14));++b2.b_
m=b2.ct
if(m>0){h=b2.cm
h===$&&A.h()
s.de(h,b2.ju,m)
p.blendFunc(A.a(o.WebGL2RenderingContext.ONE),A.a(o.WebGL2RenderingContext.ONE))
m=b2.cp
m===$&&A.h()
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,b2.ct/14|0);++b2.b_}m=b2.bw
if(m!=null){a7=b2.ar
if(a7!=null)s.kc(m,a7)}a8=b2.ar
if(a8==null)return
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
m=b2.cq
m===$&&A.h()
p.bindVertexArray(m)
a3=b2.bt
a4=b2.bu
a9=a8.c
h=a3==null
if(!h&&a4!=null&&a9!=null){g=b2.a_
g===$&&A.h()
p.useProgram(g.d)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
g=b2.ft
g===$&&A.h()
p.uniform1i(g,0)
s.ag(a4)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a9)
g=b2.cK
g===$&&A.h()
p.uniform2f(g,1/a4.x,0)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)
s.ag(a3)
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a4.b)
p.uniform2f(b2.cK,0,1/a4.y)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}a6=b2.bv
if(b2.bs>0&&a6!=null){s.ag(a6)
g=b2.a_
g===$&&A.h()
p.useProgram(g.e)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.b)
g=b2.cL
g===$&&A.h()
p.uniform1i(g,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
g=b2.cM
g===$&&A.h()
p.uniform1i(g,7)
g=b2.cN
g===$&&A.h()
p.uniform1f(g,0.03171953255425709)
g=b2.cO
g===$&&A.h()
p.uniform1f(g,1)
g=b2.cP
g===$&&A.h()
p.uniform1f(g,0.5)
g=b2.cQ
g===$&&A.h()
p.uniform1f(g,b2.bs)
g=b2.cR
g===$&&A.h()
p.uniform2f(g,1/b2.au,1/b2.av)
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}g=b2.br
g===$&&A.h()
b0=g.ka(a8,0.5)
s.ag(null)
s=b2.a_
s===$&&A.h()
p.useProgram(s.c)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE1))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
g=h?null:a3.b
p.bindTexture(s,g)
g=b2.fq
g===$&&A.h()
p.uniform1i(g,1)
g=b2.fs
g===$&&A.h()
s=h?0:0.9
p.uniform1f(g,s)
s=b2.fu
s===$&&A.h()
b2.aZ===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE7))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),a8.d)
s=b2.fv
s===$&&A.h()
p.uniform1i(s,7)
s=b2.fw
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE11))
p.bindTexture(A.a(o.WebGL2RenderingContext.TEXTURE_2D),b0)
s=b2.eq
s===$&&A.h()
p.uniform1i(s,11)
s=b2.er
s===$&&A.h()
p.uniform1f(s,0)
p.activeTexture(A.a(o.WebGL2RenderingContext.TEXTURE0))
s=A.a(o.WebGL2RenderingContext.TEXTURE_2D)
h=a6!=null&&b2.bs>0?a6.b:a8.b
p.bindTexture(s,h)
h=b2.fk
h===$&&A.h()
p.uniform1i(h,0)
h=b2.cG+=b3;++b2.f3
s=b2.fl
s===$&&A.h()
p.uniform1f(s,h)
h=b2.fB
h===$&&A.h()
s=b2.f3
p.uniform2f(h,B.c.aa(s*13,64),B.c.aa(s*29,64))
s=b2.fm
s===$&&A.h()
p.uniform1f(s,0)
s=b2.fn
s===$&&A.h()
p.uniform1f(s,0)
s=b2.fo
s===$&&A.h()
p.uniform1f(s,0)
s=b2.fp
s===$&&A.h()
p.uniform1f(s,0)
s=b2.cr
if(s.a===B.N)b1=0*(1-s.b/1)
else b1=0
s=b2.fE
s===$&&A.h()
p.uniform1f(s,b1)
p.disable(A.a(o.WebGL2RenderingContext.DEPTH_TEST))
p.disable(A.a(o.WebGL2RenderingContext.BLEND))
p.bindVertexArray(m)
p.drawArrays(A.a(o.WebGL2RenderingContext.TRIANGLES),0,3)}}
A.kG.prototype={
$0(){var s=this.a.a_
s===$&&A.h()
return s.b},
$S:43}
A.kH.prototype={
$1(a){return this.a.i(0,A.B(a))},
$S:17}
A.lw.prototype={
giU(){var s=this.b
s===$&&A.h()
return s},
dX(){var s,r,q,p,o,n,m=this,l=m.iV(),k=m.a
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
B.a.F(s)
r=m.ok
B.a.F(r)
q=m.p1
B.a.F(q)
p=m.p2
B.a.F(p)
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
m.f6=A.e(k.getUniformLocation(l,"uSoft"))
m.f7=A.e(k.getUniformLocation(l,"uSoftOn"))
m.f8=A.e(k.getUniformLocation(l,"uInternal"))
m.f9=A.e(k.getUniformLocation(l,"uLightProj0"))
m.fa=A.e(k.getUniformLocation(l,"uLightProj1"))
m.fb=A.e(k.getUniformLocation(l,"uLightProj2"))
m.jw=A.e(k.getUniformLocation(l,"uShadow0"))
m.jx=A.e(k.getUniformLocation(l,"uShadow1"))
m.jy=A.e(k.getUniformLocation(l,"uShadow2"))
m.fc=A.e(k.getUniformLocation(l,"uShadowCasters"))
m.cH=A.e(k.getUniformLocation(l,"uMaterialAlbedo"))
m.cI=A.e(k.getUniformLocation(l,"uStaticMaterial"))
m.fd=A.e(k.getUniformLocation(l,"uShadowBias"))
m.fe=A.e(k.getUniformLocation(l,"uMaterialCount"))
s=m.ff
B.a.F(s)
r=m.fg
B.a.F(r)
q=m.fh
B.a.F(q)
p=m.fi
B.a.F(p)
for(o=0;o<32;++o){n=""+o
B.a.m(s,A.e(k.getUniformLocation(l,"uMaterialEmissive["+n+"]")))
B.a.m(r,A.e(k.getUniformLocation(l,"uMaterialUvScale["+n+"]")))
B.a.m(q,A.e(k.getUniformLocation(l,"uMaterialLayer["+n+"]")))
B.a.m(p,A.e(k.getUniformLocation(l,"uMaterialFlags["+n+"]")))}k.useProgram(l)
k.uniform1i(m.cH,12)},
bX(a){this.a.bindBuffer(A.a(v.G.WebGL2RenderingContext.ARRAY_BUFFER),a)
this.dv(56)},
dv(a){var s=this,r=s.c
r===$&&A.h()
s.aU(r,3,a,0)
r=s.f
r===$&&A.h()
s.aU(r,3,a,12)
r=s.d
r===$&&A.h()
s.aU(r,4,a,24)
r=s.e
r===$&&A.h()
s.aU(r,1,a,40)
r=s.r
r===$&&A.h()
s.aU(r,3,a,44)},
aU(a,b,c,d){var s=this.a
A.aC(s,"vertexAttribPointer",[a,b,A.a(v.G.WebGL2RenderingContext.FLOAT),!1,c,d],t.H)
s.enableVertexAttribArray(a)},
iV(){return this.giU().$0()}}
A.kV.prototype={
bL(a){return null},
bM(a){return null}}
A.j.prototype={
a2(a,b){return new A.j(this.a+b.a,this.b+b.b,this.c+b.c)},
Y(a,b){return new A.j(this.a-b.a,this.b-b.b,this.c-b.c)},
W(a,b){return new A.j(this.a*b,this.b*b,this.c*b)},
aX(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.j(s*r-q*p,q*o-n*r,n*p-s*o)},
gq(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga1(){var s=this,r=s.gq(0)
return r<1e-9?new A.j(0,0,0):new A.j(s.a/r,s.b/r,s.c/r)}}
A.iJ.prototype={
kt(a){var s,r,q,p,o,n=B.p.aE(a.B(),null)
this.a.el(n)
s=A.d(A.d(v.G.window).localStorage)
r=A.bc(s.getItem("quarantine.save.active"))
q=A.bc(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
k7(a){var s,r,q,p,o,n
t.hK.a(a)
try{s=A.d(A.d(v.G.window).localStorage)
r=A.bc(s.getItem("quarantine.save.active"))
q=A.bc(s.getItem("quarantine.save.previous"))
p=this.dF(r,a)
if(p!=null)return new A.cH(p,null)
o=this.dF(q,a)
if(o!=null)return new A.cH(o,"recovered previous save")
if(r==null)return B.dc
return B.db}catch(n){return B.da}},
dF(a,b){var s,r,q
t.hK.a(b)
if(a==null)return null
try{s=this.a.el(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.ac(q) instanceof A.F)return null
else throw q}}}
A.fD.prototype={
hx(a,b,c,d,e){if(this.a.length===0)throw A.b(B.c5)
if(this.b<0)throw A.b(B.bT)},
B(){var s,r=this,q=r.d
q=q==null?null:A.af(q,t.i)
s=t.z
return A.d4(A.J(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.b1.prototype={
v(){return"EndingKind."+this.b}}
A.iZ.prototype={}
A.d6.prototype={
B(){var s=t.N
return A.J(["kind",this.a.b],s,s)}}
A.j1.prototype={
$1(a){return t.no.a(a).b===this.a.i(0,"kind")},
$S:45}
A.hd.prototype={
B(){var s,r=this,q=t.N,p=A.t(q,t.z)
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
jJ(a){var s,r=this.a
if(a.e.i(0,r)==null)return!1
s=this.b.Y(0,new A.j(0,1.3499999999999999,0))
return!new A.fo(s,s.a2(0,new A.j(0,1.2000000000000002,0))).fN(a,r)}}
A.km.prototype={
B(){return A.ii(this.a)}}
A.di.prototype={
B(){return A.J(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.kR.prototype={
el(a){var s,r,q,p,o,n,m,l=B.p.em(a,null),k=t.f
if(!k.b(l))throw A.b(B.c9)
s=t.N
r=t.z
q=A.ax(l,s,r)
p=q.i(0,"version")
if(A.aB(p))o=p!==1&&p!==2
else o=!0
if(o)A.m(A.a8("unsupported save version "+A.w(p),null,null))
n=q.i(0,"run")
m=q.i(0,"meta")
if(!k.b(n)||!k.b(m))A.m(B.bV)
k=A.ax(n,s,r)
return A.ot(A.ax(m,s,r),k,2)}}
A.cH.prototype={}
A.cv.prototype={
v(){return"GameSessionEventType."+this.b}}
A.fI.prototype={}
A.jj.prototype={}
A.ji.prototype={
gam(){var s=this.d
return new A.jj(s.a,s.b)},
gfV(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.J(["day",l.a,"hour",l.b],k,t.o)
s=m.f
r=t.K
s=A.J(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.J(["entryCount",m.e.b.a],k,t.S)
p=A.o6(m.c).B()
o=m.r
n=o.c
return new A.km(A.ii(A.J(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.J(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r)],k,t.z)))},
iY(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.aD(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.bi(B.cf)}if(n<a)this.bi(B.cg)},
ho(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.bQ(a)&&s.hn(b)},
k9(a){var s,r,q
t.ee.a(a)
for(s=a.length,r=this.r,q=0;q<s;++q)if(a[q].a===B.ba)r.c=Math.min(1,r.c+0.1)},
hm(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.qK(j,A.af(i.d,h).length)
if(a===B.b0)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.M(r)
A.qJ(j,new A.H(r,q.h("r(1)").a(new A.jk(k)),q.h("H<1>")).gq(0))
r=k.f
q=r.b
if(B.a.u(B.cF,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.d.ak(j.a/1*3)
B.a.m(r.r,new A.dj(q.a,a,b))
m=r.a
A.qV(m,q.a,n,k.b,A.af(m.d,h));++q.a
q.b=6
r.c=16
r.d=6
r.f=!1
m.he(B.cM)
s.r.jd(o,c)
l=B.d.ak(j.b/1*6)
if(l>0)r.bQ(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.aw(i,A.n(i).h("aw<2>")).ab(0,new A.jl())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.bi(B.ci)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.bi(B.ch)},
bi(a){var s=this;++s.y
B.a.m(s.w,new A.fI())
B.a.m(s.x,A.qL(A.u1(a),s.b,s.y-1))}}
A.jk.prototype={
$1(a){t.k.a(a)
return a.e.length!==0&&!new A.kW().hj(this.a.c,a.a)},
$S:46}
A.jl.prototype={
$1(a){return t.L.a(a).e},
$S:16}
A.fo.prototype={
kf(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null){n.d=null
return}s=c.d
r=A.M(s)
q=new A.H(s,r.h("r(1)").a(new A.iL(e)),r.h("H<1>"))
p=!q.gt(0).l()?null:q.gaG(0)
if(p==null){n.d=null
return}if(!(n.bh(b,p.f)&&a==="hall"))o=n.bh(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.hL(p,B.d.Z(d,0,1))},
jT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f!=null)return g.dN(f,c,d)
s=g.i7(a,b,c,d)
if(s!=null){g.d=s
return g.dN(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.d.j8(Math.sqrt(r*r+q*q)/0.08))
o=d.W(0,1/p)
for(r=o.c,q=o.a,n=b,m=c,l=!1,k=0;k<p;++k){j=g.e6(a,n,m,new A.j(q,0,0))
l=l||j.b
i=g.fU(a,n)
n=i==null?n:i
h=g.e6(a,n,j.a,new A.j(0,0,r))
l=l||h.b
m=h.a
i=g.fU(a,n)
n=i==null?n:i}g.bl(m)
return new A.h2(m,n)},
i7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=d.c,n=o<0,o=o>0,m=0;m<r;++m){l=s[m]
k=p&&this.bh(c,l.f)&&n
j=q&&this.bh(c,l.r)&&o
if(k||j)return new A.hL(l,k?0:1)}return null},
dN(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.Y(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.d.Z(a.b+o/p,0,1)
n=A.oE(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bl(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.h2(n,k)},
bh(a,b){var s=a.Y(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=0.6400000000000001},
e6(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.eC(c,!1)
s=c.a2(0,d)
this.bl(s)
if(this.fN(a,b)){this.bl(c)
return new A.eC(c,!0)}return new A.eC(s,!1)},
bl(a){var s=a.Y(0,new A.j(0,1.3499999999999999,0))
this.a=s
this.b=s.a2(0,new A.j(0,1.2000000000000002,0))},
fN(a,b){var s,r,q,p,o,n,m=a.e.i(0,b)
if(m==null)return!0
s=a.aD(m)
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
return!this.iL(a,m,s)},
fU(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.i(0,b)
if(k==null)return null
s=a.aD(k)
for(r=k.a,q=a.b6(r),p=J.I(q.a),q=new A.P(p,q.b,q.$ti.h("P<1>"));q.l();){o=p.gp()
n=o.fS(r)
m=!1
if(n!=null)if(l.i(0,n)!=null)if(!o.as)o=o.at&&!o.ax&&!o.z&&this.eb(k,o,s)&&this.i1(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
iL(a,b,c){var s,r,q
for(s=a.b6(b.a),r=J.I(s.a),s=new A.P(r,s.b,s.$ti.h("P<1>"));s.l();){q=r.gp()
if(q.at&&!q.ax&&!q.z&&this.eb(b,q,c))return!0}return!1},
eb(a,b,c){var s,r,q,p=a.a,o=b.aF(p),n=b.az(p)
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
i1(a,b,c){var s,r=this
switch(b.aF(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
sj2(a){this.a=t.mz.a(a)}}
A.iL.prototype={
$1(a){return t.fO.a(a).a===this.a},
$S:48}
A.h2.prototype={}
A.eC.prototype={}
A.hL.prototype={}
A.dZ.prototype={}
A.jw.prototype={
jd(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.c(B.r,r)
s=B.r[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
hk(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.r,q)
p=B.r[q]
if(p.b===a)r+=p.c}return r},
hl(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.c(B.r,q)
p=B.r[q]
if(p.b===a)r+=p.d}return r},
B(){return A.J(["landedCount",this.b],t.N,t.z)}}
A.kN.prototype={
hE(a,b){var s,r,q,p,o=this,n=o.a
o.c!==$&&A.u()
o.c=new A.jx(n)
for(n=n.b,s=n.length,r=o.d,q=0;q<n.length;n.length===s||(0,A.v)(n),++q){p=n[q]
r.k(0,p.a,o.dw(p))}},
k8(a){var s,r,q,p,o,n=this,m=n.a.e.i(0,a)
if(m==null)return
s=n.d
r=s.i(0,a)
if(r!=null)for(q=r.length,p=n.b,o=0;o<r.length;r.length===q||(0,A.v)(r),++o)p.jC(r[o])
s.k(0,a,n.dw(m))},
dw(a){var s,r=new A.dl(new Float32Array(5376)),q=new A.dl(new Float32Array(5376)),p=new A.dl(new Float32Array(5376)),o=a.d,n=this.a.aD(a),m=o.a,l=o.b,k=o.c,j=n.c,i=k+j,h=n.a,g=m+h
h/=2
j/=2
r.fX(new A.j(m,l,k),new A.j(m,l,i),new A.j(g,l,i),new A.j(g,l,k),11053224,h,j)
l+=n.b
q.fX(new A.j(m,l,k),new A.j(g,l,k),new A.j(g,l,i),new A.j(m,l,i),12632256,h,j)
for(s=0;s<4;++s)this.hL(p,a,n,B.cS[s])
m=this.b
return A.i([m.ce(B.t.b8(r.a,0,r.b),1),m.ce(B.t.b8(q.a,0,q.b),2),m.ce(B.t.b8(p.a,0,p.b),0)],t.t)},
hL(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a3===B.i||a3===B.k?a2.a:a2.c,a=A.i([],t.jX)
for(s=a1.a,r=this.a.b6(s),q=J.I(r.a),r=new A.P(q,r.b,r.$ti.h("P<1>"));r.l();){p=q.gp()
if(!p.as&&p.aF(s)===a3)a.push(new A.ch(p.az(s),p.az(s)+p.w,0,p.x))}for(s=a1.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
if(n.b===a3){q=n.c
p=n.d
a.push(new A.ch(q,q+n.e,p,p+n.f))}}s=t.i
r=A.bJ([0,b],s)
for(q=a.length,p=t.n,o=0;o<a.length;a.length===q||(0,A.v)(a),++o){m=a[o]
r.M(0,A.i([m.a,m.b],p))}l=A.U(r,r.$ti.c)
B.a.a3(l)
s=A.bJ([0,a2.b],s)
for(r=a.length,o=0;o<a.length;a.length===r||(0,A.v)(a),++o){m=a[o]
s.M(0,A.i([m.c,m.d],p))}k=A.U(s,s.$ti.c)
B.a.a3(k)
for(j=0;i=j+1,i<l.length;j=i)for(h=0;g=h+1,s=k.length,g<s;h=g){r=l.length
if(!(j<r))return A.c(l,j)
f=l[j]
if(!(i<r))return A.c(l,i)
e=l[i]
if(!(h<s))return A.c(k,h)
d=k[h]
c=k[g]
if(B.a.ab(a,new A.kO(f,e,d,c)))continue
this.iT(a0,a1,a2,a3,f,e,d,c)}},
iT(a,b,c,d,e,f,g,h){var s,r,q,p=null,o=b.d,n=o.a,m=o.b,l=o.c
o=d.a
switch(o){case 0:s=new A.j(n+e,m+g,l)
break
case 2:s=new A.j(n+f,m+g,l+c.c)
break
case 1:s=new A.j(n+c.a,m+h,l+f)
break
case 3:s=new A.j(n,m+h,l+e)
break
default:s=p}switch(o){case 0:r=new A.j(n+f,m+g,l)
break
case 2:r=new A.j(n+e,m+g,l+c.c)
break
case 1:r=new A.j(n+c.a,m+h,l+e)
break
case 3:r=new A.j(n,m+h,l+f)
break
default:r=p}switch(o){case 0:q=new A.j(n+f,m+h,l)
break
case 2:q=new A.j(n+e,m+h,l+c.c)
break
case 1:q=new A.j(n+c.a,m+g,l+e)
break
case 3:q=new A.j(n,m+g,l+f)
break
default:q=p}switch(o){case 0:o=new A.j(n+e,m+h,l)
break
case 2:o=new A.j(n+f,m+h,l+c.c)
break
case 1:o=new A.j(n+c.a,m+g,l+f)
break
case 3:o=new A.j(n,m+g,l+e)
break
default:o=p}a.d4(s,r,q,o,9145227,e/2,(f-e)/2,g/2,(h-g)/2)},
h8(a){var s,r,q,p,o,n=this.a,m=n.e,l=m.i(0,a)
if(l==null)return B.f
s=l.a
r=A.bJ([s],t.N)
for(n=n.b6(s),q=J.I(n.a),n=new A.P(q,n.b,n.$ti.h("P<1>"));n.l();){p=q.gp()
o=p.fS(s)
if(!(p.at&&!p.ax&&!p.z)||o==null||m.i(0,o)==null)continue
r.m(0,o)}return r},
jm(a,b){var s,r,q,p,o=this,n=o.h8(a),m=o.b,l=o.c
l===$&&A.h()
l=t.b3.a(l.kq(n,b))
s=t.D
m.cz=l.length<=4?A.af(l,s):A.af(A.l2(l,0,A.cY(4,"count",t.S),A.M(l).c),s)
for(l=n.gt(n),s=o.d;l.l();){r=s.i(0,l.gp())
if(r==null)continue
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.v)(r),++p)m.jn(r[p])}}}
A.kO.prototype={
$1(a){var s,r,q=this
t.fg.a(a)
s=(q.a+q.b)*0.5
r=(q.c+q.d)*0.5
return s>a.a&&s<a.b&&r>a.c&&r<a.d},
$S:49}
A.ch.prototype={}
A.ct.prototype={
v(){return"FocusKind."+this.b}}
A.d8.prototype={}
A.jv.prototype={
ic(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
n=o.a
if(q.V(n))throw A.b(A.q("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){m=s[p]
n=m.a
if(q.V(n))throw A.b(A.q("duplicate portal "+n))
q.k(0,n,m)}},
iR(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
iQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=A.t(t.N,t.ge)
for(s=a5.b,r=s.length,q=a5.f,p=0;p<s.length;s.length===r||(0,A.v)(s),++p){o=s[p]
for(n=o.e,m=n.length,l=o.a,k=0;k<n.length;n.length===m||(0,A.v)(n),++k){j=n[k]
i=j.b
h=j.c
g=j.e
f=j.d
e=j.f
a5.ea(o,i,h,g,f,e)
a5.ds(a6,l,i,h,h+g,f,f+e)}for(n=o.f,m=n.length,k=0;k<n.length;n.length===m||(0,A.v)(n),++k){d=n[k]
c=q.i(0,d)
if(c!=null)i=!(c.b===l||c.c===l)
else i=!0
if(i)throw A.b(A.q(l+" references invalid portal "+d))
i=c.aF(l)
h=c.az(l)
g=c.w
f=c.x
a5.ea(o,i,h,g,0,f)
a5.ds(a6,l,c.aF(l),c.az(l),c.az(l)+g,0,f)}}for(s=new A.R(a6,a6.$ti.h("R<1,2>")).gt(0);s.l();){b=s.d
a=b.b
r=J.bt(a)
r.T(a,new A.jB())
for(a0=0;a0<r.gq(a);a0=a1)for(a1=a0+1,a2=a1;a2<r.gq(a);++a2){a3=r.i(a,a0).a[0]<r.i(a,a2).a[1]&&r.i(a,a2).a[0]<r.i(a,a0).a[1]
a4=r.i(a,a0).a[2]<r.i(a,a2).a[3]&&r.i(a,a2).a[2]<r.i(a,a0).a[3]
if(a3&&a4)throw A.b(A.q("overlapping apertures on "+b.a))}}},
ea(a,b,c,d,e,f){var s,r=!0
if(!(c<0))if(!(d<=0)){r=b===B.i||b===B.k
s=a.c
r=r?s.a:s.c
r=c+d>r||e<0||f<=0||e+f>s.b}if(r)throw A.b(A.q("aperture outside "+a.a+" "+b.b+" wall"))},
ds(a,b,c,d,e,f,g){J.fc(t.gz.a(a).k6(b+":"+c.b,new A.jA()),new A.eQ([d,e,f,g]))},
aD(a){var s=a.c,r=this.r,q=a.a
return new A.j(s.a+r.hk(q),s.b+r.hl(q),s.c)},
b6(a){var s=this.c,r=A.M(s)
return new A.H(s,r.h("r(1)").a(new A.jC(a)),r.h("H<1>"))},
k5(a,b){var s,r,q,p,o=this.e.i(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.aD(a,"roomId","not a portal endpoint"))
r=this.aD(o)
q=b.az(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aF(a).a){case 0:s=new A.j(s.a+q,p,s.c)
break
case 2:s=new A.j(s.a+q,p,s.c+r.c)
break
case 1:s=new A.j(s.a+r.a,p,s.c+q)
break
case 3:s=new A.j(s.a,p,s.c+q)
break
default:s=null}return s},
gks(){return B.a.fF(this.b,0,new A.jD(),t.S)}}
A.jB.prototype={
$2(a,b){var s=t.cW
s.a(a)
s.a(b)
return B.d.G(a.a[0],b.a[0])},
$S:50}
A.jA.prototype={
$0(){return A.i([],t.a3)},
$S:51}
A.jC.prototype={
$1(a){var s
t.gm.a(a)
s=this.a
return a.b===s||a.c===s},
$S:52}
A.jD.prototype={
$2(a,b){return A.a(a)+t.k.a(b).e.length},
$S:53}
A.j2.prototype={}
A.kW.prototype={
hj(a,b){var s,r=a.e.i(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a5(s,new A.kX())}else s=!1
return s}}
A.kX.prototype={
$1(a){return t.hE.a(a).w},
$S:54}
A.bx.prototype={}
A.jx.prototype={
kq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.C.a(a)
s=A.i([],t.bz)
for(r=a.gt(a),q=this.a.e;r.l();){p=q.i(0,r.gp())
if(p==null)continue
for(o=p.r,n=o.length,m=p.d,l=m.a,k=m.b,m=m.c,j=p.a,i=0;i<o.length;o.length===n||(0,A.v)(o),++i){h=o[i]
if(!h.d||h.e)continue
g=h.c
B.a.m(s,new A.bx(new A.j(l+g.a,k+g.b,m+g.c),16760178,4.8,1.6*this.iD(j),0.06))}}B.a.T(s,new A.jy(b))
return A.l2(s,0,A.cY(4,"count",t.S),t.D).aN(0)},
iD(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0
break A}return s}}
A.jy.prototype={
$2(a,b){var s=t.D
s.a(a)
s.a(b)
s=this.a
return B.d.G(a.a.Y(0,s).gq(0),b.a.Y(0,s).gq(0))},
$S:83}
A.c2.prototype={
v(){return"Facing."+this.b}}
A.az.prototype={}
A.cE.prototype={
fS(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aF(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.aD(a,"roomId","not an endpoint of "+s.a))},
az(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.aD(a,"roomId","not an endpoint of "+s.a))}}
A.aH.prototype={}
A.cJ.prototype={}
A.ar.prototype={}
A.jz.prototype={
B(){var s,r,q,p,o,n=this,m=t.N,l=t.oP,k=A.t(m,l)
for(s=n.a,s=new A.R(s,A.n(s).h("R<1,2>")).gt(0),r=t.y;s.l();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.J(["open",o.a,"locked",o.b],m,r))}l=A.t(m,l)
for(s=n.c,s=new A.R(s,A.n(s).h("R<1,2>")).gt(0);s.l();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.J(["lit",o.a,"examined",o.b],m,r))}return A.J(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
j0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a_(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)d.m(0,s[q].a)
r=A.a_(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.v)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.v)(n),++l)r.m(0,n[l].a)
e=A.a_(e)
for(q=0;q<p.length;p.length===n||(0,A.v)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.v)(o),++l)e.m(0,o[l].a)
o=f.a
n=!0
if(A.nz(new A.a5(o,A.n(o).h("a5<1>")),d)){d=f.b
if(A.nz(new A.a5(d,A.n(d).h("a5<1>")),r)){d=f.c
e=!A.nz(new A.a5(d,A.n(d).h("a5<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.c1)
e=f.d
if(e<0||e>2)A.m(B.bQ)
a.r.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.v)(s),++q){k=s[q]
j=o.i(0,k.a)
k.at=j.a
k.ax=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.v)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.v)(r),++l){h=r[l]
n=s.i(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.v)(r),++l){g=r[l]
j=d.i(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.ej.prototype={
B(){return A.J(["open",this.a,"locked",this.b],t.N,t.y)}}
A.e8.prototype={
B(){return A.J(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.iY.prototype={
$1(a){return this.a.u(0,A.B(a))},
$S:3}
A.c3.prototype={
v(){return"Hand."+this.b}}
A.lq.prototype={
i(a,b){var s=this.a.i(0,b)
return s==null?B.j:s},
dl(a,b){var s,r,q,p,o=A.i([],t.s)
for(s=this.i(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.h_.prototype={
B(){var s,r,q,p=t.N,o=A.t(p,t.w)
for(s=this.a,r=0;r<5;++r){q=B.l[r]
o.k(0,q,s.i(0,q))}return A.J(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
n(a){return new A.a3(B.l,t.ej.a(new A.jY(this)),t.dD).aH(0," \xb7 ")}}
A.jX.prototype={
$2(a,b){return new A.E(A.B(a),A.B(b),t.q)},
$S:56}
A.jY.prototype={
$1(a){return this.a.a.i(0,A.B(a))},
$S:17}
A.aP.prototype={
B(){var s,r,q,p=this,o=A.i([],t.bV)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)o.push(s[q].B())
s=p.r
s=s==null?null:s.B()
return A.J(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.jJ.prototype={
aV(a){t.G.a(a)
return a.a===5&&B.a.a5(B.l,new A.jQ(this,a))},
dt(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.aV(b))return null
s=this.e++
r=new A.aP(s,a,A.i([A.jW(b,c,d)],t.b1),e,!1,null,null)
this.b.k(0,s,r)
return r},
ci(a,b,c){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||!this.aV(b))return!1
B.a.m(s.c,A.jW(b,c,B.J))
return!0},
iX(a,b){var s
t.G.a(b)
s=this.b.i(0,a)
if(s==null||s.r!=null)return!1
if(!this.aV(b))return!1
s.r=A.jW(b,0,B.aA)
return!0},
he(a){var s,r,q,p
t.I.a(a)
s=this.d
B.a.F(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.V(p)&&!B.a.u(s,p))B.a.m(s,p)}},
kp(a){var s
if(!this.b.V(a))return!1
s=this.d
if(!B.a.u(s,a))B.a.m(s,a)
return!0},
B(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.U(n,A.n(n).c)
B.a.a3(n)
s=A.i([],t.bV)
for(r=q.b,r=new A.a9(r,r.r,r.e,A.n(r).h("a9<2>"));r.l();)s.push(r.d.B())
return A.J(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.jQ.prototype={
$1(a){var s
A.B(a)
s=this.b.i(0,a)
if(s==null)s=""
return B.a.u(this.a.a.i(0,a),s)},
$S:3}
A.iF.prototype={
ei(a,b){if(a.a===B.A&&!a.c)return new A.ki(b,B.aQ)
return new A.jU(B.aQ)},
eh(a){return this.ei(a,null)}}
A.d1.prototype={}
A.iG.prototype={
hb(a){var s,r=a==null?null:B.b.kn(a).toLowerCase()
if(r==="next")return B.be
s=r!=null&&r!=="legacy"
return new A.d1(B.M,!1,s,s?"unknown renderer query":null)}}
A.jV.prototype={}
A.jU.prototype={
bB(){if(this.d===B.aR)throw A.b(A.q("legacy backend is disposed"))
this.d=B.n},
bR(a){if(this.d!==B.n)A.m(A.q("legacy backend is not ready"))
B.p.aE(A.J(["backend","legacy","interpolation",0,"facts",A.ii(a.a.a)],t.N,t.X),null)},
cV(a){if(this.d!==B.n)A.m(A.q("legacy backend is not ready"))
B.p.aE(A.J(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.kj.prototype={}
A.ki.prototype={
bB(){var s,r,q,p,o
if(this.c===B.aR)throw A.b(A.q("pixeldart backend is disposed"))
s=this.b
if(s!=null){r=A.t_(s.a)
s.d=r
r=new A.kS(r,new A.iM(new A.iN(),new A.hn()),new A.jc(A.i([],t.c8),B.cb),A.i([],t.oZ),B.a0)
s.e=r
q=s.b
p=s.c
r.cX(B.bt,new A.l3(q,p,q,p))
p=s.e
p.c2()
o=A.rF(p.w.a.b)
B.a.m(p.d,o)
s.f=o
s.Q=!0}this.c=B.n},
bR(a){var s,r,q,p,o,n,m,l=this,k=null,j="pixeldart backend is not ready",i=l.b,h=l.c
if(h===B.a_){if(i!=null){if(i.Q){s=i.d
s===$&&A.h()
s=s.b===B.v}else s=!1
s=!s}else s=!0
if(s){l.c=B.n
h=B.n}if(h===B.a_)return}if(h!==B.n)A.m(A.q(j))
B.p.aE(A.J(["backend","next","interpolation",0,"facts",A.ii(a.a.a)],t.N,t.X),k)
if(i!=null){h=i.Q
if(h){s=i.d
s===$&&A.h()
s=s.b===B.v}else s=!1
if(s){if(l.c!==B.n)A.m(A.q(j))
l.c=B.a_
return}if(!h)A.m(A.q("Pixeldart runtime is not initialized"))
h=i.y
if(h==null){h=new Float32Array(16)
h[0]=1
h[5]=1
h[10]=1
h[15]=1
r=new A.bN(h)
h=i.b/i.c
q=A.oj(h,60,1.0471975511965976,0.1)
h=new A.fn(r,q,q.W(0,r),B.C,B.dA,0.1,60,h)}s=i.z++
p=i.e
p===$&&A.h()
o=i.f
o===$&&A.h()
p.iy()
p.c2()
n=B.a.u(p.d,o)
if(!n)A.m(A.z("world was not created by this renderer",k))
if(p.at!=null)A.m(A.q("renderer.beginFrame called twice without end/abort"))
n=h.d
if(!n.ga4(0))A.m(A.z("CameraView.eye must be finite: "+n.n(0),k))
n=h.e
if(!n.ga4(0)||n.gbD()<1e-12)A.m(A.z("CameraView.forward must be finite and nonzero: "+n.n(0),k))
n=h.f
if(isFinite(n)){m=h.r
m=!isFinite(m)||n<=0||m<=n}else m=!0
if(m)A.m(A.z("CameraView requires 0 < near < far, got "+A.w(n)+"/"+h.r,k))
n=h.w
if(!isFinite(n)||n<=0)A.m(A.z("CameraView.aspect must be finite and > 0: "+A.w(n),k))
if(!h.a.ga4(0)||!h.b.ga4(0)||!h.c.ga4(0))A.m(A.z("CameraView matrices must be finite",k))
B.ae.P()
B.ah.P()
if(!isFinite(0))A.m(A.z("FrameInput.timeSeconds must be finite: 0",k))
p.at=new A.jb(h,B.ae,B.ah,s,0)
p.ax=o
h=p.c
if(h.b===B.T)A.m(A.q("FrameQueue.beginFrame called twice without end/abort"))
h.b=B.T
h.c=0
B.a.F(h.a)
i.e.jq()}},
cV(a){if(this.c!==B.n)A.m(A.q("pixeldart backend is not ready"))
B.p.aE(A.J(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.en.prototype={
v(){return"RendererBackendKind."+this.b}}
A.cF.prototype={
v(){return"RendererBackendState."+this.b}}
A.kJ.prototype={}
A.hl.prototype={}
A.kI.prototype={
hD(a,b,c,d,e,f,g,h,i,j){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.z("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w],r=0;r<4;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.z("renderer provenance values must be non-empty",null))}},
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
A.aJ.prototype={
v(){return"SleepQuality."+this.b}}
A.ay.prototype={
v(){return"SleepLocation."+this.b}}
A.dj.prototype={}
A.iQ.prototype={
bQ(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
hn(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
B(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.i([],t.ic)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
i.push(A.J(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.J(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.iR.prototype={
$1(a){return t.gC.a(a).b===this.a},
$S:57}
A.iS.prototype={
$1(a){return t.m9.a(a).b===this.a},
$S:58}
A.fQ.prototype={
v(){return"InteractionType."+this.b}}
A.cO.prototype={
v(){return"WorldComparisonKind."+this.b}}
A.lv.prototype={}
A.cN.prototype={}
A.fv.prototype={}
A.jE.prototype={}
A.jG.prototype={
dh(){var s,r,q,p=t.r,o=A.i([],p)
for(s=this.a.b,s=new A.a9(s,s.r,s.e,A.n(s).h("a9<2>")),r=this.b;s.l();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.i(o.slice(0),p)
B.a.T(p,new A.jH())
return p},
jc(a,b){var s,r,q,p,o,n=b.b
if(n.gE(n))return B.ea
s=t.N
r=A.a_(s)
q=A.a_(s)
for(s=n.gK(),s=s.gt(s),p=a.c;s.l();){o=s.gp()
if(B.a.gL(p).a.i(0,o)==n.i(0,o))r.m(0,o)
else q.m(0,o)}if(q.a!==0)return new A.cN(B.R,r)
s=r.a
o=B.a.gL(p).a
if(s===o.gq(o)){n=n.gq(n)
p=B.a.gL(p).a
p=n===p.gq(p)
n=p}else n=!1
if(n)return new A.cN(B.bd,r)
return new A.cN(B.ad,r)},
iw(a,b,c,d,e){var s,r,q=this.a,p=q.b.i(0,e)
if(p==null)return new A.fv(e,!1,B.e9,null)
s=p.d===c
r=this.jc(p,d)
q.kp(e)
return new A.fv(e,s,r,r.a===B.R&&s?'The world says "'+d.c+'". The entry says "'+B.a.gL(p.c).n(0)+'".':null)},
jg(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.R)return null
s=this.a.b.i(0,r)
if(s==null)return null
return new A.jE(B.a.gL(s.c).n(0)+" but "+A.w(a.f))}}
A.jH.prototype={
$2(a,b){var s=t.L
s.a(a)
return B.c.G(s.a(b).a,a.a)},
$S:10}
A.b6.prototype={
v(){return"RuptureStep."+this.b}}
A.kP.prototype={}
A.bA.prototype={}
A.kQ.prototype={
ghp(){var s=B.Z.i(0,this.a)
return s==null?0:s},
hr(a,b){var s,r,q=this
t.bq.a(b)
if(q.a===B.o)s=q.e
else s=!0
if(s)return B.aG
r=A.nr(b)
s=q.c
B.a.F(s)
B.a.M(s,r)
B.a.F(q.d)
q.a=B.N
q.b=0
q.e=!1
return A.i([B.bv],t.Y)},
iZ(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.z("rupture advance must be a finite non-negative duration",null))
if(l.a===B.o||a===0)return B.aG
s=A.i([],t.Y)
r=a
for(;;){if(!(r>0&&l.a!==B.o))break
A:{q=l.a
p=B.Z.i(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.B)l.iN(s)
p=l.b
o=B.Z.i(0,l.a)
if(p<(o==null?0:o))break A
B.a.m(s,new A.bA())
if(q===B.B){l.a=B.o
l.b=0
l.e=!0
B.a.m(s,B.bu)}else{p=q.a+1
if(!(p<7))return A.c(B.aF,p)
l.a=B.aF[p]
l.b=0
B.a.m(s,new A.bA())}}}return A.af(s,t.k8)},
B(){var s=this,r=t.N
return A.J(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.af(s.c,r),"extinguishedMantles",A.af(s.d,r),"completed",s.e],r,t.z)},
iN(a){var s,r,q,p,o,n,m,l=this
t.io.a(a)
s=l.c
r=t.N
q=B.c.Z(B.d.cU(l.b/l.ghp()*A.af(s,r).length),0,A.af(s,r).length)
p=l.d
for(;;){o=A.b4(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.b4(s,!1,r)
o.$flags=3
n=o
o=A.b4(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.c(n,m)
B.a.m(p,n[m])
B.a.m(a,new A.bA())}}}
A.fJ.prototype={
gbS(){var s=this.b
if(s<6||s>18)return 0
return B.d.Z((s-6)/12,0,1)}}
A.me.prototype={
$1(a){var s=B.c.bm(this.a,a)&255
return B.c.Z(B.d.ak(s+((B.c.bm(this.b,a)&255)-s)*this.c),0,255)},
$S:60}
A.l_.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.dm(g.a),e=t.N,d=A.t(e,t.b)
for(s=g.b,s=new A.R(s,A.n(s).h("R<1,2>")).gt(0);s.l();){r=s.d
q=r.a
d.k(0,q,g.iS(q,r.b))}s=A.dm(g.r)
q=A.dm(g.w)
p=A.dm(g.x)
o=A.t(e,t.l_)
for(n=g.as,n=new A.R(n,A.n(n).h("R<1,2>")).gt(0),m=t.hq;n.l();){l=n.d
k=l.a
j=A.i([],m)
for(i=J.I(l.b);i.l();){h=i.gp()
j.push(A.J(["field",h.a,"value",h.b],e,e))}o.k(0,k,j)}return A.J(["broadcasts",f,"visitors",d,"vocabulary",g.e,"documents",g.f,"street",s,"unverifiables",q,"nights",p,"endings",g.y,"records",g.z,"cues",g.Q,"claims",o],e,t.z)},
iS(a,b){var s,r=A.dm(t.iu.a(b)),q=this.c.i(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.dm(q.aI(0,new A.l0(),t.S,t.z)))
s=this.d.i(0,a)
if(s!=null&&s.gH(s))r.k(0,"_ambient",A.dm(s.aI(0,new A.l1(),t.S,t.z)))
return r}}
A.l0.prototype={
$2(a,b){return new A.E(A.a(a),t.ey.a(b).B(),t.iI)},
$S:61}
A.l1.prototype={
$2(a,b){return new A.E(A.a(a),t.bR.a(b).B(),t.iI)},
$S:62}
A.cM.prototype={
B(){return A.J(["hour",this.a,"order",this.b],t.N,t.S)}}
A.cL.prototype={
B(){return A.J(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.ey.prototype={
B(){var s=t.N
return A.J(["field",this.a,"value",this.b],s,s)}}
A.l5.prototype={
b3(){var s=0,r=A.br(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g
var $async$b3=A.bs(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.an(A.bu(A.d(A.d(v.G.window).fetch("res/text.json")),t.m),$async$b3)
case 6:n=b
s=7
return A.an(A.bu(A.d(n.text()),t.N),$async$b3)
case 7:m=b
l=A.uZ(m)
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
j=A.w(k)
throw A.b("Failed to load text.json: "+j)
s=5
break
case 2:s=1
break
case 5:return A.bp(null,r)
case 1:return A.bo(p.at(-1),r)}})
return A.bq($async$b3,r)},
h7(a){var s,r,q,p=this.a
p===$&&A.h()
s=p.i(0,B.c.n(a))
if(t.f.b(s)){p=s.gO().df(0,new A.l6())
r=p.$ti
q=t.N
q=A.t(q,q)
q.iW(new A.bM(p,r.h("E<k,k>(1)").a(new A.l7()),r.h("bM<1,E<k,k>>")))
return q}return null},
ha(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.h()
s=m.i(0,a)
m=t.f
r=m.b(s)?s.i(0,"_arrival"):n
q=m.b(r)?r.i(0,B.c.n(b)):n
if(!m.b(q))return n
p=q.i(0,"hour")
o=q.i(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.d.al(p)||o!==B.d.al(o))return n
return new A.cM(B.d.al(p),B.d.al(o))},
h9(a,b){var s,r,q,p,o,n,m=null,l=this.b
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
return new A.cL(B.d.al(p),o,n)},
kr(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=t.S,a0=t.G,a1=t.N,a2=A.t(a1,t.iu),a3=A.t(a1,t.c_),a4=A.t(a1,t.d8),a5=t.a,a6=A.t(a1,t.iD),a7=b.b
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
k=typeof l=="string"?A.kn(l,null):null
if(k==null||!q.b(m.b))continue
j=A.t(a1,a1)
for(m=q.a(m.b).gO(),m=m.gt(m);m.l();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.B(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a2.k(0,o,n)
h=A.t(a,r)
for(m=n.$ti.h("c6<1>"),l=new A.c6(n,n.r,n.e,m);l.l();){i=l.d
g=b.ha(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a3.k(0,o,h)
f=A.t(a,s)
for(m=new A.c6(n,n.r,n.e,m);m.l();){l=m.d
e=b.h9(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a4.k(0,o,f)}a7=b.z
a7===$&&A.h()
a7=new A.R(a7,A.n(a7).h("R<1,2>")).gt(0)
s=t.cF
r=t.j
while(a7.l()){p=a7.d
d=p.b
if(!r.b(d))continue
o=A.i([],s)
for(m=J.I(d);m.l();){c=m.gp()
if(q.b(c)&&typeof c.i(0,"field")=="string"&&typeof c.i(0,"value")=="string")o.push(new A.ey(A.B(c.i(0,"field")),A.B(c.i(0,"value"))))}if(o.length!==0)a6.k(0,p.a,o)}return new A.l_(A.t(a,a0),a2,a3,a4,A.t(a1,a5),A.t(a1,a5),A.t(a,a5),A.t(a,a5),A.t(a,a5),A.t(a1,a5),A.t(a1,a5),A.t(a1,a5),a6)}}
A.l6.prototype={
$1(a){t.d7.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:63}
A.l7.prototype={
$1(a){t.d7.a(a)
return new A.E(A.B(a.a),A.B(a.b),t.q)},
$S:64}
A.iA.prototype={
dj(a,b){var s=this.a
s.textContent=a+": "+b
s.className="ambient-notice visible"
A.a(A.d(v.G.window).setTimeout(A.a7(new A.iB(this)),7000))}}
A.iB.prototype={
$1(a){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:65}
A.iI.prototype={
dd(a,b){var s,r,q,p=b?a:null
if(p==this.b)return
this.b=p
s=this.a
r=p==null
q=r?"":p
s.textContent=q
r=r?"broadcast":"broadcast visible"
s.className=r}}
A.iT.prototype={
hy(a){var s,r,q,p,o,n,m,l=this,k="div",j=null,i=A.O(a,k,"door-speaker",j)
l.b!==$&&A.u()
l.b=i
s=A.O(a,k,"door-line",j)
l.c!==$&&A.u()
l.c=s
r=l.a
A.d(r.appendChild(i))
A.d(r.appendChild(s))
s=A.O(a,k,"door-cite-list",j)
l.e!==$&&A.u()
l.e=s
i=A.O(a,k,"door-cite-result",j)
l.f!==$&&A.u()
l.f=i
A.d(r.appendChild(s))
A.d(r.appendChild(i))
for(i=A.ih,s=l.r,q=0;q<5;++q){p=B.cI[q]
o=A.d(a.createElement("button"))
o.className="door-choice"
o.textContent=p
o.setAttribute("type","button")
n=new A.iU(l,p)
if(typeof n=="function")A.m(A.z("Attempting to rewrap a JS function.",j))
m=function(b,c){return function(d){return b(c,d,arguments.length)}}(i,n)
m[$.dL()]=n
o.addEventListener("click",m)
A.d(r.appendChild(o))
B.a.m(s,o)}i=A.O(a,"button","door-continue","continue")
l.d!==$&&A.u()
l.d=i
i.setAttribute("type","button")
i.addEventListener("click",A.a7(new A.iV(l)))
A.d(r.appendChild(i))
A.d(A.e(a.body).appendChild(r))},
dk(a,b){var s,r,q,p=this
p.z=!0
s=p.b
s===$&&A.h()
s.textContent=a
s=p.c
s===$&&A.h()
s.textContent=b
for(s=p.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.v)(s),++q)A.d(s[q].style).display=""
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
bN(a){var s,r,q=this,p=q.c
p===$&&A.h()
p.textContent=a
for(p=q.r,s=p.length,r=0;r<p.length;p.length===s||(0,A.v)(p),++r)A.d(p[r].style).display="none"
p=q.d
p===$&&A.h()
A.d(p.style).display=""
p=q.f
p===$&&A.h()
p.textContent=""},
hh(a,b){var s,r,q,p,o,n,m,l
t.jz.a(b)
s=this.e
s===$&&A.h()
s.textContent=""
for(r=b.length,q=A.ih,p=0;p<b.length;b.length===r||(0,A.v)(b),++p){o={}
n=b[p]
o.a=null
o.a=n.a
m=A.d(a.createElement("button"))
m.className="door-cite-entry"
m.textContent=n.b
m.setAttribute("type","button")
o=new A.iW(o,this)
if(typeof o=="function")A.m(A.z("Attempting to rewrap a JS function.",null))
l=function(c,d){return function(e){return c(d,e,arguments.length)}}(q,o)
l[$.dL()]=o
m.addEventListener("click",l)
A.d(s.appendChild(m))}},
by(){var s,r=this
r.z=!1
s=r.e
s===$&&A.h()
s.textContent=""
s=r.f
s===$&&A.h()
s.textContent=""
r.a.className="door"},
sjW(a){this.w=t.ov.a(a)},
sjY(a){this.x=t.jE.a(a)},
sjX(a){this.y=t.bZ.a(a)}}
A.iU.prototype={
$1(a){var s
A.d(a)
s=this.a.w
return s==null?null:s.$1(this.b)},
$S:1}
A.iV.prototype={
$1(a){var s
A.d(a)
s=this.a.x
return s==null?null:s.$0()},
$S:1}
A.iW.prototype={
$1(a){var s
A.d(a)
s=this.b.y
return s==null?null:s.$1(this.a.a)},
$S:1}
A.j_.prototype={
hz(a){var s,r,q,p=this,o=p.a,n=A.O(o,"h1","journal-title",null)
p.f!==$&&A.u()
p.f=n
s=A.O(o,"div","ending-copy",null)
p.r!==$&&A.u()
p.r=s
r=p.b
A.d(r.appendChild(n))
A.d(r.appendChild(s))
q=A.O(o,"button","door-continue","close record")
q.setAttribute("type","button")
q.addEventListener("click",A.a7(new A.j0(p)))
A.d(r.appendChild(q))},
hi(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.h()
s.textContent=a.a.b
s=m.r
s===$&&A.h()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.v)(b),++p){o=b[p]
n=A.d(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.d(s.appendChild(n))}m.bI()},
sjZ(a){this.w=t.jE.a(a)}}
A.j0.prototype={
$1(a){var s
A.d(a)
s=this.a
s.ah()
s=s.w
if(s!=null)s.$0()
return null},
$S:1}
A.jt.prototype={
hA(a){var s,r="help-copy",q=this.b,p=this.a
A.d(q.appendChild(A.O(p,"h1","journal-title","house notes")))
A.d(q.appendChild(A.O(p,"p",r,"WASD moves. Mouse looks. E uses what you face.")))
A.d(q.appendChild(A.O(p,"p",r,"J opens the journal. L rests. K saves. The final door waits until Day 21.")))
s=A.O(p,"button","door-continue","return")
s.setAttribute("type","button")
s.addEventListener("click",A.a7(new A.ju(this)))
A.d(q.appendChild(s))}}
A.ju.prototype={
$1(a){A.d(a)
return this.a.ah()},
$S:1}
A.jK.prototype={
hN(){var s,r=this,q=r.a,p=A.O(q,"div","page-turn",null),o=A.O(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.a7(new A.jL(r)))
s=A.O(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.a7(new A.jM(r)))
q=A.O(q,"span","right-day-label",null)
r.Q!==$&&A.u()
r.Q=q
A.d(p.appendChild(o))
A.d(p.appendChild(q))
A.d(p.appendChild(s))
return p},
e7(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.dB(s.CW+a,r)
s.dU()},
dB(a,b){if(a<1)return 1
if(a>b)return b
return a},
iz(){var s,r,q,p,o,n,m,l,k,j=this,i=j.at
i===$&&A.h()
i.textContent=""
j.ay=null
s=j.ax
s===$&&A.h()
s.textContent=""
for(s=j.w.dh(),r=s.length,q=A.ih,p=j.a,o=0;o<s.length;s.length===r||(0,A.v)(s),++o){n=s[o]
m=B.a.gL(n.c).n(0)
l=A.d(p.createElement("button"))
l.className="picker-entry"
l.textContent=m
l.setAttribute("type","button")
m=new A.jN(j,n,l)
if(typeof m=="function")A.m(A.z("Attempting to rewrap a JS function.",null))
k=function(a,b){return function(c){return a(b,c,arguments.length)}}(q,m)
k[$.dL()]=m
l.addEventListener("click",k)
A.d(i.appendChild(l))}},
dU(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.h()
s=t.r
r=A.i([],s)
for(q=j.f,p=q.b,o=A.n(p).h("a9<2>"),n=new A.a9(p,p.r,p.e,o),m=j.r;n.l();){l=n.d
if(l.b===m.a)r.push(l)}B.a.T(r,new A.jO())
j.dT(i,r)
i=j.Q
i===$&&A.h()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.h()
s=A.i([],s)
for(r=new A.a9(p,p.r,p.e,o);r.l();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.T(s,new A.jP())
j.dT(i,s)
k=B.d.Z(q.f/4,0,1)
i=j.as
i===$&&A.h()
A.d(i.style).setProperty("width",B.d.dc(k*100,1)+"%")},
dT(a,b){var s,r
t.bY.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.v)(b),++r)A.d(a.appendChild(this.i8(b[r])))},
i8(a){var s,r,q,p,o,n,m,l,k=this.a,j=A.O(k,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r){p=s[r]
q=r!==q-1?"hand-line struck":"hand-line"
o=p.n(0)
n=A.d(k.createElement("div"))
n.className=q
n.textContent=o
A.d(n.style).setProperty("--shake",B.d.n(p.b))
A.d(j.appendChild(n))}m=a.r
if(m!=null){l=this.ii(m,!1)
l.className=A.B(l.className)+" margin"
A.d(j.appendChild(l))}return j},
ii(a,b){var s=b?"hand-line struck":"hand-line",r=A.O(this.a,"div",s,a.n(0))
A.d(r.style).setProperty("--shake",B.d.n(a.b))
return r}}
A.jL.prototype={
$1(a){A.d(a)
return this.a.e7(-1)},
$S:1}
A.jM.prototype={
$1(a){A.d(a)
return this.a.e7(1)},
$S:1}
A.jN.prototype={
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
A.jO.prototype={
$2(a,b){var s=t.L
return B.c.G(s.a(a).a,s.a(b).a)},
$S:10}
A.jP.prototype={
$2(a,b){var s=t.L
return B.c.G(s.a(a).a,s.a(b).a)},
$S:10}
A.ei.prototype={
ba(a){var s=this.b
s.className="panel"
A.d(s.style).setProperty("--panel-fade","0.25s")
A.d(A.e(this.a.body).appendChild(s))},
bI(){var s,r,q,p,o=this,n=o.b
if(B.b.u(A.B(n.className),"open"))return
s=$.ke
if(s!=null&&s!==o)s.ah()
$.ke=o
r=o.a
o.d=A.e(r.activeElement)
A.oa(r,"exitPointerLock",t.X)
n.className="panel open"
q=A.a7(o.git())
o.e=q
r.addEventListener("keydown",q)
p=A.pq(n)
if(p.length!==0)B.a.gaG(p).focus()},
ah(){var s,r,q=this,p=q.b
if(!B.b.u(A.B(p.className),"open"))return
p.className="panel"
if($.ke===q)$.ke=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
iu(a){A.d(a)
if(A.aA(a.defaultPrevented))return
if(A.B(a.code)==="Escape"){this.ah()
return}if(A.B(a.code)==="Tab")this.iM(a)},
iM(a){var s,r=A.pq(this.b)
if(r.length===0)return
s=A.e(this.a.activeElement)
if(A.aA(a.shiftKey)){if(s===B.a.gaG(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gL(r).focus()}}else if(s===B.a.gL(r)||!B.a.u(r,s)){a.preventDefault()
B.a.gaG(r).focus()}},
sbH(a){this.c=t.jE.a(a)}}
A.kp.prototype={
hg(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":a
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.kY.prototype={
hF(a){var s,r,q,p,o,n,m,l,k,j,i=this.b
A.d(i.appendChild(A.O(a,"h2","journal-title","Rest")))
A.d(i.appendChild(A.O(a,"p","consult-label","Sleeping is the only way to end the day.")))
s=A.O(a,"div","entry-picker",null)
for(r=A.ih,q=0;q<2;++q){p=B.aE[q]
for(o=p.b+" sleep \xb7 ",n=0;n<3;++n){m=B.aJ[n]
l=A.d(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
l.setAttribute("type","button")
k=new A.kZ(this,p,m)
if(typeof k=="function")A.m(A.z("Attempting to rewrap a JS function.",null))
j=function(b,c){return function(d){return b(c,d,arguments.length)}}(r,k)
j[$.dL()]=k
l.addEventListener("click",j)
A.d(s.appendChild(l))}}A.d(i.appendChild(s))},
sk_(a){this.f=t.as.a(a)}}
A.kZ.prototype={
$1(a){var s,r
A.d(a)
s=this.a
r=s.f
if(r!=null)r.$2(this.b,this.c)
s.ah()},
$S:2}
A.bg.prototype={}
A.ix.prototype={
kg(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.M(s)
q=new A.a3(s,r.h("k(1)").a(new A.iz()),r.h("a3<1,k>")).aA(0)
r=this.b
r.F(0)
s=J.qu(a,t.N)
p=s.$ti
r.M(0,new A.H(s,p.h("r(l.E)").a(q.gbo(q)),p.h("H<l.E>")))},
jo(a,b){var s,r,q,p,o,n=A.i([],t.od)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.u(0,o.a))n.push(o)}return n}}
A.iz.prototype={
$1(a){return t.e.a(a).a},
$S:66}
A.iy.prototype={
$2(a,b){var s,r=t.e
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.c.G(r,s):B.c.G(a.c,b.c)},
$S:67}
A.hG.prototype={
jL(a){return this.c.u(0,t.g.a(a))},
ke(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=l.a
if(!k.a5(0,j.gje())||!a.a.a5(0,new A.lo(l)))return!1
s=a.c
if(s!=null){r=s.a
q=j.i(0,r)
p=q==null?null:q.i(0,s.b)
j=!0
if(p!=null)if(!k.u(0,r)){o=s.c
if(o!==B.Q){n=s.d
if(n<J.av(p)){o=o===B.x
if(o)n=s.e!=null||n!==0
else n=!1
if(!n)if(!o){j=s.e
j=j==null||j===B.y}else j=!1}}}if(j)return!1
m=new A.hF(r,s.b,A.af(p,t.kX),B.x)
m.d=s.c
m.f=s.d
m.e=s.e
m.r=s.f}else m=null
j=l.b
j.F(0)
j.M(0,a.a)
j=l.c
j.F(0)
j.M(0,k)
l.e=m
return!0},
ec(a){var s=this.a,r=A.n(s).h("a5<1>"),q=r.h("H<l.E>")
s=A.U(new A.H(new A.a5(s,r),r.h("r(l.E)").a(new A.ll(a)),q),q.h("l.E"))
B.a.T(s,new A.lm())
return s},
j3(a){var s,r,q,p,o,n,m=this
if(m.e!=null)return B.e5
s=m.a.i(0,a)
if(s==null)return B.e6
r=B.c.J(a.b-1,7)
q=a.a
p=m.b.u(0,q)||r+1>=3||m.f?B.aa:B.D
o=p===B.D&&m.r.u(0,q)&&s.V(B.ab)?B.ab:p
if(s.V(o))n=o
else n=s.V(B.D)?B.D:B.aa
r=s.i(0,n)
r.toString
r=new A.hF(a,n,A.af(r,t.kX),B.x)
m.e=r
return new A.hE(r)},
j9(a){var s,r,q,p,o,n=this.e
if(n==null)return B.bc
if(n.d!==B.x)return B.e3
n.e=a
s=a===B.y
n.d=s?B.Q:B.O
r=this.d
q=s?B.ba:B.dP
p=n.a
o=p.a
p=p.b
B.a.m(r,new A.bX(q,o,p,a,null))
if(a===B.I)B.a.m(r,new A.bX(B.dS,o,p,a,null))
if(s)this.dV(n)
return new A.hD(n)},
j_(){var s,r=this.e
if(r==null)return B.bc
s=r.d
if(s!==B.O&&s!==B.P)return B.e4
r.d=B.P
if(++r.f>=r.c.length){r.d=B.Q
this.dV(r)
return new A.ex(r,!0)}return new A.ex(r,!1)},
ja(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.e
if(h!=null){s=h.d
s=s!==B.O&&s!==B.P}else s=!0
if(s)return i
r=h.gbp()
if(r==null)return i
s=t.N
q=A.t(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.c(o,p)
p=o[p].c}else p=B.aH
p=J.I(p)
while(p.l()){o=p.gp()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.d4(q,s,s)
m=c.iw(!0,!0,o,new A.lv(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.R){B.a.m(this.d,new A.bX(B.dR,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.i(0,l)
if(j!=null){o=B.a.gL(j.c)
s=A.og(s,s)
s.M(0,o.a)
s.M(0,q)
p.iX(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.bd)if(k===B.ad){s=n.b
s=s.gH(s)}else s=!1
else s=!0
if(s)B.a.m(this.d,new A.bX(B.dQ,o,p.b,i,l))}}return m},
dV(a){var s=a.a
this.b.m(0,s.a)
this.c.m(0,s)
this.e=null},
shq(a){this.r=t.C.a(a)}}
A.lo.prototype={
$1(a){var s=this.a.a
return new A.a5(s,A.n(s).h("a5<1>")).ab(0,new A.ln(A.B(a)))},
$S:3}
A.ln.prototype={
$1(a){return t.g.a(a).a===this.a},
$S:11}
A.ll.prototype={
$1(a){return t.g.a(a).b===this.a},
$S:11}
A.lm.prototype={
$2(a,b){var s,r=t.g
r.a(a)
r.a(b)
s=B.c.G(a.c,b.c)
return s!==0?s:B.c.G(a.d,b.d)},
$S:69}
A.lk.prototype={
$2(a,b){var s=t.kX
return B.c.G(s.a(a).a,s.a(b).a)},
$S:70}
A.hH.prototype={}
A.hZ.prototype={}
A.mq.prototype={
$1(a){return B.b.S(A.B(a),"off.")},
$S:3}
A.aF.prototype={
v(){return"DoorChoice."+this.b}}
A.aS.prototype={
v(){return"VisitPhase."+this.b}}
A.aT.prototype={
v(){return"VisitTier."+this.b}}
A.cf.prototype={
v(){return"VisitorFactKind."+this.b}}
A.bX.prototype={
B(){var s,r=this,q=A.t(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.bD.prototype={
v(){return"VisitorIssueCode."+this.b}}
A.aU.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aU&&b.a===this.a&&b.b===this.b},
gD(a){return A.bO(this.a,this.b,B.h,B.h)}}
A.b7.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.b7&&b.a===this.a&&b.b===this.b},
gD(a){return A.bO(this.a,this.b,B.h,B.h)}}
A.aK.prototype={
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.aK&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gD(a){var s=this
return A.bO(s.a,s.b,s.c,s.d)},
B(){var s=this
return A.J(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.hI.prototype={
B(){var s,r,q,p=this.a
p=A.U(p,A.n(p).c)
B.a.a3(p)
s=this.b
r=A.n(s)
q=r.h("cs<1,G<k,@>>")
s=A.U(new A.cs(s,r.h("G<k,@>(1)").a(new A.lj()),q),q.h("l.E"))
r=this.c
return A.J(["contacted",p,"resolved",s,"active",r==null?null:r.B()],t.N,t.z)}}
A.lj.prototype={
$1(a){return t.g.a(a).B()},
$S:71}
A.fe.prototype={
B(){var s=this,r=s.a.B(),q=s.e
q=q==null?null:q.b
return A.J(["arrival",r,"tier",s.b.b,"phase",s.c.b,"lineIndex",s.d,"choice",q,"complianceMarked",s.f],t.N,t.z)}}
A.iu.prototype={
$1(a){return t.kM.a(a).b===this.a},
$S:72}
A.iv.prototype={
$1(a){return t.nq.a(a).b===this.a},
$S:73}
A.iw.prototype={
$1(a){return t.lD.a(a).b===this.a},
$S:74}
A.hF.prototype={
gbp(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
s=r[s].b}else s=null
return s}}
A.lp.prototype={}
A.aL.prototype={}
A.hE.prototype={}
A.hD.prototype={}
A.ex.prototype={}
A.i0.prototype={
j1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="resource library is disposed"
if(!f.Q||f.w.length!==0)return
s=f.e
s===$&&A.h()
s=s.gkd()
if(s.r)A.m(A.q(e))
if(!isFinite(0))A.m(A.z("MaterialDefinition.emissiveStrength must be >= 0: 0",null))
if(!isFinite(0.5))A.m(A.z("MaterialDefinition.alphaCutoff must be in (0, 1]: 0.5",null))
r=s.b.a.cj(B.bq,null)
s.e.m(0,r)
f.x=r
for(s=a.b,q=s.length,p=f.r,o=f.w,n=0;n<s.length;s.length===q||(0,A.v)(s),++n){m=s[n]
l=f.iE(a,m)
k=f.e.w
if(k==null)k=A.m(A.q("renderer is not initialized"))
if(k.r)A.m(A.q(e))
j=k.a
l.P()
r=j.b.cj(l,"room:"+m.a)
i=r.a
j.c.k(0,i,j.e9(l))
k.d.m(0,r)
B.a.m(p,r)
k=f.f
k===$&&A.h()
j=f.x
j.toString
B.u.P()
h=k.a
g=h.$ti
h.bZ(g.c.a(r))
h=h.b
if(!(i>=0&&i<h.length))return A.c(h,i)
l=h[i].c
i=(l==null?g.y[1].a(l):l).d
h=B.u.da()
i=i.gef()
g=A.M(i)
A.mV(new A.a3(i,g.h("K(1)").a(h.gh0()),g.h("a3<1,K>")))
B.a.m(o,k.b.jh(new A.bz(r,j)))}},
iE(a1,a2){var s,r,q,p,o,n,m,l=9145227,k=new A.dl(new Float32Array(5376)),j=a2.d,i=a1.aD(a2),h=j.a,g=j.b,f=j.c,e=new A.j(h,g,f),d=h+i.a,c=new A.j(d,g,f),b=f+i.c,a=new A.j(d,g,b),a0=new A.j(h,g,b)
g+=i.b
s=new A.j(h,g,f)
r=new A.j(d,g,f)
q=new A.j(d,g,b)
p=new A.j(h,g,b)
k.aJ(e,a0,a,c,11053224)
k.aJ(s,r,q,p,12632256)
k.aJ(e,c,r,s,l)
k.aJ(c,a,q,r,l)
k.aJ(a,a0,p,q,l)
k.aJ(a0,e,s,p,l)
o=B.t.b8(k.a,0,k.b)
n=A.i([],t.hL)
for(h=o.length,m=0;m<h;m+=14){g=o[m]
f=m+1
if(!(f<h))return A.c(o,f)
f=o[f]
d=m+2
if(!(d<h))return A.c(o,d)
B.a.m(n,new A.K(g,f,o[d]))}return new A.ea(B.by,o,A.mV(n))},
$irH:1}
A.my.prototype={
$1(a){var s
try{A.o3(a,this.a)
return!0}catch(s){if(A.ac(s) instanceof A.F)return!1
else throw s}},
$S:75}
A.mz.prototype={
$0(){$.aM=null
$.aX.j().aj($.a2.j())},
$S:0}
A.mA.prototype={
$2(a,b){var s,r,q,p,o
if($.S.j().gam().a===21){A.pG(!1)
return}s=$.ab.j().r.b
$.S.j().hm(a,b,$.aY)
r=$.ab.j().r.b
q=s
for(;;){p=q
o=r
if(typeof p!=="number")return p.aP()
if(typeof o!=="number")return A.im(o)
if(!(p<o))break
p=$.no
if(p!=null){if($.ab.b===$.ab)A.m(A.aG(""))
p.k8(B.a.i(B.r,q).b)}p=q
if(typeof p!=="number")return p.a2()
q=p+1}A.nA("saved after sleep")},
$S:76}
A.mD.prototype={
$0(){$.aM=null
$.aX.j().aj($.a2.j())},
$S:0}
A.mE.prototype={
$0(){$.aM=null
$.aX.j().aj($.a2.j())},
$S:0}
A.mF.prototype={
$0(){$.aM=null},
$S:0}
A.mG.prototype={
$0(){$.aM=null},
$S:0}
A.mH.prototype={
$1(a){A.d(a)
return A.pF()},
$S:1}
A.mI.prototype={
$1(a){var s,r
A.d(a)
if(!A.aA(a.repeat))$.dC.j().cV(new A.hl(A.B(a.code),!0,1))
if(A.B(a.code)==="KeyP"&&!A.aA(a.repeat))$.nv=!$.nv
if(A.B(a.code)==="KeyR"&&!A.aA(a.repeat)&&$.pN){s=$.dF
if(s!=null)s.aL()}if(A.B(a.code)==="KeyJ"&&!A.aA(a.repeat)&&!$.al.j().z){s=$.aM
if(s==null){$.aM=$.dB.j()
s=$.dB.j()
s.hu()
r=s.r.a-1
if(r<1)r=1
s.CW=s.dB(s.CW,r)
s.iz()
s.dU()}else if(s===$.dB.j())$.dB.j().ah()}if(A.B(a.code)==="KeyL"&&!A.aA(a.repeat)&&!$.al.j().z){s=$.aM
if(s==null){$.aM=$.ie.j()
$.ie.j().bI()}else if(s===$.ie.j())$.ie.j().ah()}if(A.B(a.code)==="KeyH"&&!A.aA(a.repeat)&&!$.al.j().z){s=$.aM
if(s==null){$.aM=$.ic.j()
$.ic.j().bI()}else if(s===$.ic.j())$.ic.j().ah()}if(A.B(a.code)==="KeyK"&&!A.aA(a.repeat))A.nA("saved")},
$S:2}
A.mJ.prototype={
$1(a){A.d(a)
$.dC.j().cV(new A.hl(A.B(a.code),!1,0))},
$S:2}
A.mK.prototype={
$1(a){A.d(a)
return A.pg()},
$S:1}
A.mB.prototype={
$1(a){A.d(a)
return A.pg()},
$S:1}
A.mC.prototype={
$1(a){A.d(a)
return $.aX.j().aj($.a2.j())},
$S:1}
A.mc.prototype={
$1(a){var s=A.B(A.d(a).message)
A.mg(s,null)},
$S:2}
A.md.prototype={
$1(a){var s
A.d(a)
s=a.reason
A.mg("unhandled rejection: "+A.w(s==null?A.B(a.type):s),null)},
$S:2}
A.mj.prototype={
$1(a){this.a.className=""},
$S:77}
A.mh.prototype={
$1(a){return t.L.a(a).e},
$S:16};(function aliases(){var s=J.c5.prototype
s.ht=s.n
s=A.l.prototype
s.hs=s.df
s=A.ei.prototype
s.hu=s.bI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._instance_1u,p=hunkHelpers._static_1,o=hunkHelpers._static_0
s(J,"ud","re",15)
r(J.o.prototype,"gbo","u",9)
q(A.b3.prototype,"gje","V",9)
p(A,"uP","ta",6)
p(A,"uQ","tb",6)
p(A,"uR","tc",6)
o(A,"pP","uB",0)
s(A,"uT","rj",15)
r(A.b8.prototype,"gbo","u",9)
p(A,"uW","tZ",4)
o(A,"w2","n2",80)
q(A.bN.prototype,"gh0","km",37)
var n
q(n=A.fP.prototype,"gik","il",1)
q(n,"gim","io",1)
q(n,"gir","is",1)
q(n,"gip","iq",1)
p(A,"vm","pn",4)
p(A,"vo","pm",4)
q(A.ei.prototype,"git","iu",1)
q(A.hG.prototype,"gjK","jL",11)
p(A,"pV","us",81)
p(A,"vg","tV",82)
o(A,"vi","tY",0)
p(A,"vh","tW",55)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.A,null)
q(A.A,[A.mX,J.fR,A.eq,J.co,A.l,A.dO,A.c1,A.T,A.D,A.kU,A.bK,A.cB,A.P,A.eA,A.Z,A.bC,A.b9,A.dd,A.d3,A.cS,A.bR,A.lc,A.ka,A.dT,A.eS,A.L,A.jZ,A.c6,A.a9,A.e7,A.lC,A.m_,A.bl,A.hT,A.i8,A.lX,A.hM,A.aV,A.ao,A.hO,A.cP,A.a4,A.hN,A.i6,A.f3,A.eH,A.hX,A.cT,A.eL,A.eY,A.i9,A.cq,A.fw,A.lS,A.m0,A.cr,A.hQ,A.ha,A.es,A.lD,A.F,A.E,A.W,A.i7,A.as,A.f_,A.le,A.i4,A.k9,A.hU,A.dr,A.ks,A.kq,A.iM,A.iN,A.kk,A.fn,A.ja,A.jb,A.bP,A.js,A.e6,A.e9,A.bW,A.li,A.ea,A.kb,A.kl,A.hn,A.bz,A.l3,A.kE,A.jd,A.k4,A.hx,A.k7,A.l8,A.e_,A.j3,A.fH,A.jc,A.b5,A.bj,A.kM,A.bQ,A.dP,A.ko,A.hi,A.ku,A.kh,A.kw,A.kv,A.eJ,A.em,A.i1,A.hS,A.kL,A.kS,A.aI,A.ag,A.iP,A.it,A.cD,A.je,A.bN,A.kr,A.lb,A.K,A.fm,A.fl,A.hg,A.i2,A.eo,A.hK,A.ia,A.jo,A.jr,A.dX,A.er,A.cd,A.fA,A.hf,A.jq,A.ci,A.by,A.iX,A.lu,A.ck,A.f2,A.f1,A.hJ,A.fC,A.fi,A.iK,A.j9,A.hs,A.jm,A.fN,A.fP,A.h1,A.cC,A.k6,A.dl,A.kB,A.kK,A.lw,A.eF,A.i5,A.i_,A.hY,A.kV,A.j,A.iJ,A.fD,A.iZ,A.d6,A.hd,A.km,A.di,A.kR,A.cH,A.fI,A.jj,A.ji,A.fo,A.h2,A.eC,A.hL,A.dZ,A.jw,A.kN,A.ch,A.d8,A.jv,A.j2,A.kW,A.bx,A.jx,A.az,A.cE,A.aH,A.cJ,A.ar,A.jz,A.ej,A.e8,A.lq,A.h_,A.aP,A.jJ,A.iF,A.d1,A.iG,A.jV,A.jU,A.kj,A.ki,A.kJ,A.hl,A.kI,A.dj,A.iQ,A.lv,A.cN,A.fv,A.jE,A.jG,A.kP,A.bA,A.kQ,A.fJ,A.l_,A.cM,A.cL,A.ey,A.l5,A.iA,A.iI,A.iT,A.ei,A.kp,A.bg,A.ix,A.hG,A.lp,A.bX,A.aU,A.b7,A.aK,A.hI,A.fe,A.hF,A.i0])
q(J.fR,[J.fV,J.e2,J.e3,J.db,J.dc,J.cy,J.cz])
q(J.e3,[J.c5,J.o,A.c8,A.ee])
q(J.c5,[J.hc,J.cK,J.bI])
r(J.fT,A.eq)
r(J.jI,J.o)
q(J.cy,[J.e1,J.fW])
q(A.l,[A.cg,A.x,A.bM,A.H,A.bm,A.cR,A.bE])
q(A.cg,[A.cp,A.f4])
r(A.eE,A.cp)
r(A.eD,A.f4)
q(A.c1,[A.fr,A.fq,A.ht,A.mt,A.mv,A.ly,A.lx,A.m6,A.jg,A.lM,A.lO,A.k1,A.lQ,A.mM,A.mN,A.mn,A.kd,A.k5,A.k8,A.l9,A.la,A.j6,A.j4,A.j5,A.kf,A.kg,A.kA,A.kz,A.ky,A.kx,A.kC,A.ma,A.kT,A.mS,A.mQ,A.jf,A.k3,A.ls,A.lt,A.iE,A.jn,A.kH,A.j1,A.jk,A.jl,A.iL,A.kO,A.jC,A.kX,A.iY,A.jY,A.jQ,A.iR,A.iS,A.me,A.l6,A.l7,A.iB,A.iU,A.iV,A.iW,A.j0,A.ju,A.jL,A.jM,A.jN,A.kZ,A.iz,A.lo,A.ln,A.ll,A.mq,A.lj,A.iu,A.iv,A.iw,A.my,A.mH,A.mI,A.mJ,A.mK,A.mB,A.mC,A.mc,A.md,A.mj,A.mh])
q(A.fr,[A.lB,A.iO,A.jR,A.mu,A.m7,A.mm,A.jh,A.lN,A.k_,A.k2,A.lT,A.lg,A.lf,A.j7,A.mR,A.mP,A.jB,A.jD,A.jy,A.jX,A.jH,A.l0,A.l1,A.jO,A.jP,A.iy,A.lm,A.lk,A.mA])
r(A.bi,A.eD)
q(A.T,[A.cA,A.bT,A.fX,A.hw,A.ho,A.hR,A.e5,A.fg,A.bh,A.ew,A.hv,A.dk,A.fu])
r(A.dp,A.D)
r(A.fs,A.dp)
q(A.x,[A.a6,A.a5,A.aw,A.R,A.cQ,A.eK])
q(A.a6,[A.eu,A.a3,A.ep,A.hW])
r(A.cs,A.bM)
q(A.b9,[A.ds,A.dt,A.du])
r(A.dv,A.ds)
r(A.dw,A.dt)
r(A.eQ,A.du)
r(A.dy,A.dd)
r(A.ce,A.dy)
r(A.dQ,A.ce)
q(A.d3,[A.ap,A.dU])
q(A.bR,[A.dR,A.eR,A.eZ])
r(A.d5,A.dR)
r(A.eh,A.bT)
q(A.ht,[A.hr,A.d2])
q(A.L,[A.b3,A.eG,A.hV])
r(A.e4,A.b3)
r(A.de,A.c8)
q(A.ee,[A.h3,A.aj])
q(A.aj,[A.eM,A.eO])
r(A.eN,A.eM)
r(A.ec,A.eN)
r(A.eP,A.eO)
r(A.ed,A.eP)
q(A.ec,[A.eb,A.h4])
q(A.ed,[A.h5,A.h6,A.h7,A.h8,A.h9,A.ef,A.eg])
r(A.eT,A.hR)
q(A.fq,[A.lz,A.lA,A.lY,A.lE,A.lI,A.lH,A.lG,A.lF,A.lL,A.lK,A.lJ,A.lW,A.mi,A.m2,A.m1,A.kG,A.jA,A.mz,A.mD,A.mE,A.mF,A.mG])
r(A.eB,A.hO)
r(A.i3,A.f3)
r(A.eI,A.eG)
r(A.b8,A.eR)
r(A.ev,A.eZ)
q(A.cq,[A.fj,A.fF,A.fY])
q(A.fw,[A.iH,A.jT,A.jS,A.lh])
r(A.fZ,A.e5)
r(A.lR,A.lS)
r(A.hB,A.fF)
q(A.bh,[A.dg,A.fO])
r(A.hP,A.f_)
q(A.hQ,[A.hj,A.cx,A.ff,A.bV,A.fE,A.ft,A.fB,A.cG,A.d9,A.bH,A.hm,A.dY,A.dh,A.he,A.da,A.fK,A.dV,A.fL,A.fM,A.cw,A.dW,A.cI,A.dn,A.fp,A.dx,A.fk,A.dN,A.fx,A.fz,A.ak,A.b1,A.cv,A.ct,A.c2,A.c3,A.en,A.cF,A.aJ,A.ay,A.fQ,A.cO,A.b6,A.aF,A.aS,A.aT,A.cf,A.bD])
q(A.bP,[A.bk,A.cc,A.c7,A.hb,A.c4])
r(A.kF,A.lw)
r(A.kD,A.kF)
q(A.ei,[A.j_,A.jt,A.jK,A.kY])
q(A.lp,[A.hH,A.hZ,A.aL,A.hE,A.hD,A.ex])
s(A.dp,A.bC)
s(A.f4,A.D)
s(A.eM,A.D)
s(A.eN,A.Z)
s(A.eO,A.D)
s(A.eP,A.Z)
s(A.dy,A.eY)
s(A.eZ,A.i9)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{f:"int",p:"double",at:"num",k:"String",r:"bool",W:"Null",y:"List",A:"Object",G:"Map",N:"JSObject"},mangledNames:{},types:["~()","~(N)","W(N)","r(k)","@(@)","r(b5)","~(~())","~(@)","r(bQ)","r(A?)","f(aP,aP)","r(aK)","~(A?,A?)","W(@)","@()","f(@,@)","r(aP)","k?(k)","@(k)","W()","c7(f,f,k?)","bk(f,f,k?)","cc(f,f,k?)","r(hu?)","k(b5)","f(ca,ca)","W(~())","@(@,k)","r(f)","c4(f,f,k?)","eo(bk)","bz(aR)","f(ag<aI>,ag<aI>)","aR(ag<aI>)","f(ag<c0>,ag<c0>)","aR(ag<c0>)","cD(p,p,p,p)","K(K)","r(p)","A?(A?)","b2<W>(E<k,k>)","r(N)","W(@,bB)","N()","0&(k,f?)","r(b1)","r(ar)","G<k,k>(G<k,k>,k)","r(cJ)","r(ch)","f(+(p,p,p,p),+(p,p,p,p))","y<+(p,p,p,p)>()","r(cE)","f(f,ar)","r(az)","~(f)","E<k,k>(k,@)","r(aJ)","r(ay)","~(f,@)","f(f)","E<f,@>(f,cM)","E<f,@>(f,cL)","r(E<@,@>)","E<k,k>(E<@,@>)","k(A?)","k(bg)","f(bg,bg)","~(A,bB)","f(aK,aK)","f(b7,b7)","G<k,@>(aK)","r(aT)","r(aS)","r(aF)","r(di)","~(aJ,ay)","W(A?)","~(@,@)","W(A,bB)","r()","~(at)","~(k)","f(bx,bx)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.dv&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.dw&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eQ&&A.vk(a,b.a)}}
A.tv(v.typeUniverse,JSON.parse('{"hc":"c5","cK":"c5","bI":"c5","vD":"c8","o":{"y":["1"],"x":["1"],"N":[],"l":["1"]},"fV":{"r":[],"Q":[]},"e2":{"W":[],"Q":[]},"e3":{"N":[]},"c5":{"N":[]},"fT":{"eq":[]},"jI":{"o":["1"],"y":["1"],"x":["1"],"N":[],"l":["1"]},"co":{"V":["1"]},"cy":{"p":[],"at":[],"aE":["at"]},"e1":{"p":[],"f":[],"at":[],"aE":["at"],"Q":[]},"fW":{"p":[],"at":[],"aE":["at"],"Q":[]},"cz":{"k":[],"aE":["k"],"ol":[],"Q":[]},"cg":{"l":["2"]},"dO":{"V":["2"]},"cp":{"cg":["1","2"],"l":["2"],"l.E":"2"},"eE":{"cp":["1","2"],"cg":["1","2"],"x":["2"],"l":["2"],"l.E":"2"},"eD":{"D":["2"],"y":["2"],"cg":["1","2"],"x":["2"],"l":["2"]},"bi":{"eD":["1","2"],"D":["2"],"y":["2"],"cg":["1","2"],"x":["2"],"l":["2"],"l.E":"2","D.E":"2"},"cA":{"T":[]},"fs":{"D":["f"],"bC":["f"],"y":["f"],"x":["f"],"l":["f"],"D.E":"f","bC.E":"f"},"x":{"l":["1"]},"a6":{"x":["1"],"l":["1"]},"eu":{"a6":["1"],"x":["1"],"l":["1"],"a6.E":"1","l.E":"1"},"bK":{"V":["1"]},"bM":{"l":["2"],"l.E":"2"},"cs":{"bM":["1","2"],"x":["2"],"l":["2"],"l.E":"2"},"cB":{"V":["2"]},"a3":{"a6":["2"],"x":["2"],"l":["2"],"a6.E":"2","l.E":"2"},"H":{"l":["1"],"l.E":"1"},"P":{"V":["1"]},"bm":{"l":["1"],"l.E":"1"},"eA":{"V":["1"]},"dp":{"D":["1"],"bC":["1"],"y":["1"],"x":["1"],"l":["1"]},"ep":{"a6":["1"],"x":["1"],"l":["1"],"a6.E":"1","l.E":"1"},"dv":{"ds":[],"b9":[]},"dw":{"dt":[],"b9":[]},"eQ":{"du":[],"b9":[]},"dQ":{"ce":["1","2"],"dy":["1","2"],"dd":["1","2"],"eY":["1","2"],"G":["1","2"]},"d3":{"G":["1","2"]},"ap":{"d3":["1","2"],"G":["1","2"]},"cR":{"l":["1"],"l.E":"1"},"cS":{"V":["1"]},"dU":{"d3":["1","2"],"G":["1","2"]},"dR":{"bR":["1"],"cb":["1"],"x":["1"],"l":["1"]},"d5":{"dR":["1"],"bR":["1"],"cb":["1"],"x":["1"],"l":["1"]},"eh":{"bT":[],"T":[]},"fX":{"T":[]},"hw":{"T":[]},"eS":{"bB":[]},"c1":{"cu":[]},"fq":{"cu":[]},"fr":{"cu":[]},"ht":{"cu":[]},"hr":{"cu":[]},"d2":{"cu":[]},"ho":{"T":[]},"b3":{"L":["1","2"],"mZ":["1","2"],"G":["1","2"],"L.K":"1","L.V":"2"},"a5":{"x":["1"],"l":["1"],"l.E":"1"},"c6":{"V":["1"]},"aw":{"x":["1"],"l":["1"],"l.E":"1"},"a9":{"V":["1"]},"R":{"x":["E<1,2>"],"l":["E<1,2>"],"l.E":"E<1,2>"},"e7":{"V":["E<1,2>"]},"e4":{"b3":["1","2"],"L":["1","2"],"mZ":["1","2"],"G":["1","2"],"L.K":"1","L.V":"2"},"ds":{"b9":[]},"dt":{"b9":[]},"du":{"b9":[]},"de":{"c8":[],"N":[],"Q":[]},"c8":{"N":[],"Q":[]},"ee":{"N":[]},"h3":{"N":[],"Q":[]},"aj":{"aQ":["1"],"N":[]},"ec":{"D":["p"],"aj":["p"],"y":["p"],"aQ":["p"],"x":["p"],"N":[],"l":["p"],"Z":["p"]},"ed":{"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"]},"eb":{"j8":[],"D":["p"],"aj":["p"],"y":["p"],"aQ":["p"],"x":["p"],"N":[],"l":["p"],"Z":["p"],"Q":[],"D.E":"p","Z.E":"p"},"h4":{"D":["p"],"aj":["p"],"y":["p"],"aQ":["p"],"x":["p"],"N":[],"l":["p"],"Z":["p"],"Q":[],"D.E":"p","Z.E":"p"},"h5":{"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"],"Q":[],"D.E":"f","Z.E":"f"},"h6":{"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"],"Q":[],"D.E":"f","Z.E":"f"},"h7":{"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"],"Q":[],"D.E":"f","Z.E":"f"},"h8":{"n6":[],"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"],"Q":[],"D.E":"f","Z.E":"f"},"h9":{"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"],"Q":[],"D.E":"f","Z.E":"f"},"ef":{"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"],"Q":[],"D.E":"f","Z.E":"f"},"eg":{"hu":[],"D":["f"],"aj":["f"],"y":["f"],"aQ":["f"],"x":["f"],"N":[],"l":["f"],"Z":["f"],"Q":[],"D.E":"f","Z.E":"f"},"hR":{"T":[]},"eT":{"bT":[],"T":[]},"aV":{"V":["1"]},"bE":{"l":["1"],"l.E":"1"},"ao":{"T":[]},"eB":{"hO":["1"]},"a4":{"b2":["1"]},"f3":{"oR":[]},"i3":{"f3":[],"oR":[]},"eG":{"L":["1","2"],"G":["1","2"]},"eI":{"eG":["1","2"],"L":["1","2"],"G":["1","2"],"L.K":"1","L.V":"2"},"cQ":{"x":["1"],"l":["1"],"l.E":"1"},"eH":{"V":["1"]},"b8":{"bR":["1"],"oh":["1"],"cb":["1"],"x":["1"],"l":["1"]},"cT":{"V":["1"]},"D":{"y":["1"],"x":["1"],"l":["1"]},"L":{"G":["1","2"]},"eK":{"x":["2"],"l":["2"],"l.E":"2"},"eL":{"V":["2"]},"dd":{"G":["1","2"]},"ce":{"dy":["1","2"],"dd":["1","2"],"eY":["1","2"],"G":["1","2"]},"bR":{"cb":["1"],"x":["1"],"l":["1"]},"eR":{"bR":["1"],"cb":["1"],"x":["1"],"l":["1"]},"ev":{"bR":["1"],"i9":["1"],"cb":["1"],"x":["1"],"l":["1"]},"hV":{"L":["k","@"],"G":["k","@"],"L.K":"k","L.V":"@"},"hW":{"a6":["k"],"x":["k"],"l":["k"],"a6.E":"k","l.E":"k"},"fj":{"cq":["y<f>","k"]},"fF":{"cq":["k","y<f>"]},"e5":{"T":[]},"fZ":{"T":[]},"fY":{"cq":["A?","k"]},"hB":{"cq":["k","y<f>"]},"cr":{"aE":["cr"]},"p":{"at":[],"aE":["at"]},"f":{"at":[],"aE":["at"]},"y":{"x":["1"],"l":["1"]},"at":{"aE":["at"]},"cb":{"x":["1"],"l":["1"]},"k":{"aE":["k"],"ol":[]},"hQ":{"C":[]},"fg":{"T":[]},"bT":{"T":[]},"bh":{"T":[]},"dg":{"T":[]},"fO":{"T":[]},"ew":{"T":[]},"hv":{"T":[]},"dk":{"T":[]},"fu":{"T":[]},"ha":{"T":[]},"es":{"T":[]},"i7":{"bB":[]},"as":{"rN":[]},"f_":{"hy":[]},"i4":{"hy":[]},"hP":{"hy":[]},"hU":{"n3":[]},"dr":{"n3":[]},"hj":{"C":[]},"bk":{"bP":[]},"cc":{"bP":[]},"c7":{"bP":[]},"c4":{"bP":[]},"hb":{"bP":[]},"cx":{"C":[]},"ff":{"C":[]},"bV":{"C":[]},"fE":{"C":[]},"ft":{"C":[]},"fB":{"C":[]},"cG":{"C":[]},"d9":{"C":[]},"bH":{"C":[]},"hm":{"C":[]},"dY":{"C":[]},"dh":{"C":[]},"he":{"C":[]},"em":{"rE":[]},"eJ":{"aR":[]},"i1":{"rD":[]},"hS":{"r3":[]},"aI":{"aE":["aI"]},"c0":{"aE":["c0"]},"da":{"C":[]},"fl":{"rC":[]},"hg":{"kt":[]},"i2":{"ca":[]},"hK":{"kt":[]},"ia":{"ca":[]},"fK":{"C":[]},"dV":{"C":[]},"fL":{"C":[]},"fM":{"C":[]},"cw":{"C":[]},"dW":{"C":[]},"cI":{"C":[]},"dn":{"C":[]},"fp":{"C":[]},"fA":{"qN":[]},"dx":{"C":[]},"ak":{"C":[]},"fk":{"C":[]},"dN":{"C":[]},"fx":{"C":[]},"fz":{"C":[]},"ck":{"jp":[]},"hJ":{"r5":[]},"b1":{"C":[]},"cv":{"C":[]},"ct":{"C":[]},"c2":{"C":[]},"c3":{"C":[]},"en":{"C":[]},"cF":{"C":[]},"aJ":{"C":[]},"ay":{"C":[]},"fQ":{"C":[]},"cO":{"C":[]},"b6":{"C":[]},"aF":{"C":[]},"aS":{"C":[]},"aT":{"C":[]},"cf":{"C":[]},"bD":{"C":[]},"i0":{"rH":[]},"ra":{"y":["f"],"x":["f"],"l":["f"]},"hu":{"y":["f"],"x":["f"],"l":["f"]},"rR":{"y":["f"],"x":["f"],"l":["f"]},"r8":{"y":["f"],"x":["f"],"l":["f"]},"n6":{"y":["f"],"x":["f"],"l":["f"]},"r9":{"y":["f"],"x":["f"],"l":["f"]},"rQ":{"y":["f"],"x":["f"],"l":["f"]},"j8":{"y":["p"],"x":["p"],"l":["p"]},"r2":{"y":["p"],"x":["p"],"l":["p"]}}'))
A.tu(v.typeUniverse,JSON.parse('{"dp":1,"f4":2,"aj":1,"eR":1,"eZ":1,"fw":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",g:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ah
return{e:s("bg"),u:s("ao"),f5:s("fi"),kp:s("fm"),bP:s("aE<@>"),gY:s("dP"),p:s("ap<k,k>"),v:s("ap<k,f>"),lq:s("d5<k>"),ml:s("cr"),lD:s("aF"),gt:s("x<@>"),no:s("b1"),L:s("aP"),Q:s("T"),B:s("j8"),Z:s("cu"),mj:s("b2<W>"),h:s("jp"),bU:s("c3"),lv:s("fN<A>"),dp:s("l<dP>"),bq:s("l<k>"),id:s("l<p>"),e7:s("l<@>"),fm:s("l<f>"),od:s("o<bg>"),ag:s("o<fD>"),r:s("o<aP>"),iw:s("o<b2<~>>"),mc:s("o<fI>"),l2:s("o<jp>"),aW:s("o<bj>"),oX:s("o<vC<A>>"),og:s("o<e_>"),jj:s("o<c4>"),W:s("o<N>"),b1:s("o<h_>"),cs:s("o<aH>"),ic:s("o<G<k,A>>"),hq:s("o<G<k,k>>"),bV:s("o<G<k,@>>"),kS:s("o<h1>"),mm:s("o<cC>"),dg:s("o<bk>"),hJ:s("o<b5>"),de:s("o<cD>"),bz:s("o<bx>"),aN:s("o<cE>"),fR:s("o<+(f,k)>"),a3:s("o<+(p,p,p,p)>"),o5:s("o<kt>"),c:s("o<ca>"),oZ:s("o<em>"),U:s("o<bQ>"),c8:s("o<bz>"),bH:s("o<aR>"),kl:s("o<ar>"),Y:s("o<bA>"),b2:s("o<dj>"),ao:s("o<ag<c0>>"),mX:s("o<ag<aI>>"),jn:s("o<cJ>"),s:s("o<k>"),aA:s("o<hs>"),hL:s("o<K>"),cC:s("o<j>"),cF:s("o<ey>"),bl:s("o<bX>"),ah:s("o<b7>"),cJ:s("o<az>"),jX:s("o<ch>"),dz:s("o<ci<e9>>"),jk:s("o<ci<ea>>"),fS:s("o<ci<bz>>"),mQ:s("o<ci<tn>>"),df:s("o<r>"),n:s("o<p>"),x:s("o<@>"),t:s("o<f>"),kC:s("o<N?>"),dM:s("o<A?>"),T:s("e2"),m:s("N"),d4:s("N()"),dY:s("bI"),dX:s("aQ<@>"),bY:s("y<aP>"),_:s("y<bj>"),l_:s("y<G<k,k>>"),O:s("y<b5>"),b3:s("y<bx>"),jz:s("y<+(f,k)>"),ge:s("y<+(p,p,p,p)>"),io:s("y<bA>"),a:s("y<k>"),iD:s("y<ey>"),ee:s("y<bX>"),eU:s("y<b7>"),cu:s("y<eF>"),j:s("y<@>"),I:s("y<f>"),mK:s("e8"),q:s("E<k,k>"),d7:s("E<@,@>"),iI:s("E<f,@>"),f7:s("G<k,jp>"),iE:s("G<k,b5>"),G:s("G<k,k>"),oP:s("G<k,r>"),b:s("G<k,@>"),f:s("G<@,@>"),d8:s("G<f,cL>"),c_:s("G<f,cM>"),gz:s("G<k,y<+(p,p,p,p)>>"),kz:s("G<aT,y<b7>>"),iu:s("G<f,G<k,k>>"),dD:s("a3<k,k?>"),fP:s("c7"),l0:s("bk"),eb:s("de"),P:s("W"),K:s("A"),nL:s("aI"),A:s("b5"),D:s("bx"),gm:s("cE"),ku:s("ej"),lZ:s("vF"),aK:s("+()"),iL:s("+(k,N)"),cW:s("+(p,p,p,p)"),ks:s("ca"),mn:s("by<c4,bz>"),kk:s("by<c7,e9>"),ll:s("by<bk,ea>"),ox:s("by<cc,tn>"),J:s("bQ"),p9:s("bz"),os:s("aR"),k:s("ar"),k8:s("bA"),C:s("cb<k>"),nO:s("cb<f>"),m9:s("ay"),gC:s("aJ"),ad:s("dj"),E:s("ag<c0>"),R:s("ag<aI>"),l:s("bB"),fO:s("cJ"),dB:s("ak"),N:s("k"),lu:s("cc"),aJ:s("Q"),do:s("bT"),cx:s("cK"),ph:s("ce<k,k>"),mL:s("hx"),jJ:s("hy"),b9:s("K"),mz:s("j"),g:s("aK"),nq:s("aS"),kM:s("aT"),bR:s("cL"),ey:s("cM"),mv:s("bX"),kX:s("b7"),cq:s("aL"),bn:s("H<aF>"),ns:s("H<b1>"),hr:s("H<ay>"),am:s("H<aJ>"),nn:s("H<k>"),cB:s("H<aS>"),na:s("H<aT>"),lS:s("bm<k>"),hE:s("az"),fH:s("eF"),d:s("a4<@>"),mp:s("eI<A?,A?>"),hZ:s("hY"),fg:s("ch"),ln:s("hZ"),fw:s("i_"),hX:s("i5"),fJ:s("bE<aR>"),jg:s("f1"),fL:s("f2"),y:s("r"),hg:s("r(aF)"),gl:s("r(b1)"),iW:s("r(A)"),aZ:s("r(ay)"),gw:s("r(aJ)"),gS:s("r(k)"),bQ:s("r(aS)"),nw:s("r(aT)"),i:s("p"),z:s("@"),mY:s("@()"),mq:s("@(A)"),ng:s("@(A,bB)"),S:s("f"),gK:s("b2<W>?"),mU:s("N?"),lH:s("y<@>?"),X:s("A?"),w:s("k?"),ej:s("k?(k)"),F:s("cP<@,@>?"),V:s("hX?"),fU:s("r?"),hK:s("r(di)?"),dA:s("p?"),aV:s("f?"),jh:s("at?"),jE:s("~()?"),as:s("~(aJ,ay)?"),ov:s("~(k)?"),bZ:s("~(f)?"),o:s("at"),H:s("~"),M:s("~()"),lc:s("~(k,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cx=J.fR.prototype
B.a=J.o.prototype
B.c=J.e1.prototype
B.d=J.cy.prototype
B.b=J.cz.prototype
B.cy=J.bI.prototype
B.cz=J.e3.prototype
B.t=A.eb.prototype
B.aO=A.eg.prototype
B.aP=J.hc.prototype
B.a9=J.cK.prototype
B.A=new A.en(1,"next")
B.be=new A.d1(B.A,!0,!1,null)
B.bf=new A.fk(0,"add")
B.bg=new A.dN(0,"zero")
B.bh=new A.dN(1,"one")
B.S=new A.iF()
B.ed=new A.iH()
B.bi=new A.fj()
B.aB=new A.e6(0,0,0)
B.cC=new A.e6(1,1,1)
B.cQ=s([],A.ah("o<vE>"))
B.cR=s([],A.ah("o<vG>"))
B.ae=new A.ja()
B.av=new A.fL(1,"linear")
B.aw=new A.fM(0,"clampToEdge")
B.bj=new A.jr()
B.af=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bk=function() {
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
B.bp=function(getTagFallback) {
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
B.bl=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bo=function(hooks) {
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
B.bn=function(hooks) {
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
B.bm=function(hooks) {
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
B.ag=function(hooks) { return hooks; }

B.p=new A.fY()
B.ee=new A.jV()
B.ec=new A.ff(0,"opaque")
B.bq=new A.e9()
B.br=new A.A()
B.bs=new A.ha()
B.ef=new A.kj()
B.ah=new A.kk()
B.el=new A.hj(0,"safe")
B.L={}
B.f=new A.d5(B.L,0,t.lq)
B.eg=new A.kq()
B.ai=new A.kr()
B.eh=new A.ft(1,"srgb")
B.ei=new A.fB(1,"errorsOnly")
B.bt=new A.kE()
B.d9=new A.hm(0,"rgba8")
B.G=new A.kM()
B.bu=new A.bA()
B.N=new A.b6(1,"gradeLUT")
B.bv=new A.bA()
B.bw=new A.kP()
B.bx=new A.kR()
B.h=new A.kU()
B.C=new A.K(0,0,0)
B.u=new A.lb()
B.aj=new A.hB()
B.dD=new A.bV(0,"position")
B.dJ=new A.bW(B.dD,0,3)
B.dE=new A.bV(1,"normal")
B.dK=new A.bW(B.dE,3,3)
B.dF=new A.bV(2,"color")
B.dL=new A.bW(B.dF,6,4)
B.dG=new A.bV(4,"alpha")
B.dM=new A.bW(B.dG,10,1)
B.dH=new A.bV(5,"uv0")
B.dN=new A.bW(B.dH,11,2)
B.dI=new A.bV(6,"legacyMaterialEffect")
B.dO=new A.bW(B.dI,13,1)
B.Y=s([B.dJ,B.dK,B.dL,B.dM,B.dN,B.dO],A.ah("o<bW>"))
B.by=new A.li()
B.ak=new A.hU()
B.m=new A.i3()
B.H=new A.i7()
B.bz=new A.fp(1,"colorAndDepth")
B.bA=new A.fx(1,"back")
B.bB=new A.fz(0,"less")
B.I=new A.aF(0,"open")
B.al=new A.aF(1,"chain")
B.am=new A.aF(2,"throughDoor")
B.an=new A.aF(3,"letterbox")
B.y=new A.aF(4,"ignore")
B.ej=new A.fE(0,"opaque")
B.ao=new A.b1(0,"compliance")
B.bC=new A.d6(B.ao)
B.ap=new A.b1(1,"rupture")
B.bD=new A.d6(B.ap)
B.aq=new A.b1(2,"synchronisation")
B.bE=new A.d6(B.aq)
B.i=new A.c2(0,"north")
B.q=new A.c2(1,"east")
B.k=new A.c2(2,"south")
B.z=new A.c2(3,"west")
B.bF=new A.ct(0,"mantle")
B.bG=new A.ct(1,"portal")
B.bI=new A.ct(3,"none")
B.bJ=new A.d8(B.bI,null)
B.bH=new A.ct(2,"window")
B.bK=new A.d8(B.bH,"the shutter")
B.bL=new A.F("saved mantle history is malformed",null,null)
B.bM=new A.F("rupture elapsed time is malformed",null,null)
B.bN=new A.F("presentation keys must be strings",null,null)
B.ar=new A.F("saved mantle state is malformed",null,null)
B.bO=new A.F("inactive rupture has elapsed time",null,null)
B.bP=new A.F("saved difficulty state is malformed",null,null)
B.bQ=new A.F("saved house drift state is malformed",null,null)
B.bR=new A.F("saved sleep record is malformed",null,null)
B.bS=new A.F("saved day-loop sleepHistory must be a list",null,null)
B.bT=new A.F("event sequence must be non-negative",null,null)
B.bU=new A.F("saved window state is malformed",null,null)
B.bV=new A.F("save run and meta must be objects",null,null)
B.bW=new A.F("saved house state is malformed",null,null)
B.bX=new A.F("saved sleep record must be an object",null,null)
B.bY=new A.F("saved session run is malformed",null,null)
B.bZ=new A.F("save map keys must be strings",null,null)
B.c_=new A.F("saved day-loop state is malformed",null,null)
B.c0=new A.F("rupture extinguished mantle is unknown",null,null)
B.as=new A.F("saved portal state is malformed",null,null)
B.c1=new A.F("saved house state does not match this house",null,null)
B.c2=new A.F("presentation snapshot contains a non-finite number",null,null)
B.c3=new A.F("save contains a non-finite number",null,null)
B.c4=new A.F("text.json root must be an object",null,null)
B.c5=new A.F("event kind is empty",null,null)
B.c6=new A.F("saved session clock is malformed",null,null)
B.c7=new A.F("rupture mantle IDs are malformed",null,null)
B.c8=new A.F("saved sleep record has an unknown enum",null,null)
B.c9=new A.F("save root must be an object",null,null)
B.ca=new A.F("saved house overrides are malformed",null,null)
B.cb=new A.d9(0,"idle")
B.T=new A.d9(1,"active")
B.cc=new A.d9(2,"ended")
B.at=new A.da(0,"outside")
B.cd=new A.da(1,"intersects")
B.ce=new A.da(2,"inside")
B.cf=new A.cv(0,"timeAdvanced")
B.cg=new A.cv(1,"dayEndReached")
B.ch=new A.cv(4,"slept")
B.ci=new A.cv(5,"complianceFloorTripped")
B.cj=new A.dV(0,"vertex")
B.ck=new A.dV(1,"indices")
B.cl=new A.fK(0,"staticDraw")
B.e=new A.dW(0,"ready")
B.v=new A.dW(1,"lost")
B.cm=new A.cw(0,"color")
B.au=new A.cw(1,"colorAndGlow")
B.cn=new A.cw(2,"colorDepthGlow")
B.U=new A.cw(3,"depthOnly")
B.ax=new A.dY(4,"beforeWorld")
B.ay=new A.dY(9,"beforePresent")
B.az=new A.bH(0,"readBeforeWrite")
B.co=new A.bH(1,"duplicateWriter")
B.cp=new A.bH(5,"unversionedReadWrite")
B.cq=new A.bH(6,"invalidHistoryRead")
B.cr=new A.bH(7,"dependencyCycle")
B.cs=new A.bH(8,"missingCapability")
B.J=new A.c3(0,"player")
B.V=new A.c3(1,"inserted")
B.aA=new A.c3(2,"warden")
B.W=new A.cx(0,"wrongKind")
B.X=new A.cx(1,"staleGeneration")
B.ct=new A.cx(2,"doubleRelease")
B.K=new A.cx(3,"releasedResource")
B.cw=new A.fQ(1,"visitor")
B.cA=new A.jS(null)
B.cB=new A.jT(null)
B.aC=s([0,2,2,3],t.t)
B.cD=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity"],t.s)
B.cE=s(["webgl2-unavailable"],t.s)
B.l=s(["who","verb","object","place","time"],t.s)
B.cF=s([2,5,9,12,16,19],t.t)
B.cG=s([B.I,B.al,B.am,B.an,B.y],A.ah("o<aF>"))
B.cH=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims"],t.s)
B.D=new A.aT(0,"full")
B.aa=new A.aT(1,"compressed")
B.ab=new A.aT(2,"off")
B.aD=s([B.D,B.aa,B.ab],A.ah("o<aT>"))
B.cI=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.di=new A.aJ(0,"long")
B.b0=new A.aJ(1,"short")
B.aE=s([B.di,B.b0],A.ah("o<aJ>"))
B.o=new A.b6(0,"inactive")
B.aV=new A.b6(2,"affineWarp")
B.a3=new A.b6(3,"vertexSnap")
B.aW=new A.b6(4,"tapeGiveup")
B.a4=new A.b6(5,"portalFail")
B.B=new A.b6(6,"lightsOut")
B.aF=s([B.o,B.N,B.aV,B.a3,B.aW,B.a4,B.B],A.ah("o<b6>"))
B.cJ=s([B.J,B.V,B.aA],A.ah("o<c3>"))
B.cO=s([],t.cs)
B.cP=s([],t.bz)
B.cL=s([],t.c)
B.aG=s([],t.Y)
B.cK=s([],t.b2)
B.j=s([],t.s)
B.aH=s([],t.cF)
B.aI=s([],t.cJ)
B.cM=s([],t.t)
B.cN=s([],t.x)
B.cv=new A.dZ(15,"kitchen",-0.3,0)
B.cu=new A.dZ(19,"spare-room",0,0.3)
B.r=s([B.cv,B.cu],A.ah("o<dZ>"))
B.df=new A.ay(0,"bed")
B.dg=new A.ay(1,"chair")
B.dh=new A.ay(2,"floor")
B.aJ=s([B.df,B.dg,B.dh],A.ah("o<ay>"))
B.cS=s([B.i,B.q,B.k,B.z],A.ah("o<c2>"))
B.a5=new A.ak(0,"depthTest")
B.b1=new A.ak(1,"depthFunc")
B.a6=new A.ak(2,"depthWrite")
B.b4=new A.ak(3,"blendEnable")
B.b5=new A.ak(4,"blendFunc")
B.b6=new A.ak(5,"blendEquation")
B.a7=new A.ak(6,"cullEnable")
B.b7=new A.ak(7,"cullFace")
B.b8=new A.ak(8,"frontFace")
B.dj=new A.ak(9,"stencilEnable")
B.b2=new A.ak(10,"colorMask")
B.b3=new A.ak(11,"scissorEnable")
B.cT=s([B.a5,B.b1,B.a6,B.b4,B.b5,B.b6,B.a7,B.b7,B.b8,B.dj,B.b2,B.b3],A.ah("o<ak>"))
B.cU=s([1.4,2.8,4.2],t.n)
B.cV=s([B.ao,B.ap,B.aq],A.ah("o<b1>"))
B.cW=s(["webgl2"],t.s)
B.x=new A.aS(0,"waiting")
B.O=new A.aS(1,"atDoor")
B.P=new A.aS(2,"consulting")
B.Q=new A.aS(3,"resolved")
B.cX=s([B.x,B.O,B.P,B.Q],A.ah("o<aS>"))
B.d2={bluenoise:0,"lut-gothic":1,grime:2,glass:3,soft:4}
B.aK=new A.ap(B.d2,[2,3,4,5,6],t.v)
B.d3={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3}
B.cY=new A.ap(B.d3,["b201e5b993d49b5f4aaddeafe6f7eaa1708c1ca0","65daf38ff1d59cd0c358b0e143ed35cc4f9b269b","3.12.2","45ec8ddeeb3836a9419f1d3ed4d340f60e610615db671faa136c79cf675fdb29"],t.p)
B.aL=new A.ap(B.L,[],t.p)
B.aM=new A.ap(B.L,[],t.v)
B.cZ=new A.ap(B.L,[],A.ah("ap<@,@>"))
B.d4={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"step-above-0":14,"step-above-1":15,"step-above-2":16,"step-above-3":17}
B.aN=new A.ap(B.d4,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","sub","sub","sub","sub"],t.p)
B.d5={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.d_=new A.ap(B.d5,[0,1,2,3],t.v)
B.d6={uTex:0}
B.d0=new A.ap(B.d6,[0],t.v)
B.Z=new A.dU([B.N,1,B.aV,1.5,B.a3,1.5,B.aW,2,B.a4,2,B.B,4],A.ah("dU<b6,p>"))
B.d7=new A.hb(0,1,null)
B.ek=new A.he(0,"none")
B.M=new A.en(0,"legacy")
B.aQ=new A.cF(0,"constructed")
B.n=new A.cF(1,"ready")
B.a_=new A.cF(2,"lost")
B.aR=new A.cF(3,"disposed")
B.a0=new A.cG(0,"constructed")
B.d8=new A.cG(1,"initializing")
B.a1=new A.cG(2,"ready")
B.aS=new A.cG(3,"contextLost")
B.a2=new A.dh(0,"read")
B.aT=new A.dh(1,"write")
B.w=new A.dh(2,"historyRead")
B.aU=new A.bQ(B.G,B.aT)
B.da=new A.cH(null,"save storage unavailable")
B.db=new A.cH(null,"save could not be recovered")
B.dc=new A.cH(null,null)
B.d1={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8}
B.dd=new A.d5(B.d1,9,t.lq)
B.aZ=new A.cI(2,"link")
B.de=new A.er(B.aZ,"gl.createProgram() returned null")
B.aX=new A.cI(0,"vertex")
B.aY=new A.cI(1,"fragment")
B.b_=new A.cI(3,"validation")
B.dk=A.bf("vx")
B.dl=A.bf("vy")
B.dm=A.bf("j8")
B.dn=A.bf("r2")
B.dp=A.bf("r8")
B.dq=A.bf("r9")
B.dr=A.bf("ra")
B.ds=A.bf("N")
B.dt=A.bf("A")
B.du=A.bf("n6")
B.dv=A.bf("rQ")
B.dw=A.bf("rR")
B.dx=A.bf("hu")
B.dy=new A.dn(0,"float1")
B.b9=new A.dn(2,"float3")
B.a8=new A.dn(3,"mat4")
B.dz=new A.lh(!1)
B.dA=new A.K(0,0,1)
B.dB=new A.K(1/0,1/0,1/0)
B.dC=new A.K(-1/0,-1/0,-1/0)
B.dP=new A.cf(0,"visitorAnswered")
B.ba=new A.cf(1,"visitorIgnored")
B.dQ=new A.cf(2,"entryVerified")
B.dR=new A.cf(3,"entryContradicted")
B.dS=new A.cf(4,"exposureAccepted")
B.dU=new A.bD(1,"malformedDay")
B.dV=new A.bD(2,"malformedTier")
B.bb=new A.bD(3,"missingTierLines")
B.ac=new A.bD(6,"invalidPhase")
B.e0=new A.aU(B.ac,"The active visit cannot be chosen.")
B.e3=new A.aL(B.e0)
B.dY=new A.aU(B.ac,"The active visit has no line to advance.")
B.e4=new A.aL(B.dY)
B.dX=new A.bD(5,"noActiveVisit")
B.dZ=new A.aU(B.dX,"There is no active visit.")
B.bc=new A.aL(B.dZ)
B.e_=new A.aU(B.ac,"A visit is already active.")
B.e5=new A.aL(B.e_)
B.dW=new A.bD(4,"noArrival")
B.e2=new A.aU(B.dW,"The authored arrival is missing.")
B.e6=new A.aL(B.e2)
B.dT=new A.bD(0,"missingCorpus")
B.e1=new A.aU(B.dT,"The authored visitor corpus is empty.")
B.e7=new A.aL(B.e1)
B.bd=new A.cO(1,"exact")
B.ad=new A.cO(2,"partial")
B.R=new A.cO(3,"contradiction")
B.e8=new A.cO(0,"skipped")
B.e9=new A.cN(B.e8,B.f)
B.ea=new A.cN(B.ad,B.f)
B.E=new A.dx(0,"empty")
B.eb=new A.dx(1,"cpuReady")
B.F=new A.dx(4,"released")})();(function staticFields(){$.lP=null
$.b_=A.i([],A.ah("o<A>"))
$.om=null
$.nV=null
$.nU=null
$.pT=null
$.pO=null
$.pX=null
$.mp=null
$.mw=null
$.nJ=null
$.lV=A.i([],A.ah("o<y<A>?>"))
$.dE=null
$.f8=null
$.f9=null
$.nt=!1
$.a1=B.m
$.oA=""
$.oB=null
$.ow=null
$.ke=null
$.aW=A.X()
$.dC=A.X()
$.nw=null
$.a2=A.X()
$.bb=A.X()
$.aX=A.X()
$.pd=A.X()
$.dF=null
$.ab=A.X()
$.no=null
$.f6=A.X()
$.S=A.X()
$.nj=A.X()
$.nq=null
$.f7=null
$.nk=!1
$.nv=!1
$.pt=!1
$.nu=0
$.m4=0
$.pN=!1
$.pk="booting"
$.bF=0
$.cW=0
$.aY="hall"
$.f5=A.X()
$.dA=A.X()
$.bn=A.X()
$.aM=null
$.dB=A.X()
$.id=A.X()
$.pe=A.X()
$.pc=A.X()
$.al=A.X()
$.ie=A.X()
$.ic=A.X()
$.ni=A.X()
$.am=A.X()
$.ib=A.X()
$.nh=A.X()
$.ml=A.a_(t.S)
$.cl=A.i([],t.s)
$.np=null
$.pJ=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"vA","q3",()=>A.pS("_$dart_dartClosure"))
s($,"vz","dL",()=>A.pS("_$dart_dartClosure_dartJSInterop"))
s($,"w_","ql",()=>A.i([new J.fT()],A.ah("o<eq>")))
s($,"vI","q5",()=>A.bU(A.ld({
toString:function(){return"$receiver$"}})))
s($,"vJ","q6",()=>A.bU(A.ld({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"vK","q7",()=>A.bU(A.ld(null)))
s($,"vL","q8",()=>A.bU(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"vO","qb",()=>A.bU(A.ld(void 0)))
s($,"vP","qc",()=>A.bU(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"vN","qa",()=>A.bU(A.ox(null)))
s($,"vM","q9",()=>A.bU(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"vR","qe",()=>A.bU(A.ox(void 0)))
s($,"vQ","qd",()=>A.bU(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"vS","nN",()=>A.t9())
s($,"vW","qi",()=>A.rn(4096))
s($,"vU","qg",()=>new A.m2().$0())
s($,"vV","qh",()=>new A.m1().$0())
s($,"vT","qf",()=>new Int8Array(A.cV(A.i([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"vY","ip",()=>A.io(B.dt))
s($,"vB","q4",()=>A.ro(A.cV(A.i([255,255,255,255],t.t))))
s($,"w0","qm",()=>A.hC(0,1,0))
s($,"w3","ir",()=>{var q=$.ow
if(q==null){A.ik()
A.ik()
A.ik()
A.ik()
A.ik()
q=$.ow=new A.l5()}return q})
s($,"vX","qj",()=>new A.iG())
r($,"nC","dM",()=>A.hC(0,0,0))
r($,"nx","qk",()=>A.hC(0,0,0))
r($,"nE","mT",()=>A.hC(0,0,0))
s($,"vZ","iq",()=>new A.j9(A.hC(0,0,0)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.c8,ArrayBuffer:A.de,ArrayBufferView:A.ee,DataView:A.h3,Float32Array:A.eb,Float64Array:A.h4,Int16Array:A.h5,Int32Array:A.h6,Int8Array:A.h7,Uint16Array:A.h8,Uint32Array:A.h9,Uint8ClampedArray:A.ef,CanvasPixelArray:A.ef,Uint8Array:A.eg})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aj.$nativeSuperclassTag="ArrayBufferView"
A.eM.$nativeSuperclassTag="ArrayBufferView"
A.eN.$nativeSuperclassTag="ArrayBufferView"
A.ec.$nativeSuperclassTag="ArrayBufferView"
A.eO.$nativeSuperclassTag="ArrayBufferView"
A.eP.$nativeSuperclassTag="ArrayBufferView"
A.ed.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$2$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.mx
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()