(self._S=self._S||[]).push((function(){var Da={};
function Ea(a){function n(b,h){return b<h?-1:b>h?1:b>=h?0:NaN}function f(b){1===b.length&&(b=I(b));return{left:function(h,e,q,k){null==q&&(q=0);null==k&&(k=h.length);for(;q<k;){var d=q+k>>>1;0>b(h[d],e)?q=d+1:k=d}return q},right:function(h,e,q,k){null==q&&(q=0);null==k&&(k=h.length);for(;q<k;){var d=q+k>>>1;0<b(h[d],e)?k=d:q=d+1}return q}}}function I(b){return function(h,e){return n(b(h),e)}}function C(b){return null===b?NaN:+b}function W(b,h){var e=b.length,q=0,k,d,a=0,f=-1,m=0;if(null==h)for(;++f<
e;)isNaN(k=C(b[f]))||(d=k-q,q+=d/++m,a+=d*(k-q));else for(;++f<e;)isNaN(k=C(h(b[f],f,b)))||(d=k-q,q+=d/++m,a+=d*(k-q));if(1<m)return a/(m-1)}function F(b,h){return(b=W(b,h))?Math.sqrt(b):b}function B(b,h){var e=-1,q=b.length,k,d,a;if(null==h){for(;++e<q;)if(null!=(d=b[e])&&d>=d){k=a=d;break}for(;++e<q;)null!=(d=b[e])&&(k>d&&(k=d),a<d&&(a=d))}else{for(;++e<q;)if(null!=(d=h(b[e],e,b))&&d>=d){k=a=d;break}for(;++e<q;)null!=(d=h(b[e],e,b))&&(k>d&&(k=d),a<d&&(a=d))}return[k,a]}function m(b){return function(){return b}}
function u(b){return b}function ca(b,h,e){b=+b;h=+h;e=2>(k=arguments.length)?(h=b,b=0,1):3>k?1:+e;for(var a=-1,k=Math.max(0,Math.ceil((h-b)/e))|0,d=Array(k);++a<k;)d[a]=b+a*e;return d}function J(b,a,e){e=da(b,a,e);return ca(Math.ceil(b/e)*e,Math.floor(a/e)*e+e/2,e)}function da(b,a,e){var h=Math.abs(a-b)/Math.max(0,e);e=Math.pow(10,Math.floor(Math.log(h)/Math.LN10));h/=e;h>=X?e*=10:h>=la?e*=5:h>=ma&&(e*=2);return a<b?-e:e}function ea(b){return Math.ceil(Math.log(b.length)/Math.LN2)+1}function y(b,
a,e){null==e&&(e=C);if(h=b.length){if(0>=(a=+a)||2>h)return+e(b[0],0,b);if(1<=a)return+e(b[h-1],h-1,b);var h;a*=h-1;h=Math.floor(a);var k=+e(b[h],h,b);b=+e(b[h+1],h+1,b);return k+(b-k)*(a-h)}}function L(b,a){var e=-1,h=b.length,k,d;if(null==a){for(;++e<h;)if(null!=(d=b[e])&&d>=d){k=d;break}for(;++e<h;)null!=(d=b[e])&&k>d&&(k=d)}else{for(;++e<h;)if(null!=(d=a(b[e],e,b))&&d>=d){k=d;break}for(;++e<h;)null!=(d=a(b[e],e,b))&&k>d&&(k=d)}return k}function O(b){if(!(d=b.length))return[];for(var a=-1,e=L(b,
va),q=Array(e);++a<e;)for(var k=-1,d,f=q[a]=Array(d);++k<d;)f[k]=b[k][a];return q}function va(b){return b.length}var R=f(n),S=R.right,R=R.left,P=Array.prototype,M=P.slice,Z=P.map,X=Math.sqrt(50),la=Math.sqrt(10),ma=Math.sqrt(2);a.Aa=S;a.Ca=S;a.Ba=R;a.za=n;a.Da=f;a.Wa=function(b,a){return a<b?-1:a>b?1:a>=b?0:NaN};a.Xa=F;a.Ya=B;a.ab=function(){function b(b){var d,k=b.length,h,f=Array(k);for(d=0;d<k;++d)f[d]=a(b[d],d,b);d=e(f);var m=d[0],n=d[1],u=q(f,m,n);Array.isArray(u)||(u=J(m,n,u));for(var F=u.length;u[0]<=
m;)u.shift(),--F;for(;u[F-1]>=n;)u.pop(),--F;var B=Array(F+1);for(d=0;d<=F;++d)h=B[d]=[],h.ja=0<d?u[d-1]:m,h.ka=d<F?u[d]:n;for(d=0;d<k;++d)h=f[d],m<=h&&h<=n&&B[S(u,h,0,F)].push(b[d]);return B}var a=u,e=B,q=ea;b.value=function(e){return arguments.length?(a="function"===typeof e?e:m(e),b):a};b.wa=function(a){return arguments.length?(e="function"===typeof a?a:m([a[0],a[1]]),b):e};b.eb=function(a){return arguments.length?(q="function"===typeof a?a:Array.isArray(a)?m(M.call(a)):m(a),b):q};return b};a.Ob=
function(b,a,e){b=Z.call(b,C).sort(n);return Math.ceil((e-a)/(2*(y(b,.75)-y(b,.25))*Math.pow(b.length,-1/3)))};a.Pb=function(b,a,e){return Math.ceil((e-a)/(3.5*F(b)*Math.pow(b.length,-1/3)))};a.Qb=ea;a.max=function(b,a){var e=-1,h=b.length,k,d;if(null==a){for(;++e<h;)if(null!=(d=b[e])&&d>=d){k=d;break}for(;++e<h;)null!=(d=b[e])&&d>k&&(k=d)}else{for(;++e<h;)if(null!=(d=a(b[e],e,b))&&d>=d){k=d;break}for(;++e<h;)null!=(d=a(b[e],e,b))&&d>k&&(k=d)}return k};a.kb=function(a,h){var b=0,f=a.length,k,d=-1,
m=f;if(null==h)for(;++d<f;)isNaN(k=C(a[d]))?--m:b+=k;else for(;++d<f;)isNaN(k=C(h(a[d],d,a)))?--m:b+=k;if(m)return b/m};a.lb=function(a,h){var b=[],f=a.length,k,d=-1;if(null==h)for(;++d<f;)isNaN(k=C(a[d]))||b.push(k);else for(;++d<f;)isNaN(k=C(h(a[d],d,a)))||b.push(k);return y(b.sort(n),.5)};a.mb=function(a){var b=a.length,e;e=-1;for(var f=0,k,d;++e<b;)f+=a[e].length;for(k=Array(f);0<=--b;)for(d=a[b],e=d.length;0<=--e;)k[--f]=d[e];return k};a.min=L;a.nb=function(a){for(var b=0,e=a.length-1,f=a[0],
k=Array(0>e?0:e);b<e;)k[b]=[f,f=a[++b]];return k};a.ob=function(a,h){for(var b=h.length,f=Array(b);b--;)f[b]=a[h[b]];return f};a.qb=y;a.tb=ca;a.ub=function(a,h){if(f=a.length){var b=0,f,k=0,d,m=a[k];for(h||(h=n);++b<f;)if(0>h(d=a[b],m)||0!==h(m,m))m=d,k=b;if(0===h(m,m))return k}};a.vb=function(a,h,e){e=(null==e?a.length:e)-(h=null==h?0:+h);for(var b,k;e;)k=Math.random()*e--|0,b=a[e+h],a[e+h]=a[k+h],a[k+h]=b;return a};a.Fb=function(a,h){var b=0,f=a.length,k,d=-1;if(null==h)for(;++d<f;){if(k=+a[d])b+=
k}else for(;++d<f;)if(k=+h(a[d],d,a))b+=k;return b};a.Sb=J;a.Rb=da;a.Tb=O;a.Ub=W;a.Vb=function(){return O(arguments)};Object.defineProperty(a,"__esModule",{value:!0})}"object"===typeof Da&&"undefined"!==typeof module?Ea(Da):"function"===typeof define&&define.la?define(["exports"],Ea):Ea(this.Y=this.Y||{});var Fa={};
function Ga(a){function n(){this.j=this.l=this.f=this.g=null;this.K=[]}function f(){return new n}var I=Math.PI,C=2*I,W=C-1E-6;n.prototype=f.prototype={constructor:n,moveTo:function(a,f){this.K.push("M",this.j=this.f=+a,",",this.l=this.g=+f)},closePath:function(){null!==this.f&&(this.f=this.j,this.g=this.l,this.K.push("Z"))},lineTo:function(a,f){this.K.push("L",this.f=+a,",",this.g=+f)},bezierCurveTo:function(a,f,m,u,n,C){this.K.push("C",+a,",",+f,",",+m,",",+u,",",this.f=+n,",",this.g=+C)},arc:function(a,
f,m,u,n,J){a=+a;f=+f;m=+m;var F=m*Math.cos(u),B=m*Math.sin(u),y=a+F,L=f+B,O=1^J;u=J?u-n:n-u;if(0>m)throw Error("negative radius: "+m);null===this.f?this.K.push("M",y,",",L):(1E-6<Math.abs(this.f-y)||1E-6<Math.abs(this.g-L))&&this.K.push("L",y,",",L);m&&(u>W?this.K.push("A",m,",",m,",0,1,",O,",",a-F,",",f-B,"A",m,",",m,",0,1,",O,",",this.f=y,",",this.g=L):(0>u&&(u=u%C+C),this.K.push("A",m,",",m,",0,",+(u>=I),",",O,",",this.f=a+m*Math.cos(n),",",this.g=f+m*Math.sin(n))))},rect:function(a,f,m,n){this.K.push("M",
this.j=this.f=+a,",",this.l=this.g=+f,"h",+m,"v",+n,"h",-m,"Z")},toString:function(){return this.K.join("")}};a.path=f;Object.defineProperty(a,"__esModule",{value:!0})}"object"===typeof Fa&&"undefined"!==typeof module?Ga(Fa):"function"===typeof define&&define.la?define(["exports"],Ga):Ga(this.Y=this.Y||{});var Na={};
function bb(a,n){function f(c){return function(){return c}}function I(c){return c.na}function C(c){return c.sa}function W(c){return c.ea}function F(c){return c.da}function B(c){return c&&c.ia}function m(c){return 1<=c?oa:-1>=c?-oa:Math.asin(c)}function u(c,l,a,b,d,e,f){var g=c-a,p=l-b;f=(f?e:-e)/Math.sqrt(g*g+p*p);var p=f*p,g=-f*g,G=c+p,r=l+g,h=a+p,k=b+g;a=(G+h)/2;b=(r+k)/2;l=h-G;c=k-r;f=l*l+c*c;e=d-e;var k=G*k-h*r,K=(0>c?-1:1)*Math.sqrt(Math.max(0,e*e*f-k*k)),G=(k*c-l*K)/f,r=(-k*l-c*K)/f,h=(k*c+
l*K)/f;l=(-k*l+c*K)/f;c=G-a;f=r-b;a=h-a;b=l-b;c*c+f*f>a*a+b*b&&(G=h,r=l);return{G:G,H:r,L:-p,M:-g,T:G*(d/e-1),U:r*(d/e-1)}}function ca(c){this.a=c}function J(c){return new ca(c)}function da(c){return c[0]}function ea(c){return c[1]}function y(){function c(c){var g,G=c.length,f,h=!1,K;null==d&&(k=e(K=n.path()));for(g=0;g<=G;++g)!(g<G&&b(f=c[g],g,c))===h&&((h=!h)?k.s():k.o()),h&&k.m(+l(f,g,c),+a(f,g,c));if(K)return k=null,K+""||null}var l=da,a=ea,b=f(!0),d=null,e=J,k=null;c.x=function(g){return arguments.length?
(l="function"===typeof g?g:f(+g),c):l};c.y=function(g){return arguments.length?(a="function"===typeof g?g:f(+g),c):a};c.ma=function(g){return arguments.length?(b="function"===typeof g?g:f(!!g),c):b};c.curve=function(g){return arguments.length?(e=g,null!=d&&(k=e(d)),c):e};c.context=function(g){return arguments.length?(null==g?d=k=null:k=e(d=g),c):d};return c}function L(){function c(c){var l,f,G,r=c.length,K,v=!1,fa,ga=Array(r),ha=Array(r);null==g&&(h=p(fa=n.path()));for(l=0;l<=r;++l){if(!(l<r&&k(K=
c[l],l,c))===v)if(v=!v)f=l,h.v(),h.s();else{h.o();h.s();for(G=l-1;G>=f;--G)h.m(ga[G],ha[G]);h.o();h.u()}v&&(ga[l]=+a(K,l,c),ha[l]=+d(K,l,c),h.m(b?+b(K,l,c):ga[l],e?+e(K,l,c):ha[l]))}if(fa)return h=null,fa+""||null}function l(){return y().ma(k).curve(p).context(g)}var a=da,b=null,d=f(0),e=ea,k=f(!0),g=null,p=J,h=null;c.x=function(g){return arguments.length?(a="function"===typeof g?g:f(+g),b=null,c):a};c.ja=function(g){return arguments.length?(a="function"===typeof g?g:f(+g),c):a};c.ka=function(g){return arguments.length?
(b=null==g?null:"function"===typeof g?g:f(+g),c):b};c.y=function(g){return arguments.length?(d="function"===typeof g?g:f(+g),e=null,c):d};c.ta=function(g){return arguments.length?(d="function"===typeof g?g:f(+g),c):d};c.ua=function(g){return arguments.length?(e=null==g?null:"function"===typeof g?g:f(+g),c):e};c.oa=c.qa=function(){return l().x(a).y(d)};c.ra=function(){return l().x(a).y(e)};c.pa=function(){return l().x(b).y(d)};c.ma=function(g){return arguments.length?(k="function"===typeof g?g:f(!!g),
c):k};c.curve=function(l){return arguments.length?(p=l,null!=g&&(h=p(g)),c):p};c.context=function(l){return arguments.length?(null==l?g=h=null:h=p(g=l),c):g};return c}function O(c,l){return l<c?-1:l>c?1:l>=c?0:NaN}function va(c){return c}function R(c){this.O=c}function S(c){function l(l){return new R(c(l))}l.O=c;return l}function P(c){var l=c.curve;c.angle=c.x;delete c.x;c.xa=c.y;delete c.y;c.curve=function(c){return arguments.length?l(S(c)):l().O};return c}function M(){}function Z(c,l,a){c.a.bezierCurveTo((2*
c.j+c.f)/3,(2*c.l+c.g)/3,(c.j+2*c.f)/3,(c.l+2*c.g)/3,(c.j+4*c.f+l)/6,(c.l+4*c.g+a)/6)}function X(c){this.a=c}function la(c){this.a=c}function ma(c){this.a=c}function b(c,l){this.fa=new X(c);this.ba=l}function h(c,l,a){c.a.bezierCurveTo(c.f+c.X*(c.h-c.j),c.g+c.X*(c.i-c.l),c.h+c.X*(c.f-l),c.i+c.X*(c.g-a),c.h,c.i)}function e(c,l){this.a=c;this.X=(1-l)/6}function q(c,l){this.a=c;this.X=(1-l)/6}function k(c,l){this.a=c;this.X=(1-l)/6}function d(c,l,a){var b=c.f,d=c.g,e=c.h,f=c.i;if(1E-12<c.N)var g=2*c.P+
3*c.N*c.C+c.w,h=3*c.N*(c.N+c.C),b=(b*g-c.j*c.w+c.h*c.P)/h,d=(d*g-c.l*c.w+c.i*c.P)/h;1E-12<c.D&&(g=2*c.I+3*c.D*c.C+c.w,h=3*c.D*(c.D+c.C),e=(e*g+c.f*c.I-l*c.w)/h,f=(f*g+c.g*c.I-a*c.w)/h);c.a.bezierCurveTo(b,d,e,f,c.h,c.i)}function Ha(c,l){this.a=c;this.Z=l}function Ia(c,l){this.a=c;this.Z=l}function Ja(c,l){this.a=c;this.Z=l}function Ka(c){this.a=c}function La(c,l,a){var b=c.f-c.j;l-=c.f;var d=(c.g-c.l)/(b||0>l&&-0);c=(a-c.g)/(l||0>b&&-0);return((0>d?-1:1)+(0>c?-1:1))*Math.min(Math.abs(d),Math.abs(c),
.5*Math.abs((d*l+c*b)/(b+l)))||0}function Ma(c,l){var a=c.f-c.j;return a?(3*(c.g-c.l)/a-l)/2:l}function wa(c,l,a){var b=c.j,d=c.f,e=c.g,f=(d-b)/3;c.a.bezierCurveTo(b+f,c.l+f*l,d-f,e-f*a,d,e)}function na(c){this.a=c}function Oa(c){this.a=new Pa(c)}function Pa(c){this.a=c}function Qa(c){this.a=c}function Ra(c){var l,a=c.length-1,b,d=Array(a),e=Array(a),f=Array(a);d[0]=0;e[0]=2;f[0]=c[0]+2*c[1];for(l=1;l<a-1;++l)d[l]=1,e[l]=4,f[l]=4*c[l]+2*c[l+1];d[a-1]=2;e[a-1]=7;f[a-1]=8*c[a-1]+c[a];for(l=1;l<a;++l)b=
d[l]/e[l-1],e[l]-=b,f[l]-=b*f[l-1];d[a-1]=f[a-1]/e[a-1];for(l=a-2;0<=l;--l)d[l]=(f[l]-d[l+1])/e[l];e[a-1]=(c[a]+d[a-1])/2;for(l=0;l<a-1;++l)e[l]=2*c[l+1]-d[l+1];return[d,e]}function pa(c,a){this.a=c;this.V=a}function aa(c,a){if(1<(e=c.length))for(var l=1,b,d=c[a[0]],e,f=d.length;l<e;++l){b=d;for(var d=c[a[l]],g=0;g<f;++g)d[g][1]+=d[g][0]=isNaN(b[g][1])?b[g][0]:b[g][1]}}function ba(c){c=c.length;for(var a=Array(c);0<=--c;)a[c]=c;return a}function cb(c,a){return c[a]}function Sa(c){var a=c.map(Ta);
return ba(c).sort(function(c,l){return a[c]-a[l]})}function Ta(c){for(var a=0,b=-1,d=c.length,e;++b<d;)if(e=+c[b][1])a+=e;return a}var U=Math.PI,oa=U/2,Q=2*U;ca.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.b=0},o:function(){(this.c||0!==this.c&&1===this.b)&&this.a.closePath();this.c=1-this.c},m:function(c,a){c=+c;a=+a;switch(this.b){case 0:this.b=1;this.c?this.a.lineTo(c,a):this.a.moveTo(c,a);break;case 1:this.b=2;default:this.a.lineTo(c,a)}}};var Ua=S(J);R.prototype=
{v:function(){this.O.v()},u:function(){this.O.u()},s:function(){this.O.s()},o:function(){this.O.o()},m:function(c,a){this.O.m(a*Math.sin(c),a*-Math.cos(c))}};var Aa={W:function(c,a){a=Math.sqrt(a/U);c.moveTo(a,0);c.arc(0,0,a,0,Q)}},Va={W:function(c,a){a=Math.sqrt(a/5)/2;c.moveTo(-3*a,-a);c.lineTo(-a,-a);c.lineTo(-a,-3*a);c.lineTo(a,-3*a);c.lineTo(a,-a);c.lineTo(3*a,-a);c.lineTo(3*a,a);c.lineTo(a,a);c.lineTo(a,3*a);c.lineTo(-a,3*a);c.lineTo(-a,a);c.lineTo(-3*a,a);c.closePath()}},Wa=Math.sqrt(1/3),
db=2*Wa,Xa={W:function(c,a){a=Math.sqrt(a/db);var l=a*Wa;c.moveTo(0,-a);c.lineTo(l,0);c.lineTo(0,a);c.lineTo(-l,0);c.closePath()}},ja=Math.sin(U/10)/Math.sin(7*U/10),eb=Math.sin(Q/10)*ja,fb=-Math.cos(Q/10)*ja,ja={W:function(c,a){a=Math.sqrt(.8908130915292852*a);var l=eb*a,b=fb*a;c.moveTo(0,-a);c.lineTo(l,b);for(var d=1;5>d;++d){var e=Q*d/5,f=Math.cos(e),e=Math.sin(e);c.lineTo(e*a,-f*a);c.lineTo(f*l-e*b,e*l+f*b)}c.closePath()}},Ya={W:function(c,a){a=Math.sqrt(a);var b=-a/2;c.rect(b,b,a,a)}},Ba=Math.sqrt(3),
Za={W:function(c,a){a=-Math.sqrt(a/(3*Ba));c.moveTo(0,2*a);c.lineTo(-Ba*a,-a);c.lineTo(Ba*a,-a);c.closePath()}},E=Math.sqrt(3)/2,Ca=1/Math.sqrt(12),gb=3*(Ca/2+1),$a={W:function(c,a){var b=Math.sqrt(a/gb);a=b/2;var d=b*Ca,b=b*Ca+b,l=-a;c.moveTo(a,d);c.lineTo(a,b);c.lineTo(l,b);c.lineTo(-.5*a-E*d,E*a+-.5*d);c.lineTo(-.5*a-E*b,E*a+-.5*b);c.lineTo(-.5*l-E*b,E*l+-.5*b);c.lineTo(-.5*a+E*d,-.5*d-E*a);c.lineTo(-.5*a+E*b,-.5*b-E*a);c.lineTo(-.5*l+E*b,-.5*b-E*l);c.closePath()}},hb=[Aa,Va,Xa,Ya,ja,Za,$a];X.prototype=
{v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.j=this.f=this.l=this.g=NaN;this.b=0},o:function(){switch(this.b){case 3:Z(this,this.f,this.g);case 2:this.a.lineTo(this.f,this.g)}(this.c||0!==this.c&&1===this.b)&&this.a.closePath();this.c=1-this.c},m:function(a,b){a=+a;b=+b;switch(this.b){case 0:this.b=1;this.c?this.a.lineTo(a,b):this.a.moveTo(a,b);break;case 1:this.b=2;break;case 2:this.b=3,this.a.lineTo((5*this.j+this.f)/6,(5*this.l+this.g)/6);default:Z(this,a,b)}this.j=this.f;
this.f=a;this.l=this.g;this.g=b}};la.prototype={v:M,u:M,s:function(){this.j=this.f=this.h=this.A=this.R=this.l=this.g=this.i=this.B=this.S=NaN;this.b=0},o:function(){switch(this.b){case 1:this.a.moveTo(this.h,this.i);this.a.closePath();break;case 2:this.a.moveTo((this.h+2*this.A)/3,(this.i+2*this.B)/3);this.a.lineTo((this.A+2*this.h)/3,(this.B+2*this.i)/3);this.a.closePath();break;case 3:this.m(this.h,this.i),this.m(this.A,this.B),this.m(this.R,this.S)}},m:function(a,b){a=+a;b=+b;switch(this.b){case 0:this.b=
1;this.h=a;this.i=b;break;case 1:this.b=2;this.A=a;this.B=b;break;case 2:this.b=3;this.R=a;this.S=b;this.a.moveTo((this.j+4*this.f+a)/6,(this.l+4*this.g+b)/6);break;default:Z(this,a,b)}this.j=this.f;this.f=a;this.l=this.g;this.g=b}};ma.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.j=this.f=this.l=this.g=NaN;this.b=0},o:function(){(this.c||0!==this.c&&3===this.b)&&this.a.closePath();this.c=1-this.c},m:function(a,b){a=+a;b=+b;switch(this.b){case 0:this.b=1;break;case 1:this.b=
2;break;case 2:this.b=3;var c=(this.j+4*this.f+a)/6,d=(this.l+4*this.g+b)/6;this.c?this.a.lineTo(c,d):this.a.moveTo(c,d);break;case 3:this.b=4;default:Z(this,a,b)}this.j=this.f;this.f=a;this.l=this.g;this.g=b}};b.prototype={s:function(){this.F=[];this.J=[];this.fa.s()},o:function(){var a=this.F,b=this.J,d=a.length-1;if(0<d)for(var e=a[0],f=b[0],h=a[d]-e,k=b[d]-f,g=-1,p;++g<=d;)p=g/d,this.fa.m(this.ba*a[g]+(1-this.ba)*(e+p*h),this.ba*b[g]+(1-this.ba)*(f+p*k));this.F=this.J=null;this.fa.o()},m:function(a,
b){this.F.push(+a);this.J.push(+b)}};var ib=function l(a){function d(d){return 1===a?new X(d):new b(d,a)}d.va=function(a){return l(+a)};return d}(.85);e.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.j=this.f=this.h=this.l=this.g=this.i=NaN;this.b=0},o:function(){switch(this.b){case 2:this.a.lineTo(this.h,this.i);break;case 3:h(this,this.f,this.g)}(this.c||0!==this.c&&1===this.b)&&this.a.closePath();this.c=1-this.c},m:function(a,b){a=+a;b=+b;switch(this.b){case 0:this.b=
1;this.c?this.a.lineTo(a,b):this.a.moveTo(a,b);break;case 1:this.b=2;this.f=a;this.g=b;break;case 2:this.b=3;default:h(this,a,b)}this.j=this.f;this.f=this.h;this.h=a;this.l=this.g;this.g=this.i;this.i=b}};var jb=function G(a){function b(b){return new e(b,a)}b.ha=function(a){return G(+a)};return b}(0);q.prototype={v:M,u:M,s:function(){this.j=this.f=this.h=this.A=this.R=this.$=this.l=this.g=this.i=this.B=this.S=this.aa=NaN;this.b=0},o:function(){switch(this.b){case 1:this.a.moveTo(this.A,this.B);this.a.closePath();
break;case 2:this.a.lineTo(this.A,this.B);this.a.closePath();break;case 3:this.m(this.A,this.B),this.m(this.R,this.S),this.m(this.$,this.aa)}},m:function(a,b){a=+a;b=+b;switch(this.b){case 0:this.b=1;this.A=a;this.B=b;break;case 1:this.b=2;this.a.moveTo(this.R=a,this.S=b);break;case 2:this.b=3;this.$=a;this.aa=b;break;default:h(this,a,b)}this.j=this.f;this.f=this.h;this.h=a;this.l=this.g;this.g=this.i;this.i=b}};var kb=function fa(a){function b(b){return new q(b,a)}b.ha=function(a){return fa(+a)};
return b}(0);k.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.j=this.f=this.h=this.l=this.g=this.i=NaN;this.b=0},o:function(){(this.c||0!==this.c&&3===this.b)&&this.a.closePath();this.c=1-this.c},m:function(a,b){a=+a;b=+b;switch(this.b){case 0:this.b=1;break;case 1:this.b=2;break;case 2:this.b=3;this.c?this.a.lineTo(this.h,this.i):this.a.moveTo(this.h,this.i);break;case 3:this.b=4;default:h(this,a,b)}this.j=this.f;this.f=this.h;this.h=a;this.l=this.g;this.g=this.i;this.i=
b}};var lb=function K(a){function b(g){return new k(g,a)}b.ha=function(a){return K(+a)};return b}(0);Ha.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.j=this.f=this.h=this.l=this.g=this.i=NaN;this.N=this.C=this.D=this.P=this.w=this.I=this.b=0},o:function(){switch(this.b){case 2:this.a.lineTo(this.h,this.i);break;case 3:this.m(this.h,this.i)}(this.c||0!==this.c&&1===this.b)&&this.a.closePath();this.c=1-this.c},m:function(a,b){a=+a;b=+b;if(this.b){var e=this.h-a,g=this.i-
b;this.D=Math.sqrt(this.I=Math.pow(e*e+g*g,this.Z))}switch(this.b){case 0:this.b=1;this.c?this.a.lineTo(a,b):this.a.moveTo(a,b);break;case 1:this.b=2;break;case 2:this.b=3;default:d(this,a,b)}this.N=this.C;this.C=this.D;this.P=this.w;this.w=this.I;this.j=this.f;this.f=this.h;this.h=a;this.l=this.g;this.g=this.i;this.i=b}};var mb=function ga(a){function g(g){return a?new Ha(g,a):new e(g,0)}g.ga=function(a){return ga(+a)};return g}(.5);Ia.prototype={v:M,u:M,s:function(){this.j=this.f=this.h=this.A=
this.R=this.$=this.l=this.g=this.i=this.B=this.S=this.aa=NaN;this.N=this.C=this.D=this.P=this.w=this.I=this.b=0},o:function(){switch(this.b){case 1:this.a.moveTo(this.A,this.B);this.a.closePath();break;case 2:this.a.lineTo(this.A,this.B);this.a.closePath();break;case 3:this.m(this.A,this.B),this.m(this.R,this.S),this.m(this.$,this.aa)}},m:function(a,b){a=+a;b=+b;if(this.b){var g=this.h-a,e=this.i-b;this.D=Math.sqrt(this.I=Math.pow(g*g+e*e,this.Z))}switch(this.b){case 0:this.b=1;this.A=a;this.B=b;
break;case 1:this.b=2;this.a.moveTo(this.R=a,this.S=b);break;case 2:this.b=3;this.$=a;this.aa=b;break;default:d(this,a,b)}this.N=this.C;this.C=this.D;this.P=this.w;this.w=this.I;this.j=this.f;this.f=this.h;this.h=a;this.l=this.g;this.g=this.i;this.i=b}};var nb=function ha(a){function b(b){return a?new Ia(b,a):new q(b,0)}b.ga=function(a){return ha(+a)};return b}(.5);Ja.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.j=this.f=this.h=this.l=this.g=this.i=NaN;this.N=this.C=
this.D=this.P=this.w=this.I=this.b=0},o:function(){(this.c||0!==this.c&&3===this.b)&&this.a.closePath();this.c=1-this.c},m:function(a,b){a=+a;b=+b;if(this.b){var g=this.h-a,e=this.i-b;this.D=Math.sqrt(this.I=Math.pow(g*g+e*e,this.Z))}switch(this.b){case 0:this.b=1;break;case 1:this.b=2;break;case 2:this.b=3;this.c?this.a.lineTo(this.h,this.i):this.a.moveTo(this.h,this.i);break;case 3:this.b=4;default:d(this,a,b)}this.N=this.C;this.C=this.D;this.P=this.w;this.w=this.I;this.j=this.f;this.f=this.h;this.h=
a;this.l=this.g;this.g=this.i;this.i=b}};var ob=function g(a){function b(b){return a?new Ja(b,a):new k(b,0)}b.ga=function(a){return g(+a)};return b}(.5);Ka.prototype={v:M,u:M,s:function(){this.b=0},o:function(){this.b&&this.a.closePath()},m:function(a,b){a=+a;b=+b;this.b?this.a.lineTo(a,b):(this.b=1,this.a.moveTo(a,b))}};na.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.j=this.f=this.l=this.g=this.ca=NaN;this.b=0},o:function(){switch(this.b){case 2:this.a.lineTo(this.f,
this.g);break;case 3:wa(this,this.ca,Ma(this,this.ca))}(this.c||0!==this.c&&1===this.b)&&this.a.closePath();this.c=1-this.c},m:function(a,b){var g=NaN;a=+a;b=+b;if(a!==this.f||b!==this.g){switch(this.b){case 0:this.b=1;this.c?this.a.lineTo(a,b):this.a.moveTo(a,b);break;case 1:this.b=2;break;case 2:this.b=3;wa(this,Ma(this,g=La(this,a,b)),g);break;default:wa(this,this.ca,g=La(this,a,b))}this.j=this.f;this.f=a;this.l=this.g;this.g=b;this.ca=g}}};(Oa.prototype=Object.create(na.prototype)).m=function(a,
b){na.prototype.m.call(this,b,a)};Pa.prototype={moveTo:function(a,b){this.a.moveTo(b,a)},closePath:function(){this.a.closePath()},lineTo:function(a,b){this.a.lineTo(b,a)},bezierCurveTo:function(a,b,d,e,f,h){this.a.bezierCurveTo(b,a,e,d,h,f)}};Qa.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.F=[];this.J=[]},o:function(){var a=this.F,b=this.J,d=a.length;if(d)if(this.c?this.a.lineTo(a[0],b[0]):this.a.moveTo(a[0],b[0]),2===d)this.a.lineTo(a[1],b[1]);else for(var e=Ra(a),
f=Ra(b),h=0,k=1;k<d;++h,++k)this.a.bezierCurveTo(e[0][h],f[0][h],e[1][h],f[1][h],a[k],b[k]);(this.c||0!==this.c&&1===d)&&this.a.closePath();this.c=1-this.c;this.F=this.J=null},m:function(a,b){this.F.push(+a);this.J.push(+b)}};pa.prototype={v:function(){this.c=0},u:function(){this.c=NaN},s:function(){this.F=this.J=NaN;this.b=0},o:function(){0<this.V&&1>this.V&&2===this.b&&this.a.lineTo(this.F,this.J);(this.c||0!==this.c&&1===this.b)&&this.a.closePath();0<=this.c&&(this.V=1-this.V,this.c=1-this.c)},
m:function(a,b){a=+a;b=+b;switch(this.b){case 0:this.b=1;this.c?this.a.lineTo(a,b):this.a.moveTo(a,b);break;case 1:this.b=2;default:if(0>=this.V)this.a.lineTo(this.F,b),this.a.lineTo(a,b);else{var g=this.F*(1-this.V)+a*this.V;this.a.lineTo(g,this.J);this.a.lineTo(g,b)}}this.F=a;this.J=b}};var ab=Array.prototype.slice;a.arc=function(){function a(){var a,g,f=+b.apply(this,arguments),r=+d.apply(this,arguments),v=k.apply(this,arguments)-oa,p=q.apply(this,arguments)-oa,A=Math.abs(p-v),x=p>v;z||(z=a=n.path());
r<f&&(g=r,r=f,f=g);if(1E-12<r)if(A>Q-1E-12)z.moveTo(r*Math.cos(v),r*Math.sin(v)),z.arc(0,0,r,v,p,!x),1E-12<f&&(z.moveTo(f*Math.cos(p),f*Math.sin(p)),z.arc(0,0,f,p,v,x));else{var t=v,w=p;g=v;var ia=p,C=A,F=A,N=T.apply(this,arguments)/2,y=1E-12<N&&(h?+h.apply(this,arguments):Math.sqrt(f*f+r*r)),E=Math.min(Math.abs(r-f)/2,+e.apply(this,arguments)),D=E,H=E;if(1E-12<y){var B=m(y/f*Math.sin(N)),N=m(y/r*Math.sin(N));1E-12<(C-=2*B)?(B*=x?1:-1,g+=B,ia-=B):(C=0,g=ia=(v+p)/2);1E-12<(F-=2*N)?(N*=x?1:-1,t+=N,
w-=N):(F=0,t=w=(v+p)/2)}v=r*Math.cos(t);p=r*Math.sin(t);B=f*Math.cos(ia);N=f*Math.sin(ia);if(1E-12<E){var I=r*Math.cos(w),J=r*Math.sin(w),L=f*Math.cos(g),M=f*Math.sin(g);if(A<U){1E-12<C?(D=L-v,H=M-p,A=B-I,y=N-J,A=(A*(p-J)-y*(v-I))/(y*D-A*H),D=[v+A*D,p+A*H]):D=[B,N];var H=v-D[0],A=p-D[1],y=I-D[0],O=J-D[1],H=1/Math.sin(Math.acos((H*y+A*O)/(Math.sqrt(H*H+A*A)*Math.sqrt(y*y+O*O)))/2),A=Math.sqrt(D[0]*D[0]+D[1]*D[1]),D=Math.min(E,(f-A)/(H-1)),H=Math.min(E,(r-A)/(H+1))}}1E-12<F?1E-12<H?(t=u(L,M,v,p,r,H,
x),w=u(I,J,B,N,r,H,x),z.moveTo(t.G+t.L,t.H+t.M),H<E?z.arc(t.G,t.H,H,Math.atan2(t.M,t.L),Math.atan2(w.M,w.L),!x):(z.arc(t.G,t.H,H,Math.atan2(t.M,t.L),Math.atan2(t.U,t.T),!x),z.arc(0,0,r,Math.atan2(t.H+t.U,t.G+t.T),Math.atan2(w.H+w.U,w.G+w.T),!x),z.arc(w.G,w.H,H,Math.atan2(w.U,w.T),Math.atan2(w.M,w.L),!x))):(z.moveTo(v,p),z.arc(0,0,r,t,w,!x)):z.moveTo(v,p);1E-12<f&&1E-12<C?1E-12<D?(t=u(B,N,I,J,f,-D,x),w=u(v,p,L,M,f,-D,x),z.lineTo(t.G+t.L,t.H+t.M),D<E?z.arc(t.G,t.H,D,Math.atan2(t.M,t.L),Math.atan2(w.M,
w.L),!x):(z.arc(t.G,t.H,D,Math.atan2(t.M,t.L),Math.atan2(t.U,t.T),!x),z.arc(0,0,f,Math.atan2(t.H+t.U,t.G+t.T),Math.atan2(w.H+w.U,w.G+w.T),x),z.arc(w.G,w.H,D,Math.atan2(w.U,w.T),Math.atan2(w.M,w.L),!x))):z.arc(0,0,f,ia,g,x):z.lineTo(B,N)}else z.moveTo(0,0);z.closePath();if(a)return z=null,a+""||null}var b=I,d=C,e=f(0),h=null,k=W,q=F,T=B,z=null;a.ga=function(){var a=(+b.apply(this,arguments)+ +d.apply(this,arguments))/2,g=(+k.apply(this,arguments)+ +q.apply(this,arguments))/2-U/2;return[Math.cos(g)*
a,Math.sin(g)*a]};a.na=function(g){return arguments.length?(b="function"===typeof g?g:f(+g),a):b};a.sa=function(b){return arguments.length?(d="function"===typeof b?b:f(+b),a):d};a.ha=function(b){return arguments.length?(e="function"===typeof b?b:f(+b),a):e};a.wa=function(b){return arguments.length?(h=null==b?null:"function"===typeof b?b:f(+b),a):h};a.ea=function(b){return arguments.length?(k="function"===typeof b?b:f(+b),a):k};a.da=function(b){return arguments.length?(q="function"===typeof b?b:f(+b),
a):q};a.ia=function(b){return arguments.length?(T="function"===typeof b?b:f(+b),a):T};a.context=function(b){return arguments.length?(z=null==b?null:b,a):z};return a};a.ya=L;a.fb=y;a.pb=function(){function a(a){var g,f=a.length,r,p;r=0;var v=Array(f),A=Array(f),x=+h.apply(this,arguments);p=Math.min(Q,Math.max(-Q,k.apply(this,arguments)-x));var T,q=Math.min(Math.abs(p)/f,m.apply(this,arguments)),t=q*(0>p?-1:1),n;for(g=0;g<f;++g)0<(n=A[v[g]=g]=+b(a[g],g,a))&&(r+=n);null!=d?v.sort(function(a,b){return d(A[a],
A[b])}):null!=e&&v.sort(function(b,g){return e(a[b],a[g])});g=0;for(p=r?(p-f*t)/r:0;g<f;++g,x=T)r=v[g],n=A[r],T=x+(0<n?n*p:0)+t,A[r]={data:a[r],index:g,value:n,ea:x,da:T,ia:q};return A}var b=va,d=O,e=null,h=f(0),k=f(Q),m=f(0);a.value=function(g){return arguments.length?(b="function"===typeof g?g:f(+g),a):b};a.cb=function(b){return arguments.length?(d=b,e=null,a):d};a.sort=function(b){return arguments.length?(e=b,d=null,a):e};a.ea=function(b){return arguments.length?(h="function"===typeof b?b:f(+b),
a):h};a.da=function(b){return arguments.length?(k="function"===typeof b?b:f(+b),a):k};a.ia=function(b){return arguments.length?(m="function"===typeof b?b:f(+b),a):m};return a};a.rb=function(){var a=L().curve(Ua),b=a.curve,d=a.oa,e=a.pa,f=a.qa,h=a.ra;a.angle=a.x;delete a.x;a.ea=a.ja;delete a.ja;a.da=a.ka;delete a.ka;a.xa=a.y;delete a.y;a.na=a.ta;delete a.ta;a.sa=a.ua;delete a.ua;a.jb=function(){return P(d())};delete a.oa;a.gb=function(){return P(e())};delete a.pa;a.hb=function(){return P(f())};delete a.qa;
a.ib=function(){return P(h())};delete a.ra;a.curve=function(a){return arguments.length?b(S(a)):b().O};return a};a.sb=function(){return P(y().curve(Ua))};a.symbol=function(){function a(){var a;e||(e=a=n.path());b.apply(this,arguments).W(e,+d.apply(this,arguments));if(a)return e=null,a+""||null}var b=f(Aa),d=f(64),e=null;a.type=function(d){return arguments.length?(b="function"===typeof d?d:f(d),a):b};a.va=function(b){return arguments.length?(d="function"===typeof b?b:f(+b),a):d};a.context=function(b){return arguments.length?
(e=null==b?null:b,a):e};return a};a.Nb=hb;a.Gb=Aa;a.Hb=Va;a.Ib=Xa;a.Jb=Ya;a.Kb=ja;a.Lb=Za;a.Mb=$a;a.Fa=function(a){return new la(a)};a.Ga=function(a){return new ma(a)};a.Ea=function(a){return new X(a)};a.Ha=ib;a.Ja=kb;a.Ka=lb;a.Ia=jb;a.Ma=nb;a.Na=ob;a.La=mb;a.Pa=function(a){return new Ka(a)};a.Oa=J;a.Qa=function(a){return new na(a)};a.Ra=function(a){return new Oa(a)};a.Sa=function(a){return new Qa(a)};a.Ta=function(a){return new pa(a,.5)};a.Ua=function(a){return new pa(a,1)};a.Va=function(a){return new pa(a,
0)};a.stack=function(){function a(a){var f=b.apply(this,arguments),g,k=a.length,r=f.length,p=Array(r);for(g=0;g<r;++g){for(var v=f[g],m=p[g]=Array(k),x=0,n;x<k;++x)m[x]=n=[0,+h(a[x],v,x,a)],n.data=a[x];m.key=v}g=0;for(f=d(p);g<r;++g)p[f[g]].index=g;e(p,f);return p}var b=f([]),d=ba,e=aa,h=cb;a.Za=function(d){return arguments.length?(b="function"===typeof d?d:f(ab.call(d)),a):b};a.value=function(b){return arguments.length?(h="function"===typeof b?b:f(+b),a):h};a.bb=function(b){return arguments.length?
(d=null==b?ba:"function"===typeof b?b:f(ab.call(b)),a):d};a.$a=function(b){return arguments.length?(e=null==b?aa:b,a):e};return a};a.wb=function(a,b){if(0<(e=a.length)){for(var d,e,f=0,g=a[0].length,h;f<g;++f){for(h=d=0;d<e;++d)h+=a[d][f][1]||0;if(h)for(d=0;d<e;++d)a[d][f][1]/=h}aa(a,b)}};a.xb=aa;a.yb=function(a,b){if(0<(f=a.length)){for(var d=0,e=a[b[0]],f,g=e.length;d<g;++d){for(var h=0,k=0;h<f;++h)k+=a[h][d][1]||0;e[d][1]+=e[d][0]=-k/2}aa(a,b)}};a.zb=function(a,b){if(0<(h=a.length)&&0<(g=(f=a[b[0]]).length)){for(var d=
0,e=1,f,g,h;e<g;++e){for(var k=0,m=0,p=0;k<h;++k){for(var n=a[b[k]],q=n[e][1]||0,n=(q-(n[e-1][1]||0))/2,u=0;u<k;++u)var y=a[b[u]],n=n+((y[e][1]||0)-(y[e-1][1]||0));m+=q;p+=n*q}f[e-1][1]+=f[e-1][0]=d;m&&(d-=p/m)}f[e-1][1]+=f[e-1][0]=d;aa(a,b)}};a.Ab=Sa;a.Bb=function(a){return Sa(a).reverse()};a.Cb=function(a){var b=a.length,d,e=a.map(Ta),f=ba(a).sort(function(a,b){return e[b]-e[a]}),g=0,h=0,k=[],m=[];for(a=0;a<b;++a)d=f[a],g<h?(g+=e[d],k.push(d)):(h+=e[d],m.push(d));return m.reverse().concat(k)};a.Db=
ba;a.Eb=function(a){return ba(a).reverse()};Object.defineProperty(a,"__esModule",{value:!0})}"object"===typeof Na&&"undefined"!==typeof module?bb(Na,Fa):"function"===typeof define&&define.la?define(["exports","d3-path"],bb):bb(this.Y=this.Y||{},this.Y);}));
//# sourceMappingURL=lib-other-module-root.js.map

